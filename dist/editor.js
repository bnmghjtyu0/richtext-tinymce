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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app_html.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app_html.js":
/*!*************************!*\
  !*** ./src/app_html.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// import tinymce from \"tinymce\";\r\n\r\n// import \"tinymce/plugins/link\";\r\n// import \"tinymce/plugins/lists\";\r\n\r\nlet status = {\r\n  bold: false,\r\n  italic: false,\r\n  underline: false,\r\n  strikethrough: false,\r\n  paraType: \"p\",\r\n  undo: {\r\n    hasUndo: false,\r\n    hasRedo: false,\r\n  },\r\n  link: {\r\n    href: null,\r\n    target: null,\r\n  },\r\n};\r\nconst sendStatus = () => {\r\n  if (window.ReactNativeWebView) {\r\n    window.ReactNativeWebView.postMessage(\r\n      JSON.stringify({\r\n        type: \"updateStatus\",\r\n        payload: status,\r\n      })\r\n    );\r\n  }\r\n};\r\n\r\nconst CORE_CSS = `\r\n      .mce-content-body.empty {\r\n          position: relative;\r\n      }\r\n      .mce-content-body.empty::before {\r\n          opacity: 0.35;\r\n          display: block;\r\n          position: absolute;\r\n          content: attr( data-placeholder );\r\n      }\r\n  `;\r\n\r\nwindow.init = (config) => {\r\n  tinymce.init({\r\n    selector: \"#editor\",\r\n    toolbar: \"bold italic | link image | myCustomToolbarButton\",\r\n    font_formats:\r\n      \"Arial=arial,helvetica,sans-serif; Courier New=courier new,courier,monospace; AkrutiKndPadmini=Akpdmi-n\",\r\n    // Remove all UI.\r\n    menubar: false,\r\n    statusbar: false,\r\n    theme_advanced_toolbar_location: \"bottom\",\r\n    // Reset content styles.\r\n    // content_css: false,\r\n    // content_style: CORE_CSS + ( config.content_style || '' ),\r\n\r\n    // No need for inputs.\r\n    // hidden_input: false,\r\n\r\n    // Add some basic plugins.\r\n    // plugins: [\"link\", \"lists\"]\r\n\r\n    // 選擇文字後，會跳出 popup\r\n    // setup: function (editor) {\r\n    //   editor.ui.registry.addContextToolbar(\"imagealignment\", {\r\n    //     predicate: function (node) {\r\n    //       return node.nodeName.toLowerCase() === \"img\";\r\n    //     },\r\n    //     items: \"alignleft aligncenter alignright\",\r\n    //     position: \"node\",\r\n    //     scope: \"node\",\r\n    //   });\r\n\r\n    //   editor.ui.registry.addContextToolbar(\"textselection\", {\r\n    //     predicate: function (node) {\r\n    //       return !editor.selection.isCollapsed();\r\n    //     },\r\n    //     items: \"bold italic | blockquote\",\r\n    //     position: \"selection\",\r\n    //     scope: \"node\",\r\n    //   });\r\n    // },\r\n    setup: function (editor) {\r\n      editor.ui.registry.addButton(\"myCustomToolbarButton\", {\r\n        text: \"My Custom Button\",\r\n        onAction: function () {\r\n          alert(\"Button clicked!\");\r\n        },\r\n      });\r\n    },\r\n    content_style:\r\n      \"body { font-family:Helvetica,Arial,sans-serif; font-size:14px }\",\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack:///./src/app_html.js?");

/***/ })

/******/ });