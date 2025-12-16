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
"./lib/globals/tinymce/core/api/util/VK.js": 
/*!*************************************************!*\
  !*** ./lib/globals/tinymce/core/api/util/VK.js ***!
  \*************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  VK: () => (VK),
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
var global = tinymce.util.Tools.resolve('tinymce.util.VK');

/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (global);
var VK = global;


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
"./src/plugins/nonbreaking/main/ts/Plugin.ts": 
/*!***************************************************!*\
  !*** ./src/plugins/nonbreaking/main/ts/Plugin.ts ***!
  \***************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var tinymce_core_api_PluginManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/PluginManager */ "./lib/globals/tinymce/core/api/PluginManager.js");
/* ESM import */var _api_Commands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/Commands */ "./src/plugins/nonbreaking/main/ts/api/Commands.ts");
/* ESM import */var _api_Options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/Options */ "./src/plugins/nonbreaking/main/ts/api/Options.ts");
/* ESM import */var _core_Keyboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/Keyboard */ "./src/plugins/nonbreaking/main/ts/core/Keyboard.ts");
/* ESM import */var _ui_Buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/Buttons */ "./src/plugins/nonbreaking/main/ts/ui/Buttons.ts");





/**
 * This class contains all core logic for the nonbreaking plugin.
 *
 * @class tinymce.nonbreaking.Plugin
 * @private
 */ /* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>{
    tinymce_core_api_PluginManager__WEBPACK_IMPORTED_MODULE_0__["default"].add('nonbreaking', (editor)=>{
        _api_Options__WEBPACK_IMPORTED_MODULE_2__.register(editor);
        _api_Commands__WEBPACK_IMPORTED_MODULE_1__.register(editor);
        _ui_Buttons__WEBPACK_IMPORTED_MODULE_4__.register(editor);
        _core_Keyboard__WEBPACK_IMPORTED_MODULE_3__.setup(editor);
    });
});


}),
"./src/plugins/nonbreaking/main/ts/api/Commands.ts": 
/*!*********************************************************!*\
  !*** ./src/plugins/nonbreaking/main/ts/api/Commands.ts ***!
  \*********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  register: () => (register)
});
/* ESM import */var _core_Actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Actions */ "./src/plugins/nonbreaking/main/ts/core/Actions.ts");

const register = (editor)=>{
    editor.addCommand('mceNonBreaking', ()=>{
        _core_Actions__WEBPACK_IMPORTED_MODULE_0__.insertNbsp(editor, 1);
    });
};



}),
"./src/plugins/nonbreaking/main/ts/api/Options.ts": 
/*!********************************************************!*\
  !*** ./src/plugins/nonbreaking/main/ts/api/Options.ts ***!
  \********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getKeyboardSpaces: () => (getKeyboardSpaces),
  register: () => (register),
  wrapNbsps: () => (wrapNbsps)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Type.ts");

const option = (name)=>(editor)=>editor.options.get(name);
const register = (editor)=>{
    const registerOption = editor.options.register;
    registerOption('nonbreaking_force_tab', {
        processor: (value)=>{
            if (_ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.isBoolean(value)) {
                return {
                    value: value ? 3 : 0,
                    valid: true
                };
            } else if (_ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.isNumber(value)) {
                return {
                    value,
                    valid: true
                };
            } else {
                return {
                    valid: false,
                    message: 'Must be a boolean or number.'
                };
            }
        },
        default: false
    });
    registerOption('nonbreaking_wrap', {
        processor: 'boolean',
        default: true
    });
};
const getKeyboardSpaces = option('nonbreaking_force_tab');
const wrapNbsps = option('nonbreaking_wrap');



}),
"./src/plugins/nonbreaking/main/ts/core/Actions.ts": 
/*!*********************************************************!*\
  !*** ./src/plugins/nonbreaking/main/ts/core/Actions.ts ***!
  \*********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  insertNbsp: () => (insertNbsp)
});
/* ESM import */var _api_Options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/Options */ "./src/plugins/nonbreaking/main/ts/api/Options.ts");

