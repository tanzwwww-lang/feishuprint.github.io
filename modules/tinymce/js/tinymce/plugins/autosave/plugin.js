(() => { // webpackBootstrap
"use strict";
var __webpack_modules__ = ({
"./lib/globals/tinymce/core/api/EditorManager.js": 
/*!*******************************************************!*\
  !*** ./lib/globals/tinymce/core/api/EditorManager.js ***!
  \*******************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  EditorManager: () => (EditorManager),
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
var global = tinymce.util.Tools.resolve('tinymce.EditorManager');

/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (global);
var EditorManager = global;


}),
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
"./lib/globals/tinymce/core/api/util/Delay.js": 
/*!****************************************************!*\
  !*** ./lib/globals/tinymce/core/api/util/Delay.js ***!
  \****************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Delay: () => (Delay),
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
var global = tinymce.util.Tools.resolve('tinymce.util.Delay');

/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (global);
var Delay = global;


}),
"./lib/globals/tinymce/core/api/util/LocalStorage.js": 
/*!***********************************************************!*\
  !*** ./lib/globals/tinymce/core/api/util/LocalStorage.js ***!
  \***********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  LocalStorage: () => (LocalStorage),
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
var global = tinymce.util.Tools.resolve('tinymce.util.LocalStorage');

/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (global);
var LocalStorage = global;


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
"./src/plugins/autosave/main/ts/Plugin.ts": 
/*!************************************************!*\
  !*** ./src/plugins/autosave/main/ts/Plugin.ts ***!
  \************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var tinymce_core_api_PluginManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/PluginManager */ "./lib/globals/tinymce/core/api/PluginManager.js");
/* ESM import */var _api_Api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/Api */ "./src/plugins/autosave/main/ts/api/Api.ts");
/* ESM import */var _api_Options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/Options */ "./src/plugins/autosave/main/ts/api/Options.ts");
/* ESM import */var _core_BeforeUnload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/BeforeUnload */ "./src/plugins/autosave/main/ts/core/BeforeUnload.ts");
/* ESM import */var _core_Storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/Storage */ "./src/plugins/autosave/main/ts/core/Storage.ts");
/* ESM import */var _ui_Buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/Buttons */ "./src/plugins/autosave/main/ts/ui/Buttons.ts");






/**
 * This class contains all core logic for the autosave plugin.
 *
 * @class tinymce.autosave.Plugin
 * @private
 */ /* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>{
    tinymce_core_api_PluginManager__WEBPACK_IMPORTED_MODULE_0__["default"].add('autosave', (editor)=>{
        _api_Options__WEBPACK_IMPORTED_MODULE_2__.register(editor);
        _core_BeforeUnload__WEBPACK_IMPORTED_MODULE_3__.setup(editor);
        _ui_Buttons__WEBPACK_IMPORTED_MODULE_5__.register(editor);
        editor.on('init', ()=>{
            if (_api_Options__WEBPACK_IMPORTED_MODULE_2__.shouldRestoreWhenEmpty(editor) && editor.dom.isEmpty(editor.getBody())) {
                _core_Storage__WEBPACK_IMPORTED_MODULE_4__.restoreDraft(editor);
            }
        });
        return _api_Api__WEBPACK_IMPORTED_MODULE_1__.get(editor);
    });
});


}),
"./src/plugins/autosave/main/ts/api/Api.ts": 
/*!*************************************************!*\
  !*** ./src/plugins/autosave/main/ts/api/Api.ts ***!
  \*************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  get: () => (get)
});
/* ESM import */var _core_Storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Storage */ "./src/plugins/autosave/main/ts/core/Storage.ts");

const get = (editor)=>({
        hasDraft: ()=>_core_Storage__WEBPACK_IMPORTED_MODULE_0__.hasDraft(editor),
        storeDraft: ()=>_core_Storage__WEBPACK_IMPORTED_MODULE_0__.storeDraft(editor),
        restoreDraft: ()=>_core_Storage__WEBPACK_IMPORTED_MODULE_0__.restoreDraft(editor),
        removeDraft: (fire)=>_core_Storage__WEBPACK_IMPORTED_MODULE_0__.removeDraft(editor, fire),
        isEmpty: (html)=>_core_Storage__WEBPACK_IMPORTED_MODULE_0__.isEmpty(editor, html)
    });



}),
"./src/plugins/autosave/main/ts/api/Events.ts": 
/*!****************************************************!*\
  !*** ./src/plugins/autosave/main/ts/api/Events.ts ***!
  \****************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  fireRemoveDraft: () => (fireRemoveDraft),
  fireRestoreDraft: () => (fireRestoreDraft),
  fireStoreDraft: () => (fireStoreDraft)
});
const fireRestoreDraft = (editor)=>editor.dispatch('RestoreDraft');
const fireStoreDraft = (editor)=>editor.dispatch('StoreDraft');
const fireRemoveDraft = (editor)=>editor.dispatch('RemoveDraft');



}),
"./src/plugins/autosave/main/ts/api/Options.ts": 
/*!*****************************************************!*\
  !*** ./src/plugins/autosave/main/ts/api/Options.ts ***!
  \*****************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getAutoSaveInterval: () => (getAutoSaveInterval),
  getAutoSavePrefix: () => (getAutoSavePrefix),
  getAutoSaveRetention: () => (getAutoSaveRetention),
  register: () => (register),
  shouldAskBeforeUnload: () => (shouldAskBeforeUnload),
  shouldRestoreWhenEmpty: () => (shouldRestoreWhenEmpty)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Type.ts");
/* ESM import */var _core_Time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Time */ "./src/plugins/autosave/main/ts/core/Time.ts");


const option = (name)=>(editor)=>editor.options.get(name);
const register = (editor)=>{
    const registerOption = editor.options.register;
    const timeProcessor = (value)=>{
        const valid = _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.isString(value);
        if (valid) {
            return {
                value: _core_Time__WEBPACK_IMPORTED_MODULE_0__.parse(value),
                valid
            };
        } else {
            return {
                valid: false,
                message: 'Must be a string.'
            };
        }
    };
    registerOption('autosave_ask_before_unload', {
        processor: 'boolean',
        default: true
    });
    registerOption('autosave_prefix', {
        processor: 'string',
        default: 'tinymce-autosave-{path}{query}{hash}-{id}-'
    });
    registerOption('autosave_restore_when_empty', {
        processor: 'boolean',
        default: false
    });
    registerOption('autosave_interval', {
        processor: timeProcessor,
        default: '30s'
    });
    registerOption('autosave_retention', {
        processor: timeProcessor,
        default: '20m'
    });
};
const shouldAskBeforeUnload = option('autosave_ask_before_unload');
const shouldRestoreWhenEmpty = option('autosave_restore_when_empty');
const getAutoSaveInterval = option('autosave_interval');
const getAutoSaveRetention = option('autosave_retention');
const getAutoSavePrefix = (editor)=>{
    const location = document.location;
    return editor.options.get('autosave_prefix').replace(/{path}/g, location.pathname).replace(/{query}/g, location.search).replace(/{hash}/g, location.hash).replace(/{id}/g, editor.id);
};



}),
"./src/plugins/autosave/main/ts/core/BeforeUnload.ts": 
/*!***********************************************************!*\
  !*** ./src/plugins/autosave/main/ts/core/BeforeUnload.ts ***!
  \***********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  setup: () => (setup)
});
/* ESM import */var tinymce_core_api_EditorManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/EditorManager */ "./lib/globals/tinymce/core/api/EditorManager.js");
/* ESM import */var tinymce_core_api_util_Tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tinymce/core/api/util/Tools */ "./lib/globals/tinymce/core/api/util/Tools.js");
/* ESM import */var _api_Options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/Options */ "./src/plugins/autosave/main/ts/api/Options.ts");



