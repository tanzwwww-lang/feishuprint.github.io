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
"./src/plugins/insertdatetime/main/ts/Plugin.ts": 
/*!******************************************************!*\
  !*** ./src/plugins/insertdatetime/main/ts/Plugin.ts ***!
  \******************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var tinymce_core_api_PluginManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/PluginManager */ "./lib/globals/tinymce/core/api/PluginManager.js");
/* ESM import */var _api_Commands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/Commands */ "./src/plugins/insertdatetime/main/ts/api/Commands.ts");
/* ESM import */var _api_Options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/Options */ "./src/plugins/insertdatetime/main/ts/api/Options.ts");
/* ESM import */var _ui_Buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/Buttons */ "./src/plugins/insertdatetime/main/ts/ui/Buttons.ts");




/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>{
    tinymce_core_api_PluginManager__WEBPACK_IMPORTED_MODULE_0__["default"].add('insertdatetime', (editor)=>{
        _api_Options__WEBPACK_IMPORTED_MODULE_2__.register(editor);
        _api_Commands__WEBPACK_IMPORTED_MODULE_1__.register(editor);
        _ui_Buttons__WEBPACK_IMPORTED_MODULE_3__.register(editor);
    });
});


}),
"./src/plugins/insertdatetime/main/ts/api/Commands.ts": 
/*!************************************************************!*\
  !*** ./src/plugins/insertdatetime/main/ts/api/Commands.ts ***!
  \************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  register: () => (register)
});
/* ESM import */var _core_Actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Actions */ "./src/plugins/insertdatetime/main/ts/core/Actions.ts");
/* ESM import */var _Options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Options */ "./src/plugins/insertdatetime/main/ts/api/Options.ts");


const register = (editor)=>{
    editor.addCommand('mceInsertDate', (_ui, value)=>{
        _core_Actions__WEBPACK_IMPORTED_MODULE_0__.insertDateTime(editor, value ?? _Options__WEBPACK_IMPORTED_MODULE_1__.getDateFormat(editor));
    });
    editor.addCommand('mceInsertTime', (_ui, value)=>{
        _core_Actions__WEBPACK_IMPORTED_MODULE_0__.insertDateTime(editor, value ?? _Options__WEBPACK_IMPORTED_MODULE_1__.getTimeFormat(editor));
    });
};



}),
"./src/plugins/insertdatetime/main/ts/api/Options.ts": 
/*!***********************************************************!*\
  !*** ./src/plugins/insertdatetime/main/ts/api/Options.ts ***!
  \***********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getDateFormat: () => (getDateFormat),
  getDefaultDateTime: () => (getDefaultDateTime),
  getFormats: () => (getFormats),
  getTimeFormat: () => (getTimeFormat),
  register: () => (register),
  shouldInsertTimeElement: () => (shouldInsertTimeElement)
});
const option = (name)=>(editor)=>editor.options.get(name);
const register = (editor)=>{
    const registerOption = editor.options.register;
    registerOption('insertdatetime_dateformat', {
        processor: 'string',
        default: editor.translate('%Y-%m-%d')
    });
    registerOption('insertdatetime_timeformat', {
        processor: 'string',
        default: editor.translate('%H:%M:%S')
    });
    registerOption('insertdatetime_formats', {
        processor: 'string[]',
        default: [
            '%H:%M:%S',
            '%Y-%m-%d',
            '%I:%M:%S %p',
            '%D'
        ]
    });
    registerOption('insertdatetime_element', {
        processor: 'boolean',
        default: false
    });
};
const getDateFormat = option('insertdatetime_dateformat');
const getTimeFormat = option('insertdatetime_timeformat');
const getFormats = option('insertdatetime_formats');
const shouldInsertTimeElement = option('insertdatetime_element');
const getDefaultDateTime = (editor)=>{
    const formats = getFormats(editor);
    return formats.length > 0 ? formats[0] : getTimeFormat(editor);
};



}),
"./src/plugins/insertdatetime/main/ts/core/Actions.ts": 
/*!************************************************************!*\
  !*** ./src/plugins/insertdatetime/main/ts/core/Actions.ts ***!
  \************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getDateTime: () => (getDateTime),
  insertDateTime: () => (insertDateTime)
});
/* ESM import */var _api_Options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/Options */ "./src/plugins/insertdatetime/main/ts/api/Options.ts");

