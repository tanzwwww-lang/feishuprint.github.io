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
"./lib/globals/tinymce/core/api/dom/RangeUtils.js": 
/*!********************************************************!*\
  !*** ./lib/globals/tinymce/core/api/dom/RangeUtils.js ***!
  \********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  RangeUtils: () => (RangeUtils),
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
var global = tinymce.util.Tools.resolve('tinymce.dom.RangeUtils');

/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (global);
var RangeUtils = global;


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
"./src/plugins/anchor/main/ts/Plugin.ts": 
/*!**********************************************!*\
  !*** ./src/plugins/anchor/main/ts/Plugin.ts ***!
  \**********************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var tinymce_core_api_PluginManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/PluginManager */ "./lib/globals/tinymce/core/api/PluginManager.js");
/* ESM import */var _api_Commands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/Commands */ "./src/plugins/anchor/main/ts/api/Commands.ts");
/* ESM import */var _api_Options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/Options */ "./src/plugins/anchor/main/ts/api/Options.ts");
/* ESM import */var _core_FilterContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/FilterContent */ "./src/plugins/anchor/main/ts/core/FilterContent.ts");
/* ESM import */var _core_Formats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/Formats */ "./src/plugins/anchor/main/ts/core/Formats.ts");
/* ESM import */var _ui_Buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/Buttons */ "./src/plugins/anchor/main/ts/ui/Buttons.ts");






/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>{
    tinymce_core_api_PluginManager__WEBPACK_IMPORTED_MODULE_0__["default"].add('anchor', (editor)=>{
        _api_Options__WEBPACK_IMPORTED_MODULE_2__.register(editor);
        _core_FilterContent__WEBPACK_IMPORTED_MODULE_3__.setup(editor);
        _api_Commands__WEBPACK_IMPORTED_MODULE_1__.register(editor);
        _ui_Buttons__WEBPACK_IMPORTED_MODULE_5__.register(editor);
        editor.on('PreInit', ()=>{
            _core_Formats__WEBPACK_IMPORTED_MODULE_4__.registerFormats(editor);
        });
    });
});


}),
"./src/plugins/anchor/main/ts/api/Commands.ts": 
/*!****************************************************!*\
  !*** ./src/plugins/anchor/main/ts/api/Commands.ts ***!
  \****************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  register: () => (register)
});
/* ESM import */var _ui_Dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/Dialog */ "./src/plugins/anchor/main/ts/ui/Dialog.ts");

const register = (editor)=>{
    editor.addCommand('mceAnchor', ()=>{
        _ui_Dialog__WEBPACK_IMPORTED_MODULE_0__.open(editor);
    });
};



}),
"./src/plugins/anchor/main/ts/api/Options.ts": 
/*!***************************************************!*\
  !*** ./src/plugins/anchor/main/ts/api/Options.ts ***!
  \***************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  allowHtmlInNamedAnchor: () => (allowHtmlInNamedAnchor),
  register: () => (register)
});
const option = (name)=>(editor)=>editor.options.get(name);
const register = (editor)=>{
    const registerOption = editor.options.register;
    registerOption('allow_html_in_named_anchor', {
        processor: 'boolean',
        default: false
    });
};
const allowHtmlInNamedAnchor = option('allow_html_in_named_anchor');



}),
"./src/plugins/anchor/main/ts/core/Anchor.ts": 
/*!***************************************************!*\
  !*** ./src/plugins/anchor/main/ts/core/Anchor.ts ***!
  \***************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getId: () => (getId),
  insert: () => (insert),
  isValidId: () => (isValidId)
});
/* ESM import */var tinymce_core_api_dom_RangeUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/dom/RangeUtils */ "./lib/globals/tinymce/core/api/dom/RangeUtils.js");
/* ESM import */var tinymce_core_api_util_Tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tinymce/core/api/util/Tools */ "./lib/globals/tinymce/core/api/util/Tools.js");
/* ESM import */var _api_Options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/Options */ "./src/plugins/anchor/main/ts/api/Options.ts");
/* ESM import */var _Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Utils */ "./src/plugins/anchor/main/ts/core/Utils.ts");




const removeEmptyNamedAnchorsInSelection = (editor)=>{
    const dom = editor.dom;
    (0,tinymce_core_api_dom_RangeUtils__WEBPACK_IMPORTED_MODULE_0__["default"])(dom).walk(editor.selection.getRng(), (nodes)=>{
        tinymce_core_api_util_Tools__WEBPACK_IMPORTED_MODULE_1__["default"].each(nodes, (node)=>{
            if (_Utils__WEBPACK_IMPORTED_MODULE_3__.isEmptyNamedAnchor(node)) {
                dom.remove(node, false);
            }
        });
    });
};
const isValidId = (id)=>// Follows HTML4 rules: https://www.w3.org/TR/html401/types.html#type-id
    /^[A-Za-z][A-Za-z0-9\-:._]*$/.test(id);