const setup = (editor)=>{
    editor.editorManager.on('BeforeUnload', (e)=>{
        let msg;
        tinymce_core_api_util_Tools__WEBPACK_IMPORTED_MODULE_1__["default"].each(tinymce_core_api_EditorManager__WEBPACK_IMPORTED_MODULE_0__["default"].get(), (editor)=>{
            // Store a draft for each editor instance
            if (editor.plugins.autosave) {
                editor.plugins.autosave.storeDraft();
            }
            // Setup a return message if the editor is dirty
            if (!msg && editor.isDirty() && _api_Options__WEBPACK_IMPORTED_MODULE_2__.shouldAskBeforeUnload(editor)) {
                msg = editor.translate('You have unsaved changes are you sure you want to navigate away?');
            }
        });
        if (msg) {
            e.preventDefault();
            e.returnValue = msg;
        }
    });
};



}),
"./src/plugins/autosave/main/ts/core/Storage.ts": 
/*!******************************************************!*\
  !*** ./src/plugins/autosave/main/ts/core/Storage.ts ***!
  \******************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  hasDraft: () => (hasDraft),
  isEmpty: () => (isEmpty),
  removeDraft: () => (removeDraft),
  restoreDraft: () => (restoreDraft),
  restoreLastDraft: () => (restoreLastDraft),
  startStoreDraft: () => (startStoreDraft),
  storeDraft: () => (storeDraft)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Type.ts");
/* ESM import */var tinymce_core_api_util_Delay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/util/Delay */ "./lib/globals/tinymce/core/api/util/Delay.js");
/* ESM import */var tinymce_core_api_util_LocalStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tinymce/core/api/util/LocalStorage */ "./lib/globals/tinymce/core/api/util/LocalStorage.js");
/* ESM import */var tinymce_core_api_util_Tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tinymce/core/api/util/Tools */ "./lib/globals/tinymce/core/api/util/Tools.js");
/* ESM import */var _api_Events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/Events */ "./src/plugins/autosave/main/ts/api/Events.ts");
/* ESM import */var _api_Options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/Options */ "./src/plugins/autosave/main/ts/api/Options.ts");






const isEmpty = (editor, html)=>{
    if (_ephox_katamari__WEBPACK_IMPORTED_MODULE_5__.isUndefined(html)) {
        return editor.dom.isEmpty(editor.getBody());
    } else {
        const trimmedHtml = tinymce_core_api_util_Tools__WEBPACK_IMPORTED_MODULE_2__["default"].trim(html);
        if (trimmedHtml === '') {
            return true;
        } else {
            const fragment = new DOMParser().parseFromString(trimmedHtml, 'text/html');
            return editor.dom.isEmpty(fragment);
        }
    }
};
const hasDraft = (editor)=>{
    const time = parseInt(tinymce_core_api_util_LocalStorage__WEBPACK_IMPORTED_MODULE_1__["default"].getItem(_api_Options__WEBPACK_IMPORTED_MODULE_4__.getAutoSavePrefix(editor) + 'time') ?? '0', 10) || 0;
    if (new Date().getTime() - time > _api_Options__WEBPACK_IMPORTED_MODULE_4__.getAutoSaveRetention(editor)) {
        removeDraft(editor, false);
        return false;
    }
    return true;
};
const removeDraft = (editor, fire)=>{
    const prefix = _api_Options__WEBPACK_IMPORTED_MODULE_4__.getAutoSavePrefix(editor);
    tinymce_core_api_util_LocalStorage__WEBPACK_IMPORTED_MODULE_1__["default"].removeItem(prefix + 'draft');
    tinymce_core_api_util_LocalStorage__WEBPACK_IMPORTED_MODULE_1__["default"].removeItem(prefix + 'time');
    if (fire !== false) {
        _api_Events__WEBPACK_IMPORTED_MODULE_3__.fireRemoveDraft(editor);
    }
};
const storeDraft = (editor)=>{
    const prefix = _api_Options__WEBPACK_IMPORTED_MODULE_4__.getAutoSavePrefix(editor);
    if (!isEmpty(editor) && editor.isDirty()) {
        tinymce_core_api_util_LocalStorage__WEBPACK_IMPORTED_MODULE_1__["default"].setItem(prefix + 'draft', editor.getContent({
            format: 'raw',
            no_events: true
        }));
        tinymce_core_api_util_LocalStorage__WEBPACK_IMPORTED_MODULE_1__["default"].setItem(prefix + 'time', new Date().getTime().toString());
        _api_Events__WEBPACK_IMPORTED_MODULE_3__.fireStoreDraft(editor);
    }
};
const restoreDraft = (editor)=>{
    const prefix = _api_Options__WEBPACK_IMPORTED_MODULE_4__.getAutoSavePrefix(editor);
    if (hasDraft(editor)) {
        editor.setContent(tinymce_core_api_util_LocalStorage__WEBPACK_IMPORTED_MODULE_1__["default"].getItem(prefix + 'draft') ?? '', {
            format: 'raw'
        });
        _api_Events__WEBPACK_IMPORTED_MODULE_3__.fireRestoreDraft(editor);
    }
};
const startStoreDraft = (editor)=>{
    const interval = _api_Options__WEBPACK_IMPORTED_MODULE_4__.getAutoSaveInterval(editor);
    tinymce_core_api_util_Delay__WEBPACK_IMPORTED_MODULE_0__["default"].setEditorInterval(editor, ()=>{
        storeDraft(editor);
    }, interval);
};
const restoreLastDraft = (editor)=>{
    editor.undoManager.transact(()=>{
        restoreDraft(editor);
        removeDraft(editor);
    });
    editor.focus();
};



}),
"./src/plugins/autosave/main/ts/core/Time.ts": 
/*!***************************************************!*\
  !*** ./src/plugins/autosave/main/ts/core/Time.ts ***!
  \***************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  parse: () => (parse)
});
const parse = (timeString)=>{
    const multiples = {
        s: 1000,
        m: 60000
    };
    const parsedTime = /^(\d+)([ms]?)$/.exec(timeString);
    return (parsedTime && parsedTime[2] ? multiples[parsedTime[2]] : 1) * parseInt(timeString, 10);
};



}),
"./src/plugins/autosave/main/ts/ui/Buttons.ts": 
/*!****************************************************!*\
  !*** ./src/plugins/autosave/main/ts/ui/Buttons.ts ***!
  \****************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  register: () => (register)
});
/* ESM import */var _core_Storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Storage */ "./src/plugins/autosave/main/ts/core/Storage.ts");

const makeSetupHandler = (editor)=>(api)=>{
        const shouldEnable = ()=>_core_Storage__WEBPACK_IMPORTED_MODULE_0__.hasDraft(editor) && !editor.mode.isReadOnly();
        api.setEnabled(shouldEnable());
        const editorEventCallback = ()=>api.setEnabled(shouldEnable());
        editor.on('StoreDraft RestoreDraft RemoveDraft', editorEventCallback);
        return ()=>editor.off('StoreDraft RestoreDraft RemoveDraft', editorEventCallback);
    };
