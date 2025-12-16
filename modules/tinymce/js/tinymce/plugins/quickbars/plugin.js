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
"../katamari/src/main/ts/ephox/katamari/api/Id.ts": 
/*!********************************************************!*\
  !*** ../katamari/src/main/ts/ephox/katamari/api/Id.ts ***!
  \********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  generate: () => (generate),
  uuidV4: () => (uuidV4)
});
/* ESM import */var _util_IdUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/IdUtils */ "../katamari/src/main/ts/ephox/katamari/util/IdUtils.ts");
/* ESM import */var _Num__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Num */ "../katamari/src/main/ts/ephox/katamari/api/Num.ts");


/**
 * Generate a unique identifier.
 *
 * The unique portion of the identifier only contains an underscore
 * and digits, so that it may safely be used within HTML attributes.
 *
 * The chance of generating a non-unique identifier has been minimized
 * by combining the current time, a random number and a one-up counter.
 *
 * generate :: String -> String
 */ let unique = 0;
const generate = (prefix)=>{
    const date = new Date();
    const time = date.getTime();
    const random = Math.floor(_Num__WEBPACK_IMPORTED_MODULE_0__.random() * 1000000000);
    unique++;
    return prefix + '_' + random + unique + String(time);
};
/**
 * Generate a uuidv4 string
 * In accordance with RFC 4122 (https://datatracker.ietf.org/doc/html/rfc4122)
 */ const uuidV4 = ()=>{
    if (window.isSecureContext) {
        return window.crypto.randomUUID();
    } else {
        return _util_IdUtils__WEBPACK_IMPORTED_MODULE_1__.uuidV4String();
    }
};



}),
"../katamari/src/main/ts/ephox/katamari/api/Num.ts": 
/*!*********************************************************!*\
  !*** ../katamari/src/main/ts/ephox/katamari/api/Num.ts ***!
  \*********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  clamp: () => (clamp),
  cycleBy: () => (cycleBy),
  random: () => (random)
});
/**
 * Adds two numbers, and wrap to a range.
 * If the result overflows to the right, snap to the left.
 * If the result overflows to the left, snap to the right.
 */ const cycleBy = (value, delta, min, max)=>{
    const r = value + delta;
    if (r > max) {
        return min;
    } else if (r < min) {
        return max;
    } else {
        return r;
    }
};
// ASSUMPTION: Max will always be larger than min
const clamp = (value, min, max)=>Math.min(Math.max(value, min), max);
// the division is meant to get a number between 0 and 1 for more information check this discussion: https://stackoverflow.com/questions/58285941/how-to-replace-math-random-with-crypto-getrandomvalues-and-keep-same-result
const random = ()=>window.crypto.getRandomValues(new Uint32Array(1))[0] / 4294967295;


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
"../katamari/src/main/ts/ephox/katamari/util/IdUtils.ts": 
/*!**************************************************************!*\
  !*** ../katamari/src/main/ts/ephox/katamari/util/IdUtils.ts ***!
  \**************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  uuidV4Bytes: () => (uuidV4Bytes),
  uuidV4String: () => (uuidV4String)
});
/* eslint-disable no-bitwise */ const uuidV4Bytes = ()=>{
    const bytes = window.crypto.getRandomValues(new Uint8Array(16));
    // https://tools.ietf.org/html/rfc4122#section-4.1.3
    // This will first bit mask away the most significant 4 bits (version octet)
    // then mask in the v4 number we only care about v4 random version at this point so (byte & 0b00001111 | 0b01000000)
    bytes[6] = bytes[6] & 15 | 64;
    // https://tools.ietf.org/html/rfc4122#section-4.1.1
    // This will first bit mask away the highest two bits then masks in the highest bit so (byte & 0b00111111 | 0b10000000)
    // So it will set the Msb0=1 & Msb1=0 described by the "The variant specified in this document." row in the table
    bytes[8] = bytes[8] & 63 | 128;
    return bytes;
};
const uuidV4String = ()=>{
    const uuid = uuidV4Bytes();
    const getHexRange = (startIndex, endIndex)=>{
        let buff = '';
        for(let i = startIndex; i <= endIndex; ++i){
            const hexByte = uuid[i].toString(16).padStart(2, '0');
            buff += hexByte;
        }
        return buff;
    };
    // RFC 4122 UUID format: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
    return `${getHexRange(0, 3)}-${getHexRange(4, 5)}-${getHexRange(6, 7)}-${getHexRange(8, 9)}-${getHexRange(10, 15)}`;
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
"../sugar/src/main/ts/ephox/sugar/api/search/PredicateExists.ts": 
/*!**********************************************************************!*\
  !*** ../sugar/src/main/ts/ephox/sugar/api/search/PredicateExists.ts ***!
  \**********************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ancestor: () => (ancestor),
  any: () => (any),
  child: () => (child),
  closest: () => (closest),
  descendant: () => (descendant),
  sibling: () => (sibling)
});
/* ESM import */var _PredicateFind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PredicateFind */ "../sugar/src/main/ts/ephox/sugar/api/search/PredicateFind.ts");

const any = (predicate)=>_PredicateFind__WEBPACK_IMPORTED_MODULE_0__.first(predicate).isSome();
const ancestor = (scope, predicate, isRoot)=>_PredicateFind__WEBPACK_IMPORTED_MODULE_0__.ancestor(scope, predicate, isRoot).isSome();
const closest = (scope, predicate, isRoot)=>_PredicateFind__WEBPACK_IMPORTED_MODULE_0__.closest(scope, predicate, isRoot).isSome();
const sibling = (scope, predicate)=>_PredicateFind__WEBPACK_IMPORTED_MODULE_0__.sibling(scope, predicate).isSome();
const child = (scope, predicate)=>_PredicateFind__WEBPACK_IMPORTED_MODULE_0__.child(scope, predicate).isSome();
const descendant = (scope, predicate)=>_PredicateFind__WEBPACK_IMPORTED_MODULE_0__.descendant(scope, predicate).isSome();



}),
"../sugar/src/main/ts/ephox/sugar/api/search/PredicateFind.ts": 
/*!********************************************************************!*\
  !*** ../sugar/src/main/ts/ephox/sugar/api/search/PredicateFind.ts ***!
  \********************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ancestor: () => (ancestor),
  child: () => (child),
  closest: () => (closest),
  descendant: () => (descendant),
  first: () => (first),
  sibling: () => (sibling)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Type.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Fun.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Optional.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Arr.ts");
/* ESM import */var _impl_ClosestOrAncestor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../impl/ClosestOrAncestor */ "../sugar/src/main/ts/ephox/sugar/impl/ClosestOrAncestor.ts");
/* ESM import */var _dom_Compare__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom/Compare */ "../sugar/src/main/ts/ephox/sugar/api/dom/Compare.ts");
/* ESM import */var _node_SugarBody__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node/SugarBody */ "../sugar/src/main/ts/ephox/sugar/api/node/SugarBody.ts");
/* ESM import */var _node_SugarElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node/SugarElement */ "../sugar/src/main/ts/ephox/sugar/api/node/SugarElement.ts");





const first = (predicate)=>descendant(_node_SugarBody__WEBPACK_IMPORTED_MODULE_0__.body(), predicate);
const ancestor = (scope, predicate, isRoot)=>{
    let element = scope.dom;
    const stop = _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.isFunction(isRoot) ? isRoot : _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.never;
    while(element.parentNode){
        element = element.parentNode;
        const el = _node_SugarElement__WEBPACK_IMPORTED_MODULE_3__.SugarElement.fromDom(element);
        if (predicate(el)) {
            return _ephox_katamari__WEBPACK_IMPORTED_MODULE_4__.Optional.some(el);
        } else if (stop(el)) {
            break;
        }
    }
    return _ephox_katamari__WEBPACK_IMPORTED_MODULE_4__.Optional.none();
};
const closest = (scope, predicate, isRoot)=>{
    // This is required to avoid ClosestOrAncestor passing the predicate to itself
    const is = (s, test)=>test(s);
    return (0,_impl_ClosestOrAncestor__WEBPACK_IMPORTED_MODULE_5__["default"])(is, ancestor, scope, predicate, isRoot);
};
const sibling = (scope, predicate)=>{
    const element = scope.dom;
    if (!element.parentNode) {
        return _ephox_katamari__WEBPACK_IMPORTED_MODULE_4__.Optional.none();
    }
    return child(_node_SugarElement__WEBPACK_IMPORTED_MODULE_3__.SugarElement.fromDom(element.parentNode), (x)=>!_dom_Compare__WEBPACK_IMPORTED_MODULE_6__.eq(scope, x) && predicate(x));
};
const child = (scope, predicate)=>{
    const pred = (node)=>predicate(_node_SugarElement__WEBPACK_IMPORTED_MODULE_3__.SugarElement.fromDom(node));
    const result = _ephox_katamari__WEBPACK_IMPORTED_MODULE_7__.find(scope.dom.childNodes, pred);
    return result.map(_node_SugarElement__WEBPACK_IMPORTED_MODULE_3__.SugarElement.fromDom);
};
const descendant = (scope, predicate)=>{
    const descend = (node)=>{
        // tslint:disable-next-line:prefer-for-of
        for(let i = 0; i < node.childNodes.length; i++){
            const child = _node_SugarElement__WEBPACK_IMPORTED_MODULE_3__.SugarElement.fromDom(node.childNodes[i]);
            if (predicate(child)) {
                return _ephox_katamari__WEBPACK_IMPORTED_MODULE_4__.Optional.some(child);
            }
            const res = descend(node.childNodes[i]);
            if (res.isSome()) {
                return res;
            }
        }
        return _ephox_katamari__WEBPACK_IMPORTED_MODULE_4__.Optional.none();
    };
    return descend(scope.dom);
};



}),
"../sugar/src/main/ts/ephox/sugar/api/search/SelectorFind.ts": 
/*!*******************************************************************!*\
  !*** ../sugar/src/main/ts/ephox/sugar/api/search/SelectorFind.ts ***!
  \*******************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ancestor: () => (ancestor),
  child: () => (child),
  closest: () => (closest),
  descendant: () => (descendant),
  first: () => (first),
  sibling: () => (sibling)
});
/* ESM import */var _impl_ClosestOrAncestor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../impl/ClosestOrAncestor */ "../sugar/src/main/ts/ephox/sugar/impl/ClosestOrAncestor.ts");
/* ESM import */var _PredicateFind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PredicateFind */ "../sugar/src/main/ts/ephox/sugar/api/search/PredicateFind.ts");
/* ESM import */var _Selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Selectors */ "../sugar/src/main/ts/ephox/sugar/api/search/Selectors.ts");



// TODO: An internal SelectorFilter module that doesn't SugarElement.fromDom() everything
const first = (selector)=>_Selectors__WEBPACK_IMPORTED_MODULE_0__.one(selector);
const ancestor = (scope, selector, isRoot)=>_PredicateFind__WEBPACK_IMPORTED_MODULE_1__.ancestor(scope, (e)=>_Selectors__WEBPACK_IMPORTED_MODULE_0__.is(e, selector), isRoot);
const sibling = (scope, selector)=>_PredicateFind__WEBPACK_IMPORTED_MODULE_1__.sibling(scope, (e)=>_Selectors__WEBPACK_IMPORTED_MODULE_0__.is(e, selector));
const child = (scope, selector)=>_PredicateFind__WEBPACK_IMPORTED_MODULE_1__.child(scope, (e)=>_Selectors__WEBPACK_IMPORTED_MODULE_0__.is(e, selector));
const descendant = (scope, selector)=>_Selectors__WEBPACK_IMPORTED_MODULE_0__.one(selector, scope);
// Returns Some(closest ancestor element (sugared)) matching 'selector' up to isRoot, or None() otherwise
const closest = (scope, selector, isRoot)=>{
    const is = (element, selector)=>_Selectors__WEBPACK_IMPORTED_MODULE_0__.is(element, selector);
    return (0,_impl_ClosestOrAncestor__WEBPACK_IMPORTED_MODULE_2__["default"])(is, ancestor, scope, selector, isRoot);
};



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
"../sugar/src/main/ts/ephox/sugar/impl/ClosestOrAncestor.ts": 
/*!******************************************************************!*\
  !*** ../sugar/src/main/ts/ephox/sugar/impl/ClosestOrAncestor.ts ***!
  \******************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Optional.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Type.ts");

/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((is, ancestor, scope, a, isRoot)=>{
    if (is(scope, a)) {
        return _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.Optional.some(scope);
    } else if (_ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.isFunction(isRoot) && isRoot(scope)) {
        return _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.Optional.none();
    } else {
        return ancestor(scope, a, isRoot);
    }
});


}),
"./src/plugins/quickbars/main/ts/Plugin.ts": 
/*!*************************************************!*\
  !*** ./src/plugins/quickbars/main/ts/Plugin.ts ***!
  \*************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var tinymce_core_api_PluginManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/PluginManager */ "./lib/globals/tinymce/core/api/PluginManager.js");
/* ESM import */var _api_Commands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/Commands */ "./src/plugins/quickbars/main/ts/api/Commands.ts");
/* ESM import */var _api_Options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/Options */ "./src/plugins/quickbars/main/ts/api/Options.ts");
/* ESM import */var _insert_Buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./insert/Buttons */ "./src/plugins/quickbars/main/ts/insert/Buttons.ts");
/* ESM import */var _insert_Toolbars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./insert/Toolbars */ "./src/plugins/quickbars/main/ts/insert/Toolbars.ts");
/* ESM import */var _selection_Toolbars__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selection/Toolbars */ "./src/plugins/quickbars/main/ts/selection/Toolbars.ts");






/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>{
    tinymce_core_api_PluginManager__WEBPACK_IMPORTED_MODULE_0__["default"].add('quickbars', (editor)=>{
        _api_Options__WEBPACK_IMPORTED_MODULE_2__.register(editor);
        _api_Commands__WEBPACK_IMPORTED_MODULE_1__.register(editor);
        _insert_Buttons__WEBPACK_IMPORTED_MODULE_3__.setupButtons(editor);
        _insert_Toolbars__WEBPACK_IMPORTED_MODULE_4__.addToEditor(editor);
        _selection_Toolbars__WEBPACK_IMPORTED_MODULE_5__.addToEditor(editor);
    });
});


}),
"./src/plugins/quickbars/main/ts/api/Commands.ts": 
/*!*******************************************************!*\
  !*** ./src/plugins/quickbars/main/ts/api/Commands.ts ***!
  \*******************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  register: () => (register)
});
/* ESM import */var _insert_Actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../insert/Actions */ "./src/plugins/quickbars/main/ts/insert/Actions.ts");
/* ESM import */var _insert_Conversions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../insert/Conversions */ "./src/plugins/quickbars/main/ts/insert/Conversions.ts");
/* ESM import */var _insert_Picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../insert/Picker */ "./src/plugins/quickbars/main/ts/insert/Picker.ts");



const register = (editor)=>{
    editor.on('PreInit', ()=>{
        if (!editor.queryCommandSupported('QuickbarInsertImage')) {
            editor.addCommand('QuickbarInsertImage', ()=>{
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                _insert_Picker__WEBPACK_IMPORTED_MODULE_2__.pickFile(editor).then((files)=>{
                    if (files.length > 0) {
                        const blob = files[0];
                        // eslint-disable-next-line @typescript-eslint/no-floating-promises
                        _insert_Conversions__WEBPACK_IMPORTED_MODULE_1__.blobToBase64(blob).then((base64)=>{
                            _insert_Actions__WEBPACK_IMPORTED_MODULE_0__.insertBlob(editor, base64, blob);
                        });
                    }
                });
            });
        }
    });
};



}),
"./src/plugins/quickbars/main/ts/api/Options.ts": 
/*!******************************************************!*\
  !*** ./src/plugins/quickbars/main/ts/api/Options.ts ***!
  \******************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getImageToolbarItems: () => (getImageToolbarItems),
  getInsertToolbarItems: () => (getInsertToolbarItems),
  getTextSelectionToolbarItems: () => (getTextSelectionToolbarItems),
  register: () => (register)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Type.ts");

const option = (name)=>(editor)=>editor.options.get(name);
const register = (editor)=>{
    const registerOption = editor.options.register;
    const toolbarProcessor = (defaultValue)=>(value)=>{
            const valid = _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.isBoolean(value) || _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.isString(value);
            if (valid) {
                if (_ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.isBoolean(value)) {
                    return {
                        value: value ? defaultValue : '',
                        valid
                    };
                } else {
                    return {
                        value: value.trim(),
                        valid
                    };
                }
            } else {
                return {
                    valid: false,
                    message: 'Must be a boolean or string.'
                };
            }
        };
    const defaultSelectionToolbar = 'bold italic | quicklink h2 h3 blockquote';
    registerOption('quickbars_selection_toolbar', {
        processor: toolbarProcessor(defaultSelectionToolbar),
        default: defaultSelectionToolbar
    });
    const defaultInsertToolbar = 'quickimage quicktable';
    registerOption('quickbars_insert_toolbar', {
        processor: toolbarProcessor(defaultInsertToolbar),
        default: defaultInsertToolbar
    });
    const defaultImageToolbar = 'alignleft aligncenter alignright';
    registerOption('quickbars_image_toolbar', {
        processor: toolbarProcessor(defaultImageToolbar),
        default: defaultImageToolbar
    });
};
const getTextSelectionToolbarItems = option('quickbars_selection_toolbar');
const getInsertToolbarItems = option('quickbars_insert_toolbar');
const getImageToolbarItems = option('quickbars_image_toolbar');



}),
"./src/plugins/quickbars/main/ts/insert/Actions.ts": 
/*!*********************************************************!*\
  !*** ./src/plugins/quickbars/main/ts/insert/Actions.ts ***!
  \*********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  insertBlob: () => (insertBlob),
  insertTable: () => (insertTable)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Id.ts");

const insertTable = (editor, columns, rows)=>{
    editor.execCommand('mceInsertTable', false, {
        rows,
        columns
    });
};
const insertBlob = (editor, base64, blob)=>{
    const blobCache = editor.editorUpload.blobCache;
    const blobInfo = blobCache.create(_ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.generate('mceu'), blob, base64);
    blobCache.add(blobInfo);
    editor.insertContent(editor.dom.createHTML('img', {
        src: blobInfo.blobUri()
    }));
};



}),
"./src/plugins/quickbars/main/ts/insert/Buttons.ts": 
/*!*********************************************************!*\
  !*** ./src/plugins/quickbars/main/ts/insert/Buttons.ts ***!
  \*********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  setupButtons: () => (setupButtons)
});
/* ESM import */var _Actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Actions */ "./src/plugins/quickbars/main/ts/insert/Actions.ts");

const setupButtons = (editor)=>{
    editor.ui.registry.addButton('quickimage', {
        icon: 'image',
        tooltip: 'Insert image',
        onAction: ()=>editor.execCommand('QuickbarInsertImage')
    });
    editor.ui.registry.addButton('quicktable', {
        icon: 'table',
        tooltip: 'Insert table',
        onAction: ()=>{
            _Actions__WEBPACK_IMPORTED_MODULE_0__.insertTable(editor, 2, 2);
        }
    });
};



}),
"./src/plugins/quickbars/main/ts/insert/Conversions.ts": 
/*!*************************************************************!*\
  !*** ./src/plugins/quickbars/main/ts/insert/Conversions.ts ***!
  \*************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  blobToBase64: () => (blobToBase64)
});
const blobToBase64 = (blob)=>{
    return new Promise((resolve)=>{
        const reader = new FileReader();
        reader.onloadend = ()=>{
            resolve(reader.result.split(',')[1]);
        };
        reader.readAsDataURL(blob);
    });
};



}),
"./src/plugins/quickbars/main/ts/insert/Picker.ts": 
/*!********************************************************!*\
  !*** ./src/plugins/quickbars/main/ts/insert/Picker.ts ***!
  \********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  pickFile: () => (pickFile)
});
/* ESM import */var tinymce_core_api_util_Delay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/util/Delay */ "./lib/globals/tinymce/core/api/util/Delay.js");

const pickFile = (editor)=>new Promise((resolve)=>{
        let resolved = false;
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        fileInput.style.position = 'fixed';
        fileInput.style.left = '0';
        fileInput.style.top = '0';
        fileInput.style.opacity = '0.001';
        document.body.appendChild(fileInput);
        const resolveFileInput = (value)=>{
            if (!resolved) {
                fileInput.parentNode?.removeChild(fileInput);
                resolved = true;
                resolve(value);
            }
        };
        const changeHandler = (e)=>{
            resolveFileInput(Array.prototype.slice.call(e.target.files));
        };
        fileInput.addEventListener('input', changeHandler);
        fileInput.addEventListener('change', changeHandler);
        const cancelHandler = (e)=>{
            const cleanup = ()=>{
                resolveFileInput([]);
            };
            if (!resolved) {
                if (e.type === 'focusin') {
                    // Chrome will fire `focusin` before the input `change` event
                    tinymce_core_api_util_Delay__WEBPACK_IMPORTED_MODULE_0__["default"].setEditorTimeout(editor, cleanup, 1000);
                } else {
                    cleanup();
                }
            }
            editor.off('focusin remove', cancelHandler);
        };
        editor.on('focusin remove', cancelHandler);
        fileInput.click();
    });



}),
"./src/plugins/quickbars/main/ts/insert/Toolbars.ts": 
/*!**********************************************************!*\
  !*** ./src/plugins/quickbars/main/ts/insert/Toolbars.ts ***!
  \**********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  addToEditor: () => (addToEditor)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Fun.ts");
/* ESM import */var _ephox_sugar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ephox/sugar */ "../sugar/src/main/ts/ephox/sugar/api/node/SugarElement.ts");
/* ESM import */var _ephox_sugar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ephox/sugar */ "../sugar/src/main/ts/ephox/sugar/api/properties/Attribute.ts");
/* ESM import */var _ephox_sugar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ephox/sugar */ "../sugar/src/main/ts/ephox/sugar/api/search/SelectorFind.ts");
/* ESM import */var _ephox_sugar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ephox/sugar */ "../sugar/src/main/ts/ephox/sugar/api/search/PredicateExists.ts");
/* ESM import */var _ephox_sugar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ephox/sugar */ "../sugar/src/main/ts/ephox/sugar/api/node/SugarNode.ts");
/* ESM import */var _api_Options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/Options */ "./src/plugins/quickbars/main/ts/api/Options.ts");



const addToEditor = (editor)=>{
    const insertToolbarItems = _api_Options__WEBPACK_IMPORTED_MODULE_0__.getInsertToolbarItems(editor);
    if (insertToolbarItems.length > 0) {
        editor.ui.registry.addContextToolbar('quickblock', {
            predicate: (node)=>{
                const sugarNode = _ephox_sugar__WEBPACK_IMPORTED_MODULE_1__.SugarElement.fromDom(node);
                const textBlockElementsMap = editor.schema.getTextBlockElements();
                const isRoot = (elem)=>elem.dom === editor.getBody();
                return !_ephox_sugar__WEBPACK_IMPORTED_MODULE_2__.has(sugarNode, 'data-mce-bogus') && _ephox_sugar__WEBPACK_IMPORTED_MODULE_3__.closest(sugarNode, 'table,[data-mce-bogus="all"]', isRoot).fold(()=>_ephox_sugar__WEBPACK_IMPORTED_MODULE_4__.closest(sugarNode, (elem)=>_ephox_sugar__WEBPACK_IMPORTED_MODULE_5__.name(elem) in textBlockElementsMap && editor.dom.isEmpty(elem.dom), isRoot), _ephox_katamari__WEBPACK_IMPORTED_MODULE_6__.never);
            },
            items: insertToolbarItems,
            position: 'line',
            scope: 'editor'
        });
    }
};



}),
"./src/plugins/quickbars/main/ts/selection/Toolbars.ts": 
/*!*************************************************************!*\
  !*** ./src/plugins/quickbars/main/ts/selection/Toolbars.ts ***!
  \*************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  addToEditor: () => (addToEditor)
});
/* ESM import */var _ephox_sugar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ephox/sugar */ "../sugar/src/main/ts/ephox/sugar/api/properties/Class.ts");
/* ESM import */var _ephox_sugar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ephox/sugar */ "../sugar/src/main/ts/ephox/sugar/api/node/SugarElement.ts");
/* ESM import */var _api_Options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/Options */ "./src/plugins/quickbars/main/ts/api/Options.ts");


const addToEditor = (editor)=>{
    const isEditable = (node)=>editor.dom.isEditable(node);
    const isInEditableContext = (el)=>isEditable(el.parentElement);
    const isImage = (node)=>{
        const isImageFigure = node.nodeName === 'FIGURE' && /image/i.test(node.className);
        const isImage = node.nodeName === 'IMG' || isImageFigure;
        const isPagebreak = _ephox_sugar__WEBPACK_IMPORTED_MODULE_1__.has(_ephox_sugar__WEBPACK_IMPORTED_MODULE_2__.SugarElement.fromDom(node), 'mce-pagebreak');
        return isImage && isInEditableContext(node) && !isPagebreak;
    };
    const imageToolbarItems = _api_Options__WEBPACK_IMPORTED_MODULE_0__.getImageToolbarItems(editor);
    if (imageToolbarItems.length > 0) {
        editor.ui.registry.addContextToolbar('imageselection', {
            predicate: isImage,
            items: imageToolbarItems,
            position: 'node'
        });
    }
    const textToolbarItems = _api_Options__WEBPACK_IMPORTED_MODULE_0__.getTextSelectionToolbarItems(editor);
    if (textToolbarItems.length > 0) {
        editor.ui.registry.addContextToolbar('textselection', {
            predicate: (node)=>!isImage(node) && !editor.selection.isCollapsed() && isEditable(node),
            items: textToolbarItems,
            position: 'selection',
            scope: 'editor'
        });
    }
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

/*!***********************************************!*\
  !*** ./src/plugins/quickbars/main/ts/Main.ts ***!
  \***********************************************/
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _Plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Plugin */ "./src/plugins/quickbars/main/ts/Plugin.ts");

