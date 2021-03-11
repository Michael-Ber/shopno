/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/blocks/carousel.js":
/*!******************************************!*\
  !*** ./src/assets/js/blocks/carousel.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const carousel = (parentSelector, trackSelector, itemSelector, dotsSelector, arrowsSelector, activeClass, arrows = false) => {
  const slider = document.querySelector(parentSelector),
        track = slider.querySelector(trackSelector),
        items = slider.querySelectorAll(itemSelector),
        dots = slider.querySelectorAll(dotsSelector),
        itemWidth = +window.getComputedStyle(items[0]).width.slice(0, -2);
  let offset = 0,
      slideIndex = 0,
      trackWidth = itemWidth * items.length;
  track.style.width = trackWidth + 'px';
  dots.forEach((dot, i) => {
    dot.addEventListener('click', function () {
      dots.forEach(dot => {
        dot.classList.remove(activeClass);
      });
      this.classList.add(activeClass);
      slideIndex = i;
      offset = itemWidth * slideIndex;
      track.style.transform = `translateX(-${offset}px)`;
    });
  });

  if (arrows) {
    const prev = slider.querySelector(arrowsSelector).children[0],
          next = slider.querySelector(arrowsSelector).children[1];
    next.addEventListener('click', () => {
      if (offset >= trackWidth - itemWidth) {
        offset = 0;
        slideIndex = 0;
      } else {
        offset += itemWidth;
        slideIndex += 1;
      }

      track.style.transform = `translateX(-${offset}px)`;
      dots.forEach(dot => {
        dot.classList.remove(activeClass);
      });
      dots[slideIndex].classList.add(activeClass);
    });
    prev.addEventListener('click', () => {
      if (offset <= 0) {
        offset = trackWidth - itemWidth;
        slideIndex = items.length - 1;
      } else {
        offset -= itemWidth;
        slideIndex -= 1;
      }

      track.style.transform = `translateX(-${offset}px)`;
      dots.forEach(dot => {
        dot.classList.remove(activeClass);
      });
      dots[slideIndex].classList.add(activeClass);
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (carousel);

/***/ }),

/***/ "./src/assets/js/blocks/hamburger.js":
/*!*******************************************!*\
  !*** ./src/assets/js/blocks/hamburger.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const hamburger = (hamburgerSelector, menuSelector, activeClass) => {
  const hamburger = document.querySelector(hamburgerSelector),
        menu = document.querySelector(menuSelector);
  hamburger.addEventListener('click', () => {
    const lines = Array.prototype.slice.call(hamburger.children); // IE

    if (!menu.classList.contains(activeClass)) {
      menu.classList.add(activeClass);
      lines[0].style.transform = `rotate(45deg) translateY(75%)`;
      lines[0].style.marginBottom = 0;
      lines[2].style.transform = `rotate(-45deg) translateY(-75%)`;
      lines[1].style.display = 'none';
    } else {
      menu.classList.remove(activeClass);
      lines[0].style.transform = 'none';
      lines[0].style.marginBottom = '0.25rem';
      lines[2].style.transform = 'none';
      lines[1].style.display = 'flex';
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (hamburger);

/***/ }),

/***/ "./src/assets/js/blocks/knowMore.js":
/*!******************************************!*\
  !*** ./src/assets/js/blocks/knowMore.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const knowMore = (itemsSelector, backsideSelector, mainContentSelector, triggerSelector, closeSelector) => {
  const items = document.querySelectorAll(itemsSelector);
  items.forEach(item => {
    const backside = item.querySelector(backsideSelector),
          mainContent = item.querySelector(mainContentSelector),
          moreBtn = item.querySelector(triggerSelector),
          close = item.querySelector(closeSelector);
    moreBtn.addEventListener('click', () => {
      backside.style.transform = `translateX(0%)`;
      mainContent.style.transform = `translateX(100%)`;
    });
    close.addEventListener('click', () => {
      backside.style.transform = `translateX(-100%)`;
      mainContent.style.transform = `translateX(0%)`;
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (knowMore);

/***/ }),

/***/ "./src/assets/js/blocks/stars.js":
/*!***************************************!*\
  !*** ./src/assets/js/blocks/stars.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const stars = (nodeSelector, starSelector, parentStarSelector) => {
  const parent = document.querySelectorAll(nodeSelector);
  parent.forEach(node => {
    const star = node.querySelectorAll(starSelector),
          stars = node.querySelector(parentStarSelector);
    star.forEach(item => {
      item.addEventListener('click', () => {
        stars.setAttribute('data-total-value', item.getAttribute('data-item-value'));
      });
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (stars);

/***/ }),

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_stars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/stars */ "./src/assets/js/blocks/stars.js");
/* harmony import */ var _blocks_hamburger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/hamburger */ "./src/assets/js/blocks/hamburger.js");
/* harmony import */ var _blocks_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/carousel */ "./src/assets/js/blocks/carousel.js");
/* harmony import */ var _blocks_knowMore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/knowMore */ "./src/assets/js/blocks/knowMore.js");




window.addEventListener('DOMContentLoaded', () => {
  Object(_blocks_stars__WEBPACK_IMPORTED_MODULE_0__["default"])('.testimonials__carousel_track_item', '.testimonials__carousel_track_item_descr_stars_star', '.testimonials__carousel_track_item_descr_stars');
  Object(_blocks_hamburger__WEBPACK_IMPORTED_MODULE_1__["default"])('.intro__header_hamburger', '.intro__header_menu', 'intro__header_menu_active');
  const aboutSlider = Object(_blocks_carousel__WEBPACK_IMPORTED_MODULE_2__["default"])('.about__content_carousel', '.about__content_carousel_frame_track', '.about__content_carousel_frame_track_item', '.about__content_carousel_dots_dot', null, 'dot_active', false);
  const testimonialsSlider = Object(_blocks_carousel__WEBPACK_IMPORTED_MODULE_2__["default"])('.testimonials__carousel', '.testimonials__carousel_track', '.testimonials__carousel_track_item', '.testimonials__carousel_triggers_dots_dot', '.testimonials__carousel_triggers_arrows', 'dot_active', true);
  Object(_blocks_knowMore__WEBPACK_IMPORTED_MODULE_3__["default"])('.services__content_item', '.services__content_item_wrapper_backside', '.services__content_item_wrapper', '.services__content_item_wrapper_text_more', '.services__content_item_wrapper_backside_close');
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map