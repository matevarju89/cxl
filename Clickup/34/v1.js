(function () {
  const speero034 = {
    videoSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
<g clip-path="url(#clip0_101_18)">
<path d="M17.5418 12.0838C17.6486 11.1693 17.7325 9.9535 17.7325 8.39152C17.7325 6.84384 17.6501 5.59483 17.5447 4.63046C17.3722 3.05205 16.1379 1.91623 14.556 1.77947C13.3326 1.6737 11.6556 1.58319 9.4992 1.58319C7.34277 1.58319 5.66583 1.6737 4.44239 1.77947C2.86048 1.91623 1.62624 3.05205 1.45372 4.63046C1.34832 5.59483 1.26587 6.84384 1.26587 8.39152C1.26587 9.9535 1.34985 11.1693 1.45665 12.0838C1.62542 13.5291 2.74857 14.5454 4.19768 14.677C5.40812 14.787 7.14106 14.8832 9.4992 14.8832C11.8573 14.8832 13.5903 14.787 14.8007 14.677C16.2498 14.5454 17.373 13.5291 17.5418 12.0838Z" stroke="#49CCF9" stroke-width="1.72727" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="13.9333" y="12.0332" width="0.633333" height="0.633333" rx="0.316667" transform="rotate(-90 13.9333 12.0332)" fill="#49CCF9" stroke="#49CCF9" stroke-width="1.72727" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.8839 17.4167C14.8839 17.4167 13.2519 17.1001 9.50052 17.1001C5.74919 17.1001 4.11719 17.4167 4.11719 17.4167" stroke="#49CCF9" stroke-width="1.72727" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_101_18">
<rect width="19" height="19" fill="white"/>
</clipPath>
</defs>
</svg>`,
    contactSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M6.03068 10.9843L2.06787 12.9657L3.05857 17.9192C3.05857 17.9192 9.00279 18.9099 13.9563 13.9564C18.9098 9.00288 17.9191 3.05867 17.9191 3.05867L12.9656 2.06796L10.9842 5.53542L12.9656 7.51683C12.9656 7.51683 12.5294 9.49824 10.9842 10.9843C9.43904 12.4703 7.51674 12.9657 7.51674 12.9657L6.03068 10.9843Z" stroke="#FD71AF" stroke-width="1.82899" stroke-linejoin="round"/>
</svg>`,
    addNewMenuItem: function () {
      const newItemHTML = `<li class="speero-menu-item"><button type="button" class="navigation__link" aria-haspopup="true" aria-expanded="false" aria-controls="#demos-menu">Demos<svg width="10" height="7" viewBox="0 0 10 7" aria-hidden="true" focusable="false"><use href="/assets/CuNavigationSprite.svg#nav-icon-caret"></use></svg></button>
			<div id="demos-menu" class="speero-demos-menu"><div class="navigation__dropdown-section"><ul class="navigation__dropdown-grid">
			<li class="navigation__dropdown-item"><a data-testid="cu-link" class="navigation__dropdown-link" rel="" target="" tabindex="-1" href="https://clickup.com/on-demand-demo"><div class="">${this.videoSvg}</div><div><p class="">Watch Demo videos</p><p class="">Watch quick videos to learn the basics of ClickUp.</p></div></a></li>
			<li class="navigation__dropdown-item"><a data-testid="cu-link" class="navigation__dropdown-link" rel="" target="" tabindex="-1" href="https://clickup.com/on-demand-demo/demo-request"><div class="">${this.contactSvg}</div><div><p class="">Schedule a Demo call</p><p class="">Get a free 1:1 demo and consultation.</p></div></a></li>
			</ul></div></div>
			</li>`;
      const mobileMenuItemHTML = `<li class="speero-mobile-menu-item"><button data-testid="cu-button" type="button" class="drop" aria-haspopup="true" aria-expanded="false" aria-controls="#mobile-dropdown-Learn-content">Demos<svg width="12" height="8" viewBox="0 0 12 8" aria-hidden="true" focusable="false"><use href="/assets/CuNavigationSprite.svg#nav-icon-caret"></use></svg></button><div id="speero-mobile-dropdown-demos-content" class="dropdown-menu stack"><div class="dropdown-menu__group"><ul role="list"><li class="dropdown-menu__item"><a data-testid="cu-link" class="dropdown-menu__link" rel="" target="" href="https://clickup.com/on-demand-demo">${this.videoSvg}<span>Watch Demo videos</span></a></li><li class="dropdown-menu__item"><a data-testid="cu-link" class="dropdown-menu__link" rel="" target="" href="https://clickup.com/on-demand-demo/demo-request">${this.contactSvg}<span>Schedule a Demo call</span></a></li></ul></div></div></li>`;
      document
        .querySelector("nav>ul.navigation__list")
        .insertAdjacentHTML("beforeend", newItemHTML);
      document
        .querySelector('nav[class*="CuMobileNavigation_wrapper"] li.Learn')
        .insertAdjacentHTML("afterend", mobileMenuItemHTML);
      this.addEvents();
    },
    addEvents: function () {
      const menuItem = document.querySelector(".speero-menu-item");
      const demoMenu = document.querySelector(".speero-demos-menu");
      const demoButton = document.querySelector(".speero-menu-item>button");
      const mobileMenuButton = document.querySelector(
        ".speero-mobile-menu-item button"
      );
      const mobileMenuDropdown = document.querySelector(
        ".speero-mobile-menu-item .dropdown-menu"
      );
      menuItem.addEventListener("mouseenter", function () {
        if (
          document.querySelector(
            'nav .navigation__link[class*="CuNavigation_isActive"]'
          )
        ) {
          document
            .querySelector(
              'nav .navigation__link[class*="CuNavigation_isActive"]'
            )
            .dispatchEvent(new Event("mouseenter"));
        }
        demoMenu.classList.add("speero-active");
        demoButton.classList.add("speero-button-active");
        demoMenu.classList.add("speero-active-opacity");
      });
      menuItem.addEventListener("mouseleave", function () {
        demoMenu.classList.remove("speero-active-opacity");
        demoButton.classList.remove("speero-button-active");
        demoMenu.classList.remove("speero-active");
      });
      mobileMenuButton.addEventListener("click", function () {
        if (
          document.querySelector(
            'nav[class*="CuMobileNavigation_wrapper"] .nav-canvas__item[class*="CuMobileNavigation_isActive"]'
          )
        ) {
          document
            .querySelector(
              'nav[class*="CuMobileNavigation_wrapper"] .nav-canvas__item[class*="CuMobileNavigation_isActive"] button'
            )
            .dispatchEvent(new Event("click"));
        }
        mobileMenuDropdown.classList.toggle("speero-mobile-menu-active");
      });
      document
        .querySelectorAll(
          'nav[class*="CuMobileNavigation_wrapper"] li.nav-canvas__item'
        )
        .forEach(function (link) {
          link.addEventListener("click", function () {
            if (!this.querySelector("#speero-mobile-dropdown-demos-content")) {
              mobileMenuDropdown.classList.remove("speero-mobile-menu-active");
            }
          });
        });
    },
    addObserver: function () {
      const self = this;
      const observer = new MutationObserver(function () {
        if (
          document.querySelector("nav ul.navigation__list") &&
          !document.querySelector(".speero-menu-item")
        ) {
          self.addNewMenuItem();
        }
      });
      observer.observe(document.getElementById("__next"), {
        childList: true,
        subtree: true,
      });
    },
    init: function () {
      this.addObserver();
    },
  };
  speero034.init();
})();
