(() => { // webpackBootstrap
"use strict";
var __webpack_modules__ = ({
"./lib/globals/tinymce/core/api/PluginManager.js": 
/*!*******************************************************!*\
  !*** ./lib/globals/tinymce/core/api/PluginManager.js ***!
  \*******************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PluginManager: () => (PluginManager),
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
var global = tinymce.util.Tools.resolve('tinymce.PluginManager');

/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (global);
var PluginManager = global;


}),
"./lib/globals/tinymce/core/api/dom/DOMUtils.js": 
/*!******************************************************!*\
  !*** ./lib/globals/tinymce/core/api/dom/DOMUtils.js ***!
  \******************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DOMUtils: () => (DOMUtils),
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
var global = tinymce.util.Tools.resolve('tinymce.dom.DOMUtils');

/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (global);
var DOMUtils = global;


}),
"./lib/globals/tinymce/core/api/util/Tools.js": 
/*!****************************************************!*\
  !*** ./lib/globals/tinymce/core/api/util/Tools.js ***!
  \****************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Tools: () => (Tools),
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
var global = tinymce.util.Tools.resolve('tinymce.util.Tools');

/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (global);
var Tools = global;


}),
"../katamari/src/main/ts/ephox/katamari/api/Type.ts": 
/*!**********************************************************!*\
  !*** ../katamari/src/main/ts/ephox/katamari/api/Type.ts ***!
  \**********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  is: () => (is),
  isArray: () => (isArray),
  isArrayOf: () => (isArrayOf),
  isBoolean: () => (isBoolean),
  isFunction: () => (isFunction),
  isNonNullable: () => (isNonNullable),
  isNull: () => (isNull),
  isNullable: () => (isNullable),
  isNumber: () => (isNumber),
  isObject: () => (isObject),
  isPlainObject: () => (isPlainObject),
  isPromiseLike: () => (isPromiseLike),
  isString: () => (isString),
  isUndefined: () => (isUndefined)
});
/* eslint-disable @typescript-eslint/no-wrapper-object-types */ const getPrototypeOf = Object.getPrototypeOf;
const hasProto = (v, constructor, predicate)=>{
    if (predicate(v, constructor.prototype)) {
        return true;
    } else {
        // String-based fallback time
        return v.constructor?.name === constructor.name;
    }
};
const typeOf = (x)=>{
    const t = typeof x;
    if (x === null) {
        return 'null';
    } else if (t === 'object' && Array.isArray(x)) {
        return 'array';
    } else if (t === 'object' && hasProto(x, String, (o, proto)=>proto.isPrototypeOf(o))) {
        return 'string';
    } else {
        return t;
    }
};
const isType = (type)=>(value)=>typeOf(value) === type;
const isSimpleType = (type)=>(value)=>typeof value === type;
const eq = (t)=>(a)=>t === a;
const is = (value, constructor)=>isObject(value) && hasProto(value, constructor, (o, proto)=>getPrototypeOf(o) === proto);
const isString = isType('string');
const isObject = isType('object');
const isPlainObject = (value)=>is(value, Object);
const isArray = isType('array');
const isNull = eq(null);
const isBoolean = isSimpleType('boolean');
const isUndefined = eq(undefined);
const isNullable = (a)=>a === null || a === undefined;
const isNonNullable = (a)=>!isNullable(a);
const isFunction = isSimpleType('function');
const isNumber = isSimpleType('number');
const isArrayOf = (value, pred)=>{
    if (isArray(value)) {
        for(let i = 0, len = value.length; i < len; ++i){
            if (!pred(value[i])) {
                return false;
            }
        }
        return true;
    }
    return false;
};
const isPromiseLike = (x)=>isObject(x) && isFunction(x.then) && isFunction(x.catch);


}),
"./src/plugins/save/main/ts/Plugin.ts": 
/*!********************************************!*\
  !*** ./src/plugins/save/main/ts/Plugin.ts ***!
  \********************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var tinymce_core_api_PluginManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/PluginManager */ "./lib/globals/tinymce/core/api/PluginManager.js");
/* ESM import */var _api_Commands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/Commands */ "./src/plugins/save/main/ts/api/Commands.ts");
/* ESM import */var _api_Options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/Options */ "./src/plugins/save/main/ts/api/Options.ts");
/* ESM import */var _ui_Buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/Buttons */ "./src/plugins/save/main/ts/ui/Buttons.ts");




/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>{
    tinymce_core_api_PluginManager__WEBPACK_IMPORTED_MODULE_0__["default"].add('save', (editor)=>{
        _api_Options__WEBPACK_IMPORTED_MODULE_2__.register(editor);
        _ui_Buttons__WEBPACK_IMPORTED_MODULE_3__.register(editor);
        _api_Commands__WEBPACK_IMPORTED_MODULE_1__.register(editor);
    });
});


}),
"./src/plugins/save/main/ts/api/Commands.ts": 
/*!**************************************************!*\
  !*** ./src/plugins/save/main/ts/api/Commands.ts ***!
  \**************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  register: () => (register)
});
/* ESM import */var _core_Actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Actions */ "./src/plugins/save/main/ts/core/Actions.ts");

