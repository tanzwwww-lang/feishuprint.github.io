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
"./lib/globals/tinymce/core/api/dom/TreeWalker.js": 
/*!********************************************************!*\
  !*** ./lib/globals/tinymce/core/api/dom/TreeWalker.js ***!
  \********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  TreeWalker: () => (TreeWalker),
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
var global = tinymce.util.Tools.resolve('tinymce.dom.TreeWalker');

/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (global);
var TreeWalker = global;


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
"../katamari/src/main/ts/ephox/katamari/api/Optionals.ts": 
/*!***************************************************************!*\
  !*** ../katamari/src/main/ts/ephox/katamari/api/Optionals.ts ***!
  \***************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  bindFrom: () => (bindFrom),
  cat: () => (cat),
  equals: () => (equals),
  findMap: () => (findMap),
  flatten: () => (flatten),
  is: () => (is),
  lift2: () => (lift2),
  lift3: () => (lift3),
  lift4: () => (lift4),
  lift5: () => (lift5),
  mapFrom: () => (mapFrom),
  sequence: () => (sequence),
  someIf: () => (someIf),
  traverse: () => (traverse)
});
/* ESM import */var _Arr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Arr */ "../katamari/src/main/ts/ephox/katamari/api/Arr.ts");
/* ESM import */var _Fun__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Fun */ "../katamari/src/main/ts/ephox/katamari/api/Fun.ts");
/* ESM import */var _Optional__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Optional */ "../katamari/src/main/ts/ephox/katamari/api/Optional.ts");



/**
 * **Is** the value stored inside this Optional object equal to `rhs`?
 */ const is = (lhs, rhs, comparator = _Fun__WEBPACK_IMPORTED_MODULE_0__.tripleEquals)=>lhs.exists((left)=>comparator(left, rhs));
/**
 * Are these two Optional objects equal? Equality here means either they're both
 * `Some` (and the values are equal under the comparator) or they're both `None`.
 */ const equals = (lhs, rhs, comparator = _Fun__WEBPACK_IMPORTED_MODULE_0__.tripleEquals)=>lift2(lhs, rhs, comparator).getOr(lhs.isNone() && rhs.isNone());
const cat = (arr)=>{
    const r = [];
    const push = (x)=>{
        r.push(x);
    };
    for(let i = 0; i < arr.length; i++){
        arr[i].each(push);
    }
    return r;
};
const sequence = (arr)=>{
    const r = [];
    for(let i = 0; i < arr.length; i++){
        const x = arr[i];
        if (x.isSome()) {
            r.push(x.getOrDie());
        } else {
            return _Optional__WEBPACK_IMPORTED_MODULE_1__.Optional.none();
        }
    }
    return _Optional__WEBPACK_IMPORTED_MODULE_1__.Optional.some(r);
};
/** @deprecated Use Arr.findMap instead. */ const findMap = _Arr__WEBPACK_IMPORTED_MODULE_2__.findMap;
/** Map each element of an array to an Optional and collect the results.
 *  If all results are "some", return Optional.some of the results.
 *  If any result is "none", return Optional.none
 */ const traverse = (arr, f)=>sequence(_Arr__WEBPACK_IMPORTED_MODULE_2__.map(arr, f));
/*
Notes on the lift functions:
- We used to have a generic liftN, but we were concerned about its type-safety, and the below variants were faster in microbenchmarks.
- The getOrDie calls are partial functions, but are checked beforehand. This is faster and more convenient (but less safe) than folds.
- && is used instead of a loop for simplicity and performance.
*/ const lift2 = (oa, ob, f)=>oa.isSome() && ob.isSome() ? _Optional__WEBPACK_IMPORTED_MODULE_1__.Optional.some(f(oa.getOrDie(), ob.getOrDie())) : _Optional__WEBPACK_IMPORTED_MODULE_1__.Optional.none();
const lift3 = (oa, ob, oc, f)=>oa.isSome() && ob.isSome() && oc.isSome() ? _Optional__WEBPACK_IMPORTED_MODULE_1__.Optional.some(f(oa.getOrDie(), ob.getOrDie(), oc.getOrDie())) : _Optional__WEBPACK_IMPORTED_MODULE_1__.Optional.none();
const lift4 = (oa, ob, oc, od, f)=>oa.isSome() && ob.isSome() && oc.isSome() && od.isSome() ? _Optional__WEBPACK_IMPORTED_MODULE_1__.Optional.some(f(oa.getOrDie(), ob.getOrDie(), oc.getOrDie(), od.getOrDie())) : _Optional__WEBPACK_IMPORTED_MODULE_1__.Optional.none();
const lift5 = (oa, ob, oc, od, oe, f)=>oa.isSome() && ob.isSome() && oc.isSome() && od.isSome() && oe.isSome() ? _Optional__WEBPACK_IMPORTED_MODULE_1__.Optional.some(f(oa.getOrDie(), ob.getOrDie(), oc.getOrDie(), od.getOrDie(), oe.getOrDie())) : _Optional__WEBPACK_IMPORTED_MODULE_1__.Optional.none();
const mapFrom = (a, f)=>a !== undefined && a !== null ? _Optional__WEBPACK_IMPORTED_MODULE_1__.Optional.some(f(a)) : _Optional__WEBPACK_IMPORTED_MODULE_1__.Optional.none();
const bindFrom = (a, f)=>a !== undefined && a !== null ? f(a) : _Optional__WEBPACK_IMPORTED_MODULE_1__.Optional.none();
const flatten = (oot)=>oot.bind(_Fun__WEBPACK_IMPORTED_MODULE_0__.identity);
// This can help with type inference, by specifying the type param on the none case, so the caller doesn't have to.
const someIf = (b, a)=>b ? _Optional__WEBPACK_IMPORTED_MODULE_1__.Optional.some(a) : _Optional__WEBPACK_IMPORTED_MODULE_1__.Optional.none();


}),
"../katamari/src/main/ts/ephox/katamari/api/Singleton.ts": 
/*!***************************************************************!*\
  !*** ../katamari/src/main/ts/ephox/katamari/api/Singleton.ts ***!
  \***************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  api: () => (api),
  destroyable: () => (destroyable),
  repeatable: () => (repeatable),
  unbindable: () => (unbindable),
  value: () => (value)
});
/* ESM import */var _Cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cell */ "../katamari/src/main/ts/ephox/katamari/api/Cell.ts");
/* ESM import */var _Fun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Fun */ "../katamari/src/main/ts/ephox/katamari/api/Fun.ts");
/* ESM import */var _Optional__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Optional */ "../katamari/src/main/ts/ephox/katamari/api/Optional.ts");



const singleton = (doRevoke)=>{
    const subject = (0,_Cell__WEBPACK_IMPORTED_MODULE_0__.Cell)(_Optional__WEBPACK_IMPORTED_MODULE_1__.Optional.none());
    const revoke = ()=>subject.get().each(doRevoke);
    const clear = ()=>{
        revoke();
        subject.set(_Optional__WEBPACK_IMPORTED_MODULE_1__.Optional.none());
    };
    const isSet = ()=>subject.get().isSome();
    const get = ()=>subject.get();
    const set = (s)=>{
        revoke();
        subject.set(_Optional__WEBPACK_IMPORTED_MODULE_1__.Optional.some(s));
    };
    return {
        clear,
        isSet,
        get,
        set
    };
};
const repeatable = (delay)=>{
    const intervalId = (0,_Cell__WEBPACK_IMPORTED_MODULE_0__.Cell)(_Optional__WEBPACK_IMPORTED_MODULE_1__.Optional.none());
    const revoke = ()=>intervalId.get().each((id)=>clearInterval(id));
    const clear = ()=>{
        revoke();
        intervalId.set(_Optional__WEBPACK_IMPORTED_MODULE_1__.Optional.none());
    };
    const isSet = ()=>intervalId.get().isSome();
    const get = ()=>intervalId.get();
    const set = (functionToRepeat)=>{
        revoke();
        intervalId.set(_Optional__WEBPACK_IMPORTED_MODULE_1__.Optional.some(setInterval(functionToRepeat, delay)));
    };
    return {
        clear,
        isSet,
        get,
        set
    };
};
const destroyable = ()=>singleton((s)=>s.destroy());
const unbindable = ()=>singleton((s)=>s.unbind());
const api = ()=>{
    const subject = destroyable();
    const run = (f)=>subject.get().each(f);
    return {
        ...subject,
        run
    };
};
const value = ()=>{
    const subject = singleton(_Fun__WEBPACK_IMPORTED_MODULE_2__.noop);
    const on = (f)=>subject.get().each(f);
    return {
        ...subject,
        on
    };
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
"./src/plugins/link/main/ts/Plugin.ts": 
/*!********************************************!*\
  !*** ./src/plugins/link/main/ts/Plugin.ts ***!
  \********************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var tinymce_core_api_PluginManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/PluginManager */ "./lib/globals/tinymce/core/api/PluginManager.js");
/* ESM import */var _api_Commands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/Commands */ "./src/plugins/link/main/ts/api/Commands.ts");
/* ESM import */var _api_Options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/Options */ "./src/plugins/link/main/ts/api/Options.ts");
/* ESM import */var _core_Keyboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/Keyboard */ "./src/plugins/link/main/ts/core/Keyboard.ts");
/* ESM import */var _ui_Controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/Controls */ "./src/plugins/link/main/ts/ui/Controls.ts");





/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>{
    tinymce_core_api_PluginManager__WEBPACK_IMPORTED_MODULE_0__["default"].add('link', (editor)=>{
        _api_Options__WEBPACK_IMPORTED_MODULE_2__.register(editor);
        _api_Commands__WEBPACK_IMPORTED_MODULE_1__.register(editor);
        _ui_Controls__WEBPACK_IMPORTED_MODULE_4__.setup(editor);
        _core_Keyboard__WEBPACK_IMPORTED_MODULE_3__.setup(editor);
    });
});


}),
"./src/plugins/link/main/ts/api/Commands.ts": 
/*!**************************************************!*\
  !*** ./src/plugins/link/main/ts/api/Commands.ts ***!
  \**************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  register: () => (register)
});
/* ESM import */var _ui_Dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/Dialog */ "./src/plugins/link/main/ts/ui/Dialog.ts");
/* ESM import */var _Options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Options */ "./src/plugins/link/main/ts/api/Options.ts");


const register = (editor)=>{
    editor.addCommand('mceLink', (_ui, value)=>{
        if (value?.dialog === true || !_Options__WEBPACK_IMPORTED_MODULE_1__.useQuickLink(editor)) {
            _ui_Dialog__WEBPACK_IMPORTED_MODULE_0__.open(editor);
        } else {
            editor.dispatch('contexttoolbar-show', {
                toolbarKey: 'quicklink'
            });
        }
    });
};



}),
"./src/plugins/link/main/ts/api/Options.ts": 
/*!*************************************************!*\
  !*** ./src/plugins/link/main/ts/api/Options.ts ***!
  \*************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  allowUnsafeLinkTarget: () => (allowUnsafeLinkTarget),
  assumeExternalTargets: () => (assumeExternalTargets),
  attributesPostProcess: () => (attributesPostProcess),
  getDefaultLinkProtocol: () => (getDefaultLinkProtocol),
  getDefaultLinkTarget: () => (getDefaultLinkTarget),
  getDocumentsFileTypes: () => (getDocumentsFileTypes),
  getFilesUploadHandler: () => (getFilesUploadHandler),
  getLinkClassList: () => (getLinkClassList),
  getLinkList: () => (getLinkList),
  getRelList: () => (getRelList),
  getTargetList: () => (getTargetList),
  hasContextToolbar: () => (hasContextToolbar),
  hasDocumentsFileTypes: () => (hasDocumentsFileTypes),
  hasFilesUploadHandler: () => (hasFilesUploadHandler),
  hasLinkUploadtab: () => (hasLinkUploadtab),
  register: () => (register),
  shouldShowLinkTitle: () => (shouldShowLinkTitle),
  useQuickLink: () => (useQuickLink)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Type.ts");
/* ESM import */var _Types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Types */ "./src/plugins/link/main/ts/api/Types.ts");


const option = (name)=>(editor)=>editor.options.get(name);
const register = (editor)=>{
    const registerOption = editor.options.register;
    registerOption('link_assume_external_targets', {
        processor: (value)=>{
            const valid = _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.isString(value) || _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.isBoolean(value);
            if (valid) {
                if (value === true) {
                    return {
                        value: _Types__WEBPACK_IMPORTED_MODULE_0__.AssumeExternalTargets.WARN,
                        valid
                    };
                } else if (value === _Types__WEBPACK_IMPORTED_MODULE_0__.AssumeExternalTargets.ALWAYS_HTTP || value === _Types__WEBPACK_IMPORTED_MODULE_0__.AssumeExternalTargets.ALWAYS_HTTPS) {
                    return {
                        value,
                        valid
                    };
                } else {
                    return {
                        value: _Types__WEBPACK_IMPORTED_MODULE_0__.AssumeExternalTargets.OFF,
                        valid
                    };
                }
            } else {
                return {
                    valid: false,
                    message: 'Must be a string or a boolean.'
                };
            }
        },
        default: false
    });
    registerOption('link_context_toolbar', {
        processor: 'boolean',
        default: false
    });
    registerOption('link_list', {
        processor: (value)=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.isString(value) || _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.isFunction(value) || _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.isArrayOf(value, _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.isObject)
    });
    registerOption('link_default_target', {
        processor: 'string'
    });
    registerOption('link_default_protocol', {
        processor: 'string',
        default: 'https'
    });
    registerOption('link_target_list', {
        processor: (value)=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.isBoolean(value) || _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.isArrayOf(value, _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.isObject),
        default: true
    });
    registerOption('link_rel_list', {
        processor: 'object[]',
        default: []
    });
    registerOption('link_class_list', {
        processor: 'object[]',
        default: []
    });
    registerOption('link_title', {
        processor: 'boolean',
        default: true
    });
    registerOption('allow_unsafe_link_target', {
        processor: 'boolean',
        default: false
    });
    registerOption('link_quicklink', {
        processor: 'boolean',
        default: false
    });
    registerOption('link_attributes_postprocess', {
        processor: 'function'
    });
    registerOption('files_upload_handler', {
        processor: 'function'
    });
    registerOption('link_uploadtab', {
        processor: 'boolean',
        default: true
    });
};
const assumeExternalTargets = option('link_assume_external_targets');
const hasContextToolbar = option('link_context_toolbar');
const getLinkList = option('link_list');
const getDefaultLinkTarget = option('link_default_target');
const getDefaultLinkProtocol = option('link_default_protocol');
const getTargetList = option('link_target_list');
const getRelList = option('link_rel_list');
const getLinkClassList = option('link_class_list');
const shouldShowLinkTitle = option('link_title');
const allowUnsafeLinkTarget = option('allow_unsafe_link_target');
const useQuickLink = option('link_quicklink');
const attributesPostProcess = option('link_attributes_postprocess');
const getFilesUploadHandler = option('files_upload_handler');
const hasLinkUploadtab = option('link_uploadtab');
const getDocumentsFileTypes = option('documents_file_types');
const hasFilesUploadHandler = (editor)=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.isNonNullable(editor.options.get('files_upload_handler'));
const hasDocumentsFileTypes = (editor)=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.isNonNullable(editor.options.get('documents_file_types'));



}),
"./src/plugins/link/main/ts/api/Types.ts": 
/*!***********************************************!*\
  !*** ./src/plugins/link/main/ts/api/Types.ts ***!
  \***********************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AssumeExternalTargets: () => (AssumeExternalTargets)
});
var AssumeExternalTargets = /*#__PURE__*/ function(AssumeExternalTargets) {
    AssumeExternalTargets[AssumeExternalTargets["OFF"] = 0] = "OFF";
    AssumeExternalTargets[AssumeExternalTargets["WARN"] = 1] = "WARN";
    AssumeExternalTargets["ALWAYS_HTTP"] = "http";
    AssumeExternalTargets["ALWAYS_HTTPS"] = "https";
    return AssumeExternalTargets;
}({});


}),
"./src/plugins/link/main/ts/core/Actions.ts": 
/*!**************************************************!*\
  !*** ./src/plugins/link/main/ts/core/Actions.ts ***!
  \**************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  link: () => (link),
  unlink: () => (unlink)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Arr.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Optional.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Obj.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Type.ts");
/* ESM import */var tinymce_core_api_util_URI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/util/URI */ "./lib/globals/tinymce/core/api/util/URI.js");
/* ESM import */var _api_Options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/Options */ "./src/plugins/link/main/ts/api/Options.ts");
/* ESM import */var _api_Types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/Types */ "./src/plugins/link/main/ts/api/Types.ts");
/* ESM import */var _Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Utils */ "./src/plugins/link/main/ts/core/Utils.ts");





const getLinkAttrs = (data)=>{
    const attrs = [
        'title',
        'rel',
        'class',
        'target'
    ];
    return _ephox_katamari__WEBPACK_IMPORTED_MODULE_4__.foldl(attrs, (acc, key)=>{
        data[key].each((value)=>{
            // If dealing with an empty string, then treat that as being null so the attribute is removed
            acc[key] = value.length > 0 ? value : null;
        });
        return acc;
    }, {
        href: data.href
    });
};
const handleExternalTargets = (href, assumeExternalTargets)=>{
    if ((assumeExternalTargets === _api_Types__WEBPACK_IMPORTED_MODULE_2__.AssumeExternalTargets.ALWAYS_HTTP || assumeExternalTargets === _api_Types__WEBPACK_IMPORTED_MODULE_2__.AssumeExternalTargets.ALWAYS_HTTPS) && !_Utils__WEBPACK_IMPORTED_MODULE_3__.hasProtocol(href)) {
        return assumeExternalTargets + '://' + href;
    }
    return href;
};
const applyLinkOverrides = (editor, linkAttrs)=>{
    const newLinkAttrs = {
        ...linkAttrs
    };
    if (_api_Options__WEBPACK_IMPORTED_MODULE_1__.getRelList(editor).length === 0 && !_api_Options__WEBPACK_IMPORTED_MODULE_1__.allowUnsafeLinkTarget(editor)) {
        const newRel = _Utils__WEBPACK_IMPORTED_MODULE_3__.applyRelTargetRules(newLinkAttrs.rel, newLinkAttrs.target === '_blank');
        newLinkAttrs.rel = newRel ? newRel : null;
    }
    if (_ephox_katamari__WEBPACK_IMPORTED_MODULE_5__.Optional.from(newLinkAttrs.target).isNone() && _api_Options__WEBPACK_IMPORTED_MODULE_1__.getTargetList(editor) === false) {
        newLinkAttrs.target = _api_Options__WEBPACK_IMPORTED_MODULE_1__.getDefaultLinkTarget(editor);
    }
    newLinkAttrs.href = handleExternalTargets(newLinkAttrs.href, _api_Options__WEBPACK_IMPORTED_MODULE_1__.assumeExternalTargets(editor));
    return newLinkAttrs;
};
const updateLink = (editor, anchorElm, text, linkAttrs)=>{
    // If we have text, then update the anchor elements text content
    text.each((text)=>{
        if (_ephox_katamari__WEBPACK_IMPORTED_MODULE_6__.has(anchorElm, 'innerText')) {
            anchorElm.innerText = text;
        } else {
            anchorElm.textContent = text;
        }
    });
    editor.dom.setAttribs(anchorElm, linkAttrs);
    // Move the cursor behind the updated link, so the user can go on typing.
    const rng = editor.dom.createRng();
    rng.setStartAfter(anchorElm);
    rng.setEndAfter(anchorElm);
    editor.selection.setRng(rng);
};
const createLink = (editor, selectedElm, text, linkAttrs)=>{
    const dom = editor.dom;
    if (_Utils__WEBPACK_IMPORTED_MODULE_3__.isImageFigure(selectedElm)) {
        linkImageFigure(dom, selectedElm, linkAttrs);
    } else {
        text.fold(()=>{
            editor.execCommand('mceInsertLink', false, linkAttrs);
            // Now the newly inserted link is selected. Move the cursor behind the new link, so the user can go on typing.
            const end = editor.selection.getEnd();
            const rng = dom.createRng();
            rng.setStartAfter(end);
            rng.setEndAfter(end);
            editor.selection.setRng(rng);
        }, (text)=>{
            editor.insertContent(dom.createHTML('a', linkAttrs, dom.encode(text)));
        });
    }
};
const linkDomMutation = (editor, attachState, data)=>{
    const selectedElm = editor.selection.getNode();
    const anchorElm = _Utils__WEBPACK_IMPORTED_MODULE_3__.getAnchorElement(editor, selectedElm);
    const linkAttrs = applyLinkOverrides(editor, getLinkAttrs(data));
    const attributesPostProcess = _api_Options__WEBPACK_IMPORTED_MODULE_1__.attributesPostProcess(editor);
    if (_ephox_katamari__WEBPACK_IMPORTED_MODULE_7__.isNonNullable(attributesPostProcess)) {
        attributesPostProcess(linkAttrs);
    }
    editor.undoManager.transact(()=>{
        if (data.href === attachState.href) {
            attachState.attach();
        }
        anchorElm.fold(()=>{
            createLink(editor, selectedElm, data.text, linkAttrs);
        }, (elm)=>{
            editor.focus();
            updateLink(editor, elm, data.text, linkAttrs);
        });
    });
};
const unlinkSelection = (editor)=>{
    const dom = editor.dom, selection = editor.selection;
    const bookmark = selection.getBookmark();
    const rng = selection.getRng().cloneRange();
    // Extend the selection out to the entire anchor element
    const startAnchorElm = dom.getParent(rng.startContainer, 'a[href]', editor.getBody());
    const endAnchorElm = dom.getParent(rng.endContainer, 'a[href]', editor.getBody());
    if (startAnchorElm) {
        rng.setStartBefore(startAnchorElm);
    }
    if (endAnchorElm) {
        rng.setEndAfter(endAnchorElm);
    }
    selection.setRng(rng);
    // Remove the link
    editor.execCommand('unlink');
    selection.moveToBookmark(bookmark);
};
const unlinkDomMutation = (editor)=>{
    editor.undoManager.transact(()=>{
        const node = editor.selection.getNode();
        if (_Utils__WEBPACK_IMPORTED_MODULE_3__.isImageFigure(node)) {
            unlinkImageFigure(editor, node);
        } else {
            unlinkSelection(editor);
        }
        editor.focus();
    });
};
/*
 * RTC uses unwrapped options.
 *
 * To best simulate this, we unwrap to null and filter out empty values.
 */ const unwrapOptions = (data)=>{
    const { class: cls, href, rel, target, text, title } = data;
    return _ephox_katamari__WEBPACK_IMPORTED_MODULE_6__.filter({
        class: cls.getOrNull(),
        href,
        rel: rel.getOrNull(),
        target: target.getOrNull(),
        text: text.getOrNull(),
        title: title.getOrNull()
    }, (v, _k)=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_7__.isNull(v) === false);
};
const sanitizeData = (editor, data)=>{
    const getOption = editor.options.get;
    const uriOptions = {
        allow_html_data_urls: getOption('allow_html_data_urls'),
        allow_script_urls: getOption('allow_script_urls'),
        allow_svg_data_urls: getOption('allow_svg_data_urls')
    };
    // Sanitize the URL
    const href = data.href;
    return {
        ...data,
        href: tinymce_core_api_util_URI__WEBPACK_IMPORTED_MODULE_0__["default"].isDomSafe(href, 'a', uriOptions) ? href : ''
    };
};
const link = (editor, attachState, data)=>{
    const sanitizedData = sanitizeData(editor, data);
    editor.hasPlugin('rtc', true) ? editor.execCommand('createlink', false, unwrapOptions(sanitizedData)) : linkDomMutation(editor, attachState, sanitizedData);
};
const unlink = (editor)=>{
    editor.hasPlugin('rtc', true) ? editor.execCommand('unlink') : unlinkDomMutation(editor);
};
const unlinkImageFigure = (editor, fig)=>{
    const img = editor.dom.select('img', fig)[0];
    if (img) {
        const a = editor.dom.getParents(img, 'a[href]', fig)[0];
        if (a) {
            a.parentNode?.insertBefore(img, a);
            editor.dom.remove(a);
        }
    }
};
const linkImageFigure = (dom, fig, attrs)=>{
    const img = dom.select('img', fig)[0];
    if (img) {
        const a = dom.create('a', attrs);
        img.parentNode?.insertBefore(a, img);
        a.appendChild(img);
    }
};



}),
"./src/plugins/link/main/ts/core/Keyboard.ts": 
/*!***************************************************!*\
  !*** ./src/plugins/link/main/ts/core/Keyboard.ts ***!
  \***************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  setup: () => (setup)
});
const setup = (editor)=>{
    editor.addShortcut('Meta+K', '', ()=>{
        editor.execCommand('mceLink');
    });
};



}),
"./src/plugins/link/main/ts/core/ListOptions.ts": 
/*!******************************************************!*\
  !*** ./src/plugins/link/main/ts/core/ListOptions.ts ***!
  \******************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ListOptions: () => (ListOptions)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Type.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Optional.ts");
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
const sanitizeWith = (extracter = getValue)=>(list)=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.Optional.from(list).map((list)=>sanitizeList(list, extracter));
const sanitize = (list)=>sanitizeWith(getValue)(list);
// NOTE: May need to care about flattening.
const createUi = (name, label)=>(items)=>({
            name,
            type: 'listbox',
            label,
            items
        });
const ListOptions = {
    sanitize,
    sanitizeWith,
    createUi,
    getValue
};


}),
"./src/plugins/link/main/ts/core/OpenLink.ts": 
/*!***************************************************!*\
  !*** ./src/plugins/link/main/ts/core/OpenLink.ts ***!
  \***************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  setup: () => (setup)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Strings.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Optionals.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Singleton.ts");
/* ESM import */var tinymce_core_api_util_VK__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/util/VK */ "./lib/globals/tinymce/core/api/util/VK.js");
/* ESM import */var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ "./src/plugins/link/main/ts/core/Utils.ts");



const appendClickRemove = (link, evt)=>{
    document.body.appendChild(link);
    link.dispatchEvent(evt);
    document.body.removeChild(link);
};
const openLink = (url)=>{
    const link = document.createElement('a');
    link.target = '_blank';
    link.href = url;
    link.rel = 'noreferrer noopener';
    const evt = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
    });
    document.dispatchEvent(evt);
    appendClickRemove(link, evt);
};
const hasOnlyAltModifier = (e)=>{
    return e.altKey === true && e.shiftKey === false && e.ctrlKey === false && e.metaKey === false;
};
const gotoLink = (editor, a)=>{
    if (a) {
        const href = _Utils__WEBPACK_IMPORTED_MODULE_1__.getHref(a);
        if (/^#/.test(href)) {
            const targetEl = editor.dom.select(`${href},[name="${_ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.removeLeading(href, '#')}"]`);
            if (targetEl.length) {
                editor.selection.scrollIntoView(targetEl[0], true);
            }
        } else {
            openLink(a.href);
        }
    }
};
const isSelectionOnImageWithEmbeddedLink = (editor)=>{
    const rng = editor.selection.getRng();
    const node = rng.startContainer;
    // Handle a case where an image embedded with a link is selected
    return _Utils__WEBPACK_IMPORTED_MODULE_1__.isLink(node) && rng.startContainer === rng.endContainer && editor.dom.select('img', node).length === 1;
};
const getLinkFromElement = (editor, element)=>{
    const links = _Utils__WEBPACK_IMPORTED_MODULE_1__.getLinks(editor.dom.getParents(element));
    return _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__.someIf(links.length === 1, links[0]);
};
const getLinkInSelection = (editor)=>{
    const links = _Utils__WEBPACK_IMPORTED_MODULE_1__.getLinksInSelection(editor.selection.getRng());
    return _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__.someIf(links.length > 0, links[0]).or(getLinkFromElement(editor, editor.selection.getNode()));
};
const getLinkFromSelection = (editor)=>editor.selection.isCollapsed() || isSelectionOnImageWithEmbeddedLink(editor) ? getLinkFromElement(editor, editor.selection.getStart()) : getLinkInSelection(editor);
const setup = (editor)=>{
    const selectedLink = _ephox_katamari__WEBPACK_IMPORTED_MODULE_4__.value();
    const getSelectedLink = ()=>selectedLink.get().or(getLinkFromSelection(editor));
    const gotoSelectedLink = ()=>getSelectedLink().each((link)=>gotoLink(editor, link));
    editor.on('contextmenu', (e)=>{
        getLinkFromElement(editor, e.target).each(selectedLink.set);
    });
    editor.on('SelectionChange', ()=>{
        if (!selectedLink.isSet()) {
            getLinkFromSelection(editor).each(selectedLink.set);
        }
    });
    editor.on('click', (e)=>{
        selectedLink.clear();
        const links = _Utils__WEBPACK_IMPORTED_MODULE_1__.getLinks(editor.dom.getParents(e.target));
        if (links.length === 1 && tinymce_core_api_util_VK__WEBPACK_IMPORTED_MODULE_0__["default"].metaKeyPressed(e)) {
            e.preventDefault();
            gotoLink(editor, links[0]);
        }
    });
    editor.on('keydown', (e)=>{
        selectedLink.clear();
        if (!e.isDefaultPrevented() && e.keyCode === 13 && hasOnlyAltModifier(e)) {
            getSelectedLink().each((link)=>{
                e.preventDefault();
                gotoLink(editor, link);
            });
        }
    });
    return {
        gotoSelectedLink
    };
};



}),
"./src/plugins/link/main/ts/core/Utils.ts": 
/*!************************************************!*\
  !*** ./src/plugins/link/main/ts/core/Utils.ts ***!
  \************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  applyRelTargetRules: () => (applyRelTargetRules),
  blobToDataUri: () => (blobToDataUri),
  getAnchorElement: () => (getAnchorElement),
  getAnchorText: () => (getAnchorText),
  getHref: () => (getHref),
  getLinks: () => (getLinks),
  getLinksInSelection: () => (getLinksInSelection),
  hasLinks: () => (hasLinks),
  hasLinksInSelection: () => (hasLinksInSelection),
  hasProtocol: () => (hasProtocol),
  isImageFigure: () => (isImageFigure),
  isInAnchor: () => (isInAnchor),
  isLink: () => (isLink),
  isOnlyTextSelected: () => (isOnlyTextSelected)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Type.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Optional.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Obj.ts");
/* ESM import */var tinymce_core_api_dom_TreeWalker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/dom/TreeWalker */ "./lib/globals/tinymce/core/api/dom/TreeWalker.js");
/* ESM import */var tinymce_core_api_util_Tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tinymce/core/api/util/Tools */ "./lib/globals/tinymce/core/api/util/Tools.js");



const isAnchor = (elm)=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.isNonNullable(elm) && elm.nodeName.toLowerCase() === 'a';
const isLink = (elm)=>isAnchor(elm) && !!getHref(elm);
const collectNodesInRange = (rng, predicate)=>{
    if (rng.collapsed) {
        return [];
    } else {
        const contents = rng.cloneContents();
        const firstChild = contents.firstChild;
        const walker = new tinymce_core_api_dom_TreeWalker__WEBPACK_IMPORTED_MODULE_0__["default"](firstChild, contents);
        const elements = [];
        let current = firstChild;
        do {
            if (predicate(current)) {
                elements.push(current);
            }
        }while (current = walker.next())
        return elements;
    }
};
const hasProtocol = (url)=>/^\w+:/i.test(url);
const getHref = (elm)=>{
    // Returns the real href value not the resolved a.href value
    return elm.getAttribute('data-mce-href') ?? elm.getAttribute('href') ?? '';
};
const applyRelTargetRules = (rel, isUnsafe)=>{
    const rules = [
        'noopener'
    ];
    const rels = rel ? rel.split(/\s+/) : [];
    const toString = (rels)=>tinymce_core_api_util_Tools__WEBPACK_IMPORTED_MODULE_1__["default"].trim(rels.sort().join(' '));
    const addTargetRules = (rels)=>{
        rels = removeTargetRules(rels);
        return rels.length > 0 ? rels.concat(rules) : rules;
    };
    const removeTargetRules = (rels)=>rels.filter((val)=>tinymce_core_api_util_Tools__WEBPACK_IMPORTED_MODULE_1__["default"].inArray(rules, val) === -1);
    const newRels = isUnsafe ? addTargetRules(rels) : removeTargetRules(rels);
    return newRels.length > 0 ? toString(newRels) : '';
};
const trimCaretContainers = (text)=>text.replace(/\uFEFF/g, '');
const getAnchorElement = (editor, selectedElm)=>{
    selectedElm = selectedElm || getLinksInSelection(editor.selection.getRng())[0] || editor.selection.getNode();
    if (isImageFigure(selectedElm)) {
        // for an image contained in a figure we look for a link inside the selected element
        return _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__.Optional.from(editor.dom.select('a[href]', selectedElm)[0]);
    } else {
        return _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__.Optional.from(editor.dom.getParent(selectedElm, 'a[href]'));
    }
};
const isInAnchor = (editor, selectedElm)=>getAnchorElement(editor, selectedElm).isSome();
const getAnchorText = (selection, anchorElm)=>{
    const text = anchorElm.fold(()=>selection.getContent({
            format: 'text'
        }), (anchorElm)=>anchorElm.innerText || anchorElm.textContent || '');
    return trimCaretContainers(text);
};
const getLinksInSelection = (rng)=>collectNodesInRange(rng, isLink);
const getLinks = (elements)=>tinymce_core_api_util_Tools__WEBPACK_IMPORTED_MODULE_1__["default"].grep(elements, isLink);
const hasLinks = (elements)=>getLinks(elements).length > 0;
const hasLinksInSelection = (rng)=>getLinksInSelection(rng).length > 0;
const isOnlyTextSelected = (editor)=>{
    // Allow anchor and inline text elements to be in the selection but nothing else
    const inlineTextElements = editor.schema.getTextInlineElements();
    const isElement = (elm)=>elm.nodeType === 1 && !isAnchor(elm) && !_ephox_katamari__WEBPACK_IMPORTED_MODULE_4__.has(inlineTextElements, elm.nodeName.toLowerCase());
    // If selection is inside a block anchor then always treat it as non text only
    const isInBlockAnchor = getAnchorElement(editor).exists((anchor)=>anchor.hasAttribute('data-mce-block'));
    if (isInBlockAnchor) {
        return false;
    }
    const rng = editor.selection.getRng();
    if (!rng.collapsed) {
        // Collect all non inline text elements in the range and make sure no elements were found
        const elements = collectNodesInRange(rng, isElement);
        return elements.length === 0;
    } else {
        return true;
    }
};
const isImageFigure = (elm)=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.isNonNullable(elm) && elm.nodeName === 'FIGURE' && /\bimage\b/i.test(elm.className);
const blobToDataUri = (blob)=>new Promise((resolve, reject)=>{
        const reader = new FileReader();
        reader.onload = ()=>{
            resolve(reader.result);
        };
        reader.onerror = ()=>{
            reject(new Error(reader.error?.message ?? 'Failed to convert blob to a data url'));
        };
        reader.readAsDataURL(blob);
    });



}),
"./src/plugins/link/main/ts/ui/Controls.ts": 
/*!*************************************************!*\
  !*** ./src/plugins/link/main/ts/ui/Controls.ts ***!
  \*************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  setup: () => (setup)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Fun.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Optionals.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Optional.ts");
/* ESM import */var _api_Options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/Options */ "./src/plugins/link/main/ts/api/Options.ts");
/* ESM import */var _core_Actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Actions */ "./src/plugins/link/main/ts/core/Actions.ts");
/* ESM import */var _core_OpenLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/OpenLink */ "./src/plugins/link/main/ts/core/OpenLink.ts");
/* ESM import */var _core_Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/Utils */ "./src/plugins/link/main/ts/core/Utils.ts");





const openDialog = (editor)=>()=>{
        editor.execCommand('mceLink', false, {
            dialog: true
        });
    };
const toggleState = (editor, toggler)=>{
    editor.on('NodeChange', toggler);
    return ()=>editor.off('NodeChange', toggler);
};
const toggleLinkState = (editor)=>(api)=>{
        const updateState = ()=>{
            api.setActive(!editor.mode.isReadOnly() && _core_Utils__WEBPACK_IMPORTED_MODULE_3__.isInAnchor(editor, editor.selection.getNode()));
            api.setEnabled(editor.selection.isEditable());
        };
        updateState();
        return toggleState(editor, updateState);
    };
const toggleLinkMenuState = (editor)=>(api)=>{
        const updateState = ()=>{
            api.setEnabled(editor.selection.isEditable());
        };
        updateState();
        return toggleState(editor, updateState);
    };
const toggleRequiresLinkState = (editor)=>(api)=>{
        const hasLinks = (parents)=>_core_Utils__WEBPACK_IMPORTED_MODULE_3__.hasLinks(parents) || _core_Utils__WEBPACK_IMPORTED_MODULE_3__.hasLinksInSelection(editor.selection.getRng());
        const parents = editor.dom.getParents(editor.selection.getStart());
        const updateEnabled = (parents)=>{
            api.setEnabled(hasLinks(parents) && editor.selection.isEditable());
        };
        updateEnabled(parents);
        return toggleState(editor, (e)=>updateEnabled(e.parents));
    };
const setupButtons = (editor, openLink)=>{
    editor.ui.registry.addToggleButton('link', {
        icon: 'link',
        tooltip: 'Insert/edit link',
        shortcut: 'Meta+K',
        onAction: openDialog(editor),
        onSetup: toggleLinkState(editor)
    });
    editor.ui.registry.addButton('openlink', {
        icon: 'new-tab',
        tooltip: 'Open link',
        onAction: openLink.gotoSelectedLink,
        onSetup: toggleRequiresLinkState(editor)
    });
    editor.ui.registry.addButton('unlink', {
        icon: 'unlink',
        tooltip: 'Remove link',
        onAction: ()=>_core_Actions__WEBPACK_IMPORTED_MODULE_1__.unlink(editor),
        onSetup: toggleRequiresLinkState(editor)
    });
};
const setupMenuItems = (editor, openLink)=>{
    editor.ui.registry.addMenuItem('openlink', {
        text: 'Open link',
        icon: 'new-tab',
        onAction: openLink.gotoSelectedLink,
        onSetup: toggleRequiresLinkState(editor)
    });
    editor.ui.registry.addMenuItem('link', {
        icon: 'link',
        text: 'Link...',
        shortcut: 'Meta+K',
        onAction: openDialog(editor),
        onSetup: toggleLinkMenuState(editor)
    });
    editor.ui.registry.addMenuItem('unlink', {
        icon: 'unlink',
        text: 'Remove link',
        onAction: ()=>_core_Actions__WEBPACK_IMPORTED_MODULE_1__.unlink(editor),
        onSetup: toggleRequiresLinkState(editor)
    });
};
const setupContextMenu = (editor)=>{
    const inLink = 'link unlink openlink';
    const noLink = 'link';
    editor.ui.registry.addContextMenu('link', {
        update: (element)=>{
            const isEditable = editor.dom.isEditable(element);
            if (!isEditable) {
                return '';
            }
            return _core_Utils__WEBPACK_IMPORTED_MODULE_3__.hasLinks(editor.dom.getParents(element, 'a')) ? inLink : noLink;
        }
    });
};
const setupContextToolbars = (editor, openLink)=>{
    const collapseSelectionToEnd = (editor)=>{
        editor.selection.collapse(false);
    };
    const onSetupLink = (buttonApi)=>{
        const node = editor.selection.getNode();
        buttonApi.setEnabled(_core_Utils__WEBPACK_IMPORTED_MODULE_3__.isInAnchor(editor, node) && editor.selection.isEditable());
        return _ephox_katamari__WEBPACK_IMPORTED_MODULE_4__.noop;
    };
    /**
   * if we're editing a link, don't change the text.
   * if anything other than text is selected, don't change the text.
   * TINY-9593: If there is a text selection return `Optional.none`
   * because `mceInsertLink` command will handle the selection.
   */ const getLinkText = (value)=>{
        const anchor = _core_Utils__WEBPACK_IMPORTED_MODULE_3__.getAnchorElement(editor);
        const onlyText = _core_Utils__WEBPACK_IMPORTED_MODULE_3__.isOnlyTextSelected(editor);
        if (anchor.isNone() && onlyText) {
            const text = _core_Utils__WEBPACK_IMPORTED_MODULE_3__.getAnchorText(editor.selection, anchor);
            return _ephox_katamari__WEBPACK_IMPORTED_MODULE_5__.someIf(text.length === 0, value);
        } else {
            return _ephox_katamari__WEBPACK_IMPORTED_MODULE_6__.Optional.none();
        }
    };
    editor.ui.registry.addContextForm('quicklink', {
        launch: {
            type: 'contextformtogglebutton',
            icon: 'link',
            tooltip: 'Link',
            onSetup: toggleLinkState(editor)
        },
        label: 'Link',
        predicate: (node)=>_api_Options__WEBPACK_IMPORTED_MODULE_0__.hasContextToolbar(editor) && _core_Utils__WEBPACK_IMPORTED_MODULE_3__.isInAnchor(editor, node),
        initValue: ()=>{
            const elm = _core_Utils__WEBPACK_IMPORTED_MODULE_3__.getAnchorElement(editor);
            return elm.fold(_ephox_katamari__WEBPACK_IMPORTED_MODULE_4__.constant(''), _core_Utils__WEBPACK_IMPORTED_MODULE_3__.getHref);
        },
        commands: [
            {
                type: 'contextformtogglebutton',
                icon: 'link',
                tooltip: 'Link',
                primary: true,
                onSetup: (buttonApi)=>{
                    const node = editor.selection.getNode();
                    // TODO: Make a test for this later.
                    buttonApi.setActive(_core_Utils__WEBPACK_IMPORTED_MODULE_3__.isInAnchor(editor, node));
                    return toggleLinkState(editor)(buttonApi);
                },
                onAction: (formApi)=>{
                    const value = formApi.getValue();
                    const text = getLinkText(value);
                    const attachState = {
                        href: value,
                        attach: _ephox_katamari__WEBPACK_IMPORTED_MODULE_4__.noop
                    };
                    _core_Actions__WEBPACK_IMPORTED_MODULE_1__.link(editor, attachState, {
                        href: value,
                        text,
                        title: _ephox_katamari__WEBPACK_IMPORTED_MODULE_6__.Optional.none(),
                        rel: _ephox_katamari__WEBPACK_IMPORTED_MODULE_6__.Optional.none(),
                        target: _ephox_katamari__WEBPACK_IMPORTED_MODULE_6__.Optional.from(_api_Options__WEBPACK_IMPORTED_MODULE_0__.getDefaultLinkTarget(editor)),
                        class: _ephox_katamari__WEBPACK_IMPORTED_MODULE_6__.Optional.none()
                    });
                    collapseSelectionToEnd(editor);
                    formApi.hide();
                }
            },
            {
                type: 'contextformbutton',
                icon: 'unlink',
                tooltip: 'Remove link',
                onSetup: onSetupLink,
                // TODO: The original inlite action was quite complex. Are we missing something with this?
                onAction: (formApi)=>{
                    _core_Actions__WEBPACK_IMPORTED_MODULE_1__.unlink(editor);
                    formApi.hide();
                }
            },
            {
                type: 'contextformbutton',
                icon: 'new-tab',
                tooltip: 'Open link',
                onSetup: onSetupLink,
                onAction: (formApi)=>{
                    openLink.gotoSelectedLink();
                    formApi.hide();
                }
            }
        ]
    });
};
const setup = (editor)=>{
    const openLink = _core_OpenLink__WEBPACK_IMPORTED_MODULE_2__.setup(editor);
    setupButtons(editor, openLink);
    setupMenuItems(editor, openLink);
    setupContextMenu(editor);
    setupContextToolbars(editor, openLink);
};



}),
"./src/plugins/link/main/ts/ui/Dialog.ts": 
/*!***********************************************!*\
  !*** ./src/plugins/link/main/ts/ui/Dialog.ts ***!
  \***********************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  open: () => (open)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Optional.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Optionals.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Fun.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Arr.ts");
/* ESM import */var _api_Options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/Options */ "./src/plugins/link/main/ts/api/Options.ts");
/* ESM import */var _core_Actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Actions */ "./src/plugins/link/main/ts/core/Actions.ts");
/* ESM import */var _core_ListOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/ListOptions */ "./src/plugins/link/main/ts/core/ListOptions.ts");
/* ESM import */var _core_Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/Utils */ "./src/plugins/link/main/ts/core/Utils.ts");
/* ESM import */var _DialogChanges__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DialogChanges */ "./src/plugins/link/main/ts/ui/DialogChanges.ts");
/* ESM import */var _DialogConfirms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DialogConfirms */ "./src/plugins/link/main/ts/ui/DialogConfirms.ts");
/* ESM import */var _DialogInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DialogInfo */ "./src/plugins/link/main/ts/ui/DialogInfo.ts");
/* ESM import */var _UploadTab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./UploadTab */ "./src/plugins/link/main/ts/ui/UploadTab.ts");









const handleSubmit = (editor, info)=>(api)=>{
        const data = api.getData();
        if (!data.url.value) {
            _core_Actions__WEBPACK_IMPORTED_MODULE_1__.unlink(editor);
            // Temporary fix. TODO: TINY-2811
            api.close();
            return;
        }
        // Check if a key is defined, meaning it was a field in the dialog. If it is,
        // then check if it's changed and return none if nothing has changed.
        const getChangedValue = (key)=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_8__.Optional.from(data[key]).filter((value)=>!_ephox_katamari__WEBPACK_IMPORTED_MODULE_9__.is(info.anchor[key], value));
        const changedData = {
            href: data.url.value,
            text: getChangedValue('text'),
            target: getChangedValue('target'),
            rel: getChangedValue('rel'),
            class: getChangedValue('linkClass'),
            title: getChangedValue('title')
        };
        const attachState = {
            href: data.url.value,
            attach: data.url.meta !== undefined && data.url.meta.attach ? data.url.meta.attach : _ephox_katamari__WEBPACK_IMPORTED_MODULE_10__.noop
        };
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        _DialogConfirms__WEBPACK_IMPORTED_MODULE_5__.DialogConfirms.preprocess(editor, changedData).then((pData)=>{
            _core_Actions__WEBPACK_IMPORTED_MODULE_1__.link(editor, attachState, pData);
        });
        api.close();
    };
const uploadFile = (editor)=>(blobInfo, progress)=>{
        const fileUploadHandler = _api_Options__WEBPACK_IMPORTED_MODULE_0__.getFilesUploadHandler(editor);
        return fileUploadHandler(blobInfo, progress);
    };
const dataUrlToBase64 = (dataUrl)=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_8__.Optional.from(dataUrl.split(',')[1]).getOr('');
const changeFileInput = (helpers, api)=>{
    const data = api.getData();
    api.block('Uploading file');
    _ephox_katamari__WEBPACK_IMPORTED_MODULE_11__.head(data.fileinput).fold(()=>{
        api.unblock();
    }, (file)=>{
        const blobUri = URL.createObjectURL(file);
        const updateUrlAndSwitchTab = ({ url, fileName })=>{
            api.setData({
                text: fileName,
                title: fileName,
                url: {
                    value: url,
                    meta: {}
                }
            });
            api.showTab('general');
            api.focus('url');
        };
        const finalize = ()=>{
            api.unblock();
            URL.revokeObjectURL(blobUri);
        };
        _core_Utils__WEBPACK_IMPORTED_MODULE_3__.blobToDataUri(file).then((dataUrl)=>{
            const existingBlobInfo = helpers.getExistingBlobInfo(dataUrlToBase64(dataUrl), file.type);
            const blobInfo = existingBlobInfo && existingBlobInfo.filename() === file.name ? existingBlobInfo : helpers.createBlobCache(file, blobUri, dataUrl);
            helpers.addToBlobCache(blobInfo);
            return helpers.uploadFile(blobInfo, _ephox_katamari__WEBPACK_IMPORTED_MODULE_10__.identity);
        }).then((result)=>{
            updateUrlAndSwitchTab(result);
            finalize();
        }).catch((err)=>{
            finalize();
            helpers.alertErr(err, ()=>{
                api.focus('fileinput');
            });
        });
    });
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
const getExistingBlobInfo = (editor)=>(base64, type)=>{
        return editor.editorUpload.blobCache.getByData(base64, type);
    };
const alertErr = (editor)=>(message, callback)=>{
        editor.windowManager.alert(message, callback);
    };
const collectData = (editor)=>{
    const anchorNode = _core_Utils__WEBPACK_IMPORTED_MODULE_3__.getAnchorElement(editor);
    return _DialogInfo__WEBPACK_IMPORTED_MODULE_6__.DialogInfo.collect(editor, anchorNode);
};
const getInitialData = (info, defaultTarget)=>{
    const anchor = info.anchor;
    const url = anchor.url.getOr('');
    return {
        url: {
            value: url,
            meta: {
                original: {
                    value: url
                }
            }
        },
        text: anchor.text.getOr(''),
        title: anchor.title.getOr(''),
        anchor: url,
        link: url,
        rel: anchor.rel.getOr(''),
        target: anchor.target.or(defaultTarget).getOr(''),
        linkClass: anchor.linkClass.getOr(''),
        fileinput: []
    };
};
const makeDialogBody = (urlInput, displayText, titleText, catalogs, hasUploadPanel, fileTypes)=>{
    const generalPanelItems = _ephox_katamari__WEBPACK_IMPORTED_MODULE_11__.flatten([
        urlInput,
        displayText,
        titleText,
        _ephox_katamari__WEBPACK_IMPORTED_MODULE_9__.cat([
            catalogs.anchor.map(_core_ListOptions__WEBPACK_IMPORTED_MODULE_2__.ListOptions.createUi('anchor', 'Anchors')),
            catalogs.rels.map(_core_ListOptions__WEBPACK_IMPORTED_MODULE_2__.ListOptions.createUi('rel', 'Rel')),
            catalogs.targets.map(_core_ListOptions__WEBPACK_IMPORTED_MODULE_2__.ListOptions.createUi('target', 'Open link in...')),
            catalogs.link.map(_core_ListOptions__WEBPACK_IMPORTED_MODULE_2__.ListOptions.createUi('link', 'Link list')),
            catalogs.classes.map(_core_ListOptions__WEBPACK_IMPORTED_MODULE_2__.ListOptions.createUi('linkClass', 'Class'))
        ])
    ]);
    if (hasUploadPanel) {
        const tabPanel = {
            type: 'tabpanel',
            tabs: _ephox_katamari__WEBPACK_IMPORTED_MODULE_11__.flatten([
                [
                    {
                        title: 'General',
                        name: 'general',
                        items: generalPanelItems
                    }
                ],
                [
                    _UploadTab__WEBPACK_IMPORTED_MODULE_7__.UploadTab.makeTab(fileTypes)
                ]
            ])
        };
        return tabPanel;
    } else {
        return {
            type: 'panel',
            items: generalPanelItems
        };
    }
};
const makeDialog = (settings, onSubmit, editor)=>{
    const urlInput = [
        {
            name: 'url',
            type: 'urlinput',
            filetype: 'file',
            label: 'URL',
            picker_text: 'Browse links'
        }
    ];
    const displayText = settings.anchor.text.map(()=>({
            name: 'text',
            type: 'input',
            label: 'Text to display'
        })).toArray();
    const titleText = settings.flags.titleEnabled ? [
        {
            name: 'title',
            type: 'input',
            label: 'Title'
        }
    ] : [];
    const defaultTarget = _ephox_katamari__WEBPACK_IMPORTED_MODULE_8__.Optional.from(_api_Options__WEBPACK_IMPORTED_MODULE_0__.getDefaultLinkTarget(editor));
    const initialData = getInitialData(settings, defaultTarget);
    const catalogs = settings.catalogs;
    const dialogDelta = _DialogChanges__WEBPACK_IMPORTED_MODULE_4__.DialogChanges.init(initialData, catalogs);
    const body = makeDialogBody(urlInput, displayText, titleText, catalogs, settings.hasUploadPanel, _api_Options__WEBPACK_IMPORTED_MODULE_0__.getDocumentsFileTypes(editor));
    const helpers = {
        addToBlobCache: addToBlobCache(editor),
        createBlobCache: createBlobCache(editor),
        alertErr: alertErr(editor),
        uploadFile: uploadFile(editor),
        getExistingBlobInfo: getExistingBlobInfo(editor)
    };
    return {
        title: 'Insert/Edit Link',
        size: 'normal',
        body,
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
        initialData,
        onChange: (api, { name })=>{
            if (name === 'fileinput') {
                changeFileInput(helpers, api);
            } else {
                dialogDelta.onChange(api.getData, {
                    name
                }).each((newData)=>{
                    api.setData(newData);
                });
            }
        },
        onSubmit
    };
};
const open = (editor)=>{
    const data = collectData(editor);
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    data.then((info)=>{
        const onSubmit = handleSubmit(editor, info);
        return makeDialog(info, onSubmit, editor);
    }).then((spec)=>{
        editor.windowManager.open(spec);
    });
};



}),
"./src/plugins/link/main/ts/ui/DialogChanges.ts": 
/*!******************************************************!*\
  !*** ./src/plugins/link/main/ts/ui/DialogChanges.ts ***!
  \******************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DialogChanges: () => (DialogChanges)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Obj.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Arr.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Optionals.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Fun.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Optional.ts");

const isListGroup = (item)=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.hasNonNullableKey(item, 'items');
const findTextByValue = (value, catalog)=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.findMap(catalog, (item)=>{
        if (isListGroup(item)) {
            return findTextByValue(value, item.items);
        } else {
            return _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.someIf(item.value === value, item);
        }
    });
const getDelta = (persistentText, fieldName, catalog, data)=>{
    const value = data[fieldName];
    const hasPersistentText = persistentText.length > 0;
    return value !== undefined ? findTextByValue(value, catalog).map((i)=>({
            url: {
                value: i.value,
                meta: {
                    text: hasPersistentText ? persistentText : i.text,
                    attach: _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__.noop
                }
            },
            text: hasPersistentText ? persistentText : i.text
        })) : _ephox_katamari__WEBPACK_IMPORTED_MODULE_4__.Optional.none();
};
const findCatalog = (catalogs, fieldName)=>{
    if (fieldName === 'link') {
        return catalogs.link;
    } else if (fieldName === 'anchor') {
        return catalogs.anchor;
    } else {
        return _ephox_katamari__WEBPACK_IMPORTED_MODULE_4__.Optional.none();
    }
};
const init = (initialData, linkCatalog)=>{
    const persistentData = {
        text: initialData.text,
        title: initialData.title
    };
    const getTitleFromUrlChange = (url)=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.someIf(persistentData.title.length <= 0, _ephox_katamari__WEBPACK_IMPORTED_MODULE_4__.Optional.from(url.meta?.title).getOr(''));
    const getTextFromUrlChange = (url)=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.someIf(persistentData.text.length <= 0, _ephox_katamari__WEBPACK_IMPORTED_MODULE_4__.Optional.from(url.meta?.text).getOr(url.value));
    const onUrlChange = (data)=>{
        const text = getTextFromUrlChange(data.url);
        const title = getTitleFromUrlChange(data.url);
        // We are going to change the text/title because it has not been manually entered by the user.
        if (text.isSome() || title.isSome()) {
            return _ephox_katamari__WEBPACK_IMPORTED_MODULE_4__.Optional.some({
                ...text.map((text)=>({
                        text
                    })).getOr({}),
                ...title.map((title)=>({
                        title
                    })).getOr({})
            });
        } else {
            return _ephox_katamari__WEBPACK_IMPORTED_MODULE_4__.Optional.none();
        }
    };
    const onCatalogChange = (data, change)=>{
        const catalog = findCatalog(linkCatalog, change).getOr([]);
        return getDelta(persistentData.text, change, catalog, data);
    };
    const onChange = (getData, change)=>{
        const name = change.name;
        if (name === 'url') {
            return onUrlChange(getData());
        } else if (_ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.contains([
            'anchor',
            'link'
        ], name)) {
            return onCatalogChange(getData(), name);
        } else if (name === 'text' || name === 'title') {
            // Update the persistent text/title state, as a user has input custom text
            persistentData[name] = getData()[name];
            return _ephox_katamari__WEBPACK_IMPORTED_MODULE_4__.Optional.none();
        } else {
            return _ephox_katamari__WEBPACK_IMPORTED_MODULE_4__.Optional.none();
        }
    };
    return {
        onChange
    };
};
const DialogChanges = {
    init,
    getDelta
};


}),
"./src/plugins/link/main/ts/ui/DialogConfirms.ts": 
/*!*******************************************************!*\
  !*** ./src/plugins/link/main/ts/ui/DialogConfirms.ts ***!
  \*******************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DialogConfirms: () => (DialogConfirms)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Optional.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Arr.ts");
/* ESM import */var tinymce_core_api_util_Delay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/util/Delay */ "./lib/globals/tinymce/core/api/util/Delay.js");
/* ESM import */var _api_Options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/Options */ "./src/plugins/link/main/ts/api/Options.ts");
/* ESM import */var _api_Types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/Types */ "./src/plugins/link/main/ts/api/Types.ts");
/* ESM import */var _core_Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/Utils */ "./src/plugins/link/main/ts/core/Utils.ts");





// Delay confirm since onSubmit will move focus
const delayedConfirm = (editor, message, callback)=>{
    const rng = editor.selection.getRng();
    tinymce_core_api_util_Delay__WEBPACK_IMPORTED_MODULE_0__["default"].setEditorTimeout(editor, ()=>{
        editor.windowManager.confirm(message, (state)=>{
            editor.selection.setRng(rng);
            callback(state);
        });
    });
};
const tryEmailTransform = (data)=>{
    const url = data.href;
    const suggestMailTo = url.indexOf('@') > 0 && url.indexOf('/') === -1 && url.indexOf('mailto:') === -1;
    return suggestMailTo ? _ephox_katamari__WEBPACK_IMPORTED_MODULE_4__.Optional.some({
        message: 'The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?',
        preprocess: (oldData)=>({
                ...oldData,
                href: 'mailto:' + url
            })
    }) : _ephox_katamari__WEBPACK_IMPORTED_MODULE_4__.Optional.none();
};
const tryProtocolTransform = (assumeExternalTargets, defaultLinkProtocol)=>(data)=>{
        const url = data.href;
        const suggestProtocol = assumeExternalTargets === _api_Types__WEBPACK_IMPORTED_MODULE_2__.AssumeExternalTargets.WARN && !_core_Utils__WEBPACK_IMPORTED_MODULE_3__.hasProtocol(url) || assumeExternalTargets === _api_Types__WEBPACK_IMPORTED_MODULE_2__.AssumeExternalTargets.OFF && /^\s*www(\.|\d\.)/i.test(url);
        return suggestProtocol ? _ephox_katamari__WEBPACK_IMPORTED_MODULE_4__.Optional.some({
            message: `The URL you entered seems to be an external link. Do you want to add the required ${defaultLinkProtocol}:// prefix?`,
            preprocess: (oldData)=>({
                    ...oldData,
                    href: defaultLinkProtocol + '://' + url
                })
        }) : _ephox_katamari__WEBPACK_IMPORTED_MODULE_4__.Optional.none();
    };
const preprocess = (editor, data)=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_5__.findMap([
        tryEmailTransform,
        tryProtocolTransform(_api_Options__WEBPACK_IMPORTED_MODULE_1__.assumeExternalTargets(editor), _api_Options__WEBPACK_IMPORTED_MODULE_1__.getDefaultLinkProtocol(editor))
    ], (f)=>f(data)).fold(()=>Promise.resolve(data), (transform)=>new Promise((callback)=>{
            delayedConfirm(editor, transform.message, (state)=>{
                callback(state ? transform.preprocess(data) : data);
            });
        }));
const DialogConfirms = {
    preprocess
};


}),
"./src/plugins/link/main/ts/ui/DialogInfo.ts": 
/*!***************************************************!*\
  !*** ./src/plugins/link/main/ts/ui/DialogInfo.ts ***!
  \***************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DialogInfo: () => (DialogInfo)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Optional.ts");
/* ESM import */var _api_Options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/Options */ "./src/plugins/link/main/ts/api/Options.ts");
/* ESM import */var _core_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Utils */ "./src/plugins/link/main/ts/core/Utils.ts");
/* ESM import */var _sections_AnchorListOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sections/AnchorListOptions */ "./src/plugins/link/main/ts/ui/sections/AnchorListOptions.ts");
/* ESM import */var _sections_ClassListOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sections/ClassListOptions */ "./src/plugins/link/main/ts/ui/sections/ClassListOptions.ts");
/* ESM import */var _sections_LinkListOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sections/LinkListOptions */ "./src/plugins/link/main/ts/ui/sections/LinkListOptions.ts");
/* ESM import */var _sections_RelOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sections/RelOptions */ "./src/plugins/link/main/ts/ui/sections/RelOptions.ts");
/* ESM import */var _sections_TargetOptions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sections/TargetOptions */ "./src/plugins/link/main/ts/ui/sections/TargetOptions.ts");








const nonEmptyAttr = (dom, elem, name)=>{
    const val = dom.getAttrib(elem, name);
    return val !== null && val.length > 0 ? _ephox_katamari__WEBPACK_IMPORTED_MODULE_7__.Optional.some(val) : _ephox_katamari__WEBPACK_IMPORTED_MODULE_7__.Optional.none();
};
const extractFromAnchor = (editor, anchor)=>{
    const dom = editor.dom;
    const onlyText = _core_Utils__WEBPACK_IMPORTED_MODULE_1__.isOnlyTextSelected(editor);
    const text = onlyText ? _ephox_katamari__WEBPACK_IMPORTED_MODULE_7__.Optional.some(_core_Utils__WEBPACK_IMPORTED_MODULE_1__.getAnchorText(editor.selection, anchor)) : _ephox_katamari__WEBPACK_IMPORTED_MODULE_7__.Optional.none();
    const url = anchor.bind((anchorElm)=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_7__.Optional.from(dom.getAttrib(anchorElm, 'href')));
    const target = anchor.bind((anchorElm)=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_7__.Optional.from(dom.getAttrib(anchorElm, 'target')));
    const rel = anchor.bind((anchorElm)=>nonEmptyAttr(dom, anchorElm, 'rel'));
    const linkClass = anchor.bind((anchorElm)=>nonEmptyAttr(dom, anchorElm, 'class'));
    const title = anchor.bind((anchorElm)=>nonEmptyAttr(dom, anchorElm, 'title'));
    return {
        url,
        text,
        title,
        target,
        rel,
        linkClass
    };
};
const collect = (editor, linkNode)=>_sections_LinkListOptions__WEBPACK_IMPORTED_MODULE_4__.LinkListOptions.getLinks(editor).then((links)=>{
        const hasUploadPanel = _api_Options__WEBPACK_IMPORTED_MODULE_0__.hasFilesUploadHandler(editor) && _api_Options__WEBPACK_IMPORTED_MODULE_0__.hasDocumentsFileTypes(editor) && _api_Options__WEBPACK_IMPORTED_MODULE_0__.hasLinkUploadtab(editor);
        const anchor = extractFromAnchor(editor, linkNode);
        return {
            anchor,
            catalogs: {
                targets: _sections_TargetOptions__WEBPACK_IMPORTED_MODULE_6__.TargetOptions.getTargets(editor),
                // This should be initial target. Is anchor.target that?
                rels: _sections_RelOptions__WEBPACK_IMPORTED_MODULE_5__.RelOptions.getRels(editor, anchor.target),
                classes: _sections_ClassListOptions__WEBPACK_IMPORTED_MODULE_3__.ClassListOptions.getClasses(editor),
                anchor: _sections_AnchorListOptions__WEBPACK_IMPORTED_MODULE_2__.AnchorListOptions.getAnchors(editor),
                link: links
            },
            hasUploadPanel,
            optNode: linkNode,
            flags: {
                titleEnabled: _api_Options__WEBPACK_IMPORTED_MODULE_0__.shouldShowLinkTitle(editor)
            }
        };
    });
const DialogInfo = {
    collect
};


}),
"./src/plugins/link/main/ts/ui/UploadTab.ts": 
/*!**************************************************!*\
  !*** ./src/plugins/link/main/ts/ui/UploadTab.ts ***!
  \**************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  UploadTab: () => (UploadTab)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Arr.ts");

const makeTab = (fileTypes)=>{
    const items = [
        {
            type: 'dropzone',
            name: 'fileinput',
            buttonLabel: 'Browse for a file',
            dropAreaLabel: 'Drop a file here',
            allowedFileTypes: fileTypes.map((e)=>e.mimeType).join(','),
            allowedFileExtensions: _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.flatten(fileTypes.map((e)=>e.extensions))
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
"./src/plugins/link/main/ts/ui/sections/AnchorListOptions.ts": 
/*!*******************************************************************!*\
  !*** ./src/plugins/link/main/ts/ui/sections/AnchorListOptions.ts ***!
  \*******************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AnchorListOptions: () => (AnchorListOptions)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Arr.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Optional.ts");

// NOTE: you currently need anchors in the content for this field to appear
const getAnchors = (editor)=>{
    const anchorNodes = editor.dom.select('a:not([href])');
    const anchors = _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.bind(anchorNodes, (anchor)=>{
        const id = anchor.name || anchor.id;
        return id ? [
            {
                text: id,
                value: '#' + id
            }
        ] : [];
    });
    return anchors.length > 0 ? _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.Optional.some([
        {
            text: 'None',
            value: ''
        }
    ].concat(anchors)) : _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.Optional.none();
};
const AnchorListOptions = {
    getAnchors
};


}),
"./src/plugins/link/main/ts/ui/sections/ClassListOptions.ts": 
/*!******************************************************************!*\
  !*** ./src/plugins/link/main/ts/ui/sections/ClassListOptions.ts ***!
  \******************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ClassListOptions: () => (ClassListOptions)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Optional.ts");
/* ESM import */var _api_Options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/Options */ "./src/plugins/link/main/ts/api/Options.ts");
/* ESM import */var _core_ListOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/ListOptions */ "./src/plugins/link/main/ts/core/ListOptions.ts");



// Looks like tinymce currently renders menus, but doesn't
// let you choose from one.
const getClasses = (editor)=>{
    const list = _api_Options__WEBPACK_IMPORTED_MODULE_0__.getLinkClassList(editor);
    if (list.length > 0) {
        return _core_ListOptions__WEBPACK_IMPORTED_MODULE_1__.ListOptions.sanitize(list);
    }
    return _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.Optional.none();
};
const ClassListOptions = {
    getClasses
};


}),
"./src/plugins/link/main/ts/ui/sections/LinkListOptions.ts": 
/*!*****************************************************************!*\
  !*** ./src/plugins/link/main/ts/ui/sections/LinkListOptions.ts ***!
  \*****************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  LinkListOptions: () => (LinkListOptions)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Optional.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Type.ts");
/* ESM import */var _api_Options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/Options */ "./src/plugins/link/main/ts/api/Options.ts");
/* ESM import */var _core_ListOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/ListOptions */ "./src/plugins/link/main/ts/core/ListOptions.ts");



const parseJson = (text)=>{
    // Do some proper modelling.
    try {
        return _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.Optional.some(JSON.parse(text));
    } catch  {
        return _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.Optional.none();
    }
};
const getLinks = (editor)=>{
    const extractor = (item)=>editor.convertURL(item.value || item.url || '', 'href');
    const linkList = _api_Options__WEBPACK_IMPORTED_MODULE_0__.getLinkList(editor);
    return new Promise((resolve)=>{
        // TODO - better handling of failure
        if (_ephox_katamari__WEBPACK_IMPORTED_MODULE_3__.isString(linkList)) {
            fetch(linkList).then((res)=>res.ok ? res.text().then(parseJson) : Promise.reject()).then(resolve, ()=>resolve(_ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.Optional.none()));
        } else if (_ephox_katamari__WEBPACK_IMPORTED_MODULE_3__.isFunction(linkList)) {
            linkList((output)=>resolve(_ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.Optional.some(output)));
        } else {
            resolve(_ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.Optional.from(linkList));
        }
    }).then((optItems)=>optItems.bind(_core_ListOptions__WEBPACK_IMPORTED_MODULE_1__.ListOptions.sanitizeWith(extractor)).map((items)=>{
            if (items.length > 0) {
                const noneItem = [
                    {
                        text: 'None',
                        value: ''
                    }
                ];
                return noneItem.concat(items);
            } else {
                return items;
            }
        }));
};
const LinkListOptions = {
    getLinks
};


}),
"./src/plugins/link/main/ts/ui/sections/RelOptions.ts": 
/*!************************************************************!*\
  !*** ./src/plugins/link/main/ts/ui/sections/RelOptions.ts ***!
  \************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  RelOptions: () => (RelOptions)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Optionals.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Optional.ts");
/* ESM import */var _api_Options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/Options */ "./src/plugins/link/main/ts/api/Options.ts");
/* ESM import */var _core_ListOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/ListOptions */ "./src/plugins/link/main/ts/core/ListOptions.ts");
/* ESM import */var _core_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Utils */ "./src/plugins/link/main/ts/core/Utils.ts");




const getRels = (editor, initialTarget)=>{
    const list = _api_Options__WEBPACK_IMPORTED_MODULE_0__.getRelList(editor);
    if (list.length > 0) {
        const isTargetBlank = _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__.is(initialTarget, '_blank');
        const enforceSafe = _api_Options__WEBPACK_IMPORTED_MODULE_0__.allowUnsafeLinkTarget(editor) === false;
        const safeRelExtractor = (item)=>_core_Utils__WEBPACK_IMPORTED_MODULE_2__.applyRelTargetRules(_core_ListOptions__WEBPACK_IMPORTED_MODULE_1__.ListOptions.getValue(item), isTargetBlank);
        const sanitizer = enforceSafe ? _core_ListOptions__WEBPACK_IMPORTED_MODULE_1__.ListOptions.sanitizeWith(safeRelExtractor) : _core_ListOptions__WEBPACK_IMPORTED_MODULE_1__.ListOptions.sanitize;
        return sanitizer(list);
    }
    return _ephox_katamari__WEBPACK_IMPORTED_MODULE_4__.Optional.none();
};
const RelOptions = {
    getRels
};


}),
"./src/plugins/link/main/ts/ui/sections/TargetOptions.ts": 
/*!***************************************************************!*\
  !*** ./src/plugins/link/main/ts/ui/sections/TargetOptions.ts ***!
  \***************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  TargetOptions: () => (TargetOptions)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Type.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Optional.ts");
/* ESM import */var _api_Options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/Options */ "./src/plugins/link/main/ts/api/Options.ts");
/* ESM import */var _core_ListOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/ListOptions */ "./src/plugins/link/main/ts/core/ListOptions.ts");



// In current tinymce, targets can be nested menus.
// Do we really want to support that?
const fallbacks = [
    {
        text: 'Current window',
        value: ''
    },
    {
        text: 'New window',
        value: '_blank'
    }
];
const getTargets = (editor)=>{
    const list = _api_Options__WEBPACK_IMPORTED_MODULE_0__.getTargetList(editor);
    if (_ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.isArray(list)) {
        return _core_ListOptions__WEBPACK_IMPORTED_MODULE_1__.ListOptions.sanitize(list).orThunk(()=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_3__.Optional.some(fallbacks));
    } else if (list === false) {
        return _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__.Optional.none();
    }
    return _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__.Optional.some(fallbacks);
};
const TargetOptions = {
    getTargets
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

/*!******************************************!*\
  !*** ./src/plugins/link/main/ts/Main.ts ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _Plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Plugin */ "./src/plugins/link/main/ts/Plugin.ts");

(0,_Plugin__WEBPACK_IMPORTED_MODULE_0__["default"])(); /** *****
 * DO NOT EXPORT ANYTHING
 *
 * IF YOU DO ROLLUP WILL LEAVE A GLOBAL ON THE PAGE
 *******/ 

})();

})()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdGlueW1jZS9wbHVnaW5zL2xpbmsvcGx1Z2luLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGlueW1jZS8uL2xpYi9nbG9iYWxzL3RpbnltY2UvY29yZS9hcGkvUGx1Z2luTWFuYWdlci5qcyIsIndlYnBhY2s6Ly90aW55bWNlLy4vbGliL2dsb2JhbHMvdGlueW1jZS9jb3JlL2FwaS9kb20vVHJlZVdhbGtlci5qcyIsIndlYnBhY2s6Ly90aW55bWNlLy4vbGliL2dsb2JhbHMvdGlueW1jZS9jb3JlL2FwaS91dGlsL0RlbGF5LmpzIiwid2VicGFjazovL3RpbnltY2UvLi9saWIvZ2xvYmFscy90aW55bWNlL2NvcmUvYXBpL3V0aWwvVG9vbHMuanMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL2xpYi9nbG9iYWxzL3RpbnltY2UvY29yZS9hcGkvdXRpbC9VUkkuanMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL2xpYi9nbG9iYWxzL3RpbnltY2UvY29yZS9hcGkvdXRpbC9WSy5qcyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL2thdGFtYXJpL3NyYy9tYWluL3RzL2VwaG94L2thdGFtYXJpL2FwaS9BcnIudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9rYXRhbWFyaS9zcmMvbWFpbi90cy9lcGhveC9rYXRhbWFyaS9hcGkvQ2VsbC50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL2thdGFtYXJpL3NyYy9tYWluL3RzL2VwaG94L2thdGFtYXJpL2FwaS9GdW4udHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9rYXRhbWFyaS9zcmMvbWFpbi90cy9lcGhveC9rYXRhbWFyaS9hcGkvT2JqLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4va2F0YW1hcmkvc3JjL21haW4vdHMvZXBob3gva2F0YW1hcmkvYXBpL09wdGlvbmFsLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4va2F0YW1hcmkvc3JjL21haW4vdHMvZXBob3gva2F0YW1hcmkvYXBpL09wdGlvbmFscy50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL2thdGFtYXJpL3NyYy9tYWluL3RzL2VwaG94L2thdGFtYXJpL2FwaS9TaW5nbGV0b24udHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9rYXRhbWFyaS9zcmMvbWFpbi90cy9lcGhveC9rYXRhbWFyaS9hcGkvU3RyaW5ncy50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL2thdGFtYXJpL3NyYy9tYWluL3RzL2VwaG94L2thdGFtYXJpL2FwaS9UeXBlLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4va2F0YW1hcmkvc3JjL21haW4vdHMvZXBob3gva2F0YW1hcmkvc3RyL1N0ckFwcGVuZC50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvbGluay9tYWluL3RzL1BsdWdpbi50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvbGluay9tYWluL3RzL2FwaS9Db21tYW5kcy50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvbGluay9tYWluL3RzL2FwaS9PcHRpb25zLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9saW5rL21haW4vdHMvYXBpL1R5cGVzLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9saW5rL21haW4vdHMvY29yZS9BY3Rpb25zLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9saW5rL21haW4vdHMvY29yZS9LZXlib2FyZC50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvbGluay9tYWluL3RzL2NvcmUvTGlzdE9wdGlvbnMudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL2xpbmsvbWFpbi90cy9jb3JlL09wZW5MaW5rLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9saW5rL21haW4vdHMvY29yZS9VdGlscy50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvbGluay9tYWluL3RzL3VpL0NvbnRyb2xzLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9saW5rL21haW4vdHMvdWkvRGlhbG9nLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9saW5rL21haW4vdHMvdWkvRGlhbG9nQ2hhbmdlcy50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvbGluay9tYWluL3RzL3VpL0RpYWxvZ0NvbmZpcm1zLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9saW5rL21haW4vdHMvdWkvRGlhbG9nSW5mby50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvbGluay9tYWluL3RzL3VpL1VwbG9hZFRhYi50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvbGluay9tYWluL3RzL3VpL3NlY3Rpb25zL0FuY2hvckxpc3RPcHRpb25zLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9saW5rL21haW4vdHMvdWkvc2VjdGlvbnMvQ2xhc3NMaXN0T3B0aW9ucy50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvbGluay9tYWluL3RzL3VpL3NlY3Rpb25zL0xpbmtMaXN0T3B0aW9ucy50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvbGluay9tYWluL3RzL3VpL3NlY3Rpb25zL1JlbE9wdGlvbnMudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL2xpbmsvbWFpbi90cy91aS9zZWN0aW9ucy9UYXJnZXRPcHRpb25zLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4vLi4vbm9kZV9tb2R1bGVzL0BlcGhveC9kaXNwdXRlL3NyYy9tYWluL3RzL2FwaS9FcS50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uLy4uL25vZGVfbW9kdWxlcy9AZXBob3gvZGlzcHV0ZS9zcmMvbWFpbi90cy9jb3JlL0FycmF5VXRpbC50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uLy4uL25vZGVfbW9kdWxlcy9AZXBob3gvZGlzcHV0ZS9zcmMvbWFpbi90cy9jb3JlL1R5cGUudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lX3Byb3BlcnR5X2dldHRlcnMiLCJ3ZWJwYWNrOi8vdGlueW1jZS93ZWJwYWNrL3J1bnRpbWUvaGFzX293bl9wcm9wZXJ0eSIsIndlYnBhY2s6Ly90aW55bWNlL3dlYnBhY2svcnVudGltZS9tYWtlX25hbWVzcGFjZV9vYmplY3QiLCJ3ZWJwYWNrOi8vdGlueW1jZS93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3ZlcnNpb24iLCJ3ZWJwYWNrOi8vdGlueW1jZS93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3VuaXF1ZV9pZCIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvbGluay9tYWluL3RzL01haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGdsb2JhbCA9IHRpbnltY2UudXRpbC5Ub29scy5yZXNvbHZlKCd0aW55bWNlLlBsdWdpbk1hbmFnZXInKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2xvYmFsO1xuZXhwb3J0IHZhciBQbHVnaW5NYW5hZ2VyID0gZ2xvYmFsO1xuIiwidmFyIGdsb2JhbCA9IHRpbnltY2UudXRpbC5Ub29scy5yZXNvbHZlKCd0aW55bWNlLmRvbS5UcmVlV2Fsa2VyJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGdsb2JhbDtcbmV4cG9ydCB2YXIgVHJlZVdhbGtlciA9IGdsb2JhbDtcbiIsInZhciBnbG9iYWwgPSB0aW55bWNlLnV0aWwuVG9vbHMucmVzb2x2ZSgndGlueW1jZS51dGlsLkRlbGF5Jyk7XG5cbmV4cG9ydCBkZWZhdWx0IGdsb2JhbDtcbmV4cG9ydCB2YXIgRGVsYXkgPSBnbG9iYWw7XG4iLCJ2YXIgZ2xvYmFsID0gdGlueW1jZS51dGlsLlRvb2xzLnJlc29sdmUoJ3RpbnltY2UudXRpbC5Ub29scycpO1xuXG5leHBvcnQgZGVmYXVsdCBnbG9iYWw7XG5leHBvcnQgdmFyIFRvb2xzID0gZ2xvYmFsO1xuIiwidmFyIGdsb2JhbCA9IHRpbnltY2UudXRpbC5Ub29scy5yZXNvbHZlKCd0aW55bWNlLnV0aWwuVVJJJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGdsb2JhbDtcbmV4cG9ydCB2YXIgVVJJID0gZ2xvYmFsO1xuIiwidmFyIGdsb2JhbCA9IHRpbnltY2UudXRpbC5Ub29scy5yZXNvbHZlKCd0aW55bWNlLnV0aWwuVksnKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2xvYmFsO1xuZXhwb3J0IHZhciBWSyA9IGdsb2JhbDtcbiIsImltcG9ydCB7IEVxIH0gZnJvbSAnQGVwaG94L2Rpc3B1dGUnO1xuXG5pbXBvcnQgKiBhcyBGdW4gZnJvbSAnLi9GdW4nO1xuaW1wb3J0IHsgT3B0aW9uYWwgfSBmcm9tICcuL09wdGlvbmFsJztcbmltcG9ydCAqIGFzIFR5cGUgZnJvbSAnLi9UeXBlJztcblxudHlwZSBBcnJheU1vcnBoaXNtPFQsIFU+ID0gKHg6IFQsIGk6IG51bWJlcikgPT4gVTtcbnR5cGUgQXJyYXlHdWFyZFByZWRpY2F0ZTxULCBVIGV4dGVuZHMgVD4gPSAoeDogVCwgaTogbnVtYmVyKSA9PiB4IGlzIFU7XG50eXBlIEFycmF5UHJlZGljYXRlPFQ+ID0gQXJyYXlNb3JwaGlzbTxULCBib29sZWFuPjtcbnR5cGUgQ29tcGFyYXRvcjxUPiA9IChhOiBULCBiOiBUKSA9PiBudW1iZXI7XG5cbmNvbnN0IG5hdGl2ZVNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuY29uc3QgbmF0aXZlSW5kZXhPZiA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mO1xuY29uc3QgbmF0aXZlUHVzaCA9IEFycmF5LnByb3RvdHlwZS5wdXNoO1xuXG5jb25zdCByYXdJbmRleE9mID0gPFQ+ICh0czogQXJyYXlMaWtlPFQ+LCB0OiBUKTogbnVtYmVyID0+XG4gIG5hdGl2ZUluZGV4T2YuY2FsbCh0cywgdCk7XG5cbmV4cG9ydCBjb25zdCBpbmRleE9mID0gPFQgPSBhbnk+KHhzOiBBcnJheUxpa2U8VD4sIHg6IFQpOiBPcHRpb25hbDxudW1iZXI+ID0+IHtcbiAgLy8gVGhlIHJhd0luZGV4T2YgbWV0aG9kIGRvZXMgbm90IHdyYXAgdXAgaW4gYW4gb3B0aW9uLiBUaGlzIGlzIGZvciBwZXJmb3JtYW5jZSByZWFzb25zLlxuICBjb25zdCByID0gcmF3SW5kZXhPZih4cywgeCk7XG4gIHJldHVybiByID09PSAtMSA/IE9wdGlvbmFsLm5vbmUoKSA6IE9wdGlvbmFsLnNvbWUocik7XG59O1xuXG5leHBvcnQgY29uc3QgY29udGFpbnMgPSA8VD4oeHM6IEFycmF5TGlrZTxUPiwgeDogVCk6IGJvb2xlYW4gPT4gcmF3SW5kZXhPZih4cywgeCkgPiAtMTtcblxuZXhwb3J0IGNvbnN0IGV4aXN0cyA9IDxUID0gYW55Pih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheVByZWRpY2F0ZTxUPik6IGJvb2xlYW4gPT4ge1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0geHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgaWYgKHByZWQoeCwgaSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCBjb25zdCByYW5nZSA9IDxUPihudW06IG51bWJlciwgZjogKGE6IG51bWJlcikgPT4gVCk6IFRbXSA9PiB7XG4gIGNvbnN0IHI6IFRbXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bTsgaSsrKSB7XG4gICAgci5wdXNoKGYoaSkpO1xuICB9XG4gIHJldHVybiByO1xufTtcblxuLy8gSXQncyBhIHRvdGFsIG1pY3JvIG9wdGltaXNhdGlvbiwgYnV0IHRoZXNlIGRvIG1ha2Ugc29tZSBkaWZmZXJlbmNlLlxuLy8gUGFydGljdWxhcmx5IGZvciBicm93c2VycyBvdGhlciB0aGFuIENocm9tZS5cbi8vIC0gbGVuZ3RoIGNhY2hpbmdcbi8vIGh0dHA6Ly9qc3BlcmYuY29tL2Jyb3dzZXItZGlldC1qcXVlcnktZWFjaC12cy1mb3ItbG9vcC82OVxuLy8gLSBub3QgdXNpbmcgcHVzaFxuLy8gaHR0cDovL2pzcGVyZi5jb20vYXJyYXktZGlyZWN0LWFzc2lnbm1lbnQtdnMtcHVzaC8yXG5cbmV4cG9ydCBjb25zdCBjaHVuayA9IDxUPihhcnJheTogQXJyYXlMaWtlPFQ+LCBzaXplOiBudW1iZXIpOiBUW11bXSA9PiB7XG4gIGNvbnN0IHI6IFRbXVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpICs9IHNpemUpIHtcbiAgICBjb25zdCBzOiBUW10gPSBuYXRpdmVTbGljZS5jYWxsKGFycmF5LCBpLCBpICsgc2l6ZSk7XG4gICAgci5wdXNoKHMpO1xuICB9XG4gIHJldHVybiByO1xufTtcblxuZXhwb3J0IGNvbnN0IG1hcCA9IDxUID0gYW55LCBVID0gYW55Pih4czogQXJyYXlMaWtlPFQ+LCBmOiBBcnJheU1vcnBoaXNtPFQsIFU+KTogVVtdID0+IHtcbiAgLy8gcHJlLWFsbG9jYXRpbmcgYXJyYXkgc2l6ZSB3aGVuIGl0J3MgZ3VhcmFudGVlZCB0byBiZSBrbm93blxuICAvLyBodHRwOi8vanNwZXJmLmNvbS9wdXNoLWFsbG9jYXRlZC12cy1keW5hbWljLzIyXG4gIGNvbnN0IGxlbiA9IHhzLmxlbmd0aDtcbiAgY29uc3QgciA9IG5ldyBBcnJheShsZW4pO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIHJbaV0gPSBmKHgsIGkpO1xuICB9XG4gIHJldHVybiByO1xufTtcblxuLy8gVW53b3VuZCBpbXBsZW1lbnRpbmcgb3RoZXIgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGVhY2guXG4vLyBUaGUgY29kZSBzaXplIGlzIHJvdWdobHkgdGhlIHNhbWUsIGFuZCBpdCBzaG91bGQgYWxsb3cgZm9yIGJldHRlciBvcHRpbWlzYXRpb24uXG4vLyBjb25zdCBlYWNoID0gZnVuY3Rpb248VCwgVT4oeHM6IFRbXSwgZjogKHg6IFQsIGk/OiBudW1iZXIsIHhzPzogVFtdKSA9PiB2b2lkKTogdm9pZCB7XG5leHBvcnQgY29uc3QgZWFjaCA9IDxUID0gYW55Pih4czogQXJyYXlMaWtlPFQ+LCBmOiBBcnJheU1vcnBoaXNtPFQsIHZvaWQ+KTogdm9pZCA9PiB7XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICBmKHgsIGkpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZWFjaHIgPSA8VD4oeHM6IEFycmF5TGlrZTxUPiwgZjogQXJyYXlNb3JwaGlzbTxULCB2b2lkPik6IHZvaWQgPT4ge1xuICBmb3IgKGxldCBpID0geHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgZih4LCBpKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHBhcnRpdGlvbiA9IDxUID0gYW55Pih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheVByZWRpY2F0ZTxUPik6IHsgcGFzczogVFtdOyBmYWlsOiBUW10gfSA9PiB7XG4gIGNvbnN0IHBhc3M6IFRbXSA9IFtdO1xuICBjb25zdCBmYWlsOiBUW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHhzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIGNvbnN0IGFyciA9IHByZWQoeCwgaSkgPyBwYXNzIDogZmFpbDtcbiAgICBhcnIucHVzaCh4KTtcbiAgfVxuICByZXR1cm4geyBwYXNzLCBmYWlsIH07XG59O1xuXG5leHBvcnQgY29uc3QgZmlsdGVyOiB7XG4gIDxULCBVIGV4dGVuZHMgVD4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlHdWFyZFByZWRpY2F0ZTxULCBVPik6IFVbXTtcbiAgPFQ+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+KTogVFtdO1xufSA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheVByZWRpY2F0ZTxUPik6IFRbXSA9PiB7XG4gIGNvbnN0IHI6IFRbXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0geHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgaWYgKHByZWQoeCwgaSkpIHtcbiAgICAgIHIucHVzaCh4KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHI7XG59O1xuXG4vKlxuICogR3JvdXBzIGFuIGFycmF5IGludG8gY29udGlndW91cyBhcnJheXMgb2YgbGlrZSBlbGVtZW50cy4gV2hldGhlciBhbiBlbGVtZW50IGlzIGxpa2Ugb3Igbm90IGRlcGVuZHMgb24gZi5cbiAqXG4gKiBmIGlzIGEgZnVuY3Rpb24gdGhhdCBkZXJpdmVzIGEgdmFsdWUgZnJvbSBhbiBlbGVtZW50IC0gZS5nLiB0cnVlIG9yIGZhbHNlLCBvciBhIHN0cmluZy5cbiAqIEVsZW1lbnRzIGFyZSBsaWtlIGlmIHRoaXMgZnVuY3Rpb24gZ2VuZXJhdGVzIHRoZSBzYW1lIHZhbHVlIGZvciB0aGVtIChhY2NvcmRpbmcgdG8gPT09KS5cbiAqXG4gKlxuICogT3JkZXIgb2YgdGhlIGVsZW1lbnRzIGlzIHByZXNlcnZlZC4gQXJyLmZsYXR0ZW4oKSBvbiB0aGUgcmVzdWx0IHdpbGwgcmV0dXJuIHRoZSBvcmlnaW5hbCBsaXN0LCBhcyB3aXRoIEhhc2tlbGwgZ3JvdXBCeSBmdW5jdGlvbi5cbiAqICBGb3IgYSBnb29kIGV4cGxhbmF0aW9uLCBzZWUgdGhlIGdyb3VwIGZ1bmN0aW9uICh3aGljaCBpcyBhIHNwZWNpYWwgY2FzZSBvZiBncm91cEJ5KVxuICogIGh0dHA6Ly9oYWNrYWdlLmhhc2tlbGwub3JnL3BhY2thZ2UvYmFzZS00LjcuMC4wL2RvY3MvRGF0YS1MaXN0Lmh0bWwjdjpncm91cFxuICovXG5leHBvcnQgY29uc3QgZ3JvdXBCeSA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCBmOiAoYTogVCkgPT4gYW55KTogVFtdW10gPT4ge1xuICBpZiAoeHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9IGVsc2Uge1xuICAgIGxldCB3YXNUeXBlID0gZih4c1swXSk7IC8vIGluaXRpYWwgY2FzZSBmb3IgbWF0Y2hpbmdcbiAgICBjb25zdCByOiBUW11bXSA9IFtdO1xuICAgIGxldCBncm91cDogVFtdID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0geHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICAgIGNvbnN0IHR5cGUgPSBmKHgpO1xuICAgICAgaWYgKHR5cGUgIT09IHdhc1R5cGUpIHtcbiAgICAgICAgci5wdXNoKGdyb3VwKTtcbiAgICAgICAgZ3JvdXAgPSBbXTtcbiAgICAgIH1cbiAgICAgIHdhc1R5cGUgPSB0eXBlO1xuICAgICAgZ3JvdXAucHVzaCh4KTtcbiAgICB9XG4gICAgaWYgKGdyb3VwLmxlbmd0aCAhPT0gMCkge1xuICAgICAgci5wdXNoKGdyb3VwKTtcbiAgICB9XG4gICAgcmV0dXJuIHI7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBmb2xkciA9IDxULCBVPih4czogQXJyYXlMaWtlPFQ+LCBmOiAoYWNjOiBVLCB4OiBULCBpOiBudW1iZXIpID0+IFUsIGFjYzogVSk6IFUgPT4ge1xuICBlYWNocih4cywgKHgsIGkpID0+IHtcbiAgICBhY2MgPSBmKGFjYywgeCwgaSk7XG4gIH0pO1xuICByZXR1cm4gYWNjO1xufTtcblxuZXhwb3J0IGNvbnN0IGZvbGRsID0gPFQgPSBhbnksIFUgPSBhbnk+KHhzOiBBcnJheUxpa2U8VD4sIGY6IChhY2M6IFUsIHg6IFQsIGk6IG51bWJlcikgPT4gVSwgYWNjOiBVKTogVSA9PiB7XG4gIGVhY2goeHMsICh4LCBpKSA9PiB7XG4gICAgYWNjID0gZihhY2MsIHgsIGkpO1xuICB9KTtcbiAgcmV0dXJuIGFjYztcbn07XG5cbmV4cG9ydCBjb25zdCBmaW5kVW50aWw6IHtcbiAgPFQsIFUgZXh0ZW5kcyBUPih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheUd1YXJkUHJlZGljYXRlPFQsIFU+LCB1bnRpbDogQXJyYXlQcmVkaWNhdGU8VD4pOiBPcHRpb25hbDxVPjtcbiAgPFQgPSBhbnk+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+LCB1bnRpbDogQXJyYXlQcmVkaWNhdGU8VD4pOiBPcHRpb25hbDxUPjtcbn0gPSA8VD4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlQcmVkaWNhdGU8VD4sIHVudGlsOiBBcnJheVByZWRpY2F0ZTxUPik6IE9wdGlvbmFsPFQ+ID0+IHtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHhzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIGlmIChwcmVkKHgsIGkpKSB7XG4gICAgICByZXR1cm4gT3B0aW9uYWwuc29tZSh4KTtcbiAgICB9IGVsc2UgaWYgKHVudGlsKHgsIGkpKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIE9wdGlvbmFsLm5vbmUoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmaW5kOiB7XG4gIDxULCBVIGV4dGVuZHMgVD4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlHdWFyZFByZWRpY2F0ZTxULCBVPik6IE9wdGlvbmFsPFU+O1xuICA8VCA9IGFueT4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlQcmVkaWNhdGU8VD4pOiBPcHRpb25hbDxUPjtcbn0gPSA8VD4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlQcmVkaWNhdGU8VD4pOiBPcHRpb25hbDxUPiA9PiB7XG4gIHJldHVybiBmaW5kVW50aWwoeHMsIHByZWQsIEZ1bi5uZXZlcik7XG59O1xuXG5leHBvcnQgY29uc3QgZmluZEluZGV4ID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+KTogT3B0aW9uYWw8bnVtYmVyPiA9PiB7XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICBpZiAocHJlZCh4LCBpKSkge1xuICAgICAgcmV0dXJuIE9wdGlvbmFsLnNvbWUoaSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIE9wdGlvbmFsLm5vbmUoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmaW5kTGFzdEluZGV4ID0gPFQ+KGFycjogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheVByZWRpY2F0ZTxUPik6IE9wdGlvbmFsPG51bWJlcj4gPT4ge1xuICBmb3IgKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgaWYgKHByZWQoYXJyW2ldLCBpKSkge1xuICAgICAgcmV0dXJuIE9wdGlvbmFsLnNvbWUoaSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIE9wdGlvbmFsLm5vbmUoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmbGF0dGVuID0gPFQ+KHhzOiBBcnJheUxpa2U8VFtdPik6IFRbXSA9PiB7XG4gIC8vIE5vdGUsIHRoaXMgaXMgcG9zc2libGUgYmVjYXVzZSBwdXNoIHN1cHBvcnRzIG11bHRpcGxlIGFyZ3VtZW50czpcbiAgLy8gaHR0cDovL2pzcGVyZi5jb20vY29uY2F0LXB1c2gvNlxuICAvLyBOb3RlIHRoYXQgaW4gdGhlIHBhc3QsIGNvbmNhdCgpIHdvdWxkIHNpbGVudGx5IHdvcmsgKHZlcnkgc2xvd2x5KSBmb3IgYXJyYXktbGlrZSBvYmplY3RzLlxuICAvLyBXaXRoIHRoaXMgY2hhbmdlIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3IuXG4gIGNvbnN0IHI6IFRbXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0geHMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAvLyBFbnN1cmUgdGhhdCBlYWNoIHZhbHVlIGlzIGFuIGFycmF5IGl0c2VsZlxuICAgIGlmICghVHlwZS5pc0FycmF5KHhzW2ldKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBcnIuZmxhdHRlbiBpdGVtICcgKyBpICsgJyB3YXMgbm90IGFuIGFycmF5LCBpbnB1dDogJyArIHhzKTtcbiAgICB9XG4gICAgbmF0aXZlUHVzaC5hcHBseShyLCB4c1tpXSk7XG4gIH1cbiAgcmV0dXJuIHI7XG59O1xuXG5leHBvcnQgY29uc3QgYmluZCA9IDxUID0gYW55LCBVID0gYW55Pih4czogQXJyYXlMaWtlPFQ+LCBmOiBBcnJheU1vcnBoaXNtPFQsIFVbXT4pOiBVW10gPT5cbiAgZmxhdHRlbihtYXAoeHMsIGYpKTtcblxuZXhwb3J0IGNvbnN0IGZvcmFsbCA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheVByZWRpY2F0ZTxUPik6IGJvb2xlYW4gPT4ge1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0geHMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgaWYgKHByZWQoeCwgaSkgIT09IHRydWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5leHBvcnQgY29uc3QgZXF1YWwgPSA8VD4oYTE6IEFycmF5TGlrZTxUPiwgYTI6IEFycmF5TGlrZTxUPiwgZXE6IEVxLkVxPFQ+ID0gRXEuZXFBbnkpOiBib29sZWFuID0+XG4gIEVxLmVxQXJyYXkoZXEpLmVxKGExLCBhMik7XG5cbmV4cG9ydCBjb25zdCByZXZlcnNlID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4pOiBUW10gPT4ge1xuICBjb25zdCByOiBUW10gPSBuYXRpdmVTbGljZS5jYWxsKHhzLCAwKTtcbiAgci5yZXZlcnNlKCk7XG4gIHJldHVybiByO1xufTtcblxuZXhwb3J0IGNvbnN0IGRpZmZlcmVuY2UgPSA8VD4oYTE6IEFycmF5TGlrZTxUPiwgYTI6IEFycmF5TGlrZTxUPik6IFRbXSA9PiBmaWx0ZXIoYTEsICh4KSA9PiAhY29udGFpbnMoYTIsIHgpKTtcblxuZXhwb3J0IGNvbnN0IG1hcFRvT2JqZWN0OiB7XG4gIDxUIGV4dGVuZHMgc3RyaW5nLCBVPih4czogQXJyYXlMaWtlPFQ+LCBmOiAoeDogVCwgaTogbnVtYmVyKSA9PiBVKTogUmVjb3JkPFQsIFU+O1xuICA8VCwgUiBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4+KHhzOiBBcnJheUxpa2U8VD4sIGY6ICh4OiBULCBpOiBudW1iZXIpID0+IFJba2V5b2YgUl0pOiBSO1xufSA9IDxULCBSIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55Pj4oeHM6IEFycmF5TGlrZTxUPiwgZjogKHg6IFQsIGk6IG51bWJlcikgPT4gUltrZXlvZiBSXSk6IFIgPT4ge1xuICBjb25zdCByID0ge30gYXMgUjtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHhzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIHJbU3RyaW5nKHgpIGFzIGtleW9mIFJdID0gZih4LCBpKTtcbiAgfVxuICByZXR1cm4gcjtcbn07XG5cbmV4cG9ydCBjb25zdCBwdXJlID0gPFQ+KHg6IFQpOiBUW10gPT4gWyB4IF07XG5cbmV4cG9ydCBjb25zdCBzb3J0ID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4sIGNvbXBhcmF0b3I/OiBDb21wYXJhdG9yPFQ+KTogVFtdID0+IHtcbiAgY29uc3QgY29weTogVFtdID0gbmF0aXZlU2xpY2UuY2FsbCh4cywgMCk7XG4gIGNvcHkuc29ydChjb21wYXJhdG9yKTtcbiAgcmV0dXJuIGNvcHk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0ID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4sIGk6IG51bWJlcik6IE9wdGlvbmFsPFQ+ID0+IGkgPj0gMCAmJiBpIDwgeHMubGVuZ3RoID8gT3B0aW9uYWwuc29tZSh4c1tpXSkgOiBPcHRpb25hbC5ub25lKCk7XG5cbmV4cG9ydCBjb25zdCBoZWFkID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4pOiBPcHRpb25hbDxUPiA9PiBnZXQoeHMsIDApO1xuXG5leHBvcnQgY29uc3QgbGFzdCA9IDxUPih4czogQXJyYXlMaWtlPFQ+KTogT3B0aW9uYWw8VD4gPT4gZ2V0KHhzLCB4cy5sZW5ndGggLSAxKTtcblxuZXhwb3J0IGNvbnN0IGZyb206IDxUPih4OiBBcnJheUxpa2U8VD4pID0+IFRbXSA9IFR5cGUuaXNGdW5jdGlvbihBcnJheS5mcm9tKSA/IEFycmF5LmZyb20gOiAoeCkgPT4gbmF0aXZlU2xpY2UuY2FsbCh4KTtcblxuZXhwb3J0IGNvbnN0IGZpbmRNYXAgPSA8QSwgQj4oYXJyOiBBcnJheUxpa2U8QT4sIGY6IChhOiBBLCBpbmRleDogbnVtYmVyKSA9PiBPcHRpb25hbDxCPik6IE9wdGlvbmFsPEI+ID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCByID0gZihhcnJbaV0sIGkpO1xuICAgIGlmIChyLmlzU29tZSgpKSB7XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIE9wdGlvbmFsLm5vbmU8Qj4oKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1bmlxdWUgPSA8VD4oeHM6IEFycmF5TGlrZTxUPiwgY29tcGFyYXRvcj86IChhOiBULCBiOiBUKSA9PiBib29sZWFuKTogVFtdID0+IHtcbiAgY29uc3QgcjogVFtdID0gW107XG5cbiAgY29uc3QgaXNEdXBsaWNhdGVkID0gVHlwZS5pc0Z1bmN0aW9uKGNvbXBhcmF0b3IpID9cbiAgICAoeDogVCkgPT4gZXhpc3RzKHIsIChpKSA9PiBjb21wYXJhdG9yKGksIHgpKSA6XG4gICAgKHg6IFQpID0+IGNvbnRhaW5zKHIsIHgpO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICBpZiAoIWlzRHVwbGljYXRlZCh4KSkge1xuICAgICAgci5wdXNoKHgpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByO1xufTtcbiIsImV4cG9ydCBpbnRlcmZhY2UgQ2VsbDxUPiB7XG4gIHJlYWRvbmx5IGdldDogKCkgPT4gVDtcbiAgcmVhZG9ubHkgc2V0OiAodmFsdWU6IFQpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBDZWxsID0gPFQ+KGluaXRpYWw6IFQpOiBDZWxsPFQ+ID0+IHtcbiAgbGV0IHZhbHVlID0gaW5pdGlhbDtcblxuICBjb25zdCBnZXQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuXG4gIGNvbnN0IHNldCA9ICh2OiBUKSA9PiB7XG4gICAgdmFsdWUgPSB2O1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0LFxuICAgIHNldFxuICB9O1xufTtcbiIsImltcG9ydCAqIGFzIFR5cGUgZnJvbSAnLi9UeXBlJztcblxuY29uc3Qgbm9vcDogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkXG49ICgpID0+IHsgfTtcblxuY29uc3Qgbm9hcmc6IDxUPihmOiAoKSA9PiBUKSA9PiAoLi4uYXJnczogYW55W10pID0+IHZvaWRcbj0gKGYpID0+ICgpID0+IGYoKTtcblxuLyoqIENvbXBvc2UgYSB1bmFyeSBmdW5jdGlvbiB3aXRoIGFuIG4tYXJ5IGZ1bmN0aW9uICovXG5jb25zdCBjb21wb3NlID0gPFQgZXh0ZW5kcyBhbnlbXSwgVSwgVj4oZmE6ICh2OiBVKSA9PiBWLCBmYjogKC4uLng6IFQpID0+IFUpOiAoLi4ueDogVCkgPT4gViA9PiB7XG4gIHJldHVybiAoLi4uYXJnczogVCkgPT4ge1xuICAgIHJldHVybiBmYShmYi5hcHBseShudWxsLCBhcmdzKSk7XG4gIH07XG59O1xuXG4vKiogQ29tcG9zZSB0d28gdW5hcnkgZnVuY3Rpb25zLiBTaW1pbGFyIHRvIGNvbXBvc2UsIGJ1dCBhdm9pZHMgdXNpbmcgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LiAqL1xuY29uc3QgY29tcG9zZTEgPSA8QSwgQiwgQz4gKGZiYzogKGI6IEIpID0+IEMsIGZhYjogKGE6IEEpID0+IEIpID0+IChhOiBBKTogQyA9PlxuICBmYmMoZmFiKGEpKTtcblxuY29uc3QgY29uc3RhbnQgPSA8VD4odmFsdWU6IFQpOiAoKSA9PiBUID0+IHtcbiAgcmV0dXJuICgpID0+IHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG59O1xuXG5jb25zdCBpZGVudGl0eSA9IDxUID0gYW55Pih4OiBUKTogVCA9PiB7XG4gIHJldHVybiB4O1xufTtcblxuY29uc3QgdHJpcGxlRXF1YWxzID0gPFQ+KGE6IFQsIGI6IFQpOiBib29sZWFuID0+IHtcbiAgcmV0dXJuIGEgPT09IGI7XG59O1xuXG5mdW5jdGlvbiBjdXJyeSA8UkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCk6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPEEsIFJFU1QgZXh0ZW5kcyBhbnlbXSwgT1VUPihmbjogKGE6IEEsIC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQsIGE6IEEpOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVDtcbmZ1bmN0aW9uIGN1cnJ5IDxBLCBCLCBSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46IChhOiBBLCBiOiBCLCAuLi5yZXN0QXJnczogUkVTVCkgPT4gT1VULCBhOiBBLCBiOiBCKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8QSwgQiwgQywgUkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoYTogQSwgYjogQiwgYzogQywgLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCwgYTogQSwgYjogQiwgYzogQyk6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPEEsIEIsIEMsIEQsIFJFU1QgZXh0ZW5kcyBhbnlbXSwgT1VUPihmbjogKGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQsIGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQpOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVDtcbmZ1bmN0aW9uIGN1cnJ5IDxBLCBCLCBDLCBELCBFLCBSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46IChhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCAuLi5yZXN0QXJnczogUkVTVCkgPT4gT1VULCBhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8QSwgQiwgQywgRCwgRSwgRiwgUkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgZjogRiwgLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCwgYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgZjogRik6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPEEsIEIsIEMsIEQsIEUsIEYsIEcsIFJFU1QgZXh0ZW5kcyBhbnlbXSwgT1VUPihmbjogKGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIGY6IEYsIGc6IEcsIC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQsIGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIGY6IEYsIGc6IEcpOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVDtcbmZ1bmN0aW9uIGN1cnJ5IDxBLCBCLCBDLCBELCBFLCBGLCBHLCBILCBSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46IChhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCBmOiBGLCBnOiBHLCBoOiBILCAuLi5yZXN0QXJnczogUkVTVCkgPT4gT1VULCBhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCBmOiBGLCBnOiBHLCBoOiBIKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8QSwgQiwgQywgRCwgRSwgRiwgRywgSCwgSSwgUkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgZjogRiwgZzogRywgaDogSCwgaTogSSwgLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCwgYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgZjogRiwgZzogRywgaDogSCwgaTogSSk6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPEEsIEIsIEMsIEQsIEUsIEYsIEcsIEgsIEksIEosIFJFU1QgZXh0ZW5kcyBhbnlbXSwgT1VUPihmbjogKGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIGY6IEYsIGc6IEcsIGg6IEgsIGk6IEksIGo6IEosIC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQsIGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIGY6IEYsIGc6IEcsIGg6IEgsIGk6IEksIGo6IEopOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVDtcbmZ1bmN0aW9uIGN1cnJ5IDxPVVQ+KGZuOiAoLi4uYWxsQXJnczogYW55W10pID0+IE9VVCwgLi4uaW5pdGlhbEFyZ3M6IGFueVtdKTogKC4uLnJlc3RBcmdzOiBhbnlbXSkgPT4gT1VUIHtcbiAgcmV0dXJuICguLi5yZXN0QXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCBhbGwgPSBpbml0aWFsQXJncy5jb25jYXQocmVzdEFyZ3MpO1xuICAgIHJldHVybiBmbi5hcHBseShudWxsLCBhbGwpO1xuICB9O1xufVxuXG5jb25zdCBub3QgPSA8VD4oZjogKHQ6IFQpID0+IGJvb2xlYW4pID0+ICh0OiBUKTogYm9vbGVhbiA9PlxuICAhZih0KTtcblxuY29uc3QgZGllID0gKG1zZzogc3RyaW5nKSA9PiB7XG4gIHJldHVybiAoKTogbmV2ZXIgPT4ge1xuICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xuICB9O1xufTtcblxuY29uc3QgYXBwbHkgPSA8VD4oZjogKCkgPT4gVCk6IFQgPT4ge1xuICByZXR1cm4gZigpO1xufTtcblxuY29uc3QgY2FsbCA9IChmOiAoKSA9PiBhbnkpOiB2b2lkID0+IHtcbiAgZigpO1xufTtcblxuY29uc3QgbmV2ZXI6ICguLi5hcmdzOiBhbnlbXSkgPT4gZmFsc2UgPSBjb25zdGFudDxmYWxzZT4oZmFsc2UpO1xuY29uc3QgYWx3YXlzOiAoLi4uYXJnczogYW55W10pID0+IHRydWUgPSBjb25zdGFudDx0cnVlPih0cnVlKTtcblxuLyogVXNlZCB0byB3ZWFrZW4gdHlwZXMgKi9cbmNvbnN0IHdlYWtlbiA9IDxBLCBCIGV4dGVuZHMgQT4oYjogQik6IEEgPT4gYjtcblxudHlwZSBGdW48WCwgWT4gPSAoeDogWCkgPT4gWTtcbmNvbnN0IHBpcGU6IHtcbiAgPEEsIEI+KGE6IEEsIGFiOiBGdW48QSwgQj4pOiBCO1xuICA8QSwgQiwgQz4oYTogQSwgYWI6IEZ1bjxBLCBCPiwgYmM6IEZ1bjxCLCBDPik6IEM7XG4gIDxBLCBCLCBDLCBEPihhOiBBLCBhYjogRnVuPEEsIEI+LCBiYzogRnVuPEIsIEM+LCBjZDogRnVuPEMsIEQ+KTogRDtcbiAgPEEsIEIsIEMsIEQsIEU+KGE6IEEsIGFiOiBGdW48QSwgQj4sIGJjOiBGdW48QiwgQz4sIGNkOiBGdW48QywgRD4sIGRlOiBGdW48RCwgRT4pOiBFO1xuICA8QSwgQiwgQywgRCwgRSwgRj4oYTogQSwgYWI6IEZ1bjxBLCBCPiwgYmM6IEZ1bjxCLCBDPiwgY2Q6IEZ1bjxDLCBEPiwgZGU6IEZ1bjxELCBFPiwgZWY6IEZ1bjxFLCBGPik6IEY7XG4gIDxBLCBCLCBDLCBELCBFLCBGLCBHPihhOiBBLCBhYjogRnVuPEEsIEI+LCBiYzogRnVuPEIsIEM+LCBjZDogRnVuPEMsIEQ+LCBkZTogRnVuPEQsIEU+LCBlZjogRnVuPEUsIEY+LCBmZzogRnVuPEYsIEc+KTogRztcbiAgPEEsIEIsIEMsIEQsIEUsIEYsIEcsIEg+KGE6IEEsIGFiOiBGdW48QSwgQj4sIGJjOiBGdW48QiwgQz4sIGNkOiBGdW48QywgRD4sIGRlOiBGdW48RCwgRT4sIGVmOiBGdW48RSwgRj4sIGZnOiBGdW48RiwgRz4sIGdoOiBGdW48RywgSD4pOiBIO1xufSA9XG4gIDxBLCBCLCBDLCBELCBFLCBGLCBHLCBIPihhOiBBLCBhYjogRnVuPEEsIEI+LCBiYz86IEZ1bjxCLCBDPiwgY2Q/OiBGdW48QywgRD4sIGRlPzogRnVuPEQsIEU+LCBlZj86IEZ1bjxFLCBGPiwgZmc/OiBGdW48RiwgRz4sIGdoPzogRnVuPEcsIEg+KTogQiB8IEMgfCBEIHwgRSB8IEYgfCBHIHwgSCA9PiB7XG4gICAgY29uc3QgYiA9IGFiKGEpO1xuICAgIGlmIChUeXBlLmlzTnVsbGFibGUoYmMpKSB7XG4gICAgICByZXR1cm4gYjtcbiAgICB9XG5cbiAgICBjb25zdCBjID0gYmMoYik7XG4gICAgaWYgKFR5cGUuaXNOdWxsYWJsZShjZCkpIHtcbiAgICAgIHJldHVybiBjO1xuICAgIH1cblxuICAgIGNvbnN0IGQgPSBjZChjKTtcbiAgICBpZiAoVHlwZS5pc051bGxhYmxlKGRlKSkge1xuICAgICAgcmV0dXJuIGQ7XG4gICAgfVxuXG4gICAgY29uc3QgZSA9IGRlKGQpO1xuICAgIGlmIChUeXBlLmlzTnVsbGFibGUoZWYpKSB7XG4gICAgICByZXR1cm4gZTtcbiAgICB9XG5cbiAgICBjb25zdCBmID0gZWYoZSk7XG4gICAgaWYgKFR5cGUuaXNOdWxsYWJsZShmZykpIHtcbiAgICAgIHJldHVybiBmO1xuICAgIH1cblxuICAgIGNvbnN0IGcgPSBmZyhmKTtcbiAgICBpZiAoVHlwZS5pc051bGxhYmxlKGdoKSkge1xuICAgICAgcmV0dXJuIGc7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdoKGcpO1xuICB9O1xuXG5leHBvcnQge1xuICBub29wLFxuICBub2FyZyxcbiAgY29tcG9zZSxcbiAgY29tcG9zZTEsXG4gIGNvbnN0YW50LFxuICBpZGVudGl0eSxcbiAgdHJpcGxlRXF1YWxzLFxuICBjdXJyeSxcbiAgbm90LFxuICBkaWUsXG4gIGFwcGx5LFxuICBjYWxsLFxuICBuZXZlcixcbiAgYWx3YXlzLFxuICB3ZWFrZW4sXG4gIHBpcGVcbn07XG4iLCJpbXBvcnQgeyBFcSB9IGZyb20gJ0BlcGhveC9kaXNwdXRlJztcblxuaW1wb3J0ICogYXMgRnVuIGZyb20gJy4vRnVuJztcbmltcG9ydCB7IE9wdGlvbmFsIH0gZnJvbSAnLi9PcHRpb25hbCc7XG5cbnR5cGUgT2JqS2V5czxUIGV4dGVuZHMge30+ID0gRXh0cmFjdDxrZXlvZiBULCBzdHJpbmc+O1xudHlwZSBPYmpDYWxsYmFjazxUIGV4dGVuZHMge30+ID0gKHZhbHVlOiBUW2tleW9mIFRdLCBrZXk6IE9iaktleXM8VD4pID0+IHZvaWQ7XG50eXBlIE9iak1vcnBoaXNtPFQgZXh0ZW5kcyB7fSwgUj4gPSAodmFsdWU6IFRba2V5b2YgVF0sIGtleTogT2JqS2V5czxUPikgPT4gUjtcbnR5cGUgT2JqR3VhcmRQcmVkaWNhdGU8VCBleHRlbmRzIHt9LCBVIGV4dGVuZHMgVFtrZXlvZiBUXT4gPSAodmFsdWU6IFRba2V5b2YgVF0sIGtleTogT2JqS2V5czxUPikgPT4gdmFsdWUgaXMgVTtcbnR5cGUgT2JqUHJlZGljYXRlPFQgZXh0ZW5kcyB7fT4gPSAodmFsdWU6IFRba2V5b2YgVF0sIGtleTogT2JqS2V5czxUPikgPT4gYm9vbGVhbjtcblxuLy8gVGhlcmUgYXJlIG1hbnkgdmFyaWF0aW9ucyBvZiBPYmplY3QgaXRlcmF0aW9uIHRoYXQgYXJlIGZhc3RlciB0aGFuIHRoZSAnZm9yLWluJyBzdHlsZTpcbi8vIGh0dHA6Ly9qc3BlcmYuY29tL29iamVjdC1rZXlzLWl0ZXJhdGlvbi8xMDdcbi8vXG4vLyBVc2UgdGhlIG5hdGl2ZSBrZXlzIGlmIGl0IGlzIGF2YWlsYWJsZSAoSUU5KyksIG90aGVyd2lzZSBmYWxsIGJhY2sgdG8gbWFudWFsbHkgZmlsdGVyaW5nXG5leHBvcnQgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzO1xuXG5leHBvcnQgY29uc3QgaGFzT3duUHJvcGVydHkgPSBPYmplY3QuaGFzT3duUHJvcGVydHk7XG5cbmV4cG9ydCBjb25zdCBlYWNoID0gPFQgZXh0ZW5kcyB7fT4ob2JqOiBULCBmOiBPYmpDYWxsYmFjazxUPik6IHZvaWQgPT4ge1xuICBjb25zdCBwcm9wcyA9IGtleXMob2JqKSBhcyBBcnJheTxPYmpLZXlzPFQ+PjtcbiAgZm9yIChsZXQgayA9IDAsIGxlbiA9IHByb3BzLmxlbmd0aDsgayA8IGxlbjsgaysrKSB7XG4gICAgY29uc3QgaSA9IHByb3BzW2tdO1xuICAgIGNvbnN0IHggPSBvYmpbaV07XG4gICAgZih4LCBpKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IG1hcCA9IDxUIGV4dGVuZHMge30sIFI+KG9iajogVCwgZjogT2JqTW9ycGhpc208VCwgUj4pOiB7IFtrIGluIGtleW9mIFRdOiBSIH0gPT4ge1xuICByZXR1cm4gdHVwbGVNYXA8eyBbayBpbiBrZXlvZiBUXTogUiB9LCBUPihvYmosICh4LCBpKSA9PiAoe1xuICAgIGs6IGksXG4gICAgdjogZih4LCBpKVxuICB9KSk7XG59O1xuXG5leHBvcnQgY29uc3QgdHVwbGVNYXAgPSA8UiBleHRlbmRzIHt9LCBUIGV4dGVuZHMge30+KG9iajogVCwgZjogT2JqTW9ycGhpc208VCwgeyBrOiBrZXlvZiBSOyB2OiBSW2tleW9mIFJdIH0+KTogUiA9PiB7XG4gIGNvbnN0IHIgPSB7fSBhcyBSO1xuICBlYWNoKG9iaiwgKHgsIGkpID0+IHtcbiAgICBjb25zdCB0dXBsZSA9IGYoeCwgaSk7XG4gICAgclt0dXBsZS5rXSA9IHR1cGxlLnY7XG4gIH0pO1xuICByZXR1cm4gcjtcbn07XG5cbmNvbnN0IG9iakFjYyA9IDxUIGV4dGVuZHMge30+KHI6IFQpID0+ICh4OiBUW2tleW9mIFRdLCBpOiBrZXlvZiBUKTogdm9pZCA9PiB7XG4gIHJbaV0gPSB4O1xufTtcblxuY29uc3QgaW50ZXJuYWxGaWx0ZXIgPSA8VCBleHRlbmRzIHt9PihvYmo6IFQsIHByZWQ6IE9ialByZWRpY2F0ZTxUPiwgb25UcnVlOiBPYmpDYWxsYmFjazxUPiwgb25GYWxzZTogT2JqQ2FsbGJhY2s8VD4pID0+IHtcbiAgZWFjaChvYmosICh4LCBpKSA9PiB7XG4gICAgKHByZWQoeCwgaSkgPyBvblRydWUgOiBvbkZhbHNlKSh4LCBpKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgYmlmaWx0ZXIgPSA8VCBleHRlbmRzIHt9PihvYmo6IFQsIHByZWQ6IE9ialByZWRpY2F0ZTxUPik6IHsgdDogUmVjb3JkPHN0cmluZywgVFtrZXlvZiBUXT47IGY6IFJlY29yZDxzdHJpbmcsIFRba2V5b2YgVF0+IH0gPT4ge1xuICBjb25zdCB0OiBSZWNvcmQ8c3RyaW5nLCBUW2tleW9mIFRdPiA9IHt9O1xuICBjb25zdCBmOiBSZWNvcmQ8c3RyaW5nLCBUW2tleW9mIFRdPiA9IHt9O1xuICBpbnRlcm5hbEZpbHRlcihvYmosIHByZWQsIG9iakFjYyh0KSwgb2JqQWNjKGYpKTtcbiAgcmV0dXJuIHsgdCwgZiB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbHRlcjoge1xuICA8VCBleHRlbmRzIHt9LCBVIGV4dGVuZHMgVFtrZXlvZiBUXT4ob2JqOiBULCBwcmVkOiBPYmpHdWFyZFByZWRpY2F0ZTxULCBVPik6IFJlY29yZDxzdHJpbmcsIFU+O1xuICA8VCBleHRlbmRzIHt9PihvYmo6IFQsIHByZWQ6IE9ialByZWRpY2F0ZTxUPik6IFJlY29yZDxzdHJpbmcsIFRba2V5b2YgVF0+O1xufSA9IDxUIGV4dGVuZHMge30+KG9iajogVCwgcHJlZDogT2JqUHJlZGljYXRlPFQ+KTogUmVjb3JkPHN0cmluZywgVFtrZXlvZiBUXT4gPT4ge1xuICBjb25zdCB0OiBSZWNvcmQ8c3RyaW5nLCBUW2tleW9mIFRdPiA9IHt9O1xuICBpbnRlcm5hbEZpbHRlcihvYmosIHByZWQsIG9iakFjYyh0KSwgRnVuLm5vb3ApO1xuICByZXR1cm4gdDtcbn07XG5cbmV4cG9ydCBjb25zdCBtYXBUb0FycmF5ID0gPFQgZXh0ZW5kcyB7fSwgUj4ob2JqOiBULCBmOiBPYmpNb3JwaGlzbTxULCBSPik6IFJbXSA9PiB7XG4gIGNvbnN0IHI6IFJbXSA9IFtdO1xuICBlYWNoKG9iaiwgKHZhbHVlLCBuYW1lKSA9PiB7XG4gICAgci5wdXNoKGYodmFsdWUsIG5hbWUpKTtcbiAgfSk7XG4gIHJldHVybiByO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmQgPSA8VCBleHRlbmRzIHt9PihvYmo6IFQsIHByZWQ6ICh2YWx1ZTogVFtrZXlvZiBUXSwga2V5OiBPYmpLZXlzPFQ+LCBvYmo6IFQpID0+IGJvb2xlYW4pOiBPcHRpb25hbDxUW2tleW9mIFRdPiA9PiB7XG4gIGNvbnN0IHByb3BzID0ga2V5cyhvYmopIGFzIEFycmF5PE9iaktleXM8VD4+O1xuICBmb3IgKGxldCBrID0gMCwgbGVuID0gcHJvcHMubGVuZ3RoOyBrIDwgbGVuOyBrKyspIHtcbiAgICBjb25zdCBpID0gcHJvcHNba107XG4gICAgY29uc3QgeCA9IG9ialtpXTtcbiAgICBpZiAocHJlZCh4LCBpLCBvYmopKSB7XG4gICAgICByZXR1cm4gT3B0aW9uYWwuc29tZSh4KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIE9wdGlvbmFsLm5vbmUoKTtcbn07XG5cbmV4cG9ydCBjb25zdCB2YWx1ZXMgPSA8VCBleHRlbmRzIHt9PihvYmo6IFQpOiBBcnJheTxUW2tleW9mIFRdPiA9PiB7XG4gIHJldHVybiBtYXBUb0FycmF5KG9iaiwgRnVuLmlkZW50aXR5KTtcbn07XG5cbmV4cG9ydCBjb25zdCBzaXplID0gKG9iajoge30pOiBudW1iZXIgPT4ge1xuICByZXR1cm4ga2V5cyhvYmopLmxlbmd0aDtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXQgPSA8VCBleHRlbmRzIHt9LCBLIGV4dGVuZHMga2V5b2YgVD4ob2JqOiBULCBrZXk6IEspOiBPcHRpb25hbDxOb25OdWxsYWJsZTxUW0tdPj4gPT4ge1xuICByZXR1cm4gaGFzKG9iaiwga2V5KSA/IE9wdGlvbmFsLmZyb20ob2JqW2tleV0gYXMgTm9uTnVsbGFibGU8VFtLXT4pIDogT3B0aW9uYWwubm9uZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGhhcyA9IDxUIGV4dGVuZHMge30sIEsgZXh0ZW5kcyBrZXlvZiBUPihvYmo6IFQsIGtleTogSyk6IGJvb2xlYW4gPT5cbiAgaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSk7XG5cbmV4cG9ydCBjb25zdCBoYXNOb25OdWxsYWJsZUtleSA9IDxUIGV4dGVuZHMge30sIEsgZXh0ZW5kcyBrZXlvZiBUPihvYmo6IFQsIGtleTogSyk6IG9iaiBpcyBUICYgUmVjb3JkPEssIE5vbk51bGxhYmxlPFRbS10+PiA9PlxuICBoYXMob2JqLCBrZXkpICYmIG9ialtrZXldICE9PSB1bmRlZmluZWQgJiYgb2JqW2tleV0gIT09IG51bGw7XG5cbmV4cG9ydCBjb25zdCBpc0VtcHR5ID0gKHI6IFJlY29yZDxhbnksIGFueT4pOiByIGlzIHt9ID0+IHtcbiAgZm9yIChjb25zdCB4IGluIHIpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChyLCB4KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmV4cG9ydCBjb25zdCBlcXVhbCA9IDxUPihhMTogUmVjb3JkPHN0cmluZywgVD4sIGEyOiBSZWNvcmQ8c3RyaW5nLCBUPiwgZXE6IEVxLkVxPFQ+ID0gRXEuZXFBbnkpOiBib29sZWFuID0+XG4gIEVxLmVxUmVjb3JkKGVxKS5lcShhMSwgYTIpO1xuIiwiaW1wb3J0ICogYXMgVHlwZSBmcm9tICcuL1R5cGUnO1xuXG4vKipcbiAqIFRoZSBgT3B0aW9uYWxgIHR5cGUgcmVwcmVzZW50cyBhIHZhbHVlIChvZiBhbnkgdHlwZSkgdGhhdCBwb3RlbnRpYWxseSBkb2VzXG4gKiBub3QgZXhpc3QuIEFueSBgT3B0aW9uYWw8VD5gIGNhbiBlaXRoZXIgYmUgYSBgU29tZTxUPmAgKGluIHdoaWNoIGNhc2UgdGhlXG4gKiB2YWx1ZSBkb2VzIGV4aXN0KSBvciBhIGBOb25lYCAoaW4gd2hpY2ggY2FzZSB0aGUgdmFsdWUgZG9lcyBub3QgZXhpc3QpLiBUaGlzXG4gKiBtb2R1bGUgZGVmaW5lcyBhIHdob2xlIGxvdCBvZiBGUC1pbnNwaXJlZCB1dGlsaXR5IGZ1bmN0aW9ucyBmb3IgZGVhbGluZyB3aXRoXG4gKiBgT3B0aW9uYWxgIG9iamVjdHMuXG4gKlxuICogQ29tcGFyaXNvbiB3aXRoIG51bGwgb3IgdW5kZWZpbmVkOlxuICogLSBXZSBkb24ndCBnZXQgZmFuY3kgbnVsbCBjb2FsZXNjaW5nIG9wZXJhdG9ycyB3aXRoIGBPcHRpb25hbGBcbiAqIC0gV2UgZG8gZ2V0IGZhbmN5IGhlbHBlciBmdW5jdGlvbnMgd2l0aCBgT3B0aW9uYWxgXG4gKiAtIGBPcHRpb25hbGAgc3VwcG9ydCBuZXN0aW5nLCBhbmQgYWxsb3cgZm9yIHRoZSB0eXBlIHRvIHN0aWxsIGJlIG51bGxhYmxlIChvclxuICogYW5vdGhlciBgT3B0aW9uYWxgKVxuICogLSBUaGVyZSBpcyBubyBvcHRpb24gdG8gdHVybiBvZmYgc3RyaWN0LW9wdGlvbmFsLWNoZWNrcyBsaWtlIHRoZXJlIGlzIGZvclxuICogc3RyaWN0LW51bGwtY2hlY2tzXG4gKi9cbmV4cG9ydCBjbGFzcyBPcHRpb25hbDxUPiB7XG4gIHByaXZhdGUgcmVhZG9ubHkgdGFnOiBib29sZWFuO1xuICBwcml2YXRlIHJlYWRvbmx5IHZhbHVlPzogVDtcblxuICAvLyBTbmVha3kgb3B0aW1pc2F0aW9uOiBldmVyeSBpbnN0YW5jZSBvZiBPcHRpb25hbC5ub25lIGlzIGlkZW50aWNhbCwgc28ganVzdFxuICAvLyByZXVzZSB0aGUgc2FtZSBvYmplY3RcbiAgcHJpdmF0ZSBzdGF0aWMgc2luZ2xldG9uTm9uZSA9IG5ldyBPcHRpb25hbDxhbnk+KGZhbHNlKTtcblxuICAvLyBUaGUgaW50ZXJuYWwgcmVwcmVzZW50YXRpb24gaGFzIGEgYHRhZ2AgYW5kIGEgYHZhbHVlYCwgYnV0IGJvdGggYXJlXG4gIC8vIHByaXZhdGU6IGFibGUgdG8gYmUgY29uc29sZS5sb2dnZWQsIGJ1dCBub3QgYWJsZSB0byBiZSBhY2Nlc3NlZCBieSBjb2RlXG4gIHByaXZhdGUgY29uc3RydWN0b3IodGFnOiBib29sZWFuLCB2YWx1ZT86IFQpIHtcbiAgICB0aGlzLnRhZyA9IHRhZztcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICAvLyAtLS0gSWRlbnRpdGllcyAtLS1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBgT3B0aW9uYWw8VD5gIHRoYXQgKipkb2VzKiogY29udGFpbiBhIHZhbHVlLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBzb21lPFQ+KHRoaXM6IHZvaWQsIHZhbHVlOiBUKTogT3B0aW9uYWw8VD4ge1xuICAgIHJldHVybiBuZXcgT3B0aW9uYWwodHJ1ZSwgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBgT3B0aW9uYWw8VD5gIHRoYXQgKipkb2VzIG5vdCoqIGNvbnRhaW4gYSB2YWx1ZS4gYFRgIGNhbiBiZVxuICAgKiBhbnkgdHlwZSBiZWNhdXNlIHdlIGRvbid0IGFjdHVhbGx5IGhhdmUgYSBgVGAuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIG5vbmU8VCA9IG5ldmVyPih0aGlzOiB2b2lkKTogT3B0aW9uYWw8VD4ge1xuICAgIHJldHVybiBPcHRpb25hbC5zaW5nbGV0b25Ob25lO1xuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm0gYSB0cmFuc2Zvcm0gb24gYW4gYE9wdGlvbmFsYCB0eXBlLiBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpc1xuICAgKiBgT3B0aW9uYWxgIGNvbnRhaW5zIGEgdmFsdWUgb3Igbm90LCBgZm9sZGAgd2lsbCByZXR1cm4gYSB2YWx1ZSBvZiB0eXBlIGBVYC5cbiAgICogSWYgdGhpcyBgT3B0aW9uYWxgIGRvZXMgbm90IGNvbnRhaW4gYSB2YWx1ZSwgdGhlIGBVYCB3aWxsIGJlIGNyZWF0ZWQgYnlcbiAgICogY2FsbGluZyBgb25Ob25lYC4gSWYgdGhpcyBgT3B0aW9uYWxgIGRvZXMgY29udGFpbiBhIHZhbHVlLCB0aGUgYFVgIHdpbGwgYmVcbiAgICogY3JlYXRlZCBieSBjYWxsaW5nIGBvblNvbWVgLlxuICAgKlxuICAgKiBGb3IgdGhlIEZQIGVudGh1c2lhc3RzIGluIHRoZSByb29tLCB0aGlzIGZ1bmN0aW9uOlxuICAgKiAxLiBDb3VsZCBiZSB1c2VkIHRvIGltcGxlbWVudCBhbGwgb2YgdGhlIGZ1bmN0aW9ucyBiZWxvd1xuICAgKiAyLiBGb3JtcyBhIGNhdGFtb3JwaGlzbVxuICAgKi9cbiAgcHVibGljIGZvbGQ8VT4ob25Ob25lOiAoKSA9PiBVLCBvblNvbWU6ICh2YWx1ZTogVCkgPT4gVSk6IFUge1xuICAgIGlmICh0aGlzLnRhZykge1xuICAgICAgcmV0dXJuIG9uU29tZSh0aGlzLnZhbHVlIGFzIFQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb25Ob25lKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBpZiB0aGlzIGBPcHRpb25hbGAgb2JqZWN0IGNvbnRhaW5zIGEgdmFsdWUuXG4gICAqL1xuICBwdWJsaWMgaXNTb21lKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnRhZztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgdGhpcyBgT3B0aW9uYWxgIG9iamVjdCAqKmRvZXMgbm90KiogY29udGFpbiBhIHZhbHVlLlxuICAgKi9cbiAgcHVibGljIGlzTm9uZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMudGFnO1xuICB9XG5cbiAgLy8gLS0tIEZ1bmN0b3IgKG5hbWUgc3RvbGVuIGZyb20gSGFza2VsbCAvIG1hdGhzKSAtLS1cblxuICAvKipcbiAgICogUGVyZm9ybSBhIHRyYW5zZm9ybSBvbiBhbiBgT3B0aW9uYWxgIG9iamVjdCwgKippZioqIHRoZXJlIGlzIGEgdmFsdWUuIElmXG4gICAqIHlvdSBwcm92aWRlIGEgZnVuY3Rpb24gdG8gdHVybiBhIFQgaW50byBhIFUsIHRoaXMgaXMgdGhlIGZ1bmN0aW9uIHlvdSB1c2VcbiAgICogdG8gdHVybiBhbiBgT3B0aW9uYWw8VD5gIGludG8gYW4gYE9wdGlvbmFsPFU+YC4gSWYgdGhpcyAqKmRvZXMqKiBjb250YWluXG4gICAqIGEgdmFsdWUgdGhlbiB0aGUgb3V0cHV0IHdpbGwgYWxzbyBjb250YWluIGEgdmFsdWUgKHRoYXQgdmFsdWUgYmVpbmcgdGhlXG4gICAqIG91dHB1dCBvZiBgbWFwcGVyKHRoaXMudmFsdWUpYCksIGFuZCBpZiB0aGlzICoqZG9lcyBub3QqKiBjb250YWluIGEgdmFsdWVcbiAgICogdGhlbiBuZWl0aGVyIHdpbGwgdGhlIG91dHB1dC5cbiAgICovXG4gIHB1YmxpYyBtYXA8VT4obWFwcGVyOiAodmFsdWU6IFQpID0+IFUpOiBPcHRpb25hbDxVPiB7XG4gICAgaWYgKHRoaXMudGFnKSB7XG4gICAgICByZXR1cm4gT3B0aW9uYWwuc29tZShtYXBwZXIodGhpcy52YWx1ZSBhcyBUKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBPcHRpb25hbC5ub25lKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tIE1vbmFkIChuYW1lIHN0b2xlbiBmcm9tIEhhc2tlbGwgLyBtYXRocykgLS0tXG5cbiAgLyoqXG4gICAqIFBlcmZvcm0gYSB0cmFuc2Zvcm0gb24gYW4gYE9wdGlvbmFsYCBvYmplY3QsICoqaWYqKiB0aGVyZSBpcyBhIHZhbHVlLlxuICAgKiBVbmxpa2UgYG1hcGAsIGhlcmUgdGhlIHRyYW5zZm9ybSBpdHNlbGYgYWxzbyByZXR1cm5zIGFuIGBPcHRpb25hbGAuXG4gICAqL1xuICBwdWJsaWMgYmluZDxVPihiaW5kZXI6ICh2YWx1ZTogVCkgPT4gT3B0aW9uYWw8VT4pOiBPcHRpb25hbDxVPiB7XG4gICAgaWYgKHRoaXMudGFnKSB7XG4gICAgICByZXR1cm4gYmluZGVyKHRoaXMudmFsdWUgYXMgVCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBPcHRpb25hbC5ub25lKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tIFRyYXZlcnNhYmxlIChuYW1lIHN0b2xlbiBmcm9tIEhhc2tlbGwgLyBtYXRocykgLS0tXG5cbiAgLyoqXG4gICAqIEZvciBhIGdpdmVuIHByZWRpY2F0ZSwgdGhpcyBmdW5jdGlvbiBmaW5kcyBvdXQgaWYgdGhlcmUgKipleGlzdHMqKiBhIHZhbHVlXG4gICAqIGluc2lkZSB0aGlzIGBPcHRpb25hbGAgb2JqZWN0IHRoYXQgbWVldHMgdGhlIHByZWRpY2F0ZS4gSW4gcHJhY3RpY2UsIHRoaXNcbiAgICogbWVhbnMgdGhhdCBmb3IgYE9wdGlvbmFsYHMgdGhhdCBkbyBub3QgY29udGFpbiBhIHZhbHVlIGl0IHJldHVybnMgZmFsc2UgKGFzXG4gICAqIG5vIHByZWRpY2F0ZS1tZWV0aW5nIHZhbHVlIGV4aXN0cykuXG4gICAqL1xuICBwdWJsaWMgZXhpc3RzKHByZWRpY2F0ZTogKHZhbHVlOiBUKSA9PiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudGFnICYmIHByZWRpY2F0ZSh0aGlzLnZhbHVlIGFzIFQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvciBhIGdpdmVuIHByZWRpY2F0ZSwgdGhpcyBmdW5jdGlvbiBmaW5kcyBvdXQgaWYgKiphbGwqKiB0aGUgdmFsdWVzIGluc2lkZVxuICAgKiB0aGlzIGBPcHRpb25hbGAgb2JqZWN0IG1lZXQgdGhlIHByZWRpY2F0ZS4gSW4gcHJhY3RpY2UsIHRoaXMgbWVhbnMgdGhhdFxuICAgKiBmb3IgYE9wdGlvbmFsYHMgdGhhdCBkbyBub3QgY29udGFpbiBhIHZhbHVlIGl0IHJldHVybnMgdHJ1ZSAoYXMgYWxsIDBcbiAgICogb2JqZWN0cyBkbyBtZWV0IHRoZSBwcmVkaWNhdGUpLlxuICAgKi9cbiAgcHVibGljIGZvcmFsbChwcmVkaWNhdGU6ICh2YWx1ZTogVCkgPT4gYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy50YWcgfHwgcHJlZGljYXRlKHRoaXMudmFsdWUgYXMgVCk7XG4gIH1cblxuICAvKipcbiAgICogRm9yIGEgZ2l2ZW4gcHJlZGljYXRlLCBjcmVhdGUgYSBuZXcgYE9wdGlvbmFsYCBvYmplY3QgdGhhdCB3aWxsIHJldGFpblxuICAgKiBhbGwgdGhlIHZhbHVlcyBpbnNpZGUgdGhlIG9sZCBgT3B0aW9uYWxgIG9iamVjdCB0aGF0IG1lZXQgdGhlIHByZWRpY2F0ZS5cbiAgICogSW4gcHJhY3RpY2UsIHRoZSBgT3B0aW9uYWxgIG9iamVjdCBjb250YWlucyBlaXRoZXIgMCBvciAxIG9iamVjdHMsIGFuZFxuICAgKiB0aGUgb3V0cHV0IHdpbGwga2VlcCB0aGUgKHNpbmdsZSkgaW5wdXQgb2JqZWN0IChpZiBpdCBleGlzdHMpIGFzIGxvbmcgYXNcbiAgICogaXQgcGFzc2VzIHRoZSBwcmVkaWNhdGUuXG4gICAqL1xuICBwdWJsaWMgZmlsdGVyPFUgZXh0ZW5kcyBUPihwcmVkaWNhdGU6ICh2YWx1ZTogVCkgPT4gdmFsdWUgaXMgVSk6IE9wdGlvbmFsPFU+O1xuICBwdWJsaWMgZmlsdGVyKHByZWRpY2F0ZTogKHZhbHVlOiBUKSA9PiBib29sZWFuKTogT3B0aW9uYWw8VD47XG4gIHB1YmxpYyBmaWx0ZXIocHJlZGljYXRlOiAodmFsdWU6IFQpID0+IGJvb2xlYW4pOiBPcHRpb25hbDxUPiB7XG4gICAgaWYgKCF0aGlzLnRhZyB8fCBwcmVkaWNhdGUodGhpcy52YWx1ZSBhcyBUKSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBPcHRpb25hbC5ub25lKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tIEdldHRlcnMgLS0tXG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdmFsdWUgb3V0IG9mIHRoZSBpbnNpZGUgb2YgdGhlIGBPcHRpb25hbGAgb2JqZWN0LCB1c2luZyBhIGRlZmF1bHRcbiAgICogYHJlcGxhY2VtZW50YCB2YWx1ZSBpZiB0aGUgcHJvdmlkZWQgYE9wdGlvbmFsYCBvYmplY3QgZG9lcyBub3QgY29udGFpbiBhXG4gICAqIHZhbHVlLlxuICAgKi9cbiAgcHVibGljIGdldE9yPFUgPSBUPihyZXBsYWNlbWVudDogVSk6IFQgfCBVIHtcbiAgICByZXR1cm4gdGhpcy50YWcgPyB0aGlzLnZhbHVlIGFzIFQgOiByZXBsYWNlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHZhbHVlIG91dCBvZiB0aGUgaW5zaWRlIG9mIHRoZSBgT3B0aW9uYWxgIG9iamVjdCwgdXNpbmcgYSBkZWZhdWx0XG4gICAqIGByZXBsYWNlbWVudGAgdmFsdWUgaWYgdGhlIHByb3ZpZGVkIGBPcHRpb25hbGAgb2JqZWN0IGRvZXMgbm90IGNvbnRhaW4gYVxuICAgKiB2YWx1ZS4gIFVubGlrZSBgZ2V0T3JgLCBpbiB0aGlzIG1ldGhvZCB0aGUgYHJlcGxhY2VtZW50YCBvYmplY3QgaXMgYWxzb1xuICAgKiBgT3B0aW9uYWxgIC0gbWVhbmluZyB0aGF0IHRoaXMgbWV0aG9kIHdpbGwgYWx3YXlzIHJldHVybiBhbiBgT3B0aW9uYWxgLlxuICAgKi9cbiAgcHVibGljIG9yPFUgPSBUPihyZXBsYWNlbWVudDogT3B0aW9uYWw8VT4pOiBPcHRpb25hbDxUIHwgVT4ge1xuICAgIHJldHVybiB0aGlzLnRhZyA/IHRoaXMgOiByZXBsYWNlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHZhbHVlIG91dCBvZiB0aGUgaW5zaWRlIG9mIHRoZSBgT3B0aW9uYWxgIG9iamVjdCwgdXNpbmcgYSBkZWZhdWx0XG4gICAqIGByZXBsYWNlbWVudGAgdmFsdWUgaWYgdGhlIHByb3ZpZGVkIGBPcHRpb25hbGAgb2JqZWN0IGRvZXMgbm90IGNvbnRhaW4gYVxuICAgKiB2YWx1ZS4gVW5saWtlIGBnZXRPcmAsIGluIHRoaXMgbWV0aG9kIHRoZSBgcmVwbGFjZW1lbnRgIHZhbHVlIGlzXG4gICAqIFwidGh1bmtlZFwiIC0gdGhhdCBpcyB0byBzYXkgdGhhdCB5b3UgZG9uJ3QgcGFzcyBhIHZhbHVlIHRvIGBnZXRPclRodW5rYCwgeW91XG4gICAqIHBhc3MgYSBmdW5jdGlvbiB3aGljaCAoaWYgY2FsbGVkKSB3aWxsICoqcmV0dXJuKiogdGhlIGB2YWx1ZWAgeW91IHdhbnQgdG9cbiAgICogdXNlLlxuICAgKi9cbiAgcHVibGljIGdldE9yVGh1bms8VSA9IFQ+KHRodW5rOiAoKSA9PiBVKTogVCB8IFUge1xuICAgIHJldHVybiB0aGlzLnRhZyA/IHRoaXMudmFsdWUgYXMgVCA6IHRodW5rKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB2YWx1ZSBvdXQgb2YgdGhlIGluc2lkZSBvZiB0aGUgYE9wdGlvbmFsYCBvYmplY3QsIHVzaW5nIGEgZGVmYXVsdFxuICAgKiBgcmVwbGFjZW1lbnRgIHZhbHVlIGlmIHRoZSBwcm92aWRlZCBPcHRpb25hbCBvYmplY3QgZG9lcyBub3QgY29udGFpbiBhXG4gICAqIHZhbHVlLlxuICAgKlxuICAgKiBVbmxpa2UgYG9yYCwgaW4gdGhpcyBtZXRob2QgdGhlIGByZXBsYWNlbWVudGAgdmFsdWUgaXMgXCJ0aHVua2VkXCIgLSB0aGF0IGlzXG4gICAqIHRvIHNheSB0aGF0IHlvdSBkb24ndCBwYXNzIGEgdmFsdWUgdG8gYG9yVGh1bmtgLCB5b3UgcGFzcyBhIGZ1bmN0aW9uIHdoaWNoXG4gICAqIChpZiBjYWxsZWQpIHdpbGwgKipyZXR1cm4qKiB0aGUgYHZhbHVlYCB5b3Ugd2FudCB0byB1c2UuXG4gICAqXG4gICAqIFVubGlrZSBgZ2V0T3JUaHVua2AsIGluIHRoaXMgbWV0aG9kIHRoZSBgcmVwbGFjZW1lbnRgIHZhbHVlIGlzIGFsc29cbiAgICogYE9wdGlvbmFsYCwgbWVhbmluZyB0aGF0IHRoaXMgbWV0aG9kIHdpbGwgYWx3YXlzIHJldHVybiBhbiBgT3B0aW9uYWxgLlxuICAgKi9cbiAgcHVibGljIG9yVGh1bms8VSA9IFQ+KHRodW5rOiAoKSA9PiBPcHRpb25hbDxVPik6IE9wdGlvbmFsPFQgfCBVPiB7XG4gICAgcmV0dXJuIHRoaXMudGFnID8gdGhpcyA6IHRodW5rKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB2YWx1ZSBvdXQgb2YgdGhlIGluc2lkZSBvZiB0aGUgYE9wdGlvbmFsYCBvYmplY3QsIHRocm93aW5nIGFuXG4gICAqIGV4Y2VwdGlvbiBpZiB0aGUgcHJvdmlkZWQgYE9wdGlvbmFsYCBvYmplY3QgZG9lcyBub3QgY29udGFpbiBhIHZhbHVlLlxuICAgKlxuICAgKiBXQVJOSU5HOlxuICAgKiBZb3Ugc2hvdWxkIG9ubHkgYmUgdXNpbmcgdGhpcyBmdW5jdGlvbiBpZiB5b3Uga25vdyB0aGF0IHRoZSBgT3B0aW9uYWxgXG4gICAqIG9iamVjdCAqKmlzIG5vdCoqIGVtcHR5IChvdGhlcndpc2UgeW91J3JlIHRocm93aW5nIGV4Y2VwdGlvbnMgaW4gcHJvZHVjdGlvblxuICAgKiBjb2RlLCB3aGljaCBpcyBiYWQpLlxuICAgKlxuICAgKiBJbiB0ZXN0cyB0aGlzIGlzIG1vcmUgYWNjZXB0YWJsZS5cbiAgICpcbiAgICogUHJlZmVyIG90aGVyIG1ldGhvZHMgdG8gdGhpcywgc3VjaCBhcyBgLmVhY2hgLlxuICAgKi9cbiAgcHVibGljIGdldE9yRGllKG1lc3NhZ2U/OiBzdHJpbmcpOiBUIHtcbiAgICBpZiAoIXRoaXMudGFnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSA/PyAnQ2FsbGVkIGdldE9yRGllIG9uIE5vbmUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWUgYXMgVDtcbiAgICB9XG4gIH1cblxuICAvLyAtLS0gSW50ZXJvcCB3aXRoIG51bGwgYW5kIHVuZGVmaW5lZCAtLS1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBgT3B0aW9uYWxgIHZhbHVlIGZyb20gYSBudWxsYWJsZSAob3IgdW5kZWZpbmVkLWFibGUpIGlucHV0LlxuICAgKiBOdWxsLCBvciB1bmRlZmluZWQsIGlzIGNvbnZlcnRlZCB0byBgTm9uZWAsIGFuZCBhbnl0aGluZyBlbHNlIGlzIGNvbnZlcnRlZFxuICAgKiB0byBgU29tZWAuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGZyb208VD4odGhpczogdm9pZCwgdmFsdWU6IFQgfCBudWxsIHwgdW5kZWZpbmVkKTogT3B0aW9uYWw8Tm9uTnVsbGFibGU8VD4+IHtcbiAgICByZXR1cm4gVHlwZS5pc05vbk51bGxhYmxlKHZhbHVlKSA/IE9wdGlvbmFsLnNvbWUodmFsdWUpIDogT3B0aW9uYWwubm9uZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGFuIGBPcHRpb25hbGAgdG8gYSBudWxsYWJsZSB0eXBlLCBieSBnZXR0aW5nIHRoZSB2YWx1ZSBpZiBpdFxuICAgKiBleGlzdHMsIG9yIHJldHVybmluZyBgbnVsbGAgaWYgaXQgZG9lcyBub3QuXG4gICAqL1xuICBwdWJsaWMgZ2V0T3JOdWxsKCk6IFQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy50YWcgPyB0aGlzLnZhbHVlIGFzIFQgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGFuIGBPcHRpb25hbGAgdG8gYW4gdW5kZWZpbmVkLWFibGUgdHlwZSwgYnkgZ2V0dGluZyB0aGUgdmFsdWUgaWZcbiAgICogaXQgZXhpc3RzLCBvciByZXR1cm5pbmcgYHVuZGVmaW5lZGAgaWYgaXQgZG9lcyBub3QuXG4gICAqL1xuICBwdWJsaWMgZ2V0T3JVbmRlZmluZWQoKTogVCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cblxuICAvLyAtLS0gVXRpbGl0aWVzIC0tLVxuXG4gIC8qKlxuICAgKiBJZiB0aGUgYE9wdGlvbmFsYCBjb250YWlucyBhIHZhbHVlLCBwZXJmb3JtIGFuIGFjdGlvbiBvbiB0aGF0IHZhbHVlLlxuICAgKiBVbmxpa2UgdGhlIHJlc3Qgb2YgdGhlIG1ldGhvZHMgb24gdGhpcyB0eXBlLCBgLmVhY2hgIGhhcyBzaWRlLWVmZmVjdHMuIElmXG4gICAqIHlvdSB3YW50IHRvIHRyYW5zZm9ybSBhbiBgT3B0aW9uYWw8VD5gICoqaW50byoqIHNvbWV0aGluZywgdGhlbiB0aGlzIGlzIG5vdFxuICAgKiB0aGUgbWV0aG9kIGZvciB5b3UuIElmIHlvdSB3YW50IHRvIHVzZSBhbiBgT3B0aW9uYWw8VD5gIHRvICoqZG8qKlxuICAgKiBzb21ldGhpbmcsIHRoZW4gdGhpcyBpcyB0aGUgbWV0aG9kIGZvciB5b3UgLSBwcm92aWRlZCB5b3UncmUgb2theSB3aXRoIG5vdFxuICAgKiBkb2luZyBhbnl0aGluZyBpbiB0aGUgY2FzZSB3aGVyZSB0aGUgYE9wdGlvbmFsYCBkb2Vzbid0IGhhdmUgYSB2YWx1ZSBpbnNpZGVcbiAgICogaXQuIElmIHlvdSdyZSBub3Qgc3VyZSB3aGV0aGVyIHlvdXIgdXNlLWNhc2UgZml0cyBpbnRvIHRyYW5zZm9ybWluZ1xuICAgKiAqKmludG8qKiBzb21ldGhpbmcgb3IgKipkb2luZyoqIHNvbWV0aGluZywgY2hlY2sgd2hldGhlciBpdCBoYXMgYSByZXR1cm5cbiAgICogdmFsdWUuIElmIGl0IGRvZXMsIHlvdSBzaG91bGQgYmUgcGVyZm9ybWluZyBhIHRyYW5zZm9ybS5cbiAgICovXG4gIHB1YmxpYyBlYWNoKHdvcmtlcjogKHZhbHVlOiBUKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudGFnKSB7XG4gICAgICB3b3JrZXIodGhpcy52YWx1ZSBhcyBUKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVHVybiB0aGUgYE9wdGlvbmFsYCBvYmplY3QgaW50byBhbiBhcnJheSB0aGF0IGNvbnRhaW5zIGFsbCBvZiB0aGUgdmFsdWVzXG4gICAqIHN0b3JlZCBpbnNpZGUgdGhlIGBPcHRpb25hbGAuIEluIHByYWN0aWNlLCB0aGlzIG1lYW5zIHRoZSBvdXRwdXQgd2lsbCBoYXZlXG4gICAqIGVpdGhlciAwIG9yIDEgZWxlbWVudHMuXG4gICAqL1xuICBwdWJsaWMgdG9BcnJheSgpOiBUW10ge1xuICAgIHJldHVybiB0aGlzLnRhZyA/IFsgdGhpcy52YWx1ZSBhcyBUIF0gOiBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUdXJuIHRoZSBgT3B0aW9uYWxgIG9iamVjdCBpbnRvIGEgc3RyaW5nIGZvciBkZWJ1Z2dpbmcgb3IgcHJpbnRpbmcuIE5vdFxuICAgKiByZWNvbW1lbmRlZCBmb3IgcHJvZHVjdGlvbiBjb2RlLCBidXQgZ29vZCBmb3IgZGVidWdnaW5nLiBBbHNvIG5vdGUgdGhhdFxuICAgKiB0aGVzZSBkYXlzIGFuIGBPcHRpb25hbGAgb2JqZWN0IGNhbiBiZSBsb2dnZWQgdG8gdGhlIGNvbnNvbGUgZGlyZWN0bHksIGFuZFxuICAgKiBpdHMgaW5uZXIgdmFsdWUgKGlmIGl0IGV4aXN0cykgd2lsbCBiZSB2aXNpYmxlLlxuICAgKi9cbiAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudGFnID8gYHNvbWUoJHt0aGlzLnZhbHVlfSlgIDogJ25vbmUoKSc7XG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIEFyciBmcm9tICcuL0Fycic7XG5pbXBvcnQgKiBhcyBGdW4gZnJvbSAnLi9GdW4nO1xuaW1wb3J0IHsgT3B0aW9uYWwgfSBmcm9tICcuL09wdGlvbmFsJztcblxuLyoqXG4gKiAqKklzKiogdGhlIHZhbHVlIHN0b3JlZCBpbnNpZGUgdGhpcyBPcHRpb25hbCBvYmplY3QgZXF1YWwgdG8gYHJoc2A/XG4gKi9cbmV4cG9ydCBjb25zdCBpcyA9IDxUPihsaHM6IE9wdGlvbmFsPFQ+LCByaHM6IFQsIGNvbXBhcmF0b3I6IChhOiBULCBiOiBUKSA9PiBib29sZWFuID0gRnVuLnRyaXBsZUVxdWFscyk6IGJvb2xlYW4gPT5cbiAgbGhzLmV4aXN0cygobGVmdCkgPT4gY29tcGFyYXRvcihsZWZ0LCByaHMpKTtcblxuLyoqXG4gKiBBcmUgdGhlc2UgdHdvIE9wdGlvbmFsIG9iamVjdHMgZXF1YWw/IEVxdWFsaXR5IGhlcmUgbWVhbnMgZWl0aGVyIHRoZXkncmUgYm90aFxuICogYFNvbWVgIChhbmQgdGhlIHZhbHVlcyBhcmUgZXF1YWwgdW5kZXIgdGhlIGNvbXBhcmF0b3IpIG9yIHRoZXkncmUgYm90aCBgTm9uZWAuXG4gKi9cbmV4cG9ydCBjb25zdCBlcXVhbHM6IHtcbiAgPEEsIEI+KGxoczogT3B0aW9uYWw8QT4sIHJoczogT3B0aW9uYWw8Qj4sIGNvbXBhcmF0b3I6IChhOiBBLCBiOiBCKSA9PiBib29sZWFuKTogYm9vbGVhbjtcbiAgPFQ+KGxoczogT3B0aW9uYWw8VD4sIHJoczogT3B0aW9uYWw8VD4pOiBib29sZWFuO1xufSA9IDxBLCBCPihsaHM6IE9wdGlvbmFsPEE+LCByaHM6IE9wdGlvbmFsPEI+LCBjb21wYXJhdG9yOiAoYTogQSwgYjogQikgPT4gYm9vbGVhbiA9IEZ1bi50cmlwbGVFcXVhbHMgYXMgYW55KTogYm9vbGVhbiA9PlxuICBsaWZ0MihsaHMsIHJocywgY29tcGFyYXRvcikuZ2V0T3IobGhzLmlzTm9uZSgpICYmIHJocy5pc05vbmUoKSk7XG5cbmV4cG9ydCBjb25zdCBjYXQgPSA8QT4oYXJyOiBPcHRpb25hbDxBPltdKTogQVtdID0+IHtcbiAgY29uc3QgcjogQVtdID0gW107XG4gIGNvbnN0IHB1c2ggPSAoeDogQSkgPT4ge1xuICAgIHIucHVzaCh4KTtcbiAgfTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICBhcnJbaV0uZWFjaChwdXNoKTtcbiAgfVxuICByZXR1cm4gcjtcbn07XG5cbmV4cG9ydCBjb25zdCBzZXF1ZW5jZSA9IDxBPiAoYXJyOiBBcnJheUxpa2U8T3B0aW9uYWw8QT4+KTogT3B0aW9uYWw8QXJyYXk8QT4+ID0+IHtcbiAgY29uc3QgcjogQVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgeCA9IGFycltpXTtcbiAgICBpZiAoeC5pc1NvbWUoKSkge1xuICAgICAgci5wdXNoKHguZ2V0T3JEaWUoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBPcHRpb25hbC5ub25lPEFycmF5PEE+PigpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gT3B0aW9uYWwuc29tZShyKTtcbn07XG5cbi8qKiBAZGVwcmVjYXRlZCBVc2UgQXJyLmZpbmRNYXAgaW5zdGVhZC4gKi9cbmV4cG9ydCBjb25zdCBmaW5kTWFwID0gQXJyLmZpbmRNYXA7XG5cbi8qKiBNYXAgZWFjaCBlbGVtZW50IG9mIGFuIGFycmF5IHRvIGFuIE9wdGlvbmFsIGFuZCBjb2xsZWN0IHRoZSByZXN1bHRzLlxuICogIElmIGFsbCByZXN1bHRzIGFyZSBcInNvbWVcIiwgcmV0dXJuIE9wdGlvbmFsLnNvbWUgb2YgdGhlIHJlc3VsdHMuXG4gKiAgSWYgYW55IHJlc3VsdCBpcyBcIm5vbmVcIiwgcmV0dXJuIE9wdGlvbmFsLm5vbmVcbiAqL1xuZXhwb3J0IGNvbnN0IHRyYXZlcnNlID0gPEEsIEI+IChhcnI6IEFycmF5TGlrZTxBPiwgZjogKGE6IEEpID0+IE9wdGlvbmFsPEI+KTogT3B0aW9uYWw8QXJyYXk8Qj4+ID0+XG4gIHNlcXVlbmNlKEFyci5tYXAoYXJyLCBmKSk7XG5cbi8qXG5Ob3RlcyBvbiB0aGUgbGlmdCBmdW5jdGlvbnM6XG4tIFdlIHVzZWQgdG8gaGF2ZSBhIGdlbmVyaWMgbGlmdE4sIGJ1dCB3ZSB3ZXJlIGNvbmNlcm5lZCBhYm91dCBpdHMgdHlwZS1zYWZldHksIGFuZCB0aGUgYmVsb3cgdmFyaWFudHMgd2VyZSBmYXN0ZXIgaW4gbWljcm9iZW5jaG1hcmtzLlxuLSBUaGUgZ2V0T3JEaWUgY2FsbHMgYXJlIHBhcnRpYWwgZnVuY3Rpb25zLCBidXQgYXJlIGNoZWNrZWQgYmVmb3JlaGFuZC4gVGhpcyBpcyBmYXN0ZXIgYW5kIG1vcmUgY29udmVuaWVudCAoYnV0IGxlc3Mgc2FmZSkgdGhhbiBmb2xkcy5cbi0gJiYgaXMgdXNlZCBpbnN0ZWFkIG9mIGEgbG9vcCBmb3Igc2ltcGxpY2l0eSBhbmQgcGVyZm9ybWFuY2UuXG4qL1xuXG5leHBvcnQgY29uc3QgbGlmdDIgPSA8QSwgQiwgQz4gKG9hOiBPcHRpb25hbDxBPiwgb2I6IE9wdGlvbmFsPEI+LCBmOiAoYTogQSwgYjogQikgPT4gQyk6IE9wdGlvbmFsPEM+ID0+XG4gIG9hLmlzU29tZSgpICYmIG9iLmlzU29tZSgpID8gT3B0aW9uYWwuc29tZShmKG9hLmdldE9yRGllKCksIG9iLmdldE9yRGllKCkpKSA6IE9wdGlvbmFsLm5vbmU8Qz4oKTtcblxuZXhwb3J0IGNvbnN0IGxpZnQzID0gPEEsIEIsIEMsIEQ+IChvYTogT3B0aW9uYWw8QT4sIG9iOiBPcHRpb25hbDxCPiwgb2M6IE9wdGlvbmFsPEM+LCBmOiAoYTogQSwgYjogQiwgYzogQykgPT4gRCk6IE9wdGlvbmFsPEQ+ID0+XG4gIG9hLmlzU29tZSgpICYmIG9iLmlzU29tZSgpICYmIG9jLmlzU29tZSgpID8gT3B0aW9uYWwuc29tZShmKG9hLmdldE9yRGllKCksIG9iLmdldE9yRGllKCksIG9jLmdldE9yRGllKCkpKSA6IE9wdGlvbmFsLm5vbmU8RD4oKTtcblxuZXhwb3J0IGNvbnN0IGxpZnQ0ID0gPEEsIEIsIEMsIEQsIEU+IChvYTogT3B0aW9uYWw8QT4sIG9iOiBPcHRpb25hbDxCPiwgb2M6IE9wdGlvbmFsPEM+LCBvZDogT3B0aW9uYWw8RD4sIGY6IChhOiBBLCBiOiBCLCBjOiBDLCBkOiBEKSA9PiBFKTogT3B0aW9uYWw8RT4gPT5cbiAgb2EuaXNTb21lKCkgJiYgb2IuaXNTb21lKCkgJiYgb2MuaXNTb21lKCkgJiYgb2QuaXNTb21lKCkgPyBPcHRpb25hbC5zb21lKGYob2EuZ2V0T3JEaWUoKSwgb2IuZ2V0T3JEaWUoKSwgb2MuZ2V0T3JEaWUoKSwgb2QuZ2V0T3JEaWUoKSkpIDogT3B0aW9uYWwubm9uZTxFPigpO1xuXG5leHBvcnQgY29uc3QgbGlmdDUgPSA8QSwgQiwgQywgRCwgRSwgRj4gKG9hOiBPcHRpb25hbDxBPiwgb2I6IE9wdGlvbmFsPEI+LCBvYzogT3B0aW9uYWw8Qz4sIG9kOiBPcHRpb25hbDxEPiwgb2U6IE9wdGlvbmFsPEU+LCBmOiAoYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSkgPT4gRik6IE9wdGlvbmFsPEY+ID0+XG4gIG9hLmlzU29tZSgpICYmIG9iLmlzU29tZSgpICYmIG9jLmlzU29tZSgpICYmIG9kLmlzU29tZSgpICYmIG9lLmlzU29tZSgpID8gT3B0aW9uYWwuc29tZShmKG9hLmdldE9yRGllKCksIG9iLmdldE9yRGllKCksIG9jLmdldE9yRGllKCksIG9kLmdldE9yRGllKCksIG9lLmdldE9yRGllKCkpKSA6IE9wdGlvbmFsLm5vbmU8Rj4oKTtcblxuZXhwb3J0IGNvbnN0IG1hcEZyb20gPSA8QSwgQj4gKGE6IEEgfCBudWxsIHwgdW5kZWZpbmVkLCBmOiAoYTogQSkgPT4gQik6IE9wdGlvbmFsPEI+ID0+XG4gIChhICE9PSB1bmRlZmluZWQgJiYgYSAhPT0gbnVsbCkgPyBPcHRpb25hbC5zb21lKGYoYSkpIDogT3B0aW9uYWwubm9uZTxCPigpO1xuXG5leHBvcnQgY29uc3QgYmluZEZyb20gPSA8QSwgQj4gKGE6IEEgfCBudWxsIHwgdW5kZWZpbmVkLCBmOiAoYTogQSkgPT4gT3B0aW9uYWw8Qj4pOiBPcHRpb25hbDxCPiA9PlxuICAoYSAhPT0gdW5kZWZpbmVkICYmIGEgIT09IG51bGwpID8gZihhKSA6IE9wdGlvbmFsLm5vbmU8Qj4oKTtcblxuZXhwb3J0IGNvbnN0IGZsYXR0ZW4gPSA8VD4gKG9vdDogT3B0aW9uYWw8T3B0aW9uYWw8VD4+KTogT3B0aW9uYWw8VD4gPT4gb290LmJpbmQoRnVuLmlkZW50aXR5KTtcblxuLy8gVGhpcyBjYW4gaGVscCB3aXRoIHR5cGUgaW5mZXJlbmNlLCBieSBzcGVjaWZ5aW5nIHRoZSB0eXBlIHBhcmFtIG9uIHRoZSBub25lIGNhc2UsIHNvIHRoZSBjYWxsZXIgZG9lc24ndCBoYXZlIHRvLlxuZXhwb3J0IGNvbnN0IHNvbWVJZiA9IDxBPiAoYjogYm9vbGVhbiwgYTogQSk6IE9wdGlvbmFsPEE+ID0+XG4gIGIgPyBPcHRpb25hbC5zb21lKGEpIDogT3B0aW9uYWwubm9uZTxBPigpO1xuIiwiaW1wb3J0IHsgQ2VsbCB9IGZyb20gJy4vQ2VsbCc7XG5pbXBvcnQgKiBhcyBGdW4gZnJvbSAnLi9GdW4nO1xuaW1wb3J0IHsgT3B0aW9uYWwgfSBmcm9tICcuL09wdGlvbmFsJztcblxuaW50ZXJmYWNlIFNpbmdsZXRvbjxUPiB7XG4gIHJlYWRvbmx5IGNsZWFyOiAoKSA9PiB2b2lkO1xuICByZWFkb25seSBpc1NldDogKCkgPT4gYm9vbGVhbjtcbiAgcmVhZG9ubHkgZ2V0OiAoKSA9PiBPcHRpb25hbDxUPjtcbiAgcmVhZG9ubHkgc2V0OiAodmFsdWU6IFQpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVwZWF0YWJsZSB7XG4gIHJlYWRvbmx5IGNsZWFyOiAoKSA9PiB2b2lkO1xuICByZWFkb25seSBpc1NldDogKCkgPT4gYm9vbGVhbjtcbiAgcmVhZG9ubHkgZ2V0OiAoKSA9PiBPcHRpb25hbDxudW1iZXI+O1xuICByZWFkb25seSBzZXQ6IChmdW5jdGlvblRvUmVwZWF0OiAoKSA9PiB2b2lkKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJldm9jYWJsZTxUPiBleHRlbmRzIFNpbmdsZXRvbjxUPiB7IH1cblxuZXhwb3J0IGludGVyZmFjZSBBcGk8VD4gZXh0ZW5kcyBTaW5nbGV0b248VD4ge1xuICByZWFkb25seSBydW46IChmbjogKGRhdGE6IFQpID0+IHZvaWQpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmFsdWU8VD4gZXh0ZW5kcyBTaW5nbGV0b248VD4ge1xuICByZWFkb25seSBvbjogKGZuOiAoZGF0YTogVCkgPT4gdm9pZCkgPT4gdm9pZDtcbn1cblxuY29uc3Qgc2luZ2xldG9uID0gPFQ+IChkb1Jldm9rZTogKGRhdGE6IFQpID0+IHZvaWQpOiBTaW5nbGV0b248VD4gPT4ge1xuICBjb25zdCBzdWJqZWN0ID0gQ2VsbChPcHRpb25hbC5ub25lPFQ+KCkpO1xuXG4gIGNvbnN0IHJldm9rZSA9ICgpOiB2b2lkID0+IHN1YmplY3QuZ2V0KCkuZWFjaChkb1Jldm9rZSk7XG5cbiAgY29uc3QgY2xlYXIgPSAoKSA9PiB7XG4gICAgcmV2b2tlKCk7XG4gICAgc3ViamVjdC5zZXQoT3B0aW9uYWwubm9uZSgpKTtcbiAgfTtcblxuICBjb25zdCBpc1NldCA9ICgpID0+IHN1YmplY3QuZ2V0KCkuaXNTb21lKCk7XG5cbiAgY29uc3QgZ2V0ID0gKCk6IE9wdGlvbmFsPFQ+ID0+IHN1YmplY3QuZ2V0KCk7XG5cbiAgY29uc3Qgc2V0ID0gKHM6IFQpID0+IHtcbiAgICByZXZva2UoKTtcbiAgICBzdWJqZWN0LnNldChPcHRpb25hbC5zb21lKHMpKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGNsZWFyLFxuICAgIGlzU2V0LFxuICAgIGdldCxcbiAgICBzZXRcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCByZXBlYXRhYmxlID0gKGRlbGF5OiBudW1iZXIpOiBSZXBlYXRhYmxlID0+IHtcbiAgY29uc3QgaW50ZXJ2YWxJZCA9IENlbGwoT3B0aW9uYWwubm9uZTxudW1iZXI+KCkpO1xuXG4gIGNvbnN0IHJldm9rZSA9ICgpOiB2b2lkID0+IGludGVydmFsSWQuZ2V0KCkuZWFjaCgoaWQpID0+IGNsZWFySW50ZXJ2YWwoaWQpKTtcblxuICBjb25zdCBjbGVhciA9ICgpID0+IHtcbiAgICByZXZva2UoKTtcbiAgICBpbnRlcnZhbElkLnNldChPcHRpb25hbC5ub25lKCkpO1xuICB9O1xuXG4gIGNvbnN0IGlzU2V0ID0gKCkgPT4gaW50ZXJ2YWxJZC5nZXQoKS5pc1NvbWUoKTtcblxuICBjb25zdCBnZXQgPSAoKTogT3B0aW9uYWw8bnVtYmVyPiA9PiBpbnRlcnZhbElkLmdldCgpO1xuXG4gIGNvbnN0IHNldCA9IChmdW5jdGlvblRvUmVwZWF0OiAoKSA9PiB2b2lkKSA9PiB7XG4gICAgcmV2b2tlKCk7XG4gICAgaW50ZXJ2YWxJZC5zZXQoT3B0aW9uYWwuc29tZShzZXRJbnRlcnZhbChmdW5jdGlvblRvUmVwZWF0LCBkZWxheSkpKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGNsZWFyLFxuICAgIGlzU2V0LFxuICAgIGdldCxcbiAgICBzZXQsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgZGVzdHJveWFibGUgPSA8VCBleHRlbmRzIHsgZGVzdHJveTogKCkgPT4gdm9pZCB9PiAoKTogUmV2b2NhYmxlPFQ+ID0+IHNpbmdsZXRvbjxUPigocykgPT4gcy5kZXN0cm95KCkpO1xuXG5leHBvcnQgY29uc3QgdW5iaW5kYWJsZSA9IDxUIGV4dGVuZHMgeyB1bmJpbmQ6ICgpID0+IHZvaWQgfT4gKCk6IFJldm9jYWJsZTxUPiA9PiBzaW5nbGV0b248VD4oKHMpID0+IHMudW5iaW5kKCkpO1xuXG5leHBvcnQgY29uc3QgYXBpID0gPFQgZXh0ZW5kcyB7IGRlc3Ryb3k6ICgpID0+IHZvaWQgfT4gKCk6IEFwaTxUPiA9PiB7XG4gIGNvbnN0IHN1YmplY3QgPSBkZXN0cm95YWJsZTxUPigpO1xuXG4gIGNvbnN0IHJ1biA9IChmOiAoZGF0YTogVCkgPT4gdm9pZCkgPT4gc3ViamVjdC5nZXQoKS5lYWNoKGYpO1xuXG4gIHJldHVybiB7XG4gICAgLi4uc3ViamVjdCxcbiAgICBydW5cbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCB2YWx1ZSA9IDxUPiAoKTogVmFsdWU8VD4gPT4ge1xuICBjb25zdCBzdWJqZWN0ID0gc2luZ2xldG9uKEZ1bi5ub29wKTtcblxuICBjb25zdCBvbiA9IChmOiAoZGF0YTogVCkgPT4gdm9pZCkgPT4gc3ViamVjdC5nZXQoKS5lYWNoKGYpO1xuXG4gIHJldHVybiB7XG4gICAgLi4uc3ViamVjdCxcbiAgICBvblxuICB9O1xufTtcbiIsImltcG9ydCAqIGFzIFN0ckFwcGVuZCBmcm9tICcuLi9zdHIvU3RyQXBwZW5kJztcblxuaW1wb3J0IHsgT3B0aW9uYWwgfSBmcm9tICcuL09wdGlvbmFsJztcbmltcG9ydCAqIGFzIFR5cGUgZnJvbSAnLi9UeXBlJztcblxuY29uc3QgY2hlY2tSYW5nZSA9IChzdHI6IHN0cmluZywgc3Vic3RyOiBzdHJpbmcsIHN0YXJ0OiBudW1iZXIpOiBib29sZWFuID0+XG4gIHN1YnN0ciA9PT0gJycgfHwgc3RyLmxlbmd0aCA+PSBzdWJzdHIubGVuZ3RoICYmIHN0ci5zdWJzdHIoc3RhcnQsIHN0YXJ0ICsgc3Vic3RyLmxlbmd0aCkgPT09IHN1YnN0cjtcblxuLyoqIEdpdmVuIGEgc3RyaW5nIGFuZCBvYmplY3QsIHBlcmZvcm0gdGVtcGxhdGUtcmVwbGFjZW1lbnRzIG9uIHRoZSBzdHJpbmcsIGFzIHNwZWNpZmllZCBieSB0aGUgb2JqZWN0LlxuICogQW55IHRlbXBsYXRlIGZpZWxkcyBvZiB0aGUgZm9ybSAke25hbWV9IGFyZSByZXBsYWNlZCBieSB0aGUgc3RyaW5nIG9yIG51bWJlciBzcGVjaWZpZWQgYXMgb2JqW1wibmFtZVwiXVxuICogQmFzZWQgb24gRG91Z2xhcyBDcm9ja2ZvcmQncyAnc3VwcGxhbnQnIG1ldGhvZCBmb3IgdGVtcGxhdGUtcmVwbGFjZSBvZiBzdHJpbmdzLiBVc2VzIGRpZmZlcmVudCB0ZW1wbGF0ZSBmb3JtYXQuXG4gKi9cbmV4cG9ydCBjb25zdCBzdXBwbGFudCA9IChzdHI6IHN0cmluZywgb2JqOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudW1iZXI+KTogc3RyaW5nID0+IHtcbiAgY29uc3QgaXNTdHJpbmdPck51bWJlciA9IChhOiB1bmtub3duKTogYSBpcyBzdHJpbmcgfCBudW1iZXIgPT4ge1xuICAgIGNvbnN0IHQgPSB0eXBlb2YgYTtcbiAgICByZXR1cm4gdCA9PT0gJ3N0cmluZycgfHwgdCA9PT0gJ251bWJlcic7XG4gIH07XG5cbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXCRcXHsoW157fV0qKVxcfS9nLFxuICAgIChmdWxsTWF0Y2g6IHN0cmluZywga2V5OiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gb2JqW2tleV07XG4gICAgICByZXR1cm4gaXNTdHJpbmdPck51bWJlcih2YWx1ZSkgPyB2YWx1ZS50b1N0cmluZygpIDogZnVsbE1hdGNoO1xuICAgIH1cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVMZWFkaW5nID0gKHN0cjogc3RyaW5nLCBwcmVmaXg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBzdGFydHNXaXRoKHN0ciwgcHJlZml4KSA/IFN0ckFwcGVuZC5yZW1vdmVGcm9tU3RhcnQoc3RyLCBwcmVmaXgubGVuZ3RoKSA6IHN0cjtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVUcmFpbGluZyA9IChzdHI6IHN0cmluZywgc3VmZml4OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gZW5kc1dpdGgoc3RyLCBzdWZmaXgpID8gU3RyQXBwZW5kLnJlbW92ZUZyb21FbmQoc3RyLCBzdWZmaXgubGVuZ3RoKSA6IHN0cjtcbn07XG5cbmV4cG9ydCBjb25zdCBlbnN1cmVMZWFkaW5nID0gKHN0cjogc3RyaW5nLCBwcmVmaXg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBzdGFydHNXaXRoKHN0ciwgcHJlZml4KSA/IHN0ciA6IFN0ckFwcGVuZC5hZGRUb1N0YXJ0KHN0ciwgcHJlZml4KTtcbn07XG5cbmV4cG9ydCBjb25zdCBlbnN1cmVUcmFpbGluZyA9IChzdHI6IHN0cmluZywgc3VmZml4OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gZW5kc1dpdGgoc3RyLCBzdWZmaXgpID8gc3RyIDogU3RyQXBwZW5kLmFkZFRvRW5kKHN0ciwgc3VmZml4KTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb250YWlucyA9IChzdHI6IHN0cmluZywgc3Vic3RyOiBzdHJpbmcsIHN0YXJ0OiBudW1iZXIgPSAwLCBlbmQ/OiBudW1iZXIpOiBib29sZWFuID0+IHtcbiAgY29uc3QgaWR4ID0gc3RyLmluZGV4T2Yoc3Vic3RyLCBzdGFydCk7XG4gIGlmIChpZHggIT09IC0xKSB7XG4gICAgcmV0dXJuIFR5cGUuaXNVbmRlZmluZWQoZW5kKSA/IHRydWUgOiBpZHggKyBzdWJzdHIubGVuZ3RoIDw9IGVuZDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBjYXBpdGFsaXplID0gKHN0cjogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIHN0ciA9PT0gJycgPyAnJyA6IHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zdWJzdHJpbmcoMSk7XG59O1xuXG4vKiogRG9lcyAnc3RyJyBzdGFydCB3aXRoICdwcmVmaXgnP1xuICogIE5vdGU6IGFsbCBzdHJpbmdzIHN0YXJ0IHdpdGggdGhlIGVtcHR5IHN0cmluZy5cbiAqICAgICAgICBNb3JlIGZvcm1hbGx5LCBmb3IgYWxsIHN0cmluZ3MgeCwgc3RhcnRzV2l0aCh4LCBcIlwiKS5cbiAqICAgICAgICBUaGlzIGlzIHNvIHRoYXQgZm9yIGFsbCBzdHJpbmdzIHggYW5kIHksIHN0YXJ0c1dpdGgoeSArIHgsIHkpXG4gKi9cbmV4cG9ydCBjb25zdCBzdGFydHNXaXRoID0gKHN0cjogc3RyaW5nLCBwcmVmaXg6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gY2hlY2tSYW5nZShzdHIsIHByZWZpeCwgMCk7XG59O1xuXG4vKiogRG9lcyAnc3RyJyBlbmQgd2l0aCAnc3VmZml4Jz9cbiAqICBOb3RlOiBhbGwgc3RyaW5ncyBlbmQgd2l0aCB0aGUgZW1wdHkgc3RyaW5nLlxuICogICAgICAgIE1vcmUgZm9ybWFsbHksIGZvciBhbGwgc3RyaW5ncyB4LCBlbmRzV2l0aCh4LCBcIlwiKS5cbiAqICAgICAgICBUaGlzIGlzIHNvIHRoYXQgZm9yIGFsbCBzdHJpbmdzIHggYW5kIHksIGVuZHNXaXRoKHggKyB5LCB5KVxuICovXG5leHBvcnQgY29uc3QgZW5kc1dpdGggPSAoc3RyOiBzdHJpbmcsIHN1ZmZpeDogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gIHJldHVybiBjaGVja1JhbmdlKHN0ciwgc3VmZml4LCBzdHIubGVuZ3RoIC0gc3VmZml4Lmxlbmd0aCk7XG59O1xuXG5jb25zdCBibGFuayA9IChyOiBSZWdFeHApID0+IChzOiBzdHJpbmcpOiBzdHJpbmcgPT5cbiAgcy5yZXBsYWNlKHIsICcnKTtcblxuLyoqIHJlbW92ZXMgYWxsIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHNwYWNlcyAqL1xuZXhwb3J0IGNvbnN0IHRyaW06IChzOiBzdHJpbmcpID0+IHN0cmluZyA9XG4gIGJsYW5rKC9eXFxzK3xcXHMrJC9nKTtcblxuZXhwb3J0IGNvbnN0IGxUcmltOiAoczogc3RyaW5nKSA9PiBzdHJpbmcgPVxuICBibGFuaygvXlxccysvZyk7XG5cbmV4cG9ydCBjb25zdCByVHJpbTogKHM6IHN0cmluZykgPT4gc3RyaW5nID1cbiAgYmxhbmsoL1xccyskL2cpO1xuXG5leHBvcnQgY29uc3QgaXNOb3RFbXB0eSA9IChzOiBzdHJpbmcpOiBib29sZWFuID0+IHMubGVuZ3RoID4gMDtcblxuZXhwb3J0IGNvbnN0IGlzRW1wdHkgPSAoczogc3RyaW5nKTogYm9vbGVhbiA9PiAhaXNOb3RFbXB0eShzKTtcblxuZXhwb3J0IGNvbnN0IHJlcGVhdCA9IChzOiBzdHJpbmcsIGNvdW50OiBudW1iZXIpOiBzdHJpbmcgPT4gY291bnQgPD0gMCA/ICcnIDogbmV3IEFycmF5KGNvdW50ICsgMSkuam9pbihzKTtcblxuZXhwb3J0IGNvbnN0IGZyb21Db2RlUG9pbnQgPSBTdHJpbmcuZnJvbUNvZGVQb2ludDtcblxuZXhwb3J0IGNvbnN0IHRvSW50ID0gKHZhbHVlOiBzdHJpbmcsIHJhZGl4OiBudW1iZXIgPSAxMCk6IE9wdGlvbmFsPG51bWJlcj4gPT4ge1xuICBjb25zdCBudW0gPSBwYXJzZUludCh2YWx1ZSwgcmFkaXgpO1xuICByZXR1cm4gaXNOYU4obnVtKSA/IE9wdGlvbmFsLm5vbmUoKSA6IE9wdGlvbmFsLnNvbWUobnVtKTtcbn07XG5cbmV4cG9ydCBjb25zdCB0b0Zsb2F0ID0gKHZhbHVlOiBzdHJpbmcpOiBPcHRpb25hbDxudW1iZXI+ID0+IHtcbiAgY29uc3QgbnVtID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gIHJldHVybiBpc05hTihudW0pID8gT3B0aW9uYWwubm9uZSgpIDogT3B0aW9uYWwuc29tZShudW0pO1xufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby13cmFwcGVyLW9iamVjdC10eXBlcyAqL1xuY29uc3QgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG5cbmludGVyZmFjZSBDb25zdHJ1Y3RvcjxUIGV4dGVuZHMgT2JqZWN0PiB7XG4gIHJlYWRvbmx5IHByb3RvdHlwZTogVDtcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xufVxuXG5jb25zdCBoYXNQcm90byA9IDxUIGV4dGVuZHMgT2JqZWN0Pih2OiBPYmplY3QsIGNvbnN0cnVjdG9yOiBDb25zdHJ1Y3RvcjxUPiwgcHJlZGljYXRlOiAodjogT2JqZWN0LCBwcm90b3R5cGU6IFQpID0+IGJvb2xlYW4pOiBib29sZWFuID0+IHtcbiAgaWYgKHByZWRpY2F0ZSh2LCBjb25zdHJ1Y3Rvci5wcm90b3R5cGUpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgLy8gU3RyaW5nLWJhc2VkIGZhbGxiYWNrIHRpbWVcbiAgICByZXR1cm4gdi5jb25zdHJ1Y3Rvcj8ubmFtZSA9PT0gY29uc3RydWN0b3IubmFtZTtcbiAgfVxufTtcblxuY29uc3QgdHlwZU9mID0gKHg6IGFueSk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IHQgPSB0eXBlb2YgeDtcbiAgaWYgKHggPT09IG51bGwpIHtcbiAgICByZXR1cm4gJ251bGwnO1xuICB9IGVsc2UgaWYgKHQgPT09ICdvYmplY3QnICYmIEFycmF5LmlzQXJyYXkoeCkpIHtcbiAgICByZXR1cm4gJ2FycmF5JztcbiAgfSBlbHNlIGlmICh0ID09PSAnb2JqZWN0JyAmJiBoYXNQcm90byh4LCBTdHJpbmcsIChvLCBwcm90bykgPT4gcHJvdG8uaXNQcm90b3R5cGVPZihvKSkpIHtcbiAgICByZXR1cm4gJ3N0cmluZyc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHQ7XG4gIH1cbn07XG5cbmNvbnN0IGlzVHlwZSA9IDxZb2xvPih0eXBlOiBzdHJpbmcpID0+ICh2YWx1ZTogYW55KTogdmFsdWUgaXMgWW9sbyA9PlxuICB0eXBlT2YodmFsdWUpID09PSB0eXBlO1xuXG5jb25zdCBpc1NpbXBsZVR5cGUgPSA8WW9sbz4odHlwZTogc3RyaW5nKSA9PiAodmFsdWU6IGFueSk6IHZhbHVlIGlzIFlvbG8gPT5cbiAgdHlwZW9mIHZhbHVlID09PSB0eXBlO1xuXG5jb25zdCBlcSA9IDxUPiAodDogVCkgPT4gKGE6IGFueSk6IGEgaXMgVCA9PlxuICB0ID09PSBhO1xuXG5leHBvcnQgY29uc3QgaXMgPSA8RSBleHRlbmRzIE9iamVjdD4odmFsdWU6IGFueSwgY29uc3RydWN0b3I6IENvbnN0cnVjdG9yPEU+KTogdmFsdWUgaXMgRSA9PlxuICBpc09iamVjdCh2YWx1ZSkgJiYgaGFzUHJvdG88RT4odmFsdWUsIGNvbnN0cnVjdG9yLCAobywgcHJvdG8pID0+IGdldFByb3RvdHlwZU9mKG8pID09PSBwcm90byk7XG5cbmV4cG9ydCBjb25zdCBpc1N0cmluZzogKHZhbHVlOiBhbnkpID0+IHZhbHVlIGlzIHN0cmluZyA9XG4gIGlzVHlwZSgnc3RyaW5nJyk7XG5cbmV4cG9ydCBjb25zdCBpc09iamVjdDogKHZhbHVlOiBhbnkpID0+IHZhbHVlIGlzIE9iamVjdCA9XG4gIGlzVHlwZSgnb2JqZWN0Jyk7XG5cbmV4cG9ydCBjb25zdCBpc1BsYWluT2JqZWN0ID0gKHZhbHVlOiB1bmtub3duKTogdmFsdWUgaXMgT2JqZWN0ID0+XG4gIGlzKHZhbHVlLCBPYmplY3QpO1xuXG5leHBvcnQgY29uc3QgaXNBcnJheTogKHZhbHVlOiBhbnkpID0+IHZhbHVlIGlzIEFycmF5PHVua25vd24+ID1cbiAgaXNUeXBlKCdhcnJheScpO1xuXG5leHBvcnQgY29uc3QgaXNOdWxsOiAoYTogYW55KSA9PiBhIGlzIG51bGwgPVxuICBlcShudWxsKTtcblxuZXhwb3J0IGNvbnN0IGlzQm9vbGVhbjogKHZhbHVlOiBhbnkpID0+IHZhbHVlIGlzIGJvb2xlYW4gPVxuICBpc1NpbXBsZVR5cGU8Ym9vbGVhbj4oJ2Jvb2xlYW4nKTtcblxuZXhwb3J0IGNvbnN0IGlzVW5kZWZpbmVkOiAoYTogYW55KSA9PiBhIGlzIHVuZGVmaW5lZCA9XG4gIGVxKHVuZGVmaW5lZCk7XG5cbmV4cG9ydCBjb25zdCBpc051bGxhYmxlID0gKGE6IGFueSk6IGEgaXMgbnVsbCB8IHVuZGVmaW5lZCA9PlxuICBhID09PSBudWxsIHx8IGEgPT09IHVuZGVmaW5lZDtcblxuZXhwb3J0IGNvbnN0IGlzTm9uTnVsbGFibGUgPSA8QT4gKGE6IEEgfCBudWxsIHwgdW5kZWZpbmVkKTogYSBpcyBOb25OdWxsYWJsZTxBPiA9PlxuICAhaXNOdWxsYWJsZShhKTtcblxuZXhwb3J0IGNvbnN0IGlzRnVuY3Rpb246ICh2YWx1ZTogYW55KSA9PiB2YWx1ZSBpcyBGdW5jdGlvbiA9XG4gIGlzU2ltcGxlVHlwZTxGdW5jdGlvbj4oJ2Z1bmN0aW9uJyk7XG5cbmV4cG9ydCBjb25zdCBpc051bWJlcjogKHZhbHVlOiBhbnkpID0+IHZhbHVlIGlzIG51bWJlciA9XG4gIGlzU2ltcGxlVHlwZTxudW1iZXI+KCdudW1iZXInKTtcblxuZXhwb3J0IGNvbnN0IGlzQXJyYXlPZiA9IDxFPih2YWx1ZTogYW55LCBwcmVkOiAoeDogYW55KSA9PiB4IGlzIEUpOiB2YWx1ZSBpcyBBcnJheTxFPiA9PiB7XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB2YWx1ZS5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgaWYgKCEocHJlZCh2YWx1ZVtpXSkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzUHJvbWlzZUxpa2UgPSAoeDogYW55KTogeCBpcyBQcm9taXNlPHVua25vd24+ID0+XG4gIGlzT2JqZWN0KHgpXG4gICYmIGlzRnVuY3Rpb24oeC50aGVuKVxuICAmJiBpc0Z1bmN0aW9uKHguY2F0Y2gpO1xuIiwiZXhwb3J0IGNvbnN0IGFkZFRvU3RhcnQgPSAoc3RyOiBzdHJpbmcsIHByZWZpeDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIHByZWZpeCArIHN0cjtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRUb0VuZCA9IChzdHI6IHN0cmluZywgc3VmZml4OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gc3RyICsgc3VmZml4O1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUZyb21TdGFydCA9IChzdHI6IHN0cmluZywgbnVtQ2hhcnM6IG51bWJlcik6IHN0cmluZyA9PiB7XG4gIHJldHVybiBzdHIuc3Vic3RyaW5nKG51bUNoYXJzKTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVGcm9tRW5kID0gKHN0cjogc3RyaW5nLCBudW1DaGFyczogbnVtYmVyKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIHN0ci5zdWJzdHJpbmcoMCwgc3RyLmxlbmd0aCAtIG51bUNoYXJzKTtcbn07XG4iLCJpbXBvcnQgUGx1Z2luTWFuYWdlciBmcm9tICd0aW55bWNlL2NvcmUvYXBpL1BsdWdpbk1hbmFnZXInO1xuXG5pbXBvcnQgKiBhcyBDb21tYW5kcyBmcm9tICcuL2FwaS9Db21tYW5kcyc7XG5pbXBvcnQgKiBhcyBPcHRpb25zIGZyb20gJy4vYXBpL09wdGlvbnMnO1xuaW1wb3J0ICogYXMgS2V5Ym9hcmQgZnJvbSAnLi9jb3JlL0tleWJvYXJkJztcbmltcG9ydCAqIGFzIENvbnRyb2xzIGZyb20gJy4vdWkvQ29udHJvbHMnO1xuXG5leHBvcnQgZGVmYXVsdCAoKTogdm9pZCA9PiB7XG4gIFBsdWdpbk1hbmFnZXIuYWRkKCdsaW5rJywgKGVkaXRvcikgPT4ge1xuICAgIE9wdGlvbnMucmVnaXN0ZXIoZWRpdG9yKTtcbiAgICBDb21tYW5kcy5yZWdpc3RlcihlZGl0b3IpO1xuICAgIENvbnRyb2xzLnNldHVwKGVkaXRvcik7XG4gICAgS2V5Ym9hcmQuc2V0dXAoZWRpdG9yKTtcbiAgfSk7XG59O1xuIiwiaW1wb3J0IHR5cGUgRWRpdG9yIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvRWRpdG9yJztcblxuaW1wb3J0ICogYXMgRGlhbG9nIGZyb20gJy4uL3VpL0RpYWxvZyc7XG5cbmltcG9ydCAqIGFzIE9wdGlvbnMgZnJvbSAnLi9PcHRpb25zJztcblxuaW50ZXJmYWNlIENvbW1hbmRPcHRpb25zIHtcbiAgcmVhZG9ubHkgZGlhbG9nPzogYm9vbGVhbjtcbn1cblxuY29uc3QgcmVnaXN0ZXIgPSAoZWRpdG9yOiBFZGl0b3IpOiB2b2lkID0+IHtcbiAgZWRpdG9yLmFkZENvbW1hbmQoJ21jZUxpbmsnLCAoX3VpLCB2YWx1ZT86IENvbW1hbmRPcHRpb25zKSA9PiB7XG4gICAgaWYgKHZhbHVlPy5kaWFsb2cgPT09IHRydWUgfHwgIU9wdGlvbnMudXNlUXVpY2tMaW5rKGVkaXRvcikpIHtcbiAgICAgIERpYWxvZy5vcGVuKGVkaXRvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVkaXRvci5kaXNwYXRjaCgnY29udGV4dHRvb2xiYXItc2hvdycsIHtcbiAgICAgICAgdG9vbGJhcktleTogJ3F1aWNrbGluaydcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQge1xuICByZWdpc3RlclxufTtcbiIsImltcG9ydCB7IFR5cGUgfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5pbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuaW1wb3J0IHR5cGUgeyBFZGl0b3JPcHRpb25zIH0gZnJvbSAndGlueW1jZS9jb3JlL2FwaS9PcHRpb25UeXBlcyc7XG5pbXBvcnQgdHlwZSB7IFVwbG9hZEZpbGVEYXRhLCBVcGxvYWRIYW5kbGVyIH0gZnJvbSAndGlueW1jZS9jb3JlL2ZpbGUvVXBsb2FkZXInO1xuXG5pbXBvcnQgdHlwZSB7IFVzZXJMaXN0SXRlbSB9IGZyb20gJy4uL3VpL0RpYWxvZ1R5cGVzJztcblxuaW1wb3J0IHsgQXNzdW1lRXh0ZXJuYWxUYXJnZXRzIH0gZnJvbSAnLi9UeXBlcyc7XG5cbnR5cGUgVXNlckxpbmtMaXN0Q2FsbGJhY2sgPSAoY2FsbGJhY2s6IChpdGVtczogVXNlckxpc3RJdGVtW10pID0+IHZvaWQpID0+IHZvaWQ7XG5cbmNvbnN0IG9wdGlvbjoge1xuICA8SyBleHRlbmRzIGtleW9mIEVkaXRvck9wdGlvbnM+KG5hbWU6IEspOiAoZWRpdG9yOiBFZGl0b3IpID0+IEVkaXRvck9wdGlvbnNbS107XG4gIDxUPihuYW1lOiBzdHJpbmcpOiAoZWRpdG9yOiBFZGl0b3IpID0+IFQ7XG59ID0gKG5hbWU6IHN0cmluZykgPT4gKGVkaXRvcjogRWRpdG9yKSA9PlxuICBlZGl0b3Iub3B0aW9ucy5nZXQobmFtZSk7XG5cbmNvbnN0IHJlZ2lzdGVyID0gKGVkaXRvcjogRWRpdG9yKTogdm9pZCA9PiB7XG4gIGNvbnN0IHJlZ2lzdGVyT3B0aW9uID0gZWRpdG9yLm9wdGlvbnMucmVnaXN0ZXI7XG5cbiAgcmVnaXN0ZXJPcHRpb24oJ2xpbmtfYXNzdW1lX2V4dGVybmFsX3RhcmdldHMnLCB7XG4gICAgcHJvY2Vzc29yOiAodmFsdWUpID0+IHtcbiAgICAgIGNvbnN0IHZhbGlkID0gVHlwZS5pc1N0cmluZyh2YWx1ZSkgfHwgVHlwZS5pc0Jvb2xlYW4odmFsdWUpO1xuICAgICAgaWYgKHZhbGlkKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBBc3N1bWVFeHRlcm5hbFRhcmdldHMuV0FSTiwgdmFsaWQgfTtcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gQXNzdW1lRXh0ZXJuYWxUYXJnZXRzLkFMV0FZU19IVFRQIHx8IHZhbHVlID09PSBBc3N1bWVFeHRlcm5hbFRhcmdldHMuQUxXQVlTX0hUVFBTKSB7XG4gICAgICAgICAgcmV0dXJuIHsgdmFsdWUsIHZhbGlkIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IEFzc3VtZUV4dGVybmFsVGFyZ2V0cy5PRkYsIHZhbGlkIH07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSwgbWVzc2FnZTogJ011c3QgYmUgYSBzdHJpbmcgb3IgYSBib29sZWFuLicgfTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRlZmF1bHQ6IGZhbHNlXG4gIH0pO1xuXG4gIHJlZ2lzdGVyT3B0aW9uKCdsaW5rX2NvbnRleHRfdG9vbGJhcicsIHtcbiAgICBwcm9jZXNzb3I6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0OiBmYWxzZVxuICB9KTtcblxuICByZWdpc3Rlck9wdGlvbignbGlua19saXN0Jywge1xuICAgIHByb2Nlc3NvcjogKHZhbHVlKSA9PiBUeXBlLmlzU3RyaW5nKHZhbHVlKSB8fCBUeXBlLmlzRnVuY3Rpb24odmFsdWUpIHx8IFR5cGUuaXNBcnJheU9mKHZhbHVlLCBUeXBlLmlzT2JqZWN0KVxuICB9KTtcblxuICByZWdpc3Rlck9wdGlvbignbGlua19kZWZhdWx0X3RhcmdldCcsIHtcbiAgICBwcm9jZXNzb3I6ICdzdHJpbmcnXG4gIH0pO1xuXG4gIHJlZ2lzdGVyT3B0aW9uKCdsaW5rX2RlZmF1bHRfcHJvdG9jb2wnLCB7XG4gICAgcHJvY2Vzc29yOiAnc3RyaW5nJyxcbiAgICBkZWZhdWx0OiAnaHR0cHMnXG4gIH0pO1xuXG4gIHJlZ2lzdGVyT3B0aW9uKCdsaW5rX3RhcmdldF9saXN0Jywge1xuICAgIHByb2Nlc3NvcjogKHZhbHVlKSA9PiBUeXBlLmlzQm9vbGVhbih2YWx1ZSkgfHwgVHlwZS5pc0FycmF5T2YodmFsdWUsIFR5cGUuaXNPYmplY3QpLFxuICAgIGRlZmF1bHQ6IHRydWVcbiAgfSk7XG5cbiAgcmVnaXN0ZXJPcHRpb24oJ2xpbmtfcmVsX2xpc3QnLCB7XG4gICAgcHJvY2Vzc29yOiAnb2JqZWN0W10nLFxuICAgIGRlZmF1bHQ6IFtdXG4gIH0pO1xuXG4gIHJlZ2lzdGVyT3B0aW9uKCdsaW5rX2NsYXNzX2xpc3QnLCB7XG4gICAgcHJvY2Vzc29yOiAnb2JqZWN0W10nLFxuICAgIGRlZmF1bHQ6IFtdXG4gIH0pO1xuXG4gIHJlZ2lzdGVyT3B0aW9uKCdsaW5rX3RpdGxlJywge1xuICAgIHByb2Nlc3NvcjogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IHRydWVcbiAgfSk7XG5cbiAgcmVnaXN0ZXJPcHRpb24oJ2FsbG93X3Vuc2FmZV9saW5rX3RhcmdldCcsIHtcbiAgICBwcm9jZXNzb3I6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0OiBmYWxzZVxuICB9KTtcblxuICByZWdpc3Rlck9wdGlvbignbGlua19xdWlja2xpbmsnLCB7XG4gICAgcHJvY2Vzc29yOiAnYm9vbGVhbicsXG4gICAgZGVmYXVsdDogZmFsc2VcbiAgfSk7XG5cbiAgcmVnaXN0ZXJPcHRpb24oJ2xpbmtfYXR0cmlidXRlc19wb3N0cHJvY2VzcycsIHtcbiAgICBwcm9jZXNzb3I6ICdmdW5jdGlvbicsXG4gIH0pO1xuXG4gIHJlZ2lzdGVyT3B0aW9uKCdmaWxlc191cGxvYWRfaGFuZGxlcicsIHtcbiAgICBwcm9jZXNzb3I6ICdmdW5jdGlvbidcbiAgfSk7XG5cbiAgcmVnaXN0ZXJPcHRpb24oJ2xpbmtfdXBsb2FkdGFiJywge1xuICAgIHByb2Nlc3NvcjogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IHRydWVcbiAgfSk7XG59O1xuXG5jb25zdCBhc3N1bWVFeHRlcm5hbFRhcmdldHMgPSBvcHRpb248QXNzdW1lRXh0ZXJuYWxUYXJnZXRzPignbGlua19hc3N1bWVfZXh0ZXJuYWxfdGFyZ2V0cycpO1xuY29uc3QgaGFzQ29udGV4dFRvb2xiYXIgPSBvcHRpb248Ym9vbGVhbj4oJ2xpbmtfY29udGV4dF90b29sYmFyJyk7XG5jb25zdCBnZXRMaW5rTGlzdCA9IG9wdGlvbjxzdHJpbmcgfCBVc2VyTGlzdEl0ZW1bXSB8IFVzZXJMaW5rTGlzdENhbGxiYWNrIHwgdW5kZWZpbmVkPignbGlua19saXN0Jyk7XG5jb25zdCBnZXREZWZhdWx0TGlua1RhcmdldCA9IG9wdGlvbjxzdHJpbmcgfCB1bmRlZmluZWQ+KCdsaW5rX2RlZmF1bHRfdGFyZ2V0Jyk7XG5jb25zdCBnZXREZWZhdWx0TGlua1Byb3RvY29sID0gb3B0aW9uPHN0cmluZz4oJ2xpbmtfZGVmYXVsdF9wcm90b2NvbCcpO1xuY29uc3QgZ2V0VGFyZ2V0TGlzdCA9IG9wdGlvbjxib29sZWFuIHwgVXNlckxpc3RJdGVtW10+KCdsaW5rX3RhcmdldF9saXN0Jyk7XG5jb25zdCBnZXRSZWxMaXN0ID0gb3B0aW9uPFVzZXJMaXN0SXRlbVtdPignbGlua19yZWxfbGlzdCcpO1xuY29uc3QgZ2V0TGlua0NsYXNzTGlzdCA9IG9wdGlvbjxVc2VyTGlzdEl0ZW1bXT4oJ2xpbmtfY2xhc3NfbGlzdCcpO1xuY29uc3Qgc2hvdWxkU2hvd0xpbmtUaXRsZSA9IG9wdGlvbjxib29sZWFuPignbGlua190aXRsZScpO1xuY29uc3QgYWxsb3dVbnNhZmVMaW5rVGFyZ2V0ID0gb3B0aW9uPGJvb2xlYW4+KCdhbGxvd191bnNhZmVfbGlua190YXJnZXQnKTtcbmNvbnN0IHVzZVF1aWNrTGluayA9IG9wdGlvbjxib29sZWFuPignbGlua19xdWlja2xpbmsnKTtcbmNvbnN0IGF0dHJpYnV0ZXNQb3N0UHJvY2VzcyA9IG9wdGlvbjwoYXR0cmlidXRlczogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZD4pID0+IHZvaWQ+KCdsaW5rX2F0dHJpYnV0ZXNfcG9zdHByb2Nlc3MnKTtcbmNvbnN0IGdldEZpbGVzVXBsb2FkSGFuZGxlciA9IG9wdGlvbjxVcGxvYWRIYW5kbGVyPFVwbG9hZEZpbGVEYXRhPj4oJ2ZpbGVzX3VwbG9hZF9oYW5kbGVyJyk7XG5jb25zdCBoYXNMaW5rVXBsb2FkdGFiID0gb3B0aW9uPGJvb2xlYW4+KCdsaW5rX3VwbG9hZHRhYicpO1xuY29uc3QgZ2V0RG9jdW1lbnRzRmlsZVR5cGVzID0gb3B0aW9uKCdkb2N1bWVudHNfZmlsZV90eXBlcycpO1xuXG5jb25zdCBoYXNGaWxlc1VwbG9hZEhhbmRsZXIgPSAoZWRpdG9yOiBFZGl0b3IpOiBib29sZWFuID0+XG4gIFR5cGUuaXNOb25OdWxsYWJsZShlZGl0b3Iub3B0aW9ucy5nZXQoJ2ZpbGVzX3VwbG9hZF9oYW5kbGVyJykpO1xuXG5jb25zdCBoYXNEb2N1bWVudHNGaWxlVHlwZXMgPSAoZWRpdG9yOiBFZGl0b3IpOiBib29sZWFuID0+XG4gIFR5cGUuaXNOb25OdWxsYWJsZShlZGl0b3Iub3B0aW9ucy5nZXQoJ2RvY3VtZW50c19maWxlX3R5cGVzJykpO1xuXG5leHBvcnQge1xuICByZWdpc3RlcixcbiAgYXNzdW1lRXh0ZXJuYWxUYXJnZXRzLFxuICBoYXNDb250ZXh0VG9vbGJhcixcbiAgZ2V0TGlua0xpc3QsXG4gIGdldERlZmF1bHRMaW5rVGFyZ2V0LFxuICBnZXRUYXJnZXRMaXN0LFxuICBnZXRSZWxMaXN0LFxuICBnZXRMaW5rQ2xhc3NMaXN0LFxuICBoYXNGaWxlc1VwbG9hZEhhbmRsZXIsXG4gIGhhc0RvY3VtZW50c0ZpbGVUeXBlcyxcbiAgZ2V0RmlsZXNVcGxvYWRIYW5kbGVyLFxuICBoYXNMaW5rVXBsb2FkdGFiLFxuICBzaG91bGRTaG93TGlua1RpdGxlLFxuICBhbGxvd1Vuc2FmZUxpbmtUYXJnZXQsXG4gIHVzZVF1aWNrTGluayxcbiAgZ2V0RGVmYXVsdExpbmtQcm90b2NvbCxcbiAgZ2V0RG9jdW1lbnRzRmlsZVR5cGVzLFxuICBhdHRyaWJ1dGVzUG9zdFByb2Nlc3Ncbn07XG4iLCJleHBvcnQgY29uc3QgZW51bSBBc3N1bWVFeHRlcm5hbFRhcmdldHMge1xuICBPRkYsXG4gIFdBUk4sXG4gIEFMV0FZU19IVFRQID0gJ2h0dHAnLFxuICBBTFdBWVNfSFRUUFMgPSAnaHR0cHMnXG59XG4iLCJpbXBvcnQgeyBBcnIsIE9wdGlvbmFsLCBPYmosIFR5cGUgfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5pbXBvcnQgdHlwZSBET01VdGlscyBmcm9tICd0aW55bWNlL2NvcmUvYXBpL2RvbS9ET01VdGlscyc7XG5pbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuaW1wb3J0IFVSSSBmcm9tICd0aW55bWNlL2NvcmUvYXBpL3V0aWwvVVJJJztcblxuaW1wb3J0ICogYXMgT3B0aW9ucyBmcm9tICcuLi9hcGkvT3B0aW9ucyc7XG5pbXBvcnQgeyBBc3N1bWVFeHRlcm5hbFRhcmdldHMgfSBmcm9tICcuLi9hcGkvVHlwZXMnO1xuaW1wb3J0IHR5cGUgeyBBdHRhY2hTdGF0ZSwgTGlua0RpYWxvZ091dHB1dCB9IGZyb20gJy4uL3VpL0RpYWxvZ1R5cGVzJztcblxuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnLi9VdGlscyc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvY29uc2lzdGVudC10eXBlLWRlZmluaXRpb25zXG50eXBlIExpbmtBdHRycyA9IHtcbiAgaHJlZjogc3RyaW5nO1xuICB0aXRsZT86IHN0cmluZyB8IG51bGw7XG4gIHJlbD86IHN0cmluZyB8IG51bGw7XG4gIGNsYXNzPzogc3RyaW5nIHwgbnVsbDtcbiAgdGFyZ2V0Pzogc3RyaW5nIHwgbnVsbDtcbn07XG5cbmNvbnN0IGdldExpbmtBdHRycyA9IChkYXRhOiBMaW5rRGlhbG9nT3V0cHV0KTogTGlua0F0dHJzID0+IHtcbiAgY29uc3QgYXR0cnM6IEFycmF5PGtleW9mIE9taXQ8TGlua0F0dHJzLCAnaHJlZic+PiA9IFsgJ3RpdGxlJywgJ3JlbCcsICdjbGFzcycsICd0YXJnZXQnIF07XG4gIHJldHVybiBBcnIuZm9sZGwoYXR0cnMsIChhY2MsIGtleSkgPT4ge1xuICAgIGRhdGFba2V5XS5lYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgLy8gSWYgZGVhbGluZyB3aXRoIGFuIGVtcHR5IHN0cmluZywgdGhlbiB0cmVhdCB0aGF0IGFzIGJlaW5nIG51bGwgc28gdGhlIGF0dHJpYnV0ZSBpcyByZW1vdmVkXG4gICAgICBhY2Nba2V5XSA9IHZhbHVlLmxlbmd0aCA+IDAgPyB2YWx1ZSA6IG51bGw7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge1xuICAgIGhyZWY6IGRhdGEuaHJlZlxuICB9IGFzIExpbmtBdHRycyk7XG59O1xuXG5jb25zdCBoYW5kbGVFeHRlcm5hbFRhcmdldHMgPSAoaHJlZjogc3RyaW5nLCBhc3N1bWVFeHRlcm5hbFRhcmdldHM6IEFzc3VtZUV4dGVybmFsVGFyZ2V0cyk6IHN0cmluZyA9PiB7XG4gIGlmICgoYXNzdW1lRXh0ZXJuYWxUYXJnZXRzID09PSBBc3N1bWVFeHRlcm5hbFRhcmdldHMuQUxXQVlTX0hUVFBcbiAgICB8fCBhc3N1bWVFeHRlcm5hbFRhcmdldHMgPT09IEFzc3VtZUV4dGVybmFsVGFyZ2V0cy5BTFdBWVNfSFRUUFMpXG4gICAgJiYgIVV0aWxzLmhhc1Byb3RvY29sKGhyZWYpKSB7XG4gICAgcmV0dXJuIGFzc3VtZUV4dGVybmFsVGFyZ2V0cyArICc6Ly8nICsgaHJlZjtcbiAgfVxuICByZXR1cm4gaHJlZjtcbn07XG5cbmNvbnN0IGFwcGx5TGlua092ZXJyaWRlcyA9IChlZGl0b3I6IEVkaXRvciwgbGlua0F0dHJzOiBMaW5rQXR0cnMpOiBMaW5rQXR0cnMgPT4ge1xuICBjb25zdCBuZXdMaW5rQXR0cnMgPSB7IC4uLmxpbmtBdHRycyB9O1xuICBpZiAoT3B0aW9ucy5nZXRSZWxMaXN0KGVkaXRvcikubGVuZ3RoID09PSAwICYmICFPcHRpb25zLmFsbG93VW5zYWZlTGlua1RhcmdldChlZGl0b3IpKSB7XG4gICAgY29uc3QgbmV3UmVsID0gVXRpbHMuYXBwbHlSZWxUYXJnZXRSdWxlcyhuZXdMaW5rQXR0cnMucmVsLCBuZXdMaW5rQXR0cnMudGFyZ2V0ID09PSAnX2JsYW5rJyk7XG4gICAgbmV3TGlua0F0dHJzLnJlbCA9IG5ld1JlbCA/IG5ld1JlbCA6IG51bGw7XG4gIH1cblxuICBpZiAoT3B0aW9uYWwuZnJvbShuZXdMaW5rQXR0cnMudGFyZ2V0KS5pc05vbmUoKSAmJiBPcHRpb25zLmdldFRhcmdldExpc3QoZWRpdG9yKSA9PT0gZmFsc2UpIHtcbiAgICBuZXdMaW5rQXR0cnMudGFyZ2V0ID0gT3B0aW9ucy5nZXREZWZhdWx0TGlua1RhcmdldChlZGl0b3IpO1xuICB9XG5cbiAgbmV3TGlua0F0dHJzLmhyZWYgPSBoYW5kbGVFeHRlcm5hbFRhcmdldHMobmV3TGlua0F0dHJzLmhyZWYsIE9wdGlvbnMuYXNzdW1lRXh0ZXJuYWxUYXJnZXRzKGVkaXRvcikpO1xuXG4gIHJldHVybiBuZXdMaW5rQXR0cnM7XG59O1xuXG5jb25zdCB1cGRhdGVMaW5rID0gKGVkaXRvcjogRWRpdG9yLCBhbmNob3JFbG06IEhUTUxBbmNob3JFbGVtZW50LCB0ZXh0OiBPcHRpb25hbDxzdHJpbmc+LCBsaW5rQXR0cnM6IExpbmtBdHRycyk6IHZvaWQgPT4ge1xuICAvLyBJZiB3ZSBoYXZlIHRleHQsIHRoZW4gdXBkYXRlIHRoZSBhbmNob3IgZWxlbWVudHMgdGV4dCBjb250ZW50XG4gIHRleHQuZWFjaCgodGV4dCkgPT4ge1xuICAgIGlmIChPYmouaGFzKGFuY2hvckVsbSwgJ2lubmVyVGV4dCcpKSB7XG4gICAgICBhbmNob3JFbG0uaW5uZXJUZXh0ID0gdGV4dDtcbiAgICB9IGVsc2Uge1xuICAgICAgYW5jaG9yRWxtLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICB9XG4gIH0pO1xuXG4gIGVkaXRvci5kb20uc2V0QXR0cmlicyhhbmNob3JFbG0sIGxpbmtBdHRycyk7XG5cbiAgLy8gTW92ZSB0aGUgY3Vyc29yIGJlaGluZCB0aGUgdXBkYXRlZCBsaW5rLCBzbyB0aGUgdXNlciBjYW4gZ28gb24gdHlwaW5nLlxuICBjb25zdCBybmcgPSBlZGl0b3IuZG9tLmNyZWF0ZVJuZygpO1xuICBybmcuc2V0U3RhcnRBZnRlcihhbmNob3JFbG0pO1xuICBybmcuc2V0RW5kQWZ0ZXIoYW5jaG9yRWxtKTtcbiAgZWRpdG9yLnNlbGVjdGlvbi5zZXRSbmcocm5nKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUxpbmsgPSAoZWRpdG9yOiBFZGl0b3IsIHNlbGVjdGVkRWxtOiBFbGVtZW50LCB0ZXh0OiBPcHRpb25hbDxzdHJpbmc+LCBsaW5rQXR0cnM6IExpbmtBdHRycyk6IHZvaWQgPT4ge1xuICBjb25zdCBkb20gPSBlZGl0b3IuZG9tO1xuICBpZiAoVXRpbHMuaXNJbWFnZUZpZ3VyZShzZWxlY3RlZEVsbSkpIHtcbiAgICBsaW5rSW1hZ2VGaWd1cmUoZG9tLCBzZWxlY3RlZEVsbSwgbGlua0F0dHJzKTtcbiAgfSBlbHNlIHtcbiAgICB0ZXh0LmZvbGQoXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGVkaXRvci5leGVjQ29tbWFuZCgnbWNlSW5zZXJ0TGluaycsIGZhbHNlLCBsaW5rQXR0cnMpO1xuICAgICAgICAvLyBOb3cgdGhlIG5ld2x5IGluc2VydGVkIGxpbmsgaXMgc2VsZWN0ZWQuIE1vdmUgdGhlIGN1cnNvciBiZWhpbmQgdGhlIG5ldyBsaW5rLCBzbyB0aGUgdXNlciBjYW4gZ28gb24gdHlwaW5nLlxuICAgICAgICBjb25zdCBlbmQgPSBlZGl0b3Iuc2VsZWN0aW9uLmdldEVuZCgpO1xuICAgICAgICBjb25zdCBybmcgPSBkb20uY3JlYXRlUm5nKCk7XG4gICAgICAgIHJuZy5zZXRTdGFydEFmdGVyKGVuZCk7XG4gICAgICAgIHJuZy5zZXRFbmRBZnRlcihlbmQpO1xuICAgICAgICBlZGl0b3Iuc2VsZWN0aW9uLnNldFJuZyhybmcpO1xuICAgICAgfSxcbiAgICAgICh0ZXh0KSA9PiB7XG4gICAgICAgIGVkaXRvci5pbnNlcnRDb250ZW50KGRvbS5jcmVhdGVIVE1MKCdhJywgbGlua0F0dHJzLCBkb20uZW5jb2RlKHRleHQpKSk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxufTtcblxuY29uc3QgbGlua0RvbU11dGF0aW9uID0gKGVkaXRvcjogRWRpdG9yLCBhdHRhY2hTdGF0ZTogQXR0YWNoU3RhdGUsIGRhdGE6IExpbmtEaWFsb2dPdXRwdXQpOiB2b2lkID0+IHtcbiAgY29uc3Qgc2VsZWN0ZWRFbG0gPSBlZGl0b3Iuc2VsZWN0aW9uLmdldE5vZGUoKTtcbiAgY29uc3QgYW5jaG9yRWxtID0gVXRpbHMuZ2V0QW5jaG9yRWxlbWVudChlZGl0b3IsIHNlbGVjdGVkRWxtKTtcbiAgY29uc3QgbGlua0F0dHJzID0gYXBwbHlMaW5rT3ZlcnJpZGVzKGVkaXRvciwgZ2V0TGlua0F0dHJzKGRhdGEpKTtcbiAgY29uc3QgYXR0cmlidXRlc1Bvc3RQcm9jZXNzID0gT3B0aW9ucy5hdHRyaWJ1dGVzUG9zdFByb2Nlc3MoZWRpdG9yKTtcbiAgaWYgKFR5cGUuaXNOb25OdWxsYWJsZShhdHRyaWJ1dGVzUG9zdFByb2Nlc3MpKSB7XG4gICAgYXR0cmlidXRlc1Bvc3RQcm9jZXNzKGxpbmtBdHRycyk7XG4gIH1cblxuICBlZGl0b3IudW5kb01hbmFnZXIudHJhbnNhY3QoKCkgPT4ge1xuICAgIGlmIChkYXRhLmhyZWYgPT09IGF0dGFjaFN0YXRlLmhyZWYpIHtcbiAgICAgIGF0dGFjaFN0YXRlLmF0dGFjaCgpO1xuICAgIH1cblxuICAgIGFuY2hvckVsbS5mb2xkKFxuICAgICAgKCkgPT4ge1xuICAgICAgICBjcmVhdGVMaW5rKGVkaXRvciwgc2VsZWN0ZWRFbG0sIGRhdGEudGV4dCwgbGlua0F0dHJzKTtcbiAgICAgIH0sXG4gICAgICAoZWxtKSA9PiB7XG4gICAgICAgIGVkaXRvci5mb2N1cygpO1xuICAgICAgICB1cGRhdGVMaW5rKGVkaXRvciwgZWxtLCBkYXRhLnRleHQsIGxpbmtBdHRycyk7XG4gICAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCB1bmxpbmtTZWxlY3Rpb24gPSAoZWRpdG9yOiBFZGl0b3IpOiB2b2lkID0+IHtcbiAgY29uc3QgZG9tID0gZWRpdG9yLmRvbSwgc2VsZWN0aW9uID0gZWRpdG9yLnNlbGVjdGlvbjtcbiAgY29uc3QgYm9va21hcmsgPSBzZWxlY3Rpb24uZ2V0Qm9va21hcmsoKTtcbiAgY29uc3Qgcm5nID0gc2VsZWN0aW9uLmdldFJuZygpLmNsb25lUmFuZ2UoKTtcblxuICAvLyBFeHRlbmQgdGhlIHNlbGVjdGlvbiBvdXQgdG8gdGhlIGVudGlyZSBhbmNob3IgZWxlbWVudFxuICBjb25zdCBzdGFydEFuY2hvckVsbSA9IGRvbS5nZXRQYXJlbnQocm5nLnN0YXJ0Q29udGFpbmVyLCAnYVtocmVmXScsIGVkaXRvci5nZXRCb2R5KCkpO1xuICBjb25zdCBlbmRBbmNob3JFbG0gPSBkb20uZ2V0UGFyZW50KHJuZy5lbmRDb250YWluZXIsICdhW2hyZWZdJywgZWRpdG9yLmdldEJvZHkoKSk7XG4gIGlmIChzdGFydEFuY2hvckVsbSkge1xuICAgIHJuZy5zZXRTdGFydEJlZm9yZShzdGFydEFuY2hvckVsbSk7XG4gIH1cbiAgaWYgKGVuZEFuY2hvckVsbSkge1xuICAgIHJuZy5zZXRFbmRBZnRlcihlbmRBbmNob3JFbG0pO1xuICB9XG4gIHNlbGVjdGlvbi5zZXRSbmcocm5nKTtcblxuICAvLyBSZW1vdmUgdGhlIGxpbmtcbiAgZWRpdG9yLmV4ZWNDb21tYW5kKCd1bmxpbmsnKTtcbiAgc2VsZWN0aW9uLm1vdmVUb0Jvb2ttYXJrKGJvb2ttYXJrKTtcbn07XG5cbmNvbnN0IHVubGlua0RvbU11dGF0aW9uID0gKGVkaXRvcjogRWRpdG9yKTogdm9pZCA9PiB7XG4gIGVkaXRvci51bmRvTWFuYWdlci50cmFuc2FjdCgoKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGVkaXRvci5zZWxlY3Rpb24uZ2V0Tm9kZSgpO1xuICAgIGlmIChVdGlscy5pc0ltYWdlRmlndXJlKG5vZGUpKSB7XG4gICAgICB1bmxpbmtJbWFnZUZpZ3VyZShlZGl0b3IsIG5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1bmxpbmtTZWxlY3Rpb24oZWRpdG9yKTtcbiAgICB9XG4gICAgZWRpdG9yLmZvY3VzKCk7XG4gIH0pO1xufTtcblxuLypcbiAqIFJUQyB1c2VzIHVud3JhcHBlZCBvcHRpb25zLlxuICpcbiAqIFRvIGJlc3Qgc2ltdWxhdGUgdGhpcywgd2UgdW53cmFwIHRvIG51bGwgYW5kIGZpbHRlciBvdXQgZW1wdHkgdmFsdWVzLlxuICovXG5jb25zdCB1bndyYXBPcHRpb25zID0gKGRhdGE6IExpbmtEaWFsb2dPdXRwdXQpID0+IHtcbiAgY29uc3QgeyBjbGFzczogY2xzLCBocmVmLCByZWwsIHRhcmdldCwgdGV4dCwgdGl0bGUgfSA9IGRhdGE7XG5cbiAgcmV0dXJuIE9iai5maWx0ZXIoe1xuICAgIGNsYXNzOiBjbHMuZ2V0T3JOdWxsKCksXG4gICAgaHJlZixcbiAgICByZWw6IHJlbC5nZXRPck51bGwoKSxcbiAgICB0YXJnZXQ6IHRhcmdldC5nZXRPck51bGwoKSxcbiAgICB0ZXh0OiB0ZXh0LmdldE9yTnVsbCgpLFxuICAgIHRpdGxlOiB0aXRsZS5nZXRPck51bGwoKVxuICB9LCAodiwgX2spID0+IFR5cGUuaXNOdWxsKHYpID09PSBmYWxzZSk7XG59O1xuXG5jb25zdCBzYW5pdGl6ZURhdGEgPSAoZWRpdG9yOiBFZGl0b3IsIGRhdGE6IExpbmtEaWFsb2dPdXRwdXQpOiBMaW5rRGlhbG9nT3V0cHV0ID0+IHtcbiAgY29uc3QgZ2V0T3B0aW9uID0gZWRpdG9yLm9wdGlvbnMuZ2V0O1xuICBjb25zdCB1cmlPcHRpb25zID0ge1xuICAgIGFsbG93X2h0bWxfZGF0YV91cmxzOiBnZXRPcHRpb24oJ2FsbG93X2h0bWxfZGF0YV91cmxzJyksXG4gICAgYWxsb3dfc2NyaXB0X3VybHM6IGdldE9wdGlvbignYWxsb3dfc2NyaXB0X3VybHMnKSxcbiAgICBhbGxvd19zdmdfZGF0YV91cmxzOiBnZXRPcHRpb24oJ2FsbG93X3N2Z19kYXRhX3VybHMnKVxuICB9O1xuICAvLyBTYW5pdGl6ZSB0aGUgVVJMXG4gIGNvbnN0IGhyZWYgPSBkYXRhLmhyZWY7XG4gIHJldHVybiB7XG4gICAgLi4uZGF0YSxcbiAgICBocmVmOiBVUkkuaXNEb21TYWZlKGhyZWYsICdhJywgdXJpT3B0aW9ucykgPyBocmVmIDogJydcbiAgfTtcbn07XG5cbmNvbnN0IGxpbmsgPSAoZWRpdG9yOiBFZGl0b3IsIGF0dGFjaFN0YXRlOiBBdHRhY2hTdGF0ZSwgZGF0YTogTGlua0RpYWxvZ091dHB1dCk6IHZvaWQgPT4ge1xuICBjb25zdCBzYW5pdGl6ZWREYXRhID0gc2FuaXRpemVEYXRhKGVkaXRvciwgZGF0YSk7XG4gIGVkaXRvci5oYXNQbHVnaW4oJ3J0YycsIHRydWUpID8gZWRpdG9yLmV4ZWNDb21tYW5kKCdjcmVhdGVsaW5rJywgZmFsc2UsIHVud3JhcE9wdGlvbnMoc2FuaXRpemVkRGF0YSkpIDogbGlua0RvbU11dGF0aW9uKGVkaXRvciwgYXR0YWNoU3RhdGUsIHNhbml0aXplZERhdGEpO1xufTtcblxuY29uc3QgdW5saW5rID0gKGVkaXRvcjogRWRpdG9yKTogdm9pZCA9PiB7XG4gIGVkaXRvci5oYXNQbHVnaW4oJ3J0YycsIHRydWUpID8gZWRpdG9yLmV4ZWNDb21tYW5kKCd1bmxpbmsnKSA6IHVubGlua0RvbU11dGF0aW9uKGVkaXRvcik7XG59O1xuXG5jb25zdCB1bmxpbmtJbWFnZUZpZ3VyZSA9IChlZGl0b3I6IEVkaXRvciwgZmlnOiBFbGVtZW50KTogdm9pZCA9PiB7XG4gIGNvbnN0IGltZyA9IGVkaXRvci5kb20uc2VsZWN0KCdpbWcnLCBmaWcpWzBdO1xuICBpZiAoaW1nKSB7XG4gICAgY29uc3QgYSA9IGVkaXRvci5kb20uZ2V0UGFyZW50cyhpbWcsICdhW2hyZWZdJywgZmlnKVswXTtcbiAgICBpZiAoYSkge1xuICAgICAgYS5wYXJlbnROb2RlPy5pbnNlcnRCZWZvcmUoaW1nLCBhKTtcbiAgICAgIGVkaXRvci5kb20ucmVtb3ZlKGEpO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgbGlua0ltYWdlRmlndXJlID0gKGRvbTogRE9NVXRpbHMsIGZpZzogRWxlbWVudCwgYXR0cnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IG51bGw+KSA9PiB7XG4gIGNvbnN0IGltZyA9IGRvbS5zZWxlY3QoJ2ltZycsIGZpZylbMF07XG4gIGlmIChpbWcpIHtcbiAgICBjb25zdCBhID0gZG9tLmNyZWF0ZSgnYScsIGF0dHJzKTtcbiAgICBpbWcucGFyZW50Tm9kZT8uaW5zZXJ0QmVmb3JlKGEsIGltZyk7XG4gICAgYS5hcHBlbmRDaGlsZChpbWcpO1xuICB9XG59O1xuXG5leHBvcnQge1xuICBsaW5rLFxuICB1bmxpbmtcbn07XG4iLCJpbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuXG5jb25zdCBzZXR1cCA9IChlZGl0b3I6IEVkaXRvcik6IHZvaWQgPT4ge1xuICBlZGl0b3IuYWRkU2hvcnRjdXQoJ01ldGErSycsICcnLCAoKSA9PiB7XG4gICAgZWRpdG9yLmV4ZWNDb21tYW5kKCdtY2VMaW5rJyk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHtcbiAgc2V0dXBcbn07XG4iLCJpbXBvcnQgeyBPcHRpb25hbCwgVHlwZSB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmltcG9ydCB0eXBlIHsgRGlhbG9nIH0gZnJvbSAndGlueW1jZS9jb3JlL2FwaS91aS9VaSc7XG5pbXBvcnQgVG9vbHMgZnJvbSAndGlueW1jZS9jb3JlL2FwaS91dGlsL1Rvb2xzJztcblxuaW1wb3J0IHR5cGUgeyBMaXN0SXRlbSwgVXNlckxpc3RJdGVtIH0gZnJvbSAnLi4vdWkvRGlhbG9nVHlwZXMnO1xuXG50eXBlIExpc3RFeHRyYWN0b3IgPSAoaXRlbTogVXNlckxpc3RJdGVtKSA9PiBzdHJpbmc7XG5cbmNvbnN0IGdldFZhbHVlID0gKGl0ZW06IFVzZXJMaXN0SXRlbSk6IHN0cmluZyA9PlxuICBUeXBlLmlzU3RyaW5nKGl0ZW0udmFsdWUpID8gaXRlbS52YWx1ZSA6ICcnO1xuXG5jb25zdCBnZXRUZXh0ID0gKGl0ZW06IFVzZXJMaXN0SXRlbSk6IHN0cmluZyA9PiB7XG4gIGlmIChUeXBlLmlzU3RyaW5nKGl0ZW0udGV4dCkpIHtcbiAgICByZXR1cm4gaXRlbS50ZXh0O1xuICB9IGVsc2UgaWYgKFR5cGUuaXNTdHJpbmcoaXRlbS50aXRsZSkpIHtcbiAgICByZXR1cm4gaXRlbS50aXRsZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbn07XG5cbmNvbnN0IHNhbml0aXplTGlzdCA9IChsaXN0OiBVc2VyTGlzdEl0ZW1bXSwgZXh0cmFjdFZhbHVlOiBMaXN0RXh0cmFjdG9yKTogTGlzdEl0ZW1bXSA9PiB7XG4gIGNvbnN0IG91dDogTGlzdEl0ZW1bXSA9IFtdO1xuICBUb29scy5lYWNoKGxpc3QsIChpdGVtKSA9PiB7XG4gICAgY29uc3QgdGV4dCA9IGdldFRleHQoaXRlbSk7XG4gICAgaWYgKGl0ZW0ubWVudSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBpdGVtcyA9IHNhbml0aXplTGlzdChpdGVtLm1lbnUsIGV4dHJhY3RWYWx1ZSk7XG4gICAgICBvdXQucHVzaCh7IHRleHQsIGl0ZW1zIH0pOyAvLyBsaXN0IGdyb3VwXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZXh0cmFjdFZhbHVlKGl0ZW0pO1xuICAgICAgb3V0LnB1c2goeyB0ZXh0LCB2YWx1ZSB9KTsgLy8gbGlzdCB2YWx1ZVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvdXQ7XG59O1xuXG5jb25zdCBzYW5pdGl6ZVdpdGggPSAoZXh0cmFjdGVyOiBMaXN0RXh0cmFjdG9yID0gZ2V0VmFsdWUpID0+IChsaXN0OiBVc2VyTGlzdEl0ZW1bXSB8IHVuZGVmaW5lZCk6IE9wdGlvbmFsPExpc3RJdGVtW10+ID0+XG4gIE9wdGlvbmFsLmZyb20obGlzdCkubWFwKChsaXN0KSA9PiBzYW5pdGl6ZUxpc3QobGlzdCwgZXh0cmFjdGVyKSk7XG5cbmNvbnN0IHNhbml0aXplID0gKGxpc3Q6IFVzZXJMaXN0SXRlbVtdKTogT3B0aW9uYWw8TGlzdEl0ZW1bXT4gPT5cbiAgc2FuaXRpemVXaXRoKGdldFZhbHVlKShsaXN0KTtcblxuLy8gTk9URTogTWF5IG5lZWQgdG8gY2FyZSBhYm91dCBmbGF0dGVuaW5nLlxuY29uc3QgY3JlYXRlVWkgPSAobmFtZTogc3RyaW5nLCBsYWJlbDogc3RyaW5nKSA9PiAoaXRlbXM6IExpc3RJdGVtW10pOiBEaWFsb2cuTGlzdEJveFNwZWMgPT4gKHtcbiAgbmFtZSxcbiAgdHlwZTogJ2xpc3Rib3gnLFxuICBsYWJlbCxcbiAgaXRlbXNcbn0pO1xuXG5leHBvcnQgY29uc3QgTGlzdE9wdGlvbnMgPSB7XG4gIHNhbml0aXplLFxuICBzYW5pdGl6ZVdpdGgsXG4gIGNyZWF0ZVVpLFxuICBnZXRWYWx1ZVxufTtcbiIsImltcG9ydCB7IFNpbmdsZXRvbiwgdHlwZSBPcHRpb25hbCwgT3B0aW9uYWxzLCBTdHJpbmdzIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0IHR5cGUgRWRpdG9yIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvRWRpdG9yJztcbmltcG9ydCBWSyBmcm9tICd0aW55bWNlL2NvcmUvYXBpL3V0aWwvVksnO1xuXG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuL1V0aWxzJztcblxuaW50ZXJmYWNlIExpbmtTZWxlY3Rpb24ge1xuICByZWFkb25seSBnb3RvU2VsZWN0ZWRMaW5rOiAoKSA9PiB2b2lkO1xufVxuXG5jb25zdCBhcHBlbmRDbGlja1JlbW92ZSA9IChsaW5rOiBIVE1MQW5jaG9yRWxlbWVudCwgZXZ0OiBNb3VzZUV2ZW50KTogdm9pZCA9PiB7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XG4gIGxpbmsuZGlzcGF0Y2hFdmVudChldnQpO1xuICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGxpbmspO1xufTtcblxuY29uc3Qgb3BlbkxpbmsgPSAodXJsOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgbGluay50YXJnZXQgPSAnX2JsYW5rJztcbiAgbGluay5ocmVmID0gdXJsO1xuICBsaW5rLnJlbCA9ICdub3JlZmVycmVyIG5vb3BlbmVyJztcblxuICBjb25zdCBldnQgPSBuZXcgTW91c2VFdmVudCgnY2xpY2snLCB7XG4gICAgYnViYmxlczogdHJ1ZSxcbiAgICBjYW5jZWxhYmxlOiB0cnVlLFxuICAgIHZpZXc6IHdpbmRvd1xuICB9KTtcbiAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldnQpO1xuXG4gIGFwcGVuZENsaWNrUmVtb3ZlKGxpbmssIGV2dCk7XG59O1xuXG5jb25zdCBoYXNPbmx5QWx0TW9kaWZpZXIgPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICByZXR1cm4gZS5hbHRLZXkgPT09IHRydWUgJiYgZS5zaGlmdEtleSA9PT0gZmFsc2UgJiYgZS5jdHJsS2V5ID09PSBmYWxzZSAmJiBlLm1ldGFLZXkgPT09IGZhbHNlO1xufTtcblxuY29uc3QgZ290b0xpbmsgPSAoZWRpdG9yOiBFZGl0b3IsIGE6IEhUTUxBbmNob3JFbGVtZW50IHwgdW5kZWZpbmVkKTogdm9pZCA9PiB7XG4gIGlmIChhKSB7XG4gICAgY29uc3QgaHJlZiA9IFV0aWxzLmdldEhyZWYoYSk7XG4gICAgaWYgKC9eIy8udGVzdChocmVmKSkge1xuICAgICAgY29uc3QgdGFyZ2V0RWwgPSBlZGl0b3IuZG9tLnNlbGVjdChgJHtocmVmfSxbbmFtZT1cIiR7U3RyaW5ncy5yZW1vdmVMZWFkaW5nKGhyZWYsICcjJyl9XCJdYCk7XG4gICAgICBpZiAodGFyZ2V0RWwubGVuZ3RoKSB7XG4gICAgICAgIGVkaXRvci5zZWxlY3Rpb24uc2Nyb2xsSW50b1ZpZXcodGFyZ2V0RWxbMF0sIHRydWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBvcGVuTGluayhhLmhyZWYpO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgaXNTZWxlY3Rpb25PbkltYWdlV2l0aEVtYmVkZGVkTGluayA9IChlZGl0b3I6IEVkaXRvcikgPT4ge1xuICBjb25zdCBybmcgPSBlZGl0b3Iuc2VsZWN0aW9uLmdldFJuZygpO1xuICBjb25zdCBub2RlID0gcm5nLnN0YXJ0Q29udGFpbmVyO1xuICAvLyBIYW5kbGUgYSBjYXNlIHdoZXJlIGFuIGltYWdlIGVtYmVkZGVkIHdpdGggYSBsaW5rIGlzIHNlbGVjdGVkXG4gIHJldHVybiBVdGlscy5pc0xpbmsobm9kZSkgJiYgcm5nLnN0YXJ0Q29udGFpbmVyID09PSBybmcuZW5kQ29udGFpbmVyICYmIGVkaXRvci5kb20uc2VsZWN0KCdpbWcnLCBub2RlKS5sZW5ndGggPT09IDE7XG59O1xuXG5jb25zdCBnZXRMaW5rRnJvbUVsZW1lbnQgPSAoZWRpdG9yOiBFZGl0b3IsIGVsZW1lbnQ6IE5vZGUpOiBPcHRpb25hbDxIVE1MQW5jaG9yRWxlbWVudD4gPT4ge1xuICBjb25zdCBsaW5rcyA9IFV0aWxzLmdldExpbmtzKGVkaXRvci5kb20uZ2V0UGFyZW50cyhlbGVtZW50KSk7XG4gIHJldHVybiBPcHRpb25hbHMuc29tZUlmKGxpbmtzLmxlbmd0aCA9PT0gMSwgbGlua3NbMF0pO1xufTtcbmNvbnN0IGdldExpbmtJblNlbGVjdGlvbiA9IChlZGl0b3I6IEVkaXRvcik6IE9wdGlvbmFsPEhUTUxBbmNob3JFbGVtZW50PiA9PiB7XG4gIGNvbnN0IGxpbmtzID0gVXRpbHMuZ2V0TGlua3NJblNlbGVjdGlvbihlZGl0b3Iuc2VsZWN0aW9uLmdldFJuZygpKTtcbiAgcmV0dXJuIE9wdGlvbmFscy5zb21lSWYobGlua3MubGVuZ3RoID4gMCwgbGlua3NbMF0pLm9yKGdldExpbmtGcm9tRWxlbWVudChlZGl0b3IsIGVkaXRvci5zZWxlY3Rpb24uZ2V0Tm9kZSgpKSk7XG59O1xuXG5jb25zdCBnZXRMaW5rRnJvbVNlbGVjdGlvbiA9IChlZGl0b3I6IEVkaXRvcikgPT4gZWRpdG9yLnNlbGVjdGlvbi5pc0NvbGxhcHNlZCgpIHx8IGlzU2VsZWN0aW9uT25JbWFnZVdpdGhFbWJlZGRlZExpbmsoZWRpdG9yKVxuICA/IGdldExpbmtGcm9tRWxlbWVudChlZGl0b3IsIGVkaXRvci5zZWxlY3Rpb24uZ2V0U3RhcnQoKSlcbiAgOiBnZXRMaW5rSW5TZWxlY3Rpb24oZWRpdG9yKTtcblxuY29uc3Qgc2V0dXAgPSAoZWRpdG9yOiBFZGl0b3IpOiBMaW5rU2VsZWN0aW9uID0+IHtcbiAgY29uc3Qgc2VsZWN0ZWRMaW5rID0gU2luZ2xldG9uLnZhbHVlPEhUTUxBbmNob3JFbGVtZW50PigpO1xuXG4gIGNvbnN0IGdldFNlbGVjdGVkTGluayA9ICgpOiBPcHRpb25hbDxIVE1MQW5jaG9yRWxlbWVudD4gPT4gc2VsZWN0ZWRMaW5rLmdldCgpLm9yKGdldExpbmtGcm9tU2VsZWN0aW9uKGVkaXRvcikpO1xuICBjb25zdCBnb3RvU2VsZWN0ZWRMaW5rID0gKCkgPT4gZ2V0U2VsZWN0ZWRMaW5rKCkuZWFjaCgobGluaykgPT4gZ290b0xpbmsoZWRpdG9yLCBsaW5rKSk7XG5cbiAgZWRpdG9yLm9uKCdjb250ZXh0bWVudScsIChlKSA9PiB7XG4gICAgZ2V0TGlua0Zyb21FbGVtZW50KGVkaXRvciwgZS50YXJnZXQpLmVhY2goc2VsZWN0ZWRMaW5rLnNldCk7XG4gIH0pO1xuXG4gIGVkaXRvci5vbignU2VsZWN0aW9uQ2hhbmdlJywgKCkgPT4ge1xuICAgIGlmICghc2VsZWN0ZWRMaW5rLmlzU2V0KCkpIHtcbiAgICAgIGdldExpbmtGcm9tU2VsZWN0aW9uKGVkaXRvcikuZWFjaChzZWxlY3RlZExpbmsuc2V0KTtcbiAgICB9XG4gIH0pO1xuXG4gIGVkaXRvci5vbignY2xpY2snLCAoZSkgPT4ge1xuICAgIHNlbGVjdGVkTGluay5jbGVhcigpO1xuICAgIGNvbnN0IGxpbmtzID0gVXRpbHMuZ2V0TGlua3MoZWRpdG9yLmRvbS5nZXRQYXJlbnRzKGUudGFyZ2V0KSkgYXMgW0hUTUxBbmNob3JFbGVtZW50XTtcblxuICAgIGlmIChsaW5rcy5sZW5ndGggPT09IDEgJiYgVksubWV0YUtleVByZXNzZWQoZSkpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGdvdG9MaW5rKGVkaXRvciwgbGlua3NbMF0pO1xuICAgIH1cbiAgfSk7XG5cbiAgZWRpdG9yLm9uKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICBzZWxlY3RlZExpbmsuY2xlYXIoKTtcbiAgICBpZiAoIWUuaXNEZWZhdWx0UHJldmVudGVkKCkgJiYgZS5rZXlDb2RlID09PSAxMyAmJiBoYXNPbmx5QWx0TW9kaWZpZXIoZSkpIHtcbiAgICAgIGdldFNlbGVjdGVkTGluaygpLmVhY2goKGxpbmspID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBnb3RvTGluayhlZGl0b3IsIGxpbmspO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4ge1xuICAgIGdvdG9TZWxlY3RlZExpbmtcbiAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIHsgTGlua1NlbGVjdGlvbiB9O1xuZXhwb3J0IHsgc2V0dXAgfTtcbiIsImltcG9ydCB7IE9iaiwgT3B0aW9uYWwsIFR5cGUgfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5pbXBvcnQgdHlwZSBFZGl0b3JTZWxlY3Rpb24gZnJvbSAndGlueW1jZS9jb3JlL2FwaS9kb20vU2VsZWN0aW9uJztcbmltcG9ydCBEb21UcmVlV2Fsa2VyIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvZG9tL1RyZWVXYWxrZXInO1xuaW1wb3J0IHR5cGUgRWRpdG9yIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvRWRpdG9yJztcbmltcG9ydCBUb29scyBmcm9tICd0aW55bWNlL2NvcmUvYXBpL3V0aWwvVG9vbHMnO1xuXG5jb25zdCBpc0FuY2hvciA9IChlbG06IE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkKTogZWxtIGlzIEhUTUxBbmNob3JFbGVtZW50ID0+XG4gIFR5cGUuaXNOb25OdWxsYWJsZShlbG0pICYmIGVsbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnYSc7XG5cbmNvbnN0IGlzTGluayA9IChlbG06IE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkKTogZWxtIGlzIEhUTUxBbmNob3JFbGVtZW50ID0+XG4gIGlzQW5jaG9yKGVsbSkgJiYgISFnZXRIcmVmKGVsbSk7XG5cbmNvbnN0IGNvbGxlY3ROb2Rlc0luUmFuZ2UgPSA8VCBleHRlbmRzIE5vZGU+KHJuZzogUmFuZ2UsIHByZWRpY2F0ZTogKG5vZGU6IE5vZGUpID0+IG5vZGUgaXMgVCk6IFRbXSA9PiB7XG4gIGlmIChybmcuY29sbGFwc2VkKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGNvbnRlbnRzID0gcm5nLmNsb25lQ29udGVudHMoKTtcbiAgICBjb25zdCBmaXJzdENoaWxkID0gY29udGVudHMuZmlyc3RDaGlsZCBhcyBOb2RlO1xuICAgIGNvbnN0IHdhbGtlciA9IG5ldyBEb21UcmVlV2Fsa2VyKGZpcnN0Q2hpbGQsIGNvbnRlbnRzKTtcbiAgICBjb25zdCBlbGVtZW50czogVFtdID0gW107XG4gICAgbGV0IGN1cnJlbnQ6IE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkID0gZmlyc3RDaGlsZDtcbiAgICBkbyB7XG4gICAgICBpZiAocHJlZGljYXRlKGN1cnJlbnQpKSB7XG4gICAgICAgIGVsZW1lbnRzLnB1c2goY3VycmVudCk7XG4gICAgICB9XG4gICAgfSB3aGlsZSAoKGN1cnJlbnQgPSB3YWxrZXIubmV4dCgpKSk7XG4gICAgcmV0dXJuIGVsZW1lbnRzO1xuICB9XG59O1xuXG5jb25zdCBoYXNQcm90b2NvbCA9ICh1cmw6IHN0cmluZyk6IGJvb2xlYW4gPT5cbiAgL15cXHcrOi9pLnRlc3QodXJsKTtcblxuY29uc3QgZ2V0SHJlZiA9IChlbG06IEVsZW1lbnQpOiBzdHJpbmcgPT4ge1xuICAvLyBSZXR1cm5zIHRoZSByZWFsIGhyZWYgdmFsdWUgbm90IHRoZSByZXNvbHZlZCBhLmhyZWYgdmFsdWVcbiAgcmV0dXJuIGVsbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWNlLWhyZWYnKSA/PyBlbG0uZ2V0QXR0cmlidXRlKCdocmVmJykgPz8gJyc7XG59O1xuXG5jb25zdCBhcHBseVJlbFRhcmdldFJ1bGVzID0gKHJlbDogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCwgaXNVbnNhZmU6IGJvb2xlYW4pOiBzdHJpbmcgPT4ge1xuICBjb25zdCBydWxlcyA9IFsgJ25vb3BlbmVyJyBdO1xuICBjb25zdCByZWxzID0gcmVsID8gcmVsLnNwbGl0KC9cXHMrLykgOiBbXTtcblxuICBjb25zdCB0b1N0cmluZyA9IChyZWxzOiBzdHJpbmdbXSk6IHN0cmluZyA9PiBUb29scy50cmltKHJlbHMuc29ydCgpLmpvaW4oJyAnKSk7XG5cbiAgY29uc3QgYWRkVGFyZ2V0UnVsZXMgPSAocmVsczogc3RyaW5nW10pOiBzdHJpbmdbXSA9PiB7XG4gICAgcmVscyA9IHJlbW92ZVRhcmdldFJ1bGVzKHJlbHMpO1xuICAgIHJldHVybiByZWxzLmxlbmd0aCA+IDAgPyByZWxzLmNvbmNhdChydWxlcykgOiBydWxlcztcbiAgfTtcblxuICBjb25zdCByZW1vdmVUYXJnZXRSdWxlcyA9IChyZWxzOiBzdHJpbmdbXSk6IHN0cmluZ1tdID0+IHJlbHMuZmlsdGVyKCh2YWwpID0+IFRvb2xzLmluQXJyYXkocnVsZXMsIHZhbCkgPT09IC0xKTtcblxuICBjb25zdCBuZXdSZWxzID0gaXNVbnNhZmUgPyBhZGRUYXJnZXRSdWxlcyhyZWxzKSA6IHJlbW92ZVRhcmdldFJ1bGVzKHJlbHMpO1xuICByZXR1cm4gbmV3UmVscy5sZW5ndGggPiAwID8gdG9TdHJpbmcobmV3UmVscykgOiAnJztcbn07XG5cbmNvbnN0IHRyaW1DYXJldENvbnRhaW5lcnMgPSAodGV4dDogc3RyaW5nKTogc3RyaW5nID0+XG4gIHRleHQucmVwbGFjZSgvXFx1RkVGRi9nLCAnJyk7XG5cbmNvbnN0IGdldEFuY2hvckVsZW1lbnQgPSAoZWRpdG9yOiBFZGl0b3IsIHNlbGVjdGVkRWxtPzogRWxlbWVudCk6IE9wdGlvbmFsPEhUTUxBbmNob3JFbGVtZW50PiA9PiB7XG4gIHNlbGVjdGVkRWxtID0gc2VsZWN0ZWRFbG0gfHwgZ2V0TGlua3NJblNlbGVjdGlvbihlZGl0b3Iuc2VsZWN0aW9uLmdldFJuZygpKVswXSB8fCBlZGl0b3Iuc2VsZWN0aW9uLmdldE5vZGUoKTtcblxuICBpZiAoaXNJbWFnZUZpZ3VyZShzZWxlY3RlZEVsbSkpIHtcbiAgICAvLyBmb3IgYW4gaW1hZ2UgY29udGFpbmVkIGluIGEgZmlndXJlIHdlIGxvb2sgZm9yIGEgbGluayBpbnNpZGUgdGhlIHNlbGVjdGVkIGVsZW1lbnRcbiAgICByZXR1cm4gT3B0aW9uYWwuZnJvbShlZGl0b3IuZG9tLnNlbGVjdDxIVE1MQW5jaG9yRWxlbWVudD4oJ2FbaHJlZl0nLCBzZWxlY3RlZEVsbSlbMF0pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBPcHRpb25hbC5mcm9tKGVkaXRvci5kb20uZ2V0UGFyZW50PEhUTUxBbmNob3JFbGVtZW50PihzZWxlY3RlZEVsbSwgJ2FbaHJlZl0nKSk7XG4gIH1cbn07XG5cbmNvbnN0IGlzSW5BbmNob3IgPSAoZWRpdG9yOiBFZGl0b3IsIHNlbGVjdGVkRWxtPzogRWxlbWVudCk6IGJvb2xlYW4gPT5cbiAgZ2V0QW5jaG9yRWxlbWVudChlZGl0b3IsIHNlbGVjdGVkRWxtKS5pc1NvbWUoKTtcblxuY29uc3QgZ2V0QW5jaG9yVGV4dCA9IChzZWxlY3Rpb246IEVkaXRvclNlbGVjdGlvbiwgYW5jaG9yRWxtOiBPcHRpb25hbDxIVE1MQW5jaG9yRWxlbWVudD4pOiBzdHJpbmcgPT4ge1xuICBjb25zdCB0ZXh0ID0gYW5jaG9yRWxtLmZvbGQoXG4gICAgKCkgPT4gc2VsZWN0aW9uLmdldENvbnRlbnQoeyBmb3JtYXQ6ICd0ZXh0JyB9KSxcbiAgICAoYW5jaG9yRWxtKSA9PiBhbmNob3JFbG0uaW5uZXJUZXh0IHx8IGFuY2hvckVsbS50ZXh0Q29udGVudCB8fCAnJ1xuICApO1xuICByZXR1cm4gdHJpbUNhcmV0Q29udGFpbmVycyh0ZXh0KTtcbn07XG5cbmNvbnN0IGdldExpbmtzSW5TZWxlY3Rpb24gPSAocm5nOiBSYW5nZSk6IEhUTUxBbmNob3JFbGVtZW50W10gPT5cbiAgY29sbGVjdE5vZGVzSW5SYW5nZShybmcsIGlzTGluayk7XG5cbmNvbnN0IGdldExpbmtzID0gKGVsZW1lbnRzOiBOb2RlW10pOiBIVE1MQW5jaG9yRWxlbWVudFtdID0+XG4gIFRvb2xzLmdyZXAoZWxlbWVudHMsIGlzTGluaykgYXMgSFRNTEFuY2hvckVsZW1lbnRbXTtcblxuY29uc3QgaGFzTGlua3MgPSAoZWxlbWVudHM6IE5vZGVbXSk6IGJvb2xlYW4gPT5cbiAgZ2V0TGlua3MoZWxlbWVudHMpLmxlbmd0aCA+IDA7XG5cbmNvbnN0IGhhc0xpbmtzSW5TZWxlY3Rpb24gPSAocm5nOiBSYW5nZSk6IGJvb2xlYW4gPT5cbiAgZ2V0TGlua3NJblNlbGVjdGlvbihybmcpLmxlbmd0aCA+IDA7XG5cbmNvbnN0IGlzT25seVRleHRTZWxlY3RlZCA9IChlZGl0b3I6IEVkaXRvcik6IGJvb2xlYW4gPT4ge1xuICAvLyBBbGxvdyBhbmNob3IgYW5kIGlubGluZSB0ZXh0IGVsZW1lbnRzIHRvIGJlIGluIHRoZSBzZWxlY3Rpb24gYnV0IG5vdGhpbmcgZWxzZVxuICBjb25zdCBpbmxpbmVUZXh0RWxlbWVudHMgPSBlZGl0b3Iuc2NoZW1hLmdldFRleHRJbmxpbmVFbGVtZW50cygpO1xuICBjb25zdCBpc0VsZW1lbnQgPSAoZWxtOiBOb2RlKTogZWxtIGlzIEVsZW1lbnQgPT5cbiAgICBlbG0ubm9kZVR5cGUgPT09IDEgJiYgIWlzQW5jaG9yKGVsbSkgJiYgIU9iai5oYXMoaW5saW5lVGV4dEVsZW1lbnRzLCBlbG0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSk7XG5cbiAgLy8gSWYgc2VsZWN0aW9uIGlzIGluc2lkZSBhIGJsb2NrIGFuY2hvciB0aGVuIGFsd2F5cyB0cmVhdCBpdCBhcyBub24gdGV4dCBvbmx5XG4gIGNvbnN0IGlzSW5CbG9ja0FuY2hvciA9IGdldEFuY2hvckVsZW1lbnQoZWRpdG9yKS5leGlzdHMoKGFuY2hvcikgPT4gYW5jaG9yLmhhc0F0dHJpYnV0ZSgnZGF0YS1tY2UtYmxvY2snKSk7XG4gIGlmIChpc0luQmxvY2tBbmNob3IpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBybmcgPSBlZGl0b3Iuc2VsZWN0aW9uLmdldFJuZygpO1xuICBpZiAoIXJuZy5jb2xsYXBzZWQpIHtcbiAgICAvLyBDb2xsZWN0IGFsbCBub24gaW5saW5lIHRleHQgZWxlbWVudHMgaW4gdGhlIHJhbmdlIGFuZCBtYWtlIHN1cmUgbm8gZWxlbWVudHMgd2VyZSBmb3VuZFxuICAgIGNvbnN0IGVsZW1lbnRzID0gY29sbGVjdE5vZGVzSW5SYW5nZShybmcsIGlzRWxlbWVudCk7XG4gICAgcmV0dXJuIGVsZW1lbnRzLmxlbmd0aCA9PT0gMDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuY29uc3QgaXNJbWFnZUZpZ3VyZSA9IChlbG06IEVsZW1lbnQgfCBudWxsKTogZWxtIGlzIEhUTUxFbGVtZW50ID0+XG4gIFR5cGUuaXNOb25OdWxsYWJsZShlbG0pICYmIGVsbS5ub2RlTmFtZSA9PT0gJ0ZJR1VSRScgJiYgL1xcYmltYWdlXFxiL2kudGVzdChlbG0uY2xhc3NOYW1lKTtcblxuY29uc3QgYmxvYlRvRGF0YVVyaSA9IChibG9iOiBCbG9iKTogUHJvbWlzZTxzdHJpbmc+ID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcbiAgICByZXNvbHZlKHJlYWRlci5yZXN1bHQgYXMgc3RyaW5nKTtcbiAgfTtcbiAgcmVhZGVyLm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgcmVqZWN0KG5ldyBFcnJvcihyZWFkZXIuZXJyb3I/Lm1lc3NhZ2UgPz8gJ0ZhaWxlZCB0byBjb252ZXJ0IGJsb2IgdG8gYSBkYXRhIHVybCcpKTtcbiAgfTtcbiAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XG59KTtcblxuZXhwb3J0IHtcbiAgaXNJbWFnZUZpZ3VyZSxcbiAgaXNMaW5rLFxuICBoYXNMaW5rcyxcbiAgZ2V0TGlua3MsXG4gIGhhc0xpbmtzSW5TZWxlY3Rpb24sXG4gIGdldExpbmtzSW5TZWxlY3Rpb24sXG4gIGdldEhyZWYsXG4gIGlzT25seVRleHRTZWxlY3RlZCxcbiAgZ2V0QW5jaG9yRWxlbWVudCxcbiAgaXNJbkFuY2hvcixcbiAgZ2V0QW5jaG9yVGV4dCxcbiAgYXBwbHlSZWxUYXJnZXRSdWxlcyxcbiAgaGFzUHJvdG9jb2wsXG4gIGJsb2JUb0RhdGFVcmlcbn07XG4iLCJpbXBvcnQgeyBGdW4sIE9wdGlvbmFsLCBPcHRpb25hbHMgfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5pbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuaW1wb3J0IHR5cGUgeyBOb2RlQ2hhbmdlRXZlbnQgfSBmcm9tICd0aW55bWNlL2NvcmUvYXBpL0V2ZW50VHlwZXMnO1xuaW1wb3J0IHR5cGUgeyBJbmxpbmVDb250ZW50LCBNZW51LCBUb29sYmFyIH0gZnJvbSAndGlueW1jZS9jb3JlL2FwaS91aS9VaSc7XG5cbmltcG9ydCAqIGFzIE9wdGlvbnMgZnJvbSAnLi4vYXBpL09wdGlvbnMnO1xuaW1wb3J0ICogYXMgQWN0aW9ucyBmcm9tICcuLi9jb3JlL0FjdGlvbnMnO1xuaW1wb3J0ICogYXMgT3BlbkxpbmsgZnJvbSAnLi4vY29yZS9PcGVuTGluayc7XG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuLi9jb3JlL1V0aWxzJztcblxuY29uc3Qgb3BlbkRpYWxvZyA9IChlZGl0b3I6IEVkaXRvcikgPT4gKCk6IHZvaWQgPT4ge1xuICBlZGl0b3IuZXhlY0NvbW1hbmQoJ21jZUxpbmsnLCBmYWxzZSwgeyBkaWFsb2c6IHRydWUgfSk7XG59O1xuXG5jb25zdCB0b2dnbGVTdGF0ZSA9IChlZGl0b3I6IEVkaXRvciwgdG9nZ2xlcjogKGU6IE5vZGVDaGFuZ2VFdmVudCkgPT4gdm9pZCk6ICgpID0+IHZvaWQgPT4ge1xuICBlZGl0b3Iub24oJ05vZGVDaGFuZ2UnLCB0b2dnbGVyKTtcbiAgcmV0dXJuICgpID0+IGVkaXRvci5vZmYoJ05vZGVDaGFuZ2UnLCB0b2dnbGVyKTtcbn07XG5cbmNvbnN0IHRvZ2dsZUxpbmtTdGF0ZSA9IChlZGl0b3I6IEVkaXRvcikgPT4gKGFwaTogVG9vbGJhci5Ub29sYmFyVG9nZ2xlQnV0dG9uSW5zdGFuY2VBcGkgfCBNZW51LlRvZ2dsZU1lbnVJdGVtSW5zdGFuY2VBcGkpOiAoKSA9PiB2b2lkID0+IHtcbiAgY29uc3QgdXBkYXRlU3RhdGUgPSAoKSA9PiB7XG4gICAgYXBpLnNldEFjdGl2ZSghZWRpdG9yLm1vZGUuaXNSZWFkT25seSgpICYmIFV0aWxzLmlzSW5BbmNob3IoZWRpdG9yLCBlZGl0b3Iuc2VsZWN0aW9uLmdldE5vZGUoKSkpO1xuICAgIGFwaS5zZXRFbmFibGVkKGVkaXRvci5zZWxlY3Rpb24uaXNFZGl0YWJsZSgpKTtcbiAgfTtcbiAgdXBkYXRlU3RhdGUoKTtcbiAgcmV0dXJuIHRvZ2dsZVN0YXRlKGVkaXRvciwgdXBkYXRlU3RhdGUpO1xufTtcblxuY29uc3QgdG9nZ2xlTGlua01lbnVTdGF0ZSA9IChlZGl0b3I6IEVkaXRvcikgPT4gKGFwaTogTWVudS5NZW51SXRlbUluc3RhbmNlQXBpKTogKCkgPT4gdm9pZCA9PiB7XG4gIGNvbnN0IHVwZGF0ZVN0YXRlID0gKCkgPT4ge1xuICAgIGFwaS5zZXRFbmFibGVkKGVkaXRvci5zZWxlY3Rpb24uaXNFZGl0YWJsZSgpKTtcbiAgfTtcbiAgdXBkYXRlU3RhdGUoKTtcbiAgcmV0dXJuIHRvZ2dsZVN0YXRlKGVkaXRvciwgdXBkYXRlU3RhdGUpO1xufTtcblxuY29uc3QgdG9nZ2xlUmVxdWlyZXNMaW5rU3RhdGUgPSAoZWRpdG9yOiBFZGl0b3IpID0+IChhcGk6IFRvb2xiYXIuVG9vbGJhckJ1dHRvbkluc3RhbmNlQXBpIHwgTWVudS5NZW51SXRlbUluc3RhbmNlQXBpKTogKCkgPT4gdm9pZCA9PiB7XG4gIGNvbnN0IGhhc0xpbmtzID0gKHBhcmVudHM6IE5vZGVbXSkgPT4gVXRpbHMuaGFzTGlua3MocGFyZW50cykgfHwgVXRpbHMuaGFzTGlua3NJblNlbGVjdGlvbihlZGl0b3Iuc2VsZWN0aW9uLmdldFJuZygpKTtcbiAgY29uc3QgcGFyZW50cyA9IGVkaXRvci5kb20uZ2V0UGFyZW50cyhlZGl0b3Iuc2VsZWN0aW9uLmdldFN0YXJ0KCkpO1xuICBjb25zdCB1cGRhdGVFbmFibGVkID0gKHBhcmVudHM6IE5vZGVbXSkgPT4ge1xuICAgIGFwaS5zZXRFbmFibGVkKGhhc0xpbmtzKHBhcmVudHMpICYmIGVkaXRvci5zZWxlY3Rpb24uaXNFZGl0YWJsZSgpKTtcbiAgfTtcbiAgdXBkYXRlRW5hYmxlZChwYXJlbnRzKTtcbiAgcmV0dXJuIHRvZ2dsZVN0YXRlKGVkaXRvciwgKGUpID0+IHVwZGF0ZUVuYWJsZWQoZS5wYXJlbnRzKSk7XG59O1xuXG5jb25zdCBzZXR1cEJ1dHRvbnMgPSAoZWRpdG9yOiBFZGl0b3IsIG9wZW5MaW5rOiBPcGVuTGluay5MaW5rU2VsZWN0aW9uKTogdm9pZCA9PiB7XG4gIGVkaXRvci51aS5yZWdpc3RyeS5hZGRUb2dnbGVCdXR0b24oJ2xpbmsnLCB7XG4gICAgaWNvbjogJ2xpbmsnLFxuICAgIHRvb2x0aXA6ICdJbnNlcnQvZWRpdCBsaW5rJyxcbiAgICBzaG9ydGN1dDogJ01ldGErSycsXG4gICAgb25BY3Rpb246IG9wZW5EaWFsb2coZWRpdG9yKSxcbiAgICBvblNldHVwOiB0b2dnbGVMaW5rU3RhdGUoZWRpdG9yKVxuICB9KTtcblxuICBlZGl0b3IudWkucmVnaXN0cnkuYWRkQnV0dG9uKCdvcGVubGluaycsIHtcbiAgICBpY29uOiAnbmV3LXRhYicsXG4gICAgdG9vbHRpcDogJ09wZW4gbGluaycsXG4gICAgb25BY3Rpb246IG9wZW5MaW5rLmdvdG9TZWxlY3RlZExpbmssXG4gICAgb25TZXR1cDogdG9nZ2xlUmVxdWlyZXNMaW5rU3RhdGUoZWRpdG9yKVxuICB9KTtcblxuICBlZGl0b3IudWkucmVnaXN0cnkuYWRkQnV0dG9uKCd1bmxpbmsnLCB7XG4gICAgaWNvbjogJ3VubGluaycsXG4gICAgdG9vbHRpcDogJ1JlbW92ZSBsaW5rJyxcbiAgICBvbkFjdGlvbjogKCkgPT4gQWN0aW9ucy51bmxpbmsoZWRpdG9yKSxcbiAgICBvblNldHVwOiB0b2dnbGVSZXF1aXJlc0xpbmtTdGF0ZShlZGl0b3IpXG4gIH0pO1xufTtcblxuY29uc3Qgc2V0dXBNZW51SXRlbXMgPSAoZWRpdG9yOiBFZGl0b3IsIG9wZW5MaW5rOiBPcGVuTGluay5MaW5rU2VsZWN0aW9uKTogdm9pZCA9PiB7XG4gIGVkaXRvci51aS5yZWdpc3RyeS5hZGRNZW51SXRlbSgnb3BlbmxpbmsnLCB7XG4gICAgdGV4dDogJ09wZW4gbGluaycsXG4gICAgaWNvbjogJ25ldy10YWInLFxuICAgIG9uQWN0aW9uOiBvcGVuTGluay5nb3RvU2VsZWN0ZWRMaW5rLFxuICAgIG9uU2V0dXA6IHRvZ2dsZVJlcXVpcmVzTGlua1N0YXRlKGVkaXRvcilcbiAgfSk7XG5cbiAgZWRpdG9yLnVpLnJlZ2lzdHJ5LmFkZE1lbnVJdGVtKCdsaW5rJywge1xuICAgIGljb246ICdsaW5rJyxcbiAgICB0ZXh0OiAnTGluay4uLicsXG4gICAgc2hvcnRjdXQ6ICdNZXRhK0snLFxuICAgIG9uQWN0aW9uOiBvcGVuRGlhbG9nKGVkaXRvciksXG4gICAgb25TZXR1cDogdG9nZ2xlTGlua01lbnVTdGF0ZShlZGl0b3IpXG4gIH0pO1xuXG4gIGVkaXRvci51aS5yZWdpc3RyeS5hZGRNZW51SXRlbSgndW5saW5rJywge1xuICAgIGljb246ICd1bmxpbmsnLFxuICAgIHRleHQ6ICdSZW1vdmUgbGluaycsXG4gICAgb25BY3Rpb246ICgpID0+IEFjdGlvbnMudW5saW5rKGVkaXRvciksXG4gICAgb25TZXR1cDogdG9nZ2xlUmVxdWlyZXNMaW5rU3RhdGUoZWRpdG9yKVxuICB9KTtcbn07XG5cbmNvbnN0IHNldHVwQ29udGV4dE1lbnUgPSAoZWRpdG9yOiBFZGl0b3IpOiB2b2lkID0+IHtcbiAgY29uc3QgaW5MaW5rID0gJ2xpbmsgdW5saW5rIG9wZW5saW5rJztcbiAgY29uc3Qgbm9MaW5rID0gJ2xpbmsnO1xuICBlZGl0b3IudWkucmVnaXN0cnkuYWRkQ29udGV4dE1lbnUoJ2xpbmsnLCB7XG4gICAgdXBkYXRlOiAoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgaXNFZGl0YWJsZSA9IGVkaXRvci5kb20uaXNFZGl0YWJsZShlbGVtZW50KTtcbiAgICAgIGlmICghaXNFZGl0YWJsZSkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBVdGlscy5oYXNMaW5rcyhlZGl0b3IuZG9tLmdldFBhcmVudHMoZWxlbWVudCwgJ2EnKSBhcyBIVE1MQW5jaG9yRWxlbWVudFtdKSA/IGluTGluayA6IG5vTGluaztcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3Qgc2V0dXBDb250ZXh0VG9vbGJhcnMgPSAoZWRpdG9yOiBFZGl0b3IsIG9wZW5MaW5rOiBPcGVuTGluay5MaW5rU2VsZWN0aW9uKTogdm9pZCA9PiB7XG4gIGNvbnN0IGNvbGxhcHNlU2VsZWN0aW9uVG9FbmQgPSAoZWRpdG9yOiBFZGl0b3IpID0+IHtcbiAgICBlZGl0b3Iuc2VsZWN0aW9uLmNvbGxhcHNlKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBvblNldHVwTGluayA9IChidXR0b25BcGk6IElubGluZUNvbnRlbnQuQ29udGV4dEZvcm1CdXR0b25JbnN0YW5jZUFwaSkgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBlZGl0b3Iuc2VsZWN0aW9uLmdldE5vZGUoKTtcbiAgICBidXR0b25BcGkuc2V0RW5hYmxlZChVdGlscy5pc0luQW5jaG9yKGVkaXRvciwgbm9kZSkgJiYgZWRpdG9yLnNlbGVjdGlvbi5pc0VkaXRhYmxlKCkpO1xuICAgIHJldHVybiBGdW4ubm9vcDtcbiAgfTtcblxuICAvKipcbiAgICogaWYgd2UncmUgZWRpdGluZyBhIGxpbmssIGRvbid0IGNoYW5nZSB0aGUgdGV4dC5cbiAgICogaWYgYW55dGhpbmcgb3RoZXIgdGhhbiB0ZXh0IGlzIHNlbGVjdGVkLCBkb24ndCBjaGFuZ2UgdGhlIHRleHQuXG4gICAqIFRJTlktOTU5MzogSWYgdGhlcmUgaXMgYSB0ZXh0IHNlbGVjdGlvbiByZXR1cm4gYE9wdGlvbmFsLm5vbmVgXG4gICAqIGJlY2F1c2UgYG1jZUluc2VydExpbmtgIGNvbW1hbmQgd2lsbCBoYW5kbGUgdGhlIHNlbGVjdGlvbi5cbiAgICovXG4gIGNvbnN0IGdldExpbmtUZXh0ID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBhbmNob3IgPSBVdGlscy5nZXRBbmNob3JFbGVtZW50KGVkaXRvcik7XG4gICAgY29uc3Qgb25seVRleHQgPSBVdGlscy5pc09ubHlUZXh0U2VsZWN0ZWQoZWRpdG9yKTtcbiAgICBpZiAoYW5jaG9yLmlzTm9uZSgpICYmIG9ubHlUZXh0KSB7XG4gICAgICBjb25zdCB0ZXh0ID0gVXRpbHMuZ2V0QW5jaG9yVGV4dChlZGl0b3Iuc2VsZWN0aW9uLCBhbmNob3IpO1xuICAgICAgcmV0dXJuIE9wdGlvbmFscy5zb21lSWYodGV4dC5sZW5ndGggPT09IDAsIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIE9wdGlvbmFsLm5vbmUoKTtcbiAgICB9XG4gIH07XG5cbiAgZWRpdG9yLnVpLnJlZ2lzdHJ5LmFkZENvbnRleHRGb3JtKCdxdWlja2xpbmsnLCB7XG4gICAgbGF1bmNoOiB7XG4gICAgICB0eXBlOiAnY29udGV4dGZvcm10b2dnbGVidXR0b24nLFxuICAgICAgaWNvbjogJ2xpbmsnLFxuICAgICAgdG9vbHRpcDogJ0xpbmsnLFxuICAgICAgb25TZXR1cDogdG9nZ2xlTGlua1N0YXRlKGVkaXRvcilcbiAgICB9LFxuICAgIGxhYmVsOiAnTGluaycsXG4gICAgcHJlZGljYXRlOiAobm9kZSkgPT4gT3B0aW9ucy5oYXNDb250ZXh0VG9vbGJhcihlZGl0b3IpICYmIFV0aWxzLmlzSW5BbmNob3IoZWRpdG9yLCBub2RlKSxcbiAgICBpbml0VmFsdWU6ICgpID0+IHtcbiAgICAgIGNvbnN0IGVsbSA9IFV0aWxzLmdldEFuY2hvckVsZW1lbnQoZWRpdG9yKTtcbiAgICAgIHJldHVybiBlbG0uZm9sZChGdW4uY29uc3RhbnQoJycpLCBVdGlscy5nZXRIcmVmKTtcbiAgICB9LFxuICAgIGNvbW1hbmRzOiBbXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdjb250ZXh0Zm9ybXRvZ2dsZWJ1dHRvbicsXG4gICAgICAgIGljb246ICdsaW5rJyxcbiAgICAgICAgdG9vbHRpcDogJ0xpbmsnLFxuICAgICAgICBwcmltYXJ5OiB0cnVlLFxuICAgICAgICBvblNldHVwOiAoYnV0dG9uQXBpKSA9PiB7XG4gICAgICAgICAgY29uc3Qgbm9kZSA9IGVkaXRvci5zZWxlY3Rpb24uZ2V0Tm9kZSgpO1xuICAgICAgICAgIC8vIFRPRE86IE1ha2UgYSB0ZXN0IGZvciB0aGlzIGxhdGVyLlxuICAgICAgICAgIGJ1dHRvbkFwaS5zZXRBY3RpdmUoVXRpbHMuaXNJbkFuY2hvcihlZGl0b3IsIG5vZGUpKTtcbiAgICAgICAgICByZXR1cm4gdG9nZ2xlTGlua1N0YXRlKGVkaXRvcikoYnV0dG9uQXBpKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25BY3Rpb246IChmb3JtQXBpKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBmb3JtQXBpLmdldFZhbHVlKCk7XG4gICAgICAgICAgY29uc3QgdGV4dCA9IGdldExpbmtUZXh0KHZhbHVlKTtcbiAgICAgICAgICBjb25zdCBhdHRhY2hTdGF0ZSA9IHsgaHJlZjogdmFsdWUsIGF0dGFjaDogRnVuLm5vb3AgfTtcbiAgICAgICAgICBBY3Rpb25zLmxpbmsoZWRpdG9yLCBhdHRhY2hTdGF0ZSwge1xuICAgICAgICAgICAgaHJlZjogdmFsdWUsXG4gICAgICAgICAgICB0ZXh0LFxuICAgICAgICAgICAgdGl0bGU6IE9wdGlvbmFsLm5vbmUoKSxcbiAgICAgICAgICAgIHJlbDogT3B0aW9uYWwubm9uZSgpLFxuICAgICAgICAgICAgdGFyZ2V0OiBPcHRpb25hbC5mcm9tKE9wdGlvbnMuZ2V0RGVmYXVsdExpbmtUYXJnZXQoZWRpdG9yKSksXG4gICAgICAgICAgICBjbGFzczogT3B0aW9uYWwubm9uZSgpXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29sbGFwc2VTZWxlY3Rpb25Ub0VuZChlZGl0b3IpO1xuICAgICAgICAgIGZvcm1BcGkuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiAnY29udGV4dGZvcm1idXR0b24nLFxuICAgICAgICBpY29uOiAndW5saW5rJyxcbiAgICAgICAgdG9vbHRpcDogJ1JlbW92ZSBsaW5rJyxcbiAgICAgICAgb25TZXR1cDogb25TZXR1cExpbmssXG4gICAgICAgIC8vIFRPRE86IFRoZSBvcmlnaW5hbCBpbmxpdGUgYWN0aW9uIHdhcyBxdWl0ZSBjb21wbGV4LiBBcmUgd2UgbWlzc2luZyBzb21ldGhpbmcgd2l0aCB0aGlzP1xuICAgICAgICBvbkFjdGlvbjogKGZvcm1BcGkpID0+IHtcbiAgICAgICAgICBBY3Rpb25zLnVubGluayhlZGl0b3IpO1xuICAgICAgICAgIGZvcm1BcGkuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiAnY29udGV4dGZvcm1idXR0b24nLFxuICAgICAgICBpY29uOiAnbmV3LXRhYicsXG4gICAgICAgIHRvb2x0aXA6ICdPcGVuIGxpbmsnLFxuICAgICAgICBvblNldHVwOiBvblNldHVwTGluayxcbiAgICAgICAgb25BY3Rpb246IChmb3JtQXBpKSA9PiB7XG4gICAgICAgICAgb3BlbkxpbmsuZ290b1NlbGVjdGVkTGluaygpO1xuICAgICAgICAgIGZvcm1BcGkuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuICB9KTtcbn07XG5cbmNvbnN0IHNldHVwID0gKGVkaXRvcjogRWRpdG9yKTogdm9pZCA9PiB7XG4gIGNvbnN0IG9wZW5MaW5rID0gT3Blbkxpbmsuc2V0dXAoZWRpdG9yKTtcblxuICBzZXR1cEJ1dHRvbnMoZWRpdG9yLCBvcGVuTGluayk7XG4gIHNldHVwTWVudUl0ZW1zKGVkaXRvciwgb3BlbkxpbmspO1xuICBzZXR1cENvbnRleHRNZW51KGVkaXRvcik7XG4gIHNldHVwQ29udGV4dFRvb2xiYXJzKGVkaXRvciwgb3BlbkxpbmspO1xufTtcblxuZXhwb3J0IHtcbiAgc2V0dXBcbn07XG4iLCJpbXBvcnQgeyBBcnIsIEZ1biwgT3B0aW9uYWwsIE9wdGlvbmFscyB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmltcG9ydCB0eXBlIEVkaXRvciBmcm9tICd0aW55bWNlL2NvcmUvYXBpL0VkaXRvcic7XG5pbXBvcnQgdHlwZSB7IEJsb2JJbmZvIH0gZnJvbSAndGlueW1jZS9jb3JlL2FwaS9maWxlL0Jsb2JDYWNoZSc7XG5pbXBvcnQgdHlwZSB7IERvY3VtZW50c0ZpbGVUeXBlcyB9IGZyb20gJ3RpbnltY2UvY29yZS9hcGkvT3B0aW9uVHlwZXMnO1xuaW1wb3J0IHR5cGUgeyBEaWFsb2cgfSBmcm9tICd0aW55bWNlL2NvcmUvYXBpL3VpL1VpJztcbmltcG9ydCB0eXBlIHsgVXBsb2FkRmlsZURhdGEsIFVwbG9hZEhhbmRsZXIgfSBmcm9tICd0aW55bWNlL2NvcmUvZmlsZS9VcGxvYWRlcic7XG5cbmltcG9ydCAqIGFzIE9wdGlvbnMgZnJvbSAnLi4vYXBpL09wdGlvbnMnO1xuaW1wb3J0ICogYXMgQWN0aW9ucyBmcm9tICcuLi9jb3JlL0FjdGlvbnMnO1xuaW1wb3J0IHsgTGlzdE9wdGlvbnMgfSBmcm9tICcuLi9jb3JlL0xpc3RPcHRpb25zJztcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gJy4uL2NvcmUvVXRpbHMnO1xuXG5pbXBvcnQgeyBEaWFsb2dDaGFuZ2VzIH0gZnJvbSAnLi9EaWFsb2dDaGFuZ2VzJztcbmltcG9ydCB7IERpYWxvZ0NvbmZpcm1zIH0gZnJvbSAnLi9EaWFsb2dDb25maXJtcyc7XG5pbXBvcnQgeyBEaWFsb2dJbmZvIH0gZnJvbSAnLi9EaWFsb2dJbmZvJztcbmltcG9ydCB0eXBlIHsgQVBJLCBMaW5rRGlhbG9nQ2F0YWxvZywgTGlua0RpYWxvZ0RhdGEsIExpbmtEaWFsb2dJbmZvLCBMaW5rRGlhbG9nS2V5IH0gZnJvbSAnLi9EaWFsb2dUeXBlcyc7XG5pbXBvcnQgeyBVcGxvYWRUYWIgfSBmcm9tICcuL1VwbG9hZFRhYic7XG5cbmludGVyZmFjZSBIZWxwZXJzIHtcbiAgcmVhZG9ubHkgYWRkVG9CbG9iQ2FjaGU6IChibG9iSW5mbzogQmxvYkluZm8pID0+IHZvaWQ7XG4gIHJlYWRvbmx5IGNyZWF0ZUJsb2JDYWNoZTogKGZpbGU6IEZpbGUsIGJsb2JVcmk6IHN0cmluZywgZGF0YVVybDogc3RyaW5nKSA9PiBCbG9iSW5mbztcbiAgcmVhZG9ubHkgYWxlcnRFcnI6IChtZXNzYWdlOiBzdHJpbmcsIGNhbGxiYWNrOiAoKSA9PiB2b2lkKSA9PiB2b2lkO1xuICByZWFkb25seSB1cGxvYWRGaWxlOiBVcGxvYWRIYW5kbGVyPFVwbG9hZEZpbGVEYXRhPjtcbiAgcmVhZG9ubHkgZ2V0RXhpc3RpbmdCbG9iSW5mbzogKGJhc2U2NDogc3RyaW5nLCB0eXBlOiBzdHJpbmcpID0+IEJsb2JJbmZvIHwgdW5kZWZpbmVkO1xufVxuXG5jb25zdCBoYW5kbGVTdWJtaXQgPSAoZWRpdG9yOiBFZGl0b3IsIGluZm86IExpbmtEaWFsb2dJbmZvKSA9PiAoYXBpOiBEaWFsb2cuRGlhbG9nSW5zdGFuY2VBcGk8TGlua0RpYWxvZ0RhdGE+KTogdm9pZCA9PiB7XG4gIGNvbnN0IGRhdGE6IExpbmtEaWFsb2dEYXRhID0gYXBpLmdldERhdGEoKTtcblxuICBpZiAoIWRhdGEudXJsLnZhbHVlKSB7XG4gICAgQWN0aW9ucy51bmxpbmsoZWRpdG9yKTtcbiAgICAvLyBUZW1wb3JhcnkgZml4LiBUT0RPOiBUSU5ZLTI4MTFcbiAgICBhcGkuY2xvc2UoKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBDaGVjayBpZiBhIGtleSBpcyBkZWZpbmVkLCBtZWFuaW5nIGl0IHdhcyBhIGZpZWxkIGluIHRoZSBkaWFsb2cuIElmIGl0IGlzLFxuICAvLyB0aGVuIGNoZWNrIGlmIGl0J3MgY2hhbmdlZCBhbmQgcmV0dXJuIG5vbmUgaWYgbm90aGluZyBoYXMgY2hhbmdlZC5cbiAgY29uc3QgZ2V0Q2hhbmdlZFZhbHVlID0gKGtleTogTGlua0RpYWxvZ0tleSkgPT4gT3B0aW9uYWwuZnJvbShkYXRhW2tleV0pLmZpbHRlcigodmFsdWUpID0+ICFPcHRpb25hbHMuaXMoaW5mby5hbmNob3Jba2V5XSwgdmFsdWUpKTtcblxuICBjb25zdCBjaGFuZ2VkRGF0YSA9IHtcbiAgICBocmVmOiBkYXRhLnVybC52YWx1ZSxcbiAgICB0ZXh0OiBnZXRDaGFuZ2VkVmFsdWUoJ3RleHQnKSxcbiAgICB0YXJnZXQ6IGdldENoYW5nZWRWYWx1ZSgndGFyZ2V0JyksXG4gICAgcmVsOiBnZXRDaGFuZ2VkVmFsdWUoJ3JlbCcpLFxuICAgIGNsYXNzOiBnZXRDaGFuZ2VkVmFsdWUoJ2xpbmtDbGFzcycpLFxuICAgIHRpdGxlOiBnZXRDaGFuZ2VkVmFsdWUoJ3RpdGxlJylcbiAgfTtcblxuICBjb25zdCBhdHRhY2hTdGF0ZSA9IHtcbiAgICBocmVmOiBkYXRhLnVybC52YWx1ZSxcbiAgICBhdHRhY2g6IGRhdGEudXJsLm1ldGEgIT09IHVuZGVmaW5lZCAmJiBkYXRhLnVybC5tZXRhLmF0dGFjaCA/IGRhdGEudXJsLm1ldGEuYXR0YWNoIDogRnVuLm5vb3BcbiAgfTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzXG4gIERpYWxvZ0NvbmZpcm1zLnByZXByb2Nlc3MoZWRpdG9yLCBjaGFuZ2VkRGF0YSkudGhlbigocERhdGEpID0+IHtcbiAgICBBY3Rpb25zLmxpbmsoZWRpdG9yLCBhdHRhY2hTdGF0ZSwgcERhdGEpO1xuICB9KTtcblxuICBhcGkuY2xvc2UoKTtcbn07XG5cbmNvbnN0IHVwbG9hZEZpbGUgPSAoZWRpdG9yOiBFZGl0b3IpOiBVcGxvYWRIYW5kbGVyPFVwbG9hZEZpbGVEYXRhPiA9PiAoYmxvYkluZm86IEJsb2JJbmZvLCBwcm9ncmVzczogKHBlcmNlbnQ6IG51bWJlcikgPT4gdm9pZCk6IFByb21pc2U8VXBsb2FkRmlsZURhdGE+ID0+IHtcbiAgY29uc3QgZmlsZVVwbG9hZEhhbmRsZXIgPSBPcHRpb25zLmdldEZpbGVzVXBsb2FkSGFuZGxlcihlZGl0b3IpO1xuICByZXR1cm4gZmlsZVVwbG9hZEhhbmRsZXIoYmxvYkluZm8sIHByb2dyZXNzKTtcbn07XG5cbmNvbnN0IGRhdGFVcmxUb0Jhc2U2NCA9IChkYXRhVXJsOiBzdHJpbmcpID0+IE9wdGlvbmFsLmZyb20oZGF0YVVybC5zcGxpdCgnLCcpWzFdKS5nZXRPcignJyk7XG5cbmNvbnN0IGNoYW5nZUZpbGVJbnB1dCA9IChoZWxwZXJzOiBIZWxwZXJzLCBhcGk6IEFQSSk6IHZvaWQgPT4ge1xuICBjb25zdCBkYXRhID0gYXBpLmdldERhdGEoKTtcbiAgYXBpLmJsb2NrKCdVcGxvYWRpbmcgZmlsZScpO1xuICBBcnIuaGVhZChkYXRhLmZpbGVpbnB1dClcbiAgICAuZm9sZCgoKSA9PiB7XG4gICAgICBhcGkudW5ibG9jaygpO1xuICAgIH0sIChmaWxlKSA9PiB7XG4gICAgICBjb25zdCBibG9iVXJpOiBzdHJpbmcgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xuXG4gICAgICBjb25zdCB1cGRhdGVVcmxBbmRTd2l0Y2hUYWIgPSAoeyB1cmwsIGZpbGVOYW1lIH06IFVwbG9hZEZpbGVEYXRhKSA9PiB7XG4gICAgICAgIGFwaS5zZXREYXRhKHsgdGV4dDogZmlsZU5hbWUsIHRpdGxlOiBmaWxlTmFtZSwgdXJsOiB7IHZhbHVlOiB1cmwsIG1ldGE6IHt9fX0pO1xuICAgICAgICBhcGkuc2hvd1RhYignZ2VuZXJhbCcpO1xuICAgICAgICBhcGkuZm9jdXMoJ3VybCcpO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgZmluYWxpemUgPSAoKSA9PiB7XG4gICAgICAgIGFwaS51bmJsb2NrKCk7XG4gICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwoYmxvYlVyaSk7XG4gICAgICB9O1xuXG4gICAgICBVdGlscy5ibG9iVG9EYXRhVXJpKGZpbGUpLnRoZW4oKGRhdGFVcmwpID0+IHtcbiAgICAgICAgY29uc3QgZXhpc3RpbmdCbG9iSW5mbyA9IGhlbHBlcnMuZ2V0RXhpc3RpbmdCbG9iSW5mbyhkYXRhVXJsVG9CYXNlNjQoZGF0YVVybCksIGZpbGUudHlwZSk7XG4gICAgICAgIGNvbnN0IGJsb2JJbmZvID0gZXhpc3RpbmdCbG9iSW5mbyAmJiBleGlzdGluZ0Jsb2JJbmZvLmZpbGVuYW1lKCkgPT09IGZpbGUubmFtZSA/IGV4aXN0aW5nQmxvYkluZm8gOiBoZWxwZXJzLmNyZWF0ZUJsb2JDYWNoZShmaWxlLCBibG9iVXJpLCBkYXRhVXJsKTtcbiAgICAgICAgaGVscGVycy5hZGRUb0Jsb2JDYWNoZShibG9iSW5mbyk7XG4gICAgICAgIHJldHVybiBoZWxwZXJzLnVwbG9hZEZpbGUoYmxvYkluZm8sIEZ1bi5pZGVudGl0eSk7XG4gICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgdXBkYXRlVXJsQW5kU3dpdGNoVGFiKHJlc3VsdCk7XG4gICAgICAgIGZpbmFsaXplKCk7XG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGZpbmFsaXplKCk7XG4gICAgICAgIGhlbHBlcnMuYWxlcnRFcnIoZXJyLCAoKSA9PiB7XG4gICAgICAgICAgYXBpLmZvY3VzKCdmaWxlaW5wdXQnKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IGNyZWF0ZUJsb2JDYWNoZSA9IChlZGl0b3I6IEVkaXRvcikgPT4gKGZpbGU6IEZpbGUsIGJsb2JVcmk6IHN0cmluZywgZGF0YVVybDogc3RyaW5nKTogQmxvYkluZm8gPT5cbiAgZWRpdG9yLmVkaXRvclVwbG9hZC5ibG9iQ2FjaGUuY3JlYXRlKHtcbiAgICBibG9iOiBmaWxlLFxuICAgIGJsb2JVcmksXG4gICAgbmFtZTogZmlsZS5uYW1lPy5yZXBsYWNlKC9cXC5bXlxcLl0rJC8sICcnKSxcbiAgICBmaWxlbmFtZTogZmlsZS5uYW1lLFxuICAgIGJhc2U2NDogZGF0YVVybC5zcGxpdCgnLCcpWzFdXG4gIH0pO1xuXG5jb25zdCBhZGRUb0Jsb2JDYWNoZSA9IChlZGl0b3I6IEVkaXRvcikgPT4gKGJsb2JJbmZvOiBCbG9iSW5mbyk6IHZvaWQgPT4ge1xuICBlZGl0b3IuZWRpdG9yVXBsb2FkLmJsb2JDYWNoZS5hZGQoYmxvYkluZm8pO1xufTtcblxuY29uc3QgZ2V0RXhpc3RpbmdCbG9iSW5mbyA9IChlZGl0b3I6IEVkaXRvcikgPT4gKGJhc2U2NDogc3RyaW5nLCB0eXBlOiBzdHJpbmcpOiBCbG9iSW5mbyB8IHVuZGVmaW5lZCA9PiB7XG4gIHJldHVybiBlZGl0b3IuZWRpdG9yVXBsb2FkLmJsb2JDYWNoZS5nZXRCeURhdGEoYmFzZTY0LCB0eXBlKTtcbn07XG5cbmNvbnN0IGFsZXJ0RXJyID0gKGVkaXRvcjogRWRpdG9yKSA9PiAobWVzc2FnZTogc3RyaW5nLCBjYWxsYmFjazogKCkgPT4gdm9pZCk6IHZvaWQgPT4ge1xuICBlZGl0b3Iud2luZG93TWFuYWdlci5hbGVydChtZXNzYWdlLCBjYWxsYmFjayk7XG59O1xuXG5jb25zdCBjb2xsZWN0RGF0YSA9IChlZGl0b3I6IEVkaXRvcik6IFByb21pc2U8TGlua0RpYWxvZ0luZm8+ID0+IHtcbiAgY29uc3QgYW5jaG9yTm9kZSA9IFV0aWxzLmdldEFuY2hvckVsZW1lbnQoZWRpdG9yKTtcbiAgcmV0dXJuIERpYWxvZ0luZm8uY29sbGVjdChlZGl0b3IsIGFuY2hvck5vZGUpO1xufTtcblxuY29uc3QgZ2V0SW5pdGlhbERhdGEgPSAoaW5mbzogTGlua0RpYWxvZ0luZm8sIGRlZmF1bHRUYXJnZXQ6IE9wdGlvbmFsPHN0cmluZz4pOiBMaW5rRGlhbG9nRGF0YSA9PiB7XG4gIGNvbnN0IGFuY2hvciA9IGluZm8uYW5jaG9yO1xuICBjb25zdCB1cmwgPSBhbmNob3IudXJsLmdldE9yKCcnKTtcblxuICByZXR1cm4ge1xuICAgIHVybDoge1xuICAgICAgdmFsdWU6IHVybCxcbiAgICAgIG1ldGE6IHtcbiAgICAgICAgb3JpZ2luYWw6IHtcbiAgICAgICAgICB2YWx1ZTogdXJsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHRleHQ6IGFuY2hvci50ZXh0LmdldE9yKCcnKSxcbiAgICB0aXRsZTogYW5jaG9yLnRpdGxlLmdldE9yKCcnKSxcbiAgICBhbmNob3I6IHVybCxcbiAgICBsaW5rOiB1cmwsXG4gICAgcmVsOiBhbmNob3IucmVsLmdldE9yKCcnKSxcbiAgICB0YXJnZXQ6IGFuY2hvci50YXJnZXQub3IoZGVmYXVsdFRhcmdldCkuZ2V0T3IoJycpLFxuICAgIGxpbmtDbGFzczogYW5jaG9yLmxpbmtDbGFzcy5nZXRPcignJyksXG4gICAgZmlsZWlucHV0OiBbXVxuICB9O1xufTtcblxuY29uc3QgbWFrZURpYWxvZ0JvZHkgPSAoXG4gIHVybElucHV0OiBEaWFsb2cuVXJsSW5wdXRTcGVjW10sXG4gIGRpc3BsYXlUZXh0OiBEaWFsb2cuSW5wdXRTcGVjW10sXG4gIHRpdGxlVGV4dDogRGlhbG9nLklucHV0U3BlY1tdLFxuICBjYXRhbG9nczogTGlua0RpYWxvZ0NhdGFsb2csXG4gIGhhc1VwbG9hZFBhbmVsOiBib29sZWFuLFxuICBmaWxlVHlwZXM6IERvY3VtZW50c0ZpbGVUeXBlc1tdXG4pOiBEaWFsb2cuUGFuZWxTcGVjIHwgRGlhbG9nLlRhYlBhbmVsU3BlYyA9PiB7XG5cbiAgY29uc3QgZ2VuZXJhbFBhbmVsSXRlbXMgPSBBcnIuZmxhdHRlbjxEaWFsb2cuQm9keUNvbXBvbmVudFNwZWM+KFtcbiAgICB1cmxJbnB1dCxcbiAgICBkaXNwbGF5VGV4dCxcbiAgICB0aXRsZVRleHQsXG4gICAgT3B0aW9uYWxzLmNhdChbXG4gICAgICBjYXRhbG9ncy5hbmNob3IubWFwKExpc3RPcHRpb25zLmNyZWF0ZVVpKCdhbmNob3InLCAnQW5jaG9ycycpKSxcbiAgICAgIGNhdGFsb2dzLnJlbHMubWFwKExpc3RPcHRpb25zLmNyZWF0ZVVpKCdyZWwnLCAnUmVsJykpLFxuICAgICAgY2F0YWxvZ3MudGFyZ2V0cy5tYXAoTGlzdE9wdGlvbnMuY3JlYXRlVWkoJ3RhcmdldCcsICdPcGVuIGxpbmsgaW4uLi4nKSksXG4gICAgICBjYXRhbG9ncy5saW5rLm1hcChMaXN0T3B0aW9ucy5jcmVhdGVVaSgnbGluaycsICdMaW5rIGxpc3QnKSksXG4gICAgICBjYXRhbG9ncy5jbGFzc2VzLm1hcChMaXN0T3B0aW9ucy5jcmVhdGVVaSgnbGlua0NsYXNzJywgJ0NsYXNzJykpXG4gICAgXSlcbiAgXSk7XG5cbiAgaWYgKGhhc1VwbG9hZFBhbmVsKSB7XG4gICAgY29uc3QgdGFiUGFuZWw6IERpYWxvZy5UYWJQYW5lbFNwZWMgPSB7XG4gICAgICB0eXBlOiAndGFicGFuZWwnLFxuICAgICAgdGFiczogQXJyLmZsYXR0ZW4oW1xuICAgICAgICBbe1xuICAgICAgICAgIHRpdGxlOiAnR2VuZXJhbCcsXG4gICAgICAgICAgbmFtZTogJ2dlbmVyYWwnLFxuICAgICAgICAgIGl0ZW1zOiBnZW5lcmFsUGFuZWxJdGVtc1xuICAgICAgICB9XSxcbiAgICAgICAgWyBVcGxvYWRUYWIubWFrZVRhYihmaWxlVHlwZXMpIF1cbiAgICAgIF0pXG4gICAgfTtcbiAgICByZXR1cm4gdGFiUGFuZWw7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdwYW5lbCcsXG4gICAgICBpdGVtczogZ2VuZXJhbFBhbmVsSXRlbXNcbiAgICB9O1xuICB9XG59O1xuXG5jb25zdCBtYWtlRGlhbG9nID0gKHNldHRpbmdzOiBMaW5rRGlhbG9nSW5mbywgb25TdWJtaXQ6IChhcGk6IERpYWxvZy5EaWFsb2dJbnN0YW5jZUFwaTxMaW5rRGlhbG9nRGF0YT4pID0+IHZvaWQsIGVkaXRvcjogRWRpdG9yKTogRGlhbG9nLkRpYWxvZ1NwZWM8TGlua0RpYWxvZ0RhdGE+ID0+IHtcblxuICBjb25zdCB1cmxJbnB1dDogRGlhbG9nLlVybElucHV0U3BlY1tdID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICd1cmwnLFxuICAgICAgdHlwZTogJ3VybGlucHV0JyxcbiAgICAgIGZpbGV0eXBlOiAnZmlsZScsXG4gICAgICBsYWJlbDogJ1VSTCcsXG4gICAgICBwaWNrZXJfdGV4dDogJ0Jyb3dzZSBsaW5rcydcbiAgICB9XG4gIF07XG5cbiAgY29uc3QgZGlzcGxheVRleHQgPSBzZXR0aW5ncy5hbmNob3IudGV4dC5tYXA8RGlhbG9nLklucHV0U3BlYz4oKCkgPT4gKFxuICAgIHtcbiAgICAgIG5hbWU6ICd0ZXh0JyxcbiAgICAgIHR5cGU6ICdpbnB1dCcsXG4gICAgICBsYWJlbDogJ1RleHQgdG8gZGlzcGxheSdcbiAgICB9XG4gICkpLnRvQXJyYXkoKTtcblxuICBjb25zdCB0aXRsZVRleHQ6IERpYWxvZy5JbnB1dFNwZWNbXSA9IHNldHRpbmdzLmZsYWdzLnRpdGxlRW5hYmxlZCA/IFtcbiAgICB7XG4gICAgICBuYW1lOiAndGl0bGUnLFxuICAgICAgdHlwZTogJ2lucHV0JyxcbiAgICAgIGxhYmVsOiAnVGl0bGUnXG4gICAgfVxuICBdIDogW107XG5cbiAgY29uc3QgZGVmYXVsdFRhcmdldDogT3B0aW9uYWw8c3RyaW5nPiA9IE9wdGlvbmFsLmZyb20oT3B0aW9ucy5nZXREZWZhdWx0TGlua1RhcmdldChlZGl0b3IpKTtcblxuICBjb25zdCBpbml0aWFsRGF0YSA9IGdldEluaXRpYWxEYXRhKHNldHRpbmdzLCBkZWZhdWx0VGFyZ2V0KTtcbiAgY29uc3QgY2F0YWxvZ3MgPSBzZXR0aW5ncy5jYXRhbG9ncztcbiAgY29uc3QgZGlhbG9nRGVsdGEgPSBEaWFsb2dDaGFuZ2VzLmluaXQoaW5pdGlhbERhdGEsIGNhdGFsb2dzKTtcblxuICBjb25zdCBib2R5ID0gbWFrZURpYWxvZ0JvZHkodXJsSW5wdXQsIGRpc3BsYXlUZXh0LCB0aXRsZVRleHQsIGNhdGFsb2dzLCBzZXR0aW5ncy5oYXNVcGxvYWRQYW5lbCwgT3B0aW9ucy5nZXREb2N1bWVudHNGaWxlVHlwZXMoZWRpdG9yKSk7XG4gIGNvbnN0IGhlbHBlcnM6IEhlbHBlcnMgPSB7XG4gICAgYWRkVG9CbG9iQ2FjaGU6IGFkZFRvQmxvYkNhY2hlKGVkaXRvciksXG4gICAgY3JlYXRlQmxvYkNhY2hlOiBjcmVhdGVCbG9iQ2FjaGUoZWRpdG9yKSxcbiAgICBhbGVydEVycjogYWxlcnRFcnIoZWRpdG9yKSxcbiAgICB1cGxvYWRGaWxlOiB1cGxvYWRGaWxlKGVkaXRvciksXG4gICAgZ2V0RXhpc3RpbmdCbG9iSW5mbzogZ2V0RXhpc3RpbmdCbG9iSW5mbyhlZGl0b3IpXG4gIH07XG4gIHJldHVybiB7XG4gICAgdGl0bGU6ICdJbnNlcnQvRWRpdCBMaW5rJyxcbiAgICBzaXplOiAnbm9ybWFsJyxcbiAgICBib2R5LFxuICAgIGJ1dHRvbnM6IFtcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ2NhbmNlbCcsXG4gICAgICAgIG5hbWU6ICdjYW5jZWwnLFxuICAgICAgICB0ZXh0OiAnQ2FuY2VsJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ3N1Ym1pdCcsXG4gICAgICAgIG5hbWU6ICdzYXZlJyxcbiAgICAgICAgdGV4dDogJ1NhdmUnLFxuICAgICAgICBwcmltYXJ5OiB0cnVlXG4gICAgICB9XG4gICAgXSxcbiAgICBpbml0aWFsRGF0YSxcbiAgICBvbkNoYW5nZTogKGFwaTogRGlhbG9nLkRpYWxvZ0luc3RhbmNlQXBpPExpbmtEaWFsb2dEYXRhPiwgeyBuYW1lIH0pID0+IHtcbiAgICAgIGlmIChuYW1lID09PSAnZmlsZWlucHV0Jykge1xuICAgICAgICBjaGFuZ2VGaWxlSW5wdXQoaGVscGVycywgYXBpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpYWxvZ0RlbHRhLm9uQ2hhbmdlKGFwaS5nZXREYXRhLCB7IG5hbWUgfSkuZWFjaCgobmV3RGF0YSkgPT4ge1xuICAgICAgICAgIGFwaS5zZXREYXRhKG5ld0RhdGEpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG9uU3VibWl0XG4gIH07XG59O1xuXG5jb25zdCBvcGVuID0gKGVkaXRvcjogRWRpdG9yKTogdm9pZCA9PiB7XG4gIGNvbnN0IGRhdGEgPSBjb2xsZWN0RGF0YShlZGl0b3IpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzXG4gIGRhdGEudGhlbigoaW5mbykgPT4ge1xuICAgIGNvbnN0IG9uU3VibWl0ID0gaGFuZGxlU3VibWl0KGVkaXRvciwgaW5mbyk7XG4gICAgcmV0dXJuIG1ha2VEaWFsb2coaW5mbywgb25TdWJtaXQsIGVkaXRvcik7XG4gIH0pLnRoZW4oKHNwZWMpID0+IHtcbiAgICBlZGl0b3Iud2luZG93TWFuYWdlci5vcGVuKHNwZWMpO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7XG4gIG9wZW5cbn07XG4iLCJpbXBvcnQgeyBBcnIsIEZ1biwgT2JqLCBPcHRpb25hbCwgT3B0aW9uYWxzIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0IHR5cGUgeyBMaW5rRGlhbG9nQ2F0YWxvZywgTGlua0RpYWxvZ0RhdGEsIExpbmtEaWFsb2dVcmxEYXRhLCBMaXN0R3JvdXAsIExpc3RJdGVtLCBMaXN0VmFsdWUgfSBmcm9tICcuL0RpYWxvZ1R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBEaWFsb2dEZWx0YSB7XG4gIHJlYWRvbmx5IHVybDogTGlua0RpYWxvZ1VybERhdGE7XG4gIHJlYWRvbmx5IHRleHQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEaWFsb2dDaGFuZ2VzIHtcbiAgcmVhZG9ubHkgb25DaGFuZ2U6IChnZXREYXRhOiAoKSA9PiBMaW5rRGlhbG9nRGF0YSwgY2hhbmdlOiB7IG5hbWU6IHN0cmluZyB9KSA9PiBPcHRpb25hbDxQYXJ0aWFsPExpbmtEaWFsb2dEYXRhPj47XG59XG5cbmNvbnN0IGlzTGlzdEdyb3VwID0gKGl0ZW06IExpc3RJdGVtKTogaXRlbSBpcyBMaXN0R3JvdXAgPT5cbiAgT2JqLmhhc05vbk51bGxhYmxlS2V5KGl0ZW0gYXMgUmVjb3JkPHN0cmluZywgYW55PiwgJ2l0ZW1zJyk7XG5cbmNvbnN0IGZpbmRUZXh0QnlWYWx1ZSA9ICh2YWx1ZTogc3RyaW5nLCBjYXRhbG9nOiBMaXN0SXRlbVtdKTogT3B0aW9uYWw8TGlzdFZhbHVlPiA9PlxuICBBcnIuZmluZE1hcChjYXRhbG9nLCAoaXRlbSkgPT4ge1xuICAgIGlmIChpc0xpc3RHcm91cChpdGVtKSkge1xuICAgICAgcmV0dXJuIGZpbmRUZXh0QnlWYWx1ZSh2YWx1ZSwgaXRlbS5pdGVtcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBPcHRpb25hbHMuc29tZUlmKGl0ZW0udmFsdWUgPT09IHZhbHVlLCBpdGVtKTtcbiAgICB9XG4gIH0pO1xuXG5jb25zdCBnZXREZWx0YSA9IChwZXJzaXN0ZW50VGV4dDogc3RyaW5nLCBmaWVsZE5hbWU6ICdsaW5rJyB8ICdhbmNob3InLCBjYXRhbG9nOiBMaXN0SXRlbVtdLCBkYXRhOiBQYXJ0aWFsPExpbmtEaWFsb2dEYXRhPik6IE9wdGlvbmFsPERpYWxvZ0RlbHRhPiA9PiB7XG4gIGNvbnN0IHZhbHVlID0gZGF0YVtmaWVsZE5hbWVdO1xuICBjb25zdCBoYXNQZXJzaXN0ZW50VGV4dCA9IHBlcnNpc3RlbnRUZXh0Lmxlbmd0aCA+IDA7XG4gIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gZmluZFRleHRCeVZhbHVlKHZhbHVlLCBjYXRhbG9nKS5tYXAoKGkpID0+ICh7XG4gICAgdXJsOiB7XG4gICAgICB2YWx1ZTogaS52YWx1ZSxcbiAgICAgIG1ldGE6IHtcbiAgICAgICAgdGV4dDogaGFzUGVyc2lzdGVudFRleHQgPyBwZXJzaXN0ZW50VGV4dCA6IGkudGV4dCxcbiAgICAgICAgYXR0YWNoOiBGdW4ubm9vcFxuICAgICAgfVxuICAgIH0sXG4gICAgdGV4dDogaGFzUGVyc2lzdGVudFRleHQgPyBwZXJzaXN0ZW50VGV4dCA6IGkudGV4dFxuICB9KSkgOiBPcHRpb25hbC5ub25lKCk7XG59O1xuXG5jb25zdCBmaW5kQ2F0YWxvZyA9IChjYXRhbG9nczogTGlua0RpYWxvZ0NhdGFsb2csIGZpZWxkTmFtZTogc3RyaW5nKTogT3B0aW9uYWw8TGlzdEl0ZW1bXT4gPT4ge1xuICBpZiAoZmllbGROYW1lID09PSAnbGluaycpIHtcbiAgICByZXR1cm4gY2F0YWxvZ3MubGluaztcbiAgfSBlbHNlIGlmIChmaWVsZE5hbWUgPT09ICdhbmNob3InKSB7XG4gICAgcmV0dXJuIGNhdGFsb2dzLmFuY2hvcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gT3B0aW9uYWwubm9uZSgpO1xuICB9XG59O1xuXG5jb25zdCBpbml0ID0gKGluaXRpYWxEYXRhOiBMaW5rRGlhbG9nRGF0YSwgbGlua0NhdGFsb2c6IExpbmtEaWFsb2dDYXRhbG9nKTogRGlhbG9nQ2hhbmdlcyA9PiB7XG4gIGNvbnN0IHBlcnNpc3RlbnREYXRhID0ge1xuICAgIHRleHQ6IGluaXRpYWxEYXRhLnRleHQsXG4gICAgdGl0bGU6IGluaXRpYWxEYXRhLnRpdGxlXG4gIH07XG5cbiAgY29uc3QgZ2V0VGl0bGVGcm9tVXJsQ2hhbmdlID0gKHVybDogTGlua0RpYWxvZ1VybERhdGEpOiBPcHRpb25hbDxzdHJpbmc+ID0+XG4gICAgT3B0aW9uYWxzLnNvbWVJZihwZXJzaXN0ZW50RGF0YS50aXRsZS5sZW5ndGggPD0gMCwgT3B0aW9uYWwuZnJvbSh1cmwubWV0YT8udGl0bGUpLmdldE9yKCcnKSk7XG5cbiAgY29uc3QgZ2V0VGV4dEZyb21VcmxDaGFuZ2UgPSAodXJsOiBMaW5rRGlhbG9nVXJsRGF0YSk6IE9wdGlvbmFsPHN0cmluZz4gPT5cbiAgICBPcHRpb25hbHMuc29tZUlmKHBlcnNpc3RlbnREYXRhLnRleHQubGVuZ3RoIDw9IDAsIE9wdGlvbmFsLmZyb20odXJsLm1ldGE/LnRleHQpLmdldE9yKHVybC52YWx1ZSkpO1xuXG4gIGNvbnN0IG9uVXJsQ2hhbmdlID0gKGRhdGE6IExpbmtEaWFsb2dEYXRhKTogT3B0aW9uYWw8UGFydGlhbDxMaW5rRGlhbG9nRGF0YT4+ID0+IHtcbiAgICBjb25zdCB0ZXh0ID0gZ2V0VGV4dEZyb21VcmxDaGFuZ2UoZGF0YS51cmwpO1xuICAgIGNvbnN0IHRpdGxlID0gZ2V0VGl0bGVGcm9tVXJsQ2hhbmdlKGRhdGEudXJsKTtcbiAgICAvLyBXZSBhcmUgZ29pbmcgdG8gY2hhbmdlIHRoZSB0ZXh0L3RpdGxlIGJlY2F1c2UgaXQgaGFzIG5vdCBiZWVuIG1hbnVhbGx5IGVudGVyZWQgYnkgdGhlIHVzZXIuXG4gICAgaWYgKHRleHQuaXNTb21lKCkgfHwgdGl0bGUuaXNTb21lKCkpIHtcbiAgICAgIHJldHVybiBPcHRpb25hbC5zb21lKHtcbiAgICAgICAgLi4udGV4dC5tYXAoKHRleHQpID0+ICh7IHRleHQgfSkpLmdldE9yKHsgfSksXG4gICAgICAgIC4uLnRpdGxlLm1hcCgodGl0bGUpID0+ICh7IHRpdGxlIH0pKS5nZXRPcih7IH0pXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIE9wdGlvbmFsLm5vbmUoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgb25DYXRhbG9nQ2hhbmdlID0gKGRhdGE6IExpbmtEaWFsb2dEYXRhLCBjaGFuZ2U6ICdsaW5rJyB8ICdhbmNob3InKTogT3B0aW9uYWw8UGFydGlhbDxMaW5rRGlhbG9nRGF0YT4+ID0+IHtcbiAgICBjb25zdCBjYXRhbG9nID0gZmluZENhdGFsb2cobGlua0NhdGFsb2csIGNoYW5nZSkuZ2V0T3IoWyBdKTtcbiAgICByZXR1cm4gZ2V0RGVsdGEocGVyc2lzdGVudERhdGEudGV4dCwgY2hhbmdlLCBjYXRhbG9nLCBkYXRhKTtcbiAgfTtcblxuICBjb25zdCBvbkNoYW5nZSA9IChnZXREYXRhOiAoKSA9PiBMaW5rRGlhbG9nRGF0YSwgY2hhbmdlOiB7IG5hbWU6IHN0cmluZyB9KTogT3B0aW9uYWw8UGFydGlhbDxMaW5rRGlhbG9nRGF0YT4+ID0+IHtcbiAgICBjb25zdCBuYW1lID0gY2hhbmdlLm5hbWU7XG4gICAgaWYgKG5hbWUgPT09ICd1cmwnKSB7XG4gICAgICByZXR1cm4gb25VcmxDaGFuZ2UoZ2V0RGF0YSgpKTtcbiAgICB9IGVsc2UgaWYgKEFyci5jb250YWlucyhbICdhbmNob3InLCAnbGluaycgXSwgbmFtZSkpIHtcbiAgICAgIHJldHVybiBvbkNhdGFsb2dDaGFuZ2UoZ2V0RGF0YSgpLCBuYW1lIGFzICdhbmNob3InIHwgJ2xpbmsnKTtcbiAgICB9IGVsc2UgaWYgKG5hbWUgPT09ICd0ZXh0JyB8fCBuYW1lID09PSAndGl0bGUnKSB7XG4gICAgICAvLyBVcGRhdGUgdGhlIHBlcnNpc3RlbnQgdGV4dC90aXRsZSBzdGF0ZSwgYXMgYSB1c2VyIGhhcyBpbnB1dCBjdXN0b20gdGV4dFxuICAgICAgcGVyc2lzdGVudERhdGFbbmFtZV0gPSBnZXREYXRhKClbbmFtZV07XG4gICAgICByZXR1cm4gT3B0aW9uYWwubm9uZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gT3B0aW9uYWwubm9uZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG9uQ2hhbmdlXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgRGlhbG9nQ2hhbmdlcyA9IHtcbiAgaW5pdCxcbiAgZ2V0RGVsdGFcbn07XG4iLCJpbXBvcnQgeyBBcnIsIE9wdGlvbmFsIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0IHR5cGUgRWRpdG9yIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvRWRpdG9yJztcbmltcG9ydCBEZWxheSBmcm9tICd0aW55bWNlL2NvcmUvYXBpL3V0aWwvRGVsYXknO1xuXG5pbXBvcnQgKiBhcyBPcHRpb25zIGZyb20gJy4uL2FwaS9PcHRpb25zJztcbmltcG9ydCB7IEFzc3VtZUV4dGVybmFsVGFyZ2V0cyB9IGZyb20gJy4uL2FwaS9UeXBlcyc7XG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuLi9jb3JlL1V0aWxzJztcblxuaW1wb3J0IHR5cGUgeyBMaW5rRGlhbG9nT3V0cHV0IH0gZnJvbSAnLi9EaWFsb2dUeXBlcyc7XG5cbmludGVyZmFjZSBUcmFuc2Zvcm1lciB7XG4gIHJlYWRvbmx5IG1lc3NhZ2U6IHN0cmluZztcbiAgcmVhZG9ubHkgcHJlcHJvY2VzczogKGQ6IExpbmtEaWFsb2dPdXRwdXQpID0+IExpbmtEaWFsb2dPdXRwdXQ7XG59XG5cbi8vIERlbGF5IGNvbmZpcm0gc2luY2Ugb25TdWJtaXQgd2lsbCBtb3ZlIGZvY3VzXG5jb25zdCBkZWxheWVkQ29uZmlybSA9IChlZGl0b3I6IEVkaXRvciwgbWVzc2FnZTogc3RyaW5nLCBjYWxsYmFjazogKHN0YXRlOiBib29sZWFuKSA9PiB2b2lkKTogdm9pZCA9PiB7XG4gIGNvbnN0IHJuZyA9IGVkaXRvci5zZWxlY3Rpb24uZ2V0Um5nKCk7XG5cbiAgRGVsYXkuc2V0RWRpdG9yVGltZW91dChlZGl0b3IsICgpID0+IHtcbiAgICBlZGl0b3Iud2luZG93TWFuYWdlci5jb25maXJtKG1lc3NhZ2UsIChzdGF0ZSkgPT4ge1xuICAgICAgZWRpdG9yLnNlbGVjdGlvbi5zZXRSbmcocm5nKTtcbiAgICAgIGNhbGxiYWNrKHN0YXRlKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCB0cnlFbWFpbFRyYW5zZm9ybSA9IChkYXRhOiBMaW5rRGlhbG9nT3V0cHV0KTogT3B0aW9uYWw8VHJhbnNmb3JtZXI+ID0+IHtcbiAgY29uc3QgdXJsID0gZGF0YS5ocmVmO1xuICBjb25zdCBzdWdnZXN0TWFpbFRvID0gdXJsLmluZGV4T2YoJ0AnKSA+IDAgJiYgdXJsLmluZGV4T2YoJy8nKSA9PT0gLTEgJiYgdXJsLmluZGV4T2YoJ21haWx0bzonKSA9PT0gLTE7XG4gIHJldHVybiBzdWdnZXN0TWFpbFRvID8gT3B0aW9uYWwuc29tZSh7XG4gICAgbWVzc2FnZTogJ1RoZSBVUkwgeW91IGVudGVyZWQgc2VlbXMgdG8gYmUgYW4gZW1haWwgYWRkcmVzcy4gRG8geW91IHdhbnQgdG8gYWRkIHRoZSByZXF1aXJlZCBtYWlsdG86IHByZWZpeD8nLFxuICAgIHByZXByb2Nlc3M6IChvbGREYXRhKSA9PiAoeyAuLi5vbGREYXRhLCBocmVmOiAnbWFpbHRvOicgKyB1cmwgfSlcbiAgfSkgOiBPcHRpb25hbC5ub25lKCk7XG59O1xuXG5jb25zdCB0cnlQcm90b2NvbFRyYW5zZm9ybSA9IChhc3N1bWVFeHRlcm5hbFRhcmdldHM6IEFzc3VtZUV4dGVybmFsVGFyZ2V0cywgZGVmYXVsdExpbmtQcm90b2NvbDogc3RyaW5nKSA9PiAoZGF0YTogTGlua0RpYWxvZ091dHB1dCk6IE9wdGlvbmFsPFRyYW5zZm9ybWVyPiA9PiB7XG4gIGNvbnN0IHVybCA9IGRhdGEuaHJlZjtcbiAgY29uc3Qgc3VnZ2VzdFByb3RvY29sID0gKFxuICAgIGFzc3VtZUV4dGVybmFsVGFyZ2V0cyA9PT0gQXNzdW1lRXh0ZXJuYWxUYXJnZXRzLldBUk4gJiYgIVV0aWxzLmhhc1Byb3RvY29sKHVybCkgfHxcbiAgICBhc3N1bWVFeHRlcm5hbFRhcmdldHMgPT09IEFzc3VtZUV4dGVybmFsVGFyZ2V0cy5PRkYgJiYgL15cXHMqd3d3KFxcLnxcXGRcXC4pL2kudGVzdCh1cmwpXG4gICk7XG5cbiAgcmV0dXJuIHN1Z2dlc3RQcm90b2NvbCA/IE9wdGlvbmFsLnNvbWUoe1xuICAgIG1lc3NhZ2U6IGBUaGUgVVJMIHlvdSBlbnRlcmVkIHNlZW1zIHRvIGJlIGFuIGV4dGVybmFsIGxpbmsuIERvIHlvdSB3YW50IHRvIGFkZCB0aGUgcmVxdWlyZWQgJHtkZWZhdWx0TGlua1Byb3RvY29sfTovLyBwcmVmaXg/YCxcbiAgICBwcmVwcm9jZXNzOiAob2xkRGF0YSkgPT4gKHsgLi4ub2xkRGF0YSwgaHJlZjogZGVmYXVsdExpbmtQcm90b2NvbCArICc6Ly8nICsgdXJsIH0pXG4gIH0pIDogT3B0aW9uYWwubm9uZSgpO1xufTtcblxuY29uc3QgcHJlcHJvY2VzcyA9IChlZGl0b3I6IEVkaXRvciwgZGF0YTogTGlua0RpYWxvZ091dHB1dCk6IFByb21pc2U8TGlua0RpYWxvZ091dHB1dD4gPT4gQXJyLmZpbmRNYXAoXG4gIFsgdHJ5RW1haWxUcmFuc2Zvcm0sIHRyeVByb3RvY29sVHJhbnNmb3JtKE9wdGlvbnMuYXNzdW1lRXh0ZXJuYWxUYXJnZXRzKGVkaXRvciksIE9wdGlvbnMuZ2V0RGVmYXVsdExpbmtQcm90b2NvbChlZGl0b3IpKSBdLFxuICAoZikgPT4gZihkYXRhKVxuKS5mb2xkKFxuICAoKSA9PiBQcm9taXNlLnJlc29sdmUoZGF0YSksXG4gICh0cmFuc2Zvcm0pID0+IG5ldyBQcm9taXNlKChjYWxsYmFjaykgPT4ge1xuICAgIGRlbGF5ZWRDb25maXJtKGVkaXRvciwgdHJhbnNmb3JtLm1lc3NhZ2UsIChzdGF0ZSkgPT4ge1xuICAgICAgY2FsbGJhY2soc3RhdGUgPyB0cmFuc2Zvcm0ucHJlcHJvY2VzcyhkYXRhKSA6IGRhdGEpO1xuICAgIH0pO1xuICB9KVxuKTtcblxuZXhwb3J0IGNvbnN0IERpYWxvZ0NvbmZpcm1zID0ge1xuICBwcmVwcm9jZXNzXG59O1xuIiwiaW1wb3J0IHsgT3B0aW9uYWwgfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5pbXBvcnQgdHlwZSBET01VdGlscyBmcm9tICd0aW55bWNlL2NvcmUvYXBpL2RvbS9ET01VdGlscyc7XG5pbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuXG5pbXBvcnQgKiBhcyBPcHRpb25zIGZyb20gJy4uL2FwaS9PcHRpb25zJztcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gJy4uL2NvcmUvVXRpbHMnO1xuXG5pbXBvcnQgdHlwZSB7IExpbmtEaWFsb2dJbmZvIH0gZnJvbSAnLi9EaWFsb2dUeXBlcyc7XG5pbXBvcnQgeyBBbmNob3JMaXN0T3B0aW9ucyB9IGZyb20gJy4vc2VjdGlvbnMvQW5jaG9yTGlzdE9wdGlvbnMnO1xuaW1wb3J0IHsgQ2xhc3NMaXN0T3B0aW9ucyB9IGZyb20gJy4vc2VjdGlvbnMvQ2xhc3NMaXN0T3B0aW9ucyc7XG5pbXBvcnQgeyBMaW5rTGlzdE9wdGlvbnMgfSBmcm9tICcuL3NlY3Rpb25zL0xpbmtMaXN0T3B0aW9ucyc7XG5pbXBvcnQgeyBSZWxPcHRpb25zIH0gZnJvbSAnLi9zZWN0aW9ucy9SZWxPcHRpb25zJztcbmltcG9ydCB7IFRhcmdldE9wdGlvbnMgfSBmcm9tICcuL3NlY3Rpb25zL1RhcmdldE9wdGlvbnMnO1xuXG5jb25zdCBub25FbXB0eUF0dHIgPSAoZG9tOiBET01VdGlscywgZWxlbTogc3RyaW5nIHwgRWxlbWVudCwgbmFtZTogc3RyaW5nKTogT3B0aW9uYWw8c3RyaW5nPiA9PiB7XG4gIGNvbnN0IHZhbDogc3RyaW5nIHwgbnVsbCA9IGRvbS5nZXRBdHRyaWIoZWxlbSwgbmFtZSk7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgdmFsLmxlbmd0aCA+IDAgPyBPcHRpb25hbC5zb21lKHZhbCkgOiBPcHRpb25hbC5ub25lKCk7XG59O1xuXG5jb25zdCBleHRyYWN0RnJvbUFuY2hvciA9IChlZGl0b3I6IEVkaXRvciwgYW5jaG9yOiBPcHRpb25hbDxIVE1MQW5jaG9yRWxlbWVudD4pOiBMaW5rRGlhbG9nSW5mb1snYW5jaG9yJ10gPT4ge1xuICBjb25zdCBkb20gPSBlZGl0b3IuZG9tO1xuICBjb25zdCBvbmx5VGV4dCA9IFV0aWxzLmlzT25seVRleHRTZWxlY3RlZChlZGl0b3IpO1xuICBjb25zdCB0ZXh0OiBPcHRpb25hbDxzdHJpbmc+ID0gb25seVRleHQgPyBPcHRpb25hbC5zb21lKFV0aWxzLmdldEFuY2hvclRleHQoZWRpdG9yLnNlbGVjdGlvbiwgYW5jaG9yKSkgOiBPcHRpb25hbC5ub25lKCk7XG4gIGNvbnN0IHVybDogT3B0aW9uYWw8c3RyaW5nPiA9IGFuY2hvci5iaW5kKChhbmNob3JFbG0pID0+IE9wdGlvbmFsLmZyb20oZG9tLmdldEF0dHJpYihhbmNob3JFbG0sICdocmVmJykpKTtcbiAgY29uc3QgdGFyZ2V0OiBPcHRpb25hbDxzdHJpbmc+ID0gYW5jaG9yLmJpbmQoKGFuY2hvckVsbSkgPT4gT3B0aW9uYWwuZnJvbShkb20uZ2V0QXR0cmliKGFuY2hvckVsbSwgJ3RhcmdldCcpKSk7XG4gIGNvbnN0IHJlbCA9IGFuY2hvci5iaW5kKChhbmNob3JFbG0pID0+IG5vbkVtcHR5QXR0cihkb20sIGFuY2hvckVsbSwgJ3JlbCcpKTtcbiAgY29uc3QgbGlua0NsYXNzID0gYW5jaG9yLmJpbmQoKGFuY2hvckVsbSkgPT4gbm9uRW1wdHlBdHRyKGRvbSwgYW5jaG9yRWxtLCAnY2xhc3MnKSk7XG4gIGNvbnN0IHRpdGxlID0gYW5jaG9yLmJpbmQoKGFuY2hvckVsbSkgPT4gbm9uRW1wdHlBdHRyKGRvbSwgYW5jaG9yRWxtLCAndGl0bGUnKSk7XG5cbiAgcmV0dXJuIHtcbiAgICB1cmwsXG4gICAgdGV4dCxcbiAgICB0aXRsZSxcbiAgICB0YXJnZXQsXG4gICAgcmVsLFxuICAgIGxpbmtDbGFzc1xuICB9O1xufTtcblxuY29uc3QgY29sbGVjdCA9IChlZGl0b3I6IEVkaXRvciwgbGlua05vZGU6IE9wdGlvbmFsPEhUTUxBbmNob3JFbGVtZW50Pik6IFByb21pc2U8TGlua0RpYWxvZ0luZm8+ID0+XG4gIExpbmtMaXN0T3B0aW9ucy5nZXRMaW5rcyhlZGl0b3IpLnRoZW4oKGxpbmtzKSA9PiB7XG4gICAgY29uc3QgaGFzVXBsb2FkUGFuZWwgPSBPcHRpb25zLmhhc0ZpbGVzVXBsb2FkSGFuZGxlcihlZGl0b3IpICYmIE9wdGlvbnMuaGFzRG9jdW1lbnRzRmlsZVR5cGVzKGVkaXRvcikgJiYgT3B0aW9ucy5oYXNMaW5rVXBsb2FkdGFiKGVkaXRvcik7XG4gICAgY29uc3QgYW5jaG9yID0gZXh0cmFjdEZyb21BbmNob3IoZWRpdG9yLCBsaW5rTm9kZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFuY2hvcixcbiAgICAgIGNhdGFsb2dzOiB7XG4gICAgICAgIHRhcmdldHM6IFRhcmdldE9wdGlvbnMuZ2V0VGFyZ2V0cyhlZGl0b3IpLFxuICAgICAgICAvLyBUaGlzIHNob3VsZCBiZSBpbml0aWFsIHRhcmdldC4gSXMgYW5jaG9yLnRhcmdldCB0aGF0P1xuICAgICAgICByZWxzOiBSZWxPcHRpb25zLmdldFJlbHMoZWRpdG9yLCBhbmNob3IudGFyZ2V0KSxcbiAgICAgICAgY2xhc3NlczogQ2xhc3NMaXN0T3B0aW9ucy5nZXRDbGFzc2VzKGVkaXRvciksXG4gICAgICAgIGFuY2hvcjogQW5jaG9yTGlzdE9wdGlvbnMuZ2V0QW5jaG9ycyhlZGl0b3IpLFxuICAgICAgICBsaW5rOiBsaW5rc1xuICAgICAgfSxcbiAgICAgIGhhc1VwbG9hZFBhbmVsLFxuICAgICAgb3B0Tm9kZTogbGlua05vZGUsXG4gICAgICBmbGFnczoge1xuICAgICAgICB0aXRsZUVuYWJsZWQ6IE9wdGlvbnMuc2hvdWxkU2hvd0xpbmtUaXRsZShlZGl0b3IpXG4gICAgICB9XG4gICAgfTtcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBEaWFsb2dJbmZvID0ge1xuICBjb2xsZWN0XG59O1xuIiwiaW1wb3J0IHsgQXJyIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0IHR5cGUgeyBEb2N1bWVudHNGaWxlVHlwZXMgfSBmcm9tICd0aW55bWNlL2NvcmUvYXBpL09wdGlvblR5cGVzJztcbmltcG9ydCB0eXBlIHsgRGlhbG9nIH0gZnJvbSAndGlueW1jZS9jb3JlL2FwaS91aS9VaSc7XG5cbmNvbnN0IG1ha2VUYWIgPSAoZmlsZVR5cGVzOiBEb2N1bWVudHNGaWxlVHlwZXNbXSk6IERpYWxvZy5UYWJTcGVjID0+IHtcbiAgY29uc3QgaXRlbXM6IERpYWxvZy5Cb2R5Q29tcG9uZW50U3BlY1tdID0gW1xuICAgIHtcbiAgICAgIHR5cGU6ICdkcm9wem9uZScsXG4gICAgICBuYW1lOiAnZmlsZWlucHV0JyxcbiAgICAgIGJ1dHRvbkxhYmVsOiAnQnJvd3NlIGZvciBhIGZpbGUnLFxuICAgICAgZHJvcEFyZWFMYWJlbDogJ0Ryb3AgYSBmaWxlIGhlcmUnLFxuICAgICAgYWxsb3dlZEZpbGVUeXBlczogZmlsZVR5cGVzLm1hcCgoZSkgPT4gZS5taW1lVHlwZSkuam9pbignLCcpLFxuICAgICAgYWxsb3dlZEZpbGVFeHRlbnNpb25zOiBBcnIuZmxhdHRlbihmaWxlVHlwZXMubWFwKChlKSA9PiBlLmV4dGVuc2lvbnMpKSxcbiAgICB9XG4gIF07XG4gIHJldHVybiB7XG4gICAgdGl0bGU6ICdVcGxvYWQnLFxuICAgIG5hbWU6ICd1cGxvYWQnLFxuICAgIGl0ZW1zXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgVXBsb2FkVGFiID0ge1xuICBtYWtlVGFiXG59O1xuIiwiaW1wb3J0IHsgQXJyLCBPcHRpb25hbCB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmltcG9ydCB0eXBlIEVkaXRvciBmcm9tICd0aW55bWNlL2NvcmUvYXBpL0VkaXRvcic7XG5cbmltcG9ydCB0eXBlIHsgTGlzdEl0ZW0gfSBmcm9tICcuLi9EaWFsb2dUeXBlcyc7XG5cbi8vIE5PVEU6IHlvdSBjdXJyZW50bHkgbmVlZCBhbmNob3JzIGluIHRoZSBjb250ZW50IGZvciB0aGlzIGZpZWxkIHRvIGFwcGVhclxuXG5jb25zdCBnZXRBbmNob3JzID0gKGVkaXRvcjogRWRpdG9yKTogT3B0aW9uYWw8TGlzdEl0ZW1bXT4gPT4ge1xuICBjb25zdCBhbmNob3JOb2RlcyA9IGVkaXRvci5kb20uc2VsZWN0PEhUTUxBbmNob3JFbGVtZW50PignYTpub3QoW2hyZWZdKScpO1xuICBjb25zdCBhbmNob3JzID0gQXJyLmJpbmQoYW5jaG9yTm9kZXMsIChhbmNob3IpID0+IHtcbiAgICBjb25zdCBpZCA9IGFuY2hvci5uYW1lIHx8IGFuY2hvci5pZDtcbiAgICByZXR1cm4gaWQgPyBbeyB0ZXh0OiBpZCwgdmFsdWU6ICcjJyArIGlkIH1dIDogWyBdO1xuICB9KTtcblxuICByZXR1cm4gYW5jaG9ycy5sZW5ndGggPiAwID8gT3B0aW9uYWwuc29tZShbeyB0ZXh0OiAnTm9uZScsIHZhbHVlOiAnJyB9XS5jb25jYXQoYW5jaG9ycykpIDogT3B0aW9uYWwubm9uZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IEFuY2hvckxpc3RPcHRpb25zID0ge1xuICBnZXRBbmNob3JzXG59O1xuIiwiaW1wb3J0IHsgT3B0aW9uYWwgfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5pbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuXG5pbXBvcnQgKiBhcyBPcHRpb25zIGZyb20gJy4uLy4uL2FwaS9PcHRpb25zJztcbmltcG9ydCB7IExpc3RPcHRpb25zIH0gZnJvbSAnLi4vLi4vY29yZS9MaXN0T3B0aW9ucyc7XG5pbXBvcnQgdHlwZSB7IExpc3RJdGVtIH0gZnJvbSAnLi4vRGlhbG9nVHlwZXMnO1xuXG4vLyBMb29rcyBsaWtlIHRpbnltY2UgY3VycmVudGx5IHJlbmRlcnMgbWVudXMsIGJ1dCBkb2Vzbid0XG4vLyBsZXQgeW91IGNob29zZSBmcm9tIG9uZS5cblxuY29uc3QgZ2V0Q2xhc3NlcyA9IChlZGl0b3I6IEVkaXRvcik6IE9wdGlvbmFsPExpc3RJdGVtW10+ID0+IHtcbiAgY29uc3QgbGlzdCA9IE9wdGlvbnMuZ2V0TGlua0NsYXNzTGlzdChlZGl0b3IpO1xuICBpZiAobGlzdC5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIExpc3RPcHRpb25zLnNhbml0aXplKGxpc3QpO1xuICB9XG4gIHJldHVybiBPcHRpb25hbC5ub25lKCk7XG59O1xuXG5leHBvcnQgY29uc3QgQ2xhc3NMaXN0T3B0aW9ucyA9IHtcbiAgZ2V0Q2xhc3Nlc1xufTtcbiIsImltcG9ydCB7IE9wdGlvbmFsLCBUeXBlIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0IHR5cGUgRWRpdG9yIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvRWRpdG9yJztcblxuaW1wb3J0ICogYXMgT3B0aW9ucyBmcm9tICcuLi8uLi9hcGkvT3B0aW9ucyc7XG5pbXBvcnQgeyBMaXN0T3B0aW9ucyB9IGZyb20gJy4uLy4uL2NvcmUvTGlzdE9wdGlvbnMnO1xuaW1wb3J0IHR5cGUgeyBMaXN0SXRlbSwgVXNlckxpc3RJdGVtIH0gZnJvbSAnLi4vRGlhbG9nVHlwZXMnO1xuXG5jb25zdCBwYXJzZUpzb24gPSAodGV4dDogc3RyaW5nKTogT3B0aW9uYWw8TGlzdEl0ZW1bXT4gPT4ge1xuICAvLyBEbyBzb21lIHByb3BlciBtb2RlbGxpbmcuXG4gIHRyeSB7XG4gICAgcmV0dXJuIE9wdGlvbmFsLnNvbWUoSlNPTi5wYXJzZSh0ZXh0KSk7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBPcHRpb25hbC5ub25lKCk7XG4gIH1cbn07XG5cbmNvbnN0IGdldExpbmtzID0gKGVkaXRvcjogRWRpdG9yKTogUHJvbWlzZTxPcHRpb25hbDxMaXN0SXRlbVtdPj4gPT4ge1xuICBjb25zdCBleHRyYWN0b3IgPSAoaXRlbTogVXNlckxpc3RJdGVtKSA9PiBlZGl0b3IuY29udmVydFVSTChpdGVtLnZhbHVlIHx8IGl0ZW0udXJsIHx8ICcnLCAnaHJlZicpO1xuXG4gIGNvbnN0IGxpbmtMaXN0ID0gT3B0aW9ucy5nZXRMaW5rTGlzdChlZGl0b3IpO1xuICByZXR1cm4gbmV3IFByb21pc2U8T3B0aW9uYWw8VXNlckxpc3RJdGVtW10+PigocmVzb2x2ZSkgPT4ge1xuICAgIC8vIFRPRE8gLSBiZXR0ZXIgaGFuZGxpbmcgb2YgZmFpbHVyZVxuICAgIGlmIChUeXBlLmlzU3RyaW5nKGxpbmtMaXN0KSkge1xuICAgICAgZmV0Y2gobGlua0xpc3QpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5vayA/IHJlcy50ZXh0KCkudGhlbihwYXJzZUpzb24pIDogUHJvbWlzZS5yZWplY3QoKSlcbiAgICAgICAgLnRoZW4ocmVzb2x2ZSwgKCkgPT4gcmVzb2x2ZShPcHRpb25hbC5ub25lKCkpKTtcbiAgICB9IGVsc2UgaWYgKFR5cGUuaXNGdW5jdGlvbihsaW5rTGlzdCkpIHtcbiAgICAgIGxpbmtMaXN0KChvdXRwdXQpID0+IHJlc29sdmUoT3B0aW9uYWwuc29tZShvdXRwdXQpKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc29sdmUoT3B0aW9uYWwuZnJvbShsaW5rTGlzdCkpO1xuICAgIH1cbiAgfSkudGhlbigob3B0SXRlbXMpID0+IG9wdEl0ZW1zLmJpbmQoTGlzdE9wdGlvbnMuc2FuaXRpemVXaXRoKGV4dHJhY3RvcikpLm1hcCgoaXRlbXMpID0+IHtcbiAgICBpZiAoaXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgbm9uZUl0ZW06IExpc3RJdGVtW10gPSBbeyB0ZXh0OiAnTm9uZScsIHZhbHVlOiAnJyB9XTtcbiAgICAgIHJldHVybiBub25lSXRlbS5jb25jYXQoaXRlbXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gaXRlbXM7XG4gICAgfVxuICB9KSk7XG59O1xuXG5leHBvcnQgY29uc3QgTGlua0xpc3RPcHRpb25zID0ge1xuICBnZXRMaW5rc1xufTtcbiIsImltcG9ydCB7IE9wdGlvbmFsLCBPcHRpb25hbHMgfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5pbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuXG5pbXBvcnQgKiBhcyBPcHRpb25zIGZyb20gJy4uLy4uL2FwaS9PcHRpb25zJztcbmltcG9ydCB7IExpc3RPcHRpb25zIH0gZnJvbSAnLi4vLi4vY29yZS9MaXN0T3B0aW9ucyc7XG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuLi8uLi9jb3JlL1V0aWxzJztcbmltcG9ydCB0eXBlIHsgTGlzdEl0ZW0sIFVzZXJMaXN0SXRlbSB9IGZyb20gJy4uL0RpYWxvZ1R5cGVzJztcblxuY29uc3QgZ2V0UmVscyA9IChlZGl0b3I6IEVkaXRvciwgaW5pdGlhbFRhcmdldDogT3B0aW9uYWw8c3RyaW5nPik6IE9wdGlvbmFsPExpc3RJdGVtW10+ID0+IHtcbiAgY29uc3QgbGlzdCA9IE9wdGlvbnMuZ2V0UmVsTGlzdChlZGl0b3IpO1xuICBpZiAobGlzdC5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgaXNUYXJnZXRCbGFuayA9IE9wdGlvbmFscy5pcyhpbml0aWFsVGFyZ2V0LCAnX2JsYW5rJyk7XG4gICAgY29uc3QgZW5mb3JjZVNhZmUgPSBPcHRpb25zLmFsbG93VW5zYWZlTGlua1RhcmdldChlZGl0b3IpID09PSBmYWxzZTtcbiAgICBjb25zdCBzYWZlUmVsRXh0cmFjdG9yID0gKGl0ZW06IFVzZXJMaXN0SXRlbSkgPT4gVXRpbHMuYXBwbHlSZWxUYXJnZXRSdWxlcyhMaXN0T3B0aW9ucy5nZXRWYWx1ZShpdGVtKSwgaXNUYXJnZXRCbGFuayk7XG4gICAgY29uc3Qgc2FuaXRpemVyID0gZW5mb3JjZVNhZmUgPyBMaXN0T3B0aW9ucy5zYW5pdGl6ZVdpdGgoc2FmZVJlbEV4dHJhY3RvcikgOiBMaXN0T3B0aW9ucy5zYW5pdGl6ZTtcbiAgICByZXR1cm4gc2FuaXRpemVyKGxpc3QpO1xuICB9XG4gIHJldHVybiBPcHRpb25hbC5ub25lKCk7XG59O1xuXG5leHBvcnQgY29uc3QgUmVsT3B0aW9ucyA9IHtcbiAgZ2V0UmVsc1xufTtcbiIsImltcG9ydCB7IE9wdGlvbmFsLCBUeXBlIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0IHR5cGUgRWRpdG9yIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvRWRpdG9yJztcblxuaW1wb3J0ICogYXMgT3B0aW9ucyBmcm9tICcuLi8uLi9hcGkvT3B0aW9ucyc7XG5pbXBvcnQgeyBMaXN0T3B0aW9ucyB9IGZyb20gJy4uLy4uL2NvcmUvTGlzdE9wdGlvbnMnO1xuaW1wb3J0IHR5cGUgeyBMaXN0SXRlbSB9IGZyb20gJy4uL0RpYWxvZ1R5cGVzJztcblxuLy8gSW4gY3VycmVudCB0aW55bWNlLCB0YXJnZXRzIGNhbiBiZSBuZXN0ZWQgbWVudXMuXG4vLyBEbyB3ZSByZWFsbHkgd2FudCB0byBzdXBwb3J0IHRoYXQ/XG5cbmNvbnN0IGZhbGxiYWNrcyA9IFtcbiAgeyB0ZXh0OiAnQ3VycmVudCB3aW5kb3cnLCB2YWx1ZTogJycgfSxcbiAgeyB0ZXh0OiAnTmV3IHdpbmRvdycsIHZhbHVlOiAnX2JsYW5rJyB9XG5dO1xuXG5jb25zdCBnZXRUYXJnZXRzID0gKGVkaXRvcjogRWRpdG9yKTogT3B0aW9uYWw8TGlzdEl0ZW1bXT4gPT4ge1xuICBjb25zdCBsaXN0ID0gT3B0aW9ucy5nZXRUYXJnZXRMaXN0KGVkaXRvcik7XG4gIGlmIChUeXBlLmlzQXJyYXkobGlzdCkpIHtcbiAgICByZXR1cm4gTGlzdE9wdGlvbnMuc2FuaXRpemUobGlzdCkub3JUaHVuayhcbiAgICAgICgpID0+IE9wdGlvbmFsLnNvbWUoZmFsbGJhY2tzKVxuICAgICk7XG4gIH0gZWxzZSBpZiAobGlzdCA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gT3B0aW9uYWwubm9uZSgpO1xuICB9XG4gIHJldHVybiBPcHRpb25hbC5zb21lKGZhbGxiYWNrcyk7XG59O1xuXG5leHBvcnQgY29uc3QgVGFyZ2V0T3B0aW9ucyA9IHtcbiAgZ2V0VGFyZ2V0c1xufTtcbiIsImltcG9ydCAqIGFzIFR5cGUgZnJvbSAnLi4vY29yZS9UeXBlJztcbmltcG9ydCAqIGFzIEFycmF5VXRpbCBmcm9tICcuLi9jb3JlL0FycmF5VXRpbCc7XG5cbi8qKiBBIHdheSBvZiBjb21wYXJpbmcgdHdvIHZhbHVlcyBvZiB0aGUgc2FtZSB0eXBlIGZvciBlcXVhbGl0eS4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRXE8QT4ge1xuICBlcTogKHg6IEEsIHk6IEEpID0+IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBjb250cmFtYXAgPSA8QSwgQj4gKGVxYTogRXE8QT4sIGY6IChiOiBCKSA9PiBBKTogRXE8Qj4gPT5cbiAgZXEoKHgsIHkpID0+IGVxYS5lcShmKHgpLCBmKHkpKSk7XG5cbmV4cG9ydCBjb25zdCBlcSA9IDxBPiAoZjogKHg6IEEsIHk6IEEpID0+IGJvb2xlYW4pOiBFcTxBPiA9PlxuICAoeyBlcTogZiB9KTtcblxuZXhwb3J0IGNvbnN0IHRyaXBsZUVxOiBFcTxhbnk+ID0gZXEoKHgsIHkpID0+IHggPT09IHkpO1xuXG5leHBvcnQgY29uc3QgZXFTdHJpbmc6IEVxPHN0cmluZz4gPSB0cmlwbGVFcTtcblxuZXhwb3J0IGNvbnN0IGVxQm9vbGVhbjogRXE8Ym9vbGVhbj4gPSB0cmlwbGVFcTtcblxuZXhwb3J0IGNvbnN0IGVxTnVtYmVyOiBFcTxudW1iZXI+ID0gdHJpcGxlRXE7XG5cbmV4cG9ydCBjb25zdCBlcVVuZGVmaW5lZDogRXE8dW5kZWZpbmVkPiA9IHRyaXBsZUVxO1xuXG5leHBvcnQgY29uc3QgZXFOdWxsOiBFcTxudWxsPiA9IHRyaXBsZUVxO1xuXG5leHBvcnQgY29uc3QgZXFBcnJheSA9IDxBPiAoZXFhOiBFcTxBPik6IEVxPEFycmF5TGlrZTxBPj4gPT4gZXEoKHgsIHkpID0+IHtcbiAgaWYgKHgubGVuZ3RoICE9PSB5Lmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBsZW4gPSB4Lmxlbmd0aDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGlmICghZXFhLmVxKHhbaV0sIHlbaV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufSk7XG5cbi8vIFRPRE86IE1ha2UgYW4gT3JkIHR5cGVjbGFzc1xuY29uc3QgZXFTb3J0ZWRBcnJheSA9IDxBPihlcWE6IEVxPEE+LCBjb21wYXJlRm4/OiAoYTogQSwgYjogQSkgPT4gbnVtYmVyKTogRXE8QXJyYXlMaWtlPEE+PiA9PlxuICBjb250cmFtYXAoZXFBcnJheShlcWEpLCAoeHMpID0+IEFycmF5VXRpbC5zb3J0KHhzLCBjb21wYXJlRm4pKTtcblxuZXhwb3J0IGNvbnN0IGVxUmVjb3JkID0gPEE+IChlcWE6IEVxPEE+KTogRXE8UmVjb3JkPHN0cmluZywgQT4+ID0+IGVxKCh4LCB5KSA9PiB7XG4gIGNvbnN0IGt4ID0gT2JqZWN0LmtleXMoeCk7XG4gIGNvbnN0IGt5ID0gT2JqZWN0LmtleXMoeSk7XG4gIGlmICghZXFTb3J0ZWRBcnJheShlcVN0cmluZykuZXEoa3gsIGt5KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBsZW4gPSBreC5sZW5ndGg7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCBxID0ga3hbaV07XG4gICAgaWYgKCFlcWEuZXEoeFtxXSwgeVtxXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59KTtcblxuZXhwb3J0IGNvbnN0IGVxQW55OiBFcTxhbnk+ID0gZXEoKHgsIHkpID0+IHtcbiAgaWYgKHggPT09IHkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IHR4ID0gVHlwZS50eXBlT2YoeCk7XG4gIGNvbnN0IHR5ID0gVHlwZS50eXBlT2YoeSk7XG4gIGlmICh0eCAhPT0gdHkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoVHlwZS5pc0VxdWF0YWJsZVR5cGUodHgpKSB7XG4gICAgcmV0dXJuIHggPT09IHk7XG5cbiAgfSBlbHNlIGlmICh0eCA9PT0gJ2FycmF5Jykge1xuICAgIHJldHVybiBlcUFycmF5KGVxQW55KS5lcSh4LCB5KTtcblxuICB9IGVsc2UgaWYgKHR4ID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBlcVJlY29yZChlcUFueSkuZXEoeCwgeSk7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59KTtcbiIsImV4cG9ydCBjb25zdCBtYXAgPSA8QSwgQj4oeHM6IEFycmF5TGlrZTxBPiwgZjogKGE6IEEpID0+IEIpOiBCW10gPT4ge1xuICBjb25zdCBsZW4gPSB4cy5sZW5ndGg7XG4gIGNvbnN0IHIgPSBuZXcgQXJyYXkobGVuKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICByW2ldID0gZih4KTtcbiAgfVxuICByZXR1cm4gcjtcbn07XG5cbi8qKiBtYXAgYSBmdW5jdGlvbiBvdmVyIGFuIGFycmF5LCB0aGVuIG1hcCBhbm90aGVyIGZ1bmN0aW9uIG92ZXIgZXZlcnkgaXRlbSBleGNlcHQgdGhlIGxhc3QgKi9cbmV4cG9ydCBjb25zdCBtYXBEZWxpbWl0ID0gPEEsIEI+ICh4czogQXJyYXlMaWtlPEE+LCBmOiAoYTogQSkgPT4gQiwgZGVsaW1pdDogKGI6IEIpID0+IEIpOiBCW10gPT4ge1xuICBjb25zdCBsZW4gPSB4cy5sZW5ndGg7XG4gIGNvbnN0IHIgPSBuZXcgQXJyYXkobGVuKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW4gLSAxOyBpKyspIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgcltpXSA9IGRlbGltaXQoZih4KSk7XG4gIH1cbiAgaWYgKGxlbiA+IDApIHtcbiAgICByW2xlbiAtIDFdID0gKGYoeHNbbGVuIC0gMV0pKTtcbiAgfVxuXG4gIHJldHVybiByO1xufTtcblxuZXhwb3J0IGNvbnN0IHNvcnQgPSA8QT4gKHhzOiBBcnJheUxpa2U8QT4sIGNvbXBhcmVGbj86IChhOiBBLCBiOiBBKSA9PiBudW1iZXIpOiBBW10gPT4ge1xuICBjb25zdCBjbG9uZTogQVtdID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoeHMpO1xuICByZXR1cm4gY2xvbmUuc29ydChjb21wYXJlRm4pO1xufTtcbiIsImV4cG9ydCBjb25zdCB0eXBlT2YgPSAoeDogYW55KSA9PiB7XG4gIGlmICh4ID09PSBudWxsKSB7XG4gICAgcmV0dXJuICdudWxsJztcbiAgfVxuICBpZiAoeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuICd1bmRlZmluZWQnO1xuICB9XG4gIGNvbnN0IHQgPSB0eXBlb2YgeDtcbiAgaWYgKHQgPT09ICdvYmplY3QnICYmIChBcnJheS5wcm90b3R5cGUuaXNQcm90b3R5cGVPZih4KSB8fCB4LmNvbnN0cnVjdG9yICYmIHguY29uc3RydWN0b3IubmFtZSA9PT0gJ0FycmF5JykpIHtcbiAgICByZXR1cm4gJ2FycmF5JztcbiAgfVxuICBpZiAodCA9PT0gJ29iamVjdCcgJiYgKFN0cmluZy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZih4KSB8fCB4LmNvbnN0cnVjdG9yICYmIHguY29uc3RydWN0b3IubmFtZSA9PT0gJ1N0cmluZycpKSB7XG4gICAgcmV0dXJuICdzdHJpbmcnO1xuICB9XG4gIHJldHVybiB0O1xufTtcblxuY29uc3QgaXNUeXBlID0gPFQ+KHR5cGU6IHN0cmluZykgPT4gKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBUID0+IHR5cGVPZih2YWx1ZSkgPT09IHR5cGU7XG5cbmV4cG9ydCBjb25zdCBpc1N0cmluZyA9IGlzVHlwZTxzdHJpbmc+KCdzdHJpbmcnKTtcbmV4cG9ydCBjb25zdCBpc09iamVjdCA9IGlzVHlwZTxPYmplY3Q+KCdvYmplY3QnKTtcbmV4cG9ydCBjb25zdCBpc0FycmF5ID0gaXNUeXBlPEFycmF5PHVua25vd24+PignYXJyYXknKTtcbmV4cG9ydCBjb25zdCBpc051bGwgPSBpc1R5cGU8bnVsbD4oJ251bGwnKTtcbmV4cG9ydCBjb25zdCBpc0Jvb2xlYW4gPSBpc1R5cGU8Ym9vbGVhbj4oJ2Jvb2xlYW4nKTtcbmV4cG9ydCBjb25zdCBpc1VuZGVmaW5lZCA9IGlzVHlwZTx1bmRlZmluZWQ+KCd1bmRlZmluZWQnKTtcbmV4cG9ydCBjb25zdCBpc0Z1bmN0aW9uID0gaXNUeXBlPEZ1bmN0aW9uPignZnVuY3Rpb24nKTtcbmV4cG9ydCBjb25zdCBpc051bWJlciA9IGlzVHlwZTxudW1iZXI+KCdudW1iZXInKTtcblxuZXhwb3J0IGNvbnN0IGlzRXF1YXRhYmxlVHlwZSA9ICh4OiBzdHJpbmcpOiBib29sZWFuID0+XG4gIFsgJ3VuZGVmaW5lZCcsICdib29sZWFuJywgJ251bWJlcicsICdzdHJpbmcnLCAnZnVuY3Rpb24nLCAneG1sJywgJ251bGwnIF0uaW5kZXhPZih4KSAhPT0gLTE7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG4gICAgICAgIGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcbiAgICAgICAgfVxuICAgIH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucnYgPSAoKSA9PiAoXCIxLjUuMlwiKSIsIl9fd2VicGFja19yZXF1aXJlX18ucnVpZCA9IFwiYnVuZGxlcj1yc3BhY2tAMS41LjJcIjtcbiIsImltcG9ydCBQbHVnaW4gZnJvbSAnLi9QbHVnaW4nO1xuXG5QbHVnaW4oKTtcblxuLyoqICoqKioqXG4gKiBETyBOT1QgRVhQT1JUIEFOWVRISU5HXG4gKlxuICogSUYgWU9VIERPIFJPTExVUCBXSUxMIExFQVZFIEEgR0xPQkFMIE9OIFRIRSBQQUdFXG4gKioqKioqKi9cbiJdLCJuYW1lcyI6WyJFcSIsIkZ1biIsIk9wdGlvbmFsIiwiVHlwZSIsIm5hdGl2ZVNsaWNlIiwiQXJyYXkiLCJuYXRpdmVJbmRleE9mIiwibmF0aXZlUHVzaCIsInJhd0luZGV4T2YiLCJ0cyIsInQiLCJpbmRleE9mIiwieHMiLCJ4IiwiciIsImNvbnRhaW5zIiwiZXhpc3RzIiwicHJlZCIsImkiLCJsZW4iLCJyYW5nZSIsIm51bSIsImYiLCJjaHVuayIsImFycmF5Iiwic2l6ZSIsInMiLCJtYXAiLCJlYWNoIiwiZWFjaHIiLCJwYXJ0aXRpb24iLCJwYXNzIiwiZmFpbCIsImFyciIsImZpbHRlciIsImdyb3VwQnkiLCJ3YXNUeXBlIiwiZ3JvdXAiLCJ0eXBlIiwiZm9sZHIiLCJhY2MiLCJmb2xkbCIsImZpbmRVbnRpbCIsInVudGlsIiwiZmluZCIsImZpbmRJbmRleCIsImZpbmRMYXN0SW5kZXgiLCJmbGF0dGVuIiwiRXJyb3IiLCJiaW5kIiwiZm9yYWxsIiwiZXF1YWwiLCJhMSIsImEyIiwiZXEiLCJyZXZlcnNlIiwiZGlmZmVyZW5jZSIsIm1hcFRvT2JqZWN0IiwiU3RyaW5nIiwicHVyZSIsInNvcnQiLCJjb21wYXJhdG9yIiwiY29weSIsImdldCIsImhlYWQiLCJsYXN0IiwiZnJvbSIsImZpbmRNYXAiLCJ1bmlxdWUiLCJpc0R1cGxpY2F0ZWQiLCJDZWxsIiwiaW5pdGlhbCIsInZhbHVlIiwic2V0IiwidiIsIm5vb3AiLCJub2FyZyIsImNvbXBvc2UiLCJmYSIsImZiIiwiYXJncyIsImNvbXBvc2UxIiwiZmJjIiwiZmFiIiwiYSIsImNvbnN0YW50IiwiaWRlbnRpdHkiLCJ0cmlwbGVFcXVhbHMiLCJiIiwiY3VycnkiLCJmbiIsImluaXRpYWxBcmdzIiwicmVzdEFyZ3MiLCJhbGwiLCJub3QiLCJkaWUiLCJtc2ciLCJhcHBseSIsImNhbGwiLCJuZXZlciIsImFsd2F5cyIsIndlYWtlbiIsInBpcGUiLCJhYiIsImJjIiwiY2QiLCJkZSIsImVmIiwiZmciLCJnaCIsImMiLCJkIiwiZSIsImciLCJrZXlzIiwiT2JqZWN0IiwiaGFzT3duUHJvcGVydHkiLCJvYmoiLCJwcm9wcyIsImsiLCJ0dXBsZU1hcCIsInR1cGxlIiwib2JqQWNjIiwiaW50ZXJuYWxGaWx0ZXIiLCJvblRydWUiLCJvbkZhbHNlIiwiYmlmaWx0ZXIiLCJtYXBUb0FycmF5IiwibmFtZSIsInZhbHVlcyIsImtleSIsImhhcyIsImhhc05vbk51bGxhYmxlS2V5IiwidW5kZWZpbmVkIiwiaXNFbXB0eSIsInRhZyIsIm9uTm9uZSIsIm9uU29tZSIsIm1hcHBlciIsImJpbmRlciIsInByZWRpY2F0ZSIsInJlcGxhY2VtZW50IiwidGh1bmsiLCJtZXNzYWdlIiwid29ya2VyIiwiQXJyIiwiaXMiLCJsaHMiLCJyaHMiLCJsZWZ0IiwiZXF1YWxzIiwibGlmdDIiLCJjYXQiLCJwdXNoIiwic2VxdWVuY2UiLCJ0cmF2ZXJzZSIsIm9hIiwib2IiLCJsaWZ0MyIsIm9jIiwibGlmdDQiLCJvZCIsImxpZnQ1Iiwib2UiLCJtYXBGcm9tIiwiYmluZEZyb20iLCJvb3QiLCJzb21lSWYiLCJzaW5nbGV0b24iLCJkb1Jldm9rZSIsInN1YmplY3QiLCJyZXZva2UiLCJjbGVhciIsImlzU2V0IiwicmVwZWF0YWJsZSIsImRlbGF5IiwiaW50ZXJ2YWxJZCIsImlkIiwiY2xlYXJJbnRlcnZhbCIsImZ1bmN0aW9uVG9SZXBlYXQiLCJzZXRJbnRlcnZhbCIsImRlc3Ryb3lhYmxlIiwidW5iaW5kYWJsZSIsImFwaSIsInJ1biIsIm9uIiwiU3RyQXBwZW5kIiwiY2hlY2tSYW5nZSIsInN0ciIsInN1YnN0ciIsInN0YXJ0Iiwic3VwcGxhbnQiLCJpc1N0cmluZ09yTnVtYmVyIiwiZnVsbE1hdGNoIiwicmVtb3ZlTGVhZGluZyIsInByZWZpeCIsInN0YXJ0c1dpdGgiLCJyZW1vdmVUcmFpbGluZyIsInN1ZmZpeCIsImVuZHNXaXRoIiwiZW5zdXJlTGVhZGluZyIsImVuc3VyZVRyYWlsaW5nIiwiZW5kIiwiaWR4IiwiY2FwaXRhbGl6ZSIsImJsYW5rIiwidHJpbSIsImxUcmltIiwiclRyaW0iLCJpc05vdEVtcHR5IiwicmVwZWF0IiwiY291bnQiLCJmcm9tQ29kZVBvaW50IiwidG9JbnQiLCJyYWRpeCIsInBhcnNlSW50IiwiaXNOYU4iLCJ0b0Zsb2F0IiwicGFyc2VGbG9hdCIsImdldFByb3RvdHlwZU9mIiwiaGFzUHJvdG8iLCJjb25zdHJ1Y3RvciIsInR5cGVPZiIsIm8iLCJwcm90byIsImlzVHlwZSIsImlzU2ltcGxlVHlwZSIsImlzT2JqZWN0IiwiaXNTdHJpbmciLCJpc1BsYWluT2JqZWN0IiwiaXNBcnJheSIsImlzTnVsbCIsImlzQm9vbGVhbiIsImlzVW5kZWZpbmVkIiwiaXNOdWxsYWJsZSIsImlzTm9uTnVsbGFibGUiLCJpc0Z1bmN0aW9uIiwiaXNOdW1iZXIiLCJpc0FycmF5T2YiLCJpc1Byb21pc2VMaWtlIiwiYWRkVG9TdGFydCIsImFkZFRvRW5kIiwicmVtb3ZlRnJvbVN0YXJ0IiwibnVtQ2hhcnMiLCJyZW1vdmVGcm9tRW5kIiwiUGx1Z2luTWFuYWdlciIsIkNvbW1hbmRzIiwiT3B0aW9ucyIsIktleWJvYXJkIiwiQ29udHJvbHMiLCJlZGl0b3IiLCJEaWFsb2ciLCJyZWdpc3RlciIsIl91aSIsIkFzc3VtZUV4dGVybmFsVGFyZ2V0cyIsIm9wdGlvbiIsInJlZ2lzdGVyT3B0aW9uIiwidmFsaWQiLCJhc3N1bWVFeHRlcm5hbFRhcmdldHMiLCJoYXNDb250ZXh0VG9vbGJhciIsImdldExpbmtMaXN0IiwiZ2V0RGVmYXVsdExpbmtUYXJnZXQiLCJnZXREZWZhdWx0TGlua1Byb3RvY29sIiwiZ2V0VGFyZ2V0TGlzdCIsImdldFJlbExpc3QiLCJnZXRMaW5rQ2xhc3NMaXN0Iiwic2hvdWxkU2hvd0xpbmtUaXRsZSIsImFsbG93VW5zYWZlTGlua1RhcmdldCIsInVzZVF1aWNrTGluayIsImF0dHJpYnV0ZXNQb3N0UHJvY2VzcyIsImdldEZpbGVzVXBsb2FkSGFuZGxlciIsImhhc0xpbmtVcGxvYWR0YWIiLCJnZXREb2N1bWVudHNGaWxlVHlwZXMiLCJoYXNGaWxlc1VwbG9hZEhhbmRsZXIiLCJoYXNEb2N1bWVudHNGaWxlVHlwZXMiLCJPYmoiLCJVUkkiLCJVdGlscyIsImdldExpbmtBdHRycyIsImRhdGEiLCJhdHRycyIsImhhbmRsZUV4dGVybmFsVGFyZ2V0cyIsImhyZWYiLCJhcHBseUxpbmtPdmVycmlkZXMiLCJsaW5rQXR0cnMiLCJuZXdMaW5rQXR0cnMiLCJuZXdSZWwiLCJ1cGRhdGVMaW5rIiwiYW5jaG9yRWxtIiwidGV4dCIsInJuZyIsImNyZWF0ZUxpbmsiLCJzZWxlY3RlZEVsbSIsImRvbSIsImxpbmtJbWFnZUZpZ3VyZSIsImxpbmtEb21NdXRhdGlvbiIsImF0dGFjaFN0YXRlIiwiZWxtIiwidW5saW5rU2VsZWN0aW9uIiwic2VsZWN0aW9uIiwiYm9va21hcmsiLCJzdGFydEFuY2hvckVsbSIsImVuZEFuY2hvckVsbSIsInVubGlua0RvbU11dGF0aW9uIiwibm9kZSIsInVubGlua0ltYWdlRmlndXJlIiwidW53cmFwT3B0aW9ucyIsImNscyIsInJlbCIsInRhcmdldCIsInRpdGxlIiwiX2siLCJzYW5pdGl6ZURhdGEiLCJnZXRPcHRpb24iLCJ1cmlPcHRpb25zIiwibGluayIsInNhbml0aXplZERhdGEiLCJ1bmxpbmsiLCJmaWciLCJpbWciLCJzZXR1cCIsIlRvb2xzIiwiZ2V0VmFsdWUiLCJpdGVtIiwiZ2V0VGV4dCIsInNhbml0aXplTGlzdCIsImxpc3QiLCJleHRyYWN0VmFsdWUiLCJvdXQiLCJpdGVtcyIsInNhbml0aXplV2l0aCIsImV4dHJhY3RlciIsInNhbml0aXplIiwiY3JlYXRlVWkiLCJsYWJlbCIsIkxpc3RPcHRpb25zIiwiU2luZ2xldG9uIiwiT3B0aW9uYWxzIiwiU3RyaW5ncyIsIlZLIiwiYXBwZW5kQ2xpY2tSZW1vdmUiLCJldnQiLCJkb2N1bWVudCIsIm9wZW5MaW5rIiwidXJsIiwiTW91c2VFdmVudCIsIndpbmRvdyIsImhhc09ubHlBbHRNb2RpZmllciIsImdvdG9MaW5rIiwidGFyZ2V0RWwiLCJpc1NlbGVjdGlvbk9uSW1hZ2VXaXRoRW1iZWRkZWRMaW5rIiwiZ2V0TGlua0Zyb21FbGVtZW50IiwiZWxlbWVudCIsImxpbmtzIiwiZ2V0TGlua0luU2VsZWN0aW9uIiwiZ2V0TGlua0Zyb21TZWxlY3Rpb24iLCJzZWxlY3RlZExpbmsiLCJnZXRTZWxlY3RlZExpbmsiLCJnb3RvU2VsZWN0ZWRMaW5rIiwiRG9tVHJlZVdhbGtlciIsImlzQW5jaG9yIiwiaXNMaW5rIiwiZ2V0SHJlZiIsImNvbGxlY3ROb2Rlc0luUmFuZ2UiLCJjb250ZW50cyIsImZpcnN0Q2hpbGQiLCJ3YWxrZXIiLCJlbGVtZW50cyIsImN1cnJlbnQiLCJoYXNQcm90b2NvbCIsImFwcGx5UmVsVGFyZ2V0UnVsZXMiLCJpc1Vuc2FmZSIsInJ1bGVzIiwicmVscyIsInRvU3RyaW5nIiwiYWRkVGFyZ2V0UnVsZXMiLCJyZW1vdmVUYXJnZXRSdWxlcyIsInZhbCIsIm5ld1JlbHMiLCJ0cmltQ2FyZXRDb250YWluZXJzIiwiZ2V0QW5jaG9yRWxlbWVudCIsImdldExpbmtzSW5TZWxlY3Rpb24iLCJpc0ltYWdlRmlndXJlIiwiaXNJbkFuY2hvciIsImdldEFuY2hvclRleHQiLCJnZXRMaW5rcyIsImhhc0xpbmtzIiwiaGFzTGlua3NJblNlbGVjdGlvbiIsImlzT25seVRleHRTZWxlY3RlZCIsImlubGluZVRleHRFbGVtZW50cyIsImlzRWxlbWVudCIsImlzSW5CbG9ja0FuY2hvciIsImFuY2hvciIsImJsb2JUb0RhdGFVcmkiLCJibG9iIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwiQWN0aW9ucyIsIk9wZW5MaW5rIiwib3BlbkRpYWxvZyIsInRvZ2dsZVN0YXRlIiwidG9nZ2xlciIsInRvZ2dsZUxpbmtTdGF0ZSIsInVwZGF0ZVN0YXRlIiwidG9nZ2xlTGlua01lbnVTdGF0ZSIsInRvZ2dsZVJlcXVpcmVzTGlua1N0YXRlIiwicGFyZW50cyIsInVwZGF0ZUVuYWJsZWQiLCJzZXR1cEJ1dHRvbnMiLCJzZXR1cE1lbnVJdGVtcyIsInNldHVwQ29udGV4dE1lbnUiLCJpbkxpbmsiLCJub0xpbmsiLCJpc0VkaXRhYmxlIiwic2V0dXBDb250ZXh0VG9vbGJhcnMiLCJjb2xsYXBzZVNlbGVjdGlvblRvRW5kIiwib25TZXR1cExpbmsiLCJidXR0b25BcGkiLCJnZXRMaW5rVGV4dCIsIm9ubHlUZXh0IiwiZm9ybUFwaSIsIkRpYWxvZ0NoYW5nZXMiLCJEaWFsb2dDb25maXJtcyIsIkRpYWxvZ0luZm8iLCJVcGxvYWRUYWIiLCJoYW5kbGVTdWJtaXQiLCJpbmZvIiwiZ2V0Q2hhbmdlZFZhbHVlIiwiY2hhbmdlZERhdGEiLCJwRGF0YSIsInVwbG9hZEZpbGUiLCJibG9iSW5mbyIsInByb2dyZXNzIiwiZmlsZVVwbG9hZEhhbmRsZXIiLCJkYXRhVXJsVG9CYXNlNjQiLCJkYXRhVXJsIiwiY2hhbmdlRmlsZUlucHV0IiwiaGVscGVycyIsImZpbGUiLCJibG9iVXJpIiwiVVJMIiwidXBkYXRlVXJsQW5kU3dpdGNoVGFiIiwiZmlsZU5hbWUiLCJmaW5hbGl6ZSIsImV4aXN0aW5nQmxvYkluZm8iLCJyZXN1bHQiLCJlcnIiLCJjcmVhdGVCbG9iQ2FjaGUiLCJhZGRUb0Jsb2JDYWNoZSIsImdldEV4aXN0aW5nQmxvYkluZm8iLCJiYXNlNjQiLCJhbGVydEVyciIsImNhbGxiYWNrIiwiY29sbGVjdERhdGEiLCJhbmNob3JOb2RlIiwiZ2V0SW5pdGlhbERhdGEiLCJkZWZhdWx0VGFyZ2V0IiwibWFrZURpYWxvZ0JvZHkiLCJ1cmxJbnB1dCIsImRpc3BsYXlUZXh0IiwidGl0bGVUZXh0IiwiY2F0YWxvZ3MiLCJoYXNVcGxvYWRQYW5lbCIsImZpbGVUeXBlcyIsImdlbmVyYWxQYW5lbEl0ZW1zIiwidGFiUGFuZWwiLCJtYWtlRGlhbG9nIiwic2V0dGluZ3MiLCJvblN1Ym1pdCIsImluaXRpYWxEYXRhIiwiZGlhbG9nRGVsdGEiLCJib2R5IiwibmV3RGF0YSIsIm9wZW4iLCJzcGVjIiwiaXNMaXN0R3JvdXAiLCJmaW5kVGV4dEJ5VmFsdWUiLCJjYXRhbG9nIiwiZ2V0RGVsdGEiLCJwZXJzaXN0ZW50VGV4dCIsImZpZWxkTmFtZSIsImhhc1BlcnNpc3RlbnRUZXh0IiwiZmluZENhdGFsb2ciLCJpbml0IiwibGlua0NhdGFsb2ciLCJwZXJzaXN0ZW50RGF0YSIsImdldFRpdGxlRnJvbVVybENoYW5nZSIsImdldFRleHRGcm9tVXJsQ2hhbmdlIiwib25VcmxDaGFuZ2UiLCJvbkNhdGFsb2dDaGFuZ2UiLCJjaGFuZ2UiLCJvbkNoYW5nZSIsImdldERhdGEiLCJEZWxheSIsImRlbGF5ZWRDb25maXJtIiwic3RhdGUiLCJ0cnlFbWFpbFRyYW5zZm9ybSIsInN1Z2dlc3RNYWlsVG8iLCJvbGREYXRhIiwidHJ5UHJvdG9jb2xUcmFuc2Zvcm0iLCJkZWZhdWx0TGlua1Byb3RvY29sIiwic3VnZ2VzdFByb3RvY29sIiwicHJlcHJvY2VzcyIsInRyYW5zZm9ybSIsIkFuY2hvckxpc3RPcHRpb25zIiwiQ2xhc3NMaXN0T3B0aW9ucyIsIkxpbmtMaXN0T3B0aW9ucyIsIlJlbE9wdGlvbnMiLCJUYXJnZXRPcHRpb25zIiwibm9uRW1wdHlBdHRyIiwiZWxlbSIsImV4dHJhY3RGcm9tQW5jaG9yIiwibGlua0NsYXNzIiwiY29sbGVjdCIsImxpbmtOb2RlIiwibWFrZVRhYiIsImdldEFuY2hvcnMiLCJhbmNob3JOb2RlcyIsImFuY2hvcnMiLCJnZXRDbGFzc2VzIiwicGFyc2VKc29uIiwiSlNPTiIsImV4dHJhY3RvciIsImxpbmtMaXN0IiwiZmV0Y2giLCJyZXMiLCJvdXRwdXQiLCJvcHRJdGVtcyIsIm5vbmVJdGVtIiwiZ2V0UmVscyIsImluaXRpYWxUYXJnZXQiLCJpc1RhcmdldEJsYW5rIiwiZW5mb3JjZVNhZmUiLCJzYWZlUmVsRXh0cmFjdG9yIiwic2FuaXRpemVyIiwiZmFsbGJhY2tzIiwiZ2V0VGFyZ2V0cyIsIlBsdWdpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLDZEQUFlLE1BQU0sRUFBQztBQUNmOzs7Ozs7Ozs7Ozs7OztBQ0hQOztBQUVBLDZEQUFlLE1BQU0sRUFBQztBQUNmOzs7Ozs7Ozs7Ozs7OztBQ0hQOztBQUVBLDZEQUFlLE1BQU0sRUFBQztBQUNmOzs7Ozs7Ozs7Ozs7OztBQ0hQOztBQUVBLDZEQUFlLE1BQU0sRUFBQztBQUNmOzs7Ozs7Ozs7Ozs7OztBQ0hQOztBQUVBLDZEQUFlLE1BQU0sRUFBQztBQUNmOzs7Ozs7Ozs7Ozs7OztBQ0hQOztBQUVBLDZEQUFlLE1BQU0sRUFBQztBQUNmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNINkI7QUFFUDtBQUNTO0FBQ1A7QUFPL0IsTUFBTUksY0FBY0MsTUFBTSxTQUFT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