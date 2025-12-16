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
"./lib/globals/tinymce/core/api/dom/ScriptLoader.js": 
/*!**********************************************************!*\
  !*** ./lib/globals/tinymce/core/api/dom/ScriptLoader.js ***!
  \**********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ScriptLoader: () => (ScriptLoader),
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
var global = tinymce.util.Tools.resolve('tinymce.dom.ScriptLoader');

/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (global);
var ScriptLoader = global;


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
"../sugar/src/main/ts/ephox/sugar/api/dom/Link.ts": 
/*!********************************************************!*\
  !*** ../sugar/src/main/ts/ephox/sugar/api/dom/Link.ts ***!
  \********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  addStylesheet: () => (addStylesheet),
  getPreventClicksOnLinksScript: () => (getPreventClicksOnLinksScript)
});
/* ESM import */var _node_SugarElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node/SugarElement */ "../sugar/src/main/ts/ephox/sugar/api/node/SugarElement.ts");
/* ESM import */var _node_SugarHead__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node/SugarHead */ "../sugar/src/main/ts/ephox/sugar/api/node/SugarHead.ts");
/* ESM import */var _properties_Attribute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../properties/Attribute */ "../sugar/src/main/ts/ephox/sugar/api/properties/Attribute.ts");
/* ESM import */var _view_Platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view/Platform */ "../sugar/src/main/ts/ephox/sugar/api/view/Platform.ts");
/* ESM import */var _Insert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Insert */ "../sugar/src/main/ts/ephox/sugar/api/dom/Insert.ts");





const addToHead = (doc, tag)=>{
    const head = _node_SugarHead__WEBPACK_IMPORTED_MODULE_0__.getHead(doc);
    _Insert__WEBPACK_IMPORTED_MODULE_1__.append(head, tag);
};
const addStylesheet = (url, scope)=>{
    const doc = scope || _node_SugarElement__WEBPACK_IMPORTED_MODULE_2__.SugarElement.fromDom(document);
    const link = _node_SugarElement__WEBPACK_IMPORTED_MODULE_2__.SugarElement.fromTag('link', doc.dom); // We really need to fix that SugarElement API
    _properties_Attribute__WEBPACK_IMPORTED_MODULE_3__.setAll(link, {
        rel: 'stylesheet',
        type: 'text/css',
        href: url
    });
    addToHead(doc, link);
    return link;
};
const getPreventClicksOnLinksScript = ()=>{
    const isMacOSOrIOS = _view_Platform__WEBPACK_IMPORTED_MODULE_4__.isMacOS() || _view_Platform__WEBPACK_IMPORTED_MODULE_4__.isiOS();
    const fn = (isMacOSOrIOS)=>{
        document.addEventListener('click', (e)=>{
            for(let elm = e.target; elm; elm = elm.parentNode){
                if (elm.nodeName === 'A') {
                    const anchor = elm;
                    const href = anchor.getAttribute('href');
                    if (href && href.startsWith('#')) {
                        e.preventDefault();
                        const targetElement = document.getElementById(href.substring(1));
                        if (targetElement) {
                            targetElement.scrollIntoView({
                                behavior: 'smooth'
                            });
                        }
                        return;
                    }
                    const isMetaKeyPressed = isMacOSOrIOS ? e.metaKey : e.ctrlKey && !e.altKey;
                    if (!isMetaKeyPressed) {
                        e.preventDefault();
                    }
                }
            }
        }, false);
    };
    return `<script>(${fn.toString()})(${isMacOSOrIOS})</script>`;
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
"../sugar/src/main/ts/ephox/sugar/api/view/Platform.ts": 
/*!*************************************************************!*\
  !*** ../sugar/src/main/ts/ephox/sugar/api/view/Platform.ts ***!
  \*************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  choice: () => (choice),
  isLarge: () => (isLarge),
  isLargeDesktop: () => (isLargeDesktop),
  isLargeTouch: () => (isLargeTouch),
  isMacOS: () => (isMacOS),
  isSmallAndroid: () => (isSmallAndroid),
  isSmallTouch: () => (isSmallTouch),
  isTouch: () => (isTouch),
  isiOS: () => (isiOS)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Arr.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Optional.ts");
/* ESM import */var _ephox_sand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ephox/sand */ "../sand/src/main/ts/ephox/sand/api/PlatformDetection.ts");


const isTouch = ()=>_ephox_sand__WEBPACK_IMPORTED_MODULE_0__.detect().deviceType.isTouch();
const isAndroid = ()=>_ephox_sand__WEBPACK_IMPORTED_MODULE_0__.detect().deviceType.isAndroid();
const isMacOS = ()=>_ephox_sand__WEBPACK_IMPORTED_MODULE_0__.detect().os.isMacOS();
const isiOS = ()=>_ephox_sand__WEBPACK_IMPORTED_MODULE_0__.detect().os.isiOS();
// TODO: Work out what these values are supposed to be.
const MINIMUM_LARGE_WIDTH = 620;
const MINIMUM_LARGE_HEIGHT = 700;
// window.screen.width and window.screen.height do not change with the orientation,
// however window.screen.availableWidth and window.screen.availableHeight,
// do change according to the orientation.
const isOfSize = (width, height)=>window.screen.width >= width && window.screen.height >= height;
const choice = (options, fallback)=>{
    const target = _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.foldl(options, (b, option)=>b.orThunk(()=>option.predicate() ? _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.Optional.some(option.value()) : _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.Optional.none()), _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.Optional.none());
    return target.getOr(fallback);
};
const isLargeTouch = ()=>isOfSize(MINIMUM_LARGE_WIDTH, MINIMUM_LARGE_HEIGHT) && isTouch();
const isLargeDesktop = ()=>isOfSize(MINIMUM_LARGE_WIDTH, MINIMUM_LARGE_HEIGHT) && !isTouch();
const isSmallTouch = ()=>!isOfSize(MINIMUM_LARGE_WIDTH, MINIMUM_LARGE_HEIGHT) && isTouch();
const isLarge = ()=>isOfSize(MINIMUM_LARGE_WIDTH, MINIMUM_LARGE_HEIGHT);
const isSmallAndroid = ()=>isSmallTouch() && isAndroid();



}),
"./src/plugins/preview/main/ts/Plugin.ts": 
/*!***********************************************!*\
  !*** ./src/plugins/preview/main/ts/Plugin.ts ***!
  \***********************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var tinymce_core_api_PluginManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/PluginManager */ "./lib/globals/tinymce/core/api/PluginManager.js");
/* ESM import */var _api_Commands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/Commands */ "./src/plugins/preview/main/ts/api/Commands.ts");
/* ESM import */var _ui_Buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/Buttons */ "./src/plugins/preview/main/ts/ui/Buttons.ts");



/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>{
    tinymce_core_api_PluginManager__WEBPACK_IMPORTED_MODULE_0__["default"].add('preview', (editor)=>{
        _api_Commands__WEBPACK_IMPORTED_MODULE_1__.register(editor);
        _ui_Buttons__WEBPACK_IMPORTED_MODULE_2__.register(editor);
    });
});


}),
"./src/plugins/preview/main/ts/api/Commands.ts": 
/*!*****************************************************!*\
  !*** ./src/plugins/preview/main/ts/api/Commands.ts ***!
  \*****************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  register: () => (register)
});
/* ESM import */var _ui_Dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/Dialog */ "./src/plugins/preview/main/ts/ui/Dialog.ts");

const register = (editor)=>{
    editor.addCommand('mcePreview', ()=>{
        (0,_ui_Dialog__WEBPACK_IMPORTED_MODULE_0__.open)(editor);
    });
};



}),
"./src/plugins/preview/main/ts/api/Options.ts": 
/*!****************************************************!*\
  !*** ./src/plugins/preview/main/ts/api/Options.ts ***!
  \****************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getBodyClass: () => (getBodyClass),
  getBodyId: () => (getBodyId),
  getContentStyle: () => (getContentStyle),
  shouldUseContentCssCors: () => (shouldUseContentCssCors)
});
const option = (name)=>(editor)=>editor.options.get(name);
const getContentStyle = option('content_style');
const shouldUseContentCssCors = option('content_css_cors');
const getBodyClass = option('body_class');
const getBodyId = option('body_id');



}),
"./src/plugins/preview/main/ts/core/IframeContent.ts": 
/*!***********************************************************!*\
  !*** ./src/plugins/preview/main/ts/core/IframeContent.ts ***!
  \***********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getPreviewHtml: () => (getPreviewHtml)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Arr.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Obj.ts");
/* ESM import */var _ephox_sugar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ephox/sugar */ "../sugar/src/main/ts/ephox/sugar/api/dom/Link.ts");
/* ESM import */var tinymce_core_api_dom_ScriptLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/dom/ScriptLoader */ "./lib/globals/tinymce/core/api/dom/ScriptLoader.js");
/* ESM import */var tinymce_core_api_util_Tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tinymce/core/api/util/Tools */ "./lib/globals/tinymce/core/api/util/Tools.js");
/* ESM import */var _api_Options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/Options */ "./src/plugins/preview/main/ts/api/Options.ts");





const getComponentScriptsHtml = (editor)=>{
    const urls = _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__.unique(_ephox_katamari__WEBPACK_IMPORTED_MODULE_4__.values(editor.schema.getComponentUrls()));
    return _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__.map(urls, (url)=>{
        const attrs = _ephox_katamari__WEBPACK_IMPORTED_MODULE_4__.mapToArray(tinymce_core_api_dom_ScriptLoader__WEBPACK_IMPORTED_MODULE_0__["default"].ScriptLoader.getScriptAttributes(url), (v, k)=>` ${editor.dom.encode(k)}="${editor.dom.encode(v)}"`);
        return `<script src="${editor.dom.encode(url)}"${attrs.join('')}></script>`;
    }).join('');
};
const getPreviewHtml = (editor)=>{
    let headHtml = '';
    const encode = editor.dom.encode;
    const contentStyle = _api_Options__WEBPACK_IMPORTED_MODULE_2__.getContentStyle(editor) ?? '';
    headHtml += `<base href="${encode(editor.documentBaseURI.getURI())}">`;
    const cors = _api_Options__WEBPACK_IMPORTED_MODULE_2__.shouldUseContentCssCors(editor) ? ' crossorigin="anonymous"' : '';
    tinymce_core_api_util_Tools__WEBPACK_IMPORTED_MODULE_1__["default"].each(editor.contentCSS, (url)=>{
        headHtml += '<link type="text/css" rel="stylesheet" href="' + encode(editor.documentBaseURI.toAbsolute(url)) + '"' + cors + '>';
    });
    if (contentStyle) {
        headHtml += '<style type="text/css">' + contentStyle + '</style>';
    }
    headHtml += getComponentScriptsHtml(editor);
    const bodyId = _api_Options__WEBPACK_IMPORTED_MODULE_2__.getBodyId(editor);
    const bodyClass = _api_Options__WEBPACK_IMPORTED_MODULE_2__.getBodyClass(editor);
    const directionality = editor.getBody().dir;
    const dirAttr = directionality ? ' dir="' + encode(directionality) + '"' : '';
    const previewHtml = '<!DOCTYPE html>' + '<html>' + '<head>' + headHtml + '</head>' + '<body id="' + encode(bodyId) + '" class="mce-content-body ' + encode(bodyClass) + '"' + dirAttr + '>' + editor.getContent() + _ephox_sugar__WEBPACK_IMPORTED_MODULE_5__.getPreventClicksOnLinksScript() + '</body>' + '</html>';
    return previewHtml;
};



}),
"./src/plugins/preview/main/ts/ui/Buttons.ts": 
/*!***************************************************!*\
  !*** ./src/plugins/preview/main/ts/ui/Buttons.ts ***!
  \***************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  register: () => (register)
});
const register = (editor)=>{
    const onAction = ()=>editor.execCommand('mcePreview');
    editor.ui.registry.addButton('preview', {
        icon: 'preview',
        tooltip: 'Preview',
        onAction,
        context: 'any'
    });
    editor.ui.registry.addMenuItem('preview', {
        icon: 'preview',
        text: 'Preview',
        onAction,
        context: 'any'
    });
};



}),
"./src/plugins/preview/main/ts/ui/Dialog.ts": 
/*!**************************************************!*\
  !*** ./src/plugins/preview/main/ts/ui/Dialog.ts ***!
  \**************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  open: () => (open)
});
/* ESM import */var _core_IframeContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/IframeContent */ "./src/plugins/preview/main/ts/core/IframeContent.ts");

const open = (editor)=>{
    const content = _core_IframeContent__WEBPACK_IMPORTED_MODULE_0__.getPreviewHtml(editor);
    const dataApi = editor.windowManager.open({
        title: 'Preview',
        size: 'large',
        body: {
            type: 'panel',
            items: [
                {
                    name: 'preview',
                    type: 'iframe',
                    sandboxed: true,
                    transparent: false
                }
            ]
        },
        buttons: [
            {
                type: 'cancel',
                name: 'close',
                text: 'Close',
                primary: true
            }
        ],
        initialData: {
            preview: content
        }
    });
    // Focus the close button, as by default the first element in the body is selected
    // which we don't want to happen here since the body only has the iframe content
    dataApi.focus('close');
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

/*!*********************************************!*\
  !*** ./src/plugins/preview/main/ts/Main.ts ***!
  \*********************************************/
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _Plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Plugin */ "./src/plugins/preview/main/ts/Plugin.ts");

