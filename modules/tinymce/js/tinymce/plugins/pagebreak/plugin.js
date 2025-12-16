(() => { // webpackBootstrap
"use strict";
var __webpack_modules__ = ({
"./lib/globals/tinymce/core/api/Env.js": 
/*!*********************************************!*\
  !*** ./lib/globals/tinymce/core/api/Env.js ***!
  \*********************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Env: () => (Env),
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
var global = tinymce.util.Tools.resolve('tinymce.Env');

/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (global);
var Env = global;


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
"./src/plugins/pagebreak/main/ts/Plugin.ts": 
/*!*************************************************!*\
  !*** ./src/plugins/pagebreak/main/ts/Plugin.ts ***!
  \*************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var tinymce_core_api_PluginManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/PluginManager */ "./lib/globals/tinymce/core/api/PluginManager.js");
/* ESM import */var _api_Commands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/Commands */ "./src/plugins/pagebreak/main/ts/api/Commands.ts");
/* ESM import */var _api_Options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/Options */ "./src/plugins/pagebreak/main/ts/api/Options.ts");
/* ESM import */var _core_FilterContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/FilterContent */ "./src/plugins/pagebreak/main/ts/core/FilterContent.ts");
/* ESM import */var _core_ResolveName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/ResolveName */ "./src/plugins/pagebreak/main/ts/core/ResolveName.ts");
/* ESM import */var _ui_Buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/Buttons */ "./src/plugins/pagebreak/main/ts/ui/Buttons.ts");






/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>{
    tinymce_core_api_PluginManager__WEBPACK_IMPORTED_MODULE_0__["default"].add('pagebreak', (editor)=>{
        _api_Options__WEBPACK_IMPORTED_MODULE_2__.register(editor);
        _api_Commands__WEBPACK_IMPORTED_MODULE_1__.register(editor);
        _ui_Buttons__WEBPACK_IMPORTED_MODULE_5__.register(editor);
        _core_FilterContent__WEBPACK_IMPORTED_MODULE_3__.setup(editor);
        _core_ResolveName__WEBPACK_IMPORTED_MODULE_4__.setup(editor);
    });
});


}),
"./src/plugins/pagebreak/main/ts/api/Commands.ts": 
/*!*******************************************************!*\
  !*** ./src/plugins/pagebreak/main/ts/api/Commands.ts ***!
  \*******************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  register: () => (register)
});
/* ESM import */var _core_FilterContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/FilterContent */ "./src/plugins/pagebreak/main/ts/core/FilterContent.ts");
/* ESM import */var _Options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Options */ "./src/plugins/pagebreak/main/ts/api/Options.ts");


const register = (editor)=>{
    editor.addCommand('mcePageBreak', ()=>{
        editor.insertContent(_core_FilterContent__WEBPACK_IMPORTED_MODULE_0__.getPlaceholderHtml(_Options__WEBPACK_IMPORTED_MODULE_1__.shouldSplitBlock(editor)));
    });
};



}),
"./src/plugins/pagebreak/main/ts/api/Options.ts": 
/*!******************************************************!*\
  !*** ./src/plugins/pagebreak/main/ts/api/Options.ts ***!
  \******************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getSeparatorHtml: () => (getSeparatorHtml),
  register: () => (register),
  shouldSplitBlock: () => (shouldSplitBlock)
});
const option = (name)=>(editor)=>editor.options.get(name);
const register = (editor)=>{
    const registerOption = editor.options.register;
    registerOption('pagebreak_separator', {
        processor: 'string',
        default: '<!-- pagebreak -->'
    });
    registerOption('pagebreak_split_block', {
        processor: 'boolean',
        default: false
    });
};
const getSeparatorHtml = option('pagebreak_separator');
const shouldSplitBlock = option('pagebreak_split_block');



}),
"./src/plugins/pagebreak/main/ts/core/FilterContent.ts": 
/*!*************************************************************!*\
  !*** ./src/plugins/pagebreak/main/ts/core/FilterContent.ts ***!
  \*************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getPlaceholderHtml: () => (getPlaceholderHtml),
  pageBreakClass: () => (pageBreakClass),
  setup: () => (setup)
});
/* ESM import */var tinymce_core_api_Env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/Env */ "./lib/globals/tinymce/core/api/Env.js");
/* ESM import */var _api_Options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/Options */ "./src/plugins/pagebreak/main/ts/api/Options.ts");


