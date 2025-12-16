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
"../katamari/src/main/ts/ephox/katamari/api/Cell.ts": 
/*!**********************************************************!*\
  !*** ../katamari/src/main/ts/ephox/katamari/api/Cell.ts ***!
  \**********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Cell: () => (Cell)
});
const Cell = (initial)=>{
    let value = initial;
    const get = ()=>{
        return value;
    };
    const set = (v)=>{
        value = v;
    };
    return {
        get,
        set
    };
};


}),
"./src/plugins/visualblocks/main/ts/Plugin.ts": 
/*!****************************************************!*\
  !*** ./src/plugins/visualblocks/main/ts/Plugin.ts ***!
  \****************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Cell.ts");
/* ESM import */var tinymce_core_api_PluginManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/PluginManager */ "./lib/globals/tinymce/core/api/PluginManager.js");
/* ESM import */var _api_Commands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/Commands */ "./src/plugins/visualblocks/main/ts/api/Commands.ts");
/* ESM import */var _api_Options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/Options */ "./src/plugins/visualblocks/main/ts/api/Options.ts");
/* ESM import */var _core_Bindings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/Bindings */ "./src/plugins/visualblocks/main/ts/core/Bindings.ts");
/* ESM import */var _ui_Buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/Buttons */ "./src/plugins/visualblocks/main/ts/ui/Buttons.ts");






/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>{
    tinymce_core_api_PluginManager__WEBPACK_IMPORTED_MODULE_0__["default"].add('visualblocks', (editor, pluginUrl)=>{
        _api_Options__WEBPACK_IMPORTED_MODULE_2__.register(editor);
        const enabledState = (0,_ephox_katamari__WEBPACK_IMPORTED_MODULE_5__.Cell)(false);
        _api_Commands__WEBPACK_IMPORTED_MODULE_1__.register(editor, pluginUrl, enabledState);
        _ui_Buttons__WEBPACK_IMPORTED_MODULE_4__.register(editor, enabledState);
        _core_Bindings__WEBPACK_IMPORTED_MODULE_3__.setup(editor, pluginUrl, enabledState);
    });
});


}),
"./src/plugins/visualblocks/main/ts/api/Commands.ts": 
/*!**********************************************************!*\
  !*** ./src/plugins/visualblocks/main/ts/api/Commands.ts ***!
  \**********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  register: () => (register)
});
/* ESM import */var _core_VisualBlocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/VisualBlocks */ "./src/plugins/visualblocks/main/ts/core/VisualBlocks.ts");

const register = (editor, pluginUrl, enabledState)=>{
    editor.addCommand('mceVisualBlocks', ()=>{
        _core_VisualBlocks__WEBPACK_IMPORTED_MODULE_0__.toggleVisualBlocks(editor, pluginUrl, enabledState);
    });
};



}),
"./src/plugins/visualblocks/main/ts/api/Events.ts": 
/*!********************************************************!*\
  !*** ./src/plugins/visualblocks/main/ts/api/Events.ts ***!
  \********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  fireVisualBlocks: () => (fireVisualBlocks)
});
const fireVisualBlocks = (editor, state)=>{
    editor.dispatch('VisualBlocks', {
        state
    });
};



}),
"./src/plugins/visualblocks/main/ts/api/Options.ts": 
/*!*********************************************************!*\
  !*** ./src/plugins/visualblocks/main/ts/api/Options.ts ***!
  \*********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  isEnabledByDefault: () => (isEnabledByDefault),
  register: () => (register)
});
const option = (name)=>(editor)=>editor.options.get(name);
const register = (editor)=>{
    const registerOption = editor.options.register;
    registerOption('visualblocks_default_state', {
        processor: 'boolean',
        default: false
    });
};
const isEnabledByDefault = option('visualblocks_default_state');



}),
"./src/plugins/visualblocks/main/ts/core/Bindings.ts": 
/*!***********************************************************!*\
  !*** ./src/plugins/visualblocks/main/ts/core/Bindings.ts ***!
  \***********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  setup: () => (setup)
});
/* ESM import */var _api_Options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/Options */ "./src/plugins/visualblocks/main/ts/api/Options.ts");
/* ESM import */var _VisualBlocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VisualBlocks */ "./src/plugins/visualblocks/main/ts/core/VisualBlocks.ts");


