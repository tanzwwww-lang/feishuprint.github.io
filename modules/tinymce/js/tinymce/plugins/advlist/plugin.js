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
"./src/plugins/advlist/main/ts/Plugin.ts": 
/*!***********************************************!*\
  !*** ./src/plugins/advlist/main/ts/Plugin.ts ***!
  \***********************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var tinymce_core_api_PluginManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/PluginManager */ "./lib/globals/tinymce/core/api/PluginManager.js");
/* ESM import */var _api_Commands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/Commands */ "./src/plugins/advlist/main/ts/api/Commands.ts");
/* ESM import */var _api_Options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/Options */ "./src/plugins/advlist/main/ts/api/Options.ts");
/* ESM import */var _ui_Buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/Buttons */ "./src/plugins/advlist/main/ts/ui/Buttons.ts");




/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>{
    tinymce_core_api_PluginManager__WEBPACK_IMPORTED_MODULE_0__["default"].add('advlist', (editor)=>{
        if (editor.hasPlugin('lists')) {
            _api_Options__WEBPACK_IMPORTED_MODULE_2__.register(editor);
            _ui_Buttons__WEBPACK_IMPORTED_MODULE_3__.register(editor);
            _api_Commands__WEBPACK_IMPORTED_MODULE_1__.register(editor);
        } else {
            // eslint-disable-next-line no-console
            console.error('Please use the Lists plugin together with the List Styles plugin.');
        }
    });
});


}),
"./src/plugins/advlist/main/ts/api/Commands.ts": 
/*!*****************************************************!*\
  !*** ./src/plugins/advlist/main/ts/api/Commands.ts ***!
  \*****************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  register: () => (register)
});
/* ESM import */var _core_Actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Actions */ "./src/plugins/advlist/main/ts/core/Actions.ts");

const register = (editor)=>{
    editor.addCommand('ApplyUnorderedListStyle', (ui, value)=>{
        _core_Actions__WEBPACK_IMPORTED_MODULE_0__.applyListFormat(editor, 'UL', value['list-style-type']);
    });
    editor.addCommand('ApplyOrderedListStyle', (ui, value)=>{
        _core_Actions__WEBPACK_IMPORTED_MODULE_0__.applyListFormat(editor, 'OL', value['list-style-type']);
    });
};



}),
"./src/plugins/advlist/main/ts/api/Options.ts": 
/*!****************************************************!*\
  !*** ./src/plugins/advlist/main/ts/api/Options.ts ***!
  \****************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getBulletStyles: () => (getBulletStyles),
  getNumberStyles: () => (getNumberStyles),
  register: () => (register)
});
const option = (name)=>(editor)=>editor.options.get(name);
const register = (editor)=>{
    const registerOption = editor.options.register;
    registerOption('advlist_number_styles', {
        processor: 'string[]',
        default: 'default,lower-alpha,lower-greek,lower-roman,upper-alpha,upper-roman'.split(',')
    });
    registerOption('advlist_bullet_styles', {
        processor: 'string[]',
        default: 'default,disc,circle,square'.split(',')
    });
};
const getNumberStyles = option('advlist_number_styles');
const getBulletStyles = option('advlist_bullet_styles');



}),
"./src/plugins/advlist/main/ts/core/Actions.ts": 
/*!*****************************************************!*\
  !*** ./src/plugins/advlist/main/ts/core/Actions.ts ***!
  \*****************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  applyListFormat: () => (applyListFormat)
});
const applyListFormat = (editor, listName, styleValue)=>{
    const cmd = listName === 'UL' ? 'InsertUnorderedList' : 'InsertOrderedList';
    editor.execCommand(cmd, false, styleValue === false ? null : {
        'list-style-type': styleValue
    });
};



}),
"./src/plugins/advlist/main/ts/core/ListUtils.ts": 
/*!*******************************************************!*\
  !*** ./src/plugins/advlist/main/ts/core/ListUtils.ts ***!
  \*******************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getSelectedStyleType: () => (getSelectedStyleType),
  inList: () => (inList),
  isListNode: () => (isListNode),
  isTableCellNode: () => (isTableCellNode),
  isWithinNonEditableList: () => (isWithinNonEditableList),
  setNodeChangeHandler: () => (setNodeChangeHandler)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Type.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Arr.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Optional.ts");

const isCustomList = (list)=>/\btox\-/.test(list.className);
const isChildOfBody = (editor, elm)=>{
    return editor.dom.isChildOf(elm, editor.getBody());
};
const matchNodeNames = (regex)=>(node)=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.isNonNullable(node) && regex.test(node.nodeName);
const isListNode = matchNodeNames(/^(OL|UL|DL)$/);
const isTableCellNode = matchNodeNames(/^(TH|TD)$/);
const inList = (editor, parents, nodeName)=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.findUntil(parents, (parent)=>isListNode(parent) && !isCustomList(parent), isTableCellNode).exists((list)=>list.nodeName === nodeName && isChildOfBody(editor, list));
const getSelectedStyleType = (editor)=>{
    const listElm = editor.dom.getParent(editor.selection.getNode(), 'ol,ul');
    const style = editor.dom.getStyle(listElm, 'listStyleType');
    return _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.Optional.from(style);
};
// Lists/core/Util.ts - Duplicated in Lists plugin
const isWithinNonEditable = (editor, element)=>element !== null && !editor.dom.isEditable(element);
const isWithinNonEditableList = (editor, element)=>{
    const parentList = editor.dom.getParent(element, 'ol,ul,dl');
    return isWithinNonEditable(editor, parentList) || !editor.selection.isEditable();
};
const setNodeChangeHandler = (editor, nodeChangeHandler)=>{
    const initialNode = editor.selection.getNode();
    // Set the initial state
    nodeChangeHandler({
        parents: editor.dom.getParents(initialNode),
        element: initialNode
    });
    editor.on('NodeChange', nodeChangeHandler);
    return ()=>editor.off('NodeChange', nodeChangeHandler);
};



}),
"./src/plugins/advlist/main/ts/ui/Buttons.ts": 
/*!***************************************************!*\
  !*** ./src/plugins/advlist/main/ts/ui/Buttons.ts ***!
  \***************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  register: () => (register)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Type.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Obj.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Arr.ts");
/* ESM import */var tinymce_core_api_util_Tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/util/Tools */ "./lib/globals/tinymce/core/api/util/Tools.js");
/* ESM import */var _api_Options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/Options */ "./src/plugins/advlist/main/ts/api/Options.ts");
/* ESM import */var _core_Actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/Actions */ "./src/plugins/advlist/main/ts/core/Actions.ts");
/* ESM import */var _core_ListUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/ListUtils */ "./src/plugins/advlist/main/ts/core/ListUtils.ts");





// <ListStyles>
const styleValueToText = (styleValue)=>{
    return styleValue.replace(/\-/g, ' ').replace(/\b\w/g, (chr)=>{
        return chr.toUpperCase();
    });
};
const normalizeStyleValue = (styleValue)=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_4__.isNullable(styleValue) || styleValue === 'default' ? '' : styleValue;
const makeSetupHandler = (editor, nodeName)=>(api)=>{
        const updateButtonState = (editor, parents)=>{
            const element = editor.selection.getStart(true);
            api.setActive(_core_ListUtils__WEBPACK_IMPORTED_MODULE_3__.inList(editor, parents, nodeName));
            api.setEnabled(!_core_ListUtils__WEBPACK_IMPORTED_MODULE_3__.isWithinNonEditableList(editor, element));
        };
        const nodeChangeHandler = (e)=>updateButtonState(editor, e.parents);
        return _core_ListUtils__WEBPACK_IMPORTED_MODULE_3__.setNodeChangeHandler(editor, nodeChangeHandler);
    };
const addSplitButton = (editor, id, tooltip, cmd, nodeName, styles)=>{
    const listStyleTypeAliases = {
        'lower-latin': 'lower-alpha',
        'upper-latin': 'upper-alpha',
        'lower-alpha': 'lower-latin',
        'upper-alpha': 'upper-latin'
    };
    const stylesContainsAliasMap = _ephox_katamari__WEBPACK_IMPORTED_MODULE_5__.map(listStyleTypeAliases, (alias)=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_6__.contains(styles, alias));
    editor.ui.registry.addSplitButton(id, {
        tooltip,
        chevronTooltip: tooltip,
        icon: nodeName === "OL" ? 'ordered-list' : 'unordered-list',
        presets: 'listpreview',
        columns: nodeName === "OL" ? 3 : 4,
        fetch: (callback)=>{
            const items = tinymce_core_api_util_Tools__WEBPACK_IMPORTED_MODULE_0__["default"].map(styles, (styleValue)=>{
                const iconStyle = nodeName === "OL" ? 'num' : 'bull';
                const iconName = styleValue === 'decimal' ? 'default' : styleValue;
                const itemValue = normalizeStyleValue(styleValue);
                const displayText = styleValueToText(styleValue);
                return {
                    type: 'choiceitem',
                    value: itemValue,
                    icon: 'list-' + iconStyle + '-' + iconName,
                    text: displayText
                };
            });
            callback(items);
        },
        onAction: ()=>editor.execCommand(cmd),
        onItemAction: (_splitButtonApi, value)=>{
            _core_Actions__WEBPACK_IMPORTED_MODULE_2__.applyListFormat(editor, nodeName, value);
        },
        select: (value)=>{
            const listStyleType = _core_ListUtils__WEBPACK_IMPORTED_MODULE_3__.getSelectedStyleType(editor);
            return listStyleType.exists((listStyle)=>value === listStyle || listStyleTypeAliases[listStyle] === value && !stylesContainsAliasMap[value]);
        },
        onSetup: makeSetupHandler(editor, nodeName)
    });
};
const addButton = (editor, id, tooltip, cmd, nodeName, styleValue)=>{
    editor.ui.registry.addToggleButton(id, {
        active: false,
        tooltip,
        icon: nodeName === "OL" ? 'ordered-list' : 'unordered-list',
        onSetup: makeSetupHandler(editor, nodeName),
        // Need to make sure the button removes rather than applies if a list of the same type is selected
        onAction: ()=>editor.queryCommandState(cmd) || styleValue === '' ? editor.execCommand(cmd) : _core_Actions__WEBPACK_IMPORTED_MODULE_2__.applyListFormat(editor, nodeName, styleValue)
    });
};
const addControl = (editor, id, tooltip, cmd, nodeName, styles)=>{
    if (styles.length > 1) {
        addSplitButton(editor, id, tooltip, cmd, nodeName, styles);
    } else {
        addButton(editor, id, tooltip, cmd, nodeName, normalizeStyleValue(styles[0]));
    }
};
const register = (editor)=>{
    addControl(editor, 'numlist', 'Numbered list', 'InsertOrderedList', "OL", _api_Options__WEBPACK_IMPORTED_MODULE_1__.getNumberStyles(editor));
    addControl(editor, 'bullist', 'Bullet list', 'InsertUnorderedList', "UL", _api_Options__WEBPACK_IMPORTED_MODULE_1__.getBulletStyles(editor));
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
  !*** ./src/plugins/advlist/main/ts/Main.ts ***!
  \*********************************************/
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _Plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Plugin */ "./src/plugins/advlist/main/ts/Plugin.ts");

