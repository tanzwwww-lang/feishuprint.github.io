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
"./src/plugins/code/main/ts/Plugin.ts": 
/*!********************************************!*\
  !*** ./src/plugins/code/main/ts/Plugin.ts ***!
  \********************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var tinymce_core_api_PluginManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/PluginManager */ "./lib/globals/tinymce/core/api/PluginManager.js");
/* ESM import */var _api_Commands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/Commands */ "./src/plugins/code/main/ts/api/Commands.ts");
/* ESM import */var _ui_Buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/Buttons */ "./src/plugins/code/main/ts/ui/Buttons.ts");



/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>{
    tinymce_core_api_PluginManager__WEBPACK_IMPORTED_MODULE_0__["default"].add('code', (editor)=>{
        _api_Commands__WEBPACK_IMPORTED_MODULE_1__.register(editor);
        _ui_Buttons__WEBPACK_IMPORTED_MODULE_2__.register(editor);
        return {};
    });
});


}),
"./src/plugins/code/main/ts/api/Commands.ts": 
/*!**************************************************!*\
  !*** ./src/plugins/code/main/ts/api/Commands.ts ***!
  \**************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  register: () => (register)
});
/* ESM import */var _ui_Dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/Dialog */ "./src/plugins/code/main/ts/ui/Dialog.ts");

const register = (editor)=>{
    editor.addCommand('mceCodeEditor', ()=>{
        _ui_Dialog__WEBPACK_IMPORTED_MODULE_0__.open(editor);
    });
};



}),
"./src/plugins/code/main/ts/core/Content.ts": 
/*!**************************************************!*\
  !*** ./src/plugins/code/main/ts/core/Content.ts ***!
  \**************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getContent: () => (getContent),
  setContent: () => (setContent)
});
const setContent = (editor, html)=>{
    // We get a lovely "Wrong document" error in IE 11 if we
    // don't move the focus to the editor before creating an undo
    // transaction since it tries to make a bookmark for the current selection
    editor.focus();
    editor.undoManager.transact(()=>{
        editor.setContent(html);
    });
    editor.selection.setCursorLocation();
    editor.nodeChanged();
};
const getContent = (editor)=>{
    return editor.getContent({
        source_view: true
    });
};



}),
"./src/plugins/code/main/ts/ui/Buttons.ts": 
/*!************************************************!*\
  !*** ./src/plugins/code/main/ts/ui/Buttons.ts ***!
  \************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  register: () => (register)
});
const register = (editor)=>{
    const onAction = ()=>editor.execCommand('mceCodeEditor');
    editor.ui.registry.addButton('code', {
        icon: 'sourcecode',
        tooltip: 'Source code',
        onAction
    });
    editor.ui.registry.addMenuItem('code', {
        icon: 'sourcecode',
        text: 'Source code',
        onAction
    });
};



}),
"./src/plugins/code/main/ts/ui/Dialog.ts": 
/*!***********************************************!*\
  !*** ./src/plugins/code/main/ts/ui/Dialog.ts ***!
  \***********************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  open: () => (open)
});
/* ESM import */var _core_Content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Content */ "./src/plugins/code/main/ts/core/Content.ts");