(0,_Plugin__WEBPACK_IMPORTED_MODULE_0__["default"])(); /** *****
 * DO NOT EXPORT ANYTHING
 *
 * IF YOU DO ROLLUP WILL LEAVE A GLOBAL ON THE PAGE
 *******/ 

})();

})()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdGlueW1jZS9wbHVnaW5zL3F1aWNrYmFycy9wbHVnaW4uanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aW55bWNlLy4vbGliL2dsb2JhbHMvdGlueW1jZS9jb3JlL2FwaS9QbHVnaW5NYW5hZ2VyLmpzIiwid2VicGFjazovL3RpbnltY2UvLi9saWIvZ2xvYmFscy90aW55bWNlL2NvcmUvYXBpL3V0aWwvRGVsYXkuanMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9rYXRhbWFyaS9zcmMvbWFpbi90cy9lcGhveC9rYXRhbWFyaS9hcGkvQXJyLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4va2F0YW1hcmkvc3JjL21haW4vdHMvZXBob3gva2F0YW1hcmkvYXBpL0Z1bi50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL2thdGFtYXJpL3NyYy9tYWluL3RzL2VwaG94L2thdGFtYXJpL2FwaS9HbG9iYWwudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9rYXRhbWFyaS9zcmMvbWFpbi90cy9lcGhveC9rYXRhbWFyaS9hcGkvSWQudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9rYXRhbWFyaS9zcmMvbWFpbi90cy9lcGhveC9rYXRhbWFyaS9hcGkvTnVtLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4va2F0YW1hcmkvc3JjL21haW4vdHMvZXBob3gva2F0YW1hcmkvYXBpL09iai50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL2thdGFtYXJpL3NyYy9tYWluL3RzL2VwaG94L2thdGFtYXJpL2FwaS9PcHRpb25hbC50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL2thdGFtYXJpL3NyYy9tYWluL3RzL2VwaG94L2thdGFtYXJpL2FwaS9SZXNvbHZlLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4va2F0YW1hcmkvc3JjL21haW4vdHMvZXBob3gva2F0YW1hcmkvYXBpL1R5cGUudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9rYXRhbWFyaS9zcmMvbWFpbi90cy9lcGhveC9rYXRhbWFyaS91dGlsL0lkVXRpbHMudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9zYW5kL3NyYy9tYWluL3RzL2VwaG94L3NhbmQvYXBpL1NhbmRIVE1MRWxlbWVudC50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL3NhbmQvc3JjL21haW4vdHMvZXBob3gvc2FuZC91dGlsL0dsb2JhbC50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL3N1Z2FyL3NyYy9tYWluL3RzL2VwaG94L3N1Z2FyL2FsaWVuL1JlY3Vyc2UudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9zdWdhci9zcmMvbWFpbi90cy9lcGhveC9zdWdhci9hcGkvZG9tL0NvbXBhcmUudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9zdWdhci9zcmMvbWFpbi90cy9lcGhveC9zdWdhci9hcGkvbm9kZS9Ob2RlVHlwZXMudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9zdWdhci9zcmMvbWFpbi90cy9lcGhveC9zdWdhci9hcGkvbm9kZS9TdWdhckJvZHkudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9zdWdhci9zcmMvbWFpbi90cy9lcGhveC9zdWdhci9hcGkvbm9kZS9TdWdhckVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9zdWdhci9zcmMvbWFpbi90cy9lcGhveC9zdWdhci9hcGkvbm9kZS9TdWdhckhlYWQudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9zdWdhci9zcmMvbWFpbi90cy9lcGhveC9zdWdhci9hcGkvbm9kZS9TdWdhck5vZGUudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9zdWdhci9zcmMvbWFpbi90cy9lcGhveC9zdWdhci9hcGkvbm9kZS9TdWdhclNoYWRvd0RvbS50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL3N1Z2FyL3NyYy9tYWluL3RzL2VwaG94L3N1Z2FyL2FwaS9wcm9wZXJ0aWVzL0F0dHJMaXN0LnRzIiwid2VicGFjazovL3RpbnltY2UvLi4vc3VnYXIvc3JjL21haW4vdHMvZXBob3gvc3VnYXIvYXBpL3Byb3BlcnRpZXMvQXR0cmlidXRlLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4vc3VnYXIvc3JjL21haW4vdHMvZXBob3gvc3VnYXIvYXBpL3Byb3BlcnRpZXMvQ2xhc3MudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9zdWdhci9zcmMvbWFpbi90cy9lcGhveC9zdWdhci9hcGkvcHJvcGVydGllcy9Ub2dnbGVyLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4vc3VnYXIvc3JjL21haW4vdHMvZXBob3gvc3VnYXIvYXBpL3NlYXJjaC9QcmVkaWNhdGVFeGlzdHMudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9zdWdhci9zcmMvbWFpbi90cy9lcGhveC9zdWdhci9hcGkvc2VhcmNoL1ByZWRpY2F0ZUZpbmQudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9zdWdhci9zcmMvbWFpbi90cy9lcGhveC9zdWdhci9hcGkvc2VhcmNoL1NlbGVjdG9yRmluZC50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL3N1Z2FyL3NyYy9tYWluL3RzL2VwaG94L3N1Z2FyL2FwaS9zZWFyY2gvU2VsZWN0b3JzLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4vc3VnYXIvc3JjL21haW4vdHMvZXBob3gvc3VnYXIvYXBpL3NlYXJjaC9UcmF2ZXJzZS50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL3N1Z2FyL3NyYy9tYWluL3RzL2VwaG94L3N1Z2FyL2ltcGwvQ2xhc3NMaXN0LnRzIiwid2VicGFjazovL3RpbnltY2UvLi4vc3VnYXIvc3JjL21haW4vdHMvZXBob3gvc3VnYXIvaW1wbC9DbG9zZXN0T3JBbmNlc3Rvci50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvcXVpY2tiYXJzL21haW4vdHMvUGx1Z2luLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9xdWlja2JhcnMvbWFpbi90cy9hcGkvQ29tbWFuZHMudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL3F1aWNrYmFycy9tYWluL3RzL2FwaS9PcHRpb25zLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9xdWlja2JhcnMvbWFpbi90cy9pbnNlcnQvQWN0aW9ucy50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvcXVpY2tiYXJzL21haW4vdHMvaW5zZXJ0L0J1dHRvbnMudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL3F1aWNrYmFycy9tYWluL3RzL2luc2VydC9Db252ZXJzaW9ucy50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvcXVpY2tiYXJzL21haW4vdHMvaW5zZXJ0L1BpY2tlci50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvcXVpY2tiYXJzL21haW4vdHMvaW5zZXJ0L1Rvb2xiYXJzLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9xdWlja2JhcnMvbWFpbi90cy9zZWxlY3Rpb24vVG9vbGJhcnMudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi8uLi9ub2RlX21vZHVsZXMvQGVwaG94L2Rpc3B1dGUvc3JjL21haW4vdHMvYXBpL0VxLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4vLi4vbm9kZV9tb2R1bGVzL0BlcGhveC9kaXNwdXRlL3NyYy9tYWluL3RzL2NvcmUvQXJyYXlVdGlsLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4vLi4vbm9kZV9tb2R1bGVzL0BlcGhveC9kaXNwdXRlL3NyYy9tYWluL3RzL2NvcmUvVHlwZS50cyIsIndlYnBhY2s6Ly90aW55bWNlL3dlYnBhY2svcnVudGltZS9kZWZpbmVfcHJvcGVydHlfZ2V0dGVycyIsIndlYnBhY2s6Ly90aW55bWNlL3dlYnBhY2svcnVudGltZS9oYXNfb3duX3Byb3BlcnR5Iiwid2VicGFjazovL3RpbnltY2Uvd2VicGFjay9ydW50aW1lL21ha2VfbmFtZXNwYWNlX29iamVjdCIsIndlYnBhY2s6Ly90aW55bWNlL3dlYnBhY2svcnVudGltZS9yc3BhY2tfdmVyc2lvbiIsIndlYnBhY2s6Ly90aW55bWNlL3dlYnBhY2svcnVudGltZS9yc3BhY2tfdW5pcXVlX2lkIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9xdWlja2JhcnMvbWFpbi90cy9NYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBnbG9iYWwgPSB0aW55bWNlLnV0aWwuVG9vbHMucmVzb2x2ZSgndGlueW1jZS5QbHVnaW5NYW5hZ2VyJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGdsb2JhbDtcbmV4cG9ydCB2YXIgUGx1Z2luTWFuYWdlciA9IGdsb2JhbDtcbiIsInZhciBnbG9iYWwgPSB0aW55bWNlLnV0aWwuVG9vbHMucmVzb2x2ZSgndGlueW1jZS51dGlsLkRlbGF5Jyk7XG5cbmV4cG9ydCBkZWZhdWx0IGdsb2JhbDtcbmV4cG9ydCB2YXIgRGVsYXkgPSBnbG9iYWw7XG4iLCJpbXBvcnQgeyBFcSB9IGZyb20gJ0BlcGhveC9kaXNwdXRlJztcblxuaW1wb3J0ICogYXMgRnVuIGZyb20gJy4vRnVuJztcbmltcG9ydCB7IE9wdGlvbmFsIH0gZnJvbSAnLi9PcHRpb25hbCc7XG5pbXBvcnQgKiBhcyBUeXBlIGZyb20gJy4vVHlwZSc7XG5cbnR5cGUgQXJyYXlNb3JwaGlzbTxULCBVPiA9ICh4OiBULCBpOiBudW1iZXIpID0+IFU7XG50eXBlIEFycmF5R3VhcmRQcmVkaWNhdGU8VCwgVSBleHRlbmRzIFQ+ID0gKHg6IFQsIGk6IG51bWJlcikgPT4geCBpcyBVO1xudHlwZSBBcnJheVByZWRpY2F0ZTxUPiA9IEFycmF5TW9ycGhpc208VCwgYm9vbGVhbj47XG50eXBlIENvbXBhcmF0b3I8VD4gPSAoYTogVCwgYjogVCkgPT4gbnVtYmVyO1xuXG5jb25zdCBuYXRpdmVTbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcbmNvbnN0IG5hdGl2ZUluZGV4T2YgPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZjtcbmNvbnN0IG5hdGl2ZVB1c2ggPSBBcnJheS5wcm90b3R5cGUucHVzaDtcblxuY29uc3QgcmF3SW5kZXhPZiA9IDxUPiAodHM6IEFycmF5TGlrZTxUPiwgdDogVCk6IG51bWJlciA9PlxuICBuYXRpdmVJbmRleE9mLmNhbGwodHMsIHQpO1xuXG5leHBvcnQgY29uc3QgaW5kZXhPZiA9IDxUID0gYW55Pih4czogQXJyYXlMaWtlPFQ+LCB4OiBUKTogT3B0aW9uYWw8bnVtYmVyPiA9PiB7XG4gIC8vIFRoZSByYXdJbmRleE9mIG1ldGhvZCBkb2VzIG5vdCB3cmFwIHVwIGluIGFuIG9wdGlvbi4gVGhpcyBpcyBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucy5cbiAgY29uc3QgciA9IHJhd0luZGV4T2YoeHMsIHgpO1xuICByZXR1cm4gciA9PT0gLTEgPyBPcHRpb25hbC5ub25lKCkgOiBPcHRpb25hbC5zb21lKHIpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbnRhaW5zID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4sIHg6IFQpOiBib29sZWFuID0+IHJhd0luZGV4T2YoeHMsIHgpID4gLTE7XG5cbmV4cG9ydCBjb25zdCBleGlzdHMgPSA8VCA9IGFueT4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlQcmVkaWNhdGU8VD4pOiBib29sZWFuID0+IHtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHhzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIGlmIChwcmVkKHgsIGkpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQgY29uc3QgcmFuZ2UgPSA8VD4obnVtOiBudW1iZXIsIGY6IChhOiBudW1iZXIpID0+IFQpOiBUW10gPT4ge1xuICBjb25zdCByOiBUW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW07IGkrKykge1xuICAgIHIucHVzaChmKGkpKTtcbiAgfVxuICByZXR1cm4gcjtcbn07XG5cbi8vIEl0J3MgYSB0b3RhbCBtaWNybyBvcHRpbWlzYXRpb24sIGJ1dCB0aGVzZSBkbyBtYWtlIHNvbWUgZGlmZmVyZW5jZS5cbi8vIFBhcnRpY3VsYXJseSBmb3IgYnJvd3NlcnMgb3RoZXIgdGhhbiBDaHJvbWUuXG4vLyAtIGxlbmd0aCBjYWNoaW5nXG4vLyBodHRwOi8vanNwZXJmLmNvbS9icm93c2VyLWRpZXQtanF1ZXJ5LWVhY2gtdnMtZm9yLWxvb3AvNjlcbi8vIC0gbm90IHVzaW5nIHB1c2hcbi8vIGh0dHA6Ly9qc3BlcmYuY29tL2FycmF5LWRpcmVjdC1hc3NpZ25tZW50LXZzLXB1c2gvMlxuXG5leHBvcnQgY29uc3QgY2h1bmsgPSA8VD4oYXJyYXk6IEFycmF5TGlrZTxUPiwgc2l6ZTogbnVtYmVyKTogVFtdW10gPT4ge1xuICBjb25zdCByOiBUW11bXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSArPSBzaXplKSB7XG4gICAgY29uc3QgczogVFtdID0gbmF0aXZlU2xpY2UuY2FsbChhcnJheSwgaSwgaSArIHNpemUpO1xuICAgIHIucHVzaChzKTtcbiAgfVxuICByZXR1cm4gcjtcbn07XG5cbmV4cG9ydCBjb25zdCBtYXAgPSA8VCA9IGFueSwgVSA9IGFueT4oeHM6IEFycmF5TGlrZTxUPiwgZjogQXJyYXlNb3JwaGlzbTxULCBVPik6IFVbXSA9PiB7XG4gIC8vIHByZS1hbGxvY2F0aW5nIGFycmF5IHNpemUgd2hlbiBpdCdzIGd1YXJhbnRlZWQgdG8gYmUga25vd25cbiAgLy8gaHR0cDovL2pzcGVyZi5jb20vcHVzaC1hbGxvY2F0ZWQtdnMtZHluYW1pYy8yMlxuICBjb25zdCBsZW4gPSB4cy5sZW5ndGg7XG4gIGNvbnN0IHIgPSBuZXcgQXJyYXkobGVuKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICByW2ldID0gZih4LCBpKTtcbiAgfVxuICByZXR1cm4gcjtcbn07XG5cbi8vIFVud291bmQgaW1wbGVtZW50aW5nIG90aGVyIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBlYWNoLlxuLy8gVGhlIGNvZGUgc2l6ZSBpcyByb3VnaGx5IHRoZSBzYW1lLCBhbmQgaXQgc2hvdWxkIGFsbG93IGZvciBiZXR0ZXIgb3B0aW1pc2F0aW9uLlxuLy8gY29uc3QgZWFjaCA9IGZ1bmN0aW9uPFQsIFU+KHhzOiBUW10sIGY6ICh4OiBULCBpPzogbnVtYmVyLCB4cz86IFRbXSkgPT4gdm9pZCk6IHZvaWQge1xuZXhwb3J0IGNvbnN0IGVhY2ggPSA8VCA9IGFueT4oeHM6IEFycmF5TGlrZTxUPiwgZjogQXJyYXlNb3JwaGlzbTxULCB2b2lkPik6IHZvaWQgPT4ge1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0geHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgZih4LCBpKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGVhY2hyID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4sIGY6IEFycmF5TW9ycGhpc208VCwgdm9pZD4pOiB2b2lkID0+IHtcbiAgZm9yIChsZXQgaSA9IHhzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIGYoeCwgaSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBwYXJ0aXRpb24gPSA8VCA9IGFueT4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlQcmVkaWNhdGU8VD4pOiB7IHBhc3M6IFRbXTsgZmFpbDogVFtdIH0gPT4ge1xuICBjb25zdCBwYXNzOiBUW10gPSBbXTtcbiAgY29uc3QgZmFpbDogVFtdID0gW107XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICBjb25zdCBhcnIgPSBwcmVkKHgsIGkpID8gcGFzcyA6IGZhaWw7XG4gICAgYXJyLnB1c2goeCk7XG4gIH1cbiAgcmV0dXJuIHsgcGFzcywgZmFpbCB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbHRlcjoge1xuICA8VCwgVSBleHRlbmRzIFQ+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5R3VhcmRQcmVkaWNhdGU8VCwgVT4pOiBVW107XG4gIDxUPih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheVByZWRpY2F0ZTxUPik6IFRbXTtcbn0gPSA8VD4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlQcmVkaWNhdGU8VD4pOiBUW10gPT4ge1xuICBjb25zdCByOiBUW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHhzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIGlmIChwcmVkKHgsIGkpKSB7XG4gICAgICByLnB1c2goeCk7XG4gICAgfVxuICB9XG4gIHJldHVybiByO1xufTtcblxuLypcbiAqIEdyb3VwcyBhbiBhcnJheSBpbnRvIGNvbnRpZ3VvdXMgYXJyYXlzIG9mIGxpa2UgZWxlbWVudHMuIFdoZXRoZXIgYW4gZWxlbWVudCBpcyBsaWtlIG9yIG5vdCBkZXBlbmRzIG9uIGYuXG4gKlxuICogZiBpcyBhIGZ1bmN0aW9uIHRoYXQgZGVyaXZlcyBhIHZhbHVlIGZyb20gYW4gZWxlbWVudCAtIGUuZy4gdHJ1ZSBvciBmYWxzZSwgb3IgYSBzdHJpbmcuXG4gKiBFbGVtZW50cyBhcmUgbGlrZSBpZiB0aGlzIGZ1bmN0aW9uIGdlbmVyYXRlcyB0aGUgc2FtZSB2YWx1ZSBmb3IgdGhlbSAoYWNjb3JkaW5nIHRvID09PSkuXG4gKlxuICpcbiAqIE9yZGVyIG9mIHRoZSBlbGVtZW50cyBpcyBwcmVzZXJ2ZWQuIEFyci5mbGF0dGVuKCkgb24gdGhlIHJlc3VsdCB3aWxsIHJldHVybiB0aGUgb3JpZ2luYWwgbGlzdCwgYXMgd2l0aCBIYXNrZWxsIGdyb3VwQnkgZnVuY3Rpb24uXG4gKiAgRm9yIGEgZ29vZCBleHBsYW5hdGlvbiwgc2VlIHRoZSBncm91cCBmdW5jdGlvbiAod2hpY2ggaXMgYSBzcGVjaWFsIGNhc2Ugb2YgZ3JvdXBCeSlcbiAqICBodHRwOi8vaGFja2FnZS5oYXNrZWxsLm9yZy9wYWNrYWdlL2Jhc2UtNC43LjAuMC9kb2NzL0RhdGEtTGlzdC5odG1sI3Y6Z3JvdXBcbiAqL1xuZXhwb3J0IGNvbnN0IGdyb3VwQnkgPSA8VD4oeHM6IEFycmF5TGlrZTxUPiwgZjogKGE6IFQpID0+IGFueSk6IFRbXVtdID0+IHtcbiAgaWYgKHhzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBbXTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgd2FzVHlwZSA9IGYoeHNbMF0pOyAvLyBpbml0aWFsIGNhc2UgZm9yIG1hdGNoaW5nXG4gICAgY29uc3QgcjogVFtdW10gPSBbXTtcbiAgICBsZXQgZ3JvdXA6IFRbXSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHhzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0geHNbaV07XG4gICAgICBjb25zdCB0eXBlID0gZih4KTtcbiAgICAgIGlmICh0eXBlICE9PSB3YXNUeXBlKSB7XG4gICAgICAgIHIucHVzaChncm91cCk7XG4gICAgICAgIGdyb3VwID0gW107XG4gICAgICB9XG4gICAgICB3YXNUeXBlID0gdHlwZTtcbiAgICAgIGdyb3VwLnB1c2goeCk7XG4gICAgfVxuICAgIGlmIChncm91cC5sZW5ndGggIT09IDApIHtcbiAgICAgIHIucHVzaChncm91cCk7XG4gICAgfVxuICAgIHJldHVybiByO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZm9sZHIgPSA8VCwgVT4oeHM6IEFycmF5TGlrZTxUPiwgZjogKGFjYzogVSwgeDogVCwgaTogbnVtYmVyKSA9PiBVLCBhY2M6IFUpOiBVID0+IHtcbiAgZWFjaHIoeHMsICh4LCBpKSA9PiB7XG4gICAgYWNjID0gZihhY2MsIHgsIGkpO1xuICB9KTtcbiAgcmV0dXJuIGFjYztcbn07XG5cbmV4cG9ydCBjb25zdCBmb2xkbCA9IDxUID0gYW55LCBVID0gYW55Pih4czogQXJyYXlMaWtlPFQ+LCBmOiAoYWNjOiBVLCB4OiBULCBpOiBudW1iZXIpID0+IFUsIGFjYzogVSk6IFUgPT4ge1xuICBlYWNoKHhzLCAoeCwgaSkgPT4ge1xuICAgIGFjYyA9IGYoYWNjLCB4LCBpKTtcbiAgfSk7XG4gIHJldHVybiBhY2M7XG59O1xuXG5leHBvcnQgY29uc3QgZmluZFVudGlsOiB7XG4gIDxULCBVIGV4dGVuZHMgVD4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlHdWFyZFByZWRpY2F0ZTxULCBVPiwgdW50aWw6IEFycmF5UHJlZGljYXRlPFQ+KTogT3B0aW9uYWw8VT47XG4gIDxUID0gYW55Pih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheVByZWRpY2F0ZTxUPiwgdW50aWw6IEFycmF5UHJlZGljYXRlPFQ+KTogT3B0aW9uYWw8VD47XG59ID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+LCB1bnRpbDogQXJyYXlQcmVkaWNhdGU8VD4pOiBPcHRpb25hbDxUPiA9PiB7XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICBpZiAocHJlZCh4LCBpKSkge1xuICAgICAgcmV0dXJuIE9wdGlvbmFsLnNvbWUoeCk7XG4gICAgfSBlbHNlIGlmICh1bnRpbCh4LCBpKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBPcHRpb25hbC5ub25lKCk7XG59O1xuXG5leHBvcnQgY29uc3QgZmluZDoge1xuICA8VCwgVSBleHRlbmRzIFQ+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5R3VhcmRQcmVkaWNhdGU8VCwgVT4pOiBPcHRpb25hbDxVPjtcbiAgPFQgPSBhbnk+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+KTogT3B0aW9uYWw8VD47XG59ID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+KTogT3B0aW9uYWw8VD4gPT4ge1xuICByZXR1cm4gZmluZFVudGlsKHhzLCBwcmVkLCBGdW4ubmV2ZXIpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmRJbmRleCA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheVByZWRpY2F0ZTxUPik6IE9wdGlvbmFsPG51bWJlcj4gPT4ge1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0geHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgaWYgKHByZWQoeCwgaSkpIHtcbiAgICAgIHJldHVybiBPcHRpb25hbC5zb21lKGkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBPcHRpb25hbC5ub25lKCk7XG59O1xuXG5leHBvcnQgY29uc3QgZmluZExhc3RJbmRleCA9IDxUPihhcnI6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlQcmVkaWNhdGU8VD4pOiBPcHRpb25hbDxudW1iZXI+ID0+IHtcbiAgZm9yIChsZXQgaSA9IGFyci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGlmIChwcmVkKGFycltpXSwgaSkpIHtcbiAgICAgIHJldHVybiBPcHRpb25hbC5zb21lKGkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBPcHRpb25hbC5ub25lKCk7XG59O1xuXG5leHBvcnQgY29uc3QgZmxhdHRlbiA9IDxUPih4czogQXJyYXlMaWtlPFRbXT4pOiBUW10gPT4ge1xuICAvLyBOb3RlLCB0aGlzIGlzIHBvc3NpYmxlIGJlY2F1c2UgcHVzaCBzdXBwb3J0cyBtdWx0aXBsZSBhcmd1bWVudHM6XG4gIC8vIGh0dHA6Ly9qc3BlcmYuY29tL2NvbmNhdC1wdXNoLzZcbiAgLy8gTm90ZSB0aGF0IGluIHRoZSBwYXN0LCBjb25jYXQoKSB3b3VsZCBzaWxlbnRseSB3b3JrICh2ZXJ5IHNsb3dseSkgZm9yIGFycmF5LWxpa2Ugb2JqZWN0cy5cbiAgLy8gV2l0aCB0aGlzIGNoYW5nZSBpdCB3aWxsIHRocm93IGFuIGVycm9yLlxuICBjb25zdCByOiBUW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHhzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgLy8gRW5zdXJlIHRoYXQgZWFjaCB2YWx1ZSBpcyBhbiBhcnJheSBpdHNlbGZcbiAgICBpZiAoIVR5cGUuaXNBcnJheSh4c1tpXSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQXJyLmZsYXR0ZW4gaXRlbSAnICsgaSArICcgd2FzIG5vdCBhbiBhcnJheSwgaW5wdXQ6ICcgKyB4cyk7XG4gICAgfVxuICAgIG5hdGl2ZVB1c2guYXBwbHkociwgeHNbaV0pO1xuICB9XG4gIHJldHVybiByO1xufTtcblxuZXhwb3J0IGNvbnN0IGJpbmQgPSA8VCA9IGFueSwgVSA9IGFueT4oeHM6IEFycmF5TGlrZTxUPiwgZjogQXJyYXlNb3JwaGlzbTxULCBVW10+KTogVVtdID0+XG4gIGZsYXR0ZW4obWFwKHhzLCBmKSk7XG5cbmV4cG9ydCBjb25zdCBmb3JhbGwgPSA8VD4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlQcmVkaWNhdGU8VD4pOiBib29sZWFuID0+IHtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHhzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIGlmIChwcmVkKHgsIGkpICE9PSB0cnVlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxuZXhwb3J0IGNvbnN0IGVxdWFsID0gPFQ+KGExOiBBcnJheUxpa2U8VD4sIGEyOiBBcnJheUxpa2U8VD4sIGVxOiBFcS5FcTxUPiA9IEVxLmVxQW55KTogYm9vbGVhbiA9PlxuICBFcS5lcUFycmF5KGVxKS5lcShhMSwgYTIpO1xuXG5leHBvcnQgY29uc3QgcmV2ZXJzZSA9IDxUPih4czogQXJyYXlMaWtlPFQ+KTogVFtdID0+IHtcbiAgY29uc3QgcjogVFtdID0gbmF0aXZlU2xpY2UuY2FsbCh4cywgMCk7XG4gIHIucmV2ZXJzZSgpO1xuICByZXR1cm4gcjtcbn07XG5cbmV4cG9ydCBjb25zdCBkaWZmZXJlbmNlID0gPFQ+KGExOiBBcnJheUxpa2U8VD4sIGEyOiBBcnJheUxpa2U8VD4pOiBUW10gPT4gZmlsdGVyKGExLCAoeCkgPT4gIWNvbnRhaW5zKGEyLCB4KSk7XG5cbmV4cG9ydCBjb25zdCBtYXBUb09iamVjdDoge1xuICA8VCBleHRlbmRzIHN0cmluZywgVT4oeHM6IEFycmF5TGlrZTxUPiwgZjogKHg6IFQsIGk6IG51bWJlcikgPT4gVSk6IFJlY29yZDxULCBVPjtcbiAgPFQsIFIgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+Pih4czogQXJyYXlMaWtlPFQ+LCBmOiAoeDogVCwgaTogbnVtYmVyKSA9PiBSW2tleW9mIFJdKTogUjtcbn0gPSA8VCwgUiBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4+KHhzOiBBcnJheUxpa2U8VD4sIGY6ICh4OiBULCBpOiBudW1iZXIpID0+IFJba2V5b2YgUl0pOiBSID0+IHtcbiAgY29uc3QgciA9IHt9IGFzIFI7XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICByW1N0cmluZyh4KSBhcyBrZXlvZiBSXSA9IGYoeCwgaSk7XG4gIH1cbiAgcmV0dXJuIHI7XG59O1xuXG5leHBvcnQgY29uc3QgcHVyZSA9IDxUPih4OiBUKTogVFtdID0+IFsgeCBdO1xuXG5leHBvcnQgY29uc3Qgc29ydCA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCBjb21wYXJhdG9yPzogQ29tcGFyYXRvcjxUPik6IFRbXSA9PiB7XG4gIGNvbnN0IGNvcHk6IFRbXSA9IG5hdGl2ZVNsaWNlLmNhbGwoeHMsIDApO1xuICBjb3B5LnNvcnQoY29tcGFyYXRvcik7XG4gIHJldHVybiBjb3B5O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldCA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCBpOiBudW1iZXIpOiBPcHRpb25hbDxUPiA9PiBpID49IDAgJiYgaSA8IHhzLmxlbmd0aCA/IE9wdGlvbmFsLnNvbWUoeHNbaV0pIDogT3B0aW9uYWwubm9uZSgpO1xuXG5leHBvcnQgY29uc3QgaGVhZCA9IDxUPih4czogQXJyYXlMaWtlPFQ+KTogT3B0aW9uYWw8VD4gPT4gZ2V0KHhzLCAwKTtcblxuZXhwb3J0IGNvbnN0IGxhc3QgPSA8VD4oeHM6IEFycmF5TGlrZTxUPik6IE9wdGlvbmFsPFQ+ID0+IGdldCh4cywgeHMubGVuZ3RoIC0gMSk7XG5cbmV4cG9ydCBjb25zdCBmcm9tOiA8VD4oeDogQXJyYXlMaWtlPFQ+KSA9PiBUW10gPSBUeXBlLmlzRnVuY3Rpb24oQXJyYXkuZnJvbSkgPyBBcnJheS5mcm9tIDogKHgpID0+IG5hdGl2ZVNsaWNlLmNhbGwoeCk7XG5cbmV4cG9ydCBjb25zdCBmaW5kTWFwID0gPEEsIEI+KGFycjogQXJyYXlMaWtlPEE+LCBmOiAoYTogQSwgaW5kZXg6IG51bWJlcikgPT4gT3B0aW9uYWw8Qj4pOiBPcHRpb25hbDxCPiA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgciA9IGYoYXJyW2ldLCBpKTtcbiAgICBpZiAoci5pc1NvbWUoKSkge1xuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuICB9XG4gIHJldHVybiBPcHRpb25hbC5ub25lPEI+KCk7XG59O1xuXG5leHBvcnQgY29uc3QgdW5pcXVlID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4sIGNvbXBhcmF0b3I/OiAoYTogVCwgYjogVCkgPT4gYm9vbGVhbik6IFRbXSA9PiB7XG4gIGNvbnN0IHI6IFRbXSA9IFtdO1xuXG4gIGNvbnN0IGlzRHVwbGljYXRlZCA9IFR5cGUuaXNGdW5jdGlvbihjb21wYXJhdG9yKSA/XG4gICAgKHg6IFQpID0+IGV4aXN0cyhyLCAoaSkgPT4gY29tcGFyYXRvcihpLCB4KSkgOlxuICAgICh4OiBUKSA9PiBjb250YWlucyhyLCB4KTtcblxuICBmb3IgKGxldCBpID0gMCwgbGVuID0geHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgaWYgKCFpc0R1cGxpY2F0ZWQoeCkpIHtcbiAgICAgIHIucHVzaCh4KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcjtcbn07XG4iLCJpbXBvcnQgKiBhcyBUeXBlIGZyb20gJy4vVHlwZSc7XG5cbmNvbnN0IG5vb3A6ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZFxuPSAoKSA9PiB7IH07XG5cbmNvbnN0IG5vYXJnOiA8VD4oZjogKCkgPT4gVCkgPT4gKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkXG49IChmKSA9PiAoKSA9PiBmKCk7XG5cbi8qKiBDb21wb3NlIGEgdW5hcnkgZnVuY3Rpb24gd2l0aCBhbiBuLWFyeSBmdW5jdGlvbiAqL1xuY29uc3QgY29tcG9zZSA9IDxUIGV4dGVuZHMgYW55W10sIFUsIFY+KGZhOiAodjogVSkgPT4gViwgZmI6ICguLi54OiBUKSA9PiBVKTogKC4uLng6IFQpID0+IFYgPT4ge1xuICByZXR1cm4gKC4uLmFyZ3M6IFQpID0+IHtcbiAgICByZXR1cm4gZmEoZmIuYXBwbHkobnVsbCwgYXJncykpO1xuICB9O1xufTtcblxuLyoqIENvbXBvc2UgdHdvIHVuYXJ5IGZ1bmN0aW9ucy4gU2ltaWxhciB0byBjb21wb3NlLCBidXQgYXZvaWRzIHVzaW5nIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS4gKi9cbmNvbnN0IGNvbXBvc2UxID0gPEEsIEIsIEM+IChmYmM6IChiOiBCKSA9PiBDLCBmYWI6IChhOiBBKSA9PiBCKSA9PiAoYTogQSk6IEMgPT5cbiAgZmJjKGZhYihhKSk7XG5cbmNvbnN0IGNvbnN0YW50ID0gPFQ+KHZhbHVlOiBUKTogKCkgPT4gVCA9PiB7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xufTtcblxuY29uc3QgaWRlbnRpdHkgPSA8VCA9IGFueT4oeDogVCk6IFQgPT4ge1xuICByZXR1cm4geDtcbn07XG5cbmNvbnN0IHRyaXBsZUVxdWFscyA9IDxUPihhOiBULCBiOiBUKTogYm9vbGVhbiA9PiB7XG4gIHJldHVybiBhID09PSBiO1xufTtcblxuZnVuY3Rpb24gY3VycnkgPFJFU1QgZXh0ZW5kcyBhbnlbXSwgT1VUPihmbjogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQpOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVDtcbmZ1bmN0aW9uIGN1cnJ5IDxBLCBSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46IChhOiBBLCAuLi5yZXN0QXJnczogUkVTVCkgPT4gT1VULCBhOiBBKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8QSwgQiwgUkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoYTogQSwgYjogQiwgLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCwgYTogQSwgYjogQik6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPEEsIEIsIEMsIFJFU1QgZXh0ZW5kcyBhbnlbXSwgT1VUPihmbjogKGE6IEEsIGI6IEIsIGM6IEMsIC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQsIGE6IEEsIGI6IEIsIGM6IEMpOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVDtcbmZ1bmN0aW9uIGN1cnJ5IDxBLCBCLCBDLCBELCBSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46IChhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCAuLi5yZXN0QXJnczogUkVTVCkgPT4gT1VULCBhOiBBLCBiOiBCLCBjOiBDLCBkOiBEKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8QSwgQiwgQywgRCwgRSwgUkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCwgYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSk6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPEEsIEIsIEMsIEQsIEUsIEYsIFJFU1QgZXh0ZW5kcyBhbnlbXSwgT1VUPihmbjogKGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIGY6IEYsIC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQsIGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIGY6IEYpOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVDtcbmZ1bmN0aW9uIGN1cnJ5IDxBLCBCLCBDLCBELCBFLCBGLCBHLCBSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46IChhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCBmOiBGLCBnOiBHLCAuLi5yZXN0QXJnczogUkVTVCkgPT4gT1VULCBhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCBmOiBGLCBnOiBHKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8QSwgQiwgQywgRCwgRSwgRiwgRywgSCwgUkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgZjogRiwgZzogRywgaDogSCwgLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCwgYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgZjogRiwgZzogRywgaDogSCk6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPEEsIEIsIEMsIEQsIEUsIEYsIEcsIEgsIEksIFJFU1QgZXh0ZW5kcyBhbnlbXSwgT1VUPihmbjogKGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIGY6IEYsIGc6IEcsIGg6IEgsIGk6IEksIC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQsIGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIGY6IEYsIGc6IEcsIGg6IEgsIGk6IEkpOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVDtcbmZ1bmN0aW9uIGN1cnJ5IDxBLCBCLCBDLCBELCBFLCBGLCBHLCBILCBJLCBKLCBSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46IChhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCBmOiBGLCBnOiBHLCBoOiBILCBpOiBJLCBqOiBKLCAuLi5yZXN0QXJnczogUkVTVCkgPT4gT1VULCBhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCBmOiBGLCBnOiBHLCBoOiBILCBpOiBJLCBqOiBKKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8T1VUPihmbjogKC4uLmFsbEFyZ3M6IGFueVtdKSA9PiBPVVQsIC4uLmluaXRpYWxBcmdzOiBhbnlbXSk6ICguLi5yZXN0QXJnczogYW55W10pID0+IE9VVCB7XG4gIHJldHVybiAoLi4ucmVzdEFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3QgYWxsID0gaW5pdGlhbEFyZ3MuY29uY2F0KHJlc3RBcmdzKTtcbiAgICByZXR1cm4gZm4uYXBwbHkobnVsbCwgYWxsKTtcbiAgfTtcbn1cblxuY29uc3Qgbm90ID0gPFQ+KGY6ICh0OiBUKSA9PiBib29sZWFuKSA9PiAodDogVCk6IGJvb2xlYW4gPT5cbiAgIWYodCk7XG5cbmNvbnN0IGRpZSA9IChtc2c6IHN0cmluZykgPT4ge1xuICByZXR1cm4gKCk6IG5ldmVyID0+IHtcbiAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcbiAgfTtcbn07XG5cbmNvbnN0IGFwcGx5ID0gPFQ+KGY6ICgpID0+IFQpOiBUID0+IHtcbiAgcmV0dXJuIGYoKTtcbn07XG5cbmNvbnN0IGNhbGwgPSAoZjogKCkgPT4gYW55KTogdm9pZCA9PiB7XG4gIGYoKTtcbn07XG5cbmNvbnN0IG5ldmVyOiAoLi4uYXJnczogYW55W10pID0+IGZhbHNlID0gY29uc3RhbnQ8ZmFsc2U+KGZhbHNlKTtcbmNvbnN0IGFsd2F5czogKC4uLmFyZ3M6IGFueVtdKSA9PiB0cnVlID0gY29uc3RhbnQ8dHJ1ZT4odHJ1ZSk7XG5cbi8qIFVzZWQgdG8gd2Vha2VuIHR5cGVzICovXG5jb25zdCB3ZWFrZW4gPSA8QSwgQiBleHRlbmRzIEE+KGI6IEIpOiBBID0+IGI7XG5cbnR5cGUgRnVuPFgsIFk+ID0gKHg6IFgpID0+IFk7XG5jb25zdCBwaXBlOiB7XG4gIDxBLCBCPihhOiBBLCBhYjogRnVuPEEsIEI+KTogQjtcbiAgPEEsIEIsIEM+KGE6IEEsIGFiOiBGdW48QSwgQj4sIGJjOiBGdW48QiwgQz4pOiBDO1xuICA8QSwgQiwgQywgRD4oYTogQSwgYWI6IEZ1bjxBLCBCPiwgYmM6IEZ1bjxCLCBDPiwgY2Q6IEZ1bjxDLCBEPik6IEQ7XG4gIDxBLCBCLCBDLCBELCBFPihhOiBBLCBhYjogRnVuPEEsIEI+LCBiYzogRnVuPEIsIEM+LCBjZDogRnVuPEMsIEQ+LCBkZTogRnVuPEQsIEU+KTogRTtcbiAgPEEsIEIsIEMsIEQsIEUsIEY+KGE6IEEsIGFiOiBGdW48QSwgQj4sIGJjOiBGdW48QiwgQz4sIGNkOiBGdW48QywgRD4sIGRlOiBGdW48RCwgRT4sIGVmOiBGdW48RSwgRj4pOiBGO1xuICA8QSwgQiwgQywgRCwgRSwgRiwgRz4oYTogQSwgYWI6IEZ1bjxBLCBCPiwgYmM6IEZ1bjxCLCBDPiwgY2Q6IEZ1bjxDLCBEPiwgZGU6IEZ1bjxELCBFPiwgZWY6IEZ1bjxFLCBGPiwgZmc6IEZ1bjxGLCBHPik6IEc7XG4gIDxBLCBCLCBDLCBELCBFLCBGLCBHLCBIPihhOiBBLCBhYjogRnVuPEEsIEI+LCBiYzogRnVuPEIsIEM+LCBjZDogRnVuPEMsIEQ+LCBkZTogRnVuPEQsIEU+LCBlZjogRnVuPEUsIEY+LCBmZzogRnVuPEYsIEc+LCBnaDogRnVuPEcsIEg+KTogSDtcbn0gPVxuICA8QSwgQiwgQywgRCwgRSwgRiwgRywgSD4oYTogQSwgYWI6IEZ1bjxBLCBCPiwgYmM/OiBGdW48QiwgQz4sIGNkPzogRnVuPEMsIEQ+LCBkZT86IEZ1bjxELCBFPiwgZWY/OiBGdW48RSwgRj4sIGZnPzogRnVuPEYsIEc+LCBnaD86IEZ1bjxHLCBIPik6IEIgfCBDIHwgRCB8IEUgfCBGIHwgRyB8IEggPT4ge1xuICAgIGNvbnN0IGIgPSBhYihhKTtcbiAgICBpZiAoVHlwZS5pc051bGxhYmxlKGJjKSkge1xuICAgICAgcmV0dXJuIGI7XG4gICAgfVxuXG4gICAgY29uc3QgYyA9IGJjKGIpO1xuICAgIGlmIChUeXBlLmlzTnVsbGFibGUoY2QpKSB7XG4gICAgICByZXR1cm4gYztcbiAgICB9XG5cbiAgICBjb25zdCBkID0gY2QoYyk7XG4gICAgaWYgKFR5cGUuaXNOdWxsYWJsZShkZSkpIHtcbiAgICAgIHJldHVybiBkO1xuICAgIH1cblxuICAgIGNvbnN0IGUgPSBkZShkKTtcbiAgICBpZiAoVHlwZS5pc051bGxhYmxlKGVmKSkge1xuICAgICAgcmV0dXJuIGU7XG4gICAgfVxuXG4gICAgY29uc3QgZiA9IGVmKGUpO1xuICAgIGlmIChUeXBlLmlzTnVsbGFibGUoZmcpKSB7XG4gICAgICByZXR1cm4gZjtcbiAgICB9XG5cbiAgICBjb25zdCBnID0gZmcoZik7XG4gICAgaWYgKFR5cGUuaXNOdWxsYWJsZShnaCkpIHtcbiAgICAgIHJldHVybiBnO1xuICAgIH1cblxuICAgIHJldHVybiBnaChnKTtcbiAgfTtcblxuZXhwb3J0IHtcbiAgbm9vcCxcbiAgbm9hcmcsXG4gIGNvbXBvc2UsXG4gIGNvbXBvc2UxLFxuICBjb25zdGFudCxcbiAgaWRlbnRpdHksXG4gIHRyaXBsZUVxdWFscyxcbiAgY3VycnksXG4gIG5vdCxcbiAgZGllLFxuICBhcHBseSxcbiAgY2FsbCxcbiAgbmV2ZXIsXG4gIGFsd2F5cyxcbiAgd2Vha2VuLFxuICBwaXBlXG59O1xuIiwiLy8gVXNlIHdpbmRvdyBvYmplY3QgYXMgdGhlIGdsb2JhbCBpZiBpdCdzIGF2YWlsYWJsZSBzaW5jZSBDU1Agd2lsbCBibG9jayBzY3JpcHQgZXZhbHNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8taW1wbGllZC1ldmFsXG5leHBvcnQgY29uc3QgR2xvYmFsID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBGdW5jdGlvbigncmV0dXJuIHRoaXM7JykoKTtcbiIsImltcG9ydCAqIGFzIElkVXRpbHMgZnJvbSAnLi4vdXRpbC9JZFV0aWxzJztcblxuaW1wb3J0ICogYXMgTnVtIGZyb20gJy4vTnVtJztcblxuLyoqXG4gKiBHZW5lcmF0ZSBhIHVuaXF1ZSBpZGVudGlmaWVyLlxuICpcbiAqIFRoZSB1bmlxdWUgcG9ydGlvbiBvZiB0aGUgaWRlbnRpZmllciBvbmx5IGNvbnRhaW5zIGFuIHVuZGVyc2NvcmVcbiAqIGFuZCBkaWdpdHMsIHNvIHRoYXQgaXQgbWF5IHNhZmVseSBiZSB1c2VkIHdpdGhpbiBIVE1MIGF0dHJpYnV0ZXMuXG4gKlxuICogVGhlIGNoYW5jZSBvZiBnZW5lcmF0aW5nIGEgbm9uLXVuaXF1ZSBpZGVudGlmaWVyIGhhcyBiZWVuIG1pbmltaXplZFxuICogYnkgY29tYmluaW5nIHRoZSBjdXJyZW50IHRpbWUsIGEgcmFuZG9tIG51bWJlciBhbmQgYSBvbmUtdXAgY291bnRlci5cbiAqXG4gKiBnZW5lcmF0ZSA6OiBTdHJpbmcgLT4gU3RyaW5nXG4gKi9cbmxldCB1bmlxdWUgPSAwO1xuXG5jb25zdCBnZW5lcmF0ZSA9IChwcmVmaXg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCB0aW1lID0gZGF0ZS5nZXRUaW1lKCk7XG4gIGNvbnN0IHJhbmRvbSA9IE1hdGguZmxvb3IoTnVtLnJhbmRvbSgpICogMTAwMDAwMDAwMCk7XG5cbiAgdW5pcXVlKys7XG5cbiAgcmV0dXJuIHByZWZpeCArICdfJyArIHJhbmRvbSArIHVuaXF1ZSArIFN0cmluZyh0aW1lKTtcbn07XG5cbi8qKlxuICogR2VuZXJhdGUgYSB1dWlkdjQgc3RyaW5nXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggUkZDIDQxMjIgKGh0dHBzOi8vZGF0YXRyYWNrZXIuaWV0Zi5vcmcvZG9jL2h0bWwvcmZjNDEyMilcbiAqL1xuY29uc3QgdXVpZFY0ID0gKCk6IGAke3N0cmluZ30tJHtzdHJpbmd9LSR7c3RyaW5nfS0ke3N0cmluZ30tJHtzdHJpbmd9YCA9PiB7XG5cbiAgaWYgKHdpbmRvdy5pc1NlY3VyZUNvbnRleHQpIHtcbiAgICByZXR1cm4gd2luZG93LmNyeXB0by5yYW5kb21VVUlEKCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIElkVXRpbHMudXVpZFY0U3RyaW5nKCk7XG4gIH1cbn07XG5cbmV4cG9ydCB7XG4gIGdlbmVyYXRlLFxuICB1dWlkVjRcbn07XG4iLCIvKipcbiAqIEFkZHMgdHdvIG51bWJlcnMsIGFuZCB3cmFwIHRvIGEgcmFuZ2UuXG4gKiBJZiB0aGUgcmVzdWx0IG92ZXJmbG93cyB0byB0aGUgcmlnaHQsIHNuYXAgdG8gdGhlIGxlZnQuXG4gKiBJZiB0aGUgcmVzdWx0IG92ZXJmbG93cyB0byB0aGUgbGVmdCwgc25hcCB0byB0aGUgcmlnaHQuXG4gKi9cbmV4cG9ydCBjb25zdCBjeWNsZUJ5ID0gKHZhbHVlOiBudW1iZXIsIGRlbHRhOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciA9PiB7XG4gIGNvbnN0IHIgPSB2YWx1ZSArIGRlbHRhO1xuICBpZiAociA+IG1heCkge1xuICAgIHJldHVybiBtaW47XG4gIH0gZWxzZSBpZiAociA8IG1pbikge1xuICAgIHJldHVybiBtYXg7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHI7XG4gIH1cbn07XG5cbi8vIEFTU1VNUFRJT046IE1heCB3aWxsIGFsd2F5cyBiZSBsYXJnZXIgdGhhbiBtaW5cbmV4cG9ydCBjb25zdCBjbGFtcCA9ICh2YWx1ZTogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIgPT5cbiAgTWF0aC5taW4oTWF0aC5tYXgodmFsdWUsIG1pbiksIG1heCk7XG5cbi8vIHRoZSBkaXZpc2lvbiBpcyBtZWFudCB0byBnZXQgYSBudW1iZXIgYmV0d2VlbiAwIGFuZCAxIGZvciBtb3JlIGluZm9ybWF0aW9uIGNoZWNrIHRoaXMgZGlzY3Vzc2lvbjogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTgyODU5NDEvaG93LXRvLXJlcGxhY2UtbWF0aC1yYW5kb20td2l0aC1jcnlwdG8tZ2V0cmFuZG9tdmFsdWVzLWFuZC1rZWVwLXNhbWUtcmVzdWx0XG5leHBvcnQgY29uc3QgcmFuZG9tID0gKCk6IG51bWJlciA9PiB3aW5kb3cuY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDMyQXJyYXkoMSkpWzBdIC8gNDI5NDk2NzI5NTtcbiIsImltcG9ydCB7IEVxIH0gZnJvbSAnQGVwaG94L2Rpc3B1dGUnO1xuXG5pbXBvcnQgKiBhcyBGdW4gZnJvbSAnLi9GdW4nO1xuaW1wb3J0IHsgT3B0aW9uYWwgfSBmcm9tICcuL09wdGlvbmFsJztcblxudHlwZSBPYmpLZXlzPFQgZXh0ZW5kcyB7fT4gPSBFeHRyYWN0PGtleW9mIFQsIHN0cmluZz47XG50eXBlIE9iakNhbGxiYWNrPFQgZXh0ZW5kcyB7fT4gPSAodmFsdWU6IFRba2V5b2YgVF0sIGtleTogT2JqS2V5czxUPikgPT4gdm9pZDtcbnR5cGUgT2JqTW9ycGhpc208VCBleHRlbmRzIHt9LCBSPiA9ICh2YWx1ZTogVFtrZXlvZiBUXSwga2V5OiBPYmpLZXlzPFQ+KSA9PiBSO1xudHlwZSBPYmpHdWFyZFByZWRpY2F0ZTxUIGV4dGVuZHMge30sIFUgZXh0ZW5kcyBUW2tleW9mIFRdPiA9ICh2YWx1ZTogVFtrZXlvZiBUXSwga2V5OiBPYmpLZXlzPFQ+KSA9PiB2YWx1ZSBpcyBVO1xudHlwZSBPYmpQcmVkaWNhdGU8VCBleHRlbmRzIHt9PiA9ICh2YWx1ZTogVFtrZXlvZiBUXSwga2V5OiBPYmpLZXlzPFQ+KSA9PiBib29sZWFuO1xuXG4vLyBUaGVyZSBhcmUgbWFueSB2YXJpYXRpb25zIG9mIE9iamVjdCBpdGVyYXRpb24gdGhhdCBhcmUgZmFzdGVyIHRoYW4gdGhlICdmb3ItaW4nIHN0eWxlOlxuLy8gaHR0cDovL2pzcGVyZi5jb20vb2JqZWN0LWtleXMtaXRlcmF0aW9uLzEwN1xuLy9cbi8vIFVzZSB0aGUgbmF0aXZlIGtleXMgaWYgaXQgaXMgYXZhaWxhYmxlIChJRTkrKSwgb3RoZXJ3aXNlIGZhbGwgYmFjayB0byBtYW51YWxseSBmaWx0ZXJpbmdcbmV4cG9ydCBjb25zdCBrZXlzID0gT2JqZWN0LmtleXM7XG5cbmV4cG9ydCBjb25zdCBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5oYXNPd25Qcm9wZXJ0eTtcblxuZXhwb3J0IGNvbnN0IGVhY2ggPSA8VCBleHRlbmRzIHt9PihvYmo6IFQsIGY6IE9iakNhbGxiYWNrPFQ+KTogdm9pZCA9PiB7XG4gIGNvbnN0IHByb3BzID0ga2V5cyhvYmopIGFzIEFycmF5PE9iaktleXM8VD4+O1xuICBmb3IgKGxldCBrID0gMCwgbGVuID0gcHJvcHMubGVuZ3RoOyBrIDwgbGVuOyBrKyspIHtcbiAgICBjb25zdCBpID0gcHJvcHNba107XG4gICAgY29uc3QgeCA9IG9ialtpXTtcbiAgICBmKHgsIGkpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgbWFwID0gPFQgZXh0ZW5kcyB7fSwgUj4ob2JqOiBULCBmOiBPYmpNb3JwaGlzbTxULCBSPik6IHsgW2sgaW4ga2V5b2YgVF06IFIgfSA9PiB7XG4gIHJldHVybiB0dXBsZU1hcDx7IFtrIGluIGtleW9mIFRdOiBSIH0sIFQ+KG9iaiwgKHgsIGkpID0+ICh7XG4gICAgazogaSxcbiAgICB2OiBmKHgsIGkpXG4gIH0pKTtcbn07XG5cbmV4cG9ydCBjb25zdCB0dXBsZU1hcCA9IDxSIGV4dGVuZHMge30sIFQgZXh0ZW5kcyB7fT4ob2JqOiBULCBmOiBPYmpNb3JwaGlzbTxULCB7IGs6IGtleW9mIFI7IHY6IFJba2V5b2YgUl0gfT4pOiBSID0+IHtcbiAgY29uc3QgciA9IHt9IGFzIFI7XG4gIGVhY2gob2JqLCAoeCwgaSkgPT4ge1xuICAgIGNvbnN0IHR1cGxlID0gZih4LCBpKTtcbiAgICByW3R1cGxlLmtdID0gdHVwbGUudjtcbiAgfSk7XG4gIHJldHVybiByO1xufTtcblxuY29uc3Qgb2JqQWNjID0gPFQgZXh0ZW5kcyB7fT4ocjogVCkgPT4gKHg6IFRba2V5b2YgVF0sIGk6IGtleW9mIFQpOiB2b2lkID0+IHtcbiAgcltpXSA9IHg7XG59O1xuXG5jb25zdCBpbnRlcm5hbEZpbHRlciA9IDxUIGV4dGVuZHMge30+KG9iajogVCwgcHJlZDogT2JqUHJlZGljYXRlPFQ+LCBvblRydWU6IE9iakNhbGxiYWNrPFQ+LCBvbkZhbHNlOiBPYmpDYWxsYmFjazxUPikgPT4ge1xuICBlYWNoKG9iaiwgKHgsIGkpID0+IHtcbiAgICAocHJlZCh4LCBpKSA/IG9uVHJ1ZSA6IG9uRmFsc2UpKHgsIGkpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBiaWZpbHRlciA9IDxUIGV4dGVuZHMge30+KG9iajogVCwgcHJlZDogT2JqUHJlZGljYXRlPFQ+KTogeyB0OiBSZWNvcmQ8c3RyaW5nLCBUW2tleW9mIFRdPjsgZjogUmVjb3JkPHN0cmluZywgVFtrZXlvZiBUXT4gfSA9PiB7XG4gIGNvbnN0IHQ6IFJlY29yZDxzdHJpbmcsIFRba2V5b2YgVF0+ID0ge307XG4gIGNvbnN0IGY6IFJlY29yZDxzdHJpbmcsIFRba2V5b2YgVF0+ID0ge307XG4gIGludGVybmFsRmlsdGVyKG9iaiwgcHJlZCwgb2JqQWNjKHQpLCBvYmpBY2MoZikpO1xuICByZXR1cm4geyB0LCBmIH07XG59O1xuXG5leHBvcnQgY29uc3QgZmlsdGVyOiB7XG4gIDxUIGV4dGVuZHMge30sIFUgZXh0ZW5kcyBUW2tleW9mIFRdPihvYmo6IFQsIHByZWQ6IE9iakd1YXJkUHJlZGljYXRlPFQsIFU+KTogUmVjb3JkPHN0cmluZywgVT47XG4gIDxUIGV4dGVuZHMge30+KG9iajogVCwgcHJlZDogT2JqUHJlZGljYXRlPFQ+KTogUmVjb3JkPHN0cmluZywgVFtrZXlvZiBUXT47XG59ID0gPFQgZXh0ZW5kcyB7fT4ob2JqOiBULCBwcmVkOiBPYmpQcmVkaWNhdGU8VD4pOiBSZWNvcmQ8c3RyaW5nLCBUW2tleW9mIFRdPiA9PiB7XG4gIGNvbnN0IHQ6IFJlY29yZDxzdHJpbmcsIFRba2V5b2YgVF0+ID0ge307XG4gIGludGVybmFsRmlsdGVyKG9iaiwgcHJlZCwgb2JqQWNjKHQpLCBGdW4ubm9vcCk7XG4gIHJldHVybiB0O1xufTtcblxuZXhwb3J0IGNvbnN0IG1hcFRvQXJyYXkgPSA8VCBleHRlbmRzIHt9LCBSPihvYmo6IFQsIGY6IE9iak1vcnBoaXNtPFQsIFI+KTogUltdID0+IHtcbiAgY29uc3QgcjogUltdID0gW107XG4gIGVhY2gob2JqLCAodmFsdWUsIG5hbWUpID0+IHtcbiAgICByLnB1c2goZih2YWx1ZSwgbmFtZSkpO1xuICB9KTtcbiAgcmV0dXJuIHI7XG59O1xuXG5leHBvcnQgY29uc3QgZmluZCA9IDxUIGV4dGVuZHMge30+KG9iajogVCwgcHJlZDogKHZhbHVlOiBUW2tleW9mIFRdLCBrZXk6IE9iaktleXM8VD4sIG9iajogVCkgPT4gYm9vbGVhbik6IE9wdGlvbmFsPFRba2V5b2YgVF0+ID0+IHtcbiAgY29uc3QgcHJvcHMgPSBrZXlzKG9iaikgYXMgQXJyYXk8T2JqS2V5czxUPj47XG4gIGZvciAobGV0IGsgPSAwLCBsZW4gPSBwcm9wcy5sZW5ndGg7IGsgPCBsZW47IGsrKykge1xuICAgIGNvbnN0IGkgPSBwcm9wc1trXTtcbiAgICBjb25zdCB4ID0gb2JqW2ldO1xuICAgIGlmIChwcmVkKHgsIGksIG9iaikpIHtcbiAgICAgIHJldHVybiBPcHRpb25hbC5zb21lKHgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gT3B0aW9uYWwubm9uZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IHZhbHVlcyA9IDxUIGV4dGVuZHMge30+KG9iajogVCk6IEFycmF5PFRba2V5b2YgVF0+ID0+IHtcbiAgcmV0dXJuIG1hcFRvQXJyYXkob2JqLCBGdW4uaWRlbnRpdHkpO1xufTtcblxuZXhwb3J0IGNvbnN0IHNpemUgPSAob2JqOiB7fSk6IG51bWJlciA9PiB7XG4gIHJldHVybiBrZXlzKG9iaikubGVuZ3RoO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldCA9IDxUIGV4dGVuZHMge30sIEsgZXh0ZW5kcyBrZXlvZiBUPihvYmo6IFQsIGtleTogSyk6IE9wdGlvbmFsPE5vbk51bGxhYmxlPFRbS10+PiA9PiB7XG4gIHJldHVybiBoYXMob2JqLCBrZXkpID8gT3B0aW9uYWwuZnJvbShvYmpba2V5XSBhcyBOb25OdWxsYWJsZTxUW0tdPikgOiBPcHRpb25hbC5ub25lKCk7XG59O1xuXG5leHBvcnQgY29uc3QgaGFzID0gPFQgZXh0ZW5kcyB7fSwgSyBleHRlbmRzIGtleW9mIFQ+KG9iajogVCwga2V5OiBLKTogYm9vbGVhbiA9PlxuICBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KTtcblxuZXhwb3J0IGNvbnN0IGhhc05vbk51bGxhYmxlS2V5ID0gPFQgZXh0ZW5kcyB7fSwgSyBleHRlbmRzIGtleW9mIFQ+KG9iajogVCwga2V5OiBLKTogb2JqIGlzIFQgJiBSZWNvcmQ8SywgTm9uTnVsbGFibGU8VFtLXT4+ID0+XG4gIGhhcyhvYmosIGtleSkgJiYgb2JqW2tleV0gIT09IHVuZGVmaW5lZCAmJiBvYmpba2V5XSAhPT0gbnVsbDtcblxuZXhwb3J0IGNvbnN0IGlzRW1wdHkgPSAocjogUmVjb3JkPGFueSwgYW55Pik6IHIgaXMge30gPT4ge1xuICBmb3IgKGNvbnN0IHggaW4gcikge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHIsIHgpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxuZXhwb3J0IGNvbnN0IGVxdWFsID0gPFQ+KGExOiBSZWNvcmQ8c3RyaW5nLCBUPiwgYTI6IFJlY29yZDxzdHJpbmcsIFQ+LCBlcTogRXEuRXE8VD4gPSBFcS5lcUFueSk6IGJvb2xlYW4gPT5cbiAgRXEuZXFSZWNvcmQoZXEpLmVxKGExLCBhMik7XG4iLCJpbXBvcnQgKiBhcyBUeXBlIGZyb20gJy4vVHlwZSc7XG5cbi8qKlxuICogVGhlIGBPcHRpb25hbGAgdHlwZSByZXByZXNlbnRzIGEgdmFsdWUgKG9mIGFueSB0eXBlKSB0aGF0IHBvdGVudGlhbGx5IGRvZXNcbiAqIG5vdCBleGlzdC4gQW55IGBPcHRpb25hbDxUPmAgY2FuIGVpdGhlciBiZSBhIGBTb21lPFQ+YCAoaW4gd2hpY2ggY2FzZSB0aGVcbiAqIHZhbHVlIGRvZXMgZXhpc3QpIG9yIGEgYE5vbmVgIChpbiB3aGljaCBjYXNlIHRoZSB2YWx1ZSBkb2VzIG5vdCBleGlzdCkuIFRoaXNcbiAqIG1vZHVsZSBkZWZpbmVzIGEgd2hvbGUgbG90IG9mIEZQLWluc3BpcmVkIHV0aWxpdHkgZnVuY3Rpb25zIGZvciBkZWFsaW5nIHdpdGhcbiAqIGBPcHRpb25hbGAgb2JqZWN0cy5cbiAqXG4gKiBDb21wYXJpc29uIHdpdGggbnVsbCBvciB1bmRlZmluZWQ6XG4gKiAtIFdlIGRvbid0IGdldCBmYW5jeSBudWxsIGNvYWxlc2Npbmcgb3BlcmF0b3JzIHdpdGggYE9wdGlvbmFsYFxuICogLSBXZSBkbyBnZXQgZmFuY3kgaGVscGVyIGZ1bmN0aW9ucyB3aXRoIGBPcHRpb25hbGBcbiAqIC0gYE9wdGlvbmFsYCBzdXBwb3J0IG5lc3RpbmcsIGFuZCBhbGxvdyBmb3IgdGhlIHR5cGUgdG8gc3RpbGwgYmUgbnVsbGFibGUgKG9yXG4gKiBhbm90aGVyIGBPcHRpb25hbGApXG4gKiAtIFRoZXJlIGlzIG5vIG9wdGlvbiB0byB0dXJuIG9mZiBzdHJpY3Qtb3B0aW9uYWwtY2hlY2tzIGxpa2UgdGhlcmUgaXMgZm9yXG4gKiBzdHJpY3QtbnVsbC1jaGVja3NcbiAqL1xuZXhwb3J0IGNsYXNzIE9wdGlvbmFsPFQ+IHtcbiAgcHJpdmF0ZSByZWFkb25seSB0YWc6IGJvb2xlYW47XG4gIHByaXZhdGUgcmVhZG9ubHkgdmFsdWU/OiBUO1xuXG4gIC8vIFNuZWFreSBvcHRpbWlzYXRpb246IGV2ZXJ5IGluc3RhbmNlIG9mIE9wdGlvbmFsLm5vbmUgaXMgaWRlbnRpY2FsLCBzbyBqdXN0XG4gIC8vIHJldXNlIHRoZSBzYW1lIG9iamVjdFxuICBwcml2YXRlIHN0YXRpYyBzaW5nbGV0b25Ob25lID0gbmV3IE9wdGlvbmFsPGFueT4oZmFsc2UpO1xuXG4gIC8vIFRoZSBpbnRlcm5hbCByZXByZXNlbnRhdGlvbiBoYXMgYSBgdGFnYCBhbmQgYSBgdmFsdWVgLCBidXQgYm90aCBhcmVcbiAgLy8gcHJpdmF0ZTogYWJsZSB0byBiZSBjb25zb2xlLmxvZ2dlZCwgYnV0IG5vdCBhYmxlIHRvIGJlIGFjY2Vzc2VkIGJ5IGNvZGVcbiAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcih0YWc6IGJvb2xlYW4sIHZhbHVlPzogVCkge1xuICAgIHRoaXMudGFnID0gdGFnO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIC8vIC0tLSBJZGVudGl0aWVzIC0tLVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGBPcHRpb25hbDxUPmAgdGhhdCAqKmRvZXMqKiBjb250YWluIGEgdmFsdWUuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHNvbWU8VD4odGhpczogdm9pZCwgdmFsdWU6IFQpOiBPcHRpb25hbDxUPiB7XG4gICAgcmV0dXJuIG5ldyBPcHRpb25hbCh0cnVlLCB2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGBPcHRpb25hbDxUPmAgdGhhdCAqKmRvZXMgbm90KiogY29udGFpbiBhIHZhbHVlLiBgVGAgY2FuIGJlXG4gICAqIGFueSB0eXBlIGJlY2F1c2Ugd2UgZG9uJ3QgYWN0dWFsbHkgaGF2ZSBhIGBUYC5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgbm9uZTxUID0gbmV2ZXI+KHRoaXM6IHZvaWQpOiBPcHRpb25hbDxUPiB7XG4gICAgcmV0dXJuIE9wdGlvbmFsLnNpbmdsZXRvbk5vbmU7XG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybSBhIHRyYW5zZm9ybSBvbiBhbiBgT3B0aW9uYWxgIHR5cGUuIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzXG4gICAqIGBPcHRpb25hbGAgY29udGFpbnMgYSB2YWx1ZSBvciBub3QsIGBmb2xkYCB3aWxsIHJldHVybiBhIHZhbHVlIG9mIHR5cGUgYFVgLlxuICAgKiBJZiB0aGlzIGBPcHRpb25hbGAgZG9lcyBub3QgY29udGFpbiBhIHZhbHVlLCB0aGUgYFVgIHdpbGwgYmUgY3JlYXRlZCBieVxuICAgKiBjYWxsaW5nIGBvbk5vbmVgLiBJZiB0aGlzIGBPcHRpb25hbGAgZG9lcyBjb250YWluIGEgdmFsdWUsIHRoZSBgVWAgd2lsbCBiZVxuICAgKiBjcmVhdGVkIGJ5IGNhbGxpbmcgYG9uU29tZWAuXG4gICAqXG4gICAqIEZvciB0aGUgRlAgZW50aHVzaWFzdHMgaW4gdGhlIHJvb20sIHRoaXMgZnVuY3Rpb246XG4gICAqIDEuIENvdWxkIGJlIHVzZWQgdG8gaW1wbGVtZW50IGFsbCBvZiB0aGUgZnVuY3Rpb25zIGJlbG93XG4gICAqIDIuIEZvcm1zIGEgY2F0YW1vcnBoaXNtXG4gICAqL1xuICBwdWJsaWMgZm9sZDxVPihvbk5vbmU6ICgpID0+IFUsIG9uU29tZTogKHZhbHVlOiBUKSA9PiBVKTogVSB7XG4gICAgaWYgKHRoaXMudGFnKSB7XG4gICAgICByZXR1cm4gb25Tb21lKHRoaXMudmFsdWUgYXMgVCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvbk5vbmUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIGlmIHRoaXMgYE9wdGlvbmFsYCBvYmplY3QgY29udGFpbnMgYSB2YWx1ZS5cbiAgICovXG4gIHB1YmxpYyBpc1NvbWUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudGFnO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBpZiB0aGlzIGBPcHRpb25hbGAgb2JqZWN0ICoqZG9lcyBub3QqKiBjb250YWluIGEgdmFsdWUuXG4gICAqL1xuICBwdWJsaWMgaXNOb25lKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy50YWc7XG4gIH1cblxuICAvLyAtLS0gRnVuY3RvciAobmFtZSBzdG9sZW4gZnJvbSBIYXNrZWxsIC8gbWF0aHMpIC0tLVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtIGEgdHJhbnNmb3JtIG9uIGFuIGBPcHRpb25hbGAgb2JqZWN0LCAqKmlmKiogdGhlcmUgaXMgYSB2YWx1ZS4gSWZcbiAgICogeW91IHByb3ZpZGUgYSBmdW5jdGlvbiB0byB0dXJuIGEgVCBpbnRvIGEgVSwgdGhpcyBpcyB0aGUgZnVuY3Rpb24geW91IHVzZVxuICAgKiB0byB0dXJuIGFuIGBPcHRpb25hbDxUPmAgaW50byBhbiBgT3B0aW9uYWw8VT5gLiBJZiB0aGlzICoqZG9lcyoqIGNvbnRhaW5cbiAgICogYSB2YWx1ZSB0aGVuIHRoZSBvdXRwdXQgd2lsbCBhbHNvIGNvbnRhaW4gYSB2YWx1ZSAodGhhdCB2YWx1ZSBiZWluZyB0aGVcbiAgICogb3V0cHV0IG9mIGBtYXBwZXIodGhpcy52YWx1ZSlgKSwgYW5kIGlmIHRoaXMgKipkb2VzIG5vdCoqIGNvbnRhaW4gYSB2YWx1ZVxuICAgKiB0aGVuIG5laXRoZXIgd2lsbCB0aGUgb3V0cHV0LlxuICAgKi9cbiAgcHVibGljIG1hcDxVPihtYXBwZXI6ICh2YWx1ZTogVCkgPT4gVSk6IE9wdGlvbmFsPFU+IHtcbiAgICBpZiAodGhpcy50YWcpIHtcbiAgICAgIHJldHVybiBPcHRpb25hbC5zb21lKG1hcHBlcih0aGlzLnZhbHVlIGFzIFQpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIE9wdGlvbmFsLm5vbmUoKTtcbiAgICB9XG4gIH1cblxuICAvLyAtLS0gTW9uYWQgKG5hbWUgc3RvbGVuIGZyb20gSGFza2VsbCAvIG1hdGhzKSAtLS1cblxuICAvKipcbiAgICogUGVyZm9ybSBhIHRyYW5zZm9ybSBvbiBhbiBgT3B0aW9uYWxgIG9iamVjdCwgKippZioqIHRoZXJlIGlzIGEgdmFsdWUuXG4gICAqIFVubGlrZSBgbWFwYCwgaGVyZSB0aGUgdHJhbnNmb3JtIGl0c2VsZiBhbHNvIHJldHVybnMgYW4gYE9wdGlvbmFsYC5cbiAgICovXG4gIHB1YmxpYyBiaW5kPFU+KGJpbmRlcjogKHZhbHVlOiBUKSA9PiBPcHRpb25hbDxVPik6IE9wdGlvbmFsPFU+IHtcbiAgICBpZiAodGhpcy50YWcpIHtcbiAgICAgIHJldHVybiBiaW5kZXIodGhpcy52YWx1ZSBhcyBUKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIE9wdGlvbmFsLm5vbmUoKTtcbiAgICB9XG4gIH1cblxuICAvLyAtLS0gVHJhdmVyc2FibGUgKG5hbWUgc3RvbGVuIGZyb20gSGFza2VsbCAvIG1hdGhzKSAtLS1cblxuICAvKipcbiAgICogRm9yIGEgZ2l2ZW4gcHJlZGljYXRlLCB0aGlzIGZ1bmN0aW9uIGZpbmRzIG91dCBpZiB0aGVyZSAqKmV4aXN0cyoqIGEgdmFsdWVcbiAgICogaW5zaWRlIHRoaXMgYE9wdGlvbmFsYCBvYmplY3QgdGhhdCBtZWV0cyB0aGUgcHJlZGljYXRlLiBJbiBwcmFjdGljZSwgdGhpc1xuICAgKiBtZWFucyB0aGF0IGZvciBgT3B0aW9uYWxgcyB0aGF0IGRvIG5vdCBjb250YWluIGEgdmFsdWUgaXQgcmV0dXJucyBmYWxzZSAoYXNcbiAgICogbm8gcHJlZGljYXRlLW1lZXRpbmcgdmFsdWUgZXhpc3RzKS5cbiAgICovXG4gIHB1YmxpYyBleGlzdHMocHJlZGljYXRlOiAodmFsdWU6IFQpID0+IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50YWcgJiYgcHJlZGljYXRlKHRoaXMudmFsdWUgYXMgVCk7XG4gIH1cblxuICAvKipcbiAgICogRm9yIGEgZ2l2ZW4gcHJlZGljYXRlLCB0aGlzIGZ1bmN0aW9uIGZpbmRzIG91dCBpZiAqKmFsbCoqIHRoZSB2YWx1ZXMgaW5zaWRlXG4gICAqIHRoaXMgYE9wdGlvbmFsYCBvYmplY3QgbWVldCB0aGUgcHJlZGljYXRlLiBJbiBwcmFjdGljZSwgdGhpcyBtZWFucyB0aGF0XG4gICAqIGZvciBgT3B0aW9uYWxgcyB0aGF0IGRvIG5vdCBjb250YWluIGEgdmFsdWUgaXQgcmV0dXJucyB0cnVlIChhcyBhbGwgMFxuICAgKiBvYmplY3RzIGRvIG1lZXQgdGhlIHByZWRpY2F0ZSkuXG4gICAqL1xuICBwdWJsaWMgZm9yYWxsKHByZWRpY2F0ZTogKHZhbHVlOiBUKSA9PiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLnRhZyB8fCBwcmVkaWNhdGUodGhpcy52YWx1ZSBhcyBUKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3IgYSBnaXZlbiBwcmVkaWNhdGUsIGNyZWF0ZSBhIG5ldyBgT3B0aW9uYWxgIG9iamVjdCB0aGF0IHdpbGwgcmV0YWluXG4gICAqIGFsbCB0aGUgdmFsdWVzIGluc2lkZSB0aGUgb2xkIGBPcHRpb25hbGAgb2JqZWN0IHRoYXQgbWVldCB0aGUgcHJlZGljYXRlLlxuICAgKiBJbiBwcmFjdGljZSwgdGhlIGBPcHRpb25hbGAgb2JqZWN0IGNvbnRhaW5zIGVpdGhlciAwIG9yIDEgb2JqZWN0cywgYW5kXG4gICAqIHRoZSBvdXRwdXQgd2lsbCBrZWVwIHRoZSAoc2luZ2xlKSBpbnB1dCBvYmplY3QgKGlmIGl0IGV4aXN0cykgYXMgbG9uZyBhc1xuICAgKiBpdCBwYXNzZXMgdGhlIHByZWRpY2F0ZS5cbiAgICovXG4gIHB1YmxpYyBmaWx0ZXI8VSBleHRlbmRzIFQ+KHByZWRpY2F0ZTogKHZhbHVlOiBUKSA9PiB2YWx1ZSBpcyBVKTogT3B0aW9uYWw8VT47XG4gIHB1YmxpYyBmaWx0ZXIocHJlZGljYXRlOiAodmFsdWU6IFQpID0+IGJvb2xlYW4pOiBPcHRpb25hbDxUPjtcbiAgcHVibGljIGZpbHRlcihwcmVkaWNhdGU6ICh2YWx1ZTogVCkgPT4gYm9vbGVhbik6IE9wdGlvbmFsPFQ+IHtcbiAgICBpZiAoIXRoaXMudGFnIHx8IHByZWRpY2F0ZSh0aGlzLnZhbHVlIGFzIFQpKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIE9wdGlvbmFsLm5vbmUoKTtcbiAgICB9XG4gIH1cblxuICAvLyAtLS0gR2V0dGVycyAtLS1cblxuICAvKipcbiAgICogR2V0IHRoZSB2YWx1ZSBvdXQgb2YgdGhlIGluc2lkZSBvZiB0aGUgYE9wdGlvbmFsYCBvYmplY3QsIHVzaW5nIGEgZGVmYXVsdFxuICAgKiBgcmVwbGFjZW1lbnRgIHZhbHVlIGlmIHRoZSBwcm92aWRlZCBgT3B0aW9uYWxgIG9iamVjdCBkb2VzIG5vdCBjb250YWluIGFcbiAgICogdmFsdWUuXG4gICAqL1xuICBwdWJsaWMgZ2V0T3I8VSA9IFQ+KHJlcGxhY2VtZW50OiBVKTogVCB8IFUge1xuICAgIHJldHVybiB0aGlzLnRhZyA/IHRoaXMudmFsdWUgYXMgVCA6IHJlcGxhY2VtZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdmFsdWUgb3V0IG9mIHRoZSBpbnNpZGUgb2YgdGhlIGBPcHRpb25hbGAgb2JqZWN0LCB1c2luZyBhIGRlZmF1bHRcbiAgICogYHJlcGxhY2VtZW50YCB2YWx1ZSBpZiB0aGUgcHJvdmlkZWQgYE9wdGlvbmFsYCBvYmplY3QgZG9lcyBub3QgY29udGFpbiBhXG4gICAqIHZhbHVlLiAgVW5saWtlIGBnZXRPcmAsIGluIHRoaXMgbWV0aG9kIHRoZSBgcmVwbGFjZW1lbnRgIG9iamVjdCBpcyBhbHNvXG4gICAqIGBPcHRpb25hbGAgLSBtZWFuaW5nIHRoYXQgdGhpcyBtZXRob2Qgd2lsbCBhbHdheXMgcmV0dXJuIGFuIGBPcHRpb25hbGAuXG4gICAqL1xuICBwdWJsaWMgb3I8VSA9IFQ+KHJlcGxhY2VtZW50OiBPcHRpb25hbDxVPik6IE9wdGlvbmFsPFQgfCBVPiB7XG4gICAgcmV0dXJuIHRoaXMudGFnID8gdGhpcyA6IHJlcGxhY2VtZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdmFsdWUgb3V0IG9mIHRoZSBpbnNpZGUgb2YgdGhlIGBPcHRpb25hbGAgb2JqZWN0LCB1c2luZyBhIGRlZmF1bHRcbiAgICogYHJlcGxhY2VtZW50YCB2YWx1ZSBpZiB0aGUgcHJvdmlkZWQgYE9wdGlvbmFsYCBvYmplY3QgZG9lcyBub3QgY29udGFpbiBhXG4gICAqIHZhbHVlLiBVbmxpa2UgYGdldE9yYCwgaW4gdGhpcyBtZXRob2QgdGhlIGByZXBsYWNlbWVudGAgdmFsdWUgaXNcbiAgICogXCJ0aHVua2VkXCIgLSB0aGF0IGlzIHRvIHNheSB0aGF0IHlvdSBkb24ndCBwYXNzIGEgdmFsdWUgdG8gYGdldE9yVGh1bmtgLCB5b3VcbiAgICogcGFzcyBhIGZ1bmN0aW9uIHdoaWNoIChpZiBjYWxsZWQpIHdpbGwgKipyZXR1cm4qKiB0aGUgYHZhbHVlYCB5b3Ugd2FudCB0b1xuICAgKiB1c2UuXG4gICAqL1xuICBwdWJsaWMgZ2V0T3JUaHVuazxVID0gVD4odGh1bms6ICgpID0+IFUpOiBUIHwgVSB7XG4gICAgcmV0dXJuIHRoaXMudGFnID8gdGhpcy52YWx1ZSBhcyBUIDogdGh1bmsoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHZhbHVlIG91dCBvZiB0aGUgaW5zaWRlIG9mIHRoZSBgT3B0aW9uYWxgIG9iamVjdCwgdXNpbmcgYSBkZWZhdWx0XG4gICAqIGByZXBsYWNlbWVudGAgdmFsdWUgaWYgdGhlIHByb3ZpZGVkIE9wdGlvbmFsIG9iamVjdCBkb2VzIG5vdCBjb250YWluIGFcbiAgICogdmFsdWUuXG4gICAqXG4gICAqIFVubGlrZSBgb3JgLCBpbiB0aGlzIG1ldGhvZCB0aGUgYHJlcGxhY2VtZW50YCB2YWx1ZSBpcyBcInRodW5rZWRcIiAtIHRoYXQgaXNcbiAgICogdG8gc2F5IHRoYXQgeW91IGRvbid0IHBhc3MgYSB2YWx1ZSB0byBgb3JUaHVua2AsIHlvdSBwYXNzIGEgZnVuY3Rpb24gd2hpY2hcbiAgICogKGlmIGNhbGxlZCkgd2lsbCAqKnJldHVybioqIHRoZSBgdmFsdWVgIHlvdSB3YW50IHRvIHVzZS5cbiAgICpcbiAgICogVW5saWtlIGBnZXRPclRodW5rYCwgaW4gdGhpcyBtZXRob2QgdGhlIGByZXBsYWNlbWVudGAgdmFsdWUgaXMgYWxzb1xuICAgKiBgT3B0aW9uYWxgLCBtZWFuaW5nIHRoYXQgdGhpcyBtZXRob2Qgd2lsbCBhbHdheXMgcmV0dXJuIGFuIGBPcHRpb25hbGAuXG4gICAqL1xuICBwdWJsaWMgb3JUaHVuazxVID0gVD4odGh1bms6ICgpID0+IE9wdGlvbmFsPFU+KTogT3B0aW9uYWw8VCB8IFU+IHtcbiAgICByZXR1cm4gdGhpcy50YWcgPyB0aGlzIDogdGh1bmsoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHZhbHVlIG91dCBvZiB0aGUgaW5zaWRlIG9mIHRoZSBgT3B0aW9uYWxgIG9iamVjdCwgdGhyb3dpbmcgYW5cbiAgICogZXhjZXB0aW9uIGlmIHRoZSBwcm92aWRlZCBgT3B0aW9uYWxgIG9iamVjdCBkb2VzIG5vdCBjb250YWluIGEgdmFsdWUuXG4gICAqXG4gICAqIFdBUk5JTkc6XG4gICAqIFlvdSBzaG91bGQgb25seSBiZSB1c2luZyB0aGlzIGZ1bmN0aW9uIGlmIHlvdSBrbm93IHRoYXQgdGhlIGBPcHRpb25hbGBcbiAgICogb2JqZWN0ICoqaXMgbm90KiogZW1wdHkgKG90aGVyd2lzZSB5b3UncmUgdGhyb3dpbmcgZXhjZXB0aW9ucyBpbiBwcm9kdWN0aW9uXG4gICAqIGNvZGUsIHdoaWNoIGlzIGJhZCkuXG4gICAqXG4gICAqIEluIHRlc3RzIHRoaXMgaXMgbW9yZSBhY2NlcHRhYmxlLlxuICAgKlxuICAgKiBQcmVmZXIgb3RoZXIgbWV0aG9kcyB0byB0aGlzLCBzdWNoIGFzIGAuZWFjaGAuXG4gICAqL1xuICBwdWJsaWMgZ2V0T3JEaWUobWVzc2FnZT86IHN0cmluZyk6IFQge1xuICAgIGlmICghdGhpcy50YWcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlID8/ICdDYWxsZWQgZ2V0T3JEaWUgb24gTm9uZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZSBhcyBUO1xuICAgIH1cbiAgfVxuXG4gIC8vIC0tLSBJbnRlcm9wIHdpdGggbnVsbCBhbmQgdW5kZWZpbmVkIC0tLVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGBPcHRpb25hbGAgdmFsdWUgZnJvbSBhIG51bGxhYmxlIChvciB1bmRlZmluZWQtYWJsZSkgaW5wdXQuXG4gICAqIE51bGwsIG9yIHVuZGVmaW5lZCwgaXMgY29udmVydGVkIHRvIGBOb25lYCwgYW5kIGFueXRoaW5nIGVsc2UgaXMgY29udmVydGVkXG4gICAqIHRvIGBTb21lYC5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZnJvbTxUPih0aGlzOiB2b2lkLCB2YWx1ZTogVCB8IG51bGwgfCB1bmRlZmluZWQpOiBPcHRpb25hbDxOb25OdWxsYWJsZTxUPj4ge1xuICAgIHJldHVybiBUeXBlLmlzTm9uTnVsbGFibGUodmFsdWUpID8gT3B0aW9uYWwuc29tZSh2YWx1ZSkgOiBPcHRpb25hbC5ub25lKCk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgYW4gYE9wdGlvbmFsYCB0byBhIG51bGxhYmxlIHR5cGUsIGJ5IGdldHRpbmcgdGhlIHZhbHVlIGlmIGl0XG4gICAqIGV4aXN0cywgb3IgcmV0dXJuaW5nIGBudWxsYCBpZiBpdCBkb2VzIG5vdC5cbiAgICovXG4gIHB1YmxpYyBnZXRPck51bGwoKTogVCB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLnRhZyA/IHRoaXMudmFsdWUgYXMgVCA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgYW4gYE9wdGlvbmFsYCB0byBhbiB1bmRlZmluZWQtYWJsZSB0eXBlLCBieSBnZXR0aW5nIHRoZSB2YWx1ZSBpZlxuICAgKiBpdCBleGlzdHMsIG9yIHJldHVybmluZyBgdW5kZWZpbmVkYCBpZiBpdCBkb2VzIG5vdC5cbiAgICovXG4gIHB1YmxpYyBnZXRPclVuZGVmaW5lZCgpOiBUIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgfVxuXG4gIC8vIC0tLSBVdGlsaXRpZXMgLS0tXG5cbiAgLyoqXG4gICAqIElmIHRoZSBgT3B0aW9uYWxgIGNvbnRhaW5zIGEgdmFsdWUsIHBlcmZvcm0gYW4gYWN0aW9uIG9uIHRoYXQgdmFsdWUuXG4gICAqIFVubGlrZSB0aGUgcmVzdCBvZiB0aGUgbWV0aG9kcyBvbiB0aGlzIHR5cGUsIGAuZWFjaGAgaGFzIHNpZGUtZWZmZWN0cy4gSWZcbiAgICogeW91IHdhbnQgdG8gdHJhbnNmb3JtIGFuIGBPcHRpb25hbDxUPmAgKippbnRvKiogc29tZXRoaW5nLCB0aGVuIHRoaXMgaXMgbm90XG4gICAqIHRoZSBtZXRob2QgZm9yIHlvdS4gSWYgeW91IHdhbnQgdG8gdXNlIGFuIGBPcHRpb25hbDxUPmAgdG8gKipkbyoqXG4gICAqIHNvbWV0aGluZywgdGhlbiB0aGlzIGlzIHRoZSBtZXRob2QgZm9yIHlvdSAtIHByb3ZpZGVkIHlvdSdyZSBva2F5IHdpdGggbm90XG4gICAqIGRvaW5nIGFueXRoaW5nIGluIHRoZSBjYXNlIHdoZXJlIHRoZSBgT3B0aW9uYWxgIGRvZXNuJ3QgaGF2ZSBhIHZhbHVlIGluc2lkZVxuICAgKiBpdC4gSWYgeW91J3JlIG5vdCBzdXJlIHdoZXRoZXIgeW91ciB1c2UtY2FzZSBmaXRzIGludG8gdHJhbnNmb3JtaW5nXG4gICAqICoqaW50byoqIHNvbWV0aGluZyBvciAqKmRvaW5nKiogc29tZXRoaW5nLCBjaGVjayB3aGV0aGVyIGl0IGhhcyBhIHJldHVyblxuICAgKiB2YWx1ZS4gSWYgaXQgZG9lcywgeW91IHNob3VsZCBiZSBwZXJmb3JtaW5nIGEgdHJhbnNmb3JtLlxuICAgKi9cbiAgcHVibGljIGVhY2god29ya2VyOiAodmFsdWU6IFQpID0+IHZvaWQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50YWcpIHtcbiAgICAgIHdvcmtlcih0aGlzLnZhbHVlIGFzIFQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUdXJuIHRoZSBgT3B0aW9uYWxgIG9iamVjdCBpbnRvIGFuIGFycmF5IHRoYXQgY29udGFpbnMgYWxsIG9mIHRoZSB2YWx1ZXNcbiAgICogc3RvcmVkIGluc2lkZSB0aGUgYE9wdGlvbmFsYC4gSW4gcHJhY3RpY2UsIHRoaXMgbWVhbnMgdGhlIG91dHB1dCB3aWxsIGhhdmVcbiAgICogZWl0aGVyIDAgb3IgMSBlbGVtZW50cy5cbiAgICovXG4gIHB1YmxpYyB0b0FycmF5KCk6IFRbXSB7XG4gICAgcmV0dXJuIHRoaXMudGFnID8gWyB0aGlzLnZhbHVlIGFzIFQgXSA6IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIFR1cm4gdGhlIGBPcHRpb25hbGAgb2JqZWN0IGludG8gYSBzdHJpbmcgZm9yIGRlYnVnZ2luZyBvciBwcmludGluZy4gTm90XG4gICAqIHJlY29tbWVuZGVkIGZvciBwcm9kdWN0aW9uIGNvZGUsIGJ1dCBnb29kIGZvciBkZWJ1Z2dpbmcuIEFsc28gbm90ZSB0aGF0XG4gICAqIHRoZXNlIGRheXMgYW4gYE9wdGlvbmFsYCBvYmplY3QgY2FuIGJlIGxvZ2dlZCB0byB0aGUgY29uc29sZSBkaXJlY3RseSwgYW5kXG4gICAqIGl0cyBpbm5lciB2YWx1ZSAoaWYgaXQgZXhpc3RzKSB3aWxsIGJlIHZpc2libGUuXG4gICAqL1xuICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy50YWcgPyBgc29tZSgke3RoaXMudmFsdWV9KWAgOiAnbm9uZSgpJztcbiAgfVxufVxuIiwiaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSAnLi9HbG9iYWwnO1xuXG4vKiogcGF0aCA6OiAoW1N0cmluZ10sIEpzT2JqPykgLT4gSnNPYmogKi9cbmV4cG9ydCBjb25zdCBwYXRoID0gPFQ+KHBhcnRzOiBzdHJpbmdbXSwgc2NvcGU/OiB7fSk6IFQgfCB1bmRlZmluZWQgPT4ge1xuICBsZXQgbyA9IHNjb3BlICE9PSB1bmRlZmluZWQgJiYgc2NvcGUgIT09IG51bGwgPyBzY29wZSA6IEdsb2JhbDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGggJiYgbyAhPT0gdW5kZWZpbmVkICYmIG8gIT09IG51bGw7ICsraSkge1xuICAgIG8gPSBvW3BhcnRzW2ldXTtcbiAgfVxuICByZXR1cm4gbztcbn07XG5cbi8qKiByZXNvbHZlIDo6IChTdHJpbmcsIEpzT2JqPykgLT4gSnNPYmogKi9cbmV4cG9ydCBjb25zdCByZXNvbHZlID0gPFQ+KHA6IHN0cmluZywgc2NvcGU/OiB7fSk6IFQgfCB1bmRlZmluZWQgPT4ge1xuICBjb25zdCBwYXJ0cyA9IHAuc3BsaXQoJy4nKTtcbiAgcmV0dXJuIHBhdGgocGFydHMsIHNjb3BlKTtcbn07XG5cbi8qKiBzdGVwIDo6IChKc09iaiwgU3RyaW5nKSAtPiBKc09iaiAqL1xuZXhwb3J0IGNvbnN0IHN0ZXAgPSA8VCBleHRlbmRzIHt9LCBLIGV4dGVuZHMga2V5b2YgVD4obzogVCwgcGFydDogSyk6IFRbS10gPT4ge1xuICBpZiAob1twYXJ0XSA9PT0gdW5kZWZpbmVkIHx8IG9bcGFydF0gPT09IG51bGwpIHtcbiAgICBvW3BhcnRdID0ge30gYXMgVFtLXTtcbiAgfVxuICByZXR1cm4gb1twYXJ0XTtcbn07XG5cbi8qKiBmb3JnZSA6OiAoW1N0cmluZ10sIEpzT2JqPykgLT4gSnNPYmogKi9cbmV4cG9ydCBjb25zdCBmb3JnZSA9IDxUIGV4dGVuZHMgc3RyaW5nW10+KHBhcnRzOiBULCB0YXJnZXQ/OiB7fSk6IHsgWyBLIGluIFRbbnVtYmVyXV06IHt9fSA9PiB7XG4gIGxldCBvID0gdGFyZ2V0ICE9PSB1bmRlZmluZWQgPyB0YXJnZXQgOiBHbG9iYWw7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyArK2kpIHtcbiAgICBvID0gc3RlcChvLCBwYXJ0c1tpXSk7XG4gIH1cbiAgcmV0dXJuIG87XG59O1xuXG4vKiogbmFtZXNwYWNlIDo6IChTdHJpbmcsIEpzT2JqPykgLT4gSnNPYmogKi9cbmV4cG9ydCBjb25zdCBuYW1lc3BhY2UgPSAobmFtZTogc3RyaW5nLCB0YXJnZXQ/OiB7fSk6IHsgW2tleTogc3RyaW5nXToge319ID0+IHtcbiAgY29uc3QgcGFydHMgPSBuYW1lLnNwbGl0KCcuJyk7XG4gIHJldHVybiBmb3JnZShwYXJ0cywgdGFyZ2V0KTtcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8td3JhcHBlci1vYmplY3QtdHlwZXMgKi9cbmNvbnN0IGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuXG5pbnRlcmZhY2UgQ29uc3RydWN0b3I8VCBleHRlbmRzIE9iamVjdD4ge1xuICByZWFkb25seSBwcm90b3R5cGU6IFQ7XG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbn1cblxuY29uc3QgaGFzUHJvdG8gPSA8VCBleHRlbmRzIE9iamVjdD4odjogT2JqZWN0LCBjb25zdHJ1Y3RvcjogQ29uc3RydWN0b3I8VD4sIHByZWRpY2F0ZTogKHY6IE9iamVjdCwgcHJvdG90eXBlOiBUKSA9PiBib29sZWFuKTogYm9vbGVhbiA9PiB7XG4gIGlmIChwcmVkaWNhdGUodiwgY29uc3RydWN0b3IucHJvdG90eXBlKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIC8vIFN0cmluZy1iYXNlZCBmYWxsYmFjayB0aW1lXG4gICAgcmV0dXJuIHYuY29uc3RydWN0b3I/Lm5hbWUgPT09IGNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cbn07XG5cbmNvbnN0IHR5cGVPZiA9ICh4OiBhbnkpOiBzdHJpbmcgPT4ge1xuICBjb25zdCB0ID0gdHlwZW9mIHg7XG4gIGlmICh4ID09PSBudWxsKSB7XG4gICAgcmV0dXJuICdudWxsJztcbiAgfSBlbHNlIGlmICh0ID09PSAnb2JqZWN0JyAmJiBBcnJheS5pc0FycmF5KHgpKSB7XG4gICAgcmV0dXJuICdhcnJheSc7XG4gIH0gZWxzZSBpZiAodCA9PT0gJ29iamVjdCcgJiYgaGFzUHJvdG8oeCwgU3RyaW5nLCAobywgcHJvdG8pID0+IHByb3RvLmlzUHJvdG90eXBlT2YobykpKSB7XG4gICAgcmV0dXJuICdzdHJpbmcnO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0O1xuICB9XG59O1xuXG5jb25zdCBpc1R5cGUgPSA8WW9sbz4odHlwZTogc3RyaW5nKSA9PiAodmFsdWU6IGFueSk6IHZhbHVlIGlzIFlvbG8gPT5cbiAgdHlwZU9mKHZhbHVlKSA9PT0gdHlwZTtcblxuY29uc3QgaXNTaW1wbGVUeXBlID0gPFlvbG8+KHR5cGU6IHN0cmluZykgPT4gKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBZb2xvID0+XG4gIHR5cGVvZiB2YWx1ZSA9PT0gdHlwZTtcblxuY29uc3QgZXEgPSA8VD4gKHQ6IFQpID0+IChhOiBhbnkpOiBhIGlzIFQgPT5cbiAgdCA9PT0gYTtcblxuZXhwb3J0IGNvbnN0IGlzID0gPEUgZXh0ZW5kcyBPYmplY3Q+KHZhbHVlOiBhbnksIGNvbnN0cnVjdG9yOiBDb25zdHJ1Y3RvcjxFPik6IHZhbHVlIGlzIEUgPT5cbiAgaXNPYmplY3QodmFsdWUpICYmIGhhc1Byb3RvPEU+KHZhbHVlLCBjb25zdHJ1Y3RvciwgKG8sIHByb3RvKSA9PiBnZXRQcm90b3R5cGVPZihvKSA9PT0gcHJvdG8pO1xuXG5leHBvcnQgY29uc3QgaXNTdHJpbmc6ICh2YWx1ZTogYW55KSA9PiB2YWx1ZSBpcyBzdHJpbmcgPVxuICBpc1R5cGUoJ3N0cmluZycpO1xuXG5leHBvcnQgY29uc3QgaXNPYmplY3Q6ICh2YWx1ZTogYW55KSA9PiB2YWx1ZSBpcyBPYmplY3QgPVxuICBpc1R5cGUoJ29iamVjdCcpO1xuXG5leHBvcnQgY29uc3QgaXNQbGFpbk9iamVjdCA9ICh2YWx1ZTogdW5rbm93bik6IHZhbHVlIGlzIE9iamVjdCA9PlxuICBpcyh2YWx1ZSwgT2JqZWN0KTtcblxuZXhwb3J0IGNvbnN0IGlzQXJyYXk6ICh2YWx1ZTogYW55KSA9PiB2YWx1ZSBpcyBBcnJheTx1bmtub3duPiA9XG4gIGlzVHlwZSgnYXJyYXknKTtcblxuZXhwb3J0IGNvbnN0IGlzTnVsbDogKGE6IGFueSkgPT4gYSBpcyBudWxsID1cbiAgZXEobnVsbCk7XG5cbmV4cG9ydCBjb25zdCBpc0Jvb2xlYW46ICh2YWx1ZTogYW55KSA9PiB2YWx1ZSBpcyBib29sZWFuID1cbiAgaXNTaW1wbGVUeXBlPGJvb2xlYW4+KCdib29sZWFuJyk7XG5cbmV4cG9ydCBjb25zdCBpc1VuZGVmaW5lZDogKGE6IGFueSkgPT4gYSBpcyB1bmRlZmluZWQgPVxuICBlcSh1bmRlZmluZWQpO1xuXG5leHBvcnQgY29uc3QgaXNOdWxsYWJsZSA9IChhOiBhbnkpOiBhIGlzIG51bGwgfCB1bmRlZmluZWQgPT5cbiAgYSA9PT0gbnVsbCB8fCBhID09PSB1bmRlZmluZWQ7XG5cbmV4cG9ydCBjb25zdCBpc05vbk51bGxhYmxlID0gPEE+IChhOiBBIHwgbnVsbCB8IHVuZGVmaW5lZCk6IGEgaXMgTm9uTnVsbGFibGU8QT4gPT5cbiAgIWlzTnVsbGFibGUoYSk7XG5cbmV4cG9ydCBjb25zdCBpc0Z1bmN0aW9uOiAodmFsdWU6IGFueSkgPT4gdmFsdWUgaXMgRnVuY3Rpb24gPVxuICBpc1NpbXBsZVR5cGU8RnVuY3Rpb24+KCdmdW5jdGlvbicpO1xuXG5leHBvcnQgY29uc3QgaXNOdW1iZXI6ICh2YWx1ZTogYW55KSA9PiB2YWx1ZSBpcyBudW1iZXIgPVxuICBpc1NpbXBsZVR5cGU8bnVtYmVyPignbnVtYmVyJyk7XG5cbmV4cG9ydCBjb25zdCBpc0FycmF5T2YgPSA8RT4odmFsdWU6IGFueSwgcHJlZDogKHg6IGFueSkgPT4geCBpcyBFKTogdmFsdWUgaXMgQXJyYXk8RT4gPT4ge1xuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdmFsdWUubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIGlmICghKHByZWQodmFsdWVbaV0pKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc1Byb21pc2VMaWtlID0gKHg6IGFueSk6IHggaXMgUHJvbWlzZTx1bmtub3duPiA9PlxuICBpc09iamVjdCh4KVxuICAmJiBpc0Z1bmN0aW9uKHgudGhlbilcbiAgJiYgaXNGdW5jdGlvbih4LmNhdGNoKTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWJpdHdpc2UgKi9cblxuY29uc3QgdXVpZFY0Qnl0ZXMgPSAoKTogVWludDhBcnJheSA9PiB7XG4gIGNvbnN0IGJ5dGVzID0gd2luZG93LmNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoMTYpKTtcblxuICAvLyBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNDEyMiNzZWN0aW9uLTQuMS4zXG4gIC8vIFRoaXMgd2lsbCBmaXJzdCBiaXQgbWFzayBhd2F5IHRoZSBtb3N0IHNpZ25pZmljYW50IDQgYml0cyAodmVyc2lvbiBvY3RldClcbiAgLy8gdGhlbiBtYXNrIGluIHRoZSB2NCBudW1iZXIgd2Ugb25seSBjYXJlIGFib3V0IHY0IHJhbmRvbSB2ZXJzaW9uIGF0IHRoaXMgcG9pbnQgc28gKGJ5dGUgJiAwYjAwMDAxMTExIHwgMGIwMTAwMDAwMClcbiAgYnl0ZXNbNl0gPSBieXRlc1s2XSAmIDE1IHwgNjQ7XG5cbiAgLy8gaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzQxMjIjc2VjdGlvbi00LjEuMVxuICAvLyBUaGlzIHdpbGwgZmlyc3QgYml0IG1hc2sgYXdheSB0aGUgaGlnaGVzdCB0d28gYml0cyB0aGVuIG1hc2tzIGluIHRoZSBoaWdoZXN0IGJpdCBzbyAoYnl0ZSAmIDBiMDAxMTExMTEgfCAwYjEwMDAwMDAwKVxuICAvLyBTbyBpdCB3aWxsIHNldCB0aGUgTXNiMD0xICYgTXNiMT0wIGRlc2NyaWJlZCBieSB0aGUgXCJUaGUgdmFyaWFudCBzcGVjaWZpZWQgaW4gdGhpcyBkb2N1bWVudC5cIiByb3cgaW4gdGhlIHRhYmxlXG4gIGJ5dGVzWzhdID0gYnl0ZXNbOF0gJiA2MyB8IDEyODtcblxuICByZXR1cm4gYnl0ZXM7XG59O1xuXG5jb25zdCB1dWlkVjRTdHJpbmcgPSAoKTogYCR7c3RyaW5nfS0ke3N0cmluZ30tJHtzdHJpbmd9LSR7c3RyaW5nfS0ke3N0cmluZ31gID0+IHtcbiAgY29uc3QgdXVpZCA9IHV1aWRWNEJ5dGVzKCk7XG4gIGNvbnN0IGdldEhleFJhbmdlID0gKHN0YXJ0SW5kZXg6IG51bWJlciwgZW5kSW5kZXg6IG51bWJlcikgPT4ge1xuICAgIGxldCBidWZmID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0SW5kZXg7IGkgPD0gZW5kSW5kZXg7ICsraSkge1xuICAgICAgY29uc3QgaGV4Qnl0ZSA9IHV1aWRbaV0udG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICBidWZmICs9IGhleEJ5dGU7XG4gICAgfVxuICAgIHJldHVybiBidWZmO1xuICB9O1xuICAvLyBSRkMgNDEyMiBVVUlEIGZvcm1hdDogeHh4eHh4eHgteHh4eC14eHh4LXh4eHgteHh4eHh4eHh4eHh4XG4gIHJldHVybiBgJHtnZXRIZXhSYW5nZSgwLCAzKX0tJHtnZXRIZXhSYW5nZSg0LCA1KX0tJHtnZXRIZXhSYW5nZSg2LCA3KX0tJHtnZXRIZXhSYW5nZSg4LCA5KX0tJHtnZXRIZXhSYW5nZSgxMCwgMTUpfWA7XG59O1xuXG5leHBvcnQge1xuICB1dWlkVjRCeXRlcyxcbiAgdXVpZFY0U3RyaW5nXG59O1xuIiwiaW1wb3J0IHsgUmVzb2x2ZSwgVHlwZSB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmltcG9ydCAqIGFzIEdsb2JhbCBmcm9tICcuLi91dGlsL0dsb2JhbCc7XG5cbmNvbnN0IGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuXG4vKlxuICogSUU5IGFuZCBhYm92ZVxuICpcbiAqIE1ETiBubyB1c2Ugb24gdGhpcyBvbmUsIGJ1dCBoZXJlJ3MgdGhlIGxpbmsgYW55d2F5OlxuICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vZG9jcy9XZWIvQVBJL0hUTUxFbGVtZW50XG4gKi9cbmNvbnN0IHNhbmRIVE1MRWxlbWVudCA9IChzY29wZTogV2luZG93IHwgdW5kZWZpbmVkKSA9PiB7XG4gIHJldHVybiBHbG9iYWwuZ2V0T3JEaWUoJ0hUTUxFbGVtZW50Jywgc2NvcGUpIGFzIHR5cGVvZiBIVE1MRWxlbWVudDtcbn07XG5cbmNvbnN0IGlzUHJvdG90eXBlT2YgPSAoeDogYW55KTogeCBpcyBIVE1MRWxlbWVudCA9PiB7XG4gIC8vIHVzZSBSZXNvbHZlIHRvIGdldCB0aGUgd2luZG93IG9iamVjdCBmb3IgeCBhbmQganVzdCByZXR1cm4gdW5kZWZpbmVkIGlmIGl0IGNhbid0IGZpbmQgaXQuXG4gIC8vIHVuZGVmaW5lZCBzY29wZSBsYXRlciB0cmlnZ2VycyB1c2luZyB0aGUgZ2xvYmFsIHdpbmRvdy5cbiAgY29uc3Qgc2NvcGU6IFdpbmRvdyB8IHVuZGVmaW5lZCA9IFJlc29sdmUucmVzb2x2ZSgnb3duZXJEb2N1bWVudC5kZWZhdWx0VmlldycsIHgpO1xuXG4gIC8vIFRJTlktNzM3NDogV2UgY2FuJ3QgcmVseSBvbiBsb29raW5nIGF0IHRoZSBvd25lciB3aW5kb3cgSFRNTEVsZW1lbnQgYXMgdGhlIGVsZW1lbnQgbWF5IGhhdmVcbiAgLy8gYmVlbiBjb25zdHJ1Y3RlZCBpbiBhIGRpZmZlcmVudCB3aW5kb3cgYW5kIHRoZW4gYXBwZW5kZWQgdG8gdGhlIGN1cnJlbnQgd2luZG93IGRvY3VtZW50LlxuICByZXR1cm4gVHlwZS5pc09iamVjdCh4KSAmJiAoc2FuZEhUTUxFbGVtZW50KHNjb3BlKS5wcm90b3R5cGUuaXNQcm90b3R5cGVPZih4KSB8fCAvXkhUTUxcXHcqRWxlbWVudCQvLnRlc3QoZ2V0UHJvdG90eXBlT2YoeCkuY29uc3RydWN0b3IubmFtZSkpO1xufTtcblxuZXhwb3J0IHtcbiAgaXNQcm90b3R5cGVPZlxufTtcbiIsImltcG9ydCB7IFJlc29sdmUgfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5jb25zdCB1bnNhZmUgPSA8VD4obmFtZTogc3RyaW5nLCBzY29wZT86IHt9KTogVCB8IHVuZGVmaW5lZCA9PiB7XG4gIHJldHVybiBSZXNvbHZlLnJlc29sdmUobmFtZSwgc2NvcGUpO1xufTtcblxuY29uc3QgZ2V0T3JEaWUgPSA8VD4obmFtZTogc3RyaW5nLCBzY29wZT86IHt9KTogVCA9PiB7XG4gIGNvbnN0IGFjdHVhbCA9IHVuc2FmZTxUPihuYW1lLCBzY29wZSk7XG5cbiAgaWYgKGFjdHVhbCA9PT0gdW5kZWZpbmVkIHx8IGFjdHVhbCA9PT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBFcnJvcihuYW1lICsgJyBub3QgYXZhaWxhYmxlIG9uIHRoaXMgYnJvd3NlcicpO1xuICB9XG4gIHJldHVybiBhY3R1YWw7XG59O1xuXG5leHBvcnQge1xuICBnZXRPckRpZVxufTtcbiIsImltcG9ydCB0eXBlIHsgT3B0aW9uYWwgfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG4vKipcbiAqIEFwcGxpZXMgZiByZXBlYXRlZGx5IHVudGlsIGl0IGNvbXBsZXRlcyAoYnkgcmV0dXJuaW5nIE9wdGlvbmFsLm5vbmUoKSkuXG4gKlxuICogTm9ybWFsbHkgd291bGQganVzdCB1c2UgcmVjdXJzaW9uLCBidXQgSmF2YVNjcmlwdCBsYWNrcyB0YWlsIGNhbGwgb3B0aW1pc2F0aW9uLlxuICpcbiAqIFRoaXMgaXMgd2hhdCByZWN1cnNpb24gbG9va3MgbGlrZSB3aGVuIG1hbnVhbGx5IHVucmF2ZWxsZWQgOilcbiAqL1xuY29uc3QgdG9BcnJheSA9IDxUID0gYW55LCBVIGV4dGVuZHMgVCA9IFQ+ICh0YXJnZXQ6IFQsIGY6ICh0OiBUKSA9PiBPcHRpb25hbDxVPik6IFVbXSA9PiB7XG4gIGNvbnN0IHI6IFVbXSA9IFtdO1xuXG4gIGNvbnN0IHJlY3Vyc2UgPSAoZTogVSkgPT4ge1xuICAgIHIucHVzaChlKTtcbiAgICByZXR1cm4gZihlKTtcbiAgfTtcblxuICBsZXQgY3VyID0gZih0YXJnZXQpO1xuICBkbyB7XG4gICAgY3VyID0gY3VyLmJpbmQocmVjdXJzZSk7XG4gIH0gd2hpbGUgKGN1ci5pc1NvbWUoKSk7XG5cbiAgcmV0dXJuIHI7XG59O1xuXG5leHBvcnQge1xuICB0b0FycmF5XG59O1xuIiwiaW1wb3J0IHsgQXJyLCBGdW4gfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5pbXBvcnQgdHlwZSB7IFN1Z2FyRWxlbWVudCB9IGZyb20gJy4uL25vZGUvU3VnYXJFbGVtZW50JztcbmltcG9ydCAqIGFzIFNlbGVjdG9ycyBmcm9tICcuLi9zZWFyY2gvU2VsZWN0b3JzJztcblxuY29uc3QgZXEgPSAoZTE6IFN1Z2FyRWxlbWVudDx1bmtub3duPiwgZTI6IFN1Z2FyRWxlbWVudDx1bmtub3duPik6IGJvb2xlYW4gPT5cbiAgZTEuZG9tID09PSBlMi5kb207XG5cbmNvbnN0IGlzRXF1YWxOb2RlID0gKGUxOiBTdWdhckVsZW1lbnQ8Tm9kZT4sIGUyOiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBib29sZWFuID0+XG4gIGUxLmRvbS5pc0VxdWFsTm9kZShlMi5kb20pO1xuXG5jb25zdCBtZW1iZXIgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PHVua25vd24+LCBlbGVtZW50czogU3VnYXJFbGVtZW50PHVua25vd24+W10pOiBib29sZWFuID0+XG4gIEFyci5leGlzdHMoZWxlbWVudHMsIEZ1bi5jdXJyeShlcSwgZWxlbWVudCkpO1xuXG4vLyBSZXR1cm5zOiB0cnVlIGlmIG5vZGUgZTEgY29udGFpbnMgZTIsIG90aGVyd2lzZSBmYWxzZS5cbi8vIChyZXR1cm5zIGZhbHNlIGlmIGUxPT09ZTI6IEEgbm9kZSBkb2VzIG5vdCBjb250YWluIGl0c2VsZikuXG5jb25zdCBjb250YWlucyA9IChlMTogU3VnYXJFbGVtZW50PE5vZGU+LCBlMjogU3VnYXJFbGVtZW50PE5vZGU+KTogYm9vbGVhbiA9PiB7XG4gIGNvbnN0IGQxID0gZTEuZG9tO1xuICBjb25zdCBkMiA9IGUyLmRvbTtcbiAgcmV0dXJuIGQxID09PSBkMiA/IGZhbHNlIDogZDEuY29udGFpbnMoZDIpO1xufTtcblxuY29uc3QgaXMgPSBTZWxlY3RvcnMuaXM7XG5cbmV4cG9ydCB7XG4gIGVxLFxuICBpc0VxdWFsTm9kZSxcbiAgbWVtYmVyLFxuICBjb250YWlucyxcbiAgLy8gT25seSB1c2VkIGJ5IERvbVVuaXZlcnNlLiBSZW1vdmUgKG9yIHNob3VsZCBTZWxlY3RvcnMuaXMgbW92ZSBoZXJlPylcbiAgaXNcbn07XG4iLCJjb25zdCBBVFRSSUJVVEUgPSAyO1xuY29uc3QgQ0RBVEFfU0VDVElPTiA9IDQ7XG5jb25zdCBDT01NRU5UID0gODtcbmNvbnN0IERPQ1VNRU5UID0gOTtcbmNvbnN0IERPQ1VNRU5UX1RZUEUgPSAxMDtcbmNvbnN0IERPQ1VNRU5UX0ZSQUdNRU5UID0gMTE7XG5jb25zdCBFTEVNRU5UID0gMTtcbmNvbnN0IFRFWFQgPSAzO1xuY29uc3QgUFJPQ0VTU0lOR19JTlNUUlVDVElPTiA9IDc7XG5jb25zdCBFTlRJVFlfUkVGRVJFTkNFID0gNTtcbmNvbnN0IEVOVElUWSA9IDY7XG5jb25zdCBOT1RBVElPTiA9IDEyO1xuXG5leHBvcnQge1xuICBBVFRSSUJVVEUsXG4gIENEQVRBX1NFQ1RJT04sXG4gIENPTU1FTlQsXG4gIERPQ1VNRU5ULFxuICBET0NVTUVOVF9UWVBFLFxuICBET0NVTUVOVF9GUkFHTUVOVCxcbiAgRUxFTUVOVCxcbiAgVEVYVCxcbiAgUFJPQ0VTU0lOR19JTlNUUlVDVElPTixcbiAgRU5USVRZX1JFRkVSRU5DRSxcbiAgRU5USVRZLFxuICBOT1RBVElPTlxufTtcbiIsImltcG9ydCB7IEZ1biB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmltcG9ydCB7IFN1Z2FyRWxlbWVudCB9IGZyb20gJy4vU3VnYXJFbGVtZW50JztcbmltcG9ydCAqIGFzIFN1Z2FyTm9kZSBmcm9tICcuL1N1Z2FyTm9kZSc7XG5pbXBvcnQgeyBnZXRTaGFkb3dIb3N0LCBnZXRTaGFkb3dSb290IH0gZnJvbSAnLi9TdWdhclNoYWRvd0RvbSc7XG5cbi8vIE5vZGUuY29udGFpbnMoKSBpcyB2ZXJ5LCB2ZXJ5LCB2ZXJ5IGdvb2QgcGVyZm9ybWFuY2Vcbi8vIGh0dHA6Ly9qc3BlcmYuY29tL2Nsb3Nlc3QtdnMtY29udGFpbnMvNVxuY29uc3QgaW5Cb2R5ID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPik6IGJvb2xlYW4gPT4ge1xuICAvLyBUZWNobmljYWxseSB0aGlzIGlzIG9ubHkgcmVxdWlyZWQgb24gSUUsIHdoZXJlIGNvbnRhaW5zKCkgcmV0dXJucyBmYWxzZSBmb3IgdGV4dCBub2Rlcy5cbiAgLy8gQnV0IGl0J3MgY2hlYXAgZW5vdWdoIHRvIHJ1biBldmVyeXdoZXJlIGFuZCBTdWdhciBkb2Vzbid0IGhhdmUgcGxhdGZvcm0gZGV0ZWN0aW9uICh5ZXQpLlxuICBjb25zdCBkb20gPSBTdWdhck5vZGUuaXNUZXh0KGVsZW1lbnQpID8gZWxlbWVudC5kb20ucGFyZW50Tm9kZSA6IGVsZW1lbnQuZG9tO1xuXG4gIC8vIHVzZSBvd25lckRvY3VtZW50LmJvZHkgdG8gZW5zdXJlIHRoaXMgd29ya3MgaW5zaWRlIGlmcmFtZXMuXG4gIC8vIE5vcm1hbGx5IGNvbnRhaW5zIGlzIGJhZCBiZWNhdXNlIGFuIGVsZW1lbnQgXCJjb250YWluc1wiIGl0c2VsZiwgYnV0IGhlcmUgd2Ugd2FudCB0aGF0LlxuICBpZiAoZG9tID09PSB1bmRlZmluZWQgfHwgZG9tID09PSBudWxsIHx8IGRvbS5vd25lckRvY3VtZW50ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgZG9jID0gZG9tLm93bmVyRG9jdW1lbnQ7XG4gIHJldHVybiBnZXRTaGFkb3dSb290KFN1Z2FyRWxlbWVudC5mcm9tRG9tKGRvbSkpLmZvbGQoXG4gICAgKCkgPT4gZG9jLmJvZHkuY29udGFpbnMoZG9tKSxcbiAgICBGdW4uY29tcG9zZTEoaW5Cb2R5LCBnZXRTaGFkb3dIb3N0KVxuICApO1xufTtcblxuY29uc3QgYm9keSA9ICgpOiBTdWdhckVsZW1lbnQ8SFRNTEVsZW1lbnQ+ID0+XG4gIGdldEJvZHkoU3VnYXJFbGVtZW50LmZyb21Eb20oZG9jdW1lbnQpKTtcblxuY29uc3QgZ2V0Qm9keSA9IChkb2M6IFN1Z2FyRWxlbWVudDxEb2N1bWVudD4pOiBTdWdhckVsZW1lbnQ8SFRNTEVsZW1lbnQ+ID0+IHtcbiAgY29uc3QgYiA9IGRvYy5kb20uYm9keTtcbiAgaWYgKGIgPT09IG51bGwgfHwgYiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdCb2R5IGlzIG5vdCBhdmFpbGFibGUgeWV0Jyk7XG4gIH1cbiAgcmV0dXJuIFN1Z2FyRWxlbWVudC5mcm9tRG9tKGIpO1xufTtcblxuZXhwb3J0IHtcbiAgYm9keSxcbiAgZ2V0Qm9keSxcbiAgaW5Cb2R5XG59O1xuIiwiaW1wb3J0IHsgT3B0aW9uYWwgfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5pbXBvcnQgdHlwZSB7IEhUTUxFbGVtZW50RnVsbFRhZ05hbWVNYXAgfSBmcm9tICcuLi8uLi9hbGllbi9Eb21UeXBlcyc7XG5cbmludGVyZmFjZSBTdWdhckVsZW1lbnQ8VCA9IGFueT4ge1xuICByZWFkb25seSBkb206IFQ7XG59XG5cbmNvbnN0IGZyb21IdG1sID0gPEUgZXh0ZW5kcyBOb2RlID0gTm9kZSAmIENoaWxkTm9kZT4gKGh0bWw6IHN0cmluZywgc2NvcGU/OiBEb2N1bWVudCB8IG51bGwpOiBTdWdhckVsZW1lbnQ8RT4gPT4ge1xuICBjb25zdCBkb2MgPSBzY29wZSB8fCBkb2N1bWVudDtcbiAgY29uc3QgZGl2ID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuaW5uZXJIVE1MID0gaHRtbDtcbiAgaWYgKCFkaXYuaGFzQ2hpbGROb2RlcygpIHx8IGRpdi5jaGlsZE5vZGVzLmxlbmd0aCA+IDEpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gJ0hUTUwgZG9lcyBub3QgaGF2ZSBhIHNpbmdsZSByb290IG5vZGUnO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5lcnJvcihtZXNzYWdlLCBodG1sKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIH1cbiAgcmV0dXJuIGZyb21Eb20oZGl2LmNoaWxkTm9kZXNbMF0gYXMgdW5rbm93biBhcyBFKTtcbn07XG5cbmNvbnN0IGZyb21UYWc6IHtcbiAgPEsgZXh0ZW5kcyBrZXlvZiBIVE1MRWxlbWVudEZ1bGxUYWdOYW1lTWFwPih0YWc6IEssIHNjb3BlPzogRG9jdW1lbnQgfCBudWxsKTogU3VnYXJFbGVtZW50PEhUTUxFbGVtZW50RnVsbFRhZ05hbWVNYXBbS10+O1xuICAodGFnOiBzdHJpbmcsIHNjb3BlPzogRG9jdW1lbnQgfCBudWxsKTogU3VnYXJFbGVtZW50PEhUTUxFbGVtZW50Pjtcbn0gPSAodGFnOiBzdHJpbmcsIHNjb3BlPzogRG9jdW1lbnQgfCBudWxsKTogU3VnYXJFbGVtZW50PEhUTUxFbGVtZW50PiA9PiB7XG4gIGNvbnN0IGRvYyA9IHNjb3BlIHx8IGRvY3VtZW50O1xuICBjb25zdCBub2RlID0gZG9jLmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgcmV0dXJuIGZyb21Eb20obm9kZSk7XG59O1xuXG5jb25zdCBmcm9tVGV4dCA9ICh0ZXh0OiBzdHJpbmcsIHNjb3BlPzogRG9jdW1lbnQgfCBudWxsKTogU3VnYXJFbGVtZW50PFRleHQ+ID0+IHtcbiAgY29uc3QgZG9jID0gc2NvcGUgfHwgZG9jdW1lbnQ7XG4gIGNvbnN0IG5vZGUgPSBkb2MuY3JlYXRlVGV4dE5vZGUodGV4dCk7XG4gIHJldHVybiBmcm9tRG9tKG5vZGUpO1xufTtcblxuY29uc3QgZnJvbURvbSA9IDxUIGV4dGVuZHMgTm9kZSB8IFdpbmRvdz4gKG5vZGU6IFQpOiBTdWdhckVsZW1lbnQ8VD4gPT4ge1xuICAvLyBUT0RPOiBDb25zaWRlciByZW1vdmluZyB0aGlzIGNoZWNrLCBidXQgbGVmdCBhdG0gZm9yIHNhZmV0eVxuICBpZiAobm9kZSA9PT0gbnVsbCB8fCBub2RlID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vZGUgY2Fubm90IGJlIG51bGwgb3IgdW5kZWZpbmVkJyk7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBkb206IG5vZGVcbiAgfTtcbn07XG5cbmNvbnN0IGZyb21Qb2ludCA9IChkb2NFbG06IFN1Z2FyRWxlbWVudDxEb2N1bWVudD4sIHg6IG51bWJlciwgeTogbnVtYmVyKTogT3B0aW9uYWw8U3VnYXJFbGVtZW50PEVsZW1lbnQ+PiA9PlxuICBPcHRpb25hbC5mcm9tKGRvY0VsbS5kb20uZWxlbWVudEZyb21Qb2ludCh4LCB5KSkubWFwKGZyb21Eb20pO1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxuY29uc3QgU3VnYXJFbGVtZW50ID0ge1xuICBmcm9tSHRtbCxcbiAgZnJvbVRhZyxcbiAgZnJvbVRleHQsXG4gIGZyb21Eb20sXG4gIGZyb21Qb2ludFxufTtcblxuZXhwb3J0IHtcbiAgU3VnYXJFbGVtZW50XG59O1xuIiwiaW1wb3J0IHsgU3VnYXJFbGVtZW50IH0gZnJvbSAnLi9TdWdhckVsZW1lbnQnO1xuXG5leHBvcnQgY29uc3QgaGVhZCA9ICgpOiBTdWdhckVsZW1lbnQ8SFRNTEhlYWRFbGVtZW50PiA9PiBnZXRIZWFkKFN1Z2FyRWxlbWVudC5mcm9tRG9tKGRvY3VtZW50KSk7XG5cbmV4cG9ydCBjb25zdCBnZXRIZWFkID0gKGRvYzogU3VnYXJFbGVtZW50PERvY3VtZW50Pik6IFN1Z2FyRWxlbWVudDxIVE1MSGVhZEVsZW1lbnQ+ID0+IHtcbiAgLypcbiAgICogSUU5IGFuZCBhYm92ZSBwZXJcbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RvY3VtZW50L2hlYWRcbiAgICovXG4gIGNvbnN0IGIgPSBkb2MuZG9tLmhlYWQ7XG4gIGlmIChiID09PSBudWxsIHx8IGIgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignSGVhZCBpcyBub3QgYXZhaWxhYmxlIHlldCcpO1xuICB9XG4gIHJldHVybiBTdWdhckVsZW1lbnQuZnJvbURvbShiKTtcbn07XG4iLCJpbXBvcnQgeyBTYW5kSFRNTEVsZW1lbnQgfSBmcm9tICdAZXBob3gvc2FuZCc7XG5cbmltcG9ydCB0eXBlIHsgSFRNTEVsZW1lbnRGdWxsVGFnTmFtZU1hcCB9IGZyb20gJy4uLy4uL2FsaWVuL0RvbVR5cGVzJztcblxuaW1wb3J0ICogYXMgTm9kZVR5cGVzIGZyb20gJy4vTm9kZVR5cGVzJztcbmltcG9ydCB0eXBlIHsgU3VnYXJFbGVtZW50IH0gZnJvbSAnLi9TdWdhckVsZW1lbnQnO1xuXG5jb25zdCBuYW1lID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPik6IHN0cmluZyA9PiB7XG4gIGNvbnN0IHIgPSBlbGVtZW50LmRvbS5ub2RlTmFtZTtcbiAgcmV0dXJuIHIudG9Mb3dlckNhc2UoKTtcbn07XG5cbmNvbnN0IHR5cGUgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KTogbnVtYmVyID0+XG4gIGVsZW1lbnQuZG9tLm5vZGVUeXBlO1xuXG5jb25zdCB2YWx1ZSA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBzdHJpbmcgfCBudWxsID0+XG4gIGVsZW1lbnQuZG9tLm5vZGVWYWx1ZTtcblxuY29uc3QgaXNUeXBlID0gPEUgZXh0ZW5kcyBOb2RlPiAodDogbnVtYmVyKSA9PiAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KTogZWxlbWVudCBpcyBTdWdhckVsZW1lbnQ8RT4gPT5cbiAgdHlwZShlbGVtZW50KSA9PT0gdDtcblxuY29uc3QgaXNDb21tZW50ID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPik6IGVsZW1lbnQgaXMgU3VnYXJFbGVtZW50PENvbW1lbnQ+ID0+XG4gIHR5cGUoZWxlbWVudCkgPT09IE5vZGVUeXBlcy5DT01NRU5UIHx8IG5hbWUoZWxlbWVudCkgPT09ICcjY29tbWVudCc7XG5cbmNvbnN0IGlzSFRNTEVsZW1lbnQgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KTogZWxlbWVudCBpcyBTdWdhckVsZW1lbnQ8SFRNTEVsZW1lbnQ+ID0+XG4gIGlzRWxlbWVudChlbGVtZW50KSAmJiBTYW5kSFRNTEVsZW1lbnQuaXNQcm90b3R5cGVPZihlbGVtZW50LmRvbSk7XG5cbmNvbnN0IGlzRWxlbWVudCA9IGlzVHlwZTxFbGVtZW50PihOb2RlVHlwZXMuRUxFTUVOVCk7XG5jb25zdCBpc1RleHQgPSBpc1R5cGU8VGV4dD4oTm9kZVR5cGVzLlRFWFQpO1xuY29uc3QgaXNEb2N1bWVudCA9IGlzVHlwZTxEb2N1bWVudD4oTm9kZVR5cGVzLkRPQ1VNRU5UKTtcbmNvbnN0IGlzRG9jdW1lbnRGcmFnbWVudCA9IGlzVHlwZTxEb2N1bWVudEZyYWdtZW50PihOb2RlVHlwZXMuRE9DVU1FTlRfRlJBR01FTlQpO1xuXG5jb25zdCBpc1RhZyA9IDxLIGV4dGVuZHMga2V5b2YgSFRNTEVsZW1lbnRGdWxsVGFnTmFtZU1hcD4odGFnOiBLKSA9PiAoZTogU3VnYXJFbGVtZW50PE5vZGU+KTogZSBpcyBTdWdhckVsZW1lbnQ8SFRNTEVsZW1lbnRGdWxsVGFnTmFtZU1hcFtLXT4gPT5cbiAgaXNFbGVtZW50KGUpICYmIG5hbWUoZSkgPT09IHRhZztcblxuZXhwb3J0IHtcbiAgbmFtZSxcbiAgdHlwZSxcbiAgdmFsdWUsXG4gIGlzRWxlbWVudCxcbiAgaXNIVE1MRWxlbWVudCxcbiAgaXNUZXh0LFxuICBpc0RvY3VtZW50LFxuICBpc0RvY3VtZW50RnJhZ21lbnQsXG4gIGlzQ29tbWVudCxcbiAgaXNUYWdcbn07XG4iLCJpbXBvcnQgeyBBcnIsIE9wdGlvbmFsLCBUeXBlIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0IHR5cGUgeyBIVE1MRWxlbWVudEZ1bGxUYWdOYW1lTWFwIH0gZnJvbSAnLi4vLi4vYWxpZW4vRG9tVHlwZXMnO1xuaW1wb3J0ICogYXMgVHJhdmVyc2UgZnJvbSAnLi4vc2VhcmNoL1RyYXZlcnNlJztcblxuaW1wb3J0IHsgU3VnYXJFbGVtZW50IH0gZnJvbSAnLi9TdWdhckVsZW1lbnQnO1xuaW1wb3J0ICogYXMgU3VnYXJIZWFkIGZyb20gJy4vU3VnYXJIZWFkJztcbmltcG9ydCAqIGFzIFN1Z2FyTm9kZSBmcm9tICcuL1N1Z2FyTm9kZSc7XG5cbmV4cG9ydCB0eXBlIFJvb3ROb2RlID0gU3VnYXJFbGVtZW50PERvY3VtZW50IHwgU2hhZG93Um9vdD47XG5cbi8qKlxuICogSXMgdGhlIGVsZW1lbnQgYSBTaGFkb3dSb290P1xuICpcbiAqIE5vdGU6IHRoaXMgaXMgaW5zdWZmaWNpZW50IHRvIHRlc3QgaWYgYW55IGVsZW1lbnQgaXMgYSBzaGFkb3cgcm9vdCwgYnV0IGl0IGlzIHN1ZmZpY2llbnQgdG8gZGlmZmVyZW50aWF0ZSBiZXR3ZWVuXG4gKiBhIERvY3VtZW50IGFuZCBhIFNoYWRvd1Jvb3QuXG4gKi9cbmV4cG9ydCBjb25zdCBpc1NoYWRvd1Jvb3QgPSAoZG9zOiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBkb3MgaXMgU3VnYXJFbGVtZW50PFNoYWRvd1Jvb3Q+ID0+XG4gIFN1Z2FyTm9kZS5pc0RvY3VtZW50RnJhZ21lbnQoZG9zKSAmJiBUeXBlLmlzTm9uTnVsbGFibGUoKGRvcy5kb20gYXMgU2hhZG93Um9vdCkuaG9zdCk7XG5cbmV4cG9ydCBjb25zdCBnZXRSb290Tm9kZTogKGU6IFN1Z2FyRWxlbWVudDxOb2RlPikgPT4gUm9vdE5vZGUgPSAoZSkgPT5cbiAgU3VnYXJFbGVtZW50LmZyb21Eb20oZS5kb20uZ2V0Um9vdE5vZGUoKSkgYXMgUm9vdE5vZGU7XG5cbi8qKiBDcmVhdGUgYW4gZWxlbWVudCwgdXNpbmcgdGhlIGFjdHVhbCBkb2N1bWVudC4gKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVFbGVtZW50OiB7XG4gIDxLIGV4dGVuZHMga2V5b2YgSFRNTEVsZW1lbnRGdWxsVGFnTmFtZU1hcD4oZG9zOiBSb290Tm9kZSwgdGFnOiBLKTogU3VnYXJFbGVtZW50PEhUTUxFbGVtZW50RnVsbFRhZ05hbWVNYXBbS10+O1xuICAoZG9zOiBSb290Tm9kZSwgdGFnOiBzdHJpbmcpOiBTdWdhckVsZW1lbnQ8SFRNTEVsZW1lbnQ+O1xufSA9IChkb3M6IFJvb3ROb2RlLCB0YWc6IHN0cmluZykgPT5cbiAgU3VnYXJFbGVtZW50LmZyb21UYWcodGFnLCBUcmF2ZXJzZS5kb2N1bWVudE9yT3duZXIoZG9zKS5kb20pO1xuXG4vKiogV2hlcmUgc3R5bGUgdGFncyBuZWVkIHRvIGdvLiBTaGFkb3dSb290IG9yIGRvY3VtZW50IGhlYWQgKi9cbmV4cG9ydCBjb25zdCBnZXRTdHlsZUNvbnRhaW5lciA9IChkb3M6IFJvb3ROb2RlKTogU3VnYXJFbGVtZW50PEhUTUxIZWFkRWxlbWVudCB8IFNoYWRvd1Jvb3Q+ID0+XG4gIGlzU2hhZG93Um9vdChkb3MpID8gZG9zIDogU3VnYXJIZWFkLmdldEhlYWQoVHJhdmVyc2UuZG9jdW1lbnRPck93bmVyKGRvcykpO1xuXG4vKiogV2hlcmUgY29udGVudCBuZWVkcyB0byBnby4gU2hhZG93Um9vdCBvciBkb2N1bWVudCBib2R5ICovXG5leHBvcnQgY29uc3QgZ2V0Q29udGVudENvbnRhaW5lciA9IChkb3M6IFJvb3ROb2RlKTogU3VnYXJFbGVtZW50PEhUTUxFbGVtZW50IHwgU2hhZG93Um9vdD4gPT5cbiAgLy8gQ2FuJ3QgdXNlIFN1Z2FyQm9keS5ib2R5IHdpdGhvdXQgY2F1c2luZyBhIGNpcmN1bGFyIG1vZHVsZSByZWZlcmVuY2UgKHNpbmNlIFN1Z2FyQm9keS5pbkJvZHkgdXNlcyBTdWdhclNoYWRvd0RvbSlcbiAgaXNTaGFkb3dSb290KGRvcykgPyBkb3MgOiBTdWdhckVsZW1lbnQuZnJvbURvbShUcmF2ZXJzZS5kb2N1bWVudE9yT3duZXIoZG9zKS5kb20uYm9keSk7XG5cbi8qKiBJcyB0aGlzIGVsZW1lbnQgZWl0aGVyIGEgU2hhZG93Um9vdCBvciBhIGRlc2NlbmRlbnQgb2YgYSBTaGFkb3dSb290LiAqL1xuZXhwb3J0IGNvbnN0IGlzSW5TaGFkb3dSb290ID0gKGU6IFN1Z2FyRWxlbWVudDxOb2RlPik6IGJvb2xlYW4gPT5cbiAgZ2V0U2hhZG93Um9vdChlKS5pc1NvbWUoKTtcblxuLyoqIElmIHRoaXMgZWxlbWVudCBpcyBpbiBhIFNoYWRvd1Jvb3QsIHJldHVybiBpdC4gKi9cbmV4cG9ydCBjb25zdCBnZXRTaGFkb3dSb290ID0gKGU6IFN1Z2FyRWxlbWVudDxOb2RlPik6IE9wdGlvbmFsPFN1Z2FyRWxlbWVudDxTaGFkb3dSb290Pj4gPT4ge1xuICBjb25zdCByID0gZ2V0Um9vdE5vZGUoZSk7XG4gIHJldHVybiBpc1NoYWRvd1Jvb3QocikgPyBPcHRpb25hbC5zb21lKHIpIDogT3B0aW9uYWwubm9uZSgpO1xufTtcblxuLyoqIFJldHVybiB0aGUgaG9zdCBvZiBhIFNoYWRvd1Jvb3QuXG4gKlxuICogVGhpcyBmdW5jdGlvbiB3aWxsIHRocm93IGlmIFNoYWRvdyBET00gaXMgdW5zdXBwb3J0ZWQgaW4gdGhlIGJyb3dzZXIsIG9yIGlmIHRoZSBob3N0IGlzIG51bGwuXG4gKiBJZiB5b3UgYWN0dWFsbHkgaGF2ZSBhIFNoYWRvd1Jvb3QsIHRoaXMgc2hvdWxkbid0IGhhcHBlbi5cbiAqL1xuZXhwb3J0IGNvbnN0IGdldFNoYWRvd0hvc3QgPSAoZTogU3VnYXJFbGVtZW50PFNoYWRvd1Jvb3Q+KTogU3VnYXJFbGVtZW50PEVsZW1lbnQ+ID0+XG4gIFN1Z2FyRWxlbWVudC5mcm9tRG9tKGUuZG9tLmhvc3QpO1xuXG4vKipcbiAqIFdoZW4gRXZlbnRzIGJ1YmJsZSB1cCB0aHJvdWdoIGEgU2hhZG93Um9vdCwgdGhlIGJyb3dzZXIgY2hhbmdlcyB0aGUgdGFyZ2V0IHRvIGJlIHRoZSBzaGFkb3cgaG9zdC5cbiAqIFRoaXMgZnVuY3Rpb24gZ2V0cyB0aGUgXCJvcmlnaW5hbFwiIGV2ZW50IHRhcmdldCBpZiBwb3NzaWJsZS5cbiAqIFRoaXMgb25seSB3b3JrcyBpZiB0aGUgc2hhZG93IHRyZWUgaXMgb3BlbiAtIGlmIHRoZSBzaGFkb3cgdHJlZSBpcyBjbG9zZWQsIGV2ZW50LnRhcmdldCBpcyByZXR1cm5lZC5cbiAqIFNlZTogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL2Z1bmRhbWVudGFscy93ZWItY29tcG9uZW50cy9zaGFkb3dkb20jZXZlbnRzXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRPcmlnaW5hbEV2ZW50VGFyZ2V0ID0gKGV2ZW50OiBFdmVudCk6IE9wdGlvbmFsPEV2ZW50VGFyZ2V0PiA9PiB7XG4gIGlmIChUeXBlLmlzTm9uTnVsbGFibGUoZXZlbnQudGFyZ2V0KSkge1xuICAgIGNvbnN0IGVsID0gU3VnYXJFbGVtZW50LmZyb21Eb20oZXZlbnQudGFyZ2V0IGFzIE5vZGUpO1xuICAgIGlmIChTdWdhck5vZGUuaXNFbGVtZW50KGVsKSAmJiBpc09wZW5TaGFkb3dIb3N0KGVsKSkge1xuICAgICAgLy8gV2hlbiB0YXJnZXQgZWxlbWVudCBpcyBpbnNpZGUgU2hhZG93IERPTSB3ZSBuZWVkIHRvIHRha2UgZmlyc3QgZWxlbWVudCBmcm9tIGNvbXBvc2VkUGF0aFxuICAgICAgLy8gb3RoZXJ3aXNlIHdlJ2xsIGdldCBTaGFkb3cgUm9vdCBwYXJlbnQsIG5vdCBhY3R1YWwgdGFyZ2V0IGVsZW1lbnQuXG4gICAgICBpZiAoZXZlbnQuY29tcG9zZWQgJiYgZXZlbnQuY29tcG9zZWRQYXRoKSB7XG4gICAgICAgIGNvbnN0IGNvbXBvc2VkUGF0aCA9IGV2ZW50LmNvbXBvc2VkUGF0aCgpO1xuICAgICAgICBpZiAoY29tcG9zZWRQYXRoKSB7XG4gICAgICAgICAgcmV0dXJuIEFyci5oZWFkKGNvbXBvc2VkUGF0aCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIE9wdGlvbmFsLmZyb20oZXZlbnQudGFyZ2V0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc09wZW5TaGFkb3dSb290ID0gKHNyOiBTdWdhckVsZW1lbnQ8U2hhZG93Um9vdD4pOiBib29sZWFuID0+XG4gIHNyLmRvbS5tb2RlID09PSAnb3Blbic7XG5cbmV4cG9ydCBjb25zdCBpc0Nsb3NlZFNoYWRvd1Jvb3QgPSAoc3I6IFN1Z2FyRWxlbWVudDxTaGFkb3dSb290Pik6IGJvb2xlYW4gPT5cbiAgc3IuZG9tLm1vZGUgPT09ICdjbG9zZWQnO1xuXG4vKiogUmV0dXJuIHRydWUgaWYgdGhlIGVsZW1lbnQgaXMgYSBob3N0IG9mIGFuIG9wZW4gc2hhZG93IHJvb3QuXG4gKiAgUmV0dXJuIGZhbHNlIGlmIHRoZSBlbGVtZW50IGlzIGEgaG9zdCBvZiBhIGNsb3NlZCBzaGFkb3cgcm9vdCwgb3IgaWYgdGhlIGVsZW1lbnQgaXMgbm90IGEgaG9zdC5cbiAqL1xuZXhwb3J0IGNvbnN0IGlzT3BlblNoYWRvd0hvc3QgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PEVsZW1lbnQ+KTogYm9vbGVhbiA9PlxuICBUeXBlLmlzTm9uTnVsbGFibGUoZWxlbWVudC5kb20uc2hhZG93Um9vdCk7XG4iLCJpbXBvcnQgeyBBcnIgfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5pbXBvcnQgdHlwZSB7IFN1Z2FyRWxlbWVudCB9IGZyb20gJy4uL25vZGUvU3VnYXJFbGVtZW50JztcblxuaW1wb3J0ICogYXMgQXR0cmlidXRlIGZyb20gJy4vQXR0cmlidXRlJztcblxuLy8gTWV0aG9kcyBmb3IgaGFuZGxpbmcgYXR0cmlidXRlcyB0aGF0IGNvbnRhaW4gYSBsaXN0IG9mIHZhbHVlcyA8ZGl2IGZvbz1cImFscGhhIGJldGEgdGhldGFcIj5cbmNvbnN0IHJlYWQgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PEVsZW1lbnQ+LCBhdHRyOiBzdHJpbmcpOiBzdHJpbmdbXSA9PiB7XG4gIGNvbnN0IHZhbHVlID0gQXR0cmlidXRlLmdldChlbGVtZW50LCBhdHRyKTtcbiAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09ICcnID8gW10gOiB2YWx1ZS5zcGxpdCgnICcpO1xufTtcblxuY29uc3QgYWRkID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxFbGVtZW50PiwgYXR0cjogc3RyaW5nLCBpZDogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gIGNvbnN0IG9sZCA9IHJlYWQoZWxlbWVudCwgYXR0cik7XG4gIGNvbnN0IG51ID0gb2xkLmNvbmNhdChbIGlkIF0pO1xuICBBdHRyaWJ1dGUuc2V0KGVsZW1lbnQsIGF0dHIsIG51LmpvaW4oJyAnKSk7XG4gIHJldHVybiB0cnVlO1xufTtcblxuY29uc3QgcmVtb3ZlID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxFbGVtZW50PiwgYXR0cjogc3RyaW5nLCBpZDogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gIGNvbnN0IG51ID0gQXJyLmZpbHRlcihyZWFkKGVsZW1lbnQsIGF0dHIpLCAodikgPT4gdiAhPT0gaWQpO1xuICBpZiAobnUubGVuZ3RoID4gMCkge1xuICAgIEF0dHJpYnV0ZS5zZXQoZWxlbWVudCwgYXR0ciwgbnUuam9pbignICcpKTtcbiAgfSBlbHNlIHtcbiAgICBBdHRyaWJ1dGUucmVtb3ZlKGVsZW1lbnQsIGF0dHIpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCB7XG4gIHJlYWQsXG4gIGFkZCxcbiAgcmVtb3ZlXG59O1xuIiwiaW1wb3J0IHsgQXJyLCBPYmosIE9wdGlvbmFsLCBUeXBlIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0IHR5cGUgeyBTdWdhckVsZW1lbnQgfSBmcm9tICcuLi9ub2RlL1N1Z2FyRWxlbWVudCc7XG5pbXBvcnQgKiBhcyBTdWdhck5vZGUgZnJvbSAnLi4vbm9kZS9TdWdhck5vZGUnO1xuXG5jb25zdCByYXdTZXQgPSAoZG9tOiBFbGVtZW50LCBrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyB8IGJvb2xlYW4gfCBudW1iZXIpOiB2b2lkID0+IHtcbiAgLypcbiAgICogSlF1ZXJ5IGNvZXJjZWQgZXZlcnl0aGluZyB0byBhIHN0cmluZywgYW5kIHNpbGVudGx5IGRpZCBub3RoaW5nIG9uIHRleHQgbm9kZS9udWxsL3VuZGVmaW5lZC5cbiAgICpcbiAgICogV2UgZmFpbCBvbiB0aG9zZSBpbnZhbGlkIGNhc2VzLCBvbmx5IGFsbG93aW5nIG51bWJlcnMgYW5kIGJvb2xlYW5zLlxuICAgKi9cbiAgaWYgKFR5cGUuaXNTdHJpbmcodmFsdWUpIHx8IFR5cGUuaXNCb29sZWFuKHZhbHVlKSB8fCBUeXBlLmlzTnVtYmVyKHZhbHVlKSkge1xuICAgIGRvbS5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSArICcnKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgY2FsbCB0byBBdHRyaWJ1dGUuc2V0LiBLZXkgJywga2V5LCAnOjogVmFsdWUgJywgdmFsdWUsICc6OiBFbGVtZW50ICcsIGRvbSk7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdBdHRyaWJ1dGUgdmFsdWUgd2FzIG5vdCBzaW1wbGUnKTtcbiAgfVxufTtcblxuY29uc3Qgc2V0ID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxFbGVtZW50Piwga2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCBib29sZWFuIHwgbnVtYmVyKTogdm9pZCA9PiB7XG4gIHJhd1NldChlbGVtZW50LmRvbSwga2V5LCB2YWx1ZSk7XG59O1xuXG5jb25zdCBzZXRBbGwgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PEVsZW1lbnQ+LCBhdHRyczogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgYm9vbGVhbiB8IG51bWJlcj4pOiB2b2lkID0+IHtcbiAgY29uc3QgZG9tID0gZWxlbWVudC5kb207XG4gIE9iai5lYWNoKGF0dHJzLCAodiwgaykgPT4ge1xuICAgIHJhd1NldChkb20sIGssIHYpO1xuICB9KTtcbn07XG5cbmNvbnN0IHNldE9wdGlvbnMgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PEVsZW1lbnQ+LCBhdHRyczogUmVjb3JkPHN0cmluZywgT3B0aW9uYWw8c3RyaW5nIHwgYm9vbGVhbiB8IG51bWJlcj4+KTogdm9pZCA9PiB7XG4gIE9iai5lYWNoKGF0dHJzLCAodiwgaykgPT4ge1xuICAgIHYuZm9sZCgoKSA9PiB7XG4gICAgICByZW1vdmUoZWxlbWVudCwgayk7XG4gICAgfSwgKHZhbHVlKSA9PiB7XG4gICAgICByYXdTZXQoZWxlbWVudC5kb20sIGssIHZhbHVlKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBnZXQgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PEVsZW1lbnQ+LCBrZXk6IHN0cmluZyk6IHVuZGVmaW5lZCB8IHN0cmluZyA9PiB7XG4gIGNvbnN0IHYgPSBlbGVtZW50LmRvbS5nZXRBdHRyaWJ1dGUoa2V5KTtcblxuICAvLyB1bmRlZmluZWQgaXMgdGhlIG1vcmUgYXBwcm9wcmlhdGUgdmFsdWUgZm9yIEpTLCBhbmQgdGhpcyBtYXRjaGVzIEpRdWVyeVxuICByZXR1cm4gdiA9PT0gbnVsbCA/IHVuZGVmaW5lZCA6IHY7XG59O1xuXG5jb25zdCBnZXRPcHQgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PEVsZW1lbnQ+LCBrZXk6IHN0cmluZyk6IE9wdGlvbmFsPHN0cmluZz4gPT5cbiAgT3B0aW9uYWwuZnJvbShnZXQoZWxlbWVudCwga2V5KSk7XG5cbmNvbnN0IGhhcyA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4sIGtleTogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gIGNvbnN0IGRvbSA9IGVsZW1lbnQuZG9tO1xuXG4gIC8vIHJldHVybiBmYWxzZSBmb3Igbm9uLWVsZW1lbnQgbm9kZXMsIG5vIHBvaW50IGluIHRocm93aW5nIGFuIGVycm9yXG4gIHJldHVybiBkb20gJiYgKGRvbSBhcyBFbGVtZW50KS5oYXNBdHRyaWJ1dGUgPyAoZG9tIGFzIEVsZW1lbnQpLmhhc0F0dHJpYnV0ZShrZXkpIDogZmFsc2U7XG59O1xuXG5jb25zdCByZW1vdmUgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PEVsZW1lbnQ+LCBrZXk6IHN0cmluZyk6IHZvaWQgPT4ge1xuICBlbGVtZW50LmRvbS5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcbn07XG5cbmNvbnN0IGhhc05vbmUgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KTogYm9vbGVhbiA9PiB7XG4gIGNvbnN0IGF0dHJzID0gKGVsZW1lbnQuZG9tIGFzIEVsZW1lbnQpLmF0dHJpYnV0ZXM7XG4gIHJldHVybiBhdHRycyA9PT0gdW5kZWZpbmVkIHx8IGF0dHJzID09PSBudWxsIHx8IGF0dHJzLmxlbmd0aCA9PT0gMDtcbn07XG5cbmNvbnN0IGNsb25lID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxFbGVtZW50Pik6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPT5cbiAgQXJyLmZvbGRsKGVsZW1lbnQuZG9tLmF0dHJpYnV0ZXMsIChhY2MsIGF0dHIpID0+IHtcbiAgICBhY2NbYXR0ci5uYW1lXSA9IGF0dHIudmFsdWU7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgc3RyaW5nPik7XG5cbmNvbnN0IHRyYW5zZmVyT25lID0gKHNvdXJjZTogU3VnYXJFbGVtZW50PEVsZW1lbnQ+LCBkZXN0aW5hdGlvbjogU3VnYXJFbGVtZW50PEVsZW1lbnQ+LCBhdHRyOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgLy8gTk9URTogV2UgZG9uJ3Qgd2FudCB0byBjbG9iYmVyIGFueSBleGlzdGluZyBhdHRyaWJ1dGVzXG4gIGlmICghaGFzKGRlc3RpbmF0aW9uLCBhdHRyKSkge1xuICAgIGdldE9wdChzb3VyY2UsIGF0dHIpLmVhY2goKHNyY1ZhbHVlKSA9PiBzZXQoZGVzdGluYXRpb24sIGF0dHIsIHNyY1ZhbHVlKSk7XG4gIH1cbn07XG5cbi8vIFRyYW5zZmVyIGF0dHJpYnV0ZXMoYXR0cnMpIGZyb20gc291cmNlIHRvIGRlc3RpbmF0aW9uLCB1bmxlc3MgdGhleSBhcmUgYWxyZWFkeSBwcmVzZW50XG5jb25zdCB0cmFuc2ZlciA9IChzb3VyY2U6IFN1Z2FyRWxlbWVudDxFbGVtZW50PiwgZGVzdGluYXRpb246IFN1Z2FyRWxlbWVudDxFbGVtZW50PiwgYXR0cnM6IHN0cmluZ1tdKTogdm9pZCA9PiB7XG4gIGlmICghU3VnYXJOb2RlLmlzRWxlbWVudChzb3VyY2UpIHx8ICFTdWdhck5vZGUuaXNFbGVtZW50KGRlc3RpbmF0aW9uKSkge1xuICAgIHJldHVybjtcbiAgfVxuICBBcnIuZWFjaChhdHRycywgKGF0dHIpID0+IHtcbiAgICB0cmFuc2Zlck9uZShzb3VyY2UsIGRlc3RpbmF0aW9uLCBhdHRyKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBjbG9uZSwgc2V0LCBzZXRBbGwsIHNldE9wdGlvbnMsIGdldCwgZ2V0T3B0LCBoYXMsIHJlbW92ZSwgaGFzTm9uZSwgdHJhbnNmZXIgfTtcbiIsImltcG9ydCAqIGFzIENsYXNzTGlzdCBmcm9tICcuLi8uLi9pbXBsL0NsYXNzTGlzdCc7XG5pbXBvcnQgdHlwZSB7IFN1Z2FyRWxlbWVudCB9IGZyb20gJy4uL25vZGUvU3VnYXJFbGVtZW50JztcblxuaW1wb3J0ICogYXMgQXR0cmlidXRlIGZyb20gJy4vQXR0cmlidXRlJztcbmltcG9ydCB7IFRvZ2dsZXIgfSBmcm9tICcuL1RvZ2dsZXInO1xuXG4vKlxuICogQ2xhc3NMaXN0IGlzIElFMTAgbWluaW11bTpcbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9FbGVtZW50LmNsYXNzTGlzdFxuICpcbiAqIE5vdGUgdGhhdCBJRSBkb2Vzbid0IHN1cHBvcnQgdGhlIHNlY29uZCBhcmd1bWVudCB0byB0b2dnbGUgKGF0IGFsbCkuXG4gKiBJZiBpdCBkaWQsIHRoZSB0b2dnbGVyIGNvdWxkIGJlIGJldHRlci5cbiAqL1xuXG5jb25zdCBhZGQgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PEVsZW1lbnQ+LCBjbGF6ejogc3RyaW5nKTogdm9pZCA9PiB7XG4gIGlmIChDbGFzc0xpc3Quc3VwcG9ydHMoZWxlbWVudCkpIHtcbiAgICBlbGVtZW50LmRvbS5jbGFzc0xpc3QuYWRkKGNsYXp6KTtcbiAgfSBlbHNlIHtcbiAgICBDbGFzc0xpc3QuYWRkKGVsZW1lbnQsIGNsYXp6KTtcbiAgfVxufTtcblxuY29uc3QgY2xlYW5DbGFzcyA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8RWxlbWVudD4pOiB2b2lkID0+IHtcbiAgY29uc3QgY2xhc3NMaXN0ID0gQ2xhc3NMaXN0LnN1cHBvcnRzKGVsZW1lbnQpID8gZWxlbWVudC5kb20uY2xhc3NMaXN0IDogQ2xhc3NMaXN0LmdldChlbGVtZW50KTtcbiAgLy8gY2xhc3NMaXN0IGlzIGEgXCJsaXZlIGxpc3RcIiwgc28gdGhpcyBpcyB1cCB0byBkYXRlIGFscmVhZHlcbiAgaWYgKGNsYXNzTGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAvLyBObyBtb3JlIGNsYXNzZXMgbGVmdCwgcmVtb3ZlIHRoZSBjbGFzcyBhdHRyaWJ1dGUgYXMgd2VsbFxuICAgIEF0dHJpYnV0ZS5yZW1vdmUoZWxlbWVudCwgJ2NsYXNzJyk7XG4gIH1cbn07XG5cbmNvbnN0IHJlbW92ZSA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8RWxlbWVudD4sIGNsYXp6OiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgaWYgKENsYXNzTGlzdC5zdXBwb3J0cyhlbGVtZW50KSkge1xuICAgIGNvbnN0IGNsYXNzTGlzdCA9IGVsZW1lbnQuZG9tLmNsYXNzTGlzdDtcbiAgICBjbGFzc0xpc3QucmVtb3ZlKGNsYXp6KTtcbiAgfSBlbHNlIHtcbiAgICBDbGFzc0xpc3QucmVtb3ZlKGVsZW1lbnQsIGNsYXp6KTtcbiAgfVxuXG4gIGNsZWFuQ2xhc3MoZWxlbWVudCk7XG59O1xuXG5jb25zdCB0b2dnbGUgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PEVsZW1lbnQ+LCBjbGF6ejogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IENsYXNzTGlzdC5zdXBwb3J0cyhlbGVtZW50KSA/IGVsZW1lbnQuZG9tLmNsYXNzTGlzdC50b2dnbGUoY2xhenopIDogQ2xhc3NMaXN0LnRvZ2dsZShlbGVtZW50LCBjbGF6eik7XG4gIGNsZWFuQ2xhc3MoZWxlbWVudCk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCB0b2dnbGVyID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxFbGVtZW50PiwgY2xheno6IHN0cmluZyk6IFRvZ2dsZXIgPT4ge1xuICBjb25zdCBoYXNDbGFzc2xpc3QgPSBDbGFzc0xpc3Quc3VwcG9ydHMoZWxlbWVudCk7XG4gIGNvbnN0IGNsYXNzTGlzdCA9IGVsZW1lbnQuZG9tLmNsYXNzTGlzdDtcbiAgY29uc3Qgb2ZmID0gKCkgPT4ge1xuICAgIGlmIChoYXNDbGFzc2xpc3QpIHtcbiAgICAgIGNsYXNzTGlzdC5yZW1vdmUoY2xhenopO1xuICAgIH0gZWxzZSB7XG4gICAgICBDbGFzc0xpc3QucmVtb3ZlKGVsZW1lbnQsIGNsYXp6KTtcbiAgICB9XG4gICAgY2xlYW5DbGFzcyhlbGVtZW50KTtcbiAgfTtcbiAgY29uc3Qgb24gPSAoKSA9PiB7XG4gICAgaWYgKGhhc0NsYXNzbGlzdCkge1xuICAgICAgY2xhc3NMaXN0LmFkZChjbGF6eik7XG4gICAgfSBlbHNlIHtcbiAgICAgIENsYXNzTGlzdC5hZGQoZWxlbWVudCwgY2xhenopO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIFRvZ2dsZXIob2ZmLCBvbiwgaGFzKGVsZW1lbnQsIGNsYXp6KSk7XG59O1xuXG5jb25zdCBoYXMgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+LCBjbGF6ejogc3RyaW5nKTogYm9vbGVhbiA9PlxuICBDbGFzc0xpc3Quc3VwcG9ydHMoZWxlbWVudCkgJiYgZWxlbWVudC5kb20uY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXp6KTtcblxuZXhwb3J0IHtcbiAgYWRkLFxuICByZW1vdmUsXG4gIHRvZ2dsZSxcbiAgdG9nZ2xlcixcbiAgaGFzXG59O1xuIiwiZXhwb3J0IGludGVyZmFjZSBUb2dnbGVyIHtcbiAgcmVhZG9ubHkgb246ICgpID0+IHZvaWQ7XG4gIHJlYWRvbmx5IG9mZjogKCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgdG9nZ2xlOiAoKSA9PiB2b2lkO1xuICByZWFkb25seSBpc09uOiAoKSA9PiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgVG9nZ2xlciA9ICh0dXJuT2ZmOiAoKSA9PiB2b2lkLCB0dXJuT246ICgpID0+IHZvaWQsIGluaXRpYWw6IGJvb2xlYW4pOiBUb2dnbGVyID0+IHtcbiAgbGV0IGFjdGl2ZSA9IGluaXRpYWwgfHwgZmFsc2U7XG5cbiAgY29uc3Qgb24gPSAoKSA9PiB7XG4gICAgdHVybk9uKCk7XG4gICAgYWN0aXZlID0gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBvZmYgPSAoKSA9PiB7XG4gICAgdHVybk9mZigpO1xuICAgIGFjdGl2ZSA9IGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZSA9ICgpID0+IHtcbiAgICBjb25zdCBmID0gYWN0aXZlID8gb2ZmIDogb247XG4gICAgZigpO1xuICB9O1xuXG4gIGNvbnN0IGlzT24gPSAoKSA9PiBhY3RpdmU7XG5cbiAgcmV0dXJuIHtcbiAgICBvbixcbiAgICBvZmYsXG4gICAgdG9nZ2xlLFxuICAgIGlzT25cbiAgfTtcbn07XG4iLCJpbXBvcnQgdHlwZSB7IFN1Z2FyRWxlbWVudCB9IGZyb20gJy4uL25vZGUvU3VnYXJFbGVtZW50JztcblxuaW1wb3J0ICogYXMgUHJlZGljYXRlRmluZCBmcm9tICcuL1ByZWRpY2F0ZUZpbmQnO1xuXG5jb25zdCBhbnkgPSAocHJlZGljYXRlOiAoZTogU3VnYXJFbGVtZW50PE5vZGU+KSA9PiBib29sZWFuKTogYm9vbGVhbiA9PlxuICBQcmVkaWNhdGVGaW5kLmZpcnN0KHByZWRpY2F0ZSkuaXNTb21lKCk7XG5cbmNvbnN0IGFuY2VzdG9yID0gKHNjb3BlOiBTdWdhckVsZW1lbnQ8Tm9kZT4sIHByZWRpY2F0ZTogKGU6IFN1Z2FyRWxlbWVudDxOb2RlPikgPT4gYm9vbGVhbiwgaXNSb290PzogKGU6IFN1Z2FyRWxlbWVudDxOb2RlPikgPT4gYm9vbGVhbik6IGJvb2xlYW4gPT5cbiAgUHJlZGljYXRlRmluZC5hbmNlc3RvcihzY29wZSwgcHJlZGljYXRlLCBpc1Jvb3QpLmlzU29tZSgpO1xuXG5jb25zdCBjbG9zZXN0ID0gKHNjb3BlOiBTdWdhckVsZW1lbnQ8Tm9kZT4sIHByZWRpY2F0ZTogKGU6IFN1Z2FyRWxlbWVudDxOb2RlPikgPT4gYm9vbGVhbiwgaXNSb290PzogKGU6IFN1Z2FyRWxlbWVudDxOb2RlPikgPT4gYm9vbGVhbik6IGJvb2xlYW4gPT5cbiAgUHJlZGljYXRlRmluZC5jbG9zZXN0KHNjb3BlLCBwcmVkaWNhdGUsIGlzUm9vdCkuaXNTb21lKCk7XG5cbmNvbnN0IHNpYmxpbmcgPSAoc2NvcGU6IFN1Z2FyRWxlbWVudDxOb2RlPiwgcHJlZGljYXRlOiAoZTogU3VnYXJFbGVtZW50PE5vZGU+KSA9PiBib29sZWFuKTogYm9vbGVhbiA9PlxuICBQcmVkaWNhdGVGaW5kLnNpYmxpbmcoc2NvcGUsIHByZWRpY2F0ZSkuaXNTb21lKCk7XG5cbmNvbnN0IGNoaWxkID0gKHNjb3BlOiBTdWdhckVsZW1lbnQ8Tm9kZT4sIHByZWRpY2F0ZTogKGU6IFN1Z2FyRWxlbWVudDxOb2RlPikgPT4gYm9vbGVhbik6IGJvb2xlYW4gPT5cbiAgUHJlZGljYXRlRmluZC5jaGlsZChzY29wZSwgcHJlZGljYXRlKS5pc1NvbWUoKTtcblxuY29uc3QgZGVzY2VuZGFudCA9IChzY29wZTogU3VnYXJFbGVtZW50PE5vZGU+LCBwcmVkaWNhdGU6IChlOiBTdWdhckVsZW1lbnQ8Tm9kZT4pID0+IGJvb2xlYW4pOiBib29sZWFuID0+XG4gIFByZWRpY2F0ZUZpbmQuZGVzY2VuZGFudChzY29wZSwgcHJlZGljYXRlKS5pc1NvbWUoKTtcblxuZXhwb3J0IHtcbiAgYW55LFxuICBhbmNlc3RvcixcbiAgY2xvc2VzdCxcbiAgc2libGluZyxcbiAgY2hpbGQsXG4gIGRlc2NlbmRhbnRcbn07XG4iLCJpbXBvcnQgeyBBcnIsIEZ1biwgT3B0aW9uYWwsIFR5cGUgfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5pbXBvcnQgQ2xvc2VzdE9yQW5jZXN0b3IgZnJvbSAnLi4vLi4vaW1wbC9DbG9zZXN0T3JBbmNlc3Rvcic7XG5pbXBvcnQgKiBhcyBDb21wYXJlIGZyb20gJy4uL2RvbS9Db21wYXJlJztcbmltcG9ydCAqIGFzIFN1Z2FyQm9keSBmcm9tICcuLi9ub2RlL1N1Z2FyQm9keSc7XG5pbXBvcnQgeyBTdWdhckVsZW1lbnQgfSBmcm9tICcuLi9ub2RlL1N1Z2FyRWxlbWVudCc7XG5cbmNvbnN0IGZpcnN0OiB7XG4gIDxUIGV4dGVuZHMgTm9kZSA9IE5vZGU+IChwcmVkaWNhdGU6IChlOiBTdWdhckVsZW1lbnQ8Tm9kZT4pID0+IGUgaXMgU3VnYXJFbGVtZW50PFQ+KTogT3B0aW9uYWw8U3VnYXJFbGVtZW50PFQgJiBDaGlsZE5vZGU+PjtcbiAgKHByZWRpY2F0ZTogKGU6IFN1Z2FyRWxlbWVudDxOb2RlPikgPT4gYm9vbGVhbik6IE9wdGlvbmFsPFN1Z2FyRWxlbWVudDxOb2RlICYgQ2hpbGROb2RlPj47XG59ID0gKHByZWRpY2F0ZTogKGU6IFN1Z2FyRWxlbWVudDxOb2RlPikgPT4gYm9vbGVhbikgPT5cbiAgZGVzY2VuZGFudChTdWdhckJvZHkuYm9keSgpLCBwcmVkaWNhdGUpO1xuXG5jb25zdCBhbmNlc3Rvcjoge1xuICA8VCBleHRlbmRzIE5vZGUgPSBOb2RlPiAoc2NvcGU6IFN1Z2FyRWxlbWVudDxOb2RlPiwgcHJlZGljYXRlOiAoZTogU3VnYXJFbGVtZW50PE5vZGU+KSA9PiBlIGlzIFN1Z2FyRWxlbWVudDxUPiwgaXNSb290PzogKGU6IFN1Z2FyRWxlbWVudDxOb2RlPikgPT4gYm9vbGVhbik6IE9wdGlvbmFsPFN1Z2FyRWxlbWVudDxUPj47XG4gIChzY29wZTogU3VnYXJFbGVtZW50PE5vZGU+LCBwcmVkaWNhdGU6IChlOiBTdWdhckVsZW1lbnQ8Tm9kZT4pID0+IGJvb2xlYW4sIGlzUm9vdD86IChlOiBTdWdhckVsZW1lbnQ8Tm9kZT4pID0+IGJvb2xlYW4pOiBPcHRpb25hbDxTdWdhckVsZW1lbnQ8Tm9kZT4+O1xufSA9IChzY29wZTogU3VnYXJFbGVtZW50PE5vZGU+LCBwcmVkaWNhdGU6IChlOiBTdWdhckVsZW1lbnQ8Tm9kZT4pID0+IGJvb2xlYW4sIGlzUm9vdD86IChlOiBTdWdhckVsZW1lbnQ8Tm9kZT4pID0+IGJvb2xlYW4pID0+IHtcbiAgbGV0IGVsZW1lbnQgPSBzY29wZS5kb207XG4gIGNvbnN0IHN0b3AgPSBUeXBlLmlzRnVuY3Rpb24oaXNSb290KSA/IGlzUm9vdCA6IEZ1bi5uZXZlcjtcblxuICB3aGlsZSAoZWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICBjb25zdCBlbCA9IFN1Z2FyRWxlbWVudC5mcm9tRG9tKGVsZW1lbnQpO1xuXG4gICAgaWYgKHByZWRpY2F0ZShlbCkpIHtcbiAgICAgIHJldHVybiBPcHRpb25hbC5zb21lKGVsKTtcbiAgICB9IGVsc2UgaWYgKHN0b3AoZWwpKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIE9wdGlvbmFsLm5vbmU8U3VnYXJFbGVtZW50PE5vZGU+PigpO1xufTtcblxuY29uc3QgY2xvc2VzdDoge1xuICA8VCBleHRlbmRzIE5vZGUgPSBOb2RlPiAoc2NvcGU6IFN1Z2FyRWxlbWVudDxOb2RlPiwgcHJlZGljYXRlOiAoZTogU3VnYXJFbGVtZW50PE5vZGU+KSA9PiBlIGlzIFN1Z2FyRWxlbWVudDxUPiwgaXNSb290PzogKGU6IFN1Z2FyRWxlbWVudDxOb2RlPikgPT4gYm9vbGVhbik6IE9wdGlvbmFsPFN1Z2FyRWxlbWVudDxUPj47XG4gIChzY29wZTogU3VnYXJFbGVtZW50PE5vZGU+LCBwcmVkaWNhdGU6IChlOiBTdWdhckVsZW1lbnQ8Tm9kZT4pID0+IGJvb2xlYW4sIGlzUm9vdD86IChlOiBTdWdhckVsZW1lbnQ8Tm9kZT4pID0+IGJvb2xlYW4pOiBPcHRpb25hbDxTdWdhckVsZW1lbnQ8Tm9kZT4+O1xufSA9IChzY29wZTogU3VnYXJFbGVtZW50PE5vZGU+LCBwcmVkaWNhdGU6IChlOiBTdWdhckVsZW1lbnQ8Tm9kZT4pID0+IGJvb2xlYW4sIGlzUm9vdD86IChlOiBTdWdhckVsZW1lbnQ8Tm9kZT4pID0+IGJvb2xlYW4pID0+IHtcbiAgLy8gVGhpcyBpcyByZXF1aXJlZCB0byBhdm9pZCBDbG9zZXN0T3JBbmNlc3RvciBwYXNzaW5nIHRoZSBwcmVkaWNhdGUgdG8gaXRzZWxmXG4gIGNvbnN0IGlzID0gKHM6IFN1Z2FyRWxlbWVudDxOb2RlPiwgdGVzdDogKGU6IFN1Z2FyRWxlbWVudDxOb2RlPikgPT4gYm9vbGVhbik6IHMgaXMgU3VnYXJFbGVtZW50PE5vZGU+ID0+IHRlc3Qocyk7XG4gIHJldHVybiBDbG9zZXN0T3JBbmNlc3RvcihpcywgYW5jZXN0b3IsIHNjb3BlLCBwcmVkaWNhdGUsIGlzUm9vdCk7XG59O1xuXG5jb25zdCBzaWJsaW5nOiB7XG4gIDxUIGV4dGVuZHMgTm9kZSA9IE5vZGU+IChzY29wZTogU3VnYXJFbGVtZW50PE5vZGU+LCBwcmVkaWNhdGU6IChlOiBTdWdhckVsZW1lbnQ8Tm9kZT4pID0+IGUgaXMgU3VnYXJFbGVtZW50PFQ+KTogT3B0aW9uYWw8U3VnYXJFbGVtZW50PFQgJiBDaGlsZE5vZGU+PjtcbiAgKHNjb3BlOiBTdWdhckVsZW1lbnQ8Tm9kZT4sIHByZWRpY2F0ZTogKGU6IFN1Z2FyRWxlbWVudDxOb2RlPikgPT4gYm9vbGVhbik6IE9wdGlvbmFsPFN1Z2FyRWxlbWVudDxOb2RlICYgQ2hpbGROb2RlPj47XG59ID0gKHNjb3BlOiBTdWdhckVsZW1lbnQ8Tm9kZT4sIHByZWRpY2F0ZTogKGU6IFN1Z2FyRWxlbWVudDxOb2RlPikgPT4gYm9vbGVhbik6IE9wdGlvbmFsPFN1Z2FyRWxlbWVudDxOb2RlICYgQ2hpbGROb2RlPj4gPT4ge1xuICBjb25zdCBlbGVtZW50ID0gc2NvcGUuZG9tO1xuICBpZiAoIWVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgIHJldHVybiBPcHRpb25hbC5ub25lPFN1Z2FyRWxlbWVudDxOb2RlICYgQ2hpbGROb2RlPj4oKTtcbiAgfVxuXG4gIHJldHVybiBjaGlsZChTdWdhckVsZW1lbnQuZnJvbURvbShlbGVtZW50LnBhcmVudE5vZGUpLCAoeCkgPT4gIUNvbXBhcmUuZXEoc2NvcGUsIHgpICYmIHByZWRpY2F0ZSh4KSk7XG59O1xuXG5jb25zdCBjaGlsZDoge1xuICA8VCBleHRlbmRzIE5vZGUgPSBOb2RlPiAoc2NvcGU6IFN1Z2FyRWxlbWVudDxOb2RlPiwgcHJlZGljYXRlOiAoZTogU3VnYXJFbGVtZW50PE5vZGU+KSA9PiBlIGlzIFN1Z2FyRWxlbWVudDxUPik6IE9wdGlvbmFsPFN1Z2FyRWxlbWVudDxUICYgQ2hpbGROb2RlPj47XG4gIChzY29wZTogU3VnYXJFbGVtZW50PE5vZGU+LCBwcmVkaWNhdGU6IChlOiBTdWdhckVsZW1lbnQ8Tm9kZT4pID0+IGJvb2xlYW4pOiBPcHRpb25hbDxTdWdhckVsZW1lbnQ8Tm9kZSAmIENoaWxkTm9kZT4+O1xufSA9IChzY29wZTogU3VnYXJFbGVtZW50PE5vZGU+LCBwcmVkaWNhdGU6IChlOiBTdWdhckVsZW1lbnQ8Tm9kZT4pID0+IGJvb2xlYW4pID0+IHtcbiAgY29uc3QgcHJlZCA9IChub2RlOiBOb2RlKSA9PiBwcmVkaWNhdGUoU3VnYXJFbGVtZW50LmZyb21Eb20obm9kZSkpO1xuICBjb25zdCByZXN1bHQgPSBBcnIuZmluZChzY29wZS5kb20uY2hpbGROb2RlcywgcHJlZCk7XG4gIHJldHVybiByZXN1bHQubWFwKFN1Z2FyRWxlbWVudC5mcm9tRG9tKTtcbn07XG5cbmNvbnN0IGRlc2NlbmRhbnQ6IHtcbiAgPFQgZXh0ZW5kcyBOb2RlID0gTm9kZT4gKHNjb3BlOiBTdWdhckVsZW1lbnQ8Tm9kZT4sIHByZWRpY2F0ZTogKGU6IFN1Z2FyRWxlbWVudDxOb2RlPikgPT4gZSBpcyBTdWdhckVsZW1lbnQ8VD4pOiBPcHRpb25hbDxTdWdhckVsZW1lbnQ8VCAmIENoaWxkTm9kZT4+O1xuICAoc2NvcGU6IFN1Z2FyRWxlbWVudDxOb2RlPiwgcHJlZGljYXRlOiAoZTogU3VnYXJFbGVtZW50PE5vZGU+KSA9PiBib29sZWFuKTogT3B0aW9uYWw8U3VnYXJFbGVtZW50PE5vZGUgJiBDaGlsZE5vZGU+Pjtcbn0gPSAoc2NvcGU6IFN1Z2FyRWxlbWVudDxOb2RlPiwgcHJlZGljYXRlOiAoZTogU3VnYXJFbGVtZW50PE5vZGU+KSA9PiBib29sZWFuKSA9PiB7XG4gIGNvbnN0IGRlc2NlbmQgPSAobm9kZTogTm9kZSk6IE9wdGlvbmFsPFN1Z2FyRWxlbWVudDxOb2RlICYgQ2hpbGROb2RlPj4gPT4ge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpwcmVmZXItZm9yLW9mXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2RlLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNoaWxkID0gU3VnYXJFbGVtZW50LmZyb21Eb20obm9kZS5jaGlsZE5vZGVzW2ldKTtcbiAgICAgIGlmIChwcmVkaWNhdGUoY2hpbGQpKSB7XG4gICAgICAgIHJldHVybiBPcHRpb25hbC5zb21lKGNoaWxkKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVzID0gZGVzY2VuZChub2RlLmNoaWxkTm9kZXNbaV0pO1xuICAgICAgaWYgKHJlcy5pc1NvbWUoKSkge1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBPcHRpb25hbC5ub25lPFN1Z2FyRWxlbWVudDxOb2RlICYgQ2hpbGROb2RlPj4oKTtcbiAgfTtcblxuICByZXR1cm4gZGVzY2VuZChzY29wZS5kb20pO1xufTtcblxuZXhwb3J0IHsgZmlyc3QsIGFuY2VzdG9yLCBjbG9zZXN0LCBzaWJsaW5nLCBjaGlsZCwgZGVzY2VuZGFudCB9O1xuIiwiaW1wb3J0IHR5cGUgeyBPcHRpb25hbCB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmltcG9ydCBDbG9zZXN0T3JBbmNlc3RvciBmcm9tICcuLi8uLi9pbXBsL0Nsb3Nlc3RPckFuY2VzdG9yJztcbmltcG9ydCB0eXBlIHsgU3VnYXJFbGVtZW50IH0gZnJvbSAnLi4vbm9kZS9TdWdhckVsZW1lbnQnO1xuXG5pbXBvcnQgKiBhcyBQcmVkaWNhdGVGaW5kIGZyb20gJy4vUHJlZGljYXRlRmluZCc7XG5pbXBvcnQgKiBhcyBTZWxlY3RvcnMgZnJvbSAnLi9TZWxlY3RvcnMnO1xuXG4vLyBUT0RPOiBBbiBpbnRlcm5hbCBTZWxlY3RvckZpbHRlciBtb2R1bGUgdGhhdCBkb2Vzbid0IFN1Z2FyRWxlbWVudC5mcm9tRG9tKCkgZXZlcnl0aGluZ1xuXG5jb25zdCBmaXJzdCA9IDxUIGV4dGVuZHMgRWxlbWVudCA9IEVsZW1lbnQ+IChzZWxlY3Rvcjogc3RyaW5nKTogT3B0aW9uYWw8U3VnYXJFbGVtZW50PFQ+PiA9PlxuICBTZWxlY3RvcnMub25lPFQ+KHNlbGVjdG9yKTtcblxuY29uc3QgYW5jZXN0b3IgPSA8VCBleHRlbmRzIEVsZW1lbnQgPSBFbGVtZW50PiAoc2NvcGU6IFN1Z2FyRWxlbWVudDxOb2RlPiwgc2VsZWN0b3I6IHN0cmluZywgaXNSb290PzogKGU6IFN1Z2FyRWxlbWVudDxOb2RlPikgPT4gYm9vbGVhbik6IE9wdGlvbmFsPFN1Z2FyRWxlbWVudDxUPj4gPT5cbiAgUHJlZGljYXRlRmluZC5hbmNlc3RvcihzY29wZSwgKGUpOiBlIGlzIFN1Z2FyRWxlbWVudDxUPiA9PiBTZWxlY3RvcnMuaXM8VD4oZSwgc2VsZWN0b3IpLCBpc1Jvb3QpO1xuXG5jb25zdCBzaWJsaW5nID0gPFQgZXh0ZW5kcyBFbGVtZW50ID0gRWxlbWVudD4gKHNjb3BlOiBTdWdhckVsZW1lbnQ8Tm9kZT4sIHNlbGVjdG9yOiBzdHJpbmcpOiBPcHRpb25hbDxTdWdhckVsZW1lbnQ8VD4+ID0+XG4gIFByZWRpY2F0ZUZpbmQuc2libGluZyhzY29wZSwgKGUpOiBlIGlzIFN1Z2FyRWxlbWVudDxUPiA9PiBTZWxlY3RvcnMuaXM8VD4oZSwgc2VsZWN0b3IpKTtcblxuY29uc3QgY2hpbGQgPSA8VCBleHRlbmRzIEVsZW1lbnQgPSBFbGVtZW50PiAoc2NvcGU6IFN1Z2FyRWxlbWVudDxOb2RlPiwgc2VsZWN0b3I6IHN0cmluZyk6IE9wdGlvbmFsPFN1Z2FyRWxlbWVudDxUPj4gPT5cbiAgUHJlZGljYXRlRmluZC5jaGlsZChzY29wZSwgKGUpOiBlIGlzIFN1Z2FyRWxlbWVudDxUPiA9PiBTZWxlY3RvcnMuaXM8VD4oZSwgc2VsZWN0b3IpKTtcblxuY29uc3QgZGVzY2VuZGFudCA9IDxUIGV4dGVuZHMgRWxlbWVudCA9IEVsZW1lbnQ+IChzY29wZTogU3VnYXJFbGVtZW50PE5vZGU+LCBzZWxlY3Rvcjogc3RyaW5nKTogT3B0aW9uYWw8U3VnYXJFbGVtZW50PFQ+PiA9PlxuICBTZWxlY3RvcnMub25lPFQ+KHNlbGVjdG9yLCBzY29wZSk7XG5cbi8vIFJldHVybnMgU29tZShjbG9zZXN0IGFuY2VzdG9yIGVsZW1lbnQgKHN1Z2FyZWQpKSBtYXRjaGluZyAnc2VsZWN0b3InIHVwIHRvIGlzUm9vdCwgb3IgTm9uZSgpIG90aGVyd2lzZVxuY29uc3QgY2xvc2VzdCA9IDxUIGV4dGVuZHMgRWxlbWVudCA9IEVsZW1lbnQ+IChzY29wZTogU3VnYXJFbGVtZW50PE5vZGU+LCBzZWxlY3Rvcjogc3RyaW5nLCBpc1Jvb3Q/OiAoZTogU3VnYXJFbGVtZW50PE5vZGU+KSA9PiBib29sZWFuKTogT3B0aW9uYWw8U3VnYXJFbGVtZW50PFQ+PiA9PiB7XG4gIGNvbnN0IGlzID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPiwgc2VsZWN0b3I6IHN0cmluZyk6IGVsZW1lbnQgaXMgU3VnYXJFbGVtZW50PFQ+ID0+IFNlbGVjdG9ycy5pczxUPihlbGVtZW50LCBzZWxlY3Rvcik7XG4gIHJldHVybiBDbG9zZXN0T3JBbmNlc3RvcjxzdHJpbmcsIFQ+KGlzLCBhbmNlc3Rvciwgc2NvcGUsIHNlbGVjdG9yLCBpc1Jvb3QpO1xufTtcblxuZXhwb3J0IHtcbiAgZmlyc3QsXG4gIGFuY2VzdG9yLFxuICBzaWJsaW5nLFxuICBjaGlsZCxcbiAgZGVzY2VuZGFudCxcbiAgY2xvc2VzdFxufTtcbiIsImltcG9ydCB7IEFyciwgT3B0aW9uYWwgfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5pbXBvcnQgeyBET0NVTUVOVCwgRE9DVU1FTlRfRlJBR01FTlQsIEVMRU1FTlQgfSBmcm9tICcuLi9ub2RlL05vZGVUeXBlcyc7XG5pbXBvcnQgeyBTdWdhckVsZW1lbnQgfSBmcm9tICcuLi9ub2RlL1N1Z2FyRWxlbWVudCc7XG5cbmludGVyZmFjZSBWZW5kb3JFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIG1zTWF0Y2hlc1NlbGVjdG9yPzogKHNlbGVjdG9yOiBzdHJpbmcpID0+IGJvb2xlYW47XG4gIG1vek1hdGNoZXNTZWxlY3Rvcj86IChzZWxlY3Rvcjogc3RyaW5nKSA9PiBib29sZWFuO1xufVxuXG5jb25zdCBpcyA9IDxUIGV4dGVuZHMgRWxlbWVudCA9IEVsZW1lbnQ+IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4sIHNlbGVjdG9yOiBzdHJpbmcpOiBlbGVtZW50IGlzIFN1Z2FyRWxlbWVudDxUPiA9PiB7XG4gIGNvbnN0IGRvbSA9IGVsZW1lbnQuZG9tO1xuICBpZiAoZG9tLm5vZGVUeXBlICE9PSBFTEVNRU5UKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGVsZW0gPSBkb20gYXMgVmVuZG9yRWxlbWVudDtcbiAgICBpZiAoZWxlbS5tYXRjaGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBlbGVtLm1hdGNoZXMoc2VsZWN0b3IpO1xuICAgIH0gZWxzZSBpZiAoZWxlbS5tc01hdGNoZXNTZWxlY3RvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZWxlbS5tc01hdGNoZXNTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgfSBlbHNlIGlmIChlbGVtLndlYmtpdE1hdGNoZXNTZWxlY3RvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZWxlbS53ZWJraXRNYXRjaGVzU2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIH0gZWxzZSBpZiAoZWxlbS5tb3pNYXRjaGVzU2VsZWN0b3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gY2FzdCB0byBhbnkgYXMgbW96TWF0Y2hlc1NlbGVjdG9yIGRvZXNuJ3QgZXhpc3QgaW4gVFMgRE9NIGxpYlxuICAgICAgcmV0dXJuIGVsZW0ubW96TWF0Y2hlc1NlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdCcm93c2VyIGxhY2tzIG5hdGl2ZSBzZWxlY3RvcnMnKTtcbiAgICB9IC8vIHVuZm9ydHVuYXRlbHkgd2UgY2FuJ3QgdGhyb3cgdGhpcyBvbiBzdGFydHVwIDooXG4gIH1cbn07XG5cbmNvbnN0IGJ5cGFzc1NlbGVjdG9yID0gKGRvbTogTm9kZSkgPT5cbiAgLy8gT25seSBlbGVtZW50cywgZG9jdW1lbnRzIGFuZCBzaGFkb3cgcm9vdHMgc3VwcG9ydCBxdWVyeVNlbGVjdG9yXG4gIC8vIHNoYWRvdyByb290IGVsZW1lbnQgdHlwZSBpcyBET0NVTUVOVF9GUkFHTUVOVFxuICBkb20ubm9kZVR5cGUgIT09IEVMRU1FTlQgJiYgZG9tLm5vZGVUeXBlICE9PSBET0NVTUVOVCAmJiBkb20ubm9kZVR5cGUgIT09IERPQ1VNRU5UX0ZSQUdNRU5UIHx8XG4gICAgLy8gSUUgZml4IGZvciBjb21wbGV4IHF1ZXJpZXMgb24gZW1wdHkgbm9kZXM6IGh0dHA6Ly9qc2ZpZGRsZS5uZXQvc3B5ZGVyL2Z2OXB0cjVML1xuICAgIChkb20gYXMgRWxlbWVudCB8IERvY3VtZW50IHwgRG9jdW1lbnRGcmFnbWVudCkuY2hpbGRFbGVtZW50Q291bnQgPT09IDA7XG5cbmNvbnN0IGFsbCA9IDxUIGV4dGVuZHMgRWxlbWVudCA9IEVsZW1lbnQ+IChzZWxlY3Rvcjogc3RyaW5nLCBzY29wZT86IFN1Z2FyRWxlbWVudDxOb2RlPik6IFN1Z2FyRWxlbWVudDxUPltdID0+IHtcbiAgY29uc3QgYmFzZSA9IHNjb3BlID09PSB1bmRlZmluZWQgPyBkb2N1bWVudCA6IHNjb3BlLmRvbTtcbiAgcmV0dXJuIGJ5cGFzc1NlbGVjdG9yKGJhc2UpID8gW10gOiBBcnIubWFwKChiYXNlIGFzIEVsZW1lbnQgfCBEb2N1bWVudCkucXVlcnlTZWxlY3RvckFsbDxUPihzZWxlY3RvciksIFN1Z2FyRWxlbWVudC5mcm9tRG9tKTtcbn07XG5cbmNvbnN0IG9uZSA9IDxUIGV4dGVuZHMgRWxlbWVudCA9IEVsZW1lbnQ+IChzZWxlY3Rvcjogc3RyaW5nLCBzY29wZT86IFN1Z2FyRWxlbWVudDxOb2RlPik6IE9wdGlvbmFsPFN1Z2FyRWxlbWVudDxUPj4gPT4ge1xuICBjb25zdCBiYXNlID0gc2NvcGUgPT09IHVuZGVmaW5lZCA/IGRvY3VtZW50IDogc2NvcGUuZG9tO1xuICByZXR1cm4gYnlwYXNzU2VsZWN0b3IoYmFzZSkgPyBPcHRpb25hbC5ub25lPFN1Z2FyRWxlbWVudDxUPj4oKSA6IE9wdGlvbmFsLmZyb20oKGJhc2UgYXMgRWxlbWVudCB8IERvY3VtZW50KS5xdWVyeVNlbGVjdG9yPFQ+KHNlbGVjdG9yKSkubWFwKFN1Z2FyRWxlbWVudC5mcm9tRG9tKTtcbn07XG5cbmV4cG9ydCB7XG4gIGFsbCxcbiAgaXMsXG4gIG9uZVxufTtcbiIsImltcG9ydCB7IEFyciwgRnVuLCBPcHRpb25hbCwgVHlwZSB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmltcG9ydCAqIGFzIFJlY3Vyc2UgZnJvbSAnLi4vLi4vYWxpZW4vUmVjdXJzZSc7XG5pbXBvcnQgKiBhcyBDb21wYXJlIGZyb20gJy4uL2RvbS9Db21wYXJlJztcbmltcG9ydCB7IFN1Z2FyRWxlbWVudCB9IGZyb20gJy4uL25vZGUvU3VnYXJFbGVtZW50JztcbmltcG9ydCAqIGFzIFN1Z2FyTm9kZSBmcm9tICcuLi9ub2RlL1N1Z2FyTm9kZSc7XG5cbi8qKlxuICogVGhlIGRvY3VtZW50IGFzc29jaWF0ZWQgd2l0aCB0aGUgY3VycmVudCBlbGVtZW50XG4gKiBOT1RFOiB0aGlzIHdpbGwgdGhyb3cgaWYgdGhlIG93bmVyIGlzIG51bGwuXG4gKi9cbmNvbnN0IG93bmVyID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPik6IFN1Z2FyRWxlbWVudDxEb2N1bWVudD4gPT5cbiAgU3VnYXJFbGVtZW50LmZyb21Eb20oZWxlbWVudC5kb20ub3duZXJEb2N1bWVudCBhcyBEb2N1bWVudCk7XG5cbi8qKlxuICogSWYgdGhlIGVsZW1lbnQgaXMgYSBkb2N1bWVudCwgcmV0dXJuIGl0LiBPdGhlcndpc2UsIHJldHVybiBpdHMgb3duZXJEb2N1bWVudC5cbiAqIEBwYXJhbSBkb3NcbiAqL1xuY29uc3QgZG9jdW1lbnRPck93bmVyID0gKGRvczogU3VnYXJFbGVtZW50PE5vZGU+KTogU3VnYXJFbGVtZW50PERvY3VtZW50PiA9PlxuICBTdWdhck5vZGUuaXNEb2N1bWVudChkb3MpID8gZG9zIDogb3duZXIoZG9zKTtcblxuY29uc3QgZG9jdW1lbnRFbGVtZW50ID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPik6IFN1Z2FyRWxlbWVudDxIVE1MRWxlbWVudD4gPT5cbiAgU3VnYXJFbGVtZW50LmZyb21Eb20oZG9jdW1lbnRPck93bmVyKGVsZW1lbnQpLmRvbS5kb2N1bWVudEVsZW1lbnQpO1xuXG4vKipcbiAqIFRoZSB3aW5kb3cgZWxlbWVudCBhc3NvY2lhdGVkIHdpdGggdGhlIGVsZW1lbnRcbiAqIE5PVEU6IHRoaXMgd2lsbCB0aHJvdyBpZiB0aGUgZGVmYXVsdFZpZXcgaXMgbnVsbC5cbiAqL1xuY29uc3QgZGVmYXVsdFZpZXcgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KTogU3VnYXJFbGVtZW50PFdpbmRvdz4gPT5cbiAgU3VnYXJFbGVtZW50LmZyb21Eb20oZG9jdW1lbnRPck93bmVyKGVsZW1lbnQpLmRvbS5kZWZhdWx0VmlldyBhcyBXaW5kb3cpO1xuXG5jb25zdCBwYXJlbnQgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KTogT3B0aW9uYWw8U3VnYXJFbGVtZW50PE5vZGUgJiBQYXJlbnROb2RlPj4gPT5cbiAgT3B0aW9uYWwuZnJvbShlbGVtZW50LmRvbS5wYXJlbnROb2RlKS5tYXAoU3VnYXJFbGVtZW50LmZyb21Eb20pO1xuXG4vLyBDYXN0IGRvd24gdG8ganVzdCBiZSBTdWdhckVsZW1lbnQ8Tm9kZT5cbmNvbnN0IHBhcmVudE5vZGUgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KTogT3B0aW9uYWw8U3VnYXJFbGVtZW50PE5vZGU+PiA9PlxuICBwYXJlbnQoZWxlbWVudCkgYXMgYW55O1xuXG5jb25zdCBwYXJlbnRFbGVtZW50ID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPik6IE9wdGlvbmFsPFN1Z2FyRWxlbWVudDxIVE1MRWxlbWVudD4+ID0+XG4gIE9wdGlvbmFsLmZyb20oZWxlbWVudC5kb20ucGFyZW50RWxlbWVudCkubWFwKFN1Z2FyRWxlbWVudC5mcm9tRG9tKTtcblxuY29uc3QgZmluZEluZGV4ID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPik6IE9wdGlvbmFsPG51bWJlcj4gPT5cbiAgcGFyZW50KGVsZW1lbnQpLmJpbmQoKHApID0+IHtcbiAgICAvLyBUT0RPOiBSZWZhY3RvciBvdXQgY2hpbGRyZW4gc28gd2UgY2FuIGF2b2lkIHRoZSBjb25zdGFudCB1bndyYXBwaW5nXG4gICAgY29uc3Qga2luID0gY2hpbGRyZW4ocCk7XG4gICAgcmV0dXJuIEFyci5maW5kSW5kZXgoa2luLCAoZWxlbSkgPT4gQ29tcGFyZS5lcShlbGVtZW50LCBlbGVtKSk7XG4gIH0pO1xuXG5jb25zdCBwYXJlbnRzID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPiwgaXNSb290PzogKGU6IFN1Z2FyRWxlbWVudDxOb2RlPikgPT4gYm9vbGVhbik6IFN1Z2FyRWxlbWVudDxOb2RlPltdID0+IHtcbiAgY29uc3Qgc3RvcCA9IFR5cGUuaXNGdW5jdGlvbihpc1Jvb3QpID8gaXNSb290IDogRnVuLm5ldmVyO1xuXG4gIC8vIFRoaXMgaXMgdXNlZCBhICpsb3QqIHNvIGl0IG5lZWRzIHRvIGJlIHBlcmZvcm1hbnQsIG5vdCByZWN1cnNpdmVcbiAgbGV0IGRvbTogTm9kZSA9IGVsZW1lbnQuZG9tO1xuICBjb25zdCByZXQ6IFN1Z2FyRWxlbWVudDxOb2RlPltdID0gW107XG5cbiAgd2hpbGUgKGRvbS5wYXJlbnROb2RlICE9PSBudWxsICYmIGRvbS5wYXJlbnROb2RlICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCByYXdQYXJlbnQgPSBkb20ucGFyZW50Tm9kZTtcbiAgICBjb25zdCBwID0gU3VnYXJFbGVtZW50LmZyb21Eb20ocmF3UGFyZW50KTtcbiAgICByZXQucHVzaChwKTtcblxuICAgIGlmIChzdG9wKHApID09PSB0cnVlKSB7XG4gICAgICBicmVhaztcbiAgICB9IGVsc2Uge1xuICAgICAgZG9tID0gcmF3UGFyZW50O1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmV0O1xufTtcblxuY29uc3Qgc2libGluZ3MgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KTogU3VnYXJFbGVtZW50PE5vZGU+W10gPT4ge1xuICAvLyBUT0RPOiBSZWZhY3RvciBvdXQgY2hpbGRyZW4gc28gd2UgY2FuIGp1c3Qgbm90IGFkZCBzZWxmIGluc3RlYWQgb2YgZmlsdGVyaW5nIGFmdGVyd2FyZHNcbiAgY29uc3QgZmlsdGVyU2VsZiA9IDxFPiAoZWxlbWVudHM6IFN1Z2FyRWxlbWVudDxFPltdKSA9PiBBcnIuZmlsdGVyKGVsZW1lbnRzLCAoeCkgPT4gIUNvbXBhcmUuZXEoZWxlbWVudCwgeCkpO1xuXG4gIHJldHVybiBwYXJlbnQoZWxlbWVudCkubWFwKGNoaWxkcmVuKS5tYXAoZmlsdGVyU2VsZikuZ2V0T3IoW10pO1xufTtcblxuY29uc3Qgb2Zmc2V0UGFyZW50ID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxIVE1MRWxlbWVudD4pOiBPcHRpb25hbDxTdWdhckVsZW1lbnQ8SFRNTEVsZW1lbnQ+PiA9PlxuICBPcHRpb25hbC5mcm9tKGVsZW1lbnQuZG9tLm9mZnNldFBhcmVudCBhcyBIVE1MRWxlbWVudCkubWFwKFN1Z2FyRWxlbWVudC5mcm9tRG9tKTtcblxuY29uc3QgcHJldlNpYmxpbmcgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KTogT3B0aW9uYWw8U3VnYXJFbGVtZW50PE5vZGUgJiBDaGlsZE5vZGU+PiA9PlxuICBPcHRpb25hbC5mcm9tKGVsZW1lbnQuZG9tLnByZXZpb3VzU2libGluZykubWFwKFN1Z2FyRWxlbWVudC5mcm9tRG9tKTtcblxuY29uc3QgbmV4dFNpYmxpbmcgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KTogT3B0aW9uYWw8U3VnYXJFbGVtZW50PE5vZGUgJiBDaGlsZE5vZGU+PiA9PlxuICBPcHRpb25hbC5mcm9tKGVsZW1lbnQuZG9tLm5leHRTaWJsaW5nKS5tYXAoU3VnYXJFbGVtZW50LmZyb21Eb20pO1xuXG4vLyBUaGlzIG9uZSBuZWVkcyB0byBiZSByZXZlcnNlZCwgc28gdGhleSdyZSBzdGlsbCBpbiBET00gb3JkZXJcbmNvbnN0IHByZXZTaWJsaW5ncyA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBTdWdhckVsZW1lbnQ8Tm9kZSAmIENoaWxkTm9kZT5bXSA9PlxuICBBcnIucmV2ZXJzZShSZWN1cnNlLnRvQXJyYXkoZWxlbWVudCwgcHJldlNpYmxpbmcpKTtcblxuY29uc3QgbmV4dFNpYmxpbmdzID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPik6IFN1Z2FyRWxlbWVudDxOb2RlICYgQ2hpbGROb2RlPltdID0+XG4gIFJlY3Vyc2UudG9BcnJheShlbGVtZW50LCBuZXh0U2libGluZyk7XG5cbmNvbnN0IGNoaWxkcmVuID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPik6IFN1Z2FyRWxlbWVudDxOb2RlICYgQ2hpbGROb2RlPltdID0+XG4gIEFyci5tYXAoZWxlbWVudC5kb20uY2hpbGROb2RlcywgU3VnYXJFbGVtZW50LmZyb21Eb20pO1xuXG5jb25zdCBjaGlsZCA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4sIGluZGV4OiBudW1iZXIpOiBPcHRpb25hbDxTdWdhckVsZW1lbnQ8Tm9kZSAmIENoaWxkTm9kZT4+ID0+IHtcbiAgY29uc3QgY3MgPSBlbGVtZW50LmRvbS5jaGlsZE5vZGVzO1xuICByZXR1cm4gT3B0aW9uYWwuZnJvbShjc1tpbmRleF0pLm1hcChTdWdhckVsZW1lbnQuZnJvbURvbSk7XG59O1xuXG5jb25zdCBmaXJzdENoaWxkID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPik6IE9wdGlvbmFsPFN1Z2FyRWxlbWVudDxOb2RlICYgQ2hpbGROb2RlPj4gPT5cbiAgY2hpbGQoZWxlbWVudCwgMCk7XG5cbmNvbnN0IGxhc3RDaGlsZCA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBPcHRpb25hbDxTdWdhckVsZW1lbnQ8Tm9kZSAmIENoaWxkTm9kZT4+ID0+XG4gIGNoaWxkKGVsZW1lbnQsIGVsZW1lbnQuZG9tLmNoaWxkTm9kZXMubGVuZ3RoIC0gMSk7XG5cbmNvbnN0IGNoaWxkTm9kZXNDb3VudCA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBudW1iZXIgPT5cbiAgZWxlbWVudC5kb20uY2hpbGROb2Rlcy5sZW5ndGg7XG5cbmNvbnN0IGhhc0NoaWxkTm9kZXMgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KTogYm9vbGVhbiA9PlxuICBlbGVtZW50LmRvbS5oYXNDaGlsZE5vZGVzKCk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWxlbWVudEFuZE9mZnNldDxFPiB7XG4gIHJlYWRvbmx5IGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxFPjtcbiAgcmVhZG9ubHkgb2Zmc2V0OiBudW1iZXI7XG59XG5cbmNvbnN0IHNwb3QgPSA8RT4oZWxlbWVudDogU3VnYXJFbGVtZW50PEU+LCBvZmZzZXQ6IG51bWJlcik6IEVsZW1lbnRBbmRPZmZzZXQ8RT4gPT4gKHtcbiAgZWxlbWVudCxcbiAgb2Zmc2V0XG59KTtcblxuY29uc3QgbGVhZiA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4sIG9mZnNldDogbnVtYmVyKTogRWxlbWVudEFuZE9mZnNldDxOb2RlPiA9PiB7XG4gIGNvbnN0IGNzID0gY2hpbGRyZW4oZWxlbWVudCk7XG4gIHJldHVybiBjcy5sZW5ndGggPiAwICYmIG9mZnNldCA8IGNzLmxlbmd0aCA/IHNwb3QoY3Nbb2Zmc2V0XSwgMCkgOiBzcG90KGVsZW1lbnQsIG9mZnNldCk7XG59O1xuXG5leHBvcnQge1xuICBvd25lcixcbiAgZG9jdW1lbnRPck93bmVyLFxuICBkZWZhdWx0VmlldyxcbiAgZG9jdW1lbnRFbGVtZW50LFxuICBwYXJlbnQsXG4gIHBhcmVudE5vZGUsXG4gIHBhcmVudEVsZW1lbnQsXG4gIGZpbmRJbmRleCxcbiAgcGFyZW50cyxcbiAgc2libGluZ3MsXG4gIHByZXZTaWJsaW5nLFxuICBvZmZzZXRQYXJlbnQsXG4gIHByZXZTaWJsaW5ncyxcbiAgbmV4dFNpYmxpbmcsXG4gIG5leHRTaWJsaW5ncyxcbiAgY2hpbGRyZW4sXG4gIGNoaWxkLFxuICBmaXJzdENoaWxkLFxuICBsYXN0Q2hpbGQsXG4gIGNoaWxkTm9kZXNDb3VudCxcbiAgaGFzQ2hpbGROb2RlcyxcbiAgbGVhZlxufTtcbiIsImltcG9ydCB7IEFyciB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmltcG9ydCB0eXBlIHsgU3VnYXJFbGVtZW50IH0gZnJvbSAnLi4vYXBpL25vZGUvU3VnYXJFbGVtZW50JztcbmltcG9ydCAqIGFzIEF0dHJMaXN0IGZyb20gJy4uL2FwaS9wcm9wZXJ0aWVzL0F0dHJMaXN0JztcblxuLy8gSUUxMSBDYW4gcmV0dXJuIHVuZGVmaW5lZCBmb3IgYSBjbGFzc0xpc3Qgb24gZWxlbWVudHMgc3VjaCBhcyBtYXRoLCBzbyB3ZSBtYWtlIHN1cmUgaXQncyBub3QgdW5kZWZpbmVkIGJlZm9yZSBhdHRlbXB0aW5nIHRvIHVzZSBpdC5cbmNvbnN0IHN1cHBvcnRzID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPik6IGVsZW1lbnQgaXMgU3VnYXJFbGVtZW50PEVsZW1lbnQ+ID0+IChlbGVtZW50LmRvbSBhcyBFbGVtZW50KS5jbGFzc0xpc3QgIT09IHVuZGVmaW5lZDtcblxuY29uc3QgZ2V0ID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxFbGVtZW50Pik6IHN0cmluZ1tdID0+IEF0dHJMaXN0LnJlYWQoZWxlbWVudCwgJ2NsYXNzJyk7XG5cbmNvbnN0IGFkZCA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8RWxlbWVudD4sIGNsYXp6OiBzdHJpbmcpOiBib29sZWFuID0+IEF0dHJMaXN0LmFkZChlbGVtZW50LCAnY2xhc3MnLCBjbGF6eik7XG5cbmNvbnN0IHJlbW92ZSA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8RWxlbWVudD4sIGNsYXp6OiBzdHJpbmcpOiBib29sZWFuID0+IEF0dHJMaXN0LnJlbW92ZShlbGVtZW50LCAnY2xhc3MnLCBjbGF6eik7XG5cbmNvbnN0IHRvZ2dsZSA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8RWxlbWVudD4sIGNsYXp6OiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgaWYgKEFyci5jb250YWlucyhnZXQoZWxlbWVudCksIGNsYXp6KSkge1xuICAgIHJldHVybiByZW1vdmUoZWxlbWVudCwgY2xhenopO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBhZGQoZWxlbWVudCwgY2xhenopO1xuICB9XG59O1xuXG5leHBvcnQge1xuICBnZXQsXG4gIGFkZCxcbiAgcmVtb3ZlLFxuICB0b2dnbGUsXG4gIHN1cHBvcnRzXG59O1xuIiwiaW1wb3J0IHsgT3B0aW9uYWwsIFR5cGUgfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5pbXBvcnQgdHlwZSB7IFN1Z2FyRWxlbWVudCB9IGZyb20gJy4uL2FwaS9ub2RlL1N1Z2FyRWxlbWVudCc7XG5cbnR5cGUgVGVzdEZuID0gKGU6IFN1Z2FyRWxlbWVudDxOb2RlPikgPT4gYm9vbGVhbjtcbnR5cGUgU2NvcGVUZXN0Rm48VCwgUiBleHRlbmRzIE5vZGU+ID0gKHNjb3BlOiBTdWdhckVsZW1lbnQ8Tm9kZT4sIGE6IFQpID0+IHNjb3BlIGlzIFN1Z2FyRWxlbWVudDxSPjtcbnR5cGUgQW5jZXN0b3JGbjxULCBSIGV4dGVuZHMgTm9kZT4gPSAoc2NvcGU6IFN1Z2FyRWxlbWVudDxOb2RlPiwgcHJlZGljYXRlOiBULCBpc1Jvb3Q/OiBUZXN0Rm4pID0+IE9wdGlvbmFsPFN1Z2FyRWxlbWVudDxSPj47XG5cbmV4cG9ydCBkZWZhdWx0IDxULCBSIGV4dGVuZHMgTm9kZSA9IE5vZGU+IChpczogU2NvcGVUZXN0Rm48VCwgUj4sIGFuY2VzdG9yOiBBbmNlc3RvckZuPFQsIFI+LCBzY29wZTogU3VnYXJFbGVtZW50PE5vZGU+LCBhOiBULCBpc1Jvb3Q/OiBUZXN0Rm4pOiBPcHRpb25hbDxTdWdhckVsZW1lbnQ8Uj4+ID0+IHtcbiAgaWYgKGlzKHNjb3BlLCBhKSkge1xuICAgIHJldHVybiBPcHRpb25hbC5zb21lKHNjb3BlKTtcbiAgfSBlbHNlIGlmIChUeXBlLmlzRnVuY3Rpb24oaXNSb290KSAmJiBpc1Jvb3Qoc2NvcGUpKSB7XG4gICAgcmV0dXJuIE9wdGlvbmFsLm5vbmU8U3VnYXJFbGVtZW50PFI+PigpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBhbmNlc3RvcihzY29wZSwgYSwgaXNSb290KTtcbiAgfVxufTtcbiIsImltcG9ydCBQbHVnaW5NYW5hZ2VyIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvUGx1Z2luTWFuYWdlcic7XG5cbmltcG9ydCAqIGFzIENvbW1hbmRzIGZyb20gJy4vYXBpL0NvbW1hbmRzJztcbmltcG9ydCAqIGFzIE9wdGlvbnMgZnJvbSAnLi9hcGkvT3B0aW9ucyc7XG5pbXBvcnQgKiBhcyBJbnNlcnRCdXR0b25zIGZyb20gJy4vaW5zZXJ0L0J1dHRvbnMnO1xuaW1wb3J0ICogYXMgSW5zZXJ0VG9vbGJhcnMgZnJvbSAnLi9pbnNlcnQvVG9vbGJhcnMnO1xuaW1wb3J0ICogYXMgU2VsZWN0aW9uVG9vbGJhcnMgZnJvbSAnLi9zZWxlY3Rpb24vVG9vbGJhcnMnO1xuXG5leHBvcnQgZGVmYXVsdCAoKTogdm9pZCA9PiB7XG4gIFBsdWdpbk1hbmFnZXIuYWRkKCdxdWlja2JhcnMnLCAoZWRpdG9yKSA9PiB7XG4gICAgT3B0aW9ucy5yZWdpc3RlcihlZGl0b3IpO1xuICAgIENvbW1hbmRzLnJlZ2lzdGVyKGVkaXRvcik7XG4gICAgSW5zZXJ0QnV0dG9ucy5zZXR1cEJ1dHRvbnMoZWRpdG9yKTtcbiAgICBJbnNlcnRUb29sYmFycy5hZGRUb0VkaXRvcihlZGl0b3IpO1xuXG4gICAgU2VsZWN0aW9uVG9vbGJhcnMuYWRkVG9FZGl0b3IoZWRpdG9yKTtcbiAgfSk7XG59O1xuIiwiaW1wb3J0IHR5cGUgRWRpdG9yIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvRWRpdG9yJztcblxuaW1wb3J0ICogYXMgQWN0aW9ucyBmcm9tICcuLi9pbnNlcnQvQWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBDb252ZXJzaW9ucyBmcm9tICcuLi9pbnNlcnQvQ29udmVyc2lvbnMnO1xuaW1wb3J0ICogYXMgUGlja2VyIGZyb20gJy4uL2luc2VydC9QaWNrZXInO1xuXG5jb25zdCByZWdpc3RlciA9IChlZGl0b3I6IEVkaXRvcik6IHZvaWQgPT4ge1xuICBlZGl0b3Iub24oJ1ByZUluaXQnLCAoKSA9PiB7XG4gICAgaWYgKCFlZGl0b3IucXVlcnlDb21tYW5kU3VwcG9ydGVkKCdRdWlja2Jhckluc2VydEltYWdlJykpIHtcbiAgICAgIGVkaXRvci5hZGRDb21tYW5kKCdRdWlja2Jhckluc2VydEltYWdlJywgKCkgPT4ge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzXG4gICAgICAgIFBpY2tlci5waWNrRmlsZShlZGl0b3IpLnRoZW4oKGZpbGVzKSA9PiB7XG4gICAgICAgICAgaWYgKGZpbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGJsb2IgPSBmaWxlc1swXTtcblxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlc1xuICAgICAgICAgICAgQ29udmVyc2lvbnMuYmxvYlRvQmFzZTY0KGJsb2IpLnRoZW4oKGJhc2U2NCkgPT4ge1xuICAgICAgICAgICAgICBBY3Rpb25zLmluc2VydEJsb2IoZWRpdG9yLCBiYXNlNjQsIGJsb2IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQge1xuICByZWdpc3RlclxufTtcbiIsImltcG9ydCB7IFR5cGUgfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5pbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuaW1wb3J0IHR5cGUgeyBFZGl0b3JPcHRpb25zIH0gZnJvbSAndGlueW1jZS9jb3JlL2FwaS9PcHRpb25UeXBlcyc7XG5cbmNvbnN0IG9wdGlvbjoge1xuICA8SyBleHRlbmRzIGtleW9mIEVkaXRvck9wdGlvbnM+KG5hbWU6IEspOiAoZWRpdG9yOiBFZGl0b3IpID0+IEVkaXRvck9wdGlvbnNbS10gfCB1bmRlZmluZWQ7XG4gIDxUPihuYW1lOiBzdHJpbmcpOiAoZWRpdG9yOiBFZGl0b3IpID0+IFQgfCB1bmRlZmluZWQ7XG59ID0gKG5hbWU6IHN0cmluZykgPT4gKGVkaXRvcjogRWRpdG9yKSA9PlxuICBlZGl0b3Iub3B0aW9ucy5nZXQobmFtZSk7XG5cbmNvbnN0IHJlZ2lzdGVyID0gKGVkaXRvcjogRWRpdG9yKTogdm9pZCA9PiB7XG4gIGNvbnN0IHJlZ2lzdGVyT3B0aW9uID0gZWRpdG9yLm9wdGlvbnMucmVnaXN0ZXI7XG5cbiAgY29uc3QgdG9vbGJhclByb2Nlc3NvciA9IChkZWZhdWx0VmFsdWU6IHN0cmluZykgPT4gKHZhbHVlOiB1bmtub3duKSA9PiB7XG4gICAgY29uc3QgdmFsaWQgPSBUeXBlLmlzQm9vbGVhbih2YWx1ZSkgfHwgVHlwZS5pc1N0cmluZyh2YWx1ZSk7XG4gICAgaWYgKHZhbGlkKSB7XG4gICAgICBpZiAoVHlwZS5pc0Jvb2xlYW4odmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB7IHZhbHVlOiB2YWx1ZSA/IGRlZmF1bHRWYWx1ZSA6ICcnLCB2YWxpZCB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLnRyaW0oKSwgdmFsaWQgfTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHsgdmFsaWQ6IGZhbHNlIGFzIGNvbnN0LCBtZXNzYWdlOiAnTXVzdCBiZSBhIGJvb2xlYW4gb3Igc3RyaW5nLicgfTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZGVmYXVsdFNlbGVjdGlvblRvb2xiYXIgPSAnYm9sZCBpdGFsaWMgfCBxdWlja2xpbmsgaDIgaDMgYmxvY2txdW90ZSc7XG4gIHJlZ2lzdGVyT3B0aW9uKCdxdWlja2JhcnNfc2VsZWN0aW9uX3Rvb2xiYXInLCB7XG4gICAgcHJvY2Vzc29yOiB0b29sYmFyUHJvY2Vzc29yKGRlZmF1bHRTZWxlY3Rpb25Ub29sYmFyKSxcbiAgICBkZWZhdWx0OiBkZWZhdWx0U2VsZWN0aW9uVG9vbGJhclxuICB9KTtcblxuICBjb25zdCBkZWZhdWx0SW5zZXJ0VG9vbGJhciA9ICdxdWlja2ltYWdlIHF1aWNrdGFibGUnO1xuICByZWdpc3Rlck9wdGlvbigncXVpY2tiYXJzX2luc2VydF90b29sYmFyJywge1xuICAgIHByb2Nlc3NvcjogdG9vbGJhclByb2Nlc3NvcihkZWZhdWx0SW5zZXJ0VG9vbGJhciksXG4gICAgZGVmYXVsdDogZGVmYXVsdEluc2VydFRvb2xiYXJcbiAgfSk7XG5cbiAgY29uc3QgZGVmYXVsdEltYWdlVG9vbGJhciA9ICdhbGlnbmxlZnQgYWxpZ25jZW50ZXIgYWxpZ25yaWdodCc7XG4gIHJlZ2lzdGVyT3B0aW9uKCdxdWlja2JhcnNfaW1hZ2VfdG9vbGJhcicsIHtcbiAgICBwcm9jZXNzb3I6IHRvb2xiYXJQcm9jZXNzb3IoZGVmYXVsdEltYWdlVG9vbGJhciksXG4gICAgZGVmYXVsdDogZGVmYXVsdEltYWdlVG9vbGJhclxuICB9KTtcbn07XG5cbmNvbnN0IGdldFRleHRTZWxlY3Rpb25Ub29sYmFySXRlbXMgPSBvcHRpb248c3RyaW5nPigncXVpY2tiYXJzX3NlbGVjdGlvbl90b29sYmFyJyk7XG5jb25zdCBnZXRJbnNlcnRUb29sYmFySXRlbXMgPSBvcHRpb248c3RyaW5nPigncXVpY2tiYXJzX2luc2VydF90b29sYmFyJyk7XG5jb25zdCBnZXRJbWFnZVRvb2xiYXJJdGVtcyA9IG9wdGlvbjxzdHJpbmc+KCdxdWlja2JhcnNfaW1hZ2VfdG9vbGJhcicpO1xuXG5leHBvcnQge1xuICByZWdpc3RlcixcbiAgZ2V0VGV4dFNlbGVjdGlvblRvb2xiYXJJdGVtcyxcbiAgZ2V0SW5zZXJ0VG9vbGJhckl0ZW1zLFxuICBnZXRJbWFnZVRvb2xiYXJJdGVtc1xufTtcbiIsImltcG9ydCB7IElkIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0IHR5cGUgRWRpdG9yIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvRWRpdG9yJztcblxuY29uc3QgaW5zZXJ0VGFibGUgPSAoZWRpdG9yOiBFZGl0b3IsIGNvbHVtbnM6IG51bWJlciwgcm93czogbnVtYmVyKTogdm9pZCA9PiB7XG4gIGVkaXRvci5leGVjQ29tbWFuZCgnbWNlSW5zZXJ0VGFibGUnLCBmYWxzZSwgeyByb3dzLCBjb2x1bW5zIH0pO1xufTtcblxuY29uc3QgaW5zZXJ0QmxvYiA9IChlZGl0b3I6IEVkaXRvciwgYmFzZTY0OiBzdHJpbmcsIGJsb2I6IEJsb2IpOiB2b2lkID0+IHtcbiAgY29uc3QgYmxvYkNhY2hlID0gZWRpdG9yLmVkaXRvclVwbG9hZC5ibG9iQ2FjaGU7XG4gIGNvbnN0IGJsb2JJbmZvID0gYmxvYkNhY2hlLmNyZWF0ZShJZC5nZW5lcmF0ZSgnbWNldScpLCBibG9iLCBiYXNlNjQpO1xuICBibG9iQ2FjaGUuYWRkKGJsb2JJbmZvKTtcblxuICBlZGl0b3IuaW5zZXJ0Q29udGVudChlZGl0b3IuZG9tLmNyZWF0ZUhUTUwoJ2ltZycsIHsgc3JjOiBibG9iSW5mby5ibG9iVXJpKCkgfSkpO1xufTtcblxuZXhwb3J0IHtcbiAgaW5zZXJ0VGFibGUsXG4gIGluc2VydEJsb2Jcbn07XG4iLCJpbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuXG5pbXBvcnQgKiBhcyBBY3Rpb25zIGZyb20gJy4vQWN0aW9ucyc7XG5cbmNvbnN0IHNldHVwQnV0dG9ucyA9IChlZGl0b3I6IEVkaXRvcik6IHZvaWQgPT4ge1xuICBlZGl0b3IudWkucmVnaXN0cnkuYWRkQnV0dG9uKCdxdWlja2ltYWdlJywge1xuICAgIGljb246ICdpbWFnZScsXG4gICAgdG9vbHRpcDogJ0luc2VydCBpbWFnZScsXG4gICAgb25BY3Rpb246ICgpID0+IGVkaXRvci5leGVjQ29tbWFuZCgnUXVpY2tiYXJJbnNlcnRJbWFnZScpXG4gIH0pO1xuXG4gIGVkaXRvci51aS5yZWdpc3RyeS5hZGRCdXR0b24oJ3F1aWNrdGFibGUnLCB7XG4gICAgaWNvbjogJ3RhYmxlJyxcbiAgICB0b29sdGlwOiAnSW5zZXJ0IHRhYmxlJyxcbiAgICBvbkFjdGlvbjogKCkgPT4ge1xuICAgICAgQWN0aW9ucy5pbnNlcnRUYWJsZShlZGl0b3IsIDIsIDIpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQge1xuICBzZXR1cEJ1dHRvbnNcbn07XG4iLCJjb25zdCBibG9iVG9CYXNlNjQgPSAoYmxvYjogQmxvYik6IFByb21pc2U8c3RyaW5nPiA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xuICAgICAgcmVzb2x2ZSgocmVhZGVyLnJlc3VsdCBhcyBzdHJpbmcpLnNwbGl0KCcsJylbMV0pO1xuICAgIH07XG5cbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcbiAgfSk7XG59O1xuXG5leHBvcnQge1xuICBibG9iVG9CYXNlNjRcbn07XG4iLCJpbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuaW1wb3J0IERlbGF5IGZyb20gJ3RpbnltY2UvY29yZS9hcGkvdXRpbC9EZWxheSc7XG5pbXBvcnQgdHlwZSB7IEVkaXRvckV2ZW50IH0gZnJvbSAndGlueW1jZS9jb3JlL2FwaS91dGlsL0V2ZW50RGlzcGF0Y2hlcic7XG5cbmNvbnN0IHBpY2tGaWxlID0gKGVkaXRvcjogRWRpdG9yKTogUHJvbWlzZTxGaWxlW10+ID0+IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gIGxldCByZXNvbHZlZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGZpbGVJbnB1dDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGZpbGVJbnB1dC50eXBlID0gJ2ZpbGUnO1xuICBmaWxlSW5wdXQuYWNjZXB0ID0gJ2ltYWdlLyonO1xuICBmaWxlSW5wdXQuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICBmaWxlSW5wdXQuc3R5bGUubGVmdCA9ICcwJztcbiAgZmlsZUlucHV0LnN0eWxlLnRvcCA9ICcwJztcbiAgZmlsZUlucHV0LnN0eWxlLm9wYWNpdHkgPSAnMC4wMDEnO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZpbGVJbnB1dCk7XG5cbiAgY29uc3QgcmVzb2x2ZUZpbGVJbnB1dCA9ICh2YWx1ZTogRmlsZVtdKSA9PiB7XG4gICAgaWYgKCFyZXNvbHZlZCkge1xuICAgICAgZmlsZUlucHV0LnBhcmVudE5vZGU/LnJlbW92ZUNoaWxkKGZpbGVJbnB1dCk7XG4gICAgICByZXNvbHZlZCA9IHRydWU7XG4gICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2hhbmdlSGFuZGxlciA9IChlOiBFdmVudCkgPT4ge1xuICAgIHJlc29sdmVGaWxlSW5wdXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoKGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLmZpbGVzKSk7XG4gIH07XG5cbiAgZmlsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgY2hhbmdlSGFuZGxlcik7XG4gIGZpbGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjaGFuZ2VIYW5kbGVyKTtcblxuICBjb25zdCBjYW5jZWxIYW5kbGVyID0gKGU6IEVkaXRvckV2ZW50PHt9PikgPT4ge1xuICAgIGNvbnN0IGNsZWFudXAgPSAoKSA9PiB7XG4gICAgICByZXNvbHZlRmlsZUlucHV0KFtdKTtcbiAgICB9O1xuXG4gICAgaWYgKCFyZXNvbHZlZCApIHtcbiAgICAgIGlmIChlLnR5cGUgPT09ICdmb2N1c2luJykge1xuICAgICAgICAvLyBDaHJvbWUgd2lsbCBmaXJlIGBmb2N1c2luYCBiZWZvcmUgdGhlIGlucHV0IGBjaGFuZ2VgIGV2ZW50XG4gICAgICAgIERlbGF5LnNldEVkaXRvclRpbWVvdXQoZWRpdG9yLCBjbGVhbnVwLCAxMDAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsZWFudXAoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBlZGl0b3Iub2ZmKCdmb2N1c2luIHJlbW92ZScsIGNhbmNlbEhhbmRsZXIpO1xuICB9O1xuXG4gIGVkaXRvci5vbignZm9jdXNpbiByZW1vdmUnLCBjYW5jZWxIYW5kbGVyKTtcblxuICBmaWxlSW5wdXQuY2xpY2soKTtcbn0pO1xuXG5leHBvcnQge1xuICBwaWNrRmlsZVxufTtcbiIsImltcG9ydCB7IEZ1biB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5pbXBvcnQgeyBBdHRyaWJ1dGUsIFByZWRpY2F0ZUV4aXN0cywgU2VsZWN0b3JGaW5kLCBTdWdhckVsZW1lbnQsIFN1Z2FyTm9kZSB9IGZyb20gJ0BlcGhveC9zdWdhcic7XG5cbmltcG9ydCB0eXBlIEVkaXRvciBmcm9tICd0aW55bWNlL2NvcmUvYXBpL0VkaXRvcic7XG5cbmltcG9ydCAqIGFzIE9wdGlvbnMgZnJvbSAnLi4vYXBpL09wdGlvbnMnO1xuXG5jb25zdCBhZGRUb0VkaXRvciA9IChlZGl0b3I6IEVkaXRvcik6IHZvaWQgPT4ge1xuICBjb25zdCBpbnNlcnRUb29sYmFySXRlbXMgPSBPcHRpb25zLmdldEluc2VydFRvb2xiYXJJdGVtcyhlZGl0b3IpO1xuICBpZiAoaW5zZXJ0VG9vbGJhckl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICBlZGl0b3IudWkucmVnaXN0cnkuYWRkQ29udGV4dFRvb2xiYXIoJ3F1aWNrYmxvY2snLCB7XG4gICAgICBwcmVkaWNhdGU6IChub2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1Z2FyTm9kZSA9IFN1Z2FyRWxlbWVudC5mcm9tRG9tKG5vZGUpO1xuICAgICAgICBjb25zdCB0ZXh0QmxvY2tFbGVtZW50c01hcCA9IGVkaXRvci5zY2hlbWEuZ2V0VGV4dEJsb2NrRWxlbWVudHMoKTtcbiAgICAgICAgY29uc3QgaXNSb290ID0gKGVsZW06IFN1Z2FyRWxlbWVudDxOb2RlPikgPT4gZWxlbS5kb20gPT09IGVkaXRvci5nZXRCb2R5KCk7XG4gICAgICAgIHJldHVybiAhQXR0cmlidXRlLmhhcyhzdWdhck5vZGUsICdkYXRhLW1jZS1ib2d1cycpICYmIFNlbGVjdG9yRmluZC5jbG9zZXN0KHN1Z2FyTm9kZSwgJ3RhYmxlLFtkYXRhLW1jZS1ib2d1cz1cImFsbFwiXScsIGlzUm9vdCkuZm9sZChcbiAgICAgICAgICAoKSA9PiBQcmVkaWNhdGVFeGlzdHMuY2xvc2VzdChcbiAgICAgICAgICAgIHN1Z2FyTm9kZSxcbiAgICAgICAgICAgIChlbGVtKSA9PiBTdWdhck5vZGUubmFtZShlbGVtKSBpbiB0ZXh0QmxvY2tFbGVtZW50c01hcCAmJiBlZGl0b3IuZG9tLmlzRW1wdHkoZWxlbS5kb20pLFxuICAgICAgICAgICAgaXNSb290XG4gICAgICAgICAgKSxcbiAgICAgICAgICBGdW4ubmV2ZXJcbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICBpdGVtczogaW5zZXJ0VG9vbGJhckl0ZW1zLFxuICAgICAgcG9zaXRpb246ICdsaW5lJyxcbiAgICAgIHNjb3BlOiAnZWRpdG9yJ1xuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQge1xuICBhZGRUb0VkaXRvclxufTtcbiIsImltcG9ydCB7IENsYXNzLCBTdWdhckVsZW1lbnQgfSBmcm9tICdAZXBob3gvc3VnYXInO1xuXG5pbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuXG5pbXBvcnQgKiBhcyBPcHRpb25zIGZyb20gJy4uL2FwaS9PcHRpb25zJztcblxuY29uc3QgYWRkVG9FZGl0b3IgPSAoZWRpdG9yOiBFZGl0b3IpOiB2b2lkID0+IHtcbiAgY29uc3QgaXNFZGl0YWJsZSA9IChub2RlOiBFbGVtZW50IHwgbnVsbCk6IGJvb2xlYW4gPT4gZWRpdG9yLmRvbS5pc0VkaXRhYmxlKG5vZGUpO1xuICBjb25zdCBpc0luRWRpdGFibGVDb250ZXh0ID0gKGVsOiBFbGVtZW50KSA9PiBpc0VkaXRhYmxlKGVsLnBhcmVudEVsZW1lbnQpO1xuICBjb25zdCBpc0ltYWdlID0gKG5vZGU6IEVsZW1lbnQpOiBib29sZWFuID0+IHtcbiAgICBjb25zdCBpc0ltYWdlRmlndXJlID0gbm9kZS5ub2RlTmFtZSA9PT0gJ0ZJR1VSRScgJiYgL2ltYWdlL2kudGVzdChub2RlLmNsYXNzTmFtZSk7XG4gICAgY29uc3QgaXNJbWFnZSA9IG5vZGUubm9kZU5hbWUgPT09ICdJTUcnIHx8IGlzSW1hZ2VGaWd1cmU7XG4gICAgY29uc3QgaXNQYWdlYnJlYWsgPSBDbGFzcy5oYXMoU3VnYXJFbGVtZW50LmZyb21Eb20obm9kZSksICdtY2UtcGFnZWJyZWFrJyk7XG4gICAgcmV0dXJuIGlzSW1hZ2UgJiYgaXNJbkVkaXRhYmxlQ29udGV4dChub2RlKSAmJiAhaXNQYWdlYnJlYWs7XG4gIH07XG5cbiAgY29uc3QgaW1hZ2VUb29sYmFySXRlbXMgPSBPcHRpb25zLmdldEltYWdlVG9vbGJhckl0ZW1zKGVkaXRvcik7XG4gIGlmIChpbWFnZVRvb2xiYXJJdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgZWRpdG9yLnVpLnJlZ2lzdHJ5LmFkZENvbnRleHRUb29sYmFyKCdpbWFnZXNlbGVjdGlvbicsIHtcbiAgICAgIHByZWRpY2F0ZTogaXNJbWFnZSxcbiAgICAgIGl0ZW1zOiBpbWFnZVRvb2xiYXJJdGVtcyxcbiAgICAgIHBvc2l0aW9uOiAnbm9kZSdcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IHRleHRUb29sYmFySXRlbXMgPSBPcHRpb25zLmdldFRleHRTZWxlY3Rpb25Ub29sYmFySXRlbXMoZWRpdG9yKTtcbiAgaWYgKHRleHRUb29sYmFySXRlbXMubGVuZ3RoID4gMCkge1xuICAgIGVkaXRvci51aS5yZWdpc3RyeS5hZGRDb250ZXh0VG9vbGJhcigndGV4dHNlbGVjdGlvbicsIHtcbiAgICAgIHByZWRpY2F0ZTogKG5vZGUpID0+ICFpc0ltYWdlKG5vZGUpICYmICFlZGl0b3Iuc2VsZWN0aW9uLmlzQ29sbGFwc2VkKCkgJiYgaXNFZGl0YWJsZShub2RlKSxcbiAgICAgIGl0ZW1zOiB0ZXh0VG9vbGJhckl0ZW1zLFxuICAgICAgcG9zaXRpb246ICdzZWxlY3Rpb24nLFxuICAgICAgc2NvcGU6ICdlZGl0b3InXG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCB7XG4gIGFkZFRvRWRpdG9yXG59O1xuIiwiaW1wb3J0ICogYXMgVHlwZSBmcm9tICcuLi9jb3JlL1R5cGUnO1xuaW1wb3J0ICogYXMgQXJyYXlVdGlsIGZyb20gJy4uL2NvcmUvQXJyYXlVdGlsJztcblxuLyoqIEEgd2F5IG9mIGNvbXBhcmluZyB0d28gdmFsdWVzIG9mIHRoZSBzYW1lIHR5cGUgZm9yIGVxdWFsaXR5LiAqL1xuZXhwb3J0IGludGVyZmFjZSBFcTxBPiB7XG4gIGVxOiAoeDogQSwgeTogQSkgPT4gYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGNvbnRyYW1hcCA9IDxBLCBCPiAoZXFhOiBFcTxBPiwgZjogKGI6IEIpID0+IEEpOiBFcTxCPiA9PlxuICBlcSgoeCwgeSkgPT4gZXFhLmVxKGYoeCksIGYoeSkpKTtcblxuZXhwb3J0IGNvbnN0IGVxID0gPEE+IChmOiAoeDogQSwgeTogQSkgPT4gYm9vbGVhbik6IEVxPEE+ID0+XG4gICh7IGVxOiBmIH0pO1xuXG5leHBvcnQgY29uc3QgdHJpcGxlRXE6IEVxPGFueT4gPSBlcSgoeCwgeSkgPT4geCA9PT0geSk7XG5cbmV4cG9ydCBjb25zdCBlcVN0cmluZzogRXE8c3RyaW5nPiA9IHRyaXBsZUVxO1xuXG5leHBvcnQgY29uc3QgZXFCb29sZWFuOiBFcTxib29sZWFuPiA9IHRyaXBsZUVxO1xuXG5leHBvcnQgY29uc3QgZXFOdW1iZXI6IEVxPG51bWJlcj4gPSB0cmlwbGVFcTtcblxuZXhwb3J0IGNvbnN0IGVxVW5kZWZpbmVkOiBFcTx1bmRlZmluZWQ+ID0gdHJpcGxlRXE7XG5cbmV4cG9ydCBjb25zdCBlcU51bGw6IEVxPG51bGw+ID0gdHJpcGxlRXE7XG5cbmV4cG9ydCBjb25zdCBlcUFycmF5ID0gPEE+IChlcWE6IEVxPEE+KTogRXE8QXJyYXlMaWtlPEE+PiA9PiBlcSgoeCwgeSkgPT4ge1xuICBpZiAoeC5sZW5ndGggIT09IHkubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGxlbiA9IHgubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKCFlcWEuZXEoeFtpXSwgeVtpXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59KTtcblxuLy8gVE9ETzogTWFrZSBhbiBPcmQgdHlwZWNsYXNzXG5jb25zdCBlcVNvcnRlZEFycmF5ID0gPEE+KGVxYTogRXE8QT4sIGNvbXBhcmVGbj86IChhOiBBLCBiOiBBKSA9PiBudW1iZXIpOiBFcTxBcnJheUxpa2U8QT4+ID0+XG4gIGNvbnRyYW1hcChlcUFycmF5KGVxYSksICh4cykgPT4gQXJyYXlVdGlsLnNvcnQoeHMsIGNvbXBhcmVGbikpO1xuXG5leHBvcnQgY29uc3QgZXFSZWNvcmQgPSA8QT4gKGVxYTogRXE8QT4pOiBFcTxSZWNvcmQ8c3RyaW5nLCBBPj4gPT4gZXEoKHgsIHkpID0+IHtcbiAgY29uc3Qga3ggPSBPYmplY3Qua2V5cyh4KTtcbiAgY29uc3Qga3kgPSBPYmplY3Qua2V5cyh5KTtcbiAgaWYgKCFlcVNvcnRlZEFycmF5KGVxU3RyaW5nKS5lcShreCwga3kpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGxlbiA9IGt4Lmxlbmd0aDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHEgPSBreFtpXTtcbiAgICBpZiAoIWVxYS5lcSh4W3FdLCB5W3FdKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn0pO1xuXG5leHBvcnQgY29uc3QgZXFBbnk6IEVxPGFueT4gPSBlcSgoeCwgeSkgPT4ge1xuICBpZiAoeCA9PT0geSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgY29uc3QgdHggPSBUeXBlLnR5cGVPZih4KTtcbiAgY29uc3QgdHkgPSBUeXBlLnR5cGVPZih5KTtcbiAgaWYgKHR4ICE9PSB0eSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChUeXBlLmlzRXF1YXRhYmxlVHlwZSh0eCkpIHtcbiAgICByZXR1cm4geCA9PT0geTtcblxuICB9IGVsc2UgaWYgKHR4ID09PSAnYXJyYXknKSB7XG4gICAgcmV0dXJuIGVxQXJyYXkoZXFBbnkpLmVxKHgsIHkpO1xuXG4gIH0gZWxzZSBpZiAodHggPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGVxUmVjb3JkKGVxQW55KS5lcSh4LCB5KTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn0pO1xuIiwiZXhwb3J0IGNvbnN0IG1hcCA9IDxBLCBCPih4czogQXJyYXlMaWtlPEE+LCBmOiAoYTogQSkgPT4gQik6IEJbXSA9PiB7XG4gIGNvbnN0IGxlbiA9IHhzLmxlbmd0aDtcbiAgY29uc3QgciA9IG5ldyBBcnJheShsZW4pO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIHJbaV0gPSBmKHgpO1xuICB9XG4gIHJldHVybiByO1xufTtcblxuLyoqIG1hcCBhIGZ1bmN0aW9uIG92ZXIgYW4gYXJyYXksIHRoZW4gbWFwIGFub3RoZXIgZnVuY3Rpb24gb3ZlciBldmVyeSBpdGVtIGV4Y2VwdCB0aGUgbGFzdCAqL1xuZXhwb3J0IGNvbnN0IG1hcERlbGltaXQgPSA8QSwgQj4gKHhzOiBBcnJheUxpa2U8QT4sIGY6IChhOiBBKSA9PiBCLCBkZWxpbWl0OiAoYjogQikgPT4gQik6IEJbXSA9PiB7XG4gIGNvbnN0IGxlbiA9IHhzLmxlbmd0aDtcbiAgY29uc3QgciA9IG5ldyBBcnJheShsZW4pO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbiAtIDE7IGkrKykge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICByW2ldID0gZGVsaW1pdChmKHgpKTtcbiAgfVxuICBpZiAobGVuID4gMCkge1xuICAgIHJbbGVuIC0gMV0gPSAoZih4c1tsZW4gLSAxXSkpO1xuICB9XG5cbiAgcmV0dXJuIHI7XG59O1xuXG5leHBvcnQgY29uc3Qgc29ydCA9IDxBPiAoeHM6IEFycmF5TGlrZTxBPiwgY29tcGFyZUZuPzogKGE6IEEsIGI6IEEpID0+IG51bWJlcik6IEFbXSA9PiB7XG4gIGNvbnN0IGNsb25lOiBBW10gPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh4cyk7XG4gIHJldHVybiBjbG9uZS5zb3J0KGNvbXBhcmVGbik7XG59O1xuIiwiZXhwb3J0IGNvbnN0IHR5cGVPZiA9ICh4OiBhbnkpID0+IHtcbiAgaWYgKHggPT09IG51bGwpIHtcbiAgICByZXR1cm4gJ251bGwnO1xuICB9XG4gIGlmICh4ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gJ3VuZGVmaW5lZCc7XG4gIH1cbiAgY29uc3QgdCA9IHR5cGVvZiB4O1xuICBpZiAodCA9PT0gJ29iamVjdCcgJiYgKEFycmF5LnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKHgpIHx8IHguY29uc3RydWN0b3IgJiYgeC5jb25zdHJ1Y3Rvci5uYW1lID09PSAnQXJyYXknKSkge1xuICAgIHJldHVybiAnYXJyYXknO1xuICB9XG4gIGlmICh0ID09PSAnb2JqZWN0JyAmJiAoU3RyaW5nLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKHgpIHx8IHguY29uc3RydWN0b3IgJiYgeC5jb25zdHJ1Y3Rvci5uYW1lID09PSAnU3RyaW5nJykpIHtcbiAgICByZXR1cm4gJ3N0cmluZyc7XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG5jb25zdCBpc1R5cGUgPSA8VD4odHlwZTogc3RyaW5nKSA9PiAodmFsdWU6IGFueSk6IHZhbHVlIGlzIFQgPT4gdHlwZU9mKHZhbHVlKSA9PT0gdHlwZTtcblxuZXhwb3J0IGNvbnN0IGlzU3RyaW5nID0gaXNUeXBlPHN0cmluZz4oJ3N0cmluZycpO1xuZXhwb3J0IGNvbnN0IGlzT2JqZWN0ID0gaXNUeXBlPE9iamVjdD4oJ29iamVjdCcpO1xuZXhwb3J0IGNvbnN0IGlzQXJyYXkgPSBpc1R5cGU8QXJyYXk8dW5rbm93bj4+KCdhcnJheScpO1xuZXhwb3J0IGNvbnN0IGlzTnVsbCA9IGlzVHlwZTxudWxsPignbnVsbCcpO1xuZXhwb3J0IGNvbnN0IGlzQm9vbGVhbiA9IGlzVHlwZTxib29sZWFuPignYm9vbGVhbicpO1xuZXhwb3J0IGNvbnN0IGlzVW5kZWZpbmVkID0gaXNUeXBlPHVuZGVmaW5lZD4oJ3VuZGVmaW5lZCcpO1xuZXhwb3J0IGNvbnN0IGlzRnVuY3Rpb24gPSBpc1R5cGU8RnVuY3Rpb24+KCdmdW5jdGlvbicpO1xuZXhwb3J0IGNvbnN0IGlzTnVtYmVyID0gaXNUeXBlPG51bWJlcj4oJ251bWJlcicpO1xuXG5leHBvcnQgY29uc3QgaXNFcXVhdGFibGVUeXBlID0gKHg6IHN0cmluZyk6IGJvb2xlYW4gPT5cbiAgWyAndW5kZWZpbmVkJywgJ2Jvb2xlYW4nLCAnbnVtYmVyJywgJ3N0cmluZycsICdmdW5jdGlvbicsICd4bWwnLCAnbnVsbCcgXS5pbmRleE9mKHgpICE9PSAtMTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcbiAgICAgICAgaWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuICAgICAgICB9XG4gICAgfVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydiA9ICgpID0+IChcIjEuNS4yXCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydWlkID0gXCJidW5kbGVyPXJzcGFja0AxLjUuMlwiO1xuIiwiaW1wb3J0IFBsdWdpbiBmcm9tICcuL1BsdWdpbic7XG5cblBsdWdpbigpO1xuXG4vKiogKioqKipcbiAqIERPIE5PVCBFWFBPUlQgQU5ZVEhJTkdcbiAqXG4gKiBJRiBZT1UgRE8gUk9MTFVQIFdJTEwgTEVBVkUgQSBHTE9CQUwgT04gVEhFIFBBR0VcbiAqKioqKioqL1xuIl0sIm5hbWVzIjpbIkVxIiwiRnVuIiwiT3B0aW9uYWwiLCJUeXBlIiwibmF0aXZlU2xpY2UiLCJBcnJheSIsIm5hdGl2ZUluZGV4T2YiLCJuYXRpdmVQdXNoIiwicmF3SW5kZXhPZiIsInRzIiwidCIsImluZGV4T2YiLCJ4cyIsIngiLCJyIiwiY29udGFpbnMiLCJleGlzdHMiLCJwcmVkIiwiaSIsImxlbiIsInJhbmdlIiwibnVtIiwiZiIsImNodW5rIiwiYXJyYXkiLCJzaXplIiwicyIsIm1hcCIsImVhY2giLCJlYWNociIsInBhcnRpdGlvbiIsInBhc3MiLCJmYWlsIiwiYXJyIiwiZmlsdGVyIiwiZ3JvdXBCeSIsIndhc1R5cGUiLCJncm91cCIsInR5cGUiLCJmb2xkciIsImFjYyIsImZvbGRsIiwiZmluZFVudGlsIiwidW50aWwiLCJmaW5kIiwiZmluZEluZGV4IiwiZmluZExhc3RJbmRleCIsImZsYXR0ZW4iLCJFcnJvciIsImJpbmQiLCJmb3JhbGwiLCJlcXVhbCIsImExIiwiYTIiLCJlcSIsInJldmVyc2UiLCJkaWZmZXJlbmNlIiwibWFwVG9PYmplY3QiLCJTdHJpbmciLCJwdXJlIiwic29ydCIsImNvbXBhcmF0b3IiLCJjb3B5IiwiZ2V0IiwiaGVhZCIsImxhc3QiLCJmcm9tIiwiZmluZE1hcCIsInVuaXF1ZSIsImlzRHVwbGljYXRlZCIsIm5vb3AiLCJub2FyZyIsImNvbXBvc2UiLCJmYSIsImZiIiwiYXJncyIsImNvbXBvc2UxIiwiZmJjIiwiZmFiIiwiYSIsImNvbnN0YW50IiwidmFsdWUiLCJpZGVudGl0eSIsInRyaXBsZUVxdWFscyIsImIiLCJjdXJyeSIsImZuIiwiaW5pdGlhbEFyZ3MiLCJyZXN0QXJncyIsImFsbCIsIm5vdCIsImRpZSIsIm1zZyIsImFwcGx5IiwiY2FsbCIsIm5ldmVyIiwiYWx3YXlzIiwid2Vha2VuIiwicGlwZSIsImFiIiwiYmMiLCJjZCIsImRlIiwiZWYiLCJmZyIsImdoIiwiYyIsImQiLCJlIiwiZyIsIkdsb2JhbCIsIndpbmRvdyIsIkZ1bmN0aW9uIiwiSWRVdGlscyIsIk51bSIsImdlbmVyYXRlIiwicHJlZml4IiwiZGF0ZSIsIkRhdGUiLCJ0aW1lIiwicmFuZG9tIiwiTWF0aCIsInV1aWRWNCIsImN5Y2xlQnkiLCJkZWx0YSIsIm1pbiIsIm1heCIsImNsYW1wIiwiVWludDMyQXJyYXkiLCJrZXlzIiwiT2JqZWN0IiwiaGFzT3duUHJvcGVydHkiLCJvYmoiLCJwcm9wcyIsImsiLCJ0dXBsZU1hcCIsInR1cGxlIiwib2JqQWNjIiwiaW50ZXJuYWxGaWx0ZXIiLCJvblRydWUiLCJvbkZhbHNlIiwiYmlmaWx0ZXIiLCJtYXBUb0FycmF5IiwibmFtZSIsInZhbHVlcyIsImtleSIsImhhcyIsImhhc05vbk51bGxhYmxlS2V5IiwidW5kZWZpbmVkIiwiaXNFbXB0eSIsInRhZyIsIm9uTm9uZSIsIm9uU29tZSIsIm1hcHBlciIsImJpbmRlciIsInByZWRpY2F0ZSIsInJlcGxhY2VtZW50IiwidGh1bmsiLCJtZXNzYWdlIiwid29ya2VyIiwicGF0aCIsInBhcnRzIiwic2NvcGUiLCJvIiwicmVzb2x2ZSIsInAiLCJzdGVwIiwicGFydCIsImZvcmdlIiwidGFyZ2V0IiwibmFtZXNwYWNlIiwiZ2V0UHJvdG90eXBlT2YiLCJoYXNQcm90byIsInYiLCJjb25zdHJ1Y3RvciIsInR5cGVPZiIsInByb3RvIiwiaXNUeXBlIiwiaXNTaW1wbGVUeXBlIiwiaXMiLCJpc09iamVjdCIsImlzU3RyaW5nIiwiaXNQbGFpbk9iamVjdCIsImlzQXJyYXkiLCJpc051bGwiLCJpc0Jvb2xlYW4iLCJpc1VuZGVmaW5lZCIsImlzTnVsbGFibGUiLCJpc05vbk51bGxhYmxlIiwiaXNGdW5jdGlvbiIsImlzTnVtYmVyIiwiaXNBcnJheU9mIiwiaXNQcm9taXNlTGlrZSIsInV1aWRWNEJ5dGVzIiwiYnl0ZXMiLCJVaW50OEFycmF5IiwidXVpZFY0U3RyaW5nIiwidXVpZCIsImdldEhleFJhbmdlIiwic3RhcnRJbmRleCIsImVuZEluZGV4IiwiYnVmZiIsImhleEJ5dGUiLCJSZXNvbHZlIiwic2FuZEhUTUxFbGVtZW50IiwiaXNQcm90b3R5cGVPZiIsInVuc2FmZSIsImdldE9yRGllIiwiYWN0dWFsIiwidG9BcnJheSIsInJlY3Vyc2UiLCJjdXIiLCJBcnIiLCJTZWxlY3RvcnMiLCJlMSIsImUyIiwiaXNFcXVhbE5vZGUiLCJtZW1iZXIiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJkMSIsImQyIiwiQVRUUklCVVRFIiwiQ0RBVEFfU0VDVElPTiIsIkNPTU1FTlQiLCJET0NVTUVOVCIsIkRPQ1VNRU5UX1RZUEUiLCJET0NVTUVOVF9GUkFHTUVOVCIsIkVMRU1FTlQiLCJURVhUIiwiUFJPQ0VTU0lOR19JTlNUUlVDVElPTiIsIkVOVElUWV9SRUZFUkVOQ0UiLCJFTlRJVFkiLCJOT1RBVElPTiIsIlN1Z2FyRWxlbWVudCIsIlN1Z2FyTm9kZSIsImdldFNoYWRvd0hvc3QiLCJnZXRTaGFkb3dSb290IiwiaW5Cb2R5IiwiZG9tIiwiZG9jIiwiYm9keSIsImdldEJvZHkiLCJkb2N1bWVudCIsImZyb21IdG1sIiwiaHRtbCIsImRpdiIsImNvbnNvbGUiLCJmcm9tRG9tIiwiZnJvbVRhZyIsIm5vZGUiLCJmcm9tVGV4dCIsInRleHQiLCJmcm9tUG9pbnQiLCJkb2NFbG0iLCJ5IiwiZ2V0SGVhZCIsIlNhbmRIVE1MRWxlbWVudCIsIk5vZGVUeXBlcyIsImlzQ29tbWVudCIsImlzSFRNTEVsZW1lbnQiLCJpc0VsZW1lbnQiLCJpc1RleHQiLCJpc0RvY3VtZW50IiwiaXNEb2N1bWVudEZyYWdtZW50IiwiaXNUYWciLCJUcmF2ZXJzZSIsIlN1Z2FySGVhZCIsImlzU2hhZG93Um9vdCIsImRvcyIsImdldFJvb3ROb2RlIiwiY3JlYXRlRWxlbWVudCIsImdldFN0eWxlQ29udGFpbmVyIiwiZ2V0Q29udGVudENvbnRhaW5lciIsImlzSW5TaGFkb3dSb290IiwiZ2V0T3JpZ2luYWxFdmVudFRhcmdldCIsImV2ZW50IiwiZWwiLCJpc09wZW5TaGFkb3dIb3N0IiwiY29tcG9zZWRQYXRoIiwiaXNPcGVuU2hhZG93Um9vdCIsInNyIiwiaXNDbG9zZWRTaGFkb3dSb290IiwiQXR0cmlidXRlIiwicmVhZCIsImF0dHIiLCJhZGQiLCJpZCIsIm9sZCIsIm51IiwicmVtb3ZlIiwiT2JqIiwicmF3U2V0Iiwic2V0Iiwic2V0QWxsIiwiYXR0cnMiLCJzZXRPcHRpb25zIiwiZ2V0T3B0IiwiaGFzTm9uZSIsImNsb25lIiwidHJhbnNmZXJPbmUiLCJzb3VyY2UiLCJkZXN0aW5hdGlvbiIsInNyY1ZhbHVlIiwidHJhbnNmZXIiLCJDbGFzc0xpc3QiLCJUb2dnbGVyIiwiY2xhenoiLCJjbGVhbkNsYXNzIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwicmVzdWx0IiwidG9nZ2xlciIsImhhc0NsYXNzbGlzdCIsIm9mZiIsIm9uIiwidHVybk9mZiIsInR1cm5PbiIsImluaXRpYWwiLCJhY3RpdmUiLCJpc09uIiwiUHJlZGljYXRlRmluZCIsImFueSIsImFuY2VzdG9yIiwiaXNSb290IiwiY2xvc2VzdCIsInNpYmxpbmciLCJjaGlsZCIsImRlc2NlbmRhbnQiLCJDbG9zZXN0T3JBbmNlc3RvciIsIkNvbXBhcmUiLCJTdWdhckJvZHkiLCJmaXJzdCIsInN0b3AiLCJ0ZXN0IiwiZGVzY2VuZCIsInJlcyIsInNlbGVjdG9yIiwiZWxlbSIsImJ5cGFzc1NlbGVjdG9yIiwiYmFzZSIsIm9uZSIsIlJlY3Vyc2UiLCJvd25lciIsImRvY3VtZW50T3JPd25lciIsImRvY3VtZW50RWxlbWVudCIsImRlZmF1bHRWaWV3IiwicGFyZW50IiwicGFyZW50Tm9kZSIsInBhcmVudEVsZW1lbnQiLCJraW4iLCJjaGlsZHJlbiIsInBhcmVudHMiLCJyZXQiLCJyYXdQYXJlbnQiLCJzaWJsaW5ncyIsImZpbHRlclNlbGYiLCJvZmZzZXRQYXJlbnQiLCJwcmV2U2libGluZyIsIm5leHRTaWJsaW5nIiwicHJldlNpYmxpbmdzIiwibmV4dFNpYmxpbmdzIiwiaW5kZXgiLCJjcyIsImZpcnN0Q2hpbGQiLCJsYXN0Q2hpbGQiLCJjaGlsZE5vZGVzQ291bnQiLCJoYXNDaGlsZE5vZGVzIiwic3BvdCIsIm9mZnNldCIsImxlYWYiLCJBdHRyTGlzdCIsInN1cHBvcnRzIiwiUGx1Z2luTWFuYWdlciIsIkNvbW1hbmRzIiwiT3B0aW9ucyIsIkluc2VydEJ1dHRvbnMiLCJJbnNlcnRUb29sYmFycyIsIlNlbGVjdGlvblRvb2xiYXJzIiwiZWRpdG9yIiwiQWN0aW9ucyIsIkNvbnZlcnNpb25zIiwiUGlja2VyIiwicmVnaXN0ZXIiLCJmaWxlcyIsImJsb2IiLCJiYXNlNjQiLCJvcHRpb24iLCJyZWdpc3Rlck9wdGlvbiIsInRvb2xiYXJQcm9jZXNzb3IiLCJkZWZhdWx0VmFsdWUiLCJ2YWxpZCIsImRlZmF1bHRTZWxlY3Rpb25Ub29sYmFyIiwiZGVmYXVsdEluc2VydFRvb2xiYXIiLCJkZWZhdWx0SW1hZ2VUb29sYmFyIiwiZ2V0VGV4dFNlbGVjdGlvblRvb2xiYXJJdGVtcyIsImdldEluc2VydFRvb2xiYXJJdGVtcyIsImdldEltYWdlVG9vbGJhckl0ZW1zIiwiSWQiLCJpbnNlcnRUYWJsZSIsImNvbHVtbnMiLCJyb3dzIiwiaW5zZXJ0QmxvYiIsImJsb2JDYWNoZSIsImJsb2JJbmZvIiwic2V0dXBCdXR0b25zIiwiYmxvYlRvQmFzZTY0IiwiUHJvbWlzZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJEZWxheSIsInBpY2tGaWxlIiwicmVzb2x2ZWQiLCJmaWxlSW5wdXQiLCJyZXNvbHZlRmlsZUlucHV0IiwiY2hhbmdlSGFuZGxlciIsImNhbmNlbEhhbmRsZXIiLCJjbGVhbnVwIiwiUHJlZGljYXRlRXhpc3RzIiwiU2VsZWN0b3JGaW5kIiwiYWRkVG9FZGl0b3IiLCJpbnNlcnRUb29sYmFySXRlbXMiLCJzdWdhck5vZGUiLCJ0ZXh0QmxvY2tFbGVtZW50c01hcCIsIkNsYXNzIiwiaXNFZGl0YWJsZSIsImlzSW5FZGl0YWJsZUNvbnRleHQiLCJpc0ltYWdlIiwiaXNJbWFnZUZpZ3VyZSIsImlzUGFnZWJyZWFrIiwiaW1hZ2VUb29sYmFySXRlbXMiLCJ0ZXh0VG9vbGJhckl0ZW1zIiwiUGx1Z2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsNkRBQWUsTUFBTSxFQUFDO0FBQ2Y7Ozs7Ozs7Ozs7Ozs7O0FDSFA7O0FBRUEsNkRBQWUsTUFBTSxFQUFDO0FBQ2Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0g2QjtBQUVQO0FBQ1M7QUFDUDtBQU8vQixNQUFNSSxjQUFjQyxNQUFNLFNBQVMsQ0FBQyxLQUFLO0FBQ3pDLE1BQU1DLGdCQUFnQkQsTUFBTSxTQUFTLENBQUMsT0FBTztBQUM3QyxNQUFNRSxhQUFhRixNQUFNLFNBQVMsQ0FBQyxJQUFJO0FBRXZDLE1BQU1HLGFBQWEsQ0FBS0MsSUFBa0JDLElBQ3hDSixjQUFjLElBQUksQ0FBQ0csSUFBSUM7QUFFbEIsTUFBTUMsVUFBVSxDQUFVQyxJQUFrQkM7SUFDakQsd0ZBQXdGO0lBQ3hGLE1BQU1DLElBQUlOLFdBQVdJLElBQUlDO0lBQ3pCLE9BQU9DLE1BQU0sQ0FBQyxJQUFJWixvREFBYSxLQUFLQSxvREFBYSxDQUFDWTtBQUNwRCxFQUFFO0FBRUssTUFBTUMsV0FBVyxDQUFJSCxJQUFrQkMsSUFBa0JMLFdBQVdJLElBQUlDLEtBQUssQ0FBQyxFQUFFO0FBRWhGLE1BQU1HLFNBQVMsQ0FBVUosSUFBa0JLO0lBQ2hELElBQUssSUFBSUMsSUFBSSxHQUFHQyxNQUFNUCxHQUFHLE1BQU0sRUFBRU0sSUFBSUMsS0FBS0QsSUFBSztRQUM3QyxNQUFNTCxJQUFJRCxFQUFFLENBQUNNLEVBQUU7UUFDZixJQUFJRCxLQUFLSixHQUFHSyxJQUFJO1lBQ2QsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPO0FBQ1QsRUFBRTtBQUVLLE1BQU1FLFFBQVEsQ0FBSUMsS0FBYUM7SUFDcEMsTUFBTVIs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