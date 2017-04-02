(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueDrag"] = factory();
	else
		root["VueDrag"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _drag = __webpack_require__(1);
	
	Object.defineProperty(exports, 'drag', {
	  enumerable: true,
	  get: function get() {
	    return _drag.drag;
	  }
	});
	
	var _dragboot = __webpack_require__(5);
	
	Object.defineProperty(exports, 'dragboot', {
	  enumerable: true,
	  get: function get() {
	    return _dragboot.dragboot;
	  }
	});
	
	var _dragbox = __webpack_require__(12);
	
	Object.defineProperty(exports, 'dragbox', {
	  enumerable: true,
	  get: function get() {
	    return _dragbox.dragbox;
	  }
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(3),
	  /* template */
	  __webpack_require__(4),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/mybook/webpack/vue-drag/src/drag.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] drag.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-53625fd5", Component.options)
	  } else {
	    hotAPI.reload("data-v-53625fd5", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 2 */
/***/ function(module, exports) {

	// this module is a runtime utility for cleaner component module output and will
	// be included in the final webpack user bundle
	
	module.exports = function normalizeComponent (
	  rawScriptExports,
	  compiledTemplate,
	  scopeId,
	  cssModules
	) {
	  var esModule
	  var scriptExports = rawScriptExports = rawScriptExports || {}
	
	  // ES6 modules interop
	  var type = typeof rawScriptExports.default
	  if (type === 'object' || type === 'function') {
	    esModule = rawScriptExports
	    scriptExports = rawScriptExports.default
	  }
	
	  // Vue.extend constructor export interop
	  var options = typeof scriptExports === 'function'
	    ? scriptExports.options
	    : scriptExports
	
	  // render functions
	  if (compiledTemplate) {
	    options.render = compiledTemplate.render
	    options.staticRenderFns = compiledTemplate.staticRenderFns
	  }
	
	  // scopedId
	  if (scopeId) {
	    options._scopeId = scopeId
	  }
	
	  // inject cssModules
	  if (cssModules) {
	    var computed = Object.create(options.computed || null)
	    Object.keys(cssModules).forEach(function (key) {
	      var module = cssModules[key]
	      computed[key] = function () { return module }
	    })
	    options.computed = computed
	  }
	
	  return {
	    esModule: esModule,
	    exports: scriptExports,
	    options: options
	  }
	}


/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	
	exports.default = {
	  props: {
	    item: {
	      type: Object,
	      required: true
	    }
	  },
	  data: function data() {
	    return {};
	  },
	
	  methods: {
	    drag: function drag(event, $el) {
	      console.log('开始拖动');
	      this.$parent.$parent.currentItem = this.item;
	    },
	    dragend: function dragend(event) {
	      // this.dragging = false ;
	    }
	  }
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "drag-in",
	    attrs: {
	      "draggable": "true"
	    },
	    on: {
	      "dragend": function($event) {
	        _vm.dragend($event)
	      },
	      "dragstart": function($event) {
	        _vm.drag($event, _vm.$el)
	      }
	    }
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-53625fd5", module.exports)
	  }
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(6)
	
	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(11),
	  /* template */
	  __webpack_require__(15),
	  /* scopeId */
	  "data-v-921a2972",
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/mybook/webpack/vue-drag/src/dragboot.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] dragboot.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-921a2972", Component.options)
	  } else {
	    hotAPI.reload("data-v-921a2972", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(9)("c81eb0d2", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../node_modules/.0.21.0@css-loader/index.js?sourceMap!../node_modules/.11.3.3@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-921a2972\",\"scoped\":true,\"hasInlineConfig\":false}!../node_modules/.11.3.3@vue-loader/lib/selector.js?type=styles&index=0!./dragboot.vue", function() {
	     var newContent = require("!!../node_modules/.0.21.0@css-loader/index.js?sourceMap!../node_modules/.11.3.3@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-921a2972\",\"scoped\":true,\"hasInlineConfig\":false}!../node_modules/.11.3.3@vue-loader/lib/selector.js?type=styles&index=0!./dragboot.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"dragboot.vue","sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 8 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/*
	  MIT License http://www.opensource.org/licenses/mit-license.php
	  Author Tobias Koppers @sokra
	  Modified by Evan You @yyx990803
	*/
	
	var hasDocument = typeof document !== 'undefined'
	
	if (false) {
	  if (!hasDocument) {
	    throw new Error(
	    'vue-style-loader cannot be used in a non-browser environment. ' +
	    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
	  ) }
	}
	
	var listToStyles = __webpack_require__(10)
	
	/*
	type StyleObject = {
	  id: number;
	  parts: Array<StyleObjectPart>
	}
	
	type StyleObjectPart = {
	  css: string;
	  media: string;
	  sourceMap: ?string
	}
	*/
	
	var stylesInDom = {/*
	  [id: number]: {
	    id: number,
	    refs: number,
	    parts: Array<(obj?: StyleObjectPart) => void>
	  }
	*/}
	
	var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
	var singletonElement = null
	var singletonCounter = 0
	var isProduction = false
	var noop = function () {}
	
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())
	
	module.exports = function (parentId, list, _isProduction) {
	  isProduction = _isProduction
	
	  var styles = listToStyles(parentId, list)
	  addStylesToDom(styles)
	
	  return function update (newList) {
	    var mayRemove = []
	    for (var i = 0; i < styles.length; i++) {
	      var item = styles[i]
	      var domStyle = stylesInDom[item.id]
	      domStyle.refs--
	      mayRemove.push(domStyle)
	    }
	    if (newList) {
	      styles = listToStyles(parentId, newList)
	      addStylesToDom(styles)
	    } else {
	      styles = []
	    }
	    for (var i = 0; i < mayRemove.length; i++) {
	      var domStyle = mayRemove[i]
	      if (domStyle.refs === 0) {
	        for (var j = 0; j < domStyle.parts.length; j++) {
	          domStyle.parts[j]()
	        }
	        delete stylesInDom[domStyle.id]
	      }
	    }
	  }
	}
	
	function addStylesToDom (styles /* Array<StyleObject> */) {
	  for (var i = 0; i < styles.length; i++) {
	    var item = styles[i]
	    var domStyle = stylesInDom[item.id]
	    if (domStyle) {
	      domStyle.refs++
	      for (var j = 0; j < domStyle.parts.length; j++) {
	        domStyle.parts[j](item.parts[j])
	      }
	      for (; j < item.parts.length; j++) {
	        domStyle.parts.push(addStyle(item.parts[j]))
	      }
	      if (domStyle.parts.length > item.parts.length) {
	        domStyle.parts.length = item.parts.length
	      }
	    } else {
	      var parts = []
	      for (var j = 0; j < item.parts.length; j++) {
	        parts.push(addStyle(item.parts[j]))
	      }
	      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
	    }
	  }
	}
	
	function createStyleElement () {
	  var styleElement = document.createElement('style')
	  styleElement.type = 'text/css'
	  head.appendChild(styleElement)
	  return styleElement
	}
	
	function addStyle (obj /* StyleObjectPart */) {
	  var update, remove
	  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')
	
	  if (styleElement) {
	    if (isProduction) {
	      // has SSR styles and in production mode.
	      // simply do nothing.
	      return noop
	    } else {
	      // has SSR styles but in dev mode.
	      // for some reason Chrome can't handle source map in server-rendered
	      // style tags - source maps in <style> only works if the style tag is
	      // created and inserted dynamically. So we remove the server rendered
	      // styles and inject new ones.
	      styleElement.parentNode.removeChild(styleElement)
	    }
	  }
	
	  if (isOldIE) {
	    // use singleton mode for IE9.
	    var styleIndex = singletonCounter++
	    styleElement = singletonElement || (singletonElement = createStyleElement())
	    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
	    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
	  } else {
	    // use multi-style-tag mode in all other cases
	    styleElement = createStyleElement()
	    update = applyToTag.bind(null, styleElement)
	    remove = function () {
	      styleElement.parentNode.removeChild(styleElement)
	    }
	  }
	
	  update(obj)
	
	  return function updateStyle (newObj /* StyleObjectPart */) {
	    if (newObj) {
	      if (newObj.css === obj.css &&
	          newObj.media === obj.media &&
	          newObj.sourceMap === obj.sourceMap) {
	        return
	      }
	      update(obj = newObj)
	    } else {
	      remove()
	    }
	  }
	}
	
	var replaceText = (function () {
	  var textStore = []
	
	  return function (index, replacement) {
	    textStore[index] = replacement
	    return textStore.filter(Boolean).join('\n')
	  }
	})()
	
	function applyToSingletonTag (styleElement, index, remove, obj) {
	  var css = remove ? '' : obj.css
	
	  if (styleElement.styleSheet) {
	    styleElement.styleSheet.cssText = replaceText(index, css)
	  } else {
	    var cssNode = document.createTextNode(css)
	    var childNodes = styleElement.childNodes
	    if (childNodes[index]) styleElement.removeChild(childNodes[index])
	    if (childNodes.length) {
	      styleElement.insertBefore(cssNode, childNodes[index])
	    } else {
	      styleElement.appendChild(cssNode)
	    }
	  }
	}
	
	function applyToTag (styleElement, obj) {
	  var css = obj.css
	  var media = obj.media
	  var sourceMap = obj.sourceMap
	
	  if (media) {
	    styleElement.setAttribute('media', media)
	  }
	
	  if (sourceMap) {
	    // https://developer.chrome.com/devtools/docs/javascript-debugging
	    // this makes source maps inside style tags work properly in Chrome
	    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
	    // http://stackoverflow.com/a/26603875
	    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
	  }
	
	  if (styleElement.styleSheet) {
	    styleElement.styleSheet.cssText = css
	  } else {
	    while (styleElement.firstChild) {
	      styleElement.removeChild(styleElement.firstChild)
	    }
	    styleElement.appendChild(document.createTextNode(css))
	  }
	}


/***/ },
/* 10 */
/***/ function(module, exports) {

	/**
	 * Translates the list format produced by css-loader into something
	 * easier to manipulate.
	 */
	module.exports = function listToStyles (parentId, list) {
	  var styles = []
	  var newStyles = {}
	  for (var i = 0; i < list.length; i++) {
	    var item = list[i]
	    var id = item[0]
	    var css = item[1]
	    var media = item[2]
	    var sourceMap = item[3]
	    var part = {
	      id: parentId + ':' + i,
	      css: css,
	      media: media,
	      sourceMap: sourceMap
	    }
	    if (!newStyles[id]) {
	      styles.push(newStyles[id] = { id: id, parts: [part] })
	    } else {
	      newStyles[id].parts.push(part)
	    }
	  }
	  return styles
	}


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _dragbox = __webpack_require__(12);
	
	var _dragbox2 = _interopRequireDefault(_dragbox);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: { dragbox: _dragbox2.default },
	  props: {
	    list: {
	      type: Array,
	      required: false
	    },
	    indicate: {
	      type: String,
	      required: true
	    }
	  },
	  data: function data() {
	    return {
	      currentItem: null,
	      targetItem: null,
	      dragging: false
	    };
	  },
	
	  methods: {}
	}; //
	//
	//
	//
	//
	//
	//

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(13),
	  /* template */
	  __webpack_require__(14),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/mybook/webpack/vue-drag/src/dragbox.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] dragbox.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-37d34086", Component.options)
	  } else {
	    hotAPI.reload("data-v-37d34086", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _drag = __webpack_require__(1);
	
	var _drag2 = _interopRequireDefault(_drag);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	Array.prototype.removeByObject = function (obj, indicate) {
	  for (var i = 0; i < this.length; i++) {
	    if (this[i][indicate] == obj[indicate]) {
	      this.splice(i, 1);
	      break;
	    }
	  }
	  return this;
	};
	Array.prototype.insert = function (index, item) {
	  this.splice(index, 0, item);
	  return this;
	};
	Array.prototype.getIndexByObject = function (item, indicate) {
	  for (var i = 0; i < this.length; i++) {
	    if (this[i][indicate] == item[indicate]) {
	      return i;
	    }
	  }
	};
	exports.default = {
	  components: { drag: _drag2.default },
	  props: {
	    item: {
	      type: Object,
	      required: true
	    },
	    indicate: {
	      type: String,
	      required: true
	    }
	  },
	  methods: {
	    drop: function drop() {
	      this.removeAllDragging();
	      this.$parent.currentItem = null;
	      // if(this.$parent.currentItem[this.indicate]!=this.item[this.indicate]){
	      //   let index = this.$parent.list.getIndexByObject(this.item,'name')
	      //   this.$parent.list = this.$parent.list.
	      //   removeByObject(this.$parent.currentItem,'name');
	      //   this.$parent.list.insert(index
	      //   ,this.$parent.currentItem)
	      // }
	    },
	    removeAllDragging: function removeAllDragging() {
	      for (var i = 0; i < this.$parent.$children.length; i++) {
	        this.$parent.$children[i].$el.classList.remove('dragging');
	      }
	    },
	    removeOtherDragging: function removeOtherDragging() {
	      for (var i = 0; i < this.$parent.$children.length; i++) {
	        if (this.$parent.targetItem && this.$parent.targetItem[this.indicate] != this.$parent.$children[i].item[this.indicate]) {
	          this.$parent.$children[i].$el.classList.remove('dragging');
	        }
	      }
	    },
	    mouseout: function mouseout() {
	      this.removeAllDragging();
	    },
	    dragleave: function dragleave() {
	      // this.$parent.currentItem = null;
	      // this.removeAllDragging()
	      console.log('离开目标作用域范围', this.$el);
	    },
	    dragenter: function dragenter() {
	      // console.log('进入作用域范围',this.$el);
	      if (this.$parent.currentItem && this.$parent.currentItem[this.indicate] != this.item[this.indicate]) {
	        var index = this.$parent.list.getIndexByObject(this.item, 'name');
	        this.$parent.list = this.$parent.list.removeByObject(this.$parent.currentItem, 'name');
	        this.$parent.list.insert(index, this.$parent.currentItem);
	      }
	    },
	    allowDrop: function allowDrop(event) {
	      event.preventDefault();
	      this.removeOtherDragging();
	      if (this.$parent.currentItem && this.$parent.currentItem[this.indicate] != this.item[this.indicate]) {
	        this.$parent.targetItem = this.item;
	        this.$el.classList.add('dragging');
	      }
	    }
	  }
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "dragbox",
	    on: {
	      "drop": function($event) {
	        _vm.drop($event)
	      },
	      "dragleave": function($event) {
	        _vm.dragleave($event, _vm.$el)
	      },
	      "dragover": function($event) {
	        _vm.allowDrop($event)
	      },
	      "dragenter": function($event) {
	        _vm.dragenter()
	      },
	      "mouseout": function($event) {
	        _vm.mouseout()
	      }
	    }
	  }, [_c('drag', {
	    attrs: {
	      "item": _vm.item
	    }
	  }, [_vm._t("default")], 2)], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-37d34086", module.exports)
	  }
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "dragboot"
	  }, _vm._l((_vm.list), function(item, $index) {
	    return _c('dragbox', {
	      attrs: {
	        "item": item,
	        "indicate": _vm.indicate
	      }
	    }, [_vm._t("default", null, {
	      item: item
	    })], 2)
	  }))
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-921a2972", module.exports)
	  }
	}

/***/ }
/******/ ])
});
;
//# sourceMappingURL=vue-drag.js.map