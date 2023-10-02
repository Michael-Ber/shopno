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
eval("__webpack_require__.r(__webpack_exports__);\nconst carousel = (parentSelector, trackSelector, itemSelector, dotsSelector, arrowsSelector, activeClass, arrows = false) => {\n  const slider = document.querySelector(parentSelector),\n        track = slider.querySelector(trackSelector),\n        items = slider.querySelectorAll(itemSelector),\n        dots = slider.querySelectorAll(dotsSelector);\n  let offset = 0,\n      slideIndex = 0,\n      itemWidth,\n      trackWidth;\n\n  const init = () => {\n    items.forEach(item => {\n      item.style.minWidth = +window.getComputedStyle(slider).width.slice(0, -2) + 'px';\n    });\n    itemWidth = +window.getComputedStyle(items[0]).width.slice(0, -2);\n    trackWidth = itemWidth * items.length;\n    track.style.transform = `translateX(0px)`;\n    dots.forEach(dot => {\n      dot.classList.remove(activeClass);\n    });\n    dots[0].classList.add(activeClass);\n  };\n\n  init();\n  dots.forEach((dot, i) => {\n    dot.addEventListener('click', function () {\n      dots.forEach(dot => {\n        dot.classList.remove(activeClass);\n      });\n      this.classList.add(activeClass);\n      slideIndex = i;\n      offset = itemWidth * slideIndex;\n      track.style.transform = `translateX(-${offset}px)`;\n    });\n  });\n\n  if (arrows) {\n    const prev = slider.querySelector(arrowsSelector).children[0],\n          next = slider.querySelector(arrowsSelector).children[1];\n    next.addEventListener('click', () => {\n      if (offset >= trackWidth - itemWidth) {\n        offset = 0;\n        slideIndex = 0;\n      } else {\n        offset += itemWidth;\n        slideIndex += 1;\n      }\n\n      track.style.transform = `translateX(-${offset}px)`;\n      dots.forEach(dot => {\n        dot.classList.remove(activeClass);\n      });\n      dots[slideIndex].classList.add(activeClass);\n    });\n    prev.addEventListener('click', () => {\n      if (offset <= 0) {\n        offset = trackWidth - itemWidth;\n        slideIndex = items.length - 1;\n      } else {\n        offset -= itemWidth;\n        slideIndex -= 1;\n      }\n\n      track.style.transform = `translateX(-${offset}px)`;\n      dots.forEach(dot => {\n        dot.classList.remove(activeClass);\n      });\n      dots[slideIndex].classList.add(activeClass);\n    });\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (carousel);\n\n//# sourceURL=webpack:///./src/assets/js/blocks/carousel.js?");

/***/ }),

/***/ "./src/assets/js/blocks/form.js":
/*!**************************************!*\
  !*** ./src/assets/js/blocks/form.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst form = formSelector => {\n  const forms = document.querySelectorAll(formSelector);\n  forms.forEach(form => {\n    form.addEventListener('submit', e => {\n      e.preventDefault();\n      let messages = {\n        success: 'Спасибо, скоро мы с вами свяжемся',\n        loading: 'Идет загрузка',\n        failure: 'Что-то пошло не так'\n      };\n\n      const sendingData = async (url, data) => {\n        let res = await fetch(url, {\n          method: 'POST',\n          body: data\n        });\n        return await res.text();\n      };\n\n      let dialogBG = document.createElement('div');\n      dialogBG.classList.add('popup__dialog-bg');\n      dialogBG.style.cssText = `\n                position: fixed;\n                top: 0;\n                left: 0;\n                width: 100%;\n                height: 100vh;\n                background-color: rgba(0, 0, 0, .5);\n                z-index: 100;\n            `;\n      let dialog = document.createElement('div');\n      dialog.classList.add('popup_dialog-bg_modal');\n      dialog.style.cssText = `\n                width: 500px;\n                height: 310px;\n                position: absolute;\n                top: 50%;\n                left: 50%;\n                transform: translate(-50%, -50%);\n                background-color: #fff;\n                padding: 40px;\n            `;\n      let dialogText = document.createElement('span');\n      dialogText.style.cssText = `\n                display: block;\n                font-size: 25px;\n                color: blue;\n                padding-top: 55px;\n            `;\n      dialogText.textContent = messages.loading;\n      let closeDialog = document.createElement('i');\n      closeDialog.setAttribute('data-close', '');\n      closeDialog.innerHTML = '&times;';\n      closeDialog.style.cssText = `\n                text-align: end;\n                font-size: 40px;\n            `;\n      dialog.appendChild(closeDialog);\n      dialog.appendChild(dialogText);\n      dialogBG.appendChild(dialog);\n      let body = document.querySelector('body');\n      body.appendChild(dialogBG);\n      body.style.overflow = 'hidden';\n      let formdata = new FormData(form);\n      sendingData('./assets/server.php', formdata).then(res => console.log(res)).then(() => dialogText.textContent = messages.success).then(() => {\n        dialogBG.addEventListener('click', e => {\n          if (e.target.classList.contains('popup__dialog-bg')) {\n            closeDialogBox();\n          }\n        });\n        closeDialog.addEventListener('click', e => {\n          closeDialogBox();\n        });\n      }).catch(() => dialogText.textContent = messages.failure).finally(() => {\n        form.reset();\n        let timerID = setTimeout(() => {\n          closeDialogBox();\n        }, 4000);\n      });\n\n      function closeDialogBox() {\n        dialogBG.remove();\n        body.style.overflow = 'visible';\n      }\n    });\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (form);\n\n//# sourceURL=webpack:///./src/assets/js/blocks/form.js?");

/***/ }),

