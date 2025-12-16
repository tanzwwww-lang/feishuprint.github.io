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
"./src/plugins/autoresize/main/ts/Plugin.ts": 
/*!**************************************************!*\
  !*** ./src/plugins/autoresize/main/ts/Plugin.ts ***!
  \**************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Cell.ts");
/* ESM import */var tinymce_core_api_PluginManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/PluginManager */ "./lib/globals/tinymce/core/api/PluginManager.js");
/* ESM import */var _api_Commands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/Commands */ "./src/plugins/autoresize/main/ts/api/Commands.ts");
/* ESM import */var _api_Options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/Options */ "./src/plugins/autoresize/main/ts/api/Options.ts");
/* ESM import */var _core_Resize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/Resize */ "./src/plugins/autoresize/main/ts/core/Resize.ts");





/**
 * This class contains all core logic for the autoresize plugin.
 *
 * @class tinymce.autoresize.Plugin
 * @private
 */ /* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>{
    tinymce_core_api_PluginManager__WEBPACK_IMPORTED_MODULE_0__["default"].add('autoresize', (editor)=>{
        _api_Options__WEBPACK_IMPORTED_MODULE_2__.register(editor);
        // If autoresize is enabled, disable resize if the user hasn't explicitly enabled it
        // TINY-8288: This currently does nothing because of a bug in the theme
        if (!editor.options.isSet('resize')) {
            editor.options.set('resize', false);
        }
        if (!editor.inline) {
            const oldSize = (0,_ephox_katamari__WEBPACK_IMPORTED_MODULE_4__.Cell)({
                totalHeight: 0,
                contentHeight: 0,
                set: false
            });
            _api_Commands__WEBPACK_IMPORTED_MODULE_1__.register(editor, oldSize);
            _core_Resize__WEBPACK_IMPORTED_MODULE_3__.setup(editor, oldSize);
        }
    });
});


}),
"./src/plugins/autoresize/main/ts/api/Commands.ts": 
/*!********************************************************!*\
  !*** ./src/plugins/autoresize/main/ts/api/Commands.ts ***!
  \********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  register: () => (register)
});
/* ESM import */var _core_Resize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Resize */ "./src/plugins/autoresize/main/ts/core/Resize.ts");

const register = (editor, oldSize)=>{
    editor.addCommand('mceAutoResize', ()=>{
        _core_Resize__WEBPACK_IMPORTED_MODULE_0__.resize(editor, oldSize);
    });
};



}),
"./src/plugins/autoresize/main/ts/api/Events.ts": 
/*!******************************************************!*\
  !*** ./src/plugins/autoresize/main/ts/api/Events.ts ***!
  \******************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  fireResizeEditor: () => (fireResizeEditor)
});
const fireResizeEditor = (editor)=>editor.dispatch('ResizeEditor');



}),
"./src/plugins/autoresize/main/ts/api/Options.ts": 
/*!*******************************************************!*\
  !*** ./src/plugins/autoresize/main/ts/api/Options.ts ***!
  \*******************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getAutoResizeBottomMargin: () => (getAutoResizeBottomMargin),
  getAutoResizeOverflowPadding: () => (getAutoResizeOverflowPadding),
  getMaxHeight: () => (getMaxHeight),
  getMinHeight: () => (getMinHeight),
  register: () => (register)
});
const option = (name)=>(editor)=>editor.options.get(name);
const register = (editor)=>{
    const registerOption = editor.options.register;
    registerOption('autoresize_overflow_padding', {
        processor: 'number',
        default: 1
    });
    registerOption('autoresize_bottom_margin', {
        processor: 'number',
        default: 50
    });
};
const getMinHeight = option('min_height');
const getMaxHeight = option('max_height');
const getAutoResizeOverflowPadding = option('autoresize_overflow_padding');
const getAutoResizeBottomMargin = option('autoresize_bottom_margin');



}),
"./src/plugins/autoresize/main/ts/core/Resize.ts": 
/*!*******************************************************!*\
  !*** ./src/plugins/autoresize/main/ts/core/Resize.ts ***!
  \*******************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  resize: () => (resize),
  setup: () => (setup)
});
/* ESM import */var tinymce_core_api_Env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/Env */ "./lib/globals/tinymce/core/api/Env.js");
/* ESM import */var _api_Events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/Events */ "./src/plugins/autoresize/main/ts/api/Events.ts");
/* ESM import */var _api_Options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/Options */ "./src/plugins/autoresize/main/ts/api/Options.ts");



/**
 * This class contains all core logic for the autoresize plugin.
 *
 * @class tinymce.autoresize.Plugin
 * @private
 */ const isFullscreen = (editor)=>editor.plugins.fullscreen && editor.plugins.fullscreen.isFullscreen();