const pageBreakClass = 'mce-pagebreak';
const getPlaceholderHtml = (shouldSplitBlock)=>{
    const html = `<img src="${tinymce_core_api_Env__WEBPACK_IMPORTED_MODULE_0__["default"].transparentSrc}" class="${pageBreakClass}" data-mce-resize="false" data-mce-placeholder />`;
    return shouldSplitBlock ? `<p>${html}</p>` : html;
};
const setup = (editor)=>{
    const separatorHtml = _api_Options__WEBPACK_IMPORTED_MODULE_1__.getSeparatorHtml(editor);
    const shouldSplitBlock = ()=>_api_Options__WEBPACK_IMPORTED_MODULE_1__.shouldSplitBlock(editor);
    const pageBreakSeparatorRegExp = new RegExp(separatorHtml.replace(/[\?\.\*\[\]\(\)\{\}\+\^\$\:]/g, (a)=>{
        return '\\' + a;
    }), 'gi');
    editor.on('BeforeSetContent', (e)=>{
        e.content = e.content.replace(pageBreakSeparatorRegExp, getPlaceholderHtml(shouldSplitBlock()));
    });
    editor.on('PreInit', ()=>{
        editor.serializer.addNodeFilter('img', (nodes)=>{
            let i = nodes.length, node, className;
            while(i--){
                node = nodes[i];
                className = node.attr('class');
                if (className && className.indexOf(pageBreakClass) !== -1) {
                    // Replace parent block node if pagebreak_split_block is enabled
                    const parentNode = node.parent;
                    if (parentNode && editor.schema.getBlockElements()[parentNode.name] && shouldSplitBlock()) {
                        parentNode.type = 3;
                        parentNode.value = separatorHtml;
                        parentNode.raw = true;
                        node.remove();
                        continue;
                    }
                    node.type = 3;
                    node.value = separatorHtml;
                    node.raw = true;
                }
            }
        });
    });
};



}),
"./src/plugins/pagebreak/main/ts/core/ResolveName.ts": 
/*!***********************************************************!*\
  !*** ./src/plugins/pagebreak/main/ts/core/ResolveName.ts ***!
  \***********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  setup: () => (setup)
});
/* ESM import */var _FilterContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilterContent */ "./src/plugins/pagebreak/main/ts/core/FilterContent.ts");

