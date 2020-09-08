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

eval("// // Import TinyMCE\r\n// import tinymce from \"tinymce/tinymce\";\r\n\r\n// // Default icons are required for TinyMCE 5.3 or above\r\n// import \"tinymce/icons/default\";\r\n\r\n// // A theme is also required\r\n// import \"tinymce/themes/silver\";\r\n\r\n// // Any plugins you want to use has to be imported\r\n// import \"tinymce/plugins/paste\";\r\n// import \"tinymce/plugins/link\";\r\n// import \"tinymce/plugins/autolink\";\r\n// import \"tinymce/plugins/advlist\";\r\n// import \"tinymce/plugins/lists\";\r\n// import \"tinymce/plugins/media\";\r\n// import \"tinymce/plugins/imagetools\";\r\n// require(\"tinymce-mention\");\r\n\r\nlet status = {\r\n  bold: false,\r\n  italic: false,\r\n  underline: false,\r\n  strikethrough: false,\r\n  paraType: \"p\",\r\n  undo: {\r\n    hasRedo: false,\r\n    hasUndo: false,\r\n  },\r\n  link: {\r\n    href: null,\r\n    target: null,\r\n  },\r\n};\r\nconst sendStatus = () => {\r\n  if (window.ReactNativeWebView) {\r\n    window.ReactNativeWebView.postMessage(\r\n      JSON.stringify({\r\n        type: \"updateStatus\",\r\n        payload: status,\r\n      })\r\n    );\r\n  }\r\n};\r\n\r\nconst CORE_CSS = `\r\n      .mce-content-body.empty {\r\n          position: relative;\r\n      }\r\n      .mce-content-body.empty::before {\r\n          opacity: 0.35;\r\n          display: block;\r\n          position: absolute;\r\n          content: attr( data-placeholder );\r\n      }\r\n  `;\r\n\r\nvar btnContent = document.querySelector(\"#btnContent\");\r\n\r\nfunction myScript() {\r\n  const content = tinymce.activeEditor.getContent();\r\n  // tinymce.activeEditor.setContent(\"<p>Hello world!</p>\");\r\n\r\n  tinymce.execCommand(\"mceInsertContent\", false, \"<p>Hello world!</p>\");\r\n  tinymce.activeEditor.execCommand(\"mceEditImage\");\r\n  tinymce.execCommand(\r\n    \"mceInsertContent\",\r\n    false,\r\n    '<img alt=\"Smiley face\" height=\"42\" width=\"42\" src=\"https://images.unsplash.com/photo-1599495751117-4733b8869543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80\"/>'\r\n  );\r\n  console.log(content);\r\n}\r\nbtnContent.addEventListener(\"click\", myScript);\r\n\r\nfunction myCustomExecCommandHandler(\r\n  editor_id,\r\n  elm,\r\n  command,\r\n  user_interface,\r\n  value\r\n) {\r\n  var linkElm, imageElm, inst;\r\n\r\n  switch (command) {\r\n    case \"mceLink\":\r\n      inst = tinyMCE.getInstanceById(editor_id);\r\n      linkElm = tinyMCE.getParentElement(inst.selection.getFocusElement(), \"a\");\r\n\r\n      if (linkElm)\r\n        alert(\r\n          \"Link dialog has been overriden. Found link href: \" +\r\n            tinyMCE.getAttrib(linkElm, \"href\")\r\n        );\r\n      else alert(\"Link dialog has been overriden.\");\r\n\r\n      return true;\r\n\r\n    case \"mceImage\":\r\n      inst = tinyMCE.getInstanceById(editor_id);\r\n      imageElm = tinyMCE.getParentElement(\r\n        inst.selection.getFocusElement(),\r\n        \"img\"\r\n      );\r\n\r\n      if (imageElm)\r\n        alert(\r\n          \"Image dialog has been overriden. Found image src: \" +\r\n            tinyMCE.getAttrib(imageElm, \"src\")\r\n        );\r\n      else alert(\"Image dialog has been overriden.\");\r\n\r\n      return true;\r\n  }\r\n\r\n  return false; // Pass to next handler in chain\r\n}\r\n\r\nvar mentions_menu_complete = function (editor, userInfo) {\r\n  var span = editor.getDoc().createElement(\"span\");\r\n  span.className = \"mymention\";\r\n  span.setAttribute(\"data-mention-id\", userInfo.id);\r\n  span.appendChild(editor.getDoc().createTextNode(\"@\" + userInfo.name));\r\n  return span;\r\n};\r\n\r\nwindow.init = (config) => {\r\n  tinymce.init({\r\n    execcommand_callback: \"myCustomExecCommandHandler\",\r\n    selector: \"#editor\",\r\n    // icons_url: \"https://code.iconify.design/1/1.0.4/iconify.min.js\",\r\n    // icons: \"material\",\r\n    toolbar: [\r\n      \"customToggleButton cBold italic strikethrough underline myCustomToolbarButton bullist numlist media insertContent\",\r\n    ],\r\n    toolbar_location: \"bottom\",\r\n    plugins: [\"autolink\", \"advlist lists\", \"imagetools\", \"media\", \"save\"],\r\n    font_formats:\r\n      \"Arial=arial,helvetica,sans-serif; Courier New=courier new,courier,monospace; AkrutiKndPadmini=Akpdmi-n\",\r\n    // Remove all UI.\r\n    advlist_bullet_styles: \"square\",\r\n    menubar: false,\r\n    statusbar: false,\r\n    skin: \"bootstrap\",\r\n    mentions: {\r\n      source: [\r\n        { name: \"Tyra Porcelli\" },\r\n        { name: \"Brigid Reddish\" },\r\n        { name: \"Ashely Buckler\" },\r\n        { name: \"Teddy Whelan\" },\r\n        { name: \"123\" },\r\n      ],\r\n      delimiter: [\"@\", \"#\"],\r\n    },\r\n    content_css: \"main.css\",\r\n    content_style:\r\n      \".mymention{ color: gray; }\" +\r\n      \"body { font-family:Helvetica,Arial,sans-serif; font-size:14px }\",\r\n    // mentions_selector: \".mymention\",\r\n    // mentions_menu_complete: mentions_menu_complete,\r\n    // mentions_fetch: mentions_fetch,\r\n    // mentions_menu_hover: mentions_menu_hover,\r\n    // mentions_select: mentions_select,\r\n    // Reset content styles.\r\n    // content_style: CORE_CSS + ( config.content_style || '' ),\r\n\r\n    // No need for inputs.\r\n    // hidden_input: false,\r\n\r\n    // 選擇文字後，會跳出 popup\r\n    // setup: function (editor) {\r\n    //   editor.ui.registry.addContextToolbar(\"imagealignment\", {\r\n    //     predicate: function (node) {\r\n    //       return node.nodeName.toLowerCase() === \"img\";\r\n    //     },\r\n    //     items: \"alignleft aligncenter alignright\",\r\n    //     position: \"node\",\r\n    //     scope: \"node\",\r\n    //   });\r\n\r\n    //   editor.ui.registry.addContextToolbar(\"textselection\", {\r\n    //     predicate: function (node) {\r\n    //       return !editor.selection.isCollapsed();\r\n    //     },\r\n    //     items: \"bold italic | blockquote\",\r\n    //     position: \"selection\",\r\n    //     scope: \"node\",\r\n    //   });\r\n    // },\r\n\r\n    formats: {\r\n      \"red-text\": { inline: \"span\", classes: \"red\" },\r\n    },\r\n\r\n    setup: function (editor) {\r\n      // icons\r\n      editor.ui.registry.addIcon(\r\n        \"calendar\",\r\n        '<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"black\" width=\"18px\" height=\"18px\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z\"/></svg>'\r\n      );\r\n      // 載入編輯器\r\n      editor.on(\"init\", function (e) {\r\n        console.log(\"The Editor has initialized.\");\r\n      });\r\n      // 監聽輸入\r\n      editor.on(\"change\", function (e) {\r\n        console.log(tinymce.activeEditor.getContent());\r\n      });\r\n      editor.on(\"keyup\", function (e) {\r\n        console.log(tinymce.activeEditor.getContent());\r\n      });\r\n      editor.on(\"init keydown change click blur\", function (e) {\r\n        document.getElementById(\"data\").innerText = editor.getContent();\r\n      });\r\n\r\n      // 加入自定義按鈕\r\n      editor.ui.registry.addButton(\"insertContent\", {\r\n        text: \"fancyText\",\r\n        onAction: function (_) {\r\n          editor.insertContent(\" Jimi Hendrix for president \");\r\n        },\r\n      });\r\n      editor.ui.registry.addButton(\"cBold\", {\r\n        icon: \"bold\",\r\n        onAction: function (_) {\r\n          tinymce.activeEditor.execCommand(\"Bold\");\r\n        },\r\n      });\r\n      editor.ui.registry.addToggleButton(\"customToggleButton\", {\r\n        icon: \"calendar\",\r\n        onAction: function (_) {\r\n          editor.execCommand(\"mceToggleFormat\", false, \"red-text\");\r\n        },\r\n        onSetup: function (buttonApi) {\r\n          editor.formatter.formatChanged(\"red-text\", function (state) {\r\n            buttonApi.setActive(state);\r\n          });\r\n        },\r\n      });\r\n    },\r\n\r\n    content_style:\r\n      \"body { font-family:Helvetica,Arial,sans-serif; font-size:14px }\",\r\n\r\n    //   autolink\r\n    // link_default_protocol: \"https\",\r\n    // default_link_target: \"_blank\",\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack:///./src/app_html.js?");

/***/ })

/******/ });