const toggleScrolling = (editor, state)=>{
    const body = editor.getBody();
    if (body) {
        body.style.overflowY = state ? '' : 'hidden';
        if (!state) {
            body.scrollTop = 0;
        }
    }
};
const parseCssValueToInt = (dom, elm, name, computed)=>{
    const value = parseInt(dom.getStyle(elm, name, computed) ?? '', 10);
    // The value maybe be an empty string, so in that case treat it as being 0
    return isNaN(value) ? 0 : value;
};
const shouldScrollIntoView = (trigger)=>{
    // Only scroll the selection into view when we're inserting content. Any other
    // triggers the selection should already be in view and resizing would only
    // extend the content area.
    if (trigger?.type.toLowerCase() === 'setcontent') {
        const setContentEvent = trigger;
        return setContentEvent.selection === true || setContentEvent.paste === true;
    } else {
        return false;
    }
};
/**
 * This method gets executed each time the editor needs to resize.
 */ const resize = (editor, oldSize, trigger, getExtraMarginBottom)=>{
    const dom = editor.dom;
    const doc = editor.getDoc();
    if (!doc) {
        return;
    }
    if (isFullscreen(editor)) {
        toggleScrolling(editor, true);
        return;
    }
    const docEle = doc.documentElement;
    const resizeBottomMargin = getExtraMarginBottom ? getExtraMarginBottom() : _api_Options__WEBPACK_IMPORTED_MODULE_2__.getAutoResizeOverflowPadding(editor);
    const minHeight = _api_Options__WEBPACK_IMPORTED_MODULE_2__.getMinHeight(editor) ?? editor.getElement().offsetHeight;
    let resizeHeight = minHeight;
    // Calculate outer height of the doc element using CSS styles
    const marginTop = parseCssValueToInt(dom, docEle, 'margin-top', true);
    const marginBottom = parseCssValueToInt(dom, docEle, 'margin-bottom', true);
    let contentHeight = docEle.offsetHeight + marginTop + marginBottom + resizeBottomMargin;
    // Make sure we have a valid height
    if (contentHeight < 0) {
        contentHeight = 0;
    }
    // Determine the size of the chroming (menubar, toolbar, etc...)
    const containerHeight = editor.getContainer().offsetHeight;
    const contentAreaHeight = editor.getContentAreaContainer().offsetHeight;
    const chromeHeight = containerHeight - contentAreaHeight;
    // Don't make it smaller than the minimum height
    if (contentHeight + chromeHeight > minHeight) {
        resizeHeight = contentHeight + chromeHeight;
    }
    // If a maximum height has been defined don't exceed this height
    const maxHeight = _api_Options__WEBPACK_IMPORTED_MODULE_2__.getMaxHeight(editor);
    if (maxHeight && resizeHeight > maxHeight) {
        resizeHeight = maxHeight;
        toggleScrolling(editor, true);
    } else {
        toggleScrolling(editor, false);
    }
    const old = oldSize.get();
    if (old.set) {
        editor.dom.setStyles(editor.getDoc().documentElement, {
            'min-height': 0
        });
        editor.dom.setStyles(editor.getBody(), {
            'min-height': 'inherit'
        });
    }
    // Resize content element
    if (resizeHeight !== old.totalHeight && (contentHeight - resizeBottomMargin !== old.contentHeight || !old.set)) {
        const deltaSize = resizeHeight - old.totalHeight;
        dom.setStyle(editor.getContainer(), 'height', resizeHeight + 'px');
        oldSize.set({
            totalHeight: resizeHeight,
            contentHeight,
            set: true
        });
        _api_Events__WEBPACK_IMPORTED_MODULE_1__.fireResizeEditor(editor);
        // iPadOS has an issue where it won't rerender the body when the iframe is resized
        // however if we reset the scroll position then it re-renders correctly
        if (tinymce_core_api_Env__WEBPACK_IMPORTED_MODULE_0__["default"].browser.isSafari() && (tinymce_core_api_Env__WEBPACK_IMPORTED_MODULE_0__["default"].os.isMacOS() || tinymce_core_api_Env__WEBPACK_IMPORTED_MODULE_0__["default"].os.isiOS())) {
            const win = editor.getWin();
            win.scrollTo(win.pageXOffset, win.pageYOffset);
        }
        // Ensure the selection is in view, as it's potentially out of view after inserting content into the editor
        if (editor.hasFocus() && shouldScrollIntoView(trigger)) {
            editor.selection.scrollIntoView();
        }
        // WebKit doesn't decrease the size of the body element until the iframe gets resized
        // So we need to continue to resize the iframe down until the size gets fixed
        if ((tinymce_core_api_Env__WEBPACK_IMPORTED_MODULE_0__["default"].browser.isSafari() || tinymce_core_api_Env__WEBPACK_IMPORTED_MODULE_0__["default"].browser.isChromium()) && deltaSize < 0) {
            resize(editor, oldSize, trigger, getExtraMarginBottom);
        }
    }
};
const setup = (editor, oldSize)=>{
    const getExtraMarginBottom = ()=>_api_Options__WEBPACK_IMPORTED_MODULE_2__.getAutoResizeBottomMargin(editor);
    editor.on('init', (e)=>{
        const overflowPadding = _api_Options__WEBPACK_IMPORTED_MODULE_2__.getAutoResizeOverflowPadding(editor);
        const dom = editor.dom;
        // Disable height 100% on the root document element otherwise we'll end up resizing indefinitely
        dom.setStyles(editor.getDoc().documentElement, {
            height: 'auto'
        });
        if (tinymce_core_api_Env__WEBPACK_IMPORTED_MODULE_0__["default"].browser.isEdge() || tinymce_core_api_Env__WEBPACK_IMPORTED_MODULE_0__["default"].browser.isIE()) {
            dom.setStyles(editor.getBody(), {
                'paddingLeft': overflowPadding,
                'paddingRight': overflowPadding,
                // IE & Edge have a min height of 150px by default on the body, so override that
                'min-height': 0
            });
        } else {
            dom.setStyles(editor.getBody(), {
                paddingLeft: overflowPadding,
                paddingRight: overflowPadding
            });
        }
        resize(editor, oldSize, e, getExtraMarginBottom);
    });
    editor.on('NodeChange SetContent keyup FullscreenStateChanged ResizeContent', (e)=>{
        resize(editor, oldSize, e, getExtraMarginBottom);
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

/*!************************************************!*\
  !*** ./src/plugins/autoresize/main/ts/Main.ts ***!
  \************************************************/
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _Plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Plugin */ "./src/plugins/autoresize/main/ts/Plugin.ts");

(0,_Plugin__WEBPACK_IMPORTED_MODULE_0__["default"])(); /** *****
 * DO NOT EXPORT ANYTHING
 *
 * IF YOU DO ROLLUP WILL LEAVE A GLOBAL ON THE PAGE
 *******/ 

})();

})()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdGlueW1jZS9wbHVnaW5zL2F1dG9yZXNpemUvcGx1Z2luLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGlueW1jZS8uL2xpYi9nbG9iYWxzL3RpbnltY2UvY29yZS9hcGkvRW52LmpzIiwid2VicGFjazovL3RpbnltY2UvLi9saWIvZ2xvYmFscy90aW55bWNlL2NvcmUvYXBpL1BsdWdpbk1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9rYXRhbWFyaS9zcmMvbWFpbi90cy9lcGhveC9rYXRhbWFyaS9hcGkvQ2VsbC50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvYXV0b3Jlc2l6ZS9tYWluL3RzL1BsdWdpbi50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvYXV0b3Jlc2l6ZS9tYWluL3RzL2FwaS9Db21tYW5kcy50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvYXV0b3Jlc2l6ZS9tYWluL3RzL2FwaS9FdmVudHMudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL2F1dG9yZXNpemUvbWFpbi90cy9hcGkvT3B0aW9ucy50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvYXV0b3Jlc2l6ZS9tYWluL3RzL2NvcmUvUmVzaXplLnRzIiwid2VicGFjazovL3RpbnltY2Uvd2VicGFjay9ydW50aW1lL2RlZmluZV9wcm9wZXJ0eV9nZXR0ZXJzIiwid2VicGFjazovL3RpbnltY2Uvd2VicGFjay9ydW50aW1lL2hhc19vd25fcHJvcGVydHkiLCJ3ZWJwYWNrOi8vdGlueW1jZS93ZWJwYWNrL3J1bnRpbWUvbWFrZV9uYW1lc3BhY2Vfb2JqZWN0Iiwid2VicGFjazovL3RpbnltY2Uvd2VicGFjay9ydW50aW1lL3JzcGFja192ZXJzaW9uIiwid2VicGFjazovL3RpbnltY2Uvd2VicGFjay9ydW50aW1lL3JzcGFja191bmlxdWVfaWQiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL2F1dG9yZXNpemUvbWFpbi90cy9NYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBnbG9iYWwgPSB0aW55bWNlLnV0aWwuVG9vbHMucmVzb2x2ZSgndGlueW1jZS5FbnYnKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2xvYmFsO1xuZXhwb3J0IHZhciBFbnYgPSBnbG9iYWw7XG4iLCJ2YXIgZ2xvYmFsID0gdGlueW1jZS51dGlsLlRvb2xzLnJlc29sdmUoJ3RpbnltY2UuUGx1Z2luTWFuYWdlcicpO1xuXG5leHBvcnQgZGVmYXVsdCBnbG9iYWw7XG5leHBvcnQgdmFyIFBsdWdpbk1hbmFnZXIgPSBnbG9iYWw7XG4iLCJleHBvcnQgaW50ZXJmYWNlIENlbGw8VD4ge1xuICByZWFkb25seSBnZXQ6ICgpID0+IFQ7XG4gIHJlYWRvbmx5IHNldDogKHZhbHVlOiBUKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgQ2VsbCA9IDxUPihpbml0aWFsOiBUKTogQ2VsbDxUPiA9PiB7XG4gIGxldCB2YWx1ZSA9IGluaXRpYWw7XG5cbiAgY29uc3QgZ2V0ID0gKCkgPT4ge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICBjb25zdCBzZXQgPSAodjogVCkgPT4ge1xuICAgIHZhbHVlID0gdjtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldCxcbiAgICBzZXRcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBDZWxsIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0IFBsdWdpbk1hbmFnZXIgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9QbHVnaW5NYW5hZ2VyJztcblxuaW1wb3J0ICogYXMgQ29tbWFuZHMgZnJvbSAnLi9hcGkvQ29tbWFuZHMnO1xuaW1wb3J0ICogYXMgT3B0aW9ucyBmcm9tICcuL2FwaS9PcHRpb25zJztcbmltcG9ydCAqIGFzIFJlc2l6ZSBmcm9tICcuL2NvcmUvUmVzaXplJztcblxuLyoqXG4gKiBUaGlzIGNsYXNzIGNvbnRhaW5zIGFsbCBjb3JlIGxvZ2ljIGZvciB0aGUgYXV0b3Jlc2l6ZSBwbHVnaW4uXG4gKlxuICogQGNsYXNzIHRpbnltY2UuYXV0b3Jlc2l6ZS5QbHVnaW5cbiAqIEBwcml2YXRlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgKCk6IHZvaWQgPT4ge1xuICBQbHVnaW5NYW5hZ2VyLmFkZCgnYXV0b3Jlc2l6ZScsIChlZGl0b3IpID0+IHtcbiAgICBPcHRpb25zLnJlZ2lzdGVyKGVkaXRvcik7XG4gICAgLy8gSWYgYXV0b3Jlc2l6ZSBpcyBlbmFibGVkLCBkaXNhYmxlIHJlc2l6ZSBpZiB0aGUgdXNlciBoYXNuJ3QgZXhwbGljaXRseSBlbmFibGVkIGl0XG4gICAgLy8gVElOWS04Mjg4OiBUaGlzIGN1cnJlbnRseSBkb2VzIG5vdGhpbmcgYmVjYXVzZSBvZiBhIGJ1ZyBpbiB0aGUgdGhlbWVcbiAgICBpZiAoIWVkaXRvci5vcHRpb25zLmlzU2V0KCdyZXNpemUnKSkge1xuICAgICAgZWRpdG9yLm9wdGlvbnMuc2V0KCdyZXNpemUnLCBmYWxzZSk7XG4gICAgfVxuICAgIGlmICghZWRpdG9yLmlubGluZSkge1xuICAgICAgY29uc3Qgb2xkU2l6ZSA9IENlbGw8UmVzaXplLlJlc2l6ZURhdGE+KHtcbiAgICAgICAgdG90YWxIZWlnaHQ6IDAsXG4gICAgICAgIGNvbnRlbnRIZWlnaHQ6IDAsXG4gICAgICAgIHNldDogZmFsc2UsXG4gICAgICB9KTtcbiAgICAgIENvbW1hbmRzLnJlZ2lzdGVyKGVkaXRvciwgb2xkU2l6ZSk7XG4gICAgICBSZXNpemUuc2V0dXAoZWRpdG9yLCBvbGRTaXplKTtcbiAgICB9XG4gIH0pO1xufTtcbiIsImltcG9ydCB0eXBlIHsgQ2VsbCB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmltcG9ydCB0eXBlIEVkaXRvciBmcm9tICd0aW55bWNlL2NvcmUvYXBpL0VkaXRvcic7XG5cbmltcG9ydCAqIGFzIFJlc2l6ZSBmcm9tICcuLi9jb3JlL1Jlc2l6ZSc7XG5cbmNvbnN0IHJlZ2lzdGVyID0gKGVkaXRvcjogRWRpdG9yLCBvbGRTaXplOiBDZWxsPFJlc2l6ZS5SZXNpemVEYXRhPik6IHZvaWQgPT4ge1xuICBlZGl0b3IuYWRkQ29tbWFuZCgnbWNlQXV0b1Jlc2l6ZScsICgpID0+IHtcbiAgICBSZXNpemUucmVzaXplKGVkaXRvciwgb2xkU2l6ZSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHtcbiAgcmVnaXN0ZXJcbn07XG4iLCJpbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuaW1wb3J0IHR5cGUgeyBFZGl0b3JFdmVudCB9IGZyb20gJ3RpbnltY2UvY29yZS9hcGkvdXRpbC9FdmVudERpc3BhdGNoZXInO1xuXG5jb25zdCBmaXJlUmVzaXplRWRpdG9yID0gKGVkaXRvcjogRWRpdG9yKTogRWRpdG9yRXZlbnQ8e30+ID0+XG4gIGVkaXRvci5kaXNwYXRjaCgnUmVzaXplRWRpdG9yJyk7XG5cbmV4cG9ydCB7XG4gIGZpcmVSZXNpemVFZGl0b3Jcbn07XG4iLCJpbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuaW1wb3J0IHR5cGUgeyBFZGl0b3JPcHRpb25zIH0gZnJvbSAndGlueW1jZS9jb3JlL2FwaS9PcHRpb25UeXBlcyc7XG5cbmNvbnN0IG9wdGlvbjoge1xuICA8SyBleHRlbmRzIGtleW9mIEVkaXRvck9wdGlvbnM+KG5hbWU6IEspOiAoZWRpdG9yOiBFZGl0b3IpID0+IEVkaXRvck9wdGlvbnNbS107XG4gIDxUPihuYW1lOiBzdHJpbmcpOiAoZWRpdG9yOiBFZGl0b3IpID0+IFQ7XG59ID0gKG5hbWU6IHN0cmluZykgPT4gKGVkaXRvcjogRWRpdG9yKSA9PlxuICBlZGl0b3Iub3B0aW9ucy5nZXQobmFtZSk7XG5cbmNvbnN0IHJlZ2lzdGVyID0gKGVkaXRvcjogRWRpdG9yKTogdm9pZCA9PiB7XG4gIGNvbnN0IHJlZ2lzdGVyT3B0aW9uID0gZWRpdG9yLm9wdGlvbnMucmVnaXN0ZXI7XG5cbiAgcmVnaXN0ZXJPcHRpb24oJ2F1dG9yZXNpemVfb3ZlcmZsb3dfcGFkZGluZycsIHtcbiAgICBwcm9jZXNzb3I6ICdudW1iZXInLFxuICAgIGRlZmF1bHQ6IDFcbiAgfSk7XG5cbiAgcmVnaXN0ZXJPcHRpb24oJ2F1dG9yZXNpemVfYm90dG9tX21hcmdpbicsIHtcbiAgICBwcm9jZXNzb3I6ICdudW1iZXInLFxuICAgIGRlZmF1bHQ6IDUwXG4gIH0pO1xufTtcblxuY29uc3QgZ2V0TWluSGVpZ2h0ID0gb3B0aW9uKCdtaW5faGVpZ2h0Jyk7XG5jb25zdCBnZXRNYXhIZWlnaHQgPSBvcHRpb24oJ21heF9oZWlnaHQnKTtcbmNvbnN0IGdldEF1dG9SZXNpemVPdmVyZmxvd1BhZGRpbmcgPSBvcHRpb248bnVtYmVyPignYXV0b3Jlc2l6ZV9vdmVyZmxvd19wYWRkaW5nJyk7XG5jb25zdCBnZXRBdXRvUmVzaXplQm90dG9tTWFyZ2luID0gb3B0aW9uPG51bWJlcj4oJ2F1dG9yZXNpemVfYm90dG9tX21hcmdpbicpO1xuXG5leHBvcnQge1xuICByZWdpc3RlcixcbiAgZ2V0TWluSGVpZ2h0LFxuICBnZXRNYXhIZWlnaHQsXG4gIGdldEF1dG9SZXNpemVPdmVyZmxvd1BhZGRpbmcsXG4gIGdldEF1dG9SZXNpemVCb3R0b21NYXJnaW5cbn07XG4iLCJpbXBvcnQgdHlwZSB7IENlbGwgfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5pbXBvcnQgdHlwZSBET01VdGlscyBmcm9tICd0aW55bWNlL2NvcmUvYXBpL2RvbS9ET01VdGlscyc7XG5pbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuaW1wb3J0IEVudiBmcm9tICd0aW55bWNlL2NvcmUvYXBpL0Vudic7XG5pbXBvcnQgdHlwZSB7IFNldENvbnRlbnRFdmVudCB9IGZyb20gJ3RpbnltY2UvY29yZS9hcGkvRXZlbnRUeXBlcyc7XG5pbXBvcnQgdHlwZSB7IEVkaXRvckV2ZW50IH0gZnJvbSAndGlueW1jZS9jb3JlL2FwaS91dGlsL0V2ZW50RGlzcGF0Y2hlcic7XG5cbmltcG9ydCAqIGFzIEV2ZW50cyBmcm9tICcuLi9hcGkvRXZlbnRzJztcbmltcG9ydCAqIGFzIE9wdGlvbnMgZnJvbSAnLi4vYXBpL09wdGlvbnMnO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgY29udGFpbnMgYWxsIGNvcmUgbG9naWMgZm9yIHRoZSBhdXRvcmVzaXplIHBsdWdpbi5cbiAqXG4gKiBAY2xhc3MgdGlueW1jZS5hdXRvcmVzaXplLlBsdWdpblxuICogQHByaXZhdGVcbiAqL1xuXG5jb25zdCBpc0Z1bGxzY3JlZW4gPSAoZWRpdG9yOiBFZGl0b3IpOiBib29sZWFuID0+XG4gIGVkaXRvci5wbHVnaW5zLmZ1bGxzY3JlZW4gJiYgZWRpdG9yLnBsdWdpbnMuZnVsbHNjcmVlbi5pc0Z1bGxzY3JlZW4oKTtcblxuY29uc3QgdG9nZ2xlU2Nyb2xsaW5nID0gKGVkaXRvcjogRWRpdG9yLCBzdGF0ZTogYm9vbGVhbik6IHZvaWQgPT4ge1xuICBjb25zdCBib2R5ID0gZWRpdG9yLmdldEJvZHkoKTtcbiAgaWYgKGJvZHkpIHtcbiAgICBib2R5LnN0eWxlLm92ZXJmbG93WSA9IHN0YXRlID8gJycgOiAnaGlkZGVuJztcbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICBib2R5LnNjcm9sbFRvcCA9IDA7XG4gICAgfVxuICB9XG59O1xuXG5pbnRlcmZhY2UgUmVzaXplRGF0YSB7XG4gIHJlYWRvbmx5IHRvdGFsSGVpZ2h0OiBudW1iZXI7XG4gIHJlYWRvbmx5IGNvbnRlbnRIZWlnaHQ6IG51bWJlcjtcbiAgcmVhZG9ubHkgc2V0OiBib29sZWFuO1xufVxuXG5jb25zdCBwYXJzZUNzc1ZhbHVlVG9JbnQgPSAoZG9tOiBET01VdGlscywgZWxtOiBFbGVtZW50LCBuYW1lOiBzdHJpbmcsIGNvbXB1dGVkOiBib29sZWFuKTogbnVtYmVyID0+IHtcbiAgY29uc3QgdmFsdWUgPSBwYXJzZUludChkb20uZ2V0U3R5bGUoZWxtLCBuYW1lLCBjb21wdXRlZCkgPz8gJycsIDEwKTtcbiAgLy8gVGhlIHZhbHVlIG1heWJlIGJlIGFuIGVtcHR5IHN0cmluZywgc28gaW4gdGhhdCBjYXNlIHRyZWF0IGl0IGFzIGJlaW5nIDBcbiAgcmV0dXJuIGlzTmFOKHZhbHVlKSA/IDAgOiB2YWx1ZTtcbn07XG5cbmNvbnN0IHNob3VsZFNjcm9sbEludG9WaWV3ID0gKHRyaWdnZXI6IEVkaXRvckV2ZW50PHVua25vd24+IHwgdW5kZWZpbmVkKSA9PiB7XG4gIC8vIE9ubHkgc2Nyb2xsIHRoZSBzZWxlY3Rpb24gaW50byB2aWV3IHdoZW4gd2UncmUgaW5zZXJ0aW5nIGNvbnRlbnQuIEFueSBvdGhlclxuICAvLyB0cmlnZ2VycyB0aGUgc2VsZWN0aW9uIHNob3VsZCBhbHJlYWR5IGJlIGluIHZpZXcgYW5kIHJlc2l6aW5nIHdvdWxkIG9ubHlcbiAgLy8gZXh0ZW5kIHRoZSBjb250ZW50IGFyZWEuXG4gIGlmICh0cmlnZ2VyPy50eXBlLnRvTG93ZXJDYXNlKCkgPT09ICdzZXRjb250ZW50Jykge1xuICAgIGNvbnN0IHNldENvbnRlbnRFdmVudCA9ICh0cmlnZ2VyIGFzIEVkaXRvckV2ZW50PFNldENvbnRlbnRFdmVudD4pO1xuICAgIHJldHVybiBzZXRDb250ZW50RXZlbnQuc2VsZWN0aW9uID09PSB0cnVlIHx8IHNldENvbnRlbnRFdmVudC5wYXN0ZSA9PT0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbi8qKlxuICogVGhpcyBtZXRob2QgZ2V0cyBleGVjdXRlZCBlYWNoIHRpbWUgdGhlIGVkaXRvciBuZWVkcyB0byByZXNpemUuXG4gKi9cbmNvbnN0IHJlc2l6ZSA9IChlZGl0b3I6IEVkaXRvciwgb2xkU2l6ZTogQ2VsbDxSZXNpemVEYXRhPiwgdHJpZ2dlcj86IEVkaXRvckV2ZW50PHVua25vd24+LCBnZXRFeHRyYU1hcmdpbkJvdHRvbT86ICgpID0+IG51bWJlcik6IHZvaWQgPT4ge1xuICBjb25zdCBkb20gPSBlZGl0b3IuZG9tO1xuXG4gIGNvbnN0IGRvYyA9IGVkaXRvci5nZXREb2MoKTtcbiAgaWYgKCFkb2MpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaXNGdWxsc2NyZWVuKGVkaXRvcikpIHtcbiAgICB0b2dnbGVTY3JvbGxpbmcoZWRpdG9yLCB0cnVlKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBkb2NFbGUgPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuICBjb25zdCByZXNpemVCb3R0b21NYXJnaW4gPSBnZXRFeHRyYU1hcmdpbkJvdHRvbSA/IGdldEV4dHJhTWFyZ2luQm90dG9tKCkgOiBPcHRpb25zLmdldEF1dG9SZXNpemVPdmVyZmxvd1BhZGRpbmcoZWRpdG9yKTtcblxuICBjb25zdCBtaW5IZWlnaHQgPSBPcHRpb25zLmdldE1pbkhlaWdodChlZGl0b3IpID8/IGVkaXRvci5nZXRFbGVtZW50KCkub2Zmc2V0SGVpZ2h0O1xuICBsZXQgcmVzaXplSGVpZ2h0ID0gbWluSGVpZ2h0O1xuXG4gIC8vIENhbGN1bGF0ZSBvdXRlciBoZWlnaHQgb2YgdGhlIGRvYyBlbGVtZW50IHVzaW5nIENTUyBzdHlsZXNcbiAgY29uc3QgbWFyZ2luVG9wID0gcGFyc2VDc3NWYWx1ZVRvSW50KGRvbSwgZG9jRWxlLCAnbWFyZ2luLXRvcCcsIHRydWUpO1xuICBjb25zdCBtYXJnaW5Cb3R0b20gPSBwYXJzZUNzc1ZhbHVlVG9JbnQoZG9tLCBkb2NFbGUsICdtYXJnaW4tYm90dG9tJywgdHJ1ZSk7XG4gIGxldCBjb250ZW50SGVpZ2h0ID0gZG9jRWxlLm9mZnNldEhlaWdodCArIG1hcmdpblRvcCArIG1hcmdpbkJvdHRvbSArIHJlc2l6ZUJvdHRvbU1hcmdpbjtcblxuICAvLyBNYWtlIHN1cmUgd2UgaGF2ZSBhIHZhbGlkIGhlaWdodFxuICBpZiAoY29udGVudEhlaWdodCA8IDApIHtcbiAgICBjb250ZW50SGVpZ2h0ID0gMDtcbiAgfVxuXG4gIC8vIERldGVybWluZSB0aGUgc2l6ZSBvZiB0aGUgY2hyb21pbmcgKG1lbnViYXIsIHRvb2xiYXIsIGV0Yy4uLilcbiAgY29uc3QgY29udGFpbmVySGVpZ2h0ID0gZWRpdG9yLmdldENvbnRhaW5lcigpLm9mZnNldEhlaWdodDtcbiAgY29uc3QgY29udGVudEFyZWFIZWlnaHQgPSBlZGl0b3IuZ2V0Q29udGVudEFyZWFDb250YWluZXIoKS5vZmZzZXRIZWlnaHQ7XG4gIGNvbnN0IGNocm9tZUhlaWdodCA9IGNvbnRhaW5lckhlaWdodCAtIGNvbnRlbnRBcmVhSGVpZ2h0O1xuXG4gIC8vIERvbid0IG1ha2UgaXQgc21hbGxlciB0aGFuIHRoZSBtaW5pbXVtIGhlaWdodFxuICBpZiAoY29udGVudEhlaWdodCArIGNocm9tZUhlaWdodCA+IG1pbkhlaWdodCkge1xuICAgIHJlc2l6ZUhlaWdodCA9IGNvbnRlbnRIZWlnaHQgKyBjaHJvbWVIZWlnaHQ7XG4gIH1cblxuICAvLyBJZiBhIG1heGltdW0gaGVpZ2h0IGhhcyBiZWVuIGRlZmluZWQgZG9uJ3QgZXhjZWVkIHRoaXMgaGVpZ2h0XG4gIGNvbnN0IG1heEhlaWdodCA9IE9wdGlvbnMuZ2V0TWF4SGVpZ2h0KGVkaXRvcik7XG4gIGlmIChtYXhIZWlnaHQgJiYgcmVzaXplSGVpZ2h0ID4gbWF4SGVpZ2h0KSB7XG4gICAgcmVzaXplSGVpZ2h0ID0gbWF4SGVpZ2h0O1xuICAgIHRvZ2dsZVNjcm9sbGluZyhlZGl0b3IsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHRvZ2dsZVNjcm9sbGluZyhlZGl0b3IsIGZhbHNlKTtcbiAgfVxuXG4gIGNvbnN0IG9sZCA9IG9sZFNpemUuZ2V0KCk7XG5cbiAgaWYgKG9sZC5zZXQpIHtcbiAgICBlZGl0b3IuZG9tLnNldFN0eWxlcyhlZGl0b3IuZ2V0RG9jKCkuZG9jdW1lbnRFbGVtZW50LCB7ICdtaW4taGVpZ2h0JzogMCB9KTtcbiAgICBlZGl0b3IuZG9tLnNldFN0eWxlcyhlZGl0b3IuZ2V0Qm9keSgpLCB7ICdtaW4taGVpZ2h0JzogJ2luaGVyaXQnIH0pO1xuICB9XG4gIC8vIFJlc2l6ZSBjb250ZW50IGVsZW1lbnRcbiAgaWYgKHJlc2l6ZUhlaWdodCAhPT0gb2xkLnRvdGFsSGVpZ2h0ICYmIChjb250ZW50SGVpZ2h0IC0gcmVzaXplQm90dG9tTWFyZ2luICE9PSBvbGQuY29udGVudEhlaWdodCB8fCAhb2xkLnNldCkpIHtcbiAgICBjb25zdCBkZWx0YVNpemUgPSAocmVzaXplSGVpZ2h0IC0gb2xkLnRvdGFsSGVpZ2h0KTtcbiAgICBkb20uc2V0U3R5bGUoZWRpdG9yLmdldENvbnRhaW5lcigpLCAnaGVpZ2h0JywgcmVzaXplSGVpZ2h0ICsgJ3B4Jyk7XG4gICAgb2xkU2l6ZS5zZXQoe1xuICAgICAgdG90YWxIZWlnaHQ6IHJlc2l6ZUhlaWdodCxcbiAgICAgIGNvbnRlbnRIZWlnaHQsXG4gICAgICBzZXQ6IHRydWUsXG4gICAgfSk7XG4gICAgRXZlbnRzLmZpcmVSZXNpemVFZGl0b3IoZWRpdG9yKTtcblxuICAgIC8vIGlQYWRPUyBoYXMgYW4gaXNzdWUgd2hlcmUgaXQgd29uJ3QgcmVyZW5kZXIgdGhlIGJvZHkgd2hlbiB0aGUgaWZyYW1lIGlzIHJlc2l6ZWRcbiAgICAvLyBob3dldmVyIGlmIHdlIHJlc2V0IHRoZSBzY3JvbGwgcG9zaXRpb24gdGhlbiBpdCByZS1yZW5kZXJzIGNvcnJlY3RseVxuICAgIGlmIChFbnYuYnJvd3Nlci5pc1NhZmFyaSgpICYmIChFbnYub3MuaXNNYWNPUygpIHx8IEVudi5vcy5pc2lPUygpKSkge1xuICAgICAgY29uc3Qgd2luID0gZWRpdG9yLmdldFdpbigpO1xuICAgICAgd2luLnNjcm9sbFRvKHdpbi5wYWdlWE9mZnNldCwgd2luLnBhZ2VZT2Zmc2V0KTtcbiAgICB9XG5cbiAgICAvLyBFbnN1cmUgdGhlIHNlbGVjdGlvbiBpcyBpbiB2aWV3LCBhcyBpdCdzIHBvdGVudGlhbGx5IG91dCBvZiB2aWV3IGFmdGVyIGluc2VydGluZyBjb250ZW50IGludG8gdGhlIGVkaXRvclxuICAgIGlmIChlZGl0b3IuaGFzRm9jdXMoKSAmJiBzaG91bGRTY3JvbGxJbnRvVmlldyh0cmlnZ2VyKSkge1xuICAgICAgZWRpdG9yLnNlbGVjdGlvbi5zY3JvbGxJbnRvVmlldygpO1xuICAgIH1cblxuICAgIC8vIFdlYktpdCBkb2Vzbid0IGRlY3JlYXNlIHRoZSBzaXplIG9mIHRoZSBib2R5IGVsZW1lbnQgdW50aWwgdGhlIGlmcmFtZSBnZXRzIHJlc2l6ZWRcbiAgICAvLyBTbyB3ZSBuZWVkIHRvIGNvbnRpbnVlIHRvIHJlc2l6ZSB0aGUgaWZyYW1lIGRvd24gdW50aWwgdGhlIHNpemUgZ2V0cyBmaXhlZFxuICAgIGlmICgoRW52LmJyb3dzZXIuaXNTYWZhcmkoKSB8fCBFbnYuYnJvd3Nlci5pc0Nocm9taXVtKCkpICYmIGRlbHRhU2l6ZSA8IDApIHtcbiAgICAgIHJlc2l6ZShlZGl0b3IsIG9sZFNpemUsIHRyaWdnZXIsIGdldEV4dHJhTWFyZ2luQm90dG9tKTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IHNldHVwID0gKGVkaXRvcjogRWRpdG9yLCBvbGRTaXplOiBDZWxsPFJlc2l6ZURhdGE+KTogdm9pZCA9PiB7XG4gIGNvbnN0IGdldEV4dHJhTWFyZ2luQm90dG9tID0gKCkgPT4gT3B0aW9ucy5nZXRBdXRvUmVzaXplQm90dG9tTWFyZ2luKGVkaXRvcik7XG5cbiAgZWRpdG9yLm9uKCdpbml0JywgKGUpID0+IHtcbiAgICBjb25zdCBvdmVyZmxvd1BhZGRpbmcgPSBPcHRpb25zLmdldEF1dG9SZXNpemVPdmVyZmxvd1BhZGRpbmcoZWRpdG9yKTtcbiAgICBjb25zdCBkb20gPSBlZGl0b3IuZG9tO1xuXG4gICAgLy8gRGlzYWJsZSBoZWlnaHQgMTAwJSBvbiB0aGUgcm9vdCBkb2N1bWVudCBlbGVtZW50IG90aGVyd2lzZSB3ZSdsbCBlbmQgdXAgcmVzaXppbmcgaW5kZWZpbml0ZWx5XG4gICAgZG9tLnNldFN0eWxlcyhlZGl0b3IuZ2V0RG9jKCkuZG9jdW1lbnRFbGVtZW50LCB7XG4gICAgICBoZWlnaHQ6ICdhdXRvJ1xuICAgIH0pO1xuXG4gICAgaWYgKEVudi5icm93c2VyLmlzRWRnZSgpIHx8IEVudi5icm93c2VyLmlzSUUoKSkge1xuICAgICAgZG9tLnNldFN0eWxlcyhlZGl0b3IuZ2V0Qm9keSgpLCB7XG4gICAgICAgICdwYWRkaW5nTGVmdCc6IG92ZXJmbG93UGFkZGluZyxcbiAgICAgICAgJ3BhZGRpbmdSaWdodCc6IG92ZXJmbG93UGFkZGluZyxcbiAgICAgICAgLy8gSUUgJiBFZGdlIGhhdmUgYSBtaW4gaGVpZ2h0IG9mIDE1MHB4IGJ5IGRlZmF1bHQgb24gdGhlIGJvZHksIHNvIG92ZXJyaWRlIHRoYXRcbiAgICAgICAgJ21pbi1oZWlnaHQnOiAwXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9tLnNldFN0eWxlcyhlZGl0b3IuZ2V0Qm9keSgpLCB7XG4gICAgICAgIHBhZGRpbmdMZWZ0OiBvdmVyZmxvd1BhZGRpbmcsXG4gICAgICAgIHBhZGRpbmdSaWdodDogb3ZlcmZsb3dQYWRkaW5nXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXNpemUoZWRpdG9yLCBvbGRTaXplLCBlLCBnZXRFeHRyYU1hcmdpbkJvdHRvbSk7XG4gIH0pO1xuXG4gIGVkaXRvci5vbignTm9kZUNoYW5nZSBTZXRDb250ZW50IGtleXVwIEZ1bGxzY3JlZW5TdGF0ZUNoYW5nZWQgUmVzaXplQ29udGVudCcsIChlKSA9PiB7XG4gICAgcmVzaXplKGVkaXRvciwgb2xkU2l6ZSwgZSwgZ2V0RXh0cmFNYXJnaW5Cb3R0b20pO1xuICB9KTtcbn07XG5cbmV4cG9ydCB0eXBlIHsgUmVzaXplRGF0YSB9O1xuZXhwb3J0IHsgcmVzaXplLCBzZXR1cCB9O1xuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG4gICAgICAgIGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcbiAgICAgICAgfVxuICAgIH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucnYgPSAoKSA9PiAoXCIxLjUuMlwiKSIsIl9fd2VicGFja19yZXF1aXJlX18ucnVpZCA9IFwiYnVuZGxlcj1yc3BhY2tAMS41LjJcIjtcbiIsImltcG9ydCBQbHVnaW4gZnJvbSAnLi9QbHVnaW4nO1xuXG5QbHVnaW4oKTtcblxuLyoqICoqKioqXG4gKiBETyBOT1QgRVhQT1JUIEFOWVRISU5HXG4gKlxuICogSUYgWU9VIERPIFJPTExVUCBXSUxMIExFQVZFIEEgR0xPQkFMIE9OIFRIRSBQQUdFXG4gKioqKioqKi9cbiJdLCJuYW1lcyI6WyJDZWxsIiwiaW5pdGlhbCIsInZhbHVlIiwiZ2V0Iiwic2V0IiwidiIsIlBsdWdpbk1hbmFnZXIiLCJDb21tYW5kcyIsIk9wdGlvbnMiLCJSZXNpemUiLCJlZGl0b3IiLCJvbGRTaXplIiwicmVnaXN0ZXIiLCJmaXJlUmVzaXplRWRpdG9yIiwib3B0aW9uIiwibmFtZSIsInJlZ2lzdGVyT3B0aW9uIiwiZ2V0TWluSGVpZ2h0IiwiZ2V0TWF4SGVpZ2h0IiwiZ2V0QXV0b1Jlc2l6ZU92ZXJmbG93UGFkZGluZyIsImdldEF1dG9SZXNpemVCb3R0b21NYXJnaW4iLCJFbnYiLCJFdmVudHMiLCJpc0Z1bGxzY3JlZW4iLCJ0b2dnbGVTY3JvbGxpbmciLCJzdGF0ZSIsImJvZHkiLCJwYXJzZUNzc1ZhbHVlVG9JbnQiLCJkb20iLCJlbG0iLCJjb21wdXRlZCIsInBhcnNlSW50IiwiaXNOYU4iLCJzaG91bGRTY3JvbGxJbnRvVmlldyIsInRyaWdnZXIiLCJzZXRDb250ZW50RXZlbnQiLCJyZXNpemUiLCJnZXRFeHRyYU1hcmdpbkJvdHRvbSIsImRvYyIsImRvY0VsZSIsInJlc2l6ZUJvdHRvbU1hcmdpbiIsIm1pbkhlaWdodCIsInJlc2l6ZUhlaWdodCIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsImNvbnRlbnRIZWlnaHQiLCJjb250YWluZXJIZWlnaHQiLCJjb250ZW50QXJlYUhlaWdodCIsImNocm9tZUhlaWdodCIsIm1heEhlaWdodCIsIm9sZCIsImRlbHRhU2l6ZSIsIndpbiIsInNldHVwIiwiZSIsIm92ZXJmbG93UGFkZGluZyIsIlBsdWdpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLDZEQUFlLE1BQU0sRUFBQztBQUNmOzs7Ozs7Ozs7Ozs7OztBQ0hQOztBQUVBLDZEQUFlLE1BQU0sRUFBQztBQUNmOzs7Ozs7Ozs7Ozs7O0FDRUEsTUFBTUEsT0FBTyxDQUFJQztJQUN0QixJQUFJQyxRQUFRRDtJQUVaLE1BQU1FLE1BQU07UUFDVixPQUFPRDtJQUNUO0lBRUEsTUFBTUUsTUFBTSxDQUFDQztRQUNYSCxRQUFRRztJQUNWO0lBRUEsT0FBTztRQUNMRjtRQUNBQztJQUNGO0FBQ0YsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJxQztBQUVvQjtBQUVoQjtBQUNGO0FBQ0Q7QUFFeEM7Ozs7O0NBS0MsR0FFRCw2REFBZ0I7SUFDZEUsMEVBQWlC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