const register = (editor)=>{
    editor.addCommand('mceSave', ()=>{
        _core_Actions__WEBPACK_IMPORTED_MODULE_0__.save(editor);
    });
    editor.addCommand('mceCancel', ()=>{
        _core_Actions__WEBPACK_IMPORTED_MODULE_0__.cancel(editor);
    });
};



}),
"./src/plugins/save/main/ts/api/Options.ts": 
/*!*************************************************!*\
  !*** ./src/plugins/save/main/ts/api/Options.ts ***!
  \*************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  enableWhenDirty: () => (enableWhenDirty),
  getOnCancelCallback: () => (getOnCancelCallback),
  getOnSaveCallback: () => (getOnSaveCallback),
  register: () => (register)
});
const option = (name)=>(editor)=>editor.options.get(name);
const register = (editor)=>{
    const registerOption = editor.options.register;
    registerOption('save_enablewhendirty', {
        processor: 'boolean',
        default: true
    });
    registerOption('save_onsavecallback', {
        processor: 'function'
    });
    registerOption('save_oncancelcallback', {
        processor: 'function'
    });
};
const enableWhenDirty = option('save_enablewhendirty');
const getOnSaveCallback = option('save_onsavecallback');
const getOnCancelCallback = option('save_oncancelcallback');



}),
"./src/plugins/save/main/ts/core/Actions.ts": 
/*!**************************************************!*\
  !*** ./src/plugins/save/main/ts/core/Actions.ts ***!
  \**************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  cancel: () => (cancel),
  save: () => (save)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Type.ts");
/* ESM import */var tinymce_core_api_dom_DOMUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/dom/DOMUtils */ "./lib/globals/tinymce/core/api/dom/DOMUtils.js");
/* ESM import */var tinymce_core_api_util_Tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tinymce/core/api/util/Tools */ "./lib/globals/tinymce/core/api/util/Tools.js");
/* ESM import */var _api_Options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/Options */ "./src/plugins/save/main/ts/api/Options.ts");




const displayErrorMessage = (editor, message)=>{
    editor.notificationManager.open({
        text: message,
        type: 'error'
    });
};
const save = (editor)=>{
    const formObj = tinymce_core_api_dom_DOMUtils__WEBPACK_IMPORTED_MODULE_0__["default"].DOM.getParent(editor.id, 'form');
    if (_api_Options__WEBPACK_IMPORTED_MODULE_2__.enableWhenDirty(editor) && !editor.isDirty()) {
        return;
    }
    editor.save();
    // Use callback instead
    const onSaveCallback = _api_Options__WEBPACK_IMPORTED_MODULE_2__.getOnSaveCallback(editor);
    if (_ephox_katamari__WEBPACK_IMPORTED_MODULE_3__.isFunction(onSaveCallback)) {
        onSaveCallback.call(editor, editor);
        editor.nodeChanged();
        return;
    }
    if (formObj) {
        editor.setDirty(false);
        // TODO: TINY-6105 this is probably broken, as an event should be passed to `onsubmit`
        // so we need to investigate this at some point
        if (!formObj.onsubmit || formObj.onsubmit()) {
            if (typeof formObj.submit === 'function') {
                formObj.submit();
            } else {
                displayErrorMessage(editor, 'Error: Form submit field collision.');
            }
        }
        editor.nodeChanged();
    } else {
        displayErrorMessage(editor, 'Error: No form element found.');
    }
};
const cancel = (editor)=>{
    const h = tinymce_core_api_util_Tools__WEBPACK_IMPORTED_MODULE_1__["default"].trim(editor.startContent);
    // Use callback instead
    const onCancelCallback = _api_Options__WEBPACK_IMPORTED_MODULE_2__.getOnCancelCallback(editor);
    if (_ephox_katamari__WEBPACK_IMPORTED_MODULE_3__.isFunction(onCancelCallback)) {
        onCancelCallback.call(editor, editor);
        return;
    }
    // Reset the editor content back to the initial state
    editor.resetContent(h);
};



}),
"./src/plugins/save/main/ts/ui/Buttons.ts": 
/*!************************************************!*\
  !*** ./src/plugins/save/main/ts/ui/Buttons.ts ***!
  \************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  register: () => (register)
});
/* ESM import */var _api_Options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/Options */ "./src/plugins/save/main/ts/api/Options.ts");

const stateToggle = (editor)=>(api)=>{
        const handler = ()=>{
            api.setEnabled(!_api_Options__WEBPACK_IMPORTED_MODULE_0__.enableWhenDirty(editor) || editor.isDirty());
        };
        handler();
        editor.on('NodeChange dirty', handler);
        return ()=>editor.off('NodeChange dirty', handler);
    };