const register = (editor)=>{
    // TODO: This was moved from makeSetupHandler as it would only be called when the menu item was rendered?
    //       Is it safe to start this process when the plugin is registered?
    _core_Storage__WEBPACK_IMPORTED_MODULE_0__.startStoreDraft(editor);
    const onAction = ()=>{
        _core_Storage__WEBPACK_IMPORTED_MODULE_0__.restoreLastDraft(editor);
    };
    editor.ui.registry.addButton('restoredraft', {
        tooltip: 'Restore last draft',
        icon: 'restore-draft',
        onAction,
        onSetup: makeSetupHandler(editor)
    });
    editor.ui.registry.addMenuItem('restoredraft', {
        text: 'Restore last draft',
        icon: 'restore-draft',
        onAction,
        onSetup: makeSetupHandler(editor)
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

/*!**********************************************!*\
  !*** ./src/plugins/autosave/main/ts/Main.ts ***!
  \**********************************************/
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _Plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Plugin */ "./src/plugins/autosave/main/ts/Plugin.ts");

(0,_Plugin__WEBPACK_IMPORTED_MODULE_0__["default"])(); /** *****
 * DO NOT EXPORT ANYTHING
 *
 * IF YOU DO ROLLUP WILL LEAVE A GLOBAL ON THE PAGE
 *******/ 

})();

})()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdGlueW1jZS9wbHVnaW5zL2F1dG9zYXZlL3BsdWdpbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL3RpbnltY2UvLi9saWIvZ2xvYmFscy90aW55bWNlL2NvcmUvYXBpL0VkaXRvck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL2xpYi9nbG9iYWxzL3RpbnltY2UvY29yZS9hcGkvUGx1Z2luTWFuYWdlci5qcyIsIndlYnBhY2s6Ly90aW55bWNlLy4vbGliL2dsb2JhbHMvdGlueW1jZS9jb3JlL2FwaS91dGlsL0RlbGF5LmpzIiwid2VicGFjazovL3RpbnltY2UvLi9saWIvZ2xvYmFscy90aW55bWNlL2NvcmUvYXBpL3V0aWwvTG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3RpbnltY2UvLi9saWIvZ2xvYmFscy90aW55bWNlL2NvcmUvYXBpL3V0aWwvVG9vbHMuanMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9rYXRhbWFyaS9zcmMvbWFpbi90cy9lcGhveC9rYXRhbWFyaS9hcGkvVHlwZS50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvYXV0b3NhdmUvbWFpbi90cy9QbHVnaW4udHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL2F1dG9zYXZlL21haW4vdHMvYXBpL0FwaS50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvYXV0b3NhdmUvbWFpbi90cy9hcGkvRXZlbnRzLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9hdXRvc2F2ZS9tYWluL3RzL2FwaS9PcHRpb25zLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9hdXRvc2F2ZS9tYWluL3RzL2NvcmUvQmVmb3JlVW5sb2FkLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9hdXRvc2F2ZS9tYWluL3RzL2NvcmUvU3RvcmFnZS50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvYXV0b3NhdmUvbWFpbi90cy9jb3JlL1RpbWUudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL2F1dG9zYXZlL21haW4vdHMvdWkvQnV0dG9ucy50cyIsIndlYnBhY2s6Ly90aW55bWNlL3dlYnBhY2svcnVudGltZS9kZWZpbmVfcHJvcGVydHlfZ2V0dGVycyIsIndlYnBhY2s6Ly90aW55bWNlL3dlYnBhY2svcnVudGltZS9oYXNfb3duX3Byb3BlcnR5Iiwid2VicGFjazovL3RpbnltY2Uvd2VicGFjay9ydW50aW1lL21ha2VfbmFtZXNwYWNlX29iamVjdCIsIndlYnBhY2s6Ly90aW55bWNlL3dlYnBhY2svcnVudGltZS9yc3BhY2tfdmVyc2lvbiIsIndlYnBhY2s6Ly90aW55bWNlL3dlYnBhY2svcnVudGltZS9yc3BhY2tfdW5pcXVlX2lkIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9hdXRvc2F2ZS9tYWluL3RzL01haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGdsb2JhbCA9IHRpbnltY2UudXRpbC5Ub29scy5yZXNvbHZlKCd0aW55bWNlLkVkaXRvck1hbmFnZXInKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2xvYmFsO1xuZXhwb3J0IHZhciBFZGl0b3JNYW5hZ2VyID0gZ2xvYmFsO1xuIiwidmFyIGdsb2JhbCA9IHRpbnltY2UudXRpbC5Ub29scy5yZXNvbHZlKCd0aW55bWNlLlBsdWdpbk1hbmFnZXInKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2xvYmFsO1xuZXhwb3J0IHZhciBQbHVnaW5NYW5hZ2VyID0gZ2xvYmFsO1xuIiwidmFyIGdsb2JhbCA9IHRpbnltY2UudXRpbC5Ub29scy5yZXNvbHZlKCd0aW55bWNlLnV0aWwuRGVsYXknKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2xvYmFsO1xuZXhwb3J0IHZhciBEZWxheSA9IGdsb2JhbDtcbiIsInZhciBnbG9iYWwgPSB0aW55bWNlLnV0aWwuVG9vbHMucmVzb2x2ZSgndGlueW1jZS51dGlsLkxvY2FsU3RvcmFnZScpO1xuXG5leHBvcnQgZGVmYXVsdCBnbG9iYWw7XG5leHBvcnQgdmFyIExvY2FsU3RvcmFnZSA9IGdsb2JhbDtcbiIsInZhciBnbG9iYWwgPSB0aW55bWNlLnV0aWwuVG9vbHMucmVzb2x2ZSgndGlueW1jZS51dGlsLlRvb2xzJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGdsb2JhbDtcbmV4cG9ydCB2YXIgVG9vbHMgPSBnbG9iYWw7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8td3JhcHBlci1vYmplY3QtdHlwZXMgKi9cbmNvbnN0IGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuXG5pbnRlcmZhY2UgQ29uc3RydWN0b3I8VCBleHRlbmRzIE9iamVjdD4ge1xuICByZWFkb25seSBwcm90b3R5cGU6IFQ7XG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbn1cblxuY29uc3QgaGFzUHJvdG8gPSA8VCBleHRlbmRzIE9iamVjdD4odjogT2JqZWN0LCBjb25zdHJ1Y3RvcjogQ29uc3RydWN0b3I8VD4sIHByZWRpY2F0ZTogKHY6IE9iamVjdCwgcHJvdG90eXBlOiBUKSA9PiBib29sZWFuKTogYm9vbGVhbiA9PiB7XG4gIGlmIChwcmVkaWNhdGUodiwgY29uc3RydWN0b3IucHJvdG90eXBlKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIC8vIFN0cmluZy1iYXNlZCBmYWxsYmFjayB0aW1lXG4gICAgcmV0dXJuIHYuY29uc3RydWN0b3I/Lm5hbWUgPT09IGNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cbn07XG5cbmNvbnN0IHR5cGVPZiA9ICh4OiBhbnkpOiBzdHJpbmcgPT4ge1xuICBjb25zdCB0ID0gdHlwZW9mIHg7XG4gIGlmICh4ID09PSBudWxsKSB7XG4gICAgcmV0dXJuICdudWxsJztcbiAgfSBlbHNlIGlmICh0ID09PSAnb2JqZWN0JyAmJiBBcnJheS5pc0FycmF5KHgpKSB7XG4gICAgcmV0dXJuICdhcnJheSc7XG4gIH0gZWxzZSBpZiAodCA9PT0gJ29iamVjdCcgJiYgaGFzUHJvdG8oeCwgU3RyaW5nLCAobywgcHJvdG8pID0+IHByb3RvLmlzUHJvdG90eXBlT2YobykpKSB7XG4gICAgcmV0dXJuICdzdHJpbmcnO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0O1xuICB9XG59O1xuXG5jb25zdCBpc1R5cGUgPSA8WW9sbz4odHlwZTogc3RyaW5nKSA9PiAodmFsdWU6IGFueSk6IHZhbHVlIGlzIFlvbG8gPT5cbiAgdHlwZU9mKHZhbHVlKSA9PT0gdHlwZTtcblxuY29uc3QgaXNTaW1wbGVUeXBlID0gPFlvbG8+KHR5cGU6IHN0cmluZykgPT4gKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBZb2xvID0+XG4gIHR5cGVvZiB2YWx1ZSA9PT0gdHlwZTtcblxuY29uc3QgZXEgPSA8VD4gKHQ6IFQpID0+IChhOiBhbnkpOiBhIGlzIFQgPT5cbiAgdCA9PT0gYTtcblxuZXhwb3J0IGNvbnN0IGlzID0gPEUgZXh0ZW5kcyBPYmplY3Q+KHZhbHVlOiBhbnksIGNvbnN0cnVjdG9yOiBDb25zdHJ1Y3RvcjxFPik6IHZhbHVlIGlzIEUgPT5cbiAgaXNPYmplY3QodmFsdWUpICYmIGhhc1Byb3RvPEU+KHZhbHVlLCBjb25zdHJ1Y3RvciwgKG8sIHByb3RvKSA9PiBnZXRQcm90b3R5cGVPZihvKSA9PT0gcHJvdG8pO1xuXG5leHBvcnQgY29uc3QgaXNTdHJpbmc6ICh2YWx1ZTogYW55KSA9PiB2YWx1ZSBpcyBzdHJpbmcgPVxuICBpc1R5cGUoJ3N0cmluZycpO1xuXG5leHBvcnQgY29uc3QgaXNPYmplY3Q6ICh2YWx1ZTogYW55KSA9PiB2YWx1ZSBpcyBPYmplY3QgPVxuICBpc1R5cGUoJ29iamVjdCcpO1xuXG5leHBvcnQgY29uc3QgaXNQbGFpbk9iamVjdCA9ICh2YWx1ZTogdW5rbm93bik6IHZhbHVlIGlzIE9iamVjdCA9PlxuICBpcyh2YWx1ZSwgT2JqZWN0KTtcblxuZXhwb3J0IGNvbnN0IGlzQXJyYXk6ICh2YWx1ZTogYW55KSA9PiB2YWx1ZSBpcyBBcnJheTx1bmtub3duPiA9XG4gIGlzVHlwZSgnYXJyYXknKTtcblxuZXhwb3J0IGNvbnN0IGlzTnVsbDogKGE6IGFueSkgPT4gYSBpcyBudWxsID1cbiAgZXEobnVsbCk7XG5cbmV4cG9ydCBjb25zdCBpc0Jvb2xlYW46ICh2YWx1ZTogYW55KSA9PiB2YWx1ZSBpcyBib29sZWFuID1cbiAgaXNTaW1wbGVUeXBlPGJvb2xlYW4+KCdib29sZWFuJyk7XG5cbmV4cG9ydCBjb25zdCBpc1VuZGVmaW5lZDogKGE6IGFueSkgPT4gYSBpcyB1bmRlZmluZWQgPVxuICBlcSh1bmRlZmluZWQpO1xuXG5leHBvcnQgY29uc3QgaXNOdWxsYWJsZSA9IChhOiBhbnkpOiBhIGlzIG51bGwgfCB1bmRlZmluZWQgPT5cbiAgYSA9PT0gbnVsbCB8fCBhID09PSB1bmRlZmluZWQ7XG5cbmV4cG9ydCBjb25zdCBpc05vbk51bGxhYmxlID0gPEE+IChhOiBBIHwgbnVsbCB8IHVuZGVmaW5lZCk6IGEgaXMgTm9uTnVsbGFibGU8QT4gPT5cbiAgIWlzTnVsbGFibGUoYSk7XG5cbmV4cG9ydCBjb25zdCBpc0Z1bmN0aW9uOiAodmFsdWU6IGFueSkgPT4gdmFsdWUgaXMgRnVuY3Rpb24gPVxuICBpc1NpbXBsZVR5cGU8RnVuY3Rpb24+KCdmdW5jdGlvbicpO1xuXG5leHBvcnQgY29uc3QgaXNOdW1iZXI6ICh2YWx1ZTogYW55KSA9PiB2YWx1ZSBpcyBudW1iZXIgPVxuICBpc1NpbXBsZVR5cGU8bnVtYmVyPignbnVtYmVyJyk7XG5cbmV4cG9ydCBjb25zdCBpc0FycmF5T2YgPSA8RT4odmFsdWU6IGFueSwgcHJlZDogKHg6IGFueSkgPT4geCBpcyBFKTogdmFsdWUgaXMgQXJyYXk8RT4gPT4ge1xuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdmFsdWUubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIGlmICghKHByZWQodmFsdWVbaV0pKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc1Byb21pc2VMaWtlID0gKHg6IGFueSk6IHggaXMgUHJvbWlzZTx1bmtub3duPiA9PlxuICBpc09iamVjdCh4KVxuICAmJiBpc0Z1bmN0aW9uKHgudGhlbilcbiAgJiYgaXNGdW5jdGlvbih4LmNhdGNoKTtcbiIsImltcG9ydCBQbHVnaW5NYW5hZ2VyIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvUGx1Z2luTWFuYWdlcic7XG5cbmltcG9ydCAqIGFzIEFwaSBmcm9tICcuL2FwaS9BcGknO1xuaW1wb3J0ICogYXMgT3B0aW9ucyBmcm9tICcuL2FwaS9PcHRpb25zJztcbmltcG9ydCAqIGFzIEJlZm9yZVVubG9hZCBmcm9tICcuL2NvcmUvQmVmb3JlVW5sb2FkJztcbmltcG9ydCAqIGFzIFN0b3JhZ2UgZnJvbSAnLi9jb3JlL1N0b3JhZ2UnO1xuaW1wb3J0ICogYXMgQnV0dG9ucyBmcm9tICcuL3VpL0J1dHRvbnMnO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgY29udGFpbnMgYWxsIGNvcmUgbG9naWMgZm9yIHRoZSBhdXRvc2F2ZSBwbHVnaW4uXG4gKlxuICogQGNsYXNzIHRpbnltY2UuYXV0b3NhdmUuUGx1Z2luXG4gKiBAcHJpdmF0ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0ICgpOiB2b2lkID0+IHtcbiAgUGx1Z2luTWFuYWdlci5hZGQoJ2F1dG9zYXZlJywgKGVkaXRvcikgPT4ge1xuICAgIE9wdGlvbnMucmVnaXN0ZXIoZWRpdG9yKTtcbiAgICBCZWZvcmVVbmxvYWQuc2V0dXAoZWRpdG9yKTtcbiAgICBCdXR0b25zLnJlZ2lzdGVyKGVkaXRvcik7XG5cbiAgICBlZGl0b3Iub24oJ2luaXQnLCAoKSA9PiB7XG4gICAgICBpZiAoT3B0aW9ucy5zaG91bGRSZXN0b3JlV2hlbkVtcHR5KGVkaXRvcikgJiYgZWRpdG9yLmRvbS5pc0VtcHR5KGVkaXRvci5nZXRCb2R5KCkpKSB7XG4gICAgICAgIFN0b3JhZ2UucmVzdG9yZURyYWZ0KGVkaXRvcik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gQXBpLmdldChlZGl0b3IpO1xuICB9KTtcbn07XG4iLCJpbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuXG5pbXBvcnQgKiBhcyBTdG9yYWdlIGZyb20gJy4uL2NvcmUvU3RvcmFnZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBpIHtcbiAgcmVhZG9ubHkgaGFzRHJhZnQ6ICgpID0+IGJvb2xlYW47XG4gIHJlYWRvbmx5IHN0b3JlRHJhZnQ6ICgpID0+IHZvaWQ7XG4gIHJlYWRvbmx5IHJlc3RvcmVEcmFmdDogKCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgcmVtb3ZlRHJhZnQ6IChmaXJlPzogYm9vbGVhbikgPT4gdm9pZDtcbiAgcmVhZG9ubHkgaXNFbXB0eTogKCkgPT4gYm9vbGVhbjtcbn1cblxuY29uc3QgZ2V0ID0gKGVkaXRvcjogRWRpdG9yKTogQXBpID0+ICh7XG4gIGhhc0RyYWZ0OiAoKSA9PiBTdG9yYWdlLmhhc0RyYWZ0KGVkaXRvciksXG4gIHN0b3JlRHJhZnQ6ICgpID0+IFN0b3JhZ2Uuc3RvcmVEcmFmdChlZGl0b3IpLFxuICByZXN0b3JlRHJhZnQ6ICgpID0+IFN0b3JhZ2UucmVzdG9yZURyYWZ0KGVkaXRvciksXG4gIHJlbW92ZURyYWZ0OiAoZmlyZT86IGJvb2xlYW4pID0+IFN0b3JhZ2UucmVtb3ZlRHJhZnQoZWRpdG9yLCBmaXJlKSxcbiAgaXNFbXB0eTogKGh0bWw/OiBzdHJpbmcpID0+IFN0b3JhZ2UuaXNFbXB0eShlZGl0b3IsIGh0bWwpXG59KTtcblxuZXhwb3J0IHtcbiAgZ2V0XG59O1xuIiwiaW1wb3J0IHR5cGUgRWRpdG9yIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvRWRpdG9yJztcbmltcG9ydCB0eXBlIHsgRWRpdG9yRXZlbnQgfSBmcm9tICd0aW55bWNlL2NvcmUvYXBpL3V0aWwvRXZlbnREaXNwYXRjaGVyJztcblxuY29uc3QgZmlyZVJlc3RvcmVEcmFmdCA9IChlZGl0b3I6IEVkaXRvcik6IEVkaXRvckV2ZW50PHt9PiA9PlxuICBlZGl0b3IuZGlzcGF0Y2goJ1Jlc3RvcmVEcmFmdCcpO1xuXG5jb25zdCBmaXJlU3RvcmVEcmFmdCA9IChlZGl0b3I6IEVkaXRvcik6IEVkaXRvckV2ZW50PHt9PiA9PlxuICBlZGl0b3IuZGlzcGF0Y2goJ1N0b3JlRHJhZnQnKTtcblxuY29uc3QgZmlyZVJlbW92ZURyYWZ0ID0gKGVkaXRvcjogRWRpdG9yKTogRWRpdG9yRXZlbnQ8e30+ID0+XG4gIGVkaXRvci5kaXNwYXRjaCgnUmVtb3ZlRHJhZnQnKTtcblxuZXhwb3J0IHtcbiAgZmlyZVJlc3RvcmVEcmFmdCxcbiAgZmlyZVN0b3JlRHJhZnQsXG4gIGZpcmVSZW1vdmVEcmFmdFxufTtcbiIsImltcG9ydCB7IFR5cGUgfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5pbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuaW1wb3J0IHR5cGUgeyBFZGl0b3JPcHRpb25zIH0gZnJvbSAndGlueW1jZS9jb3JlL2FwaS9PcHRpb25UeXBlcyc7XG5cbmltcG9ydCAqIGFzIFRpbWUgZnJvbSAnLi4vY29yZS9UaW1lJztcblxuY29uc3Qgb3B0aW9uOiB7XG4gIDxLIGV4dGVuZHMga2V5b2YgRWRpdG9yT3B0aW9ucz4obmFtZTogSyk6IChlZGl0b3I6IEVkaXRvcikgPT4gRWRpdG9yT3B0aW9uc1tLXTtcbiAgPFQ+KG5hbWU6IHN0cmluZyk6IChlZGl0b3I6IEVkaXRvcikgPT4gVDtcbn0gPSAobmFtZTogc3RyaW5nKSA9PiAoZWRpdG9yOiBFZGl0b3IpID0+XG4gIGVkaXRvci5vcHRpb25zLmdldChuYW1lKTtcblxuY29uc3QgcmVnaXN0ZXIgPSAoZWRpdG9yOiBFZGl0b3IpOiB2b2lkID0+IHtcbiAgY29uc3QgcmVnaXN0ZXJPcHRpb24gPSBlZGl0b3Iub3B0aW9ucy5yZWdpc3RlcjtcblxuICBjb25zdCB0aW1lUHJvY2Vzc29yID0gKHZhbHVlOiB1bmtub3duKSA9PiB7XG4gICAgY29uc3QgdmFsaWQgPSBUeXBlLmlzU3RyaW5nKHZhbHVlKTtcbiAgICBpZiAodmFsaWQpIHtcbiAgICAgIHJldHVybiB7IHZhbHVlOiBUaW1lLnBhcnNlKHZhbHVlKSwgdmFsaWQgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHsgdmFsaWQ6IGZhbHNlIGFzIGNvbnN0LCBtZXNzYWdlOiAnTXVzdCBiZSBhIHN0cmluZy4nIH07XG4gICAgfVxuICB9O1xuXG4gIHJlZ2lzdGVyT3B0aW9uKCdhdXRvc2F2ZV9hc2tfYmVmb3JlX3VubG9hZCcsIHtcbiAgICBwcm9jZXNzb3I6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0OiB0cnVlXG4gIH0pO1xuXG4gIHJlZ2lzdGVyT3B0aW9uKCdhdXRvc2F2ZV9wcmVmaXgnLCB7XG4gICAgcHJvY2Vzc29yOiAnc3RyaW5nJyxcbiAgICBkZWZhdWx0OiAndGlueW1jZS1hdXRvc2F2ZS17cGF0aH17cXVlcnl9e2hhc2h9LXtpZH0tJ1xuICB9KTtcblxuICByZWdpc3Rlck9wdGlvbignYXV0b3NhdmVfcmVzdG9yZV93aGVuX2VtcHR5Jywge1xuICAgIHByb2Nlc3NvcjogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IGZhbHNlXG4gIH0pO1xuXG4gIHJlZ2lzdGVyT3B0aW9uKCdhdXRvc2F2ZV9pbnRlcnZhbCcsIHtcbiAgICBwcm9jZXNzb3I6IHRpbWVQcm9jZXNzb3IsXG4gICAgZGVmYXVsdDogJzMwcydcbiAgfSk7XG5cbiAgcmVnaXN0ZXJPcHRpb24oJ2F1dG9zYXZlX3JldGVudGlvbicsIHtcbiAgICBwcm9jZXNzb3I6IHRpbWVQcm9jZXNzb3IsXG4gICAgZGVmYXVsdDogJzIwbSdcbiAgfSk7XG59O1xuXG5jb25zdCBzaG91bGRBc2tCZWZvcmVVbmxvYWQgPSBvcHRpb248Ym9vbGVhbj4oJ2F1dG9zYXZlX2Fza19iZWZvcmVfdW5sb2FkJyk7XG5jb25zdCBzaG91bGRSZXN0b3JlV2hlbkVtcHR5ID0gb3B0aW9uPGJvb2xlYW4+KCdhdXRvc2F2ZV9yZXN0b3JlX3doZW5fZW1wdHknKTtcbmNvbnN0IGdldEF1dG9TYXZlSW50ZXJ2YWwgPSBvcHRpb248bnVtYmVyPignYXV0b3NhdmVfaW50ZXJ2YWwnKTtcbmNvbnN0IGdldEF1dG9TYXZlUmV0ZW50aW9uID0gb3B0aW9uPG51bWJlcj4oJ2F1dG9zYXZlX3JldGVudGlvbicpO1xuXG5jb25zdCBnZXRBdXRvU2F2ZVByZWZpeCA9IChlZGl0b3I6IEVkaXRvcik6IHN0cmluZyA9PiB7XG4gIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQubG9jYXRpb247XG4gIHJldHVybiBlZGl0b3Iub3B0aW9ucy5nZXQoJ2F1dG9zYXZlX3ByZWZpeCcpLnJlcGxhY2UoL3twYXRofS9nLCBsb2NhdGlvbi5wYXRobmFtZSlcbiAgICAucmVwbGFjZSgve3F1ZXJ5fS9nLCBsb2NhdGlvbi5zZWFyY2gpXG4gICAgLnJlcGxhY2UoL3toYXNofS9nLCBsb2NhdGlvbi5oYXNoKVxuICAgIC5yZXBsYWNlKC97aWR9L2csIGVkaXRvci5pZCk7XG59O1xuXG5leHBvcnQge1xuICByZWdpc3RlcixcbiAgc2hvdWxkQXNrQmVmb3JlVW5sb2FkLFxuICBnZXRBdXRvU2F2ZVByZWZpeCxcbiAgc2hvdWxkUmVzdG9yZVdoZW5FbXB0eSxcbiAgZ2V0QXV0b1NhdmVJbnRlcnZhbCxcbiAgZ2V0QXV0b1NhdmVSZXRlbnRpb25cbn07XG4iLCJpbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuaW1wb3J0IEVkaXRvck1hbmFnZXIgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3JNYW5hZ2VyJztcbmltcG9ydCBUb29scyBmcm9tICd0aW55bWNlL2NvcmUvYXBpL3V0aWwvVG9vbHMnO1xuXG5pbXBvcnQgKiBhcyBPcHRpb25zIGZyb20gJy4uL2FwaS9PcHRpb25zJztcblxuY29uc3Qgc2V0dXAgPSAoZWRpdG9yOiBFZGl0b3IpOiB2b2lkID0+IHtcbiAgZWRpdG9yLmVkaXRvck1hbmFnZXIub24oJ0JlZm9yZVVubG9hZCcsIChlKSA9PiB7XG4gICAgbGV0IG1zZzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gICAgVG9vbHMuZWFjaChFZGl0b3JNYW5hZ2VyLmdldCgpLCAoZWRpdG9yKSA9PiB7XG4gICAgICAvLyBTdG9yZSBhIGRyYWZ0IGZvciBlYWNoIGVkaXRvciBpbnN0YW5jZVxuICAgICAgaWYgKGVkaXRvci5wbHVnaW5zLmF1dG9zYXZlKSB7XG4gICAgICAgIGVkaXRvci5wbHVnaW5zLmF1dG9zYXZlLnN0b3JlRHJhZnQoKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2V0dXAgYSByZXR1cm4gbWVzc2FnZSBpZiB0aGUgZWRpdG9yIGlzIGRpcnR5XG4gICAgICBpZiAoIW1zZyAmJiBlZGl0b3IuaXNEaXJ0eSgpICYmIE9wdGlvbnMuc2hvdWxkQXNrQmVmb3JlVW5sb2FkKGVkaXRvcikpIHtcbiAgICAgICAgbXNnID0gZWRpdG9yLnRyYW5zbGF0ZSgnWW91IGhhdmUgdW5zYXZlZCBjaGFuZ2VzIGFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBuYXZpZ2F0ZSBhd2F5PycpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKG1zZykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5yZXR1cm5WYWx1ZSA9IG1zZztcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IHtcbiAgc2V0dXBcbn07XG4iLCJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0IHR5cGUgRWRpdG9yIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvRWRpdG9yJztcbmltcG9ydCBEZWxheSBmcm9tICd0aW55bWNlL2NvcmUvYXBpL3V0aWwvRGVsYXknO1xuaW1wb3J0IExvY2FsU3RvcmFnZSBmcm9tICd0aW55bWNlL2NvcmUvYXBpL3V0aWwvTG9jYWxTdG9yYWdlJztcbmltcG9ydCBUb29scyBmcm9tICd0aW55bWNlL2NvcmUvYXBpL3V0aWwvVG9vbHMnO1xuXG5pbXBvcnQgKiBhcyBFdmVudHMgZnJvbSAnLi4vYXBpL0V2ZW50cyc7XG5pbXBvcnQgKiBhcyBPcHRpb25zIGZyb20gJy4uL2FwaS9PcHRpb25zJztcblxuY29uc3QgaXNFbXB0eSA9IChlZGl0b3I6IEVkaXRvciwgaHRtbD86IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuICBpZiAoVHlwZS5pc1VuZGVmaW5lZChodG1sKSkge1xuICAgIHJldHVybiBlZGl0b3IuZG9tLmlzRW1wdHkoZWRpdG9yLmdldEJvZHkoKSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdHJpbW1lZEh0bWwgPSBUb29scy50cmltKGh0bWwpO1xuXG4gICAgaWYgKHRyaW1tZWRIdG1sID09PSAnJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGZyYWdtZW50ID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyh0cmltbWVkSHRtbCwgJ3RleHQvaHRtbCcpO1xuICAgICAgcmV0dXJuIGVkaXRvci5kb20uaXNFbXB0eShmcmFnbWVudCk7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBoYXNEcmFmdCA9IChlZGl0b3I6IEVkaXRvcik6IGJvb2xlYW4gPT4ge1xuICBjb25zdCB0aW1lID0gcGFyc2VJbnQoTG9jYWxTdG9yYWdlLmdldEl0ZW0oT3B0aW9ucy5nZXRBdXRvU2F2ZVByZWZpeChlZGl0b3IpICsgJ3RpbWUnKSA/PyAnMCcsIDEwKSB8fCAwO1xuXG4gIGlmIChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHRpbWUgPiBPcHRpb25zLmdldEF1dG9TYXZlUmV0ZW50aW9uKGVkaXRvcikpIHtcbiAgICByZW1vdmVEcmFmdChlZGl0b3IsIGZhbHNlKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmNvbnN0IHJlbW92ZURyYWZ0ID0gKGVkaXRvcjogRWRpdG9yLCBmaXJlPzogYm9vbGVhbik6IHZvaWQgPT4ge1xuICBjb25zdCBwcmVmaXggPSBPcHRpb25zLmdldEF1dG9TYXZlUHJlZml4KGVkaXRvcik7XG5cbiAgTG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0ocHJlZml4ICsgJ2RyYWZ0Jyk7XG4gIExvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHByZWZpeCArICd0aW1lJyk7XG5cbiAgaWYgKGZpcmUgIT09IGZhbHNlKSB7XG4gICAgRXZlbnRzLmZpcmVSZW1vdmVEcmFmdChlZGl0b3IpO1xuICB9XG59O1xuXG5jb25zdCBzdG9yZURyYWZ0ID0gKGVkaXRvcjogRWRpdG9yKTogdm9pZCA9PiB7XG4gIGNvbnN0IHByZWZpeCA9IE9wdGlvbnMuZ2V0QXV0b1NhdmVQcmVmaXgoZWRpdG9yKTtcblxuICBpZiAoIWlzRW1wdHkoZWRpdG9yKSAmJiBlZGl0b3IuaXNEaXJ0eSgpKSB7XG4gICAgTG9jYWxTdG9yYWdlLnNldEl0ZW0ocHJlZml4ICsgJ2RyYWZ0JywgZWRpdG9yLmdldENvbnRlbnQoeyBmb3JtYXQ6ICdyYXcnLCBub19ldmVudHM6IHRydWUgfSkpO1xuICAgIExvY2FsU3RvcmFnZS5zZXRJdGVtKHByZWZpeCArICd0aW1lJywgbmV3IERhdGUoKS5nZXRUaW1lKCkudG9TdHJpbmcoKSk7XG4gICAgRXZlbnRzLmZpcmVTdG9yZURyYWZ0KGVkaXRvcik7XG4gIH1cbn07XG5cbmNvbnN0IHJlc3RvcmVEcmFmdCA9IChlZGl0b3I6IEVkaXRvcik6IHZvaWQgPT4ge1xuICBjb25zdCBwcmVmaXggPSBPcHRpb25zLmdldEF1dG9TYXZlUHJlZml4KGVkaXRvcik7XG5cbiAgaWYgKGhhc0RyYWZ0KGVkaXRvcikpIHtcbiAgICBlZGl0b3Iuc2V0Q29udGVudChMb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcmVmaXggKyAnZHJhZnQnKSA/PyAnJywgeyBmb3JtYXQ6ICdyYXcnIH0pO1xuICAgIEV2ZW50cy5maXJlUmVzdG9yZURyYWZ0KGVkaXRvcik7XG4gIH1cbn07XG5cbmNvbnN0IHN0YXJ0U3RvcmVEcmFmdCA9IChlZGl0b3I6IEVkaXRvcik6IHZvaWQgPT4ge1xuICBjb25zdCBpbnRlcnZhbCA9IE9wdGlvbnMuZ2V0QXV0b1NhdmVJbnRlcnZhbChlZGl0b3IpO1xuICBEZWxheS5zZXRFZGl0b3JJbnRlcnZhbChlZGl0b3IsICgpID0+IHtcbiAgICBzdG9yZURyYWZ0KGVkaXRvcik7XG4gIH0sIGludGVydmFsKTtcbn07XG5cbmNvbnN0IHJlc3RvcmVMYXN0RHJhZnQgPSAoZWRpdG9yOiBFZGl0b3IpOiB2b2lkID0+IHtcbiAgZWRpdG9yLnVuZG9NYW5hZ2VyLnRyYW5zYWN0KCgpID0+IHtcbiAgICByZXN0b3JlRHJhZnQoZWRpdG9yKTtcbiAgICByZW1vdmVEcmFmdChlZGl0b3IpO1xuICB9KTtcblxuICBlZGl0b3IuZm9jdXMoKTtcbn07XG5cbmV4cG9ydCB7XG4gIGlzRW1wdHksXG4gIGhhc0RyYWZ0LFxuICByZW1vdmVEcmFmdCxcbiAgc3RvcmVEcmFmdCxcbiAgcmVzdG9yZURyYWZ0LFxuICBzdGFydFN0b3JlRHJhZnQsXG4gIHJlc3RvcmVMYXN0RHJhZnRcbn07XG4iLCJjb25zdCBwYXJzZSA9ICh0aW1lU3RyaW5nOiBzdHJpbmcpOiBudW1iZXIgPT4ge1xuICBjb25zdCBtdWx0aXBsZXM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7XG4gICAgczogMTAwMCxcbiAgICBtOiA2MDAwMFxuICB9O1xuXG4gIGNvbnN0IHBhcnNlZFRpbWUgPSAvXihcXGQrKShbbXNdPykkLy5leGVjKHRpbWVTdHJpbmcpO1xuICByZXR1cm4gKHBhcnNlZFRpbWUgJiYgcGFyc2VkVGltZVsyXSA/IG11bHRpcGxlc1twYXJzZWRUaW1lWzJdXSA6IDEpICogcGFyc2VJbnQodGltZVN0cmluZywgMTApO1xufTtcblxuZXhwb3J0IHtcbiAgcGFyc2Vcbn07XG4iLCJpbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuXG5pbXBvcnQgKiBhcyBTdG9yYWdlIGZyb20gJy4uL2NvcmUvU3RvcmFnZSc7XG5cbmludGVyZmFjZSBBcGkge1xuICBzZXRFbmFibGVkOiAoZW5hYmxlZDogYm9vbGVhbikgPT4gdm9pZDtcbn1cblxuY29uc3QgbWFrZVNldHVwSGFuZGxlciA9IChlZGl0b3I6IEVkaXRvcikgPT4gKGFwaTogQXBpKSA9PiB7XG4gIGNvbnN0IHNob3VsZEVuYWJsZSA9ICgpID0+IFN0b3JhZ2UuaGFzRHJhZnQoZWRpdG9yKSAmJiAhZWRpdG9yLm1vZGUuaXNSZWFkT25seSgpO1xuICBhcGkuc2V0RW5hYmxlZChzaG91bGRFbmFibGUoKSk7XG4gIGNvbnN0IGVkaXRvckV2ZW50Q2FsbGJhY2sgPSAoKSA9PiBhcGkuc2V0RW5hYmxlZChzaG91bGRFbmFibGUoKSk7XG4gIGVkaXRvci5vbignU3RvcmVEcmFmdCBSZXN0b3JlRHJhZnQgUmVtb3ZlRHJhZnQnLCBlZGl0b3JFdmVudENhbGxiYWNrKTtcbiAgcmV0dXJuICgpID0+IGVkaXRvci5vZmYoJ1N0b3JlRHJhZnQgUmVzdG9yZURyYWZ0IFJlbW92ZURyYWZ0JywgZWRpdG9yRXZlbnRDYWxsYmFjayk7XG59O1xuXG5jb25zdCByZWdpc3RlciA9IChlZGl0b3I6IEVkaXRvcik6IHZvaWQgPT4ge1xuICAvLyBUT0RPOiBUaGlzIHdhcyBtb3ZlZCBmcm9tIG1ha2VTZXR1cEhhbmRsZXIgYXMgaXQgd291bGQgb25seSBiZSBjYWxsZWQgd2hlbiB0aGUgbWVudSBpdGVtIHdhcyByZW5kZXJlZD9cbiAgLy8gICAgICAgSXMgaXQgc2FmZSB0byBzdGFydCB0aGlzIHByb2Nlc3Mgd2hlbiB0aGUgcGx1Z2luIGlzIHJlZ2lzdGVyZWQ/XG4gIFN0b3JhZ2Uuc3RhcnRTdG9yZURyYWZ0KGVkaXRvcik7XG5cbiAgY29uc3Qgb25BY3Rpb24gPSAoKSA9PiB7XG4gICAgU3RvcmFnZS5yZXN0b3JlTGFzdERyYWZ0KGVkaXRvcik7XG4gIH07XG5cbiAgZWRpdG9yLnVpLnJlZ2lzdHJ5LmFkZEJ1dHRvbigncmVzdG9yZWRyYWZ0Jywge1xuICAgIHRvb2x0aXA6ICdSZXN0b3JlIGxhc3QgZHJhZnQnLFxuICAgIGljb246ICdyZXN0b3JlLWRyYWZ0JyxcbiAgICBvbkFjdGlvbixcbiAgICBvblNldHVwOiBtYWtlU2V0dXBIYW5kbGVyKGVkaXRvcilcbiAgfSk7XG5cbiAgZWRpdG9yLnVpLnJlZ2lzdHJ5LmFkZE1lbnVJdGVtKCdyZXN0b3JlZHJhZnQnLCB7XG4gICAgdGV4dDogJ1Jlc3RvcmUgbGFzdCBkcmFmdCcsXG4gICAgaWNvbjogJ3Jlc3RvcmUtZHJhZnQnLFxuICAgIG9uQWN0aW9uLFxuICAgIG9uU2V0dXA6IG1ha2VTZXR1cEhhbmRsZXIoZWRpdG9yKVxuICB9KTtcbn07XG5cbmV4cG9ydCB7XG4gIHJlZ2lzdGVyXG59O1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuICAgICAgICBpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG4gICAgICAgIH1cbiAgICB9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ2ID0gKCkgPT4gKFwiMS41LjJcIikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ1aWQgPSBcImJ1bmRsZXI9cnNwYWNrQDEuNS4yXCI7XG4iLCJpbXBvcnQgUGx1Z2luIGZyb20gJy4vUGx1Z2luJztcblxuUGx1Z2luKCk7XG5cbi8qKiAqKioqKlxuICogRE8gTk9UIEVYUE9SVCBBTllUSElOR1xuICpcbiAqIElGIFlPVSBETyBST0xMVVAgV0lMTCBMRUFWRSBBIEdMT0JBTCBPTiBUSEUgUEFHRVxuICoqKioqKiovXG4iXSwibmFtZXMiOlsiZ2V0UHJvdG90eXBlT2YiLCJPYmplY3QiLCJoYXNQcm90byIsInYiLCJjb25zdHJ1Y3RvciIsInByZWRpY2F0ZSIsInR5cGVPZiIsIngiLCJ0IiwiQXJyYXkiLCJTdHJpbmciLCJvIiwicHJvdG8iLCJpc1R5cGUiLCJ0eXBlIiwidmFsdWUiLCJpc1NpbXBsZVR5cGUiLCJlcSIsImEiLCJpcyIsImlzT2JqZWN0IiwiaXNTdHJpbmciLCJpc1BsYWluT2JqZWN0IiwiaXNBcnJheSIsImlzTnVsbCIsImlzQm9vbGVhbiIsImlzVW5kZWZpbmVkIiwidW5kZWZpbmVkIiwiaXNOdWxsYWJsZSIsImlzTm9uTnVsbGFibGUiLCJpc0Z1bmN0aW9uIiwiaXNOdW1iZXIiLCJpc0FycmF5T2YiLCJwcmVkIiwiaSIsImxlbiIsImlzUHJvbWlzZUxpa2UiLCJQbHVnaW5NYW5hZ2VyIiwiQXBpIiwiT3B0aW9ucyIsIkJlZm9yZVVubG9hZCIsIlN0b3JhZ2UiLCJCdXR0b25zIiwiZWRpdG9yIiwiZ2V0IiwiZmlyZSIsImh0bWwiLCJmaXJlUmVzdG9yZURyYWZ0IiwiZmlyZVN0b3JlRHJhZnQiLCJmaXJlUmVtb3ZlRHJhZnQiLCJUeXBlIiwiVGltZSIsIm9wdGlvbiIsIm5hbWUiLCJyZWdpc3RlciIsInJlZ2lzdGVyT3B0aW9uIiwidGltZVByb2Nlc3NvciIsInZhbGlkIiwic2hvdWxkQXNrQmVmb3JlVW5sb2FkIiwic2hvdWxkUmVzdG9yZVdoZW5FbXB0eSIsImdldEF1dG9TYXZlSW50ZXJ2YWwiLCJnZXRBdXRvU2F2ZVJldGVudGlvbiIsImdldEF1dG9TYXZlUHJlZml4IiwibG9jYXRpb24iLCJkb2N1bWVudCIsIkVkaXRvck1hbmFnZXIiLCJUb29scyIsInNldHVwIiwiZSIsIm1zZyIsIkRlbGF5IiwiTG9jYWxTdG9yYWdlIiwiRXZlbnRzIiwiaXNFbXB0eSIsInRyaW1tZWRIdG1sIiwiZnJhZ21lbnQiLCJET01QYXJzZXIiLCJoYXNEcmFmdCIsInRpbWUiLCJwYXJzZUludCIsIkRhdGUiLCJyZW1vdmVEcmFmdCIsInByZWZpeCIsInN0b3JlRHJhZnQiLCJyZXN0b3JlRHJhZnQiLCJzdGFydFN0b3JlRHJhZnQiLCJpbnRlcnZhbCIsInJlc3RvcmVMYXN0RHJhZnQiLCJwYXJzZSIsInRpbWVTdHJpbmciLCJtdWx0aXBsZXMiLCJwYXJzZWRUaW1lIiwibWFrZVNldHVwSGFuZGxlciIsImFwaSIsInNob3VsZEVuYWJsZSIsImVkaXRvckV2ZW50Q2FsbGJhY2siLCJvbkFjdGlvbiIsIlBsdWdpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLDZEQUFlLE1BQU0sRUFBQztBQUNmOzs7Ozs7Ozs7Ozs7OztBQ0hQOztBQUVBLDZEQUFlLE1BQU0sRUFBQztBQUNmOzs7Ozs7Ozs7Ozs7OztBQ0hQOztBQUVBLDZEQUFlLE1BQU0sRUFBQztBQUNmOzs7Ozs7Ozs7Ozs7OztBQ0hQOztBQUVBLDZEQUFlLE1BQU0sRUFBQztBQUNmOzs7Ozs7Ozs7Ozs7OztBQ0hQOztBQUVBLDZEQUFlLE1BQU0sRUFBQztBQUNmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hQLDZEQUE2RCxHQUM3RCxNQUFN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