/**
 * Speero Chatbot Widget
 * Embeddable chatbot for speero.com
 * Version: 1.1.0
 */

(function() {
  'use strict';

  const SpeeroChatbot = {
    config: {
      apiEndpoint: '',
      contactUrl: 'https://speero.com/#main-form',
      theme: 'auto',
      position: 'bottom-right',
      showDisclaimer: true
    },

    state: {
      isOpen: false,
      messages: [],
      isLoading: false
    },

    init: function(userConfig) {
      this.config = { ...this.config, ...userConfig };
      this.loadMarkedLibrary();
      this.createWidget();
      this.attachEventListeners();
      this.loadMessageHistory();
    },

    loadMarkedLibrary: function() {
      if (window.marked) return;
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/marked/marked.min.js';
      script.onload = () => {
        // Configure marked to be safe
        window.marked.use({
          breaks: true,
          gfm: true
        });
      };
      document.head.appendChild(script);
    },

    createWidget: function() {
      const widgetHTML = `
        <div id="speero-chatbot-container" class="speero-chatbot-${this.config.position}">
          <!-- Chat Bubble -->
          <button id="speero-chatbot-bubble" class="speero-chatbot-bubble" aria-label="Open chat">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </button>

          <!-- Chat Window -->
          <div id="speero-chatbot-window" class="speero-chatbot-window" style="display: none;">
            <!-- Header -->
            <div class="speero-chatbot-header">
              <div class="speero-chatbot-header-content">
                <h3>Speero Assistant</h3>
                <p>Ask us anything about our services</p>
              </div>
              <button id="speero-chatbot-close-btn" class="speero-chatbot-close-btn" aria-label="Close chat">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <!-- Messages -->
            <div id="speero-chatbot-messages" class="speero-chatbot-messages">
              <div class="speero-chatbot-message speero-chatbot-bot-message">
                <div class="speero-chatbot-message-content">
                  <div class="speero-chatbot-message-text">👋 Hi! I'm the Speero AI assistant. I can help you learn about our experimentation services, case studies, and expertise. How can I help you today?</div>
                </div>
              </div>
            </div>

            <!-- Input Area -->
            <div class="speero-chatbot-input-area">
              <input 
                type="text" 
                id="speero-chatbot-input" 
                class="speero-chatbot-input" 
                placeholder="Ask a question..."
                maxlength="1000"
              />
              <button id="speero-chatbot-send-btn" class="speero-chatbot-send-btn" aria-label="Send message">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>

            <!-- Disclaimer -->
            ${this.config.showDisclaimer ? `
              <div class="speero-chatbot-disclaimer">
                <small>${this.config.disclaimerText || 'AI-powered assistant. Responses may not be 100% accurate. Contact us for official guidance.'}</small>
              </div>
            ` : ''}
          </div>
        </div>
      `;

      document.body.insertAdjacentHTML('beforeend', widgetHTML);
    },

    attachEventListeners: function() {
      const bubble = document.getElementById('speero-chatbot-bubble');
      const closeBtn = document.getElementById('speero-chatbot-close-btn');
      const sendBtn = document.getElementById('speero-chatbot-send-btn');
      const input = document.getElementById('speero-chatbot-input');

      bubble.addEventListener('click', () => this.toggleChat());
      closeBtn.addEventListener('click', () => this.toggleChat());
      sendBtn.addEventListener('click', () => this.sendMessage());
      
      input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          this.sendMessage();
        }
      });
    },

    toggleChat: function() {
      const window = document.getElementById('speero-chatbot-window');
      const bubble = document.getElementById('speero-chatbot-bubble');
      
      this.state.isOpen = !this.state.isOpen;
      
      if (this.state.isOpen) {
        window.style.display = 'flex';
        bubble.style.display = 'none';
        document.getElementById('speero-chatbot-input').focus();
      } else {
        window.style.display = 'none';
        bubble.style.display = 'flex';
      }
    },

    sendMessage: async function() {
      const input = document.getElementById('speero-chatbot-input');
      const query = input.value.trim();

      if (!query || this.state.isLoading) return;

      // Add user message to UI
      this.addMessage(query, 'user');
      input.value = '';

      // Show loading
      this.state.isLoading = true;
      const loadingId = this.addLoadingMessage();

      try {
        // Build conversation history for context
        const conversationHistory = this.state.messages
          .filter(msg => msg.sender === 'user' || msg.sender === 'bot')
          .map(msg => ({
            role: msg.sender === 'user' ? 'user' : 'assistant',
            content: msg.text
          }));

        // Call API with conversation history
        const response = await fetch(`${this.config.apiEndpoint}/chat`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ 
            query,
            conversation_history: conversationHistory
          })
        });

        if (!response.ok) {
          throw new Error('Failed to get response');
        }

        const data = await response.json();

        // Remove loading message
        this.removeMessage(loadingId);

        // Add bot response
        this.addMessage(data.response, 'bot', data.sources, data.show_contact_cta ? {
          url: data.contact_url,
          message: data.contact_message
        } : null);

      } catch (error) {
        console.error('Chat error:', error);
        this.removeMessage(loadingId);
        this.addMessage('Sorry, I encountered an error. Please try again or contact us directly.', 'bot');
      } finally {
        this.state.isLoading = false;
      }
    },

    addMessage: function(text, sender, sources = [], contactCTA = null) {
      const messagesContainer = document.getElementById('speero-chatbot-messages');
      const messageId = 'msg-' + Date.now();
      
      let sourcesHTML = '';
      if (sources && sources.length > 0) {
        sourcesHTML = `
          <div class="speero-chatbot-sources">
            <p><strong>Useful Links:</strong></p>
            <ul>
              ${sources.map(s => `<li><a href="${s.url}" target="_blank" rel="noopener">${s.title}</a></li>`).join('')}
            </ul>
          </div>
        `;
      }

      let ctaHTML = '';
      if (contactCTA) {
        ctaHTML = `
          <div class="speero-chatbot-cta">
            <a href="${contactCTA.url}" target="_blank" class="speero-chatbot-cta-btn">
              ${contactCTA.message} →
            </a>
          </div>
        `;
      }

      const messageHTML = `
        <div id="${messageId}" class="speero-chatbot-message speero-chatbot-${sender}-message">
          <div class="speero-chatbot-message-content">
            <div class="speero-chatbot-message-text">${this.parseMarkdown(text)}</div>
            ${sourcesHTML}
            ${ctaHTML}
          </div>
        </div>
      `;

      messagesContainer.insertAdjacentHTML('beforeend', messageHTML);
      this.scrollToBottom();
      
      // Save to history
      this.state.messages.push({ text, sender, sources, contactCTA, timestamp: Date.now() });
      this.saveMessageHistory();

      return messageId;
    },

    addLoadingMessage: function() {
      const messagesContainer = document.getElementById('speero-chatbot-messages');
      const loadingId = 'loading-' + Date.now();
      
      const loadingHTML = `
        <div id="${loadingId}" class="speero-chatbot-message speero-chatbot-bot-message">
          <div class="speero-chatbot-message-content">
            <div class="speero-chatbot-loading">
              <span></span><span></span><span></span>
            </div>
          </div>
        </div>
      `;

      messagesContainer.insertAdjacentHTML('beforeend', loadingHTML);
      this.scrollToBottom();
      return loadingId;
    },

    removeMessage: function(messageId) {
      const message = document.getElementById(messageId);
      if (message) message.remove();
    },

    scrollToBottom: function() {
      const messagesContainer = document.getElementById('speero-chatbot-messages');
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    },

    parseMarkdown: function(text) {
      if (window.marked) {
        // Use marked.js if available
        return window.marked.parse(text);
      }

      // Fallback: Simple parser if marked isn't loaded yet
      
      // 1. Sanitize first (prevents XSS)
      let html = this.escapeHTML(text);

      // 2. Headers (### Heading)
      html = html.replace(/^### (.*$)/gm, '<h3>$1</h3>');
      html = html.replace(/^## (.*$)/gm, '<h2>$1</h2>');

      // 3. Bold (**text**)
      html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

      // 4. Italic (*text*)
      html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

      // 5. Links ([text](url))
      html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');

      // 6. Lists
      // Transform "- item" into bullet points with breaks
      html = html.replace(/(?:^|\n)- (.*)/g, '<br>• $1');
      
      // Transform numbered lists "1. Item" -> "<br>1. Item" to ensure spacing
      html = html.replace(/(?:^|\n)(\d+\.) (.*)/g, '<br>$1 $2');
      
      // 7. Paragraphs
      // Double newlines become paragraph breaks
      html = html.replace(/\n\n/g, '<br><br>');
      // Remaining single newlines become line breaks
      html = html.replace(/\n/g, '<br>');

      return html;
    },

    escapeHTML: function(text) {
      const div = document.createElement('div');
      div.textContent = text;
      return div.innerHTML;
    },

    saveMessageHistory: function() {
      try {
        sessionStorage.setItem('speero-chat-history', JSON.stringify(this.state.messages));
      } catch (e) {
        console.warn('Failed to save chat history:', e);
      }
    },

    loadMessageHistory: function() {
      try {
        const history = sessionStorage.getItem('speero-chat-history');
        if (history) {
          this.state.messages = JSON.parse(history);
        }
      } catch (e) {
        console.warn('Failed to load chat history:', e);
      }
    }
  };

  // Expose globally
  window.SpeeroChatbot = SpeeroChatbot;
})();