const register = (editor)=>{
    editor.ui.registry.addButton('save', {
        icon: 'save',
        tooltip: 'Save',
        enabled: false,
        onAction: ()=>editor.execCommand('mceSave'),
        onSetup: stateToggle(editor),
        shortcut: 'Meta+S'
    });
    editor.ui.registry.addButton('cancel', {
        icon: 'cancel',
        tooltip: 'Cancel',
        enabled: false,
        onAction: ()=>editor.execCommand('mceCancel'),
        onSetup: stateToggle(editor)
    });
    editor.addShortcut('Meta+S', '', 'mceSave');
};



}),

});
/************************************************************************/
// The module cache
var __webpack_module_cache__ = {};

// The require function
function __webpack_require__(moduleId) {

// Check if module is in cache
var cachedModule = __webpack_module_cache__[moduleId];
if (cachedModule !== undefined) {
return cachedModule.exports;
}
// Create a new module (and put it into the cache)
var module = (__webpack_module_cache__[moduleId] = {
exports: {}
});
// Execute the module function
__webpack_modules__[moduleId](module, module.exports, __webpack_require__);

// Return the exports of the module
return module.exports;

}

/************************************************************************/
// webpack/runtime/define_property_getters
(() => {
__webpack_require__.d = (exports, definition) => {
	for(var key in definition) {
        if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
    }
};
})();
// webpack/runtime/has_own_property
(() => {
__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
})();
// webpack/runtime/make_namespace_object
(() => {
// define __esModule on exports
__webpack_require__.r = (exports) => {
	if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	}
	Object.defineProperty(exports, '__esModule', { value: true });
};
})();
// webpack/runtime/rspack_version
(() => {
__webpack_require__.rv = () => ("1.5.2")
})();
// webpack/runtime/rspack_unique_id
(() => {
__webpack_require__.ruid = "bundler=rspack@1.5.2";

})();
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {

/*!******************************************!*\
  !*** ./src/plugins/save/main/ts/Main.ts ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _Plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Plugin */ "./src/plugins/save/main/ts/Plugin.ts");

