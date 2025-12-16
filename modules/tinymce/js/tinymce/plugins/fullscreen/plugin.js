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
"../katamari/src/main/ts/ephox/katamari/api/Throttler.ts": 
/*!***************************************************************!*\
  !*** ../katamari/src/main/ts/ephox/katamari/api/Throttler.ts ***!
  \***************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  adaptable: () => (adaptable),
  first: () => (first),
  last: () => (last)
});
/* ESM import */var _Type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Type */ "../katamari/src/main/ts/ephox/katamari/api/Type.ts");

// Run a function fn after rate ms. If another invocation occurs
// during the time it is waiting, update the arguments f will run
// with (but keep the current schedule)
const adaptable = (fn, rate)=>{
    let timer = null;
    let args = null;
    const cancel = ()=>{
        if (!_Type__WEBPACK_IMPORTED_MODULE_0__.isNull(timer)) {
            clearTimeout(timer);
            timer = null;
            args = null;
        }
    };
    const throttle = (...newArgs)=>{
        args = newArgs;
        if (_Type__WEBPACK_IMPORTED_MODULE_0__.isNull(timer)) {
            timer = setTimeout(()=>{
                const tempArgs = args;
                timer = null;
                args = null;
                fn.apply(null, tempArgs);
            }, rate);
        }
    };
    return {
        cancel,
        throttle
    };
};
// Run a function fn after rate ms. If another invocation occurs
// during the time it is waiting, ignore it completely.
const first = (fn, rate)=>{
    let timer = null;
    const cancel = ()=>{
        if (!_Type__WEBPACK_IMPORTED_MODULE_0__.isNull(timer)) {
            clearTimeout(timer);
            timer = null;
        }
    };
    const throttle = (...args)=>{
        if (_Type__WEBPACK_IMPORTED_MODULE_0__.isNull(timer)) {
            timer = setTimeout(()=>{
                timer = null;
                fn.apply(null, args);
            }, rate);
        }
    };
    return {
        cancel,
        throttle
    };
};
// Run a function fn after rate ms. If another invocation occurs
// during the time it is waiting, reschedule the function again
// with the new arguments.
const last = (fn, rate)=>{
    let timer = null;
    const cancel = ()=>{
        if (!_Type__WEBPACK_IMPORTED_MODULE_0__.isNull(timer)) {
            clearTimeout(timer);
            timer = null;
        }
    };
    const throttle = (...args)=>{
        cancel();
        timer = setTimeout(()=>{
            timer = null;
            fn.apply(null, args);
        }, rate);
    };
    return {
        cancel,
        throttle
    };
};


}),
"../katamari/src/main/ts/ephox/katamari/api/Thunk.ts": 
/*!***********************************************************!*\
  !*** ../katamari/src/main/ts/ephox/katamari/api/Thunk.ts ***!
  \***********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  cached: () => (cached)
});
const cached = (f)=>{
    let called = false;
    let r;
    return (...args)=>{
        if (!called) {
            called = true;
            r = f.apply(null, args);
        }
        return r;
    };
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
"../sand/src/main/ts/ephox/sand/api/PlatformDetection.ts": 
/*!***************************************************************!*\
  !*** ../sand/src/main/ts/ephox/sand/api/PlatformDetection.ts ***!
  \***************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  detect: () => (detect),
  override: () => (override)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Thunk.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Optional.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Fun.ts");
/* ESM import */var _core_PlatformDetection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/PlatformDetection */ "../sand/src/main/ts/ephox/sand/core/PlatformDetection.ts");


const mediaMatch = (query)=>window.matchMedia(query).matches;
// IMPORTANT: Must be in a thunk, otherwise rollup thinks calling this immediately
// causes side effects and won't tree shake this away
// Note: navigator.userAgentData is not part of the native typescript types yet
let platform = _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.cached(()=>_core_PlatformDetection__WEBPACK_IMPORTED_MODULE_1__.PlatformDetection.detect(window.navigator.userAgent, _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.Optional.from(window.navigator.userAgentData), mediaMatch));
const detect = ()=>platform();
const override = (overrides)=>{
    platform = _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__.constant({
        ...detect(),
        ...overrides
    });
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
"../sand/src/main/ts/ephox/sand/core/Browser.ts": 
/*!******************************************************!*\
  !*** ../sand/src/main/ts/ephox/sand/core/Browser.ts ***!
  \******************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Browser: () => (Browser)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Fun.ts");
/* ESM import */var _detect_Version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../detect/Version */ "../sand/src/main/ts/ephox/sand/detect/Version.ts");


const edge = 'Edge';
const chromium = 'Chromium';
const ie = 'IE';
const opera = 'Opera';
const firefox = 'Firefox';
const safari = 'Safari';
const unknown = ()=>{
    return nu({
        current: undefined,
        version: _detect_Version__WEBPACK_IMPORTED_MODULE_0__.Version.unknown()
    });
};
const nu = (info)=>{
    const current = info.current;
    const version = info.version;
    const isBrowser = (name)=>()=>current === name;
    return {
        current,
        version,
        isEdge: isBrowser(edge),
        isChromium: isBrowser(chromium),
        // NOTE: isIe just looks too weird
        isIE: isBrowser(ie),
        isOpera: isBrowser(opera),
        isFirefox: isBrowser(firefox),
        isSafari: isBrowser(safari)
    };
};
const Browser = {
    unknown,
    nu,
    edge: _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.constant(edge),
    chromium: _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.constant(chromium),
    ie: _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.constant(ie),
    opera: _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.constant(opera),
    firefox: _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.constant(firefox),
    safari: _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.constant(safari)
};


}),
"../sand/src/main/ts/ephox/sand/core/OperatingSystem.ts": 
/*!**************************************************************!*\
  !*** ../sand/src/main/ts/ephox/sand/core/OperatingSystem.ts ***!
  \**************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  OperatingSystem: () => (OperatingSystem)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Fun.ts");
/* ESM import */var _detect_Version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../detect/Version */ "../sand/src/main/ts/ephox/sand/detect/Version.ts");


const windows = 'Windows';
const ios = 'iOS';
const android = 'Android';
const linux = 'Linux';
const macos = 'macOS';
const solaris = 'Solaris';
const freebsd = 'FreeBSD';
const chromeos = 'ChromeOS';
// Though there is a bit of dupe with this and Browser, trying to
// reuse code makes it much harder to follow and change.
const unknown = ()=>{
    return nu({
        current: undefined,
        version: _detect_Version__WEBPACK_IMPORTED_MODULE_0__.Version.unknown()
    });
};
const nu = (info)=>{
    const current = info.current;
    const version = info.version;
    const isOS = (name)=>()=>current === name;
    return {
        current,
        version,
        isWindows: isOS(windows),
        // TODO: Fix capitalisation
        isiOS: isOS(ios),
        isAndroid: isOS(android),
        isMacOS: isOS(macos),
        isLinux: isOS(linux),
        isSolaris: isOS(solaris),
        isFreeBSD: isOS(freebsd),
        isChromeOS: isOS(chromeos)
    };
};
const OperatingSystem = {
    unknown,
    nu,
    windows: _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.constant(windows),
    ios: _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.constant(ios),
    android: _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.constant(android),
    linux: _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.constant(linux),
    macos: _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.constant(macos),
    solaris: _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.constant(solaris),
    freebsd: _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.constant(freebsd),
    chromeos: _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.constant(chromeos)
};


}),
"../sand/src/main/ts/ephox/sand/core/PlatformDetection.ts": 
/*!****************************************************************!*\
  !*** ../sand/src/main/ts/ephox/sand/core/PlatformDetection.ts ***!
  \****************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PlatformDetection: () => (PlatformDetection)
});
/* ESM import */var _detect_DeviceType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../detect/DeviceType */ "../sand/src/main/ts/ephox/sand/detect/DeviceType.ts");
/* ESM import */var _detect_UaData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../detect/UaData */ "../sand/src/main/ts/ephox/sand/detect/UaData.ts");
/* ESM import */var _detect_UaString__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../detect/UaString */ "../sand/src/main/ts/ephox/sand/detect/UaString.ts");
/* ESM import */var _info_PlatformInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../info/PlatformInfo */ "../sand/src/main/ts/ephox/sand/info/PlatformInfo.ts");
/* ESM import */var _Browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Browser */ "../sand/src/main/ts/ephox/sand/core/Browser.ts");
/* ESM import */var _OperatingSystem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./OperatingSystem */ "../sand/src/main/ts/ephox/sand/core/OperatingSystem.ts");






const detect = (userAgent, userAgentDataOpt, mediaMatch)=>{
    const browsers = _info_PlatformInfo__WEBPACK_IMPORTED_MODULE_0__.PlatformInfo.browsers();
    const oses = _info_PlatformInfo__WEBPACK_IMPORTED_MODULE_0__.PlatformInfo.oses();
    const browser = userAgentDataOpt.bind((userAgentData)=>_detect_UaData__WEBPACK_IMPORTED_MODULE_1__.detectBrowser(browsers, userAgentData)).orThunk(()=>_detect_UaString__WEBPACK_IMPORTED_MODULE_2__.detectBrowser(browsers, userAgent)).fold(_Browser__WEBPACK_IMPORTED_MODULE_3__.Browser.unknown, _Browser__WEBPACK_IMPORTED_MODULE_3__.Browser.nu);
    const os = _detect_UaString__WEBPACK_IMPORTED_MODULE_2__.detectOs(oses, userAgent).fold(_OperatingSystem__WEBPACK_IMPORTED_MODULE_4__.OperatingSystem.unknown, _OperatingSystem__WEBPACK_IMPORTED_MODULE_4__.OperatingSystem.nu);
    const deviceType = (0,_detect_DeviceType__WEBPACK_IMPORTED_MODULE_5__.DeviceType)(os, browser, userAgent, mediaMatch);
    return {
        browser,
        os,
        deviceType
    };
};
const PlatformDetection = {
    detect
};


}),
"../sand/src/main/ts/ephox/sand/detect/DeviceType.ts": 
/*!***********************************************************!*\
  !*** ../sand/src/main/ts/ephox/sand/detect/DeviceType.ts ***!
  \***********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DeviceType: () => (DeviceType)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Fun.ts");

const DeviceType = (os, browser, userAgent, mediaMatch)=>{
    const isiPad = os.isiOS() && /ipad/i.test(userAgent) === true;
    const isiPhone = os.isiOS() && !isiPad;
    const isMobile = os.isiOS() || os.isAndroid();
    const isTouch = isMobile || mediaMatch('(pointer:coarse)');
    const isTablet = isiPad || !isiPhone && isMobile && mediaMatch('(min-device-width:768px)');
    const isPhone = isiPhone || isMobile && !isTablet;
    const iOSwebview = browser.isSafari() && os.isiOS() && /safari/i.test(userAgent) === false;
    const isDesktop = !isPhone && !isTablet && !iOSwebview;
    return {
        isiPad: _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.constant(isiPad),
        isiPhone: _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.constant(isiPhone),
        isTablet: _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.constant(isTablet),
        isPhone: _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.constant(isPhone),
        isTouch: _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.constant(isTouch),
        isAndroid: os.isAndroid,
        isiOS: os.isiOS,
        isWebView: _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.constant(iOSwebview),
        isDesktop: _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.constant(isDesktop)
    };
};


}),
"../sand/src/main/ts/ephox/sand/detect/UaData.ts": 
/*!*******************************************************!*\
  !*** ../sand/src/main/ts/ephox/sand/detect/UaData.ts ***!
  \*******************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  detectBrowser: () => (detectBrowser)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Arr.ts");
/* ESM import */var _Version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Version */ "../sand/src/main/ts/ephox/sand/detect/Version.ts");


const detectBrowser = (browsers, userAgentData)=>{
    return _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.findMap(userAgentData.brands, (uaBrand)=>{
        const lcBrand = uaBrand.brand.toLowerCase();
        return _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.find(browsers, (browser)=>lcBrand === browser.brand?.toLowerCase()).map((info)=>({
                current: info.name,
                version: _Version__WEBPACK_IMPORTED_MODULE_1__.Version.nu(parseInt(uaBrand.version, 10), 0)
            }));
    });
};



}),
"../sand/src/main/ts/ephox/sand/detect/UaString.ts": 
/*!*********************************************************!*\
  !*** ../sand/src/main/ts/ephox/sand/detect/UaString.ts ***!
  \*********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  detectBrowser: () => (detectBrowser),
  detectOs: () => (detectOs)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Arr.ts");
/* ESM import */var _Version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Version */ "../sand/src/main/ts/ephox/sand/detect/Version.ts");


const detect = (candidates, userAgent)=>{
    const agent = String(userAgent).toLowerCase();
    return _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.find(candidates, (candidate)=>{
        return candidate.search(agent);
    });
};
// They (browser and os) are the same at the moment, but they might
// not stay that way.
const detectBrowser = (browsers, userAgent)=>{
    return detect(browsers, userAgent).map((browser)=>{
        const version = _Version__WEBPACK_IMPORTED_MODULE_1__.Version.detect(browser.versionRegexes, userAgent);
        return {
            current: browser.name,
            version
        };
    });
};
const detectOs = (oses, userAgent)=>{
    return detect(oses, userAgent).map((os)=>{
        const version = _Version__WEBPACK_IMPORTED_MODULE_1__.Version.detect(os.versionRegexes, userAgent);
        return {
            current: os.name,
            version
        };
    });
};



}),
"../sand/src/main/ts/ephox/sand/detect/Version.ts": 
/*!********************************************************!*\
  !*** ../sand/src/main/ts/ephox/sand/detect/Version.ts ***!
  \********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Version: () => (Version)
});
const firstMatch = (regexes, s)=>{
    for(let i = 0; i < regexes.length; i++){
        const x = regexes[i];
        if (x.test(s)) {
            return x;
        }
    }
    return undefined;
};
const find = (regexes, agent)=>{
    const r = firstMatch(regexes, agent);
    if (!r) {
        return {
            major: 0,
            minor: 0
        };
    }
    const group = (i)=>{
        return Number(agent.replace(r, '$' + i));
    };
    return nu(group(1), group(2));
};
const detect = (versionRegexes, agent)=>{
    const cleanedAgent = String(agent).toLowerCase();
    if (versionRegexes.length === 0) {
        return unknown();
    }
    return find(versionRegexes, cleanedAgent);
};
const unknown = ()=>{
    return nu(0, 0);
};
const nu = (major, minor)=>{
    return {
        major,
        minor
    };
};
const Version = {
    nu,
    detect,
    unknown
};


}),
"../sand/src/main/ts/ephox/sand/info/PlatformInfo.ts": 
/*!***********************************************************!*\
  !*** ../sand/src/main/ts/ephox/sand/info/PlatformInfo.ts ***!
  \***********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PlatformInfo: () => (PlatformInfo)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Strings.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Fun.ts");

const normalVersionRegex = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/;
const checkContains = (target)=>{
    return (uastring)=>{
        return _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.contains(uastring, target);
    };
};
const browsers = [
    // This is legacy Edge
    {
        name: 'Edge',
        versionRegexes: [
            /.*?edge\/ ?([0-9]+)\.([0-9]+)$/
        ],
        search: (uastring)=>{
            return _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.contains(uastring, 'edge/') && _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.contains(uastring, 'chrome') && _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.contains(uastring, 'safari') && _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.contains(uastring, 'applewebkit');
        }
    },
    // This is Google Chrome and Chromium Edge
    {
        name: 'Chromium',
        brand: 'Chromium',
        versionRegexes: [
            /.*?chrome\/([0-9]+)\.([0-9]+).*/,
            normalVersionRegex
        ],
        search: (uastring)=>{
            return _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.contains(uastring, 'chrome') && !_ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.contains(uastring, 'chromeframe');
        }
    },
    {
        name: 'IE',
        versionRegexes: [
            /.*?msie\ ?([0-9]+)\.([0-9]+).*/,
            /.*?rv:([0-9]+)\.([0-9]+).*/
        ],
        search: (uastring)=>{
            return _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.contains(uastring, 'msie') || _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.contains(uastring, 'trident');
        }
    },
    // INVESTIGATE: Is this still the Opera user agent?
    {
        name: 'Opera',
        versionRegexes: [
            normalVersionRegex,
            /.*?opera\/([0-9]+)\.([0-9]+).*/
        ],
        search: checkContains('opera')
    },
    {
        name: 'Firefox',
        versionRegexes: [
            /.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/
        ],
        search: checkContains('firefox')
    },
    {
        name: 'Safari',
        versionRegexes: [
            normalVersionRegex,
            /.*?cpu os ([0-9]+)_([0-9]+).*/
        ],
        search: (uastring)=>{
            return (_ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.contains(uastring, 'safari') || _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.contains(uastring, 'mobile/')) && _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.contains(uastring, 'applewebkit');
        }
    }
];
const oses = [
    {
        name: 'Windows',
        search: checkContains('win'),
        versionRegexes: [
            /.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/
        ]
    },
    {
        name: 'iOS',
        search: (uastring)=>{
            return _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.contains(uastring, 'iphone') || _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.contains(uastring, 'ipad');
        },
        versionRegexes: [
            /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
            /.*cpu os ([0-9]+)_([0-9]+).*/,
            /.*cpu iphone os ([0-9]+)_([0-9]+).*/
        ]
    },
    {
        name: 'Android',
        search: checkContains('android'),
        versionRegexes: [
            /.*?android\ ?([0-9]+)\.([0-9]+).*/
        ]
    },
    {
        name: 'macOS',
        search: checkContains('mac os x'),
        versionRegexes: [
            /.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/
        ]
    },
    {
        name: 'Linux',
        search: checkContains('linux'),
        versionRegexes: []
    },
    {
        name: 'Solaris',
        search: checkContains('sunos'),
        versionRegexes: []
    },
    {
        name: 'FreeBSD',
        search: checkContains('freebsd'),
        versionRegexes: []
    },
    {
        name: 'ChromeOS',
        search: checkContains('cros'),
        versionRegexes: [
            /.*?chrome\/([0-9]+)\.([0-9]+).*/
        ]
    }
];
const PlatformInfo = {
    browsers: _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.constant(browsers),
    oses: _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.constant(oses)
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
"../sugar/src/main/ts/ephox/sugar/alien/Recurse.ts": 
/*!*********************************************************!*\
  !*** ../sugar/src/main/ts/ephox/sugar/alien/Recurse.ts ***!
  \*********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  toArray: () => (toArray)
});
/**
 * Applies f repeatedly until it completes (by returning Optional.none()).
 *
 * Normally would just use recursion, but JavaScript lacks tail call optimisation.
 *
 * This is what recursion looks like when manually unravelled :)
 */ const toArray = (target, f)=>{
    const r = [];
    const recurse = (e)=>{
        r.push(e);
        return f(e);
    };
    let cur = f(target);
    do {
        cur = cur.bind(recurse);
    }while (cur.isSome())
    return r;
};



}),
"../sugar/src/main/ts/ephox/sugar/api/dom/Compare.ts": 
/*!***********************************************************!*\
  !*** ../sugar/src/main/ts/ephox/sugar/api/dom/Compare.ts ***!
  \***********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  contains: () => (contains),
  eq: () => (eq),
  is: () => (is),
  isEqualNode: () => (isEqualNode),
  member: () => (member)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Arr.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Fun.ts");
/* ESM import */var _search_Selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search/Selectors */ "../sugar/src/main/ts/ephox/sugar/api/search/Selectors.ts");


const eq = (e1, e2)=>e1.dom === e2.dom;
const isEqualNode = (e1, e2)=>e1.dom.isEqualNode(e2.dom);
const member = (element, elements)=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.exists(elements, _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.curry(eq, element));
// Returns: true if node e1 contains e2, otherwise false.
// (returns false if e1===e2: A node does not contain itself).
const contains = (e1, e2)=>{
    const d1 = e1.dom;
    const d2 = e2.dom;
    return d1 === d2 ? false : d1.contains(d2);
};
const is = _search_Selectors__WEBPACK_IMPORTED_MODULE_2__.is;



}),
"../sugar/src/main/ts/ephox/sugar/api/dom/Insert.ts": 
/*!**********************************************************!*\
  !*** ../sugar/src/main/ts/ephox/sugar/api/dom/Insert.ts ***!
  \**********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  after: () => (after),
  append: () => (append),
  appendAt: () => (appendAt),
  before: () => (before),
  prepend: () => (prepend),
  wrap: () => (wrap)
});
/* ESM import */var _search_Traverse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../search/Traverse */ "../sugar/src/main/ts/ephox/sugar/api/search/Traverse.ts");

const before = (marker, element)=>{
    const parent = _search_Traverse__WEBPACK_IMPORTED_MODULE_0__.parent(marker);
    parent.each((v)=>{
        v.dom.insertBefore(element.dom, marker.dom);
    });
};
const after = (marker, element)=>{
    const sibling = _search_Traverse__WEBPACK_IMPORTED_MODULE_0__.nextSibling(marker);
    sibling.fold(()=>{
        const parent = _search_Traverse__WEBPACK_IMPORTED_MODULE_0__.parent(marker);
        parent.each((v)=>{
            append(v, element);
        });
    }, (v)=>{
        before(v, element);
    });
};
const prepend = (parent, element)=>{
    const firstChild = _search_Traverse__WEBPACK_IMPORTED_MODULE_0__.firstChild(parent);
    firstChild.fold(()=>{
        append(parent, element);
    }, (v)=>{
        parent.dom.insertBefore(element.dom, v.dom);
    });
};
const append = (parent, element)=>{
    parent.dom.appendChild(element.dom);
};
const appendAt = (parent, element, index)=>{
    _search_Traverse__WEBPACK_IMPORTED_MODULE_0__.child(parent, index).fold(()=>{
        append(parent, element);
    }, (v)=>{
        before(v, element);
    });
};
const wrap = (element, wrapper)=>{
    before(element, wrapper);
    append(wrapper, element);
};



}),
"../sugar/src/main/ts/ephox/sugar/api/dom/InsertAll.ts": 
/*!*************************************************************!*\
  !*** ../sugar/src/main/ts/ephox/sugar/api/dom/InsertAll.ts ***!
  \*************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  after: () => (after),
  append: () => (append),
  before: () => (before),
  prepend: () => (prepend)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Arr.ts");
/* ESM import */var _Insert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Insert */ "../sugar/src/main/ts/ephox/sugar/api/dom/Insert.ts");


const before = (marker, elements)=>{
    _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.each(elements, (x)=>{
        _Insert__WEBPACK_IMPORTED_MODULE_1__.before(marker, x);
    });
};
const after = (marker, elements)=>{
    _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.each(elements, (x, i)=>{
        const e = i === 0 ? marker : elements[i - 1];
        _Insert__WEBPACK_IMPORTED_MODULE_1__.after(e, x);
    });
};
const prepend = (parent, elements)=>{
    _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.each(elements.slice().reverse(), (x)=>{
        _Insert__WEBPACK_IMPORTED_MODULE_1__.prepend(parent, x);
    });
};
const append = (parent, elements)=>{
    _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.each(elements, (x)=>{
        _Insert__WEBPACK_IMPORTED_MODULE_1__.append(parent, x);
    });
};



}),
"../sugar/src/main/ts/ephox/sugar/api/dom/Remove.ts": 
/*!**********************************************************!*\
  !*** ../sugar/src/main/ts/ephox/sugar/api/dom/Remove.ts ***!
  \**********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  empty: () => (empty),
  remove: () => (remove),
  unwrap: () => (unwrap)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Arr.ts");
/* ESM import */var _search_Traverse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../search/Traverse */ "../sugar/src/main/ts/ephox/sugar/api/search/Traverse.ts");
/* ESM import */var _InsertAll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InsertAll */ "../sugar/src/main/ts/ephox/sugar/api/dom/InsertAll.ts");



const empty = (element)=>{
    // shortcut "empty node" trick. Requires IE 9.
    element.dom.textContent = '';
    // If the contents was a single empty text node, the above doesn't remove it. But, it's still faster in general
    // than removing every child node manually.
    // The following is (probably) safe for performance as 99.9% of the time the trick works and
    // Traverse.children will return an empty array.
    _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.each(_search_Traverse__WEBPACK_IMPORTED_MODULE_1__.children(element), (rogue)=>{
        remove(rogue);
    });
};
const remove = (element)=>{
    const dom = element.dom;
    if (dom.parentNode !== null) {
        dom.parentNode.removeChild(dom);
    }
};
const unwrap = (wrapper)=>{
    const children = _search_Traverse__WEBPACK_IMPORTED_MODULE_1__.children(wrapper);
    if (children.length > 0) {
        _InsertAll__WEBPACK_IMPORTED_MODULE_2__.after(wrapper, children);
    }
    remove(wrapper);
};



}),
"../sugar/src/main/ts/ephox/sugar/api/events/DomEvent.ts": 
/*!***************************************************************!*\
  !*** ../sugar/src/main/ts/ephox/sugar/api/events/DomEvent.ts ***!
  \***************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  bind: () => (bind),
  capture: () => (capture),
  fromRawEvent: () => (fromRawEvent)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Fun.ts");
/* ESM import */var _impl_FilteredEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../impl/FilteredEvent */ "../sugar/src/main/ts/ephox/sugar/impl/FilteredEvent.ts");


const filter = _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.always; // no filter on plain DomEvents
const bind = (element, event, handler)=>_impl_FilteredEvent__WEBPACK_IMPORTED_MODULE_1__.bind(element, event, filter, handler);
const capture = (element, event, handler)=>_impl_FilteredEvent__WEBPACK_IMPORTED_MODULE_1__.capture(element, event, filter, handler);
const fromRawEvent = _impl_FilteredEvent__WEBPACK_IMPORTED_MODULE_1__.fromRawEvent;



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
"../sugar/src/main/ts/ephox/sugar/api/node/SugarBody.ts": 
/*!**************************************************************!*\
  !*** ../sugar/src/main/ts/ephox/sugar/api/node/SugarBody.ts ***!
  \**************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  body: () => (body),
  getBody: () => (getBody),
  inBody: () => (inBody)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Fun.ts");
/* ESM import */var _SugarElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SugarElement */ "../sugar/src/main/ts/ephox/sugar/api/node/SugarElement.ts");
/* ESM import */var _SugarNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SugarNode */ "../sugar/src/main/ts/ephox/sugar/api/node/SugarNode.ts");
/* ESM import */var _SugarShadowDom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SugarShadowDom */ "../sugar/src/main/ts/ephox/sugar/api/node/SugarShadowDom.ts");




// Node.contains() is very, very, very good performance
// http://jsperf.com/closest-vs-contains/5
const inBody = (element)=>{
    // Technically this is only required on IE, where contains() returns false for text nodes.
    // But it's cheap enough to run everywhere and Sugar doesn't have platform detection (yet).
    const dom = _SugarNode__WEBPACK_IMPORTED_MODULE_0__.isText(element) ? element.dom.parentNode : element.dom;
    // use ownerDocument.body to ensure this works inside iframes.
    // Normally contains is bad because an element "contains" itself, but here we want that.
    if (dom === undefined || dom === null || dom.ownerDocument === null) {
        return false;
    }
    const doc = dom.ownerDocument;
    return (0,_SugarShadowDom__WEBPACK_IMPORTED_MODULE_1__.getShadowRoot)(_SugarElement__WEBPACK_IMPORTED_MODULE_2__.SugarElement.fromDom(dom)).fold(()=>doc.body.contains(dom), _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__.compose1(inBody, _SugarShadowDom__WEBPACK_IMPORTED_MODULE_1__.getShadowHost));
};
const body = ()=>getBody(_SugarElement__WEBPACK_IMPORTED_MODULE_2__.SugarElement.fromDom(document));
const getBody = (doc)=>{
    const b = doc.dom.body;
    if (b === null || b === undefined) {
        throw new Error('Body is not available yet');
    }
    return _SugarElement__WEBPACK_IMPORTED_MODULE_2__.SugarElement.fromDom(b);
};



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
"../sugar/src/main/ts/ephox/sugar/api/node/SugarHead.ts": 
/*!**************************************************************!*\
  !*** ../sugar/src/main/ts/ephox/sugar/api/node/SugarHead.ts ***!
  \**************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getHead: () => (getHead),
  head: () => (head)
});
/* ESM import */var _SugarElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SugarElement */ "../sugar/src/main/ts/ephox/sugar/api/node/SugarElement.ts");

const head = ()=>getHead(_SugarElement__WEBPACK_IMPORTED_MODULE_0__.SugarElement.fromDom(document));
const getHead = (doc)=>{
    /*
   * IE9 and above per
   * https://developer.mozilla.org/en-US/docs/Web/API/Document/head
   */ const b = doc.dom.head;
    if (b === null || b === undefined) {
        throw new Error('Head is not available yet');
    }
    return _SugarElement__WEBPACK_IMPORTED_MODULE_0__.SugarElement.fromDom(b);
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
"../sugar/src/main/ts/ephox/sugar/api/node/SugarShadowDom.ts": 
/*!*******************************************************************!*\
  !*** ../sugar/src/main/ts/ephox/sugar/api/node/SugarShadowDom.ts ***!
  \*******************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createElement: () => (createElement),
  getContentContainer: () => (getContentContainer),
  getOriginalEventTarget: () => (getOriginalEventTarget),
  getRootNode: () => (getRootNode),
  getShadowHost: () => (getShadowHost),
  getShadowRoot: () => (getShadowRoot),
  getStyleContainer: () => (getStyleContainer),
  isClosedShadowRoot: () => (isClosedShadowRoot),
  isInShadowRoot: () => (isInShadowRoot),
  isOpenShadowHost: () => (isOpenShadowHost),
  isOpenShadowRoot: () => (isOpenShadowRoot),
  isShadowRoot: () => (isShadowRoot)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Type.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Optional.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Arr.ts");
/* ESM import */var _search_Traverse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../search/Traverse */ "../sugar/src/main/ts/ephox/sugar/api/search/Traverse.ts");
/* ESM import */var _SugarElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SugarElement */ "../sugar/src/main/ts/ephox/sugar/api/node/SugarElement.ts");
/* ESM import */var _SugarHead__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SugarHead */ "../sugar/src/main/ts/ephox/sugar/api/node/SugarHead.ts");
/* ESM import */var _SugarNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SugarNode */ "../sugar/src/main/ts/ephox/sugar/api/node/SugarNode.ts");





/**
 * Is the element a ShadowRoot?
 *
 * Note: this is insufficient to test if any element is a shadow root, but it is sufficient to differentiate between
 * a Document and a ShadowRoot.
 */ const isShadowRoot = (dos)=>_SugarNode__WEBPACK_IMPORTED_MODULE_0__.isDocumentFragment(dos) && _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.isNonNullable(dos.dom.host);
const getRootNode = (e)=>_SugarElement__WEBPACK_IMPORTED_MODULE_2__.SugarElement.fromDom(e.dom.getRootNode());
/** Create an element, using the actual document. */ const createElement = (dos, tag)=>_SugarElement__WEBPACK_IMPORTED_MODULE_2__.SugarElement.fromTag(tag, _search_Traverse__WEBPACK_IMPORTED_MODULE_3__.documentOrOwner(dos).dom);
/** Where style tags need to go. ShadowRoot or document head */ const getStyleContainer = (dos)=>isShadowRoot(dos) ? dos : _SugarHead__WEBPACK_IMPORTED_MODULE_4__.getHead(_search_Traverse__WEBPACK_IMPORTED_MODULE_3__.documentOrOwner(dos));
/** Where content needs to go. ShadowRoot or document body */ const getContentContainer = (dos)=>// Can't use SugarBody.body without causing a circular module reference (since SugarBody.inBody uses SugarShadowDom)
    isShadowRoot(dos) ? dos : _SugarElement__WEBPACK_IMPORTED_MODULE_2__.SugarElement.fromDom(_search_Traverse__WEBPACK_IMPORTED_MODULE_3__.documentOrOwner(dos).dom.body);
/** Is this element either a ShadowRoot or a descendent of a ShadowRoot. */ const isInShadowRoot = (e)=>getShadowRoot(e).isSome();
/** If this element is in a ShadowRoot, return it. */ const getShadowRoot = (e)=>{
    const r = getRootNode(e);
    return isShadowRoot(r) ? _ephox_katamari__WEBPACK_IMPORTED_MODULE_5__.Optional.some(r) : _ephox_katamari__WEBPACK_IMPORTED_MODULE_5__.Optional.none();
};
/** Return the host of a ShadowRoot.
 *
 * This function will throw if Shadow DOM is unsupported in the browser, or if the host is null.
 * If you actually have a ShadowRoot, this shouldn't happen.
 */ const getShadowHost = (e)=>_SugarElement__WEBPACK_IMPORTED_MODULE_2__.SugarElement.fromDom(e.dom.host);
/**
 * When Events bubble up through a ShadowRoot, the browser changes the target to be the shadow host.
 * This function gets the "original" event target if possible.
 * This only works if the shadow tree is open - if the shadow tree is closed, event.target is returned.
 * See: https://developers.google.com/web/fundamentals/web-components/shadowdom#events
 */ const getOriginalEventTarget = (event)=>{
    if (_ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.isNonNullable(event.target)) {
        const el = _SugarElement__WEBPACK_IMPORTED_MODULE_2__.SugarElement.fromDom(event.target);
        if (_SugarNode__WEBPACK_IMPORTED_MODULE_0__.isElement(el) && isOpenShadowHost(el)) {
            // When target element is inside Shadow DOM we need to take first element from composedPath
            // otherwise we'll get Shadow Root parent, not actual target element.
            if (event.composed && event.composedPath) {
                const composedPath = event.composedPath();
                if (composedPath) {
                    return _ephox_katamari__WEBPACK_IMPORTED_MODULE_6__.head(composedPath);
                }
            }
        }
    }
    return _ephox_katamari__WEBPACK_IMPORTED_MODULE_5__.Optional.from(event.target);
};
const isOpenShadowRoot = (sr)=>sr.dom.mode === 'open';
const isClosedShadowRoot = (sr)=>sr.dom.mode === 'closed';
/** Return true if the element is a host of an open shadow root.
 *  Return false if the element is a host of a closed shadow root, or if the element is not a host.
 */ const isOpenShadowHost = (element)=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.isNonNullable(element.dom.shadowRoot);


}),
"../sugar/src/main/ts/ephox/sugar/api/properties/AttrList.ts": 
/*!*******************************************************************!*\
  !*** ../sugar/src/main/ts/ephox/sugar/api/properties/AttrList.ts ***!
  \*******************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  add: () => (add),
  read: () => (read),
  remove: () => (remove)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Arr.ts");
/* ESM import */var _Attribute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Attribute */ "../sugar/src/main/ts/ephox/sugar/api/properties/Attribute.ts");


// Methods for handling attributes that contain a list of values <div foo="alpha beta theta">
const read = (element, attr)=>{
    const value = _Attribute__WEBPACK_IMPORTED_MODULE_0__.get(element, attr);
    return value === undefined || value === '' ? [] : value.split(' ');
};
const add = (element, attr, id)=>{
    const old = read(element, attr);
    const nu = old.concat([
        id
    ]);
    _Attribute__WEBPACK_IMPORTED_MODULE_0__.set(element, attr, nu.join(' '));
    return true;
};
const remove = (element, attr, id)=>{
    const nu = _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.filter(read(element, attr), (v)=>v !== id);
    if (nu.length > 0) {
        _Attribute__WEBPACK_IMPORTED_MODULE_0__.set(element, attr, nu.join(' '));
    } else {
        _Attribute__WEBPACK_IMPORTED_MODULE_0__.remove(element, attr);
    }
    return false;
};



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
"../sugar/src/main/ts/ephox/sugar/api/properties/Class.ts": 
/*!****************************************************************!*\
  !*** ../sugar/src/main/ts/ephox/sugar/api/properties/Class.ts ***!
  \****************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  add: () => (add),
  has: () => (has),
  remove: () => (remove),
  toggle: () => (toggle),
  toggler: () => (toggler)
});
/* ESM import */var _impl_ClassList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../impl/ClassList */ "../sugar/src/main/ts/ephox/sugar/impl/ClassList.ts");
/* ESM import */var _Attribute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Attribute */ "../sugar/src/main/ts/ephox/sugar/api/properties/Attribute.ts");
/* ESM import */var _Toggler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Toggler */ "../sugar/src/main/ts/ephox/sugar/api/properties/Toggler.ts");



/*
 * ClassList is IE10 minimum:
 * https://developer.mozilla.org/en-US/docs/Web/API/Element.classList
 *
 * Note that IE doesn't support the second argument to toggle (at all).
 * If it did, the toggler could be better.
 */ const add = (element, clazz)=>{
    if (_impl_ClassList__WEBPACK_IMPORTED_MODULE_0__.supports(element)) {
        element.dom.classList.add(clazz);
    } else {
        _impl_ClassList__WEBPACK_IMPORTED_MODULE_0__.add(element, clazz);
    }
};
const cleanClass = (element)=>{
    const classList = _impl_ClassList__WEBPACK_IMPORTED_MODULE_0__.supports(element) ? element.dom.classList : _impl_ClassList__WEBPACK_IMPORTED_MODULE_0__.get(element);
    // classList is a "live list", so this is up to date already
    if (classList.length === 0) {
        // No more classes left, remove the class attribute as well
        _Attribute__WEBPACK_IMPORTED_MODULE_1__.remove(element, 'class');
    }
};
const remove = (element, clazz)=>{
    if (_impl_ClassList__WEBPACK_IMPORTED_MODULE_0__.supports(element)) {
        const classList = element.dom.classList;
        classList.remove(clazz);
    } else {
        _impl_ClassList__WEBPACK_IMPORTED_MODULE_0__.remove(element, clazz);
    }
    cleanClass(element);
};
const toggle = (element, clazz)=>{
    const result = _impl_ClassList__WEBPACK_IMPORTED_MODULE_0__.supports(element) ? element.dom.classList.toggle(clazz) : _impl_ClassList__WEBPACK_IMPORTED_MODULE_0__.toggle(element, clazz);
    cleanClass(element);
    return result;
};
const toggler = (element, clazz)=>{
    const hasClasslist = _impl_ClassList__WEBPACK_IMPORTED_MODULE_0__.supports(element);
    const classList = element.dom.classList;
    const off = ()=>{
        if (hasClasslist) {
            classList.remove(clazz);
        } else {
            _impl_ClassList__WEBPACK_IMPORTED_MODULE_0__.remove(element, clazz);
        }
        cleanClass(element);
    };
    const on = ()=>{
        if (hasClasslist) {
            classList.add(clazz);
        } else {
            _impl_ClassList__WEBPACK_IMPORTED_MODULE_0__.add(element, clazz);
        }
    };
    return (0,_Toggler__WEBPACK_IMPORTED_MODULE_2__.Toggler)(off, on, has(element, clazz));
};
const has = (element, clazz)=>_impl_ClassList__WEBPACK_IMPORTED_MODULE_0__.supports(element) && element.dom.classList.contains(clazz);



}),
"../sugar/src/main/ts/ephox/sugar/api/properties/Css.ts": 
/*!**************************************************************!*\
  !*** ../sugar/src/main/ts/ephox/sugar/api/properties/Css.ts ***!
  \**************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  copy: () => (copy),
  get: () => (get),
  getAllRaw: () => (getAllRaw),
  getRaw: () => (getRaw),
  isValidValue: () => (isValidValue),
  preserve: () => (preserve),
  reflow: () => (reflow),
  remove: () => (remove),
  set: () => (set),
  setAll: () => (setAll),
  setOptions: () => (setOptions),
  transfer: () => (transfer)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Type.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Obj.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Optional.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Optionals.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Strings.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Arr.ts");
/* ESM import */var _impl_Style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../impl/Style */ "../sugar/src/main/ts/ephox/sugar/impl/Style.ts");
/* ESM import */var _node_SugarBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node/SugarBody */ "../sugar/src/main/ts/ephox/sugar/api/node/SugarBody.ts");
/* ESM import */var _node_SugarElement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../node/SugarElement */ "../sugar/src/main/ts/ephox/sugar/api/node/SugarElement.ts");
/* ESM import */var _node_SugarNode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../node/SugarNode */ "../sugar/src/main/ts/ephox/sugar/api/node/SugarNode.ts");
/* ESM import */var _Attribute__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Attribute */ "../sugar/src/main/ts/ephox/sugar/api/properties/Attribute.ts");






const internalSet = (dom, property, value)=>{
    // This is going to hurt. Apologies.
    // JQuery coerces numbers to pixels for certain property names, and other times lets numbers through.
    // we're going to be explicit; strings only.
    if (!_ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.isString(value)) {
        // eslint-disable-next-line no-console
        console.error('Invalid call to CSS.set. Property ', property, ':: Value ', value, ':: Element ', dom);
        throw new Error('CSS value must be a string: ' + value);
    }
    // removed: support for dom().style[property] where prop is camel case instead of normal property name
    if (_impl_Style__WEBPACK_IMPORTED_MODULE_1__.isSupported(dom)) {
        dom.style.setProperty(property, value);
    }
};
const internalRemove = (dom, property)=>{
    /*
   * IE9 and above - MDN doesn't have details, but here's a couple of random internet claims
   *
   * http://help.dottoro.com/ljopsjck.php
   * http://stackoverflow.com/a/7901886/7546
   */ if (_impl_Style__WEBPACK_IMPORTED_MODULE_1__.isSupported(dom)) {
        dom.style.removeProperty(property);
    }
};
const set = (element, property, value)=>{
    const dom = element.dom;
    internalSet(dom, property, value);
};
const setAll = (element, css)=>{
    const dom = element.dom;
    _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.each(css, (v, k)=>{
        internalSet(dom, k, v);
    });
};
const setOptions = (element, css)=>{
    const dom = element.dom;
    _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.each(css, (v, k)=>{
        v.fold(()=>{
            internalRemove(dom, k);
        }, (value)=>{
            internalSet(dom, k, value);
        });
    });
};
/*
 * NOTE: For certain properties, this returns the "used value" which is subtly different to the "computed value" (despite calling getComputedStyle).
 * Blame CSS 2.0.
 *
 * https://developer.mozilla.org/en-US/docs/Web/CSS/used_value
 */ const get = (element, property)=>{
    const dom = element.dom;
    /*
   * IE9 and above per
   * https://developer.mozilla.org/en/docs/Web/API/window.getComputedStyle
   *
   * Not in numerosity, because it doesn't memoize and looking this up dynamically in performance critical code would be horrendous.
   *
   * JQuery has some magic here for IE popups, but we don't really need that.
   * It also uses element.ownerDocument.defaultView to handle iframes but that hasn't been required since FF 3.6.
   */ const styles = window.getComputedStyle(dom);
    const r = styles.getPropertyValue(property);
    // jquery-ism: If r is an empty string, check that the element is not in a document. If it isn't, return the raw value.
    // Turns out we do this a lot.
    return r === '' && !_node_SugarBody__WEBPACK_IMPORTED_MODULE_3__.inBody(element) ? getUnsafeProperty(dom, property) : r;
};
// removed: support for dom().style[property] where prop is camel case instead of normal property name
// empty string is what the browsers (IE11 and Chrome) return when the propertyValue doesn't exists.
const getUnsafeProperty = (dom, property)=>_impl_Style__WEBPACK_IMPORTED_MODULE_1__.isSupported(dom) ? dom.style.getPropertyValue(property) : '';
/*
 * Gets the raw value from the style attribute. Useful for retrieving "used values" from the DOM:
 * https://developer.mozilla.org/en-US/docs/Web/CSS/used_value
 *
 * Returns NONE if the property isn't set, or the value is an empty string.
 */ const getRaw = (element, property)=>{
    const dom = element.dom;
    const raw = getUnsafeProperty(dom, property);
    return _ephox_katamari__WEBPACK_IMPORTED_MODULE_4__.Optional.from(raw).filter((r)=>r.length > 0);
};
const getAllRaw = (element)=>{
    const css = {};
    const dom = element.dom;
    if (_impl_Style__WEBPACK_IMPORTED_MODULE_1__.isSupported(dom)) {
        for(let i = 0; i < dom.style.length; i++){
            const ruleName = dom.style.item(i);
            css[ruleName] = dom.style[ruleName];
        }
    }
    return css;
};
const isValidValue = (tag, property, value)=>{
    const element = _node_SugarElement__WEBPACK_IMPORTED_MODULE_5__.SugarElement.fromTag(tag);
    set(element, property, value);
    const style = getRaw(element, property);
    return style.isSome();
};
const remove = (element, property)=>{
    const dom = element.dom;
    internalRemove(dom, property);
    if (_ephox_katamari__WEBPACK_IMPORTED_MODULE_6__.is(_Attribute__WEBPACK_IMPORTED_MODULE_7__.getOpt(element, 'style').map(_ephox_katamari__WEBPACK_IMPORTED_MODULE_8__.trim), '')) {
        // No more styles left, remove the style attribute as well
        _Attribute__WEBPACK_IMPORTED_MODULE_7__.remove(element, 'style');
    }
};
const preserve = (element, f)=>{
    const oldStyles = _Attribute__WEBPACK_IMPORTED_MODULE_7__.get(element, 'style');
    const result = f(element);
    if (oldStyles === undefined) {
        _Attribute__WEBPACK_IMPORTED_MODULE_7__.remove(element, 'style');
    } else {
        _Attribute__WEBPACK_IMPORTED_MODULE_7__.set(element, 'style', oldStyles);
    }
    return result;
};
const copy = (source, target)=>{
    const sourceDom = source.dom;
    const targetDom = target.dom;
    if (_impl_Style__WEBPACK_IMPORTED_MODULE_1__.isSupported(sourceDom) && _impl_Style__WEBPACK_IMPORTED_MODULE_1__.isSupported(targetDom)) {
        targetDom.style.cssText = sourceDom.style.cssText;
    }
};
/* NOTE: This function is here for the side effect it triggers.
The value itself is not used.
Be sure to not use the return value, and that it is not removed by a minifier.
 */ const reflow = (e)=>e.dom.offsetWidth;
const transferOne = (source, destination, style)=>{
    getRaw(source, style).each((value)=>{
        // NOTE: We don't want to clobber any existing inline styles.
        if (getRaw(destination, style).isNone()) {
            set(destination, style, value);
        }
    });
};
const transfer = (source, destination, styles)=>{
    if (!_node_SugarNode__WEBPACK_IMPORTED_MODULE_9__.isElement(source) || !_node_SugarNode__WEBPACK_IMPORTED_MODULE_9__.isElement(destination)) {
        return;
    }
    _ephox_katamari__WEBPACK_IMPORTED_MODULE_10__.each(styles, (style)=>{
        transferOne(source, destination, style);
    });
};



}),
"../sugar/src/main/ts/ephox/sugar/api/properties/Toggler.ts": 
/*!******************************************************************!*\
  !*** ../sugar/src/main/ts/ephox/sugar/api/properties/Toggler.ts ***!
  \******************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Toggler: () => (Toggler)
});
const Toggler = (turnOff, turnOn, initial)=>{
    let active = initial || false;
    const on = ()=>{
        turnOn();
        active = true;
    };
    const off = ()=>{
        turnOff();
        active = false;
    };
    const toggle = ()=>{
        const f = active ? off : on;
        f();
    };
    const isOn = ()=>active;
    return {
        on,
        off,
        toggle,
        isOn
    };
};


}),
"../sugar/src/main/ts/ephox/sugar/api/search/PredicateFilter.ts": 
/*!**********************************************************************!*\
  !*** ../sugar/src/main/ts/ephox/sugar/api/search/PredicateFilter.ts ***!
  \**********************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  all: () => (all),
  ancestors: () => (ancestors),
  children: () => (children),
  descendants: () => (descendants),
  siblings: () => (siblings)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Arr.ts");
/* ESM import */var _node_SugarBody__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node/SugarBody */ "../sugar/src/main/ts/ephox/sugar/api/node/SugarBody.ts");
/* ESM import */var _Traverse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Traverse */ "../sugar/src/main/ts/ephox/sugar/api/search/Traverse.ts");



// maybe TraverseWith, similar to traverse but with a predicate?
const all = (predicate)=>descendants(_node_SugarBody__WEBPACK_IMPORTED_MODULE_0__.body(), predicate);
const ancestors = (scope, predicate, isRoot)=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.filter(_Traverse__WEBPACK_IMPORTED_MODULE_2__.parents(scope, isRoot), predicate);
const siblings = (scope, predicate)=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.filter(_Traverse__WEBPACK_IMPORTED_MODULE_2__.siblings(scope), predicate);
const children = (scope, predicate)=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.filter(_Traverse__WEBPACK_IMPORTED_MODULE_2__.children(scope), predicate);
const descendants = (scope, predicate)=>{
    let result = [];
    // Recurse.toArray() might help here
    _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.each(_Traverse__WEBPACK_IMPORTED_MODULE_2__.children(scope), (x)=>{
        if (predicate(x)) {
            result = result.concat([
                x
            ]);
        }
        result = result.concat(descendants(x, predicate));
    });
    return result;
};



}),
"../sugar/src/main/ts/ephox/sugar/api/search/SelectorFilter.ts": 
/*!*********************************************************************!*\
  !*** ../sugar/src/main/ts/ephox/sugar/api/search/SelectorFilter.ts ***!
  \*********************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  all: () => (all),
  ancestors: () => (ancestors),
  children: () => (children),
  descendants: () => (descendants),
  siblings: () => (siblings)
});
/* ESM import */var _PredicateFilter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PredicateFilter */ "../sugar/src/main/ts/ephox/sugar/api/search/PredicateFilter.ts");
/* ESM import */var _Selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Selectors */ "../sugar/src/main/ts/ephox/sugar/api/search/Selectors.ts");


const all = (selector)=>_Selectors__WEBPACK_IMPORTED_MODULE_0__.all(selector);
// For all of the following:
//
// jQuery does siblings of firstChild. IE9+ supports scope.dom.children (similar to Traverse.children but elements only).
// Traverse should also do this (but probably not by default).
//
const ancestors = (scope, selector, isRoot)=>// It may surprise you to learn this is exactly what JQuery does
    // TODO: Avoid all this wrapping and unwrapping
    _PredicateFilter__WEBPACK_IMPORTED_MODULE_1__.ancestors(scope, (e)=>_Selectors__WEBPACK_IMPORTED_MODULE_0__.is(e, selector), isRoot);
const siblings = (scope, selector)=>// It may surprise you to learn this is exactly what JQuery does
    // TODO: Avoid all the wrapping and unwrapping
    _PredicateFilter__WEBPACK_IMPORTED_MODULE_1__.siblings(scope, (e)=>_Selectors__WEBPACK_IMPORTED_MODULE_0__.is(e, selector));
const children = (scope, selector)=>// It may surprise you to learn this is exactly what JQuery does
    // TODO: Avoid all the wrapping and unwrapping
    _PredicateFilter__WEBPACK_IMPORTED_MODULE_1__.children(scope, (e)=>_Selectors__WEBPACK_IMPORTED_MODULE_0__.is(e, selector));
const descendants = (scope, selector)=>_Selectors__WEBPACK_IMPORTED_MODULE_0__.all(selector, scope);



}),
"../sugar/src/main/ts/ephox/sugar/api/search/Selectors.ts": 
/*!****************************************************************!*\
  !*** ../sugar/src/main/ts/ephox/sugar/api/search/Selectors.ts ***!
  \****************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  all: () => (all),
  is: () => (is),
  one: () => (one)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Arr.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Optional.ts");
/* ESM import */var _node_NodeTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node/NodeTypes */ "../sugar/src/main/ts/ephox/sugar/api/node/NodeTypes.ts");
/* ESM import */var _node_SugarElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node/SugarElement */ "../sugar/src/main/ts/ephox/sugar/api/node/SugarElement.ts");



const is = (element, selector)=>{
    const dom = element.dom;
    if (dom.nodeType !== _node_NodeTypes__WEBPACK_IMPORTED_MODULE_0__.ELEMENT) {
        return false;
    } else {
        const elem = dom;
        if (elem.matches !== undefined) {
            return elem.matches(selector);
        } else if (elem.msMatchesSelector !== undefined) {
            return elem.msMatchesSelector(selector);
        } else if (elem.webkitMatchesSelector !== undefined) {
            return elem.webkitMatchesSelector(selector);
        } else if (elem.mozMatchesSelector !== undefined) {
            // cast to any as mozMatchesSelector doesn't exist in TS DOM lib
            return elem.mozMatchesSelector(selector);
        } else {
            throw new Error('Browser lacks native selectors');
        } // unfortunately we can't throw this on startup :(
    }
};
const bypassSelector = (dom)=>// Only elements, documents and shadow roots support querySelector
    // shadow root element type is DOCUMENT_FRAGMENT
    dom.nodeType !== _node_NodeTypes__WEBPACK_IMPORTED_MODULE_0__.ELEMENT && dom.nodeType !== _node_NodeTypes__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT && dom.nodeType !== _node_NodeTypes__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT_FRAGMENT || // IE fix for complex queries on empty nodes: http://jsfiddle.net/spyder/fv9ptr5L/
    dom.childElementCount === 0;
const all = (selector, scope)=>{
    const base = scope === undefined ? document : scope.dom;
    return bypassSelector(base) ? [] : _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.map(base.querySelectorAll(selector), _node_SugarElement__WEBPACK_IMPORTED_MODULE_2__.SugarElement.fromDom);
};
const one = (selector, scope)=>{
    const base = scope === undefined ? document : scope.dom;
    return bypassSelector(base) ? _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__.Optional.none() : _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__.Optional.from(base.querySelector(selector)).map(_node_SugarElement__WEBPACK_IMPORTED_MODULE_2__.SugarElement.fromDom);
};



}),
"../sugar/src/main/ts/ephox/sugar/api/search/Traverse.ts": 
/*!***************************************************************!*\
  !*** ../sugar/src/main/ts/ephox/sugar/api/search/Traverse.ts ***!
  \***************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  child: () => (child),
  childNodesCount: () => (childNodesCount),
  children: () => (children),
  defaultView: () => (defaultView),
  documentElement: () => (documentElement),
  documentOrOwner: () => (documentOrOwner),
  findIndex: () => (findIndex),
  firstChild: () => (firstChild),
  hasChildNodes: () => (hasChildNodes),
  lastChild: () => (lastChild),
  leaf: () => (leaf),
  nextSibling: () => (nextSibling),
  nextSiblings: () => (nextSiblings),
  offsetParent: () => (offsetParent),
  owner: () => (owner),
  parent: () => (parent),
  parentElement: () => (parentElement),
  parentNode: () => (parentNode),
  parents: () => (parents),
  prevSibling: () => (prevSibling),
  prevSiblings: () => (prevSiblings),
  siblings: () => (siblings)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Optional.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Arr.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Type.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Fun.ts");
/* ESM import */var _alien_Recurse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../alien/Recurse */ "../sugar/src/main/ts/ephox/sugar/alien/Recurse.ts");
/* ESM import */var _dom_Compare__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom/Compare */ "../sugar/src/main/ts/ephox/sugar/api/dom/Compare.ts");
/* ESM import */var _node_SugarElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node/SugarElement */ "../sugar/src/main/ts/ephox/sugar/api/node/SugarElement.ts");
/* ESM import */var _node_SugarNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node/SugarNode */ "../sugar/src/main/ts/ephox/sugar/api/node/SugarNode.ts");





/**
 * The document associated with the current element
 * NOTE: this will throw if the owner is null.
 */ const owner = (element)=>_node_SugarElement__WEBPACK_IMPORTED_MODULE_0__.SugarElement.fromDom(element.dom.ownerDocument);
/**
 * If the element is a document, return it. Otherwise, return its ownerDocument.
 * @param dos
 */ const documentOrOwner = (dos)=>_node_SugarNode__WEBPACK_IMPORTED_MODULE_1__.isDocument(dos) ? dos : owner(dos);
const documentElement = (element)=>_node_SugarElement__WEBPACK_IMPORTED_MODULE_0__.SugarElement.fromDom(documentOrOwner(element).dom.documentElement);
/**
 * The window element associated with the element
 * NOTE: this will throw if the defaultView is null.
 */ const defaultView = (element)=>_node_SugarElement__WEBPACK_IMPORTED_MODULE_0__.SugarElement.fromDom(documentOrOwner(element).dom.defaultView);
const parent = (element)=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.Optional.from(element.dom.parentNode).map(_node_SugarElement__WEBPACK_IMPORTED_MODULE_0__.SugarElement.fromDom);
// Cast down to just be SugarElement<Node>
const parentNode = (element)=>parent(element);
const parentElement = (element)=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.Optional.from(element.dom.parentElement).map(_node_SugarElement__WEBPACK_IMPORTED_MODULE_0__.SugarElement.fromDom);
const findIndex = (element)=>parent(element).bind((p)=>{
        // TODO: Refactor out children so we can avoid the constant unwrapping
        const kin = children(p);
        return _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__.findIndex(kin, (elem)=>_dom_Compare__WEBPACK_IMPORTED_MODULE_4__.eq(element, elem));
    });
const parents = (element, isRoot)=>{
    const stop = _ephox_katamari__WEBPACK_IMPORTED_MODULE_5__.isFunction(isRoot) ? isRoot : _ephox_katamari__WEBPACK_IMPORTED_MODULE_6__.never;
    // This is used a *lot* so it needs to be performant, not recursive
    let dom = element.dom;
    const ret = [];
    while(dom.parentNode !== null && dom.parentNode !== undefined){
        const rawParent = dom.parentNode;
        const p = _node_SugarElement__WEBPACK_IMPORTED_MODULE_0__.SugarElement.fromDom(rawParent);
        ret.push(p);
        if (stop(p) === true) {
            break;
        } else {
            dom = rawParent;
        }
    }
    return ret;
};
const siblings = (element)=>{
    // TODO: Refactor out children so we can just not add self instead of filtering afterwards
    const filterSelf = (elements)=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_3__.filter(elements, (x)=>!_dom_Compare__WEBPACK_IMPORTED_MODULE_4__.eq(element, x));
    return parent(element).map(children).map(filterSelf).getOr([]);
};
const offsetParent = (element)=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.Optional.from(element.dom.offsetParent).map(_node_SugarElement__WEBPACK_IMPORTED_MODULE_0__.SugarElement.fromDom);
const prevSibling = (element)=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.Optional.from(element.dom.previousSibling).map(_node_SugarElement__WEBPACK_IMPORTED_MODULE_0__.SugarElement.fromDom);
const nextSibling = (element)=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.Optional.from(element.dom.nextSibling).map(_node_SugarElement__WEBPACK_IMPORTED_MODULE_0__.SugarElement.fromDom);
// This one needs to be reversed, so they're still in DOM order
const prevSiblings = (element)=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_3__.reverse(_alien_Recurse__WEBPACK_IMPORTED_MODULE_7__.toArray(element, prevSibling));
const nextSiblings = (element)=>_alien_Recurse__WEBPACK_IMPORTED_MODULE_7__.toArray(element, nextSibling);
const children = (element)=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_3__.map(element.dom.childNodes, _node_SugarElement__WEBPACK_IMPORTED_MODULE_0__.SugarElement.fromDom);
const child = (element, index)=>{
    const cs = element.dom.childNodes;
    return _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.Optional.from(cs[index]).map(_node_SugarElement__WEBPACK_IMPORTED_MODULE_0__.SugarElement.fromDom);
};
const firstChild = (element)=>child(element, 0);
const lastChild = (element)=>child(element, element.dom.childNodes.length - 1);
const childNodesCount = (element)=>element.dom.childNodes.length;
const hasChildNodes = (element)=>element.dom.hasChildNodes();
const spot = (element, offset)=>({
        element,
        offset
    });
const leaf = (element, offset)=>{
    const cs = children(element);
    return cs.length > 0 && offset < cs.length ? spot(cs[offset], 0) : spot(element, offset);
};



}),
"../sugar/src/main/ts/ephox/sugar/api/view/Scroll.ts": 
/*!***********************************************************!*\
  !*** ../sugar/src/main/ts/ephox/sugar/api/view/Scroll.ts ***!
  \***********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  by: () => (by),
  capture: () => (capture),
  get: () => (get),
  intoView: () => (intoView),
  intoViewIfNeeded: () => (intoViewIfNeeded),
  preserve: () => (preserve),
  scrollBarWidth: () => (scrollBarWidth),
  setToElement: () => (setToElement),
  to: () => (to)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Optional.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Type.ts");
/* ESM import */var _ephox_sand__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ephox/sand */ "../sand/src/main/ts/ephox/sand/api/PlatformDetection.ts");
/* ESM import */var _dom_Insert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom/Insert */ "../sugar/src/main/ts/ephox/sugar/api/dom/Insert.ts");
/* ESM import */var _dom_Remove__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dom/Remove */ "../sugar/src/main/ts/ephox/sugar/api/dom/Remove.ts");
/* ESM import */var _node_SugarBody__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../node/SugarBody */ "../sugar/src/main/ts/ephox/sugar/api/node/SugarBody.ts");
/* ESM import */var _node_SugarElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node/SugarElement */ "../sugar/src/main/ts/ephox/sugar/api/node/SugarElement.ts");
/* ESM import */var _SugarLocation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SugarLocation */ "../sugar/src/main/ts/ephox/sugar/api/view/SugarLocation.ts");
/* ESM import */var _SugarPosition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SugarPosition */ "../sugar/src/main/ts/ephox/sugar/api/view/SugarPosition.ts");








// get scroll position (x,y) relative to document _doc (or global if not supplied)
const get = (_DOC)=>{
    const doc = _DOC !== undefined ? _DOC.dom : document;
    // ASSUMPTION: This is for cross-browser support, body works for Safari & EDGE, and when we have an iframe body scroller
    const x = doc.body.scrollLeft || doc.documentElement.scrollLeft;
    const y = doc.body.scrollTop || doc.documentElement.scrollTop;
    return (0,_SugarPosition__WEBPACK_IMPORTED_MODULE_0__.SugarPosition)(x, y);
};
// Scroll content to (x,y) relative to document _doc (or global if not supplied)
const to = (x, y, _DOC)=>{
    const doc = _DOC !== undefined ? _DOC.dom : document;
    const win = doc.defaultView;
    if (win) {
        win.scrollTo(x, y);
    }
};
// Scroll content by (x,y) relative to document _doc (or global if not supplied)
const by = (x, y, _DOC)=>{
    const doc = _DOC !== undefined ? _DOC.dom : document;
    const win = doc.defaultView;
    if (win) {
        win.scrollBy(x, y);
    }
};
// Set the window scroll position to the element
const setToElement = (win, element)=>{
    const pos = _SugarLocation__WEBPACK_IMPORTED_MODULE_1__.absolute(element);
    const doc = _node_SugarElement__WEBPACK_IMPORTED_MODULE_2__.SugarElement.fromDom(win.document);
    to(pos.left, pos.top, doc);
};
// call f() preserving the original scroll position relative to document doc
const preserve = (doc, f)=>{
    const before = get(doc);
    f();
    const after = get(doc);
    if (before.top !== after.top || before.left !== after.left) {
        to(before.left, before.top, doc);
    }
};
// capture the current scroll location and provide save and restore methods
const capture = (doc)=>{
    let previous = _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__.Optional.none();
    const save = ()=>{
        previous = _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__.Optional.some(get(doc));
    };
    // TODO: this is quite similar to the code in nomad.
    const restore = ()=>{
        previous.each((p)=>{
            to(p.left, p.top, doc);
        });
    };
    save();
    return {
        save,
        /* Saves the current page scroll position */ restore
    };
};
// TBIO-4472 Safari 10 - Scrolling typeahead with keyboard scrolls page
const intoView = (element, alignToTop)=>{
    const isSafari = _ephox_sand__WEBPACK_IMPORTED_MODULE_4__.detect().browser.isSafari();
    // this method isn't in TypeScript
    if (isSafari && _ephox_katamari__WEBPACK_IMPORTED_MODULE_5__.isFunction(element.dom.scrollIntoViewIfNeeded)) {
        element.dom.scrollIntoViewIfNeeded(false); // false=align to nearest edge
    } else {
        element.dom.scrollIntoView(alignToTop); // true=to top, false=to bottom
    }
};
// If the element is above the container, or below the container, then scroll to the top or bottom
const intoViewIfNeeded = (element, container)=>{
    const containerBox = container.dom.getBoundingClientRect();
    const elementBox = element.dom.getBoundingClientRect();
    if (elementBox.top < containerBox.top) {
        // element top is above the viewport top, scroll so it's at the top
        intoView(element, true);
    } else if (elementBox.bottom > containerBox.bottom) {
        // element bottom is below the viewport bottom, scroll so it's at the bottom
        intoView(element, false);
    }
};
// Return the scroll bar width (calculated by temporarily inserting an element into the dom)
const scrollBarWidth = ()=>{
    // From https://davidwalsh.name/detect-scrollbar-width
    const scrollDiv = _node_SugarElement__WEBPACK_IMPORTED_MODULE_2__.SugarElement.fromHtml('<div style="width: 100px; height: 100px; overflow: scroll; position: absolute; top: -9999px;"></div>');
    _dom_Insert__WEBPACK_IMPORTED_MODULE_6__.after(_node_SugarBody__WEBPACK_IMPORTED_MODULE_7__.body(), scrollDiv);
    const w = scrollDiv.dom.offsetWidth - scrollDiv.dom.clientWidth;
    _dom_Remove__WEBPACK_IMPORTED_MODULE_8__.remove(scrollDiv);
    return w;
};



}),
"../sugar/src/main/ts/ephox/sugar/api/view/SugarLocation.ts": 
/*!******************************************************************!*\
  !*** ../sugar/src/main/ts/ephox/sugar/api/view/SugarLocation.ts ***!
  \******************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  absolute: () => (absolute),
  relative: () => (relative),
  viewport: () => (viewport)
});
/* ESM import */var _node_SugarBody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node/SugarBody */ "../sugar/src/main/ts/ephox/sugar/api/node/SugarBody.ts");
/* ESM import */var _SugarPosition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SugarPosition */ "../sugar/src/main/ts/ephox/sugar/api/view/SugarPosition.ts");


const boxPosition = (dom)=>{
    const box = dom.getBoundingClientRect();
    return (0,_SugarPosition__WEBPACK_IMPORTED_MODULE_0__.SugarPosition)(box.left, box.top);
};
// Avoids falsy false fallthrough
const firstDefinedOrZero = (a, b)=>{
    if (a !== undefined) {
        return a;
    } else {
        return b !== undefined ? b : 0;
    }
};
const absolute = (element)=>{
    const doc = element.dom.ownerDocument;
    const body = doc.body;
    const win = doc.defaultView;
    const html = doc.documentElement;
    if (body === element.dom) {
        return (0,_SugarPosition__WEBPACK_IMPORTED_MODULE_0__.SugarPosition)(body.offsetLeft, body.offsetTop);
    }
    const scrollTop = firstDefinedOrZero(win?.pageYOffset, html.scrollTop);
    const scrollLeft = firstDefinedOrZero(win?.pageXOffset, html.scrollLeft);
    const clientTop = firstDefinedOrZero(html.clientTop, body.clientTop);
    const clientLeft = firstDefinedOrZero(html.clientLeft, body.clientLeft);
    return viewport(element).translate(scrollLeft - clientLeft, scrollTop - clientTop);
};
// This is the old $.position(), but JQuery does nonsense calculations.
// We're only 1 <-> 1 with the old value in the single place we use this function
// (ego.api.Dragging) so the rest can bite me.
const relative = (element)=>{
    const dom = element.dom;
    // jquery-ism: when style="position: fixed", this === boxPosition()
    // but tests reveal it returns the same thing anyway
    return (0,_SugarPosition__WEBPACK_IMPORTED_MODULE_0__.SugarPosition)(dom.offsetLeft, dom.offsetTop);
};
const viewport = (element)=>{
    const dom = element.dom;
    const doc = dom.ownerDocument;
    const body = doc.body;
    if (body === dom) {
        return (0,_SugarPosition__WEBPACK_IMPORTED_MODULE_0__.SugarPosition)(body.offsetLeft, body.offsetTop);
    }
    if (!(0,_node_SugarBody__WEBPACK_IMPORTED_MODULE_1__.inBody)(element)) {
        return (0,_SugarPosition__WEBPACK_IMPORTED_MODULE_0__.SugarPosition)(0, 0);
    }
    return boxPosition(dom);
};



}),
"../sugar/src/main/ts/ephox/sugar/api/view/SugarPosition.ts": 
/*!******************************************************************!*\
  !*** ../sugar/src/main/ts/ephox/sugar/api/view/SugarPosition.ts ***!
  \******************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SugarPosition: () => (SugarPosition)
});
const r = (left, top)=>{
    const translate = (x, y)=>r(left + x, top + y);
    return {
        left,
        top,
        translate
    };
};
// tslint:disable-next-line:variable-name
const SugarPosition = r;


}),
"../sugar/src/main/ts/ephox/sugar/api/view/WindowVisualViewport.ts": 
/*!*************************************************************************!*\
  !*** ../sugar/src/main/ts/ephox/sugar/api/view/WindowVisualViewport.ts ***!
  \*************************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  bind: () => (bind),
  get: () => (get),
  getBounds: () => (getBounds)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Optional.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Fun.ts");
/* ESM import */var _ephox_sand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ephox/sand */ "../sand/src/main/ts/ephox/sand/api/PlatformDetection.ts");
/* ESM import */var _impl_FilteredEvent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../impl/FilteredEvent */ "../sugar/src/main/ts/ephox/sugar/impl/FilteredEvent.ts");
/* ESM import */var _node_SugarElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node/SugarElement */ "../sugar/src/main/ts/ephox/sugar/api/node/SugarElement.ts");
/* ESM import */var _Scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Scroll */ "../sugar/src/main/ts/ephox/sugar/api/view/Scroll.ts");





const get = (_win)=>{
    const win = _win === undefined ? window : _win;
    if (_ephox_sand__WEBPACK_IMPORTED_MODULE_0__.detect().browser.isFirefox()) {
        // TINY-7984: Firefox 91 is returning incorrect values for visualViewport.pageTop, so disable it for now
        return _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.Optional.none();
    } else {
        return _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.Optional.from(win.visualViewport);
    }
};
const bounds = (x, y, width, height)=>({
        x,
        y,
        width,
        height,
        right: x + width,
        bottom: y + height
    });
const getBounds = (_win)=>{
    const win = _win === undefined ? window : _win;
    const doc = win.document;
    const scroll = _Scroll__WEBPACK_IMPORTED_MODULE_2__.get(_node_SugarElement__WEBPACK_IMPORTED_MODULE_3__.SugarElement.fromDom(doc));
    return get(win).fold(()=>{
        const html = win.document.documentElement;
        // Don't use window.innerWidth/innerHeight here, as we don't want to include scrollbars
        // since the right/bottom position is based on the edge of the scrollbar not the window
        const width = html.clientWidth;
        const height = html.clientHeight;
        return bounds(scroll.left, scroll.top, width, height);
    }, (visualViewport)=>// iOS doesn't update the pageTop/pageLeft when element.scrollIntoView() is called, so we need to fallback to the
        // scroll position which will always be less than the page top/left values when page top/left are accurate/correct.
        bounds(Math.max(visualViewport.pageLeft, scroll.left), Math.max(visualViewport.pageTop, scroll.top), visualViewport.width, visualViewport.height));
};
const bind = (name, callback, _win)=>get(_win).map((visualViewport)=>{
        const handler = (e)=>callback((0,_impl_FilteredEvent__WEBPACK_IMPORTED_MODULE_4__.fromRawEvent)(e));
        visualViewport.addEventListener(name, handler);
        return {
            unbind: ()=>visualViewport.removeEventListener(name, handler)
        };
    }).getOrThunk(()=>({
            unbind: _ephox_katamari__WEBPACK_IMPORTED_MODULE_5__.noop
        }));



}),
"../sugar/src/main/ts/ephox/sugar/impl/ClassList.ts": 
/*!**********************************************************!*\
  !*** ../sugar/src/main/ts/ephox/sugar/impl/ClassList.ts ***!
  \**********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  add: () => (add),
  get: () => (get),
  remove: () => (remove),
  supports: () => (supports),
  toggle: () => (toggle)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Arr.ts");
/* ESM import */var _api_properties_AttrList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/properties/AttrList */ "../sugar/src/main/ts/ephox/sugar/api/properties/AttrList.ts");


// IE11 Can return undefined for a classList on elements such as math, so we make sure it's not undefined before attempting to use it.
const supports = (element)=>element.dom.classList !== undefined;
const get = (element)=>_api_properties_AttrList__WEBPACK_IMPORTED_MODULE_0__.read(element, 'class');
const add = (element, clazz)=>_api_properties_AttrList__WEBPACK_IMPORTED_MODULE_0__.add(element, 'class', clazz);
const remove = (element, clazz)=>_api_properties_AttrList__WEBPACK_IMPORTED_MODULE_0__.remove(element, 'class', clazz);
const toggle = (element, clazz)=>{
    if (_ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.contains(get(element), clazz)) {
        return remove(element, clazz);
    } else {
        return add(element, clazz);
    }
};



}),
"../sugar/src/main/ts/ephox/sugar/impl/FilteredEvent.ts": 
/*!**************************************************************!*\
  !*** ../sugar/src/main/ts/ephox/sugar/impl/FilteredEvent.ts ***!
  \**************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  bind: () => (bind),
  capture: () => (capture),
  fromRawEvent: () => (fromRawEvent)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Fun.ts");
/* ESM import */var _api_node_SugarElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/node/SugarElement */ "../sugar/src/main/ts/ephox/sugar/api/node/SugarElement.ts");
/* ESM import */var _api_node_SugarShadowDom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/node/SugarShadowDom */ "../sugar/src/main/ts/ephox/sugar/api/node/SugarShadowDom.ts");



const mkEvent = (target, x, y, stop, prevent, kill, raw)=>({
        target,
        x,
        y,
        stop,
        prevent,
        kill,
        raw
    });
/** Wraps an Event in an EventArgs structure.
 * The returned EventArgs structure has its target set to the "original" target if possible.
 * See SugarShadowDom.getOriginalEventTarget
 */ const fromRawEvent = (rawEvent)=>{
    const target = _api_node_SugarElement__WEBPACK_IMPORTED_MODULE_0__.SugarElement.fromDom(_api_node_SugarShadowDom__WEBPACK_IMPORTED_MODULE_1__.getOriginalEventTarget(rawEvent).getOr(rawEvent.target));
    const stop = ()=>rawEvent.stopPropagation();
    const prevent = ()=>rawEvent.preventDefault();
    const kill = _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.compose(prevent, stop); // more of a sequence than a compose, but same effect
    // FIX: Don't just expose the raw event. Need to identify what needs standardisation.
    return mkEvent(target, rawEvent.clientX, rawEvent.clientY, stop, prevent, kill, rawEvent);
};
const handle = (filter, handler)=>(rawEvent)=>{
        if (filter(rawEvent)) {
            handler(fromRawEvent(rawEvent));
        }
    };
const binder = (element, event, filter, handler, useCapture)=>{
    const wrapped = handle(filter, handler);
    // IE9 minimum
    element.dom.addEventListener(event, wrapped, useCapture);
    return {
        unbind: _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.curry(unbind, element, event, wrapped, useCapture)
    };
};
const bind = (element, event, filter, handler)=>binder(element, event, filter, handler, false);
const capture = (element, event, filter, handler)=>binder(element, event, filter, handler, true);
const unbind = (element, event, handler, useCapture)=>{
    // IE9 minimum
    element.dom.removeEventListener(event, handler, useCapture);
};



}),
"../sugar/src/main/ts/ephox/sugar/impl/Style.ts": 
/*!******************************************************!*\
  !*** ../sugar/src/main/ts/ephox/sugar/impl/Style.ts ***!
  \******************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  isSupported: () => (isSupported)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Type.ts");

// some elements, such as mathml, don't have style attributes
// others, such as angular elements, have style attributes that aren't a CSSStyleDeclaration
const isSupported = (dom)=>dom.style !== undefined && _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.isFunction(dom.style.getPropertyValue);



}),
"./src/plugins/fullscreen/main/ts/Plugin.ts": 
/*!**************************************************!*\
  !*** ./src/plugins/fullscreen/main/ts/Plugin.ts ***!
  \**************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Cell.ts");
/* ESM import */var tinymce_core_api_PluginManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/PluginManager */ "./lib/globals/tinymce/core/api/PluginManager.js");
/* ESM import */var _api_Api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/Api */ "./src/plugins/fullscreen/main/ts/api/Api.ts");
/* ESM import */var _api_Commands__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/Commands */ "./src/plugins/fullscreen/main/ts/api/Commands.ts");
/* ESM import */var _api_Options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/Options */ "./src/plugins/fullscreen/main/ts/api/Options.ts");
/* ESM import */var _core_Keyboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/Keyboard */ "./src/plugins/fullscreen/main/ts/core/Keyboard.ts");
/* ESM import */var _ui_Buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/Buttons */ "./src/plugins/fullscreen/main/ts/ui/Buttons.ts");







/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>{
    tinymce_core_api_PluginManager__WEBPACK_IMPORTED_MODULE_0__["default"].add('fullscreen', (editor)=>{
        const fullscreenState = (0,_ephox_katamari__WEBPACK_IMPORTED_MODULE_6__.Cell)(null);
        if (editor.inline) {
            return _api_Api__WEBPACK_IMPORTED_MODULE_1__.get(fullscreenState);
        }
        _api_Options__WEBPACK_IMPORTED_MODULE_3__.register(editor);
        _api_Commands__WEBPACK_IMPORTED_MODULE_2__.register(editor, fullscreenState);
        _ui_Buttons__WEBPACK_IMPORTED_MODULE_5__.register(editor, fullscreenState);
        _core_Keyboard__WEBPACK_IMPORTED_MODULE_4__.setup(editor, fullscreenState);
        editor.addShortcut('Meta+Shift+F', '', 'mceFullScreen');
        return _api_Api__WEBPACK_IMPORTED_MODULE_1__.get(fullscreenState);
    });
});


}),
"./src/plugins/fullscreen/main/ts/api/Api.ts": 
/*!***************************************************!*\
  !*** ./src/plugins/fullscreen/main/ts/api/Api.ts ***!
  \***************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  get: () => (get)
});
const get = (fullscreenState)=>({
        isFullscreen: ()=>fullscreenState.get() !== null
    });



}),
"./src/plugins/fullscreen/main/ts/api/Commands.ts": 
/*!********************************************************!*\
  !*** ./src/plugins/fullscreen/main/ts/api/Commands.ts ***!
  \********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  register: () => (register)
});
/* ESM import */var _core_Actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Actions */ "./src/plugins/fullscreen/main/ts/core/Actions.ts");

const register = (editor, fullscreenState)=>{
    editor.addCommand('mceFullScreen', ()=>{
        _core_Actions__WEBPACK_IMPORTED_MODULE_0__.toggleFullscreen(editor, fullscreenState);
    });
};



}),
"./src/plugins/fullscreen/main/ts/api/Events.ts": 
/*!******************************************************!*\
  !*** ./src/plugins/fullscreen/main/ts/api/Events.ts ***!
  \******************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  fireFullscreenStateChanged: () => (fireFullscreenStateChanged)
});
const fireFullscreenStateChanged = (editor, state)=>{
    editor.dispatch('FullscreenStateChanged', {
        state
    });
    editor.dispatch('ResizeEditor');
};



}),
"./src/plugins/fullscreen/main/ts/api/Options.ts": 
/*!*******************************************************!*\
  !*** ./src/plugins/fullscreen/main/ts/api/Options.ts ***!
  \*******************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getFullscreenNative: () => (getFullscreenNative),
  register: () => (register)
});
const option = (name)=>(editor)=>editor.options.get(name);
const register = (editor)=>{
    const registerOption = editor.options.register;
    registerOption('fullscreen_native', {
        processor: 'boolean',
        default: false
    });
};
const getFullscreenNative = option('fullscreen_native');



}),
"./src/plugins/fullscreen/main/ts/core/Actions.ts": 
/*!********************************************************!*\
  !*** ./src/plugins/fullscreen/main/ts/core/Actions.ts ***!
  \********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  toggleFullscreen: () => (toggleFullscreen)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Fun.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Singleton.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Throttler.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Optional.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Optionals.ts");
/* ESM import */var _ephox_sugar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ephox/sugar */ "../sugar/src/main/ts/ephox/sugar/api/view/WindowVisualViewport.ts");
/* ESM import */var _ephox_sugar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ephox/sugar */ "../sugar/src/main/ts/ephox/sugar/api/properties/Css.ts");
/* ESM import */var _ephox_sugar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ephox/sugar */ "../sugar/src/main/ts/ephox/sugar/api/node/SugarElement.ts");
/* ESM import */var _ephox_sugar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ephox/sugar */ "../sugar/src/main/ts/ephox/sugar/api/search/Traverse.ts");
/* ESM import */var _ephox_sugar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ephox/sugar */ "../sugar/src/main/ts/ephox/sugar/api/node/SugarNode.ts");
/* ESM import */var _ephox_sugar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ephox/sugar */ "../sugar/src/main/ts/ephox/sugar/api/properties/Class.ts");
/* ESM import */var _ephox_sugar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ephox/sugar */ "../sugar/src/main/ts/ephox/sugar/api/node/SugarShadowDom.ts");
/* ESM import */var _ephox_sugar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ephox/sugar */ "../sugar/src/main/ts/ephox/sugar/api/events/DomEvent.ts");
/* ESM import */var tinymce_core_api_dom_DOMUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/dom/DOMUtils */ "./lib/globals/tinymce/core/api/dom/DOMUtils.js");
/* ESM import */var tinymce_core_api_Env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tinymce/core/api/Env */ "./lib/globals/tinymce/core/api/Env.js");
/* ESM import */var _api_Events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/Events */ "./src/plugins/fullscreen/main/ts/api/Events.ts");
/* ESM import */var _api_Options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/Options */ "./src/plugins/fullscreen/main/ts/api/Options.ts");
/* ESM import */var _NativeFullscreen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NativeFullscreen */ "./src/plugins/fullscreen/main/ts/core/NativeFullscreen.ts");
/* ESM import */var _Thor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Thor */ "./src/plugins/fullscreen/main/ts/core/Thor.ts");








const DOM = tinymce_core_api_dom_DOMUtils__WEBPACK_IMPORTED_MODULE_0__["default"].DOM;
const getScrollPos = ()=>_ephox_sugar__WEBPACK_IMPORTED_MODULE_6__.getBounds(window);
const setScrollPos = (pos)=>window.scrollTo(pos.x, pos.y);
const viewportUpdate = _ephox_sugar__WEBPACK_IMPORTED_MODULE_6__.get().fold(()=>({
        bind: _ephox_katamari__WEBPACK_IMPORTED_MODULE_7__.noop,
        unbind: _ephox_katamari__WEBPACK_IMPORTED_MODULE_7__.noop
    }), (visualViewport)=>{
    const editorContainer = _ephox_katamari__WEBPACK_IMPORTED_MODULE_8__.value();
    const resizeBinder = _ephox_katamari__WEBPACK_IMPORTED_MODULE_8__.unbindable();
    const scrollBinder = _ephox_katamari__WEBPACK_IMPORTED_MODULE_8__.unbindable();
    const refreshScroll = ()=>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
    const refreshVisualViewport = ()=>{
        window.requestAnimationFrame(()=>{
            editorContainer.on((container)=>_ephox_sugar__WEBPACK_IMPORTED_MODULE_9__.setAll(container, {
                    top: visualViewport.offsetTop + 'px',
                    left: visualViewport.offsetLeft + 'px',
                    height: visualViewport.height + 'px',
                    width: visualViewport.width + 'px'
                }));
        });
    };
    const update = _ephox_katamari__WEBPACK_IMPORTED_MODULE_10__.first(()=>{
        refreshScroll();
        refreshVisualViewport();
    }, 50);
    const bind = (element)=>{
        editorContainer.set(element);
        update.throttle();
        resizeBinder.set(_ephox_sugar__WEBPACK_IMPORTED_MODULE_6__.bind('resize', update.throttle));
        scrollBinder.set(_ephox_sugar__WEBPACK_IMPORTED_MODULE_6__.bind('scroll', update.throttle));
    };
    const unbind = ()=>{
        editorContainer.on(()=>{
            resizeBinder.clear();
            scrollBinder.clear();
        });
        editorContainer.clear();
    };
    return {
        bind,
        unbind
    };
});
const toggleFullscreen = (editor, fullscreenState)=>{
    const body = document.body;
    const documentElement = document.documentElement;
    const editorContainer = editor.getContainer();
    const editorContainerS = _ephox_sugar__WEBPACK_IMPORTED_MODULE_11__.SugarElement.fromDom(editorContainer);
    const sinkContainerS = _ephox_sugar__WEBPACK_IMPORTED_MODULE_12__.nextSibling(editorContainerS).filter((elm)=>_ephox_sugar__WEBPACK_IMPORTED_MODULE_13__.isHTMLElement(elm) && _ephox_sugar__WEBPACK_IMPORTED_MODULE_14__.has(elm, 'tox-silver-sink'));
    const fullscreenRoot = (0,_NativeFullscreen__WEBPACK_IMPORTED_MODULE_4__.getFullscreenRoot)(editor);
    const fullscreenInfo = fullscreenState.get();
    const editorBody = _ephox_sugar__WEBPACK_IMPORTED_MODULE_11__.SugarElement.fromDom(editor.getBody());
    const isTouch = tinymce_core_api_Env__WEBPACK_IMPORTED_MODULE_1__["default"].deviceType.isTouch();
    const editorContainerStyle = editorContainer.style;
    const iframe = editor.iframeElement;
    const iframeStyle = iframe?.style;
    const handleClasses = (handler)=>{
        handler(body, 'tox-fullscreen');
        handler(documentElement, 'tox-fullscreen');
        handler(editorContainer, 'tox-fullscreen');
        _ephox_sugar__WEBPACK_IMPORTED_MODULE_15__.getShadowRoot(editorContainerS).map((root)=>_ephox_sugar__WEBPACK_IMPORTED_MODULE_15__.getShadowHost(root).dom).each((host)=>{
            handler(host, 'tox-fullscreen');
            handler(host, 'tox-shadowhost');
        });
    };
    const cleanup = ()=>{
        if (isTouch) {
            _Thor__WEBPACK_IMPORTED_MODULE_5__.restoreStyles(editor.dom);
        }
        handleClasses(DOM.removeClass);
        viewportUpdate.unbind();
        _ephox_katamari__WEBPACK_IMPORTED_MODULE_16__.Optional.from(fullscreenState.get()).each((info)=>info.fullscreenChangeHandler.unbind());
    };
    if (!fullscreenInfo) {
        const fullscreenChangeHandler = _ephox_sugar__WEBPACK_IMPORTED_MODULE_17__.bind(_ephox_sugar__WEBPACK_IMPORTED_MODULE_12__.owner(fullscreenRoot), (0,_NativeFullscreen__WEBPACK_IMPORTED_MODULE_4__.getFullscreenchangeEventName)(), (_evt)=>{
            if (_api_Options__WEBPACK_IMPORTED_MODULE_3__.getFullscreenNative(editor)) {
                // if we have exited browser fullscreen with Escape then exit editor fullscreen too
                if (!(0,_NativeFullscreen__WEBPACK_IMPORTED_MODULE_4__.isFullscreenElement)(fullscreenRoot) && fullscreenState.get() !== null) {
                    toggleFullscreen(editor, fullscreenState);
                }
            }
        });
        const newFullScreenInfo = {
            scrollPos: getScrollPos(),
            containerWidth: editorContainerStyle.width,
            containerHeight: editorContainerStyle.height,
            containerTop: editorContainerStyle.top,
            containerLeft: editorContainerStyle.left,
            iframeWidth: iframeStyle.width,
            iframeHeight: iframeStyle.height,
            fullscreenChangeHandler,
            sinkCssPosition: sinkContainerS.map((elm)=>_ephox_sugar__WEBPACK_IMPORTED_MODULE_9__.get(elm, 'position'))
        };
        if (isTouch) {
            _Thor__WEBPACK_IMPORTED_MODULE_5__.clobberStyles(editor.dom, editorContainerS, editorBody);
        }
        iframeStyle.width = iframeStyle.height = '100%';
        editorContainerStyle.width = editorContainerStyle.height = '';
        handleClasses(DOM.addClass);
        sinkContainerS.each((elm)=>{
            _ephox_sugar__WEBPACK_IMPORTED_MODULE_9__.set(elm, 'position', 'fixed');
        });
        viewportUpdate.bind(editorContainerS);
        editor.on('remove', cleanup);
        fullscreenState.set(newFullScreenInfo);
        if (_api_Options__WEBPACK_IMPORTED_MODULE_3__.getFullscreenNative(editor)) {
            (0,_NativeFullscreen__WEBPACK_IMPORTED_MODULE_4__.requestFullscreen)(fullscreenRoot);
        }
        _api_Events__WEBPACK_IMPORTED_MODULE_2__.fireFullscreenStateChanged(editor, true);
    } else {
        fullscreenInfo.fullscreenChangeHandler.unbind();
        if (_api_Options__WEBPACK_IMPORTED_MODULE_3__.getFullscreenNative(editor) && (0,_NativeFullscreen__WEBPACK_IMPORTED_MODULE_4__.isFullscreenElement)(fullscreenRoot)) {
            (0,_NativeFullscreen__WEBPACK_IMPORTED_MODULE_4__.exitFullscreen)(_ephox_sugar__WEBPACK_IMPORTED_MODULE_12__.owner(fullscreenRoot));
        }
        iframeStyle.width = fullscreenInfo.iframeWidth;
        iframeStyle.height = fullscreenInfo.iframeHeight;
        editorContainerStyle.width = fullscreenInfo.containerWidth;
        editorContainerStyle.height = fullscreenInfo.containerHeight;
        editorContainerStyle.top = fullscreenInfo.containerTop;
        editorContainerStyle.left = fullscreenInfo.containerLeft;
        _ephox_katamari__WEBPACK_IMPORTED_MODULE_18__.lift2(sinkContainerS, fullscreenInfo.sinkCssPosition, (elm, val)=>{
            _ephox_sugar__WEBPACK_IMPORTED_MODULE_9__.set(elm, 'position', val);
        });
        cleanup();
        setScrollPos(fullscreenInfo.scrollPos);
        fullscreenState.set(null);
        _api_Events__WEBPACK_IMPORTED_MODULE_2__.fireFullscreenStateChanged(editor, false);
        editor.off('remove', cleanup);
    }
};



}),
"./src/plugins/fullscreen/main/ts/core/Keyboard.ts": 
/*!*********************************************************!*\
  !*** ./src/plugins/fullscreen/main/ts/core/Keyboard.ts ***!
  \*********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  setup: () => (setup)
});
/* ESM import */var tinymce_core_api_util_VK__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/util/VK */ "./lib/globals/tinymce/core/api/util/VK.js");

const setup = (editor, fullscreenState)=>{
    editor.on('init', ()=>{
        editor.on('keydown', (e)=>{
            if (e.keyCode === tinymce_core_api_util_VK__WEBPACK_IMPORTED_MODULE_0__["default"].TAB && !(e.metaKey || e.ctrlKey) && fullscreenState.get()) {
                e.preventDefault();
            }
        });
    });
};



}),
"./src/plugins/fullscreen/main/ts/core/NativeFullscreen.ts": 
/*!*****************************************************************!*\
  !*** ./src/plugins/fullscreen/main/ts/core/NativeFullscreen.ts ***!
  \*****************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  exitFullscreen: () => (exitFullscreen),
  getFullscreenElement: () => (getFullscreenElement),
  getFullscreenRoot: () => (getFullscreenRoot),
  getFullscreenchangeEventName: () => (getFullscreenchangeEventName),
  isFullscreenElement: () => (isFullscreenElement),
  requestFullscreen: () => (requestFullscreen)
});
/* ESM import */var _ephox_sugar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ephox/sugar */ "../sugar/src/main/ts/ephox/sugar/api/node/SugarElement.ts");
/* ESM import */var _ephox_sugar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ephox/sugar */ "../sugar/src/main/ts/ephox/sugar/api/node/SugarShadowDom.ts");
/* ESM import */var _ephox_sugar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ephox/sugar */ "../sugar/src/main/ts/ephox/sugar/api/node/SugarBody.ts");
/* ESM import */var _ephox_sugar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ephox/sugar */ "../sugar/src/main/ts/ephox/sugar/api/search/Traverse.ts");

const getFullscreenRoot = (editor)=>{
    const elem = _ephox_sugar__WEBPACK_IMPORTED_MODULE_0__.SugarElement.fromDom(editor.getElement());
    return _ephox_sugar__WEBPACK_IMPORTED_MODULE_1__.getShadowRoot(elem).map(_ephox_sugar__WEBPACK_IMPORTED_MODULE_1__.getShadowHost).getOrThunk(()=>_ephox_sugar__WEBPACK_IMPORTED_MODULE_2__.getBody(_ephox_sugar__WEBPACK_IMPORTED_MODULE_3__.owner(elem)));
};
const getFullscreenElement = (root)=>{
    if (root.fullscreenElement !== undefined) {
        return root.fullscreenElement;
    } else if (root.msFullscreenElement !== undefined) {
        return root.msFullscreenElement;
    } else if (root.webkitFullscreenElement !== undefined) {
        return root.webkitFullscreenElement;
    } else {
        return null;
    }
};
const getFullscreenchangeEventName = ()=>{
    if (document.fullscreenElement !== undefined) {
        return 'fullscreenchange';
    } else if (document.msFullscreenElement !== undefined) {
        return 'MSFullscreenChange'; // warning, seems to be case sensitive
    } else if (document.webkitFullscreenElement !== undefined) {
        return 'webkitfullscreenchange';
    } else {
        return 'fullscreenchange';
    }
};
const requestFullscreen = (sugarElem)=>{
    const elem = sugarElem.dom;
    if (elem.requestFullscreen) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    } else if (elem.webkitRequestFullScreen) {
        elem.webkitRequestFullScreen();
    }
};
const exitFullscreen = (sugarDoc)=>{
    const doc = sugarDoc.dom;
    if (doc.exitFullscreen) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        doc.exitFullscreen();
    } else if (doc.msExitFullscreen) {
        doc.msExitFullscreen();
    } else if (doc.webkitCancelFullScreen) {
        doc.webkitCancelFullScreen();
    }
};
const isFullscreenElement = (elem)=>elem.dom === getFullscreenElement(_ephox_sugar__WEBPACK_IMPORTED_MODULE_3__.owner(elem).dom);


}),
"./src/plugins/fullscreen/main/ts/core/Thor.ts": 
/*!*****************************************************!*\
  !*** ./src/plugins/fullscreen/main/ts/core/Thor.ts ***!
  \*****************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  clobberStyles: () => (clobberStyles),
  restoreStyles: () => (restoreStyles)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Arr.ts");
/* ESM import */var _ephox_sugar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ephox/sugar */ "../sugar/src/main/ts/ephox/sugar/api/properties/Css.ts");
/* ESM import */var _ephox_sugar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ephox/sugar */ "../sugar/src/main/ts/ephox/sugar/api/search/SelectorFilter.ts");
/* ESM import */var _ephox_sugar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ephox/sugar */ "../sugar/src/main/ts/ephox/sugar/api/properties/Attribute.ts");
/* ESM import */var tinymce_core_api_Env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/Env */ "./lib/globals/tinymce/core/api/Env.js");



const attr = 'data-ephox-mobile-fullscreen-style';
const siblingStyles = 'display:none!important;';
const ancestorPosition = 'position:absolute!important;';
// TINY-3407 ancestors need 'height:100%!important;overflow:visible!important;' to prevent collapsed ancestors hiding the editor
const ancestorStyles = 'top:0!important;left:0!important;margin:0!important;padding:0!important;width:100%!important;height:100%!important;overflow:visible!important;';
const bgFallback = 'background-color:rgb(255,255,255)!important;';
const isAndroid = tinymce_core_api_Env__WEBPACK_IMPORTED_MODULE_0__["default"].os.isAndroid();
const matchColor = (editorBody)=>{
    // in iOS you can overscroll, sometimes when you overscroll you can reveal the bgcolor of an element beneath,
    // by matching the bg color and clobbering ensures any reveals are 'camouflaged' the same color
    const color = _ephox_sugar__WEBPACK_IMPORTED_MODULE_1__.get(editorBody, 'background-color');
    return color !== undefined && color !== '' ? 'background-color:' + color + '!important' : bgFallback;
};
// We clobber all tags, direct ancestors to the editorBody get ancestorStyles, everything else gets siblingStyles
const clobberStyles = (dom, container, editorBody)=>{
    const gatherSiblings = (element)=>{
        return _ephox_sugar__WEBPACK_IMPORTED_MODULE_2__.siblings(element, '*:not(.tox-silver-sink)');
    };
    const clobber = (clobberStyle)=>(element)=>{
            const styles = _ephox_sugar__WEBPACK_IMPORTED_MODULE_3__.get(element, 'style');
            const backup = styles === undefined ? 'no-styles' : styles.trim();
            if (backup === clobberStyle) {
                return;
            } else {
                _ephox_sugar__WEBPACK_IMPORTED_MODULE_3__.set(element, attr, backup);
                _ephox_sugar__WEBPACK_IMPORTED_MODULE_1__.setAll(element, dom.parseStyle(clobberStyle));
            }
        };
    const ancestors = _ephox_sugar__WEBPACK_IMPORTED_MODULE_2__.ancestors(container, '*');
    const siblings = _ephox_katamari__WEBPACK_IMPORTED_MODULE_4__.bind(ancestors, gatherSiblings);
    const bgColor = matchColor(editorBody);
    /* NOTE: This assumes that container has no siblings itself */ _ephox_katamari__WEBPACK_IMPORTED_MODULE_4__.each(siblings, clobber(siblingStyles));
    _ephox_katamari__WEBPACK_IMPORTED_MODULE_4__.each(ancestors, clobber(ancestorPosition + ancestorStyles + bgColor));
    // position absolute on the outer-container breaks Android flex layout
    const containerStyles = isAndroid === true ? '' : ancestorPosition;
    clobber(containerStyles + ancestorStyles + bgColor)(container);
};
const restoreStyles = (dom)=>{
    const clobberedEls = _ephox_sugar__WEBPACK_IMPORTED_MODULE_2__.all('[' + attr + ']');
    _ephox_katamari__WEBPACK_IMPORTED_MODULE_4__.each(clobberedEls, (element)=>{
        const restore = _ephox_sugar__WEBPACK_IMPORTED_MODULE_3__.get(element, attr);
        if (restore && restore !== 'no-styles') {
            _ephox_sugar__WEBPACK_IMPORTED_MODULE_1__.setAll(element, dom.parseStyle(restore));
        } else {
            _ephox_sugar__WEBPACK_IMPORTED_MODULE_3__.remove(element, 'style');
        }
        _ephox_sugar__WEBPACK_IMPORTED_MODULE_3__.remove(element, attr);
    });
};



}),
"./src/plugins/fullscreen/main/ts/ui/Buttons.ts": 
/*!******************************************************!*\
  !*** ./src/plugins/fullscreen/main/ts/ui/Buttons.ts ***!
  \******************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  register: () => (register)
});
const makeSetupHandler = (editor, fullscreenState)=>(api)=>{
        api.setActive(fullscreenState.get() !== null);
        const editorEventCallback = (e)=>api.setActive(e.state);
        editor.on('FullscreenStateChanged', editorEventCallback);
        return ()=>editor.off('FullscreenStateChanged', editorEventCallback);
    };
const register = (editor, fullscreenState)=>{
    const onAction = ()=>editor.execCommand('mceFullScreen');
    editor.ui.registry.addToggleMenuItem('fullscreen', {
        text: 'Fullscreen',
        icon: 'fullscreen',
        shortcut: 'Meta+Shift+F',
        onAction,
        onSetup: makeSetupHandler(editor, fullscreenState),
        context: 'any'
    });
    editor.ui.registry.addToggleButton('fullscreen', {
        tooltip: 'Fullscreen',
        icon: 'fullscreen',
        onAction,
        onSetup: makeSetupHandler(editor, fullscreenState),
        shortcut: 'Meta+Shift+F',
        context: 'any'
    });
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

/*!************************************************!*\
  !*** ./src/plugins/fullscreen/main/ts/Main.ts ***!
  \************************************************/
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _Plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Plugin */ "./src/plugins/fullscreen/main/ts/Plugin.ts");

(0,_Plugin__WEBPACK_IMPORTED_MODULE_0__["default"])(); /** *****
 * DO NOT EXPORT ANYTHING
 *
 * IF YOU DO ROLLUP WILL LEAVE A GLOBAL ON THE PAGE
 *******/ 

})();

})()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdGlueW1jZS9wbHVnaW5zL2Z1bGxzY3JlZW4vcGx1Z2luLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGlueW1jZS8uL2xpYi9nbG9iYWxzL3RpbnltY2UvY29yZS9hcGkvRW52LmpzIiwid2VicGFjazovL3RpbnltY2UvLi9saWIvZ2xvYmFscy90aW55bWNlL2NvcmUvYXBpL1BsdWdpbk1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL2xpYi9nbG9iYWxzL3RpbnltY2UvY29yZS9hcGkvZG9tL0RPTVV0aWxzLmpzIiwid2VicGFjazovL3RpbnltY2UvLi9saWIvZ2xvYmFscy90aW55bWNlL2NvcmUvYXBpL3V0aWwvVksuanMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9rYXRhbWFyaS9zcmMvbWFpbi90cy9lcGhveC9rYXRhbWFyaS9hcGkvQXJyLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4va2F0YW1hcmkvc3JjL21haW4vdHMvZXBob3gva2F0YW1hcmkvYXBpL0NlbGwudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9rYXRhbWFyaS9zcmMvbWFpbi90cy9lcGhveC9rYXRhbWFyaS9hcGkvRnVuLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4va2F0YW1hcmkvc3JjL21haW4vdHMvZXBob3gva2F0YW1hcmkvYXBpL0dsb2JhbC50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL2thdGFtYXJpL3NyYy9tYWluL3RzL2VwaG94L2thdGFtYXJpL2FwaS9PYmoudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9rYXRhbWFyaS9zcmMvbWFpbi90cy9lcGhveC9rYXRhbWFyaS9hcGkvT3B0aW9uYWwudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9rYXRhbWFyaS9zcmMvbWFpbi90cy9lcGhveC9rYXRhbWFyaS9hcGkvT3B0aW9uYWxzLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4va2F0YW1hcmkvc3JjL21haW4vdHMvZXBob3gva2F0YW1hcmkvYXBpL1Jlc29sdmUudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9rYXRhbWFyaS9zcmMvbWFpbi90cy9lcGhveC9rYXRhbWFyaS9hcGkvU2luZ2xldG9uLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4va2F0YW1hcmkvc3JjL21haW4vdHMvZXBob3gva2F0YW1hcmkvYXBpL1N0cmluZ3MudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9rYXRhbWFyaS9zcmMvbWFpbi90cy9lcGhveC9rYXRhbWFyaS9hcGkvVGhyb3R0bGVyLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4va2F0YW1hcmkvc3JjL21haW4vdHMvZXBob3gva2F0YW1hcmkvYXBpL1RodW5rLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4va2F0YW1hcmkvc3JjL21haW4vdHMvZXBob3gva2F0YW1hcmkvYXBpL1R5cGUudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9rYXRhbWFyaS9zcmMvbWFpbi90cy9lcGhveC9rYXRhbWFyaS9zdHIvU3RyQXBwZW5kLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4vc2FuZC9zcmMvbWFpbi90cy9lcGhveC9zYW5kL2FwaS9QbGF0Zm9ybURldGVjdGlvbi50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL3NhbmQvc3JjL21haW4vdHMvZXBob3gvc2FuZC9hcGkvU2FuZEhUTUxFbGVtZW50LnRzIiwid2VicGFjazovL3RpbnltY2UvLi4vc2FuZC9zcmMvbWFpbi90cy9lcGhveC9zYW5kL2NvcmUvQnJvd3Nlci50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL3NhbmQvc3JjL21haW4vdHMvZXBob3gvc2FuZC9jb3JlL09wZXJhdGluZ1N5c3RlbS50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL3NhbmQvc3JjL21haW4vdHMvZXBob3gvc2FuZC9jb3JlL1BsYXRmb3JtRGV0ZWN0aW9uLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4vc2FuZC9zcmMvbWFpbi90cy9lcGhveC9zYW5kL2RldGVjdC9EZXZpY2VUeXBlLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4vc2FuZC9zcmMvbWFpbi90cy9lcGhveC9zYW5kL2RldGVjdC9VYURhdGEudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9zYW5kL3NyYy9tYWluL3RzL2VwaG94L3NhbmQvZGV0ZWN0L1VhU3RyaW5nLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4vc2FuZC9zcmMvbWFpbi90cy9lcGhveC9zYW5kL2RldGVjdC9WZXJzaW9uLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4vc2FuZC9zcmMvbWFpbi90cy9lcGhveC9zYW5kL2luZm8vUGxhdGZvcm1JbmZvLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4vc2FuZC9zcmMvbWFpbi90cy9lcGhveC9zYW5kL3V0aWwvR2xvYmFsLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4vc3VnYXIvc3JjL21haW4vdHMvZXBob3gvc3VnYXIvYWxpZW4vUmVjdXJzZS50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL3N1Z2FyL3NyYy9tYWluL3RzL2VwaG94L3N1Z2FyL2FwaS9kb20vQ29tcGFyZS50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL3N1Z2FyL3NyYy9tYWluL3RzL2VwaG94L3N1Z2FyL2FwaS9kb20vSW5zZXJ0LnRzIiwid2VicGFjazovL3RpbnltY2UvLi4vc3VnYXIvc3JjL21haW4vdHMvZXBob3gvc3VnYXIvYXBpL2RvbS9JbnNlcnRBbGwudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9zdWdhci9zcmMvbWFpbi90cy9lcGhveC9zdWdhci9hcGkvZG9tL1JlbW92ZS50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL3N1Z2FyL3NyYy9tYWluL3RzL2VwaG94L3N1Z2FyL2FwaS9ldmVudHMvRG9tRXZlbnQudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9zdWdhci9zcmMvbWFpbi90cy9lcGhveC9zdWdhci9hcGkvbm9kZS9Ob2RlVHlwZXMudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9zdWdhci9zcmMvbWFpbi90cy9lcGhveC9zdWdhci9hcGkvbm9kZS9TdWdhckJvZHkudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9zdWdhci9zcmMvbWFpbi90cy9lcGhveC9zdWdhci9hcGkvbm9kZS9TdWdhckVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9zdWdhci9zcmMvbWFpbi90cy9lcGhveC9zdWdhci9hcGkvbm9kZS9TdWdhckhlYWQudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9zdWdhci9zcmMvbWFpbi90cy9lcGhveC9zdWdhci9hcGkvbm9kZS9TdWdhck5vZGUudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9zdWdhci9zcmMvbWFpbi90cy9lcGhveC9zdWdhci9hcGkvbm9kZS9TdWdhclNoYWRvd0RvbS50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL3N1Z2FyL3NyYy9tYWluL3RzL2VwaG94L3N1Z2FyL2FwaS9wcm9wZXJ0aWVzL0F0dHJMaXN0LnRzIiwid2VicGFjazovL3RpbnltY2UvLi4vc3VnYXIvc3JjL21haW4vdHMvZXBob3gvc3VnYXIvYXBpL3Byb3BlcnRpZXMvQXR0cmlidXRlLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4vc3VnYXIvc3JjL21haW4vdHMvZXBob3gvc3VnYXIvYXBpL3Byb3BlcnRpZXMvQ2xhc3MudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9zdWdhci9zcmMvbWFpbi90cy9lcGhveC9zdWdhci9hcGkvcHJvcGVydGllcy9Dc3MudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9zdWdhci9zcmMvbWFpbi90cy9lcGhveC9zdWdhci9hcGkvcHJvcGVydGllcy9Ub2dnbGVyLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4vc3VnYXIvc3JjL21haW4vdHMvZXBob3gvc3VnYXIvYXBpL3NlYXJjaC9QcmVkaWNhdGVGaWx0ZXIudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9zdWdhci9zcmMvbWFpbi90cy9lcGhveC9zdWdhci9hcGkvc2VhcmNoL1NlbGVjdG9yRmlsdGVyLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4vc3VnYXIvc3JjL21haW4vdHMvZXBob3gvc3VnYXIvYXBpL3NlYXJjaC9TZWxlY3RvcnMudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9zdWdhci9zcmMvbWFpbi90cy9lcGhveC9zdWdhci9hcGkvc2VhcmNoL1RyYXZlcnNlLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4vc3VnYXIvc3JjL21haW4vdHMvZXBob3gvc3VnYXIvYXBpL3ZpZXcvU2Nyb2xsLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4vc3VnYXIvc3JjL21haW4vdHMvZXBob3gvc3VnYXIvYXBpL3ZpZXcvU3VnYXJMb2NhdGlvbi50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL3N1Z2FyL3NyYy9tYWluL3RzL2VwaG94L3N1Z2FyL2FwaS92aWV3L1N1Z2FyUG9zaXRpb24udHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9zdWdhci9zcmMvbWFpbi90cy9lcGhveC9zdWdhci9hcGkvdmlldy9XaW5kb3dWaXN1YWxWaWV3cG9ydC50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL3N1Z2FyL3NyYy9tYWluL3RzL2VwaG94L3N1Z2FyL2ltcGwvQ2xhc3NMaXN0LnRzIiwid2VicGFjazovL3RpbnltY2UvLi4vc3VnYXIvc3JjL21haW4vdHMvZXBob3gvc3VnYXIvaW1wbC9GaWx0ZXJlZEV2ZW50LnRzIiwid2VicGFjazovL3RpbnltY2UvLi4vc3VnYXIvc3JjL21haW4vdHMvZXBob3gvc3VnYXIvaW1wbC9TdHlsZS50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvZnVsbHNjcmVlbi9tYWluL3RzL1BsdWdpbi50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvZnVsbHNjcmVlbi9tYWluL3RzL2FwaS9BcGkudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL2Z1bGxzY3JlZW4vbWFpbi90cy9hcGkvQ29tbWFuZHMudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL2Z1bGxzY3JlZW4vbWFpbi90cy9hcGkvRXZlbnRzLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9mdWxsc2NyZWVuL21haW4vdHMvYXBpL09wdGlvbnMudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL2Z1bGxzY3JlZW4vbWFpbi90cy9jb3JlL0FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL2Z1bGxzY3JlZW4vbWFpbi90cy9jb3JlL0tleWJvYXJkLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9mdWxsc2NyZWVuL21haW4vdHMvY29yZS9OYXRpdmVGdWxsc2NyZWVuLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9mdWxsc2NyZWVuL21haW4vdHMvY29yZS9UaG9yLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9mdWxsc2NyZWVuL21haW4vdHMvdWkvQnV0dG9ucy50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uLy4uL25vZGVfbW9kdWxlcy9AZXBob3gvZGlzcHV0ZS9zcmMvbWFpbi90cy9hcGkvRXEudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi8uLi9ub2RlX21vZHVsZXMvQGVwaG94L2Rpc3B1dGUvc3JjL21haW4vdHMvY29yZS9BcnJheVV0aWwudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi8uLi9ub2RlX21vZHVsZXMvQGVwaG94L2Rpc3B1dGUvc3JjL21haW4vdHMvY29yZS9UeXBlLnRzIiwid2VicGFjazovL3RpbnltY2Uvd2VicGFjay9ydW50aW1lL2RlZmluZV9wcm9wZXJ0eV9nZXR0ZXJzIiwid2VicGFjazovL3RpbnltY2Uvd2VicGFjay9ydW50aW1lL2hhc19vd25fcHJvcGVydHkiLCJ3ZWJwYWNrOi8vdGlueW1jZS93ZWJwYWNrL3J1bnRpbWUvbWFrZV9uYW1lc3BhY2Vfb2JqZWN0Iiwid2VicGFjazovL3RpbnltY2Uvd2VicGFjay9ydW50aW1lL3JzcGFja192ZXJzaW9uIiwid2VicGFjazovL3RpbnltY2Uvd2VicGFjay9ydW50aW1lL3JzcGFja191bmlxdWVfaWQiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL2Z1bGxzY3JlZW4vbWFpbi90cy9NYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBnbG9iYWwgPSB0aW55bWNlLnV0aWwuVG9vbHMucmVzb2x2ZSgndGlueW1jZS5FbnYnKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2xvYmFsO1xuZXhwb3J0IHZhciBFbnYgPSBnbG9iYWw7XG4iLCJ2YXIgZ2xvYmFsID0gdGlueW1jZS51dGlsLlRvb2xzLnJlc29sdmUoJ3RpbnltY2UuUGx1Z2luTWFuYWdlcicpO1xuXG5leHBvcnQgZGVmYXVsdCBnbG9iYWw7XG5leHBvcnQgdmFyIFBsdWdpbk1hbmFnZXIgPSBnbG9iYWw7XG4iLCJ2YXIgZ2xvYmFsID0gdGlueW1jZS51dGlsLlRvb2xzLnJlc29sdmUoJ3RpbnltY2UuZG9tLkRPTVV0aWxzJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGdsb2JhbDtcbmV4cG9ydCB2YXIgRE9NVXRpbHMgPSBnbG9iYWw7XG4iLCJ2YXIgZ2xvYmFsID0gdGlueW1jZS51dGlsLlRvb2xzLnJlc29sdmUoJ3RpbnltY2UudXRpbC5WSycpO1xuXG5leHBvcnQgZGVmYXVsdCBnbG9iYWw7XG5leHBvcnQgdmFyIFZLID0gZ2xvYmFsO1xuIiwiaW1wb3J0IHsgRXEgfSBmcm9tICdAZXBob3gvZGlzcHV0ZSc7XG5cbmltcG9ydCAqIGFzIEZ1biBmcm9tICcuL0Z1bic7XG5pbXBvcnQgeyBPcHRpb25hbCB9IGZyb20gJy4vT3B0aW9uYWwnO1xuaW1wb3J0ICogYXMgVHlwZSBmcm9tICcuL1R5cGUnO1xuXG50eXBlIEFycmF5TW9ycGhpc208VCwgVT4gPSAoeDogVCwgaTogbnVtYmVyKSA9PiBVO1xudHlwZSBBcnJheUd1YXJkUHJlZGljYXRlPFQsIFUgZXh0ZW5kcyBUPiA9ICh4OiBULCBpOiBudW1iZXIpID0+IHggaXMgVTtcbnR5cGUgQXJyYXlQcmVkaWNhdGU8VD4gPSBBcnJheU1vcnBoaXNtPFQsIGJvb2xlYW4+O1xudHlwZSBDb21wYXJhdG9yPFQ+ID0gKGE6IFQsIGI6IFQpID0+IG51bWJlcjtcblxuY29uc3QgbmF0aXZlU2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5jb25zdCBuYXRpdmVJbmRleE9mID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2Y7XG5jb25zdCBuYXRpdmVQdXNoID0gQXJyYXkucHJvdG90eXBlLnB1c2g7XG5cbmNvbnN0IHJhd0luZGV4T2YgPSA8VD4gKHRzOiBBcnJheUxpa2U8VD4sIHQ6IFQpOiBudW1iZXIgPT5cbiAgbmF0aXZlSW5kZXhPZi5jYWxsKHRzLCB0KTtcblxuZXhwb3J0IGNvbnN0IGluZGV4T2YgPSA8VCA9IGFueT4oeHM6IEFycmF5TGlrZTxUPiwgeDogVCk6IE9wdGlvbmFsPG51bWJlcj4gPT4ge1xuICAvLyBUaGUgcmF3SW5kZXhPZiBtZXRob2QgZG9lcyBub3Qgd3JhcCB1cCBpbiBhbiBvcHRpb24uIFRoaXMgaXMgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMuXG4gIGNvbnN0IHIgPSByYXdJbmRleE9mKHhzLCB4KTtcbiAgcmV0dXJuIHIgPT09IC0xID8gT3B0aW9uYWwubm9uZSgpIDogT3B0aW9uYWwuc29tZShyKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb250YWlucyA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCB4OiBUKTogYm9vbGVhbiA9PiByYXdJbmRleE9mKHhzLCB4KSA+IC0xO1xuXG5leHBvcnQgY29uc3QgZXhpc3RzID0gPFQgPSBhbnk+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+KTogYm9vbGVhbiA9PiB7XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICBpZiAocHJlZCh4LCBpKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IGNvbnN0IHJhbmdlID0gPFQ+KG51bTogbnVtYmVyLCBmOiAoYTogbnVtYmVyKSA9PiBUKTogVFtdID0+IHtcbiAgY29uc3QgcjogVFtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtOyBpKyspIHtcbiAgICByLnB1c2goZihpKSk7XG4gIH1cbiAgcmV0dXJuIHI7XG59O1xuXG4vLyBJdCdzIGEgdG90YWwgbWljcm8gb3B0aW1pc2F0aW9uLCBidXQgdGhlc2UgZG8gbWFrZSBzb21lIGRpZmZlcmVuY2UuXG4vLyBQYXJ0aWN1bGFybHkgZm9yIGJyb3dzZXJzIG90aGVyIHRoYW4gQ2hyb21lLlxuLy8gLSBsZW5ndGggY2FjaGluZ1xuLy8gaHR0cDovL2pzcGVyZi5jb20vYnJvd3Nlci1kaWV0LWpxdWVyeS1lYWNoLXZzLWZvci1sb29wLzY5XG4vLyAtIG5vdCB1c2luZyBwdXNoXG4vLyBodHRwOi8vanNwZXJmLmNvbS9hcnJheS1kaXJlY3QtYXNzaWdubWVudC12cy1wdXNoLzJcblxuZXhwb3J0IGNvbnN0IGNodW5rID0gPFQ+KGFycmF5OiBBcnJheUxpa2U8VD4sIHNpemU6IG51bWJlcik6IFRbXVtdID0+IHtcbiAgY29uc3QgcjogVFtdW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkgKz0gc2l6ZSkge1xuICAgIGNvbnN0IHM6IFRbXSA9IG5hdGl2ZVNsaWNlLmNhbGwoYXJyYXksIGksIGkgKyBzaXplKTtcbiAgICByLnB1c2gocyk7XG4gIH1cbiAgcmV0dXJuIHI7XG59O1xuXG5leHBvcnQgY29uc3QgbWFwID0gPFQgPSBhbnksIFUgPSBhbnk+KHhzOiBBcnJheUxpa2U8VD4sIGY6IEFycmF5TW9ycGhpc208VCwgVT4pOiBVW10gPT4ge1xuICAvLyBwcmUtYWxsb2NhdGluZyBhcnJheSBzaXplIHdoZW4gaXQncyBndWFyYW50ZWVkIHRvIGJlIGtub3duXG4gIC8vIGh0dHA6Ly9qc3BlcmYuY29tL3B1c2gtYWxsb2NhdGVkLXZzLWR5bmFtaWMvMjJcbiAgY29uc3QgbGVuID0geHMubGVuZ3RoO1xuICBjb25zdCByID0gbmV3IEFycmF5KGxlbik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgcltpXSA9IGYoeCwgaSk7XG4gIH1cbiAgcmV0dXJuIHI7XG59O1xuXG4vLyBVbndvdW5kIGltcGxlbWVudGluZyBvdGhlciBmdW5jdGlvbnMgaW4gdGVybXMgb2YgZWFjaC5cbi8vIFRoZSBjb2RlIHNpemUgaXMgcm91Z2hseSB0aGUgc2FtZSwgYW5kIGl0IHNob3VsZCBhbGxvdyBmb3IgYmV0dGVyIG9wdGltaXNhdGlvbi5cbi8vIGNvbnN0IGVhY2ggPSBmdW5jdGlvbjxULCBVPih4czogVFtdLCBmOiAoeDogVCwgaT86IG51bWJlciwgeHM/OiBUW10pID0+IHZvaWQpOiB2b2lkIHtcbmV4cG9ydCBjb25zdCBlYWNoID0gPFQgPSBhbnk+KHhzOiBBcnJheUxpa2U8VD4sIGY6IEFycmF5TW9ycGhpc208VCwgdm9pZD4pOiB2b2lkID0+IHtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHhzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIGYoeCwgaSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBlYWNociA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCBmOiBBcnJheU1vcnBoaXNtPFQsIHZvaWQ+KTogdm9pZCA9PiB7XG4gIGZvciAobGV0IGkgPSB4cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICBmKHgsIGkpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgcGFydGl0aW9uID0gPFQgPSBhbnk+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+KTogeyBwYXNzOiBUW107IGZhaWw6IFRbXSB9ID0+IHtcbiAgY29uc3QgcGFzczogVFtdID0gW107XG4gIGNvbnN0IGZhaWw6IFRbXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0geHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgY29uc3QgYXJyID0gcHJlZCh4LCBpKSA/IHBhc3MgOiBmYWlsO1xuICAgIGFyci5wdXNoKHgpO1xuICB9XG4gIHJldHVybiB7IHBhc3MsIGZhaWwgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBmaWx0ZXI6IHtcbiAgPFQsIFUgZXh0ZW5kcyBUPih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheUd1YXJkUHJlZGljYXRlPFQsIFU+KTogVVtdO1xuICA8VD4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlQcmVkaWNhdGU8VD4pOiBUW107XG59ID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+KTogVFtdID0+IHtcbiAgY29uc3QgcjogVFtdID0gW107XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICBpZiAocHJlZCh4LCBpKSkge1xuICAgICAgci5wdXNoKHgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcjtcbn07XG5cbi8qXG4gKiBHcm91cHMgYW4gYXJyYXkgaW50byBjb250aWd1b3VzIGFycmF5cyBvZiBsaWtlIGVsZW1lbnRzLiBXaGV0aGVyIGFuIGVsZW1lbnQgaXMgbGlrZSBvciBub3QgZGVwZW5kcyBvbiBmLlxuICpcbiAqIGYgaXMgYSBmdW5jdGlvbiB0aGF0IGRlcml2ZXMgYSB2YWx1ZSBmcm9tIGFuIGVsZW1lbnQgLSBlLmcuIHRydWUgb3IgZmFsc2UsIG9yIGEgc3RyaW5nLlxuICogRWxlbWVudHMgYXJlIGxpa2UgaWYgdGhpcyBmdW5jdGlvbiBnZW5lcmF0ZXMgdGhlIHNhbWUgdmFsdWUgZm9yIHRoZW0gKGFjY29yZGluZyB0byA9PT0pLlxuICpcbiAqXG4gKiBPcmRlciBvZiB0aGUgZWxlbWVudHMgaXMgcHJlc2VydmVkLiBBcnIuZmxhdHRlbigpIG9uIHRoZSByZXN1bHQgd2lsbCByZXR1cm4gdGhlIG9yaWdpbmFsIGxpc3QsIGFzIHdpdGggSGFza2VsbCBncm91cEJ5IGZ1bmN0aW9uLlxuICogIEZvciBhIGdvb2QgZXhwbGFuYXRpb24sIHNlZSB0aGUgZ3JvdXAgZnVuY3Rpb24gKHdoaWNoIGlzIGEgc3BlY2lhbCBjYXNlIG9mIGdyb3VwQnkpXG4gKiAgaHR0cDovL2hhY2thZ2UuaGFza2VsbC5vcmcvcGFja2FnZS9iYXNlLTQuNy4wLjAvZG9jcy9EYXRhLUxpc3QuaHRtbCN2Omdyb3VwXG4gKi9cbmV4cG9ydCBjb25zdCBncm91cEJ5ID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4sIGY6IChhOiBUKSA9PiBhbnkpOiBUW11bXSA9PiB7XG4gIGlmICh4cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gW107XG4gIH0gZWxzZSB7XG4gICAgbGV0IHdhc1R5cGUgPSBmKHhzWzBdKTsgLy8gaW5pdGlhbCBjYXNlIGZvciBtYXRjaGluZ1xuICAgIGNvbnN0IHI6IFRbXVtdID0gW107XG4gICAgbGV0IGdyb3VwOiBUW10gPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgY29uc3QgeCA9IHhzW2ldO1xuICAgICAgY29uc3QgdHlwZSA9IGYoeCk7XG4gICAgICBpZiAodHlwZSAhPT0gd2FzVHlwZSkge1xuICAgICAgICByLnB1c2goZ3JvdXApO1xuICAgICAgICBncm91cCA9IFtdO1xuICAgICAgfVxuICAgICAgd2FzVHlwZSA9IHR5cGU7XG4gICAgICBncm91cC5wdXNoKHgpO1xuICAgIH1cbiAgICBpZiAoZ3JvdXAubGVuZ3RoICE9PSAwKSB7XG4gICAgICByLnB1c2goZ3JvdXApO1xuICAgIH1cbiAgICByZXR1cm4gcjtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGZvbGRyID0gPFQsIFU+KHhzOiBBcnJheUxpa2U8VD4sIGY6IChhY2M6IFUsIHg6IFQsIGk6IG51bWJlcikgPT4gVSwgYWNjOiBVKTogVSA9PiB7XG4gIGVhY2hyKHhzLCAoeCwgaSkgPT4ge1xuICAgIGFjYyA9IGYoYWNjLCB4LCBpKTtcbiAgfSk7XG4gIHJldHVybiBhY2M7XG59O1xuXG5leHBvcnQgY29uc3QgZm9sZGwgPSA8VCA9IGFueSwgVSA9IGFueT4oeHM6IEFycmF5TGlrZTxUPiwgZjogKGFjYzogVSwgeDogVCwgaTogbnVtYmVyKSA9PiBVLCBhY2M6IFUpOiBVID0+IHtcbiAgZWFjaCh4cywgKHgsIGkpID0+IHtcbiAgICBhY2MgPSBmKGFjYywgeCwgaSk7XG4gIH0pO1xuICByZXR1cm4gYWNjO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmRVbnRpbDoge1xuICA8VCwgVSBleHRlbmRzIFQ+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5R3VhcmRQcmVkaWNhdGU8VCwgVT4sIHVudGlsOiBBcnJheVByZWRpY2F0ZTxUPik6IE9wdGlvbmFsPFU+O1xuICA8VCA9IGFueT4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlQcmVkaWNhdGU8VD4sIHVudGlsOiBBcnJheVByZWRpY2F0ZTxUPik6IE9wdGlvbmFsPFQ+O1xufSA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheVByZWRpY2F0ZTxUPiwgdW50aWw6IEFycmF5UHJlZGljYXRlPFQ+KTogT3B0aW9uYWw8VD4gPT4ge1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0geHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgaWYgKHByZWQoeCwgaSkpIHtcbiAgICAgIHJldHVybiBPcHRpb25hbC5zb21lKHgpO1xuICAgIH0gZWxzZSBpZiAodW50aWwoeCwgaSkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gT3B0aW9uYWwubm9uZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmQ6IHtcbiAgPFQsIFUgZXh0ZW5kcyBUPih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheUd1YXJkUHJlZGljYXRlPFQsIFU+KTogT3B0aW9uYWw8VT47XG4gIDxUID0gYW55Pih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheVByZWRpY2F0ZTxUPik6IE9wdGlvbmFsPFQ+O1xufSA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheVByZWRpY2F0ZTxUPik6IE9wdGlvbmFsPFQ+ID0+IHtcbiAgcmV0dXJuIGZpbmRVbnRpbCh4cywgcHJlZCwgRnVuLm5ldmVyKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmaW5kSW5kZXggPSA8VD4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlQcmVkaWNhdGU8VD4pOiBPcHRpb25hbDxudW1iZXI+ID0+IHtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHhzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIGlmIChwcmVkKHgsIGkpKSB7XG4gICAgICByZXR1cm4gT3B0aW9uYWwuc29tZShpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gT3B0aW9uYWwubm9uZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmRMYXN0SW5kZXggPSA8VD4oYXJyOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+KTogT3B0aW9uYWw8bnVtYmVyPiA9PiB7XG4gIGZvciAobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBpZiAocHJlZChhcnJbaV0sIGkpKSB7XG4gICAgICByZXR1cm4gT3B0aW9uYWwuc29tZShpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gT3B0aW9uYWwubm9uZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZsYXR0ZW4gPSA8VD4oeHM6IEFycmF5TGlrZTxUW10+KTogVFtdID0+IHtcbiAgLy8gTm90ZSwgdGhpcyBpcyBwb3NzaWJsZSBiZWNhdXNlIHB1c2ggc3VwcG9ydHMgbXVsdGlwbGUgYXJndW1lbnRzOlxuICAvLyBodHRwOi8vanNwZXJmLmNvbS9jb25jYXQtcHVzaC82XG4gIC8vIE5vdGUgdGhhdCBpbiB0aGUgcGFzdCwgY29uY2F0KCkgd291bGQgc2lsZW50bHkgd29yayAodmVyeSBzbG93bHkpIGZvciBhcnJheS1saWtlIG9iamVjdHMuXG4gIC8vIFdpdGggdGhpcyBjaGFuZ2UgaXQgd2lsbCB0aHJvdyBhbiBlcnJvci5cbiAgY29uc3QgcjogVFtdID0gW107XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgIC8vIEVuc3VyZSB0aGF0IGVhY2ggdmFsdWUgaXMgYW4gYXJyYXkgaXRzZWxmXG4gICAgaWYgKCFUeXBlLmlzQXJyYXkoeHNbaV0pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Fyci5mbGF0dGVuIGl0ZW0gJyArIGkgKyAnIHdhcyBub3QgYW4gYXJyYXksIGlucHV0OiAnICsgeHMpO1xuICAgIH1cbiAgICBuYXRpdmVQdXNoLmFwcGx5KHIsIHhzW2ldKTtcbiAgfVxuICByZXR1cm4gcjtcbn07XG5cbmV4cG9ydCBjb25zdCBiaW5kID0gPFQgPSBhbnksIFUgPSBhbnk+KHhzOiBBcnJheUxpa2U8VD4sIGY6IEFycmF5TW9ycGhpc208VCwgVVtdPik6IFVbXSA9PlxuICBmbGF0dGVuKG1hcCh4cywgZikpO1xuXG5leHBvcnQgY29uc3QgZm9yYWxsID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+KTogYm9vbGVhbiA9PiB7XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICBpZiAocHJlZCh4LCBpKSAhPT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmV4cG9ydCBjb25zdCBlcXVhbCA9IDxUPihhMTogQXJyYXlMaWtlPFQ+LCBhMjogQXJyYXlMaWtlPFQ+LCBlcTogRXEuRXE8VD4gPSBFcS5lcUFueSk6IGJvb2xlYW4gPT5cbiAgRXEuZXFBcnJheShlcSkuZXEoYTEsIGEyKTtcblxuZXhwb3J0IGNvbnN0IHJldmVyc2UgPSA8VD4oeHM6IEFycmF5TGlrZTxUPik6IFRbXSA9PiB7XG4gIGNvbnN0IHI6IFRbXSA9IG5hdGl2ZVNsaWNlLmNhbGwoeHMsIDApO1xuICByLnJldmVyc2UoKTtcbiAgcmV0dXJuIHI7XG59O1xuXG5leHBvcnQgY29uc3QgZGlmZmVyZW5jZSA9IDxUPihhMTogQXJyYXlMaWtlPFQ+LCBhMjogQXJyYXlMaWtlPFQ+KTogVFtdID0+IGZpbHRlcihhMSwgKHgpID0+ICFjb250YWlucyhhMiwgeCkpO1xuXG5leHBvcnQgY29uc3QgbWFwVG9PYmplY3Q6IHtcbiAgPFQgZXh0ZW5kcyBzdHJpbmcsIFU+KHhzOiBBcnJheUxpa2U8VD4sIGY6ICh4OiBULCBpOiBudW1iZXIpID0+IFUpOiBSZWNvcmQ8VCwgVT47XG4gIDxULCBSIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55Pj4oeHM6IEFycmF5TGlrZTxUPiwgZjogKHg6IFQsIGk6IG51bWJlcikgPT4gUltrZXlvZiBSXSk6IFI7XG59ID0gPFQsIFIgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+Pih4czogQXJyYXlMaWtlPFQ+LCBmOiAoeDogVCwgaTogbnVtYmVyKSA9PiBSW2tleW9mIFJdKTogUiA9PiB7XG4gIGNvbnN0IHIgPSB7fSBhcyBSO1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0geHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgcltTdHJpbmcoeCkgYXMga2V5b2YgUl0gPSBmKHgsIGkpO1xuICB9XG4gIHJldHVybiByO1xufTtcblxuZXhwb3J0IGNvbnN0IHB1cmUgPSA8VD4oeDogVCk6IFRbXSA9PiBbIHggXTtcblxuZXhwb3J0IGNvbnN0IHNvcnQgPSA8VD4oeHM6IEFycmF5TGlrZTxUPiwgY29tcGFyYXRvcj86IENvbXBhcmF0b3I8VD4pOiBUW10gPT4ge1xuICBjb25zdCBjb3B5OiBUW10gPSBuYXRpdmVTbGljZS5jYWxsKHhzLCAwKTtcbiAgY29weS5zb3J0KGNvbXBhcmF0b3IpO1xuICByZXR1cm4gY29weTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXQgPSA8VD4oeHM6IEFycmF5TGlrZTxUPiwgaTogbnVtYmVyKTogT3B0aW9uYWw8VD4gPT4gaSA+PSAwICYmIGkgPCB4cy5sZW5ndGggPyBPcHRpb25hbC5zb21lKHhzW2ldKSA6IE9wdGlvbmFsLm5vbmUoKTtcblxuZXhwb3J0IGNvbnN0IGhlYWQgPSA8VD4oeHM6IEFycmF5TGlrZTxUPik6IE9wdGlvbmFsPFQ+ID0+IGdldCh4cywgMCk7XG5cbmV4cG9ydCBjb25zdCBsYXN0ID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4pOiBPcHRpb25hbDxUPiA9PiBnZXQoeHMsIHhzLmxlbmd0aCAtIDEpO1xuXG5leHBvcnQgY29uc3QgZnJvbTogPFQ+KHg6IEFycmF5TGlrZTxUPikgPT4gVFtdID0gVHlwZS5pc0Z1bmN0aW9uKEFycmF5LmZyb20pID8gQXJyYXkuZnJvbSA6ICh4KSA9PiBuYXRpdmVTbGljZS5jYWxsKHgpO1xuXG5leHBvcnQgY29uc3QgZmluZE1hcCA9IDxBLCBCPihhcnI6IEFycmF5TGlrZTxBPiwgZjogKGE6IEEsIGluZGV4OiBudW1iZXIpID0+IE9wdGlvbmFsPEI+KTogT3B0aW9uYWw8Qj4gPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHIgPSBmKGFycltpXSwgaSk7XG4gICAgaWYgKHIuaXNTb21lKCkpIHtcbiAgICAgIHJldHVybiByO1xuICAgIH1cbiAgfVxuICByZXR1cm4gT3B0aW9uYWwubm9uZTxCPigpO1xufTtcblxuZXhwb3J0IGNvbnN0IHVuaXF1ZSA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCBjb21wYXJhdG9yPzogKGE6IFQsIGI6IFQpID0+IGJvb2xlYW4pOiBUW10gPT4ge1xuICBjb25zdCByOiBUW10gPSBbXTtcblxuICBjb25zdCBpc0R1cGxpY2F0ZWQgPSBUeXBlLmlzRnVuY3Rpb24oY29tcGFyYXRvcikgP1xuICAgICh4OiBUKSA9PiBleGlzdHMociwgKGkpID0+IGNvbXBhcmF0b3IoaSwgeCkpIDpcbiAgICAoeDogVCkgPT4gY29udGFpbnMociwgeCk7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHhzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIGlmICghaXNEdXBsaWNhdGVkKHgpKSB7XG4gICAgICByLnB1c2goeCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHI7XG59O1xuIiwiZXhwb3J0IGludGVyZmFjZSBDZWxsPFQ+IHtcbiAgcmVhZG9ubHkgZ2V0OiAoKSA9PiBUO1xuICByZWFkb25seSBzZXQ6ICh2YWx1ZTogVCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IENlbGwgPSA8VD4oaW5pdGlhbDogVCk6IENlbGw8VD4gPT4ge1xuICBsZXQgdmFsdWUgPSBpbml0aWFsO1xuXG4gIGNvbnN0IGdldCA9ICgpID0+IHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG5cbiAgY29uc3Qgc2V0ID0gKHY6IFQpID0+IHtcbiAgICB2YWx1ZSA9IHY7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQsXG4gICAgc2V0XG4gIH07XG59O1xuIiwiaW1wb3J0ICogYXMgVHlwZSBmcm9tICcuL1R5cGUnO1xuXG5jb25zdCBub29wOiAoLi4uYXJnczogYW55W10pID0+IHZvaWRcbj0gKCkgPT4geyB9O1xuXG5jb25zdCBub2FyZzogPFQ+KGY6ICgpID0+IFQpID0+ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZFxuPSAoZikgPT4gKCkgPT4gZigpO1xuXG4vKiogQ29tcG9zZSBhIHVuYXJ5IGZ1bmN0aW9uIHdpdGggYW4gbi1hcnkgZnVuY3Rpb24gKi9cbmNvbnN0IGNvbXBvc2UgPSA8VCBleHRlbmRzIGFueVtdLCBVLCBWPihmYTogKHY6IFUpID0+IFYsIGZiOiAoLi4ueDogVCkgPT4gVSk6ICguLi54OiBUKSA9PiBWID0+IHtcbiAgcmV0dXJuICguLi5hcmdzOiBUKSA9PiB7XG4gICAgcmV0dXJuIGZhKGZiLmFwcGx5KG51bGwsIGFyZ3MpKTtcbiAgfTtcbn07XG5cbi8qKiBDb21wb3NlIHR3byB1bmFyeSBmdW5jdGlvbnMuIFNpbWlsYXIgdG8gY29tcG9zZSwgYnV0IGF2b2lkcyB1c2luZyBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuICovXG5jb25zdCBjb21wb3NlMSA9IDxBLCBCLCBDPiAoZmJjOiAoYjogQikgPT4gQywgZmFiOiAoYTogQSkgPT4gQikgPT4gKGE6IEEpOiBDID0+XG4gIGZiYyhmYWIoYSkpO1xuXG5jb25zdCBjb25zdGFudCA9IDxUPih2YWx1ZTogVCk6ICgpID0+IFQgPT4ge1xuICByZXR1cm4gKCkgPT4ge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcbn07XG5cbmNvbnN0IGlkZW50aXR5ID0gPFQgPSBhbnk+KHg6IFQpOiBUID0+IHtcbiAgcmV0dXJuIHg7XG59O1xuXG5jb25zdCB0cmlwbGVFcXVhbHMgPSA8VD4oYTogVCwgYjogVCk6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gYSA9PT0gYjtcbn07XG5cbmZ1bmN0aW9uIGN1cnJ5IDxSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8QSwgUkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoYTogQSwgLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCwgYTogQSk6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPEEsIEIsIFJFU1QgZXh0ZW5kcyBhbnlbXSwgT1VUPihmbjogKGE6IEEsIGI6IEIsIC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQsIGE6IEEsIGI6IEIpOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVDtcbmZ1bmN0aW9uIGN1cnJ5IDxBLCBCLCBDLCBSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46IChhOiBBLCBiOiBCLCBjOiBDLCAuLi5yZXN0QXJnczogUkVTVCkgPT4gT1VULCBhOiBBLCBiOiBCLCBjOiBDKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8QSwgQiwgQywgRCwgUkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoYTogQSwgYjogQiwgYzogQywgZDogRCwgLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCwgYTogQSwgYjogQiwgYzogQywgZDogRCk6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPEEsIEIsIEMsIEQsIEUsIFJFU1QgZXh0ZW5kcyBhbnlbXSwgT1VUPihmbjogKGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQsIGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUpOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVDtcbmZ1bmN0aW9uIGN1cnJ5IDxBLCBCLCBDLCBELCBFLCBGLCBSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46IChhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCBmOiBGLCAuLi5yZXN0QXJnczogUkVTVCkgPT4gT1VULCBhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCBmOiBGKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8QSwgQiwgQywgRCwgRSwgRiwgRywgUkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgZjogRiwgZzogRywgLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCwgYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgZjogRiwgZzogRyk6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPEEsIEIsIEMsIEQsIEUsIEYsIEcsIEgsIFJFU1QgZXh0ZW5kcyBhbnlbXSwgT1VUPihmbjogKGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIGY6IEYsIGc6IEcsIGg6IEgsIC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQsIGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIGY6IEYsIGc6IEcsIGg6IEgpOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVDtcbmZ1bmN0aW9uIGN1cnJ5IDxBLCBCLCBDLCBELCBFLCBGLCBHLCBILCBJLCBSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46IChhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCBmOiBGLCBnOiBHLCBoOiBILCBpOiBJLCAuLi5yZXN0QXJnczogUkVTVCkgPT4gT1VULCBhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCBmOiBGLCBnOiBHLCBoOiBILCBpOiBJKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8QSwgQiwgQywgRCwgRSwgRiwgRywgSCwgSSwgSiwgUkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgZjogRiwgZzogRywgaDogSCwgaTogSSwgajogSiwgLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCwgYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgZjogRiwgZzogRywgaDogSCwgaTogSSwgajogSik6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPE9VVD4oZm46ICguLi5hbGxBcmdzOiBhbnlbXSkgPT4gT1VULCAuLi5pbml0aWFsQXJnczogYW55W10pOiAoLi4ucmVzdEFyZ3M6IGFueVtdKSA9PiBPVVQge1xuICByZXR1cm4gKC4uLnJlc3RBcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IGFsbCA9IGluaXRpYWxBcmdzLmNvbmNhdChyZXN0QXJncyk7XG4gICAgcmV0dXJuIGZuLmFwcGx5KG51bGwsIGFsbCk7XG4gIH07XG59XG5cbmNvbnN0IG5vdCA9IDxUPihmOiAodDogVCkgPT4gYm9vbGVhbikgPT4gKHQ6IFQpOiBib29sZWFuID0+XG4gICFmKHQpO1xuXG5jb25zdCBkaWUgPSAobXNnOiBzdHJpbmcpID0+IHtcbiAgcmV0dXJuICgpOiBuZXZlciA9PiB7XG4gICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XG4gIH07XG59O1xuXG5jb25zdCBhcHBseSA9IDxUPihmOiAoKSA9PiBUKTogVCA9PiB7XG4gIHJldHVybiBmKCk7XG59O1xuXG5jb25zdCBjYWxsID0gKGY6ICgpID0+IGFueSk6IHZvaWQgPT4ge1xuICBmKCk7XG59O1xuXG5jb25zdCBuZXZlcjogKC4uLmFyZ3M6IGFueVtdKSA9PiBmYWxzZSA9IGNvbnN0YW50PGZhbHNlPihmYWxzZSk7XG5jb25zdCBhbHdheXM6ICguLi5hcmdzOiBhbnlbXSkgPT4gdHJ1ZSA9IGNvbnN0YW50PHRydWU+KHRydWUpO1xuXG4vKiBVc2VkIHRvIHdlYWtlbiB0eXBlcyAqL1xuY29uc3Qgd2Vha2VuID0gPEEsIEIgZXh0ZW5kcyBBPihiOiBCKTogQSA9PiBiO1xuXG50eXBlIEZ1bjxYLCBZPiA9ICh4OiBYKSA9PiBZO1xuY29uc3QgcGlwZToge1xuICA8QSwgQj4oYTogQSwgYWI6IEZ1bjxBLCBCPik6IEI7XG4gIDxBLCBCLCBDPihhOiBBLCBhYjogRnVuPEEsIEI+LCBiYzogRnVuPEIsIEM+KTogQztcbiAgPEEsIEIsIEMsIEQ+KGE6IEEsIGFiOiBGdW48QSwgQj4sIGJjOiBGdW48QiwgQz4sIGNkOiBGdW48QywgRD4pOiBEO1xuICA8QSwgQiwgQywgRCwgRT4oYTogQSwgYWI6IEZ1bjxBLCBCPiwgYmM6IEZ1bjxCLCBDPiwgY2Q6IEZ1bjxDLCBEPiwgZGU6IEZ1bjxELCBFPik6IEU7XG4gIDxBLCBCLCBDLCBELCBFLCBGPihhOiBBLCBhYjogRnVuPEEsIEI+LCBiYzogRnVuPEIsIEM+LCBjZDogRnVuPEMsIEQ+LCBkZTogRnVuPEQsIEU+LCBlZjogRnVuPEUsIEY+KTogRjtcbiAgPEEsIEIsIEMsIEQsIEUsIEYsIEc+KGE6IEEsIGFiOiBGdW48QSwgQj4sIGJjOiBGdW48QiwgQz4sIGNkOiBGdW48QywgRD4sIGRlOiBGdW48RCwgRT4sIGVmOiBGdW48RSwgRj4sIGZnOiBGdW48RiwgRz4pOiBHO1xuICA8QSwgQiwgQywgRCwgRSwgRiwgRywgSD4oYTogQSwgYWI6IEZ1bjxBLCBCPiwgYmM6IEZ1bjxCLCBDPiwgY2Q6IEZ1bjxDLCBEPiwgZGU6IEZ1bjxELCBFPiwgZWY6IEZ1bjxFLCBGPiwgZmc6IEZ1bjxGLCBHPiwgZ2g6IEZ1bjxHLCBIPik6IEg7XG59ID1cbiAgPEEsIEIsIEMsIEQsIEUsIEYsIEcsIEg+KGE6IEEsIGFiOiBGdW48QSwgQj4sIGJjPzogRnVuPEIsIEM+LCBjZD86IEZ1bjxDLCBEPiwgZGU/OiBGdW48RCwgRT4sIGVmPzogRnVuPEUsIEY+LCBmZz86IEZ1bjxGLCBHPiwgZ2g/OiBGdW48RywgSD4pOiBCIHwgQyB8IEQgfCBFIHwgRiB8IEcgfCBIID0+IHtcbiAgICBjb25zdCBiID0gYWIoYSk7XG4gICAgaWYgKFR5cGUuaXNOdWxsYWJsZShiYykpIHtcbiAgICAgIHJldHVybiBiO1xuICAgIH1cblxuICAgIGNvbnN0IGMgPSBiYyhiKTtcbiAgICBpZiAoVHlwZS5pc051bGxhYmxlKGNkKSkge1xuICAgICAgcmV0dXJuIGM7XG4gICAgfVxuXG4gICAgY29uc3QgZCA9IGNkKGMpO1xuICAgIGlmIChUeXBlLmlzTnVsbGFibGUoZGUpKSB7XG4gICAgICByZXR1cm4gZDtcbiAgICB9XG5cbiAgICBjb25zdCBlID0gZGUoZCk7XG4gICAgaWYgKFR5cGUuaXNOdWxsYWJsZShlZikpIHtcbiAgICAgIHJldHVybiBlO1xuICAgIH1cblxuICAgIGNvbnN0IGYgPSBlZihlKTtcbiAgICBpZiAoVHlwZS5pc051bGxhYmxlKGZnKSkge1xuICAgICAgcmV0dXJuIGY7XG4gICAgfVxuXG4gICAgY29uc3QgZyA9IGZnKGYpO1xuICAgIGlmIChUeXBlLmlzTnVsbGFibGUoZ2gpKSB7XG4gICAgICByZXR1cm4gZztcbiAgICB9XG5cbiAgICByZXR1cm4gZ2goZyk7XG4gIH07XG5cbmV4cG9ydCB7XG4gIG5vb3AsXG4gIG5vYXJnLFxuICBjb21wb3NlLFxuICBjb21wb3NlMSxcbiAgY29uc3RhbnQsXG4gIGlkZW50aXR5LFxuICB0cmlwbGVFcXVhbHMsXG4gIGN1cnJ5LFxuICBub3QsXG4gIGRpZSxcbiAgYXBwbHksXG4gIGNhbGwsXG4gIG5ldmVyLFxuICBhbHdheXMsXG4gIHdlYWtlbixcbiAgcGlwZVxufTtcbiIsIi8vIFVzZSB3aW5kb3cgb2JqZWN0IGFzIHRoZSBnbG9iYWwgaWYgaXQncyBhdmFpbGFibGUgc2luY2UgQ1NQIHdpbGwgYmxvY2sgc2NyaXB0IGV2YWxzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWltcGxpZWQtZXZhbFxuZXhwb3J0IGNvbnN0IEdsb2JhbCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogRnVuY3Rpb24oJ3JldHVybiB0aGlzOycpKCk7XG4iLCJpbXBvcnQgeyBFcSB9IGZyb20gJ0BlcGhveC9kaXNwdXRlJztcblxuaW1wb3J0ICogYXMgRnVuIGZyb20gJy4vRnVuJztcbmltcG9ydCB7IE9wdGlvbmFsIH0gZnJvbSAnLi9PcHRpb25hbCc7XG5cbnR5cGUgT2JqS2V5czxUIGV4dGVuZHMge30+ID0gRXh0cmFjdDxrZXlvZiBULCBzdHJpbmc+O1xudHlwZSBPYmpDYWxsYmFjazxUIGV4dGVuZHMge30+ID0gKHZhbHVlOiBUW2tleW9mIFRdLCBrZXk6IE9iaktleXM8VD4pID0+IHZvaWQ7XG50eXBlIE9iak1vcnBoaXNtPFQgZXh0ZW5kcyB7fSwgUj4gPSAodmFsdWU6IFRba2V5b2YgVF0sIGtleTogT2JqS2V5czxUPikgPT4gUjtcbnR5cGUgT2JqR3VhcmRQcmVkaWNhdGU8VCBleHRlbmRzIHt9LCBVIGV4dGVuZHMgVFtrZXlvZiBUXT4gPSAodmFsdWU6IFRba2V5b2YgVF0sIGtleTogT2JqS2V5czxUPikgPT4gdmFsdWUgaXMgVTtcbnR5cGUgT2JqUHJlZGljYXRlPFQgZXh0ZW5kcyB7fT4gPSAodmFsdWU6IFRba2V5b2YgVF0sIGtleTogT2JqS2V5czxUPikgPT4gYm9vbGVhbjtcblxuLy8gVGhlcmUgYXJlIG1hbnkgdmFyaWF0aW9ucyBvZiBPYmplY3QgaXRlcmF0aW9uIHRoYXQgYXJlIGZhc3RlciB0aGFuIHRoZSAnZm9yLWluJyBzdHlsZTpcbi8vIGh0dHA6Ly9qc3BlcmYuY29tL29iamVjdC1rZXlzLWl0ZXJhdGlvbi8xMDdcbi8vXG4vLyBVc2UgdGhlIG5hdGl2ZSBrZXlzIGlmIGl0IGlzIGF2YWlsYWJsZSAoSUU5KyksIG90aGVyd2lzZSBmYWxsIGJhY2sgdG8gbWFudWFsbHkgZmlsdGVyaW5nXG5leHBvcnQgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzO1xuXG5leHBvcnQgY29uc3QgaGFzT3duUHJvcGVydHkgPSBPYmplY3QuaGFzT3duUHJvcGVydHk7XG5cbmV4cG9ydCBjb25zdCBlYWNoID0gPFQgZXh0ZW5kcyB7fT4ob2JqOiBULCBmOiBPYmpDYWxsYmFjazxUPik6IHZvaWQgPT4ge1xuICBjb25zdCBwcm9wcyA9IGtleXMob2JqKSBhcyBBcnJheTxPYmpLZXlzPFQ+PjtcbiAgZm9yIChsZXQgayA9IDAsIGxlbiA9IHByb3BzLmxlbmd0aDsgayA8IGxlbjsgaysrKSB7XG4gICAgY29uc3QgaSA9IHByb3BzW2tdO1xuICAgIGNvbnN0IHggPSBvYmpbaV07XG4gICAgZih4LCBpKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IG1hcCA9IDxUIGV4dGVuZHMge30sIFI+KG9iajogVCwgZjogT2JqTW9ycGhpc208VCwgUj4pOiB7IFtrIGluIGtleW9mIFRdOiBSIH0gPT4ge1xuICByZXR1cm4gdHVwbGVNYXA8eyBbayBpbiBrZXlvZiBUXTogUiB9LCBUPihvYmosICh4LCBpKSA9PiAoe1xuICAgIGs6IGksXG4gICAgdjogZih4LCBpKVxuICB9KSk7XG59O1xuXG5leHBvcnQgY29uc3QgdHVwbGVNYXAgPSA8UiBleHRlbmRzIHt9LCBUIGV4dGVuZHMge30+KG9iajogVCwgZjogT2JqTW9ycGhpc208VCwgeyBrOiBrZXlvZiBSOyB2OiBSW2tleW9mIFJdIH0+KTogUiA9PiB7XG4gIGNvbnN0IHIgPSB7fSBhcyBSO1xuICBlYWNoKG9iaiwgKHgsIGkpID0+IHtcbiAgICBjb25zdCB0dXBsZSA9IGYoeCwgaSk7XG4gICAgclt0dXBsZS5rXSA9IHR1cGxlLnY7XG4gIH0pO1xuICByZXR1cm4gcjtcbn07XG5cbmNvbnN0IG9iakFjYyA9IDxUIGV4dGVuZHMge30+KHI6IFQpID0+ICh4OiBUW2tleW9mIFRdLCBpOiBrZXlvZiBUKTogdm9pZCA9PiB7XG4gIHJbaV0gPSB4O1xufTtcblxuY29uc3QgaW50ZXJuYWxGaWx0ZXIgPSA8VCBleHRlbmRzIHt9PihvYmo6IFQsIHByZWQ6IE9ialByZWRpY2F0ZTxUPiwgb25UcnVlOiBPYmpDYWxsYmFjazxUPiwgb25GYWxzZTogT2JqQ2FsbGJhY2s8VD4pID0+IHtcbiAgZWFjaChvYmosICh4LCBpKSA9PiB7XG4gICAgKHByZWQoeCwgaSkgPyBvblRydWUgOiBvbkZhbHNlKSh4LCBpKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgYmlmaWx0ZXIgPSA8VCBleHRlbmRzIHt9PihvYmo6IFQsIHByZWQ6IE9ialByZWRpY2F0ZTxUPik6IHsgdDogUmVjb3JkPHN0cmluZywgVFtrZXlvZiBUXT47IGY6IFJlY29yZDxzdHJpbmcsIFRba2V5b2YgVF0+IH0gPT4ge1xuICBjb25zdCB0OiBSZWNvcmQ8c3RyaW5nLCBUW2tleW9mIFRdPiA9IHt9O1xuICBjb25zdCBmOiBSZWNvcmQ8c3RyaW5nLCBUW2tleW9mIFRdPiA9IHt9O1xuICBpbnRlcm5hbEZpbHRlcihvYmosIHByZWQsIG9iakFjYyh0KSwgb2JqQWNjKGYpKTtcbiAgcmV0dXJuIHsgdCwgZiB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbHRlcjoge1xuICA8VCBleHRlbmRzIHt9LCBVIGV4dGVuZHMgVFtrZXlvZiBUXT4ob2JqOiBULCBwcmVkOiBPYmpHdWFyZFByZWRpY2F0ZTxULCBVPik6IFJlY29yZDxzdHJpbmcsIFU+O1xuICA8VCBleHRlbmRzIHt9PihvYmo6IFQsIHByZWQ6IE9ialByZWRpY2F0ZTxUPik6IFJlY29yZDxzdHJpbmcsIFRba2V5b2YgVF0+O1xufSA9IDxUIGV4dGVuZHMge30+KG9iajogVCwgcHJlZDogT2JqUHJlZGljYXRlPFQ+KTogUmVjb3JkPHN0cmluZywgVFtrZXlvZiBUXT4gPT4ge1xuICBjb25zdCB0OiBSZWNvcmQ8c3RyaW5nLCBUW2tleW9mIFRdPiA9IHt9O1xuICBpbnRlcm5hbEZpbHRlcihvYmosIHByZWQsIG9iakFjYyh0KSwgRnVuLm5vb3ApO1xuICByZXR1cm4gdDtcbn07XG5cbmV4cG9ydCBjb25zdCBtYXBUb0FycmF5ID0gPFQgZXh0ZW5kcyB7fSwgUj4ob2JqOiBULCBmOiBPYmpNb3JwaGlzbTxULCBSPik6IFJbXSA9PiB7XG4gIGNvbnN0IHI6IFJbXSA9IFtdO1xuICBlYWNoKG9iaiwgKHZhbHVlLCBuYW1lKSA9PiB7XG4gICAgci5wdXNoKGYodmFsdWUsIG5hbWUpKTtcbiAgfSk7XG4gIHJldHVybiByO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmQgPSA8VCBleHRlbmRzIHt9PihvYmo6IFQsIHByZWQ6ICh2YWx1ZTogVFtrZXlvZiBUXSwga2V5OiBPYmpLZXlzPFQ+LCBvYmo6IFQpID0+IGJvb2xlYW4pOiBPcHRpb25hbDxUW2tleW9mIFRdPiA9PiB7XG4gIGNvbnN0IHByb3BzID0ga2V5cyhvYmopIGFzIEFycmF5PE9iaktleXM8VD4+O1xuICBmb3IgKGxldCBrID0gMCwgbGVuID0gcHJvcHMubGVuZ3RoOyBrIDwgbGVuOyBrKyspIHtcbiAgICBjb25zdCBpID0gcHJvcHNba107XG4gICAgY29uc3QgeCA9IG9ialtpXTtcbiAgICBpZiAocHJlZCh4LCBpLCBvYmopKSB7XG4gICAgICByZXR1cm4gT3B0aW9uYWwuc29tZSh4KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIE9wdGlvbmFsLm5vbmUoKTtcbn07XG5cbmV4cG9ydCBjb25zdCB2YWx1ZXMgPSA8VCBleHRlbmRzIHt9PihvYmo6IFQpOiBBcnJheTxUW2tleW9mIFRdPiA9PiB7XG4gIHJldHVybiBtYXBUb0FycmF5KG9iaiwgRnVuLmlkZW50aXR5KTtcbn07XG5cbmV4cG9ydCBjb25zdCBzaXplID0gKG9iajoge30pOiBudW1iZXIgPT4ge1xuICByZXR1cm4ga2V5cyhvYmopLmxlbmd0aDtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXQgPSA8VCBleHRlbmRzIHt9LCBLIGV4dGVuZHMga2V5b2YgVD4ob2JqOiBULCBrZXk6IEspOiBPcHRpb25hbDxOb25OdWxsYWJsZTxUW0tdPj4gPT4ge1xuICByZXR1cm4gaGFzKG9iaiwga2V5KSA/IE9wdGlvbmFsLmZyb20ob2JqW2tleV0gYXMgTm9uTnVsbGFibGU8VFtLXT4pIDogT3B0aW9uYWwubm9uZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGhhcyA9IDxUIGV4dGVuZHMge30sIEsgZXh0ZW5kcyBrZXlvZiBUPihvYmo6IFQsIGtleTogSyk6IGJvb2xlYW4gPT5cbiAgaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSk7XG5cbmV4cG9ydCBjb25zdCBoYXNOb25OdWxsYWJsZUtleSA9IDxUIGV4dGVuZHMge30sIEsgZXh0ZW5kcyBrZXlvZiBUPihvYmo6IFQsIGtleTogSyk6IG9iaiBpcyBUICYgUmVjb3JkPEssIE5vbk51bGxhYmxlPFRbS10+PiA9PlxuICBoYXMob2JqLCBrZXkpICYmIG9ialtrZXldICE9PSB1bmRlZmluZWQgJiYgb2JqW2tleV0gIT09IG51bGw7XG5cbmV4cG9ydCBjb25zdCBpc0VtcHR5ID0gKHI6IFJlY29yZDxhbnksIGFueT4pOiByIGlzIHt9ID0+IHtcbiAgZm9yIChjb25zdCB4IGluIHIpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChyLCB4KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmV4cG9ydCBjb25zdCBlcXVhbCA9IDxUPihhMTogUmVjb3JkPHN0cmluZywgVD4sIGEyOiBSZWNvcmQ8c3RyaW5nLCBUPiwgZXE6IEVxLkVxPFQ+ID0gRXEuZXFBbnkpOiBib29sZWFuID0+XG4gIEVxLmVxUmVjb3JkKGVxKS5lcShhMSwgYTIpO1xuIiwiaW1wb3J0ICogYXMgVHlwZSBmcm9tICcuL1R5cGUnO1xuXG4vKipcbiAqIFRoZSBgT3B0aW9uYWxgIHR5cGUgcmVwcmVzZW50cyBhIHZhbHVlIChvZiBhbnkgdHlwZSkgdGhhdCBwb3RlbnRpYWxseSBkb2VzXG4gKiBub3QgZXhpc3QuIEFueSBgT3B0aW9uYWw8VD5gIGNhbiBlaXRoZXIgYmUgYSBgU29tZTxUPmAgKGluIHdoaWNoIGNhc2UgdGhlXG4gKiB2YWx1ZSBkb2VzIGV4aXN0KSBvciBhIGBOb25lYCAoaW4gd2hpY2ggY2FzZSB0aGUgdmFsdWUgZG9lcyBub3QgZXhpc3QpLiBUaGlzXG4gKiBtb2R1bGUgZGVmaW5lcyBhIHdob2xlIGxvdCBvZiBGUC1pbnNwaXJlZCB1dGlsaXR5IGZ1bmN0aW9ucyBmb3IgZGVhbGluZyB3aXRoXG4gKiBgT3B0aW9uYWxgIG9iamVjdHMuXG4gKlxuICogQ29tcGFyaXNvbiB3aXRoIG51bGwgb3IgdW5kZWZpbmVkOlxuICogLSBXZSBkb24ndCBnZXQgZmFuY3kgbnVsbCBjb2FsZXNjaW5nIG9wZXJhdG9ycyB3aXRoIGBPcHRpb25hbGBcbiAqIC0gV2UgZG8gZ2V0IGZhbmN5IGhlbHBlciBmdW5jdGlvbnMgd2l0aCBgT3B0aW9uYWxgXG4gKiAtIGBPcHRpb25hbGAgc3VwcG9ydCBuZXN0aW5nLCBhbmQgYWxsb3cgZm9yIHRoZSB0eXBlIHRvIHN0aWxsIGJlIG51bGxhYmxlIChvclxuICogYW5vdGhlciBgT3B0aW9uYWxgKVxuICogLSBUaGVyZSBpcyBubyBvcHRpb24gdG8gdHVybiBvZmYgc3RyaWN0LW9wdGlvbmFsLWNoZWNrcyBsaWtlIHRoZXJlIGlzIGZvclxuICogc3RyaWN0LW51bGwtY2hlY2tzXG4gKi9cbmV4cG9ydCBjbGFzcyBPcHRpb25hbDxUPiB7XG4gIHByaXZhdGUgcmVhZG9ubHkgdGFnOiBib29sZWFuO1xuICBwcml2YXRlIHJlYWRvbmx5IHZhbHVlPzogVDtcblxuICAvLyBTbmVha3kgb3B0aW1pc2F0aW9uOiBldmVyeSBpbnN0YW5jZSBvZiBPcHRpb25hbC5ub25lIGlzIGlkZW50aWNhbCwgc28ganVzdFxuICAvLyByZXVzZSB0aGUgc2FtZSBvYmplY3RcbiAgcHJpdmF0ZSBzdGF0aWMgc2luZ2xldG9uTm9uZSA9IG5ldyBPcHRpb25hbDxhbnk+KGZhbHNlKTtcblxuICAvLyBUaGUgaW50ZXJuYWwgcmVwcmVzZW50YXRpb24gaGFzIGEgYHRhZ2AgYW5kIGEgYHZhbHVlYCwgYnV0IGJvdGggYXJlXG4gIC8vIHByaXZhdGU6IGFibGUgdG8gYmUgY29uc29sZS5sb2dnZWQsIGJ1dCBub3QgYWJsZSB0byBiZSBhY2Nlc3NlZCBieSBjb2RlXG4gIHByaXZhdGUgY29uc3RydWN0b3IodGFnOiBib29sZWFuLCB2YWx1ZT86IFQpIHtcbiAgICB0aGlzLnRhZyA9IHRhZztcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICAvLyAtLS0gSWRlbnRpdGllcyAtLS1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBgT3B0aW9uYWw8VD5gIHRoYXQgKipkb2VzKiogY29udGFpbiBhIHZhbHVlLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBzb21lPFQ+KHRoaXM6IHZvaWQsIHZhbHVlOiBUKTogT3B0aW9uYWw8VD4ge1xuICAgIHJldHVybiBuZXcgT3B0aW9uYWwodHJ1ZSwgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBgT3B0aW9uYWw8VD5gIHRoYXQgKipkb2VzIG5vdCoqIGNvbnRhaW4gYSB2YWx1ZS4gYFRgIGNhbiBiZVxuICAgKiBhbnkgdHlwZSBiZWNhdXNlIHdlIGRvbid0IGFjdHVhbGx5IGhhdmUgYSBgVGAuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIG5vbmU8VCA9IG5ldmVyPih0aGlzOiB2b2lkKTogT3B0aW9uYWw8VD4ge1xuICAgIHJldHVybiBPcHRpb25hbC5zaW5nbGV0b25Ob25lO1xuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm0gYSB0cmFuc2Zvcm0gb24gYW4gYE9wdGlvbmFsYCB0eXBlLiBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpc1xuICAgKiBgT3B0aW9uYWxgIGNvbnRhaW5zIGEgdmFsdWUgb3Igbm90LCBgZm9sZGAgd2lsbCByZXR1cm4gYSB2YWx1ZSBvZiB0eXBlIGBVYC5cbiAgICogSWYgdGhpcyBgT3B0aW9uYWxgIGRvZXMgbm90IGNvbnRhaW4gYSB2YWx1ZSwgdGhlIGBVYCB3aWxsIGJlIGNyZWF0ZWQgYnlcbiAgICogY2FsbGluZyBgb25Ob25lYC4gSWYgdGhpcyBgT3B0aW9uYWxgIGRvZXMgY29udGFpbiBhIHZhbHVlLCB0aGUgYFVgIHdpbGwgYmVcbiAgICogY3JlYXRlZCBieSBjYWxsaW5nIGBvblNvbWVgLlxuICAgKlxuICAgKiBGb3IgdGhlIEZQIGVudGh1c2lhc3RzIGluIHRoZSByb29tLCB0aGlzIGZ1bmN0aW9uOlxuICAgKiAxLiBDb3VsZCBiZSB1c2VkIHRvIGltcGxlbWVudCBhbGwgb2YgdGhlIGZ1bmN0aW9ucyBiZWxvd1xuICAgKiAyLiBGb3JtcyBhIGNhdGFtb3JwaGlzbVxuICAgKi9cbiAgcHVibGljIGZvbGQ8VT4ob25Ob25lOiAoKSA9PiBVLCBvblNvbWU6ICh2YWx1ZTogVCkgPT4gVSk6IFUge1xuICAgIGlmICh0aGlzLnRhZykge1xuICAgICAgcmV0dXJuIG9uU29tZSh0aGlzLnZhbHVlIGFzIFQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb25Ob25lKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBpZiB0aGlzIGBPcHRpb25hbGAgb2JqZWN0IGNvbnRhaW5zIGEgdmFsdWUuXG4gICAqL1xuICBwdWJsaWMgaXNTb21lKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnRhZztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgdGhpcyBgT3B0aW9uYWxgIG9iamVjdCAqKmRvZXMgbm90KiogY29udGFpbiBhIHZhbHVlLlxuICAgKi9cbiAgcHVibGljIGlzTm9uZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMudGFnO1xuICB9XG5cbiAgLy8gLS0tIEZ1bmN0b3IgKG5hbWUgc3RvbGVuIGZyb20gSGFza2VsbCAvIG1hdGhzKSAtLS1cblxuICAvKipcbiAgICogUGVyZm9ybSBhIHRyYW5zZm9ybSBvbiBhbiBgT3B0aW9uYWxgIG9iamVjdCwgKippZioqIHRoZXJlIGlzIGEgdmFsdWUuIElmXG4gICAqIHlvdSBwcm92aWRlIGEgZnVuY3Rpb24gdG8gdHVybiBhIFQgaW50byBhIFUsIHRoaXMgaXMgdGhlIGZ1bmN0aW9uIHlvdSB1c2VcbiAgICogdG8gdHVybiBhbiBgT3B0aW9uYWw8VD5gIGludG8gYW4gYE9wdGlvbmFsPFU+YC4gSWYgdGhpcyAqKmRvZXMqKiBjb250YWluXG4gICAqIGEgdmFsdWUgdGhlbiB0aGUgb3V0cHV0IHdpbGwgYWxzbyBjb250YWluIGEgdmFsdWUgKHRoYXQgdmFsdWUgYmVpbmcgdGhlXG4gICAqIG91dHB1dCBvZiBgbWFwcGVyKHRoaXMudmFsdWUpYCksIGFuZCBpZiB0aGlzICoqZG9lcyBub3QqKiBjb250YWluIGEgdmFsdWVcbiAgICogdGhlbiBuZWl0aGVyIHdpbGwgdGhlIG91dHB1dC5cbiAgICovXG4gIHB1YmxpYyBtYXA8VT4obWFwcGVyOiAodmFsdWU6IFQpID0+IFUpOiBPcHRpb25hbDxVPiB7XG4gICAgaWYgKHRoaXMudGFnKSB7XG4gICAgICByZXR1cm4gT3B0aW9uYWwuc29tZShtYXBwZXIodGhpcy52YWx1ZSBhcyBUKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBPcHRpb25hbC5ub25lKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tIE1vbmFkIChuYW1lIHN0b2xlbiBmcm9tIEhhc2tlbGwgLyBtYXRocykgLS0tXG5cbiAgLyoqXG4gICAqIFBlcmZvcm0gYSB0cmFuc2Zvcm0gb24gYW4gYE9wdGlvbmFsYCBvYmplY3QsICoqaWYqKiB0aGVyZSBpcyBhIHZhbHVlLlxuICAgKiBVbmxpa2UgYG1hcGAsIGhlcmUgdGhlIHRyYW5zZm9ybSBpdHNlbGYgYWxzbyByZXR1cm5zIGFuIGBPcHRpb25hbGAuXG4gICAqL1xuICBwdWJsaWMgYmluZDxVPihiaW5kZXI6ICh2YWx1ZTogVCkgPT4gT3B0aW9uYWw8VT4pOiBPcHRpb25hbDxVPiB7XG4gICAgaWYgKHRoaXMudGFnKSB7XG4gICAgICByZXR1cm4gYmluZGVyKHRoaXMudmFsdWUgYXMgVCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBPcHRpb25hbC5ub25lKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tIFRyYXZlcnNhYmxlIChuYW1lIHN0b2xlbiBmcm9tIEhhc2tlbGwgLyBtYXRocykgLS0tXG5cbiAgLyoqXG4gICAqIEZvciBhIGdpdmVuIHByZWRpY2F0ZSwgdGhpcyBmdW5jdGlvbiBmaW5kcyBvdXQgaWYgdGhlcmUgKipleGlzdHMqKiBhIHZhbHVlXG4gICAqIGluc2lkZSB0aGlzIGBPcHRpb25hbGAgb2JqZWN0IHRoYXQgbWVldHMgdGhlIHByZWRpY2F0ZS4gSW4gcHJhY3RpY2UsIHRoaXNcbiAgICogbWVhbnMgdGhhdCBmb3IgYE9wdGlvbmFsYHMgdGhhdCBkbyBub3QgY29udGFpbiBhIHZhbHVlIGl0IHJldHVybnMgZmFsc2UgKGFzXG4gICAqIG5vIHByZWRpY2F0ZS1tZWV0aW5nIHZhbHVlIGV4aXN0cykuXG4gICAqL1xuICBwdWJsaWMgZXhpc3RzKHByZWRpY2F0ZTogKHZhbHVlOiBUKSA9PiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudGFnICYmIHByZWRpY2F0ZSh0aGlzLnZhbHVlIGFzIFQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvciBhIGdpdmVuIHByZWRpY2F0ZSwgdGhpcyBmdW5jdGlvbiBmaW5kcyBvdXQgaWYgKiphbGwqKiB0aGUgdmFsdWVzIGluc2lkZVxuICAgKiB0aGlzIGBPcHRpb25hbGAgb2JqZWN0IG1lZXQgdGhlIHByZWRpY2F0ZS4gSW4gcHJhY3RpY2UsIHRoaXMgbWVhbnMgdGhhdFxuICAgKiBmb3IgYE9wdGlvbmFsYHMgdGhhdCBkbyBub3QgY29udGFpbiBhIHZhbHVlIGl0IHJldHVybnMgdHJ1ZSAoYXMgYWxsIDBcbiAgICogb2JqZWN0cyBkbyBtZWV0IHRoZSBwcmVkaWNhdGUpLlxuICAgKi9cbiAgcHVibGljIGZvcmFsbChwcmVkaWNhdGU6ICh2YWx1ZTogVCkgPT4gYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy50YWcgfHwgcHJlZGljYXRlKHRoaXMudmFsdWUgYXMgVCk7XG4gIH1cblxuICAvKipcbiAgICogRm9yIGEgZ2l2ZW4gcHJlZGljYXRlLCBjcmVhdGUgYSBuZXcgYE9wdGlvbmFsYCBvYmplY3QgdGhhdCB3aWxsIHJldGFpblxuICAgKiBhbGwgdGhlIHZhbHVlcyBpbnNpZGUgdGhlIG9sZCBgT3B0aW9uYWxgIG9iamVjdCB0aGF0IG1lZXQgdGhlIHByZWRpY2F0ZS5cbiAgICogSW4gcHJhY3RpY2UsIHRoZSBgT3B0aW9uYWxgIG9iamVjdCBjb250YWlucyBlaXRoZXIgMCBvciAxIG9iamVjdHMsIGFuZFxuICAgKiB0aGUgb3V0cHV0IHdpbGwga2VlcCB0aGUgKHNpbmdsZSkgaW5wdXQgb2JqZWN0IChpZiBpdCBleGlzdHMpIGFzIGxvbmcgYXNcbiAgICogaXQgcGFzc2VzIHRoZSBwcmVkaWNhdGUuXG4gICAqL1xuICBwdWJsaWMgZmlsdGVyPFUgZXh0ZW5kcyBUPihwcmVkaWNhdGU6ICh2YWx1ZTogVCkgPT4gdmFsdWUgaXMgVSk6IE9wdGlvbmFsPFU+O1xuICBwdWJsaWMgZmlsdGVyKHByZWRpY2F0ZTogKHZhbHVlOiBUKSA9PiBib29sZWFuKTogT3B0aW9uYWw8VD47XG4gIHB1YmxpYyBmaWx0ZXIocHJlZGljYXRlOiAodmFsdWU6IFQpID0+IGJvb2xlYW4pOiBPcHRpb25hbDxUPiB7XG4gICAgaWYgKCF0aGlzLnRhZyB8fCBwcmVkaWNhdGUodGhpcy52YWx1ZSBhcyBUKSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBPcHRpb25hbC5ub25lKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tIEdldHRlcnMgLS0tXG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdmFsdWUgb3V0IG9mIHRoZSBpbnNpZGUgb2YgdGhlIGBPcHRpb25hbGAgb2JqZWN0LCB1c2luZyBhIGRlZmF1bHRcbiAgICogYHJlcGxhY2VtZW50YCB2YWx1ZSBpZiB0aGUgcHJvdmlkZWQgYE9wdGlvbmFsYCBvYmplY3QgZG9lcyBub3QgY29udGFpbiBhXG4gICAqIHZhbHVlLlxuICAgKi9cbiAgcHVibGljIGdldE9yPFUgPSBUPihyZXBsYWNlbWVudDogVSk6IFQgfCBVIHtcbiAgICByZXR1cm4gdGhpcy50YWcgPyB0aGlzLnZhbHVlIGFzIFQgOiByZXBsYWNlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHZhbHVlIG91dCBvZiB0aGUgaW5zaWRlIG9mIHRoZSBgT3B0aW9uYWxgIG9iamVjdCwgdXNpbmcgYSBkZWZhdWx0XG4gICAqIGByZXBsYWNlbWVudGAgdmFsdWUgaWYgdGhlIHByb3ZpZGVkIGBPcHRpb25hbGAgb2JqZWN0IGRvZXMgbm90IGNvbnRhaW4gYVxuICAgKiB2YWx1ZS4gIFVubGlrZSBgZ2V0T3JgLCBpbiB0aGlzIG1ldGhvZCB0aGUgYHJlcGxhY2VtZW50YCBvYmplY3QgaXMgYWxzb1xuICAgKiBgT3B0aW9uYWxgIC0gbWVhbmluZyB0aGF0IHRoaXMgbWV0aG9kIHdpbGwgYWx3YXlzIHJldHVybiBhbiBgT3B0aW9uYWxgLlxuICAgKi9cbiAgcHVibGljIG9yPFUgPSBUPihyZXBsYWNlbWVudDogT3B0aW9uYWw8VT4pOiBPcHRpb25hbDxUIHwgVT4ge1xuICAgIHJldHVybiB0aGlzLnRhZyA/IHRoaXMgOiByZXBsYWNlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHZhbHVlIG91dCBvZiB0aGUgaW5zaWRlIG9mIHRoZSBgT3B0aW9uYWxgIG9iamVjdCwgdXNpbmcgYSBkZWZhdWx0XG4gICAqIGByZXBsYWNlbWVudGAgdmFsdWUgaWYgdGhlIHByb3ZpZGVkIGBPcHRpb25hbGAgb2JqZWN0IGRvZXMgbm90IGNvbnRhaW4gYVxuICAgKiB2YWx1ZS4gVW5saWtlIGBnZXRPcmAsIGluIHRoaXMgbWV0aG9kIHRoZSBgcmVwbGFjZW1lbnRgIHZhbHVlIGlzXG4gICAqIFwidGh1bmtlZFwiIC0gdGhhdCBpcyB0byBzYXkgdGhhdCB5b3UgZG9uJ3QgcGFzcyBhIHZhbHVlIHRvIGBnZXRPclRodW5rYCwgeW91XG4gICAqIHBhc3MgYSBmdW5jdGlvbiB3aGljaCAoaWYgY2FsbGVkKSB3aWxsICoqcmV0dXJuKiogdGhlIGB2YWx1ZWAgeW91IHdhbnQgdG9cbiAgICogdXNlLlxuICAgKi9cbiAgcHVibGljIGdldE9yVGh1bms8VSA9IFQ+KHRodW5rOiAoKSA9PiBVKTogVCB8IFUge1xuICAgIHJldHVybiB0aGlzLnRhZyA/IHRoaXMudmFsdWUgYXMgVCA6IHRodW5rKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB2YWx1ZSBvdXQgb2YgdGhlIGluc2lkZSBvZiB0aGUgYE9wdGlvbmFsYCBvYmplY3QsIHVzaW5nIGEgZGVmYXVsdFxuICAgKiBgcmVwbGFjZW1lbnRgIHZhbHVlIGlmIHRoZSBwcm92aWRlZCBPcHRpb25hbCBvYmplY3QgZG9lcyBub3QgY29udGFpbiBhXG4gICAqIHZhbHVlLlxuICAgKlxuICAgKiBVbmxpa2UgYG9yYCwgaW4gdGhpcyBtZXRob2QgdGhlIGByZXBsYWNlbWVudGAgdmFsdWUgaXMgXCJ0aHVua2VkXCIgLSB0aGF0IGlzXG4gICAqIHRvIHNheSB0aGF0IHlvdSBkb24ndCBwYXNzIGEgdmFsdWUgdG8gYG9yVGh1bmtgLCB5b3UgcGFzcyBhIGZ1bmN0aW9uIHdoaWNoXG4gICAqIChpZiBjYWxsZWQpIHdpbGwgKipyZXR1cm4qKiB0aGUgYHZhbHVlYCB5b3Ugd2FudCB0byB1c2UuXG4gICAqXG4gICAqIFVubGlrZSBgZ2V0T3JUaHVua2AsIGluIHRoaXMgbWV0aG9kIHRoZSBgcmVwbGFjZW1lbnRgIHZhbHVlIGlzIGFsc29cbiAgICogYE9wdGlvbmFsYCwgbWVhbmluZyB0aGF0IHRoaXMgbWV0aG9kIHdpbGwgYWx3YXlzIHJldHVybiBhbiBgT3B0aW9uYWxgLlxuICAgKi9cbiAgcHVibGljIG9yVGh1bms8VSA9IFQ+KHRodW5rOiAoKSA9PiBPcHRpb25hbDxVPik6IE9wdGlvbmFsPFQgfCBVPiB7XG4gICAgcmV0dXJuIHRoaXMudGFnID8gdGhpcyA6IHRodW5rKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB2YWx1ZSBvdXQgb2YgdGhlIGluc2lkZSBvZiB0aGUgYE9wdGlvbmFsYCBvYmplY3QsIHRocm93aW5nIGFuXG4gICAqIGV4Y2VwdGlvbiBpZiB0aGUgcHJvdmlkZWQgYE9wdGlvbmFsYCBvYmplY3QgZG9lcyBub3QgY29udGFpbiBhIHZhbHVlLlxuICAgKlxuICAgKiBXQVJOSU5HOlxuICAgKiBZb3Ugc2hvdWxkIG9ubHkgYmUgdXNpbmcgdGhpcyBmdW5jdGlvbiBpZiB5b3Uga25vdyB0aGF0IHRoZSBgT3B0aW9uYWxgXG4gICAqIG9iamVjdCAqKmlzIG5vdCoqIGVtcHR5IChvdGhlcndpc2UgeW91J3JlIHRocm93aW5nIGV4Y2VwdGlvbnMgaW4gcHJvZHVjdGlvblxuICAgKiBjb2RlLCB3aGljaCBpcyBiYWQpLlxuICAgKlxuICAgKiBJbiB0ZXN0cyB0aGlzIGlzIG1vcmUgYWNjZXB0YWJsZS5cbiAgICpcbiAgICogUHJlZmVyIG90aGVyIG1ldGhvZHMgdG8gdGhpcywgc3VjaCBhcyBgLmVhY2hgLlxuICAgKi9cbiAgcHVibGljIGdldE9yRGllKG1lc3NhZ2U/OiBzdHJpbmcpOiBUIHtcbiAgICBpZiAoIXRoaXMudGFnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSA/PyAnQ2FsbGVkIGdldE9yRGllIG9uIE5vbmUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWUgYXMgVDtcbiAgICB9XG4gIH1cblxuICAvLyAtLS0gSW50ZXJvcCB3aXRoIG51bGwgYW5kIHVuZGVmaW5lZCAtLS1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBgT3B0aW9uYWxgIHZhbHVlIGZyb20gYSBudWxsYWJsZSAob3IgdW5kZWZpbmVkLWFibGUpIGlucHV0LlxuICAgKiBOdWxsLCBvciB1bmRlZmluZWQsIGlzIGNvbnZlcnRlZCB0byBgTm9uZWAsIGFuZCBhbnl0aGluZyBlbHNlIGlzIGNvbnZlcnRlZFxuICAgKiB0byBgU29tZWAuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGZyb208VD4odGhpczogdm9pZCwgdmFsdWU6IFQgfCBudWxsIHwgdW5kZWZpbmVkKTogT3B0aW9uYWw8Tm9uTnVsbGFibGU8VD4+IHtcbiAgICByZXR1cm4gVHlwZS5pc05vbk51bGxhYmxlKHZhbHVlKSA/IE9wdGlvbmFsLnNvbWUodmFsdWUpIDogT3B0aW9uYWwubm9uZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGFuIGBPcHRpb25hbGAgdG8gYSBudWxsYWJsZSB0eXBlLCBieSBnZXR0aW5nIHRoZSB2YWx1ZSBpZiBpdFxuICAgKiBleGlzdHMsIG9yIHJldHVybmluZyBgbnVsbGAgaWYgaXQgZG9lcyBub3QuXG4gICAqL1xuICBwdWJsaWMgZ2V0T3JOdWxsKCk6IFQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy50YWcgPyB0aGlzLnZhbHVlIGFzIFQgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGFuIGBPcHRpb25hbGAgdG8gYW4gdW5kZWZpbmVkLWFibGUgdHlwZSwgYnkgZ2V0dGluZyB0aGUgdmFsdWUgaWZcbiAgICogaXQgZXhpc3RzLCBvciByZXR1cm5pbmcgYHVuZGVmaW5lZGAgaWYgaXQgZG9lcyBub3QuXG4gICAqL1xuICBwdWJsaWMgZ2V0T3JVbmRlZmluZWQoKTogVCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cblxuICAvLyAtLS0gVXRpbGl0aWVzIC0tLVxuXG4gIC8qKlxuICAgKiBJZiB0aGUgYE9wdGlvbmFsYCBjb250YWlucyBhIHZhbHVlLCBwZXJmb3JtIGFuIGFjdGlvbiBvbiB0aGF0IHZhbHVlLlxuICAgKiBVbmxpa2UgdGhlIHJlc3Qgb2YgdGhlIG1ldGhvZHMgb24gdGhpcyB0eXBlLCBgLmVhY2hgIGhhcyBzaWRlLWVmZmVjdHMuIElmXG4gICAqIHlvdSB3YW50IHRvIHRyYW5zZm9ybSBhbiBgT3B0aW9uYWw8VD5gICoqaW50byoqIHNvbWV0aGluZywgdGhlbiB0aGlzIGlzIG5vdFxuICAgKiB0aGUgbWV0aG9kIGZvciB5b3UuIElmIHlvdSB3YW50IHRvIHVzZSBhbiBgT3B0aW9uYWw8VD5gIHRvICoqZG8qKlxuICAgKiBzb21ldGhpbmcsIHRoZW4gdGhpcyBpcyB0aGUgbWV0aG9kIGZvciB5b3UgLSBwcm92aWRlZCB5b3UncmUgb2theSB3aXRoIG5vdFxuICAgKiBkb2luZyBhbnl0aGluZyBpbiB0aGUgY2FzZSB3aGVyZSB0aGUgYE9wdGlvbmFsYCBkb2Vzbid0IGhhdmUgYSB2YWx1ZSBpbnNpZGVcbiAgICogaXQuIElmIHlvdSdyZSBub3Qgc3VyZSB3aGV0aGVyIHlvdXIgdXNlLWNhc2UgZml0cyBpbnRvIHRyYW5zZm9ybWluZ1xuICAgKiAqKmludG8qKiBzb21ldGhpbmcgb3IgKipkb2luZyoqIHNvbWV0aGluZywgY2hlY2sgd2hldGhlciBpdCBoYXMgYSByZXR1cm5cbiAgICogdmFsdWUuIElmIGl0IGRvZXMsIHlvdSBzaG91bGQgYmUgcGVyZm9ybWluZyBhIHRyYW5zZm9ybS5cbiAgICovXG4gIHB1YmxpYyBlYWNoKHdvcmtlcjogKHZhbHVlOiBUKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudGFnKSB7XG4gICAgICB3b3JrZXIodGhpcy52YWx1ZSBhcyBUKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVHVybiB0aGUgYE9wdGlvbmFsYCBvYmplY3QgaW50byBhbiBhcnJheSB0aGF0IGNvbnRhaW5zIGFsbCBvZiB0aGUgdmFsdWVzXG4gICAqIHN0b3JlZCBpbnNpZGUgdGhlIGBPcHRpb25hbGAuIEluIHByYWN0aWNlLCB0aGlzIG1lYW5zIHRoZSBvdXRwdXQgd2lsbCBoYXZlXG4gICAqIGVpdGhlciAwIG9yIDEgZWxlbWVudHMuXG4gICAqL1xuICBwdWJsaWMgdG9BcnJheSgpOiBUW10ge1xuICAgIHJldHVybiB0aGlzLnRhZyA/IFsgdGhpcy52YWx1ZSBhcyBUIF0gOiBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUdXJuIHRoZSBgT3B0aW9uYWxgIG9iamVjdCBpbnRvIGEgc3RyaW5nIGZvciBkZWJ1Z2dpbmcgb3IgcHJpbnRpbmcuIE5vdFxuICAgKiByZWNvbW1lbmRlZCBmb3IgcHJvZHVjdGlvbiBjb2RlLCBidXQgZ29vZCBmb3IgZGVidWdnaW5nLiBBbHNvIG5vdGUgdGhhdFxuICAgKiB0aGVzZSBkYXlzIGFuIGBPcHRpb25hbGAgb2JqZWN0IGNhbiBiZSBsb2dnZWQgdG8gdGhlIGNvbnNvbGUgZGlyZWN0bHksIGFuZFxuICAgKiBpdHMgaW5uZXIgdmFsdWUgKGlmIGl0IGV4aXN0cykgd2lsbCBiZSB2aXNpYmxlLlxuICAgKi9cbiAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudGFnID8gYHNvbWUoJHt0aGlzLnZhbHVlfSlgIDogJ25vbmUoKSc7XG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIEFyciBmcm9tICcuL0Fycic7XG5pbXBvcnQgKiBhcyBGdW4gZnJvbSAnLi9GdW4nO1xuaW1wb3J0IHsgT3B0aW9uYWwgfSBmcm9tICcuL09wdGlvbmFsJztcblxuLyoqXG4gKiAqKklzKiogdGhlIHZhbHVlIHN0b3JlZCBpbnNpZGUgdGhpcyBPcHRpb25hbCBvYmplY3QgZXF1YWwgdG8gYHJoc2A/XG4gKi9cbmV4cG9ydCBjb25zdCBpcyA9IDxUPihsaHM6IE9wdGlvbmFsPFQ+LCByaHM6IFQsIGNvbXBhcmF0b3I6IChhOiBULCBiOiBUKSA9PiBib29sZWFuID0gRnVuLnRyaXBsZUVxdWFscyk6IGJvb2xlYW4gPT5cbiAgbGhzLmV4aXN0cygobGVmdCkgPT4gY29tcGFyYXRvcihsZWZ0LCByaHMpKTtcblxuLyoqXG4gKiBBcmUgdGhlc2UgdHdvIE9wdGlvbmFsIG9iamVjdHMgZXF1YWw/IEVxdWFsaXR5IGhlcmUgbWVhbnMgZWl0aGVyIHRoZXkncmUgYm90aFxuICogYFNvbWVgIChhbmQgdGhlIHZhbHVlcyBhcmUgZXF1YWwgdW5kZXIgdGhlIGNvbXBhcmF0b3IpIG9yIHRoZXkncmUgYm90aCBgTm9uZWAuXG4gKi9cbmV4cG9ydCBjb25zdCBlcXVhbHM6IHtcbiAgPEEsIEI+KGxoczogT3B0aW9uYWw8QT4sIHJoczogT3B0aW9uYWw8Qj4sIGNvbXBhcmF0b3I6IChhOiBBLCBiOiBCKSA9PiBib29sZWFuKTogYm9vbGVhbjtcbiAgPFQ+KGxoczogT3B0aW9uYWw8VD4sIHJoczogT3B0aW9uYWw8VD4pOiBib29sZWFuO1xufSA9IDxBLCBCPihsaHM6IE9wdGlvbmFsPEE+LCByaHM6IE9wdGlvbmFsPEI+LCBjb21wYXJhdG9yOiAoYTogQSwgYjogQikgPT4gYm9vbGVhbiA9IEZ1bi50cmlwbGVFcXVhbHMgYXMgYW55KTogYm9vbGVhbiA9PlxuICBsaWZ0MihsaHMsIHJocywgY29tcGFyYXRvcikuZ2V0T3IobGhzLmlzTm9uZSgpICYmIHJocy5pc05vbmUoKSk7XG5cbmV4cG9ydCBjb25zdCBjYXQgPSA8QT4oYXJyOiBPcHRpb25hbDxBPltdKTogQVtdID0+IHtcbiAgY29uc3QgcjogQVtdID0gW107XG4gIGNvbnN0IHB1c2ggPSAoeDogQSkgPT4ge1xuICAgIHIucHVzaCh4KTtcbiAgfTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICBhcnJbaV0uZWFjaChwdXNoKTtcbiAgfVxuICByZXR1cm4gcjtcbn07XG5cbmV4cG9ydCBjb25zdCBzZXF1ZW5jZSA9IDxBPiAoYXJyOiBBcnJheUxpa2U8T3B0aW9uYWw8QT4+KTogT3B0aW9uYWw8QXJyYXk8QT4+ID0+IHtcbiAgY29uc3QgcjogQVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgeCA9IGFycltpXTtcbiAgICBpZiAoeC5pc1NvbWUoKSkge1xuICAgICAgci5wdXNoKHguZ2V0T3JEaWUoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBPcHRpb25hbC5ub25lPEFycmF5PEE+PigpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gT3B0aW9uYWwuc29tZShyKTtcbn07XG5cbi8qKiBAZGVwcmVjYXRlZCBVc2UgQXJyLmZpbmRNYXAgaW5zdGVhZC4gKi9cbmV4cG9ydCBjb25zdCBmaW5kTWFwID0gQXJyLmZpbmRNYXA7XG5cbi8qKiBNYXAgZWFjaCBlbGVtZW50IG9mIGFuIGFycmF5IHRvIGFuIE9wdGlvbmFsIGFuZCBjb2xsZWN0IHRoZSByZXN1bHRzLlxuICogIElmIGFsbCByZXN1bHRzIGFyZSBcInNvbWVcIiwgcmV0dXJuIE9wdGlvbmFsLnNvbWUgb2YgdGhlIHJlc3VsdHMuXG4gKiAgSWYgYW55IHJlc3VsdCBpcyBcIm5vbmVcIiwgcmV0dXJuIE9wdGlvbmFsLm5vbmVcbiAqL1xuZXhwb3J0IGNvbnN0IHRyYXZlcnNlID0gPEEsIEI+IChhcnI6IEFycmF5TGlrZTxBPiwgZjogKGE6IEEpID0+IE9wdGlvbmFsPEI+KTogT3B0aW9uYWw8QXJyYXk8Qj4+ID0+XG4gIHNlcXVlbmNlKEFyci5tYXAoYXJyLCBmKSk7XG5cbi8qXG5Ob3RlcyBvbiB0aGUgbGlmdCBmdW5jdGlvbnM6XG4tIFdlIHVzZWQgdG8gaGF2ZSBhIGdlbmVyaWMgbGlmdE4sIGJ1dCB3ZSB3ZXJlIGNvbmNlcm5lZCBhYm91dCBpdHMgdHlwZS1zYWZldHksIGFuZCB0aGUgYmVsb3cgdmFyaWFudHMgd2VyZSBmYXN0ZXIgaW4gbWljcm9iZW5jaG1hcmtzLlxuLSBUaGUgZ2V0T3JEaWUgY2FsbHMgYXJlIHBhcnRpYWwgZnVuY3Rpb25zLCBidXQgYXJlIGNoZWNrZWQgYmVmb3JlaGFuZC4gVGhpcyBpcyBmYXN0ZXIgYW5kIG1vcmUgY29udmVuaWVudCAoYnV0IGxlc3Mgc2FmZSkgdGhhbiBmb2xkcy5cbi0gJiYgaXMgdXNlZCBpbnN0ZWFkIG9mIGEgbG9vcCBmb3Igc2ltcGxpY2l0eSBhbmQgcGVyZm9ybWFuY2UuXG4qL1xuXG5leHBvcnQgY29uc3QgbGlmdDIgPSA8QSwgQiwgQz4gKG9hOiBPcHRpb25hbDxBPiwgb2I6IE9wdGlvbmFsPEI+LCBmOiAoYTogQSwgYjogQikgPT4gQyk6IE9wdGlvbmFsPEM+ID0+XG4gIG9hLmlzU29tZSgpICYmIG9iLmlzU29tZSgpID8gT3B0aW9uYWwuc29tZShmKG9hLmdldE9yRGllKCksIG9iLmdldE9yRGllKCkpKSA6IE9wdGlvbmFsLm5vbmU8Qz4oKTtcblxuZXhwb3J0IGNvbnN0IGxpZnQzID0gPEEsIEIsIEMsIEQ+IChvYTogT3B0aW9uYWw8QT4sIG9iOiBPcHRpb25hbDxCPiwgb2M6IE9wdGlvbmFsPEM+LCBmOiAoYTogQSwgYjogQiwgYzogQykgPT4gRCk6IE9wdGlvbmFsPEQ+ID0+XG4gIG9hLmlzU29tZSgpICYmIG9iLmlzU29tZSgpICYmIG9jLmlzU29tZSgpID8gT3B0aW9uYWwuc29tZShmKG9hLmdldE9yRGllKCksIG9iLmdldE9yRGllKCksIG9jLmdldE9yRGllKCkpKSA6IE9wdGlvbmFsLm5vbmU8RD4oKTtcblxuZXhwb3J0IGNvbnN0IGxpZnQ0ID0gPEEsIEIsIEMsIEQsIEU+IChvYTogT3B0aW9uYWw8QT4sIG9iOiBPcHRpb25hbDxCPiwgb2M6IE9wdGlvbmFsPEM+LCBvZDogT3B0aW9uYWw8RD4sIGY6IChhOiBBLCBiOiBCLCBjOiBDLCBkOiBEKSA9PiBFKTogT3B0aW9uYWw8RT4gPT5cbiAgb2EuaXNTb21lKCkgJiYgb2IuaXNTb21lKCkgJiYgb2MuaXNTb21lKCkgJiYgb2QuaXNTb21lKCkgPyBPcHRpb25hbC5zb21lKGYob2EuZ2V0T3JEaWUoKSwgb2IuZ2V0T3JEaWUoKSwgb2MuZ2V0T3JEaWUoKSwgb2QuZ2V0T3JEaWUoKSkpIDogT3B0aW9uYWwubm9uZTxFPigpO1xuXG5leHBvcnQgY29uc3QgbGlmdDUgPSA8QSwgQiwgQywgRCwgRSwgRj4gKG9hOiBPcHRpb25hbDxBPiwgb2I6IE9wdGlvbmFsPEI+LCBvYzogT3B0aW9uYWw8Qz4sIG9kOiBPcHRpb25hbDxEPiwgb2U6IE9wdGlvbmFsPEU+LCBmOiAoYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSkgPT4gRik6IE9wdGlvbmFsPEY+ID0+XG4gIG9hLmlzU29tZSgpICYmIG9iLmlzU29tZSgpICYmIG9jLmlzU29tZSgpICYmIG9kLmlzU29tZSgpICYmIG9lLmlzU29tZSgpID8gT3B0aW9uYWwuc29tZShmKG9hLmdldE9yRGllKCksIG9iLmdldE9yRGllKCksIG9jLmdldE9yRGllKCksIG9kLmdldE9yRGllKCksIG9lLmdldE9yRGllKCkpKSA6IE9wdGlvbmFsLm5vbmU8Rj4oKTtcblxuZXhwb3J0IGNvbnN0IG1hcEZyb20gPSA8QSwgQj4gKGE6IEEgfCBudWxsIHwgdW5kZWZpbmVkLCBmOiAoYTogQSkgPT4gQik6IE9wdGlvbmFsPEI+ID0+XG4gIChhICE9PSB1bmRlZmluZWQgJiYgYSAhPT0gbnVsbCkgPyBPcHRpb25hbC5zb21lKGYoYSkpIDogT3B0aW9uYWwubm9uZTxCPigpO1xuXG5leHBvcnQgY29uc3QgYmluZEZyb20gPSA8QSwgQj4gKGE6IEEgfCBudWxsIHwgdW5kZWZpbmVkLCBmOiAoYTogQSkgPT4gT3B0aW9uYWw8Qj4pOiBPcHRpb25hbDxCPiA9PlxuICAoYSAhPT0gdW5kZWZpbmVkICYmIGEgIT09IG51bGwpID8gZihhKSA6IE9wdGlvbmFsLm5vbmU8Qj4oKTtcblxuZXhwb3J0IGNvbnN0IGZsYXR0ZW4gPSA8VD4gKG9vdDogT3B0aW9uYWw8T3B0aW9uYWw8VD4+KTogT3B0aW9uYWw8VD4gPT4gb290LmJpbmQoRnVuLmlkZW50aXR5KTtcblxuLy8gVGhpcyBjYW4gaGVscCB3aXRoIHR5cGUgaW5mZXJlbmNlLCBieSBzcGVjaWZ5aW5nIHRoZSB0eXBlIHBhcmFtIG9uIHRoZSBub25lIGNhc2UsIHNvIHRoZSBjYWxsZXIgZG9lc24ndCBoYXZlIHRvLlxuZXhwb3J0IGNvbnN0IHNvbWVJZiA9IDxBPiAoYjogYm9vbGVhbiwgYTogQSk6IE9wdGlvbmFsPEE+ID0+XG4gIGIgPyBPcHRpb25hbC5zb21lKGEpIDogT3B0aW9uYWwubm9uZTxBPigpO1xuIiwiaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSAnLi9HbG9iYWwnO1xuXG4vKiogcGF0aCA6OiAoW1N0cmluZ10sIEpzT2JqPykgLT4gSnNPYmogKi9cbmV4cG9ydCBjb25zdCBwYXRoID0gPFQ+KHBhcnRzOiBzdHJpbmdbXSwgc2NvcGU/OiB7fSk6IFQgfCB1bmRlZmluZWQgPT4ge1xuICBsZXQgbyA9IHNjb3BlICE9PSB1bmRlZmluZWQgJiYgc2NvcGUgIT09IG51bGwgPyBzY29wZSA6IEdsb2JhbDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGggJiYgbyAhPT0gdW5kZWZpbmVkICYmIG8gIT09IG51bGw7ICsraSkge1xuICAgIG8gPSBvW3BhcnRzW2ldXTtcbiAgfVxuICByZXR1cm4gbztcbn07XG5cbi8qKiByZXNvbHZlIDo6IChTdHJpbmcsIEpzT2JqPykgLT4gSnNPYmogKi9cbmV4cG9ydCBjb25zdCByZXNvbHZlID0gPFQ+KHA6IHN0cmluZywgc2NvcGU/OiB7fSk6IFQgfCB1bmRlZmluZWQgPT4ge1xuICBjb25zdCBwYXJ0cyA9IHAuc3BsaXQoJy4nKTtcbiAgcmV0dXJuIHBhdGgocGFydHMsIHNjb3BlKTtcbn07XG5cbi8qKiBzdGVwIDo6IChKc09iaiwgU3RyaW5nKSAtPiBKc09iaiAqL1xuZXhwb3J0IGNvbnN0IHN0ZXAgPSA8VCBleHRlbmRzIHt9LCBLIGV4dGVuZHMga2V5b2YgVD4obzogVCwgcGFydDogSyk6IFRbS10gPT4ge1xuICBpZiAob1twYXJ0XSA9PT0gdW5kZWZpbmVkIHx8IG9bcGFydF0gPT09IG51bGwpIHtcbiAgICBvW3BhcnRdID0ge30gYXMgVFtLXTtcbiAgfVxuICByZXR1cm4gb1twYXJ0XTtcbn07XG5cbi8qKiBmb3JnZSA6OiAoW1N0cmluZ10sIEpzT2JqPykgLT4gSnNPYmogKi9cbmV4cG9ydCBjb25zdCBmb3JnZSA9IDxUIGV4dGVuZHMgc3RyaW5nW10+KHBhcnRzOiBULCB0YXJnZXQ/OiB7fSk6IHsgWyBLIGluIFRbbnVtYmVyXV06IHt9fSA9PiB7XG4gIGxldCBvID0gdGFyZ2V0ICE9PSB1bmRlZmluZWQgPyB0YXJnZXQgOiBHbG9iYWw7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyArK2kpIHtcbiAgICBvID0gc3RlcChvLCBwYXJ0c1tpXSk7XG4gIH1cbiAgcmV0dXJuIG87XG59O1xuXG4vKiogbmFtZXNwYWNlIDo6IChTdHJpbmcsIEpzT2JqPykgLT4gSnNPYmogKi9cbmV4cG9ydCBjb25zdCBuYW1lc3BhY2UgPSAobmFtZTogc3RyaW5nLCB0YXJnZXQ/OiB7fSk6IHsgW2tleTogc3RyaW5nXToge319ID0+IHtcbiAgY29uc3QgcGFydHMgPSBuYW1lLnNwbGl0KCcuJyk7XG4gIHJldHVybiBmb3JnZShwYXJ0cywgdGFyZ2V0KTtcbn07XG4iLCJpbXBvcnQgeyBDZWxsIH0gZnJvbSAnLi9DZWxsJztcbmltcG9ydCAqIGFzIEZ1biBmcm9tICcuL0Z1bic7XG5pbXBvcnQgeyBPcHRpb25hbCB9IGZyb20gJy4vT3B0aW9uYWwnO1xuXG5pbnRlcmZhY2UgU2luZ2xldG9uPFQ+IHtcbiAgcmVhZG9ubHkgY2xlYXI6ICgpID0+IHZvaWQ7XG4gIHJlYWRvbmx5IGlzU2V0OiAoKSA9PiBib29sZWFuO1xuICByZWFkb25seSBnZXQ6ICgpID0+IE9wdGlvbmFsPFQ+O1xuICByZWFkb25seSBzZXQ6ICh2YWx1ZTogVCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXBlYXRhYmxlIHtcbiAgcmVhZG9ubHkgY2xlYXI6ICgpID0+IHZvaWQ7XG4gIHJlYWRvbmx5IGlzU2V0OiAoKSA9PiBib29sZWFuO1xuICByZWFkb25seSBnZXQ6ICgpID0+IE9wdGlvbmFsPG51bWJlcj47XG4gIHJlYWRvbmx5IHNldDogKGZ1bmN0aW9uVG9SZXBlYXQ6ICgpID0+IHZvaWQpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmV2b2NhYmxlPFQ+IGV4dGVuZHMgU2luZ2xldG9uPFQ+IHsgfVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwaTxUPiBleHRlbmRzIFNpbmdsZXRvbjxUPiB7XG4gIHJlYWRvbmx5IHJ1bjogKGZuOiAoZGF0YTogVCkgPT4gdm9pZCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBWYWx1ZTxUPiBleHRlbmRzIFNpbmdsZXRvbjxUPiB7XG4gIHJlYWRvbmx5IG9uOiAoZm46IChkYXRhOiBUKSA9PiB2b2lkKSA9PiB2b2lkO1xufVxuXG5jb25zdCBzaW5nbGV0b24gPSA8VD4gKGRvUmV2b2tlOiAoZGF0YTogVCkgPT4gdm9pZCk6IFNpbmdsZXRvbjxUPiA9PiB7XG4gIGNvbnN0IHN1YmplY3QgPSBDZWxsKE9wdGlvbmFsLm5vbmU8VD4oKSk7XG5cbiAgY29uc3QgcmV2b2tlID0gKCk6IHZvaWQgPT4gc3ViamVjdC5nZXQoKS5lYWNoKGRvUmV2b2tlKTtcblxuICBjb25zdCBjbGVhciA9ICgpID0+IHtcbiAgICByZXZva2UoKTtcbiAgICBzdWJqZWN0LnNldChPcHRpb25hbC5ub25lKCkpO1xuICB9O1xuXG4gIGNvbnN0IGlzU2V0ID0gKCkgPT4gc3ViamVjdC5nZXQoKS5pc1NvbWUoKTtcblxuICBjb25zdCBnZXQgPSAoKTogT3B0aW9uYWw8VD4gPT4gc3ViamVjdC5nZXQoKTtcblxuICBjb25zdCBzZXQgPSAoczogVCkgPT4ge1xuICAgIHJldm9rZSgpO1xuICAgIHN1YmplY3Quc2V0KE9wdGlvbmFsLnNvbWUocykpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY2xlYXIsXG4gICAgaXNTZXQsXG4gICAgZ2V0LFxuICAgIHNldFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHJlcGVhdGFibGUgPSAoZGVsYXk6IG51bWJlcik6IFJlcGVhdGFibGUgPT4ge1xuICBjb25zdCBpbnRlcnZhbElkID0gQ2VsbChPcHRpb25hbC5ub25lPG51bWJlcj4oKSk7XG5cbiAgY29uc3QgcmV2b2tlID0gKCk6IHZvaWQgPT4gaW50ZXJ2YWxJZC5nZXQoKS5lYWNoKChpZCkgPT4gY2xlYXJJbnRlcnZhbChpZCkpO1xuXG4gIGNvbnN0IGNsZWFyID0gKCkgPT4ge1xuICAgIHJldm9rZSgpO1xuICAgIGludGVydmFsSWQuc2V0KE9wdGlvbmFsLm5vbmUoKSk7XG4gIH07XG5cbiAgY29uc3QgaXNTZXQgPSAoKSA9PiBpbnRlcnZhbElkLmdldCgpLmlzU29tZSgpO1xuXG4gIGNvbnN0IGdldCA9ICgpOiBPcHRpb25hbDxudW1iZXI+ID0+IGludGVydmFsSWQuZ2V0KCk7XG5cbiAgY29uc3Qgc2V0ID0gKGZ1bmN0aW9uVG9SZXBlYXQ6ICgpID0+IHZvaWQpID0+IHtcbiAgICByZXZva2UoKTtcbiAgICBpbnRlcnZhbElkLnNldChPcHRpb25hbC5zb21lKHNldEludGVydmFsKGZ1bmN0aW9uVG9SZXBlYXQsIGRlbGF5KSkpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY2xlYXIsXG4gICAgaXNTZXQsXG4gICAgZ2V0LFxuICAgIHNldCxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZXN0cm95YWJsZSA9IDxUIGV4dGVuZHMgeyBkZXN0cm95OiAoKSA9PiB2b2lkIH0+ICgpOiBSZXZvY2FibGU8VD4gPT4gc2luZ2xldG9uPFQ+KChzKSA9PiBzLmRlc3Ryb3koKSk7XG5cbmV4cG9ydCBjb25zdCB1bmJpbmRhYmxlID0gPFQgZXh0ZW5kcyB7IHVuYmluZDogKCkgPT4gdm9pZCB9PiAoKTogUmV2b2NhYmxlPFQ+ID0+IHNpbmdsZXRvbjxUPigocykgPT4gcy51bmJpbmQoKSk7XG5cbmV4cG9ydCBjb25zdCBhcGkgPSA8VCBleHRlbmRzIHsgZGVzdHJveTogKCkgPT4gdm9pZCB9PiAoKTogQXBpPFQ+ID0+IHtcbiAgY29uc3Qgc3ViamVjdCA9IGRlc3Ryb3lhYmxlPFQ+KCk7XG5cbiAgY29uc3QgcnVuID0gKGY6IChkYXRhOiBUKSA9PiB2b2lkKSA9PiBzdWJqZWN0LmdldCgpLmVhY2goZik7XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5zdWJqZWN0LFxuICAgIHJ1blxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHZhbHVlID0gPFQ+ICgpOiBWYWx1ZTxUPiA9PiB7XG4gIGNvbnN0IHN1YmplY3QgPSBzaW5nbGV0b24oRnVuLm5vb3ApO1xuXG4gIGNvbnN0IG9uID0gKGY6IChkYXRhOiBUKSA9PiB2b2lkKSA9PiBzdWJqZWN0LmdldCgpLmVhY2goZik7XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5zdWJqZWN0LFxuICAgIG9uXG4gIH07XG59O1xuIiwiaW1wb3J0ICogYXMgU3RyQXBwZW5kIGZyb20gJy4uL3N0ci9TdHJBcHBlbmQnO1xuXG5pbXBvcnQgeyBPcHRpb25hbCB9IGZyb20gJy4vT3B0aW9uYWwnO1xuaW1wb3J0ICogYXMgVHlwZSBmcm9tICcuL1R5cGUnO1xuXG5jb25zdCBjaGVja1JhbmdlID0gKHN0cjogc3RyaW5nLCBzdWJzdHI6IHN0cmluZywgc3RhcnQ6IG51bWJlcik6IGJvb2xlYW4gPT5cbiAgc3Vic3RyID09PSAnJyB8fCBzdHIubGVuZ3RoID49IHN1YnN0ci5sZW5ndGggJiYgc3RyLnN1YnN0cihzdGFydCwgc3RhcnQgKyBzdWJzdHIubGVuZ3RoKSA9PT0gc3Vic3RyO1xuXG4vKiogR2l2ZW4gYSBzdHJpbmcgYW5kIG9iamVjdCwgcGVyZm9ybSB0ZW1wbGF0ZS1yZXBsYWNlbWVudHMgb24gdGhlIHN0cmluZywgYXMgc3BlY2lmaWVkIGJ5IHRoZSBvYmplY3QuXG4gKiBBbnkgdGVtcGxhdGUgZmllbGRzIG9mIHRoZSBmb3JtICR7bmFtZX0gYXJlIHJlcGxhY2VkIGJ5IHRoZSBzdHJpbmcgb3IgbnVtYmVyIHNwZWNpZmllZCBhcyBvYmpbXCJuYW1lXCJdXG4gKiBCYXNlZCBvbiBEb3VnbGFzIENyb2NrZm9yZCdzICdzdXBwbGFudCcgbWV0aG9kIGZvciB0ZW1wbGF0ZS1yZXBsYWNlIG9mIHN0cmluZ3MuIFVzZXMgZGlmZmVyZW50IHRlbXBsYXRlIGZvcm1hdC5cbiAqL1xuZXhwb3J0IGNvbnN0IHN1cHBsYW50ID0gKHN0cjogc3RyaW5nLCBvYmo6IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IG51bWJlcj4pOiBzdHJpbmcgPT4ge1xuICBjb25zdCBpc1N0cmluZ09yTnVtYmVyID0gKGE6IHVua25vd24pOiBhIGlzIHN0cmluZyB8IG51bWJlciA9PiB7XG4gICAgY29uc3QgdCA9IHR5cGVvZiBhO1xuICAgIHJldHVybiB0ID09PSAnc3RyaW5nJyB8fCB0ID09PSAnbnVtYmVyJztcbiAgfTtcblxuICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcJFxceyhbXnt9XSopXFx9L2csXG4gICAgKGZ1bGxNYXRjaDogc3RyaW5nLCBrZXk6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBvYmpba2V5XTtcbiAgICAgIHJldHVybiBpc1N0cmluZ09yTnVtYmVyKHZhbHVlKSA/IHZhbHVlLnRvU3RyaW5nKCkgOiBmdWxsTWF0Y2g7XG4gICAgfVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUxlYWRpbmcgPSAoc3RyOiBzdHJpbmcsIHByZWZpeDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIHN0YXJ0c1dpdGgoc3RyLCBwcmVmaXgpID8gU3RyQXBwZW5kLnJlbW92ZUZyb21TdGFydChzdHIsIHByZWZpeC5sZW5ndGgpIDogc3RyO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZVRyYWlsaW5nID0gKHN0cjogc3RyaW5nLCBzdWZmaXg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBlbmRzV2l0aChzdHIsIHN1ZmZpeCkgPyBTdHJBcHBlbmQucmVtb3ZlRnJvbUVuZChzdHIsIHN1ZmZpeC5sZW5ndGgpIDogc3RyO1xufTtcblxuZXhwb3J0IGNvbnN0IGVuc3VyZUxlYWRpbmcgPSAoc3RyOiBzdHJpbmcsIHByZWZpeDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIHN0YXJ0c1dpdGgoc3RyLCBwcmVmaXgpID8gc3RyIDogU3RyQXBwZW5kLmFkZFRvU3RhcnQoc3RyLCBwcmVmaXgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGVuc3VyZVRyYWlsaW5nID0gKHN0cjogc3RyaW5nLCBzdWZmaXg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBlbmRzV2l0aChzdHIsIHN1ZmZpeCkgPyBzdHIgOiBTdHJBcHBlbmQuYWRkVG9FbmQoc3RyLCBzdWZmaXgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbnRhaW5zID0gKHN0cjogc3RyaW5nLCBzdWJzdHI6IHN0cmluZywgc3RhcnQ6IG51bWJlciA9IDAsIGVuZD86IG51bWJlcik6IGJvb2xlYW4gPT4ge1xuICBjb25zdCBpZHggPSBzdHIuaW5kZXhPZihzdWJzdHIsIHN0YXJ0KTtcbiAgaWYgKGlkeCAhPT0gLTEpIHtcbiAgICByZXR1cm4gVHlwZS5pc1VuZGVmaW5lZChlbmQpID8gdHJ1ZSA6IGlkeCArIHN1YnN0ci5sZW5ndGggPD0gZW5kO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGNhcGl0YWxpemUgPSAoc3RyOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gc3RyID09PSAnJyA/ICcnIDogc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnN1YnN0cmluZygxKTtcbn07XG5cbi8qKiBEb2VzICdzdHInIHN0YXJ0IHdpdGggJ3ByZWZpeCc/XG4gKiAgTm90ZTogYWxsIHN0cmluZ3Mgc3RhcnQgd2l0aCB0aGUgZW1wdHkgc3RyaW5nLlxuICogICAgICAgIE1vcmUgZm9ybWFsbHksIGZvciBhbGwgc3RyaW5ncyB4LCBzdGFydHNXaXRoKHgsIFwiXCIpLlxuICogICAgICAgIFRoaXMgaXMgc28gdGhhdCBmb3IgYWxsIHN0cmluZ3MgeCBhbmQgeSwgc3RhcnRzV2l0aCh5ICsgeCwgeSlcbiAqL1xuZXhwb3J0IGNvbnN0IHN0YXJ0c1dpdGggPSAoc3RyOiBzdHJpbmcsIHByZWZpeDogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gIHJldHVybiBjaGVja1JhbmdlKHN0ciwgcHJlZml4LCAwKTtcbn07XG5cbi8qKiBEb2VzICdzdHInIGVuZCB3aXRoICdzdWZmaXgnP1xuICogIE5vdGU6IGFsbCBzdHJpbmdzIGVuZCB3aXRoIHRoZSBlbXB0eSBzdHJpbmcuXG4gKiAgICAgICAgTW9yZSBmb3JtYWxseSwgZm9yIGFsbCBzdHJpbmdzIHgsIGVuZHNXaXRoKHgsIFwiXCIpLlxuICogICAgICAgIFRoaXMgaXMgc28gdGhhdCBmb3IgYWxsIHN0cmluZ3MgeCBhbmQgeSwgZW5kc1dpdGgoeCArIHksIHkpXG4gKi9cbmV4cG9ydCBjb25zdCBlbmRzV2l0aCA9IChzdHI6IHN0cmluZywgc3VmZml4OiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgcmV0dXJuIGNoZWNrUmFuZ2Uoc3RyLCBzdWZmaXgsIHN0ci5sZW5ndGggLSBzdWZmaXgubGVuZ3RoKTtcbn07XG5cbmNvbnN0IGJsYW5rID0gKHI6IFJlZ0V4cCkgPT4gKHM6IHN0cmluZyk6IHN0cmluZyA9PlxuICBzLnJlcGxhY2UociwgJycpO1xuXG4vKiogcmVtb3ZlcyBhbGwgbGVhZGluZyBhbmQgdHJhaWxpbmcgc3BhY2VzICovXG5leHBvcnQgY29uc3QgdHJpbTogKHM6IHN0cmluZykgPT4gc3RyaW5nID1cbiAgYmxhbmsoL15cXHMrfFxccyskL2cpO1xuXG5leHBvcnQgY29uc3QgbFRyaW06IChzOiBzdHJpbmcpID0+IHN0cmluZyA9XG4gIGJsYW5rKC9eXFxzKy9nKTtcblxuZXhwb3J0IGNvbnN0IHJUcmltOiAoczogc3RyaW5nKSA9PiBzdHJpbmcgPVxuICBibGFuaygvXFxzKyQvZyk7XG5cbmV4cG9ydCBjb25zdCBpc05vdEVtcHR5ID0gKHM6IHN0cmluZyk6IGJvb2xlYW4gPT4gcy5sZW5ndGggPiAwO1xuXG5leHBvcnQgY29uc3QgaXNFbXB0eSA9IChzOiBzdHJpbmcpOiBib29sZWFuID0+ICFpc05vdEVtcHR5KHMpO1xuXG5leHBvcnQgY29uc3QgcmVwZWF0ID0gKHM6IHN0cmluZywgY291bnQ6IG51bWJlcik6IHN0cmluZyA9PiBjb3VudCA8PSAwID8gJycgOiBuZXcgQXJyYXkoY291bnQgKyAxKS5qb2luKHMpO1xuXG5leHBvcnQgY29uc3QgZnJvbUNvZGVQb2ludCA9IFN0cmluZy5mcm9tQ29kZVBvaW50O1xuXG5leHBvcnQgY29uc3QgdG9JbnQgPSAodmFsdWU6IHN0cmluZywgcmFkaXg6IG51bWJlciA9IDEwKTogT3B0aW9uYWw8bnVtYmVyPiA9PiB7XG4gIGNvbnN0IG51bSA9IHBhcnNlSW50KHZhbHVlLCByYWRpeCk7XG4gIHJldHVybiBpc05hTihudW0pID8gT3B0aW9uYWwubm9uZSgpIDogT3B0aW9uYWwuc29tZShudW0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHRvRmxvYXQgPSAodmFsdWU6IHN0cmluZyk6IE9wdGlvbmFsPG51bWJlcj4gPT4ge1xuICBjb25zdCBudW0gPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgcmV0dXJuIGlzTmFOKG51bSkgPyBPcHRpb25hbC5ub25lKCkgOiBPcHRpb25hbC5zb21lKG51bSk7XG59O1xuIiwiaW1wb3J0ICogYXMgVHlwZSBmcm9tICcuL1R5cGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRocm90dGxlcjxBIGV4dGVuZHMgYW55W10+IHtcbiAgcmVhZG9ubHkgY2FuY2VsOiAoKSA9PiB2b2lkO1xuICByZWFkb25seSB0aHJvdHRsZTogKC4uLmFyZ3M6IEEpID0+IHZvaWQ7XG59XG5cbi8vIFJ1biBhIGZ1bmN0aW9uIGZuIGFmdGVyIHJhdGUgbXMuIElmIGFub3RoZXIgaW52b2NhdGlvbiBvY2N1cnNcbi8vIGR1cmluZyB0aGUgdGltZSBpdCBpcyB3YWl0aW5nLCB1cGRhdGUgdGhlIGFyZ3VtZW50cyBmIHdpbGwgcnVuXG4vLyB3aXRoIChidXQga2VlcCB0aGUgY3VycmVudCBzY2hlZHVsZSlcbmV4cG9ydCBjb25zdCBhZGFwdGFibGUgPSA8QSBleHRlbmRzIGFueVtdPihmbjogKC4uLmE6IEEpID0+IHZvaWQsIHJhdGU6IG51bWJlcik6IFRocm90dGxlcjxBPiA9PiB7XG4gIGxldCB0aW1lcjogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIGxldCBhcmdzOiBBIHwgbnVsbCA9IG51bGw7XG4gIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICBpZiAoIVR5cGUuaXNOdWxsKHRpbWVyKSkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgIHRpbWVyID0gbnVsbDtcbiAgICAgIGFyZ3MgPSBudWxsO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgdGhyb3R0bGUgPSAoLi4ubmV3QXJnczogQSkgPT4ge1xuICAgIGFyZ3MgPSBuZXdBcmdzO1xuICAgIGlmIChUeXBlLmlzTnVsbCh0aW1lcikpIHtcbiAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRlbXBBcmdzID0gYXJncztcbiAgICAgICAgdGltZXIgPSBudWxsO1xuICAgICAgICBhcmdzID0gbnVsbDtcbiAgICAgICAgZm4uYXBwbHkobnVsbCwgdGVtcEFyZ3MgYXMgQSk7XG4gICAgICB9LCByYXRlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBjYW5jZWwsXG4gICAgdGhyb3R0bGVcbiAgfTtcbn07XG5cbi8vIFJ1biBhIGZ1bmN0aW9uIGZuIGFmdGVyIHJhdGUgbXMuIElmIGFub3RoZXIgaW52b2NhdGlvbiBvY2N1cnNcbi8vIGR1cmluZyB0aGUgdGltZSBpdCBpcyB3YWl0aW5nLCBpZ25vcmUgaXQgY29tcGxldGVseS5cbmV4cG9ydCBjb25zdCBmaXJzdCA9IDxBIGV4dGVuZHMgYW55W10+KGZuOiAoLi4uYTogQSkgPT4gdm9pZCwgcmF0ZTogbnVtYmVyKTogVGhyb3R0bGVyPEE+ID0+IHtcbiAgbGV0IHRpbWVyOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgIGlmICghVHlwZS5pc051bGwodGltZXIpKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgdGltZXIgPSBudWxsO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgdGhyb3R0bGUgPSAoLi4uYXJnczogQSkgPT4ge1xuICAgIGlmIChUeXBlLmlzTnVsbCh0aW1lcikpIHtcbiAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRpbWVyID0gbnVsbDtcbiAgICAgICAgZm4uYXBwbHkobnVsbCwgYXJncyk7XG4gICAgICB9LCByYXRlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBjYW5jZWwsXG4gICAgdGhyb3R0bGVcbiAgfTtcbn07XG5cbi8vIFJ1biBhIGZ1bmN0aW9uIGZuIGFmdGVyIHJhdGUgbXMuIElmIGFub3RoZXIgaW52b2NhdGlvbiBvY2N1cnNcbi8vIGR1cmluZyB0aGUgdGltZSBpdCBpcyB3YWl0aW5nLCByZXNjaGVkdWxlIHRoZSBmdW5jdGlvbiBhZ2FpblxuLy8gd2l0aCB0aGUgbmV3IGFyZ3VtZW50cy5cbmV4cG9ydCBjb25zdCBsYXN0ID0gPEEgZXh0ZW5kcyBhbnlbXT4oZm46ICguLi5hOiBBKSA9PiB2b2lkLCByYXRlOiBudW1iZXIpOiBUaHJvdHRsZXI8QT4gPT4ge1xuICBsZXQgdGltZXI6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgaWYgKCFUeXBlLmlzTnVsbCh0aW1lcikpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICB0aW1lciA9IG51bGw7XG4gICAgfVxuICB9O1xuICBjb25zdCB0aHJvdHRsZSA9ICguLi5hcmdzOiBBKSA9PiB7XG4gICAgY2FuY2VsKCk7XG4gICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRpbWVyID0gbnVsbDtcbiAgICAgIGZuLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgIH0sIHJhdGUpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY2FuY2VsLFxuICAgIHRocm90dGxlXG4gIH07XG59O1xuIiwiZXhwb3J0IGNvbnN0IGNhY2hlZCA9IDxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnk+KGY6IFQpOiAoLi4uYXJnczogUGFyYW1ldGVyczxUPikgPT4gUmV0dXJuVHlwZTxUPiA9PiB7XG4gIGxldCBjYWxsZWQgPSBmYWxzZTtcbiAgbGV0IHI6IGFueTtcbiAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgICByID0gZi5hcHBseShudWxsLCBhcmdzKTtcbiAgICB9XG4gICAgcmV0dXJuIHI7XG4gIH07XG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXdyYXBwZXItb2JqZWN0LXR5cGVzICovXG5jb25zdCBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcblxuaW50ZXJmYWNlIENvbnN0cnVjdG9yPFQgZXh0ZW5kcyBPYmplY3Q+IHtcbiAgcmVhZG9ubHkgcHJvdG90eXBlOiBUO1xuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG59XG5cbmNvbnN0IGhhc1Byb3RvID0gPFQgZXh0ZW5kcyBPYmplY3Q+KHY6IE9iamVjdCwgY29uc3RydWN0b3I6IENvbnN0cnVjdG9yPFQ+LCBwcmVkaWNhdGU6ICh2OiBPYmplY3QsIHByb3RvdHlwZTogVCkgPT4gYm9vbGVhbik6IGJvb2xlYW4gPT4ge1xuICBpZiAocHJlZGljYXRlKHYsIGNvbnN0cnVjdG9yLnByb3RvdHlwZSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICAvLyBTdHJpbmctYmFzZWQgZmFsbGJhY2sgdGltZVxuICAgIHJldHVybiB2LmNvbnN0cnVjdG9yPy5uYW1lID09PSBjb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG59O1xuXG5jb25zdCB0eXBlT2YgPSAoeDogYW55KTogc3RyaW5nID0+IHtcbiAgY29uc3QgdCA9IHR5cGVvZiB4O1xuICBpZiAoeCA9PT0gbnVsbCkge1xuICAgIHJldHVybiAnbnVsbCc7XG4gIH0gZWxzZSBpZiAodCA9PT0gJ29iamVjdCcgJiYgQXJyYXkuaXNBcnJheSh4KSkge1xuICAgIHJldHVybiAnYXJyYXknO1xuICB9IGVsc2UgaWYgKHQgPT09ICdvYmplY3QnICYmIGhhc1Byb3RvKHgsIFN0cmluZywgKG8sIHByb3RvKSA9PiBwcm90by5pc1Byb3RvdHlwZU9mKG8pKSkge1xuICAgIHJldHVybiAnc3RyaW5nJztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdDtcbiAgfVxufTtcblxuY29uc3QgaXNUeXBlID0gPFlvbG8+KHR5cGU6IHN0cmluZykgPT4gKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBZb2xvID0+XG4gIHR5cGVPZih2YWx1ZSkgPT09IHR5cGU7XG5cbmNvbnN0IGlzU2ltcGxlVHlwZSA9IDxZb2xvPih0eXBlOiBzdHJpbmcpID0+ICh2YWx1ZTogYW55KTogdmFsdWUgaXMgWW9sbyA9PlxuICB0eXBlb2YgdmFsdWUgPT09IHR5cGU7XG5cbmNvbnN0IGVxID0gPFQ+ICh0OiBUKSA9PiAoYTogYW55KTogYSBpcyBUID0+XG4gIHQgPT09IGE7XG5cbmV4cG9ydCBjb25zdCBpcyA9IDxFIGV4dGVuZHMgT2JqZWN0Pih2YWx1ZTogYW55LCBjb25zdHJ1Y3RvcjogQ29uc3RydWN0b3I8RT4pOiB2YWx1ZSBpcyBFID0+XG4gIGlzT2JqZWN0KHZhbHVlKSAmJiBoYXNQcm90bzxFPih2YWx1ZSwgY29uc3RydWN0b3IsIChvLCBwcm90bykgPT4gZ2V0UHJvdG90eXBlT2YobykgPT09IHByb3RvKTtcblxuZXhwb3J0IGNvbnN0IGlzU3RyaW5nOiAodmFsdWU6IGFueSkgPT4gdmFsdWUgaXMgc3RyaW5nID1cbiAgaXNUeXBlKCdzdHJpbmcnKTtcblxuZXhwb3J0IGNvbnN0IGlzT2JqZWN0OiAodmFsdWU6IGFueSkgPT4gdmFsdWUgaXMgT2JqZWN0ID1cbiAgaXNUeXBlKCdvYmplY3QnKTtcblxuZXhwb3J0IGNvbnN0IGlzUGxhaW5PYmplY3QgPSAodmFsdWU6IHVua25vd24pOiB2YWx1ZSBpcyBPYmplY3QgPT5cbiAgaXModmFsdWUsIE9iamVjdCk7XG5cbmV4cG9ydCBjb25zdCBpc0FycmF5OiAodmFsdWU6IGFueSkgPT4gdmFsdWUgaXMgQXJyYXk8dW5rbm93bj4gPVxuICBpc1R5cGUoJ2FycmF5Jyk7XG5cbmV4cG9ydCBjb25zdCBpc051bGw6IChhOiBhbnkpID0+IGEgaXMgbnVsbCA9XG4gIGVxKG51bGwpO1xuXG5leHBvcnQgY29uc3QgaXNCb29sZWFuOiAodmFsdWU6IGFueSkgPT4gdmFsdWUgaXMgYm9vbGVhbiA9XG4gIGlzU2ltcGxlVHlwZTxib29sZWFuPignYm9vbGVhbicpO1xuXG5leHBvcnQgY29uc3QgaXNVbmRlZmluZWQ6IChhOiBhbnkpID0+IGEgaXMgdW5kZWZpbmVkID1cbiAgZXEodW5kZWZpbmVkKTtcblxuZXhwb3J0IGNvbnN0IGlzTnVsbGFibGUgPSAoYTogYW55KTogYSBpcyBudWxsIHwgdW5kZWZpbmVkID0+XG4gIGEgPT09IG51bGwgfHwgYSA9PT0gdW5kZWZpbmVkO1xuXG5leHBvcnQgY29uc3QgaXNOb25OdWxsYWJsZSA9IDxBPiAoYTogQSB8IG51bGwgfCB1bmRlZmluZWQpOiBhIGlzIE5vbk51bGxhYmxlPEE+ID0+XG4gICFpc051bGxhYmxlKGEpO1xuXG5leHBvcnQgY29uc3QgaXNGdW5jdGlvbjogKHZhbHVlOiBhbnkpID0+IHZhbHVlIGlzIEZ1bmN0aW9uID1cbiAgaXNTaW1wbGVUeXBlPEZ1bmN0aW9uPignZnVuY3Rpb24nKTtcblxuZXhwb3J0IGNvbnN0IGlzTnVtYmVyOiAodmFsdWU6IGFueSkgPT4gdmFsdWUgaXMgbnVtYmVyID1cbiAgaXNTaW1wbGVUeXBlPG51bWJlcj4oJ251bWJlcicpO1xuXG5leHBvcnQgY29uc3QgaXNBcnJheU9mID0gPEU+KHZhbHVlOiBhbnksIHByZWQ6ICh4OiBhbnkpID0+IHggaXMgRSk6IHZhbHVlIGlzIEFycmF5PEU+ID0+IHtcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHZhbHVlLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICBpZiAoIShwcmVkKHZhbHVlW2ldKSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQgY29uc3QgaXNQcm9taXNlTGlrZSA9ICh4OiBhbnkpOiB4IGlzIFByb21pc2U8dW5rbm93bj4gPT5cbiAgaXNPYmplY3QoeClcbiAgJiYgaXNGdW5jdGlvbih4LnRoZW4pXG4gICYmIGlzRnVuY3Rpb24oeC5jYXRjaCk7XG4iLCJleHBvcnQgY29uc3QgYWRkVG9TdGFydCA9IChzdHI6IHN0cmluZywgcHJlZml4OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gcHJlZml4ICsgc3RyO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZFRvRW5kID0gKHN0cjogc3RyaW5nLCBzdWZmaXg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBzdHIgKyBzdWZmaXg7XG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlRnJvbVN0YXJ0ID0gKHN0cjogc3RyaW5nLCBudW1DaGFyczogbnVtYmVyKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIHN0ci5zdWJzdHJpbmcobnVtQ2hhcnMpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUZyb21FbmQgPSAoc3RyOiBzdHJpbmcsIG51bUNoYXJzOiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gc3RyLnN1YnN0cmluZygwLCBzdHIubGVuZ3RoIC0gbnVtQ2hhcnMpO1xufTtcbiIsImltcG9ydCB7IEZ1biwgT3B0aW9uYWwsIFRodW5rIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0IHR5cGUgeyBCcm93c2VyIGFzIEJyb3dzZXJDb3JlIH0gZnJvbSAnLi4vY29yZS9Ccm93c2VyJztcbmltcG9ydCB0eXBlIHsgT3BlcmF0aW5nU3lzdGVtIGFzIE9wZXJhdGluZ1N5c3RlbUNvcmUgfSBmcm9tICcuLi9jb3JlL09wZXJhdGluZ1N5c3RlbSc7XG5pbXBvcnQgeyBQbGF0Zm9ybURldGVjdGlvbiB9IGZyb20gJy4uL2NvcmUvUGxhdGZvcm1EZXRlY3Rpb24nO1xuaW1wb3J0IHR5cGUgeyBEZXZpY2VUeXBlIGFzIERldmljZVR5cGVDb3JlIH0gZnJvbSAnLi4vZGV0ZWN0L0RldmljZVR5cGUnO1xuXG5leHBvcnQgdHlwZSBCcm93c2VyID0gQnJvd3NlckNvcmU7XG5leHBvcnQgdHlwZSBPcGVyYXRpbmdTeXN0ZW0gPSBPcGVyYXRpbmdTeXN0ZW1Db3JlO1xuZXhwb3J0IHR5cGUgRGV2aWNlVHlwZSA9IERldmljZVR5cGVDb3JlO1xuXG5jb25zdCBtZWRpYU1hdGNoID0gKHF1ZXJ5OiBzdHJpbmcpID0+IHdpbmRvdy5tYXRjaE1lZGlhKHF1ZXJ5KS5tYXRjaGVzO1xuXG4vLyBJTVBPUlRBTlQ6IE11c3QgYmUgaW4gYSB0aHVuaywgb3RoZXJ3aXNlIHJvbGx1cCB0aGlua3MgY2FsbGluZyB0aGlzIGltbWVkaWF0ZWx5XG4vLyBjYXVzZXMgc2lkZSBlZmZlY3RzIGFuZCB3b24ndCB0cmVlIHNoYWtlIHRoaXMgYXdheVxuLy8gTm90ZTogbmF2aWdhdG9yLnVzZXJBZ2VudERhdGEgaXMgbm90IHBhcnQgb2YgdGhlIG5hdGl2ZSB0eXBlc2NyaXB0IHR5cGVzIHlldFxubGV0IHBsYXRmb3JtID0gVGh1bmsuY2FjaGVkKCgpID0+IFBsYXRmb3JtRGV0ZWN0aW9uLmRldGVjdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCwgT3B0aW9uYWwuZnJvbSgoKHdpbmRvdy5uYXZpZ2F0b3IgYXMgYW55KS51c2VyQWdlbnREYXRhKSksIG1lZGlhTWF0Y2gpKTtcblxuZXhwb3J0IGNvbnN0IGRldGVjdCA9ICgpOiBQbGF0Zm9ybURldGVjdGlvbiA9PiBwbGF0Zm9ybSgpO1xuXG5leHBvcnQgY29uc3Qgb3ZlcnJpZGUgPSAob3ZlcnJpZGVzOiBQYXJ0aWFsPFBsYXRmb3JtRGV0ZWN0aW9uPik6IHZvaWQgPT4ge1xuICBwbGF0Zm9ybSA9IEZ1bi5jb25zdGFudCh7XG4gICAgLi4uZGV0ZWN0KCksXG4gICAgLi4ub3ZlcnJpZGVzXG4gIH0pO1xufTtcbiIsImltcG9ydCB7IFJlc29sdmUsIFR5cGUgfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5pbXBvcnQgKiBhcyBHbG9iYWwgZnJvbSAnLi4vdXRpbC9HbG9iYWwnO1xuXG5jb25zdCBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcblxuLypcbiAqIElFOSBhbmQgYWJvdmVcbiAqXG4gKiBNRE4gbm8gdXNlIG9uIHRoaXMgb25lLCBidXQgaGVyZSdzIHRoZSBsaW5rIGFueXdheTpcbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL2RvY3MvV2ViL0FQSS9IVE1MRWxlbWVudFxuICovXG5jb25zdCBzYW5kSFRNTEVsZW1lbnQgPSAoc2NvcGU6IFdpbmRvdyB8IHVuZGVmaW5lZCkgPT4ge1xuICByZXR1cm4gR2xvYmFsLmdldE9yRGllKCdIVE1MRWxlbWVudCcsIHNjb3BlKSBhcyB0eXBlb2YgSFRNTEVsZW1lbnQ7XG59O1xuXG5jb25zdCBpc1Byb3RvdHlwZU9mID0gKHg6IGFueSk6IHggaXMgSFRNTEVsZW1lbnQgPT4ge1xuICAvLyB1c2UgUmVzb2x2ZSB0byBnZXQgdGhlIHdpbmRvdyBvYmplY3QgZm9yIHggYW5kIGp1c3QgcmV0dXJuIHVuZGVmaW5lZCBpZiBpdCBjYW4ndCBmaW5kIGl0LlxuICAvLyB1bmRlZmluZWQgc2NvcGUgbGF0ZXIgdHJpZ2dlcnMgdXNpbmcgdGhlIGdsb2JhbCB3aW5kb3cuXG4gIGNvbnN0IHNjb3BlOiBXaW5kb3cgfCB1bmRlZmluZWQgPSBSZXNvbHZlLnJlc29sdmUoJ293bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcnLCB4KTtcblxuICAvLyBUSU5ZLTczNzQ6IFdlIGNhbid0IHJlbHkgb24gbG9va2luZyBhdCB0aGUgb3duZXIgd2luZG93IEhUTUxFbGVtZW50IGFzIHRoZSBlbGVtZW50IG1heSBoYXZlXG4gIC8vIGJlZW4gY29uc3RydWN0ZWQgaW4gYSBkaWZmZXJlbnQgd2luZG93IGFuZCB0aGVuIGFwcGVuZGVkIHRvIHRoZSBjdXJyZW50IHdpbmRvdyBkb2N1bWVudC5cbiAgcmV0dXJuIFR5cGUuaXNPYmplY3QoeCkgJiYgKHNhbmRIVE1MRWxlbWVudChzY29wZSkucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoeCkgfHwgL15IVE1MXFx3KkVsZW1lbnQkLy50ZXN0KGdldFByb3RvdHlwZU9mKHgpLmNvbnN0cnVjdG9yLm5hbWUpKTtcbn07XG5cbmV4cG9ydCB7XG4gIGlzUHJvdG90eXBlT2Zcbn07XG4iLCJpbXBvcnQgeyBGdW4gfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5pbXBvcnQgeyBWZXJzaW9uIH0gZnJvbSAnLi4vZGV0ZWN0L1ZlcnNpb24nO1xuaW1wb3J0IHR5cGUgeyBVYUluZm8gfSBmcm9tICcuLi9pbmZvL1VhSW5mbyc7XG5cbmNvbnN0IGVkZ2UgPSAnRWRnZSc7XG5jb25zdCBjaHJvbWl1bSA9ICdDaHJvbWl1bSc7XG5jb25zdCBpZSA9ICdJRSc7XG5jb25zdCBvcGVyYSA9ICdPcGVyYSc7XG5jb25zdCBmaXJlZm94ID0gJ0ZpcmVmb3gnO1xuY29uc3Qgc2FmYXJpID0gJ1NhZmFyaSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnJvd3NlciBleHRlbmRzIFVhSW5mbyB7XG4gIHJlYWRvbmx5IGlzRWRnZTogKCkgPT4gYm9vbGVhbjtcbiAgcmVhZG9ubHkgaXNDaHJvbWl1bTogKCkgPT4gYm9vbGVhbjtcbiAgcmVhZG9ubHkgaXNJRTogKCkgPT4gYm9vbGVhbjtcbiAgcmVhZG9ubHkgaXNPcGVyYTogKCkgPT4gYm9vbGVhbjtcbiAgcmVhZG9ubHkgaXNGaXJlZm94OiAoKSA9PiBib29sZWFuO1xuICByZWFkb25seSBpc1NhZmFyaTogKCkgPT4gYm9vbGVhbjtcbn1cblxuY29uc3QgdW5rbm93biA9ICgpOiBCcm93c2VyID0+IHtcbiAgcmV0dXJuIG51KHtcbiAgICBjdXJyZW50OiB1bmRlZmluZWQsXG4gICAgdmVyc2lvbjogVmVyc2lvbi51bmtub3duKClcbiAgfSk7XG59O1xuXG5jb25zdCBudSA9IChpbmZvOiBVYUluZm8pOiBCcm93c2VyID0+IHtcbiAgY29uc3QgY3VycmVudCA9IGluZm8uY3VycmVudDtcbiAgY29uc3QgdmVyc2lvbiA9IGluZm8udmVyc2lvbjtcblxuICBjb25zdCBpc0Jyb3dzZXIgPSAobmFtZTogc3RyaW5nKSA9PiAoKTogYm9vbGVhbiA9PiBjdXJyZW50ID09PSBuYW1lO1xuXG4gIHJldHVybiB7XG4gICAgY3VycmVudCxcbiAgICB2ZXJzaW9uLFxuXG4gICAgaXNFZGdlOiBpc0Jyb3dzZXIoZWRnZSksXG4gICAgaXNDaHJvbWl1bTogaXNCcm93c2VyKGNocm9taXVtKSxcbiAgICAvLyBOT1RFOiBpc0llIGp1c3QgbG9va3MgdG9vIHdlaXJkXG4gICAgaXNJRTogaXNCcm93c2VyKGllKSxcbiAgICBpc09wZXJhOiBpc0Jyb3dzZXIob3BlcmEpLFxuICAgIGlzRmlyZWZveDogaXNCcm93c2VyKGZpcmVmb3gpLFxuICAgIGlzU2FmYXJpOiBpc0Jyb3dzZXIoc2FmYXJpKVxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IEJyb3dzZXIgPSB7XG4gIHVua25vd24sXG4gIG51LFxuICBlZGdlOiBGdW4uY29uc3RhbnQoZWRnZSksXG4gIGNocm9taXVtOiBGdW4uY29uc3RhbnQoY2hyb21pdW0pLFxuICBpZTogRnVuLmNvbnN0YW50KGllKSxcbiAgb3BlcmE6IEZ1bi5jb25zdGFudChvcGVyYSksXG4gIGZpcmVmb3g6IEZ1bi5jb25zdGFudChmaXJlZm94KSxcbiAgc2FmYXJpOiBGdW4uY29uc3RhbnQoc2FmYXJpKVxufTtcbiIsImltcG9ydCB7IEZ1biB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmltcG9ydCB7IFZlcnNpb24gfSBmcm9tICcuLi9kZXRlY3QvVmVyc2lvbic7XG5pbXBvcnQgdHlwZSB7IFVhSW5mbyB9IGZyb20gJy4uL2luZm8vVWFJbmZvJztcblxuZXhwb3J0IGludGVyZmFjZSBPcGVyYXRpbmdTeXN0ZW0gZXh0ZW5kcyBVYUluZm8ge1xuICByZWFkb25seSBpc1dpbmRvd3M6ICgpID0+IGJvb2xlYW47XG4gIHJlYWRvbmx5IGlzaU9TOiAoKSA9PiBib29sZWFuO1xuICByZWFkb25seSBpc0FuZHJvaWQ6ICgpID0+IGJvb2xlYW47XG4gIHJlYWRvbmx5IGlzTWFjT1M6ICgpID0+IGJvb2xlYW47XG4gIHJlYWRvbmx5IGlzTGludXg6ICgpID0+IGJvb2xlYW47XG4gIHJlYWRvbmx5IGlzU29sYXJpczogKCkgPT4gYm9vbGVhbjtcbiAgcmVhZG9ubHkgaXNGcmVlQlNEOiAoKSA9PiBib29sZWFuO1xuICByZWFkb25seSBpc0Nocm9tZU9TOiAoKSA9PiBib29sZWFuO1xufVxuXG5jb25zdCB3aW5kb3dzID0gJ1dpbmRvd3MnO1xuY29uc3QgaW9zID0gJ2lPUyc7XG5jb25zdCBhbmRyb2lkID0gJ0FuZHJvaWQnO1xuY29uc3QgbGludXggPSAnTGludXgnO1xuY29uc3QgbWFjb3MgPSAnbWFjT1MnO1xuY29uc3Qgc29sYXJpcyA9ICdTb2xhcmlzJztcbmNvbnN0IGZyZWVic2QgPSAnRnJlZUJTRCc7XG5jb25zdCBjaHJvbWVvcyA9ICdDaHJvbWVPUyc7XG5cbi8vIFRob3VnaCB0aGVyZSBpcyBhIGJpdCBvZiBkdXBlIHdpdGggdGhpcyBhbmQgQnJvd3NlciwgdHJ5aW5nIHRvXG4vLyByZXVzZSBjb2RlIG1ha2VzIGl0IG11Y2ggaGFyZGVyIHRvIGZvbGxvdyBhbmQgY2hhbmdlLlxuXG5jb25zdCB1bmtub3duID0gKCk6IE9wZXJhdGluZ1N5c3RlbSA9PiB7XG4gIHJldHVybiBudSh7XG4gICAgY3VycmVudDogdW5kZWZpbmVkLFxuICAgIHZlcnNpb246IFZlcnNpb24udW5rbm93bigpXG4gIH0pO1xufTtcblxuY29uc3QgbnUgPSAoaW5mbzogVWFJbmZvKTogT3BlcmF0aW5nU3lzdGVtID0+IHtcbiAgY29uc3QgY3VycmVudCA9IGluZm8uY3VycmVudDtcbiAgY29uc3QgdmVyc2lvbiA9IGluZm8udmVyc2lvbjtcblxuICBjb25zdCBpc09TID0gKG5hbWU6IHN0cmluZykgPT4gKCk6IGJvb2xlYW4gPT4gY3VycmVudCA9PT0gbmFtZTtcblxuICByZXR1cm4ge1xuICAgIGN1cnJlbnQsXG4gICAgdmVyc2lvbixcblxuICAgIGlzV2luZG93czogaXNPUyh3aW5kb3dzKSxcbiAgICAvLyBUT0RPOiBGaXggY2FwaXRhbGlzYXRpb25cbiAgICBpc2lPUzogaXNPUyhpb3MpLFxuICAgIGlzQW5kcm9pZDogaXNPUyhhbmRyb2lkKSxcbiAgICBpc01hY09TOiBpc09TKG1hY29zKSxcbiAgICBpc0xpbnV4OiBpc09TKGxpbnV4KSxcbiAgICBpc1NvbGFyaXM6IGlzT1Moc29sYXJpcyksXG4gICAgaXNGcmVlQlNEOiBpc09TKGZyZWVic2QpLFxuICAgIGlzQ2hyb21lT1M6IGlzT1MoY2hyb21lb3MpXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgT3BlcmF0aW5nU3lzdGVtID0ge1xuICB1bmtub3duLFxuICBudSxcblxuICB3aW5kb3dzOiBGdW4uY29uc3RhbnQod2luZG93cyksXG4gIGlvczogRnVuLmNvbnN0YW50KGlvcyksXG4gIGFuZHJvaWQ6IEZ1bi5jb25zdGFudChhbmRyb2lkKSxcbiAgbGludXg6IEZ1bi5jb25zdGFudChsaW51eCksXG4gIG1hY29zOiBGdW4uY29uc3RhbnQobWFjb3MpLFxuICBzb2xhcmlzOiBGdW4uY29uc3RhbnQoc29sYXJpcyksXG4gIGZyZWVic2Q6IEZ1bi5jb25zdGFudChmcmVlYnNkKSxcbiAgY2hyb21lb3M6IEZ1bi5jb25zdGFudChjaHJvbWVvcylcbn07XG4iLCJpbXBvcnQgdHlwZSB7IE9wdGlvbmFsIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0IHsgRGV2aWNlVHlwZSB9IGZyb20gJy4uL2RldGVjdC9EZXZpY2VUeXBlJztcbmltcG9ydCAqIGFzIFVhRGF0YSBmcm9tICcuLi9kZXRlY3QvVWFEYXRhJztcbmltcG9ydCAqIGFzIFVhU3RyaW5nIGZyb20gJy4uL2RldGVjdC9VYVN0cmluZyc7XG5pbXBvcnQgeyBQbGF0Zm9ybUluZm8gfSBmcm9tICcuLi9pbmZvL1BsYXRmb3JtSW5mbyc7XG5cbmltcG9ydCB7IEJyb3dzZXIgfSBmcm9tICcuL0Jyb3dzZXInO1xuaW1wb3J0IHsgT3BlcmF0aW5nU3lzdGVtIH0gZnJvbSAnLi9PcGVyYXRpbmdTeXN0ZW0nO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBsYXRmb3JtRGV0ZWN0aW9uIHtcbiAgcmVhZG9ubHkgYnJvd3NlcjogQnJvd3NlcjtcbiAgcmVhZG9ubHkgb3M6IE9wZXJhdGluZ1N5c3RlbTtcbiAgcmVhZG9ubHkgZGV2aWNlVHlwZTogRGV2aWNlVHlwZTtcbn1cblxuY29uc3QgZGV0ZWN0ID0gKHVzZXJBZ2VudDogc3RyaW5nLCB1c2VyQWdlbnREYXRhT3B0OiBPcHRpb25hbDxVYURhdGEuVXNlckFnZW50RGF0YT4sIG1lZGlhTWF0Y2g6IChxdWVyeTogc3RyaW5nKSA9PiBib29sZWFuKTogUGxhdGZvcm1EZXRlY3Rpb24gPT4ge1xuICBjb25zdCBicm93c2VycyA9IFBsYXRmb3JtSW5mby5icm93c2VycygpO1xuICBjb25zdCBvc2VzID0gUGxhdGZvcm1JbmZvLm9zZXMoKTtcblxuICBjb25zdCBicm93c2VyID0gdXNlckFnZW50RGF0YU9wdC5iaW5kKCh1c2VyQWdlbnREYXRhKSA9PiBVYURhdGEuZGV0ZWN0QnJvd3Nlcihicm93c2VycywgdXNlckFnZW50RGF0YSkpXG4gICAgLm9yVGh1bmsoKCkgPT4gVWFTdHJpbmcuZGV0ZWN0QnJvd3Nlcihicm93c2VycywgdXNlckFnZW50KSlcbiAgICAuZm9sZChCcm93c2VyLnVua25vd24sIEJyb3dzZXIubnUpO1xuXG4gIGNvbnN0IG9zID0gVWFTdHJpbmcuZGV0ZWN0T3Mob3NlcywgdXNlckFnZW50KS5mb2xkKFxuICAgIE9wZXJhdGluZ1N5c3RlbS51bmtub3duLFxuICAgIE9wZXJhdGluZ1N5c3RlbS5udVxuICApO1xuICBjb25zdCBkZXZpY2VUeXBlID0gRGV2aWNlVHlwZShvcywgYnJvd3NlciwgdXNlckFnZW50LCBtZWRpYU1hdGNoKTtcblxuICByZXR1cm4ge1xuICAgIGJyb3dzZXIsXG4gICAgb3MsXG4gICAgZGV2aWNlVHlwZVxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IFBsYXRmb3JtRGV0ZWN0aW9uID0ge1xuICBkZXRlY3Rcbn07XG4iLCJpbXBvcnQgeyBGdW4gfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5pbXBvcnQgdHlwZSB7IEJyb3dzZXIgfSBmcm9tICcuLi9jb3JlL0Jyb3dzZXInO1xuaW1wb3J0IHR5cGUgeyBPcGVyYXRpbmdTeXN0ZW0gfSBmcm9tICcuLi9jb3JlL09wZXJhdGluZ1N5c3RlbSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGV2aWNlVHlwZSB7XG4gIHJlYWRvbmx5IGlzaVBhZDogKCkgPT4gYm9vbGVhbjtcbiAgcmVhZG9ubHkgaXNpUGhvbmU6ICgpID0+IGJvb2xlYW47XG4gIHJlYWRvbmx5IGlzVGFibGV0OiAoKSA9PiBib29sZWFuO1xuICByZWFkb25seSBpc1Bob25lOiAoKSA9PiBib29sZWFuO1xuICByZWFkb25seSBpc1RvdWNoOiAoKSA9PiBib29sZWFuO1xuICByZWFkb25seSBpc0FuZHJvaWQ6ICgpID0+IGJvb2xlYW47XG4gIHJlYWRvbmx5IGlzaU9TOiAoKSA9PiBib29sZWFuO1xuICByZWFkb25seSBpc1dlYlZpZXc6ICgpID0+IGJvb2xlYW47XG4gIHJlYWRvbmx5IGlzRGVza3RvcDogKCkgPT4gYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IERldmljZVR5cGUgPSAob3M6IE9wZXJhdGluZ1N5c3RlbSwgYnJvd3NlcjogQnJvd3NlciwgdXNlckFnZW50OiBzdHJpbmcsIG1lZGlhTWF0Y2g6IChxdWVyeTogc3RyaW5nKSA9PiBib29sZWFuKTogRGV2aWNlVHlwZSA9PiB7XG4gIGNvbnN0IGlzaVBhZCA9IG9zLmlzaU9TKCkgJiYgL2lwYWQvaS50ZXN0KHVzZXJBZ2VudCkgPT09IHRydWU7XG4gIGNvbnN0IGlzaVBob25lID0gb3MuaXNpT1MoKSAmJiAhaXNpUGFkO1xuICBjb25zdCBpc01vYmlsZSA9IG9zLmlzaU9TKCkgfHwgb3MuaXNBbmRyb2lkKCk7XG4gIGNvbnN0IGlzVG91Y2ggPSBpc01vYmlsZSB8fCBtZWRpYU1hdGNoKCcocG9pbnRlcjpjb2Fyc2UpJyk7XG4gIGNvbnN0IGlzVGFibGV0ID0gaXNpUGFkIHx8ICFpc2lQaG9uZSAmJiBpc01vYmlsZSAmJiBtZWRpYU1hdGNoKCcobWluLWRldmljZS13aWR0aDo3NjhweCknKTtcbiAgY29uc3QgaXNQaG9uZSA9IGlzaVBob25lIHx8IGlzTW9iaWxlICYmICFpc1RhYmxldDtcblxuICBjb25zdCBpT1N3ZWJ2aWV3ID0gYnJvd3Nlci5pc1NhZmFyaSgpICYmIG9zLmlzaU9TKCkgJiYgL3NhZmFyaS9pLnRlc3QodXNlckFnZW50KSA9PT0gZmFsc2U7XG4gIGNvbnN0IGlzRGVza3RvcCA9ICFpc1Bob25lICYmICFpc1RhYmxldCAmJiAhaU9Td2VidmlldztcblxuICByZXR1cm4ge1xuICAgIGlzaVBhZDogRnVuLmNvbnN0YW50KGlzaVBhZCksXG4gICAgaXNpUGhvbmU6IEZ1bi5jb25zdGFudChpc2lQaG9uZSksXG4gICAgaXNUYWJsZXQ6IEZ1bi5jb25zdGFudChpc1RhYmxldCksXG4gICAgaXNQaG9uZTogRnVuLmNvbnN0YW50KGlzUGhvbmUpLFxuICAgIGlzVG91Y2g6IEZ1bi5jb25zdGFudChpc1RvdWNoKSxcbiAgICBpc0FuZHJvaWQ6IG9zLmlzQW5kcm9pZCxcbiAgICBpc2lPUzogb3MuaXNpT1MsXG4gICAgaXNXZWJWaWV3OiBGdW4uY29uc3RhbnQoaU9Td2VidmlldyksXG4gICAgaXNEZXNrdG9wOiBGdW4uY29uc3RhbnQoaXNEZXNrdG9wKVxuICB9O1xufTtcbiIsImltcG9ydCB7IEFyciwgdHlwZSBPcHRpb25hbCB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmltcG9ydCB0eXBlIHsgUGxhdGZvcm1JbmZvIH0gZnJvbSAnLi4vaW5mby9QbGF0Zm9ybUluZm8nO1xuaW1wb3J0IHR5cGUgeyBVYUluZm8gfSBmcm9tICcuLi9pbmZvL1VhSW5mbyc7XG5cbmltcG9ydCB7IFZlcnNpb24gfSBmcm9tICcuL1ZlcnNpb24nO1xuXG4vLyBUaGVyZSBhcmUgbm8gbmF0aXZlIHR5cGVzY3JpcHQgdHlwZXMgZm9yIG5hdmlnYXRvci5Vc2VyQWdlbnREYXRhIGF0IHRoaXMgc3RhZ2Ugc28gaGF2ZSB0byBtYW51YWxseSBkZWZpbmUgaXRcblxuZXhwb3J0IGludGVyZmFjZSBVc2VyQWdlbnREYXRhQnJhbmQge1xuICByZWFkb25seSBicmFuZDogc3RyaW5nO1xuICByZWFkb25seSB2ZXJzaW9uOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlckFnZW50RGF0YSB7XG4gIHJlYWRvbmx5IGJyYW5kczogVXNlckFnZW50RGF0YUJyYW5kW107XG4gIHJlYWRvbmx5IG1vYmlsZTogYm9vbGVhbjtcbn1cblxuY29uc3QgZGV0ZWN0QnJvd3NlciA9IChicm93c2VyczogUGxhdGZvcm1JbmZvW10sIHVzZXJBZ2VudERhdGE6IFVzZXJBZ2VudERhdGEpOiBPcHRpb25hbDxVYUluZm8+ID0+IHtcbiAgcmV0dXJuIEFyci5maW5kTWFwPFVzZXJBZ2VudERhdGFCcmFuZCwgVWFJbmZvPih1c2VyQWdlbnREYXRhLmJyYW5kcywgKHVhQnJhbmQpID0+IHtcbiAgICBjb25zdCBsY0JyYW5kID0gdWFCcmFuZC5icmFuZC50b0xvd2VyQ2FzZSgpO1xuICAgIHJldHVybiBBcnIuZmluZChicm93c2VycywgKGJyb3dzZXIpID0+IGxjQnJhbmQgPT09IGJyb3dzZXIuYnJhbmQ/LnRvTG93ZXJDYXNlKCkpXG4gICAgICAubWFwKChpbmZvKSA9PiAoe1xuICAgICAgICBjdXJyZW50OiBpbmZvLm5hbWUsXG4gICAgICAgIHZlcnNpb246IFZlcnNpb24ubnUocGFyc2VJbnQodWFCcmFuZC52ZXJzaW9uLCAxMCksIDApXG4gICAgICB9KSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHtcbiAgZGV0ZWN0QnJvd3NlclxufTtcbiIsImltcG9ydCB7IEFyciwgdHlwZSBPcHRpb25hbCB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmltcG9ydCB0eXBlIHsgUGxhdGZvcm1JbmZvIH0gZnJvbSAnLi4vaW5mby9QbGF0Zm9ybUluZm8nO1xuaW1wb3J0IHR5cGUgeyBVYUluZm8gfSBmcm9tICcuLi9pbmZvL1VhSW5mbyc7XG5cbmltcG9ydCB7IFZlcnNpb24gfSBmcm9tICcuL1ZlcnNpb24nO1xuXG5jb25zdCBkZXRlY3QgPSAoY2FuZGlkYXRlczogUGxhdGZvcm1JbmZvW10sIHVzZXJBZ2VudDogYW55KTogT3B0aW9uYWw8UGxhdGZvcm1JbmZvPiA9PiB7XG4gIGNvbnN0IGFnZW50ID0gU3RyaW5nKHVzZXJBZ2VudCkudG9Mb3dlckNhc2UoKTtcbiAgcmV0dXJuIEFyci5maW5kKGNhbmRpZGF0ZXMsIChjYW5kaWRhdGUpID0+IHtcbiAgICByZXR1cm4gY2FuZGlkYXRlLnNlYXJjaChhZ2VudCk7XG4gIH0pO1xufTtcblxuLy8gVGhleSAoYnJvd3NlciBhbmQgb3MpIGFyZSB0aGUgc2FtZSBhdCB0aGUgbW9tZW50LCBidXQgdGhleSBtaWdodFxuLy8gbm90IHN0YXkgdGhhdCB3YXkuXG5jb25zdCBkZXRlY3RCcm93c2VyID0gKGJyb3dzZXJzOiBQbGF0Zm9ybUluZm9bXSwgdXNlckFnZW50OiBhbnkpOiBPcHRpb25hbDxVYUluZm8+ID0+IHtcbiAgcmV0dXJuIGRldGVjdChicm93c2VycywgdXNlckFnZW50KS5tYXAoKGJyb3dzZXIpOiBVYUluZm8gPT4ge1xuICAgIGNvbnN0IHZlcnNpb24gPSBWZXJzaW9uLmRldGVjdChicm93c2VyLnZlcnNpb25SZWdleGVzLCB1c2VyQWdlbnQpO1xuICAgIHJldHVybiB7XG4gICAgICBjdXJyZW50OiBicm93c2VyLm5hbWUsXG4gICAgICB2ZXJzaW9uXG4gICAgfTtcbiAgfSk7XG59O1xuXG5jb25zdCBkZXRlY3RPcyA9IChvc2VzOiBQbGF0Zm9ybUluZm9bXSwgdXNlckFnZW50OiBhbnkpOiBPcHRpb25hbDxVYUluZm8+ID0+IHtcbiAgcmV0dXJuIGRldGVjdChvc2VzLCB1c2VyQWdlbnQpLm1hcCgob3MpOiBVYUluZm8gPT4ge1xuICAgIGNvbnN0IHZlcnNpb24gPSBWZXJzaW9uLmRldGVjdChvcy52ZXJzaW9uUmVnZXhlcywgdXNlckFnZW50KTtcbiAgICByZXR1cm4ge1xuICAgICAgY3VycmVudDogb3MubmFtZSxcbiAgICAgIHZlcnNpb25cbiAgICB9O1xuICB9KTtcbn07XG5cbmV4cG9ydCB7XG4gIGRldGVjdEJyb3dzZXIsXG4gIGRldGVjdE9zXG59O1xuIiwiZXhwb3J0IGludGVyZmFjZSBWZXJzaW9uIHtcbiAgcmVhZG9ubHkgbWFqb3I6IG51bWJlcjtcbiAgcmVhZG9ubHkgbWlub3I6IG51bWJlcjtcbn1cblxuY29uc3QgZmlyc3RNYXRjaCA9IChyZWdleGVzOiBSZWdFeHBbXSwgczogc3RyaW5nKTogUmVnRXhwIHwgdW5kZWZpbmVkID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByZWdleGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHJlZ2V4ZXNbaV07XG4gICAgaWYgKHgudGVzdChzKSkge1xuICAgICAgcmV0dXJuIHg7XG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59O1xuXG5jb25zdCBmaW5kID0gKHJlZ2V4ZXM6IFJlZ0V4cFtdLCBhZ2VudDogc3RyaW5nKTogVmVyc2lvbiA9PiB7XG4gIGNvbnN0IHIgPSBmaXJzdE1hdGNoKHJlZ2V4ZXMsIGFnZW50KTtcbiAgaWYgKCFyKSB7XG4gICAgcmV0dXJuIHsgbWFqb3I6IDAsIG1pbm9yOiAwIH07XG4gIH1cbiAgY29uc3QgZ3JvdXAgPSAoaTogbnVtYmVyKSA9PiB7XG4gICAgcmV0dXJuIE51bWJlcihhZ2VudC5yZXBsYWNlKHIsICckJyArIGkpKTtcbiAgfTtcbiAgcmV0dXJuIG51KGdyb3VwKDEpLCBncm91cCgyKSk7XG59O1xuXG5jb25zdCBkZXRlY3QgPSAodmVyc2lvblJlZ2V4ZXM6IFJlZ0V4cFtdLCBhZ2VudDogYW55KTogVmVyc2lvbiA9PiB7XG4gIGNvbnN0IGNsZWFuZWRBZ2VudCA9IFN0cmluZyhhZ2VudCkudG9Mb3dlckNhc2UoKTtcblxuICBpZiAodmVyc2lvblJlZ2V4ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHVua25vd24oKTtcbiAgfVxuICByZXR1cm4gZmluZCh2ZXJzaW9uUmVnZXhlcywgY2xlYW5lZEFnZW50KTtcbn07XG5cbmNvbnN0IHVua25vd24gPSAoKTogVmVyc2lvbiA9PiB7XG4gIHJldHVybiBudSgwLCAwKTtcbn07XG5cbmNvbnN0IG51ID0gKG1ham9yOiBudW1iZXIsIG1pbm9yOiBudW1iZXIpOiBWZXJzaW9uID0+IHtcbiAgcmV0dXJuIHsgbWFqb3IsIG1pbm9yIH07XG59O1xuXG5leHBvcnQgY29uc3QgVmVyc2lvbiA9IHtcbiAgbnUsXG4gIGRldGVjdCxcbiAgdW5rbm93blxufTtcbiIsImltcG9ydCB7IEZ1biwgU3RyaW5ncyB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGxhdGZvcm1JbmZvIHtcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICByZWFkb25seSB2ZXJzaW9uUmVnZXhlczogUmVnRXhwW107XG4gIHJlYWRvbmx5IHNlYXJjaDogKHVhc3RyaW5nOiBzdHJpbmcpID0+IGJvb2xlYW47XG4gIHJlYWRvbmx5IGJyYW5kPzogc3RyaW5nO1xufVxuXG5jb25zdCBub3JtYWxWZXJzaW9uUmVnZXggPSAvLio/dmVyc2lvblxcL1xcID8oWzAtOV0rKVxcLihbMC05XSspLiovO1xuXG5jb25zdCBjaGVja0NvbnRhaW5zID0gKHRhcmdldDogc3RyaW5nKSA9PiB7XG4gIHJldHVybiAodWFzdHJpbmc6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiBTdHJpbmdzLmNvbnRhaW5zKHVhc3RyaW5nLCB0YXJnZXQpO1xuICB9O1xufTtcblxuY29uc3QgYnJvd3NlcnM6IFBsYXRmb3JtSW5mb1tdID0gW1xuICAvLyBUaGlzIGlzIGxlZ2FjeSBFZGdlXG4gIHtcbiAgICBuYW1lOiAnRWRnZScsXG4gICAgdmVyc2lvblJlZ2V4ZXM6IFsgLy4qP2VkZ2VcXC8gPyhbMC05XSspXFwuKFswLTldKykkLyBdLFxuICAgIHNlYXJjaDogKHVhc3RyaW5nKSA9PiB7XG4gICAgICByZXR1cm4gU3RyaW5ncy5jb250YWlucyh1YXN0cmluZywgJ2VkZ2UvJykgJiYgU3RyaW5ncy5jb250YWlucyh1YXN0cmluZywgJ2Nocm9tZScpICYmIFN0cmluZ3MuY29udGFpbnModWFzdHJpbmcsICdzYWZhcmknKSAmJiBTdHJpbmdzLmNvbnRhaW5zKHVhc3RyaW5nLCAnYXBwbGV3ZWJraXQnKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRoaXMgaXMgR29vZ2xlIENocm9tZSBhbmQgQ2hyb21pdW0gRWRnZVxuICB7XG4gICAgbmFtZTogJ0Nocm9taXVtJyxcbiAgICBicmFuZDogJ0Nocm9taXVtJyxcbiAgICB2ZXJzaW9uUmVnZXhlczogWyAvLio/Y2hyb21lXFwvKFswLTldKylcXC4oWzAtOV0rKS4qLywgbm9ybWFsVmVyc2lvblJlZ2V4IF0sXG4gICAgc2VhcmNoOiAodWFzdHJpbmcpID0+IHtcbiAgICAgIHJldHVybiBTdHJpbmdzLmNvbnRhaW5zKHVhc3RyaW5nLCAnY2hyb21lJykgJiYgIVN0cmluZ3MuY29udGFpbnModWFzdHJpbmcsICdjaHJvbWVmcmFtZScpO1xuICAgIH1cbiAgfSxcbiAge1xuICAgIG5hbWU6ICdJRScsXG4gICAgdmVyc2lvblJlZ2V4ZXM6IFsgLy4qP21zaWVcXCA/KFswLTldKylcXC4oWzAtOV0rKS4qLywgLy4qP3J2OihbMC05XSspXFwuKFswLTldKykuKi8gXSxcbiAgICBzZWFyY2g6ICh1YXN0cmluZykgPT4ge1xuICAgICAgcmV0dXJuIFN0cmluZ3MuY29udGFpbnModWFzdHJpbmcsICdtc2llJykgfHwgU3RyaW5ncy5jb250YWlucyh1YXN0cmluZywgJ3RyaWRlbnQnKTtcbiAgICB9XG4gIH0sXG4gIC8vIElOVkVTVElHQVRFOiBJcyB0aGlzIHN0aWxsIHRoZSBPcGVyYSB1c2VyIGFnZW50P1xuICB7XG4gICAgbmFtZTogJ09wZXJhJyxcbiAgICB2ZXJzaW9uUmVnZXhlczogWyBub3JtYWxWZXJzaW9uUmVnZXgsIC8uKj9vcGVyYVxcLyhbMC05XSspXFwuKFswLTldKykuKi8gXSxcbiAgICBzZWFyY2g6IGNoZWNrQ29udGFpbnMoJ29wZXJhJylcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdGaXJlZm94JyxcbiAgICB2ZXJzaW9uUmVnZXhlczogWyAvLio/ZmlyZWZveFxcL1xcID8oWzAtOV0rKVxcLihbMC05XSspLiovIF0sXG4gICAgc2VhcmNoOiBjaGVja0NvbnRhaW5zKCdmaXJlZm94JylcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdTYWZhcmknLFxuICAgIHZlcnNpb25SZWdleGVzOiBbIG5vcm1hbFZlcnNpb25SZWdleCwgLy4qP2NwdSBvcyAoWzAtOV0rKV8oWzAtOV0rKS4qLyBdLFxuICAgIHNlYXJjaDogKHVhc3RyaW5nKSA9PiB7XG4gICAgICByZXR1cm4gKFN0cmluZ3MuY29udGFpbnModWFzdHJpbmcsICdzYWZhcmknKSB8fCBTdHJpbmdzLmNvbnRhaW5zKHVhc3RyaW5nLCAnbW9iaWxlLycpKSAmJiBTdHJpbmdzLmNvbnRhaW5zKHVhc3RyaW5nLCAnYXBwbGV3ZWJraXQnKTtcbiAgICB9XG4gIH1cbl07XG5cbmNvbnN0IG9zZXM6IFBsYXRmb3JtSW5mb1tdID0gW1xuICB7XG4gICAgbmFtZTogJ1dpbmRvd3MnLFxuICAgIHNlYXJjaDogY2hlY2tDb250YWlucygnd2luJyksXG4gICAgdmVyc2lvblJlZ2V4ZXM6IFsgLy4qP3dpbmRvd3NcXCBudFxcID8oWzAtOV0rKVxcLihbMC05XSspLiovIF1cbiAgfSxcbiAge1xuICAgIG5hbWU6ICdpT1MnLFxuICAgIHNlYXJjaDogKHVhc3RyaW5nKSA9PiB7XG4gICAgICByZXR1cm4gU3RyaW5ncy5jb250YWlucyh1YXN0cmluZywgJ2lwaG9uZScpIHx8IFN0cmluZ3MuY29udGFpbnModWFzdHJpbmcsICdpcGFkJyk7XG4gICAgfSxcbiAgICB2ZXJzaW9uUmVnZXhlczogWyAvLio/dmVyc2lvblxcL1xcID8oWzAtOV0rKVxcLihbMC05XSspLiovLCAvLipjcHUgb3MgKFswLTldKylfKFswLTldKykuKi8sIC8uKmNwdSBpcGhvbmUgb3MgKFswLTldKylfKFswLTldKykuKi8gXVxuICB9LFxuICB7XG4gICAgbmFtZTogJ0FuZHJvaWQnLFxuICAgIHNlYXJjaDogY2hlY2tDb250YWlucygnYW5kcm9pZCcpLFxuICAgIHZlcnNpb25SZWdleGVzOiBbIC8uKj9hbmRyb2lkXFwgPyhbMC05XSspXFwuKFswLTldKykuKi8gXVxuICB9LFxuICB7XG4gICAgbmFtZTogJ21hY09TJyxcbiAgICBzZWFyY2g6IGNoZWNrQ29udGFpbnMoJ21hYyBvcyB4JyksXG4gICAgdmVyc2lvblJlZ2V4ZXM6IFsgLy4qP21hY1xcIG9zXFwgeFxcID8oWzAtOV0rKV8oWzAtOV0rKS4qLyBdXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnTGludXgnLFxuICAgIHNlYXJjaDogY2hlY2tDb250YWlucygnbGludXgnKSxcbiAgICB2ZXJzaW9uUmVnZXhlczogWyBdXG4gIH0sXG4gIHsgbmFtZTogJ1NvbGFyaXMnLFxuICAgIHNlYXJjaDogY2hlY2tDb250YWlucygnc3Vub3MnKSxcbiAgICB2ZXJzaW9uUmVnZXhlczogWyBdXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnRnJlZUJTRCcsXG4gICAgc2VhcmNoOiBjaGVja0NvbnRhaW5zKCdmcmVlYnNkJyksXG4gICAgdmVyc2lvblJlZ2V4ZXM6IFsgXVxuICB9LFxuICB7XG4gICAgbmFtZTogJ0Nocm9tZU9TJyxcbiAgICBzZWFyY2g6IGNoZWNrQ29udGFpbnMoJ2Nyb3MnKSxcbiAgICB2ZXJzaW9uUmVnZXhlczogWyAvLio/Y2hyb21lXFwvKFswLTldKylcXC4oWzAtOV0rKS4qLyBdXG4gIH1cbl07XG5cbmV4cG9ydCBjb25zdCBQbGF0Zm9ybUluZm8gPSB7XG4gIGJyb3dzZXJzOiBGdW4uY29uc3RhbnQoYnJvd3NlcnMpLFxuICBvc2VzOiBGdW4uY29uc3RhbnQob3Nlcylcbn07XG4iLCJpbXBvcnQgeyBSZXNvbHZlIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuY29uc3QgdW5zYWZlID0gPFQ+KG5hbWU6IHN0cmluZywgc2NvcGU/OiB7fSk6IFQgfCB1bmRlZmluZWQgPT4ge1xuICByZXR1cm4gUmVzb2x2ZS5yZXNvbHZlKG5hbWUsIHNjb3BlKTtcbn07XG5cbmNvbnN0IGdldE9yRGllID0gPFQ+KG5hbWU6IHN0cmluZywgc2NvcGU/OiB7fSk6IFQgPT4ge1xuICBjb25zdCBhY3R1YWwgPSB1bnNhZmU8VD4obmFtZSwgc2NvcGUpO1xuXG4gIGlmIChhY3R1YWwgPT09IHVuZGVmaW5lZCB8fCBhY3R1YWwgPT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IobmFtZSArICcgbm90IGF2YWlsYWJsZSBvbiB0aGlzIGJyb3dzZXInKTtcbiAgfVxuICByZXR1cm4gYWN0dWFsO1xufTtcblxuZXhwb3J0IHtcbiAgZ2V0T3JEaWVcbn07XG4iLCJpbXBvcnQgdHlwZSB7IE9wdGlvbmFsIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuLyoqXG4gKiBBcHBsaWVzIGYgcmVwZWF0ZWRseSB1bnRpbCBpdCBjb21wbGV0ZXMgKGJ5IHJldHVybmluZyBPcHRpb25hbC5ub25lKCkpLlxuICpcbiAqIE5vcm1hbGx5IHdvdWxkIGp1c3QgdXNlIHJlY3Vyc2lvbiwgYnV0IEphdmFTY3JpcHQgbGFja3MgdGFpbCBjYWxsIG9wdGltaXNhdGlvbi5cbiAqXG4gKiBUaGlzIGlzIHdoYXQgcmVjdXJzaW9uIGxvb2tzIGxpa2Ugd2hlbiBtYW51YWxseSB1bnJhdmVsbGVkIDopXG4gKi9cbmNvbnN0IHRvQXJyYXkgPSA8VCA9IGFueSwgVSBleHRlbmRzIFQgPSBUPiAodGFyZ2V0OiBULCBmOiAodDogVCkgPT4gT3B0aW9uYWw8VT4pOiBVW10gPT4ge1xuICBjb25zdCByOiBVW10gPSBbXTtcblxuICBjb25zdCByZWN1cnNlID0gKGU6IFUpID0+IHtcbiAgICByLnB1c2goZSk7XG4gICAgcmV0dXJuIGYoZSk7XG4gIH07XG5cbiAgbGV0IGN1ciA9IGYodGFyZ2V0KTtcbiAgZG8ge1xuICAgIGN1ciA9IGN1ci5iaW5kKHJlY3Vyc2UpO1xuICB9IHdoaWxlIChjdXIuaXNTb21lKCkpO1xuXG4gIHJldHVybiByO1xufTtcblxuZXhwb3J0IHtcbiAgdG9BcnJheVxufTtcbiIsImltcG9ydCB7IEFyciwgRnVuIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0IHR5cGUgeyBTdWdhckVsZW1lbnQgfSBmcm9tICcuLi9ub2RlL1N1Z2FyRWxlbWVudCc7XG5pbXBvcnQgKiBhcyBTZWxlY3RvcnMgZnJvbSAnLi4vc2VhcmNoL1NlbGVjdG9ycyc7XG5cbmNvbnN0IGVxID0gKGUxOiBTdWdhckVsZW1lbnQ8dW5rbm93bj4sIGUyOiBTdWdhckVsZW1lbnQ8dW5rbm93bj4pOiBib29sZWFuID0+XG4gIGUxLmRvbSA9PT0gZTIuZG9tO1xuXG5jb25zdCBpc0VxdWFsTm9kZSA9IChlMTogU3VnYXJFbGVtZW50PE5vZGU+LCBlMjogU3VnYXJFbGVtZW50PE5vZGU+KTogYm9vbGVhbiA9PlxuICBlMS5kb20uaXNFcXVhbE5vZGUoZTIuZG9tKTtcblxuY29uc3QgbWVtYmVyID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDx1bmtub3duPiwgZWxlbWVudHM6IFN1Z2FyRWxlbWVudDx1bmtub3duPltdKTogYm9vbGVhbiA9PlxuICBBcnIuZXhpc3RzKGVsZW1lbnRzLCBGdW4uY3VycnkoZXEsIGVsZW1lbnQpKTtcblxuLy8gUmV0dXJuczogdHJ1ZSBpZiBub2RlIGUxIGNvbnRhaW5zIGUyLCBvdGhlcndpc2UgZmFsc2UuXG4vLyAocmV0dXJucyBmYWxzZSBpZiBlMT09PWUyOiBBIG5vZGUgZG9lcyBub3QgY29udGFpbiBpdHNlbGYpLlxuY29uc3QgY29udGFpbnMgPSAoZTE6IFN1Z2FyRWxlbWVudDxOb2RlPiwgZTI6IFN1Z2FyRWxlbWVudDxOb2RlPik6IGJvb2xlYW4gPT4ge1xuICBjb25zdCBkMSA9IGUxLmRvbTtcbiAgY29uc3QgZDIgPSBlMi5kb207XG4gIHJldHVybiBkMSA9PT0gZDIgPyBmYWxzZSA6IGQxLmNvbnRhaW5zKGQyKTtcbn07XG5cbmNvbnN0IGlzID0gU2VsZWN0b3JzLmlzO1xuXG5leHBvcnQge1xuICBlcSxcbiAgaXNFcXVhbE5vZGUsXG4gIG1lbWJlcixcbiAgY29udGFpbnMsXG4gIC8vIE9ubHkgdXNlZCBieSBEb21Vbml2ZXJzZS4gUmVtb3ZlIChvciBzaG91bGQgU2VsZWN0b3JzLmlzIG1vdmUgaGVyZT8pXG4gIGlzXG59O1xuIiwiaW1wb3J0IHR5cGUgeyBTdWdhckVsZW1lbnQgfSBmcm9tICcuLi9ub2RlL1N1Z2FyRWxlbWVudCc7XG5pbXBvcnQgKiBhcyBUcmF2ZXJzZSBmcm9tICcuLi9zZWFyY2gvVHJhdmVyc2UnO1xuXG5jb25zdCBiZWZvcmUgPSAobWFya2VyOiBTdWdhckVsZW1lbnQ8Tm9kZT4sIGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPik6IHZvaWQgPT4ge1xuICBjb25zdCBwYXJlbnQgPSBUcmF2ZXJzZS5wYXJlbnQobWFya2VyKTtcbiAgcGFyZW50LmVhY2goKHYpID0+IHtcbiAgICB2LmRvbS5pbnNlcnRCZWZvcmUoZWxlbWVudC5kb20sIG1hcmtlci5kb20pO1xuICB9KTtcbn07XG5cbmNvbnN0IGFmdGVyID0gKG1hcmtlcjogU3VnYXJFbGVtZW50PE5vZGU+LCBlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiB2b2lkID0+IHtcbiAgY29uc3Qgc2libGluZyA9IFRyYXZlcnNlLm5leHRTaWJsaW5nKG1hcmtlcik7XG4gIHNpYmxpbmcuZm9sZCgoKSA9PiB7XG4gICAgY29uc3QgcGFyZW50ID0gVHJhdmVyc2UucGFyZW50KG1hcmtlcik7XG4gICAgcGFyZW50LmVhY2goKHYpID0+IHtcbiAgICAgIGFwcGVuZCh2LCBlbGVtZW50KTtcbiAgICB9KTtcbiAgfSwgKHYpID0+IHtcbiAgICBiZWZvcmUodiwgZWxlbWVudCk7XG4gIH0pO1xufTtcblxuY29uc3QgcHJlcGVuZCA9IChwYXJlbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPiwgZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KTogdm9pZCA9PiB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSBUcmF2ZXJzZS5maXJzdENoaWxkKHBhcmVudCk7XG4gIGZpcnN0Q2hpbGQuZm9sZCgoKSA9PiB7XG4gICAgYXBwZW5kKHBhcmVudCwgZWxlbWVudCk7XG4gIH0sICh2KSA9PiB7XG4gICAgcGFyZW50LmRvbS5pbnNlcnRCZWZvcmUoZWxlbWVudC5kb20sIHYuZG9tKTtcbiAgfSk7XG59O1xuXG5jb25zdCBhcHBlbmQgPSAocGFyZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4sIGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPik6IHZvaWQgPT4ge1xuICBwYXJlbnQuZG9tLmFwcGVuZENoaWxkKGVsZW1lbnQuZG9tKTtcbn07XG5cbmNvbnN0IGFwcGVuZEF0ID0gKHBhcmVudDogU3VnYXJFbGVtZW50PE5vZGU+LCBlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4sIGluZGV4OiBudW1iZXIpOiB2b2lkID0+IHtcbiAgVHJhdmVyc2UuY2hpbGQocGFyZW50LCBpbmRleCkuZm9sZCgoKSA9PiB7XG4gICAgYXBwZW5kKHBhcmVudCwgZWxlbWVudCk7XG4gIH0sICh2KSA9PiB7XG4gICAgYmVmb3JlKHYsIGVsZW1lbnQpO1xuICB9KTtcbn07XG5cbmNvbnN0IHdyYXAgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+LCB3cmFwcGVyOiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiB2b2lkID0+IHtcbiAgYmVmb3JlKGVsZW1lbnQsIHdyYXBwZXIpO1xuICBhcHBlbmQod3JhcHBlciwgZWxlbWVudCk7XG59O1xuXG5leHBvcnQge1xuICBiZWZvcmUsXG4gIGFmdGVyLFxuICBwcmVwZW5kLFxuICBhcHBlbmQsXG4gIGFwcGVuZEF0LFxuICB3cmFwXG59O1xuIiwiaW1wb3J0IHsgQXJyIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0IHR5cGUgeyBTdWdhckVsZW1lbnQgfSBmcm9tICcuLi9ub2RlL1N1Z2FyRWxlbWVudCc7XG5cbmltcG9ydCAqIGFzIEluc2VydCBmcm9tICcuL0luc2VydCc7XG5cbmNvbnN0IGJlZm9yZSA9IChtYXJrZXI6IFN1Z2FyRWxlbWVudDxOb2RlPiwgZWxlbWVudHM6IFN1Z2FyRWxlbWVudDxOb2RlPltdKTogdm9pZCA9PiB7XG4gIEFyci5lYWNoKGVsZW1lbnRzLCAoeCkgPT4ge1xuICAgIEluc2VydC5iZWZvcmUobWFya2VyLCB4KTtcbiAgfSk7XG59O1xuXG5jb25zdCBhZnRlciA9IChtYXJrZXI6IFN1Z2FyRWxlbWVudDxOb2RlPiwgZWxlbWVudHM6IFN1Z2FyRWxlbWVudDxOb2RlPltdKTogdm9pZCA9PiB7XG4gIEFyci5lYWNoKGVsZW1lbnRzLCAoeCwgaSkgPT4ge1xuICAgIGNvbnN0IGUgPSBpID09PSAwID8gbWFya2VyIDogZWxlbWVudHNbaSAtIDFdO1xuICAgIEluc2VydC5hZnRlcihlLCB4KTtcbiAgfSk7XG59O1xuXG5jb25zdCBwcmVwZW5kID0gKHBhcmVudDogU3VnYXJFbGVtZW50PE5vZGU+LCBlbGVtZW50czogU3VnYXJFbGVtZW50PE5vZGU+W10pOiB2b2lkID0+IHtcbiAgQXJyLmVhY2goZWxlbWVudHMuc2xpY2UoKS5yZXZlcnNlKCksICh4KSA9PiB7XG4gICAgSW5zZXJ0LnByZXBlbmQocGFyZW50LCB4KTtcbiAgfSk7XG59O1xuXG5jb25zdCBhcHBlbmQgPSAocGFyZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4sIGVsZW1lbnRzOiBTdWdhckVsZW1lbnQ8Tm9kZT5bXSk6IHZvaWQgPT4ge1xuICBBcnIuZWFjaChlbGVtZW50cywgKHgpID0+IHtcbiAgICBJbnNlcnQuYXBwZW5kKHBhcmVudCwgeCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHtcbiAgYmVmb3JlLFxuICBhZnRlcixcbiAgcHJlcGVuZCxcbiAgYXBwZW5kXG59O1xuIiwiaW1wb3J0IHsgQXJyIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0IHR5cGUgeyBTdWdhckVsZW1lbnQgfSBmcm9tICcuLi9ub2RlL1N1Z2FyRWxlbWVudCc7XG5pbXBvcnQgKiBhcyBUcmF2ZXJzZSBmcm9tICcuLi9zZWFyY2gvVHJhdmVyc2UnO1xuXG5pbXBvcnQgKiBhcyBJbnNlcnRBbGwgZnJvbSAnLi9JbnNlcnRBbGwnO1xuXG5jb25zdCBlbXB0eSA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiB2b2lkID0+IHtcbiAgLy8gc2hvcnRjdXQgXCJlbXB0eSBub2RlXCIgdHJpY2suIFJlcXVpcmVzIElFIDkuXG4gIGVsZW1lbnQuZG9tLnRleHRDb250ZW50ID0gJyc7XG5cbiAgLy8gSWYgdGhlIGNvbnRlbnRzIHdhcyBhIHNpbmdsZSBlbXB0eSB0ZXh0IG5vZGUsIHRoZSBhYm92ZSBkb2Vzbid0IHJlbW92ZSBpdC4gQnV0LCBpdCdzIHN0aWxsIGZhc3RlciBpbiBnZW5lcmFsXG4gIC8vIHRoYW4gcmVtb3ZpbmcgZXZlcnkgY2hpbGQgbm9kZSBtYW51YWxseS5cbiAgLy8gVGhlIGZvbGxvd2luZyBpcyAocHJvYmFibHkpIHNhZmUgZm9yIHBlcmZvcm1hbmNlIGFzIDk5LjklIG9mIHRoZSB0aW1lIHRoZSB0cmljayB3b3JrcyBhbmRcbiAgLy8gVHJhdmVyc2UuY2hpbGRyZW4gd2lsbCByZXR1cm4gYW4gZW1wdHkgYXJyYXkuXG4gIEFyci5lYWNoKFRyYXZlcnNlLmNoaWxkcmVuKGVsZW1lbnQpLCAocm9ndWUpID0+IHtcbiAgICByZW1vdmUocm9ndWUpO1xuICB9KTtcbn07XG5cbmNvbnN0IHJlbW92ZSA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiB2b2lkID0+IHtcbiAgY29uc3QgZG9tID0gZWxlbWVudC5kb207XG4gIGlmIChkb20ucGFyZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIGRvbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRvbSk7XG4gIH1cbn07XG5cbmNvbnN0IHVud3JhcCA9ICh3cmFwcGVyOiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiB2b2lkID0+IHtcbiAgY29uc3QgY2hpbGRyZW4gPSBUcmF2ZXJzZS5jaGlsZHJlbih3cmFwcGVyKTtcbiAgaWYgKGNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICBJbnNlcnRBbGwuYWZ0ZXIod3JhcHBlciwgY2hpbGRyZW4pO1xuICB9XG4gIHJlbW92ZSh3cmFwcGVyKTtcbn07XG5cbmV4cG9ydCB7XG4gIGVtcHR5LFxuICByZW1vdmUsXG4gIHVud3JhcFxufTtcbiIsImltcG9ydCB7IEZ1biB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmltcG9ydCAqIGFzIEZpbHRlcmVkRXZlbnQgZnJvbSAnLi4vLi4vaW1wbC9GaWx0ZXJlZEV2ZW50JztcbmltcG9ydCB0eXBlIHsgU3VnYXJFbGVtZW50IH0gZnJvbSAnLi4vbm9kZS9TdWdhckVsZW1lbnQnO1xuXG5pbXBvcnQgdHlwZSB7IEV2ZW50SGFuZGxlciwgRXZlbnRVbmJpbmRlciB9IGZyb20gJy4vVHlwZXMnO1xuXG5jb25zdCBmaWx0ZXIgPSBGdW4uYWx3YXlzOyAvLyBubyBmaWx0ZXIgb24gcGxhaW4gRG9tRXZlbnRzXG5cbmNvbnN0IGJpbmQ6IHtcbiAgPEsgZXh0ZW5kcyBrZXlvZiBIVE1MRWxlbWVudEV2ZW50TWFwLCBUIGV4dGVuZHMgTm9kZSB8IFdpbmRvdyA9IE5vZGU+IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8RXZlbnRUYXJnZXQ+LCBldmVudDogSywgaGFuZGxlcjogRXZlbnRIYW5kbGVyPEhUTUxFbGVtZW50RXZlbnRNYXBbS10sIFQ+KTogRXZlbnRVbmJpbmRlcjtcbiAgPEUgZXh0ZW5kcyBFdmVudCwgVCBleHRlbmRzIE5vZGUgfCBXaW5kb3cgPSBOb2RlPihlbGVtZW50OiBTdWdhckVsZW1lbnQ8RXZlbnRUYXJnZXQ+LCBldmVudDogc3RyaW5nLCBoYW5kbGVyOiBFdmVudEhhbmRsZXI8RSwgVD4pOiBFdmVudFVuYmluZGVyO1xufSA9IDxFIGV4dGVuZHMgRXZlbnQsIFQgZXh0ZW5kcyBOb2RlIHwgV2luZG93ID0gTm9kZT4oZWxlbWVudDogU3VnYXJFbGVtZW50PEV2ZW50VGFyZ2V0PiwgZXZlbnQ6IHN0cmluZywgaGFuZGxlcjogRXZlbnRIYW5kbGVyPEUsIFQ+KTogRXZlbnRVbmJpbmRlciA9PlxuICBGaWx0ZXJlZEV2ZW50LmJpbmQ8RSwgVD4oZWxlbWVudCwgZXZlbnQsIGZpbHRlciwgaGFuZGxlcik7XG5cbmNvbnN0IGNhcHR1cmU6IHtcbiAgPEsgZXh0ZW5kcyBrZXlvZiBIVE1MRWxlbWVudEV2ZW50TWFwLCBUIGV4dGVuZHMgTm9kZSB8IFdpbmRvdyA9IE5vZGU+IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8RXZlbnRUYXJnZXQ+LCBldmVudDogSywgaGFuZGxlcjogRXZlbnRIYW5kbGVyPEhUTUxFbGVtZW50RXZlbnRNYXBbS10sIFQ+KTogRXZlbnRVbmJpbmRlcjtcbiAgPEUgZXh0ZW5kcyBFdmVudCwgVCBleHRlbmRzIE5vZGUgfCBXaW5kb3cgPSBOb2RlPihlbGVtZW50OiBTdWdhckVsZW1lbnQ8RXZlbnRUYXJnZXQ+LCBldmVudDogc3RyaW5nLCBoYW5kbGVyOiBFdmVudEhhbmRsZXI8RSwgVD4pOiBFdmVudFVuYmluZGVyO1xufSA9IDxFIGV4dGVuZHMgRXZlbnQsIFQgZXh0ZW5kcyBOb2RlIHwgV2luZG93ID0gTm9kZT4oZWxlbWVudDogU3VnYXJFbGVtZW50PEV2ZW50VGFyZ2V0PiwgZXZlbnQ6IHN0cmluZywgaGFuZGxlcjogRXZlbnRIYW5kbGVyPEUsIFQ+KTogRXZlbnRVbmJpbmRlciA9PlxuICBGaWx0ZXJlZEV2ZW50LmNhcHR1cmU8RSwgVD4oZWxlbWVudCwgZXZlbnQsIGZpbHRlciwgaGFuZGxlcik7XG5cbmNvbnN0IGZyb21SYXdFdmVudCA9IEZpbHRlcmVkRXZlbnQuZnJvbVJhd0V2ZW50O1xuXG5leHBvcnQge1xuICBiaW5kLFxuICBjYXB0dXJlLFxuICBmcm9tUmF3RXZlbnRcbn07XG4iLCJjb25zdCBBVFRSSUJVVEUgPSAyO1xuY29uc3QgQ0RBVEFfU0VDVElPTiA9IDQ7XG5jb25zdCBDT01NRU5UID0gODtcbmNvbnN0IERPQ1VNRU5UID0gOTtcbmNvbnN0IERPQ1VNRU5UX1RZUEUgPSAxMDtcbmNvbnN0IERPQ1VNRU5UX0ZSQUdNRU5UID0gMTE7XG5jb25zdCBFTEVNRU5UID0gMTtcbmNvbnN0IFRFWFQgPSAzO1xuY29uc3QgUFJPQ0VTU0lOR19JTlNUUlVDVElPTiA9IDc7XG5jb25zdCBFTlRJVFlfUkVGRVJFTkNFID0gNTtcbmNvbnN0IEVOVElUWSA9IDY7XG5jb25zdCBOT1RBVElPTiA9IDEyO1xuXG5leHBvcnQge1xuICBBVFRSSUJVVEUsXG4gIENEQVRBX1NFQ1RJT04sXG4gIENPTU1FTlQsXG4gIERPQ1VNRU5ULFxuICBET0NVTUVOVF9UWVBFLFxuICBET0NVTUVOVF9GUkFHTUVOVCxcbiAgRUxFTUVOVCxcbiAgVEVYVCxcbiAgUFJPQ0VTU0lOR19JTlNUUlVDVElPTixcbiAgRU5USVRZX1JFRkVSRU5DRSxcbiAgRU5USVRZLFxuICBOT1RBVElPTlxufTtcbiIsImltcG9ydCB7IEZ1biB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmltcG9ydCB7IFN1Z2FyRWxlbWVudCB9IGZyb20gJy4vU3VnYXJFbGVtZW50JztcbmltcG9ydCAqIGFzIFN1Z2FyTm9kZSBmcm9tICcuL1N1Z2FyTm9kZSc7XG5pbXBvcnQgeyBnZXRTaGFkb3dIb3N0LCBnZXRTaGFkb3dSb290IH0gZnJvbSAnLi9TdWdhclNoYWRvd0RvbSc7XG5cbi8vIE5vZGUuY29udGFpbnMoKSBpcyB2ZXJ5LCB2ZXJ5LCB2ZXJ5IGdvb2QgcGVyZm9ybWFuY2Vcbi8vIGh0dHA6Ly9qc3BlcmYuY29tL2Nsb3Nlc3QtdnMtY29udGFpbnMvNVxuY29uc3QgaW5Cb2R5ID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPik6IGJvb2xlYW4gPT4ge1xuICAvLyBUZWNobmljYWxseSB0aGlzIGlzIG9ubHkgcmVxdWlyZWQgb24gSUUsIHdoZXJlIGNvbnRhaW5zKCkgcmV0dXJucyBmYWxzZSBmb3IgdGV4dCBub2Rlcy5cbiAgLy8gQnV0IGl0J3MgY2hlYXAgZW5vdWdoIHRvIHJ1biBldmVyeXdoZXJlIGFuZCBTdWdhciBkb2Vzbid0IGhhdmUgcGxhdGZvcm0gZGV0ZWN0aW9uICh5ZXQpLlxuICBjb25zdCBkb20gPSBTdWdhck5vZGUuaXNUZXh0KGVsZW1lbnQpID8gZWxlbWVudC5kb20ucGFyZW50Tm9kZSA6IGVsZW1lbnQuZG9tO1xuXG4gIC8vIHVzZSBvd25lckRvY3VtZW50LmJvZHkgdG8gZW5zdXJlIHRoaXMgd29ya3MgaW5zaWRlIGlmcmFtZXMuXG4gIC8vIE5vcm1hbGx5IGNvbnRhaW5zIGlzIGJhZCBiZWNhdXNlIGFuIGVsZW1lbnQgXCJjb250YWluc1wiIGl0c2VsZiwgYnV0IGhlcmUgd2Ugd2FudCB0aGF0LlxuICBpZiAoZG9tID09PSB1bmRlZmluZWQgfHwgZG9tID09PSBudWxsIHx8IGRvbS5vd25lckRvY3VtZW50ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgZG9jID0gZG9tLm93bmVyRG9jdW1lbnQ7XG4gIHJldHVybiBnZXRTaGFkb3dSb290KFN1Z2FyRWxlbWVudC5mcm9tRG9tKGRvbSkpLmZvbGQoXG4gICAgKCkgPT4gZG9jLmJvZHkuY29udGFpbnMoZG9tKSxcbiAgICBGdW4uY29tcG9zZTEoaW5Cb2R5LCBnZXRTaGFkb3dIb3N0KVxuICApO1xufTtcblxuY29uc3QgYm9keSA9ICgpOiBTdWdhckVsZW1lbnQ8SFRNTEVsZW1lbnQ+ID0+XG4gIGdldEJvZHkoU3VnYXJFbGVtZW50LmZyb21Eb20oZG9jdW1lbnQpKTtcblxuY29uc3QgZ2V0Qm9keSA9IChkb2M6IFN1Z2FyRWxlbWVudDxEb2N1bWVudD4pOiBTdWdhckVsZW1lbnQ8SFRNTEVsZW1lbnQ+ID0+IHtcbiAgY29uc3QgYiA9IGRvYy5kb20uYm9keTtcbiAgaWYgKGIgPT09IG51bGwgfHwgYiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdCb2R5IGlzIG5vdCBhdmFpbGFibGUgeWV0Jyk7XG4gIH1cbiAgcmV0dXJuIFN1Z2FyRWxlbWVudC5mcm9tRG9tKGIpO1xufTtcblxuZXhwb3J0IHtcbiAgYm9keSxcbiAgZ2V0Qm9keSxcbiAgaW5Cb2R5XG59O1xuIiwiaW1wb3J0IHsgT3B0aW9uYWwgfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5pbXBvcnQgdHlwZSB7IEhUTUxFbGVtZW50RnVsbFRhZ05hbWVNYXAgfSBmcm9tICcuLi8uLi9hbGllbi9Eb21UeXBlcyc7XG5cbmludGVyZmFjZSBTdWdhckVsZW1lbnQ8VCA9IGFueT4ge1xuICByZWFkb25seSBkb206IFQ7XG59XG5cbmNvbnN0IGZyb21IdG1sID0gPEUgZXh0ZW5kcyBOb2RlID0gTm9kZSAmIENoaWxkTm9kZT4gKGh0bWw6IHN0cmluZywgc2NvcGU/OiBEb2N1bWVudCB8IG51bGwpOiBTdWdhckVsZW1lbnQ8RT4gPT4ge1xuICBjb25zdCBkb2MgPSBzY29wZSB8fCBkb2N1bWVudDtcbiAgY29uc3QgZGl2ID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuaW5uZXJIVE1MID0gaHRtbDtcbiAgaWYgKCFkaXYuaGFzQ2hpbGROb2RlcygpIHx8IGRpdi5jaGlsZE5vZGVzLmxlbmd0aCA+IDEpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gJ0hUTUwgZG9lcyBub3QgaGF2ZSBhIHNpbmdsZSByb290IG5vZGUnO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5lcnJvcihtZXNzYWdlLCBodG1sKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIH1cbiAgcmV0dXJuIGZyb21Eb20oZGl2LmNoaWxkTm9kZXNbMF0gYXMgdW5rbm93biBhcyBFKTtcbn07XG5cbmNvbnN0IGZyb21UYWc6IHtcbiAgPEsgZXh0ZW5kcyBrZXlvZiBIVE1MRWxlbWVudEZ1bGxUYWdOYW1lTWFwPih0YWc6IEssIHNjb3BlPzogRG9jdW1lbnQgfCBudWxsKTogU3VnYXJFbGVtZW50PEhUTUxFbGVtZW50RnVsbFRhZ05hbWVNYXBbS10+O1xuICAodGFnOiBzdHJpbmcsIHNjb3BlPzogRG9jdW1lbnQgfCBudWxsKTogU3VnYXJFbGVtZW50PEhUTUxFbGVtZW50Pjtcbn0gPSAodGFnOiBzdHJpbmcsIHNjb3BlPzogRG9jdW1lbnQgfCBudWxsKTogU3VnYXJFbGVtZW50PEhUTUxFbGVtZW50PiA9PiB7XG4gIGNvbnN0IGRvYyA9IHNjb3BlIHx8IGRvY3VtZW50O1xuICBjb25zdCBub2RlID0gZG9jLmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgcmV0dXJuIGZyb21Eb20obm9kZSk7XG59O1xuXG5jb25zdCBmcm9tVGV4dCA9ICh0ZXh0OiBzdHJpbmcsIHNjb3BlPzogRG9jdW1lbnQgfCBudWxsKTogU3VnYXJFbGVtZW50PFRleHQ+ID0+IHtcbiAgY29uc3QgZG9jID0gc2NvcGUgfHwgZG9jdW1lbnQ7XG4gIGNvbnN0IG5vZGUgPSBkb2MuY3JlYXRlVGV4dE5vZGUodGV4dCk7XG4gIHJldHVybiBmcm9tRG9tKG5vZGUpO1xufTtcblxuY29uc3QgZnJvbURvbSA9IDxUIGV4dGVuZHMgTm9kZSB8IFdpbmRvdz4gKG5vZGU6IFQpOiBTdWdhckVsZW1lbnQ8VD4gPT4ge1xuICAvLyBUT0RPOiBDb25zaWRlciByZW1vdmluZyB0aGlzIGNoZWNrLCBidXQgbGVmdCBhdG0gZm9yIHNhZmV0eVxuICBpZiAobm9kZSA9PT0gbnVsbCB8fCBub2RlID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vZGUgY2Fubm90IGJlIG51bGwgb3IgdW5kZWZpbmVkJyk7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBkb206IG5vZGVcbiAgfTtcbn07XG5cbmNvbnN0IGZyb21Qb2ludCA9IChkb2NFbG06IFN1Z2FyRWxlbWVudDxEb2N1bWVudD4sIHg6IG51bWJlciwgeTogbnVtYmVyKTogT3B0aW9uYWw8U3VnYXJFbGVtZW50PEVsZW1lbnQ+PiA9PlxuICBPcHRpb25hbC5mcm9tKGRvY0VsbS5kb20uZWxlbWVudEZyb21Qb2ludCh4LCB5KSkubWFwKGZyb21Eb20pO1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxuY29uc3QgU3VnYXJFbGVtZW50ID0ge1xuICBmcm9tSHRtbCxcbiAgZnJvbVRhZyxcbiAgZnJvbVRleHQsXG4gIGZyb21Eb20sXG4gIGZyb21Qb2ludFxufTtcblxuZXhwb3J0IHtcbiAgU3VnYXJFbGVtZW50XG59O1xuIiwiaW1wb3J0IHsgU3VnYXJFbGVtZW50IH0gZnJvbSAnLi9TdWdhckVsZW1lbnQnO1xuXG5leHBvcnQgY29uc3QgaGVhZCA9ICgpOiBTdWdhckVsZW1lbnQ8SFRNTEhlYWRFbGVtZW50PiA9PiBnZXRIZWFkKFN1Z2FyRWxlbWVudC5mcm9tRG9tKGRvY3VtZW50KSk7XG5cbmV4cG9ydCBjb25zdCBnZXRIZWFkID0gKGRvYzogU3VnYXJFbGVtZW50PERvY3VtZW50Pik6IFN1Z2FyRWxlbWVudDxIVE1MSGVhZEVsZW1lbnQ+ID0+IHtcbiAgLypcbiAgICogSUU5IGFuZCBhYm92ZSBwZXJcbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RvY3VtZW50L2hlYWRcbiAgICovXG4gIGNvbnN0IGIgPSBkb2MuZG9tLmhlYWQ7XG4gIGlmIChiID09PSBudWxsIHx8IGIgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignSGVhZCBpcyBub3QgYXZhaWxhYmxlIHlldCcpO1xuICB9XG4gIHJldHVybiBTdWdhckVsZW1lbnQuZnJvbURvbShiKTtcbn07XG4iLCJpbXBvcnQgeyBTYW5kSFRNTEVsZW1lbnQgfSBmcm9tICdAZXBob3gvc2FuZCc7XG5cbmltcG9ydCB0eXBlIHsgSFRNTEVsZW1lbnRGdWxsVGFnTmFtZU1hcCB9IGZyb20gJy4uLy4uL2FsaWVuL0RvbVR5cGVzJztcblxuaW1wb3J0ICogYXMgTm9kZVR5cGVzIGZyb20gJy4vTm9kZVR5cGVzJztcbmltcG9ydCB0eXBlIHsgU3VnYXJFbGVtZW50IH0gZnJvbSAnLi9TdWdhckVsZW1lbnQnO1xuXG5jb25zdCBuYW1lID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPik6IHN0cmluZyA9PiB7XG4gIGNvbnN0IHIgPSBlbGVtZW50LmRvbS5ub2RlTmFtZTtcbiAgcmV0dXJuIHIudG9Mb3dlckNhc2UoKTtcbn07XG5cbmNvbnN0IHR5cGUgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KTogbnVtYmVyID0+XG4gIGVsZW1lbnQuZG9tLm5vZGVUeXBlO1xuXG5jb25zdCB2YWx1ZSA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBzdHJpbmcgfCBudWxsID0+XG4gIGVsZW1lbnQuZG9tLm5vZGVWYWx1ZTtcblxuY29uc3QgaXNUeXBlID0gPEUgZXh0ZW5kcyBOb2RlPiAodDogbnVtYmVyKSA9PiAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KTogZWxlbWVudCBpcyBTdWdhckVsZW1lbnQ8RT4gPT5cbiAgdHlwZShlbGVtZW50KSA9PT0gdDtcblxuY29uc3QgaXNDb21tZW50ID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPik6IGVsZW1lbnQgaXMgU3VnYXJFbGVtZW50PENvbW1lbnQ+ID0+XG4gIHR5cGUoZWxlbWVudCkgPT09IE5vZGVUeXBlcy5DT01NRU5UIHx8IG5hbWUoZWxlbWVudCkgPT09ICcjY29tbWVudCc7XG5cbmNvbnN0IGlzSFRNTEVsZW1lbnQgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KTogZWxlbWVudCBpcyBTdWdhckVsZW1lbnQ8SFRNTEVsZW1lbnQ+ID0+XG4gIGlzRWxlbWVudChlbGVtZW50KSAmJiBTYW5kSFRNTEVsZW1lbnQuaXNQcm90b3R5cGVPZihlbGVtZW50LmRvbSk7XG5cbmNvbnN0IGlzRWxlbWVudCA9IGlzVHlwZTxFbGVtZW50PihOb2RlVHlwZXMuRUxFTUVOVCk7XG5jb25zdCBpc1RleHQgPSBpc1R5cGU8VGV4dD4oTm9kZVR5cGVzLlRFWFQpO1xuY29uc3QgaXNEb2N1bWVudCA9IGlzVHlwZTxEb2N1bWVudD4oTm9kZVR5cGVzLkRPQ1VNRU5UKTtcbmNvbnN0IGlzRG9jdW1lbnRGcmFnbWVudCA9IGlzVHlwZTxEb2N1bWVudEZyYWdtZW50PihOb2RlVHlwZXMuRE9DVU1FTlRfRlJBR01FTlQpO1xuXG5jb25zdCBpc1RhZyA9IDxLIGV4dGVuZHMga2V5b2YgSFRNTEVsZW1lbnRGdWxsVGFnTmFtZU1hcD4odGFnOiBLKSA9PiAoZTogU3VnYXJFbGVtZW50PE5vZGU+KTogZSBpcyBTdWdhckVsZW1lbnQ8SFRNTEVsZW1lbnRGdWxsVGFnTmFtZU1hcFtLXT4gPT5cbiAgaXNFbGVtZW50KGUpICYmIG5hbWUoZSkgPT09IHRhZztcblxuZXhwb3J0IHtcbiAgbmFtZSxcbiAgdHlwZSxcbiAgdmFsdWUsXG4gIGlzRWxlbWVudCxcbiAgaXNIVE1MRWxlbWVudCxcbiAgaXNUZXh0LFxuICBpc0RvY3VtZW50LFxuICBpc0RvY3VtZW50RnJhZ21lbnQsXG4gIGlzQ29tbWVudCxcbiAgaXNUYWdcbn07XG4iLCJpbXBvcnQgeyBBcnIsIE9wdGlvbmFsLCBUeXBlIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0IHR5cGUgeyBIVE1MRWxlbWVudEZ1bGxUYWdOYW1lTWFwIH0gZnJvbSAnLi4vLi4vYWxpZW4vRG9tVHlwZXMnO1xuaW1wb3J0ICogYXMgVHJhdmVyc2UgZnJvbSAnLi4vc2VhcmNoL1RyYXZlcnNlJztcblxuaW1wb3J0IHsgU3VnYXJFbGVtZW50IH0gZnJvbSAnLi9TdWdhckVsZW1lbnQnO1xuaW1wb3J0ICogYXMgU3VnYXJIZWFkIGZyb20gJy4vU3VnYXJIZWFkJztcbmltcG9ydCAqIGFzIFN1Z2FyTm9kZSBmcm9tICcuL1N1Z2FyTm9kZSc7XG5cbmV4cG9ydCB0eXBlIFJvb3ROb2RlID0gU3VnYXJFbGVtZW50PERvY3VtZW50IHwgU2hhZG93Um9vdD47XG5cbi8qKlxuICogSXMgdGhlIGVsZW1lbnQgYSBTaGFkb3dSb290P1xuICpcbiAqIE5vdGU6IHRoaXMgaXMgaW5zdWZmaWNpZW50IHRvIHRlc3QgaWYgYW55IGVsZW1lbnQgaXMgYSBzaGFkb3cgcm9vdCwgYnV0IGl0IGlzIHN1ZmZpY2llbnQgdG8gZGlmZmVyZW50aWF0ZSBiZXR3ZWVuXG4gKiBhIERvY3VtZW50IGFuZCBhIFNoYWRvd1Jvb3QuXG4gKi9cbmV4cG9ydCBjb25zdCBpc1NoYWRvd1Jvb3QgPSAoZG9zOiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBkb3MgaXMgU3VnYXJFbGVtZW50PFNoYWRvd1Jvb3Q+ID0+XG4gIFN1Z2FyTm9kZS5pc0RvY3VtZW50RnJhZ21lbnQoZG9zKSAmJiBUeXBlLmlzTm9uTnVsbGFibGUoKGRvcy5kb20gYXMgU2hhZG93Um9vdCkuaG9zdCk7XG5cbmV4cG9ydCBjb25zdCBnZXRSb290Tm9kZTogKGU6IFN1Z2FyRWxlbWVudDxOb2RlPikgPT4gUm9vdE5vZGUgPSAoZSkgPT5cbiAgU3VnYXJFbGVtZW50LmZyb21Eb20oZS5kb20uZ2V0Um9vdE5vZGUoKSkgYXMgUm9vdE5vZGU7XG5cbi8qKiBDcmVhdGUgYW4gZWxlbWVudCwgdXNpbmcgdGhlIGFjdHVhbCBkb2N1bWVudC4gKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVFbGVtZW50OiB7XG4gIDxLIGV4dGVuZHMga2V5b2YgSFRNTEVsZW1lbnRGdWxsVGFnTmFtZU1hcD4oZG9zOiBSb290Tm9kZSwgdGFnOiBLKTogU3VnYXJFbGVtZW50PEhUTUxFbGVtZW50RnVsbFRhZ05hbWVNYXBbS10+O1xuICAoZG9zOiBSb290Tm9kZSwgdGFnOiBzdHJpbmcpOiBTdWdhckVsZW1lbnQ8SFRNTEVsZW1lbnQ+O1xufSA9IChkb3M6IFJvb3ROb2RlLCB0YWc6IHN0cmluZykgPT5cbiAgU3VnYXJFbGVtZW50LmZyb21UYWcodGFnLCBUcmF2ZXJzZS5kb2N1bWVudE9yT3duZXIoZG9zKS5kb20pO1xuXG4vKiogV2hlcmUgc3R5bGUgdGFncyBuZWVkIHRvIGdvLiBTaGFkb3dSb290IG9yIGRvY3VtZW50IGhlYWQgKi9cbmV4cG9ydCBjb25zdCBnZXRTdHlsZUNvbnRhaW5lciA9IChkb3M6IFJvb3ROb2RlKTogU3VnYXJFbGVtZW50PEhUTUxIZWFkRWxlbWVudCB8IFNoYWRvd1Jvb3Q+ID0+XG4gIGlzU2hhZG93Um9vdChkb3MpID8gZG9zIDogU3VnYXJIZWFkLmdldEhlYWQoVHJhdmVyc2UuZG9jdW1lbnRPck93bmVyKGRvcykpO1xuXG4vKiogV2hlcmUgY29udGVudCBuZWVkcyB0byBnby4gU2hhZG93Um9vdCBvciBkb2N1bWVudCBib2R5ICovXG5leHBvcnQgY29uc3QgZ2V0Q29udGVudENvbnRhaW5lciA9IChkb3M6IFJvb3ROb2RlKTogU3VnYXJFbGVtZW50PEhUTUxFbGVtZW50IHwgU2hhZG93Um9vdD4gPT5cbiAgLy8gQ2FuJ3QgdXNlIFN1Z2FyQm9keS5ib2R5IHdpdGhvdXQgY2F1c2luZyBhIGNpcmN1bGFyIG1vZHVsZSByZWZlcmVuY2UgKHNpbmNlIFN1Z2FyQm9keS5pbkJvZHkgdXNlcyBTdWdhclNoYWRvd0RvbSlcbiAgaXNTaGFkb3dSb290KGRvcykgPyBkb3MgOiBTdWdhckVsZW1lbnQuZnJvbURvbShUcmF2ZXJzZS5kb2N1bWVudE9yT3duZXIoZG9zKS5kb20uYm9keSk7XG5cbi8qKiBJcyB0aGlzIGVsZW1lbnQgZWl0aGVyIGEgU2hhZG93Um9vdCBvciBhIGRlc2NlbmRlbnQgb2YgYSBTaGFkb3dSb290LiAqL1xuZXhwb3J0IGNvbnN0IGlzSW5TaGFkb3dSb290ID0gKGU6IFN1Z2FyRWxlbWVudDxOb2RlPik6IGJvb2xlYW4gPT5cbiAgZ2V0U2hhZG93Um9vdChlKS5pc1NvbWUoKTtcblxuLyoqIElmIHRoaXMgZWxlbWVudCBpcyBpbiBhIFNoYWRvd1Jvb3QsIHJldHVybiBpdC4gKi9cbmV4cG9ydCBjb25zdCBnZXRTaGFkb3dSb290ID0gKGU6IFN1Z2FyRWxlbWVudDxOb2RlPik6IE9wdGlvbmFsPFN1Z2FyRWxlbWVudDxTaGFkb3dSb290Pj4gPT4ge1xuICBjb25zdCByID0gZ2V0Um9vdE5vZGUoZSk7XG4gIHJldHVybiBpc1NoYWRvd1Jvb3QocikgPyBPcHRpb25hbC5zb21lKHIpIDogT3B0aW9uYWwubm9uZSgpO1xufTtcblxuLyoqIFJldHVybiB0aGUgaG9zdCBvZiBhIFNoYWRvd1Jvb3QuXG4gKlxuICogVGhpcyBmdW5jdGlvbiB3aWxsIHRocm93IGlmIFNoYWRvdyBET00gaXMgdW5zdXBwb3J0ZWQgaW4gdGhlIGJyb3dzZXIsIG9yIGlmIHRoZSBob3N0IGlzIG51bGwuXG4gKiBJZiB5b3UgYWN0dWFsbHkgaGF2ZSBhIFNoYWRvd1Jvb3QsIHRoaXMgc2hvdWxkbid0IGhhcHBlbi5cbiAqL1xuZXhwb3J0IGNvbnN0IGdldFNoYWRvd0hvc3QgPSAoZTogU3VnYXJFbGVtZW50PFNoYWRvd1Jvb3Q+KTogU3VnYXJFbGVtZW50PEVsZW1lbnQ+ID0+XG4gIFN1Z2FyRWxlbWVudC5mcm9tRG9tKGUuZG9tLmhvc3QpO1xuXG4vKipcbiAqIFdoZW4gRXZlbnRzIGJ1YmJsZSB1cCB0aHJvdWdoIGEgU2hhZG93Um9vdCwgdGhlIGJyb3dzZXIgY2hhbmdlcyB0aGUgdGFyZ2V0IHRvIGJlIHRoZSBzaGFkb3cgaG9zdC5cbiAqIFRoaXMgZnVuY3Rpb24gZ2V0cyB0aGUgXCJvcmlnaW5hbFwiIGV2ZW50IHRhcmdldCBpZiBwb3NzaWJsZS5cbiAqIFRoaXMgb25seSB3b3JrcyBpZiB0aGUgc2hhZG93IHRyZWUgaXMgb3BlbiAtIGlmIHRoZSBzaGFkb3cgdHJlZSBpcyBjbG9zZWQsIGV2ZW50LnRhcmdldCBpcyByZXR1cm5lZC5cbiAqIFNlZTogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL2Z1bmRhbWVudGFscy93ZWItY29tcG9uZW50cy9zaGFkb3dkb20jZXZlbnRzXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRPcmlnaW5hbEV2ZW50VGFyZ2V0ID0gKGV2ZW50OiBFdmVudCk6IE9wdGlvbmFsPEV2ZW50VGFyZ2V0PiA9PiB7XG4gIGlmIChUeXBlLmlzTm9uTnVsbGFibGUoZXZlbnQudGFyZ2V0KSkge1xuICAgIGNvbnN0IGVsID0gU3VnYXJFbGVtZW50LmZyb21Eb20oZXZlbnQudGFyZ2V0IGFzIE5vZGUpO1xuICAgIGlmIChTdWdhck5vZGUuaXNFbGVtZW50KGVsKSAmJiBpc09wZW5TaGFkb3dIb3N0KGVsKSkge1xuICAgICAgLy8gV2hlbiB0YXJnZXQgZWxlbWVudCBpcyBpbnNpZGUgU2hhZG93IERPTSB3ZSBuZWVkIHRvIHRha2UgZmlyc3QgZWxlbWVudCBmcm9tIGNvbXBvc2VkUGF0aFxuICAgICAgLy8gb3RoZXJ3aXNlIHdlJ2xsIGdldCBTaGFkb3cgUm9vdCBwYXJlbnQsIG5vdCBhY3R1YWwgdGFyZ2V0IGVsZW1lbnQuXG4gICAgICBpZiAoZXZlbnQuY29tcG9zZWQgJiYgZXZlbnQuY29tcG9zZWRQYXRoKSB7XG4gICAgICAgIGNvbnN0IGNvbXBvc2VkUGF0aCA9IGV2ZW50LmNvbXBvc2VkUGF0aCgpO1xuICAgICAgICBpZiAoY29tcG9zZWRQYXRoKSB7XG4gICAgICAgICAgcmV0dXJuIEFyci5oZWFkKGNvbXBvc2VkUGF0aCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIE9wdGlvbmFsLmZyb20oZXZlbnQudGFyZ2V0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc09wZW5TaGFkb3dSb290ID0gKHNyOiBTdWdhckVsZW1lbnQ8U2hhZG93Um9vdD4pOiBib29sZWFuID0+XG4gIHNyLmRvbS5tb2RlID09PSAnb3Blbic7XG5cbmV4cG9ydCBjb25zdCBpc0Nsb3NlZFNoYWRvd1Jvb3QgPSAoc3I6IFN1Z2FyRWxlbWVudDxTaGFkb3dSb290Pik6IGJvb2xlYW4gPT5cbiAgc3IuZG9tLm1vZGUgPT09ICdjbG9zZWQnO1xuXG4vKiogUmV0dXJuIHRydWUgaWYgdGhlIGVsZW1lbnQgaXMgYSBob3N0IG9mIGFuIG9wZW4gc2hhZG93IHJvb3QuXG4gKiAgUmV0dXJuIGZhbHNlIGlmIHRoZSBlbGVtZW50IGlzIGEgaG9zdCBvZiBhIGNsb3NlZCBzaGFkb3cgcm9vdCwgb3IgaWYgdGhlIGVsZW1lbnQgaXMgbm90IGEgaG9zdC5cbiAqL1xuZXhwb3J0IGNvbnN0IGlzT3BlblNoYWRvd0hvc3QgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PEVsZW1lbnQ+KTogYm9vbGVhbiA9PlxuICBUeXBlLmlzTm9uTnVsbGFibGUoZWxlbWVudC5kb20uc2hhZG93Um9vdCk7XG4iLCJpbXBvcnQgeyBBcnIgfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5pbXBvcnQgdHlwZSB7IFN1Z2FyRWxlbWVudCB9IGZyb20gJy4uL25vZGUvU3VnYXJFbGVtZW50JztcblxuaW1wb3J0ICogYXMgQXR0cmlidXRlIGZyb20gJy4vQXR0cmlidXRlJztcblxuLy8gTWV0aG9kcyBmb3IgaGFuZGxpbmcgYXR0cmlidXRlcyB0aGF0IGNvbnRhaW4gYSBsaXN0IG9mIHZhbHVlcyA8ZGl2IGZvbz1cImFscGhhIGJldGEgdGhldGFcIj5cbmNvbnN0IHJlYWQgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PEVsZW1lbnQ+LCBhdHRyOiBzdHJpbmcpOiBzdHJpbmdbXSA9PiB7XG4gIGNvbnN0IHZhbHVlID0gQXR0cmlidXRlLmdldChlbGVtZW50LCBhdHRyKTtcbiAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09ICcnID8gW10gOiB2YWx1ZS5zcGxpdCgnICcpO1xufTtcblxuY29uc3QgYWRkID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxFbGVtZW50PiwgYXR0cjogc3RyaW5nLCBpZDogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gIGNvbnN0IG9sZCA9IHJlYWQoZWxlbWVudCwgYXR0cik7XG4gIGNvbnN0IG51ID0gb2xkLmNvbmNhdChbIGlkIF0pO1xuICBBdHRyaWJ1dGUuc2V0KGVsZW1lbnQsIGF0dHIsIG51LmpvaW4oJyAnKSk7XG4gIHJldHVybiB0cnVlO1xufTtcblxuY29uc3QgcmVtb3ZlID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxFbGVtZW50PiwgYXR0cjogc3RyaW5nLCBpZDogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gIGNvbnN0IG51ID0gQXJyLmZpbHRlcihyZWFkKGVsZW1lbnQsIGF0dHIpLCAodikgPT4gdiAhPT0gaWQpO1xuICBpZiAobnUubGVuZ3RoID4gMCkge1xuICAgIEF0dHJpYnV0ZS5zZXQoZWxlbWVudCwgYXR0ciwgbnUuam9pbignICcpKTtcbiAgfSBlbHNlIHtcbiAgICBBdHRyaWJ1dGUucmVtb3ZlKGVsZW1lbnQsIGF0dHIpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCB7XG4gIHJlYWQsXG4gIGFkZCxcbiAgcmVtb3ZlXG59O1xuIiwiaW1wb3J0IHsgQXJyLCBPYmosIE9wdGlvbmFsLCBUeXBlIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0IHR5cGUgeyBTdWdhckVsZW1lbnQgfSBmcm9tICcuLi9ub2RlL1N1Z2FyRWxlbWVudCc7XG5pbXBvcnQgKiBhcyBTdWdhck5vZGUgZnJvbSAnLi4vbm9kZS9TdWdhck5vZGUnO1xuXG5jb25zdCByYXdTZXQgPSAoZG9tOiBFbGVtZW50LCBrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyB8IGJvb2xlYW4gfCBudW1iZXIpOiB2b2lkID0+IHtcbiAgLypcbiAgICogSlF1ZXJ5IGNvZXJjZWQgZXZlcnl0aGluZyB0byBhIHN0cmluZywgYW5kIHNpbGVudGx5IGRpZCBub3RoaW5nIG9uIHRleHQgbm9kZS9udWxsL3VuZGVmaW5lZC5cbiAgICpcbiAgICogV2UgZmFpbCBvbiB0aG9zZSBpbnZhbGlkIGNhc2VzLCBvbmx5IGFsbG93aW5nIG51bWJlcnMgYW5kIGJvb2xlYW5zLlxuICAgKi9cbiAgaWYgKFR5cGUuaXNTdHJpbmcodmFsdWUpIHx8IFR5cGUuaXNCb29sZWFuKHZhbHVlKSB8fCBUeXBlLmlzTnVtYmVyKHZhbHVlKSkge1xuICAgIGRvbS5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSArICcnKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgY2FsbCB0byBBdHRyaWJ1dGUuc2V0LiBLZXkgJywga2V5LCAnOjogVmFsdWUgJywgdmFsdWUsICc6OiBFbGVtZW50ICcsIGRvbSk7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdBdHRyaWJ1dGUgdmFsdWUgd2FzIG5vdCBzaW1wbGUnKTtcbiAgfVxufTtcblxuY29uc3Qgc2V0ID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxFbGVtZW50Piwga2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCBib29sZWFuIHwgbnVtYmVyKTogdm9pZCA9PiB7XG4gIHJhd1NldChlbGVtZW50LmRvbSwga2V5LCB2YWx1ZSk7XG59O1xuXG5jb25zdCBzZXRBbGwgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PEVsZW1lbnQ+LCBhdHRyczogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgYm9vbGVhbiB8IG51bWJlcj4pOiB2b2lkID0+IHtcbiAgY29uc3QgZG9tID0gZWxlbWVudC5kb207XG4gIE9iai5lYWNoKGF0dHJzLCAodiwgaykgPT4ge1xuICAgIHJhd1NldChkb20sIGssIHYpO1xuICB9KTtcbn07XG5cbmNvbnN0IHNldE9wdGlvbnMgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PEVsZW1lbnQ+LCBhdHRyczogUmVjb3JkPHN0cmluZywgT3B0aW9uYWw8c3RyaW5nIHwgYm9vbGVhbiB8IG51bWJlcj4+KTogdm9pZCA9PiB7XG4gIE9iai5lYWNoKGF0dHJzLCAodiwgaykgPT4ge1xuICAgIHYuZm9sZCgoKSA9PiB7XG4gICAgICByZW1vdmUoZWxlbWVudCwgayk7XG4gICAgfSwgKHZhbHVlKSA9PiB7XG4gICAgICByYXdTZXQoZWxlbWVudC5kb20sIGssIHZhbHVlKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBnZXQgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PEVsZW1lbnQ+LCBrZXk6IHN0cmluZyk6IHVuZGVmaW5lZCB8IHN0cmluZyA9PiB7XG4gIGNvbnN0IHYgPSBlbGVtZW50LmRvbS5nZXRBdHRyaWJ1dGUoa2V5KTtcblxuICAvLyB1bmRlZmluZWQgaXMgdGhlIG1vcmUgYXBwcm9wcmlhdGUgdmFsdWUgZm9yIEpTLCBhbmQgdGhpcyBtYXRjaGVzIEpRdWVyeVxuICByZXR1cm4gdiA9PT0gbnVsbCA/IHVuZGVmaW5lZCA6IHY7XG59O1xuXG5jb25zdCBnZXRPcHQgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PEVsZW1lbnQ+LCBrZXk6IHN0cmluZyk6IE9wdGlvbmFsPHN0cmluZz4gPT5cbiAgT3B0aW9uYWwuZnJvbShnZXQoZWxlbWVudCwga2V5KSk7XG5cbmNvbnN0IGhhcyA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4sIGtleTogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gIGNvbnN0IGRvbSA9IGVsZW1lbnQuZG9tO1xuXG4gIC8vIHJldHVybiBmYWxzZSBmb3Igbm9uLWVsZW1lbnQgbm9kZXMsIG5vIHBvaW50IGluIHRocm93aW5nIGFuIGVycm9yXG4gIHJldHVybiBkb20gJiYgKGRvbSBhcyBFbGVtZW50KS5oYXNBdHRyaWJ1dGUgPyAoZG9tIGFzIEVsZW1lbnQpLmhhc0F0dHJpYnV0ZShrZXkpIDogZmFsc2U7XG59O1xuXG5jb25zdCByZW1vdmUgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PEVsZW1lbnQ+LCBrZXk6IHN0cmluZyk6IHZvaWQgPT4ge1xuICBlbGVtZW50LmRvbS5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcbn07XG5cbmNvbnN0IGhhc05vbmUgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KTogYm9vbGVhbiA9PiB7XG4gIGNvbnN0IGF0dHJzID0gKGVsZW1lbnQuZG9tIGFzIEVsZW1lbnQpLmF0dHJpYnV0ZXM7XG4gIHJldHVybiBhdHRycyA9PT0gdW5kZWZpbmVkIHx8IGF0dHJzID09PSBudWxsIHx8IGF0dHJzLmxlbmd0aCA9PT0gMDtcbn07XG5cbmNvbnN0IGNsb25lID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxFbGVtZW50Pik6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPT5cbiAgQXJyLmZvbGRsKGVsZW1lbnQuZG9tLmF0dHJpYnV0ZXMsIChhY2MsIGF0dHIpID0+IHtcbiAgICBhY2NbYXR0ci5uYW1lXSA9IGF0dHIudmFsdWU7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgc3RyaW5nPik7XG5cbmNvbnN0IHRyYW5zZmVyT25lID0gKHNvdXJjZTogU3VnYXJFbGVtZW50PEVsZW1lbnQ+LCBkZXN0aW5hdGlvbjogU3VnYXJFbGVtZW50PEVsZW1lbnQ+LCBhdHRyOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgLy8gTk9URTogV2UgZG9uJ3Qgd2FudCB0byBjbG9iYmVyIGFueSBleGlzdGluZyBhdHRyaWJ1dGVzXG4gIGlmICghaGFzKGRlc3RpbmF0aW9uLCBhdHRyKSkge1xuICAgIGdldE9wdChzb3VyY2UsIGF0dHIpLmVhY2goKHNyY1ZhbHVlKSA9PiBzZXQoZGVzdGluYXRpb24sIGF0dHIsIHNyY1ZhbHVlKSk7XG4gIH1cbn07XG5cbi8vIFRyYW5zZmVyIGF0dHJpYnV0ZXMoYXR0cnMpIGZyb20gc291cmNlIHRvIGRlc3RpbmF0aW9uLCB1bmxlc3MgdGhleSBhcmUgYWxyZWFkeSBwcmVzZW50XG5jb25zdCB0cmFuc2ZlciA9IChzb3VyY2U6IFN1Z2FyRWxlbWVudDxFbGVtZW50PiwgZGVzdGluYXRpb246IFN1Z2FyRWxlbWVudDxFbGVtZW50PiwgYXR0cnM6IHN0cmluZ1tdKTogdm9pZCA9PiB7XG4gIGlmICghU3VnYXJOb2RlLmlzRWxlbWVudChzb3VyY2UpIHx8ICFTdWdhck5vZGUuaXNFbGVtZW50KGRlc3RpbmF0aW9uKSkge1xuICAgIHJldHVybjtcbiAgfVxuICBBcnIuZWFjaChhdHRycywgKGF0dHIpID0+IHtcbiAgICB0cmFuc2Zlck9uZShzb3VyY2UsIGRlc3RpbmF0aW9uLCBhdHRyKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBjbG9uZSwgc2V0LCBzZXRBbGwsIHNldE9wdGlvbnMsIGdldCwgZ2V0T3B0LCBoYXMsIHJlbW92ZSwgaGFzTm9uZSwgdHJhbnNmZXIgfTtcbiIsImltcG9ydCAqIGFzIENsYXNzTGlzdCBmcm9tICcuLi8uLi9pbXBsL0NsYXNzTGlzdCc7XG5pbXBvcnQgdHlwZSB7IFN1Z2FyRWxlbWVudCB9IGZyb20gJy4uL25vZGUvU3VnYXJFbGVtZW50JztcblxuaW1wb3J0ICogYXMgQXR0cmlidXRlIGZyb20gJy4vQXR0cmlidXRlJztcbmltcG9ydCB7IFRvZ2dsZXIgfSBmcm9tICcuL1RvZ2dsZXInO1xuXG4vKlxuICogQ2xhc3NMaXN0IGlzIElFMTAgbWluaW11bTpcbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9FbGVtZW50LmNsYXNzTGlzdFxuICpcbiAqIE5vdGUgdGhhdCBJRSBkb2Vzbid0IHN1cHBvcnQgdGhlIHNlY29uZCBhcmd1bWVudCB0byB0b2dnbGUgKGF0IGFsbCkuXG4gKiBJZiBpdCBkaWQsIHRoZSB0b2dnbGVyIGNvdWxkIGJlIGJldHRlci5cbiAqL1xuXG5jb25zdCBhZGQgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PEVsZW1lbnQ+LCBjbGF6ejogc3RyaW5nKTogdm9pZCA9PiB7XG4gIGlmIChDbGFzc0xpc3Quc3VwcG9ydHMoZWxlbWVudCkpIHtcbiAgICBlbGVtZW50LmRvbS5jbGFzc0xpc3QuYWRkKGNsYXp6KTtcbiAgfSBlbHNlIHtcbiAgICBDbGFzc0xpc3QuYWRkKGVsZW1lbnQsIGNsYXp6KTtcbiAgfVxufTtcblxuY29uc3QgY2xlYW5DbGFzcyA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8RWxlbWVudD4pOiB2b2lkID0+IHtcbiAgY29uc3QgY2xhc3NMaXN0ID0gQ2xhc3NMaXN0LnN1cHBvcnRzKGVsZW1lbnQpID8gZWxlbWVudC5kb20uY2xhc3NMaXN0IDogQ2xhc3NMaXN0LmdldChlbGVtZW50KTtcbiAgLy8gY2xhc3NMaXN0IGlzIGEgXCJsaXZlIGxpc3RcIiwgc28gdGhpcyBpcyB1cCB0byBkYXRlIGFscmVhZHlcbiAgaWYgKGNsYXNzTGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAvLyBObyBtb3JlIGNsYXNzZXMgbGVmdCwgcmVtb3ZlIHRoZSBjbGFzcyBhdHRyaWJ1dGUgYXMgd2VsbFxuICAgIEF0dHJpYnV0ZS5yZW1vdmUoZWxlbWVudCwgJ2NsYXNzJyk7XG4gIH1cbn07XG5cbmNvbnN0IHJlbW92ZSA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8RWxlbWVudD4sIGNsYXp6OiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgaWYgKENsYXNzTGlzdC5zdXBwb3J0cyhlbGVtZW50KSkge1xuICAgIGNvbnN0IGNsYXNzTGlzdCA9IGVsZW1lbnQuZG9tLmNsYXNzTGlzdDtcbiAgICBjbGFzc0xpc3QucmVtb3ZlKGNsYXp6KTtcbiAgfSBlbHNlIHtcbiAgICBDbGFzc0xpc3QucmVtb3ZlKGVsZW1lbnQsIGNsYXp6KTtcbiAgfVxuXG4gIGNsZWFuQ2xhc3MoZWxlbWVudCk7XG59O1xuXG5jb25zdCB0b2dnbGUgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PEVsZW1lbnQ+LCBjbGF6ejogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IENsYXNzTGlzdC5zdXBwb3J0cyhlbGVtZW50KSA/IGVsZW1lbnQuZG9tLmNsYXNzTGlzdC50b2dnbGUoY2xhenopIDogQ2xhc3NMaXN0LnRvZ2dsZShlbGVtZW50LCBjbGF6eik7XG4gIGNsZWFuQ2xhc3MoZWxlbWVudCk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCB0b2dnbGVyID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxFbGVtZW50PiwgY2xheno6IHN0cmluZyk6IFRvZ2dsZXIgPT4ge1xuICBjb25zdCBoYXNDbGFzc2xpc3QgPSBDbGFzc0xpc3Quc3VwcG9ydHMoZWxlbWVudCk7XG4gIGNvbnN0IGNsYXNzTGlzdCA9IGVsZW1lbnQuZG9tLmNsYXNzTGlzdDtcbiAgY29uc3Qgb2ZmID0gKCkgPT4ge1xuICAgIGlmIChoYXNDbGFzc2xpc3QpIHtcbiAgICAgIGNsYXNzTGlzdC5yZW1vdmUoY2xhenopO1xuICAgIH0gZWxzZSB7XG4gICAgICBDbGFzc0xpc3QucmVtb3ZlKGVsZW1lbnQsIGNsYXp6KTtcbiAgICB9XG4gICAgY2xlYW5DbGFzcyhlbGVtZW50KTtcbiAgfTtcbiAgY29uc3Qgb24gPSAoKSA9PiB7XG4gICAgaWYgKGhhc0NsYXNzbGlzdCkge1xuICAgICAgY2xhc3NMaXN0LmFkZChjbGF6eik7XG4gICAgfSBlbHNlIHtcbiAgICAgIENsYXNzTGlzdC5hZGQoZWxlbWVudCwgY2xhenopO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIFRvZ2dsZXIob2ZmLCBvbiwgaGFzKGVsZW1lbnQsIGNsYXp6KSk7XG59O1xuXG5jb25zdCBoYXMgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+LCBjbGF6ejogc3RyaW5nKTogYm9vbGVhbiA9PlxuICBDbGFzc0xpc3Quc3VwcG9ydHMoZWxlbWVudCkgJiYgZWxlbWVudC5kb20uY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXp6KTtcblxuZXhwb3J0IHtcbiAgYWRkLFxuICByZW1vdmUsXG4gIHRvZ2dsZSxcbiAgdG9nZ2xlcixcbiAgaGFzXG59O1xuIiwiaW1wb3J0IHsgQXJyLCBPYmosIE9wdGlvbmFsLCBPcHRpb25hbHMsIFN0cmluZ3MsIFR5cGUgfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5pbXBvcnQgKiBhcyBTdHlsZSBmcm9tICcuLi8uLi9pbXBsL1N0eWxlJztcbmltcG9ydCAqIGFzIFN1Z2FyQm9keSBmcm9tICcuLi9ub2RlL1N1Z2FyQm9keSc7XG5pbXBvcnQgeyBTdWdhckVsZW1lbnQgfSBmcm9tICcuLi9ub2RlL1N1Z2FyRWxlbWVudCc7XG5pbXBvcnQgKiBhcyBTdWdhck5vZGUgZnJvbSAnLi4vbm9kZS9TdWdhck5vZGUnO1xuXG5pbXBvcnQgKiBhcyBBdHRyaWJ1dGUgZnJvbSAnLi9BdHRyaWJ1dGUnO1xuXG5jb25zdCBpbnRlcm5hbFNldCA9IChkb206IE5vZGUsIHByb3BlcnR5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgLy8gVGhpcyBpcyBnb2luZyB0byBodXJ0LiBBcG9sb2dpZXMuXG4gIC8vIEpRdWVyeSBjb2VyY2VzIG51bWJlcnMgdG8gcGl4ZWxzIGZvciBjZXJ0YWluIHByb3BlcnR5IG5hbWVzLCBhbmQgb3RoZXIgdGltZXMgbGV0cyBudW1iZXJzIHRocm91Z2guXG4gIC8vIHdlJ3JlIGdvaW5nIHRvIGJlIGV4cGxpY2l0OyBzdHJpbmdzIG9ubHkuXG4gIGlmICghVHlwZS5pc1N0cmluZyh2YWx1ZSkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgY2FsbCB0byBDU1Muc2V0LiBQcm9wZXJ0eSAnLCBwcm9wZXJ0eSwgJzo6IFZhbHVlICcsIHZhbHVlLCAnOjogRWxlbWVudCAnLCBkb20pO1xuICAgIHRocm93IG5ldyBFcnJvcignQ1NTIHZhbHVlIG11c3QgYmUgYSBzdHJpbmc6ICcgKyB2YWx1ZSk7XG4gIH1cblxuICAvLyByZW1vdmVkOiBzdXBwb3J0IGZvciBkb20oKS5zdHlsZVtwcm9wZXJ0eV0gd2hlcmUgcHJvcCBpcyBjYW1lbCBjYXNlIGluc3RlYWQgb2Ygbm9ybWFsIHByb3BlcnR5IG5hbWVcbiAgaWYgKFN0eWxlLmlzU3VwcG9ydGVkKGRvbSkpIHtcbiAgICBkb20uc3R5bGUuc2V0UHJvcGVydHkocHJvcGVydHksIHZhbHVlKTtcbiAgfVxufTtcblxuY29uc3QgaW50ZXJuYWxSZW1vdmUgPSAoZG9tOiBOb2RlLCBwcm9wZXJ0eTogc3RyaW5nKTogdm9pZCA9PiB7XG4gIC8qXG4gICAqIElFOSBhbmQgYWJvdmUgLSBNRE4gZG9lc24ndCBoYXZlIGRldGFpbHMsIGJ1dCBoZXJlJ3MgYSBjb3VwbGUgb2YgcmFuZG9tIGludGVybmV0IGNsYWltc1xuICAgKlxuICAgKiBodHRwOi8vaGVscC5kb3R0b3JvLmNvbS9sam9wc2pjay5waHBcbiAgICogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzkwMTg4Ni83NTQ2XG4gICAqL1xuICBpZiAoU3R5bGUuaXNTdXBwb3J0ZWQoZG9tKSkge1xuICAgIGRvbS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShwcm9wZXJ0eSk7XG4gIH1cbn07XG5cbmNvbnN0IHNldCA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4sIHByb3BlcnR5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgY29uc3QgZG9tID0gZWxlbWVudC5kb207XG4gIGludGVybmFsU2V0KGRvbSwgcHJvcGVydHksIHZhbHVlKTtcbn07XG5cbmNvbnN0IHNldEFsbCA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4sIGNzczogUmVjb3JkPHN0cmluZywgc3RyaW5nPik6IHZvaWQgPT4ge1xuICBjb25zdCBkb20gPSBlbGVtZW50LmRvbTtcblxuICBPYmouZWFjaChjc3MsICh2LCBrKSA9PiB7XG4gICAgaW50ZXJuYWxTZXQoZG9tLCBrLCB2KTtcbiAgfSk7XG59O1xuXG5jb25zdCBzZXRPcHRpb25zID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPiwgY3NzOiBSZWNvcmQ8c3RyaW5nLCBPcHRpb25hbDxzdHJpbmc+Pik6IHZvaWQgPT4ge1xuICBjb25zdCBkb20gPSBlbGVtZW50LmRvbTtcblxuICBPYmouZWFjaChjc3MsICh2LCBrKSA9PiB7XG4gICAgdi5mb2xkKCgpID0+IHtcbiAgICAgIGludGVybmFsUmVtb3ZlKGRvbSwgayk7XG4gICAgfSwgKHZhbHVlKSA9PiB7XG4gICAgICBpbnRlcm5hbFNldChkb20sIGssIHZhbHVlKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG4vKlxuICogTk9URTogRm9yIGNlcnRhaW4gcHJvcGVydGllcywgdGhpcyByZXR1cm5zIHRoZSBcInVzZWQgdmFsdWVcIiB3aGljaCBpcyBzdWJ0bHkgZGlmZmVyZW50IHRvIHRoZSBcImNvbXB1dGVkIHZhbHVlXCIgKGRlc3BpdGUgY2FsbGluZyBnZXRDb21wdXRlZFN0eWxlKS5cbiAqIEJsYW1lIENTUyAyLjAuXG4gKlxuICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3VzZWRfdmFsdWVcbiAqL1xuY29uc3QgZ2V0ID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxFbGVtZW50PiwgcHJvcGVydHk6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IGRvbSA9IGVsZW1lbnQuZG9tO1xuICAvKlxuICAgKiBJRTkgYW5kIGFib3ZlIHBlclxuICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9kb2NzL1dlYi9BUEkvd2luZG93LmdldENvbXB1dGVkU3R5bGVcbiAgICpcbiAgICogTm90IGluIG51bWVyb3NpdHksIGJlY2F1c2UgaXQgZG9lc24ndCBtZW1vaXplIGFuZCBsb29raW5nIHRoaXMgdXAgZHluYW1pY2FsbHkgaW4gcGVyZm9ybWFuY2UgY3JpdGljYWwgY29kZSB3b3VsZCBiZSBob3JyZW5kb3VzLlxuICAgKlxuICAgKiBKUXVlcnkgaGFzIHNvbWUgbWFnaWMgaGVyZSBmb3IgSUUgcG9wdXBzLCBidXQgd2UgZG9uJ3QgcmVhbGx5IG5lZWQgdGhhdC5cbiAgICogSXQgYWxzbyB1c2VzIGVsZW1lbnQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyB0byBoYW5kbGUgaWZyYW1lcyBidXQgdGhhdCBoYXNuJ3QgYmVlbiByZXF1aXJlZCBzaW5jZSBGRiAzLjYuXG4gICAqL1xuICBjb25zdCBzdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb20pO1xuICBjb25zdCByID0gc3R5bGVzLmdldFByb3BlcnR5VmFsdWUocHJvcGVydHkpO1xuXG4gIC8vIGpxdWVyeS1pc206IElmIHIgaXMgYW4gZW1wdHkgc3RyaW5nLCBjaGVjayB0aGF0IHRoZSBlbGVtZW50IGlzIG5vdCBpbiBhIGRvY3VtZW50LiBJZiBpdCBpc24ndCwgcmV0dXJuIHRoZSByYXcgdmFsdWUuXG4gIC8vIFR1cm5zIG91dCB3ZSBkbyB0aGlzIGEgbG90LlxuICByZXR1cm4gKHIgPT09ICcnICYmICFTdWdhckJvZHkuaW5Cb2R5KGVsZW1lbnQpKSA/IGdldFVuc2FmZVByb3BlcnR5KGRvbSwgcHJvcGVydHkpIDogcjtcbn07XG5cbi8vIHJlbW92ZWQ6IHN1cHBvcnQgZm9yIGRvbSgpLnN0eWxlW3Byb3BlcnR5XSB3aGVyZSBwcm9wIGlzIGNhbWVsIGNhc2UgaW5zdGVhZCBvZiBub3JtYWwgcHJvcGVydHkgbmFtZVxuLy8gZW1wdHkgc3RyaW5nIGlzIHdoYXQgdGhlIGJyb3dzZXJzIChJRTExIGFuZCBDaHJvbWUpIHJldHVybiB3aGVuIHRoZSBwcm9wZXJ0eVZhbHVlIGRvZXNuJ3QgZXhpc3RzLlxuY29uc3QgZ2V0VW5zYWZlUHJvcGVydHkgPSAoZG9tOiBOb2RlLCBwcm9wZXJ0eTogc3RyaW5nKTogc3RyaW5nID0+XG4gIFN0eWxlLmlzU3VwcG9ydGVkKGRvbSkgPyBkb20uc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShwcm9wZXJ0eSkgOiAnJztcblxuLypcbiAqIEdldHMgdGhlIHJhdyB2YWx1ZSBmcm9tIHRoZSBzdHlsZSBhdHRyaWJ1dGUuIFVzZWZ1bCBmb3IgcmV0cmlldmluZyBcInVzZWQgdmFsdWVzXCIgZnJvbSB0aGUgRE9NOlxuICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3VzZWRfdmFsdWVcbiAqXG4gKiBSZXR1cm5zIE5PTkUgaWYgdGhlIHByb3BlcnR5IGlzbid0IHNldCwgb3IgdGhlIHZhbHVlIGlzIGFuIGVtcHR5IHN0cmluZy5cbiAqL1xuY29uc3QgZ2V0UmF3ID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPiwgcHJvcGVydHk6IHN0cmluZyk6IE9wdGlvbmFsPHN0cmluZz4gPT4ge1xuICBjb25zdCBkb20gPSBlbGVtZW50LmRvbTtcbiAgY29uc3QgcmF3ID0gZ2V0VW5zYWZlUHJvcGVydHkoZG9tLCBwcm9wZXJ0eSk7XG5cbiAgcmV0dXJuIE9wdGlvbmFsLmZyb20ocmF3KS5maWx0ZXIoKHIpID0+IHIubGVuZ3RoID4gMCk7XG59O1xuXG5jb25zdCBnZXRBbGxSYXcgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9PiB7XG4gIGNvbnN0IGNzczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xuICBjb25zdCBkb20gPSBlbGVtZW50LmRvbTtcblxuICBpZiAoU3R5bGUuaXNTdXBwb3J0ZWQoZG9tKSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZG9tLnN0eWxlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBydWxlTmFtZSA9IGRvbS5zdHlsZS5pdGVtKGkpIGFzIGtleW9mIENTU1N0eWxlRGVjbGFyYXRpb247XG4gICAgICBjc3NbcnVsZU5hbWVdID0gZG9tLnN0eWxlW3J1bGVOYW1lXSBhcyBzdHJpbmc7XG4gICAgfVxuICB9XG4gIHJldHVybiBjc3M7XG59O1xuXG5jb25zdCBpc1ZhbGlkVmFsdWUgPSAodGFnOiBzdHJpbmcsIHByb3BlcnR5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IFN1Z2FyRWxlbWVudC5mcm9tVGFnKHRhZyk7XG4gIHNldChlbGVtZW50LCBwcm9wZXJ0eSwgdmFsdWUpO1xuICBjb25zdCBzdHlsZSA9IGdldFJhdyhlbGVtZW50LCBwcm9wZXJ0eSk7XG4gIHJldHVybiBzdHlsZS5pc1NvbWUoKTtcbn07XG5cbmNvbnN0IHJlbW92ZSA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4sIHByb3BlcnR5OiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgY29uc3QgZG9tID0gZWxlbWVudC5kb207XG5cbiAgaW50ZXJuYWxSZW1vdmUoZG9tLCBwcm9wZXJ0eSk7XG5cbiAgaWYgKE9wdGlvbmFscy5pcyhBdHRyaWJ1dGUuZ2V0T3B0KGVsZW1lbnQgYXMgU3VnYXJFbGVtZW50PEVsZW1lbnQ+LCAnc3R5bGUnKS5tYXAoU3RyaW5ncy50cmltKSwgJycpKSB7XG4gICAgLy8gTm8gbW9yZSBzdHlsZXMgbGVmdCwgcmVtb3ZlIHRoZSBzdHlsZSBhdHRyaWJ1dGUgYXMgd2VsbFxuICAgIEF0dHJpYnV0ZS5yZW1vdmUoZWxlbWVudCBhcyBTdWdhckVsZW1lbnQ8RWxlbWVudD4sICdzdHlsZScpO1xuICB9XG59O1xuXG5jb25zdCBwcmVzZXJ2ZSA9IDxFIGV4dGVuZHMgRWxlbWVudCwgVD4gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxFPiwgZjogKGU6IFN1Z2FyRWxlbWVudDxFPikgPT4gVCk6IFQgPT4ge1xuICBjb25zdCBvbGRTdHlsZXMgPSBBdHRyaWJ1dGUuZ2V0KGVsZW1lbnQsICdzdHlsZScpO1xuICBjb25zdCByZXN1bHQgPSBmKGVsZW1lbnQpO1xuICBpZiAob2xkU3R5bGVzID09PSB1bmRlZmluZWQpIHtcbiAgICBBdHRyaWJ1dGUucmVtb3ZlKGVsZW1lbnQsICdzdHlsZScpO1xuICB9IGVsc2Uge1xuICAgIEF0dHJpYnV0ZS5zZXQoZWxlbWVudCwgJ3N0eWxlJywgb2xkU3R5bGVzKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuY29uc3QgY29weSA9IChzb3VyY2U6IFN1Z2FyRWxlbWVudDxOb2RlPiwgdGFyZ2V0OiBTdWdhckVsZW1lbnQ8SFRNTEVsZW1lbnQ+KTogdm9pZCA9PiB7XG4gIGNvbnN0IHNvdXJjZURvbSA9IHNvdXJjZS5kb207XG4gIGNvbnN0IHRhcmdldERvbSA9IHRhcmdldC5kb207XG4gIGlmIChTdHlsZS5pc1N1cHBvcnRlZChzb3VyY2VEb20pICYmIFN0eWxlLmlzU3VwcG9ydGVkKHRhcmdldERvbSkpIHtcbiAgICB0YXJnZXREb20uc3R5bGUuY3NzVGV4dCA9IHNvdXJjZURvbS5zdHlsZS5jc3NUZXh0O1xuICB9XG59O1xuXG4vKiBOT1RFOiBUaGlzIGZ1bmN0aW9uIGlzIGhlcmUgZm9yIHRoZSBzaWRlIGVmZmVjdCBpdCB0cmlnZ2Vycy5cblRoZSB2YWx1ZSBpdHNlbGYgaXMgbm90IHVzZWQuXG5CZSBzdXJlIHRvIG5vdCB1c2UgdGhlIHJldHVybiB2YWx1ZSwgYW5kIHRoYXQgaXQgaXMgbm90IHJlbW92ZWQgYnkgYSBtaW5pZmllci5cbiAqL1xuY29uc3QgcmVmbG93ID0gKGU6IFN1Z2FyRWxlbWVudDxIVE1MRWxlbWVudD4pOiB2b2lkID0+XG4gIGUuZG9tLm9mZnNldFdpZHRoIGFzIHVua25vd24gYXMgdm9pZDtcblxuY29uc3QgdHJhbnNmZXJPbmUgPSAoc291cmNlOiBTdWdhckVsZW1lbnQ8Tm9kZT4sIGRlc3RpbmF0aW9uOiBTdWdhckVsZW1lbnQ8Tm9kZT4sIHN0eWxlOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgZ2V0UmF3KHNvdXJjZSwgc3R5bGUpLmVhY2goKHZhbHVlKSA9PiB7XG4gICAgLy8gTk9URTogV2UgZG9uJ3Qgd2FudCB0byBjbG9iYmVyIGFueSBleGlzdGluZyBpbmxpbmUgc3R5bGVzLlxuICAgIGlmIChnZXRSYXcoZGVzdGluYXRpb24sIHN0eWxlKS5pc05vbmUoKSkge1xuICAgICAgc2V0KGRlc3RpbmF0aW9uLCBzdHlsZSwgdmFsdWUpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCB0cmFuc2ZlciA9IChzb3VyY2U6IFN1Z2FyRWxlbWVudDxOb2RlPiwgZGVzdGluYXRpb246IFN1Z2FyRWxlbWVudDxOb2RlPiwgc3R5bGVzOiBzdHJpbmdbXSk6IHZvaWQgPT4ge1xuICBpZiAoIVN1Z2FyTm9kZS5pc0VsZW1lbnQoc291cmNlKSB8fCAhU3VnYXJOb2RlLmlzRWxlbWVudChkZXN0aW5hdGlvbikpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgQXJyLmVhY2goc3R5bGVzLCAoc3R5bGUpID0+IHtcbiAgICB0cmFuc2Zlck9uZShzb3VyY2UsIGRlc3RpbmF0aW9uLCBzdHlsZSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgY29weSwgc2V0LCBwcmVzZXJ2ZSwgc2V0QWxsLCBzZXRPcHRpb25zLCByZW1vdmUsIGdldCwgZ2V0UmF3LCBnZXRBbGxSYXcsIGlzVmFsaWRWYWx1ZSwgcmVmbG93LCB0cmFuc2ZlciB9O1xuIiwiZXhwb3J0IGludGVyZmFjZSBUb2dnbGVyIHtcbiAgcmVhZG9ubHkgb246ICgpID0+IHZvaWQ7XG4gIHJlYWRvbmx5IG9mZjogKCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgdG9nZ2xlOiAoKSA9PiB2b2lkO1xuICByZWFkb25seSBpc09uOiAoKSA9PiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgVG9nZ2xlciA9ICh0dXJuT2ZmOiAoKSA9PiB2b2lkLCB0dXJuT246ICgpID0+IHZvaWQsIGluaXRpYWw6IGJvb2xlYW4pOiBUb2dnbGVyID0+IHtcbiAgbGV0IGFjdGl2ZSA9IGluaXRpYWwgfHwgZmFsc2U7XG5cbiAgY29uc3Qgb24gPSAoKSA9PiB7XG4gICAgdHVybk9uKCk7XG4gICAgYWN0aXZlID0gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBvZmYgPSAoKSA9PiB7XG4gICAgdHVybk9mZigpO1xuICAgIGFjdGl2ZSA9IGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZSA9ICgpID0+IHtcbiAgICBjb25zdCBmID0gYWN0aXZlID8gb2ZmIDogb247XG4gICAgZigpO1xuICB9O1xuXG4gIGNvbnN0IGlzT24gPSAoKSA9PiBhY3RpdmU7XG5cbiAgcmV0dXJuIHtcbiAgICBvbixcbiAgICBvZmYsXG4gICAgdG9nZ2xlLFxuICAgIGlzT25cbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBBcnIgfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5pbXBvcnQgKiBhcyBTdWdhckJvZHkgZnJvbSAnLi4vbm9kZS9TdWdhckJvZHknO1xuaW1wb3J0IHR5cGUgeyBTdWdhckVsZW1lbnQgfSBmcm9tICcuLi9ub2RlL1N1Z2FyRWxlbWVudCc7XG5cbmltcG9ydCAqIGFzIFRyYXZlcnNlIGZyb20gJy4vVHJhdmVyc2UnO1xuXG4vLyBtYXliZSBUcmF2ZXJzZVdpdGgsIHNpbWlsYXIgdG8gdHJhdmVyc2UgYnV0IHdpdGggYSBwcmVkaWNhdGU/XG5cbmNvbnN0IGFsbDoge1xuICA8VCBleHRlbmRzIE5vZGUgPSBOb2RlPihwcmVkaWNhdGU6IChlOiBTdWdhckVsZW1lbnQ8Tm9kZT4pID0+IGUgaXMgU3VnYXJFbGVtZW50PFQ+KTogU3VnYXJFbGVtZW50PFQ+W107XG4gIChwcmVkaWNhdGU6IChlOiBTdWdhckVsZW1lbnQ8Tm9kZT4pID0+IGJvb2xlYW4pOiBTdWdhckVsZW1lbnQ8Tm9kZT5bXTtcbn0gPSAocHJlZGljYXRlOiAoZTogU3VnYXJFbGVtZW50PE5vZGU+KSA9PiBib29sZWFuKSA9PlxuICBkZXNjZW5kYW50cyhTdWdhckJvZHkuYm9keSgpLCBwcmVkaWNhdGUpO1xuXG5jb25zdCBhbmNlc3RvcnM6IHtcbiAgPFQgZXh0ZW5kcyBOb2RlID0gTm9kZT4oc2NvcGU6IFN1Z2FyRWxlbWVudDxOb2RlPiwgcHJlZGljYXRlOiAoZTogU3VnYXJFbGVtZW50PE5vZGU+KSA9PiBlIGlzIFN1Z2FyRWxlbWVudDxUPiwgaXNSb290PzogKGU6IFN1Z2FyRWxlbWVudDxOb2RlPikgPT4gYm9vbGVhbik6IFN1Z2FyRWxlbWVudDxUPltdO1xuICAoc2NvcGU6IFN1Z2FyRWxlbWVudDxOb2RlPiwgcHJlZGljYXRlOiAoZTogU3VnYXJFbGVtZW50PE5vZGU+KSA9PiBib29sZWFuLCBpc1Jvb3Q/OiAoZTogU3VnYXJFbGVtZW50PE5vZGU+KSA9PiBib29sZWFuKTogU3VnYXJFbGVtZW50PE5vZGU+W107XG59ID0gKHNjb3BlOiBTdWdhckVsZW1lbnQ8Tm9kZT4sIHByZWRpY2F0ZTogKGU6IFN1Z2FyRWxlbWVudDxOb2RlPikgPT4gYm9vbGVhbiwgaXNSb290PzogKGU6IFN1Z2FyRWxlbWVudDxOb2RlPikgPT4gYm9vbGVhbikgPT5cbiAgQXJyLmZpbHRlcihUcmF2ZXJzZS5wYXJlbnRzKHNjb3BlLCBpc1Jvb3QpLCBwcmVkaWNhdGUpO1xuXG5jb25zdCBzaWJsaW5nczoge1xuICA8VCBleHRlbmRzIE5vZGUgPSBOb2RlPihzY29wZTogU3VnYXJFbGVtZW50PE5vZGU+LCBwcmVkaWNhdGU6IChlOiBTdWdhckVsZW1lbnQ8Tm9kZT4pID0+IGUgaXMgU3VnYXJFbGVtZW50PFQ+KTogU3VnYXJFbGVtZW50PFQ+W107XG4gIChzY29wZTogU3VnYXJFbGVtZW50PE5vZGU+LCBwcmVkaWNhdGU6IChlOiBTdWdhckVsZW1lbnQ8Tm9kZT4pID0+IGJvb2xlYW4pOiBTdWdhckVsZW1lbnQ8Tm9kZT5bXTtcbn0gPSAoc2NvcGU6IFN1Z2FyRWxlbWVudDxOb2RlPiwgcHJlZGljYXRlOiAoZTogU3VnYXJFbGVtZW50PE5vZGU+KSA9PiBib29sZWFuKSA9PlxuICBBcnIuZmlsdGVyKFRyYXZlcnNlLnNpYmxpbmdzKHNjb3BlKSwgcHJlZGljYXRlKTtcblxuY29uc3QgY2hpbGRyZW46IHtcbiAgPFQgZXh0ZW5kcyBOb2RlID0gTm9kZT4oc2NvcGU6IFN1Z2FyRWxlbWVudDxOb2RlPiwgcHJlZGljYXRlOiAoZTogU3VnYXJFbGVtZW50PE5vZGU+KSA9PiBlIGlzIFN1Z2FyRWxlbWVudDxUPik6IFN1Z2FyRWxlbWVudDxUPltdO1xuICAoc2NvcGU6IFN1Z2FyRWxlbWVudDxOb2RlPiwgcHJlZGljYXRlOiAoZTogU3VnYXJFbGVtZW50PE5vZGU+KSA9PiBib29sZWFuKTogU3VnYXJFbGVtZW50PE5vZGU+W107XG59ID0gKHNjb3BlOiBTdWdhckVsZW1lbnQ8Tm9kZT4sIHByZWRpY2F0ZTogKGU6IFN1Z2FyRWxlbWVudDxOb2RlPikgPT4gYm9vbGVhbikgPT5cbiAgQXJyLmZpbHRlcihUcmF2ZXJzZS5jaGlsZHJlbihzY29wZSksIHByZWRpY2F0ZSk7XG5cbmNvbnN0IGRlc2NlbmRhbnRzOiB7XG4gIDxUIGV4dGVuZHMgTm9kZSA9IE5vZGU+KHNjb3BlOiBTdWdhckVsZW1lbnQ8Tm9kZT4sIHByZWRpY2F0ZTogKGU6IFN1Z2FyRWxlbWVudDxOb2RlPikgPT4gZSBpcyBTdWdhckVsZW1lbnQ8VD4pOiBTdWdhckVsZW1lbnQ8VD5bXTtcbiAgKHNjb3BlOiBTdWdhckVsZW1lbnQ8Tm9kZT4sIHByZWRpY2F0ZTogKGU6IFN1Z2FyRWxlbWVudDxOb2RlPikgPT4gYm9vbGVhbik6IFN1Z2FyRWxlbWVudDxOb2RlPltdO1xufSA9IChzY29wZTogU3VnYXJFbGVtZW50PE5vZGU+LCBwcmVkaWNhdGU6IChlOiBTdWdhckVsZW1lbnQ8Tm9kZT4pID0+IGJvb2xlYW4pID0+IHtcbiAgbGV0IHJlc3VsdDogU3VnYXJFbGVtZW50PE5vZGU+W10gPSBbXTtcblxuICAvLyBSZWN1cnNlLnRvQXJyYXkoKSBtaWdodCBoZWxwIGhlcmVcbiAgQXJyLmVhY2goVHJhdmVyc2UuY2hpbGRyZW4oc2NvcGUpLCAoeCkgPT4ge1xuICAgIGlmIChwcmVkaWNhdGUoeCkpIHtcbiAgICAgIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQoWyB4IF0pO1xuICAgIH1cbiAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0KGRlc2NlbmRhbnRzKHgsIHByZWRpY2F0ZSkpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCB7XG4gIGFsbCxcbiAgYW5jZXN0b3JzLFxuICBzaWJsaW5ncyxcbiAgY2hpbGRyZW4sXG4gIGRlc2NlbmRhbnRzXG59O1xuIiwiaW1wb3J0IHR5cGUgeyBTdWdhckVsZW1lbnQgfSBmcm9tICcuLi9ub2RlL1N1Z2FyRWxlbWVudCc7XG5cbmltcG9ydCAqIGFzIFByZWRpY2F0ZUZpbHRlciBmcm9tICcuL1ByZWRpY2F0ZUZpbHRlcic7XG5pbXBvcnQgKiBhcyBTZWxlY3RvcnMgZnJvbSAnLi9TZWxlY3RvcnMnO1xuXG5jb25zdCBhbGwgPSA8VCBleHRlbmRzIEVsZW1lbnQgPSBFbGVtZW50PiAoc2VsZWN0b3I6IHN0cmluZyk6IFN1Z2FyRWxlbWVudDxUPltdID0+XG4gIFNlbGVjdG9ycy5hbGw8VD4oc2VsZWN0b3IpO1xuXG4vLyBGb3IgYWxsIG9mIHRoZSBmb2xsb3dpbmc6XG4vL1xuLy8galF1ZXJ5IGRvZXMgc2libGluZ3Mgb2YgZmlyc3RDaGlsZC4gSUU5KyBzdXBwb3J0cyBzY29wZS5kb20uY2hpbGRyZW4gKHNpbWlsYXIgdG8gVHJhdmVyc2UuY2hpbGRyZW4gYnV0IGVsZW1lbnRzIG9ubHkpLlxuLy8gVHJhdmVyc2Ugc2hvdWxkIGFsc28gZG8gdGhpcyAoYnV0IHByb2JhYmx5IG5vdCBieSBkZWZhdWx0KS5cbi8vXG5cbmNvbnN0IGFuY2VzdG9ycyA9IDxUIGV4dGVuZHMgRWxlbWVudCA9IEVsZW1lbnQ+IChzY29wZTogU3VnYXJFbGVtZW50PE5vZGU+LCBzZWxlY3Rvcjogc3RyaW5nLCBpc1Jvb3Q/OiAoZTogU3VnYXJFbGVtZW50PE5vZGU+KSA9PiBib29sZWFuKTogU3VnYXJFbGVtZW50PFQ+W10gPT5cbiAgLy8gSXQgbWF5IHN1cnByaXNlIHlvdSB0byBsZWFybiB0aGlzIGlzIGV4YWN0bHkgd2hhdCBKUXVlcnkgZG9lc1xuICAvLyBUT0RPOiBBdm9pZCBhbGwgdGhpcyB3cmFwcGluZyBhbmQgdW53cmFwcGluZ1xuICBQcmVkaWNhdGVGaWx0ZXIuYW5jZXN0b3JzKHNjb3BlLCAoZSk6IGUgaXMgU3VnYXJFbGVtZW50PFQ+ID0+IFNlbGVjdG9ycy5pczxUPihlLCBzZWxlY3RvciksIGlzUm9vdCk7XG5cbmNvbnN0IHNpYmxpbmdzID0gPFQgZXh0ZW5kcyBFbGVtZW50ID0gRWxlbWVudD4gKHNjb3BlOiBTdWdhckVsZW1lbnQ8Tm9kZT4sIHNlbGVjdG9yOiBzdHJpbmcpOiBTdWdhckVsZW1lbnQ8VD5bXSA9PlxuICAvLyBJdCBtYXkgc3VycHJpc2UgeW91IHRvIGxlYXJuIHRoaXMgaXMgZXhhY3RseSB3aGF0IEpRdWVyeSBkb2VzXG4gIC8vIFRPRE86IEF2b2lkIGFsbCB0aGUgd3JhcHBpbmcgYW5kIHVud3JhcHBpbmdcbiAgUHJlZGljYXRlRmlsdGVyLnNpYmxpbmdzKHNjb3BlLCAoZSk6IGUgaXMgU3VnYXJFbGVtZW50PFQ+ID0+IFNlbGVjdG9ycy5pczxUPihlLCBzZWxlY3RvcikpO1xuXG5jb25zdCBjaGlsZHJlbiA9IDxUIGV4dGVuZHMgRWxlbWVudCA9IEVsZW1lbnQ+IChzY29wZTogU3VnYXJFbGVtZW50PE5vZGU+LCBzZWxlY3Rvcjogc3RyaW5nKTogU3VnYXJFbGVtZW50PFQ+W10gPT5cbiAgLy8gSXQgbWF5IHN1cnByaXNlIHlvdSB0byBsZWFybiB0aGlzIGlzIGV4YWN0bHkgd2hhdCBKUXVlcnkgZG9lc1xuICAvLyBUT0RPOiBBdm9pZCBhbGwgdGhlIHdyYXBwaW5nIGFuZCB1bndyYXBwaW5nXG4gIFByZWRpY2F0ZUZpbHRlci5jaGlsZHJlbihzY29wZSwgKGUpOiBlIGlzIFN1Z2FyRWxlbWVudDxUPiA9PiBTZWxlY3RvcnMuaXM8VD4oZSwgc2VsZWN0b3IpKTtcblxuY29uc3QgZGVzY2VuZGFudHMgPSA8VCBleHRlbmRzIEVsZW1lbnQgPSBFbGVtZW50PiAoc2NvcGU6IFN1Z2FyRWxlbWVudDxOb2RlPiwgc2VsZWN0b3I6IHN0cmluZyk6IFN1Z2FyRWxlbWVudDxUPltdID0+XG4gIFNlbGVjdG9ycy5hbGw8VD4oc2VsZWN0b3IsIHNjb3BlKTtcblxuZXhwb3J0IHtcbiAgYWxsLFxuICBhbmNlc3RvcnMsXG4gIHNpYmxpbmdzLFxuICBjaGlsZHJlbixcbiAgZGVzY2VuZGFudHNcbn07XG4iLCJpbXBvcnQgeyBBcnIsIE9wdGlvbmFsIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0IHsgRE9DVU1FTlQsIERPQ1VNRU5UX0ZSQUdNRU5ULCBFTEVNRU5UIH0gZnJvbSAnLi4vbm9kZS9Ob2RlVHlwZXMnO1xuaW1wb3J0IHsgU3VnYXJFbGVtZW50IH0gZnJvbSAnLi4vbm9kZS9TdWdhckVsZW1lbnQnO1xuXG5pbnRlcmZhY2UgVmVuZG9yRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBtc01hdGNoZXNTZWxlY3Rvcj86IChzZWxlY3Rvcjogc3RyaW5nKSA9PiBib29sZWFuO1xuICBtb3pNYXRjaGVzU2VsZWN0b3I/OiAoc2VsZWN0b3I6IHN0cmluZykgPT4gYm9vbGVhbjtcbn1cblxuY29uc3QgaXMgPSA8VCBleHRlbmRzIEVsZW1lbnQgPSBFbGVtZW50PiAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+LCBzZWxlY3Rvcjogc3RyaW5nKTogZWxlbWVudCBpcyBTdWdhckVsZW1lbnQ8VD4gPT4ge1xuICBjb25zdCBkb20gPSBlbGVtZW50LmRvbTtcbiAgaWYgKGRvbS5ub2RlVHlwZSAhPT0gRUxFTUVOVCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBlbGVtID0gZG9tIGFzIFZlbmRvckVsZW1lbnQ7XG4gICAgaWYgKGVsZW0ubWF0Y2hlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZWxlbS5tYXRjaGVzKHNlbGVjdG9yKTtcbiAgICB9IGVsc2UgaWYgKGVsZW0ubXNNYXRjaGVzU2VsZWN0b3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGVsZW0ubXNNYXRjaGVzU2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIH0gZWxzZSBpZiAoZWxlbS53ZWJraXRNYXRjaGVzU2VsZWN0b3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGVsZW0ud2Via2l0TWF0Y2hlc1NlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICB9IGVsc2UgaWYgKGVsZW0ubW96TWF0Y2hlc1NlbGVjdG9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIGNhc3QgdG8gYW55IGFzIG1vek1hdGNoZXNTZWxlY3RvciBkb2Vzbid0IGV4aXN0IGluIFRTIERPTSBsaWJcbiAgICAgIHJldHVybiBlbGVtLm1vek1hdGNoZXNTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQnJvd3NlciBsYWNrcyBuYXRpdmUgc2VsZWN0b3JzJyk7XG4gICAgfSAvLyB1bmZvcnR1bmF0ZWx5IHdlIGNhbid0IHRocm93IHRoaXMgb24gc3RhcnR1cCA6KFxuICB9XG59O1xuXG5jb25zdCBieXBhc3NTZWxlY3RvciA9IChkb206IE5vZGUpID0+XG4gIC8vIE9ubHkgZWxlbWVudHMsIGRvY3VtZW50cyBhbmQgc2hhZG93IHJvb3RzIHN1cHBvcnQgcXVlcnlTZWxlY3RvclxuICAvLyBzaGFkb3cgcm9vdCBlbGVtZW50IHR5cGUgaXMgRE9DVU1FTlRfRlJBR01FTlRcbiAgZG9tLm5vZGVUeXBlICE9PSBFTEVNRU5UICYmIGRvbS5ub2RlVHlwZSAhPT0gRE9DVU1FTlQgJiYgZG9tLm5vZGVUeXBlICE9PSBET0NVTUVOVF9GUkFHTUVOVCB8fFxuICAgIC8vIElFIGZpeCBmb3IgY29tcGxleCBxdWVyaWVzIG9uIGVtcHR5IG5vZGVzOiBodHRwOi8vanNmaWRkbGUubmV0L3NweWRlci9mdjlwdHI1TC9cbiAgICAoZG9tIGFzIEVsZW1lbnQgfCBEb2N1bWVudCB8IERvY3VtZW50RnJhZ21lbnQpLmNoaWxkRWxlbWVudENvdW50ID09PSAwO1xuXG5jb25zdCBhbGwgPSA8VCBleHRlbmRzIEVsZW1lbnQgPSBFbGVtZW50PiAoc2VsZWN0b3I6IHN0cmluZywgc2NvcGU/OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBTdWdhckVsZW1lbnQ8VD5bXSA9PiB7XG4gIGNvbnN0IGJhc2UgPSBzY29wZSA9PT0gdW5kZWZpbmVkID8gZG9jdW1lbnQgOiBzY29wZS5kb207XG4gIHJldHVybiBieXBhc3NTZWxlY3RvcihiYXNlKSA/IFtdIDogQXJyLm1hcCgoYmFzZSBhcyBFbGVtZW50IHwgRG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGw8VD4oc2VsZWN0b3IpLCBTdWdhckVsZW1lbnQuZnJvbURvbSk7XG59O1xuXG5jb25zdCBvbmUgPSA8VCBleHRlbmRzIEVsZW1lbnQgPSBFbGVtZW50PiAoc2VsZWN0b3I6IHN0cmluZywgc2NvcGU/OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBPcHRpb25hbDxTdWdhckVsZW1lbnQ8VD4+ID0+IHtcbiAgY29uc3QgYmFzZSA9IHNjb3BlID09PSB1bmRlZmluZWQgPyBkb2N1bWVudCA6IHNjb3BlLmRvbTtcbiAgcmV0dXJuIGJ5cGFzc1NlbGVjdG9yKGJhc2UpID8gT3B0aW9uYWwubm9uZTxTdWdhckVsZW1lbnQ8VD4+KCkgOiBPcHRpb25hbC5mcm9tKChiYXNlIGFzIEVsZW1lbnQgfCBEb2N1bWVudCkucXVlcnlTZWxlY3RvcjxUPihzZWxlY3RvcikpLm1hcChTdWdhckVsZW1lbnQuZnJvbURvbSk7XG59O1xuXG5leHBvcnQge1xuICBhbGwsXG4gIGlzLFxuICBvbmVcbn07XG4iLCJpbXBvcnQgeyBBcnIsIEZ1biwgT3B0aW9uYWwsIFR5cGUgfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5pbXBvcnQgKiBhcyBSZWN1cnNlIGZyb20gJy4uLy4uL2FsaWVuL1JlY3Vyc2UnO1xuaW1wb3J0ICogYXMgQ29tcGFyZSBmcm9tICcuLi9kb20vQ29tcGFyZSc7XG5pbXBvcnQgeyBTdWdhckVsZW1lbnQgfSBmcm9tICcuLi9ub2RlL1N1Z2FyRWxlbWVudCc7XG5pbXBvcnQgKiBhcyBTdWdhck5vZGUgZnJvbSAnLi4vbm9kZS9TdWdhck5vZGUnO1xuXG4vKipcbiAqIFRoZSBkb2N1bWVudCBhc3NvY2lhdGVkIHdpdGggdGhlIGN1cnJlbnQgZWxlbWVudFxuICogTk9URTogdGhpcyB3aWxsIHRocm93IGlmIHRoZSBvd25lciBpcyBudWxsLlxuICovXG5jb25zdCBvd25lciA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBTdWdhckVsZW1lbnQ8RG9jdW1lbnQ+ID0+XG4gIFN1Z2FyRWxlbWVudC5mcm9tRG9tKGVsZW1lbnQuZG9tLm93bmVyRG9jdW1lbnQgYXMgRG9jdW1lbnQpO1xuXG4vKipcbiAqIElmIHRoZSBlbGVtZW50IGlzIGEgZG9jdW1lbnQsIHJldHVybiBpdC4gT3RoZXJ3aXNlLCByZXR1cm4gaXRzIG93bmVyRG9jdW1lbnQuXG4gKiBAcGFyYW0gZG9zXG4gKi9cbmNvbnN0IGRvY3VtZW50T3JPd25lciA9IChkb3M6IFN1Z2FyRWxlbWVudDxOb2RlPik6IFN1Z2FyRWxlbWVudDxEb2N1bWVudD4gPT5cbiAgU3VnYXJOb2RlLmlzRG9jdW1lbnQoZG9zKSA/IGRvcyA6IG93bmVyKGRvcyk7XG5cbmNvbnN0IGRvY3VtZW50RWxlbWVudCA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBTdWdhckVsZW1lbnQ8SFRNTEVsZW1lbnQ+ID0+XG4gIFN1Z2FyRWxlbWVudC5mcm9tRG9tKGRvY3VtZW50T3JPd25lcihlbGVtZW50KS5kb20uZG9jdW1lbnRFbGVtZW50KTtcblxuLyoqXG4gKiBUaGUgd2luZG93IGVsZW1lbnQgYXNzb2NpYXRlZCB3aXRoIHRoZSBlbGVtZW50XG4gKiBOT1RFOiB0aGlzIHdpbGwgdGhyb3cgaWYgdGhlIGRlZmF1bHRWaWV3IGlzIG51bGwuXG4gKi9cbmNvbnN0IGRlZmF1bHRWaWV3ID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPik6IFN1Z2FyRWxlbWVudDxXaW5kb3c+ID0+XG4gIFN1Z2FyRWxlbWVudC5mcm9tRG9tKGRvY3VtZW50T3JPd25lcihlbGVtZW50KS5kb20uZGVmYXVsdFZpZXcgYXMgV2luZG93KTtcblxuY29uc3QgcGFyZW50ID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPik6IE9wdGlvbmFsPFN1Z2FyRWxlbWVudDxOb2RlICYgUGFyZW50Tm9kZT4+ID0+XG4gIE9wdGlvbmFsLmZyb20oZWxlbWVudC5kb20ucGFyZW50Tm9kZSkubWFwKFN1Z2FyRWxlbWVudC5mcm9tRG9tKTtcblxuLy8gQ2FzdCBkb3duIHRvIGp1c3QgYmUgU3VnYXJFbGVtZW50PE5vZGU+XG5jb25zdCBwYXJlbnROb2RlID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPik6IE9wdGlvbmFsPFN1Z2FyRWxlbWVudDxOb2RlPj4gPT5cbiAgcGFyZW50KGVsZW1lbnQpIGFzIGFueTtcblxuY29uc3QgcGFyZW50RWxlbWVudCA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBPcHRpb25hbDxTdWdhckVsZW1lbnQ8SFRNTEVsZW1lbnQ+PiA9PlxuICBPcHRpb25hbC5mcm9tKGVsZW1lbnQuZG9tLnBhcmVudEVsZW1lbnQpLm1hcChTdWdhckVsZW1lbnQuZnJvbURvbSk7XG5cbmNvbnN0IGZpbmRJbmRleCA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBPcHRpb25hbDxudW1iZXI+ID0+XG4gIHBhcmVudChlbGVtZW50KS5iaW5kKChwKSA9PiB7XG4gICAgLy8gVE9ETzogUmVmYWN0b3Igb3V0IGNoaWxkcmVuIHNvIHdlIGNhbiBhdm9pZCB0aGUgY29uc3RhbnQgdW53cmFwcGluZ1xuICAgIGNvbnN0IGtpbiA9IGNoaWxkcmVuKHApO1xuICAgIHJldHVybiBBcnIuZmluZEluZGV4KGtpbiwgKGVsZW0pID0+IENvbXBhcmUuZXEoZWxlbWVudCwgZWxlbSkpO1xuICB9KTtcblxuY29uc3QgcGFyZW50cyA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4sIGlzUm9vdD86IChlOiBTdWdhckVsZW1lbnQ8Tm9kZT4pID0+IGJvb2xlYW4pOiBTdWdhckVsZW1lbnQ8Tm9kZT5bXSA9PiB7XG4gIGNvbnN0IHN0b3AgPSBUeXBlLmlzRnVuY3Rpb24oaXNSb290KSA/IGlzUm9vdCA6IEZ1bi5uZXZlcjtcblxuICAvLyBUaGlzIGlzIHVzZWQgYSAqbG90KiBzbyBpdCBuZWVkcyB0byBiZSBwZXJmb3JtYW50LCBub3QgcmVjdXJzaXZlXG4gIGxldCBkb206IE5vZGUgPSBlbGVtZW50LmRvbTtcbiAgY29uc3QgcmV0OiBTdWdhckVsZW1lbnQ8Tm9kZT5bXSA9IFtdO1xuXG4gIHdoaWxlIChkb20ucGFyZW50Tm9kZSAhPT0gbnVsbCAmJiBkb20ucGFyZW50Tm9kZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgcmF3UGFyZW50ID0gZG9tLnBhcmVudE5vZGU7XG4gICAgY29uc3QgcCA9IFN1Z2FyRWxlbWVudC5mcm9tRG9tKHJhd1BhcmVudCk7XG4gICAgcmV0LnB1c2gocCk7XG5cbiAgICBpZiAoc3RvcChwKSA9PT0gdHJ1ZSkge1xuICAgICAgYnJlYWs7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvbSA9IHJhd1BhcmVudDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJldDtcbn07XG5cbmNvbnN0IHNpYmxpbmdzID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPik6IFN1Z2FyRWxlbWVudDxOb2RlPltdID0+IHtcbiAgLy8gVE9ETzogUmVmYWN0b3Igb3V0IGNoaWxkcmVuIHNvIHdlIGNhbiBqdXN0IG5vdCBhZGQgc2VsZiBpbnN0ZWFkIG9mIGZpbHRlcmluZyBhZnRlcndhcmRzXG4gIGNvbnN0IGZpbHRlclNlbGYgPSA8RT4gKGVsZW1lbnRzOiBTdWdhckVsZW1lbnQ8RT5bXSkgPT4gQXJyLmZpbHRlcihlbGVtZW50cywgKHgpID0+ICFDb21wYXJlLmVxKGVsZW1lbnQsIHgpKTtcblxuICByZXR1cm4gcGFyZW50KGVsZW1lbnQpLm1hcChjaGlsZHJlbikubWFwKGZpbHRlclNlbGYpLmdldE9yKFtdKTtcbn07XG5cbmNvbnN0IG9mZnNldFBhcmVudCA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8SFRNTEVsZW1lbnQ+KTogT3B0aW9uYWw8U3VnYXJFbGVtZW50PEhUTUxFbGVtZW50Pj4gPT5cbiAgT3B0aW9uYWwuZnJvbShlbGVtZW50LmRvbS5vZmZzZXRQYXJlbnQgYXMgSFRNTEVsZW1lbnQpLm1hcChTdWdhckVsZW1lbnQuZnJvbURvbSk7XG5cbmNvbnN0IHByZXZTaWJsaW5nID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPik6IE9wdGlvbmFsPFN1Z2FyRWxlbWVudDxOb2RlICYgQ2hpbGROb2RlPj4gPT5cbiAgT3B0aW9uYWwuZnJvbShlbGVtZW50LmRvbS5wcmV2aW91c1NpYmxpbmcpLm1hcChTdWdhckVsZW1lbnQuZnJvbURvbSk7XG5cbmNvbnN0IG5leHRTaWJsaW5nID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPik6IE9wdGlvbmFsPFN1Z2FyRWxlbWVudDxOb2RlICYgQ2hpbGROb2RlPj4gPT5cbiAgT3B0aW9uYWwuZnJvbShlbGVtZW50LmRvbS5uZXh0U2libGluZykubWFwKFN1Z2FyRWxlbWVudC5mcm9tRG9tKTtcblxuLy8gVGhpcyBvbmUgbmVlZHMgdG8gYmUgcmV2ZXJzZWQsIHNvIHRoZXkncmUgc3RpbGwgaW4gRE9NIG9yZGVyXG5jb25zdCBwcmV2U2libGluZ3MgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KTogU3VnYXJFbGVtZW50PE5vZGUgJiBDaGlsZE5vZGU+W10gPT5cbiAgQXJyLnJldmVyc2UoUmVjdXJzZS50b0FycmF5KGVsZW1lbnQsIHByZXZTaWJsaW5nKSk7XG5cbmNvbnN0IG5leHRTaWJsaW5ncyA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBTdWdhckVsZW1lbnQ8Tm9kZSAmIENoaWxkTm9kZT5bXSA9PlxuICBSZWN1cnNlLnRvQXJyYXkoZWxlbWVudCwgbmV4dFNpYmxpbmcpO1xuXG5jb25zdCBjaGlsZHJlbiA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBTdWdhckVsZW1lbnQ8Tm9kZSAmIENoaWxkTm9kZT5bXSA9PlxuICBBcnIubWFwKGVsZW1lbnQuZG9tLmNoaWxkTm9kZXMsIFN1Z2FyRWxlbWVudC5mcm9tRG9tKTtcblxuY29uc3QgY2hpbGQgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+LCBpbmRleDogbnVtYmVyKTogT3B0aW9uYWw8U3VnYXJFbGVtZW50PE5vZGUgJiBDaGlsZE5vZGU+PiA9PiB7XG4gIGNvbnN0IGNzID0gZWxlbWVudC5kb20uY2hpbGROb2RlcztcbiAgcmV0dXJuIE9wdGlvbmFsLmZyb20oY3NbaW5kZXhdKS5tYXAoU3VnYXJFbGVtZW50LmZyb21Eb20pO1xufTtcblxuY29uc3QgZmlyc3RDaGlsZCA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBPcHRpb25hbDxTdWdhckVsZW1lbnQ8Tm9kZSAmIENoaWxkTm9kZT4+ID0+XG4gIGNoaWxkKGVsZW1lbnQsIDApO1xuXG5jb25zdCBsYXN0Q2hpbGQgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KTogT3B0aW9uYWw8U3VnYXJFbGVtZW50PE5vZGUgJiBDaGlsZE5vZGU+PiA9PlxuICBjaGlsZChlbGVtZW50LCBlbGVtZW50LmRvbS5jaGlsZE5vZGVzLmxlbmd0aCAtIDEpO1xuXG5jb25zdCBjaGlsZE5vZGVzQ291bnQgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KTogbnVtYmVyID0+XG4gIGVsZW1lbnQuZG9tLmNoaWxkTm9kZXMubGVuZ3RoO1xuXG5jb25zdCBoYXNDaGlsZE5vZGVzID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPik6IGJvb2xlYW4gPT5cbiAgZWxlbWVudC5kb20uaGFzQ2hpbGROb2RlcygpO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVsZW1lbnRBbmRPZmZzZXQ8RT4ge1xuICByZWFkb25seSBlbGVtZW50OiBTdWdhckVsZW1lbnQ8RT47XG4gIHJlYWRvbmx5IG9mZnNldDogbnVtYmVyO1xufVxuXG5jb25zdCBzcG90ID0gPEU+KGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxFPiwgb2Zmc2V0OiBudW1iZXIpOiBFbGVtZW50QW5kT2Zmc2V0PEU+ID0+ICh7XG4gIGVsZW1lbnQsXG4gIG9mZnNldFxufSk7XG5cbmNvbnN0IGxlYWYgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+LCBvZmZzZXQ6IG51bWJlcik6IEVsZW1lbnRBbmRPZmZzZXQ8Tm9kZT4gPT4ge1xuICBjb25zdCBjcyA9IGNoaWxkcmVuKGVsZW1lbnQpO1xuICByZXR1cm4gY3MubGVuZ3RoID4gMCAmJiBvZmZzZXQgPCBjcy5sZW5ndGggPyBzcG90KGNzW29mZnNldF0sIDApIDogc3BvdChlbGVtZW50LCBvZmZzZXQpO1xufTtcblxuZXhwb3J0IHtcbiAgb3duZXIsXG4gIGRvY3VtZW50T3JPd25lcixcbiAgZGVmYXVsdFZpZXcsXG4gIGRvY3VtZW50RWxlbWVudCxcbiAgcGFyZW50LFxuICBwYXJlbnROb2RlLFxuICBwYXJlbnRFbGVtZW50LFxuICBmaW5kSW5kZXgsXG4gIHBhcmVudHMsXG4gIHNpYmxpbmdzLFxuICBwcmV2U2libGluZyxcbiAgb2Zmc2V0UGFyZW50LFxuICBwcmV2U2libGluZ3MsXG4gIG5leHRTaWJsaW5nLFxuICBuZXh0U2libGluZ3MsXG4gIGNoaWxkcmVuLFxuICBjaGlsZCxcbiAgZmlyc3RDaGlsZCxcbiAgbGFzdENoaWxkLFxuICBjaGlsZE5vZGVzQ291bnQsXG4gIGhhc0NoaWxkTm9kZXMsXG4gIGxlYWZcbn07XG4iLCJpbXBvcnQgeyBPcHRpb25hbCwgVHlwZSB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5pbXBvcnQgeyBQbGF0Zm9ybURldGVjdGlvbiB9IGZyb20gJ0BlcGhveC9zYW5kJztcblxuaW1wb3J0ICogYXMgSW5zZXJ0IGZyb20gJy4uL2RvbS9JbnNlcnQnO1xuaW1wb3J0ICogYXMgUmVtb3ZlIGZyb20gJy4uL2RvbS9SZW1vdmUnO1xuaW1wb3J0ICogYXMgU3VnYXJCb2R5IGZyb20gJy4uL25vZGUvU3VnYXJCb2R5JztcbmltcG9ydCB7IFN1Z2FyRWxlbWVudCB9IGZyb20gJy4uL25vZGUvU3VnYXJFbGVtZW50JztcblxuaW1wb3J0ICogYXMgU3VnYXJMb2NhdGlvbiBmcm9tICcuL1N1Z2FyTG9jYXRpb24nO1xuaW1wb3J0IHsgU3VnYXJQb3NpdGlvbiB9IGZyb20gJy4vU3VnYXJQb3NpdGlvbic7XG5cbmludGVyZmFjZSBTY3JvbGxDYXB0dXJlIHtcbiAgcmVhZG9ubHkgc2F2ZTogKCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgcmVzdG9yZTogKCkgPT4gdm9pZDtcbn1cblxuLy8gZ2V0IHNjcm9sbCBwb3NpdGlvbiAoeCx5KSByZWxhdGl2ZSB0byBkb2N1bWVudCBfZG9jIChvciBnbG9iYWwgaWYgbm90IHN1cHBsaWVkKVxuY29uc3QgZ2V0ID0gKF9ET0M/OiBTdWdhckVsZW1lbnQ8RG9jdW1lbnQ+KTogU3VnYXJQb3NpdGlvbiA9PiB7XG4gIGNvbnN0IGRvYyA9IF9ET0MgIT09IHVuZGVmaW5lZCA/IF9ET0MuZG9tIDogZG9jdW1lbnQ7XG5cbiAgLy8gQVNTVU1QVElPTjogVGhpcyBpcyBmb3IgY3Jvc3MtYnJvd3NlciBzdXBwb3J0LCBib2R5IHdvcmtzIGZvciBTYWZhcmkgJiBFREdFLCBhbmQgd2hlbiB3ZSBoYXZlIGFuIGlmcmFtZSBib2R5IHNjcm9sbGVyXG4gIGNvbnN0IHggPSBkb2MuYm9keS5zY3JvbGxMZWZ0IHx8IGRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgY29uc3QgeSA9IGRvYy5ib2R5LnNjcm9sbFRvcCB8fCBkb2MuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgcmV0dXJuIFN1Z2FyUG9zaXRpb24oeCwgeSk7XG59O1xuXG4vLyBTY3JvbGwgY29udGVudCB0byAoeCx5KSByZWxhdGl2ZSB0byBkb2N1bWVudCBfZG9jIChvciBnbG9iYWwgaWYgbm90IHN1cHBsaWVkKVxuY29uc3QgdG8gPSAoeDogbnVtYmVyLCB5OiBudW1iZXIsIF9ET0M/OiBTdWdhckVsZW1lbnQ8RG9jdW1lbnQ+KTogdm9pZCA9PiB7XG4gIGNvbnN0IGRvYyA9IF9ET0MgIT09IHVuZGVmaW5lZCA/IF9ET0MuZG9tIDogZG9jdW1lbnQ7XG4gIGNvbnN0IHdpbiA9IGRvYy5kZWZhdWx0VmlldztcbiAgaWYgKHdpbikge1xuICAgIHdpbi5zY3JvbGxUbyh4LCB5KTtcbiAgfVxufTtcblxuLy8gU2Nyb2xsIGNvbnRlbnQgYnkgKHgseSkgcmVsYXRpdmUgdG8gZG9jdW1lbnQgX2RvYyAob3IgZ2xvYmFsIGlmIG5vdCBzdXBwbGllZClcbmNvbnN0IGJ5ID0gKHg6IG51bWJlciwgeTogbnVtYmVyLCBfRE9DPzogU3VnYXJFbGVtZW50PERvY3VtZW50Pik6IHZvaWQgPT4ge1xuICBjb25zdCBkb2MgPSBfRE9DICE9PSB1bmRlZmluZWQgPyBfRE9DLmRvbSA6IGRvY3VtZW50O1xuICBjb25zdCB3aW4gPSBkb2MuZGVmYXVsdFZpZXc7XG4gIGlmICh3aW4pIHtcbiAgICB3aW4uc2Nyb2xsQnkoeCwgeSk7XG4gIH1cbn07XG5cbi8vIFNldCB0aGUgd2luZG93IHNjcm9sbCBwb3NpdGlvbiB0byB0aGUgZWxlbWVudFxuY29uc3Qgc2V0VG9FbGVtZW50ID0gKHdpbjogV2luZG93LCBlbGVtZW50OiBTdWdhckVsZW1lbnQ8RWxlbWVudD4pOiB2b2lkID0+IHtcbiAgY29uc3QgcG9zID0gU3VnYXJMb2NhdGlvbi5hYnNvbHV0ZShlbGVtZW50KTtcbiAgY29uc3QgZG9jID0gU3VnYXJFbGVtZW50LmZyb21Eb20od2luLmRvY3VtZW50KTtcbiAgdG8ocG9zLmxlZnQsIHBvcy50b3AsIGRvYyk7XG59O1xuXG4vLyBjYWxsIGYoKSBwcmVzZXJ2aW5nIHRoZSBvcmlnaW5hbCBzY3JvbGwgcG9zaXRpb24gcmVsYXRpdmUgdG8gZG9jdW1lbnQgZG9jXG5jb25zdCBwcmVzZXJ2ZSA9IChkb2M6IFN1Z2FyRWxlbWVudDxEb2N1bWVudD4sIGY6ICgpID0+IHZvaWQpOiB2b2lkID0+IHtcbiAgY29uc3QgYmVmb3JlID0gZ2V0KGRvYyk7XG4gIGYoKTtcbiAgY29uc3QgYWZ0ZXIgPSBnZXQoZG9jKTtcbiAgaWYgKGJlZm9yZS50b3AgIT09IGFmdGVyLnRvcCB8fCBiZWZvcmUubGVmdCAhPT0gYWZ0ZXIubGVmdCkge1xuICAgIHRvKGJlZm9yZS5sZWZ0LCBiZWZvcmUudG9wLCBkb2MpO1xuICB9XG59O1xuXG4vLyBjYXB0dXJlIHRoZSBjdXJyZW50IHNjcm9sbCBsb2NhdGlvbiBhbmQgcHJvdmlkZSBzYXZlIGFuZCByZXN0b3JlIG1ldGhvZHNcbmNvbnN0IGNhcHR1cmUgPSAoZG9jOiBTdWdhckVsZW1lbnQ8RG9jdW1lbnQ+KTogU2Nyb2xsQ2FwdHVyZSA9PiB7XG4gIGxldCBwcmV2aW91cyA9IE9wdGlvbmFsLm5vbmU8U3VnYXJQb3NpdGlvbj4oKTtcblxuICBjb25zdCBzYXZlID0gKCkgPT4ge1xuICAgIHByZXZpb3VzID0gT3B0aW9uYWwuc29tZShnZXQoZG9jKSk7XG4gIH07XG5cbiAgLy8gVE9ETzogdGhpcyBpcyBxdWl0ZSBzaW1pbGFyIHRvIHRoZSBjb2RlIGluIG5vbWFkLlxuICBjb25zdCByZXN0b3JlID0gKCkgPT4ge1xuICAgIHByZXZpb3VzLmVhY2goKHApID0+IHtcbiAgICAgIHRvKHAubGVmdCwgcC50b3AsIGRvYyk7XG4gICAgfSk7XG4gIH07XG5cbiAgc2F2ZSgpO1xuICByZXR1cm4ge1xuICAgIHNhdmUsICAgICAgLyogU2F2ZXMgdGhlIGN1cnJlbnQgcGFnZSBzY3JvbGwgcG9zaXRpb24gKi9cbiAgICByZXN0b3JlIC8qIFJlc3RvcmVzIHRoZSBwYWdlIHNjcm9sbCB0byBpdHMgZm9ybWVyIHBvc2l0aW9uIHdoZW4gaW52b2tlZCAqL1xuICB9O1xufTtcblxuLy8gVEJJTy00NDcyIFNhZmFyaSAxMCAtIFNjcm9sbGluZyB0eXBlYWhlYWQgd2l0aCBrZXlib2FyZCBzY3JvbGxzIHBhZ2VcbmNvbnN0IGludG9WaWV3ID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxFbGVtZW50PiwgYWxpZ25Ub1RvcDogYm9vbGVhbik6IHZvaWQgPT4ge1xuICBjb25zdCBpc1NhZmFyaSA9IFBsYXRmb3JtRGV0ZWN0aW9uLmRldGVjdCgpLmJyb3dzZXIuaXNTYWZhcmkoKTtcbiAgLy8gdGhpcyBtZXRob2QgaXNuJ3QgaW4gVHlwZVNjcmlwdFxuICBpZiAoaXNTYWZhcmkgJiYgVHlwZS5pc0Z1bmN0aW9uKChlbGVtZW50LmRvbSBhcyBhbnkpLnNjcm9sbEludG9WaWV3SWZOZWVkZWQpKSB7XG4gICAgKGVsZW1lbnQuZG9tIGFzIGFueSkuc2Nyb2xsSW50b1ZpZXdJZk5lZWRlZChmYWxzZSk7IC8vIGZhbHNlPWFsaWduIHRvIG5lYXJlc3QgZWRnZVxuICB9IGVsc2Uge1xuICAgIGVsZW1lbnQuZG9tLnNjcm9sbEludG9WaWV3KGFsaWduVG9Ub3ApOyAvLyB0cnVlPXRvIHRvcCwgZmFsc2U9dG8gYm90dG9tXG4gIH1cbn07XG5cbi8vIElmIHRoZSBlbGVtZW50IGlzIGFib3ZlIHRoZSBjb250YWluZXIsIG9yIGJlbG93IHRoZSBjb250YWluZXIsIHRoZW4gc2Nyb2xsIHRvIHRoZSB0b3Agb3IgYm90dG9tXG5jb25zdCBpbnRvVmlld0lmTmVlZGVkID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxFbGVtZW50PiwgY29udGFpbmVyOiBTdWdhckVsZW1lbnQ8RWxlbWVudD4pOiB2b2lkID0+IHtcbiAgY29uc3QgY29udGFpbmVyQm94ID0gY29udGFpbmVyLmRvbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgY29uc3QgZWxlbWVudEJveCA9IGVsZW1lbnQuZG9tLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICBpZiAoZWxlbWVudEJveC50b3AgPCBjb250YWluZXJCb3gudG9wKSB7XG4gICAgLy8gZWxlbWVudCB0b3AgaXMgYWJvdmUgdGhlIHZpZXdwb3J0IHRvcCwgc2Nyb2xsIHNvIGl0J3MgYXQgdGhlIHRvcFxuICAgIGludG9WaWV3KGVsZW1lbnQsIHRydWUpO1xuICB9IGVsc2UgaWYgKGVsZW1lbnRCb3guYm90dG9tID4gY29udGFpbmVyQm94LmJvdHRvbSkge1xuICAgIC8vIGVsZW1lbnQgYm90dG9tIGlzIGJlbG93IHRoZSB2aWV3cG9ydCBib3R0b20sIHNjcm9sbCBzbyBpdCdzIGF0IHRoZSBib3R0b21cbiAgICBpbnRvVmlldyhlbGVtZW50LCBmYWxzZSk7XG4gIH1cbn07XG5cbi8vIFJldHVybiB0aGUgc2Nyb2xsIGJhciB3aWR0aCAoY2FsY3VsYXRlZCBieSB0ZW1wb3JhcmlseSBpbnNlcnRpbmcgYW4gZWxlbWVudCBpbnRvIHRoZSBkb20pXG5jb25zdCBzY3JvbGxCYXJXaWR0aCA9ICgpOiBudW1iZXIgPT4ge1xuICAvLyBGcm9tIGh0dHBzOi8vZGF2aWR3YWxzaC5uYW1lL2RldGVjdC1zY3JvbGxiYXItd2lkdGhcbiAgY29uc3Qgc2Nyb2xsRGl2ID0gU3VnYXJFbGVtZW50LmZyb21IdG1sPEhUTUxEaXZFbGVtZW50PignPGRpdiBzdHlsZT1cIndpZHRoOiAxMDBweDsgaGVpZ2h0OiAxMDBweDsgb3ZlcmZsb3c6IHNjcm9sbDsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IC05OTk5cHg7XCI+PC9kaXY+Jyk7XG4gIEluc2VydC5hZnRlcihTdWdhckJvZHkuYm9keSgpLCBzY3JvbGxEaXYpO1xuICBjb25zdCB3ID0gc2Nyb2xsRGl2LmRvbS5vZmZzZXRXaWR0aCAtIHNjcm9sbERpdi5kb20uY2xpZW50V2lkdGg7XG4gIFJlbW92ZS5yZW1vdmUoc2Nyb2xsRGl2KTtcbiAgcmV0dXJuIHc7XG59O1xuXG5leHBvcnQgeyBnZXQsIHRvLCBieSwgcHJlc2VydmUsIGNhcHR1cmUsIGludG9WaWV3LCBpbnRvVmlld0lmTmVlZGVkLCBzZXRUb0VsZW1lbnQsIHNjcm9sbEJhcldpZHRoIH07XG4iLCJpbXBvcnQgeyBpbkJvZHkgfSBmcm9tICcuLi9ub2RlL1N1Z2FyQm9keSc7XG5pbXBvcnQgdHlwZSB7IFN1Z2FyRWxlbWVudCB9IGZyb20gJy4uL25vZGUvU3VnYXJFbGVtZW50JztcblxuaW1wb3J0IHsgU3VnYXJQb3NpdGlvbiB9IGZyb20gJy4vU3VnYXJQb3NpdGlvbic7XG5cbmNvbnN0IGJveFBvc2l0aW9uID0gKGRvbTogRWxlbWVudCk6IFN1Z2FyUG9zaXRpb24gPT4ge1xuICBjb25zdCBib3ggPSBkb20uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHJldHVybiBTdWdhclBvc2l0aW9uKGJveC5sZWZ0LCBib3gudG9wKTtcbn07XG5cbi8vIEF2b2lkcyBmYWxzeSBmYWxzZSBmYWxsdGhyb3VnaFxuY29uc3QgZmlyc3REZWZpbmVkT3JaZXJvID0gKGE/OiBudW1iZXIsIGI/OiBudW1iZXIpOiBudW1iZXIgPT4ge1xuICBpZiAoYSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGIgIT09IHVuZGVmaW5lZCA/IGIgOiAwO1xuICB9XG59O1xuXG5jb25zdCBhYnNvbHV0ZSA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8RWxlbWVudD4pOiBTdWdhclBvc2l0aW9uID0+IHtcbiAgY29uc3QgZG9jID0gZWxlbWVudC5kb20ub3duZXJEb2N1bWVudDtcbiAgY29uc3QgYm9keSA9IGRvYy5ib2R5O1xuICBjb25zdCB3aW4gPSBkb2MuZGVmYXVsdFZpZXc7XG4gIGNvbnN0IGh0bWwgPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuXG4gIGlmIChib2R5ID09PSBlbGVtZW50LmRvbSkge1xuICAgIHJldHVybiBTdWdhclBvc2l0aW9uKGJvZHkub2Zmc2V0TGVmdCwgYm9keS5vZmZzZXRUb3ApO1xuICB9XG5cbiAgY29uc3Qgc2Nyb2xsVG9wID0gZmlyc3REZWZpbmVkT3JaZXJvKHdpbj8ucGFnZVlPZmZzZXQsIGh0bWwuc2Nyb2xsVG9wKTtcbiAgY29uc3Qgc2Nyb2xsTGVmdCA9IGZpcnN0RGVmaW5lZE9yWmVybyh3aW4/LnBhZ2VYT2Zmc2V0LCBodG1sLnNjcm9sbExlZnQpO1xuXG4gIGNvbnN0IGNsaWVudFRvcCA9IGZpcnN0RGVmaW5lZE9yWmVybyhodG1sLmNsaWVudFRvcCwgYm9keS5jbGllbnRUb3ApO1xuICBjb25zdCBjbGllbnRMZWZ0ID0gZmlyc3REZWZpbmVkT3JaZXJvKGh0bWwuY2xpZW50TGVmdCwgYm9keS5jbGllbnRMZWZ0KTtcblxuICByZXR1cm4gdmlld3BvcnQoZWxlbWVudCkudHJhbnNsYXRlKFxuICAgIHNjcm9sbExlZnQgLSBjbGllbnRMZWZ0LFxuICAgIHNjcm9sbFRvcCAtIGNsaWVudFRvcCk7XG59O1xuXG4vLyBUaGlzIGlzIHRoZSBvbGQgJC5wb3NpdGlvbigpLCBidXQgSlF1ZXJ5IGRvZXMgbm9uc2Vuc2UgY2FsY3VsYXRpb25zLlxuLy8gV2UncmUgb25seSAxIDwtPiAxIHdpdGggdGhlIG9sZCB2YWx1ZSBpbiB0aGUgc2luZ2xlIHBsYWNlIHdlIHVzZSB0aGlzIGZ1bmN0aW9uXG4vLyAoZWdvLmFwaS5EcmFnZ2luZykgc28gdGhlIHJlc3QgY2FuIGJpdGUgbWUuXG5jb25zdCByZWxhdGl2ZSA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8SFRNTEVsZW1lbnQ+KTogU3VnYXJQb3NpdGlvbiA9PiB7XG4gIGNvbnN0IGRvbSA9IGVsZW1lbnQuZG9tO1xuICAvLyBqcXVlcnktaXNtOiB3aGVuIHN0eWxlPVwicG9zaXRpb246IGZpeGVkXCIsIHRoaXMgPT09IGJveFBvc2l0aW9uKClcbiAgLy8gYnV0IHRlc3RzIHJldmVhbCBpdCByZXR1cm5zIHRoZSBzYW1lIHRoaW5nIGFueXdheVxuICByZXR1cm4gU3VnYXJQb3NpdGlvbihkb20ub2Zmc2V0TGVmdCwgZG9tLm9mZnNldFRvcCk7XG59O1xuXG5jb25zdCB2aWV3cG9ydCA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8RWxlbWVudD4pOiBTdWdhclBvc2l0aW9uID0+IHtcbiAgY29uc3QgZG9tID0gZWxlbWVudC5kb207XG5cbiAgY29uc3QgZG9jID0gZG9tLm93bmVyRG9jdW1lbnQ7XG4gIGNvbnN0IGJvZHkgPSBkb2MuYm9keTtcblxuICBpZiAoYm9keSA9PT0gZG9tKSB7XG4gICAgcmV0dXJuIFN1Z2FyUG9zaXRpb24oYm9keS5vZmZzZXRMZWZ0LCBib2R5Lm9mZnNldFRvcCk7XG4gIH1cblxuICBpZiAoIWluQm9keShlbGVtZW50KSkge1xuICAgIHJldHVybiBTdWdhclBvc2l0aW9uKDAsIDApO1xuICB9XG5cbiAgcmV0dXJuIGJveFBvc2l0aW9uKGRvbSk7XG59O1xuXG5leHBvcnQge1xuICBhYnNvbHV0ZSxcbiAgcmVsYXRpdmUsXG4gIHZpZXdwb3J0XG59O1xuIiwiZXhwb3J0IGludGVyZmFjZSBTdWdhclBvc2l0aW9uIHtcbiAgcmVhZG9ubHkgbGVmdDogbnVtYmVyO1xuICByZWFkb25seSB0b3A6IG51bWJlcjtcbiAgcmVhZG9ubHkgdHJhbnNsYXRlOiAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IFN1Z2FyUG9zaXRpb247XG59XG5cbmNvbnN0IHIgPSAobGVmdDogbnVtYmVyLCB0b3A6IG51bWJlcik6IFN1Z2FyUG9zaXRpb24gPT4ge1xuICBjb25zdCB0cmFuc2xhdGUgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBTdWdhclBvc2l0aW9uID0+IHIobGVmdCArIHgsIHRvcCArIHkpO1xuXG4gIHJldHVybiB7XG4gICAgbGVmdCxcbiAgICB0b3AsXG4gICAgdHJhbnNsYXRlXG4gIH07XG59O1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxuZXhwb3J0IGNvbnN0IFN1Z2FyUG9zaXRpb24gPSByO1xuIiwiaW1wb3J0IHsgRnVuLCBPcHRpb25hbCB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5pbXBvcnQgeyBQbGF0Zm9ybURldGVjdGlvbiB9IGZyb20gJ0BlcGhveC9zYW5kJztcblxuaW1wb3J0IHsgZnJvbVJhd0V2ZW50IH0gZnJvbSAnLi4vLi4vaW1wbC9GaWx0ZXJlZEV2ZW50JztcbmltcG9ydCB0eXBlIHsgRXZlbnRIYW5kbGVyLCBFdmVudFVuYmluZGVyIH0gZnJvbSAnLi4vZXZlbnRzL1R5cGVzJztcbmltcG9ydCB7IFN1Z2FyRWxlbWVudCB9IGZyb20gJy4uL25vZGUvU3VnYXJFbGVtZW50JztcblxuaW1wb3J0ICogYXMgU2Nyb2xsIGZyb20gJy4vU2Nyb2xsJztcblxuZXhwb3J0IGludGVyZmFjZSBCb3VuZHMge1xuICByZWFkb25seSB4OiBudW1iZXI7XG4gIHJlYWRvbmx5IHk6IG51bWJlcjtcbiAgcmVhZG9ubHkgd2lkdGg6IG51bWJlcjtcbiAgcmVhZG9ubHkgaGVpZ2h0OiBudW1iZXI7XG4gIHJlYWRvbmx5IHJpZ2h0OiBudW1iZXI7XG4gIHJlYWRvbmx5IGJvdHRvbTogbnVtYmVyO1xufVxuXG5jb25zdCBnZXQgPSAoX3dpbj86IFdpbmRvdyk6IE9wdGlvbmFsPFZpc3VhbFZpZXdwb3J0PiA9PiB7XG4gIGNvbnN0IHdpbiA9IF93aW4gPT09IHVuZGVmaW5lZCA/IHdpbmRvdyA6IF93aW47XG4gIGlmIChQbGF0Zm9ybURldGVjdGlvbi5kZXRlY3QoKS5icm93c2VyLmlzRmlyZWZveCgpKSB7XG4gICAgLy8gVElOWS03OTg0OiBGaXJlZm94IDkxIGlzIHJldHVybmluZyBpbmNvcnJlY3QgdmFsdWVzIGZvciB2aXN1YWxWaWV3cG9ydC5wYWdlVG9wLCBzbyBkaXNhYmxlIGl0IGZvciBub3dcbiAgICByZXR1cm4gT3B0aW9uYWwubm9uZSgpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBPcHRpb25hbC5mcm9tKHdpbi52aXN1YWxWaWV3cG9ydCk7XG4gIH1cbn07XG5cbmNvbnN0IGJvdW5kcyA9ICh4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiBCb3VuZHMgPT4gKHtcbiAgeCxcbiAgeSxcbiAgd2lkdGgsXG4gIGhlaWdodCxcbiAgcmlnaHQ6IHggKyB3aWR0aCxcbiAgYm90dG9tOiB5ICsgaGVpZ2h0XG59KTtcblxuY29uc3QgZ2V0Qm91bmRzID0gKF93aW4/OiBXaW5kb3cpOiBCb3VuZHMgPT4ge1xuICBjb25zdCB3aW4gPSBfd2luID09PSB1bmRlZmluZWQgPyB3aW5kb3cgOiBfd2luO1xuICBjb25zdCBkb2MgPSB3aW4uZG9jdW1lbnQ7XG4gIGNvbnN0IHNjcm9sbCA9IFNjcm9sbC5nZXQoU3VnYXJFbGVtZW50LmZyb21Eb20oZG9jKSk7XG4gIHJldHVybiBnZXQod2luKS5mb2xkKFxuICAgICgpID0+IHtcbiAgICAgIGNvbnN0IGh0bWwgPSB3aW4uZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgLy8gRG9uJ3QgdXNlIHdpbmRvdy5pbm5lcldpZHRoL2lubmVySGVpZ2h0IGhlcmUsIGFzIHdlIGRvbid0IHdhbnQgdG8gaW5jbHVkZSBzY3JvbGxiYXJzXG4gICAgICAvLyBzaW5jZSB0aGUgcmlnaHQvYm90dG9tIHBvc2l0aW9uIGlzIGJhc2VkIG9uIHRoZSBlZGdlIG9mIHRoZSBzY3JvbGxiYXIgbm90IHRoZSB3aW5kb3dcbiAgICAgIGNvbnN0IHdpZHRoID0gaHRtbC5jbGllbnRXaWR0aDtcbiAgICAgIGNvbnN0IGhlaWdodCA9IGh0bWwuY2xpZW50SGVpZ2h0O1xuICAgICAgcmV0dXJuIGJvdW5kcyhzY3JvbGwubGVmdCwgc2Nyb2xsLnRvcCwgd2lkdGgsIGhlaWdodCk7XG4gICAgfSxcbiAgICAodmlzdWFsVmlld3BvcnQpID0+XG4gICAgICAvLyBpT1MgZG9lc24ndCB1cGRhdGUgdGhlIHBhZ2VUb3AvcGFnZUxlZnQgd2hlbiBlbGVtZW50LnNjcm9sbEludG9WaWV3KCkgaXMgY2FsbGVkLCBzbyB3ZSBuZWVkIHRvIGZhbGxiYWNrIHRvIHRoZVxuICAgICAgLy8gc2Nyb2xsIHBvc2l0aW9uIHdoaWNoIHdpbGwgYWx3YXlzIGJlIGxlc3MgdGhhbiB0aGUgcGFnZSB0b3AvbGVmdCB2YWx1ZXMgd2hlbiBwYWdlIHRvcC9sZWZ0IGFyZSBhY2N1cmF0ZS9jb3JyZWN0LlxuICAgICAgYm91bmRzKE1hdGgubWF4KHZpc3VhbFZpZXdwb3J0LnBhZ2VMZWZ0LCBzY3JvbGwubGVmdCksIE1hdGgubWF4KHZpc3VhbFZpZXdwb3J0LnBhZ2VUb3AsIHNjcm9sbC50b3ApLCB2aXN1YWxWaWV3cG9ydC53aWR0aCwgdmlzdWFsVmlld3BvcnQuaGVpZ2h0KVxuXG4gICk7XG59O1xuXG5jb25zdCBiaW5kID0gKG5hbWU6IHN0cmluZywgY2FsbGJhY2s6IEV2ZW50SGFuZGxlciwgX3dpbj86IFdpbmRvdyk6IEV2ZW50VW5iaW5kZXIgPT5cbiAgZ2V0KF93aW4pLm1hcCgodmlzdWFsVmlld3BvcnQpID0+IHtcbiAgICBjb25zdCBoYW5kbGVyID0gKGU6IEV2ZW50KSA9PiBjYWxsYmFjayhmcm9tUmF3RXZlbnQoZSkpO1xuICAgIHZpc3VhbFZpZXdwb3J0LmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgaGFuZGxlcik7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdW5iaW5kOiAoKSA9PiB2aXN1YWxWaWV3cG9ydC5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIGhhbmRsZXIpXG4gICAgfTtcbiAgfSkuZ2V0T3JUaHVuaygoKSA9PiAoe1xuICAgIHVuYmluZDogRnVuLm5vb3BcbiAgfSkpO1xuXG5leHBvcnQge1xuICBiaW5kLFxuICBnZXQsXG4gIGdldEJvdW5kc1xufTtcbiIsImltcG9ydCB7IEFyciB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmltcG9ydCB0eXBlIHsgU3VnYXJFbGVtZW50IH0gZnJvbSAnLi4vYXBpL25vZGUvU3VnYXJFbGVtZW50JztcbmltcG9ydCAqIGFzIEF0dHJMaXN0IGZyb20gJy4uL2FwaS9wcm9wZXJ0aWVzL0F0dHJMaXN0JztcblxuLy8gSUUxMSBDYW4gcmV0dXJuIHVuZGVmaW5lZCBmb3IgYSBjbGFzc0xpc3Qgb24gZWxlbWVudHMgc3VjaCBhcyBtYXRoLCBzbyB3ZSBtYWtlIHN1cmUgaXQncyBub3QgdW5kZWZpbmVkIGJlZm9yZSBhdHRlbXB0aW5nIHRvIHVzZSBpdC5cbmNvbnN0IHN1cHBvcnRzID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPik6IGVsZW1lbnQgaXMgU3VnYXJFbGVtZW50PEVsZW1lbnQ+ID0+IChlbGVtZW50LmRvbSBhcyBFbGVtZW50KS5jbGFzc0xpc3QgIT09IHVuZGVmaW5lZDtcblxuY29uc3QgZ2V0ID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxFbGVtZW50Pik6IHN0cmluZ1tdID0+IEF0dHJMaXN0LnJlYWQoZWxlbWVudCwgJ2NsYXNzJyk7XG5cbmNvbnN0IGFkZCA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8RWxlbWVudD4sIGNsYXp6OiBzdHJpbmcpOiBib29sZWFuID0+IEF0dHJMaXN0LmFkZChlbGVtZW50LCAnY2xhc3MnLCBjbGF6eik7XG5cbmNvbnN0IHJlbW92ZSA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8RWxlbWVudD4sIGNsYXp6OiBzdHJpbmcpOiBib29sZWFuID0+IEF0dHJMaXN0LnJlbW92ZShlbGVtZW50LCAnY2xhc3MnLCBjbGF6eik7XG5cbmNvbnN0IHRvZ2dsZSA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8RWxlbWVudD4sIGNsYXp6OiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgaWYgKEFyci5jb250YWlucyhnZXQoZWxlbWVudCksIGNsYXp6KSkge1xuICAgIHJldHVybiByZW1vdmUoZWxlbWVudCwgY2xhenopO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBhZGQoZWxlbWVudCwgY2xhenopO1xuICB9XG59O1xuXG5leHBvcnQge1xuICBnZXQsXG4gIGFkZCxcbiAgcmVtb3ZlLFxuICB0b2dnbGUsXG4gIHN1cHBvcnRzXG59O1xuIiwiaW1wb3J0IHsgRnVuIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0IHR5cGUgeyBFdmVudEFyZ3MsIEV2ZW50RmlsdGVyLCBFdmVudEhhbmRsZXIsIEV2ZW50VW5iaW5kZXIgfSBmcm9tICcuLi9hcGkvZXZlbnRzL1R5cGVzJztcbmltcG9ydCB7IFN1Z2FyRWxlbWVudCB9IGZyb20gJy4uL2FwaS9ub2RlL1N1Z2FyRWxlbWVudCc7XG5pbXBvcnQgKiBhcyBTdWdhclNoYWRvd0RvbSBmcm9tICcuLi9hcGkvbm9kZS9TdWdhclNoYWRvd0RvbSc7XG5cbnR5cGUgV3JhcHBlZEhhbmRsZXI8VD4gPSAocmF3RXZlbnQ6IFQpID0+IHZvaWQ7XG5cbmNvbnN0IG1rRXZlbnQgPSA8RSBleHRlbmRzIEV2ZW50LCBUIGV4dGVuZHMgTm9kZSB8IFdpbmRvdz4oXG4gIHRhcmdldDogU3VnYXJFbGVtZW50PFQ+LFxuICB4OiBFIGV4dGVuZHMgeyBjbGllbnRYOiBudW1iZXIgfSA/IG51bWJlciA6IHVuZGVmaW5lZCxcbiAgeTogRSBleHRlbmRzIHsgY2xpZW50WTogbnVtYmVyIH0gPyBudW1iZXIgOiB1bmRlZmluZWQsXG4gIHN0b3A6ICgpID0+IHZvaWQsXG4gIHByZXZlbnQ6ICgpID0+IHZvaWQsXG4gIGtpbGw6ICgpID0+IHZvaWQsXG4gIHJhdzogRVxuKTogRXZlbnRBcmdzPEUsIFQ+ID0+ICh7XG4gIHRhcmdldCxcbiAgeCxcbiAgeSxcbiAgc3RvcCxcbiAgcHJldmVudCxcbiAga2lsbCxcbiAgcmF3XG59KTtcblxuLyoqIFdyYXBzIGFuIEV2ZW50IGluIGFuIEV2ZW50QXJncyBzdHJ1Y3R1cmUuXG4gKiBUaGUgcmV0dXJuZWQgRXZlbnRBcmdzIHN0cnVjdHVyZSBoYXMgaXRzIHRhcmdldCBzZXQgdG8gdGhlIFwib3JpZ2luYWxcIiB0YXJnZXQgaWYgcG9zc2libGUuXG4gKiBTZWUgU3VnYXJTaGFkb3dEb20uZ2V0T3JpZ2luYWxFdmVudFRhcmdldFxuICovXG5jb25zdCBmcm9tUmF3RXZlbnQgPSA8RSBleHRlbmRzIEV2ZW50LCBUIGV4dGVuZHMgTm9kZSB8IFdpbmRvdyA9IE5vZGU+KHJhd0V2ZW50OiBFKTogRXZlbnRBcmdzPEUsIFQ+ID0+IHtcbiAgY29uc3QgdGFyZ2V0ID0gU3VnYXJFbGVtZW50LmZyb21Eb20oU3VnYXJTaGFkb3dEb20uZ2V0T3JpZ2luYWxFdmVudFRhcmdldChyYXdFdmVudCkuZ2V0T3IocmF3RXZlbnQudGFyZ2V0KSBhcyBUKTtcblxuICBjb25zdCBzdG9wID0gKCkgPT4gcmF3RXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgY29uc3QgcHJldmVudCA9ICgpID0+IHJhd0V2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgY29uc3Qga2lsbCA9IEZ1bi5jb21wb3NlKHByZXZlbnQsIHN0b3ApOyAvLyBtb3JlIG9mIGEgc2VxdWVuY2UgdGhhbiBhIGNvbXBvc2UsIGJ1dCBzYW1lIGVmZmVjdFxuXG4gIC8vIEZJWDogRG9uJ3QganVzdCBleHBvc2UgdGhlIHJhdyBldmVudC4gTmVlZCB0byBpZGVudGlmeSB3aGF0IG5lZWRzIHN0YW5kYXJkaXNhdGlvbi5cbiAgcmV0dXJuIG1rRXZlbnQodGFyZ2V0LCAocmF3RXZlbnQgYXMgYW55KS5jbGllbnRYLCAocmF3RXZlbnQgYXMgYW55KS5jbGllbnRZLCBzdG9wLCBwcmV2ZW50LCBraWxsLCByYXdFdmVudCk7XG59O1xuXG5jb25zdCBoYW5kbGUgPSA8RSBleHRlbmRzIEV2ZW50LCBUIGV4dGVuZHMgTm9kZSB8IFdpbmRvdz4oZmlsdGVyOiBFdmVudEZpbHRlcjxFPiwgaGFuZGxlcjogRXZlbnRIYW5kbGVyPEUsIFQ+KTogV3JhcHBlZEhhbmRsZXI8RT4gPT4gKHJhd0V2ZW50OiBFKSA9PiB7XG4gIGlmIChmaWx0ZXIocmF3RXZlbnQpKSB7XG4gICAgaGFuZGxlcihmcm9tUmF3RXZlbnQ8RSwgVD4ocmF3RXZlbnQpKTtcbiAgfVxufTtcblxuY29uc3QgYmluZGVyID0gPEUgZXh0ZW5kcyBFdmVudCwgVCBleHRlbmRzIE5vZGUgfCBXaW5kb3c+KGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxFdmVudFRhcmdldD4sIGV2ZW50OiBzdHJpbmcsIGZpbHRlcjogRXZlbnRGaWx0ZXI8RT4sIGhhbmRsZXI6IEV2ZW50SGFuZGxlcjxFLCBUPiwgdXNlQ2FwdHVyZTogYm9vbGVhbik6IEV2ZW50VW5iaW5kZXIgPT4ge1xuICBjb25zdCB3cmFwcGVkID0gaGFuZGxlPEUsIFQ+KGZpbHRlciwgaGFuZGxlcik7XG4gIC8vIElFOSBtaW5pbXVtXG4gIGVsZW1lbnQuZG9tLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIHdyYXBwZWQgYXMgRXZlbnRMaXN0ZW5lciwgdXNlQ2FwdHVyZSk7XG5cbiAgcmV0dXJuIHtcbiAgICB1bmJpbmQ6IEZ1bi5jdXJyeSh1bmJpbmQsIGVsZW1lbnQsIGV2ZW50LCB3cmFwcGVkLCB1c2VDYXB0dXJlKVxuICB9O1xufTtcblxuY29uc3QgYmluZCA9IDxFIGV4dGVuZHMgRXZlbnQsIFQgZXh0ZW5kcyBOb2RlIHwgV2luZG93PihlbGVtZW50OiBTdWdhckVsZW1lbnQ8RXZlbnRUYXJnZXQ+LCBldmVudDogc3RyaW5nLCBmaWx0ZXI6IEV2ZW50RmlsdGVyPEU+LCBoYW5kbGVyOiBFdmVudEhhbmRsZXI8RSwgVD4pOiBFdmVudFVuYmluZGVyID0+XG4gIGJpbmRlcjxFLCBUPihlbGVtZW50LCBldmVudCwgZmlsdGVyLCBoYW5kbGVyLCBmYWxzZSk7XG5cbmNvbnN0IGNhcHR1cmUgPSA8RSBleHRlbmRzIEV2ZW50LCBUIGV4dGVuZHMgTm9kZSB8IFdpbmRvdz4oZWxlbWVudDogU3VnYXJFbGVtZW50PEV2ZW50VGFyZ2V0PiwgZXZlbnQ6IHN0cmluZywgZmlsdGVyOiBFdmVudEZpbHRlcjxFPiwgaGFuZGxlcjogRXZlbnRIYW5kbGVyPEUsIFQ+KTogRXZlbnRVbmJpbmRlciA9PlxuICBiaW5kZXI8RSwgVD4oZWxlbWVudCwgZXZlbnQsIGZpbHRlciwgaGFuZGxlciwgdHJ1ZSk7XG5cbmNvbnN0IHVuYmluZCA9IDxFIGV4dGVuZHMgRXZlbnQ+KGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxFdmVudFRhcmdldD4sIGV2ZW50OiBzdHJpbmcsIGhhbmRsZXI6IFdyYXBwZWRIYW5kbGVyPEU+LCB1c2VDYXB0dXJlOiBib29sZWFuKSA9PiB7XG4gIC8vIElFOSBtaW5pbXVtXG4gIGVsZW1lbnQuZG9tLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIgYXMgRXZlbnRMaXN0ZW5lciwgdXNlQ2FwdHVyZSk7XG59O1xuXG5leHBvcnQgeyBiaW5kLCBjYXB0dXJlLCBmcm9tUmF3RXZlbnQgfTtcbiIsImltcG9ydCB7IFR5cGUgfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG4vLyBzb21lIGVsZW1lbnRzLCBzdWNoIGFzIG1hdGhtbCwgZG9uJ3QgaGF2ZSBzdHlsZSBhdHRyaWJ1dGVzXG4vLyBvdGhlcnMsIHN1Y2ggYXMgYW5ndWxhciBlbGVtZW50cywgaGF2ZSBzdHlsZSBhdHRyaWJ1dGVzIHRoYXQgYXJlbid0IGEgQ1NTU3R5bGVEZWNsYXJhdGlvblxuY29uc3QgaXNTdXBwb3J0ZWQgPSA8VCBleHRlbmRzIE5vZGU+KGRvbTogVCk6IGRvbSBpcyAoVCAmIEVsZW1lbnRDU1NJbmxpbmVTdHlsZSkgPT5cblxuICAoZG9tIGFzIGFueSkuc3R5bGUgIT09IHVuZGVmaW5lZCAmJiBUeXBlLmlzRnVuY3Rpb24oKGRvbSBhcyBhbnkpLnN0eWxlLmdldFByb3BlcnR5VmFsdWUpO1xuXG5leHBvcnQgeyBpc1N1cHBvcnRlZCB9O1xuIiwiaW1wb3J0IHsgQ2VsbCB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmltcG9ydCBQbHVnaW5NYW5hZ2VyIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvUGx1Z2luTWFuYWdlcic7XG5cbmltcG9ydCAqIGFzIEFwaSBmcm9tICcuL2FwaS9BcGknO1xuaW1wb3J0ICogYXMgQ29tbWFuZHMgZnJvbSAnLi9hcGkvQ29tbWFuZHMnO1xuaW1wb3J0ICogYXMgT3B0aW9ucyBmcm9tICcuL2FwaS9PcHRpb25zJztcbmltcG9ydCB0eXBlIHsgRnVsbFNjcmVlbkluZm8gfSBmcm9tICcuL2NvcmUvQWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBLZXlib2FyZCBmcm9tICcuL2NvcmUvS2V5Ym9hcmQnO1xuaW1wb3J0ICogYXMgQnV0dG9ucyBmcm9tICcuL3VpL0J1dHRvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCAoKTogdm9pZCA9PiB7XG4gIFBsdWdpbk1hbmFnZXIuYWRkKCdmdWxsc2NyZWVuJywgKGVkaXRvcikgPT4ge1xuICAgIGNvbnN0IGZ1bGxzY3JlZW5TdGF0ZSA9IENlbGw8RnVsbFNjcmVlbkluZm8gfCBudWxsPihudWxsKTtcblxuICAgIGlmIChlZGl0b3IuaW5saW5lKSB7XG4gICAgICByZXR1cm4gQXBpLmdldChmdWxsc2NyZWVuU3RhdGUpO1xuICAgIH1cblxuICAgIE9wdGlvbnMucmVnaXN0ZXIoZWRpdG9yKTtcbiAgICBDb21tYW5kcy5yZWdpc3RlcihlZGl0b3IsIGZ1bGxzY3JlZW5TdGF0ZSk7XG4gICAgQnV0dG9ucy5yZWdpc3RlcihlZGl0b3IsIGZ1bGxzY3JlZW5TdGF0ZSk7XG4gICAgS2V5Ym9hcmQuc2V0dXAoZWRpdG9yLCBmdWxsc2NyZWVuU3RhdGUpO1xuXG4gICAgZWRpdG9yLmFkZFNob3J0Y3V0KCdNZXRhK1NoaWZ0K0YnLCAnJywgJ21jZUZ1bGxTY3JlZW4nKTtcblxuICAgIHJldHVybiBBcGkuZ2V0KGZ1bGxzY3JlZW5TdGF0ZSk7XG4gIH0pO1xufTtcbiIsImltcG9ydCB0eXBlIHsgQ2VsbCB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmltcG9ydCB0eXBlIHsgRnVsbFNjcmVlbkluZm8gfSBmcm9tICcuLi9jb3JlL0FjdGlvbnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFwaSB7XG4gIHJlYWRvbmx5IGlzRnVsbHNjcmVlbjogKCkgPT4gYm9vbGVhbjtcbn1cblxuY29uc3QgZ2V0ID0gKGZ1bGxzY3JlZW5TdGF0ZTogQ2VsbDxGdWxsU2NyZWVuSW5mbyB8IG51bGw+KTogQXBpID0+ICh7XG4gIGlzRnVsbHNjcmVlbjogKCkgPT4gZnVsbHNjcmVlblN0YXRlLmdldCgpICE9PSBudWxsXG59KTtcblxuZXhwb3J0IHtcbiAgZ2V0XG59O1xuIiwiaW1wb3J0IHR5cGUgeyBDZWxsIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0IHR5cGUgRWRpdG9yIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvRWRpdG9yJztcblxuaW1wb3J0ICogYXMgQWN0aW9ucyBmcm9tICcuLi9jb3JlL0FjdGlvbnMnO1xuXG5jb25zdCByZWdpc3RlciA9IChlZGl0b3I6IEVkaXRvciwgZnVsbHNjcmVlblN0YXRlOiBDZWxsPEFjdGlvbnMuRnVsbFNjcmVlbkluZm8gfCBudWxsPik6IHZvaWQgPT4ge1xuICBlZGl0b3IuYWRkQ29tbWFuZCgnbWNlRnVsbFNjcmVlbicsICgpID0+IHtcbiAgICBBY3Rpb25zLnRvZ2dsZUZ1bGxzY3JlZW4oZWRpdG9yLCBmdWxsc2NyZWVuU3RhdGUpO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7XG4gIHJlZ2lzdGVyXG59O1xuIiwiaW1wb3J0IHR5cGUgRWRpdG9yIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvRWRpdG9yJztcblxuY29uc3QgZmlyZUZ1bGxzY3JlZW5TdGF0ZUNoYW5nZWQgPSAoZWRpdG9yOiBFZGl0b3IsIHN0YXRlOiBib29sZWFuKTogdm9pZCA9PiB7XG4gIGVkaXRvci5kaXNwYXRjaCgnRnVsbHNjcmVlblN0YXRlQ2hhbmdlZCcsIHsgc3RhdGUgfSk7XG4gIGVkaXRvci5kaXNwYXRjaCgnUmVzaXplRWRpdG9yJyk7XG59O1xuXG5leHBvcnQge1xuICBmaXJlRnVsbHNjcmVlblN0YXRlQ2hhbmdlZFxufTtcbiIsImltcG9ydCB0eXBlIEVkaXRvciBmcm9tICd0aW55bWNlL2NvcmUvYXBpL0VkaXRvcic7XG5pbXBvcnQgdHlwZSB7IEVkaXRvck9wdGlvbnMgfSBmcm9tICd0aW55bWNlL2NvcmUvYXBpL09wdGlvblR5cGVzJztcblxuY29uc3Qgb3B0aW9uOiB7XG4gIDxLIGV4dGVuZHMga2V5b2YgRWRpdG9yT3B0aW9ucz4obmFtZTogSyk6IChlZGl0b3I6IEVkaXRvcikgPT4gRWRpdG9yT3B0aW9uc1tLXTtcbiAgPFQ+KG5hbWU6IHN0cmluZyk6IChlZGl0b3I6IEVkaXRvcikgPT4gVDtcbn0gPSAobmFtZTogc3RyaW5nKSA9PiAoZWRpdG9yOiBFZGl0b3IpID0+XG4gIGVkaXRvci5vcHRpb25zLmdldChuYW1lKTtcblxuY29uc3QgcmVnaXN0ZXIgPSAoZWRpdG9yOiBFZGl0b3IpOiB2b2lkID0+IHtcbiAgY29uc3QgcmVnaXN0ZXJPcHRpb24gPSBlZGl0b3Iub3B0aW9ucy5yZWdpc3RlcjtcblxuICByZWdpc3Rlck9wdGlvbignZnVsbHNjcmVlbl9uYXRpdmUnLCB7XG4gICAgcHJvY2Vzc29yOiAnYm9vbGVhbicsXG4gICAgZGVmYXVsdDogZmFsc2VcbiAgfSk7XG59O1xuXG5jb25zdCBnZXRGdWxsc2NyZWVuTmF0aXZlID0gb3B0aW9uPGJvb2xlYW4+KCdmdWxsc2NyZWVuX25hdGl2ZScpO1xuXG5leHBvcnQge1xuICByZWdpc3RlcixcbiAgZ2V0RnVsbHNjcmVlbk5hdGl2ZVxufTtcbiIsImltcG9ydCB7IHR5cGUgQ2VsbCwgRnVuLCBPcHRpb25hbCwgT3B0aW9uYWxzLCBTaW5nbGV0b24sIFRocm90dGxlciB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5pbXBvcnQgeyBDbGFzcywgQ3NzLCBEb21FdmVudCwgdHlwZSBFdmVudFVuYmluZGVyLCBTdWdhckVsZW1lbnQsIFN1Z2FyU2hhZG93RG9tLCBUcmF2ZXJzZSwgV2luZG93VmlzdWFsVmlld3BvcnQsIFN1Z2FyTm9kZSB9IGZyb20gJ0BlcGhveC9zdWdhcic7XG5cbmltcG9ydCBET01VdGlscyBmcm9tICd0aW55bWNlL2NvcmUvYXBpL2RvbS9ET01VdGlscyc7XG5pbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuaW1wb3J0IEVudiBmcm9tICd0aW55bWNlL2NvcmUvYXBpL0Vudic7XG5cbmltcG9ydCAqIGFzIEV2ZW50cyBmcm9tICcuLi9hcGkvRXZlbnRzJztcbmltcG9ydCAqIGFzIE9wdGlvbnMgZnJvbSAnLi4vYXBpL09wdGlvbnMnO1xuXG5pbXBvcnQgeyBleGl0RnVsbHNjcmVlbiwgZ2V0RnVsbHNjcmVlbmNoYW5nZUV2ZW50TmFtZSwgZ2V0RnVsbHNjcmVlblJvb3QsIGlzRnVsbHNjcmVlbkVsZW1lbnQsIHJlcXVlc3RGdWxsc2NyZWVuIH0gZnJvbSAnLi9OYXRpdmVGdWxsc2NyZWVuJztcbmltcG9ydCAqIGFzIFRob3IgZnJvbSAnLi9UaG9yJztcblxuaW50ZXJmYWNlIFNjcm9sbFBvcyB7XG4gIHJlYWRvbmx5IHg6IG51bWJlcjtcbiAgcmVhZG9ubHkgeTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZ1bGxTY3JlZW5JbmZvIHtcbiAgcmVhZG9ubHkgc2Nyb2xsUG9zOiBTY3JvbGxQb3M7XG4gIHJlYWRvbmx5IGNvbnRhaW5lcldpZHRoOiBzdHJpbmc7XG4gIHJlYWRvbmx5IGNvbnRhaW5lckhlaWdodDogc3RyaW5nO1xuICByZWFkb25seSBjb250YWluZXJUb3A6IHN0cmluZztcbiAgcmVhZG9ubHkgY29udGFpbmVyTGVmdDogc3RyaW5nO1xuICByZWFkb25seSBpZnJhbWVXaWR0aDogc3RyaW5nO1xuICByZWFkb25seSBpZnJhbWVIZWlnaHQ6IHN0cmluZztcbiAgcmVhZG9ubHkgZnVsbHNjcmVlbkNoYW5nZUhhbmRsZXI6IEV2ZW50VW5iaW5kZXI7XG4gIHJlYWRvbmx5IHNpbmtDc3NQb3NpdGlvbjogT3B0aW9uYWw8c3RyaW5nPjtcbn1cblxuY29uc3QgRE9NID0gRE9NVXRpbHMuRE9NO1xuXG5jb25zdCBnZXRTY3JvbGxQb3MgPSAoKTogU2Nyb2xsUG9zID0+XG4gIFdpbmRvd1Zpc3VhbFZpZXdwb3J0LmdldEJvdW5kcyh3aW5kb3cpO1xuXG5jb25zdCBzZXRTY3JvbGxQb3MgPSAocG9zOiBTY3JvbGxQb3MpOiB2b2lkID0+XG4gIHdpbmRvdy5zY3JvbGxUbyhwb3MueCwgcG9zLnkpO1xuXG5jb25zdCB2aWV3cG9ydFVwZGF0ZSA9IFdpbmRvd1Zpc3VhbFZpZXdwb3J0LmdldCgpLmZvbGQoXG4gICgpID0+ICh7IGJpbmQ6IEZ1bi5ub29wLCB1bmJpbmQ6IEZ1bi5ub29wIH0pLFxuICAodmlzdWFsVmlld3BvcnQpID0+IHtcbiAgICBjb25zdCBlZGl0b3JDb250YWluZXIgPSBTaW5nbGV0b24udmFsdWU8U3VnYXJFbGVtZW50PEhUTUxFbGVtZW50Pj4oKTtcbiAgICBjb25zdCByZXNpemVCaW5kZXIgPSBTaW5nbGV0b24udW5iaW5kYWJsZSgpO1xuICAgIGNvbnN0IHNjcm9sbEJpbmRlciA9IFNpbmdsZXRvbi51bmJpbmRhYmxlKCk7XG5cbiAgICBjb25zdCByZWZyZXNoU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSAwO1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA9IDA7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlZnJlc2hWaXN1YWxWaWV3cG9ydCA9ICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICBlZGl0b3JDb250YWluZXIub24oKGNvbnRhaW5lcikgPT4gQ3NzLnNldEFsbChjb250YWluZXIsIHtcbiAgICAgICAgICB0b3A6IHZpc3VhbFZpZXdwb3J0Lm9mZnNldFRvcCArICdweCcsXG4gICAgICAgICAgbGVmdDogdmlzdWFsVmlld3BvcnQub2Zmc2V0TGVmdCArICdweCcsXG4gICAgICAgICAgaGVpZ2h0OiB2aXN1YWxWaWV3cG9ydC5oZWlnaHQgKyAncHgnLFxuICAgICAgICAgIHdpZHRoOiB2aXN1YWxWaWV3cG9ydC53aWR0aCArICdweCdcbiAgICAgICAgfSkpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHVwZGF0ZSA9IFRocm90dGxlci5maXJzdCgoKSA9PiB7XG4gICAgICByZWZyZXNoU2Nyb2xsKCk7XG4gICAgICByZWZyZXNoVmlzdWFsVmlld3BvcnQoKTtcbiAgICB9LCA1MCk7XG5cbiAgICBjb25zdCBiaW5kID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxIVE1MRWxlbWVudD4pID0+IHtcbiAgICAgIGVkaXRvckNvbnRhaW5lci5zZXQoZWxlbWVudCk7XG4gICAgICB1cGRhdGUudGhyb3R0bGUoKTtcbiAgICAgIHJlc2l6ZUJpbmRlci5zZXQoV2luZG93VmlzdWFsVmlld3BvcnQuYmluZCgncmVzaXplJywgdXBkYXRlLnRocm90dGxlKSk7XG4gICAgICBzY3JvbGxCaW5kZXIuc2V0KFdpbmRvd1Zpc3VhbFZpZXdwb3J0LmJpbmQoJ3Njcm9sbCcsIHVwZGF0ZS50aHJvdHRsZSkpO1xuICAgIH07XG5cbiAgICBjb25zdCB1bmJpbmQgPSAoKSA9PiB7XG4gICAgICBlZGl0b3JDb250YWluZXIub24oKCkgPT4ge1xuICAgICAgICByZXNpemVCaW5kZXIuY2xlYXIoKTtcbiAgICAgICAgc2Nyb2xsQmluZGVyLmNsZWFyKCk7XG4gICAgICB9KTtcbiAgICAgIGVkaXRvckNvbnRhaW5lci5jbGVhcigpO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgYmluZCxcbiAgICAgIHVuYmluZFxuICAgIH07XG4gIH1cbik7XG5cbmNvbnN0IHRvZ2dsZUZ1bGxzY3JlZW4gPSAoZWRpdG9yOiBFZGl0b3IsIGZ1bGxzY3JlZW5TdGF0ZTogQ2VsbDxGdWxsU2NyZWVuSW5mbyB8IG51bGw+KTogdm9pZCA9PiB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICBjb25zdCBkb2N1bWVudEVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIGNvbnN0IGVkaXRvckNvbnRhaW5lciA9IGVkaXRvci5nZXRDb250YWluZXIoKTtcbiAgY29uc3QgZWRpdG9yQ29udGFpbmVyUyA9IFN1Z2FyRWxlbWVudC5mcm9tRG9tKGVkaXRvckNvbnRhaW5lcik7XG4gIGNvbnN0IHNpbmtDb250YWluZXJTID0gVHJhdmVyc2UubmV4dFNpYmxpbmcoZWRpdG9yQ29udGFpbmVyUylcbiAgICAuZmlsdGVyKChlbG0pOiBlbG0gaXMgU3VnYXJFbGVtZW50PEhUTUxFbGVtZW50PiA9PiBTdWdhck5vZGUuaXNIVE1MRWxlbWVudChlbG0pICYmIENsYXNzLmhhcyhlbG0sICd0b3gtc2lsdmVyLXNpbmsnKSk7XG5cbiAgY29uc3QgZnVsbHNjcmVlblJvb3QgPSBnZXRGdWxsc2NyZWVuUm9vdChlZGl0b3IpO1xuXG4gIGNvbnN0IGZ1bGxzY3JlZW5JbmZvOiBGdWxsU2NyZWVuSW5mbyB8IG51bGwgPSBmdWxsc2NyZWVuU3RhdGUuZ2V0KCk7XG4gIGNvbnN0IGVkaXRvckJvZHkgPSBTdWdhckVsZW1lbnQuZnJvbURvbShlZGl0b3IuZ2V0Qm9keSgpKTtcblxuICBjb25zdCBpc1RvdWNoID0gRW52LmRldmljZVR5cGUuaXNUb3VjaCgpO1xuXG4gIGNvbnN0IGVkaXRvckNvbnRhaW5lclN0eWxlID0gZWRpdG9yQ29udGFpbmVyLnN0eWxlO1xuXG4gIGNvbnN0IGlmcmFtZSA9IGVkaXRvci5pZnJhbWVFbGVtZW50IGFzIEhUTUxJRnJhbWVFbGVtZW50O1xuICBjb25zdCBpZnJhbWVTdHlsZSA9IGlmcmFtZT8uc3R5bGU7XG5cbiAgY29uc3QgaGFuZGxlQ2xhc3NlcyA9IChoYW5kbGVyOiAoZWxtOiBzdHJpbmcgfCBFbGVtZW50IHwgRWxlbWVudFtdLCBjbHM6IHN0cmluZykgPT4gdm9pZCkgPT4ge1xuICAgIGhhbmRsZXIoYm9keSwgJ3RveC1mdWxsc2NyZWVuJyk7XG4gICAgaGFuZGxlcihkb2N1bWVudEVsZW1lbnQsICd0b3gtZnVsbHNjcmVlbicpO1xuICAgIGhhbmRsZXIoZWRpdG9yQ29udGFpbmVyLCAndG94LWZ1bGxzY3JlZW4nKTtcbiAgICBTdWdhclNoYWRvd0RvbS5nZXRTaGFkb3dSb290KGVkaXRvckNvbnRhaW5lclMpXG4gICAgICAubWFwKChyb290KSA9PiBTdWdhclNoYWRvd0RvbS5nZXRTaGFkb3dIb3N0KHJvb3QpLmRvbSlcbiAgICAgIC5lYWNoKChob3N0KSA9PiB7XG4gICAgICAgIGhhbmRsZXIoaG9zdCwgJ3RveC1mdWxsc2NyZWVuJyk7XG4gICAgICAgIGhhbmRsZXIoaG9zdCwgJ3RveC1zaGFkb3dob3N0Jyk7XG4gICAgICB9KTtcbiAgfTtcblxuICBjb25zdCBjbGVhbnVwID0gKCkgPT4ge1xuICAgIGlmIChpc1RvdWNoKSB7XG4gICAgICBUaG9yLnJlc3RvcmVTdHlsZXMoZWRpdG9yLmRvbSk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2xhc3NlcyhET00ucmVtb3ZlQ2xhc3MpO1xuXG4gICAgdmlld3BvcnRVcGRhdGUudW5iaW5kKCk7XG4gICAgT3B0aW9uYWwuZnJvbShmdWxsc2NyZWVuU3RhdGUuZ2V0KCkpLmVhY2goKGluZm8pID0+IGluZm8uZnVsbHNjcmVlbkNoYW5nZUhhbmRsZXIudW5iaW5kKCkpO1xuICB9O1xuXG4gIGlmICghZnVsbHNjcmVlbkluZm8pIHtcbiAgICBjb25zdCBmdWxsc2NyZWVuQ2hhbmdlSGFuZGxlciA9IERvbUV2ZW50LmJpbmQoVHJhdmVyc2Uub3duZXIoZnVsbHNjcmVlblJvb3QpLCBnZXRGdWxsc2NyZWVuY2hhbmdlRXZlbnROYW1lKCksIChfZXZ0KSA9PiB7XG4gICAgICBpZiAoT3B0aW9ucy5nZXRGdWxsc2NyZWVuTmF0aXZlKGVkaXRvcikpIHtcbiAgICAgICAgLy8gaWYgd2UgaGF2ZSBleGl0ZWQgYnJvd3NlciBmdWxsc2NyZWVuIHdpdGggRXNjYXBlIHRoZW4gZXhpdCBlZGl0b3IgZnVsbHNjcmVlbiB0b29cbiAgICAgICAgaWYgKCFpc0Z1bGxzY3JlZW5FbGVtZW50KGZ1bGxzY3JlZW5Sb290KSAmJiBmdWxsc2NyZWVuU3RhdGUuZ2V0KCkgIT09IG51bGwpIHtcbiAgICAgICAgICB0b2dnbGVGdWxsc2NyZWVuKGVkaXRvciwgZnVsbHNjcmVlblN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgbmV3RnVsbFNjcmVlbkluZm86IEZ1bGxTY3JlZW5JbmZvID0ge1xuICAgICAgc2Nyb2xsUG9zOiBnZXRTY3JvbGxQb3MoKSxcbiAgICAgIGNvbnRhaW5lcldpZHRoOiBlZGl0b3JDb250YWluZXJTdHlsZS53aWR0aCxcbiAgICAgIGNvbnRhaW5lckhlaWdodDogZWRpdG9yQ29udGFpbmVyU3R5bGUuaGVpZ2h0LFxuICAgICAgY29udGFpbmVyVG9wOiBlZGl0b3JDb250YWluZXJTdHlsZS50b3AsXG4gICAgICBjb250YWluZXJMZWZ0OiBlZGl0b3JDb250YWluZXJTdHlsZS5sZWZ0LFxuICAgICAgaWZyYW1lV2lkdGg6IGlmcmFtZVN0eWxlLndpZHRoLFxuICAgICAgaWZyYW1lSGVpZ2h0OiBpZnJhbWVTdHlsZS5oZWlnaHQsXG4gICAgICBmdWxsc2NyZWVuQ2hhbmdlSGFuZGxlcixcbiAgICAgIHNpbmtDc3NQb3NpdGlvbjogc2lua0NvbnRhaW5lclMubWFwKChlbG0pID0+IENzcy5nZXQoZWxtLCAncG9zaXRpb24nKSlcbiAgICB9O1xuXG4gICAgaWYgKGlzVG91Y2gpIHtcbiAgICAgIFRob3IuY2xvYmJlclN0eWxlcyhlZGl0b3IuZG9tLCBlZGl0b3JDb250YWluZXJTLCBlZGl0b3JCb2R5KTtcbiAgICB9XG5cbiAgICBpZnJhbWVTdHlsZS53aWR0aCA9IGlmcmFtZVN0eWxlLmhlaWdodCA9ICcxMDAlJztcbiAgICBlZGl0b3JDb250YWluZXJTdHlsZS53aWR0aCA9IGVkaXRvckNvbnRhaW5lclN0eWxlLmhlaWdodCA9ICcnO1xuXG4gICAgaGFuZGxlQ2xhc3NlcyhET00uYWRkQ2xhc3MpO1xuICAgIHNpbmtDb250YWluZXJTLmVhY2goKGVsbSkgPT4ge1xuICAgICAgQ3NzLnNldChlbG0sICdwb3NpdGlvbicsICdmaXhlZCcpO1xuICAgIH0pO1xuXG4gICAgdmlld3BvcnRVcGRhdGUuYmluZChlZGl0b3JDb250YWluZXJTKTtcblxuICAgIGVkaXRvci5vbigncmVtb3ZlJywgY2xlYW51cCk7XG5cbiAgICBmdWxsc2NyZWVuU3RhdGUuc2V0KG5ld0Z1bGxTY3JlZW5JbmZvKTtcbiAgICBpZiAoT3B0aW9ucy5nZXRGdWxsc2NyZWVuTmF0aXZlKGVkaXRvcikpIHtcbiAgICAgIHJlcXVlc3RGdWxsc2NyZWVuKGZ1bGxzY3JlZW5Sb290KTtcbiAgICB9XG4gICAgRXZlbnRzLmZpcmVGdWxsc2NyZWVuU3RhdGVDaGFuZ2VkKGVkaXRvciwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgZnVsbHNjcmVlbkluZm8uZnVsbHNjcmVlbkNoYW5nZUhhbmRsZXIudW5iaW5kKCk7XG4gICAgaWYgKE9wdGlvbnMuZ2V0RnVsbHNjcmVlbk5hdGl2ZShlZGl0b3IpICYmIGlzRnVsbHNjcmVlbkVsZW1lbnQoZnVsbHNjcmVlblJvb3QpKSB7XG4gICAgICBleGl0RnVsbHNjcmVlbihUcmF2ZXJzZS5vd25lcihmdWxsc2NyZWVuUm9vdCkpO1xuICAgIH1cbiAgICBpZnJhbWVTdHlsZS53aWR0aCA9IGZ1bGxzY3JlZW5JbmZvLmlmcmFtZVdpZHRoO1xuICAgIGlmcmFtZVN0eWxlLmhlaWdodCA9IGZ1bGxzY3JlZW5JbmZvLmlmcmFtZUhlaWdodDtcblxuICAgIGVkaXRvckNvbnRhaW5lclN0eWxlLndpZHRoID0gZnVsbHNjcmVlbkluZm8uY29udGFpbmVyV2lkdGg7XG4gICAgZWRpdG9yQ29udGFpbmVyU3R5bGUuaGVpZ2h0ID0gZnVsbHNjcmVlbkluZm8uY29udGFpbmVySGVpZ2h0O1xuICAgIGVkaXRvckNvbnRhaW5lclN0eWxlLnRvcCA9IGZ1bGxzY3JlZW5JbmZvLmNvbnRhaW5lclRvcDtcbiAgICBlZGl0b3JDb250YWluZXJTdHlsZS5sZWZ0ID0gZnVsbHNjcmVlbkluZm8uY29udGFpbmVyTGVmdDtcblxuICAgIE9wdGlvbmFscy5saWZ0MihzaW5rQ29udGFpbmVyUywgZnVsbHNjcmVlbkluZm8uc2lua0Nzc1Bvc2l0aW9uLCAoZWxtLCB2YWwpID0+IHtcbiAgICAgIENzcy5zZXQoZWxtLCAncG9zaXRpb24nLCB2YWwpO1xuICAgIH0pO1xuXG4gICAgY2xlYW51cCgpO1xuICAgIHNldFNjcm9sbFBvcyhmdWxsc2NyZWVuSW5mby5zY3JvbGxQb3MpO1xuXG4gICAgZnVsbHNjcmVlblN0YXRlLnNldChudWxsKTtcbiAgICBFdmVudHMuZmlyZUZ1bGxzY3JlZW5TdGF0ZUNoYW5nZWQoZWRpdG9yLCBmYWxzZSk7XG4gICAgZWRpdG9yLm9mZigncmVtb3ZlJywgY2xlYW51cCk7XG4gIH1cbn07XG5cbmV4cG9ydCB7XG4gIHRvZ2dsZUZ1bGxzY3JlZW5cbn07XG4iLCJpbXBvcnQgdHlwZSB7IENlbGwgfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5pbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuaW1wb3J0IFZLIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvdXRpbC9WSyc7XG5cbmltcG9ydCB0eXBlIHsgRnVsbFNjcmVlbkluZm8gfSBmcm9tICcuL0FjdGlvbnMnO1xuXG5jb25zdCBzZXR1cCA9IChlZGl0b3I6IEVkaXRvciwgZnVsbHNjcmVlblN0YXRlOiBDZWxsPEZ1bGxTY3JlZW5JbmZvIHwgbnVsbD4pOiB2b2lkID0+IHtcbiAgZWRpdG9yLm9uKCdpbml0JywgKCkgPT4ge1xuICAgIGVkaXRvci5vbigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgICBpZiAoZS5rZXlDb2RlID09PSBWSy5UQUIgJiYgIShlLm1ldGFLZXkgfHwgZS5jdHJsS2V5KSAmJiBmdWxsc2NyZWVuU3RhdGUuZ2V0KCkpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7XG4gIHNldHVwXG59O1xuXG4iLCJpbXBvcnQgeyBTdWdhckJvZHksIFN1Z2FyRWxlbWVudCwgU3VnYXJTaGFkb3dEb20sIFRyYXZlcnNlIH0gZnJvbSAnQGVwaG94L3N1Z2FyJztcblxuaW1wb3J0IHR5cGUgRWRpdG9yIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvRWRpdG9yJztcblxuZXhwb3J0IGNvbnN0IGdldEZ1bGxzY3JlZW5Sb290ID0gKGVkaXRvcjogRWRpdG9yKTogU3VnYXJFbGVtZW50PEVsZW1lbnQ+ID0+IHtcbiAgY29uc3QgZWxlbSA9IFN1Z2FyRWxlbWVudC5mcm9tRG9tKGVkaXRvci5nZXRFbGVtZW50KCkpO1xuICByZXR1cm4gU3VnYXJTaGFkb3dEb20uZ2V0U2hhZG93Um9vdChlbGVtKS5tYXAoU3VnYXJTaGFkb3dEb20uZ2V0U2hhZG93SG9zdClcbiAgICAuZ2V0T3JUaHVuaygoKSA9PiBTdWdhckJvZHkuZ2V0Qm9keShUcmF2ZXJzZS5vd25lcihlbGVtKSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEZ1bGxzY3JlZW5FbGVtZW50ID0gKHJvb3Q6IERvY3VtZW50T3JTaGFkb3dSb290KTogRWxlbWVudCB8IG51bGwgPT4ge1xuICBpZiAocm9vdC5mdWxsc2NyZWVuRWxlbWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHJvb3QuZnVsbHNjcmVlbkVsZW1lbnQ7XG4gIH0gZWxzZSBpZiAoKHJvb3QgYXMgYW55KS5tc0Z1bGxzY3JlZW5FbGVtZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gKHJvb3QgYXMgYW55KS5tc0Z1bGxzY3JlZW5FbGVtZW50IGFzIEVsZW1lbnQgfCBudWxsO1xuICB9IGVsc2UgaWYgKChyb290IGFzIGFueSkud2Via2l0RnVsbHNjcmVlbkVsZW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAocm9vdCBhcyBhbnkpLndlYmtpdEZ1bGxzY3JlZW5FbGVtZW50IGFzIEVsZW1lbnQgfCBudWxsO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RnVsbHNjcmVlbmNoYW5nZUV2ZW50TmFtZSA9ICgpOiBzdHJpbmcgPT4ge1xuICBpZiAoZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAnZnVsbHNjcmVlbmNoYW5nZSc7XG4gIH0gZWxzZSBpZiAoKGRvY3VtZW50IGFzIGFueSkubXNGdWxsc2NyZWVuRWxlbWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuICdNU0Z1bGxzY3JlZW5DaGFuZ2UnOyAvLyB3YXJuaW5nLCBzZWVtcyB0byBiZSBjYXNlIHNlbnNpdGl2ZVxuICB9IGVsc2UgaWYgKChkb2N1bWVudCBhcyBhbnkpLndlYmtpdEZ1bGxzY3JlZW5FbGVtZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gJ3dlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UnO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAnZnVsbHNjcmVlbmNoYW5nZSc7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0RnVsbHNjcmVlbiA9IChzdWdhckVsZW06IFN1Z2FyRWxlbWVudDxFbGVtZW50Pik6IHZvaWQgPT4ge1xuICBjb25zdCBlbGVtID0gc3VnYXJFbGVtLmRvbTtcbiAgaWYgKGVsZW0ucmVxdWVzdEZ1bGxzY3JlZW4pIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzXG4gICAgZWxlbS5yZXF1ZXN0RnVsbHNjcmVlbigpO1xuICB9IGVsc2UgaWYgKChlbGVtIGFzIGFueSkubXNSZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgIChlbGVtIGFzIGFueSkubXNSZXF1ZXN0RnVsbHNjcmVlbigpO1xuICB9IGVsc2UgaWYgKChlbGVtIGFzIGFueSkud2Via2l0UmVxdWVzdEZ1bGxTY3JlZW4pIHtcbiAgICAoZWxlbSBhcyBhbnkpLndlYmtpdFJlcXVlc3RGdWxsU2NyZWVuKCk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBleGl0RnVsbHNjcmVlbiA9IChzdWdhckRvYzogU3VnYXJFbGVtZW50PERvY3VtZW50Pik6IHZvaWQgPT4ge1xuICBjb25zdCBkb2MgPSBzdWdhckRvYy5kb207XG4gIGlmIChkb2MuZXhpdEZ1bGxzY3JlZW4pIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzXG4gICAgZG9jLmV4aXRGdWxsc2NyZWVuKCk7XG4gIH0gZWxzZSBpZiAoKGRvYyBhcyBhbnkpLm1zRXhpdEZ1bGxzY3JlZW4pIHtcbiAgICAoZG9jIGFzIGFueSkubXNFeGl0RnVsbHNjcmVlbigpO1xuICB9IGVsc2UgaWYgKChkb2MgYXMgYW55KS53ZWJraXRDYW5jZWxGdWxsU2NyZWVuKSB7XG4gICAgKGRvYyBhcyBhbnkpLndlYmtpdENhbmNlbEZ1bGxTY3JlZW4oKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGlzRnVsbHNjcmVlbkVsZW1lbnQgPSAoZWxlbTogU3VnYXJFbGVtZW50PEVsZW1lbnQ+KTogYm9vbGVhbiA9PlxuICBlbGVtLmRvbSA9PT0gZ2V0RnVsbHNjcmVlbkVsZW1lbnQoVHJhdmVyc2Uub3duZXIoZWxlbSkuZG9tKTtcbiIsImltcG9ydCB7IEFyciB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5pbXBvcnQgeyBBdHRyaWJ1dGUsIENzcywgU2VsZWN0b3JGaWx0ZXIsIHR5cGUgU3VnYXJFbGVtZW50IH0gZnJvbSAnQGVwaG94L3N1Z2FyJztcblxuaW1wb3J0IHR5cGUgRE9NVXRpbHMgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9kb20vRE9NVXRpbHMnO1xuaW1wb3J0IEVudiBmcm9tICd0aW55bWNlL2NvcmUvYXBpL0Vudic7XG5cbmNvbnN0IGF0dHIgPSAnZGF0YS1lcGhveC1tb2JpbGUtZnVsbHNjcmVlbi1zdHlsZSc7XG5jb25zdCBzaWJsaW5nU3R5bGVzID0gJ2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnQ7JztcbmNvbnN0IGFuY2VzdG9yUG9zaXRpb24gPSAncG9zaXRpb246YWJzb2x1dGUhaW1wb3J0YW50Oyc7XG4vLyBUSU5ZLTM0MDcgYW5jZXN0b3JzIG5lZWQgJ2hlaWdodDoxMDAlIWltcG9ydGFudDtvdmVyZmxvdzp2aXNpYmxlIWltcG9ydGFudDsnIHRvIHByZXZlbnQgY29sbGFwc2VkIGFuY2VzdG9ycyBoaWRpbmcgdGhlIGVkaXRvclxuY29uc3QgYW5jZXN0b3JTdHlsZXMgPSAndG9wOjAhaW1wb3J0YW50O2xlZnQ6MCFpbXBvcnRhbnQ7bWFyZ2luOjAhaW1wb3J0YW50O3BhZGRpbmc6MCFpbXBvcnRhbnQ7d2lkdGg6MTAwJSFpbXBvcnRhbnQ7aGVpZ2h0OjEwMCUhaW1wb3J0YW50O292ZXJmbG93OnZpc2libGUhaW1wb3J0YW50Oyc7XG5jb25zdCBiZ0ZhbGxiYWNrID0gJ2JhY2tncm91bmQtY29sb3I6cmdiKDI1NSwyNTUsMjU1KSFpbXBvcnRhbnQ7JztcblxuY29uc3QgaXNBbmRyb2lkID0gRW52Lm9zLmlzQW5kcm9pZCgpO1xuXG5jb25zdCBtYXRjaENvbG9yID0gKGVkaXRvckJvZHk6IFN1Z2FyRWxlbWVudDxFbGVtZW50Pik6IHN0cmluZyA9PiB7XG4gIC8vIGluIGlPUyB5b3UgY2FuIG92ZXJzY3JvbGwsIHNvbWV0aW1lcyB3aGVuIHlvdSBvdmVyc2Nyb2xsIHlvdSBjYW4gcmV2ZWFsIHRoZSBiZ2NvbG9yIG9mIGFuIGVsZW1lbnQgYmVuZWF0aCxcbiAgLy8gYnkgbWF0Y2hpbmcgdGhlIGJnIGNvbG9yIGFuZCBjbG9iYmVyaW5nIGVuc3VyZXMgYW55IHJldmVhbHMgYXJlICdjYW1vdWZsYWdlZCcgdGhlIHNhbWUgY29sb3JcbiAgY29uc3QgY29sb3IgPSBDc3MuZ2V0KGVkaXRvckJvZHksICdiYWNrZ3JvdW5kLWNvbG9yJyk7XG4gIHJldHVybiAoY29sb3IgIT09IHVuZGVmaW5lZCAmJiBjb2xvciAhPT0gJycpID8gJ2JhY2tncm91bmQtY29sb3I6JyArIGNvbG9yICsgJyFpbXBvcnRhbnQnIDogYmdGYWxsYmFjaztcbn07XG5cbi8vIFdlIGNsb2JiZXIgYWxsIHRhZ3MsIGRpcmVjdCBhbmNlc3RvcnMgdG8gdGhlIGVkaXRvckJvZHkgZ2V0IGFuY2VzdG9yU3R5bGVzLCBldmVyeXRoaW5nIGVsc2UgZ2V0cyBzaWJsaW5nU3R5bGVzXG5jb25zdCBjbG9iYmVyU3R5bGVzID0gKGRvbTogRE9NVXRpbHMsIGNvbnRhaW5lcjogU3VnYXJFbGVtZW50PEVsZW1lbnQ+LCBlZGl0b3JCb2R5OiBTdWdhckVsZW1lbnQ8RWxlbWVudD4pOiB2b2lkID0+IHtcbiAgY29uc3QgZ2F0aGVyU2libGluZ3MgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KTogU3VnYXJFbGVtZW50PEVsZW1lbnQ+W10gPT4ge1xuICAgIHJldHVybiBTZWxlY3RvckZpbHRlci5zaWJsaW5ncyhlbGVtZW50LCAnKjpub3QoLnRveC1zaWx2ZXItc2luayknKTtcbiAgfTtcblxuICBjb25zdCBjbG9iYmVyID0gKGNsb2JiZXJTdHlsZTogc3RyaW5nKSA9PiAoZWxlbWVudDogU3VnYXJFbGVtZW50PEVsZW1lbnQ+KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3R5bGVzID0gQXR0cmlidXRlLmdldChlbGVtZW50LCAnc3R5bGUnKTtcbiAgICBjb25zdCBiYWNrdXAgPSBzdHlsZXMgPT09IHVuZGVmaW5lZCA/ICduby1zdHlsZXMnIDogc3R5bGVzLnRyaW0oKTtcbiAgICBpZiAoYmFja3VwID09PSBjbG9iYmVyU3R5bGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgQXR0cmlidXRlLnNldChlbGVtZW50LCBhdHRyLCBiYWNrdXApO1xuICAgICAgQ3NzLnNldEFsbChlbGVtZW50LCBkb20ucGFyc2VTdHlsZShjbG9iYmVyU3R5bGUpKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYW5jZXN0b3JzID0gU2VsZWN0b3JGaWx0ZXIuYW5jZXN0b3JzKGNvbnRhaW5lciwgJyonKTtcbiAgY29uc3Qgc2libGluZ3MgPSBBcnIuYmluZChhbmNlc3RvcnMsIGdhdGhlclNpYmxpbmdzKTtcbiAgY29uc3QgYmdDb2xvciA9IG1hdGNoQ29sb3IoZWRpdG9yQm9keSk7XG5cbiAgLyogTk9URTogVGhpcyBhc3N1bWVzIHRoYXQgY29udGFpbmVyIGhhcyBubyBzaWJsaW5ncyBpdHNlbGYgKi9cbiAgQXJyLmVhY2goc2libGluZ3MsIGNsb2JiZXIoc2libGluZ1N0eWxlcykpO1xuICBBcnIuZWFjaChhbmNlc3RvcnMsIGNsb2JiZXIoYW5jZXN0b3JQb3NpdGlvbiArIGFuY2VzdG9yU3R5bGVzICsgYmdDb2xvcikpO1xuICAvLyBwb3NpdGlvbiBhYnNvbHV0ZSBvbiB0aGUgb3V0ZXItY29udGFpbmVyIGJyZWFrcyBBbmRyb2lkIGZsZXggbGF5b3V0XG4gIGNvbnN0IGNvbnRhaW5lclN0eWxlcyA9IGlzQW5kcm9pZCA9PT0gdHJ1ZSA/ICcnIDogYW5jZXN0b3JQb3NpdGlvbjtcbiAgY2xvYmJlcihjb250YWluZXJTdHlsZXMgKyBhbmNlc3RvclN0eWxlcyArIGJnQ29sb3IpKGNvbnRhaW5lcik7XG59O1xuXG5jb25zdCByZXN0b3JlU3R5bGVzID0gKGRvbTogRE9NVXRpbHMpOiB2b2lkID0+IHtcbiAgY29uc3QgY2xvYmJlcmVkRWxzID0gU2VsZWN0b3JGaWx0ZXIuYWxsKCdbJyArIGF0dHIgKyAnXScpO1xuICBBcnIuZWFjaChjbG9iYmVyZWRFbHMsIChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgcmVzdG9yZSA9IEF0dHJpYnV0ZS5nZXQoZWxlbWVudCwgYXR0cik7XG4gICAgaWYgKHJlc3RvcmUgJiYgcmVzdG9yZSAhPT0gJ25vLXN0eWxlcycpIHtcbiAgICAgIENzcy5zZXRBbGwoZWxlbWVudCwgZG9tLnBhcnNlU3R5bGUocmVzdG9yZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBBdHRyaWJ1dGUucmVtb3ZlKGVsZW1lbnQsICdzdHlsZScpO1xuICAgIH1cbiAgICBBdHRyaWJ1dGUucmVtb3ZlKGVsZW1lbnQsIGF0dHIpO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7XG4gIGNsb2JiZXJTdHlsZXMsXG4gIHJlc3RvcmVTdHlsZXNcbn07XG4iLCJpbXBvcnQgdHlwZSB7IENlbGwgfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5pbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuaW1wb3J0IHR5cGUgeyBNZW51LCBUb29sYmFyIH0gZnJvbSAndGlueW1jZS9jb3JlL2FwaS91aS9VaSc7XG5pbXBvcnQgdHlwZSB7IEVkaXRvckV2ZW50IH0gZnJvbSAndGlueW1jZS9jb3JlL2FwaS91dGlsL0V2ZW50RGlzcGF0Y2hlcic7XG5cbmltcG9ydCB0eXBlIHsgRnVsbFNjcmVlbkluZm8gfSBmcm9tICcuLi9jb3JlL0FjdGlvbnMnO1xuXG5jb25zdCBtYWtlU2V0dXBIYW5kbGVyID0gKGVkaXRvcjogRWRpdG9yLCBmdWxsc2NyZWVuU3RhdGU6IENlbGw8RnVsbFNjcmVlbkluZm8gfCBudWxsPikgPT4gKGFwaTogVG9vbGJhci5Ub29sYmFyVG9nZ2xlQnV0dG9uSW5zdGFuY2VBcGkgfCBNZW51LlRvZ2dsZU1lbnVJdGVtSW5zdGFuY2VBcGkpID0+IHtcbiAgYXBpLnNldEFjdGl2ZShmdWxsc2NyZWVuU3RhdGUuZ2V0KCkgIT09IG51bGwpO1xuICBjb25zdCBlZGl0b3JFdmVudENhbGxiYWNrID0gKGU6IEVkaXRvckV2ZW50PHsgc3RhdGU6IGJvb2xlYW4gfT4pID0+IGFwaS5zZXRBY3RpdmUoZS5zdGF0ZSk7XG4gIGVkaXRvci5vbignRnVsbHNjcmVlblN0YXRlQ2hhbmdlZCcsIGVkaXRvckV2ZW50Q2FsbGJhY2spO1xuICByZXR1cm4gKCkgPT4gZWRpdG9yLm9mZignRnVsbHNjcmVlblN0YXRlQ2hhbmdlZCcsIGVkaXRvckV2ZW50Q2FsbGJhY2spO1xufTtcblxuY29uc3QgcmVnaXN0ZXIgPSAoZWRpdG9yOiBFZGl0b3IsIGZ1bGxzY3JlZW5TdGF0ZTogQ2VsbDxGdWxsU2NyZWVuSW5mbyB8IG51bGw+KTogdm9pZCA9PiB7XG4gIGNvbnN0IG9uQWN0aW9uID0gKCkgPT4gZWRpdG9yLmV4ZWNDb21tYW5kKCdtY2VGdWxsU2NyZWVuJyk7XG5cbiAgZWRpdG9yLnVpLnJlZ2lzdHJ5LmFkZFRvZ2dsZU1lbnVJdGVtKCdmdWxsc2NyZWVuJywge1xuICAgIHRleHQ6ICdGdWxsc2NyZWVuJyxcbiAgICBpY29uOiAnZnVsbHNjcmVlbicsXG4gICAgc2hvcnRjdXQ6ICdNZXRhK1NoaWZ0K0YnLFxuICAgIG9uQWN0aW9uLFxuICAgIG9uU2V0dXA6IG1ha2VTZXR1cEhhbmRsZXIoZWRpdG9yLCBmdWxsc2NyZWVuU3RhdGUpLFxuICAgIGNvbnRleHQ6ICdhbnknXG4gIH0pO1xuXG4gIGVkaXRvci51aS5yZWdpc3RyeS5hZGRUb2dnbGVCdXR0b24oJ2Z1bGxzY3JlZW4nLCB7XG4gICAgdG9vbHRpcDogJ0Z1bGxzY3JlZW4nLFxuICAgIGljb246ICdmdWxsc2NyZWVuJyxcbiAgICBvbkFjdGlvbixcbiAgICBvblNldHVwOiBtYWtlU2V0dXBIYW5kbGVyKGVkaXRvciwgZnVsbHNjcmVlblN0YXRlKSxcbiAgICBzaG9ydGN1dDogJ01ldGErU2hpZnQrRicsXG4gICAgY29udGV4dDogJ2FueSdcbiAgfSk7XG59O1xuXG5leHBvcnQge1xuICByZWdpc3RlclxufTtcbiIsImltcG9ydCAqIGFzIFR5cGUgZnJvbSAnLi4vY29yZS9UeXBlJztcbmltcG9ydCAqIGFzIEFycmF5VXRpbCBmcm9tICcuLi9jb3JlL0FycmF5VXRpbCc7XG5cbi8qKiBBIHdheSBvZiBjb21wYXJpbmcgdHdvIHZhbHVlcyBvZiB0aGUgc2FtZSB0eXBlIGZvciBlcXVhbGl0eS4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRXE8QT4ge1xuICBlcTogKHg6IEEsIHk6IEEpID0+IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBjb250cmFtYXAgPSA8QSwgQj4gKGVxYTogRXE8QT4sIGY6IChiOiBCKSA9PiBBKTogRXE8Qj4gPT5cbiAgZXEoKHgsIHkpID0+IGVxYS5lcShmKHgpLCBmKHkpKSk7XG5cbmV4cG9ydCBjb25zdCBlcSA9IDxBPiAoZjogKHg6IEEsIHk6IEEpID0+IGJvb2xlYW4pOiBFcTxBPiA9PlxuICAoeyBlcTogZiB9KTtcblxuZXhwb3J0IGNvbnN0IHRyaXBsZUVxOiBFcTxhbnk+ID0gZXEoKHgsIHkpID0+IHggPT09IHkpO1xuXG5leHBvcnQgY29uc3QgZXFTdHJpbmc6IEVxPHN0cmluZz4gPSB0cmlwbGVFcTtcblxuZXhwb3J0IGNvbnN0IGVxQm9vbGVhbjogRXE8Ym9vbGVhbj4gPSB0cmlwbGVFcTtcblxuZXhwb3J0IGNvbnN0IGVxTnVtYmVyOiBFcTxudW1iZXI+ID0gdHJpcGxlRXE7XG5cbmV4cG9ydCBjb25zdCBlcVVuZGVmaW5lZDogRXE8dW5kZWZpbmVkPiA9IHRyaXBsZUVxO1xuXG5leHBvcnQgY29uc3QgZXFOdWxsOiBFcTxudWxsPiA9IHRyaXBsZUVxO1xuXG5leHBvcnQgY29uc3QgZXFBcnJheSA9IDxBPiAoZXFhOiBFcTxBPik6IEVxPEFycmF5TGlrZTxBPj4gPT4gZXEoKHgsIHkpID0+IHtcbiAgaWYgKHgubGVuZ3RoICE9PSB5Lmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBsZW4gPSB4Lmxlbmd0aDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGlmICghZXFhLmVxKHhbaV0sIHlbaV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufSk7XG5cbi8vIFRPRE86IE1ha2UgYW4gT3JkIHR5cGVjbGFzc1xuY29uc3QgZXFTb3J0ZWRBcnJheSA9IDxBPihlcWE6IEVxPEE+LCBjb21wYXJlRm4/OiAoYTogQSwgYjogQSkgPT4gbnVtYmVyKTogRXE8QXJyYXlMaWtlPEE+PiA9PlxuICBjb250cmFtYXAoZXFBcnJheShlcWEpLCAoeHMpID0+IEFycmF5VXRpbC5zb3J0KHhzLCBjb21wYXJlRm4pKTtcblxuZXhwb3J0IGNvbnN0IGVxUmVjb3JkID0gPEE+IChlcWE6IEVxPEE+KTogRXE8UmVjb3JkPHN0cmluZywgQT4+ID0+IGVxKCh4LCB5KSA9PiB7XG4gIGNvbnN0IGt4ID0gT2JqZWN0LmtleXMoeCk7XG4gIGNvbnN0IGt5ID0gT2JqZWN0LmtleXMoeSk7XG4gIGlmICghZXFTb3J0ZWRBcnJheShlcVN0cmluZykuZXEoa3gsIGt5KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBsZW4gPSBreC5sZW5ndGg7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCBxID0ga3hbaV07XG4gICAgaWYgKCFlcWEuZXEoeFtxXSwgeVtxXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59KTtcblxuZXhwb3J0IGNvbnN0IGVxQW55OiBFcTxhbnk+ID0gZXEoKHgsIHkpID0+IHtcbiAgaWYgKHggPT09IHkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IHR4ID0gVHlwZS50eXBlT2YoeCk7XG4gIGNvbnN0IHR5ID0gVHlwZS50eXBlT2YoeSk7XG4gIGlmICh0eCAhPT0gdHkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoVHlwZS5pc0VxdWF0YWJsZVR5cGUodHgpKSB7XG4gICAgcmV0dXJuIHggPT09IHk7XG5cbiAgfSBlbHNlIGlmICh0eCA9PT0gJ2FycmF5Jykge1xuICAgIHJldHVybiBlcUFycmF5KGVxQW55KS5lcSh4LCB5KTtcblxuICB9IGVsc2UgaWYgKHR4ID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBlcVJlY29yZChlcUFueSkuZXEoeCwgeSk7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59KTtcbiIsImV4cG9ydCBjb25zdCBtYXAgPSA8QSwgQj4oeHM6IEFycmF5TGlrZTxBPiwgZjogKGE6IEEpID0+IEIpOiBCW10gPT4ge1xuICBjb25zdCBsZW4gPSB4cy5sZW5ndGg7XG4gIGNvbnN0IHIgPSBuZXcgQXJyYXkobGVuKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICByW2ldID0gZih4KTtcbiAgfVxuICByZXR1cm4gcjtcbn07XG5cbi8qKiBtYXAgYSBmdW5jdGlvbiBvdmVyIGFuIGFycmF5LCB0aGVuIG1hcCBhbm90aGVyIGZ1bmN0aW9uIG92ZXIgZXZlcnkgaXRlbSBleGNlcHQgdGhlIGxhc3QgKi9cbmV4cG9ydCBjb25zdCBtYXBEZWxpbWl0ID0gPEEsIEI+ICh4czogQXJyYXlMaWtlPEE+LCBmOiAoYTogQSkgPT4gQiwgZGVsaW1pdDogKGI6IEIpID0+IEIpOiBCW10gPT4ge1xuICBjb25zdCBsZW4gPSB4cy5sZW5ndGg7XG4gIGNvbnN0IHIgPSBuZXcgQXJyYXkobGVuKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW4gLSAxOyBpKyspIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgcltpXSA9IGRlbGltaXQoZih4KSk7XG4gIH1cbiAgaWYgKGxlbiA+IDApIHtcbiAgICByW2xlbiAtIDFdID0gKGYoeHNbbGVuIC0gMV0pKTtcbiAgfVxuXG4gIHJldHVybiByO1xufTtcblxuZXhwb3J0IGNvbnN0IHNvcnQgPSA8QT4gKHhzOiBBcnJheUxpa2U8QT4sIGNvbXBhcmVGbj86IChhOiBBLCBiOiBBKSA9PiBudW1iZXIpOiBBW10gPT4ge1xuICBjb25zdCBjbG9uZTogQVtdID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoeHMpO1xuICByZXR1cm4gY2xvbmUuc29ydChjb21wYXJlRm4pO1xufTtcbiIsImV4cG9ydCBjb25zdCB0eXBlT2YgPSAoeDogYW55KSA9PiB7XG4gIGlmICh4ID09PSBudWxsKSB7XG4gICAgcmV0dXJuICdudWxsJztcbiAgfVxuICBpZiAoeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuICd1bmRlZmluZWQnO1xuICB9XG4gIGNvbnN0IHQgPSB0eXBlb2YgeDtcbiAgaWYgKHQgPT09ICdvYmplY3QnICYmIChBcnJheS5wcm90b3R5cGUuaXNQcm90b3R5cGVPZih4KSB8fCB4LmNvbnN0cnVjdG9yICYmIHguY29uc3RydWN0b3IubmFtZSA9PT0gJ0FycmF5JykpIHtcbiAgICByZXR1cm4gJ2FycmF5JztcbiAgfVxuICBpZiAodCA9PT0gJ29iamVjdCcgJiYgKFN0cmluZy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZih4KSB8fCB4LmNvbnN0cnVjdG9yICYmIHguY29uc3RydWN0b3IubmFtZSA9PT0gJ1N0cmluZycpKSB7XG4gICAgcmV0dXJuICdzdHJpbmcnO1xuICB9XG4gIHJldHVybiB0O1xufTtcblxuY29uc3QgaXNUeXBlID0gPFQ+KHR5cGU6IHN0cmluZykgPT4gKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBUID0+IHR5cGVPZih2YWx1ZSkgPT09IHR5cGU7XG5cbmV4cG9ydCBjb25zdCBpc1N0cmluZyA9IGlzVHlwZTxzdHJpbmc+KCdzdHJpbmcnKTtcbmV4cG9ydCBjb25zdCBpc09iamVjdCA9IGlzVHlwZTxPYmplY3Q+KCdvYmplY3QnKTtcbmV4cG9ydCBjb25zdCBpc0FycmF5ID0gaXNUeXBlPEFycmF5PHVua25vd24+PignYXJyYXknKTtcbmV4cG9ydCBjb25zdCBpc051bGwgPSBpc1R5cGU8bnVsbD4oJ251bGwnKTtcbmV4cG9ydCBjb25zdCBpc0Jvb2xlYW4gPSBpc1R5cGU8Ym9vbGVhbj4oJ2Jvb2xlYW4nKTtcbmV4cG9ydCBjb25zdCBpc1VuZGVmaW5lZCA9IGlzVHlwZTx1bmRlZmluZWQ+KCd1bmRlZmluZWQnKTtcbmV4cG9ydCBjb25zdCBpc0Z1bmN0aW9uID0gaXNUeXBlPEZ1bmN0aW9uPignZnVuY3Rpb24nKTtcbmV4cG9ydCBjb25zdCBpc051bWJlciA9IGlzVHlwZTxudW1iZXI+KCdudW1iZXInKTtcblxuZXhwb3J0IGNvbnN0IGlzRXF1YXRhYmxlVHlwZSA9ICh4OiBzdHJpbmcpOiBib29sZWFuID0+XG4gIFsgJ3VuZGVmaW5lZCcsICdib29sZWFuJywgJ251bWJlcicsICdzdHJpbmcnLCAnZnVuY3Rpb24nLCAneG1sJywgJ251bGwnIF0uaW5kZXhPZih4KSAhPT0gLTE7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG4gICAgICAgIGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcbiAgICAgICAgfVxuICAgIH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucnYgPSAoKSA9PiAoXCIxLjUuMlwiKSIsIl9fd2VicGFja19yZXF1aXJlX18ucnVpZCA9IFwiYnVuZGxlcj1yc3BhY2tAMS41LjJcIjtcbiIsImltcG9ydCBQbHVnaW4gZnJvbSAnLi9QbHVnaW4nO1xuXG5QbHVnaW4oKTtcblxuLyoqICoqKioqXG4gKiBETyBOT1QgRVhQT1JUIEFOWVRISU5HXG4gKlxuICogSUYgWU9VIERPIFJPTExVUCBXSUxMIExFQVZFIEEgR0xPQkFMIE9OIFRIRSBQQUdFXG4gKioqKioqKi9cbiJdLCJuYW1lcyI6WyJFcSIsIkZ1biIsIk9wdGlvbmFsIiwiVHlwZSIsIm5hdGl2ZVNsaWNlIiwiQXJyYXkiLCJuYXRpdmVJbmRleE9mIiwibmF0aXZlUHVzaCIsInJhd0luZGV4T2YiLCJ0cyIsInQiLCJpbmRleE9mIiwieHMiLCJ4IiwiciIsImNvbnRhaW5zIiwiZXhpc3RzIiwicHJlZCIsImkiLCJsZW4iLCJyYW5nZSIsIm51bSIsImYiLCJjaHVuayIsImFycmF5Iiwic2l6ZSIsInMiLCJtYXAiLCJlYWNoIiwiZWFjaHIiLCJwYXJ0aXRpb24iLCJwYXNzIiwiZmFpbCIsImFyciIsImZpbHRlciIsImdyb3VwQnkiLCJ3YXNUeXBlIiwiZ3JvdXAiLCJ0eXBlIiwiZm9sZHIiLCJhY2MiLCJmb2xkbCIsImZpbmRVbnRpbCIsInVudGlsIiwiZmluZCIsImZpbmRJbmRleCIsImZpbmRMYXN0SW5kZXgiLCJmbGF0dGVuIiwiRXJyb3IiLCJiaW5kIiwiZm9yYWxsIiwiZXF1YWwiLCJhMSIsImEyIiwiZXEiLCJyZXZlcnNlIiwiZGlmZmVyZW5jZSIsIm1hcFRvT2JqZWN0IiwiU3RyaW5nIiwicHVyZSIsInNvcnQiLCJjb21wYXJhdG9yIiwiY29weSIsImdldCIsImhlYWQiLCJsYXN0IiwiZnJvbSIsImZpbmRNYXAiLCJ1bmlxdWUiLCJpc0R1cGxpY2F0ZWQiLCJDZWxsIiwiaW5pdGlhbCIsInZhbHVlIiwic2V0IiwidiIsIm5vb3AiLCJub2FyZyIsImNvbXBvc2UiLCJmYSIsImZiIiwiYXJncyIsImNvbXBvc2UxIiwiZmJjIiwiZmFiIiwiYSIsImNvbnN0YW50IiwiaWRlbnRpdHkiLCJ0cmlwbGVFcXVhbHMiLCJiIiwiY3VycnkiLCJmbiIsImluaXRpYWxBcmdzIiwicmVzdEFyZ3MiLCJhbGwiLCJub3QiLCJkaWUiLCJtc2ciLCJhcHBseSIsImNhbGwiLCJuZXZlciIsImFsd2F5cyIsIndlYWtlbiIsInBpcGUiLCJhYiIsImJjIiwiY2QiLCJkZSIsImVmIiwiZmciLCJnaCIsImMiLCJkIiwiZSIsImciLCJHbG9iYWwiLCJ3aW5kb3ciLCJGdW5jdGlvbiIsImtleXMiLCJPYmplY3QiLCJoYXNPd25Qcm9wZXJ0eSIsIm9iaiIsInByb3BzIiwiayIsInR1cGxlTWFwIiwidHVwbGUiLCJvYmpBY2MiLCJpbnRlcm5hbEZpbHRlciIsIm9uVHJ1ZSIsIm9uRmFsc2UiLCJiaWZpbHRlciIsIm1hcFRvQXJyYXkiLCJuYW1lIiwidmFsdWVzIiwia2V5IiwiaGFzIiwiaGFzTm9uTnVsbGFibGVLZXkiLCJ1bmRlZmluZWQiLCJpc0VtcHR5IiwidGFnIiwib25Ob25lIiwib25Tb21lIiwibWFwcGVyIiwiYmluZGVyIiwicHJlZGljYXRlIiwicmVwbGFjZW1lbnQiLCJ0aHVuayIsIm1lc3NhZ2UiLCJ3b3JrZXIiLCJBcnIiLCJpcyIsImxocyIsInJocyIsImxlZnQiLCJlcXVhbHMiLCJsaWZ0MiIsImNhdCIsInB1c2giLCJzZXF1ZW5jZSIsInRyYXZlcnNlIiwib2EiLCJvYiIsImxpZnQzIiwib2MiLCJsaWZ0NCIsIm9kIiwibGlmdDUiLCJvZSIsIm1hcEZyb20iLCJiaW5kRnJvbSIsIm9vdCIsInNvbWVJZiIsInBhdGgiLCJwYXJ0cyIsInNjb3BlIiwibyIsInJlc29sdmUiLCJwIiwic3RlcCIsInBhcnQiLCJmb3JnZSIsInRhcmdldCIsIm5hbWVzcGFjZSIsInNpbmdsZXRvbiIsImRvUmV2b2tlIiwic3ViamVjdCIsInJldm9rZSIsImNsZWFyIiwiaXNTZXQiLCJyZXBlYXRhYmxlIiwiZGVsYXkiLCJpbnRlcnZhbElkIiwiaWQiLCJjbGVhckludGVydmFsIiwiZnVuY3Rpb25Ub1JlcGVhdCIsInNldEludGVydmFsIiwiZGVzdHJveWFibGUiLCJ1bmJpbmRhYmxlIiwiYXBpIiwicnVuIiwib24iLCJTdHJBcHBlbmQiLCJjaGVja1JhbmdlIiwic3RyIiwic3Vic3RyIiwic3RhcnQiLCJzdXBwbGFudCIsImlzU3RyaW5nT3JOdW1iZXIiLCJmdWxsTWF0Y2giLCJyZW1vdmVMZWFkaW5nIiwicHJlZml4Iiwic3RhcnRzV2l0aCIsInJlbW92ZVRyYWlsaW5nIiwic3VmZml4IiwiZW5kc1dpdGgiLCJlbnN1cmVMZWFkaW5nIiwiZW5zdXJlVHJhaWxpbmciLCJlbmQiLCJpZHgiLCJjYXBpdGFsaXplIiwiYmxhbmsiLCJ0cmltIiwibFRyaW0iLCJyVHJpbSIsImlzTm90RW1wdHkiLCJyZXBlYXQiLCJjb3VudCIsImZyb21Db2RlUG9pbnQiLCJ0b0ludCIsInJhZGl4IiwicGFyc2VJbnQiLCJpc05hTiIsInRvRmxvYXQiLCJwYXJzZUZsb2F0IiwiYWRhcHRhYmxlIiwicmF0ZSIsInRpbWVyIiwiY2FuY2VsIiwiY2xlYXJUaW1lb3V0IiwidGhyb3R0bGUiLCJuZXdBcmdzIiwic2V0VGltZW91dCIsInRlbXBBcmdzIiwiZmlyc3QiLCJjYWNoZWQiLCJjYWxsZWQiLCJnZXRQcm90b3R5cGVPZiIsImhhc1Byb3RvIiwiY29uc3RydWN0b3IiLCJ0eXBlT2YiLCJwcm90byIsImlzVHlwZSIsImlzU2ltcGxlVHlwZSIsImlzT2JqZWN0IiwiaXNTdHJpbmciLCJpc1BsYWluT2JqZWN0IiwiaXNBcnJheSIsImlzTnVsbCIsImlzQm9vbGVhbiIsImlzVW5kZWZpbmVkIiwiaXNOdWxsYWJsZSIsImlzTm9uTnVsbGFibGUiLCJpc0Z1bmN0aW9uIiwiaXNOdW1iZXIiLCJpc0FycmF5T2YiLCJpc1Byb21pc2VMaWtlIiwiYWRkVG9TdGFydCIsImFkZFRvRW5kIiwicmVtb3ZlRnJvbVN0YXJ0IiwibnVtQ2hhcnMiLCJyZW1vdmVGcm9tRW5kIiwiVGh1bmsiLCJQbGF0Zm9ybURldGVjdGlvbiIsIm1lZGlhTWF0Y2giLCJxdWVyeSIsInBsYXRmb3JtIiwiZGV0ZWN0Iiwib3ZlcnJpZGUiLCJvdmVycmlkZXMiLCJSZXNvbHZlIiwic2FuZEhUTUxFbGVtZW50IiwiaXNQcm90b3R5cGVPZiIsIlZlcnNpb24iLCJlZGdlIiwiY2hyb21pdW0iLCJpZSIsIm9wZXJhIiwiZmlyZWZveCIsInNhZmFyaSIsInVua25vd24iLCJudSIsImluZm8iLCJjdXJyZW50IiwidmVyc2lvbiIsImlzQnJvd3NlciIsIkJyb3dzZXIiLCJ3aW5kb3dzIiwiaW9zIiwiYW5kcm9pZCIsImxpbnV4IiwibWFjb3MiLCJzb2xhcmlzIiwiZnJlZWJzZCIsImNocm9tZW9zIiwiaXNPUyIsIk9wZXJhdGluZ1N5c3RlbSIsIkRldmljZVR5cGUiLCJVYURhdGEiLCJVYVN0cmluZyIsIlBsYXRmb3JtSW5mbyIsInVzZXJBZ2VudCIsInVzZXJBZ2VudERhdGFPcHQiLCJicm93c2VycyIsIm9zZXMiLCJicm93c2VyIiwidXNlckFnZW50RGF0YSIsIm9zIiwiZGV2aWNlVHlwZSIsImlzaVBhZCIsImlzaVBob25lIiwiaXNNb2JpbGUiLCJpc1RvdWNoIiwiaXNUYWJsZXQiLCJpc1Bob25lIiwiaU9Td2VidmlldyIsImlzRGVza3RvcCIsImRldGVjdEJyb3dzZXIiLCJ1YUJyYW5kIiwibGNCcmFuZCIsImNhbmRpZGF0ZXMiLCJhZ2VudCIsImNhbmRpZGF0ZSIsImRldGVjdE9zIiwiZmlyc3RNYXRjaCIsInJlZ2V4ZXMiLCJOdW1iZXIiLCJ2ZXJzaW9uUmVnZXhlcyIsImNsZWFuZWRBZ2VudCIsIm1ham9yIiwibWlub3IiLCJTdHJpbmdzIiwibm9ybWFsVmVyc2lvblJlZ2V4IiwiY2hlY2tDb250YWlucyIsInVhc3RyaW5nIiwidW5zYWZlIiwiZ2V0T3JEaWUiLCJhY3R1YWwiLCJ0b0FycmF5IiwicmVjdXJzZSIsImN1ciIsIlNlbGVjdG9ycyIsImUxIiwiZTIiLCJpc0VxdWFsTm9kZSIsIm1lbWJlciIsImVsZW1lbnQiLCJlbGVtZW50cyIsImQxIiwiZDIiLCJUcmF2ZXJzZSIsImJlZm9yZSIsIm1hcmtlciIsInBhcmVudCIsImFmdGVyIiwic2libGluZyIsImFwcGVuZCIsInByZXBlbmQiLCJmaXJzdENoaWxkIiwiYXBwZW5kQXQiLCJpbmRleCIsIndyYXAiLCJ3cmFwcGVyIiwiSW5zZXJ0IiwiSW5zZXJ0QWxsIiwiZW1wdHkiLCJyb2d1ZSIsInJlbW92ZSIsImRvbSIsInVud3JhcCIsImNoaWxkcmVuIiwiRmlsdGVyZWRFdmVudCIsImV2ZW50IiwiaGFuZGxlciIsImNhcHR1cmUiLCJmcm9tUmF3RXZlbnQiLCJBVFRSSUJVVEUiLCJDREFUQV9TRUNUSU9OIiwiQ09NTUVOVCIsIkRPQ1VNRU5UIiwiRE9DVU1FTlRfVFlQRSIsIkRPQ1VNRU5UX0ZSQUdNRU5UIiwiRUxFTUVOVCIsIlRFWFQiLCJQUk9DRVNTSU5HX0lOU1RSVUNUSU9OIiwiRU5USVRZX1JFRkVSRU5DRSIsIkVOVElUWSIsIk5PVEFUSU9OIiwiU3VnYXJFbGVtZW50IiwiU3VnYXJOb2RlIiwiZ2V0U2hhZG93SG9zdCIsImdldFNoYWRvd1Jvb3QiLCJpbkJvZHkiLCJkb2MiLCJib2R5IiwiZ2V0Qm9keSIsImRvY3VtZW50IiwiZnJvbUh0bWwiLCJodG1sIiwiZGl2IiwiY29uc29sZSIsImZyb21Eb20iLCJmcm9tVGFnIiwibm9kZSIsImZyb21UZXh0IiwidGV4dCIsImZyb21Qb2ludCIsImRvY0VsbSIsInkiLCJnZXRIZWFkIiwiU2FuZEhUTUxFbGVtZW50IiwiTm9kZVR5cGVzIiwiaXNDb21tZW50IiwiaXNIVE1MRWxlbWVudCIsImlzRWxlbWVudCIsImlzVGV4dCIsImlzRG9jdW1lbnQiLCJpc0RvY3VtZW50RnJhZ21lbnQiLCJpc1RhZyIsIlN1Z2FySGVhZCIsImlzU2hhZG93Um9vdCIsImRvcyIsImdldFJvb3ROb2RlIiwiY3JlYXRlRWxlbWVudCIsImdldFN0eWxlQ29udGFpbmVyIiwiZ2V0Q29udGVudENvbnRhaW5lciIsImlzSW5TaGFkb3dSb290IiwiZ2V0T3JpZ2luYWxFdmVudFRhcmdldCIsImVsIiwiaXNPcGVuU2hhZG93SG9zdCIsImNvbXBvc2VkUGF0aCIsImlzT3BlblNoYWRvd1Jvb3QiLCJzciIsImlzQ2xvc2VkU2hhZG93Um9vdCIsIkF0dHJpYnV0ZSIsInJlYWQiLCJhdHRyIiwiYWRkIiwib2xkIiwiT2JqIiwicmF3U2V0Iiwic2V0QWxsIiwiYXR0cnMiLCJzZXRPcHRpb25zIiwiZ2V0T3B0IiwiaGFzTm9uZSIsImNsb25lIiwidHJhbnNmZXJPbmUiLCJzb3VyY2UiLCJkZXN0aW5hdGlvbiIsInNyY1ZhbHVlIiwidHJhbnNmZXIiLCJDbGFzc0xpc3QiLCJUb2dnbGVyIiwiY2xhenoiLCJjbGVhbkNsYXNzIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwicmVzdWx0IiwidG9nZ2xlciIsImhhc0NsYXNzbGlzdCIsIm9mZiIsIk9wdGlvbmFscyIsIlN0eWxlIiwiU3VnYXJCb2R5IiwiaW50ZXJuYWxTZXQiLCJwcm9wZXJ0eSIsImludGVybmFsUmVtb3ZlIiwiY3NzIiwic3R5bGVzIiwiZ2V0VW5zYWZlUHJvcGVydHkiLCJnZXRSYXciLCJyYXciLCJnZXRBbGxSYXciLCJydWxlTmFtZSIsImlzVmFsaWRWYWx1ZSIsInN0eWxlIiwicHJlc2VydmUiLCJvbGRTdHlsZXMiLCJzb3VyY2VEb20iLCJ0YXJnZXREb20iLCJyZWZsb3ciLCJ0dXJuT2ZmIiwidHVybk9uIiwiYWN0aXZlIiwiaXNPbiIsImRlc2NlbmRhbnRzIiwiYW5jZXN0b3JzIiwiaXNSb290Iiwic2libGluZ3MiLCJQcmVkaWNhdGVGaWx0ZXIiLCJzZWxlY3RvciIsImVsZW0iLCJieXBhc3NTZWxlY3RvciIsImJhc2UiLCJvbmUiLCJSZWN1cnNlIiwiQ29tcGFyZSIsIm93bmVyIiwiZG9jdW1lbnRPck93bmVyIiwiZG9jdW1lbnRFbGVtZW50IiwiZGVmYXVsdFZpZXciLCJwYXJlbnROb2RlIiwicGFyZW50RWxlbWVudCIsImtpbiIsInBhcmVudHMiLCJzdG9wIiwicmV0IiwicmF3UGFyZW50IiwiZmlsdGVyU2VsZiIsIm9mZnNldFBhcmVudCIsInByZXZTaWJsaW5nIiwibmV4dFNpYmxpbmciLCJwcmV2U2libGluZ3MiLCJuZXh0U2libGluZ3MiLCJjaGlsZCIsImNzIiwibGFzdENoaWxkIiwiY2hpbGROb2Rlc0NvdW50IiwiaGFzQ2hpbGROb2RlcyIsInNwb3QiLCJvZmZzZXQiLCJsZWFmIiwiUmVtb3ZlIiwiU3VnYXJMb2NhdGlvbiIsIlN1Z2FyUG9zaXRpb24iLCJfRE9DIiwidG8iLCJ3aW4iLCJieSIsInNldFRvRWxlbWVudCIsInBvcyIsInByZXZpb3VzIiwic2F2ZSIsInJlc3RvcmUiLCJpbnRvVmlldyIsImFsaWduVG9Ub3AiLCJpc1NhZmFyaSIsImludG9WaWV3SWZOZWVkZWQiLCJjb250YWluZXIiLCJjb250YWluZXJCb3giLCJlbGVtZW50Qm94Iiwic2Nyb2xsQmFyV2lkdGgiLCJzY3JvbGxEaXYiLCJ3IiwiYm94UG9zaXRpb24iLCJib3giLCJmaXJzdERlZmluZWRPclplcm8iLCJhYnNvbHV0ZSIsInNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJjbGllbnRUb3AiLCJjbGllbnRMZWZ0Iiwidmlld3BvcnQiLCJyZWxhdGl2ZSIsInRvcCIsInRyYW5zbGF0ZSIsIlNjcm9sbCIsIl93aW4iLCJib3VuZHMiLCJ3aWR0aCIsImhlaWdodCIsImdldEJvdW5kcyIsInNjcm9sbCIsInZpc3VhbFZpZXdwb3J0IiwiTWF0aCIsImNhbGxiYWNrIiwiQXR0ckxpc3QiLCJzdXBwb3J0cyIsIlN1Z2FyU2hhZG93RG9tIiwibWtFdmVudCIsInByZXZlbnQiLCJraWxsIiwicmF3RXZlbnQiLCJoYW5kbGUiLCJ1c2VDYXB0dXJlIiwid3JhcHBlZCIsInVuYmluZCIsImlzU3VwcG9ydGVkIiwiUGx1Z2luTWFuYWdlciIsIkFwaSIsIkNvbW1hbmRzIiwiT3B0aW9ucyIsIktleWJvYXJkIiwiQnV0dG9ucyIsImVkaXRvciIsImZ1bGxzY3JlZW5TdGF0ZSIsIkFjdGlvbnMiLCJyZWdpc3RlciIsImZpcmVGdWxsc2NyZWVuU3RhdGVDaGFuZ2VkIiwic3RhdGUiLCJvcHRpb24iLCJyZWdpc3Rlck9wdGlvbiIsImdldEZ1bGxzY3JlZW5OYXRpdmUiLCJTaW5nbGV0b24iLCJUaHJvdHRsZXIiLCJDbGFzcyIsIkNzcyIsIkRvbUV2ZW50IiwiV2luZG93VmlzdWFsVmlld3BvcnQiLCJET01VdGlscyIsIkVudiIsIkV2ZW50cyIsImV4aXRGdWxsc2NyZWVuIiwiZ2V0RnVsbHNjcmVlbmNoYW5nZUV2ZW50TmFtZSIsImdldEZ1bGxzY3JlZW5Sb290IiwiaXNGdWxsc2NyZWVuRWxlbWVudCIsInJlcXVlc3RGdWxsc2NyZWVuIiwiVGhvciIsIkRPTSIsImdldFNjcm9sbFBvcyIsInNldFNjcm9sbFBvcyIsInZpZXdwb3J0VXBkYXRlIiwiZWRpdG9yQ29udGFpbmVyIiwicmVzaXplQmluZGVyIiwic2Nyb2xsQmluZGVyIiwicmVmcmVzaFNjcm9sbCIsInJlZnJlc2hWaXN1YWxWaWV3cG9ydCIsInVwZGF0ZSIsInRvZ2dsZUZ1bGxzY3JlZW4iLCJlZGl0b3JDb250YWluZXJTIiwic2lua0NvbnRhaW5lclMiLCJlbG0iLCJmdWxsc2NyZWVuUm9vdCIsImZ1bGxzY3JlZW5JbmZvIiwiZWRpdG9yQm9keSIsImVkaXRvckNvbnRhaW5lclN0eWxlIiwiaWZyYW1lIiwiaWZyYW1lU3R5bGUiLCJoYW5kbGVDbGFzc2VzIiwicm9vdCIsImhvc3QiLCJjbGVhbnVwIiwiZnVsbHNjcmVlbkNoYW5nZUhhbmRsZXIiLCJfZXZ0IiwibmV3RnVsbFNjcmVlbkluZm8iLCJ2YWwiLCJWSyIsInNldHVwIiwiZ2V0RnVsbHNjcmVlbkVsZW1lbnQiLCJzdWdhckVsZW0iLCJzdWdhckRvYyIsIlNlbGVjdG9yRmlsdGVyIiwic2libGluZ1N0eWxlcyIsImFuY2VzdG9yUG9zaXRpb24iLCJhbmNlc3RvclN0eWxlcyIsImJnRmFsbGJhY2siLCJpc0FuZHJvaWQiLCJtYXRjaENvbG9yIiwiY29sb3IiLCJjbG9iYmVyU3R5bGVzIiwiZ2F0aGVyU2libGluZ3MiLCJjbG9iYmVyIiwiY2xvYmJlclN0eWxlIiwiYmFja3VwIiwiYmdDb2xvciIsImNvbnRhaW5lclN0eWxlcyIsInJlc3RvcmVTdHlsZXMiLCJjbG9iYmVyZWRFbHMiLCJtYWtlU2V0dXBIYW5kbGVyIiwiZWRpdG9yRXZlbnRDYWxsYmFjayIsIm9uQWN0aW9uIiwiUGx1Z2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsNkRBQWUsTUFBTSxFQUFDO0FBQ2Y7Ozs7Ozs7Ozs7Ozs7O0FDSFA7O0FBRUEsNkRBQWUsTUFBTSxFQUFDO0FBQ2Y7Ozs7Ozs7Ozs7Ozs7O0FDSFA7O0FBRUEsNkRBQWUsTUFBTSxFQUFDO0FBQ2Y7Ozs7Ozs7Ozs7Ozs7O0FDSFA7O0FBRUEsNkRBQWUsTUFBTSxFQUFDO0FBQ2Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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