const setup = (editor, pluginUrl, enabledState)=>{
    // Prevents the visualblocks from being presented in the preview of formats when that is computed
    editor.on('PreviewFormats AfterPreviewFormats', (e)=>{
        if (enabledState.get()) {
            editor.dom.toggleClass(editor.getBody(), 'mce-visualblocks', e.type === 'afterpreviewformats');
        }
    });
    editor.on('init', ()=>{
        if (_api_Options__WEBPACK_IMPORTED_MODULE_0__.isEnabledByDefault(editor)) {
            _VisualBlocks__WEBPACK_IMPORTED_MODULE_1__.toggleVisualBlocks(editor, pluginUrl, enabledState);
        }
    });
};



}),
"./src/plugins/visualblocks/main/ts/core/VisualBlocks.ts": 
/*!***************************************************************!*\
  !*** ./src/plugins/visualblocks/main/ts/core/VisualBlocks.ts ***!
  \***************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  toggleVisualBlocks: () => (toggleVisualBlocks)
});
/* ESM import */var _api_Events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/Events */ "./src/plugins/visualblocks/main/ts/api/Events.ts");

const toggleVisualBlocks = (editor, pluginUrl, enabledState)=>{
    const dom = editor.dom;
    dom.toggleClass(editor.getBody(), 'mce-visualblocks');
    enabledState.set(!enabledState.get());
    _api_Events__WEBPACK_IMPORTED_MODULE_0__.fireVisualBlocks(editor, enabledState.get());
};



}),
"./src/plugins/visualblocks/main/ts/ui/Buttons.ts": 
/*!********************************************************!*\
  !*** ./src/plugins/visualblocks/main/ts/ui/Buttons.ts ***!
  \********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  register: () => (register)
});
const toggleActiveState = (editor, enabledState)=>(api)=>{
        api.setActive(enabledState.get());
        const editorEventCallback = (e)=>api.setActive(e.state);
        editor.on('VisualBlocks', editorEventCallback);
        return ()=>editor.off('VisualBlocks', editorEventCallback);
    };
const register = (editor, enabledState)=>{
    const onAction = ()=>editor.execCommand('mceVisualBlocks');
    editor.ui.registry.addToggleButton('visualblocks', {
        icon: 'visualblocks',
        tooltip: 'Show blocks',
        onAction,
        onSetup: toggleActiveState(editor, enabledState),
        context: 'any'
    });
    editor.ui.registry.addToggleMenuItem('visualblocks', {
        text: 'Show blocks',
        icon: 'visualblocks',
        onAction,
        onSetup: toggleActiveState(editor, enabledState),
        context: 'any'
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

/*!**************************************************!*\
  !*** ./src/plugins/visualblocks/main/ts/Main.ts ***!
  \**************************************************/
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _Plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Plugin */ "./src/plugins/visualblocks/main/ts/Plugin.ts");