(0,_Plugin__WEBPACK_IMPORTED_MODULE_0__["default"])(); /** *****
 * DO NOT EXPORT ANYTHING
 *
 * IF YOU DO ROLLUP WILL LEAVE A GLOBAL ON THE PAGE
 *******/ 

})();

})()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdGlueW1jZS9wbHVnaW5zL3ByZXZpZXcvcGx1Z2luLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGlueW1jZS8uL2xpYi9nbG9iYWxzL3RpbnltY2UvY29yZS9hcGkvUGx1Z2luTWFuYWdlci5qcyIsIndlYnBhY2s6Ly90aW55bWNlLy4vbGliL2dsb2JhbHMvdGlueW1jZS9jb3JlL2FwaS9kb20vU2NyaXB0TG9hZGVyLmpzIiwid2VicGFjazovL3RpbnltY2UvLi9saWIvZ2xvYmFscy90aW55bWNlL2NvcmUvYXBpL3V0aWwvVG9vbHMuanMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9rYXRhbWFyaS9zcmMvbWFpbi90cy9lcGhveC9rYXRhbWFyaS9hcGkvQXJyLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4va2F0YW1hcmkvc3JjL21haW4vdHMvZXBob3gva2F0YW1hcmkvYXBpL0Z1bi50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL2thdGFtYXJpL3NyYy9tYWluL3RzL2VwaG94L2thdGFtYXJpL2FwaS9HbG9iYWwudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9rYXRhbWFyaS9zcmMvbWFpbi90cy9lcGhveC9rYXRhbWFyaS9hcGkvT2JqLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4va2F0YW1hcmkvc3JjL21haW4vdHMvZXBob3gva2F0YW1hcmkvYXBpL09wdGlvbmFsLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4va2F0YW1hcmkvc3JjL21haW4vdHMvZXBob3gva2F0YW1hcmkvYXBpL1Jlc29sdmUudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9rYXRhbWFyaS9zcmMvbWFpbi90cy9lcGhveC9rYXRhbWFyaS9hcGkvU3RyaW5ncy50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL2thdGFtYXJpL3NyYy9tYWluL3RzL2VwaG94L2thdGFtYXJpL2FwaS9UaHVuay50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL2thdGFtYXJpL3NyYy9tYWluL3RzL2VwaG94L2thdGFtYXJpL2FwaS9UeXBlLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4va2F0YW1hcmkvc3JjL21haW4vdHMvZXBob3gva2F0YW1hcmkvc3RyL1N0ckFwcGVuZC50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL3NhbmQvc3JjL21haW4vdHMvZXBob3gvc2FuZC9hcGkvUGxhdGZvcm1EZXRlY3Rpb24udHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9zYW5kL3NyYy9tYWluL3RzL2VwaG94L3NhbmQvYXBpL1NhbmRIVE1MRWxlbWVudC50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL3NhbmQvc3JjL21haW4vdHMvZXBob3gvc2FuZC9jb3JlL0Jyb3dzZXIudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9zYW5kL3NyYy9tYWluL3RzL2VwaG94L3NhbmQvY29yZS9PcGVyYXRpbmdTeXN0ZW0udHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9zYW5kL3NyYy9tYWluL3RzL2VwaG94L3NhbmQvY29yZS9QbGF0Zm9ybURldGVjdGlvbi50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL3NhbmQvc3JjL21haW4vdHMvZXBob3gvc2FuZC9kZXRlY3QvRGV2aWNlVHlwZS50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL3NhbmQvc3JjL21haW4vdHMvZXBob3gvc2FuZC9kZXRlY3QvVWFEYXRhLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4vc2FuZC9zcmMvbWFpbi90cy9lcGhveC9zYW5kL2RldGVjdC9VYVN0cmluZy50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL3NhbmQvc3JjL21haW4vdHMvZXBob3gvc2FuZC9kZXRlY3QvVmVyc2lvbi50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL3NhbmQvc3JjL21haW4vdHMvZXBob3gvc2FuZC9pbmZvL1BsYXRmb3JtSW5mby50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL3NhbmQvc3JjL21haW4vdHMvZXBob3gvc2FuZC91dGlsL0dsb2JhbC50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL3N1Z2FyL3NyYy9tYWluL3RzL2VwaG94L3N1Z2FyL2FsaWVuL1JlY3Vyc2UudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9zdWdhci9zcmMvbWFpbi90cy9lcGhveC9zdWdhci9hcGkvZG9tL0NvbXBhcmUudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9zdWdhci9zcmMvbWFpbi90cy9lcGhveC9zdWdhci9hcGkvZG9tL0luc2VydC50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL3N1Z2FyL3NyYy9tYWluL3RzL2VwaG94L3N1Z2FyL2FwaS9kb20vTGluay50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL3N1Z2FyL3NyYy9tYWluL3RzL2VwaG94L3N1Z2FyL2FwaS9ub2RlL05vZGVUeXBlcy50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL3N1Z2FyL3NyYy9tYWluL3RzL2VwaG94L3N1Z2FyL2FwaS9ub2RlL1N1Z2FyRWxlbWVudC50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL3N1Z2FyL3NyYy9tYWluL3RzL2VwaG94L3N1Z2FyL2FwaS9ub2RlL1N1Z2FySGVhZC50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL3N1Z2FyL3NyYy9tYWluL3RzL2VwaG94L3N1Z2FyL2FwaS9ub2RlL1N1Z2FyTm9kZS50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL3N1Z2FyL3NyYy9tYWluL3RzL2VwaG94L3N1Z2FyL2FwaS9wcm9wZXJ0aWVzL0F0dHJpYnV0ZS50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL3N1Z2FyL3NyYy9tYWluL3RzL2VwaG94L3N1Z2FyL2FwaS9zZWFyY2gvU2VsZWN0b3JzLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4vc3VnYXIvc3JjL21haW4vdHMvZXBob3gvc3VnYXIvYXBpL3NlYXJjaC9UcmF2ZXJzZS50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL3N1Z2FyL3NyYy9tYWluL3RzL2VwaG94L3N1Z2FyL2FwaS92aWV3L1BsYXRmb3JtLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9wcmV2aWV3L21haW4vdHMvUGx1Z2luLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9wcmV2aWV3L21haW4vdHMvYXBpL0NvbW1hbmRzLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9wcmV2aWV3L21haW4vdHMvYXBpL09wdGlvbnMudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL3ByZXZpZXcvbWFpbi90cy9jb3JlL0lmcmFtZUNvbnRlbnQudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL3ByZXZpZXcvbWFpbi90cy91aS9CdXR0b25zLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9wcmV2aWV3L21haW4vdHMvdWkvRGlhbG9nLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4vLi4vbm9kZV9tb2R1bGVzL0BlcGhveC9kaXNwdXRlL3NyYy9tYWluL3RzL2FwaS9FcS50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uLy4uL25vZGVfbW9kdWxlcy9AZXBob3gvZGlzcHV0ZS9zcmMvbWFpbi90cy9jb3JlL0FycmF5VXRpbC50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uLy4uL25vZGVfbW9kdWxlcy9AZXBob3gvZGlzcHV0ZS9zcmMvbWFpbi90cy9jb3JlL1R5cGUudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lX3Byb3BlcnR5X2dldHRlcnMiLCJ3ZWJwYWNrOi8vdGlueW1jZS93ZWJwYWNrL3J1bnRpbWUvaGFzX293bl9wcm9wZXJ0eSIsIndlYnBhY2s6Ly90aW55bWNlL3dlYnBhY2svcnVudGltZS9tYWtlX25hbWVzcGFjZV9vYmplY3QiLCJ3ZWJwYWNrOi8vdGlueW1jZS93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3ZlcnNpb24iLCJ3ZWJwYWNrOi8vdGlueW1jZS93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3VuaXF1ZV9pZCIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvcHJldmlldy9tYWluL3RzL01haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGdsb2JhbCA9IHRpbnltY2UudXRpbC5Ub29scy5yZXNvbHZlKCd0aW55bWNlLlBsdWdpbk1hbmFnZXInKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2xvYmFsO1xuZXhwb3J0IHZhciBQbHVnaW5NYW5hZ2VyID0gZ2xvYmFsO1xuIiwidmFyIGdsb2JhbCA9IHRpbnltY2UudXRpbC5Ub29scy5yZXNvbHZlKCd0aW55bWNlLmRvbS5TY3JpcHRMb2FkZXInKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2xvYmFsO1xuZXhwb3J0IHZhciBTY3JpcHRMb2FkZXIgPSBnbG9iYWw7XG4iLCJ2YXIgZ2xvYmFsID0gdGlueW1jZS51dGlsLlRvb2xzLnJlc29sdmUoJ3RpbnltY2UudXRpbC5Ub29scycpO1xuXG5leHBvcnQgZGVmYXVsdCBnbG9iYWw7XG5leHBvcnQgdmFyIFRvb2xzID0gZ2xvYmFsO1xuIiwiaW1wb3J0IHsgRXEgfSBmcm9tICdAZXBob3gvZGlzcHV0ZSc7XG5cbmltcG9ydCAqIGFzIEZ1biBmcm9tICcuL0Z1bic7XG5pbXBvcnQgeyBPcHRpb25hbCB9IGZyb20gJy4vT3B0aW9uYWwnO1xuaW1wb3J0ICogYXMgVHlwZSBmcm9tICcuL1R5cGUnO1xuXG50eXBlIEFycmF5TW9ycGhpc208VCwgVT4gPSAoeDogVCwgaTogbnVtYmVyKSA9PiBVO1xudHlwZSBBcnJheUd1YXJkUHJlZGljYXRlPFQsIFUgZXh0ZW5kcyBUPiA9ICh4OiBULCBpOiBudW1iZXIpID0+IHggaXMgVTtcbnR5cGUgQXJyYXlQcmVkaWNhdGU8VD4gPSBBcnJheU1vcnBoaXNtPFQsIGJvb2xlYW4+O1xudHlwZSBDb21wYXJhdG9yPFQ+ID0gKGE6IFQsIGI6IFQpID0+IG51bWJlcjtcblxuY29uc3QgbmF0aXZlU2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5jb25zdCBuYXRpdmVJbmRleE9mID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2Y7XG5jb25zdCBuYXRpdmVQdXNoID0gQXJyYXkucHJvdG90eXBlLnB1c2g7XG5cbmNvbnN0IHJhd0luZGV4T2YgPSA8VD4gKHRzOiBBcnJheUxpa2U8VD4sIHQ6IFQpOiBudW1iZXIgPT5cbiAgbmF0aXZlSW5kZXhPZi5jYWxsKHRzLCB0KTtcblxuZXhwb3J0IGNvbnN0IGluZGV4T2YgPSA8VCA9IGFueT4oeHM6IEFycmF5TGlrZTxUPiwgeDogVCk6IE9wdGlvbmFsPG51bWJlcj4gPT4ge1xuICAvLyBUaGUgcmF3SW5kZXhPZiBtZXRob2QgZG9lcyBub3Qgd3JhcCB1cCBpbiBhbiBvcHRpb24uIFRoaXMgaXMgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMuXG4gIGNvbnN0IHIgPSByYXdJbmRleE9mKHhzLCB4KTtcbiAgcmV0dXJuIHIgPT09IC0xID8gT3B0aW9uYWwubm9uZSgpIDogT3B0aW9uYWwuc29tZShyKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb250YWlucyA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCB4OiBUKTogYm9vbGVhbiA9PiByYXdJbmRleE9mKHhzLCB4KSA+IC0xO1xuXG5leHBvcnQgY29uc3QgZXhpc3RzID0gPFQgPSBhbnk+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+KTogYm9vbGVhbiA9PiB7XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICBpZiAocHJlZCh4LCBpKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IGNvbnN0IHJhbmdlID0gPFQ+KG51bTogbnVtYmVyLCBmOiAoYTogbnVtYmVyKSA9PiBUKTogVFtdID0+IHtcbiAgY29uc3QgcjogVFtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtOyBpKyspIHtcbiAgICByLnB1c2goZihpKSk7XG4gIH1cbiAgcmV0dXJuIHI7XG59O1xuXG4vLyBJdCdzIGEgdG90YWwgbWljcm8gb3B0aW1pc2F0aW9uLCBidXQgdGhlc2UgZG8gbWFrZSBzb21lIGRpZmZlcmVuY2UuXG4vLyBQYXJ0aWN1bGFybHkgZm9yIGJyb3dzZXJzIG90aGVyIHRoYW4gQ2hyb21lLlxuLy8gLSBsZW5ndGggY2FjaGluZ1xuLy8gaHR0cDovL2pzcGVyZi5jb20vYnJvd3Nlci1kaWV0LWpxdWVyeS1lYWNoLXZzLWZvci1sb29wLzY5XG4vLyAtIG5vdCB1c2luZyBwdXNoXG4vLyBodHRwOi8vanNwZXJmLmNvbS9hcnJheS1kaXJlY3QtYXNzaWdubWVudC12cy1wdXNoLzJcblxuZXhwb3J0IGNvbnN0IGNodW5rID0gPFQ+KGFycmF5OiBBcnJheUxpa2U8VD4sIHNpemU6IG51bWJlcik6IFRbXVtdID0+IHtcbiAgY29uc3QgcjogVFtdW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkgKz0gc2l6ZSkge1xuICAgIGNvbnN0IHM6IFRbXSA9IG5hdGl2ZVNsaWNlLmNhbGwoYXJyYXksIGksIGkgKyBzaXplKTtcbiAgICByLnB1c2gocyk7XG4gIH1cbiAgcmV0dXJuIHI7XG59O1xuXG5leHBvcnQgY29uc3QgbWFwID0gPFQgPSBhbnksIFUgPSBhbnk+KHhzOiBBcnJheUxpa2U8VD4sIGY6IEFycmF5TW9ycGhpc208VCwgVT4pOiBVW10gPT4ge1xuICAvLyBwcmUtYWxsb2NhdGluZyBhcnJheSBzaXplIHdoZW4gaXQncyBndWFyYW50ZWVkIHRvIGJlIGtub3duXG4gIC8vIGh0dHA6Ly9qc3BlcmYuY29tL3B1c2gtYWxsb2NhdGVkLXZzLWR5bmFtaWMvMjJcbiAgY29uc3QgbGVuID0geHMubGVuZ3RoO1xuICBjb25zdCByID0gbmV3IEFycmF5KGxlbik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgcltpXSA9IGYoeCwgaSk7XG4gIH1cbiAgcmV0dXJuIHI7XG59O1xuXG4vLyBVbndvdW5kIGltcGxlbWVudGluZyBvdGhlciBmdW5jdGlvbnMgaW4gdGVybXMgb2YgZWFjaC5cbi8vIFRoZSBjb2RlIHNpemUgaXMgcm91Z2hseSB0aGUgc2FtZSwgYW5kIGl0IHNob3VsZCBhbGxvdyBmb3IgYmV0dGVyIG9wdGltaXNhdGlvbi5cbi8vIGNvbnN0IGVhY2ggPSBmdW5jdGlvbjxULCBVPih4czogVFtdLCBmOiAoeDogVCwgaT86IG51bWJlciwgeHM/OiBUW10pID0+IHZvaWQpOiB2b2lkIHtcbmV4cG9ydCBjb25zdCBlYWNoID0gPFQgPSBhbnk+KHhzOiBBcnJheUxpa2U8VD4sIGY6IEFycmF5TW9ycGhpc208VCwgdm9pZD4pOiB2b2lkID0+IHtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHhzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIGYoeCwgaSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBlYWNociA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCBmOiBBcnJheU1vcnBoaXNtPFQsIHZvaWQ+KTogdm9pZCA9PiB7XG4gIGZvciAobGV0IGkgPSB4cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICBmKHgsIGkpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgcGFydGl0aW9uID0gPFQgPSBhbnk+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+KTogeyBwYXNzOiBUW107IGZhaWw6IFRbXSB9ID0+IHtcbiAgY29uc3QgcGFzczogVFtdID0gW107XG4gIGNvbnN0IGZhaWw6IFRbXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0geHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgY29uc3QgYXJyID0gcHJlZCh4LCBpKSA/IHBhc3MgOiBmYWlsO1xuICAgIGFyci5wdXNoKHgpO1xuICB9XG4gIHJldHVybiB7IHBhc3MsIGZhaWwgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBmaWx0ZXI6IHtcbiAgPFQsIFUgZXh0ZW5kcyBUPih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheUd1YXJkUHJlZGljYXRlPFQsIFU+KTogVVtdO1xuICA8VD4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlQcmVkaWNhdGU8VD4pOiBUW107XG59ID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+KTogVFtdID0+IHtcbiAgY29uc3QgcjogVFtdID0gW107XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICBpZiAocHJlZCh4LCBpKSkge1xuICAgICAgci5wdXNoKHgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcjtcbn07XG5cbi8qXG4gKiBHcm91cHMgYW4gYXJyYXkgaW50byBjb250aWd1b3VzIGFycmF5cyBvZiBsaWtlIGVsZW1lbnRzLiBXaGV0aGVyIGFuIGVsZW1lbnQgaXMgbGlrZSBvciBub3QgZGVwZW5kcyBvbiBmLlxuICpcbiAqIGYgaXMgYSBmdW5jdGlvbiB0aGF0IGRlcml2ZXMgYSB2YWx1ZSBmcm9tIGFuIGVsZW1lbnQgLSBlLmcuIHRydWUgb3IgZmFsc2UsIG9yIGEgc3RyaW5nLlxuICogRWxlbWVudHMgYXJlIGxpa2UgaWYgdGhpcyBmdW5jdGlvbiBnZW5lcmF0ZXMgdGhlIHNhbWUgdmFsdWUgZm9yIHRoZW0gKGFjY29yZGluZyB0byA9PT0pLlxuICpcbiAqXG4gKiBPcmRlciBvZiB0aGUgZWxlbWVudHMgaXMgcHJlc2VydmVkLiBBcnIuZmxhdHRlbigpIG9uIHRoZSByZXN1bHQgd2lsbCByZXR1cm4gdGhlIG9yaWdpbmFsIGxpc3QsIGFzIHdpdGggSGFza2VsbCBncm91cEJ5IGZ1bmN0aW9uLlxuICogIEZvciBhIGdvb2QgZXhwbGFuYXRpb24sIHNlZSB0aGUgZ3JvdXAgZnVuY3Rpb24gKHdoaWNoIGlzIGEgc3BlY2lhbCBjYXNlIG9mIGdyb3VwQnkpXG4gKiAgaHR0cDovL2hhY2thZ2UuaGFza2VsbC5vcmcvcGFja2FnZS9iYXNlLTQuNy4wLjAvZG9jcy9EYXRhLUxpc3QuaHRtbCN2Omdyb3VwXG4gKi9cbmV4cG9ydCBjb25zdCBncm91cEJ5ID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4sIGY6IChhOiBUKSA9PiBhbnkpOiBUW11bXSA9PiB7XG4gIGlmICh4cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gW107XG4gIH0gZWxzZSB7XG4gICAgbGV0IHdhc1R5cGUgPSBmKHhzWzBdKTsgLy8gaW5pdGlhbCBjYXNlIGZvciBtYXRjaGluZ1xuICAgIGNvbnN0IHI6IFRbXVtdID0gW107XG4gICAgbGV0IGdyb3VwOiBUW10gPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgY29uc3QgeCA9IHhzW2ldO1xuICAgICAgY29uc3QgdHlwZSA9IGYoeCk7XG4gICAgICBpZiAodHlwZSAhPT0gd2FzVHlwZSkge1xuICAgICAgICByLnB1c2goZ3JvdXApO1xuICAgICAgICBncm91cCA9IFtdO1xuICAgICAgfVxuICAgICAgd2FzVHlwZSA9IHR5cGU7XG4gICAgICBncm91cC5wdXNoKHgpO1xuICAgIH1cbiAgICBpZiAoZ3JvdXAubGVuZ3RoICE9PSAwKSB7XG4gICAgICByLnB1c2goZ3JvdXApO1xuICAgIH1cbiAgICByZXR1cm4gcjtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGZvbGRyID0gPFQsIFU+KHhzOiBBcnJheUxpa2U8VD4sIGY6IChhY2M6IFUsIHg6IFQsIGk6IG51bWJlcikgPT4gVSwgYWNjOiBVKTogVSA9PiB7XG4gIGVhY2hyKHhzLCAoeCwgaSkgPT4ge1xuICAgIGFjYyA9IGYoYWNjLCB4LCBpKTtcbiAgfSk7XG4gIHJldHVybiBhY2M7XG59O1xuXG5leHBvcnQgY29uc3QgZm9sZGwgPSA8VCA9IGFueSwgVSA9IGFueT4oeHM6IEFycmF5TGlrZTxUPiwgZjogKGFjYzogVSwgeDogVCwgaTogbnVtYmVyKSA9PiBVLCBhY2M6IFUpOiBVID0+IHtcbiAgZWFjaCh4cywgKHgsIGkpID0+IHtcbiAgICBhY2MgPSBmKGFjYywgeCwgaSk7XG4gIH0pO1xuICByZXR1cm4gYWNjO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmRVbnRpbDoge1xuICA8VCwgVSBleHRlbmRzIFQ+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5R3VhcmRQcmVkaWNhdGU8VCwgVT4sIHVudGlsOiBBcnJheVByZWRpY2F0ZTxUPik6IE9wdGlvbmFsPFU+O1xuICA8VCA9IGFueT4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlQcmVkaWNhdGU8VD4sIHVudGlsOiBBcnJheVByZWRpY2F0ZTxUPik6IE9wdGlvbmFsPFQ+O1xufSA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheVByZWRpY2F0ZTxUPiwgdW50aWw6IEFycmF5UHJlZGljYXRlPFQ+KTogT3B0aW9uYWw8VD4gPT4ge1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0geHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgaWYgKHByZWQoeCwgaSkpIHtcbiAgICAgIHJldHVybiBPcHRpb25hbC5zb21lKHgpO1xuICAgIH0gZWxzZSBpZiAodW50aWwoeCwgaSkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gT3B0aW9uYWwubm9uZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmQ6IHtcbiAgPFQsIFUgZXh0ZW5kcyBUPih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheUd1YXJkUHJlZGljYXRlPFQsIFU+KTogT3B0aW9uYWw8VT47XG4gIDxUID0gYW55Pih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheVByZWRpY2F0ZTxUPik6IE9wdGlvbmFsPFQ+O1xufSA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheVByZWRpY2F0ZTxUPik6IE9wdGlvbmFsPFQ+ID0+IHtcbiAgcmV0dXJuIGZpbmRVbnRpbCh4cywgcHJlZCwgRnVuLm5ldmVyKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmaW5kSW5kZXggPSA8VD4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlQcmVkaWNhdGU8VD4pOiBPcHRpb25hbDxudW1iZXI+ID0+IHtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHhzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIGlmIChwcmVkKHgsIGkpKSB7XG4gICAgICByZXR1cm4gT3B0aW9uYWwuc29tZShpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gT3B0aW9uYWwubm9uZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmRMYXN0SW5kZXggPSA8VD4oYXJyOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+KTogT3B0aW9uYWw8bnVtYmVyPiA9PiB7XG4gIGZvciAobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBpZiAocHJlZChhcnJbaV0sIGkpKSB7XG4gICAgICByZXR1cm4gT3B0aW9uYWwuc29tZShpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gT3B0aW9uYWwubm9uZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZsYXR0ZW4gPSA8VD4oeHM6IEFycmF5TGlrZTxUW10+KTogVFtdID0+IHtcbiAgLy8gTm90ZSwgdGhpcyBpcyBwb3NzaWJsZSBiZWNhdXNlIHB1c2ggc3VwcG9ydHMgbXVsdGlwbGUgYXJndW1lbnRzOlxuICAvLyBodHRwOi8vanNwZXJmLmNvbS9jb25jYXQtcHVzaC82XG4gIC8vIE5vdGUgdGhhdCBpbiB0aGUgcGFzdCwgY29uY2F0KCkgd291bGQgc2lsZW50bHkgd29yayAodmVyeSBzbG93bHkpIGZvciBhcnJheS1saWtlIG9iamVjdHMuXG4gIC8vIFdpdGggdGhpcyBjaGFuZ2UgaXQgd2lsbCB0aHJvdyBhbiBlcnJvci5cbiAgY29uc3QgcjogVFtdID0gW107XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgIC8vIEVuc3VyZSB0aGF0IGVhY2ggdmFsdWUgaXMgYW4gYXJyYXkgaXRzZWxmXG4gICAgaWYgKCFUeXBlLmlzQXJyYXkoeHNbaV0pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Fyci5mbGF0dGVuIGl0ZW0gJyArIGkgKyAnIHdhcyBub3QgYW4gYXJyYXksIGlucHV0OiAnICsgeHMpO1xuICAgIH1cbiAgICBuYXRpdmVQdXNoLmFwcGx5KHIsIHhzW2ldKTtcbiAgfVxuICByZXR1cm4gcjtcbn07XG5cbmV4cG9ydCBjb25zdCBiaW5kID0gPFQgPSBhbnksIFUgPSBhbnk+KHhzOiBBcnJheUxpa2U8VD4sIGY6IEFycmF5TW9ycGhpc208VCwgVVtdPik6IFVbXSA9PlxuICBmbGF0dGVuKG1hcCh4cywgZikpO1xuXG5leHBvcnQgY29uc3QgZm9yYWxsID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+KTogYm9vbGVhbiA9PiB7XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICBpZiAocHJlZCh4LCBpKSAhPT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmV4cG9ydCBjb25zdCBlcXVhbCA9IDxUPihhMTogQXJyYXlMaWtlPFQ+LCBhMjogQXJyYXlMaWtlPFQ+LCBlcTogRXEuRXE8VD4gPSBFcS5lcUFueSk6IGJvb2xlYW4gPT5cbiAgRXEuZXFBcnJheShlcSkuZXEoYTEsIGEyKTtcblxuZXhwb3J0IGNvbnN0IHJldmVyc2UgPSA8VD4oeHM6IEFycmF5TGlrZTxUPik6IFRbXSA9PiB7XG4gIGNvbnN0IHI6IFRbXSA9IG5hdGl2ZVNsaWNlLmNhbGwoeHMsIDApO1xuICByLnJldmVyc2UoKTtcbiAgcmV0dXJuIHI7XG59O1xuXG5leHBvcnQgY29uc3QgZGlmZmVyZW5jZSA9IDxUPihhMTogQXJyYXlMaWtlPFQ+LCBhMjogQXJyYXlMaWtlPFQ+KTogVFtdID0+IGZpbHRlcihhMSwgKHgpID0+ICFjb250YWlucyhhMiwgeCkpO1xuXG5leHBvcnQgY29uc3QgbWFwVG9PYmplY3Q6IHtcbiAgPFQgZXh0ZW5kcyBzdHJpbmcsIFU+KHhzOiBBcnJheUxpa2U8VD4sIGY6ICh4OiBULCBpOiBudW1iZXIpID0+IFUpOiBSZWNvcmQ8VCwgVT47XG4gIDxULCBSIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55Pj4oeHM6IEFycmF5TGlrZTxUPiwgZjogKHg6IFQsIGk6IG51bWJlcikgPT4gUltrZXlvZiBSXSk6IFI7XG59ID0gPFQsIFIgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+Pih4czogQXJyYXlMaWtlPFQ+LCBmOiAoeDogVCwgaTogbnVtYmVyKSA9PiBSW2tleW9mIFJdKTogUiA9PiB7XG4gIGNvbnN0IHIgPSB7fSBhcyBSO1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0geHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgcltTdHJpbmcoeCkgYXMga2V5b2YgUl0gPSBmKHgsIGkpO1xuICB9XG4gIHJldHVybiByO1xufTtcblxuZXhwb3J0IGNvbnN0IHB1cmUgPSA8VD4oeDogVCk6IFRbXSA9PiBbIHggXTtcblxuZXhwb3J0IGNvbnN0IHNvcnQgPSA8VD4oeHM6IEFycmF5TGlrZTxUPiwgY29tcGFyYXRvcj86IENvbXBhcmF0b3I8VD4pOiBUW10gPT4ge1xuICBjb25zdCBjb3B5OiBUW10gPSBuYXRpdmVTbGljZS5jYWxsKHhzLCAwKTtcbiAgY29weS5zb3J0KGNvbXBhcmF0b3IpO1xuICByZXR1cm4gY29weTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXQgPSA8VD4oeHM6IEFycmF5TGlrZTxUPiwgaTogbnVtYmVyKTogT3B0aW9uYWw8VD4gPT4gaSA+PSAwICYmIGkgPCB4cy5sZW5ndGggPyBPcHRpb25hbC5zb21lKHhzW2ldKSA6IE9wdGlvbmFsLm5vbmUoKTtcblxuZXhwb3J0IGNvbnN0IGhlYWQgPSA8VD4oeHM6IEFycmF5TGlrZTxUPik6IE9wdGlvbmFsPFQ+ID0+IGdldCh4cywgMCk7XG5cbmV4cG9ydCBjb25zdCBsYXN0ID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4pOiBPcHRpb25hbDxUPiA9PiBnZXQoeHMsIHhzLmxlbmd0aCAtIDEpO1xuXG5leHBvcnQgY29uc3QgZnJvbTogPFQ+KHg6IEFycmF5TGlrZTxUPikgPT4gVFtdID0gVHlwZS5pc0Z1bmN0aW9uKEFycmF5LmZyb20pID8gQXJyYXkuZnJvbSA6ICh4KSA9PiBuYXRpdmVTbGljZS5jYWxsKHgpO1xuXG5leHBvcnQgY29uc3QgZmluZE1hcCA9IDxBLCBCPihhcnI6IEFycmF5TGlrZTxBPiwgZjogKGE6IEEsIGluZGV4OiBudW1iZXIpID0+IE9wdGlvbmFsPEI+KTogT3B0aW9uYWw8Qj4gPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHIgPSBmKGFycltpXSwgaSk7XG4gICAgaWYgKHIuaXNTb21lKCkpIHtcbiAgICAgIHJldHVybiByO1xuICAgIH1cbiAgfVxuICByZXR1cm4gT3B0aW9uYWwubm9uZTxCPigpO1xufTtcblxuZXhwb3J0IGNvbnN0IHVuaXF1ZSA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCBjb21wYXJhdG9yPzogKGE6IFQsIGI6IFQpID0+IGJvb2xlYW4pOiBUW10gPT4ge1xuICBjb25zdCByOiBUW10gPSBbXTtcblxuICBjb25zdCBpc0R1cGxpY2F0ZWQgPSBUeXBlLmlzRnVuY3Rpb24oY29tcGFyYXRvcikgP1xuICAgICh4OiBUKSA9PiBleGlzdHMociwgKGkpID0+IGNvbXBhcmF0b3IoaSwgeCkpIDpcbiAgICAoeDogVCkgPT4gY29udGFpbnMociwgeCk7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHhzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIGlmICghaXNEdXBsaWNhdGVkKHgpKSB7XG4gICAgICByLnB1c2goeCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHI7XG59O1xuIiwiaW1wb3J0ICogYXMgVHlwZSBmcm9tICcuL1R5cGUnO1xuXG5jb25zdCBub29wOiAoLi4uYXJnczogYW55W10pID0+IHZvaWRcbj0gKCkgPT4geyB9O1xuXG5jb25zdCBub2FyZzogPFQ+KGY6ICgpID0+IFQpID0+ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZFxuPSAoZikgPT4gKCkgPT4gZigpO1xuXG4vKiogQ29tcG9zZSBhIHVuYXJ5IGZ1bmN0aW9uIHdpdGggYW4gbi1hcnkgZnVuY3Rpb24gKi9cbmNvbnN0IGNvbXBvc2UgPSA8VCBleHRlbmRzIGFueVtdLCBVLCBWPihmYTogKHY6IFUpID0+IFYsIGZiOiAoLi4ueDogVCkgPT4gVSk6ICguLi54OiBUKSA9PiBWID0+IHtcbiAgcmV0dXJuICguLi5hcmdzOiBUKSA9PiB7XG4gICAgcmV0dXJuIGZhKGZiLmFwcGx5KG51bGwsIGFyZ3MpKTtcbiAgfTtcbn07XG5cbi8qKiBDb21wb3NlIHR3byB1bmFyeSBmdW5jdGlvbnMuIFNpbWlsYXIgdG8gY29tcG9zZSwgYnV0IGF2b2lkcyB1c2luZyBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuICovXG5jb25zdCBjb21wb3NlMSA9IDxBLCBCLCBDPiAoZmJjOiAoYjogQikgPT4gQywgZmFiOiAoYTogQSkgPT4gQikgPT4gKGE6IEEpOiBDID0+XG4gIGZiYyhmYWIoYSkpO1xuXG5jb25zdCBjb25zdGFudCA9IDxUPih2YWx1ZTogVCk6ICgpID0+IFQgPT4ge1xuICByZXR1cm4gKCkgPT4ge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcbn07XG5cbmNvbnN0IGlkZW50aXR5ID0gPFQgPSBhbnk+KHg6IFQpOiBUID0+IHtcbiAgcmV0dXJuIHg7XG59O1xuXG5jb25zdCB0cmlwbGVFcXVhbHMgPSA8VD4oYTogVCwgYjogVCk6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gYSA9PT0gYjtcbn07XG5cbmZ1bmN0aW9uIGN1cnJ5IDxSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8QSwgUkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoYTogQSwgLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCwgYTogQSk6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPEEsIEIsIFJFU1QgZXh0ZW5kcyBhbnlbXSwgT1VUPihmbjogKGE6IEEsIGI6IEIsIC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQsIGE6IEEsIGI6IEIpOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVDtcbmZ1bmN0aW9uIGN1cnJ5IDxBLCBCLCBDLCBSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46IChhOiBBLCBiOiBCLCBjOiBDLCAuLi5yZXN0QXJnczogUkVTVCkgPT4gT1VULCBhOiBBLCBiOiBCLCBjOiBDKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8QSwgQiwgQywgRCwgUkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoYTogQSwgYjogQiwgYzogQywgZDogRCwgLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCwgYTogQSwgYjogQiwgYzogQywgZDogRCk6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPEEsIEIsIEMsIEQsIEUsIFJFU1QgZXh0ZW5kcyBhbnlbXSwgT1VUPihmbjogKGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQsIGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUpOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVDtcbmZ1bmN0aW9uIGN1cnJ5IDxBLCBCLCBDLCBELCBFLCBGLCBSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46IChhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCBmOiBGLCAuLi5yZXN0QXJnczogUkVTVCkgPT4gT1VULCBhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCBmOiBGKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8QSwgQiwgQywgRCwgRSwgRiwgRywgUkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgZjogRiwgZzogRywgLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCwgYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgZjogRiwgZzogRyk6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPEEsIEIsIEMsIEQsIEUsIEYsIEcsIEgsIFJFU1QgZXh0ZW5kcyBhbnlbXSwgT1VUPihmbjogKGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIGY6IEYsIGc6IEcsIGg6IEgsIC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQsIGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIGY6IEYsIGc6IEcsIGg6IEgpOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVDtcbmZ1bmN0aW9uIGN1cnJ5IDxBLCBCLCBDLCBELCBFLCBGLCBHLCBILCBJLCBSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46IChhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCBmOiBGLCBnOiBHLCBoOiBILCBpOiBJLCAuLi5yZXN0QXJnczogUkVTVCkgPT4gT1VULCBhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCBmOiBGLCBnOiBHLCBoOiBILCBpOiBJKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8QSwgQiwgQywgRCwgRSwgRiwgRywgSCwgSSwgSiwgUkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgZjogRiwgZzogRywgaDogSCwgaTogSSwgajogSiwgLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCwgYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgZjogRiwgZzogRywgaDogSCwgaTogSSwgajogSik6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPE9VVD4oZm46ICguLi5hbGxBcmdzOiBhbnlbXSkgPT4gT1VULCAuLi5pbml0aWFsQXJnczogYW55W10pOiAoLi4ucmVzdEFyZ3M6IGFueVtdKSA9PiBPVVQge1xuICByZXR1cm4gKC4uLnJlc3RBcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IGFsbCA9IGluaXRpYWxBcmdzLmNvbmNhdChyZXN0QXJncyk7XG4gICAgcmV0dXJuIGZuLmFwcGx5KG51bGwsIGFsbCk7XG4gIH07XG59XG5cbmNvbnN0IG5vdCA9IDxUPihmOiAodDogVCkgPT4gYm9vbGVhbikgPT4gKHQ6IFQpOiBib29sZWFuID0+XG4gICFmKHQpO1xuXG5jb25zdCBkaWUgPSAobXNnOiBzdHJpbmcpID0+IHtcbiAgcmV0dXJuICgpOiBuZXZlciA9PiB7XG4gICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XG4gIH07XG59O1xuXG5jb25zdCBhcHBseSA9IDxUPihmOiAoKSA9PiBUKTogVCA9PiB7XG4gIHJldHVybiBmKCk7XG59O1xuXG5jb25zdCBjYWxsID0gKGY6ICgpID0+IGFueSk6IHZvaWQgPT4ge1xuICBmKCk7XG59O1xuXG5jb25zdCBuZXZlcjogKC4uLmFyZ3M6IGFueVtdKSA9PiBmYWxzZSA9IGNvbnN0YW50PGZhbHNlPihmYWxzZSk7XG5jb25zdCBhbHdheXM6ICguLi5hcmdzOiBhbnlbXSkgPT4gdHJ1ZSA9IGNvbnN0YW50PHRydWU+KHRydWUpO1xuXG4vKiBVc2VkIHRvIHdlYWtlbiB0eXBlcyAqL1xuY29uc3Qgd2Vha2VuID0gPEEsIEIgZXh0ZW5kcyBBPihiOiBCKTogQSA9PiBiO1xuXG50eXBlIEZ1bjxYLCBZPiA9ICh4OiBYKSA9PiBZO1xuY29uc3QgcGlwZToge1xuICA8QSwgQj4oYTogQSwgYWI6IEZ1bjxBLCBCPik6IEI7XG4gIDxBLCBCLCBDPihhOiBBLCBhYjogRnVuPEEsIEI+LCBiYzogRnVuPEIsIEM+KTogQztcbiAgPEEsIEIsIEMsIEQ+KGE6IEEsIGFiOiBGdW48QSwgQj4sIGJjOiBGdW48QiwgQz4sIGNkOiBGdW48QywgRD4pOiBEO1xuICA8QSwgQiwgQywgRCwgRT4oYTogQSwgYWI6IEZ1bjxBLCBCPiwgYmM6IEZ1bjxCLCBDPiwgY2Q6IEZ1bjxDLCBEPiwgZGU6IEZ1bjxELCBFPik6IEU7XG4gIDxBLCBCLCBDLCBELCBFLCBGPihhOiBBLCBhYjogRnVuPEEsIEI+LCBiYzogRnVuPEIsIEM+LCBjZDogRnVuPEMsIEQ+LCBkZTogRnVuPEQsIEU+LCBlZjogRnVuPEUsIEY+KTogRjtcbiAgPEEsIEIsIEMsIEQsIEUsIEYsIEc+KGE6IEEsIGFiOiBGdW48QSwgQj4sIGJjOiBGdW48QiwgQz4sIGNkOiBGdW48QywgRD4sIGRlOiBGdW48RCwgRT4sIGVmOiBGdW48RSwgRj4sIGZnOiBGdW48RiwgRz4pOiBHO1xuICA8QSwgQiwgQywgRCwgRSwgRiwgRywgSD4oYTogQSwgYWI6IEZ1bjxBLCBCPiwgYmM6IEZ1bjxCLCBDPiwgY2Q6IEZ1bjxDLCBEPiwgZGU6IEZ1bjxELCBFPiwgZWY6IEZ1bjxFLCBGPiwgZmc6IEZ1bjxGLCBHPiwgZ2g6IEZ1bjxHLCBIPik6IEg7XG59ID1cbiAgPEEsIEIsIEMsIEQsIEUsIEYsIEcsIEg+KGE6IEEsIGFiOiBGdW48QSwgQj4sIGJjPzogRnVuPEIsIEM+LCBjZD86IEZ1bjxDLCBEPiwgZGU/OiBGdW48RCwgRT4sIGVmPzogRnVuPEUsIEY+LCBmZz86IEZ1bjxGLCBHPiwgZ2g/OiBGdW48RywgSD4pOiBCIHwgQyB8IEQgfCBFIHwgRiB8IEcgfCBIID0+IHtcbiAgICBjb25zdCBiID0gYWIoYSk7XG4gICAgaWYgKFR5cGUuaXNOdWxsYWJsZShiYykpIHtcbiAgICAgIHJldHVybiBiO1xuICAgIH1cblxuICAgIGNvbnN0IGMgPSBiYyhiKTtcbiAgICBpZiAoVHlwZS5pc051bGxhYmxlKGNkKSkge1xuICAgICAgcmV0dXJuIGM7XG4gICAgfVxuXG4gICAgY29uc3QgZCA9IGNkKGMpO1xuICAgIGlmIChUeXBlLmlzTnVsbGFibGUoZGUpKSB7XG4gICAgICByZXR1cm4gZDtcbiAgICB9XG5cbiAgICBjb25zdCBlID0gZGUoZCk7XG4gICAgaWYgKFR5cGUuaXNOdWxsYWJsZShlZikpIHtcbiAgICAgIHJldHVybiBlO1xuICAgIH1cblxuICAgIGNvbnN0IGYgPSBlZihlKTtcbiAgICBpZiAoVHlwZS5pc051bGxhYmxlKGZnKSkge1xuICAgICAgcmV0dXJuIGY7XG4gICAgfVxuXG4gICAgY29uc3QgZyA9IGZnKGYpO1xuICAgIGlmIChUeXBlLmlzTnVsbGFibGUoZ2gpKSB7XG4gICAgICByZXR1cm4gZztcbiAgICB9XG5cbiAgICByZXR1cm4gZ2goZyk7XG4gIH07XG5cbmV4cG9ydCB7XG4gIG5vb3AsXG4gIG5vYXJnLFxuICBjb21wb3NlLFxuICBjb21wb3NlMSxcbiAgY29uc3RhbnQsXG4gIGlkZW50aXR5LFxuICB0cmlwbGVFcXVhbHMsXG4gIGN1cnJ5LFxuICBub3QsXG4gIGRpZSxcbiAgYXBwbHksXG4gIGNhbGwsXG4gIG5ldmVyLFxuICBhbHdheXMsXG4gIHdlYWtlbixcbiAgcGlwZVxufTtcbiIsIi8vIFVzZSB3aW5kb3cgb2JqZWN0IGFzIHRoZSBnbG9iYWwgaWYgaXQncyBhdmFpbGFibGUgc2luY2UgQ1NQIHdpbGwgYmxvY2sgc2NyaXB0IGV2YWxzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWltcGxpZWQtZXZhbFxuZXhwb3J0IGNvbnN0IEdsb2JhbCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogRnVuY3Rpb24oJ3JldHVybiB0aGlzOycpKCk7XG4iLCJpbXBvcnQgeyBFcSB9IGZyb20gJ0BlcGhveC9kaXNwdXRlJztcblxuaW1wb3J0ICogYXMgRnVuIGZyb20gJy4vRnVuJztcbmltcG9ydCB7IE9wdGlvbmFsIH0gZnJvbSAnLi9PcHRpb25hbCc7XG5cbnR5cGUgT2JqS2V5czxUIGV4dGVuZHMge30+ID0gRXh0cmFjdDxrZXlvZiBULCBzdHJpbmc+O1xudHlwZSBPYmpDYWxsYmFjazxUIGV4dGVuZHMge30+ID0gKHZhbHVlOiBUW2tleW9mIFRdLCBrZXk6IE9iaktleXM8VD4pID0+IHZvaWQ7XG50eXBlIE9iak1vcnBoaXNtPFQgZXh0ZW5kcyB7fSwgUj4gPSAodmFsdWU6IFRba2V5b2YgVF0sIGtleTogT2JqS2V5czxUPikgPT4gUjtcbnR5cGUgT2JqR3VhcmRQcmVkaWNhdGU8VCBleHRlbmRzIHt9LCBVIGV4dGVuZHMgVFtrZXlvZiBUXT4gPSAodmFsdWU6IFRba2V5b2YgVF0sIGtleTogT2JqS2V5czxUPikgPT4gdmFsdWUgaXMgVTtcbnR5cGUgT2JqUHJlZGljYXRlPFQgZXh0ZW5kcyB7fT4gPSAodmFsdWU6IFRba2V5b2YgVF0sIGtleTogT2JqS2V5czxUPikgPT4gYm9vbGVhbjtcblxuLy8gVGhlcmUgYXJlIG1hbnkgdmFyaWF0aW9ucyBvZiBPYmplY3QgaXRlcmF0aW9uIHRoYXQgYXJlIGZhc3RlciB0aGFuIHRoZSAnZm9yLWluJyBzdHlsZTpcbi8vIGh0dHA6Ly9qc3BlcmYuY29tL29iamVjdC1rZXlzLWl0ZXJhdGlvbi8xMDdcbi8vXG4vLyBVc2UgdGhlIG5hdGl2ZSBrZXlzIGlmIGl0IGlzIGF2YWlsYWJsZSAoSUU5KyksIG90aGVyd2lzZSBmYWxsIGJhY2sgdG8gbWFudWFsbHkgZmlsdGVyaW5nXG5leHBvcnQgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzO1xuXG5leHBvcnQgY29uc3QgaGFzT3duUHJvcGVydHkgPSBPYmplY3QuaGFzT3duUHJvcGVydHk7XG5cbmV4cG9ydCBjb25zdCBlYWNoID0gPFQgZXh0ZW5kcyB7fT4ob2JqOiBULCBmOiBPYmpDYWxsYmFjazxUPik6IHZvaWQgPT4ge1xuICBjb25zdCBwcm9wcyA9IGtleXMob2JqKSBhcyBBcnJheTxPYmpLZXlzPFQ+PjtcbiAgZm9yIChsZXQgayA9IDAsIGxlbiA9IHByb3BzLmxlbmd0aDsgayA8IGxlbjsgaysrKSB7XG4gICAgY29uc3QgaSA9IHByb3BzW2tdO1xuICAgIGNvbnN0IHggPSBvYmpbaV07XG4gICAgZih4LCBpKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IG1hcCA9IDxUIGV4dGVuZHMge30sIFI+KG9iajogVCwgZjogT2JqTW9ycGhpc208VCwgUj4pOiB7IFtrIGluIGtleW9mIFRdOiBSIH0gPT4ge1xuICByZXR1cm4gdHVwbGVNYXA8eyBbayBpbiBrZXlvZiBUXTogUiB9LCBUPihvYmosICh4LCBpKSA9PiAoe1xuICAgIGs6IGksXG4gICAgdjogZih4LCBpKVxuICB9KSk7XG59O1xuXG5leHBvcnQgY29uc3QgdHVwbGVNYXAgPSA8UiBleHRlbmRzIHt9LCBUIGV4dGVuZHMge30+KG9iajogVCwgZjogT2JqTW9ycGhpc208VCwgeyBrOiBrZXlvZiBSOyB2OiBSW2tleW9mIFJdIH0+KTogUiA9PiB7XG4gIGNvbnN0IHIgPSB7fSBhcyBSO1xuICBlYWNoKG9iaiwgKHgsIGkpID0+IHtcbiAgICBjb25zdCB0dXBsZSA9IGYoeCwgaSk7XG4gICAgclt0dXBsZS5rXSA9IHR1cGxlLnY7XG4gIH0pO1xuICByZXR1cm4gcjtcbn07XG5cbmNvbnN0IG9iakFjYyA9IDxUIGV4dGVuZHMge30+KHI6IFQpID0+ICh4OiBUW2tleW9mIFRdLCBpOiBrZXlvZiBUKTogdm9pZCA9PiB7XG4gIHJbaV0gPSB4O1xufTtcblxuY29uc3QgaW50ZXJuYWxGaWx0ZXIgPSA8VCBleHRlbmRzIHt9PihvYmo6IFQsIHByZWQ6IE9ialByZWRpY2F0ZTxUPiwgb25UcnVlOiBPYmpDYWxsYmFjazxUPiwgb25GYWxzZTogT2JqQ2FsbGJhY2s8VD4pID0+IHtcbiAgZWFjaChvYmosICh4LCBpKSA9PiB7XG4gICAgKHByZWQoeCwgaSkgPyBvblRydWUgOiBvbkZhbHNlKSh4LCBpKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgYmlmaWx0ZXIgPSA8VCBleHRlbmRzIHt9PihvYmo6IFQsIHByZWQ6IE9ialByZWRpY2F0ZTxUPik6IHsgdDogUmVjb3JkPHN0cmluZywgVFtrZXlvZiBUXT47IGY6IFJlY29yZDxzdHJpbmcsIFRba2V5b2YgVF0+IH0gPT4ge1xuICBjb25zdCB0OiBSZWNvcmQ8c3RyaW5nLCBUW2tleW9mIFRdPiA9IHt9O1xuICBjb25zdCBmOiBSZWNvcmQ8c3RyaW5nLCBUW2tleW9mIFRdPiA9IHt9O1xuICBpbnRlcm5hbEZpbHRlcihvYmosIHByZWQsIG9iakFjYyh0KSwgb2JqQWNjKGYpKTtcbiAgcmV0dXJuIHsgdCwgZiB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbHRlcjoge1xuICA8VCBleHRlbmRzIHt9LCBVIGV4dGVuZHMgVFtrZXlvZiBUXT4ob2JqOiBULCBwcmVkOiBPYmpHdWFyZFByZWRpY2F0ZTxULCBVPik6IFJlY29yZDxzdHJpbmcsIFU+O1xuICA8VCBleHRlbmRzIHt9PihvYmo6IFQsIHByZWQ6IE9ialByZWRpY2F0ZTxUPik6IFJlY29yZDxzdHJpbmcsIFRba2V5b2YgVF0+O1xufSA9IDxUIGV4dGVuZHMge30+KG9iajogVCwgcHJlZDogT2JqUHJlZGljYXRlPFQ+KTogUmVjb3JkPHN0cmluZywgVFtrZXlvZiBUXT4gPT4ge1xuICBjb25zdCB0OiBSZWNvcmQ8c3RyaW5nLCBUW2tleW9mIFRdPiA9IHt9O1xuICBpbnRlcm5hbEZpbHRlcihvYmosIHByZWQsIG9iakFjYyh0KSwgRnVuLm5vb3ApO1xuICByZXR1cm4gdDtcbn07XG5cbmV4cG9ydCBjb25zdCBtYXBUb0FycmF5ID0gPFQgZXh0ZW5kcyB7fSwgUj4ob2JqOiBULCBmOiBPYmpNb3JwaGlzbTxULCBSPik6IFJbXSA9PiB7XG4gIGNvbnN0IHI6IFJbXSA9IFtdO1xuICBlYWNoKG9iaiwgKHZhbHVlLCBuYW1lKSA9PiB7XG4gICAgci5wdXNoKGYodmFsdWUsIG5hbWUpKTtcbiAgfSk7XG4gIHJldHVybiByO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmQgPSA8VCBleHRlbmRzIHt9PihvYmo6IFQsIHByZWQ6ICh2YWx1ZTogVFtrZXlvZiBUXSwga2V5OiBPYmpLZXlzPFQ+LCBvYmo6IFQpID0+IGJvb2xlYW4pOiBPcHRpb25hbDxUW2tleW9mIFRdPiA9PiB7XG4gIGNvbnN0IHByb3BzID0ga2V5cyhvYmopIGFzIEFycmF5PE9iaktleXM8VD4+O1xuICBmb3IgKGxldCBrID0gMCwgbGVuID0gcHJvcHMubGVuZ3RoOyBrIDwgbGVuOyBrKyspIHtcbiAgICBjb25zdCBpID0gcHJvcHNba107XG4gICAgY29uc3QgeCA9IG9ialtpXTtcbiAgICBpZiAocHJlZCh4LCBpLCBvYmopKSB7XG4gICAgICByZXR1cm4gT3B0aW9uYWwuc29tZSh4KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIE9wdGlvbmFsLm5vbmUoKTtcbn07XG5cbmV4cG9ydCBjb25zdCB2YWx1ZXMgPSA8VCBleHRlbmRzIHt9PihvYmo6IFQpOiBBcnJheTxUW2tleW9mIFRdPiA9PiB7XG4gIHJldHVybiBtYXBUb0FycmF5KG9iaiwgRnVuLmlkZW50aXR5KTtcbn07XG5cbmV4cG9ydCBjb25zdCBzaXplID0gKG9iajoge30pOiBudW1iZXIgPT4ge1xuICByZXR1cm4ga2V5cyhvYmopLmxlbmd0aDtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXQgPSA8VCBleHRlbmRzIHt9LCBLIGV4dGVuZHMga2V5b2YgVD4ob2JqOiBULCBrZXk6IEspOiBPcHRpb25hbDxOb25OdWxsYWJsZTxUW0tdPj4gPT4ge1xuICByZXR1cm4gaGFzKG9iaiwga2V5KSA/IE9wdGlvbmFsLmZyb20ob2JqW2tleV0gYXMgTm9uTnVsbGFibGU8VFtLXT4pIDogT3B0aW9uYWwubm9uZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGhhcyA9IDxUIGV4dGVuZHMge30sIEsgZXh0ZW5kcyBrZXlvZiBUPihvYmo6IFQsIGtleTogSyk6IGJvb2xlYW4gPT5cbiAgaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSk7XG5cbmV4cG9ydCBjb25zdCBoYXNOb25OdWxsYWJsZUtleSA9IDxUIGV4dGVuZHMge30sIEsgZXh0ZW5kcyBrZXlvZiBUPihvYmo6IFQsIGtleTogSyk6IG9iaiBpcyBUICYgUmVjb3JkPEssIE5vbk51bGxhYmxlPFRbS10+PiA9PlxuICBoYXMob2JqLCBrZXkpICYmIG9ialtrZXldICE9PSB1bmRlZmluZWQgJiYgb2JqW2tleV0gIT09IG51bGw7XG5cbmV4cG9ydCBjb25zdCBpc0VtcHR5ID0gKHI6IFJlY29yZDxhbnksIGFueT4pOiByIGlzIHt9ID0+IHtcbiAgZm9yIChjb25zdCB4IGluIHIpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChyLCB4KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmV4cG9ydCBjb25zdCBlcXVhbCA9IDxUPihhMTogUmVjb3JkPHN0cmluZywgVD4sIGEyOiBSZWNvcmQ8c3RyaW5nLCBUPiwgZXE6IEVxLkVxPFQ+ID0gRXEuZXFBbnkpOiBib29sZWFuID0+XG4gIEVxLmVxUmVjb3JkKGVxKS5lcShhMSwgYTIpO1xuIiwiaW1wb3J0ICogYXMgVHlwZSBmcm9tICcuL1R5cGUnO1xuXG4vKipcbiAqIFRoZSBgT3B0aW9uYWxgIHR5cGUgcmVwcmVzZW50cyBhIHZhbHVlIChvZiBhbnkgdHlwZSkgdGhhdCBwb3RlbnRpYWxseSBkb2VzXG4gKiBub3QgZXhpc3QuIEFueSBgT3B0aW9uYWw8VD5gIGNhbiBlaXRoZXIgYmUgYSBgU29tZTxUPmAgKGluIHdoaWNoIGNhc2UgdGhlXG4gKiB2YWx1ZSBkb2VzIGV4aXN0KSBvciBhIGBOb25lYCAoaW4gd2hpY2ggY2FzZSB0aGUgdmFsdWUgZG9lcyBub3QgZXhpc3QpLiBUaGlzXG4gKiBtb2R1bGUgZGVmaW5lcyBhIHdob2xlIGxvdCBvZiBGUC1pbnNwaXJlZCB1dGlsaXR5IGZ1bmN0aW9ucyBmb3IgZGVhbGluZyB3aXRoXG4gKiBgT3B0aW9uYWxgIG9iamVjdHMuXG4gKlxuICogQ29tcGFyaXNvbiB3aXRoIG51bGwgb3IgdW5kZWZpbmVkOlxuICogLSBXZSBkb24ndCBnZXQgZmFuY3kgbnVsbCBjb2FsZXNjaW5nIG9wZXJhdG9ycyB3aXRoIGBPcHRpb25hbGBcbiAqIC0gV2UgZG8gZ2V0IGZhbmN5IGhlbHBlciBmdW5jdGlvbnMgd2l0aCBgT3B0aW9uYWxgXG4gKiAtIGBPcHRpb25hbGAgc3VwcG9ydCBuZXN0aW5nLCBhbmQgYWxsb3cgZm9yIHRoZSB0eXBlIHRvIHN0aWxsIGJlIG51bGxhYmxlIChvclxuICogYW5vdGhlciBgT3B0aW9uYWxgKVxuICogLSBUaGVyZSBpcyBubyBvcHRpb24gdG8gdHVybiBvZmYgc3RyaWN0LW9wdGlvbmFsLWNoZWNrcyBsaWtlIHRoZXJlIGlzIGZvclxuICogc3RyaWN0LW51bGwtY2hlY2tzXG4gKi9cbmV4cG9ydCBjbGFzcyBPcHRpb25hbDxUPiB7XG4gIHByaXZhdGUgcmVhZG9ubHkgdGFnOiBib29sZWFuO1xuICBwcml2YXRlIHJlYWRvbmx5IHZhbHVlPzogVDtcblxuICAvLyBTbmVha3kgb3B0aW1pc2F0aW9uOiBldmVyeSBpbnN0YW5jZSBvZiBPcHRpb25hbC5ub25lIGlzIGlkZW50aWNhbCwgc28ganVzdFxuICAvLyByZXVzZSB0aGUgc2FtZSBvYmplY3RcbiAgcHJpdmF0ZSBzdGF0aWMgc2luZ2xldG9uTm9uZSA9IG5ldyBPcHRpb25hbDxhbnk+KGZhbHNlKTtcblxuICAvLyBUaGUgaW50ZXJuYWwgcmVwcmVzZW50YXRpb24gaGFzIGEgYHRhZ2AgYW5kIGEgYHZhbHVlYCwgYnV0IGJvdGggYXJlXG4gIC8vIHByaXZhdGU6IGFibGUgdG8gYmUgY29uc29sZS5sb2dnZWQsIGJ1dCBub3QgYWJsZSB0byBiZSBhY2Nlc3NlZCBieSBjb2RlXG4gIHByaXZhdGUgY29uc3RydWN0b3IodGFnOiBib29sZWFuLCB2YWx1ZT86IFQpIHtcbiAgICB0aGlzLnRhZyA9IHRhZztcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICAvLyAtLS0gSWRlbnRpdGllcyAtLS1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBgT3B0aW9uYWw8VD5gIHRoYXQgKipkb2VzKiogY29udGFpbiBhIHZhbHVlLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBzb21lPFQ+KHRoaXM6IHZvaWQsIHZhbHVlOiBUKTogT3B0aW9uYWw8VD4ge1xuICAgIHJldHVybiBuZXcgT3B0aW9uYWwodHJ1ZSwgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBgT3B0aW9uYWw8VD5gIHRoYXQgKipkb2VzIG5vdCoqIGNvbnRhaW4gYSB2YWx1ZS4gYFRgIGNhbiBiZVxuICAgKiBhbnkgdHlwZSBiZWNhdXNlIHdlIGRvbid0IGFjdHVhbGx5IGhhdmUgYSBgVGAuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIG5vbmU8VCA9IG5ldmVyPih0aGlzOiB2b2lkKTogT3B0aW9uYWw8VD4ge1xuICAgIHJldHVybiBPcHRpb25hbC5zaW5nbGV0b25Ob25lO1xuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm0gYSB0cmFuc2Zvcm0gb24gYW4gYE9wdGlvbmFsYCB0eXBlLiBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpc1xuICAgKiBgT3B0aW9uYWxgIGNvbnRhaW5zIGEgdmFsdWUgb3Igbm90LCBgZm9sZGAgd2lsbCByZXR1cm4gYSB2YWx1ZSBvZiB0eXBlIGBVYC5cbiAgICogSWYgdGhpcyBgT3B0aW9uYWxgIGRvZXMgbm90IGNvbnRhaW4gYSB2YWx1ZSwgdGhlIGBVYCB3aWxsIGJlIGNyZWF0ZWQgYnlcbiAgICogY2FsbGluZyBgb25Ob25lYC4gSWYgdGhpcyBgT3B0aW9uYWxgIGRvZXMgY29udGFpbiBhIHZhbHVlLCB0aGUgYFVgIHdpbGwgYmVcbiAgICogY3JlYXRlZCBieSBjYWxsaW5nIGBvblNvbWVgLlxuICAgKlxuICAgKiBGb3IgdGhlIEZQIGVudGh1c2lhc3RzIGluIHRoZSByb29tLCB0aGlzIGZ1bmN0aW9uOlxuICAgKiAxLiBDb3VsZCBiZSB1c2VkIHRvIGltcGxlbWVudCBhbGwgb2YgdGhlIGZ1bmN0aW9ucyBiZWxvd1xuICAgKiAyLiBGb3JtcyBhIGNhdGFtb3JwaGlzbVxuICAgKi9cbiAgcHVibGljIGZvbGQ8VT4ob25Ob25lOiAoKSA9PiBVLCBvblNvbWU6ICh2YWx1ZTogVCkgPT4gVSk6IFUge1xuICAgIGlmICh0aGlzLnRhZykge1xuICAgICAgcmV0dXJuIG9uU29tZSh0aGlzLnZhbHVlIGFzIFQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb25Ob25lKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBpZiB0aGlzIGBPcHRpb25hbGAgb2JqZWN0IGNvbnRhaW5zIGEgdmFsdWUuXG4gICAqL1xuICBwdWJsaWMgaXNTb21lKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnRhZztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgdGhpcyBgT3B0aW9uYWxgIG9iamVjdCAqKmRvZXMgbm90KiogY29udGFpbiBhIHZhbHVlLlxuICAgKi9cbiAgcHVibGljIGlzTm9uZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMudGFnO1xuICB9XG5cbiAgLy8gLS0tIEZ1bmN0b3IgKG5hbWUgc3RvbGVuIGZyb20gSGFza2VsbCAvIG1hdGhzKSAtLS1cblxuICAvKipcbiAgICogUGVyZm9ybSBhIHRyYW5zZm9ybSBvbiBhbiBgT3B0aW9uYWxgIG9iamVjdCwgKippZioqIHRoZXJlIGlzIGEgdmFsdWUuIElmXG4gICAqIHlvdSBwcm92aWRlIGEgZnVuY3Rpb24gdG8gdHVybiBhIFQgaW50byBhIFUsIHRoaXMgaXMgdGhlIGZ1bmN0aW9uIHlvdSB1c2VcbiAgICogdG8gdHVybiBhbiBgT3B0aW9uYWw8VD5gIGludG8gYW4gYE9wdGlvbmFsPFU+YC4gSWYgdGhpcyAqKmRvZXMqKiBjb250YWluXG4gICAqIGEgdmFsdWUgdGhlbiB0aGUgb3V0cHV0IHdpbGwgYWxzbyBjb250YWluIGEgdmFsdWUgKHRoYXQgdmFsdWUgYmVpbmcgdGhlXG4gICAqIG91dHB1dCBvZiBgbWFwcGVyKHRoaXMudmFsdWUpYCksIGFuZCBpZiB0aGlzICoqZG9lcyBub3QqKiBjb250YWluIGEgdmFsdWVcbiAgICogdGhlbiBuZWl0aGVyIHdpbGwgdGhlIG91dHB1dC5cbiAgICovXG4gIHB1YmxpYyBtYXA8VT4obWFwcGVyOiAodmFsdWU6IFQpID0+IFUpOiBPcHRpb25hbDxVPiB7XG4gICAgaWYgKHRoaXMudGFnKSB7XG4gICAgICByZXR1cm4gT3B0aW9uYWwuc29tZShtYXBwZXIodGhpcy52YWx1ZSBhcyBUKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBPcHRpb25hbC5ub25lKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tIE1vbmFkIChuYW1lIHN0b2xlbiBmcm9tIEhhc2tlbGwgLyBtYXRocykgLS0tXG5cbiAgLyoqXG4gICAqIFBlcmZvcm0gYSB0cmFuc2Zvcm0gb24gYW4gYE9wdGlvbmFsYCBvYmplY3QsICoqaWYqKiB0aGVyZSBpcyBhIHZhbHVlLlxuICAgKiBVbmxpa2UgYG1hcGAsIGhlcmUgdGhlIHRyYW5zZm9ybSBpdHNlbGYgYWxzbyByZXR1cm5zIGFuIGBPcHRpb25hbGAuXG4gICAqL1xuICBwdWJsaWMgYmluZDxVPihiaW5kZXI6ICh2YWx1ZTogVCkgPT4gT3B0aW9uYWw8VT4pOiBPcHRpb25hbDxVPiB7XG4gICAgaWYgKHRoaXMudGFnKSB7XG4gICAgICByZXR1cm4gYmluZGVyKHRoaXMudmFsdWUgYXMgVCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBPcHRpb25hbC5ub25lKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tIFRyYXZlcnNhYmxlIChuYW1lIHN0b2xlbiBmcm9tIEhhc2tlbGwgLyBtYXRocykgLS0tXG5cbiAgLyoqXG4gICAqIEZvciBhIGdpdmVuIHByZWRpY2F0ZSwgdGhpcyBmdW5jdGlvbiBmaW5kcyBvdXQgaWYgdGhlcmUgKipleGlzdHMqKiBhIHZhbHVlXG4gICAqIGluc2lkZSB0aGlzIGBPcHRpb25hbGAgb2JqZWN0IHRoYXQgbWVldHMgdGhlIHByZWRpY2F0ZS4gSW4gcHJhY3RpY2UsIHRoaXNcbiAgICogbWVhbnMgdGhhdCBmb3IgYE9wdGlvbmFsYHMgdGhhdCBkbyBub3QgY29udGFpbiBhIHZhbHVlIGl0IHJldHVybnMgZmFsc2UgKGFzXG4gICAqIG5vIHByZWRpY2F0ZS1tZWV0aW5nIHZhbHVlIGV4aXN0cykuXG4gICAqL1xuICBwdWJsaWMgZXhpc3RzKHByZWRpY2F0ZTogKHZhbHVlOiBUKSA9PiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudGFnICYmIHByZWRpY2F0ZSh0aGlzLnZhbHVlIGFzIFQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvciBhIGdpdmVuIHByZWRpY2F0ZSwgdGhpcyBmdW5jdGlvbiBmaW5kcyBvdXQgaWYgKiphbGwqKiB0aGUgdmFsdWVzIGluc2lkZVxuICAgKiB0aGlzIGBPcHRpb25hbGAgb2JqZWN0IG1lZXQgdGhlIHByZWRpY2F0ZS4gSW4gcHJhY3RpY2UsIHRoaXMgbWVhbnMgdGhhdFxuICAgKiBmb3IgYE9wdGlvbmFsYHMgdGhhdCBkbyBub3QgY29udGFpbiBhIHZhbHVlIGl0IHJldHVybnMgdHJ1ZSAoYXMgYWxsIDBcbiAgICogb2JqZWN0cyBkbyBtZWV0IHRoZSBwcmVkaWNhdGUpLlxuICAgKi9cbiAgcHVibGljIGZvcmFsbChwcmVkaWNhdGU6ICh2YWx1ZTogVCkgPT4gYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy50YWcgfHwgcHJlZGljYXRlKHRoaXMudmFsdWUgYXMgVCk7XG4gIH1cblxuICAvKipcbiAgICogRm9yIGEgZ2l2ZW4gcHJlZGljYXRlLCBjcmVhdGUgYSBuZXcgYE9wdGlvbmFsYCBvYmplY3QgdGhhdCB3aWxsIHJldGFpblxuICAgKiBhbGwgdGhlIHZhbHVlcyBpbnNpZGUgdGhlIG9sZCBgT3B0aW9uYWxgIG9iamVjdCB0aGF0IG1lZXQgdGhlIHByZWRpY2F0ZS5cbiAgICogSW4gcHJhY3RpY2UsIHRoZSBgT3B0aW9uYWxgIG9iamVjdCBjb250YWlucyBlaXRoZXIgMCBvciAxIG9iamVjdHMsIGFuZFxuICAgKiB0aGUgb3V0cHV0IHdpbGwga2VlcCB0aGUgKHNpbmdsZSkgaW5wdXQgb2JqZWN0IChpZiBpdCBleGlzdHMpIGFzIGxvbmcgYXNcbiAgICogaXQgcGFzc2VzIHRoZSBwcmVkaWNhdGUuXG4gICAqL1xuICBwdWJsaWMgZmlsdGVyPFUgZXh0ZW5kcyBUPihwcmVkaWNhdGU6ICh2YWx1ZTogVCkgPT4gdmFsdWUgaXMgVSk6IE9wdGlvbmFsPFU+O1xuICBwdWJsaWMgZmlsdGVyKHByZWRpY2F0ZTogKHZhbHVlOiBUKSA9PiBib29sZWFuKTogT3B0aW9uYWw8VD47XG4gIHB1YmxpYyBmaWx0ZXIocHJlZGljYXRlOiAodmFsdWU6IFQpID0+IGJvb2xlYW4pOiBPcHRpb25hbDxUPiB7XG4gICAgaWYgKCF0aGlzLnRhZyB8fCBwcmVkaWNhdGUodGhpcy52YWx1ZSBhcyBUKSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBPcHRpb25hbC5ub25lKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tIEdldHRlcnMgLS0tXG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdmFsdWUgb3V0IG9mIHRoZSBpbnNpZGUgb2YgdGhlIGBPcHRpb25hbGAgb2JqZWN0LCB1c2luZyBhIGRlZmF1bHRcbiAgICogYHJlcGxhY2VtZW50YCB2YWx1ZSBpZiB0aGUgcHJvdmlkZWQgYE9wdGlvbmFsYCBvYmplY3QgZG9lcyBub3QgY29udGFpbiBhXG4gICAqIHZhbHVlLlxuICAgKi9cbiAgcHVibGljIGdldE9yPFUgPSBUPihyZXBsYWNlbWVudDogVSk6IFQgfCBVIHtcbiAgICByZXR1cm4gdGhpcy50YWcgPyB0aGlzLnZhbHVlIGFzIFQgOiByZXBsYWNlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHZhbHVlIG91dCBvZiB0aGUgaW5zaWRlIG9mIHRoZSBgT3B0aW9uYWxgIG9iamVjdCwgdXNpbmcgYSBkZWZhdWx0XG4gICAqIGByZXBsYWNlbWVudGAgdmFsdWUgaWYgdGhlIHByb3ZpZGVkIGBPcHRpb25hbGAgb2JqZWN0IGRvZXMgbm90IGNvbnRhaW4gYVxuICAgKiB2YWx1ZS4gIFVubGlrZSBgZ2V0T3JgLCBpbiB0aGlzIG1ldGhvZCB0aGUgYHJlcGxhY2VtZW50YCBvYmplY3QgaXMgYWxzb1xuICAgKiBgT3B0aW9uYWxgIC0gbWVhbmluZyB0aGF0IHRoaXMgbWV0aG9kIHdpbGwgYWx3YXlzIHJldHVybiBhbiBgT3B0aW9uYWxgLlxuICAgKi9cbiAgcHVibGljIG9yPFUgPSBUPihyZXBsYWNlbWVudDogT3B0aW9uYWw8VT4pOiBPcHRpb25hbDxUIHwgVT4ge1xuICAgIHJldHVybiB0aGlzLnRhZyA/IHRoaXMgOiByZXBsYWNlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHZhbHVlIG91dCBvZiB0aGUgaW5zaWRlIG9mIHRoZSBgT3B0aW9uYWxgIG9iamVjdCwgdXNpbmcgYSBkZWZhdWx0XG4gICAqIGByZXBsYWNlbWVudGAgdmFsdWUgaWYgdGhlIHByb3ZpZGVkIGBPcHRpb25hbGAgb2JqZWN0IGRvZXMgbm90IGNvbnRhaW4gYVxuICAgKiB2YWx1ZS4gVW5saWtlIGBnZXRPcmAsIGluIHRoaXMgbWV0aG9kIHRoZSBgcmVwbGFjZW1lbnRgIHZhbHVlIGlzXG4gICAqIFwidGh1bmtlZFwiIC0gdGhhdCBpcyB0byBzYXkgdGhhdCB5b3UgZG9uJ3QgcGFzcyBhIHZhbHVlIHRvIGBnZXRPclRodW5rYCwgeW91XG4gICAqIHBhc3MgYSBmdW5jdGlvbiB3aGljaCAoaWYgY2FsbGVkKSB3aWxsICoqcmV0dXJuKiogdGhlIGB2YWx1ZWAgeW91IHdhbnQgdG9cbiAgICogdXNlLlxuICAgKi9cbiAgcHVibGljIGdldE9yVGh1bms8VSA9IFQ+KHRodW5rOiAoKSA9PiBVKTogVCB8IFUge1xuICAgIHJldHVybiB0aGlzLnRhZyA/IHRoaXMudmFsdWUgYXMgVCA6IHRodW5rKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB2YWx1ZSBvdXQgb2YgdGhlIGluc2lkZSBvZiB0aGUgYE9wdGlvbmFsYCBvYmplY3QsIHVzaW5nIGEgZGVmYXVsdFxuICAgKiBgcmVwbGFjZW1lbnRgIHZhbHVlIGlmIHRoZSBwcm92aWRlZCBPcHRpb25hbCBvYmplY3QgZG9lcyBub3QgY29udGFpbiBhXG4gICAqIHZhbHVlLlxuICAgKlxuICAgKiBVbmxpa2UgYG9yYCwgaW4gdGhpcyBtZXRob2QgdGhlIGByZXBsYWNlbWVudGAgdmFsdWUgaXMgXCJ0aHVua2VkXCIgLSB0aGF0IGlzXG4gICAqIHRvIHNheSB0aGF0IHlvdSBkb24ndCBwYXNzIGEgdmFsdWUgdG8gYG9yVGh1bmtgLCB5b3UgcGFzcyBhIGZ1bmN0aW9uIHdoaWNoXG4gICAqIChpZiBjYWxsZWQpIHdpbGwgKipyZXR1cm4qKiB0aGUgYHZhbHVlYCB5b3Ugd2FudCB0byB1c2UuXG4gICAqXG4gICAqIFVubGlrZSBgZ2V0T3JUaHVua2AsIGluIHRoaXMgbWV0aG9kIHRoZSBgcmVwbGFjZW1lbnRgIHZhbHVlIGlzIGFsc29cbiAgICogYE9wdGlvbmFsYCwgbWVhbmluZyB0aGF0IHRoaXMgbWV0aG9kIHdpbGwgYWx3YXlzIHJldHVybiBhbiBgT3B0aW9uYWxgLlxuICAgKi9cbiAgcHVibGljIG9yVGh1bms8VSA9IFQ+KHRodW5rOiAoKSA9PiBPcHRpb25hbDxVPik6IE9wdGlvbmFsPFQgfCBVPiB7XG4gICAgcmV0dXJuIHRoaXMudGFnID8gdGhpcyA6IHRodW5rKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB2YWx1ZSBvdXQgb2YgdGhlIGluc2lkZSBvZiB0aGUgYE9wdGlvbmFsYCBvYmplY3QsIHRocm93aW5nIGFuXG4gICAqIGV4Y2VwdGlvbiBpZiB0aGUgcHJvdmlkZWQgYE9wdGlvbmFsYCBvYmplY3QgZG9lcyBub3QgY29udGFpbiBhIHZhbHVlLlxuICAgKlxuICAgKiBXQVJOSU5HOlxuICAgKiBZb3Ugc2hvdWxkIG9ubHkgYmUgdXNpbmcgdGhpcyBmdW5jdGlvbiBpZiB5b3Uga25vdyB0aGF0IHRoZSBgT3B0aW9uYWxgXG4gICAqIG9iamVjdCAqKmlzIG5vdCoqIGVtcHR5IChvdGhlcndpc2UgeW91J3JlIHRocm93aW5nIGV4Y2VwdGlvbnMgaW4gcHJvZHVjdGlvblxuICAgKiBjb2RlLCB3aGljaCBpcyBiYWQpLlxuICAgKlxuICAgKiBJbiB0ZXN0cyB0aGlzIGlzIG1vcmUgYWNjZXB0YWJsZS5cbiAgICpcbiAgICogUHJlZmVyIG90aGVyIG1ldGhvZHMgdG8gdGhpcywgc3VjaCBhcyBgLmVhY2hgLlxuICAgKi9cbiAgcHVibGljIGdldE9yRGllKG1lc3NhZ2U/OiBzdHJpbmcpOiBUIHtcbiAgICBpZiAoIXRoaXMudGFnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSA/PyAnQ2FsbGVkIGdldE9yRGllIG9uIE5vbmUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWUgYXMgVDtcbiAgICB9XG4gIH1cblxuICAvLyAtLS0gSW50ZXJvcCB3aXRoIG51bGwgYW5kIHVuZGVmaW5lZCAtLS1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBgT3B0aW9uYWxgIHZhbHVlIGZyb20gYSBudWxsYWJsZSAob3IgdW5kZWZpbmVkLWFibGUpIGlucHV0LlxuICAgKiBOdWxsLCBvciB1bmRlZmluZWQsIGlzIGNvbnZlcnRlZCB0byBgTm9uZWAsIGFuZCBhbnl0aGluZyBlbHNlIGlzIGNvbnZlcnRlZFxuICAgKiB0byBgU29tZWAuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGZyb208VD4odGhpczogdm9pZCwgdmFsdWU6IFQgfCBudWxsIHwgdW5kZWZpbmVkKTogT3B0aW9uYWw8Tm9uTnVsbGFibGU8VD4+IHtcbiAgICByZXR1cm4gVHlwZS5pc05vbk51bGxhYmxlKHZhbHVlKSA/IE9wdGlvbmFsLnNvbWUodmFsdWUpIDogT3B0aW9uYWwubm9uZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGFuIGBPcHRpb25hbGAgdG8gYSBudWxsYWJsZSB0eXBlLCBieSBnZXR0aW5nIHRoZSB2YWx1ZSBpZiBpdFxuICAgKiBleGlzdHMsIG9yIHJldHVybmluZyBgbnVsbGAgaWYgaXQgZG9lcyBub3QuXG4gICAqL1xuICBwdWJsaWMgZ2V0T3JOdWxsKCk6IFQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy50YWcgPyB0aGlzLnZhbHVlIGFzIFQgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGFuIGBPcHRpb25hbGAgdG8gYW4gdW5kZWZpbmVkLWFibGUgdHlwZSwgYnkgZ2V0dGluZyB0aGUgdmFsdWUgaWZcbiAgICogaXQgZXhpc3RzLCBvciByZXR1cm5pbmcgYHVuZGVmaW5lZGAgaWYgaXQgZG9lcyBub3QuXG4gICAqL1xuICBwdWJsaWMgZ2V0T3JVbmRlZmluZWQoKTogVCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cblxuICAvLyAtLS0gVXRpbGl0aWVzIC0tLVxuXG4gIC8qKlxuICAgKiBJZiB0aGUgYE9wdGlvbmFsYCBjb250YWlucyBhIHZhbHVlLCBwZXJmb3JtIGFuIGFjdGlvbiBvbiB0aGF0IHZhbHVlLlxuICAgKiBVbmxpa2UgdGhlIHJlc3Qgb2YgdGhlIG1ldGhvZHMgb24gdGhpcyB0eXBlLCBgLmVhY2hgIGhhcyBzaWRlLWVmZmVjdHMuIElmXG4gICAqIHlvdSB3YW50IHRvIHRyYW5zZm9ybSBhbiBgT3B0aW9uYWw8VD5gICoqaW50byoqIHNvbWV0aGluZywgdGhlbiB0aGlzIGlzIG5vdFxuICAgKiB0aGUgbWV0aG9kIGZvciB5b3UuIElmIHlvdSB3YW50IHRvIHVzZSBhbiBgT3B0aW9uYWw8VD5gIHRvICoqZG8qKlxuICAgKiBzb21ldGhpbmcsIHRoZW4gdGhpcyBpcyB0aGUgbWV0aG9kIGZvciB5b3UgLSBwcm92aWRlZCB5b3UncmUgb2theSB3aXRoIG5vdFxuICAgKiBkb2luZyBhbnl0aGluZyBpbiB0aGUgY2FzZSB3aGVyZSB0aGUgYE9wdGlvbmFsYCBkb2Vzbid0IGhhdmUgYSB2YWx1ZSBpbnNpZGVcbiAgICogaXQuIElmIHlvdSdyZSBub3Qgc3VyZSB3aGV0aGVyIHlvdXIgdXNlLWNhc2UgZml0cyBpbnRvIHRyYW5zZm9ybWluZ1xuICAgKiAqKmludG8qKiBzb21ldGhpbmcgb3IgKipkb2luZyoqIHNvbWV0aGluZywgY2hlY2sgd2hldGhlciBpdCBoYXMgYSByZXR1cm5cbiAgICogdmFsdWUuIElmIGl0IGRvZXMsIHlvdSBzaG91bGQgYmUgcGVyZm9ybWluZyBhIHRyYW5zZm9ybS5cbiAgICovXG4gIHB1YmxpYyBlYWNoKHdvcmtlcjogKHZhbHVlOiBUKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudGFnKSB7XG4gICAgICB3b3JrZXIodGhpcy52YWx1ZSBhcyBUKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVHVybiB0aGUgYE9wdGlvbmFsYCBvYmplY3QgaW50byBhbiBhcnJheSB0aGF0IGNvbnRhaW5zIGFsbCBvZiB0aGUgdmFsdWVzXG4gICAqIHN0b3JlZCBpbnNpZGUgdGhlIGBPcHRpb25hbGAuIEluIHByYWN0aWNlLCB0aGlzIG1lYW5zIHRoZSBvdXRwdXQgd2lsbCBoYXZlXG4gICAqIGVpdGhlciAwIG9yIDEgZWxlbWVudHMuXG4gICAqL1xuICBwdWJsaWMgdG9BcnJheSgpOiBUW10ge1xuICAgIHJldHVybiB0aGlzLnRhZyA/IFsgdGhpcy52YWx1ZSBhcyBUIF0gOiBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUdXJuIHRoZSBgT3B0aW9uYWxgIG9iamVjdCBpbnRvIGEgc3RyaW5nIGZvciBkZWJ1Z2dpbmcgb3IgcHJpbnRpbmcuIE5vdFxuICAgKiByZWNvbW1lbmRlZCBmb3IgcHJvZHVjdGlvbiBjb2RlLCBidXQgZ29vZCBmb3IgZGVidWdnaW5nLiBBbHNvIG5vdGUgdGhhdFxuICAgKiB0aGVzZSBkYXlzIGFuIGBPcHRpb25hbGAgb2JqZWN0IGNhbiBiZSBsb2dnZWQgdG8gdGhlIGNvbnNvbGUgZGlyZWN0bHksIGFuZFxuICAgKiBpdHMgaW5uZXIgdmFsdWUgKGlmIGl0IGV4aXN0cykgd2lsbCBiZSB2aXNpYmxlLlxuICAgKi9cbiAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudGFnID8gYHNvbWUoJHt0aGlzLnZhbHVlfSlgIDogJ25vbmUoKSc7XG4gIH1cbn1cbiIsImltcG9ydCB7IEdsb2JhbCB9IGZyb20gJy4vR2xvYmFsJztcblxuLyoqIHBhdGggOjogKFtTdHJpbmddLCBKc09iaj8pIC0+IEpzT2JqICovXG5leHBvcnQgY29uc3QgcGF0aCA9IDxUPihwYXJ0czogc3RyaW5nW10sIHNjb3BlPzoge30pOiBUIHwgdW5kZWZpbmVkID0+IHtcbiAgbGV0IG8gPSBzY29wZSAhPT0gdW5kZWZpbmVkICYmIHNjb3BlICE9PSBudWxsID8gc2NvcGUgOiBHbG9iYWw7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoICYmIG8gIT09IHVuZGVmaW5lZCAmJiBvICE9PSBudWxsOyArK2kpIHtcbiAgICBvID0gb1twYXJ0c1tpXV07XG4gIH1cbiAgcmV0dXJuIG87XG59O1xuXG4vKiogcmVzb2x2ZSA6OiAoU3RyaW5nLCBKc09iaj8pIC0+IEpzT2JqICovXG5leHBvcnQgY29uc3QgcmVzb2x2ZSA9IDxUPihwOiBzdHJpbmcsIHNjb3BlPzoge30pOiBUIHwgdW5kZWZpbmVkID0+IHtcbiAgY29uc3QgcGFydHMgPSBwLnNwbGl0KCcuJyk7XG4gIHJldHVybiBwYXRoKHBhcnRzLCBzY29wZSk7XG59O1xuXG4vKiogc3RlcCA6OiAoSnNPYmosIFN0cmluZykgLT4gSnNPYmogKi9cbmV4cG9ydCBjb25zdCBzdGVwID0gPFQgZXh0ZW5kcyB7fSwgSyBleHRlbmRzIGtleW9mIFQ+KG86IFQsIHBhcnQ6IEspOiBUW0tdID0+IHtcbiAgaWYgKG9bcGFydF0gPT09IHVuZGVmaW5lZCB8fCBvW3BhcnRdID09PSBudWxsKSB7XG4gICAgb1twYXJ0XSA9IHt9IGFzIFRbS107XG4gIH1cbiAgcmV0dXJuIG9bcGFydF07XG59O1xuXG4vKiogZm9yZ2UgOjogKFtTdHJpbmddLCBKc09iaj8pIC0+IEpzT2JqICovXG5leHBvcnQgY29uc3QgZm9yZ2UgPSA8VCBleHRlbmRzIHN0cmluZ1tdPihwYXJ0czogVCwgdGFyZ2V0Pzoge30pOiB7IFsgSyBpbiBUW251bWJlcl1dOiB7fX0gPT4ge1xuICBsZXQgbyA9IHRhcmdldCAhPT0gdW5kZWZpbmVkID8gdGFyZ2V0IDogR2xvYmFsO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgKytpKSB7XG4gICAgbyA9IHN0ZXAobywgcGFydHNbaV0pO1xuICB9XG4gIHJldHVybiBvO1xufTtcblxuLyoqIG5hbWVzcGFjZSA6OiAoU3RyaW5nLCBKc09iaj8pIC0+IEpzT2JqICovXG5leHBvcnQgY29uc3QgbmFtZXNwYWNlID0gKG5hbWU6IHN0cmluZywgdGFyZ2V0Pzoge30pOiB7IFtrZXk6IHN0cmluZ106IHt9fSA9PiB7XG4gIGNvbnN0IHBhcnRzID0gbmFtZS5zcGxpdCgnLicpO1xuICByZXR1cm4gZm9yZ2UocGFydHMsIHRhcmdldCk7XG59O1xuIiwiaW1wb3J0ICogYXMgU3RyQXBwZW5kIGZyb20gJy4uL3N0ci9TdHJBcHBlbmQnO1xuXG5pbXBvcnQgeyBPcHRpb25hbCB9IGZyb20gJy4vT3B0aW9uYWwnO1xuaW1wb3J0ICogYXMgVHlwZSBmcm9tICcuL1R5cGUnO1xuXG5jb25zdCBjaGVja1JhbmdlID0gKHN0cjogc3RyaW5nLCBzdWJzdHI6IHN0cmluZywgc3RhcnQ6IG51bWJlcik6IGJvb2xlYW4gPT5cbiAgc3Vic3RyID09PSAnJyB8fCBzdHIubGVuZ3RoID49IHN1YnN0ci5sZW5ndGggJiYgc3RyLnN1YnN0cihzdGFydCwgc3RhcnQgKyBzdWJzdHIubGVuZ3RoKSA9PT0gc3Vic3RyO1xuXG4vKiogR2l2ZW4gYSBzdHJpbmcgYW5kIG9iamVjdCwgcGVyZm9ybSB0ZW1wbGF0ZS1yZXBsYWNlbWVudHMgb24gdGhlIHN0cmluZywgYXMgc3BlY2lmaWVkIGJ5IHRoZSBvYmplY3QuXG4gKiBBbnkgdGVtcGxhdGUgZmllbGRzIG9mIHRoZSBmb3JtICR7bmFtZX0gYXJlIHJlcGxhY2VkIGJ5IHRoZSBzdHJpbmcgb3IgbnVtYmVyIHNwZWNpZmllZCBhcyBvYmpbXCJuYW1lXCJdXG4gKiBCYXNlZCBvbiBEb3VnbGFzIENyb2NrZm9yZCdzICdzdXBwbGFudCcgbWV0aG9kIGZvciB0ZW1wbGF0ZS1yZXBsYWNlIG9mIHN0cmluZ3MuIFVzZXMgZGlmZmVyZW50IHRlbXBsYXRlIGZvcm1hdC5cbiAqL1xuZXhwb3J0IGNvbnN0IHN1cHBsYW50ID0gKHN0cjogc3RyaW5nLCBvYmo6IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IG51bWJlcj4pOiBzdHJpbmcgPT4ge1xuICBjb25zdCBpc1N0cmluZ09yTnVtYmVyID0gKGE6IHVua25vd24pOiBhIGlzIHN0cmluZyB8IG51bWJlciA9PiB7XG4gICAgY29uc3QgdCA9IHR5cGVvZiBhO1xuICAgIHJldHVybiB0ID09PSAnc3RyaW5nJyB8fCB0ID09PSAnbnVtYmVyJztcbiAgfTtcblxuICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcJFxceyhbXnt9XSopXFx9L2csXG4gICAgKGZ1bGxNYXRjaDogc3RyaW5nLCBrZXk6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBvYmpba2V5XTtcbiAgICAgIHJldHVybiBpc1N0cmluZ09yTnVtYmVyKHZhbHVlKSA/IHZhbHVlLnRvU3RyaW5nKCkgOiBmdWxsTWF0Y2g7XG4gICAgfVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUxlYWRpbmcgPSAoc3RyOiBzdHJpbmcsIHByZWZpeDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIHN0YXJ0c1dpdGgoc3RyLCBwcmVmaXgpID8gU3RyQXBwZW5kLnJlbW92ZUZyb21TdGFydChzdHIsIHByZWZpeC5sZW5ndGgpIDogc3RyO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZVRyYWlsaW5nID0gKHN0cjogc3RyaW5nLCBzdWZmaXg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBlbmRzV2l0aChzdHIsIHN1ZmZpeCkgPyBTdHJBcHBlbmQucmVtb3ZlRnJvbUVuZChzdHIsIHN1ZmZpeC5sZW5ndGgpIDogc3RyO1xufTtcblxuZXhwb3J0IGNvbnN0IGVuc3VyZUxlYWRpbmcgPSAoc3RyOiBzdHJpbmcsIHByZWZpeDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIHN0YXJ0c1dpdGgoc3RyLCBwcmVmaXgpID8gc3RyIDogU3RyQXBwZW5kLmFkZFRvU3RhcnQoc3RyLCBwcmVmaXgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGVuc3VyZVRyYWlsaW5nID0gKHN0cjogc3RyaW5nLCBzdWZmaXg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBlbmRzV2l0aChzdHIsIHN1ZmZpeCkgPyBzdHIgOiBTdHJBcHBlbmQuYWRkVG9FbmQoc3RyLCBzdWZmaXgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbnRhaW5zID0gKHN0cjogc3RyaW5nLCBzdWJzdHI6IHN0cmluZywgc3RhcnQ6IG51bWJlciA9IDAsIGVuZD86IG51bWJlcik6IGJvb2xlYW4gPT4ge1xuICBjb25zdCBpZHggPSBzdHIuaW5kZXhPZihzdWJzdHIsIHN0YXJ0KTtcbiAgaWYgKGlkeCAhPT0gLTEpIHtcbiAgICByZXR1cm4gVHlwZS5pc1VuZGVmaW5lZChlbmQpID8gdHJ1ZSA6IGlkeCArIHN1YnN0ci5sZW5ndGggPD0gZW5kO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGNhcGl0YWxpemUgPSAoc3RyOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gc3RyID09PSAnJyA/ICcnIDogc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnN1YnN0cmluZygxKTtcbn07XG5cbi8qKiBEb2VzICdzdHInIHN0YXJ0IHdpdGggJ3ByZWZpeCc/XG4gKiAgTm90ZTogYWxsIHN0cmluZ3Mgc3RhcnQgd2l0aCB0aGUgZW1wdHkgc3RyaW5nLlxuICogICAgICAgIE1vcmUgZm9ybWFsbHksIGZvciBhbGwgc3RyaW5ncyB4LCBzdGFydHNXaXRoKHgsIFwiXCIpLlxuICogICAgICAgIFRoaXMgaXMgc28gdGhhdCBmb3IgYWxsIHN0cmluZ3MgeCBhbmQgeSwgc3RhcnRzV2l0aCh5ICsgeCwgeSlcbiAqL1xuZXhwb3J0IGNvbnN0IHN0YXJ0c1dpdGggPSAoc3RyOiBzdHJpbmcsIHByZWZpeDogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gIHJldHVybiBjaGVja1JhbmdlKHN0ciwgcHJlZml4LCAwKTtcbn07XG5cbi8qKiBEb2VzICdzdHInIGVuZCB3aXRoICdzdWZmaXgnP1xuICogIE5vdGU6IGFsbCBzdHJpbmdzIGVuZCB3aXRoIHRoZSBlbXB0eSBzdHJpbmcuXG4gKiAgICAgICAgTW9yZSBmb3JtYWxseSwgZm9yIGFsbCBzdHJpbmdzIHgsIGVuZHNXaXRoKHgsIFwiXCIpLlxuICogICAgICAgIFRoaXMgaXMgc28gdGhhdCBmb3IgYWxsIHN0cmluZ3MgeCBhbmQgeSwgZW5kc1dpdGgoeCArIHksIHkpXG4gKi9cbmV4cG9ydCBjb25zdCBlbmRzV2l0aCA9IChzdHI6IHN0cmluZywgc3VmZml4OiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgcmV0dXJuIGNoZWNrUmFuZ2Uoc3RyLCBzdWZmaXgsIHN0ci5sZW5ndGggLSBzdWZmaXgubGVuZ3RoKTtcbn07XG5cbmNvbnN0IGJsYW5rID0gKHI6IFJlZ0V4cCkgPT4gKHM6IHN0cmluZyk6IHN0cmluZyA9PlxuICBzLnJlcGxhY2UociwgJycpO1xuXG4vKiogcmVtb3ZlcyBhbGwgbGVhZGluZyBhbmQgdHJhaWxpbmcgc3BhY2VzICovXG5leHBvcnQgY29uc3QgdHJpbTogKHM6IHN0cmluZykgPT4gc3RyaW5nID1cbiAgYmxhbmsoL15cXHMrfFxccyskL2cpO1xuXG5leHBvcnQgY29uc3QgbFRyaW06IChzOiBzdHJpbmcpID0+IHN0cmluZyA9XG4gIGJsYW5rKC9eXFxzKy9nKTtcblxuZXhwb3J0IGNvbnN0IHJUcmltOiAoczogc3RyaW5nKSA9PiBzdHJpbmcgPVxuICBibGFuaygvXFxzKyQvZyk7XG5cbmV4cG9ydCBjb25zdCBpc05vdEVtcHR5ID0gKHM6IHN0cmluZyk6IGJvb2xlYW4gPT4gcy5sZW5ndGggPiAwO1xuXG5leHBvcnQgY29uc3QgaXNFbXB0eSA9IChzOiBzdHJpbmcpOiBib29sZWFuID0+ICFpc05vdEVtcHR5KHMpO1xuXG5leHBvcnQgY29uc3QgcmVwZWF0ID0gKHM6IHN0cmluZywgY291bnQ6IG51bWJlcik6IHN0cmluZyA9PiBjb3VudCA8PSAwID8gJycgOiBuZXcgQXJyYXkoY291bnQgKyAxKS5qb2luKHMpO1xuXG5leHBvcnQgY29uc3QgZnJvbUNvZGVQb2ludCA9IFN0cmluZy5mcm9tQ29kZVBvaW50O1xuXG5leHBvcnQgY29uc3QgdG9JbnQgPSAodmFsdWU6IHN0cmluZywgcmFkaXg6IG51bWJlciA9IDEwKTogT3B0aW9uYWw8bnVtYmVyPiA9PiB7XG4gIGNvbnN0IG51bSA9IHBhcnNlSW50KHZhbHVlLCByYWRpeCk7XG4gIHJldHVybiBpc05hTihudW0pID8gT3B0aW9uYWwubm9uZSgpIDogT3B0aW9uYWwuc29tZShudW0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHRvRmxvYXQgPSAodmFsdWU6IHN0cmluZyk6IE9wdGlvbmFsPG51bWJlcj4gPT4ge1xuICBjb25zdCBudW0gPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgcmV0dXJuIGlzTmFOKG51bSkgPyBPcHRpb25hbC5ub25lKCkgOiBPcHRpb25hbC5zb21lKG51bSk7XG59O1xuIiwiZXhwb3J0IGNvbnN0IGNhY2hlZCA9IDxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnk+KGY6IFQpOiAoLi4uYXJnczogUGFyYW1ldGVyczxUPikgPT4gUmV0dXJuVHlwZTxUPiA9PiB7XG4gIGxldCBjYWxsZWQgPSBmYWxzZTtcbiAgbGV0IHI6IGFueTtcbiAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgICByID0gZi5hcHBseShudWxsLCBhcmdzKTtcbiAgICB9XG4gICAgcmV0dXJuIHI7XG4gIH07XG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXdyYXBwZXItb2JqZWN0LXR5cGVzICovXG5jb25zdCBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcblxuaW50ZXJmYWNlIENvbnN0cnVjdG9yPFQgZXh0ZW5kcyBPYmplY3Q+IHtcbiAgcmVhZG9ubHkgcHJvdG90eXBlOiBUO1xuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG59XG5cbmNvbnN0IGhhc1Byb3RvID0gPFQgZXh0ZW5kcyBPYmplY3Q+KHY6IE9iamVjdCwgY29uc3RydWN0b3I6IENvbnN0cnVjdG9yPFQ+LCBwcmVkaWNhdGU6ICh2OiBPYmplY3QsIHByb3RvdHlwZTogVCkgPT4gYm9vbGVhbik6IGJvb2xlYW4gPT4ge1xuICBpZiAocHJlZGljYXRlKHYsIGNvbnN0cnVjdG9yLnByb3RvdHlwZSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICAvLyBTdHJpbmctYmFzZWQgZmFsbGJhY2sgdGltZVxuICAgIHJldHVybiB2LmNvbnN0cnVjdG9yPy5uYW1lID09PSBjb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG59O1xuXG5jb25zdCB0eXBlT2YgPSAoeDogYW55KTogc3RyaW5nID0+IHtcbiAgY29uc3QgdCA9IHR5cGVvZiB4O1xuICBpZiAoeCA9PT0gbnVsbCkge1xuICAgIHJldHVybiAnbnVsbCc7XG4gIH0gZWxzZSBpZiAodCA9PT0gJ29iamVjdCcgJiYgQXJyYXkuaXNBcnJheSh4KSkge1xuICAgIHJldHVybiAnYXJyYXknO1xuICB9IGVsc2UgaWYgKHQgPT09ICdvYmplY3QnICYmIGhhc1Byb3RvKHgsIFN0cmluZywgKG8sIHByb3RvKSA9PiBwcm90by5pc1Byb3RvdHlwZU9mKG8pKSkge1xuICAgIHJldHVybiAnc3RyaW5nJztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdDtcbiAgfVxufTtcblxuY29uc3QgaXNUeXBlID0gPFlvbG8+KHR5cGU6IHN0cmluZykgPT4gKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBZb2xvID0+XG4gIHR5cGVPZih2YWx1ZSkgPT09IHR5cGU7XG5cbmNvbnN0IGlzU2ltcGxlVHlwZSA9IDxZb2xvPih0eXBlOiBzdHJpbmcpID0+ICh2YWx1ZTogYW55KTogdmFsdWUgaXMgWW9sbyA9PlxuICB0eXBlb2YgdmFsdWUgPT09IHR5cGU7XG5cbmNvbnN0IGVxID0gPFQ+ICh0OiBUKSA9PiAoYTogYW55KTogYSBpcyBUID0+XG4gIHQgPT09IGE7XG5cbmV4cG9ydCBjb25zdCBpcyA9IDxFIGV4dGVuZHMgT2JqZWN0Pih2YWx1ZTogYW55LCBjb25zdHJ1Y3RvcjogQ29uc3RydWN0b3I8RT4pOiB2YWx1ZSBpcyBFID0+XG4gIGlzT2JqZWN0KHZhbHVlKSAmJiBoYXNQcm90bzxFPih2YWx1ZSwgY29uc3RydWN0b3IsIChvLCBwcm90bykgPT4gZ2V0UHJvdG90eXBlT2YobykgPT09IHByb3RvKTtcblxuZXhwb3J0IGNvbnN0IGlzU3RyaW5nOiAodmFsdWU6IGFueSkgPT4gdmFsdWUgaXMgc3RyaW5nID1cbiAgaXNUeXBlKCdzdHJpbmcnKTtcblxuZXhwb3J0IGNvbnN0IGlzT2JqZWN0OiAodmFsdWU6IGFueSkgPT4gdmFsdWUgaXMgT2JqZWN0ID1cbiAgaXNUeXBlKCdvYmplY3QnKTtcblxuZXhwb3J0IGNvbnN0IGlzUGxhaW5PYmplY3QgPSAodmFsdWU6IHVua25vd24pOiB2YWx1ZSBpcyBPYmplY3QgPT5cbiAgaXModmFsdWUsIE9iamVjdCk7XG5cbmV4cG9ydCBjb25zdCBpc0FycmF5OiAodmFsdWU6IGFueSkgPT4gdmFsdWUgaXMgQXJyYXk8dW5rbm93bj4gPVxuICBpc1R5cGUoJ2FycmF5Jyk7XG5cbmV4cG9ydCBjb25zdCBpc051bGw6IChhOiBhbnkpID0+IGEgaXMgbnVsbCA9XG4gIGVxKG51bGwpO1xuXG5leHBvcnQgY29uc3QgaXNCb29sZWFuOiAodmFsdWU6IGFueSkgPT4gdmFsdWUgaXMgYm9vbGVhbiA9XG4gIGlzU2ltcGxlVHlwZTxib29sZWFuPignYm9vbGVhbicpO1xuXG5leHBvcnQgY29uc3QgaXNVbmRlZmluZWQ6IChhOiBhbnkpID0+IGEgaXMgdW5kZWZpbmVkID1cbiAgZXEodW5kZWZpbmVkKTtcblxuZXhwb3J0IGNvbnN0IGlzTnVsbGFibGUgPSAoYTogYW55KTogYSBpcyBudWxsIHwgdW5kZWZpbmVkID0+XG4gIGEgPT09IG51bGwgfHwgYSA9PT0gdW5kZWZpbmVkO1xuXG5leHBvcnQgY29uc3QgaXNOb25OdWxsYWJsZSA9IDxBPiAoYTogQSB8IG51bGwgfCB1bmRlZmluZWQpOiBhIGlzIE5vbk51bGxhYmxlPEE+ID0+XG4gICFpc051bGxhYmxlKGEpO1xuXG5leHBvcnQgY29uc3QgaXNGdW5jdGlvbjogKHZhbHVlOiBhbnkpID0+IHZhbHVlIGlzIEZ1bmN0aW9uID1cbiAgaXNTaW1wbGVUeXBlPEZ1bmN0aW9uPignZnVuY3Rpb24nKTtcblxuZXhwb3J0IGNvbnN0IGlzTnVtYmVyOiAodmFsdWU6IGFueSkgPT4gdmFsdWUgaXMgbnVtYmVyID1cbiAgaXNTaW1wbGVUeXBlPG51bWJlcj4oJ251bWJlcicpO1xuXG5leHBvcnQgY29uc3QgaXNBcnJheU9mID0gPEU+KHZhbHVlOiBhbnksIHByZWQ6ICh4OiBhbnkpID0+IHggaXMgRSk6IHZhbHVlIGlzIEFycmF5PEU+ID0+IHtcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHZhbHVlLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICBpZiAoIShwcmVkKHZhbHVlW2ldKSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQgY29uc3QgaXNQcm9taXNlTGlrZSA9ICh4OiBhbnkpOiB4IGlzIFByb21pc2U8dW5rbm93bj4gPT5cbiAgaXNPYmplY3QoeClcbiAgJiYgaXNGdW5jdGlvbih4LnRoZW4pXG4gICYmIGlzRnVuY3Rpb24oeC5jYXRjaCk7XG4iLCJleHBvcnQgY29uc3QgYWRkVG9TdGFydCA9IChzdHI6IHN0cmluZywgcHJlZml4OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gcHJlZml4ICsgc3RyO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZFRvRW5kID0gKHN0cjogc3RyaW5nLCBzdWZmaXg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBzdHIgKyBzdWZmaXg7XG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlRnJvbVN0YXJ0ID0gKHN0cjogc3RyaW5nLCBudW1DaGFyczogbnVtYmVyKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIHN0ci5zdWJzdHJpbmcobnVtQ2hhcnMpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUZyb21FbmQgPSAoc3RyOiBzdHJpbmcsIG51bUNoYXJzOiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gc3RyLnN1YnN0cmluZygwLCBzdHIubGVuZ3RoIC0gbnVtQ2hhcnMpO1xufTtcbiIsImltcG9ydCB7IEZ1biwgT3B0aW9uYWwsIFRodW5rIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0IHR5cGUgeyBCcm93c2VyIGFzIEJyb3dzZXJDb3JlIH0gZnJvbSAnLi4vY29yZS9Ccm93c2VyJztcbmltcG9ydCB0eXBlIHsgT3BlcmF0aW5nU3lzdGVtIGFzIE9wZXJhdGluZ1N5c3RlbUNvcmUgfSBmcm9tICcuLi9jb3JlL09wZXJhdGluZ1N5c3RlbSc7XG5pbXBvcnQgeyBQbGF0Zm9ybURldGVjdGlvbiB9IGZyb20gJy4uL2NvcmUvUGxhdGZvcm1EZXRlY3Rpb24nO1xuaW1wb3J0IHR5cGUgeyBEZXZpY2VUeXBlIGFzIERldmljZVR5cGVDb3JlIH0gZnJvbSAnLi4vZGV0ZWN0L0RldmljZVR5cGUnO1xuXG5leHBvcnQgdHlwZSBCcm93c2VyID0gQnJvd3NlckNvcmU7XG5leHBvcnQgdHlwZSBPcGVyYXRpbmdTeXN0ZW0gPSBPcGVyYXRpbmdTeXN0ZW1Db3JlO1xuZXhwb3J0IHR5cGUgRGV2aWNlVHlwZSA9IERldmljZVR5cGVDb3JlO1xuXG5jb25zdCBtZWRpYU1hdGNoID0gKHF1ZXJ5OiBzdHJpbmcpID0+IHdpbmRvdy5tYXRjaE1lZGlhKHF1ZXJ5KS5tYXRjaGVzO1xuXG4vLyBJTVBPUlRBTlQ6IE11c3QgYmUgaW4gYSB0aHVuaywgb3RoZXJ3aXNlIHJvbGx1cCB0aGlua3MgY2FsbGluZyB0aGlzIGltbWVkaWF0ZWx5XG4vLyBjYXVzZXMgc2lkZSBlZmZlY3RzIGFuZCB3b24ndCB0cmVlIHNoYWtlIHRoaXMgYXdheVxuLy8gTm90ZTogbmF2aWdhdG9yLnVzZXJBZ2VudERhdGEgaXMgbm90IHBhcnQgb2YgdGhlIG5hdGl2ZSB0eXBlc2NyaXB0IHR5cGVzIHlldFxubGV0IHBsYXRmb3JtID0gVGh1bmsuY2FjaGVkKCgpID0+IFBsYXRmb3JtRGV0ZWN0aW9uLmRldGVjdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCwgT3B0aW9uYWwuZnJvbSgoKHdpbmRvdy5uYXZpZ2F0b3IgYXMgYW55KS51c2VyQWdlbnREYXRhKSksIG1lZGlhTWF0Y2gpKTtcblxuZXhwb3J0IGNvbnN0IGRldGVjdCA9ICgpOiBQbGF0Zm9ybURldGVjdGlvbiA9PiBwbGF0Zm9ybSgpO1xuXG5leHBvcnQgY29uc3Qgb3ZlcnJpZGUgPSAob3ZlcnJpZGVzOiBQYXJ0aWFsPFBsYXRmb3JtRGV0ZWN0aW9uPik6IHZvaWQgPT4ge1xuICBwbGF0Zm9ybSA9IEZ1bi5jb25zdGFudCh7XG4gICAgLi4uZGV0ZWN0KCksXG4gICAgLi4ub3ZlcnJpZGVzXG4gIH0pO1xufTtcbiIsImltcG9ydCB7IFJlc29sdmUsIFR5cGUgfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5pbXBvcnQgKiBhcyBHbG9iYWwgZnJvbSAnLi4vdXRpbC9HbG9iYWwnO1xuXG5jb25zdCBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcblxuLypcbiAqIElFOSBhbmQgYWJvdmVcbiAqXG4gKiBNRE4gbm8gdXNlIG9uIHRoaXMgb25lLCBidXQgaGVyZSdzIHRoZSBsaW5rIGFueXdheTpcbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL2RvY3MvV2ViL0FQSS9IVE1MRWxlbWVudFxuICovXG5jb25zdCBzYW5kSFRNTEVsZW1lbnQgPSAoc2NvcGU6IFdpbmRvdyB8IHVuZGVmaW5lZCkgPT4ge1xuICByZXR1cm4gR2xvYmFsLmdldE9yRGllKCdIVE1MRWxlbWVudCcsIHNjb3BlKSBhcyB0eXBlb2YgSFRNTEVsZW1lbnQ7XG59O1xuXG5jb25zdCBpc1Byb3RvdHlwZU9mID0gKHg6IGFueSk6IHggaXMgSFRNTEVsZW1lbnQgPT4ge1xuICAvLyB1c2UgUmVzb2x2ZSB0byBnZXQgdGhlIHdpbmRvdyBvYmplY3QgZm9yIHggYW5kIGp1c3QgcmV0dXJuIHVuZGVmaW5lZCBpZiBpdCBjYW4ndCBmaW5kIGl0LlxuICAvLyB1bmRlZmluZWQgc2NvcGUgbGF0ZXIgdHJpZ2dlcnMgdXNpbmcgdGhlIGdsb2JhbCB3aW5kb3cuXG4gIGNvbnN0IHNjb3BlOiBXaW5kb3cgfCB1bmRlZmluZWQgPSBSZXNvbHZlLnJlc29sdmUoJ293bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcnLCB4KTtcblxuICAvLyBUSU5ZLTczNzQ6IFdlIGNhbid0IHJlbHkgb24gbG9va2luZyBhdCB0aGUgb3duZXIgd2luZG93IEhUTUxFbGVtZW50IGFzIHRoZSBlbGVtZW50IG1heSBoYXZlXG4gIC8vIGJlZW4gY29uc3RydWN0ZWQgaW4gYSBkaWZmZXJlbnQgd2luZG93IGFuZCB0aGVuIGFwcGVuZGVkIHRvIHRoZSBjdXJyZW50IHdpbmRvdyBkb2N1bWVudC5cbiAgcmV0dXJuIFR5cGUuaXNPYmplY3QoeCkgJiYgKHNhbmRIVE1MRWxlbWVudChzY29wZSkucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoeCkgfHwgL15IVE1MXFx3KkVsZW1lbnQkLy50ZXN0KGdldFByb3RvdHlwZU9mKHgpLmNvbnN0cnVjdG9yLm5hbWUpKTtcbn07XG5cbmV4cG9ydCB7XG4gIGlzUHJvdG90eXBlT2Zcbn07XG4iLCJpbXBvcnQgeyBGdW4gfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5pbXBvcnQgeyBWZXJzaW9uIH0gZnJvbSAnLi4vZGV0ZWN0L1ZlcnNpb24nO1xuaW1wb3J0IHR5cGUgeyBVYUluZm8gfSBmcm9tICcuLi9pbmZvL1VhSW5mbyc7XG5cbmNvbnN0IGVkZ2UgPSAnRWRnZSc7XG5jb25zdCBjaHJvbWl1bSA9ICdDaHJvbWl1bSc7XG5jb25zdCBpZSA9ICdJRSc7XG5jb25zdCBvcGVyYSA9ICdPcGVyYSc7XG5jb25zdCBmaXJlZm94ID0gJ0ZpcmVmb3gnO1xuY29uc3Qgc2FmYXJpID0gJ1NhZmFyaSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnJvd3NlciBleHRlbmRzIFVhSW5mbyB7XG4gIHJlYWRvbmx5IGlzRWRnZTogKCkgPT4gYm9vbGVhbjtcbiAgcmVhZG9ubHkgaXNDaHJvbWl1bTogKCkgPT4gYm9vbGVhbjtcbiAgcmVhZG9ubHkgaXNJRTogKCkgPT4gYm9vbGVhbjtcbiAgcmVhZG9ubHkgaXNPcGVyYTogKCkgPT4gYm9vbGVhbjtcbiAgcmVhZG9ubHkgaXNGaXJlZm94OiAoKSA9PiBib29sZWFuO1xuICByZWFkb25seSBpc1NhZmFyaTogKCkgPT4gYm9vbGVhbjtcbn1cblxuY29uc3QgdW5rbm93biA9ICgpOiBCcm93c2VyID0+IHtcbiAgcmV0dXJuIG51KHtcbiAgICBjdXJyZW50OiB1bmRlZmluZWQsXG4gICAgdmVyc2lvbjogVmVyc2lvbi51bmtub3duKClcbiAgfSk7XG59O1xuXG5jb25zdCBudSA9IChpbmZvOiBVYUluZm8pOiBCcm93c2VyID0+IHtcbiAgY29uc3QgY3VycmVudCA9IGluZm8uY3VycmVudDtcbiAgY29uc3QgdmVyc2lvbiA9IGluZm8udmVyc2lvbjtcblxuICBjb25zdCBpc0Jyb3dzZXIgPSAobmFtZTogc3RyaW5nKSA9PiAoKTogYm9vbGVhbiA9PiBjdXJyZW50ID09PSBuYW1lO1xuXG4gIHJldHVybiB7XG4gICAgY3VycmVudCxcbiAgICB2ZXJzaW9uLFxuXG4gICAgaXNFZGdlOiBpc0Jyb3dzZXIoZWRnZSksXG4gICAgaXNDaHJvbWl1bTogaXNCcm93c2VyKGNocm9taXVtKSxcbiAgICAvLyBOT1RFOiBpc0llIGp1c3QgbG9va3MgdG9vIHdlaXJkXG4gICAgaXNJRTogaXNCcm93c2VyKGllKSxcbiAgICBpc09wZXJhOiBpc0Jyb3dzZXIob3BlcmEpLFxuICAgIGlzRmlyZWZveDogaXNCcm93c2VyKGZpcmVmb3gpLFxuICAgIGlzU2FmYXJpOiBpc0Jyb3dzZXIoc2FmYXJpKVxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IEJyb3dzZXIgPSB7XG4gIHVua25vd24sXG4gIG51LFxuICBlZGdlOiBGdW4uY29uc3RhbnQoZWRnZSksXG4gIGNocm9taXVtOiBGdW4uY29uc3RhbnQoY2hyb21pdW0pLFxuICBpZTogRnVuLmNvbnN0YW50KGllKSxcbiAgb3BlcmE6IEZ1bi5jb25zdGFudChvcGVyYSksXG4gIGZpcmVmb3g6IEZ1bi5jb25zdGFudChmaXJlZm94KSxcbiAgc2FmYXJpOiBGdW4uY29uc3RhbnQoc2FmYXJpKVxufTtcbiIsImltcG9ydCB7IEZ1biB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmltcG9ydCB7IFZlcnNpb24gfSBmcm9tICcuLi9kZXRlY3QvVmVyc2lvbic7XG5pbXBvcnQgdHlwZSB7IFVhSW5mbyB9IGZyb20gJy4uL2luZm8vVWFJbmZvJztcblxuZXhwb3J0IGludGVyZmFjZSBPcGVyYXRpbmdTeXN0ZW0gZXh0ZW5kcyBVYUluZm8ge1xuICByZWFkb25seSBpc1dpbmRvd3M6ICgpID0+IGJvb2xlYW47XG4gIHJlYWRvbmx5IGlzaU9TOiAoKSA9PiBib29sZWFuO1xuICByZWFkb25seSBpc0FuZHJvaWQ6ICgpID0+IGJvb2xlYW47XG4gIHJlYWRvbmx5IGlzTWFjT1M6ICgpID0+IGJvb2xlYW47XG4gIHJlYWRvbmx5IGlzTGludXg6ICgpID0+IGJvb2xlYW47XG4gIHJlYWRvbmx5IGlzU29sYXJpczogKCkgPT4gYm9vbGVhbjtcbiAgcmVhZG9ubHkgaXNGcmVlQlNEOiAoKSA9PiBib29sZWFuO1xuICByZWFkb25seSBpc0Nocm9tZU9TOiAoKSA9PiBib29sZWFuO1xufVxuXG5jb25zdCB3aW5kb3dzID0gJ1dpbmRvd3MnO1xuY29uc3QgaW9zID0gJ2lPUyc7XG5jb25zdCBhbmRyb2lkID0gJ0FuZHJvaWQnO1xuY29uc3QgbGludXggPSAnTGludXgnO1xuY29uc3QgbWFjb3MgPSAnbWFjT1MnO1xuY29uc3Qgc29sYXJpcyA9ICdTb2xhcmlzJztcbmNvbnN0IGZyZWVic2QgPSAnRnJlZUJTRCc7XG5jb25zdCBjaHJvbWVvcyA9ICdDaHJvbWVPUyc7XG5cbi8vIFRob3VnaCB0aGVyZSBpcyBhIGJpdCBvZiBkdXBlIHdpdGggdGhpcyBhbmQgQnJvd3NlciwgdHJ5aW5nIHRvXG4vLyByZXVzZSBjb2RlIG1ha2VzIGl0IG11Y2ggaGFyZGVyIHRvIGZvbGxvdyBhbmQgY2hhbmdlLlxuXG5jb25zdCB1bmtub3duID0gKCk6IE9wZXJhdGluZ1N5c3RlbSA9PiB7XG4gIHJldHVybiBudSh7XG4gICAgY3VycmVudDogdW5kZWZpbmVkLFxuICAgIHZlcnNpb246IFZlcnNpb24udW5rbm93bigpXG4gIH0pO1xufTtcblxuY29uc3QgbnUgPSAoaW5mbzogVWFJbmZvKTogT3BlcmF0aW5nU3lzdGVtID0+IHtcbiAgY29uc3QgY3VycmVudCA9IGluZm8uY3VycmVudDtcbiAgY29uc3QgdmVyc2lvbiA9IGluZm8udmVyc2lvbjtcblxuICBjb25zdCBpc09TID0gKG5hbWU6IHN0cmluZykgPT4gKCk6IGJvb2xlYW4gPT4gY3VycmVudCA9PT0gbmFtZTtcblxuICByZXR1cm4ge1xuICAgIGN1cnJlbnQsXG4gICAgdmVyc2lvbixcblxuICAgIGlzV2luZG93czogaXNPUyh3aW5kb3dzKSxcbiAgICAvLyBUT0RPOiBGaXggY2FwaXRhbGlzYXRpb25cbiAgICBpc2lPUzogaXNPUyhpb3MpLFxuICAgIGlzQW5kcm9pZDogaXNPUyhhbmRyb2lkKSxcbiAgICBpc01hY09TOiBpc09TKG1hY29zKSxcbiAgICBpc0xpbnV4OiBpc09TKGxpbnV4KSxcbiAgICBpc1NvbGFyaXM6IGlzT1Moc29sYXJpcyksXG4gICAgaXNGcmVlQlNEOiBpc09TKGZyZWVic2QpLFxuICAgIGlzQ2hyb21lT1M6IGlzT1MoY2hyb21lb3MpXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgT3BlcmF0aW5nU3lzdGVtID0ge1xuICB1bmtub3duLFxuICBudSxcblxuICB3aW5kb3dzOiBGdW4uY29uc3RhbnQod2luZG93cyksXG4gIGlvczogRnVuLmNvbnN0YW50KGlvcyksXG4gIGFuZHJvaWQ6IEZ1bi5jb25zdGFudChhbmRyb2lkKSxcbiAgbGludXg6IEZ1bi5jb25zdGFudChsaW51eCksXG4gIG1hY29zOiBGdW4uY29uc3RhbnQobWFjb3MpLFxuICBzb2xhcmlzOiBGdW4uY29uc3RhbnQoc29sYXJpcyksXG4gIGZyZWVic2Q6IEZ1bi5jb25zdGFudChmcmVlYnNkKSxcbiAgY2hyb21lb3M6IEZ1bi5jb25zdGFudChjaHJvbWVvcylcbn07XG4iLCJpbXBvcnQgdHlwZSB7IE9wdGlvbmFsIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0IHsgRGV2aWNlVHlwZSB9IGZyb20gJy4uL2RldGVjdC9EZXZpY2VUeXBlJztcbmltcG9ydCAqIGFzIFVhRGF0YSBmcm9tICcuLi9kZXRlY3QvVWFEYXRhJztcbmltcG9ydCAqIGFzIFVhU3RyaW5nIGZyb20gJy4uL2RldGVjdC9VYVN0cmluZyc7XG5pbXBvcnQgeyBQbGF0Zm9ybUluZm8gfSBmcm9tICcuLi9pbmZvL1BsYXRmb3JtSW5mbyc7XG5cbmltcG9ydCB7IEJyb3dzZXIgfSBmcm9tICcuL0Jyb3dzZXInO1xuaW1wb3J0IHsgT3BlcmF0aW5nU3lzdGVtIH0gZnJvbSAnLi9PcGVyYXRpbmdTeXN0ZW0nO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBsYXRmb3JtRGV0ZWN0aW9uIHtcbiAgcmVhZG9ubHkgYnJvd3NlcjogQnJvd3NlcjtcbiAgcmVhZG9ubHkgb3M6IE9wZXJhdGluZ1N5c3RlbTtcbiAgcmVhZG9ubHkgZGV2aWNlVHlwZTogRGV2aWNlVHlwZTtcbn1cblxuY29uc3QgZGV0ZWN0ID0gKHVzZXJBZ2VudDogc3RyaW5nLCB1c2VyQWdlbnREYXRhT3B0OiBPcHRpb25hbDxVYURhdGEuVXNlckFnZW50RGF0YT4sIG1lZGlhTWF0Y2g6IChxdWVyeTogc3RyaW5nKSA9PiBib29sZWFuKTogUGxhdGZvcm1EZXRlY3Rpb24gPT4ge1xuICBjb25zdCBicm93c2VycyA9IFBsYXRmb3JtSW5mby5icm93c2VycygpO1xuICBjb25zdCBvc2VzID0gUGxhdGZvcm1JbmZvLm9zZXMoKTtcblxuICBjb25zdCBicm93c2VyID0gdXNlckFnZW50RGF0YU9wdC5iaW5kKCh1c2VyQWdlbnREYXRhKSA9PiBVYURhdGEuZGV0ZWN0QnJvd3Nlcihicm93c2VycywgdXNlckFnZW50RGF0YSkpXG4gICAgLm9yVGh1bmsoKCkgPT4gVWFTdHJpbmcuZGV0ZWN0QnJvd3Nlcihicm93c2VycywgdXNlckFnZW50KSlcbiAgICAuZm9sZChCcm93c2VyLnVua25vd24sIEJyb3dzZXIubnUpO1xuXG4gIGNvbnN0IG9zID0gVWFTdHJpbmcuZGV0ZWN0T3Mob3NlcywgdXNlckFnZW50KS5mb2xkKFxuICAgIE9wZXJhdGluZ1N5c3RlbS51bmtub3duLFxuICAgIE9wZXJhdGluZ1N5c3RlbS5udVxuICApO1xuICBjb25zdCBkZXZpY2VUeXBlID0gRGV2aWNlVHlwZShvcywgYnJvd3NlciwgdXNlckFnZW50LCBtZWRpYU1hdGNoKTtcblxuICByZXR1cm4ge1xuICAgIGJyb3dzZXIsXG4gICAgb3MsXG4gICAgZGV2aWNlVHlwZVxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IFBsYXRmb3JtRGV0ZWN0aW9uID0ge1xuICBkZXRlY3Rcbn07XG4iLCJpbXBvcnQgeyBGdW4gfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5pbXBvcnQgdHlwZSB7IEJyb3dzZXIgfSBmcm9tICcuLi9jb3JlL0Jyb3dzZXInO1xuaW1wb3J0IHR5cGUgeyBPcGVyYXRpbmdTeXN0ZW0gfSBmcm9tICcuLi9jb3JlL09wZXJhdGluZ1N5c3RlbSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGV2aWNlVHlwZSB7XG4gIHJlYWRvbmx5IGlzaVBhZDogKCkgPT4gYm9vbGVhbjtcbiAgcmVhZG9ubHkgaXNpUGhvbmU6ICgpID0+IGJvb2xlYW47XG4gIHJlYWRvbmx5IGlzVGFibGV0OiAoKSA9PiBib29sZWFuO1xuICByZWFkb25seSBpc1Bob25lOiAoKSA9PiBib29sZWFuO1xuICByZWFkb25seSBpc1RvdWNoOiAoKSA9PiBib29sZWFuO1xuICByZWFkb25seSBpc0FuZHJvaWQ6ICgpID0+IGJvb2xlYW47XG4gIHJlYWRvbmx5IGlzaU9TOiAoKSA9PiBib29sZWFuO1xuICByZWFkb25seSBpc1dlYlZpZXc6ICgpID0+IGJvb2xlYW47XG4gIHJlYWRvbmx5IGlzRGVza3RvcDogKCkgPT4gYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IERldmljZVR5cGUgPSAob3M6IE9wZXJhdGluZ1N5c3RlbSwgYnJvd3NlcjogQnJvd3NlciwgdXNlckFnZW50OiBzdHJpbmcsIG1lZGlhTWF0Y2g6IChxdWVyeTogc3RyaW5nKSA9PiBib29sZWFuKTogRGV2aWNlVHlwZSA9PiB7XG4gIGNvbnN0IGlzaVBhZCA9IG9zLmlzaU9TKCkgJiYgL2lwYWQvaS50ZXN0KHVzZXJBZ2VudCkgPT09IHRydWU7XG4gIGNvbnN0IGlzaVBob25lID0gb3MuaXNpT1MoKSAmJiAhaXNpUGFkO1xuICBjb25zdCBpc01vYmlsZSA9IG9zLmlzaU9TKCkgfHwgb3MuaXNBbmRyb2lkKCk7XG4gIGNvbnN0IGlzVG91Y2ggPSBpc01vYmlsZSB8fCBtZWRpYU1hdGNoKCcocG9pbnRlcjpjb2Fyc2UpJyk7XG4gIGNvbnN0IGlzVGFibGV0ID0gaXNpUGFkIHx8ICFpc2lQaG9uZSAmJiBpc01vYmlsZSAmJiBtZWRpYU1hdGNoKCcobWluLWRldmljZS13aWR0aDo3NjhweCknKTtcbiAgY29uc3QgaXNQaG9uZSA9IGlzaVBob25lIHx8IGlzTW9iaWxlICYmICFpc1RhYmxldDtcblxuICBjb25zdCBpT1N3ZWJ2aWV3ID0gYnJvd3Nlci5pc1NhZmFyaSgpICYmIG9zLmlzaU9TKCkgJiYgL3NhZmFyaS9pLnRlc3QodXNlckFnZW50KSA9PT0gZmFsc2U7XG4gIGNvbnN0IGlzRGVza3RvcCA9ICFpc1Bob25lICYmICFpc1RhYmxldCAmJiAhaU9Td2VidmlldztcblxuICByZXR1cm4ge1xuICAgIGlzaVBhZDogRnVuLmNvbnN0YW50KGlzaVBhZCksXG4gICAgaXNpUGhvbmU6IEZ1bi5jb25zdGFudChpc2lQaG9uZSksXG4gICAgaXNUYWJsZXQ6IEZ1bi5jb25zdGFudChpc1RhYmxldCksXG4gICAgaXNQaG9uZTogRnVuLmNvbnN0YW50KGlzUGhvbmUpLFxuICAgIGlzVG91Y2g6IEZ1bi5jb25zdGFudChpc1RvdWNoKSxcbiAgICBpc0FuZHJvaWQ6IG9zLmlzQW5kcm9pZCxcbiAgICBpc2lPUzogb3MuaXNpT1MsXG4gICAgaXNXZWJWaWV3OiBGdW4uY29uc3RhbnQoaU9Td2VidmlldyksXG4gICAgaXNEZXNrdG9wOiBGdW4uY29uc3RhbnQoaXNEZXNrdG9wKVxuICB9O1xufTtcbiIsImltcG9ydCB7IEFyciwgdHlwZSBPcHRpb25hbCB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmltcG9ydCB0eXBlIHsgUGxhdGZvcm1JbmZvIH0gZnJvbSAnLi4vaW5mby9QbGF0Zm9ybUluZm8nO1xuaW1wb3J0IHR5cGUgeyBVYUluZm8gfSBmcm9tICcuLi9pbmZvL1VhSW5mbyc7XG5cbmltcG9ydCB7IFZlcnNpb24gfSBmcm9tICcuL1ZlcnNpb24nO1xuXG4vLyBUaGVyZSBhcmUgbm8gbmF0aXZlIHR5cGVzY3JpcHQgdHlwZXMgZm9yIG5hdmlnYXRvci5Vc2VyQWdlbnREYXRhIGF0IHRoaXMgc3RhZ2Ugc28gaGF2ZSB0byBtYW51YWxseSBkZWZpbmUgaXRcblxuZXhwb3J0IGludGVyZmFjZSBVc2VyQWdlbnREYXRhQnJhbmQge1xuICByZWFkb25seSBicmFuZDogc3RyaW5nO1xuICByZWFkb25seSB2ZXJzaW9uOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlckFnZW50RGF0YSB7XG4gIHJlYWRvbmx5IGJyYW5kczogVXNlckFnZW50RGF0YUJyYW5kW107XG4gIHJlYWRvbmx5IG1vYmlsZTogYm9vbGVhbjtcbn1cblxuY29uc3QgZGV0ZWN0QnJvd3NlciA9IChicm93c2VyczogUGxhdGZvcm1JbmZvW10sIHVzZXJBZ2VudERhdGE6IFVzZXJBZ2VudERhdGEpOiBPcHRpb25hbDxVYUluZm8+ID0+IHtcbiAgcmV0dXJuIEFyci5maW5kTWFwPFVzZXJBZ2VudERhdGFCcmFuZCwgVWFJbmZvPih1c2VyQWdlbnREYXRhLmJyYW5kcywgKHVhQnJhbmQpID0+IHtcbiAgICBjb25zdCBsY0JyYW5kID0gdWFCcmFuZC5icmFuZC50b0xvd2VyQ2FzZSgpO1xuICAgIHJldHVybiBBcnIuZmluZChicm93c2VycywgKGJyb3dzZXIpID0+IGxjQnJhbmQgPT09IGJyb3dzZXIuYnJhbmQ/LnRvTG93ZXJDYXNlKCkpXG4gICAgICAubWFwKChpbmZvKSA9PiAoe1xuICAgICAgICBjdXJyZW50OiBpbmZvLm5hbWUsXG4gICAgICAgIHZlcnNpb246IFZlcnNpb24ubnUocGFyc2VJbnQodWFCcmFuZC52ZXJzaW9uLCAxMCksIDApXG4gICAgICB9KSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHtcbiAgZGV0ZWN0QnJvd3NlclxufTtcbiIsImltcG9ydCB7IEFyciwgdHlwZSBPcHRpb25hbCB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmltcG9ydCB0eXBlIHsgUGxhdGZvcm1JbmZvIH0gZnJvbSAnLi4vaW5mby9QbGF0Zm9ybUluZm8nO1xuaW1wb3J0IHR5cGUgeyBVYUluZm8gfSBmcm9tICcuLi9pbmZvL1VhSW5mbyc7XG5cbmltcG9ydCB7IFZlcnNpb24gfSBmcm9tICcuL1ZlcnNpb24nO1xuXG5jb25zdCBkZXRlY3QgPSAoY2FuZGlkYXRlczogUGxhdGZvcm1JbmZvW10sIHVzZXJBZ2VudDogYW55KTogT3B0aW9uYWw8UGxhdGZvcm1JbmZvPiA9PiB7XG4gIGNvbnN0IGFnZW50ID0gU3RyaW5nKHVzZXJBZ2VudCkudG9Mb3dlckNhc2UoKTtcbiAgcmV0dXJuIEFyci5maW5kKGNhbmRpZGF0ZXMsIChjYW5kaWRhdGUpID0+IHtcbiAgICByZXR1cm4gY2FuZGlkYXRlLnNlYXJjaChhZ2VudCk7XG4gIH0pO1xufTtcblxuLy8gVGhleSAoYnJvd3NlciBhbmQgb3MpIGFyZSB0aGUgc2FtZSBhdCB0aGUgbW9tZW50LCBidXQgdGhleSBtaWdodFxuLy8gbm90IHN0YXkgdGhhdCB3YXkuXG5jb25zdCBkZXRlY3RCcm93c2VyID0gKGJyb3dzZXJzOiBQbGF0Zm9ybUluZm9bXSwgdXNlckFnZW50OiBhbnkpOiBPcHRpb25hbDxVYUluZm8+ID0+IHtcbiAgcmV0dXJuIGRldGVjdChicm93c2VycywgdXNlckFnZW50KS5tYXAoKGJyb3dzZXIpOiBVYUluZm8gPT4ge1xuICAgIGNvbnN0IHZlcnNpb24gPSBWZXJzaW9uLmRldGVjdChicm93c2VyLnZlcnNpb25SZWdleGVzLCB1c2VyQWdlbnQpO1xuICAgIHJldHVybiB7XG4gICAgICBjdXJyZW50OiBicm93c2VyLm5hbWUsXG4gICAgICB2ZXJzaW9uXG4gICAgfTtcbiAgfSk7XG59O1xuXG5jb25zdCBkZXRlY3RPcyA9IChvc2VzOiBQbGF0Zm9ybUluZm9bXSwgdXNlckFnZW50OiBhbnkpOiBPcHRpb25hbDxVYUluZm8+ID0+IHtcbiAgcmV0dXJuIGRldGVjdChvc2VzLCB1c2VyQWdlbnQpLm1hcCgob3MpOiBVYUluZm8gPT4ge1xuICAgIGNvbnN0IHZlcnNpb24gPSBWZXJzaW9uLmRldGVjdChvcy52ZXJzaW9uUmVnZXhlcywgdXNlckFnZW50KTtcbiAgICByZXR1cm4ge1xuICAgICAgY3VycmVudDogb3MubmFtZSxcbiAgICAgIHZlcnNpb25cbiAgICB9O1xuICB9KTtcbn07XG5cbmV4cG9ydCB7XG4gIGRldGVjdEJyb3dzZXIsXG4gIGRldGVjdE9zXG59O1xuIiwiZXhwb3J0IGludGVyZmFjZSBWZXJzaW9uIHtcbiAgcmVhZG9ubHkgbWFqb3I6IG51bWJlcjtcbiAgcmVhZG9ubHkgbWlub3I6IG51bWJlcjtcbn1cblxuY29uc3QgZmlyc3RNYXRjaCA9IChyZWdleGVzOiBSZWdFeHBbXSwgczogc3RyaW5nKTogUmVnRXhwIHwgdW5kZWZpbmVkID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByZWdleGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHJlZ2V4ZXNbaV07XG4gICAgaWYgKHgudGVzdChzKSkge1xuICAgICAgcmV0dXJuIHg7XG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59O1xuXG5jb25zdCBmaW5kID0gKHJlZ2V4ZXM6IFJlZ0V4cFtdLCBhZ2VudDogc3RyaW5nKTogVmVyc2lvbiA9PiB7XG4gIGNvbnN0IHIgPSBmaXJzdE1hdGNoKHJlZ2V4ZXMsIGFnZW50KTtcbiAgaWYgKCFyKSB7XG4gICAgcmV0dXJuIHsgbWFqb3I6IDAsIG1pbm9yOiAwIH07XG4gIH1cbiAgY29uc3QgZ3JvdXAgPSAoaTogbnVtYmVyKSA9PiB7XG4gICAgcmV0dXJuIE51bWJlcihhZ2VudC5yZXBsYWNlKHIsICckJyArIGkpKTtcbiAgfTtcbiAgcmV0dXJuIG51KGdyb3VwKDEpLCBncm91cCgyKSk7XG59O1xuXG5jb25zdCBkZXRlY3QgPSAodmVyc2lvblJlZ2V4ZXM6IFJlZ0V4cFtdLCBhZ2VudDogYW55KTogVmVyc2lvbiA9PiB7XG4gIGNvbnN0IGNsZWFuZWRBZ2VudCA9IFN0cmluZyhhZ2VudCkudG9Mb3dlckNhc2UoKTtcblxuICBpZiAodmVyc2lvblJlZ2V4ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHVua25vd24oKTtcbiAgfVxuICByZXR1cm4gZmluZCh2ZXJzaW9uUmVnZXhlcywgY2xlYW5lZEFnZW50KTtcbn07XG5cbmNvbnN0IHVua25vd24gPSAoKTogVmVyc2lvbiA9PiB7XG4gIHJldHVybiBudSgwLCAwKTtcbn07XG5cbmNvbnN0IG51ID0gKG1ham9yOiBudW1iZXIsIG1pbm9yOiBudW1iZXIpOiBWZXJzaW9uID0+IHtcbiAgcmV0dXJuIHsgbWFqb3IsIG1pbm9yIH07XG59O1xuXG5leHBvcnQgY29uc3QgVmVyc2lvbiA9IHtcbiAgbnUsXG4gIGRldGVjdCxcbiAgdW5rbm93blxufTtcbiIsImltcG9ydCB7IEZ1biwgU3RyaW5ncyB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGxhdGZvcm1JbmZvIHtcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICByZWFkb25seSB2ZXJzaW9uUmVnZXhlczogUmVnRXhwW107XG4gIHJlYWRvbmx5IHNlYXJjaDogKHVhc3RyaW5nOiBzdHJpbmcpID0+IGJvb2xlYW47XG4gIHJlYWRvbmx5IGJyYW5kPzogc3RyaW5nO1xufVxuXG5jb25zdCBub3JtYWxWZXJzaW9uUmVnZXggPSAvLio/dmVyc2lvblxcL1xcID8oWzAtOV0rKVxcLihbMC05XSspLiovO1xuXG5jb25zdCBjaGVja0NvbnRhaW5zID0gKHRhcmdldDogc3RyaW5nKSA9PiB7XG4gIHJldHVybiAodWFzdHJpbmc6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiBTdHJpbmdzLmNvbnRhaW5zKHVhc3RyaW5nLCB0YXJnZXQpO1xuICB9O1xufTtcblxuY29uc3QgYnJvd3NlcnM6IFBsYXRmb3JtSW5mb1tdID0gW1xuICAvLyBUaGlzIGlzIGxlZ2FjeSBFZGdlXG4gIHtcbiAgICBuYW1lOiAnRWRnZScsXG4gICAgdmVyc2lvblJlZ2V4ZXM6IFsgLy4qP2VkZ2VcXC8gPyhbMC05XSspXFwuKFswLTldKykkLyBdLFxuICAgIHNlYXJjaDogKHVhc3RyaW5nKSA9PiB7XG4gICAgICByZXR1cm4gU3RyaW5ncy5jb250YWlucyh1YXN0cmluZywgJ2VkZ2UvJykgJiYgU3RyaW5ncy5jb250YWlucyh1YXN0cmluZywgJ2Nocm9tZScpICYmIFN0cmluZ3MuY29udGFpbnModWFzdHJpbmcsICdzYWZhcmknKSAmJiBTdHJpbmdzLmNvbnRhaW5zKHVhc3RyaW5nLCAnYXBwbGV3ZWJraXQnKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRoaXMgaXMgR29vZ2xlIENocm9tZSBhbmQgQ2hyb21pdW0gRWRnZVxuICB7XG4gICAgbmFtZTogJ0Nocm9taXVtJyxcbiAgICBicmFuZDogJ0Nocm9taXVtJyxcbiAgICB2ZXJzaW9uUmVnZXhlczogWyAvLio/Y2hyb21lXFwvKFswLTldKylcXC4oWzAtOV0rKS4qLywgbm9ybWFsVmVyc2lvblJlZ2V4IF0sXG4gICAgc2VhcmNoOiAodWFzdHJpbmcpID0+IHtcbiAgICAgIHJldHVybiBTdHJpbmdzLmNvbnRhaW5zKHVhc3RyaW5nLCAnY2hyb21lJykgJiYgIVN0cmluZ3MuY29udGFpbnModWFzdHJpbmcsICdjaHJvbWVmcmFtZScpO1xuICAgIH1cbiAgfSxcbiAge1xuICAgIG5hbWU6ICdJRScsXG4gICAgdmVyc2lvblJlZ2V4ZXM6IFsgLy4qP21zaWVcXCA/KFswLTldKylcXC4oWzAtOV0rKS4qLywgLy4qP3J2OihbMC05XSspXFwuKFswLTldKykuKi8gXSxcbiAgICBzZWFyY2g6ICh1YXN0cmluZykgPT4ge1xuICAgICAgcmV0dXJuIFN0cmluZ3MuY29udGFpbnModWFzdHJpbmcsICdtc2llJykgfHwgU3RyaW5ncy5jb250YWlucyh1YXN0cmluZywgJ3RyaWRlbnQnKTtcbiAgICB9XG4gIH0sXG4gIC8vIElOVkVTVElHQVRFOiBJcyB0aGlzIHN0aWxsIHRoZSBPcGVyYSB1c2VyIGFnZW50P1xuICB7XG4gICAgbmFtZTogJ09wZXJhJyxcbiAgICB2ZXJzaW9uUmVnZXhlczogWyBub3JtYWxWZXJzaW9uUmVnZXgsIC8uKj9vcGVyYVxcLyhbMC05XSspXFwuKFswLTldKykuKi8gXSxcbiAgICBzZWFyY2g6IGNoZWNrQ29udGFpbnMoJ29wZXJhJylcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdGaXJlZm94JyxcbiAgICB2ZXJzaW9uUmVnZXhlczogWyAvLio/ZmlyZWZveFxcL1xcID8oWzAtOV0rKVxcLihbMC05XSspLiovIF0sXG4gICAgc2VhcmNoOiBjaGVja0NvbnRhaW5zKCdmaXJlZm94JylcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdTYWZhcmknLFxuICAgIHZlcnNpb25SZWdleGVzOiBbIG5vcm1hbFZlcnNpb25SZWdleCwgLy4qP2NwdSBvcyAoWzAtOV0rKV8oWzAtOV0rKS4qLyBdLFxuICAgIHNlYXJjaDogKHVhc3RyaW5nKSA9PiB7XG4gICAgICByZXR1cm4gKFN0cmluZ3MuY29udGFpbnModWFzdHJpbmcsICdzYWZhcmknKSB8fCBTdHJpbmdzLmNvbnRhaW5zKHVhc3RyaW5nLCAnbW9iaWxlLycpKSAmJiBTdHJpbmdzLmNvbnRhaW5zKHVhc3RyaW5nLCAnYXBwbGV3ZWJraXQnKTtcbiAgICB9XG4gIH1cbl07XG5cbmNvbnN0IG9zZXM6IFBsYXRmb3JtSW5mb1tdID0gW1xuICB7XG4gICAgbmFtZTogJ1dpbmRvd3MnLFxuICAgIHNlYXJjaDogY2hlY2tDb250YWlucygnd2luJyksXG4gICAgdmVyc2lvblJlZ2V4ZXM6IFsgLy4qP3dpbmRvd3NcXCBudFxcID8oWzAtOV0rKVxcLihbMC05XSspLiovIF1cbiAgfSxcbiAge1xuICAgIG5hbWU6ICdpT1MnLFxuICAgIHNlYXJjaDogKHVhc3RyaW5nKSA9PiB7XG4gICAgICByZXR1cm4gU3RyaW5ncy5jb250YWlucyh1YXN0cmluZywgJ2lwaG9uZScpIHx8IFN0cmluZ3MuY29udGFpbnModWFzdHJpbmcsICdpcGFkJyk7XG4gICAgfSxcbiAgICB2ZXJzaW9uUmVnZXhlczogWyAvLio/dmVyc2lvblxcL1xcID8oWzAtOV0rKVxcLihbMC05XSspLiovLCAvLipjcHUgb3MgKFswLTldKylfKFswLTldKykuKi8sIC8uKmNwdSBpcGhvbmUgb3MgKFswLTldKylfKFswLTldKykuKi8gXVxuICB9LFxuICB7XG4gICAgbmFtZTogJ0FuZHJvaWQnLFxuICAgIHNlYXJjaDogY2hlY2tDb250YWlucygnYW5kcm9pZCcpLFxuICAgIHZlcnNpb25SZWdleGVzOiBbIC8uKj9hbmRyb2lkXFwgPyhbMC05XSspXFwuKFswLTldKykuKi8gXVxuICB9LFxuICB7XG4gICAgbmFtZTogJ21hY09TJyxcbiAgICBzZWFyY2g6IGNoZWNrQ29udGFpbnMoJ21hYyBvcyB4JyksXG4gICAgdmVyc2lvblJlZ2V4ZXM6IFsgLy4qP21hY1xcIG9zXFwgeFxcID8oWzAtOV0rKV8oWzAtOV0rKS4qLyBdXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnTGludXgnLFxuICAgIHNlYXJjaDogY2hlY2tDb250YWlucygnbGludXgnKSxcbiAgICB2ZXJzaW9uUmVnZXhlczogWyBdXG4gIH0sXG4gIHsgbmFtZTogJ1NvbGFyaXMnLFxuICAgIHNlYXJjaDogY2hlY2tDb250YWlucygnc3Vub3MnKSxcbiAgICB2ZXJzaW9uUmVnZXhlczogWyBdXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnRnJlZUJTRCcsXG4gICAgc2VhcmNoOiBjaGVja0NvbnRhaW5zKCdmcmVlYnNkJyksXG4gICAgdmVyc2lvblJlZ2V4ZXM6IFsgXVxuICB9LFxuICB7XG4gICAgbmFtZTogJ0Nocm9tZU9TJyxcbiAgICBzZWFyY2g6IGNoZWNrQ29udGFpbnMoJ2Nyb3MnKSxcbiAgICB2ZXJzaW9uUmVnZXhlczogWyAvLio/Y2hyb21lXFwvKFswLTldKylcXC4oWzAtOV0rKS4qLyBdXG4gIH1cbl07XG5cbmV4cG9ydCBjb25zdCBQbGF0Zm9ybUluZm8gPSB7XG4gIGJyb3dzZXJzOiBGdW4uY29uc3RhbnQoYnJvd3NlcnMpLFxuICBvc2VzOiBGdW4uY29uc3RhbnQob3Nlcylcbn07XG4iLCJpbXBvcnQgeyBSZXNvbHZlIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuY29uc3QgdW5zYWZlID0gPFQ+KG5hbWU6IHN0cmluZywgc2NvcGU/OiB7fSk6IFQgfCB1bmRlZmluZWQgPT4ge1xuICByZXR1cm4gUmVzb2x2ZS5yZXNvbHZlKG5hbWUsIHNjb3BlKTtcbn07XG5cbmNvbnN0IGdldE9yRGllID0gPFQ+KG5hbWU6IHN0cmluZywgc2NvcGU/OiB7fSk6IFQgPT4ge1xuICBjb25zdCBhY3R1YWwgPSB1bnNhZmU8VD4obmFtZSwgc2NvcGUpO1xuXG4gIGlmIChhY3R1YWwgPT09IHVuZGVmaW5lZCB8fCBhY3R1YWwgPT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IobmFtZSArICcgbm90IGF2YWlsYWJsZSBvbiB0aGlzIGJyb3dzZXInKTtcbiAgfVxuICByZXR1cm4gYWN0dWFsO1xufTtcblxuZXhwb3J0IHtcbiAgZ2V0T3JEaWVcbn07XG4iLCJpbXBvcnQgdHlwZSB7IE9wdGlvbmFsIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuLyoqXG4gKiBBcHBsaWVzIGYgcmVwZWF0ZWRseSB1bnRpbCBpdCBjb21wbGV0ZXMgKGJ5IHJldHVybmluZyBPcHRpb25hbC5ub25lKCkpLlxuICpcbiAqIE5vcm1hbGx5IHdvdWxkIGp1c3QgdXNlIHJlY3Vyc2lvbiwgYnV0IEphdmFTY3JpcHQgbGFja3MgdGFpbCBjYWxsIG9wdGltaXNhdGlvbi5cbiAqXG4gKiBUaGlzIGlzIHdoYXQgcmVjdXJzaW9uIGxvb2tzIGxpa2Ugd2hlbiBtYW51YWxseSB1bnJhdmVsbGVkIDopXG4gKi9cbmNvbnN0IHRvQXJyYXkgPSA8VCA9IGFueSwgVSBleHRlbmRzIFQgPSBUPiAodGFyZ2V0OiBULCBmOiAodDogVCkgPT4gT3B0aW9uYWw8VT4pOiBVW10gPT4ge1xuICBjb25zdCByOiBVW10gPSBbXTtcblxuICBjb25zdCByZWN1cnNlID0gKGU6IFUpID0+IHtcbiAgICByLnB1c2goZSk7XG4gICAgcmV0dXJuIGYoZSk7XG4gIH07XG5cbiAgbGV0IGN1ciA9IGYodGFyZ2V0KTtcbiAgZG8ge1xuICAgIGN1ciA9IGN1ci5iaW5kKHJlY3Vyc2UpO1xuICB9IHdoaWxlIChjdXIuaXNTb21lKCkpO1xuXG4gIHJldHVybiByO1xufTtcblxuZXhwb3J0IHtcbiAgdG9BcnJheVxufTtcbiIsImltcG9ydCB7IEFyciwgRnVuIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0IHR5cGUgeyBTdWdhckVsZW1lbnQgfSBmcm9tICcuLi9ub2RlL1N1Z2FyRWxlbWVudCc7XG5pbXBvcnQgKiBhcyBTZWxlY3RvcnMgZnJvbSAnLi4vc2VhcmNoL1NlbGVjdG9ycyc7XG5cbmNvbnN0IGVxID0gKGUxOiBTdWdhckVsZW1lbnQ8dW5rbm93bj4sIGUyOiBTdWdhckVsZW1lbnQ8dW5rbm93bj4pOiBib29sZWFuID0+XG4gIGUxLmRvbSA9PT0gZTIuZG9tO1xuXG5jb25zdCBpc0VxdWFsTm9kZSA9IChlMTogU3VnYXJFbGVtZW50PE5vZGU+LCBlMjogU3VnYXJFbGVtZW50PE5vZGU+KTogYm9vbGVhbiA9PlxuICBlMS5kb20uaXNFcXVhbE5vZGUoZTIuZG9tKTtcblxuY29uc3QgbWVtYmVyID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDx1bmtub3duPiwgZWxlbWVudHM6IFN1Z2FyRWxlbWVudDx1bmtub3duPltdKTogYm9vbGVhbiA9PlxuICBBcnIuZXhpc3RzKGVsZW1lbnRzLCBGdW4uY3VycnkoZXEsIGVsZW1lbnQpKTtcblxuLy8gUmV0dXJuczogdHJ1ZSBpZiBub2RlIGUxIGNvbnRhaW5zIGUyLCBvdGhlcndpc2UgZmFsc2UuXG4vLyAocmV0dXJucyBmYWxzZSBpZiBlMT09PWUyOiBBIG5vZGUgZG9lcyBub3QgY29udGFpbiBpdHNlbGYpLlxuY29uc3QgY29udGFpbnMgPSAoZTE6IFN1Z2FyRWxlbWVudDxOb2RlPiwgZTI6IFN1Z2FyRWxlbWVudDxOb2RlPik6IGJvb2xlYW4gPT4ge1xuICBjb25zdCBkMSA9IGUxLmRvbTtcbiAgY29uc3QgZDIgPSBlMi5kb207XG4gIHJldHVybiBkMSA9PT0gZDIgPyBmYWxzZSA6IGQxLmNvbnRhaW5zKGQyKTtcbn07XG5cbmNvbnN0IGlzID0gU2VsZWN0b3JzLmlzO1xuXG5leHBvcnQge1xuICBlcSxcbiAgaXNFcXVhbE5vZGUsXG4gIG1lbWJlcixcbiAgY29udGFpbnMsXG4gIC8vIE9ubHkgdXNlZCBieSBEb21Vbml2ZXJzZS4gUmVtb3ZlIChvciBzaG91bGQgU2VsZWN0b3JzLmlzIG1vdmUgaGVyZT8pXG4gIGlzXG59O1xuIiwiaW1wb3J0IHR5cGUgeyBTdWdhckVsZW1lbnQgfSBmcm9tICcuLi9ub2RlL1N1Z2FyRWxlbWVudCc7XG5pbXBvcnQgKiBhcyBUcmF2ZXJzZSBmcm9tICcuLi9zZWFyY2gvVHJhdmVyc2UnO1xuXG5jb25zdCBiZWZvcmUgPSAobWFya2VyOiBTdWdhckVsZW1lbnQ8Tm9kZT4sIGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPik6IHZvaWQgPT4ge1xuICBjb25zdCBwYXJlbnQgPSBUcmF2ZXJzZS5wYXJlbnQobWFya2VyKTtcbiAgcGFyZW50LmVhY2goKHYpID0+IHtcbiAgICB2LmRvbS5pbnNlcnRCZWZvcmUoZWxlbWVudC5kb20sIG1hcmtlci5kb20pO1xuICB9KTtcbn07XG5cbmNvbnN0IGFmdGVyID0gKG1hcmtlcjogU3VnYXJFbGVtZW50PE5vZGU+LCBlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiB2b2lkID0+IHtcbiAgY29uc3Qgc2libGluZyA9IFRyYXZlcnNlLm5leHRTaWJsaW5nKG1hcmtlcik7XG4gIHNpYmxpbmcuZm9sZCgoKSA9PiB7XG4gICAgY29uc3QgcGFyZW50ID0gVHJhdmVyc2UucGFyZW50KG1hcmtlcik7XG4gICAgcGFyZW50LmVhY2goKHYpID0+IHtcbiAgICAgIGFwcGVuZCh2LCBlbGVtZW50KTtcbiAgICB9KTtcbiAgfSwgKHYpID0+IHtcbiAgICBiZWZvcmUodiwgZWxlbWVudCk7XG4gIH0pO1xufTtcblxuY29uc3QgcHJlcGVuZCA9IChwYXJlbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPiwgZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KTogdm9pZCA9PiB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSBUcmF2ZXJzZS5maXJzdENoaWxkKHBhcmVudCk7XG4gIGZpcnN0Q2hpbGQuZm9sZCgoKSA9PiB7XG4gICAgYXBwZW5kKHBhcmVudCwgZWxlbWVudCk7XG4gIH0sICh2KSA9PiB7XG4gICAgcGFyZW50LmRvbS5pbnNlcnRCZWZvcmUoZWxlbWVudC5kb20sIHYuZG9tKTtcbiAgfSk7XG59O1xuXG5jb25zdCBhcHBlbmQgPSAocGFyZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4sIGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPik6IHZvaWQgPT4ge1xuICBwYXJlbnQuZG9tLmFwcGVuZENoaWxkKGVsZW1lbnQuZG9tKTtcbn07XG5cbmNvbnN0IGFwcGVuZEF0ID0gKHBhcmVudDogU3VnYXJFbGVtZW50PE5vZGU+LCBlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4sIGluZGV4OiBudW1iZXIpOiB2b2lkID0+IHtcbiAgVHJhdmVyc2UuY2hpbGQocGFyZW50LCBpbmRleCkuZm9sZCgoKSA9PiB7XG4gICAgYXBwZW5kKHBhcmVudCwgZWxlbWVudCk7XG4gIH0sICh2KSA9PiB7XG4gICAgYmVmb3JlKHYsIGVsZW1lbnQpO1xuICB9KTtcbn07XG5cbmNvbnN0IHdyYXAgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+LCB3cmFwcGVyOiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiB2b2lkID0+IHtcbiAgYmVmb3JlKGVsZW1lbnQsIHdyYXBwZXIpO1xuICBhcHBlbmQod3JhcHBlciwgZWxlbWVudCk7XG59O1xuXG5leHBvcnQge1xuICBiZWZvcmUsXG4gIGFmdGVyLFxuICBwcmVwZW5kLFxuICBhcHBlbmQsXG4gIGFwcGVuZEF0LFxuICB3cmFwXG59O1xuIiwiaW1wb3J0IHsgU3VnYXJFbGVtZW50IH0gZnJvbSAnLi4vbm9kZS9TdWdhckVsZW1lbnQnO1xuaW1wb3J0ICogYXMgU3VnYXJIZWFkIGZyb20gJy4uL25vZGUvU3VnYXJIZWFkJztcbmltcG9ydCAqIGFzIEF0dHJpYnV0ZSBmcm9tICcuLi9wcm9wZXJ0aWVzL0F0dHJpYnV0ZSc7XG5pbXBvcnQgKiBhcyBQbGF0Zm9ybSBmcm9tICcuLi92aWV3L1BsYXRmb3JtJztcblxuaW1wb3J0ICogYXMgSW5zZXJ0IGZyb20gJy4vSW5zZXJ0JztcblxuY29uc3QgYWRkVG9IZWFkID0gKGRvYzogU3VnYXJFbGVtZW50PERvY3VtZW50PiwgdGFnOiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiB2b2lkID0+IHtcbiAgY29uc3QgaGVhZCA9IFN1Z2FySGVhZC5nZXRIZWFkKGRvYyk7XG4gIEluc2VydC5hcHBlbmQoaGVhZCwgdGFnKTtcbn07XG5cbmNvbnN0IGFkZFN0eWxlc2hlZXQgPSAodXJsOiBzdHJpbmcsIHNjb3BlPzogU3VnYXJFbGVtZW50PERvY3VtZW50Pik6IFN1Z2FyRWxlbWVudDxIVE1MTGlua0VsZW1lbnQ+ID0+IHtcbiAgY29uc3QgZG9jID0gc2NvcGUgfHwgU3VnYXJFbGVtZW50LmZyb21Eb20oZG9jdW1lbnQpO1xuXG4gIGNvbnN0IGxpbmsgPSBTdWdhckVsZW1lbnQuZnJvbVRhZygnbGluaycsIGRvYy5kb20pOyAvLyBXZSByZWFsbHkgbmVlZCB0byBmaXggdGhhdCBTdWdhckVsZW1lbnQgQVBJXG5cbiAgQXR0cmlidXRlLnNldEFsbChsaW5rLCB7XG4gICAgcmVsOiAnc3R5bGVzaGVldCcsXG4gICAgdHlwZTogJ3RleHQvY3NzJyxcbiAgICBocmVmOiB1cmxcbiAgfSk7XG5cbiAgYWRkVG9IZWFkKGRvYywgbGluayk7XG4gIHJldHVybiBsaW5rO1xufTtcblxuY29uc3QgZ2V0UHJldmVudENsaWNrc09uTGlua3NTY3JpcHQgPSAoKTogc3RyaW5nID0+IHtcbiAgY29uc3QgaXNNYWNPU09ySU9TID0gUGxhdGZvcm0uaXNNYWNPUygpIHx8IFBsYXRmb3JtLmlzaU9TKCk7XG5cbiAgY29uc3QgZm4gPSAoaXNNYWNPU09ySU9TOiBib29sZWFuKSA9PiB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZm9yIChsZXQgZWxtID0gZS50YXJnZXQgYXMgTm9kZSB8IG51bGw7IGVsbTsgZWxtID0gZWxtLnBhcmVudE5vZGUpIHtcbiAgICAgICAgaWYgKGVsbS5ub2RlTmFtZSA9PT0gJ0EnKSB7XG4gICAgICAgICAgY29uc3QgYW5jaG9yID0gZWxtIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgIGNvbnN0IGhyZWYgPSBhbmNob3IuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG5cbiAgICAgICAgICBpZiAoaHJlZiAmJiBocmVmLnN0YXJ0c1dpdGgoJyMnKSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhyZWYuc3Vic3RyaW5nKDEpKTtcblxuICAgICAgICAgICAgaWYgKHRhcmdldEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgdGFyZ2V0RWxlbWVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGlzTWV0YUtleVByZXNzZWQgPSBpc01hY09TT3JJT1MgPyBlLm1ldGFLZXkgOiBlLmN0cmxLZXkgJiYgIWUuYWx0S2V5O1xuXG4gICAgICAgICAgaWYgKCFpc01ldGFLZXlQcmVzc2VkKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgZmFsc2UpO1xuICB9O1xuXG4gIHJldHVybiBgPHNjcmlwdD4oJHtmbi50b1N0cmluZygpfSkoJHtpc01hY09TT3JJT1N9KTwvc2NyaXB0PmA7XG59O1xuXG5leHBvcnQge1xuICBhZGRTdHlsZXNoZWV0LFxuICBnZXRQcmV2ZW50Q2xpY2tzT25MaW5rc1NjcmlwdFxufTtcbiIsImNvbnN0IEFUVFJJQlVURSA9IDI7XG5jb25zdCBDREFUQV9TRUNUSU9OID0gNDtcbmNvbnN0IENPTU1FTlQgPSA4O1xuY29uc3QgRE9DVU1FTlQgPSA5O1xuY29uc3QgRE9DVU1FTlRfVFlQRSA9IDEwO1xuY29uc3QgRE9DVU1FTlRfRlJBR01FTlQgPSAxMTtcbmNvbnN0IEVMRU1FTlQgPSAxO1xuY29uc3QgVEVYVCA9IDM7XG5jb25zdCBQUk9DRVNTSU5HX0lOU1RSVUNUSU9OID0gNztcbmNvbnN0IEVOVElUWV9SRUZFUkVOQ0UgPSA1O1xuY29uc3QgRU5USVRZID0gNjtcbmNvbnN0IE5PVEFUSU9OID0gMTI7XG5cbmV4cG9ydCB7XG4gIEFUVFJJQlVURSxcbiAgQ0RBVEFfU0VDVElPTixcbiAgQ09NTUVOVCxcbiAgRE9DVU1FTlQsXG4gIERPQ1VNRU5UX1RZUEUsXG4gIERPQ1VNRU5UX0ZSQUdNRU5ULFxuICBFTEVNRU5ULFxuICBURVhULFxuICBQUk9DRVNTSU5HX0lOU1RSVUNUSU9OLFxuICBFTlRJVFlfUkVGRVJFTkNFLFxuICBFTlRJVFksXG4gIE5PVEFUSU9OXG59O1xuIiwiaW1wb3J0IHsgT3B0aW9uYWwgfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5pbXBvcnQgdHlwZSB7IEhUTUxFbGVtZW50RnVsbFRhZ05hbWVNYXAgfSBmcm9tICcuLi8uLi9hbGllbi9Eb21UeXBlcyc7XG5cbmludGVyZmFjZSBTdWdhckVsZW1lbnQ8VCA9IGFueT4ge1xuICByZWFkb25seSBkb206IFQ7XG59XG5cbmNvbnN0IGZyb21IdG1sID0gPEUgZXh0ZW5kcyBOb2RlID0gTm9kZSAmIENoaWxkTm9kZT4gKGh0bWw6IHN0cmluZywgc2NvcGU/OiBEb2N1bWVudCB8IG51bGwpOiBTdWdhckVsZW1lbnQ8RT4gPT4ge1xuICBjb25zdCBkb2MgPSBzY29wZSB8fCBkb2N1bWVudDtcbiAgY29uc3QgZGl2ID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuaW5uZXJIVE1MID0gaHRtbDtcbiAgaWYgKCFkaXYuaGFzQ2hpbGROb2RlcygpIHx8IGRpdi5jaGlsZE5vZGVzLmxlbmd0aCA+IDEpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gJ0hUTUwgZG9lcyBub3QgaGF2ZSBhIHNpbmdsZSByb290IG5vZGUnO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5lcnJvcihtZXNzYWdlLCBodG1sKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIH1cbiAgcmV0dXJuIGZyb21Eb20oZGl2LmNoaWxkTm9kZXNbMF0gYXMgdW5rbm93biBhcyBFKTtcbn07XG5cbmNvbnN0IGZyb21UYWc6IHtcbiAgPEsgZXh0ZW5kcyBrZXlvZiBIVE1MRWxlbWVudEZ1bGxUYWdOYW1lTWFwPih0YWc6IEssIHNjb3BlPzogRG9jdW1lbnQgfCBudWxsKTogU3VnYXJFbGVtZW50PEhUTUxFbGVtZW50RnVsbFRhZ05hbWVNYXBbS10+O1xuICAodGFnOiBzdHJpbmcsIHNjb3BlPzogRG9jdW1lbnQgfCBudWxsKTogU3VnYXJFbGVtZW50PEhUTUxFbGVtZW50Pjtcbn0gPSAodGFnOiBzdHJpbmcsIHNjb3BlPzogRG9jdW1lbnQgfCBudWxsKTogU3VnYXJFbGVtZW50PEhUTUxFbGVtZW50PiA9PiB7XG4gIGNvbnN0IGRvYyA9IHNjb3BlIHx8IGRvY3VtZW50O1xuICBjb25zdCBub2RlID0gZG9jLmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgcmV0dXJuIGZyb21Eb20obm9kZSk7XG59O1xuXG5jb25zdCBmcm9tVGV4dCA9ICh0ZXh0OiBzdHJpbmcsIHNjb3BlPzogRG9jdW1lbnQgfCBudWxsKTogU3VnYXJFbGVtZW50PFRleHQ+ID0+IHtcbiAgY29uc3QgZG9jID0gc2NvcGUgfHwgZG9jdW1lbnQ7XG4gIGNvbnN0IG5vZGUgPSBkb2MuY3JlYXRlVGV4dE5vZGUodGV4dCk7XG4gIHJldHVybiBmcm9tRG9tKG5vZGUpO1xufTtcblxuY29uc3QgZnJvbURvbSA9IDxUIGV4dGVuZHMgTm9kZSB8IFdpbmRvdz4gKG5vZGU6IFQpOiBTdWdhckVsZW1lbnQ8VD4gPT4ge1xuICAvLyBUT0RPOiBDb25zaWRlciByZW1vdmluZyB0aGlzIGNoZWNrLCBidXQgbGVmdCBhdG0gZm9yIHNhZmV0eVxuICBpZiAobm9kZSA9PT0gbnVsbCB8fCBub2RlID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vZGUgY2Fubm90IGJlIG51bGwgb3IgdW5kZWZpbmVkJyk7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBkb206IG5vZGVcbiAgfTtcbn07XG5cbmNvbnN0IGZyb21Qb2ludCA9IChkb2NFbG06IFN1Z2FyRWxlbWVudDxEb2N1bWVudD4sIHg6IG51bWJlciwgeTogbnVtYmVyKTogT3B0aW9uYWw8U3VnYXJFbGVtZW50PEVsZW1lbnQ+PiA9PlxuICBPcHRpb25hbC5mcm9tKGRvY0VsbS5kb20uZWxlbWVudEZyb21Qb2ludCh4LCB5KSkubWFwKGZyb21Eb20pO1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxuY29uc3QgU3VnYXJFbGVtZW50ID0ge1xuICBmcm9tSHRtbCxcbiAgZnJvbVRhZyxcbiAgZnJvbVRleHQsXG4gIGZyb21Eb20sXG4gIGZyb21Qb2ludFxufTtcblxuZXhwb3J0IHtcbiAgU3VnYXJFbGVtZW50XG59O1xuIiwiaW1wb3J0IHsgU3VnYXJFbGVtZW50IH0gZnJvbSAnLi9TdWdhckVsZW1lbnQnO1xuXG5leHBvcnQgY29uc3QgaGVhZCA9ICgpOiBTdWdhckVsZW1lbnQ8SFRNTEhlYWRFbGVtZW50PiA9PiBnZXRIZWFkKFN1Z2FyRWxlbWVudC5mcm9tRG9tKGRvY3VtZW50KSk7XG5cbmV4cG9ydCBjb25zdCBnZXRIZWFkID0gKGRvYzogU3VnYXJFbGVtZW50PERvY3VtZW50Pik6IFN1Z2FyRWxlbWVudDxIVE1MSGVhZEVsZW1lbnQ+ID0+IHtcbiAgLypcbiAgICogSUU5IGFuZCBhYm92ZSBwZXJcbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RvY3VtZW50L2hlYWRcbiAgICovXG4gIGNvbnN0IGIgPSBkb2MuZG9tLmhlYWQ7XG4gIGlmIChiID09PSBudWxsIHx8IGIgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignSGVhZCBpcyBub3QgYXZhaWxhYmxlIHlldCcpO1xuICB9XG4gIHJldHVybiBTdWdhckVsZW1lbnQuZnJvbURvbShiKTtcbn07XG4iLCJpbXBvcnQgeyBTYW5kSFRNTEVsZW1lbnQgfSBmcm9tICdAZXBob3gvc2FuZCc7XG5cbmltcG9ydCB0eXBlIHsgSFRNTEVsZW1lbnRGdWxsVGFnTmFtZU1hcCB9IGZyb20gJy4uLy4uL2FsaWVuL0RvbVR5cGVzJztcblxuaW1wb3J0ICogYXMgTm9kZVR5cGVzIGZyb20gJy4vTm9kZVR5cGVzJztcbmltcG9ydCB0eXBlIHsgU3VnYXJFbGVtZW50IH0gZnJvbSAnLi9TdWdhckVsZW1lbnQnO1xuXG5jb25zdCBuYW1lID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPik6IHN0cmluZyA9PiB7XG4gIGNvbnN0IHIgPSBlbGVtZW50LmRvbS5ub2RlTmFtZTtcbiAgcmV0dXJuIHIudG9Mb3dlckNhc2UoKTtcbn07XG5cbmNvbnN0IHR5cGUgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KTogbnVtYmVyID0+XG4gIGVsZW1lbnQuZG9tLm5vZGVUeXBlO1xuXG5jb25zdCB2YWx1ZSA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBzdHJpbmcgfCBudWxsID0+XG4gIGVsZW1lbnQuZG9tLm5vZGVWYWx1ZTtcblxuY29uc3QgaXNUeXBlID0gPEUgZXh0ZW5kcyBOb2RlPiAodDogbnVtYmVyKSA9PiAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KTogZWxlbWVudCBpcyBTdWdhckVsZW1lbnQ8RT4gPT5cbiAgdHlwZShlbGVtZW50KSA9PT0gdDtcblxuY29uc3QgaXNDb21tZW50ID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPik6IGVsZW1lbnQgaXMgU3VnYXJFbGVtZW50PENvbW1lbnQ+ID0+XG4gIHR5cGUoZWxlbWVudCkgPT09IE5vZGVUeXBlcy5DT01NRU5UIHx8IG5hbWUoZWxlbWVudCkgPT09ICcjY29tbWVudCc7XG5cbmNvbnN0IGlzSFRNTEVsZW1lbnQgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KTogZWxlbWVudCBpcyBTdWdhckVsZW1lbnQ8SFRNTEVsZW1lbnQ+ID0+XG4gIGlzRWxlbWVudChlbGVtZW50KSAmJiBTYW5kSFRNTEVsZW1lbnQuaXNQcm90b3R5cGVPZihlbGVtZW50LmRvbSk7XG5cbmNvbnN0IGlzRWxlbWVudCA9IGlzVHlwZTxFbGVtZW50PihOb2RlVHlwZXMuRUxFTUVOVCk7XG5jb25zdCBpc1RleHQgPSBpc1R5cGU8VGV4dD4oTm9kZVR5cGVzLlRFWFQpO1xuY29uc3QgaXNEb2N1bWVudCA9IGlzVHlwZTxEb2N1bWVudD4oTm9kZVR5cGVzLkRPQ1VNRU5UKTtcbmNvbnN0IGlzRG9jdW1lbnRGcmFnbWVudCA9IGlzVHlwZTxEb2N1bWVudEZyYWdtZW50PihOb2RlVHlwZXMuRE9DVU1FTlRfRlJBR01FTlQpO1xuXG5jb25zdCBpc1RhZyA9IDxLIGV4dGVuZHMga2V5b2YgSFRNTEVsZW1lbnRGdWxsVGFnTmFtZU1hcD4odGFnOiBLKSA9PiAoZTogU3VnYXJFbGVtZW50PE5vZGU+KTogZSBpcyBTdWdhckVsZW1lbnQ8SFRNTEVsZW1lbnRGdWxsVGFnTmFtZU1hcFtLXT4gPT5cbiAgaXNFbGVtZW50KGUpICYmIG5hbWUoZSkgPT09IHRhZztcblxuZXhwb3J0IHtcbiAgbmFtZSxcbiAgdHlwZSxcbiAgdmFsdWUsXG4gIGlzRWxlbWVudCxcbiAgaXNIVE1MRWxlbWVudCxcbiAgaXNUZXh0LFxuICBpc0RvY3VtZW50LFxuICBpc0RvY3VtZW50RnJhZ21lbnQsXG4gIGlzQ29tbWVudCxcbiAgaXNUYWdcbn07XG4iLCJpbXBvcnQgeyBBcnIsIE9iaiwgT3B0aW9uYWwsIFR5cGUgfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5pbXBvcnQgdHlwZSB7IFN1Z2FyRWxlbWVudCB9IGZyb20gJy4uL25vZGUvU3VnYXJFbGVtZW50JztcbmltcG9ydCAqIGFzIFN1Z2FyTm9kZSBmcm9tICcuLi9ub2RlL1N1Z2FyTm9kZSc7XG5cbmNvbnN0IHJhd1NldCA9IChkb206IEVsZW1lbnQsIGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIHwgYm9vbGVhbiB8IG51bWJlcik6IHZvaWQgPT4ge1xuICAvKlxuICAgKiBKUXVlcnkgY29lcmNlZCBldmVyeXRoaW5nIHRvIGEgc3RyaW5nLCBhbmQgc2lsZW50bHkgZGlkIG5vdGhpbmcgb24gdGV4dCBub2RlL251bGwvdW5kZWZpbmVkLlxuICAgKlxuICAgKiBXZSBmYWlsIG9uIHRob3NlIGludmFsaWQgY2FzZXMsIG9ubHkgYWxsb3dpbmcgbnVtYmVycyBhbmQgYm9vbGVhbnMuXG4gICAqL1xuICBpZiAoVHlwZS5pc1N0cmluZyh2YWx1ZSkgfHwgVHlwZS5pc0Jvb2xlYW4odmFsdWUpIHx8IFR5cGUuaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgZG9tLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlICsgJycpO1xuICB9IGVsc2Uge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5lcnJvcignSW52YWxpZCBjYWxsIHRvIEF0dHJpYnV0ZS5zZXQuIEtleSAnLCBrZXksICc6OiBWYWx1ZSAnLCB2YWx1ZSwgJzo6IEVsZW1lbnQgJywgZG9tKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0F0dHJpYnV0ZSB2YWx1ZSB3YXMgbm90IHNpbXBsZScpO1xuICB9XG59O1xuXG5jb25zdCBzZXQgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PEVsZW1lbnQ+LCBrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyB8IGJvb2xlYW4gfCBudW1iZXIpOiB2b2lkID0+IHtcbiAgcmF3U2V0KGVsZW1lbnQuZG9tLCBrZXksIHZhbHVlKTtcbn07XG5cbmNvbnN0IHNldEFsbCA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8RWxlbWVudD4sIGF0dHJzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBib29sZWFuIHwgbnVtYmVyPik6IHZvaWQgPT4ge1xuICBjb25zdCBkb20gPSBlbGVtZW50LmRvbTtcbiAgT2JqLmVhY2goYXR0cnMsICh2LCBrKSA9PiB7XG4gICAgcmF3U2V0KGRvbSwgaywgdik7XG4gIH0pO1xufTtcblxuY29uc3Qgc2V0T3B0aW9ucyA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8RWxlbWVudD4sIGF0dHJzOiBSZWNvcmQ8c3RyaW5nLCBPcHRpb25hbDxzdHJpbmcgfCBib29sZWFuIHwgbnVtYmVyPj4pOiB2b2lkID0+IHtcbiAgT2JqLmVhY2goYXR0cnMsICh2LCBrKSA9PiB7XG4gICAgdi5mb2xkKCgpID0+IHtcbiAgICAgIHJlbW92ZShlbGVtZW50LCBrKTtcbiAgICB9LCAodmFsdWUpID0+IHtcbiAgICAgIHJhd1NldChlbGVtZW50LmRvbSwgaywgdmFsdWUpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IGdldCA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8RWxlbWVudD4sIGtleTogc3RyaW5nKTogdW5kZWZpbmVkIHwgc3RyaW5nID0+IHtcbiAgY29uc3QgdiA9IGVsZW1lbnQuZG9tLmdldEF0dHJpYnV0ZShrZXkpO1xuXG4gIC8vIHVuZGVmaW5lZCBpcyB0aGUgbW9yZSBhcHByb3ByaWF0ZSB2YWx1ZSBmb3IgSlMsIGFuZCB0aGlzIG1hdGNoZXMgSlF1ZXJ5XG4gIHJldHVybiB2ID09PSBudWxsID8gdW5kZWZpbmVkIDogdjtcbn07XG5cbmNvbnN0IGdldE9wdCA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8RWxlbWVudD4sIGtleTogc3RyaW5nKTogT3B0aW9uYWw8c3RyaW5nPiA9PlxuICBPcHRpb25hbC5mcm9tKGdldChlbGVtZW50LCBrZXkpKTtcblxuY29uc3QgaGFzID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPiwga2V5OiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgY29uc3QgZG9tID0gZWxlbWVudC5kb207XG5cbiAgLy8gcmV0dXJuIGZhbHNlIGZvciBub24tZWxlbWVudCBub2Rlcywgbm8gcG9pbnQgaW4gdGhyb3dpbmcgYW4gZXJyb3JcbiAgcmV0dXJuIGRvbSAmJiAoZG9tIGFzIEVsZW1lbnQpLmhhc0F0dHJpYnV0ZSA/IChkb20gYXMgRWxlbWVudCkuaGFzQXR0cmlidXRlKGtleSkgOiBmYWxzZTtcbn07XG5cbmNvbnN0IHJlbW92ZSA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8RWxlbWVudD4sIGtleTogc3RyaW5nKTogdm9pZCA9PiB7XG4gIGVsZW1lbnQuZG9tLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xufTtcblxuY29uc3QgaGFzTm9uZSA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBib29sZWFuID0+IHtcbiAgY29uc3QgYXR0cnMgPSAoZWxlbWVudC5kb20gYXMgRWxlbWVudCkuYXR0cmlidXRlcztcbiAgcmV0dXJuIGF0dHJzID09PSB1bmRlZmluZWQgfHwgYXR0cnMgPT09IG51bGwgfHwgYXR0cnMubGVuZ3RoID09PSAwO1xufTtcblxuY29uc3QgY2xvbmUgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PEVsZW1lbnQ+KTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9PlxuICBBcnIuZm9sZGwoZWxlbWVudC5kb20uYXR0cmlidXRlcywgKGFjYywgYXR0cikgPT4ge1xuICAgIGFjY1thdHRyLm5hbWVdID0gYXR0ci52YWx1ZTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KTtcblxuY29uc3QgdHJhbnNmZXJPbmUgPSAoc291cmNlOiBTdWdhckVsZW1lbnQ8RWxlbWVudD4sIGRlc3RpbmF0aW9uOiBTdWdhckVsZW1lbnQ8RWxlbWVudD4sIGF0dHI6IHN0cmluZyk6IHZvaWQgPT4ge1xuICAvLyBOT1RFOiBXZSBkb24ndCB3YW50IHRvIGNsb2JiZXIgYW55IGV4aXN0aW5nIGF0dHJpYnV0ZXNcbiAgaWYgKCFoYXMoZGVzdGluYXRpb24sIGF0dHIpKSB7XG4gICAgZ2V0T3B0KHNvdXJjZSwgYXR0cikuZWFjaCgoc3JjVmFsdWUpID0+IHNldChkZXN0aW5hdGlvbiwgYXR0ciwgc3JjVmFsdWUpKTtcbiAgfVxufTtcblxuLy8gVHJhbnNmZXIgYXR0cmlidXRlcyhhdHRycykgZnJvbSBzb3VyY2UgdG8gZGVzdGluYXRpb24sIHVubGVzcyB0aGV5IGFyZSBhbHJlYWR5IHByZXNlbnRcbmNvbnN0IHRyYW5zZmVyID0gKHNvdXJjZTogU3VnYXJFbGVtZW50PEVsZW1lbnQ+LCBkZXN0aW5hdGlvbjogU3VnYXJFbGVtZW50PEVsZW1lbnQ+LCBhdHRyczogc3RyaW5nW10pOiB2b2lkID0+IHtcbiAgaWYgKCFTdWdhck5vZGUuaXNFbGVtZW50KHNvdXJjZSkgfHwgIVN1Z2FyTm9kZS5pc0VsZW1lbnQoZGVzdGluYXRpb24pKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIEFyci5lYWNoKGF0dHJzLCAoYXR0cikgPT4ge1xuICAgIHRyYW5zZmVyT25lKHNvdXJjZSwgZGVzdGluYXRpb24sIGF0dHIpO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IGNsb25lLCBzZXQsIHNldEFsbCwgc2V0T3B0aW9ucywgZ2V0LCBnZXRPcHQsIGhhcywgcmVtb3ZlLCBoYXNOb25lLCB0cmFuc2ZlciB9O1xuIiwiaW1wb3J0IHsgQXJyLCBPcHRpb25hbCB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmltcG9ydCB7IERPQ1VNRU5ULCBET0NVTUVOVF9GUkFHTUVOVCwgRUxFTUVOVCB9IGZyb20gJy4uL25vZGUvTm9kZVR5cGVzJztcbmltcG9ydCB7IFN1Z2FyRWxlbWVudCB9IGZyb20gJy4uL25vZGUvU3VnYXJFbGVtZW50JztcblxuaW50ZXJmYWNlIFZlbmRvckVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgbXNNYXRjaGVzU2VsZWN0b3I/OiAoc2VsZWN0b3I6IHN0cmluZykgPT4gYm9vbGVhbjtcbiAgbW96TWF0Y2hlc1NlbGVjdG9yPzogKHNlbGVjdG9yOiBzdHJpbmcpID0+IGJvb2xlYW47XG59XG5cbmNvbnN0IGlzID0gPFQgZXh0ZW5kcyBFbGVtZW50ID0gRWxlbWVudD4gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPiwgc2VsZWN0b3I6IHN0cmluZyk6IGVsZW1lbnQgaXMgU3VnYXJFbGVtZW50PFQ+ID0+IHtcbiAgY29uc3QgZG9tID0gZWxlbWVudC5kb207XG4gIGlmIChkb20ubm9kZVR5cGUgIT09IEVMRU1FTlQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZWxlbSA9IGRvbSBhcyBWZW5kb3JFbGVtZW50O1xuICAgIGlmIChlbGVtLm1hdGNoZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGVsZW0ubWF0Y2hlcyhzZWxlY3Rvcik7XG4gICAgfSBlbHNlIGlmIChlbGVtLm1zTWF0Y2hlc1NlbGVjdG9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBlbGVtLm1zTWF0Y2hlc1NlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICB9IGVsc2UgaWYgKGVsZW0ud2Via2l0TWF0Y2hlc1NlbGVjdG9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBlbGVtLndlYmtpdE1hdGNoZXNTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgfSBlbHNlIGlmIChlbGVtLm1vek1hdGNoZXNTZWxlY3RvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBjYXN0IHRvIGFueSBhcyBtb3pNYXRjaGVzU2VsZWN0b3IgZG9lc24ndCBleGlzdCBpbiBUUyBET00gbGliXG4gICAgICByZXR1cm4gZWxlbS5tb3pNYXRjaGVzU2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Jyb3dzZXIgbGFja3MgbmF0aXZlIHNlbGVjdG9ycycpO1xuICAgIH0gLy8gdW5mb3J0dW5hdGVseSB3ZSBjYW4ndCB0aHJvdyB0aGlzIG9uIHN0YXJ0dXAgOihcbiAgfVxufTtcblxuY29uc3QgYnlwYXNzU2VsZWN0b3IgPSAoZG9tOiBOb2RlKSA9PlxuICAvLyBPbmx5IGVsZW1lbnRzLCBkb2N1bWVudHMgYW5kIHNoYWRvdyByb290cyBzdXBwb3J0IHF1ZXJ5U2VsZWN0b3JcbiAgLy8gc2hhZG93IHJvb3QgZWxlbWVudCB0eXBlIGlzIERPQ1VNRU5UX0ZSQUdNRU5UXG4gIGRvbS5ub2RlVHlwZSAhPT0gRUxFTUVOVCAmJiBkb20ubm9kZVR5cGUgIT09IERPQ1VNRU5UICYmIGRvbS5ub2RlVHlwZSAhPT0gRE9DVU1FTlRfRlJBR01FTlQgfHxcbiAgICAvLyBJRSBmaXggZm9yIGNvbXBsZXggcXVlcmllcyBvbiBlbXB0eSBub2RlczogaHR0cDovL2pzZmlkZGxlLm5ldC9zcHlkZXIvZnY5cHRyNUwvXG4gICAgKGRvbSBhcyBFbGVtZW50IHwgRG9jdW1lbnQgfCBEb2N1bWVudEZyYWdtZW50KS5jaGlsZEVsZW1lbnRDb3VudCA9PT0gMDtcblxuY29uc3QgYWxsID0gPFQgZXh0ZW5kcyBFbGVtZW50ID0gRWxlbWVudD4gKHNlbGVjdG9yOiBzdHJpbmcsIHNjb3BlPzogU3VnYXJFbGVtZW50PE5vZGU+KTogU3VnYXJFbGVtZW50PFQ+W10gPT4ge1xuICBjb25zdCBiYXNlID0gc2NvcGUgPT09IHVuZGVmaW5lZCA/IGRvY3VtZW50IDogc2NvcGUuZG9tO1xuICByZXR1cm4gYnlwYXNzU2VsZWN0b3IoYmFzZSkgPyBbXSA6IEFyci5tYXAoKGJhc2UgYXMgRWxlbWVudCB8IERvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsPFQ+KHNlbGVjdG9yKSwgU3VnYXJFbGVtZW50LmZyb21Eb20pO1xufTtcblxuY29uc3Qgb25lID0gPFQgZXh0ZW5kcyBFbGVtZW50ID0gRWxlbWVudD4gKHNlbGVjdG9yOiBzdHJpbmcsIHNjb3BlPzogU3VnYXJFbGVtZW50PE5vZGU+KTogT3B0aW9uYWw8U3VnYXJFbGVtZW50PFQ+PiA9PiB7XG4gIGNvbnN0IGJhc2UgPSBzY29wZSA9PT0gdW5kZWZpbmVkID8gZG9jdW1lbnQgOiBzY29wZS5kb207XG4gIHJldHVybiBieXBhc3NTZWxlY3RvcihiYXNlKSA/IE9wdGlvbmFsLm5vbmU8U3VnYXJFbGVtZW50PFQ+PigpIDogT3B0aW9uYWwuZnJvbSgoYmFzZSBhcyBFbGVtZW50IHwgRG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3I8VD4oc2VsZWN0b3IpKS5tYXAoU3VnYXJFbGVtZW50LmZyb21Eb20pO1xufTtcblxuZXhwb3J0IHtcbiAgYWxsLFxuICBpcyxcbiAgb25lXG59O1xuIiwiaW1wb3J0IHsgQXJyLCBGdW4sIE9wdGlvbmFsLCBUeXBlIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0ICogYXMgUmVjdXJzZSBmcm9tICcuLi8uLi9hbGllbi9SZWN1cnNlJztcbmltcG9ydCAqIGFzIENvbXBhcmUgZnJvbSAnLi4vZG9tL0NvbXBhcmUnO1xuaW1wb3J0IHsgU3VnYXJFbGVtZW50IH0gZnJvbSAnLi4vbm9kZS9TdWdhckVsZW1lbnQnO1xuaW1wb3J0ICogYXMgU3VnYXJOb2RlIGZyb20gJy4uL25vZGUvU3VnYXJOb2RlJztcblxuLyoqXG4gKiBUaGUgZG9jdW1lbnQgYXNzb2NpYXRlZCB3aXRoIHRoZSBjdXJyZW50IGVsZW1lbnRcbiAqIE5PVEU6IHRoaXMgd2lsbCB0aHJvdyBpZiB0aGUgb3duZXIgaXMgbnVsbC5cbiAqL1xuY29uc3Qgb3duZXIgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KTogU3VnYXJFbGVtZW50PERvY3VtZW50PiA9PlxuICBTdWdhckVsZW1lbnQuZnJvbURvbShlbGVtZW50LmRvbS5vd25lckRvY3VtZW50IGFzIERvY3VtZW50KTtcblxuLyoqXG4gKiBJZiB0aGUgZWxlbWVudCBpcyBhIGRvY3VtZW50LCByZXR1cm4gaXQuIE90aGVyd2lzZSwgcmV0dXJuIGl0cyBvd25lckRvY3VtZW50LlxuICogQHBhcmFtIGRvc1xuICovXG5jb25zdCBkb2N1bWVudE9yT3duZXIgPSAoZG9zOiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBTdWdhckVsZW1lbnQ8RG9jdW1lbnQ+ID0+XG4gIFN1Z2FyTm9kZS5pc0RvY3VtZW50KGRvcykgPyBkb3MgOiBvd25lcihkb3MpO1xuXG5jb25zdCBkb2N1bWVudEVsZW1lbnQgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KTogU3VnYXJFbGVtZW50PEhUTUxFbGVtZW50PiA9PlxuICBTdWdhckVsZW1lbnQuZnJvbURvbShkb2N1bWVudE9yT3duZXIoZWxlbWVudCkuZG9tLmRvY3VtZW50RWxlbWVudCk7XG5cbi8qKlxuICogVGhlIHdpbmRvdyBlbGVtZW50IGFzc29jaWF0ZWQgd2l0aCB0aGUgZWxlbWVudFxuICogTk9URTogdGhpcyB3aWxsIHRocm93IGlmIHRoZSBkZWZhdWx0VmlldyBpcyBudWxsLlxuICovXG5jb25zdCBkZWZhdWx0VmlldyA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBTdWdhckVsZW1lbnQ8V2luZG93PiA9PlxuICBTdWdhckVsZW1lbnQuZnJvbURvbShkb2N1bWVudE9yT3duZXIoZWxlbWVudCkuZG9tLmRlZmF1bHRWaWV3IGFzIFdpbmRvdyk7XG5cbmNvbnN0IHBhcmVudCA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBPcHRpb25hbDxTdWdhckVsZW1lbnQ8Tm9kZSAmIFBhcmVudE5vZGU+PiA9PlxuICBPcHRpb25hbC5mcm9tKGVsZW1lbnQuZG9tLnBhcmVudE5vZGUpLm1hcChTdWdhckVsZW1lbnQuZnJvbURvbSk7XG5cbi8vIENhc3QgZG93biB0byBqdXN0IGJlIFN1Z2FyRWxlbWVudDxOb2RlPlxuY29uc3QgcGFyZW50Tm9kZSA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBPcHRpb25hbDxTdWdhckVsZW1lbnQ8Tm9kZT4+ID0+XG4gIHBhcmVudChlbGVtZW50KSBhcyBhbnk7XG5cbmNvbnN0IHBhcmVudEVsZW1lbnQgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KTogT3B0aW9uYWw8U3VnYXJFbGVtZW50PEhUTUxFbGVtZW50Pj4gPT5cbiAgT3B0aW9uYWwuZnJvbShlbGVtZW50LmRvbS5wYXJlbnRFbGVtZW50KS5tYXAoU3VnYXJFbGVtZW50LmZyb21Eb20pO1xuXG5jb25zdCBmaW5kSW5kZXggPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KTogT3B0aW9uYWw8bnVtYmVyPiA9PlxuICBwYXJlbnQoZWxlbWVudCkuYmluZCgocCkgPT4ge1xuICAgIC8vIFRPRE86IFJlZmFjdG9yIG91dCBjaGlsZHJlbiBzbyB3ZSBjYW4gYXZvaWQgdGhlIGNvbnN0YW50IHVud3JhcHBpbmdcbiAgICBjb25zdCBraW4gPSBjaGlsZHJlbihwKTtcbiAgICByZXR1cm4gQXJyLmZpbmRJbmRleChraW4sIChlbGVtKSA9PiBDb21wYXJlLmVxKGVsZW1lbnQsIGVsZW0pKTtcbiAgfSk7XG5cbmNvbnN0IHBhcmVudHMgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+LCBpc1Jvb3Q/OiAoZTogU3VnYXJFbGVtZW50PE5vZGU+KSA9PiBib29sZWFuKTogU3VnYXJFbGVtZW50PE5vZGU+W10gPT4ge1xuICBjb25zdCBzdG9wID0gVHlwZS5pc0Z1bmN0aW9uKGlzUm9vdCkgPyBpc1Jvb3QgOiBGdW4ubmV2ZXI7XG5cbiAgLy8gVGhpcyBpcyB1c2VkIGEgKmxvdCogc28gaXQgbmVlZHMgdG8gYmUgcGVyZm9ybWFudCwgbm90IHJlY3Vyc2l2ZVxuICBsZXQgZG9tOiBOb2RlID0gZWxlbWVudC5kb207XG4gIGNvbnN0IHJldDogU3VnYXJFbGVtZW50PE5vZGU+W10gPSBbXTtcblxuICB3aGlsZSAoZG9tLnBhcmVudE5vZGUgIT09IG51bGwgJiYgZG9tLnBhcmVudE5vZGUgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IHJhd1BhcmVudCA9IGRvbS5wYXJlbnROb2RlO1xuICAgIGNvbnN0IHAgPSBTdWdhckVsZW1lbnQuZnJvbURvbShyYXdQYXJlbnQpO1xuICAgIHJldC5wdXNoKHApO1xuXG4gICAgaWYgKHN0b3AocCkgPT09IHRydWUpIHtcbiAgICAgIGJyZWFrO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb20gPSByYXdQYXJlbnQ7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXQ7XG59O1xuXG5jb25zdCBzaWJsaW5ncyA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBTdWdhckVsZW1lbnQ8Tm9kZT5bXSA9PiB7XG4gIC8vIFRPRE86IFJlZmFjdG9yIG91dCBjaGlsZHJlbiBzbyB3ZSBjYW4ganVzdCBub3QgYWRkIHNlbGYgaW5zdGVhZCBvZiBmaWx0ZXJpbmcgYWZ0ZXJ3YXJkc1xuICBjb25zdCBmaWx0ZXJTZWxmID0gPEU+IChlbGVtZW50czogU3VnYXJFbGVtZW50PEU+W10pID0+IEFyci5maWx0ZXIoZWxlbWVudHMsICh4KSA9PiAhQ29tcGFyZS5lcShlbGVtZW50LCB4KSk7XG5cbiAgcmV0dXJuIHBhcmVudChlbGVtZW50KS5tYXAoY2hpbGRyZW4pLm1hcChmaWx0ZXJTZWxmKS5nZXRPcihbXSk7XG59O1xuXG5jb25zdCBvZmZzZXRQYXJlbnQgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PEhUTUxFbGVtZW50Pik6IE9wdGlvbmFsPFN1Z2FyRWxlbWVudDxIVE1MRWxlbWVudD4+ID0+XG4gIE9wdGlvbmFsLmZyb20oZWxlbWVudC5kb20ub2Zmc2V0UGFyZW50IGFzIEhUTUxFbGVtZW50KS5tYXAoU3VnYXJFbGVtZW50LmZyb21Eb20pO1xuXG5jb25zdCBwcmV2U2libGluZyA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBPcHRpb25hbDxTdWdhckVsZW1lbnQ8Tm9kZSAmIENoaWxkTm9kZT4+ID0+XG4gIE9wdGlvbmFsLmZyb20oZWxlbWVudC5kb20ucHJldmlvdXNTaWJsaW5nKS5tYXAoU3VnYXJFbGVtZW50LmZyb21Eb20pO1xuXG5jb25zdCBuZXh0U2libGluZyA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBPcHRpb25hbDxTdWdhckVsZW1lbnQ8Tm9kZSAmIENoaWxkTm9kZT4+ID0+XG4gIE9wdGlvbmFsLmZyb20oZWxlbWVudC5kb20ubmV4dFNpYmxpbmcpLm1hcChTdWdhckVsZW1lbnQuZnJvbURvbSk7XG5cbi8vIFRoaXMgb25lIG5lZWRzIHRvIGJlIHJldmVyc2VkLCBzbyB0aGV5J3JlIHN0aWxsIGluIERPTSBvcmRlclxuY29uc3QgcHJldlNpYmxpbmdzID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPik6IFN1Z2FyRWxlbWVudDxOb2RlICYgQ2hpbGROb2RlPltdID0+XG4gIEFyci5yZXZlcnNlKFJlY3Vyc2UudG9BcnJheShlbGVtZW50LCBwcmV2U2libGluZykpO1xuXG5jb25zdCBuZXh0U2libGluZ3MgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KTogU3VnYXJFbGVtZW50PE5vZGUgJiBDaGlsZE5vZGU+W10gPT5cbiAgUmVjdXJzZS50b0FycmF5KGVsZW1lbnQsIG5leHRTaWJsaW5nKTtcblxuY29uc3QgY2hpbGRyZW4gPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KTogU3VnYXJFbGVtZW50PE5vZGUgJiBDaGlsZE5vZGU+W10gPT5cbiAgQXJyLm1hcChlbGVtZW50LmRvbS5jaGlsZE5vZGVzLCBTdWdhckVsZW1lbnQuZnJvbURvbSk7XG5cbmNvbnN0IGNoaWxkID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPiwgaW5kZXg6IG51bWJlcik6IE9wdGlvbmFsPFN1Z2FyRWxlbWVudDxOb2RlICYgQ2hpbGROb2RlPj4gPT4ge1xuICBjb25zdCBjcyA9IGVsZW1lbnQuZG9tLmNoaWxkTm9kZXM7XG4gIHJldHVybiBPcHRpb25hbC5mcm9tKGNzW2luZGV4XSkubWFwKFN1Z2FyRWxlbWVudC5mcm9tRG9tKTtcbn07XG5cbmNvbnN0IGZpcnN0Q2hpbGQgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KTogT3B0aW9uYWw8U3VnYXJFbGVtZW50PE5vZGUgJiBDaGlsZE5vZGU+PiA9PlxuICBjaGlsZChlbGVtZW50LCAwKTtcblxuY29uc3QgbGFzdENoaWxkID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPik6IE9wdGlvbmFsPFN1Z2FyRWxlbWVudDxOb2RlICYgQ2hpbGROb2RlPj4gPT5cbiAgY2hpbGQoZWxlbWVudCwgZWxlbWVudC5kb20uY2hpbGROb2Rlcy5sZW5ndGggLSAxKTtcblxuY29uc3QgY2hpbGROb2Rlc0NvdW50ID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPik6IG51bWJlciA9PlxuICBlbGVtZW50LmRvbS5jaGlsZE5vZGVzLmxlbmd0aDtcblxuY29uc3QgaGFzQ2hpbGROb2RlcyA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBib29sZWFuID0+XG4gIGVsZW1lbnQuZG9tLmhhc0NoaWxkTm9kZXMoKTtcblxuZXhwb3J0IGludGVyZmFjZSBFbGVtZW50QW5kT2Zmc2V0PEU+IHtcbiAgcmVhZG9ubHkgZWxlbWVudDogU3VnYXJFbGVtZW50PEU+O1xuICByZWFkb25seSBvZmZzZXQ6IG51bWJlcjtcbn1cblxuY29uc3Qgc3BvdCA9IDxFPihlbGVtZW50OiBTdWdhckVsZW1lbnQ8RT4sIG9mZnNldDogbnVtYmVyKTogRWxlbWVudEFuZE9mZnNldDxFPiA9PiAoe1xuICBlbGVtZW50LFxuICBvZmZzZXRcbn0pO1xuXG5jb25zdCBsZWFmID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPiwgb2Zmc2V0OiBudW1iZXIpOiBFbGVtZW50QW5kT2Zmc2V0PE5vZGU+ID0+IHtcbiAgY29uc3QgY3MgPSBjaGlsZHJlbihlbGVtZW50KTtcbiAgcmV0dXJuIGNzLmxlbmd0aCA+IDAgJiYgb2Zmc2V0IDwgY3MubGVuZ3RoID8gc3BvdChjc1tvZmZzZXRdLCAwKSA6IHNwb3QoZWxlbWVudCwgb2Zmc2V0KTtcbn07XG5cbmV4cG9ydCB7XG4gIG93bmVyLFxuICBkb2N1bWVudE9yT3duZXIsXG4gIGRlZmF1bHRWaWV3LFxuICBkb2N1bWVudEVsZW1lbnQsXG4gIHBhcmVudCxcbiAgcGFyZW50Tm9kZSxcbiAgcGFyZW50RWxlbWVudCxcbiAgZmluZEluZGV4LFxuICBwYXJlbnRzLFxuICBzaWJsaW5ncyxcbiAgcHJldlNpYmxpbmcsXG4gIG9mZnNldFBhcmVudCxcbiAgcHJldlNpYmxpbmdzLFxuICBuZXh0U2libGluZyxcbiAgbmV4dFNpYmxpbmdzLFxuICBjaGlsZHJlbixcbiAgY2hpbGQsXG4gIGZpcnN0Q2hpbGQsXG4gIGxhc3RDaGlsZCxcbiAgY2hpbGROb2Rlc0NvdW50LFxuICBoYXNDaGlsZE5vZGVzLFxuICBsZWFmXG59O1xuIiwiaW1wb3J0IHsgQXJyLCBPcHRpb25hbCB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5pbXBvcnQgeyBQbGF0Zm9ybURldGVjdGlvbiB9IGZyb20gJ0BlcGhveC9zYW5kJztcblxuaW50ZXJmYWNlIENob2ljZU9wdGlvbjxUPiB7XG4gIHByZWRpY2F0ZTogKCkgPT4gYm9vbGVhbjtcbiAgdmFsdWU6ICgpID0+IFQ7XG59XG5cbmNvbnN0IGlzVG91Y2g6ICgpID0+IGJvb2xlYW4gPSAoKSA9PiBQbGF0Zm9ybURldGVjdGlvbi5kZXRlY3QoKS5kZXZpY2VUeXBlLmlzVG91Y2goKTtcbmNvbnN0IGlzQW5kcm9pZDogKCkgPT4gYm9vbGVhbiA9ICgpID0+IFBsYXRmb3JtRGV0ZWN0aW9uLmRldGVjdCgpLmRldmljZVR5cGUuaXNBbmRyb2lkKCk7XG5jb25zdCBpc01hY09TOiAoKSA9PiBib29sZWFuID0gKCkgPT4gUGxhdGZvcm1EZXRlY3Rpb24uZGV0ZWN0KCkub3MuaXNNYWNPUygpO1xuY29uc3QgaXNpT1M6ICgpID0+IGJvb2xlYW4gPSAoKSA9PiBQbGF0Zm9ybURldGVjdGlvbi5kZXRlY3QoKS5vcy5pc2lPUygpO1xuXG4vLyBUT0RPOiBXb3JrIG91dCB3aGF0IHRoZXNlIHZhbHVlcyBhcmUgc3VwcG9zZWQgdG8gYmUuXG5jb25zdCBNSU5JTVVNX0xBUkdFX1dJRFRIID0gNjIwO1xuY29uc3QgTUlOSU1VTV9MQVJHRV9IRUlHSFQgPSA3MDA7XG5cbi8vIHdpbmRvdy5zY3JlZW4ud2lkdGggYW5kIHdpbmRvdy5zY3JlZW4uaGVpZ2h0IGRvIG5vdCBjaGFuZ2Ugd2l0aCB0aGUgb3JpZW50YXRpb24sXG4vLyBob3dldmVyIHdpbmRvdy5zY3JlZW4uYXZhaWxhYmxlV2lkdGggYW5kIHdpbmRvdy5zY3JlZW4uYXZhaWxhYmxlSGVpZ2h0LFxuLy8gZG8gY2hhbmdlIGFjY29yZGluZyB0byB0aGUgb3JpZW50YXRpb24uXG5jb25zdCBpc09mU2l6ZSA9ICh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IGJvb2xlYW4gPT5cbiAgd2luZG93LnNjcmVlbi53aWR0aCA+PSB3aWR0aCAmJiB3aW5kb3cuc2NyZWVuLmhlaWdodCA+PSBoZWlnaHQ7XG5cbmNvbnN0IGNob2ljZSA9IDxUPiAob3B0aW9uczogQ2hvaWNlT3B0aW9uPFQ+W10sIGZhbGxiYWNrOiBUKTogVCA9PiB7XG4gIGNvbnN0IHRhcmdldCA9IEFyci5mb2xkbChvcHRpb25zLCAoYiwgb3B0aW9uKSA9PiBiLm9yVGh1bmsoKCkgPT5cbiAgICBvcHRpb24ucHJlZGljYXRlKCkgPyBPcHRpb25hbC5zb21lKG9wdGlvbi52YWx1ZSgpKSA6IE9wdGlvbmFsLm5vbmU8VD4oKVxuICApLCBPcHRpb25hbC5ub25lPFQ+KCkpO1xuXG4gIHJldHVybiB0YXJnZXQuZ2V0T3IoZmFsbGJhY2spO1xufTtcblxuY29uc3QgaXNMYXJnZVRvdWNoID0gKCk6IGJvb2xlYW4gPT5cbiAgaXNPZlNpemUoTUlOSU1VTV9MQVJHRV9XSURUSCwgTUlOSU1VTV9MQVJHRV9IRUlHSFQpICYmIGlzVG91Y2goKTtcblxuY29uc3QgaXNMYXJnZURlc2t0b3AgPSAoKTogYm9vbGVhbiA9PlxuICBpc09mU2l6ZShNSU5JTVVNX0xBUkdFX1dJRFRILCBNSU5JTVVNX0xBUkdFX0hFSUdIVCkgJiYgIWlzVG91Y2goKTtcblxuY29uc3QgaXNTbWFsbFRvdWNoID0gKCk6IGJvb2xlYW4gPT5cbiAgIWlzT2ZTaXplKE1JTklNVU1fTEFSR0VfV0lEVEgsIE1JTklNVU1fTEFSR0VfSEVJR0hUKSAmJiBpc1RvdWNoKCk7XG5cbmNvbnN0IGlzTGFyZ2UgPSAoKTogYm9vbGVhbiA9PlxuICBpc09mU2l6ZShNSU5JTVVNX0xBUkdFX1dJRFRILCBNSU5JTVVNX0xBUkdFX0hFSUdIVCk7XG5cbmNvbnN0IGlzU21hbGxBbmRyb2lkID0gKCk6IGJvb2xlYW4gPT5cbiAgaXNTbWFsbFRvdWNoKCkgJiYgaXNBbmRyb2lkKCk7XG5cbmV4cG9ydCB7XG4gIGlzVG91Y2gsXG4gIGNob2ljZSxcbiAgaXNMYXJnZSxcbiAgaXNMYXJnZVRvdWNoLFxuICBpc1NtYWxsVG91Y2gsXG4gIGlzTGFyZ2VEZXNrdG9wLFxuICBpc1NtYWxsQW5kcm9pZCxcbiAgaXNNYWNPUyxcbiAgaXNpT1Ncbn07XG4iLCJpbXBvcnQgUGx1Z2luTWFuYWdlciBmcm9tICd0aW55bWNlL2NvcmUvYXBpL1BsdWdpbk1hbmFnZXInO1xuXG5pbXBvcnQgKiBhcyBDb21tYW5kcyBmcm9tICcuL2FwaS9Db21tYW5kcyc7XG5pbXBvcnQgKiBhcyBCdXR0b25zIGZyb20gJy4vdWkvQnV0dG9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpOiB2b2lkID0+IHtcbiAgUGx1Z2luTWFuYWdlci5hZGQoJ3ByZXZpZXcnLCAoZWRpdG9yKSA9PiB7XG4gICAgQ29tbWFuZHMucmVnaXN0ZXIoZWRpdG9yKTtcbiAgICBCdXR0b25zLnJlZ2lzdGVyKGVkaXRvcik7XG4gIH0pO1xufTtcbiIsImltcG9ydCB0eXBlIEVkaXRvciBmcm9tICd0aW55bWNlL2NvcmUvYXBpL0VkaXRvcic7XG5cbmltcG9ydCB7IG9wZW4gfSBmcm9tICcuLi91aS9EaWFsb2cnO1xuXG5jb25zdCByZWdpc3RlciA9IChlZGl0b3I6IEVkaXRvcik6IHZvaWQgPT4ge1xuICBlZGl0b3IuYWRkQ29tbWFuZCgnbWNlUHJldmlldycsICgpID0+IHtcbiAgICBvcGVuKGVkaXRvcik7XG4gIH0pO1xufTtcblxuZXhwb3J0IHtcbiAgcmVnaXN0ZXJcbn07XG4iLCJpbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuaW1wb3J0IHR5cGUgeyBFZGl0b3JPcHRpb25zIH0gZnJvbSAndGlueW1jZS9jb3JlL2FwaS9PcHRpb25UeXBlcyc7XG5cbmNvbnN0IG9wdGlvbjoge1xuICA8SyBleHRlbmRzIGtleW9mIEVkaXRvck9wdGlvbnM+KG5hbWU6IEspOiAoZWRpdG9yOiBFZGl0b3IpID0+IEVkaXRvck9wdGlvbnNbS107XG4gIDxUPihuYW1lOiBzdHJpbmcpOiAoZWRpdG9yOiBFZGl0b3IpID0+IFQ7XG59ID0gKG5hbWU6IHN0cmluZykgPT4gKGVkaXRvcjogRWRpdG9yKSA9PlxuICBlZGl0b3Iub3B0aW9ucy5nZXQobmFtZSk7XG5cbmNvbnN0IGdldENvbnRlbnRTdHlsZSA9IG9wdGlvbignY29udGVudF9zdHlsZScpO1xuY29uc3Qgc2hvdWxkVXNlQ29udGVudENzc0NvcnMgPSBvcHRpb24oJ2NvbnRlbnRfY3NzX2NvcnMnKTtcbmNvbnN0IGdldEJvZHlDbGFzcyA9IG9wdGlvbignYm9keV9jbGFzcycpO1xuY29uc3QgZ2V0Qm9keUlkID0gb3B0aW9uKCdib2R5X2lkJyk7XG5cbmV4cG9ydCB7XG4gIGdldENvbnRlbnRTdHlsZSxcbiAgc2hvdWxkVXNlQ29udGVudENzc0NvcnMsXG4gIGdldEJvZHlDbGFzcyxcbiAgZ2V0Qm9keUlkXG59O1xuIiwiaW1wb3J0IHsgQXJyLCBPYmogfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ0BlcGhveC9zdWdhcic7XG5cbmltcG9ydCBTY3JpcHRMb2FkZXIgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9kb20vU2NyaXB0TG9hZGVyJztcbmltcG9ydCB0eXBlIEVkaXRvciBmcm9tICd0aW55bWNlL2NvcmUvYXBpL0VkaXRvcic7XG5pbXBvcnQgVG9vbHMgZnJvbSAndGlueW1jZS9jb3JlL2FwaS91dGlsL1Rvb2xzJztcblxuaW1wb3J0ICogYXMgT3B0aW9ucyBmcm9tICcuLi9hcGkvT3B0aW9ucyc7XG5cbmNvbnN0IGdldENvbXBvbmVudFNjcmlwdHNIdG1sID0gKGVkaXRvcjogRWRpdG9yKSA9PiB7XG4gIGNvbnN0IHVybHMgPSBBcnIudW5pcXVlKE9iai52YWx1ZXMoZWRpdG9yLnNjaGVtYS5nZXRDb21wb25lbnRVcmxzKCkpKTtcblxuICByZXR1cm4gQXJyLm1hcCh1cmxzLCAodXJsKSA9PiB7XG4gICAgY29uc3QgYXR0cnMgPSBPYmoubWFwVG9BcnJheShTY3JpcHRMb2FkZXIuU2NyaXB0TG9hZGVyLmdldFNjcmlwdEF0dHJpYnV0ZXModXJsKSwgKHYsIGspID0+IGAgJHtlZGl0b3IuZG9tLmVuY29kZShrKX09XCIke2VkaXRvci5kb20uZW5jb2RlKHYpfVwiYCk7XG4gICAgcmV0dXJuIGA8c2NyaXB0IHNyYz1cIiR7ZWRpdG9yLmRvbS5lbmNvZGUodXJsKX1cIiR7YXR0cnMuam9pbignJyl9Pjwvc2NyaXB0PmA7XG4gIH0pLmpvaW4oJycpO1xufTtcblxuY29uc3QgZ2V0UHJldmlld0h0bWwgPSAoZWRpdG9yOiBFZGl0b3IpOiBzdHJpbmcgPT4ge1xuICBsZXQgaGVhZEh0bWwgPSAnJztcbiAgY29uc3QgZW5jb2RlID0gZWRpdG9yLmRvbS5lbmNvZGU7XG4gIGNvbnN0IGNvbnRlbnRTdHlsZSA9IE9wdGlvbnMuZ2V0Q29udGVudFN0eWxlKGVkaXRvcikgPz8gJyc7XG5cbiAgaGVhZEh0bWwgKz0gYDxiYXNlIGhyZWY9XCIke2VuY29kZShlZGl0b3IuZG9jdW1lbnRCYXNlVVJJLmdldFVSSSgpKX1cIj5gO1xuXG4gIGNvbnN0IGNvcnMgPSBPcHRpb25zLnNob3VsZFVzZUNvbnRlbnRDc3NDb3JzKGVkaXRvcikgPyAnIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCInIDogJyc7XG4gIFRvb2xzLmVhY2goZWRpdG9yLmNvbnRlbnRDU1MsICh1cmwpID0+IHtcbiAgICBoZWFkSHRtbCArPSAnPGxpbmsgdHlwZT1cInRleHQvY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCInICsgZW5jb2RlKGVkaXRvci5kb2N1bWVudEJhc2VVUkkudG9BYnNvbHV0ZSh1cmwpKSArICdcIicgKyBjb3JzICsgJz4nO1xuICB9KTtcblxuICBpZiAoY29udGVudFN0eWxlKSB7XG4gICAgaGVhZEh0bWwgKz0gJzxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIj4nICsgY29udGVudFN0eWxlICsgJzwvc3R5bGU+JztcbiAgfVxuXG4gIGhlYWRIdG1sICs9IGdldENvbXBvbmVudFNjcmlwdHNIdG1sKGVkaXRvcik7XG5cbiAgY29uc3QgYm9keUlkID0gT3B0aW9ucy5nZXRCb2R5SWQoZWRpdG9yKTtcblxuICBjb25zdCBib2R5Q2xhc3MgPSBPcHRpb25zLmdldEJvZHlDbGFzcyhlZGl0b3IpO1xuXG4gIGNvbnN0IGRpcmVjdGlvbmFsaXR5ID0gZWRpdG9yLmdldEJvZHkoKS5kaXI7XG4gIGNvbnN0IGRpckF0dHIgPSBkaXJlY3Rpb25hbGl0eSA/ICcgZGlyPVwiJyArIGVuY29kZShkaXJlY3Rpb25hbGl0eSkgKyAnXCInIDogJyc7XG5cbiAgY29uc3QgcHJldmlld0h0bWwgPSAoXG4gICAgJzwhRE9DVFlQRSBodG1sPicgK1xuICAgICc8aHRtbD4nICtcbiAgICAnPGhlYWQ+JyArXG4gICAgaGVhZEh0bWwgK1xuICAgICc8L2hlYWQ+JyArXG4gICAgJzxib2R5IGlkPVwiJyArIGVuY29kZShib2R5SWQpICsgJ1wiIGNsYXNzPVwibWNlLWNvbnRlbnQtYm9keSAnICsgZW5jb2RlKGJvZHlDbGFzcykgKyAnXCInICsgZGlyQXR0ciArICc+JyArXG4gICAgZWRpdG9yLmdldENvbnRlbnQoKSArXG4gICAgTGluay5nZXRQcmV2ZW50Q2xpY2tzT25MaW5rc1NjcmlwdCgpICtcbiAgICAnPC9ib2R5PicgK1xuICAgICc8L2h0bWw+J1xuICApO1xuXG4gIHJldHVybiBwcmV2aWV3SHRtbDtcbn07XG5cbmV4cG9ydCB7XG4gIGdldFByZXZpZXdIdG1sXG59O1xuIiwiaW1wb3J0IHR5cGUgRWRpdG9yIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvRWRpdG9yJztcblxuY29uc3QgcmVnaXN0ZXIgPSAoZWRpdG9yOiBFZGl0b3IpOiB2b2lkID0+IHtcbiAgY29uc3Qgb25BY3Rpb24gPSAoKSA9PiBlZGl0b3IuZXhlY0NvbW1hbmQoJ21jZVByZXZpZXcnKTtcblxuICBlZGl0b3IudWkucmVnaXN0cnkuYWRkQnV0dG9uKCdwcmV2aWV3Jywge1xuICAgIGljb246ICdwcmV2aWV3JyxcbiAgICB0b29sdGlwOiAnUHJldmlldycsXG4gICAgb25BY3Rpb24sXG4gICAgY29udGV4dDogJ2FueSdcbiAgfSk7XG5cbiAgZWRpdG9yLnVpLnJlZ2lzdHJ5LmFkZE1lbnVJdGVtKCdwcmV2aWV3Jywge1xuICAgIGljb246ICdwcmV2aWV3JyxcbiAgICB0ZXh0OiAnUHJldmlldycsXG4gICAgb25BY3Rpb24sXG4gICAgY29udGV4dDogJ2FueSdcbiAgfSk7XG59O1xuXG5leHBvcnQge1xuICByZWdpc3RlclxufTtcbiIsImltcG9ydCB0eXBlIEVkaXRvciBmcm9tICd0aW55bWNlL2NvcmUvYXBpL0VkaXRvcic7XG5cbmltcG9ydCAqIGFzIElmcmFtZUNvbnRlbnQgZnJvbSAnLi4vY29yZS9JZnJhbWVDb250ZW50JztcblxuZXhwb3J0IGNvbnN0IG9wZW4gPSAoZWRpdG9yOiBFZGl0b3IpOiB2b2lkID0+IHtcblxuICBjb25zdCBjb250ZW50ID0gSWZyYW1lQ29udGVudC5nZXRQcmV2aWV3SHRtbChlZGl0b3IpO1xuXG4gIGNvbnN0IGRhdGFBcGkgPSBlZGl0b3Iud2luZG93TWFuYWdlci5vcGVuKHtcbiAgICB0aXRsZTogJ1ByZXZpZXcnLFxuICAgIHNpemU6ICdsYXJnZScsXG4gICAgYm9keToge1xuICAgICAgdHlwZTogJ3BhbmVsJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAncHJldmlldycsXG4gICAgICAgICAgdHlwZTogJ2lmcmFtZScsXG4gICAgICAgICAgc2FuZGJveGVkOiB0cnVlLFxuICAgICAgICAgIHRyYW5zcGFyZW50OiBmYWxzZVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICBidXR0b25zOiBbXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdjYW5jZWwnLFxuICAgICAgICBuYW1lOiAnY2xvc2UnLFxuICAgICAgICB0ZXh0OiAnQ2xvc2UnLFxuICAgICAgICBwcmltYXJ5OiB0cnVlXG4gICAgICB9XG4gICAgXSxcbiAgICBpbml0aWFsRGF0YToge1xuICAgICAgcHJldmlldzogY29udGVudFxuICAgIH1cbiAgfSk7XG5cbiAgLy8gRm9jdXMgdGhlIGNsb3NlIGJ1dHRvbiwgYXMgYnkgZGVmYXVsdCB0aGUgZmlyc3QgZWxlbWVudCBpbiB0aGUgYm9keSBpcyBzZWxlY3RlZFxuICAvLyB3aGljaCB3ZSBkb24ndCB3YW50IHRvIGhhcHBlbiBoZXJlIHNpbmNlIHRoZSBib2R5IG9ubHkgaGFzIHRoZSBpZnJhbWUgY29udGVudFxuICBkYXRhQXBpLmZvY3VzKCdjbG9zZScpO1xufTtcbiIsImltcG9ydCAqIGFzIFR5cGUgZnJvbSAnLi4vY29yZS9UeXBlJztcbmltcG9ydCAqIGFzIEFycmF5VXRpbCBmcm9tICcuLi9jb3JlL0FycmF5VXRpbCc7XG5cbi8qKiBBIHdheSBvZiBjb21wYXJpbmcgdHdvIHZhbHVlcyBvZiB0aGUgc2FtZSB0eXBlIGZvciBlcXVhbGl0eS4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRXE8QT4ge1xuICBlcTogKHg6IEEsIHk6IEEpID0+IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBjb250cmFtYXAgPSA8QSwgQj4gKGVxYTogRXE8QT4sIGY6IChiOiBCKSA9PiBBKTogRXE8Qj4gPT5cbiAgZXEoKHgsIHkpID0+IGVxYS5lcShmKHgpLCBmKHkpKSk7XG5cbmV4cG9ydCBjb25zdCBlcSA9IDxBPiAoZjogKHg6IEEsIHk6IEEpID0+IGJvb2xlYW4pOiBFcTxBPiA9PlxuICAoeyBlcTogZiB9KTtcblxuZXhwb3J0IGNvbnN0IHRyaXBsZUVxOiBFcTxhbnk+ID0gZXEoKHgsIHkpID0+IHggPT09IHkpO1xuXG5leHBvcnQgY29uc3QgZXFTdHJpbmc6IEVxPHN0cmluZz4gPSB0cmlwbGVFcTtcblxuZXhwb3J0IGNvbnN0IGVxQm9vbGVhbjogRXE8Ym9vbGVhbj4gPSB0cmlwbGVFcTtcblxuZXhwb3J0IGNvbnN0IGVxTnVtYmVyOiBFcTxudW1iZXI+ID0gdHJpcGxlRXE7XG5cbmV4cG9ydCBjb25zdCBlcVVuZGVmaW5lZDogRXE8dW5kZWZpbmVkPiA9IHRyaXBsZUVxO1xuXG5leHBvcnQgY29uc3QgZXFOdWxsOiBFcTxudWxsPiA9IHRyaXBsZUVxO1xuXG5leHBvcnQgY29uc3QgZXFBcnJheSA9IDxBPiAoZXFhOiBFcTxBPik6IEVxPEFycmF5TGlrZTxBPj4gPT4gZXEoKHgsIHkpID0+IHtcbiAgaWYgKHgubGVuZ3RoICE9PSB5Lmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBsZW4gPSB4Lmxlbmd0aDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGlmICghZXFhLmVxKHhbaV0sIHlbaV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufSk7XG5cbi8vIFRPRE86IE1ha2UgYW4gT3JkIHR5cGVjbGFzc1xuY29uc3QgZXFTb3J0ZWRBcnJheSA9IDxBPihlcWE6IEVxPEE+LCBjb21wYXJlRm4/OiAoYTogQSwgYjogQSkgPT4gbnVtYmVyKTogRXE8QXJyYXlMaWtlPEE+PiA9PlxuICBjb250cmFtYXAoZXFBcnJheShlcWEpLCAoeHMpID0+IEFycmF5VXRpbC5zb3J0KHhzLCBjb21wYXJlRm4pKTtcblxuZXhwb3J0IGNvbnN0IGVxUmVjb3JkID0gPEE+IChlcWE6IEVxPEE+KTogRXE8UmVjb3JkPHN0cmluZywgQT4+ID0+IGVxKCh4LCB5KSA9PiB7XG4gIGNvbnN0IGt4ID0gT2JqZWN0LmtleXMoeCk7XG4gIGNvbnN0IGt5ID0gT2JqZWN0LmtleXMoeSk7XG4gIGlmICghZXFTb3J0ZWRBcnJheShlcVN0cmluZykuZXEoa3gsIGt5KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBsZW4gPSBreC5sZW5ndGg7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCBxID0ga3hbaV07XG4gICAgaWYgKCFlcWEuZXEoeFtxXSwgeVtxXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59KTtcblxuZXhwb3J0IGNvbnN0IGVxQW55OiBFcTxhbnk+ID0gZXEoKHgsIHkpID0+IHtcbiAgaWYgKHggPT09IHkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IHR4ID0gVHlwZS50eXBlT2YoeCk7XG4gIGNvbnN0IHR5ID0gVHlwZS50eXBlT2YoeSk7XG4gIGlmICh0eCAhPT0gdHkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoVHlwZS5pc0VxdWF0YWJsZVR5cGUodHgpKSB7XG4gICAgcmV0dXJuIHggPT09IHk7XG5cbiAgfSBlbHNlIGlmICh0eCA9PT0gJ2FycmF5Jykge1xuICAgIHJldHVybiBlcUFycmF5KGVxQW55KS5lcSh4LCB5KTtcblxuICB9IGVsc2UgaWYgKHR4ID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBlcVJlY29yZChlcUFueSkuZXEoeCwgeSk7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59KTtcbiIsImV4cG9ydCBjb25zdCBtYXAgPSA8QSwgQj4oeHM6IEFycmF5TGlrZTxBPiwgZjogKGE6IEEpID0+IEIpOiBCW10gPT4ge1xuICBjb25zdCBsZW4gPSB4cy5sZW5ndGg7XG4gIGNvbnN0IHIgPSBuZXcgQXJyYXkobGVuKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICByW2ldID0gZih4KTtcbiAgfVxuICByZXR1cm4gcjtcbn07XG5cbi8qKiBtYXAgYSBmdW5jdGlvbiBvdmVyIGFuIGFycmF5LCB0aGVuIG1hcCBhbm90aGVyIGZ1bmN0aW9uIG92ZXIgZXZlcnkgaXRlbSBleGNlcHQgdGhlIGxhc3QgKi9cbmV4cG9ydCBjb25zdCBtYXBEZWxpbWl0ID0gPEEsIEI+ICh4czogQXJyYXlMaWtlPEE+LCBmOiAoYTogQSkgPT4gQiwgZGVsaW1pdDogKGI6IEIpID0+IEIpOiBCW10gPT4ge1xuICBjb25zdCBsZW4gPSB4cy5sZW5ndGg7XG4gIGNvbnN0IHIgPSBuZXcgQXJyYXkobGVuKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW4gLSAxOyBpKyspIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgcltpXSA9IGRlbGltaXQoZih4KSk7XG4gIH1cbiAgaWYgKGxlbiA+IDApIHtcbiAgICByW2xlbiAtIDFdID0gKGYoeHNbbGVuIC0gMV0pKTtcbiAgfVxuXG4gIHJldHVybiByO1xufTtcblxuZXhwb3J0IGNvbnN0IHNvcnQgPSA8QT4gKHhzOiBBcnJheUxpa2U8QT4sIGNvbXBhcmVGbj86IChhOiBBLCBiOiBBKSA9PiBudW1iZXIpOiBBW10gPT4ge1xuICBjb25zdCBjbG9uZTogQVtdID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoeHMpO1xuICByZXR1cm4gY2xvbmUuc29ydChjb21wYXJlRm4pO1xufTtcbiIsImV4cG9ydCBjb25zdCB0eXBlT2YgPSAoeDogYW55KSA9PiB7XG4gIGlmICh4ID09PSBudWxsKSB7XG4gICAgcmV0dXJuICdudWxsJztcbiAgfVxuICBpZiAoeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuICd1bmRlZmluZWQnO1xuICB9XG4gIGNvbnN0IHQgPSB0eXBlb2YgeDtcbiAgaWYgKHQgPT09ICdvYmplY3QnICYmIChBcnJheS5wcm90b3R5cGUuaXNQcm90b3R5cGVPZih4KSB8fCB4LmNvbnN0cnVjdG9yICYmIHguY29uc3RydWN0b3IubmFtZSA9PT0gJ0FycmF5JykpIHtcbiAgICByZXR1cm4gJ2FycmF5JztcbiAgfVxuICBpZiAodCA9PT0gJ29iamVjdCcgJiYgKFN0cmluZy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZih4KSB8fCB4LmNvbnN0cnVjdG9yICYmIHguY29uc3RydWN0b3IubmFtZSA9PT0gJ1N0cmluZycpKSB7XG4gICAgcmV0dXJuICdzdHJpbmcnO1xuICB9XG4gIHJldHVybiB0O1xufTtcblxuY29uc3QgaXNUeXBlID0gPFQ+KHR5cGU6IHN0cmluZykgPT4gKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBUID0+IHR5cGVPZih2YWx1ZSkgPT09IHR5cGU7XG5cbmV4cG9ydCBjb25zdCBpc1N0cmluZyA9IGlzVHlwZTxzdHJpbmc+KCdzdHJpbmcnKTtcbmV4cG9ydCBjb25zdCBpc09iamVjdCA9IGlzVHlwZTxPYmplY3Q+KCdvYmplY3QnKTtcbmV4cG9ydCBjb25zdCBpc0FycmF5ID0gaXNUeXBlPEFycmF5PHVua25vd24+PignYXJyYXknKTtcbmV4cG9ydCBjb25zdCBpc051bGwgPSBpc1R5cGU8bnVsbD4oJ251bGwnKTtcbmV4cG9ydCBjb25zdCBpc0Jvb2xlYW4gPSBpc1R5cGU8Ym9vbGVhbj4oJ2Jvb2xlYW4nKTtcbmV4cG9ydCBjb25zdCBpc1VuZGVmaW5lZCA9IGlzVHlwZTx1bmRlZmluZWQ+KCd1bmRlZmluZWQnKTtcbmV4cG9ydCBjb25zdCBpc0Z1bmN0aW9uID0gaXNUeXBlPEZ1bmN0aW9uPignZnVuY3Rpb24nKTtcbmV4cG9ydCBjb25zdCBpc051bWJlciA9IGlzVHlwZTxudW1iZXI+KCdudW1iZXInKTtcblxuZXhwb3J0IGNvbnN0IGlzRXF1YXRhYmxlVHlwZSA9ICh4OiBzdHJpbmcpOiBib29sZWFuID0+XG4gIFsgJ3VuZGVmaW5lZCcsICdib29sZWFuJywgJ251bWJlcicsICdzdHJpbmcnLCAnZnVuY3Rpb24nLCAneG1sJywgJ251bGwnIF0uaW5kZXhPZih4KSAhPT0gLTE7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG4gICAgICAgIGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcbiAgICAgICAgfVxuICAgIH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucnYgPSAoKSA9PiAoXCIxLjUuMlwiKSIsIl9fd2VicGFja19yZXF1aXJlX18ucnVpZCA9IFwiYnVuZGxlcj1yc3BhY2tAMS41LjJcIjtcbiIsImltcG9ydCBQbHVnaW4gZnJvbSAnLi9QbHVnaW4nO1xuXG5QbHVnaW4oKTtcblxuLyoqICoqKioqXG4gKiBETyBOT1QgRVhQT1JUIEFOWVRISU5HXG4gKlxuICogSUYgWU9VIERPIFJPTExVUCBXSUxMIExFQVZFIEEgR0xPQkFMIE9OIFRIRSBQQUdFXG4gKioqKioqKi9cbiJdLCJuYW1lcyI6WyJFcSIsIkZ1biIsIk9wdGlvbmFsIiwiVHlwZSIsIm5hdGl2ZVNsaWNlIiwiQXJyYXkiLCJuYXRpdmVJbmRleE9mIiwibmF0aXZlUHVzaCIsInJhd0luZGV4T2YiLCJ0cyIsInQiLCJpbmRleE9mIiwieHMiLCJ4IiwiciIsImNvbnRhaW5zIiwiZXhpc3RzIiwicHJlZCIsImkiLCJsZW4iLCJyYW5nZSIsIm51bSIsImYiLCJjaHVuayIsImFycmF5Iiwic2l6ZSIsInMiLCJtYXAiLCJlYWNoIiwiZWFjaHIiLCJwYXJ0aXRpb24iLCJwYXNzIiwiZmFpbCIsImFyciIsImZpbHRlciIsImdyb3VwQnkiLCJ3YXNUeXBlIiwiZ3JvdXAiLCJ0eXBlIiwiZm9sZHIiLCJhY2MiLCJmb2xkbCIsImZpbmRVbnRpbCIsInVudGlsIiwiZmluZCIsImZpbmRJbmRleCIsImZpbmRMYXN0SW5kZXgiLCJmbGF0dGVuIiwiRXJyb3IiLCJiaW5kIiwiZm9yYWxsIiwiZXF1YWwiLCJhMSIsImEyIiwiZXEiLCJyZXZlcnNlIiwiZGlmZmVyZW5jZSIsIm1hcFRvT2JqZWN0IiwiU3RyaW5nIiwicHVyZSIsInNvcnQiLCJjb21wYXJhdG9yIiwiY29weSIsImdldCIsImhlYWQiLCJsYXN0IiwiZnJvbSIsImZpbmRNYXAiLCJ1bmlxdWUiLCJpc0R1cGxpY2F0ZWQiLCJub29wIiwibm9hcmciLCJjb21wb3NlIiwiZmEiLCJmYiIsImFyZ3MiLCJjb21wb3NlMSIsImZiYyIsImZhYiIsImEiLCJjb25zdGFudCIsInZhbHVlIiwiaWRlbnRpdHkiLCJ0cmlwbGVFcXVhbHMiLCJiIiwiY3VycnkiLCJmbiIsImluaXRpYWxBcmdzIiwicmVzdEFyZ3MiLCJhbGwiLCJub3QiLCJkaWUiLCJtc2ciLCJhcHBseSIsImNhbGwiLCJuZXZlciIsImFsd2F5cyIsIndlYWtlbiIsInBpcGUiLCJhYiIsImJjIiwiY2QiLCJkZSIsImVmIiwiZmciLCJnaCIsImMiLCJkIiwiZSIsImciLCJHbG9iYWwiLCJ3aW5kb3ciLCJGdW5jdGlvbiIsImtleXMiLCJPYmplY3QiLCJoYXNPd25Qcm9wZXJ0eSIsIm9iaiIsInByb3BzIiwiayIsInR1cGxlTWFwIiwidHVwbGUiLCJvYmpBY2MiLCJpbnRlcm5hbEZpbHRlciIsIm9uVHJ1ZSIsIm9uRmFsc2UiLCJiaWZpbHRlciIsIm1hcFRvQXJyYXkiLCJuYW1lIiwidmFsdWVzIiwia2V5IiwiaGFzIiwiaGFzTm9uTnVsbGFibGVLZXkiLCJ1bmRlZmluZWQiLCJpc0VtcHR5IiwidGFnIiwib25Ob25lIiwib25Tb21lIiwibWFwcGVyIiwiYmluZGVyIiwicHJlZGljYXRlIiwicmVwbGFjZW1lbnQiLCJ0aHVuayIsIm1lc3NhZ2UiLCJ3b3JrZXIiLCJwYXRoIiwicGFydHMiLCJzY29wZSIsIm8iLCJyZXNvbHZlIiwicCIsInN0ZXAiLCJwYXJ0IiwiZm9yZ2UiLCJ0YXJnZXQiLCJuYW1lc3BhY2UiLCJTdHJBcHBlbmQiLCJjaGVja1JhbmdlIiwic3RyIiwic3Vic3RyIiwic3RhcnQiLCJzdXBwbGFudCIsImlzU3RyaW5nT3JOdW1iZXIiLCJmdWxsTWF0Y2giLCJyZW1vdmVMZWFkaW5nIiwicHJlZml4Iiwic3RhcnRzV2l0aCIsInJlbW92ZVRyYWlsaW5nIiwic3VmZml4IiwiZW5kc1dpdGgiLCJlbnN1cmVMZWFkaW5nIiwiZW5zdXJlVHJhaWxpbmciLCJlbmQiLCJpZHgiLCJjYXBpdGFsaXplIiwiYmxhbmsiLCJ0cmltIiwibFRyaW0iLCJyVHJpbSIsImlzTm90RW1wdHkiLCJyZXBlYXQiLCJjb3VudCIsImZyb21Db2RlUG9pbnQiLCJ0b0ludCIsInJhZGl4IiwicGFyc2VJbnQiLCJpc05hTiIsInRvRmxvYXQiLCJwYXJzZUZsb2F0IiwiY2FjaGVkIiwiY2FsbGVkIiwiZ2V0UHJvdG90eXBlT2YiLCJoYXNQcm90byIsInYiLCJjb25zdHJ1Y3RvciIsInR5cGVPZiIsInByb3RvIiwiaXNUeXBlIiwiaXNTaW1wbGVUeXBlIiwiaXMiLCJpc09iamVjdCIsImlzU3RyaW5nIiwiaXNQbGFpbk9iamVjdCIsImlzQXJyYXkiLCJpc051bGwiLCJpc0Jvb2xlYW4iLCJpc1VuZGVmaW5lZCIsImlzTnVsbGFibGUiLCJpc05vbk51bGxhYmxlIiwiaXNGdW5jdGlvbiIsImlzTnVtYmVyIiwiaXNBcnJheU9mIiwiaXNQcm9taXNlTGlrZSIsImFkZFRvU3RhcnQiLCJhZGRUb0VuZCIsInJlbW92ZUZyb21TdGFydCIsIm51bUNoYXJzIiwicmVtb3ZlRnJvbUVuZCIsIlRodW5rIiwiUGxhdGZvcm1EZXRlY3Rpb24iLCJtZWRpYU1hdGNoIiwicXVlcnkiLCJwbGF0Zm9ybSIsImRldGVjdCIsIm92ZXJyaWRlIiwib3ZlcnJpZGVzIiwiUmVzb2x2ZSIsInNhbmRIVE1MRWxlbWVudCIsImlzUHJvdG90eXBlT2YiLCJWZXJzaW9uIiwiZWRnZSIsImNocm9taXVtIiwiaWUiLCJvcGVyYSIsImZpcmVmb3giLCJzYWZhcmkiLCJ1bmtub3duIiwibnUiLCJpbmZvIiwiY3VycmVudCIsInZlcnNpb24iLCJpc0Jyb3dzZXIiLCJCcm93c2VyIiwid2luZG93cyIsImlvcyIsImFuZHJvaWQiLCJsaW51eCIsIm1hY29zIiwic29sYXJpcyIsImZyZWVic2QiLCJjaHJvbWVvcyIsImlzT1MiLCJPcGVyYXRpbmdTeXN0ZW0iLCJEZXZpY2VUeXBlIiwiVWFEYXRhIiwiVWFTdHJpbmciLCJQbGF0Zm9ybUluZm8iLCJ1c2VyQWdlbnQiLCJ1c2VyQWdlbnREYXRhT3B0IiwiYnJvd3NlcnMiLCJvc2VzIiwiYnJvd3NlciIsInVzZXJBZ2VudERhdGEiLCJvcyIsImRldmljZVR5cGUiLCJpc2lQYWQiLCJpc2lQaG9uZSIsImlzTW9iaWxlIiwiaXNUb3VjaCIsImlzVGFibGV0IiwiaXNQaG9uZSIsImlPU3dlYnZpZXciLCJpc0Rlc2t0b3AiLCJBcnIiLCJkZXRlY3RCcm93c2VyIiwidWFCcmFuZCIsImxjQnJhbmQiLCJjYW5kaWRhdGVzIiwiYWdlbnQiLCJjYW5kaWRhdGUiLCJkZXRlY3RPcyIsImZpcnN0TWF0Y2giLCJyZWdleGVzIiwiTnVtYmVyIiwidmVyc2lvblJlZ2V4ZXMiLCJjbGVhbmVkQWdlbnQiLCJtYWpvciIsIm1pbm9yIiwiU3RyaW5ncyIsIm5vcm1hbFZlcnNpb25SZWdleCIsImNoZWNrQ29udGFpbnMiLCJ1YXN0cmluZyIsInVuc2FmZSIsImdldE9yRGllIiwiYWN0dWFsIiwidG9BcnJheSIsInJlY3Vyc2UiLCJjdXIiLCJTZWxlY3RvcnMiLCJlMSIsImUyIiwiaXNFcXVhbE5vZGUiLCJtZW1iZXIiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJkMSIsImQyIiwiVHJhdmVyc2UiLCJiZWZvcmUiLCJtYXJrZXIiLCJwYXJlbnQiLCJhZnRlciIsInNpYmxpbmciLCJhcHBlbmQiLCJwcmVwZW5kIiwiZmlyc3RDaGlsZCIsImFwcGVuZEF0IiwiaW5kZXgiLCJ3cmFwIiwid3JhcHBlciIsIlN1Z2FyRWxlbWVudCIsIlN1Z2FySGVhZCIsIkF0dHJpYnV0ZSIsIlBsYXRmb3JtIiwiSW5zZXJ0IiwiYWRkVG9IZWFkIiwiZG9jIiwiYWRkU3R5bGVzaGVldCIsInVybCIsImRvY3VtZW50IiwibGluayIsImdldFByZXZlbnRDbGlja3NPbkxpbmtzU2NyaXB0IiwiaXNNYWNPU09ySU9TIiwiZWxtIiwiYW5jaG9yIiwiaHJlZiIsInRhcmdldEVsZW1lbnQiLCJpc01ldGFLZXlQcmVzc2VkIiwiQVRUUklCVVRFIiwiQ0RBVEFfU0VDVElPTiIsIkNPTU1FTlQiLCJET0NVTUVOVCIsIkRPQ1VNRU5UX1RZUEUiLCJET0NVTUVOVF9GUkFHTUVOVCIsIkVMRU1FTlQiLCJURVhUIiwiUFJPQ0VTU0lOR19JTlNUUlVDVElPTiIsIkVOVElUWV9SRUZFUkVOQ0UiLCJFTlRJVFkiLCJOT1RBVElPTiIsImZyb21IdG1sIiwiaHRtbCIsImRpdiIsImNvbnNvbGUiLCJmcm9tRG9tIiwiZnJvbVRhZyIsIm5vZGUiLCJmcm9tVGV4dCIsInRleHQiLCJmcm9tUG9pbnQiLCJkb2NFbG0iLCJ5IiwiZ2V0SGVhZCIsIlNhbmRIVE1MRWxlbWVudCIsIk5vZGVUeXBlcyIsImlzQ29tbWVudCIsImlzSFRNTEVsZW1lbnQiLCJpc0VsZW1lbnQiLCJpc1RleHQiLCJpc0RvY3VtZW50IiwiaXNEb2N1bWVudEZyYWdtZW50IiwiaXNUYWciLCJPYmoiLCJTdWdhck5vZGUiLCJyYXdTZXQiLCJkb20iLCJzZXQiLCJzZXRBbGwiLCJhdHRycyIsInNldE9wdGlvbnMiLCJyZW1vdmUiLCJnZXRPcHQiLCJoYXNOb25lIiwiY2xvbmUiLCJhdHRyIiwidHJhbnNmZXJPbmUiLCJzb3VyY2UiLCJkZXN0aW5hdGlvbiIsInNyY1ZhbHVlIiwidHJhbnNmZXIiLCJzZWxlY3RvciIsImVsZW0iLCJieXBhc3NTZWxlY3RvciIsImJhc2UiLCJvbmUiLCJSZWN1cnNlIiwiQ29tcGFyZSIsIm93bmVyIiwiZG9jdW1lbnRPck93bmVyIiwiZG9zIiwiZG9jdW1lbnRFbGVtZW50IiwiZGVmYXVsdFZpZXciLCJwYXJlbnROb2RlIiwicGFyZW50RWxlbWVudCIsImtpbiIsImNoaWxkcmVuIiwicGFyZW50cyIsImlzUm9vdCIsInN0b3AiLCJyZXQiLCJyYXdQYXJlbnQiLCJzaWJsaW5ncyIsImZpbHRlclNlbGYiLCJvZmZzZXRQYXJlbnQiLCJwcmV2U2libGluZyIsIm5leHRTaWJsaW5nIiwicHJldlNpYmxpbmdzIiwibmV4dFNpYmxpbmdzIiwiY2hpbGQiLCJjcyIsImxhc3RDaGlsZCIsImNoaWxkTm9kZXNDb3VudCIsImhhc0NoaWxkTm9kZXMiLCJzcG90Iiwib2Zmc2V0IiwibGVhZiIsImlzQW5kcm9pZCIsImlzTWFjT1MiLCJpc2lPUyIsIk1JTklNVU1fTEFSR0VfV0lEVEgiLCJNSU5JTVVNX0xBUkdFX0hFSUdIVCIsImlzT2ZTaXplIiwid2lkdGgiLCJoZWlnaHQiLCJjaG9pY2UiLCJvcHRpb25zIiwiZmFsbGJhY2siLCJvcHRpb24iLCJpc0xhcmdlVG91Y2giLCJpc0xhcmdlRGVza3RvcCIsImlzU21hbGxUb3VjaCIsImlzTGFyZ2UiLCJpc1NtYWxsQW5kcm9pZCIsIlBsdWdpbk1hbmFnZXIiLCJDb21tYW5kcyIsIkJ1dHRvbnMiLCJlZGl0b3IiLCJvcGVuIiwicmVnaXN0ZXIiLCJnZXRDb250ZW50U3R5bGUiLCJzaG91bGRVc2VDb250ZW50Q3NzQ29ycyIsImdldEJvZHlDbGFzcyIsImdldEJvZHlJZCIsIkxpbmsiLCJTY3JpcHRMb2FkZXIiLCJUb29scyIsIk9wdGlvbnMiLCJnZXRDb21wb25lbnRTY3JpcHRzSHRtbCIsInVybHMiLCJnZXRQcmV2aWV3SHRtbCIsImhlYWRIdG1sIiwiZW5jb2RlIiwiY29udGVudFN0eWxlIiwiY29ycyIsImJvZHlJZCIsImJvZHlDbGFzcyIsImRpcmVjdGlvbmFsaXR5IiwiZGlyQXR0ciIsInByZXZpZXdIdG1sIiwib25BY3Rpb24iLCJJZnJhbWVDb250ZW50IiwiY29udGVudCIsImRhdGFBcGkiLCJQbHVnaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSw2REFBZSxNQUFNLEVBQUM7QUFDZjs7Ozs7Ozs7Ozs7Ozs7QUNIUDs7QUFFQSw2REFBZSxNQUFNLEVBQUM7QUFDZjs7Ozs7Ozs7Ozs7Ozs7QUNIUDs7QUFFQSw2REFBZSxNQUFNLEVBQUM7QUFDZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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