const daysShort = 'Sun Mon Tue Wed Thu Fri Sat Sun'.split(' ');
const daysLong = 'Sunday Monday Tuesday Wednesday Thursday Friday Saturday Sunday'.split(' ');
const monthsShort = 'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'.split(' ');
const monthsLong = 'January February March April May June July August September October November December'.split(' ');
const addZeros = (value, len)=>{
    value = '' + value;
    if (value.length < len) {
        for(let i = 0; i < len - value.length; i++){
            value = '0' + value;
        }
    }
    return value;
};
const getDateTime = (editor, fmt, date = new Date())=>{
    fmt = fmt.replace('%D', '%m/%d/%Y');
    fmt = fmt.replace('%r', '%I:%M:%S %p');
    fmt = fmt.replace('%Y', '' + date.getFullYear());
    fmt = fmt.replace('%y', '' + date.getYear());
    fmt = fmt.replace('%m', addZeros(date.getMonth() + 1, 2));
    fmt = fmt.replace('%d', addZeros(date.getDate(), 2));
    fmt = fmt.replace('%H', '' + addZeros(date.getHours(), 2));
    fmt = fmt.replace('%M', '' + addZeros(date.getMinutes(), 2));
    fmt = fmt.replace('%S', '' + addZeros(date.getSeconds(), 2));
    fmt = fmt.replace('%I', '' + ((date.getHours() + 11) % 12 + 1));
    fmt = fmt.replace('%p', '' + (date.getHours() < 12 ? 'AM' : 'PM'));
    fmt = fmt.replace('%B', '' + editor.translate(monthsLong[date.getMonth()]));
    fmt = fmt.replace('%b', '' + editor.translate(monthsShort[date.getMonth()]));
    fmt = fmt.replace('%A', '' + editor.translate(daysLong[date.getDay()]));
    fmt = fmt.replace('%a', '' + editor.translate(daysShort[date.getDay()]));
    fmt = fmt.replace('%%', '%');
    return fmt;
};
const updateElement = (editor, timeElm, computerTime, userTime)=>{
    const newTimeElm = editor.dom.create('time', {
        datetime: computerTime
    }, userTime);
    editor.dom.replace(newTimeElm, timeElm);
    editor.selection.select(newTimeElm, true);
    editor.selection.collapse(false);
};
const insertDateTime = (editor, format)=>{
    if (_api_Options__WEBPACK_IMPORTED_MODULE_0__.shouldInsertTimeElement(editor) && editor.selection.isEditable()) {
        const userTime = getDateTime(editor, format);
        let computerTime;
        if (/%[HMSIp]/.test(format)) {
            computerTime = getDateTime(editor, '%Y-%m-%dT%H:%M');
        } else {
            computerTime = getDateTime(editor, '%Y-%m-%d');
        }
        const timeElm = editor.dom.getParent(editor.selection.getStart(), 'time');
        if (timeElm) {
            updateElement(editor, timeElm, computerTime, userTime);
        } else {
            editor.insertContent('<time datetime="' + computerTime + '">' + userTime + '</time>');
        }
    } else {
        editor.insertContent(getDateTime(editor, format));
    }
};



}),
"./src/plugins/insertdatetime/main/ts/ui/Buttons.ts": 
/*!**********************************************************!*\
  !*** ./src/plugins/insertdatetime/main/ts/ui/Buttons.ts ***!
  \**********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  register: () => (register)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Cell.ts");
/* ESM import */var tinymce_core_api_util_Tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/util/Tools */ "./lib/globals/tinymce/core/api/util/Tools.js");
/* ESM import */var _api_Options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/Options */ "./src/plugins/insertdatetime/main/ts/api/Options.ts");
/* ESM import */var _core_Actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/Actions */ "./src/plugins/insertdatetime/main/ts/core/Actions.ts");




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
    const formats = _api_Options__WEBPACK_IMPORTED_MODULE_1__.getFormats(editor);
    const defaultFormat = (0,_ephox_katamari__WEBPACK_IMPORTED_MODULE_3__.Cell)(_api_Options__WEBPACK_IMPORTED_MODULE_1__.getDefaultDateTime(editor));
    const insertDateTime = (format)=>editor.execCommand('mceInsertDate', false, format);
    editor.ui.registry.addSplitButton('insertdatetime', {
        icon: 'insert-time',
        tooltip: 'Insert date/time',
        chevronTooltip: 'Insert date/time menu',
        select: (value)=>value === defaultFormat.get(),
        fetch: (done)=>{
            done(tinymce_core_api_util_Tools__WEBPACK_IMPORTED_MODULE_0__["default"].map(formats, (format)=>({
                    type: 'choiceitem',
                    text: _core_Actions__WEBPACK_IMPORTED_MODULE_2__.getDateTime(editor, format),
                    value: format
                })));
        },
        onAction: (_api)=>{
            insertDateTime(defaultFormat.get());
        },
        onItemAction: (_api, value)=>{
            defaultFormat.set(value);
            insertDateTime(value);
        },
        onSetup: onSetupEditable(editor)
    });
    const makeMenuItemHandler = (format)=>()=>{
            defaultFormat.set(format);
            insertDateTime(format);
        };
    editor.ui.registry.addNestedMenuItem('insertdatetime', {
        icon: 'insert-time',
        text: 'Date/time',
        getSubmenuItems: ()=>tinymce_core_api_util_Tools__WEBPACK_IMPORTED_MODULE_0__["default"].map(formats, (format)=>({
                    type: 'menuitem',
                    text: _core_Actions__WEBPACK_IMPORTED_MODULE_2__.getDateTime(editor, format),
                    onAction: makeMenuItemHandler(format)
                })),
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

/*!****************************************************!*\
  !*** ./src/plugins/insertdatetime/main/ts/Main.ts ***!
  \****************************************************/
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _Plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Plugin */ "./src/plugins/insertdatetime/main/ts/Plugin.ts");

(0,_Plugin__WEBPACK_IMPORTED_MODULE_0__["default"])(); /** *****
 * DO NOT EXPORT ANYTHING
 *
 * IF YOU DO ROLLUP WILL LEAVE A GLOBAL ON THE PAGE
 *******/ 

})();

})()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdGlueW1jZS9wbHVnaW5zL2luc2VydGRhdGV0aW1lL3BsdWdpbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL3RpbnltY2UvLi9saWIvZ2xvYmFscy90aW55bWNlL2NvcmUvYXBpL1BsdWdpbk1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL2xpYi9nbG9iYWxzL3RpbnltY2UvY29yZS9hcGkvdXRpbC9Ub29scy5qcyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL2thdGFtYXJpL3NyYy9tYWluL3RzL2VwaG94L2thdGFtYXJpL2FwaS9DZWxsLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9pbnNlcnRkYXRldGltZS9tYWluL3RzL1BsdWdpbi50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvaW5zZXJ0ZGF0ZXRpbWUvbWFpbi90cy9hcGkvQ29tbWFuZHMudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL2luc2VydGRhdGV0aW1lL21haW4vdHMvYXBpL09wdGlvbnMudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL2luc2VydGRhdGV0aW1lL21haW4vdHMvY29yZS9BY3Rpb25zLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9pbnNlcnRkYXRldGltZS9tYWluL3RzL3VpL0J1dHRvbnMudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lX3Byb3BlcnR5X2dldHRlcnMiLCJ3ZWJwYWNrOi8vdGlueW1jZS93ZWJwYWNrL3J1bnRpbWUvaGFzX293bl9wcm9wZXJ0eSIsIndlYnBhY2s6Ly90aW55bWNlL3dlYnBhY2svcnVudGltZS9tYWtlX25hbWVzcGFjZV9vYmplY3QiLCJ3ZWJwYWNrOi8vdGlueW1jZS93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3ZlcnNpb24iLCJ3ZWJwYWNrOi8vdGlueW1jZS93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3VuaXF1ZV9pZCIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvaW5zZXJ0ZGF0ZXRpbWUvbWFpbi90cy9NYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBnbG9iYWwgPSB0aW55bWNlLnV0aWwuVG9vbHMucmVzb2x2ZSgndGlueW1jZS5QbHVnaW5NYW5hZ2VyJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGdsb2JhbDtcbmV4cG9ydCB2YXIgUGx1Z2luTWFuYWdlciA9IGdsb2JhbDtcbiIsInZhciBnbG9iYWwgPSB0aW55bWNlLnV0aWwuVG9vbHMucmVzb2x2ZSgndGlueW1jZS51dGlsLlRvb2xzJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGdsb2JhbDtcbmV4cG9ydCB2YXIgVG9vbHMgPSBnbG9iYWw7XG4iLCJleHBvcnQgaW50ZXJmYWNlIENlbGw8VD4ge1xuICByZWFkb25seSBnZXQ6ICgpID0+IFQ7XG4gIHJlYWRvbmx5IHNldDogKHZhbHVlOiBUKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgQ2VsbCA9IDxUPihpbml0aWFsOiBUKTogQ2VsbDxUPiA9PiB7XG4gIGxldCB2YWx1ZSA9IGluaXRpYWw7XG5cbiAgY29uc3QgZ2V0ID0gKCkgPT4ge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICBjb25zdCBzZXQgPSAodjogVCkgPT4ge1xuICAgIHZhbHVlID0gdjtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldCxcbiAgICBzZXRcbiAgfTtcbn07XG4iLCJpbXBvcnQgUGx1Z2luTWFuYWdlciBmcm9tICd0aW55bWNlL2NvcmUvYXBpL1BsdWdpbk1hbmFnZXInO1xuXG5pbXBvcnQgKiBhcyBDb21tYW5kcyBmcm9tICcuL2FwaS9Db21tYW5kcyc7XG5pbXBvcnQgKiBhcyBPcHRpb25zIGZyb20gJy4vYXBpL09wdGlvbnMnO1xuaW1wb3J0ICogYXMgQnV0dG9ucyBmcm9tICcuL3VpL0J1dHRvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCAoKTogdm9pZCA9PiB7XG4gIFBsdWdpbk1hbmFnZXIuYWRkKCdpbnNlcnRkYXRldGltZScsIChlZGl0b3IpID0+IHtcbiAgICBPcHRpb25zLnJlZ2lzdGVyKGVkaXRvcik7XG4gICAgQ29tbWFuZHMucmVnaXN0ZXIoZWRpdG9yKTtcbiAgICBCdXR0b25zLnJlZ2lzdGVyKGVkaXRvcik7XG4gIH0pO1xufTtcbiIsImltcG9ydCB0eXBlIEVkaXRvciBmcm9tICd0aW55bWNlL2NvcmUvYXBpL0VkaXRvcic7XG5cbmltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSAnLi4vY29yZS9BY3Rpb25zJztcblxuaW1wb3J0ICogYXMgT3B0aW9ucyBmcm9tICcuL09wdGlvbnMnO1xuXG5jb25zdCByZWdpc3RlciA9IChlZGl0b3I6IEVkaXRvcik6IHZvaWQgPT4ge1xuICBlZGl0b3IuYWRkQ29tbWFuZCgnbWNlSW5zZXJ0RGF0ZScsIChfdWksIHZhbHVlKSA9PiB7XG4gICAgQWN0aW9ucy5pbnNlcnREYXRlVGltZShlZGl0b3IsIHZhbHVlID8/IE9wdGlvbnMuZ2V0RGF0ZUZvcm1hdChlZGl0b3IpKTtcbiAgfSk7XG5cbiAgZWRpdG9yLmFkZENvbW1hbmQoJ21jZUluc2VydFRpbWUnLCAoX3VpLCB2YWx1ZSkgPT4ge1xuICAgIEFjdGlvbnMuaW5zZXJ0RGF0ZVRpbWUoZWRpdG9yLCB2YWx1ZSA/PyBPcHRpb25zLmdldFRpbWVGb3JtYXQoZWRpdG9yKSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHtcbiAgcmVnaXN0ZXJcbn07XG4iLCJpbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuaW1wb3J0IHR5cGUgeyBFZGl0b3JPcHRpb25zIH0gZnJvbSAndGlueW1jZS9jb3JlL2FwaS9PcHRpb25UeXBlcyc7XG5cbmNvbnN0IG9wdGlvbjoge1xuICA8SyBleHRlbmRzIGtleW9mIEVkaXRvck9wdGlvbnM+KG5hbWU6IEspOiAoZWRpdG9yOiBFZGl0b3IpID0+IEVkaXRvck9wdGlvbnNbS107XG4gIDxUPihuYW1lOiBzdHJpbmcpOiAoZWRpdG9yOiBFZGl0b3IpID0+IFQ7XG59ID0gKG5hbWU6IHN0cmluZykgPT4gKGVkaXRvcjogRWRpdG9yKSA9PlxuICBlZGl0b3Iub3B0aW9ucy5nZXQobmFtZSk7XG5cbmNvbnN0IHJlZ2lzdGVyID0gKGVkaXRvcjogRWRpdG9yKTogdm9pZCA9PiB7XG4gIGNvbnN0IHJlZ2lzdGVyT3B0aW9uID0gZWRpdG9yLm9wdGlvbnMucmVnaXN0ZXI7XG5cbiAgcmVnaXN0ZXJPcHRpb24oJ2luc2VydGRhdGV0aW1lX2RhdGVmb3JtYXQnLCB7XG4gICAgcHJvY2Vzc29yOiAnc3RyaW5nJyxcbiAgICBkZWZhdWx0OiBlZGl0b3IudHJhbnNsYXRlKCclWS0lbS0lZCcpXG4gIH0pO1xuXG4gIHJlZ2lzdGVyT3B0aW9uKCdpbnNlcnRkYXRldGltZV90aW1lZm9ybWF0Jywge1xuICAgIHByb2Nlc3NvcjogJ3N0cmluZycsXG4gICAgZGVmYXVsdDogZWRpdG9yLnRyYW5zbGF0ZSgnJUg6JU06JVMnKVxuICB9KTtcblxuICByZWdpc3Rlck9wdGlvbignaW5zZXJ0ZGF0ZXRpbWVfZm9ybWF0cycsIHtcbiAgICBwcm9jZXNzb3I6ICdzdHJpbmdbXScsXG4gICAgZGVmYXVsdDogWyAnJUg6JU06JVMnLCAnJVktJW0tJWQnLCAnJUk6JU06JVMgJXAnLCAnJUQnIF1cbiAgfSk7XG5cbiAgcmVnaXN0ZXJPcHRpb24oJ2luc2VydGRhdGV0aW1lX2VsZW1lbnQnLCB7XG4gICAgcHJvY2Vzc29yOiAnYm9vbGVhbicsXG4gICAgZGVmYXVsdDogZmFsc2VcbiAgfSk7XG59O1xuXG5jb25zdCBnZXREYXRlRm9ybWF0ID0gb3B0aW9uPHN0cmluZz4oJ2luc2VydGRhdGV0aW1lX2RhdGVmb3JtYXQnKTtcbmNvbnN0IGdldFRpbWVGb3JtYXQgPSBvcHRpb248c3RyaW5nPignaW5zZXJ0ZGF0ZXRpbWVfdGltZWZvcm1hdCcpO1xuY29uc3QgZ2V0Rm9ybWF0cyA9IG9wdGlvbjxzdHJpbmdbXT4oJ2luc2VydGRhdGV0aW1lX2Zvcm1hdHMnKTtcbmNvbnN0IHNob3VsZEluc2VydFRpbWVFbGVtZW50ID0gb3B0aW9uPGJvb2xlYW4+KCdpbnNlcnRkYXRldGltZV9lbGVtZW50Jyk7XG5cbmNvbnN0IGdldERlZmF1bHREYXRlVGltZSA9IChlZGl0b3I6IEVkaXRvcik6IHN0cmluZyA9PiB7XG4gIGNvbnN0IGZvcm1hdHMgPSBnZXRGb3JtYXRzKGVkaXRvcik7XG4gIHJldHVybiBmb3JtYXRzLmxlbmd0aCA+IDAgPyBmb3JtYXRzWzBdIDogZ2V0VGltZUZvcm1hdChlZGl0b3IpO1xufTtcblxuZXhwb3J0IHtcbiAgcmVnaXN0ZXIsXG4gIGdldERhdGVGb3JtYXQsXG4gIGdldFRpbWVGb3JtYXQsXG4gIGdldEZvcm1hdHMsXG4gIGdldERlZmF1bHREYXRlVGltZSxcbiAgc2hvdWxkSW5zZXJ0VGltZUVsZW1lbnRcbn07XG4iLCJpbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuXG5pbXBvcnQgKiBhcyBPcHRpb25zIGZyb20gJy4uL2FwaS9PcHRpb25zJztcblxuY29uc3QgZGF5c1Nob3J0ID0gJ1N1biBNb24gVHVlIFdlZCBUaHUgRnJpIFNhdCBTdW4nLnNwbGl0KCcgJyk7XG5jb25zdCBkYXlzTG9uZyA9ICdTdW5kYXkgTW9uZGF5IFR1ZXNkYXkgV2VkbmVzZGF5IFRodXJzZGF5IEZyaWRheSBTYXR1cmRheSBTdW5kYXknLnNwbGl0KCcgJyk7XG5jb25zdCBtb250aHNTaG9ydCA9ICdKYW4gRmViIE1hciBBcHIgTWF5IEp1biBKdWwgQXVnIFNlcCBPY3QgTm92IERlYycuc3BsaXQoJyAnKTtcbmNvbnN0IG1vbnRoc0xvbmcgPSAnSmFudWFyeSBGZWJydWFyeSBNYXJjaCBBcHJpbCBNYXkgSnVuZSBKdWx5IEF1Z3VzdCBTZXB0ZW1iZXIgT2N0b2JlciBOb3ZlbWJlciBEZWNlbWJlcicuc3BsaXQoJyAnKTtcblxuY29uc3QgYWRkWmVyb3MgPSAodmFsdWU6IHN0cmluZyB8IG51bWJlciwgbGVuOiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuICB2YWx1ZSA9ICcnICsgdmFsdWU7XG5cbiAgaWYgKHZhbHVlLmxlbmd0aCA8IGxlbikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKGxlbiAtIHZhbHVlLmxlbmd0aCk7IGkrKykge1xuICAgICAgdmFsdWUgPSAnMCcgKyB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59O1xuXG5jb25zdCBnZXREYXRlVGltZSA9IChlZGl0b3I6IEVkaXRvciwgZm10OiBzdHJpbmcsIGRhdGU6IERhdGUgPSBuZXcgRGF0ZSgpKTogc3RyaW5nID0+IHtcbiAgZm10ID0gZm10LnJlcGxhY2UoJyVEJywgJyVtLyVkLyVZJyk7XG4gIGZtdCA9IGZtdC5yZXBsYWNlKCclcicsICclSTolTTolUyAlcCcpO1xuICBmbXQgPSBmbXQucmVwbGFjZSgnJVknLCAnJyArIGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIGZtdCA9IGZtdC5yZXBsYWNlKCcleScsICcnICsgKGRhdGUgYXMgYW55KS5nZXRZZWFyKCkpO1xuICBmbXQgPSBmbXQucmVwbGFjZSgnJW0nLCBhZGRaZXJvcyhkYXRlLmdldE1vbnRoKCkgKyAxLCAyKSk7XG4gIGZtdCA9IGZtdC5yZXBsYWNlKCclZCcsIGFkZFplcm9zKGRhdGUuZ2V0RGF0ZSgpLCAyKSk7XG4gIGZtdCA9IGZtdC5yZXBsYWNlKCclSCcsICcnICsgYWRkWmVyb3MoZGF0ZS5nZXRIb3VycygpLCAyKSk7XG4gIGZtdCA9IGZtdC5yZXBsYWNlKCclTScsICcnICsgYWRkWmVyb3MoZGF0ZS5nZXRNaW51dGVzKCksIDIpKTtcbiAgZm10ID0gZm10LnJlcGxhY2UoJyVTJywgJycgKyBhZGRaZXJvcyhkYXRlLmdldFNlY29uZHMoKSwgMikpO1xuICBmbXQgPSBmbXQucmVwbGFjZSgnJUknLCAnJyArICgoZGF0ZS5nZXRIb3VycygpICsgMTEpICUgMTIgKyAxKSk7XG4gIGZtdCA9IGZtdC5yZXBsYWNlKCclcCcsICcnICsgKGRhdGUuZ2V0SG91cnMoKSA8IDEyID8gJ0FNJyA6ICdQTScpKTtcbiAgZm10ID0gZm10LnJlcGxhY2UoJyVCJywgJycgKyBlZGl0b3IudHJhbnNsYXRlKG1vbnRoc0xvbmdbZGF0ZS5nZXRNb250aCgpXSkpO1xuICBmbXQgPSBmbXQucmVwbGFjZSgnJWInLCAnJyArIGVkaXRvci50cmFuc2xhdGUobW9udGhzU2hvcnRbZGF0ZS5nZXRNb250aCgpXSkpO1xuICBmbXQgPSBmbXQucmVwbGFjZSgnJUEnLCAnJyArIGVkaXRvci50cmFuc2xhdGUoZGF5c0xvbmdbZGF0ZS5nZXREYXkoKV0pKTtcbiAgZm10ID0gZm10LnJlcGxhY2UoJyVhJywgJycgKyBlZGl0b3IudHJhbnNsYXRlKGRheXNTaG9ydFtkYXRlLmdldERheSgpXSkpO1xuICBmbXQgPSBmbXQucmVwbGFjZSgnJSUnLCAnJScpO1xuXG4gIHJldHVybiBmbXQ7XG59O1xuXG5jb25zdCB1cGRhdGVFbGVtZW50ID0gKGVkaXRvcjogRWRpdG9yLCB0aW1lRWxtOiBIVE1MVGltZUVsZW1lbnQsIGNvbXB1dGVyVGltZTogc3RyaW5nLCB1c2VyVGltZTogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IG5ld1RpbWVFbG0gPSBlZGl0b3IuZG9tLmNyZWF0ZSgndGltZScsIHsgZGF0ZXRpbWU6IGNvbXB1dGVyVGltZSB9LCB1c2VyVGltZSk7XG4gIGVkaXRvci5kb20ucmVwbGFjZShuZXdUaW1lRWxtLCB0aW1lRWxtKTtcbiAgZWRpdG9yLnNlbGVjdGlvbi5zZWxlY3QobmV3VGltZUVsbSwgdHJ1ZSk7XG4gIGVkaXRvci5zZWxlY3Rpb24uY29sbGFwc2UoZmFsc2UpO1xufTtcblxuY29uc3QgaW5zZXJ0RGF0ZVRpbWUgPSAoZWRpdG9yOiBFZGl0b3IsIGZvcm1hdDogc3RyaW5nKTogdm9pZCA9PiB7XG4gIGlmIChPcHRpb25zLnNob3VsZEluc2VydFRpbWVFbGVtZW50KGVkaXRvcikgJiYgZWRpdG9yLnNlbGVjdGlvbi5pc0VkaXRhYmxlKCkpIHtcbiAgICBjb25zdCB1c2VyVGltZSA9IGdldERhdGVUaW1lKGVkaXRvciwgZm9ybWF0KTtcbiAgICBsZXQgY29tcHV0ZXJUaW1lO1xuXG4gICAgaWYgKC8lW0hNU0lwXS8udGVzdChmb3JtYXQpKSB7XG4gICAgICBjb21wdXRlclRpbWUgPSBnZXREYXRlVGltZShlZGl0b3IsICclWS0lbS0lZFQlSDolTScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb21wdXRlclRpbWUgPSBnZXREYXRlVGltZShlZGl0b3IsICclWS0lbS0lZCcpO1xuICAgIH1cblxuICAgIGNvbnN0IHRpbWVFbG0gPSBlZGl0b3IuZG9tLmdldFBhcmVudChlZGl0b3Iuc2VsZWN0aW9uLmdldFN0YXJ0KCksICd0aW1lJyk7XG5cbiAgICBpZiAodGltZUVsbSkge1xuICAgICAgdXBkYXRlRWxlbWVudChlZGl0b3IsIHRpbWVFbG0sIGNvbXB1dGVyVGltZSwgdXNlclRpbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlZGl0b3IuaW5zZXJ0Q29udGVudCgnPHRpbWUgZGF0ZXRpbWU9XCInICsgY29tcHV0ZXJUaW1lICsgJ1wiPicgKyB1c2VyVGltZSArICc8L3RpbWU+Jyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGVkaXRvci5pbnNlcnRDb250ZW50KGdldERhdGVUaW1lKGVkaXRvciwgZm9ybWF0KSk7XG4gIH1cbn07XG5cbmV4cG9ydCB7XG4gIGluc2VydERhdGVUaW1lLFxuICBnZXREYXRlVGltZVxufTtcbiIsImltcG9ydCB7IENlbGwgfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5pbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuaW1wb3J0IHR5cGUgeyBNZW51LCBUb29sYmFyIH0gZnJvbSAndGlueW1jZS9jb3JlL2FwaS91aS9VaSc7XG5pbXBvcnQgVG9vbHMgZnJvbSAndGlueW1jZS9jb3JlL2FwaS91dGlsL1Rvb2xzJztcblxuaW1wb3J0ICogYXMgT3B0aW9ucyBmcm9tICcuLi9hcGkvT3B0aW9ucyc7XG5pbXBvcnQgKiBhcyBBY3Rpb25zIGZyb20gJy4uL2NvcmUvQWN0aW9ucyc7XG5cbmNvbnN0IG9uU2V0dXBFZGl0YWJsZSA9IChlZGl0b3I6IEVkaXRvcikgPT4gKGFwaTogVG9vbGJhci5Ub29sYmFyQnV0dG9uSW5zdGFuY2VBcGkgfCBNZW51Lk1lbnVJdGVtSW5zdGFuY2VBcGkpOiBWb2lkRnVuY3Rpb24gPT4ge1xuICBjb25zdCBub2RlQ2hhbmdlZCA9ICgpID0+IHtcbiAgICBhcGkuc2V0RW5hYmxlZChlZGl0b3Iuc2VsZWN0aW9uLmlzRWRpdGFibGUoKSk7XG4gIH07XG5cbiAgZWRpdG9yLm9uKCdOb2RlQ2hhbmdlJywgbm9kZUNoYW5nZWQpO1xuICBub2RlQ2hhbmdlZCgpO1xuXG4gIHJldHVybiAoKSA9PiB7XG4gICAgZWRpdG9yLm9mZignTm9kZUNoYW5nZScsIG5vZGVDaGFuZ2VkKTtcbiAgfTtcbn07XG5cbmNvbnN0IHJlZ2lzdGVyID0gKGVkaXRvcjogRWRpdG9yKTogdm9pZCA9PiB7XG4gIGNvbnN0IGZvcm1hdHMgPSBPcHRpb25zLmdldEZvcm1hdHMoZWRpdG9yKTtcbiAgY29uc3QgZGVmYXVsdEZvcm1hdCA9IENlbGwoT3B0aW9ucy5nZXREZWZhdWx0RGF0ZVRpbWUoZWRpdG9yKSk7XG5cbiAgY29uc3QgaW5zZXJ0RGF0ZVRpbWUgPSAoZm9ybWF0OiBzdHJpbmcpID0+IGVkaXRvci5leGVjQ29tbWFuZCgnbWNlSW5zZXJ0RGF0ZScsIGZhbHNlLCBmb3JtYXQpO1xuXG4gIGVkaXRvci51aS5yZWdpc3RyeS5hZGRTcGxpdEJ1dHRvbignaW5zZXJ0ZGF0ZXRpbWUnLCB7XG4gICAgaWNvbjogJ2luc2VydC10aW1lJyxcbiAgICB0b29sdGlwOiAnSW5zZXJ0IGRhdGUvdGltZScsXG4gICAgY2hldnJvblRvb2x0aXA6ICdJbnNlcnQgZGF0ZS90aW1lIG1lbnUnLFxuICAgIHNlbGVjdDogKHZhbHVlKSA9PiB2YWx1ZSA9PT0gZGVmYXVsdEZvcm1hdC5nZXQoKSxcbiAgICBmZXRjaDogKGRvbmUpID0+IHtcbiAgICAgIGRvbmUoVG9vbHMubWFwKGZvcm1hdHMsIChmb3JtYXQpOiBNZW51LkNob2ljZU1lbnVJdGVtU3BlYyA9PlxuICAgICAgICAoeyB0eXBlOiAnY2hvaWNlaXRlbScsIHRleHQ6IEFjdGlvbnMuZ2V0RGF0ZVRpbWUoZWRpdG9yLCBmb3JtYXQpLCB2YWx1ZTogZm9ybWF0IH0pXG4gICAgICApKTtcbiAgICB9LFxuICAgIG9uQWN0aW9uOiAoX2FwaSkgPT4ge1xuICAgICAgaW5zZXJ0RGF0ZVRpbWUoZGVmYXVsdEZvcm1hdC5nZXQoKSk7XG4gICAgfSxcbiAgICBvbkl0ZW1BY3Rpb246IChfYXBpLCB2YWx1ZSkgPT4ge1xuICAgICAgZGVmYXVsdEZvcm1hdC5zZXQodmFsdWUpO1xuICAgICAgaW5zZXJ0RGF0ZVRpbWUodmFsdWUpO1xuICAgIH0sXG4gICAgb25TZXR1cDogb25TZXR1cEVkaXRhYmxlKGVkaXRvcilcbiAgfSk7XG5cbiAgY29uc3QgbWFrZU1lbnVJdGVtSGFuZGxlciA9IChmb3JtYXQ6IHN0cmluZykgPT4gKCk6IHZvaWQgPT4ge1xuICAgIGRlZmF1bHRGb3JtYXQuc2V0KGZvcm1hdCk7XG4gICAgaW5zZXJ0RGF0ZVRpbWUoZm9ybWF0KTtcbiAgfTtcblxuICBlZGl0b3IudWkucmVnaXN0cnkuYWRkTmVzdGVkTWVudUl0ZW0oJ2luc2VydGRhdGV0aW1lJywge1xuICAgIGljb246ICdpbnNlcnQtdGltZScsXG4gICAgdGV4dDogJ0RhdGUvdGltZScsXG4gICAgZ2V0U3VibWVudUl0ZW1zOiAoKSA9PiBUb29scy5tYXAoZm9ybWF0cywgKGZvcm1hdCk6IE1lbnUuTWVudUl0ZW1TcGVjID0+ICh7XG4gICAgICB0eXBlOiAnbWVudWl0ZW0nLFxuICAgICAgdGV4dDogQWN0aW9ucy5nZXREYXRlVGltZShlZGl0b3IsIGZvcm1hdCksXG4gICAgICBvbkFjdGlvbjogbWFrZU1lbnVJdGVtSGFuZGxlcihmb3JtYXQpXG4gICAgfSkpLFxuICAgIG9uU2V0dXA6IG9uU2V0dXBFZGl0YWJsZShlZGl0b3IpXG4gIH0pO1xufTtcblxuZXhwb3J0IHtcbiAgcmVnaXN0ZXJcbn07XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG4gICAgICAgIGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcbiAgICAgICAgfVxuICAgIH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucnYgPSAoKSA9PiAoXCIxLjUuMlwiKSIsIl9fd2VicGFja19yZXF1aXJlX18ucnVpZCA9IFwiYnVuZGxlcj1yc3BhY2tAMS41LjJcIjtcbiIsImltcG9ydCBQbHVnaW4gZnJvbSAnLi9QbHVnaW4nO1xuXG5QbHVnaW4oKTtcblxuLyoqICoqKioqXG4gKiBETyBOT1QgRVhQT1JUIEFOWVRISU5HXG4gKlxuICogSUYgWU9VIERPIFJPTExVUCBXSUxMIExFQVZFIEEgR0xPQkFMIE9OIFRIRSBQQUdFXG4gKioqKioqKi9cbiJdLCJuYW1lcyI6WyJDZWxsIiwiaW5pdGlhbCIsInZhbHVlIiwiZ2V0Iiwic2V0IiwidiIsIlBsdWdpbk1hbmFnZXIiLCJDb21tYW5kcyIsIk9wdGlvbnMiLCJCdXR0b25zIiwiZWRpdG9yIiwiQWN0aW9ucyIsInJlZ2lzdGVyIiwiX3VpIiwib3B0aW9uIiwibmFtZSIsInJlZ2lzdGVyT3B0aW9uIiwiZ2V0RGF0ZUZvcm1hdCIsImdldFRpbWVGb3JtYXQiLCJnZXRGb3JtYXRzIiwic2hvdWxkSW5zZXJ0VGltZUVsZW1lbnQiLCJnZXREZWZhdWx0RGF0ZVRpbWUiLCJmb3JtYXRzIiwiZGF5c1Nob3J0IiwiZGF5c0xvbmciLCJtb250aHNTaG9ydCIsIm1vbnRoc0xvbmciLCJhZGRaZXJvcyIsImxlbiIsImkiLCJnZXREYXRlVGltZSIsImZtdCIsImRhdGUiLCJEYXRlIiwidXBkYXRlRWxlbWVudCIsInRpbWVFbG0iLCJjb21wdXRlclRpbWUiLCJ1c2VyVGltZSIsIm5ld1RpbWVFbG0iLCJpbnNlcnREYXRlVGltZSIsImZvcm1hdCIsIlRvb2xzIiwib25TZXR1cEVkaXRhYmxlIiwiYXBpIiwibm9kZUNoYW5nZWQiLCJkZWZhdWx0Rm9ybWF0IiwiZG9uZSIsIl9hcGkiLCJtYWtlTWVudUl0ZW1IYW5kbGVyIiwiUGx1Z2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsNkRBQWUsTUFBTSxFQUFDO0FBQ2Y7Ozs7Ozs7Ozs7Ozs7O0FDSFA7O0FBRUEsNkRBQWUsTUFBTSxFQUFDO0FBQ2Y7Ozs7Ozs7Ozs7Ozs7QUNFQSxNQUFNQSxPQUFPLENBQUlDO0lBQ3RCLElBQUlDLFFBQVFEO0lBRVosTUFBTUUsTUFBTTtRQUNWLE9BQU9EO0lBQ1Q7SUFFQSxNQUFNRSxNQUFNLENBQUNDO1FBQ1hILFFBQVFHO0lBQ1Y7SUFFQSxPQUFPO1FBQ0xGO1FBQ0FD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