(0,_Plugin__WEBPACK_IMPORTED_MODULE_0__["default"])(); /** *****
 * DO NOT EXPORT ANYTHING
 *
 * IF YOU DO ROLLUP WILL LEAVE A GLOBAL ON THE PAGE
 *******/ 

})();

})()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdGlueW1jZS9wbHVnaW5zL2Fkdmxpc3QvcGx1Z2luLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGlueW1jZS8uL2xpYi9nbG9iYWxzL3RpbnltY2UvY29yZS9hcGkvUGx1Z2luTWFuYWdlci5qcyIsIndlYnBhY2s6Ly90aW55bWNlLy4vbGliL2dsb2JhbHMvdGlueW1jZS9jb3JlL2FwaS91dGlsL1Rvb2xzLmpzIiwid2VicGFjazovL3RpbnltY2UvLi4va2F0YW1hcmkvc3JjL21haW4vdHMvZXBob3gva2F0YW1hcmkvYXBpL0Fyci50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL2thdGFtYXJpL3NyYy9tYWluL3RzL2VwaG94L2thdGFtYXJpL2FwaS9GdW4udHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9rYXRhbWFyaS9zcmMvbWFpbi90cy9lcGhveC9rYXRhbWFyaS9hcGkvT2JqLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4va2F0YW1hcmkvc3JjL21haW4vdHMvZXBob3gva2F0YW1hcmkvYXBpL09wdGlvbmFsLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4va2F0YW1hcmkvc3JjL21haW4vdHMvZXBob3gva2F0YW1hcmkvYXBpL1R5cGUudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL2Fkdmxpc3QvbWFpbi90cy9QbHVnaW4udHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL2Fkdmxpc3QvbWFpbi90cy9hcGkvQ29tbWFuZHMudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL2Fkdmxpc3QvbWFpbi90cy9hcGkvT3B0aW9ucy50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvYWR2bGlzdC9tYWluL3RzL2NvcmUvQWN0aW9ucy50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvYWR2bGlzdC9tYWluL3RzL2NvcmUvTGlzdFV0aWxzLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9hZHZsaXN0L21haW4vdHMvdWkvQnV0dG9ucy50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uLy4uL25vZGVfbW9kdWxlcy9AZXBob3gvZGlzcHV0ZS9zcmMvbWFpbi90cy9hcGkvRXEudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi8uLi9ub2RlX21vZHVsZXMvQGVwaG94L2Rpc3B1dGUvc3JjL21haW4vdHMvY29yZS9BcnJheVV0aWwudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi8uLi9ub2RlX21vZHVsZXMvQGVwaG94L2Rpc3B1dGUvc3JjL21haW4vdHMvY29yZS9UeXBlLnRzIiwid2VicGFjazovL3RpbnltY2Uvd2VicGFjay9ydW50aW1lL2RlZmluZV9wcm9wZXJ0eV9nZXR0ZXJzIiwid2VicGFjazovL3RpbnltY2Uvd2VicGFjay9ydW50aW1lL2hhc19vd25fcHJvcGVydHkiLCJ3ZWJwYWNrOi8vdGlueW1jZS93ZWJwYWNrL3J1bnRpbWUvbWFrZV9uYW1lc3BhY2Vfb2JqZWN0Iiwid2VicGFjazovL3RpbnltY2Uvd2VicGFjay9ydW50aW1lL3JzcGFja192ZXJzaW9uIiwid2VicGFjazovL3RpbnltY2Uvd2VicGFjay9ydW50aW1lL3JzcGFja191bmlxdWVfaWQiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL2Fkdmxpc3QvbWFpbi90cy9NYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBnbG9iYWwgPSB0aW55bWNlLnV0aWwuVG9vbHMucmVzb2x2ZSgndGlueW1jZS5QbHVnaW5NYW5hZ2VyJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGdsb2JhbDtcbmV4cG9ydCB2YXIgUGx1Z2luTWFuYWdlciA9IGdsb2JhbDtcbiIsInZhciBnbG9iYWwgPSB0aW55bWNlLnV0aWwuVG9vbHMucmVzb2x2ZSgndGlueW1jZS51dGlsLlRvb2xzJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGdsb2JhbDtcbmV4cG9ydCB2YXIgVG9vbHMgPSBnbG9iYWw7XG4iLCJpbXBvcnQgeyBFcSB9IGZyb20gJ0BlcGhveC9kaXNwdXRlJztcblxuaW1wb3J0ICogYXMgRnVuIGZyb20gJy4vRnVuJztcbmltcG9ydCB7IE9wdGlvbmFsIH0gZnJvbSAnLi9PcHRpb25hbCc7XG5pbXBvcnQgKiBhcyBUeXBlIGZyb20gJy4vVHlwZSc7XG5cbnR5cGUgQXJyYXlNb3JwaGlzbTxULCBVPiA9ICh4OiBULCBpOiBudW1iZXIpID0+IFU7XG50eXBlIEFycmF5R3VhcmRQcmVkaWNhdGU8VCwgVSBleHRlbmRzIFQ+ID0gKHg6IFQsIGk6IG51bWJlcikgPT4geCBpcyBVO1xudHlwZSBBcnJheVByZWRpY2F0ZTxUPiA9IEFycmF5TW9ycGhpc208VCwgYm9vbGVhbj47XG50eXBlIENvbXBhcmF0b3I8VD4gPSAoYTogVCwgYjogVCkgPT4gbnVtYmVyO1xuXG5jb25zdCBuYXRpdmVTbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcbmNvbnN0IG5hdGl2ZUluZGV4T2YgPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZjtcbmNvbnN0IG5hdGl2ZVB1c2ggPSBBcnJheS5wcm90b3R5cGUucHVzaDtcblxuY29uc3QgcmF3SW5kZXhPZiA9IDxUPiAodHM6IEFycmF5TGlrZTxUPiwgdDogVCk6IG51bWJlciA9PlxuICBuYXRpdmVJbmRleE9mLmNhbGwodHMsIHQpO1xuXG5leHBvcnQgY29uc3QgaW5kZXhPZiA9IDxUID0gYW55Pih4czogQXJyYXlMaWtlPFQ+LCB4OiBUKTogT3B0aW9uYWw8bnVtYmVyPiA9PiB7XG4gIC8vIFRoZSByYXdJbmRleE9mIG1ldGhvZCBkb2VzIG5vdCB3cmFwIHVwIGluIGFuIG9wdGlvbi4gVGhpcyBpcyBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucy5cbiAgY29uc3QgciA9IHJhd0luZGV4T2YoeHMsIHgpO1xuICByZXR1cm4gciA9PT0gLTEgPyBPcHRpb25hbC5ub25lKCkgOiBPcHRpb25hbC5zb21lKHIpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbnRhaW5zID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4sIHg6IFQpOiBib29sZWFuID0+IHJhd0luZGV4T2YoeHMsIHgpID4gLTE7XG5cbmV4cG9ydCBjb25zdCBleGlzdHMgPSA8VCA9IGFueT4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlQcmVkaWNhdGU8VD4pOiBib29sZWFuID0+IHtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHhzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIGlmIChwcmVkKHgsIGkpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQgY29uc3QgcmFuZ2UgPSA8VD4obnVtOiBudW1iZXIsIGY6IChhOiBudW1iZXIpID0+IFQpOiBUW10gPT4ge1xuICBjb25zdCByOiBUW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW07IGkrKykge1xuICAgIHIucHVzaChmKGkpKTtcbiAgfVxuICByZXR1cm4gcjtcbn07XG5cbi8vIEl0J3MgYSB0b3RhbCBtaWNybyBvcHRpbWlzYXRpb24sIGJ1dCB0aGVzZSBkbyBtYWtlIHNvbWUgZGlmZmVyZW5jZS5cbi8vIFBhcnRpY3VsYXJseSBmb3IgYnJvd3NlcnMgb3RoZXIgdGhhbiBDaHJvbWUuXG4vLyAtIGxlbmd0aCBjYWNoaW5nXG4vLyBodHRwOi8vanNwZXJmLmNvbS9icm93c2VyLWRpZXQtanF1ZXJ5LWVhY2gtdnMtZm9yLWxvb3AvNjlcbi8vIC0gbm90IHVzaW5nIHB1c2hcbi8vIGh0dHA6Ly9qc3BlcmYuY29tL2FycmF5LWRpcmVjdC1hc3NpZ25tZW50LXZzLXB1c2gvMlxuXG5leHBvcnQgY29uc3QgY2h1bmsgPSA8VD4oYXJyYXk6IEFycmF5TGlrZTxUPiwgc2l6ZTogbnVtYmVyKTogVFtdW10gPT4ge1xuICBjb25zdCByOiBUW11bXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSArPSBzaXplKSB7XG4gICAgY29uc3QgczogVFtdID0gbmF0aXZlU2xpY2UuY2FsbChhcnJheSwgaSwgaSArIHNpemUpO1xuICAgIHIucHVzaChzKTtcbiAgfVxuICByZXR1cm4gcjtcbn07XG5cbmV4cG9ydCBjb25zdCBtYXAgPSA8VCA9IGFueSwgVSA9IGFueT4oeHM6IEFycmF5TGlrZTxUPiwgZjogQXJyYXlNb3JwaGlzbTxULCBVPik6IFVbXSA9PiB7XG4gIC8vIHByZS1hbGxvY2F0aW5nIGFycmF5IHNpemUgd2hlbiBpdCdzIGd1YXJhbnRlZWQgdG8gYmUga25vd25cbiAgLy8gaHR0cDovL2pzcGVyZi5jb20vcHVzaC1hbGxvY2F0ZWQtdnMtZHluYW1pYy8yMlxuICBjb25zdCBsZW4gPSB4cy5sZW5ndGg7XG4gIGNvbnN0IHIgPSBuZXcgQXJyYXkobGVuKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICByW2ldID0gZih4LCBpKTtcbiAgfVxuICByZXR1cm4gcjtcbn07XG5cbi8vIFVud291bmQgaW1wbGVtZW50aW5nIG90aGVyIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBlYWNoLlxuLy8gVGhlIGNvZGUgc2l6ZSBpcyByb3VnaGx5IHRoZSBzYW1lLCBhbmQgaXQgc2hvdWxkIGFsbG93IGZvciBiZXR0ZXIgb3B0aW1pc2F0aW9uLlxuLy8gY29uc3QgZWFjaCA9IGZ1bmN0aW9uPFQsIFU+KHhzOiBUW10sIGY6ICh4OiBULCBpPzogbnVtYmVyLCB4cz86IFRbXSkgPT4gdm9pZCk6IHZvaWQge1xuZXhwb3J0IGNvbnN0IGVhY2ggPSA8VCA9IGFueT4oeHM6IEFycmF5TGlrZTxUPiwgZjogQXJyYXlNb3JwaGlzbTxULCB2b2lkPik6IHZvaWQgPT4ge1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0geHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgZih4LCBpKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGVhY2hyID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4sIGY6IEFycmF5TW9ycGhpc208VCwgdm9pZD4pOiB2b2lkID0+IHtcbiAgZm9yIChsZXQgaSA9IHhzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIGYoeCwgaSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBwYXJ0aXRpb24gPSA8VCA9IGFueT4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlQcmVkaWNhdGU8VD4pOiB7IHBhc3M6IFRbXTsgZmFpbDogVFtdIH0gPT4ge1xuICBjb25zdCBwYXNzOiBUW10gPSBbXTtcbiAgY29uc3QgZmFpbDogVFtdID0gW107XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICBjb25zdCBhcnIgPSBwcmVkKHgsIGkpID8gcGFzcyA6IGZhaWw7XG4gICAgYXJyLnB1c2goeCk7XG4gIH1cbiAgcmV0dXJuIHsgcGFzcywgZmFpbCB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbHRlcjoge1xuICA8VCwgVSBleHRlbmRzIFQ+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5R3VhcmRQcmVkaWNhdGU8VCwgVT4pOiBVW107XG4gIDxUPih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheVByZWRpY2F0ZTxUPik6IFRbXTtcbn0gPSA8VD4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlQcmVkaWNhdGU8VD4pOiBUW10gPT4ge1xuICBjb25zdCByOiBUW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHhzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIGlmIChwcmVkKHgsIGkpKSB7XG4gICAgICByLnB1c2goeCk7XG4gICAgfVxuICB9XG4gIHJldHVybiByO1xufTtcblxuLypcbiAqIEdyb3VwcyBhbiBhcnJheSBpbnRvIGNvbnRpZ3VvdXMgYXJyYXlzIG9mIGxpa2UgZWxlbWVudHMuIFdoZXRoZXIgYW4gZWxlbWVudCBpcyBsaWtlIG9yIG5vdCBkZXBlbmRzIG9uIGYuXG4gKlxuICogZiBpcyBhIGZ1bmN0aW9uIHRoYXQgZGVyaXZlcyBhIHZhbHVlIGZyb20gYW4gZWxlbWVudCAtIGUuZy4gdHJ1ZSBvciBmYWxzZSwgb3IgYSBzdHJpbmcuXG4gKiBFbGVtZW50cyBhcmUgbGlrZSBpZiB0aGlzIGZ1bmN0aW9uIGdlbmVyYXRlcyB0aGUgc2FtZSB2YWx1ZSBmb3IgdGhlbSAoYWNjb3JkaW5nIHRvID09PSkuXG4gKlxuICpcbiAqIE9yZGVyIG9mIHRoZSBlbGVtZW50cyBpcyBwcmVzZXJ2ZWQuIEFyci5mbGF0dGVuKCkgb24gdGhlIHJlc3VsdCB3aWxsIHJldHVybiB0aGUgb3JpZ2luYWwgbGlzdCwgYXMgd2l0aCBIYXNrZWxsIGdyb3VwQnkgZnVuY3Rpb24uXG4gKiAgRm9yIGEgZ29vZCBleHBsYW5hdGlvbiwgc2VlIHRoZSBncm91cCBmdW5jdGlvbiAod2hpY2ggaXMgYSBzcGVjaWFsIGNhc2Ugb2YgZ3JvdXBCeSlcbiAqICBodHRwOi8vaGFja2FnZS5oYXNrZWxsLm9yZy9wYWNrYWdlL2Jhc2UtNC43LjAuMC9kb2NzL0RhdGEtTGlzdC5odG1sI3Y6Z3JvdXBcbiAqL1xuZXhwb3J0IGNvbnN0IGdyb3VwQnkgPSA8VD4oeHM6IEFycmF5TGlrZTxUPiwgZjogKGE6IFQpID0+IGFueSk6IFRbXVtdID0+IHtcbiAgaWYgKHhzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBbXTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgd2FzVHlwZSA9IGYoeHNbMF0pOyAvLyBpbml0aWFsIGNhc2UgZm9yIG1hdGNoaW5nXG4gICAgY29uc3QgcjogVFtdW10gPSBbXTtcbiAgICBsZXQgZ3JvdXA6IFRbXSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHhzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0geHNbaV07XG4gICAgICBjb25zdCB0eXBlID0gZih4KTtcbiAgICAgIGlmICh0eXBlICE9PSB3YXNUeXBlKSB7XG4gICAgICAgIHIucHVzaChncm91cCk7XG4gICAgICAgIGdyb3VwID0gW107XG4gICAgICB9XG4gICAgICB3YXNUeXBlID0gdHlwZTtcbiAgICAgIGdyb3VwLnB1c2goeCk7XG4gICAgfVxuICAgIGlmIChncm91cC5sZW5ndGggIT09IDApIHtcbiAgICAgIHIucHVzaChncm91cCk7XG4gICAgfVxuICAgIHJldHVybiByO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZm9sZHIgPSA8VCwgVT4oeHM6IEFycmF5TGlrZTxUPiwgZjogKGFjYzogVSwgeDogVCwgaTogbnVtYmVyKSA9PiBVLCBhY2M6IFUpOiBVID0+IHtcbiAgZWFjaHIoeHMsICh4LCBpKSA9PiB7XG4gICAgYWNjID0gZihhY2MsIHgsIGkpO1xuICB9KTtcbiAgcmV0dXJuIGFjYztcbn07XG5cbmV4cG9ydCBjb25zdCBmb2xkbCA9IDxUID0gYW55LCBVID0gYW55Pih4czogQXJyYXlMaWtlPFQ+LCBmOiAoYWNjOiBVLCB4OiBULCBpOiBudW1iZXIpID0+IFUsIGFjYzogVSk6IFUgPT4ge1xuICBlYWNoKHhzLCAoeCwgaSkgPT4ge1xuICAgIGFjYyA9IGYoYWNjLCB4LCBpKTtcbiAgfSk7XG4gIHJldHVybiBhY2M7XG59O1xuXG5leHBvcnQgY29uc3QgZmluZFVudGlsOiB7XG4gIDxULCBVIGV4dGVuZHMgVD4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlHdWFyZFByZWRpY2F0ZTxULCBVPiwgdW50aWw6IEFycmF5UHJlZGljYXRlPFQ+KTogT3B0aW9uYWw8VT47XG4gIDxUID0gYW55Pih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheVByZWRpY2F0ZTxUPiwgdW50aWw6IEFycmF5UHJlZGljYXRlPFQ+KTogT3B0aW9uYWw8VD47XG59ID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+LCB1bnRpbDogQXJyYXlQcmVkaWNhdGU8VD4pOiBPcHRpb25hbDxUPiA9PiB7XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICBpZiAocHJlZCh4LCBpKSkge1xuICAgICAgcmV0dXJuIE9wdGlvbmFsLnNvbWUoeCk7XG4gICAgfSBlbHNlIGlmICh1bnRpbCh4LCBpKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBPcHRpb25hbC5ub25lKCk7XG59O1xuXG5leHBvcnQgY29uc3QgZmluZDoge1xuICA8VCwgVSBleHRlbmRzIFQ+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5R3VhcmRQcmVkaWNhdGU8VCwgVT4pOiBPcHRpb25hbDxVPjtcbiAgPFQgPSBhbnk+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+KTogT3B0aW9uYWw8VD47XG59ID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+KTogT3B0aW9uYWw8VD4gPT4ge1xuICByZXR1cm4gZmluZFVudGlsKHhzLCBwcmVkLCBGdW4ubmV2ZXIpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmRJbmRleCA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheVByZWRpY2F0ZTxUPik6IE9wdGlvbmFsPG51bWJlcj4gPT4ge1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0geHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgaWYgKHByZWQoeCwgaSkpIHtcbiAgICAgIHJldHVybiBPcHRpb25hbC5zb21lKGkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBPcHRpb25hbC5ub25lKCk7XG59O1xuXG5leHBvcnQgY29uc3QgZmluZExhc3RJbmRleCA9IDxUPihhcnI6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlQcmVkaWNhdGU8VD4pOiBPcHRpb25hbDxudW1iZXI+ID0+IHtcbiAgZm9yIChsZXQgaSA9IGFyci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGlmIChwcmVkKGFycltpXSwgaSkpIHtcbiAgICAgIHJldHVybiBPcHRpb25hbC5zb21lKGkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBPcHRpb25hbC5ub25lKCk7XG59O1xuXG5leHBvcnQgY29uc3QgZmxhdHRlbiA9IDxUPih4czogQXJyYXlMaWtlPFRbXT4pOiBUW10gPT4ge1xuICAvLyBOb3RlLCB0aGlzIGlzIHBvc3NpYmxlIGJlY2F1c2UgcHVzaCBzdXBwb3J0cyBtdWx0aXBsZSBhcmd1bWVudHM6XG4gIC8vIGh0dHA6Ly9qc3BlcmYuY29tL2NvbmNhdC1wdXNoLzZcbiAgLy8gTm90ZSB0aGF0IGluIHRoZSBwYXN0LCBjb25jYXQoKSB3b3VsZCBzaWxlbnRseSB3b3JrICh2ZXJ5IHNsb3dseSkgZm9yIGFycmF5LWxpa2Ugb2JqZWN0cy5cbiAgLy8gV2l0aCB0aGlzIGNoYW5nZSBpdCB3aWxsIHRocm93IGFuIGVycm9yLlxuICBjb25zdCByOiBUW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHhzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgLy8gRW5zdXJlIHRoYXQgZWFjaCB2YWx1ZSBpcyBhbiBhcnJheSBpdHNlbGZcbiAgICBpZiAoIVR5cGUuaXNBcnJheSh4c1tpXSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQXJyLmZsYXR0ZW4gaXRlbSAnICsgaSArICcgd2FzIG5vdCBhbiBhcnJheSwgaW5wdXQ6ICcgKyB4cyk7XG4gICAgfVxuICAgIG5hdGl2ZVB1c2guYXBwbHkociwgeHNbaV0pO1xuICB9XG4gIHJldHVybiByO1xufTtcblxuZXhwb3J0IGNvbnN0IGJpbmQgPSA8VCA9IGFueSwgVSA9IGFueT4oeHM6IEFycmF5TGlrZTxUPiwgZjogQXJyYXlNb3JwaGlzbTxULCBVW10+KTogVVtdID0+XG4gIGZsYXR0ZW4obWFwKHhzLCBmKSk7XG5cbmV4cG9ydCBjb25zdCBmb3JhbGwgPSA8VD4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlQcmVkaWNhdGU8VD4pOiBib29sZWFuID0+IHtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHhzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIGlmIChwcmVkKHgsIGkpICE9PSB0cnVlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxuZXhwb3J0IGNvbnN0IGVxdWFsID0gPFQ+KGExOiBBcnJheUxpa2U8VD4sIGEyOiBBcnJheUxpa2U8VD4sIGVxOiBFcS5FcTxUPiA9IEVxLmVxQW55KTogYm9vbGVhbiA9PlxuICBFcS5lcUFycmF5KGVxKS5lcShhMSwgYTIpO1xuXG5leHBvcnQgY29uc3QgcmV2ZXJzZSA9IDxUPih4czogQXJyYXlMaWtlPFQ+KTogVFtdID0+IHtcbiAgY29uc3QgcjogVFtdID0gbmF0aXZlU2xpY2UuY2FsbCh4cywgMCk7XG4gIHIucmV2ZXJzZSgpO1xuICByZXR1cm4gcjtcbn07XG5cbmV4cG9ydCBjb25zdCBkaWZmZXJlbmNlID0gPFQ+KGExOiBBcnJheUxpa2U8VD4sIGEyOiBBcnJheUxpa2U8VD4pOiBUW10gPT4gZmlsdGVyKGExLCAoeCkgPT4gIWNvbnRhaW5zKGEyLCB4KSk7XG5cbmV4cG9ydCBjb25zdCBtYXBUb09iamVjdDoge1xuICA8VCBleHRlbmRzIHN0cmluZywgVT4oeHM6IEFycmF5TGlrZTxUPiwgZjogKHg6IFQsIGk6IG51bWJlcikgPT4gVSk6IFJlY29yZDxULCBVPjtcbiAgPFQsIFIgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+Pih4czogQXJyYXlMaWtlPFQ+LCBmOiAoeDogVCwgaTogbnVtYmVyKSA9PiBSW2tleW9mIFJdKTogUjtcbn0gPSA8VCwgUiBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4+KHhzOiBBcnJheUxpa2U8VD4sIGY6ICh4OiBULCBpOiBudW1iZXIpID0+IFJba2V5b2YgUl0pOiBSID0+IHtcbiAgY29uc3QgciA9IHt9IGFzIFI7XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICByW1N0cmluZyh4KSBhcyBrZXlvZiBSXSA9IGYoeCwgaSk7XG4gIH1cbiAgcmV0dXJuIHI7XG59O1xuXG5leHBvcnQgY29uc3QgcHVyZSA9IDxUPih4OiBUKTogVFtdID0+IFsgeCBdO1xuXG5leHBvcnQgY29uc3Qgc29ydCA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCBjb21wYXJhdG9yPzogQ29tcGFyYXRvcjxUPik6IFRbXSA9PiB7XG4gIGNvbnN0IGNvcHk6IFRbXSA9IG5hdGl2ZVNsaWNlLmNhbGwoeHMsIDApO1xuICBjb3B5LnNvcnQoY29tcGFyYXRvcik7XG4gIHJldHVybiBjb3B5O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldCA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCBpOiBudW1iZXIpOiBPcHRpb25hbDxUPiA9PiBpID49IDAgJiYgaSA8IHhzLmxlbmd0aCA/IE9wdGlvbmFsLnNvbWUoeHNbaV0pIDogT3B0aW9uYWwubm9uZSgpO1xuXG5leHBvcnQgY29uc3QgaGVhZCA9IDxUPih4czogQXJyYXlMaWtlPFQ+KTogT3B0aW9uYWw8VD4gPT4gZ2V0KHhzLCAwKTtcblxuZXhwb3J0IGNvbnN0IGxhc3QgPSA8VD4oeHM6IEFycmF5TGlrZTxUPik6IE9wdGlvbmFsPFQ+ID0+IGdldCh4cywgeHMubGVuZ3RoIC0gMSk7XG5cbmV4cG9ydCBjb25zdCBmcm9tOiA8VD4oeDogQXJyYXlMaWtlPFQ+KSA9PiBUW10gPSBUeXBlLmlzRnVuY3Rpb24oQXJyYXkuZnJvbSkgPyBBcnJheS5mcm9tIDogKHgpID0+IG5hdGl2ZVNsaWNlLmNhbGwoeCk7XG5cbmV4cG9ydCBjb25zdCBmaW5kTWFwID0gPEEsIEI+KGFycjogQXJyYXlMaWtlPEE+LCBmOiAoYTogQSwgaW5kZXg6IG51bWJlcikgPT4gT3B0aW9uYWw8Qj4pOiBPcHRpb25hbDxCPiA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgciA9IGYoYXJyW2ldLCBpKTtcbiAgICBpZiAoci5pc1NvbWUoKSkge1xuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuICB9XG4gIHJldHVybiBPcHRpb25hbC5ub25lPEI+KCk7XG59O1xuXG5leHBvcnQgY29uc3QgdW5pcXVlID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4sIGNvbXBhcmF0b3I/OiAoYTogVCwgYjogVCkgPT4gYm9vbGVhbik6IFRbXSA9PiB7XG4gIGNvbnN0IHI6IFRbXSA9IFtdO1xuXG4gIGNvbnN0IGlzRHVwbGljYXRlZCA9IFR5cGUuaXNGdW5jdGlvbihjb21wYXJhdG9yKSA/XG4gICAgKHg6IFQpID0+IGV4aXN0cyhyLCAoaSkgPT4gY29tcGFyYXRvcihpLCB4KSkgOlxuICAgICh4OiBUKSA9PiBjb250YWlucyhyLCB4KTtcblxuICBmb3IgKGxldCBpID0gMCwgbGVuID0geHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgaWYgKCFpc0R1cGxpY2F0ZWQoeCkpIHtcbiAgICAgIHIucHVzaCh4KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcjtcbn07XG4iLCJpbXBvcnQgKiBhcyBUeXBlIGZyb20gJy4vVHlwZSc7XG5cbmNvbnN0IG5vb3A6ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZFxuPSAoKSA9PiB7IH07XG5cbmNvbnN0IG5vYXJnOiA8VD4oZjogKCkgPT4gVCkgPT4gKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkXG49IChmKSA9PiAoKSA9PiBmKCk7XG5cbi8qKiBDb21wb3NlIGEgdW5hcnkgZnVuY3Rpb24gd2l0aCBhbiBuLWFyeSBmdW5jdGlvbiAqL1xuY29uc3QgY29tcG9zZSA9IDxUIGV4dGVuZHMgYW55W10sIFUsIFY+KGZhOiAodjogVSkgPT4gViwgZmI6ICguLi54OiBUKSA9PiBVKTogKC4uLng6IFQpID0+IFYgPT4ge1xuICByZXR1cm4gKC4uLmFyZ3M6IFQpID0+IHtcbiAgICByZXR1cm4gZmEoZmIuYXBwbHkobnVsbCwgYXJncykpO1xuICB9O1xufTtcblxuLyoqIENvbXBvc2UgdHdvIHVuYXJ5IGZ1bmN0aW9ucy4gU2ltaWxhciB0byBjb21wb3NlLCBidXQgYXZvaWRzIHVzaW5nIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS4gKi9cbmNvbnN0IGNvbXBvc2UxID0gPEEsIEIsIEM+IChmYmM6IChiOiBCKSA9PiBDLCBmYWI6IChhOiBBKSA9PiBCKSA9PiAoYTogQSk6IEMgPT5cbiAgZmJjKGZhYihhKSk7XG5cbmNvbnN0IGNvbnN0YW50ID0gPFQ+KHZhbHVlOiBUKTogKCkgPT4gVCA9PiB7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xufTtcblxuY29uc3QgaWRlbnRpdHkgPSA8VCA9IGFueT4oeDogVCk6IFQgPT4ge1xuICByZXR1cm4geDtcbn07XG5cbmNvbnN0IHRyaXBsZUVxdWFscyA9IDxUPihhOiBULCBiOiBUKTogYm9vbGVhbiA9PiB7XG4gIHJldHVybiBhID09PSBiO1xufTtcblxuZnVuY3Rpb24gY3VycnkgPFJFU1QgZXh0ZW5kcyBhbnlbXSwgT1VUPihmbjogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQpOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVDtcbmZ1bmN0aW9uIGN1cnJ5IDxBLCBSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46IChhOiBBLCAuLi5yZXN0QXJnczogUkVTVCkgPT4gT1VULCBhOiBBKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8QSwgQiwgUkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoYTogQSwgYjogQiwgLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCwgYTogQSwgYjogQik6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPEEsIEIsIEMsIFJFU1QgZXh0ZW5kcyBhbnlbXSwgT1VUPihmbjogKGE6IEEsIGI6IEIsIGM6IEMsIC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQsIGE6IEEsIGI6IEIsIGM6IEMpOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVDtcbmZ1bmN0aW9uIGN1cnJ5IDxBLCBCLCBDLCBELCBSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46IChhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCAuLi5yZXN0QXJnczogUkVTVCkgPT4gT1VULCBhOiBBLCBiOiBCLCBjOiBDLCBkOiBEKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8QSwgQiwgQywgRCwgRSwgUkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCwgYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSk6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPEEsIEIsIEMsIEQsIEUsIEYsIFJFU1QgZXh0ZW5kcyBhbnlbXSwgT1VUPihmbjogKGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIGY6IEYsIC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQsIGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIGY6IEYpOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVDtcbmZ1bmN0aW9uIGN1cnJ5IDxBLCBCLCBDLCBELCBFLCBGLCBHLCBSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46IChhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCBmOiBGLCBnOiBHLCAuLi5yZXN0QXJnczogUkVTVCkgPT4gT1VULCBhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCBmOiBGLCBnOiBHKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8QSwgQiwgQywgRCwgRSwgRiwgRywgSCwgUkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgZjogRiwgZzogRywgaDogSCwgLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCwgYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgZjogRiwgZzogRywgaDogSCk6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPEEsIEIsIEMsIEQsIEUsIEYsIEcsIEgsIEksIFJFU1QgZXh0ZW5kcyBhbnlbXSwgT1VUPihmbjogKGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIGY6IEYsIGc6IEcsIGg6IEgsIGk6IEksIC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQsIGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIGY6IEYsIGc6IEcsIGg6IEgsIGk6IEkpOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVDtcbmZ1bmN0aW9uIGN1cnJ5IDxBLCBCLCBDLCBELCBFLCBGLCBHLCBILCBJLCBKLCBSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46IChhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCBmOiBGLCBnOiBHLCBoOiBILCBpOiBJLCBqOiBKLCAuLi5yZXN0QXJnczogUkVTVCkgPT4gT1VULCBhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCBmOiBGLCBnOiBHLCBoOiBILCBpOiBJLCBqOiBKKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8T1VUPihmbjogKC4uLmFsbEFyZ3M6IGFueVtdKSA9PiBPVVQsIC4uLmluaXRpYWxBcmdzOiBhbnlbXSk6ICguLi5yZXN0QXJnczogYW55W10pID0+IE9VVCB7XG4gIHJldHVybiAoLi4ucmVzdEFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3QgYWxsID0gaW5pdGlhbEFyZ3MuY29uY2F0KHJlc3RBcmdzKTtcbiAgICByZXR1cm4gZm4uYXBwbHkobnVsbCwgYWxsKTtcbiAgfTtcbn1cblxuY29uc3Qgbm90ID0gPFQ+KGY6ICh0OiBUKSA9PiBib29sZWFuKSA9PiAodDogVCk6IGJvb2xlYW4gPT5cbiAgIWYodCk7XG5cbmNvbnN0IGRpZSA9IChtc2c6IHN0cmluZykgPT4ge1xuICByZXR1cm4gKCk6IG5ldmVyID0+IHtcbiAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcbiAgfTtcbn07XG5cbmNvbnN0IGFwcGx5ID0gPFQ+KGY6ICgpID0+IFQpOiBUID0+IHtcbiAgcmV0dXJuIGYoKTtcbn07XG5cbmNvbnN0IGNhbGwgPSAoZjogKCkgPT4gYW55KTogdm9pZCA9PiB7XG4gIGYoKTtcbn07XG5cbmNvbnN0IG5ldmVyOiAoLi4uYXJnczogYW55W10pID0+IGZhbHNlID0gY29uc3RhbnQ8ZmFsc2U+KGZhbHNlKTtcbmNvbnN0IGFsd2F5czogKC4uLmFyZ3M6IGFueVtdKSA9PiB0cnVlID0gY29uc3RhbnQ8dHJ1ZT4odHJ1ZSk7XG5cbi8qIFVzZWQgdG8gd2Vha2VuIHR5cGVzICovXG5jb25zdCB3ZWFrZW4gPSA8QSwgQiBleHRlbmRzIEE+KGI6IEIpOiBBID0+IGI7XG5cbnR5cGUgRnVuPFgsIFk+ID0gKHg6IFgpID0+IFk7XG5jb25zdCBwaXBlOiB7XG4gIDxBLCBCPihhOiBBLCBhYjogRnVuPEEsIEI+KTogQjtcbiAgPEEsIEIsIEM+KGE6IEEsIGFiOiBGdW48QSwgQj4sIGJjOiBGdW48QiwgQz4pOiBDO1xuICA8QSwgQiwgQywgRD4oYTogQSwgYWI6IEZ1bjxBLCBCPiwgYmM6IEZ1bjxCLCBDPiwgY2Q6IEZ1bjxDLCBEPik6IEQ7XG4gIDxBLCBCLCBDLCBELCBFPihhOiBBLCBhYjogRnVuPEEsIEI+LCBiYzogRnVuPEIsIEM+LCBjZDogRnVuPEMsIEQ+LCBkZTogRnVuPEQsIEU+KTogRTtcbiAgPEEsIEIsIEMsIEQsIEUsIEY+KGE6IEEsIGFiOiBGdW48QSwgQj4sIGJjOiBGdW48QiwgQz4sIGNkOiBGdW48QywgRD4sIGRlOiBGdW48RCwgRT4sIGVmOiBGdW48RSwgRj4pOiBGO1xuICA8QSwgQiwgQywgRCwgRSwgRiwgRz4oYTogQSwgYWI6IEZ1bjxBLCBCPiwgYmM6IEZ1bjxCLCBDPiwgY2Q6IEZ1bjxDLCBEPiwgZGU6IEZ1bjxELCBFPiwgZWY6IEZ1bjxFLCBGPiwgZmc6IEZ1bjxGLCBHPik6IEc7XG4gIDxBLCBCLCBDLCBELCBFLCBGLCBHLCBIPihhOiBBLCBhYjogRnVuPEEsIEI+LCBiYzogRnVuPEIsIEM+LCBjZDogRnVuPEMsIEQ+LCBkZTogRnVuPEQsIEU+LCBlZjogRnVuPEUsIEY+LCBmZzogRnVuPEYsIEc+LCBnaDogRnVuPEcsIEg+KTogSDtcbn0gPVxuICA8QSwgQiwgQywgRCwgRSwgRiwgRywgSD4oYTogQSwgYWI6IEZ1bjxBLCBCPiwgYmM/OiBGdW48QiwgQz4sIGNkPzogRnVuPEMsIEQ+LCBkZT86IEZ1bjxELCBFPiwgZWY/OiBGdW48RSwgRj4sIGZnPzogRnVuPEYsIEc+LCBnaD86IEZ1bjxHLCBIPik6IEIgfCBDIHwgRCB8IEUgfCBGIHwgRyB8IEggPT4ge1xuICAgIGNvbnN0IGIgPSBhYihhKTtcbiAgICBpZiAoVHlwZS5pc051bGxhYmxlKGJjKSkge1xuICAgICAgcmV0dXJuIGI7XG4gICAgfVxuXG4gICAgY29uc3QgYyA9IGJjKGIpO1xuICAgIGlmIChUeXBlLmlzTnVsbGFibGUoY2QpKSB7XG4gICAgICByZXR1cm4gYztcbiAgICB9XG5cbiAgICBjb25zdCBkID0gY2QoYyk7XG4gICAgaWYgKFR5cGUuaXNOdWxsYWJsZShkZSkpIHtcbiAgICAgIHJldHVybiBkO1xuICAgIH1cblxuICAgIGNvbnN0IGUgPSBkZShkKTtcbiAgICBpZiAoVHlwZS5pc051bGxhYmxlKGVmKSkge1xuICAgICAgcmV0dXJuIGU7XG4gICAgfVxuXG4gICAgY29uc3QgZiA9IGVmKGUpO1xuICAgIGlmIChUeXBlLmlzTnVsbGFibGUoZmcpKSB7XG4gICAgICByZXR1cm4gZjtcbiAgICB9XG5cbiAgICBjb25zdCBnID0gZmcoZik7XG4gICAgaWYgKFR5cGUuaXNOdWxsYWJsZShnaCkpIHtcbiAgICAgIHJldHVybiBnO1xuICAgIH1cblxuICAgIHJldHVybiBnaChnKTtcbiAgfTtcblxuZXhwb3J0IHtcbiAgbm9vcCxcbiAgbm9hcmcsXG4gIGNvbXBvc2UsXG4gIGNvbXBvc2UxLFxuICBjb25zdGFudCxcbiAgaWRlbnRpdHksXG4gIHRyaXBsZUVxdWFscyxcbiAgY3VycnksXG4gIG5vdCxcbiAgZGllLFxuICBhcHBseSxcbiAgY2FsbCxcbiAgbmV2ZXIsXG4gIGFsd2F5cyxcbiAgd2Vha2VuLFxuICBwaXBlXG59O1xuIiwiaW1wb3J0IHsgRXEgfSBmcm9tICdAZXBob3gvZGlzcHV0ZSc7XG5cbmltcG9ydCAqIGFzIEZ1biBmcm9tICcuL0Z1bic7XG5pbXBvcnQgeyBPcHRpb25hbCB9IGZyb20gJy4vT3B0aW9uYWwnO1xuXG50eXBlIE9iaktleXM8VCBleHRlbmRzIHt9PiA9IEV4dHJhY3Q8a2V5b2YgVCwgc3RyaW5nPjtcbnR5cGUgT2JqQ2FsbGJhY2s8VCBleHRlbmRzIHt9PiA9ICh2YWx1ZTogVFtrZXlvZiBUXSwga2V5OiBPYmpLZXlzPFQ+KSA9PiB2b2lkO1xudHlwZSBPYmpNb3JwaGlzbTxUIGV4dGVuZHMge30sIFI+ID0gKHZhbHVlOiBUW2tleW9mIFRdLCBrZXk6IE9iaktleXM8VD4pID0+IFI7XG50eXBlIE9iakd1YXJkUHJlZGljYXRlPFQgZXh0ZW5kcyB7fSwgVSBleHRlbmRzIFRba2V5b2YgVF0+ID0gKHZhbHVlOiBUW2tleW9mIFRdLCBrZXk6IE9iaktleXM8VD4pID0+IHZhbHVlIGlzIFU7XG50eXBlIE9ialByZWRpY2F0ZTxUIGV4dGVuZHMge30+ID0gKHZhbHVlOiBUW2tleW9mIFRdLCBrZXk6IE9iaktleXM8VD4pID0+IGJvb2xlYW47XG5cbi8vIFRoZXJlIGFyZSBtYW55IHZhcmlhdGlvbnMgb2YgT2JqZWN0IGl0ZXJhdGlvbiB0aGF0IGFyZSBmYXN0ZXIgdGhhbiB0aGUgJ2Zvci1pbicgc3R5bGU6XG4vLyBodHRwOi8vanNwZXJmLmNvbS9vYmplY3Qta2V5cy1pdGVyYXRpb24vMTA3XG4vL1xuLy8gVXNlIHRoZSBuYXRpdmUga2V5cyBpZiBpdCBpcyBhdmFpbGFibGUgKElFOSspLCBvdGhlcndpc2UgZmFsbCBiYWNrIHRvIG1hbnVhbGx5IGZpbHRlcmluZ1xuZXhwb3J0IGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cztcblxuZXhwb3J0IGNvbnN0IGhhc093blByb3BlcnR5ID0gT2JqZWN0Lmhhc093blByb3BlcnR5O1xuXG5leHBvcnQgY29uc3QgZWFjaCA9IDxUIGV4dGVuZHMge30+KG9iajogVCwgZjogT2JqQ2FsbGJhY2s8VD4pOiB2b2lkID0+IHtcbiAgY29uc3QgcHJvcHMgPSBrZXlzKG9iaikgYXMgQXJyYXk8T2JqS2V5czxUPj47XG4gIGZvciAobGV0IGsgPSAwLCBsZW4gPSBwcm9wcy5sZW5ndGg7IGsgPCBsZW47IGsrKykge1xuICAgIGNvbnN0IGkgPSBwcm9wc1trXTtcbiAgICBjb25zdCB4ID0gb2JqW2ldO1xuICAgIGYoeCwgaSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBtYXAgPSA8VCBleHRlbmRzIHt9LCBSPihvYmo6IFQsIGY6IE9iak1vcnBoaXNtPFQsIFI+KTogeyBbayBpbiBrZXlvZiBUXTogUiB9ID0+IHtcbiAgcmV0dXJuIHR1cGxlTWFwPHsgW2sgaW4ga2V5b2YgVF06IFIgfSwgVD4ob2JqLCAoeCwgaSkgPT4gKHtcbiAgICBrOiBpLFxuICAgIHY6IGYoeCwgaSlcbiAgfSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IHR1cGxlTWFwID0gPFIgZXh0ZW5kcyB7fSwgVCBleHRlbmRzIHt9PihvYmo6IFQsIGY6IE9iak1vcnBoaXNtPFQsIHsgazoga2V5b2YgUjsgdjogUltrZXlvZiBSXSB9Pik6IFIgPT4ge1xuICBjb25zdCByID0ge30gYXMgUjtcbiAgZWFjaChvYmosICh4LCBpKSA9PiB7XG4gICAgY29uc3QgdHVwbGUgPSBmKHgsIGkpO1xuICAgIHJbdHVwbGUua10gPSB0dXBsZS52O1xuICB9KTtcbiAgcmV0dXJuIHI7XG59O1xuXG5jb25zdCBvYmpBY2MgPSA8VCBleHRlbmRzIHt9PihyOiBUKSA9PiAoeDogVFtrZXlvZiBUXSwgaToga2V5b2YgVCk6IHZvaWQgPT4ge1xuICByW2ldID0geDtcbn07XG5cbmNvbnN0IGludGVybmFsRmlsdGVyID0gPFQgZXh0ZW5kcyB7fT4ob2JqOiBULCBwcmVkOiBPYmpQcmVkaWNhdGU8VD4sIG9uVHJ1ZTogT2JqQ2FsbGJhY2s8VD4sIG9uRmFsc2U6IE9iakNhbGxiYWNrPFQ+KSA9PiB7XG4gIGVhY2gob2JqLCAoeCwgaSkgPT4ge1xuICAgIChwcmVkKHgsIGkpID8gb25UcnVlIDogb25GYWxzZSkoeCwgaSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGJpZmlsdGVyID0gPFQgZXh0ZW5kcyB7fT4ob2JqOiBULCBwcmVkOiBPYmpQcmVkaWNhdGU8VD4pOiB7IHQ6IFJlY29yZDxzdHJpbmcsIFRba2V5b2YgVF0+OyBmOiBSZWNvcmQ8c3RyaW5nLCBUW2tleW9mIFRdPiB9ID0+IHtcbiAgY29uc3QgdDogUmVjb3JkPHN0cmluZywgVFtrZXlvZiBUXT4gPSB7fTtcbiAgY29uc3QgZjogUmVjb3JkPHN0cmluZywgVFtrZXlvZiBUXT4gPSB7fTtcbiAgaW50ZXJuYWxGaWx0ZXIob2JqLCBwcmVkLCBvYmpBY2ModCksIG9iakFjYyhmKSk7XG4gIHJldHVybiB7IHQsIGYgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBmaWx0ZXI6IHtcbiAgPFQgZXh0ZW5kcyB7fSwgVSBleHRlbmRzIFRba2V5b2YgVF0+KG9iajogVCwgcHJlZDogT2JqR3VhcmRQcmVkaWNhdGU8VCwgVT4pOiBSZWNvcmQ8c3RyaW5nLCBVPjtcbiAgPFQgZXh0ZW5kcyB7fT4ob2JqOiBULCBwcmVkOiBPYmpQcmVkaWNhdGU8VD4pOiBSZWNvcmQ8c3RyaW5nLCBUW2tleW9mIFRdPjtcbn0gPSA8VCBleHRlbmRzIHt9PihvYmo6IFQsIHByZWQ6IE9ialByZWRpY2F0ZTxUPik6IFJlY29yZDxzdHJpbmcsIFRba2V5b2YgVF0+ID0+IHtcbiAgY29uc3QgdDogUmVjb3JkPHN0cmluZywgVFtrZXlvZiBUXT4gPSB7fTtcbiAgaW50ZXJuYWxGaWx0ZXIob2JqLCBwcmVkLCBvYmpBY2ModCksIEZ1bi5ub29wKTtcbiAgcmV0dXJuIHQ7XG59O1xuXG5leHBvcnQgY29uc3QgbWFwVG9BcnJheSA9IDxUIGV4dGVuZHMge30sIFI+KG9iajogVCwgZjogT2JqTW9ycGhpc208VCwgUj4pOiBSW10gPT4ge1xuICBjb25zdCByOiBSW10gPSBbXTtcbiAgZWFjaChvYmosICh2YWx1ZSwgbmFtZSkgPT4ge1xuICAgIHIucHVzaChmKHZhbHVlLCBuYW1lKSk7XG4gIH0pO1xuICByZXR1cm4gcjtcbn07XG5cbmV4cG9ydCBjb25zdCBmaW5kID0gPFQgZXh0ZW5kcyB7fT4ob2JqOiBULCBwcmVkOiAodmFsdWU6IFRba2V5b2YgVF0sIGtleTogT2JqS2V5czxUPiwgb2JqOiBUKSA9PiBib29sZWFuKTogT3B0aW9uYWw8VFtrZXlvZiBUXT4gPT4ge1xuICBjb25zdCBwcm9wcyA9IGtleXMob2JqKSBhcyBBcnJheTxPYmpLZXlzPFQ+PjtcbiAgZm9yIChsZXQgayA9IDAsIGxlbiA9IHByb3BzLmxlbmd0aDsgayA8IGxlbjsgaysrKSB7XG4gICAgY29uc3QgaSA9IHByb3BzW2tdO1xuICAgIGNvbnN0IHggPSBvYmpbaV07XG4gICAgaWYgKHByZWQoeCwgaSwgb2JqKSkge1xuICAgICAgcmV0dXJuIE9wdGlvbmFsLnNvbWUoeCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBPcHRpb25hbC5ub25lKCk7XG59O1xuXG5leHBvcnQgY29uc3QgdmFsdWVzID0gPFQgZXh0ZW5kcyB7fT4ob2JqOiBUKTogQXJyYXk8VFtrZXlvZiBUXT4gPT4ge1xuICByZXR1cm4gbWFwVG9BcnJheShvYmosIEZ1bi5pZGVudGl0eSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2l6ZSA9IChvYmo6IHt9KTogbnVtYmVyID0+IHtcbiAgcmV0dXJuIGtleXMob2JqKS5sZW5ndGg7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0ID0gPFQgZXh0ZW5kcyB7fSwgSyBleHRlbmRzIGtleW9mIFQ+KG9iajogVCwga2V5OiBLKTogT3B0aW9uYWw8Tm9uTnVsbGFibGU8VFtLXT4+ID0+IHtcbiAgcmV0dXJuIGhhcyhvYmosIGtleSkgPyBPcHRpb25hbC5mcm9tKG9ialtrZXldIGFzIE5vbk51bGxhYmxlPFRbS10+KSA6IE9wdGlvbmFsLm5vbmUoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBoYXMgPSA8VCBleHRlbmRzIHt9LCBLIGV4dGVuZHMga2V5b2YgVD4ob2JqOiBULCBrZXk6IEspOiBib29sZWFuID0+XG4gIGhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpO1xuXG5leHBvcnQgY29uc3QgaGFzTm9uTnVsbGFibGVLZXkgPSA8VCBleHRlbmRzIHt9LCBLIGV4dGVuZHMga2V5b2YgVD4ob2JqOiBULCBrZXk6IEspOiBvYmogaXMgVCAmIFJlY29yZDxLLCBOb25OdWxsYWJsZTxUW0tdPj4gPT5cbiAgaGFzKG9iaiwga2V5KSAmJiBvYmpba2V5XSAhPT0gdW5kZWZpbmVkICYmIG9ialtrZXldICE9PSBudWxsO1xuXG5leHBvcnQgY29uc3QgaXNFbXB0eSA9IChyOiBSZWNvcmQ8YW55LCBhbnk+KTogciBpcyB7fSA9PiB7XG4gIGZvciAoY29uc3QgeCBpbiByKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwociwgeCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5leHBvcnQgY29uc3QgZXF1YWwgPSA8VD4oYTE6IFJlY29yZDxzdHJpbmcsIFQ+LCBhMjogUmVjb3JkPHN0cmluZywgVD4sIGVxOiBFcS5FcTxUPiA9IEVxLmVxQW55KTogYm9vbGVhbiA9PlxuICBFcS5lcVJlY29yZChlcSkuZXEoYTEsIGEyKTtcbiIsImltcG9ydCAqIGFzIFR5cGUgZnJvbSAnLi9UeXBlJztcblxuLyoqXG4gKiBUaGUgYE9wdGlvbmFsYCB0eXBlIHJlcHJlc2VudHMgYSB2YWx1ZSAob2YgYW55IHR5cGUpIHRoYXQgcG90ZW50aWFsbHkgZG9lc1xuICogbm90IGV4aXN0LiBBbnkgYE9wdGlvbmFsPFQ+YCBjYW4gZWl0aGVyIGJlIGEgYFNvbWU8VD5gIChpbiB3aGljaCBjYXNlIHRoZVxuICogdmFsdWUgZG9lcyBleGlzdCkgb3IgYSBgTm9uZWAgKGluIHdoaWNoIGNhc2UgdGhlIHZhbHVlIGRvZXMgbm90IGV4aXN0KS4gVGhpc1xuICogbW9kdWxlIGRlZmluZXMgYSB3aG9sZSBsb3Qgb2YgRlAtaW5zcGlyZWQgdXRpbGl0eSBmdW5jdGlvbnMgZm9yIGRlYWxpbmcgd2l0aFxuICogYE9wdGlvbmFsYCBvYmplY3RzLlxuICpcbiAqIENvbXBhcmlzb24gd2l0aCBudWxsIG9yIHVuZGVmaW5lZDpcbiAqIC0gV2UgZG9uJ3QgZ2V0IGZhbmN5IG51bGwgY29hbGVzY2luZyBvcGVyYXRvcnMgd2l0aCBgT3B0aW9uYWxgXG4gKiAtIFdlIGRvIGdldCBmYW5jeSBoZWxwZXIgZnVuY3Rpb25zIHdpdGggYE9wdGlvbmFsYFxuICogLSBgT3B0aW9uYWxgIHN1cHBvcnQgbmVzdGluZywgYW5kIGFsbG93IGZvciB0aGUgdHlwZSB0byBzdGlsbCBiZSBudWxsYWJsZSAob3JcbiAqIGFub3RoZXIgYE9wdGlvbmFsYClcbiAqIC0gVGhlcmUgaXMgbm8gb3B0aW9uIHRvIHR1cm4gb2ZmIHN0cmljdC1vcHRpb25hbC1jaGVja3MgbGlrZSB0aGVyZSBpcyBmb3JcbiAqIHN0cmljdC1udWxsLWNoZWNrc1xuICovXG5leHBvcnQgY2xhc3MgT3B0aW9uYWw8VD4ge1xuICBwcml2YXRlIHJlYWRvbmx5IHRhZzogYm9vbGVhbjtcbiAgcHJpdmF0ZSByZWFkb25seSB2YWx1ZT86IFQ7XG5cbiAgLy8gU25lYWt5IG9wdGltaXNhdGlvbjogZXZlcnkgaW5zdGFuY2Ugb2YgT3B0aW9uYWwubm9uZSBpcyBpZGVudGljYWwsIHNvIGp1c3RcbiAgLy8gcmV1c2UgdGhlIHNhbWUgb2JqZWN0XG4gIHByaXZhdGUgc3RhdGljIHNpbmdsZXRvbk5vbmUgPSBuZXcgT3B0aW9uYWw8YW55PihmYWxzZSk7XG5cbiAgLy8gVGhlIGludGVybmFsIHJlcHJlc2VudGF0aW9uIGhhcyBhIGB0YWdgIGFuZCBhIGB2YWx1ZWAsIGJ1dCBib3RoIGFyZVxuICAvLyBwcml2YXRlOiBhYmxlIHRvIGJlIGNvbnNvbGUubG9nZ2VkLCBidXQgbm90IGFibGUgdG8gYmUgYWNjZXNzZWQgYnkgY29kZVxuICBwcml2YXRlIGNvbnN0cnVjdG9yKHRhZzogYm9vbGVhbiwgdmFsdWU/OiBUKSB7XG4gICAgdGhpcy50YWcgPSB0YWc7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgLy8gLS0tIElkZW50aXRpZXMgLS0tXG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgYE9wdGlvbmFsPFQ+YCB0aGF0ICoqZG9lcyoqIGNvbnRhaW4gYSB2YWx1ZS5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgc29tZTxUPih0aGlzOiB2b2lkLCB2YWx1ZTogVCk6IE9wdGlvbmFsPFQ+IHtcbiAgICByZXR1cm4gbmV3IE9wdGlvbmFsKHRydWUsIHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgYE9wdGlvbmFsPFQ+YCB0aGF0ICoqZG9lcyBub3QqKiBjb250YWluIGEgdmFsdWUuIGBUYCBjYW4gYmVcbiAgICogYW55IHR5cGUgYmVjYXVzZSB3ZSBkb24ndCBhY3R1YWxseSBoYXZlIGEgYFRgLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBub25lPFQgPSBuZXZlcj4odGhpczogdm9pZCk6IE9wdGlvbmFsPFQ+IHtcbiAgICByZXR1cm4gT3B0aW9uYWwuc2luZ2xldG9uTm9uZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtIGEgdHJhbnNmb3JtIG9uIGFuIGBPcHRpb25hbGAgdHlwZS4gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXNcbiAgICogYE9wdGlvbmFsYCBjb250YWlucyBhIHZhbHVlIG9yIG5vdCwgYGZvbGRgIHdpbGwgcmV0dXJuIGEgdmFsdWUgb2YgdHlwZSBgVWAuXG4gICAqIElmIHRoaXMgYE9wdGlvbmFsYCBkb2VzIG5vdCBjb250YWluIGEgdmFsdWUsIHRoZSBgVWAgd2lsbCBiZSBjcmVhdGVkIGJ5XG4gICAqIGNhbGxpbmcgYG9uTm9uZWAuIElmIHRoaXMgYE9wdGlvbmFsYCBkb2VzIGNvbnRhaW4gYSB2YWx1ZSwgdGhlIGBVYCB3aWxsIGJlXG4gICAqIGNyZWF0ZWQgYnkgY2FsbGluZyBgb25Tb21lYC5cbiAgICpcbiAgICogRm9yIHRoZSBGUCBlbnRodXNpYXN0cyBpbiB0aGUgcm9vbSwgdGhpcyBmdW5jdGlvbjpcbiAgICogMS4gQ291bGQgYmUgdXNlZCB0byBpbXBsZW1lbnQgYWxsIG9mIHRoZSBmdW5jdGlvbnMgYmVsb3dcbiAgICogMi4gRm9ybXMgYSBjYXRhbW9ycGhpc21cbiAgICovXG4gIHB1YmxpYyBmb2xkPFU+KG9uTm9uZTogKCkgPT4gVSwgb25Tb21lOiAodmFsdWU6IFQpID0+IFUpOiBVIHtcbiAgICBpZiAodGhpcy50YWcpIHtcbiAgICAgIHJldHVybiBvblNvbWUodGhpcy52YWx1ZSBhcyBUKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG9uTm9uZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgdGhpcyBgT3B0aW9uYWxgIG9iamVjdCBjb250YWlucyBhIHZhbHVlLlxuICAgKi9cbiAgcHVibGljIGlzU29tZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50YWc7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIGlmIHRoaXMgYE9wdGlvbmFsYCBvYmplY3QgKipkb2VzIG5vdCoqIGNvbnRhaW4gYSB2YWx1ZS5cbiAgICovXG4gIHB1YmxpYyBpc05vbmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLnRhZztcbiAgfVxuXG4gIC8vIC0tLSBGdW5jdG9yIChuYW1lIHN0b2xlbiBmcm9tIEhhc2tlbGwgLyBtYXRocykgLS0tXG5cbiAgLyoqXG4gICAqIFBlcmZvcm0gYSB0cmFuc2Zvcm0gb24gYW4gYE9wdGlvbmFsYCBvYmplY3QsICoqaWYqKiB0aGVyZSBpcyBhIHZhbHVlLiBJZlxuICAgKiB5b3UgcHJvdmlkZSBhIGZ1bmN0aW9uIHRvIHR1cm4gYSBUIGludG8gYSBVLCB0aGlzIGlzIHRoZSBmdW5jdGlvbiB5b3UgdXNlXG4gICAqIHRvIHR1cm4gYW4gYE9wdGlvbmFsPFQ+YCBpbnRvIGFuIGBPcHRpb25hbDxVPmAuIElmIHRoaXMgKipkb2VzKiogY29udGFpblxuICAgKiBhIHZhbHVlIHRoZW4gdGhlIG91dHB1dCB3aWxsIGFsc28gY29udGFpbiBhIHZhbHVlICh0aGF0IHZhbHVlIGJlaW5nIHRoZVxuICAgKiBvdXRwdXQgb2YgYG1hcHBlcih0aGlzLnZhbHVlKWApLCBhbmQgaWYgdGhpcyAqKmRvZXMgbm90KiogY29udGFpbiBhIHZhbHVlXG4gICAqIHRoZW4gbmVpdGhlciB3aWxsIHRoZSBvdXRwdXQuXG4gICAqL1xuICBwdWJsaWMgbWFwPFU+KG1hcHBlcjogKHZhbHVlOiBUKSA9PiBVKTogT3B0aW9uYWw8VT4ge1xuICAgIGlmICh0aGlzLnRhZykge1xuICAgICAgcmV0dXJuIE9wdGlvbmFsLnNvbWUobWFwcGVyKHRoaXMudmFsdWUgYXMgVCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gT3B0aW9uYWwubm9uZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIC0tLSBNb25hZCAobmFtZSBzdG9sZW4gZnJvbSBIYXNrZWxsIC8gbWF0aHMpIC0tLVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtIGEgdHJhbnNmb3JtIG9uIGFuIGBPcHRpb25hbGAgb2JqZWN0LCAqKmlmKiogdGhlcmUgaXMgYSB2YWx1ZS5cbiAgICogVW5saWtlIGBtYXBgLCBoZXJlIHRoZSB0cmFuc2Zvcm0gaXRzZWxmIGFsc28gcmV0dXJucyBhbiBgT3B0aW9uYWxgLlxuICAgKi9cbiAgcHVibGljIGJpbmQ8VT4oYmluZGVyOiAodmFsdWU6IFQpID0+IE9wdGlvbmFsPFU+KTogT3B0aW9uYWw8VT4ge1xuICAgIGlmICh0aGlzLnRhZykge1xuICAgICAgcmV0dXJuIGJpbmRlcih0aGlzLnZhbHVlIGFzIFQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gT3B0aW9uYWwubm9uZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIC0tLSBUcmF2ZXJzYWJsZSAobmFtZSBzdG9sZW4gZnJvbSBIYXNrZWxsIC8gbWF0aHMpIC0tLVxuXG4gIC8qKlxuICAgKiBGb3IgYSBnaXZlbiBwcmVkaWNhdGUsIHRoaXMgZnVuY3Rpb24gZmluZHMgb3V0IGlmIHRoZXJlICoqZXhpc3RzKiogYSB2YWx1ZVxuICAgKiBpbnNpZGUgdGhpcyBgT3B0aW9uYWxgIG9iamVjdCB0aGF0IG1lZXRzIHRoZSBwcmVkaWNhdGUuIEluIHByYWN0aWNlLCB0aGlzXG4gICAqIG1lYW5zIHRoYXQgZm9yIGBPcHRpb25hbGBzIHRoYXQgZG8gbm90IGNvbnRhaW4gYSB2YWx1ZSBpdCByZXR1cm5zIGZhbHNlIChhc1xuICAgKiBubyBwcmVkaWNhdGUtbWVldGluZyB2YWx1ZSBleGlzdHMpLlxuICAgKi9cbiAgcHVibGljIGV4aXN0cyhwcmVkaWNhdGU6ICh2YWx1ZTogVCkgPT4gYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnRhZyAmJiBwcmVkaWNhdGUodGhpcy52YWx1ZSBhcyBUKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3IgYSBnaXZlbiBwcmVkaWNhdGUsIHRoaXMgZnVuY3Rpb24gZmluZHMgb3V0IGlmICoqYWxsKiogdGhlIHZhbHVlcyBpbnNpZGVcbiAgICogdGhpcyBgT3B0aW9uYWxgIG9iamVjdCBtZWV0IHRoZSBwcmVkaWNhdGUuIEluIHByYWN0aWNlLCB0aGlzIG1lYW5zIHRoYXRcbiAgICogZm9yIGBPcHRpb25hbGBzIHRoYXQgZG8gbm90IGNvbnRhaW4gYSB2YWx1ZSBpdCByZXR1cm5zIHRydWUgKGFzIGFsbCAwXG4gICAqIG9iamVjdHMgZG8gbWVldCB0aGUgcHJlZGljYXRlKS5cbiAgICovXG4gIHB1YmxpYyBmb3JhbGwocHJlZGljYXRlOiAodmFsdWU6IFQpID0+IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMudGFnIHx8IHByZWRpY2F0ZSh0aGlzLnZhbHVlIGFzIFQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvciBhIGdpdmVuIHByZWRpY2F0ZSwgY3JlYXRlIGEgbmV3IGBPcHRpb25hbGAgb2JqZWN0IHRoYXQgd2lsbCByZXRhaW5cbiAgICogYWxsIHRoZSB2YWx1ZXMgaW5zaWRlIHRoZSBvbGQgYE9wdGlvbmFsYCBvYmplY3QgdGhhdCBtZWV0IHRoZSBwcmVkaWNhdGUuXG4gICAqIEluIHByYWN0aWNlLCB0aGUgYE9wdGlvbmFsYCBvYmplY3QgY29udGFpbnMgZWl0aGVyIDAgb3IgMSBvYmplY3RzLCBhbmRcbiAgICogdGhlIG91dHB1dCB3aWxsIGtlZXAgdGhlIChzaW5nbGUpIGlucHV0IG9iamVjdCAoaWYgaXQgZXhpc3RzKSBhcyBsb25nIGFzXG4gICAqIGl0IHBhc3NlcyB0aGUgcHJlZGljYXRlLlxuICAgKi9cbiAgcHVibGljIGZpbHRlcjxVIGV4dGVuZHMgVD4ocHJlZGljYXRlOiAodmFsdWU6IFQpID0+IHZhbHVlIGlzIFUpOiBPcHRpb25hbDxVPjtcbiAgcHVibGljIGZpbHRlcihwcmVkaWNhdGU6ICh2YWx1ZTogVCkgPT4gYm9vbGVhbik6IE9wdGlvbmFsPFQ+O1xuICBwdWJsaWMgZmlsdGVyKHByZWRpY2F0ZTogKHZhbHVlOiBUKSA9PiBib29sZWFuKTogT3B0aW9uYWw8VD4ge1xuICAgIGlmICghdGhpcy50YWcgfHwgcHJlZGljYXRlKHRoaXMudmFsdWUgYXMgVCkpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gT3B0aW9uYWwubm9uZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIC0tLSBHZXR0ZXJzIC0tLVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHZhbHVlIG91dCBvZiB0aGUgaW5zaWRlIG9mIHRoZSBgT3B0aW9uYWxgIG9iamVjdCwgdXNpbmcgYSBkZWZhdWx0XG4gICAqIGByZXBsYWNlbWVudGAgdmFsdWUgaWYgdGhlIHByb3ZpZGVkIGBPcHRpb25hbGAgb2JqZWN0IGRvZXMgbm90IGNvbnRhaW4gYVxuICAgKiB2YWx1ZS5cbiAgICovXG4gIHB1YmxpYyBnZXRPcjxVID0gVD4ocmVwbGFjZW1lbnQ6IFUpOiBUIHwgVSB7XG4gICAgcmV0dXJuIHRoaXMudGFnID8gdGhpcy52YWx1ZSBhcyBUIDogcmVwbGFjZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB2YWx1ZSBvdXQgb2YgdGhlIGluc2lkZSBvZiB0aGUgYE9wdGlvbmFsYCBvYmplY3QsIHVzaW5nIGEgZGVmYXVsdFxuICAgKiBgcmVwbGFjZW1lbnRgIHZhbHVlIGlmIHRoZSBwcm92aWRlZCBgT3B0aW9uYWxgIG9iamVjdCBkb2VzIG5vdCBjb250YWluIGFcbiAgICogdmFsdWUuICBVbmxpa2UgYGdldE9yYCwgaW4gdGhpcyBtZXRob2QgdGhlIGByZXBsYWNlbWVudGAgb2JqZWN0IGlzIGFsc29cbiAgICogYE9wdGlvbmFsYCAtIG1lYW5pbmcgdGhhdCB0aGlzIG1ldGhvZCB3aWxsIGFsd2F5cyByZXR1cm4gYW4gYE9wdGlvbmFsYC5cbiAgICovXG4gIHB1YmxpYyBvcjxVID0gVD4ocmVwbGFjZW1lbnQ6IE9wdGlvbmFsPFU+KTogT3B0aW9uYWw8VCB8IFU+IHtcbiAgICByZXR1cm4gdGhpcy50YWcgPyB0aGlzIDogcmVwbGFjZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB2YWx1ZSBvdXQgb2YgdGhlIGluc2lkZSBvZiB0aGUgYE9wdGlvbmFsYCBvYmplY3QsIHVzaW5nIGEgZGVmYXVsdFxuICAgKiBgcmVwbGFjZW1lbnRgIHZhbHVlIGlmIHRoZSBwcm92aWRlZCBgT3B0aW9uYWxgIG9iamVjdCBkb2VzIG5vdCBjb250YWluIGFcbiAgICogdmFsdWUuIFVubGlrZSBgZ2V0T3JgLCBpbiB0aGlzIG1ldGhvZCB0aGUgYHJlcGxhY2VtZW50YCB2YWx1ZSBpc1xuICAgKiBcInRodW5rZWRcIiAtIHRoYXQgaXMgdG8gc2F5IHRoYXQgeW91IGRvbid0IHBhc3MgYSB2YWx1ZSB0byBgZ2V0T3JUaHVua2AsIHlvdVxuICAgKiBwYXNzIGEgZnVuY3Rpb24gd2hpY2ggKGlmIGNhbGxlZCkgd2lsbCAqKnJldHVybioqIHRoZSBgdmFsdWVgIHlvdSB3YW50IHRvXG4gICAqIHVzZS5cbiAgICovXG4gIHB1YmxpYyBnZXRPclRodW5rPFUgPSBUPih0aHVuazogKCkgPT4gVSk6IFQgfCBVIHtcbiAgICByZXR1cm4gdGhpcy50YWcgPyB0aGlzLnZhbHVlIGFzIFQgOiB0aHVuaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdmFsdWUgb3V0IG9mIHRoZSBpbnNpZGUgb2YgdGhlIGBPcHRpb25hbGAgb2JqZWN0LCB1c2luZyBhIGRlZmF1bHRcbiAgICogYHJlcGxhY2VtZW50YCB2YWx1ZSBpZiB0aGUgcHJvdmlkZWQgT3B0aW9uYWwgb2JqZWN0IGRvZXMgbm90IGNvbnRhaW4gYVxuICAgKiB2YWx1ZS5cbiAgICpcbiAgICogVW5saWtlIGBvcmAsIGluIHRoaXMgbWV0aG9kIHRoZSBgcmVwbGFjZW1lbnRgIHZhbHVlIGlzIFwidGh1bmtlZFwiIC0gdGhhdCBpc1xuICAgKiB0byBzYXkgdGhhdCB5b3UgZG9uJ3QgcGFzcyBhIHZhbHVlIHRvIGBvclRodW5rYCwgeW91IHBhc3MgYSBmdW5jdGlvbiB3aGljaFxuICAgKiAoaWYgY2FsbGVkKSB3aWxsICoqcmV0dXJuKiogdGhlIGB2YWx1ZWAgeW91IHdhbnQgdG8gdXNlLlxuICAgKlxuICAgKiBVbmxpa2UgYGdldE9yVGh1bmtgLCBpbiB0aGlzIG1ldGhvZCB0aGUgYHJlcGxhY2VtZW50YCB2YWx1ZSBpcyBhbHNvXG4gICAqIGBPcHRpb25hbGAsIG1lYW5pbmcgdGhhdCB0aGlzIG1ldGhvZCB3aWxsIGFsd2F5cyByZXR1cm4gYW4gYE9wdGlvbmFsYC5cbiAgICovXG4gIHB1YmxpYyBvclRodW5rPFUgPSBUPih0aHVuazogKCkgPT4gT3B0aW9uYWw8VT4pOiBPcHRpb25hbDxUIHwgVT4ge1xuICAgIHJldHVybiB0aGlzLnRhZyA/IHRoaXMgOiB0aHVuaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdmFsdWUgb3V0IG9mIHRoZSBpbnNpZGUgb2YgdGhlIGBPcHRpb25hbGAgb2JqZWN0LCB0aHJvd2luZyBhblxuICAgKiBleGNlcHRpb24gaWYgdGhlIHByb3ZpZGVkIGBPcHRpb25hbGAgb2JqZWN0IGRvZXMgbm90IGNvbnRhaW4gYSB2YWx1ZS5cbiAgICpcbiAgICogV0FSTklORzpcbiAgICogWW91IHNob3VsZCBvbmx5IGJlIHVzaW5nIHRoaXMgZnVuY3Rpb24gaWYgeW91IGtub3cgdGhhdCB0aGUgYE9wdGlvbmFsYFxuICAgKiBvYmplY3QgKippcyBub3QqKiBlbXB0eSAob3RoZXJ3aXNlIHlvdSdyZSB0aHJvd2luZyBleGNlcHRpb25zIGluIHByb2R1Y3Rpb25cbiAgICogY29kZSwgd2hpY2ggaXMgYmFkKS5cbiAgICpcbiAgICogSW4gdGVzdHMgdGhpcyBpcyBtb3JlIGFjY2VwdGFibGUuXG4gICAqXG4gICAqIFByZWZlciBvdGhlciBtZXRob2RzIHRvIHRoaXMsIHN1Y2ggYXMgYC5lYWNoYC5cbiAgICovXG4gIHB1YmxpYyBnZXRPckRpZShtZXNzYWdlPzogc3RyaW5nKTogVCB7XG4gICAgaWYgKCF0aGlzLnRhZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UgPz8gJ0NhbGxlZCBnZXRPckRpZSBvbiBOb25lJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlIGFzIFQ7XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tIEludGVyb3Agd2l0aCBudWxsIGFuZCB1bmRlZmluZWQgLS0tXG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gYE9wdGlvbmFsYCB2YWx1ZSBmcm9tIGEgbnVsbGFibGUgKG9yIHVuZGVmaW5lZC1hYmxlKSBpbnB1dC5cbiAgICogTnVsbCwgb3IgdW5kZWZpbmVkLCBpcyBjb252ZXJ0ZWQgdG8gYE5vbmVgLCBhbmQgYW55dGhpbmcgZWxzZSBpcyBjb252ZXJ0ZWRcbiAgICogdG8gYFNvbWVgLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBmcm9tPFQ+KHRoaXM6IHZvaWQsIHZhbHVlOiBUIHwgbnVsbCB8IHVuZGVmaW5lZCk6IE9wdGlvbmFsPE5vbk51bGxhYmxlPFQ+PiB7XG4gICAgcmV0dXJuIFR5cGUuaXNOb25OdWxsYWJsZSh2YWx1ZSkgPyBPcHRpb25hbC5zb21lKHZhbHVlKSA6IE9wdGlvbmFsLm5vbmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhbiBgT3B0aW9uYWxgIHRvIGEgbnVsbGFibGUgdHlwZSwgYnkgZ2V0dGluZyB0aGUgdmFsdWUgaWYgaXRcbiAgICogZXhpc3RzLCBvciByZXR1cm5pbmcgYG51bGxgIGlmIGl0IGRvZXMgbm90LlxuICAgKi9cbiAgcHVibGljIGdldE9yTnVsbCgpOiBUIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMudGFnID8gdGhpcy52YWx1ZSBhcyBUIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhbiBgT3B0aW9uYWxgIHRvIGFuIHVuZGVmaW5lZC1hYmxlIHR5cGUsIGJ5IGdldHRpbmcgdGhlIHZhbHVlIGlmXG4gICAqIGl0IGV4aXN0cywgb3IgcmV0dXJuaW5nIGB1bmRlZmluZWRgIGlmIGl0IGRvZXMgbm90LlxuICAgKi9cbiAgcHVibGljIGdldE9yVW5kZWZpbmVkKCk6IFQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG5cbiAgLy8gLS0tIFV0aWxpdGllcyAtLS1cblxuICAvKipcbiAgICogSWYgdGhlIGBPcHRpb25hbGAgY29udGFpbnMgYSB2YWx1ZSwgcGVyZm9ybSBhbiBhY3Rpb24gb24gdGhhdCB2YWx1ZS5cbiAgICogVW5saWtlIHRoZSByZXN0IG9mIHRoZSBtZXRob2RzIG9uIHRoaXMgdHlwZSwgYC5lYWNoYCBoYXMgc2lkZS1lZmZlY3RzLiBJZlxuICAgKiB5b3Ugd2FudCB0byB0cmFuc2Zvcm0gYW4gYE9wdGlvbmFsPFQ+YCAqKmludG8qKiBzb21ldGhpbmcsIHRoZW4gdGhpcyBpcyBub3RcbiAgICogdGhlIG1ldGhvZCBmb3IgeW91LiBJZiB5b3Ugd2FudCB0byB1c2UgYW4gYE9wdGlvbmFsPFQ+YCB0byAqKmRvKipcbiAgICogc29tZXRoaW5nLCB0aGVuIHRoaXMgaXMgdGhlIG1ldGhvZCBmb3IgeW91IC0gcHJvdmlkZWQgeW91J3JlIG9rYXkgd2l0aCBub3RcbiAgICogZG9pbmcgYW55dGhpbmcgaW4gdGhlIGNhc2Ugd2hlcmUgdGhlIGBPcHRpb25hbGAgZG9lc24ndCBoYXZlIGEgdmFsdWUgaW5zaWRlXG4gICAqIGl0LiBJZiB5b3UncmUgbm90IHN1cmUgd2hldGhlciB5b3VyIHVzZS1jYXNlIGZpdHMgaW50byB0cmFuc2Zvcm1pbmdcbiAgICogKippbnRvKiogc29tZXRoaW5nIG9yICoqZG9pbmcqKiBzb21ldGhpbmcsIGNoZWNrIHdoZXRoZXIgaXQgaGFzIGEgcmV0dXJuXG4gICAqIHZhbHVlLiBJZiBpdCBkb2VzLCB5b3Ugc2hvdWxkIGJlIHBlcmZvcm1pbmcgYSB0cmFuc2Zvcm0uXG4gICAqL1xuICBwdWJsaWMgZWFjaCh3b3JrZXI6ICh2YWx1ZTogVCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnRhZykge1xuICAgICAgd29ya2VyKHRoaXMudmFsdWUgYXMgVCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFR1cm4gdGhlIGBPcHRpb25hbGAgb2JqZWN0IGludG8gYW4gYXJyYXkgdGhhdCBjb250YWlucyBhbGwgb2YgdGhlIHZhbHVlc1xuICAgKiBzdG9yZWQgaW5zaWRlIHRoZSBgT3B0aW9uYWxgLiBJbiBwcmFjdGljZSwgdGhpcyBtZWFucyB0aGUgb3V0cHV0IHdpbGwgaGF2ZVxuICAgKiBlaXRoZXIgMCBvciAxIGVsZW1lbnRzLlxuICAgKi9cbiAgcHVibGljIHRvQXJyYXkoKTogVFtdIHtcbiAgICByZXR1cm4gdGhpcy50YWcgPyBbIHRoaXMudmFsdWUgYXMgVCBdIDogW107XG4gIH1cblxuICAvKipcbiAgICogVHVybiB0aGUgYE9wdGlvbmFsYCBvYmplY3QgaW50byBhIHN0cmluZyBmb3IgZGVidWdnaW5nIG9yIHByaW50aW5nLiBOb3RcbiAgICogcmVjb21tZW5kZWQgZm9yIHByb2R1Y3Rpb24gY29kZSwgYnV0IGdvb2QgZm9yIGRlYnVnZ2luZy4gQWxzbyBub3RlIHRoYXRcbiAgICogdGhlc2UgZGF5cyBhbiBgT3B0aW9uYWxgIG9iamVjdCBjYW4gYmUgbG9nZ2VkIHRvIHRoZSBjb25zb2xlIGRpcmVjdGx5LCBhbmRcbiAgICogaXRzIGlubmVyIHZhbHVlIChpZiBpdCBleGlzdHMpIHdpbGwgYmUgdmlzaWJsZS5cbiAgICovXG4gIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnRhZyA/IGBzb21lKCR7dGhpcy52YWx1ZX0pYCA6ICdub25lKCknO1xuICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8td3JhcHBlci1vYmplY3QtdHlwZXMgKi9cbmNvbnN0IGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuXG5pbnRlcmZhY2UgQ29uc3RydWN0b3I8VCBleHRlbmRzIE9iamVjdD4ge1xuICByZWFkb25seSBwcm90b3R5cGU6IFQ7XG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbn1cblxuY29uc3QgaGFzUHJvdG8gPSA8VCBleHRlbmRzIE9iamVjdD4odjogT2JqZWN0LCBjb25zdHJ1Y3RvcjogQ29uc3RydWN0b3I8VD4sIHByZWRpY2F0ZTogKHY6IE9iamVjdCwgcHJvdG90eXBlOiBUKSA9PiBib29sZWFuKTogYm9vbGVhbiA9PiB7XG4gIGlmIChwcmVkaWNhdGUodiwgY29uc3RydWN0b3IucHJvdG90eXBlKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIC8vIFN0cmluZy1iYXNlZCBmYWxsYmFjayB0aW1lXG4gICAgcmV0dXJuIHYuY29uc3RydWN0b3I/Lm5hbWUgPT09IGNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cbn07XG5cbmNvbnN0IHR5cGVPZiA9ICh4OiBhbnkpOiBzdHJpbmcgPT4ge1xuICBjb25zdCB0ID0gdHlwZW9mIHg7XG4gIGlmICh4ID09PSBudWxsKSB7XG4gICAgcmV0dXJuICdudWxsJztcbiAgfSBlbHNlIGlmICh0ID09PSAnb2JqZWN0JyAmJiBBcnJheS5pc0FycmF5KHgpKSB7XG4gICAgcmV0dXJuICdhcnJheSc7XG4gIH0gZWxzZSBpZiAodCA9PT0gJ29iamVjdCcgJiYgaGFzUHJvdG8oeCwgU3RyaW5nLCAobywgcHJvdG8pID0+IHByb3RvLmlzUHJvdG90eXBlT2YobykpKSB7XG4gICAgcmV0dXJuICdzdHJpbmcnO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0O1xuICB9XG59O1xuXG5jb25zdCBpc1R5cGUgPSA8WW9sbz4odHlwZTogc3RyaW5nKSA9PiAodmFsdWU6IGFueSk6IHZhbHVlIGlzIFlvbG8gPT5cbiAgdHlwZU9mKHZhbHVlKSA9PT0gdHlwZTtcblxuY29uc3QgaXNTaW1wbGVUeXBlID0gPFlvbG8+KHR5cGU6IHN0cmluZykgPT4gKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBZb2xvID0+XG4gIHR5cGVvZiB2YWx1ZSA9PT0gdHlwZTtcblxuY29uc3QgZXEgPSA8VD4gKHQ6IFQpID0+IChhOiBhbnkpOiBhIGlzIFQgPT5cbiAgdCA9PT0gYTtcblxuZXhwb3J0IGNvbnN0IGlzID0gPEUgZXh0ZW5kcyBPYmplY3Q+KHZhbHVlOiBhbnksIGNvbnN0cnVjdG9yOiBDb25zdHJ1Y3RvcjxFPik6IHZhbHVlIGlzIEUgPT5cbiAgaXNPYmplY3QodmFsdWUpICYmIGhhc1Byb3RvPEU+KHZhbHVlLCBjb25zdHJ1Y3RvciwgKG8sIHByb3RvKSA9PiBnZXRQcm90b3R5cGVPZihvKSA9PT0gcHJvdG8pO1xuXG5leHBvcnQgY29uc3QgaXNTdHJpbmc6ICh2YWx1ZTogYW55KSA9PiB2YWx1ZSBpcyBzdHJpbmcgPVxuICBpc1R5cGUoJ3N0cmluZycpO1xuXG5leHBvcnQgY29uc3QgaXNPYmplY3Q6ICh2YWx1ZTogYW55KSA9PiB2YWx1ZSBpcyBPYmplY3QgPVxuICBpc1R5cGUoJ29iamVjdCcpO1xuXG5leHBvcnQgY29uc3QgaXNQbGFpbk9iamVjdCA9ICh2YWx1ZTogdW5rbm93bik6IHZhbHVlIGlzIE9iamVjdCA9PlxuICBpcyh2YWx1ZSwgT2JqZWN0KTtcblxuZXhwb3J0IGNvbnN0IGlzQXJyYXk6ICh2YWx1ZTogYW55KSA9PiB2YWx1ZSBpcyBBcnJheTx1bmtub3duPiA9XG4gIGlzVHlwZSgnYXJyYXknKTtcblxuZXhwb3J0IGNvbnN0IGlzTnVsbDogKGE6IGFueSkgPT4gYSBpcyBudWxsID1cbiAgZXEobnVsbCk7XG5cbmV4cG9ydCBjb25zdCBpc0Jvb2xlYW46ICh2YWx1ZTogYW55KSA9PiB2YWx1ZSBpcyBib29sZWFuID1cbiAgaXNTaW1wbGVUeXBlPGJvb2xlYW4+KCdib29sZWFuJyk7XG5cbmV4cG9ydCBjb25zdCBpc1VuZGVmaW5lZDogKGE6IGFueSkgPT4gYSBpcyB1bmRlZmluZWQgPVxuICBlcSh1bmRlZmluZWQpO1xuXG5leHBvcnQgY29uc3QgaXNOdWxsYWJsZSA9IChhOiBhbnkpOiBhIGlzIG51bGwgfCB1bmRlZmluZWQgPT5cbiAgYSA9PT0gbnVsbCB8fCBhID09PSB1bmRlZmluZWQ7XG5cbmV4cG9ydCBjb25zdCBpc05vbk51bGxhYmxlID0gPEE+IChhOiBBIHwgbnVsbCB8IHVuZGVmaW5lZCk6IGEgaXMgTm9uTnVsbGFibGU8QT4gPT5cbiAgIWlzTnVsbGFibGUoYSk7XG5cbmV4cG9ydCBjb25zdCBpc0Z1bmN0aW9uOiAodmFsdWU6IGFueSkgPT4gdmFsdWUgaXMgRnVuY3Rpb24gPVxuICBpc1NpbXBsZVR5cGU8RnVuY3Rpb24+KCdmdW5jdGlvbicpO1xuXG5leHBvcnQgY29uc3QgaXNOdW1iZXI6ICh2YWx1ZTogYW55KSA9PiB2YWx1ZSBpcyBudW1iZXIgPVxuICBpc1NpbXBsZVR5cGU8bnVtYmVyPignbnVtYmVyJyk7XG5cbmV4cG9ydCBjb25zdCBpc0FycmF5T2YgPSA8RT4odmFsdWU6IGFueSwgcHJlZDogKHg6IGFueSkgPT4geCBpcyBFKTogdmFsdWUgaXMgQXJyYXk8RT4gPT4ge1xuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdmFsdWUubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIGlmICghKHByZWQodmFsdWVbaV0pKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc1Byb21pc2VMaWtlID0gKHg6IGFueSk6IHggaXMgUHJvbWlzZTx1bmtub3duPiA9PlxuICBpc09iamVjdCh4KVxuICAmJiBpc0Z1bmN0aW9uKHgudGhlbilcbiAgJiYgaXNGdW5jdGlvbih4LmNhdGNoKTtcbiIsImltcG9ydCBQbHVnaW5NYW5hZ2VyIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvUGx1Z2luTWFuYWdlcic7XG5cbmltcG9ydCAqIGFzIENvbW1hbmRzIGZyb20gJy4vYXBpL0NvbW1hbmRzJztcbmltcG9ydCAqIGFzIE9wdGlvbnMgZnJvbSAnLi9hcGkvT3B0aW9ucyc7XG5pbXBvcnQgKiBhcyBCdXR0b25zIGZyb20gJy4vdWkvQnV0dG9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpOiB2b2lkID0+IHtcbiAgUGx1Z2luTWFuYWdlci5hZGQoJ2Fkdmxpc3QnLCAoZWRpdG9yKSA9PiB7XG4gICAgaWYgKGVkaXRvci5oYXNQbHVnaW4oJ2xpc3RzJykpIHtcbiAgICAgIE9wdGlvbnMucmVnaXN0ZXIoZWRpdG9yKTtcbiAgICAgIEJ1dHRvbnMucmVnaXN0ZXIoZWRpdG9yKTtcbiAgICAgIENvbW1hbmRzLnJlZ2lzdGVyKGVkaXRvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLmVycm9yKCdQbGVhc2UgdXNlIHRoZSBMaXN0cyBwbHVnaW4gdG9nZXRoZXIgd2l0aCB0aGUgTGlzdCBTdHlsZXMgcGx1Z2luLicpO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiaW1wb3J0IHR5cGUgRWRpdG9yIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvRWRpdG9yJztcblxuaW1wb3J0ICogYXMgQWN0aW9ucyBmcm9tICcuLi9jb3JlL0FjdGlvbnMnO1xuXG5jb25zdCByZWdpc3RlciA9IChlZGl0b3I6IEVkaXRvcik6IHZvaWQgPT4ge1xuICBlZGl0b3IuYWRkQ29tbWFuZCgnQXBwbHlVbm9yZGVyZWRMaXN0U3R5bGUnLCAodWksIHZhbHVlKSA9PiB7XG4gICAgQWN0aW9ucy5hcHBseUxpc3RGb3JtYXQoZWRpdG9yLCAnVUwnLCB2YWx1ZVsnbGlzdC1zdHlsZS10eXBlJ10pO1xuICB9KTtcblxuICBlZGl0b3IuYWRkQ29tbWFuZCgnQXBwbHlPcmRlcmVkTGlzdFN0eWxlJywgKHVpLCB2YWx1ZSkgPT4ge1xuICAgIEFjdGlvbnMuYXBwbHlMaXN0Rm9ybWF0KGVkaXRvciwgJ09MJywgdmFsdWVbJ2xpc3Qtc3R5bGUtdHlwZSddKTtcbiAgfSk7XG59O1xuXG5leHBvcnQge1xuICByZWdpc3RlclxufTtcbiIsImltcG9ydCB0eXBlIEVkaXRvciBmcm9tICd0aW55bWNlL2NvcmUvYXBpL0VkaXRvcic7XG5pbXBvcnQgdHlwZSB7IEVkaXRvck9wdGlvbnMgfSBmcm9tICd0aW55bWNlL2NvcmUvYXBpL09wdGlvblR5cGVzJztcblxuY29uc3Qgb3B0aW9uOiB7XG4gIDxLIGV4dGVuZHMga2V5b2YgRWRpdG9yT3B0aW9ucz4obmFtZTogSyk6IChlZGl0b3I6IEVkaXRvcikgPT4gRWRpdG9yT3B0aW9uc1tLXTtcbiAgPFQ+KG5hbWU6IHN0cmluZyk6IChlZGl0b3I6IEVkaXRvcikgPT4gVDtcbn0gPSAobmFtZTogc3RyaW5nKSA9PiAoZWRpdG9yOiBFZGl0b3IpID0+XG4gIGVkaXRvci5vcHRpb25zLmdldChuYW1lKTtcblxuY29uc3QgcmVnaXN0ZXIgPSAoZWRpdG9yOiBFZGl0b3IpOiB2b2lkID0+IHtcbiAgY29uc3QgcmVnaXN0ZXJPcHRpb24gPSBlZGl0b3Iub3B0aW9ucy5yZWdpc3RlcjtcblxuICByZWdpc3Rlck9wdGlvbignYWR2bGlzdF9udW1iZXJfc3R5bGVzJywge1xuICAgIHByb2Nlc3NvcjogJ3N0cmluZ1tdJyxcbiAgICBkZWZhdWx0OiAnZGVmYXVsdCxsb3dlci1hbHBoYSxsb3dlci1ncmVlayxsb3dlci1yb21hbix1cHBlci1hbHBoYSx1cHBlci1yb21hbicuc3BsaXQoJywnKVxuICB9KTtcblxuICByZWdpc3Rlck9wdGlvbignYWR2bGlzdF9idWxsZXRfc3R5bGVzJywge1xuICAgIHByb2Nlc3NvcjogJ3N0cmluZ1tdJyxcbiAgICBkZWZhdWx0OiAnZGVmYXVsdCxkaXNjLGNpcmNsZSxzcXVhcmUnLnNwbGl0KCcsJylcbiAgfSk7XG59O1xuXG5jb25zdCBnZXROdW1iZXJTdHlsZXMgPSBvcHRpb248c3RyaW5nW10+KCdhZHZsaXN0X251bWJlcl9zdHlsZXMnKTtcbmNvbnN0IGdldEJ1bGxldFN0eWxlcyA9IG9wdGlvbjxzdHJpbmdbXT4oJ2Fkdmxpc3RfYnVsbGV0X3N0eWxlcycpO1xuXG5leHBvcnQge1xuICByZWdpc3RlcixcbiAgZ2V0TnVtYmVyU3R5bGVzLFxuICBnZXRCdWxsZXRTdHlsZXNcbn07XG4iLCJpbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuXG5jb25zdCBhcHBseUxpc3RGb3JtYXQgPSAoZWRpdG9yOiBFZGl0b3IsIGxpc3ROYW1lOiBzdHJpbmcsIHN0eWxlVmFsdWU6IGZhbHNlIHwgc3RyaW5nKTogdm9pZCA9PiB7XG4gIGNvbnN0IGNtZCA9IGxpc3ROYW1lID09PSAnVUwnID8gJ0luc2VydFVub3JkZXJlZExpc3QnIDogJ0luc2VydE9yZGVyZWRMaXN0JztcbiAgZWRpdG9yLmV4ZWNDb21tYW5kKGNtZCwgZmFsc2UsIHN0eWxlVmFsdWUgPT09IGZhbHNlID8gbnVsbCA6IHsgJ2xpc3Qtc3R5bGUtdHlwZSc6IHN0eWxlVmFsdWUgfSk7XG59O1xuXG5leHBvcnQge1xuICBhcHBseUxpc3RGb3JtYXRcbn07XG4iLCJpbXBvcnQgeyBBcnIsIE9wdGlvbmFsLCBUeXBlIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0IHR5cGUgRWRpdG9yIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvRWRpdG9yJztcbmltcG9ydCB0eXBlIHsgTm9kZUNoYW5nZUV2ZW50IH0gZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FdmVudFR5cGVzJztcblxuY29uc3QgaXNDdXN0b21MaXN0ID0gKGxpc3Q6IEhUTUxFbGVtZW50KTogYm9vbGVhbiA9PlxuICAvXFxidG94XFwtLy50ZXN0KGxpc3QuY2xhc3NOYW1lKTtcblxuY29uc3QgaXNDaGlsZE9mQm9keSA9IChlZGl0b3I6IEVkaXRvciwgZWxtOiBOb2RlKTogYm9vbGVhbiA9PiB7XG4gIHJldHVybiBlZGl0b3IuZG9tLmlzQ2hpbGRPZihlbG0sIGVkaXRvci5nZXRCb2R5KCkpO1xufTtcblxuY29uc3QgbWF0Y2hOb2RlTmFtZXMgPSA8VCBleHRlbmRzIE5vZGUgPSBOb2RlPihyZWdleDogUmVnRXhwKSA9PlxuICAobm9kZTogTm9kZSB8IG51bGwpOiBub2RlIGlzIFQgPT4gVHlwZS5pc05vbk51bGxhYmxlKG5vZGUpICYmIHJlZ2V4LnRlc3Qobm9kZS5ub2RlTmFtZSk7XG5cbmNvbnN0IGlzTGlzdE5vZGUgPSBtYXRjaE5vZGVOYW1lczxIVE1MT0xpc3RFbGVtZW50IHwgSFRNTFVMaXN0RWxlbWVudCB8IEhUTUxETGlzdEVsZW1lbnQ+KC9eKE9MfFVMfERMKSQvKTtcblxuY29uc3QgaXNUYWJsZUNlbGxOb2RlID0gbWF0Y2hOb2RlTmFtZXM8SFRNTFRhYmxlSGVhZGVyQ2VsbEVsZW1lbnQgfCBIVE1MVGFibGVDZWxsRWxlbWVudD4oL14oVEh8VEQpJC8pO1xuXG5jb25zdCBpbkxpc3QgPSAoZWRpdG9yOiBFZGl0b3IsIHBhcmVudHM6IE5vZGVbXSwgbm9kZU5hbWU6IHN0cmluZyk6IGJvb2xlYW4gPT5cbiAgQXJyLmZpbmRVbnRpbChwYXJlbnRzLCAocGFyZW50KSA9PiBpc0xpc3ROb2RlKHBhcmVudCkgJiYgIWlzQ3VzdG9tTGlzdChwYXJlbnQpLCBpc1RhYmxlQ2VsbE5vZGUpXG4gICAgLmV4aXN0cygobGlzdCkgPT4gbGlzdC5ub2RlTmFtZSA9PT0gbm9kZU5hbWUgJiYgaXNDaGlsZE9mQm9keShlZGl0b3IsIGxpc3QpKTtcblxuY29uc3QgZ2V0U2VsZWN0ZWRTdHlsZVR5cGUgPSAoZWRpdG9yOiBFZGl0b3IpOiBPcHRpb25hbDxzdHJpbmc+ID0+IHtcbiAgY29uc3QgbGlzdEVsbSA9IGVkaXRvci5kb20uZ2V0UGFyZW50KGVkaXRvci5zZWxlY3Rpb24uZ2V0Tm9kZSgpLCAnb2wsdWwnKTtcbiAgY29uc3Qgc3R5bGUgPSBlZGl0b3IuZG9tLmdldFN0eWxlKGxpc3RFbG0sICdsaXN0U3R5bGVUeXBlJyk7XG4gIHJldHVybiBPcHRpb25hbC5mcm9tKHN0eWxlKTtcbn07XG5cbi8vIExpc3RzL2NvcmUvVXRpbC50cyAtIER1cGxpY2F0ZWQgaW4gTGlzdHMgcGx1Z2luXG5jb25zdCBpc1dpdGhpbk5vbkVkaXRhYmxlID0gKGVkaXRvcjogRWRpdG9yLCBlbGVtZW50OiBFbGVtZW50IHwgbnVsbCk6IGJvb2xlYW4gPT5cbiAgZWxlbWVudCAhPT0gbnVsbCAmJiAhZWRpdG9yLmRvbS5pc0VkaXRhYmxlKGVsZW1lbnQpO1xuXG5jb25zdCBpc1dpdGhpbk5vbkVkaXRhYmxlTGlzdCA9IChlZGl0b3I6IEVkaXRvciwgZWxlbWVudDogRWxlbWVudCB8IG51bGwpOiBib29sZWFuID0+IHtcbiAgY29uc3QgcGFyZW50TGlzdCA9IGVkaXRvci5kb20uZ2V0UGFyZW50KGVsZW1lbnQsICdvbCx1bCxkbCcpO1xuICByZXR1cm4gaXNXaXRoaW5Ob25FZGl0YWJsZShlZGl0b3IsIHBhcmVudExpc3QpIHx8ICFlZGl0b3Iuc2VsZWN0aW9uLmlzRWRpdGFibGUoKTtcbn07XG5cbmNvbnN0IHNldE5vZGVDaGFuZ2VIYW5kbGVyID0gKGVkaXRvcjogRWRpdG9yLCBub2RlQ2hhbmdlSGFuZGxlcjogKGU6IE5vZGVDaGFuZ2VFdmVudCkgPT4gdm9pZCk6ICgpID0+IHZvaWQgPT4ge1xuICBjb25zdCBpbml0aWFsTm9kZSA9IGVkaXRvci5zZWxlY3Rpb24uZ2V0Tm9kZSgpO1xuICAvLyBTZXQgdGhlIGluaXRpYWwgc3RhdGVcbiAgbm9kZUNoYW5nZUhhbmRsZXIoe1xuICAgIHBhcmVudHM6IGVkaXRvci5kb20uZ2V0UGFyZW50cyhpbml0aWFsTm9kZSksXG4gICAgZWxlbWVudDogaW5pdGlhbE5vZGVcbiAgfSk7XG4gIGVkaXRvci5vbignTm9kZUNoYW5nZScsIG5vZGVDaGFuZ2VIYW5kbGVyKTtcbiAgcmV0dXJuICgpID0+IGVkaXRvci5vZmYoJ05vZGVDaGFuZ2UnLCBub2RlQ2hhbmdlSGFuZGxlcik7XG59O1xuXG5leHBvcnQge1xuICBpc1RhYmxlQ2VsbE5vZGUsIC8vIEV4cG9ydGVkIGZvciB0ZXN0aW5nXG4gIGlzTGlzdE5vZGUsIC8vIEV4cG9ydGVkIGZvciB0ZXN0aW5nXG4gIGluTGlzdCxcbiAgZ2V0U2VsZWN0ZWRTdHlsZVR5cGUsXG4gIGlzV2l0aGluTm9uRWRpdGFibGVMaXN0LFxuICBzZXROb2RlQ2hhbmdlSGFuZGxlclxufTtcblxuIiwiaW1wb3J0IHsgQXJyLCBPYmosIFR5cGUgfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5pbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuaW1wb3J0IHR5cGUgeyBOb2RlQ2hhbmdlRXZlbnQgfSBmcm9tICd0aW55bWNlL2NvcmUvYXBpL0V2ZW50VHlwZXMnO1xuaW1wb3J0IHR5cGUgeyBNZW51LCBUb29sYmFyIH0gZnJvbSAndGlueW1jZS9jb3JlL2FwaS91aS9VaSc7XG5pbXBvcnQgVG9vbHMgZnJvbSAndGlueW1jZS9jb3JlL2FwaS91dGlsL1Rvb2xzJztcblxuaW1wb3J0ICogYXMgT3B0aW9ucyBmcm9tICcuLi9hcGkvT3B0aW9ucyc7XG5pbXBvcnQgKiBhcyBBY3Rpb25zIGZyb20gJy4uL2NvcmUvQWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBMaXN0VXRpbHMgZnJvbSAnLi4vY29yZS9MaXN0VXRpbHMnO1xuXG5jb25zdCBlbnVtIExpc3RUeXBlIHtcbiAgT3JkZXJlZExpc3QgPSAnT0wnLFxuICBVbm9yZGVyZWRMaXN0ID0gJ1VMJ1xufVxuXG4vLyA8TGlzdFN0eWxlcz5cbmNvbnN0IHN0eWxlVmFsdWVUb1RleHQgPSAoc3R5bGVWYWx1ZTogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIHN0eWxlVmFsdWUucmVwbGFjZSgvXFwtL2csICcgJykucmVwbGFjZSgvXFxiXFx3L2csIChjaHIpID0+IHtcbiAgICByZXR1cm4gY2hyLnRvVXBwZXJDYXNlKCk7XG4gIH0pO1xufTtcblxuY29uc3Qgbm9ybWFsaXplU3R5bGVWYWx1ZSA9IChzdHlsZVZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpOiBzdHJpbmcgPT5cbiAgVHlwZS5pc051bGxhYmxlKHN0eWxlVmFsdWUpIHx8IHN0eWxlVmFsdWUgPT09ICdkZWZhdWx0JyA/ICcnIDogc3R5bGVWYWx1ZTtcblxuY29uc3QgbWFrZVNldHVwSGFuZGxlciA9IChlZGl0b3I6IEVkaXRvciwgbm9kZU5hbWU6IExpc3RUeXBlKSA9PiAoYXBpOiBUb29sYmFyLlRvb2xiYXJTcGxpdEJ1dHRvbkluc3RhbmNlQXBpIHwgVG9vbGJhci5Ub29sYmFyVG9nZ2xlQnV0dG9uSW5zdGFuY2VBcGkpID0+IHtcbiAgY29uc3QgdXBkYXRlQnV0dG9uU3RhdGUgPSAoZWRpdG9yOiBFZGl0b3IsIHBhcmVudHM6IE5vZGVbXSkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBlZGl0b3Iuc2VsZWN0aW9uLmdldFN0YXJ0KHRydWUpO1xuICAgIGFwaS5zZXRBY3RpdmUoTGlzdFV0aWxzLmluTGlzdChlZGl0b3IsIHBhcmVudHMsIG5vZGVOYW1lKSk7XG4gICAgYXBpLnNldEVuYWJsZWQoIUxpc3RVdGlscy5pc1dpdGhpbk5vbkVkaXRhYmxlTGlzdChlZGl0b3IsIGVsZW1lbnQpKTtcbiAgfTtcbiAgY29uc3Qgbm9kZUNoYW5nZUhhbmRsZXIgPSAoZTogTm9kZUNoYW5nZUV2ZW50KSA9PiB1cGRhdGVCdXR0b25TdGF0ZShlZGl0b3IsIGUucGFyZW50cyk7XG5cbiAgcmV0dXJuIExpc3RVdGlscy5zZXROb2RlQ2hhbmdlSGFuZGxlcihlZGl0b3IsIG5vZGVDaGFuZ2VIYW5kbGVyKTtcbn07XG5cbmNvbnN0IGFkZFNwbGl0QnV0dG9uID0gKGVkaXRvcjogRWRpdG9yLCBpZDogc3RyaW5nLCB0b29sdGlwOiBzdHJpbmcsIGNtZDogc3RyaW5nLCBub2RlTmFtZTogTGlzdFR5cGUsIHN0eWxlczogc3RyaW5nW10pOiB2b2lkID0+IHtcbiAgY29uc3QgbGlzdFN0eWxlVHlwZUFsaWFzZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gICAgJ2xvd2VyLWxhdGluJzogJ2xvd2VyLWFscGhhJyxcbiAgICAndXBwZXItbGF0aW4nOiAndXBwZXItYWxwaGEnLFxuICAgICdsb3dlci1hbHBoYSc6ICdsb3dlci1sYXRpbicsXG4gICAgJ3VwcGVyLWFscGhhJzogJ3VwcGVyLWxhdGluJ1xuICB9O1xuICBjb25zdCBzdHlsZXNDb250YWluc0FsaWFzTWFwID0gT2JqLm1hcChsaXN0U3R5bGVUeXBlQWxpYXNlcywgKGFsaWFzKSA9PiBBcnIuY29udGFpbnMoc3R5bGVzLCBhbGlhcykpO1xuXG4gIGVkaXRvci51aS5yZWdpc3RyeS5hZGRTcGxpdEJ1dHRvbihpZCwge1xuICAgIHRvb2x0aXAsXG4gICAgY2hldnJvblRvb2x0aXA6IHRvb2x0aXAsXG4gICAgaWNvbjogbm9kZU5hbWUgPT09IExpc3RUeXBlLk9yZGVyZWRMaXN0ID8gJ29yZGVyZWQtbGlzdCcgOiAndW5vcmRlcmVkLWxpc3QnLFxuICAgIHByZXNldHM6ICdsaXN0cHJldmlldycsXG4gICAgY29sdW1uczogbm9kZU5hbWUgPT09IExpc3RUeXBlLk9yZGVyZWRMaXN0ID8gMyA6IDQsXG4gICAgZmV0Y2g6IChjYWxsYmFjaykgPT4ge1xuICAgICAgY29uc3QgaXRlbXMgPSBUb29scy5tYXAoc3R5bGVzLCAoc3R5bGVWYWx1ZSk6IE1lbnUuQ2hvaWNlTWVudUl0ZW1TcGVjID0+IHtcbiAgICAgICAgY29uc3QgaWNvblN0eWxlID0gbm9kZU5hbWUgPT09IExpc3RUeXBlLk9yZGVyZWRMaXN0ID8gJ251bScgOiAnYnVsbCc7XG4gICAgICAgIGNvbnN0IGljb25OYW1lID0gc3R5bGVWYWx1ZSA9PT0gJ2RlY2ltYWwnID8gJ2RlZmF1bHQnIDogc3R5bGVWYWx1ZTtcbiAgICAgICAgY29uc3QgaXRlbVZhbHVlID0gbm9ybWFsaXplU3R5bGVWYWx1ZShzdHlsZVZhbHVlKTtcbiAgICAgICAgY29uc3QgZGlzcGxheVRleHQgPSBzdHlsZVZhbHVlVG9UZXh0KHN0eWxlVmFsdWUpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHR5cGU6ICdjaG9pY2VpdGVtJyxcbiAgICAgICAgICB2YWx1ZTogaXRlbVZhbHVlLFxuICAgICAgICAgIGljb246ICdsaXN0LScgKyBpY29uU3R5bGUgKyAnLScgKyBpY29uTmFtZSxcbiAgICAgICAgICB0ZXh0OiBkaXNwbGF5VGV4dFxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICBjYWxsYmFjayhpdGVtcyk7XG4gICAgfSxcbiAgICBvbkFjdGlvbjogKCkgPT4gZWRpdG9yLmV4ZWNDb21tYW5kKGNtZCksXG4gICAgb25JdGVtQWN0aW9uOiAoX3NwbGl0QnV0dG9uQXBpLCB2YWx1ZSkgPT4ge1xuICAgICAgQWN0aW9ucy5hcHBseUxpc3RGb3JtYXQoZWRpdG9yLCBub2RlTmFtZSwgdmFsdWUpO1xuICAgIH0sXG4gICAgc2VsZWN0OiAodmFsdWUpID0+IHtcbiAgICAgIGNvbnN0IGxpc3RTdHlsZVR5cGUgPSBMaXN0VXRpbHMuZ2V0U2VsZWN0ZWRTdHlsZVR5cGUoZWRpdG9yKTtcbiAgICAgIHJldHVybiBsaXN0U3R5bGVUeXBlLmV4aXN0cygobGlzdFN0eWxlKSA9PiB2YWx1ZSA9PT0gbGlzdFN0eWxlIHx8IChsaXN0U3R5bGVUeXBlQWxpYXNlc1tsaXN0U3R5bGVdID09PSB2YWx1ZSAmJiAhc3R5bGVzQ29udGFpbnNBbGlhc01hcFt2YWx1ZV0pKTtcbiAgICB9LFxuICAgIG9uU2V0dXA6IG1ha2VTZXR1cEhhbmRsZXIoZWRpdG9yLCBub2RlTmFtZSlcbiAgfSk7XG59O1xuXG5jb25zdCBhZGRCdXR0b24gPSAoZWRpdG9yOiBFZGl0b3IsIGlkOiBzdHJpbmcsIHRvb2x0aXA6IHN0cmluZywgY21kOiBzdHJpbmcsIG5vZGVOYW1lOiBMaXN0VHlwZSwgc3R5bGVWYWx1ZTogc3RyaW5nKTogdm9pZCA9PiB7XG4gIGVkaXRvci51aS5yZWdpc3RyeS5hZGRUb2dnbGVCdXR0b24oaWQsIHtcbiAgICBhY3RpdmU6IGZhbHNlLFxuICAgIHRvb2x0aXAsXG4gICAgaWNvbjogbm9kZU5hbWUgPT09IExpc3RUeXBlLk9yZGVyZWRMaXN0ID8gJ29yZGVyZWQtbGlzdCcgOiAndW5vcmRlcmVkLWxpc3QnLFxuICAgIG9uU2V0dXA6IG1ha2VTZXR1cEhhbmRsZXIoZWRpdG9yLCBub2RlTmFtZSksXG4gICAgLy8gTmVlZCB0byBtYWtlIHN1cmUgdGhlIGJ1dHRvbiByZW1vdmVzIHJhdGhlciB0aGFuIGFwcGxpZXMgaWYgYSBsaXN0IG9mIHRoZSBzYW1lIHR5cGUgaXMgc2VsZWN0ZWRcbiAgICBvbkFjdGlvbjogKCkgPT4gZWRpdG9yLnF1ZXJ5Q29tbWFuZFN0YXRlKGNtZCkgfHwgc3R5bGVWYWx1ZSA9PT0gJycgPyBlZGl0b3IuZXhlY0NvbW1hbmQoY21kKSA6IEFjdGlvbnMuYXBwbHlMaXN0Rm9ybWF0KGVkaXRvciwgbm9kZU5hbWUsIHN0eWxlVmFsdWUpXG4gIH0pO1xufTtcblxuY29uc3QgYWRkQ29udHJvbCA9IChlZGl0b3I6IEVkaXRvciwgaWQ6IHN0cmluZywgdG9vbHRpcDogc3RyaW5nLCBjbWQ6IHN0cmluZywgbm9kZU5hbWU6IExpc3RUeXBlLCBzdHlsZXM6IHN0cmluZ1tdKTogdm9pZCA9PiB7XG4gIGlmIChzdHlsZXMubGVuZ3RoID4gMSkge1xuICAgIGFkZFNwbGl0QnV0dG9uKGVkaXRvciwgaWQsIHRvb2x0aXAsIGNtZCwgbm9kZU5hbWUsIHN0eWxlcyk7XG4gIH0gZWxzZSB7XG4gICAgYWRkQnV0dG9uKGVkaXRvciwgaWQsIHRvb2x0aXAsIGNtZCwgbm9kZU5hbWUsIG5vcm1hbGl6ZVN0eWxlVmFsdWUoc3R5bGVzWzBdKSk7XG4gIH1cbn07XG5cbmNvbnN0IHJlZ2lzdGVyID0gKGVkaXRvcjogRWRpdG9yKTogdm9pZCA9PiB7XG4gIGFkZENvbnRyb2woZWRpdG9yLCAnbnVtbGlzdCcsICdOdW1iZXJlZCBsaXN0JywgJ0luc2VydE9yZGVyZWRMaXN0JywgTGlzdFR5cGUuT3JkZXJlZExpc3QsIE9wdGlvbnMuZ2V0TnVtYmVyU3R5bGVzKGVkaXRvcikpO1xuICBhZGRDb250cm9sKGVkaXRvciwgJ2J1bGxpc3QnLCAnQnVsbGV0IGxpc3QnLCAnSW5zZXJ0VW5vcmRlcmVkTGlzdCcsIExpc3RUeXBlLlVub3JkZXJlZExpc3QsIE9wdGlvbnMuZ2V0QnVsbGV0U3R5bGVzKGVkaXRvcikpO1xufTtcblxuZXhwb3J0IHtcbiAgcmVnaXN0ZXJcbn07XG4iLCJpbXBvcnQgKiBhcyBUeXBlIGZyb20gJy4uL2NvcmUvVHlwZSc7XG5pbXBvcnQgKiBhcyBBcnJheVV0aWwgZnJvbSAnLi4vY29yZS9BcnJheVV0aWwnO1xuXG4vKiogQSB3YXkgb2YgY29tcGFyaW5nIHR3byB2YWx1ZXMgb2YgdGhlIHNhbWUgdHlwZSBmb3IgZXF1YWxpdHkuICovXG5leHBvcnQgaW50ZXJmYWNlIEVxPEE+IHtcbiAgZXE6ICh4OiBBLCB5OiBBKSA9PiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgY29udHJhbWFwID0gPEEsIEI+IChlcWE6IEVxPEE+LCBmOiAoYjogQikgPT4gQSk6IEVxPEI+ID0+XG4gIGVxKCh4LCB5KSA9PiBlcWEuZXEoZih4KSwgZih5KSkpO1xuXG5leHBvcnQgY29uc3QgZXEgPSA8QT4gKGY6ICh4OiBBLCB5OiBBKSA9PiBib29sZWFuKTogRXE8QT4gPT5cbiAgKHsgZXE6IGYgfSk7XG5cbmV4cG9ydCBjb25zdCB0cmlwbGVFcTogRXE8YW55PiA9IGVxKCh4LCB5KSA9PiB4ID09PSB5KTtcblxuZXhwb3J0IGNvbnN0IGVxU3RyaW5nOiBFcTxzdHJpbmc+ID0gdHJpcGxlRXE7XG5cbmV4cG9ydCBjb25zdCBlcUJvb2xlYW46IEVxPGJvb2xlYW4+ID0gdHJpcGxlRXE7XG5cbmV4cG9ydCBjb25zdCBlcU51bWJlcjogRXE8bnVtYmVyPiA9IHRyaXBsZUVxO1xuXG5leHBvcnQgY29uc3QgZXFVbmRlZmluZWQ6IEVxPHVuZGVmaW5lZD4gPSB0cmlwbGVFcTtcblxuZXhwb3J0IGNvbnN0IGVxTnVsbDogRXE8bnVsbD4gPSB0cmlwbGVFcTtcblxuZXhwb3J0IGNvbnN0IGVxQXJyYXkgPSA8QT4gKGVxYTogRXE8QT4pOiBFcTxBcnJheUxpa2U8QT4+ID0+IGVxKCh4LCB5KSA9PiB7XG4gIGlmICh4Lmxlbmd0aCAhPT0geS5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgbGVuID0geC5sZW5ndGg7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoIWVxYS5lcSh4W2ldLCB5W2ldKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn0pO1xuXG4vLyBUT0RPOiBNYWtlIGFuIE9yZCB0eXBlY2xhc3NcbmNvbnN0IGVxU29ydGVkQXJyYXkgPSA8QT4oZXFhOiBFcTxBPiwgY29tcGFyZUZuPzogKGE6IEEsIGI6IEEpID0+IG51bWJlcik6IEVxPEFycmF5TGlrZTxBPj4gPT5cbiAgY29udHJhbWFwKGVxQXJyYXkoZXFhKSwgKHhzKSA9PiBBcnJheVV0aWwuc29ydCh4cywgY29tcGFyZUZuKSk7XG5cbmV4cG9ydCBjb25zdCBlcVJlY29yZCA9IDxBPiAoZXFhOiBFcTxBPik6IEVxPFJlY29yZDxzdHJpbmcsIEE+PiA9PiBlcSgoeCwgeSkgPT4ge1xuICBjb25zdCBreCA9IE9iamVjdC5rZXlzKHgpO1xuICBjb25zdCBreSA9IE9iamVjdC5rZXlzKHkpO1xuICBpZiAoIWVxU29ydGVkQXJyYXkoZXFTdHJpbmcpLmVxKGt4LCBreSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgbGVuID0ga3gubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgcSA9IGt4W2ldO1xuICAgIGlmICghZXFhLmVxKHhbcV0sIHlbcV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufSk7XG5cbmV4cG9ydCBjb25zdCBlcUFueTogRXE8YW55PiA9IGVxKCh4LCB5KSA9PiB7XG4gIGlmICh4ID09PSB5KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBjb25zdCB0eCA9IFR5cGUudHlwZU9mKHgpO1xuICBjb25zdCB0eSA9IFR5cGUudHlwZU9mKHkpO1xuICBpZiAodHggIT09IHR5KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKFR5cGUuaXNFcXVhdGFibGVUeXBlKHR4KSkge1xuICAgIHJldHVybiB4ID09PSB5O1xuXG4gIH0gZWxzZSBpZiAodHggPT09ICdhcnJheScpIHtcbiAgICByZXR1cm4gZXFBcnJheShlcUFueSkuZXEoeCwgeSk7XG5cbiAgfSBlbHNlIGlmICh0eCA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gZXFSZWNvcmQoZXFBbnkpLmVxKHgsIHkpO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufSk7XG4iLCJleHBvcnQgY29uc3QgbWFwID0gPEEsIEI+KHhzOiBBcnJheUxpa2U8QT4sIGY6IChhOiBBKSA9PiBCKTogQltdID0+IHtcbiAgY29uc3QgbGVuID0geHMubGVuZ3RoO1xuICBjb25zdCByID0gbmV3IEFycmF5KGxlbik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgcltpXSA9IGYoeCk7XG4gIH1cbiAgcmV0dXJuIHI7XG59O1xuXG4vKiogbWFwIGEgZnVuY3Rpb24gb3ZlciBhbiBhcnJheSwgdGhlbiBtYXAgYW5vdGhlciBmdW5jdGlvbiBvdmVyIGV2ZXJ5IGl0ZW0gZXhjZXB0IHRoZSBsYXN0ICovXG5leHBvcnQgY29uc3QgbWFwRGVsaW1pdCA9IDxBLCBCPiAoeHM6IEFycmF5TGlrZTxBPiwgZjogKGE6IEEpID0+IEIsIGRlbGltaXQ6IChiOiBCKSA9PiBCKTogQltdID0+IHtcbiAgY29uc3QgbGVuID0geHMubGVuZ3RoO1xuICBjb25zdCByID0gbmV3IEFycmF5KGxlbik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuIC0gMTsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIHJbaV0gPSBkZWxpbWl0KGYoeCkpO1xuICB9XG4gIGlmIChsZW4gPiAwKSB7XG4gICAgcltsZW4gLSAxXSA9IChmKHhzW2xlbiAtIDFdKSk7XG4gIH1cblxuICByZXR1cm4gcjtcbn07XG5cbmV4cG9ydCBjb25zdCBzb3J0ID0gPEE+ICh4czogQXJyYXlMaWtlPEE+LCBjb21wYXJlRm4/OiAoYTogQSwgYjogQSkgPT4gbnVtYmVyKTogQVtdID0+IHtcbiAgY29uc3QgY2xvbmU6IEFbXSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHhzKTtcbiAgcmV0dXJuIGNsb25lLnNvcnQoY29tcGFyZUZuKTtcbn07XG4iLCJleHBvcnQgY29uc3QgdHlwZU9mID0gKHg6IGFueSkgPT4ge1xuICBpZiAoeCA9PT0gbnVsbCkge1xuICAgIHJldHVybiAnbnVsbCc7XG4gIH1cbiAgaWYgKHggPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAndW5kZWZpbmVkJztcbiAgfVxuICBjb25zdCB0ID0gdHlwZW9mIHg7XG4gIGlmICh0ID09PSAnb2JqZWN0JyAmJiAoQXJyYXkucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoeCkgfHwgeC5jb25zdHJ1Y3RvciAmJiB4LmNvbnN0cnVjdG9yLm5hbWUgPT09ICdBcnJheScpKSB7XG4gICAgcmV0dXJuICdhcnJheSc7XG4gIH1cbiAgaWYgKHQgPT09ICdvYmplY3QnICYmIChTdHJpbmcucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoeCkgfHwgeC5jb25zdHJ1Y3RvciAmJiB4LmNvbnN0cnVjdG9yLm5hbWUgPT09ICdTdHJpbmcnKSkge1xuICAgIHJldHVybiAnc3RyaW5nJztcbiAgfVxuICByZXR1cm4gdDtcbn07XG5cbmNvbnN0IGlzVHlwZSA9IDxUPih0eXBlOiBzdHJpbmcpID0+ICh2YWx1ZTogYW55KTogdmFsdWUgaXMgVCA9PiB0eXBlT2YodmFsdWUpID09PSB0eXBlO1xuXG5leHBvcnQgY29uc3QgaXNTdHJpbmcgPSBpc1R5cGU8c3RyaW5nPignc3RyaW5nJyk7XG5leHBvcnQgY29uc3QgaXNPYmplY3QgPSBpc1R5cGU8T2JqZWN0Pignb2JqZWN0Jyk7XG5leHBvcnQgY29uc3QgaXNBcnJheSA9IGlzVHlwZTxBcnJheTx1bmtub3duPj4oJ2FycmF5Jyk7XG5leHBvcnQgY29uc3QgaXNOdWxsID0gaXNUeXBlPG51bGw+KCdudWxsJyk7XG5leHBvcnQgY29uc3QgaXNCb29sZWFuID0gaXNUeXBlPGJvb2xlYW4+KCdib29sZWFuJyk7XG5leHBvcnQgY29uc3QgaXNVbmRlZmluZWQgPSBpc1R5cGU8dW5kZWZpbmVkPigndW5kZWZpbmVkJyk7XG5leHBvcnQgY29uc3QgaXNGdW5jdGlvbiA9IGlzVHlwZTxGdW5jdGlvbj4oJ2Z1bmN0aW9uJyk7XG5leHBvcnQgY29uc3QgaXNOdW1iZXIgPSBpc1R5cGU8bnVtYmVyPignbnVtYmVyJyk7XG5cbmV4cG9ydCBjb25zdCBpc0VxdWF0YWJsZVR5cGUgPSAoeDogc3RyaW5nKTogYm9vbGVhbiA9PlxuICBbICd1bmRlZmluZWQnLCAnYm9vbGVhbicsICdudW1iZXInLCAnc3RyaW5nJywgJ2Z1bmN0aW9uJywgJ3htbCcsICdudWxsJyBdLmluZGV4T2YoeCkgIT09IC0xO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuICAgICAgICBpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG4gICAgICAgIH1cbiAgICB9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ2ID0gKCkgPT4gKFwiMS41LjJcIikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ1aWQgPSBcImJ1bmRsZXI9cnNwYWNrQDEuNS4yXCI7XG4iLCJpbXBvcnQgUGx1Z2luIGZyb20gJy4vUGx1Z2luJztcblxuUGx1Z2luKCk7XG5cbi8qKiAqKioqKlxuICogRE8gTk9UIEVYUE9SVCBBTllUSElOR1xuICpcbiAqIElGIFlPVSBETyBST0xMVVAgV0lMTCBMRUFWRSBBIEdMT0JBTCBPTiBUSEUgUEFHRVxuICoqKioqKiovXG4iXSwibmFtZXMiOlsiRXEiLCJGdW4iLCJPcHRpb25hbCIsIlR5cGUiLCJuYXRpdmVTbGljZSIsIkFycmF5IiwibmF0aXZlSW5kZXhPZiIsIm5hdGl2ZVB1c2giLCJyYXdJbmRleE9mIiwidHMiLCJ0IiwiaW5kZXhPZiIsInhzIiwieCIsInIiLCJjb250YWlucyIsImV4aXN0cyIsInByZWQiLCJpIiwibGVuIiwicmFuZ2UiLCJudW0iLCJmIiwiY2h1bmsiLCJhcnJheSIsInNpemUiLCJzIiwibWFwIiwiZWFjaCIsImVhY2hyIiwicGFydGl0aW9uIiwicGFzcyIsImZhaWwiLCJhcnIiLCJmaWx0ZXIiLCJncm91cEJ5Iiwid2FzVHlwZSIsImdyb3VwIiwidHlwZSIsImZvbGRyIiwiYWNjIiwiZm9sZGwiLCJmaW5kVW50aWwiLCJ1bnRpbCIsImZpbmQiLCJmaW5kSW5kZXgiLCJmaW5kTGFzdEluZGV4IiwiZmxhdHRlbiIsIkVycm9yIiwiYmluZCIsImZvcmFsbCIsImVxdWFsIiwiYTEiLCJhMiIsImVxIiwicmV2ZXJzZSIsImRpZmZlcmVuY2UiLCJtYXBUb09iamVjdCIsIlN0cmluZyIsInB1cmUiLCJzb3J0IiwiY29tcGFyYXRvciIsImNvcHkiLCJnZXQiLCJoZWFkIiwibGFzdCIsImZyb20iLCJmaW5kTWFwIiwidW5pcXVlIiwiaXNEdXBsaWNhdGVkIiwibm9vcCIsIm5vYXJnIiwiY29tcG9zZSIsImZhIiwiZmIiLCJhcmdzIiwiY29tcG9zZTEiLCJmYmMiLCJmYWIiLCJhIiwiY29uc3RhbnQiLCJ2YWx1ZSIsImlkZW50aXR5IiwidHJpcGxlRXF1YWxzIiwiYiIsImN1cnJ5IiwiZm4iLCJpbml0aWFsQXJncyIsInJlc3RBcmdzIiwiYWxsIiwibm90IiwiZGllIiwibXNnIiwiYXBwbHkiLCJjYWxsIiwibmV2ZXIiLCJhbHdheXMiLCJ3ZWFrZW4iLCJwaXBlIiwiYWIiLCJiYyIsImNkIiwiZGUiLCJlZiIsImZnIiwiZ2giLCJjIiwiZCIsImUiLCJnIiwia2V5cyIsIk9iamVjdCIsImhhc093blByb3BlcnR5Iiwib2JqIiwicHJvcHMiLCJrIiwidHVwbGVNYXAiLCJ0dXBsZSIsIm9iakFjYyIsImludGVybmFsRmlsdGVyIiwib25UcnVlIiwib25GYWxzZSIsImJpZmlsdGVyIiwibWFwVG9BcnJheSIsIm5hbWUiLCJ2YWx1ZXMiLCJrZXkiLCJoYXMiLCJoYXNOb25OdWxsYWJsZUtleSIsInVuZGVmaW5lZCIsImlzRW1wdHkiLCJ0YWciLCJvbk5vbmUiLCJvblNvbWUiLCJtYXBwZXIiLCJiaW5kZXIiLCJwcmVkaWNhdGUiLCJyZXBsYWNlbWVudCIsInRodW5rIiwibWVzc2FnZSIsIndvcmtlciIsImdldFByb3RvdHlwZU9mIiwiaGFzUHJvdG8iLCJ2IiwiY29uc3RydWN0b3IiLCJ0eXBlT2YiLCJvIiwicHJvdG8iLCJpc1R5cGUiLCJpc1NpbXBsZVR5cGUiLCJpcyIsImlzT2JqZWN0IiwiaXNTdHJpbmciLCJpc1BsYWluT2JqZWN0IiwiaXNBcnJheSIsImlzTnVsbCIsImlzQm9vbGVhbiIsImlzVW5kZWZpbmVkIiwiaXNOdWxsYWJsZSIsImlzTm9uTnVsbGFibGUiLCJpc0Z1bmN0aW9uIiwiaXNOdW1iZXIiLCJpc0FycmF5T2YiLCJpc1Byb21pc2VMaWtlIiwiUGx1Z2luTWFuYWdlciIsIkNvbW1hbmRzIiwiT3B0aW9ucyIsIkJ1dHRvbnMiLCJlZGl0b3IiLCJjb25zb2xlIiwiQWN0aW9ucyIsInJlZ2lzdGVyIiwidWkiLCJvcHRpb24iLCJyZWdpc3Rlck9wdGlvbiIsImdldE51bWJlclN0eWxlcyIsImdldEJ1bGxldFN0eWxlcyIsImFwcGx5TGlzdEZvcm1hdCIsImxpc3ROYW1lIiwic3R5bGVWYWx1ZSIsImNtZCIsIkFyciIsImlzQ3VzdG9tTGlzdCIsImxpc3QiLCJpc0NoaWxkT2ZCb2R5IiwiZWxtIiwibWF0Y2hOb2RlTmFtZXMiLCJyZWdleCIsIm5vZGUiLCJpc0xpc3ROb2RlIiwiaXNUYWJsZUNlbGxOb2RlIiwiaW5MaXN0IiwicGFyZW50cyIsIm5vZGVOYW1lIiwicGFyZW50IiwiZ2V0U2VsZWN0ZWRTdHlsZVR5cGUiLCJsaXN0RWxtIiwic3R5bGUiLCJpc1dpdGhpbk5vbkVkaXRhYmxlIiwiZWxlbWVudCIsImlzV2l0aGluTm9uRWRpdGFibGVMaXN0IiwicGFyZW50TGlzdCIsInNldE5vZGVDaGFuZ2VIYW5kbGVyIiwibm9kZUNoYW5nZUhhbmRsZXIiLCJpbml0aWFsTm9kZSIsIk9iaiIsIlRvb2xzIiwiTGlzdFV0aWxzIiwic3R5bGVWYWx1ZVRvVGV4dCIsImNociIsIm5vcm1hbGl6ZVN0eWxlVmFsdWUiLCJtYWtlU2V0dXBIYW5kbGVyIiwiYXBpIiwidXBkYXRlQnV0dG9uU3RhdGUiLCJhZGRTcGxpdEJ1dHRvbiIsImlkIiwidG9vbHRpcCIsInN0eWxlcyIsImxpc3RTdHlsZVR5cGVBbGlhc2VzIiwic3R5bGVzQ29udGFpbnNBbGlhc01hcCIsImFsaWFzIiwiY2FsbGJhY2siLCJpdGVtcyIsImljb25TdHlsZSIsImljb25OYW1lIiwiaXRlbVZhbHVlIiwiZGlzcGxheVRleHQiLCJfc3BsaXRCdXR0b25BcGkiLCJsaXN0U3R5bGVUeXBlIiwibGlzdFN0eWxlIiwiYWRkQnV0dG9uIiwiYWRkQ29udHJvbCIsIlBsdWdpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLDZEQUFlLE1BQU0sRUFBQztBQUNmOzs7Ozs7Ozs7Ozs7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