(0,_Plugin__WEBPACK_IMPORTED_MODULE_0__["default"])(); /** *****
 * DO NOT EXPORT ANYTHING
 *
 * IF YOU DO ROLLUP WILL LEAVE A GLOBAL ON THE PAGE
 *******/ 

})();

})()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdGlueW1jZS9wbHVnaW5zL3Zpc3VhbGJsb2Nrcy9wbHVnaW4uanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aW55bWNlLy4vbGliL2dsb2JhbHMvdGlueW1jZS9jb3JlL2FwaS9QbHVnaW5NYW5hZ2VyLmpzIiwid2VicGFjazovL3RpbnltY2UvLi4va2F0YW1hcmkvc3JjL21haW4vdHMvZXBob3gva2F0YW1hcmkvYXBpL0NlbGwudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL3Zpc3VhbGJsb2Nrcy9tYWluL3RzL1BsdWdpbi50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvdmlzdWFsYmxvY2tzL21haW4vdHMvYXBpL0NvbW1hbmRzLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy92aXN1YWxibG9ja3MvbWFpbi90cy9hcGkvRXZlbnRzLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy92aXN1YWxibG9ja3MvbWFpbi90cy9hcGkvT3B0aW9ucy50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvdmlzdWFsYmxvY2tzL21haW4vdHMvY29yZS9CaW5kaW5ncy50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvdmlzdWFsYmxvY2tzL21haW4vdHMvY29yZS9WaXN1YWxCbG9ja3MudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL3Zpc3VhbGJsb2Nrcy9tYWluL3RzL3VpL0J1dHRvbnMudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lX3Byb3BlcnR5X2dldHRlcnMiLCJ3ZWJwYWNrOi8vdGlueW1jZS93ZWJwYWNrL3J1bnRpbWUvaGFzX293bl9wcm9wZXJ0eSIsIndlYnBhY2s6Ly90aW55bWNlL3dlYnBhY2svcnVudGltZS9tYWtlX25hbWVzcGFjZV9vYmplY3QiLCJ3ZWJwYWNrOi8vdGlueW1jZS93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3ZlcnNpb24iLCJ3ZWJwYWNrOi8vdGlueW1jZS93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3VuaXF1ZV9pZCIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvdmlzdWFsYmxvY2tzL21haW4vdHMvTWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZ2xvYmFsID0gdGlueW1jZS51dGlsLlRvb2xzLnJlc29sdmUoJ3RpbnltY2UuUGx1Z2luTWFuYWdlcicpO1xuXG5leHBvcnQgZGVmYXVsdCBnbG9iYWw7XG5leHBvcnQgdmFyIFBsdWdpbk1hbmFnZXIgPSBnbG9iYWw7XG4iLCJleHBvcnQgaW50ZXJmYWNlIENlbGw8VD4ge1xuICByZWFkb25seSBnZXQ6ICgpID0+IFQ7XG4gIHJlYWRvbmx5IHNldDogKHZhbHVlOiBUKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgQ2VsbCA9IDxUPihpbml0aWFsOiBUKTogQ2VsbDxUPiA9PiB7XG4gIGxldCB2YWx1ZSA9IGluaXRpYWw7XG5cbiAgY29uc3QgZ2V0ID0gKCkgPT4ge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICBjb25zdCBzZXQgPSAodjogVCkgPT4ge1xuICAgIHZhbHVlID0gdjtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldCxcbiAgICBzZXRcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBDZWxsIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0IFBsdWdpbk1hbmFnZXIgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9QbHVnaW5NYW5hZ2VyJztcblxuaW1wb3J0ICogYXMgQ29tbWFuZHMgZnJvbSAnLi9hcGkvQ29tbWFuZHMnO1xuaW1wb3J0ICogYXMgT3B0aW9ucyBmcm9tICcuL2FwaS9PcHRpb25zJztcbmltcG9ydCAqIGFzIEJpbmRpbmdzIGZyb20gJy4vY29yZS9CaW5kaW5ncyc7XG5pbXBvcnQgKiBhcyBCdXR0b25zIGZyb20gJy4vdWkvQnV0dG9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpOiB2b2lkID0+IHtcbiAgUGx1Z2luTWFuYWdlci5hZGQoJ3Zpc3VhbGJsb2NrcycsIChlZGl0b3IsIHBsdWdpblVybCkgPT4ge1xuICAgIE9wdGlvbnMucmVnaXN0ZXIoZWRpdG9yKTtcblxuICAgIGNvbnN0IGVuYWJsZWRTdGF0ZSA9IENlbGwoZmFsc2UpO1xuICAgIENvbW1hbmRzLnJlZ2lzdGVyKGVkaXRvciwgcGx1Z2luVXJsLCBlbmFibGVkU3RhdGUpO1xuICAgIEJ1dHRvbnMucmVnaXN0ZXIoZWRpdG9yLCBlbmFibGVkU3RhdGUpO1xuICAgIEJpbmRpbmdzLnNldHVwKGVkaXRvciwgcGx1Z2luVXJsLCBlbmFibGVkU3RhdGUpO1xuICB9KTtcbn07XG4iLCJpbXBvcnQgdHlwZSB7IENlbGwgfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5pbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuXG5pbXBvcnQgKiBhcyBWaXN1YWxCbG9ja3MgZnJvbSAnLi4vY29yZS9WaXN1YWxCbG9ja3MnO1xuXG5jb25zdCByZWdpc3RlciA9IChlZGl0b3I6IEVkaXRvciwgcGx1Z2luVXJsOiBzdHJpbmcsIGVuYWJsZWRTdGF0ZTogQ2VsbDxib29sZWFuPik6IHZvaWQgPT4ge1xuICBlZGl0b3IuYWRkQ29tbWFuZCgnbWNlVmlzdWFsQmxvY2tzJywgKCkgPT4ge1xuICAgIFZpc3VhbEJsb2Nrcy50b2dnbGVWaXN1YWxCbG9ja3MoZWRpdG9yLCBwbHVnaW5VcmwsIGVuYWJsZWRTdGF0ZSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHtcbiAgcmVnaXN0ZXJcbn07XG4iLCJpbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuXG5jb25zdCBmaXJlVmlzdWFsQmxvY2tzID0gKGVkaXRvcjogRWRpdG9yLCBzdGF0ZTogYm9vbGVhbik6IHZvaWQgPT4ge1xuICBlZGl0b3IuZGlzcGF0Y2goJ1Zpc3VhbEJsb2NrcycsIHsgc3RhdGUgfSk7XG59O1xuXG5leHBvcnQge1xuICBmaXJlVmlzdWFsQmxvY2tzXG59O1xuIiwiaW1wb3J0IHR5cGUgRWRpdG9yIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvRWRpdG9yJztcbmltcG9ydCB0eXBlIHsgRWRpdG9yT3B0aW9ucyB9IGZyb20gJ3RpbnltY2UvY29yZS9hcGkvT3B0aW9uVHlwZXMnO1xuXG5jb25zdCBvcHRpb246IHtcbiAgPEsgZXh0ZW5kcyBrZXlvZiBFZGl0b3JPcHRpb25zPihuYW1lOiBLKTogKGVkaXRvcjogRWRpdG9yKSA9PiBFZGl0b3JPcHRpb25zW0tdO1xuICA8VD4obmFtZTogc3RyaW5nKTogKGVkaXRvcjogRWRpdG9yKSA9PiBUO1xufSA9IChuYW1lOiBzdHJpbmcpID0+IChlZGl0b3I6IEVkaXRvcikgPT5cbiAgZWRpdG9yLm9wdGlvbnMuZ2V0KG5hbWUpO1xuXG5jb25zdCByZWdpc3RlciA9IChlZGl0b3I6IEVkaXRvcik6IHZvaWQgPT4ge1xuICBjb25zdCByZWdpc3Rlck9wdGlvbiA9IGVkaXRvci5vcHRpb25zLnJlZ2lzdGVyO1xuXG4gIHJlZ2lzdGVyT3B0aW9uKCd2aXN1YWxibG9ja3NfZGVmYXVsdF9zdGF0ZScsIHtcbiAgICBwcm9jZXNzb3I6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0OiBmYWxzZVxuICB9KTtcbn07XG5cbmNvbnN0IGlzRW5hYmxlZEJ5RGVmYXVsdCA9IG9wdGlvbjxib29sZWFuPigndmlzdWFsYmxvY2tzX2RlZmF1bHRfc3RhdGUnKTtcblxuZXhwb3J0IHtcbiAgcmVnaXN0ZXIsXG4gIGlzRW5hYmxlZEJ5RGVmYXVsdFxufTtcbiIsImltcG9ydCB0eXBlIHsgQ2VsbCB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmltcG9ydCB0eXBlIEVkaXRvciBmcm9tICd0aW55bWNlL2NvcmUvYXBpL0VkaXRvcic7XG5cbmltcG9ydCAqIGFzIE9wdGlvbnMgZnJvbSAnLi4vYXBpL09wdGlvbnMnO1xuXG5pbXBvcnQgKiBhcyBWaXN1YWxCbG9ja3MgZnJvbSAnLi9WaXN1YWxCbG9ja3MnO1xuXG5jb25zdCBzZXR1cCA9IChlZGl0b3I6IEVkaXRvciwgcGx1Z2luVXJsOiBzdHJpbmcsIGVuYWJsZWRTdGF0ZTogQ2VsbDxib29sZWFuPik6IHZvaWQgPT4ge1xuICAvLyBQcmV2ZW50cyB0aGUgdmlzdWFsYmxvY2tzIGZyb20gYmVpbmcgcHJlc2VudGVkIGluIHRoZSBwcmV2aWV3IG9mIGZvcm1hdHMgd2hlbiB0aGF0IGlzIGNvbXB1dGVkXG4gIGVkaXRvci5vbignUHJldmlld0Zvcm1hdHMgQWZ0ZXJQcmV2aWV3Rm9ybWF0cycsIChlKSA9PiB7XG4gICAgaWYgKGVuYWJsZWRTdGF0ZS5nZXQoKSkge1xuICAgICAgZWRpdG9yLmRvbS50b2dnbGVDbGFzcyhlZGl0b3IuZ2V0Qm9keSgpLCAnbWNlLXZpc3VhbGJsb2NrcycsIGUudHlwZSA9PT0gJ2FmdGVycHJldmlld2Zvcm1hdHMnKTtcbiAgICB9XG4gIH0pO1xuXG4gIGVkaXRvci5vbignaW5pdCcsICgpID0+IHtcbiAgICBpZiAoT3B0aW9ucy5pc0VuYWJsZWRCeURlZmF1bHQoZWRpdG9yKSkge1xuICAgICAgVmlzdWFsQmxvY2tzLnRvZ2dsZVZpc3VhbEJsb2NrcyhlZGl0b3IsIHBsdWdpblVybCwgZW5hYmxlZFN0YXRlKTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IHtcbiAgc2V0dXBcbn07XG4iLCJpbXBvcnQgdHlwZSB7IENlbGwgfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5pbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuXG5pbXBvcnQgKiBhcyBFdmVudHMgZnJvbSAnLi4vYXBpL0V2ZW50cyc7XG5cbmNvbnN0IHRvZ2dsZVZpc3VhbEJsb2NrcyA9IChlZGl0b3I6IEVkaXRvciwgcGx1Z2luVXJsOiBzdHJpbmcsIGVuYWJsZWRTdGF0ZTogQ2VsbDxib29sZWFuPik6IHZvaWQgPT4ge1xuICBjb25zdCBkb20gPSBlZGl0b3IuZG9tO1xuXG4gIGRvbS50b2dnbGVDbGFzcyhlZGl0b3IuZ2V0Qm9keSgpLCAnbWNlLXZpc3VhbGJsb2NrcycpO1xuICBlbmFibGVkU3RhdGUuc2V0KCFlbmFibGVkU3RhdGUuZ2V0KCkpO1xuXG4gIEV2ZW50cy5maXJlVmlzdWFsQmxvY2tzKGVkaXRvciwgZW5hYmxlZFN0YXRlLmdldCgpKTtcbn07XG5cbmV4cG9ydCB7XG4gIHRvZ2dsZVZpc3VhbEJsb2Nrc1xufTtcbiIsImltcG9ydCB0eXBlIHsgQ2VsbCB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmltcG9ydCB0eXBlIEVkaXRvciBmcm9tICd0aW55bWNlL2NvcmUvYXBpL0VkaXRvcic7XG5pbXBvcnQgdHlwZSB7IE1lbnUsIFRvb2xiYXIgfSBmcm9tICd0aW55bWNlL2NvcmUvYXBpL3VpL1VpJztcbmltcG9ydCB0eXBlIHsgRWRpdG9yRXZlbnQgfSBmcm9tICd0aW55bWNlL2NvcmUvYXBpL3V0aWwvRXZlbnREaXNwYXRjaGVyJztcblxuY29uc3QgdG9nZ2xlQWN0aXZlU3RhdGUgPSAoZWRpdG9yOiBFZGl0b3IsIGVuYWJsZWRTdGF0ZTogQ2VsbDxib29sZWFuPikgPT4gKGFwaTogVG9vbGJhci5Ub29sYmFyVG9nZ2xlQnV0dG9uSW5zdGFuY2VBcGkgfCBNZW51LlRvZ2dsZU1lbnVJdGVtSW5zdGFuY2VBcGkpID0+IHtcbiAgYXBpLnNldEFjdGl2ZShlbmFibGVkU3RhdGUuZ2V0KCkpO1xuICBjb25zdCBlZGl0b3JFdmVudENhbGxiYWNrID0gKGU6IEVkaXRvckV2ZW50PHsgc3RhdGU6IGJvb2xlYW4gfT4pID0+IGFwaS5zZXRBY3RpdmUoZS5zdGF0ZSk7XG4gIGVkaXRvci5vbignVmlzdWFsQmxvY2tzJywgZWRpdG9yRXZlbnRDYWxsYmFjayk7XG4gIHJldHVybiAoKSA9PiBlZGl0b3Iub2ZmKCdWaXN1YWxCbG9ja3MnLCBlZGl0b3JFdmVudENhbGxiYWNrKTtcbn07XG5cbmNvbnN0IHJlZ2lzdGVyID0gKGVkaXRvcjogRWRpdG9yLCBlbmFibGVkU3RhdGU6IENlbGw8Ym9vbGVhbj4pOiB2b2lkID0+IHtcbiAgY29uc3Qgb25BY3Rpb24gPSAoKSA9PiBlZGl0b3IuZXhlY0NvbW1hbmQoJ21jZVZpc3VhbEJsb2NrcycpO1xuXG4gIGVkaXRvci51aS5yZWdpc3RyeS5hZGRUb2dnbGVCdXR0b24oJ3Zpc3VhbGJsb2NrcycsIHtcbiAgICBpY29uOiAndmlzdWFsYmxvY2tzJyxcbiAgICB0b29sdGlwOiAnU2hvdyBibG9ja3MnLFxuICAgIG9uQWN0aW9uLFxuICAgIG9uU2V0dXA6IHRvZ2dsZUFjdGl2ZVN0YXRlKGVkaXRvciwgZW5hYmxlZFN0YXRlKSxcbiAgICBjb250ZXh0OiAnYW55J1xuICB9KTtcblxuICBlZGl0b3IudWkucmVnaXN0cnkuYWRkVG9nZ2xlTWVudUl0ZW0oJ3Zpc3VhbGJsb2NrcycsIHtcbiAgICB0ZXh0OiAnU2hvdyBibG9ja3MnLFxuICAgIGljb246ICd2aXN1YWxibG9ja3MnLFxuICAgIG9uQWN0aW9uLFxuICAgIG9uU2V0dXA6IHRvZ2dsZUFjdGl2ZVN0YXRlKGVkaXRvciwgZW5hYmxlZFN0YXRlKSxcbiAgICBjb250ZXh0OiAnYW55J1xuICB9KTtcbn07XG5cbmV4cG9ydCB7XG4gIHJlZ2lzdGVyXG59O1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuICAgICAgICBpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG4gICAgICAgIH1cbiAgICB9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ2ID0gKCkgPT4gKFwiMS41LjJcIikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ1aWQgPSBcImJ1bmRsZXI9cnNwYWNrQDEuNS4yXCI7XG4iLCJpbXBvcnQgUGx1Z2luIGZyb20gJy4vUGx1Z2luJztcblxuUGx1Z2luKCk7XG5cbi8qKiAqKioqKlxuICogRE8gTk9UIEVYUE9SVCBBTllUSElOR1xuICpcbiAqIElGIFlPVSBETyBST0xMVVAgV0lMTCBMRUFWRSBBIEdMT0JBTCBPTiBUSEUgUEFHRVxuICoqKioqKiovXG4iXSwibmFtZXMiOlsiQ2VsbCIsImluaXRpYWwiLCJ2YWx1ZSIsImdldCIsInNldCIsInYiLCJQbHVnaW5NYW5hZ2VyIiwiQ29tbWFuZHMiLCJPcHRpb25zIiwiQmluZGluZ3MiLCJCdXR0b25zIiwiZWRpdG9yIiwicGx1Z2luVXJsIiwiZW5hYmxlZFN0YXRlIiwiVmlzdWFsQmxvY2tzIiwicmVnaXN0ZXIiLCJmaXJlVmlzdWFsQmxvY2tzIiwic3RhdGUiLCJvcHRpb24iLCJuYW1lIiwicmVnaXN0ZXJPcHRpb24iLCJpc0VuYWJsZWRCeURlZmF1bHQiLCJzZXR1cCIsImUiLCJFdmVudHMiLCJ0b2dnbGVWaXN1YWxCbG9ja3MiLCJkb20iLCJ0b2dnbGVBY3RpdmVTdGF0ZSIsImFwaSIsImVkaXRvckV2ZW50Q2FsbGJhY2siLCJvbkFjdGlvbiIsIlBsdWdpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLDZEQUFlLE1BQU0sRUFBQztBQUNmOzs7Ozs7Ozs7Ozs7O0FDRUEsTUFBTUEsT0FBTyxDQUFJQztJQUN0QixJQUFJQyxRQUFRRDtJQUVaLE1BQU1FLE1BQU07UUFDVixPQUFPRDtJQUNUO0lBRUEsTUFBTUUsTUFBTSxDQUFDQztRQUNYSCxRQUFRRztJQUNWO0lBRUEsT0FBTztRQUNMRjtRQUNBQztJQUNGO0FBQ0YsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCcUM7QUFFb0I7QUFFaEI7QUFDRjtBQUNHO0FBQ0o7QUFFeEMsNkRBQWdCO0lBQ2RFLDBFQUFpQixDQUFDLGdCQUFnQixDQUFDSyxRQUFRQztRQUN6Q0osa0RBQWdCLENBQUNHO1FBRWpCLE1BQU1FLGVBQWViLHFEQUFJQSxDQUFDO1FBQzFCTyxtREFBaUIsQ0FBQ0ksUUFBUUMsV0FBV0M7UUFDckNILGlEQUFnQixDQUFDQyxRQUFRRTtRQUN6QkosaURBQWMsQ0FBQ0UsUUFBUUMsV0FBV0M7SUFDcEM7QUFDRixDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7O0FDZG1EO0FBRXJELE1BQU1FLFdBQVcsQ0FBQ0osUUFBZ0JDLFdBQW1CQztJQUNuREYsT0FBTyxVQUFVLENBQUMsbUJBQW1CO1FBQ25DRyxrRUFBK0IsQ0FBQ0gsUUFBUUMsV0FBV0M7SUFDckQ7QUFDRjtBQUlFOzs7Ozs7Ozs7Ozs7O0FDWkYsTUFBTUcsbUJBQW1CLENBQUNMLFFBQWdCTTtJQUN4Q04sT0FBTyxRQUFRLENBQUMsZ0JBQWdCO1FBQUVNO0lBQU07QUFDMUM7QUFJRTs7Ozs7Ozs7Ozs7Ozs7QUNMRixNQUFNQyxTQUdGLENBQUNDLE9BQWlCLENBQUNSLFNBQ3JCQSxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUNRO0FBRXJCLE1BQU1KLFdBQVcsQ0FBQ0o7SUFDaEIsTUFBTVMsaUJBQWlCVCxPQUFPLE9BQU8sQ0FBQyxRQUFRO0lBRTlDUyxlQUFlLDhCQUE4QjtRQUMzQyxXQUFXO1FBQ1gsU0FBUztJQUNYO0FBQ0Y7QUFFQSxNQUFNQyxxQkFBcUJILE9BQWdCO0FBS3pDOzs7Ozs7Ozs7Ozs7Ozs7QUNuQndDO0FBRUs7QUFFL0MsTUFBTUksUUFBUSxDQUFDWCxRQUFnQkMsV0FBbUJDO0lBQ2hELGlHQUFpRztJQUNqR0YsT0FBTyxFQUFFLENBQUMsc0NBQXNDLENBQUNZO1FBQy9DLElBQUlWLGFBQWEsR0FBRyxJQUFJO1lBQ3RCRixPQUFPLEdBQUcsQ0FBQyxXQUFXLENBQUNBLE9BQU8sT0FBTyxJQUFJLG9CQUFvQlksRUFBRSxJQUFJLEtBQUs7UUFDMUU7SUFDRjtJQUVBWixPQUFPLEVBQUUsQ0FBQyxRQUFRO1FBQ2hCLElBQUlILDREQUEwQixDQUFDRyxTQUFTO1lBQ3RDRyw2REFBK0IsQ0FBQ0gsUUFBUUMsV0FBV0M7UUFDckQ7SUFDRjtBQUNGO0FBSUU7Ozs7Ozs7Ozs7Ozs7O0FDckJzQztBQUV4QyxNQUFNWSxxQkFBcUIsQ0FBQ2QsUUFBZ0JDLFdBQW1CQztJQUM3RCxNQUFNYSxNQUFNZixPQUFPLEdBQUc7SUFFdEJlLElBQUksV0FBVyxDQUFDZixPQUFPLE9BQU8sSUFBSTtJQUNsQ0UsYUFBYSxHQUFHLENBQUMsQ0FBQ0EsYUFBYSxHQUFHO0lBRWxDVyx5REFBdUIsQ0FBQ2IsUUFBUUUsYUFBYSxHQUFHO0FBQ2xEO0FBSUU7Ozs7Ozs7Ozs7Ozs7QUNYRixNQUFNYyxvQkFBb0IsQ0FBQ2hCLFFBQWdCRSxlQUFnQyxDQUFDZTtRQUMxRUEsSUFBSSxTQUFTLENBQUNmLGFBQWEsR0FBRztRQUM5QixNQUFNZ0Isc0JBQXNCLENBQUNOLElBQXVDSyxJQUFJLFNBQVMsQ0FBQ0wsRUFBRSxLQUFLO1FBQ3pGWixPQUFPLEVBQUUsQ0FBQyxnQkFBZ0JrQjtRQUMxQixPQUFPLElBQU1sQixPQUFPLEdBQUcsQ0FBQyxnQkFBZ0JrQjtJQUMxQztBQUVBLE1BQU1kLFdBQVcsQ0FBQ0osUUFBZ0JFO0lBQ2hDLE1BQU1pQixXQUFXLElBQU1uQixPQUFPLFdBQVcsQ0FBQztJQUUxQ0EsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0I7UUFDakQsTUFBTTtRQUNOLFNBQVM7UUFDVG1CO1FBQ0EsU0FBU0gsa0JBQWtCaEIsUUFBUUU7UUFDbkMsU0FBUztJQUNYO0lBRUFGLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0I7UUFDbkQsTUFBTTtRQUNOLE1BQU07UUFDTm1CO1FBQ0EsU0FBU0gsa0JBQWtCaEIsUUFBUUU7UUFDbkMsU0FBUztJQUNYO0FBQ0Y7QUFJRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkNGO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCx3Q0FBd0M7QUFDMUY7QUFDQTtBQUNBOzs7O0FDTkE7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsaUJBQWlCO0FBQ3hFO0FBQ0EsZ0RBQWdELGFBQWE7QUFDN0Q7Ozs7QUNOQTs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQThCO0FBRTlCa0IsbURBQU1BLElBRU47Ozs7T0FJTyJ9