const getNamedAnchor = (editor)=>editor.dom.getParent(editor.selection.getStart(), _Utils__WEBPACK_IMPORTED_MODULE_3__.namedAnchorSelector);
const getId = (editor)=>{
    const anchor = getNamedAnchor(editor);
    if (anchor) {
        return _Utils__WEBPACK_IMPORTED_MODULE_3__.getIdFromAnchor(anchor);
    } else {
        return '';
    }
};
const createAnchor = (editor, id)=>{
    editor.undoManager.transact(()=>{
        if (!_api_Options__WEBPACK_IMPORTED_MODULE_2__.allowHtmlInNamedAnchor(editor)) {
            editor.selection.collapse(true);
        }
        if (editor.selection.isCollapsed()) {
            editor.insertContent(editor.dom.createHTML('a', {
                id
            }));
        } else {
            // Remove any empty named anchors in the selection as they cannot be removed by the formatter since they are cef
            removeEmptyNamedAnchorsInSelection(editor);
            // Format is set up to truncate any partially selected named anchors so that they are not completely removed
            editor.formatter.remove('namedAnchor', undefined, undefined, true);
            // Insert new anchor using the formatter - will wrap selected content in anchor
            editor.formatter.apply('namedAnchor', {
                value: id
            });
            // Need to add visual classes to anchors if required
            editor.addVisual();
        }
    });
};
const updateAnchor = (editor, id, anchorElement)=>{
    anchorElement.removeAttribute('name');
    anchorElement.id = id;
    editor.addVisual(); // Need to add visual classes to anchors if required
    editor.undoManager.add();
};
const insert = (editor, id)=>{
    const anchor = getNamedAnchor(editor);
    if (anchor) {
        updateAnchor(editor, id, anchor);
    } else {
        createAnchor(editor, id);
    }
    editor.focus();
};



}),
"./src/plugins/anchor/main/ts/core/FilterContent.ts": 
/*!**********************************************************!*\
  !*** ./src/plugins/anchor/main/ts/core/FilterContent.ts ***!
  \**********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  setup: () => (setup)
});
/* ESM import */var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ "./src/plugins/anchor/main/ts/core/Utils.ts");

// Note: node.firstChild check is for the 'allow_html_in_named_anchor' setting
// Only want to add contenteditable attributes if there is no text within the anchor
const isNamedAnchorNode = (node)=>(0,_Utils__WEBPACK_IMPORTED_MODULE_0__.isEmptyString)(node.attr('href')) && !(0,_Utils__WEBPACK_IMPORTED_MODULE_0__.isEmptyString)(node.attr('id') || node.attr('name'));
const isEmptyNamedAnchorNode = (node)=>isNamedAnchorNode(node) && !node.firstChild;
const setContentEditable = (state)=>(nodes)=>{
        for(let i = 0; i < nodes.length; i++){
            const node = nodes[i];
            if (isEmptyNamedAnchorNode(node)) {
                node.attr('contenteditable', state);
            }
        }
    };
const setup = (editor)=>{
    editor.on('PreInit', ()=>{
        editor.parser.addNodeFilter('a', setContentEditable('false'));
        editor.serializer.addNodeFilter('a', setContentEditable(null));
    });
};



}),
"./src/plugins/anchor/main/ts/core/Formats.ts": 
/*!****************************************************!*\
  !*** ./src/plugins/anchor/main/ts/core/Formats.ts ***!
  \****************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  registerFormats: () => (registerFormats)
});
/* ESM import */var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ "./src/plugins/anchor/main/ts/core/Utils.ts");

const registerFormats = (editor)=>{
    editor.formatter.register('namedAnchor', {
        inline: 'a',
        selector: _Utils__WEBPACK_IMPORTED_MODULE_0__.namedAnchorSelector,
        remove: 'all',
        split: true,
        deep: true,
        attributes: {
            id: '%value'
        },
        onmatch: (node, _fmt, _itemName)=>{
            return _Utils__WEBPACK_IMPORTED_MODULE_0__.isNamedAnchor(node);
        }
    });
};



}),
"./src/plugins/anchor/main/ts/core/Utils.ts": 
/*!**************************************************!*\
  !*** ./src/plugins/anchor/main/ts/core/Utils.ts ***!
  \**************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getIdFromAnchor: () => (getIdFromAnchor),
  isEmptyNamedAnchor: () => (isEmptyNamedAnchor),
  isEmptyString: () => (isEmptyString),
  isNamedAnchor: () => (isNamedAnchor),
  namedAnchorSelector: () => (namedAnchorSelector)
});
const namedAnchorSelector = 'a:not([href])';
const isEmptyString = (str)=>!str;
const getIdFromAnchor = (elm)=>{
    const id = elm.getAttribute('id') || elm.getAttribute('name');
    return id || '';
};
const isAnchor = (elm)=>elm.nodeName.toLowerCase() === 'a';
const isNamedAnchor = (elm)=>isAnchor(elm) && !elm.getAttribute('href') && getIdFromAnchor(elm) !== '';
const isEmptyNamedAnchor = (elm)=>isNamedAnchor(elm) && !elm.firstChild;



}),
"./src/plugins/anchor/main/ts/ui/Buttons.ts": 
/*!**************************************************!*\
  !*** ./src/plugins/anchor/main/ts/ui/Buttons.ts ***!
  \**************************************************/
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
    const onAction = ()=>editor.execCommand('mceAnchor');
    editor.ui.registry.addToggleButton('anchor', {
        icon: 'bookmark',
        tooltip: 'Anchor',
        onAction,
        onSetup: (buttonApi)=>{
            const unbindSelectorChanged = editor.selection.selectorChangedWithUnbind('a:not([href])', buttonApi.setActive).unbind;
            const unbindEditableChanged = onSetupEditable(editor)(buttonApi);
            return ()=>{
                unbindSelectorChanged();
                unbindEditableChanged();
            };
        }
    });
    editor.ui.registry.addMenuItem('anchor', {
        icon: 'bookmark',
        text: 'Anchor...',
        onAction,
        onSetup: onSetupEditable(editor)
    });
};



}),
"./src/plugins/anchor/main/ts/ui/Dialog.ts": 
/*!*************************************************!*\
  !*** ./src/plugins/anchor/main/ts/ui/Dialog.ts ***!
  \*************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  open: () => (open)
});
/* ESM import */var _core_Anchor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Anchor */ "./src/plugins/anchor/main/ts/core/Anchor.ts");