/***/ "./src/assets/js/blocks/hamburger.js":
/*!*******************************************!*\
  !*** ./src/assets/js/blocks/hamburger.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst hamburger = (hamburgerSelector, menuSelector, activeClass) => {\n  const hamburger = document.querySelector(hamburgerSelector),\n        menu = document.querySelector(menuSelector);\n  hamburger.addEventListener('click', () => {\n    const lines = Array.prototype.slice.call(hamburger.children); // IE\n\n    if (!menu.classList.contains(activeClass)) {\n      menu.classList.add(activeClass);\n      lines[0].style.transform = `rotate(45deg) translateY(75%)`;\n      lines[0].style.marginBottom = 0;\n      lines[2].style.transform = `rotate(-45deg) translateY(-75%)`;\n      lines[1].style.display = 'none';\n    } else {\n      menu.classList.remove(activeClass);\n      lines[0].style.transform = 'none';\n      lines[0].style.marginBottom = '0.25rem';\n      lines[2].style.transform = 'none';\n      lines[1].style.display = 'flex';\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (hamburger);\n\n//# sourceURL=webpack:///./src/assets/js/blocks/hamburger.js?");

/***/ }),

/***/ "./src/assets/js/blocks/knowMore.js":
/*!******************************************!*\
  !*** ./src/assets/js/blocks/knowMore.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst knowMore = (itemsSelector, backsideSelector, mainContentSelector, triggerSelector, closeSelector) => {\n  const items = document.querySelectorAll(itemsSelector);\n  items.forEach(item => {\n    const backside = item.querySelector(backsideSelector),\n          mainContent = item.querySelector(mainContentSelector),\n          moreBtn = item.querySelector(triggerSelector),\n          close = item.querySelector(closeSelector);\n    moreBtn.addEventListener('click', () => {\n      backside.style.transform = `translateX(0%)`;\n      mainContent.style.transform = `translateX(100%)`;\n    });\n    close.addEventListener('click', () => {\n      backside.style.transform = `translateX(-100%)`;\n      mainContent.style.transform = `translateX(0%)`;\n    });\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (knowMore);\n\n//# sourceURL=webpack:///./src/assets/js/blocks/knowMore.js?");

/***/ }),

/***/ "./src/assets/js/blocks/stars.js":
/*!***************************************!*\
  !*** ./src/assets/js/blocks/stars.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst stars = (nodeSelector, starSelector, parentStarSelector) => {\n  const parent = document.querySelectorAll(nodeSelector);\n  parent.forEach(node => {\n    const star = node.querySelectorAll(starSelector),\n          stars = node.querySelector(parentStarSelector);\n    star.forEach(item => {\n      item.addEventListener('click', () => {\n        stars.setAttribute('data-total-value', item.getAttribute('data-item-value'));\n      });\n    });\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (stars);\n\n//# sourceURL=webpack:///./src/assets/js/blocks/stars.js?");

/***/ }),

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blocks_stars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/stars */ \"./src/assets/js/blocks/stars.js\");\n/* harmony import */ var _blocks_hamburger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/hamburger */ \"./src/assets/js/blocks/hamburger.js\");\n/* harmony import */ var _blocks_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/carousel */ \"./src/assets/js/blocks/carousel.js\");\n/* harmony import */ var _blocks_knowMore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/knowMore */ \"./src/assets/js/blocks/knowMore.js\");\n/* harmony import */ var _blocks_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/form */ \"./src/assets/js/blocks/form.js\");\n\n\n\n\n\nwindow.addEventListener('DOMContentLoaded', () => {\n  Object(_blocks_stars__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.testimonials__carousel_track_item', '.testimonials__carousel_track_item_descr_stars_star', '.testimonials__carousel_track_item_descr_stars');\n  Object(_blocks_hamburger__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('.intro__header_hamburger', '.intro__header_menu', 'intro__header_menu_active');\n  const aboutSlider = Object(_blocks_carousel__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('.about__content_carousel', '.about__content_carousel_frame_track', '.about__content_carousel_frame_track_item', '.about__content_carousel_dots_dot', null, 'dot_active', false);\n  window.addEventListener('resize', () => {\n    Object(_blocks_carousel__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('.about__content_carousel', '.about__content_carousel_frame_track', '.about__content_carousel_frame_track_item', '.about__content_carousel_dots_dot', null, 'dot_active', false);\n  });\n  const testimonialsSlider = Object(_blocks_carousel__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('.testimonials__carousel', '.testimonials__carousel_track', '.testimonials__carousel_track_item', '.testimonials__carousel_triggers_dots_dot', '.testimonials__carousel_triggers_arrows', 'dot_active', true);\n  window.addEventListener('resize', () => {\n    Object(_blocks_carousel__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('.testimonials__carousel', '.testimonials__carousel_track', '.testimonials__carousel_track_item', '.testimonials__carousel_triggers_dots_dot', '.testimonials__carousel_triggers_arrows', 'dot_active', true);\n  });\n  Object(_blocks_knowMore__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('.services__content_item', '.services__content_item_wrapper_backside', '.services__content_item_wrapper', '.services__content_item_wrapper_text_more', '.services__content_item_wrapper_backside_close');\n  Object(_blocks_form__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('.contacts__data_form');\n});\n\n//# sourceURL=webpack:///./src/assets/js/main.js?");

/***/ })

/******/ });