const open = (editor)=>{
    const editorContent = _core_Content__WEBPACK_IMPORTED_MODULE_0__.getContent(editor);
    editor.windowManager.open({
        title: 'Source Code',
        size: 'large',
        body: {
            type: 'panel',
            items: [
                {
                    type: 'textarea',
                    name: 'code',
                    spellcheck: false
                }
            ]
        },
        buttons: [
            {
                type: 'cancel',
                name: 'cancel',
                text: 'Cancel'
            },
            {
                type: 'submit',
                name: 'save',
                text: 'Save',
                primary: true
            }
        ],
        initialData: {
            code: editorContent
        },
        onSubmit: (api)=>{
            _core_Content__WEBPACK_IMPORTED_MODULE_0__.setContent(editor, api.getData().code);
            api.close();
        }
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

/*!******************************************!*\
  !*** ./src/plugins/code/main/ts/Main.ts ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _Plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Plugin */ "./src/plugins/code/main/ts/Plugin.ts");

(0,_Plugin__WEBPACK_IMPORTED_MODULE_0__["default"])(); /** *****
 * DO NOT EXPORT ANYTHING
 *
 * IF YOU DO ROLLUP WILL LEAVE A GLOBAL ON THE PAGE
 *******/ 

})();

})()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdGlueW1jZS9wbHVnaW5zL2NvZGUvcGx1Z2luLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGlueW1jZS8uL2xpYi9nbG9iYWxzL3RpbnltY2UvY29yZS9hcGkvUGx1Z2luTWFuYWdlci5qcyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvY29kZS9tYWluL3RzL1BsdWdpbi50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvY29kZS9tYWluL3RzL2FwaS9Db21tYW5kcy50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvY29kZS9tYWluL3RzL2NvcmUvQ29udGVudC50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvY29kZS9tYWluL3RzL3VpL0J1dHRvbnMudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL2NvZGUvbWFpbi90cy91aS9EaWFsb2cudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lX3Byb3BlcnR5X2dldHRlcnMiLCJ3ZWJwYWNrOi8vdGlueW1jZS93ZWJwYWNrL3J1bnRpbWUvaGFzX293bl9wcm9wZXJ0eSIsIndlYnBhY2s6Ly90aW55bWNlL3dlYnBhY2svcnVudGltZS9tYWtlX25hbWVzcGFjZV9vYmplY3QiLCJ3ZWJwYWNrOi8vdGlueW1jZS93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3ZlcnNpb24iLCJ3ZWJwYWNrOi8vdGlueW1jZS93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3VuaXF1ZV9pZCIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvY29kZS9tYWluL3RzL01haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGdsb2JhbCA9IHRpbnltY2UudXRpbC5Ub29scy5yZXNvbHZlKCd0aW55bWNlLlBsdWdpbk1hbmFnZXInKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2xvYmFsO1xuZXhwb3J0IHZhciBQbHVnaW5NYW5hZ2VyID0gZ2xvYmFsO1xuIiwiaW1wb3J0IFBsdWdpbk1hbmFnZXIgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9QbHVnaW5NYW5hZ2VyJztcblxuaW1wb3J0ICogYXMgQ29tbWFuZHMgZnJvbSAnLi9hcGkvQ29tbWFuZHMnO1xuaW1wb3J0ICogYXMgQnV0dG9ucyBmcm9tICcuL3VpL0J1dHRvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCAoKTogdm9pZCA9PiB7XG4gIFBsdWdpbk1hbmFnZXIuYWRkKCdjb2RlJywgKGVkaXRvcikgPT4ge1xuICAgIENvbW1hbmRzLnJlZ2lzdGVyKGVkaXRvcik7XG4gICAgQnV0dG9ucy5yZWdpc3RlcihlZGl0b3IpO1xuXG4gICAgcmV0dXJuIHt9O1xuICB9KTtcbn07XG4iLCJpbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuXG5pbXBvcnQgKiBhcyBEaWFsb2cgZnJvbSAnLi4vdWkvRGlhbG9nJztcblxuY29uc3QgcmVnaXN0ZXIgPSAoZWRpdG9yOiBFZGl0b3IpOiB2b2lkID0+IHtcbiAgZWRpdG9yLmFkZENvbW1hbmQoJ21jZUNvZGVFZGl0b3InLCAoKSA9PiB7XG4gICAgRGlhbG9nLm9wZW4oZWRpdG9yKTtcbiAgfSk7XG59O1xuXG5leHBvcnQge1xuICByZWdpc3RlclxufTtcbiIsImltcG9ydCB0eXBlIEVkaXRvciBmcm9tICd0aW55bWNlL2NvcmUvYXBpL0VkaXRvcic7XG5cbmNvbnN0IHNldENvbnRlbnQgPSAoZWRpdG9yOiBFZGl0b3IsIGh0bWw6IHN0cmluZyk6IHZvaWQgPT4ge1xuICAvLyBXZSBnZXQgYSBsb3ZlbHkgXCJXcm9uZyBkb2N1bWVudFwiIGVycm9yIGluIElFIDExIGlmIHdlXG4gIC8vIGRvbid0IG1vdmUgdGhlIGZvY3VzIHRvIHRoZSBlZGl0b3IgYmVmb3JlIGNyZWF0aW5nIGFuIHVuZG9cbiAgLy8gdHJhbnNhY3Rpb24gc2luY2UgaXQgdHJpZXMgdG8gbWFrZSBhIGJvb2ttYXJrIGZvciB0aGUgY3VycmVudCBzZWxlY3Rpb25cbiAgZWRpdG9yLmZvY3VzKCk7XG5cbiAgZWRpdG9yLnVuZG9NYW5hZ2VyLnRyYW5zYWN0KCgpID0+IHtcbiAgICBlZGl0b3Iuc2V0Q29udGVudChodG1sKTtcbiAgfSk7XG5cbiAgZWRpdG9yLnNlbGVjdGlvbi5zZXRDdXJzb3JMb2NhdGlvbigpO1xuICBlZGl0b3Iubm9kZUNoYW5nZWQoKTtcbn07XG5cbmNvbnN0IGdldENvbnRlbnQgPSAoZWRpdG9yOiBFZGl0b3IpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gZWRpdG9yLmdldENvbnRlbnQoeyBzb3VyY2VfdmlldzogdHJ1ZSB9KTtcbn07XG5cbmV4cG9ydCB7XG4gIHNldENvbnRlbnQsXG4gIGdldENvbnRlbnRcbn07XG4iLCJpbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuXG5jb25zdCByZWdpc3RlciA9IChlZGl0b3I6IEVkaXRvcik6IHZvaWQgPT4ge1xuXG4gIGNvbnN0IG9uQWN0aW9uID0gKCkgPT4gZWRpdG9yLmV4ZWNDb21tYW5kKCdtY2VDb2RlRWRpdG9yJyk7XG5cbiAgZWRpdG9yLnVpLnJlZ2lzdHJ5LmFkZEJ1dHRvbignY29kZScsIHtcbiAgICBpY29uOiAnc291cmNlY29kZScsXG4gICAgdG9vbHRpcDogJ1NvdXJjZSBjb2RlJyxcbiAgICBvbkFjdGlvblxuICB9KTtcblxuICBlZGl0b3IudWkucmVnaXN0cnkuYWRkTWVudUl0ZW0oJ2NvZGUnLCB7XG4gICAgaWNvbjogJ3NvdXJjZWNvZGUnLFxuICAgIHRleHQ6ICdTb3VyY2UgY29kZScsXG4gICAgb25BY3Rpb25cbiAgfSk7XG59O1xuXG5leHBvcnQge1xuICByZWdpc3RlclxufTtcbiIsImltcG9ydCB0eXBlIEVkaXRvciBmcm9tICd0aW55bWNlL2NvcmUvYXBpL0VkaXRvcic7XG5cbmltcG9ydCAqIGFzIENvbnRlbnQgZnJvbSAnLi4vY29yZS9Db250ZW50JztcblxuY29uc3Qgb3BlbiA9IChlZGl0b3I6IEVkaXRvcik6IHZvaWQgPT4ge1xuICBjb25zdCBlZGl0b3JDb250ZW50ID0gQ29udGVudC5nZXRDb250ZW50KGVkaXRvcik7XG5cbiAgZWRpdG9yLndpbmRvd01hbmFnZXIub3Blbih7XG4gICAgdGl0bGU6ICdTb3VyY2UgQ29kZScsXG4gICAgc2l6ZTogJ2xhcmdlJyxcbiAgICBib2R5OiB7XG4gICAgICB0eXBlOiAncGFuZWwnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICd0ZXh0YXJlYScsXG4gICAgICAgICAgbmFtZTogJ2NvZGUnLFxuICAgICAgICAgIHNwZWxsY2hlY2s6IGZhbHNlLFxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICBidXR0b25zOiBbXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdjYW5jZWwnLFxuICAgICAgICBuYW1lOiAnY2FuY2VsJyxcbiAgICAgICAgdGV4dDogJ0NhbmNlbCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdzdWJtaXQnLFxuICAgICAgICBuYW1lOiAnc2F2ZScsXG4gICAgICAgIHRleHQ6ICdTYXZlJyxcbiAgICAgICAgcHJpbWFyeTogdHJ1ZVxuICAgICAgfVxuICAgIF0sXG4gICAgaW5pdGlhbERhdGE6IHtcbiAgICAgIGNvZGU6IGVkaXRvckNvbnRlbnRcbiAgICB9LFxuICAgIG9uU3VibWl0OiAoYXBpKSA9PiB7XG4gICAgICBDb250ZW50LnNldENvbnRlbnQoZWRpdG9yLCBhcGkuZ2V0RGF0YSgpLmNvZGUpO1xuICAgICAgYXBpLmNsb3NlKCk7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCB7XG4gIG9wZW5cbn07XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG4gICAgICAgIGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcbiAgICAgICAgfVxuICAgIH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucnYgPSAoKSA9PiAoXCIxLjUuMlwiKSIsIl9fd2VicGFja19yZXF1aXJlX18ucnVpZCA9IFwiYnVuZGxlcj1yc3BhY2tAMS41LjJcIjtcbiIsImltcG9ydCBQbHVnaW4gZnJvbSAnLi9QbHVnaW4nO1xuXG5QbHVnaW4oKTtcblxuLyoqICoqKioqXG4gKiBETyBOT1QgRVhQT1JUIEFOWVRISU5HXG4gKlxuICogSUYgWU9VIERPIFJPTExVUCBXSUxMIExFQVZFIEEgR0xPQkFMIE9OIFRIRSBQQUdFXG4gKioqKioqKi9cbiJdLCJuYW1lcyI6WyJQbHVnaW5NYW5hZ2VyIiwiQ29tbWFuZHMiLCJCdXR0b25zIiwiZWRpdG9yIiwiRGlhbG9nIiwicmVnaXN0ZXIiLCJzZXRDb250ZW50IiwiaHRtbCIsImdldENvbnRlbnQi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