const insertAnchor = (editor, newId)=>{
    if (!_core_Anchor__WEBPACK_IMPORTED_MODULE_0__.isValidId(newId)) {
        editor.windowManager.alert('ID should start with a letter, followed only by letters, numbers, dashes, dots, colons or underscores.');
        return false;
    } else {
        _core_Anchor__WEBPACK_IMPORTED_MODULE_0__.insert(editor, newId);
        return true;
    }
};
const open = (editor)=>{
    const currentId = _core_Anchor__WEBPACK_IMPORTED_MODULE_0__.getId(editor);
    editor.windowManager.open({
        title: 'Anchor',
        size: 'normal',
        body: {
            type: 'panel',
            items: [
                {
                    name: 'id',
                    type: 'input',
                    label: 'ID',
                    placeholder: 'example'
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
            id: currentId
        },
        onSubmit: (api)=>{
            if (insertAnchor(editor, api.getData().id)) {
                api.close();
            }
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

/*!********************************************!*\
  !*** ./src/plugins/anchor/main/ts/Main.ts ***!
  \********************************************/
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _Plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Plugin */ "./src/plugins/anchor/main/ts/Plugin.ts");

(0,_Plugin__WEBPACK_IMPORTED_MODULE_0__["default"])(); /** *****
 * DO NOT EXPORT ANYTHING
 *
 * IF YOU DO ROLLUP WILL LEAVE A GLOBAL ON THE PAGE
 *******/ 

})();

})()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdGlueW1jZS9wbHVnaW5zL2FuY2hvci9wbHVnaW4uanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aW55bWNlLy4vbGliL2dsb2JhbHMvdGlueW1jZS9jb3JlL2FwaS9QbHVnaW5NYW5hZ2VyLmpzIiwid2VicGFjazovL3RpbnltY2UvLi9saWIvZ2xvYmFscy90aW55bWNlL2NvcmUvYXBpL2RvbS9SYW5nZVV0aWxzLmpzIiwid2VicGFjazovL3RpbnltY2UvLi9saWIvZ2xvYmFscy90aW55bWNlL2NvcmUvYXBpL3V0aWwvVG9vbHMuanMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL2FuY2hvci9tYWluL3RzL1BsdWdpbi50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvYW5jaG9yL21haW4vdHMvYXBpL0NvbW1hbmRzLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9hbmNob3IvbWFpbi90cy9hcGkvT3B0aW9ucy50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvYW5jaG9yL21haW4vdHMvY29yZS9BbmNob3IudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL2FuY2hvci9tYWluL3RzL2NvcmUvRmlsdGVyQ29udGVudC50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvYW5jaG9yL21haW4vdHMvY29yZS9Gb3JtYXRzLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9hbmNob3IvbWFpbi90cy9jb3JlL1V0aWxzLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9hbmNob3IvbWFpbi90cy91aS9CdXR0b25zLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9hbmNob3IvbWFpbi90cy91aS9EaWFsb2cudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lX3Byb3BlcnR5X2dldHRlcnMiLCJ3ZWJwYWNrOi8vdGlueW1jZS93ZWJwYWNrL3J1bnRpbWUvaGFzX293bl9wcm9wZXJ0eSIsIndlYnBhY2s6Ly90aW55bWNlL3dlYnBhY2svcnVudGltZS9tYWtlX25hbWVzcGFjZV9vYmplY3QiLCJ3ZWJwYWNrOi8vdGlueW1jZS93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3ZlcnNpb24iLCJ3ZWJwYWNrOi8vdGlueW1jZS93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3VuaXF1ZV9pZCIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvYW5jaG9yL21haW4vdHMvTWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZ2xvYmFsID0gdGlueW1jZS51dGlsLlRvb2xzLnJlc29sdmUoJ3RpbnltY2UuUGx1Z2luTWFuYWdlcicpO1xuXG5leHBvcnQgZGVmYXVsdCBnbG9iYWw7XG5leHBvcnQgdmFyIFBsdWdpbk1hbmFnZXIgPSBnbG9iYWw7XG4iLCJ2YXIgZ2xvYmFsID0gdGlueW1jZS51dGlsLlRvb2xzLnJlc29sdmUoJ3RpbnltY2UuZG9tLlJhbmdlVXRpbHMnKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2xvYmFsO1xuZXhwb3J0IHZhciBSYW5nZVV0aWxzID0gZ2xvYmFsO1xuIiwidmFyIGdsb2JhbCA9IHRpbnltY2UudXRpbC5Ub29scy5yZXNvbHZlKCd0aW55bWNlLnV0aWwuVG9vbHMnKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2xvYmFsO1xuZXhwb3J0IHZhciBUb29scyA9IGdsb2JhbDtcbiIsImltcG9ydCBQbHVnaW5NYW5hZ2VyIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvUGx1Z2luTWFuYWdlcic7XG5cbmltcG9ydCAqIGFzIENvbW1hbmRzIGZyb20gJy4vYXBpL0NvbW1hbmRzJztcbmltcG9ydCAqIGFzIE9wdGlvbnMgZnJvbSAnLi9hcGkvT3B0aW9ucyc7XG5pbXBvcnQgKiBhcyBGaWx0ZXJDb250ZW50IGZyb20gJy4vY29yZS9GaWx0ZXJDb250ZW50JztcbmltcG9ydCAqIGFzIEZvcm1hdHMgZnJvbSAnLi9jb3JlL0Zvcm1hdHMnO1xuaW1wb3J0ICogYXMgQnV0dG9ucyBmcm9tICcuL3VpL0J1dHRvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCAoKTogdm9pZCA9PiB7XG4gIFBsdWdpbk1hbmFnZXIuYWRkKCdhbmNob3InLCAoZWRpdG9yKSA9PiB7XG4gICAgT3B0aW9ucy5yZWdpc3RlcihlZGl0b3IpO1xuICAgIEZpbHRlckNvbnRlbnQuc2V0dXAoZWRpdG9yKTtcbiAgICBDb21tYW5kcy5yZWdpc3RlcihlZGl0b3IpO1xuICAgIEJ1dHRvbnMucmVnaXN0ZXIoZWRpdG9yKTtcblxuICAgIGVkaXRvci5vbignUHJlSW5pdCcsICgpID0+IHtcbiAgICAgIEZvcm1hdHMucmVnaXN0ZXJGb3JtYXRzKGVkaXRvcik7XG4gICAgfSk7XG4gIH0pO1xufTtcbiIsImltcG9ydCB0eXBlIEVkaXRvciBmcm9tICd0aW55bWNlL2NvcmUvYXBpL0VkaXRvcic7XG5cbmltcG9ydCAqIGFzIERpYWxvZyBmcm9tICcuLi91aS9EaWFsb2cnO1xuXG5jb25zdCByZWdpc3RlciA9IChlZGl0b3I6IEVkaXRvcik6IHZvaWQgPT4ge1xuICBlZGl0b3IuYWRkQ29tbWFuZCgnbWNlQW5jaG9yJywgKCkgPT4ge1xuICAgIERpYWxvZy5vcGVuKGVkaXRvcik7XG4gIH0pO1xufTtcblxuZXhwb3J0IHtcbiAgcmVnaXN0ZXJcbn07XG4iLCJpbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuaW1wb3J0IHR5cGUgeyBFZGl0b3JPcHRpb25zIH0gZnJvbSAndGlueW1jZS9jb3JlL2FwaS9PcHRpb25UeXBlcyc7XG5cbmNvbnN0IG9wdGlvbjoge1xuICA8SyBleHRlbmRzIGtleW9mIEVkaXRvck9wdGlvbnM+KG5hbWU6IEspOiAoZWRpdG9yOiBFZGl0b3IpID0+IEVkaXRvck9wdGlvbnNbS107XG4gIDxUPihuYW1lOiBzdHJpbmcpOiAoZWRpdG9yOiBFZGl0b3IpID0+IFQ7XG59ID0gKG5hbWU6IHN0cmluZykgPT4gKGVkaXRvcjogRWRpdG9yKSA9PlxuICBlZGl0b3Iub3B0aW9ucy5nZXQobmFtZSk7XG5cbmNvbnN0IHJlZ2lzdGVyID0gKGVkaXRvcjogRWRpdG9yKTogdm9pZCA9PiB7XG4gIGNvbnN0IHJlZ2lzdGVyT3B0aW9uID0gZWRpdG9yLm9wdGlvbnMucmVnaXN0ZXI7XG5cbiAgcmVnaXN0ZXJPcHRpb24oJ2FsbG93X2h0bWxfaW5fbmFtZWRfYW5jaG9yJywge1xuICAgIHByb2Nlc3NvcjogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IGZhbHNlXG4gIH0pO1xufTtcblxuY29uc3QgYWxsb3dIdG1sSW5OYW1lZEFuY2hvciA9IG9wdGlvbjxib29sZWFuPignYWxsb3dfaHRtbF9pbl9uYW1lZF9hbmNob3InKTtcblxuZXhwb3J0IHtcbiAgcmVnaXN0ZXIsXG4gIGFsbG93SHRtbEluTmFtZWRBbmNob3Jcbn07XG4iLCJpbXBvcnQgUmFuZ2VVdGlscyBmcm9tICd0aW55bWNlL2NvcmUvYXBpL2RvbS9SYW5nZVV0aWxzJztcbmltcG9ydCB0eXBlIEVkaXRvciBmcm9tICd0aW55bWNlL2NvcmUvYXBpL0VkaXRvcic7XG5pbXBvcnQgVG9vbHMgZnJvbSAndGlueW1jZS9jb3JlL2FwaS91dGlsL1Rvb2xzJztcblxuaW1wb3J0ICogYXMgT3B0aW9ucyBmcm9tICcuLi9hcGkvT3B0aW9ucyc7XG5cbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gJy4vVXRpbHMnO1xuXG5jb25zdCByZW1vdmVFbXB0eU5hbWVkQW5jaG9yc0luU2VsZWN0aW9uID0gKGVkaXRvcjogRWRpdG9yKTogdm9pZCA9PiB7XG4gIGNvbnN0IGRvbSA9IGVkaXRvci5kb207XG4gIFJhbmdlVXRpbHMoZG9tKS53YWxrKGVkaXRvci5zZWxlY3Rpb24uZ2V0Um5nKCksIChub2RlcykgPT4ge1xuICAgIFRvb2xzLmVhY2gobm9kZXMsIChub2RlKSA9PiB7XG4gICAgICBpZiAoVXRpbHMuaXNFbXB0eU5hbWVkQW5jaG9yKG5vZGUpKSB7XG4gICAgICAgIGRvbS5yZW1vdmUobm9kZSwgZmFsc2UpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IGlzVmFsaWRJZCA9IChpZDogc3RyaW5nKTogYm9vbGVhbiA9PlxuICAvLyBGb2xsb3dzIEhUTUw0IHJ1bGVzOiBodHRwczovL3d3dy53My5vcmcvVFIvaHRtbDQwMS90eXBlcy5odG1sI3R5cGUtaWRcbiAgL15bQS1aYS16XVtBLVphLXowLTlcXC06Ll9dKiQvLnRlc3QoaWQpO1xuXG5jb25zdCBnZXROYW1lZEFuY2hvciA9IChlZGl0b3I6IEVkaXRvcik6IEhUTUxBbmNob3JFbGVtZW50IHwgbnVsbCA9PlxuICBlZGl0b3IuZG9tLmdldFBhcmVudDxIVE1MQW5jaG9yRWxlbWVudD4oZWRpdG9yLnNlbGVjdGlvbi5nZXRTdGFydCgpLCBVdGlscy5uYW1lZEFuY2hvclNlbGVjdG9yKTtcblxuY29uc3QgZ2V0SWQgPSAoZWRpdG9yOiBFZGl0b3IpOiBzdHJpbmcgPT4ge1xuICBjb25zdCBhbmNob3IgPSBnZXROYW1lZEFuY2hvcihlZGl0b3IpO1xuICBpZiAoYW5jaG9yKSB7XG4gICAgcmV0dXJuIFV0aWxzLmdldElkRnJvbUFuY2hvcihhbmNob3IpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJztcbiAgfVxufTtcblxuY29uc3QgY3JlYXRlQW5jaG9yID0gKGVkaXRvcjogRWRpdG9yLCBpZDogc3RyaW5nKTogdm9pZCA9PiB7XG4gIGVkaXRvci51bmRvTWFuYWdlci50cmFuc2FjdCgoKSA9PiB7XG4gICAgaWYgKCFPcHRpb25zLmFsbG93SHRtbEluTmFtZWRBbmNob3IoZWRpdG9yKSkge1xuICAgICAgZWRpdG9yLnNlbGVjdGlvbi5jb2xsYXBzZSh0cnVlKTtcbiAgICB9XG4gICAgaWYgKGVkaXRvci5zZWxlY3Rpb24uaXNDb2xsYXBzZWQoKSkge1xuICAgICAgZWRpdG9yLmluc2VydENvbnRlbnQoZWRpdG9yLmRvbS5jcmVhdGVIVE1MKCdhJywgeyBpZCB9KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlbW92ZSBhbnkgZW1wdHkgbmFtZWQgYW5jaG9ycyBpbiB0aGUgc2VsZWN0aW9uIGFzIHRoZXkgY2Fubm90IGJlIHJlbW92ZWQgYnkgdGhlIGZvcm1hdHRlciBzaW5jZSB0aGV5IGFyZSBjZWZcbiAgICAgIHJlbW92ZUVtcHR5TmFtZWRBbmNob3JzSW5TZWxlY3Rpb24oZWRpdG9yKTtcbiAgICAgIC8vIEZvcm1hdCBpcyBzZXQgdXAgdG8gdHJ1bmNhdGUgYW55IHBhcnRpYWxseSBzZWxlY3RlZCBuYW1lZCBhbmNob3JzIHNvIHRoYXQgdGhleSBhcmUgbm90IGNvbXBsZXRlbHkgcmVtb3ZlZFxuICAgICAgZWRpdG9yLmZvcm1hdHRlci5yZW1vdmUoJ25hbWVkQW5jaG9yJywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRydWUpO1xuICAgICAgLy8gSW5zZXJ0IG5ldyBhbmNob3IgdXNpbmcgdGhlIGZvcm1hdHRlciAtIHdpbGwgd3JhcCBzZWxlY3RlZCBjb250ZW50IGluIGFuY2hvclxuICAgICAgZWRpdG9yLmZvcm1hdHRlci5hcHBseSgnbmFtZWRBbmNob3InLCB7IHZhbHVlOiBpZCB9KTtcbiAgICAgIC8vIE5lZWQgdG8gYWRkIHZpc3VhbCBjbGFzc2VzIHRvIGFuY2hvcnMgaWYgcmVxdWlyZWRcbiAgICAgIGVkaXRvci5hZGRWaXN1YWwoKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgdXBkYXRlQW5jaG9yID0gKGVkaXRvcjogRWRpdG9yLCBpZDogc3RyaW5nLCBhbmNob3JFbGVtZW50OiBIVE1MQW5jaG9yRWxlbWVudCk6IHZvaWQgPT4ge1xuICBhbmNob3JFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnbmFtZScpO1xuICBhbmNob3JFbGVtZW50LmlkID0gaWQ7XG4gIGVkaXRvci5hZGRWaXN1YWwoKTsgLy8gTmVlZCB0byBhZGQgdmlzdWFsIGNsYXNzZXMgdG8gYW5jaG9ycyBpZiByZXF1aXJlZFxuICBlZGl0b3IudW5kb01hbmFnZXIuYWRkKCk7XG59O1xuXG5jb25zdCBpbnNlcnQgPSAoZWRpdG9yOiBFZGl0b3IsIGlkOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgY29uc3QgYW5jaG9yID0gZ2V0TmFtZWRBbmNob3IoZWRpdG9yKTtcbiAgaWYgKGFuY2hvcikge1xuICAgIHVwZGF0ZUFuY2hvcihlZGl0b3IsIGlkLCBhbmNob3IpO1xuICB9IGVsc2Uge1xuICAgIGNyZWF0ZUFuY2hvcihlZGl0b3IsIGlkKTtcbiAgfVxuICBlZGl0b3IuZm9jdXMoKTtcbn07XG5cbmV4cG9ydCB7XG4gIGlzVmFsaWRJZCxcbiAgZ2V0SWQsXG4gIGluc2VydFxufTtcbiIsImltcG9ydCB0eXBlIEVkaXRvciBmcm9tICd0aW55bWNlL2NvcmUvYXBpL0VkaXRvcic7XG5pbXBvcnQgdHlwZSBBc3ROb2RlIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvaHRtbC9Ob2RlJztcblxuaW1wb3J0IHsgaXNFbXB0eVN0cmluZyB9IGZyb20gJy4vVXRpbHMnO1xuXG4vLyBOb3RlOiBub2RlLmZpcnN0Q2hpbGQgY2hlY2sgaXMgZm9yIHRoZSAnYWxsb3dfaHRtbF9pbl9uYW1lZF9hbmNob3InIHNldHRpbmdcbi8vIE9ubHkgd2FudCB0byBhZGQgY29udGVudGVkaXRhYmxlIGF0dHJpYnV0ZXMgaWYgdGhlcmUgaXMgbm8gdGV4dCB3aXRoaW4gdGhlIGFuY2hvclxuY29uc3QgaXNOYW1lZEFuY2hvck5vZGUgPSAobm9kZTogQXN0Tm9kZSk6IGJvb2xlYW4gPT5cbiAgaXNFbXB0eVN0cmluZyhub2RlLmF0dHIoJ2hyZWYnKSkgJiYgIWlzRW1wdHlTdHJpbmcobm9kZS5hdHRyKCdpZCcpIHx8IG5vZGUuYXR0cignbmFtZScpKTtcblxuY29uc3QgaXNFbXB0eU5hbWVkQW5jaG9yTm9kZSA9IChub2RlOiBBc3ROb2RlKTogYm9vbGVhbiA9PlxuICBpc05hbWVkQW5jaG9yTm9kZShub2RlKSAmJiAhbm9kZS5maXJzdENoaWxkO1xuXG5jb25zdCBzZXRDb250ZW50RWRpdGFibGUgPSAoc3RhdGU6IHN0cmluZyB8IG51bGwpID0+IChub2RlczogQXN0Tm9kZVtdKTogdm9pZCA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBub2RlID0gbm9kZXNbaV07XG4gICAgaWYgKGlzRW1wdHlOYW1lZEFuY2hvck5vZGUobm9kZSkpIHtcbiAgICAgIG5vZGUuYXR0cignY29udGVudGVkaXRhYmxlJywgc3RhdGUpO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3Qgc2V0dXAgPSAoZWRpdG9yOiBFZGl0b3IpOiB2b2lkID0+IHtcbiAgZWRpdG9yLm9uKCdQcmVJbml0JywgKCkgPT4ge1xuICAgIGVkaXRvci5wYXJzZXIuYWRkTm9kZUZpbHRlcignYScsIHNldENvbnRlbnRFZGl0YWJsZSgnZmFsc2UnKSk7XG4gICAgZWRpdG9yLnNlcmlhbGl6ZXIuYWRkTm9kZUZpbHRlcignYScsIHNldENvbnRlbnRFZGl0YWJsZShudWxsKSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHtcbiAgc2V0dXBcbn07XG4iLCJpbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuaW1wb3J0IHR5cGUgeyBGb3JtYXQgfSBmcm9tICd0aW55bWNlL2NvcmUvZm10L0Zvcm1hdFR5cGVzJztcblxuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnLi9VdGlscyc7XG5cbmNvbnN0IHJlZ2lzdGVyRm9ybWF0cyA9IChlZGl0b3I6IEVkaXRvcik6IHZvaWQgPT4ge1xuICBlZGl0b3IuZm9ybWF0dGVyLnJlZ2lzdGVyKCduYW1lZEFuY2hvcicsIHtcbiAgICBpbmxpbmU6ICdhJyxcbiAgICBzZWxlY3RvcjogVXRpbHMubmFtZWRBbmNob3JTZWxlY3RvcixcbiAgICByZW1vdmU6ICdhbGwnLFxuICAgIHNwbGl0OiB0cnVlLFxuICAgIGRlZXA6IHRydWUsXG4gICAgYXR0cmlidXRlczoge1xuICAgICAgaWQ6ICcldmFsdWUnXG4gICAgfSxcbiAgICBvbm1hdGNoOiAobm9kZTogTm9kZSwgX2ZtdDogRm9ybWF0LCBfaXRlbU5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgcmV0dXJuIFV0aWxzLmlzTmFtZWRBbmNob3Iobm9kZSk7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCB7XG4gIHJlZ2lzdGVyRm9ybWF0c1xufTtcbiIsImNvbnN0IG5hbWVkQW5jaG9yU2VsZWN0b3IgPSAnYTpub3QoW2hyZWZdKSc7XG5cbmNvbnN0IGlzRW1wdHlTdHJpbmcgPSAoc3RyOiBzdHJpbmcgfCB1bmRlZmluZWQpOiBib29sZWFuID0+ICFzdHI7XG5cbmNvbnN0IGdldElkRnJvbUFuY2hvciA9IChlbG06IEhUTUxBbmNob3JFbGVtZW50KTogc3RyaW5nID0+IHtcbiAgY29uc3QgaWQgPSBlbG0uZ2V0QXR0cmlidXRlKCdpZCcpIHx8IGVsbS5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgcmV0dXJuIGlkIHx8ICcnO1xufTtcblxuY29uc3QgaXNBbmNob3IgPSAoZWxtOiBOb2RlKTogZWxtIGlzIEhUTUxBbmNob3JFbGVtZW50ID0+XG4gIGVsbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnYSc7XG5cbmNvbnN0IGlzTmFtZWRBbmNob3IgPSAoZWxtOiBOb2RlKTogZWxtIGlzIEhUTUxBbmNob3JFbGVtZW50ID0+XG4gIGlzQW5jaG9yKGVsbSkgJiYgIWVsbS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSAmJiBnZXRJZEZyb21BbmNob3IoZWxtKSAhPT0gJyc7XG5cbmNvbnN0IGlzRW1wdHlOYW1lZEFuY2hvciA9IChlbG06IE5vZGUpOiBlbG0gaXMgSFRNTEFuY2hvckVsZW1lbnQgPT5cbiAgaXNOYW1lZEFuY2hvcihlbG0pICYmICFlbG0uZmlyc3RDaGlsZDtcblxuZXhwb3J0IHtcbiAgbmFtZWRBbmNob3JTZWxlY3RvcixcbiAgaXNFbXB0eVN0cmluZyxcbiAgZ2V0SWRGcm9tQW5jaG9yLFxuICBpc05hbWVkQW5jaG9yLFxuICBpc0VtcHR5TmFtZWRBbmNob3Jcbn07XG4iLCJpbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuaW1wb3J0IHR5cGUgeyBNZW51LCBUb29sYmFyIH0gZnJvbSAndGlueW1jZS9jb3JlL2FwaS91aS9VaSc7XG5cbmNvbnN0IG9uU2V0dXBFZGl0YWJsZSA9IChlZGl0b3I6IEVkaXRvcikgPT4gKGFwaTogVG9vbGJhci5Ub29sYmFyQnV0dG9uSW5zdGFuY2VBcGkgfCBNZW51Lk1lbnVJdGVtSW5zdGFuY2VBcGkpOiBWb2lkRnVuY3Rpb24gPT4ge1xuICBjb25zdCBub2RlQ2hhbmdlZCA9ICgpID0+IHtcbiAgICBhcGkuc2V0RW5hYmxlZChlZGl0b3Iuc2VsZWN0aW9uLmlzRWRpdGFibGUoKSk7XG4gIH07XG5cbiAgZWRpdG9yLm9uKCdOb2RlQ2hhbmdlJywgbm9kZUNoYW5nZWQpO1xuICBub2RlQ2hhbmdlZCgpO1xuXG4gIHJldHVybiAoKSA9PiB7XG4gICAgZWRpdG9yLm9mZignTm9kZUNoYW5nZScsIG5vZGVDaGFuZ2VkKTtcbiAgfTtcbn07XG5cbmNvbnN0IHJlZ2lzdGVyID0gKGVkaXRvcjogRWRpdG9yKTogdm9pZCA9PiB7XG4gIGNvbnN0IG9uQWN0aW9uID0gKCkgPT4gZWRpdG9yLmV4ZWNDb21tYW5kKCdtY2VBbmNob3InKTtcblxuICBlZGl0b3IudWkucmVnaXN0cnkuYWRkVG9nZ2xlQnV0dG9uKCdhbmNob3InLCB7XG4gICAgaWNvbjogJ2Jvb2ttYXJrJyxcbiAgICB0b29sdGlwOiAnQW5jaG9yJyxcbiAgICBvbkFjdGlvbixcbiAgICBvblNldHVwOiAoYnV0dG9uQXBpKSA9PiB7XG4gICAgICBjb25zdCB1bmJpbmRTZWxlY3RvckNoYW5nZWQgPSBlZGl0b3Iuc2VsZWN0aW9uLnNlbGVjdG9yQ2hhbmdlZFdpdGhVbmJpbmQoJ2E6bm90KFtocmVmXSknLCBidXR0b25BcGkuc2V0QWN0aXZlKS51bmJpbmQ7XG4gICAgICBjb25zdCB1bmJpbmRFZGl0YWJsZUNoYW5nZWQgPSBvblNldHVwRWRpdGFibGUoZWRpdG9yKShidXR0b25BcGkpO1xuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICB1bmJpbmRTZWxlY3RvckNoYW5nZWQoKTtcbiAgICAgICAgdW5iaW5kRWRpdGFibGVDaGFuZ2VkKCk7XG4gICAgICB9O1xuICAgIH1cbiAgfSk7XG5cbiAgZWRpdG9yLnVpLnJlZ2lzdHJ5LmFkZE1lbnVJdGVtKCdhbmNob3InLCB7XG4gICAgaWNvbjogJ2Jvb2ttYXJrJyxcbiAgICB0ZXh0OiAnQW5jaG9yLi4uJyxcbiAgICBvbkFjdGlvbixcbiAgICBvblNldHVwOiBvblNldHVwRWRpdGFibGUoZWRpdG9yKVxuICB9KTtcbn07XG5cbmV4cG9ydCB7XG4gIHJlZ2lzdGVyXG59O1xuIiwiaW1wb3J0IHR5cGUgRWRpdG9yIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvRWRpdG9yJztcblxuaW1wb3J0ICogYXMgQW5jaG9yIGZyb20gJy4uL2NvcmUvQW5jaG9yJztcblxuY29uc3QgaW5zZXJ0QW5jaG9yID0gKGVkaXRvcjogRWRpdG9yLCBuZXdJZDogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gIGlmICghQW5jaG9yLmlzVmFsaWRJZChuZXdJZCkpIHtcbiAgICBlZGl0b3Iud2luZG93TWFuYWdlci5hbGVydChcbiAgICAgICdJRCBzaG91bGQgc3RhcnQgd2l0aCBhIGxldHRlciwgZm9sbG93ZWQgb25seSBieSBsZXR0ZXJzLCBudW1iZXJzLCBkYXNoZXMsIGRvdHMsIGNvbG9ucyBvciB1bmRlcnNjb3Jlcy4nXG4gICAgKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgQW5jaG9yLmluc2VydChlZGl0b3IsIG5ld0lkKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuY29uc3Qgb3BlbiA9IChlZGl0b3I6IEVkaXRvcik6IHZvaWQgPT4ge1xuICBjb25zdCBjdXJyZW50SWQgPSBBbmNob3IuZ2V0SWQoZWRpdG9yKTtcblxuICBlZGl0b3Iud2luZG93TWFuYWdlci5vcGVuKHtcbiAgICB0aXRsZTogJ0FuY2hvcicsXG4gICAgc2l6ZTogJ25vcm1hbCcsXG4gICAgYm9keToge1xuICAgICAgdHlwZTogJ3BhbmVsJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnaWQnLFxuICAgICAgICAgIHR5cGU6ICdpbnB1dCcsXG4gICAgICAgICAgbGFiZWw6ICdJRCcsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6ICdleGFtcGxlJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICBidXR0b25zOiBbXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdjYW5jZWwnLFxuICAgICAgICBuYW1lOiAnY2FuY2VsJyxcbiAgICAgICAgdGV4dDogJ0NhbmNlbCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdzdWJtaXQnLFxuICAgICAgICBuYW1lOiAnc2F2ZScsXG4gICAgICAgIHRleHQ6ICdTYXZlJyxcbiAgICAgICAgcHJpbWFyeTogdHJ1ZVxuICAgICAgfVxuICAgIF0sXG4gICAgaW5pdGlhbERhdGE6IHtcbiAgICAgIGlkOiBjdXJyZW50SWRcbiAgICB9LFxuICAgIG9uU3VibWl0OiAoYXBpKSA9PiB7XG4gICAgICBpZiAoaW5zZXJ0QW5jaG9yKGVkaXRvciwgYXBpLmdldERhdGEoKS5pZCkpIHsgLy8gVE9ETyB3ZSBuZWVkIGEgYmV0dGVyIHdheSB0byBkbyB2YWxpZGF0aW9uXG4gICAgICAgIGFwaS5jbG9zZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQge1xuICBvcGVuXG59O1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuICAgICAgICBpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG4gICAgICAgIH1cbiAgICB9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ2ID0gKCkgPT4gKFwiMS41LjJcIikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ1aWQgPSBcImJ1bmRsZXI9cnNwYWNrQDEuNS4yXCI7XG4iLCJpbXBvcnQgUGx1Z2luIGZyb20gJy4vUGx1Z2luJztcblxuUGx1Z2luKCk7XG5cbi8qKiAqKioqKlxuICogRE8gTk9UIEVYUE9SVCBBTllUSElOR1xuICpcbiAqIElGIFlPVSBETyBST0xMVVAgV0lMTCBMRUFWRSBBIEdMT0JBTCBPTiBUSEUgUEFHRVxuICoqKioqKiovXG4iXSwibmFtZXMiOlsiUGx1Z2luTWFuYWdlciIsIkNvbW1hbmRzIiwiT3B0aW9ucyIsIkZpbHRlckNvbnRlbnQiLCJGb3JtYXRzIiwiQnV0dG9ucyIsImVkaXRvciIsIkRpYWxvZyIsInJlZ2lzdGVyIiwib3B0aW9uIiwibmFtZSIsInJlZ2lzdGVyT3B0aW9uIiwiYWxsb3dIdG1sSW5OYW1lZEFuY2hvciIsIlJhbmdlVXRpbHMiLCJUb29scyIsIlV0aWxzIiwicmVtb3ZlRW1wdHlOYW1lZEFuY2hvcnNJblNlbGVjdGlvbiIsImRvbSIsIm5vZGVzIiwibm9kZSIsImlzVmFsaWRJZCIsImlkIiwiZ2V0TmFtZWRBbmNob3IiLCJnZXRJZCIsImFuY2hvciIsImNyZWF0ZUFuY2hvciIsInVuZGVmaW5lZCIsInVwZGF0ZUFuY2hvciIsImFuY2hvckVsZW1lbnQiLCJpbnNlcnQiLCJpc0VtcHR5U3RyaW5nIiwiaXNOYW1lZEFuY2hvck5vZGUiLCJpc0VtcHR5TmFtZWRBbmNob3JOb2RlIiwic2V0Q29udGVudEVkaXRhYmxlIiwic3RhdGUiLCJpIiwic2V0dXAiLCJyZWdpc3RlckZvcm1hdHMiLCJfZm10IiwiX2l0ZW1OYW1lIiwibmFtZWRBbmNob3JTZWxlY3RvciIsInN0ciIsImdldElkRnJvbUFuY2hvciIsImVsbSIsImlzQW5jaG9yIiwiaXNOYW1lZEFuY2hvciIsImlzRW1wdHlOYW1lZEFuY2hvciIsIm9uU2V0dXBFZGl0YWJsZSIsImFwaSIsIm5vZGVDaGFuZ2VkIiwib25BY3Rpb24iLCJidXR0b25BcGkiLCJ1bmJpbmRTZWxlY3RvckNoYW5nZWQiLCJ1bmJpbmRFZGl0YWJsZUNoYW5nZWQiLCJBbmNob3IiLCJpbnNlcnRBbmNob3IiLCJuZXdJZCIsIm9wZW4iLCJjdXJyZW50SWQiLCJQbHVnaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSw2REFBZSxNQUFNLEVBQUM7QUFDZjs7Ozs7Ozs7Ozs7Ozs7QUNIUDs7QUFFQSw2REFBZSxNQUFNLEVBQUM7QUFDZjs7Ozs7Ozs7Ozs7Ozs7QUNIUDs7QUFFQSw2REFBZSxNQUFNLEVBQUM7QUFDZjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hvRDtBQUVoQjtBQUNGO0FBQ2E7QUFDWjtBQUNGO0FBRXhDLDZEQUFnQjtJQUNkQSwwRUFBaUIsQ0FBQyxVQUFVLENBQUNNO1FBQzNCSixrREFBZ0IsQ0FBQ0k7UUFDakJILHNE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