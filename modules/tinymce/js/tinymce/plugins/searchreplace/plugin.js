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
"../katamari/src/main/ts/ephox/katamari/api/Regex.ts": 
/*!***********************************************************!*\
  !*** ../katamari/src/main/ts/ephox/katamari/api/Regex.ts ***!
  \***********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  escape: () => (escape)
});
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#escaping
const escape = (text)=>text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');


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
"../katamari/src/main/ts/ephox/katamari/api/Unicode.ts": 
/*!*************************************************************!*\
  !*** ../katamari/src/main/ts/ephox/katamari/api/Unicode.ts ***!
  \*************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ellipsis: () => (ellipsis),
  isZwsp: () => (isZwsp),
  nbsp: () => (nbsp),
  removeZwsp: () => (removeZwsp),
  softHyphen: () => (softHyphen),
  zeroWidth: () => (zeroWidth)
});
const zeroWidth = '\uFEFF';
const nbsp = '\u00A0';
const softHyphen = '\u00AD';
const ellipsis = '\u2026';
const isZwsp = (char)=>char === zeroWidth;
const removeZwsp = (s)=>s.replace(/\uFEFF/g, '');


}),
"../polaris/src/main/ts/ephox/polaris/api/Pattern.ts": 
/*!***********************************************************!*\
  !*** ../polaris/src/main/ts/ephox/polaris/api/Pattern.ts ***!
  \***********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  chars: () => (chars),
  custom: () => (custom),
  punctuation: () => (punctuation),
  safetoken: () => (safetoken),
  safeword: () => (safeword),
  sanitise: () => (sanitise),
  unsafetoken: () => (unsafetoken),
  unsafeword: () => (unsafeword),
  wordbreak: () => (wordbreak),
  wordchar: () => (wordchar)
});
/* ESM import */var _pattern_Chars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pattern/Chars */ "../polaris/src/main/ts/ephox/polaris/pattern/Chars.ts");
/* ESM import */var _pattern_Custom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pattern/Custom */ "../polaris/src/main/ts/ephox/polaris/pattern/Custom.ts");
/* ESM import */var _pattern_Safe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pattern/Safe */ "../polaris/src/main/ts/ephox/polaris/pattern/Safe.ts");
/* ESM import */var _pattern_Unsafe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pattern/Unsafe */ "../polaris/src/main/ts/ephox/polaris/pattern/Unsafe.ts");




const safeword = _pattern_Safe__WEBPACK_IMPORTED_MODULE_0__.word;
const safetoken = _pattern_Safe__WEBPACK_IMPORTED_MODULE_0__.token;
const custom = _pattern_Custom__WEBPACK_IMPORTED_MODULE_1__.Custom;
const unsafeword = _pattern_Unsafe__WEBPACK_IMPORTED_MODULE_2__.word;
const unsafetoken = _pattern_Unsafe__WEBPACK_IMPORTED_MODULE_2__.token;
const sanitise = _pattern_Safe__WEBPACK_IMPORTED_MODULE_0__.sanitise;
const chars = _pattern_Chars__WEBPACK_IMPORTED_MODULE_3__.chars;
const wordbreak = _pattern_Chars__WEBPACK_IMPORTED_MODULE_3__.wordbreak;
const wordchar = _pattern_Chars__WEBPACK_IMPORTED_MODULE_3__.wordchar;
const punctuation = _pattern_Chars__WEBPACK_IMPORTED_MODULE_3__.punctuation;



}),
"../polaris/src/main/ts/ephox/polaris/pattern/Chars.ts": 
/*!*************************************************************!*\
  !*** ../polaris/src/main/ts/ephox/polaris/pattern/Chars.ts ***!
  \*************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  chars: () => (chars),
  punctuation: () => (punctuation),
  wordbreak: () => (wordbreak),
  wordchar: () => (wordchar)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Unicode.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Fun.ts");
/* ESM import */var _words_UnicodeData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../words/UnicodeData */ "../polaris/src/main/ts/ephox/polaris/words/UnicodeData.ts");


// \w is a word character
// "'" is an apostrophe
// '-' is a hyphen
// \u00AD is a soft hyphen
// (https://en.wikipedia.org/wiki/List_of_Unicode_characters#Latin_Extended-A)
// \u00C0 - \u00FF are various language characters (Latin-1)
// \u0100 - \u017F are various language characters (Latin Extended-A)
// \u2018 and \u2019 are the smart quote characters
// \u00AD is a soft hyphen (SHY) character
const charsStr = '\\w' + `'` + '\\-' + _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.softHyphen + '\\u0100-\\u017F\\u00C0-\\u00FF' + _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.zeroWidth + '\\u2018\\u2019';
const wordbreakStr = '[^' + charsStr + ']';
const wordcharStr = '[' + charsStr + ']';
const chars = _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.constant(charsStr);
const wordbreak = _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.constant(wordbreakStr);
const wordchar = _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.constant(wordcharStr);
const punctuation = _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.constant(_words_UnicodeData__WEBPACK_IMPORTED_MODULE_2__.punctuationStr);



}),
"../polaris/src/main/ts/ephox/polaris/pattern/Custom.ts": 
/*!**************************************************************!*\
  !*** ../polaris/src/main/ts/ephox/polaris/pattern/Custom.ts ***!
  \**************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Custom: () => (Custom)
});
// tslint:disable-next-line:variable-name
const Custom = (regex, prefix, suffix, flags)=>{
    const term = ()=>{
        return new RegExp(regex, flags.getOr('g'));
    };
    return {
        term,
        prefix,
        suffix
    };
};


}),
"../polaris/src/main/ts/ephox/polaris/pattern/Safe.ts": 
/*!************************************************************!*\
  !*** ../polaris/src/main/ts/ephox/polaris/pattern/Safe.ts ***!
  \************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  sanitise: () => (sanitise),
  token: () => (token),
  word: () => (word)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Regex.ts");
/* ESM import */var _Unsafe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Unsafe */ "../polaris/src/main/ts/ephox/polaris/pattern/Unsafe.ts");


/** Escapes regex characters in a string */ const sanitise = _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.escape;
const word = (input)=>{
    const value = sanitise(input);
    return _Unsafe__WEBPACK_IMPORTED_MODULE_1__.word(value);
};
const token = (input)=>{
    const value = sanitise(input);
    return _Unsafe__WEBPACK_IMPORTED_MODULE_1__.token(value);
};



}),
"../polaris/src/main/ts/ephox/polaris/pattern/Unsafe.ts": 
/*!**************************************************************!*\
  !*** ../polaris/src/main/ts/ephox/polaris/pattern/Unsafe.ts ***!
  \**************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  token: () => (token),
  word: () => (word)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Fun.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Optional.ts");
/* ESM import */var _Chars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Chars */ "../polaris/src/main/ts/ephox/polaris/pattern/Chars.ts");
/* ESM import */var _Custom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Custom */ "../polaris/src/main/ts/ephox/polaris/pattern/Custom.ts");



/**
 * Tokens have no prefix or suffix
 */ const token = (input)=>{
    return (0,_Custom__WEBPACK_IMPORTED_MODULE_0__.Custom)(input, _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.constant(0), _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.constant(0), _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.Optional.none());
};
/**
 * Words have complex rules as to what a "word break" actually is.
 *
 * These are consumed by the regex and then excluded by prefix/suffix lengths.
 */ const word = (input)=>{
    const regex = `((?:^'?)|(?:` + _Chars__WEBPACK_IMPORTED_MODULE_3__.wordbreak() + `+'?))` + input + `((?:'?$)|(?:'?` + _Chars__WEBPACK_IMPORTED_MODULE_3__.wordbreak() + '+))';
    // ASSUMPTION: There are no groups in their input
    const prefix = (match)=>{
        return match.length > 1 ? match[1].length : 0;
    };
    const suffix = (match)=>{
        return match.length > 2 ? match[2].length : 0;
    };
    return (0,_Custom__WEBPACK_IMPORTED_MODULE_0__.Custom)(regex, prefix, suffix, _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.Optional.none());
};



}),
"../polaris/src/main/ts/ephox/polaris/words/UnicodeData.ts": 
/*!*****************************************************************!*\
  !*** ../polaris/src/main/ts/ephox/polaris/words/UnicodeData.ts ***!
  \*****************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  EMPTY_STRING: () => (EMPTY_STRING),
  PUNCTUATION: () => (PUNCTUATION),
  SETS: () => (SETS),
  WHITESPACE: () => (WHITESPACE),
  characterIndices: () => (characterIndices),
  punctuationStr: () => (punctuationStr)
});
/* eslint-disable max-len */ const punctuationStr = `[~\u{2116}|!-*+-\\/:;?@\\[-\`{}\u00A1\u00AB\u00B7\u00BB\u00BF;\u00B7\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1361-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u3008\u3009\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30\u2E31\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]`;
const regExps = {
    aletter: '[A-Za-z\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F3\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u10A0-\u10C5\u10D0-\u10FA\u10FC\u1100-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F0\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1A00-\u1A16\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BC0-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u24B6-\u24E9\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2D00-\u2D25\u2D30-\u2D65\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u303B\u303C\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790\uA791\uA7A0-\uA7A9\uA7FA-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]',
    midnumlet: `[-'\\.\u2018\u2019\u2024\uFE52\uFF07\uFF0E]`,
    midletter: '[:\u00B7\u00B7\u05F4\u2027\uFE13\uFE55\uFF1A]',
    midnum: "[\xb1+*/,;;\u0589\u060C\u060D\u066C\u07F8\u2044\uFE10\uFE14\uFE50\uFE54\uFF0C\uFF1B]",
    numeric: '[0-9\u0660-\u0669\u066B\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0BE6-\u0BEF\u0C66-\u0C6F\u0CE6-\u0CEF\u0D66-\u0D6F\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F29\u1040-\u1049\u1090-\u1099\u17E0-\u17E9\u1810-\u1819\u1946-\u194F\u19D0-\u19D9\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\uA620-\uA629\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uAA50-\uAA59\uABF0-\uABF9]',
    cr: '\\r',
    lf: '\\n',
    newline: '[\u000B\u000C\u0085\u2028\u2029]',
    extend: '[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0900-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C01-\u0C03\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C82\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D02\u0D03\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B6-\u17D3\u17DD\u180B-\u180D\u18A9\u1920-\u192B\u1930-\u193B\u19B0-\u19C0\u19C8\u19C9\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAA\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2\u1DC0-\u1DE6\u1DFC-\u1DFF\u200C\u200D\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA67C\uA67D\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C4\uA8E0-\uA8F1\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE26\uFF9E\uFF9F]',
    format: '[\u00AD\u0600-\u0603\u06DD\u070F\u17B4\u17B5\u200E\u200F\u202A-\u202E\u2060-\u2064\u206A-\u206F\uFEFF\uFFF9-\uFFFB]',
    katakana: '[\u3031-\u3035\u309B\u309C\u30A0-\u30FA\u30FC-\u30FF\u31F0-\u31FF\u32D0-\u32FE\u3300-\u3357\uFF66-\uFF9D]',
    extendnumlet: '[=_\u203F\u2040\u2054\uFE33\uFE34\uFE4D-\uFE4F\uFF3F\u2200-\u22FF\u003c\u003e]',
    punctuation: punctuationStr
};
/* eslint-enable max-len */ const characterIndices = {
    ALETTER: 0,
    MIDNUMLET: 1,
    MIDLETTER: 2,
    MIDNUM: 3,
    NUMERIC: 4,
    CR: 5,
    LF: 6,
    NEWLINE: 7,
    EXTEND: 8,
    FORMAT: 9,
    KATAKANA: 10,
    EXTENDNUMLET: 11,
    AT: 12,
    OTHER: 13
};
// RegExp objects generated from code point data. Each regex matches a single
// character against a set of Unicode code points. The index of each item in
// this array must match its corresponding code point constant value defined
// above.
const SETS = [
    new RegExp(regExps.aletter),
    new RegExp(regExps.midnumlet),
    new RegExp(regExps.midletter),
    new RegExp(regExps.midnum),
    new RegExp(regExps.numeric),
    new RegExp(regExps.cr),
    new RegExp(regExps.lf),
    new RegExp(regExps.newline),
    new RegExp(regExps.extend),
    new RegExp(regExps.format),
    new RegExp(regExps.katakana),
    new RegExp(regExps.extendnumlet),
    new RegExp('@')
];
const EMPTY_STRING = '';
const PUNCTUATION = new RegExp('^' + regExps.punctuation + '$');
const WHITESPACE = /^\s+$/;



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
"../sand/src/main/ts/ephox/sand/api/SandNode.ts": 
/*!******************************************************!*\
  !*** ../sand/src/main/ts/ephox/sand/api/SandNode.ts ***!
  \******************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  documentPositionContainedBy: () => (documentPositionContainedBy),
  documentPositionPreceding: () => (documentPositionPreceding)
});
/*
 * Most of sand doesn't alter the methods on the object.
 * We're making an exception for Node, because bitwise and is so easy to get wrong.
 *
 * Might be nice to ADT this at some point instead of having individual methods.
 */ const compareDocumentPosition = (a, b, match)=>{
    // Returns: 0 if e1 and e2 are the same node, or a bitmask comparing the positions
    // of nodes e1 and e2 in their documents. See the URL below for bitmask interpretation
    // https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
    // eslint-disable-next-line no-bitwise
    return (a.compareDocumentPosition(b) & match) !== 0;
};
const documentPositionPreceding = (a, b)=>{
    return compareDocumentPosition(a, b, Node.DOCUMENT_POSITION_PRECEDING);
};
const documentPositionContainedBy = (a, b)=>{
    return compareDocumentPosition(a, b, Node.DOCUMENT_POSITION_CONTAINED_BY);
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
"../sugar/src/main/ts/ephox/sugar/api/node/SugarText.ts": 
/*!**************************************************************!*\
  !*** ../sugar/src/main/ts/ephox/sugar/api/node/SugarText.ts ***!
  \**************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  get: () => (get),
  getOption: () => (getOption),
  set: () => (set)
});
/* ESM import */var _impl_NodeValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../impl/NodeValue */ "../sugar/src/main/ts/ephox/sugar/impl/NodeValue.ts");
/* ESM import */var _SugarNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SugarNode */ "../sugar/src/main/ts/ephox/sugar/api/node/SugarNode.ts");


const api = (0,_impl_NodeValue__WEBPACK_IMPORTED_MODULE_0__.NodeValue)(_SugarNode__WEBPACK_IMPORTED_MODULE_1__.isText, 'text');
const get = (element)=>api.get(element);
const getOption = (element)=>api.getOption(element);
const set = (element, value)=>api.set(element, value);



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
"../sugar/src/main/ts/ephox/sugar/impl/NodeValue.ts": 
/*!**********************************************************!*\
  !*** ../sugar/src/main/ts/ephox/sugar/impl/NodeValue.ts ***!
  \**********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  NodeValue: () => (NodeValue)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Optional.ts");

const NodeValue = (is, name)=>{
    const get = (element)=>{
        if (!is(element)) {
            throw new Error('Can only get ' + name + ' value of a ' + name + ' node');
        }
        return getOption(element).getOr('');
    };
    const getOption = (element)=>is(element) ? _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.Optional.from(element.dom.nodeValue) : _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.Optional.none();
    const set = (element, value)=>{
        if (!is(element)) {
            throw new Error('Can only set raw ' + name + ' value of a ' + name + ' node');
        }
        element.dom.nodeValue = value;
    };
    return {
        get,
        getOption,
        set
    };
};


}),
"./src/plugins/searchreplace/main/ts/Plugin.ts": 
/*!*****************************************************!*\
  !*** ./src/plugins/searchreplace/main/ts/Plugin.ts ***!
  \*****************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Cell.ts");
/* ESM import */var tinymce_core_api_PluginManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/PluginManager */ "./lib/globals/tinymce/core/api/PluginManager.js");
/* ESM import */var _api_Api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/Api */ "./src/plugins/searchreplace/main/ts/api/Api.ts");
/* ESM import */var _api_Commands__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/Commands */ "./src/plugins/searchreplace/main/ts/api/Commands.ts");
/* ESM import */var _ui_Buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/Buttons */ "./src/plugins/searchreplace/main/ts/ui/Buttons.ts");





/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>{
    tinymce_core_api_PluginManager__WEBPACK_IMPORTED_MODULE_0__["default"].add('searchreplace', (editor)=>{
        const currentSearchState = (0,_ephox_katamari__WEBPACK_IMPORTED_MODULE_4__.Cell)({
            index: -1,
            count: 0,
            text: '',
            matchCase: false,
            wholeWord: false,
            inSelection: false
        });
        _api_Commands__WEBPACK_IMPORTED_MODULE_2__.register(editor, currentSearchState);
        _ui_Buttons__WEBPACK_IMPORTED_MODULE_3__.register(editor, currentSearchState);
        return _api_Api__WEBPACK_IMPORTED_MODULE_1__.get(editor, currentSearchState);
    });
});


}),
"./src/plugins/searchreplace/main/ts/api/Api.ts": 
/*!******************************************************!*\
  !*** ./src/plugins/searchreplace/main/ts/api/Api.ts ***!
  \******************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  get: () => (get)
});
/* ESM import */var _core_Actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Actions */ "./src/plugins/searchreplace/main/ts/core/Actions.ts");

const get = (editor, currentState)=>{
    const done = (keepEditorSelection)=>{
        return _core_Actions__WEBPACK_IMPORTED_MODULE_0__.done(editor, currentState, keepEditorSelection);
    };
    const find = (text, matchCase, wholeWord, inSelection = false)=>{
        return _core_Actions__WEBPACK_IMPORTED_MODULE_0__.find(editor, currentState, text, matchCase, wholeWord, inSelection);
    };
    const next = ()=>{
        return _core_Actions__WEBPACK_IMPORTED_MODULE_0__.next(editor, currentState);
    };
    const prev = ()=>{
        return _core_Actions__WEBPACK_IMPORTED_MODULE_0__.prev(editor, currentState);
    };
    const replace = (text, forward, all)=>{
        return _core_Actions__WEBPACK_IMPORTED_MODULE_0__.replace(editor, currentState, text, forward, all);
    };
    return {
        done,
        find,
        next,
        prev,
        replace
    };
};



}),
"./src/plugins/searchreplace/main/ts/api/Commands.ts": 
/*!***********************************************************!*\
  !*** ./src/plugins/searchreplace/main/ts/api/Commands.ts ***!
  \***********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  register: () => (register)
});
/* ESM import */var _ui_Dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/Dialog */ "./src/plugins/searchreplace/main/ts/ui/Dialog.ts");

const register = (editor, currentSearchState)=>{
    editor.addCommand('SearchReplace', ()=>{
        _ui_Dialog__WEBPACK_IMPORTED_MODULE_0__.open(editor, currentSearchState);
    });
};



}),
"./src/plugins/searchreplace/main/ts/core/Actions.ts": 
/*!***********************************************************!*\
  !*** ./src/plugins/searchreplace/main/ts/core/Actions.ts ***!
  \***********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  done: () => (done),
  find: () => (find),
  hasNext: () => (hasNext),
  hasPrev: () => (hasPrev),
  next: () => (next),
  prev: () => (prev),
  replace: () => (replace)
});
/* ESM import */var _ephox_polaris__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ephox/polaris */ "../polaris/src/main/ts/ephox/polaris/api/Pattern.ts");
/* ESM import */var tinymce_core_api_Env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/Env */ "./lib/globals/tinymce/core/api/Env.js");
/* ESM import */var tinymce_core_api_util_Tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tinymce/core/api/util/Tools */ "./lib/globals/tinymce/core/api/util/Tools.js");
/* ESM import */var _FindMark__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FindMark */ "./src/plugins/searchreplace/main/ts/core/FindMark.ts");




const getElmIndex = (elm)=>{
    return elm.getAttribute('data-mce-index');
};
const markAllMatches = (editor, currentSearchState, pattern, inSelection)=>{
    const marker = editor.dom.create('span', {
        'data-mce-bogus': 1
    });
    marker.className = 'mce-match-marker';
    const node = editor.getBody();
    done(editor, currentSearchState, false);
    if (inSelection) {
        return _FindMark__WEBPACK_IMPORTED_MODULE_2__.findAndMarkInSelection(editor.dom, pattern, editor.selection, marker);
    } else {
        return _FindMark__WEBPACK_IMPORTED_MODULE_2__.findAndMark(editor.dom, pattern, node, marker);
    }
};
const unwrap = (node)=>{
    const parentNode = node.parentNode;
    if (node.firstChild) {
        parentNode.insertBefore(node.firstChild, node);
    }
    node.parentNode?.removeChild(node);
};
const findSpansByIndex = (editor, index)=>{
    const spans = [];
    const nodes = tinymce_core_api_util_Tools__WEBPACK_IMPORTED_MODULE_1__["default"].toArray(editor.getBody().getElementsByTagName('span'));
    if (nodes.length) {
        for(let i = 0; i < nodes.length; i++){
            const nodeIndex = getElmIndex(nodes[i]);
            if (nodeIndex === null || !nodeIndex.length) {
                continue;
            }
            if (nodeIndex === index.toString()) {
                spans.push(nodes[i]);
            }
        }
    }
    return spans;
};
const moveSelection = (editor, currentSearchState, forward)=>{
    const searchState = currentSearchState.get();
    let testIndex = searchState.index;
    const dom = editor.dom;
    if (forward) {
        if (testIndex + 1 === searchState.count) {
            testIndex = 0;
        } else {
            testIndex++;
        }
    } else {
        if (testIndex - 1 === -1) {
            testIndex = searchState.count - 1;
        } else {
            testIndex--;
        }
    }
    dom.removeClass(findSpansByIndex(editor, searchState.index), 'mce-match-marker-selected');
    const spans = findSpansByIndex(editor, testIndex);
    if (spans.length) {
        dom.addClass(findSpansByIndex(editor, testIndex), 'mce-match-marker-selected');
        editor.selection.scrollIntoView(spans[0]);
        return testIndex;
    }
    return -1;
};
const removeNode = (dom, node)=>{
    const parent = node.parentNode;
    dom.remove(node);
    if (parent && dom.isEmpty(parent)) {
        dom.remove(parent);
    }
};
const escapeSearchText = (text, wholeWord)=>{
    const escapedText = text.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&').replace(/\s/g, '[^\\S\\r\\n\\uFEFF]');
    const wordRegex = '(' + escapedText + ')';
    return wholeWord ? `(?:^|\\s|${_ephox_polaris__WEBPACK_IMPORTED_MODULE_3__.punctuation()})` + wordRegex + `(?=$|\\s|${_ephox_polaris__WEBPACK_IMPORTED_MODULE_3__.punctuation()})` : wordRegex;
};
const find = (editor, currentSearchState, text, matchCase, wholeWord, inSelection)=>{
    const selection = editor.selection;
    const escapedText = escapeSearchText(text, wholeWord);
    const isForwardSelection = selection.isForward();
    const pattern = {
        regex: new RegExp(escapedText, matchCase ? 'g' : 'gi'),
        matchIndex: 1
    };
    const count = markAllMatches(editor, currentSearchState, pattern, inSelection);
    // Safari has a bug whereby splitting text nodes breaks the selection (which is done when marking matches).
    // As such we need to manually reset it after doing a find action. See https://bugs.webkit.org/show_bug.cgi?id=230594
    if (tinymce_core_api_Env__WEBPACK_IMPORTED_MODULE_0__["default"].browser.isSafari()) {
        selection.setRng(selection.getRng(), isForwardSelection);
    }
    if (count) {
        const newIndex = moveSelection(editor, currentSearchState, true);
        currentSearchState.set({
            index: newIndex,
            count,
            text,
            matchCase,
            wholeWord,
            inSelection
        });
    }
    return count;
};
const next = (editor, currentSearchState)=>{
    const index = moveSelection(editor, currentSearchState, true);
    currentSearchState.set({
        ...currentSearchState.get(),
        index
    });
};
const prev = (editor, currentSearchState)=>{
    const index = moveSelection(editor, currentSearchState, false);
    currentSearchState.set({
        ...currentSearchState.get(),
        index
    });
};
const isMatchSpan = (node)=>{
    const matchIndex = getElmIndex(node);
    return matchIndex !== null && matchIndex.length > 0;
};
const replace = (editor, currentSearchState, text, forward, all)=>{
    const searchState = currentSearchState.get();
    const currentIndex = searchState.index;
    let currentMatchIndex, nextIndex = currentIndex;
    forward = forward !== false;
    const node = editor.getBody();
    const nodes = tinymce_core_api_util_Tools__WEBPACK_IMPORTED_MODULE_1__["default"].grep(tinymce_core_api_util_Tools__WEBPACK_IMPORTED_MODULE_1__["default"].toArray(node.getElementsByTagName('span')), isMatchSpan);
    for(let i = 0; i < nodes.length; i++){
        const nodeIndex = getElmIndex(nodes[i]);
        let matchIndex = currentMatchIndex = parseInt(nodeIndex, 10);
        if (all || matchIndex === searchState.index) {
            if (text.length) {
                nodes[i].innerText = text;
                unwrap(nodes[i]);
            } else {
                removeNode(editor.dom, nodes[i]);
            }
            while(nodes[++i]){
                matchIndex = parseInt(getElmIndex(nodes[i]), 10);
                if (matchIndex === currentMatchIndex) {
                    removeNode(editor.dom, nodes[i]);
                } else {
                    i--;
                    break;
                }
            }
            if (forward) {
                nextIndex--;
            }
        } else if (currentMatchIndex > currentIndex) {
            nodes[i].setAttribute('data-mce-index', String(currentMatchIndex - 1));
        }
    }
    currentSearchState.set({
        ...searchState,
        count: all ? 0 : searchState.count - 1,
        index: nextIndex
    });
    if (forward) {
        next(editor, currentSearchState);
    } else {
        prev(editor, currentSearchState);
    }
    return !all && currentSearchState.get().count > 0;
};
const done = (editor, currentSearchState, keepEditorSelection)=>{
    let startContainer;
    let endContainer;
    const searchState = currentSearchState.get();
    const nodes = tinymce_core_api_util_Tools__WEBPACK_IMPORTED_MODULE_1__["default"].toArray(editor.getBody().getElementsByTagName('span'));
    for(let i = 0; i < nodes.length; i++){
        const nodeIndex = getElmIndex(nodes[i]);
        if (nodeIndex !== null && nodeIndex.length) {
            if (nodeIndex === searchState.index.toString()) {
                // Note: The first child of the span node will be the highlighted text node
                if (!startContainer) {
                    startContainer = nodes[i].firstChild;
                }
                endContainer = nodes[i].firstChild;
            }
            unwrap(nodes[i]);
        }
    }
    // Reset the search state
    currentSearchState.set({
        ...searchState,
        index: -1,
        count: 0,
        text: ''
    });
    if (startContainer && endContainer) {
        const rng = editor.dom.createRng();
        rng.setStart(startContainer, 0);
        rng.setEnd(endContainer, endContainer.data.length);
        if (keepEditorSelection !== false) {
            editor.selection.setRng(rng);
        }
        return rng;
    } else {
        return undefined;
    }
};
const hasNext = (editor, currentSearchState)=>currentSearchState.get().count > 1;
const hasPrev = (editor, currentSearchState)=>currentSearchState.get().count > 1;



}),
"./src/plugins/searchreplace/main/ts/core/FindMark.ts": 
/*!************************************************************!*\
  !*** ./src/plugins/searchreplace/main/ts/core/FindMark.ts ***!
  \************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  findAndMark: () => (findAndMark),
  findAndMarkInSelection: () => (findAndMarkInSelection)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Arr.ts");
/* ESM import */var _ephox_sugar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ephox/sugar */ "../sugar/src/main/ts/ephox/sugar/api/node/SugarText.ts");
/* ESM import */var _ephox_sugar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ephox/sugar */ "../sugar/src/main/ts/ephox/sugar/api/node/SugarElement.ts");
/* ESM import */var _ephox_sugar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ephox/sugar */ "../sugar/src/main/ts/ephox/sugar/api/properties/Attribute.ts");
/* ESM import */var _ephox_sugar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ephox/sugar */ "../sugar/src/main/ts/ephox/sugar/api/dom/Insert.ts");
/* ESM import */var _TextCollect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextCollect */ "./src/plugins/searchreplace/main/ts/core/TextCollect.ts");
/* ESM import */var _TextPosition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextPosition */ "./src/plugins/searchreplace/main/ts/core/TextPosition.ts");




const find = (pattern, sections)=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.bind(sections, (section)=>{
        const elements = section.elements;
        const content = _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.map(elements, _ephox_sugar__WEBPACK_IMPORTED_MODULE_3__.get).join('');
        const positions = _TextPosition__WEBPACK_IMPORTED_MODULE_1__.find(content, pattern, section.sOffset, content.length - section.fOffset);
        return _TextPosition__WEBPACK_IMPORTED_MODULE_1__.extract(elements, positions);
    });
const mark = (matches, replacementNode)=>{
    // Walk backwards and mark the positions
    // Note: We need to walk backwards so the position indexes don't change
    _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.eachr(matches, (match, idx)=>{
        _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.eachr(match, (pos)=>{
            const wrapper = _ephox_sugar__WEBPACK_IMPORTED_MODULE_4__.SugarElement.fromDom(replacementNode.cloneNode(false));
            _ephox_sugar__WEBPACK_IMPORTED_MODULE_5__.set(wrapper, 'data-mce-index', idx);
            const textNode = pos.element.dom;
            if (textNode.length === pos.finish && pos.start === 0) {
                _ephox_sugar__WEBPACK_IMPORTED_MODULE_6__.wrap(pos.element, wrapper);
            } else {
                if (textNode.length !== pos.finish) {
                    textNode.splitText(pos.finish);
                }
                const matchNode = textNode.splitText(pos.start);
                _ephox_sugar__WEBPACK_IMPORTED_MODULE_6__.wrap(_ephox_sugar__WEBPACK_IMPORTED_MODULE_4__.SugarElement.fromDom(matchNode), wrapper);
            }
        });
    });
};
const findAndMark = (dom, pattern, node, replacementNode)=>{
    const textSections = _TextCollect__WEBPACK_IMPORTED_MODULE_0__.fromNode(dom, node);
    const matches = find(pattern, textSections);
    mark(matches, replacementNode);
    return matches.length;
};
const findAndMarkInSelection = (dom, pattern, selection, replacementNode)=>{
    const bookmark = selection.getBookmark();
    // Handle table cell selection as the table plugin enables
    // you to fake select table cells and perform actions on them
    const nodes = dom.select('td[data-mce-selected],th[data-mce-selected]');
    const textSections = nodes.length > 0 ? _TextCollect__WEBPACK_IMPORTED_MODULE_0__.fromNodes(dom, nodes) : _TextCollect__WEBPACK_IMPORTED_MODULE_0__.fromRng(dom, selection.getRng());
    // Find and mark matches
    const matches = find(pattern, textSections);
    mark(matches, replacementNode);
    // Restore the selection
    selection.moveToBookmark(bookmark);
    return matches.length;
};



}),
"./src/plugins/searchreplace/main/ts/core/TextCollect.ts": 
/*!***************************************************************!*\
  !*** ./src/plugins/searchreplace/main/ts/core/TextCollect.ts ***!
  \***************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  fromNode: () => (fromNode),
  fromNodes: () => (fromNodes),
  fromRng: () => (fromRng)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Obj.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Fun.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Arr.ts");
/* ESM import */var _ephox_sand__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ephox/sand */ "../sand/src/main/ts/ephox/sand/api/SandNode.ts");
/* ESM import */var _ephox_sugar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ephox/sugar */ "../sugar/src/main/ts/ephox/sugar/api/search/Traverse.ts");
/* ESM import */var _ephox_sugar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ephox/sugar */ "../sugar/src/main/ts/ephox/sugar/api/node/SugarElement.ts");
/* ESM import */var _ephox_sugar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ephox/sugar */ "../sugar/src/main/ts/ephox/sugar/api/search/SelectorFilter.ts");
/* ESM import */var tinymce_core_api_dom_TreeWalker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/dom/TreeWalker */ "./lib/globals/tinymce/core/api/dom/TreeWalker.js");




const isSimpleBoundary = (dom, node)=>dom.isBlock(node) || _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.has(dom.schema.getVoidElements(), node.nodeName);
const isContentEditableFalse = (dom, node)=>!dom.isEditable(node);
const isContentEditableTrueInCef = (dom, node)=>dom.getContentEditable(node) === 'true' && node.parentNode && !dom.isEditable(node.parentNode);
const isHidden = (dom, node)=>!dom.isBlock(node) && _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.has(dom.schema.getWhitespaceElements(), node.nodeName);
const isBoundary = (dom, node)=>isSimpleBoundary(dom, node) || isContentEditableFalse(dom, node) || isHidden(dom, node) || isContentEditableTrueInCef(dom, node);
const isText = (node)=>node.nodeType === 3;
const nuSection = ()=>({
        sOffset: 0,
        fOffset: 0,
        elements: []
    });
const toLeaf = (node, offset)=>_ephox_sugar__WEBPACK_IMPORTED_MODULE_2__.leaf(_ephox_sugar__WEBPACK_IMPORTED_MODULE_3__.SugarElement.fromDom(node), offset);
const walk = (dom, walkerFn, startNode, callbacks, endNode, skipStart = true)=>{
    let next = skipStart ? walkerFn(false) : startNode;
    while(next){
        // Walk over content editable or hidden elements
        const isCefNode = isContentEditableFalse(dom, next);
        if (isCefNode || isHidden(dom, next)) {
            const stopWalking = isCefNode ? callbacks.cef(next) : callbacks.boundary(next);
            if (stopWalking) {
                break;
            } else {
                next = walkerFn(true);
                continue;
            }
        } else if (isSimpleBoundary(dom, next)) {
            if (callbacks.boundary(next)) {
                break;
            }
        } else if (isText(next)) {
            callbacks.text(next);
        }
        if (next === endNode) {
            break;
        } else {
            next = walkerFn(false);
        }
    }
};
const collectTextToBoundary = (dom, section, node, rootNode, forwards)=>{
    // Don't bother collecting text nodes if we're already at a boundary
    if (isBoundary(dom, node)) {
        return;
    }
    const rootBlock = dom.getParent(rootNode, dom.isBlock) ?? dom.getRoot();
    const walker = new tinymce_core_api_dom_TreeWalker__WEBPACK_IMPORTED_MODULE_0__["default"](node, rootBlock);
    const walkerFn = forwards ? walker.next.bind(walker) : walker.prev.bind(walker);
    // Walk over and add text nodes to the section and increase the offsets
    // so we know to ignore the additional text when matching
    walk(dom, walkerFn, node, {
        boundary: _ephox_katamari__WEBPACK_IMPORTED_MODULE_4__.always,
        cef: _ephox_katamari__WEBPACK_IMPORTED_MODULE_4__.always,
        text: (next)=>{
            if (forwards) {
                section.fOffset += next.length;
            } else {
                section.sOffset += next.length;
            }
            section.elements.push(_ephox_sugar__WEBPACK_IMPORTED_MODULE_3__.SugarElement.fromDom(next));
        }
    });
};
const collect = (dom, rootNode, startNode, endNode, callbacks, skipStart = true)=>{
    const walker = new tinymce_core_api_dom_TreeWalker__WEBPACK_IMPORTED_MODULE_0__["default"](startNode, rootNode);
    const sections = [];
    let current = nuSection();
    // Find any text between the start node and the closest boundary
    collectTextToBoundary(dom, current, startNode, rootNode, false);
    const finishSection = ()=>{
        if (current.elements.length > 0) {
            sections.push(current);
            current = nuSection();
        }
        return false;
    };
    // Collect all the text nodes in the specified range and create sections from the
    // boundaries within the range
    walk(dom, walker.next.bind(walker), startNode, {
        boundary: finishSection,
        cef: (node)=>{
            finishSection();
            // Collect additional nested contenteditable true content
            if (callbacks) {
                sections.push(...callbacks.cef(node));
            }
            return false;
        },
        text: (next)=>{
            current.elements.push(_ephox_sugar__WEBPACK_IMPORTED_MODULE_3__.SugarElement.fromDom(next));
            if (callbacks) {
                callbacks.text(next, current);
            }
        }
    }, endNode, skipStart);
    // Find any text between the end node and the closest boundary, then finalise the section
    if (endNode) {
        collectTextToBoundary(dom, current, endNode, rootNode, true);
    }
    finishSection();
    return sections;
};
const collectRangeSections = (dom, rng)=>{
    const start = toLeaf(rng.startContainer, rng.startOffset);
    const startNode = start.element.dom;
    const end = toLeaf(rng.endContainer, rng.endOffset);
    const endNode = end.element.dom;
    return collect(dom, rng.commonAncestorContainer, startNode, endNode, {
        text: (node, section)=>{
            // Set the start/end offset of the section
            if (node === endNode) {
                section.fOffset += node.length - end.offset;
            } else if (node === startNode) {
                section.sOffset += start.offset;
            }
        },
        cef: (node)=>{
            // Collect the sections and then order them appropriately, as nested sections maybe out of order
            // TODO: See if we can improve this to avoid the sort overhead
            const sections = _ephox_katamari__WEBPACK_IMPORTED_MODULE_5__.bind(_ephox_sugar__WEBPACK_IMPORTED_MODULE_6__.descendants(_ephox_sugar__WEBPACK_IMPORTED_MODULE_3__.SugarElement.fromDom(node), '*[contenteditable=true]'), (e)=>{
                const ceTrueNode = e.dom;
                return collect(dom, ceTrueNode, ceTrueNode);
            });
            return _ephox_katamari__WEBPACK_IMPORTED_MODULE_5__.sort(sections, (a, b)=>_ephox_sand__WEBPACK_IMPORTED_MODULE_7__.documentPositionPreceding(a.elements[0].dom, b.elements[0].dom) ? 1 : -1);
        }
    }, false);
};
const fromRng = (dom, rng)=>rng.collapsed ? [] : collectRangeSections(dom, rng);
const fromNode = (dom, node)=>{
    const rng = dom.createRng();
    rng.selectNode(node);
    return fromRng(dom, rng);
};
const fromNodes = (dom, nodes)=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_5__.bind(nodes, (node)=>fromNode(dom, node));



}),
"./src/plugins/searchreplace/main/ts/core/TextPosition.ts": 
/*!****************************************************************!*\
  !*** ./src/plugins/searchreplace/main/ts/core/TextPosition.ts ***!
  \****************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  extract: () => (extract),
  find: () => (find)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Arr.ts");
/* ESM import */var _ephox_sugar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ephox/sugar */ "../sugar/src/main/ts/ephox/sugar/api/node/SugarText.ts");


const find = (text, pattern, start = 0, finish = text.length)=>{
    const regex = pattern.regex;
    regex.lastIndex = start;
    const results = [];
    let match;
    while(match = regex.exec(text)){
        const matchedText = match[pattern.matchIndex];
        const matchStart = match.index + match[0].indexOf(matchedText);
        const matchFinish = matchStart + matchedText.length;
        // Stop finding matches if we've hit the finish mark
        if (matchFinish > finish) {
            break;
        }
        results.push({
            start: matchStart,
            finish: matchFinish
        });
        regex.lastIndex = matchFinish;
    }
    return results;
};
const extract = (elements, matches)=>{
    // Walk over each text node and compare with the matches
    const nodePositions = _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.foldl(elements, (acc, element)=>{
        const content = _ephox_sugar__WEBPACK_IMPORTED_MODULE_1__.get(element);
        const start = acc.last;
        const finish = start + content.length;
        // Find positions for any matches in the current text node
        const positions = _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.bind(matches, (match, matchIdx)=>{
            // Check to see if the match overlaps with the text position
            if (match.start < finish && match.finish > start) {
                return [
                    {
                        element,
                        start: Math.max(start, match.start) - start,
                        finish: Math.min(finish, match.finish) - start,
                        matchId: matchIdx
                    }
                ];
            } else {
                return [];
            }
        });
        return {
            results: acc.results.concat(positions),
            last: finish
        };
    }, {
        results: [],
        last: 0
    }).results;
    // Group the positions by the match id
    return _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.groupBy(nodePositions, (position)=>position.matchId);
};



}),
"./src/plugins/searchreplace/main/ts/ui/Buttons.ts": 
/*!*********************************************************!*\
  !*** ./src/plugins/searchreplace/main/ts/ui/Buttons.ts ***!
  \*********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  register: () => (register)
});
/* ESM import */var _Dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dialog */ "./src/plugins/searchreplace/main/ts/ui/Dialog.ts");

const showDialog = (editor, currentSearchState)=>()=>{
        _Dialog__WEBPACK_IMPORTED_MODULE_0__.open(editor, currentSearchState);
    };
const register = (editor, currentSearchState)=>{
    editor.ui.registry.addMenuItem('searchreplace', {
        text: 'Find and replace...',
        shortcut: 'Meta+F',
        onAction: showDialog(editor, currentSearchState),
        icon: 'search'
    });
    editor.ui.registry.addButton('searchreplace', {
        tooltip: 'Find and replace',
        onAction: showDialog(editor, currentSearchState),
        icon: 'search',
        shortcut: 'Meta+F'
    });
    editor.shortcuts.add('Meta+F', '', showDialog(editor, currentSearchState));
};



}),
"./src/plugins/searchreplace/main/ts/ui/Dialog.ts": 
/*!********************************************************!*\
  !*** ./src/plugins/searchreplace/main/ts/ui/Dialog.ts ***!
  \********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  open: () => (open)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Singleton.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Arr.ts");
/* ESM import */var tinymce_core_api_Env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/Env */ "./lib/globals/tinymce/core/api/Env.js");
/* ESM import */var tinymce_core_api_util_Tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tinymce/core/api/util/Tools */ "./lib/globals/tinymce/core/api/util/Tools.js");
/* ESM import */var _core_Actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/Actions */ "./src/plugins/searchreplace/main/ts/core/Actions.ts");




const open = (editor, currentSearchState)=>{
    const dialogApi = _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__.value();
    editor.undoManager.add();
    const selectedText = tinymce_core_api_util_Tools__WEBPACK_IMPORTED_MODULE_1__["default"].trim(editor.selection.getContent({
        format: 'text'
    }));
    const updateButtonStates = (api)=>{
        api.setEnabled('next', _core_Actions__WEBPACK_IMPORTED_MODULE_2__.hasNext(editor, currentSearchState));
        api.setEnabled('prev', _core_Actions__WEBPACK_IMPORTED_MODULE_2__.hasPrev(editor, currentSearchState));
    };
    const updateSearchState = (api)=>{
        const data = api.getData();
        const current = currentSearchState.get();
        currentSearchState.set({
            ...current,
            matchCase: data.matchcase,
            wholeWord: data.wholewords,
            inSelection: data.inselection
        });
    };
    const disableAll = (api, disable)=>{
        const buttons = [
            'replace',
            'replaceall',
            'prev',
            'next'
        ];
        const toggle = (name)=>api.setEnabled(name, !disable);
        _ephox_katamari__WEBPACK_IMPORTED_MODULE_4__.each(buttons, toggle);
    };
    const toggleNotFoundAlert = (isVisible, api)=>{
        api.redial(getDialogSpec(isVisible, api.getData()));
    };
    // Temporarily workaround for iOS/iPadOS dialog placement to hide the keyboard
    // TODO: Remove in 5.2 once iOS fixed positioning is fixed. See TINY-4441
    const focusButtonIfRequired = (api, name)=>{
        if (tinymce_core_api_Env__WEBPACK_IMPORTED_MODULE_0__["default"].browser.isSafari() && tinymce_core_api_Env__WEBPACK_IMPORTED_MODULE_0__["default"].deviceType.isTouch() && (name === 'find' || name === 'replace' || name === 'replaceall')) {
            api.focus(name);
        }
    };
    const reset = (api)=>{
        // Clean up the markers if required
        _core_Actions__WEBPACK_IMPORTED_MODULE_2__.done(editor, currentSearchState, false);
        // Disable the buttons
        disableAll(api, true);
        updateButtonStates(api);
    };
    const doFind = (api)=>{
        const data = api.getData();
        const last = currentSearchState.get();
        if (!data.findtext.length) {
            reset(api);
            return;
        }
        // Same search text, so treat the find as a next click instead
        if (last.text === data.findtext && last.matchCase === data.matchcase && last.wholeWord === data.wholewords) {
            _core_Actions__WEBPACK_IMPORTED_MODULE_2__.next(editor, currentSearchState);
        } else {
            // Find new matches
            const count = _core_Actions__WEBPACK_IMPORTED_MODULE_2__.find(editor, currentSearchState, data.findtext, data.matchcase, data.wholewords, data.inselection);
            if (count <= 0) {
                toggleNotFoundAlert(true, api);
            }
            disableAll(api, count === 0);
        }
        updateButtonStates(api);
    };
    const initialState = currentSearchState.get();
    const initialData = {
        findtext: selectedText,
        replacetext: '',
        wholewords: initialState.wholeWord,
        matchcase: initialState.matchCase,
        inselection: initialState.inSelection
    };
    const getPanelItems = (error)=>{
        const items = [
            {
                type: 'label',
                label: 'Find',
                for: 'findtext',
                items: [
                    {
                        type: 'bar',
                        items: [
                            {
                                type: 'input',
                                name: 'findtext',
                                maximized: true,
                                inputMode: 'search'
                            },
                            {
                                type: 'button',
                                name: 'prev',
                                text: 'Previous',
                                icon: 'action-prev',
                                enabled: false,
                                borderless: true
                            },
                            {
                                type: 'button',
                                name: 'next',
                                text: 'Next',
                                icon: 'action-next',
                                enabled: false,
                                borderless: true
                            }
                        ]
                    }
                ]
            },
            {
                type: 'input',
                name: 'replacetext',
                label: 'Replace with',
                inputMode: 'search'
            }
        ];
        if (error) {
            items.push({
                type: 'alertbanner',
                level: 'error',
                text: 'Could not find the specified string.',
                icon: 'warning'
            });
        }
        return items;
    };
    const getDialogSpec = (showNoMatchesAlertBanner, initialData)=>({
            title: 'Find and Replace',
            size: 'normal',
            body: {
                type: 'panel',
                items: getPanelItems(showNoMatchesAlertBanner)
            },
            buttons: [
                {
                    type: 'menu',
                    name: 'options',
                    icon: 'preferences',
                    tooltip: 'Preferences',
                    align: 'start',
                    items: [
                        {
                            type: 'togglemenuitem',
                            name: 'matchcase',
                            text: 'Match case'
                        },
                        {
                            type: 'togglemenuitem',
                            name: 'wholewords',
                            text: 'Find whole words only'
                        },
                        {
                            type: 'togglemenuitem',
                            name: 'inselection',
                            text: 'Find in selection'
                        }
                    ]
                },
                {
                    type: 'custom',
                    name: 'find',
                    text: 'Find',
                    primary: true
                },
                {
                    type: 'custom',
                    name: 'replace',
                    text: 'Replace',
                    enabled: false
                },
                {
                    type: 'custom',
                    name: 'replaceall',
                    text: 'Replace all',
                    enabled: false
                }
            ],
            initialData,
            onChange: (api, details)=>{
                if (showNoMatchesAlertBanner) {
                    toggleNotFoundAlert(false, api);
                }
                if (details.name === 'findtext' && currentSearchState.get().count > 0) {
                    reset(api);
                }
            },
            onAction: (api, details)=>{
                const data = api.getData();
                switch(details.name){
                    case 'find':
                        doFind(api);
                        break;
                    case 'replace':
                        if (!_core_Actions__WEBPACK_IMPORTED_MODULE_2__.replace(editor, currentSearchState, data.replacetext)) {
                            reset(api);
                        } else {
                            updateButtonStates(api);
                        }
                        break;
                    case 'replaceall':
                        _core_Actions__WEBPACK_IMPORTED_MODULE_2__.replace(editor, currentSearchState, data.replacetext, true, true);
                        reset(api);
                        break;
                    case 'prev':
                        _core_Actions__WEBPACK_IMPORTED_MODULE_2__.prev(editor, currentSearchState);
                        updateButtonStates(api);
                        break;
                    case 'next':
                        _core_Actions__WEBPACK_IMPORTED_MODULE_2__.next(editor, currentSearchState);
                        updateButtonStates(api);
                        break;
                    case 'matchcase':
                    case 'wholewords':
                    case 'inselection':
                        toggleNotFoundAlert(false, api);
                        updateSearchState(api);
                        reset(api);
                        break;
                    default:
                        break;
                }
                focusButtonIfRequired(api, details.name);
            },
            onSubmit: (api)=>{
                doFind(api);
                focusButtonIfRequired(api, 'find');
            },
            onClose: ()=>{
                editor.focus();
                _core_Actions__WEBPACK_IMPORTED_MODULE_2__.done(editor, currentSearchState);
                editor.undoManager.add();
            }
        });
    dialogApi.set(editor.windowManager.open(getDialogSpec(false, initialData), {
        inline: 'toolbar'
    }));
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

/*!***************************************************!*\
  !*** ./src/plugins/searchreplace/main/ts/Main.ts ***!
  \***************************************************/
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _Plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Plugin */ "./src/plugins/searchreplace/main/ts/Plugin.ts");

(0,_Plugin__WEBPACK_IMPORTED_MODULE_0__["default"])(); /** *****
 * DO NOT EXPORT ANYTHING
 *
 * IF YOU DO ROLLUP WILL LEAVE A GLOBAL ON THE PAGE
 *******/ 

})();

})()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdGlueW1jZS9wbHVnaW5zL3NlYXJjaHJlcGxhY2UvcGx1Z2luLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGlueW1jZS8uL2xpYi9nbG9iYWxzL3RpbnltY2UvY29yZS9hcGkvRW52LmpzIiwid2VicGFjazovL3RpbnltY2UvLi9saWIvZ2xvYmFscy90aW55bWNlL2NvcmUvYXBpL1BsdWdpbk1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL2xpYi9nbG9iYWxzL3RpbnltY2UvY29yZS9hcGkvZG9tL1RyZWVXYWxrZXIuanMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL2xpYi9nbG9iYWxzL3RpbnltY2UvY29yZS9hcGkvdXRpbC9Ub29scy5qcyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL2thdGFtYXJpL3NyYy9tYWluL3RzL2VwaG94L2thdGFtYXJpL2FwaS9BcnIudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9rYXRhbWFyaS9zcmMvbWFpbi90cy9lcGhveC9rYXRhbWFyaS9hcGkvQ2VsbC50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL2thdGFtYXJpL3NyYy9tYWluL3RzL2VwaG94L2thdGFtYXJpL2FwaS9GdW4udHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9rYXRhbWFyaS9zcmMvbWFpbi90cy9lcGhveC9rYXRhbWFyaS9hcGkvR2xvYmFsLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4va2F0YW1hcmkvc3JjL21haW4vdHMvZXBob3gva2F0YW1hcmkvYXBpL09iai50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL2thdGFtYXJpL3NyYy9tYWluL3RzL2VwaG94L2thdGFtYXJpL2FwaS9PcHRpb25hbC50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL2thdGFtYXJpL3NyYy9tYWluL3RzL2VwaG94L2thdGFtYXJpL2FwaS9SZWdleC50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL2thdGFtYXJpL3NyYy9tYWluL3RzL2VwaG94L2thdGFtYXJpL2FwaS9SZXNvbHZlLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4va2F0YW1hcmkvc3JjL21haW4vdHMvZXBob3gva2F0YW1hcmkvYXBpL1NpbmdsZXRvbi50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL2thdGFtYXJpL3NyYy9tYWluL3RzL2VwaG94L2thdGFtYXJpL2FwaS9UeXBlLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4va2F0YW1hcmkvc3JjL21haW4vdHMvZXBob3gva2F0YW1hcmkvYXBpL1VuaWNvZGUudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9wb2xhcmlzL3NyYy9tYWluL3RzL2VwaG94L3BvbGFyaXMvYXBpL1BhdHRlcm4udHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9wb2xhcmlzL3NyYy9tYWluL3RzL2VwaG94L3BvbGFyaXMvcGF0dGVybi9DaGFycy50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL3BvbGFyaXMvc3JjL21haW4vdHMvZXBob3gvcG9sYXJpcy9wYXR0ZXJuL0N1c3RvbS50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL3BvbGFyaXMvc3JjL21haW4vdHMvZXBob3gvcG9sYXJpcy9wYXR0ZXJuL1NhZmUudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9wb2xhcmlzL3NyYy9tYWluL3RzL2VwaG94L3BvbGFyaXMvcGF0dGVybi9VbnNhZmUudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9wb2xhcmlzL3NyYy9tYWluL3RzL2VwaG94L3BvbGFyaXMvd29yZHMvVW5pY29kZURhdGEudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9zYW5kL3NyYy9tYWluL3RzL2VwaG94L3NhbmQvYXBpL1NhbmRIVE1MRWxlbWVudC50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL3NhbmQvc3JjL21haW4vdHMvZXBob3gvc2FuZC9hcGkvU2FuZE5vZGUudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9zYW5kL3NyYy9tYWluL3RzL2VwaG94L3NhbmQvdXRpbC9HbG9iYWwudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9zdWdhci9zcmMvbWFpbi90cy9lcGhveC9zdWdhci9hbGllbi9SZWN1cnNlLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4vc3VnYXIvc3JjL21haW4vdHMvZXBob3gvc3VnYXIvYXBpL2RvbS9Db21wYXJlLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4vc3VnYXIvc3JjL21haW4vdHMvZXBob3gvc3VnYXIvYXBpL2RvbS9JbnNlcnQudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9zdWdhci9zcmMvbWFpbi90cy9lcGhveC9zdWdhci9hcGkvbm9kZS9Ob2RlVHlwZXMudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9zdWdhci9zcmMvbWFpbi90cy9lcGhveC9zdWdhci9hcGkvbm9kZS9TdWdhckJvZHkudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9zdWdhci9zcmMvbWFpbi90cy9lcGhveC9zdWdhci9hcGkvbm9kZS9TdWdhckVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9zdWdhci9zcmMvbWFpbi90cy9lcGhveC9zdWdhci9hcGkvbm9kZS9TdWdhckhlYWQudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9zdWdhci9zcmMvbWFpbi90cy9lcGhveC9zdWdhci9hcGkvbm9kZS9TdWdhck5vZGUudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9zdWdhci9zcmMvbWFpbi90cy9lcGhveC9zdWdhci9hcGkvbm9kZS9TdWdhclNoYWRvd0RvbS50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL3N1Z2FyL3NyYy9tYWluL3RzL2VwaG94L3N1Z2FyL2FwaS9ub2RlL1N1Z2FyVGV4dC50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL3N1Z2FyL3NyYy9tYWluL3RzL2VwaG94L3N1Z2FyL2FwaS9wcm9wZXJ0aWVzL0F0dHJpYnV0ZS50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL3N1Z2FyL3NyYy9tYWluL3RzL2VwaG94L3N1Z2FyL2FwaS9zZWFyY2gvUHJlZGljYXRlRmlsdGVyLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4vc3VnYXIvc3JjL21haW4vdHMvZXBob3gvc3VnYXIvYXBpL3NlYXJjaC9TZWxlY3RvckZpbHRlci50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL3N1Z2FyL3NyYy9tYWluL3RzL2VwaG94L3N1Z2FyL2FwaS9zZWFyY2gvU2VsZWN0b3JzLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4vc3VnYXIvc3JjL21haW4vdHMvZXBob3gvc3VnYXIvYXBpL3NlYXJjaC9UcmF2ZXJzZS50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL3N1Z2FyL3NyYy9tYWluL3RzL2VwaG94L3N1Z2FyL2ltcGwvTm9kZVZhbHVlLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9zZWFyY2hyZXBsYWNlL21haW4vdHMvUGx1Z2luLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9zZWFyY2hyZXBsYWNlL21haW4vdHMvYXBpL0FwaS50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvc2VhcmNocmVwbGFjZS9tYWluL3RzL2FwaS9Db21tYW5kcy50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvc2VhcmNocmVwbGFjZS9tYWluL3RzL2NvcmUvQWN0aW9ucy50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvc2VhcmNocmVwbGFjZS9tYWluL3RzL2NvcmUvRmluZE1hcmsudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL3NlYXJjaHJlcGxhY2UvbWFpbi90cy9jb3JlL1RleHRDb2xsZWN0LnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9zZWFyY2hyZXBsYWNlL21haW4vdHMvY29yZS9UZXh0UG9zaXRpb24udHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL3NlYXJjaHJlcGxhY2UvbWFpbi90cy91aS9CdXR0b25zLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9zZWFyY2hyZXBsYWNlL21haW4vdHMvdWkvRGlhbG9nLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4vLi4vbm9kZV9tb2R1bGVzL0BlcGhveC9kaXNwdXRlL3NyYy9tYWluL3RzL2FwaS9FcS50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uLy4uL25vZGVfbW9kdWxlcy9AZXBob3gvZGlzcHV0ZS9zcmMvbWFpbi90cy9jb3JlL0FycmF5VXRpbC50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uLy4uL25vZGVfbW9kdWxlcy9AZXBob3gvZGlzcHV0ZS9zcmMvbWFpbi90cy9jb3JlL1R5cGUudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lX3Byb3BlcnR5X2dldHRlcnMiLCJ3ZWJwYWNrOi8vdGlueW1jZS93ZWJwYWNrL3J1bnRpbWUvaGFzX293bl9wcm9wZXJ0eSIsIndlYnBhY2s6Ly90aW55bWNlL3dlYnBhY2svcnVudGltZS9tYWtlX25hbWVzcGFjZV9vYmplY3QiLCJ3ZWJwYWNrOi8vdGlueW1jZS93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3ZlcnNpb24iLCJ3ZWJwYWNrOi8vdGlueW1jZS93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3VuaXF1ZV9pZCIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvc2VhcmNocmVwbGFjZS9tYWluL3RzL01haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGdsb2JhbCA9IHRpbnltY2UudXRpbC5Ub29scy5yZXNvbHZlKCd0aW55bWNlLkVudicpO1xuXG5leHBvcnQgZGVmYXVsdCBnbG9iYWw7XG5leHBvcnQgdmFyIEVudiA9IGdsb2JhbDtcbiIsInZhciBnbG9iYWwgPSB0aW55bWNlLnV0aWwuVG9vbHMucmVzb2x2ZSgndGlueW1jZS5QbHVnaW5NYW5hZ2VyJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGdsb2JhbDtcbmV4cG9ydCB2YXIgUGx1Z2luTWFuYWdlciA9IGdsb2JhbDtcbiIsInZhciBnbG9iYWwgPSB0aW55bWNlLnV0aWwuVG9vbHMucmVzb2x2ZSgndGlueW1jZS5kb20uVHJlZVdhbGtlcicpO1xuXG5leHBvcnQgZGVmYXVsdCBnbG9iYWw7XG5leHBvcnQgdmFyIFRyZWVXYWxrZXIgPSBnbG9iYWw7XG4iLCJ2YXIgZ2xvYmFsID0gdGlueW1jZS51dGlsLlRvb2xzLnJlc29sdmUoJ3RpbnltY2UudXRpbC5Ub29scycpO1xuXG5leHBvcnQgZGVmYXVsdCBnbG9iYWw7XG5leHBvcnQgdmFyIFRvb2xzID0gZ2xvYmFsO1xuIiwiaW1wb3J0IHsgRXEgfSBmcm9tICdAZXBob3gvZGlzcHV0ZSc7XG5cbmltcG9ydCAqIGFzIEZ1biBmcm9tICcuL0Z1bic7XG5pbXBvcnQgeyBPcHRpb25hbCB9IGZyb20gJy4vT3B0aW9uYWwnO1xuaW1wb3J0ICogYXMgVHlwZSBmcm9tICcuL1R5cGUnO1xuXG50eXBlIEFycmF5TW9ycGhpc208VCwgVT4gPSAoeDogVCwgaTogbnVtYmVyKSA9PiBVO1xudHlwZSBBcnJheUd1YXJkUHJlZGljYXRlPFQsIFUgZXh0ZW5kcyBUPiA9ICh4OiBULCBpOiBudW1iZXIpID0+IHggaXMgVTtcbnR5cGUgQXJyYXlQcmVkaWNhdGU8VD4gPSBBcnJheU1vcnBoaXNtPFQsIGJvb2xlYW4+O1xudHlwZSBDb21wYXJhdG9yPFQ+ID0gKGE6IFQsIGI6IFQpID0+IG51bWJlcjtcblxuY29uc3QgbmF0aXZlU2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5jb25zdCBuYXRpdmVJbmRleE9mID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2Y7XG5jb25zdCBuYXRpdmVQdXNoID0gQXJyYXkucHJvdG90eXBlLnB1c2g7XG5cbmNvbnN0IHJhd0luZGV4T2YgPSA8VD4gKHRzOiBBcnJheUxpa2U8VD4sIHQ6IFQpOiBudW1iZXIgPT5cbiAgbmF0aXZlSW5kZXhPZi5jYWxsKHRzLCB0KTtcblxuZXhwb3J0IGNvbnN0IGluZGV4T2YgPSA8VCA9IGFueT4oeHM6IEFycmF5TGlrZTxUPiwgeDogVCk6IE9wdGlvbmFsPG51bWJlcj4gPT4ge1xuICAvLyBUaGUgcmF3SW5kZXhPZiBtZXRob2QgZG9lcyBub3Qgd3JhcCB1cCBpbiBhbiBvcHRpb24uIFRoaXMgaXMgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMuXG4gIGNvbnN0IHIgPSByYXdJbmRleE9mKHhzLCB4KTtcbiAgcmV0dXJuIHIgPT09IC0xID8gT3B0aW9uYWwubm9uZSgpIDogT3B0aW9uYWwuc29tZShyKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb250YWlucyA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCB4OiBUKTogYm9vbGVhbiA9PiByYXdJbmRleE9mKHhzLCB4KSA+IC0xO1xuXG5leHBvcnQgY29uc3QgZXhpc3RzID0gPFQgPSBhbnk+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+KTogYm9vbGVhbiA9PiB7XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICBpZiAocHJlZCh4LCBpKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IGNvbnN0IHJhbmdlID0gPFQ+KG51bTogbnVtYmVyLCBmOiAoYTogbnVtYmVyKSA9PiBUKTogVFtdID0+IHtcbiAgY29uc3QgcjogVFtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtOyBpKyspIHtcbiAgICByLnB1c2goZihpKSk7XG4gIH1cbiAgcmV0dXJuIHI7XG59O1xuXG4vLyBJdCdzIGEgdG90YWwgbWljcm8gb3B0aW1pc2F0aW9uLCBidXQgdGhlc2UgZG8gbWFrZSBzb21lIGRpZmZlcmVuY2UuXG4vLyBQYXJ0aWN1bGFybHkgZm9yIGJyb3dzZXJzIG90aGVyIHRoYW4gQ2hyb21lLlxuLy8gLSBsZW5ndGggY2FjaGluZ1xuLy8gaHR0cDovL2pzcGVyZi5jb20vYnJvd3Nlci1kaWV0LWpxdWVyeS1lYWNoLXZzLWZvci1sb29wLzY5XG4vLyAtIG5vdCB1c2luZyBwdXNoXG4vLyBodHRwOi8vanNwZXJmLmNvbS9hcnJheS1kaXJlY3QtYXNzaWdubWVudC12cy1wdXNoLzJcblxuZXhwb3J0IGNvbnN0IGNodW5rID0gPFQ+KGFycmF5OiBBcnJheUxpa2U8VD4sIHNpemU6IG51bWJlcik6IFRbXVtdID0+IHtcbiAgY29uc3QgcjogVFtdW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkgKz0gc2l6ZSkge1xuICAgIGNvbnN0IHM6IFRbXSA9IG5hdGl2ZVNsaWNlLmNhbGwoYXJyYXksIGksIGkgKyBzaXplKTtcbiAgICByLnB1c2gocyk7XG4gIH1cbiAgcmV0dXJuIHI7XG59O1xuXG5leHBvcnQgY29uc3QgbWFwID0gPFQgPSBhbnksIFUgPSBhbnk+KHhzOiBBcnJheUxpa2U8VD4sIGY6IEFycmF5TW9ycGhpc208VCwgVT4pOiBVW10gPT4ge1xuICAvLyBwcmUtYWxsb2NhdGluZyBhcnJheSBzaXplIHdoZW4gaXQncyBndWFyYW50ZWVkIHRvIGJlIGtub3duXG4gIC8vIGh0dHA6Ly9qc3BlcmYuY29tL3B1c2gtYWxsb2NhdGVkLXZzLWR5bmFtaWMvMjJcbiAgY29uc3QgbGVuID0geHMubGVuZ3RoO1xuICBjb25zdCByID0gbmV3IEFycmF5KGxlbik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgcltpXSA9IGYoeCwgaSk7XG4gIH1cbiAgcmV0dXJuIHI7XG59O1xuXG4vLyBVbndvdW5kIGltcGxlbWVudGluZyBvdGhlciBmdW5jdGlvbnMgaW4gdGVybXMgb2YgZWFjaC5cbi8vIFRoZSBjb2RlIHNpemUgaXMgcm91Z2hseSB0aGUgc2FtZSwgYW5kIGl0IHNob3VsZCBhbGxvdyBmb3IgYmV0dGVyIG9wdGltaXNhdGlvbi5cbi8vIGNvbnN0IGVhY2ggPSBmdW5jdGlvbjxULCBVPih4czogVFtdLCBmOiAoeDogVCwgaT86IG51bWJlciwgeHM/OiBUW10pID0+IHZvaWQpOiB2b2lkIHtcbmV4cG9ydCBjb25zdCBlYWNoID0gPFQgPSBhbnk+KHhzOiBBcnJheUxpa2U8VD4sIGY6IEFycmF5TW9ycGhpc208VCwgdm9pZD4pOiB2b2lkID0+IHtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHhzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIGYoeCwgaSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBlYWNociA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCBmOiBBcnJheU1vcnBoaXNtPFQsIHZvaWQ+KTogdm9pZCA9PiB7XG4gIGZvciAobGV0IGkgPSB4cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICBmKHgsIGkpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgcGFydGl0aW9uID0gPFQgPSBhbnk+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+KTogeyBwYXNzOiBUW107IGZhaWw6IFRbXSB9ID0+IHtcbiAgY29uc3QgcGFzczogVFtdID0gW107XG4gIGNvbnN0IGZhaWw6IFRbXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0geHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgY29uc3QgYXJyID0gcHJlZCh4LCBpKSA/IHBhc3MgOiBmYWlsO1xuICAgIGFyci5wdXNoKHgpO1xuICB9XG4gIHJldHVybiB7IHBhc3MsIGZhaWwgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBmaWx0ZXI6IHtcbiAgPFQsIFUgZXh0ZW5kcyBUPih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheUd1YXJkUHJlZGljYXRlPFQsIFU+KTogVVtdO1xuICA8VD4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlQcmVkaWNhdGU8VD4pOiBUW107XG59ID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+KTogVFtdID0+IHtcbiAgY29uc3QgcjogVFtdID0gW107XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICBpZiAocHJlZCh4LCBpKSkge1xuICAgICAgci5wdXNoKHgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcjtcbn07XG5cbi8qXG4gKiBHcm91cHMgYW4gYXJyYXkgaW50byBjb250aWd1b3VzIGFycmF5cyBvZiBsaWtlIGVsZW1lbnRzLiBXaGV0aGVyIGFuIGVsZW1lbnQgaXMgbGlrZSBvciBub3QgZGVwZW5kcyBvbiBmLlxuICpcbiAqIGYgaXMgYSBmdW5jdGlvbiB0aGF0IGRlcml2ZXMgYSB2YWx1ZSBmcm9tIGFuIGVsZW1lbnQgLSBlLmcuIHRydWUgb3IgZmFsc2UsIG9yIGEgc3RyaW5nLlxuICogRWxlbWVudHMgYXJlIGxpa2UgaWYgdGhpcyBmdW5jdGlvbiBnZW5lcmF0ZXMgdGhlIHNhbWUgdmFsdWUgZm9yIHRoZW0gKGFjY29yZGluZyB0byA9PT0pLlxuICpcbiAqXG4gKiBPcmRlciBvZiB0aGUgZWxlbWVudHMgaXMgcHJlc2VydmVkLiBBcnIuZmxhdHRlbigpIG9uIHRoZSByZXN1bHQgd2lsbCByZXR1cm4gdGhlIG9yaWdpbmFsIGxpc3QsIGFzIHdpdGggSGFza2VsbCBncm91cEJ5IGZ1bmN0aW9uLlxuICogIEZvciBhIGdvb2QgZXhwbGFuYXRpb24sIHNlZSB0aGUgZ3JvdXAgZnVuY3Rpb24gKHdoaWNoIGlzIGEgc3BlY2lhbCBjYXNlIG9mIGdyb3VwQnkpXG4gKiAgaHR0cDovL2hhY2thZ2UuaGFza2VsbC5vcmcvcGFja2FnZS9iYXNlLTQuNy4wLjAvZG9jcy9EYXRhLUxpc3QuaHRtbCN2Omdyb3VwXG4gKi9cbmV4cG9ydCBjb25zdCBncm91cEJ5ID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4sIGY6IChhOiBUKSA9PiBhbnkpOiBUW11bXSA9PiB7XG4gIGlmICh4cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gW107XG4gIH0gZWxzZSB7XG4gICAgbGV0IHdhc1R5cGUgPSBmKHhzWzBdKTsgLy8gaW5pdGlhbCBjYXNlIGZvciBtYXRjaGluZ1xuICAgIGNvbnN0IHI6IFRbXVtdID0gW107XG4gICAgbGV0IGdyb3VwOiBUW10gPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgY29uc3QgeCA9IHhzW2ldO1xuICAgICAgY29uc3QgdHlwZSA9IGYoeCk7XG4gICAgICBpZiAodHlwZSAhPT0gd2FzVHlwZSkge1xuICAgICAgICByLnB1c2goZ3JvdXApO1xuICAgICAgICBncm91cCA9IFtdO1xuICAgICAgfVxuICAgICAgd2FzVHlwZSA9IHR5cGU7XG4gICAgICBncm91cC5wdXNoKHgpO1xuICAgIH1cbiAgICBpZiAoZ3JvdXAubGVuZ3RoICE9PSAwKSB7XG4gICAgICByLnB1c2goZ3JvdXApO1xuICAgIH1cbiAgICByZXR1cm4gcjtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGZvbGRyID0gPFQsIFU+KHhzOiBBcnJheUxpa2U8VD4sIGY6IChhY2M6IFUsIHg6IFQsIGk6IG51bWJlcikgPT4gVSwgYWNjOiBVKTogVSA9PiB7XG4gIGVhY2hyKHhzLCAoeCwgaSkgPT4ge1xuICAgIGFjYyA9IGYoYWNjLCB4LCBpKTtcbiAgfSk7XG4gIHJldHVybiBhY2M7XG59O1xuXG5leHBvcnQgY29uc3QgZm9sZGwgPSA8VCA9IGFueSwgVSA9IGFueT4oeHM6IEFycmF5TGlrZTxUPiwgZjogKGFjYzogVSwgeDogVCwgaTogbnVtYmVyKSA9PiBVLCBhY2M6IFUpOiBVID0+IHtcbiAgZWFjaCh4cywgKHgsIGkpID0+IHtcbiAgICBhY2MgPSBmKGFjYywgeCwgaSk7XG4gIH0pO1xuICByZXR1cm4gYWNjO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmRVbnRpbDoge1xuICA8VCwgVSBleHRlbmRzIFQ+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5R3VhcmRQcmVkaWNhdGU8VCwgVT4sIHVudGlsOiBBcnJheVByZWRpY2F0ZTxUPik6IE9wdGlvbmFsPFU+O1xuICA8VCA9IGFueT4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlQcmVkaWNhdGU8VD4sIHVudGlsOiBBcnJheVByZWRpY2F0ZTxUPik6IE9wdGlvbmFsPFQ+O1xufSA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheVByZWRpY2F0ZTxUPiwgdW50aWw6IEFycmF5UHJlZGljYXRlPFQ+KTogT3B0aW9uYWw8VD4gPT4ge1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0geHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgaWYgKHByZWQoeCwgaSkpIHtcbiAgICAgIHJldHVybiBPcHRpb25hbC5zb21lKHgpO1xuICAgIH0gZWxzZSBpZiAodW50aWwoeCwgaSkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gT3B0aW9uYWwubm9uZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmQ6IHtcbiAgPFQsIFUgZXh0ZW5kcyBUPih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheUd1YXJkUHJlZGljYXRlPFQsIFU+KTogT3B0aW9uYWw8VT47XG4gIDxUID0gYW55Pih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheVByZWRpY2F0ZTxUPik6IE9wdGlvbmFsPFQ+O1xufSA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheVByZWRpY2F0ZTxUPik6IE9wdGlvbmFsPFQ+ID0+IHtcbiAgcmV0dXJuIGZpbmRVbnRpbCh4cywgcHJlZCwgRnVuLm5ldmVyKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmaW5kSW5kZXggPSA8VD4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlQcmVkaWNhdGU8VD4pOiBPcHRpb25hbDxudW1iZXI+ID0+IHtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHhzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIGlmIChwcmVkKHgsIGkpKSB7XG4gICAgICByZXR1cm4gT3B0aW9uYWwuc29tZShpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gT3B0aW9uYWwubm9uZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmRMYXN0SW5kZXggPSA8VD4oYXJyOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+KTogT3B0aW9uYWw8bnVtYmVyPiA9PiB7XG4gIGZvciAobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBpZiAocHJlZChhcnJbaV0sIGkpKSB7XG4gICAgICByZXR1cm4gT3B0aW9uYWwuc29tZShpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gT3B0aW9uYWwubm9uZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZsYXR0ZW4gPSA8VD4oeHM6IEFycmF5TGlrZTxUW10+KTogVFtdID0+IHtcbiAgLy8gTm90ZSwgdGhpcyBpcyBwb3NzaWJsZSBiZWNhdXNlIHB1c2ggc3VwcG9ydHMgbXVsdGlwbGUgYXJndW1lbnRzOlxuICAvLyBodHRwOi8vanNwZXJmLmNvbS9jb25jYXQtcHVzaC82XG4gIC8vIE5vdGUgdGhhdCBpbiB0aGUgcGFzdCwgY29uY2F0KCkgd291bGQgc2lsZW50bHkgd29yayAodmVyeSBzbG93bHkpIGZvciBhcnJheS1saWtlIG9iamVjdHMuXG4gIC8vIFdpdGggdGhpcyBjaGFuZ2UgaXQgd2lsbCB0aHJvdyBhbiBlcnJvci5cbiAgY29uc3QgcjogVFtdID0gW107XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgIC8vIEVuc3VyZSB0aGF0IGVhY2ggdmFsdWUgaXMgYW4gYXJyYXkgaXRzZWxmXG4gICAgaWYgKCFUeXBlLmlzQXJyYXkoeHNbaV0pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Fyci5mbGF0dGVuIGl0ZW0gJyArIGkgKyAnIHdhcyBub3QgYW4gYXJyYXksIGlucHV0OiAnICsgeHMpO1xuICAgIH1cbiAgICBuYXRpdmVQdXNoLmFwcGx5KHIsIHhzW2ldKTtcbiAgfVxuICByZXR1cm4gcjtcbn07XG5cbmV4cG9ydCBjb25zdCBiaW5kID0gPFQgPSBhbnksIFUgPSBhbnk+KHhzOiBBcnJheUxpa2U8VD4sIGY6IEFycmF5TW9ycGhpc208VCwgVVtdPik6IFVbXSA9PlxuICBmbGF0dGVuKG1hcCh4cywgZikpO1xuXG5leHBvcnQgY29uc3QgZm9yYWxsID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+KTogYm9vbGVhbiA9PiB7XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICBpZiAocHJlZCh4LCBpKSAhPT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmV4cG9ydCBjb25zdCBlcXVhbCA9IDxUPihhMTogQXJyYXlMaWtlPFQ+LCBhMjogQXJyYXlMaWtlPFQ+LCBlcTogRXEuRXE8VD4gPSBFcS5lcUFueSk6IGJvb2xlYW4gPT5cbiAgRXEuZXFBcnJheShlcSkuZXEoYTEsIGEyKTtcblxuZXhwb3J0IGNvbnN0IHJldmVyc2UgPSA8VD4oeHM6IEFycmF5TGlrZTxUPik6IFRbXSA9PiB7XG4gIGNvbnN0IHI6IFRbXSA9IG5hdGl2ZVNsaWNlLmNhbGwoeHMsIDApO1xuICByLnJldmVyc2UoKTtcbiAgcmV0dXJuIHI7XG59O1xuXG5leHBvcnQgY29uc3QgZGlmZmVyZW5jZSA9IDxUPihhMTogQXJyYXlMaWtlPFQ+LCBhMjogQXJyYXlMaWtlPFQ+KTogVFtdID0+IGZpbHRlcihhMSwgKHgpID0+ICFjb250YWlucyhhMiwgeCkpO1xuXG5leHBvcnQgY29uc3QgbWFwVG9PYmplY3Q6IHtcbiAgPFQgZXh0ZW5kcyBzdHJpbmcsIFU+KHhzOiBBcnJheUxpa2U8VD4sIGY6ICh4OiBULCBpOiBudW1iZXIpID0+IFUpOiBSZWNvcmQ8VCwgVT47XG4gIDxULCBSIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55Pj4oeHM6IEFycmF5TGlrZTxUPiwgZjogKHg6IFQsIGk6IG51bWJlcikgPT4gUltrZXlvZiBSXSk6IFI7XG59ID0gPFQsIFIgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+Pih4czogQXJyYXlMaWtlPFQ+LCBmOiAoeDogVCwgaTogbnVtYmVyKSA9PiBSW2tleW9mIFJdKTogUiA9PiB7XG4gIGNvbnN0IHIgPSB7fSBhcyBSO1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0geHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgcltTdHJpbmcoeCkgYXMga2V5b2YgUl0gPSBmKHgsIGkpO1xuICB9XG4gIHJldHVybiByO1xufTtcblxuZXhwb3J0IGNvbnN0IHB1cmUgPSA8VD4oeDogVCk6IFRbXSA9PiBbIHggXTtcblxuZXhwb3J0IGNvbnN0IHNvcnQgPSA8VD4oeHM6IEFycmF5TGlrZTxUPiwgY29tcGFyYXRvcj86IENvbXBhcmF0b3I8VD4pOiBUW10gPT4ge1xuICBjb25zdCBjb3B5OiBUW10gPSBuYXRpdmVTbGljZS5jYWxsKHhzLCAwKTtcbiAgY29weS5zb3J0KGNvbXBhcmF0b3IpO1xuICByZXR1cm4gY29weTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXQgPSA8VD4oeHM6IEFycmF5TGlrZTxUPiwgaTogbnVtYmVyKTogT3B0aW9uYWw8VD4gPT4gaSA+PSAwICYmIGkgPCB4cy5sZW5ndGggPyBPcHRpb25hbC5zb21lKHhzW2ldKSA6IE9wdGlvbmFsLm5vbmUoKTtcblxuZXhwb3J0IGNvbnN0IGhlYWQgPSA8VD4oeHM6IEFycmF5TGlrZTxUPik6IE9wdGlvbmFsPFQ+ID0+IGdldCh4cywgMCk7XG5cbmV4cG9ydCBjb25zdCBsYXN0ID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4pOiBPcHRpb25hbDxUPiA9PiBnZXQoeHMsIHhzLmxlbmd0aCAtIDEpO1xuXG5leHBvcnQgY29uc3QgZnJvbTogPFQ+KHg6IEFycmF5TGlrZTxUPikgPT4gVFtdID0gVHlwZS5pc0Z1bmN0aW9uKEFycmF5LmZyb20pID8gQXJyYXkuZnJvbSA6ICh4KSA9PiBuYXRpdmVTbGljZS5jYWxsKHgpO1xuXG5leHBvcnQgY29uc3QgZmluZE1hcCA9IDxBLCBCPihhcnI6IEFycmF5TGlrZTxBPiwgZjogKGE6IEEsIGluZGV4OiBudW1iZXIpID0+IE9wdGlvbmFsPEI+KTogT3B0aW9uYWw8Qj4gPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHIgPSBmKGFycltpXSwgaSk7XG4gICAgaWYgKHIuaXNTb21lKCkpIHtcbiAgICAgIHJldHVybiByO1xuICAgIH1cbiAgfVxuICByZXR1cm4gT3B0aW9uYWwubm9uZTxCPigpO1xufTtcblxuZXhwb3J0IGNvbnN0IHVuaXF1ZSA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCBjb21wYXJhdG9yPzogKGE6IFQsIGI6IFQpID0+IGJvb2xlYW4pOiBUW10gPT4ge1xuICBjb25zdCByOiBUW10gPSBbXTtcblxuICBjb25zdCBpc0R1cGxpY2F0ZWQgPSBUeXBlLmlzRnVuY3Rpb24oY29tcGFyYXRvcikgP1xuICAgICh4OiBUKSA9PiBleGlzdHMociwgKGkpID0+IGNvbXBhcmF0b3IoaSwgeCkpIDpcbiAgICAoeDogVCkgPT4gY29udGFpbnMociwgeCk7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHhzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIGlmICghaXNEdXBsaWNhdGVkKHgpKSB7XG4gICAgICByLnB1c2goeCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHI7XG59O1xuIiwiZXhwb3J0IGludGVyZmFjZSBDZWxsPFQ+IHtcbiAgcmVhZG9ubHkgZ2V0OiAoKSA9PiBUO1xuICByZWFkb25seSBzZXQ6ICh2YWx1ZTogVCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IENlbGwgPSA8VD4oaW5pdGlhbDogVCk6IENlbGw8VD4gPT4ge1xuICBsZXQgdmFsdWUgPSBpbml0aWFsO1xuXG4gIGNvbnN0IGdldCA9ICgpID0+IHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG5cbiAgY29uc3Qgc2V0ID0gKHY6IFQpID0+IHtcbiAgICB2YWx1ZSA9IHY7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQsXG4gICAgc2V0XG4gIH07XG59O1xuIiwiaW1wb3J0ICogYXMgVHlwZSBmcm9tICcuL1R5cGUnO1xuXG5jb25zdCBub29wOiAoLi4uYXJnczogYW55W10pID0+IHZvaWRcbj0gKCkgPT4geyB9O1xuXG5jb25zdCBub2FyZzogPFQ+KGY6ICgpID0+IFQpID0+ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZFxuPSAoZikgPT4gKCkgPT4gZigpO1xuXG4vKiogQ29tcG9zZSBhIHVuYXJ5IGZ1bmN0aW9uIHdpdGggYW4gbi1hcnkgZnVuY3Rpb24gKi9cbmNvbnN0IGNvbXBvc2UgPSA8VCBleHRlbmRzIGFueVtdLCBVLCBWPihmYTogKHY6IFUpID0+IFYsIGZiOiAoLi4ueDogVCkgPT4gVSk6ICguLi54OiBUKSA9PiBWID0+IHtcbiAgcmV0dXJuICguLi5hcmdzOiBUKSA9PiB7XG4gICAgcmV0dXJuIGZhKGZiLmFwcGx5KG51bGwsIGFyZ3MpKTtcbiAgfTtcbn07XG5cbi8qKiBDb21wb3NlIHR3byB1bmFyeSBmdW5jdGlvbnMuIFNpbWlsYXIgdG8gY29tcG9zZSwgYnV0IGF2b2lkcyB1c2luZyBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuICovXG5jb25zdCBjb21wb3NlMSA9IDxBLCBCLCBDPiAoZmJjOiAoYjogQikgPT4gQywgZmFiOiAoYTogQSkgPT4gQikgPT4gKGE6IEEpOiBDID0+XG4gIGZiYyhmYWIoYSkpO1xuXG5jb25zdCBjb25zdGFudCA9IDxUPih2YWx1ZTogVCk6ICgpID0+IFQgPT4ge1xuICByZXR1cm4gKCkgPT4ge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcbn07XG5cbmNvbnN0IGlkZW50aXR5ID0gPFQgPSBhbnk+KHg6IFQpOiBUID0+IHtcbiAgcmV0dXJuIHg7XG59O1xuXG5jb25zdCB0cmlwbGVFcXVhbHMgPSA8VD4oYTogVCwgYjogVCk6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gYSA9PT0gYjtcbn07XG5cbmZ1bmN0aW9uIGN1cnJ5IDxSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8QSwgUkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoYTogQSwgLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCwgYTogQSk6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPEEsIEIsIFJFU1QgZXh0ZW5kcyBhbnlbXSwgT1VUPihmbjogKGE6IEEsIGI6IEIsIC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQsIGE6IEEsIGI6IEIpOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVDtcbmZ1bmN0aW9uIGN1cnJ5IDxBLCBCLCBDLCBSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46IChhOiBBLCBiOiBCLCBjOiBDLCAuLi5yZXN0QXJnczogUkVTVCkgPT4gT1VULCBhOiBBLCBiOiBCLCBjOiBDKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8QSwgQiwgQywgRCwgUkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoYTogQSwgYjogQiwgYzogQywgZDogRCwgLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCwgYTogQSwgYjogQiwgYzogQywgZDogRCk6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPEEsIEIsIEMsIEQsIEUsIFJFU1QgZXh0ZW5kcyBhbnlbXSwgT1VUPihmbjogKGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQsIGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUpOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVDtcbmZ1bmN0aW9uIGN1cnJ5IDxBLCBCLCBDLCBELCBFLCBGLCBSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46IChhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCBmOiBGLCAuLi5yZXN0QXJnczogUkVTVCkgPT4gT1VULCBhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCBmOiBGKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8QSwgQiwgQywgRCwgRSwgRiwgRywgUkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgZjogRiwgZzogRywgLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCwgYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgZjogRiwgZzogRyk6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPEEsIEIsIEMsIEQsIEUsIEYsIEcsIEgsIFJFU1QgZXh0ZW5kcyBhbnlbXSwgT1VUPihmbjogKGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIGY6IEYsIGc6IEcsIGg6IEgsIC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQsIGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIGY6IEYsIGc6IEcsIGg6IEgpOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVDtcbmZ1bmN0aW9uIGN1cnJ5IDxBLCBCLCBDLCBELCBFLCBGLCBHLCBILCBJLCBSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46IChhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCBmOiBGLCBnOiBHLCBoOiBILCBpOiBJLCAuLi5yZXN0QXJnczogUkVTVCkgPT4gT1VULCBhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCBmOiBGLCBnOiBHLCBoOiBILCBpOiBJKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8QSwgQiwgQywgRCwgRSwgRiwgRywgSCwgSSwgSiwgUkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgZjogRiwgZzogRywgaDogSCwgaTogSSwgajogSiwgLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCwgYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgZjogRiwgZzogRywgaDogSCwgaTogSSwgajogSik6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPE9VVD4oZm46ICguLi5hbGxBcmdzOiBhbnlbXSkgPT4gT1VULCAuLi5pbml0aWFsQXJnczogYW55W10pOiAoLi4ucmVzdEFyZ3M6IGFueVtdKSA9PiBPVVQge1xuICByZXR1cm4gKC4uLnJlc3RBcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IGFsbCA9IGluaXRpYWxBcmdzLmNvbmNhdChyZXN0QXJncyk7XG4gICAgcmV0dXJuIGZuLmFwcGx5KG51bGwsIGFsbCk7XG4gIH07XG59XG5cbmNvbnN0IG5vdCA9IDxUPihmOiAodDogVCkgPT4gYm9vbGVhbikgPT4gKHQ6IFQpOiBib29sZWFuID0+XG4gICFmKHQpO1xuXG5jb25zdCBkaWUgPSAobXNnOiBzdHJpbmcpID0+IHtcbiAgcmV0dXJuICgpOiBuZXZlciA9PiB7XG4gICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XG4gIH07XG59O1xuXG5jb25zdCBhcHBseSA9IDxUPihmOiAoKSA9PiBUKTogVCA9PiB7XG4gIHJldHVybiBmKCk7XG59O1xuXG5jb25zdCBjYWxsID0gKGY6ICgpID0+IGFueSk6IHZvaWQgPT4ge1xuICBmKCk7XG59O1xuXG5jb25zdCBuZXZlcjogKC4uLmFyZ3M6IGFueVtdKSA9PiBmYWxzZSA9IGNvbnN0YW50PGZhbHNlPihmYWxzZSk7XG5jb25zdCBhbHdheXM6ICguLi5hcmdzOiBhbnlbXSkgPT4gdHJ1ZSA9IGNvbnN0YW50PHRydWU+KHRydWUpO1xuXG4vKiBVc2VkIHRvIHdlYWtlbiB0eXBlcyAqL1xuY29uc3Qgd2Vha2VuID0gPEEsIEIgZXh0ZW5kcyBBPihiOiBCKTogQSA9PiBiO1xuXG50eXBlIEZ1bjxYLCBZPiA9ICh4OiBYKSA9PiBZO1xuY29uc3QgcGlwZToge1xuICA8QSwgQj4oYTogQSwgYWI6IEZ1bjxBLCBCPik6IEI7XG4gIDxBLCBCLCBDPihhOiBBLCBhYjogRnVuPEEsIEI+LCBiYzogRnVuPEIsIEM+KTogQztcbiAgPEEsIEIsIEMsIEQ+KGE6IEEsIGFiOiBGdW48QSwgQj4sIGJjOiBGdW48QiwgQz4sIGNkOiBGdW48QywgRD4pOiBEO1xuICA8QSwgQiwgQywgRCwgRT4oYTogQSwgYWI6IEZ1bjxBLCBCPiwgYmM6IEZ1bjxCLCBDPiwgY2Q6IEZ1bjxDLCBEPiwgZGU6IEZ1bjxELCBFPik6IEU7XG4gIDxBLCBCLCBDLCBELCBFLCBGPihhOiBBLCBhYjogRnVuPEEsIEI+LCBiYzogRnVuPEIsIEM+LCBjZDogRnVuPEMsIEQ+LCBkZTogRnVuPEQsIEU+LCBlZjogRnVuPEUsIEY+KTogRjtcbiAgPEEsIEIsIEMsIEQsIEUsIEYsIEc+KGE6IEEsIGFiOiBGdW48QSwgQj4sIGJjOiBGdW48QiwgQz4sIGNkOiBGdW48QywgRD4sIGRlOiBGdW48RCwgRT4sIGVmOiBGdW48RSwgRj4sIGZnOiBGdW48RiwgRz4pOiBHO1xuICA8QSwgQiwgQywgRCwgRSwgRiwgRywgSD4oYTogQSwgYWI6IEZ1bjxBLCBCPiwgYmM6IEZ1bjxCLCBDPiwgY2Q6IEZ1bjxDLCBEPiwgZGU6IEZ1bjxELCBFPiwgZWY6IEZ1bjxFLCBGPiwgZmc6IEZ1bjxGLCBHPiwgZ2g6IEZ1bjxHLCBIPik6IEg7XG59ID1cbiAgPEEsIEIsIEMsIEQsIEUsIEYsIEcsIEg+KGE6IEEsIGFiOiBGdW48QSwgQj4sIGJjPzogRnVuPEIsIEM+LCBjZD86IEZ1bjxDLCBEPiwgZGU/OiBGdW48RCwgRT4sIGVmPzogRnVuPEUsIEY+LCBmZz86IEZ1bjxGLCBHPiwgZ2g/OiBGdW48RywgSD4pOiBCIHwgQyB8IEQgfCBFIHwgRiB8IEcgfCBIID0+IHtcbiAgICBjb25zdCBiID0gYWIoYSk7XG4gICAgaWYgKFR5cGUuaXNOdWxsYWJsZShiYykpIHtcbiAgICAgIHJldHVybiBiO1xuICAgIH1cblxuICAgIGNvbnN0IGMgPSBiYyhiKTtcbiAgICBpZiAoVHlwZS5pc051bGxhYmxlKGNkKSkge1xuICAgICAgcmV0dXJuIGM7XG4gICAgfVxuXG4gICAgY29uc3QgZCA9IGNkKGMpO1xuICAgIGlmIChUeXBlLmlzTnVsbGFibGUoZGUpKSB7XG4gICAgICByZXR1cm4gZDtcbiAgICB9XG5cbiAgICBjb25zdCBlID0gZGUoZCk7XG4gICAgaWYgKFR5cGUuaXNOdWxsYWJsZShlZikpIHtcbiAgICAgIHJldHVybiBlO1xuICAgIH1cblxuICAgIGNvbnN0IGYgPSBlZihlKTtcbiAgICBpZiAoVHlwZS5pc051bGxhYmxlKGZnKSkge1xuICAgICAgcmV0dXJuIGY7XG4gICAgfVxuXG4gICAgY29uc3QgZyA9IGZnKGYpO1xuICAgIGlmIChUeXBlLmlzTnVsbGFibGUoZ2gpKSB7XG4gICAgICByZXR1cm4gZztcbiAgICB9XG5cbiAgICByZXR1cm4gZ2goZyk7XG4gIH07XG5cbmV4cG9ydCB7XG4gIG5vb3AsXG4gIG5vYXJnLFxuICBjb21wb3NlLFxuICBjb21wb3NlMSxcbiAgY29uc3RhbnQsXG4gIGlkZW50aXR5LFxuICB0cmlwbGVFcXVhbHMsXG4gIGN1cnJ5LFxuICBub3QsXG4gIGRpZSxcbiAgYXBwbHksXG4gIGNhbGwsXG4gIG5ldmVyLFxuICBhbHdheXMsXG4gIHdlYWtlbixcbiAgcGlwZVxufTtcbiIsIi8vIFVzZSB3aW5kb3cgb2JqZWN0IGFzIHRoZSBnbG9iYWwgaWYgaXQncyBhdmFpbGFibGUgc2luY2UgQ1NQIHdpbGwgYmxvY2sgc2NyaXB0IGV2YWxzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWltcGxpZWQtZXZhbFxuZXhwb3J0IGNvbnN0IEdsb2JhbCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogRnVuY3Rpb24oJ3JldHVybiB0aGlzOycpKCk7XG4iLCJpbXBvcnQgeyBFcSB9IGZyb20gJ0BlcGhveC9kaXNwdXRlJztcblxuaW1wb3J0ICogYXMgRnVuIGZyb20gJy4vRnVuJztcbmltcG9ydCB7IE9wdGlvbmFsIH0gZnJvbSAnLi9PcHRpb25hbCc7XG5cbnR5cGUgT2JqS2V5czxUIGV4dGVuZHMge30+ID0gRXh0cmFjdDxrZXlvZiBULCBzdHJpbmc+O1xudHlwZSBPYmpDYWxsYmFjazxUIGV4dGVuZHMge30+ID0gKHZhbHVlOiBUW2tleW9mIFRdLCBrZXk6IE9iaktleXM8VD4pID0+IHZvaWQ7XG50eXBlIE9iak1vcnBoaXNtPFQgZXh0ZW5kcyB7fSwgUj4gPSAodmFsdWU6IFRba2V5b2YgVF0sIGtleTogT2JqS2V5czxUPikgPT4gUjtcbnR5cGUgT2JqR3VhcmRQcmVkaWNhdGU8VCBleHRlbmRzIHt9LCBVIGV4dGVuZHMgVFtrZXlvZiBUXT4gPSAodmFsdWU6IFRba2V5b2YgVF0sIGtleTogT2JqS2V5czxUPikgPT4gdmFsdWUgaXMgVTtcbnR5cGUgT2JqUHJlZGljYXRlPFQgZXh0ZW5kcyB7fT4gPSAodmFsdWU6IFRba2V5b2YgVF0sIGtleTogT2JqS2V5czxUPikgPT4gYm9vbGVhbjtcblxuLy8gVGhlcmUgYXJlIG1hbnkgdmFyaWF0aW9ucyBvZiBPYmplY3QgaXRlcmF0aW9uIHRoYXQgYXJlIGZhc3RlciB0aGFuIHRoZSAnZm9yLWluJyBzdHlsZTpcbi8vIGh0dHA6Ly9qc3BlcmYuY29tL29iamVjdC1rZXlzLWl0ZXJhdGlvbi8xMDdcbi8vXG4vLyBVc2UgdGhlIG5hdGl2ZSBrZXlzIGlmIGl0IGlzIGF2YWlsYWJsZSAoSUU5KyksIG90aGVyd2lzZSBmYWxsIGJhY2sgdG8gbWFudWFsbHkgZmlsdGVyaW5nXG5leHBvcnQgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzO1xuXG5leHBvcnQgY29uc3QgaGFzT3duUHJvcGVydHkgPSBPYmplY3QuaGFzT3duUHJvcGVydHk7XG5cbmV4cG9ydCBjb25zdCBlYWNoID0gPFQgZXh0ZW5kcyB7fT4ob2JqOiBULCBmOiBPYmpDYWxsYmFjazxUPik6IHZvaWQgPT4ge1xuICBjb25zdCBwcm9wcyA9IGtleXMob2JqKSBhcyBBcnJheTxPYmpLZXlzPFQ+PjtcbiAgZm9yIChsZXQgayA9IDAsIGxlbiA9IHByb3BzLmxlbmd0aDsgayA8IGxlbjsgaysrKSB7XG4gICAgY29uc3QgaSA9IHByb3BzW2tdO1xuICAgIGNvbnN0IHggPSBvYmpbaV07XG4gICAgZih4LCBpKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IG1hcCA9IDxUIGV4dGVuZHMge30sIFI+KG9iajogVCwgZjogT2JqTW9ycGhpc208VCwgUj4pOiB7IFtrIGluIGtleW9mIFRdOiBSIH0gPT4ge1xuICByZXR1cm4gdHVwbGVNYXA8eyBbayBpbiBrZXlvZiBUXTogUiB9LCBUPihvYmosICh4LCBpKSA9PiAoe1xuICAgIGs6IGksXG4gICAgdjogZih4LCBpKVxuICB9KSk7XG59O1xuXG5leHBvcnQgY29uc3QgdHVwbGVNYXAgPSA8UiBleHRlbmRzIHt9LCBUIGV4dGVuZHMge30+KG9iajogVCwgZjogT2JqTW9ycGhpc208VCwgeyBrOiBrZXlvZiBSOyB2OiBSW2tleW9mIFJdIH0+KTogUiA9PiB7XG4gIGNvbnN0IHIgPSB7fSBhcyBSO1xuICBlYWNoKG9iaiwgKHgsIGkpID0+IHtcbiAgICBjb25zdCB0dXBsZSA9IGYoeCwgaSk7XG4gICAgclt0dXBsZS5rXSA9IHR1cGxlLnY7XG4gIH0pO1xuICByZXR1cm4gcjtcbn07XG5cbmNvbnN0IG9iakFjYyA9IDxUIGV4dGVuZHMge30+KHI6IFQpID0+ICh4OiBUW2tleW9mIFRdLCBpOiBrZXlvZiBUKTogdm9pZCA9PiB7XG4gIHJbaV0gPSB4O1xufTtcblxuY29uc3QgaW50ZXJuYWxGaWx0ZXIgPSA8VCBleHRlbmRzIHt9PihvYmo6IFQsIHByZWQ6IE9ialByZWRpY2F0ZTxUPiwgb25UcnVlOiBPYmpDYWxsYmFjazxUPiwgb25GYWxzZTogT2JqQ2FsbGJhY2s8VD4pID0+IHtcbiAgZWFjaChvYmosICh4LCBpKSA9PiB7XG4gICAgKHByZWQoeCwgaSkgPyBvblRydWUgOiBvbkZhbHNlKSh4LCBpKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgYmlmaWx0ZXIgPSA8VCBleHRlbmRzIHt9PihvYmo6IFQsIHByZWQ6IE9ialByZWRpY2F0ZTxUPik6IHsgdDogUmVjb3JkPHN0cmluZywgVFtrZXlvZiBUXT47IGY6IFJlY29yZDxzdHJpbmcsIFRba2V5b2YgVF0+IH0gPT4ge1xuICBjb25zdCB0OiBSZWNvcmQ8c3RyaW5nLCBUW2tleW9mIFRdPiA9IHt9O1xuICBjb25zdCBmOiBSZWNvcmQ8c3RyaW5nLCBUW2tleW9mIFRdPiA9IHt9O1xuICBpbnRlcm5hbEZpbHRlcihvYmosIHByZWQsIG9iakFjYyh0KSwgb2JqQWNjKGYpKTtcbiAgcmV0dXJuIHsgdCwgZiB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbHRlcjoge1xuICA8VCBleHRlbmRzIHt9LCBVIGV4dGVuZHMgVFtrZXlvZiBUXT4ob2JqOiBULCBwcmVkOiBPYmpHdWFyZFByZWRpY2F0ZTxULCBVPik6IFJlY29yZDxzdHJpbmcsIFU+O1xuICA8VCBleHRlbmRzIHt9PihvYmo6IFQsIHByZWQ6IE9ialByZWRpY2F0ZTxUPik6IFJlY29yZDxzdHJpbmcsIFRba2V5b2YgVF0+O1xufSA9IDxUIGV4dGVuZHMge30+KG9iajogVCwgcHJlZDogT2JqUHJlZGljYXRlPFQ+KTogUmVjb3JkPHN0cmluZywgVFtrZXlvZiBUXT4gPT4ge1xuICBjb25zdCB0OiBSZWNvcmQ8c3RyaW5nLCBUW2tleW9mIFRdPiA9IHt9O1xuICBpbnRlcm5hbEZpbHRlcihvYmosIHByZWQsIG9iakFjYyh0KSwgRnVuLm5vb3ApO1xuICByZXR1cm4gdDtcbn07XG5cbmV4cG9ydCBjb25zdCBtYXBUb0FycmF5ID0gPFQgZXh0ZW5kcyB7fSwgUj4ob2JqOiBULCBmOiBPYmpNb3JwaGlzbTxULCBSPik6IFJbXSA9PiB7XG4gIGNvbnN0IHI6IFJbXSA9IFtdO1xuICBlYWNoKG9iaiwgKHZhbHVlLCBuYW1lKSA9PiB7XG4gICAgci5wdXNoKGYodmFsdWUsIG5hbWUpKTtcbiAgfSk7XG4gIHJldHVybiByO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmQgPSA8VCBleHRlbmRzIHt9PihvYmo6IFQsIHByZWQ6ICh2YWx1ZTogVFtrZXlvZiBUXSwga2V5OiBPYmpLZXlzPFQ+LCBvYmo6IFQpID0+IGJvb2xlYW4pOiBPcHRpb25hbDxUW2tleW9mIFRdPiA9PiB7XG4gIGNvbnN0IHByb3BzID0ga2V5cyhvYmopIGFzIEFycmF5PE9iaktleXM8VD4+O1xuICBmb3IgKGxldCBrID0gMCwgbGVuID0gcHJvcHMubGVuZ3RoOyBrIDwgbGVuOyBrKyspIHtcbiAgICBjb25zdCBpID0gcHJvcHNba107XG4gICAgY29uc3QgeCA9IG9ialtpXTtcbiAgICBpZiAocHJlZCh4LCBpLCBvYmopKSB7XG4gICAgICByZXR1cm4gT3B0aW9uYWwuc29tZSh4KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIE9wdGlvbmFsLm5vbmUoKTtcbn07XG5cbmV4cG9ydCBjb25zdCB2YWx1ZXMgPSA8VCBleHRlbmRzIHt9PihvYmo6IFQpOiBBcnJheTxUW2tleW9mIFRdPiA9PiB7XG4gIHJldHVybiBtYXBUb0FycmF5KG9iaiwgRnVuLmlkZW50aXR5KTtcbn07XG5cbmV4cG9ydCBjb25zdCBzaXplID0gKG9iajoge30pOiBudW1iZXIgPT4ge1xuICByZXR1cm4ga2V5cyhvYmopLmxlbmd0aDtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXQgPSA8VCBleHRlbmRzIHt9LCBLIGV4dGVuZHMga2V5b2YgVD4ob2JqOiBULCBrZXk6IEspOiBPcHRpb25hbDxOb25OdWxsYWJsZTxUW0tdPj4gPT4ge1xuICByZXR1cm4gaGFzKG9iaiwga2V5KSA/IE9wdGlvbmFsLmZyb20ob2JqW2tleV0gYXMgTm9uTnVsbGFibGU8VFtLXT4pIDogT3B0aW9uYWwubm9uZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGhhcyA9IDxUIGV4dGVuZHMge30sIEsgZXh0ZW5kcyBrZXlvZiBUPihvYmo6IFQsIGtleTogSyk6IGJvb2xlYW4gPT5cbiAgaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSk7XG5cbmV4cG9ydCBjb25zdCBoYXNOb25OdWxsYWJsZUtleSA9IDxUIGV4dGVuZHMge30sIEsgZXh0ZW5kcyBrZXlvZiBUPihvYmo6IFQsIGtleTogSyk6IG9iaiBpcyBUICYgUmVjb3JkPEssIE5vbk51bGxhYmxlPFRbS10+PiA9PlxuICBoYXMob2JqLCBrZXkpICYmIG9ialtrZXldICE9PSB1bmRlZmluZWQgJiYgb2JqW2tleV0gIT09IG51bGw7XG5cbmV4cG9ydCBjb25zdCBpc0VtcHR5ID0gKHI6IFJlY29yZDxhbnksIGFueT4pOiByIGlzIHt9ID0+IHtcbiAgZm9yIChjb25zdCB4IGluIHIpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChyLCB4KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmV4cG9ydCBjb25zdCBlcXVhbCA9IDxUPihhMTogUmVjb3JkPHN0cmluZywgVD4sIGEyOiBSZWNvcmQ8c3RyaW5nLCBUPiwgZXE6IEVxLkVxPFQ+ID0gRXEuZXFBbnkpOiBib29sZWFuID0+XG4gIEVxLmVxUmVjb3JkKGVxKS5lcShhMSwgYTIpO1xuIiwiaW1wb3J0ICogYXMgVHlwZSBmcm9tICcuL1R5cGUnO1xuXG4vKipcbiAqIFRoZSBgT3B0aW9uYWxgIHR5cGUgcmVwcmVzZW50cyBhIHZhbHVlIChvZiBhbnkgdHlwZSkgdGhhdCBwb3RlbnRpYWxseSBkb2VzXG4gKiBub3QgZXhpc3QuIEFueSBgT3B0aW9uYWw8VD5gIGNhbiBlaXRoZXIgYmUgYSBgU29tZTxUPmAgKGluIHdoaWNoIGNhc2UgdGhlXG4gKiB2YWx1ZSBkb2VzIGV4aXN0KSBvciBhIGBOb25lYCAoaW4gd2hpY2ggY2FzZSB0aGUgdmFsdWUgZG9lcyBub3QgZXhpc3QpLiBUaGlzXG4gKiBtb2R1bGUgZGVmaW5lcyBhIHdob2xlIGxvdCBvZiBGUC1pbnNwaXJlZCB1dGlsaXR5IGZ1bmN0aW9ucyBmb3IgZGVhbGluZyB3aXRoXG4gKiBgT3B0aW9uYWxgIG9iamVjdHMuXG4gKlxuICogQ29tcGFyaXNvbiB3aXRoIG51bGwgb3IgdW5kZWZpbmVkOlxuICogLSBXZSBkb24ndCBnZXQgZmFuY3kgbnVsbCBjb2FsZXNjaW5nIG9wZXJhdG9ycyB3aXRoIGBPcHRpb25hbGBcbiAqIC0gV2UgZG8gZ2V0IGZhbmN5IGhlbHBlciBmdW5jdGlvbnMgd2l0aCBgT3B0aW9uYWxgXG4gKiAtIGBPcHRpb25hbGAgc3VwcG9ydCBuZXN0aW5nLCBhbmQgYWxsb3cgZm9yIHRoZSB0eXBlIHRvIHN0aWxsIGJlIG51bGxhYmxlIChvclxuICogYW5vdGhlciBgT3B0aW9uYWxgKVxuICogLSBUaGVyZSBpcyBubyBvcHRpb24gdG8gdHVybiBvZmYgc3RyaWN0LW9wdGlvbmFsLWNoZWNrcyBsaWtlIHRoZXJlIGlzIGZvclxuICogc3RyaWN0LW51bGwtY2hlY2tzXG4gKi9cbmV4cG9ydCBjbGFzcyBPcHRpb25hbDxUPiB7XG4gIHByaXZhdGUgcmVhZG9ubHkgdGFnOiBib29sZWFuO1xuICBwcml2YXRlIHJlYWRvbmx5IHZhbHVlPzogVDtcblxuICAvLyBTbmVha3kgb3B0aW1pc2F0aW9uOiBldmVyeSBpbnN0YW5jZSBvZiBPcHRpb25hbC5ub25lIGlzIGlkZW50aWNhbCwgc28ganVzdFxuICAvLyByZXVzZSB0aGUgc2FtZSBvYmplY3RcbiAgcHJpdmF0ZSBzdGF0aWMgc2luZ2xldG9uTm9uZSA9IG5ldyBPcHRpb25hbDxhbnk+KGZhbHNlKTtcblxuICAvLyBUaGUgaW50ZXJuYWwgcmVwcmVzZW50YXRpb24gaGFzIGEgYHRhZ2AgYW5kIGEgYHZhbHVlYCwgYnV0IGJvdGggYXJlXG4gIC8vIHByaXZhdGU6IGFibGUgdG8gYmUgY29uc29sZS5sb2dnZWQsIGJ1dCBub3QgYWJsZSB0byBiZSBhY2Nlc3NlZCBieSBjb2RlXG4gIHByaXZhdGUgY29uc3RydWN0b3IodGFnOiBib29sZWFuLCB2YWx1ZT86IFQpIHtcbiAgICB0aGlzLnRhZyA9IHRhZztcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICAvLyAtLS0gSWRlbnRpdGllcyAtLS1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBgT3B0aW9uYWw8VD5gIHRoYXQgKipkb2VzKiogY29udGFpbiBhIHZhbHVlLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBzb21lPFQ+KHRoaXM6IHZvaWQsIHZhbHVlOiBUKTogT3B0aW9uYWw8VD4ge1xuICAgIHJldHVybiBuZXcgT3B0aW9uYWwodHJ1ZSwgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBgT3B0aW9uYWw8VD5gIHRoYXQgKipkb2VzIG5vdCoqIGNvbnRhaW4gYSB2YWx1ZS4gYFRgIGNhbiBiZVxuICAgKiBhbnkgdHlwZSBiZWNhdXNlIHdlIGRvbid0IGFjdHVhbGx5IGhhdmUgYSBgVGAuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIG5vbmU8VCA9IG5ldmVyPih0aGlzOiB2b2lkKTogT3B0aW9uYWw8VD4ge1xuICAgIHJldHVybiBPcHRpb25hbC5zaW5nbGV0b25Ob25lO1xuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm0gYSB0cmFuc2Zvcm0gb24gYW4gYE9wdGlvbmFsYCB0eXBlLiBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpc1xuICAgKiBgT3B0aW9uYWxgIGNvbnRhaW5zIGEgdmFsdWUgb3Igbm90LCBgZm9sZGAgd2lsbCByZXR1cm4gYSB2YWx1ZSBvZiB0eXBlIGBVYC5cbiAgICogSWYgdGhpcyBgT3B0aW9uYWxgIGRvZXMgbm90IGNvbnRhaW4gYSB2YWx1ZSwgdGhlIGBVYCB3aWxsIGJlIGNyZWF0ZWQgYnlcbiAgICogY2FsbGluZyBgb25Ob25lYC4gSWYgdGhpcyBgT3B0aW9uYWxgIGRvZXMgY29udGFpbiBhIHZhbHVlLCB0aGUgYFVgIHdpbGwgYmVcbiAgICogY3JlYXRlZCBieSBjYWxsaW5nIGBvblNvbWVgLlxuICAgKlxuICAgKiBGb3IgdGhlIEZQIGVudGh1c2lhc3RzIGluIHRoZSByb29tLCB0aGlzIGZ1bmN0aW9uOlxuICAgKiAxLiBDb3VsZCBiZSB1c2VkIHRvIGltcGxlbWVudCBhbGwgb2YgdGhlIGZ1bmN0aW9ucyBiZWxvd1xuICAgKiAyLiBGb3JtcyBhIGNhdGFtb3JwaGlzbVxuICAgKi9cbiAgcHVibGljIGZvbGQ8VT4ob25Ob25lOiAoKSA9PiBVLCBvblNvbWU6ICh2YWx1ZTogVCkgPT4gVSk6IFUge1xuICAgIGlmICh0aGlzLnRhZykge1xuICAgICAgcmV0dXJuIG9uU29tZSh0aGlzLnZhbHVlIGFzIFQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb25Ob25lKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBpZiB0aGlzIGBPcHRpb25hbGAgb2JqZWN0IGNvbnRhaW5zIGEgdmFsdWUuXG4gICAqL1xuICBwdWJsaWMgaXNTb21lKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnRhZztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgdGhpcyBgT3B0aW9uYWxgIG9iamVjdCAqKmRvZXMgbm90KiogY29udGFpbiBhIHZhbHVlLlxuICAgKi9cbiAgcHVibGljIGlzTm9uZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMudGFnO1xuICB9XG5cbiAgLy8gLS0tIEZ1bmN0b3IgKG5hbWUgc3RvbGVuIGZyb20gSGFza2VsbCAvIG1hdGhzKSAtLS1cblxuICAvKipcbiAgICogUGVyZm9ybSBhIHRyYW5zZm9ybSBvbiBhbiBgT3B0aW9uYWxgIG9iamVjdCwgKippZioqIHRoZXJlIGlzIGEgdmFsdWUuIElmXG4gICAqIHlvdSBwcm92aWRlIGEgZnVuY3Rpb24gdG8gdHVybiBhIFQgaW50byBhIFUsIHRoaXMgaXMgdGhlIGZ1bmN0aW9uIHlvdSB1c2VcbiAgICogdG8gdHVybiBhbiBgT3B0aW9uYWw8VD5gIGludG8gYW4gYE9wdGlvbmFsPFU+YC4gSWYgdGhpcyAqKmRvZXMqKiBjb250YWluXG4gICAqIGEgdmFsdWUgdGhlbiB0aGUgb3V0cHV0IHdpbGwgYWxzbyBjb250YWluIGEgdmFsdWUgKHRoYXQgdmFsdWUgYmVpbmcgdGhlXG4gICAqIG91dHB1dCBvZiBgbWFwcGVyKHRoaXMudmFsdWUpYCksIGFuZCBpZiB0aGlzICoqZG9lcyBub3QqKiBjb250YWluIGEgdmFsdWVcbiAgICogdGhlbiBuZWl0aGVyIHdpbGwgdGhlIG91dHB1dC5cbiAgICovXG4gIHB1YmxpYyBtYXA8VT4obWFwcGVyOiAodmFsdWU6IFQpID0+IFUpOiBPcHRpb25hbDxVPiB7XG4gICAgaWYgKHRoaXMudGFnKSB7XG4gICAgICByZXR1cm4gT3B0aW9uYWwuc29tZShtYXBwZXIodGhpcy52YWx1ZSBhcyBUKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBPcHRpb25hbC5ub25lKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tIE1vbmFkIChuYW1lIHN0b2xlbiBmcm9tIEhhc2tlbGwgLyBtYXRocykgLS0tXG5cbiAgLyoqXG4gICAqIFBlcmZvcm0gYSB0cmFuc2Zvcm0gb24gYW4gYE9wdGlvbmFsYCBvYmplY3QsICoqaWYqKiB0aGVyZSBpcyBhIHZhbHVlLlxuICAgKiBVbmxpa2UgYG1hcGAsIGhlcmUgdGhlIHRyYW5zZm9ybSBpdHNlbGYgYWxzbyByZXR1cm5zIGFuIGBPcHRpb25hbGAuXG4gICAqL1xuICBwdWJsaWMgYmluZDxVPihiaW5kZXI6ICh2YWx1ZTogVCkgPT4gT3B0aW9uYWw8VT4pOiBPcHRpb25hbDxVPiB7XG4gICAgaWYgKHRoaXMudGFnKSB7XG4gICAgICByZXR1cm4gYmluZGVyKHRoaXMudmFsdWUgYXMgVCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBPcHRpb25hbC5ub25lKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tIFRyYXZlcnNhYmxlIChuYW1lIHN0b2xlbiBmcm9tIEhhc2tlbGwgLyBtYXRocykgLS0tXG5cbiAgLyoqXG4gICAqIEZvciBhIGdpdmVuIHByZWRpY2F0ZSwgdGhpcyBmdW5jdGlvbiBmaW5kcyBvdXQgaWYgdGhlcmUgKipleGlzdHMqKiBhIHZhbHVlXG4gICAqIGluc2lkZSB0aGlzIGBPcHRpb25hbGAgb2JqZWN0IHRoYXQgbWVldHMgdGhlIHByZWRpY2F0ZS4gSW4gcHJhY3RpY2UsIHRoaXNcbiAgICogbWVhbnMgdGhhdCBmb3IgYE9wdGlvbmFsYHMgdGhhdCBkbyBub3QgY29udGFpbiBhIHZhbHVlIGl0IHJldHVybnMgZmFsc2UgKGFzXG4gICAqIG5vIHByZWRpY2F0ZS1tZWV0aW5nIHZhbHVlIGV4aXN0cykuXG4gICAqL1xuICBwdWJsaWMgZXhpc3RzKHByZWRpY2F0ZTogKHZhbHVlOiBUKSA9PiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudGFnICYmIHByZWRpY2F0ZSh0aGlzLnZhbHVlIGFzIFQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvciBhIGdpdmVuIHByZWRpY2F0ZSwgdGhpcyBmdW5jdGlvbiBmaW5kcyBvdXQgaWYgKiphbGwqKiB0aGUgdmFsdWVzIGluc2lkZVxuICAgKiB0aGlzIGBPcHRpb25hbGAgb2JqZWN0IG1lZXQgdGhlIHByZWRpY2F0ZS4gSW4gcHJhY3RpY2UsIHRoaXMgbWVhbnMgdGhhdFxuICAgKiBmb3IgYE9wdGlvbmFsYHMgdGhhdCBkbyBub3QgY29udGFpbiBhIHZhbHVlIGl0IHJldHVybnMgdHJ1ZSAoYXMgYWxsIDBcbiAgICogb2JqZWN0cyBkbyBtZWV0IHRoZSBwcmVkaWNhdGUpLlxuICAgKi9cbiAgcHVibGljIGZvcmFsbChwcmVkaWNhdGU6ICh2YWx1ZTogVCkgPT4gYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy50YWcgfHwgcHJlZGljYXRlKHRoaXMudmFsdWUgYXMgVCk7XG4gIH1cblxuICAvKipcbiAgICogRm9yIGEgZ2l2ZW4gcHJlZGljYXRlLCBjcmVhdGUgYSBuZXcgYE9wdGlvbmFsYCBvYmplY3QgdGhhdCB3aWxsIHJldGFpblxuICAgKiBhbGwgdGhlIHZhbHVlcyBpbnNpZGUgdGhlIG9sZCBgT3B0aW9uYWxgIG9iamVjdCB0aGF0IG1lZXQgdGhlIHByZWRpY2F0ZS5cbiAgICogSW4gcHJhY3RpY2UsIHRoZSBgT3B0aW9uYWxgIG9iamVjdCBjb250YWlucyBlaXRoZXIgMCBvciAxIG9iamVjdHMsIGFuZFxuICAgKiB0aGUgb3V0cHV0IHdpbGwga2VlcCB0aGUgKHNpbmdsZSkgaW5wdXQgb2JqZWN0IChpZiBpdCBleGlzdHMpIGFzIGxvbmcgYXNcbiAgICogaXQgcGFzc2VzIHRoZSBwcmVkaWNhdGUuXG4gICAqL1xuICBwdWJsaWMgZmlsdGVyPFUgZXh0ZW5kcyBUPihwcmVkaWNhdGU6ICh2YWx1ZTogVCkgPT4gdmFsdWUgaXMgVSk6IE9wdGlvbmFsPFU+O1xuICBwdWJsaWMgZmlsdGVyKHByZWRpY2F0ZTogKHZhbHVlOiBUKSA9PiBib29sZWFuKTogT3B0aW9uYWw8VD47XG4gIHB1YmxpYyBmaWx0ZXIocHJlZGljYXRlOiAodmFsdWU6IFQpID0+IGJvb2xlYW4pOiBPcHRpb25hbDxUPiB7XG4gICAgaWYgKCF0aGlzLnRhZyB8fCBwcmVkaWNhdGUodGhpcy52YWx1ZSBhcyBUKSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBPcHRpb25hbC5ub25lKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tIEdldHRlcnMgLS0tXG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdmFsdWUgb3V0IG9mIHRoZSBpbnNpZGUgb2YgdGhlIGBPcHRpb25hbGAgb2JqZWN0LCB1c2luZyBhIGRlZmF1bHRcbiAgICogYHJlcGxhY2VtZW50YCB2YWx1ZSBpZiB0aGUgcHJvdmlkZWQgYE9wdGlvbmFsYCBvYmplY3QgZG9lcyBub3QgY29udGFpbiBhXG4gICAqIHZhbHVlLlxuICAgKi9cbiAgcHVibGljIGdldE9yPFUgPSBUPihyZXBsYWNlbWVudDogVSk6IFQgfCBVIHtcbiAgICByZXR1cm4gdGhpcy50YWcgPyB0aGlzLnZhbHVlIGFzIFQgOiByZXBsYWNlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHZhbHVlIG91dCBvZiB0aGUgaW5zaWRlIG9mIHRoZSBgT3B0aW9uYWxgIG9iamVjdCwgdXNpbmcgYSBkZWZhdWx0XG4gICAqIGByZXBsYWNlbWVudGAgdmFsdWUgaWYgdGhlIHByb3ZpZGVkIGBPcHRpb25hbGAgb2JqZWN0IGRvZXMgbm90IGNvbnRhaW4gYVxuICAgKiB2YWx1ZS4gIFVubGlrZSBgZ2V0T3JgLCBpbiB0aGlzIG1ldGhvZCB0aGUgYHJlcGxhY2VtZW50YCBvYmplY3QgaXMgYWxzb1xuICAgKiBgT3B0aW9uYWxgIC0gbWVhbmluZyB0aGF0IHRoaXMgbWV0aG9kIHdpbGwgYWx3YXlzIHJldHVybiBhbiBgT3B0aW9uYWxgLlxuICAgKi9cbiAgcHVibGljIG9yPFUgPSBUPihyZXBsYWNlbWVudDogT3B0aW9uYWw8VT4pOiBPcHRpb25hbDxUIHwgVT4ge1xuICAgIHJldHVybiB0aGlzLnRhZyA/IHRoaXMgOiByZXBsYWNlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHZhbHVlIG91dCBvZiB0aGUgaW5zaWRlIG9mIHRoZSBgT3B0aW9uYWxgIG9iamVjdCwgdXNpbmcgYSBkZWZhdWx0XG4gICAqIGByZXBsYWNlbWVudGAgdmFsdWUgaWYgdGhlIHByb3ZpZGVkIGBPcHRpb25hbGAgb2JqZWN0IGRvZXMgbm90IGNvbnRhaW4gYVxuICAgKiB2YWx1ZS4gVW5saWtlIGBnZXRPcmAsIGluIHRoaXMgbWV0aG9kIHRoZSBgcmVwbGFjZW1lbnRgIHZhbHVlIGlzXG4gICAqIFwidGh1bmtlZFwiIC0gdGhhdCBpcyB0byBzYXkgdGhhdCB5b3UgZG9uJ3QgcGFzcyBhIHZhbHVlIHRvIGBnZXRPclRodW5rYCwgeW91XG4gICAqIHBhc3MgYSBmdW5jdGlvbiB3aGljaCAoaWYgY2FsbGVkKSB3aWxsICoqcmV0dXJuKiogdGhlIGB2YWx1ZWAgeW91IHdhbnQgdG9cbiAgICogdXNlLlxuICAgKi9cbiAgcHVibGljIGdldE9yVGh1bms8VSA9IFQ+KHRodW5rOiAoKSA9PiBVKTogVCB8IFUge1xuICAgIHJldHVybiB0aGlzLnRhZyA/IHRoaXMudmFsdWUgYXMgVCA6IHRodW5rKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB2YWx1ZSBvdXQgb2YgdGhlIGluc2lkZSBvZiB0aGUgYE9wdGlvbmFsYCBvYmplY3QsIHVzaW5nIGEgZGVmYXVsdFxuICAgKiBgcmVwbGFjZW1lbnRgIHZhbHVlIGlmIHRoZSBwcm92aWRlZCBPcHRpb25hbCBvYmplY3QgZG9lcyBub3QgY29udGFpbiBhXG4gICAqIHZhbHVlLlxuICAgKlxuICAgKiBVbmxpa2UgYG9yYCwgaW4gdGhpcyBtZXRob2QgdGhlIGByZXBsYWNlbWVudGAgdmFsdWUgaXMgXCJ0aHVua2VkXCIgLSB0aGF0IGlzXG4gICAqIHRvIHNheSB0aGF0IHlvdSBkb24ndCBwYXNzIGEgdmFsdWUgdG8gYG9yVGh1bmtgLCB5b3UgcGFzcyBhIGZ1bmN0aW9uIHdoaWNoXG4gICAqIChpZiBjYWxsZWQpIHdpbGwgKipyZXR1cm4qKiB0aGUgYHZhbHVlYCB5b3Ugd2FudCB0byB1c2UuXG4gICAqXG4gICAqIFVubGlrZSBgZ2V0T3JUaHVua2AsIGluIHRoaXMgbWV0aG9kIHRoZSBgcmVwbGFjZW1lbnRgIHZhbHVlIGlzIGFsc29cbiAgICogYE9wdGlvbmFsYCwgbWVhbmluZyB0aGF0IHRoaXMgbWV0aG9kIHdpbGwgYWx3YXlzIHJldHVybiBhbiBgT3B0aW9uYWxgLlxuICAgKi9cbiAgcHVibGljIG9yVGh1bms8VSA9IFQ+KHRodW5rOiAoKSA9PiBPcHRpb25hbDxVPik6IE9wdGlvbmFsPFQgfCBVPiB7XG4gICAgcmV0dXJuIHRoaXMudGFnID8gdGhpcyA6IHRodW5rKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB2YWx1ZSBvdXQgb2YgdGhlIGluc2lkZSBvZiB0aGUgYE9wdGlvbmFsYCBvYmplY3QsIHRocm93aW5nIGFuXG4gICAqIGV4Y2VwdGlvbiBpZiB0aGUgcHJvdmlkZWQgYE9wdGlvbmFsYCBvYmplY3QgZG9lcyBub3QgY29udGFpbiBhIHZhbHVlLlxuICAgKlxuICAgKiBXQVJOSU5HOlxuICAgKiBZb3Ugc2hvdWxkIG9ubHkgYmUgdXNpbmcgdGhpcyBmdW5jdGlvbiBpZiB5b3Uga25vdyB0aGF0IHRoZSBgT3B0aW9uYWxgXG4gICAqIG9iamVjdCAqKmlzIG5vdCoqIGVtcHR5IChvdGhlcndpc2UgeW91J3JlIHRocm93aW5nIGV4Y2VwdGlvbnMgaW4gcHJvZHVjdGlvblxuICAgKiBjb2RlLCB3aGljaCBpcyBiYWQpLlxuICAgKlxuICAgKiBJbiB0ZXN0cyB0aGlzIGlzIG1vcmUgYWNjZXB0YWJsZS5cbiAgICpcbiAgICogUHJlZmVyIG90aGVyIG1ldGhvZHMgdG8gdGhpcywgc3VjaCBhcyBgLmVhY2hgLlxuICAgKi9cbiAgcHVibGljIGdldE9yRGllKG1lc3NhZ2U/OiBzdHJpbmcpOiBUIHtcbiAgICBpZiAoIXRoaXMudGFnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSA/PyAnQ2FsbGVkIGdldE9yRGllIG9uIE5vbmUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWUgYXMgVDtcbiAgICB9XG4gIH1cblxuICAvLyAtLS0gSW50ZXJvcCB3aXRoIG51bGwgYW5kIHVuZGVmaW5lZCAtLS1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBgT3B0aW9uYWxgIHZhbHVlIGZyb20gYSBudWxsYWJsZSAob3IgdW5kZWZpbmVkLWFibGUpIGlucHV0LlxuICAgKiBOdWxsLCBvciB1bmRlZmluZWQsIGlzIGNvbnZlcnRlZCB0byBgTm9uZWAsIGFuZCBhbnl0aGluZyBlbHNlIGlzIGNvbnZlcnRlZFxuICAgKiB0byBgU29tZWAuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGZyb208VD4odGhpczogdm9pZCwgdmFsdWU6IFQgfCBudWxsIHwgdW5kZWZpbmVkKTogT3B0aW9uYWw8Tm9uTnVsbGFibGU8VD4+IHtcbiAgICByZXR1cm4gVHlwZS5pc05vbk51bGxhYmxlKHZhbHVlKSA/IE9wdGlvbmFsLnNvbWUodmFsdWUpIDogT3B0aW9uYWwubm9uZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGFuIGBPcHRpb25hbGAgdG8gYSBudWxsYWJsZSB0eXBlLCBieSBnZXR0aW5nIHRoZSB2YWx1ZSBpZiBpdFxuICAgKiBleGlzdHMsIG9yIHJldHVybmluZyBgbnVsbGAgaWYgaXQgZG9lcyBub3QuXG4gICAqL1xuICBwdWJsaWMgZ2V0T3JOdWxsKCk6IFQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy50YWcgPyB0aGlzLnZhbHVlIGFzIFQgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGFuIGBPcHRpb25hbGAgdG8gYW4gdW5kZWZpbmVkLWFibGUgdHlwZSwgYnkgZ2V0dGluZyB0aGUgdmFsdWUgaWZcbiAgICogaXQgZXhpc3RzLCBvciByZXR1cm5pbmcgYHVuZGVmaW5lZGAgaWYgaXQgZG9lcyBub3QuXG4gICAqL1xuICBwdWJsaWMgZ2V0T3JVbmRlZmluZWQoKTogVCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cblxuICAvLyAtLS0gVXRpbGl0aWVzIC0tLVxuXG4gIC8qKlxuICAgKiBJZiB0aGUgYE9wdGlvbmFsYCBjb250YWlucyBhIHZhbHVlLCBwZXJmb3JtIGFuIGFjdGlvbiBvbiB0aGF0IHZhbHVlLlxuICAgKiBVbmxpa2UgdGhlIHJlc3Qgb2YgdGhlIG1ldGhvZHMgb24gdGhpcyB0eXBlLCBgLmVhY2hgIGhhcyBzaWRlLWVmZmVjdHMuIElmXG4gICAqIHlvdSB3YW50IHRvIHRyYW5zZm9ybSBhbiBgT3B0aW9uYWw8VD5gICoqaW50byoqIHNvbWV0aGluZywgdGhlbiB0aGlzIGlzIG5vdFxuICAgKiB0aGUgbWV0aG9kIGZvciB5b3UuIElmIHlvdSB3YW50IHRvIHVzZSBhbiBgT3B0aW9uYWw8VD5gIHRvICoqZG8qKlxuICAgKiBzb21ldGhpbmcsIHRoZW4gdGhpcyBpcyB0aGUgbWV0aG9kIGZvciB5b3UgLSBwcm92aWRlZCB5b3UncmUgb2theSB3aXRoIG5vdFxuICAgKiBkb2luZyBhbnl0aGluZyBpbiB0aGUgY2FzZSB3aGVyZSB0aGUgYE9wdGlvbmFsYCBkb2Vzbid0IGhhdmUgYSB2YWx1ZSBpbnNpZGVcbiAgICogaXQuIElmIHlvdSdyZSBub3Qgc3VyZSB3aGV0aGVyIHlvdXIgdXNlLWNhc2UgZml0cyBpbnRvIHRyYW5zZm9ybWluZ1xuICAgKiAqKmludG8qKiBzb21ldGhpbmcgb3IgKipkb2luZyoqIHNvbWV0aGluZywgY2hlY2sgd2hldGhlciBpdCBoYXMgYSByZXR1cm5cbiAgICogdmFsdWUuIElmIGl0IGRvZXMsIHlvdSBzaG91bGQgYmUgcGVyZm9ybWluZyBhIHRyYW5zZm9ybS5cbiAgICovXG4gIHB1YmxpYyBlYWNoKHdvcmtlcjogKHZhbHVlOiBUKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudGFnKSB7XG4gICAgICB3b3JrZXIodGhpcy52YWx1ZSBhcyBUKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVHVybiB0aGUgYE9wdGlvbmFsYCBvYmplY3QgaW50byBhbiBhcnJheSB0aGF0IGNvbnRhaW5zIGFsbCBvZiB0aGUgdmFsdWVzXG4gICAqIHN0b3JlZCBpbnNpZGUgdGhlIGBPcHRpb25hbGAuIEluIHByYWN0aWNlLCB0aGlzIG1lYW5zIHRoZSBvdXRwdXQgd2lsbCBoYXZlXG4gICAqIGVpdGhlciAwIG9yIDEgZWxlbWVudHMuXG4gICAqL1xuICBwdWJsaWMgdG9BcnJheSgpOiBUW10ge1xuICAgIHJldHVybiB0aGlzLnRhZyA/IFsgdGhpcy52YWx1ZSBhcyBUIF0gOiBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUdXJuIHRoZSBgT3B0aW9uYWxgIG9iamVjdCBpbnRvIGEgc3RyaW5nIGZvciBkZWJ1Z2dpbmcgb3IgcHJpbnRpbmcuIE5vdFxuICAgKiByZWNvbW1lbmRlZCBmb3IgcHJvZHVjdGlvbiBjb2RlLCBidXQgZ29vZCBmb3IgZGVidWdnaW5nLiBBbHNvIG5vdGUgdGhhdFxuICAgKiB0aGVzZSBkYXlzIGFuIGBPcHRpb25hbGAgb2JqZWN0IGNhbiBiZSBsb2dnZWQgdG8gdGhlIGNvbnNvbGUgZGlyZWN0bHksIGFuZFxuICAgKiBpdHMgaW5uZXIgdmFsdWUgKGlmIGl0IGV4aXN0cykgd2lsbCBiZSB2aXNpYmxlLlxuICAgKi9cbiAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudGFnID8gYHNvbWUoJHt0aGlzLnZhbHVlfSlgIDogJ25vbmUoKSc7XG4gIH1cbn1cbiIsIi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvR3VpZGUvUmVndWxhcl9FeHByZXNzaW9ucyNlc2NhcGluZ1xuZXhwb3J0IGNvbnN0IGVzY2FwZSA9ICh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcgPT5cbiAgdGV4dC5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgJ1xcXFwkJicpO1xuIiwiaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSAnLi9HbG9iYWwnO1xuXG4vKiogcGF0aCA6OiAoW1N0cmluZ10sIEpzT2JqPykgLT4gSnNPYmogKi9cbmV4cG9ydCBjb25zdCBwYXRoID0gPFQ+KHBhcnRzOiBzdHJpbmdbXSwgc2NvcGU/OiB7fSk6IFQgfCB1bmRlZmluZWQgPT4ge1xuICBsZXQgbyA9IHNjb3BlICE9PSB1bmRlZmluZWQgJiYgc2NvcGUgIT09IG51bGwgPyBzY29wZSA6IEdsb2JhbDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGggJiYgbyAhPT0gdW5kZWZpbmVkICYmIG8gIT09IG51bGw7ICsraSkge1xuICAgIG8gPSBvW3BhcnRzW2ldXTtcbiAgfVxuICByZXR1cm4gbztcbn07XG5cbi8qKiByZXNvbHZlIDo6IChTdHJpbmcsIEpzT2JqPykgLT4gSnNPYmogKi9cbmV4cG9ydCBjb25zdCByZXNvbHZlID0gPFQ+KHA6IHN0cmluZywgc2NvcGU/OiB7fSk6IFQgfCB1bmRlZmluZWQgPT4ge1xuICBjb25zdCBwYXJ0cyA9IHAuc3BsaXQoJy4nKTtcbiAgcmV0dXJuIHBhdGgocGFydHMsIHNjb3BlKTtcbn07XG5cbi8qKiBzdGVwIDo6IChKc09iaiwgU3RyaW5nKSAtPiBKc09iaiAqL1xuZXhwb3J0IGNvbnN0IHN0ZXAgPSA8VCBleHRlbmRzIHt9LCBLIGV4dGVuZHMga2V5b2YgVD4obzogVCwgcGFydDogSyk6IFRbS10gPT4ge1xuICBpZiAob1twYXJ0XSA9PT0gdW5kZWZpbmVkIHx8IG9bcGFydF0gPT09IG51bGwpIHtcbiAgICBvW3BhcnRdID0ge30gYXMgVFtLXTtcbiAgfVxuICByZXR1cm4gb1twYXJ0XTtcbn07XG5cbi8qKiBmb3JnZSA6OiAoW1N0cmluZ10sIEpzT2JqPykgLT4gSnNPYmogKi9cbmV4cG9ydCBjb25zdCBmb3JnZSA9IDxUIGV4dGVuZHMgc3RyaW5nW10+KHBhcnRzOiBULCB0YXJnZXQ/OiB7fSk6IHsgWyBLIGluIFRbbnVtYmVyXV06IHt9fSA9PiB7XG4gIGxldCBvID0gdGFyZ2V0ICE9PSB1bmRlZmluZWQgPyB0YXJnZXQgOiBHbG9iYWw7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyArK2kpIHtcbiAgICBvID0gc3RlcChvLCBwYXJ0c1tpXSk7XG4gIH1cbiAgcmV0dXJuIG87XG59O1xuXG4vKiogbmFtZXNwYWNlIDo6IChTdHJpbmcsIEpzT2JqPykgLT4gSnNPYmogKi9cbmV4cG9ydCBjb25zdCBuYW1lc3BhY2UgPSAobmFtZTogc3RyaW5nLCB0YXJnZXQ/OiB7fSk6IHsgW2tleTogc3RyaW5nXToge319ID0+IHtcbiAgY29uc3QgcGFydHMgPSBuYW1lLnNwbGl0KCcuJyk7XG4gIHJldHVybiBmb3JnZShwYXJ0cywgdGFyZ2V0KTtcbn07XG4iLCJpbXBvcnQgeyBDZWxsIH0gZnJvbSAnLi9DZWxsJztcbmltcG9ydCAqIGFzIEZ1biBmcm9tICcuL0Z1bic7XG5pbXBvcnQgeyBPcHRpb25hbCB9IGZyb20gJy4vT3B0aW9uYWwnO1xuXG5pbnRlcmZhY2UgU2luZ2xldG9uPFQ+IHtcbiAgcmVhZG9ubHkgY2xlYXI6ICgpID0+IHZvaWQ7XG4gIHJlYWRvbmx5IGlzU2V0OiAoKSA9PiBib29sZWFuO1xuICByZWFkb25seSBnZXQ6ICgpID0+IE9wdGlvbmFsPFQ+O1xuICByZWFkb25seSBzZXQ6ICh2YWx1ZTogVCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXBlYXRhYmxlIHtcbiAgcmVhZG9ubHkgY2xlYXI6ICgpID0+IHZvaWQ7XG4gIHJlYWRvbmx5IGlzU2V0OiAoKSA9PiBib29sZWFuO1xuICByZWFkb25seSBnZXQ6ICgpID0+IE9wdGlvbmFsPG51bWJlcj47XG4gIHJlYWRvbmx5IHNldDogKGZ1bmN0aW9uVG9SZXBlYXQ6ICgpID0+IHZvaWQpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmV2b2NhYmxlPFQ+IGV4dGVuZHMgU2luZ2xldG9uPFQ+IHsgfVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwaTxUPiBleHRlbmRzIFNpbmdsZXRvbjxUPiB7XG4gIHJlYWRvbmx5IHJ1bjogKGZuOiAoZGF0YTogVCkgPT4gdm9pZCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBWYWx1ZTxUPiBleHRlbmRzIFNpbmdsZXRvbjxUPiB7XG4gIHJlYWRvbmx5IG9uOiAoZm46IChkYXRhOiBUKSA9PiB2b2lkKSA9PiB2b2lkO1xufVxuXG5jb25zdCBzaW5nbGV0b24gPSA8VD4gKGRvUmV2b2tlOiAoZGF0YTogVCkgPT4gdm9pZCk6IFNpbmdsZXRvbjxUPiA9PiB7XG4gIGNvbnN0IHN1YmplY3QgPSBDZWxsKE9wdGlvbmFsLm5vbmU8VD4oKSk7XG5cbiAgY29uc3QgcmV2b2tlID0gKCk6IHZvaWQgPT4gc3ViamVjdC5nZXQoKS5lYWNoKGRvUmV2b2tlKTtcblxuICBjb25zdCBjbGVhciA9ICgpID0+IHtcbiAgICByZXZva2UoKTtcbiAgICBzdWJqZWN0LnNldChPcHRpb25hbC5ub25lKCkpO1xuICB9O1xuXG4gIGNvbnN0IGlzU2V0ID0gKCkgPT4gc3ViamVjdC5nZXQoKS5pc1NvbWUoKTtcblxuICBjb25zdCBnZXQgPSAoKTogT3B0aW9uYWw8VD4gPT4gc3ViamVjdC5nZXQoKTtcblxuICBjb25zdCBzZXQgPSAoczogVCkgPT4ge1xuICAgIHJldm9rZSgpO1xuICAgIHN1YmplY3Quc2V0KE9wdGlvbmFsLnNvbWUocykpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY2xlYXIsXG4gICAgaXNTZXQsXG4gICAgZ2V0LFxuICAgIHNldFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHJlcGVhdGFibGUgPSAoZGVsYXk6IG51bWJlcik6IFJlcGVhdGFibGUgPT4ge1xuICBjb25zdCBpbnRlcnZhbElkID0gQ2VsbChPcHRpb25hbC5ub25lPG51bWJlcj4oKSk7XG5cbiAgY29uc3QgcmV2b2tlID0gKCk6IHZvaWQgPT4gaW50ZXJ2YWxJZC5nZXQoKS5lYWNoKChpZCkgPT4gY2xlYXJJbnRlcnZhbChpZCkpO1xuXG4gIGNvbnN0IGNsZWFyID0gKCkgPT4ge1xuICAgIHJldm9rZSgpO1xuICAgIGludGVydmFsSWQuc2V0KE9wdGlvbmFsLm5vbmUoKSk7XG4gIH07XG5cbiAgY29uc3QgaXNTZXQgPSAoKSA9PiBpbnRlcnZhbElkLmdldCgpLmlzU29tZSgpO1xuXG4gIGNvbnN0IGdldCA9ICgpOiBPcHRpb25hbDxudW1iZXI+ID0+IGludGVydmFsSWQuZ2V0KCk7XG5cbiAgY29uc3Qgc2V0ID0gKGZ1bmN0aW9uVG9SZXBlYXQ6ICgpID0+IHZvaWQpID0+IHtcbiAgICByZXZva2UoKTtcbiAgICBpbnRlcnZhbElkLnNldChPcHRpb25hbC5zb21lKHNldEludGVydmFsKGZ1bmN0aW9uVG9SZXBlYXQsIGRlbGF5KSkpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY2xlYXIsXG4gICAgaXNTZXQsXG4gICAgZ2V0LFxuICAgIHNldCxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZXN0cm95YWJsZSA9IDxUIGV4dGVuZHMgeyBkZXN0cm95OiAoKSA9PiB2b2lkIH0+ICgpOiBSZXZvY2FibGU8VD4gPT4gc2luZ2xldG9uPFQ+KChzKSA9PiBzLmRlc3Ryb3koKSk7XG5cbmV4cG9ydCBjb25zdCB1bmJpbmRhYmxlID0gPFQgZXh0ZW5kcyB7IHVuYmluZDogKCkgPT4gdm9pZCB9PiAoKTogUmV2b2NhYmxlPFQ+ID0+IHNpbmdsZXRvbjxUPigocykgPT4gcy51bmJpbmQoKSk7XG5cbmV4cG9ydCBjb25zdCBhcGkgPSA8VCBleHRlbmRzIHsgZGVzdHJveTogKCkgPT4gdm9pZCB9PiAoKTogQXBpPFQ+ID0+IHtcbiAgY29uc3Qgc3ViamVjdCA9IGRlc3Ryb3lhYmxlPFQ+KCk7XG5cbiAgY29uc3QgcnVuID0gKGY6IChkYXRhOiBUKSA9PiB2b2lkKSA9PiBzdWJqZWN0LmdldCgpLmVhY2goZik7XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5zdWJqZWN0LFxuICAgIHJ1blxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHZhbHVlID0gPFQ+ICgpOiBWYWx1ZTxUPiA9PiB7XG4gIGNvbnN0IHN1YmplY3QgPSBzaW5nbGV0b24oRnVuLm5vb3ApO1xuXG4gIGNvbnN0IG9uID0gKGY6IChkYXRhOiBUKSA9PiB2b2lkKSA9PiBzdWJqZWN0LmdldCgpLmVhY2goZik7XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5zdWJqZWN0LFxuICAgIG9uXG4gIH07XG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXdyYXBwZXItb2JqZWN0LXR5cGVzICovXG5jb25zdCBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcblxuaW50ZXJmYWNlIENvbnN0cnVjdG9yPFQgZXh0ZW5kcyBPYmplY3Q+IHtcbiAgcmVhZG9ubHkgcHJvdG90eXBlOiBUO1xuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG59XG5cbmNvbnN0IGhhc1Byb3RvID0gPFQgZXh0ZW5kcyBPYmplY3Q+KHY6IE9iamVjdCwgY29uc3RydWN0b3I6IENvbnN0cnVjdG9yPFQ+LCBwcmVkaWNhdGU6ICh2OiBPYmplY3QsIHByb3RvdHlwZTogVCkgPT4gYm9vbGVhbik6IGJvb2xlYW4gPT4ge1xuICBpZiAocHJlZGljYXRlKHYsIGNvbnN0cnVjdG9yLnByb3RvdHlwZSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICAvLyBTdHJpbmctYmFzZWQgZmFsbGJhY2sgdGltZVxuICAgIHJldHVybiB2LmNvbnN0cnVjdG9yPy5uYW1lID09PSBjb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG59O1xuXG5jb25zdCB0eXBlT2YgPSAoeDogYW55KTogc3RyaW5nID0+IHtcbiAgY29uc3QgdCA9IHR5cGVvZiB4O1xuICBpZiAoeCA9PT0gbnVsbCkge1xuICAgIHJldHVybiAnbnVsbCc7XG4gIH0gZWxzZSBpZiAodCA9PT0gJ29iamVjdCcgJiYgQXJyYXkuaXNBcnJheSh4KSkge1xuICAgIHJldHVybiAnYXJyYXknO1xuICB9IGVsc2UgaWYgKHQgPT09ICdvYmplY3QnICYmIGhhc1Byb3RvKHgsIFN0cmluZywgKG8sIHByb3RvKSA9PiBwcm90by5pc1Byb3RvdHlwZU9mKG8pKSkge1xuICAgIHJldHVybiAnc3RyaW5nJztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdDtcbiAgfVxufTtcblxuY29uc3QgaXNUeXBlID0gPFlvbG8+KHR5cGU6IHN0cmluZykgPT4gKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBZb2xvID0+XG4gIHR5cGVPZih2YWx1ZSkgPT09IHR5cGU7XG5cbmNvbnN0IGlzU2ltcGxlVHlwZSA9IDxZb2xvPih0eXBlOiBzdHJpbmcpID0+ICh2YWx1ZTogYW55KTogdmFsdWUgaXMgWW9sbyA9PlxuICB0eXBlb2YgdmFsdWUgPT09IHR5cGU7XG5cbmNvbnN0IGVxID0gPFQ+ICh0OiBUKSA9PiAoYTogYW55KTogYSBpcyBUID0+XG4gIHQgPT09IGE7XG5cbmV4cG9ydCBjb25zdCBpcyA9IDxFIGV4dGVuZHMgT2JqZWN0Pih2YWx1ZTogYW55LCBjb25zdHJ1Y3RvcjogQ29uc3RydWN0b3I8RT4pOiB2YWx1ZSBpcyBFID0+XG4gIGlzT2JqZWN0KHZhbHVlKSAmJiBoYXNQcm90bzxFPih2YWx1ZSwgY29uc3RydWN0b3IsIChvLCBwcm90bykgPT4gZ2V0UHJvdG90eXBlT2YobykgPT09IHByb3RvKTtcblxuZXhwb3J0IGNvbnN0IGlzU3RyaW5nOiAodmFsdWU6IGFueSkgPT4gdmFsdWUgaXMgc3RyaW5nID1cbiAgaXNUeXBlKCdzdHJpbmcnKTtcblxuZXhwb3J0IGNvbnN0IGlzT2JqZWN0OiAodmFsdWU6IGFueSkgPT4gdmFsdWUgaXMgT2JqZWN0ID1cbiAgaXNUeXBlKCdvYmplY3QnKTtcblxuZXhwb3J0IGNvbnN0IGlzUGxhaW5PYmplY3QgPSAodmFsdWU6IHVua25vd24pOiB2YWx1ZSBpcyBPYmplY3QgPT5cbiAgaXModmFsdWUsIE9iamVjdCk7XG5cbmV4cG9ydCBjb25zdCBpc0FycmF5OiAodmFsdWU6IGFueSkgPT4gdmFsdWUgaXMgQXJyYXk8dW5rbm93bj4gPVxuICBpc1R5cGUoJ2FycmF5Jyk7XG5cbmV4cG9ydCBjb25zdCBpc051bGw6IChhOiBhbnkpID0+IGEgaXMgbnVsbCA9XG4gIGVxKG51bGwpO1xuXG5leHBvcnQgY29uc3QgaXNCb29sZWFuOiAodmFsdWU6IGFueSkgPT4gdmFsdWUgaXMgYm9vbGVhbiA9XG4gIGlzU2ltcGxlVHlwZTxib29sZWFuPignYm9vbGVhbicpO1xuXG5leHBvcnQgY29uc3QgaXNVbmRlZmluZWQ6IChhOiBhbnkpID0+IGEgaXMgdW5kZWZpbmVkID1cbiAgZXEodW5kZWZpbmVkKTtcblxuZXhwb3J0IGNvbnN0IGlzTnVsbGFibGUgPSAoYTogYW55KTogYSBpcyBudWxsIHwgdW5kZWZpbmVkID0+XG4gIGEgPT09IG51bGwgfHwgYSA9PT0gdW5kZWZpbmVkO1xuXG5leHBvcnQgY29uc3QgaXNOb25OdWxsYWJsZSA9IDxBPiAoYTogQSB8IG51bGwgfCB1bmRlZmluZWQpOiBhIGlzIE5vbk51bGxhYmxlPEE+ID0+XG4gICFpc051bGxhYmxlKGEpO1xuXG5leHBvcnQgY29uc3QgaXNGdW5jdGlvbjogKHZhbHVlOiBhbnkpID0+IHZhbHVlIGlzIEZ1bmN0aW9uID1cbiAgaXNTaW1wbGVUeXBlPEZ1bmN0aW9uPignZnVuY3Rpb24nKTtcblxuZXhwb3J0IGNvbnN0IGlzTnVtYmVyOiAodmFsdWU6IGFueSkgPT4gdmFsdWUgaXMgbnVtYmVyID1cbiAgaXNTaW1wbGVUeXBlPG51bWJlcj4oJ251bWJlcicpO1xuXG5leHBvcnQgY29uc3QgaXNBcnJheU9mID0gPEU+KHZhbHVlOiBhbnksIHByZWQ6ICh4OiBhbnkpID0+IHggaXMgRSk6IHZhbHVlIGlzIEFycmF5PEU+ID0+IHtcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHZhbHVlLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICBpZiAoIShwcmVkKHZhbHVlW2ldKSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQgY29uc3QgaXNQcm9taXNlTGlrZSA9ICh4OiBhbnkpOiB4IGlzIFByb21pc2U8dW5rbm93bj4gPT5cbiAgaXNPYmplY3QoeClcbiAgJiYgaXNGdW5jdGlvbih4LnRoZW4pXG4gICYmIGlzRnVuY3Rpb24oeC5jYXRjaCk7XG4iLCJleHBvcnQgY29uc3QgemVyb1dpZHRoID0gJ1xcdUZFRkYnO1xuZXhwb3J0IGNvbnN0IG5ic3AgPSAnXFx1MDBBMCc7XG5leHBvcnQgY29uc3Qgc29mdEh5cGhlbiA9ICdcXHUwMEFEJztcbmV4cG9ydCBjb25zdCBlbGxpcHNpcyA9ICdcXHUyMDI2JztcblxuZXhwb3J0IGNvbnN0IGlzWndzcCA9IChjaGFyOiBzdHJpbmcpOiBib29sZWFuID0+IGNoYXIgPT09IHplcm9XaWR0aDtcbmV4cG9ydCBjb25zdCByZW1vdmVad3NwID0gKHM6IHN0cmluZyk6IHN0cmluZyA9PiBzLnJlcGxhY2UoL1xcdUZFRkYvZywgJycpO1xuIiwiaW1wb3J0IHR5cGUgeyBPcHRpb25hbCB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmltcG9ydCAqIGFzIENoYXJzIGZyb20gJy4uL3BhdHRlcm4vQ2hhcnMnO1xuaW1wb3J0IHsgQ3VzdG9tIH0gZnJvbSAnLi4vcGF0dGVybi9DdXN0b20nO1xuaW1wb3J0ICogYXMgU2FmZSBmcm9tICcuLi9wYXR0ZXJuL1NhZmUnO1xuaW1wb3J0IHR5cGUgeyBQUmVnRXhwIH0gZnJvbSAnLi4vcGF0dGVybi9UeXBlcyc7XG5pbXBvcnQgKiBhcyBVbnNhZmUgZnJvbSAnLi4vcGF0dGVybi9VbnNhZmUnO1xuXG50eXBlIFNhZmV3b3JkQXBpID0gKGlucHV0OiBzdHJpbmcpID0+IFBSZWdFeHA7XG5jb25zdCBzYWZld29yZDogU2FmZXdvcmRBcGkgPSBTYWZlLndvcmQ7XG5cbnR5cGUgU2FmZVRva2VuQXBpID0gKGlucHV0OiBzdHJpbmcpID0+IFBSZWdFeHA7XG5jb25zdCBzYWZldG9rZW46IFNhZmVUb2tlbkFwaSA9IFNhZmUudG9rZW47XG5cbnR5cGUgQ3VzdG9tQXBpID0gKHJlZ2V4OiBzdHJpbmcsIHByZWZpeDogKG1hdGNoOiBSZWdFeHBFeGVjQXJyYXkpID0+IG51bWJlciwgc3VmZml4OiAobWF0Y2g6IFJlZ0V4cEV4ZWNBcnJheSkgPT4gbnVtYmVyLCBmbGFnczogT3B0aW9uYWw8c3RyaW5nPikgPT4gUFJlZ0V4cDtcbmNvbnN0IGN1c3RvbTogQ3VzdG9tQXBpID0gQ3VzdG9tO1xuXG50eXBlIFVuc2FmZXdvcmRBcGkgPSAoaW5wdXQ6IHN0cmluZykgPT4gUFJlZ0V4cDtcbmNvbnN0IHVuc2FmZXdvcmQ6IFVuc2FmZXdvcmRBcGkgPSBVbnNhZmUud29yZDtcblxudHlwZSBVbnNhZmV0b2tlbkFwaSA9IChpbnB1dDogc3RyaW5nKSA9PiBQUmVnRXhwO1xuY29uc3QgdW5zYWZldG9rZW46IFVuc2FmZXRva2VuQXBpID0gVW5zYWZlLnRva2VuO1xuXG50eXBlIFNhbml0aXNlQXBpID0gKGlucHV0OiBzdHJpbmcpID0+IHN0cmluZztcbmNvbnN0IHNhbml0aXNlOiBTYW5pdGlzZUFwaSA9IFNhZmUuc2FuaXRpc2U7XG5cbnR5cGUgQ2hhcnNBcGkgPSAoKSA9PiBzdHJpbmc7XG5jb25zdCBjaGFyczogQ2hhcnNBcGkgPSBDaGFycy5jaGFycztcblxudHlwZSBXb3JkYnJlYWtBcGkgPSAoKSA9PiBzdHJpbmc7XG5jb25zdCB3b3JkYnJlYWs6IFdvcmRicmVha0FwaSA9IENoYXJzLndvcmRicmVhaztcblxudHlwZSBXb3JkY2hhckFwaSA9ICgpID0+IHN0cmluZztcbmNvbnN0IHdvcmRjaGFyOiBXb3JkY2hhckFwaSA9IENoYXJzLndvcmRjaGFyO1xuXG50eXBlIFB1bmN0dWF0aW9uQXBpID0gKCkgPT4gc3RyaW5nO1xuY29uc3QgcHVuY3R1YXRpb246IFB1bmN0dWF0aW9uQXBpID0gQ2hhcnMucHVuY3R1YXRpb247XG5cbmV4cG9ydCB7XG4gIHNhZmV3b3JkLFxuICBzYWZldG9rZW4sXG4gIGN1c3RvbSxcbiAgdW5zYWZld29yZCxcbiAgdW5zYWZldG9rZW4sXG4gIHNhbml0aXNlLFxuICBjaGFycyxcbiAgd29yZGJyZWFrLFxuICB3b3JkY2hhcixcbiAgcHVuY3R1YXRpb25cbn07XG4iLCJpbXBvcnQgeyBGdW4sIFVuaWNvZGUgfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5pbXBvcnQgeyBwdW5jdHVhdGlvblN0ciB9IGZyb20gJy4uL3dvcmRzL1VuaWNvZGVEYXRhJztcblxuLy8gXFx3IGlzIGEgd29yZCBjaGFyYWN0ZXJcbi8vIFwiJ1wiIGlzIGFuIGFwb3N0cm9waGVcbi8vICctJyBpcyBhIGh5cGhlblxuLy8gXFx1MDBBRCBpcyBhIHNvZnQgaHlwaGVuXG5cbi8vIChodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9MaXN0X29mX1VuaWNvZGVfY2hhcmFjdGVycyNMYXRpbl9FeHRlbmRlZC1BKVxuLy8gXFx1MDBDMCAtIFxcdTAwRkYgYXJlIHZhcmlvdXMgbGFuZ3VhZ2UgY2hhcmFjdGVycyAoTGF0aW4tMSlcbi8vIFxcdTAxMDAgLSBcXHUwMTdGIGFyZSB2YXJpb3VzIGxhbmd1YWdlIGNoYXJhY3RlcnMgKExhdGluIEV4dGVuZGVkLUEpXG4vLyBcXHUyMDE4IGFuZCBcXHUyMDE5IGFyZSB0aGUgc21hcnQgcXVvdGUgY2hhcmFjdGVyc1xuLy8gXFx1MDBBRCBpcyBhIHNvZnQgaHlwaGVuIChTSFkpIGNoYXJhY3RlclxuY29uc3QgY2hhcnNTdHIgPSAnXFxcXHcnICsgYCdgICsgJ1xcXFwtJyArIFVuaWNvZGUuc29mdEh5cGhlbiArICdcXFxcdTAxMDAtXFxcXHUwMTdGXFxcXHUwMEMwLVxcXFx1MDBGRicgKyBVbmljb2RlLnplcm9XaWR0aCArICdcXFxcdTIwMThcXFxcdTIwMTknO1xuY29uc3Qgd29yZGJyZWFrU3RyID0gJ1teJyArIGNoYXJzU3RyICsgJ10nO1xuY29uc3Qgd29yZGNoYXJTdHIgPSAnWycgKyBjaGFyc1N0ciArICddJztcblxuY29uc3QgY2hhcnMgPSBGdW4uY29uc3RhbnQoY2hhcnNTdHIpO1xuY29uc3Qgd29yZGJyZWFrID0gRnVuLmNvbnN0YW50KHdvcmRicmVha1N0cik7XG5jb25zdCB3b3JkY2hhciA9IEZ1bi5jb25zdGFudCh3b3JkY2hhclN0cik7XG5jb25zdCBwdW5jdHVhdGlvbiA9IEZ1bi5jb25zdGFudChwdW5jdHVhdGlvblN0cik7XG5cbmV4cG9ydCB7XG4gIGNoYXJzLFxuICBwdW5jdHVhdGlvbixcbiAgd29yZGJyZWFrLFxuICB3b3JkY2hhclxufTtcbiIsImltcG9ydCB0eXBlIHsgT3B0aW9uYWwgfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5pbXBvcnQgdHlwZSB7IFBSZWdFeHAgfSBmcm9tICcuL1R5cGVzJztcblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhcmlhYmxlLW5hbWVcbmV4cG9ydCBjb25zdCBDdXN0b20gPSAocmVnZXg6IHN0cmluZywgcHJlZml4OiBQUmVnRXhwWydwcmVmaXgnXSwgc3VmZml4OiBQUmVnRXhwWydzdWZmaXgnXSwgZmxhZ3M6IE9wdGlvbmFsPHN0cmluZz4pOiBQUmVnRXhwID0+IHtcbiAgY29uc3QgdGVybSA9ICgpID0+IHtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChyZWdleCwgZmxhZ3MuZ2V0T3IoJ2cnKSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICB0ZXJtLFxuICAgIHByZWZpeCxcbiAgICBzdWZmaXhcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBSZWdleCB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmltcG9ydCB0eXBlIHsgUFJlZ0V4cCB9IGZyb20gJy4vVHlwZXMnO1xuaW1wb3J0ICogYXMgVW5zYWZlIGZyb20gJy4vVW5zYWZlJztcblxuLyoqIEVzY2FwZXMgcmVnZXggY2hhcmFjdGVycyBpbiBhIHN0cmluZyAqL1xuY29uc3Qgc2FuaXRpc2UgPSBSZWdleC5lc2NhcGU7XG5cbmNvbnN0IHdvcmQgPSAoaW5wdXQ6IHN0cmluZyk6IFBSZWdFeHAgPT4ge1xuICBjb25zdCB2YWx1ZSA9IHNhbml0aXNlKGlucHV0KTtcbiAgcmV0dXJuIFVuc2FmZS53b3JkKHZhbHVlKTtcbn07XG5cbmNvbnN0IHRva2VuID0gKGlucHV0OiBzdHJpbmcpOiBQUmVnRXhwID0+IHtcbiAgY29uc3QgdmFsdWUgPSBzYW5pdGlzZShpbnB1dCk7XG4gIHJldHVybiBVbnNhZmUudG9rZW4odmFsdWUpO1xufTtcblxuZXhwb3J0IHtcbiAgc2FuaXRpc2UsXG4gIHdvcmQsXG4gIHRva2VuXG59O1xuIiwiaW1wb3J0IHsgRnVuLCBPcHRpb25hbCB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmltcG9ydCAqIGFzIENoYXJzIGZyb20gJy4vQ2hhcnMnO1xuaW1wb3J0IHsgQ3VzdG9tIH0gZnJvbSAnLi9DdXN0b20nO1xuaW1wb3J0IHR5cGUgeyBQUmVnRXhwIH0gZnJvbSAnLi9UeXBlcyc7XG5cbi8qKlxuICogVG9rZW5zIGhhdmUgbm8gcHJlZml4IG9yIHN1ZmZpeFxuICovXG5jb25zdCB0b2tlbiA9IChpbnB1dDogc3RyaW5nKTogUFJlZ0V4cCA9PiB7XG4gIHJldHVybiBDdXN0b20oaW5wdXQsIEZ1bi5jb25zdGFudCgwKSwgRnVuLmNvbnN0YW50KDApLCBPcHRpb25hbC5ub25lKCkpO1xufTtcblxuLyoqXG4gKiBXb3JkcyBoYXZlIGNvbXBsZXggcnVsZXMgYXMgdG8gd2hhdCBhIFwid29yZCBicmVha1wiIGFjdHVhbGx5IGlzLlxuICpcbiAqIFRoZXNlIGFyZSBjb25zdW1lZCBieSB0aGUgcmVnZXggYW5kIHRoZW4gZXhjbHVkZWQgYnkgcHJlZml4L3N1ZmZpeCBsZW5ndGhzLlxuICovXG5jb25zdCB3b3JkID0gKGlucHV0OiBzdHJpbmcpOiBQUmVnRXhwID0+IHtcbiAgY29uc3QgcmVnZXggPSBgKCg/Ol4nPyl8KD86YCArIENoYXJzLndvcmRicmVhaygpICsgYCsnPykpYCArIGlucHV0ICsgYCgoPzonPyQpfCg/Oic/YCArIENoYXJzLndvcmRicmVhaygpICsgJyspKSc7XG5cbiAgLy8gQVNTVU1QVElPTjogVGhlcmUgYXJlIG5vIGdyb3VwcyBpbiB0aGVpciBpbnB1dFxuICBjb25zdCBwcmVmaXggPSAobWF0Y2g6IFJlZ0V4cEV4ZWNBcnJheSkgPT4ge1xuICAgIHJldHVybiBtYXRjaC5sZW5ndGggPiAxID8gbWF0Y2hbMV0ubGVuZ3RoIDogMDtcbiAgfTtcblxuICBjb25zdCBzdWZmaXggPSAobWF0Y2g6IFJlZ0V4cEV4ZWNBcnJheSkgPT4ge1xuICAgIHJldHVybiBtYXRjaC5sZW5ndGggPiAyID8gbWF0Y2hbMl0ubGVuZ3RoIDogMDtcbiAgfTtcblxuICByZXR1cm4gQ3VzdG9tKHJlZ2V4LCBwcmVmaXgsIHN1ZmZpeCwgT3B0aW9uYWwubm9uZSgpKTtcbn07XG5cbmV4cG9ydCB7XG4gIHRva2VuLFxuICB3b3JkXG59O1xuIiwiXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5jb25zdCBwdW5jdHVhdGlvblN0ciA9IGBbfuKElnwhLSorLVxcXFwvOjs/QFxcXFxbLVxcYHt9XFx1MDBBMVxcdTAwQUJcXHUwMEI3XFx1MDBCQlxcdTAwQkY7XFx1MDBCN1xcdTA1NUEtXFx1MDU1RlxcdTA1ODlcXHUwNThBXFx1MDVCRVxcdTA1QzBcXHUwNUMzXFx1MDVDNlxcdTA1RjNcXHUwNUY0XFx1MDYwOVxcdTA2MEFcXHUwNjBDXFx1MDYwRFxcdTA2MUJcXHUwNjFFXFx1MDYxRlxcdTA2NkEtXFx1MDY2RFxcdTA2RDRcXHUwNzAwLVxcdTA3MERcXHUwN0Y3LVxcdTA3RjlcXHUwODMwLVxcdTA4M0VcXHUwODVFXFx1MDk2NFxcdTA5NjVcXHUwOTcwXFx1MERGNFxcdTBFNEZcXHUwRTVBXFx1MEU1QlxcdTBGMDQtXFx1MEYxMlxcdTBGM0EtXFx1MEYzRFxcdTBGODVcXHUwRkQwLVxcdTBGRDRcXHUwRkQ5XFx1MEZEQVxcdTEwNEEtXFx1MTA0RlxcdTEwRkJcXHUxMzYxLVxcdTEzNjhcXHUxNDAwXFx1MTY2RFxcdTE2NkVcXHUxNjlCXFx1MTY5Q1xcdTE2RUItXFx1MTZFRFxcdTE3MzVcXHUxNzM2XFx1MTdENC1cXHUxN0Q2XFx1MTdEOC1cXHUxN0RBXFx1MTgwMC1cXHUxODBBXFx1MTk0NFxcdTE5NDVcXHUxQTFFXFx1MUExRlxcdTFBQTAtXFx1MUFBNlxcdTFBQTgtXFx1MUFBRFxcdTFCNUEtXFx1MUI2MFxcdTFCRkMtXFx1MUJGRlxcdTFDM0ItXFx1MUMzRlxcdTFDN0VcXHUxQzdGXFx1MUNEM1xcdTIwMTAtXFx1MjAyN1xcdTIwMzAtXFx1MjA0M1xcdTIwNDUtXFx1MjA1MVxcdTIwNTMtXFx1MjA1RVxcdTIwN0RcXHUyMDdFXFx1MjA4RFxcdTIwOEVcXHUzMDA4XFx1MzAwOVxcdTI3NjgtXFx1Mjc3NVxcdTI3QzVcXHUyN0M2XFx1MjdFNi1cXHUyN0VGXFx1Mjk4My1cXHUyOTk4XFx1MjlEOC1cXHUyOURCXFx1MjlGQ1xcdTI5RkRcXHUyQ0Y5LVxcdTJDRkNcXHUyQ0ZFXFx1MkNGRlxcdTJENzBcXHUyRTAwLVxcdTJFMkVcXHUyRTMwXFx1MkUzMVxcdTMwMDEtXFx1MzAwM1xcdTMwMDgtXFx1MzAxMVxcdTMwMTQtXFx1MzAxRlxcdTMwMzBcXHUzMDNEXFx1MzBBMFxcdTMwRkJcXHVBNEZFXFx1QTRGRlxcdUE2MEQtXFx1QTYwRlxcdUE2NzNcXHVBNjdFXFx1QTZGMi1cXHVBNkY3XFx1QTg3NC1cXHVBODc3XFx1QThDRVxcdUE4Q0ZcXHVBOEY4LVxcdUE4RkFcXHVBOTJFXFx1QTkyRlxcdUE5NUZcXHVBOUMxLVxcdUE5Q0RcXHVBOURFXFx1QTlERlxcdUFBNUMtXFx1QUE1RlxcdUFBREVcXHVBQURGXFx1QUJFQlxcdUZEM0VcXHVGRDNGXFx1RkUxMC1cXHVGRTE5XFx1RkUzMC1cXHVGRTUyXFx1RkU1NC1cXHVGRTYxXFx1RkU2M1xcdUZFNjhcXHVGRTZBXFx1RkU2QlxcdUZGMDEtXFx1RkYwM1xcdUZGMDUtXFx1RkYwQVxcdUZGMEMtXFx1RkYwRlxcdUZGMUFcXHVGRjFCXFx1RkYxRlxcdUZGMjBcXHVGRjNCLVxcdUZGM0RcXHVGRjNGXFx1RkY1QlxcdUZGNURcXHVGRjVGLVxcdUZGNjVdYDtcblxuY29uc3QgcmVnRXhwcyA9IHtcbiAgYWxldHRlcjogJ1tBLVphLXpcXHUwMEFBXFx1MDBCNVxcdTAwQkFcXHUwMEMwLVxcdTAwRDZcXHUwMEQ4LVxcdTAwRjZcXHUwMEY4LVxcdTAyQzFcXHUwMkM2LVxcdTAyRDFcXHUwMkUwLVxcdTAyRTRcXHUwMkVDXFx1MDJFRVxcdTAzNzAtXFx1MDM3NFxcdTAzNzZcXHUwMzc3XFx1MDM3QS1cXHUwMzdEXFx1MDM4NlxcdTAzODgtXFx1MDM4QVxcdTAzOENcXHUwMzhFLVxcdTAzQTFcXHUwM0EzLVxcdTAzRjVcXHUwM0Y3LVxcdTA0ODFcXHUwNDhBLVxcdTA1MjdcXHUwNTMxLVxcdTA1NTZcXHUwNTU5XFx1MDU2MS1cXHUwNTg3XFx1MDVEMC1cXHUwNUVBXFx1MDVGMC1cXHUwNUYzXFx1MDYyMC1cXHUwNjRBXFx1MDY2RVxcdTA2NkZcXHUwNjcxLVxcdTA2RDNcXHUwNkQ1XFx1MDZFNVxcdTA2RTZcXHUwNkVFXFx1MDZFRlxcdTA2RkEtXFx1MDZGQ1xcdTA2RkZcXHUwNzEwXFx1MDcxMi1cXHUwNzJGXFx1MDc0RC1cXHUwN0E1XFx1MDdCMVxcdTA3Q0EtXFx1MDdFQVxcdTA3RjRcXHUwN0Y1XFx1MDdGQVxcdTA4MDAtXFx1MDgxNVxcdTA4MUFcXHUwODI0XFx1MDgyOFxcdTA4NDAtXFx1MDg1OFxcdTA5MDQtXFx1MDkzOVxcdTA5M0RcXHUwOTUwXFx1MDk1OC1cXHUwOTYxXFx1MDk3MS1cXHUwOTc3XFx1MDk3OS1cXHUwOTdGXFx1MDk4NS1cXHUwOThDXFx1MDk4RlxcdTA5OTBcXHUwOTkzLVxcdTA5QThcXHUwOUFBLVxcdTA5QjBcXHUwOUIyXFx1MDlCNi1cXHUwOUI5XFx1MDlCRFxcdTA5Q0VcXHUwOURDXFx1MDlERFxcdTA5REYtXFx1MDlFMVxcdTA5RjBcXHUwOUYxXFx1MEEwNS1cXHUwQTBBXFx1MEEwRlxcdTBBMTBcXHUwQTEzLVxcdTBBMjhcXHUwQTJBLVxcdTBBMzBcXHUwQTMyXFx1MEEzM1xcdTBBMzVcXHUwQTM2XFx1MEEzOFxcdTBBMzlcXHUwQTU5LVxcdTBBNUNcXHUwQTVFXFx1MEE3Mi1cXHUwQTc0XFx1MEE4NS1cXHUwQThEXFx1MEE4Ri1cXHUwQTkxXFx1MEE5My1cXHUwQUE4XFx1MEFBQS1cXHUwQUIwXFx1MEFCMlxcdTBBQjNcXHUwQUI1LVxcdTBBQjlcXHUwQUJEXFx1MEFEMFxcdTBBRTBcXHUwQUUxXFx1MEIwNS1cXHUwQjBDXFx1MEIwRlxcdTBCMTBcXHUwQjEzLVxcdTBCMjhcXHUwQjJBLVxcdTBCMzBcXHUwQjMyXFx1MEIzM1xcdTBCMzUtXFx1MEIzOVxcdTBCM0RcXHUwQjVDXFx1MEI1RFxcdTBCNUYtXFx1MEI2MVxcdTBCNzFcXHUwQjgzXFx1MEI4NS1cXHUwQjhBXFx1MEI4RS1cXHUwQjkwXFx1MEI5Mi1cXHUwQjk1XFx1MEI5OVxcdTBCOUFcXHUwQjlDXFx1MEI5RVxcdTBCOUZcXHUwQkEzXFx1MEJBNFxcdTBCQTgtXFx1MEJBQVxcdTBCQUUtXFx1MEJCOVxcdTBCRDBcXHUwQzA1LVxcdTBDMENcXHUwQzBFLVxcdTBDMTBcXHUwQzEyLVxcdTBDMjhcXHUwQzJBLVxcdTBDMzNcXHUwQzM1LVxcdTBDMzlcXHUwQzNEXFx1MEM1OFxcdTBDNTlcXHUwQzYwXFx1MEM2MVxcdTBDODUtXFx1MEM4Q1xcdTBDOEUtXFx1MEM5MFxcdTBDOTItXFx1MENBOFxcdTBDQUEtXFx1MENCM1xcdTBDQjUtXFx1MENCOVxcdTBDQkRcXHUwQ0RFXFx1MENFMFxcdTBDRTFcXHUwQ0YxXFx1MENGMlxcdTBEMDUtXFx1MEQwQ1xcdTBEMEUtXFx1MEQxMFxcdTBEMTItXFx1MEQzQVxcdTBEM0RcXHUwRDRFXFx1MEQ2MFxcdTBENjFcXHUwRDdBLVxcdTBEN0ZcXHUwRDg1LVxcdTBEOTZcXHUwRDlBLVxcdTBEQjFcXHUwREIzLVxcdTBEQkJcXHUwREJEXFx1MERDMC1cXHUwREM2XFx1MEYwMFxcdTBGNDAtXFx1MEY0N1xcdTBGNDktXFx1MEY2Q1xcdTBGODgtXFx1MEY4Q1xcdTEwQTAtXFx1MTBDNVxcdTEwRDAtXFx1MTBGQVxcdTEwRkNcXHUxMTAwLVxcdTEyNDhcXHUxMjRBLVxcdTEyNERcXHUxMjUwLVxcdTEyNTZcXHUxMjU4XFx1MTI1QS1cXHUxMjVEXFx1MTI2MC1cXHUxMjg4XFx1MTI4QS1cXHUxMjhEXFx1MTI5MC1cXHUxMkIwXFx1MTJCMi1cXHUxMkI1XFx1MTJCOC1cXHUxMkJFXFx1MTJDMFxcdTEyQzItXFx1MTJDNVxcdTEyQzgtXFx1MTJENlxcdTEyRDgtXFx1MTMxMFxcdTEzMTItXFx1MTMxNVxcdTEzMTgtXFx1MTM1QVxcdTEzODAtXFx1MTM4RlxcdTEzQTAtXFx1MTNGNFxcdTE0MDEtXFx1MTY2Q1xcdTE2NkYtXFx1MTY3RlxcdTE2ODEtXFx1MTY5QVxcdTE2QTAtXFx1MTZFQVxcdTE2RUUtXFx1MTZGMFxcdTE3MDAtXFx1MTcwQ1xcdTE3MEUtXFx1MTcxMVxcdTE3MjAtXFx1MTczMVxcdTE3NDAtXFx1MTc1MVxcdTE3NjAtXFx1MTc2Q1xcdTE3NkUtXFx1MTc3MFxcdTE4MjAtXFx1MTg3N1xcdTE4ODAtXFx1MThBOFxcdTE4QUFcXHUxOEIwLVxcdTE4RjVcXHUxOTAwLVxcdTE5MUNcXHUxQTAwLVxcdTFBMTZcXHUxQjA1LVxcdTFCMzNcXHUxQjQ1LVxcdTFCNEJcXHUxQjgzLVxcdTFCQTBcXHUxQkFFXFx1MUJBRlxcdTFCQzAtXFx1MUJFNVxcdTFDMDAtXFx1MUMyM1xcdTFDNEQtXFx1MUM0RlxcdTFDNUEtXFx1MUM3RFxcdTFDRTktXFx1MUNFQ1xcdTFDRUUtXFx1MUNGMVxcdTFEMDAtXFx1MURCRlxcdTFFMDAtXFx1MUYxNVxcdTFGMTgtXFx1MUYxRFxcdTFGMjAtXFx1MUY0NVxcdTFGNDgtXFx1MUY0RFxcdTFGNTAtXFx1MUY1N1xcdTFGNTlcXHUxRjVCXFx1MUY1RFxcdTFGNUYtXFx1MUY3RFxcdTFGODAtXFx1MUZCNFxcdTFGQjYtXFx1MUZCQ1xcdTFGQkVcXHUxRkMyLVxcdTFGQzRcXHUxRkM2LVxcdTFGQ0NcXHUxRkQwLVxcdTFGRDNcXHUxRkQ2LVxcdTFGREJcXHUxRkUwLVxcdTFGRUNcXHUxRkYyLVxcdTFGRjRcXHUxRkY2LVxcdTFGRkNcXHUyMDcxXFx1MjA3RlxcdTIwOTAtXFx1MjA5Q1xcdTIxMDJcXHUyMTA3XFx1MjEwQS1cXHUyMTEzXFx1MjExNVxcdTIxMTktXFx1MjExRFxcdTIxMjRcXHUyMTI2XFx1MjEyOFxcdTIxMkEtXFx1MjEyRFxcdTIxMkYtXFx1MjEzOVxcdTIxM0MtXFx1MjEzRlxcdTIxNDUtXFx1MjE0OVxcdTIxNEVcXHUyMTYwLVxcdTIxODhcXHUyNEI2LVxcdTI0RTlcXHUyQzAwLVxcdTJDMkVcXHUyQzMwLVxcdTJDNUVcXHUyQzYwLVxcdTJDRTRcXHUyQ0VCLVxcdTJDRUVcXHUyRDAwLVxcdTJEMjVcXHUyRDMwLVxcdTJENjVcXHUyRDZGXFx1MkQ4MC1cXHUyRDk2XFx1MkRBMC1cXHUyREE2XFx1MkRBOC1cXHUyREFFXFx1MkRCMC1cXHUyREI2XFx1MkRCOC1cXHUyREJFXFx1MkRDMC1cXHUyREM2XFx1MkRDOC1cXHUyRENFXFx1MkREMC1cXHUyREQ2XFx1MkREOC1cXHUyRERFXFx1MkUyRlxcdTMwMDVcXHUzMDNCXFx1MzAzQ1xcdTMxMDUtXFx1MzEyRFxcdTMxMzEtXFx1MzE4RVxcdTMxQTAtXFx1MzFCQVxcdUEwMDAtXFx1QTQ4Q1xcdUE0RDAtXFx1QTRGRFxcdUE1MDAtXFx1QTYwQ1xcdUE2MTAtXFx1QTYxRlxcdUE2MkFcXHVBNjJCXFx1QTY0MC1cXHVBNjZFXFx1QTY3Ri1cXHVBNjk3XFx1QTZBMC1cXHVBNkVGXFx1QTcxNy1cXHVBNzFGXFx1QTcyMi1cXHVBNzg4XFx1QTc4Qi1cXHVBNzhFXFx1QTc5MFxcdUE3OTFcXHVBN0EwLVxcdUE3QTlcXHVBN0ZBLVxcdUE4MDFcXHVBODAzLVxcdUE4MDVcXHVBODA3LVxcdUE4MEFcXHVBODBDLVxcdUE4MjJcXHVBODQwLVxcdUE4NzNcXHVBODgyLVxcdUE4QjNcXHVBOEYyLVxcdUE4RjdcXHVBOEZCXFx1QTkwQS1cXHVBOTI1XFx1QTkzMC1cXHVBOTQ2XFx1QTk2MC1cXHVBOTdDXFx1QTk4NC1cXHVBOUIyXFx1QTlDRlxcdUFBMDAtXFx1QUEyOFxcdUFBNDAtXFx1QUE0MlxcdUFBNDQtXFx1QUE0QlxcdUFCMDEtXFx1QUIwNlxcdUFCMDktXFx1QUIwRVxcdUFCMTEtXFx1QUIxNlxcdUFCMjAtXFx1QUIyNlxcdUFCMjgtXFx1QUIyRVxcdUFCQzAtXFx1QUJFMlxcdUFDMDAtXFx1RDdBM1xcdUQ3QjAtXFx1RDdDNlxcdUQ3Q0ItXFx1RDdGQlxcdUZCMDAtXFx1RkIwNlxcdUZCMTMtXFx1RkIxN1xcdUZCMURcXHVGQjFGLVxcdUZCMjhcXHVGQjJBLVxcdUZCMzZcXHVGQjM4LVxcdUZCM0NcXHVGQjNFXFx1RkI0MFxcdUZCNDFcXHVGQjQzXFx1RkI0NFxcdUZCNDYtXFx1RkJCMVxcdUZCRDMtXFx1RkQzRFxcdUZENTAtXFx1RkQ4RlxcdUZEOTItXFx1RkRDN1xcdUZERjAtXFx1RkRGQlxcdUZFNzAtXFx1RkU3NFxcdUZFNzYtXFx1RkVGQ1xcdUZGMjEtXFx1RkYzQVxcdUZGNDEtXFx1RkY1QVxcdUZGQTAtXFx1RkZCRVxcdUZGQzItXFx1RkZDN1xcdUZGQ0EtXFx1RkZDRlxcdUZGRDItXFx1RkZEN1xcdUZGREEtXFx1RkZEQ10nLFxuICBtaWRudW1sZXQ6IGBbLSdcXFxcLlxcdTIwMThcXHUyMDE5XFx1MjAyNFxcdUZFNTJcXHVGRjA3XFx1RkYwRV1gLFxuICBtaWRsZXR0ZXI6ICdbOlxcdTAwQjdcXHUwMEI3XFx1MDVGNFxcdTIwMjdcXHVGRTEzXFx1RkU1NVxcdUZGMUFdJyxcbiAgbWlkbnVtOiAnW8KxKyovLDs7XFx1MDU4OVxcdTA2MENcXHUwNjBEXFx1MDY2Q1xcdTA3RjhcXHUyMDQ0XFx1RkUxMFxcdUZFMTRcXHVGRTUwXFx1RkU1NFxcdUZGMENcXHVGRjFCXScsXG4gIG51bWVyaWM6ICdbMC05XFx1MDY2MC1cXHUwNjY5XFx1MDY2QlxcdTA2RjAtXFx1MDZGOVxcdTA3QzAtXFx1MDdDOVxcdTA5NjYtXFx1MDk2RlxcdTA5RTYtXFx1MDlFRlxcdTBBNjYtXFx1MEE2RlxcdTBBRTYtXFx1MEFFRlxcdTBCNjYtXFx1MEI2RlxcdTBCRTYtXFx1MEJFRlxcdTBDNjYtXFx1MEM2RlxcdTBDRTYtXFx1MENFRlxcdTBENjYtXFx1MEQ2RlxcdTBFNTAtXFx1MEU1OVxcdTBFRDAtXFx1MEVEOVxcdTBGMjAtXFx1MEYyOVxcdTEwNDAtXFx1MTA0OVxcdTEwOTAtXFx1MTA5OVxcdTE3RTAtXFx1MTdFOVxcdTE4MTAtXFx1MTgxOVxcdTE5NDYtXFx1MTk0RlxcdTE5RDAtXFx1MTlEOVxcdTFBODAtXFx1MUE4OVxcdTFBOTAtXFx1MUE5OVxcdTFCNTAtXFx1MUI1OVxcdTFCQjAtXFx1MUJCOVxcdTFDNDAtXFx1MUM0OVxcdTFDNTAtXFx1MUM1OVxcdUE2MjAtXFx1QTYyOVxcdUE4RDAtXFx1QThEOVxcdUE5MDAtXFx1QTkwOVxcdUE5RDAtXFx1QTlEOVxcdUFBNTAtXFx1QUE1OVxcdUFCRjAtXFx1QUJGOV0nLFxuICBjcjogJ1xcXFxyJyxcbiAgbGY6ICdcXFxcbicsXG4gIG5ld2xpbmU6ICdbXFx1MDAwQlxcdTAwMENcXHUwMDg1XFx1MjAyOFxcdTIwMjldJyxcbiAgZXh0ZW5kOiAnW1xcdTAzMDAtXFx1MDM2RlxcdTA0ODMtXFx1MDQ4OVxcdTA1OTEtXFx1MDVCRFxcdTA1QkZcXHUwNUMxXFx1MDVDMlxcdTA1QzRcXHUwNUM1XFx1MDVDN1xcdTA2MTAtXFx1MDYxQVxcdTA2NEItXFx1MDY1RlxcdTA2NzBcXHUwNkQ2LVxcdTA2RENcXHUwNkRGLVxcdTA2RTRcXHUwNkU3XFx1MDZFOFxcdTA2RUEtXFx1MDZFRFxcdTA3MTFcXHUwNzMwLVxcdTA3NEFcXHUwN0E2LVxcdTA3QjBcXHUwN0VCLVxcdTA3RjNcXHUwODE2LVxcdTA4MTlcXHUwODFCLVxcdTA4MjNcXHUwODI1LVxcdTA4MjdcXHUwODI5LVxcdTA4MkRcXHUwODU5LVxcdTA4NUJcXHUwOTAwLVxcdTA5MDNcXHUwOTNBLVxcdTA5M0NcXHUwOTNFLVxcdTA5NEZcXHUwOTUxLVxcdTA5NTdcXHUwOTYyXFx1MDk2M1xcdTA5ODEtXFx1MDk4M1xcdTA5QkNcXHUwOUJFLVxcdTA5QzRcXHUwOUM3XFx1MDlDOFxcdTA5Q0ItXFx1MDlDRFxcdTA5RDdcXHUwOUUyXFx1MDlFM1xcdTBBMDEtXFx1MEEwM1xcdTBBM0NcXHUwQTNFLVxcdTBBNDJcXHUwQTQ3XFx1MEE0OFxcdTBBNEItXFx1MEE0RFxcdTBBNTFcXHUwQTcwXFx1MEE3MVxcdTBBNzVcXHUwQTgxLVxcdTBBODNcXHUwQUJDXFx1MEFCRS1cXHUwQUM1XFx1MEFDNy1cXHUwQUM5XFx1MEFDQi1cXHUwQUNEXFx1MEFFMlxcdTBBRTNcXHUwQjAxLVxcdTBCMDNcXHUwQjNDXFx1MEIzRS1cXHUwQjQ0XFx1MEI0N1xcdTBCNDhcXHUwQjRCLVxcdTBCNERcXHUwQjU2XFx1MEI1N1xcdTBCNjJcXHUwQjYzXFx1MEI4MlxcdTBCQkUtXFx1MEJDMlxcdTBCQzYtXFx1MEJDOFxcdTBCQ0EtXFx1MEJDRFxcdTBCRDdcXHUwQzAxLVxcdTBDMDNcXHUwQzNFLVxcdTBDNDRcXHUwQzQ2LVxcdTBDNDhcXHUwQzRBLVxcdTBDNERcXHUwQzU1XFx1MEM1NlxcdTBDNjJcXHUwQzYzXFx1MEM4MlxcdTBDODNcXHUwQ0JDXFx1MENCRS1cXHUwQ0M0XFx1MENDNi1cXHUwQ0M4XFx1MENDQS1cXHUwQ0NEXFx1MENENVxcdTBDRDZcXHUwQ0UyXFx1MENFM1xcdTBEMDJcXHUwRDAzXFx1MEQzRS1cXHUwRDQ0XFx1MEQ0Ni1cXHUwRDQ4XFx1MEQ0QS1cXHUwRDREXFx1MEQ1N1xcdTBENjJcXHUwRDYzXFx1MEQ4MlxcdTBEODNcXHUwRENBXFx1MERDRi1cXHUwREQ0XFx1MERENlxcdTBERDgtXFx1MERERlxcdTBERjJcXHUwREYzXFx1MEUzMVxcdTBFMzQtXFx1MEUzQVxcdTBFNDctXFx1MEU0RVxcdTBFQjFcXHUwRUI0LVxcdTBFQjlcXHUwRUJCXFx1MEVCQ1xcdTBFQzgtXFx1MEVDRFxcdTBGMThcXHUwRjE5XFx1MEYzNVxcdTBGMzdcXHUwRjM5XFx1MEYzRVxcdTBGM0ZcXHUwRjcxLVxcdTBGODRcXHUwRjg2XFx1MEY4N1xcdTBGOEQtXFx1MEY5N1xcdTBGOTktXFx1MEZCQ1xcdTBGQzZcXHUxMDJCLVxcdTEwM0VcXHUxMDU2LVxcdTEwNTlcXHUxMDVFLVxcdTEwNjBcXHUxMDYyLVxcdTEwNjRcXHUxMDY3LVxcdTEwNkRcXHUxMDcxLVxcdTEwNzRcXHUxMDgyLVxcdTEwOERcXHUxMDhGXFx1MTA5QS1cXHUxMDlEXFx1MTM1RC1cXHUxMzVGXFx1MTcxMi1cXHUxNzE0XFx1MTczMi1cXHUxNzM0XFx1MTc1MlxcdTE3NTNcXHUxNzcyXFx1MTc3M1xcdTE3QjYtXFx1MTdEM1xcdTE3RERcXHUxODBCLVxcdTE4MERcXHUxOEE5XFx1MTkyMC1cXHUxOTJCXFx1MTkzMC1cXHUxOTNCXFx1MTlCMC1cXHUxOUMwXFx1MTlDOFxcdTE5QzlcXHUxQTE3LVxcdTFBMUJcXHUxQTU1LVxcdTFBNUVcXHUxQTYwLVxcdTFBN0NcXHUxQTdGXFx1MUIwMC1cXHUxQjA0XFx1MUIzNC1cXHUxQjQ0XFx1MUI2Qi1cXHUxQjczXFx1MUI4MC1cXHUxQjgyXFx1MUJBMS1cXHUxQkFBXFx1MUJFNi1cXHUxQkYzXFx1MUMyNC1cXHUxQzM3XFx1MUNEMC1cXHUxQ0QyXFx1MUNENC1cXHUxQ0U4XFx1MUNFRFxcdTFDRjJcXHUxREMwLVxcdTFERTZcXHUxREZDLVxcdTFERkZcXHUyMDBDXFx1MjAwRFxcdTIwRDAtXFx1MjBGMFxcdTJDRUYtXFx1MkNGMVxcdTJEN0ZcXHUyREUwLVxcdTJERkZcXHUzMDJBLVxcdTMwMkZcXHUzMDk5XFx1MzA5QVxcdUE2NkYtXFx1QTY3MlxcdUE2N0NcXHVBNjdEXFx1QTZGMFxcdUE2RjFcXHVBODAyXFx1QTgwNlxcdUE4MEJcXHVBODIzLVxcdUE4MjdcXHVBODgwXFx1QTg4MVxcdUE4QjQtXFx1QThDNFxcdUE4RTAtXFx1QThGMVxcdUE5MjYtXFx1QTkyRFxcdUE5NDctXFx1QTk1M1xcdUE5ODAtXFx1QTk4M1xcdUE5QjMtXFx1QTlDMFxcdUFBMjktXFx1QUEzNlxcdUFBNDNcXHVBQTRDXFx1QUE0RFxcdUFBN0JcXHVBQUIwXFx1QUFCMi1cXHVBQUI0XFx1QUFCN1xcdUFBQjhcXHVBQUJFXFx1QUFCRlxcdUFBQzFcXHVBQkUzLVxcdUFCRUFcXHVBQkVDXFx1QUJFRFxcdUZCMUVcXHVGRTAwLVxcdUZFMEZcXHVGRTIwLVxcdUZFMjZcXHVGRjlFXFx1RkY5Rl0nLFxuICBmb3JtYXQ6ICdbXFx1MDBBRFxcdTA2MDAtXFx1MDYwM1xcdTA2RERcXHUwNzBGXFx1MTdCNFxcdTE3QjVcXHUyMDBFXFx1MjAwRlxcdTIwMkEtXFx1MjAyRVxcdTIwNjAtXFx1MjA2NFxcdTIwNkEtXFx1MjA2RlxcdUZFRkZcXHVGRkY5LVxcdUZGRkJdJyxcbiAga2F0YWthbmE6ICdbXFx1MzAzMS1cXHUzMDM1XFx1MzA5QlxcdTMwOUNcXHUzMEEwLVxcdTMwRkFcXHUzMEZDLVxcdTMwRkZcXHUzMUYwLVxcdTMxRkZcXHUzMkQwLVxcdTMyRkVcXHUzMzAwLVxcdTMzNTdcXHVGRjY2LVxcdUZGOURdJyxcbiAgZXh0ZW5kbnVtbGV0OiAnWz1fXFx1MjAzRlxcdTIwNDBcXHUyMDU0XFx1RkUzM1xcdUZFMzRcXHVGRTRELVxcdUZFNEZcXHVGRjNGXFx1MjIwMC1cXHUyMkZGXFx1MDAzY1xcdTAwM2VdJyxcbiAgcHVuY3R1YXRpb246IHB1bmN0dWF0aW9uU3RyXG59O1xuLyogZXNsaW50LWVuYWJsZSBtYXgtbGVuICovXG5cbmNvbnN0IGNoYXJhY3RlckluZGljZXMgPSB7XG4gIEFMRVRURVI6IDAsXG4gIE1JRE5VTUxFVDogMSxcbiAgTUlETEVUVEVSOiAyLFxuICBNSUROVU06IDMsXG4gIE5VTUVSSUM6IDQsXG4gIENSOiA1LFxuICBMRjogNixcbiAgTkVXTElORTogNyxcbiAgRVhURU5EOiA4LFxuICBGT1JNQVQ6IDksXG4gIEtBVEFLQU5BOiAxMCxcbiAgRVhURU5ETlVNTEVUOiAxMSxcbiAgQVQ6IDEyLFxuICBPVEhFUjogMTNcbn07XG5cbi8vIFJlZ0V4cCBvYmplY3RzIGdlbmVyYXRlZCBmcm9tIGNvZGUgcG9pbnQgZGF0YS4gRWFjaCByZWdleCBtYXRjaGVzIGEgc2luZ2xlXG4vLyBjaGFyYWN0ZXIgYWdhaW5zdCBhIHNldCBvZiBVbmljb2RlIGNvZGUgcG9pbnRzLiBUaGUgaW5kZXggb2YgZWFjaCBpdGVtIGluXG4vLyB0aGlzIGFycmF5IG11c3QgbWF0Y2ggaXRzIGNvcnJlc3BvbmRpbmcgY29kZSBwb2ludCBjb25zdGFudCB2YWx1ZSBkZWZpbmVkXG4vLyBhYm92ZS5cbmNvbnN0IFNFVFMgPSBbXG4gIG5ldyBSZWdFeHAocmVnRXhwcy5hbGV0dGVyKSxcbiAgbmV3IFJlZ0V4cChyZWdFeHBzLm1pZG51bWxldCksXG4gIG5ldyBSZWdFeHAocmVnRXhwcy5taWRsZXR0ZXIpLFxuICBuZXcgUmVnRXhwKHJlZ0V4cHMubWlkbnVtKSxcbiAgbmV3IFJlZ0V4cChyZWdFeHBzLm51bWVyaWMpLFxuICBuZXcgUmVnRXhwKHJlZ0V4cHMuY3IpLFxuICBuZXcgUmVnRXhwKHJlZ0V4cHMubGYpLFxuICBuZXcgUmVnRXhwKHJlZ0V4cHMubmV3bGluZSksXG4gIG5ldyBSZWdFeHAocmVnRXhwcy5leHRlbmQpLFxuICBuZXcgUmVnRXhwKHJlZ0V4cHMuZm9ybWF0KSxcbiAgbmV3IFJlZ0V4cChyZWdFeHBzLmthdGFrYW5hKSxcbiAgbmV3IFJlZ0V4cChyZWdFeHBzLmV4dGVuZG51bWxldCksXG4gIG5ldyBSZWdFeHAoJ0AnKVxuXTtcblxuY29uc3QgRU1QVFlfU1RSSU5HID0gJyc7XG5jb25zdCBQVU5DVFVBVElPTiA9IG5ldyBSZWdFeHAoJ14nICsgcmVnRXhwcy5wdW5jdHVhdGlvbiArICckJyk7XG5jb25zdCBXSElURVNQQUNFID0gL15cXHMrJC87XG5cbmV4cG9ydCB7XG4gIHB1bmN0dWF0aW9uU3RyLFxuICBjaGFyYWN0ZXJJbmRpY2VzLFxuICBTRVRTLFxuICBFTVBUWV9TVFJJTkcsXG4gIFBVTkNUVUFUSU9OLFxuICBXSElURVNQQUNFXG59O1xuIiwiaW1wb3J0IHsgUmVzb2x2ZSwgVHlwZSB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmltcG9ydCAqIGFzIEdsb2JhbCBmcm9tICcuLi91dGlsL0dsb2JhbCc7XG5cbmNvbnN0IGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuXG4vKlxuICogSUU5IGFuZCBhYm92ZVxuICpcbiAqIE1ETiBubyB1c2Ugb24gdGhpcyBvbmUsIGJ1dCBoZXJlJ3MgdGhlIGxpbmsgYW55d2F5OlxuICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vZG9jcy9XZWIvQVBJL0hUTUxFbGVtZW50XG4gKi9cbmNvbnN0IHNhbmRIVE1MRWxlbWVudCA9IChzY29wZTogV2luZG93IHwgdW5kZWZpbmVkKSA9PiB7XG4gIHJldHVybiBHbG9iYWwuZ2V0T3JEaWUoJ0hUTUxFbGVtZW50Jywgc2NvcGUpIGFzIHR5cGVvZiBIVE1MRWxlbWVudDtcbn07XG5cbmNvbnN0IGlzUHJvdG90eXBlT2YgPSAoeDogYW55KTogeCBpcyBIVE1MRWxlbWVudCA9PiB7XG4gIC8vIHVzZSBSZXNvbHZlIHRvIGdldCB0aGUgd2luZG93IG9iamVjdCBmb3IgeCBhbmQganVzdCByZXR1cm4gdW5kZWZpbmVkIGlmIGl0IGNhbid0IGZpbmQgaXQuXG4gIC8vIHVuZGVmaW5lZCBzY29wZSBsYXRlciB0cmlnZ2VycyB1c2luZyB0aGUgZ2xvYmFsIHdpbmRvdy5cbiAgY29uc3Qgc2NvcGU6IFdpbmRvdyB8IHVuZGVmaW5lZCA9IFJlc29sdmUucmVzb2x2ZSgnb3duZXJEb2N1bWVudC5kZWZhdWx0VmlldycsIHgpO1xuXG4gIC8vIFRJTlktNzM3NDogV2UgY2FuJ3QgcmVseSBvbiBsb29raW5nIGF0IHRoZSBvd25lciB3aW5kb3cgSFRNTEVsZW1lbnQgYXMgdGhlIGVsZW1lbnQgbWF5IGhhdmVcbiAgLy8gYmVlbiBjb25zdHJ1Y3RlZCBpbiBhIGRpZmZlcmVudCB3aW5kb3cgYW5kIHRoZW4gYXBwZW5kZWQgdG8gdGhlIGN1cnJlbnQgd2luZG93IGRvY3VtZW50LlxuICByZXR1cm4gVHlwZS5pc09iamVjdCh4KSAmJiAoc2FuZEhUTUxFbGVtZW50KHNjb3BlKS5wcm90b3R5cGUuaXNQcm90b3R5cGVPZih4KSB8fCAvXkhUTUxcXHcqRWxlbWVudCQvLnRlc3QoZ2V0UHJvdG90eXBlT2YoeCkuY29uc3RydWN0b3IubmFtZSkpO1xufTtcblxuZXhwb3J0IHtcbiAgaXNQcm90b3R5cGVPZlxufTtcbiIsIi8qXG4gKiBNb3N0IG9mIHNhbmQgZG9lc24ndCBhbHRlciB0aGUgbWV0aG9kcyBvbiB0aGUgb2JqZWN0LlxuICogV2UncmUgbWFraW5nIGFuIGV4Y2VwdGlvbiBmb3IgTm9kZSwgYmVjYXVzZSBiaXR3aXNlIGFuZCBpcyBzbyBlYXN5IHRvIGdldCB3cm9uZy5cbiAqXG4gKiBNaWdodCBiZSBuaWNlIHRvIEFEVCB0aGlzIGF0IHNvbWUgcG9pbnQgaW5zdGVhZCBvZiBoYXZpbmcgaW5kaXZpZHVhbCBtZXRob2RzLlxuICovXG5cbmNvbnN0IGNvbXBhcmVEb2N1bWVudFBvc2l0aW9uID0gKGE6IE5vZGUsIGI6IE5vZGUsIG1hdGNoOiBudW1iZXIpID0+IHtcbiAgLy8gUmV0dXJuczogMCBpZiBlMSBhbmQgZTIgYXJlIHRoZSBzYW1lIG5vZGUsIG9yIGEgYml0bWFzayBjb21wYXJpbmcgdGhlIHBvc2l0aW9uc1xuICAvLyBvZiBub2RlcyBlMSBhbmQgZTIgaW4gdGhlaXIgZG9jdW1lbnRzLiBTZWUgdGhlIFVSTCBiZWxvdyBmb3IgYml0bWFzayBpbnRlcnByZXRhdGlvblxuICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvTm9kZS9jb21wYXJlRG9jdW1lbnRQb3NpdGlvblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxuICByZXR1cm4gKGEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oYikgJiBtYXRjaCkgIT09IDA7XG59O1xuXG5jb25zdCBkb2N1bWVudFBvc2l0aW9uUHJlY2VkaW5nID0gKGE6IE5vZGUsIGI6IE5vZGUpOiBib29sZWFuID0+IHtcbiAgcmV0dXJuIGNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGEsIGIsIE5vZGUuRE9DVU1FTlRfUE9TSVRJT05fUFJFQ0VESU5HKTtcbn07XG5cbmNvbnN0IGRvY3VtZW50UG9zaXRpb25Db250YWluZWRCeSA9IChhOiBOb2RlLCBiOiBOb2RlKTogYm9vbGVhbiA9PiB7XG4gIHJldHVybiBjb21wYXJlRG9jdW1lbnRQb3NpdGlvbihhLCBiLCBOb2RlLkRPQ1VNRU5UX1BPU0lUSU9OX0NPTlRBSU5FRF9CWSk7XG59O1xuXG5leHBvcnQge1xuICBkb2N1bWVudFBvc2l0aW9uUHJlY2VkaW5nLFxuICBkb2N1bWVudFBvc2l0aW9uQ29udGFpbmVkQnlcbn07XG4iLCJpbXBvcnQgeyBSZXNvbHZlIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuY29uc3QgdW5zYWZlID0gPFQ+KG5hbWU6IHN0cmluZywgc2NvcGU/OiB7fSk6IFQgfCB1bmRlZmluZWQgPT4ge1xuICByZXR1cm4gUmVzb2x2ZS5yZXNvbHZlKG5hbWUsIHNjb3BlKTtcbn07XG5cbmNvbnN0IGdldE9yRGllID0gPFQ+KG5hbWU6IHN0cmluZywgc2NvcGU/OiB7fSk6IFQgPT4ge1xuICBjb25zdCBhY3R1YWwgPSB1bnNhZmU8VD4obmFtZSwgc2NvcGUpO1xuXG4gIGlmIChhY3R1YWwgPT09IHVuZGVmaW5lZCB8fCBhY3R1YWwgPT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IobmFtZSArICcgbm90IGF2YWlsYWJsZSBvbiB0aGlzIGJyb3dzZXInKTtcbiAgfVxuICByZXR1cm4gYWN0dWFsO1xufTtcblxuZXhwb3J0IHtcbiAgZ2V0T3JEaWVcbn07XG4iLCJpbXBvcnQgdHlwZSB7IE9wdGlvbmFsIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuLyoqXG4gKiBBcHBsaWVzIGYgcmVwZWF0ZWRseSB1bnRpbCBpdCBjb21wbGV0ZXMgKGJ5IHJldHVybmluZyBPcHRpb25hbC5ub25lKCkpLlxuICpcbiAqIE5vcm1hbGx5IHdvdWxkIGp1c3QgdXNlIHJlY3Vyc2lvbiwgYnV0IEphdmFTY3JpcHQgbGFja3MgdGFpbCBjYWxsIG9wdGltaXNhdGlvbi5cbiAqXG4gKiBUaGlzIGlzIHdoYXQgcmVjdXJzaW9uIGxvb2tzIGxpa2Ugd2hlbiBtYW51YWxseSB1bnJhdmVsbGVkIDopXG4gKi9cbmNvbnN0IHRvQXJyYXkgPSA8VCA9IGFueSwgVSBleHRlbmRzIFQgPSBUPiAodGFyZ2V0OiBULCBmOiAodDogVCkgPT4gT3B0aW9uYWw8VT4pOiBVW10gPT4ge1xuICBjb25zdCByOiBVW10gPSBbXTtcblxuICBjb25zdCByZWN1cnNlID0gKGU6IFUpID0+IHtcbiAgICByLnB1c2goZSk7XG4gICAgcmV0dXJuIGYoZSk7XG4gIH07XG5cbiAgbGV0IGN1ciA9IGYodGFyZ2V0KTtcbiAgZG8ge1xuICAgIGN1ciA9IGN1ci5iaW5kKHJlY3Vyc2UpO1xuICB9IHdoaWxlIChjdXIuaXNTb21lKCkpO1xuXG4gIHJldHVybiByO1xufTtcblxuZXhwb3J0IHtcbiAgdG9BcnJheVxufTtcbiIsImltcG9ydCB7IEFyciwgRnVuIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0IHR5cGUgeyBTdWdhckVsZW1lbnQgfSBmcm9tICcuLi9ub2RlL1N1Z2FyRWxlbWVudCc7XG5pbXBvcnQgKiBhcyBTZWxlY3RvcnMgZnJvbSAnLi4vc2VhcmNoL1NlbGVjdG9ycyc7XG5cbmNvbnN0IGVxID0gKGUxOiBTdWdhckVsZW1lbnQ8dW5rbm93bj4sIGUyOiBTdWdhckVsZW1lbnQ8dW5rbm93bj4pOiBib29sZWFuID0+XG4gIGUxLmRvbSA9PT0gZTIuZG9tO1xuXG5jb25zdCBpc0VxdWFsTm9kZSA9IChlMTogU3VnYXJFbGVtZW50PE5vZGU+LCBlMjogU3VnYXJFbGVtZW50PE5vZGU+KTogYm9vbGVhbiA9PlxuICBlMS5kb20uaXNFcXVhbE5vZGUoZTIuZG9tKTtcblxuY29uc3QgbWVtYmVyID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDx1bmtub3duPiwgZWxlbWVudHM6IFN1Z2FyRWxlbWVudDx1bmtub3duPltdKTogYm9vbGVhbiA9PlxuICBBcnIuZXhpc3RzKGVsZW1lbnRzLCBGdW4uY3VycnkoZXEsIGVsZW1lbnQpKTtcblxuLy8gUmV0dXJuczogdHJ1ZSBpZiBub2RlIGUxIGNvbnRhaW5zIGUyLCBvdGhlcndpc2UgZmFsc2UuXG4vLyAocmV0dXJucyBmYWxzZSBpZiBlMT09PWUyOiBBIG5vZGUgZG9lcyBub3QgY29udGFpbiBpdHNlbGYpLlxuY29uc3QgY29udGFpbnMgPSAoZTE6IFN1Z2FyRWxlbWVudDxOb2RlPiwgZTI6IFN1Z2FyRWxlbWVudDxOb2RlPik6IGJvb2xlYW4gPT4ge1xuICBjb25zdCBkMSA9IGUxLmRvbTtcbiAgY29uc3QgZDIgPSBlMi5kb207XG4gIHJldHVybiBkMSA9PT0gZDIgPyBmYWxzZSA6IGQxLmNvbnRhaW5zKGQyKTtcbn07XG5cbmNvbnN0IGlzID0gU2VsZWN0b3JzLmlzO1xuXG5leHBvcnQge1xuICBlcSxcbiAgaXNFcXVhbE5vZGUsXG4gIG1lbWJlcixcbiAgY29udGFpbnMsXG4gIC8vIE9ubHkgdXNlZCBieSBEb21Vbml2ZXJzZS4gUmVtb3ZlIChvciBzaG91bGQgU2VsZWN0b3JzLmlzIG1vdmUgaGVyZT8pXG4gIGlzXG59O1xuIiwiaW1wb3J0IHR5cGUgeyBTdWdhckVsZW1lbnQgfSBmcm9tICcuLi9ub2RlL1N1Z2FyRWxlbWVudCc7XG5pbXBvcnQgKiBhcyBUcmF2ZXJzZSBmcm9tICcuLi9zZWFyY2gvVHJhdmVyc2UnO1xuXG5jb25zdCBiZWZvcmUgPSAobWFya2VyOiBTdWdhckVsZW1lbnQ8Tm9kZT4sIGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPik6IHZvaWQgPT4ge1xuICBjb25zdCBwYXJlbnQgPSBUcmF2ZXJzZS5wYXJlbnQobWFya2VyKTtcbiAgcGFyZW50LmVhY2goKHYpID0+IHtcbiAgICB2LmRvbS5pbnNlcnRCZWZvcmUoZWxlbWVudC5kb20sIG1hcmtlci5kb20pO1xuICB9KTtcbn07XG5cbmNvbnN0IGFmdGVyID0gKG1hcmtlcjogU3VnYXJFbGVtZW50PE5vZGU+LCBlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiB2b2lkID0+IHtcbiAgY29uc3Qgc2libGluZyA9IFRyYXZlcnNlLm5leHRTaWJsaW5nKG1hcmtlcik7XG4gIHNpYmxpbmcuZm9sZCgoKSA9PiB7XG4gICAgY29uc3QgcGFyZW50ID0gVHJhdmVyc2UucGFyZW50KG1hcmtlcik7XG4gICAgcGFyZW50LmVhY2goKHYpID0+IHtcbiAgICAgIGFwcGVuZCh2LCBlbGVtZW50KTtcbiAgICB9KTtcbiAgfSwgKHYpID0+IHtcbiAgICBiZWZvcmUodiwgZWxlbWVudCk7XG4gIH0pO1xufTtcblxuY29uc3QgcHJlcGVuZCA9IChwYXJlbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPiwgZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KTogdm9pZCA9PiB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSBUcmF2ZXJzZS5maXJzdENoaWxkKHBhcmVudCk7XG4gIGZpcnN0Q2hpbGQuZm9sZCgoKSA9PiB7XG4gICAgYXBwZW5kKHBhcmVudCwgZWxlbWVudCk7XG4gIH0sICh2KSA9PiB7XG4gICAgcGFyZW50LmRvbS5pbnNlcnRCZWZvcmUoZWxlbWVudC5kb20sIHYuZG9tKTtcbiAgfSk7XG59O1xuXG5jb25zdCBhcHBlbmQgPSAocGFyZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4sIGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPik6IHZvaWQgPT4ge1xuICBwYXJlbnQuZG9tLmFwcGVuZENoaWxkKGVsZW1lbnQuZG9tKTtcbn07XG5cbmNvbnN0IGFwcGVuZEF0ID0gKHBhcmVudDogU3VnYXJFbGVtZW50PE5vZGU+LCBlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4sIGluZGV4OiBudW1iZXIpOiB2b2lkID0+IHtcbiAgVHJhdmVyc2UuY2hpbGQocGFyZW50LCBpbmRleCkuZm9sZCgoKSA9PiB7XG4gICAgYXBwZW5kKHBhcmVudCwgZWxlbWVudCk7XG4gIH0sICh2KSA9PiB7XG4gICAgYmVmb3JlKHYsIGVsZW1lbnQpO1xuICB9KTtcbn07XG5cbmNvbnN0IHdyYXAgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+LCB3cmFwcGVyOiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiB2b2lkID0+IHtcbiAgYmVmb3JlKGVsZW1lbnQsIHdyYXBwZXIpO1xuICBhcHBlbmQod3JhcHBlciwgZWxlbWVudCk7XG59O1xuXG5leHBvcnQge1xuICBiZWZvcmUsXG4gIGFmdGVyLFxuICBwcmVwZW5kLFxuICBhcHBlbmQsXG4gIGFwcGVuZEF0LFxuICB3cmFwXG59O1xuIiwiY29uc3QgQVRUUklCVVRFID0gMjtcbmNvbnN0IENEQVRBX1NFQ1RJT04gPSA0O1xuY29uc3QgQ09NTUVOVCA9IDg7XG5jb25zdCBET0NVTUVOVCA9IDk7XG5jb25zdCBET0NVTUVOVF9UWVBFID0gMTA7XG5jb25zdCBET0NVTUVOVF9GUkFHTUVOVCA9IDExO1xuY29uc3QgRUxFTUVOVCA9IDE7XG5jb25zdCBURVhUID0gMztcbmNvbnN0IFBST0NFU1NJTkdfSU5TVFJVQ1RJT04gPSA3O1xuY29uc3QgRU5USVRZX1JFRkVSRU5DRSA9IDU7XG5jb25zdCBFTlRJVFkgPSA2O1xuY29uc3QgTk9UQVRJT04gPSAxMjtcblxuZXhwb3J0IHtcbiAgQVRUUklCVVRFLFxuICBDREFUQV9TRUNUSU9OLFxuICBDT01NRU5ULFxuICBET0NVTUVOVCxcbiAgRE9DVU1FTlRfVFlQRSxcbiAgRE9DVU1FTlRfRlJBR01FTlQsXG4gIEVMRU1FTlQsXG4gIFRFWFQsXG4gIFBST0NFU1NJTkdfSU5TVFJVQ1RJT04sXG4gIEVOVElUWV9SRUZFUkVOQ0UsXG4gIEVOVElUWSxcbiAgTk9UQVRJT05cbn07XG4iLCJpbXBvcnQgeyBGdW4gfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5pbXBvcnQgeyBTdWdhckVsZW1lbnQgfSBmcm9tICcuL1N1Z2FyRWxlbWVudCc7XG5pbXBvcnQgKiBhcyBTdWdhck5vZGUgZnJvbSAnLi9TdWdhck5vZGUnO1xuaW1wb3J0IHsgZ2V0U2hhZG93SG9zdCwgZ2V0U2hhZG93Um9vdCB9IGZyb20gJy4vU3VnYXJTaGFkb3dEb20nO1xuXG4vLyBOb2RlLmNvbnRhaW5zKCkgaXMgdmVyeSwgdmVyeSwgdmVyeSBnb29kIHBlcmZvcm1hbmNlXG4vLyBodHRwOi8vanNwZXJmLmNvbS9jbG9zZXN0LXZzLWNvbnRhaW5zLzVcbmNvbnN0IGluQm9keSA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBib29sZWFuID0+IHtcbiAgLy8gVGVjaG5pY2FsbHkgdGhpcyBpcyBvbmx5IHJlcXVpcmVkIG9uIElFLCB3aGVyZSBjb250YWlucygpIHJldHVybnMgZmFsc2UgZm9yIHRleHQgbm9kZXMuXG4gIC8vIEJ1dCBpdCdzIGNoZWFwIGVub3VnaCB0byBydW4gZXZlcnl3aGVyZSBhbmQgU3VnYXIgZG9lc24ndCBoYXZlIHBsYXRmb3JtIGRldGVjdGlvbiAoeWV0KS5cbiAgY29uc3QgZG9tID0gU3VnYXJOb2RlLmlzVGV4dChlbGVtZW50KSA/IGVsZW1lbnQuZG9tLnBhcmVudE5vZGUgOiBlbGVtZW50LmRvbTtcblxuICAvLyB1c2Ugb3duZXJEb2N1bWVudC5ib2R5IHRvIGVuc3VyZSB0aGlzIHdvcmtzIGluc2lkZSBpZnJhbWVzLlxuICAvLyBOb3JtYWxseSBjb250YWlucyBpcyBiYWQgYmVjYXVzZSBhbiBlbGVtZW50IFwiY29udGFpbnNcIiBpdHNlbGYsIGJ1dCBoZXJlIHdlIHdhbnQgdGhhdC5cbiAgaWYgKGRvbSA9PT0gdW5kZWZpbmVkIHx8IGRvbSA9PT0gbnVsbCB8fCBkb20ub3duZXJEb2N1bWVudCA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGRvYyA9IGRvbS5vd25lckRvY3VtZW50O1xuICByZXR1cm4gZ2V0U2hhZG93Um9vdChTdWdhckVsZW1lbnQuZnJvbURvbShkb20pKS5mb2xkKFxuICAgICgpID0+IGRvYy5ib2R5LmNvbnRhaW5zKGRvbSksXG4gICAgRnVuLmNvbXBvc2UxKGluQm9keSwgZ2V0U2hhZG93SG9zdClcbiAgKTtcbn07XG5cbmNvbnN0IGJvZHkgPSAoKTogU3VnYXJFbGVtZW50PEhUTUxFbGVtZW50PiA9PlxuICBnZXRCb2R5KFN1Z2FyRWxlbWVudC5mcm9tRG9tKGRvY3VtZW50KSk7XG5cbmNvbnN0IGdldEJvZHkgPSAoZG9jOiBTdWdhckVsZW1lbnQ8RG9jdW1lbnQ+KTogU3VnYXJFbGVtZW50PEhUTUxFbGVtZW50PiA9PiB7XG4gIGNvbnN0IGIgPSBkb2MuZG9tLmJvZHk7XG4gIGlmIChiID09PSBudWxsIHx8IGIgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignQm9keSBpcyBub3QgYXZhaWxhYmxlIHlldCcpO1xuICB9XG4gIHJldHVybiBTdWdhckVsZW1lbnQuZnJvbURvbShiKTtcbn07XG5cbmV4cG9ydCB7XG4gIGJvZHksXG4gIGdldEJvZHksXG4gIGluQm9keVxufTtcbiIsImltcG9ydCB7IE9wdGlvbmFsIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0IHR5cGUgeyBIVE1MRWxlbWVudEZ1bGxUYWdOYW1lTWFwIH0gZnJvbSAnLi4vLi4vYWxpZW4vRG9tVHlwZXMnO1xuXG5pbnRlcmZhY2UgU3VnYXJFbGVtZW50PFQgPSBhbnk+IHtcbiAgcmVhZG9ubHkgZG9tOiBUO1xufVxuXG5jb25zdCBmcm9tSHRtbCA9IDxFIGV4dGVuZHMgTm9kZSA9IE5vZGUgJiBDaGlsZE5vZGU+IChodG1sOiBzdHJpbmcsIHNjb3BlPzogRG9jdW1lbnQgfCBudWxsKTogU3VnYXJFbGVtZW50PEU+ID0+IHtcbiAgY29uc3QgZG9jID0gc2NvcGUgfHwgZG9jdW1lbnQ7XG4gIGNvbnN0IGRpdiA9IGRvYy5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LmlubmVySFRNTCA9IGh0bWw7XG4gIGlmICghZGl2Lmhhc0NoaWxkTm9kZXMoKSB8fCBkaXYuY2hpbGROb2Rlcy5sZW5ndGggPiAxKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9ICdIVE1MIGRvZXMgbm90IGhhdmUgYSBzaW5nbGUgcm9vdCBub2RlJztcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSwgaHRtbCk7XG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICB9XG4gIHJldHVybiBmcm9tRG9tKGRpdi5jaGlsZE5vZGVzWzBdIGFzIHVua25vd24gYXMgRSk7XG59O1xuXG5jb25zdCBmcm9tVGFnOiB7XG4gIDxLIGV4dGVuZHMga2V5b2YgSFRNTEVsZW1lbnRGdWxsVGFnTmFtZU1hcD4odGFnOiBLLCBzY29wZT86IERvY3VtZW50IHwgbnVsbCk6IFN1Z2FyRWxlbWVudDxIVE1MRWxlbWVudEZ1bGxUYWdOYW1lTWFwW0tdPjtcbiAgKHRhZzogc3RyaW5nLCBzY29wZT86IERvY3VtZW50IHwgbnVsbCk6IFN1Z2FyRWxlbWVudDxIVE1MRWxlbWVudD47XG59ID0gKHRhZzogc3RyaW5nLCBzY29wZT86IERvY3VtZW50IHwgbnVsbCk6IFN1Z2FyRWxlbWVudDxIVE1MRWxlbWVudD4gPT4ge1xuICBjb25zdCBkb2MgPSBzY29wZSB8fCBkb2N1bWVudDtcbiAgY29uc3Qgbm9kZSA9IGRvYy5jcmVhdGVFbGVtZW50KHRhZyk7XG4gIHJldHVybiBmcm9tRG9tKG5vZGUpO1xufTtcblxuY29uc3QgZnJvbVRleHQgPSAodGV4dDogc3RyaW5nLCBzY29wZT86IERvY3VtZW50IHwgbnVsbCk6IFN1Z2FyRWxlbWVudDxUZXh0PiA9PiB7XG4gIGNvbnN0IGRvYyA9IHNjb3BlIHx8IGRvY3VtZW50O1xuICBjb25zdCBub2RlID0gZG9jLmNyZWF0ZVRleHROb2RlKHRleHQpO1xuICByZXR1cm4gZnJvbURvbShub2RlKTtcbn07XG5cbmNvbnN0IGZyb21Eb20gPSA8VCBleHRlbmRzIE5vZGUgfCBXaW5kb3c+IChub2RlOiBUKTogU3VnYXJFbGVtZW50PFQ+ID0+IHtcbiAgLy8gVE9ETzogQ29uc2lkZXIgcmVtb3ZpbmcgdGhpcyBjaGVjaywgYnV0IGxlZnQgYXRtIGZvciBzYWZldHlcbiAgaWYgKG5vZGUgPT09IG51bGwgfHwgbm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdOb2RlIGNhbm5vdCBiZSBudWxsIG9yIHVuZGVmaW5lZCcpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZG9tOiBub2RlXG4gIH07XG59O1xuXG5jb25zdCBmcm9tUG9pbnQgPSAoZG9jRWxtOiBTdWdhckVsZW1lbnQ8RG9jdW1lbnQ+LCB4OiBudW1iZXIsIHk6IG51bWJlcik6IE9wdGlvbmFsPFN1Z2FyRWxlbWVudDxFbGVtZW50Pj4gPT5cbiAgT3B0aW9uYWwuZnJvbShkb2NFbG0uZG9tLmVsZW1lbnRGcm9tUG9pbnQoeCwgeSkpLm1hcChmcm9tRG9tKTtcblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhcmlhYmxlLW5hbWVcbmNvbnN0IFN1Z2FyRWxlbWVudCA9IHtcbiAgZnJvbUh0bWwsXG4gIGZyb21UYWcsXG4gIGZyb21UZXh0LFxuICBmcm9tRG9tLFxuICBmcm9tUG9pbnRcbn07XG5cbmV4cG9ydCB7XG4gIFN1Z2FyRWxlbWVudFxufTtcbiIsImltcG9ydCB7IFN1Z2FyRWxlbWVudCB9IGZyb20gJy4vU3VnYXJFbGVtZW50JztcblxuZXhwb3J0IGNvbnN0IGhlYWQgPSAoKTogU3VnYXJFbGVtZW50PEhUTUxIZWFkRWxlbWVudD4gPT4gZ2V0SGVhZChTdWdhckVsZW1lbnQuZnJvbURvbShkb2N1bWVudCkpO1xuXG5leHBvcnQgY29uc3QgZ2V0SGVhZCA9IChkb2M6IFN1Z2FyRWxlbWVudDxEb2N1bWVudD4pOiBTdWdhckVsZW1lbnQ8SFRNTEhlYWRFbGVtZW50PiA9PiB7XG4gIC8qXG4gICAqIElFOSBhbmQgYWJvdmUgcGVyXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Eb2N1bWVudC9oZWFkXG4gICAqL1xuICBjb25zdCBiID0gZG9jLmRvbS5oZWFkO1xuICBpZiAoYiA9PT0gbnVsbCB8fCBiID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0hlYWQgaXMgbm90IGF2YWlsYWJsZSB5ZXQnKTtcbiAgfVxuICByZXR1cm4gU3VnYXJFbGVtZW50LmZyb21Eb20oYik7XG59O1xuIiwiaW1wb3J0IHsgU2FuZEhUTUxFbGVtZW50IH0gZnJvbSAnQGVwaG94L3NhbmQnO1xuXG5pbXBvcnQgdHlwZSB7IEhUTUxFbGVtZW50RnVsbFRhZ05hbWVNYXAgfSBmcm9tICcuLi8uLi9hbGllbi9Eb21UeXBlcyc7XG5cbmltcG9ydCAqIGFzIE5vZGVUeXBlcyBmcm9tICcuL05vZGVUeXBlcyc7XG5pbXBvcnQgdHlwZSB7IFN1Z2FyRWxlbWVudCB9IGZyb20gJy4vU3VnYXJFbGVtZW50JztcblxuY29uc3QgbmFtZSA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBzdHJpbmcgPT4ge1xuICBjb25zdCByID0gZWxlbWVudC5kb20ubm9kZU5hbWU7XG4gIHJldHVybiByLnRvTG93ZXJDYXNlKCk7XG59O1xuXG5jb25zdCB0eXBlID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPik6IG51bWJlciA9PlxuICBlbGVtZW50LmRvbS5ub2RlVHlwZTtcblxuY29uc3QgdmFsdWUgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KTogc3RyaW5nIHwgbnVsbCA9PlxuICBlbGVtZW50LmRvbS5ub2RlVmFsdWU7XG5cbmNvbnN0IGlzVHlwZSA9IDxFIGV4dGVuZHMgTm9kZT4gKHQ6IG51bWJlcikgPT4gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPik6IGVsZW1lbnQgaXMgU3VnYXJFbGVtZW50PEU+ID0+XG4gIHR5cGUoZWxlbWVudCkgPT09IHQ7XG5cbmNvbnN0IGlzQ29tbWVudCA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBlbGVtZW50IGlzIFN1Z2FyRWxlbWVudDxDb21tZW50PiA9PlxuICB0eXBlKGVsZW1lbnQpID09PSBOb2RlVHlwZXMuQ09NTUVOVCB8fCBuYW1lKGVsZW1lbnQpID09PSAnI2NvbW1lbnQnO1xuXG5jb25zdCBpc0hUTUxFbGVtZW50ID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPik6IGVsZW1lbnQgaXMgU3VnYXJFbGVtZW50PEhUTUxFbGVtZW50PiA9PlxuICBpc0VsZW1lbnQoZWxlbWVudCkgJiYgU2FuZEhUTUxFbGVtZW50LmlzUHJvdG90eXBlT2YoZWxlbWVudC5kb20pO1xuXG5jb25zdCBpc0VsZW1lbnQgPSBpc1R5cGU8RWxlbWVudD4oTm9kZVR5cGVzLkVMRU1FTlQpO1xuY29uc3QgaXNUZXh0ID0gaXNUeXBlPFRleHQ+KE5vZGVUeXBlcy5URVhUKTtcbmNvbnN0IGlzRG9jdW1lbnQgPSBpc1R5cGU8RG9jdW1lbnQ+KE5vZGVUeXBlcy5ET0NVTUVOVCk7XG5jb25zdCBpc0RvY3VtZW50RnJhZ21lbnQgPSBpc1R5cGU8RG9jdW1lbnRGcmFnbWVudD4oTm9kZVR5cGVzLkRPQ1VNRU5UX0ZSQUdNRU5UKTtcblxuY29uc3QgaXNUYWcgPSA8SyBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50RnVsbFRhZ05hbWVNYXA+KHRhZzogSykgPT4gKGU6IFN1Z2FyRWxlbWVudDxOb2RlPik6IGUgaXMgU3VnYXJFbGVtZW50PEhUTUxFbGVtZW50RnVsbFRhZ05hbWVNYXBbS10+ID0+XG4gIGlzRWxlbWVudChlKSAmJiBuYW1lKGUpID09PSB0YWc7XG5cbmV4cG9ydCB7XG4gIG5hbWUsXG4gIHR5cGUsXG4gIHZhbHVlLFxuICBpc0VsZW1lbnQsXG4gIGlzSFRNTEVsZW1lbnQsXG4gIGlzVGV4dCxcbiAgaXNEb2N1bWVudCxcbiAgaXNEb2N1bWVudEZyYWdtZW50LFxuICBpc0NvbW1lbnQsXG4gIGlzVGFnXG59O1xuIiwiaW1wb3J0IHsgQXJyLCBPcHRpb25hbCwgVHlwZSB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmltcG9ydCB0eXBlIHsgSFRNTEVsZW1lbnRGdWxsVGFnTmFtZU1hcCB9IGZyb20gJy4uLy4uL2FsaWVuL0RvbVR5cGVzJztcbmltcG9ydCAqIGFzIFRyYXZlcnNlIGZyb20gJy4uL3NlYXJjaC9UcmF2ZXJzZSc7XG5cbmltcG9ydCB7IFN1Z2FyRWxlbWVudCB9IGZyb20gJy4vU3VnYXJFbGVtZW50JztcbmltcG9ydCAqIGFzIFN1Z2FySGVhZCBmcm9tICcuL1N1Z2FySGVhZCc7XG5pbXBvcnQgKiBhcyBTdWdhck5vZGUgZnJvbSAnLi9TdWdhck5vZGUnO1xuXG5leHBvcnQgdHlwZSBSb290Tm9kZSA9IFN1Z2FyRWxlbWVudDxEb2N1bWVudCB8IFNoYWRvd1Jvb3Q+O1xuXG4vKipcbiAqIElzIHRoZSBlbGVtZW50IGEgU2hhZG93Um9vdD9cbiAqXG4gKiBOb3RlOiB0aGlzIGlzIGluc3VmZmljaWVudCB0byB0ZXN0IGlmIGFueSBlbGVtZW50IGlzIGEgc2hhZG93IHJvb3QsIGJ1dCBpdCBpcyBzdWZmaWNpZW50IHRvIGRpZmZlcmVudGlhdGUgYmV0d2VlblxuICogYSBEb2N1bWVudCBhbmQgYSBTaGFkb3dSb290LlxuICovXG5leHBvcnQgY29uc3QgaXNTaGFkb3dSb290ID0gKGRvczogU3VnYXJFbGVtZW50PE5vZGU+KTogZG9zIGlzIFN1Z2FyRWxlbWVudDxTaGFkb3dSb290PiA9PlxuICBTdWdhck5vZGUuaXNEb2N1bWVudEZyYWdtZW50KGRvcykgJiYgVHlwZS5pc05vbk51bGxhYmxlKChkb3MuZG9tIGFzIFNoYWRvd1Jvb3QpLmhvc3QpO1xuXG5leHBvcnQgY29uc3QgZ2V0Um9vdE5vZGU6IChlOiBTdWdhckVsZW1lbnQ8Tm9kZT4pID0+IFJvb3ROb2RlID0gKGUpID0+XG4gIFN1Z2FyRWxlbWVudC5mcm9tRG9tKGUuZG9tLmdldFJvb3ROb2RlKCkpIGFzIFJvb3ROb2RlO1xuXG4vKiogQ3JlYXRlIGFuIGVsZW1lbnQsIHVzaW5nIHRoZSBhY3R1YWwgZG9jdW1lbnQuICovXG5leHBvcnQgY29uc3QgY3JlYXRlRWxlbWVudDoge1xuICA8SyBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50RnVsbFRhZ05hbWVNYXA+KGRvczogUm9vdE5vZGUsIHRhZzogSyk6IFN1Z2FyRWxlbWVudDxIVE1MRWxlbWVudEZ1bGxUYWdOYW1lTWFwW0tdPjtcbiAgKGRvczogUm9vdE5vZGUsIHRhZzogc3RyaW5nKTogU3VnYXJFbGVtZW50PEhUTUxFbGVtZW50Pjtcbn0gPSAoZG9zOiBSb290Tm9kZSwgdGFnOiBzdHJpbmcpID0+XG4gIFN1Z2FyRWxlbWVudC5mcm9tVGFnKHRhZywgVHJhdmVyc2UuZG9jdW1lbnRPck93bmVyKGRvcykuZG9tKTtcblxuLyoqIFdoZXJlIHN0eWxlIHRhZ3MgbmVlZCB0byBnby4gU2hhZG93Um9vdCBvciBkb2N1bWVudCBoZWFkICovXG5leHBvcnQgY29uc3QgZ2V0U3R5bGVDb250YWluZXIgPSAoZG9zOiBSb290Tm9kZSk6IFN1Z2FyRWxlbWVudDxIVE1MSGVhZEVsZW1lbnQgfCBTaGFkb3dSb290PiA9PlxuICBpc1NoYWRvd1Jvb3QoZG9zKSA/IGRvcyA6IFN1Z2FySGVhZC5nZXRIZWFkKFRyYXZlcnNlLmRvY3VtZW50T3JPd25lcihkb3MpKTtcblxuLyoqIFdoZXJlIGNvbnRlbnQgbmVlZHMgdG8gZ28uIFNoYWRvd1Jvb3Qgb3IgZG9jdW1lbnQgYm9keSAqL1xuZXhwb3J0IGNvbnN0IGdldENvbnRlbnRDb250YWluZXIgPSAoZG9zOiBSb290Tm9kZSk6IFN1Z2FyRWxlbWVudDxIVE1MRWxlbWVudCB8IFNoYWRvd1Jvb3Q+ID0+XG4gIC8vIENhbid0IHVzZSBTdWdhckJvZHkuYm9keSB3aXRob3V0IGNhdXNpbmcgYSBjaXJjdWxhciBtb2R1bGUgcmVmZXJlbmNlIChzaW5jZSBTdWdhckJvZHkuaW5Cb2R5IHVzZXMgU3VnYXJTaGFkb3dEb20pXG4gIGlzU2hhZG93Um9vdChkb3MpID8gZG9zIDogU3VnYXJFbGVtZW50LmZyb21Eb20oVHJhdmVyc2UuZG9jdW1lbnRPck93bmVyKGRvcykuZG9tLmJvZHkpO1xuXG4vKiogSXMgdGhpcyBlbGVtZW50IGVpdGhlciBhIFNoYWRvd1Jvb3Qgb3IgYSBkZXNjZW5kZW50IG9mIGEgU2hhZG93Um9vdC4gKi9cbmV4cG9ydCBjb25zdCBpc0luU2hhZG93Um9vdCA9IChlOiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBib29sZWFuID0+XG4gIGdldFNoYWRvd1Jvb3QoZSkuaXNTb21lKCk7XG5cbi8qKiBJZiB0aGlzIGVsZW1lbnQgaXMgaW4gYSBTaGFkb3dSb290LCByZXR1cm4gaXQuICovXG5leHBvcnQgY29uc3QgZ2V0U2hhZG93Um9vdCA9IChlOiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBPcHRpb25hbDxTdWdhckVsZW1lbnQ8U2hhZG93Um9vdD4+ID0+IHtcbiAgY29uc3QgciA9IGdldFJvb3ROb2RlKGUpO1xuICByZXR1cm4gaXNTaGFkb3dSb290KHIpID8gT3B0aW9uYWwuc29tZShyKSA6IE9wdGlvbmFsLm5vbmUoKTtcbn07XG5cbi8qKiBSZXR1cm4gdGhlIGhvc3Qgb2YgYSBTaGFkb3dSb290LlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gd2lsbCB0aHJvdyBpZiBTaGFkb3cgRE9NIGlzIHVuc3VwcG9ydGVkIGluIHRoZSBicm93c2VyLCBvciBpZiB0aGUgaG9zdCBpcyBudWxsLlxuICogSWYgeW91IGFjdHVhbGx5IGhhdmUgYSBTaGFkb3dSb290LCB0aGlzIHNob3VsZG4ndCBoYXBwZW4uXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRTaGFkb3dIb3N0ID0gKGU6IFN1Z2FyRWxlbWVudDxTaGFkb3dSb290Pik6IFN1Z2FyRWxlbWVudDxFbGVtZW50PiA9PlxuICBTdWdhckVsZW1lbnQuZnJvbURvbShlLmRvbS5ob3N0KTtcblxuLyoqXG4gKiBXaGVuIEV2ZW50cyBidWJibGUgdXAgdGhyb3VnaCBhIFNoYWRvd1Jvb3QsIHRoZSBicm93c2VyIGNoYW5nZXMgdGhlIHRhcmdldCB0byBiZSB0aGUgc2hhZG93IGhvc3QuXG4gKiBUaGlzIGZ1bmN0aW9uIGdldHMgdGhlIFwib3JpZ2luYWxcIiBldmVudCB0YXJnZXQgaWYgcG9zc2libGUuXG4gKiBUaGlzIG9ubHkgd29ya3MgaWYgdGhlIHNoYWRvdyB0cmVlIGlzIG9wZW4gLSBpZiB0aGUgc2hhZG93IHRyZWUgaXMgY2xvc2VkLCBldmVudC50YXJnZXQgaXMgcmV0dXJuZWQuXG4gKiBTZWU6IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi9mdW5kYW1lbnRhbHMvd2ViLWNvbXBvbmVudHMvc2hhZG93ZG9tI2V2ZW50c1xuICovXG5leHBvcnQgY29uc3QgZ2V0T3JpZ2luYWxFdmVudFRhcmdldCA9IChldmVudDogRXZlbnQpOiBPcHRpb25hbDxFdmVudFRhcmdldD4gPT4ge1xuICBpZiAoVHlwZS5pc05vbk51bGxhYmxlKGV2ZW50LnRhcmdldCkpIHtcbiAgICBjb25zdCBlbCA9IFN1Z2FyRWxlbWVudC5mcm9tRG9tKGV2ZW50LnRhcmdldCBhcyBOb2RlKTtcbiAgICBpZiAoU3VnYXJOb2RlLmlzRWxlbWVudChlbCkgJiYgaXNPcGVuU2hhZG93SG9zdChlbCkpIHtcbiAgICAgIC8vIFdoZW4gdGFyZ2V0IGVsZW1lbnQgaXMgaW5zaWRlIFNoYWRvdyBET00gd2UgbmVlZCB0byB0YWtlIGZpcnN0IGVsZW1lbnQgZnJvbSBjb21wb3NlZFBhdGhcbiAgICAgIC8vIG90aGVyd2lzZSB3ZSdsbCBnZXQgU2hhZG93IFJvb3QgcGFyZW50LCBub3QgYWN0dWFsIHRhcmdldCBlbGVtZW50LlxuICAgICAgaWYgKGV2ZW50LmNvbXBvc2VkICYmIGV2ZW50LmNvbXBvc2VkUGF0aCkge1xuICAgICAgICBjb25zdCBjb21wb3NlZFBhdGggPSBldmVudC5jb21wb3NlZFBhdGgoKTtcbiAgICAgICAgaWYgKGNvbXBvc2VkUGF0aCkge1xuICAgICAgICAgIHJldHVybiBBcnIuaGVhZChjb21wb3NlZFBhdGgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBPcHRpb25hbC5mcm9tKGV2ZW50LnRhcmdldCk7XG59O1xuXG5leHBvcnQgY29uc3QgaXNPcGVuU2hhZG93Um9vdCA9IChzcjogU3VnYXJFbGVtZW50PFNoYWRvd1Jvb3Q+KTogYm9vbGVhbiA9PlxuICBzci5kb20ubW9kZSA9PT0gJ29wZW4nO1xuXG5leHBvcnQgY29uc3QgaXNDbG9zZWRTaGFkb3dSb290ID0gKHNyOiBTdWdhckVsZW1lbnQ8U2hhZG93Um9vdD4pOiBib29sZWFuID0+XG4gIHNyLmRvbS5tb2RlID09PSAnY2xvc2VkJztcblxuLyoqIFJldHVybiB0cnVlIGlmIHRoZSBlbGVtZW50IGlzIGEgaG9zdCBvZiBhbiBvcGVuIHNoYWRvdyByb290LlxuICogIFJldHVybiBmYWxzZSBpZiB0aGUgZWxlbWVudCBpcyBhIGhvc3Qgb2YgYSBjbG9zZWQgc2hhZG93IHJvb3QsIG9yIGlmIHRoZSBlbGVtZW50IGlzIG5vdCBhIGhvc3QuXG4gKi9cbmV4cG9ydCBjb25zdCBpc09wZW5TaGFkb3dIb3N0ID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxFbGVtZW50Pik6IGJvb2xlYW4gPT5cbiAgVHlwZS5pc05vbk51bGxhYmxlKGVsZW1lbnQuZG9tLnNoYWRvd1Jvb3QpO1xuIiwiaW1wb3J0IHR5cGUgeyBPcHRpb25hbCB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmltcG9ydCB7IE5vZGVWYWx1ZSB9IGZyb20gJy4uLy4uL2ltcGwvTm9kZVZhbHVlJztcblxuaW1wb3J0IHR5cGUgeyBTdWdhckVsZW1lbnQgfSBmcm9tICcuL1N1Z2FyRWxlbWVudCc7XG5pbXBvcnQgKiBhcyBTdWdhck5vZGUgZnJvbSAnLi9TdWdhck5vZGUnO1xuXG5jb25zdCBhcGkgPSBOb2RlVmFsdWUoU3VnYXJOb2RlLmlzVGV4dCwgJ3RleHQnKTtcblxuY29uc3QgZ2V0ID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxUZXh0Pik6IHN0cmluZyA9PlxuICBhcGkuZ2V0KGVsZW1lbnQpO1xuXG5jb25zdCBnZXRPcHRpb24gPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KTogT3B0aW9uYWw8c3RyaW5nPiA9PlxuICBhcGkuZ2V0T3B0aW9uKGVsZW1lbnQpO1xuXG5jb25zdCBzZXQgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PFRleHQ+LCB2YWx1ZTogc3RyaW5nKTogdm9pZCA9PlxuICBhcGkuc2V0KGVsZW1lbnQsIHZhbHVlKTtcblxuZXhwb3J0IHtcbiAgZ2V0LFxuICBnZXRPcHRpb24sXG4gIHNldFxufTtcbiIsImltcG9ydCB7IEFyciwgT2JqLCBPcHRpb25hbCwgVHlwZSB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmltcG9ydCB0eXBlIHsgU3VnYXJFbGVtZW50IH0gZnJvbSAnLi4vbm9kZS9TdWdhckVsZW1lbnQnO1xuaW1wb3J0ICogYXMgU3VnYXJOb2RlIGZyb20gJy4uL25vZGUvU3VnYXJOb2RlJztcblxuY29uc3QgcmF3U2V0ID0gKGRvbTogRWxlbWVudCwga2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCBib29sZWFuIHwgbnVtYmVyKTogdm9pZCA9PiB7XG4gIC8qXG4gICAqIEpRdWVyeSBjb2VyY2VkIGV2ZXJ5dGhpbmcgdG8gYSBzdHJpbmcsIGFuZCBzaWxlbnRseSBkaWQgbm90aGluZyBvbiB0ZXh0IG5vZGUvbnVsbC91bmRlZmluZWQuXG4gICAqXG4gICAqIFdlIGZhaWwgb24gdGhvc2UgaW52YWxpZCBjYXNlcywgb25seSBhbGxvd2luZyBudW1iZXJzIGFuZCBib29sZWFucy5cbiAgICovXG4gIGlmIChUeXBlLmlzU3RyaW5nKHZhbHVlKSB8fCBUeXBlLmlzQm9vbGVhbih2YWx1ZSkgfHwgVHlwZS5pc051bWJlcih2YWx1ZSkpIHtcbiAgICBkb20uc2V0QXR0cmlidXRlKGtleSwgdmFsdWUgKyAnJyk7XG4gIH0gZWxzZSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIGNhbGwgdG8gQXR0cmlidXRlLnNldC4gS2V5ICcsIGtleSwgJzo6IFZhbHVlICcsIHZhbHVlLCAnOjogRWxlbWVudCAnLCBkb20pO1xuICAgIHRocm93IG5ldyBFcnJvcignQXR0cmlidXRlIHZhbHVlIHdhcyBub3Qgc2ltcGxlJyk7XG4gIH1cbn07XG5cbmNvbnN0IHNldCA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8RWxlbWVudD4sIGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIHwgYm9vbGVhbiB8IG51bWJlcik6IHZvaWQgPT4ge1xuICByYXdTZXQoZWxlbWVudC5kb20sIGtleSwgdmFsdWUpO1xufTtcblxuY29uc3Qgc2V0QWxsID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxFbGVtZW50PiwgYXR0cnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IGJvb2xlYW4gfCBudW1iZXI+KTogdm9pZCA9PiB7XG4gIGNvbnN0IGRvbSA9IGVsZW1lbnQuZG9tO1xuICBPYmouZWFjaChhdHRycywgKHYsIGspID0+IHtcbiAgICByYXdTZXQoZG9tLCBrLCB2KTtcbiAgfSk7XG59O1xuXG5jb25zdCBzZXRPcHRpb25zID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxFbGVtZW50PiwgYXR0cnM6IFJlY29yZDxzdHJpbmcsIE9wdGlvbmFsPHN0cmluZyB8IGJvb2xlYW4gfCBudW1iZXI+Pik6IHZvaWQgPT4ge1xuICBPYmouZWFjaChhdHRycywgKHYsIGspID0+IHtcbiAgICB2LmZvbGQoKCkgPT4ge1xuICAgICAgcmVtb3ZlKGVsZW1lbnQsIGspO1xuICAgIH0sICh2YWx1ZSkgPT4ge1xuICAgICAgcmF3U2V0KGVsZW1lbnQuZG9tLCBrLCB2YWx1ZSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgZ2V0ID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxFbGVtZW50Piwga2V5OiBzdHJpbmcpOiB1bmRlZmluZWQgfCBzdHJpbmcgPT4ge1xuICBjb25zdCB2ID0gZWxlbWVudC5kb20uZ2V0QXR0cmlidXRlKGtleSk7XG5cbiAgLy8gdW5kZWZpbmVkIGlzIHRoZSBtb3JlIGFwcHJvcHJpYXRlIHZhbHVlIGZvciBKUywgYW5kIHRoaXMgbWF0Y2hlcyBKUXVlcnlcbiAgcmV0dXJuIHYgPT09IG51bGwgPyB1bmRlZmluZWQgOiB2O1xufTtcblxuY29uc3QgZ2V0T3B0ID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxFbGVtZW50Piwga2V5OiBzdHJpbmcpOiBPcHRpb25hbDxzdHJpbmc+ID0+XG4gIE9wdGlvbmFsLmZyb20oZ2V0KGVsZW1lbnQsIGtleSkpO1xuXG5jb25zdCBoYXMgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+LCBrZXk6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuICBjb25zdCBkb20gPSBlbGVtZW50LmRvbTtcblxuICAvLyByZXR1cm4gZmFsc2UgZm9yIG5vbi1lbGVtZW50IG5vZGVzLCBubyBwb2ludCBpbiB0aHJvd2luZyBhbiBlcnJvclxuICByZXR1cm4gZG9tICYmIChkb20gYXMgRWxlbWVudCkuaGFzQXR0cmlidXRlID8gKGRvbSBhcyBFbGVtZW50KS5oYXNBdHRyaWJ1dGUoa2V5KSA6IGZhbHNlO1xufTtcblxuY29uc3QgcmVtb3ZlID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxFbGVtZW50Piwga2V5OiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgZWxlbWVudC5kb20ucmVtb3ZlQXR0cmlidXRlKGtleSk7XG59O1xuXG5jb25zdCBoYXNOb25lID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPik6IGJvb2xlYW4gPT4ge1xuICBjb25zdCBhdHRycyA9IChlbGVtZW50LmRvbSBhcyBFbGVtZW50KS5hdHRyaWJ1dGVzO1xuICByZXR1cm4gYXR0cnMgPT09IHVuZGVmaW5lZCB8fCBhdHRycyA9PT0gbnVsbCB8fCBhdHRycy5sZW5ndGggPT09IDA7XG59O1xuXG5jb25zdCBjbG9uZSA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8RWxlbWVudD4pOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0+XG4gIEFyci5mb2xkbChlbGVtZW50LmRvbS5hdHRyaWJ1dGVzLCAoYWNjLCBhdHRyKSA9PiB7XG4gICAgYWNjW2F0dHIubmFtZV0gPSBhdHRyLnZhbHVlO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIHN0cmluZz4pO1xuXG5jb25zdCB0cmFuc2Zlck9uZSA9IChzb3VyY2U6IFN1Z2FyRWxlbWVudDxFbGVtZW50PiwgZGVzdGluYXRpb246IFN1Z2FyRWxlbWVudDxFbGVtZW50PiwgYXR0cjogc3RyaW5nKTogdm9pZCA9PiB7XG4gIC8vIE5PVEU6IFdlIGRvbid0IHdhbnQgdG8gY2xvYmJlciBhbnkgZXhpc3RpbmcgYXR0cmlidXRlc1xuICBpZiAoIWhhcyhkZXN0aW5hdGlvbiwgYXR0cikpIHtcbiAgICBnZXRPcHQoc291cmNlLCBhdHRyKS5lYWNoKChzcmNWYWx1ZSkgPT4gc2V0KGRlc3RpbmF0aW9uLCBhdHRyLCBzcmNWYWx1ZSkpO1xuICB9XG59O1xuXG4vLyBUcmFuc2ZlciBhdHRyaWJ1dGVzKGF0dHJzKSBmcm9tIHNvdXJjZSB0byBkZXN0aW5hdGlvbiwgdW5sZXNzIHRoZXkgYXJlIGFscmVhZHkgcHJlc2VudFxuY29uc3QgdHJhbnNmZXIgPSAoc291cmNlOiBTdWdhckVsZW1lbnQ8RWxlbWVudD4sIGRlc3RpbmF0aW9uOiBTdWdhckVsZW1lbnQ8RWxlbWVudD4sIGF0dHJzOiBzdHJpbmdbXSk6IHZvaWQgPT4ge1xuICBpZiAoIVN1Z2FyTm9kZS5pc0VsZW1lbnQoc291cmNlKSB8fCAhU3VnYXJOb2RlLmlzRWxlbWVudChkZXN0aW5hdGlvbikpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgQXJyLmVhY2goYXR0cnMsIChhdHRyKSA9PiB7XG4gICAgdHJhbnNmZXJPbmUoc291cmNlLCBkZXN0aW5hdGlvbiwgYXR0cik7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgY2xvbmUsIHNldCwgc2V0QWxsLCBzZXRPcHRpb25zLCBnZXQsIGdldE9wdCwgaGFzLCByZW1vdmUsIGhhc05vbmUsIHRyYW5zZmVyIH07XG4iLCJpbXBvcnQgeyBBcnIgfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5pbXBvcnQgKiBhcyBTdWdhckJvZHkgZnJvbSAnLi4vbm9kZS9TdWdhckJvZHknO1xuaW1wb3J0IHR5cGUgeyBTdWdhckVsZW1lbnQgfSBmcm9tICcuLi9ub2RlL1N1Z2FyRWxlbWVudCc7XG5cbmltcG9ydCAqIGFzIFRyYXZlcnNlIGZyb20gJy4vVHJhdmVyc2UnO1xuXG4vLyBtYXliZSBUcmF2ZXJzZVdpdGgsIHNpbWlsYXIgdG8gdHJhdmVyc2UgYnV0IHdpdGggYSBwcmVkaWNhdGU/XG5cbmNvbnN0IGFsbDoge1xuICA8VCBleHRlbmRzIE5vZGUgPSBOb2RlPihwcmVkaWNhdGU6IChlOiBTdWdhckVsZW1lbnQ8Tm9kZT4pID0+IGUgaXMgU3VnYXJFbGVtZW50PFQ+KTogU3VnYXJFbGVtZW50PFQ+W107XG4gIChwcmVkaWNhdGU6IChlOiBTdWdhckVsZW1lbnQ8Tm9kZT4pID0+IGJvb2xlYW4pOiBTdWdhckVsZW1lbnQ8Tm9kZT5bXTtcbn0gPSAocHJlZGljYXRlOiAoZTogU3VnYXJFbGVtZW50PE5vZGU+KSA9PiBib29sZWFuKSA9PlxuICBkZXNjZW5kYW50cyhTdWdhckJvZHkuYm9keSgpLCBwcmVkaWNhdGUpO1xuXG5jb25zdCBhbmNlc3RvcnM6IHtcbiAgPFQgZXh0ZW5kcyBOb2RlID0gTm9kZT4oc2NvcGU6IFN1Z2FyRWxlbWVudDxOb2RlPiwgcHJlZGljYXRlOiAoZTogU3VnYXJFbGVtZW50PE5vZGU+KSA9PiBlIGlzIFN1Z2FyRWxlbWVudDxUPiwgaXNSb290PzogKGU6IFN1Z2FyRWxlbWVudDxOb2RlPikgPT4gYm9vbGVhbik6IFN1Z2FyRWxlbWVudDxUPltdO1xuICAoc2NvcGU6IFN1Z2FyRWxlbWVudDxOb2RlPiwgcHJlZGljYXRlOiAoZTogU3VnYXJFbGVtZW50PE5vZGU+KSA9PiBib29sZWFuLCBpc1Jvb3Q/OiAoZTogU3VnYXJFbGVtZW50PE5vZGU+KSA9PiBib29sZWFuKTogU3VnYXJFbGVtZW50PE5vZGU+W107XG59ID0gKHNjb3BlOiBTdWdhckVsZW1lbnQ8Tm9kZT4sIHByZWRpY2F0ZTogKGU6IFN1Z2FyRWxlbWVudDxOb2RlPikgPT4gYm9vbGVhbiwgaXNSb290PzogKGU6IFN1Z2FyRWxlbWVudDxOb2RlPikgPT4gYm9vbGVhbikgPT5cbiAgQXJyLmZpbHRlcihUcmF2ZXJzZS5wYXJlbnRzKHNjb3BlLCBpc1Jvb3QpLCBwcmVkaWNhdGUpO1xuXG5jb25zdCBzaWJsaW5nczoge1xuICA8VCBleHRlbmRzIE5vZGUgPSBOb2RlPihzY29wZTogU3VnYXJFbGVtZW50PE5vZGU+LCBwcmVkaWNhdGU6IChlOiBTdWdhckVsZW1lbnQ8Tm9kZT4pID0+IGUgaXMgU3VnYXJFbGVtZW50PFQ+KTogU3VnYXJFbGVtZW50PFQ+W107XG4gIChzY29wZTogU3VnYXJFbGVtZW50PE5vZGU+LCBwcmVkaWNhdGU6IChlOiBTdWdhckVsZW1lbnQ8Tm9kZT4pID0+IGJvb2xlYW4pOiBTdWdhckVsZW1lbnQ8Tm9kZT5bXTtcbn0gPSAoc2NvcGU6IFN1Z2FyRWxlbWVudDxOb2RlPiwgcHJlZGljYXRlOiAoZTogU3VnYXJFbGVtZW50PE5vZGU+KSA9PiBib29sZWFuKSA9PlxuICBBcnIuZmlsdGVyKFRyYXZlcnNlLnNpYmxpbmdzKHNjb3BlKSwgcHJlZGljYXRlKTtcblxuY29uc3QgY2hpbGRyZW46IHtcbiAgPFQgZXh0ZW5kcyBOb2RlID0gTm9kZT4oc2NvcGU6IFN1Z2FyRWxlbWVudDxOb2RlPiwgcHJlZGljYXRlOiAoZTogU3VnYXJFbGVtZW50PE5vZGU+KSA9PiBlIGlzIFN1Z2FyRWxlbWVudDxUPik6IFN1Z2FyRWxlbWVudDxUPltdO1xuICAoc2NvcGU6IFN1Z2FyRWxlbWVudDxOb2RlPiwgcHJlZGljYXRlOiAoZTogU3VnYXJFbGVtZW50PE5vZGU+KSA9PiBib29sZWFuKTogU3VnYXJFbGVtZW50PE5vZGU+W107XG59ID0gKHNjb3BlOiBTdWdhckVsZW1lbnQ8Tm9kZT4sIHByZWRpY2F0ZTogKGU6IFN1Z2FyRWxlbWVudDxOb2RlPikgPT4gYm9vbGVhbikgPT5cbiAgQXJyLmZpbHRlcihUcmF2ZXJzZS5jaGlsZHJlbihzY29wZSksIHByZWRpY2F0ZSk7XG5cbmNvbnN0IGRlc2NlbmRhbnRzOiB7XG4gIDxUIGV4dGVuZHMgTm9kZSA9IE5vZGU+KHNjb3BlOiBTdWdhckVsZW1lbnQ8Tm9kZT4sIHByZWRpY2F0ZTogKGU6IFN1Z2FyRWxlbWVudDxOb2RlPikgPT4gZSBpcyBTdWdhckVsZW1lbnQ8VD4pOiBTdWdhckVsZW1lbnQ8VD5bXTtcbiAgKHNjb3BlOiBTdWdhckVsZW1lbnQ8Tm9kZT4sIHByZWRpY2F0ZTogKGU6IFN1Z2FyRWxlbWVudDxOb2RlPikgPT4gYm9vbGVhbik6IFN1Z2FyRWxlbWVudDxOb2RlPltdO1xufSA9IChzY29wZTogU3VnYXJFbGVtZW50PE5vZGU+LCBwcmVkaWNhdGU6IChlOiBTdWdhckVsZW1lbnQ8Tm9kZT4pID0+IGJvb2xlYW4pID0+IHtcbiAgbGV0IHJlc3VsdDogU3VnYXJFbGVtZW50PE5vZGU+W10gPSBbXTtcblxuICAvLyBSZWN1cnNlLnRvQXJyYXkoKSBtaWdodCBoZWxwIGhlcmVcbiAgQXJyLmVhY2goVHJhdmVyc2UuY2hpbGRyZW4oc2NvcGUpLCAoeCkgPT4ge1xuICAgIGlmIChwcmVkaWNhdGUoeCkpIHtcbiAgICAgIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQoWyB4IF0pO1xuICAgIH1cbiAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0KGRlc2NlbmRhbnRzKHgsIHByZWRpY2F0ZSkpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCB7XG4gIGFsbCxcbiAgYW5jZXN0b3JzLFxuICBzaWJsaW5ncyxcbiAgY2hpbGRyZW4sXG4gIGRlc2NlbmRhbnRzXG59O1xuIiwiaW1wb3J0IHR5cGUgeyBTdWdhckVsZW1lbnQgfSBmcm9tICcuLi9ub2RlL1N1Z2FyRWxlbWVudCc7XG5cbmltcG9ydCAqIGFzIFByZWRpY2F0ZUZpbHRlciBmcm9tICcuL1ByZWRpY2F0ZUZpbHRlcic7XG5pbXBvcnQgKiBhcyBTZWxlY3RvcnMgZnJvbSAnLi9TZWxlY3RvcnMnO1xuXG5jb25zdCBhbGwgPSA8VCBleHRlbmRzIEVsZW1lbnQgPSBFbGVtZW50PiAoc2VsZWN0b3I6IHN0cmluZyk6IFN1Z2FyRWxlbWVudDxUPltdID0+XG4gIFNlbGVjdG9ycy5hbGw8VD4oc2VsZWN0b3IpO1xuXG4vLyBGb3IgYWxsIG9mIHRoZSBmb2xsb3dpbmc6XG4vL1xuLy8galF1ZXJ5IGRvZXMgc2libGluZ3Mgb2YgZmlyc3RDaGlsZC4gSUU5KyBzdXBwb3J0cyBzY29wZS5kb20uY2hpbGRyZW4gKHNpbWlsYXIgdG8gVHJhdmVyc2UuY2hpbGRyZW4gYnV0IGVsZW1lbnRzIG9ubHkpLlxuLy8gVHJhdmVyc2Ugc2hvdWxkIGFsc28gZG8gdGhpcyAoYnV0IHByb2JhYmx5IG5vdCBieSBkZWZhdWx0KS5cbi8vXG5cbmNvbnN0IGFuY2VzdG9ycyA9IDxUIGV4dGVuZHMgRWxlbWVudCA9IEVsZW1lbnQ+IChzY29wZTogU3VnYXJFbGVtZW50PE5vZGU+LCBzZWxlY3Rvcjogc3RyaW5nLCBpc1Jvb3Q/OiAoZTogU3VnYXJFbGVtZW50PE5vZGU+KSA9PiBib29sZWFuKTogU3VnYXJFbGVtZW50PFQ+W10gPT5cbiAgLy8gSXQgbWF5IHN1cnByaXNlIHlvdSB0byBsZWFybiB0aGlzIGlzIGV4YWN0bHkgd2hhdCBKUXVlcnkgZG9lc1xuICAvLyBUT0RPOiBBdm9pZCBhbGwgdGhpcyB3cmFwcGluZyBhbmQgdW53cmFwcGluZ1xuICBQcmVkaWNhdGVGaWx0ZXIuYW5jZXN0b3JzKHNjb3BlLCAoZSk6IGUgaXMgU3VnYXJFbGVtZW50PFQ+ID0+IFNlbGVjdG9ycy5pczxUPihlLCBzZWxlY3RvciksIGlzUm9vdCk7XG5cbmNvbnN0IHNpYmxpbmdzID0gPFQgZXh0ZW5kcyBFbGVtZW50ID0gRWxlbWVudD4gKHNjb3BlOiBTdWdhckVsZW1lbnQ8Tm9kZT4sIHNlbGVjdG9yOiBzdHJpbmcpOiBTdWdhckVsZW1lbnQ8VD5bXSA9PlxuICAvLyBJdCBtYXkgc3VycHJpc2UgeW91IHRvIGxlYXJuIHRoaXMgaXMgZXhhY3RseSB3aGF0IEpRdWVyeSBkb2VzXG4gIC8vIFRPRE86IEF2b2lkIGFsbCB0aGUgd3JhcHBpbmcgYW5kIHVud3JhcHBpbmdcbiAgUHJlZGljYXRlRmlsdGVyLnNpYmxpbmdzKHNjb3BlLCAoZSk6IGUgaXMgU3VnYXJFbGVtZW50PFQ+ID0+IFNlbGVjdG9ycy5pczxUPihlLCBzZWxlY3RvcikpO1xuXG5jb25zdCBjaGlsZHJlbiA9IDxUIGV4dGVuZHMgRWxlbWVudCA9IEVsZW1lbnQ+IChzY29wZTogU3VnYXJFbGVtZW50PE5vZGU+LCBzZWxlY3Rvcjogc3RyaW5nKTogU3VnYXJFbGVtZW50PFQ+W10gPT5cbiAgLy8gSXQgbWF5IHN1cnByaXNlIHlvdSB0byBsZWFybiB0aGlzIGlzIGV4YWN0bHkgd2hhdCBKUXVlcnkgZG9lc1xuICAvLyBUT0RPOiBBdm9pZCBhbGwgdGhlIHdyYXBwaW5nIGFuZCB1bndyYXBwaW5nXG4gIFByZWRpY2F0ZUZpbHRlci5jaGlsZHJlbihzY29wZSwgKGUpOiBlIGlzIFN1Z2FyRWxlbWVudDxUPiA9PiBTZWxlY3RvcnMuaXM8VD4oZSwgc2VsZWN0b3IpKTtcblxuY29uc3QgZGVzY2VuZGFudHMgPSA8VCBleHRlbmRzIEVsZW1lbnQgPSBFbGVtZW50PiAoc2NvcGU6IFN1Z2FyRWxlbWVudDxOb2RlPiwgc2VsZWN0b3I6IHN0cmluZyk6IFN1Z2FyRWxlbWVudDxUPltdID0+XG4gIFNlbGVjdG9ycy5hbGw8VD4oc2VsZWN0b3IsIHNjb3BlKTtcblxuZXhwb3J0IHtcbiAgYWxsLFxuICBhbmNlc3RvcnMsXG4gIHNpYmxpbmdzLFxuICBjaGlsZHJlbixcbiAgZGVzY2VuZGFudHNcbn07XG4iLCJpbXBvcnQgeyBBcnIsIE9wdGlvbmFsIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0IHsgRE9DVU1FTlQsIERPQ1VNRU5UX0ZSQUdNRU5ULCBFTEVNRU5UIH0gZnJvbSAnLi4vbm9kZS9Ob2RlVHlwZXMnO1xuaW1wb3J0IHsgU3VnYXJFbGVtZW50IH0gZnJvbSAnLi4vbm9kZS9TdWdhckVsZW1lbnQnO1xuXG5pbnRlcmZhY2UgVmVuZG9yRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBtc01hdGNoZXNTZWxlY3Rvcj86IChzZWxlY3Rvcjogc3RyaW5nKSA9PiBib29sZWFuO1xuICBtb3pNYXRjaGVzU2VsZWN0b3I/OiAoc2VsZWN0b3I6IHN0cmluZykgPT4gYm9vbGVhbjtcbn1cblxuY29uc3QgaXMgPSA8VCBleHRlbmRzIEVsZW1lbnQgPSBFbGVtZW50PiAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+LCBzZWxlY3Rvcjogc3RyaW5nKTogZWxlbWVudCBpcyBTdWdhckVsZW1lbnQ8VD4gPT4ge1xuICBjb25zdCBkb20gPSBlbGVtZW50LmRvbTtcbiAgaWYgKGRvbS5ub2RlVHlwZSAhPT0gRUxFTUVOVCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBlbGVtID0gZG9tIGFzIFZlbmRvckVsZW1lbnQ7XG4gICAgaWYgKGVsZW0ubWF0Y2hlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZWxlbS5tYXRjaGVzKHNlbGVjdG9yKTtcbiAgICB9IGVsc2UgaWYgKGVsZW0ubXNNYXRjaGVzU2VsZWN0b3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGVsZW0ubXNNYXRjaGVzU2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIH0gZWxzZSBpZiAoZWxlbS53ZWJraXRNYXRjaGVzU2VsZWN0b3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGVsZW0ud2Via2l0TWF0Y2hlc1NlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICB9IGVsc2UgaWYgKGVsZW0ubW96TWF0Y2hlc1NlbGVjdG9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIGNhc3QgdG8gYW55IGFzIG1vek1hdGNoZXNTZWxlY3RvciBkb2Vzbid0IGV4aXN0IGluIFRTIERPTSBsaWJcbiAgICAgIHJldHVybiBlbGVtLm1vek1hdGNoZXNTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQnJvd3NlciBsYWNrcyBuYXRpdmUgc2VsZWN0b3JzJyk7XG4gICAgfSAvLyB1bmZvcnR1bmF0ZWx5IHdlIGNhbid0IHRocm93IHRoaXMgb24gc3RhcnR1cCA6KFxuICB9XG59O1xuXG5jb25zdCBieXBhc3NTZWxlY3RvciA9IChkb206IE5vZGUpID0+XG4gIC8vIE9ubHkgZWxlbWVudHMsIGRvY3VtZW50cyBhbmQgc2hhZG93IHJvb3RzIHN1cHBvcnQgcXVlcnlTZWxlY3RvclxuICAvLyBzaGFkb3cgcm9vdCBlbGVtZW50IHR5cGUgaXMgRE9DVU1FTlRfRlJBR01FTlRcbiAgZG9tLm5vZGVUeXBlICE9PSBFTEVNRU5UICYmIGRvbS5ub2RlVHlwZSAhPT0gRE9DVU1FTlQgJiYgZG9tLm5vZGVUeXBlICE9PSBET0NVTUVOVF9GUkFHTUVOVCB8fFxuICAgIC8vIElFIGZpeCBmb3IgY29tcGxleCBxdWVyaWVzIG9uIGVtcHR5IG5vZGVzOiBodHRwOi8vanNmaWRkbGUubmV0L3NweWRlci9mdjlwdHI1TC9cbiAgICAoZG9tIGFzIEVsZW1lbnQgfCBEb2N1bWVudCB8IERvY3VtZW50RnJhZ21lbnQpLmNoaWxkRWxlbWVudENvdW50ID09PSAwO1xuXG5jb25zdCBhbGwgPSA8VCBleHRlbmRzIEVsZW1lbnQgPSBFbGVtZW50PiAoc2VsZWN0b3I6IHN0cmluZywgc2NvcGU/OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBTdWdhckVsZW1lbnQ8VD5bXSA9PiB7XG4gIGNvbnN0IGJhc2UgPSBzY29wZSA9PT0gdW5kZWZpbmVkID8gZG9jdW1lbnQgOiBzY29wZS5kb207XG4gIHJldHVybiBieXBhc3NTZWxlY3RvcihiYXNlKSA/IFtdIDogQXJyLm1hcCgoYmFzZSBhcyBFbGVtZW50IHwgRG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGw8VD4oc2VsZWN0b3IpLCBTdWdhckVsZW1lbnQuZnJvbURvbSk7XG59O1xuXG5jb25zdCBvbmUgPSA8VCBleHRlbmRzIEVsZW1lbnQgPSBFbGVtZW50PiAoc2VsZWN0b3I6IHN0cmluZywgc2NvcGU/OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBPcHRpb25hbDxTdWdhckVsZW1lbnQ8VD4+ID0+IHtcbiAgY29uc3QgYmFzZSA9IHNjb3BlID09PSB1bmRlZmluZWQgPyBkb2N1bWVudCA6IHNjb3BlLmRvbTtcbiAgcmV0dXJuIGJ5cGFzc1NlbGVjdG9yKGJhc2UpID8gT3B0aW9uYWwubm9uZTxTdWdhckVsZW1lbnQ8VD4+KCkgOiBPcHRpb25hbC5mcm9tKChiYXNlIGFzIEVsZW1lbnQgfCBEb2N1bWVudCkucXVlcnlTZWxlY3RvcjxUPihzZWxlY3RvcikpLm1hcChTdWdhckVsZW1lbnQuZnJvbURvbSk7XG59O1xuXG5leHBvcnQge1xuICBhbGwsXG4gIGlzLFxuICBvbmVcbn07XG4iLCJpbXBvcnQgeyBBcnIsIEZ1biwgT3B0aW9uYWwsIFR5cGUgfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5pbXBvcnQgKiBhcyBSZWN1cnNlIGZyb20gJy4uLy4uL2FsaWVuL1JlY3Vyc2UnO1xuaW1wb3J0ICogYXMgQ29tcGFyZSBmcm9tICcuLi9kb20vQ29tcGFyZSc7XG5pbXBvcnQgeyBTdWdhckVsZW1lbnQgfSBmcm9tICcuLi9ub2RlL1N1Z2FyRWxlbWVudCc7XG5pbXBvcnQgKiBhcyBTdWdhck5vZGUgZnJvbSAnLi4vbm9kZS9TdWdhck5vZGUnO1xuXG4vKipcbiAqIFRoZSBkb2N1bWVudCBhc3NvY2lhdGVkIHdpdGggdGhlIGN1cnJlbnQgZWxlbWVudFxuICogTk9URTogdGhpcyB3aWxsIHRocm93IGlmIHRoZSBvd25lciBpcyBudWxsLlxuICovXG5jb25zdCBvd25lciA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBTdWdhckVsZW1lbnQ8RG9jdW1lbnQ+ID0+XG4gIFN1Z2FyRWxlbWVudC5mcm9tRG9tKGVsZW1lbnQuZG9tLm93bmVyRG9jdW1lbnQgYXMgRG9jdW1lbnQpO1xuXG4vKipcbiAqIElmIHRoZSBlbGVtZW50IGlzIGEgZG9jdW1lbnQsIHJldHVybiBpdC4gT3RoZXJ3aXNlLCByZXR1cm4gaXRzIG93bmVyRG9jdW1lbnQuXG4gKiBAcGFyYW0gZG9zXG4gKi9cbmNvbnN0IGRvY3VtZW50T3JPd25lciA9IChkb3M6IFN1Z2FyRWxlbWVudDxOb2RlPik6IFN1Z2FyRWxlbWVudDxEb2N1bWVudD4gPT5cbiAgU3VnYXJOb2RlLmlzRG9jdW1lbnQoZG9zKSA/IGRvcyA6IG93bmVyKGRvcyk7XG5cbmNvbnN0IGRvY3VtZW50RWxlbWVudCA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBTdWdhckVsZW1lbnQ8SFRNTEVsZW1lbnQ+ID0+XG4gIFN1Z2FyRWxlbWVudC5mcm9tRG9tKGRvY3VtZW50T3JPd25lcihlbGVtZW50KS5kb20uZG9jdW1lbnRFbGVtZW50KTtcblxuLyoqXG4gKiBUaGUgd2luZG93IGVsZW1lbnQgYXNzb2NpYXRlZCB3aXRoIHRoZSBlbGVtZW50XG4gKiBOT1RFOiB0aGlzIHdpbGwgdGhyb3cgaWYgdGhlIGRlZmF1bHRWaWV3IGlzIG51bGwuXG4gKi9cbmNvbnN0IGRlZmF1bHRWaWV3ID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPik6IFN1Z2FyRWxlbWVudDxXaW5kb3c+ID0+XG4gIFN1Z2FyRWxlbWVudC5mcm9tRG9tKGRvY3VtZW50T3JPd25lcihlbGVtZW50KS5kb20uZGVmYXVsdFZpZXcgYXMgV2luZG93KTtcblxuY29uc3QgcGFyZW50ID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPik6IE9wdGlvbmFsPFN1Z2FyRWxlbWVudDxOb2RlICYgUGFyZW50Tm9kZT4+ID0+XG4gIE9wdGlvbmFsLmZyb20oZWxlbWVudC5kb20ucGFyZW50Tm9kZSkubWFwKFN1Z2FyRWxlbWVudC5mcm9tRG9tKTtcblxuLy8gQ2FzdCBkb3duIHRvIGp1c3QgYmUgU3VnYXJFbGVtZW50PE5vZGU+XG5jb25zdCBwYXJlbnROb2RlID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPik6IE9wdGlvbmFsPFN1Z2FyRWxlbWVudDxOb2RlPj4gPT5cbiAgcGFyZW50KGVsZW1lbnQpIGFzIGFueTtcblxuY29uc3QgcGFyZW50RWxlbWVudCA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBPcHRpb25hbDxTdWdhckVsZW1lbnQ8SFRNTEVsZW1lbnQ+PiA9PlxuICBPcHRpb25hbC5mcm9tKGVsZW1lbnQuZG9tLnBhcmVudEVsZW1lbnQpLm1hcChTdWdhckVsZW1lbnQuZnJvbURvbSk7XG5cbmNvbnN0IGZpbmRJbmRleCA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBPcHRpb25hbDxudW1iZXI+ID0+XG4gIHBhcmVudChlbGVtZW50KS5iaW5kKChwKSA9PiB7XG4gICAgLy8gVE9ETzogUmVmYWN0b3Igb3V0IGNoaWxkcmVuIHNvIHdlIGNhbiBhdm9pZCB0aGUgY29uc3RhbnQgdW53cmFwcGluZ1xuICAgIGNvbnN0IGtpbiA9IGNoaWxkcmVuKHApO1xuICAgIHJldHVybiBBcnIuZmluZEluZGV4KGtpbiwgKGVsZW0pID0+IENvbXBhcmUuZXEoZWxlbWVudCwgZWxlbSkpO1xuICB9KTtcblxuY29uc3QgcGFyZW50cyA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4sIGlzUm9vdD86IChlOiBTdWdhckVsZW1lbnQ8Tm9kZT4pID0+IGJvb2xlYW4pOiBTdWdhckVsZW1lbnQ8Tm9kZT5bXSA9PiB7XG4gIGNvbnN0IHN0b3AgPSBUeXBlLmlzRnVuY3Rpb24oaXNSb290KSA/IGlzUm9vdCA6IEZ1bi5uZXZlcjtcblxuICAvLyBUaGlzIGlzIHVzZWQgYSAqbG90KiBzbyBpdCBuZWVkcyB0byBiZSBwZXJmb3JtYW50LCBub3QgcmVjdXJzaXZlXG4gIGxldCBkb206IE5vZGUgPSBlbGVtZW50LmRvbTtcbiAgY29uc3QgcmV0OiBTdWdhckVsZW1lbnQ8Tm9kZT5bXSA9IFtdO1xuXG4gIHdoaWxlIChkb20ucGFyZW50Tm9kZSAhPT0gbnVsbCAmJiBkb20ucGFyZW50Tm9kZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgcmF3UGFyZW50ID0gZG9tLnBhcmVudE5vZGU7XG4gICAgY29uc3QgcCA9IFN1Z2FyRWxlbWVudC5mcm9tRG9tKHJhd1BhcmVudCk7XG4gICAgcmV0LnB1c2gocCk7XG5cbiAgICBpZiAoc3RvcChwKSA9PT0gdHJ1ZSkge1xuICAgICAgYnJlYWs7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvbSA9IHJhd1BhcmVudDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJldDtcbn07XG5cbmNvbnN0IHNpYmxpbmdzID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPik6IFN1Z2FyRWxlbWVudDxOb2RlPltdID0+IHtcbiAgLy8gVE9ETzogUmVmYWN0b3Igb3V0IGNoaWxkcmVuIHNvIHdlIGNhbiBqdXN0IG5vdCBhZGQgc2VsZiBpbnN0ZWFkIG9mIGZpbHRlcmluZyBhZnRlcndhcmRzXG4gIGNvbnN0IGZpbHRlclNlbGYgPSA8RT4gKGVsZW1lbnRzOiBTdWdhckVsZW1lbnQ8RT5bXSkgPT4gQXJyLmZpbHRlcihlbGVtZW50cywgKHgpID0+ICFDb21wYXJlLmVxKGVsZW1lbnQsIHgpKTtcblxuICByZXR1cm4gcGFyZW50KGVsZW1lbnQpLm1hcChjaGlsZHJlbikubWFwKGZpbHRlclNlbGYpLmdldE9yKFtdKTtcbn07XG5cbmNvbnN0IG9mZnNldFBhcmVudCA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8SFRNTEVsZW1lbnQ+KTogT3B0aW9uYWw8U3VnYXJFbGVtZW50PEhUTUxFbGVtZW50Pj4gPT5cbiAgT3B0aW9uYWwuZnJvbShlbGVtZW50LmRvbS5vZmZzZXRQYXJlbnQgYXMgSFRNTEVsZW1lbnQpLm1hcChTdWdhckVsZW1lbnQuZnJvbURvbSk7XG5cbmNvbnN0IHByZXZTaWJsaW5nID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPik6IE9wdGlvbmFsPFN1Z2FyRWxlbWVudDxOb2RlICYgQ2hpbGROb2RlPj4gPT5cbiAgT3B0aW9uYWwuZnJvbShlbGVtZW50LmRvbS5wcmV2aW91c1NpYmxpbmcpLm1hcChTdWdhckVsZW1lbnQuZnJvbURvbSk7XG5cbmNvbnN0IG5leHRTaWJsaW5nID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPik6IE9wdGlvbmFsPFN1Z2FyRWxlbWVudDxOb2RlICYgQ2hpbGROb2RlPj4gPT5cbiAgT3B0aW9uYWwuZnJvbShlbGVtZW50LmRvbS5uZXh0U2libGluZykubWFwKFN1Z2FyRWxlbWVudC5mcm9tRG9tKTtcblxuLy8gVGhpcyBvbmUgbmVlZHMgdG8gYmUgcmV2ZXJzZWQsIHNvIHRoZXkncmUgc3RpbGwgaW4gRE9NIG9yZGVyXG5jb25zdCBwcmV2U2libGluZ3MgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KTogU3VnYXJFbGVtZW50PE5vZGUgJiBDaGlsZE5vZGU+W10gPT5cbiAgQXJyLnJldmVyc2UoUmVjdXJzZS50b0FycmF5KGVsZW1lbnQsIHByZXZTaWJsaW5nKSk7XG5cbmNvbnN0IG5leHRTaWJsaW5ncyA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBTdWdhckVsZW1lbnQ8Tm9kZSAmIENoaWxkTm9kZT5bXSA9PlxuICBSZWN1cnNlLnRvQXJyYXkoZWxlbWVudCwgbmV4dFNpYmxpbmcpO1xuXG5jb25zdCBjaGlsZHJlbiA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBTdWdhckVsZW1lbnQ8Tm9kZSAmIENoaWxkTm9kZT5bXSA9PlxuICBBcnIubWFwKGVsZW1lbnQuZG9tLmNoaWxkTm9kZXMsIFN1Z2FyRWxlbWVudC5mcm9tRG9tKTtcblxuY29uc3QgY2hpbGQgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+LCBpbmRleDogbnVtYmVyKTogT3B0aW9uYWw8U3VnYXJFbGVtZW50PE5vZGUgJiBDaGlsZE5vZGU+PiA9PiB7XG4gIGNvbnN0IGNzID0gZWxlbWVudC5kb20uY2hpbGROb2RlcztcbiAgcmV0dXJuIE9wdGlvbmFsLmZyb20oY3NbaW5kZXhdKS5tYXAoU3VnYXJFbGVtZW50LmZyb21Eb20pO1xufTtcblxuY29uc3QgZmlyc3RDaGlsZCA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBPcHRpb25hbDxTdWdhckVsZW1lbnQ8Tm9kZSAmIENoaWxkTm9kZT4+ID0+XG4gIGNoaWxkKGVsZW1lbnQsIDApO1xuXG5jb25zdCBsYXN0Q2hpbGQgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KTogT3B0aW9uYWw8U3VnYXJFbGVtZW50PE5vZGUgJiBDaGlsZE5vZGU+PiA9PlxuICBjaGlsZChlbGVtZW50LCBlbGVtZW50LmRvbS5jaGlsZE5vZGVzLmxlbmd0aCAtIDEpO1xuXG5jb25zdCBjaGlsZE5vZGVzQ291bnQgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KTogbnVtYmVyID0+XG4gIGVsZW1lbnQuZG9tLmNoaWxkTm9kZXMubGVuZ3RoO1xuXG5jb25zdCBoYXNDaGlsZE5vZGVzID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPik6IGJvb2xlYW4gPT5cbiAgZWxlbWVudC5kb20uaGFzQ2hpbGROb2RlcygpO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVsZW1lbnRBbmRPZmZzZXQ8RT4ge1xuICByZWFkb25seSBlbGVtZW50OiBTdWdhckVsZW1lbnQ8RT47XG4gIHJlYWRvbmx5IG9mZnNldDogbnVtYmVyO1xufVxuXG5jb25zdCBzcG90ID0gPEU+KGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxFPiwgb2Zmc2V0OiBudW1iZXIpOiBFbGVtZW50QW5kT2Zmc2V0PEU+ID0+ICh7XG4gIGVsZW1lbnQsXG4gIG9mZnNldFxufSk7XG5cbmNvbnN0IGxlYWYgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+LCBvZmZzZXQ6IG51bWJlcik6IEVsZW1lbnRBbmRPZmZzZXQ8Tm9kZT4gPT4ge1xuICBjb25zdCBjcyA9IGNoaWxkcmVuKGVsZW1lbnQpO1xuICByZXR1cm4gY3MubGVuZ3RoID4gMCAmJiBvZmZzZXQgPCBjcy5sZW5ndGggPyBzcG90KGNzW29mZnNldF0sIDApIDogc3BvdChlbGVtZW50LCBvZmZzZXQpO1xufTtcblxuZXhwb3J0IHtcbiAgb3duZXIsXG4gIGRvY3VtZW50T3JPd25lcixcbiAgZGVmYXVsdFZpZXcsXG4gIGRvY3VtZW50RWxlbWVudCxcbiAgcGFyZW50LFxuICBwYXJlbnROb2RlLFxuICBwYXJlbnRFbGVtZW50LFxuICBmaW5kSW5kZXgsXG4gIHBhcmVudHMsXG4gIHNpYmxpbmdzLFxuICBwcmV2U2libGluZyxcbiAgb2Zmc2V0UGFyZW50LFxuICBwcmV2U2libGluZ3MsXG4gIG5leHRTaWJsaW5nLFxuICBuZXh0U2libGluZ3MsXG4gIGNoaWxkcmVuLFxuICBjaGlsZCxcbiAgZmlyc3RDaGlsZCxcbiAgbGFzdENoaWxkLFxuICBjaGlsZE5vZGVzQ291bnQsXG4gIGhhc0NoaWxkTm9kZXMsXG4gIGxlYWZcbn07XG4iLCJpbXBvcnQgeyBPcHRpb25hbCB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmltcG9ydCB0eXBlIHsgU3VnYXJFbGVtZW50IH0gZnJvbSAnLi4vYXBpL25vZGUvU3VnYXJFbGVtZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBOb2RlVmFsdWUge1xuICByZWFkb25seSBnZXQ6IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pID0+IHN0cmluZztcbiAgcmVhZG9ubHkgZ2V0T3B0aW9uOiAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KSA9PiBPcHRpb25hbDxzdHJpbmc+O1xuICByZWFkb25seSBzZXQ6IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4sIHZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBOb2RlVmFsdWUgPSAoaXM6IChlOiBTdWdhckVsZW1lbnQ8Tm9kZT4pID0+IGJvb2xlYW4sIG5hbWU6IHN0cmluZyk6IE5vZGVWYWx1ZSA9PiB7XG4gIGNvbnN0IGdldCA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBzdHJpbmcgPT4ge1xuICAgIGlmICghaXMoZWxlbWVudCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2FuIG9ubHkgZ2V0ICcgKyBuYW1lICsgJyB2YWx1ZSBvZiBhICcgKyBuYW1lICsgJyBub2RlJyk7XG4gICAgfVxuICAgIHJldHVybiBnZXRPcHRpb24oZWxlbWVudCkuZ2V0T3IoJycpO1xuICB9O1xuXG4gIGNvbnN0IGdldE9wdGlvbiA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBPcHRpb25hbDxzdHJpbmc+ID0+XG4gICAgaXMoZWxlbWVudCkgPyBPcHRpb25hbC5mcm9tKGVsZW1lbnQuZG9tLm5vZGVWYWx1ZSkgOiBPcHRpb25hbC5ub25lPHN0cmluZz4oKTtcblxuICBjb25zdCBzZXQgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+LCB2YWx1ZTogc3RyaW5nKTogdm9pZCA9PiB7XG4gICAgaWYgKCFpcyhlbGVtZW50KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW4gb25seSBzZXQgcmF3ICcgKyBuYW1lICsgJyB2YWx1ZSBvZiBhICcgKyBuYW1lICsgJyBub2RlJyk7XG4gICAgfVxuICAgIGVsZW1lbnQuZG9tLm5vZGVWYWx1ZSA9IHZhbHVlO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0LFxuICAgIGdldE9wdGlvbixcbiAgICBzZXRcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBDZWxsIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0IFBsdWdpbk1hbmFnZXIgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9QbHVnaW5NYW5hZ2VyJztcblxuaW1wb3J0ICogYXMgQXBpIGZyb20gJy4vYXBpL0FwaSc7XG5pbXBvcnQgKiBhcyBDb21tYW5kcyBmcm9tICcuL2FwaS9Db21tYW5kcyc7XG5pbXBvcnQgdHlwZSB7IFNlYXJjaFN0YXRlIH0gZnJvbSAnLi9jb3JlL0FjdGlvbnMnO1xuaW1wb3J0ICogYXMgQnV0dG9ucyBmcm9tICcuL3VpL0J1dHRvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCAoKTogdm9pZCA9PiB7XG4gIFBsdWdpbk1hbmFnZXIuYWRkKCdzZWFyY2hyZXBsYWNlJywgKGVkaXRvcikgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRTZWFyY2hTdGF0ZSA9IENlbGw8U2VhcmNoU3RhdGU+KHtcbiAgICAgIGluZGV4OiAtMSxcbiAgICAgIGNvdW50OiAwLFxuICAgICAgdGV4dDogJycsXG4gICAgICBtYXRjaENhc2U6IGZhbHNlLFxuICAgICAgd2hvbGVXb3JkOiBmYWxzZSxcbiAgICAgIGluU2VsZWN0aW9uOiBmYWxzZVxuICAgIH0pO1xuXG4gICAgQ29tbWFuZHMucmVnaXN0ZXIoZWRpdG9yLCBjdXJyZW50U2VhcmNoU3RhdGUpO1xuICAgIEJ1dHRvbnMucmVnaXN0ZXIoZWRpdG9yLCBjdXJyZW50U2VhcmNoU3RhdGUpO1xuXG4gICAgcmV0dXJuIEFwaS5nZXQoZWRpdG9yLCBjdXJyZW50U2VhcmNoU3RhdGUpO1xuICB9KTtcbn07XG4iLCJpbXBvcnQgdHlwZSB7IENlbGwgfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5pbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuXG5pbXBvcnQgKiBhcyBBY3Rpb25zIGZyb20gJy4uL2NvcmUvQWN0aW9ucyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBpIHtcbiAgcmVhZG9ubHkgZG9uZTogKGtlZXBFZGl0b3JTZWxlY3Rpb24/OiBib29sZWFuKSA9PiBSYW5nZSB8IHVuZGVmaW5lZDtcbiAgcmVhZG9ubHkgZmluZDogKHRleHQ6IHN0cmluZywgbWF0Y2hDYXNlOiBib29sZWFuLCB3aG9sZVdvcmQ6IGJvb2xlYW4sIGluU2VsZWN0aW9uPzogYm9vbGVhbikgPT4gbnVtYmVyO1xuICByZWFkb25seSBuZXh0OiAoKSA9PiB2b2lkO1xuICByZWFkb25seSBwcmV2OiAoKSA9PiB2b2lkO1xuICByZWFkb25seSByZXBsYWNlOiAodGV4dDogc3RyaW5nLCBmb3J3YXJkPzogYm9vbGVhbiwgYWxsPzogYm9vbGVhbikgPT4gYm9vbGVhbjtcbn1cblxuY29uc3QgZ2V0ID0gKGVkaXRvcjogRWRpdG9yLCBjdXJyZW50U3RhdGU6IENlbGw8QWN0aW9ucy5TZWFyY2hTdGF0ZT4pOiBBcGkgPT4ge1xuICBjb25zdCBkb25lID0gKGtlZXBFZGl0b3JTZWxlY3Rpb24/OiBib29sZWFuKSA9PiB7XG4gICAgcmV0dXJuIEFjdGlvbnMuZG9uZShlZGl0b3IsIGN1cnJlbnRTdGF0ZSwga2VlcEVkaXRvclNlbGVjdGlvbik7XG4gIH07XG5cbiAgY29uc3QgZmluZCA9ICh0ZXh0OiBzdHJpbmcsIG1hdGNoQ2FzZTogYm9vbGVhbiwgd2hvbGVXb3JkOiBib29sZWFuLCBpblNlbGVjdGlvbjogYm9vbGVhbiA9IGZhbHNlKSA9PiB7XG4gICAgcmV0dXJuIEFjdGlvbnMuZmluZChlZGl0b3IsIGN1cnJlbnRTdGF0ZSwgdGV4dCwgbWF0Y2hDYXNlLCB3aG9sZVdvcmQsIGluU2VsZWN0aW9uKTtcbiAgfTtcblxuICBjb25zdCBuZXh0ID0gKCkgPT4ge1xuICAgIHJldHVybiBBY3Rpb25zLm5leHQoZWRpdG9yLCBjdXJyZW50U3RhdGUpO1xuICB9O1xuXG4gIGNvbnN0IHByZXYgPSAoKSA9PiB7XG4gICAgcmV0dXJuIEFjdGlvbnMucHJldihlZGl0b3IsIGN1cnJlbnRTdGF0ZSk7XG4gIH07XG5cbiAgY29uc3QgcmVwbGFjZSA9ICh0ZXh0OiBzdHJpbmcsIGZvcndhcmQ/OiBib29sZWFuLCBhbGw/OiBib29sZWFuKSA9PiB7XG4gICAgcmV0dXJuIEFjdGlvbnMucmVwbGFjZShlZGl0b3IsIGN1cnJlbnRTdGF0ZSwgdGV4dCwgZm9yd2FyZCwgYWxsKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGRvbmUsXG4gICAgZmluZCxcbiAgICBuZXh0LFxuICAgIHByZXYsXG4gICAgcmVwbGFjZVxuICB9O1xufTtcblxuZXhwb3J0IHtcbiAgZ2V0XG59O1xuIiwiaW1wb3J0IHR5cGUgeyBDZWxsIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0IHR5cGUgRWRpdG9yIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvRWRpdG9yJztcblxuaW1wb3J0IHR5cGUgeyBTZWFyY2hTdGF0ZSB9IGZyb20gJy4uL2NvcmUvQWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBEaWFsb2cgZnJvbSAnLi4vdWkvRGlhbG9nJztcblxuY29uc3QgcmVnaXN0ZXIgPSAoZWRpdG9yOiBFZGl0b3IsIGN1cnJlbnRTZWFyY2hTdGF0ZTogQ2VsbDxTZWFyY2hTdGF0ZT4pOiB2b2lkID0+IHtcbiAgZWRpdG9yLmFkZENvbW1hbmQoJ1NlYXJjaFJlcGxhY2UnLCAoKSA9PiB7XG4gICAgRGlhbG9nLm9wZW4oZWRpdG9yLCBjdXJyZW50U2VhcmNoU3RhdGUpO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7XG4gIHJlZ2lzdGVyXG59O1xuIiwiaW1wb3J0IHR5cGUgeyBDZWxsIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcbmltcG9ydCB7IFBhdHRlcm4gYXMgUG9sYXJpc1BhdHRlcm4gfSBmcm9tICdAZXBob3gvcG9sYXJpcyc7XG5cbmltcG9ydCB0eXBlIERPTVV0aWxzIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvZG9tL0RPTVV0aWxzJztcbmltcG9ydCB0eXBlIEVkaXRvciBmcm9tICd0aW55bWNlL2NvcmUvYXBpL0VkaXRvcic7XG5pbXBvcnQgRW52IGZyb20gJ3RpbnltY2UvY29yZS9hcGkvRW52JztcbmltcG9ydCBUb29scyBmcm9tICd0aW55bWNlL2NvcmUvYXBpL3V0aWwvVG9vbHMnO1xuXG5pbXBvcnQgKiBhcyBGaW5kTWFyayBmcm9tICcuL0ZpbmRNYXJrJztcbmltcG9ydCB0eXBlIHsgUGF0dGVybiB9IGZyb20gJy4vVHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlYXJjaFN0YXRlIHtcbiAgcmVhZG9ubHkgaW5kZXg6IG51bWJlcjtcbiAgcmVhZG9ubHkgY291bnQ6IG51bWJlcjtcbiAgcmVhZG9ubHkgdGV4dDogc3RyaW5nO1xuICByZWFkb25seSBtYXRjaENhc2U6IGJvb2xlYW47XG4gIHJlYWRvbmx5IHdob2xlV29yZDogYm9vbGVhbjtcbiAgcmVhZG9ubHkgaW5TZWxlY3Rpb246IGJvb2xlYW47XG59XG5cbmNvbnN0IGdldEVsbUluZGV4ID0gKGVsbTogRWxlbWVudCk6IHN0cmluZyB8IG51bGwgPT4ge1xuICByZXR1cm4gZWxtLmdldEF0dHJpYnV0ZSgnZGF0YS1tY2UtaW5kZXgnKTtcbn07XG5cbmNvbnN0IG1hcmtBbGxNYXRjaGVzID0gKGVkaXRvcjogRWRpdG9yLCBjdXJyZW50U2VhcmNoU3RhdGU6IENlbGw8U2VhcmNoU3RhdGU+LCBwYXR0ZXJuOiBQYXR0ZXJuLCBpblNlbGVjdGlvbjogYm9vbGVhbik6IG51bWJlciA9PiB7XG4gIGNvbnN0IG1hcmtlciA9IGVkaXRvci5kb20uY3JlYXRlKCdzcGFuJywge1xuICAgICdkYXRhLW1jZS1ib2d1cyc6IDFcbiAgfSk7XG5cbiAgbWFya2VyLmNsYXNzTmFtZSA9ICdtY2UtbWF0Y2gtbWFya2VyJztcbiAgY29uc3Qgbm9kZSA9IGVkaXRvci5nZXRCb2R5KCk7XG5cbiAgZG9uZShlZGl0b3IsIGN1cnJlbnRTZWFyY2hTdGF0ZSwgZmFsc2UpO1xuXG4gIGlmIChpblNlbGVjdGlvbikge1xuICAgIHJldHVybiBGaW5kTWFyay5maW5kQW5kTWFya0luU2VsZWN0aW9uKGVkaXRvci5kb20sIHBhdHRlcm4sIGVkaXRvci5zZWxlY3Rpb24sIG1hcmtlcik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIEZpbmRNYXJrLmZpbmRBbmRNYXJrKGVkaXRvci5kb20sIHBhdHRlcm4sIG5vZGUsIG1hcmtlcik7XG4gIH1cbn07XG5cbmNvbnN0IHVud3JhcCA9IChub2RlOiBOb2RlKTogdm9pZCA9PiB7XG4gIGNvbnN0IHBhcmVudE5vZGUgPSBub2RlLnBhcmVudE5vZGUgYXMgTm9kZTtcblxuICBpZiAobm9kZS5maXJzdENoaWxkKSB7XG4gICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobm9kZS5maXJzdENoaWxkLCBub2RlKTtcbiAgfVxuXG4gIG5vZGUucGFyZW50Tm9kZT8ucmVtb3ZlQ2hpbGQobm9kZSk7XG59O1xuXG5jb25zdCBmaW5kU3BhbnNCeUluZGV4ID0gKGVkaXRvcjogRWRpdG9yLCBpbmRleDogbnVtYmVyKTogSFRNTFNwYW5FbGVtZW50W10gPT4ge1xuICBjb25zdCBzcGFuczogSFRNTFNwYW5FbGVtZW50W10gPSBbXTtcblxuICBjb25zdCBub2RlcyA9IFRvb2xzLnRvQXJyYXkoZWRpdG9yLmdldEJvZHkoKS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc3BhbicpKTtcbiAgaWYgKG5vZGVzLmxlbmd0aCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IG5vZGVJbmRleCA9IGdldEVsbUluZGV4KG5vZGVzW2ldKTtcblxuICAgICAgaWYgKG5vZGVJbmRleCA9PT0gbnVsbCB8fCAhbm9kZUluZGV4Lmxlbmd0aCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5vZGVJbmRleCA9PT0gaW5kZXgudG9TdHJpbmcoKSkge1xuICAgICAgICBzcGFucy5wdXNoKG5vZGVzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3BhbnM7XG59O1xuXG5jb25zdCBtb3ZlU2VsZWN0aW9uID0gKGVkaXRvcjogRWRpdG9yLCBjdXJyZW50U2VhcmNoU3RhdGU6IENlbGw8U2VhcmNoU3RhdGU+LCBmb3J3YXJkOiBib29sZWFuKTogbnVtYmVyID0+IHtcbiAgY29uc3Qgc2VhcmNoU3RhdGUgPSBjdXJyZW50U2VhcmNoU3RhdGUuZ2V0KCk7XG4gIGxldCB0ZXN0SW5kZXggPSBzZWFyY2hTdGF0ZS5pbmRleDtcbiAgY29uc3QgZG9tID0gZWRpdG9yLmRvbTtcblxuICBpZiAoZm9yd2FyZCkge1xuICAgIGlmICh0ZXN0SW5kZXggKyAxID09PSBzZWFyY2hTdGF0ZS5jb3VudCkge1xuICAgICAgdGVzdEluZGV4ID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGVzdEluZGV4Kys7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmICh0ZXN0SW5kZXggLSAxID09PSAtMSkge1xuICAgICAgdGVzdEluZGV4ID0gc2VhcmNoU3RhdGUuY291bnQgLSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICB0ZXN0SW5kZXgtLTtcbiAgICB9XG4gIH1cblxuICBkb20ucmVtb3ZlQ2xhc3MoZmluZFNwYW5zQnlJbmRleChlZGl0b3IsIHNlYXJjaFN0YXRlLmluZGV4KSwgJ21jZS1tYXRjaC1tYXJrZXItc2VsZWN0ZWQnKTtcblxuICBjb25zdCBzcGFucyA9IGZpbmRTcGFuc0J5SW5kZXgoZWRpdG9yLCB0ZXN0SW5kZXgpO1xuICBpZiAoc3BhbnMubGVuZ3RoKSB7XG4gICAgZG9tLmFkZENsYXNzKGZpbmRTcGFuc0J5SW5kZXgoZWRpdG9yLCB0ZXN0SW5kZXgpLCAnbWNlLW1hdGNoLW1hcmtlci1zZWxlY3RlZCcpO1xuICAgIGVkaXRvci5zZWxlY3Rpb24uc2Nyb2xsSW50b1ZpZXcoc3BhbnNbMF0pO1xuICAgIHJldHVybiB0ZXN0SW5kZXg7XG4gIH1cblxuICByZXR1cm4gLTE7XG59O1xuXG5jb25zdCByZW1vdmVOb2RlID0gKGRvbTogRE9NVXRpbHMsIG5vZGU6IE5vZGUpOiB2b2lkID0+IHtcbiAgY29uc3QgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlO1xuXG4gIGRvbS5yZW1vdmUobm9kZSk7XG5cbiAgaWYgKHBhcmVudCAmJiBkb20uaXNFbXB0eShwYXJlbnQpKSB7XG4gICAgZG9tLnJlbW92ZShwYXJlbnQpO1xuICB9XG59O1xuXG5jb25zdCBlc2NhcGVTZWFyY2hUZXh0ID0gKHRleHQ6IHN0cmluZywgd2hvbGVXb3JkOiBib29sZWFuKTogc3RyaW5nID0+IHtcbiAgY29uc3QgZXNjYXBlZFRleHQgPSB0ZXh0LnJlcGxhY2UoL1tcXC1cXFtcXF1cXC9cXHtcXH1cXChcXClcXCpcXCtcXD9cXC5cXFxcXFxeXFwkXFx8XS9nLCAnXFxcXCQmJykucmVwbGFjZSgvXFxzL2csICdbXlxcXFxTXFxcXHJcXFxcblxcXFx1RkVGRl0nKTtcbiAgY29uc3Qgd29yZFJlZ2V4ID0gJygnICsgZXNjYXBlZFRleHQgKyAnKSc7XG4gIHJldHVybiB3aG9sZVdvcmQgPyBgKD86XnxcXFxcc3wke1BvbGFyaXNQYXR0ZXJuLnB1bmN0dWF0aW9uKCl9KWAgKyB3b3JkUmVnZXggKyBgKD89JHxcXFxcc3wke1BvbGFyaXNQYXR0ZXJuLnB1bmN0dWF0aW9uKCl9KWAgOiB3b3JkUmVnZXg7XG59O1xuXG5jb25zdCBmaW5kID0gKGVkaXRvcjogRWRpdG9yLCBjdXJyZW50U2VhcmNoU3RhdGU6IENlbGw8U2VhcmNoU3RhdGU+LCB0ZXh0OiBzdHJpbmcsIG1hdGNoQ2FzZTogYm9vbGVhbiwgd2hvbGVXb3JkOiBib29sZWFuLCBpblNlbGVjdGlvbjogYm9vbGVhbik6IG51bWJlciA9PiB7XG4gIGNvbnN0IHNlbGVjdGlvbiA9IGVkaXRvci5zZWxlY3Rpb247XG4gIGNvbnN0IGVzY2FwZWRUZXh0ID0gZXNjYXBlU2VhcmNoVGV4dCh0ZXh0LCB3aG9sZVdvcmQpO1xuICBjb25zdCBpc0ZvcndhcmRTZWxlY3Rpb24gPSBzZWxlY3Rpb24uaXNGb3J3YXJkKCk7XG5cbiAgY29uc3QgcGF0dGVybiA9IHtcbiAgICByZWdleDogbmV3IFJlZ0V4cChlc2NhcGVkVGV4dCwgbWF0Y2hDYXNlID8gJ2cnIDogJ2dpJyksXG4gICAgbWF0Y2hJbmRleDogMVxuICB9O1xuICBjb25zdCBjb3VudCA9IG1hcmtBbGxNYXRjaGVzKGVkaXRvciwgY3VycmVudFNlYXJjaFN0YXRlLCBwYXR0ZXJuLCBpblNlbGVjdGlvbik7XG5cbiAgLy8gU2FmYXJpIGhhcyBhIGJ1ZyB3aGVyZWJ5IHNwbGl0dGluZyB0ZXh0IG5vZGVzIGJyZWFrcyB0aGUgc2VsZWN0aW9uICh3aGljaCBpcyBkb25lIHdoZW4gbWFya2luZyBtYXRjaGVzKS5cbiAgLy8gQXMgc3VjaCB3ZSBuZWVkIHRvIG1hbnVhbGx5IHJlc2V0IGl0IGFmdGVyIGRvaW5nIGEgZmluZCBhY3Rpb24uIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjMwNTk0XG4gIGlmIChFbnYuYnJvd3Nlci5pc1NhZmFyaSgpKSB7XG4gICAgc2VsZWN0aW9uLnNldFJuZyhzZWxlY3Rpb24uZ2V0Um5nKCksIGlzRm9yd2FyZFNlbGVjdGlvbik7XG4gIH1cblxuICBpZiAoY291bnQpIHtcbiAgICBjb25zdCBuZXdJbmRleCA9IG1vdmVTZWxlY3Rpb24oZWRpdG9yLCBjdXJyZW50U2VhcmNoU3RhdGUsIHRydWUpO1xuICAgIGN1cnJlbnRTZWFyY2hTdGF0ZS5zZXQoe1xuICAgICAgaW5kZXg6IG5ld0luZGV4LFxuICAgICAgY291bnQsXG4gICAgICB0ZXh0LFxuICAgICAgbWF0Y2hDYXNlLFxuICAgICAgd2hvbGVXb3JkLFxuICAgICAgaW5TZWxlY3Rpb25cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBjb3VudDtcbn07XG5cbmNvbnN0IG5leHQgPSAoZWRpdG9yOiBFZGl0b3IsIGN1cnJlbnRTZWFyY2hTdGF0ZTogQ2VsbDxTZWFyY2hTdGF0ZT4pOiB2b2lkID0+IHtcbiAgY29uc3QgaW5kZXggPSBtb3ZlU2VsZWN0aW9uKGVkaXRvciwgY3VycmVudFNlYXJjaFN0YXRlLCB0cnVlKTtcbiAgY3VycmVudFNlYXJjaFN0YXRlLnNldCh7IC4uLmN1cnJlbnRTZWFyY2hTdGF0ZS5nZXQoKSwgaW5kZXggfSk7XG59O1xuXG5jb25zdCBwcmV2ID0gKGVkaXRvcjogRWRpdG9yLCBjdXJyZW50U2VhcmNoU3RhdGU6IENlbGw8U2VhcmNoU3RhdGU+KTogdm9pZCA9PiB7XG4gIGNvbnN0IGluZGV4ID0gbW92ZVNlbGVjdGlvbihlZGl0b3IsIGN1cnJlbnRTZWFyY2hTdGF0ZSwgZmFsc2UpO1xuICBjdXJyZW50U2VhcmNoU3RhdGUuc2V0KHsgLi4uY3VycmVudFNlYXJjaFN0YXRlLmdldCgpLCBpbmRleCB9KTtcbn07XG5cbmNvbnN0IGlzTWF0Y2hTcGFuID0gKG5vZGU6IEVsZW1lbnQpOiBib29sZWFuID0+IHtcbiAgY29uc3QgbWF0Y2hJbmRleCA9IGdldEVsbUluZGV4KG5vZGUpO1xuXG4gIHJldHVybiBtYXRjaEluZGV4ICE9PSBudWxsICYmIG1hdGNoSW5kZXgubGVuZ3RoID4gMDtcbn07XG5cbmNvbnN0IHJlcGxhY2UgPSAoZWRpdG9yOiBFZGl0b3IsIGN1cnJlbnRTZWFyY2hTdGF0ZTogQ2VsbDxTZWFyY2hTdGF0ZT4sIHRleHQ6IHN0cmluZywgZm9yd2FyZD86IGJvb2xlYW4sIGFsbD86IGJvb2xlYW4pOiBib29sZWFuID0+IHtcbiAgY29uc3Qgc2VhcmNoU3RhdGUgPSBjdXJyZW50U2VhcmNoU3RhdGUuZ2V0KCk7XG4gIGNvbnN0IGN1cnJlbnRJbmRleCA9IHNlYXJjaFN0YXRlLmluZGV4O1xuICBsZXQgY3VycmVudE1hdGNoSW5kZXgsIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleDtcblxuICBmb3J3YXJkID0gZm9yd2FyZCAhPT0gZmFsc2U7XG5cbiAgY29uc3Qgbm9kZSA9IGVkaXRvci5nZXRCb2R5KCk7XG4gIGNvbnN0IG5vZGVzID0gVG9vbHMuZ3JlcChUb29scy50b0FycmF5KG5vZGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NwYW4nKSksIGlzTWF0Y2hTcGFuKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG5vZGVJbmRleCA9IGdldEVsbUluZGV4KG5vZGVzW2ldKSBhcyBzdHJpbmc7XG5cbiAgICBsZXQgbWF0Y2hJbmRleCA9IGN1cnJlbnRNYXRjaEluZGV4ID0gcGFyc2VJbnQobm9kZUluZGV4LCAxMCk7XG4gICAgaWYgKGFsbCB8fCBtYXRjaEluZGV4ID09PSBzZWFyY2hTdGF0ZS5pbmRleCkge1xuICAgICAgaWYgKHRleHQubGVuZ3RoKSB7XG4gICAgICAgIG5vZGVzW2ldLmlubmVyVGV4dCA9IHRleHQ7XG4gICAgICAgIHVud3JhcChub2Rlc1tpXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZW1vdmVOb2RlKGVkaXRvci5kb20sIG5vZGVzW2ldKTtcbiAgICAgIH1cblxuICAgICAgd2hpbGUgKG5vZGVzWysraV0pIHtcbiAgICAgICAgbWF0Y2hJbmRleCA9IHBhcnNlSW50KGdldEVsbUluZGV4KG5vZGVzW2ldKSBhcyBzdHJpbmcsIDEwKTtcblxuICAgICAgICBpZiAobWF0Y2hJbmRleCA9PT0gY3VycmVudE1hdGNoSW5kZXgpIHtcbiAgICAgICAgICByZW1vdmVOb2RlKGVkaXRvci5kb20sIG5vZGVzW2ldKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpLS07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZvcndhcmQpIHtcbiAgICAgICAgbmV4dEluZGV4LS07XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjdXJyZW50TWF0Y2hJbmRleCA+IGN1cnJlbnRJbmRleCkge1xuICAgICAgbm9kZXNbaV0uc2V0QXR0cmlidXRlKCdkYXRhLW1jZS1pbmRleCcsIFN0cmluZyhjdXJyZW50TWF0Y2hJbmRleCAtIDEpKTtcbiAgICB9XG4gIH1cblxuICBjdXJyZW50U2VhcmNoU3RhdGUuc2V0KHtcbiAgICAuLi5zZWFyY2hTdGF0ZSxcbiAgICBjb3VudDogYWxsID8gMCA6IHNlYXJjaFN0YXRlLmNvdW50IC0gMSxcbiAgICBpbmRleDogbmV4dEluZGV4XG4gIH0pO1xuXG4gIGlmIChmb3J3YXJkKSB7XG4gICAgbmV4dChlZGl0b3IsIGN1cnJlbnRTZWFyY2hTdGF0ZSk7XG4gIH0gZWxzZSB7XG4gICAgcHJldihlZGl0b3IsIGN1cnJlbnRTZWFyY2hTdGF0ZSk7XG4gIH1cblxuICByZXR1cm4gIWFsbCAmJiBjdXJyZW50U2VhcmNoU3RhdGUuZ2V0KCkuY291bnQgPiAwO1xufTtcblxuY29uc3QgZG9uZSA9IChlZGl0b3I6IEVkaXRvciwgY3VycmVudFNlYXJjaFN0YXRlOiBDZWxsPFNlYXJjaFN0YXRlPiwga2VlcEVkaXRvclNlbGVjdGlvbj86IGJvb2xlYW4pOiBSYW5nZSB8IHVuZGVmaW5lZCA9PiB7XG4gIGxldCBzdGFydENvbnRhaW5lcjogVGV4dCB8IG51bGwgfCB1bmRlZmluZWQ7XG4gIGxldCBlbmRDb250YWluZXI6IFRleHQgfCBudWxsIHwgdW5kZWZpbmVkO1xuICBjb25zdCBzZWFyY2hTdGF0ZSA9IGN1cnJlbnRTZWFyY2hTdGF0ZS5nZXQoKTtcblxuICBjb25zdCBub2RlcyA9IFRvb2xzLnRvQXJyYXkoZWRpdG9yLmdldEJvZHkoKS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc3BhbicpKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG5vZGVJbmRleCA9IGdldEVsbUluZGV4KG5vZGVzW2ldKTtcblxuICAgIGlmIChub2RlSW5kZXggIT09IG51bGwgJiYgbm9kZUluZGV4Lmxlbmd0aCkge1xuICAgICAgaWYgKG5vZGVJbmRleCA9PT0gc2VhcmNoU3RhdGUuaW5kZXgudG9TdHJpbmcoKSkge1xuICAgICAgICAvLyBOb3RlOiBUaGUgZmlyc3QgY2hpbGQgb2YgdGhlIHNwYW4gbm9kZSB3aWxsIGJlIHRoZSBoaWdobGlnaHRlZCB0ZXh0IG5vZGVcbiAgICAgICAgaWYgKCFzdGFydENvbnRhaW5lcikge1xuICAgICAgICAgIHN0YXJ0Q29udGFpbmVyID0gbm9kZXNbaV0uZmlyc3RDaGlsZCBhcyBUZXh0O1xuICAgICAgICB9XG5cbiAgICAgICAgZW5kQ29udGFpbmVyID0gbm9kZXNbaV0uZmlyc3RDaGlsZCBhcyBUZXh0O1xuICAgICAgfVxuXG4gICAgICB1bndyYXAobm9kZXNbaV0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJlc2V0IHRoZSBzZWFyY2ggc3RhdGVcbiAgY3VycmVudFNlYXJjaFN0YXRlLnNldCh7XG4gICAgLi4uc2VhcmNoU3RhdGUsXG4gICAgaW5kZXg6IC0xLFxuICAgIGNvdW50OiAwLFxuICAgIHRleHQ6ICcnXG4gIH0pO1xuXG4gIGlmIChzdGFydENvbnRhaW5lciAmJiBlbmRDb250YWluZXIpIHtcbiAgICBjb25zdCBybmcgPSBlZGl0b3IuZG9tLmNyZWF0ZVJuZygpO1xuICAgIHJuZy5zZXRTdGFydChzdGFydENvbnRhaW5lciwgMCk7XG4gICAgcm5nLnNldEVuZChlbmRDb250YWluZXIsIGVuZENvbnRhaW5lci5kYXRhLmxlbmd0aCk7XG5cbiAgICBpZiAoa2VlcEVkaXRvclNlbGVjdGlvbiAhPT0gZmFsc2UpIHtcbiAgICAgIGVkaXRvci5zZWxlY3Rpb24uc2V0Um5nKHJuZyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJuZztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59O1xuXG5jb25zdCBoYXNOZXh0ID0gKGVkaXRvcjogRWRpdG9yLCBjdXJyZW50U2VhcmNoU3RhdGU6IENlbGw8U2VhcmNoU3RhdGU+KTogYm9vbGVhbiA9PiBjdXJyZW50U2VhcmNoU3RhdGUuZ2V0KCkuY291bnQgPiAxO1xuY29uc3QgaGFzUHJldiA9IChlZGl0b3I6IEVkaXRvciwgY3VycmVudFNlYXJjaFN0YXRlOiBDZWxsPFNlYXJjaFN0YXRlPik6IGJvb2xlYW4gPT4gY3VycmVudFNlYXJjaFN0YXRlLmdldCgpLmNvdW50ID4gMTtcblxuZXhwb3J0IHtcbiAgZG9uZSxcbiAgZmluZCxcbiAgbmV4dCxcbiAgcHJldixcbiAgcmVwbGFjZSxcbiAgaGFzTmV4dCxcbiAgaGFzUHJldlxufTtcbiIsImltcG9ydCB7IEFyciB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5pbXBvcnQgeyBBdHRyaWJ1dGUsIEluc2VydCwgU3VnYXJFbGVtZW50LCBTdWdhclRleHQgfSBmcm9tICdAZXBob3gvc3VnYXInO1xuXG5pbXBvcnQgdHlwZSBET01VdGlscyBmcm9tICd0aW55bWNlL2NvcmUvYXBpL2RvbS9ET01VdGlscyc7XG5pbXBvcnQgdHlwZSBFZGl0b3JTZWxlY3Rpb24gZnJvbSAndGlueW1jZS9jb3JlL2FwaS9kb20vU2VsZWN0aW9uJztcblxuaW1wb3J0ICogYXMgVGV4dENvbGxlY3QgZnJvbSAnLi9UZXh0Q29sbGVjdCc7XG5pbXBvcnQgKiBhcyBUZXh0UG9zaXRpb24gZnJvbSAnLi9UZXh0UG9zaXRpb24nO1xuaW1wb3J0IHR5cGUgeyBQYXR0ZXJuLCBUZXh0TWF0Y2gsIFRleHRTZWN0aW9uIH0gZnJvbSAnLi9UeXBlcyc7XG5cbmNvbnN0IGZpbmQgPSAocGF0dGVybjogUGF0dGVybiwgc2VjdGlvbnM6IFRleHRTZWN0aW9uW10pOiBUZXh0TWF0Y2hbXVtdID0+XG4gIEFyci5iaW5kKHNlY3Rpb25zLCAoc2VjdGlvbikgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gc2VjdGlvbi5lbGVtZW50cztcbiAgICBjb25zdCBjb250ZW50ID0gQXJyLm1hcChlbGVtZW50cywgU3VnYXJUZXh0LmdldCkuam9pbignJyk7XG4gICAgY29uc3QgcG9zaXRpb25zID0gVGV4dFBvc2l0aW9uLmZpbmQoY29udGVudCwgcGF0dGVybiwgc2VjdGlvbi5zT2Zmc2V0LCBjb250ZW50Lmxlbmd0aCAtIHNlY3Rpb24uZk9mZnNldCk7XG4gICAgcmV0dXJuIFRleHRQb3NpdGlvbi5leHRyYWN0KGVsZW1lbnRzLCBwb3NpdGlvbnMpO1xuICB9KTtcblxuY29uc3QgbWFyayA9IChtYXRjaGVzOiBUZXh0TWF0Y2hbXVtdLCByZXBsYWNlbWVudE5vZGU6IEhUTUxFbGVtZW50KTogdm9pZCA9PiB7XG4gIC8vIFdhbGsgYmFja3dhcmRzIGFuZCBtYXJrIHRoZSBwb3NpdGlvbnNcbiAgLy8gTm90ZTogV2UgbmVlZCB0byB3YWxrIGJhY2t3YXJkcyBzbyB0aGUgcG9zaXRpb24gaW5kZXhlcyBkb24ndCBjaGFuZ2VcbiAgQXJyLmVhY2hyKG1hdGNoZXMsIChtYXRjaCwgaWR4KSA9PiB7XG4gICAgQXJyLmVhY2hyKG1hdGNoLCAocG9zKSA9PiB7XG4gICAgICBjb25zdCB3cmFwcGVyID0gU3VnYXJFbGVtZW50LmZyb21Eb20ocmVwbGFjZW1lbnROb2RlLmNsb25lTm9kZShmYWxzZSkgYXMgSFRNTEVsZW1lbnQpO1xuICAgICAgQXR0cmlidXRlLnNldCh3cmFwcGVyLCAnZGF0YS1tY2UtaW5kZXgnLCBpZHgpO1xuICAgICAgY29uc3QgdGV4dE5vZGUgPSBwb3MuZWxlbWVudC5kb207XG4gICAgICBpZiAodGV4dE5vZGUubGVuZ3RoID09PSBwb3MuZmluaXNoICYmIHBvcy5zdGFydCA9PT0gMCkge1xuICAgICAgICBJbnNlcnQud3JhcChwb3MuZWxlbWVudCwgd3JhcHBlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGV4dE5vZGUubGVuZ3RoICE9PSBwb3MuZmluaXNoKSB7XG4gICAgICAgICAgdGV4dE5vZGUuc3BsaXRUZXh0KHBvcy5maW5pc2gpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1hdGNoTm9kZSA9IHRleHROb2RlLnNwbGl0VGV4dChwb3Muc3RhcnQpO1xuICAgICAgICBJbnNlcnQud3JhcChTdWdhckVsZW1lbnQuZnJvbURvbShtYXRjaE5vZGUpLCB3cmFwcGVyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBmaW5kQW5kTWFyayA9IChkb206IERPTVV0aWxzLCBwYXR0ZXJuOiBQYXR0ZXJuLCBub2RlOiBOb2RlLCByZXBsYWNlbWVudE5vZGU6IEhUTUxFbGVtZW50KTogbnVtYmVyID0+IHtcbiAgY29uc3QgdGV4dFNlY3Rpb25zID0gVGV4dENvbGxlY3QuZnJvbU5vZGUoZG9tLCBub2RlKTtcbiAgY29uc3QgbWF0Y2hlcyA9IGZpbmQocGF0dGVybiwgdGV4dFNlY3Rpb25zKTtcbiAgbWFyayhtYXRjaGVzLCByZXBsYWNlbWVudE5vZGUpO1xuICByZXR1cm4gbWF0Y2hlcy5sZW5ndGg7XG59O1xuXG5jb25zdCBmaW5kQW5kTWFya0luU2VsZWN0aW9uID0gKGRvbTogRE9NVXRpbHMsIHBhdHRlcm46IFBhdHRlcm4sIHNlbGVjdGlvbjogRWRpdG9yU2VsZWN0aW9uLCByZXBsYWNlbWVudE5vZGU6IEhUTUxFbGVtZW50KTogbnVtYmVyID0+IHtcbiAgY29uc3QgYm9va21hcmsgPSBzZWxlY3Rpb24uZ2V0Qm9va21hcmsoKTtcblxuICAvLyBIYW5kbGUgdGFibGUgY2VsbCBzZWxlY3Rpb24gYXMgdGhlIHRhYmxlIHBsdWdpbiBlbmFibGVzXG4gIC8vIHlvdSB0byBmYWtlIHNlbGVjdCB0YWJsZSBjZWxscyBhbmQgcGVyZm9ybSBhY3Rpb25zIG9uIHRoZW1cbiAgY29uc3Qgbm9kZXMgPSBkb20uc2VsZWN0KCd0ZFtkYXRhLW1jZS1zZWxlY3RlZF0sdGhbZGF0YS1tY2Utc2VsZWN0ZWRdJyk7XG4gIGNvbnN0IHRleHRTZWN0aW9ucyA9IG5vZGVzLmxlbmd0aCA+IDAgPyBUZXh0Q29sbGVjdC5mcm9tTm9kZXMoZG9tLCBub2RlcykgOiBUZXh0Q29sbGVjdC5mcm9tUm5nKGRvbSwgc2VsZWN0aW9uLmdldFJuZygpKTtcblxuICAvLyBGaW5kIGFuZCBtYXJrIG1hdGNoZXNcbiAgY29uc3QgbWF0Y2hlcyA9IGZpbmQocGF0dGVybiwgdGV4dFNlY3Rpb25zKTtcbiAgbWFyayhtYXRjaGVzLCByZXBsYWNlbWVudE5vZGUpO1xuXG4gIC8vIFJlc3RvcmUgdGhlIHNlbGVjdGlvblxuICBzZWxlY3Rpb24ubW92ZVRvQm9va21hcmsoYm9va21hcmspO1xuICByZXR1cm4gbWF0Y2hlcy5sZW5ndGg7XG59O1xuXG5leHBvcnQge1xuICBmaW5kQW5kTWFyayxcbiAgZmluZEFuZE1hcmtJblNlbGVjdGlvblxufTtcbiIsImltcG9ydCB7IEFyciwgRnVuLCBPYmogfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuaW1wb3J0IHsgU2FuZE5vZGUgfSBmcm9tICdAZXBob3gvc2FuZCc7XG5pbXBvcnQgeyBTZWxlY3RvckZpbHRlciwgU3VnYXJFbGVtZW50LCBUcmF2ZXJzZSB9IGZyb20gJ0BlcGhveC9zdWdhcic7XG5cbmltcG9ydCB0eXBlIERPTVV0aWxzIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvZG9tL0RPTVV0aWxzJztcbmltcG9ydCBEb21UcmVlV2Fsa2VyIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvZG9tL1RyZWVXYWxrZXInO1xuXG5pbXBvcnQgdHlwZSB7IFRleHRTZWN0aW9uIH0gZnJvbSAnLi9UeXBlcyc7XG5cbmludGVyZmFjZSBXYWxrZXJDYWxsYmFja3Mge1xuICByZWFkb25seSBib3VuZGFyeTogKG5vZGU6IE5vZGUpID0+IGJvb2xlYW47XG4gIHJlYWRvbmx5IGNlZjogKG5vZGU6IE5vZGUpID0+IGJvb2xlYW47XG4gIHJlYWRvbmx5IHRleHQ6IChub2RlOiBUZXh0KSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgQ29sbGVjdENhbGxiYWNrcyB7XG4gIHJlYWRvbmx5IGNlZjogKG5vZGU6IE5vZGUpID0+IFRleHRTZWN0aW9uW107XG4gIHJlYWRvbmx5IHRleHQ6IChub2RlOiBUZXh0LCBzZWN0aW9uOiBUZXh0U2VjdGlvbikgPT4gdm9pZDtcbn1cblxuY29uc3QgaXNTaW1wbGVCb3VuZGFyeSA9IChkb206IERPTVV0aWxzLCBub2RlOiBOb2RlKSA9PlxuICBkb20uaXNCbG9jayhub2RlKSB8fCBPYmouaGFzKGRvbS5zY2hlbWEuZ2V0Vm9pZEVsZW1lbnRzKCksIG5vZGUubm9kZU5hbWUpO1xuXG5jb25zdCBpc0NvbnRlbnRFZGl0YWJsZUZhbHNlID0gKGRvbTogRE9NVXRpbHMsIG5vZGU6IE5vZGUpID0+ICFkb20uaXNFZGl0YWJsZShub2RlKTtcblxuY29uc3QgaXNDb250ZW50RWRpdGFibGVUcnVlSW5DZWYgPSAoZG9tOiBET01VdGlscywgbm9kZTogTm9kZSkgPT5cbiAgZG9tLmdldENvbnRlbnRFZGl0YWJsZShub2RlKSA9PT0gJ3RydWUnICYmIG5vZGUucGFyZW50Tm9kZSAmJiAhZG9tLmlzRWRpdGFibGUobm9kZS5wYXJlbnROb2RlKTtcblxuY29uc3QgaXNIaWRkZW4gPSAoZG9tOiBET01VdGlscywgbm9kZTogTm9kZSkgPT5cbiAgIWRvbS5pc0Jsb2NrKG5vZGUpICYmIE9iai5oYXMoZG9tLnNjaGVtYS5nZXRXaGl0ZXNwYWNlRWxlbWVudHMoKSwgbm9kZS5ub2RlTmFtZSk7XG5cbmNvbnN0IGlzQm91bmRhcnkgPSAoZG9tOiBET01VdGlscywgbm9kZTogTm9kZSkgPT5cbiAgaXNTaW1wbGVCb3VuZGFyeShkb20sIG5vZGUpIHx8IGlzQ29udGVudEVkaXRhYmxlRmFsc2UoZG9tLCBub2RlKSB8fCBpc0hpZGRlbihkb20sIG5vZGUpIHx8IGlzQ29udGVudEVkaXRhYmxlVHJ1ZUluQ2VmKGRvbSwgbm9kZSk7XG5cbmNvbnN0IGlzVGV4dCA9IChub2RlOiBOb2RlKTogbm9kZSBpcyBUZXh0ID0+XG4gIG5vZGUubm9kZVR5cGUgPT09IDM7XG5cbmNvbnN0IG51U2VjdGlvbiA9ICgpOiBUZXh0U2VjdGlvbiA9PiAoe1xuICBzT2Zmc2V0OiAwLFxuICBmT2Zmc2V0OiAwLFxuICBlbGVtZW50czogW11cbn0pO1xuXG5jb25zdCB0b0xlYWYgPSAobm9kZTogTm9kZSwgb2Zmc2V0OiBudW1iZXIpOiBUcmF2ZXJzZS5FbGVtZW50QW5kT2Zmc2V0PE5vZGU+ID0+XG4gIFRyYXZlcnNlLmxlYWYoU3VnYXJFbGVtZW50LmZyb21Eb20obm9kZSksIG9mZnNldCk7XG5cbmNvbnN0IHdhbGsgPSAoZG9tOiBET01VdGlscywgd2Fsa2VyRm46IChzaGFsbG93PzogYm9vbGVhbikgPT4gTm9kZSB8IG51bGwgfCB1bmRlZmluZWQsIHN0YXJ0Tm9kZTogTm9kZSwgY2FsbGJhY2tzOiBXYWxrZXJDYWxsYmFja3MsIGVuZE5vZGU/OiBOb2RlLCBza2lwU3RhcnQ6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCA9PiB7XG4gIGxldCBuZXh0ID0gc2tpcFN0YXJ0ID8gd2Fsa2VyRm4oZmFsc2UpIDogc3RhcnROb2RlO1xuICB3aGlsZSAobmV4dCkge1xuICAgIC8vIFdhbGsgb3ZlciBjb250ZW50IGVkaXRhYmxlIG9yIGhpZGRlbiBlbGVtZW50c1xuICAgIGNvbnN0IGlzQ2VmTm9kZSA9IGlzQ29udGVudEVkaXRhYmxlRmFsc2UoZG9tLCBuZXh0KTtcbiAgICBpZiAoaXNDZWZOb2RlIHx8IGlzSGlkZGVuKGRvbSwgbmV4dCkpIHtcbiAgICAgIGNvbnN0IHN0b3BXYWxraW5nID0gaXNDZWZOb2RlID8gY2FsbGJhY2tzLmNlZihuZXh0KSA6IGNhbGxiYWNrcy5ib3VuZGFyeShuZXh0KTtcbiAgICAgIGlmIChzdG9wV2Fsa2luZykge1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5leHQgPSB3YWxrZXJGbih0cnVlKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1NpbXBsZUJvdW5kYXJ5KGRvbSwgbmV4dCkpIHtcbiAgICAgIGlmIChjYWxsYmFja3MuYm91bmRhcnkobmV4dCkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1RleHQobmV4dCkpIHtcbiAgICAgIGNhbGxiYWNrcy50ZXh0KG5leHQpO1xuICAgIH1cblxuICAgIGlmIChuZXh0ID09PSBlbmROb2RlKSB7XG4gICAgICBicmVhaztcbiAgICB9IGVsc2Uge1xuICAgICAgbmV4dCA9IHdhbGtlckZuKGZhbHNlKTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGNvbGxlY3RUZXh0VG9Cb3VuZGFyeSA9IChkb206IERPTVV0aWxzLCBzZWN0aW9uOiBUZXh0U2VjdGlvbiwgbm9kZTogTm9kZSwgcm9vdE5vZGU6IE5vZGUsIGZvcndhcmRzOiBib29sZWFuKTogdm9pZCA9PiB7XG4gIC8vIERvbid0IGJvdGhlciBjb2xsZWN0aW5nIHRleHQgbm9kZXMgaWYgd2UncmUgYWxyZWFkeSBhdCBhIGJvdW5kYXJ5XG4gIGlmIChpc0JvdW5kYXJ5KGRvbSwgbm9kZSkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCByb290QmxvY2sgPSBkb20uZ2V0UGFyZW50KHJvb3ROb2RlLCBkb20uaXNCbG9jaykgPz8gZG9tLmdldFJvb3QoKTtcbiAgY29uc3Qgd2Fsa2VyID0gbmV3IERvbVRyZWVXYWxrZXIobm9kZSwgcm9vdEJsb2NrKTtcbiAgY29uc3Qgd2Fsa2VyRm4gPSBmb3J3YXJkcyA/IHdhbGtlci5uZXh0LmJpbmQod2Fsa2VyKSA6IHdhbGtlci5wcmV2LmJpbmQod2Fsa2VyKTtcblxuICAvLyBXYWxrIG92ZXIgYW5kIGFkZCB0ZXh0IG5vZGVzIHRvIHRoZSBzZWN0aW9uIGFuZCBpbmNyZWFzZSB0aGUgb2Zmc2V0c1xuICAvLyBzbyB3ZSBrbm93IHRvIGlnbm9yZSB0aGUgYWRkaXRpb25hbCB0ZXh0IHdoZW4gbWF0Y2hpbmdcbiAgd2Fsayhkb20sIHdhbGtlckZuLCBub2RlLCB7XG4gICAgYm91bmRhcnk6IEZ1bi5hbHdheXMsXG4gICAgY2VmOiBGdW4uYWx3YXlzLFxuICAgIHRleHQ6IChuZXh0KSA9PiB7XG4gICAgICBpZiAoZm9yd2FyZHMpIHtcbiAgICAgICAgc2VjdGlvbi5mT2Zmc2V0ICs9IG5leHQubGVuZ3RoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VjdGlvbi5zT2Zmc2V0ICs9IG5leHQubGVuZ3RoO1xuICAgICAgfVxuICAgICAgc2VjdGlvbi5lbGVtZW50cy5wdXNoKFN1Z2FyRWxlbWVudC5mcm9tRG9tKG5leHQpKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgY29sbGVjdCA9IChkb206IERPTVV0aWxzLCByb290Tm9kZTogTm9kZSwgc3RhcnROb2RlOiBOb2RlLCBlbmROb2RlPzogTm9kZSwgY2FsbGJhY2tzPzogQ29sbGVjdENhbGxiYWNrcywgc2tpcFN0YXJ0OiBib29sZWFuID0gdHJ1ZSk6IFRleHRTZWN0aW9uW10gPT4ge1xuICBjb25zdCB3YWxrZXIgPSBuZXcgRG9tVHJlZVdhbGtlcihzdGFydE5vZGUsIHJvb3ROb2RlKTtcbiAgY29uc3Qgc2VjdGlvbnM6IFRleHRTZWN0aW9uW10gPSBbXTtcbiAgbGV0IGN1cnJlbnQ6IFRleHRTZWN0aW9uID0gbnVTZWN0aW9uKCk7XG5cbiAgLy8gRmluZCBhbnkgdGV4dCBiZXR3ZWVuIHRoZSBzdGFydCBub2RlIGFuZCB0aGUgY2xvc2VzdCBib3VuZGFyeVxuICBjb2xsZWN0VGV4dFRvQm91bmRhcnkoZG9tLCBjdXJyZW50LCBzdGFydE5vZGUsIHJvb3ROb2RlLCBmYWxzZSk7XG5cbiAgY29uc3QgZmluaXNoU2VjdGlvbiA9ICgpID0+IHtcbiAgICBpZiAoY3VycmVudC5lbGVtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICBzZWN0aW9ucy5wdXNoKGN1cnJlbnQpO1xuICAgICAgY3VycmVudCA9IG51U2VjdGlvbigpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgLy8gQ29sbGVjdCBhbGwgdGhlIHRleHQgbm9kZXMgaW4gdGhlIHNwZWNpZmllZCByYW5nZSBhbmQgY3JlYXRlIHNlY3Rpb25zIGZyb20gdGhlXG4gIC8vIGJvdW5kYXJpZXMgd2l0aGluIHRoZSByYW5nZVxuICB3YWxrKGRvbSwgd2Fsa2VyLm5leHQuYmluZCh3YWxrZXIpLCBzdGFydE5vZGUsIHtcbiAgICBib3VuZGFyeTogZmluaXNoU2VjdGlvbixcbiAgICBjZWY6IChub2RlKSA9PiB7XG4gICAgICBmaW5pc2hTZWN0aW9uKCk7XG4gICAgICAvLyBDb2xsZWN0IGFkZGl0aW9uYWwgbmVzdGVkIGNvbnRlbnRlZGl0YWJsZSB0cnVlIGNvbnRlbnRcbiAgICAgIGlmIChjYWxsYmFja3MpIHtcbiAgICAgICAgc2VjdGlvbnMucHVzaCguLi5jYWxsYmFja3MuY2VmKG5vZGUpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgIHRleHQ6IChuZXh0KSA9PiB7XG4gICAgICBjdXJyZW50LmVsZW1lbnRzLnB1c2goU3VnYXJFbGVtZW50LmZyb21Eb20obmV4dCkpO1xuICAgICAgaWYgKGNhbGxiYWNrcykge1xuICAgICAgICBjYWxsYmFja3MudGV4dChuZXh0LCBjdXJyZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIGVuZE5vZGUsIHNraXBTdGFydCk7XG5cbiAgLy8gRmluZCBhbnkgdGV4dCBiZXR3ZWVuIHRoZSBlbmQgbm9kZSBhbmQgdGhlIGNsb3Nlc3QgYm91bmRhcnksIHRoZW4gZmluYWxpc2UgdGhlIHNlY3Rpb25cbiAgaWYgKGVuZE5vZGUpIHtcbiAgICBjb2xsZWN0VGV4dFRvQm91bmRhcnkoZG9tLCBjdXJyZW50LCBlbmROb2RlLCByb290Tm9kZSwgdHJ1ZSk7XG4gIH1cbiAgZmluaXNoU2VjdGlvbigpO1xuXG4gIHJldHVybiBzZWN0aW9ucztcbn07XG5cbmNvbnN0IGNvbGxlY3RSYW5nZVNlY3Rpb25zID0gKGRvbTogRE9NVXRpbHMsIHJuZzogUmFuZ2UpOiBUZXh0U2VjdGlvbltdID0+IHtcbiAgY29uc3Qgc3RhcnQgPSB0b0xlYWYocm5nLnN0YXJ0Q29udGFpbmVyLCBybmcuc3RhcnRPZmZzZXQpO1xuICBjb25zdCBzdGFydE5vZGUgPSBzdGFydC5lbGVtZW50LmRvbTtcbiAgY29uc3QgZW5kID0gdG9MZWFmKHJuZy5lbmRDb250YWluZXIsIHJuZy5lbmRPZmZzZXQpO1xuICBjb25zdCBlbmROb2RlID0gZW5kLmVsZW1lbnQuZG9tO1xuXG4gIHJldHVybiBjb2xsZWN0KGRvbSwgcm5nLmNvbW1vbkFuY2VzdG9yQ29udGFpbmVyLCBzdGFydE5vZGUsIGVuZE5vZGUsIHtcbiAgICB0ZXh0OiAobm9kZSwgc2VjdGlvbikgPT4ge1xuICAgICAgLy8gU2V0IHRoZSBzdGFydC9lbmQgb2Zmc2V0IG9mIHRoZSBzZWN0aW9uXG4gICAgICBpZiAobm9kZSA9PT0gZW5kTm9kZSkge1xuICAgICAgICBzZWN0aW9uLmZPZmZzZXQgKz0gbm9kZS5sZW5ndGggLSBlbmQub2Zmc2V0O1xuICAgICAgfSBlbHNlIGlmIChub2RlID09PSBzdGFydE5vZGUpIHtcbiAgICAgICAgc2VjdGlvbi5zT2Zmc2V0ICs9IHN0YXJ0Lm9mZnNldDtcbiAgICAgIH1cbiAgICB9LFxuICAgIGNlZjogKG5vZGUpID0+IHtcbiAgICAgIC8vIENvbGxlY3QgdGhlIHNlY3Rpb25zIGFuZCB0aGVuIG9yZGVyIHRoZW0gYXBwcm9wcmlhdGVseSwgYXMgbmVzdGVkIHNlY3Rpb25zIG1heWJlIG91dCBvZiBvcmRlclxuICAgICAgLy8gVE9ETzogU2VlIGlmIHdlIGNhbiBpbXByb3ZlIHRoaXMgdG8gYXZvaWQgdGhlIHNvcnQgb3ZlcmhlYWRcbiAgICAgIGNvbnN0IHNlY3Rpb25zID0gQXJyLmJpbmQoU2VsZWN0b3JGaWx0ZXIuZGVzY2VuZGFudHMoU3VnYXJFbGVtZW50LmZyb21Eb20obm9kZSksICcqW2NvbnRlbnRlZGl0YWJsZT10cnVlXScpLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBjZVRydWVOb2RlID0gZS5kb207XG4gICAgICAgIHJldHVybiBjb2xsZWN0KGRvbSwgY2VUcnVlTm9kZSwgY2VUcnVlTm9kZSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBBcnIuc29ydChzZWN0aW9ucywgKGEsIGIpID0+IChTYW5kTm9kZS5kb2N1bWVudFBvc2l0aW9uUHJlY2VkaW5nKGEuZWxlbWVudHNbMF0uZG9tLCBiLmVsZW1lbnRzWzBdLmRvbSkpID8gMSA6IC0xKTtcbiAgICB9XG4gIH0sIGZhbHNlKTtcbn07XG5cbmNvbnN0IGZyb21SbmcgPSAoZG9tOiBET01VdGlscywgcm5nOiBSYW5nZSk6IFRleHRTZWN0aW9uW10gPT5cbiAgcm5nLmNvbGxhcHNlZCA/IFtdIDogY29sbGVjdFJhbmdlU2VjdGlvbnMoZG9tLCBybmcpO1xuXG5jb25zdCBmcm9tTm9kZSA9IChkb206IERPTVV0aWxzLCBub2RlOiBOb2RlKTogVGV4dFNlY3Rpb25bXSA9PiB7XG4gIGNvbnN0IHJuZyA9IGRvbS5jcmVhdGVSbmcoKTtcbiAgcm5nLnNlbGVjdE5vZGUobm9kZSk7XG4gIHJldHVybiBmcm9tUm5nKGRvbSwgcm5nKTtcbn07XG5cbmNvbnN0IGZyb21Ob2RlcyA9IChkb206IERPTVV0aWxzLCBub2RlczogTm9kZVtdKTogVGV4dFNlY3Rpb25bXSA9PlxuICBBcnIuYmluZChub2RlcywgKG5vZGUpID0+IGZyb21Ob2RlKGRvbSwgbm9kZSkpO1xuXG5leHBvcnQge1xuICBmcm9tTm9kZSxcbiAgZnJvbU5vZGVzLFxuICBmcm9tUm5nXG59O1xuIiwiaW1wb3J0IHsgQXJyIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcbmltcG9ydCB7IHR5cGUgU3VnYXJFbGVtZW50LCBTdWdhclRleHQgfSBmcm9tICdAZXBob3gvc3VnYXInO1xuXG5pbXBvcnQgdHlwZSB7IFBhdHRlcm4sIFBvc2l0aW9uLCBUZXh0TWF0Y2ggfSBmcm9tICcuL1R5cGVzJztcblxuaW50ZXJmYWNlIEluZGV4ZWRUZXh0TWF0Y2ggZXh0ZW5kcyBUZXh0TWF0Y2gge1xuICByZWFkb25seSBtYXRjaElkOiBudW1iZXI7XG59XG5cbmNvbnN0IGZpbmQgPSAodGV4dDogc3RyaW5nLCBwYXR0ZXJuOiBQYXR0ZXJuLCBzdGFydCA9IDAsIGZpbmlzaCA9IHRleHQubGVuZ3RoKTogUG9zaXRpb25bXSA9PiB7XG4gIGNvbnN0IHJlZ2V4ID0gcGF0dGVybi5yZWdleDtcbiAgcmVnZXgubGFzdEluZGV4ID0gc3RhcnQ7XG4gIGNvbnN0IHJlc3VsdHMgPSBbXTtcbiAgbGV0IG1hdGNoO1xuICB3aGlsZSAoKG1hdGNoID0gcmVnZXguZXhlYyh0ZXh0KSkpIHtcbiAgICBjb25zdCBtYXRjaGVkVGV4dCA9IG1hdGNoW3BhdHRlcm4ubWF0Y2hJbmRleF07XG4gICAgY29uc3QgbWF0Y2hTdGFydCA9IG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0uaW5kZXhPZihtYXRjaGVkVGV4dCk7XG4gICAgY29uc3QgbWF0Y2hGaW5pc2ggPSBtYXRjaFN0YXJ0ICsgbWF0Y2hlZFRleHQubGVuZ3RoO1xuXG4gICAgLy8gU3RvcCBmaW5kaW5nIG1hdGNoZXMgaWYgd2UndmUgaGl0IHRoZSBmaW5pc2ggbWFya1xuICAgIGlmIChtYXRjaEZpbmlzaCA+IGZpbmlzaCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmVzdWx0cy5wdXNoKHtcbiAgICAgIHN0YXJ0OiBtYXRjaFN0YXJ0LFxuICAgICAgZmluaXNoOiBtYXRjaEZpbmlzaFxuICAgIH0pO1xuICAgIHJlZ2V4Lmxhc3RJbmRleCA9IG1hdGNoRmluaXNoO1xuICB9XG4gIHJldHVybiByZXN1bHRzO1xufTtcblxuY29uc3QgZXh0cmFjdCA9IChlbGVtZW50czogU3VnYXJFbGVtZW50PFRleHQ+W10sIG1hdGNoZXM6IFBvc2l0aW9uW10pOiBUZXh0TWF0Y2hbXVtdID0+IHtcbiAgLy8gV2FsayBvdmVyIGVhY2ggdGV4dCBub2RlIGFuZCBjb21wYXJlIHdpdGggdGhlIG1hdGNoZXNcbiAgY29uc3Qgbm9kZVBvc2l0aW9ucyA9IEFyci5mb2xkbChlbGVtZW50cywgKGFjYywgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBTdWdhclRleHQuZ2V0KGVsZW1lbnQpO1xuICAgIGNvbnN0IHN0YXJ0ID0gYWNjLmxhc3Q7XG4gICAgY29uc3QgZmluaXNoID0gc3RhcnQgKyBjb250ZW50Lmxlbmd0aDtcblxuICAgIC8vIEZpbmQgcG9zaXRpb25zIGZvciBhbnkgbWF0Y2hlcyBpbiB0aGUgY3VycmVudCB0ZXh0IG5vZGVcbiAgICBjb25zdCBwb3NpdGlvbnMgPSBBcnIuYmluZChtYXRjaGVzLCAobWF0Y2gsIG1hdGNoSWR4KSA9PiB7XG4gICAgICAvLyBDaGVjayB0byBzZWUgaWYgdGhlIG1hdGNoIG92ZXJsYXBzIHdpdGggdGhlIHRleHQgcG9zaXRpb25cbiAgICAgIGlmIChtYXRjaC5zdGFydCA8IGZpbmlzaCAmJiBtYXRjaC5maW5pc2ggPiBzdGFydCkge1xuICAgICAgICByZXR1cm4gW3tcbiAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgIHN0YXJ0OiBNYXRoLm1heChzdGFydCwgbWF0Y2guc3RhcnQpIC0gc3RhcnQsXG4gICAgICAgICAgZmluaXNoOiBNYXRoLm1pbihmaW5pc2gsIG1hdGNoLmZpbmlzaCkgLSBzdGFydCxcbiAgICAgICAgICBtYXRjaElkOiBtYXRjaElkeFxuICAgICAgICB9XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICByZXN1bHRzOiBhY2MucmVzdWx0cy5jb25jYXQocG9zaXRpb25zKSxcbiAgICAgIGxhc3Q6IGZpbmlzaFxuICAgIH07XG4gIH0sIHsgcmVzdWx0czogW10gYXMgSW5kZXhlZFRleHRNYXRjaFtdLCBsYXN0OiAwIH0pLnJlc3VsdHM7XG5cbiAgLy8gR3JvdXAgdGhlIHBvc2l0aW9ucyBieSB0aGUgbWF0Y2ggaWRcbiAgcmV0dXJuIEFyci5ncm91cEJ5KG5vZGVQb3NpdGlvbnMsIChwb3NpdGlvbikgPT4gcG9zaXRpb24ubWF0Y2hJZCk7XG59O1xuXG5leHBvcnQge1xuICBmaW5kLFxuICBleHRyYWN0XG59O1xuIiwiaW1wb3J0IHR5cGUgeyBDZWxsIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0IHR5cGUgRWRpdG9yIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvRWRpdG9yJztcblxuaW1wb3J0IHR5cGUgeyBTZWFyY2hTdGF0ZSB9IGZyb20gJy4uL2NvcmUvQWN0aW9ucyc7XG5cbmltcG9ydCAqIGFzIERpYWxvZyBmcm9tICcuL0RpYWxvZyc7XG5cbmNvbnN0IHNob3dEaWFsb2cgPSAoZWRpdG9yOiBFZGl0b3IsIGN1cnJlbnRTZWFyY2hTdGF0ZTogQ2VsbDxTZWFyY2hTdGF0ZT4pID0+ICgpOiB2b2lkID0+IHtcbiAgRGlhbG9nLm9wZW4oZWRpdG9yLCBjdXJyZW50U2VhcmNoU3RhdGUpO1xufTtcblxuY29uc3QgcmVnaXN0ZXIgPSAoZWRpdG9yOiBFZGl0b3IsIGN1cnJlbnRTZWFyY2hTdGF0ZTogQ2VsbDxTZWFyY2hTdGF0ZT4pOiB2b2lkID0+IHtcbiAgZWRpdG9yLnVpLnJlZ2lzdHJ5LmFkZE1lbnVJdGVtKCdzZWFyY2hyZXBsYWNlJywge1xuICAgIHRleHQ6ICdGaW5kIGFuZCByZXBsYWNlLi4uJyxcbiAgICBzaG9ydGN1dDogJ01ldGErRicsXG4gICAgb25BY3Rpb246IHNob3dEaWFsb2coZWRpdG9yLCBjdXJyZW50U2VhcmNoU3RhdGUpLFxuICAgIGljb246ICdzZWFyY2gnXG4gIH0pO1xuXG4gIGVkaXRvci51aS5yZWdpc3RyeS5hZGRCdXR0b24oJ3NlYXJjaHJlcGxhY2UnLCB7XG4gICAgdG9vbHRpcDogJ0ZpbmQgYW5kIHJlcGxhY2UnLFxuICAgIG9uQWN0aW9uOiBzaG93RGlhbG9nKGVkaXRvciwgY3VycmVudFNlYXJjaFN0YXRlKSxcbiAgICBpY29uOiAnc2VhcmNoJyxcbiAgICBzaG9ydGN1dDogJ01ldGErRidcbiAgfSk7XG5cbiAgZWRpdG9yLnNob3J0Y3V0cy5hZGQoJ01ldGErRicsICcnLCBzaG93RGlhbG9nKGVkaXRvciwgY3VycmVudFNlYXJjaFN0YXRlKSk7XG59O1xuXG5leHBvcnQge1xuICByZWdpc3RlclxufTtcbiIsImltcG9ydCB7IEFyciwgdHlwZSBDZWxsLCBTaW5nbGV0b24gfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5pbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuaW1wb3J0IEVudiBmcm9tICd0aW55bWNlL2NvcmUvYXBpL0Vudic7XG5pbXBvcnQgdHlwZSB7IERpYWxvZyB9IGZyb20gJ3RpbnltY2UvY29yZS9hcGkvdWkvVWknO1xuaW1wb3J0IFRvb2xzIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvdXRpbC9Ub29scyc7XG5cbmltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSAnLi4vY29yZS9BY3Rpb25zJztcblxuZXhwb3J0IGludGVyZmFjZSBEaWFsb2dEYXRhIHtcbiAgcmVhZG9ubHkgZmluZHRleHQ6IHN0cmluZztcbiAgcmVhZG9ubHkgcmVwbGFjZXRleHQ6IHN0cmluZztcbiAgcmVhZG9ubHkgbWF0Y2hjYXNlOiBib29sZWFuO1xuICByZWFkb25seSB3aG9sZXdvcmRzOiBib29sZWFuO1xuICByZWFkb25seSBpbnNlbGVjdGlvbjogYm9vbGVhbjtcbn1cblxuY29uc3Qgb3BlbiA9IChlZGl0b3I6IEVkaXRvciwgY3VycmVudFNlYXJjaFN0YXRlOiBDZWxsPEFjdGlvbnMuU2VhcmNoU3RhdGU+KTogdm9pZCA9PiB7XG4gIGNvbnN0IGRpYWxvZ0FwaSA9IFNpbmdsZXRvbi52YWx1ZTxEaWFsb2cuRGlhbG9nSW5zdGFuY2VBcGk8RGlhbG9nRGF0YT4+KCk7XG4gIGVkaXRvci51bmRvTWFuYWdlci5hZGQoKTtcblxuICBjb25zdCBzZWxlY3RlZFRleHQgPSBUb29scy50cmltKGVkaXRvci5zZWxlY3Rpb24uZ2V0Q29udGVudCh7IGZvcm1hdDogJ3RleHQnIH0pKTtcblxuICBjb25zdCB1cGRhdGVCdXR0b25TdGF0ZXMgPSAoYXBpOiBEaWFsb2cuRGlhbG9nSW5zdGFuY2VBcGk8RGlhbG9nRGF0YT4pOiB2b2lkID0+IHtcbiAgICBhcGkuc2V0RW5hYmxlZCgnbmV4dCcsIEFjdGlvbnMuaGFzTmV4dChlZGl0b3IsIGN1cnJlbnRTZWFyY2hTdGF0ZSkpO1xuICAgIGFwaS5zZXRFbmFibGVkKCdwcmV2JywgQWN0aW9ucy5oYXNQcmV2KGVkaXRvciwgY3VycmVudFNlYXJjaFN0YXRlKSk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlU2VhcmNoU3RhdGUgPSAoYXBpOiBEaWFsb2cuRGlhbG9nSW5zdGFuY2VBcGk8RGlhbG9nRGF0YT4pOiB2b2lkID0+IHtcbiAgICBjb25zdCBkYXRhID0gYXBpLmdldERhdGEoKTtcbiAgICBjb25zdCBjdXJyZW50ID0gY3VycmVudFNlYXJjaFN0YXRlLmdldCgpO1xuXG4gICAgY3VycmVudFNlYXJjaFN0YXRlLnNldCh7XG4gICAgICAuLi5jdXJyZW50LFxuICAgICAgbWF0Y2hDYXNlOiBkYXRhLm1hdGNoY2FzZSxcbiAgICAgIHdob2xlV29yZDogZGF0YS53aG9sZXdvcmRzLFxuICAgICAgaW5TZWxlY3Rpb246IGRhdGEuaW5zZWxlY3Rpb25cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBkaXNhYmxlQWxsID0gKGFwaTogRGlhbG9nLkRpYWxvZ0luc3RhbmNlQXBpPERpYWxvZ0RhdGE+LCBkaXNhYmxlOiBib29sZWFuKTogdm9pZCA9PiB7XG4gICAgY29uc3QgYnV0dG9ucyA9IFsgJ3JlcGxhY2UnLCAncmVwbGFjZWFsbCcsICdwcmV2JywgJ25leHQnIF07XG4gICAgY29uc3QgdG9nZ2xlID0gKG5hbWU6IHN0cmluZykgPT4gYXBpLnNldEVuYWJsZWQobmFtZSwgIWRpc2FibGUpO1xuICAgIEFyci5lYWNoKGJ1dHRvbnMsIHRvZ2dsZSk7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlTm90Rm91bmRBbGVydCA9IChpc1Zpc2libGU6IGJvb2xlYW4sIGFwaTogRGlhbG9nLkRpYWxvZ0luc3RhbmNlQXBpPERpYWxvZ0RhdGE+KTogdm9pZCA9PiB7XG4gICAgYXBpLnJlZGlhbChnZXREaWFsb2dTcGVjKGlzVmlzaWJsZSwgYXBpLmdldERhdGEoKSkpO1xuICB9O1xuXG4gIC8vIFRlbXBvcmFyaWx5IHdvcmthcm91bmQgZm9yIGlPUy9pUGFkT1MgZGlhbG9nIHBsYWNlbWVudCB0byBoaWRlIHRoZSBrZXlib2FyZFxuICAvLyBUT0RPOiBSZW1vdmUgaW4gNS4yIG9uY2UgaU9TIGZpeGVkIHBvc2l0aW9uaW5nIGlzIGZpeGVkLiBTZWUgVElOWS00NDQxXG4gIGNvbnN0IGZvY3VzQnV0dG9uSWZSZXF1aXJlZCA9IChhcGk6IERpYWxvZy5EaWFsb2dJbnN0YW5jZUFwaTxEaWFsb2dEYXRhPiwgbmFtZTogc3RyaW5nKTogdm9pZCA9PiB7XG4gICAgaWYgKEVudi5icm93c2VyLmlzU2FmYXJpKCkgJiYgRW52LmRldmljZVR5cGUuaXNUb3VjaCgpICYmIChuYW1lID09PSAnZmluZCcgfHwgbmFtZSA9PT0gJ3JlcGxhY2UnIHx8IG5hbWUgPT09ICdyZXBsYWNlYWxsJykpIHtcbiAgICAgIGFwaS5mb2N1cyhuYW1lKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVzZXQgPSAoYXBpOiBEaWFsb2cuRGlhbG9nSW5zdGFuY2VBcGk8RGlhbG9nRGF0YT4pOiB2b2lkID0+IHtcbiAgICAvLyBDbGVhbiB1cCB0aGUgbWFya2VycyBpZiByZXF1aXJlZFxuICAgIEFjdGlvbnMuZG9uZShlZGl0b3IsIGN1cnJlbnRTZWFyY2hTdGF0ZSwgZmFsc2UpO1xuXG4gICAgLy8gRGlzYWJsZSB0aGUgYnV0dG9uc1xuICAgIGRpc2FibGVBbGwoYXBpLCB0cnVlKTtcbiAgICB1cGRhdGVCdXR0b25TdGF0ZXMoYXBpKTtcbiAgfTtcblxuICBjb25zdCBkb0ZpbmQgPSAoYXBpOiBEaWFsb2cuRGlhbG9nSW5zdGFuY2VBcGk8RGlhbG9nRGF0YT4pOiB2b2lkID0+IHtcbiAgICBjb25zdCBkYXRhID0gYXBpLmdldERhdGEoKTtcbiAgICBjb25zdCBsYXN0ID0gY3VycmVudFNlYXJjaFN0YXRlLmdldCgpO1xuXG4gICAgaWYgKCFkYXRhLmZpbmR0ZXh0Lmxlbmd0aCkge1xuICAgICAgcmVzZXQoYXBpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBTYW1lIHNlYXJjaCB0ZXh0LCBzbyB0cmVhdCB0aGUgZmluZCBhcyBhIG5leHQgY2xpY2sgaW5zdGVhZFxuICAgIGlmIChsYXN0LnRleHQgPT09IGRhdGEuZmluZHRleHQgJiYgbGFzdC5tYXRjaENhc2UgPT09IGRhdGEubWF0Y2hjYXNlICYmIGxhc3Qud2hvbGVXb3JkID09PSBkYXRhLndob2xld29yZHMpIHtcbiAgICAgIEFjdGlvbnMubmV4dChlZGl0b3IsIGN1cnJlbnRTZWFyY2hTdGF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEZpbmQgbmV3IG1hdGNoZXNcbiAgICAgIGNvbnN0IGNvdW50ID0gQWN0aW9ucy5maW5kKGVkaXRvciwgY3VycmVudFNlYXJjaFN0YXRlLCBkYXRhLmZpbmR0ZXh0LCBkYXRhLm1hdGNoY2FzZSwgZGF0YS53aG9sZXdvcmRzLCBkYXRhLmluc2VsZWN0aW9uKTtcbiAgICAgIGlmIChjb3VudCA8PSAwKSB7XG4gICAgICAgIHRvZ2dsZU5vdEZvdW5kQWxlcnQodHJ1ZSwgYXBpKTtcbiAgICAgIH1cbiAgICAgIGRpc2FibGVBbGwoYXBpLCBjb3VudCA9PT0gMCk7XG4gICAgfVxuXG4gICAgdXBkYXRlQnV0dG9uU3RhdGVzKGFwaSk7XG4gIH07XG5cbiAgY29uc3QgaW5pdGlhbFN0YXRlID0gY3VycmVudFNlYXJjaFN0YXRlLmdldCgpO1xuXG4gIGNvbnN0IGluaXRpYWxEYXRhOiBEaWFsb2dEYXRhID0ge1xuICAgIGZpbmR0ZXh0OiBzZWxlY3RlZFRleHQsXG4gICAgcmVwbGFjZXRleHQ6ICcnLFxuICAgIHdob2xld29yZHM6IGluaXRpYWxTdGF0ZS53aG9sZVdvcmQsXG4gICAgbWF0Y2hjYXNlOiBpbml0aWFsU3RhdGUubWF0Y2hDYXNlLFxuICAgIGluc2VsZWN0aW9uOiBpbml0aWFsU3RhdGUuaW5TZWxlY3Rpb25cbiAgfTtcblxuICBjb25zdCBnZXRQYW5lbEl0ZW1zID0gKGVycm9yOiBib29sZWFuKTogRGlhbG9nLkJvZHlDb21wb25lbnRTcGVjW10gPT4ge1xuICAgIGNvbnN0IGl0ZW1zOiBEaWFsb2cuQm9keUNvbXBvbmVudFNwZWNbXSA9IFtcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ2xhYmVsJyxcbiAgICAgICAgbGFiZWw6ICdGaW5kJyxcbiAgICAgICAgZm9yOiAnZmluZHRleHQnLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdiYXInLFxuICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdpbnB1dCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2ZpbmR0ZXh0JyxcbiAgICAgICAgICAgICAgICBtYXhpbWl6ZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgaW5wdXRNb2RlOiAnc2VhcmNoJ1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3ByZXYnLFxuICAgICAgICAgICAgICAgIHRleHQ6ICdQcmV2aW91cycsXG4gICAgICAgICAgICAgICAgaWNvbjogJ2FjdGlvbi1wcmV2JyxcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBib3JkZXJsZXNzOiB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnbmV4dCcsXG4gICAgICAgICAgICAgICAgdGV4dDogJ05leHQnLFxuICAgICAgICAgICAgICAgIGljb246ICdhY3Rpb24tbmV4dCcsXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgYm9yZGVybGVzczogdHJ1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiAnaW5wdXQnLFxuICAgICAgICBuYW1lOiAncmVwbGFjZXRleHQnLFxuICAgICAgICBsYWJlbDogJ1JlcGxhY2Ugd2l0aCcsXG4gICAgICAgIGlucHV0TW9kZTogJ3NlYXJjaCdcbiAgICAgIH0sXG4gICAgXTtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIGl0ZW1zLnB1c2goe1xuICAgICAgICB0eXBlOiAnYWxlcnRiYW5uZXInLFxuICAgICAgICBsZXZlbDogJ2Vycm9yJyxcbiAgICAgICAgdGV4dDogJ0NvdWxkIG5vdCBmaW5kIHRoZSBzcGVjaWZpZWQgc3RyaW5nLicsXG4gICAgICAgIGljb246ICd3YXJuaW5nJyxcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gaXRlbXM7XG4gIH07XG5cbiAgY29uc3QgZ2V0RGlhbG9nU3BlYyA9IChzaG93Tm9NYXRjaGVzQWxlcnRCYW5uZXI6IGJvb2xlYW4sIGluaXRpYWxEYXRhOiBEaWFsb2dEYXRhKTogRGlhbG9nLkRpYWxvZ1NwZWM8RGlhbG9nRGF0YT4gPT4gKHtcbiAgICB0aXRsZTogJ0ZpbmQgYW5kIFJlcGxhY2UnLFxuICAgIHNpemU6ICdub3JtYWwnLFxuICAgIGJvZHk6IHtcbiAgICAgIHR5cGU6ICdwYW5lbCcsXG4gICAgICBpdGVtczogZ2V0UGFuZWxJdGVtcyhzaG93Tm9NYXRjaGVzQWxlcnRCYW5uZXIpXG4gICAgfSxcbiAgICBidXR0b25zOiBbXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdtZW51JyxcbiAgICAgICAgbmFtZTogJ29wdGlvbnMnLFxuICAgICAgICBpY29uOiAncHJlZmVyZW5jZXMnLFxuICAgICAgICB0b29sdGlwOiAnUHJlZmVyZW5jZXMnLFxuICAgICAgICBhbGlnbjogJ3N0YXJ0JyxcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAndG9nZ2xlbWVudWl0ZW0nLFxuICAgICAgICAgICAgbmFtZTogJ21hdGNoY2FzZScsXG4gICAgICAgICAgICB0ZXh0OiAnTWF0Y2ggY2FzZSdcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICB0eXBlOiAndG9nZ2xlbWVudWl0ZW0nLFxuICAgICAgICAgICAgbmFtZTogJ3dob2xld29yZHMnLFxuICAgICAgICAgICAgdGV4dDogJ0ZpbmQgd2hvbGUgd29yZHMgb25seSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICd0b2dnbGVtZW51aXRlbScsXG4gICAgICAgICAgICBuYW1lOiAnaW5zZWxlY3Rpb24nLFxuICAgICAgICAgICAgdGV4dDogJ0ZpbmQgaW4gc2VsZWN0aW9uJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ2N1c3RvbScsXG4gICAgICAgIG5hbWU6ICdmaW5kJyxcbiAgICAgICAgdGV4dDogJ0ZpbmQnLFxuICAgICAgICBwcmltYXJ5OiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiAnY3VzdG9tJyxcbiAgICAgICAgbmFtZTogJ3JlcGxhY2UnLFxuICAgICAgICB0ZXh0OiAnUmVwbGFjZScsXG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiAnY3VzdG9tJyxcbiAgICAgICAgbmFtZTogJ3JlcGxhY2VhbGwnLFxuICAgICAgICB0ZXh0OiAnUmVwbGFjZSBhbGwnLFxuICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgIH1cbiAgICBdLFxuICAgIGluaXRpYWxEYXRhLFxuICAgIG9uQ2hhbmdlOiAoYXBpLCBkZXRhaWxzKSA9PiB7XG4gICAgICBpZiAoc2hvd05vTWF0Y2hlc0FsZXJ0QmFubmVyKSB7XG4gICAgICAgIHRvZ2dsZU5vdEZvdW5kQWxlcnQoZmFsc2UsIGFwaSk7XG4gICAgICB9XG4gICAgICBpZiAoZGV0YWlscy5uYW1lID09PSAnZmluZHRleHQnICYmIGN1cnJlbnRTZWFyY2hTdGF0ZS5nZXQoKS5jb3VudCA+IDApIHtcbiAgICAgICAgcmVzZXQoYXBpKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQWN0aW9uOiAoYXBpLCBkZXRhaWxzKSA9PiB7XG4gICAgICBjb25zdCBkYXRhID0gYXBpLmdldERhdGEoKTtcbiAgICAgIHN3aXRjaCAoZGV0YWlscy5uYW1lKSB7XG4gICAgICAgIGNhc2UgJ2ZpbmQnOlxuICAgICAgICAgIGRvRmluZChhcGkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdyZXBsYWNlJzpcbiAgICAgICAgICBpZiAoIUFjdGlvbnMucmVwbGFjZShlZGl0b3IsIGN1cnJlbnRTZWFyY2hTdGF0ZSwgZGF0YS5yZXBsYWNldGV4dCkpIHtcbiAgICAgICAgICAgIHJlc2V0KGFwaSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHVwZGF0ZUJ1dHRvblN0YXRlcyhhcGkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncmVwbGFjZWFsbCc6XG4gICAgICAgICAgQWN0aW9ucy5yZXBsYWNlKGVkaXRvciwgY3VycmVudFNlYXJjaFN0YXRlLCBkYXRhLnJlcGxhY2V0ZXh0LCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICByZXNldChhcGkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdwcmV2JzpcbiAgICAgICAgICBBY3Rpb25zLnByZXYoZWRpdG9yLCBjdXJyZW50U2VhcmNoU3RhdGUpO1xuICAgICAgICAgIHVwZGF0ZUJ1dHRvblN0YXRlcyhhcGkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICduZXh0JzpcbiAgICAgICAgICBBY3Rpb25zLm5leHQoZWRpdG9yLCBjdXJyZW50U2VhcmNoU3RhdGUpO1xuICAgICAgICAgIHVwZGF0ZUJ1dHRvblN0YXRlcyhhcGkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdtYXRjaGNhc2UnOlxuICAgICAgICBjYXNlICd3aG9sZXdvcmRzJzpcbiAgICAgICAgY2FzZSAnaW5zZWxlY3Rpb24nOlxuICAgICAgICAgIHRvZ2dsZU5vdEZvdW5kQWxlcnQoZmFsc2UsIGFwaSk7XG4gICAgICAgICAgdXBkYXRlU2VhcmNoU3RhdGUoYXBpKTtcbiAgICAgICAgICByZXNldChhcGkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBmb2N1c0J1dHRvbklmUmVxdWlyZWQoYXBpLCBkZXRhaWxzLm5hbWUpO1xuICAgIH0sXG4gICAgb25TdWJtaXQ6IChhcGkpID0+IHtcbiAgICAgIGRvRmluZChhcGkpO1xuICAgICAgZm9jdXNCdXR0b25JZlJlcXVpcmVkKGFwaSwgJ2ZpbmQnKTtcbiAgICB9LFxuICAgIG9uQ2xvc2U6ICgpID0+IHtcbiAgICAgIGVkaXRvci5mb2N1cygpO1xuICAgICAgQWN0aW9ucy5kb25lKGVkaXRvciwgY3VycmVudFNlYXJjaFN0YXRlKTtcbiAgICAgIGVkaXRvci51bmRvTWFuYWdlci5hZGQoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGRpYWxvZ0FwaS5zZXQoZWRpdG9yLndpbmRvd01hbmFnZXIub3BlbihnZXREaWFsb2dTcGVjKGZhbHNlLCBpbml0aWFsRGF0YSksIHsgaW5saW5lOiAndG9vbGJhcicgfSkpO1xufTtcblxuZXhwb3J0IHtcbiAgb3BlblxufTtcbiIsImltcG9ydCAqIGFzIFR5cGUgZnJvbSAnLi4vY29yZS9UeXBlJztcbmltcG9ydCAqIGFzIEFycmF5VXRpbCBmcm9tICcuLi9jb3JlL0FycmF5VXRpbCc7XG5cbi8qKiBBIHdheSBvZiBjb21wYXJpbmcgdHdvIHZhbHVlcyBvZiB0aGUgc2FtZSB0eXBlIGZvciBlcXVhbGl0eS4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRXE8QT4ge1xuICBlcTogKHg6IEEsIHk6IEEpID0+IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBjb250cmFtYXAgPSA8QSwgQj4gKGVxYTogRXE8QT4sIGY6IChiOiBCKSA9PiBBKTogRXE8Qj4gPT5cbiAgZXEoKHgsIHkpID0+IGVxYS5lcShmKHgpLCBmKHkpKSk7XG5cbmV4cG9ydCBjb25zdCBlcSA9IDxBPiAoZjogKHg6IEEsIHk6IEEpID0+IGJvb2xlYW4pOiBFcTxBPiA9PlxuICAoeyBlcTogZiB9KTtcblxuZXhwb3J0IGNvbnN0IHRyaXBsZUVxOiBFcTxhbnk+ID0gZXEoKHgsIHkpID0+IHggPT09IHkpO1xuXG5leHBvcnQgY29uc3QgZXFTdHJpbmc6IEVxPHN0cmluZz4gPSB0cmlwbGVFcTtcblxuZXhwb3J0IGNvbnN0IGVxQm9vbGVhbjogRXE8Ym9vbGVhbj4gPSB0cmlwbGVFcTtcblxuZXhwb3J0IGNvbnN0IGVxTnVtYmVyOiBFcTxudW1iZXI+ID0gdHJpcGxlRXE7XG5cbmV4cG9ydCBjb25zdCBlcVVuZGVmaW5lZDogRXE8dW5kZWZpbmVkPiA9IHRyaXBsZUVxO1xuXG5leHBvcnQgY29uc3QgZXFOdWxsOiBFcTxudWxsPiA9IHRyaXBsZUVxO1xuXG5leHBvcnQgY29uc3QgZXFBcnJheSA9IDxBPiAoZXFhOiBFcTxBPik6IEVxPEFycmF5TGlrZTxBPj4gPT4gZXEoKHgsIHkpID0+IHtcbiAgaWYgKHgubGVuZ3RoICE9PSB5Lmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBsZW4gPSB4Lmxlbmd0aDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGlmICghZXFhLmVxKHhbaV0sIHlbaV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufSk7XG5cbi8vIFRPRE86IE1ha2UgYW4gT3JkIHR5cGVjbGFzc1xuY29uc3QgZXFTb3J0ZWRBcnJheSA9IDxBPihlcWE6IEVxPEE+LCBjb21wYXJlRm4/OiAoYTogQSwgYjogQSkgPT4gbnVtYmVyKTogRXE8QXJyYXlMaWtlPEE+PiA9PlxuICBjb250cmFtYXAoZXFBcnJheShlcWEpLCAoeHMpID0+IEFycmF5VXRpbC5zb3J0KHhzLCBjb21wYXJlRm4pKTtcblxuZXhwb3J0IGNvbnN0IGVxUmVjb3JkID0gPEE+IChlcWE6IEVxPEE+KTogRXE8UmVjb3JkPHN0cmluZywgQT4+ID0+IGVxKCh4LCB5KSA9PiB7XG4gIGNvbnN0IGt4ID0gT2JqZWN0LmtleXMoeCk7XG4gIGNvbnN0IGt5ID0gT2JqZWN0LmtleXMoeSk7XG4gIGlmICghZXFTb3J0ZWRBcnJheShlcVN0cmluZykuZXEoa3gsIGt5KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBsZW4gPSBreC5sZW5ndGg7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCBxID0ga3hbaV07XG4gICAgaWYgKCFlcWEuZXEoeFtxXSwgeVtxXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59KTtcblxuZXhwb3J0IGNvbnN0IGVxQW55OiBFcTxhbnk+ID0gZXEoKHgsIHkpID0+IHtcbiAgaWYgKHggPT09IHkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IHR4ID0gVHlwZS50eXBlT2YoeCk7XG4gIGNvbnN0IHR5ID0gVHlwZS50eXBlT2YoeSk7XG4gIGlmICh0eCAhPT0gdHkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoVHlwZS5pc0VxdWF0YWJsZVR5cGUodHgpKSB7XG4gICAgcmV0dXJuIHggPT09IHk7XG5cbiAgfSBlbHNlIGlmICh0eCA9PT0gJ2FycmF5Jykge1xuICAgIHJldHVybiBlcUFycmF5KGVxQW55KS5lcSh4LCB5KTtcblxuICB9IGVsc2UgaWYgKHR4ID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBlcVJlY29yZChlcUFueSkuZXEoeCwgeSk7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59KTtcbiIsImV4cG9ydCBjb25zdCBtYXAgPSA8QSwgQj4oeHM6IEFycmF5TGlrZTxBPiwgZjogKGE6IEEpID0+IEIpOiBCW10gPT4ge1xuICBjb25zdCBsZW4gPSB4cy5sZW5ndGg7XG4gIGNvbnN0IHIgPSBuZXcgQXJyYXkobGVuKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICByW2ldID0gZih4KTtcbiAgfVxuICByZXR1cm4gcjtcbn07XG5cbi8qKiBtYXAgYSBmdW5jdGlvbiBvdmVyIGFuIGFycmF5LCB0aGVuIG1hcCBhbm90aGVyIGZ1bmN0aW9uIG92ZXIgZXZlcnkgaXRlbSBleGNlcHQgdGhlIGxhc3QgKi9cbmV4cG9ydCBjb25zdCBtYXBEZWxpbWl0ID0gPEEsIEI+ICh4czogQXJyYXlMaWtlPEE+LCBmOiAoYTogQSkgPT4gQiwgZGVsaW1pdDogKGI6IEIpID0+IEIpOiBCW10gPT4ge1xuICBjb25zdCBsZW4gPSB4cy5sZW5ndGg7XG4gIGNvbnN0IHIgPSBuZXcgQXJyYXkobGVuKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW4gLSAxOyBpKyspIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgcltpXSA9IGRlbGltaXQoZih4KSk7XG4gIH1cbiAgaWYgKGxlbiA+IDApIHtcbiAgICByW2xlbiAtIDFdID0gKGYoeHNbbGVuIC0gMV0pKTtcbiAgfVxuXG4gIHJldHVybiByO1xufTtcblxuZXhwb3J0IGNvbnN0IHNvcnQgPSA8QT4gKHhzOiBBcnJheUxpa2U8QT4sIGNvbXBhcmVGbj86IChhOiBBLCBiOiBBKSA9PiBudW1iZXIpOiBBW10gPT4ge1xuICBjb25zdCBjbG9uZTogQVtdID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoeHMpO1xuICByZXR1cm4gY2xvbmUuc29ydChjb21wYXJlRm4pO1xufTtcbiIsImV4cG9ydCBjb25zdCB0eXBlT2YgPSAoeDogYW55KSA9PiB7XG4gIGlmICh4ID09PSBudWxsKSB7XG4gICAgcmV0dXJuICdudWxsJztcbiAgfVxuICBpZiAoeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuICd1bmRlZmluZWQnO1xuICB9XG4gIGNvbnN0IHQgPSB0eXBlb2YgeDtcbiAgaWYgKHQgPT09ICdvYmplY3QnICYmIChBcnJheS5wcm90b3R5cGUuaXNQcm90b3R5cGVPZih4KSB8fCB4LmNvbnN0cnVjdG9yICYmIHguY29uc3RydWN0b3IubmFtZSA9PT0gJ0FycmF5JykpIHtcbiAgICByZXR1cm4gJ2FycmF5JztcbiAgfVxuICBpZiAodCA9PT0gJ29iamVjdCcgJiYgKFN0cmluZy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZih4KSB8fCB4LmNvbnN0cnVjdG9yICYmIHguY29uc3RydWN0b3IubmFtZSA9PT0gJ1N0cmluZycpKSB7XG4gICAgcmV0dXJuICdzdHJpbmcnO1xuICB9XG4gIHJldHVybiB0O1xufTtcblxuY29uc3QgaXNUeXBlID0gPFQ+KHR5cGU6IHN0cmluZykgPT4gKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBUID0+IHR5cGVPZih2YWx1ZSkgPT09IHR5cGU7XG5cbmV4cG9ydCBjb25zdCBpc1N0cmluZyA9IGlzVHlwZTxzdHJpbmc+KCdzdHJpbmcnKTtcbmV4cG9ydCBjb25zdCBpc09iamVjdCA9IGlzVHlwZTxPYmplY3Q+KCdvYmplY3QnKTtcbmV4cG9ydCBjb25zdCBpc0FycmF5ID0gaXNUeXBlPEFycmF5PHVua25vd24+PignYXJyYXknKTtcbmV4cG9ydCBjb25zdCBpc051bGwgPSBpc1R5cGU8bnVsbD4oJ251bGwnKTtcbmV4cG9ydCBjb25zdCBpc0Jvb2xlYW4gPSBpc1R5cGU8Ym9vbGVhbj4oJ2Jvb2xlYW4nKTtcbmV4cG9ydCBjb25zdCBpc1VuZGVmaW5lZCA9IGlzVHlwZTx1bmRlZmluZWQ+KCd1bmRlZmluZWQnKTtcbmV4cG9ydCBjb25zdCBpc0Z1bmN0aW9uID0gaXNUeXBlPEZ1bmN0aW9uPignZnVuY3Rpb24nKTtcbmV4cG9ydCBjb25zdCBpc051bWJlciA9IGlzVHlwZTxudW1iZXI+KCdudW1iZXInKTtcblxuZXhwb3J0IGNvbnN0IGlzRXF1YXRhYmxlVHlwZSA9ICh4OiBzdHJpbmcpOiBib29sZWFuID0+XG4gIFsgJ3VuZGVmaW5lZCcsICdib29sZWFuJywgJ251bWJlcicsICdzdHJpbmcnLCAnZnVuY3Rpb24nLCAneG1sJywgJ251bGwnIF0uaW5kZXhPZih4KSAhPT0gLTE7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG4gICAgICAgIGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcbiAgICAgICAgfVxuICAgIH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucnYgPSAoKSA9PiAoXCIxLjUuMlwiKSIsIl9fd2VicGFja19yZXF1aXJlX18ucnVpZCA9IFwiYnVuZGxlcj1yc3BhY2tAMS41LjJcIjtcbiIsImltcG9ydCBQbHVnaW4gZnJvbSAnLi9QbHVnaW4nO1xuXG5QbHVnaW4oKTtcblxuLyoqICoqKioqXG4gKiBETyBOT1QgRVhQT1JUIEFOWVRISU5HXG4gKlxuICogSUYgWU9VIERPIFJPTExVUCBXSUxMIExFQVZFIEEgR0xPQkFMIE9OIFRIRSBQQUdFXG4gKioqKioqKi9cbiJdLCJuYW1lcyI6WyJFcSIsIkZ1biIsIk9wdGlvbmFsIiwiVHlwZSIsIm5hdGl2ZVNsaWNlIiwiQXJyYXkiLCJuYXRpdmVJbmRleE9mIiwibmF0aXZlUHVzaCIsInJhd0luZGV4T2YiLCJ0cyIsInQiLCJpbmRleE9mIiwieHMiLCJ4IiwiciIsImNvbnRhaW5zIiwiZXhpc3RzIiwicHJlZCIsImkiLCJsZW4iLCJyYW5nZSIsIm51bSIsImYiLCJjaHVuayIsImFycmF5Iiwic2l6ZSIsInMiLCJtYXAiLCJlYWNoIiwiZWFjaHIiLCJwYXJ0aXRpb24iLCJwYXNzIiwiZmFpbCIsImFyciIsImZpbHRlciIsImdyb3VwQnkiLCJ3YXNUeXBlIiwiZ3JvdXAiLCJ0eXBlIiwiZm9sZHIiLCJhY2MiLCJmb2xkbCIsImZpbmRVbnRpbCIsInVudGlsIiwiZmluZCIsImZpbmRJbmRleCIsImZpbmRMYXN0SW5kZXgiLCJmbGF0dGVuIiwiRXJyb3IiLCJiaW5kIiwiZm9yYWxsIiwiZXF1YWwiLCJhMSIsImEyIiwiZXEiLCJyZXZlcnNlIiwiZGlmZmVyZW5jZSIsIm1hcFRvT2JqZWN0IiwiU3RyaW5nIiwicHVyZSIsInNvcnQiLCJjb21wYXJhdG9yIiwiY29weSIsImdldCIsImhlYWQiLCJsYXN0IiwiZnJvbSIsImZpbmRNYXAiLCJ1bmlxdWUiLCJpc0R1cGxpY2F0ZWQiLCJDZWxsIiwiaW5pdGlhbCIsInZhbHVlIiwic2V0IiwidiIsIm5vb3AiLCJub2FyZyIsImNvbXBvc2UiLCJmYSIsImZiIiwiYXJncyIsImNvbXBvc2UxIiwiZmJjIiwiZmFiIiwiYSIsImNvbnN0YW50IiwiaWRlbnRpdHkiLCJ0cmlwbGVFcXVhbHMiLCJiIiwiY3VycnkiLCJmbiIsImluaXRpYWxBcmdzIiwicmVzdEFyZ3MiLCJhbGwiLCJub3QiLCJkaWUiLCJtc2ciLCJhcHBseSIsImNhbGwiLCJuZXZlciIsImFsd2F5cyIsIndlYWtlbiIsInBpcGUiLCJhYiIsImJjIiwiY2QiLCJkZSIsImVmIiwiZmciLCJnaCIsImMiLCJkIiwiZSIsImciLCJHbG9iYWwiLCJ3aW5kb3ciLCJGdW5jdGlvbiIsImtleXMiLCJPYmplY3QiLCJoYXNPd25Qcm9wZXJ0eSIsIm9iaiIsInByb3BzIiwiayIsInR1cGxlTWFwIiwidHVwbGUiLCJvYmpBY2MiLCJpbnRlcm5hbEZpbHRlciIsIm9uVHJ1ZSIsIm9uRmFsc2UiLCJiaWZpbHRlciIsIm1hcFRvQXJyYXkiLCJuYW1lIiwidmFsdWVzIiwia2V5IiwiaGFzIiwiaGFzTm9uTnVsbGFibGVLZXkiLCJ1bmRlZmluZWQiLCJpc0VtcHR5IiwidGFnIiwib25Ob25lIiwib25Tb21lIiwibWFwcGVyIiwiYmluZGVyIiwicHJlZGljYXRlIiwicmVwbGFjZW1lbnQiLCJ0aHVuayIsIm1lc3NhZ2UiLCJ3b3JrZXIiLCJlc2NhcGUiLCJ0ZXh0IiwicGF0aCIsInBhcnRzIiwic2NvcGUiLCJvIiwicmVzb2x2ZSIsInAiLCJzdGVwIiwicGFydCIsImZvcmdlIiwidGFyZ2V0IiwibmFtZXNwYWNlIiwic2luZ2xldG9uIiwiZG9SZXZva2UiLCJzdWJqZWN0IiwicmV2b2tlIiwiY2xlYXIiLCJpc1NldCIsInJlcGVhdGFibGUiLCJkZWxheSIsImludGVydmFsSWQiLCJpZCIsImNsZWFySW50ZXJ2YWwiLCJmdW5jdGlvblRvUmVwZWF0Iiwic2V0SW50ZXJ2YWwiLCJkZXN0cm95YWJsZSIsInVuYmluZGFibGUiLCJhcGkiLCJydW4iLCJvbiIsImdldFByb3RvdHlwZU9mIiwiaGFzUHJvdG8iLCJjb25zdHJ1Y3RvciIsInR5cGVPZiIsInByb3RvIiwiaXNUeXBlIiwiaXNTaW1wbGVUeXBlIiwiaXMiLCJpc09iamVjdCIsImlzU3RyaW5nIiwiaXNQbGFpbk9iamVjdCIsImlzQXJyYXkiLCJpc051bGwiLCJpc0Jvb2xlYW4iLCJpc1VuZGVmaW5lZCIsImlzTnVsbGFibGUiLCJpc05vbk51bGxhYmxlIiwiaXNGdW5jdGlvbiIsImlzTnVtYmVyIiwiaXNBcnJheU9mIiwiaXNQcm9taXNlTGlrZSIsInplcm9XaWR0aCIsIm5ic3AiLCJzb2Z0SHlwaGVuIiwiZWxsaXBzaXMiLCJpc1p3c3AiLCJjaGFyIiwicmVtb3ZlWndzcCIsIkNoYXJzIiwiQ3VzdG9tIiwiU2FmZSIsIlVuc2FmZSIsInNhZmV3b3JkIiwic2FmZXRva2VuIiwiY3VzdG9tIiwidW5zYWZld29yZCIsInVuc2FmZXRva2VuIiwic2FuaXRpc2UiLCJjaGFycyIsIndvcmRicmVhayIsIndvcmRjaGFyIiwicHVuY3R1YXRpb24iLCJVbmljb2RlIiwicHVuY3R1YXRpb25TdHIiLCJjaGFyc1N0ciIsIndvcmRicmVha1N0ciIsIndvcmRjaGFyU3RyIiwicmVnZXgiLCJwcmVmaXgiLCJzdWZmaXgiLCJmbGFncyIsInRlcm0iLCJSZWdFeHAiLCJSZWdleCIsIndvcmQiLCJpbnB1dCIsInRva2VuIiwibWF0Y2giLCJyZWdFeHBzIiwiY2hhcmFjdGVySW5kaWNlcyIsIlNFVFMiLCJFTVBUWV9TVFJJTkciLCJQVU5DVFVBVElPTiIsIldISVRFU1BBQ0UiLCJSZXNvbHZlIiwic2FuZEhUTUxFbGVtZW50IiwiaXNQcm90b3R5cGVPZiIsImNvbXBhcmVEb2N1bWVudFBvc2l0aW9uIiwiZG9jdW1lbnRQb3NpdGlvblByZWNlZGluZyIsIk5vZGUiLCJkb2N1bWVudFBvc2l0aW9uQ29udGFpbmVkQnkiLCJ1bnNhZmUiLCJnZXRPckRpZSIsImFjdHVhbCIsInRvQXJyYXkiLCJyZWN1cnNlIiwiY3VyIiwiQXJyIiwiU2VsZWN0b3JzIiwiZTEiLCJlMiIsImlzRXF1YWxOb2RlIiwibWVtYmVyIiwiZWxlbWVudCIsImVsZW1lbnRzIiwiZDEiLCJkMiIsIlRyYXZlcnNlIiwiYmVmb3JlIiwibWFya2VyIiwicGFyZW50IiwiYWZ0ZXIiLCJzaWJsaW5nIiwiYXBwZW5kIiwicHJlcGVuZCIsImZpcnN0Q2hpbGQiLCJhcHBlbmRBdCIsImluZGV4Iiwid3JhcCIsIndyYXBwZXIiLCJBVFRSSUJVVEUiLCJDREFUQV9TRUNUSU9OIiwiQ09NTUVOVCIsIkRPQ1VNRU5UIiwiRE9DVU1FTlRfVFlQRSIsIkRPQ1VNRU5UX0ZSQUdNRU5UIiwiRUxFTUVOVCIsIlRFWFQiLCJQUk9DRVNTSU5HX0lOU1RSVUNUSU9OIiwiRU5USVRZX1JFRkVSRU5DRSIsIkVOVElUWSIsIk5PVEFUSU9OIiwiU3VnYXJFbGVtZW50IiwiU3VnYXJOb2RlIiwiZ2V0U2hhZG93SG9zdCIsImdldFNoYWRvd1Jvb3QiLCJpbkJvZHkiLCJkb20iLCJkb2MiLCJib2R5IiwiZ2V0Qm9keSIsImRvY3VtZW50IiwiZnJvbUh0bWwiLCJodG1sIiwiZGl2IiwiY29uc29sZSIsImZyb21Eb20iLCJmcm9tVGFnIiwibm9kZSIsImZyb21UZXh0IiwiZnJvbVBvaW50IiwiZG9jRWxtIiwieSIsImdldEhlYWQiLCJTYW5kSFRNTEVsZW1lbnQiLCJOb2RlVHlwZXMiLCJpc0NvbW1lbnQiLCJpc0hUTUxFbGVtZW50IiwiaXNFbGVtZW50IiwiaXNUZXh0IiwiaXNEb2N1bWVudCIsImlzRG9jdW1lbnRGcmFnbWVudCIsImlzVGFnIiwiU3VnYXJIZWFkIiwiaXNTaGFkb3dSb290IiwiZG9zIiwiZ2V0Um9vdE5vZGUiLCJjcmVhdGVFbGVtZW50IiwiZ2V0U3R5bGVDb250YWluZXIiLCJnZXRDb250ZW50Q29udGFpbmVyIiwiaXNJblNoYWRvd1Jvb3QiLCJnZXRPcmlnaW5hbEV2ZW50VGFyZ2V0IiwiZXZlbnQiLCJlbCIsImlzT3BlblNoYWRvd0hvc3QiLCJjb21wb3NlZFBhdGgiLCJpc09wZW5TaGFkb3dSb290Iiwic3IiLCJpc0Nsb3NlZFNoYWRvd1Jvb3QiLCJOb2RlVmFsdWUiLCJnZXRPcHRpb24iLCJPYmoiLCJyYXdTZXQiLCJzZXRBbGwiLCJhdHRycyIsInNldE9wdGlvbnMiLCJyZW1vdmUiLCJnZXRPcHQiLCJoYXNOb25lIiwiY2xvbmUiLCJhdHRyIiwidHJhbnNmZXJPbmUiLCJzb3VyY2UiLCJkZXN0aW5hdGlvbiIsInNyY1ZhbHVlIiwidHJhbnNmZXIiLCJTdWdhckJvZHkiLCJkZXNjZW5kYW50cyIsImFuY2VzdG9ycyIsImlzUm9vdCIsInNpYmxpbmdzIiwiY2hpbGRyZW4iLCJyZXN1bHQiLCJQcmVkaWNhdGVGaWx0ZXIiLCJzZWxlY3RvciIsImVsZW0iLCJieXBhc3NTZWxlY3RvciIsImJhc2UiLCJvbmUiLCJSZWN1cnNlIiwiQ29tcGFyZSIsIm93bmVyIiwiZG9jdW1lbnRPck93bmVyIiwiZG9jdW1lbnRFbGVtZW50IiwiZGVmYXVsdFZpZXciLCJwYXJlbnROb2RlIiwicGFyZW50RWxlbWVudCIsImtpbiIsInBhcmVudHMiLCJzdG9wIiwicmV0IiwicmF3UGFyZW50IiwiZmlsdGVyU2VsZiIsIm9mZnNldFBhcmVudCIsInByZXZTaWJsaW5nIiwibmV4dFNpYmxpbmciLCJwcmV2U2libGluZ3MiLCJuZXh0U2libGluZ3MiLCJjaGlsZCIsImNzIiwibGFzdENoaWxkIiwiY2hpbGROb2Rlc0NvdW50IiwiaGFzQ2hpbGROb2RlcyIsInNwb3QiLCJvZmZzZXQiLCJsZWFmIiwiUGx1Z2luTWFuYWdlciIsIkFwaSIsIkNvbW1hbmRzIiwiQnV0dG9ucyIsImVkaXRvciIsImN1cnJlbnRTZWFyY2hTdGF0ZSIsIkFjdGlvbnMiLCJjdXJyZW50U3RhdGUiLCJkb25lIiwia2VlcEVkaXRvclNlbGVjdGlvbiIsIm1hdGNoQ2FzZSIsIndob2xlV29yZCIsImluU2VsZWN0aW9uIiwibmV4dCIsInByZXYiLCJyZXBsYWNlIiwiZm9yd2FyZCIsIkRpYWxvZyIsInJlZ2lzdGVyIiwiUGF0dGVybiIsIlBvbGFyaXNQYXR0ZXJuIiwiRW52IiwiVG9vbHMiLCJGaW5kTWFyayIsImdldEVsbUluZGV4IiwiZWxtIiwibWFya0FsbE1hdGNoZXMiLCJwYXR0ZXJuIiwidW53cmFwIiwiZmluZFNwYW5zQnlJbmRleCIsInNwYW5zIiwibm9kZXMiLCJub2RlSW5kZXgiLCJtb3ZlU2VsZWN0aW9uIiwic2VhcmNoU3RhdGUiLCJ0ZXN0SW5kZXgiLCJyZW1vdmVOb2RlIiwiZXNjYXBlU2VhcmNoVGV4dCIsImVzY2FwZWRUZXh0Iiwid29yZFJlZ2V4Iiwic2VsZWN0aW9uIiwiaXNGb3J3YXJkU2VsZWN0aW9uIiwiY291bnQiLCJuZXdJbmRleCIsImlzTWF0Y2hTcGFuIiwibWF0Y2hJbmRleCIsImN1cnJlbnRJbmRleCIsImN1cnJlbnRNYXRjaEluZGV4IiwibmV4dEluZGV4IiwicGFyc2VJbnQiLCJzdGFydENvbnRhaW5lciIsImVuZENvbnRhaW5lciIsInJuZyIsImhhc05leHQiLCJoYXNQcmV2IiwiQXR0cmlidXRlIiwiSW5zZXJ0IiwiU3VnYXJUZXh0IiwiVGV4dENvbGxlY3QiLCJUZXh0UG9zaXRpb24iLCJzZWN0aW9ucyIsInNlY3Rpb24iLCJjb250ZW50IiwicG9zaXRpb25zIiwibWFyayIsIm1hdGNoZXMiLCJyZXBsYWNlbWVudE5vZGUiLCJpZHgiLCJwb3MiLCJ0ZXh0Tm9kZSIsIm1hdGNoTm9kZSIsImZpbmRBbmRNYXJrIiwidGV4dFNlY3Rpb25zIiwiZmluZEFuZE1hcmtJblNlbGVjdGlvbiIsImJvb2ttYXJrIiwiU2FuZE5vZGUiLCJTZWxlY3RvckZpbHRlciIsIkRvbVRyZWVXYWxrZXIiLCJpc1NpbXBsZUJvdW5kYXJ5IiwiaXNDb250ZW50RWRpdGFibGVGYWxzZSIsImlzQ29udGVudEVkaXRhYmxlVHJ1ZUluQ2VmIiwiaXNIaWRkZW4iLCJpc0JvdW5kYXJ5IiwibnVTZWN0aW9uIiwidG9MZWFmIiwid2FsayIsIndhbGtlckZuIiwic3RhcnROb2RlIiwiY2FsbGJhY2tzIiwiZW5kTm9kZSIsInNraXBTdGFydCIsImlzQ2VmTm9kZSIsInN0b3BXYWxraW5nIiwiY29sbGVjdFRleHRUb0JvdW5kYXJ5Iiwicm9vdE5vZGUiLCJmb3J3YXJkcyIsInJvb3RCbG9jayIsIndhbGtlciIsImNvbGxlY3QiLCJjdXJyZW50IiwiZmluaXNoU2VjdGlvbiIsImNvbGxlY3RSYW5nZVNlY3Rpb25zIiwic3RhcnQiLCJlbmQiLCJjZVRydWVOb2RlIiwiZnJvbVJuZyIsImZyb21Ob2RlIiwiZnJvbU5vZGVzIiwiZmluaXNoIiwicmVzdWx0cyIsIm1hdGNoZWRUZXh0IiwibWF0Y2hTdGFydCIsIm1hdGNoRmluaXNoIiwiZXh0cmFjdCIsIm5vZGVQb3NpdGlvbnMiLCJtYXRjaElkeCIsIk1hdGgiLCJwb3NpdGlvbiIsInNob3dEaWFsb2ciLCJTaW5nbGV0b24iLCJvcGVuIiwiZGlhbG9nQXBpIiwic2VsZWN0ZWRUZXh0IiwidXBkYXRlQnV0dG9uU3RhdGVzIiwidXBkYXRlU2VhcmNoU3RhdGUiLCJkYXRhIiwiZGlzYWJsZUFsbCIsImRpc2FibGUiLCJidXR0b25zIiwidG9nZ2xlIiwidG9nZ2xlTm90Rm91bmRBbGVydCIsImlzVmlzaWJsZSIsImdldERpYWxvZ1NwZWMiLCJmb2N1c0J1dHRvbklmUmVxdWlyZWQiLCJyZXNldCIsImRvRmluZCIsImluaXRpYWxTdGF0ZSIsImluaXRpYWxEYXRhIiwiZ2V0UGFuZWxJdGVtcyIsImVycm9yIiwiaXRlbXMiLCJzaG93Tm9NYXRjaGVzQWxlcnRCYW5uZXIiLCJkZXRhaWxzIiwiUGx1Z2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsNkRBQWUsTUFBTSxFQUFDO0FBQ2Y7Ozs7Ozs7Ozs7Ozs7O0FDSFA7O0FBRUEsNkRBQWUsTUFBTSxFQUFDO0FBQ2Y7Ozs7Ozs7Ozs7Ozs7O0FDSFA7O0FBRUEsNkRBQWUsTUFBTSxFQUFDO0FBQ2Y7Ozs7Ozs7Ozs7Ozs7O0FDSFA7O0FB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