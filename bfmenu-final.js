(function () {
  var speeroMenuTest = {
    waitForElementQueryMobile: 'modal-root',
    waitForElementQueryDesktop: '___gatsby',
    targetQueryMobile: '#modal-root div[data-test="sideNav"] ul',
    targetQueryDesktop: '#___gatsby>div>div>div>nav>div>div:last-of-type',

    menuHTML:
      '<div class="w-nav-overlay speero-menu-overlay" data-wf-ignore="" id="w-nav-overlay-0">' +
      '<nav role="navigation" class="nav-menu-2 w-nav-menu speero-menu speero-menu-desktop" data-nav-menu-open>' +
      '<div data-hover="1" data-delay="0" class="dropdown-2 w-dropdown" style=""><div class="dropdown-toggle-4 w-dropdown-toggle" id="w-dropdown-toggle-0" aria-controls="w-dropdown-list-0" aria-haspopup="menu" aria-expanded="false" role="button" tabindex="0"><div class="nav-icon w-icon-dropdown-toggle" aria-hidden="true"></div><div class="dropdown-text">Products</div></div><nav class="dropdown-list-3 products w-dropdown-list" id="w-dropdown-list-0" aria-labelledby="w-dropdown-toggle-0"><div class="nav-dropdown-grid"><div class="nav-dropdown-left-column"><div class="nav-category">Products</div><a href="https://www.butterflynetwork.com/iq" class="nav-dropdown-lb w-inline-block" tabindex="0"><img src="https://assets-global.website-files.com/5a0cbe08f1138d000147a9d4/601c19a0af12a953a1c98818_NavIcons_iQultrasound.svg" loading="lazy" alt="" class="nav-large-icon"><div class="nav-lb-text-block"><div class="nav-lb-text">iQ+ Ultrasound</div><div class="nav-lb-subtext">The world’s first single-probe, whole-body ultrasound.</div></div></a><a href="https://www.butterflynetwork.com/enterprise" class="nav-dropdown-lb w-inline-block" tabindex="0"><img src="https://assets-global.website-files.com/5a0cbe08f1138d000147a9d4/601c19a03c9eba92f799996a_NavIcons_Enterprise.svg" loading="lazy" alt="" class="nav-large-icon"><div class="nav-lb-text-block"><div class="nav-lb-text">Butterfly Enterprise</div><div class="nav-lb-subtext">Complete point-of-care ultrasound operating system.</div></div></a><a href="https://www.butterflynetwork.com/transform" class="nav-dropdown-lb w-inline-block" tabindex="0"><img src="https://assets-global.website-files.com/5a0cbe08f1138d000147a9d4/60a795558ce4930bb9e268e6_NavIcons_Transform.svg" loading="lazy" alt="" class="nav-large-icon"><div class="nav-lb-text-block"><div class="nav-lb-text">Butterfly Transform™</div><div class="nav-lb-subtext">Complete solution for Critical Access and Community Hospitals.</div></div></a><a href="https://www.butterflynetwork.com/vet/iq-vet" class="nav-dropdown-lb w-inline-block" tabindex="0"><img src="https://assets-global.website-files.com/5a0cbe08f1138d000147a9d4/601c19a015e0991206e2a37e_NavIcons_iQvet.svg" loading="lazy" alt="" class="nav-large-icon"><div class="nav-lb-text-block"><div class="nav-lb-text">iQ Vet</div><div class="nav-lb-subtext">Veterinary ultrasound for all animals, big and small.</div></div></a></div><div class="nav-dropdown-right-column"><div class="nav-category">Featured</div><a href="https://www.butterflynetwork.com/whats-new-ios" class="nav-lb-small w-inline-block" tabindex="0"><img src="https://assets-global.website-files.com/5a0cbe08f1138d000147a9d4/603625339277065d923d5826_Dark_WhatsNew_Small.svg" loading="lazy" alt="" class="nav-small-icon"><div class="nav-dropdown-small-copy-block"><div class="nav-lb-text">What\'s new</div><div class="nav-lb-subtext">See the latest product updates and feature enhancements.</div></div></a><a href="https://www.butterflynetwork.com/teleguidance" class="nav-lb-small w-inline-block" tabindex="0"><img src="https://assets-global.website-files.com/5a0cbe08f1138d000147a9d4/601c199ed85b2bc1e0e8fede_NavIcons_Featured-TG.svg" loading="lazy" alt="" class="nav-small-icon"><div class="nav-dropdown-small-copy-block"><div class="nav-lb-text">TeleGuidance™</div><div class="nav-lb-subtext">The world’s first integrated ultrasound telemedicine platform.</div></div></a></div><div id="w-node-_67e8f4a6-70d4-ea38-8e9e-4e49d2ce0886-671b61f7" class="nav-secondary-container speero-custom-node"><a href="https://www.butterflynetwork.com/contact" class="nav-secondary-lb w-inline-block" tabindex="0"><div>Contact us</div></a><div class="nav-secondary-line"></div><a href="https://support.butterflynetwork.com/hc/en-us" class="nav-secondary-lb w-inline-block" tabindex="0"><div>Support</div></a></div></div></nav></div><div data-hover="1" data-delay="0" class="dropdown-2 w-dropdown" style=""><div class="dropdown-toggle-4 w-dropdown-toggle" id="w-dropdown-toggle-1" aria-controls="w-dropdown-list-1" aria-haspopup="menu" aria-expanded="false" role="button" tabindex="0"><div class="nav-icon w-icon-dropdown-toggle" aria-hidden="true"></div><div class="dropdown-text">Specialty</div></div><nav class="dropdown-list-3 specialty w-dropdown-list" id="w-dropdown-list-1" aria-labelledby="w-dropdown-toggle-1"><div class="nav-dropdown-grid specialty"><div id="w-node-b5583c5b-408b-d5cd-3018-1aecdb0f9120-671b61f7" class="nav-dropdown-left-column speero-custom-node"><div class="nav-lb-grid"><div><a href="https://www.butterflynetwork.com/anesthesia-ultrasound" class="specialty-nav-link w-inline-block" tabindex="0"><div class="nav-lb-text nopb">Anesthesiology</div></a><a href="https://www.butterflynetwork.com/cardiology-ultrasound" class="specialty-nav-link w-inline-block" tabindex="0"><div class="nav-lb-text nopb">Cardiology</div></a><a href="https://www.butterflynetwork.com/critical-care-ultrasound" class="specialty-nav-link w-inline-block" tabindex="0"><div class="nav-lb-text nopb">Critical Care</div></a><a href="https://www.butterflynetwork.com/covid-19" class="specialty-nav-link w-inline-block" tabindex="0"><div class="nav-lb-text nopb">COVID-19</div></a><a href="https://www.butterflynetwork.com/emergency-ultrasound" class="specialty-nav-link w-inline-block" tabindex="0"><div class="nav-lb-text nopb">Emergency Medicine</div></a><a href="https://www.butterflynetwork.com/global-health" class="specialty-nav-link w-inline-block" tabindex="0"><div class="nav-lb-text nopb">Global Health</div></a></div><div><a href="https://www.butterflynetwork.com/hospitalists-ultrasound" class="specialty-nav-link w-inline-block" tabindex="0"><div class="nav-lb-text nopb">Hospital Medicine</div></a><a href="https://www.butterflynetwork.com/msk-ultrasound" class="specialty-nav-link w-inline-block" tabindex="0"><div class="nav-lb-text nopb">MSK</div></a><a href="https://www.butterflynetwork.com/nursing" class="specialty-nav-link w-inline-block" tabindex="0"><div class="nav-lb-text nopb">Nursing</div></a><a href="https://www.butterflynetwork.com/obgyn-ultrasound" class="specialty-nav-link w-inline-block" tabindex="0"><div class="nav-lb-text nopb">OB/GYN</div></a><a href="https://www.butterflynetwork.com/in-office-ultrasound" class="specialty-nav-link w-inline-block" tabindex="0"><div class="nav-lb-text nopb">Primary Care</div></a><a href="https://www.butterflynetwork.com/vet/iq-vet" class="specialty-nav-link w-inline-block" tabindex="0"><div class="nav-lb-text nopb">Veterinary</div></a></div></div></div><div class="nav-dropdown-right-column navhide"><div class="nav-category">Featured</div><a href="https://www.butterflynetwork.com/heart-health" class="nav-lb-small w-inline-block" tabindex="0"><img src="https://assets-global.website-files.com/5a0cbe08f1138d000147a9d4/60356ec81912e6524e3f16ee_Dark_HeartHealthSym_Small.svg" loading="lazy" alt="" class="nav-small-icon"><div class="nav-dropdown-small-copy-block"><div class="nav-lb-text">Heart Health Virtual Symposium</div><div class="nav-lb-subtext">February 25, 2pm PST | 5pm EST<br>Learn about the role of point-of-care ultrasound in cardiovascular disease management.</div></div></a></div><div id="w-node-b5583c5b-408b-d5cd-3018-1aecdb0f9159-671b61f7" class="nav-secondary-container speero-custom-node"><a href="https://www.butterflynetwork.com/contact" class="nav-secondary-lb w-inline-block" tabindex="0"><div>Contact us</div></a><div class="nav-secondary-line"></div><a href="https://support.butterflynetwork.com/hc/en-us" class="nav-secondary-lb w-inline-block" tabindex="0"><div>Support</div></a></div></div></nav></div><div data-hover="1" data-delay="0" class="dropdown-2 w-dropdown" style=""><div class="dropdown-toggle-4 w-dropdown-toggle" id="w-dropdown-toggle-2" aria-controls="w-dropdown-list-2" aria-haspopup="menu" aria-expanded="false" role="button" tabindex="0"><div class="nav-icon w-icon-dropdown-toggle" aria-hidden="true"></div><div class="dropdown-text">Role</div></div><nav class="dropdown-list-3 specialty w-dropdown-list" id="w-dropdown-list-2" aria-labelledby="w-dropdown-toggle-2"><div class="nav-dropdown-grid single"><div class="nav-dropdown-right-column"><a href="https://www.butterflynetwork.com/enterprise" class="nav-dropdown-lb singlelink w-inline-block" tabindex="0"><div class="nav-lb-text single">Enterprise</div></a><a href="https://www.butterflynetwork.com/government" class="nav-dropdown-lb singlelink w-inline-block" tabindex="0"><div class="nav-lb-text single">Government</div></a><a href="https://www.butterflynetwork.com/it-ultrasound" class="nav-dropdown-lb singlelink w-inline-block" tabindex="0"><div class="nav-lb-text single">IT</div></a><a href="https://www.butterflynetwork.com/ultrasound-medical-education" class="nav-dropdown-lb singlelink w-inline-block" tabindex="0"><div class="nav-lb-text single">Medical Education</div></a></div><div id="w-node-_13f716fd-9214-b38e-3954-91a22c607371-671b61f7" class="nav-secondary-container speero-custom-node"><a href="https://www.butterflynetwork.com/contact" class="nav-secondary-lb w-inline-block" tabindex="0"><div>Contact us</div></a><div class="nav-secondary-line"></div><a href="https://support.butterflynetwork.com/hc/en-us" class="nav-secondary-lb w-inline-block" tabindex="0"><div>Support</div></a></div></div></nav></div><a href="https://store.butterflynetwork.com/us/en/pricing" target="_blank" class="nav-link-3 w-nav-link speero-pricing-link">Pricing</a><div data-hover="1" data-delay="0" class="dropdown-2 w-dropdown" style=""><div class="dropdown-toggle-4 w-dropdown-toggle" id="w-dropdown-toggle-3" aria-controls="w-dropdown-list-3" aria-haspopup="menu" aria-expanded="false" role="button" tabindex="0"><div class="nav-icon w-icon-dropdown-toggle" aria-hidden="true"></div><div class="dropdown-text">Resources</div></div><nav class="dropdown-list-3 resources w-dropdown-list" id="w-dropdown-list-3" aria-labelledby="w-dropdown-toggle-3"><div class="nav-dropdown-grid"><div class="nav-dropdown-left-column"><div class="nav-category">Education</div><a href="https://www.butterflynetwork.com/education" class="nav-dropdown-lb w-inline-block" tabindex="0"><img src="https://assets-global.website-files.com/5a0cbe08f1138d000147a9d4/601c199ff8e1afb3d401a45c_NavIcons_Education.svg" loading="lazy" alt="" class="nav-large-icon"><div class="nav-lb-text-block"><div class="nav-lb-text">Education</div><div class="nav-lb-subtext">Our ultrasound education platform, taught by experts.</div></div></a><a href="https://www.butterflynetwork.com/evidence#case-study" class="nav-dropdown-lb w-inline-block" tabindex="0"><img src="https://assets-global.website-files.com/5a0cbe08f1138d000147a9d4/601c199f396a37cc19558694_NavIcons_CaseStudies.svg" loading="lazy" alt="" class="nav-large-icon"><div class="nav-lb-text-block"><div class="nav-lb-text">Case Studies</div><div class="nav-lb-subtext">Read first-hand experiences from your peers.</div></div></a><a href="https://www.butterflynetwork.com/clinical-specialty-category/anesthesiology" class="nav-dropdown-lb w-inline-block" tabindex="0"><img src="https://assets-global.website-files.com/5a0cbe08f1138d000147a9d4/601c199f7e581d144d7862c9_NavIcons_Clinicalimages.svg" loading="lazy" alt="" class="nav-large-icon"><div class="nav-lb-text-block"><div class="nav-lb-text">Clinical Images</div><div class="nav-lb-subtext">See scans from iQ+.</div></div></a><a href="https://www.butterflynetwork.com/covid-19" class="nav-dropdown-lb w-inline-block" tabindex="0"><img src="https://assets-global.website-files.com/5a0cbe08f1138d000147a9d4/601c199f5be6877740d0bf3c_NavIcons_COVID-19.svg" loading="lazy" alt="" class="nav-large-icon"><div class="nav-lb-text-block"><div class="nav-lb-text">COVID-19</div><div class="nav-lb-subtext">Learn about lung ultrasound’s critical role in the pandemic.</div></div></a><a href="https://www.butterflynetwork.com/evidence" class="nav-dropdown-lb w-inline-block" tabindex="0"><img src="https://assets-global.website-files.com/5a0cbe08f1138d000147a9d4/601c19a0c4c179c0674d0cba_NavIcons_Publications.svg" loading="lazy" alt="" class="nav-large-icon"><div class="nav-lb-text-block"><div class="nav-lb-text">Publications</div><div class="nav-lb-subtext">Read studies conducted with Butterfly iQ+.</div></div></a><a href="https://www.butterflynetwork.com/categories/webinars" class="nav-dropdown-lb w-inline-block" tabindex="0"><img src="https://assets-global.website-files.com/5a0cbe08f1138d000147a9d4/601c19a0bb6ffe94fcb3a72c_NavIcons_Webinars.svg" loading="lazy" alt="" class="nav-large-icon"><div class="nav-lb-text-block"><div class="nav-lb-text">Webinars</div><div class="nav-lb-subtext">Watch discussions led by a variety of specialists.</div></div></a></div><div class="nav-dropdown-right-column"><div class="nav-category">Support</div><a href="https://support.butterflynetwork.com/hc/articles/360028326031-Compatible-Devices" class="nav-lb-small single-icon w-inline-block" tabindex="0"><img src="https://assets-global.website-files.com/5a0cbe08f1138d000147a9d4/601c199f440868bd1291e911_NavIcons_Compatibility.svg" loading="lazy" alt="" class="nav-small-icon"><div class="nav-dropdown-small-copy-block"><div class="nav-lb-text single">Compatibility</div></div></a><a href="https://www.butterflynetwork.com/specs" class="nav-lb-small single-icon w-inline-block" tabindex="0"><img src="https://assets-global.website-files.com/5a0cbe08f1138d000147a9d4/603625b0d5031689bb695254_Dark_Specs_Small.svg" loading="lazy" alt="" class="nav-small-icon"><div class="nav-dropdown-small-copy-block"><div class="nav-lb-text single">Specs</div></div></a><a href="https://support.butterflynetwork.com/hc/articles/360029180312-How-to-Buy" class="nav-lb-small single-icon w-inline-block" tabindex="0"><img src="https://assets-global.website-files.com/5a0cbe08f1138d000147a9d4/601c199f4984187060296d72_NavIcons_HowtoPurchase.svg" loading="lazy" alt="" class="nav-small-icon"><div class="nav-dropdown-small-copy-block"><div class="nav-lb-text single">How to purchase</div></div></a><a href="https://support.butterflynetwork.com/hc/articles/360038322752-First-Time-Use" class="nav-lb-small single-icon w-inline-block" tabindex="0"><img src="https://assets-global.website-files.com/5a0cbe08f1138d000147a9d4/601c199eececc3162ac638b3_NavIcons_GetStarted.svg" loading="lazy" alt="" class="nav-small-icon"><div class="nav-dropdown-small-copy-block"><div class="nav-lb-text single">Get started</div></div></a></div><div id="w-node-d6635dc6-d983-81fe-5d8d-db7ed4cf3d3e-671b61f7" class="nav-secondary-container"><a href="https://www.butterflynetwork.com/contact" class="nav-secondary-lb w-inline-block" tabindex="0"><div>Contact us</div></a><div class="nav-secondary-line"></div><a href="https://support.butterflynetwork.com/hc/en-us" class="nav-secondary-lb w-inline-block" tabindex="0"><div>Support</div></a></div></div></nav></div><div data-hover="1" data-delay="0" class="dropdown-2 w-dropdown" style=""><div class="dropdown-toggle-4 w-dropdown-toggle" id="w-dropdown-toggle-4" aria-controls="w-dropdown-list-4" aria-haspopup="menu" aria-expanded="false" role="button" tabindex="0"><div class="nav-icon w-icon-dropdown-toggle" aria-hidden="true"></div><div class="dropdown-text">About us</div></div><nav class="dropdown-list-3 about w-dropdown-list" id="w-dropdown-list-4" aria-labelledby="w-dropdown-toggle-4"><div class="nav-dropdown-grid"><div class="nav-dropdown-left-column"><div class="nav-category">Company</div><a href="https://www.butterflynetwork.com/our-mission" class="nav-dropdown-lb w-inline-block" tabindex="0"><img src="https://assets-global.website-files.com/5a0cbe08f1138d000147a9d4/601c199e049e565a70bf8162_NavIcons_Mission.svg" loading="lazy" alt="" class="nav-large-icon"><div class="nav-lb-text-block"><div class="nav-lb-text">Mission</div><div class="nav-lb-subtext">Medical imaging for everyone.</div></div></a><a href="https://www.butterflynetwork.com/clinical-research" class="nav-dropdown-lb w-inline-block" tabindex="0"><img src="https://assets-global.website-files.com/5a0cbe08f1138d000147a9d4/601c199f1a65fba1ee62abef_NavIcons_Research.svg" loading="lazy" alt="" class="nav-large-icon"><div class="nav-lb-text-block"><div class="nav-lb-text">Research</div><div class="nav-lb-subtext">Become a clinical research partner.</div></div></a><a href="https://www.butterflynetwork.com/press" class="nav-dropdown-lb w-inline-block" tabindex="0"><img src="https://assets-global.website-files.com/5a0cbe08f1138d000147a9d4/601c199e7f027244926ed9cf_NavIcons_Press.svg" loading="lazy" alt="" class="nav-large-icon"><div class="nav-lb-text-block"><div class="nav-lb-text">Press</div><div class="nav-lb-subtext">Press coverage and releases.</div></div></a></div><div class="nav-dropdown-right-column"><div class="nav-category">Community</div><a href="http://ir.butterflynetwork.com/" target="_blank" class="nav-lb-small single-icon w-inline-block" tabindex="0"><img src="https://assets-global.website-files.com/5a0cbe08f1138d000147a9d4/601c199e498418e937296d71_NavIcons_Investors.svg" loading="lazy" alt="" class="nav-small-icon"><div class="nav-dropdown-small-copy-block"><div class="nav-lb-text single">Investors</div></div></a><a href="https://www.butterflynetwork.com/partner" class="nav-lb-small single-icon w-inline-block" tabindex="0"><img src="https://assets-global.website-files.com/5a0cbe08f1138d000147a9d4/601c199f049e561ec6bf8163_NavIcons_Partners.svg" loading="lazy" alt="" class="nav-small-icon"><div class="nav-dropdown-small-copy-block"><div class="nav-lb-text single">Partners</div></div></a><a href="https://www.butterflynetwork.com/careers" class="nav-lb-small single-icon w-inline-block" tabindex="0"><img src="https://assets-global.website-files.com/5a0cbe08f1138d000147a9d4/601c199e3f1149b783de2b32_NavIcons_Careers.svg" loading="lazy" alt="" class="nav-small-icon"><div class="nav-dropdown-small-copy-block"><div class="nav-lb-text single">Careers</div></div></a></div><div id="w-node-b157aa19-e8cb-001d-34cb-aee73a964291-671b61f7" class="nav-secondary-container"><a href="https://www.butterflynetwork.com/contact" class="nav-secondary-lb w-inline-block" tabindex="0"><div>Contact us</div></a><div class="nav-secondary-line"></div><a href="https://support.butterflynetwork.com/hc/en-us" class="nav-secondary-lb w-inline-block" tabindex="0"><div>Support</div></a></div></div>' +
      '</nav>' +
      '</div>' +
      '</nav>' +
      '</div>',

    addDeviceConstants: function () {
      if (window.innerWidth > 768) {
        this.waitForElementQuery = '#' + this.waitForElementQueryDesktop;
        this.targetQuery = this.targetQueryDesktop;
      } else {
        this.waitForElementQuery = '#' + this.waitForElementQueryMobile;
        this.targetQuery = this.targetQueryMobile;
      }
    },

    /**
     * test module entry function
     */

    init: function () {
      var self = this;
      this.addDeviceConstants();
      this.polling(
        self.waitForElementQuery,
        function () {
          self.classManager.addClass(document.body, 'speero-menu-test');
          self.addMenuObserver();
        },
        50,
        100
      );
    },

    /**
     * waits for the document to finish loading and for the given element to exist
     *
     * @param {string} element - The DOM node query string to wait for
     * @param {callBack} cb  - The callBack to execute after succesful polling
     * @param {number} timeout - Time in milliseconds between two polling iterations
     * @param {number} maxIterations  - The max iterations of polling
     * @returns void
     */

    polling: function (element, cb, timeout, maxIterations) {
      var self = this;
      maxIterations--;
      if (/interactive|complete/.test(document.readyState) && document.querySelector(element)) {
        cb();
      } else if (maxIterations > 0) {
        setTimeout(function () {
          self.polling(element, cb, timeout, maxIterations);
        }, timeout);
      }
    },

    //classlist polyfills for IE <9

    classManager: {
      /**
       * Method that checks whether cls is present in element object.
       * @param  {Object} ele DOM element which needs to be checked
       * @param  {Object} cls Classname is tested
       * @return {Boolean} True if cls is present, false otherwise.
       */
      hasClass: function (ele, cls) {
        return ele.getAttribute('class').indexOf(cls) > -1;
      },

      /**
       * Method that adds a class to given element.
       * @param  {Object} ele DOM element where class needs to be added
       * @param  {Object} cls Classname which is to be added
       * @return {null} nothing is returned.
       */
      addClass: function (ele, cls) {
        if (ele.classList) {
          ele.classList.add(cls);
        } else if (!hasClass(ele, cls)) {
          ele.setAttribute('class', ele.getAttribute('class') + ' ' + cls);
        }
      },

      /**
       * Method that does a check to ensure that class is removed from element.
       * @param  {Object} ele DOM element where class needs to be removed
       * @param  {Object} cls Classname which is to be removed
       * @return {null} Null nothing is returned.
       */
      removeClass: function (ele, cls) {
        if (ele.classList) {
          ele.classList.remove(cls);
        } else if (hasClass(ele, cls)) {
          ele.setAttribute('class', ele.getAttribute('class').replace(cls, ' '));
        }
      },
    },

    addMenuObserver: function () {
      var self = this;
      var menuObserver = new MutationObserver(function () {
        if (document.querySelector(self.targetQuery) && !document.querySelector('.speero-menu')) {
          self.addMenu();
          self.checkWindow();
          self.addMobileSpesificChanges();
          self.addMenuEvents();
          //this.disconnect();
        }
      });
      menuObserver.observe(document.querySelector(self.waitForElementQuery), {
        childList: true,
        subtree: true,
      });
    },

    addMenu: function () {
      this.userCountry = window.iButterflyNetwork ? window.iButterflyNetwork.user.country : 'us';
      this.userLang = window.iButterflyNetwork ? window.iButterflyNetwork.user.language : 'en';
      document.querySelector(this.targetQuery).insertAdjacentHTML('beforebegin', this.menuHTML);
      document
        .querySelector('#___gatsby nav>div>a')
        .insertAdjacentHTML(
          'beforebegin',
          '<div class="menu-button-2 w-nav-button speero-burger" style="-webkit-user-select: text;" aria-label="menu" role="button" tabindex="0" aria-controls="w-nav-overlay-0" aria-haspopup="menu" aria-expanded="false"><div class="w-icon-nav-menu"><svg viewBox="0 0 50 50"><rect width="100%" height="100%" fill="none"></rect><path d="M0 7.5v5h50v-5zm0 15v5h50v-5zm0 15v5h50v-5z" fill="#fff"></path></svg></div></div>'
        );
      this.classManager.addClass(
        document.querySelector('#___gatsby>div>div>div>nav'),
        'speero-nav-parent'
      );
      document
        .querySelector('.speero-pricing-link')
        .setAttribute(
          'href',
          'https://store.butterflynetwork.com/' +
            this.userCountry +
            '/' +
            this.userLang +
            '/pricing'
        );
    },

    addMobileSpesificChanges: function () {
      if (window.innerWidth < 768) {
        var buttonContainer =
          '<div class="speero-support-buttons"><a href="https://www.butterflynetwork.com/contact" class="speero-contact-btn">Contact Us</a><a href="https://www.butterflynetwork.com/demo" class="speero-demo-btn">Get a demo</a></div>';
        var storeLink =
          '<a href="https://store.butterflynetwork.com/us/en" class="nav-link-3 w-nav-link speero-store-link">Store</a>';
        document
          .querySelector('.speero-menu-overlay+ul')
          .insertAdjacentHTML('afterend', buttonContainer);
        document
          .querySelector('.speero-menu-mobile>div:first-of-type')
          .insertAdjacentHTML('beforebegin', storeLink);
        document
          .querySelector('.speero-store-link')
          .setAttribute(
            'href',
            'https://store.butterflynetwork.com/' + this.userCountry + '/' + this.userLang
          );
      }
    },

    checkWindow: function () {
      if (document.querySelector('.speero-menu')) {
        if (window.innerWidth > 991) {
          this.classManager.addClass(document.querySelector('.speero-menu'), 'speero-menu-desktop');
          this.classManager.removeClass(
            document.querySelector('.speero-menu'),
            'speero-menu-mobile'
          );
        } else {
          this.classManager.addClass(document.querySelector('.speero-menu'), 'speero-menu-mobile');
          this.classManager.removeClass(
            document.querySelector('.speero-menu'),
            'speero-menu-desktop'
          );
        }
      }
    },

    addMenuEvents: function () {
      var self = this;
      if (window.innerWidth > 768) {
        document.querySelectorAll('.speero-menu .dropdown-2').forEach(function (el, i) {
          el.addEventListener('mouseenter', function () {
            self.classManager.addClass(el.querySelector('.w-dropdown-list'), 'w--open');
          });
          el.addEventListener('mouseleave', function () {
            self.classManager.removeClass(el.querySelector('.w-dropdown-list'), 'w--open');
          });
        });
      }
      document.querySelector('.speero-burger').addEventListener('click', function () {
        if (document.querySelector('.speero-menu-overlay').style.display !== 'block') {
          document.querySelector('.speero-menu-overlay').style.display = 'block';
        } else {
          document.querySelector('.speero-menu-overlay').style.display = 'none';
        }
      });
      document.querySelectorAll('.speero-menu .dropdown-toggle-4').forEach(function (el, i) {
        el.addEventListener('click', function (e) {
          e.preventDefault();
          if (!self.classManager.hasClass(el.nextSibling, 'w--open')) {
            self.classManager.addClass(el.nextSibling, 'w--open');
          } else {
            self.classManager.removeClass(el.nextSibling, 'w--open');
          }
        });
      });
      window.addEventListener('resize', function () {
        self.checkWindow();
      });
    },
  };

  speeroMenuTest.init();
})();