const stringRepeat = (string, repeats)=>{
    let str = '';
    for(let index = 0; index < repeats; index++){
        str += string;
    }
    return str;
};
const isVisualCharsEnabled = (editor)=>editor.plugins.visualchars ? editor.plugins.visualchars.isEnabled() : false;
const insertNbsp = (editor, times)=>{
    const classes = ()=>isVisualCharsEnabled(editor) ? 'mce-nbsp-wrap mce-nbsp' : 'mce-nbsp-wrap';
    const nbspSpan = ()=>`<span class="${classes()}" contenteditable="false">${stringRepeat('&nbsp;', times)}</span>`;
    const shouldWrap = _api_Options__WEBPACK_IMPORTED_MODULE_0__.wrapNbsps(editor);
    const html = shouldWrap || editor.plugins.visualchars ? nbspSpan() : stringRepeat('&nbsp;', times);
    editor.undoManager.transact(()=>editor.insertContent(html));
};



}),
"./src/plugins/nonbreaking/main/ts/core/Keyboard.ts": 
/*!**********************************************************!*\
  !*** ./src/plugins/nonbreaking/main/ts/core/Keyboard.ts ***!
  \**********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  setup: () => (setup)
});
/* ESM import */var tinymce_core_api_util_VK__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/util/VK */ "./lib/globals/tinymce/core/api/util/VK.js");
/* ESM import */var _api_Options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/Options */ "./src/plugins/nonbreaking/main/ts/api/Options.ts");
/* ESM import */var _Actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Actions */ "./src/plugins/nonbreaking/main/ts/core/Actions.ts");



const setup = (editor)=>{
    const spaces = _api_Options__WEBPACK_IMPORTED_MODULE_1__.getKeyboardSpaces(editor);
    if (spaces > 0) {
        editor.on('keydown', (e)=>{
            if (e.keyCode === tinymce_core_api_util_VK__WEBPACK_IMPORTED_MODULE_0__["default"].TAB && !e.isDefaultPrevented()) {
                if (e.shiftKey) {
                    return;
                }
                e.preventDefault();
                e.stopImmediatePropagation();
                _Actions__WEBPACK_IMPORTED_MODULE_2__.insertNbsp(editor, spaces);
            }
        });
    }
};



}),
"./src/plugins/nonbreaking/main/ts/ui/Buttons.ts": 
/*!*******************************************************!*\
  !*** ./src/plugins/nonbreaking/main/ts/ui/Buttons.ts ***!
  \*******************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  register: () => (register)
});
const onSetupEditable = (editor)=>(api)=>{
        const nodeChanged = ()=>{
            api.setEnabled(editor.selection.isEditable());
        };
        editor.on('NodeChange', nodeChanged);
        nodeChanged();
        return ()=>{
            editor.off('NodeChange', nodeChanged);
        };
    };
const register = (editor)=>{
    const onAction = ()=>editor.execCommand('mceNonBreaking');
    editor.ui.registry.addButton('nonbreaking', {
        icon: 'non-breaking',
        tooltip: 'Nonbreaking space',
        onAction,
        onSetup: onSetupEditable(editor)
    });
    editor.ui.registry.addMenuItem('nonbreaking', {
        icon: 'non-breaking',
        text: 'Nonbreaking space',
        onAction,
        onSetup: onSetupEditable(editor)
    });
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

/*!*************************************************!*\
  !*** ./src/plugins/nonbreaking/main/ts/Main.ts ***!
  \*************************************************/
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _Plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Plugin */ "./src/plugins/nonbreaking/main/ts/Plugin.ts");