const setup = (editor)=>{
    editor.on('ResolveName', (e)=>{
        if (e.target.nodeName === 'IMG' && editor.dom.hasClass(e.target, _FilterContent__WEBPACK_IMPORTED_MODULE_0__.pageBreakClass)) {
            e.name = 'pagebreak';
        }
    });
};



}),
"./src/plugins/pagebreak/main/ts/ui/Buttons.ts": 
/*!*****************************************************!*\
  !*** ./src/plugins/pagebreak/main/ts/ui/Buttons.ts ***!
  \*****************************************************/
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
    const onAction = ()=>editor.execCommand('mcePageBreak');
    editor.ui.registry.addButton('pagebreak', {
        icon: 'page-break',
        tooltip: 'Page break',
        onAction,
        onSetup: onSetupEditable(editor)
    });
    editor.ui.registry.addMenuItem('pagebreak', {
        text: 'Page break',
        icon: 'page-break',
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

/*!***********************************************!*\
  !*** ./src/plugins/pagebreak/main/ts/Main.ts ***!
  \***********************************************/
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _Plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Plugin */ "./src/plugins/pagebreak/main/ts/Plugin.ts");

(0,_Plugin__WEBPACK_IMPORTED_MODULE_0__["default"])(); /** *****
 * DO NOT EXPORT ANYTHING
 *
 * IF YOU DO ROLLUP WILL LEAVE A GLOBAL ON THE PAGE
 *******/ 

})();

})()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdGlueW1jZS9wbHVnaW5zL3BhZ2VicmVhay9wbHVnaW4uanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aW55bWNlLy4vbGliL2dsb2JhbHMvdGlueW1jZS9jb3JlL2FwaS9FbnYuanMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL2xpYi9nbG9iYWxzL3RpbnltY2UvY29yZS9hcGkvUGx1Z2luTWFuYWdlci5qcyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvcGFnZWJyZWFrL21haW4vdHMvUGx1Z2luLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9wYWdlYnJlYWsvbWFpbi90cy9hcGkvQ29tbWFuZHMudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL3BhZ2VicmVhay9tYWluL3RzL2FwaS9PcHRpb25zLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9wYWdlYnJlYWsvbWFpbi90cy9jb3JlL0ZpbHRlckNvbnRlbnQudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL3BhZ2VicmVhay9tYWluL3RzL2NvcmUvUmVzb2x2ZU5hbWUudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL3BhZ2VicmVhay9tYWluL3RzL3VpL0J1dHRvbnMudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lX3Byb3BlcnR5X2dldHRlcnMiLCJ3ZWJwYWNrOi8vdGlueW1jZS93ZWJwYWNrL3J1bnRpbWUvaGFzX293bl9wcm9wZXJ0eSIsIndlYnBhY2s6Ly90aW55bWNlL3dlYnBhY2svcnVudGltZS9tYWtlX25hbWVzcGFjZV9vYmplY3QiLCJ3ZWJwYWNrOi8vdGlueW1jZS93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3ZlcnNpb24iLCJ3ZWJwYWNrOi8vdGlueW1jZS93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3VuaXF1ZV9pZCIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvcGFnZWJyZWFrL21haW4vdHMvTWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZ2xvYmFsID0gdGlueW1jZS51dGlsLlRvb2xzLnJlc29sdmUoJ3RpbnltY2UuRW52Jyk7XG5cbmV4cG9ydCBkZWZhdWx0IGdsb2JhbDtcbmV4cG9ydCB2YXIgRW52ID0gZ2xvYmFsO1xuIiwidmFyIGdsb2JhbCA9IHRpbnltY2UudXRpbC5Ub29scy5yZXNvbHZlKCd0aW55bWNlLlBsdWdpbk1hbmFnZXInKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2xvYmFsO1xuZXhwb3J0IHZhciBQbHVnaW5NYW5hZ2VyID0gZ2xvYmFsO1xuIiwiaW1wb3J0IFBsdWdpbk1hbmFnZXIgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9QbHVnaW5NYW5hZ2VyJztcblxuaW1wb3J0ICogYXMgQ29tbWFuZHMgZnJvbSAnLi9hcGkvQ29tbWFuZHMnO1xuaW1wb3J0ICogYXMgT3B0aW9ucyBmcm9tICcuL2FwaS9PcHRpb25zJztcbmltcG9ydCAqIGFzIEZpbHRlckNvbnRlbnQgZnJvbSAnLi9jb3JlL0ZpbHRlckNvbnRlbnQnO1xuaW1wb3J0ICogYXMgUmVzb2x2ZU5hbWUgZnJvbSAnLi9jb3JlL1Jlc29sdmVOYW1lJztcbmltcG9ydCAqIGFzIEJ1dHRvbnMgZnJvbSAnLi91aS9CdXR0b25zJztcblxuZXhwb3J0IGRlZmF1bHQgKCk6IHZvaWQgPT4ge1xuICBQbHVnaW5NYW5hZ2VyLmFkZCgncGFnZWJyZWFrJywgKGVkaXRvcikgPT4ge1xuICAgIE9wdGlvbnMucmVnaXN0ZXIoZWRpdG9yKTtcbiAgICBDb21tYW5kcy5yZWdpc3RlcihlZGl0b3IpO1xuICAgIEJ1dHRvbnMucmVnaXN0ZXIoZWRpdG9yKTtcbiAgICBGaWx0ZXJDb250ZW50LnNldHVwKGVkaXRvcik7XG4gICAgUmVzb2x2ZU5hbWUuc2V0dXAoZWRpdG9yKTtcbiAgfSk7XG59O1xuIiwiaW1wb3J0IHR5cGUgRWRpdG9yIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvRWRpdG9yJztcblxuaW1wb3J0ICogYXMgRmlsdGVyQ29udGVudCBmcm9tICcuLi9jb3JlL0ZpbHRlckNvbnRlbnQnO1xuXG5pbXBvcnQgKiBhcyBPcHRpb25zIGZyb20gJy4vT3B0aW9ucyc7XG5cbmNvbnN0IHJlZ2lzdGVyID0gKGVkaXRvcjogRWRpdG9yKTogdm9pZCA9PiB7XG4gIGVkaXRvci5hZGRDb21tYW5kKCdtY2VQYWdlQnJlYWsnLCAoKSA9PiB7XG4gICAgZWRpdG9yLmluc2VydENvbnRlbnQoRmlsdGVyQ29udGVudC5nZXRQbGFjZWhvbGRlckh0bWwoT3B0aW9ucy5zaG91bGRTcGxpdEJsb2NrKGVkaXRvcikpKTtcbiAgfSk7XG59O1xuXG5leHBvcnQge1xuICByZWdpc3RlclxufTtcbiIsImltcG9ydCB0eXBlIEVkaXRvciBmcm9tICd0aW55bWNlL2NvcmUvYXBpL0VkaXRvcic7XG5pbXBvcnQgdHlwZSB7IEVkaXRvck9wdGlvbnMgfSBmcm9tICd0aW55bWNlL2NvcmUvYXBpL09wdGlvblR5cGVzJztcblxuY29uc3Qgb3B0aW9uOiB7XG4gIDxLIGV4dGVuZHMga2V5b2YgRWRpdG9yT3B0aW9ucz4obmFtZTogSyk6IChlZGl0b3I6IEVkaXRvcikgPT4gRWRpdG9yT3B0aW9uc1tLXTtcbiAgPFQ+KG5hbWU6IHN0cmluZyk6IChlZGl0b3I6IEVkaXRvcikgPT4gVDtcbn0gPSAobmFtZTogc3RyaW5nKSA9PiAoZWRpdG9yOiBFZGl0b3IpID0+XG4gIGVkaXRvci5vcHRpb25zLmdldChuYW1lKTtcblxuY29uc3QgcmVnaXN0ZXIgPSAoZWRpdG9yOiBFZGl0b3IpOiB2b2lkID0+IHtcbiAgY29uc3QgcmVnaXN0ZXJPcHRpb24gPSBlZGl0b3Iub3B0aW9ucy5yZWdpc3RlcjtcblxuICByZWdpc3Rlck9wdGlvbigncGFnZWJyZWFrX3NlcGFyYXRvcicsIHtcbiAgICBwcm9jZXNzb3I6ICdzdHJpbmcnLFxuICAgIGRlZmF1bHQ6ICc8IS0tIHBhZ2VicmVhayAtLT4nXG4gIH0pO1xuXG4gIHJlZ2lzdGVyT3B0aW9uKCdwYWdlYnJlYWtfc3BsaXRfYmxvY2snLCB7XG4gICAgcHJvY2Vzc29yOiAnYm9vbGVhbicsXG4gICAgZGVmYXVsdDogZmFsc2VcbiAgfSk7XG59O1xuXG5jb25zdCBnZXRTZXBhcmF0b3JIdG1sID0gb3B0aW9uPHN0cmluZz4oJ3BhZ2VicmVha19zZXBhcmF0b3InKTtcbmNvbnN0IHNob3VsZFNwbGl0QmxvY2sgPSBvcHRpb248Ym9vbGVhbj4oJ3BhZ2VicmVha19zcGxpdF9ibG9jaycpO1xuXG5leHBvcnQge1xuICByZWdpc3RlcixcbiAgZ2V0U2VwYXJhdG9ySHRtbCxcbiAgc2hvdWxkU3BsaXRCbG9ja1xufTtcbiIsImltcG9ydCB0eXBlIEVkaXRvciBmcm9tICd0aW55bWNlL2NvcmUvYXBpL0VkaXRvcic7XG5pbXBvcnQgRW52IGZyb20gJ3RpbnltY2UvY29yZS9hcGkvRW52JztcblxuaW1wb3J0ICogYXMgT3B0aW9ucyBmcm9tICcuLi9hcGkvT3B0aW9ucyc7XG5cbmNvbnN0IHBhZ2VCcmVha0NsYXNzID0gJ21jZS1wYWdlYnJlYWsnO1xuXG5jb25zdCBnZXRQbGFjZWhvbGRlckh0bWwgPSAoc2hvdWxkU3BsaXRCbG9jazogYm9vbGVhbik6IHN0cmluZyA9PiB7XG4gIGNvbnN0IGh0bWwgPSBgPGltZyBzcmM9XCIke0Vudi50cmFuc3BhcmVudFNyY31cIiBjbGFzcz1cIiR7cGFnZUJyZWFrQ2xhc3N9XCIgZGF0YS1tY2UtcmVzaXplPVwiZmFsc2VcIiBkYXRhLW1jZS1wbGFjZWhvbGRlciAvPmA7XG4gIHJldHVybiBzaG91bGRTcGxpdEJsb2NrID8gYDxwPiR7aHRtbH08L3A+YCA6IGh0bWw7XG59O1xuXG5jb25zdCBzZXR1cCA9IChlZGl0b3I6IEVkaXRvcik6IHZvaWQgPT4ge1xuICBjb25zdCBzZXBhcmF0b3JIdG1sOiBzdHJpbmcgPSBPcHRpb25zLmdldFNlcGFyYXRvckh0bWwoZWRpdG9yKTtcbiAgY29uc3Qgc2hvdWxkU3BsaXRCbG9jayA9ICgpID0+IE9wdGlvbnMuc2hvdWxkU3BsaXRCbG9jayhlZGl0b3IpO1xuXG4gIGNvbnN0IHBhZ2VCcmVha1NlcGFyYXRvclJlZ0V4cCA9IG5ldyBSZWdFeHAoc2VwYXJhdG9ySHRtbC5yZXBsYWNlKC9bXFw/XFwuXFwqXFxbXFxdXFwoXFwpXFx7XFx9XFwrXFxeXFwkXFw6XS9nLCAoYSkgPT4ge1xuICAgIHJldHVybiAnXFxcXCcgKyBhO1xuICB9KSwgJ2dpJyk7XG5cbiAgZWRpdG9yLm9uKCdCZWZvcmVTZXRDb250ZW50JywgKGUpID0+IHtcbiAgICBlLmNvbnRlbnQgPSBlLmNvbnRlbnQucmVwbGFjZShwYWdlQnJlYWtTZXBhcmF0b3JSZWdFeHAsIGdldFBsYWNlaG9sZGVySHRtbChzaG91bGRTcGxpdEJsb2NrKCkpKTtcbiAgfSk7XG5cbiAgZWRpdG9yLm9uKCdQcmVJbml0JywgKCkgPT4ge1xuICAgIGVkaXRvci5zZXJpYWxpemVyLmFkZE5vZGVGaWx0ZXIoJ2ltZycsIChub2RlcykgPT4ge1xuICAgICAgbGV0IGkgPSBub2Rlcy5sZW5ndGgsIG5vZGUsIGNsYXNzTmFtZTtcblxuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICBub2RlID0gbm9kZXNbaV07XG4gICAgICAgIGNsYXNzTmFtZSA9IG5vZGUuYXR0cignY2xhc3MnKTtcbiAgICAgICAgaWYgKGNsYXNzTmFtZSAmJiBjbGFzc05hbWUuaW5kZXhPZihwYWdlQnJlYWtDbGFzcykgIT09IC0xKSB7XG4gICAgICAgICAgLy8gUmVwbGFjZSBwYXJlbnQgYmxvY2sgbm9kZSBpZiBwYWdlYnJlYWtfc3BsaXRfYmxvY2sgaXMgZW5hYmxlZFxuICAgICAgICAgIGNvbnN0IHBhcmVudE5vZGUgPSBub2RlLnBhcmVudDtcbiAgICAgICAgICBpZiAocGFyZW50Tm9kZSAmJiBlZGl0b3Iuc2NoZW1hLmdldEJsb2NrRWxlbWVudHMoKVtwYXJlbnROb2RlLm5hbWVdICYmIHNob3VsZFNwbGl0QmxvY2soKSkge1xuICAgICAgICAgICAgcGFyZW50Tm9kZS50eXBlID0gMztcbiAgICAgICAgICAgIHBhcmVudE5vZGUudmFsdWUgPSBzZXBhcmF0b3JIdG1sO1xuICAgICAgICAgICAgcGFyZW50Tm9kZS5yYXcgPSB0cnVlO1xuICAgICAgICAgICAgbm9kZS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG5vZGUudHlwZSA9IDM7XG4gICAgICAgICAgbm9kZS52YWx1ZSA9IHNlcGFyYXRvckh0bWw7XG4gICAgICAgICAgbm9kZS5yYXcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHtcbiAgcGFnZUJyZWFrQ2xhc3MsXG4gIGdldFBsYWNlaG9sZGVySHRtbCxcbiAgc2V0dXBcbn07XG4iLCJpbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuXG5pbXBvcnQgKiBhcyBGaWx0ZXJDb250ZW50IGZyb20gJy4vRmlsdGVyQ29udGVudCc7XG5cbmNvbnN0IHNldHVwID0gKGVkaXRvcjogRWRpdG9yKTogdm9pZCA9PiB7XG4gIGVkaXRvci5vbignUmVzb2x2ZU5hbWUnLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5ub2RlTmFtZSA9PT0gJ0lNRycgJiYgZWRpdG9yLmRvbS5oYXNDbGFzcyhlLnRhcmdldCwgRmlsdGVyQ29udGVudC5wYWdlQnJlYWtDbGFzcykpIHtcbiAgICAgIGUubmFtZSA9ICdwYWdlYnJlYWsnO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQge1xuICBzZXR1cFxufTtcbiIsImltcG9ydCB0eXBlIEVkaXRvciBmcm9tICd0aW55bWNlL2NvcmUvYXBpL0VkaXRvcic7XG5pbXBvcnQgdHlwZSB7IE1lbnUsIFRvb2xiYXIgfSBmcm9tICd0aW55bWNlL2NvcmUvYXBpL3VpL1VpJztcblxuY29uc3Qgb25TZXR1cEVkaXRhYmxlID0gKGVkaXRvcjogRWRpdG9yKSA9PiAoYXBpOiBUb29sYmFyLlRvb2xiYXJCdXR0b25JbnN0YW5jZUFwaSB8IE1lbnUuTWVudUl0ZW1JbnN0YW5jZUFwaSk6IFZvaWRGdW5jdGlvbiA9PiB7XG4gIGNvbnN0IG5vZGVDaGFuZ2VkID0gKCkgPT4ge1xuICAgIGFwaS5zZXRFbmFibGVkKGVkaXRvci5zZWxlY3Rpb24uaXNFZGl0YWJsZSgpKTtcbiAgfTtcblxuICBlZGl0b3Iub24oJ05vZGVDaGFuZ2UnLCBub2RlQ2hhbmdlZCk7XG4gIG5vZGVDaGFuZ2VkKCk7XG5cbiAgcmV0dXJuICgpID0+IHtcbiAgICBlZGl0b3Iub2ZmKCdOb2RlQ2hhbmdlJywgbm9kZUNoYW5nZWQpO1xuICB9O1xufTtcblxuY29uc3QgcmVnaXN0ZXIgPSAoZWRpdG9yOiBFZGl0b3IpOiB2b2lkID0+IHtcbiAgY29uc3Qgb25BY3Rpb24gPSAoKSA9PiBlZGl0b3IuZXhlY0NvbW1hbmQoJ21jZVBhZ2VCcmVhaycpO1xuXG4gIGVkaXRvci51aS5yZWdpc3RyeS5hZGRCdXR0b24oJ3BhZ2VicmVhaycsIHtcbiAgICBpY29uOiAncGFnZS1icmVhaycsXG4gICAgdG9vbHRpcDogJ1BhZ2UgYnJlYWsnLFxuICAgIG9uQWN0aW9uLFxuICAgIG9uU2V0dXA6IG9uU2V0dXBFZGl0YWJsZShlZGl0b3IpXG4gIH0pO1xuXG4gIGVkaXRvci51aS5yZWdpc3RyeS5hZGRNZW51SXRlbSgncGFnZWJyZWFrJywge1xuICAgIHRleHQ6ICdQYWdlIGJyZWFrJyxcbiAgICBpY29uOiAncGFnZS1icmVhaycsXG4gICAgb25BY3Rpb24sXG4gICAgb25TZXR1cDogb25TZXR1cEVkaXRhYmxlKGVkaXRvcilcbiAgfSk7XG59O1xuXG5leHBvcnQge1xuICByZWdpc3RlclxufTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcbiAgICAgICAgaWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuICAgICAgICB9XG4gICAgfVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydiA9ICgpID0+IChcIjEuNS4yXCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydWlkID0gXCJidW5kbGVyPXJzcGFja0AxLjUuMlwiO1xuIiwiaW1wb3J0IFBsdWdpbiBmcm9tICcuL1BsdWdpbic7XG5cblBsdWdpbigpO1xuXG4vKiogKioqKipcbiAqIERPIE5PVCBFWFBPUlQgQU5ZVEhJTkdcbiAqXG4gKiBJRiBZT1UgRE8gUk9MTFVQIFdJTEwgTEVBVkUgQSBHTE9CQUwgT04gVEhFIFBBR0VcbiAqKioqKioqL1xuIl0sIm5hbWVzIjpbIlBsdWdpbk1hbmFnZXIiLCJDb21tYW5kcyIsIk9wdGlvbnMiLCJGaWx0ZXJDb250ZW50IiwiUmVzb2x2ZU5hbWUiLCJCdXR0b25zIiwiZWRpdG9yIiwicmVnaXN0ZXIiLCJvcHRpb24iLCJuYW1lIiwicmVnaXN0ZXJPcHRpb24iLCJnZXRTZXBhcmF0b3JIdG1sIiwic2hvdWxkU3BsaXRCbG9jayIsIkVudiIsInBhZ2VCcmVha0NsYXNzIiwiZ2V0UGxhY2Vob2xkZXJIdG1sIiwiaHRtbCIsInNldHVwIiwic2VwYXJhdG9ySHRtbCIsInBhZ2VCcmVha1NlcGFyYXRvclJlZ0V4cCIsIlJlZ0V4cCIsImEiLCJlIiwibm9kZXMiLCJpIiwibm9kZSIsImNsYXNzTmFtZSIsInBhcmVudE5vZGUiLCJvblNldHVwRWRpdGFibGUiLCJhcGkiLCJub2RlQ2hhbmdlZCIsIm9uQWN0aW9uIiwiUGx1Z2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsNkRBQWUsTUFBTSxFQUFDO0FBQ2Y7Ozs7Ozs7Ozs7Ozs7O0FDSFA7O0FBRUEsNkRBQWUsTUFBTSxFQUFDO0FBQ2Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIb0Q7QUFFaEI7QUFDRjtBQUNhO0FBQ0o7QUFDVjtBQUV4Qyw2REFBZ0I7SUFDZEEsMEVBQWlCLENBQUMsYUFBYSxDQUFDTTtRQUM5Qkosa0RBQWdCLENBQUNJO1FBQ2pCTCxtREFBaUIsQ0FBQ0s7UUFDbEJELGlEQUFnQixDQUFDQztRQUNqQkgsc0RBQW1CLENBQUNHO1FBQ3BCRixvREFBaUIsQ0FBQ0U7SUFDcEI7QUFDRixDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2RxRDtBQUVsQjtBQUVyQyxNQUFNQyxXQUFXLENBQUNEO0lBQ2hCQSxPQUFPLFVBQVUsQ0FBQyxnQkFBZ0I7UUFDaENBLE9BQU8sYUFBYSxDQUFDSCxtRUFBZ0MsQ0FBQ0Qsc0RBQXdCLENBQUNJO0lBQ2pGO0FBQ0Y7QUFJRTs7Ozs7Ozs7Ozs7Ozs7O0FDWEYsTUFBTUUsU0FHRixDQUFDQyxPQUFpQixDQUFDSCxTQUNyQkEsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDRztBQUVyQixNQUFNRixXQUFXLENBQUNEO0lBQ2hCLE1BQU1JLGlCQUFpQkosT0FBTyxPQUFPLENBQUMsUUFBUTtJQUU5Q0ksZUFB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