(0,_Plugin__WEBPACK_IMPORTED_MODULE_0__["default"])(); /** *****
 * DO NOT EXPORT ANYTHING
 *
 * IF YOU DO ROLLUP WILL LEAVE A GLOBAL ON THE PAGE
 *******/ 

})();

})()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdGlueW1jZS9wbHVnaW5zL3NhdmUvcGx1Z2luLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGlueW1jZS8uL2xpYi9nbG9iYWxzL3RpbnltY2UvY29yZS9hcGkvUGx1Z2luTWFuYWdlci5qcyIsIndlYnBhY2s6Ly90aW55bWNlLy4vbGliL2dsb2JhbHMvdGlueW1jZS9jb3JlL2FwaS9kb20vRE9NVXRpbHMuanMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL2xpYi9nbG9iYWxzL3RpbnltY2UvY29yZS9hcGkvdXRpbC9Ub29scy5qcyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL2thdGFtYXJpL3NyYy9tYWluL3RzL2VwaG94L2thdGFtYXJpL2FwaS9UeXBlLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9zYXZlL21haW4vdHMvUGx1Z2luLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9zYXZlL21haW4vdHMvYXBpL0NvbW1hbmRzLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9zYXZlL21haW4vdHMvYXBpL09wdGlvbnMudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL3NhdmUvbWFpbi90cy9jb3JlL0FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL3NhdmUvbWFpbi90cy91aS9CdXR0b25zLnRzIiwid2VicGFjazovL3RpbnltY2Uvd2VicGFjay9ydW50aW1lL2RlZmluZV9wcm9wZXJ0eV9nZXR0ZXJzIiwid2VicGFjazovL3RpbnltY2Uvd2VicGFjay9ydW50aW1lL2hhc19vd25fcHJvcGVydHkiLCJ3ZWJwYWNrOi8vdGlueW1jZS93ZWJwYWNrL3J1bnRpbWUvbWFrZV9uYW1lc3BhY2Vfb2JqZWN0Iiwid2VicGFjazovL3RpbnltY2Uvd2VicGFjay9ydW50aW1lL3JzcGFja192ZXJzaW9uIiwid2VicGFjazovL3RpbnltY2Uvd2VicGFjay9ydW50aW1lL3JzcGFja191bmlxdWVfaWQiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL3NhdmUvbWFpbi90cy9NYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBnbG9iYWwgPSB0aW55bWNlLnV0aWwuVG9vbHMucmVzb2x2ZSgndGlueW1jZS5QbHVnaW5NYW5hZ2VyJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGdsb2JhbDtcbmV4cG9ydCB2YXIgUGx1Z2luTWFuYWdlciA9IGdsb2JhbDtcbiIsInZhciBnbG9iYWwgPSB0aW55bWNlLnV0aWwuVG9vbHMucmVzb2x2ZSgndGlueW1jZS5kb20uRE9NVXRpbHMnKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2xvYmFsO1xuZXhwb3J0IHZhciBET01VdGlscyA9IGdsb2JhbDtcbiIsInZhciBnbG9iYWwgPSB0aW55bWNlLnV0aWwuVG9vbHMucmVzb2x2ZSgndGlueW1jZS51dGlsLlRvb2xzJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGdsb2JhbDtcbmV4cG9ydCB2YXIgVG9vbHMgPSBnbG9iYWw7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8td3JhcHBlci1vYmplY3QtdHlwZXMgKi9cbmNvbnN0IGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuXG5pbnRlcmZhY2UgQ29uc3RydWN0b3I8VCBleHRlbmRzIE9iamVjdD4ge1xuICByZWFkb25seSBwcm90b3R5cGU6IFQ7XG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbn1cblxuY29uc3QgaGFzUHJvdG8gPSA8VCBleHRlbmRzIE9iamVjdD4odjogT2JqZWN0LCBjb25zdHJ1Y3RvcjogQ29uc3RydWN0b3I8VD4sIHByZWRpY2F0ZTogKHY6IE9iamVjdCwgcHJvdG90eXBlOiBUKSA9PiBib29sZWFuKTogYm9vbGVhbiA9PiB7XG4gIGlmIChwcmVkaWNhdGUodiwgY29uc3RydWN0b3IucHJvdG90eXBlKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIC8vIFN0cmluZy1iYXNlZCBmYWxsYmFjayB0aW1lXG4gICAgcmV0dXJuIHYuY29uc3RydWN0b3I/Lm5hbWUgPT09IGNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cbn07XG5cbmNvbnN0IHR5cGVPZiA9ICh4OiBhbnkpOiBzdHJpbmcgPT4ge1xuICBjb25zdCB0ID0gdHlwZW9mIHg7XG4gIGlmICh4ID09PSBudWxsKSB7XG4gICAgcmV0dXJuICdudWxsJztcbiAgfSBlbHNlIGlmICh0ID09PSAnb2JqZWN0JyAmJiBBcnJheS5pc0FycmF5KHgpKSB7XG4gICAgcmV0dXJuICdhcnJheSc7XG4gIH0gZWxzZSBpZiAodCA9PT0gJ29iamVjdCcgJiYgaGFzUHJvdG8oeCwgU3RyaW5nLCAobywgcHJvdG8pID0+IHByb3RvLmlzUHJvdG90eXBlT2YobykpKSB7XG4gICAgcmV0dXJuICdzdHJpbmcnO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0O1xuICB9XG59O1xuXG5jb25zdCBpc1R5cGUgPSA8WW9sbz4odHlwZTogc3RyaW5nKSA9PiAodmFsdWU6IGFueSk6IHZhbHVlIGlzIFlvbG8gPT5cbiAgdHlwZU9mKHZhbHVlKSA9PT0gdHlwZTtcblxuY29uc3QgaXNTaW1wbGVUeXBlID0gPFlvbG8+KHR5cGU6IHN0cmluZykgPT4gKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBZb2xvID0+XG4gIHR5cGVvZiB2YWx1ZSA9PT0gdHlwZTtcblxuY29uc3QgZXEgPSA8VD4gKHQ6IFQpID0+IChhOiBhbnkpOiBhIGlzIFQgPT5cbiAgdCA9PT0gYTtcblxuZXhwb3J0IGNvbnN0IGlzID0gPEUgZXh0ZW5kcyBPYmplY3Q+KHZhbHVlOiBhbnksIGNvbnN0cnVjdG9yOiBDb25zdHJ1Y3RvcjxFPik6IHZhbHVlIGlzIEUgPT5cbiAgaXNPYmplY3QodmFsdWUpICYmIGhhc1Byb3RvPEU+KHZhbHVlLCBjb25zdHJ1Y3RvciwgKG8sIHByb3RvKSA9PiBnZXRQcm90b3R5cGVPZihvKSA9PT0gcHJvdG8pO1xuXG5leHBvcnQgY29uc3QgaXNTdHJpbmc6ICh2YWx1ZTogYW55KSA9PiB2YWx1ZSBpcyBzdHJpbmcgPVxuICBpc1R5cGUoJ3N0cmluZycpO1xuXG5leHBvcnQgY29uc3QgaXNPYmplY3Q6ICh2YWx1ZTogYW55KSA9PiB2YWx1ZSBpcyBPYmplY3QgPVxuICBpc1R5cGUoJ29iamVjdCcpO1xuXG5leHBvcnQgY29uc3QgaXNQbGFpbk9iamVjdCA9ICh2YWx1ZTogdW5rbm93bik6IHZhbHVlIGlzIE9iamVjdCA9PlxuICBpcyh2YWx1ZSwgT2JqZWN0KTtcblxuZXhwb3J0IGNvbnN0IGlzQXJyYXk6ICh2YWx1ZTogYW55KSA9PiB2YWx1ZSBpcyBBcnJheTx1bmtub3duPiA9XG4gIGlzVHlwZSgnYXJyYXknKTtcblxuZXhwb3J0IGNvbnN0IGlzTnVsbDogKGE6IGFueSkgPT4gYSBpcyBudWxsID1cbiAgZXEobnVsbCk7XG5cbmV4cG9ydCBjb25zdCBpc0Jvb2xlYW46ICh2YWx1ZTogYW55KSA9PiB2YWx1ZSBpcyBib29sZWFuID1cbiAgaXNTaW1wbGVUeXBlPGJvb2xlYW4+KCdib29sZWFuJyk7XG5cbmV4cG9ydCBjb25zdCBpc1VuZGVmaW5lZDogKGE6IGFueSkgPT4gYSBpcyB1bmRlZmluZWQgPVxuICBlcSh1bmRlZmluZWQpO1xuXG5leHBvcnQgY29uc3QgaXNOdWxsYWJsZSA9IChhOiBhbnkpOiBhIGlzIG51bGwgfCB1bmRlZmluZWQgPT5cbiAgYSA9PT0gbnVsbCB8fCBhID09PSB1bmRlZmluZWQ7XG5cbmV4cG9ydCBjb25zdCBpc05vbk51bGxhYmxlID0gPEE+IChhOiBBIHwgbnVsbCB8IHVuZGVmaW5lZCk6IGEgaXMgTm9uTnVsbGFibGU8QT4gPT5cbiAgIWlzTnVsbGFibGUoYSk7XG5cbmV4cG9ydCBjb25zdCBpc0Z1bmN0aW9uOiAodmFsdWU6IGFueSkgPT4gdmFsdWUgaXMgRnVuY3Rpb24gPVxuICBpc1NpbXBsZVR5cGU8RnVuY3Rpb24+KCdmdW5jdGlvbicpO1xuXG5leHBvcnQgY29uc3QgaXNOdW1iZXI6ICh2YWx1ZTogYW55KSA9PiB2YWx1ZSBpcyBudW1iZXIgPVxuICBpc1NpbXBsZVR5cGU8bnVtYmVyPignbnVtYmVyJyk7XG5cbmV4cG9ydCBjb25zdCBpc0FycmF5T2YgPSA8RT4odmFsdWU6IGFueSwgcHJlZDogKHg6IGFueSkgPT4geCBpcyBFKTogdmFsdWUgaXMgQXJyYXk8RT4gPT4ge1xuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdmFsdWUubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIGlmICghKHByZWQodmFsdWVbaV0pKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc1Byb21pc2VMaWtlID0gKHg6IGFueSk6IHggaXMgUHJvbWlzZTx1bmtub3duPiA9PlxuICBpc09iamVjdCh4KVxuICAmJiBpc0Z1bmN0aW9uKHgudGhlbilcbiAgJiYgaXNGdW5jdGlvbih4LmNhdGNoKTtcbiIsImltcG9ydCBQbHVnaW5NYW5hZ2VyIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvUGx1Z2luTWFuYWdlcic7XG5cbmltcG9ydCAqIGFzIENvbW1hbmRzIGZyb20gJy4vYXBpL0NvbW1hbmRzJztcbmltcG9ydCAqIGFzIE9wdGlvbnMgZnJvbSAnLi9hcGkvT3B0aW9ucyc7XG5pbXBvcnQgKiBhcyBCdXR0b25zIGZyb20gJy4vdWkvQnV0dG9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpOiB2b2lkID0+IHtcbiAgUGx1Z2luTWFuYWdlci5hZGQoJ3NhdmUnLCAoZWRpdG9yKSA9PiB7XG4gICAgT3B0aW9ucy5yZWdpc3RlcihlZGl0b3IpO1xuICAgIEJ1dHRvbnMucmVnaXN0ZXIoZWRpdG9yKTtcbiAgICBDb21tYW5kcy5yZWdpc3RlcihlZGl0b3IpO1xuICB9KTtcbn07XG4iLCJpbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuXG5pbXBvcnQgKiBhcyBBY3Rpb25zIGZyb20gJy4uL2NvcmUvQWN0aW9ucyc7XG5cbmNvbnN0IHJlZ2lzdGVyID0gKGVkaXRvcjogRWRpdG9yKTogdm9pZCA9PiB7XG4gIGVkaXRvci5hZGRDb21tYW5kKCdtY2VTYXZlJywgKCkgPT4ge1xuICAgIEFjdGlvbnMuc2F2ZShlZGl0b3IpO1xuICB9KTtcblxuICBlZGl0b3IuYWRkQ29tbWFuZCgnbWNlQ2FuY2VsJywgKCkgPT4ge1xuICAgIEFjdGlvbnMuY2FuY2VsKGVkaXRvcik7XG4gIH0pO1xufTtcblxuZXhwb3J0IHtcbiAgcmVnaXN0ZXJcbn07XG4iLCJpbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuaW1wb3J0IHR5cGUgeyBFZGl0b3JPcHRpb25zIH0gZnJvbSAndGlueW1jZS9jb3JlL2FwaS9PcHRpb25UeXBlcyc7XG5cbmNvbnN0IG9wdGlvbjoge1xuICA8SyBleHRlbmRzIGtleW9mIEVkaXRvck9wdGlvbnM+KG5hbWU6IEspOiAoZWRpdG9yOiBFZGl0b3IpID0+IEVkaXRvck9wdGlvbnNbS107XG4gIDxUPihuYW1lOiBzdHJpbmcpOiAoZWRpdG9yOiBFZGl0b3IpID0+IFQ7XG59ID0gKG5hbWU6IHN0cmluZykgPT4gKGVkaXRvcjogRWRpdG9yKSA9PlxuICBlZGl0b3Iub3B0aW9ucy5nZXQobmFtZSk7XG5cbmNvbnN0IHJlZ2lzdGVyID0gKGVkaXRvcjogRWRpdG9yKTogdm9pZCA9PiB7XG4gIGNvbnN0IHJlZ2lzdGVyT3B0aW9uID0gZWRpdG9yLm9wdGlvbnMucmVnaXN0ZXI7XG5cbiAgcmVnaXN0ZXJPcHRpb24oJ3NhdmVfZW5hYmxld2hlbmRpcnR5Jywge1xuICAgIHByb2Nlc3NvcjogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IHRydWVcbiAgfSk7XG5cbiAgcmVnaXN0ZXJPcHRpb24oJ3NhdmVfb25zYXZlY2FsbGJhY2snLCB7XG4gICAgcHJvY2Vzc29yOiAnZnVuY3Rpb24nXG4gIH0pO1xuXG4gIHJlZ2lzdGVyT3B0aW9uKCdzYXZlX29uY2FuY2VsY2FsbGJhY2snLCB7XG4gICAgcHJvY2Vzc29yOiAnZnVuY3Rpb24nXG4gIH0pO1xufTtcblxuY29uc3QgZW5hYmxlV2hlbkRpcnR5ID0gb3B0aW9uPGJvb2xlYW4+KCdzYXZlX2VuYWJsZXdoZW5kaXJ0eScpO1xuY29uc3QgZ2V0T25TYXZlQ2FsbGJhY2sgPSBvcHRpb248KChlZGl0b3I6IEVkaXRvcikgPT4gdm9pZCkgfCB1bmRlZmluZWQ+KCdzYXZlX29uc2F2ZWNhbGxiYWNrJyk7XG5jb25zdCBnZXRPbkNhbmNlbENhbGxiYWNrID0gb3B0aW9uPCgoZWRpdG9yOiBFZGl0b3IpID0+IHZvaWQpIHwgdW5kZWZpbmVkPignc2F2ZV9vbmNhbmNlbGNhbGxiYWNrJyk7XG5cbmV4cG9ydCB7XG4gIHJlZ2lzdGVyLFxuICBlbmFibGVXaGVuRGlydHksXG4gIGdldE9uU2F2ZUNhbGxiYWNrLFxuICBnZXRPbkNhbmNlbENhbGxiYWNrXG59O1xuIiwiaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmltcG9ydCBET01VdGlscyBmcm9tICd0aW55bWNlL2NvcmUvYXBpL2RvbS9ET01VdGlscyc7XG5pbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuaW1wb3J0IFRvb2xzIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvdXRpbC9Ub29scyc7XG5cbmltcG9ydCAqIGFzIE9wdGlvbnMgZnJvbSAnLi4vYXBpL09wdGlvbnMnO1xuXG5jb25zdCBkaXNwbGF5RXJyb3JNZXNzYWdlID0gKGVkaXRvcjogRWRpdG9yLCBtZXNzYWdlOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgZWRpdG9yLm5vdGlmaWNhdGlvbk1hbmFnZXIub3Blbih7XG4gICAgdGV4dDogbWVzc2FnZSxcbiAgICB0eXBlOiAnZXJyb3InXG4gIH0pO1xufTtcblxuY29uc3Qgc2F2ZSA9IChlZGl0b3I6IEVkaXRvcik6IHZvaWQgPT4ge1xuICBjb25zdCBmb3JtT2JqID0gRE9NVXRpbHMuRE9NLmdldFBhcmVudChlZGl0b3IuaWQsICdmb3JtJyk7XG5cbiAgaWYgKE9wdGlvbnMuZW5hYmxlV2hlbkRpcnR5KGVkaXRvcikgJiYgIWVkaXRvci5pc0RpcnR5KCkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBlZGl0b3Iuc2F2ZSgpO1xuXG4gIC8vIFVzZSBjYWxsYmFjayBpbnN0ZWFkXG4gIGNvbnN0IG9uU2F2ZUNhbGxiYWNrID0gT3B0aW9ucy5nZXRPblNhdmVDYWxsYmFjayhlZGl0b3IpO1xuICBpZiAoVHlwZS5pc0Z1bmN0aW9uKG9uU2F2ZUNhbGxiYWNrKSkge1xuICAgIG9uU2F2ZUNhbGxiYWNrLmNhbGwoZWRpdG9yLCBlZGl0b3IpO1xuICAgIGVkaXRvci5ub2RlQ2hhbmdlZCgpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChmb3JtT2JqKSB7XG4gICAgZWRpdG9yLnNldERpcnR5KGZhbHNlKTtcblxuICAgIC8vIFRPRE86IFRJTlktNjEwNSB0aGlzIGlzIHByb2JhYmx5IGJyb2tlbiwgYXMgYW4gZXZlbnQgc2hvdWxkIGJlIHBhc3NlZCB0byBgb25zdWJtaXRgXG4gICAgLy8gc28gd2UgbmVlZCB0byBpbnZlc3RpZ2F0ZSB0aGlzIGF0IHNvbWUgcG9pbnRcbiAgICBpZiAoIWZvcm1PYmoub25zdWJtaXQgfHwgKGZvcm1PYmogYXMgYW55KS5vbnN1Ym1pdCgpKSB7XG4gICAgICBpZiAodHlwZW9mIGZvcm1PYmouc3VibWl0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGZvcm1PYmouc3VibWl0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkaXNwbGF5RXJyb3JNZXNzYWdlKGVkaXRvciwgJ0Vycm9yOiBGb3JtIHN1Ym1pdCBmaWVsZCBjb2xsaXNpb24uJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZWRpdG9yLm5vZGVDaGFuZ2VkKCk7XG4gIH0gZWxzZSB7XG4gICAgZGlzcGxheUVycm9yTWVzc2FnZShlZGl0b3IsICdFcnJvcjogTm8gZm9ybSBlbGVtZW50IGZvdW5kLicpO1xuICB9XG59O1xuXG5jb25zdCBjYW5jZWwgPSAoZWRpdG9yOiBFZGl0b3IpOiB2b2lkID0+IHtcbiAgY29uc3QgaCA9IFRvb2xzLnRyaW0oZWRpdG9yLnN0YXJ0Q29udGVudCk7XG5cbiAgLy8gVXNlIGNhbGxiYWNrIGluc3RlYWRcbiAgY29uc3Qgb25DYW5jZWxDYWxsYmFjayA9IE9wdGlvbnMuZ2V0T25DYW5jZWxDYWxsYmFjayhlZGl0b3IpO1xuICBpZiAoVHlwZS5pc0Z1bmN0aW9uKG9uQ2FuY2VsQ2FsbGJhY2spKSB7XG4gICAgb25DYW5jZWxDYWxsYmFjay5jYWxsKGVkaXRvciwgZWRpdG9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBSZXNldCB0aGUgZWRpdG9yIGNvbnRlbnQgYmFjayB0byB0aGUgaW5pdGlhbCBzdGF0ZVxuICBlZGl0b3IucmVzZXRDb250ZW50KGgpO1xufTtcblxuZXhwb3J0IHtcbiAgc2F2ZSxcbiAgY2FuY2VsXG59O1xuIiwiaW1wb3J0IHR5cGUgRWRpdG9yIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvRWRpdG9yJztcbmltcG9ydCB0eXBlIHsgVG9vbGJhciB9IGZyb20gJ3RpbnltY2UvY29yZS9hcGkvdWkvVWknO1xuXG5pbXBvcnQgKiBhcyBPcHRpb25zIGZyb20gJy4uL2FwaS9PcHRpb25zJztcblxuY29uc3Qgc3RhdGVUb2dnbGUgPSAoZWRpdG9yOiBFZGl0b3IpID0+IChhcGk6IFRvb2xiYXIuVG9vbGJhckJ1dHRvbkluc3RhbmNlQXBpKSA9PiB7XG4gIGNvbnN0IGhhbmRsZXIgPSAoKSA9PiB7XG4gICAgYXBpLnNldEVuYWJsZWQoIU9wdGlvbnMuZW5hYmxlV2hlbkRpcnR5KGVkaXRvcikgfHwgZWRpdG9yLmlzRGlydHkoKSk7XG4gIH07XG5cbiAgaGFuZGxlcigpO1xuICBlZGl0b3Iub24oJ05vZGVDaGFuZ2UgZGlydHknLCBoYW5kbGVyKTtcbiAgcmV0dXJuICgpID0+IGVkaXRvci5vZmYoJ05vZGVDaGFuZ2UgZGlydHknLCBoYW5kbGVyKTtcbn07XG5cbmNvbnN0IHJlZ2lzdGVyID0gKGVkaXRvcjogRWRpdG9yKTogdm9pZCA9PiB7XG4gIGVkaXRvci51aS5yZWdpc3RyeS5hZGRCdXR0b24oJ3NhdmUnLCB7XG4gICAgaWNvbjogJ3NhdmUnLFxuICAgIHRvb2x0aXA6ICdTYXZlJyxcbiAgICBlbmFibGVkOiBmYWxzZSxcbiAgICBvbkFjdGlvbjogKCkgPT4gZWRpdG9yLmV4ZWNDb21tYW5kKCdtY2VTYXZlJyksXG4gICAgb25TZXR1cDogc3RhdGVUb2dnbGUoZWRpdG9yKSxcbiAgICBzaG9ydGN1dDogJ01ldGErUydcbiAgfSk7XG5cbiAgZWRpdG9yLnVpLnJlZ2lzdHJ5LmFkZEJ1dHRvbignY2FuY2VsJywge1xuICAgIGljb246ICdjYW5jZWwnLFxuICAgIHRvb2x0aXA6ICdDYW5jZWwnLFxuICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgIG9uQWN0aW9uOiAoKSA9PiBlZGl0b3IuZXhlY0NvbW1hbmQoJ21jZUNhbmNlbCcpLFxuICAgIG9uU2V0dXA6IHN0YXRlVG9nZ2xlKGVkaXRvcilcbiAgfSk7XG5cbiAgZWRpdG9yLmFkZFNob3J0Y3V0KCdNZXRhK1MnLCAnJywgJ21jZVNhdmUnKTtcbn07XG5cbmV4cG9ydCB7XG4gIHJlZ2lzdGVyXG59O1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuICAgICAgICBpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG4gICAgICAgIH1cbiAgICB9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ2ID0gKCkgPT4gKFwiMS41LjJcIikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ1aWQgPSBcImJ1bmRsZXI9cnNwYWNrQDEuNS4yXCI7XG4iLCJpbXBvcnQgUGx1Z2luIGZyb20gJy4vUGx1Z2luJztcblxuUGx1Z2luKCk7XG5cbi8qKiAqKioqKlxuICogRE8gTk9UIEVYUE9SVCBBTllUSElOR1xuICpcbiAqIElGIFlPVSBETyBST0xMVVAgV0lMTCBMRUFWRSBBIEdMT0JBTCBPTiBUSEUgUEFHRVxuICoqKioqKiovXG4iXSwibmFtZXMiOlsiZ2V0UHJvdG90eXBlT2YiLCJPYmplY3QiLCJoYXNQcm90byIsInYiLCJjb25zdHJ1Y3RvciIsInByZWRpY2F0ZSIsInR5cGVPZiIsIngiLCJ0IiwiQXJyYXkiLCJTdHJpbmciLCJvIiwicHJvdG8iLCJpc1R5cGUiLCJ0eXBlIiwidmFsdWUiLCJpc1NpbXBsZVR5cGUiLCJlcSIsImEiLCJpcyIsImlzT2JqZWN0IiwiaXNTdHJpbmciLCJpc1BsYWluT2JqZWN0IiwiaXNBcnJheSIsImlzTnVsbCIsImlzQm9vbGVhbiIsImlzVW5kZWZpbmVkIiwidW5kZWZpbmVkIiwiaXNOdWxsYWJsZSIsImlzTm9uTnVsbGFibGUiLCJpc0Z1bmN0aW9uIiwiaXNOdW1iZXIiLCJpc0FycmF5T2YiLCJwcmVkIiwiaSIsImxlbiIsImlzUHJvbWlzZUxpa2UiLCJQbHVnaW5NYW5hZ2VyIiwiQ29tbWFuZHMiLCJPcHRpb25zIiwiQnV0dG9ucyIsImVkaXRvciIsIkFjdGlvbnMiLCJyZWdpc3RlciIsIm9wdGlvbiIsIm5hbWUiLCJyZWdpc3Rlck9wdGlvbiIsImVuYWJsZVdoZW5EaXJ0eSIsImdldE9uU2F2ZUNhbGxiYWNrIiwiZ2V0T25DYW5jZWxDYWxsYmFjayIsIlR5cGUiLCJET01VdGlscyIsIlRvb2xzIiwiZGlzcGxheUVycm9yTWVzc2FnZSIsIm1lc3NhZ2UiLCJzYXZlIiwiZm9ybU9iaiIsIm9uU2F2ZUNhbGxiYWNrIiwiY2FuY2VsIiwiaCIsIm9uQ2FuY2VsQ2FsbGJhY2siLCJzdGF0ZVRvZ2dsZSIsImFwaSIsImhhbmRsZXIiLCJQbHVnaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSw2REFBZSxNQUFNLEVBQUM7QUFDZjs7Ozs7Ozs7Ozs7Ozs7QUNIUDs7QUFFQSw2REFBZSxNQUFNLEVBQUM7QUFDZjs7Ozs7Ozs7Ozs7Ozs7QUNIUDs7QUFFQSw2REFBZSxNQUFNLEVBQUM7QUFDZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIUCw2REFBNkQsR0FDN0QsTUFBTUEsaUJBQWlCQyxPQUFPLGNBQWM7QUFPNUMsTUFBTUMsV0FBVyxDQUFtQkMsR0FBV0MsYUFBNkJDO0lBQzFFLElBQUlBLFVBQVVGLEdBQUdDLFlBQVksU0FBUyxHQUFHO1FBQ3ZDLE9BQU87SUFDVCxPQUFPO1FBQ0wsNkJBQTZCO1FBQzdCLE9BQU9ELEVBQUUsV0FBVyxFQUFFLFNBQVNDLFlBQVksSUFBSTtJQUNqRDtBQUNGO0FBRUEsTUFBTUUsU0FBUyxDQUFDQztJQUNkLE1BQU1DLElBQUksT0FBT0Q7SUFDakIsSUFBSUEsTUFBTSxNQUFNO1FB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