(0,_Plugin__WEBPACK_IMPORTED_MODULE_0__["default"])(); /** *****
 * DO NOT EXPORT ANYTHING
 *
 * IF YOU DO ROLLUP WILL LEAVE A GLOBAL ON THE PAGE
 *******/ 

})();

})()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdGlueW1jZS9wbHVnaW5zL25vbmJyZWFraW5nL3BsdWdpbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL3RpbnltY2UvLi9saWIvZ2xvYmFscy90aW55bWNlL2NvcmUvYXBpL1BsdWdpbk1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL2xpYi9nbG9iYWxzL3RpbnltY2UvY29yZS9hcGkvdXRpbC9WSy5qcyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL2thdGFtYXJpL3NyYy9tYWluL3RzL2VwaG94L2thdGFtYXJpL2FwaS9UeXBlLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9ub25icmVha2luZy9tYWluL3RzL1BsdWdpbi50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvbm9uYnJlYWtpbmcvbWFpbi90cy9hcGkvQ29tbWFuZHMudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL25vbmJyZWFraW5nL21haW4vdHMvYXBpL09wdGlvbnMudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL25vbmJyZWFraW5nL21haW4vdHMvY29yZS9BY3Rpb25zLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9ub25icmVha2luZy9tYWluL3RzL2NvcmUvS2V5Ym9hcmQudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL25vbmJyZWFraW5nL21haW4vdHMvdWkvQnV0dG9ucy50cyIsIndlYnBhY2s6Ly90aW55bWNlL3dlYnBhY2svcnVudGltZS9kZWZpbmVfcHJvcGVydHlfZ2V0dGVycyIsIndlYnBhY2s6Ly90aW55bWNlL3dlYnBhY2svcnVudGltZS9oYXNfb3duX3Byb3BlcnR5Iiwid2VicGFjazovL3RpbnltY2Uvd2VicGFjay9ydW50aW1lL21ha2VfbmFtZXNwYWNlX29iamVjdCIsIndlYnBhY2s6Ly90aW55bWNlL3dlYnBhY2svcnVudGltZS9yc3BhY2tfdmVyc2lvbiIsIndlYnBhY2s6Ly90aW55bWNlL3dlYnBhY2svcnVudGltZS9yc3BhY2tfdW5pcXVlX2lkIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9ub25icmVha2luZy9tYWluL3RzL01haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGdsb2JhbCA9IHRpbnltY2UudXRpbC5Ub29scy5yZXNvbHZlKCd0aW55bWNlLlBsdWdpbk1hbmFnZXInKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2xvYmFsO1xuZXhwb3J0IHZhciBQbHVnaW5NYW5hZ2VyID0gZ2xvYmFsO1xuIiwidmFyIGdsb2JhbCA9IHRpbnltY2UudXRpbC5Ub29scy5yZXNvbHZlKCd0aW55bWNlLnV0aWwuVksnKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2xvYmFsO1xuZXhwb3J0IHZhciBWSyA9IGdsb2JhbDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby13cmFwcGVyLW9iamVjdC10eXBlcyAqL1xuY29uc3QgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG5cbmludGVyZmFjZSBDb25zdHJ1Y3RvcjxUIGV4dGVuZHMgT2JqZWN0PiB7XG4gIHJlYWRvbmx5IHByb3RvdHlwZTogVDtcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xufVxuXG5jb25zdCBoYXNQcm90byA9IDxUIGV4dGVuZHMgT2JqZWN0Pih2OiBPYmplY3QsIGNvbnN0cnVjdG9yOiBDb25zdHJ1Y3RvcjxUPiwgcHJlZGljYXRlOiAodjogT2JqZWN0LCBwcm90b3R5cGU6IFQpID0+IGJvb2xlYW4pOiBib29sZWFuID0+IHtcbiAgaWYgKHByZWRpY2F0ZSh2LCBjb25zdHJ1Y3Rvci5wcm90b3R5cGUpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgLy8gU3RyaW5nLWJhc2VkIGZhbGxiYWNrIHRpbWVcbiAgICByZXR1cm4gdi5jb25zdHJ1Y3Rvcj8ubmFtZSA9PT0gY29uc3RydWN0b3IubmFtZTtcbiAgfVxufTtcblxuY29uc3QgdHlwZU9mID0gKHg6IGFueSk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IHQgPSB0eXBlb2YgeDtcbiAgaWYgKHggPT09IG51bGwpIHtcbiAgICByZXR1cm4gJ251bGwnO1xuICB9IGVsc2UgaWYgKHQgPT09ICdvYmplY3QnICYmIEFycmF5LmlzQXJyYXkoeCkpIHtcbiAgICByZXR1cm4gJ2FycmF5JztcbiAgfSBlbHNlIGlmICh0ID09PSAnb2JqZWN0JyAmJiBoYXNQcm90byh4LCBTdHJpbmcsIChvLCBwcm90bykgPT4gcHJvdG8uaXNQcm90b3R5cGVPZihvKSkpIHtcbiAgICByZXR1cm4gJ3N0cmluZyc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHQ7XG4gIH1cbn07XG5cbmNvbnN0IGlzVHlwZSA9IDxZb2xvPih0eXBlOiBzdHJpbmcpID0+ICh2YWx1ZTogYW55KTogdmFsdWUgaXMgWW9sbyA9PlxuICB0eXBlT2YodmFsdWUpID09PSB0eXBlO1xuXG5jb25zdCBpc1NpbXBsZVR5cGUgPSA8WW9sbz4odHlwZTogc3RyaW5nKSA9PiAodmFsdWU6IGFueSk6IHZhbHVlIGlzIFlvbG8gPT5cbiAgdHlwZW9mIHZhbHVlID09PSB0eXBlO1xuXG5jb25zdCBlcSA9IDxUPiAodDogVCkgPT4gKGE6IGFueSk6IGEgaXMgVCA9PlxuICB0ID09PSBhO1xuXG5leHBvcnQgY29uc3QgaXMgPSA8RSBleHRlbmRzIE9iamVjdD4odmFsdWU6IGFueSwgY29uc3RydWN0b3I6IENvbnN0cnVjdG9yPEU+KTogdmFsdWUgaXMgRSA9PlxuICBpc09iamVjdCh2YWx1ZSkgJiYgaGFzUHJvdG88RT4odmFsdWUsIGNvbnN0cnVjdG9yLCAobywgcHJvdG8pID0+IGdldFByb3RvdHlwZU9mKG8pID09PSBwcm90byk7XG5cbmV4cG9ydCBjb25zdCBpc1N0cmluZzogKHZhbHVlOiBhbnkpID0+IHZhbHVlIGlzIHN0cmluZyA9XG4gIGlzVHlwZSgnc3RyaW5nJyk7XG5cbmV4cG9ydCBjb25zdCBpc09iamVjdDogKHZhbHVlOiBhbnkpID0+IHZhbHVlIGlzIE9iamVjdCA9XG4gIGlzVHlwZSgnb2JqZWN0Jyk7XG5cbmV4cG9ydCBjb25zdCBpc1BsYWluT2JqZWN0ID0gKHZhbHVlOiB1bmtub3duKTogdmFsdWUgaXMgT2JqZWN0ID0+XG4gIGlzKHZhbHVlLCBPYmplY3QpO1xuXG5leHBvcnQgY29uc3QgaXNBcnJheTogKHZhbHVlOiBhbnkpID0+IHZhbHVlIGlzIEFycmF5PHVua25vd24+ID1cbiAgaXNUeXBlKCdhcnJheScpO1xuXG5leHBvcnQgY29uc3QgaXNOdWxsOiAoYTogYW55KSA9PiBhIGlzIG51bGwgPVxuICBlcShudWxsKTtcblxuZXhwb3J0IGNvbnN0IGlzQm9vbGVhbjogKHZhbHVlOiBhbnkpID0+IHZhbHVlIGlzIGJvb2xlYW4gPVxuICBpc1NpbXBsZVR5cGU8Ym9vbGVhbj4oJ2Jvb2xlYW4nKTtcblxuZXhwb3J0IGNvbnN0IGlzVW5kZWZpbmVkOiAoYTogYW55KSA9PiBhIGlzIHVuZGVmaW5lZCA9XG4gIGVxKHVuZGVmaW5lZCk7XG5cbmV4cG9ydCBjb25zdCBpc051bGxhYmxlID0gKGE6IGFueSk6IGEgaXMgbnVsbCB8IHVuZGVmaW5lZCA9PlxuICBhID09PSBudWxsIHx8IGEgPT09IHVuZGVmaW5lZDtcblxuZXhwb3J0IGNvbnN0IGlzTm9uTnVsbGFibGUgPSA8QT4gKGE6IEEgfCBudWxsIHwgdW5kZWZpbmVkKTogYSBpcyBOb25OdWxsYWJsZTxBPiA9PlxuICAhaXNOdWxsYWJsZShhKTtcblxuZXhwb3J0IGNvbnN0IGlzRnVuY3Rpb246ICh2YWx1ZTogYW55KSA9PiB2YWx1ZSBpcyBGdW5jdGlvbiA9XG4gIGlzU2ltcGxlVHlwZTxGdW5jdGlvbj4oJ2Z1bmN0aW9uJyk7XG5cbmV4cG9ydCBjb25zdCBpc051bWJlcjogKHZhbHVlOiBhbnkpID0+IHZhbHVlIGlzIG51bWJlciA9XG4gIGlzU2ltcGxlVHlwZTxudW1iZXI+KCdudW1iZXInKTtcblxuZXhwb3J0IGNvbnN0IGlzQXJyYXlPZiA9IDxFPih2YWx1ZTogYW55LCBwcmVkOiAoeDogYW55KSA9PiB4IGlzIEUpOiB2YWx1ZSBpcyBBcnJheTxFPiA9PiB7XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB2YWx1ZS5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgaWYgKCEocHJlZCh2YWx1ZVtpXSkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzUHJvbWlzZUxpa2UgPSAoeDogYW55KTogeCBpcyBQcm9taXNlPHVua25vd24+ID0+XG4gIGlzT2JqZWN0KHgpXG4gICYmIGlzRnVuY3Rpb24oeC50aGVuKVxuICAmJiBpc0Z1bmN0aW9uKHguY2F0Y2gpO1xuIiwiaW1wb3J0IFBsdWdpbk1hbmFnZXIgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9QbHVnaW5NYW5hZ2VyJztcblxuaW1wb3J0ICogYXMgQ29tbWFuZHMgZnJvbSAnLi9hcGkvQ29tbWFuZHMnO1xuaW1wb3J0ICogYXMgT3B0aW9ucyBmcm9tICcuL2FwaS9PcHRpb25zJztcbmltcG9ydCAqIGFzIEtleWJvYXJkIGZyb20gJy4vY29yZS9LZXlib2FyZCc7XG5pbXBvcnQgKiBhcyBCdXR0b25zIGZyb20gJy4vdWkvQnV0dG9ucyc7XG5cbi8qKlxuICogVGhpcyBjbGFzcyBjb250YWlucyBhbGwgY29yZSBsb2dpYyBmb3IgdGhlIG5vbmJyZWFraW5nIHBsdWdpbi5cbiAqXG4gKiBAY2xhc3MgdGlueW1jZS5ub25icmVha2luZy5QbHVnaW5cbiAqIEBwcml2YXRlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgKCk6IHZvaWQgPT4ge1xuICBQbHVnaW5NYW5hZ2VyLmFkZCgnbm9uYnJlYWtpbmcnLCAoZWRpdG9yKSA9PiB7XG4gICAgT3B0aW9ucy5yZWdpc3RlcihlZGl0b3IpO1xuICAgIENvbW1hbmRzLnJlZ2lzdGVyKGVkaXRvcik7XG4gICAgQnV0dG9ucy5yZWdpc3RlcihlZGl0b3IpO1xuICAgIEtleWJvYXJkLnNldHVwKGVkaXRvcik7XG4gIH0pO1xufTtcbiIsImltcG9ydCB0eXBlIEVkaXRvciBmcm9tICd0aW55bWNlL2NvcmUvYXBpL0VkaXRvcic7XG5cbmltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSAnLi4vY29yZS9BY3Rpb25zJztcblxuY29uc3QgcmVnaXN0ZXIgPSAoZWRpdG9yOiBFZGl0b3IpOiB2b2lkID0+IHtcbiAgZWRpdG9yLmFkZENvbW1hbmQoJ21jZU5vbkJyZWFraW5nJywgKCkgPT4ge1xuICAgIEFjdGlvbnMuaW5zZXJ0TmJzcChlZGl0b3IsIDEpO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7XG4gIHJlZ2lzdGVyXG59O1xuIiwiaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmltcG9ydCB0eXBlIEVkaXRvciBmcm9tICd0aW55bWNlL2NvcmUvYXBpL0VkaXRvcic7XG5pbXBvcnQgdHlwZSB7IEVkaXRvck9wdGlvbnMgfSBmcm9tICd0aW55bWNlL2NvcmUvYXBpL09wdGlvblR5cGVzJztcblxuY29uc3Qgb3B0aW9uOiB7XG4gIDxLIGV4dGVuZHMga2V5b2YgRWRpdG9yT3B0aW9ucz4obmFtZTogSyk6IChlZGl0b3I6IEVkaXRvcikgPT4gRWRpdG9yT3B0aW9uc1tLXTtcbiAgPFQ+KG5hbWU6IHN0cmluZyk6IChlZGl0b3I6IEVkaXRvcikgPT4gVDtcbn0gPSAobmFtZTogc3RyaW5nKSA9PiAoZWRpdG9yOiBFZGl0b3IpID0+XG4gIGVkaXRvci5vcHRpb25zLmdldChuYW1lKTtcblxuY29uc3QgcmVnaXN0ZXIgPSAoZWRpdG9yOiBFZGl0b3IpOiB2b2lkID0+IHtcbiAgY29uc3QgcmVnaXN0ZXJPcHRpb24gPSBlZGl0b3Iub3B0aW9ucy5yZWdpc3RlcjtcblxuICByZWdpc3Rlck9wdGlvbignbm9uYnJlYWtpbmdfZm9yY2VfdGFiJywge1xuICAgIHByb2Nlc3NvcjogKHZhbHVlKSA9PiB7XG4gICAgICBpZiAoVHlwZS5pc0Jvb2xlYW4odmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB7IHZhbHVlOiB2YWx1ZSA/IDMgOiAwLCB2YWxpZDogdHJ1ZSB9O1xuICAgICAgfSBlbHNlIGlmIChUeXBlLmlzTnVtYmVyKHZhbHVlKSkge1xuICAgICAgICByZXR1cm4geyB2YWx1ZSwgdmFsaWQ6IHRydWUgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSwgbWVzc2FnZTogJ011c3QgYmUgYSBib29sZWFuIG9yIG51bWJlci4nIH07XG4gICAgICB9XG4gICAgfSxcbiAgICBkZWZhdWx0OiBmYWxzZVxuICB9KTtcblxuICByZWdpc3Rlck9wdGlvbignbm9uYnJlYWtpbmdfd3JhcCcsIHtcbiAgICBwcm9jZXNzb3I6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0OiB0cnVlXG4gIH0pO1xufTtcblxuY29uc3QgZ2V0S2V5Ym9hcmRTcGFjZXMgPSBvcHRpb248bnVtYmVyPignbm9uYnJlYWtpbmdfZm9yY2VfdGFiJyk7XG5jb25zdCB3cmFwTmJzcHMgPSBvcHRpb248Ym9vbGVhbj4oJ25vbmJyZWFraW5nX3dyYXAnKTtcblxuZXhwb3J0IHtcbiAgcmVnaXN0ZXIsXG4gIGdldEtleWJvYXJkU3BhY2VzLFxuICB3cmFwTmJzcHNcbn07XG4iLCJpbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuXG5pbXBvcnQgKiBhcyBPcHRpb25zIGZyb20gJy4uL2FwaS9PcHRpb25zJztcblxuY29uc3Qgc3RyaW5nUmVwZWF0ID0gKHN0cmluZzogc3RyaW5nLCByZXBlYXRzOiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuICBsZXQgc3RyID0gJyc7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHJlcGVhdHM7IGluZGV4KyspIHtcbiAgICBzdHIgKz0gc3RyaW5nO1xuICB9XG5cbiAgcmV0dXJuIHN0cjtcbn07XG5cbmNvbnN0IGlzVmlzdWFsQ2hhcnNFbmFibGVkID0gKGVkaXRvcjogRWRpdG9yKSA9PiBlZGl0b3IucGx1Z2lucy52aXN1YWxjaGFycyA/IGVkaXRvci5wbHVnaW5zLnZpc3VhbGNoYXJzLmlzRW5hYmxlZCgpIDogZmFsc2U7XG5cbmNvbnN0IGluc2VydE5ic3AgPSAoZWRpdG9yOiBFZGl0b3IsIHRpbWVzOiBudW1iZXIpOiB2b2lkID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9ICgpID0+IGlzVmlzdWFsQ2hhcnNFbmFibGVkKGVkaXRvcikgPyAnbWNlLW5ic3Atd3JhcCBtY2UtbmJzcCcgOiAnbWNlLW5ic3Atd3JhcCc7XG4gIGNvbnN0IG5ic3BTcGFuID0gKCkgPT4gYDxzcGFuIGNsYXNzPVwiJHtjbGFzc2VzKCl9XCIgY29udGVudGVkaXRhYmxlPVwiZmFsc2VcIj4ke3N0cmluZ1JlcGVhdCgnJm5ic3A7JywgdGltZXMpfTwvc3Bhbj5gO1xuXG4gIGNvbnN0IHNob3VsZFdyYXAgPSBPcHRpb25zLndyYXBOYnNwcyhlZGl0b3IpO1xuICBjb25zdCBodG1sID0gc2hvdWxkV3JhcCB8fCBlZGl0b3IucGx1Z2lucy52aXN1YWxjaGFycyA/IG5ic3BTcGFuKCkgOiBzdHJpbmdSZXBlYXQoJyZuYnNwOycsIHRpbWVzKTtcblxuICBlZGl0b3IudW5kb01hbmFnZXIudHJhbnNhY3QoKCkgPT4gZWRpdG9yLmluc2VydENvbnRlbnQoaHRtbCkpO1xufTtcblxuZXhwb3J0IHtcbiAgaW5zZXJ0TmJzcFxufTtcbiIsImltcG9ydCB0eXBlIEVkaXRvciBmcm9tICd0aW55bWNlL2NvcmUvYXBpL0VkaXRvcic7XG5pbXBvcnQgVksgZnJvbSAndGlueW1jZS9jb3JlL2FwaS91dGlsL1ZLJztcblxuaW1wb3J0ICogYXMgT3B0aW9ucyBmcm9tICcuLi9hcGkvT3B0aW9ucyc7XG5cbmltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSAnLi9BY3Rpb25zJztcblxuY29uc3Qgc2V0dXAgPSAoZWRpdG9yOiBFZGl0b3IpOiB2b2lkID0+IHtcbiAgY29uc3Qgc3BhY2VzID0gT3B0aW9ucy5nZXRLZXlib2FyZFNwYWNlcyhlZGl0b3IpO1xuXG4gIGlmIChzcGFjZXMgPiAwKSB7XG4gICAgZWRpdG9yLm9uKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICAgIGlmIChlLmtleUNvZGUgPT09IFZLLlRBQiAmJiAhZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICBpZiAoZS5zaGlmdEtleSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgQWN0aW9ucy5pbnNlcnROYnNwKGVkaXRvciwgc3BhY2VzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IHtcbiAgc2V0dXBcbn07XG4iLCJpbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuaW1wb3J0IHR5cGUgeyBNZW51LCBUb29sYmFyIH0gZnJvbSAndGlueW1jZS9jb3JlL2FwaS91aS9VaSc7XG5cbmNvbnN0IG9uU2V0dXBFZGl0YWJsZSA9IChlZGl0b3I6IEVkaXRvcikgPT4gKGFwaTogVG9vbGJhci5Ub29sYmFyQnV0dG9uSW5zdGFuY2VBcGkgfCBNZW51Lk1lbnVJdGVtSW5zdGFuY2VBcGkpOiBWb2lkRnVuY3Rpb24gPT4ge1xuICBjb25zdCBub2RlQ2hhbmdlZCA9ICgpID0+IHtcbiAgICBhcGkuc2V0RW5hYmxlZChlZGl0b3Iuc2VsZWN0aW9uLmlzRWRpdGFibGUoKSk7XG4gIH07XG5cbiAgZWRpdG9yLm9uKCdOb2RlQ2hhbmdlJywgbm9kZUNoYW5nZWQpO1xuICBub2RlQ2hhbmdlZCgpO1xuXG4gIHJldHVybiAoKSA9PiB7XG4gICAgZWRpdG9yLm9mZignTm9kZUNoYW5nZScsIG5vZGVDaGFuZ2VkKTtcbiAgfTtcbn07XG5cbmNvbnN0IHJlZ2lzdGVyID0gKGVkaXRvcjogRWRpdG9yKTogdm9pZCA9PiB7XG4gIGNvbnN0IG9uQWN0aW9uID0gKCkgPT4gZWRpdG9yLmV4ZWNDb21tYW5kKCdtY2VOb25CcmVha2luZycpO1xuXG4gIGVkaXRvci51aS5yZWdpc3RyeS5hZGRCdXR0b24oJ25vbmJyZWFraW5nJywge1xuICAgIGljb246ICdub24tYnJlYWtpbmcnLFxuICAgIHRvb2x0aXA6ICdOb25icmVha2luZyBzcGFjZScsXG4gICAgb25BY3Rpb24sXG4gICAgb25TZXR1cDogb25TZXR1cEVkaXRhYmxlKGVkaXRvcilcbiAgfSk7XG5cbiAgZWRpdG9yLnVpLnJlZ2lzdHJ5LmFkZE1lbnVJdGVtKCdub25icmVha2luZycsIHtcbiAgICBpY29uOiAnbm9uLWJyZWFraW5nJyxcbiAgICB0ZXh0OiAnTm9uYnJlYWtpbmcgc3BhY2UnLFxuICAgIG9uQWN0aW9uLFxuICAgIG9uU2V0dXA6IG9uU2V0dXBFZGl0YWJsZShlZGl0b3IpXG4gIH0pO1xufTtcblxuZXhwb3J0IHtcbiAgcmVnaXN0ZXJcbn07XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG4gICAgICAgIGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcbiAgICAgICAgfVxuICAgIH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucnYgPSAoKSA9PiAoXCIxLjUuMlwiKSIsIl9fd2VicGFja19yZXF1aXJlX18ucnVpZCA9IFwiYnVuZGxlcj1yc3BhY2tAMS41LjJcIjtcbiIsImltcG9ydCBQbHVnaW4gZnJvbSAnLi9QbHVnaW4nO1xuXG5QbHVnaW4oKTtcblxuLyoqICoqKioqXG4gKiBETyBOT1QgRVhQT1JUIEFOWVRISU5HXG4gKlxuICogSUYgWU9VIERPIFJPTExVUCBXSUxMIExFQVZFIEEgR0xPQkFMIE9OIFRIRSBQQUdFXG4gKioqKioqKi9cbiJdLCJuYW1lcyI6WyJnZXRQcm90b3R5cGVPZiIsIk9iamVjdCIsImhhc1Byb3RvIiwidiIsImNvbnN0cnVjdG9yIiwicHJlZGljYXRlIiwidHlwZU9mIiwieCIsInQiLCJBcnJheSIsIlN0cmluZyIsIm8iLCJwcm90byIsImlzVHlwZSIsInR5cGUiLCJ2YWx1ZSIsImlzU2ltcGxlVHlwZSIsImVxIiwiYSIsImlzIiwiaXNPYmplY3QiLCJpc1N0cmluZyIsImlzUGxhaW5PYmplY3QiLCJpc0FycmF5IiwiaXNOdWxsIiwiaXNCb29sZWFuIiwiaXNVbmRlZmluZWQiLCJ1bmRlZmluZWQiLCJpc051bGxhYmxlIiwiaXNOb25OdWxsYWJsZSIsImlzRnVuY3Rpb24iLCJpc051bWJlciIsImlzQXJyYXlPZiIsInByZWQiLCJpIiwibGVuIiwiaXNQcm9taXNlTGlrZSIsIlBsdWdpbk1hbmFnZXIiLCJDb21tYW5kcyIsIk9wdGlvbnMiLCJLZXlib2FyZCIsIkJ1dHRvbnMiLCJlZGl0b3IiLCJBY3Rpb25zIiwicmVnaXN0ZXIiLCJUeXBlIiwib3B0aW9uIiwibmFtZSIsInJlZ2lzdGVyT3B0aW9uIiwiZ2V0S2V5Ym9hcmRTcGFjZXMiLCJ3cmFwTmJzcHMiLCJzdHJpbmdSZXBlYXQiLCJzdHJpbmciLCJyZXBlYXRzIiwic3RyIiwiaW5kZXgiLCJpc1Zpc3VhbENoYXJzRW5hYmxlZCIsImluc2VydE5ic3AiLCJ0aW1lcyIsImNsYXNzZXMiLCJuYnNwU3BhbiIsInNob3VsZFdyYXAiLCJodG1sIiwiVksiLCJzZXR1cCIsInNwYWNlcyIsImUiLCJvblNldHVwRWRpdGFibGUiLCJhcGkiLCJub2RlQ2hhbmdlZCIsIm9uQWN0aW9uIiwiUGx1Z2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsNkRBQWUsTUFBTSxFQUFDO0FBQ2Y7Ozs7Ozs7Ozs7Ozs7O0FDSFA7O0FBRUEsNkRBQWUsTUFBTSxFQUFDO0FBQ2Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSFAsNkRBQTZELEdBQzdELE1BQU1BLGlCQUFpQkMsT0FBTyxjQUFjO0FBTzVDLE1BQU1DLFdBQVcsQ0FBbUJDLEdBQVdDLGFBQTZCQztJQUMxRSxJQUFJQSxVQUFVRixHQUFHQyxZQUFZLFNBQVMsR0FBRztRQUN2QyxPQUFPO0lBQ1QsT0FBTztRQUNMLDZCQUE2QjtRQUM3QixPQUFPRCxFQUFFLFdBQVcsRUFBRSxTQUFTQyxZQUFZLElBQUk7SUFDakQ7QUFDRjtBQUVBLE1BQU1FLFNBQVMsQ0FBQ0M7SUFDZCxNQUFNQyxJQUFJLE9BQU9EO0lBQ2pCLElBQUlBLE1BQU0sTUFBTTtRQUNkLE9BQU87SUFDVCxPQUFPLElBQUlDLE1BQU0sWUFBWUMsTUFBTSxPQUFPLENBQUNGLElBQUk7UUFDN0MsT0FBTztJQUNULE9BQU8sSUFBSUMsTUFBTSxZQUFZTixTQUFTSyxHQUFHRyxRQUFRLENBQUNDLEdBQUdDLFFBQVVBLE1BQU0sYUFB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