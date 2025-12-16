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
"./lib/globals/tinymce/core/api/util/ImageUploader.js": 
/*!************************************************************!*\
  !*** ./lib/globals/tinymce/core/api/util/ImageUploader.js ***!
  \************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ImageUploader: () => (ImageUploader),
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
var global = tinymce.util.Tools.resolve('tinymce.util.ImageUploader');

/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (global);
var ImageUploader = global;


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
"./lib/globals/tinymce/core/api/util/URI.js": 
/*!**************************************************!*\
  !*** ./lib/globals/tinymce/core/api/util/URI.js ***!
  \**************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  URI: () => (URI),
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
var global = tinymce.util.Tools.resolve('tinymce.util.URI');

/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (global);
var URI = global;


}),
"../katamari/src/main/ts/ephox/katamari/api/Arr.ts": 
/*!*********************************************************!*\
  !*** ../katamari/src/main/ts/ephox/katamari/api/Arr.ts ***!
  \*********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  bind: () => (bind),
  chunk: () => (chunk),
  contains: () => (contains),
  difference: () => (difference),
  each: () => (each),
  eachr: () => (eachr),
  equal: () => (equal),
  exists: () => (exists),
  filter: () => (filter),
  find: () => (find),
  findIndex: () => (findIndex),
  findLastIndex: () => (findLastIndex),
  findMap: () => (findMap),
  findUntil: () => (findUntil),
  flatten: () => (flatten),
  foldl: () => (foldl),
  foldr: () => (foldr),
  forall: () => (forall),
  from: () => (from),
  get: () => (get),
  groupBy: () => (groupBy),
  head: () => (head),
  indexOf: () => (indexOf),
  last: () => (last),
  map: () => (map),
  mapToObject: () => (mapToObject),
  partition: () => (partition),
  pure: () => (pure),
  range: () => (range),
  reverse: () => (reverse),
  sort: () => (sort),
  unique: () => (unique)
});
/* ESM import */var _ephox_dispute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ephox/dispute */ "../../node_modules/@ephox/dispute/lib/main/ts/api/Eq.js");
/* ESM import */var _Fun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Fun */ "../katamari/src/main/ts/ephox/katamari/api/Fun.ts");
/* ESM import */var _Optional__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Optional */ "../katamari/src/main/ts/ephox/katamari/api/Optional.ts");
/* ESM import */var _Type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Type */ "../katamari/src/main/ts/ephox/katamari/api/Type.ts");




const nativeSlice = Array.prototype.slice;
const nativeIndexOf = Array.prototype.indexOf;
const nativePush = Array.prototype.push;
const rawIndexOf = (ts, t)=>nativeIndexOf.call(ts, t);
const indexOf = (xs, x)=>{
    // The rawIndexOf method does not wrap up in an option. This is for performance reasons.
    const r = rawIndexOf(xs, x);
    return r === -1 ? _Optional__WEBPACK_IMPORTED_MODULE_0__.Optional.none() : _Optional__WEBPACK_IMPORTED_MODULE_0__.Optional.some(r);
};
const contains = (xs, x)=>rawIndexOf(xs, x) > -1;
const exists = (xs, pred)=>{
    for(let i = 0, len = xs.length; i < len; i++){
        const x = xs[i];
        if (pred(x, i)) {
            return true;
        }
    }
    return false;
};
const range = (num, f)=>{
    const r = [];
    for(let i = 0; i < num; i++){
        r.push(f(i));
    }
    return r;
};
// It's a total micro optimisation, but these do make some difference.
// Particularly for browsers other than Chrome.
// - length caching
// http://jsperf.com/browser-diet-jquery-each-vs-for-loop/69
// - not using push
// http://jsperf.com/array-direct-assignment-vs-push/2
const chunk = (array, size)=>{
    const r = [];
    for(let i = 0; i < array.length; i += size){
        const s = nativeSlice.call(array, i, i + size);
        r.push(s);
    }
    return r;
};
const map = (xs, f)=>{
    // pre-allocating array size when it's guaranteed to be known
    // http://jsperf.com/push-allocated-vs-dynamic/22
    const len = xs.length;
    const r = new Array(len);
    for(let i = 0; i < len; i++){
        const x = xs[i];
        r[i] = f(x, i);
    }
    return r;
};
// Unwound implementing other functions in terms of each.
// The code size is roughly the same, and it should allow for better optimisation.
// const each = function<T, U>(xs: T[], f: (x: T, i?: number, xs?: T[]) => void): void {
const each = (xs, f)=>{
    for(let i = 0, len = xs.length; i < len; i++){
        const x = xs[i];
        f(x, i);
    }
};
const eachr = (xs, f)=>{
    for(let i = xs.length - 1; i >= 0; i--){
        const x = xs[i];
        f(x, i);
    }
};
const partition = (xs, pred)=>{
    const pass = [];
    const fail = [];
    for(let i = 0, len = xs.length; i < len; i++){
        const x = xs[i];
        const arr = pred(x, i) ? pass : fail;
        arr.push(x);
    }
    return {
        pass,
        fail
    };
};
const filter = (xs, pred)=>{
    const r = [];
    for(let i = 0, len = xs.length; i < len; i++){
        const x = xs[i];
        if (pred(x, i)) {
            r.push(x);
        }
    }
    return r;
};
/*
 * Groups an array into contiguous arrays of like elements. Whether an element is like or not depends on f.
 *
 * f is a function that derives a value from an element - e.g. true or false, or a string.
 * Elements are like if this function generates the same value for them (according to ===).
 *
 *
 * Order of the elements is preserved. Arr.flatten() on the result will return the original list, as with Haskell groupBy function.
 *  For a good explanation, see the group function (which is a special case of groupBy)
 *  http://hackage.haskell.org/package/base-4.7.0.0/docs/Data-List.html#v:group
 */ const groupBy = (xs, f)=>{
    if (xs.length === 0) {
        return [];
    } else {
        let wasType = f(xs[0]); // initial case for matching
        const r = [];
        let group = [];
        for(let i = 0, len = xs.length; i < len; i++){
            const x = xs[i];
            const type = f(x);
            if (type !== wasType) {
                r.push(group);
                group = [];
            }
            wasType = type;
            group.push(x);
        }
        if (group.length !== 0) {
            r.push(group);
        }
        return r;
    }
};
const foldr = (xs, f, acc)=>{
    eachr(xs, (x, i)=>{
        acc = f(acc, x, i);
    });
    return acc;
};
const foldl = (xs, f, acc)=>{
    each(xs, (x, i)=>{
        acc = f(acc, x, i);
    });
    return acc;
};
const findUntil = (xs, pred, until)=>{
    for(let i = 0, len = xs.length; i < len; i++){
        const x = xs[i];
        if (pred(x, i)) {
            return _Optional__WEBPACK_IMPORTED_MODULE_0__.Optional.some(x);
        } else if (until(x, i)) {
            break;
        }
    }
    return _Optional__WEBPACK_IMPORTED_MODULE_0__.Optional.none();
};
const find = (xs, pred)=>{
    return findUntil(xs, pred, _Fun__WEBPACK_IMPORTED_MODULE_1__.never);
};
const findIndex = (xs, pred)=>{
    for(let i = 0, len = xs.length; i < len; i++){
        const x = xs[i];
        if (pred(x, i)) {
            return _Optional__WEBPACK_IMPORTED_MODULE_0__.Optional.some(i);
        }
    }
    return _Optional__WEBPACK_IMPORTED_MODULE_0__.Optional.none();
};
const findLastIndex = (arr, pred)=>{
    for(let i = arr.length - 1; i >= 0; i--){
        if (pred(arr[i], i)) {
            return _Optional__WEBPACK_IMPORTED_MODULE_0__.Optional.some(i);
        }
    }
    return _Optional__WEBPACK_IMPORTED_MODULE_0__.Optional.none();
};
const flatten = (xs)=>{
    // Note, this is possible because push supports multiple arguments:
    // http://jsperf.com/concat-push/6
    // Note that in the past, concat() would silently work (very slowly) for array-like objects.
    // With this change it will throw an error.
    const r = [];
    for(let i = 0, len = xs.length; i < len; ++i){
        // Ensure that each value is an array itself
        if (!_Type__WEBPACK_IMPORTED_MODULE_2__.isArray(xs[i])) {
            throw new Error('Arr.flatten item ' + i + ' was not an array, input: ' + xs);
        }
        nativePush.apply(r, xs[i]);
    }
    return r;
};
const bind = (xs, f)=>flatten(map(xs, f));
const forall = (xs, pred)=>{
    for(let i = 0, len = xs.length; i < len; ++i){
        const x = xs[i];
        if (pred(x, i) !== true) {
            return false;
        }
    }
    return true;
};
const equal = (a1, a2, eq = _ephox_dispute__WEBPACK_IMPORTED_MODULE_3__.eqAny)=>_ephox_dispute__WEBPACK_IMPORTED_MODULE_3__.eqArray(eq).eq(a1, a2);
const reverse = (xs)=>{
    const r = nativeSlice.call(xs, 0);
    r.reverse();
    return r;
};
const difference = (a1, a2)=>filter(a1, (x)=>!contains(a2, x));
const mapToObject = (xs, f)=>{
    const r = {};
    for(let i = 0, len = xs.length; i < len; i++){
        const x = xs[i];
        r[String(x)] = f(x, i);
    }
    return r;
};
const pure = (x)=>[
        x
    ];
const sort = (xs, comparator)=>{
    const copy = nativeSlice.call(xs, 0);
    copy.sort(comparator);
    return copy;
};
const get = (xs, i)=>i >= 0 && i < xs.length ? _Optional__WEBPACK_IMPORTED_MODULE_0__.Optional.some(xs[i]) : _Optional__WEBPACK_IMPORTED_MODULE_0__.Optional.none();
const head = (xs)=>get(xs, 0);
const last = (xs)=>get(xs, xs.length - 1);
const from = _Type__WEBPACK_IMPORTED_MODULE_2__.isFunction(Array.from) ? Array.from : (x)=>nativeSlice.call(x);
const findMap = (arr, f)=>{
    for(let i = 0; i < arr.length; i++){
        const r = f(arr[i], i);
        if (r.isSome()) {
            return r;
        }
    }
    return _Optional__WEBPACK_IMPORTED_MODULE_0__.Optional.none();
};
const unique = (xs, comparator)=>{
    const r = [];
    const isDuplicated = _Type__WEBPACK_IMPORTED_MODULE_2__.isFunction(comparator) ? (x)=>exists(r, (i)=>comparator(i, x)) : (x)=>contains(r, x);
    for(let i = 0, len = xs.length; i < len; i++){
        const x = xs[i];
        if (!isDuplicated(x)) {
            r.push(x);
        }
    }
    return r;
};


}),
"../katamari/src/main/ts/ephox/katamari/api/Fun.ts": 
/*!*********************************************************!*\
  !*** ../katamari/src/main/ts/ephox/katamari/api/Fun.ts ***!
  \*********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  always: () => (always),
  apply: () => (apply),
  call: () => (call),
  compose: () => (compose),
  compose1: () => (compose1),
  constant: () => (constant),
  curry: () => (curry),
  die: () => (die),
  identity: () => (identity),
  never: () => (never),
  noarg: () => (noarg),
  noop: () => (noop),
  not: () => (not),
  pipe: () => (pipe),
  tripleEquals: () => (tripleEquals),
  weaken: () => (weaken)
});
/* ESM import */var _Type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Type */ "../katamari/src/main/ts/ephox/katamari/api/Type.ts");

const noop = ()=>{};
const noarg = (f)=>()=>f();
/** Compose a unary function with an n-ary function */ const compose = (fa, fb)=>{
    return (...args)=>{
        return fa(fb.apply(null, args));
    };
};
/** Compose two unary functions. Similar to compose, but avoids using Function.prototype.apply. */ const compose1 = (fbc, fab)=>(a)=>fbc(fab(a));
const constant = (value)=>{
    return ()=>{
        return value;
    };
};
const identity = (x)=>{
    return x;
};
const tripleEquals = (a, b)=>{
    return a === b;
};
function curry(fn, ...initialArgs) {
    return (...restArgs)=>{
        const all = initialArgs.concat(restArgs);
        return fn.apply(null, all);
    };
}
const not = (f)=>(t)=>!f(t);
const die = (msg)=>{
    return ()=>{
        throw new Error(msg);
    };
};
const apply = (f)=>{
    return f();
};
const call = (f)=>{
    f();
};
const never = constant(false);
const always = constant(true);
/* Used to weaken types */ const weaken = (b)=>b;
const pipe = (a, ab, bc, cd, de, ef, fg, gh)=>{
    const b = ab(a);
    if (_Type__WEBPACK_IMPORTED_MODULE_0__.isNullable(bc)) {
        return b;
    }
    const c = bc(b);
    if (_Type__WEBPACK_IMPORTED_MODULE_0__.isNullable(cd)) {
        return c;
    }
    const d = cd(c);
    if (_Type__WEBPACK_IMPORTED_MODULE_0__.isNullable(de)) {
        return d;
    }
    const e = de(d);
    if (_Type__WEBPACK_IMPORTED_MODULE_0__.isNullable(ef)) {
        return e;
    }
    const f = ef(e);
    if (_Type__WEBPACK_IMPORTED_MODULE_0__.isNullable(fg)) {
        return f;
    }
    const g = fg(f);
    if (_Type__WEBPACK_IMPORTED_MODULE_0__.isNullable(gh)) {
        return g;
    }
    return gh(g);
};



}),
"../katamari/src/main/ts/ephox/katamari/api/Global.ts": 
/*!************************************************************!*\
  !*** ../katamari/src/main/ts/ephox/katamari/api/Global.ts ***!
  \************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Global: () => (Global)
});
// Use window object as the global if it's available since CSP will block script evals
// eslint-disable-next-line @typescript-eslint/no-implied-eval
const Global = typeof window !== 'undefined' ? window : Function('return this;')();


}),
"../katamari/src/main/ts/ephox/katamari/api/Merger.ts": 
/*!************************************************************!*\
  !*** ../katamari/src/main/ts/ephox/katamari/api/Merger.ts ***!
  \************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  deepMerge: () => (deepMerge),
  merge: () => (merge)
});
/* ESM import */var _Obj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Obj */ "../katamari/src/main/ts/ephox/katamari/api/Obj.ts");
/* ESM import */var _Type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Type */ "../katamari/src/main/ts/ephox/katamari/api/Type.ts");


const shallow = (old, nu)=>{
    return nu;
};
const deep = (old, nu)=>{
    const bothObjects = _Type__WEBPACK_IMPORTED_MODULE_0__.isPlainObject(old) && _Type__WEBPACK_IMPORTED_MODULE_0__.isPlainObject(nu);
    return bothObjects ? deepMerge(old, nu) : nu;
};
const baseMerge = (merger)=>{
    return (...objects)=>{
        if (objects.length === 0) {
            throw new Error(`Can't merge zero objects`);
        }
        const ret = {};
        for(let j = 0; j < objects.length; j++){
            const curObject = objects[j];
            for(const key in curObject){
                if (_Obj__WEBPACK_IMPORTED_MODULE_1__.has(curObject, key)) {
                    ret[key] = merger(ret[key], curObject[key]);
                }
            }
        }
        return ret;
    };
};
const deepMerge = baseMerge(deep);
const merge = baseMerge(shallow);


}),
"../katamari/src/main/ts/ephox/katamari/api/Obj.ts": 
/*!*********************************************************!*\
  !*** ../katamari/src/main/ts/ephox/katamari/api/Obj.ts ***!
  \*********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  bifilter: () => (bifilter),
  each: () => (each),
  equal: () => (equal),
  filter: () => (filter),
  find: () => (find),
  get: () => (get),
  has: () => (has),
  hasNonNullableKey: () => (hasNonNullableKey),
  hasOwnProperty: () => (hasOwnProperty),
  isEmpty: () => (isEmpty),
  keys: () => (keys),
  map: () => (map),
  mapToArray: () => (mapToArray),
  size: () => (size),
  tupleMap: () => (tupleMap),
  values: () => (values)
});
/* ESM import */var _ephox_dispute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ephox/dispute */ "../../node_modules/@ephox/dispute/lib/main/ts/api/Eq.js");
/* ESM import */var _Fun__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Fun */ "../katamari/src/main/ts/ephox/katamari/api/Fun.ts");
/* ESM import */var _Optional__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Optional */ "../katamari/src/main/ts/ephox/katamari/api/Optional.ts");



// There are many variations of Object iteration that are faster than the 'for-in' style:
// http://jsperf.com/object-keys-iteration/107
//
// Use the native keys if it is available (IE9+), otherwise fall back to manually filtering
const keys = Object.keys;
const hasOwnProperty = Object.hasOwnProperty;
const each = (obj, f)=>{
    const props = keys(obj);
    for(let k = 0, len = props.length; k < len; k++){
        const i = props[k];
        const x = obj[i];
        f(x, i);
    }
};
const map = (obj, f)=>{
    return tupleMap(obj, (x, i)=>({
            k: i,
            v: f(x, i)
        }));
};
const tupleMap = (obj, f)=>{
    const r = {};
    each(obj, (x, i)=>{
        const tuple = f(x, i);
        r[tuple.k] = tuple.v;
    });
    return r;
};
const objAcc = (r)=>(x, i)=>{
        r[i] = x;
    };
const internalFilter = (obj, pred, onTrue, onFalse)=>{
    each(obj, (x, i)=>{
        (pred(x, i) ? onTrue : onFalse)(x, i);
    });
};
const bifilter = (obj, pred)=>{
    const t = {};
    const f = {};
    internalFilter(obj, pred, objAcc(t), objAcc(f));
    return {
        t,
        f
    };
};
const filter = (obj, pred)=>{
    const t = {};
    internalFilter(obj, pred, objAcc(t), _Fun__WEBPACK_IMPORTED_MODULE_0__.noop);
    return t;
};
const mapToArray = (obj, f)=>{
    const r = [];
    each(obj, (value, name)=>{
        r.push(f(value, name));
    });
    return r;
};
const find = (obj, pred)=>{
    const props = keys(obj);
    for(let k = 0, len = props.length; k < len; k++){
        const i = props[k];
        const x = obj[i];
        if (pred(x, i, obj)) {
            return _Optional__WEBPACK_IMPORTED_MODULE_1__.Optional.some(x);
        }
    }
    return _Optional__WEBPACK_IMPORTED_MODULE_1__.Optional.none();
};
const values = (obj)=>{
    return mapToArray(obj, _Fun__WEBPACK_IMPORTED_MODULE_0__.identity);
};
const size = (obj)=>{
    return keys(obj).length;
};
const get = (obj, key)=>{
    return has(obj, key) ? _Optional__WEBPACK_IMPORTED_MODULE_1__.Optional.from(obj[key]) : _Optional__WEBPACK_IMPORTED_MODULE_1__.Optional.none();
};
const has = (obj, key)=>hasOwnProperty.call(obj, key);
const hasNonNullableKey = (obj, key)=>has(obj, key) && obj[key] !== undefined && obj[key] !== null;
const isEmpty = (r)=>{
    for(const x in r){
        if (hasOwnProperty.call(r, x)) {
            return false;
        }
    }
    return true;
};
const equal = (a1, a2, eq = _ephox_dispute__WEBPACK_IMPORTED_MODULE_2__.eqAny)=>_ephox_dispute__WEBPACK_IMPORTED_MODULE_2__.eqRecord(eq).eq(a1, a2);


}),
"../katamari/src/main/ts/ephox/katamari/api/Optional.ts": 
/*!**************************************************************!*\
  !*** ../katamari/src/main/ts/ephox/katamari/api/Optional.ts ***!
  \**************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Optional: () => (Optional)
});
/* ESM import */var _Type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Type */ "../katamari/src/main/ts/ephox/katamari/api/Type.ts");

/**
 * The `Optional` type represents a value (of any type) that potentially does
 * not exist. Any `Optional<T>` can either be a `Some<T>` (in which case the
 * value does exist) or a `None` (in which case the value does not exist). This
 * module defines a whole lot of FP-inspired utility functions for dealing with
 * `Optional` objects.
 *
 * Comparison with null or undefined:
 * - We don't get fancy null coalescing operators with `Optional`
 * - We do get fancy helper functions with `Optional`
 * - `Optional` support nesting, and allow for the type to still be nullable (or
 * another `Optional`)
 * - There is no option to turn off strict-optional-checks like there is for
 * strict-null-checks
 */ class Optional {
    tag;
    value;
    // Sneaky optimisation: every instance of Optional.none is identical, so just
    // reuse the same object
    static singletonNone = new Optional(false);
    // The internal representation has a `tag` and a `value`, but both are
    // private: able to be console.logged, but not able to be accessed by code
    constructor(tag, value){
        this.tag = tag;
        this.value = value;
    }
    // --- Identities ---
    /**
   * Creates a new `Optional<T>` that **does** contain a value.
   */ static some(value) {
        return new Optional(true, value);
    }
    /**
   * Create a new `Optional<T>` that **does not** contain a value. `T` can be
   * any type because we don't actually have a `T`.
   */ static none() {
        return Optional.singletonNone;
    }
    /**
   * Perform a transform on an `Optional` type. Regardless of whether this
   * `Optional` contains a value or not, `fold` will return a value of type `U`.
   * If this `Optional` does not contain a value, the `U` will be created by
   * calling `onNone`. If this `Optional` does contain a value, the `U` will be
   * created by calling `onSome`.
   *
   * For the FP enthusiasts in the room, this function:
   * 1. Could be used to implement all of the functions below
   * 2. Forms a catamorphism
   */ fold(onNone, onSome) {
        if (this.tag) {
            return onSome(this.value);
        } else {
            return onNone();
        }
    }
    /**
   * Determine if this `Optional` object contains a value.
   */ isSome() {
        return this.tag;
    }
    /**
   * Determine if this `Optional` object **does not** contain a value.
   */ isNone() {
        return !this.tag;
    }
    // --- Functor (name stolen from Haskell / maths) ---
    /**
   * Perform a transform on an `Optional` object, **if** there is a value. If
   * you provide a function to turn a T into a U, this is the function you use
   * to turn an `Optional<T>` into an `Optional<U>`. If this **does** contain
   * a value then the output will also contain a value (that value being the
   * output of `mapper(this.value)`), and if this **does not** contain a value
   * then neither will the output.
   */ map(mapper) {
        if (this.tag) {
            return Optional.some(mapper(this.value));
        } else {
            return Optional.none();
        }
    }
    // --- Monad (name stolen from Haskell / maths) ---
    /**
   * Perform a transform on an `Optional` object, **if** there is a value.
   * Unlike `map`, here the transform itself also returns an `Optional`.
   */ bind(binder) {
        if (this.tag) {
            return binder(this.value);
        } else {
            return Optional.none();
        }
    }
    // --- Traversable (name stolen from Haskell / maths) ---
    /**
   * For a given predicate, this function finds out if there **exists** a value
   * inside this `Optional` object that meets the predicate. In practice, this
   * means that for `Optional`s that do not contain a value it returns false (as
   * no predicate-meeting value exists).
   */ exists(predicate) {
        return this.tag && predicate(this.value);
    }
    /**
   * For a given predicate, this function finds out if **all** the values inside
   * this `Optional` object meet the predicate. In practice, this means that
   * for `Optional`s that do not contain a value it returns true (as all 0
   * objects do meet the predicate).
   */ forall(predicate) {
        return !this.tag || predicate(this.value);
    }
    filter(predicate) {
        if (!this.tag || predicate(this.value)) {
            return this;
        } else {
            return Optional.none();
        }
    }
    // --- Getters ---
    /**
   * Get the value out of the inside of the `Optional` object, using a default
   * `replacement` value if the provided `Optional` object does not contain a
   * value.
   */ getOr(replacement) {
        return this.tag ? this.value : replacement;
    }
    /**
   * Get the value out of the inside of the `Optional` object, using a default
   * `replacement` value if the provided `Optional` object does not contain a
   * value.  Unlike `getOr`, in this method the `replacement` object is also
   * `Optional` - meaning that this method will always return an `Optional`.
   */ or(replacement) {
        return this.tag ? this : replacement;
    }
    /**
   * Get the value out of the inside of the `Optional` object, using a default
   * `replacement` value if the provided `Optional` object does not contain a
   * value. Unlike `getOr`, in this method the `replacement` value is
   * "thunked" - that is to say that you don't pass a value to `getOrThunk`, you
   * pass a function which (if called) will **return** the `value` you want to
   * use.
   */ getOrThunk(thunk) {
        return this.tag ? this.value : thunk();
    }
    /**
   * Get the value out of the inside of the `Optional` object, using a default
   * `replacement` value if the provided Optional object does not contain a
   * value.
   *
   * Unlike `or`, in this method the `replacement` value is "thunked" - that is
   * to say that you don't pass a value to `orThunk`, you pass a function which
   * (if called) will **return** the `value` you want to use.
   *
   * Unlike `getOrThunk`, in this method the `replacement` value is also
   * `Optional`, meaning that this method will always return an `Optional`.
   */ orThunk(thunk) {
        return this.tag ? this : thunk();
    }
    /**
   * Get the value out of the inside of the `Optional` object, throwing an
   * exception if the provided `Optional` object does not contain a value.
   *
   * WARNING:
   * You should only be using this function if you know that the `Optional`
   * object **is not** empty (otherwise you're throwing exceptions in production
   * code, which is bad).
   *
   * In tests this is more acceptable.
   *
   * Prefer other methods to this, such as `.each`.
   */ getOrDie(message) {
        if (!this.tag) {
            throw new Error(message ?? 'Called getOrDie on None');
        } else {
            return this.value;
        }
    }
    // --- Interop with null and undefined ---
    /**
   * Creates an `Optional` value from a nullable (or undefined-able) input.
   * Null, or undefined, is converted to `None`, and anything else is converted
   * to `Some`.
   */ static from(value) {
        return _Type__WEBPACK_IMPORTED_MODULE_0__.isNonNullable(value) ? Optional.some(value) : Optional.none();
    }
    /**
   * Converts an `Optional` to a nullable type, by getting the value if it
   * exists, or returning `null` if it does not.
   */ getOrNull() {
        return this.tag ? this.value : null;
    }
    /**
   * Converts an `Optional` to an undefined-able type, by getting the value if
   * it exists, or returning `undefined` if it does not.
   */ getOrUndefined() {
        return this.value;
    }
    // --- Utilities ---
    /**
   * If the `Optional` contains a value, perform an action on that value.
   * Unlike the rest of the methods on this type, `.each` has side-effects. If
   * you want to transform an `Optional<T>` **into** something, then this is not
   * the method for you. If you want to use an `Optional<T>` to **do**
   * something, then this is the method for you - provided you're okay with not
   * doing anything in the case where the `Optional` doesn't have a value inside
   * it. If you're not sure whether your use-case fits into transforming
   * **into** something or **doing** something, check whether it has a return
   * value. If it does, you should be performing a transform.
   */ each(worker) {
        if (this.tag) {
            worker(this.value);
        }
    }
    /**
   * Turn the `Optional` object into an array that contains all of the values
   * stored inside the `Optional`. In practice, this means the output will have
   * either 0 or 1 elements.
   */ toArray() {
        return this.tag ? [
            this.value
        ] : [];
    }
    /**
   * Turn the `Optional` object into a string for debugging or printing. Not
   * recommended for production code, but good for debugging. Also note that
   * these days an `Optional` object can be logged to the console directly, and
   * its inner value (if it exists) will be visible.
   */ toString() {
        return this.tag ? `some(${this.value})` : 'none()';
    }
}


}),
"../katamari/src/main/ts/ephox/katamari/api/Resolve.ts": 
/*!*************************************************************!*\
  !*** ../katamari/src/main/ts/ephox/katamari/api/Resolve.ts ***!
  \*************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  forge: () => (forge),
  namespace: () => (namespace),
  path: () => (path),
  resolve: () => (resolve),
  step: () => (step)
});
/* ESM import */var _Global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Global */ "../katamari/src/main/ts/ephox/katamari/api/Global.ts");

/** path :: ([String], JsObj?) -> JsObj */ const path = (parts, scope)=>{
    let o = scope !== undefined && scope !== null ? scope : _Global__WEBPACK_IMPORTED_MODULE_0__.Global;
    for(let i = 0; i < parts.length && o !== undefined && o !== null; ++i){
        o = o[parts[i]];
    }
    return o;
};
/** resolve :: (String, JsObj?) -> JsObj */ const resolve = (p, scope)=>{
    const parts = p.split('.');
    return path(parts, scope);
};
/** step :: (JsObj, String) -> JsObj */ const step = (o, part)=>{
    if (o[part] === undefined || o[part] === null) {
        o[part] = {};
    }
    return o[part];
};
/** forge :: ([String], JsObj?) -> JsObj */ const forge = (parts, target)=>{
    let o = target !== undefined ? target : _Global__WEBPACK_IMPORTED_MODULE_0__.Global;
    for(let i = 0; i < parts.length; ++i){
        o = step(o, parts[i]);
    }
    return o;
};
/** namespace :: (String, JsObj?) -> JsObj */ const namespace = (name, target)=>{
    const parts = name.split('.');
    return forge(parts, target);
};


}),
"../katamari/src/main/ts/ephox/katamari/api/Strings.ts": 
/*!*************************************************************!*\
  !*** ../katamari/src/main/ts/ephox/katamari/api/Strings.ts ***!
  \*************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  capitalize: () => (capitalize),
  contains: () => (contains),
  endsWith: () => (endsWith),
  ensureLeading: () => (ensureLeading),
  ensureTrailing: () => (ensureTrailing),
  fromCodePoint: () => (fromCodePoint),
  isEmpty: () => (isEmpty),
  isNotEmpty: () => (isNotEmpty),
  lTrim: () => (lTrim),
  rTrim: () => (rTrim),
  removeLeading: () => (removeLeading),
  removeTrailing: () => (removeTrailing),
  repeat: () => (repeat),
  startsWith: () => (startsWith),
  supplant: () => (supplant),
  toFloat: () => (toFloat),
  toInt: () => (toInt),
  trim: () => (trim)
});
/* ESM import */var _str_StrAppend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../str/StrAppend */ "../katamari/src/main/ts/ephox/katamari/str/StrAppend.ts");
/* ESM import */var _Optional__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Optional */ "../katamari/src/main/ts/ephox/katamari/api/Optional.ts");
/* ESM import */var _Type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Type */ "../katamari/src/main/ts/ephox/katamari/api/Type.ts");



const checkRange = (str, substr, start)=>substr === '' || str.length >= substr.length && str.substr(start, start + substr.length) === substr;
/** Given a string and object, perform template-replacements on the string, as specified by the object.
 * Any template fields of the form ${name} are replaced by the string or number specified as obj["name"]
 * Based on Douglas Crockford's 'supplant' method for template-replace of strings. Uses different template format.
 */ const supplant = (str, obj)=>{
    const isStringOrNumber = (a)=>{
        const t = typeof a;
        return t === 'string' || t === 'number';
    };
    return str.replace(/\$\{([^{}]*)\}/g, (fullMatch, key)=>{
        const value = obj[key];
        return isStringOrNumber(value) ? value.toString() : fullMatch;
    });
};
const removeLeading = (str, prefix)=>{
    return startsWith(str, prefix) ? _str_StrAppend__WEBPACK_IMPORTED_MODULE_0__.removeFromStart(str, prefix.length) : str;
};
const removeTrailing = (str, suffix)=>{
    return endsWith(str, suffix) ? _str_StrAppend__WEBPACK_IMPORTED_MODULE_0__.removeFromEnd(str, suffix.length) : str;
};
const ensureLeading = (str, prefix)=>{
    return startsWith(str, prefix) ? str : _str_StrAppend__WEBPACK_IMPORTED_MODULE_0__.addToStart(str, prefix);
};
const ensureTrailing = (str, suffix)=>{
    return endsWith(str, suffix) ? str : _str_StrAppend__WEBPACK_IMPORTED_MODULE_0__.addToEnd(str, suffix);
};
const contains = (str, substr, start = 0, end)=>{
    const idx = str.indexOf(substr, start);
    if (idx !== -1) {
        return _Type__WEBPACK_IMPORTED_MODULE_1__.isUndefined(end) ? true : idx + substr.length <= end;
    } else {
        return false;
    }
};
const capitalize = (str)=>{
    return str === '' ? '' : str.charAt(0).toUpperCase() + str.substring(1);
};
/** Does 'str' start with 'prefix'?
 *  Note: all strings start with the empty string.
 *        More formally, for all strings x, startsWith(x, "").
 *        This is so that for all strings x and y, startsWith(y + x, y)
 */ const startsWith = (str, prefix)=>{
    return checkRange(str, prefix, 0);
};
/** Does 'str' end with 'suffix'?
 *  Note: all strings end with the empty string.
 *        More formally, for all strings x, endsWith(x, "").
 *        This is so that for all strings x and y, endsWith(x + y, y)
 */ const endsWith = (str, suffix)=>{
    return checkRange(str, suffix, str.length - suffix.length);
};
const blank = (r)=>(s)=>s.replace(r, '');
/** removes all leading and trailing spaces */ const trim = blank(/^\s+|\s+$/g);
const lTrim = blank(/^\s+/g);
const rTrim = blank(/\s+$/g);
const isNotEmpty = (s)=>s.length > 0;
const isEmpty = (s)=>!isNotEmpty(s);
const repeat = (s, count)=>count <= 0 ? '' : new Array(count + 1).join(s);
const fromCodePoint = String.fromCodePoint;
const toInt = (value, radix = 10)=>{
    const num = parseInt(value, radix);
    return isNaN(num) ? _Optional__WEBPACK_IMPORTED_MODULE_2__.Optional.none() : _Optional__WEBPACK_IMPORTED_MODULE_2__.Optional.some(num);
};
const toFloat = (value)=>{
    const num = parseFloat(value);
    return isNaN(num) ? _Optional__WEBPACK_IMPORTED_MODULE_2__.Optional.none() : _Optional__WEBPACK_IMPORTED_MODULE_2__.Optional.some(num);
};


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
"../katamari/src/main/ts/ephox/katamari/str/StrAppend.ts": 
/*!***************************************************************!*\
  !*** ../katamari/src/main/ts/ephox/katamari/str/StrAppend.ts ***!
  \***************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  addToEnd: () => (addToEnd),
  addToStart: () => (addToStart),
  removeFromEnd: () => (removeFromEnd),
  removeFromStart: () => (removeFromStart)
});
const addToStart = (str, prefix)=>{
    return prefix + str;
};
const addToEnd = (str, suffix)=>{
    return str + suffix;
};
const removeFromStart = (str, numChars)=>{
    return str.substring(numChars);
};
const removeFromEnd = (str, numChars)=>{
    return str.substring(0, str.length - numChars);
};


}),
"../sand/src/main/ts/ephox/sand/api/SandHTMLElement.ts": 
/*!*************************************************************!*\
  !*** ../sand/src/main/ts/ephox/sand/api/SandHTMLElement.ts ***!
  \*************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  isPrototypeOf: () => (isPrototypeOf)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Resolve.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Type.ts");
/* ESM import */var _util_Global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/Global */ "../sand/src/main/ts/ephox/sand/util/Global.ts");


const getPrototypeOf = Object.getPrototypeOf;
/*
 * IE9 and above
 *
 * MDN no use on this one, but here's the link anyway:
 * https://developer.mozilla.org/en/docs/Web/API/HTMLElement
 */ const sandHTMLElement = (scope)=>{
    return _util_Global__WEBPACK_IMPORTED_MODULE_0__.getOrDie('HTMLElement', scope);
};
const isPrototypeOf = (x)=>{
    // use Resolve to get the window object for x and just return undefined if it can't find it.
    // undefined scope later triggers using the global window.
    const scope = _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.resolve('ownerDocument.defaultView', x);
    // TINY-7374: We can't rely on looking at the owner window HTMLElement as the element may have
    // been constructed in a different window and then appended to the current window document.
    return _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.isObject(x) && (sandHTMLElement(scope).prototype.isPrototypeOf(x) || /^HTML\w*Element$/.test(getPrototypeOf(x).constructor.name));
};



}),
"../sand/src/main/ts/ephox/sand/util/Global.ts": 
/*!*****************************************************!*\
  !*** ../sand/src/main/ts/ephox/sand/util/Global.ts ***!
  \*****************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getOrDie: () => (getOrDie)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Resolve.ts");

const unsafe = (name, scope)=>{
    return _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.resolve(name, scope);
};
const getOrDie = (name, scope)=>{
    const actual = unsafe(name, scope);
    if (actual === undefined || actual === null) {
        throw new Error(name + ' not available on this browser');
    }
    return actual;
};



}),
"../sugar/src/main/ts/ephox/sugar/api/node/NodeTypes.ts": 
/*!**************************************************************!*\
  !*** ../sugar/src/main/ts/ephox/sugar/api/node/NodeTypes.ts ***!
  \**************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ATTRIBUTE: () => (ATTRIBUTE),
  CDATA_SECTION: () => (CDATA_SECTION),
  COMMENT: () => (COMMENT),
  DOCUMENT: () => (DOCUMENT),
  DOCUMENT_FRAGMENT: () => (DOCUMENT_FRAGMENT),
  DOCUMENT_TYPE: () => (DOCUMENT_TYPE),
  ELEMENT: () => (ELEMENT),
  ENTITY: () => (ENTITY),
  ENTITY_REFERENCE: () => (ENTITY_REFERENCE),
  NOTATION: () => (NOTATION),
  PROCESSING_INSTRUCTION: () => (PROCESSING_INSTRUCTION),
  TEXT: () => (TEXT)
});
const ATTRIBUTE = 2;
const CDATA_SECTION = 4;
const COMMENT = 8;
const DOCUMENT = 9;
const DOCUMENT_TYPE = 10;
const DOCUMENT_FRAGMENT = 11;
const ELEMENT = 1;
const TEXT = 3;
const PROCESSING_INSTRUCTION = 7;
const ENTITY_REFERENCE = 5;
const ENTITY = 6;
const NOTATION = 12;



}),
"../sugar/src/main/ts/ephox/sugar/api/node/SugarElement.ts": 
/*!*****************************************************************!*\
  !*** ../sugar/src/main/ts/ephox/sugar/api/node/SugarElement.ts ***!
  \*****************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SugarElement: () => (SugarElement)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Optional.ts");

const fromHtml = (html, scope)=>{
    const doc = scope || document;
    const div = doc.createElement('div');
    div.innerHTML = html;
    if (!div.hasChildNodes() || div.childNodes.length > 1) {
        const message = 'HTML does not have a single root node';
        // eslint-disable-next-line no-console
        console.error(message, html);
        throw new Error(message);
    }
    return fromDom(div.childNodes[0]);
};
const fromTag = (tag, scope)=>{
    const doc = scope || document;
    const node = doc.createElement(tag);
    return fromDom(node);
};
const fromText = (text, scope)=>{
    const doc = scope || document;
    const node = doc.createTextNode(text);
    return fromDom(node);
};
const fromDom = (node)=>{
    // TODO: Consider removing this check, but left atm for safety
    if (node === null || node === undefined) {
        throw new Error('Node cannot be null or undefined');
    }
    return {
        dom: node
    };
};
const fromPoint = (docElm, x, y)=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.Optional.from(docElm.dom.elementFromPoint(x, y)).map(fromDom);
// tslint:disable-next-line:variable-name
const SugarElement = {
    fromHtml,
    fromTag,
    fromText,
    fromDom,
    fromPoint
};



}),
"../sugar/src/main/ts/ephox/sugar/api/node/SugarNode.ts": 
/*!**************************************************************!*\
  !*** ../sugar/src/main/ts/ephox/sugar/api/node/SugarNode.ts ***!
  \**************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  isComment: () => (isComment),
  isDocument: () => (isDocument),
  isDocumentFragment: () => (isDocumentFragment),
  isElement: () => (isElement),
  isHTMLElement: () => (isHTMLElement),
  isTag: () => (isTag),
  isText: () => (isText),
  name: () => (name),
  type: () => (type),
  value: () => (value)
});
/* ESM import */var _ephox_sand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ephox/sand */ "../sand/src/main/ts/ephox/sand/api/SandHTMLElement.ts");
/* ESM import */var _NodeTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NodeTypes */ "../sugar/src/main/ts/ephox/sugar/api/node/NodeTypes.ts");


const name = (element)=>{
    const r = element.dom.nodeName;
    return r.toLowerCase();
};
const type = (element)=>element.dom.nodeType;
const value = (element)=>element.dom.nodeValue;
const isType = (t)=>(element)=>type(element) === t;
const isComment = (element)=>type(element) === _NodeTypes__WEBPACK_IMPORTED_MODULE_0__.COMMENT || name(element) === '#comment';
const isHTMLElement = (element)=>isElement(element) && _ephox_sand__WEBPACK_IMPORTED_MODULE_1__.isPrototypeOf(element.dom);
const isElement = isType(_NodeTypes__WEBPACK_IMPORTED_MODULE_0__.ELEMENT);
const isText = isType(_NodeTypes__WEBPACK_IMPORTED_MODULE_0__.TEXT);
const isDocument = isType(_NodeTypes__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT);
const isDocumentFragment = isType(_NodeTypes__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT_FRAGMENT);
const isTag = (tag)=>(e)=>isElement(e) && name(e) === tag;



}),
"../sugar/src/main/ts/ephox/sugar/api/properties/Attribute.ts": 
/*!********************************************************************!*\
  !*** ../sugar/src/main/ts/ephox/sugar/api/properties/Attribute.ts ***!
  \********************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  clone: () => (clone),
  get: () => (get),
  getOpt: () => (getOpt),
  has: () => (has),
  hasNone: () => (hasNone),
  remove: () => (remove),
  set: () => (set),
  setAll: () => (setAll),
  setOptions: () => (setOptions),
  transfer: () => (transfer)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Type.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Obj.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Optional.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Arr.ts");
/* ESM import */var _node_SugarNode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../node/SugarNode */ "../sugar/src/main/ts/ephox/sugar/api/node/SugarNode.ts");


const rawSet = (dom, key, value)=>{
    /*
   * JQuery coerced everything to a string, and silently did nothing on text node/null/undefined.
   *
   * We fail on those invalid cases, only allowing numbers and booleans.
   */ if (_ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.isString(value) || _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.isBoolean(value) || _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.isNumber(value)) {
        dom.setAttribute(key, value + '');
    } else {
        // eslint-disable-next-line no-console
        console.error('Invalid call to Attribute.set. Key ', key, ':: Value ', value, ':: Element ', dom);
        throw new Error('Attribute value was not simple');
    }
};
const set = (element, key, value)=>{
    rawSet(element.dom, key, value);
};
const setAll = (element, attrs)=>{
    const dom = element.dom;
    _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.each(attrs, (v, k)=>{
        rawSet(dom, k, v);
    });
};
const setOptions = (element, attrs)=>{
    _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.each(attrs, (v, k)=>{
        v.fold(()=>{
            remove(element, k);
        }, (value)=>{
            rawSet(element.dom, k, value);
        });
    });
};
const get = (element, key)=>{
    const v = element.dom.getAttribute(key);
    // undefined is the more appropriate value for JS, and this matches JQuery
    return v === null ? undefined : v;
};
const getOpt = (element, key)=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.Optional.from(get(element, key));
const has = (element, key)=>{
    const dom = element.dom;
    // return false for non-element nodes, no point in throwing an error
    return dom && dom.hasAttribute ? dom.hasAttribute(key) : false;
};
const remove = (element, key)=>{
    element.dom.removeAttribute(key);
};
const hasNone = (element)=>{
    const attrs = element.dom.attributes;
    return attrs === undefined || attrs === null || attrs.length === 0;
};
const clone = (element)=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_3__.foldl(element.dom.attributes, (acc, attr)=>{
        acc[attr.name] = attr.value;
        return acc;
    }, {});
const transferOne = (source, destination, attr)=>{
    // NOTE: We don't want to clobber any existing attributes
    if (!has(destination, attr)) {
        getOpt(source, attr).each((srcValue)=>set(destination, attr, srcValue));
    }
};
// Transfer attributes(attrs) from source to destination, unless they are already present
const transfer = (source, destination, attrs)=>{
    if (!_node_SugarNode__WEBPACK_IMPORTED_MODULE_4__.isElement(source) || !_node_SugarNode__WEBPACK_IMPORTED_MODULE_4__.isElement(destination)) {
        return;
    }
    _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__.each(attrs, (attr)=>{
        transferOne(source, destination, attr);
    });
};



}),
"./src/plugins/image/main/ts/Plugin.ts": 
/*!*********************************************!*\
  !*** ./src/plugins/image/main/ts/Plugin.ts ***!
  \*********************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var tinymce_core_api_PluginManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/PluginManager */ "./lib/globals/tinymce/core/api/PluginManager.js");
/* ESM import */var _api_Commands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/Commands */ "./src/plugins/image/main/ts/api/Commands.ts");
/* ESM import */var _api_Options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/Options */ "./src/plugins/image/main/ts/api/Options.ts");
/* ESM import */var _core_FilterContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/FilterContent */ "./src/plugins/image/main/ts/core/FilterContent.ts");
/* ESM import */var _ui_Buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/Buttons */ "./src/plugins/image/main/ts/ui/Buttons.ts");





/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>{
    tinymce_core_api_PluginManager__WEBPACK_IMPORTED_MODULE_0__["default"].add('image', (editor)=>{
        _api_Options__WEBPACK_IMPORTED_MODULE_2__.register(editor);
        _core_FilterContent__WEBPACK_IMPORTED_MODULE_3__.setup(editor);
        _ui_Buttons__WEBPACK_IMPORTED_MODULE_4__.register(editor);
        _api_Commands__WEBPACK_IMPORTED_MODULE_1__.register(editor);
    });
});


}),
"./src/plugins/image/main/ts/api/Commands.ts": 
/*!***************************************************!*\
  !*** ./src/plugins/image/main/ts/api/Commands.ts ***!
  \***************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  register: () => (register)
});
/* ESM import */var _core_ImageSelection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/ImageSelection */ "./src/plugins/image/main/ts/core/ImageSelection.ts");
/* ESM import */var _ui_Dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/Dialog */ "./src/plugins/image/main/ts/ui/Dialog.ts");


const register = (editor)=>{
    editor.addCommand('mceImage', (0,_ui_Dialog__WEBPACK_IMPORTED_MODULE_1__.Dialog)(editor).open);
    // TODO: This command is likely to be short lived we only need it until we expose the rtc model though a new api so it shouldn't be documented
    // it's just a command since that is a convenient method for the rtc plugin to override the default dom mutation behaviour
    editor.addCommand('mceUpdateImage', (_ui, data)=>{
        editor.undoManager.transact(()=>(0,_core_ImageSelection__WEBPACK_IMPORTED_MODULE_0__.insertOrUpdateImage)(editor, data));
    });
};



}),
"./src/plugins/image/main/ts/api/Options.ts": 
/*!**************************************************!*\
  !*** ./src/plugins/image/main/ts/api/Options.ts ***!
  \**************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getClassList: () => (getClassList),
  getImageList: () => (getImageList),
  getPrependUrl: () => (getPrependUrl),
  hasAdvTab: () => (hasAdvTab),
  hasDescription: () => (hasDescription),
  hasDimensions: () => (hasDimensions),
  hasImageCaption: () => (hasImageCaption),
  hasImageTitle: () => (hasImageTitle),
  hasUploadHandler: () => (hasUploadHandler),
  hasUploadTab: () => (hasUploadTab),
  hasUploadUrl: () => (hasUploadUrl),
  isAutomaticUploadsEnabled: () => (isAutomaticUploadsEnabled),
  register: () => (register),
  showAccessibilityOptions: () => (showAccessibilityOptions)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Type.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Strings.ts");

const option = (name)=>(editor)=>editor.options.get(name);
const register = (editor)=>{
    const registerOption = editor.options.register;
    registerOption('image_dimensions', {
        processor: 'boolean',
        default: true
    });
    registerOption('image_advtab', {
        processor: 'boolean',
        default: false
    });
    registerOption('image_uploadtab', {
        processor: 'boolean',
        default: true
    });
    registerOption('image_prepend_url', {
        processor: 'string',
        default: ''
    });
    registerOption('image_class_list', {
        processor: 'object[]'
    });
    registerOption('image_description', {
        processor: 'boolean',
        default: true
    });
    registerOption('image_title', {
        processor: 'boolean',
        default: false
    });
    registerOption('image_caption', {
        processor: 'boolean',
        default: false
    });
    registerOption('image_list', {
        processor: (value)=>{
            const valid = value === false || _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.isString(value) || _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.isArrayOf(value, _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.isObject) || _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.isFunction(value);
            return valid ? {
                value,
                valid
            } : {
                valid: false,
                message: 'Must be false, a string, an array or a function.'
            };
        },
        default: false
    });
};
const hasDimensions = option('image_dimensions');
const hasAdvTab = option('image_advtab');
const hasUploadTab = option('image_uploadtab');
const getPrependUrl = option('image_prepend_url');
const getClassList = option('image_class_list');
const hasDescription = option('image_description');
const hasImageTitle = option('image_title');
const hasImageCaption = option('image_caption');
const getImageList = option('image_list');
const showAccessibilityOptions = option('a11y_advanced_options');
const isAutomaticUploadsEnabled = option('automatic_uploads');
const hasUploadUrl = (editor)=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.isNotEmpty(editor.options.get('images_upload_url'));
const hasUploadHandler = (editor)=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.isNonNullable(editor.options.get('images_upload_handler'));



}),
"./src/plugins/image/main/ts/core/FilterContent.ts": 
/*!*********************************************************!*\
  !*** ./src/plugins/image/main/ts/core/FilterContent.ts ***!
  \*********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  setup: () => (setup)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Type.ts");
/* ESM import */var tinymce_core_api_util_Tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/util/Tools */ "./lib/globals/tinymce/core/api/util/Tools.js");


const hasImageClass = (node)=>{
    const className = node.attr('class');
    return _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.isNonNullable(className) && /\bimage\b/.test(className);
};
const toggleContentEditableState = (state)=>(nodes)=>{
        let i = nodes.length;
        const toggleContentEditable = (node)=>{
            node.attr('contenteditable', state ? 'true' : null);
        };
        while(i--){
            const node = nodes[i];
            if (hasImageClass(node)) {
                node.attr('contenteditable', state ? 'false' : null);
                tinymce_core_api_util_Tools__WEBPACK_IMPORTED_MODULE_0__["default"].each(node.getAll('figcaption'), toggleContentEditable);
            }
        }
    };
const setup = (editor)=>{
    editor.on('PreInit', ()=>{
        editor.parser.addNodeFilter('figure', toggleContentEditableState(true));
        editor.serializer.addNodeFilter('figure', toggleContentEditableState(false));
    });
};



}),
"./src/plugins/image/main/ts/core/ImageData.ts": 
/*!*****************************************************!*\
  !*** ./src/plugins/image/main/ts/core/ImageData.ts ***!
  \*****************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  create: () => (create),
  defaultData: () => (defaultData),
  getStyleValue: () => (getStyleValue),
  isFigure: () => (isFigure),
  isImage: () => (isImage),
  read: () => (read),
  write: () => (write)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Type.ts");
/* ESM import */var _ephox_sugar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ephox/sugar */ "../sugar/src/main/ts/ephox/sugar/api/node/SugarElement.ts");
/* ESM import */var _ephox_sugar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ephox/sugar */ "../sugar/src/main/ts/ephox/sugar/api/properties/Attribute.ts");
/* ESM import */var tinymce_core_api_dom_DOMUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/dom/DOMUtils */ "./lib/globals/tinymce/core/api/dom/DOMUtils.js");
/* ESM import */var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ "./src/plugins/image/main/ts/core/Utils.ts");




const DOM = tinymce_core_api_dom_DOMUtils__WEBPACK_IMPORTED_MODULE_0__["default"].DOM;
const getHspace = (image)=>{
    if (image.style.marginLeft && image.style.marginRight && image.style.marginLeft === image.style.marginRight) {
        return _Utils__WEBPACK_IMPORTED_MODULE_1__.removePixelSuffix(image.style.marginLeft);
    } else {
        return '';
    }
};
const getVspace = (image)=>{
    if (image.style.marginTop && image.style.marginBottom && image.style.marginTop === image.style.marginBottom) {
        return _Utils__WEBPACK_IMPORTED_MODULE_1__.removePixelSuffix(image.style.marginTop);
    } else {
        return '';
    }
};
const getBorder = (image)=>{
    if (image.style.borderWidth) {
        return _Utils__WEBPACK_IMPORTED_MODULE_1__.removePixelSuffix(image.style.borderWidth);
    } else {
        return '';
    }
};
const getAttrib = (image, name)=>{
    if (image.hasAttribute(name)) {
        return image.getAttribute(name) ?? '';
    } else {
        return '';
    }
};
const hasCaption = (image)=>image.parentNode !== null && image.parentNode.nodeName === 'FIGURE';
const updateAttrib = (image, name, value)=>{
    if (value === '' || value === null) {
        image.removeAttribute(name);
    } else {
        image.setAttribute(name, value);
    }
};
const wrapInFigure = (image)=>{
    const figureElm = DOM.create('figure', {
        class: 'image'
    });
    DOM.insertAfter(figureElm, image);
    figureElm.appendChild(image);
    figureElm.appendChild(DOM.create('figcaption', {
        contentEditable: 'true'
    }, 'Caption'));
    figureElm.contentEditable = 'false';
};
const removeFigure = (image)=>{
    const figureElm = image.parentNode;
    if (_ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.isNonNullable(figureElm)) {
        DOM.insertAfter(image, figureElm);
        DOM.remove(figureElm);
    }
};
const toggleCaption = (image)=>{
    if (hasCaption(image)) {
        removeFigure(image);
    } else {
        wrapInFigure(image);
    }
};
const normalizeStyle = (image, normalizeCss)=>{
    const attrValue = image.getAttribute('style');
    const value = normalizeCss(attrValue !== null ? attrValue : '');
    if (value.length > 0) {
        image.setAttribute('style', value);
        image.setAttribute('data-mce-style', value);
    } else {
        image.removeAttribute('style');
    }
};
const setSize = (name, normalizeCss)=>(image, name, value)=>{
        const styles = image.style;
        if (styles[name]) {
            styles[name] = _Utils__WEBPACK_IMPORTED_MODULE_1__.addPixelSuffix(value);
            normalizeStyle(image, normalizeCss);
        } else {
            updateAttrib(image, name, value);
        }
    };
const getSize = (image, name)=>{
    if (image.style[name]) {
        return _Utils__WEBPACK_IMPORTED_MODULE_1__.removePixelSuffix(image.style[name]);
    } else {
        return getAttrib(image, name);
    }
};
const setHspace = (image, value)=>{
    const pxValue = _Utils__WEBPACK_IMPORTED_MODULE_1__.addPixelSuffix(value);
    image.style.marginLeft = pxValue;
    image.style.marginRight = pxValue;
};
const setVspace = (image, value)=>{
    const pxValue = _Utils__WEBPACK_IMPORTED_MODULE_1__.addPixelSuffix(value);
    image.style.marginTop = pxValue;
    image.style.marginBottom = pxValue;
};
const setBorder = (image, value)=>{
    const pxValue = _Utils__WEBPACK_IMPORTED_MODULE_1__.addPixelSuffix(value);
    image.style.borderWidth = pxValue;
};
const setBorderStyle = (image, value)=>{
    image.style.borderStyle = value;
};
const getBorderStyle = (image)=>image.style.borderStyle ?? '';
const isFigure = (elm)=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.isNonNullable(elm) && elm.nodeName === 'FIGURE';
const isImage = (elm)=>elm.nodeName === 'IMG';
const getIsDecorative = (image)=>{
    const alt = DOM.getAttrib(image, 'alt');
    const role = DOM.getAttrib(image, 'role');
    // WCAG Technique H67: Using null alt text and no title attribute on img elements for images that AT should ignore
    // Source: https://www.w3.org/TR/WCAG20-TECHS/H67.html
    // Key point: Decorative images should have alt="" and either no title or empty title (title="")
    // ARIA 1.2 Specification: Defines role="presentation" and role="none" as synonymous roles
    // Source: https://www.w3.org/TR/wai-aria-1.2/
    // Key point: These roles remove semantic meaning and prohibit aria-label and aria-labelledby
    const hasAlt = image.hasAttribute('alt');
    return hasAlt && alt.length === 0 || role === 'presentation' || role === 'none';
};
const getAlt = (image)=>{
    if (getIsDecorative(image)) {
        return '';
    } else {
        return getAttrib(image, 'alt');
    }
};
const defaultData = ()=>({
        src: '',
        alt: '',
        title: '',
        width: '',
        height: '',
        class: '',
        style: '',
        caption: false,
        hspace: '',
        vspace: '',
        border: '',
        borderStyle: '',
        isDecorative: false
    });
const getStyleValue = (normalizeCss, data)=>{
    const image = document.createElement('img');
    updateAttrib(image, 'style', data.style);
    if (getHspace(image) || data.hspace !== '') {
        setHspace(image, data.hspace);
    }
    if (getVspace(image) || data.vspace !== '') {
        setVspace(image, data.vspace);
    }
    if (getBorder(image) || data.border !== '') {
        setBorder(image, data.border);
    }
    if (getBorderStyle(image) || data.borderStyle !== '') {
        setBorderStyle(image, data.borderStyle);
    }
    return normalizeCss(image.getAttribute('style') ?? '');
};
const create = (normalizeCss, data)=>{
    const image = document.createElement('img');
    write(normalizeCss, {
        ...data,
        caption: false
    }, image);
    // Always set alt even if data.alt is an empty string
    setAlt(image, data.alt, data.isDecorative);
    if (data.caption) {
        const figure = DOM.create('figure', {
            class: 'image'
        });
        figure.appendChild(image);
        figure.appendChild(DOM.create('figcaption', {
            contentEditable: 'true'
        }, 'Caption'));
        figure.contentEditable = 'false';
        return figure;
    } else {
        return image;
    }
};
const read = (normalizeCss, image)=>({
        src: getAttrib(image, 'src'),
        alt: getAlt(image),
        title: getAttrib(image, 'title'),
        width: getSize(image, 'width'),
        height: getSize(image, 'height'),
        class: getAttrib(image, 'class'),
        style: normalizeCss(getAttrib(image, 'style')),
        caption: hasCaption(image),
        hspace: getHspace(image),
        vspace: getVspace(image),
        border: getBorder(image),
        borderStyle: getBorderStyle(image),
        isDecorative: getIsDecorative(image)
    });
const updateProp = (image, oldData, newData, name, set)=>{
    if (newData[name] !== oldData[name]) {
        set(image, name, String(newData[name]));
    }
};
const setAlt = (image, alt, isDecorative)=>{
    if (isDecorative) {
        DOM.setAttrib(image, 'role', 'presentation');
        // unfortunately can't set "" attr value with domutils
        const sugarImage = _ephox_sugar__WEBPACK_IMPORTED_MODULE_3__.SugarElement.fromDom(image);
        _ephox_sugar__WEBPACK_IMPORTED_MODULE_4__.set(sugarImage, 'alt', '');
    } else {
        if (_ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.isNull(alt)) {
            const sugarImage = _ephox_sugar__WEBPACK_IMPORTED_MODULE_3__.SugarElement.fromDom(image);
            _ephox_sugar__WEBPACK_IMPORTED_MODULE_4__.remove(sugarImage, 'alt');
        } else {
            // unfortunately can't set "" attr value with domutils
            const sugarImage = _ephox_sugar__WEBPACK_IMPORTED_MODULE_3__.SugarElement.fromDom(image);
            _ephox_sugar__WEBPACK_IMPORTED_MODULE_4__.set(sugarImage, 'alt', alt);
        }
        if (DOM.getAttrib(image, 'role') === 'presentation') {
            DOM.setAttrib(image, 'role', '');
        }
    }
};
const updateAlt = (image, oldData, newData)=>{
    if (newData.alt !== oldData.alt || newData.isDecorative !== oldData.isDecorative) {
        setAlt(image, newData.alt, newData.isDecorative);
    }
};
const normalized = (set, normalizeCss)=>(image, name, value)=>{
        set(image, value);
        normalizeStyle(image, normalizeCss);
    };
const write = (normalizeCss, newData, image)=>{
    const oldData = read(normalizeCss, image);
    updateProp(image, oldData, newData, 'caption', (image, _name, _value)=>toggleCaption(image));
    updateProp(image, oldData, newData, 'src', updateAttrib);
    updateProp(image, oldData, newData, 'title', updateAttrib);
    updateProp(image, oldData, newData, 'width', setSize('width', normalizeCss));
    updateProp(image, oldData, newData, 'height', setSize('height', normalizeCss));
    updateProp(image, oldData, newData, 'class', updateAttrib);
    updateProp(image, oldData, newData, 'style', normalized((image, value)=>updateAttrib(image, 'style', value), normalizeCss));
    updateProp(image, oldData, newData, 'hspace', normalized(setHspace, normalizeCss));
    updateProp(image, oldData, newData, 'vspace', normalized(setVspace, normalizeCss));
    updateProp(image, oldData, newData, 'border', normalized(setBorder, normalizeCss));
    updateProp(image, oldData, newData, 'borderStyle', normalized(setBorderStyle, normalizeCss));
    updateAlt(image, oldData, newData);
};



}),
"./src/plugins/image/main/ts/core/ImageSelection.ts": 
/*!**********************************************************!*\
  !*** ./src/plugins/image/main/ts/core/ImageSelection.ts ***!
  \**********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getSelectedImage: () => (getSelectedImage),
  insertOrUpdateImage: () => (insertOrUpdateImage),
  normalizeCss: () => (normalizeCss),
  readImageDataFromSelection: () => (readImageDataFromSelection)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Obj.ts");
/* ESM import */var _ImageData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageData */ "./src/plugins/image/main/ts/core/ImageData.ts");
/* ESM import */var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ "./src/plugins/image/main/ts/core/Utils.ts");



const normalizeCss = (editor, cssText)=>{
    const css = editor.dom.styles.parse(cssText);
    const mergedCss = _Utils__WEBPACK_IMPORTED_MODULE_1__.mergeMargins(css);
    const compressed = editor.dom.styles.parse(editor.dom.styles.serialize(mergedCss));
    return editor.dom.styles.serialize(compressed);
};
const getSelectedImage = (editor)=>{
    const imgElm = editor.selection.getNode();
    const figureElm = editor.dom.getParent(imgElm, 'figure.image');
    if (figureElm) {
        return editor.dom.select('img', figureElm)[0];
    }
    if (imgElm && (imgElm.nodeName !== 'IMG' || _Utils__WEBPACK_IMPORTED_MODULE_1__.isPlaceholderImage(imgElm))) {
        return null;
    }
    return imgElm;
};
const splitTextBlock = (editor, figure)=>{
    const dom = editor.dom;
    const textBlockElements = _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.filter(editor.schema.getTextBlockElements(), (_, parentElm)=>!editor.schema.isValidChild(parentElm, 'figure'));
    const textBlock = dom.getParent(figure.parentNode, (node)=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.hasNonNullableKey(textBlockElements, node.nodeName), editor.getBody());
    if (textBlock) {
        return dom.split(textBlock, figure) ?? figure;
    } else {
        return figure;
    }
};
const readImageDataFromSelection = (editor)=>{
    const image = getSelectedImage(editor);
    return image ? (0,_ImageData__WEBPACK_IMPORTED_MODULE_0__.read)((css)=>normalizeCss(editor, css), image) : (0,_ImageData__WEBPACK_IMPORTED_MODULE_0__.defaultData)();
};
const insertImageAtCaret = (editor, data)=>{
    const elm = (0,_ImageData__WEBPACK_IMPORTED_MODULE_0__.create)((css)=>normalizeCss(editor, css), data);
    editor.dom.setAttrib(elm, 'data-mce-id', '__mcenew');
    editor.focus();
    editor.insertContent(elm.outerHTML);
    const insertedElm = editor.dom.select('*[data-mce-id="__mcenew"]')[0];
    editor.dom.setAttrib(insertedElm, 'data-mce-id', null);
    if ((0,_ImageData__WEBPACK_IMPORTED_MODULE_0__.isFigure)(insertedElm)) {
        const figure = splitTextBlock(editor, insertedElm);
        editor.selection.select(figure);
    } else {
        editor.selection.select(insertedElm);
    }
};
const syncSrcAttr = (editor, image)=>{
    editor.dom.setAttrib(image, 'src', image.getAttribute('src'));
};
const deleteImage = (editor, image)=>{
    if (image) {
        const elm = editor.dom.is(image.parentNode, 'figure.image') ? image.parentNode : image;
        editor.dom.remove(elm);
        editor.focus();
        editor.nodeChanged();
        if (editor.dom.isEmpty(editor.getBody())) {
            editor.setContent('');
            editor.selection.setCursorLocation();
        }
    }
};
const writeImageDataToSelection = (editor, data)=>{
    const image = getSelectedImage(editor);
    if (image) {
        (0,_ImageData__WEBPACK_IMPORTED_MODULE_0__.write)((css)=>normalizeCss(editor, css), data, image);
        syncSrcAttr(editor, image);
        if ((0,_ImageData__WEBPACK_IMPORTED_MODULE_0__.isFigure)(image.parentNode)) {
            editor.dom.setStyle(image, 'float', '');
            const figure = image.parentNode;
            splitTextBlock(editor, figure);
            editor.selection.select(image.parentNode);
        } else {
            editor.selection.select(image);
            _Utils__WEBPACK_IMPORTED_MODULE_1__.waitLoadImage(editor, data, image);
        }
    }
};
const sanitizeImageData = (editor, data)=>{
    // Sanitize the URL
    const src = data.src;
    return {
        ...data,
        src: _Utils__WEBPACK_IMPORTED_MODULE_1__.isSafeImageUrl(editor, src) ? src : ''
    };
};
const insertOrUpdateImage = (editor, partialData)=>{
    const image = getSelectedImage(editor);
    if (image) {
        const selectedImageData = (0,_ImageData__WEBPACK_IMPORTED_MODULE_0__.read)((css)=>normalizeCss(editor, css), image);
        const data = {
            ...selectedImageData,
            ...partialData
        };
        const sanitizedData = sanitizeImageData(editor, data);
        if (data.src) {
            writeImageDataToSelection(editor, sanitizedData);
        } else {
            deleteImage(editor, image);
        }
    } else if (partialData.src) {
        insertImageAtCaret(editor, {
            ...(0,_ImageData__WEBPACK_IMPORTED_MODULE_0__.defaultData)(),
            ...partialData
        });
    }
};



}),
"./src/plugins/image/main/ts/core/ListUtils.ts": 
/*!*****************************************************!*\
  !*** ./src/plugins/image/main/ts/core/ListUtils.ts ***!
  \*****************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ListUtils: () => (ListUtils)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Type.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Optional.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Obj.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Arr.ts");
/* ESM import */var tinymce_core_api_util_Tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/util/Tools */ "./lib/globals/tinymce/core/api/util/Tools.js");


const getValue = (item)=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.isString(item.value) ? item.value : '';
const getText = (item)=>{
    if (_ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.isString(item.text)) {
        return item.text;
    } else if (_ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.isString(item.title)) {
        return item.title;
    } else {
        return '';
    }
};
const sanitizeList = (list, extractValue)=>{
    const out = [];
    tinymce_core_api_util_Tools__WEBPACK_IMPORTED_MODULE_0__["default"].each(list, (item)=>{
        const text = getText(item);
        if (item.menu !== undefined) {
            const items = sanitizeList(item.menu, extractValue);
            out.push({
                text,
                items
            }); // list group
        } else {
            const value = extractValue(item);
            out.push({
                text,
                value
            }); // list value
        }
    });
    return out;
};
const sanitizer = (extractor = getValue)=>(list)=>{
        if (list) {
            return _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.Optional.from(list).map((list)=>sanitizeList(list, extractor));
        } else {
            return _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.Optional.none();
        }
    };
const sanitize = (list)=>sanitizer(getValue)(list);
const isGroup = (item)=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_3__.has(item, 'items');
const findEntryDelegate = (list, value)=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_4__.findMap(list, (item)=>{
        if (isGroup(item)) {
            return findEntryDelegate(item.items, value);
        } else if (item.value === value) {
            return _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.Optional.some(item);
        } else {
            return _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.Optional.none();
        }
    });
const findEntry = (optList, value)=>optList.bind((list)=>findEntryDelegate(list, value));
const ListUtils = {
    sanitizer,
    sanitize,
    findEntry
};


}),
"./src/plugins/image/main/ts/core/Utils.ts": 
/*!*************************************************!*\
  !*** ./src/plugins/image/main/ts/core/Utils.ts ***!
  \*************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  addPixelSuffix: () => (addPixelSuffix),
  blobToDataUri: () => (blobToDataUri),
  createImageList: () => (createImageList),
  getImageSize: () => (getImageSize),
  isPlaceholderImage: () => (isPlaceholderImage),
  isSafeImageUrl: () => (isSafeImageUrl),
  mergeMargins: () => (mergeMargins),
  removePixelSuffix: () => (removePixelSuffix),
  waitLoadImage: () => (waitLoadImage)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Type.ts");
/* ESM import */var tinymce_core_api_util_URI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/util/URI */ "./lib/globals/tinymce/core/api/util/URI.js");
/* ESM import */var _api_Options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/Options */ "./src/plugins/image/main/ts/api/Options.ts");



// TODO: Figure out if these would ever be something other than numbers. This was added in: #TINY-1350
const parseIntAndGetMax = (val1, val2)=>Math.max(parseInt(val1, 10), parseInt(val2, 10));
const getImageSize = (url)=>new Promise((callback)=>{
        const img = document.createElement('img');
        const done = (dimensions)=>{
            if (img.parentNode) {
                img.parentNode.removeChild(img);
            }
            callback(dimensions);
        };
        img.addEventListener('load', ()=>{
            const width = parseIntAndGetMax(img.width, img.clientWidth);
            const height = parseIntAndGetMax(img.height, img.clientHeight);
            const dimensions = {
                width,
                height
            };
            done(Promise.resolve(dimensions));
        });
        img.addEventListener('error', ()=>{
            done(Promise.reject(`Failed to get image dimensions for: ${url}`));
        });
        const style = img.style;
        style.visibility = 'hidden';
        style.position = 'fixed';
        style.bottom = style.left = '0px';
        style.width = style.height = 'auto';
        document.body.appendChild(img);
        img.src = url;
    });
const removePixelSuffix = (value)=>{
    if (value) {
        value = value.replace(/px$/, '');
    }
    return value;
};
const addPixelSuffix = (value)=>{
    if (value.length > 0 && /^[0-9]+$/.test(value)) {
        value += 'px';
    }
    return value;
};
const mergeMargins = (css)=>{
    if (css.margin) {
        const splitMargin = String(css.margin).split(' ');
        switch(splitMargin.length){
            case 1:
                css['margin-top'] = css['margin-top'] || splitMargin[0];
                css['margin-right'] = css['margin-right'] || splitMargin[0];
                css['margin-bottom'] = css['margin-bottom'] || splitMargin[0];
                css['margin-left'] = css['margin-left'] || splitMargin[0];
                break;
            case 2:
                css['margin-top'] = css['margin-top'] || splitMargin[0];
                css['margin-right'] = css['margin-right'] || splitMargin[1];
                css['margin-bottom'] = css['margin-bottom'] || splitMargin[0];
                css['margin-left'] = css['margin-left'] || splitMargin[1];
                break;
            case 3:
                css['margin-top'] = css['margin-top'] || splitMargin[0];
                css['margin-right'] = css['margin-right'] || splitMargin[1];
                css['margin-bottom'] = css['margin-bottom'] || splitMargin[2];
                css['margin-left'] = css['margin-left'] || splitMargin[1];
                break;
            case 4:
                css['margin-top'] = css['margin-top'] || splitMargin[0];
                css['margin-right'] = css['margin-right'] || splitMargin[1];
                css['margin-bottom'] = css['margin-bottom'] || splitMargin[2];
                css['margin-left'] = css['margin-left'] || splitMargin[3];
        }
        delete css.margin;
    }
    return css;
};
// TODO: Input on this callback should really be validated
const createImageList = (editor, callback)=>{
    const imageList = _api_Options__WEBPACK_IMPORTED_MODULE_1__.getImageList(editor);
    if (_ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.isString(imageList)) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        fetch(imageList).then((res)=>{
            if (res.ok) {
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                res.json().then(callback);
            }
        });
    } else if (_ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.isFunction(imageList)) {
        imageList(callback);
    } else {
        callback(imageList);
    }
};
const waitLoadImage = (editor, data, imgElm)=>{
    const selectImage = ()=>{
        imgElm.onload = imgElm.onerror = null;
        if (editor.selection) {
            editor.selection.select(imgElm);
            editor.nodeChanged();
        }
    };
    imgElm.onload = ()=>{
        if (!data.width && !data.height && _api_Options__WEBPACK_IMPORTED_MODULE_1__.hasDimensions(editor)) {
            editor.dom.setAttribs(imgElm, {
                width: String(imgElm.clientWidth),
                height: String(imgElm.clientHeight)
            });
        }
        selectImage();
    };
    imgElm.onerror = selectImage;
};
const blobToDataUri = (blob)=>new Promise((resolve, reject)=>{
        const reader = new FileReader();
        reader.onload = ()=>{
            resolve(reader.result);
        };
        reader.onerror = ()=>{
            reject(reader.error?.message);
        };
        reader.readAsDataURL(blob);
    });
const isPlaceholderImage = (imgElm)=>imgElm.nodeName === 'IMG' && (imgElm.hasAttribute('data-mce-object') || imgElm.hasAttribute('data-mce-placeholder'));
const isSafeImageUrl = (editor, src)=>{
    const getOption = editor.options.get;
    return tinymce_core_api_util_URI__WEBPACK_IMPORTED_MODULE_0__["default"].isDomSafe(src, 'img', {
        allow_html_data_urls: getOption('allow_html_data_urls'),
        allow_script_urls: getOption('allow_script_urls'),
        allow_svg_data_urls: getOption('allow_svg_data_urls')
    });
};



}),
"./src/plugins/image/main/ts/ui/AdvTab.ts": 
/*!************************************************!*\
  !*** ./src/plugins/image/main/ts/ui/AdvTab.ts ***!
  \************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AdvTab: () => (AdvTab)
});
const makeTab = (_info)=>({
        title: 'Advanced',
        name: 'advanced',
        items: [
            {
                type: 'grid',
                columns: 2,
                items: [
                    {
                        type: 'input',
                        label: 'Vertical space',
                        name: 'vspace',
                        inputMode: 'numeric'
                    },
                    {
                        type: 'input',
                        label: 'Horizontal space',
                        name: 'hspace',
                        inputMode: 'numeric'
                    },
                    {
                        type: 'input',
                        label: 'Border width',
                        name: 'border',
                        inputMode: 'numeric'
                    },
                    {
                        type: 'listbox',
                        name: 'borderstyle',
                        label: 'Border style',
                        items: [
                            {
                                text: 'Select...',
                                value: ''
                            },
                            {
                                text: 'Solid',
                                value: 'solid'
                            },
                            {
                                text: 'Dotted',
                                value: 'dotted'
                            },
                            {
                                text: 'Dashed',
                                value: 'dashed'
                            },
                            {
                                text: 'Double',
                                value: 'double'
                            },
                            {
                                text: 'Groove',
                                value: 'groove'
                            },
                            {
                                text: 'Ridge',
                                value: 'ridge'
                            },
                            {
                                text: 'Inset',
                                value: 'inset'
                            },
                            {
                                text: 'Outset',
                                value: 'outset'
                            },
                            {
                                text: 'None',
                                value: 'none'
                            },
                            {
                                text: 'Hidden',
                                value: 'hidden'
                            }
                        ]
                    }
                ]
            }
        ]
    });
const AdvTab = {
    makeTab
};


}),
"./src/plugins/image/main/ts/ui/Buttons.ts": 
/*!*************************************************!*\
  !*** ./src/plugins/image/main/ts/ui/Buttons.ts ***!
  \*************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  register: () => (register)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Type.ts");
/* ESM import */var _core_ImageData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/ImageData */ "./src/plugins/image/main/ts/core/ImageData.ts");
/* ESM import */var _core_ImageSelection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/ImageSelection */ "./src/plugins/image/main/ts/core/ImageSelection.ts");
/* ESM import */var _core_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/Utils */ "./src/plugins/image/main/ts/core/Utils.ts");
/* ESM import */var _Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Dialog */ "./src/plugins/image/main/ts/ui/Dialog.ts");





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
    editor.ui.registry.addToggleButton('image', {
        icon: 'image',
        tooltip: 'Insert/edit image',
        onAction: (0,_Dialog__WEBPACK_IMPORTED_MODULE_3__.Dialog)(editor).open,
        onSetup: (buttonApi)=>{
            // Set the initial state and then bind to selection changes to update the state when the selection changes
            buttonApi.setActive(_ephox_katamari__WEBPACK_IMPORTED_MODULE_4__.isNonNullable(_core_ImageSelection__WEBPACK_IMPORTED_MODULE_1__.getSelectedImage(editor)));
            const unbindSelectorChanged = editor.selection.selectorChangedWithUnbind('img:not([data-mce-object]):not([data-mce-placeholder]),figure.image', buttonApi.setActive).unbind;
            const unbindEditable = onSetupEditable(editor)(buttonApi);
            return ()=>{
                unbindSelectorChanged();
                unbindEditable();
            };
        }
    });
    editor.ui.registry.addMenuItem('image', {
        icon: 'image',
        text: 'Image...',
        onAction: (0,_Dialog__WEBPACK_IMPORTED_MODULE_3__.Dialog)(editor).open,
        onSetup: onSetupEditable(editor)
    });
    editor.ui.registry.addContextMenu('image', {
        update: (element)=>editor.selection.isEditable() && ((0,_core_ImageData__WEBPACK_IMPORTED_MODULE_0__.isFigure)(element) || (0,_core_ImageData__WEBPACK_IMPORTED_MODULE_0__.isImage)(element) && !_core_Utils__WEBPACK_IMPORTED_MODULE_2__.isPlaceholderImage(element)) ? [
                'image'
            ] : []
    });
};



}),
"./src/plugins/image/main/ts/ui/Dialog.ts": 
/*!************************************************!*\
  !*** ./src/plugins/image/main/ts/ui/Dialog.ts ***!
  \************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Dialog: () => (Dialog)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Optional.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Type.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Merger.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Strings.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Arr.ts");
/* ESM import */var tinymce_core_api_util_ImageUploader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/util/ImageUploader */ "./lib/globals/tinymce/core/api/util/ImageUploader.js");
/* ESM import */var _core_ImageData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/ImageData */ "./src/plugins/image/main/ts/core/ImageData.ts");
/* ESM import */var _core_ImageSelection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/ImageSelection */ "./src/plugins/image/main/ts/core/ImageSelection.ts");
/* ESM import */var _core_ListUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/ListUtils */ "./src/plugins/image/main/ts/core/ListUtils.ts");
/* ESM import */var _core_Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Utils */ "./src/plugins/image/main/ts/core/Utils.ts");
/* ESM import */var _AdvTab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AdvTab */ "./src/plugins/image/main/ts/ui/AdvTab.ts");
/* ESM import */var _DialogInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DialogInfo */ "./src/plugins/image/main/ts/ui/DialogInfo.ts");
/* ESM import */var _MainTab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MainTab */ "./src/plugins/image/main/ts/ui/MainTab.ts");
/* ESM import */var _UploadTab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./UploadTab */ "./src/plugins/image/main/ts/ui/UploadTab.ts");










const createState = (info)=>({
        prevImage: _core_ListUtils__WEBPACK_IMPORTED_MODULE_3__.ListUtils.findEntry(info.imageList, info.image.src),
        prevAlt: info.image.alt,
        open: true
    });
const fromImageData = (image)=>({
        src: {
            value: image.src,
            meta: {}
        },
        images: image.src,
        alt: image.alt,
        title: image.title,
        dimensions: {
            width: image.width,
            height: image.height
        },
        classes: image.class,
        caption: image.caption,
        style: image.style,
        vspace: image.vspace,
        border: image.border,
        hspace: image.hspace,
        borderstyle: image.borderStyle,
        fileinput: [],
        isDecorative: image.isDecorative
    });
const toImageData = (data, removeEmptyAlt)=>({
        src: data.src.value,
        alt: (data.alt === null || data.alt.length === 0) && removeEmptyAlt ? null : data.alt,
        title: data.title,
        width: data.dimensions.width,
        height: data.dimensions.height,
        class: data.classes,
        style: data.style,
        caption: data.caption,
        hspace: data.hspace,
        vspace: data.vspace,
        border: data.border,
        borderStyle: data.borderstyle,
        isDecorative: data.isDecorative
    });
const addPrependUrl2 = (info, srcURL)=>{
    // Add the prependURL
    if (!/^(?:[a-zA-Z]+:)?\/\//.test(srcURL)) {
        return info.prependURL.bind((prependUrl)=>{
            if (srcURL.substring(0, prependUrl.length) !== prependUrl) {
                return _ephox_katamari__WEBPACK_IMPORTED_MODULE_9__.Optional.some(prependUrl + srcURL);
            }
            return _ephox_katamari__WEBPACK_IMPORTED_MODULE_9__.Optional.none();
        });
    }
    return _ephox_katamari__WEBPACK_IMPORTED_MODULE_9__.Optional.none();
};
const addPrependUrl = (info, api)=>{
    const data = api.getData();
    addPrependUrl2(info, data.src.value).each((srcURL)=>{
        api.setData({
            src: {
                value: srcURL,
                meta: data.src.meta
            }
        });
    });
};
const formFillFromMeta2 = (info, data, meta)=>{
    if (info.hasDescription && _ephox_katamari__WEBPACK_IMPORTED_MODULE_10__.isString(meta.alt)) {
        data.alt = meta.alt;
    }
    if (info.hasAccessibilityOptions) {
        data.isDecorative = meta.isDecorative || data.isDecorative || false;
    }
    if (info.hasImageTitle && _ephox_katamari__WEBPACK_IMPORTED_MODULE_10__.isString(meta.title)) {
        data.title = meta.title;
    }
    if (info.hasDimensions) {
        if (_ephox_katamari__WEBPACK_IMPORTED_MODULE_10__.isString(meta.width)) {
            data.dimensions.width = meta.width;
        }
        if (_ephox_katamari__WEBPACK_IMPORTED_MODULE_10__.isString(meta.height)) {
            data.dimensions.height = meta.height;
        }
    }
    if (_ephox_katamari__WEBPACK_IMPORTED_MODULE_10__.isString(meta.class)) {
        _core_ListUtils__WEBPACK_IMPORTED_MODULE_3__.ListUtils.findEntry(info.classList, meta.class).each((entry)=>{
            data.classes = entry.value;
        });
    }
    if (info.hasImageCaption) {
        if (_ephox_katamari__WEBPACK_IMPORTED_MODULE_10__.isBoolean(meta.caption)) {
            data.caption = meta.caption;
        }
    }
    if (info.hasAdvTab) {
        if (_ephox_katamari__WEBPACK_IMPORTED_MODULE_10__.isString(meta.style)) {
            data.style = meta.style;
        }
        if (_ephox_katamari__WEBPACK_IMPORTED_MODULE_10__.isString(meta.vspace)) {
            data.vspace = meta.vspace;
        }
        if (_ephox_katamari__WEBPACK_IMPORTED_MODULE_10__.isString(meta.border)) {
            data.border = meta.border;
        }
        if (_ephox_katamari__WEBPACK_IMPORTED_MODULE_10__.isString(meta.hspace)) {
            data.hspace = meta.hspace;
        }
        if (_ephox_katamari__WEBPACK_IMPORTED_MODULE_10__.isString(meta.borderstyle)) {
            data.borderstyle = meta.borderstyle;
        }
    }
};
const formFillFromMeta = (info, api)=>{
    const data = api.getData();
    const meta = data.src.meta;
    if (meta !== undefined) {
        const newData = _ephox_katamari__WEBPACK_IMPORTED_MODULE_11__.deepMerge({}, data);
        formFillFromMeta2(info, newData, meta);
        api.setData(newData);
    }
};
const calculateImageSize = (helpers, info, state, api)=>{
    const data = api.getData();
    const url = data.src.value;
    const meta = data.src.meta || {};
    if (!meta.width && !meta.height && info.hasDimensions) {
        if (_ephox_katamari__WEBPACK_IMPORTED_MODULE_12__.isNotEmpty(url)) {
            helpers.imageSize(url).then((size)=>{
                if (state.open) {
                    api.setData({
                        dimensions: size
                    });
                }
            })// eslint-disable-next-line no-console
            .catch((e)=>console.error(e));
        } else {
            api.setData({
                dimensions: {
                    width: '',
                    height: ''
                }
            });
        }
    }
};
const updateImagesDropdown = (info, state, api)=>{
    const data = api.getData();
    const image = _core_ListUtils__WEBPACK_IMPORTED_MODULE_3__.ListUtils.findEntry(info.imageList, data.src.value);
    state.prevImage = image;
    api.setData({
        images: image.map((entry)=>entry.value).getOr('')
    });
};
const changeSrc = (helpers, info, state, api)=>{
    addPrependUrl(info, api);
    formFillFromMeta(info, api);
    calculateImageSize(helpers, info, state, api);
    updateImagesDropdown(info, state, api);
};
const changeImages = (helpers, info, state, api)=>{
    const data = api.getData();
    const image = _core_ListUtils__WEBPACK_IMPORTED_MODULE_3__.ListUtils.findEntry(info.imageList, data.images);
    image.each((img)=>{
        const updateAlt = data.alt === '' || state.prevImage.map((image)=>image.text === data.alt).getOr(false);
        if (updateAlt) {
            if (img.value === '') {
                api.setData({
                    src: img,
                    alt: state.prevAlt
                });
            } else {
                api.setData({
                    src: img,
                    alt: img.text
                });
            }
        } else {
            api.setData({
                src: img
            });
        }
    });
    state.prevImage = image;
    changeSrc(helpers, info, state, api);
};
const changeFileInput = (helpers, info, state, api)=>{
    const data = api.getData();
    api.block('Uploading image'); // What msg do we pass to the lock?
    _ephox_katamari__WEBPACK_IMPORTED_MODULE_13__.head(data.fileinput).fold(()=>{
        api.unblock();
    }, (file)=>{
        const blobUri = URL.createObjectURL(file);
        const finalize = ()=>{
            api.unblock();
            URL.revokeObjectURL(blobUri);
        };
        const updateSrcAndSwitchTab = (url)=>{
            api.setData({
                src: {
                    value: url,
                    meta: {}
                }
            });
            api.showTab('general');
            changeSrc(helpers, info, state, api);
            api.focus('src');
        };
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        _core_Utils__WEBPACK_IMPORTED_MODULE_4__.blobToDataUri(file).then((dataUrl)=>{
            const blobInfo = helpers.createBlobCache(file, blobUri, dataUrl);
            if (info.automaticUploads) {
                helpers.uploadImage(blobInfo).then((result)=>{
                    updateSrcAndSwitchTab(result.url);
                    finalize();
                }).catch((err)=>{
                    finalize();
                    helpers.alertErr(err, ()=>{
                        api.focus('fileinput');
                    });
                });
            } else {
                helpers.addToBlobCache(blobInfo);
                updateSrcAndSwitchTab(blobInfo.blobUri());
                api.unblock();
            }
        });
    });
};
const changeHandler = (helpers, info, state)=>(api, evt)=>{
        if (evt.name === 'src') {
            changeSrc(helpers, info, state, api);
        } else if (evt.name === 'images') {
            changeImages(helpers, info, state, api);
        } else if (evt.name === 'alt') {
            state.prevAlt = api.getData().alt;
        } else if (evt.name === 'fileinput') {
            changeFileInput(helpers, info, state, api);
        } else if (evt.name === 'isDecorative') {
            api.setEnabled('alt', !api.getData().isDecorative);
        }
    };
const closeHandler = (state)=>()=>{
        state.open = false;
    };
const makeDialogBody = (info)=>{
    if (info.hasAdvTab || info.hasUploadUrl || info.hasUploadHandler) {
        const tabPanel = {
            type: 'tabpanel',
            tabs: _ephox_katamari__WEBPACK_IMPORTED_MODULE_13__.flatten([
                [
                    _MainTab__WEBPACK_IMPORTED_MODULE_7__.MainTab.makeTab(info)
                ],
                info.hasAdvTab ? [
                    _AdvTab__WEBPACK_IMPORTED_MODULE_5__.AdvTab.makeTab(info)
                ] : [],
                info.hasUploadTab && (info.hasUploadUrl || info.hasUploadHandler) ? [
                    _UploadTab__WEBPACK_IMPORTED_MODULE_8__.UploadTab.makeTab(info)
                ] : []
            ])
        };
        return tabPanel;
    } else {
        const panel = {
            type: 'panel',
            items: _MainTab__WEBPACK_IMPORTED_MODULE_7__.MainTab.makeItems(info)
        };
        return panel;
    }
};
const submitHandler = (editor, info, helpers)=>(api)=>{
        const data = _ephox_katamari__WEBPACK_IMPORTED_MODULE_11__.deepMerge(fromImageData(info.image), api.getData());
        // The data architecture relies on passing everything through the style field for validation.
        // Since the style field was removed that process must be simulated on submit.
        const finalData = {
            ...data,
            style: (0,_core_ImageData__WEBPACK_IMPORTED_MODULE_1__.getStyleValue)(helpers.normalizeCss, toImageData(data, false))
        };
        editor.execCommand('mceUpdateImage', false, toImageData(finalData, info.hasAccessibilityOptions));
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        editor.editorUpload.uploadImagesAuto();
        api.close();
    };
const imageSize = (editor)=>(url)=>{
        // If the URL isn't safe then don't attempt to load it to get the sizes
        if (!_core_Utils__WEBPACK_IMPORTED_MODULE_4__.isSafeImageUrl(editor, url)) {
            return Promise.resolve({
                width: '',
                height: ''
            });
        } else {
            return _core_Utils__WEBPACK_IMPORTED_MODULE_4__.getImageSize(editor.documentBaseURI.toAbsolute(url)).then((dimensions)=>({
                    width: String(dimensions.width),
                    height: String(dimensions.height)
                }));
        }
    };
const createBlobCache = (editor)=>(file, blobUri, dataUrl)=>editor.editorUpload.blobCache.create({
            blob: file,
            blobUri,
            name: file.name?.replace(/\.[^\.]+$/, ''),
            filename: file.name,
            base64: dataUrl.split(',')[1]
        });
const addToBlobCache = (editor)=>(blobInfo)=>{
        editor.editorUpload.blobCache.add(blobInfo);
    };
const alertErr = (editor)=>(message, callback)=>{
        editor.windowManager.alert(message, callback);
    };
const normalizeCss = (editor)=>(cssText)=>(0,_core_ImageSelection__WEBPACK_IMPORTED_MODULE_2__.normalizeCss)(editor, cssText);
const parseStyle = (editor)=>(cssText)=>editor.dom.parseStyle(cssText);
const serializeStyle = (editor)=>(stylesArg, name)=>editor.dom.serializeStyle(stylesArg, name);
const uploadImage = (editor)=>(blobInfo)=>(0,tinymce_core_api_util_ImageUploader__WEBPACK_IMPORTED_MODULE_0__["default"])(editor).upload([
            blobInfo
        ], false).then((results)=>{
            if (results.length === 0) {
                return Promise.reject('Failed to upload image');
            } else if (results[0].status === false) {
                return Promise.reject(results[0].error?.message);
            } else {
                return results[0];
            }
        });
const Dialog = (editor)=>{
    const helpers = {
        imageSize: imageSize(editor),
        addToBlobCache: addToBlobCache(editor),
        createBlobCache: createBlobCache(editor),
        alertErr: alertErr(editor),
        normalizeCss: normalizeCss(editor),
        parseStyle: parseStyle(editor),
        serializeStyle: serializeStyle(editor),
        uploadImage: uploadImage(editor)
    };
    const open = ()=>{
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        (0,_DialogInfo__WEBPACK_IMPORTED_MODULE_6__.collect)(editor).then((info)=>{
            const state = createState(info);
            return {
                title: 'Insert/Edit Image',
                size: 'normal',
                body: makeDialogBody(info),
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
                initialData: fromImageData(info.image),
                onSubmit: submitHandler(editor, info, helpers),
                onChange: changeHandler(helpers, info, state),
                onClose: closeHandler(state)
            };
        }).then(editor.windowManager.open);
    };
    return {
        open
    };
};


}),
"./src/plugins/image/main/ts/ui/DialogInfo.ts": 
/*!****************************************************!*\
  !*** ./src/plugins/image/main/ts/ui/DialogInfo.ts ***!
  \****************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  collect: () => (collect)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Arr.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Optional.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Type.ts");
/* ESM import */var _api_Options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/Options */ "./src/plugins/image/main/ts/api/Options.ts");
/* ESM import */var _core_ImageSelection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/ImageSelection */ "./src/plugins/image/main/ts/core/ImageSelection.ts");
/* ESM import */var _core_ListUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/ListUtils */ "./src/plugins/image/main/ts/core/ListUtils.ts");
/* ESM import */var _core_Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/Utils */ "./src/plugins/image/main/ts/core/Utils.ts");





const collect = (editor)=>{
    const urlListSanitizer = _core_ListUtils__WEBPACK_IMPORTED_MODULE_2__.ListUtils.sanitizer((item)=>editor.convertURL(item.value || item.url || '', 'src'));
    const futureImageList = new Promise((completer)=>{
        _core_Utils__WEBPACK_IMPORTED_MODULE_3__.createImageList(editor, (imageList)=>{
            completer(urlListSanitizer(imageList).map((items)=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_4__.flatten([
                    [
                        {
                            text: 'None',
                            value: ''
                        }
                    ],
                    items
                ])));
        });
    });
    const classList = _core_ListUtils__WEBPACK_IMPORTED_MODULE_2__.ListUtils.sanitize(_api_Options__WEBPACK_IMPORTED_MODULE_0__.getClassList(editor));
    const hasAdvTab = _api_Options__WEBPACK_IMPORTED_MODULE_0__.hasAdvTab(editor);
    const hasUploadTab = _api_Options__WEBPACK_IMPORTED_MODULE_0__.hasUploadTab(editor);
    const hasUploadUrl = _api_Options__WEBPACK_IMPORTED_MODULE_0__.hasUploadUrl(editor);
    const hasUploadHandler = _api_Options__WEBPACK_IMPORTED_MODULE_0__.hasUploadHandler(editor);
    const image = (0,_core_ImageSelection__WEBPACK_IMPORTED_MODULE_1__.readImageDataFromSelection)(editor);
    const hasDescription = _api_Options__WEBPACK_IMPORTED_MODULE_0__.hasDescription(editor);
    const hasImageTitle = _api_Options__WEBPACK_IMPORTED_MODULE_0__.hasImageTitle(editor);
    const hasDimensions = _api_Options__WEBPACK_IMPORTED_MODULE_0__.hasDimensions(editor);
    const hasImageCaption = _api_Options__WEBPACK_IMPORTED_MODULE_0__.hasImageCaption(editor);
    const hasAccessibilityOptions = _api_Options__WEBPACK_IMPORTED_MODULE_0__.showAccessibilityOptions(editor);
    const automaticUploads = _api_Options__WEBPACK_IMPORTED_MODULE_0__.isAutomaticUploadsEnabled(editor);
    const prependURL = _ephox_katamari__WEBPACK_IMPORTED_MODULE_5__.Optional.some(_api_Options__WEBPACK_IMPORTED_MODULE_0__.getPrependUrl(editor)).filter((preUrl)=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_6__.isString(preUrl) && preUrl.length > 0);
    return futureImageList.then((imageList)=>({
            image,
            imageList,
            classList,
            hasAdvTab,
            hasUploadTab,
            hasUploadUrl,
            hasUploadHandler,
            hasDescription,
            hasImageTitle,
            hasDimensions,
            hasImageCaption,
            prependURL,
            hasAccessibilityOptions,
            automaticUploads
        }));
};



}),
"./src/plugins/image/main/ts/ui/MainTab.ts": 
/*!*************************************************!*\
  !*** ./src/plugins/image/main/ts/ui/MainTab.ts ***!
  \*************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  MainTab: () => (MainTab)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Arr.ts");

const makeItems = (info)=>{
    const imageUrl = {
        name: 'src',
        type: 'urlinput',
        filetype: 'image',
        label: 'Source',
        picker_text: 'Browse files'
    };
    const imageList = info.imageList.map((items)=>({
            name: 'images',
            type: 'listbox',
            label: 'Image list',
            items
        }));
    const imageDescription = {
        name: 'alt',
        type: 'input',
        label: 'Alternative description',
        enabled: !(info.hasAccessibilityOptions && info.image.isDecorative)
    };
    const imageTitle = {
        name: 'title',
        type: 'input',
        label: 'Image title'
    };
    const imageDimensions = {
        name: 'dimensions',
        type: 'sizeinput'
    };
    const isDecorative = {
        type: 'label',
        label: 'Accessibility',
        items: [
            {
                name: 'isDecorative',
                type: 'checkbox',
                label: 'Image is decorative'
            }
        ]
    };
    // TODO: the original listbox supported styled items but bridge does not seem to support this
    const classList = info.classList.map((items)=>({
            name: 'classes',
            type: 'listbox',
            label: 'Class',
            items
        }));
    const caption = {
        type: 'label',
        label: 'Caption',
        items: [
            {
                type: 'checkbox',
                name: 'caption',
                label: 'Show caption'
            }
        ]
    };
    const getDialogContainerType = (useColumns)=>useColumns ? {
            type: 'grid',
            columns: 2
        } : {
            type: 'panel'
        };
    return _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.flatten([
        [
            imageUrl
        ],
        imageList.toArray(),
        info.hasAccessibilityOptions && info.hasDescription ? [
            isDecorative
        ] : [],
        info.hasDescription ? [
            imageDescription
        ] : [],
        info.hasImageTitle ? [
            imageTitle
        ] : [],
        info.hasDimensions ? [
            imageDimensions
        ] : [],
        [
            {
                ...getDialogContainerType(info.classList.isSome() && info.hasImageCaption),
                items: _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.flatten([
                    classList.toArray(),
                    info.hasImageCaption ? [
                        caption
                    ] : []
                ])
            }
        ]
    ]);
};
const makeTab = (info)=>({
        title: 'General',
        name: 'general',
        items: makeItems(info)
    });
const MainTab = {
    makeTab,
    makeItems
};


}),
"./src/plugins/image/main/ts/ui/UploadTab.ts": 
/*!***************************************************!*\
  !*** ./src/plugins/image/main/ts/ui/UploadTab.ts ***!
  \***************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  UploadTab: () => (UploadTab)
});
const makeTab = (_info)=>{
    const items = [
        {
            type: 'dropzone',
            name: 'fileinput'
        }
    ];
    return {
        title: 'Upload',
        name: 'upload',
        items
    };
};
const UploadTab = {
    makeTab
};


}),
"../../node_modules/@ephox/dispute/lib/main/ts/api/Eq.js": 
/*!***************************************************************!*\
  !*** ../../node_modules/@ephox/dispute/lib/main/ts/api/Eq.js ***!
  \***************************************************************/
(function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  contramap: () => (contramap),
  eq: () => (eq),
  eqAny: () => (eqAny),
  eqArray: () => (eqArray),
  eqBoolean: () => (eqBoolean),
  eqNull: () => (eqNull),
  eqNumber: () => (eqNumber),
  eqRecord: () => (eqRecord),
  eqString: () => (eqString),
  eqUndefined: () => (eqUndefined),
  tripleEq: () => (tripleEq)
});
/* ESM import */var _core_Type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Type */ "../../node_modules/@ephox/dispute/lib/main/ts/core/Type.js");
/* ESM import */var _core_ArrayUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/ArrayUtil */ "../../node_modules/@ephox/dispute/lib/main/ts/core/ArrayUtil.js");


var contramap = function (eqa, f) {
    return eq(function (x, y) { return eqa.eq(f(x), f(y)); });
};
var eq = function (f) {
    return ({ eq: f });
};
var tripleEq = eq(function (x, y) { return x === y; });
var eqString = tripleEq;
var eqBoolean = tripleEq;
var eqNumber = tripleEq;
var eqUndefined = tripleEq;
var eqNull = tripleEq;
var eqArray = function (eqa) { return eq(function (x, y) {
    if (x.length !== y.length) {
        return false;
    }
    var len = x.length;
    for (var i = 0; i < len; i++) {
        if (!eqa.eq(x[i], y[i])) {
            return false;
        }
    }
    return true;
}); };
// TODO: Make an Ord typeclass
var eqSortedArray = function (eqa, compareFn) {
    return contramap(eqArray(eqa), function (xs) { return _core_ArrayUtil__WEBPACK_IMPORTED_MODULE_0__.sort(xs, compareFn); });
};
var eqRecord = function (eqa) { return eq(function (x, y) {
    var kx = Object.keys(x);
    var ky = Object.keys(y);
    if (!eqSortedArray(eqString).eq(kx, ky)) {
        return false;
    }
    var len = kx.length;
    for (var i = 0; i < len; i++) {
        var q = kx[i];
        if (!eqa.eq(x[q], y[q])) {
            return false;
        }
    }
    return true;
}); };
var eqAny = eq(function (x, y) {
    if (x === y) {
        return true;
    }
    var tx = _core_Type__WEBPACK_IMPORTED_MODULE_1__.typeOf(x);
    var ty = _core_Type__WEBPACK_IMPORTED_MODULE_1__.typeOf(y);
    if (tx !== ty) {
        return false;
    }
    if (_core_Type__WEBPACK_IMPORTED_MODULE_1__.isEquatableType(tx)) {
        return x === y;
    }
    else if (tx === 'array') {
        return eqArray(eqAny).eq(x, y);
    }
    else if (tx === 'object') {
        return eqRecord(eqAny).eq(x, y);
    }
    return false;
});


}),
"../../node_modules/@ephox/dispute/lib/main/ts/core/ArrayUtil.js": 
/*!***********************************************************************!*\
  !*** ../../node_modules/@ephox/dispute/lib/main/ts/core/ArrayUtil.js ***!
  \***********************************************************************/
(function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  map: () => (map),
  mapDelimit: () => (mapDelimit),
  sort: () => (sort)
});
var map = function (xs, f) {
    var len = xs.length;
    var r = new Array(len);
    for (var i = 0; i < len; i++) {
        var x = xs[i];
        r[i] = f(x);
    }
    return r;
};
/** map a function over an array, then map another function over every item except the last */
var mapDelimit = function (xs, f, delimit) {
    var len = xs.length;
    var r = new Array(len);
    for (var i = 0; i < len - 1; i++) {
        var x = xs[i];
        r[i] = delimit(f(x));
    }
    if (len > 0) {
        r[len - 1] = (f(xs[len - 1]));
    }
    return r;
};
var sort = function (xs, compareFn) {
    var clone = Array.prototype.slice.call(xs);
    return clone.sort(compareFn);
};


}),
"../../node_modules/@ephox/dispute/lib/main/ts/core/Type.js": 
/*!******************************************************************!*\
  !*** ../../node_modules/@ephox/dispute/lib/main/ts/core/Type.js ***!
  \******************************************************************/
(function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  isArray: () => (isArray),
  isBoolean: () => (isBoolean),
  isEquatableType: () => (isEquatableType),
  isFunction: () => (isFunction),
  isNull: () => (isNull),
  isNumber: () => (isNumber),
  isObject: () => (isObject),
  isString: () => (isString),
  isUndefined: () => (isUndefined),
  typeOf: () => (typeOf)
});
var typeOf = function (x) {
    if (x === null) {
        return 'null';
    }
    if (x === undefined) {
        return 'undefined';
    }
    var t = typeof x;
    if (t === 'object' && (Array.prototype.isPrototypeOf(x) || x.constructor && x.constructor.name === 'Array')) {
        return 'array';
    }
    if (t === 'object' && (String.prototype.isPrototypeOf(x) || x.constructor && x.constructor.name === 'String')) {
        return 'string';
    }
    return t;
};
var isType = function (type) { return function (value) { return typeOf(value) === type; }; };
var isString = isType('string');
var isObject = isType('object');
var isArray = isType('array');
var isNull = isType('null');
var isBoolean = isType('boolean');
var isUndefined = isType('undefined');
var isFunction = isType('function');
var isNumber = isType('number');
var isEquatableType = function (x) {
    return ['undefined', 'boolean', 'number', 'string', 'function', 'xml', 'null'].indexOf(x) !== -1;
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

/*!*******************************************!*\
  !*** ./src/plugins/image/main/ts/Main.ts ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _Plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Plugin */ "./src/plugins/image/main/ts/Plugin.ts");

(0,_Plugin__WEBPACK_IMPORTED_MODULE_0__["default"])(); /** *****
 * DO NOT EXPORT ANYTHING
 *
 * IF YOU DO ROLLUP WILL LEAVE A GLOBAL ON THE PAGE
 *******/ 

})();

})()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdGlueW1jZS9wbHVnaW5zL2ltYWdlL3BsdWdpbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL3RpbnltY2UvLi9saWIvZ2xvYmFscy90aW55bWNlL2NvcmUvYXBpL1BsdWdpbk1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL2xpYi9nbG9iYWxzL3RpbnltY2UvY29yZS9hcGkvZG9tL0RPTVV0aWxzLmpzIiwid2VicGFjazovL3RpbnltY2UvLi9saWIvZ2xvYmFscy90aW55bWNlL2NvcmUvYXBpL3V0aWwvSW1hZ2VVcGxvYWRlci5qcyIsIndlYnBhY2s6Ly90aW55bWNlLy4vbGliL2dsb2JhbHMvdGlueW1jZS9jb3JlL2FwaS91dGlsL1Rvb2xzLmpzIiwid2VicGFjazovL3RpbnltY2UvLi9saWIvZ2xvYmFscy90aW55bWNlL2NvcmUvYXBpL3V0aWwvVVJJLmpzIiwid2VicGFjazovL3RpbnltY2UvLi4va2F0YW1hcmkvc3JjL21haW4vdHMvZXBob3gva2F0YW1hcmkvYXBpL0Fyci50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL2thdGFtYXJpL3NyYy9tYWluL3RzL2VwaG94L2thdGFtYXJpL2FwaS9GdW4udHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9rYXRhbWFyaS9zcmMvbWFpbi90cy9lcGhveC9rYXRhbWFyaS9hcGkvR2xvYmFsLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4va2F0YW1hcmkvc3JjL21haW4vdHMvZXBob3gva2F0YW1hcmkvYXBpL01lcmdlci50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL2thdGFtYXJpL3NyYy9tYWluL3RzL2VwaG94L2thdGFtYXJpL2FwaS9PYmoudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9rYXRhbWFyaS9zcmMvbWFpbi90cy9lcGhveC9rYXRhbWFyaS9hcGkvT3B0aW9uYWwudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9rYXRhbWFyaS9zcmMvbWFpbi90cy9lcGhveC9rYXRhbWFyaS9hcGkvUmVzb2x2ZS50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL2thdGFtYXJpL3NyYy9tYWluL3RzL2VwaG94L2thdGFtYXJpL2FwaS9TdHJpbmdzLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4va2F0YW1hcmkvc3JjL21haW4vdHMvZXBob3gva2F0YW1hcmkvYXBpL1R5cGUudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9rYXRhbWFyaS9zcmMvbWFpbi90cy9lcGhveC9rYXRhbWFyaS9zdHIvU3RyQXBwZW5kLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4vc2FuZC9zcmMvbWFpbi90cy9lcGhveC9zYW5kL2FwaS9TYW5kSFRNTEVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9zYW5kL3NyYy9tYWluL3RzL2VwaG94L3NhbmQvdXRpbC9HbG9iYWwudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9zdWdhci9zcmMvbWFpbi90cy9lcGhveC9zdWdhci9hcGkvbm9kZS9Ob2RlVHlwZXMudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9zdWdhci9zcmMvbWFpbi90cy9lcGhveC9zdWdhci9hcGkvbm9kZS9TdWdhckVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9zdWdhci9zcmMvbWFpbi90cy9lcGhveC9zdWdhci9hcGkvbm9kZS9TdWdhck5vZGUudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9zdWdhci9zcmMvbWFpbi90cy9lcGhveC9zdWdhci9hcGkvcHJvcGVydGllcy9BdHRyaWJ1dGUudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL2ltYWdlL21haW4vdHMvUGx1Z2luLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9pbWFnZS9tYWluL3RzL2FwaS9Db21tYW5kcy50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvaW1hZ2UvbWFpbi90cy9hcGkvT3B0aW9ucy50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvaW1hZ2UvbWFpbi90cy9jb3JlL0ZpbHRlckNvbnRlbnQudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL2ltYWdlL21haW4vdHMvY29yZS9JbWFnZURhdGEudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL2ltYWdlL21haW4vdHMvY29yZS9JbWFnZVNlbGVjdGlvbi50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvaW1hZ2UvbWFpbi90cy9jb3JlL0xpc3RVdGlscy50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvaW1hZ2UvbWFpbi90cy9jb3JlL1V0aWxzLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9pbWFnZS9tYWluL3RzL3VpL0FkdlRhYi50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvaW1hZ2UvbWFpbi90cy91aS9CdXR0b25zLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9pbWFnZS9tYWluL3RzL3VpL0RpYWxvZy50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvaW1hZ2UvbWFpbi90cy91aS9EaWFsb2dJbmZvLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9pbWFnZS9tYWluL3RzL3VpL01haW5UYWIudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL2ltYWdlL21haW4vdHMvdWkvVXBsb2FkVGFiLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4vLi4vbm9kZV9tb2R1bGVzL0BlcGhveC9kaXNwdXRlL3NyYy9tYWluL3RzL2FwaS9FcS50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uLy4uL25vZGVfbW9kdWxlcy9AZXBob3gvZGlzcHV0ZS9zcmMvbWFpbi90cy9jb3JlL0FycmF5VXRpbC50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uLy4uL25vZGVfbW9kdWxlcy9AZXBob3gvZGlzcHV0ZS9zcmMvbWFpbi90cy9jb3JlL1R5cGUudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lX3Byb3BlcnR5X2dldHRlcnMiLCJ3ZWJwYWNrOi8vdGlueW1jZS93ZWJwYWNrL3J1bnRpbWUvaGFzX293bl9wcm9wZXJ0eSIsIndlYnBhY2s6Ly90aW55bWNlL3dlYnBhY2svcnVudGltZS9tYWtlX25hbWVzcGFjZV9vYmplY3QiLCJ3ZWJwYWNrOi8vdGlueW1jZS93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3ZlcnNpb24iLCJ3ZWJwYWNrOi8vdGlueW1jZS93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3VuaXF1ZV9pZCIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvaW1hZ2UvbWFpbi90cy9NYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBnbG9iYWwgPSB0aW55bWNlLnV0aWwuVG9vbHMucmVzb2x2ZSgndGlueW1jZS5QbHVnaW5NYW5hZ2VyJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGdsb2JhbDtcbmV4cG9ydCB2YXIgUGx1Z2luTWFuYWdlciA9IGdsb2JhbDtcbiIsInZhciBnbG9iYWwgPSB0aW55bWNlLnV0aWwuVG9vbHMucmVzb2x2ZSgndGlueW1jZS5kb20uRE9NVXRpbHMnKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2xvYmFsO1xuZXhwb3J0IHZhciBET01VdGlscyA9IGdsb2JhbDtcbiIsInZhciBnbG9iYWwgPSB0aW55bWNlLnV0aWwuVG9vbHMucmVzb2x2ZSgndGlueW1jZS51dGlsLkltYWdlVXBsb2FkZXInKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2xvYmFsO1xuZXhwb3J0IHZhciBJbWFnZVVwbG9hZGVyID0gZ2xvYmFsO1xuIiwidmFyIGdsb2JhbCA9IHRpbnltY2UudXRpbC5Ub29scy5yZXNvbHZlKCd0aW55bWNlLnV0aWwuVG9vbHMnKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2xvYmFsO1xuZXhwb3J0IHZhciBUb29scyA9IGdsb2JhbDtcbiIsInZhciBnbG9iYWwgPSB0aW55bWNlLnV0aWwuVG9vbHMucmVzb2x2ZSgndGlueW1jZS51dGlsLlVSSScpO1xuXG5leHBvcnQgZGVmYXVsdCBnbG9iYWw7XG5leHBvcnQgdmFyIFVSSSA9IGdsb2JhbDtcbiIsImltcG9ydCB7IEVxIH0gZnJvbSAnQGVwaG94L2Rpc3B1dGUnO1xuXG5pbXBvcnQgKiBhcyBGdW4gZnJvbSAnLi9GdW4nO1xuaW1wb3J0IHsgT3B0aW9uYWwgfSBmcm9tICcuL09wdGlvbmFsJztcbmltcG9ydCAqIGFzIFR5cGUgZnJvbSAnLi9UeXBlJztcblxudHlwZSBBcnJheU1vcnBoaXNtPFQsIFU+ID0gKHg6IFQsIGk6IG51bWJlcikgPT4gVTtcbnR5cGUgQXJyYXlHdWFyZFByZWRpY2F0ZTxULCBVIGV4dGVuZHMgVD4gPSAoeDogVCwgaTogbnVtYmVyKSA9PiB4IGlzIFU7XG50eXBlIEFycmF5UHJlZGljYXRlPFQ+ID0gQXJyYXlNb3JwaGlzbTxULCBib29sZWFuPjtcbnR5cGUgQ29tcGFyYXRvcjxUPiA9IChhOiBULCBiOiBUKSA9PiBudW1iZXI7XG5cbmNvbnN0IG5hdGl2ZVNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuY29uc3QgbmF0aXZlSW5kZXhPZiA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mO1xuY29uc3QgbmF0aXZlUHVzaCA9IEFycmF5LnByb3RvdHlwZS5wdXNoO1xuXG5jb25zdCByYXdJbmRleE9mID0gPFQ+ICh0czogQXJyYXlMaWtlPFQ+LCB0OiBUKTogbnVtYmVyID0+XG4gIG5hdGl2ZUluZGV4T2YuY2FsbCh0cywgdCk7XG5cbmV4cG9ydCBjb25zdCBpbmRleE9mID0gPFQgPSBhbnk+KHhzOiBBcnJheUxpa2U8VD4sIHg6IFQpOiBPcHRpb25hbDxudW1iZXI+ID0+IHtcbiAgLy8gVGhlIHJhd0luZGV4T2YgbWV0aG9kIGRvZXMgbm90IHdyYXAgdXAgaW4gYW4gb3B0aW9uLiBUaGlzIGlzIGZvciBwZXJmb3JtYW5jZSByZWFzb25zLlxuICBjb25zdCByID0gcmF3SW5kZXhPZih4cywgeCk7XG4gIHJldHVybiByID09PSAtMSA/IE9wdGlvbmFsLm5vbmUoKSA6IE9wdGlvbmFsLnNvbWUocik7XG59O1xuXG5leHBvcnQgY29uc3QgY29udGFpbnMgPSA8VD4oeHM6IEFycmF5TGlrZTxUPiwgeDogVCk6IGJvb2xlYW4gPT4gcmF3SW5kZXhPZih4cywgeCkgPiAtMTtcblxuZXhwb3J0IGNvbnN0IGV4aXN0cyA9IDxUID0gYW55Pih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheVByZWRpY2F0ZTxUPik6IGJvb2xlYW4gPT4ge1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0geHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgaWYgKHByZWQoeCwgaSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCBjb25zdCByYW5nZSA9IDxUPihudW06IG51bWJlciwgZjogKGE6IG51bWJlcikgPT4gVCk6IFRbXSA9PiB7XG4gIGNvbnN0IHI6IFRbXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bTsgaSsrKSB7XG4gICAgci5wdXNoKGYoaSkpO1xuICB9XG4gIHJldHVybiByO1xufTtcblxuLy8gSXQncyBhIHRvdGFsIG1pY3JvIG9wdGltaXNhdGlvbiwgYnV0IHRoZXNlIGRvIG1ha2Ugc29tZSBkaWZmZXJlbmNlLlxuLy8gUGFydGljdWxhcmx5IGZvciBicm93c2VycyBvdGhlciB0aGFuIENocm9tZS5cbi8vIC0gbGVuZ3RoIGNhY2hpbmdcbi8vIGh0dHA6Ly9qc3BlcmYuY29tL2Jyb3dzZXItZGlldC1qcXVlcnktZWFjaC12cy1mb3ItbG9vcC82OVxuLy8gLSBub3QgdXNpbmcgcHVzaFxuLy8gaHR0cDovL2pzcGVyZi5jb20vYXJyYXktZGlyZWN0LWFzc2lnbm1lbnQtdnMtcHVzaC8yXG5cbmV4cG9ydCBjb25zdCBjaHVuayA9IDxUPihhcnJheTogQXJyYXlMaWtlPFQ+LCBzaXplOiBudW1iZXIpOiBUW11bXSA9PiB7XG4gIGNvbnN0IHI6IFRbXVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpICs9IHNpemUpIHtcbiAgICBjb25zdCBzOiBUW10gPSBuYXRpdmVTbGljZS5jYWxsKGFycmF5LCBpLCBpICsgc2l6ZSk7XG4gICAgci5wdXNoKHMpO1xuICB9XG4gIHJldHVybiByO1xufTtcblxuZXhwb3J0IGNvbnN0IG1hcCA9IDxUID0gYW55LCBVID0gYW55Pih4czogQXJyYXlMaWtlPFQ+LCBmOiBBcnJheU1vcnBoaXNtPFQsIFU+KTogVVtdID0+IHtcbiAgLy8gcHJlLWFsbG9jYXRpbmcgYXJyYXkgc2l6ZSB3aGVuIGl0J3MgZ3VhcmFudGVlZCB0byBiZSBrbm93blxuICAvLyBodHRwOi8vanNwZXJmLmNvbS9wdXNoLWFsbG9jYXRlZC12cy1keW5hbWljLzIyXG4gIGNvbnN0IGxlbiA9IHhzLmxlbmd0aDtcbiAgY29uc3QgciA9IG5ldyBBcnJheShsZW4pO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIHJbaV0gPSBmKHgsIGkpO1xuICB9XG4gIHJldHVybiByO1xufTtcblxuLy8gVW53b3VuZCBpbXBsZW1lbnRpbmcgb3RoZXIgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGVhY2guXG4vLyBUaGUgY29kZSBzaXplIGlzIHJvdWdobHkgdGhlIHNhbWUsIGFuZCBpdCBzaG91bGQgYWxsb3cgZm9yIGJldHRlciBvcHRpbWlzYXRpb24uXG4vLyBjb25zdCBlYWNoID0gZnVuY3Rpb248VCwgVT4oeHM6IFRbXSwgZjogKHg6IFQsIGk/OiBudW1iZXIsIHhzPzogVFtdKSA9PiB2b2lkKTogdm9pZCB7XG5leHBvcnQgY29uc3QgZWFjaCA9IDxUID0gYW55Pih4czogQXJyYXlMaWtlPFQ+LCBmOiBBcnJheU1vcnBoaXNtPFQsIHZvaWQ+KTogdm9pZCA9PiB7XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICBmKHgsIGkpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZWFjaHIgPSA8VD4oeHM6IEFycmF5TGlrZTxUPiwgZjogQXJyYXlNb3JwaGlzbTxULCB2b2lkPik6IHZvaWQgPT4ge1xuICBmb3IgKGxldCBpID0geHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgZih4LCBpKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHBhcnRpdGlvbiA9IDxUID0gYW55Pih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheVByZWRpY2F0ZTxUPik6IHsgcGFzczogVFtdOyBmYWlsOiBUW10gfSA9PiB7XG4gIGNvbnN0IHBhc3M6IFRbXSA9IFtdO1xuICBjb25zdCBmYWlsOiBUW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHhzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIGNvbnN0IGFyciA9IHByZWQoeCwgaSkgPyBwYXNzIDogZmFpbDtcbiAgICBhcnIucHVzaCh4KTtcbiAgfVxuICByZXR1cm4geyBwYXNzLCBmYWlsIH07XG59O1xuXG5leHBvcnQgY29uc3QgZmlsdGVyOiB7XG4gIDxULCBVIGV4dGVuZHMgVD4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlHdWFyZFByZWRpY2F0ZTxULCBVPik6IFVbXTtcbiAgPFQ+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+KTogVFtdO1xufSA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheVByZWRpY2F0ZTxUPik6IFRbXSA9PiB7XG4gIGNvbnN0IHI6IFRbXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0geHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgaWYgKHByZWQoeCwgaSkpIHtcbiAgICAgIHIucHVzaCh4KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHI7XG59O1xuXG4vKlxuICogR3JvdXBzIGFuIGFycmF5IGludG8gY29udGlndW91cyBhcnJheXMgb2YgbGlrZSBlbGVtZW50cy4gV2hldGhlciBhbiBlbGVtZW50IGlzIGxpa2Ugb3Igbm90IGRlcGVuZHMgb24gZi5cbiAqXG4gKiBmIGlzIGEgZnVuY3Rpb24gdGhhdCBkZXJpdmVzIGEgdmFsdWUgZnJvbSBhbiBlbGVtZW50IC0gZS5nLiB0cnVlIG9yIGZhbHNlLCBvciBhIHN0cmluZy5cbiAqIEVsZW1lbnRzIGFyZSBsaWtlIGlmIHRoaXMgZnVuY3Rpb24gZ2VuZXJhdGVzIHRoZSBzYW1lIHZhbHVlIGZvciB0aGVtIChhY2NvcmRpbmcgdG8gPT09KS5cbiAqXG4gKlxuICogT3JkZXIgb2YgdGhlIGVsZW1lbnRzIGlzIHByZXNlcnZlZC4gQXJyLmZsYXR0ZW4oKSBvbiB0aGUgcmVzdWx0IHdpbGwgcmV0dXJuIHRoZSBvcmlnaW5hbCBsaXN0LCBhcyB3aXRoIEhhc2tlbGwgZ3JvdXBCeSBmdW5jdGlvbi5cbiAqICBGb3IgYSBnb29kIGV4cGxhbmF0aW9uLCBzZWUgdGhlIGdyb3VwIGZ1bmN0aW9uICh3aGljaCBpcyBhIHNwZWNpYWwgY2FzZSBvZiBncm91cEJ5KVxuICogIGh0dHA6Ly9oYWNrYWdlLmhhc2tlbGwub3JnL3BhY2thZ2UvYmFzZS00LjcuMC4wL2RvY3MvRGF0YS1MaXN0Lmh0bWwjdjpncm91cFxuICovXG5leHBvcnQgY29uc3QgZ3JvdXBCeSA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCBmOiAoYTogVCkgPT4gYW55KTogVFtdW10gPT4ge1xuICBpZiAoeHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9IGVsc2Uge1xuICAgIGxldCB3YXNUeXBlID0gZih4c1swXSk7IC8vIGluaXRpYWwgY2FzZSBmb3IgbWF0Y2hpbmdcbiAgICBjb25zdCByOiBUW11bXSA9IFtdO1xuICAgIGxldCBncm91cDogVFtdID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0geHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICAgIGNvbnN0IHR5cGUgPSBmKHgpO1xuICAgICAgaWYgKHR5cGUgIT09IHdhc1R5cGUpIHtcbiAgICAgICAgci5wdXNoKGdyb3VwKTtcbiAgICAgICAgZ3JvdXAgPSBbXTtcbiAgICAgIH1cbiAgICAgIHdhc1R5cGUgPSB0eXBlO1xuICAgICAgZ3JvdXAucHVzaCh4KTtcbiAgICB9XG4gICAgaWYgKGdyb3VwLmxlbmd0aCAhPT0gMCkge1xuICAgICAgci5wdXNoKGdyb3VwKTtcbiAgICB9XG4gICAgcmV0dXJuIHI7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBmb2xkciA9IDxULCBVPih4czogQXJyYXlMaWtlPFQ+LCBmOiAoYWNjOiBVLCB4OiBULCBpOiBudW1iZXIpID0+IFUsIGFjYzogVSk6IFUgPT4ge1xuICBlYWNocih4cywgKHgsIGkpID0+IHtcbiAgICBhY2MgPSBmKGFjYywgeCwgaSk7XG4gIH0pO1xuICByZXR1cm4gYWNjO1xufTtcblxuZXhwb3J0IGNvbnN0IGZvbGRsID0gPFQgPSBhbnksIFUgPSBhbnk+KHhzOiBBcnJheUxpa2U8VD4sIGY6IChhY2M6IFUsIHg6IFQsIGk6IG51bWJlcikgPT4gVSwgYWNjOiBVKTogVSA9PiB7XG4gIGVhY2goeHMsICh4LCBpKSA9PiB7XG4gICAgYWNjID0gZihhY2MsIHgsIGkpO1xuICB9KTtcbiAgcmV0dXJuIGFjYztcbn07XG5cbmV4cG9ydCBjb25zdCBmaW5kVW50aWw6IHtcbiAgPFQsIFUgZXh0ZW5kcyBUPih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheUd1YXJkUHJlZGljYXRlPFQsIFU+LCB1bnRpbDogQXJyYXlQcmVkaWNhdGU8VD4pOiBPcHRpb25hbDxVPjtcbiAgPFQgPSBhbnk+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+LCB1bnRpbDogQXJyYXlQcmVkaWNhdGU8VD4pOiBPcHRpb25hbDxUPjtcbn0gPSA8VD4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlQcmVkaWNhdGU8VD4sIHVudGlsOiBBcnJheVByZWRpY2F0ZTxUPik6IE9wdGlvbmFsPFQ+ID0+IHtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHhzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIGlmIChwcmVkKHgsIGkpKSB7XG4gICAgICByZXR1cm4gT3B0aW9uYWwuc29tZSh4KTtcbiAgICB9IGVsc2UgaWYgKHVudGlsKHgsIGkpKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIE9wdGlvbmFsLm5vbmUoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmaW5kOiB7XG4gIDxULCBVIGV4dGVuZHMgVD4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlHdWFyZFByZWRpY2F0ZTxULCBVPik6IE9wdGlvbmFsPFU+O1xuICA8VCA9IGFueT4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlQcmVkaWNhdGU8VD4pOiBPcHRpb25hbDxUPjtcbn0gPSA8VD4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlQcmVkaWNhdGU8VD4pOiBPcHRpb25hbDxUPiA9PiB7XG4gIHJldHVybiBmaW5kVW50aWwoeHMsIHByZWQsIEZ1bi5uZXZlcik7XG59O1xuXG5leHBvcnQgY29uc3QgZmluZEluZGV4ID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+KTogT3B0aW9uYWw8bnVtYmVyPiA9PiB7XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICBpZiAocHJlZCh4LCBpKSkge1xuICAgICAgcmV0dXJuIE9wdGlvbmFsLnNvbWUoaSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIE9wdGlvbmFsLm5vbmUoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmaW5kTGFzdEluZGV4ID0gPFQ+KGFycjogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheVByZWRpY2F0ZTxUPik6IE9wdGlvbmFsPG51bWJlcj4gPT4ge1xuICBmb3IgKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgaWYgKHByZWQoYXJyW2ldLCBpKSkge1xuICAgICAgcmV0dXJuIE9wdGlvbmFsLnNvbWUoaSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIE9wdGlvbmFsLm5vbmUoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmbGF0dGVuID0gPFQ+KHhzOiBBcnJheUxpa2U8VFtdPik6IFRbXSA9PiB7XG4gIC8vIE5vdGUsIHRoaXMgaXMgcG9zc2libGUgYmVjYXVzZSBwdXNoIHN1cHBvcnRzIG11bHRpcGxlIGFyZ3VtZW50czpcbiAgLy8gaHR0cDovL2pzcGVyZi5jb20vY29uY2F0LXB1c2gvNlxuICAvLyBOb3RlIHRoYXQgaW4gdGhlIHBhc3QsIGNvbmNhdCgpIHdvdWxkIHNpbGVudGx5IHdvcmsgKHZlcnkgc2xvd2x5KSBmb3IgYXJyYXktbGlrZSBvYmplY3RzLlxuICAvLyBXaXRoIHRoaXMgY2hhbmdlIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3IuXG4gIGNvbnN0IHI6IFRbXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0geHMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAvLyBFbnN1cmUgdGhhdCBlYWNoIHZhbHVlIGlzIGFuIGFycmF5IGl0c2VsZlxuICAgIGlmICghVHlwZS5pc0FycmF5KHhzW2ldKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBcnIuZmxhdHRlbiBpdGVtICcgKyBpICsgJyB3YXMgbm90IGFuIGFycmF5LCBpbnB1dDogJyArIHhzKTtcbiAgICB9XG4gICAgbmF0aXZlUHVzaC5hcHBseShyLCB4c1tpXSk7XG4gIH1cbiAgcmV0dXJuIHI7XG59O1xuXG5leHBvcnQgY29uc3QgYmluZCA9IDxUID0gYW55LCBVID0gYW55Pih4czogQXJyYXlMaWtlPFQ+LCBmOiBBcnJheU1vcnBoaXNtPFQsIFVbXT4pOiBVW10gPT5cbiAgZmxhdHRlbihtYXAoeHMsIGYpKTtcblxuZXhwb3J0IGNvbnN0IGZvcmFsbCA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheVByZWRpY2F0ZTxUPik6IGJvb2xlYW4gPT4ge1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0geHMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgaWYgKHByZWQoeCwgaSkgIT09IHRydWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5leHBvcnQgY29uc3QgZXF1YWwgPSA8VD4oYTE6IEFycmF5TGlrZTxUPiwgYTI6IEFycmF5TGlrZTxUPiwgZXE6IEVxLkVxPFQ+ID0gRXEuZXFBbnkpOiBib29sZWFuID0+XG4gIEVxLmVxQXJyYXkoZXEpLmVxKGExLCBhMik7XG5cbmV4cG9ydCBjb25zdCByZXZlcnNlID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4pOiBUW10gPT4ge1xuICBjb25zdCByOiBUW10gPSBuYXRpdmVTbGljZS5jYWxsKHhzLCAwKTtcbiAgci5yZXZlcnNlKCk7XG4gIHJldHVybiByO1xufTtcblxuZXhwb3J0IGNvbnN0IGRpZmZlcmVuY2UgPSA8VD4oYTE6IEFycmF5TGlrZTxUPiwgYTI6IEFycmF5TGlrZTxUPik6IFRbXSA9PiBmaWx0ZXIoYTEsICh4KSA9PiAhY29udGFpbnMoYTIsIHgpKTtcblxuZXhwb3J0IGNvbnN0IG1hcFRvT2JqZWN0OiB7XG4gIDxUIGV4dGVuZHMgc3RyaW5nLCBVPih4czogQXJyYXlMaWtlPFQ+LCBmOiAoeDogVCwgaTogbnVtYmVyKSA9PiBVKTogUmVjb3JkPFQsIFU+O1xuICA8VCwgUiBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4+KHhzOiBBcnJheUxpa2U8VD4sIGY6ICh4OiBULCBpOiBudW1iZXIpID0+IFJba2V5b2YgUl0pOiBSO1xufSA9IDxULCBSIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55Pj4oeHM6IEFycmF5TGlrZTxUPiwgZjogKHg6IFQsIGk6IG51bWJlcikgPT4gUltrZXlvZiBSXSk6IFIgPT4ge1xuICBjb25zdCByID0ge30gYXMgUjtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHhzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIHJbU3RyaW5nKHgpIGFzIGtleW9mIFJdID0gZih4LCBpKTtcbiAgfVxuICByZXR1cm4gcjtcbn07XG5cbmV4cG9ydCBjb25zdCBwdXJlID0gPFQ+KHg6IFQpOiBUW10gPT4gWyB4IF07XG5cbmV4cG9ydCBjb25zdCBzb3J0ID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4sIGNvbXBhcmF0b3I/OiBDb21wYXJhdG9yPFQ+KTogVFtdID0+IHtcbiAgY29uc3QgY29weTogVFtdID0gbmF0aXZlU2xpY2UuY2FsbCh4cywgMCk7XG4gIGNvcHkuc29ydChjb21wYXJhdG9yKTtcbiAgcmV0dXJuIGNvcHk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0ID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4sIGk6IG51bWJlcik6IE9wdGlvbmFsPFQ+ID0+IGkgPj0gMCAmJiBpIDwgeHMubGVuZ3RoID8gT3B0aW9uYWwuc29tZSh4c1tpXSkgOiBPcHRpb25hbC5ub25lKCk7XG5cbmV4cG9ydCBjb25zdCBoZWFkID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4pOiBPcHRpb25hbDxUPiA9PiBnZXQoeHMsIDApO1xuXG5leHBvcnQgY29uc3QgbGFzdCA9IDxUPih4czogQXJyYXlMaWtlPFQ+KTogT3B0aW9uYWw8VD4gPT4gZ2V0KHhzLCB4cy5sZW5ndGggLSAxKTtcblxuZXhwb3J0IGNvbnN0IGZyb206IDxUPih4OiBBcnJheUxpa2U8VD4pID0+IFRbXSA9IFR5cGUuaXNGdW5jdGlvbihBcnJheS5mcm9tKSA/IEFycmF5LmZyb20gOiAoeCkgPT4gbmF0aXZlU2xpY2UuY2FsbCh4KTtcblxuZXhwb3J0IGNvbnN0IGZpbmRNYXAgPSA8QSwgQj4oYXJyOiBBcnJheUxpa2U8QT4sIGY6IChhOiBBLCBpbmRleDogbnVtYmVyKSA9PiBPcHRpb25hbDxCPik6IE9wdGlvbmFsPEI+ID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCByID0gZihhcnJbaV0sIGkpO1xuICAgIGlmIChyLmlzU29tZSgpKSB7XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIE9wdGlvbmFsLm5vbmU8Qj4oKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1bmlxdWUgPSA8VD4oeHM6IEFycmF5TGlrZTxUPiwgY29tcGFyYXRvcj86IChhOiBULCBiOiBUKSA9PiBib29sZWFuKTogVFtdID0+IHtcbiAgY29uc3QgcjogVFtdID0gW107XG5cbiAgY29uc3QgaXNEdXBsaWNhdGVkID0gVHlwZS5pc0Z1bmN0aW9uKGNvbXBhcmF0b3IpID9cbiAgICAoeDogVCkgPT4gZXhpc3RzKHIsIChpKSA9PiBjb21wYXJhdG9yKGksIHgpKSA6XG4gICAgKHg6IFQpID0+IGNvbnRhaW5zKHIsIHgpO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICBpZiAoIWlzRHVwbGljYXRlZCh4KSkge1xuICAgICAgci5wdXNoKHgpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByO1xufTtcbiIsImltcG9ydCAqIGFzIFR5cGUgZnJvbSAnLi9UeXBlJztcblxuY29uc3Qgbm9vcDogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkXG49ICgpID0+IHsgfTtcblxuY29uc3Qgbm9hcmc6IDxUPihmOiAoKSA9PiBUKSA9PiAoLi4uYXJnczogYW55W10pID0+IHZvaWRcbj0gKGYpID0+ICgpID0+IGYoKTtcblxuLyoqIENvbXBvc2UgYSB1bmFyeSBmdW5jdGlvbiB3aXRoIGFuIG4tYXJ5IGZ1bmN0aW9uICovXG5jb25zdCBjb21wb3NlID0gPFQgZXh0ZW5kcyBhbnlbXSwgVSwgVj4oZmE6ICh2OiBVKSA9PiBWLCBmYjogKC4uLng6IFQpID0+IFUpOiAoLi4ueDogVCkgPT4gViA9PiB7XG4gIHJldHVybiAoLi4uYXJnczogVCkgPT4ge1xuICAgIHJldHVybiBmYShmYi5hcHBseShudWxsLCBhcmdzKSk7XG4gIH07XG59O1xuXG4vKiogQ29tcG9zZSB0d28gdW5hcnkgZnVuY3Rpb25zLiBTaW1pbGFyIHRvIGNvbXBvc2UsIGJ1dCBhdm9pZHMgdXNpbmcgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LiAqL1xuY29uc3QgY29tcG9zZTEgPSA8QSwgQiwgQz4gKGZiYzogKGI6IEIpID0+IEMsIGZhYjogKGE6IEEpID0+IEIpID0+IChhOiBBKTogQyA9PlxuICBmYmMoZmFiKGEpKTtcblxuY29uc3QgY29uc3RhbnQgPSA8VD4odmFsdWU6IFQpOiAoKSA9PiBUID0+IHtcbiAgcmV0dXJuICgpID0+IHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG59O1xuXG5jb25zdCBpZGVudGl0eSA9IDxUID0gYW55Pih4OiBUKTogVCA9PiB7XG4gIHJldHVybiB4O1xufTtcblxuY29uc3QgdHJpcGxlRXF1YWxzID0gPFQ+KGE6IFQsIGI6IFQpOiBib29sZWFuID0+IHtcbiAgcmV0dXJuIGEgPT09IGI7XG59O1xuXG5mdW5jdGlvbiBjdXJyeSA8UkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCk6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPEEsIFJFU1QgZXh0ZW5kcyBhbnlbXSwgT1VUPihmbjogKGE6IEEsIC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQsIGE6IEEpOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVDtcbmZ1bmN0aW9uIGN1cnJ5IDxBLCBCLCBSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46IChhOiBBLCBiOiBCLCAuLi5yZXN0QXJnczogUkVTVCkgPT4gT1VULCBhOiBBLCBiOiBCKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8QSwgQiwgQywgUkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoYTogQSwgYjogQiwgYzogQywgLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCwgYTogQSwgYjogQiwgYzogQyk6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPEEsIEIsIEMsIEQsIFJFU1QgZXh0ZW5kcyBhbnlbXSwgT1VUPihmbjogKGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQsIGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQpOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVDtcbmZ1bmN0aW9uIGN1cnJ5IDxBLCBCLCBDLCBELCBFLCBSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46IChhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCAuLi5yZXN0QXJnczogUkVTVCkgPT4gT1VULCBhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8QSwgQiwgQywgRCwgRSwgRiwgUkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgZjogRiwgLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCwgYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgZjogRik6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPEEsIEIsIEMsIEQsIEUsIEYsIEcsIFJFU1QgZXh0ZW5kcyBhbnlbXSwgT1VUPihmbjogKGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIGY6IEYsIGc6IEcsIC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQsIGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIGY6IEYsIGc6IEcpOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVDtcbmZ1bmN0aW9uIGN1cnJ5IDxBLCBCLCBDLCBELCBFLCBGLCBHLCBILCBSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46IChhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCBmOiBGLCBnOiBHLCBoOiBILCAuLi5yZXN0QXJnczogUkVTVCkgPT4gT1VULCBhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCBmOiBGLCBnOiBHLCBoOiBIKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8QSwgQiwgQywgRCwgRSwgRiwgRywgSCwgSSwgUkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgZjogRiwgZzogRywgaDogSCwgaTogSSwgLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCwgYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgZjogRiwgZzogRywgaDogSCwgaTogSSk6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPEEsIEIsIEMsIEQsIEUsIEYsIEcsIEgsIEksIEosIFJFU1QgZXh0ZW5kcyBhbnlbXSwgT1VUPihmbjogKGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIGY6IEYsIGc6IEcsIGg6IEgsIGk6IEksIGo6IEosIC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQsIGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIGY6IEYsIGc6IEcsIGg6IEgsIGk6IEksIGo6IEopOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVDtcbmZ1bmN0aW9uIGN1cnJ5IDxPVVQ+KGZuOiAoLi4uYWxsQXJnczogYW55W10pID0+IE9VVCwgLi4uaW5pdGlhbEFyZ3M6IGFueVtdKTogKC4uLnJlc3RBcmdzOiBhbnlbXSkgPT4gT1VUIHtcbiAgcmV0dXJuICguLi5yZXN0QXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCBhbGwgPSBpbml0aWFsQXJncy5jb25jYXQocmVzdEFyZ3MpO1xuICAgIHJldHVybiBmbi5hcHBseShudWxsLCBhbGwpO1xuICB9O1xufVxuXG5jb25zdCBub3QgPSA8VD4oZjogKHQ6IFQpID0+IGJvb2xlYW4pID0+ICh0OiBUKTogYm9vbGVhbiA9PlxuICAhZih0KTtcblxuY29uc3QgZGllID0gKG1zZzogc3RyaW5nKSA9PiB7XG4gIHJldHVybiAoKTogbmV2ZXIgPT4ge1xuICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xuICB9O1xufTtcblxuY29uc3QgYXBwbHkgPSA8VD4oZjogKCkgPT4gVCk6IFQgPT4ge1xuICByZXR1cm4gZigpO1xufTtcblxuY29uc3QgY2FsbCA9IChmOiAoKSA9PiBhbnkpOiB2b2lkID0+IHtcbiAgZigpO1xufTtcblxuY29uc3QgbmV2ZXI6ICguLi5hcmdzOiBhbnlbXSkgPT4gZmFsc2UgPSBjb25zdGFudDxmYWxzZT4oZmFsc2UpO1xuY29uc3QgYWx3YXlzOiAoLi4uYXJnczogYW55W10pID0+IHRydWUgPSBjb25zdGFudDx0cnVlPih0cnVlKTtcblxuLyogVXNlZCB0byB3ZWFrZW4gdHlwZXMgKi9cbmNvbnN0IHdlYWtlbiA9IDxBLCBCIGV4dGVuZHMgQT4oYjogQik6IEEgPT4gYjtcblxudHlwZSBGdW48WCwgWT4gPSAoeDogWCkgPT4gWTtcbmNvbnN0IHBpcGU6IHtcbiAgPEEsIEI+KGE6IEEsIGFiOiBGdW48QSwgQj4pOiBCO1xuICA8QSwgQiwgQz4oYTogQSwgYWI6IEZ1bjxBLCBCPiwgYmM6IEZ1bjxCLCBDPik6IEM7XG4gIDxBLCBCLCBDLCBEPihhOiBBLCBhYjogRnVuPEEsIEI+LCBiYzogRnVuPEIsIEM+LCBjZDogRnVuPEMsIEQ+KTogRDtcbiAgPEEsIEIsIEMsIEQsIEU+KGE6IEEsIGFiOiBGdW48QSwgQj4sIGJjOiBGdW48QiwgQz4sIGNkOiBGdW48QywgRD4sIGRlOiBGdW48RCwgRT4pOiBFO1xuICA8QSwgQiwgQywgRCwgRSwgRj4oYTogQSwgYWI6IEZ1bjxBLCBCPiwgYmM6IEZ1bjxCLCBDPiwgY2Q6IEZ1bjxDLCBEPiwgZGU6IEZ1bjxELCBFPiwgZWY6IEZ1bjxFLCBGPik6IEY7XG4gIDxBLCBCLCBDLCBELCBFLCBGLCBHPihhOiBBLCBhYjogRnVuPEEsIEI+LCBiYzogRnVuPEIsIEM+LCBjZDogRnVuPEMsIEQ+LCBkZTogRnVuPEQsIEU+LCBlZjogRnVuPEUsIEY+LCBmZzogRnVuPEYsIEc+KTogRztcbiAgPEEsIEIsIEMsIEQsIEUsIEYsIEcsIEg+KGE6IEEsIGFiOiBGdW48QSwgQj4sIGJjOiBGdW48QiwgQz4sIGNkOiBGdW48QywgRD4sIGRlOiBGdW48RCwgRT4sIGVmOiBGdW48RSwgRj4sIGZnOiBGdW48RiwgRz4sIGdoOiBGdW48RywgSD4pOiBIO1xufSA9XG4gIDxBLCBCLCBDLCBELCBFLCBGLCBHLCBIPihhOiBBLCBhYjogRnVuPEEsIEI+LCBiYz86IEZ1bjxCLCBDPiwgY2Q/OiBGdW48QywgRD4sIGRlPzogRnVuPEQsIEU+LCBlZj86IEZ1bjxFLCBGPiwgZmc/OiBGdW48RiwgRz4sIGdoPzogRnVuPEcsIEg+KTogQiB8IEMgfCBEIHwgRSB8IEYgfCBHIHwgSCA9PiB7XG4gICAgY29uc3QgYiA9IGFiKGEpO1xuICAgIGlmIChUeXBlLmlzTnVsbGFibGUoYmMpKSB7XG4gICAgICByZXR1cm4gYjtcbiAgICB9XG5cbiAgICBjb25zdCBjID0gYmMoYik7XG4gICAgaWYgKFR5cGUuaXNOdWxsYWJsZShjZCkpIHtcbiAgICAgIHJldHVybiBjO1xuICAgIH1cblxuICAgIGNvbnN0IGQgPSBjZChjKTtcbiAgICBpZiAoVHlwZS5pc051bGxhYmxlKGRlKSkge1xuICAgICAgcmV0dXJuIGQ7XG4gICAgfVxuXG4gICAgY29uc3QgZSA9IGRlKGQpO1xuICAgIGlmIChUeXBlLmlzTnVsbGFibGUoZWYpKSB7XG4gICAgICByZXR1cm4gZTtcbiAgICB9XG5cbiAgICBjb25zdCBmID0gZWYoZSk7XG4gICAgaWYgKFR5cGUuaXNOdWxsYWJsZShmZykpIHtcbiAgICAgIHJldHVybiBmO1xuICAgIH1cblxuICAgIGNvbnN0IGcgPSBmZyhmKTtcbiAgICBpZiAoVHlwZS5pc051bGxhYmxlKGdoKSkge1xuICAgICAgcmV0dXJuIGc7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdoKGcpO1xuICB9O1xuXG5leHBvcnQge1xuICBub29wLFxuICBub2FyZyxcbiAgY29tcG9zZSxcbiAgY29tcG9zZTEsXG4gIGNvbnN0YW50LFxuICBpZGVudGl0eSxcbiAgdHJpcGxlRXF1YWxzLFxuICBjdXJyeSxcbiAgbm90LFxuICBkaWUsXG4gIGFwcGx5LFxuICBjYWxsLFxuICBuZXZlcixcbiAgYWx3YXlzLFxuICB3ZWFrZW4sXG4gIHBpcGVcbn07XG4iLCIvLyBVc2Ugd2luZG93IG9iamVjdCBhcyB0aGUgZ2xvYmFsIGlmIGl0J3MgYXZhaWxhYmxlIHNpbmNlIENTUCB3aWxsIGJsb2NrIHNjcmlwdCBldmFsc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1pbXBsaWVkLWV2YWxcbmV4cG9ydCBjb25zdCBHbG9iYWwgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpczsnKSgpO1xuIiwiaW1wb3J0ICogYXMgT2JqIGZyb20gJy4vT2JqJztcbmltcG9ydCAqIGFzIFR5cGUgZnJvbSAnLi9UeXBlJztcblxudHlwZSBNZXJnZVN0cmF0ZWd5ID0gKG9sZDogYW55LCBudTogYW55KSA9PiBhbnk7XG5cbmludGVyZmFjZSBEZWVwTWVyZ2VGdW5jIHtcbiAgPEEsIEI+KGE6IEEsIGI6IEIpOiBBICYgQjtcbiAgPEEsIEIsIEM+KGE6IEEsIGI6IEIsIGM6IEMpOiBBICYgQiAmIEM7XG4gIDxBLCBCLCBDLCBEPihhOiBBLCBiOiBCLCBjOiBDLCBkOiBEKTogQSAmIEIgJiBDICYgRDtcbiAgPEEsIEIsIEMsIEQsIEU+KGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUpOiBBICYgQiAmIEMgJiBEICYgRTtcbiAgPEEsIEIsIEMsIEQsIEUsIEY+KGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIGY6IEYpOiBBICYgQiAmIEMgJiBEICYgRSAmIEY7XG4gICguLi5vYmpzOiBBcnJheTxSZWNvcmQ8c3RyaW5nLCBhbnk+Pik6IFJlY29yZDxzdHJpbmcsIGFueT47XG59XG5cbnR5cGUgTWVyZ2VPcHRpb25hbDxBLCBCPiA9IEEgZXh0ZW5kcyB1bmRlZmluZWQgPyBCIDogRXhjbHVkZTxCLCB1bmRlZmluZWQ+O1xudHlwZSBTaGFsbG93TWVyZ2U8QSwgQj4gPSAoe1xuICBbSyBpbiBrZXlvZiBBXTogSyBleHRlbmRzIGtleW9mIEIgPyBNZXJnZU9wdGlvbmFsPEFbS10sIEJbS10+IDogQVtLXVxufSAmIEIpO1xuXG5pbnRlcmZhY2UgU2hhbGxvd01lcmdlRnVuYyB7XG4gIDxBLCBCPihhOiBBLCBiOiBCKTogU2hhbGxvd01lcmdlPEEsIEI+O1xuICA8QSwgQiwgQz4oYTogQSwgYjogQiwgYzogQyk6IFNoYWxsb3dNZXJnZTxTaGFsbG93TWVyZ2U8QSwgQj4sIEM+O1xuICA8QSwgQiwgQywgRD4oYTogQSwgYjogQiwgYzogQywgZDogRCk6IFNoYWxsb3dNZXJnZTxTaGFsbG93TWVyZ2U8U2hhbGxvd01lcmdlPEEsIEI+LCBDPiwgRD47XG4gIDxBLCBCLCBDLCBELCBFPihhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFKTogU2hhbGxvd01lcmdlPFNoYWxsb3dNZXJnZTxTaGFsbG93TWVyZ2U8U2hhbGxvd01lcmdlPEEsIEI+LCBDPiwgRD4sIEU+O1xuICA8QSwgQiwgQywgRCwgRSwgRj4oYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgZjogRik6IFNoYWxsb3dNZXJnZTxTaGFsbG93TWVyZ2U8U2hhbGxvd01lcmdlPFNoYWxsb3dNZXJnZTxTaGFsbG93TWVyZ2U8QSwgQj4sIEM+LCBEPiwgRT4sIEY+O1xuICAoLi4ub2JqczogQXJyYXk8UmVjb3JkPHN0cmluZywgYW55Pj4pOiBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xufVxuXG5jb25zdCBzaGFsbG93ID0gKG9sZDogUmVjb3JkPHN0cmluZywgYW55PiwgbnU6IFJlY29yZDxzdHJpbmcsIGFueT4pID0+IHtcbiAgcmV0dXJuIG51O1xufTtcblxuY29uc3QgZGVlcCA9IChvbGQ6IFJlY29yZDxzdHJpbmcsIGFueT4sIG51OiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSA9PiB7XG4gIGNvbnN0IGJvdGhPYmplY3RzID0gVHlwZS5pc1BsYWluT2JqZWN0KG9sZCkgJiYgVHlwZS5pc1BsYWluT2JqZWN0KG51KTtcbiAgcmV0dXJuIGJvdGhPYmplY3RzID8gZGVlcE1lcmdlKG9sZCwgbnUpIDogbnU7XG59O1xuXG5jb25zdCBiYXNlTWVyZ2UgPSAobWVyZ2VyOiBNZXJnZVN0cmF0ZWd5KTogKC4uLm9ianM6IEFycmF5PFJlY29yZDxzdHJpbmcsIGFueT4+KSA9PiBhbnkgPT4ge1xuICByZXR1cm4gKC4uLm9iamVjdHM6IGFueVtdKSA9PiB7XG4gICAgaWYgKG9iamVjdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbid0IG1lcmdlIHplcm8gb2JqZWN0c2ApO1xuICAgIH1cblxuICAgIGNvbnN0IHJldDogUmVjb3JkPHN0cmluZywgYW55PiA9IHt9O1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgb2JqZWN0cy5sZW5ndGg7IGorKykge1xuICAgICAgY29uc3QgY3VyT2JqZWN0ID0gb2JqZWN0c1tqXTtcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIGN1ck9iamVjdCkge1xuICAgICAgICBpZiAoT2JqLmhhcyhjdXJPYmplY3QsIGtleSkpIHtcbiAgICAgICAgICByZXRba2V5XSA9IG1lcmdlcihyZXRba2V5XSwgY3VyT2JqZWN0W2tleV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgZGVlcE1lcmdlOiBEZWVwTWVyZ2VGdW5jID0gYmFzZU1lcmdlKGRlZXApO1xuZXhwb3J0IGNvbnN0IG1lcmdlOiBTaGFsbG93TWVyZ2VGdW5jID0gYmFzZU1lcmdlKHNoYWxsb3cpO1xuIiwiaW1wb3J0IHsgRXEgfSBmcm9tICdAZXBob3gvZGlzcHV0ZSc7XG5cbmltcG9ydCAqIGFzIEZ1biBmcm9tICcuL0Z1bic7XG5pbXBvcnQgeyBPcHRpb25hbCB9IGZyb20gJy4vT3B0aW9uYWwnO1xuXG50eXBlIE9iaktleXM8VCBleHRlbmRzIHt9PiA9IEV4dHJhY3Q8a2V5b2YgVCwgc3RyaW5nPjtcbnR5cGUgT2JqQ2FsbGJhY2s8VCBleHRlbmRzIHt9PiA9ICh2YWx1ZTogVFtrZXlvZiBUXSwga2V5OiBPYmpLZXlzPFQ+KSA9PiB2b2lkO1xudHlwZSBPYmpNb3JwaGlzbTxUIGV4dGVuZHMge30sIFI+ID0gKHZhbHVlOiBUW2tleW9mIFRdLCBrZXk6IE9iaktleXM8VD4pID0+IFI7XG50eXBlIE9iakd1YXJkUHJlZGljYXRlPFQgZXh0ZW5kcyB7fSwgVSBleHRlbmRzIFRba2V5b2YgVF0+ID0gKHZhbHVlOiBUW2tleW9mIFRdLCBrZXk6IE9iaktleXM8VD4pID0+IHZhbHVlIGlzIFU7XG50eXBlIE9ialByZWRpY2F0ZTxUIGV4dGVuZHMge30+ID0gKHZhbHVlOiBUW2tleW9mIFRdLCBrZXk6IE9iaktleXM8VD4pID0+IGJvb2xlYW47XG5cbi8vIFRoZXJlIGFyZSBtYW55IHZhcmlhdGlvbnMgb2YgT2JqZWN0IGl0ZXJhdGlvbiB0aGF0IGFyZSBmYXN0ZXIgdGhhbiB0aGUgJ2Zvci1pbicgc3R5bGU6XG4vLyBodHRwOi8vanNwZXJmLmNvbS9vYmplY3Qta2V5cy1pdGVyYXRpb24vMTA3XG4vL1xuLy8gVXNlIHRoZSBuYXRpdmUga2V5cyBpZiBpdCBpcyBhdmFpbGFibGUgKElFOSspLCBvdGhlcndpc2UgZmFsbCBiYWNrIHRvIG1hbnVhbGx5IGZpbHRlcmluZ1xuZXhwb3J0IGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cztcblxuZXhwb3J0IGNvbnN0IGhhc093blByb3BlcnR5ID0gT2JqZWN0Lmhhc093blByb3BlcnR5O1xuXG5leHBvcnQgY29uc3QgZWFjaCA9IDxUIGV4dGVuZHMge30+KG9iajogVCwgZjogT2JqQ2FsbGJhY2s8VD4pOiB2b2lkID0+IHtcbiAgY29uc3QgcHJvcHMgPSBrZXlzKG9iaikgYXMgQXJyYXk8T2JqS2V5czxUPj47XG4gIGZvciAobGV0IGsgPSAwLCBsZW4gPSBwcm9wcy5sZW5ndGg7IGsgPCBsZW47IGsrKykge1xuICAgIGNvbnN0IGkgPSBwcm9wc1trXTtcbiAgICBjb25zdCB4ID0gb2JqW2ldO1xuICAgIGYoeCwgaSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBtYXAgPSA8VCBleHRlbmRzIHt9LCBSPihvYmo6IFQsIGY6IE9iak1vcnBoaXNtPFQsIFI+KTogeyBbayBpbiBrZXlvZiBUXTogUiB9ID0+IHtcbiAgcmV0dXJuIHR1cGxlTWFwPHsgW2sgaW4ga2V5b2YgVF06IFIgfSwgVD4ob2JqLCAoeCwgaSkgPT4gKHtcbiAgICBrOiBpLFxuICAgIHY6IGYoeCwgaSlcbiAgfSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IHR1cGxlTWFwID0gPFIgZXh0ZW5kcyB7fSwgVCBleHRlbmRzIHt9PihvYmo6IFQsIGY6IE9iak1vcnBoaXNtPFQsIHsgazoga2V5b2YgUjsgdjogUltrZXlvZiBSXSB9Pik6IFIgPT4ge1xuICBjb25zdCByID0ge30gYXMgUjtcbiAgZWFjaChvYmosICh4LCBpKSA9PiB7XG4gICAgY29uc3QgdHVwbGUgPSBmKHgsIGkpO1xuICAgIHJbdHVwbGUua10gPSB0dXBsZS52O1xuICB9KTtcbiAgcmV0dXJuIHI7XG59O1xuXG5jb25zdCBvYmpBY2MgPSA8VCBleHRlbmRzIHt9PihyOiBUKSA9PiAoeDogVFtrZXlvZiBUXSwgaToga2V5b2YgVCk6IHZvaWQgPT4ge1xuICByW2ldID0geDtcbn07XG5cbmNvbnN0IGludGVybmFsRmlsdGVyID0gPFQgZXh0ZW5kcyB7fT4ob2JqOiBULCBwcmVkOiBPYmpQcmVkaWNhdGU8VD4sIG9uVHJ1ZTogT2JqQ2FsbGJhY2s8VD4sIG9uRmFsc2U6IE9iakNhbGxiYWNrPFQ+KSA9PiB7XG4gIGVhY2gob2JqLCAoeCwgaSkgPT4ge1xuICAgIChwcmVkKHgsIGkpID8gb25UcnVlIDogb25GYWxzZSkoeCwgaSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGJpZmlsdGVyID0gPFQgZXh0ZW5kcyB7fT4ob2JqOiBULCBwcmVkOiBPYmpQcmVkaWNhdGU8VD4pOiB7IHQ6IFJlY29yZDxzdHJpbmcsIFRba2V5b2YgVF0+OyBmOiBSZWNvcmQ8c3RyaW5nLCBUW2tleW9mIFRdPiB9ID0+IHtcbiAgY29uc3QgdDogUmVjb3JkPHN0cmluZywgVFtrZXlvZiBUXT4gPSB7fTtcbiAgY29uc3QgZjogUmVjb3JkPHN0cmluZywgVFtrZXlvZiBUXT4gPSB7fTtcbiAgaW50ZXJuYWxGaWx0ZXIob2JqLCBwcmVkLCBvYmpBY2ModCksIG9iakFjYyhmKSk7XG4gIHJldHVybiB7IHQsIGYgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBmaWx0ZXI6IHtcbiAgPFQgZXh0ZW5kcyB7fSwgVSBleHRlbmRzIFRba2V5b2YgVF0+KG9iajogVCwgcHJlZDogT2JqR3VhcmRQcmVkaWNhdGU8VCwgVT4pOiBSZWNvcmQ8c3RyaW5nLCBVPjtcbiAgPFQgZXh0ZW5kcyB7fT4ob2JqOiBULCBwcmVkOiBPYmpQcmVkaWNhdGU8VD4pOiBSZWNvcmQ8c3RyaW5nLCBUW2tleW9mIFRdPjtcbn0gPSA8VCBleHRlbmRzIHt9PihvYmo6IFQsIHByZWQ6IE9ialByZWRpY2F0ZTxUPik6IFJlY29yZDxzdHJpbmcsIFRba2V5b2YgVF0+ID0+IHtcbiAgY29uc3QgdDogUmVjb3JkPHN0cmluZywgVFtrZXlvZiBUXT4gPSB7fTtcbiAgaW50ZXJuYWxGaWx0ZXIob2JqLCBwcmVkLCBvYmpBY2ModCksIEZ1bi5ub29wKTtcbiAgcmV0dXJuIHQ7XG59O1xuXG5leHBvcnQgY29uc3QgbWFwVG9BcnJheSA9IDxUIGV4dGVuZHMge30sIFI+KG9iajogVCwgZjogT2JqTW9ycGhpc208VCwgUj4pOiBSW10gPT4ge1xuICBjb25zdCByOiBSW10gPSBbXTtcbiAgZWFjaChvYmosICh2YWx1ZSwgbmFtZSkgPT4ge1xuICAgIHIucHVzaChmKHZhbHVlLCBuYW1lKSk7XG4gIH0pO1xuICByZXR1cm4gcjtcbn07XG5cbmV4cG9ydCBjb25zdCBmaW5kID0gPFQgZXh0ZW5kcyB7fT4ob2JqOiBULCBwcmVkOiAodmFsdWU6IFRba2V5b2YgVF0sIGtleTogT2JqS2V5czxUPiwgb2JqOiBUKSA9PiBib29sZWFuKTogT3B0aW9uYWw8VFtrZXlvZiBUXT4gPT4ge1xuICBjb25zdCBwcm9wcyA9IGtleXMob2JqKSBhcyBBcnJheTxPYmpLZXlzPFQ+PjtcbiAgZm9yIChsZXQgayA9IDAsIGxlbiA9IHByb3BzLmxlbmd0aDsgayA8IGxlbjsgaysrKSB7XG4gICAgY29uc3QgaSA9IHByb3BzW2tdO1xuICAgIGNvbnN0IHggPSBvYmpbaV07XG4gICAgaWYgKHByZWQoeCwgaSwgb2JqKSkge1xuICAgICAgcmV0dXJuIE9wdGlvbmFsLnNvbWUoeCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBPcHRpb25hbC5ub25lKCk7XG59O1xuXG5leHBvcnQgY29uc3QgdmFsdWVzID0gPFQgZXh0ZW5kcyB7fT4ob2JqOiBUKTogQXJyYXk8VFtrZXlvZiBUXT4gPT4ge1xuICByZXR1cm4gbWFwVG9BcnJheShvYmosIEZ1bi5pZGVudGl0eSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2l6ZSA9IChvYmo6IHt9KTogbnVtYmVyID0+IHtcbiAgcmV0dXJuIGtleXMob2JqKS5sZW5ndGg7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0ID0gPFQgZXh0ZW5kcyB7fSwgSyBleHRlbmRzIGtleW9mIFQ+KG9iajogVCwga2V5OiBLKTogT3B0aW9uYWw8Tm9uTnVsbGFibGU8VFtLXT4+ID0+IHtcbiAgcmV0dXJuIGhhcyhvYmosIGtleSkgPyBPcHRpb25hbC5mcm9tKG9ialtrZXldIGFzIE5vbk51bGxhYmxlPFRbS10+KSA6IE9wdGlvbmFsLm5vbmUoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBoYXMgPSA8VCBleHRlbmRzIHt9LCBLIGV4dGVuZHMga2V5b2YgVD4ob2JqOiBULCBrZXk6IEspOiBib29sZWFuID0+XG4gIGhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpO1xuXG5leHBvcnQgY29uc3QgaGFzTm9uTnVsbGFibGVLZXkgPSA8VCBleHRlbmRzIHt9LCBLIGV4dGVuZHMga2V5b2YgVD4ob2JqOiBULCBrZXk6IEspOiBvYmogaXMgVCAmIFJlY29yZDxLLCBOb25OdWxsYWJsZTxUW0tdPj4gPT5cbiAgaGFzKG9iaiwga2V5KSAmJiBvYmpba2V5XSAhPT0gdW5kZWZpbmVkICYmIG9ialtrZXldICE9PSBudWxsO1xuXG5leHBvcnQgY29uc3QgaXNFbXB0eSA9IChyOiBSZWNvcmQ8YW55LCBhbnk+KTogciBpcyB7fSA9PiB7XG4gIGZvciAoY29uc3QgeCBpbiByKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwociwgeCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5leHBvcnQgY29uc3QgZXF1YWwgPSA8VD4oYTE6IFJlY29yZDxzdHJpbmcsIFQ+LCBhMjogUmVjb3JkPHN0cmluZywgVD4sIGVxOiBFcS5FcTxUPiA9IEVxLmVxQW55KTogYm9vbGVhbiA9PlxuICBFcS5lcVJlY29yZChlcSkuZXEoYTEsIGEyKTtcbiIsImltcG9ydCAqIGFzIFR5cGUgZnJvbSAnLi9UeXBlJztcblxuLyoqXG4gKiBUaGUgYE9wdGlvbmFsYCB0eXBlIHJlcHJlc2VudHMgYSB2YWx1ZSAob2YgYW55IHR5cGUpIHRoYXQgcG90ZW50aWFsbHkgZG9lc1xuICogbm90IGV4aXN0LiBBbnkgYE9wdGlvbmFsPFQ+YCBjYW4gZWl0aGVyIGJlIGEgYFNvbWU8VD5gIChpbiB3aGljaCBjYXNlIHRoZVxuICogdmFsdWUgZG9lcyBleGlzdCkgb3IgYSBgTm9uZWAgKGluIHdoaWNoIGNhc2UgdGhlIHZhbHVlIGRvZXMgbm90IGV4aXN0KS4gVGhpc1xuICogbW9kdWxlIGRlZmluZXMgYSB3aG9sZSBsb3Qgb2YgRlAtaW5zcGlyZWQgdXRpbGl0eSBmdW5jdGlvbnMgZm9yIGRlYWxpbmcgd2l0aFxuICogYE9wdGlvbmFsYCBvYmplY3RzLlxuICpcbiAqIENvbXBhcmlzb24gd2l0aCBudWxsIG9yIHVuZGVmaW5lZDpcbiAqIC0gV2UgZG9uJ3QgZ2V0IGZhbmN5IG51bGwgY29hbGVzY2luZyBvcGVyYXRvcnMgd2l0aCBgT3B0aW9uYWxgXG4gKiAtIFdlIGRvIGdldCBmYW5jeSBoZWxwZXIgZnVuY3Rpb25zIHdpdGggYE9wdGlvbmFsYFxuICogLSBgT3B0aW9uYWxgIHN1cHBvcnQgbmVzdGluZywgYW5kIGFsbG93IGZvciB0aGUgdHlwZSB0byBzdGlsbCBiZSBudWxsYWJsZSAob3JcbiAqIGFub3RoZXIgYE9wdGlvbmFsYClcbiAqIC0gVGhlcmUgaXMgbm8gb3B0aW9uIHRvIHR1cm4gb2ZmIHN0cmljdC1vcHRpb25hbC1jaGVja3MgbGlrZSB0aGVyZSBpcyBmb3JcbiAqIHN0cmljdC1udWxsLWNoZWNrc1xuICovXG5leHBvcnQgY2xhc3MgT3B0aW9uYWw8VD4ge1xuICBwcml2YXRlIHJlYWRvbmx5IHRhZzogYm9vbGVhbjtcbiAgcHJpdmF0ZSByZWFkb25seSB2YWx1ZT86IFQ7XG5cbiAgLy8gU25lYWt5IG9wdGltaXNhdGlvbjogZXZlcnkgaW5zdGFuY2Ugb2YgT3B0aW9uYWwubm9uZSBpcyBpZGVudGljYWwsIHNvIGp1c3RcbiAgLy8gcmV1c2UgdGhlIHNhbWUgb2JqZWN0XG4gIHByaXZhdGUgc3RhdGljIHNpbmdsZXRvbk5vbmUgPSBuZXcgT3B0aW9uYWw8YW55PihmYWxzZSk7XG5cbiAgLy8gVGhlIGludGVybmFsIHJlcHJlc2VudGF0aW9uIGhhcyBhIGB0YWdgIGFuZCBhIGB2YWx1ZWAsIGJ1dCBib3RoIGFyZVxuICAvLyBwcml2YXRlOiBhYmxlIHRvIGJlIGNvbnNvbGUubG9nZ2VkLCBidXQgbm90IGFibGUgdG8gYmUgYWNjZXNzZWQgYnkgY29kZVxuICBwcml2YXRlIGNvbnN0cnVjdG9yKHRhZzogYm9vbGVhbiwgdmFsdWU/OiBUKSB7XG4gICAgdGhpcy50YWcgPSB0YWc7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgLy8gLS0tIElkZW50aXRpZXMgLS0tXG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgYE9wdGlvbmFsPFQ+YCB0aGF0ICoqZG9lcyoqIGNvbnRhaW4gYSB2YWx1ZS5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgc29tZTxUPih0aGlzOiB2b2lkLCB2YWx1ZTogVCk6IE9wdGlvbmFsPFQ+IHtcbiAgICByZXR1cm4gbmV3IE9wdGlvbmFsKHRydWUsIHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgYE9wdGlvbmFsPFQ+YCB0aGF0ICoqZG9lcyBub3QqKiBjb250YWluIGEgdmFsdWUuIGBUYCBjYW4gYmVcbiAgICogYW55IHR5cGUgYmVjYXVzZSB3ZSBkb24ndCBhY3R1YWxseSBoYXZlIGEgYFRgLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBub25lPFQgPSBuZXZlcj4odGhpczogdm9pZCk6IE9wdGlvbmFsPFQ+IHtcbiAgICByZXR1cm4gT3B0aW9uYWwuc2luZ2xldG9uTm9uZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtIGEgdHJhbnNmb3JtIG9uIGFuIGBPcHRpb25hbGAgdHlwZS4gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXNcbiAgICogYE9wdGlvbmFsYCBjb250YWlucyBhIHZhbHVlIG9yIG5vdCwgYGZvbGRgIHdpbGwgcmV0dXJuIGEgdmFsdWUgb2YgdHlwZSBgVWAuXG4gICAqIElmIHRoaXMgYE9wdGlvbmFsYCBkb2VzIG5vdCBjb250YWluIGEgdmFsdWUsIHRoZSBgVWAgd2lsbCBiZSBjcmVhdGVkIGJ5XG4gICAqIGNhbGxpbmcgYG9uTm9uZWAuIElmIHRoaXMgYE9wdGlvbmFsYCBkb2VzIGNvbnRhaW4gYSB2YWx1ZSwgdGhlIGBVYCB3aWxsIGJlXG4gICAqIGNyZWF0ZWQgYnkgY2FsbGluZyBgb25Tb21lYC5cbiAgICpcbiAgICogRm9yIHRoZSBGUCBlbnRodXNpYXN0cyBpbiB0aGUgcm9vbSwgdGhpcyBmdW5jdGlvbjpcbiAgICogMS4gQ291bGQgYmUgdXNlZCB0byBpbXBsZW1lbnQgYWxsIG9mIHRoZSBmdW5jdGlvbnMgYmVsb3dcbiAgICogMi4gRm9ybXMgYSBjYXRhbW9ycGhpc21cbiAgICovXG4gIHB1YmxpYyBmb2xkPFU+KG9uTm9uZTogKCkgPT4gVSwgb25Tb21lOiAodmFsdWU6IFQpID0+IFUpOiBVIHtcbiAgICBpZiAodGhpcy50YWcpIHtcbiAgICAgIHJldHVybiBvblNvbWUodGhpcy52YWx1ZSBhcyBUKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG9uTm9uZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgdGhpcyBgT3B0aW9uYWxgIG9iamVjdCBjb250YWlucyBhIHZhbHVlLlxuICAgKi9cbiAgcHVibGljIGlzU29tZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50YWc7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIGlmIHRoaXMgYE9wdGlvbmFsYCBvYmplY3QgKipkb2VzIG5vdCoqIGNvbnRhaW4gYSB2YWx1ZS5cbiAgICovXG4gIHB1YmxpYyBpc05vbmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLnRhZztcbiAgfVxuXG4gIC8vIC0tLSBGdW5jdG9yIChuYW1lIHN0b2xlbiBmcm9tIEhhc2tlbGwgLyBtYXRocykgLS0tXG5cbiAgLyoqXG4gICAqIFBlcmZvcm0gYSB0cmFuc2Zvcm0gb24gYW4gYE9wdGlvbmFsYCBvYmplY3QsICoqaWYqKiB0aGVyZSBpcyBhIHZhbHVlLiBJZlxuICAgKiB5b3UgcHJvdmlkZSBhIGZ1bmN0aW9uIHRvIHR1cm4gYSBUIGludG8gYSBVLCB0aGlzIGlzIHRoZSBmdW5jdGlvbiB5b3UgdXNlXG4gICAqIHRvIHR1cm4gYW4gYE9wdGlvbmFsPFQ+YCBpbnRvIGFuIGBPcHRpb25hbDxVPmAuIElmIHRoaXMgKipkb2VzKiogY29udGFpblxuICAgKiBhIHZhbHVlIHRoZW4gdGhlIG91dHB1dCB3aWxsIGFsc28gY29udGFpbiBhIHZhbHVlICh0aGF0IHZhbHVlIGJlaW5nIHRoZVxuICAgKiBvdXRwdXQgb2YgYG1hcHBlcih0aGlzLnZhbHVlKWApLCBhbmQgaWYgdGhpcyAqKmRvZXMgbm90KiogY29udGFpbiBhIHZhbHVlXG4gICAqIHRoZW4gbmVpdGhlciB3aWxsIHRoZSBvdXRwdXQuXG4gICAqL1xuICBwdWJsaWMgbWFwPFU+KG1hcHBlcjogKHZhbHVlOiBUKSA9PiBVKTogT3B0aW9uYWw8VT4ge1xuICAgIGlmICh0aGlzLnRhZykge1xuICAgICAgcmV0dXJuIE9wdGlvbmFsLnNvbWUobWFwcGVyKHRoaXMudmFsdWUgYXMgVCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gT3B0aW9uYWwubm9uZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIC0tLSBNb25hZCAobmFtZSBzdG9sZW4gZnJvbSBIYXNrZWxsIC8gbWF0aHMpIC0tLVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtIGEgdHJhbnNmb3JtIG9uIGFuIGBPcHRpb25hbGAgb2JqZWN0LCAqKmlmKiogdGhlcmUgaXMgYSB2YWx1ZS5cbiAgICogVW5saWtlIGBtYXBgLCBoZXJlIHRoZSB0cmFuc2Zvcm0gaXRzZWxmIGFsc28gcmV0dXJucyBhbiBgT3B0aW9uYWxgLlxuICAgKi9cbiAgcHVibGljIGJpbmQ8VT4oYmluZGVyOiAodmFsdWU6IFQpID0+IE9wdGlvbmFsPFU+KTogT3B0aW9uYWw8VT4ge1xuICAgIGlmICh0aGlzLnRhZykge1xuICAgICAgcmV0dXJuIGJpbmRlcih0aGlzLnZhbHVlIGFzIFQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gT3B0aW9uYWwubm9uZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIC0tLSBUcmF2ZXJzYWJsZSAobmFtZSBzdG9sZW4gZnJvbSBIYXNrZWxsIC8gbWF0aHMpIC0tLVxuXG4gIC8qKlxuICAgKiBGb3IgYSBnaXZlbiBwcmVkaWNhdGUsIHRoaXMgZnVuY3Rpb24gZmluZHMgb3V0IGlmIHRoZXJlICoqZXhpc3RzKiogYSB2YWx1ZVxuICAgKiBpbnNpZGUgdGhpcyBgT3B0aW9uYWxgIG9iamVjdCB0aGF0IG1lZXRzIHRoZSBwcmVkaWNhdGUuIEluIHByYWN0aWNlLCB0aGlzXG4gICAqIG1lYW5zIHRoYXQgZm9yIGBPcHRpb25hbGBzIHRoYXQgZG8gbm90IGNvbnRhaW4gYSB2YWx1ZSBpdCByZXR1cm5zIGZhbHNlIChhc1xuICAgKiBubyBwcmVkaWNhdGUtbWVldGluZyB2YWx1ZSBleGlzdHMpLlxuICAgKi9cbiAgcHVibGljIGV4aXN0cyhwcmVkaWNhdGU6ICh2YWx1ZTogVCkgPT4gYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnRhZyAmJiBwcmVkaWNhdGUodGhpcy52YWx1ZSBhcyBUKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3IgYSBnaXZlbiBwcmVkaWNhdGUsIHRoaXMgZnVuY3Rpb24gZmluZHMgb3V0IGlmICoqYWxsKiogdGhlIHZhbHVlcyBpbnNpZGVcbiAgICogdGhpcyBgT3B0aW9uYWxgIG9iamVjdCBtZWV0IHRoZSBwcmVkaWNhdGUuIEluIHByYWN0aWNlLCB0aGlzIG1lYW5zIHRoYXRcbiAgICogZm9yIGBPcHRpb25hbGBzIHRoYXQgZG8gbm90IGNvbnRhaW4gYSB2YWx1ZSBpdCByZXR1cm5zIHRydWUgKGFzIGFsbCAwXG4gICAqIG9iamVjdHMgZG8gbWVldCB0aGUgcHJlZGljYXRlKS5cbiAgICovXG4gIHB1YmxpYyBmb3JhbGwocHJlZGljYXRlOiAodmFsdWU6IFQpID0+IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMudGFnIHx8IHByZWRpY2F0ZSh0aGlzLnZhbHVlIGFzIFQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvciBhIGdpdmVuIHByZWRpY2F0ZSwgY3JlYXRlIGEgbmV3IGBPcHRpb25hbGAgb2JqZWN0IHRoYXQgd2lsbCByZXRhaW5cbiAgICogYWxsIHRoZSB2YWx1ZXMgaW5zaWRlIHRoZSBvbGQgYE9wdGlvbmFsYCBvYmplY3QgdGhhdCBtZWV0IHRoZSBwcmVkaWNhdGUuXG4gICAqIEluIHByYWN0aWNlLCB0aGUgYE9wdGlvbmFsYCBvYmplY3QgY29udGFpbnMgZWl0aGVyIDAgb3IgMSBvYmplY3RzLCBhbmRcbiAgICogdGhlIG91dHB1dCB3aWxsIGtlZXAgdGhlIChzaW5nbGUpIGlucHV0IG9iamVjdCAoaWYgaXQgZXhpc3RzKSBhcyBsb25nIGFzXG4gICAqIGl0IHBhc3NlcyB0aGUgcHJlZGljYXRlLlxuICAgKi9cbiAgcHVibGljIGZpbHRlcjxVIGV4dGVuZHMgVD4ocHJlZGljYXRlOiAodmFsdWU6IFQpID0+IHZhbHVlIGlzIFUpOiBPcHRpb25hbDxVPjtcbiAgcHVibGljIGZpbHRlcihwcmVkaWNhdGU6ICh2YWx1ZTogVCkgPT4gYm9vbGVhbik6IE9wdGlvbmFsPFQ+O1xuICBwdWJsaWMgZmlsdGVyKHByZWRpY2F0ZTogKHZhbHVlOiBUKSA9PiBib29sZWFuKTogT3B0aW9uYWw8VD4ge1xuICAgIGlmICghdGhpcy50YWcgfHwgcHJlZGljYXRlKHRoaXMudmFsdWUgYXMgVCkpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gT3B0aW9uYWwubm9uZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIC0tLSBHZXR0ZXJzIC0tLVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHZhbHVlIG91dCBvZiB0aGUgaW5zaWRlIG9mIHRoZSBgT3B0aW9uYWxgIG9iamVjdCwgdXNpbmcgYSBkZWZhdWx0XG4gICAqIGByZXBsYWNlbWVudGAgdmFsdWUgaWYgdGhlIHByb3ZpZGVkIGBPcHRpb25hbGAgb2JqZWN0IGRvZXMgbm90IGNvbnRhaW4gYVxuICAgKiB2YWx1ZS5cbiAgICovXG4gIHB1YmxpYyBnZXRPcjxVID0gVD4ocmVwbGFjZW1lbnQ6IFUpOiBUIHwgVSB7XG4gICAgcmV0dXJuIHRoaXMudGFnID8gdGhpcy52YWx1ZSBhcyBUIDogcmVwbGFjZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB2YWx1ZSBvdXQgb2YgdGhlIGluc2lkZSBvZiB0aGUgYE9wdGlvbmFsYCBvYmplY3QsIHVzaW5nIGEgZGVmYXVsdFxuICAgKiBgcmVwbGFjZW1lbnRgIHZhbHVlIGlmIHRoZSBwcm92aWRlZCBgT3B0aW9uYWxgIG9iamVjdCBkb2VzIG5vdCBjb250YWluIGFcbiAgICogdmFsdWUuICBVbmxpa2UgYGdldE9yYCwgaW4gdGhpcyBtZXRob2QgdGhlIGByZXBsYWNlbWVudGAgb2JqZWN0IGlzIGFsc29cbiAgICogYE9wdGlvbmFsYCAtIG1lYW5pbmcgdGhhdCB0aGlzIG1ldGhvZCB3aWxsIGFsd2F5cyByZXR1cm4gYW4gYE9wdGlvbmFsYC5cbiAgICovXG4gIHB1YmxpYyBvcjxVID0gVD4ocmVwbGFjZW1lbnQ6IE9wdGlvbmFsPFU+KTogT3B0aW9uYWw8VCB8IFU+IHtcbiAgICByZXR1cm4gdGhpcy50YWcgPyB0aGlzIDogcmVwbGFjZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB2YWx1ZSBvdXQgb2YgdGhlIGluc2lkZSBvZiB0aGUgYE9wdGlvbmFsYCBvYmplY3QsIHVzaW5nIGEgZGVmYXVsdFxuICAgKiBgcmVwbGFjZW1lbnRgIHZhbHVlIGlmIHRoZSBwcm92aWRlZCBgT3B0aW9uYWxgIG9iamVjdCBkb2VzIG5vdCBjb250YWluIGFcbiAgICogdmFsdWUuIFVubGlrZSBgZ2V0T3JgLCBpbiB0aGlzIG1ldGhvZCB0aGUgYHJlcGxhY2VtZW50YCB2YWx1ZSBpc1xuICAgKiBcInRodW5rZWRcIiAtIHRoYXQgaXMgdG8gc2F5IHRoYXQgeW91IGRvbid0IHBhc3MgYSB2YWx1ZSB0byBgZ2V0T3JUaHVua2AsIHlvdVxuICAgKiBwYXNzIGEgZnVuY3Rpb24gd2hpY2ggKGlmIGNhbGxlZCkgd2lsbCAqKnJldHVybioqIHRoZSBgdmFsdWVgIHlvdSB3YW50IHRvXG4gICAqIHVzZS5cbiAgICovXG4gIHB1YmxpYyBnZXRPclRodW5rPFUgPSBUPih0aHVuazogKCkgPT4gVSk6IFQgfCBVIHtcbiAgICByZXR1cm4gdGhpcy50YWcgPyB0aGlzLnZhbHVlIGFzIFQgOiB0aHVuaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdmFsdWUgb3V0IG9mIHRoZSBpbnNpZGUgb2YgdGhlIGBPcHRpb25hbGAgb2JqZWN0LCB1c2luZyBhIGRlZmF1bHRcbiAgICogYHJlcGxhY2VtZW50YCB2YWx1ZSBpZiB0aGUgcHJvdmlkZWQgT3B0aW9uYWwgb2JqZWN0IGRvZXMgbm90IGNvbnRhaW4gYVxuICAgKiB2YWx1ZS5cbiAgICpcbiAgICogVW5saWtlIGBvcmAsIGluIHRoaXMgbWV0aG9kIHRoZSBgcmVwbGFjZW1lbnRgIHZhbHVlIGlzIFwidGh1bmtlZFwiIC0gdGhhdCBpc1xuICAgKiB0byBzYXkgdGhhdCB5b3UgZG9uJ3QgcGFzcyBhIHZhbHVlIHRvIGBvclRodW5rYCwgeW91IHBhc3MgYSBmdW5jdGlvbiB3aGljaFxuICAgKiAoaWYgY2FsbGVkKSB3aWxsICoqcmV0dXJuKiogdGhlIGB2YWx1ZWAgeW91IHdhbnQgdG8gdXNlLlxuICAgKlxuICAgKiBVbmxpa2UgYGdldE9yVGh1bmtgLCBpbiB0aGlzIG1ldGhvZCB0aGUgYHJlcGxhY2VtZW50YCB2YWx1ZSBpcyBhbHNvXG4gICAqIGBPcHRpb25hbGAsIG1lYW5pbmcgdGhhdCB0aGlzIG1ldGhvZCB3aWxsIGFsd2F5cyByZXR1cm4gYW4gYE9wdGlvbmFsYC5cbiAgICovXG4gIHB1YmxpYyBvclRodW5rPFUgPSBUPih0aHVuazogKCkgPT4gT3B0aW9uYWw8VT4pOiBPcHRpb25hbDxUIHwgVT4ge1xuICAgIHJldHVybiB0aGlzLnRhZyA/IHRoaXMgOiB0aHVuaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdmFsdWUgb3V0IG9mIHRoZSBpbnNpZGUgb2YgdGhlIGBPcHRpb25hbGAgb2JqZWN0LCB0aHJvd2luZyBhblxuICAgKiBleGNlcHRpb24gaWYgdGhlIHByb3ZpZGVkIGBPcHRpb25hbGAgb2JqZWN0IGRvZXMgbm90IGNvbnRhaW4gYSB2YWx1ZS5cbiAgICpcbiAgICogV0FSTklORzpcbiAgICogWW91IHNob3VsZCBvbmx5IGJlIHVzaW5nIHRoaXMgZnVuY3Rpb24gaWYgeW91IGtub3cgdGhhdCB0aGUgYE9wdGlvbmFsYFxuICAgKiBvYmplY3QgKippcyBub3QqKiBlbXB0eSAob3RoZXJ3aXNlIHlvdSdyZSB0aHJvd2luZyBleGNlcHRpb25zIGluIHByb2R1Y3Rpb25cbiAgICogY29kZSwgd2hpY2ggaXMgYmFkKS5cbiAgICpcbiAgICogSW4gdGVzdHMgdGhpcyBpcyBtb3JlIGFjY2VwdGFibGUuXG4gICAqXG4gICAqIFByZWZlciBvdGhlciBtZXRob2RzIHRvIHRoaXMsIHN1Y2ggYXMgYC5lYWNoYC5cbiAgICovXG4gIHB1YmxpYyBnZXRPckRpZShtZXNzYWdlPzogc3RyaW5nKTogVCB7XG4gICAgaWYgKCF0aGlzLnRhZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UgPz8gJ0NhbGxlZCBnZXRPckRpZSBvbiBOb25lJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlIGFzIFQ7XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tIEludGVyb3Agd2l0aCBudWxsIGFuZCB1bmRlZmluZWQgLS0tXG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gYE9wdGlvbmFsYCB2YWx1ZSBmcm9tIGEgbnVsbGFibGUgKG9yIHVuZGVmaW5lZC1hYmxlKSBpbnB1dC5cbiAgICogTnVsbCwgb3IgdW5kZWZpbmVkLCBpcyBjb252ZXJ0ZWQgdG8gYE5vbmVgLCBhbmQgYW55dGhpbmcgZWxzZSBpcyBjb252ZXJ0ZWRcbiAgICogdG8gYFNvbWVgLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBmcm9tPFQ+KHRoaXM6IHZvaWQsIHZhbHVlOiBUIHwgbnVsbCB8IHVuZGVmaW5lZCk6IE9wdGlvbmFsPE5vbk51bGxhYmxlPFQ+PiB7XG4gICAgcmV0dXJuIFR5cGUuaXNOb25OdWxsYWJsZSh2YWx1ZSkgPyBPcHRpb25hbC5zb21lKHZhbHVlKSA6IE9wdGlvbmFsLm5vbmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhbiBgT3B0aW9uYWxgIHRvIGEgbnVsbGFibGUgdHlwZSwgYnkgZ2V0dGluZyB0aGUgdmFsdWUgaWYgaXRcbiAgICogZXhpc3RzLCBvciByZXR1cm5pbmcgYG51bGxgIGlmIGl0IGRvZXMgbm90LlxuICAgKi9cbiAgcHVibGljIGdldE9yTnVsbCgpOiBUIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMudGFnID8gdGhpcy52YWx1ZSBhcyBUIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhbiBgT3B0aW9uYWxgIHRvIGFuIHVuZGVmaW5lZC1hYmxlIHR5cGUsIGJ5IGdldHRpbmcgdGhlIHZhbHVlIGlmXG4gICAqIGl0IGV4aXN0cywgb3IgcmV0dXJuaW5nIGB1bmRlZmluZWRgIGlmIGl0IGRvZXMgbm90LlxuICAgKi9cbiAgcHVibGljIGdldE9yVW5kZWZpbmVkKCk6IFQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG5cbiAgLy8gLS0tIFV0aWxpdGllcyAtLS1cblxuICAvKipcbiAgICogSWYgdGhlIGBPcHRpb25hbGAgY29udGFpbnMgYSB2YWx1ZSwgcGVyZm9ybSBhbiBhY3Rpb24gb24gdGhhdCB2YWx1ZS5cbiAgICogVW5saWtlIHRoZSByZXN0IG9mIHRoZSBtZXRob2RzIG9uIHRoaXMgdHlwZSwgYC5lYWNoYCBoYXMgc2lkZS1lZmZlY3RzLiBJZlxuICAgKiB5b3Ugd2FudCB0byB0cmFuc2Zvcm0gYW4gYE9wdGlvbmFsPFQ+YCAqKmludG8qKiBzb21ldGhpbmcsIHRoZW4gdGhpcyBpcyBub3RcbiAgICogdGhlIG1ldGhvZCBmb3IgeW91LiBJZiB5b3Ugd2FudCB0byB1c2UgYW4gYE9wdGlvbmFsPFQ+YCB0byAqKmRvKipcbiAgICogc29tZXRoaW5nLCB0aGVuIHRoaXMgaXMgdGhlIG1ldGhvZCBmb3IgeW91IC0gcHJvdmlkZWQgeW91J3JlIG9rYXkgd2l0aCBub3RcbiAgICogZG9pbmcgYW55dGhpbmcgaW4gdGhlIGNhc2Ugd2hlcmUgdGhlIGBPcHRpb25hbGAgZG9lc24ndCBoYXZlIGEgdmFsdWUgaW5zaWRlXG4gICAqIGl0LiBJZiB5b3UncmUgbm90IHN1cmUgd2hldGhlciB5b3VyIHVzZS1jYXNlIGZpdHMgaW50byB0cmFuc2Zvcm1pbmdcbiAgICogKippbnRvKiogc29tZXRoaW5nIG9yICoqZG9pbmcqKiBzb21ldGhpbmcsIGNoZWNrIHdoZXRoZXIgaXQgaGFzIGEgcmV0dXJuXG4gICAqIHZhbHVlLiBJZiBpdCBkb2VzLCB5b3Ugc2hvdWxkIGJlIHBlcmZvcm1pbmcgYSB0cmFuc2Zvcm0uXG4gICAqL1xuICBwdWJsaWMgZWFjaCh3b3JrZXI6ICh2YWx1ZTogVCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnRhZykge1xuICAgICAgd29ya2VyKHRoaXMudmFsdWUgYXMgVCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFR1cm4gdGhlIGBPcHRpb25hbGAgb2JqZWN0IGludG8gYW4gYXJyYXkgdGhhdCBjb250YWlucyBhbGwgb2YgdGhlIHZhbHVlc1xuICAgKiBzdG9yZWQgaW5zaWRlIHRoZSBgT3B0aW9uYWxgLiBJbiBwcmFjdGljZSwgdGhpcyBtZWFucyB0aGUgb3V0cHV0IHdpbGwgaGF2ZVxuICAgKiBlaXRoZXIgMCBvciAxIGVsZW1lbnRzLlxuICAgKi9cbiAgcHVibGljIHRvQXJyYXkoKTogVFtdIHtcbiAgICByZXR1cm4gdGhpcy50YWcgPyBbIHRoaXMudmFsdWUgYXMgVCBdIDogW107XG4gIH1cblxuICAvKipcbiAgICogVHVybiB0aGUgYE9wdGlvbmFsYCBvYmplY3QgaW50byBhIHN0cmluZyBmb3IgZGVidWdnaW5nIG9yIHByaW50aW5nLiBOb3RcbiAgICogcmVjb21tZW5kZWQgZm9yIHByb2R1Y3Rpb24gY29kZSwgYnV0IGdvb2QgZm9yIGRlYnVnZ2luZy4gQWxzbyBub3RlIHRoYXRcbiAgICogdGhlc2UgZGF5cyBhbiBgT3B0aW9uYWxgIG9iamVjdCBjYW4gYmUgbG9nZ2VkIHRvIHRoZSBjb25zb2xlIGRpcmVjdGx5LCBhbmRcbiAgICogaXRzIGlubmVyIHZhbHVlIChpZiBpdCBleGlzdHMpIHdpbGwgYmUgdmlzaWJsZS5cbiAgICovXG4gIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnRhZyA/IGBzb21lKCR7dGhpcy52YWx1ZX0pYCA6ICdub25lKCknO1xuICB9XG59XG4iLCJpbXBvcnQgeyBHbG9iYWwgfSBmcm9tICcuL0dsb2JhbCc7XG5cbi8qKiBwYXRoIDo6IChbU3RyaW5nXSwgSnNPYmo/KSAtPiBKc09iaiAqL1xuZXhwb3J0IGNvbnN0IHBhdGggPSA8VD4ocGFydHM6IHN0cmluZ1tdLCBzY29wZT86IHt9KTogVCB8IHVuZGVmaW5lZCA9PiB7XG4gIGxldCBvID0gc2NvcGUgIT09IHVuZGVmaW5lZCAmJiBzY29wZSAhPT0gbnVsbCA/IHNjb3BlIDogR2xvYmFsO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aCAmJiBvICE9PSB1bmRlZmluZWQgJiYgbyAhPT0gbnVsbDsgKytpKSB7XG4gICAgbyA9IG9bcGFydHNbaV1dO1xuICB9XG4gIHJldHVybiBvO1xufTtcblxuLyoqIHJlc29sdmUgOjogKFN0cmluZywgSnNPYmo/KSAtPiBKc09iaiAqL1xuZXhwb3J0IGNvbnN0IHJlc29sdmUgPSA8VD4ocDogc3RyaW5nLCBzY29wZT86IHt9KTogVCB8IHVuZGVmaW5lZCA9PiB7XG4gIGNvbnN0IHBhcnRzID0gcC5zcGxpdCgnLicpO1xuICByZXR1cm4gcGF0aChwYXJ0cywgc2NvcGUpO1xufTtcblxuLyoqIHN0ZXAgOjogKEpzT2JqLCBTdHJpbmcpIC0+IEpzT2JqICovXG5leHBvcnQgY29uc3Qgc3RlcCA9IDxUIGV4dGVuZHMge30sIEsgZXh0ZW5kcyBrZXlvZiBUPihvOiBULCBwYXJ0OiBLKTogVFtLXSA9PiB7XG4gIGlmIChvW3BhcnRdID09PSB1bmRlZmluZWQgfHwgb1twYXJ0XSA9PT0gbnVsbCkge1xuICAgIG9bcGFydF0gPSB7fSBhcyBUW0tdO1xuICB9XG4gIHJldHVybiBvW3BhcnRdO1xufTtcblxuLyoqIGZvcmdlIDo6IChbU3RyaW5nXSwgSnNPYmo/KSAtPiBKc09iaiAqL1xuZXhwb3J0IGNvbnN0IGZvcmdlID0gPFQgZXh0ZW5kcyBzdHJpbmdbXT4ocGFydHM6IFQsIHRhcmdldD86IHt9KTogeyBbIEsgaW4gVFtudW1iZXJdXToge319ID0+IHtcbiAgbGV0IG8gPSB0YXJnZXQgIT09IHVuZGVmaW5lZCA/IHRhcmdldCA6IEdsb2JhbDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7ICsraSkge1xuICAgIG8gPSBzdGVwKG8sIHBhcnRzW2ldKTtcbiAgfVxuICByZXR1cm4gbztcbn07XG5cbi8qKiBuYW1lc3BhY2UgOjogKFN0cmluZywgSnNPYmo/KSAtPiBKc09iaiAqL1xuZXhwb3J0IGNvbnN0IG5hbWVzcGFjZSA9IChuYW1lOiBzdHJpbmcsIHRhcmdldD86IHt9KTogeyBba2V5OiBzdHJpbmddOiB7fX0gPT4ge1xuICBjb25zdCBwYXJ0cyA9IG5hbWUuc3BsaXQoJy4nKTtcbiAgcmV0dXJuIGZvcmdlKHBhcnRzLCB0YXJnZXQpO1xufTtcbiIsImltcG9ydCAqIGFzIFN0ckFwcGVuZCBmcm9tICcuLi9zdHIvU3RyQXBwZW5kJztcblxuaW1wb3J0IHsgT3B0aW9uYWwgfSBmcm9tICcuL09wdGlvbmFsJztcbmltcG9ydCAqIGFzIFR5cGUgZnJvbSAnLi9UeXBlJztcblxuY29uc3QgY2hlY2tSYW5nZSA9IChzdHI6IHN0cmluZywgc3Vic3RyOiBzdHJpbmcsIHN0YXJ0OiBudW1iZXIpOiBib29sZWFuID0+XG4gIHN1YnN0ciA9PT0gJycgfHwgc3RyLmxlbmd0aCA+PSBzdWJzdHIubGVuZ3RoICYmIHN0ci5zdWJzdHIoc3RhcnQsIHN0YXJ0ICsgc3Vic3RyLmxlbmd0aCkgPT09IHN1YnN0cjtcblxuLyoqIEdpdmVuIGEgc3RyaW5nIGFuZCBvYmplY3QsIHBlcmZvcm0gdGVtcGxhdGUtcmVwbGFjZW1lbnRzIG9uIHRoZSBzdHJpbmcsIGFzIHNwZWNpZmllZCBieSB0aGUgb2JqZWN0LlxuICogQW55IHRlbXBsYXRlIGZpZWxkcyBvZiB0aGUgZm9ybSAke25hbWV9IGFyZSByZXBsYWNlZCBieSB0aGUgc3RyaW5nIG9yIG51bWJlciBzcGVjaWZpZWQgYXMgb2JqW1wibmFtZVwiXVxuICogQmFzZWQgb24gRG91Z2xhcyBDcm9ja2ZvcmQncyAnc3VwcGxhbnQnIG1ldGhvZCBmb3IgdGVtcGxhdGUtcmVwbGFjZSBvZiBzdHJpbmdzLiBVc2VzIGRpZmZlcmVudCB0ZW1wbGF0ZSBmb3JtYXQuXG4gKi9cbmV4cG9ydCBjb25zdCBzdXBwbGFudCA9IChzdHI6IHN0cmluZywgb2JqOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudW1iZXI+KTogc3RyaW5nID0+IHtcbiAgY29uc3QgaXNTdHJpbmdPck51bWJlciA9IChhOiB1bmtub3duKTogYSBpcyBzdHJpbmcgfCBudW1iZXIgPT4ge1xuICAgIGNvbnN0IHQgPSB0eXBlb2YgYTtcbiAgICByZXR1cm4gdCA9PT0gJ3N0cmluZycgfHwgdCA9PT0gJ251bWJlcic7XG4gIH07XG5cbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXCRcXHsoW157fV0qKVxcfS9nLFxuICAgIChmdWxsTWF0Y2g6IHN0cmluZywga2V5OiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gb2JqW2tleV07XG4gICAgICByZXR1cm4gaXNTdHJpbmdPck51bWJlcih2YWx1ZSkgPyB2YWx1ZS50b1N0cmluZygpIDogZnVsbE1hdGNoO1xuICAgIH1cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVMZWFkaW5nID0gKHN0cjogc3RyaW5nLCBwcmVmaXg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBzdGFydHNXaXRoKHN0ciwgcHJlZml4KSA/IFN0ckFwcGVuZC5yZW1vdmVGcm9tU3RhcnQoc3RyLCBwcmVmaXgubGVuZ3RoKSA6IHN0cjtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVUcmFpbGluZyA9IChzdHI6IHN0cmluZywgc3VmZml4OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gZW5kc1dpdGgoc3RyLCBzdWZmaXgpID8gU3RyQXBwZW5kLnJlbW92ZUZyb21FbmQoc3RyLCBzdWZmaXgubGVuZ3RoKSA6IHN0cjtcbn07XG5cbmV4cG9ydCBjb25zdCBlbnN1cmVMZWFkaW5nID0gKHN0cjogc3RyaW5nLCBwcmVmaXg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBzdGFydHNXaXRoKHN0ciwgcHJlZml4KSA/IHN0ciA6IFN0ckFwcGVuZC5hZGRUb1N0YXJ0KHN0ciwgcHJlZml4KTtcbn07XG5cbmV4cG9ydCBjb25zdCBlbnN1cmVUcmFpbGluZyA9IChzdHI6IHN0cmluZywgc3VmZml4OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gZW5kc1dpdGgoc3RyLCBzdWZmaXgpID8gc3RyIDogU3RyQXBwZW5kLmFkZFRvRW5kKHN0ciwgc3VmZml4KTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb250YWlucyA9IChzdHI6IHN0cmluZywgc3Vic3RyOiBzdHJpbmcsIHN0YXJ0OiBudW1iZXIgPSAwLCBlbmQ/OiBudW1iZXIpOiBib29sZWFuID0+IHtcbiAgY29uc3QgaWR4ID0gc3RyLmluZGV4T2Yoc3Vic3RyLCBzdGFydCk7XG4gIGlmIChpZHggIT09IC0xKSB7XG4gICAgcmV0dXJuIFR5cGUuaXNVbmRlZmluZWQoZW5kKSA/IHRydWUgOiBpZHggKyBzdWJzdHIubGVuZ3RoIDw9IGVuZDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBjYXBpdGFsaXplID0gKHN0cjogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIHN0ciA9PT0gJycgPyAnJyA6IHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zdWJzdHJpbmcoMSk7XG59O1xuXG4vKiogRG9lcyAnc3RyJyBzdGFydCB3aXRoICdwcmVmaXgnP1xuICogIE5vdGU6IGFsbCBzdHJpbmdzIHN0YXJ0IHdpdGggdGhlIGVtcHR5IHN0cmluZy5cbiAqICAgICAgICBNb3JlIGZvcm1hbGx5LCBmb3IgYWxsIHN0cmluZ3MgeCwgc3RhcnRzV2l0aCh4LCBcIlwiKS5cbiAqICAgICAgICBUaGlzIGlzIHNvIHRoYXQgZm9yIGFsbCBzdHJpbmdzIHggYW5kIHksIHN0YXJ0c1dpdGgoeSArIHgsIHkpXG4gKi9cbmV4cG9ydCBjb25zdCBzdGFydHNXaXRoID0gKHN0cjogc3RyaW5nLCBwcmVmaXg6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gY2hlY2tSYW5nZShzdHIsIHByZWZpeCwgMCk7XG59O1xuXG4vKiogRG9lcyAnc3RyJyBlbmQgd2l0aCAnc3VmZml4Jz9cbiAqICBOb3RlOiBhbGwgc3RyaW5ncyBlbmQgd2l0aCB0aGUgZW1wdHkgc3RyaW5nLlxuICogICAgICAgIE1vcmUgZm9ybWFsbHksIGZvciBhbGwgc3RyaW5ncyB4LCBlbmRzV2l0aCh4LCBcIlwiKS5cbiAqICAgICAgICBUaGlzIGlzIHNvIHRoYXQgZm9yIGFsbCBzdHJpbmdzIHggYW5kIHksIGVuZHNXaXRoKHggKyB5LCB5KVxuICovXG5leHBvcnQgY29uc3QgZW5kc1dpdGggPSAoc3RyOiBzdHJpbmcsIHN1ZmZpeDogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gIHJldHVybiBjaGVja1JhbmdlKHN0ciwgc3VmZml4LCBzdHIubGVuZ3RoIC0gc3VmZml4Lmxlbmd0aCk7XG59O1xuXG5jb25zdCBibGFuayA9IChyOiBSZWdFeHApID0+IChzOiBzdHJpbmcpOiBzdHJpbmcgPT5cbiAgcy5yZXBsYWNlKHIsICcnKTtcblxuLyoqIHJlbW92ZXMgYWxsIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHNwYWNlcyAqL1xuZXhwb3J0IGNvbnN0IHRyaW06IChzOiBzdHJpbmcpID0+IHN0cmluZyA9XG4gIGJsYW5rKC9eXFxzK3xcXHMrJC9nKTtcblxuZXhwb3J0IGNvbnN0IGxUcmltOiAoczogc3RyaW5nKSA9PiBzdHJpbmcgPVxuICBibGFuaygvXlxccysvZyk7XG5cbmV4cG9ydCBjb25zdCByVHJpbTogKHM6IHN0cmluZykgPT4gc3RyaW5nID1cbiAgYmxhbmsoL1xccyskL2cpO1xuXG5leHBvcnQgY29uc3QgaXNOb3RFbXB0eSA9IChzOiBzdHJpbmcpOiBib29sZWFuID0+IHMubGVuZ3RoID4gMDtcblxuZXhwb3J0IGNvbnN0IGlzRW1wdHkgPSAoczogc3RyaW5nKTogYm9vbGVhbiA9PiAhaXNOb3RFbXB0eShzKTtcblxuZXhwb3J0IGNvbnN0IHJlcGVhdCA9IChzOiBzdHJpbmcsIGNvdW50OiBudW1iZXIpOiBzdHJpbmcgPT4gY291bnQgPD0gMCA/ICcnIDogbmV3IEFycmF5KGNvdW50ICsgMSkuam9pbihzKTtcblxuZXhwb3J0IGNvbnN0IGZyb21Db2RlUG9pbnQgPSBTdHJpbmcuZnJvbUNvZGVQb2ludDtcblxuZXhwb3J0IGNvbnN0IHRvSW50ID0gKHZhbHVlOiBzdHJpbmcsIHJhZGl4OiBudW1iZXIgPSAxMCk6IE9wdGlvbmFsPG51bWJlcj4gPT4ge1xuICBjb25zdCBudW0gPSBwYXJzZUludCh2YWx1ZSwgcmFkaXgpO1xuICByZXR1cm4gaXNOYU4obnVtKSA/IE9wdGlvbmFsLm5vbmUoKSA6IE9wdGlvbmFsLnNvbWUobnVtKTtcbn07XG5cbmV4cG9ydCBjb25zdCB0b0Zsb2F0ID0gKHZhbHVlOiBzdHJpbmcpOiBPcHRpb25hbDxudW1iZXI+ID0+IHtcbiAgY29uc3QgbnVtID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gIHJldHVybiBpc05hTihudW0pID8gT3B0aW9uYWwubm9uZSgpIDogT3B0aW9uYWwuc29tZShudW0pO1xufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby13cmFwcGVyLW9iamVjdC10eXBlcyAqL1xuY29uc3QgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG5cbmludGVyZmFjZSBDb25zdHJ1Y3RvcjxUIGV4dGVuZHMgT2JqZWN0PiB7XG4gIHJlYWRvbmx5IHByb3RvdHlwZTogVDtcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xufVxuXG5jb25zdCBoYXNQcm90byA9IDxUIGV4dGVuZHMgT2JqZWN0Pih2OiBPYmplY3QsIGNvbnN0cnVjdG9yOiBDb25zdHJ1Y3RvcjxUPiwgcHJlZGljYXRlOiAodjogT2JqZWN0LCBwcm90b3R5cGU6IFQpID0+IGJvb2xlYW4pOiBib29sZWFuID0+IHtcbiAgaWYgKHByZWRpY2F0ZSh2LCBjb25zdHJ1Y3Rvci5wcm90b3R5cGUpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgLy8gU3RyaW5nLWJhc2VkIGZhbGxiYWNrIHRpbWVcbiAgICByZXR1cm4gdi5jb25zdHJ1Y3Rvcj8ubmFtZSA9PT0gY29uc3RydWN0b3IubmFtZTtcbiAgfVxufTtcblxuY29uc3QgdHlwZU9mID0gKHg6IGFueSk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IHQgPSB0eXBlb2YgeDtcbiAgaWYgKHggPT09IG51bGwpIHtcbiAgICByZXR1cm4gJ251bGwnO1xuICB9IGVsc2UgaWYgKHQgPT09ICdvYmplY3QnICYmIEFycmF5LmlzQXJyYXkoeCkpIHtcbiAgICByZXR1cm4gJ2FycmF5JztcbiAgfSBlbHNlIGlmICh0ID09PSAnb2JqZWN0JyAmJiBoYXNQcm90byh4LCBTdHJpbmcsIChvLCBwcm90bykgPT4gcHJvdG8uaXNQcm90b3R5cGVPZihvKSkpIHtcbiAgICByZXR1cm4gJ3N0cmluZyc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHQ7XG4gIH1cbn07XG5cbmNvbnN0IGlzVHlwZSA9IDxZb2xvPih0eXBlOiBzdHJpbmcpID0+ICh2YWx1ZTogYW55KTogdmFsdWUgaXMgWW9sbyA9PlxuICB0eXBlT2YodmFsdWUpID09PSB0eXBlO1xuXG5jb25zdCBpc1NpbXBsZVR5cGUgPSA8WW9sbz4odHlwZTogc3RyaW5nKSA9PiAodmFsdWU6IGFueSk6IHZhbHVlIGlzIFlvbG8gPT5cbiAgdHlwZW9mIHZhbHVlID09PSB0eXBlO1xuXG5jb25zdCBlcSA9IDxUPiAodDogVCkgPT4gKGE6IGFueSk6IGEgaXMgVCA9PlxuICB0ID09PSBhO1xuXG5leHBvcnQgY29uc3QgaXMgPSA8RSBleHRlbmRzIE9iamVjdD4odmFsdWU6IGFueSwgY29uc3RydWN0b3I6IENvbnN0cnVjdG9yPEU+KTogdmFsdWUgaXMgRSA9PlxuICBpc09iamVjdCh2YWx1ZSkgJiYgaGFzUHJvdG88RT4odmFsdWUsIGNvbnN0cnVjdG9yLCAobywgcHJvdG8pID0+IGdldFByb3RvdHlwZU9mKG8pID09PSBwcm90byk7XG5cbmV4cG9ydCBjb25zdCBpc1N0cmluZzogKHZhbHVlOiBhbnkpID0+IHZhbHVlIGlzIHN0cmluZyA9XG4gIGlzVHlwZSgnc3RyaW5nJyk7XG5cbmV4cG9ydCBjb25zdCBpc09iamVjdDogKHZhbHVlOiBhbnkpID0+IHZhbHVlIGlzIE9iamVjdCA9XG4gIGlzVHlwZSgnb2JqZWN0Jyk7XG5cbmV4cG9ydCBjb25zdCBpc1BsYWluT2JqZWN0ID0gKHZhbHVlOiB1bmtub3duKTogdmFsdWUgaXMgT2JqZWN0ID0+XG4gIGlzKHZhbHVlLCBPYmplY3QpO1xuXG5leHBvcnQgY29uc3QgaXNBcnJheTogKHZhbHVlOiBhbnkpID0+IHZhbHVlIGlzIEFycmF5PHVua25vd24+ID1cbiAgaXNUeXBlKCdhcnJheScpO1xuXG5leHBvcnQgY29uc3QgaXNOdWxsOiAoYTogYW55KSA9PiBhIGlzIG51bGwgPVxuICBlcShudWxsKTtcblxuZXhwb3J0IGNvbnN0IGlzQm9vbGVhbjogKHZhbHVlOiBhbnkpID0+IHZhbHVlIGlzIGJvb2xlYW4gPVxuICBpc1NpbXBsZVR5cGU8Ym9vbGVhbj4oJ2Jvb2xlYW4nKTtcblxuZXhwb3J0IGNvbnN0IGlzVW5kZWZpbmVkOiAoYTogYW55KSA9PiBhIGlzIHVuZGVmaW5lZCA9XG4gIGVxKHVuZGVmaW5lZCk7XG5cbmV4cG9ydCBjb25zdCBpc051bGxhYmxlID0gKGE6IGFueSk6IGEgaXMgbnVsbCB8IHVuZGVmaW5lZCA9PlxuICBhID09PSBudWxsIHx8IGEgPT09IHVuZGVmaW5lZDtcblxuZXhwb3J0IGNvbnN0IGlzTm9uTnVsbGFibGUgPSA8QT4gKGE6IEEgfCBudWxsIHwgdW5kZWZpbmVkKTogYSBpcyBOb25OdWxsYWJsZTxBPiA9PlxuICAhaXNOdWxsYWJsZShhKTtcblxuZXhwb3J0IGNvbnN0IGlzRnVuY3Rpb246ICh2YWx1ZTogYW55KSA9PiB2YWx1ZSBpcyBGdW5jdGlvbiA9XG4gIGlzU2ltcGxlVHlwZTxGdW5jdGlvbj4oJ2Z1bmN0aW9uJyk7XG5cbmV4cG9ydCBjb25zdCBpc051bWJlcjogKHZhbHVlOiBhbnkpID0+IHZhbHVlIGlzIG51bWJlciA9XG4gIGlzU2ltcGxlVHlwZTxudW1iZXI+KCdudW1iZXInKTtcblxuZXhwb3J0IGNvbnN0IGlzQXJyYXlPZiA9IDxFPih2YWx1ZTogYW55LCBwcmVkOiAoeDogYW55KSA9PiB4IGlzIEUpOiB2YWx1ZSBpcyBBcnJheTxFPiA9PiB7XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB2YWx1ZS5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgaWYgKCEocHJlZCh2YWx1ZVtpXSkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzUHJvbWlzZUxpa2UgPSAoeDogYW55KTogeCBpcyBQcm9taXNlPHVua25vd24+ID0+XG4gIGlzT2JqZWN0KHgpXG4gICYmIGlzRnVuY3Rpb24oeC50aGVuKVxuICAmJiBpc0Z1bmN0aW9uKHguY2F0Y2gpO1xuIiwiZXhwb3J0IGNvbnN0IGFkZFRvU3RhcnQgPSAoc3RyOiBzdHJpbmcsIHByZWZpeDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIHByZWZpeCArIHN0cjtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRUb0VuZCA9IChzdHI6IHN0cmluZywgc3VmZml4OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gc3RyICsgc3VmZml4O1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUZyb21TdGFydCA9IChzdHI6IHN0cmluZywgbnVtQ2hhcnM6IG51bWJlcik6IHN0cmluZyA9PiB7XG4gIHJldHVybiBzdHIuc3Vic3RyaW5nKG51bUNoYXJzKTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVGcm9tRW5kID0gKHN0cjogc3RyaW5nLCBudW1DaGFyczogbnVtYmVyKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIHN0ci5zdWJzdHJpbmcoMCwgc3RyLmxlbmd0aCAtIG51bUNoYXJzKTtcbn07XG4iLCJpbXBvcnQgeyBSZXNvbHZlLCBUeXBlIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0ICogYXMgR2xvYmFsIGZyb20gJy4uL3V0aWwvR2xvYmFsJztcblxuY29uc3QgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG5cbi8qXG4gKiBJRTkgYW5kIGFib3ZlXG4gKlxuICogTUROIG5vIHVzZSBvbiB0aGlzIG9uZSwgYnV0IGhlcmUncyB0aGUgbGluayBhbnl3YXk6XG4gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9kb2NzL1dlYi9BUEkvSFRNTEVsZW1lbnRcbiAqL1xuY29uc3Qgc2FuZEhUTUxFbGVtZW50ID0gKHNjb3BlOiBXaW5kb3cgfCB1bmRlZmluZWQpID0+IHtcbiAgcmV0dXJuIEdsb2JhbC5nZXRPckRpZSgnSFRNTEVsZW1lbnQnLCBzY29wZSkgYXMgdHlwZW9mIEhUTUxFbGVtZW50O1xufTtcblxuY29uc3QgaXNQcm90b3R5cGVPZiA9ICh4OiBhbnkpOiB4IGlzIEhUTUxFbGVtZW50ID0+IHtcbiAgLy8gdXNlIFJlc29sdmUgdG8gZ2V0IHRoZSB3aW5kb3cgb2JqZWN0IGZvciB4IGFuZCBqdXN0IHJldHVybiB1bmRlZmluZWQgaWYgaXQgY2FuJ3QgZmluZCBpdC5cbiAgLy8gdW5kZWZpbmVkIHNjb3BlIGxhdGVyIHRyaWdnZXJzIHVzaW5nIHRoZSBnbG9iYWwgd2luZG93LlxuICBjb25zdCBzY29wZTogV2luZG93IHwgdW5kZWZpbmVkID0gUmVzb2x2ZS5yZXNvbHZlKCdvd25lckRvY3VtZW50LmRlZmF1bHRWaWV3JywgeCk7XG5cbiAgLy8gVElOWS03Mzc0OiBXZSBjYW4ndCByZWx5IG9uIGxvb2tpbmcgYXQgdGhlIG93bmVyIHdpbmRvdyBIVE1MRWxlbWVudCBhcyB0aGUgZWxlbWVudCBtYXkgaGF2ZVxuICAvLyBiZWVuIGNvbnN0cnVjdGVkIGluIGEgZGlmZmVyZW50IHdpbmRvdyBhbmQgdGhlbiBhcHBlbmRlZCB0byB0aGUgY3VycmVudCB3aW5kb3cgZG9jdW1lbnQuXG4gIHJldHVybiBUeXBlLmlzT2JqZWN0KHgpICYmIChzYW5kSFRNTEVsZW1lbnQoc2NvcGUpLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKHgpIHx8IC9eSFRNTFxcdypFbGVtZW50JC8udGVzdChnZXRQcm90b3R5cGVPZih4KS5jb25zdHJ1Y3Rvci5uYW1lKSk7XG59O1xuXG5leHBvcnQge1xuICBpc1Byb3RvdHlwZU9mXG59O1xuIiwiaW1wb3J0IHsgUmVzb2x2ZSB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmNvbnN0IHVuc2FmZSA9IDxUPihuYW1lOiBzdHJpbmcsIHNjb3BlPzoge30pOiBUIHwgdW5kZWZpbmVkID0+IHtcbiAgcmV0dXJuIFJlc29sdmUucmVzb2x2ZShuYW1lLCBzY29wZSk7XG59O1xuXG5jb25zdCBnZXRPckRpZSA9IDxUPihuYW1lOiBzdHJpbmcsIHNjb3BlPzoge30pOiBUID0+IHtcbiAgY29uc3QgYWN0dWFsID0gdW5zYWZlPFQ+KG5hbWUsIHNjb3BlKTtcblxuICBpZiAoYWN0dWFsID09PSB1bmRlZmluZWQgfHwgYWN0dWFsID09PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKG5hbWUgKyAnIG5vdCBhdmFpbGFibGUgb24gdGhpcyBicm93c2VyJyk7XG4gIH1cbiAgcmV0dXJuIGFjdHVhbDtcbn07XG5cbmV4cG9ydCB7XG4gIGdldE9yRGllXG59O1xuIiwiY29uc3QgQVRUUklCVVRFID0gMjtcbmNvbnN0IENEQVRBX1NFQ1RJT04gPSA0O1xuY29uc3QgQ09NTUVOVCA9IDg7XG5jb25zdCBET0NVTUVOVCA9IDk7XG5jb25zdCBET0NVTUVOVF9UWVBFID0gMTA7XG5jb25zdCBET0NVTUVOVF9GUkFHTUVOVCA9IDExO1xuY29uc3QgRUxFTUVOVCA9IDE7XG5jb25zdCBURVhUID0gMztcbmNvbnN0IFBST0NFU1NJTkdfSU5TVFJVQ1RJT04gPSA3O1xuY29uc3QgRU5USVRZX1JFRkVSRU5DRSA9IDU7XG5jb25zdCBFTlRJVFkgPSA2O1xuY29uc3QgTk9UQVRJT04gPSAxMjtcblxuZXhwb3J0IHtcbiAgQVRUUklCVVRFLFxuICBDREFUQV9TRUNUSU9OLFxuICBDT01NRU5ULFxuICBET0NVTUVOVCxcbiAgRE9DVU1FTlRfVFlQRSxcbiAgRE9DVU1FTlRfRlJBR01FTlQsXG4gIEVMRU1FTlQsXG4gIFRFWFQsXG4gIFBST0NFU1NJTkdfSU5TVFJVQ1RJT04sXG4gIEVOVElUWV9SRUZFUkVOQ0UsXG4gIEVOVElUWSxcbiAgTk9UQVRJT05cbn07XG4iLCJpbXBvcnQgeyBPcHRpb25hbCB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmltcG9ydCB0eXBlIHsgSFRNTEVsZW1lbnRGdWxsVGFnTmFtZU1hcCB9IGZyb20gJy4uLy4uL2FsaWVuL0RvbVR5cGVzJztcblxuaW50ZXJmYWNlIFN1Z2FyRWxlbWVudDxUID0gYW55PiB7XG4gIHJlYWRvbmx5IGRvbTogVDtcbn1cblxuY29uc3QgZnJvbUh0bWwgPSA8RSBleHRlbmRzIE5vZGUgPSBOb2RlICYgQ2hpbGROb2RlPiAoaHRtbDogc3RyaW5nLCBzY29wZT86IERvY3VtZW50IHwgbnVsbCk6IFN1Z2FyRWxlbWVudDxFPiA9PiB7XG4gIGNvbnN0IGRvYyA9IHNjb3BlIHx8IGRvY3VtZW50O1xuICBjb25zdCBkaXYgPSBkb2MuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5pbm5lckhUTUwgPSBodG1sO1xuICBpZiAoIWRpdi5oYXNDaGlsZE5vZGVzKCkgfHwgZGl2LmNoaWxkTm9kZXMubGVuZ3RoID4gMSkge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSAnSFRNTCBkb2VzIG5vdCBoYXZlIGEgc2luZ2xlIHJvb3Qgbm9kZSc7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UsIGh0bWwpO1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgfVxuICByZXR1cm4gZnJvbURvbShkaXYuY2hpbGROb2Rlc1swXSBhcyB1bmtub3duIGFzIEUpO1xufTtcblxuY29uc3QgZnJvbVRhZzoge1xuICA8SyBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50RnVsbFRhZ05hbWVNYXA+KHRhZzogSywgc2NvcGU/OiBEb2N1bWVudCB8IG51bGwpOiBTdWdhckVsZW1lbnQ8SFRNTEVsZW1lbnRGdWxsVGFnTmFtZU1hcFtLXT47XG4gICh0YWc6IHN0cmluZywgc2NvcGU/OiBEb2N1bWVudCB8IG51bGwpOiBTdWdhckVsZW1lbnQ8SFRNTEVsZW1lbnQ+O1xufSA9ICh0YWc6IHN0cmluZywgc2NvcGU/OiBEb2N1bWVudCB8IG51bGwpOiBTdWdhckVsZW1lbnQ8SFRNTEVsZW1lbnQ+ID0+IHtcbiAgY29uc3QgZG9jID0gc2NvcGUgfHwgZG9jdW1lbnQ7XG4gIGNvbnN0IG5vZGUgPSBkb2MuY3JlYXRlRWxlbWVudCh0YWcpO1xuICByZXR1cm4gZnJvbURvbShub2RlKTtcbn07XG5cbmNvbnN0IGZyb21UZXh0ID0gKHRleHQ6IHN0cmluZywgc2NvcGU/OiBEb2N1bWVudCB8IG51bGwpOiBTdWdhckVsZW1lbnQ8VGV4dD4gPT4ge1xuICBjb25zdCBkb2MgPSBzY29wZSB8fCBkb2N1bWVudDtcbiAgY29uc3Qgbm9kZSA9IGRvYy5jcmVhdGVUZXh0Tm9kZSh0ZXh0KTtcbiAgcmV0dXJuIGZyb21Eb20obm9kZSk7XG59O1xuXG5jb25zdCBmcm9tRG9tID0gPFQgZXh0ZW5kcyBOb2RlIHwgV2luZG93PiAobm9kZTogVCk6IFN1Z2FyRWxlbWVudDxUPiA9PiB7XG4gIC8vIFRPRE86IENvbnNpZGVyIHJlbW92aW5nIHRoaXMgY2hlY2ssIGJ1dCBsZWZ0IGF0bSBmb3Igc2FmZXR5XG4gIGlmIChub2RlID09PSBudWxsIHx8IG5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignTm9kZSBjYW5ub3QgYmUgbnVsbCBvciB1bmRlZmluZWQnKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGRvbTogbm9kZVxuICB9O1xufTtcblxuY29uc3QgZnJvbVBvaW50ID0gKGRvY0VsbTogU3VnYXJFbGVtZW50PERvY3VtZW50PiwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBPcHRpb25hbDxTdWdhckVsZW1lbnQ8RWxlbWVudD4+ID0+XG4gIE9wdGlvbmFsLmZyb20oZG9jRWxtLmRvbS5lbGVtZW50RnJvbVBvaW50KHgsIHkpKS5tYXAoZnJvbURvbSk7XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YXJpYWJsZS1uYW1lXG5jb25zdCBTdWdhckVsZW1lbnQgPSB7XG4gIGZyb21IdG1sLFxuICBmcm9tVGFnLFxuICBmcm9tVGV4dCxcbiAgZnJvbURvbSxcbiAgZnJvbVBvaW50XG59O1xuXG5leHBvcnQge1xuICBTdWdhckVsZW1lbnRcbn07XG4iLCJpbXBvcnQgeyBTYW5kSFRNTEVsZW1lbnQgfSBmcm9tICdAZXBob3gvc2FuZCc7XG5cbmltcG9ydCB0eXBlIHsgSFRNTEVsZW1lbnRGdWxsVGFnTmFtZU1hcCB9IGZyb20gJy4uLy4uL2FsaWVuL0RvbVR5cGVzJztcblxuaW1wb3J0ICogYXMgTm9kZVR5cGVzIGZyb20gJy4vTm9kZVR5cGVzJztcbmltcG9ydCB0eXBlIHsgU3VnYXJFbGVtZW50IH0gZnJvbSAnLi9TdWdhckVsZW1lbnQnO1xuXG5jb25zdCBuYW1lID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPik6IHN0cmluZyA9PiB7XG4gIGNvbnN0IHIgPSBlbGVtZW50LmRvbS5ub2RlTmFtZTtcbiAgcmV0dXJuIHIudG9Mb3dlckNhc2UoKTtcbn07XG5cbmNvbnN0IHR5cGUgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KTogbnVtYmVyID0+XG4gIGVsZW1lbnQuZG9tLm5vZGVUeXBlO1xuXG5jb25zdCB2YWx1ZSA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBzdHJpbmcgfCBudWxsID0+XG4gIGVsZW1lbnQuZG9tLm5vZGVWYWx1ZTtcblxuY29uc3QgaXNUeXBlID0gPEUgZXh0ZW5kcyBOb2RlPiAodDogbnVtYmVyKSA9PiAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KTogZWxlbWVudCBpcyBTdWdhckVsZW1lbnQ8RT4gPT5cbiAgdHlwZShlbGVtZW50KSA9PT0gdDtcblxuY29uc3QgaXNDb21tZW50ID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPik6IGVsZW1lbnQgaXMgU3VnYXJFbGVtZW50PENvbW1lbnQ+ID0+XG4gIHR5cGUoZWxlbWVudCkgPT09IE5vZGVUeXBlcy5DT01NRU5UIHx8IG5hbWUoZWxlbWVudCkgPT09ICcjY29tbWVudCc7XG5cbmNvbnN0IGlzSFRNTEVsZW1lbnQgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KTogZWxlbWVudCBpcyBTdWdhckVsZW1lbnQ8SFRNTEVsZW1lbnQ+ID0+XG4gIGlzRWxlbWVudChlbGVtZW50KSAmJiBTYW5kSFRNTEVsZW1lbnQuaXNQcm90b3R5cGVPZihlbGVtZW50LmRvbSk7XG5cbmNvbnN0IGlzRWxlbWVudCA9IGlzVHlwZTxFbGVtZW50PihOb2RlVHlwZXMuRUxFTUVOVCk7XG5jb25zdCBpc1RleHQgPSBpc1R5cGU8VGV4dD4oTm9kZVR5cGVzLlRFWFQpO1xuY29uc3QgaXNEb2N1bWVudCA9IGlzVHlwZTxEb2N1bWVudD4oTm9kZVR5cGVzLkRPQ1VNRU5UKTtcbmNvbnN0IGlzRG9jdW1lbnRGcmFnbWVudCA9IGlzVHlwZTxEb2N1bWVudEZyYWdtZW50PihOb2RlVHlwZXMuRE9DVU1FTlRfRlJBR01FTlQpO1xuXG5jb25zdCBpc1RhZyA9IDxLIGV4dGVuZHMga2V5b2YgSFRNTEVsZW1lbnRGdWxsVGFnTmFtZU1hcD4odGFnOiBLKSA9PiAoZTogU3VnYXJFbGVtZW50PE5vZGU+KTogZSBpcyBTdWdhckVsZW1lbnQ8SFRNTEVsZW1lbnRGdWxsVGFnTmFtZU1hcFtLXT4gPT5cbiAgaXNFbGVtZW50KGUpICYmIG5hbWUoZSkgPT09IHRhZztcblxuZXhwb3J0IHtcbiAgbmFtZSxcbiAgdHlwZSxcbiAgdmFsdWUsXG4gIGlzRWxlbWVudCxcbiAgaXNIVE1MRWxlbWVudCxcbiAgaXNUZXh0LFxuICBpc0RvY3VtZW50LFxuICBpc0RvY3VtZW50RnJhZ21lbnQsXG4gIGlzQ29tbWVudCxcbiAgaXNUYWdcbn07XG4iLCJpbXBvcnQgeyBBcnIsIE9iaiwgT3B0aW9uYWwsIFR5cGUgfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5pbXBvcnQgdHlwZSB7IFN1Z2FyRWxlbWVudCB9IGZyb20gJy4uL25vZGUvU3VnYXJFbGVtZW50JztcbmltcG9ydCAqIGFzIFN1Z2FyTm9kZSBmcm9tICcuLi9ub2RlL1N1Z2FyTm9kZSc7XG5cbmNvbnN0IHJhd1NldCA9IChkb206IEVsZW1lbnQsIGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIHwgYm9vbGVhbiB8IG51bWJlcik6IHZvaWQgPT4ge1xuICAvKlxuICAgKiBKUXVlcnkgY29lcmNlZCBldmVyeXRoaW5nIHRvIGEgc3RyaW5nLCBhbmQgc2lsZW50bHkgZGlkIG5vdGhpbmcgb24gdGV4dCBub2RlL251bGwvdW5kZWZpbmVkLlxuICAgKlxuICAgKiBXZSBmYWlsIG9uIHRob3NlIGludmFsaWQgY2FzZXMsIG9ubHkgYWxsb3dpbmcgbnVtYmVycyBhbmQgYm9vbGVhbnMuXG4gICAqL1xuICBpZiAoVHlwZS5pc1N0cmluZyh2YWx1ZSkgfHwgVHlwZS5pc0Jvb2xlYW4odmFsdWUpIHx8IFR5cGUuaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgZG9tLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlICsgJycpO1xuICB9IGVsc2Uge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5lcnJvcignSW52YWxpZCBjYWxsIHRvIEF0dHJpYnV0ZS5zZXQuIEtleSAnLCBrZXksICc6OiBWYWx1ZSAnLCB2YWx1ZSwgJzo6IEVsZW1lbnQgJywgZG9tKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0F0dHJpYnV0ZSB2YWx1ZSB3YXMgbm90IHNpbXBsZScpO1xuICB9XG59O1xuXG5jb25zdCBzZXQgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PEVsZW1lbnQ+LCBrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyB8IGJvb2xlYW4gfCBudW1iZXIpOiB2b2lkID0+IHtcbiAgcmF3U2V0KGVsZW1lbnQuZG9tLCBrZXksIHZhbHVlKTtcbn07XG5cbmNvbnN0IHNldEFsbCA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8RWxlbWVudD4sIGF0dHJzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBib29sZWFuIHwgbnVtYmVyPik6IHZvaWQgPT4ge1xuICBjb25zdCBkb20gPSBlbGVtZW50LmRvbTtcbiAgT2JqLmVhY2goYXR0cnMsICh2LCBrKSA9PiB7XG4gICAgcmF3U2V0KGRvbSwgaywgdik7XG4gIH0pO1xufTtcblxuY29uc3Qgc2V0T3B0aW9ucyA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8RWxlbWVudD4sIGF0dHJzOiBSZWNvcmQ8c3RyaW5nLCBPcHRpb25hbDxzdHJpbmcgfCBib29sZWFuIHwgbnVtYmVyPj4pOiB2b2lkID0+IHtcbiAgT2JqLmVhY2goYXR0cnMsICh2LCBrKSA9PiB7XG4gICAgdi5mb2xkKCgpID0+IHtcbiAgICAgIHJlbW92ZShlbGVtZW50LCBrKTtcbiAgICB9LCAodmFsdWUpID0+IHtcbiAgICAgIHJhd1NldChlbGVtZW50LmRvbSwgaywgdmFsdWUpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IGdldCA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8RWxlbWVudD4sIGtleTogc3RyaW5nKTogdW5kZWZpbmVkIHwgc3RyaW5nID0+IHtcbiAgY29uc3QgdiA9IGVsZW1lbnQuZG9tLmdldEF0dHJpYnV0ZShrZXkpO1xuXG4gIC8vIHVuZGVmaW5lZCBpcyB0aGUgbW9yZSBhcHByb3ByaWF0ZSB2YWx1ZSBmb3IgSlMsIGFuZCB0aGlzIG1hdGNoZXMgSlF1ZXJ5XG4gIHJldHVybiB2ID09PSBudWxsID8gdW5kZWZpbmVkIDogdjtcbn07XG5cbmNvbnN0IGdldE9wdCA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8RWxlbWVudD4sIGtleTogc3RyaW5nKTogT3B0aW9uYWw8c3RyaW5nPiA9PlxuICBPcHRpb25hbC5mcm9tKGdldChlbGVtZW50LCBrZXkpKTtcblxuY29uc3QgaGFzID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPiwga2V5OiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgY29uc3QgZG9tID0gZWxlbWVudC5kb207XG5cbiAgLy8gcmV0dXJuIGZhbHNlIGZvciBub24tZWxlbWVudCBub2Rlcywgbm8gcG9pbnQgaW4gdGhyb3dpbmcgYW4gZXJyb3JcbiAgcmV0dXJuIGRvbSAmJiAoZG9tIGFzIEVsZW1lbnQpLmhhc0F0dHJpYnV0ZSA/IChkb20gYXMgRWxlbWVudCkuaGFzQXR0cmlidXRlKGtleSkgOiBmYWxzZTtcbn07XG5cbmNvbnN0IHJlbW92ZSA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8RWxlbWVudD4sIGtleTogc3RyaW5nKTogdm9pZCA9PiB7XG4gIGVsZW1lbnQuZG9tLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xufTtcblxuY29uc3QgaGFzTm9uZSA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBib29sZWFuID0+IHtcbiAgY29uc3QgYXR0cnMgPSAoZWxlbWVudC5kb20gYXMgRWxlbWVudCkuYXR0cmlidXRlcztcbiAgcmV0dXJuIGF0dHJzID09PSB1bmRlZmluZWQgfHwgYXR0cnMgPT09IG51bGwgfHwgYXR0cnMubGVuZ3RoID09PSAwO1xufTtcblxuY29uc3QgY2xvbmUgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PEVsZW1lbnQ+KTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9PlxuICBBcnIuZm9sZGwoZWxlbWVudC5kb20uYXR0cmlidXRlcywgKGFjYywgYXR0cikgPT4ge1xuICAgIGFjY1thdHRyLm5hbWVdID0gYXR0ci52YWx1ZTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KTtcblxuY29uc3QgdHJhbnNmZXJPbmUgPSAoc291cmNlOiBTdWdhckVsZW1lbnQ8RWxlbWVudD4sIGRlc3RpbmF0aW9uOiBTdWdhckVsZW1lbnQ8RWxlbWVudD4sIGF0dHI6IHN0cmluZyk6IHZvaWQgPT4ge1xuICAvLyBOT1RFOiBXZSBkb24ndCB3YW50IHRvIGNsb2JiZXIgYW55IGV4aXN0aW5nIGF0dHJpYnV0ZXNcbiAgaWYgKCFoYXMoZGVzdGluYXRpb24sIGF0dHIpKSB7XG4gICAgZ2V0T3B0KHNvdXJjZSwgYXR0cikuZWFjaCgoc3JjVmFsdWUpID0+IHNldChkZXN0aW5hdGlvbiwgYXR0ciwgc3JjVmFsdWUpKTtcbiAgfVxufTtcblxuLy8gVHJhbnNmZXIgYXR0cmlidXRlcyhhdHRycykgZnJvbSBzb3VyY2UgdG8gZGVzdGluYXRpb24sIHVubGVzcyB0aGV5IGFyZSBhbHJlYWR5IHByZXNlbnRcbmNvbnN0IHRyYW5zZmVyID0gKHNvdXJjZTogU3VnYXJFbGVtZW50PEVsZW1lbnQ+LCBkZXN0aW5hdGlvbjogU3VnYXJFbGVtZW50PEVsZW1lbnQ+LCBhdHRyczogc3RyaW5nW10pOiB2b2lkID0+IHtcbiAgaWYgKCFTdWdhck5vZGUuaXNFbGVtZW50KHNvdXJjZSkgfHwgIVN1Z2FyTm9kZS5pc0VsZW1lbnQoZGVzdGluYXRpb24pKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIEFyci5lYWNoKGF0dHJzLCAoYXR0cikgPT4ge1xuICAgIHRyYW5zZmVyT25lKHNvdXJjZSwgZGVzdGluYXRpb24sIGF0dHIpO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IGNsb25lLCBzZXQsIHNldEFsbCwgc2V0T3B0aW9ucywgZ2V0LCBnZXRPcHQsIGhhcywgcmVtb3ZlLCBoYXNOb25lLCB0cmFuc2ZlciB9O1xuIiwiaW1wb3J0IFBsdWdpbk1hbmFnZXIgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9QbHVnaW5NYW5hZ2VyJztcblxuaW1wb3J0ICogYXMgQ29tbWFuZHMgZnJvbSAnLi9hcGkvQ29tbWFuZHMnO1xuaW1wb3J0ICogYXMgT3B0aW9ucyBmcm9tICcuL2FwaS9PcHRpb25zJztcbmltcG9ydCAqIGFzIEZpbHRlckNvbnRlbnQgZnJvbSAnLi9jb3JlL0ZpbHRlckNvbnRlbnQnO1xuaW1wb3J0ICogYXMgQnV0dG9ucyBmcm9tICcuL3VpL0J1dHRvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCAoKTogdm9pZCA9PiB7XG4gIFBsdWdpbk1hbmFnZXIuYWRkKCdpbWFnZScsIChlZGl0b3IpID0+IHtcbiAgICBPcHRpb25zLnJlZ2lzdGVyKGVkaXRvcik7XG4gICAgRmlsdGVyQ29udGVudC5zZXR1cChlZGl0b3IpO1xuICAgIEJ1dHRvbnMucmVnaXN0ZXIoZWRpdG9yKTtcbiAgICBDb21tYW5kcy5yZWdpc3RlcihlZGl0b3IpO1xuICB9KTtcbn07XG4iLCJpbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuXG5pbXBvcnQgdHlwZSB7IEltYWdlRGF0YSB9IGZyb20gJy4uL2NvcmUvSW1hZ2VEYXRhJztcbmltcG9ydCB7IGluc2VydE9yVXBkYXRlSW1hZ2UgfSBmcm9tICcuLi9jb3JlL0ltYWdlU2VsZWN0aW9uJztcbmltcG9ydCB7IERpYWxvZyB9IGZyb20gJy4uL3VpL0RpYWxvZyc7XG5cbmNvbnN0IHJlZ2lzdGVyID0gKGVkaXRvcjogRWRpdG9yKTogdm9pZCA9PiB7XG4gIGVkaXRvci5hZGRDb21tYW5kKCdtY2VJbWFnZScsIERpYWxvZyhlZGl0b3IpLm9wZW4pO1xuXG4gIC8vIFRPRE86IFRoaXMgY29tbWFuZCBpcyBsaWtlbHkgdG8gYmUgc2hvcnQgbGl2ZWQgd2Ugb25seSBuZWVkIGl0IHVudGlsIHdlIGV4cG9zZSB0aGUgcnRjIG1vZGVsIHRob3VnaCBhIG5ldyBhcGkgc28gaXQgc2hvdWxkbid0IGJlIGRvY3VtZW50ZWRcbiAgLy8gaXQncyBqdXN0IGEgY29tbWFuZCBzaW5jZSB0aGF0IGlzIGEgY29udmVuaWVudCBtZXRob2QgZm9yIHRoZSBydGMgcGx1Z2luIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IGRvbSBtdXRhdGlvbiBiZWhhdmlvdXJcbiAgZWRpdG9yLmFkZENvbW1hbmQoJ21jZVVwZGF0ZUltYWdlJywgKF91aSwgZGF0YTogUGFydGlhbDxJbWFnZURhdGE+KSA9PiB7XG4gICAgZWRpdG9yLnVuZG9NYW5hZ2VyLnRyYW5zYWN0KCgpID0+IGluc2VydE9yVXBkYXRlSW1hZ2UoZWRpdG9yLCBkYXRhKSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHtcbiAgcmVnaXN0ZXJcbn07XG4iLCJpbXBvcnQgeyBTdHJpbmdzLCBUeXBlIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0IHR5cGUgRWRpdG9yIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvRWRpdG9yJztcbmltcG9ydCB0eXBlIHsgRWRpdG9yT3B0aW9ucyB9IGZyb20gJ3RpbnltY2UvY29yZS9hcGkvT3B0aW9uVHlwZXMnO1xuXG5pbXBvcnQgdHlwZSB7IFVzZXJMaXN0SXRlbSB9IGZyb20gJy4uL3VpL0RpYWxvZ1R5cGVzJztcblxudHlwZSBVc2VySW1hZ2VMaXN0Q2FsbGJhY2sgPSAoY2FsbGJhY2s6IChpbWFnZUxpc3Q6IFVzZXJMaXN0SXRlbVtdKSA9PiB2b2lkKSA9PiB2b2lkO1xuXG5jb25zdCBvcHRpb246IHtcbiAgPEsgZXh0ZW5kcyBrZXlvZiBFZGl0b3JPcHRpb25zPihuYW1lOiBLKTogKGVkaXRvcjogRWRpdG9yKSA9PiBFZGl0b3JPcHRpb25zW0tdO1xuICA8VD4obmFtZTogc3RyaW5nKTogKGVkaXRvcjogRWRpdG9yKSA9PiBUO1xufSA9IChuYW1lOiBzdHJpbmcpID0+IChlZGl0b3I6IEVkaXRvcikgPT5cbiAgZWRpdG9yLm9wdGlvbnMuZ2V0KG5hbWUpO1xuXG5jb25zdCByZWdpc3RlciA9IChlZGl0b3I6IEVkaXRvcik6IHZvaWQgPT4ge1xuICBjb25zdCByZWdpc3Rlck9wdGlvbiA9IGVkaXRvci5vcHRpb25zLnJlZ2lzdGVyO1xuXG4gIHJlZ2lzdGVyT3B0aW9uKCdpbWFnZV9kaW1lbnNpb25zJywge1xuICAgIHByb2Nlc3NvcjogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IHRydWVcbiAgfSk7XG5cbiAgcmVnaXN0ZXJPcHRpb24oJ2ltYWdlX2FkdnRhYicsIHtcbiAgICBwcm9jZXNzb3I6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0OiBmYWxzZVxuICB9KTtcblxuICByZWdpc3Rlck9wdGlvbignaW1hZ2VfdXBsb2FkdGFiJywge1xuICAgIHByb2Nlc3NvcjogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IHRydWVcbiAgfSk7XG5cbiAgcmVnaXN0ZXJPcHRpb24oJ2ltYWdlX3ByZXBlbmRfdXJsJywge1xuICAgIHByb2Nlc3NvcjogJ3N0cmluZycsXG4gICAgZGVmYXVsdDogJydcbiAgfSk7XG5cbiAgcmVnaXN0ZXJPcHRpb24oJ2ltYWdlX2NsYXNzX2xpc3QnLCB7XG4gICAgcHJvY2Vzc29yOiAnb2JqZWN0W10nXG4gIH0pO1xuXG4gIHJlZ2lzdGVyT3B0aW9uKCdpbWFnZV9kZXNjcmlwdGlvbicsIHtcbiAgICBwcm9jZXNzb3I6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0OiB0cnVlXG4gIH0pO1xuXG4gIHJlZ2lzdGVyT3B0aW9uKCdpbWFnZV90aXRsZScsIHtcbiAgICBwcm9jZXNzb3I6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0OiBmYWxzZVxuICB9KTtcblxuICByZWdpc3Rlck9wdGlvbignaW1hZ2VfY2FwdGlvbicsIHtcbiAgICBwcm9jZXNzb3I6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0OiBmYWxzZVxuICB9KTtcblxuICByZWdpc3Rlck9wdGlvbignaW1hZ2VfbGlzdCcsIHtcbiAgICBwcm9jZXNzb3I6ICh2YWx1ZSkgPT4ge1xuICAgICAgY29uc3QgdmFsaWQgPSB2YWx1ZSA9PT0gZmFsc2UgfHwgVHlwZS5pc1N0cmluZyh2YWx1ZSkgfHwgVHlwZS5pc0FycmF5T2YodmFsdWUsIFR5cGUuaXNPYmplY3QpIHx8IFR5cGUuaXNGdW5jdGlvbih2YWx1ZSk7XG4gICAgICByZXR1cm4gdmFsaWQgPyB7IHZhbHVlLCB2YWxpZCB9IDogeyB2YWxpZDogZmFsc2UsIG1lc3NhZ2U6ICdNdXN0IGJlIGZhbHNlLCBhIHN0cmluZywgYW4gYXJyYXkgb3IgYSBmdW5jdGlvbi4nIH07XG4gICAgfSxcbiAgICBkZWZhdWx0OiBmYWxzZVxuICB9KTtcbn07XG5cbmNvbnN0IGhhc0RpbWVuc2lvbnMgPSBvcHRpb248Ym9vbGVhbj4oJ2ltYWdlX2RpbWVuc2lvbnMnKTtcbmNvbnN0IGhhc0FkdlRhYiA9IG9wdGlvbjxib29sZWFuPignaW1hZ2VfYWR2dGFiJyk7XG5jb25zdCBoYXNVcGxvYWRUYWIgPSBvcHRpb248Ym9vbGVhbj4oJ2ltYWdlX3VwbG9hZHRhYicpO1xuY29uc3QgZ2V0UHJlcGVuZFVybCA9IG9wdGlvbjxzdHJpbmc+KCdpbWFnZV9wcmVwZW5kX3VybCcpO1xuY29uc3QgZ2V0Q2xhc3NMaXN0ID0gb3B0aW9uPFVzZXJMaXN0SXRlbVtdIHwgdW5kZWZpbmVkPignaW1hZ2VfY2xhc3NfbGlzdCcpO1xuY29uc3QgaGFzRGVzY3JpcHRpb24gPSBvcHRpb248Ym9vbGVhbj4oJ2ltYWdlX2Rlc2NyaXB0aW9uJyk7XG5jb25zdCBoYXNJbWFnZVRpdGxlID0gb3B0aW9uPGJvb2xlYW4+KCdpbWFnZV90aXRsZScpO1xuY29uc3QgaGFzSW1hZ2VDYXB0aW9uID0gb3B0aW9uPGJvb2xlYW4+KCdpbWFnZV9jYXB0aW9uJyk7XG5jb25zdCBnZXRJbWFnZUxpc3QgPSBvcHRpb248c3RyaW5nIHwgVXNlckxpc3RJdGVtW10gfCBVc2VySW1hZ2VMaXN0Q2FsbGJhY2sgfCBmYWxzZT4oJ2ltYWdlX2xpc3QnKTtcbmNvbnN0IHNob3dBY2Nlc3NpYmlsaXR5T3B0aW9ucyA9IG9wdGlvbignYTExeV9hZHZhbmNlZF9vcHRpb25zJyk7XG5jb25zdCBpc0F1dG9tYXRpY1VwbG9hZHNFbmFibGVkID0gb3B0aW9uKCdhdXRvbWF0aWNfdXBsb2FkcycpO1xuXG5jb25zdCBoYXNVcGxvYWRVcmwgPSAoZWRpdG9yOiBFZGl0b3IpOiBib29sZWFuID0+XG4gIFN0cmluZ3MuaXNOb3RFbXB0eShlZGl0b3Iub3B0aW9ucy5nZXQoJ2ltYWdlc191cGxvYWRfdXJsJykpO1xuXG5jb25zdCBoYXNVcGxvYWRIYW5kbGVyID0gKGVkaXRvcjogRWRpdG9yKTogYm9vbGVhbiA9PlxuICBUeXBlLmlzTm9uTnVsbGFibGUoZWRpdG9yLm9wdGlvbnMuZ2V0KCdpbWFnZXNfdXBsb2FkX2hhbmRsZXInKSk7XG5cbmV4cG9ydCB7XG4gIHJlZ2lzdGVyLFxuICBoYXNEaW1lbnNpb25zLFxuICBoYXNVcGxvYWRUYWIsXG4gIGhhc0FkdlRhYixcbiAgZ2V0UHJlcGVuZFVybCxcbiAgZ2V0Q2xhc3NMaXN0LFxuICBoYXNEZXNjcmlwdGlvbixcbiAgaGFzSW1hZ2VUaXRsZSxcbiAgaGFzSW1hZ2VDYXB0aW9uLFxuICBnZXRJbWFnZUxpc3QsXG4gIGhhc1VwbG9hZFVybCxcbiAgaGFzVXBsb2FkSGFuZGxlcixcbiAgc2hvd0FjY2Vzc2liaWxpdHlPcHRpb25zLFxuICBpc0F1dG9tYXRpY1VwbG9hZHNFbmFibGVkXG59O1xuIiwiaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmltcG9ydCB0eXBlIEVkaXRvciBmcm9tICd0aW55bWNlL2NvcmUvYXBpL0VkaXRvcic7XG5pbXBvcnQgdHlwZSBBc3ROb2RlIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvaHRtbC9Ob2RlJztcbmltcG9ydCBUb29scyBmcm9tICd0aW55bWNlL2NvcmUvYXBpL3V0aWwvVG9vbHMnO1xuXG5jb25zdCBoYXNJbWFnZUNsYXNzID0gKG5vZGU6IEFzdE5vZGUpOiBib29sZWFuID0+IHtcbiAgY29uc3QgY2xhc3NOYW1lID0gbm9kZS5hdHRyKCdjbGFzcycpO1xuICByZXR1cm4gVHlwZS5pc05vbk51bGxhYmxlKGNsYXNzTmFtZSkgJiYgL1xcYmltYWdlXFxiLy50ZXN0KGNsYXNzTmFtZSk7XG59O1xuXG5jb25zdCB0b2dnbGVDb250ZW50RWRpdGFibGVTdGF0ZSA9IChzdGF0ZTogYm9vbGVhbikgPT4gKG5vZGVzOiBBc3ROb2RlW10pOiB2b2lkID0+IHtcbiAgbGV0IGkgPSBub2Rlcy5sZW5ndGg7XG5cbiAgY29uc3QgdG9nZ2xlQ29udGVudEVkaXRhYmxlID0gKG5vZGU6IEFzdE5vZGUpID0+IHtcbiAgICBub2RlLmF0dHIoJ2NvbnRlbnRlZGl0YWJsZScsIHN0YXRlID8gJ3RydWUnIDogbnVsbCk7XG4gIH07XG5cbiAgd2hpbGUgKGktLSkge1xuICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tpXTtcblxuICAgIGlmIChoYXNJbWFnZUNsYXNzKG5vZGUpKSB7XG4gICAgICBub2RlLmF0dHIoJ2NvbnRlbnRlZGl0YWJsZScsIHN0YXRlID8gJ2ZhbHNlJyA6IG51bGwpO1xuICAgICAgVG9vbHMuZWFjaChub2RlLmdldEFsbCgnZmlnY2FwdGlvbicpLCB0b2dnbGVDb250ZW50RWRpdGFibGUpO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3Qgc2V0dXAgPSAoZWRpdG9yOiBFZGl0b3IpOiB2b2lkID0+IHtcbiAgZWRpdG9yLm9uKCdQcmVJbml0JywgKCkgPT4ge1xuICAgIGVkaXRvci5wYXJzZXIuYWRkTm9kZUZpbHRlcignZmlndXJlJywgdG9nZ2xlQ29udGVudEVkaXRhYmxlU3RhdGUodHJ1ZSkpO1xuICAgIGVkaXRvci5zZXJpYWxpemVyLmFkZE5vZGVGaWx0ZXIoJ2ZpZ3VyZScsIHRvZ2dsZUNvbnRlbnRFZGl0YWJsZVN0YXRlKGZhbHNlKSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHtcbiAgc2V0dXBcbn07XG4iLCJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcbmltcG9ydCB7IEF0dHJpYnV0ZSwgU3VnYXJFbGVtZW50IH0gZnJvbSAnQGVwaG94L3N1Z2FyJztcblxuaW1wb3J0IERPTVV0aWxzIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvZG9tL0RPTVV0aWxzJztcblxuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnLi9VdGlscyc7XG5cbmNvbnN0IERPTSA9IERPTVV0aWxzLkRPTTtcblxuaW50ZXJmYWNlIEltYWdlRGF0YSB7XG4gIHJlYWRvbmx5IHNyYzogc3RyaW5nO1xuICByZWFkb25seSBhbHQ6IHN0cmluZyB8IG51bGw7XG4gIHJlYWRvbmx5IHRpdGxlOiBzdHJpbmc7XG4gIHJlYWRvbmx5IHdpZHRoOiBzdHJpbmc7XG4gIHJlYWRvbmx5IGhlaWdodDogc3RyaW5nO1xuICByZWFkb25seSBjbGFzczogc3RyaW5nO1xuICByZWFkb25seSBzdHlsZTogc3RyaW5nO1xuICByZWFkb25seSBjYXB0aW9uOiBib29sZWFuO1xuICByZWFkb25seSBoc3BhY2U6IHN0cmluZztcbiAgcmVhZG9ubHkgdnNwYWNlOiBzdHJpbmc7XG4gIHJlYWRvbmx5IGJvcmRlcjogc3RyaW5nO1xuICByZWFkb25seSBib3JkZXJTdHlsZTogc3RyaW5nO1xuICByZWFkb25seSBpc0RlY29yYXRpdmU6IGJvb2xlYW47XG59XG5cbnR5cGUgQ3NzTm9ybWFsaXplciA9IChjc3M6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4gc3RyaW5nO1xudHlwZSBVcGRhdGVJbWFnZVByb3AgPSA8VCBleHRlbmRzIHN0cmluZz4oaW1hZ2U6IEhUTUxFbGVtZW50LCBuYW1lOiBULCB2YWx1ZTogc3RyaW5nKSA9PiB2b2lkO1xuXG5jb25zdCBnZXRIc3BhY2UgPSAoaW1hZ2U6IEhUTUxFbGVtZW50KTogc3RyaW5nID0+IHtcbiAgaWYgKGltYWdlLnN0eWxlLm1hcmdpbkxlZnQgJiYgaW1hZ2Uuc3R5bGUubWFyZ2luUmlnaHQgJiYgaW1hZ2Uuc3R5bGUubWFyZ2luTGVmdCA9PT0gaW1hZ2Uuc3R5bGUubWFyZ2luUmlnaHQpIHtcbiAgICByZXR1cm4gVXRpbHMucmVtb3ZlUGl4ZWxTdWZmaXgoaW1hZ2Uuc3R5bGUubWFyZ2luTGVmdCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG59O1xuXG5jb25zdCBnZXRWc3BhY2UgPSAoaW1hZ2U6IEhUTUxFbGVtZW50KTogc3RyaW5nID0+IHtcbiAgaWYgKGltYWdlLnN0eWxlLm1hcmdpblRvcCAmJiBpbWFnZS5zdHlsZS5tYXJnaW5Cb3R0b20gJiYgaW1hZ2Uuc3R5bGUubWFyZ2luVG9wID09PSBpbWFnZS5zdHlsZS5tYXJnaW5Cb3R0b20pIHtcbiAgICByZXR1cm4gVXRpbHMucmVtb3ZlUGl4ZWxTdWZmaXgoaW1hZ2Uuc3R5bGUubWFyZ2luVG9wKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbn07XG5cbmNvbnN0IGdldEJvcmRlciA9IChpbWFnZTogSFRNTEVsZW1lbnQpOiBzdHJpbmcgPT4ge1xuICBpZiAoaW1hZ2Uuc3R5bGUuYm9yZGVyV2lkdGgpIHtcbiAgICByZXR1cm4gVXRpbHMucmVtb3ZlUGl4ZWxTdWZmaXgoaW1hZ2Uuc3R5bGUuYm9yZGVyV2lkdGgpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJztcbiAgfVxufTtcblxuY29uc3QgZ2V0QXR0cmliID0gKGltYWdlOiBIVE1MRWxlbWVudCwgbmFtZTogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgaWYgKGltYWdlLmhhc0F0dHJpYnV0ZShuYW1lKSkge1xuICAgIHJldHVybiBpbWFnZS5nZXRBdHRyaWJ1dGUobmFtZSkgPz8gJyc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG59O1xuXG5jb25zdCBoYXNDYXB0aW9uID0gKGltYWdlOiBIVE1MRWxlbWVudCk6IGJvb2xlYW4gPT5cbiAgaW1hZ2UucGFyZW50Tm9kZSAhPT0gbnVsbCAmJiBpbWFnZS5wYXJlbnROb2RlLm5vZGVOYW1lID09PSAnRklHVVJFJztcblxuY29uc3QgdXBkYXRlQXR0cmliID0gKGltYWdlOiBIVE1MRWxlbWVudCwgbmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIHwgbnVsbCk6IHZvaWQgPT4ge1xuICBpZiAodmFsdWUgPT09ICcnIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgaW1hZ2UucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICB9IGVsc2Uge1xuICAgIGltYWdlLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gIH1cbn07XG5cbmNvbnN0IHdyYXBJbkZpZ3VyZSA9IChpbWFnZTogSFRNTEVsZW1lbnQpOiB2b2lkID0+IHtcbiAgY29uc3QgZmlndXJlRWxtID0gRE9NLmNyZWF0ZSgnZmlndXJlJywgeyBjbGFzczogJ2ltYWdlJyB9KTtcbiAgRE9NLmluc2VydEFmdGVyKGZpZ3VyZUVsbSwgaW1hZ2UpO1xuXG4gIGZpZ3VyZUVsbS5hcHBlbmRDaGlsZChpbWFnZSk7XG4gIGZpZ3VyZUVsbS5hcHBlbmRDaGlsZChET00uY3JlYXRlKCdmaWdjYXB0aW9uJywgeyBjb250ZW50RWRpdGFibGU6ICd0cnVlJyB9LCAnQ2FwdGlvbicpKTtcbiAgZmlndXJlRWxtLmNvbnRlbnRFZGl0YWJsZSA9ICdmYWxzZSc7XG59O1xuXG5jb25zdCByZW1vdmVGaWd1cmUgPSAoaW1hZ2U6IEhUTUxFbGVtZW50KTogdm9pZCA9PiB7XG4gIGNvbnN0IGZpZ3VyZUVsbSA9IGltYWdlLnBhcmVudE5vZGU7XG4gIGlmIChUeXBlLmlzTm9uTnVsbGFibGUoZmlndXJlRWxtKSkge1xuICAgIERPTS5pbnNlcnRBZnRlcihpbWFnZSwgZmlndXJlRWxtKTtcbiAgICBET00ucmVtb3ZlKGZpZ3VyZUVsbSk7XG4gIH1cbn07XG5cbmNvbnN0IHRvZ2dsZUNhcHRpb24gPSAoaW1hZ2U6IEhUTUxFbGVtZW50KTogdm9pZCA9PiB7XG4gIGlmIChoYXNDYXB0aW9uKGltYWdlKSkge1xuICAgIHJlbW92ZUZpZ3VyZShpbWFnZSk7XG4gIH0gZWxzZSB7XG4gICAgd3JhcEluRmlndXJlKGltYWdlKTtcbiAgfVxufTtcblxuY29uc3Qgbm9ybWFsaXplU3R5bGUgPSAoaW1hZ2U6IEhUTUxFbGVtZW50LCBub3JtYWxpemVDc3M6IENzc05vcm1hbGl6ZXIpOiB2b2lkID0+IHtcbiAgY29uc3QgYXR0clZhbHVlID0gaW1hZ2UuZ2V0QXR0cmlidXRlKCdzdHlsZScpO1xuICBjb25zdCB2YWx1ZSA9IG5vcm1hbGl6ZUNzcyhhdHRyVmFsdWUgIT09IG51bGwgPyBhdHRyVmFsdWUgOiAnJyk7XG5cbiAgaWYgKHZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgdmFsdWUpO1xuICAgIGltYWdlLnNldEF0dHJpYnV0ZSgnZGF0YS1tY2Utc3R5bGUnLCB2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgaW1hZ2UucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICB9XG59O1xuXG5jb25zdCBzZXRTaXplID0gKG5hbWU6IHN0cmluZywgbm9ybWFsaXplQ3NzOiBDc3NOb3JtYWxpemVyKSA9PiAoaW1hZ2U6IEhUTUxFbGVtZW50LCBuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gaW1hZ2Uuc3R5bGUgYXMgYW55O1xuICBpZiAoc3R5bGVzW25hbWVdKSB7XG4gICAgc3R5bGVzW25hbWVdID0gVXRpbHMuYWRkUGl4ZWxTdWZmaXgodmFsdWUpO1xuICAgIG5vcm1hbGl6ZVN0eWxlKGltYWdlLCBub3JtYWxpemVDc3MpO1xuICB9IGVsc2Uge1xuICAgIHVwZGF0ZUF0dHJpYihpbWFnZSwgbmFtZSwgdmFsdWUpO1xuICB9XG59O1xuXG5jb25zdCBnZXRTaXplID0gKGltYWdlOiBIVE1MRWxlbWVudCwgbmFtZTogJ2hlaWdodCcgfCAnd2lkdGgnKTogc3RyaW5nID0+IHtcbiAgaWYgKGltYWdlLnN0eWxlW25hbWVdKSB7XG4gICAgcmV0dXJuIFV0aWxzLnJlbW92ZVBpeGVsU3VmZml4KGltYWdlLnN0eWxlW25hbWVdKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZ2V0QXR0cmliKGltYWdlLCBuYW1lKTtcbiAgfVxufTtcblxuY29uc3Qgc2V0SHNwYWNlID0gKGltYWdlOiBIVE1MRWxlbWVudCwgdmFsdWU6IHN0cmluZyk6IHZvaWQgPT4ge1xuICBjb25zdCBweFZhbHVlID0gVXRpbHMuYWRkUGl4ZWxTdWZmaXgodmFsdWUpO1xuICBpbWFnZS5zdHlsZS5tYXJnaW5MZWZ0ID0gcHhWYWx1ZTtcbiAgaW1hZ2Uuc3R5bGUubWFyZ2luUmlnaHQgPSBweFZhbHVlO1xufTtcblxuY29uc3Qgc2V0VnNwYWNlID0gKGltYWdlOiBIVE1MRWxlbWVudCwgdmFsdWU6IHN0cmluZyk6IHZvaWQgPT4ge1xuICBjb25zdCBweFZhbHVlID0gVXRpbHMuYWRkUGl4ZWxTdWZmaXgodmFsdWUpO1xuICBpbWFnZS5zdHlsZS5tYXJnaW5Ub3AgPSBweFZhbHVlO1xuICBpbWFnZS5zdHlsZS5tYXJnaW5Cb3R0b20gPSBweFZhbHVlO1xufTtcblxuY29uc3Qgc2V0Qm9yZGVyID0gKGltYWdlOiBIVE1MRWxlbWVudCwgdmFsdWU6IHN0cmluZyk6IHZvaWQgPT4ge1xuICBjb25zdCBweFZhbHVlID0gVXRpbHMuYWRkUGl4ZWxTdWZmaXgodmFsdWUpO1xuICBpbWFnZS5zdHlsZS5ib3JkZXJXaWR0aCA9IHB4VmFsdWU7XG59O1xuXG5jb25zdCBzZXRCb3JkZXJTdHlsZSA9IChpbWFnZTogSFRNTEVsZW1lbnQsIHZhbHVlOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgaW1hZ2Uuc3R5bGUuYm9yZGVyU3R5bGUgPSB2YWx1ZTtcbn07XG5cbmNvbnN0IGdldEJvcmRlclN0eWxlID0gKGltYWdlOiBIVE1MRWxlbWVudCk6IHN0cmluZyA9PlxuICBpbWFnZS5zdHlsZS5ib3JkZXJTdHlsZSA/PyAnJztcblxuY29uc3QgaXNGaWd1cmUgPSAoZWxtOiBOb2RlIHwgbnVsbCk6IGVsbSBpcyBIVE1MRWxlbWVudCA9PlxuICBUeXBlLmlzTm9uTnVsbGFibGUoZWxtKSAmJiBlbG0ubm9kZU5hbWUgPT09ICdGSUdVUkUnO1xuXG5jb25zdCBpc0ltYWdlID0gKGVsbTogTm9kZSk6IGVsbSBpcyBIVE1MSW1hZ2VFbGVtZW50ID0+XG4gIGVsbS5ub2RlTmFtZSA9PT0gJ0lNRyc7XG5cbmNvbnN0IGdldElzRGVjb3JhdGl2ZSA9IChpbWFnZTogSFRNTEVsZW1lbnQpOiBib29sZWFuID0+IHtcbiAgY29uc3QgYWx0ID0gRE9NLmdldEF0dHJpYihpbWFnZSwgJ2FsdCcpO1xuICBjb25zdCByb2xlID0gRE9NLmdldEF0dHJpYihpbWFnZSwgJ3JvbGUnKTtcbiAgLy8gV0NBRyBUZWNobmlxdWUgSDY3OiBVc2luZyBudWxsIGFsdCB0ZXh0IGFuZCBubyB0aXRsZSBhdHRyaWJ1dGUgb24gaW1nIGVsZW1lbnRzIGZvciBpbWFnZXMgdGhhdCBBVCBzaG91bGQgaWdub3JlXG4gIC8vIFNvdXJjZTogaHR0cHM6Ly93d3cudzMub3JnL1RSL1dDQUcyMC1URUNIUy9INjcuaHRtbFxuICAvLyBLZXkgcG9pbnQ6IERlY29yYXRpdmUgaW1hZ2VzIHNob3VsZCBoYXZlIGFsdD1cIlwiIGFuZCBlaXRoZXIgbm8gdGl0bGUgb3IgZW1wdHkgdGl0bGUgKHRpdGxlPVwiXCIpXG4gIC8vIEFSSUEgMS4yIFNwZWNpZmljYXRpb246IERlZmluZXMgcm9sZT1cInByZXNlbnRhdGlvblwiIGFuZCByb2xlPVwibm9uZVwiIGFzIHN5bm9ueW1vdXMgcm9sZXNcbiAgLy8gU291cmNlOiBodHRwczovL3d3dy53My5vcmcvVFIvd2FpLWFyaWEtMS4yL1xuICAvLyBLZXkgcG9pbnQ6IFRoZXNlIHJvbGVzIHJlbW92ZSBzZW1hbnRpYyBtZWFuaW5nIGFuZCBwcm9oaWJpdCBhcmlhLWxhYmVsIGFuZCBhcmlhLWxhYmVsbGVkYnlcbiAgY29uc3QgaGFzQWx0ID0gaW1hZ2UuaGFzQXR0cmlidXRlKCdhbHQnKTtcbiAgcmV0dXJuIChoYXNBbHQgJiYgYWx0Lmxlbmd0aCA9PT0gMCkgfHwgKHJvbGUgPT09ICdwcmVzZW50YXRpb24nKSB8fCAocm9sZSA9PT0gJ25vbmUnKTtcbn07XG5cbmNvbnN0IGdldEFsdCA9IChpbWFnZTogSFRNTEVsZW1lbnQpOiBzdHJpbmcgPT4ge1xuICBpZiAoZ2V0SXNEZWNvcmF0aXZlKGltYWdlKSkge1xuICAgIHJldHVybiAnJztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZ2V0QXR0cmliKGltYWdlLCAnYWx0Jyk7XG4gIH1cbn07XG5cbmNvbnN0IGRlZmF1bHREYXRhID0gKCk6IEltYWdlRGF0YSA9PiAoe1xuICBzcmM6ICcnLFxuICBhbHQ6ICcnLFxuICB0aXRsZTogJycsXG4gIHdpZHRoOiAnJyxcbiAgaGVpZ2h0OiAnJyxcbiAgY2xhc3M6ICcnLFxuICBzdHlsZTogJycsXG4gIGNhcHRpb246IGZhbHNlLFxuICBoc3BhY2U6ICcnLFxuICB2c3BhY2U6ICcnLFxuICBib3JkZXI6ICcnLFxuICBib3JkZXJTdHlsZTogJycsXG4gIGlzRGVjb3JhdGl2ZTogZmFsc2Vcbn0pO1xuXG5jb25zdCBnZXRTdHlsZVZhbHVlID0gKG5vcm1hbGl6ZUNzczogQ3NzTm9ybWFsaXplciwgZGF0YTogSW1hZ2VEYXRhKTogc3RyaW5nID0+IHtcbiAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICB1cGRhdGVBdHRyaWIoaW1hZ2UsICdzdHlsZScsIGRhdGEuc3R5bGUpO1xuXG4gIGlmIChnZXRIc3BhY2UoaW1hZ2UpIHx8IGRhdGEuaHNwYWNlICE9PSAnJykge1xuICAgIHNldEhzcGFjZShpbWFnZSwgZGF0YS5oc3BhY2UpO1xuICB9XG5cbiAgaWYgKGdldFZzcGFjZShpbWFnZSkgfHwgZGF0YS52c3BhY2UgIT09ICcnKSB7XG4gICAgc2V0VnNwYWNlKGltYWdlLCBkYXRhLnZzcGFjZSk7XG4gIH1cblxuICBpZiAoZ2V0Qm9yZGVyKGltYWdlKSB8fCBkYXRhLmJvcmRlciAhPT0gJycpIHtcbiAgICBzZXRCb3JkZXIoaW1hZ2UsIGRhdGEuYm9yZGVyKTtcbiAgfVxuXG4gIGlmIChnZXRCb3JkZXJTdHlsZShpbWFnZSkgfHwgZGF0YS5ib3JkZXJTdHlsZSAhPT0gJycpIHtcbiAgICBzZXRCb3JkZXJTdHlsZShpbWFnZSwgZGF0YS5ib3JkZXJTdHlsZSk7XG4gIH1cblxuICByZXR1cm4gbm9ybWFsaXplQ3NzKGltYWdlLmdldEF0dHJpYnV0ZSgnc3R5bGUnKSA/PyAnJyk7XG59O1xuXG5jb25zdCBjcmVhdGUgPSAobm9ybWFsaXplQ3NzOiBDc3NOb3JtYWxpemVyLCBkYXRhOiBJbWFnZURhdGEpOiBIVE1MRWxlbWVudCA9PiB7XG4gIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIHdyaXRlKG5vcm1hbGl6ZUNzcywgeyAuLi5kYXRhLCBjYXB0aW9uOiBmYWxzZSB9LCBpbWFnZSk7XG4gIC8vIEFsd2F5cyBzZXQgYWx0IGV2ZW4gaWYgZGF0YS5hbHQgaXMgYW4gZW1wdHkgc3RyaW5nXG4gIHNldEFsdChpbWFnZSwgZGF0YS5hbHQsIGRhdGEuaXNEZWNvcmF0aXZlKTtcblxuICBpZiAoZGF0YS5jYXB0aW9uKSB7XG4gICAgY29uc3QgZmlndXJlID0gRE9NLmNyZWF0ZSgnZmlndXJlJywgeyBjbGFzczogJ2ltYWdlJyB9KTtcblxuICAgIGZpZ3VyZS5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgZmlndXJlLmFwcGVuZENoaWxkKERPTS5jcmVhdGUoJ2ZpZ2NhcHRpb24nLCB7IGNvbnRlbnRFZGl0YWJsZTogJ3RydWUnIH0sICdDYXB0aW9uJykpO1xuICAgIGZpZ3VyZS5jb250ZW50RWRpdGFibGUgPSAnZmFsc2UnO1xuXG4gICAgcmV0dXJuIGZpZ3VyZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gaW1hZ2U7XG4gIH1cbn07XG5cbmNvbnN0IHJlYWQgPSAobm9ybWFsaXplQ3NzOiBDc3NOb3JtYWxpemVyLCBpbWFnZTogSFRNTEVsZW1lbnQpOiBJbWFnZURhdGEgPT4gKHtcbiAgc3JjOiBnZXRBdHRyaWIoaW1hZ2UsICdzcmMnKSxcbiAgYWx0OiBnZXRBbHQoaW1hZ2UpLFxuICB0aXRsZTogZ2V0QXR0cmliKGltYWdlLCAndGl0bGUnKSxcbiAgd2lkdGg6IGdldFNpemUoaW1hZ2UsICd3aWR0aCcpLFxuICBoZWlnaHQ6IGdldFNpemUoaW1hZ2UsICdoZWlnaHQnKSxcbiAgY2xhc3M6IGdldEF0dHJpYihpbWFnZSwgJ2NsYXNzJyksXG4gIHN0eWxlOiBub3JtYWxpemVDc3MoZ2V0QXR0cmliKGltYWdlLCAnc3R5bGUnKSksXG4gIGNhcHRpb246IGhhc0NhcHRpb24oaW1hZ2UpLFxuICBoc3BhY2U6IGdldEhzcGFjZShpbWFnZSksXG4gIHZzcGFjZTogZ2V0VnNwYWNlKGltYWdlKSxcbiAgYm9yZGVyOiBnZXRCb3JkZXIoaW1hZ2UpLFxuICBib3JkZXJTdHlsZTogZ2V0Qm9yZGVyU3R5bGUoaW1hZ2UpLFxuICBpc0RlY29yYXRpdmU6IGdldElzRGVjb3JhdGl2ZShpbWFnZSlcbn0pO1xuXG5jb25zdCB1cGRhdGVQcm9wID0gKGltYWdlOiBIVE1MRWxlbWVudCwgb2xkRGF0YTogSW1hZ2VEYXRhLCBuZXdEYXRhOiBJbWFnZURhdGEsIG5hbWU6IGtleW9mIE9taXQ8SW1hZ2VEYXRhLCAnYWx0Jz4sIHNldDogVXBkYXRlSW1hZ2VQcm9wKTogdm9pZCA9PiB7XG4gIGlmIChuZXdEYXRhW25hbWVdICE9PSBvbGREYXRhW25hbWVdKSB7XG4gICAgc2V0KGltYWdlLCBuYW1lLCBTdHJpbmcobmV3RGF0YVtuYW1lXSkpO1xuICB9XG59O1xuXG5jb25zdCBzZXRBbHQgPSAoaW1hZ2U6IEhUTUxFbGVtZW50LCBhbHQ6IHN0cmluZyB8IG51bGwsIGlzRGVjb3JhdGl2ZTogYm9vbGVhbik6IHZvaWQgPT4ge1xuICBpZiAoaXNEZWNvcmF0aXZlKSB7XG4gICAgRE9NLnNldEF0dHJpYihpbWFnZSwgJ3JvbGUnLCAncHJlc2VudGF0aW9uJyk7XG4gICAgLy8gdW5mb3J0dW5hdGVseSBjYW4ndCBzZXQgXCJcIiBhdHRyIHZhbHVlIHdpdGggZG9tdXRpbHNcbiAgICBjb25zdCBzdWdhckltYWdlID0gU3VnYXJFbGVtZW50LmZyb21Eb20oaW1hZ2UpO1xuICAgIEF0dHJpYnV0ZS5zZXQoc3VnYXJJbWFnZSwgJ2FsdCcsICcnKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoVHlwZS5pc051bGwoYWx0KSkge1xuICAgICAgY29uc3Qgc3VnYXJJbWFnZSA9IFN1Z2FyRWxlbWVudC5mcm9tRG9tKGltYWdlKTtcbiAgICAgIEF0dHJpYnV0ZS5yZW1vdmUoc3VnYXJJbWFnZSwgJ2FsdCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB1bmZvcnR1bmF0ZWx5IGNhbid0IHNldCBcIlwiIGF0dHIgdmFsdWUgd2l0aCBkb211dGlsc1xuICAgICAgY29uc3Qgc3VnYXJJbWFnZSA9IFN1Z2FyRWxlbWVudC5mcm9tRG9tKGltYWdlKTtcbiAgICAgIEF0dHJpYnV0ZS5zZXQoc3VnYXJJbWFnZSwgJ2FsdCcsIGFsdCk7XG4gICAgfVxuICAgIGlmIChET00uZ2V0QXR0cmliKGltYWdlLCAncm9sZScpID09PSAncHJlc2VudGF0aW9uJykge1xuICAgICAgRE9NLnNldEF0dHJpYihpbWFnZSwgJ3JvbGUnLCAnJyk7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCB1cGRhdGVBbHQgPSAoaW1hZ2U6IEhUTUxFbGVtZW50LCBvbGREYXRhOiBJbWFnZURhdGEsIG5ld0RhdGE6IEltYWdlRGF0YSk6IHZvaWQgPT4ge1xuICBpZiAobmV3RGF0YS5hbHQgIT09IG9sZERhdGEuYWx0IHx8IG5ld0RhdGEuaXNEZWNvcmF0aXZlICE9PSBvbGREYXRhLmlzRGVjb3JhdGl2ZSkge1xuICAgIHNldEFsdChpbWFnZSwgbmV3RGF0YS5hbHQsIG5ld0RhdGEuaXNEZWNvcmF0aXZlKTtcbiAgfVxufTtcblxuY29uc3Qgbm9ybWFsaXplZCA9IChzZXQ6IChpbWFnZTogSFRNTEVsZW1lbnQsIHZhbHVlOiBzdHJpbmcpID0+IHZvaWQsIG5vcm1hbGl6ZUNzczogQ3NzTm9ybWFsaXplcikgPT5cbiAgKGltYWdlOiBIVE1MRWxlbWVudCwgbmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCA9PiB7XG4gICAgc2V0KGltYWdlLCB2YWx1ZSk7XG4gICAgbm9ybWFsaXplU3R5bGUoaW1hZ2UsIG5vcm1hbGl6ZUNzcyk7XG4gIH07XG5cbmNvbnN0IHdyaXRlID0gKG5vcm1hbGl6ZUNzczogQ3NzTm9ybWFsaXplciwgbmV3RGF0YTogSW1hZ2VEYXRhLCBpbWFnZTogSFRNTEVsZW1lbnQpOiB2b2lkID0+IHtcbiAgY29uc3Qgb2xkRGF0YSA9IHJlYWQobm9ybWFsaXplQ3NzLCBpbWFnZSk7XG5cbiAgdXBkYXRlUHJvcChpbWFnZSwgb2xkRGF0YSwgbmV3RGF0YSwgJ2NhcHRpb24nLCAoaW1hZ2UsIF9uYW1lLCBfdmFsdWUpID0+IHRvZ2dsZUNhcHRpb24oaW1hZ2UpKTtcbiAgdXBkYXRlUHJvcChpbWFnZSwgb2xkRGF0YSwgbmV3RGF0YSwgJ3NyYycsIHVwZGF0ZUF0dHJpYik7XG4gIHVwZGF0ZVByb3AoaW1hZ2UsIG9sZERhdGEsIG5ld0RhdGEsICd0aXRsZScsIHVwZGF0ZUF0dHJpYik7XG4gIHVwZGF0ZVByb3AoaW1hZ2UsIG9sZERhdGEsIG5ld0RhdGEsICd3aWR0aCcsIHNldFNpemUoJ3dpZHRoJywgbm9ybWFsaXplQ3NzKSk7XG4gIHVwZGF0ZVByb3AoaW1hZ2UsIG9sZERhdGEsIG5ld0RhdGEsICdoZWlnaHQnLCBzZXRTaXplKCdoZWlnaHQnLCBub3JtYWxpemVDc3MpKTtcbiAgdXBkYXRlUHJvcChpbWFnZSwgb2xkRGF0YSwgbmV3RGF0YSwgJ2NsYXNzJywgdXBkYXRlQXR0cmliKTtcbiAgdXBkYXRlUHJvcChpbWFnZSwgb2xkRGF0YSwgbmV3RGF0YSwgJ3N0eWxlJywgbm9ybWFsaXplZCgoaW1hZ2UsIHZhbHVlKSA9PiB1cGRhdGVBdHRyaWIoaW1hZ2UsICdzdHlsZScsIHZhbHVlKSwgbm9ybWFsaXplQ3NzKSk7XG4gIHVwZGF0ZVByb3AoaW1hZ2UsIG9sZERhdGEsIG5ld0RhdGEsICdoc3BhY2UnLCBub3JtYWxpemVkKHNldEhzcGFjZSwgbm9ybWFsaXplQ3NzKSk7XG4gIHVwZGF0ZVByb3AoaW1hZ2UsIG9sZERhdGEsIG5ld0RhdGEsICd2c3BhY2UnLCBub3JtYWxpemVkKHNldFZzcGFjZSwgbm9ybWFsaXplQ3NzKSk7XG4gIHVwZGF0ZVByb3AoaW1hZ2UsIG9sZERhdGEsIG5ld0RhdGEsICdib3JkZXInLCBub3JtYWxpemVkKHNldEJvcmRlciwgbm9ybWFsaXplQ3NzKSk7XG4gIHVwZGF0ZVByb3AoaW1hZ2UsIG9sZERhdGEsIG5ld0RhdGEsICdib3JkZXJTdHlsZScsIG5vcm1hbGl6ZWQoc2V0Qm9yZGVyU3R5bGUsIG5vcm1hbGl6ZUNzcykpO1xuICB1cGRhdGVBbHQoaW1hZ2UsIG9sZERhdGEsIG5ld0RhdGEpO1xufTtcblxuZXhwb3J0IHR5cGUgeyBJbWFnZURhdGEgfTtcbmV4cG9ydCB7IGdldFN0eWxlVmFsdWUsIGRlZmF1bHREYXRhLCBpc0ZpZ3VyZSwgaXNJbWFnZSwgY3JlYXRlLCByZWFkLCB3cml0ZSB9O1xuIiwiaW1wb3J0IHsgT2JqIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0IHR5cGUgRWRpdG9yIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvRWRpdG9yJztcbmltcG9ydCB0eXBlIHsgU2NoZW1hTWFwIH0gZnJvbSAndGlueW1jZS9jb3JlL2FwaS9odG1sL1NjaGVtYSc7XG5cbmltcG9ydCB7IGNyZWF0ZSwgZGVmYXVsdERhdGEsIHR5cGUgSW1hZ2VEYXRhLCBpc0ZpZ3VyZSwgcmVhZCwgd3JpdGUgfSBmcm9tICcuL0ltYWdlRGF0YSc7XG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuL1V0aWxzJztcblxuY29uc3Qgbm9ybWFsaXplQ3NzID0gKGVkaXRvcjogRWRpdG9yLCBjc3NUZXh0OiBzdHJpbmcgfCB1bmRlZmluZWQpOiBzdHJpbmcgPT4ge1xuICBjb25zdCBjc3MgPSBlZGl0b3IuZG9tLnN0eWxlcy5wYXJzZShjc3NUZXh0KTtcbiAgY29uc3QgbWVyZ2VkQ3NzID0gVXRpbHMubWVyZ2VNYXJnaW5zKGNzcyk7XG4gIGNvbnN0IGNvbXByZXNzZWQgPSBlZGl0b3IuZG9tLnN0eWxlcy5wYXJzZShlZGl0b3IuZG9tLnN0eWxlcy5zZXJpYWxpemUobWVyZ2VkQ3NzKSk7XG4gIHJldHVybiBlZGl0b3IuZG9tLnN0eWxlcy5zZXJpYWxpemUoY29tcHJlc3NlZCk7XG59O1xuXG5jb25zdCBnZXRTZWxlY3RlZEltYWdlID0gKGVkaXRvcjogRWRpdG9yKTogSFRNTEVsZW1lbnQgfCBudWxsID0+IHtcbiAgY29uc3QgaW1nRWxtID0gZWRpdG9yLnNlbGVjdGlvbi5nZXROb2RlKCk7XG4gIGNvbnN0IGZpZ3VyZUVsbSA9IGVkaXRvci5kb20uZ2V0UGFyZW50PEhUTUxFbGVtZW50PihpbWdFbG0sICdmaWd1cmUuaW1hZ2UnKTtcblxuICBpZiAoZmlndXJlRWxtKSB7XG4gICAgcmV0dXJuIGVkaXRvci5kb20uc2VsZWN0KCdpbWcnLCBmaWd1cmVFbG0pWzBdO1xuICB9XG5cbiAgaWYgKGltZ0VsbSAmJiAoaW1nRWxtLm5vZGVOYW1lICE9PSAnSU1HJyB8fCBVdGlscy5pc1BsYWNlaG9sZGVySW1hZ2UoaW1nRWxtKSkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBpbWdFbG0gYXMgSFRNTEVsZW1lbnQ7XG59O1xuXG5jb25zdCBzcGxpdFRleHRCbG9jayA9IChlZGl0b3I6IEVkaXRvciwgZmlndXJlOiBIVE1MRWxlbWVudCk6IEhUTUxFbGVtZW50ID0+IHtcbiAgY29uc3QgZG9tID0gZWRpdG9yLmRvbTtcbiAgY29uc3QgdGV4dEJsb2NrRWxlbWVudHM6IFNjaGVtYU1hcCA9IE9iai5maWx0ZXIoXG4gICAgZWRpdG9yLnNjaGVtYS5nZXRUZXh0QmxvY2tFbGVtZW50cygpLFxuICAgIChfLCBwYXJlbnRFbG0pID0+ICFlZGl0b3Iuc2NoZW1hLmlzVmFsaWRDaGlsZChwYXJlbnRFbG0sICdmaWd1cmUnKVxuICApO1xuXG4gIGNvbnN0IHRleHRCbG9jayA9IGRvbS5nZXRQYXJlbnQoXG4gICAgZmlndXJlLnBhcmVudE5vZGUsXG4gICAgKG5vZGU6IE5vZGUpID0+IE9iai5oYXNOb25OdWxsYWJsZUtleSh0ZXh0QmxvY2tFbGVtZW50cywgbm9kZS5ub2RlTmFtZSksXG4gICAgZWRpdG9yLmdldEJvZHkoKVxuICApO1xuXG4gIGlmICh0ZXh0QmxvY2spIHtcbiAgICByZXR1cm4gZG9tLnNwbGl0KHRleHRCbG9jaywgZmlndXJlKSA/PyBmaWd1cmU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZpZ3VyZTtcbiAgfVxufTtcblxuY29uc3QgcmVhZEltYWdlRGF0YUZyb21TZWxlY3Rpb24gPSAoZWRpdG9yOiBFZGl0b3IpOiBJbWFnZURhdGEgPT4ge1xuICBjb25zdCBpbWFnZSA9IGdldFNlbGVjdGVkSW1hZ2UoZWRpdG9yKTtcbiAgcmV0dXJuIGltYWdlID8gcmVhZCgoY3NzKSA9PiBub3JtYWxpemVDc3MoZWRpdG9yLCBjc3MpLCBpbWFnZSkgOiBkZWZhdWx0RGF0YSgpO1xufTtcblxuY29uc3QgaW5zZXJ0SW1hZ2VBdENhcmV0ID0gKGVkaXRvcjogRWRpdG9yLCBkYXRhOiBJbWFnZURhdGEpOiB2b2lkID0+IHtcbiAgY29uc3QgZWxtID0gY3JlYXRlKChjc3MpID0+IG5vcm1hbGl6ZUNzcyhlZGl0b3IsIGNzcyksIGRhdGEpO1xuXG4gIGVkaXRvci5kb20uc2V0QXR0cmliKGVsbSwgJ2RhdGEtbWNlLWlkJywgJ19fbWNlbmV3Jyk7XG4gIGVkaXRvci5mb2N1cygpO1xuICBlZGl0b3IuaW5zZXJ0Q29udGVudChlbG0ub3V0ZXJIVE1MKTtcblxuICBjb25zdCBpbnNlcnRlZEVsbSA9IGVkaXRvci5kb20uc2VsZWN0KCcqW2RhdGEtbWNlLWlkPVwiX19tY2VuZXdcIl0nKVswXTtcbiAgZWRpdG9yLmRvbS5zZXRBdHRyaWIoaW5zZXJ0ZWRFbG0sICdkYXRhLW1jZS1pZCcsIG51bGwpO1xuXG4gIGlmIChpc0ZpZ3VyZShpbnNlcnRlZEVsbSkpIHtcbiAgICBjb25zdCBmaWd1cmUgPSBzcGxpdFRleHRCbG9jayhlZGl0b3IsIGluc2VydGVkRWxtKTtcbiAgICBlZGl0b3Iuc2VsZWN0aW9uLnNlbGVjdChmaWd1cmUpO1xuICB9IGVsc2Uge1xuICAgIGVkaXRvci5zZWxlY3Rpb24uc2VsZWN0KGluc2VydGVkRWxtKTtcbiAgfVxufTtcblxuY29uc3Qgc3luY1NyY0F0dHIgPSAoZWRpdG9yOiBFZGl0b3IsIGltYWdlOiBIVE1MRWxlbWVudCk6IHZvaWQgPT4ge1xuICBlZGl0b3IuZG9tLnNldEF0dHJpYihpbWFnZSwgJ3NyYycsIGltYWdlLmdldEF0dHJpYnV0ZSgnc3JjJykpO1xufTtcblxuY29uc3QgZGVsZXRlSW1hZ2UgPSAoZWRpdG9yOiBFZGl0b3IsIGltYWdlOiBIVE1MRWxlbWVudCB8IG51bGwpOiB2b2lkID0+IHtcbiAgaWYgKGltYWdlKSB7XG4gICAgY29uc3QgZWxtID0gZWRpdG9yLmRvbS5pczxIVE1MRWxlbWVudD4oaW1hZ2UucGFyZW50Tm9kZSwgJ2ZpZ3VyZS5pbWFnZScpID8gaW1hZ2UucGFyZW50Tm9kZSA6IGltYWdlO1xuXG4gICAgZWRpdG9yLmRvbS5yZW1vdmUoZWxtKTtcbiAgICBlZGl0b3IuZm9jdXMoKTtcbiAgICBlZGl0b3Iubm9kZUNoYW5nZWQoKTtcblxuICAgIGlmIChlZGl0b3IuZG9tLmlzRW1wdHkoZWRpdG9yLmdldEJvZHkoKSkpIHtcbiAgICAgIGVkaXRvci5zZXRDb250ZW50KCcnKTtcbiAgICAgIGVkaXRvci5zZWxlY3Rpb24uc2V0Q3Vyc29yTG9jYXRpb24oKTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IHdyaXRlSW1hZ2VEYXRhVG9TZWxlY3Rpb24gPSAoZWRpdG9yOiBFZGl0b3IsIGRhdGE6IEltYWdlRGF0YSkgPT4ge1xuICBjb25zdCBpbWFnZSA9IGdldFNlbGVjdGVkSW1hZ2UoZWRpdG9yKTtcblxuICBpZiAoaW1hZ2UpIHtcbiAgICB3cml0ZSgoY3NzKSA9PiBub3JtYWxpemVDc3MoZWRpdG9yLCBjc3MpLCBkYXRhLCBpbWFnZSk7XG4gICAgc3luY1NyY0F0dHIoZWRpdG9yLCBpbWFnZSk7XG5cbiAgICBpZiAoaXNGaWd1cmUoaW1hZ2UucGFyZW50Tm9kZSkpIHtcbiAgICAgIGVkaXRvci5kb20uc2V0U3R5bGUoaW1hZ2UsICdmbG9hdCcsICcnKTtcbiAgICAgIGNvbnN0IGZpZ3VyZSA9IGltYWdlLnBhcmVudE5vZGU7XG4gICAgICBzcGxpdFRleHRCbG9jayhlZGl0b3IsIGZpZ3VyZSk7XG4gICAgICBlZGl0b3Iuc2VsZWN0aW9uLnNlbGVjdChpbWFnZS5wYXJlbnROb2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWRpdG9yLnNlbGVjdGlvbi5zZWxlY3QoaW1hZ2UpO1xuICAgICAgVXRpbHMud2FpdExvYWRJbWFnZShlZGl0b3IsIGRhdGEsIGltYWdlKTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IHNhbml0aXplSW1hZ2VEYXRhID0gKGVkaXRvcjogRWRpdG9yLCBkYXRhOiBJbWFnZURhdGEpOiBJbWFnZURhdGEgPT4ge1xuICAvLyBTYW5pdGl6ZSB0aGUgVVJMXG4gIGNvbnN0IHNyYyA9IGRhdGEuc3JjO1xuICByZXR1cm4ge1xuICAgIC4uLmRhdGEsXG4gICAgc3JjOiBVdGlscy5pc1NhZmVJbWFnZVVybChlZGl0b3IsIHNyYykgPyBzcmMgOiAnJ1xuICB9O1xufTtcblxuY29uc3QgaW5zZXJ0T3JVcGRhdGVJbWFnZSA9IChlZGl0b3I6IEVkaXRvciwgcGFydGlhbERhdGE6IFBhcnRpYWw8SW1hZ2VEYXRhPik6IHZvaWQgPT4ge1xuICBjb25zdCBpbWFnZSA9IGdldFNlbGVjdGVkSW1hZ2UoZWRpdG9yKTtcbiAgaWYgKGltYWdlKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRJbWFnZURhdGEgPSByZWFkKChjc3MpID0+IG5vcm1hbGl6ZUNzcyhlZGl0b3IsIGNzcyksIGltYWdlKTtcbiAgICBjb25zdCBkYXRhID0geyAuLi5zZWxlY3RlZEltYWdlRGF0YSwgLi4ucGFydGlhbERhdGEgfTtcbiAgICBjb25zdCBzYW5pdGl6ZWREYXRhID0gc2FuaXRpemVJbWFnZURhdGEoZWRpdG9yLCBkYXRhKTtcblxuICAgIGlmIChkYXRhLnNyYykge1xuICAgICAgd3JpdGVJbWFnZURhdGFUb1NlbGVjdGlvbihlZGl0b3IsIHNhbml0aXplZERhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGVJbWFnZShlZGl0b3IsIGltYWdlKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAocGFydGlhbERhdGEuc3JjKSB7XG4gICAgaW5zZXJ0SW1hZ2VBdENhcmV0KGVkaXRvciwgeyAuLi5kZWZhdWx0RGF0YSgpLCAuLi5wYXJ0aWFsRGF0YSB9KTtcbiAgfVxufTtcblxuZXhwb3J0IHtcbiAgbm9ybWFsaXplQ3NzLFxuICBnZXRTZWxlY3RlZEltYWdlLFxuICByZWFkSW1hZ2VEYXRhRnJvbVNlbGVjdGlvbixcbiAgaW5zZXJ0T3JVcGRhdGVJbWFnZVxufTtcbiIsImltcG9ydCB7IEFyciwgT2JqLCBPcHRpb25hbCwgVHlwZSB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmltcG9ydCBUb29scyBmcm9tICd0aW55bWNlL2NvcmUvYXBpL3V0aWwvVG9vbHMnO1xuXG5pbXBvcnQgdHlwZSB7IExpc3RHcm91cCwgTGlzdEl0ZW0sIExpc3RWYWx1ZSwgVXNlckxpc3RJdGVtIH0gZnJvbSAnLi4vdWkvRGlhbG9nVHlwZXMnO1xuXG5leHBvcnQgdHlwZSBMaXN0RXh0cmFjdG9yID0gKGl0ZW06IFVzZXJMaXN0SXRlbSkgPT4gc3RyaW5nO1xuXG5jb25zdCBnZXRWYWx1ZTogTGlzdEV4dHJhY3RvciA9IChpdGVtKSA9PiBUeXBlLmlzU3RyaW5nKGl0ZW0udmFsdWUpID8gaXRlbS52YWx1ZSA6ICcnO1xuXG5jb25zdCBnZXRUZXh0ID0gKGl0ZW06IFVzZXJMaXN0SXRlbSk6IHN0cmluZyA9PiB7XG4gIGlmIChUeXBlLmlzU3RyaW5nKGl0ZW0udGV4dCkpIHtcbiAgICByZXR1cm4gaXRlbS50ZXh0O1xuICB9IGVsc2UgaWYgKFR5cGUuaXNTdHJpbmcoaXRlbS50aXRsZSkpIHtcbiAgICByZXR1cm4gaXRlbS50aXRsZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbn07XG5cbmNvbnN0IHNhbml0aXplTGlzdCA9IChsaXN0OiBVc2VyTGlzdEl0ZW1bXSwgZXh0cmFjdFZhbHVlOiBMaXN0RXh0cmFjdG9yKTogTGlzdEl0ZW1bXSA9PiB7XG4gIGNvbnN0IG91dDogTGlzdEl0ZW1bXSA9IFtdO1xuICBUb29scy5lYWNoKGxpc3QsIChpdGVtKSA9PiB7XG4gICAgY29uc3QgdGV4dCA9IGdldFRleHQoaXRlbSk7XG4gICAgaWYgKGl0ZW0ubWVudSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBpdGVtcyA9IHNhbml0aXplTGlzdChpdGVtLm1lbnUsIGV4dHJhY3RWYWx1ZSk7XG4gICAgICBvdXQucHVzaCh7IHRleHQsIGl0ZW1zIH0pOyAvLyBsaXN0IGdyb3VwXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZXh0cmFjdFZhbHVlKGl0ZW0pO1xuICAgICAgb3V0LnB1c2goeyB0ZXh0LCB2YWx1ZSB9KTsgLy8gbGlzdCB2YWx1ZVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvdXQ7XG59O1xuXG5jb25zdCBzYW5pdGl6ZXIgPSAoZXh0cmFjdG9yOiBMaXN0RXh0cmFjdG9yID0gZ2V0VmFsdWUpID0+IChsaXN0OiBVc2VyTGlzdEl0ZW1bXSB8IHVuZGVmaW5lZCB8IGZhbHNlKTogT3B0aW9uYWw8TGlzdEl0ZW1bXT4gPT4ge1xuICBpZiAobGlzdCkge1xuICAgIHJldHVybiBPcHRpb25hbC5mcm9tKGxpc3QpLm1hcCgobGlzdCkgPT4gc2FuaXRpemVMaXN0KGxpc3QsIGV4dHJhY3RvcikpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBPcHRpb25hbC5ub25lKCk7XG4gIH1cbn07XG5cbmNvbnN0IHNhbml0aXplID0gKGxpc3Q6IFVzZXJMaXN0SXRlbVtdIHwgdW5kZWZpbmVkKTogT3B0aW9uYWw8TGlzdEl0ZW1bXT4gPT5cbiAgc2FuaXRpemVyKGdldFZhbHVlKShsaXN0KTtcblxuY29uc3QgaXNHcm91cCA9IChpdGVtOiBMaXN0SXRlbSk6IGl0ZW0gaXMgTGlzdEdyb3VwID0+XG4gIE9iai5oYXMoaXRlbSBhcyBMaXN0R3JvdXAsICdpdGVtcycpO1xuXG5jb25zdCBmaW5kRW50cnlEZWxlZ2F0ZSA9IChsaXN0OiBMaXN0SXRlbVtdLCB2YWx1ZTogc3RyaW5nKTogT3B0aW9uYWw8TGlzdFZhbHVlPiA9PlxuICBBcnIuZmluZE1hcChsaXN0LCAoaXRlbSkgPT4ge1xuICAgIGlmIChpc0dyb3VwKGl0ZW0pKSB7XG4gICAgICByZXR1cm4gZmluZEVudHJ5RGVsZWdhdGUoaXRlbS5pdGVtcywgdmFsdWUpO1xuICAgIH0gZWxzZSBpZiAoaXRlbS52YWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybiBPcHRpb25hbC5zb21lKGl0ZW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gT3B0aW9uYWwubm9uZSgpO1xuICAgIH1cbiAgfSk7XG5cbmNvbnN0IGZpbmRFbnRyeSA9IChvcHRMaXN0OiBPcHRpb25hbDxMaXN0SXRlbVtdPiwgdmFsdWU6IHN0cmluZyk6IE9wdGlvbmFsPExpc3RWYWx1ZT4gPT5cbiAgb3B0TGlzdC5iaW5kKChsaXN0KSA9PiBmaW5kRW50cnlEZWxlZ2F0ZShsaXN0LCB2YWx1ZSkpO1xuXG5leHBvcnQgY29uc3QgTGlzdFV0aWxzID0ge1xuICBzYW5pdGl6ZXIsXG4gIHNhbml0aXplLFxuICBmaW5kRW50cnlcbn07XG4iLCJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0IHR5cGUgRWRpdG9yIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvRWRpdG9yJztcbmltcG9ydCB0eXBlIHsgU3R5bGVNYXAgfSBmcm9tICd0aW55bWNlL2NvcmUvYXBpL2h0bWwvU3R5bGVzJztcbmltcG9ydCBVUkkgZnJvbSAndGlueW1jZS9jb3JlL2FwaS91dGlsL1VSSSc7XG5cbmltcG9ydCAqIGFzIE9wdGlvbnMgZnJvbSAnLi4vYXBpL09wdGlvbnMnO1xuaW1wb3J0IHR5cGUgeyBVc2VyTGlzdEl0ZW0gfSBmcm9tICcuLi91aS9EaWFsb2dUeXBlcyc7XG5cbmltcG9ydCB0eXBlIHsgSW1hZ2VEYXRhIH0gZnJvbSAnLi9JbWFnZURhdGEnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEltYWdlRGltZW5zaW9ucyB7XG4gIHJlYWRvbmx5IHdpZHRoOiBudW1iZXI7XG4gIHJlYWRvbmx5IGhlaWdodDogbnVtYmVyO1xufVxuXG4vLyBUT0RPOiBGaWd1cmUgb3V0IGlmIHRoZXNlIHdvdWxkIGV2ZXIgYmUgc29tZXRoaW5nIG90aGVyIHRoYW4gbnVtYmVycy4gVGhpcyB3YXMgYWRkZWQgaW46ICNUSU5ZLTEzNTBcbmNvbnN0IHBhcnNlSW50QW5kR2V0TWF4ID0gKHZhbDE6IGFueSwgdmFsMjogYW55KTogbnVtYmVyID0+XG4gIE1hdGgubWF4KHBhcnNlSW50KHZhbDEsIDEwKSwgcGFyc2VJbnQodmFsMiwgMTApKTtcblxuY29uc3QgZ2V0SW1hZ2VTaXplID0gKHVybDogc3RyaW5nKTogUHJvbWlzZTxJbWFnZURpbWVuc2lvbnM+ID0+IG5ldyBQcm9taXNlKChjYWxsYmFjaykgPT4ge1xuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICBjb25zdCBkb25lID0gKGRpbWVuc2lvbnM6IFByb21pc2U8SW1hZ2VEaW1lbnNpb25zPik6IHZvaWQgPT4ge1xuICAgIGlmIChpbWcucGFyZW50Tm9kZSkge1xuICAgICAgaW1nLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaW1nKTtcbiAgICB9XG5cbiAgICBjYWxsYmFjayhkaW1lbnNpb25zKTtcbiAgfTtcblxuICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICBjb25zdCB3aWR0aCA9IHBhcnNlSW50QW5kR2V0TWF4KGltZy53aWR0aCwgaW1nLmNsaWVudFdpZHRoKTtcbiAgICBjb25zdCBoZWlnaHQgPSBwYXJzZUludEFuZEdldE1heChpbWcuaGVpZ2h0LCBpbWcuY2xpZW50SGVpZ2h0KTtcbiAgICBjb25zdCBkaW1lbnNpb25zID0geyB3aWR0aCwgaGVpZ2h0IH07XG4gICAgZG9uZShQcm9taXNlLnJlc29sdmUoZGltZW5zaW9ucykpO1xuICB9KTtcblxuICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiB7XG4gICAgZG9uZShQcm9taXNlLnJlamVjdChgRmFpbGVkIHRvIGdldCBpbWFnZSBkaW1lbnNpb25zIGZvcjogJHt1cmx9YCkpO1xuICB9KTtcblxuICBjb25zdCBzdHlsZSA9IGltZy5zdHlsZTtcbiAgc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICBzdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gIHN0eWxlLmJvdHRvbSA9IHN0eWxlLmxlZnQgPSAnMHB4JztcbiAgc3R5bGUud2lkdGggPSBzdHlsZS5oZWlnaHQgPSAnYXV0byc7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbWcpO1xuICBpbWcuc3JjID0gdXJsO1xufSk7XG5cbmNvbnN0IHJlbW92ZVBpeGVsU3VmZml4ID0gKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICBpZiAodmFsdWUpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL3B4JC8sICcnKTtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59O1xuXG5jb25zdCBhZGRQaXhlbFN1ZmZpeCA9ICh2YWx1ZTogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgaWYgKHZhbHVlLmxlbmd0aCA+IDAgJiYgL15bMC05XSskLy50ZXN0KHZhbHVlKSkge1xuICAgIHZhbHVlICs9ICdweCc7XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuY29uc3QgbWVyZ2VNYXJnaW5zID0gKGNzczogU3R5bGVNYXApOiBTdHlsZU1hcCA9PiB7XG4gIGlmIChjc3MubWFyZ2luKSB7XG4gICAgY29uc3Qgc3BsaXRNYXJnaW4gPSBTdHJpbmcoY3NzLm1hcmdpbikuc3BsaXQoJyAnKTtcblxuICAgIHN3aXRjaCAoc3BsaXRNYXJnaW4ubGVuZ3RoKSB7XG4gICAgICBjYXNlIDE6IC8vIG1hcmdpbjogdG9wcmlnaHRib3R0b21sZWZ0O1xuICAgICAgICBjc3NbJ21hcmdpbi10b3AnXSA9IGNzc1snbWFyZ2luLXRvcCddIHx8IHNwbGl0TWFyZ2luWzBdO1xuICAgICAgICBjc3NbJ21hcmdpbi1yaWdodCddID0gY3NzWydtYXJnaW4tcmlnaHQnXSB8fCBzcGxpdE1hcmdpblswXTtcbiAgICAgICAgY3NzWydtYXJnaW4tYm90dG9tJ10gPSBjc3NbJ21hcmdpbi1ib3R0b20nXSB8fCBzcGxpdE1hcmdpblswXTtcbiAgICAgICAgY3NzWydtYXJnaW4tbGVmdCddID0gY3NzWydtYXJnaW4tbGVmdCddIHx8IHNwbGl0TWFyZ2luWzBdO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjogLy8gbWFyZ2luOiB0b3Bib3R0b20gcmlnaHRsZWZ0O1xuICAgICAgICBjc3NbJ21hcmdpbi10b3AnXSA9IGNzc1snbWFyZ2luLXRvcCddIHx8IHNwbGl0TWFyZ2luWzBdO1xuICAgICAgICBjc3NbJ21hcmdpbi1yaWdodCddID0gY3NzWydtYXJnaW4tcmlnaHQnXSB8fCBzcGxpdE1hcmdpblsxXTtcbiAgICAgICAgY3NzWydtYXJnaW4tYm90dG9tJ10gPSBjc3NbJ21hcmdpbi1ib3R0b20nXSB8fCBzcGxpdE1hcmdpblswXTtcbiAgICAgICAgY3NzWydtYXJnaW4tbGVmdCddID0gY3NzWydtYXJnaW4tbGVmdCddIHx8IHNwbGl0TWFyZ2luWzFdO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzogLy8gbWFyZ2luOiB0b3AgcmlnaHRsZWZ0IGJvdHRvbTtcbiAgICAgICAgY3NzWydtYXJnaW4tdG9wJ10gPSBjc3NbJ21hcmdpbi10b3AnXSB8fCBzcGxpdE1hcmdpblswXTtcbiAgICAgICAgY3NzWydtYXJnaW4tcmlnaHQnXSA9IGNzc1snbWFyZ2luLXJpZ2h0J10gfHwgc3BsaXRNYXJnaW5bMV07XG4gICAgICAgIGNzc1snbWFyZ2luLWJvdHRvbSddID0gY3NzWydtYXJnaW4tYm90dG9tJ10gfHwgc3BsaXRNYXJnaW5bMl07XG4gICAgICAgIGNzc1snbWFyZ2luLWxlZnQnXSA9IGNzc1snbWFyZ2luLWxlZnQnXSB8fCBzcGxpdE1hcmdpblsxXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDQ6IC8vIG1hcmdpbjogdG9wIHJpZ2h0IGJvdHRvbSBsZWZ0O1xuICAgICAgICBjc3NbJ21hcmdpbi10b3AnXSA9IGNzc1snbWFyZ2luLXRvcCddIHx8IHNwbGl0TWFyZ2luWzBdO1xuICAgICAgICBjc3NbJ21hcmdpbi1yaWdodCddID0gY3NzWydtYXJnaW4tcmlnaHQnXSB8fCBzcGxpdE1hcmdpblsxXTtcbiAgICAgICAgY3NzWydtYXJnaW4tYm90dG9tJ10gPSBjc3NbJ21hcmdpbi1ib3R0b20nXSB8fCBzcGxpdE1hcmdpblsyXTtcbiAgICAgICAgY3NzWydtYXJnaW4tbGVmdCddID0gY3NzWydtYXJnaW4tbGVmdCddIHx8IHNwbGl0TWFyZ2luWzNdO1xuICAgIH1cblxuICAgIGRlbGV0ZSBjc3MubWFyZ2luO1xuICB9XG5cbiAgcmV0dXJuIGNzcztcbn07XG5cbi8vIFRPRE86IElucHV0IG9uIHRoaXMgY2FsbGJhY2sgc2hvdWxkIHJlYWxseSBiZSB2YWxpZGF0ZWRcbmNvbnN0IGNyZWF0ZUltYWdlTGlzdCA9IChlZGl0b3I6IEVkaXRvciwgY2FsbGJhY2s6IChpbWFnZUxpc3Q6IGZhbHNlIHwgVXNlckxpc3RJdGVtW10pID0+IHZvaWQpOiB2b2lkID0+IHtcbiAgY29uc3QgaW1hZ2VMaXN0ID0gT3B0aW9ucy5nZXRJbWFnZUxpc3QoZWRpdG9yKTtcblxuICBpZiAoVHlwZS5pc1N0cmluZyhpbWFnZUxpc3QpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlc1xuICAgIGZldGNoKGltYWdlTGlzdClcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZmxvYXRpbmctcHJvbWlzZXNcbiAgICAgICAgICByZXMuanNvbigpLnRoZW4oY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfSBlbHNlIGlmIChUeXBlLmlzRnVuY3Rpb24oaW1hZ2VMaXN0KSkge1xuICAgIGltYWdlTGlzdChjYWxsYmFjayk7XG4gIH0gZWxzZSB7XG4gICAgY2FsbGJhY2soaW1hZ2VMaXN0KTtcbiAgfVxufTtcblxuY29uc3Qgd2FpdExvYWRJbWFnZSA9IChlZGl0b3I6IEVkaXRvciwgZGF0YTogSW1hZ2VEYXRhLCBpbWdFbG06IEhUTUxFbGVtZW50KTogdm9pZCA9PiB7XG4gIGNvbnN0IHNlbGVjdEltYWdlID0gKCk6IHZvaWQgPT4ge1xuICAgIGltZ0VsbS5vbmxvYWQgPSBpbWdFbG0ub25lcnJvciA9IG51bGw7XG5cbiAgICBpZiAoZWRpdG9yLnNlbGVjdGlvbikge1xuICAgICAgZWRpdG9yLnNlbGVjdGlvbi5zZWxlY3QoaW1nRWxtKTtcbiAgICAgIGVkaXRvci5ub2RlQ2hhbmdlZCgpO1xuICAgIH1cbiAgfTtcblxuICBpbWdFbG0ub25sb2FkID0gKCkgPT4ge1xuICAgIGlmICghZGF0YS53aWR0aCAmJiAhZGF0YS5oZWlnaHQgJiYgT3B0aW9ucy5oYXNEaW1lbnNpb25zKGVkaXRvcikpIHtcbiAgICAgIGVkaXRvci5kb20uc2V0QXR0cmlicyhpbWdFbG0sIHtcbiAgICAgICAgd2lkdGg6IFN0cmluZyhpbWdFbG0uY2xpZW50V2lkdGgpLFxuICAgICAgICBoZWlnaHQ6IFN0cmluZyhpbWdFbG0uY2xpZW50SGVpZ2h0KVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2VsZWN0SW1hZ2UoKTtcbiAgfTtcblxuICBpbWdFbG0ub25lcnJvciA9IHNlbGVjdEltYWdlO1xufTtcblxuY29uc3QgYmxvYlRvRGF0YVVyaSA9IChibG9iOiBCbG9iKTogUHJvbWlzZTxzdHJpbmc+ID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcbiAgICByZXNvbHZlKHJlYWRlci5yZXN1bHQgYXMgc3RyaW5nKTtcbiAgfTtcbiAgcmVhZGVyLm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgcmVqZWN0KHJlYWRlci5lcnJvcj8ubWVzc2FnZSk7XG4gIH07XG4gIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xufSk7XG5cbmNvbnN0IGlzUGxhY2Vob2xkZXJJbWFnZSA9IChpbWdFbG06IEVsZW1lbnQpOiBpbWdFbG0gaXMgSFRNTEltYWdlRWxlbWVudCA9PlxuICBpbWdFbG0ubm9kZU5hbWUgPT09ICdJTUcnICYmIChpbWdFbG0uaGFzQXR0cmlidXRlKCdkYXRhLW1jZS1vYmplY3QnKSB8fCBpbWdFbG0uaGFzQXR0cmlidXRlKCdkYXRhLW1jZS1wbGFjZWhvbGRlcicpKTtcblxuY29uc3QgaXNTYWZlSW1hZ2VVcmwgPSAoZWRpdG9yOiBFZGl0b3IsIHNyYzogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gIGNvbnN0IGdldE9wdGlvbiA9IGVkaXRvci5vcHRpb25zLmdldDtcbiAgcmV0dXJuIFVSSS5pc0RvbVNhZmUoc3JjLCAnaW1nJywge1xuICAgIGFsbG93X2h0bWxfZGF0YV91cmxzOiBnZXRPcHRpb24oJ2FsbG93X2h0bWxfZGF0YV91cmxzJyksXG4gICAgYWxsb3dfc2NyaXB0X3VybHM6IGdldE9wdGlvbignYWxsb3dfc2NyaXB0X3VybHMnKSxcbiAgICBhbGxvd19zdmdfZGF0YV91cmxzOiBnZXRPcHRpb24oJ2FsbG93X3N2Z19kYXRhX3VybHMnKVxuICB9KTtcbn07XG5cbmV4cG9ydCB7XG4gIGdldEltYWdlU2l6ZSxcbiAgcmVtb3ZlUGl4ZWxTdWZmaXgsXG4gIGFkZFBpeGVsU3VmZml4LFxuICBtZXJnZU1hcmdpbnMsXG4gIGNyZWF0ZUltYWdlTGlzdCxcbiAgd2FpdExvYWRJbWFnZSxcbiAgYmxvYlRvRGF0YVVyaSxcbiAgaXNQbGFjZWhvbGRlckltYWdlLFxuICBpc1NhZmVJbWFnZVVybFxufTtcbiIsImltcG9ydCB0eXBlIHsgRGlhbG9nIH0gZnJvbSAndGlueW1jZS9jb3JlL2FwaS91aS9VaSc7XG5cbmltcG9ydCB0eXBlIHsgSW1hZ2VEaWFsb2dJbmZvIH0gZnJvbSAnLi9EaWFsb2dUeXBlcyc7XG5cbmNvbnN0IG1ha2VUYWIgPSAoX2luZm86IEltYWdlRGlhbG9nSW5mbyk6IERpYWxvZy5UYWJTcGVjID0+ICh7XG4gIHRpdGxlOiAnQWR2YW5jZWQnLFxuICBuYW1lOiAnYWR2YW5jZWQnLFxuICBpdGVtczogW1xuICAgIHtcbiAgICAgIHR5cGU6ICdncmlkJyxcbiAgICAgIGNvbHVtbnM6IDIsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ2lucHV0JyxcbiAgICAgICAgICBsYWJlbDogJ1ZlcnRpY2FsIHNwYWNlJyxcbiAgICAgICAgICBuYW1lOiAndnNwYWNlJyxcbiAgICAgICAgICBpbnB1dE1vZGU6ICdudW1lcmljJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ2lucHV0JyxcbiAgICAgICAgICBsYWJlbDogJ0hvcml6b250YWwgc3BhY2UnLFxuICAgICAgICAgIG5hbWU6ICdoc3BhY2UnLFxuICAgICAgICAgIGlucHV0TW9kZTogJ251bWVyaWMnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAnaW5wdXQnLFxuICAgICAgICAgIGxhYmVsOiAnQm9yZGVyIHdpZHRoJyxcbiAgICAgICAgICBuYW1lOiAnYm9yZGVyJyxcbiAgICAgICAgICBpbnB1dE1vZGU6ICdudW1lcmljJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ2xpc3Rib3gnLFxuICAgICAgICAgIG5hbWU6ICdib3JkZXJzdHlsZScsXG4gICAgICAgICAgbGFiZWw6ICdCb3JkZXIgc3R5bGUnLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IHRleHQ6ICdTZWxlY3QuLi4nLCB2YWx1ZTogJycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1NvbGlkJywgdmFsdWU6ICdzb2xpZCcgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ0RvdHRlZCcsIHZhbHVlOiAnZG90dGVkJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnRGFzaGVkJywgdmFsdWU6ICdkYXNoZWQnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdEb3VibGUnLCB2YWx1ZTogJ2RvdWJsZScgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ0dyb292ZScsIHZhbHVlOiAnZ3Jvb3ZlJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnUmlkZ2UnLCB2YWx1ZTogJ3JpZGdlJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnSW5zZXQnLCB2YWx1ZTogJ2luc2V0JyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnT3V0c2V0JywgdmFsdWU6ICdvdXRzZXQnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdOb25lJywgdmFsdWU6ICdub25lJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnSGlkZGVuJywgdmFsdWU6ICdoaWRkZW4nIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn0pO1xuXG5leHBvcnQgY29uc3QgQWR2VGFiID0ge1xuICBtYWtlVGFiXG59O1xuIiwiaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmltcG9ydCB0eXBlIEVkaXRvciBmcm9tICd0aW55bWNlL2NvcmUvYXBpL0VkaXRvcic7XG5pbXBvcnQgdHlwZSB7IE1lbnUsIFRvb2xiYXIgfSBmcm9tICd0aW55bWNlL2NvcmUvYXBpL3VpL1VpJztcblxuaW1wb3J0IHsgaXNGaWd1cmUsIGlzSW1hZ2UgfSBmcm9tICcuLi9jb3JlL0ltYWdlRGF0YSc7XG5pbXBvcnQgKiBhcyBJbWFnZVNlbGVjdGlvbiBmcm9tICcuLi9jb3JlL0ltYWdlU2VsZWN0aW9uJztcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gJy4uL2NvcmUvVXRpbHMnO1xuXG5pbXBvcnQgeyBEaWFsb2cgfSBmcm9tICcuL0RpYWxvZyc7XG5cbmNvbnN0IG9uU2V0dXBFZGl0YWJsZSA9IChlZGl0b3I6IEVkaXRvcikgPT4gKGFwaTogVG9vbGJhci5Ub29sYmFyQnV0dG9uSW5zdGFuY2VBcGkgfCBNZW51Lk1lbnVJdGVtSW5zdGFuY2VBcGkpOiBWb2lkRnVuY3Rpb24gPT4ge1xuICBjb25zdCBub2RlQ2hhbmdlZCA9ICgpID0+IHtcbiAgICBhcGkuc2V0RW5hYmxlZChlZGl0b3Iuc2VsZWN0aW9uLmlzRWRpdGFibGUoKSk7XG4gIH07XG5cbiAgZWRpdG9yLm9uKCdOb2RlQ2hhbmdlJywgbm9kZUNoYW5nZWQpO1xuICBub2RlQ2hhbmdlZCgpO1xuXG4gIHJldHVybiAoKSA9PiB7XG4gICAgZWRpdG9yLm9mZignTm9kZUNoYW5nZScsIG5vZGVDaGFuZ2VkKTtcbiAgfTtcbn07XG5cbmNvbnN0IHJlZ2lzdGVyID0gKGVkaXRvcjogRWRpdG9yKTogdm9pZCA9PiB7XG4gIGVkaXRvci51aS5yZWdpc3RyeS5hZGRUb2dnbGVCdXR0b24oJ2ltYWdlJywge1xuICAgIGljb246ICdpbWFnZScsXG4gICAgdG9vbHRpcDogJ0luc2VydC9lZGl0IGltYWdlJyxcbiAgICBvbkFjdGlvbjogRGlhbG9nKGVkaXRvcikub3BlbixcbiAgICBvblNldHVwOiAoYnV0dG9uQXBpKSA9PiB7XG4gICAgICAvLyBTZXQgdGhlIGluaXRpYWwgc3RhdGUgYW5kIHRoZW4gYmluZCB0byBzZWxlY3Rpb24gY2hhbmdlcyB0byB1cGRhdGUgdGhlIHN0YXRlIHdoZW4gdGhlIHNlbGVjdGlvbiBjaGFuZ2VzXG4gICAgICBidXR0b25BcGkuc2V0QWN0aXZlKFR5cGUuaXNOb25OdWxsYWJsZShJbWFnZVNlbGVjdGlvbi5nZXRTZWxlY3RlZEltYWdlKGVkaXRvcikpKTtcbiAgICAgIGNvbnN0IHVuYmluZFNlbGVjdG9yQ2hhbmdlZCA9IGVkaXRvci5zZWxlY3Rpb24uc2VsZWN0b3JDaGFuZ2VkV2l0aFVuYmluZCgnaW1nOm5vdChbZGF0YS1tY2Utb2JqZWN0XSk6bm90KFtkYXRhLW1jZS1wbGFjZWhvbGRlcl0pLGZpZ3VyZS5pbWFnZScsIGJ1dHRvbkFwaS5zZXRBY3RpdmUpLnVuYmluZDtcbiAgICAgIGNvbnN0IHVuYmluZEVkaXRhYmxlID0gb25TZXR1cEVkaXRhYmxlKGVkaXRvcikoYnV0dG9uQXBpKTtcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIHVuYmluZFNlbGVjdG9yQ2hhbmdlZCgpO1xuICAgICAgICB1bmJpbmRFZGl0YWJsZSgpO1xuICAgICAgfTtcbiAgICB9XG4gIH0pO1xuXG4gIGVkaXRvci51aS5yZWdpc3RyeS5hZGRNZW51SXRlbSgnaW1hZ2UnLCB7XG4gICAgaWNvbjogJ2ltYWdlJyxcbiAgICB0ZXh0OiAnSW1hZ2UuLi4nLFxuICAgIG9uQWN0aW9uOiBEaWFsb2coZWRpdG9yKS5vcGVuLFxuICAgIG9uU2V0dXA6IG9uU2V0dXBFZGl0YWJsZShlZGl0b3IpXG4gIH0pO1xuXG4gIGVkaXRvci51aS5yZWdpc3RyeS5hZGRDb250ZXh0TWVudSgnaW1hZ2UnLCB7XG4gICAgdXBkYXRlOiAoZWxlbWVudCk6IHN0cmluZ1tdID0+IGVkaXRvci5zZWxlY3Rpb24uaXNFZGl0YWJsZSgpICYmIChpc0ZpZ3VyZShlbGVtZW50KSB8fCAoaXNJbWFnZShlbGVtZW50KSAmJiAhVXRpbHMuaXNQbGFjZWhvbGRlckltYWdlKGVsZW1lbnQpKSkgPyBbICdpbWFnZScgXSA6IFtdXG4gIH0pO1xuXG59O1xuXG5leHBvcnQge1xuICByZWdpc3RlclxufTtcbiIsImltcG9ydCB7IEFyciwgTWVyZ2VyLCBPcHRpb25hbCwgU3RyaW5ncywgVHlwZSB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmltcG9ydCB0eXBlIEVkaXRvciBmcm9tICd0aW55bWNlL2NvcmUvYXBpL0VkaXRvcic7XG5pbXBvcnQgdHlwZSB7IEJsb2JJbmZvIH0gZnJvbSAndGlueW1jZS9jb3JlL2FwaS9maWxlL0Jsb2JDYWNoZSc7XG5pbXBvcnQgdHlwZSB7IFN0eWxlTWFwIH0gZnJvbSAndGlueW1jZS9jb3JlL2FwaS9odG1sL1N0eWxlcyc7XG5pbXBvcnQgdHlwZSB7IERpYWxvZyBhcyBEaWFsb2dUeXBlIH0gZnJvbSAndGlueW1jZS9jb3JlL2FwaS91aS9VaSc7XG5pbXBvcnQgSW1hZ2VVcGxvYWRlciwgeyB0eXBlIFVwbG9hZFJlc3VsdCB9IGZyb20gJ3RpbnltY2UvY29yZS9hcGkvdXRpbC9JbWFnZVVwbG9hZGVyJztcblxuaW1wb3J0IHsgZ2V0U3R5bGVWYWx1ZSwgdHlwZSBJbWFnZURhdGEgfSBmcm9tICcuLi9jb3JlL0ltYWdlRGF0YSc7XG5pbXBvcnQgeyBub3JtYWxpemVDc3MgYXMgZG9Ob3JtYWxpemVDc3MgfSBmcm9tICcuLi9jb3JlL0ltYWdlU2VsZWN0aW9uJztcbmltcG9ydCB7IExpc3RVdGlscyB9IGZyb20gJy4uL2NvcmUvTGlzdFV0aWxzJztcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gJy4uL2NvcmUvVXRpbHMnO1xuXG5pbXBvcnQgeyBBZHZUYWIgfSBmcm9tICcuL0FkdlRhYic7XG5pbXBvcnQgeyBjb2xsZWN0IH0gZnJvbSAnLi9EaWFsb2dJbmZvJztcbmltcG9ydCB0eXBlIHsgQVBJLCBJbWFnZURpYWxvZ0RhdGEsIEltYWdlRGlhbG9nSW5mbywgSW1hZ2VNZXRhLCBMaXN0VmFsdWUgfSBmcm9tICcuL0RpYWxvZ1R5cGVzJztcbmltcG9ydCB7IE1haW5UYWIgfSBmcm9tICcuL01haW5UYWInO1xuaW1wb3J0IHsgVXBsb2FkVGFiIH0gZnJvbSAnLi9VcGxvYWRUYWInO1xuXG5pbnRlcmZhY2UgQ2hhbmdlRXZlbnQge1xuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBTaXplIHtcbiAgcmVhZG9ubHkgd2lkdGg6IHN0cmluZztcbiAgcmVhZG9ubHkgaGVpZ2h0OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBIZWxwZXJzIHtcbiAgcmVhZG9ubHkgaW1hZ2VTaXplOiAodXJsOiBzdHJpbmcpID0+IFByb21pc2U8U2l6ZT47XG4gIHJlYWRvbmx5IGFkZFRvQmxvYkNhY2hlOiAoYmxvYkluZm86IEJsb2JJbmZvKSA9PiB2b2lkO1xuICByZWFkb25seSBjcmVhdGVCbG9iQ2FjaGU6IChmaWxlOiBGaWxlLCBibG9iVXJpOiBzdHJpbmcsIGRhdGFVcmw6IHN0cmluZykgPT4gQmxvYkluZm87XG4gIHJlYWRvbmx5IGFsZXJ0RXJyOiAobWVzc2FnZTogc3RyaW5nLCBjYWxsYmFjazogKCkgPT4gdm9pZCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgbm9ybWFsaXplQ3NzOiAoY3NzVGV4dDogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiBzdHJpbmc7XG4gIHJlYWRvbmx5IHBhcnNlU3R5bGU6IChjc3NUZXh0OiBzdHJpbmcpID0+IFN0eWxlTWFwO1xuICByZWFkb25seSBzZXJpYWxpemVTdHlsZTogKHN0eWxlc0FyZzogU3R5bGVNYXAsIG5hbWU/OiBzdHJpbmcpID0+IHN0cmluZztcbiAgcmVhZG9ubHkgdXBsb2FkSW1hZ2U6IChibG9iSW5mbzogQmxvYkluZm8pID0+IFByb21pc2U8VXBsb2FkUmVzdWx0Pjtcbn1cblxuaW50ZXJmYWNlIEltYWdlRGlhbG9nU3RhdGUge1xuICBwcmV2SW1hZ2U6IE9wdGlvbmFsPExpc3RWYWx1ZT47XG4gIHByZXZBbHQ6IHN0cmluZyB8IG51bGw7XG4gIG9wZW46IGJvb2xlYW47XG59XG5cbmNvbnN0IGNyZWF0ZVN0YXRlID0gKGluZm86IEltYWdlRGlhbG9nSW5mbyk6IEltYWdlRGlhbG9nU3RhdGUgPT4gKHtcbiAgcHJldkltYWdlOiBMaXN0VXRpbHMuZmluZEVudHJ5KGluZm8uaW1hZ2VMaXN0LCBpbmZvLmltYWdlLnNyYyksXG4gIHByZXZBbHQ6IGluZm8uaW1hZ2UuYWx0LFxuICBvcGVuOiB0cnVlXG59KTtcblxuY29uc3QgZnJvbUltYWdlRGF0YSA9IChpbWFnZTogSW1hZ2VEYXRhKTogSW1hZ2VEaWFsb2dEYXRhID0+ICh7XG4gIHNyYzoge1xuICAgIHZhbHVlOiBpbWFnZS5zcmMsXG4gICAgbWV0YTogeyB9XG4gIH0sXG4gIGltYWdlczogaW1hZ2Uuc3JjLFxuICBhbHQ6IGltYWdlLmFsdCxcbiAgdGl0bGU6IGltYWdlLnRpdGxlLFxuICBkaW1lbnNpb25zOiB7XG4gICAgd2lkdGg6IGltYWdlLndpZHRoLFxuICAgIGhlaWdodDogaW1hZ2UuaGVpZ2h0XG4gIH0sXG4gIGNsYXNzZXM6IGltYWdlLmNsYXNzLFxuICBjYXB0aW9uOiBpbWFnZS5jYXB0aW9uLFxuICBzdHlsZTogaW1hZ2Uuc3R5bGUsXG4gIHZzcGFjZTogaW1hZ2UudnNwYWNlLFxuICBib3JkZXI6IGltYWdlLmJvcmRlcixcbiAgaHNwYWNlOiBpbWFnZS5oc3BhY2UsXG4gIGJvcmRlcnN0eWxlOiBpbWFnZS5ib3JkZXJTdHlsZSxcbiAgZmlsZWlucHV0OiBbXSxcbiAgaXNEZWNvcmF0aXZlOiBpbWFnZS5pc0RlY29yYXRpdmVcbn0pO1xuXG5jb25zdCB0b0ltYWdlRGF0YSA9IChkYXRhOiBJbWFnZURpYWxvZ0RhdGEsIHJlbW92ZUVtcHR5QWx0OiBib29sZWFuKTogSW1hZ2VEYXRhID0+ICh7XG4gIHNyYzogZGF0YS5zcmMudmFsdWUsXG4gIGFsdDogKGRhdGEuYWx0ID09PSBudWxsIHx8IGRhdGEuYWx0Lmxlbmd0aCA9PT0gMCkgJiYgcmVtb3ZlRW1wdHlBbHQgPyBudWxsIDogZGF0YS5hbHQsXG4gIHRpdGxlOiBkYXRhLnRpdGxlLFxuICB3aWR0aDogZGF0YS5kaW1lbnNpb25zLndpZHRoLFxuICBoZWlnaHQ6IGRhdGEuZGltZW5zaW9ucy5oZWlnaHQsXG4gIGNsYXNzOiBkYXRhLmNsYXNzZXMsXG4gIHN0eWxlOiBkYXRhLnN0eWxlLFxuICBjYXB0aW9uOiBkYXRhLmNhcHRpb24sXG4gIGhzcGFjZTogZGF0YS5oc3BhY2UsXG4gIHZzcGFjZTogZGF0YS52c3BhY2UsXG4gIGJvcmRlcjogZGF0YS5ib3JkZXIsXG4gIGJvcmRlclN0eWxlOiBkYXRhLmJvcmRlcnN0eWxlLFxuICBpc0RlY29yYXRpdmU6IGRhdGEuaXNEZWNvcmF0aXZlXG59KTtcblxuY29uc3QgYWRkUHJlcGVuZFVybDIgPSAoaW5mbzogSW1hZ2VEaWFsb2dJbmZvLCBzcmNVUkw6IHN0cmluZyk6IE9wdGlvbmFsPHN0cmluZz4gPT4ge1xuICAvLyBBZGQgdGhlIHByZXBlbmRVUkxcbiAgaWYgKCEvXig/OlthLXpBLVpdKzopP1xcL1xcLy8udGVzdChzcmNVUkwpKSB7XG4gICAgcmV0dXJuIGluZm8ucHJlcGVuZFVSTC5iaW5kKChwcmVwZW5kVXJsKSA9PiB7XG4gICAgICBpZiAoc3JjVVJMLnN1YnN0cmluZygwLCBwcmVwZW5kVXJsLmxlbmd0aCkgIT09IHByZXBlbmRVcmwpIHtcbiAgICAgICAgcmV0dXJuIE9wdGlvbmFsLnNvbWUocHJlcGVuZFVybCArIHNyY1VSTCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gT3B0aW9uYWwubm9uZSgpO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBPcHRpb25hbC5ub25lKCk7XG59O1xuXG5jb25zdCBhZGRQcmVwZW5kVXJsID0gKGluZm86IEltYWdlRGlhbG9nSW5mbywgYXBpOiBBUEkpID0+IHtcbiAgY29uc3QgZGF0YSA9IGFwaS5nZXREYXRhKCk7XG4gIGFkZFByZXBlbmRVcmwyKGluZm8sIGRhdGEuc3JjLnZhbHVlKS5lYWNoKChzcmNVUkwpID0+IHtcbiAgICBhcGkuc2V0RGF0YSh7IHNyYzogeyB2YWx1ZTogc3JjVVJMLCBtZXRhOiBkYXRhLnNyYy5tZXRhIH19KTtcbiAgfSk7XG59O1xuXG5jb25zdCBmb3JtRmlsbEZyb21NZXRhMiA9IChpbmZvOiBJbWFnZURpYWxvZ0luZm8sIGRhdGE6IEltYWdlRGlhbG9nRGF0YSwgbWV0YTogSW1hZ2VNZXRhKTogdm9pZCA9PiB7XG4gIGlmIChpbmZvLmhhc0Rlc2NyaXB0aW9uICYmIFR5cGUuaXNTdHJpbmcobWV0YS5hbHQpKSB7XG4gICAgZGF0YS5hbHQgPSBtZXRhLmFsdDtcbiAgfVxuICBpZiAoaW5mby5oYXNBY2Nlc3NpYmlsaXR5T3B0aW9ucykge1xuICAgIGRhdGEuaXNEZWNvcmF0aXZlID0gbWV0YS5pc0RlY29yYXRpdmUgfHwgZGF0YS5pc0RlY29yYXRpdmUgfHwgZmFsc2U7XG4gIH1cbiAgaWYgKGluZm8uaGFzSW1hZ2VUaXRsZSAmJiBUeXBlLmlzU3RyaW5nKG1ldGEudGl0bGUpKSB7XG4gICAgZGF0YS50aXRsZSA9IG1ldGEudGl0bGU7XG4gIH1cbiAgaWYgKGluZm8uaGFzRGltZW5zaW9ucykge1xuICAgIGlmIChUeXBlLmlzU3RyaW5nKG1ldGEud2lkdGgpKSB7XG4gICAgICBkYXRhLmRpbWVuc2lvbnMud2lkdGggPSBtZXRhLndpZHRoO1xuICAgIH1cbiAgICBpZiAoVHlwZS5pc1N0cmluZyhtZXRhLmhlaWdodCkpIHtcbiAgICAgIGRhdGEuZGltZW5zaW9ucy5oZWlnaHQgPSBtZXRhLmhlaWdodDtcbiAgICB9XG4gIH1cbiAgaWYgKFR5cGUuaXNTdHJpbmcobWV0YS5jbGFzcykpIHtcbiAgICBMaXN0VXRpbHMuZmluZEVudHJ5KGluZm8uY2xhc3NMaXN0LCBtZXRhLmNsYXNzKS5lYWNoKChlbnRyeSkgPT4ge1xuICAgICAgZGF0YS5jbGFzc2VzID0gZW50cnkudmFsdWU7XG4gICAgfSk7XG4gIH1cbiAgaWYgKGluZm8uaGFzSW1hZ2VDYXB0aW9uKSB7XG4gICAgaWYgKFR5cGUuaXNCb29sZWFuKG1ldGEuY2FwdGlvbikpIHtcbiAgICAgIGRhdGEuY2FwdGlvbiA9IG1ldGEuY2FwdGlvbjtcbiAgICB9XG4gIH1cbiAgaWYgKGluZm8uaGFzQWR2VGFiKSB7XG4gICAgaWYgKFR5cGUuaXNTdHJpbmcobWV0YS5zdHlsZSkpIHtcbiAgICAgIGRhdGEuc3R5bGUgPSBtZXRhLnN0eWxlO1xuICAgIH1cbiAgICBpZiAoVHlwZS5pc1N0cmluZyhtZXRhLnZzcGFjZSkpIHtcbiAgICAgIGRhdGEudnNwYWNlID0gbWV0YS52c3BhY2U7XG4gICAgfVxuICAgIGlmIChUeXBlLmlzU3RyaW5nKG1ldGEuYm9yZGVyKSkge1xuICAgICAgZGF0YS5ib3JkZXIgPSBtZXRhLmJvcmRlcjtcbiAgICB9XG4gICAgaWYgKFR5cGUuaXNTdHJpbmcobWV0YS5oc3BhY2UpKSB7XG4gICAgICBkYXRhLmhzcGFjZSA9IG1ldGEuaHNwYWNlO1xuICAgIH1cbiAgICBpZiAoVHlwZS5pc1N0cmluZyhtZXRhLmJvcmRlcnN0eWxlKSkge1xuICAgICAgZGF0YS5ib3JkZXJzdHlsZSA9IG1ldGEuYm9yZGVyc3R5bGU7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBmb3JtRmlsbEZyb21NZXRhID0gKGluZm86IEltYWdlRGlhbG9nSW5mbywgYXBpOiBBUEkpOiB2b2lkID0+IHtcbiAgY29uc3QgZGF0YSA9IGFwaS5nZXREYXRhKCk7XG4gIGNvbnN0IG1ldGEgPSBkYXRhLnNyYy5tZXRhO1xuICBpZiAobWV0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgbmV3RGF0YSA9IE1lcmdlci5kZWVwTWVyZ2Uoe30sIGRhdGEpO1xuICAgIGZvcm1GaWxsRnJvbU1ldGEyKGluZm8sIG5ld0RhdGEsIG1ldGEpO1xuICAgIGFwaS5zZXREYXRhKG5ld0RhdGEpO1xuICB9XG59O1xuXG5jb25zdCBjYWxjdWxhdGVJbWFnZVNpemUgPSAoaGVscGVyczogSGVscGVycywgaW5mbzogSW1hZ2VEaWFsb2dJbmZvLCBzdGF0ZTogSW1hZ2VEaWFsb2dTdGF0ZSwgYXBpOiBBUEkpOiB2b2lkID0+IHtcbiAgY29uc3QgZGF0YSA9IGFwaS5nZXREYXRhKCk7XG4gIGNvbnN0IHVybCA9IGRhdGEuc3JjLnZhbHVlO1xuICBjb25zdCBtZXRhID0gZGF0YS5zcmMubWV0YSB8fCB7fTtcblxuICBpZiAoIW1ldGEud2lkdGggJiYgIW1ldGEuaGVpZ2h0ICYmIGluZm8uaGFzRGltZW5zaW9ucykge1xuICAgIGlmIChTdHJpbmdzLmlzTm90RW1wdHkodXJsKSkge1xuICAgICAgaGVscGVycy5pbWFnZVNpemUodXJsKVxuICAgICAgICAudGhlbigoc2l6ZSkgPT4ge1xuICAgICAgICAgIGlmIChzdGF0ZS5vcGVuKSB7XG4gICAgICAgICAgICBhcGkuc2V0RGF0YSh7IGRpbWVuc2lvbnM6IHNpemUgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAuY2F0Y2goKGUpID0+IGNvbnNvbGUuZXJyb3IoZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkuc2V0RGF0YSh7IGRpbWVuc2lvbnM6IHsgd2lkdGg6ICcnLCBoZWlnaHQ6ICcnIH19KTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IHVwZGF0ZUltYWdlc0Ryb3Bkb3duID0gKGluZm86IEltYWdlRGlhbG9nSW5mbywgc3RhdGU6IEltYWdlRGlhbG9nU3RhdGUsIGFwaTogQVBJKTogdm9pZCA9PiB7XG4gIGNvbnN0IGRhdGEgPSBhcGkuZ2V0RGF0YSgpO1xuICBjb25zdCBpbWFnZSA9IExpc3RVdGlscy5maW5kRW50cnkoaW5mby5pbWFnZUxpc3QsIGRhdGEuc3JjLnZhbHVlKTtcbiAgc3RhdGUucHJldkltYWdlID0gaW1hZ2U7XG4gIGFwaS5zZXREYXRhKHsgaW1hZ2VzOiBpbWFnZS5tYXAoKGVudHJ5KSA9PiBlbnRyeS52YWx1ZSkuZ2V0T3IoJycpIH0pO1xufTtcblxuY29uc3QgY2hhbmdlU3JjID0gKGhlbHBlcnM6IEhlbHBlcnMsIGluZm86IEltYWdlRGlhbG9nSW5mbywgc3RhdGU6IEltYWdlRGlhbG9nU3RhdGUsIGFwaTogQVBJKTogdm9pZCA9PiB7XG4gIGFkZFByZXBlbmRVcmwoaW5mbywgYXBpKTtcbiAgZm9ybUZpbGxGcm9tTWV0YShpbmZvLCBhcGkpO1xuICBjYWxjdWxhdGVJbWFnZVNpemUoaGVscGVycywgaW5mbywgc3RhdGUsIGFwaSk7XG4gIHVwZGF0ZUltYWdlc0Ryb3Bkb3duKGluZm8sIHN0YXRlLCBhcGkpO1xufTtcblxuY29uc3QgY2hhbmdlSW1hZ2VzID0gKGhlbHBlcnM6IEhlbHBlcnMsIGluZm86IEltYWdlRGlhbG9nSW5mbywgc3RhdGU6IEltYWdlRGlhbG9nU3RhdGUsIGFwaTogQVBJKTogdm9pZCA9PiB7XG4gIGNvbnN0IGRhdGEgPSBhcGkuZ2V0RGF0YSgpO1xuICBjb25zdCBpbWFnZSA9IExpc3RVdGlscy5maW5kRW50cnkoaW5mby5pbWFnZUxpc3QsIGRhdGEuaW1hZ2VzKTtcbiAgaW1hZ2UuZWFjaCgoaW1nKSA9PiB7XG4gICAgY29uc3QgdXBkYXRlQWx0ID0gZGF0YS5hbHQgPT09ICcnIHx8IHN0YXRlLnByZXZJbWFnZS5tYXAoKGltYWdlKSA9PiBpbWFnZS50ZXh0ID09PSBkYXRhLmFsdCkuZ2V0T3IoZmFsc2UpO1xuICAgIGlmICh1cGRhdGVBbHQpIHtcbiAgICAgIGlmIChpbWcudmFsdWUgPT09ICcnKSB7XG4gICAgICAgIGFwaS5zZXREYXRhKHsgc3JjOiBpbWcsIGFsdDogc3RhdGUucHJldkFsdCB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFwaS5zZXREYXRhKHsgc3JjOiBpbWcsIGFsdDogaW1nLnRleHQgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5zZXREYXRhKHsgc3JjOiBpbWcgfSk7XG4gICAgfVxuICB9KTtcbiAgc3RhdGUucHJldkltYWdlID0gaW1hZ2U7XG4gIGNoYW5nZVNyYyhoZWxwZXJzLCBpbmZvLCBzdGF0ZSwgYXBpKTtcbn07XG5cbmNvbnN0IGNoYW5nZUZpbGVJbnB1dCA9IChoZWxwZXJzOiBIZWxwZXJzLCBpbmZvOiBJbWFnZURpYWxvZ0luZm8sIHN0YXRlOiBJbWFnZURpYWxvZ1N0YXRlLCBhcGk6IEFQSSk6IHZvaWQgPT4ge1xuICBjb25zdCBkYXRhID0gYXBpLmdldERhdGEoKTtcbiAgYXBpLmJsb2NrKCdVcGxvYWRpbmcgaW1hZ2UnKTsgLy8gV2hhdCBtc2cgZG8gd2UgcGFzcyB0byB0aGUgbG9jaz9cbiAgQXJyLmhlYWQoZGF0YS5maWxlaW5wdXQpXG4gICAgLmZvbGQoKCkgPT4ge1xuICAgICAgYXBpLnVuYmxvY2soKTtcbiAgICB9LCAoZmlsZSkgPT4ge1xuICAgICAgY29uc3QgYmxvYlVyaTogc3RyaW5nID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcbiAgICAgIGNvbnN0IGZpbmFsaXplID0gKCkgPT4ge1xuICAgICAgICBhcGkudW5ibG9jaygpO1xuICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKGJsb2JVcmkpO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgdXBkYXRlU3JjQW5kU3dpdGNoVGFiID0gKHVybDogc3RyaW5nKSA9PiB7XG4gICAgICAgIGFwaS5zZXREYXRhKHsgc3JjOiB7IHZhbHVlOiB1cmwsIG1ldGE6IHt9fX0pO1xuICAgICAgICBhcGkuc2hvd1RhYignZ2VuZXJhbCcpO1xuICAgICAgICBjaGFuZ2VTcmMoaGVscGVycywgaW5mbywgc3RhdGUsIGFwaSk7XG4gICAgICAgIGFwaS5mb2N1cygnc3JjJyk7XG4gICAgICB9O1xuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzXG4gICAgICBVdGlscy5ibG9iVG9EYXRhVXJpKGZpbGUpLnRoZW4oKGRhdGFVcmwpID0+IHtcbiAgICAgICAgY29uc3QgYmxvYkluZm8gPSBoZWxwZXJzLmNyZWF0ZUJsb2JDYWNoZShmaWxlLCBibG9iVXJpLCBkYXRhVXJsKTtcbiAgICAgICAgaWYgKGluZm8uYXV0b21hdGljVXBsb2Fkcykge1xuICAgICAgICAgIGhlbHBlcnMudXBsb2FkSW1hZ2UoYmxvYkluZm8pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgdXBkYXRlU3JjQW5kU3dpdGNoVGFiKHJlc3VsdC51cmwpO1xuICAgICAgICAgICAgZmluYWxpemUoKTtcbiAgICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBmaW5hbGl6ZSgpO1xuICAgICAgICAgICAgaGVscGVycy5hbGVydEVycihlcnIsICgpID0+IHtcbiAgICAgICAgICAgICAgYXBpLmZvY3VzKCdmaWxlaW5wdXQnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGhlbHBlcnMuYWRkVG9CbG9iQ2FjaGUoYmxvYkluZm8pO1xuICAgICAgICAgIHVwZGF0ZVNyY0FuZFN3aXRjaFRhYihibG9iSW5mby5ibG9iVXJpKCkpO1xuICAgICAgICAgIGFwaS51bmJsb2NrKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xufTtcblxuY29uc3QgY2hhbmdlSGFuZGxlciA9IChoZWxwZXJzOiBIZWxwZXJzLCBpbmZvOiBJbWFnZURpYWxvZ0luZm8sIHN0YXRlOiBJbWFnZURpYWxvZ1N0YXRlKSA9PiAoYXBpOiBBUEksIGV2dDogQ2hhbmdlRXZlbnQpOiB2b2lkID0+IHtcbiAgaWYgKGV2dC5uYW1lID09PSAnc3JjJykge1xuICAgIGNoYW5nZVNyYyhoZWxwZXJzLCBpbmZvLCBzdGF0ZSwgYXBpKTtcbiAgfSBlbHNlIGlmIChldnQubmFtZSA9PT0gJ2ltYWdlcycpIHtcbiAgICBjaGFuZ2VJbWFnZXMoaGVscGVycywgaW5mbywgc3RhdGUsIGFwaSk7XG4gIH0gZWxzZSBpZiAoZXZ0Lm5hbWUgPT09ICdhbHQnKSB7XG4gICAgc3RhdGUucHJldkFsdCA9IGFwaS5nZXREYXRhKCkuYWx0O1xuICB9IGVsc2UgaWYgKGV2dC5uYW1lID09PSAnZmlsZWlucHV0Jykge1xuICAgIGNoYW5nZUZpbGVJbnB1dChoZWxwZXJzLCBpbmZvLCBzdGF0ZSwgYXBpKTtcbiAgfSBlbHNlIGlmIChldnQubmFtZSA9PT0gJ2lzRGVjb3JhdGl2ZScpIHtcbiAgICBhcGkuc2V0RW5hYmxlZCgnYWx0JywgIWFwaS5nZXREYXRhKCkuaXNEZWNvcmF0aXZlKTtcbiAgfVxufTtcblxuY29uc3QgY2xvc2VIYW5kbGVyID0gKHN0YXRlOiBJbWFnZURpYWxvZ1N0YXRlKSA9PiAoKTogdm9pZCA9PiB7XG4gIHN0YXRlLm9wZW4gPSBmYWxzZTtcbn07XG5cbmNvbnN0IG1ha2VEaWFsb2dCb2R5ID0gKGluZm86IEltYWdlRGlhbG9nSW5mbyk6IERpYWxvZ1R5cGUuVGFiUGFuZWxTcGVjIHwgRGlhbG9nVHlwZS5QYW5lbFNwZWMgPT4ge1xuICBpZiAoaW5mby5oYXNBZHZUYWIgfHwgaW5mby5oYXNVcGxvYWRVcmwgfHwgaW5mby5oYXNVcGxvYWRIYW5kbGVyKSB7XG4gICAgY29uc3QgdGFiUGFuZWw6IERpYWxvZ1R5cGUuVGFiUGFuZWxTcGVjID0ge1xuICAgICAgdHlwZTogJ3RhYnBhbmVsJyxcbiAgICAgIHRhYnM6IEFyci5mbGF0dGVuKFtcbiAgICAgICAgWyBNYWluVGFiLm1ha2VUYWIoaW5mbykgXSxcbiAgICAgICAgaW5mby5oYXNBZHZUYWIgPyBbIEFkdlRhYi5tYWtlVGFiKGluZm8pIF0gOiBbXSxcbiAgICAgICAgaW5mby5oYXNVcGxvYWRUYWIgJiYgKGluZm8uaGFzVXBsb2FkVXJsIHx8IGluZm8uaGFzVXBsb2FkSGFuZGxlcikgPyBbIFVwbG9hZFRhYi5tYWtlVGFiKGluZm8pIF0gOiBbXVxuICAgICAgXSlcbiAgICB9O1xuICAgIHJldHVybiB0YWJQYW5lbDtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBwYW5lbDogRGlhbG9nVHlwZS5QYW5lbFNwZWMgPSB7XG4gICAgICB0eXBlOiAncGFuZWwnLFxuICAgICAgaXRlbXM6IE1haW5UYWIubWFrZUl0ZW1zKGluZm8pXG4gICAgfTtcbiAgICByZXR1cm4gcGFuZWw7XG4gIH1cbn07XG5cbmNvbnN0IHN1Ym1pdEhhbmRsZXIgPSAoZWRpdG9yOiBFZGl0b3IsIGluZm86IEltYWdlRGlhbG9nSW5mbywgaGVscGVyczogSGVscGVycykgPT4gKGFwaTogQVBJKTogdm9pZCA9PiB7XG4gIGNvbnN0IGRhdGE6IEltYWdlRGlhbG9nRGF0YSA9IE1lcmdlci5kZWVwTWVyZ2UoZnJvbUltYWdlRGF0YShpbmZvLmltYWdlKSwgYXBpLmdldERhdGEoKSk7XG5cbiAgLy8gVGhlIGRhdGEgYXJjaGl0ZWN0dXJlIHJlbGllcyBvbiBwYXNzaW5nIGV2ZXJ5dGhpbmcgdGhyb3VnaCB0aGUgc3R5bGUgZmllbGQgZm9yIHZhbGlkYXRpb24uXG4gIC8vIFNpbmNlIHRoZSBzdHlsZSBmaWVsZCB3YXMgcmVtb3ZlZCB0aGF0IHByb2Nlc3MgbXVzdCBiZSBzaW11bGF0ZWQgb24gc3VibWl0LlxuICBjb25zdCBmaW5hbERhdGEgPSB7XG4gICAgLi4uZGF0YSxcbiAgICBzdHlsZTogZ2V0U3R5bGVWYWx1ZShoZWxwZXJzLm5vcm1hbGl6ZUNzcywgdG9JbWFnZURhdGEoZGF0YSwgZmFsc2UpKVxuICB9O1xuXG4gIGVkaXRvci5leGVjQ29tbWFuZCgnbWNlVXBkYXRlSW1hZ2UnLCBmYWxzZSwgdG9JbWFnZURhdGEoZmluYWxEYXRhLCBpbmZvLmhhc0FjY2Vzc2liaWxpdHlPcHRpb25zKSk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZmxvYXRpbmctcHJvbWlzZXNcbiAgZWRpdG9yLmVkaXRvclVwbG9hZC51cGxvYWRJbWFnZXNBdXRvKCk7XG5cbiAgYXBpLmNsb3NlKCk7XG59O1xuXG5jb25zdCBpbWFnZVNpemUgPSAoZWRpdG9yOiBFZGl0b3IpID0+ICh1cmw6IHN0cmluZyk6IFByb21pc2U8U2l6ZT4gPT4ge1xuICAvLyBJZiB0aGUgVVJMIGlzbid0IHNhZmUgdGhlbiBkb24ndCBhdHRlbXB0IHRvIGxvYWQgaXQgdG8gZ2V0IHRoZSBzaXplc1xuICBpZiAoIVV0aWxzLmlzU2FmZUltYWdlVXJsKGVkaXRvciwgdXJsKSkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoeyB3aWR0aDogJycsIGhlaWdodDogJycgfSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFV0aWxzLmdldEltYWdlU2l6ZShlZGl0b3IuZG9jdW1lbnRCYXNlVVJJLnRvQWJzb2x1dGUodXJsKSkudGhlbigoZGltZW5zaW9ucykgPT4gKHtcbiAgICAgIHdpZHRoOiBTdHJpbmcoZGltZW5zaW9ucy53aWR0aCksXG4gICAgICBoZWlnaHQ6IFN0cmluZyhkaW1lbnNpb25zLmhlaWdodClcbiAgICB9KSk7XG4gIH1cbn07XG5cbmNvbnN0IGNyZWF0ZUJsb2JDYWNoZSA9IChlZGl0b3I6IEVkaXRvcikgPT4gKGZpbGU6IEZpbGUsIGJsb2JVcmk6IHN0cmluZywgZGF0YVVybDogc3RyaW5nKTogQmxvYkluZm8gPT5cbiAgZWRpdG9yLmVkaXRvclVwbG9hZC5ibG9iQ2FjaGUuY3JlYXRlKHtcbiAgICBibG9iOiBmaWxlLFxuICAgIGJsb2JVcmksXG4gICAgbmFtZTogZmlsZS5uYW1lPy5yZXBsYWNlKC9cXC5bXlxcLl0rJC8sICcnKSxcbiAgICBmaWxlbmFtZTogZmlsZS5uYW1lLFxuICAgIGJhc2U2NDogZGF0YVVybC5zcGxpdCgnLCcpWzFdXG4gIH0pO1xuXG5jb25zdCBhZGRUb0Jsb2JDYWNoZSA9IChlZGl0b3I6IEVkaXRvcikgPT4gKGJsb2JJbmZvOiBCbG9iSW5mbyk6IHZvaWQgPT4ge1xuICBlZGl0b3IuZWRpdG9yVXBsb2FkLmJsb2JDYWNoZS5hZGQoYmxvYkluZm8pO1xufTtcblxuY29uc3QgYWxlcnRFcnIgPSAoZWRpdG9yOiBFZGl0b3IpID0+IChtZXNzYWdlOiBzdHJpbmcsIGNhbGxiYWNrOiAoKSA9PiB2b2lkKTogdm9pZCA9PiB7XG4gIGVkaXRvci53aW5kb3dNYW5hZ2VyLmFsZXJ0KG1lc3NhZ2UsIGNhbGxiYWNrKTtcbn07XG5cbmNvbnN0IG5vcm1hbGl6ZUNzcyA9IChlZGl0b3I6IEVkaXRvcikgPT4gKGNzc1RleHQ6IHN0cmluZyB8IHVuZGVmaW5lZCk6IHN0cmluZyA9PlxuICBkb05vcm1hbGl6ZUNzcyhlZGl0b3IsIGNzc1RleHQpO1xuXG5jb25zdCBwYXJzZVN0eWxlID0gKGVkaXRvcjogRWRpdG9yKSA9PiAoY3NzVGV4dDogc3RyaW5nKTogU3R5bGVNYXAgPT5cbiAgZWRpdG9yLmRvbS5wYXJzZVN0eWxlKGNzc1RleHQpO1xuXG5jb25zdCBzZXJpYWxpemVTdHlsZSA9IChlZGl0b3I6IEVkaXRvcikgPT4gKHN0eWxlc0FyZzogU3R5bGVNYXAsIG5hbWU/OiBzdHJpbmcpOiBzdHJpbmcgPT5cbiAgZWRpdG9yLmRvbS5zZXJpYWxpemVTdHlsZShzdHlsZXNBcmcsIG5hbWUpO1xuXG5jb25zdCB1cGxvYWRJbWFnZSA9IChlZGl0b3I6IEVkaXRvcikgPT4gKGJsb2JJbmZvOiBCbG9iSW5mbyk6IFByb21pc2U8VXBsb2FkUmVzdWx0PiA9PlxuICBJbWFnZVVwbG9hZGVyKGVkaXRvcikudXBsb2FkKFsgYmxvYkluZm8gXSwgZmFsc2UpLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAgICBpZiAocmVzdWx0cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgnRmFpbGVkIHRvIHVwbG9hZCBpbWFnZScpO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0c1swXS5zdGF0dXMgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVzdWx0c1swXS5lcnJvcj8ubWVzc2FnZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHRzWzBdO1xuICAgIH1cbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBEaWFsb2cgPSAoZWRpdG9yOiBFZGl0b3IpOiB7IG9wZW46ICgpID0+IHZvaWQgfSA9PiB7XG4gIGNvbnN0IGhlbHBlcnM6IEhlbHBlcnMgPSB7XG4gICAgaW1hZ2VTaXplOiBpbWFnZVNpemUoZWRpdG9yKSxcbiAgICBhZGRUb0Jsb2JDYWNoZTogYWRkVG9CbG9iQ2FjaGUoZWRpdG9yKSxcbiAgICBjcmVhdGVCbG9iQ2FjaGU6IGNyZWF0ZUJsb2JDYWNoZShlZGl0b3IpLFxuICAgIGFsZXJ0RXJyOiBhbGVydEVycihlZGl0b3IpLFxuICAgIG5vcm1hbGl6ZUNzczogbm9ybWFsaXplQ3NzKGVkaXRvciksXG4gICAgcGFyc2VTdHlsZTogcGFyc2VTdHlsZShlZGl0b3IpLFxuICAgIHNlcmlhbGl6ZVN0eWxlOiBzZXJpYWxpemVTdHlsZShlZGl0b3IpLFxuICAgIHVwbG9hZEltYWdlOiB1cGxvYWRJbWFnZShlZGl0b3IpXG4gIH07XG4gIGNvbnN0IG9wZW4gPSAoKSA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlc1xuICAgIGNvbGxlY3QoZWRpdG9yKVxuICAgICAgLnRoZW4oKGluZm86IEltYWdlRGlhbG9nSW5mbyk6IERpYWxvZ1R5cGUuRGlhbG9nU3BlYzxJbWFnZURpYWxvZ0RhdGE+ID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBjcmVhdGVTdGF0ZShpbmZvKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0aXRsZTogJ0luc2VydC9FZGl0IEltYWdlJyxcbiAgICAgICAgICBzaXplOiAnbm9ybWFsJyxcbiAgICAgICAgICBib2R5OiBtYWtlRGlhbG9nQm9keShpbmZvKSxcbiAgICAgICAgICBidXR0b25zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHR5cGU6ICdjYW5jZWwnLFxuICAgICAgICAgICAgICBuYW1lOiAnY2FuY2VsJyxcbiAgICAgICAgICAgICAgdGV4dDogJ0NhbmNlbCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHR5cGU6ICdzdWJtaXQnLFxuICAgICAgICAgICAgICBuYW1lOiAnc2F2ZScsXG4gICAgICAgICAgICAgIHRleHQ6ICdTYXZlJyxcbiAgICAgICAgICAgICAgcHJpbWFyeTogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgaW5pdGlhbERhdGE6IGZyb21JbWFnZURhdGEoaW5mby5pbWFnZSksXG4gICAgICAgICAgb25TdWJtaXQ6IHN1Ym1pdEhhbmRsZXIoZWRpdG9yLCBpbmZvLCBoZWxwZXJzKSxcbiAgICAgICAgICBvbkNoYW5nZTogY2hhbmdlSGFuZGxlcihoZWxwZXJzLCBpbmZvLCBzdGF0ZSksXG4gICAgICAgICAgb25DbG9zZTogY2xvc2VIYW5kbGVyKHN0YXRlKVxuICAgICAgICB9O1xuICAgICAgfSlcbiAgICAgIC50aGVuKGVkaXRvci53aW5kb3dNYW5hZ2VyLm9wZW4pO1xuICB9O1xuICByZXR1cm4ge1xuICAgIG9wZW5cbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBBcnIsIE9wdGlvbmFsLCBUeXBlIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0IHR5cGUgRWRpdG9yIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvRWRpdG9yJztcblxuaW1wb3J0ICogYXMgT3B0aW9ucyBmcm9tICcuLi9hcGkvT3B0aW9ucyc7XG5pbXBvcnQgeyByZWFkSW1hZ2VEYXRhRnJvbVNlbGVjdGlvbiB9IGZyb20gJy4uL2NvcmUvSW1hZ2VTZWxlY3Rpb24nO1xuaW1wb3J0IHsgTGlzdFV0aWxzIH0gZnJvbSAnLi4vY29yZS9MaXN0VXRpbHMnO1xuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnLi4vY29yZS9VdGlscyc7XG5cbmltcG9ydCB0eXBlIHsgSW1hZ2VEaWFsb2dJbmZvLCBMaXN0SXRlbSB9IGZyb20gJy4vRGlhbG9nVHlwZXMnO1xuXG5jb25zdCBjb2xsZWN0ID0gKGVkaXRvcjogRWRpdG9yKTogUHJvbWlzZTxJbWFnZURpYWxvZ0luZm8+ID0+IHtcbiAgY29uc3QgdXJsTGlzdFNhbml0aXplciA9IExpc3RVdGlscy5zYW5pdGl6ZXIoKGl0ZW0pID0+IGVkaXRvci5jb252ZXJ0VVJMKGl0ZW0udmFsdWUgfHwgaXRlbS51cmwgfHwgJycsICdzcmMnKSk7XG5cbiAgY29uc3QgZnV0dXJlSW1hZ2VMaXN0ID0gbmV3IFByb21pc2U8T3B0aW9uYWw8TGlzdEl0ZW1bXT4+KChjb21wbGV0ZXIpID0+IHtcbiAgICBVdGlscy5jcmVhdGVJbWFnZUxpc3QoZWRpdG9yLCAoaW1hZ2VMaXN0KSA9PiB7XG4gICAgICBjb21wbGV0ZXIoXG4gICAgICAgIHVybExpc3RTYW5pdGl6ZXIoaW1hZ2VMaXN0KS5tYXAoXG4gICAgICAgICAgKGl0ZW1zKSA9PiBBcnIuZmxhdHRlbihbXG4gICAgICAgICAgICBbeyB0ZXh0OiAnTm9uZScsIHZhbHVlOiAnJyB9XSxcbiAgICAgICAgICAgIGl0ZW1zXG4gICAgICAgICAgXSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc3QgY2xhc3NMaXN0ID0gTGlzdFV0aWxzLnNhbml0aXplKE9wdGlvbnMuZ2V0Q2xhc3NMaXN0KGVkaXRvcikpO1xuICBjb25zdCBoYXNBZHZUYWIgPSBPcHRpb25zLmhhc0FkdlRhYihlZGl0b3IpO1xuICBjb25zdCBoYXNVcGxvYWRUYWIgPSBPcHRpb25zLmhhc1VwbG9hZFRhYihlZGl0b3IpO1xuICBjb25zdCBoYXNVcGxvYWRVcmwgPSBPcHRpb25zLmhhc1VwbG9hZFVybChlZGl0b3IpO1xuICBjb25zdCBoYXNVcGxvYWRIYW5kbGVyID0gT3B0aW9ucy5oYXNVcGxvYWRIYW5kbGVyKGVkaXRvcik7XG4gIGNvbnN0IGltYWdlID0gcmVhZEltYWdlRGF0YUZyb21TZWxlY3Rpb24oZWRpdG9yKTtcbiAgY29uc3QgaGFzRGVzY3JpcHRpb24gPSBPcHRpb25zLmhhc0Rlc2NyaXB0aW9uKGVkaXRvcik7XG4gIGNvbnN0IGhhc0ltYWdlVGl0bGUgPSBPcHRpb25zLmhhc0ltYWdlVGl0bGUoZWRpdG9yKTtcbiAgY29uc3QgaGFzRGltZW5zaW9ucyA9IE9wdGlvbnMuaGFzRGltZW5zaW9ucyhlZGl0b3IpO1xuICBjb25zdCBoYXNJbWFnZUNhcHRpb24gPSBPcHRpb25zLmhhc0ltYWdlQ2FwdGlvbihlZGl0b3IpO1xuICBjb25zdCBoYXNBY2Nlc3NpYmlsaXR5T3B0aW9ucyA9IE9wdGlvbnMuc2hvd0FjY2Vzc2liaWxpdHlPcHRpb25zKGVkaXRvcik7XG4gIGNvbnN0IGF1dG9tYXRpY1VwbG9hZHMgPSBPcHRpb25zLmlzQXV0b21hdGljVXBsb2Fkc0VuYWJsZWQoZWRpdG9yKTtcbiAgY29uc3QgcHJlcGVuZFVSTDogT3B0aW9uYWw8c3RyaW5nPiA9IE9wdGlvbmFsLnNvbWUoT3B0aW9ucy5nZXRQcmVwZW5kVXJsKGVkaXRvcikpLmZpbHRlcihcbiAgICAocHJlVXJsKSA9PiBUeXBlLmlzU3RyaW5nKHByZVVybCkgJiYgcHJlVXJsLmxlbmd0aCA+IDApO1xuXG4gIHJldHVybiBmdXR1cmVJbWFnZUxpc3QudGhlbigoaW1hZ2VMaXN0KTogSW1hZ2VEaWFsb2dJbmZvID0+ICh7XG4gICAgaW1hZ2UsXG4gICAgaW1hZ2VMaXN0LFxuICAgIGNsYXNzTGlzdCxcbiAgICBoYXNBZHZUYWIsXG4gICAgaGFzVXBsb2FkVGFiLFxuICAgIGhhc1VwbG9hZFVybCxcbiAgICBoYXNVcGxvYWRIYW5kbGVyLFxuICAgIGhhc0Rlc2NyaXB0aW9uLFxuICAgIGhhc0ltYWdlVGl0bGUsXG4gICAgaGFzRGltZW5zaW9ucyxcbiAgICBoYXNJbWFnZUNhcHRpb24sXG4gICAgcHJlcGVuZFVSTCxcbiAgICBoYXNBY2Nlc3NpYmlsaXR5T3B0aW9ucyxcbiAgICBhdXRvbWF0aWNVcGxvYWRzXG4gIH0pKTtcbn07XG5cbmV4cG9ydCB7XG4gIGNvbGxlY3Rcbn07XG4iLCJpbXBvcnQgeyBBcnIgfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5pbXBvcnQgdHlwZSB7IERpYWxvZyB9IGZyb20gJ3RpbnltY2UvY29yZS9hcGkvdWkvVWknO1xuXG5pbXBvcnQgdHlwZSB7IEltYWdlRGlhbG9nSW5mbywgTGlzdEl0ZW0gfSBmcm9tICcuL0RpYWxvZ1R5cGVzJztcblxuY29uc3QgbWFrZUl0ZW1zID0gKGluZm86IEltYWdlRGlhbG9nSW5mbyk6IERpYWxvZy5Cb2R5Q29tcG9uZW50U3BlY1tdID0+IHtcbiAgY29uc3QgaW1hZ2VVcmwgPSB7XG4gICAgbmFtZTogJ3NyYycsXG4gICAgdHlwZTogJ3VybGlucHV0JyxcbiAgICBmaWxldHlwZTogJ2ltYWdlJyxcbiAgICBsYWJlbDogJ1NvdXJjZScsXG4gICAgcGlja2VyX3RleHQ6ICdCcm93c2UgZmlsZXMnXG4gIH07XG4gIGNvbnN0IGltYWdlTGlzdCA9IGluZm8uaW1hZ2VMaXN0Lm1hcCgoaXRlbXMpID0+ICh7XG4gICAgbmFtZTogJ2ltYWdlcycsXG4gICAgdHlwZTogJ2xpc3Rib3gnLFxuICAgIGxhYmVsOiAnSW1hZ2UgbGlzdCcsXG4gICAgaXRlbXNcbiAgfSkpO1xuICBjb25zdCBpbWFnZURlc2NyaXB0aW9uID0ge1xuICAgIG5hbWU6ICdhbHQnLFxuICAgIHR5cGU6ICdpbnB1dCcsXG4gICAgbGFiZWw6ICdBbHRlcm5hdGl2ZSBkZXNjcmlwdGlvbicsXG4gICAgZW5hYmxlZDogIShpbmZvLmhhc0FjY2Vzc2liaWxpdHlPcHRpb25zICYmIGluZm8uaW1hZ2UuaXNEZWNvcmF0aXZlKVxuICB9O1xuICBjb25zdCBpbWFnZVRpdGxlID0ge1xuICAgIG5hbWU6ICd0aXRsZScsXG4gICAgdHlwZTogJ2lucHV0JyxcbiAgICBsYWJlbDogJ0ltYWdlIHRpdGxlJ1xuICB9O1xuICBjb25zdCBpbWFnZURpbWVuc2lvbnMgPSB7XG4gICAgbmFtZTogJ2RpbWVuc2lvbnMnLFxuICAgIHR5cGU6ICdzaXplaW5wdXQnXG4gIH07XG4gIGNvbnN0IGlzRGVjb3JhdGl2ZSA9IHtcbiAgICB0eXBlOiAnbGFiZWwnLFxuICAgIGxhYmVsOiAnQWNjZXNzaWJpbGl0eScsXG4gICAgaXRlbXM6IFt7XG4gICAgICBuYW1lOiAnaXNEZWNvcmF0aXZlJyxcbiAgICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgICBsYWJlbDogJ0ltYWdlIGlzIGRlY29yYXRpdmUnXG4gICAgfV1cbiAgfTtcblxuICBpbnRlcmZhY2UgRGlhbG9nSXRlbXMge1xuICAgIHR5cGU6IHN0cmluZztcbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgaXRlbXM/OiBBcnJheTxEaWFsb2dJdGVtcyB8IExpc3RJdGVtPjtcbiAgfVxuICAvLyBUT0RPOiB0aGUgb3JpZ2luYWwgbGlzdGJveCBzdXBwb3J0ZWQgc3R5bGVkIGl0ZW1zIGJ1dCBicmlkZ2UgZG9lcyBub3Qgc2VlbSB0byBzdXBwb3J0IHRoaXNcbiAgY29uc3QgY2xhc3NMaXN0ID0gaW5mby5jbGFzc0xpc3QubWFwKChpdGVtcyk6IERpYWxvZ0l0ZW1zID0+ICh7XG4gICAgbmFtZTogJ2NsYXNzZXMnLFxuICAgIHR5cGU6ICdsaXN0Ym94JyxcbiAgICBsYWJlbDogJ0NsYXNzJyxcbiAgICBpdGVtc1xuICB9KSk7XG4gIGNvbnN0IGNhcHRpb246IERpYWxvZ0l0ZW1zID0ge1xuICAgIHR5cGU6ICdsYWJlbCcsXG4gICAgbGFiZWw6ICdDYXB0aW9uJyxcbiAgICBpdGVtczogW1xuICAgICAge1xuICAgICAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgICAgICBuYW1lOiAnY2FwdGlvbicsXG4gICAgICAgIGxhYmVsOiAnU2hvdyBjYXB0aW9uJ1xuICAgICAgfVxuICAgIF1cbiAgfTtcblxuICBjb25zdCBnZXREaWFsb2dDb250YWluZXJUeXBlID0gKHVzZUNvbHVtbnM6IGJvb2xlYW4pID0+IHVzZUNvbHVtbnMgPyB7IHR5cGU6ICdncmlkJywgY29sdW1uczogMiB9IDogeyB0eXBlOiAncGFuZWwnIH07XG5cbiAgcmV0dXJuIEFyci5mbGF0dGVuPGFueT4oW1xuICAgIFsgaW1hZ2VVcmwgXSxcbiAgICBpbWFnZUxpc3QudG9BcnJheSgpLFxuICAgIGluZm8uaGFzQWNjZXNzaWJpbGl0eU9wdGlvbnMgJiYgaW5mby5oYXNEZXNjcmlwdGlvbiA/IFsgaXNEZWNvcmF0aXZlIF0gOiBbXSxcbiAgICBpbmZvLmhhc0Rlc2NyaXB0aW9uID8gWyBpbWFnZURlc2NyaXB0aW9uIF0gOiBbXSxcbiAgICBpbmZvLmhhc0ltYWdlVGl0bGUgPyBbIGltYWdlVGl0bGUgXSA6IFtdLFxuICAgIGluZm8uaGFzRGltZW5zaW9ucyA/IFsgaW1hZ2VEaW1lbnNpb25zIF0gOiBbXSxcbiAgICBbe1xuICAgICAgLi4uZ2V0RGlhbG9nQ29udGFpbmVyVHlwZShpbmZvLmNsYXNzTGlzdC5pc1NvbWUoKSAmJiBpbmZvLmhhc0ltYWdlQ2FwdGlvbiksXG4gICAgICBpdGVtczogQXJyLmZsYXR0ZW4oW1xuICAgICAgICBjbGFzc0xpc3QudG9BcnJheSgpLFxuICAgICAgICBpbmZvLmhhc0ltYWdlQ2FwdGlvbiA/IFsgY2FwdGlvbiBdIDogW11cbiAgICAgIF0pXG4gICAgfV1cbiAgXSk7XG59O1xuXG5jb25zdCBtYWtlVGFiID0gKGluZm86IEltYWdlRGlhbG9nSW5mbyk6IERpYWxvZy5UYWJTcGVjID0+ICh7XG4gIHRpdGxlOiAnR2VuZXJhbCcsXG4gIG5hbWU6ICdnZW5lcmFsJyxcbiAgaXRlbXM6IG1ha2VJdGVtcyhpbmZvKVxufSk7XG5cbmV4cG9ydCBjb25zdCBNYWluVGFiID0ge1xuICBtYWtlVGFiLFxuICBtYWtlSXRlbXNcbn07XG4iLCJpbXBvcnQgdHlwZSB7IERpYWxvZyB9IGZyb20gJ3RpbnltY2UvY29yZS9hcGkvdWkvVWknO1xuXG5pbXBvcnQgdHlwZSB7IEltYWdlRGlhbG9nSW5mbyB9IGZyb20gJy4vRGlhbG9nVHlwZXMnO1xuXG5jb25zdCBtYWtlVGFiID0gKF9pbmZvOiBJbWFnZURpYWxvZ0luZm8pOiBEaWFsb2cuVGFiU3BlYyA9PiB7XG4gIGNvbnN0IGl0ZW1zOiBEaWFsb2cuQm9keUNvbXBvbmVudFNwZWNbXSA9IFtcbiAgICB7XG4gICAgICB0eXBlOiAnZHJvcHpvbmUnLFxuICAgICAgbmFtZTogJ2ZpbGVpbnB1dCdcbiAgICB9XG4gIF07XG4gIHJldHVybiB7XG4gICAgdGl0bGU6ICdVcGxvYWQnLFxuICAgIG5hbWU6ICd1cGxvYWQnLFxuICAgIGl0ZW1zXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgVXBsb2FkVGFiID0ge1xuICBtYWtlVGFiXG59O1xuIiwiaW1wb3J0ICogYXMgVHlwZSBmcm9tICcuLi9jb3JlL1R5cGUnO1xuaW1wb3J0ICogYXMgQXJyYXlVdGlsIGZyb20gJy4uL2NvcmUvQXJyYXlVdGlsJztcblxuLyoqIEEgd2F5IG9mIGNvbXBhcmluZyB0d28gdmFsdWVzIG9mIHRoZSBzYW1lIHR5cGUgZm9yIGVxdWFsaXR5LiAqL1xuZXhwb3J0IGludGVyZmFjZSBFcTxBPiB7XG4gIGVxOiAoeDogQSwgeTogQSkgPT4gYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGNvbnRyYW1hcCA9IDxBLCBCPiAoZXFhOiBFcTxBPiwgZjogKGI6IEIpID0+IEEpOiBFcTxCPiA9PlxuICBlcSgoeCwgeSkgPT4gZXFhLmVxKGYoeCksIGYoeSkpKTtcblxuZXhwb3J0IGNvbnN0IGVxID0gPEE+IChmOiAoeDogQSwgeTogQSkgPT4gYm9vbGVhbik6IEVxPEE+ID0+XG4gICh7IGVxOiBmIH0pO1xuXG5leHBvcnQgY29uc3QgdHJpcGxlRXE6IEVxPGFueT4gPSBlcSgoeCwgeSkgPT4geCA9PT0geSk7XG5cbmV4cG9ydCBjb25zdCBlcVN0cmluZzogRXE8c3RyaW5nPiA9IHRyaXBsZUVxO1xuXG5leHBvcnQgY29uc3QgZXFCb29sZWFuOiBFcTxib29sZWFuPiA9IHRyaXBsZUVxO1xuXG5leHBvcnQgY29uc3QgZXFOdW1iZXI6IEVxPG51bWJlcj4gPSB0cmlwbGVFcTtcblxuZXhwb3J0IGNvbnN0IGVxVW5kZWZpbmVkOiBFcTx1bmRlZmluZWQ+ID0gdHJpcGxlRXE7XG5cbmV4cG9ydCBjb25zdCBlcU51bGw6IEVxPG51bGw+ID0gdHJpcGxlRXE7XG5cbmV4cG9ydCBjb25zdCBlcUFycmF5ID0gPEE+IChlcWE6IEVxPEE+KTogRXE8QXJyYXlMaWtlPEE+PiA9PiBlcSgoeCwgeSkgPT4ge1xuICBpZiAoeC5sZW5ndGggIT09IHkubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGxlbiA9IHgubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKCFlcWEuZXEoeFtpXSwgeVtpXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59KTtcblxuLy8gVE9ETzogTWFrZSBhbiBPcmQgdHlwZWNsYXNzXG5jb25zdCBlcVNvcnRlZEFycmF5ID0gPEE+KGVxYTogRXE8QT4sIGNvbXBhcmVGbj86IChhOiBBLCBiOiBBKSA9PiBudW1iZXIpOiBFcTxBcnJheUxpa2U8QT4+ID0+XG4gIGNvbnRyYW1hcChlcUFycmF5KGVxYSksICh4cykgPT4gQXJyYXlVdGlsLnNvcnQoeHMsIGNvbXBhcmVGbikpO1xuXG5leHBvcnQgY29uc3QgZXFSZWNvcmQgPSA8QT4gKGVxYTogRXE8QT4pOiBFcTxSZWNvcmQ8c3RyaW5nLCBBPj4gPT4gZXEoKHgsIHkpID0+IHtcbiAgY29uc3Qga3ggPSBPYmplY3Qua2V5cyh4KTtcbiAgY29uc3Qga3kgPSBPYmplY3Qua2V5cyh5KTtcbiAgaWYgKCFlcVNvcnRlZEFycmF5KGVxU3RyaW5nKS5lcShreCwga3kpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGxlbiA9IGt4Lmxlbmd0aDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHEgPSBreFtpXTtcbiAgICBpZiAoIWVxYS5lcSh4W3FdLCB5W3FdKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn0pO1xuXG5leHBvcnQgY29uc3QgZXFBbnk6IEVxPGFueT4gPSBlcSgoeCwgeSkgPT4ge1xuICBpZiAoeCA9PT0geSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgY29uc3QgdHggPSBUeXBlLnR5cGVPZih4KTtcbiAgY29uc3QgdHkgPSBUeXBlLnR5cGVPZih5KTtcbiAgaWYgKHR4ICE9PSB0eSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChUeXBlLmlzRXF1YXRhYmxlVHlwZSh0eCkpIHtcbiAgICByZXR1cm4geCA9PT0geTtcblxuICB9IGVsc2UgaWYgKHR4ID09PSAnYXJyYXknKSB7XG4gICAgcmV0dXJuIGVxQXJyYXkoZXFBbnkpLmVxKHgsIHkpO1xuXG4gIH0gZWxzZSBpZiAodHggPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGVxUmVjb3JkKGVxQW55KS5lcSh4LCB5KTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn0pO1xuIiwiZXhwb3J0IGNvbnN0IG1hcCA9IDxBLCBCPih4czogQXJyYXlMaWtlPEE+LCBmOiAoYTogQSkgPT4gQik6IEJbXSA9PiB7XG4gIGNvbnN0IGxlbiA9IHhzLmxlbmd0aDtcbiAgY29uc3QgciA9IG5ldyBBcnJheShsZW4pO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIHJbaV0gPSBmKHgpO1xuICB9XG4gIHJldHVybiByO1xufTtcblxuLyoqIG1hcCBhIGZ1bmN0aW9uIG92ZXIgYW4gYXJyYXksIHRoZW4gbWFwIGFub3RoZXIgZnVuY3Rpb24gb3ZlciBldmVyeSBpdGVtIGV4Y2VwdCB0aGUgbGFzdCAqL1xuZXhwb3J0IGNvbnN0IG1hcERlbGltaXQgPSA8QSwgQj4gKHhzOiBBcnJheUxpa2U8QT4sIGY6IChhOiBBKSA9PiBCLCBkZWxpbWl0OiAoYjogQikgPT4gQik6IEJbXSA9PiB7XG4gIGNvbnN0IGxlbiA9IHhzLmxlbmd0aDtcbiAgY29uc3QgciA9IG5ldyBBcnJheShsZW4pO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbiAtIDE7IGkrKykge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICByW2ldID0gZGVsaW1pdChmKHgpKTtcbiAgfVxuICBpZiAobGVuID4gMCkge1xuICAgIHJbbGVuIC0gMV0gPSAoZih4c1tsZW4gLSAxXSkpO1xuICB9XG5cbiAgcmV0dXJuIHI7XG59O1xuXG5leHBvcnQgY29uc3Qgc29ydCA9IDxBPiAoeHM6IEFycmF5TGlrZTxBPiwgY29tcGFyZUZuPzogKGE6IEEsIGI6IEEpID0+IG51bWJlcik6IEFbXSA9PiB7XG4gIGNvbnN0IGNsb25lOiBBW10gPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh4cyk7XG4gIHJldHVybiBjbG9uZS5zb3J0KGNvbXBhcmVGbik7XG59O1xuIiwiZXhwb3J0IGNvbnN0IHR5cGVPZiA9ICh4OiBhbnkpID0+IHtcbiAgaWYgKHggPT09IG51bGwpIHtcbiAgICByZXR1cm4gJ251bGwnO1xuICB9XG4gIGlmICh4ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gJ3VuZGVmaW5lZCc7XG4gIH1cbiAgY29uc3QgdCA9IHR5cGVvZiB4O1xuICBpZiAodCA9PT0gJ29iamVjdCcgJiYgKEFycmF5LnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKHgpIHx8IHguY29uc3RydWN0b3IgJiYgeC5jb25zdHJ1Y3Rvci5uYW1lID09PSAnQXJyYXknKSkge1xuICAgIHJldHVybiAnYXJyYXknO1xuICB9XG4gIGlmICh0ID09PSAnb2JqZWN0JyAmJiAoU3RyaW5nLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKHgpIHx8IHguY29uc3RydWN0b3IgJiYgeC5jb25zdHJ1Y3Rvci5uYW1lID09PSAnU3RyaW5nJykpIHtcbiAgICByZXR1cm4gJ3N0cmluZyc7XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG5jb25zdCBpc1R5cGUgPSA8VD4odHlwZTogc3RyaW5nKSA9PiAodmFsdWU6IGFueSk6IHZhbHVlIGlzIFQgPT4gdHlwZU9mKHZhbHVlKSA9PT0gdHlwZTtcblxuZXhwb3J0IGNvbnN0IGlzU3RyaW5nID0gaXNUeXBlPHN0cmluZz4oJ3N0cmluZycpO1xuZXhwb3J0IGNvbnN0IGlzT2JqZWN0ID0gaXNUeXBlPE9iamVjdD4oJ29iamVjdCcpO1xuZXhwb3J0IGNvbnN0IGlzQXJyYXkgPSBpc1R5cGU8QXJyYXk8dW5rbm93bj4+KCdhcnJheScpO1xuZXhwb3J0IGNvbnN0IGlzTnVsbCA9IGlzVHlwZTxudWxsPignbnVsbCcpO1xuZXhwb3J0IGNvbnN0IGlzQm9vbGVhbiA9IGlzVHlwZTxib29sZWFuPignYm9vbGVhbicpO1xuZXhwb3J0IGNvbnN0IGlzVW5kZWZpbmVkID0gaXNUeXBlPHVuZGVmaW5lZD4oJ3VuZGVmaW5lZCcpO1xuZXhwb3J0IGNvbnN0IGlzRnVuY3Rpb24gPSBpc1R5cGU8RnVuY3Rpb24+KCdmdW5jdGlvbicpO1xuZXhwb3J0IGNvbnN0IGlzTnVtYmVyID0gaXNUeXBlPG51bWJlcj4oJ251bWJlcicpO1xuXG5leHBvcnQgY29uc3QgaXNFcXVhdGFibGVUeXBlID0gKHg6IHN0cmluZyk6IGJvb2xlYW4gPT5cbiAgWyAndW5kZWZpbmVkJywgJ2Jvb2xlYW4nLCAnbnVtYmVyJywgJ3N0cmluZycsICdmdW5jdGlvbicsICd4bWwnLCAnbnVsbCcgXS5pbmRleE9mKHgpICE9PSAtMTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcbiAgICAgICAgaWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuICAgICAgICB9XG4gICAgfVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydiA9ICgpID0+IChcIjEuNS4yXCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydWlkID0gXCJidW5kbGVyPXJzcGFja0AxLjUuMlwiO1xuIiwiaW1wb3J0IFBsdWdpbiBmcm9tICcuL1BsdWdpbic7XG5cblBsdWdpbigpO1xuXG4vKiogKioqKipcbiAqIERPIE5PVCBFWFBPUlQgQU5ZVEhJTkdcbiAqXG4gKiBJRiBZT1UgRE8gUk9MTFVQIFdJTEwgTEVBVkUgQSBHTE9CQUwgT04gVEhFIFBBR0VcbiAqKioqKioqL1xuIl0sIm5hbWVzIjpbIkVxIiwiRnVuIiwiT3B0aW9uYWwiLCJUeXBlIiwibmF0aXZlU2xpY2UiLCJBcnJheSIsIm5hdGl2ZUluZGV4T2YiLCJuYXRpdmVQdXNoIiwicmF3SW5kZXhPZiIsInRzIiwidCIsImluZGV4T2YiLCJ4cyIsIngiLCJyIiwiY29udGFpbnMiLCJleGlzdHMiLCJwcmVkIiwiaSIsImxlbiIsInJhbmdlIiwibnVtIiwiZiIsImNodW5rIiwiYXJyYXkiLCJzaXplIiwicyIsIm1hcCIsImVhY2giLCJlYWNociIsInBhcnRpdGlvbiIsInBhc3MiLCJmYWlsIiwiYXJyIiwiZmlsdGVyIiwiZ3JvdXBCeSIsIndhc1R5cGUiLCJncm91cCIsInR5cGUiLCJmb2xkciIsImFjYyIsImZvbGRsIiwiZmluZFVudGlsIiwidW50aWwiLCJmaW5kIiwiZmluZEluZGV4IiwiZmluZExhc3RJbmRleCIsImZsYXR0ZW4iLCJFcnJvciIsImJpbmQiLCJmb3JhbGwiLCJlcXVhbCIsImExIiwiYTIiLCJlcSIsInJldmVyc2UiLCJkaWZmZXJlbmNlIiwibWFwVG9PYmplY3QiLCJTdHJpbmciLCJwdXJlIiwic29ydCIsImNvbXBhcmF0b3IiLCJjb3B5IiwiZ2V0IiwiaGVhZCIsImxhc3QiLCJmcm9tIiwiZmluZE1hcCIsInVuaXF1ZSIsImlzRHVwbGljYXRlZCIsIm5vb3AiLCJub2FyZyIsImNvbXBvc2UiLCJmYSIsImZiIiwiYXJncyIsImNvbXBvc2UxIiwiZmJjIiwiZmFiIiwiYSIsImNvbnN0YW50IiwidmFsdWUiLCJpZGVudGl0eSIsInRyaXBsZUVxdWFscyIsImIiLCJjdXJyeSIsImZuIiwiaW5pdGlhbEFyZ3MiLCJyZXN0QXJncyIsImFsbCIsIm5vdCIsImRpZSIsIm1zZyIsImFwcGx5IiwiY2FsbCIsIm5ldmVyIiwiYWx3YXlzIiwid2Vha2VuIiwicGlwZSIsImFiIiwiYmMiLCJjZCIsImRlIiwiZWYiLCJmZyIsImdoIiwiYyIsImQiLCJlIiwiZyIsIkdsb2JhbCIsIndpbmRvdyIsIkZ1bmN0aW9uIiwiT2JqIiwic2hhbGxvdyIsIm9sZCIsIm51IiwiZGVlcCIsImJvdGhPYmplY3RzIiwiZGVlcE1lcmdlIiwiYmFzZU1lcmdlIiwibWVyZ2VyIiwib2JqZWN0cyIsInJldCIsImoiLCJjdXJPYmplY3QiLCJrZXkiLCJtZXJnZSIsImtleXMiLCJPYmplY3QiLCJoYXNPd25Qcm9wZXJ0eSIsIm9iaiIsInByb3BzIiwiayIsInR1cGxlTWFwIiwidHVwbGUiLCJvYmpBY2MiLCJpbnRlcm5hbEZpbHRlciIsIm9uVHJ1ZSIsIm9uRmFsc2UiLCJiaWZpbHRlciIsIm1hcFRvQXJyYXkiLCJuYW1lIiwidmFsdWVzIiwiaGFzIiwiaGFzTm9uTnVsbGFibGVLZXkiLCJ1bmRlZmluZWQiLCJpc0VtcHR5IiwidGFnIiwib25Ob25lIiwib25Tb21lIiwibWFwcGVyIiwiYmluZGVyIiwicHJlZGljYXRlIiwicmVwbGFjZW1lbnQiLCJ0aHVuayIsIm1lc3NhZ2UiLCJ3b3JrZXIiLCJwYXRoIiwicGFydHMiLCJzY29wZSIsIm8iLCJyZXNvbHZlIiwicCIsInN0ZXAiLCJwYXJ0IiwiZm9yZ2UiLCJ0YXJnZXQiLCJuYW1lc3BhY2UiLCJTdHJBcHBlbmQiLCJjaGVja1JhbmdlIiwic3RyIiwic3Vic3RyIiwic3RhcnQiLCJzdXBwbGFudCIsImlzU3RyaW5nT3JOdW1iZXIiLCJmdWxsTWF0Y2giLCJyZW1vdmVMZWFkaW5nIiwicHJlZml4Iiwic3RhcnRzV2l0aCIsInJlbW92ZVRyYWlsaW5nIiwic3VmZml4IiwiZW5kc1dpdGgiLCJlbnN1cmVMZWFkaW5nIiwiZW5zdXJlVHJhaWxpbmciLCJlbmQiLCJpZHgiLCJjYXBpdGFsaXplIiwiYmxhbmsiLCJ0cmltIiwibFRyaW0iLCJyVHJpbSIsImlzTm90RW1wdHkiLCJyZXBlYXQiLCJjb3VudCIsImZyb21Db2RlUG9pbnQiLCJ0b0ludCIsInJhZGl4IiwicGFyc2VJbnQiLCJpc05hTiIsInRvRmxvYXQiLCJwYXJzZUZsb2F0IiwiZ2V0UHJvdG90eXBlT2YiLCJoYXNQcm90byIsInYiLCJjb25zdHJ1Y3RvciIsInR5cGVPZiIsInByb3RvIiwiaXNUeXBlIiwiaXNTaW1wbGVUeXBlIiwiaXMiLCJpc09iamVjdCIsImlzU3RyaW5nIiwiaXNQbGFpbk9iamVjdCIsImlzQXJyYXkiLCJpc051bGwiLCJpc0Jvb2xlYW4iLCJpc1VuZGVmaW5lZCIsImlzTnVsbGFibGUiLCJpc05vbk51bGxhYmxlIiwiaXNGdW5jdGlvbiIsImlzTnVtYmVyIiwiaXNBcnJheU9mIiwiaXNQcm9taXNlTGlrZSIsImFkZFRvU3RhcnQiLCJhZGRUb0VuZCIsInJlbW92ZUZyb21TdGFydCIsIm51bUNoYXJzIiwicmVtb3ZlRnJvbUVuZCIsIlJlc29sdmUiLCJzYW5kSFRNTEVsZW1lbnQiLCJpc1Byb3RvdHlwZU9mIiwidW5zYWZlIiwiZ2V0T3JEaWUiLCJhY3R1YWwiLCJBVFRSSUJVVEUiLCJDREFUQV9TRUNUSU9OIiwiQ09NTUVOVCIsIkRPQ1VNRU5UIiwiRE9DVU1FTlRfVFlQRSIsIkRPQ1VNRU5UX0ZSQUdNRU5UIiwiRUxFTUVOVCIsIlRFWFQiLCJQUk9DRVNTSU5HX0lOU1RSVUNUSU9OIiwiRU5USVRZX1JFRkVSRU5DRSIsIkVOVElUWSIsIk5PVEFUSU9OIiwiZnJvbUh0bWwiLCJodG1sIiwiZG9jIiwiZG9jdW1lbnQiLCJkaXYiLCJjb25zb2xlIiwiZnJvbURvbSIsImZyb21UYWciLCJub2RlIiwiZnJvbVRleHQiLCJ0ZXh0IiwiZnJvbVBvaW50IiwiZG9jRWxtIiwieSIsIlN1Z2FyRWxlbWVudCIsIlNhbmRIVE1MRWxlbWVudCIsIk5vZGVUeXBlcyIsImVsZW1lbnQiLCJpc0NvbW1lbnQiLCJpc0hUTUxFbGVtZW50IiwiaXNFbGVtZW50IiwiaXNUZXh0IiwiaXNEb2N1bWVudCIsImlzRG9jdW1lbnRGcmFnbWVudCIsImlzVGFnIiwiQXJyIiwiU3VnYXJOb2RlIiwicmF3U2V0IiwiZG9tIiwic2V0Iiwic2V0QWxsIiwiYXR0cnMiLCJzZXRPcHRpb25zIiwicmVtb3ZlIiwiZ2V0T3B0IiwiaGFzTm9uZSIsImNsb25lIiwiYXR0ciIsInRyYW5zZmVyT25lIiwic291cmNlIiwiZGVzdGluYXRpb24iLCJzcmNWYWx1ZSIsInRyYW5zZmVyIiwiUGx1Z2luTWFuYWdlciIsIkNvbW1hbmRzIiwiT3B0aW9ucyIsIkZpbHRlckNvbnRlbnQiLCJCdXR0b25zIiwiZWRpdG9yIiwiaW5zZXJ0T3JVcGRhdGVJbWFnZSIsIkRpYWxvZyIsInJlZ2lzdGVyIiwiX3VpIiwiZGF0YSIsIlN0cmluZ3MiLCJvcHRpb24iLCJyZWdpc3Rlck9wdGlvbiIsInZhbGlkIiwiaGFzRGltZW5zaW9ucyIsImhhc0FkdlRhYiIsImhhc1VwbG9hZFRhYiIsImdldFByZXBlbmRVcmwiLCJnZXRDbGFzc0xpc3QiLCJoYXNEZXNjcmlwdGlvbiIsImhhc0ltYWdlVGl0bGUiLCJoYXNJbWFnZUNhcHRpb24iLCJnZXRJbWFnZUxpc3QiLCJzaG93QWNjZXNzaWJpbGl0eU9wdGlvbnMiLCJpc0F1dG9tYXRpY1VwbG9hZHNFbmFibGVkIiwiaGFzVXBsb2FkVXJsIiwiaGFzVXBsb2FkSGFuZGxlciIsIlRvb2xzIiwiaGFzSW1hZ2VDbGFzcyIsImNsYXNzTmFtZSIsInRvZ2dsZUNvbnRlbnRFZGl0YWJsZVN0YXRlIiwic3RhdGUiLCJub2RlcyIsInRvZ2dsZUNvbnRlbnRFZGl0YWJsZSIsInNldHVwIiwiQXR0cmlidXRlIiwiRE9NVXRpbHMiLCJVdGlscyIsIkRPTSIsImdldEhzcGFjZSIsImltYWdlIiwiZ2V0VnNwYWNlIiwiZ2V0Qm9yZGVyIiwiZ2V0QXR0cmliIiwiaGFzQ2FwdGlvbiIsInVwZGF0ZUF0dHJpYiIsIndyYXBJbkZpZ3VyZSIsImZpZ3VyZUVsbSIsInJlbW92ZUZpZ3VyZSIsInRvZ2dsZUNhcHRpb24iLCJub3JtYWxpemVTdHlsZSIsIm5vcm1hbGl6ZUNzcyIsImF0dHJWYWx1ZSIsInNldFNpemUiLCJzdHlsZXMiLCJnZXRTaXplIiwic2V0SHNwYWNlIiwicHhWYWx1ZSIsInNldFZzcGFjZSIsInNldEJvcmRlciIsInNldEJvcmRlclN0eWxlIiwiZ2V0Qm9yZGVyU3R5bGUiLCJpc0ZpZ3VyZSIsImVsbSIsImlzSW1hZ2UiLCJnZXRJc0RlY29yYXRpdmUiLCJhbHQiLCJyb2xlIiwiaGFzQWx0IiwiZ2V0QWx0IiwiZGVmYXVsdERhdGEiLCJnZXRTdHlsZVZhbHVlIiwiY3JlYXRlIiwid3JpdGUiLCJzZXRBbHQiLCJmaWd1cmUiLCJyZWFkIiwidXBkYXRlUHJvcCIsIm9sZERhdGEiLCJuZXdEYXRhIiwiaXNEZWNvcmF0aXZlIiwic3VnYXJJbWFnZSIsInVwZGF0ZUFsdCIsIm5vcm1hbGl6ZWQiLCJfbmFtZSIsIl92YWx1ZSIsImNzc1RleHQiLCJjc3MiLCJtZXJnZWRDc3MiLCJjb21wcmVzc2VkIiwiZ2V0U2VsZWN0ZWRJbWFnZSIsImltZ0VsbSIsInNwbGl0VGV4dEJsb2NrIiwidGV4dEJsb2NrRWxlbWVudHMiLCJfIiwicGFyZW50RWxtIiwidGV4dEJsb2NrIiwicmVhZEltYWdlRGF0YUZyb21TZWxlY3Rpb24iLCJpbnNlcnRJbWFnZUF0Q2FyZXQiLCJpbnNlcnRlZEVsbSIsInN5bmNTcmNBdHRyIiwiZGVsZXRlSW1hZ2UiLCJ3cml0ZUltYWdlRGF0YVRvU2VsZWN0aW9uIiwic2FuaXRpemVJbWFnZURhdGEiLCJzcmMiLCJwYXJ0aWFsRGF0YSIsInNlbGVjdGVkSW1hZ2VEYXRhIiwic2FuaXRpemVkRGF0YSIsImdldFZhbHVlIiwiaXRlbSIsImdldFRleHQiLCJzYW5pdGl6ZUxpc3QiLCJsaXN0IiwiZXh0cmFjdFZhbHVlIiwib3V0IiwiaXRlbXMiLCJzYW5pdGl6ZXIiLCJleHRyYWN0b3IiLCJzYW5pdGl6ZSIsImlzR3JvdXAiLCJmaW5kRW50cnlEZWxlZ2F0ZSIsImZpbmRFbnRyeSIsIm9wdExpc3QiLCJMaXN0VXRpbHMiLCJVUkkiLCJwYXJzZUludEFuZEdldE1heCIsInZhbDEiLCJ2YWwyIiwiTWF0aCIsImdldEltYWdlU2l6ZSIsInVybCIsIlByb21pc2UiLCJjYWxsYmFjayIsImltZyIsImRvbmUiLCJkaW1lbnNpb25zIiwid2lkdGgiLCJoZWlnaHQiLCJzdHlsZSIsInJlbW92ZVBpeGVsU3VmZml4IiwiYWRkUGl4ZWxTdWZmaXgiLCJtZXJnZU1hcmdpbnMiLCJzcGxpdE1hcmdpbiIsImNyZWF0ZUltYWdlTGlzdCIsImltYWdlTGlzdCIsImZldGNoIiwicmVzIiwid2FpdExvYWRJbWFnZSIsInNlbGVjdEltYWdlIiwiYmxvYlRvRGF0YVVyaSIsImJsb2IiLCJyZWplY3QiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwiaXNQbGFjZWhvbGRlckltYWdlIiwiaXNTYWZlSW1hZ2VVcmwiLCJnZXRPcHRpb24iLCJtYWtlVGFiIiwiX2luZm8iLCJBZHZUYWIiLCJJbWFnZVNlbGVjdGlvbiIsIm9uU2V0dXBFZGl0YWJsZSIsImFwaSIsIm5vZGVDaGFuZ2VkIiwiYnV0dG9uQXBpIiwidW5iaW5kU2VsZWN0b3JDaGFuZ2VkIiwidW5iaW5kRWRpdGFibGUiLCJNZXJnZXIiLCJJbWFnZVVwbG9hZGVyIiwiZG9Ob3JtYWxpemVDc3MiLCJjb2xsZWN0IiwiTWFpblRhYiIsIlVwbG9hZFRhYiIsImNyZWF0ZVN0YXRlIiwiaW5mbyIsImZyb21JbWFnZURhdGEiLCJ0b0ltYWdlRGF0YSIsInJlbW92ZUVtcHR5QWx0IiwiYWRkUHJlcGVuZFVybDIiLCJzcmNVUkwiLCJwcmVwZW5kVXJsIiwiYWRkUHJlcGVuZFVybCIsImZvcm1GaWxsRnJvbU1ldGEyIiwibWV0YSIsImVudHJ5IiwiZm9ybUZpbGxGcm9tTWV0YSIsImNhbGN1bGF0ZUltYWdlU2l6ZSIsImhlbHBlcnMiLCJ1cGRhdGVJbWFnZXNEcm9wZG93biIsImNoYW5nZVNyYyIsImNoYW5nZUltYWdlcyIsImNoYW5nZUZpbGVJbnB1dCIsImZpbGUiLCJibG9iVXJpIiwiVVJMIiwiZmluYWxpemUiLCJ1cGRhdGVTcmNBbmRTd2l0Y2hUYWIiLCJkYXRhVXJsIiwiYmxvYkluZm8iLCJyZXN1bHQiLCJlcnIiLCJjaGFuZ2VIYW5kbGVyIiwiZXZ0IiwiY2xvc2VIYW5kbGVyIiwibWFrZURpYWxvZ0JvZHkiLCJ0YWJQYW5lbCIsInBhbmVsIiwic3VibWl0SGFuZGxlciIsImZpbmFsRGF0YSIsImltYWdlU2l6ZSIsImNyZWF0ZUJsb2JDYWNoZSIsImFkZFRvQmxvYkNhY2hlIiwiYWxlcnRFcnIiLCJwYXJzZVN0eWxlIiwic2VyaWFsaXplU3R5bGUiLCJzdHlsZXNBcmciLCJ1cGxvYWRJbWFnZSIsInJlc3VsdHMiLCJvcGVuIiwidXJsTGlzdFNhbml0aXplciIsImZ1dHVyZUltYWdlTGlzdCIsImNvbXBsZXRlciIsImNsYXNzTGlzdCIsImhhc0FjY2Vzc2liaWxpdHlPcHRpb25zIiwiYXV0b21hdGljVXBsb2FkcyIsInByZXBlbmRVUkwiLCJwcmVVcmwiLCJtYWtlSXRlbXMiLCJpbWFnZVVybCIsImltYWdlRGVzY3JpcHRpb24iLCJpbWFnZVRpdGxlIiwiaW1hZ2VEaW1lbnNpb25zIiwiY2FwdGlvbiIsImdldERpYWxvZ0NvbnRhaW5lclR5cGUiLCJ1c2VDb2x1bW5zIiwiUGx1Z2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsNkRBQWUsTUFBTSxFQUFDO0FBQ2Y7Ozs7Ozs7Ozs7Ozs7O0FDSFA7O0FBRUEsNkRBQWUsTUFBTSxFQUFDO0FBQ2Y7Ozs7Ozs7Ozs7Ozs7O0FDSFA7O0FBRUEsNkRBQWUsTUFBTSxFQUFDO0FBQ2Y7Ozs7Ozs7Ozs7Ozs7O0FDSFA7O0FBRUEsNkRBQWUsTUFBTSxFQUFDO0FBQ2Y7Ozs7Ozs7Ozs7Ozs7O0FDSFA7O0FBRUEsNkRBQWUsTUFBTSxFQUFDO0FBQ2Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0g2QjtBQUVQO0FBQ1M7QUFDUDtBQU8vQixNQUFNSSxjQUFjQyxNQUFNLFNBQVMsQ0FBQyxLQUFLO0FBQ3pDLE1BQU1DLGdCQUFnQkQsTUFBTSxTQUFTLENBQUMsT0FBTztBQUM3QyxNQUFNRSxhQUFhRixNQUFNLFNBQVMsQ0FBQyxJQUFJO0FBRXZDLE1BQU1HLGFBQWEsQ0FBS0MsSUFBa0JDLElBQ3hDSixjQUFjLElBQUksQ0FBQ0csSUFBSUM7QUFFbEIsTUFBTUMsVUFBVSxDQUFVQyxJQUFrQkM7SUFDakQsd0ZBQXdGO0lBQ3hGLE1BQU1DLElBQUlOLFdBQVdJ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