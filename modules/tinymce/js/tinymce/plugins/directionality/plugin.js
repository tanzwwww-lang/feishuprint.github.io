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
"../sugar/src/main/ts/ephox/sugar/api/properties/Direction.ts": 
/*!********************************************************************!*\
  !*** ../sugar/src/main/ts/ephox/sugar/api/properties/Direction.ts ***!
  \********************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getDirection: () => (getDirection),
  onDirection: () => (onDirection)
});
/* ESM import */var _Css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Css */ "../sugar/src/main/ts/ephox/sugar/api/properties/Css.ts");

const onDirection = (isLtr, isRtl)=>(element)=>getDirection(element) === 'rtl' ? isRtl : isLtr;
const getDirection = (element)=>_Css__WEBPACK_IMPORTED_MODULE_0__.get(element, 'direction') === 'rtl' ? 'rtl' : 'ltr';



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
"./src/plugins/directionality/main/ts/Plugin.ts": 
/*!******************************************************!*\
  !*** ./src/plugins/directionality/main/ts/Plugin.ts ***!
  \******************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var tinymce_core_api_PluginManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/PluginManager */ "./lib/globals/tinymce/core/api/PluginManager.js");
/* ESM import */var _api_Commands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/Commands */ "./src/plugins/directionality/main/ts/api/Commands.ts");
/* ESM import */var _ui_Buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/Buttons */ "./src/plugins/directionality/main/ts/ui/Buttons.ts");



/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>{
    tinymce_core_api_PluginManager__WEBPACK_IMPORTED_MODULE_0__["default"].add('directionality', (editor)=>{
        _api_Commands__WEBPACK_IMPORTED_MODULE_1__.register(editor);
        _ui_Buttons__WEBPACK_IMPORTED_MODULE_2__.register(editor);
    });
});


}),
"./src/plugins/directionality/main/ts/api/Commands.ts": 
/*!************************************************************!*\
  !*** ./src/plugins/directionality/main/ts/api/Commands.ts ***!
  \************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  register: () => (register)
});
/* ESM import */var _core_Direction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Direction */ "./src/plugins/directionality/main/ts/core/Direction.ts");

const register = (editor)=>{
    editor.addCommand('mceDirectionLTR', ()=>{
        _core_Direction__WEBPACK_IMPORTED_MODULE_0__.setDir(editor, 'ltr');
    });
    editor.addCommand('mceDirectionRTL', ()=>{
        _core_Direction__WEBPACK_IMPORTED_MODULE_0__.setDir(editor, 'rtl');
    });
};



}),
"./src/plugins/directionality/main/ts/core/Direction.ts": 
/*!**************************************************************!*\
  !*** ./src/plugins/directionality/main/ts/core/Direction.ts ***!
  \**************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  setDir: () => (setDir)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Optional.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Arr.ts");
/* ESM import */var _ephox_sugar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ephox/sugar */ "../sugar/src/main/ts/ephox/sugar/api/search/Traverse.ts");
/* ESM import */var _ephox_sugar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ephox/sugar */ "../sugar/src/main/ts/ephox/sugar/api/node/SugarNode.ts");
/* ESM import */var _ephox_sugar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ephox/sugar */ "../sugar/src/main/ts/ephox/sugar/api/search/SelectorFind.ts");
/* ESM import */var _ephox_sugar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ephox/sugar */ "../sugar/src/main/ts/ephox/sugar/api/node/SugarElement.ts");
/* ESM import */var _ephox_sugar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ephox/sugar */ "../sugar/src/main/ts/ephox/sugar/api/properties/Direction.ts");
/* ESM import */var _ephox_sugar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ephox/sugar */ "../sugar/src/main/ts/ephox/sugar/api/properties/Attribute.ts");
/* ESM import */var _ephox_sugar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ephox/sugar */ "../sugar/src/main/ts/ephox/sugar/api/search/SelectorFilter.ts");


const getParentElement = (element)=>_ephox_sugar__WEBPACK_IMPORTED_MODULE_0__.parent(element).filter(_ephox_sugar__WEBPACK_IMPORTED_MODULE_1__.isElement);
// if the block is a list item, we need to get the parent of the list itself
const getNormalizedBlock = (element, isListItem)=>{
    const normalizedElement = isListItem ? _ephox_sugar__WEBPACK_IMPORTED_MODULE_2__.ancestor(element, 'ol,ul') : _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__.Optional.some(element);
    return normalizedElement.getOr(element);
};
const isListItem = _ephox_sugar__WEBPACK_IMPORTED_MODULE_1__.isTag('li');
const setDirOnElements = (dom, blocks, dir)=>{
    _ephox_katamari__WEBPACK_IMPORTED_MODULE_4__.each(blocks, (block)=>{
        const blockElement = _ephox_sugar__WEBPACK_IMPORTED_MODULE_5__.SugarElement.fromDom(block);
        const isBlockElementListItem = isListItem(blockElement);
        const normalizedBlock = getNormalizedBlock(blockElement, isBlockElementListItem);
        const normalizedBlockParent = getParentElement(normalizedBlock);
        normalizedBlockParent.each((parent)=>{
            // TINY-9314: Remove any inline direction style to ensure that it is only set when necessary and that
            // the dir attribute is favored
            dom.setStyle(normalizedBlock.dom, 'direction', null);
            const parentDirection = _ephox_sugar__WEBPACK_IMPORTED_MODULE_6__.getDirection(parent);
            if (parentDirection === dir) {
                _ephox_sugar__WEBPACK_IMPORTED_MODULE_7__.remove(normalizedBlock, 'dir');
            } else {
                _ephox_sugar__WEBPACK_IMPORTED_MODULE_7__.set(normalizedBlock, 'dir', dir);
            }
            // TINY-9314: Set an inline direction style if computed css direction is still not as desired. This can
            // happen when the direction style is derived from a stylesheet.
            if (_ephox_sugar__WEBPACK_IMPORTED_MODULE_6__.getDirection(normalizedBlock) !== dir) {
                dom.setStyle(normalizedBlock.dom, 'direction', dir);
            }
            // Remove dir attr and direction style from list children
            if (isBlockElementListItem) {
                const listItems = _ephox_sugar__WEBPACK_IMPORTED_MODULE_8__.children(normalizedBlock, 'li[dir],li[style]');
                _ephox_katamari__WEBPACK_IMPORTED_MODULE_4__.each(listItems, (listItem)=>{
                    _ephox_sugar__WEBPACK_IMPORTED_MODULE_7__.remove(listItem, 'dir');
                    dom.setStyle(listItem.dom, 'direction', null);
                });
            }
        });
    });
};
const setDir = (editor, dir)=>{
    if (editor.selection.isEditable()) {
        setDirOnElements(editor.dom, editor.selection.getSelectedBlocks(), dir);
        editor.nodeChanged();
    }
};



}),
"./src/plugins/directionality/main/ts/ui/Buttons.ts": 
/*!**********************************************************!*\
  !*** ./src/plugins/directionality/main/ts/ui/Buttons.ts ***!
  \**********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  register: () => (register)
});
/* ESM import */var _ephox_sugar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ephox/sugar */ "../sugar/src/main/ts/ephox/sugar/api/node/SugarElement.ts");
/* ESM import */var _ephox_sugar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ephox/sugar */ "../sugar/src/main/ts/ephox/sugar/api/properties/Direction.ts");

const getNodeChangeHandler = (editor, dir)=>(api)=>{
        const nodeChangeHandler = (e)=>{
            const element = _ephox_sugar__WEBPACK_IMPORTED_MODULE_0__.SugarElement.fromDom(e.element);
            api.setActive(_ephox_sugar__WEBPACK_IMPORTED_MODULE_1__.getDirection(element) === dir);
            api.setEnabled(editor.selection.isEditable());
        };
        editor.on('NodeChange', nodeChangeHandler);
        api.setEnabled(editor.selection.isEditable());
        return ()=>editor.off('NodeChange', nodeChangeHandler);
    };
const register = (editor)=>{
    editor.ui.registry.addToggleButton('ltr', {
        tooltip: 'Left to right',
        icon: 'ltr',
        onAction: ()=>editor.execCommand('mceDirectionLTR'),
        onSetup: getNodeChangeHandler(editor, 'ltr')
    });
    editor.ui.registry.addToggleButton('rtl', {
        tooltip: 'Right to left',
        icon: 'rtl',
        onAction: ()=>editor.execCommand('mceDirectionRTL'),
        onSetup: getNodeChangeHandler(editor, 'rtl')
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

/*!****************************************************!*\
  !*** ./src/plugins/directionality/main/ts/Main.ts ***!
  \****************************************************/
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _Plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Plugin */ "./src/plugins/directionality/main/ts/Plugin.ts");

(0,_Plugin__WEBPACK_IMPORTED_MODULE_0__["default"])(); /** *****
 * DO NOT EXPORT ANYTHING
 *
 * IF YOU DO ROLLUP WILL LEAVE A GLOBAL ON THE PAGE
 *******/ 

})();

})()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdGlueW1jZS9wbHVnaW5zL2RpcmVjdGlvbmFsaXR5L3BsdWdpbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL3RpbnltY2UvLi9saWIvZ2xvYmFscy90aW55bWNlL2NvcmUvYXBpL1BsdWdpbk1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9rYXRhbWFyaS9zcmMvbWFpbi90cy9lcGhveC9rYXRhbWFyaS9hcGkvQXJyLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4va2F0YW1hcmkvc3JjL21haW4vdHMvZXBob3gva2F0YW1hcmkvYXBpL0Z1bi50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL2thdGFtYXJpL3NyYy9tYWluL3RzL2VwaG94L2thdGFtYXJpL2FwaS9HbG9iYWwudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9rYXRhbWFyaS9zcmMvbWFpbi90cy9lcGhveC9rYXRhbWFyaS9hcGkvT2JqLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4va2F0YW1hcmkvc3JjL21haW4vdHMvZXBob3gva2F0YW1hcmkvYXBpL09wdGlvbmFsLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4va2F0YW1hcmkvc3JjL21haW4vdHMvZXBob3gva2F0YW1hcmkvYXBpL09wdGlvbmFscy50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL2thdGFtYXJpL3NyYy9tYWluL3RzL2VwaG94L2thdGFtYXJpL2FwaS9SZXNvbHZlLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4va2F0YW1hcmkvc3JjL21haW4vdHMvZXBob3gva2F0YW1hcmkvYXBpL1N0cmluZ3MudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9rYXRhbWFyaS9zcmMvbWFpbi90cy9lcGhveC9rYXRhbWFyaS9hcGkvVHlwZS50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL2thdGFtYXJpL3NyYy9tYWluL3RzL2VwaG94L2thdGFtYXJpL3N0ci9TdHJBcHBlbmQudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9zYW5kL3NyYy9tYWluL3RzL2VwaG94L3NhbmQvYXBpL1NhbmRIVE1MRWxlbWVudC50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL3NhbmQvc3JjL21haW4vdHMvZXBob3gvc2FuZC91dGlsL0dsb2JhbC50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL3N1Z2FyL3NyYy9tYWluL3RzL2VwaG94L3N1Z2FyL2FsaWVuL1JlY3Vyc2UudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9zdWdhci9zcmMvbWFpbi90cy9lcGhveC9zdWdhci9hcGkvZG9tL0NvbXBhcmUudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9zdWdhci9zcmMvbWFpbi90cy9lcGhveC9zdWdhci9hcGkvbm9kZS9Ob2RlVHlwZXMudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9zdWdhci9zcmMvbWFpbi90cy9lcGhveC9zdWdhci9hcGkvbm9kZS9TdWdhckJvZHkudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9zdWdhci9zcmMvbWFpbi90cy9lcGhveC9zdWdhci9hcGkvbm9kZS9TdWdhckVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9zdWdhci9zcmMvbWFpbi90cy9lcGhveC9zdWdhci9hcGkvbm9kZS9TdWdhckhlYWQudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9zdWdhci9zcmMvbWFpbi90cy9lcGhveC9zdWdhci9hcGkvbm9kZS9TdWdhck5vZGUudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9zdWdhci9zcmMvbWFpbi90cy9lcGhveC9zdWdhci9hcGkvbm9kZS9TdWdhclNoYWRvd0RvbS50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL3N1Z2FyL3NyYy9tYWluL3RzL2VwaG94L3N1Z2FyL2FwaS9wcm9wZXJ0aWVzL0F0dHJpYnV0ZS50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL3N1Z2FyL3NyYy9tYWluL3RzL2VwaG94L3N1Z2FyL2FwaS9wcm9wZXJ0aWVzL0Nzcy50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL3N1Z2FyL3NyYy9tYWluL3RzL2VwaG94L3N1Z2FyL2FwaS9wcm9wZXJ0aWVzL0RpcmVjdGlvbi50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL3N1Z2FyL3NyYy9tYWluL3RzL2VwaG94L3N1Z2FyL2FwaS9zZWFyY2gvUHJlZGljYXRlRmlsdGVyLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4vc3VnYXIvc3JjL21haW4vdHMvZXBob3gvc3VnYXIvYXBpL3NlYXJjaC9QcmVkaWNhdGVGaW5kLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4vc3VnYXIvc3JjL21haW4vdHMvZXBob3gvc3VnYXIvYXBpL3NlYXJjaC9TZWxlY3RvckZpbHRlci50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL3N1Z2FyL3NyYy9tYWluL3RzL2VwaG94L3N1Z2FyL2FwaS9zZWFyY2gvU2VsZWN0b3JGaW5kLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4vc3VnYXIvc3JjL21haW4vdHMvZXBob3gvc3VnYXIvYXBpL3NlYXJjaC9TZWxlY3RvcnMudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9zdWdhci9zcmMvbWFpbi90cy9lcGhveC9zdWdhci9hcGkvc2VhcmNoL1RyYXZlcnNlLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4vc3VnYXIvc3JjL21haW4vdHMvZXBob3gvc3VnYXIvaW1wbC9DbG9zZXN0T3JBbmNlc3Rvci50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL3N1Z2FyL3NyYy9tYWluL3RzL2VwaG94L3N1Z2FyL2ltcGwvU3R5bGUudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL2RpcmVjdGlvbmFsaXR5L21haW4vdHMvUGx1Z2luLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9kaXJlY3Rpb25hbGl0eS9tYWluL3RzL2FwaS9Db21tYW5kcy50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvZGlyZWN0aW9uYWxpdHkvbWFpbi90cy9jb3JlL0RpcmVjdGlvbi50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvZGlyZWN0aW9uYWxpdHkvbWFpbi90cy91aS9CdXR0b25zLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4vLi4vbm9kZV9tb2R1bGVzL0BlcGhveC9kaXNwdXRlL3NyYy9tYWluL3RzL2FwaS9FcS50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uLy4uL25vZGVfbW9kdWxlcy9AZXBob3gvZGlzcHV0ZS9zcmMvbWFpbi90cy9jb3JlL0FycmF5VXRpbC50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uLy4uL25vZGVfbW9kdWxlcy9AZXBob3gvZGlzcHV0ZS9zcmMvbWFpbi90cy9jb3JlL1R5cGUudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lX3Byb3BlcnR5X2dldHRlcnMiLCJ3ZWJwYWNrOi8vdGlueW1jZS93ZWJwYWNrL3J1bnRpbWUvaGFzX293bl9wcm9wZXJ0eSIsIndlYnBhY2s6Ly90aW55bWNlL3dlYnBhY2svcnVudGltZS9tYWtlX25hbWVzcGFjZV9vYmplY3QiLCJ3ZWJwYWNrOi8vdGlueW1jZS93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3ZlcnNpb24iLCJ3ZWJwYWNrOi8vdGlueW1jZS93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3VuaXF1ZV9pZCIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvZGlyZWN0aW9uYWxpdHkvbWFpbi90cy9NYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBnbG9iYWwgPSB0aW55bWNlLnV0aWwuVG9vbHMucmVzb2x2ZSgndGlueW1jZS5QbHVnaW5NYW5hZ2VyJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGdsb2JhbDtcbmV4cG9ydCB2YXIgUGx1Z2luTWFuYWdlciA9IGdsb2JhbDtcbiIsImltcG9ydCB7IEVxIH0gZnJvbSAnQGVwaG94L2Rpc3B1dGUnO1xuXG5pbXBvcnQgKiBhcyBGdW4gZnJvbSAnLi9GdW4nO1xuaW1wb3J0IHsgT3B0aW9uYWwgfSBmcm9tICcuL09wdGlvbmFsJztcbmltcG9ydCAqIGFzIFR5cGUgZnJvbSAnLi9UeXBlJztcblxudHlwZSBBcnJheU1vcnBoaXNtPFQsIFU+ID0gKHg6IFQsIGk6IG51bWJlcikgPT4gVTtcbnR5cGUgQXJyYXlHdWFyZFByZWRpY2F0ZTxULCBVIGV4dGVuZHMgVD4gPSAoeDogVCwgaTogbnVtYmVyKSA9PiB4IGlzIFU7XG50eXBlIEFycmF5UHJlZGljYXRlPFQ+ID0gQXJyYXlNb3JwaGlzbTxULCBib29sZWFuPjtcbnR5cGUgQ29tcGFyYXRvcjxUPiA9IChhOiBULCBiOiBUKSA9PiBudW1iZXI7XG5cbmNvbnN0IG5hdGl2ZVNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuY29uc3QgbmF0aXZlSW5kZXhPZiA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mO1xuY29uc3QgbmF0aXZlUHVzaCA9IEFycmF5LnByb3RvdHlwZS5wdXNoO1xuXG5jb25zdCByYXdJbmRleE9mID0gPFQ+ICh0czogQXJyYXlMaWtlPFQ+LCB0OiBUKTogbnVtYmVyID0+XG4gIG5hdGl2ZUluZGV4T2YuY2FsbCh0cywgdCk7XG5cbmV4cG9ydCBjb25zdCBpbmRleE9mID0gPFQgPSBhbnk+KHhzOiBBcnJheUxpa2U8VD4sIHg6IFQpOiBPcHRpb25hbDxudW1iZXI+ID0+IHtcbiAgLy8gVGhlIHJhd0luZGV4T2YgbWV0aG9kIGRvZXMgbm90IHdyYXAgdXAgaW4gYW4gb3B0aW9uLiBUaGlzIGlzIGZvciBwZXJmb3JtYW5jZSByZWFzb25zLlxuICBjb25zdCByID0gcmF3SW5kZXhPZih4cywgeCk7XG4gIHJldHVybiByID09PSAtMSA/IE9wdGlvbmFsLm5vbmUoKSA6IE9wdGlvbmFsLnNvbWUocik7XG59O1xuXG5leHBvcnQgY29uc3QgY29udGFpbnMgPSA8VD4oeHM6IEFycmF5TGlrZTxUPiwgeDogVCk6IGJvb2xlYW4gPT4gcmF3SW5kZXhPZih4cywgeCkgPiAtMTtcblxuZXhwb3J0IGNvbnN0IGV4aXN0cyA9IDxUID0gYW55Pih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheVByZWRpY2F0ZTxUPik6IGJvb2xlYW4gPT4ge1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0geHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgaWYgKHByZWQoeCwgaSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCBjb25zdCByYW5nZSA9IDxUPihudW06IG51bWJlciwgZjogKGE6IG51bWJlcikgPT4gVCk6IFRbXSA9PiB7XG4gIGNvbnN0IHI6IFRbXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bTsgaSsrKSB7XG4gICAgci5wdXNoKGYoaSkpO1xuICB9XG4gIHJldHVybiByO1xufTtcblxuLy8gSXQncyBhIHRvdGFsIG1pY3JvIG9wdGltaXNhdGlvbiwgYnV0IHRoZXNlIGRvIG1ha2Ugc29tZSBkaWZmZXJlbmNlLlxuLy8gUGFydGljdWxhcmx5IGZvciBicm93c2VycyBvdGhlciB0aGFuIENocm9tZS5cbi8vIC0gbGVuZ3RoIGNhY2hpbmdcbi8vIGh0dHA6Ly9qc3BlcmYuY29tL2Jyb3dzZXItZGlldC1qcXVlcnktZWFjaC12cy1mb3ItbG9vcC82OVxuLy8gLSBub3QgdXNpbmcgcHVzaFxuLy8gaHR0cDovL2pzcGVyZi5jb20vYXJyYXktZGlyZWN0LWFzc2lnbm1lbnQtdnMtcHVzaC8yXG5cbmV4cG9ydCBjb25zdCBjaHVuayA9IDxUPihhcnJheTogQXJyYXlMaWtlPFQ+LCBzaXplOiBudW1iZXIpOiBUW11bXSA9PiB7XG4gIGNvbnN0IHI6IFRbXVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpICs9IHNpemUpIHtcbiAgICBjb25zdCBzOiBUW10gPSBuYXRpdmVTbGljZS5jYWxsKGFycmF5LCBpLCBpICsgc2l6ZSk7XG4gICAgci5wdXNoKHMpO1xuICB9XG4gIHJldHVybiByO1xufTtcblxuZXhwb3J0IGNvbnN0IG1hcCA9IDxUID0gYW55LCBVID0gYW55Pih4czogQXJyYXlMaWtlPFQ+LCBmOiBBcnJheU1vcnBoaXNtPFQsIFU+KTogVVtdID0+IHtcbiAgLy8gcHJlLWFsbG9jYXRpbmcgYXJyYXkgc2l6ZSB3aGVuIGl0J3MgZ3VhcmFudGVlZCB0byBiZSBrbm93blxuICAvLyBodHRwOi8vanNwZXJmLmNvbS9wdXNoLWFsbG9jYXRlZC12cy1keW5hbWljLzIyXG4gIGNvbnN0IGxlbiA9IHhzLmxlbmd0aDtcbiAgY29uc3QgciA9IG5ldyBBcnJheShsZW4pO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIHJbaV0gPSBmKHgsIGkpO1xuICB9XG4gIHJldHVybiByO1xufTtcblxuLy8gVW53b3VuZCBpbXBsZW1lbnRpbmcgb3RoZXIgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGVhY2guXG4vLyBUaGUgY29kZSBzaXplIGlzIHJvdWdobHkgdGhlIHNhbWUsIGFuZCBpdCBzaG91bGQgYWxsb3cgZm9yIGJldHRlciBvcHRpbWlzYXRpb24uXG4vLyBjb25zdCBlYWNoID0gZnVuY3Rpb248VCwgVT4oeHM6IFRbXSwgZjogKHg6IFQsIGk/OiBudW1iZXIsIHhzPzogVFtdKSA9PiB2b2lkKTogdm9pZCB7XG5leHBvcnQgY29uc3QgZWFjaCA9IDxUID0gYW55Pih4czogQXJyYXlMaWtlPFQ+LCBmOiBBcnJheU1vcnBoaXNtPFQsIHZvaWQ+KTogdm9pZCA9PiB7XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICBmKHgsIGkpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZWFjaHIgPSA8VD4oeHM6IEFycmF5TGlrZTxUPiwgZjogQXJyYXlNb3JwaGlzbTxULCB2b2lkPik6IHZvaWQgPT4ge1xuICBmb3IgKGxldCBpID0geHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgZih4LCBpKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHBhcnRpdGlvbiA9IDxUID0gYW55Pih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheVByZWRpY2F0ZTxUPik6IHsgcGFzczogVFtdOyBmYWlsOiBUW10gfSA9PiB7XG4gIGNvbnN0IHBhc3M6IFRbXSA9IFtdO1xuICBjb25zdCBmYWlsOiBUW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHhzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIGNvbnN0IGFyciA9IHByZWQoeCwgaSkgPyBwYXNzIDogZmFpbDtcbiAgICBhcnIucHVzaCh4KTtcbiAgfVxuICByZXR1cm4geyBwYXNzLCBmYWlsIH07XG59O1xuXG5leHBvcnQgY29uc3QgZmlsdGVyOiB7XG4gIDxULCBVIGV4dGVuZHMgVD4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlHdWFyZFByZWRpY2F0ZTxULCBVPik6IFVbXTtcbiAgPFQ+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+KTogVFtdO1xufSA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheVByZWRpY2F0ZTxUPik6IFRbXSA9PiB7XG4gIGNvbnN0IHI6IFRbXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0geHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgaWYgKHByZWQoeCwgaSkpIHtcbiAgICAgIHIucHVzaCh4KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHI7XG59O1xuXG4vKlxuICogR3JvdXBzIGFuIGFycmF5IGludG8gY29udGlndW91cyBhcnJheXMgb2YgbGlrZSBlbGVtZW50cy4gV2hldGhlciBhbiBlbGVtZW50IGlzIGxpa2Ugb3Igbm90IGRlcGVuZHMgb24gZi5cbiAqXG4gKiBmIGlzIGEgZnVuY3Rpb24gdGhhdCBkZXJpdmVzIGEgdmFsdWUgZnJvbSBhbiBlbGVtZW50IC0gZS5nLiB0cnVlIG9yIGZhbHNlLCBvciBhIHN0cmluZy5cbiAqIEVsZW1lbnRzIGFyZSBsaWtlIGlmIHRoaXMgZnVuY3Rpb24gZ2VuZXJhdGVzIHRoZSBzYW1lIHZhbHVlIGZvciB0aGVtIChhY2NvcmRpbmcgdG8gPT09KS5cbiAqXG4gKlxuICogT3JkZXIgb2YgdGhlIGVsZW1lbnRzIGlzIHByZXNlcnZlZC4gQXJyLmZsYXR0ZW4oKSBvbiB0aGUgcmVzdWx0IHdpbGwgcmV0dXJuIHRoZSBvcmlnaW5hbCBsaXN0LCBhcyB3aXRoIEhhc2tlbGwgZ3JvdXBCeSBmdW5jdGlvbi5cbiAqICBGb3IgYSBnb29kIGV4cGxhbmF0aW9uLCBzZWUgdGhlIGdyb3VwIGZ1bmN0aW9uICh3aGljaCBpcyBhIHNwZWNpYWwgY2FzZSBvZiBncm91cEJ5KVxuICogIGh0dHA6Ly9oYWNrYWdlLmhhc2tlbGwub3JnL3BhY2thZ2UvYmFzZS00LjcuMC4wL2RvY3MvRGF0YS1MaXN0Lmh0bWwjdjpncm91cFxuICovXG5leHBvcnQgY29uc3QgZ3JvdXBCeSA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCBmOiAoYTogVCkgPT4gYW55KTogVFtdW10gPT4ge1xuICBpZiAoeHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9IGVsc2Uge1xuICAgIGxldCB3YXNUeXBlID0gZih4c1swXSk7IC8vIGluaXRpYWwgY2FzZSBmb3IgbWF0Y2hpbmdcbiAgICBjb25zdCByOiBUW11bXSA9IFtdO1xuICAgIGxldCBncm91cDogVFtdID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0geHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICAgIGNvbnN0IHR5cGUgPSBmKHgpO1xuICAgICAgaWYgKHR5cGUgIT09IHdhc1R5cGUpIHtcbiAgICAgICAgci5wdXNoKGdyb3VwKTtcbiAgICAgICAgZ3JvdXAgPSBbXTtcbiAgICAgIH1cbiAgICAgIHdhc1R5cGUgPSB0eXBlO1xuICAgICAgZ3JvdXAucHVzaCh4KTtcbiAgICB9XG4gICAgaWYgKGdyb3VwLmxlbmd0aCAhPT0gMCkge1xuICAgICAgci5wdXNoKGdyb3VwKTtcbiAgICB9XG4gICAgcmV0dXJuIHI7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBmb2xkciA9IDxULCBVPih4czogQXJyYXlMaWtlPFQ+LCBmOiAoYWNjOiBVLCB4OiBULCBpOiBudW1iZXIpID0+IFUsIGFjYzogVSk6IFUgPT4ge1xuICBlYWNocih4cywgKHgsIGkpID0+IHtcbiAgICBhY2MgPSBmKGFjYywgeCwgaSk7XG4gIH0pO1xuICByZXR1cm4gYWNjO1xufTtcblxuZXhwb3J0IGNvbnN0IGZvbGRsID0gPFQgPSBhbnksIFUgPSBhbnk+KHhzOiBBcnJheUxpa2U8VD4sIGY6IChhY2M6IFUsIHg6IFQsIGk6IG51bWJlcikgPT4gVSwgYWNjOiBVKTogVSA9PiB7XG4gIGVhY2goeHMsICh4LCBpKSA9PiB7XG4gICAgYWNjID0gZihhY2MsIHgsIGkpO1xuICB9KTtcbiAgcmV0dXJuIGFjYztcbn07XG5cbmV4cG9ydCBjb25zdCBmaW5kVW50aWw6IHtcbiAgPFQsIFUgZXh0ZW5kcyBUPih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheUd1YXJkUHJlZGljYXRlPFQsIFU+LCB1bnRpbDogQXJyYXlQcmVkaWNhdGU8VD4pOiBPcHRpb25hbDxVPjtcbiAgPFQgPSBhbnk+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+LCB1bnRpbDogQXJyYXlQcmVkaWNhdGU8VD4pOiBPcHRpb25hbDxUPjtcbn0gPSA8VD4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlQcmVkaWNhdGU8VD4sIHVudGlsOiBBcnJheVByZWRpY2F0ZTxUPik6IE9wdGlvbmFsPFQ+ID0+IHtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHhzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIGlmIChwcmVkKHgsIGkpKSB7XG4gICAgICByZXR1cm4gT3B0aW9uYWwuc29tZSh4KTtcbiAgICB9IGVsc2UgaWYgKHVudGlsKHgsIGkpKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIE9wdGlvbmFsLm5vbmUoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmaW5kOiB7XG4gIDxULCBVIGV4dGVuZHMgVD4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlHdWFyZFByZWRpY2F0ZTxULCBVPik6IE9wdGlvbmFsPFU+O1xuICA8VCA9IGFueT4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlQcmVkaWNhdGU8VD4pOiBPcHRpb25hbDxUPjtcbn0gPSA8VD4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlQcmVkaWNhdGU8VD4pOiBPcHRpb25hbDxUPiA9PiB7XG4gIHJldHVybiBmaW5kVW50aWwoeHMsIHByZWQsIEZ1bi5uZXZlcik7XG59O1xuXG5leHBvcnQgY29uc3QgZmluZEluZGV4ID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+KTogT3B0aW9uYWw8bnVtYmVyPiA9PiB7XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICBpZiAocHJlZCh4LCBpKSkge1xuICAgICAgcmV0dXJuIE9wdGlvbmFsLnNvbWUoaSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIE9wdGlvbmFsLm5vbmUoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmaW5kTGFzdEluZGV4ID0gPFQ+KGFycjogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheVByZWRpY2F0ZTxUPik6IE9wdGlvbmFsPG51bWJlcj4gPT4ge1xuICBmb3IgKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgaWYgKHByZWQoYXJyW2ldLCBpKSkge1xuICAgICAgcmV0dXJuIE9wdGlvbmFsLnNvbWUoaSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIE9wdGlvbmFsLm5vbmUoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmbGF0dGVuID0gPFQ+KHhzOiBBcnJheUxpa2U8VFtdPik6IFRbXSA9PiB7XG4gIC8vIE5vdGUsIHRoaXMgaXMgcG9zc2libGUgYmVjYXVzZSBwdXNoIHN1cHBvcnRzIG11bHRpcGxlIGFyZ3VtZW50czpcbiAgLy8gaHR0cDovL2pzcGVyZi5jb20vY29uY2F0LXB1c2gvNlxuICAvLyBOb3RlIHRoYXQgaW4gdGhlIHBhc3QsIGNvbmNhdCgpIHdvdWxkIHNpbGVudGx5IHdvcmsgKHZlcnkgc2xvd2x5KSBmb3IgYXJyYXktbGlrZSBvYmplY3RzLlxuICAvLyBXaXRoIHRoaXMgY2hhbmdlIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3IuXG4gIGNvbnN0IHI6IFRbXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0geHMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAvLyBFbnN1cmUgdGhhdCBlYWNoIHZhbHVlIGlzIGFuIGFycmF5IGl0c2VsZlxuICAgIGlmICghVHlwZS5pc0FycmF5KHhzW2ldKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBcnIuZmxhdHRlbiBpdGVtICcgKyBpICsgJyB3YXMgbm90IGFuIGFycmF5LCBpbnB1dDogJyArIHhzKTtcbiAgICB9XG4gICAgbmF0aXZlUHVzaC5hcHBseShyLCB4c1tpXSk7XG4gIH1cbiAgcmV0dXJuIHI7XG59O1xuXG5leHBvcnQgY29uc3QgYmluZCA9IDxUID0gYW55LCBVID0gYW55Pih4czogQXJyYXlMaWtlPFQ+LCBmOiBBcnJheU1vcnBoaXNtPFQsIFVbXT4pOiBVW10gPT5cbiAgZmxhdHRlbihtYXAoeHMsIGYpKTtcblxuZXhwb3J0IGNvbnN0IGZvcmFsbCA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheVByZWRpY2F0ZTxUPik6IGJvb2xlYW4gPT4ge1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0geHMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgaWYgKHByZWQoeCwgaSkgIT09IHRydWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5leHBvcnQgY29uc3QgZXF1YWwgPSA8VD4oYTE6IEFycmF5TGlrZTxUPiwgYTI6IEFycmF5TGlrZTxUPiwgZXE6IEVxLkVxPFQ+ID0gRXEuZXFBbnkpOiBib29sZWFuID0+XG4gIEVxLmVxQXJyYXkoZXEpLmVxKGExLCBhMik7XG5cbmV4cG9ydCBjb25zdCByZXZlcnNlID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4pOiBUW10gPT4ge1xuICBjb25zdCByOiBUW10gPSBuYXRpdmVTbGljZS5jYWxsKHhzLCAwKTtcbiAgci5yZXZlcnNlKCk7XG4gIHJldHVybiByO1xufTtcblxuZXhwb3J0IGNvbnN0IGRpZmZlcmVuY2UgPSA8VD4oYTE6IEFycmF5TGlrZTxUPiwgYTI6IEFycmF5TGlrZTxUPik6IFRbXSA9PiBmaWx0ZXIoYTEsICh4KSA9PiAhY29udGFpbnMoYTIsIHgpKTtcblxuZXhwb3J0IGNvbnN0IG1hcFRvT2JqZWN0OiB7XG4gIDxUIGV4dGVuZHMgc3RyaW5nLCBVPih4czogQXJyYXlMaWtlPFQ+LCBmOiAoeDogVCwgaTogbnVtYmVyKSA9PiBVKTogUmVjb3JkPFQsIFU+O1xuICA8VCwgUiBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4+KHhzOiBBcnJheUxpa2U8VD4sIGY6ICh4OiBULCBpOiBudW1iZXIpID0+IFJba2V5b2YgUl0pOiBSO1xufSA9IDxULCBSIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55Pj4oeHM6IEFycmF5TGlrZTxUPiwgZjogKHg6IFQsIGk6IG51bWJlcikgPT4gUltrZXlvZiBSXSk6IFIgPT4ge1xuICBjb25zdCByID0ge30gYXMgUjtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHhzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIHJbU3RyaW5nKHgpIGFzIGtleW9mIFJdID0gZih4LCBpKTtcbiAgfVxuICByZXR1cm4gcjtcbn07XG5cbmV4cG9ydCBjb25zdCBwdXJlID0gPFQ+KHg6IFQpOiBUW10gPT4gWyB4IF07XG5cbmV4cG9ydCBjb25zdCBzb3J0ID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4sIGNvbXBhcmF0b3I/OiBDb21wYXJhdG9yPFQ+KTogVFtdID0+IHtcbiAgY29uc3QgY29weTogVFtdID0gbmF0aXZlU2xpY2UuY2FsbCh4cywgMCk7XG4gIGNvcHkuc29ydChjb21wYXJhdG9yKTtcbiAgcmV0dXJuIGNvcHk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0ID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4sIGk6IG51bWJlcik6IE9wdGlvbmFsPFQ+ID0+IGkgPj0gMCAmJiBpIDwgeHMubGVuZ3RoID8gT3B0aW9uYWwuc29tZSh4c1tpXSkgOiBPcHRpb25hbC5ub25lKCk7XG5cbmV4cG9ydCBjb25zdCBoZWFkID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4pOiBPcHRpb25hbDxUPiA9PiBnZXQoeHMsIDApO1xuXG5leHBvcnQgY29uc3QgbGFzdCA9IDxUPih4czogQXJyYXlMaWtlPFQ+KTogT3B0aW9uYWw8VD4gPT4gZ2V0KHhzLCB4cy5sZW5ndGggLSAxKTtcblxuZXhwb3J0IGNvbnN0IGZyb206IDxUPih4OiBBcnJheUxpa2U8VD4pID0+IFRbXSA9IFR5cGUuaXNGdW5jdGlvbihBcnJheS5mcm9tKSA/IEFycmF5LmZyb20gOiAoeCkgPT4gbmF0aXZlU2xpY2UuY2FsbCh4KTtcblxuZXhwb3J0IGNvbnN0IGZpbmRNYXAgPSA8QSwgQj4oYXJyOiBBcnJheUxpa2U8QT4sIGY6IChhOiBBLCBpbmRleDogbnVtYmVyKSA9PiBPcHRpb25hbDxCPik6IE9wdGlvbmFsPEI+ID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCByID0gZihhcnJbaV0sIGkpO1xuICAgIGlmIChyLmlzU29tZSgpKSB7XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIE9wdGlvbmFsLm5vbmU8Qj4oKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1bmlxdWUgPSA8VD4oeHM6IEFycmF5TGlrZTxUPiwgY29tcGFyYXRvcj86IChhOiBULCBiOiBUKSA9PiBib29sZWFuKTogVFtdID0+IHtcbiAgY29uc3QgcjogVFtdID0gW107XG5cbiAgY29uc3QgaXNEdXBsaWNhdGVkID0gVHlwZS5pc0Z1bmN0aW9uKGNvbXBhcmF0b3IpID9cbiAgICAoeDogVCkgPT4gZXhpc3RzKHIsIChpKSA9PiBjb21wYXJhdG9yKGksIHgpKSA6XG4gICAgKHg6IFQpID0+IGNvbnRhaW5zKHIsIHgpO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICBpZiAoIWlzRHVwbGljYXRlZCh4KSkge1xuICAgICAgci5wdXNoKHgpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByO1xufTtcbiIsImltcG9ydCAqIGFzIFR5cGUgZnJvbSAnLi9UeXBlJztcblxuY29uc3Qgbm9vcDogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkXG49ICgpID0+IHsgfTtcblxuY29uc3Qgbm9hcmc6IDxUPihmOiAoKSA9PiBUKSA9PiAoLi4uYXJnczogYW55W10pID0+IHZvaWRcbj0gKGYpID0+ICgpID0+IGYoKTtcblxuLyoqIENvbXBvc2UgYSB1bmFyeSBmdW5jdGlvbiB3aXRoIGFuIG4tYXJ5IGZ1bmN0aW9uICovXG5jb25zdCBjb21wb3NlID0gPFQgZXh0ZW5kcyBhbnlbXSwgVSwgVj4oZmE6ICh2OiBVKSA9PiBWLCBmYjogKC4uLng6IFQpID0+IFUpOiAoLi4ueDogVCkgPT4gViA9PiB7XG4gIHJldHVybiAoLi4uYXJnczogVCkgPT4ge1xuICAgIHJldHVybiBmYShmYi5hcHBseShudWxsLCBhcmdzKSk7XG4gIH07XG59O1xuXG4vKiogQ29tcG9zZSB0d28gdW5hcnkgZnVuY3Rpb25zLiBTaW1pbGFyIHRvIGNvbXBvc2UsIGJ1dCBhdm9pZHMgdXNpbmcgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LiAqL1xuY29uc3QgY29tcG9zZTEgPSA8QSwgQiwgQz4gKGZiYzogKGI6IEIpID0+IEMsIGZhYjogKGE6IEEpID0+IEIpID0+IChhOiBBKTogQyA9PlxuICBmYmMoZmFiKGEpKTtcblxuY29uc3QgY29uc3RhbnQgPSA8VD4odmFsdWU6IFQpOiAoKSA9PiBUID0+IHtcbiAgcmV0dXJuICgpID0+IHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG59O1xuXG5jb25zdCBpZGVudGl0eSA9IDxUID0gYW55Pih4OiBUKTogVCA9PiB7XG4gIHJldHVybiB4O1xufTtcblxuY29uc3QgdHJpcGxlRXF1YWxzID0gPFQ+KGE6IFQsIGI6IFQpOiBib29sZWFuID0+IHtcbiAgcmV0dXJuIGEgPT09IGI7XG59O1xuXG5mdW5jdGlvbiBjdXJyeSA8UkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCk6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPEEsIFJFU1QgZXh0ZW5kcyBhbnlbXSwgT1VUPihmbjogKGE6IEEsIC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQsIGE6IEEpOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVDtcbmZ1bmN0aW9uIGN1cnJ5IDxBLCBCLCBSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46IChhOiBBLCBiOiBCLCAuLi5yZXN0QXJnczogUkVTVCkgPT4gT1VULCBhOiBBLCBiOiBCKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8QSwgQiwgQywgUkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoYTogQSwgYjogQiwgYzogQywgLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCwgYTogQSwgYjogQiwgYzogQyk6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPEEsIEIsIEMsIEQsIFJFU1QgZXh0ZW5kcyBhbnlbXSwgT1VUPihmbjogKGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQsIGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQpOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVDtcbmZ1bmN0aW9uIGN1cnJ5IDxBLCBCLCBDLCBELCBFLCBSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46IChhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCAuLi5yZXN0QXJnczogUkVTVCkgPT4gT1VULCBhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8QSwgQiwgQywgRCwgRSwgRiwgUkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgZjogRiwgLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCwgYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgZjogRik6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPEEsIEIsIEMsIEQsIEUsIEYsIEcsIFJFU1QgZXh0ZW5kcyBhbnlbXSwgT1VUPihmbjogKGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIGY6IEYsIGc6IEcsIC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQsIGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIGY6IEYsIGc6IEcpOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVDtcbmZ1bmN0aW9uIGN1cnJ5IDxBLCBCLCBDLCBELCBFLCBGLCBHLCBILCBSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46IChhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCBmOiBGLCBnOiBHLCBoOiBILCAuLi5yZXN0QXJnczogUkVTVCkgPT4gT1VULCBhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCBmOiBGLCBnOiBHLCBoOiBIKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8QSwgQiwgQywgRCwgRSwgRiwgRywgSCwgSSwgUkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgZjogRiwgZzogRywgaDogSCwgaTogSSwgLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCwgYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgZjogRiwgZzogRywgaDogSCwgaTogSSk6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPEEsIEIsIEMsIEQsIEUsIEYsIEcsIEgsIEksIEosIFJFU1QgZXh0ZW5kcyBhbnlbXSwgT1VUPihmbjogKGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIGY6IEYsIGc6IEcsIGg6IEgsIGk6IEksIGo6IEosIC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQsIGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIGY6IEYsIGc6IEcsIGg6IEgsIGk6IEksIGo6IEopOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVDtcbmZ1bmN0aW9uIGN1cnJ5IDxPVVQ+KGZuOiAoLi4uYWxsQXJnczogYW55W10pID0+IE9VVCwgLi4uaW5pdGlhbEFyZ3M6IGFueVtdKTogKC4uLnJlc3RBcmdzOiBhbnlbXSkgPT4gT1VUIHtcbiAgcmV0dXJuICguLi5yZXN0QXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCBhbGwgPSBpbml0aWFsQXJncy5jb25jYXQocmVzdEFyZ3MpO1xuICAgIHJldHVybiBmbi5hcHBseShudWxsLCBhbGwpO1xuICB9O1xufVxuXG5jb25zdCBub3QgPSA8VD4oZjogKHQ6IFQpID0+IGJvb2xlYW4pID0+ICh0OiBUKTogYm9vbGVhbiA9PlxuICAhZih0KTtcblxuY29uc3QgZGllID0gKG1zZzogc3RyaW5nKSA9PiB7XG4gIHJldHVybiAoKTogbmV2ZXIgPT4ge1xuICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xuICB9O1xufTtcblxuY29uc3QgYXBwbHkgPSA8VD4oZjogKCkgPT4gVCk6IFQgPT4ge1xuICByZXR1cm4gZigpO1xufTtcblxuY29uc3QgY2FsbCA9IChmOiAoKSA9PiBhbnkpOiB2b2lkID0+IHtcbiAgZigpO1xufTtcblxuY29uc3QgbmV2ZXI6ICguLi5hcmdzOiBhbnlbXSkgPT4gZmFsc2UgPSBjb25zdGFudDxmYWxzZT4oZmFsc2UpO1xuY29uc3QgYWx3YXlzOiAoLi4uYXJnczogYW55W10pID0+IHRydWUgPSBjb25zdGFudDx0cnVlPih0cnVlKTtcblxuLyogVXNlZCB0byB3ZWFrZW4gdHlwZXMgKi9cbmNvbnN0IHdlYWtlbiA9IDxBLCBCIGV4dGVuZHMgQT4oYjogQik6IEEgPT4gYjtcblxudHlwZSBGdW48WCwgWT4gPSAoeDogWCkgPT4gWTtcbmNvbnN0IHBpcGU6IHtcbiAgPEEsIEI+KGE6IEEsIGFiOiBGdW48QSwgQj4pOiBCO1xuICA8QSwgQiwgQz4oYTogQSwgYWI6IEZ1bjxBLCBCPiwgYmM6IEZ1bjxCLCBDPik6IEM7XG4gIDxBLCBCLCBDLCBEPihhOiBBLCBhYjogRnVuPEEsIEI+LCBiYzogRnVuPEIsIEM+LCBjZDogRnVuPEMsIEQ+KTogRDtcbiAgPEEsIEIsIEMsIEQsIEU+KGE6IEEsIGFiOiBGdW48QSwgQj4sIGJjOiBGdW48QiwgQz4sIGNkOiBGdW48QywgRD4sIGRlOiBGdW48RCwgRT4pOiBFO1xuICA8QSwgQiwgQywgRCwgRSwgRj4oYTogQSwgYWI6IEZ1bjxBLCBCPiwgYmM6IEZ1bjxCLCBDPiwgY2Q6IEZ1bjxDLCBEPiwgZGU6IEZ1bjxELCBFPiwgZWY6IEZ1bjxFLCBGPik6IEY7XG4gIDxBLCBCLCBDLCBELCBFLCBGLCBHPihhOiBBLCBhYjogRnVuPEEsIEI+LCBiYzogRnVuPEIsIEM+LCBjZDogRnVuPEMsIEQ+LCBkZTogRnVuPEQsIEU+LCBlZjogRnVuPEUsIEY+LCBmZzogRnVuPEYsIEc+KTogRztcbiAgPEEsIEIsIEMsIEQsIEUsIEYsIEcsIEg+KGE6IEEsIGFiOiBGdW48QSwgQj4sIGJjOiBGdW48QiwgQz4sIGNkOiBGdW48QywgRD4sIGRlOiBGdW48RCwgRT4sIGVmOiBGdW48RSwgRj4sIGZnOiBGdW48RiwgRz4sIGdoOiBGdW48RywgSD4pOiBIO1xufSA9XG4gIDxBLCBCLCBDLCBELCBFLCBGLCBHLCBIPihhOiBBLCBhYjogRnVuPEEsIEI+LCBiYz86IEZ1bjxCLCBDPiwgY2Q/OiBGdW48QywgRD4sIGRlPzogRnVuPEQsIEU+LCBlZj86IEZ1bjxFLCBGPiwgZmc/OiBGdW48RiwgRz4sIGdoPzogRnVuPEcsIEg+KTogQiB8IEMgfCBEIHwgRSB8IEYgfCBHIHwgSCA9PiB7XG4gICAgY29uc3QgYiA9IGFiKGEpO1xuICAgIGlmIChUeXBlLmlzTnVsbGFibGUoYmMpKSB7XG4gICAgICByZXR1cm4gYjtcbiAgICB9XG5cbiAgICBjb25zdCBjID0gYmMoYik7XG4gICAgaWYgKFR5cGUuaXNOdWxsYWJsZShjZCkpIHtcbiAgICAgIHJldHVybiBjO1xuICAgIH1cblxuICAgIGNvbnN0IGQgPSBjZChjKTtcbiAgICBpZiAoVHlwZS5pc051bGxhYmxlKGRlKSkge1xuICAgICAgcmV0dXJuIGQ7XG4gICAgfVxuXG4gICAgY29uc3QgZSA9IGRlKGQpO1xuICAgIGlmIChUeXBlLmlzTnVsbGFibGUoZWYpKSB7XG4gICAgICByZXR1cm4gZTtcbiAgICB9XG5cbiAgICBjb25zdCBmID0gZWYoZSk7XG4gICAgaWYgKFR5cGUuaXNOdWxsYWJsZShmZykpIHtcbiAgICAgIHJldHVybiBmO1xuICAgIH1cblxuICAgIGNvbnN0IGcgPSBmZyhmKTtcbiAgICBpZiAoVHlwZS5pc051bGxhYmxlKGdoKSkge1xuICAgICAgcmV0dXJuIGc7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdoKGcpO1xuICB9O1xuXG5leHBvcnQge1xuICBub29wLFxuICBub2FyZyxcbiAgY29tcG9zZSxcbiAgY29tcG9zZTEsXG4gIGNvbnN0YW50LFxuICBpZGVudGl0eSxcbiAgdHJpcGxlRXF1YWxzLFxuICBjdXJyeSxcbiAgbm90LFxuICBkaWUsXG4gIGFwcGx5LFxuICBjYWxsLFxuICBuZXZlcixcbiAgYWx3YXlzLFxuICB3ZWFrZW4sXG4gIHBpcGVcbn07XG4iLCIvLyBVc2Ugd2luZG93IG9iamVjdCBhcyB0aGUgZ2xvYmFsIGlmIGl0J3MgYXZhaWxhYmxlIHNpbmNlIENTUCB3aWxsIGJsb2NrIHNjcmlwdCBldmFsc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1pbXBsaWVkLWV2YWxcbmV4cG9ydCBjb25zdCBHbG9iYWwgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpczsnKSgpO1xuIiwiaW1wb3J0IHsgRXEgfSBmcm9tICdAZXBob3gvZGlzcHV0ZSc7XG5cbmltcG9ydCAqIGFzIEZ1biBmcm9tICcuL0Z1bic7XG5pbXBvcnQgeyBPcHRpb25hbCB9IGZyb20gJy4vT3B0aW9uYWwnO1xuXG50eXBlIE9iaktleXM8VCBleHRlbmRzIHt9PiA9IEV4dHJhY3Q8a2V5b2YgVCwgc3RyaW5nPjtcbnR5cGUgT2JqQ2FsbGJhY2s8VCBleHRlbmRzIHt9PiA9ICh2YWx1ZTogVFtrZXlvZiBUXSwga2V5OiBPYmpLZXlzPFQ+KSA9PiB2b2lkO1xudHlwZSBPYmpNb3JwaGlzbTxUIGV4dGVuZHMge30sIFI+ID0gKHZhbHVlOiBUW2tleW9mIFRdLCBrZXk6IE9iaktleXM8VD4pID0+IFI7XG50eXBlIE9iakd1YXJkUHJlZGljYXRlPFQgZXh0ZW5kcyB7fSwgVSBleHRlbmRzIFRba2V5b2YgVF0+ID0gKHZhbHVlOiBUW2tleW9mIFRdLCBrZXk6IE9iaktleXM8VD4pID0+IHZhbHVlIGlzIFU7XG50eXBlIE9ialByZWRpY2F0ZTxUIGV4dGVuZHMge30+ID0gKHZhbHVlOiBUW2tleW9mIFRdLCBrZXk6IE9iaktleXM8VD4pID0+IGJvb2xlYW47XG5cbi8vIFRoZXJlIGFyZSBtYW55IHZhcmlhdGlvbnMgb2YgT2JqZWN0IGl0ZXJhdGlvbiB0aGF0IGFyZSBmYXN0ZXIgdGhhbiB0aGUgJ2Zvci1pbicgc3R5bGU6XG4vLyBodHRwOi8vanNwZXJmLmNvbS9vYmplY3Qta2V5cy1pdGVyYXRpb24vMTA3XG4vL1xuLy8gVXNlIHRoZSBuYXRpdmUga2V5cyBpZiBpdCBpcyBhdmFpbGFibGUgKElFOSspLCBvdGhlcndpc2UgZmFsbCBiYWNrIHRvIG1hbnVhbGx5IGZpbHRlcmluZ1xuZXhwb3J0IGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cztcblxuZXhwb3J0IGNvbnN0IGhhc093blByb3BlcnR5ID0gT2JqZWN0Lmhhc093blByb3BlcnR5O1xuXG5leHBvcnQgY29uc3QgZWFjaCA9IDxUIGV4dGVuZHMge30+KG9iajogVCwgZjogT2JqQ2FsbGJhY2s8VD4pOiB2b2lkID0+IHtcbiAgY29uc3QgcHJvcHMgPSBrZXlzKG9iaikgYXMgQXJyYXk8T2JqS2V5czxUPj47XG4gIGZvciAobGV0IGsgPSAwLCBsZW4gPSBwcm9wcy5sZW5ndGg7IGsgPCBsZW47IGsrKykge1xuICAgIGNvbnN0IGkgPSBwcm9wc1trXTtcbiAgICBjb25zdCB4ID0gb2JqW2ldO1xuICAgIGYoeCwgaSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBtYXAgPSA8VCBleHRlbmRzIHt9LCBSPihvYmo6IFQsIGY6IE9iak1vcnBoaXNtPFQsIFI+KTogeyBbayBpbiBrZXlvZiBUXTogUiB9ID0+IHtcbiAgcmV0dXJuIHR1cGxlTWFwPHsgW2sgaW4ga2V5b2YgVF06IFIgfSwgVD4ob2JqLCAoeCwgaSkgPT4gKHtcbiAgICBrOiBpLFxuICAgIHY6IGYoeCwgaSlcbiAgfSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IHR1cGxlTWFwID0gPFIgZXh0ZW5kcyB7fSwgVCBleHRlbmRzIHt9PihvYmo6IFQsIGY6IE9iak1vcnBoaXNtPFQsIHsgazoga2V5b2YgUjsgdjogUltrZXlvZiBSXSB9Pik6IFIgPT4ge1xuICBjb25zdCByID0ge30gYXMgUjtcbiAgZWFjaChvYmosICh4LCBpKSA9PiB7XG4gICAgY29uc3QgdHVwbGUgPSBmKHgsIGkpO1xuICAgIHJbdHVwbGUua10gPSB0dXBsZS52O1xuICB9KTtcbiAgcmV0dXJuIHI7XG59O1xuXG5jb25zdCBvYmpBY2MgPSA8VCBleHRlbmRzIHt9PihyOiBUKSA9PiAoeDogVFtrZXlvZiBUXSwgaToga2V5b2YgVCk6IHZvaWQgPT4ge1xuICByW2ldID0geDtcbn07XG5cbmNvbnN0IGludGVybmFsRmlsdGVyID0gPFQgZXh0ZW5kcyB7fT4ob2JqOiBULCBwcmVkOiBPYmpQcmVkaWNhdGU8VD4sIG9uVHJ1ZTogT2JqQ2FsbGJhY2s8VD4sIG9uRmFsc2U6IE9iakNhbGxiYWNrPFQ+KSA9PiB7XG4gIGVhY2gob2JqLCAoeCwgaSkgPT4ge1xuICAgIChwcmVkKHgsIGkpID8gb25UcnVlIDogb25GYWxzZSkoeCwgaSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGJpZmlsdGVyID0gPFQgZXh0ZW5kcyB7fT4ob2JqOiBULCBwcmVkOiBPYmpQcmVkaWNhdGU8VD4pOiB7IHQ6IFJlY29yZDxzdHJpbmcsIFRba2V5b2YgVF0+OyBmOiBSZWNvcmQ8c3RyaW5nLCBUW2tleW9mIFRdPiB9ID0+IHtcbiAgY29uc3QgdDogUmVjb3JkPHN0cmluZywgVFtrZXlvZiBUXT4gPSB7fTtcbiAgY29uc3QgZjogUmVjb3JkPHN0cmluZywgVFtrZXlvZiBUXT4gPSB7fTtcbiAgaW50ZXJuYWxGaWx0ZXIob2JqLCBwcmVkLCBvYmpBY2ModCksIG9iakFjYyhmKSk7XG4gIHJldHVybiB7IHQsIGYgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBmaWx0ZXI6IHtcbiAgPFQgZXh0ZW5kcyB7fSwgVSBleHRlbmRzIFRba2V5b2YgVF0+KG9iajogVCwgcHJlZDogT2JqR3VhcmRQcmVkaWNhdGU8VCwgVT4pOiBSZWNvcmQ8c3RyaW5nLCBVPjtcbiAgPFQgZXh0ZW5kcyB7fT4ob2JqOiBULCBwcmVkOiBPYmpQcmVkaWNhdGU8VD4pOiBSZWNvcmQ8c3RyaW5nLCBUW2tleW9mIFRdPjtcbn0gPSA8VCBleHRlbmRzIHt9PihvYmo6IFQsIHByZWQ6IE9ialByZWRpY2F0ZTxUPik6IFJlY29yZDxzdHJpbmcsIFRba2V5b2YgVF0+ID0+IHtcbiAgY29uc3QgdDogUmVjb3JkPHN0cmluZywgVFtrZXlvZiBUXT4gPSB7fTtcbiAgaW50ZXJuYWxGaWx0ZXIob2JqLCBwcmVkLCBvYmpBY2ModCksIEZ1bi5ub29wKTtcbiAgcmV0dXJuIHQ7XG59O1xuXG5leHBvcnQgY29uc3QgbWFwVG9BcnJheSA9IDxUIGV4dGVuZHMge30sIFI+KG9iajogVCwgZjogT2JqTW9ycGhpc208VCwgUj4pOiBSW10gPT4ge1xuICBjb25zdCByOiBSW10gPSBbXTtcbiAgZWFjaChvYmosICh2YWx1ZSwgbmFtZSkgPT4ge1xuICAgIHIucHVzaChmKHZhbHVlLCBuYW1lKSk7XG4gIH0pO1xuICByZXR1cm4gcjtcbn07XG5cbmV4cG9ydCBjb25zdCBmaW5kID0gPFQgZXh0ZW5kcyB7fT4ob2JqOiBULCBwcmVkOiAodmFsdWU6IFRba2V5b2YgVF0sIGtleTogT2JqS2V5czxUPiwgb2JqOiBUKSA9PiBib29sZWFuKTogT3B0aW9uYWw8VFtrZXlvZiBUXT4gPT4ge1xuICBjb25zdCBwcm9wcyA9IGtleXMob2JqKSBhcyBBcnJheTxPYmpLZXlzPFQ+PjtcbiAgZm9yIChsZXQgayA9IDAsIGxlbiA9IHByb3BzLmxlbmd0aDsgayA8IGxlbjsgaysrKSB7XG4gICAgY29uc3QgaSA9IHByb3BzW2tdO1xuICAgIGNvbnN0IHggPSBvYmpbaV07XG4gICAgaWYgKHByZWQoeCwgaSwgb2JqKSkge1xuICAgICAgcmV0dXJuIE9wdGlvbmFsLnNvbWUoeCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBPcHRpb25hbC5ub25lKCk7XG59O1xuXG5leHBvcnQgY29uc3QgdmFsdWVzID0gPFQgZXh0ZW5kcyB7fT4ob2JqOiBUKTogQXJyYXk8VFtrZXlvZiBUXT4gPT4ge1xuICByZXR1cm4gbWFwVG9BcnJheShvYmosIEZ1bi5pZGVudGl0eSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2l6ZSA9IChvYmo6IHt9KTogbnVtYmVyID0+IHtcbiAgcmV0dXJuIGtleXMob2JqKS5sZW5ndGg7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0ID0gPFQgZXh0ZW5kcyB7fSwgSyBleHRlbmRzIGtleW9mIFQ+KG9iajogVCwga2V5OiBLKTogT3B0aW9uYWw8Tm9uTnVsbGFibGU8VFtLXT4+ID0+IHtcbiAgcmV0dXJuIGhhcyhvYmosIGtleSkgPyBPcHRpb25hbC5mcm9tKG9ialtrZXldIGFzIE5vbk51bGxhYmxlPFRbS10+KSA6IE9wdGlvbmFsLm5vbmUoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBoYXMgPSA8VCBleHRlbmRzIHt9LCBLIGV4dGVuZHMga2V5b2YgVD4ob2JqOiBULCBrZXk6IEspOiBib29sZWFuID0+XG4gIGhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpO1xuXG5leHBvcnQgY29uc3QgaGFzTm9uTnVsbGFibGVLZXkgPSA8VCBleHRlbmRzIHt9LCBLIGV4dGVuZHMga2V5b2YgVD4ob2JqOiBULCBrZXk6IEspOiBvYmogaXMgVCAmIFJlY29yZDxLLCBOb25OdWxsYWJsZTxUW0tdPj4gPT5cbiAgaGFzKG9iaiwga2V5KSAmJiBvYmpba2V5XSAhPT0gdW5kZWZpbmVkICYmIG9ialtrZXldICE9PSBudWxsO1xuXG5leHBvcnQgY29uc3QgaXNFbXB0eSA9IChyOiBSZWNvcmQ8YW55LCBhbnk+KTogciBpcyB7fSA9PiB7XG4gIGZvciAoY29uc3QgeCBpbiByKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwociwgeCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5leHBvcnQgY29uc3QgZXF1YWwgPSA8VD4oYTE6IFJlY29yZDxzdHJpbmcsIFQ+LCBhMjogUmVjb3JkPHN0cmluZywgVD4sIGVxOiBFcS5FcTxUPiA9IEVxLmVxQW55KTogYm9vbGVhbiA9PlxuICBFcS5lcVJlY29yZChlcSkuZXEoYTEsIGEyKTtcbiIsImltcG9ydCAqIGFzIFR5cGUgZnJvbSAnLi9UeXBlJztcblxuLyoqXG4gKiBUaGUgYE9wdGlvbmFsYCB0eXBlIHJlcHJlc2VudHMgYSB2YWx1ZSAob2YgYW55IHR5cGUpIHRoYXQgcG90ZW50aWFsbHkgZG9lc1xuICogbm90IGV4aXN0LiBBbnkgYE9wdGlvbmFsPFQ+YCBjYW4gZWl0aGVyIGJlIGEgYFNvbWU8VD5gIChpbiB3aGljaCBjYXNlIHRoZVxuICogdmFsdWUgZG9lcyBleGlzdCkgb3IgYSBgTm9uZWAgKGluIHdoaWNoIGNhc2UgdGhlIHZhbHVlIGRvZXMgbm90IGV4aXN0KS4gVGhpc1xuICogbW9kdWxlIGRlZmluZXMgYSB3aG9sZSBsb3Qgb2YgRlAtaW5zcGlyZWQgdXRpbGl0eSBmdW5jdGlvbnMgZm9yIGRlYWxpbmcgd2l0aFxuICogYE9wdGlvbmFsYCBvYmplY3RzLlxuICpcbiAqIENvbXBhcmlzb24gd2l0aCBudWxsIG9yIHVuZGVmaW5lZDpcbiAqIC0gV2UgZG9uJ3QgZ2V0IGZhbmN5IG51bGwgY29hbGVzY2luZyBvcGVyYXRvcnMgd2l0aCBgT3B0aW9uYWxgXG4gKiAtIFdlIGRvIGdldCBmYW5jeSBoZWxwZXIgZnVuY3Rpb25zIHdpdGggYE9wdGlvbmFsYFxuICogLSBgT3B0aW9uYWxgIHN1cHBvcnQgbmVzdGluZywgYW5kIGFsbG93IGZvciB0aGUgdHlwZSB0byBzdGlsbCBiZSBudWxsYWJsZSAob3JcbiAqIGFub3RoZXIgYE9wdGlvbmFsYClcbiAqIC0gVGhlcmUgaXMgbm8gb3B0aW9uIHRvIHR1cm4gb2ZmIHN0cmljdC1vcHRpb25hbC1jaGVja3MgbGlrZSB0aGVyZSBpcyBmb3JcbiAqIHN0cmljdC1udWxsLWNoZWNrc1xuICovXG5leHBvcnQgY2xhc3MgT3B0aW9uYWw8VD4ge1xuICBwcml2YXRlIHJlYWRvbmx5IHRhZzogYm9vbGVhbjtcbiAgcHJpdmF0ZSByZWFkb25seSB2YWx1ZT86IFQ7XG5cbiAgLy8gU25lYWt5IG9wdGltaXNhdGlvbjogZXZlcnkgaW5zdGFuY2Ugb2YgT3B0aW9uYWwubm9uZSBpcyBpZGVudGljYWwsIHNvIGp1c3RcbiAgLy8gcmV1c2UgdGhlIHNhbWUgb2JqZWN0XG4gIHByaXZhdGUgc3RhdGljIHNpbmdsZXRvbk5vbmUgPSBuZXcgT3B0aW9uYWw8YW55PihmYWxzZSk7XG5cbiAgLy8gVGhlIGludGVybmFsIHJlcHJlc2VudGF0aW9uIGhhcyBhIGB0YWdgIGFuZCBhIGB2YWx1ZWAsIGJ1dCBib3RoIGFyZVxuICAvLyBwcml2YXRlOiBhYmxlIHRvIGJlIGNvbnNvbGUubG9nZ2VkLCBidXQgbm90IGFibGUgdG8gYmUgYWNjZXNzZWQgYnkgY29kZVxuICBwcml2YXRlIGNvbnN0cnVjdG9yKHRhZzogYm9vbGVhbiwgdmFsdWU/OiBUKSB7XG4gICAgdGhpcy50YWcgPSB0YWc7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgLy8gLS0tIElkZW50aXRpZXMgLS0tXG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgYE9wdGlvbmFsPFQ+YCB0aGF0ICoqZG9lcyoqIGNvbnRhaW4gYSB2YWx1ZS5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgc29tZTxUPih0aGlzOiB2b2lkLCB2YWx1ZTogVCk6IE9wdGlvbmFsPFQ+IHtcbiAgICByZXR1cm4gbmV3IE9wdGlvbmFsKHRydWUsIHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgYE9wdGlvbmFsPFQ+YCB0aGF0ICoqZG9lcyBub3QqKiBjb250YWluIGEgdmFsdWUuIGBUYCBjYW4gYmVcbiAgICogYW55IHR5cGUgYmVjYXVzZSB3ZSBkb24ndCBhY3R1YWxseSBoYXZlIGEgYFRgLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBub25lPFQgPSBuZXZlcj4odGhpczogdm9pZCk6IE9wdGlvbmFsPFQ+IHtcbiAgICByZXR1cm4gT3B0aW9uYWwuc2luZ2xldG9uTm9uZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtIGEgdHJhbnNmb3JtIG9uIGFuIGBPcHRpb25hbGAgdHlwZS4gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXNcbiAgICogYE9wdGlvbmFsYCBjb250YWlucyBhIHZhbHVlIG9yIG5vdCwgYGZvbGRgIHdpbGwgcmV0dXJuIGEgdmFsdWUgb2YgdHlwZSBgVWAuXG4gICAqIElmIHRoaXMgYE9wdGlvbmFsYCBkb2VzIG5vdCBjb250YWluIGEgdmFsdWUsIHRoZSBgVWAgd2lsbCBiZSBjcmVhdGVkIGJ5XG4gICAqIGNhbGxpbmcgYG9uTm9uZWAuIElmIHRoaXMgYE9wdGlvbmFsYCBkb2VzIGNvbnRhaW4gYSB2YWx1ZSwgdGhlIGBVYCB3aWxsIGJlXG4gICAqIGNyZWF0ZWQgYnkgY2FsbGluZyBgb25Tb21lYC5cbiAgICpcbiAgICogRm9yIHRoZSBGUCBlbnRodXNpYXN0cyBpbiB0aGUgcm9vbSwgdGhpcyBmdW5jdGlvbjpcbiAgICogMS4gQ291bGQgYmUgdXNlZCB0byBpbXBsZW1lbnQgYWxsIG9mIHRoZSBmdW5jdGlvbnMgYmVsb3dcbiAgICogMi4gRm9ybXMgYSBjYXRhbW9ycGhpc21cbiAgICovXG4gIHB1YmxpYyBmb2xkPFU+KG9uTm9uZTogKCkgPT4gVSwgb25Tb21lOiAodmFsdWU6IFQpID0+IFUpOiBVIHtcbiAgICBpZiAodGhpcy50YWcpIHtcbiAgICAgIHJldHVybiBvblNvbWUodGhpcy52YWx1ZSBhcyBUKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG9uTm9uZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgdGhpcyBgT3B0aW9uYWxgIG9iamVjdCBjb250YWlucyBhIHZhbHVlLlxuICAgKi9cbiAgcHVibGljIGlzU29tZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50YWc7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIGlmIHRoaXMgYE9wdGlvbmFsYCBvYmplY3QgKipkb2VzIG5vdCoqIGNvbnRhaW4gYSB2YWx1ZS5cbiAgICovXG4gIHB1YmxpYyBpc05vbmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLnRhZztcbiAgfVxuXG4gIC8vIC0tLSBGdW5jdG9yIChuYW1lIHN0b2xlbiBmcm9tIEhhc2tlbGwgLyBtYXRocykgLS0tXG5cbiAgLyoqXG4gICAqIFBlcmZvcm0gYSB0cmFuc2Zvcm0gb24gYW4gYE9wdGlvbmFsYCBvYmplY3QsICoqaWYqKiB0aGVyZSBpcyBhIHZhbHVlLiBJZlxuICAgKiB5b3UgcHJvdmlkZSBhIGZ1bmN0aW9uIHRvIHR1cm4gYSBUIGludG8gYSBVLCB0aGlzIGlzIHRoZSBmdW5jdGlvbiB5b3UgdXNlXG4gICAqIHRvIHR1cm4gYW4gYE9wdGlvbmFsPFQ+YCBpbnRvIGFuIGBPcHRpb25hbDxVPmAuIElmIHRoaXMgKipkb2VzKiogY29udGFpblxuICAgKiBhIHZhbHVlIHRoZW4gdGhlIG91dHB1dCB3aWxsIGFsc28gY29udGFpbiBhIHZhbHVlICh0aGF0IHZhbHVlIGJlaW5nIHRoZVxuICAgKiBvdXRwdXQgb2YgYG1hcHBlcih0aGlzLnZhbHVlKWApLCBhbmQgaWYgdGhpcyAqKmRvZXMgbm90KiogY29udGFpbiBhIHZhbHVlXG4gICAqIHRoZW4gbmVpdGhlciB3aWxsIHRoZSBvdXRwdXQuXG4gICAqL1xuICBwdWJsaWMgbWFwPFU+KG1hcHBlcjogKHZhbHVlOiBUKSA9PiBVKTogT3B0aW9uYWw8VT4ge1xuICAgIGlmICh0aGlzLnRhZykge1xuICAgICAgcmV0dXJuIE9wdGlvbmFsLnNvbWUobWFwcGVyKHRoaXMudmFsdWUgYXMgVCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gT3B0aW9uYWwubm9uZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIC0tLSBNb25hZCAobmFtZSBzdG9sZW4gZnJvbSBIYXNrZWxsIC8gbWF0aHMpIC0tLVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtIGEgdHJhbnNmb3JtIG9uIGFuIGBPcHRpb25hbGAgb2JqZWN0LCAqKmlmKiogdGhlcmUgaXMgYSB2YWx1ZS5cbiAgICogVW5saWtlIGBtYXBgLCBoZXJlIHRoZSB0cmFuc2Zvcm0gaXRzZWxmIGFsc28gcmV0dXJucyBhbiBgT3B0aW9uYWxgLlxuICAgKi9cbiAgcHVibGljIGJpbmQ8VT4oYmluZGVyOiAodmFsdWU6IFQpID0+IE9wdGlvbmFsPFU+KTogT3B0aW9uYWw8VT4ge1xuICAgIGlmICh0aGlzLnRhZykge1xuICAgICAgcmV0dXJuIGJpbmRlcih0aGlzLnZhbHVlIGFzIFQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gT3B0aW9uYWwubm9uZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIC0tLSBUcmF2ZXJzYWJsZSAobmFtZSBzdG9sZW4gZnJvbSBIYXNrZWxsIC8gbWF0aHMpIC0tLVxuXG4gIC8qKlxuICAgKiBGb3IgYSBnaXZlbiBwcmVkaWNhdGUsIHRoaXMgZnVuY3Rpb24gZmluZHMgb3V0IGlmIHRoZXJlICoqZXhpc3RzKiogYSB2YWx1ZVxuICAgKiBpbnNpZGUgdGhpcyBgT3B0aW9uYWxgIG9iamVjdCB0aGF0IG1lZXRzIHRoZSBwcmVkaWNhdGUuIEluIHByYWN0aWNlLCB0aGlzXG4gICAqIG1lYW5zIHRoYXQgZm9yIGBPcHRpb25hbGBzIHRoYXQgZG8gbm90IGNvbnRhaW4gYSB2YWx1ZSBpdCByZXR1cm5zIGZhbHNlIChhc1xuICAgKiBubyBwcmVkaWNhdGUtbWVldGluZyB2YWx1ZSBleGlzdHMpLlxuICAgKi9cbiAgcHVibGljIGV4aXN0cyhwcmVkaWNhdGU6ICh2YWx1ZTogVCkgPT4gYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnRhZyAmJiBwcmVkaWNhdGUodGhpcy52YWx1ZSBhcyBUKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3IgYSBnaXZlbiBwcmVkaWNhdGUsIHRoaXMgZnVuY3Rpb24gZmluZHMgb3V0IGlmICoqYWxsKiogdGhlIHZhbHVlcyBpbnNpZGVcbiAgICogdGhpcyBgT3B0aW9uYWxgIG9iamVjdCBtZWV0IHRoZSBwcmVkaWNhdGUuIEluIHByYWN0aWNlLCB0aGlzIG1lYW5zIHRoYXRcbiAgICogZm9yIGBPcHRpb25hbGBzIHRoYXQgZG8gbm90IGNvbnRhaW4gYSB2YWx1ZSBpdCByZXR1cm5zIHRydWUgKGFzIGFsbCAwXG4gICAqIG9iamVjdHMgZG8gbWVldCB0aGUgcHJlZGljYXRlKS5cbiAgICovXG4gIHB1YmxpYyBmb3JhbGwocHJlZGljYXRlOiAodmFsdWU6IFQpID0+IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMudGFnIHx8IHByZWRpY2F0ZSh0aGlzLnZhbHVlIGFzIFQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvciBhIGdpdmVuIHByZWRpY2F0ZSwgY3JlYXRlIGEgbmV3IGBPcHRpb25hbGAgb2JqZWN0IHRoYXQgd2lsbCByZXRhaW5cbiAgICogYWxsIHRoZSB2YWx1ZXMgaW5zaWRlIHRoZSBvbGQgYE9wdGlvbmFsYCBvYmplY3QgdGhhdCBtZWV0IHRoZSBwcmVkaWNhdGUuXG4gICAqIEluIHByYWN0aWNlLCB0aGUgYE9wdGlvbmFsYCBvYmplY3QgY29udGFpbnMgZWl0aGVyIDAgb3IgMSBvYmplY3RzLCBhbmRcbiAgICogdGhlIG91dHB1dCB3aWxsIGtlZXAgdGhlIChzaW5nbGUpIGlucHV0IG9iamVjdCAoaWYgaXQgZXhpc3RzKSBhcyBsb25nIGFzXG4gICAqIGl0IHBhc3NlcyB0aGUgcHJlZGljYXRlLlxuICAgKi9cbiAgcHVibGljIGZpbHRlcjxVIGV4dGVuZHMgVD4ocHJlZGljYXRlOiAodmFsdWU6IFQpID0+IHZhbHVlIGlzIFUpOiBPcHRpb25hbDxVPjtcbiAgcHVibGljIGZpbHRlcihwcmVkaWNhdGU6ICh2YWx1ZTogVCkgPT4gYm9vbGVhbik6IE9wdGlvbmFsPFQ+O1xuICBwdWJsaWMgZmlsdGVyKHByZWRpY2F0ZTogKHZhbHVlOiBUKSA9PiBib29sZWFuKTogT3B0aW9uYWw8VD4ge1xuICAgIGlmICghdGhpcy50YWcgfHwgcHJlZGljYXRlKHRoaXMudmFsdWUgYXMgVCkpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gT3B0aW9uYWwubm9uZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIC0tLSBHZXR0ZXJzIC0tLVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHZhbHVlIG91dCBvZiB0aGUgaW5zaWRlIG9mIHRoZSBgT3B0aW9uYWxgIG9iamVjdCwgdXNpbmcgYSBkZWZhdWx0XG4gICAqIGByZXBsYWNlbWVudGAgdmFsdWUgaWYgdGhlIHByb3ZpZGVkIGBPcHRpb25hbGAgb2JqZWN0IGRvZXMgbm90IGNvbnRhaW4gYVxuICAgKiB2YWx1ZS5cbiAgICovXG4gIHB1YmxpYyBnZXRPcjxVID0gVD4ocmVwbGFjZW1lbnQ6IFUpOiBUIHwgVSB7XG4gICAgcmV0dXJuIHRoaXMudGFnID8gdGhpcy52YWx1ZSBhcyBUIDogcmVwbGFjZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB2YWx1ZSBvdXQgb2YgdGhlIGluc2lkZSBvZiB0aGUgYE9wdGlvbmFsYCBvYmplY3QsIHVzaW5nIGEgZGVmYXVsdFxuICAgKiBgcmVwbGFjZW1lbnRgIHZhbHVlIGlmIHRoZSBwcm92aWRlZCBgT3B0aW9uYWxgIG9iamVjdCBkb2VzIG5vdCBjb250YWluIGFcbiAgICogdmFsdWUuICBVbmxpa2UgYGdldE9yYCwgaW4gdGhpcyBtZXRob2QgdGhlIGByZXBsYWNlbWVudGAgb2JqZWN0IGlzIGFsc29cbiAgICogYE9wdGlvbmFsYCAtIG1lYW5pbmcgdGhhdCB0aGlzIG1ldGhvZCB3aWxsIGFsd2F5cyByZXR1cm4gYW4gYE9wdGlvbmFsYC5cbiAgICovXG4gIHB1YmxpYyBvcjxVID0gVD4ocmVwbGFjZW1lbnQ6IE9wdGlvbmFsPFU+KTogT3B0aW9uYWw8VCB8IFU+IHtcbiAgICByZXR1cm4gdGhpcy50YWcgPyB0aGlzIDogcmVwbGFjZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB2YWx1ZSBvdXQgb2YgdGhlIGluc2lkZSBvZiB0aGUgYE9wdGlvbmFsYCBvYmplY3QsIHVzaW5nIGEgZGVmYXVsdFxuICAgKiBgcmVwbGFjZW1lbnRgIHZhbHVlIGlmIHRoZSBwcm92aWRlZCBgT3B0aW9uYWxgIG9iamVjdCBkb2VzIG5vdCBjb250YWluIGFcbiAgICogdmFsdWUuIFVubGlrZSBgZ2V0T3JgLCBpbiB0aGlzIG1ldGhvZCB0aGUgYHJlcGxhY2VtZW50YCB2YWx1ZSBpc1xuICAgKiBcInRodW5rZWRcIiAtIHRoYXQgaXMgdG8gc2F5IHRoYXQgeW91IGRvbid0IHBhc3MgYSB2YWx1ZSB0byBgZ2V0T3JUaHVua2AsIHlvdVxuICAgKiBwYXNzIGEgZnVuY3Rpb24gd2hpY2ggKGlmIGNhbGxlZCkgd2lsbCAqKnJldHVybioqIHRoZSBgdmFsdWVgIHlvdSB3YW50IHRvXG4gICAqIHVzZS5cbiAgICovXG4gIHB1YmxpYyBnZXRPclRodW5rPFUgPSBUPih0aHVuazogKCkgPT4gVSk6IFQgfCBVIHtcbiAgICByZXR1cm4gdGhpcy50YWcgPyB0aGlzLnZhbHVlIGFzIFQgOiB0aHVuaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdmFsdWUgb3V0IG9mIHRoZSBpbnNpZGUgb2YgdGhlIGBPcHRpb25hbGAgb2JqZWN0LCB1c2luZyBhIGRlZmF1bHRcbiAgICogYHJlcGxhY2VtZW50YCB2YWx1ZSBpZiB0aGUgcHJvdmlkZWQgT3B0aW9uYWwgb2JqZWN0IGRvZXMgbm90IGNvbnRhaW4gYVxuICAgKiB2YWx1ZS5cbiAgICpcbiAgICogVW5saWtlIGBvcmAsIGluIHRoaXMgbWV0aG9kIHRoZSBgcmVwbGFjZW1lbnRgIHZhbHVlIGlzIFwidGh1bmtlZFwiIC0gdGhhdCBpc1xuICAgKiB0byBzYXkgdGhhdCB5b3UgZG9uJ3QgcGFzcyBhIHZhbHVlIHRvIGBvclRodW5rYCwgeW91IHBhc3MgYSBmdW5jdGlvbiB3aGljaFxuICAgKiAoaWYgY2FsbGVkKSB3aWxsICoqcmV0dXJuKiogdGhlIGB2YWx1ZWAgeW91IHdhbnQgdG8gdXNlLlxuICAgKlxuICAgKiBVbmxpa2UgYGdldE9yVGh1bmtgLCBpbiB0aGlzIG1ldGhvZCB0aGUgYHJlcGxhY2VtZW50YCB2YWx1ZSBpcyBhbHNvXG4gICAqIGBPcHRpb25hbGAsIG1lYW5pbmcgdGhhdCB0aGlzIG1ldGhvZCB3aWxsIGFsd2F5cyByZXR1cm4gYW4gYE9wdGlvbmFsYC5cbiAgICovXG4gIHB1YmxpYyBvclRodW5rPFUgPSBUPih0aHVuazogKCkgPT4gT3B0aW9uYWw8VT4pOiBPcHRpb25hbDxUIHwgVT4ge1xuICAgIHJldHVybiB0aGlzLnRhZyA/IHRoaXMgOiB0aHVuaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdmFsdWUgb3V0IG9mIHRoZSBpbnNpZGUgb2YgdGhlIGBPcHRpb25hbGAgb2JqZWN0LCB0aHJvd2luZyBhblxuICAgKiBleGNlcHRpb24gaWYgdGhlIHByb3ZpZGVkIGBPcHRpb25hbGAgb2JqZWN0IGRvZXMgbm90IGNvbnRhaW4gYSB2YWx1ZS5cbiAgICpcbiAgICogV0FSTklORzpcbiAgICogWW91IHNob3VsZCBvbmx5IGJlIHVzaW5nIHRoaXMgZnVuY3Rpb24gaWYgeW91IGtub3cgdGhhdCB0aGUgYE9wdGlvbmFsYFxuICAgKiBvYmplY3QgKippcyBub3QqKiBlbXB0eSAob3RoZXJ3aXNlIHlvdSdyZSB0aHJvd2luZyBleGNlcHRpb25zIGluIHByb2R1Y3Rpb25cbiAgICogY29kZSwgd2hpY2ggaXMgYmFkKS5cbiAgICpcbiAgICogSW4gdGVzdHMgdGhpcyBpcyBtb3JlIGFjY2VwdGFibGUuXG4gICAqXG4gICAqIFByZWZlciBvdGhlciBtZXRob2RzIHRvIHRoaXMsIHN1Y2ggYXMgYC5lYWNoYC5cbiAgICovXG4gIHB1YmxpYyBnZXRPckRpZShtZXNzYWdlPzogc3RyaW5nKTogVCB7XG4gICAgaWYgKCF0aGlzLnRhZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UgPz8gJ0NhbGxlZCBnZXRPckRpZSBvbiBOb25lJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlIGFzIFQ7XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tIEludGVyb3Agd2l0aCBudWxsIGFuZCB1bmRlZmluZWQgLS0tXG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gYE9wdGlvbmFsYCB2YWx1ZSBmcm9tIGEgbnVsbGFibGUgKG9yIHVuZGVmaW5lZC1hYmxlKSBpbnB1dC5cbiAgICogTnVsbCwgb3IgdW5kZWZpbmVkLCBpcyBjb252ZXJ0ZWQgdG8gYE5vbmVgLCBhbmQgYW55dGhpbmcgZWxzZSBpcyBjb252ZXJ0ZWRcbiAgICogdG8gYFNvbWVgLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBmcm9tPFQ+KHRoaXM6IHZvaWQsIHZhbHVlOiBUIHwgbnVsbCB8IHVuZGVmaW5lZCk6IE9wdGlvbmFsPE5vbk51bGxhYmxlPFQ+PiB7XG4gICAgcmV0dXJuIFR5cGUuaXNOb25OdWxsYWJsZSh2YWx1ZSkgPyBPcHRpb25hbC5zb21lKHZhbHVlKSA6IE9wdGlvbmFsLm5vbmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhbiBgT3B0aW9uYWxgIHRvIGEgbnVsbGFibGUgdHlwZSwgYnkgZ2V0dGluZyB0aGUgdmFsdWUgaWYgaXRcbiAgICogZXhpc3RzLCBvciByZXR1cm5pbmcgYG51bGxgIGlmIGl0IGRvZXMgbm90LlxuICAgKi9cbiAgcHVibGljIGdldE9yTnVsbCgpOiBUIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMudGFnID8gdGhpcy52YWx1ZSBhcyBUIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhbiBgT3B0aW9uYWxgIHRvIGFuIHVuZGVmaW5lZC1hYmxlIHR5cGUsIGJ5IGdldHRpbmcgdGhlIHZhbHVlIGlmXG4gICAqIGl0IGV4aXN0cywgb3IgcmV0dXJuaW5nIGB1bmRlZmluZWRgIGlmIGl0IGRvZXMgbm90LlxuICAgKi9cbiAgcHVibGljIGdldE9yVW5kZWZpbmVkKCk6IFQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG5cbiAgLy8gLS0tIFV0aWxpdGllcyAtLS1cblxuICAvKipcbiAgICogSWYgdGhlIGBPcHRpb25hbGAgY29udGFpbnMgYSB2YWx1ZSwgcGVyZm9ybSBhbiBhY3Rpb24gb24gdGhhdCB2YWx1ZS5cbiAgICogVW5saWtlIHRoZSByZXN0IG9mIHRoZSBtZXRob2RzIG9uIHRoaXMgdHlwZSwgYC5lYWNoYCBoYXMgc2lkZS1lZmZlY3RzLiBJZlxuICAgKiB5b3Ugd2FudCB0byB0cmFuc2Zvcm0gYW4gYE9wdGlvbmFsPFQ+YCAqKmludG8qKiBzb21ldGhpbmcsIHRoZW4gdGhpcyBpcyBub3RcbiAgICogdGhlIG1ldGhvZCBmb3IgeW91LiBJZiB5b3Ugd2FudCB0byB1c2UgYW4gYE9wdGlvbmFsPFQ+YCB0byAqKmRvKipcbiAgICogc29tZXRoaW5nLCB0aGVuIHRoaXMgaXMgdGhlIG1ldGhvZCBmb3IgeW91IC0gcHJvdmlkZWQgeW91J3JlIG9rYXkgd2l0aCBub3RcbiAgICogZG9pbmcgYW55dGhpbmcgaW4gdGhlIGNhc2Ugd2hlcmUgdGhlIGBPcHRpb25hbGAgZG9lc24ndCBoYXZlIGEgdmFsdWUgaW5zaWRlXG4gICAqIGl0LiBJZiB5b3UncmUgbm90IHN1cmUgd2hldGhlciB5b3VyIHVzZS1jYXNlIGZpdHMgaW50byB0cmFuc2Zvcm1pbmdcbiAgICogKippbnRvKiogc29tZXRoaW5nIG9yICoqZG9pbmcqKiBzb21ldGhpbmcsIGNoZWNrIHdoZXRoZXIgaXQgaGFzIGEgcmV0dXJuXG4gICAqIHZhbHVlLiBJZiBpdCBkb2VzLCB5b3Ugc2hvdWxkIGJlIHBlcmZvcm1pbmcgYSB0cmFuc2Zvcm0uXG4gICAqL1xuICBwdWJsaWMgZWFjaCh3b3JrZXI6ICh2YWx1ZTogVCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnRhZykge1xuICAgICAgd29ya2VyKHRoaXMudmFsdWUgYXMgVCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFR1cm4gdGhlIGBPcHRpb25hbGAgb2JqZWN0IGludG8gYW4gYXJyYXkgdGhhdCBjb250YWlucyBhbGwgb2YgdGhlIHZhbHVlc1xuICAgKiBzdG9yZWQgaW5zaWRlIHRoZSBgT3B0aW9uYWxgLiBJbiBwcmFjdGljZSwgdGhpcyBtZWFucyB0aGUgb3V0cHV0IHdpbGwgaGF2ZVxuICAgKiBlaXRoZXIgMCBvciAxIGVsZW1lbnRzLlxuICAgKi9cbiAgcHVibGljIHRvQXJyYXkoKTogVFtdIHtcbiAgICByZXR1cm4gdGhpcy50YWcgPyBbIHRoaXMudmFsdWUgYXMgVCBdIDogW107XG4gIH1cblxuICAvKipcbiAgICogVHVybiB0aGUgYE9wdGlvbmFsYCBvYmplY3QgaW50byBhIHN0cmluZyBmb3IgZGVidWdnaW5nIG9yIHByaW50aW5nLiBOb3RcbiAgICogcmVjb21tZW5kZWQgZm9yIHByb2R1Y3Rpb24gY29kZSwgYnV0IGdvb2QgZm9yIGRlYnVnZ2luZy4gQWxzbyBub3RlIHRoYXRcbiAgICogdGhlc2UgZGF5cyBhbiBgT3B0aW9uYWxgIG9iamVjdCBjYW4gYmUgbG9nZ2VkIHRvIHRoZSBjb25zb2xlIGRpcmVjdGx5LCBhbmRcbiAgICogaXRzIGlubmVyIHZhbHVlIChpZiBpdCBleGlzdHMpIHdpbGwgYmUgdmlzaWJsZS5cbiAgICovXG4gIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnRhZyA/IGBzb21lKCR7dGhpcy52YWx1ZX0pYCA6ICdub25lKCknO1xuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBBcnIgZnJvbSAnLi9BcnInO1xuaW1wb3J0ICogYXMgRnVuIGZyb20gJy4vRnVuJztcbmltcG9ydCB7IE9wdGlvbmFsIH0gZnJvbSAnLi9PcHRpb25hbCc7XG5cbi8qKlxuICogKipJcyoqIHRoZSB2YWx1ZSBzdG9yZWQgaW5zaWRlIHRoaXMgT3B0aW9uYWwgb2JqZWN0IGVxdWFsIHRvIGByaHNgP1xuICovXG5leHBvcnQgY29uc3QgaXMgPSA8VD4obGhzOiBPcHRpb25hbDxUPiwgcmhzOiBULCBjb21wYXJhdG9yOiAoYTogVCwgYjogVCkgPT4gYm9vbGVhbiA9IEZ1bi50cmlwbGVFcXVhbHMpOiBib29sZWFuID0+XG4gIGxocy5leGlzdHMoKGxlZnQpID0+IGNvbXBhcmF0b3IobGVmdCwgcmhzKSk7XG5cbi8qKlxuICogQXJlIHRoZXNlIHR3byBPcHRpb25hbCBvYmplY3RzIGVxdWFsPyBFcXVhbGl0eSBoZXJlIG1lYW5zIGVpdGhlciB0aGV5J3JlIGJvdGhcbiAqIGBTb21lYCAoYW5kIHRoZSB2YWx1ZXMgYXJlIGVxdWFsIHVuZGVyIHRoZSBjb21wYXJhdG9yKSBvciB0aGV5J3JlIGJvdGggYE5vbmVgLlxuICovXG5leHBvcnQgY29uc3QgZXF1YWxzOiB7XG4gIDxBLCBCPihsaHM6IE9wdGlvbmFsPEE+LCByaHM6IE9wdGlvbmFsPEI+LCBjb21wYXJhdG9yOiAoYTogQSwgYjogQikgPT4gYm9vbGVhbik6IGJvb2xlYW47XG4gIDxUPihsaHM6IE9wdGlvbmFsPFQ+LCByaHM6IE9wdGlvbmFsPFQ+KTogYm9vbGVhbjtcbn0gPSA8QSwgQj4obGhzOiBPcHRpb25hbDxBPiwgcmhzOiBPcHRpb25hbDxCPiwgY29tcGFyYXRvcjogKGE6IEEsIGI6IEIpID0+IGJvb2xlYW4gPSBGdW4udHJpcGxlRXF1YWxzIGFzIGFueSk6IGJvb2xlYW4gPT5cbiAgbGlmdDIobGhzLCByaHMsIGNvbXBhcmF0b3IpLmdldE9yKGxocy5pc05vbmUoKSAmJiByaHMuaXNOb25lKCkpO1xuXG5leHBvcnQgY29uc3QgY2F0ID0gPEE+KGFycjogT3B0aW9uYWw8QT5bXSk6IEFbXSA9PiB7XG4gIGNvbnN0IHI6IEFbXSA9IFtdO1xuICBjb25zdCBwdXNoID0gKHg6IEEpID0+IHtcbiAgICByLnB1c2goeCk7XG4gIH07XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgYXJyW2ldLmVhY2gocHVzaCk7XG4gIH1cbiAgcmV0dXJuIHI7XG59O1xuXG5leHBvcnQgY29uc3Qgc2VxdWVuY2UgPSA8QT4gKGFycjogQXJyYXlMaWtlPE9wdGlvbmFsPEE+Pik6IE9wdGlvbmFsPEFycmF5PEE+PiA9PiB7XG4gIGNvbnN0IHI6IEFbXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHggPSBhcnJbaV07XG4gICAgaWYgKHguaXNTb21lKCkpIHtcbiAgICAgIHIucHVzaCh4LmdldE9yRGllKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gT3B0aW9uYWwubm9uZTxBcnJheTxBPj4oKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIE9wdGlvbmFsLnNvbWUocik7XG59O1xuXG4vKiogQGRlcHJlY2F0ZWQgVXNlIEFyci5maW5kTWFwIGluc3RlYWQuICovXG5leHBvcnQgY29uc3QgZmluZE1hcCA9IEFyci5maW5kTWFwO1xuXG4vKiogTWFwIGVhY2ggZWxlbWVudCBvZiBhbiBhcnJheSB0byBhbiBPcHRpb25hbCBhbmQgY29sbGVjdCB0aGUgcmVzdWx0cy5cbiAqICBJZiBhbGwgcmVzdWx0cyBhcmUgXCJzb21lXCIsIHJldHVybiBPcHRpb25hbC5zb21lIG9mIHRoZSByZXN1bHRzLlxuICogIElmIGFueSByZXN1bHQgaXMgXCJub25lXCIsIHJldHVybiBPcHRpb25hbC5ub25lXG4gKi9cbmV4cG9ydCBjb25zdCB0cmF2ZXJzZSA9IDxBLCBCPiAoYXJyOiBBcnJheUxpa2U8QT4sIGY6IChhOiBBKSA9PiBPcHRpb25hbDxCPik6IE9wdGlvbmFsPEFycmF5PEI+PiA9PlxuICBzZXF1ZW5jZShBcnIubWFwKGFyciwgZikpO1xuXG4vKlxuTm90ZXMgb24gdGhlIGxpZnQgZnVuY3Rpb25zOlxuLSBXZSB1c2VkIHRvIGhhdmUgYSBnZW5lcmljIGxpZnROLCBidXQgd2Ugd2VyZSBjb25jZXJuZWQgYWJvdXQgaXRzIHR5cGUtc2FmZXR5LCBhbmQgdGhlIGJlbG93IHZhcmlhbnRzIHdlcmUgZmFzdGVyIGluIG1pY3JvYmVuY2htYXJrcy5cbi0gVGhlIGdldE9yRGllIGNhbGxzIGFyZSBwYXJ0aWFsIGZ1bmN0aW9ucywgYnV0IGFyZSBjaGVja2VkIGJlZm9yZWhhbmQuIFRoaXMgaXMgZmFzdGVyIGFuZCBtb3JlIGNvbnZlbmllbnQgKGJ1dCBsZXNzIHNhZmUpIHRoYW4gZm9sZHMuXG4tICYmIGlzIHVzZWQgaW5zdGVhZCBvZiBhIGxvb3AgZm9yIHNpbXBsaWNpdHkgYW5kIHBlcmZvcm1hbmNlLlxuKi9cblxuZXhwb3J0IGNvbnN0IGxpZnQyID0gPEEsIEIsIEM+IChvYTogT3B0aW9uYWw8QT4sIG9iOiBPcHRpb25hbDxCPiwgZjogKGE6IEEsIGI6IEIpID0+IEMpOiBPcHRpb25hbDxDPiA9PlxuICBvYS5pc1NvbWUoKSAmJiBvYi5pc1NvbWUoKSA/IE9wdGlvbmFsLnNvbWUoZihvYS5nZXRPckRpZSgpLCBvYi5nZXRPckRpZSgpKSkgOiBPcHRpb25hbC5ub25lPEM+KCk7XG5cbmV4cG9ydCBjb25zdCBsaWZ0MyA9IDxBLCBCLCBDLCBEPiAob2E6IE9wdGlvbmFsPEE+LCBvYjogT3B0aW9uYWw8Qj4sIG9jOiBPcHRpb25hbDxDPiwgZjogKGE6IEEsIGI6IEIsIGM6IEMpID0+IEQpOiBPcHRpb25hbDxEPiA9PlxuICBvYS5pc1NvbWUoKSAmJiBvYi5pc1NvbWUoKSAmJiBvYy5pc1NvbWUoKSA/IE9wdGlvbmFsLnNvbWUoZihvYS5nZXRPckRpZSgpLCBvYi5nZXRPckRpZSgpLCBvYy5nZXRPckRpZSgpKSkgOiBPcHRpb25hbC5ub25lPEQ+KCk7XG5cbmV4cG9ydCBjb25zdCBsaWZ0NCA9IDxBLCBCLCBDLCBELCBFPiAob2E6IE9wdGlvbmFsPEE+LCBvYjogT3B0aW9uYWw8Qj4sIG9jOiBPcHRpb25hbDxDPiwgb2Q6IE9wdGlvbmFsPEQ+LCBmOiAoYTogQSwgYjogQiwgYzogQywgZDogRCkgPT4gRSk6IE9wdGlvbmFsPEU+ID0+XG4gIG9hLmlzU29tZSgpICYmIG9iLmlzU29tZSgpICYmIG9jLmlzU29tZSgpICYmIG9kLmlzU29tZSgpID8gT3B0aW9uYWwuc29tZShmKG9hLmdldE9yRGllKCksIG9iLmdldE9yRGllKCksIG9jLmdldE9yRGllKCksIG9kLmdldE9yRGllKCkpKSA6IE9wdGlvbmFsLm5vbmU8RT4oKTtcblxuZXhwb3J0IGNvbnN0IGxpZnQ1ID0gPEEsIEIsIEMsIEQsIEUsIEY+IChvYTogT3B0aW9uYWw8QT4sIG9iOiBPcHRpb25hbDxCPiwgb2M6IE9wdGlvbmFsPEM+LCBvZDogT3B0aW9uYWw8RD4sIG9lOiBPcHRpb25hbDxFPiwgZjogKGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUpID0+IEYpOiBPcHRpb25hbDxGPiA9PlxuICBvYS5pc1NvbWUoKSAmJiBvYi5pc1NvbWUoKSAmJiBvYy5pc1NvbWUoKSAmJiBvZC5pc1NvbWUoKSAmJiBvZS5pc1NvbWUoKSA/IE9wdGlvbmFsLnNvbWUoZihvYS5nZXRPckRpZSgpLCBvYi5nZXRPckRpZSgpLCBvYy5nZXRPckRpZSgpLCBvZC5nZXRPckRpZSgpLCBvZS5nZXRPckRpZSgpKSkgOiBPcHRpb25hbC5ub25lPEY+KCk7XG5cbmV4cG9ydCBjb25zdCBtYXBGcm9tID0gPEEsIEI+IChhOiBBIHwgbnVsbCB8IHVuZGVmaW5lZCwgZjogKGE6IEEpID0+IEIpOiBPcHRpb25hbDxCPiA9PlxuICAoYSAhPT0gdW5kZWZpbmVkICYmIGEgIT09IG51bGwpID8gT3B0aW9uYWwuc29tZShmKGEpKSA6IE9wdGlvbmFsLm5vbmU8Qj4oKTtcblxuZXhwb3J0IGNvbnN0IGJpbmRGcm9tID0gPEEsIEI+IChhOiBBIHwgbnVsbCB8IHVuZGVmaW5lZCwgZjogKGE6IEEpID0+IE9wdGlvbmFsPEI+KTogT3B0aW9uYWw8Qj4gPT5cbiAgKGEgIT09IHVuZGVmaW5lZCAmJiBhICE9PSBudWxsKSA/IGYoYSkgOiBPcHRpb25hbC5ub25lPEI+KCk7XG5cbmV4cG9ydCBjb25zdCBmbGF0dGVuID0gPFQ+IChvb3Q6IE9wdGlvbmFsPE9wdGlvbmFsPFQ+Pik6IE9wdGlvbmFsPFQ+ID0+IG9vdC5iaW5kKEZ1bi5pZGVudGl0eSk7XG5cbi8vIFRoaXMgY2FuIGhlbHAgd2l0aCB0eXBlIGluZmVyZW5jZSwgYnkgc3BlY2lmeWluZyB0aGUgdHlwZSBwYXJhbSBvbiB0aGUgbm9uZSBjYXNlLCBzbyB0aGUgY2FsbGVyIGRvZXNuJ3QgaGF2ZSB0by5cbmV4cG9ydCBjb25zdCBzb21lSWYgPSA8QT4gKGI6IGJvb2xlYW4sIGE6IEEpOiBPcHRpb25hbDxBPiA9PlxuICBiID8gT3B0aW9uYWwuc29tZShhKSA6IE9wdGlvbmFsLm5vbmU8QT4oKTtcbiIsImltcG9ydCB7IEdsb2JhbCB9IGZyb20gJy4vR2xvYmFsJztcblxuLyoqIHBhdGggOjogKFtTdHJpbmddLCBKc09iaj8pIC0+IEpzT2JqICovXG5leHBvcnQgY29uc3QgcGF0aCA9IDxUPihwYXJ0czogc3RyaW5nW10sIHNjb3BlPzoge30pOiBUIHwgdW5kZWZpbmVkID0+IHtcbiAgbGV0IG8gPSBzY29wZSAhPT0gdW5kZWZpbmVkICYmIHNjb3BlICE9PSBudWxsID8gc2NvcGUgOiBHbG9iYWw7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoICYmIG8gIT09IHVuZGVmaW5lZCAmJiBvICE9PSBudWxsOyArK2kpIHtcbiAgICBvID0gb1twYXJ0c1tpXV07XG4gIH1cbiAgcmV0dXJuIG87XG59O1xuXG4vKiogcmVzb2x2ZSA6OiAoU3RyaW5nLCBKc09iaj8pIC0+IEpzT2JqICovXG5leHBvcnQgY29uc3QgcmVzb2x2ZSA9IDxUPihwOiBzdHJpbmcsIHNjb3BlPzoge30pOiBUIHwgdW5kZWZpbmVkID0+IHtcbiAgY29uc3QgcGFydHMgPSBwLnNwbGl0KCcuJyk7XG4gIHJldHVybiBwYXRoKHBhcnRzLCBzY29wZSk7XG59O1xuXG4vKiogc3RlcCA6OiAoSnNPYmosIFN0cmluZykgLT4gSnNPYmogKi9cbmV4cG9ydCBjb25zdCBzdGVwID0gPFQgZXh0ZW5kcyB7fSwgSyBleHRlbmRzIGtleW9mIFQ+KG86IFQsIHBhcnQ6IEspOiBUW0tdID0+IHtcbiAgaWYgKG9bcGFydF0gPT09IHVuZGVmaW5lZCB8fCBvW3BhcnRdID09PSBudWxsKSB7XG4gICAgb1twYXJ0XSA9IHt9IGFzIFRbS107XG4gIH1cbiAgcmV0dXJuIG9bcGFydF07XG59O1xuXG4vKiogZm9yZ2UgOjogKFtTdHJpbmddLCBKc09iaj8pIC0+IEpzT2JqICovXG5leHBvcnQgY29uc3QgZm9yZ2UgPSA8VCBleHRlbmRzIHN0cmluZ1tdPihwYXJ0czogVCwgdGFyZ2V0Pzoge30pOiB7IFsgSyBpbiBUW251bWJlcl1dOiB7fX0gPT4ge1xuICBsZXQgbyA9IHRhcmdldCAhPT0gdW5kZWZpbmVkID8gdGFyZ2V0IDogR2xvYmFsO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgKytpKSB7XG4gICAgbyA9IHN0ZXAobywgcGFydHNbaV0pO1xuICB9XG4gIHJldHVybiBvO1xufTtcblxuLyoqIG5hbWVzcGFjZSA6OiAoU3RyaW5nLCBKc09iaj8pIC0+IEpzT2JqICovXG5leHBvcnQgY29uc3QgbmFtZXNwYWNlID0gKG5hbWU6IHN0cmluZywgdGFyZ2V0Pzoge30pOiB7IFtrZXk6IHN0cmluZ106IHt9fSA9PiB7XG4gIGNvbnN0IHBhcnRzID0gbmFtZS5zcGxpdCgnLicpO1xuICByZXR1cm4gZm9yZ2UocGFydHMsIHRhcmdldCk7XG59O1xuIiwiaW1wb3J0ICogYXMgU3RyQXBwZW5kIGZyb20gJy4uL3N0ci9TdHJBcHBlbmQnO1xuXG5pbXBvcnQgeyBPcHRpb25hbCB9IGZyb20gJy4vT3B0aW9uYWwnO1xuaW1wb3J0ICogYXMgVHlwZSBmcm9tICcuL1R5cGUnO1xuXG5jb25zdCBjaGVja1JhbmdlID0gKHN0cjogc3RyaW5nLCBzdWJzdHI6IHN0cmluZywgc3RhcnQ6IG51bWJlcik6IGJvb2xlYW4gPT5cbiAgc3Vic3RyID09PSAnJyB8fCBzdHIubGVuZ3RoID49IHN1YnN0ci5sZW5ndGggJiYgc3RyLnN1YnN0cihzdGFydCwgc3RhcnQgKyBzdWJzdHIubGVuZ3RoKSA9PT0gc3Vic3RyO1xuXG4vKiogR2l2ZW4gYSBzdHJpbmcgYW5kIG9iamVjdCwgcGVyZm9ybSB0ZW1wbGF0ZS1yZXBsYWNlbWVudHMgb24gdGhlIHN0cmluZywgYXMgc3BlY2lmaWVkIGJ5IHRoZSBvYmplY3QuXG4gKiBBbnkgdGVtcGxhdGUgZmllbGRzIG9mIHRoZSBmb3JtICR7bmFtZX0gYXJlIHJlcGxhY2VkIGJ5IHRoZSBzdHJpbmcgb3IgbnVtYmVyIHNwZWNpZmllZCBhcyBvYmpbXCJuYW1lXCJdXG4gKiBCYXNlZCBvbiBEb3VnbGFzIENyb2NrZm9yZCdzICdzdXBwbGFudCcgbWV0aG9kIGZvciB0ZW1wbGF0ZS1yZXBsYWNlIG9mIHN0cmluZ3MuIFVzZXMgZGlmZmVyZW50IHRlbXBsYXRlIGZvcm1hdC5cbiAqL1xuZXhwb3J0IGNvbnN0IHN1cHBsYW50ID0gKHN0cjogc3RyaW5nLCBvYmo6IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IG51bWJlcj4pOiBzdHJpbmcgPT4ge1xuICBjb25zdCBpc1N0cmluZ09yTnVtYmVyID0gKGE6IHVua25vd24pOiBhIGlzIHN0cmluZyB8IG51bWJlciA9PiB7XG4gICAgY29uc3QgdCA9IHR5cGVvZiBhO1xuICAgIHJldHVybiB0ID09PSAnc3RyaW5nJyB8fCB0ID09PSAnbnVtYmVyJztcbiAgfTtcblxuICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcJFxceyhbXnt9XSopXFx9L2csXG4gICAgKGZ1bGxNYXRjaDogc3RyaW5nLCBrZXk6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBvYmpba2V5XTtcbiAgICAgIHJldHVybiBpc1N0cmluZ09yTnVtYmVyKHZhbHVlKSA/IHZhbHVlLnRvU3RyaW5nKCkgOiBmdWxsTWF0Y2g7XG4gICAgfVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUxlYWRpbmcgPSAoc3RyOiBzdHJpbmcsIHByZWZpeDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIHN0YXJ0c1dpdGgoc3RyLCBwcmVmaXgpID8gU3RyQXBwZW5kLnJlbW92ZUZyb21TdGFydChzdHIsIHByZWZpeC5sZW5ndGgpIDogc3RyO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZVRyYWlsaW5nID0gKHN0cjogc3RyaW5nLCBzdWZmaXg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBlbmRzV2l0aChzdHIsIHN1ZmZpeCkgPyBTdHJBcHBlbmQucmVtb3ZlRnJvbUVuZChzdHIsIHN1ZmZpeC5sZW5ndGgpIDogc3RyO1xufTtcblxuZXhwb3J0IGNvbnN0IGVuc3VyZUxlYWRpbmcgPSAoc3RyOiBzdHJpbmcsIHByZWZpeDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIHN0YXJ0c1dpdGgoc3RyLCBwcmVmaXgpID8gc3RyIDogU3RyQXBwZW5kLmFkZFRvU3RhcnQoc3RyLCBwcmVmaXgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGVuc3VyZVRyYWlsaW5nID0gKHN0cjogc3RyaW5nLCBzdWZmaXg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBlbmRzV2l0aChzdHIsIHN1ZmZpeCkgPyBzdHIgOiBTdHJBcHBlbmQuYWRkVG9FbmQoc3RyLCBzdWZmaXgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbnRhaW5zID0gKHN0cjogc3RyaW5nLCBzdWJzdHI6IHN0cmluZywgc3RhcnQ6IG51bWJlciA9IDAsIGVuZD86IG51bWJlcik6IGJvb2xlYW4gPT4ge1xuICBjb25zdCBpZHggPSBzdHIuaW5kZXhPZihzdWJzdHIsIHN0YXJ0KTtcbiAgaWYgKGlkeCAhPT0gLTEpIHtcbiAgICByZXR1cm4gVHlwZS5pc1VuZGVmaW5lZChlbmQpID8gdHJ1ZSA6IGlkeCArIHN1YnN0ci5sZW5ndGggPD0gZW5kO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGNhcGl0YWxpemUgPSAoc3RyOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gc3RyID09PSAnJyA/ICcnIDogc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnN1YnN0cmluZygxKTtcbn07XG5cbi8qKiBEb2VzICdzdHInIHN0YXJ0IHdpdGggJ3ByZWZpeCc/XG4gKiAgTm90ZTogYWxsIHN0cmluZ3Mgc3RhcnQgd2l0aCB0aGUgZW1wdHkgc3RyaW5nLlxuICogICAgICAgIE1vcmUgZm9ybWFsbHksIGZvciBhbGwgc3RyaW5ncyB4LCBzdGFydHNXaXRoKHgsIFwiXCIpLlxuICogICAgICAgIFRoaXMgaXMgc28gdGhhdCBmb3IgYWxsIHN0cmluZ3MgeCBhbmQgeSwgc3RhcnRzV2l0aCh5ICsgeCwgeSlcbiAqL1xuZXhwb3J0IGNvbnN0IHN0YXJ0c1dpdGggPSAoc3RyOiBzdHJpbmcsIHByZWZpeDogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gIHJldHVybiBjaGVja1JhbmdlKHN0ciwgcHJlZml4LCAwKTtcbn07XG5cbi8qKiBEb2VzICdzdHInIGVuZCB3aXRoICdzdWZmaXgnP1xuICogIE5vdGU6IGFsbCBzdHJpbmdzIGVuZCB3aXRoIHRoZSBlbXB0eSBzdHJpbmcuXG4gKiAgICAgICAgTW9yZSBmb3JtYWxseSwgZm9yIGFsbCBzdHJpbmdzIHgsIGVuZHNXaXRoKHgsIFwiXCIpLlxuICogICAgICAgIFRoaXMgaXMgc28gdGhhdCBmb3IgYWxsIHN0cmluZ3MgeCBhbmQgeSwgZW5kc1dpdGgoeCArIHksIHkpXG4gKi9cbmV4cG9ydCBjb25zdCBlbmRzV2l0aCA9IChzdHI6IHN0cmluZywgc3VmZml4OiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgcmV0dXJuIGNoZWNrUmFuZ2Uoc3RyLCBzdWZmaXgsIHN0ci5sZW5ndGggLSBzdWZmaXgubGVuZ3RoKTtcbn07XG5cbmNvbnN0IGJsYW5rID0gKHI6IFJlZ0V4cCkgPT4gKHM6IHN0cmluZyk6IHN0cmluZyA9PlxuICBzLnJlcGxhY2UociwgJycpO1xuXG4vKiogcmVtb3ZlcyBhbGwgbGVhZGluZyBhbmQgdHJhaWxpbmcgc3BhY2VzICovXG5leHBvcnQgY29uc3QgdHJpbTogKHM6IHN0cmluZykgPT4gc3RyaW5nID1cbiAgYmxhbmsoL15cXHMrfFxccyskL2cpO1xuXG5leHBvcnQgY29uc3QgbFRyaW06IChzOiBzdHJpbmcpID0+IHN0cmluZyA9XG4gIGJsYW5rKC9eXFxzKy9nKTtcblxuZXhwb3J0IGNvbnN0IHJUcmltOiAoczogc3RyaW5nKSA9PiBzdHJpbmcgPVxuICBibGFuaygvXFxzKyQvZyk7XG5cbmV4cG9ydCBjb25zdCBpc05vdEVtcHR5ID0gKHM6IHN0cmluZyk6IGJvb2xlYW4gPT4gcy5sZW5ndGggPiAwO1xuXG5leHBvcnQgY29uc3QgaXNFbXB0eSA9IChzOiBzdHJpbmcpOiBib29sZWFuID0+ICFpc05vdEVtcHR5KHMpO1xuXG5leHBvcnQgY29uc3QgcmVwZWF0ID0gKHM6IHN0cmluZywgY291bnQ6IG51bWJlcik6IHN0cmluZyA9PiBjb3VudCA8PSAwID8gJycgOiBuZXcgQXJyYXkoY291bnQgKyAxKS5qb2luKHMpO1xuXG5leHBvcnQgY29uc3QgZnJvbUNvZGVQb2ludCA9IFN0cmluZy5mcm9tQ29kZVBvaW50O1xuXG5leHBvcnQgY29uc3QgdG9JbnQgPSAodmFsdWU6IHN0cmluZywgcmFkaXg6IG51bWJlciA9IDEwKTogT3B0aW9uYWw8bnVtYmVyPiA9PiB7XG4gIGNvbnN0IG51bSA9IHBhcnNlSW50KHZhbHVlLCByYWRpeCk7XG4gIHJldHVybiBpc05hTihudW0pID8gT3B0aW9uYWwubm9uZSgpIDogT3B0aW9uYWwuc29tZShudW0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHRvRmxvYXQgPSAodmFsdWU6IHN0cmluZyk6IE9wdGlvbmFsPG51bWJlcj4gPT4ge1xuICBjb25zdCBudW0gPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgcmV0dXJuIGlzTmFOKG51bSkgPyBPcHRpb25hbC5ub25lKCkgOiBPcHRpb25hbC5zb21lKG51bSk7XG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXdyYXBwZXItb2JqZWN0LXR5cGVzICovXG5jb25zdCBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcblxuaW50ZXJmYWNlIENvbnN0cnVjdG9yPFQgZXh0ZW5kcyBPYmplY3Q+IHtcbiAgcmVhZG9ubHkgcHJvdG90eXBlOiBUO1xuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG59XG5cbmNvbnN0IGhhc1Byb3RvID0gPFQgZXh0ZW5kcyBPYmplY3Q+KHY6IE9iamVjdCwgY29uc3RydWN0b3I6IENvbnN0cnVjdG9yPFQ+LCBwcmVkaWNhdGU6ICh2OiBPYmplY3QsIHByb3RvdHlwZTogVCkgPT4gYm9vbGVhbik6IGJvb2xlYW4gPT4ge1xuICBpZiAocHJlZGljYXRlKHYsIGNvbnN0cnVjdG9yLnByb3RvdHlwZSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICAvLyBTdHJpbmctYmFzZWQgZmFsbGJhY2sgdGltZVxuICAgIHJldHVybiB2LmNvbnN0cnVjdG9yPy5uYW1lID09PSBjb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG59O1xuXG5jb25zdCB0eXBlT2YgPSAoeDogYW55KTogc3RyaW5nID0+IHtcbiAgY29uc3QgdCA9IHR5cGVvZiB4O1xuICBpZiAoeCA9PT0gbnVsbCkge1xuICAgIHJldHVybiAnbnVsbCc7XG4gIH0gZWxzZSBpZiAodCA9PT0gJ29iamVjdCcgJiYgQXJyYXkuaXNBcnJheSh4KSkge1xuICAgIHJldHVybiAnYXJyYXknO1xuICB9IGVsc2UgaWYgKHQgPT09ICdvYmplY3QnICYmIGhhc1Byb3RvKHgsIFN0cmluZywgKG8sIHByb3RvKSA9PiBwcm90by5pc1Byb3RvdHlwZU9mKG8pKSkge1xuICAgIHJldHVybiAnc3RyaW5nJztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdDtcbiAgfVxufTtcblxuY29uc3QgaXNUeXBlID0gPFlvbG8+KHR5cGU6IHN0cmluZykgPT4gKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBZb2xvID0+XG4gIHR5cGVPZih2YWx1ZSkgPT09IHR5cGU7XG5cbmNvbnN0IGlzU2ltcGxlVHlwZSA9IDxZb2xvPih0eXBlOiBzdHJpbmcpID0+ICh2YWx1ZTogYW55KTogdmFsdWUgaXMgWW9sbyA9PlxuICB0eXBlb2YgdmFsdWUgPT09IHR5cGU7XG5cbmNvbnN0IGVxID0gPFQ+ICh0OiBUKSA9PiAoYTogYW55KTogYSBpcyBUID0+XG4gIHQgPT09IGE7XG5cbmV4cG9ydCBjb25zdCBpcyA9IDxFIGV4dGVuZHMgT2JqZWN0Pih2YWx1ZTogYW55LCBjb25zdHJ1Y3RvcjogQ29uc3RydWN0b3I8RT4pOiB2YWx1ZSBpcyBFID0+XG4gIGlzT2JqZWN0KHZhbHVlKSAmJiBoYXNQcm90bzxFPih2YWx1ZSwgY29uc3RydWN0b3IsIChvLCBwcm90bykgPT4gZ2V0UHJvdG90eXBlT2YobykgPT09IHByb3RvKTtcblxuZXhwb3J0IGNvbnN0IGlzU3RyaW5nOiAodmFsdWU6IGFueSkgPT4gdmFsdWUgaXMgc3RyaW5nID1cbiAgaXNUeXBlKCdzdHJpbmcnKTtcblxuZXhwb3J0IGNvbnN0IGlzT2JqZWN0OiAodmFsdWU6IGFueSkgPT4gdmFsdWUgaXMgT2JqZWN0ID1cbiAgaXNUeXBlKCdvYmplY3QnKTtcblxuZXhwb3J0IGNvbnN0IGlzUGxhaW5PYmplY3QgPSAodmFsdWU6IHVua25vd24pOiB2YWx1ZSBpcyBPYmplY3QgPT5cbiAgaXModmFsdWUsIE9iamVjdCk7XG5cbmV4cG9ydCBjb25zdCBpc0FycmF5OiAodmFsdWU6IGFueSkgPT4gdmFsdWUgaXMgQXJyYXk8dW5rbm93bj4gPVxuICBpc1R5cGUoJ2FycmF5Jyk7XG5cbmV4cG9ydCBjb25zdCBpc051bGw6IChhOiBhbnkpID0+IGEgaXMgbnVsbCA9XG4gIGVxKG51bGwpO1xuXG5leHBvcnQgY29uc3QgaXNCb29sZWFuOiAodmFsdWU6IGFueSkgPT4gdmFsdWUgaXMgYm9vbGVhbiA9XG4gIGlzU2ltcGxlVHlwZTxib29sZWFuPignYm9vbGVhbicpO1xuXG5leHBvcnQgY29uc3QgaXNVbmRlZmluZWQ6IChhOiBhbnkpID0+IGEgaXMgdW5kZWZpbmVkID1cbiAgZXEodW5kZWZpbmVkKTtcblxuZXhwb3J0IGNvbnN0IGlzTnVsbGFibGUgPSAoYTogYW55KTogYSBpcyBudWxsIHwgdW5kZWZpbmVkID0+XG4gIGEgPT09IG51bGwgfHwgYSA9PT0gdW5kZWZpbmVkO1xuXG5leHBvcnQgY29uc3QgaXNOb25OdWxsYWJsZSA9IDxBPiAoYTogQSB8IG51bGwgfCB1bmRlZmluZWQpOiBhIGlzIE5vbk51bGxhYmxlPEE+ID0+XG4gICFpc051bGxhYmxlKGEpO1xuXG5leHBvcnQgY29uc3QgaXNGdW5jdGlvbjogKHZhbHVlOiBhbnkpID0+IHZhbHVlIGlzIEZ1bmN0aW9uID1cbiAgaXNTaW1wbGVUeXBlPEZ1bmN0aW9uPignZnVuY3Rpb24nKTtcblxuZXhwb3J0IGNvbnN0IGlzTnVtYmVyOiAodmFsdWU6IGFueSkgPT4gdmFsdWUgaXMgbnVtYmVyID1cbiAgaXNTaW1wbGVUeXBlPG51bWJlcj4oJ251bWJlcicpO1xuXG5leHBvcnQgY29uc3QgaXNBcnJheU9mID0gPEU+KHZhbHVlOiBhbnksIHByZWQ6ICh4OiBhbnkpID0+IHggaXMgRSk6IHZhbHVlIGlzIEFycmF5PEU+ID0+IHtcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHZhbHVlLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICBpZiAoIShwcmVkKHZhbHVlW2ldKSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQgY29uc3QgaXNQcm9taXNlTGlrZSA9ICh4OiBhbnkpOiB4IGlzIFByb21pc2U8dW5rbm93bj4gPT5cbiAgaXNPYmplY3QoeClcbiAgJiYgaXNGdW5jdGlvbih4LnRoZW4pXG4gICYmIGlzRnVuY3Rpb24oeC5jYXRjaCk7XG4iLCJleHBvcnQgY29uc3QgYWRkVG9TdGFydCA9IChzdHI6IHN0cmluZywgcHJlZml4OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gcHJlZml4ICsgc3RyO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZFRvRW5kID0gKHN0cjogc3RyaW5nLCBzdWZmaXg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBzdHIgKyBzdWZmaXg7XG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlRnJvbVN0YXJ0ID0gKHN0cjogc3RyaW5nLCBudW1DaGFyczogbnVtYmVyKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIHN0ci5zdWJzdHJpbmcobnVtQ2hhcnMpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUZyb21FbmQgPSAoc3RyOiBzdHJpbmcsIG51bUNoYXJzOiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gc3RyLnN1YnN0cmluZygwLCBzdHIubGVuZ3RoIC0gbnVtQ2hhcnMpO1xufTtcbiIsImltcG9ydCB7IFJlc29sdmUsIFR5cGUgfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5pbXBvcnQgKiBhcyBHbG9iYWwgZnJvbSAnLi4vdXRpbC9HbG9iYWwnO1xuXG5jb25zdCBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcblxuLypcbiAqIElFOSBhbmQgYWJvdmVcbiAqXG4gKiBNRE4gbm8gdXNlIG9uIHRoaXMgb25lLCBidXQgaGVyZSdzIHRoZSBsaW5rIGFueXdheTpcbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL2RvY3MvV2ViL0FQSS9IVE1MRWxlbWVudFxuICovXG5jb25zdCBzYW5kSFRNTEVsZW1lbnQgPSAoc2NvcGU6IFdpbmRvdyB8IHVuZGVmaW5lZCkgPT4ge1xuICByZXR1cm4gR2xvYmFsLmdldE9yRGllKCdIVE1MRWxlbWVudCcsIHNjb3BlKSBhcyB0eXBlb2YgSFRNTEVsZW1lbnQ7XG59O1xuXG5jb25zdCBpc1Byb3RvdHlwZU9mID0gKHg6IGFueSk6IHggaXMgSFRNTEVsZW1lbnQgPT4ge1xuICAvLyB1c2UgUmVzb2x2ZSB0byBnZXQgdGhlIHdpbmRvdyBvYmplY3QgZm9yIHggYW5kIGp1c3QgcmV0dXJuIHVuZGVmaW5lZCBpZiBpdCBjYW4ndCBmaW5kIGl0LlxuICAvLyB1bmRlZmluZWQgc2NvcGUgbGF0ZXIgdHJpZ2dlcnMgdXNpbmcgdGhlIGdsb2JhbCB3aW5kb3cuXG4gIGNvbnN0IHNjb3BlOiBXaW5kb3cgfCB1bmRlZmluZWQgPSBSZXNvbHZlLnJlc29sdmUoJ293bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcnLCB4KTtcblxuICAvLyBUSU5ZLTczNzQ6IFdlIGNhbid0IHJlbHkgb24gbG9va2luZyBhdCB0aGUgb3duZXIgd2luZG93IEhUTUxFbGVtZW50IGFzIHRoZSBlbGVtZW50IG1heSBoYXZlXG4gIC8vIGJlZW4gY29uc3RydWN0ZWQgaW4gYSBkaWZmZXJlbnQgd2luZG93IGFuZCB0aGVuIGFwcGVuZGVkIHRvIHRoZSBjdXJyZW50IHdpbmRvdyBkb2N1bWVudC5cbiAgcmV0dXJuIFR5cGUuaXNPYmplY3QoeCkgJiYgKHNhbmRIVE1MRWxlbWVudChzY29wZSkucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoeCkgfHwgL15IVE1MXFx3KkVsZW1lbnQkLy50ZXN0KGdldFByb3RvdHlwZU9mKHgpLmNvbnN0cnVjdG9yLm5hbWUpKTtcbn07XG5cbmV4cG9ydCB7XG4gIGlzUHJvdG90eXBlT2Zcbn07XG4iLCJpbXBvcnQgeyBSZXNvbHZlIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuY29uc3QgdW5zYWZlID0gPFQ+KG5hbWU6IHN0cmluZywgc2NvcGU/OiB7fSk6IFQgfCB1bmRlZmluZWQgPT4ge1xuICByZXR1cm4gUmVzb2x2ZS5yZXNvbHZlKG5hbWUsIHNjb3BlKTtcbn07XG5cbmNvbnN0IGdldE9yRGllID0gPFQ+KG5hbWU6IHN0cmluZywgc2NvcGU/OiB7fSk6IFQgPT4ge1xuICBjb25zdCBhY3R1YWwgPSB1bnNhZmU8VD4obmFtZSwgc2NvcGUpO1xuXG4gIGlmIChhY3R1YWwgPT09IHVuZGVmaW5lZCB8fCBhY3R1YWwgPT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IobmFtZSArICcgbm90IGF2YWlsYWJsZSBvbiB0aGlzIGJyb3dzZXInKTtcbiAgfVxuICByZXR1cm4gYWN0dWFsO1xufTtcblxuZXhwb3J0IHtcbiAgZ2V0T3JEaWVcbn07XG4iLCJpbXBvcnQgdHlwZSB7IE9wdGlvbmFsIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuLyoqXG4gKiBBcHBsaWVzIGYgcmVwZWF0ZWRseSB1bnRpbCBpdCBjb21wbGV0ZXMgKGJ5IHJldHVybmluZyBPcHRpb25hbC5ub25lKCkpLlxuICpcbiAqIE5vcm1hbGx5IHdvdWxkIGp1c3QgdXNlIHJlY3Vyc2lvbiwgYnV0IEphdmFTY3JpcHQgbGFja3MgdGFpbCBjYWxsIG9wdGltaXNhdGlvbi5cbiAqXG4gKiBUaGlzIGlzIHdoYXQgcmVjdXJzaW9uIGxvb2tzIGxpa2Ugd2hlbiBtYW51YWxseSB1bnJhdmVsbGVkIDopXG4gKi9cbmNvbnN0IHRvQXJyYXkgPSA8VCA9IGFueSwgVSBleHRlbmRzIFQgPSBUPiAodGFyZ2V0OiBULCBmOiAodDogVCkgPT4gT3B0aW9uYWw8VT4pOiBVW10gPT4ge1xuICBjb25zdCByOiBVW10gPSBbXTtcblxuICBjb25zdCByZWN1cnNlID0gKGU6IFUpID0+IHtcbiAgICByLnB1c2goZSk7XG4gICAgcmV0dXJuIGYoZSk7XG4gIH07XG5cbiAgbGV0IGN1ciA9IGYodGFyZ2V0KTtcbiAgZG8ge1xuICAgIGN1ciA9IGN1ci5iaW5kKHJlY3Vyc2UpO1xuICB9IHdoaWxlIChjdXIuaXNTb21lKCkpO1xuXG4gIHJldHVybiByO1xufTtcblxuZXhwb3J0IHtcbiAgdG9BcnJheVxufTtcbiIsImltcG9ydCB7IEFyciwgRnVuIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0IHR5cGUgeyBTdWdhckVsZW1lbnQgfSBmcm9tICcuLi9ub2RlL1N1Z2FyRWxlbWVudCc7XG5pbXBvcnQgKiBhcyBTZWxlY3RvcnMgZnJvbSAnLi4vc2VhcmNoL1NlbGVjdG9ycyc7XG5cbmNvbnN0IGVxID0gKGUxOiBTdWdhckVsZW1lbnQ8dW5rbm93bj4sIGUyOiBTdWdhckVsZW1lbnQ8dW5rbm93bj4pOiBib29sZWFuID0+XG4gIGUxLmRvbSA9PT0gZTIuZG9tO1xuXG5jb25zdCBpc0VxdWFsTm9kZSA9IChlMTogU3VnYXJFbGVtZW50PE5vZGU+LCBlMjogU3VnYXJFbGVtZW50PE5vZGU+KTogYm9vbGVhbiA9PlxuICBlMS5kb20uaXNFcXVhbE5vZGUoZTIuZG9tKTtcblxuY29uc3QgbWVtYmVyID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDx1bmtub3duPiwgZWxlbWVudHM6IFN1Z2FyRWxlbWVudDx1bmtub3duPltdKTogYm9vbGVhbiA9PlxuICBBcnIuZXhpc3RzKGVsZW1lbnRzLCBGdW4uY3VycnkoZXEsIGVsZW1lbnQpKTtcblxuLy8gUmV0dXJuczogdHJ1ZSBpZiBub2RlIGUxIGNvbnRhaW5zIGUyLCBvdGhlcndpc2UgZmFsc2UuXG4vLyAocmV0dXJucyBmYWxzZSBpZiBlMT09PWUyOiBBIG5vZGUgZG9lcyBub3QgY29udGFpbiBpdHNlbGYpLlxuY29uc3QgY29udGFpbnMgPSAoZTE6IFN1Z2FyRWxlbWVudDxOb2RlPiwgZTI6IFN1Z2FyRWxlbWVudDxOb2RlPik6IGJvb2xlYW4gPT4ge1xuICBjb25zdCBkMSA9IGUxLmRvbTtcbiAgY29uc3QgZDIgPSBlMi5kb207XG4gIHJldHVybiBkMSA9PT0gZDIgPyBmYWxzZSA6IGQxLmNvbnRhaW5zKGQyKTtcbn07XG5cbmNvbnN0IGlzID0gU2VsZWN0b3JzLmlzO1xuXG5leHBvcnQge1xuICBlcSxcbiAgaXNFcXVhbE5vZGUsXG4gIG1lbWJlcixcbiAgY29udGFpbnMsXG4gIC8vIE9ubHkgdXNlZCBieSBEb21Vbml2ZXJzZS4gUmVtb3ZlIChvciBzaG91bGQgU2VsZWN0b3JzLmlzIG1vdmUgaGVyZT8pXG4gIGlzXG59O1xuIiwiY29uc3QgQVRUUklCVVRFID0gMjtcbmNvbnN0IENEQVRBX1NFQ1RJT04gPSA0O1xuY29uc3QgQ09NTUVOVCA9IDg7XG5jb25zdCBET0NVTUVOVCA9IDk7XG5jb25zdCBET0NVTUVOVF9UWVBFID0gMTA7XG5jb25zdCBET0NVTUVOVF9GUkFHTUVOVCA9IDExO1xuY29uc3QgRUxFTUVOVCA9IDE7XG5jb25zdCBURVhUID0gMztcbmNvbnN0IFBST0NFU1NJTkdfSU5TVFJVQ1RJT04gPSA3O1xuY29uc3QgRU5USVRZX1JFRkVSRU5DRSA9IDU7XG5jb25zdCBFTlRJVFkgPSA2O1xuY29uc3QgTk9UQVRJT04gPSAxMjtcblxuZXhwb3J0IHtcbiAgQVRUUklCVVRFLFxuICBDREFUQV9TRUNUSU9OLFxuICBDT01NRU5ULFxuICBET0NVTUVOVCxcbiAgRE9DVU1FTlRfVFlQRSxcbiAgRE9DVU1FTlRfRlJBR01FTlQsXG4gIEVMRU1FTlQsXG4gIFRFWFQsXG4gIFBST0NFU1NJTkdfSU5TVFJVQ1RJT04sXG4gIEVOVElUWV9SRUZFUkVOQ0UsXG4gIEVOVElUWSxcbiAgTk9UQVRJT05cbn07XG4iLCJpbXBvcnQgeyBGdW4gfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5pbXBvcnQgeyBTdWdhckVsZW1lbnQgfSBmcm9tICcuL1N1Z2FyRWxlbWVudCc7XG5pbXBvcnQgKiBhcyBTdWdhck5vZGUgZnJvbSAnLi9TdWdhck5vZGUnO1xuaW1wb3J0IHsgZ2V0U2hhZG93SG9zdCwgZ2V0U2hhZG93Um9vdCB9IGZyb20gJy4vU3VnYXJTaGFkb3dEb20nO1xuXG4vLyBOb2RlLmNvbnRhaW5zKCkgaXMgdmVyeSwgdmVyeSwgdmVyeSBnb29kIHBlcmZvcm1hbmNlXG4vLyBodHRwOi8vanNwZXJmLmNvbS9jbG9zZXN0LXZzLWNvbnRhaW5zLzVcbmNvbnN0IGluQm9keSA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBib29sZWFuID0+IHtcbiAgLy8gVGVjaG5pY2FsbHkgdGhpcyBpcyBvbmx5IHJlcXVpcmVkIG9uIElFLCB3aGVyZSBjb250YWlucygpIHJldHVybnMgZmFsc2UgZm9yIHRleHQgbm9kZXMuXG4gIC8vIEJ1dCBpdCdzIGNoZWFwIGVub3VnaCB0byBydW4gZXZlcnl3aGVyZSBhbmQgU3VnYXIgZG9lc24ndCBoYXZlIHBsYXRmb3JtIGRldGVjdGlvbiAoeWV0KS5cbiAgY29uc3QgZG9tID0gU3VnYXJOb2RlLmlzVGV4dChlbGVtZW50KSA/IGVsZW1lbnQuZG9tLnBhcmVudE5vZGUgOiBlbGVtZW50LmRvbTtcblxuICAvLyB1c2Ugb3duZXJEb2N1bWVudC5ib2R5IHRvIGVuc3VyZSB0aGlzIHdvcmtzIGluc2lkZSBpZnJhbWVzLlxuICAvLyBOb3JtYWxseSBjb250YWlucyBpcyBiYWQgYmVjYXVzZSBhbiBlbGVtZW50IFwiY29udGFpbnNcIiBpdHNlbGYsIGJ1dCBoZXJlIHdlIHdhbnQgdGhhdC5cbiAgaWYgKGRvbSA9PT0gdW5kZWZpbmVkIHx8IGRvbSA9PT0gbnVsbCB8fCBkb20ub3duZXJEb2N1bWVudCA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGRvYyA9IGRvbS5vd25lckRvY3VtZW50O1xuICByZXR1cm4gZ2V0U2hhZG93Um9vdChTdWdhckVsZW1lbnQuZnJvbURvbShkb20pKS5mb2xkKFxuICAgICgpID0+IGRvYy5ib2R5LmNvbnRhaW5zKGRvbSksXG4gICAgRnVuLmNvbXBvc2UxKGluQm9keSwgZ2V0U2hhZG93SG9zdClcbiAgKTtcbn07XG5cbmNvbnN0IGJvZHkgPSAoKTogU3VnYXJFbGVtZW50PEhUTUxFbGVtZW50PiA9PlxuICBnZXRCb2R5KFN1Z2FyRWxlbWVudC5mcm9tRG9tKGRvY3VtZW50KSk7XG5cbmNvbnN0IGdldEJvZHkgPSAoZG9jOiBTdWdhckVsZW1lbnQ8RG9jdW1lbnQ+KTogU3VnYXJFbGVtZW50PEhUTUxFbGVtZW50PiA9PiB7XG4gIGNvbnN0IGIgPSBkb2MuZG9tLmJvZHk7XG4gIGlmIChiID09PSBudWxsIHx8IGIgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignQm9keSBpcyBub3QgYXZhaWxhYmxlIHlldCcpO1xuICB9XG4gIHJldHVybiBTdWdhckVsZW1lbnQuZnJvbURvbShiKTtcbn07XG5cbmV4cG9ydCB7XG4gIGJvZHksXG4gIGdldEJvZHksXG4gIGluQm9keVxufTtcbiIsImltcG9ydCB7IE9wdGlvbmFsIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0IHR5cGUgeyBIVE1MRWxlbWVudEZ1bGxUYWdOYW1lTWFwIH0gZnJvbSAnLi4vLi4vYWxpZW4vRG9tVHlwZXMnO1xuXG5pbnRlcmZhY2UgU3VnYXJFbGVtZW50PFQgPSBhbnk+IHtcbiAgcmVhZG9ubHkgZG9tOiBUO1xufVxuXG5jb25zdCBmcm9tSHRtbCA9IDxFIGV4dGVuZHMgTm9kZSA9IE5vZGUgJiBDaGlsZE5vZGU+IChodG1sOiBzdHJpbmcsIHNjb3BlPzogRG9jdW1lbnQgfCBudWxsKTogU3VnYXJFbGVtZW50PEU+ID0+IHtcbiAgY29uc3QgZG9jID0gc2NvcGUgfHwgZG9jdW1lbnQ7XG4gIGNvbnN0IGRpdiA9IGRvYy5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LmlubmVySFRNTCA9IGh0bWw7XG4gIGlmICghZGl2Lmhhc0NoaWxkTm9kZXMoKSB8fCBkaXYuY2hpbGROb2Rlcy5sZW5ndGggPiAxKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9ICdIVE1MIGRvZXMgbm90IGhhdmUgYSBzaW5nbGUgcm9vdCBub2RlJztcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSwgaHRtbCk7XG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICB9XG4gIHJldHVybiBmcm9tRG9tKGRpdi5jaGlsZE5vZGVzWzBdIGFzIHVua25vd24gYXMgRSk7XG59O1xuXG5jb25zdCBmcm9tVGFnOiB7XG4gIDxLIGV4dGVuZHMga2V5b2YgSFRNTEVsZW1lbnRGdWxsVGFnTmFtZU1hcD4odGFnOiBLLCBzY29wZT86IERvY3VtZW50IHwgbnVsbCk6IFN1Z2FyRWxlbWVudDxIVE1MRWxlbWVudEZ1bGxUYWdOYW1lTWFwW0tdPjtcbiAgKHRhZzogc3RyaW5nLCBzY29wZT86IERvY3VtZW50IHwgbnVsbCk6IFN1Z2FyRWxlbWVudDxIVE1MRWxlbWVudD47XG59ID0gKHRhZzogc3RyaW5nLCBzY29wZT86IERvY3VtZW50IHwgbnVsbCk6IFN1Z2FyRWxlbWVudDxIVE1MRWxlbWVudD4gPT4ge1xuICBjb25zdCBkb2MgPSBzY29wZSB8fCBkb2N1bWVudDtcbiAgY29uc3Qgbm9kZSA9IGRvYy5jcmVhdGVFbGVtZW50KHRhZyk7XG4gIHJldHVybiBmcm9tRG9tKG5vZGUpO1xufTtcblxuY29uc3QgZnJvbVRleHQgPSAodGV4dDogc3RyaW5nLCBzY29wZT86IERvY3VtZW50IHwgbnVsbCk6IFN1Z2FyRWxlbWVudDxUZXh0PiA9PiB7XG4gIGNvbnN0IGRvYyA9IHNjb3BlIHx8IGRvY3VtZW50O1xuICBjb25zdCBub2RlID0gZG9jLmNyZWF0ZVRleHROb2RlKHRleHQpO1xuICByZXR1cm4gZnJvbURvbShub2RlKTtcbn07XG5cbmNvbnN0IGZyb21Eb20gPSA8VCBleHRlbmRzIE5vZGUgfCBXaW5kb3c+IChub2RlOiBUKTogU3VnYXJFbGVtZW50PFQ+ID0+IHtcbiAgLy8gVE9ETzogQ29uc2lkZXIgcmVtb3ZpbmcgdGhpcyBjaGVjaywgYnV0IGxlZnQgYXRtIGZvciBzYWZldHlcbiAgaWYgKG5vZGUgPT09IG51bGwgfHwgbm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdOb2RlIGNhbm5vdCBiZSBudWxsIG9yIHVuZGVmaW5lZCcpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZG9tOiBub2RlXG4gIH07XG59O1xuXG5jb25zdCBmcm9tUG9pbnQgPSAoZG9jRWxtOiBTdWdhckVsZW1lbnQ8RG9jdW1lbnQ+LCB4OiBudW1iZXIsIHk6IG51bWJlcik6IE9wdGlvbmFsPFN1Z2FyRWxlbWVudDxFbGVtZW50Pj4gPT5cbiAgT3B0aW9uYWwuZnJvbShkb2NFbG0uZG9tLmVsZW1lbnRGcm9tUG9pbnQoeCwgeSkpLm1hcChmcm9tRG9tKTtcblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhcmlhYmxlLW5hbWVcbmNvbnN0IFN1Z2FyRWxlbWVudCA9IHtcbiAgZnJvbUh0bWwsXG4gIGZyb21UYWcsXG4gIGZyb21UZXh0LFxuICBmcm9tRG9tLFxuICBmcm9tUG9pbnRcbn07XG5cbmV4cG9ydCB7XG4gIFN1Z2FyRWxlbWVudFxufTtcbiIsImltcG9ydCB7IFN1Z2FyRWxlbWVudCB9IGZyb20gJy4vU3VnYXJFbGVtZW50JztcblxuZXhwb3J0IGNvbnN0IGhlYWQgPSAoKTogU3VnYXJFbGVtZW50PEhUTUxIZWFkRWxlbWVudD4gPT4gZ2V0SGVhZChTdWdhckVsZW1lbnQuZnJvbURvbShkb2N1bWVudCkpO1xuXG5leHBvcnQgY29uc3QgZ2V0SGVhZCA9IChkb2M6IFN1Z2FyRWxlbWVudDxEb2N1bWVudD4pOiBTdWdhckVsZW1lbnQ8SFRNTEhlYWRFbGVtZW50PiA9PiB7XG4gIC8qXG4gICAqIElFOSBhbmQgYWJvdmUgcGVyXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Eb2N1bWVudC9oZWFkXG4gICAqL1xuICBjb25zdCBiID0gZG9jLmRvbS5oZWFkO1xuICBpZiAoYiA9PT0gbnVsbCB8fCBiID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0hlYWQgaXMgbm90IGF2YWlsYWJsZSB5ZXQnKTtcbiAgfVxuICByZXR1cm4gU3VnYXJFbGVtZW50LmZyb21Eb20oYik7XG59O1xuIiwiaW1wb3J0IHsgU2FuZEhUTUxFbGVtZW50IH0gZnJvbSAnQGVwaG94L3NhbmQnO1xuXG5pbXBvcnQgdHlwZSB7IEhUTUxFbGVtZW50RnVsbFRhZ05hbWVNYXAgfSBmcm9tICcuLi8uLi9hbGllbi9Eb21UeXBlcyc7XG5cbmltcG9ydCAqIGFzIE5vZGVUeXBlcyBmcm9tICcuL05vZGVUeXBlcyc7XG5pbXBvcnQgdHlwZSB7IFN1Z2FyRWxlbWVudCB9IGZyb20gJy4vU3VnYXJFbGVtZW50JztcblxuY29uc3QgbmFtZSA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBzdHJpbmcgPT4ge1xuICBjb25zdCByID0gZWxlbWVudC5kb20ubm9kZU5hbWU7XG4gIHJldHVybiByLnRvTG93ZXJDYXNlKCk7XG59O1xuXG5jb25zdCB0eXBlID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPik6IG51bWJlciA9PlxuICBlbGVtZW50LmRvbS5ub2RlVHlwZTtcblxuY29uc3QgdmFsdWUgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KTogc3RyaW5nIHwgbnVsbCA9PlxuICBlbGVtZW50LmRvbS5ub2RlVmFsdWU7XG5cbmNvbnN0IGlzVHlwZSA9IDxFIGV4dGVuZHMgTm9kZT4gKHQ6IG51bWJlcikgPT4gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPik6IGVsZW1lbnQgaXMgU3VnYXJFbGVtZW50PEU+ID0+XG4gIHR5cGUoZWxlbWVudCkgPT09IHQ7XG5cbmNvbnN0IGlzQ29tbWVudCA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBlbGVtZW50IGlzIFN1Z2FyRWxlbWVudDxDb21tZW50PiA9PlxuICB0eXBlKGVsZW1lbnQpID09PSBOb2RlVHlwZXMuQ09NTUVOVCB8fCBuYW1lKGVsZW1lbnQpID09PSAnI2NvbW1lbnQnO1xuXG5jb25zdCBpc0hUTUxFbGVtZW50ID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPik6IGVsZW1lbnQgaXMgU3VnYXJFbGVtZW50PEhUTUxFbGVtZW50PiA9PlxuICBpc0VsZW1lbnQoZWxlbWVudCkgJiYgU2FuZEhUTUxFbGVtZW50LmlzUHJvdG90eXBlT2YoZWxlbWVudC5kb20pO1xuXG5jb25zdCBpc0VsZW1lbnQgPSBpc1R5cGU8RWxlbWVudD4oTm9kZVR5cGVzLkVMRU1FTlQpO1xuY29uc3QgaXNUZXh0ID0gaXNUeXBlPFRleHQ+KE5vZGVUeXBlcy5URVhUKTtcbmNvbnN0IGlzRG9jdW1lbnQgPSBpc1R5cGU8RG9jdW1lbnQ+KE5vZGVUeXBlcy5ET0NVTUVOVCk7XG5jb25zdCBpc0RvY3VtZW50RnJhZ21lbnQgPSBpc1R5cGU8RG9jdW1lbnRGcmFnbWVudD4oTm9kZVR5cGVzLkRPQ1VNRU5UX0ZSQUdNRU5UKTtcblxuY29uc3QgaXNUYWcgPSA8SyBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50RnVsbFRhZ05hbWVNYXA+KHRhZzogSykgPT4gKGU6IFN1Z2FyRWxlbWVudDxOb2RlPik6IGUgaXMgU3VnYXJFbGVtZW50PEhUTUxFbGVtZW50RnVsbFRhZ05hbWVNYXBbS10+ID0+XG4gIGlzRWxlbWVudChlKSAmJiBuYW1lKGUpID09PSB0YWc7XG5cbmV4cG9ydCB7XG4gIG5hbWUsXG4gIHR5cGUsXG4gIHZhbHVlLFxuICBpc0VsZW1lbnQsXG4gIGlzSFRNTEVsZW1lbnQsXG4gIGlzVGV4dCxcbiAgaXNEb2N1bWVudCxcbiAgaXNEb2N1bWVudEZyYWdtZW50LFxuICBpc0NvbW1lbnQsXG4gIGlzVGFnXG59O1xuIiwiaW1wb3J0IHsgQXJyLCBPcHRpb25hbCwgVHlwZSB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmltcG9ydCB0eXBlIHsgSFRNTEVsZW1lbnRGdWxsVGFnTmFtZU1hcCB9IGZyb20gJy4uLy4uL2FsaWVuL0RvbVR5cGVzJztcbmltcG9ydCAqIGFzIFRyYXZlcnNlIGZyb20gJy4uL3NlYXJjaC9UcmF2ZXJzZSc7XG5cbmltcG9ydCB7IFN1Z2FyRWxlbWVudCB9IGZyb20gJy4vU3VnYXJFbGVtZW50JztcbmltcG9ydCAqIGFzIFN1Z2FySGVhZCBmcm9tICcuL1N1Z2FySGVhZCc7XG5pbXBvcnQgKiBhcyBTdWdhck5vZGUgZnJvbSAnLi9TdWdhck5vZGUnO1xuXG5leHBvcnQgdHlwZSBSb290Tm9kZSA9IFN1Z2FyRWxlbWVudDxEb2N1bWVudCB8IFNoYWRvd1Jvb3Q+O1xuXG4vKipcbiAqIElzIHRoZSBlbGVtZW50IGEgU2hhZG93Um9vdD9cbiAqXG4gKiBOb3RlOiB0aGlzIGlzIGluc3VmZmljaWVudCB0byB0ZXN0IGlmIGFueSBlbGVtZW50IGlzIGEgc2hhZG93IHJvb3QsIGJ1dCBpdCBpcyBzdWZmaWNpZW50IHRvIGRpZmZlcmVudGlhdGUgYmV0d2VlblxuICogYSBEb2N1bWVudCBhbmQgYSBTaGFkb3dSb290LlxuICovXG5leHBvcnQgY29uc3QgaXNTaGFkb3dSb290ID0gKGRvczogU3VnYXJFbGVtZW50PE5vZGU+KTogZG9zIGlzIFN1Z2FyRWxlbWVudDxTaGFkb3dSb290PiA9PlxuICBTdWdhck5vZGUuaXNEb2N1bWVudEZyYWdtZW50KGRvcykgJiYgVHlwZS5pc05vbk51bGxhYmxlKChkb3MuZG9tIGFzIFNoYWRvd1Jvb3QpLmhvc3QpO1xuXG5leHBvcnQgY29uc3QgZ2V0Um9vdE5vZGU6IChlOiBTdWdhckVsZW1lbnQ8Tm9kZT4pID0+IFJvb3ROb2RlID0gKGUpID0+XG4gIFN1Z2FyRWxlbWVudC5mcm9tRG9tKGUuZG9tLmdldFJvb3ROb2RlKCkpIGFzIFJvb3ROb2RlO1xuXG4vKiogQ3JlYXRlIGFuIGVsZW1lbnQsIHVzaW5nIHRoZSBhY3R1YWwgZG9jdW1lbnQuICovXG5leHBvcnQgY29uc3QgY3JlYXRlRWxlbWVudDoge1xuICA8SyBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50RnVsbFRhZ05hbWVNYXA+KGRvczogUm9vdE5vZGUsIHRhZzogSyk6IFN1Z2FyRWxlbWVudDxIVE1MRWxlbWVudEZ1bGxUYWdOYW1lTWFwW0tdPjtcbiAgKGRvczogUm9vdE5vZGUsIHRhZzogc3RyaW5nKTogU3VnYXJFbGVtZW50PEhUTUxFbGVtZW50Pjtcbn0gPSAoZG9zOiBSb290Tm9kZSwgdGFnOiBzdHJpbmcpID0+XG4gIFN1Z2FyRWxlbWVudC5mcm9tVGFnKHRhZywgVHJhdmVyc2UuZG9jdW1lbnRPck93bmVyKGRvcykuZG9tKTtcblxuLyoqIFdoZXJlIHN0eWxlIHRhZ3MgbmVlZCB0byBnby4gU2hhZG93Um9vdCBvciBkb2N1bWVudCBoZWFkICovXG5leHBvcnQgY29uc3QgZ2V0U3R5bGVDb250YWluZXIgPSAoZG9zOiBSb290Tm9kZSk6IFN1Z2FyRWxlbWVudDxIVE1MSGVhZEVsZW1lbnQgfCBTaGFkb3dSb290PiA9PlxuICBpc1NoYWRvd1Jvb3QoZG9zKSA/IGRvcyA6IFN1Z2FySGVhZC5nZXRIZWFkKFRyYXZlcnNlLmRvY3VtZW50T3JPd25lcihkb3MpKTtcblxuLyoqIFdoZXJlIGNvbnRlbnQgbmVlZHMgdG8gZ28uIFNoYWRvd1Jvb3Qgb3IgZG9jdW1lbnQgYm9keSAqL1xuZXhwb3J0IGNvbnN0IGdldENvbnRlbnRDb250YWluZXIgPSAoZG9zOiBSb290Tm9kZSk6IFN1Z2FyRWxlbWVudDxIVE1MRWxlbWVudCB8IFNoYWRvd1Jvb3Q+ID0+XG4gIC8vIENhbid0IHVzZSBTdWdhckJvZHkuYm9keSB3aXRob3V0IGNhdXNpbmcgYSBjaXJjdWxhciBtb2R1bGUgcmVmZXJlbmNlIChzaW5jZSBTdWdhckJvZHkuaW5Cb2R5IHVzZXMgU3VnYXJTaGFkb3dEb20pXG4gIGlzU2hhZG93Um9vdChkb3MpID8gZG9zIDogU3VnYXJFbGVtZW50LmZyb21Eb20oVHJhdmVyc2UuZG9jdW1lbnRPck93bmVyKGRvcykuZG9tLmJvZHkpO1xuXG4vKiogSXMgdGhpcyBlbGVtZW50IGVpdGhlciBhIFNoYWRvd1Jvb3Qgb3IgYSBkZXNjZW5kZW50IG9mIGEgU2hhZG93Um9vdC4gKi9cbmV4cG9ydCBjb25zdCBpc0luU2hhZG93Um9vdCA9IChlOiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBib29sZWFuID0+XG4gIGdldFNoYWRvd1Jvb3QoZSkuaXNTb21lKCk7XG5cbi8qKiBJZiB0aGlzIGVsZW1lbnQgaXMgaW4gYSBTaGFkb3dSb290LCByZXR1cm4gaXQuICovXG5leHBvcnQgY29uc3QgZ2V0U2hhZG93Um9vdCA9IChlOiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBPcHRpb25hbDxTdWdhckVsZW1lbnQ8U2hhZG93Um9vdD4+ID0+IHtcbiAgY29uc3QgciA9IGdldFJvb3ROb2RlKGUpO1xuICByZXR1cm4gaXNTaGFkb3dSb290KHIpID8gT3B0aW9uYWwuc29tZShyKSA6IE9wdGlvbmFsLm5vbmUoKTtcbn07XG5cbi8qKiBSZXR1cm4gdGhlIGhvc3Qgb2YgYSBTaGFkb3dSb290LlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gd2lsbCB0aHJvdyBpZiBTaGFkb3cgRE9NIGlzIHVuc3VwcG9ydGVkIGluIHRoZSBicm93c2VyLCBvciBpZiB0aGUgaG9zdCBpcyBudWxsLlxuICogSWYgeW91IGFjdHVhbGx5IGhhdmUgYSBTaGFkb3dSb290LCB0aGlzIHNob3VsZG4ndCBoYXBwZW4uXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRTaGFkb3dIb3N0ID0gKGU6IFN1Z2FyRWxlbWVudDxTaGFkb3dSb290Pik6IFN1Z2FyRWxlbWVudDxFbGVtZW50PiA9PlxuICBTdWdhckVsZW1lbnQuZnJvbURvbShlLmRvbS5ob3N0KTtcblxuLyoqXG4gKiBXaGVuIEV2ZW50cyBidWJibGUgdXAgdGhyb3VnaCBhIFNoYWRvd1Jvb3QsIHRoZSBicm93c2VyIGNoYW5nZXMgdGhlIHRhcmdldCB0byBiZSB0aGUgc2hhZG93IGhvc3QuXG4gKiBUaGlzIGZ1bmN0aW9uIGdldHMgdGhlIFwib3JpZ2luYWxcIiBldmVudCB0YXJnZXQgaWYgcG9zc2libGUuXG4gKiBUaGlzIG9ubHkgd29ya3MgaWYgdGhlIHNoYWRvdyB0cmVlIGlzIG9wZW4gLSBpZiB0aGUgc2hhZG93IHRyZWUgaXMgY2xvc2VkLCBldmVudC50YXJnZXQgaXMgcmV0dXJuZWQuXG4gKiBTZWU6IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi9mdW5kYW1lbnRhbHMvd2ViLWNvbXBvbmVudHMvc2hhZG93ZG9tI2V2ZW50c1xuICovXG5leHBvcnQgY29uc3QgZ2V0T3JpZ2luYWxFdmVudFRhcmdldCA9IChldmVudDogRXZlbnQpOiBPcHRpb25hbDxFdmVudFRhcmdldD4gPT4ge1xuICBpZiAoVHlwZS5pc05vbk51bGxhYmxlKGV2ZW50LnRhcmdldCkpIHtcbiAgICBjb25zdCBlbCA9IFN1Z2FyRWxlbWVudC5mcm9tRG9tKGV2ZW50LnRhcmdldCBhcyBOb2RlKTtcbiAgICBpZiAoU3VnYXJOb2RlLmlzRWxlbWVudChlbCkgJiYgaXNPcGVuU2hhZG93SG9zdChlbCkpIHtcbiAgICAgIC8vIFdoZW4gdGFyZ2V0IGVsZW1lbnQgaXMgaW5zaWRlIFNoYWRvdyBET00gd2UgbmVlZCB0byB0YWtlIGZpcnN0IGVsZW1lbnQgZnJvbSBjb21wb3NlZFBhdGhcbiAgICAgIC8vIG90aGVyd2lzZSB3ZSdsbCBnZXQgU2hhZG93IFJvb3QgcGFyZW50LCBub3QgYWN0dWFsIHRhcmdldCBlbGVtZW50LlxuICAgICAgaWYgKGV2ZW50LmNvbXBvc2VkICYmIGV2ZW50LmNvbXBvc2VkUGF0aCkge1xuICAgICAgICBjb25zdCBjb21wb3NlZFBhdGggPSBldmVudC5jb21wb3NlZFBhdGgoKTtcbiAgICAgICAgaWYgKGNvbXBvc2VkUGF0aCkge1xuICAgICAgICAgIHJldHVybiBBcnIuaGVhZChjb21wb3NlZFBhdGgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBPcHRpb25hbC5mcm9tKGV2ZW50LnRhcmdldCk7XG59O1xuXG5leHBvcnQgY29uc3QgaXNPcGVuU2hhZG93Um9vdCA9IChzcjogU3VnYXJFbGVtZW50PFNoYWRvd1Jvb3Q+KTogYm9vbGVhbiA9PlxuICBzci5kb20ubW9kZSA9PT0gJ29wZW4nO1xuXG5leHBvcnQgY29uc3QgaXNDbG9zZWRTaGFkb3dSb290ID0gKHNyOiBTdWdhckVsZW1lbnQ8U2hhZG93Um9vdD4pOiBib29sZWFuID0+XG4gIHNyLmRvbS5tb2RlID09PSAnY2xvc2VkJztcblxuLyoqIFJldHVybiB0cnVlIGlmIHRoZSBlbGVtZW50IGlzIGEgaG9zdCBvZiBhbiBvcGVuIHNoYWRvdyByb290LlxuICogIFJldHVybiBmYWxzZSBpZiB0aGUgZWxlbWVudCBpcyBhIGhvc3Qgb2YgYSBjbG9zZWQgc2hhZG93IHJvb3QsIG9yIGlmIHRoZSBlbGVtZW50IGlzIG5vdCBhIGhvc3QuXG4gKi9cbmV4cG9ydCBjb25zdCBpc09wZW5TaGFkb3dIb3N0ID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxFbGVtZW50Pik6IGJvb2xlYW4gPT5cbiAgVHlwZS5pc05vbk51bGxhYmxlKGVsZW1lbnQuZG9tLnNoYWRvd1Jvb3QpO1xuIiwiaW1wb3J0IHsgQXJyLCBPYmosIE9wdGlvbmFsLCBUeXBlIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0IHR5cGUgeyBTdWdhckVsZW1lbnQgfSBmcm9tICcuLi9ub2RlL1N1Z2FyRWxlbWVudCc7XG5pbXBvcnQgKiBhcyBTdWdhck5vZGUgZnJvbSAnLi4vbm9kZS9TdWdhck5vZGUnO1xuXG5jb25zdCByYXdTZXQgPSAoZG9tOiBFbGVtZW50LCBrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyB8IGJvb2xlYW4gfCBudW1iZXIpOiB2b2lkID0+IHtcbiAgLypcbiAgICogSlF1ZXJ5IGNvZXJjZWQgZXZlcnl0aGluZyB0byBhIHN0cmluZywgYW5kIHNpbGVudGx5IGRpZCBub3RoaW5nIG9uIHRleHQgbm9kZS9udWxsL3VuZGVmaW5lZC5cbiAgICpcbiAgICogV2UgZmFpbCBvbiB0aG9zZSBpbnZhbGlkIGNhc2VzLCBvbmx5IGFsbG93aW5nIG51bWJlcnMgYW5kIGJvb2xlYW5zLlxuICAgKi9cbiAgaWYgKFR5cGUuaXNTdHJpbmcodmFsdWUpIHx8IFR5cGUuaXNCb29sZWFuKHZhbHVlKSB8fCBUeXBlLmlzTnVtYmVyKHZhbHVlKSkge1xuICAgIGRvbS5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSArICcnKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgY2FsbCB0byBBdHRyaWJ1dGUuc2V0LiBLZXkgJywga2V5LCAnOjogVmFsdWUgJywgdmFsdWUsICc6OiBFbGVtZW50ICcsIGRvbSk7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdBdHRyaWJ1dGUgdmFsdWUgd2FzIG5vdCBzaW1wbGUnKTtcbiAgfVxufTtcblxuY29uc3Qgc2V0ID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxFbGVtZW50Piwga2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCBib29sZWFuIHwgbnVtYmVyKTogdm9pZCA9PiB7XG4gIHJhd1NldChlbGVtZW50LmRvbSwga2V5LCB2YWx1ZSk7XG59O1xuXG5jb25zdCBzZXRBbGwgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PEVsZW1lbnQ+LCBhdHRyczogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgYm9vbGVhbiB8IG51bWJlcj4pOiB2b2lkID0+IHtcbiAgY29uc3QgZG9tID0gZWxlbWVudC5kb207XG4gIE9iai5lYWNoKGF0dHJzLCAodiwgaykgPT4ge1xuICAgIHJhd1NldChkb20sIGssIHYpO1xuICB9KTtcbn07XG5cbmNvbnN0IHNldE9wdGlvbnMgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PEVsZW1lbnQ+LCBhdHRyczogUmVjb3JkPHN0cmluZywgT3B0aW9uYWw8c3RyaW5nIHwgYm9vbGVhbiB8IG51bWJlcj4+KTogdm9pZCA9PiB7XG4gIE9iai5lYWNoKGF0dHJzLCAodiwgaykgPT4ge1xuICAgIHYuZm9sZCgoKSA9PiB7XG4gICAgICByZW1vdmUoZWxlbWVudCwgayk7XG4gICAgfSwgKHZhbHVlKSA9PiB7XG4gICAgICByYXdTZXQoZWxlbWVudC5kb20sIGssIHZhbHVlKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBnZXQgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PEVsZW1lbnQ+LCBrZXk6IHN0cmluZyk6IHVuZGVmaW5lZCB8IHN0cmluZyA9PiB7XG4gIGNvbnN0IHYgPSBlbGVtZW50LmRvbS5nZXRBdHRyaWJ1dGUoa2V5KTtcblxuICAvLyB1bmRlZmluZWQgaXMgdGhlIG1vcmUgYXBwcm9wcmlhdGUgdmFsdWUgZm9yIEpTLCBhbmQgdGhpcyBtYXRjaGVzIEpRdWVyeVxuICByZXR1cm4gdiA9PT0gbnVsbCA/IHVuZGVmaW5lZCA6IHY7XG59O1xuXG5jb25zdCBnZXRPcHQgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PEVsZW1lbnQ+LCBrZXk6IHN0cmluZyk6IE9wdGlvbmFsPHN0cmluZz4gPT5cbiAgT3B0aW9uYWwuZnJvbShnZXQoZWxlbWVudCwga2V5KSk7XG5cbmNvbnN0IGhhcyA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4sIGtleTogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gIGNvbnN0IGRvbSA9IGVsZW1lbnQuZG9tO1xuXG4gIC8vIHJldHVybiBmYWxzZSBmb3Igbm9uLWVsZW1lbnQgbm9kZXMsIG5vIHBvaW50IGluIHRocm93aW5nIGFuIGVycm9yXG4gIHJldHVybiBkb20gJiYgKGRvbSBhcyBFbGVtZW50KS5oYXNBdHRyaWJ1dGUgPyAoZG9tIGFzIEVsZW1lbnQpLmhhc0F0dHJpYnV0ZShrZXkpIDogZmFsc2U7XG59O1xuXG5jb25zdCByZW1vdmUgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PEVsZW1lbnQ+LCBrZXk6IHN0cmluZyk6IHZvaWQgPT4ge1xuICBlbGVtZW50LmRvbS5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcbn07XG5cbmNvbnN0IGhhc05vbmUgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KTogYm9vbGVhbiA9PiB7XG4gIGNvbnN0IGF0dHJzID0gKGVsZW1lbnQuZG9tIGFzIEVsZW1lbnQpLmF0dHJpYnV0ZXM7XG4gIHJldHVybiBhdHRycyA9PT0gdW5kZWZpbmVkIHx8IGF0dHJzID09PSBudWxsIHx8IGF0dHJzLmxlbmd0aCA9PT0gMDtcbn07XG5cbmNvbnN0IGNsb25lID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxFbGVtZW50Pik6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPT5cbiAgQXJyLmZvbGRsKGVsZW1lbnQuZG9tLmF0dHJpYnV0ZXMsIChhY2MsIGF0dHIpID0+IHtcbiAgICBhY2NbYXR0ci5uYW1lXSA9IGF0dHIudmFsdWU7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgc3RyaW5nPik7XG5cbmNvbnN0IHRyYW5zZmVyT25lID0gKHNvdXJjZTogU3VnYXJFbGVtZW50PEVsZW1lbnQ+LCBkZXN0aW5hdGlvbjogU3VnYXJFbGVtZW50PEVsZW1lbnQ+LCBhdHRyOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgLy8gTk9URTogV2UgZG9uJ3Qgd2FudCB0byBjbG9iYmVyIGFueSBleGlzdGluZyBhdHRyaWJ1dGVzXG4gIGlmICghaGFzKGRlc3RpbmF0aW9uLCBhdHRyKSkge1xuICAgIGdldE9wdChzb3VyY2UsIGF0dHIpLmVhY2goKHNyY1ZhbHVlKSA9PiBzZXQoZGVzdGluYXRpb24sIGF0dHIsIHNyY1ZhbHVlKSk7XG4gIH1cbn07XG5cbi8vIFRyYW5zZmVyIGF0dHJpYnV0ZXMoYXR0cnMpIGZyb20gc291cmNlIHRvIGRlc3RpbmF0aW9uLCB1bmxlc3MgdGhleSBhcmUgYWxyZWFkeSBwcmVzZW50XG5jb25zdCB0cmFuc2ZlciA9IChzb3VyY2U6IFN1Z2FyRWxlbWVudDxFbGVtZW50PiwgZGVzdGluYXRpb246IFN1Z2FyRWxlbWVudDxFbGVtZW50PiwgYXR0cnM6IHN0cmluZ1tdKTogdm9pZCA9PiB7XG4gIGlmICghU3VnYXJOb2RlLmlzRWxlbWVudChzb3VyY2UpIHx8ICFTdWdhck5vZGUuaXNFbGVtZW50KGRlc3RpbmF0aW9uKSkge1xuICAgIHJldHVybjtcbiAgfVxuICBBcnIuZWFjaChhdHRycywgKGF0dHIpID0+IHtcbiAgICB0cmFuc2Zlck9uZShzb3VyY2UsIGRlc3RpbmF0aW9uLCBhdHRyKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBjbG9uZSwgc2V0LCBzZXRBbGwsIHNldE9wdGlvbnMsIGdldCwgZ2V0T3B0LCBoYXMsIHJlbW92ZSwgaGFzTm9uZSwgdHJhbnNmZXIgfTtcbiIsImltcG9ydCB7IEFyciwgT2JqLCBPcHRpb25hbCwgT3B0aW9uYWxzLCBTdHJpbmdzLCBUeXBlIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0ICogYXMgU3R5bGUgZnJvbSAnLi4vLi4vaW1wbC9TdHlsZSc7XG5pbXBvcnQgKiBhcyBTdWdhckJvZHkgZnJvbSAnLi4vbm9kZS9TdWdhckJvZHknO1xuaW1wb3J0IHsgU3VnYXJFbGVtZW50IH0gZnJvbSAnLi4vbm9kZS9TdWdhckVsZW1lbnQnO1xuaW1wb3J0ICogYXMgU3VnYXJOb2RlIGZyb20gJy4uL25vZGUvU3VnYXJOb2RlJztcblxuaW1wb3J0ICogYXMgQXR0cmlidXRlIGZyb20gJy4vQXR0cmlidXRlJztcblxuY29uc3QgaW50ZXJuYWxTZXQgPSAoZG9tOiBOb2RlLCBwcm9wZXJ0eTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCA9PiB7XG4gIC8vIFRoaXMgaXMgZ29pbmcgdG8gaHVydC4gQXBvbG9naWVzLlxuICAvLyBKUXVlcnkgY29lcmNlcyBudW1iZXJzIHRvIHBpeGVscyBmb3IgY2VydGFpbiBwcm9wZXJ0eSBuYW1lcywgYW5kIG90aGVyIHRpbWVzIGxldHMgbnVtYmVycyB0aHJvdWdoLlxuICAvLyB3ZSdyZSBnb2luZyB0byBiZSBleHBsaWNpdDsgc3RyaW5ncyBvbmx5LlxuICBpZiAoIVR5cGUuaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIGNhbGwgdG8gQ1NTLnNldC4gUHJvcGVydHkgJywgcHJvcGVydHksICc6OiBWYWx1ZSAnLCB2YWx1ZSwgJzo6IEVsZW1lbnQgJywgZG9tKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NTUyB2YWx1ZSBtdXN0IGJlIGEgc3RyaW5nOiAnICsgdmFsdWUpO1xuICB9XG5cbiAgLy8gcmVtb3ZlZDogc3VwcG9ydCBmb3IgZG9tKCkuc3R5bGVbcHJvcGVydHldIHdoZXJlIHByb3AgaXMgY2FtZWwgY2FzZSBpbnN0ZWFkIG9mIG5vcm1hbCBwcm9wZXJ0eSBuYW1lXG4gIGlmIChTdHlsZS5pc1N1cHBvcnRlZChkb20pKSB7XG4gICAgZG9tLnN0eWxlLnNldFByb3BlcnR5KHByb3BlcnR5LCB2YWx1ZSk7XG4gIH1cbn07XG5cbmNvbnN0IGludGVybmFsUmVtb3ZlID0gKGRvbTogTm9kZSwgcHJvcGVydHk6IHN0cmluZyk6IHZvaWQgPT4ge1xuICAvKlxuICAgKiBJRTkgYW5kIGFib3ZlIC0gTUROIGRvZXNuJ3QgaGF2ZSBkZXRhaWxzLCBidXQgaGVyZSdzIGEgY291cGxlIG9mIHJhbmRvbSBpbnRlcm5ldCBjbGFpbXNcbiAgICpcbiAgICogaHR0cDovL2hlbHAuZG90dG9yby5jb20vbGpvcHNqY2sucGhwXG4gICAqIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc5MDE4ODYvNzU0NlxuICAgKi9cbiAgaWYgKFN0eWxlLmlzU3VwcG9ydGVkKGRvbSkpIHtcbiAgICBkb20uc3R5bGUucmVtb3ZlUHJvcGVydHkocHJvcGVydHkpO1xuICB9XG59O1xuXG5jb25zdCBzZXQgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+LCBwcm9wZXJ0eTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCA9PiB7XG4gIGNvbnN0IGRvbSA9IGVsZW1lbnQuZG9tO1xuICBpbnRlcm5hbFNldChkb20sIHByb3BlcnR5LCB2YWx1ZSk7XG59O1xuXG5jb25zdCBzZXRBbGwgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+LCBjc3M6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4pOiB2b2lkID0+IHtcbiAgY29uc3QgZG9tID0gZWxlbWVudC5kb207XG5cbiAgT2JqLmVhY2goY3NzLCAodiwgaykgPT4ge1xuICAgIGludGVybmFsU2V0KGRvbSwgaywgdik7XG4gIH0pO1xufTtcblxuY29uc3Qgc2V0T3B0aW9ucyA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4sIGNzczogUmVjb3JkPHN0cmluZywgT3B0aW9uYWw8c3RyaW5nPj4pOiB2b2lkID0+IHtcbiAgY29uc3QgZG9tID0gZWxlbWVudC5kb207XG5cbiAgT2JqLmVhY2goY3NzLCAodiwgaykgPT4ge1xuICAgIHYuZm9sZCgoKSA9PiB7XG4gICAgICBpbnRlcm5hbFJlbW92ZShkb20sIGspO1xuICAgIH0sICh2YWx1ZSkgPT4ge1xuICAgICAgaW50ZXJuYWxTZXQoZG9tLCBrLCB2YWx1ZSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuLypcbiAqIE5PVEU6IEZvciBjZXJ0YWluIHByb3BlcnRpZXMsIHRoaXMgcmV0dXJucyB0aGUgXCJ1c2VkIHZhbHVlXCIgd2hpY2ggaXMgc3VidGx5IGRpZmZlcmVudCB0byB0aGUgXCJjb21wdXRlZCB2YWx1ZVwiIChkZXNwaXRlIGNhbGxpbmcgZ2V0Q29tcHV0ZWRTdHlsZSkuXG4gKiBCbGFtZSBDU1MgMi4wLlxuICpcbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy91c2VkX3ZhbHVlXG4gKi9cbmNvbnN0IGdldCA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8RWxlbWVudD4sIHByb3BlcnR5OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICBjb25zdCBkb20gPSBlbGVtZW50LmRvbTtcbiAgLypcbiAgICogSUU5IGFuZCBhYm92ZSBwZXJcbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vZG9jcy9XZWIvQVBJL3dpbmRvdy5nZXRDb21wdXRlZFN0eWxlXG4gICAqXG4gICAqIE5vdCBpbiBudW1lcm9zaXR5LCBiZWNhdXNlIGl0IGRvZXNuJ3QgbWVtb2l6ZSBhbmQgbG9va2luZyB0aGlzIHVwIGR5bmFtaWNhbGx5IGluIHBlcmZvcm1hbmNlIGNyaXRpY2FsIGNvZGUgd291bGQgYmUgaG9ycmVuZG91cy5cbiAgICpcbiAgICogSlF1ZXJ5IGhhcyBzb21lIG1hZ2ljIGhlcmUgZm9yIElFIHBvcHVwcywgYnV0IHdlIGRvbid0IHJlYWxseSBuZWVkIHRoYXQuXG4gICAqIEl0IGFsc28gdXNlcyBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgdG8gaGFuZGxlIGlmcmFtZXMgYnV0IHRoYXQgaGFzbid0IGJlZW4gcmVxdWlyZWQgc2luY2UgRkYgMy42LlxuICAgKi9cbiAgY29uc3Qgc3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9tKTtcbiAgY29uc3QgciA9IHN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKHByb3BlcnR5KTtcblxuICAvLyBqcXVlcnktaXNtOiBJZiByIGlzIGFuIGVtcHR5IHN0cmluZywgY2hlY2sgdGhhdCB0aGUgZWxlbWVudCBpcyBub3QgaW4gYSBkb2N1bWVudC4gSWYgaXQgaXNuJ3QsIHJldHVybiB0aGUgcmF3IHZhbHVlLlxuICAvLyBUdXJucyBvdXQgd2UgZG8gdGhpcyBhIGxvdC5cbiAgcmV0dXJuIChyID09PSAnJyAmJiAhU3VnYXJCb2R5LmluQm9keShlbGVtZW50KSkgPyBnZXRVbnNhZmVQcm9wZXJ0eShkb20sIHByb3BlcnR5KSA6IHI7XG59O1xuXG4vLyByZW1vdmVkOiBzdXBwb3J0IGZvciBkb20oKS5zdHlsZVtwcm9wZXJ0eV0gd2hlcmUgcHJvcCBpcyBjYW1lbCBjYXNlIGluc3RlYWQgb2Ygbm9ybWFsIHByb3BlcnR5IG5hbWVcbi8vIGVtcHR5IHN0cmluZyBpcyB3aGF0IHRoZSBicm93c2VycyAoSUUxMSBhbmQgQ2hyb21lKSByZXR1cm4gd2hlbiB0aGUgcHJvcGVydHlWYWx1ZSBkb2Vzbid0IGV4aXN0cy5cbmNvbnN0IGdldFVuc2FmZVByb3BlcnR5ID0gKGRvbTogTm9kZSwgcHJvcGVydHk6IHN0cmluZyk6IHN0cmluZyA9PlxuICBTdHlsZS5pc1N1cHBvcnRlZChkb20pID8gZG9tLnN0eWxlLmdldFByb3BlcnR5VmFsdWUocHJvcGVydHkpIDogJyc7XG5cbi8qXG4gKiBHZXRzIHRoZSByYXcgdmFsdWUgZnJvbSB0aGUgc3R5bGUgYXR0cmlidXRlLiBVc2VmdWwgZm9yIHJldHJpZXZpbmcgXCJ1c2VkIHZhbHVlc1wiIGZyb20gdGhlIERPTTpcbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy91c2VkX3ZhbHVlXG4gKlxuICogUmV0dXJucyBOT05FIGlmIHRoZSBwcm9wZXJ0eSBpc24ndCBzZXQsIG9yIHRoZSB2YWx1ZSBpcyBhbiBlbXB0eSBzdHJpbmcuXG4gKi9cbmNvbnN0IGdldFJhdyA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4sIHByb3BlcnR5OiBzdHJpbmcpOiBPcHRpb25hbDxzdHJpbmc+ID0+IHtcbiAgY29uc3QgZG9tID0gZWxlbWVudC5kb207XG4gIGNvbnN0IHJhdyA9IGdldFVuc2FmZVByb3BlcnR5KGRvbSwgcHJvcGVydHkpO1xuXG4gIHJldHVybiBPcHRpb25hbC5mcm9tKHJhdykuZmlsdGVyKChyKSA9PiByLmxlbmd0aCA+IDApO1xufTtcblxuY29uc3QgZ2V0QWxsUmF3ID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPik6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPT4ge1xuICBjb25zdCBjc3M6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fTtcbiAgY29uc3QgZG9tID0gZWxlbWVudC5kb207XG5cbiAgaWYgKFN0eWxlLmlzU3VwcG9ydGVkKGRvbSkpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRvbS5zdHlsZS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcnVsZU5hbWUgPSBkb20uc3R5bGUuaXRlbShpKSBhcyBrZXlvZiBDU1NTdHlsZURlY2xhcmF0aW9uO1xuICAgICAgY3NzW3J1bGVOYW1lXSA9IGRvbS5zdHlsZVtydWxlTmFtZV0gYXMgc3RyaW5nO1xuICAgIH1cbiAgfVxuICByZXR1cm4gY3NzO1xufTtcblxuY29uc3QgaXNWYWxpZFZhbHVlID0gKHRhZzogc3RyaW5nLCBwcm9wZXJ0eTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBTdWdhckVsZW1lbnQuZnJvbVRhZyh0YWcpO1xuICBzZXQoZWxlbWVudCwgcHJvcGVydHksIHZhbHVlKTtcbiAgY29uc3Qgc3R5bGUgPSBnZXRSYXcoZWxlbWVudCwgcHJvcGVydHkpO1xuICByZXR1cm4gc3R5bGUuaXNTb21lKCk7XG59O1xuXG5jb25zdCByZW1vdmUgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+LCBwcm9wZXJ0eTogc3RyaW5nKTogdm9pZCA9PiB7XG4gIGNvbnN0IGRvbSA9IGVsZW1lbnQuZG9tO1xuXG4gIGludGVybmFsUmVtb3ZlKGRvbSwgcHJvcGVydHkpO1xuXG4gIGlmIChPcHRpb25hbHMuaXMoQXR0cmlidXRlLmdldE9wdChlbGVtZW50IGFzIFN1Z2FyRWxlbWVudDxFbGVtZW50PiwgJ3N0eWxlJykubWFwKFN0cmluZ3MudHJpbSksICcnKSkge1xuICAgIC8vIE5vIG1vcmUgc3R5bGVzIGxlZnQsIHJlbW92ZSB0aGUgc3R5bGUgYXR0cmlidXRlIGFzIHdlbGxcbiAgICBBdHRyaWJ1dGUucmVtb3ZlKGVsZW1lbnQgYXMgU3VnYXJFbGVtZW50PEVsZW1lbnQ+LCAnc3R5bGUnKTtcbiAgfVxufTtcblxuY29uc3QgcHJlc2VydmUgPSA8RSBleHRlbmRzIEVsZW1lbnQsIFQ+IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8RT4sIGY6IChlOiBTdWdhckVsZW1lbnQ8RT4pID0+IFQpOiBUID0+IHtcbiAgY29uc3Qgb2xkU3R5bGVzID0gQXR0cmlidXRlLmdldChlbGVtZW50LCAnc3R5bGUnKTtcbiAgY29uc3QgcmVzdWx0ID0gZihlbGVtZW50KTtcbiAgaWYgKG9sZFN0eWxlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgQXR0cmlidXRlLnJlbW92ZShlbGVtZW50LCAnc3R5bGUnKTtcbiAgfSBlbHNlIHtcbiAgICBBdHRyaWJ1dGUuc2V0KGVsZW1lbnQsICdzdHlsZScsIG9sZFN0eWxlcyk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmNvbnN0IGNvcHkgPSAoc291cmNlOiBTdWdhckVsZW1lbnQ8Tm9kZT4sIHRhcmdldDogU3VnYXJFbGVtZW50PEhUTUxFbGVtZW50Pik6IHZvaWQgPT4ge1xuICBjb25zdCBzb3VyY2VEb20gPSBzb3VyY2UuZG9tO1xuICBjb25zdCB0YXJnZXREb20gPSB0YXJnZXQuZG9tO1xuICBpZiAoU3R5bGUuaXNTdXBwb3J0ZWQoc291cmNlRG9tKSAmJiBTdHlsZS5pc1N1cHBvcnRlZCh0YXJnZXREb20pKSB7XG4gICAgdGFyZ2V0RG9tLnN0eWxlLmNzc1RleHQgPSBzb3VyY2VEb20uc3R5bGUuY3NzVGV4dDtcbiAgfVxufTtcblxuLyogTk9URTogVGhpcyBmdW5jdGlvbiBpcyBoZXJlIGZvciB0aGUgc2lkZSBlZmZlY3QgaXQgdHJpZ2dlcnMuXG5UaGUgdmFsdWUgaXRzZWxmIGlzIG5vdCB1c2VkLlxuQmUgc3VyZSB0byBub3QgdXNlIHRoZSByZXR1cm4gdmFsdWUsIGFuZCB0aGF0IGl0IGlzIG5vdCByZW1vdmVkIGJ5IGEgbWluaWZpZXIuXG4gKi9cbmNvbnN0IHJlZmxvdyA9IChlOiBTdWdhckVsZW1lbnQ8SFRNTEVsZW1lbnQ+KTogdm9pZCA9PlxuICBlLmRvbS5vZmZzZXRXaWR0aCBhcyB1bmtub3duIGFzIHZvaWQ7XG5cbmNvbnN0IHRyYW5zZmVyT25lID0gKHNvdXJjZTogU3VnYXJFbGVtZW50PE5vZGU+LCBkZXN0aW5hdGlvbjogU3VnYXJFbGVtZW50PE5vZGU+LCBzdHlsZTogc3RyaW5nKTogdm9pZCA9PiB7XG4gIGdldFJhdyhzb3VyY2UsIHN0eWxlKS5lYWNoKCh2YWx1ZSkgPT4ge1xuICAgIC8vIE5PVEU6IFdlIGRvbid0IHdhbnQgdG8gY2xvYmJlciBhbnkgZXhpc3RpbmcgaW5saW5lIHN0eWxlcy5cbiAgICBpZiAoZ2V0UmF3KGRlc3RpbmF0aW9uLCBzdHlsZSkuaXNOb25lKCkpIHtcbiAgICAgIHNldChkZXN0aW5hdGlvbiwgc3R5bGUsIHZhbHVlKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgdHJhbnNmZXIgPSAoc291cmNlOiBTdWdhckVsZW1lbnQ8Tm9kZT4sIGRlc3RpbmF0aW9uOiBTdWdhckVsZW1lbnQ8Tm9kZT4sIHN0eWxlczogc3RyaW5nW10pOiB2b2lkID0+IHtcbiAgaWYgKCFTdWdhck5vZGUuaXNFbGVtZW50KHNvdXJjZSkgfHwgIVN1Z2FyTm9kZS5pc0VsZW1lbnQoZGVzdGluYXRpb24pKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIEFyci5lYWNoKHN0eWxlcywgKHN0eWxlKSA9PiB7XG4gICAgdHJhbnNmZXJPbmUoc291cmNlLCBkZXN0aW5hdGlvbiwgc3R5bGUpO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IGNvcHksIHNldCwgcHJlc2VydmUsIHNldEFsbCwgc2V0T3B0aW9ucywgcmVtb3ZlLCBnZXQsIGdldFJhdywgZ2V0QWxsUmF3LCBpc1ZhbGlkVmFsdWUsIHJlZmxvdywgdHJhbnNmZXIgfTtcbiIsImltcG9ydCB0eXBlIHsgU3VnYXJFbGVtZW50IH0gZnJvbSAnLi4vbm9kZS9TdWdhckVsZW1lbnQnO1xuXG5pbXBvcnQgKiBhcyBDc3MgZnJvbSAnLi9Dc3MnO1xuXG5jb25zdCBvbkRpcmVjdGlvbiA9IDxUID0gYW55PiAoaXNMdHI6IFQsIGlzUnRsOiBUKSA9PiAoZWxlbWVudDogU3VnYXJFbGVtZW50PEVsZW1lbnQ+KTogVCA9PlxuICBnZXREaXJlY3Rpb24oZWxlbWVudCkgPT09ICdydGwnID8gaXNSdGwgOiBpc0x0cjtcblxuY29uc3QgZ2V0RGlyZWN0aW9uID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxFbGVtZW50Pik6ICdydGwnIHwgJ2x0cicgPT5cbiAgQ3NzLmdldChlbGVtZW50LCAnZGlyZWN0aW9uJykgPT09ICdydGwnID8gJ3J0bCcgOiAnbHRyJztcblxuZXhwb3J0IHtcbiAgb25EaXJlY3Rpb24sXG4gIGdldERpcmVjdGlvblxufTtcbiIsImltcG9ydCB7IEFyciB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmltcG9ydCAqIGFzIFN1Z2FyQm9keSBmcm9tICcuLi9ub2RlL1N1Z2FyQm9keSc7XG5pbXBvcnQgdHlwZSB7IFN1Z2FyRWxlbWVudCB9IGZyb20gJy4uL25vZGUvU3VnYXJFbGVtZW50JztcblxuaW1wb3J0ICogYXMgVHJhdmVyc2UgZnJvbSAnLi9UcmF2ZXJzZSc7XG5cbi8vIG1heWJlIFRyYXZlcnNlV2l0aCwgc2ltaWxhciB0byB0cmF2ZXJzZSBidXQgd2l0aCBhIHByZWRpY2F0ZT9cblxuY29uc3QgYWxsOiB7XG4gIDxUIGV4dGVuZHMgTm9kZSA9IE5vZGU+KHByZWRpY2F0ZTogKGU6IFN1Z2FyRWxlbWVudDxOb2RlPikgPT4gZSBpcyBTdWdhckVsZW1lbnQ8VD4pOiBTdWdhckVsZW1lbnQ8VD5bXTtcbiAgKHByZWRpY2F0ZTogKGU6IFN1Z2FyRWxlbWVudDxOb2RlPikgPT4gYm9vbGVhbik6IFN1Z2FyRWxlbWVudDxOb2RlPltdO1xufSA9IChwcmVkaWNhdGU6IChlOiBTdWdhckVsZW1lbnQ8Tm9kZT4pID0+IGJvb2xlYW4pID0+XG4gIGRlc2NlbmRhbnRzKFN1Z2FyQm9keS5ib2R5KCksIHByZWRpY2F0ZSk7XG5cbmNvbnN0IGFuY2VzdG9yczoge1xuICA8VCBleHRlbmRzIE5vZGUgPSBOb2RlPihzY29wZTogU3VnYXJFbGVtZW50PE5vZGU+LCBwcmVkaWNhdGU6IChlOiBTdWdhckVsZW1lbnQ8Tm9kZT4pID0+IGUgaXMgU3VnYXJFbGVtZW50PFQ+LCBpc1Jvb3Q/OiAoZTogU3VnYXJFbGVtZW50PE5vZGU+KSA9PiBib29sZWFuKTogU3VnYXJFbGVtZW50PFQ+W107XG4gIChzY29wZTogU3VnYXJFbGVtZW50PE5vZGU+LCBwcmVkaWNhdGU6IChlOiBTdWdhckVsZW1lbnQ8Tm9kZT4pID0+IGJvb2xlYW4sIGlzUm9vdD86IChlOiBTdWdhckVsZW1lbnQ8Tm9kZT4pID0+IGJvb2xlYW4pOiBTdWdhckVsZW1lbnQ8Tm9kZT5bXTtcbn0gPSAoc2NvcGU6IFN1Z2FyRWxlbWVudDxOb2RlPiwgcHJlZGljYXRlOiAoZTogU3VnYXJFbGVtZW50PE5vZGU+KSA9PiBib29sZWFuLCBpc1Jvb3Q/OiAoZTogU3VnYXJFbGVtZW50PE5vZGU+KSA9PiBib29sZWFuKSA9PlxuICBBcnIuZmlsdGVyKFRyYXZlcnNlLnBhcmVudHMoc2NvcGUsIGlzUm9vdCksIHByZWRpY2F0ZSk7XG5cbmNvbnN0IHNpYmxpbmdzOiB7XG4gIDxUIGV4dGVuZHMgTm9kZSA9IE5vZGU+KHNjb3BlOiBTdWdhckVsZW1lbnQ8Tm9kZT4sIHByZWRpY2F0ZTogKGU6IFN1Z2FyRWxlbWVudDxOb2RlPikgPT4gZSBpcyBTdWdhckVsZW1lbnQ8VD4pOiBTdWdhckVsZW1lbnQ8VD5bXTtcbiAgKHNjb3BlOiBTdWdhckVsZW1lbnQ8Tm9kZT4sIHByZWRpY2F0ZTogKGU6IFN1Z2FyRWxlbWVudDxOb2RlPikgPT4gYm9vbGVhbik6IFN1Z2FyRWxlbWVudDxOb2RlPltdO1xufSA9IChzY29wZTogU3VnYXJFbGVtZW50PE5vZGU+LCBwcmVkaWNhdGU6IChlOiBTdWdhckVsZW1lbnQ8Tm9kZT4pID0+IGJvb2xlYW4pID0+XG4gIEFyci5maWx0ZXIoVHJhdmVyc2Uuc2libGluZ3Moc2NvcGUpLCBwcmVkaWNhdGUpO1xuXG5jb25zdCBjaGlsZHJlbjoge1xuICA8VCBleHRlbmRzIE5vZGUgPSBOb2RlPihzY29wZTogU3VnYXJFbGVtZW50PE5vZGU+LCBwcmVkaWNhdGU6IChlOiBTdWdhckVsZW1lbnQ8Tm9kZT4pID0+IGUgaXMgU3VnYXJFbGVtZW50PFQ+KTogU3VnYXJFbGVtZW50PFQ+W107XG4gIChzY29wZTogU3VnYXJFbGVtZW50PE5vZGU+LCBwcmVkaWNhdGU6IChlOiBTdWdhckVsZW1lbnQ8Tm9kZT4pID0+IGJvb2xlYW4pOiBTdWdhckVsZW1lbnQ8Tm9kZT5bXTtcbn0gPSAoc2NvcGU6IFN1Z2FyRWxlbWVudDxOb2RlPiwgcHJlZGljYXRlOiAoZTogU3VnYXJFbGVtZW50PE5vZGU+KSA9PiBib29sZWFuKSA9PlxuICBBcnIuZmlsdGVyKFRyYXZlcnNlLmNoaWxkcmVuKHNjb3BlKSwgcHJlZGljYXRlKTtcblxuY29uc3QgZGVzY2VuZGFudHM6IHtcbiAgPFQgZXh0ZW5kcyBOb2RlID0gTm9kZT4oc2NvcGU6IFN1Z2FyRWxlbWVudDxOb2RlPiwgcHJlZGljYXRlOiAoZTogU3VnYXJFbGVtZW50PE5vZGU+KSA9PiBlIGlzIFN1Z2FyRWxlbWVudDxUPik6IFN1Z2FyRWxlbWVudDxUPltdO1xuICAoc2NvcGU6IFN1Z2FyRWxlbWVudDxOb2RlPiwgcHJlZGljYXRlOiAoZTogU3VnYXJFbGVtZW50PE5vZGU+KSA9PiBib29sZWFuKTogU3VnYXJFbGVtZW50PE5vZGU+W107XG59ID0gKHNjb3BlOiBTdWdhckVsZW1lbnQ8Tm9kZT4sIHByZWRpY2F0ZTogKGU6IFN1Z2FyRWxlbWVudDxOb2RlPikgPT4gYm9vbGVhbikgPT4ge1xuICBsZXQgcmVzdWx0OiBTdWdhckVsZW1lbnQ8Tm9kZT5bXSA9IFtdO1xuXG4gIC8vIFJlY3Vyc2UudG9BcnJheSgpIG1pZ2h0IGhlbHAgaGVyZVxuICBBcnIuZWFjaChUcmF2ZXJzZS5jaGlsZHJlbihzY29wZSksICh4KSA9PiB7XG4gICAgaWYgKHByZWRpY2F0ZSh4KSkge1xuICAgICAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdChbIHggXSk7XG4gICAgfVxuICAgIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQoZGVzY2VuZGFudHMoeCwgcHJlZGljYXRlKSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IHtcbiAgYWxsLFxuICBhbmNlc3RvcnMsXG4gIHNpYmxpbmdzLFxuICBjaGlsZHJlbixcbiAgZGVzY2VuZGFudHNcbn07XG4iLCJpbXBvcnQgeyBBcnIsIEZ1biwgT3B0aW9uYWwsIFR5cGUgfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5pbXBvcnQgQ2xvc2VzdE9yQW5jZXN0b3IgZnJvbSAnLi4vLi4vaW1wbC9DbG9zZXN0T3JBbmNlc3Rvcic7XG5pbXBvcnQgKiBhcyBDb21wYXJlIGZyb20gJy4uL2RvbS9Db21wYXJlJztcbmltcG9ydCAqIGFzIFN1Z2FyQm9keSBmcm9tICcuLi9ub2RlL1N1Z2FyQm9keSc7XG5pbXBvcnQgeyBTdWdhckVsZW1lbnQgfSBmcm9tICcuLi9ub2RlL1N1Z2FyRWxlbWVudCc7XG5cbmNvbnN0IGZpcnN0OiB7XG4gIDxUIGV4dGVuZHMgTm9kZSA9IE5vZGU+IChwcmVkaWNhdGU6IChlOiBTdWdhckVsZW1lbnQ8Tm9kZT4pID0+IGUgaXMgU3VnYXJFbGVtZW50PFQ+KTogT3B0aW9uYWw8U3VnYXJFbGVtZW50PFQgJiBDaGlsZE5vZGU+PjtcbiAgKHByZWRpY2F0ZTogKGU6IFN1Z2FyRWxlbWVudDxOb2RlPikgPT4gYm9vbGVhbik6IE9wdGlvbmFsPFN1Z2FyRWxlbWVudDxOb2RlICYgQ2hpbGROb2RlPj47XG59ID0gKHByZWRpY2F0ZTogKGU6IFN1Z2FyRWxlbWVudDxOb2RlPikgPT4gYm9vbGVhbikgPT5cbiAgZGVzY2VuZGFudChTdWdhckJvZHkuYm9keSgpLCBwcmVkaWNhdGUpO1xuXG5jb25zdCBhbmNlc3Rvcjoge1xuICA8VCBleHRlbmRzIE5vZGUgPSBOb2RlPiAoc2NvcGU6IFN1Z2FyRWxlbWVudDxOb2RlPiwgcHJlZGljYXRlOiAoZTogU3VnYXJFbGVtZW50PE5vZGU+KSA9PiBlIGlzIFN1Z2FyRWxlbWVudDxUPiwgaXNSb290PzogKGU6IFN1Z2FyRWxlbWVudDxOb2RlPikgPT4gYm9vbGVhbik6IE9wdGlvbmFsPFN1Z2FyRWxlbWVudDxUPj47XG4gIChzY29wZTogU3VnYXJFbGVtZW50PE5vZGU+LCBwcmVkaWNhdGU6IChlOiBTdWdhckVsZW1lbnQ8Tm9kZT4pID0+IGJvb2xlYW4sIGlzUm9vdD86IChlOiBTdWdhckVsZW1lbnQ8Tm9kZT4pID0+IGJvb2xlYW4pOiBPcHRpb25hbDxTdWdhckVsZW1lbnQ8Tm9kZT4+O1xufSA9IChzY29wZTogU3VnYXJFbGVtZW50PE5vZGU+LCBwcmVkaWNhdGU6IChlOiBTdWdhckVsZW1lbnQ8Tm9kZT4pID0+IGJvb2xlYW4sIGlzUm9vdD86IChlOiBTdWdhckVsZW1lbnQ8Tm9kZT4pID0+IGJvb2xlYW4pID0+IHtcbiAgbGV0IGVsZW1lbnQgPSBzY29wZS5kb207XG4gIGNvbnN0IHN0b3AgPSBUeXBlLmlzRnVuY3Rpb24oaXNSb290KSA/IGlzUm9vdCA6IEZ1bi5uZXZlcjtcblxuICB3aGlsZSAoZWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICBjb25zdCBlbCA9IFN1Z2FyRWxlbWVudC5mcm9tRG9tKGVsZW1lbnQpO1xuXG4gICAgaWYgKHByZWRpY2F0ZShlbCkpIHtcbiAgICAgIHJldHVybiBPcHRpb25hbC5zb21lKGVsKTtcbiAgICB9IGVsc2UgaWYgKHN0b3AoZWwpKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIE9wdGlvbmFsLm5vbmU8U3VnYXJFbGVtZW50PE5vZGU+PigpO1xufTtcblxuY29uc3QgY2xvc2VzdDoge1xuICA8VCBleHRlbmRzIE5vZGUgPSBOb2RlPiAoc2NvcGU6IFN1Z2FyRWxlbWVudDxOb2RlPiwgcHJlZGljYXRlOiAoZTogU3VnYXJFbGVtZW50PE5vZGU+KSA9PiBlIGlzIFN1Z2FyRWxlbWVudDxUPiwgaXNSb290PzogKGU6IFN1Z2FyRWxlbWVudDxOb2RlPikgPT4gYm9vbGVhbik6IE9wdGlvbmFsPFN1Z2FyRWxlbWVudDxUPj47XG4gIChzY29wZTogU3VnYXJFbGVtZW50PE5vZGU+LCBwcmVkaWNhdGU6IChlOiBTdWdhckVsZW1lbnQ8Tm9kZT4pID0+IGJvb2xlYW4sIGlzUm9vdD86IChlOiBTdWdhckVsZW1lbnQ8Tm9kZT4pID0+IGJvb2xlYW4pOiBPcHRpb25hbDxTdWdhckVsZW1lbnQ8Tm9kZT4+O1xufSA9IChzY29wZTogU3VnYXJFbGVtZW50PE5vZGU+LCBwcmVkaWNhdGU6IChlOiBTdWdhckVsZW1lbnQ8Tm9kZT4pID0+IGJvb2xlYW4sIGlzUm9vdD86IChlOiBTdWdhckVsZW1lbnQ8Tm9kZT4pID0+IGJvb2xlYW4pID0+IHtcbiAgLy8gVGhpcyBpcyByZXF1aXJlZCB0byBhdm9pZCBDbG9zZXN0T3JBbmNlc3RvciBwYXNzaW5nIHRoZSBwcmVkaWNhdGUgdG8gaXRzZWxmXG4gIGNvbnN0IGlzID0gKHM6IFN1Z2FyRWxlbWVudDxOb2RlPiwgdGVzdDogKGU6IFN1Z2FyRWxlbWVudDxOb2RlPikgPT4gYm9vbGVhbik6IHMgaXMgU3VnYXJFbGVtZW50PE5vZGU+ID0+IHRlc3Qocyk7XG4gIHJldHVybiBDbG9zZXN0T3JBbmNlc3RvcihpcywgYW5jZXN0b3IsIHNjb3BlLCBwcmVkaWNhdGUsIGlzUm9vdCk7XG59O1xuXG5jb25zdCBzaWJsaW5nOiB7XG4gIDxUIGV4dGVuZHMgTm9kZSA9IE5vZGU+IChzY29wZTogU3VnYXJFbGVtZW50PE5vZGU+LCBwcmVkaWNhdGU6IChlOiBTdWdhckVsZW1lbnQ8Tm9kZT4pID0+IGUgaXMgU3VnYXJFbGVtZW50PFQ+KTogT3B0aW9uYWw8U3VnYXJFbGVtZW50PFQgJiBDaGlsZE5vZGU+PjtcbiAgKHNjb3BlOiBTdWdhckVsZW1lbnQ8Tm9kZT4sIHByZWRpY2F0ZTogKGU6IFN1Z2FyRWxlbWVudDxOb2RlPikgPT4gYm9vbGVhbik6IE9wdGlvbmFsPFN1Z2FyRWxlbWVudDxOb2RlICYgQ2hpbGROb2RlPj47XG59ID0gKHNjb3BlOiBTdWdhckVsZW1lbnQ8Tm9kZT4sIHByZWRpY2F0ZTogKGU6IFN1Z2FyRWxlbWVudDxOb2RlPikgPT4gYm9vbGVhbik6IE9wdGlvbmFsPFN1Z2FyRWxlbWVudDxOb2RlICYgQ2hpbGROb2RlPj4gPT4ge1xuICBjb25zdCBlbGVtZW50ID0gc2NvcGUuZG9tO1xuICBpZiAoIWVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgIHJldHVybiBPcHRpb25hbC5ub25lPFN1Z2FyRWxlbWVudDxOb2RlICYgQ2hpbGROb2RlPj4oKTtcbiAgfVxuXG4gIHJldHVybiBjaGlsZChTdWdhckVsZW1lbnQuZnJvbURvbShlbGVtZW50LnBhcmVudE5vZGUpLCAoeCkgPT4gIUNvbXBhcmUuZXEoc2NvcGUsIHgpICYmIHByZWRpY2F0ZSh4KSk7XG59O1xuXG5jb25zdCBjaGlsZDoge1xuICA8VCBleHRlbmRzIE5vZGUgPSBOb2RlPiAoc2NvcGU6IFN1Z2FyRWxlbWVudDxOb2RlPiwgcHJlZGljYXRlOiAoZTogU3VnYXJFbGVtZW50PE5vZGU+KSA9PiBlIGlzIFN1Z2FyRWxlbWVudDxUPik6IE9wdGlvbmFsPFN1Z2FyRWxlbWVudDxUICYgQ2hpbGROb2RlPj47XG4gIChzY29wZTogU3VnYXJFbGVtZW50PE5vZGU+LCBwcmVkaWNhdGU6IChlOiBTdWdhckVsZW1lbnQ8Tm9kZT4pID0+IGJvb2xlYW4pOiBPcHRpb25hbDxTdWdhckVsZW1lbnQ8Tm9kZSAmIENoaWxkTm9kZT4+O1xufSA9IChzY29wZTogU3VnYXJFbGVtZW50PE5vZGU+LCBwcmVkaWNhdGU6IChlOiBTdWdhckVsZW1lbnQ8Tm9kZT4pID0+IGJvb2xlYW4pID0+IHtcbiAgY29uc3QgcHJlZCA9IChub2RlOiBOb2RlKSA9PiBwcmVkaWNhdGUoU3VnYXJFbGVtZW50LmZyb21Eb20obm9kZSkpO1xuICBjb25zdCByZXN1bHQgPSBBcnIuZmluZChzY29wZS5kb20uY2hpbGROb2RlcywgcHJlZCk7XG4gIHJldHVybiByZXN1bHQubWFwKFN1Z2FyRWxlbWVudC5mcm9tRG9tKTtcbn07XG5cbmNvbnN0IGRlc2NlbmRhbnQ6IHtcbiAgPFQgZXh0ZW5kcyBOb2RlID0gTm9kZT4gKHNjb3BlOiBTdWdhckVsZW1lbnQ8Tm9kZT4sIHByZWRpY2F0ZTogKGU6IFN1Z2FyRWxlbWVudDxOb2RlPikgPT4gZSBpcyBTdWdhckVsZW1lbnQ8VD4pOiBPcHRpb25hbDxTdWdhckVsZW1lbnQ8VCAmIENoaWxkTm9kZT4+O1xuICAoc2NvcGU6IFN1Z2FyRWxlbWVudDxOb2RlPiwgcHJlZGljYXRlOiAoZTogU3VnYXJFbGVtZW50PE5vZGU+KSA9PiBib29sZWFuKTogT3B0aW9uYWw8U3VnYXJFbGVtZW50PE5vZGUgJiBDaGlsZE5vZGU+Pjtcbn0gPSAoc2NvcGU6IFN1Z2FyRWxlbWVudDxOb2RlPiwgcHJlZGljYXRlOiAoZTogU3VnYXJFbGVtZW50PE5vZGU+KSA9PiBib29sZWFuKSA9PiB7XG4gIGNvbnN0IGRlc2NlbmQgPSAobm9kZTogTm9kZSk6IE9wdGlvbmFsPFN1Z2FyRWxlbWVudDxOb2RlICYgQ2hpbGROb2RlPj4gPT4ge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpwcmVmZXItZm9yLW9mXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2RlLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNoaWxkID0gU3VnYXJFbGVtZW50LmZyb21Eb20obm9kZS5jaGlsZE5vZGVzW2ldKTtcbiAgICAgIGlmIChwcmVkaWNhdGUoY2hpbGQpKSB7XG4gICAgICAgIHJldHVybiBPcHRpb25hbC5zb21lKGNoaWxkKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVzID0gZGVzY2VuZChub2RlLmNoaWxkTm9kZXNbaV0pO1xuICAgICAgaWYgKHJlcy5pc1NvbWUoKSkge1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBPcHRpb25hbC5ub25lPFN1Z2FyRWxlbWVudDxOb2RlICYgQ2hpbGROb2RlPj4oKTtcbiAgfTtcblxuICByZXR1cm4gZGVzY2VuZChzY29wZS5kb20pO1xufTtcblxuZXhwb3J0IHsgZmlyc3QsIGFuY2VzdG9yLCBjbG9zZXN0LCBzaWJsaW5nLCBjaGlsZCwgZGVzY2VuZGFudCB9O1xuIiwiaW1wb3J0IHR5cGUgeyBTdWdhckVsZW1lbnQgfSBmcm9tICcuLi9ub2RlL1N1Z2FyRWxlbWVudCc7XG5cbmltcG9ydCAqIGFzIFByZWRpY2F0ZUZpbHRlciBmcm9tICcuL1ByZWRpY2F0ZUZpbHRlcic7XG5pbXBvcnQgKiBhcyBTZWxlY3RvcnMgZnJvbSAnLi9TZWxlY3RvcnMnO1xuXG5jb25zdCBhbGwgPSA8VCBleHRlbmRzIEVsZW1lbnQgPSBFbGVtZW50PiAoc2VsZWN0b3I6IHN0cmluZyk6IFN1Z2FyRWxlbWVudDxUPltdID0+XG4gIFNlbGVjdG9ycy5hbGw8VD4oc2VsZWN0b3IpO1xuXG4vLyBGb3IgYWxsIG9mIHRoZSBmb2xsb3dpbmc6XG4vL1xuLy8galF1ZXJ5IGRvZXMgc2libGluZ3Mgb2YgZmlyc3RDaGlsZC4gSUU5KyBzdXBwb3J0cyBzY29wZS5kb20uY2hpbGRyZW4gKHNpbWlsYXIgdG8gVHJhdmVyc2UuY2hpbGRyZW4gYnV0IGVsZW1lbnRzIG9ubHkpLlxuLy8gVHJhdmVyc2Ugc2hvdWxkIGFsc28gZG8gdGhpcyAoYnV0IHByb2JhYmx5IG5vdCBieSBkZWZhdWx0KS5cbi8vXG5cbmNvbnN0IGFuY2VzdG9ycyA9IDxUIGV4dGVuZHMgRWxlbWVudCA9IEVsZW1lbnQ+IChzY29wZTogU3VnYXJFbGVtZW50PE5vZGU+LCBzZWxlY3Rvcjogc3RyaW5nLCBpc1Jvb3Q/OiAoZTogU3VnYXJFbGVtZW50PE5vZGU+KSA9PiBib29sZWFuKTogU3VnYXJFbGVtZW50PFQ+W10gPT5cbiAgLy8gSXQgbWF5IHN1cnByaXNlIHlvdSB0byBsZWFybiB0aGlzIGlzIGV4YWN0bHkgd2hhdCBKUXVlcnkgZG9lc1xuICAvLyBUT0RPOiBBdm9pZCBhbGwgdGhpcyB3cmFwcGluZyBhbmQgdW53cmFwcGluZ1xuICBQcmVkaWNhdGVGaWx0ZXIuYW5jZXN0b3JzKHNjb3BlLCAoZSk6IGUgaXMgU3VnYXJFbGVtZW50PFQ+ID0+IFNlbGVjdG9ycy5pczxUPihlLCBzZWxlY3RvciksIGlzUm9vdCk7XG5cbmNvbnN0IHNpYmxpbmdzID0gPFQgZXh0ZW5kcyBFbGVtZW50ID0gRWxlbWVudD4gKHNjb3BlOiBTdWdhckVsZW1lbnQ8Tm9kZT4sIHNlbGVjdG9yOiBzdHJpbmcpOiBTdWdhckVsZW1lbnQ8VD5bXSA9PlxuICAvLyBJdCBtYXkgc3VycHJpc2UgeW91IHRvIGxlYXJuIHRoaXMgaXMgZXhhY3RseSB3aGF0IEpRdWVyeSBkb2VzXG4gIC8vIFRPRE86IEF2b2lkIGFsbCB0aGUgd3JhcHBpbmcgYW5kIHVud3JhcHBpbmdcbiAgUHJlZGljYXRlRmlsdGVyLnNpYmxpbmdzKHNjb3BlLCAoZSk6IGUgaXMgU3VnYXJFbGVtZW50PFQ+ID0+IFNlbGVjdG9ycy5pczxUPihlLCBzZWxlY3RvcikpO1xuXG5jb25zdCBjaGlsZHJlbiA9IDxUIGV4dGVuZHMgRWxlbWVudCA9IEVsZW1lbnQ+IChzY29wZTogU3VnYXJFbGVtZW50PE5vZGU+LCBzZWxlY3Rvcjogc3RyaW5nKTogU3VnYXJFbGVtZW50PFQ+W10gPT5cbiAgLy8gSXQgbWF5IHN1cnByaXNlIHlvdSB0byBsZWFybiB0aGlzIGlzIGV4YWN0bHkgd2hhdCBKUXVlcnkgZG9lc1xuICAvLyBUT0RPOiBBdm9pZCBhbGwgdGhlIHdyYXBwaW5nIGFuZCB1bndyYXBwaW5nXG4gIFByZWRpY2F0ZUZpbHRlci5jaGlsZHJlbihzY29wZSwgKGUpOiBlIGlzIFN1Z2FyRWxlbWVudDxUPiA9PiBTZWxlY3RvcnMuaXM8VD4oZSwgc2VsZWN0b3IpKTtcblxuY29uc3QgZGVzY2VuZGFudHMgPSA8VCBleHRlbmRzIEVsZW1lbnQgPSBFbGVtZW50PiAoc2NvcGU6IFN1Z2FyRWxlbWVudDxOb2RlPiwgc2VsZWN0b3I6IHN0cmluZyk6IFN1Z2FyRWxlbWVudDxUPltdID0+XG4gIFNlbGVjdG9ycy5hbGw8VD4oc2VsZWN0b3IsIHNjb3BlKTtcblxuZXhwb3J0IHtcbiAgYWxsLFxuICBhbmNlc3RvcnMsXG4gIHNpYmxpbmdzLFxuICBjaGlsZHJlbixcbiAgZGVzY2VuZGFudHNcbn07XG4iLCJpbXBvcnQgdHlwZSB7IE9wdGlvbmFsIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0IENsb3Nlc3RPckFuY2VzdG9yIGZyb20gJy4uLy4uL2ltcGwvQ2xvc2VzdE9yQW5jZXN0b3InO1xuaW1wb3J0IHR5cGUgeyBTdWdhckVsZW1lbnQgfSBmcm9tICcuLi9ub2RlL1N1Z2FyRWxlbWVudCc7XG5cbmltcG9ydCAqIGFzIFByZWRpY2F0ZUZpbmQgZnJvbSAnLi9QcmVkaWNhdGVGaW5kJztcbmltcG9ydCAqIGFzIFNlbGVjdG9ycyBmcm9tICcuL1NlbGVjdG9ycyc7XG5cbi8vIFRPRE86IEFuIGludGVybmFsIFNlbGVjdG9yRmlsdGVyIG1vZHVsZSB0aGF0IGRvZXNuJ3QgU3VnYXJFbGVtZW50LmZyb21Eb20oKSBldmVyeXRoaW5nXG5cbmNvbnN0IGZpcnN0ID0gPFQgZXh0ZW5kcyBFbGVtZW50ID0gRWxlbWVudD4gKHNlbGVjdG9yOiBzdHJpbmcpOiBPcHRpb25hbDxTdWdhckVsZW1lbnQ8VD4+ID0+XG4gIFNlbGVjdG9ycy5vbmU8VD4oc2VsZWN0b3IpO1xuXG5jb25zdCBhbmNlc3RvciA9IDxUIGV4dGVuZHMgRWxlbWVudCA9IEVsZW1lbnQ+IChzY29wZTogU3VnYXJFbGVtZW50PE5vZGU+LCBzZWxlY3Rvcjogc3RyaW5nLCBpc1Jvb3Q/OiAoZTogU3VnYXJFbGVtZW50PE5vZGU+KSA9PiBib29sZWFuKTogT3B0aW9uYWw8U3VnYXJFbGVtZW50PFQ+PiA9PlxuICBQcmVkaWNhdGVGaW5kLmFuY2VzdG9yKHNjb3BlLCAoZSk6IGUgaXMgU3VnYXJFbGVtZW50PFQ+ID0+IFNlbGVjdG9ycy5pczxUPihlLCBzZWxlY3RvciksIGlzUm9vdCk7XG5cbmNvbnN0IHNpYmxpbmcgPSA8VCBleHRlbmRzIEVsZW1lbnQgPSBFbGVtZW50PiAoc2NvcGU6IFN1Z2FyRWxlbWVudDxOb2RlPiwgc2VsZWN0b3I6IHN0cmluZyk6IE9wdGlvbmFsPFN1Z2FyRWxlbWVudDxUPj4gPT5cbiAgUHJlZGljYXRlRmluZC5zaWJsaW5nKHNjb3BlLCAoZSk6IGUgaXMgU3VnYXJFbGVtZW50PFQ+ID0+IFNlbGVjdG9ycy5pczxUPihlLCBzZWxlY3RvcikpO1xuXG5jb25zdCBjaGlsZCA9IDxUIGV4dGVuZHMgRWxlbWVudCA9IEVsZW1lbnQ+IChzY29wZTogU3VnYXJFbGVtZW50PE5vZGU+LCBzZWxlY3Rvcjogc3RyaW5nKTogT3B0aW9uYWw8U3VnYXJFbGVtZW50PFQ+PiA9PlxuICBQcmVkaWNhdGVGaW5kLmNoaWxkKHNjb3BlLCAoZSk6IGUgaXMgU3VnYXJFbGVtZW50PFQ+ID0+IFNlbGVjdG9ycy5pczxUPihlLCBzZWxlY3RvcikpO1xuXG5jb25zdCBkZXNjZW5kYW50ID0gPFQgZXh0ZW5kcyBFbGVtZW50ID0gRWxlbWVudD4gKHNjb3BlOiBTdWdhckVsZW1lbnQ8Tm9kZT4sIHNlbGVjdG9yOiBzdHJpbmcpOiBPcHRpb25hbDxTdWdhckVsZW1lbnQ8VD4+ID0+XG4gIFNlbGVjdG9ycy5vbmU8VD4oc2VsZWN0b3IsIHNjb3BlKTtcblxuLy8gUmV0dXJucyBTb21lKGNsb3Nlc3QgYW5jZXN0b3IgZWxlbWVudCAoc3VnYXJlZCkpIG1hdGNoaW5nICdzZWxlY3RvcicgdXAgdG8gaXNSb290LCBvciBOb25lKCkgb3RoZXJ3aXNlXG5jb25zdCBjbG9zZXN0ID0gPFQgZXh0ZW5kcyBFbGVtZW50ID0gRWxlbWVudD4gKHNjb3BlOiBTdWdhckVsZW1lbnQ8Tm9kZT4sIHNlbGVjdG9yOiBzdHJpbmcsIGlzUm9vdD86IChlOiBTdWdhckVsZW1lbnQ8Tm9kZT4pID0+IGJvb2xlYW4pOiBPcHRpb25hbDxTdWdhckVsZW1lbnQ8VD4+ID0+IHtcbiAgY29uc3QgaXMgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+LCBzZWxlY3Rvcjogc3RyaW5nKTogZWxlbWVudCBpcyBTdWdhckVsZW1lbnQ8VD4gPT4gU2VsZWN0b3JzLmlzPFQ+KGVsZW1lbnQsIHNlbGVjdG9yKTtcbiAgcmV0dXJuIENsb3Nlc3RPckFuY2VzdG9yPHN0cmluZywgVD4oaXMsIGFuY2VzdG9yLCBzY29wZSwgc2VsZWN0b3IsIGlzUm9vdCk7XG59O1xuXG5leHBvcnQge1xuICBmaXJzdCxcbiAgYW5jZXN0b3IsXG4gIHNpYmxpbmcsXG4gIGNoaWxkLFxuICBkZXNjZW5kYW50LFxuICBjbG9zZXN0XG59O1xuIiwiaW1wb3J0IHsgQXJyLCBPcHRpb25hbCB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmltcG9ydCB7IERPQ1VNRU5ULCBET0NVTUVOVF9GUkFHTUVOVCwgRUxFTUVOVCB9IGZyb20gJy4uL25vZGUvTm9kZVR5cGVzJztcbmltcG9ydCB7IFN1Z2FyRWxlbWVudCB9IGZyb20gJy4uL25vZGUvU3VnYXJFbGVtZW50JztcblxuaW50ZXJmYWNlIFZlbmRvckVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgbXNNYXRjaGVzU2VsZWN0b3I/OiAoc2VsZWN0b3I6IHN0cmluZykgPT4gYm9vbGVhbjtcbiAgbW96TWF0Y2hlc1NlbGVjdG9yPzogKHNlbGVjdG9yOiBzdHJpbmcpID0+IGJvb2xlYW47XG59XG5cbmNvbnN0IGlzID0gPFQgZXh0ZW5kcyBFbGVtZW50ID0gRWxlbWVudD4gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPiwgc2VsZWN0b3I6IHN0cmluZyk6IGVsZW1lbnQgaXMgU3VnYXJFbGVtZW50PFQ+ID0+IHtcbiAgY29uc3QgZG9tID0gZWxlbWVudC5kb207XG4gIGlmIChkb20ubm9kZVR5cGUgIT09IEVMRU1FTlQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZWxlbSA9IGRvbSBhcyBWZW5kb3JFbGVtZW50O1xuICAgIGlmIChlbGVtLm1hdGNoZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGVsZW0ubWF0Y2hlcyhzZWxlY3Rvcik7XG4gICAgfSBlbHNlIGlmIChlbGVtLm1zTWF0Y2hlc1NlbGVjdG9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBlbGVtLm1zTWF0Y2hlc1NlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICB9IGVsc2UgaWYgKGVsZW0ud2Via2l0TWF0Y2hlc1NlbGVjdG9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBlbGVtLndlYmtpdE1hdGNoZXNTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgfSBlbHNlIGlmIChlbGVtLm1vek1hdGNoZXNTZWxlY3RvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBjYXN0IHRvIGFueSBhcyBtb3pNYXRjaGVzU2VsZWN0b3IgZG9lc24ndCBleGlzdCBpbiBUUyBET00gbGliXG4gICAgICByZXR1cm4gZWxlbS5tb3pNYXRjaGVzU2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Jyb3dzZXIgbGFja3MgbmF0aXZlIHNlbGVjdG9ycycpO1xuICAgIH0gLy8gdW5mb3J0dW5hdGVseSB3ZSBjYW4ndCB0aHJvdyB0aGlzIG9uIHN0YXJ0dXAgOihcbiAgfVxufTtcblxuY29uc3QgYnlwYXNzU2VsZWN0b3IgPSAoZG9tOiBOb2RlKSA9PlxuICAvLyBPbmx5IGVsZW1lbnRzLCBkb2N1bWVudHMgYW5kIHNoYWRvdyByb290cyBzdXBwb3J0IHF1ZXJ5U2VsZWN0b3JcbiAgLy8gc2hhZG93IHJvb3QgZWxlbWVudCB0eXBlIGlzIERPQ1VNRU5UX0ZSQUdNRU5UXG4gIGRvbS5ub2RlVHlwZSAhPT0gRUxFTUVOVCAmJiBkb20ubm9kZVR5cGUgIT09IERPQ1VNRU5UICYmIGRvbS5ub2RlVHlwZSAhPT0gRE9DVU1FTlRfRlJBR01FTlQgfHxcbiAgICAvLyBJRSBmaXggZm9yIGNvbXBsZXggcXVlcmllcyBvbiBlbXB0eSBub2RlczogaHR0cDovL2pzZmlkZGxlLm5ldC9zcHlkZXIvZnY5cHRyNUwvXG4gICAgKGRvbSBhcyBFbGVtZW50IHwgRG9jdW1lbnQgfCBEb2N1bWVudEZyYWdtZW50KS5jaGlsZEVsZW1lbnRDb3VudCA9PT0gMDtcblxuY29uc3QgYWxsID0gPFQgZXh0ZW5kcyBFbGVtZW50ID0gRWxlbWVudD4gKHNlbGVjdG9yOiBzdHJpbmcsIHNjb3BlPzogU3VnYXJFbGVtZW50PE5vZGU+KTogU3VnYXJFbGVtZW50PFQ+W10gPT4ge1xuICBjb25zdCBiYXNlID0gc2NvcGUgPT09IHVuZGVmaW5lZCA/IGRvY3VtZW50IDogc2NvcGUuZG9tO1xuICByZXR1cm4gYnlwYXNzU2VsZWN0b3IoYmFzZSkgPyBbXSA6IEFyci5tYXAoKGJhc2UgYXMgRWxlbWVudCB8IERvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsPFQ+KHNlbGVjdG9yKSwgU3VnYXJFbGVtZW50LmZyb21Eb20pO1xufTtcblxuY29uc3Qgb25lID0gPFQgZXh0ZW5kcyBFbGVtZW50ID0gRWxlbWVudD4gKHNlbGVjdG9yOiBzdHJpbmcsIHNjb3BlPzogU3VnYXJFbGVtZW50PE5vZGU+KTogT3B0aW9uYWw8U3VnYXJFbGVtZW50PFQ+PiA9PiB7XG4gIGNvbnN0IGJhc2UgPSBzY29wZSA9PT0gdW5kZWZpbmVkID8gZG9jdW1lbnQgOiBzY29wZS5kb207XG4gIHJldHVybiBieXBhc3NTZWxlY3RvcihiYXNlKSA/IE9wdGlvbmFsLm5vbmU8U3VnYXJFbGVtZW50PFQ+PigpIDogT3B0aW9uYWwuZnJvbSgoYmFzZSBhcyBFbGVtZW50IHwgRG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3I8VD4oc2VsZWN0b3IpKS5tYXAoU3VnYXJFbGVtZW50LmZyb21Eb20pO1xufTtcblxuZXhwb3J0IHtcbiAgYWxsLFxuICBpcyxcbiAgb25lXG59O1xuIiwiaW1wb3J0IHsgQXJyLCBGdW4sIE9wdGlvbmFsLCBUeXBlIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0ICogYXMgUmVjdXJzZSBmcm9tICcuLi8uLi9hbGllbi9SZWN1cnNlJztcbmltcG9ydCAqIGFzIENvbXBhcmUgZnJvbSAnLi4vZG9tL0NvbXBhcmUnO1xuaW1wb3J0IHsgU3VnYXJFbGVtZW50IH0gZnJvbSAnLi4vbm9kZS9TdWdhckVsZW1lbnQnO1xuaW1wb3J0ICogYXMgU3VnYXJOb2RlIGZyb20gJy4uL25vZGUvU3VnYXJOb2RlJztcblxuLyoqXG4gKiBUaGUgZG9jdW1lbnQgYXNzb2NpYXRlZCB3aXRoIHRoZSBjdXJyZW50IGVsZW1lbnRcbiAqIE5PVEU6IHRoaXMgd2lsbCB0aHJvdyBpZiB0aGUgb3duZXIgaXMgbnVsbC5cbiAqL1xuY29uc3Qgb3duZXIgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KTogU3VnYXJFbGVtZW50PERvY3VtZW50PiA9PlxuICBTdWdhckVsZW1lbnQuZnJvbURvbShlbGVtZW50LmRvbS5vd25lckRvY3VtZW50IGFzIERvY3VtZW50KTtcblxuLyoqXG4gKiBJZiB0aGUgZWxlbWVudCBpcyBhIGRvY3VtZW50LCByZXR1cm4gaXQuIE90aGVyd2lzZSwgcmV0dXJuIGl0cyBvd25lckRvY3VtZW50LlxuICogQHBhcmFtIGRvc1xuICovXG5jb25zdCBkb2N1bWVudE9yT3duZXIgPSAoZG9zOiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBTdWdhckVsZW1lbnQ8RG9jdW1lbnQ+ID0+XG4gIFN1Z2FyTm9kZS5pc0RvY3VtZW50KGRvcykgPyBkb3MgOiBvd25lcihkb3MpO1xuXG5jb25zdCBkb2N1bWVudEVsZW1lbnQgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KTogU3VnYXJFbGVtZW50PEhUTUxFbGVtZW50PiA9PlxuICBTdWdhckVsZW1lbnQuZnJvbURvbShkb2N1bWVudE9yT3duZXIoZWxlbWVudCkuZG9tLmRvY3VtZW50RWxlbWVudCk7XG5cbi8qKlxuICogVGhlIHdpbmRvdyBlbGVtZW50IGFzc29jaWF0ZWQgd2l0aCB0aGUgZWxlbWVudFxuICogTk9URTogdGhpcyB3aWxsIHRocm93IGlmIHRoZSBkZWZhdWx0VmlldyBpcyBudWxsLlxuICovXG5jb25zdCBkZWZhdWx0VmlldyA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBTdWdhckVsZW1lbnQ8V2luZG93PiA9PlxuICBTdWdhckVsZW1lbnQuZnJvbURvbShkb2N1bWVudE9yT3duZXIoZWxlbWVudCkuZG9tLmRlZmF1bHRWaWV3IGFzIFdpbmRvdyk7XG5cbmNvbnN0IHBhcmVudCA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBPcHRpb25hbDxTdWdhckVsZW1lbnQ8Tm9kZSAmIFBhcmVudE5vZGU+PiA9PlxuICBPcHRpb25hbC5mcm9tKGVsZW1lbnQuZG9tLnBhcmVudE5vZGUpLm1hcChTdWdhckVsZW1lbnQuZnJvbURvbSk7XG5cbi8vIENhc3QgZG93biB0byBqdXN0IGJlIFN1Z2FyRWxlbWVudDxOb2RlPlxuY29uc3QgcGFyZW50Tm9kZSA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBPcHRpb25hbDxTdWdhckVsZW1lbnQ8Tm9kZT4+ID0+XG4gIHBhcmVudChlbGVtZW50KSBhcyBhbnk7XG5cbmNvbnN0IHBhcmVudEVsZW1lbnQgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KTogT3B0aW9uYWw8U3VnYXJFbGVtZW50PEhUTUxFbGVtZW50Pj4gPT5cbiAgT3B0aW9uYWwuZnJvbShlbGVtZW50LmRvbS5wYXJlbnRFbGVtZW50KS5tYXAoU3VnYXJFbGVtZW50LmZyb21Eb20pO1xuXG5jb25zdCBmaW5kSW5kZXggPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KTogT3B0aW9uYWw8bnVtYmVyPiA9PlxuICBwYXJlbnQoZWxlbWVudCkuYmluZCgocCkgPT4ge1xuICAgIC8vIFRPRE86IFJlZmFjdG9yIG91dCBjaGlsZHJlbiBzbyB3ZSBjYW4gYXZvaWQgdGhlIGNvbnN0YW50IHVud3JhcHBpbmdcbiAgICBjb25zdCBraW4gPSBjaGlsZHJlbihwKTtcbiAgICByZXR1cm4gQXJyLmZpbmRJbmRleChraW4sIChlbGVtKSA9PiBDb21wYXJlLmVxKGVsZW1lbnQsIGVsZW0pKTtcbiAgfSk7XG5cbmNvbnN0IHBhcmVudHMgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+LCBpc1Jvb3Q/OiAoZTogU3VnYXJFbGVtZW50PE5vZGU+KSA9PiBib29sZWFuKTogU3VnYXJFbGVtZW50PE5vZGU+W10gPT4ge1xuICBjb25zdCBzdG9wID0gVHlwZS5pc0Z1bmN0aW9uKGlzUm9vdCkgPyBpc1Jvb3QgOiBGdW4ubmV2ZXI7XG5cbiAgLy8gVGhpcyBpcyB1c2VkIGEgKmxvdCogc28gaXQgbmVlZHMgdG8gYmUgcGVyZm9ybWFudCwgbm90IHJlY3Vyc2l2ZVxuICBsZXQgZG9tOiBOb2RlID0gZWxlbWVudC5kb207XG4gIGNvbnN0IHJldDogU3VnYXJFbGVtZW50PE5vZGU+W10gPSBbXTtcblxuICB3aGlsZSAoZG9tLnBhcmVudE5vZGUgIT09IG51bGwgJiYgZG9tLnBhcmVudE5vZGUgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IHJhd1BhcmVudCA9IGRvbS5wYXJlbnROb2RlO1xuICAgIGNvbnN0IHAgPSBTdWdhckVsZW1lbnQuZnJvbURvbShyYXdQYXJlbnQpO1xuICAgIHJldC5wdXNoKHApO1xuXG4gICAgaWYgKHN0b3AocCkgPT09IHRydWUpIHtcbiAgICAgIGJyZWFrO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb20gPSByYXdQYXJlbnQ7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXQ7XG59O1xuXG5jb25zdCBzaWJsaW5ncyA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBTdWdhckVsZW1lbnQ8Tm9kZT5bXSA9PiB7XG4gIC8vIFRPRE86IFJlZmFjdG9yIG91dCBjaGlsZHJlbiBzbyB3ZSBjYW4ganVzdCBub3QgYWRkIHNlbGYgaW5zdGVhZCBvZiBmaWx0ZXJpbmcgYWZ0ZXJ3YXJkc1xuICBjb25zdCBmaWx0ZXJTZWxmID0gPEU+IChlbGVtZW50czogU3VnYXJFbGVtZW50PEU+W10pID0+IEFyci5maWx0ZXIoZWxlbWVudHMsICh4KSA9PiAhQ29tcGFyZS5lcShlbGVtZW50LCB4KSk7XG5cbiAgcmV0dXJuIHBhcmVudChlbGVtZW50KS5tYXAoY2hpbGRyZW4pLm1hcChmaWx0ZXJTZWxmKS5nZXRPcihbXSk7XG59O1xuXG5jb25zdCBvZmZzZXRQYXJlbnQgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PEhUTUxFbGVtZW50Pik6IE9wdGlvbmFsPFN1Z2FyRWxlbWVudDxIVE1MRWxlbWVudD4+ID0+XG4gIE9wdGlvbmFsLmZyb20oZWxlbWVudC5kb20ub2Zmc2V0UGFyZW50IGFzIEhUTUxFbGVtZW50KS5tYXAoU3VnYXJFbGVtZW50LmZyb21Eb20pO1xuXG5jb25zdCBwcmV2U2libGluZyA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBPcHRpb25hbDxTdWdhckVsZW1lbnQ8Tm9kZSAmIENoaWxkTm9kZT4+ID0+XG4gIE9wdGlvbmFsLmZyb20oZWxlbWVudC5kb20ucHJldmlvdXNTaWJsaW5nKS5tYXAoU3VnYXJFbGVtZW50LmZyb21Eb20pO1xuXG5jb25zdCBuZXh0U2libGluZyA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBPcHRpb25hbDxTdWdhckVsZW1lbnQ8Tm9kZSAmIENoaWxkTm9kZT4+ID0+XG4gIE9wdGlvbmFsLmZyb20oZWxlbWVudC5kb20ubmV4dFNpYmxpbmcpLm1hcChTdWdhckVsZW1lbnQuZnJvbURvbSk7XG5cbi8vIFRoaXMgb25lIG5lZWRzIHRvIGJlIHJldmVyc2VkLCBzbyB0aGV5J3JlIHN0aWxsIGluIERPTSBvcmRlclxuY29uc3QgcHJldlNpYmxpbmdzID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPik6IFN1Z2FyRWxlbWVudDxOb2RlICYgQ2hpbGROb2RlPltdID0+XG4gIEFyci5yZXZlcnNlKFJlY3Vyc2UudG9BcnJheShlbGVtZW50LCBwcmV2U2libGluZykpO1xuXG5jb25zdCBuZXh0U2libGluZ3MgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KTogU3VnYXJFbGVtZW50PE5vZGUgJiBDaGlsZE5vZGU+W10gPT5cbiAgUmVjdXJzZS50b0FycmF5KGVsZW1lbnQsIG5leHRTaWJsaW5nKTtcblxuY29uc3QgY2hpbGRyZW4gPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KTogU3VnYXJFbGVtZW50PE5vZGUgJiBDaGlsZE5vZGU+W10gPT5cbiAgQXJyLm1hcChlbGVtZW50LmRvbS5jaGlsZE5vZGVzLCBTdWdhckVsZW1lbnQuZnJvbURvbSk7XG5cbmNvbnN0IGNoaWxkID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPiwgaW5kZXg6IG51bWJlcik6IE9wdGlvbmFsPFN1Z2FyRWxlbWVudDxOb2RlICYgQ2hpbGROb2RlPj4gPT4ge1xuICBjb25zdCBjcyA9IGVsZW1lbnQuZG9tLmNoaWxkTm9kZXM7XG4gIHJldHVybiBPcHRpb25hbC5mcm9tKGNzW2luZGV4XSkubWFwKFN1Z2FyRWxlbWVudC5mcm9tRG9tKTtcbn07XG5cbmNvbnN0IGZpcnN0Q2hpbGQgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KTogT3B0aW9uYWw8U3VnYXJFbGVtZW50PE5vZGUgJiBDaGlsZE5vZGU+PiA9PlxuICBjaGlsZChlbGVtZW50LCAwKTtcblxuY29uc3QgbGFzdENoaWxkID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPik6IE9wdGlvbmFsPFN1Z2FyRWxlbWVudDxOb2RlICYgQ2hpbGROb2RlPj4gPT5cbiAgY2hpbGQoZWxlbWVudCwgZWxlbWVudC5kb20uY2hpbGROb2Rlcy5sZW5ndGggLSAxKTtcblxuY29uc3QgY2hpbGROb2Rlc0NvdW50ID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPik6IG51bWJlciA9PlxuICBlbGVtZW50LmRvbS5jaGlsZE5vZGVzLmxlbmd0aDtcblxuY29uc3QgaGFzQ2hpbGROb2RlcyA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBib29sZWFuID0+XG4gIGVsZW1lbnQuZG9tLmhhc0NoaWxkTm9kZXMoKTtcblxuZXhwb3J0IGludGVyZmFjZSBFbGVtZW50QW5kT2Zmc2V0PEU+IHtcbiAgcmVhZG9ubHkgZWxlbWVudDogU3VnYXJFbGVtZW50PEU+O1xuICByZWFkb25seSBvZmZzZXQ6IG51bWJlcjtcbn1cblxuY29uc3Qgc3BvdCA9IDxFPihlbGVtZW50OiBTdWdhckVsZW1lbnQ8RT4sIG9mZnNldDogbnVtYmVyKTogRWxlbWVudEFuZE9mZnNldDxFPiA9PiAoe1xuICBlbGVtZW50LFxuICBvZmZzZXRcbn0pO1xuXG5jb25zdCBsZWFmID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPiwgb2Zmc2V0OiBudW1iZXIpOiBFbGVtZW50QW5kT2Zmc2V0PE5vZGU+ID0+IHtcbiAgY29uc3QgY3MgPSBjaGlsZHJlbihlbGVtZW50KTtcbiAgcmV0dXJuIGNzLmxlbmd0aCA+IDAgJiYgb2Zmc2V0IDwgY3MubGVuZ3RoID8gc3BvdChjc1tvZmZzZXRdLCAwKSA6IHNwb3QoZWxlbWVudCwgb2Zmc2V0KTtcbn07XG5cbmV4cG9ydCB7XG4gIG93bmVyLFxuICBkb2N1bWVudE9yT3duZXIsXG4gIGRlZmF1bHRWaWV3LFxuICBkb2N1bWVudEVsZW1lbnQsXG4gIHBhcmVudCxcbiAgcGFyZW50Tm9kZSxcbiAgcGFyZW50RWxlbWVudCxcbiAgZmluZEluZGV4LFxuICBwYXJlbnRzLFxuICBzaWJsaW5ncyxcbiAgcHJldlNpYmxpbmcsXG4gIG9mZnNldFBhcmVudCxcbiAgcHJldlNpYmxpbmdzLFxuICBuZXh0U2libGluZyxcbiAgbmV4dFNpYmxpbmdzLFxuICBjaGlsZHJlbixcbiAgY2hpbGQsXG4gIGZpcnN0Q2hpbGQsXG4gIGxhc3RDaGlsZCxcbiAgY2hpbGROb2Rlc0NvdW50LFxuICBoYXNDaGlsZE5vZGVzLFxuICBsZWFmXG59O1xuIiwiaW1wb3J0IHsgT3B0aW9uYWwsIFR5cGUgfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5pbXBvcnQgdHlwZSB7IFN1Z2FyRWxlbWVudCB9IGZyb20gJy4uL2FwaS9ub2RlL1N1Z2FyRWxlbWVudCc7XG5cbnR5cGUgVGVzdEZuID0gKGU6IFN1Z2FyRWxlbWVudDxOb2RlPikgPT4gYm9vbGVhbjtcbnR5cGUgU2NvcGVUZXN0Rm48VCwgUiBleHRlbmRzIE5vZGU+ID0gKHNjb3BlOiBTdWdhckVsZW1lbnQ8Tm9kZT4sIGE6IFQpID0+IHNjb3BlIGlzIFN1Z2FyRWxlbWVudDxSPjtcbnR5cGUgQW5jZXN0b3JGbjxULCBSIGV4dGVuZHMgTm9kZT4gPSAoc2NvcGU6IFN1Z2FyRWxlbWVudDxOb2RlPiwgcHJlZGljYXRlOiBULCBpc1Jvb3Q/OiBUZXN0Rm4pID0+IE9wdGlvbmFsPFN1Z2FyRWxlbWVudDxSPj47XG5cbmV4cG9ydCBkZWZhdWx0IDxULCBSIGV4dGVuZHMgTm9kZSA9IE5vZGU+IChpczogU2NvcGVUZXN0Rm48VCwgUj4sIGFuY2VzdG9yOiBBbmNlc3RvckZuPFQsIFI+LCBzY29wZTogU3VnYXJFbGVtZW50PE5vZGU+LCBhOiBULCBpc1Jvb3Q/OiBUZXN0Rm4pOiBPcHRpb25hbDxTdWdhckVsZW1lbnQ8Uj4+ID0+IHtcbiAgaWYgKGlzKHNjb3BlLCBhKSkge1xuICAgIHJldHVybiBPcHRpb25hbC5zb21lKHNjb3BlKTtcbiAgfSBlbHNlIGlmIChUeXBlLmlzRnVuY3Rpb24oaXNSb290KSAmJiBpc1Jvb3Qoc2NvcGUpKSB7XG4gICAgcmV0dXJuIE9wdGlvbmFsLm5vbmU8U3VnYXJFbGVtZW50PFI+PigpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBhbmNlc3RvcihzY29wZSwgYSwgaXNSb290KTtcbiAgfVxufTtcbiIsImltcG9ydCB7IFR5cGUgfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG4vLyBzb21lIGVsZW1lbnRzLCBzdWNoIGFzIG1hdGhtbCwgZG9uJ3QgaGF2ZSBzdHlsZSBhdHRyaWJ1dGVzXG4vLyBvdGhlcnMsIHN1Y2ggYXMgYW5ndWxhciBlbGVtZW50cywgaGF2ZSBzdHlsZSBhdHRyaWJ1dGVzIHRoYXQgYXJlbid0IGEgQ1NTU3R5bGVEZWNsYXJhdGlvblxuY29uc3QgaXNTdXBwb3J0ZWQgPSA8VCBleHRlbmRzIE5vZGU+KGRvbTogVCk6IGRvbSBpcyAoVCAmIEVsZW1lbnRDU1NJbmxpbmVTdHlsZSkgPT5cblxuICAoZG9tIGFzIGFueSkuc3R5bGUgIT09IHVuZGVmaW5lZCAmJiBUeXBlLmlzRnVuY3Rpb24oKGRvbSBhcyBhbnkpLnN0eWxlLmdldFByb3BlcnR5VmFsdWUpO1xuXG5leHBvcnQgeyBpc1N1cHBvcnRlZCB9O1xuIiwiaW1wb3J0IFBsdWdpbk1hbmFnZXIgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9QbHVnaW5NYW5hZ2VyJztcblxuaW1wb3J0ICogYXMgQ29tbWFuZHMgZnJvbSAnLi9hcGkvQ29tbWFuZHMnO1xuaW1wb3J0ICogYXMgQnV0dG9ucyBmcm9tICcuL3VpL0J1dHRvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCAoKTogdm9pZCA9PiB7XG4gIFBsdWdpbk1hbmFnZXIuYWRkKCdkaXJlY3Rpb25hbGl0eScsIChlZGl0b3IpID0+IHtcbiAgICBDb21tYW5kcy5yZWdpc3RlcihlZGl0b3IpO1xuICAgIEJ1dHRvbnMucmVnaXN0ZXIoZWRpdG9yKTtcbiAgfSk7XG59O1xuIiwiaW1wb3J0IHR5cGUgRWRpdG9yIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvRWRpdG9yJztcblxuaW1wb3J0ICogYXMgRGlyZWN0aW9uIGZyb20gJy4uL2NvcmUvRGlyZWN0aW9uJztcblxuY29uc3QgcmVnaXN0ZXIgPSAoZWRpdG9yOiBFZGl0b3IpOiB2b2lkID0+IHtcbiAgZWRpdG9yLmFkZENvbW1hbmQoJ21jZURpcmVjdGlvbkxUUicsICgpID0+IHtcbiAgICBEaXJlY3Rpb24uc2V0RGlyKGVkaXRvciwgJ2x0cicpO1xuICB9KTtcblxuICBlZGl0b3IuYWRkQ29tbWFuZCgnbWNlRGlyZWN0aW9uUlRMJywgKCkgPT4ge1xuICAgIERpcmVjdGlvbi5zZXREaXIoZWRpdG9yLCAncnRsJyk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHtcbiAgcmVnaXN0ZXJcbn07XG4iLCJpbXBvcnQgeyBBcnIsIE9wdGlvbmFsIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcbmltcG9ydCB7IFRyYXZlcnNlLCBBdHRyaWJ1dGUsIFN1Z2FyRWxlbWVudCwgU3VnYXJOb2RlLCBTZWxlY3RvckZpbmQsIERpcmVjdGlvbiwgU2VsZWN0b3JGaWx0ZXIgfSBmcm9tICdAZXBob3gvc3VnYXInO1xuXG5pbXBvcnQgdHlwZSBET01VdGlscyBmcm9tICd0aW55bWNlL2NvcmUvYXBpL2RvbS9ET01VdGlscyc7XG5pbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuXG50eXBlIERpciA9ICdydGwnIHwgJ2x0cic7XG5cbmNvbnN0IGdldFBhcmVudEVsZW1lbnQgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PEVsZW1lbnQ+KTogT3B0aW9uYWw8U3VnYXJFbGVtZW50PEVsZW1lbnQ+PiA9PlxuICBUcmF2ZXJzZS5wYXJlbnQoZWxlbWVudCkuZmlsdGVyKFN1Z2FyTm9kZS5pc0VsZW1lbnQpO1xuXG4vLyBpZiB0aGUgYmxvY2sgaXMgYSBsaXN0IGl0ZW0sIHdlIG5lZWQgdG8gZ2V0IHRoZSBwYXJlbnQgb2YgdGhlIGxpc3QgaXRzZWxmXG5jb25zdCBnZXROb3JtYWxpemVkQmxvY2sgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PEVsZW1lbnQ+LCBpc0xpc3RJdGVtOiBib29sZWFuKTogU3VnYXJFbGVtZW50PEVsZW1lbnQ+ID0+IHtcbiAgY29uc3Qgbm9ybWFsaXplZEVsZW1lbnQgPSBpc0xpc3RJdGVtID8gU2VsZWN0b3JGaW5kLmFuY2VzdG9yKGVsZW1lbnQsICdvbCx1bCcpIDogT3B0aW9uYWwuc29tZShlbGVtZW50KTtcbiAgcmV0dXJuIG5vcm1hbGl6ZWRFbGVtZW50LmdldE9yKGVsZW1lbnQpO1xufTtcblxuY29uc3QgaXNMaXN0SXRlbSA9IFN1Z2FyTm9kZS5pc1RhZygnbGknKTtcblxuY29uc3Qgc2V0RGlyT25FbGVtZW50cyA9IChkb206IERPTVV0aWxzLCBibG9ja3M6IEVsZW1lbnRbXSwgZGlyOiBEaXIpOiB2b2lkID0+IHtcbiAgQXJyLmVhY2goYmxvY2tzLCAoYmxvY2spID0+IHtcbiAgICBjb25zdCBibG9ja0VsZW1lbnQgPSBTdWdhckVsZW1lbnQuZnJvbURvbShibG9jayk7XG4gICAgY29uc3QgaXNCbG9ja0VsZW1lbnRMaXN0SXRlbSA9IGlzTGlzdEl0ZW0oYmxvY2tFbGVtZW50KTtcbiAgICBjb25zdCBub3JtYWxpemVkQmxvY2sgPSBnZXROb3JtYWxpemVkQmxvY2soYmxvY2tFbGVtZW50LCBpc0Jsb2NrRWxlbWVudExpc3RJdGVtKTtcbiAgICBjb25zdCBub3JtYWxpemVkQmxvY2tQYXJlbnQgPSBnZXRQYXJlbnRFbGVtZW50KG5vcm1hbGl6ZWRCbG9jayk7XG4gICAgbm9ybWFsaXplZEJsb2NrUGFyZW50LmVhY2goKHBhcmVudCkgPT4ge1xuICAgICAgLy8gVElOWS05MzE0OiBSZW1vdmUgYW55IGlubGluZSBkaXJlY3Rpb24gc3R5bGUgdG8gZW5zdXJlIHRoYXQgaXQgaXMgb25seSBzZXQgd2hlbiBuZWNlc3NhcnkgYW5kIHRoYXRcbiAgICAgIC8vIHRoZSBkaXIgYXR0cmlidXRlIGlzIGZhdm9yZWRcbiAgICAgIGRvbS5zZXRTdHlsZShub3JtYWxpemVkQmxvY2suZG9tLCAnZGlyZWN0aW9uJywgbnVsbCk7XG5cbiAgICAgIGNvbnN0IHBhcmVudERpcmVjdGlvbiA9IERpcmVjdGlvbi5nZXREaXJlY3Rpb24ocGFyZW50KTtcbiAgICAgIGlmIChwYXJlbnREaXJlY3Rpb24gPT09IGRpcikge1xuICAgICAgICBBdHRyaWJ1dGUucmVtb3ZlKG5vcm1hbGl6ZWRCbG9jaywgJ2RpcicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgQXR0cmlidXRlLnNldChub3JtYWxpemVkQmxvY2ssICdkaXInLCBkaXIpO1xuICAgICAgfVxuXG4gICAgICAvLyBUSU5ZLTkzMTQ6IFNldCBhbiBpbmxpbmUgZGlyZWN0aW9uIHN0eWxlIGlmIGNvbXB1dGVkIGNzcyBkaXJlY3Rpb24gaXMgc3RpbGwgbm90IGFzIGRlc2lyZWQuIFRoaXMgY2FuXG4gICAgICAvLyBoYXBwZW4gd2hlbiB0aGUgZGlyZWN0aW9uIHN0eWxlIGlzIGRlcml2ZWQgZnJvbSBhIHN0eWxlc2hlZXQuXG4gICAgICBpZiAoRGlyZWN0aW9uLmdldERpcmVjdGlvbihub3JtYWxpemVkQmxvY2spICE9PSBkaXIpIHtcbiAgICAgICAgZG9tLnNldFN0eWxlKG5vcm1hbGl6ZWRCbG9jay5kb20sICdkaXJlY3Rpb24nLCBkaXIpO1xuICAgICAgfVxuXG4gICAgICAvLyBSZW1vdmUgZGlyIGF0dHIgYW5kIGRpcmVjdGlvbiBzdHlsZSBmcm9tIGxpc3QgY2hpbGRyZW5cbiAgICAgIGlmIChpc0Jsb2NrRWxlbWVudExpc3RJdGVtKSB7XG4gICAgICAgIGNvbnN0IGxpc3RJdGVtcyA9IFNlbGVjdG9yRmlsdGVyLmNoaWxkcmVuKG5vcm1hbGl6ZWRCbG9jaywgJ2xpW2Rpcl0sbGlbc3R5bGVdJyk7XG4gICAgICAgIEFyci5lYWNoKGxpc3RJdGVtcywgKGxpc3RJdGVtKSA9PiB7XG4gICAgICAgICAgQXR0cmlidXRlLnJlbW92ZShsaXN0SXRlbSwgJ2RpcicpO1xuICAgICAgICAgIGRvbS5zZXRTdHlsZShsaXN0SXRlbS5kb20sICdkaXJlY3Rpb24nLCBudWxsKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3Qgc2V0RGlyID0gKGVkaXRvcjogRWRpdG9yLCBkaXI6IERpcik6IHZvaWQgPT4ge1xuICBpZiAoZWRpdG9yLnNlbGVjdGlvbi5pc0VkaXRhYmxlKCkpIHtcbiAgICBzZXREaXJPbkVsZW1lbnRzKGVkaXRvci5kb20sIGVkaXRvci5zZWxlY3Rpb24uZ2V0U2VsZWN0ZWRCbG9ja3MoKSwgZGlyKTtcbiAgICBlZGl0b3Iubm9kZUNoYW5nZWQoKTtcbiAgfVxufTtcblxuZXhwb3J0IHtcbiAgc2V0RGlyXG59O1xuIiwiaW1wb3J0IHsgRGlyZWN0aW9uLCBTdWdhckVsZW1lbnQgfSBmcm9tICdAZXBob3gvc3VnYXInO1xuXG5pbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuaW1wb3J0IHR5cGUgeyBOb2RlQ2hhbmdlRXZlbnQgfSBmcm9tICd0aW55bWNlL2NvcmUvYXBpL0V2ZW50VHlwZXMnO1xuaW1wb3J0IHR5cGUgeyBUb29sYmFyIH0gZnJvbSAndGlueW1jZS9jb3JlL2FwaS91aS9VaSc7XG5pbXBvcnQgdHlwZSB7IEVkaXRvckV2ZW50IH0gZnJvbSAndGlueW1jZS9jb3JlL2FwaS91dGlsL0V2ZW50RGlzcGF0Y2hlcic7XG5cbmNvbnN0IGdldE5vZGVDaGFuZ2VIYW5kbGVyID0gKGVkaXRvcjogRWRpdG9yLCBkaXI6ICdsdHInIHwgJ3J0bCcpID0+IChhcGk6IFRvb2xiYXIuVG9vbGJhclRvZ2dsZUJ1dHRvbkluc3RhbmNlQXBpKSA9PiB7XG4gIGNvbnN0IG5vZGVDaGFuZ2VIYW5kbGVyID0gKGU6IEVkaXRvckV2ZW50PE5vZGVDaGFuZ2VFdmVudD4pID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gU3VnYXJFbGVtZW50LmZyb21Eb20oZS5lbGVtZW50KTtcbiAgICBhcGkuc2V0QWN0aXZlKERpcmVjdGlvbi5nZXREaXJlY3Rpb24oZWxlbWVudCkgPT09IGRpcik7XG4gICAgYXBpLnNldEVuYWJsZWQoZWRpdG9yLnNlbGVjdGlvbi5pc0VkaXRhYmxlKCkpO1xuICB9O1xuICBlZGl0b3Iub24oJ05vZGVDaGFuZ2UnLCBub2RlQ2hhbmdlSGFuZGxlcik7XG4gIGFwaS5zZXRFbmFibGVkKGVkaXRvci5zZWxlY3Rpb24uaXNFZGl0YWJsZSgpKTtcblxuICByZXR1cm4gKCkgPT4gZWRpdG9yLm9mZignTm9kZUNoYW5nZScsIG5vZGVDaGFuZ2VIYW5kbGVyKTtcbn07XG5cbmNvbnN0IHJlZ2lzdGVyID0gKGVkaXRvcjogRWRpdG9yKTogdm9pZCA9PiB7XG4gIGVkaXRvci51aS5yZWdpc3RyeS5hZGRUb2dnbGVCdXR0b24oJ2x0cicsIHtcbiAgICB0b29sdGlwOiAnTGVmdCB0byByaWdodCcsXG4gICAgaWNvbjogJ2x0cicsXG4gICAgb25BY3Rpb246ICgpID0+IGVkaXRvci5leGVjQ29tbWFuZCgnbWNlRGlyZWN0aW9uTFRSJyksXG4gICAgb25TZXR1cDogZ2V0Tm9kZUNoYW5nZUhhbmRsZXIoZWRpdG9yLCAnbHRyJylcbiAgfSk7XG5cbiAgZWRpdG9yLnVpLnJlZ2lzdHJ5LmFkZFRvZ2dsZUJ1dHRvbigncnRsJywge1xuICAgIHRvb2x0aXA6ICdSaWdodCB0byBsZWZ0JyxcbiAgICBpY29uOiAncnRsJyxcbiAgICBvbkFjdGlvbjogKCkgPT4gZWRpdG9yLmV4ZWNDb21tYW5kKCdtY2VEaXJlY3Rpb25SVEwnKSxcbiAgICBvblNldHVwOiBnZXROb2RlQ2hhbmdlSGFuZGxlcihlZGl0b3IsICdydGwnKVxuICB9KTtcbn07XG5cbmV4cG9ydCB7XG4gIHJlZ2lzdGVyXG59O1xuIiwiaW1wb3J0ICogYXMgVHlwZSBmcm9tICcuLi9jb3JlL1R5cGUnO1xuaW1wb3J0ICogYXMgQXJyYXlVdGlsIGZyb20gJy4uL2NvcmUvQXJyYXlVdGlsJztcblxuLyoqIEEgd2F5IG9mIGNvbXBhcmluZyB0d28gdmFsdWVzIG9mIHRoZSBzYW1lIHR5cGUgZm9yIGVxdWFsaXR5LiAqL1xuZXhwb3J0IGludGVyZmFjZSBFcTxBPiB7XG4gIGVxOiAoeDogQSwgeTogQSkgPT4gYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGNvbnRyYW1hcCA9IDxBLCBCPiAoZXFhOiBFcTxBPiwgZjogKGI6IEIpID0+IEEpOiBFcTxCPiA9PlxuICBlcSgoeCwgeSkgPT4gZXFhLmVxKGYoeCksIGYoeSkpKTtcblxuZXhwb3J0IGNvbnN0IGVxID0gPEE+IChmOiAoeDogQSwgeTogQSkgPT4gYm9vbGVhbik6IEVxPEE+ID0+XG4gICh7IGVxOiBmIH0pO1xuXG5leHBvcnQgY29uc3QgdHJpcGxlRXE6IEVxPGFueT4gPSBlcSgoeCwgeSkgPT4geCA9PT0geSk7XG5cbmV4cG9ydCBjb25zdCBlcVN0cmluZzogRXE8c3RyaW5nPiA9IHRyaXBsZUVxO1xuXG5leHBvcnQgY29uc3QgZXFCb29sZWFuOiBFcTxib29sZWFuPiA9IHRyaXBsZUVxO1xuXG5leHBvcnQgY29uc3QgZXFOdW1iZXI6IEVxPG51bWJlcj4gPSB0cmlwbGVFcTtcblxuZXhwb3J0IGNvbnN0IGVxVW5kZWZpbmVkOiBFcTx1bmRlZmluZWQ+ID0gdHJpcGxlRXE7XG5cbmV4cG9ydCBjb25zdCBlcU51bGw6IEVxPG51bGw+ID0gdHJpcGxlRXE7XG5cbmV4cG9ydCBjb25zdCBlcUFycmF5ID0gPEE+IChlcWE6IEVxPEE+KTogRXE8QXJyYXlMaWtlPEE+PiA9PiBlcSgoeCwgeSkgPT4ge1xuICBpZiAoeC5sZW5ndGggIT09IHkubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGxlbiA9IHgubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKCFlcWEuZXEoeFtpXSwgeVtpXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59KTtcblxuLy8gVE9ETzogTWFrZSBhbiBPcmQgdHlwZWNsYXNzXG5jb25zdCBlcVNvcnRlZEFycmF5ID0gPEE+KGVxYTogRXE8QT4sIGNvbXBhcmVGbj86IChhOiBBLCBiOiBBKSA9PiBudW1iZXIpOiBFcTxBcnJheUxpa2U8QT4+ID0+XG4gIGNvbnRyYW1hcChlcUFycmF5KGVxYSksICh4cykgPT4gQXJyYXlVdGlsLnNvcnQoeHMsIGNvbXBhcmVGbikpO1xuXG5leHBvcnQgY29uc3QgZXFSZWNvcmQgPSA8QT4gKGVxYTogRXE8QT4pOiBFcTxSZWNvcmQ8c3RyaW5nLCBBPj4gPT4gZXEoKHgsIHkpID0+IHtcbiAgY29uc3Qga3ggPSBPYmplY3Qua2V5cyh4KTtcbiAgY29uc3Qga3kgPSBPYmplY3Qua2V5cyh5KTtcbiAgaWYgKCFlcVNvcnRlZEFycmF5KGVxU3RyaW5nKS5lcShreCwga3kpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGxlbiA9IGt4Lmxlbmd0aDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHEgPSBreFtpXTtcbiAgICBpZiAoIWVxYS5lcSh4W3FdLCB5W3FdKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn0pO1xuXG5leHBvcnQgY29uc3QgZXFBbnk6IEVxPGFueT4gPSBlcSgoeCwgeSkgPT4ge1xuICBpZiAoeCA9PT0geSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgY29uc3QgdHggPSBUeXBlLnR5cGVPZih4KTtcbiAgY29uc3QgdHkgPSBUeXBlLnR5cGVPZih5KTtcbiAgaWYgKHR4ICE9PSB0eSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChUeXBlLmlzRXF1YXRhYmxlVHlwZSh0eCkpIHtcbiAgICByZXR1cm4geCA9PT0geTtcblxuICB9IGVsc2UgaWYgKHR4ID09PSAnYXJyYXknKSB7XG4gICAgcmV0dXJuIGVxQXJyYXkoZXFBbnkpLmVxKHgsIHkpO1xuXG4gIH0gZWxzZSBpZiAodHggPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGVxUmVjb3JkKGVxQW55KS5lcSh4LCB5KTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn0pO1xuIiwiZXhwb3J0IGNvbnN0IG1hcCA9IDxBLCBCPih4czogQXJyYXlMaWtlPEE+LCBmOiAoYTogQSkgPT4gQik6IEJbXSA9PiB7XG4gIGNvbnN0IGxlbiA9IHhzLmxlbmd0aDtcbiAgY29uc3QgciA9IG5ldyBBcnJheShsZW4pO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIHJbaV0gPSBmKHgpO1xuICB9XG4gIHJldHVybiByO1xufTtcblxuLyoqIG1hcCBhIGZ1bmN0aW9uIG92ZXIgYW4gYXJyYXksIHRoZW4gbWFwIGFub3RoZXIgZnVuY3Rpb24gb3ZlciBldmVyeSBpdGVtIGV4Y2VwdCB0aGUgbGFzdCAqL1xuZXhwb3J0IGNvbnN0IG1hcERlbGltaXQgPSA8QSwgQj4gKHhzOiBBcnJheUxpa2U8QT4sIGY6IChhOiBBKSA9PiBCLCBkZWxpbWl0OiAoYjogQikgPT4gQik6IEJbXSA9PiB7XG4gIGNvbnN0IGxlbiA9IHhzLmxlbmd0aDtcbiAgY29uc3QgciA9IG5ldyBBcnJheShsZW4pO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbiAtIDE7IGkrKykge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICByW2ldID0gZGVsaW1pdChmKHgpKTtcbiAgfVxuICBpZiAobGVuID4gMCkge1xuICAgIHJbbGVuIC0gMV0gPSAoZih4c1tsZW4gLSAxXSkpO1xuICB9XG5cbiAgcmV0dXJuIHI7XG59O1xuXG5leHBvcnQgY29uc3Qgc29ydCA9IDxBPiAoeHM6IEFycmF5TGlrZTxBPiwgY29tcGFyZUZuPzogKGE6IEEsIGI6IEEpID0+IG51bWJlcik6IEFbXSA9PiB7XG4gIGNvbnN0IGNsb25lOiBBW10gPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh4cyk7XG4gIHJldHVybiBjbG9uZS5zb3J0KGNvbXBhcmVGbik7XG59O1xuIiwiZXhwb3J0IGNvbnN0IHR5cGVPZiA9ICh4OiBhbnkpID0+IHtcbiAgaWYgKHggPT09IG51bGwpIHtcbiAgICByZXR1cm4gJ251bGwnO1xuICB9XG4gIGlmICh4ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gJ3VuZGVmaW5lZCc7XG4gIH1cbiAgY29uc3QgdCA9IHR5cGVvZiB4O1xuICBpZiAodCA9PT0gJ29iamVjdCcgJiYgKEFycmF5LnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKHgpIHx8IHguY29uc3RydWN0b3IgJiYgeC5jb25zdHJ1Y3Rvci5uYW1lID09PSAnQXJyYXknKSkge1xuICAgIHJldHVybiAnYXJyYXknO1xuICB9XG4gIGlmICh0ID09PSAnb2JqZWN0JyAmJiAoU3RyaW5nLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKHgpIHx8IHguY29uc3RydWN0b3IgJiYgeC5jb25zdHJ1Y3Rvci5uYW1lID09PSAnU3RyaW5nJykpIHtcbiAgICByZXR1cm4gJ3N0cmluZyc7XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG5jb25zdCBpc1R5cGUgPSA8VD4odHlwZTogc3RyaW5nKSA9PiAodmFsdWU6IGFueSk6IHZhbHVlIGlzIFQgPT4gdHlwZU9mKHZhbHVlKSA9PT0gdHlwZTtcblxuZXhwb3J0IGNvbnN0IGlzU3RyaW5nID0gaXNUeXBlPHN0cmluZz4oJ3N0cmluZycpO1xuZXhwb3J0IGNvbnN0IGlzT2JqZWN0ID0gaXNUeXBlPE9iamVjdD4oJ29iamVjdCcpO1xuZXhwb3J0IGNvbnN0IGlzQXJyYXkgPSBpc1R5cGU8QXJyYXk8dW5rbm93bj4+KCdhcnJheScpO1xuZXhwb3J0IGNvbnN0IGlzTnVsbCA9IGlzVHlwZTxudWxsPignbnVsbCcpO1xuZXhwb3J0IGNvbnN0IGlzQm9vbGVhbiA9IGlzVHlwZTxib29sZWFuPignYm9vbGVhbicpO1xuZXhwb3J0IGNvbnN0IGlzVW5kZWZpbmVkID0gaXNUeXBlPHVuZGVmaW5lZD4oJ3VuZGVmaW5lZCcpO1xuZXhwb3J0IGNvbnN0IGlzRnVuY3Rpb24gPSBpc1R5cGU8RnVuY3Rpb24+KCdmdW5jdGlvbicpO1xuZXhwb3J0IGNvbnN0IGlzTnVtYmVyID0gaXNUeXBlPG51bWJlcj4oJ251bWJlcicpO1xuXG5leHBvcnQgY29uc3QgaXNFcXVhdGFibGVUeXBlID0gKHg6IHN0cmluZyk6IGJvb2xlYW4gPT5cbiAgWyAndW5kZWZpbmVkJywgJ2Jvb2xlYW4nLCAnbnVtYmVyJywgJ3N0cmluZycsICdmdW5jdGlvbicsICd4bWwnLCAnbnVsbCcgXS5pbmRleE9mKHgpICE9PSAtMTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcbiAgICAgICAgaWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuICAgICAgICB9XG4gICAgfVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydiA9ICgpID0+IChcIjEuNS4yXCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydWlkID0gXCJidW5kbGVyPXJzcGFja0AxLjUuMlwiO1xuIiwiaW1wb3J0IFBsdWdpbiBmcm9tICcuL1BsdWdpbic7XG5cblBsdWdpbigpO1xuXG4vKiogKioqKipcbiAqIERPIE5PVCBFWFBPUlQgQU5ZVEhJTkdcbiAqXG4gKiBJRiBZT1UgRE8gUk9MTFVQIFdJTEwgTEVBVkUgQSBHTE9CQUwgT04gVEhFIFBBR0VcbiAqKioqKioqL1xuIl0sIm5hbWVzIjpbIkVxIiwiRnVuIiwiT3B0aW9uYWwiLCJUeXBlIiwibmF0aXZlU2xpY2UiLCJBcnJheSIsIm5hdGl2ZUluZGV4T2YiLCJuYXRpdmVQdXNoIiwicmF3SW5kZXhPZiIsInRzIiwidCIsImluZGV4T2YiLCJ4cyIsIngiLCJyIiwiY29udGFpbnMiLCJleGlzdHMiLCJwcmVkIiwiaSIsImxlbiIsInJhbmdlIiwibnVtIiwiZiIsImNodW5rIiwiYXJyYXkiLCJzaXplIiwicyIsIm1hcCIsImVhY2giLCJlYWNociIsInBhcnRpdGlvbiIsInBhc3MiLCJmYWlsIiwiYXJyIiwiZmlsdGVyIiwiZ3JvdXBCeSIsIndhc1R5cGUiLCJncm91cCIsInR5cGUiLCJmb2xkciIsImFjYyIsImZvbGRsIiwiZmluZFVudGlsIiwidW50aWwiLCJmaW5kIiwiZmluZEluZGV4IiwiZmluZExhc3RJbmRleCIsImZsYXR0ZW4iLCJFcnJvciIsImJpbmQiLCJmb3JhbGwiLCJlcXVhbCIsImExIiwiYTIiLCJlcSIsInJldmVyc2UiLCJkaWZmZXJlbmNlIiwibWFwVG9PYmplY3QiLCJTdHJpbmciLCJwdXJlIiwic29ydCIsImNvbXBhcmF0b3IiLCJjb3B5IiwiZ2V0IiwiaGVhZCIsImxhc3QiLCJmcm9tIiwiZmluZE1hcCIsInVuaXF1ZSIsImlzRHVwbGljYXRlZCIsIm5vb3AiLCJub2FyZyIsImNvbXBvc2UiLCJmYSIsImZiIiwiYXJncyIsImNvbXBvc2UxIiwiZmJjIiwiZmFiIiwiYSIsImNvbnN0YW50IiwidmFsdWUiLCJpZGVudGl0eSIsInRyaXBsZUVxdWFscyIsImIiLCJjdXJyeSIsImZuIiwiaW5pdGlhbEFyZ3MiLCJyZXN0QXJncyIsImFsbCIsIm5vdCIsImRpZSIsIm1zZyIsImFwcGx5IiwiY2FsbCIsIm5ldmVyIiwiYWx3YXlzIiwid2Vha2VuIiwicGlwZSIsImFiIiwiYmMiLCJjZCIsImRlIiwiZWYiLCJmZyIsImdoIiwiYyIsImQiLCJlIiwiZyIsIkdsb2JhbCIsIndpbmRvdyIsIkZ1bmN0aW9uIiwia2V5cyIsIk9iamVjdCIsImhhc093blByb3BlcnR5Iiwib2JqIiwicHJvcHMiLCJrIiwidHVwbGVNYXAiLCJ0dXBsZSIsIm9iakFjYyIsImludGVybmFsRmlsdGVyIiwib25UcnVlIiwib25GYWxzZSIsImJpZmlsdGVyIiwibWFwVG9BcnJheSIsIm5hbWUiLCJ2YWx1ZXMiLCJrZXkiLCJoYXMiLCJoYXNOb25OdWxsYWJsZUtleSIsInVuZGVmaW5lZCIsImlzRW1wdHkiLCJ0YWciLCJvbk5vbmUiLCJvblNvbWUiLCJtYXBwZXIiLCJiaW5kZXIiLCJwcmVkaWNhdGUiLCJyZXBsYWNlbWVudCIsInRodW5rIiwibWVzc2FnZSIsIndvcmtlciIsIkFyciIsImlzIiwibGhzIiwicmhzIiwibGVmdCIsImVxdWFscyIsImxpZnQyIiwiY2F0IiwicHVzaCIsInNlcXVlbmNlIiwidHJhdmVyc2UiLCJvYSIsIm9iIiwibGlmdDMiLCJvYyIsImxpZnQ0Iiwib2QiLCJsaWZ0NSIsIm9lIiwibWFwRnJvbSIsImJpbmRGcm9tIiwib290Iiwic29tZUlmIiwicGF0aCIsInBhcnRzIiwic2NvcGUiLCJvIiwicmVzb2x2ZSIsInAiLCJzdGVwIiwicGFydCIsImZvcmdlIiwidGFyZ2V0IiwibmFtZXNwYWNlIiwiU3RyQXBwZW5kIiwiY2hlY2tSYW5nZSIsInN0ciIsInN1YnN0ciIsInN0YXJ0Iiwic3VwcGxhbnQiLCJpc1N0cmluZ09yTnVtYmVyIiwiZnVsbE1hdGNoIiwicmVtb3ZlTGVhZGluZyIsInByZWZpeCIsInN0YXJ0c1dpdGgiLCJyZW1vdmVUcmFpbGluZyIsInN1ZmZpeCIsImVuZHNXaXRoIiwiZW5zdXJlTGVhZGluZyIsImVuc3VyZVRyYWlsaW5nIiwiZW5kIiwiaWR4IiwiY2FwaXRhbGl6ZSIsImJsYW5rIiwidHJpbSIsImxUcmltIiwiclRyaW0iLCJpc05vdEVtcHR5IiwicmVwZWF0IiwiY291bnQiLCJmcm9tQ29kZVBvaW50IiwidG9JbnQiLCJyYWRpeCIsInBhcnNlSW50IiwiaXNOYU4iLCJ0b0Zsb2F0IiwicGFyc2VGbG9hdCIsImdldFByb3RvdHlwZU9mIiwiaGFzUHJvdG8iLCJ2IiwiY29uc3RydWN0b3IiLCJ0eXBlT2YiLCJwcm90byIsImlzVHlwZSIsImlzU2ltcGxlVHlwZSIsImlzT2JqZWN0IiwiaXNTdHJpbmciLCJpc1BsYWluT2JqZWN0IiwiaXNBcnJheSIsImlzTnVsbCIsImlzQm9vbGVhbiIsImlzVW5kZWZpbmVkIiwiaXNOdWxsYWJsZSIsImlzTm9uTnVsbGFibGUiLCJpc0Z1bmN0aW9uIiwiaXNOdW1iZXIiLCJpc0FycmF5T2YiLCJpc1Byb21pc2VMaWtlIiwiYWRkVG9TdGFydCIsImFkZFRvRW5kIiwicmVtb3ZlRnJvbVN0YXJ0IiwibnVtQ2hhcnMiLCJyZW1vdmVGcm9tRW5kIiwiUmVzb2x2ZSIsInNhbmRIVE1MRWxlbWVudCIsImlzUHJvdG90eXBlT2YiLCJ1bnNhZmUiLCJnZXRPckRpZSIsImFjdHVhbCIsInRvQXJyYXkiLCJyZWN1cnNlIiwiY3VyIiwiU2VsZWN0b3JzIiwiZTEiLCJlMiIsImlzRXF1YWxOb2RlIiwibWVtYmVyIiwiZWxlbWVudCIsImVsZW1lbnRzIiwiZDEiLCJkMiIsIkFUVFJJQlVURSIsIkNEQVRBX1NFQ1RJT04iLCJDT01NRU5UIiwiRE9DVU1FTlQiLCJET0NVTUVOVF9UWVBFIiwiRE9DVU1FTlRfRlJBR01FTlQiLCJFTEVNRU5UIiwiVEVYVCIsIlBST0NFU1NJTkdfSU5TVFJVQ1RJT04iLCJFTlRJVFlfUkVGRVJFTkNFIiwiRU5USVRZIiwiTk9UQVRJT04iLCJTdWdhckVsZW1lbnQiLCJTdWdhck5vZGUiLCJnZXRTaGFkb3dIb3N0IiwiZ2V0U2hhZG93Um9vdCIsImluQm9keSIsImRvbSIsImRvYyIsImJvZHkiLCJnZXRCb2R5IiwiZG9jdW1lbnQiLCJmcm9tSHRtbCIsImh0bWwiLCJkaXYiLCJjb25zb2xlIiwiZnJvbURvbSIsImZyb21UYWciLCJub2RlIiwiZnJvbVRleHQiLCJ0ZXh0IiwiZnJvbVBvaW50IiwiZG9jRWxtIiwieSIsImdldEhlYWQiLCJTYW5kSFRNTEVsZW1lbnQiLCJOb2RlVHlwZXMiLCJpc0NvbW1lbnQiLCJpc0hUTUxFbGVtZW50IiwiaXNFbGVtZW50IiwiaXNUZXh0IiwiaXNEb2N1bWVudCIsImlzRG9jdW1lbnRGcmFnbWVudCIsImlzVGFnIiwiVHJhdmVyc2UiLCJTdWdhckhlYWQiLCJpc1NoYWRvd1Jvb3QiLCJkb3MiLCJnZXRSb290Tm9kZSIsImNyZWF0ZUVsZW1lbnQiLCJnZXRTdHlsZUNvbnRhaW5lciIsImdldENvbnRlbnRDb250YWluZXIiLCJpc0luU2hhZG93Um9vdCIsImdldE9yaWdpbmFsRXZlbnRUYXJnZXQiLCJldmVudCIsImVsIiwiaXNPcGVuU2hhZG93SG9zdCIsImNvbXBvc2VkUGF0aCIsImlzT3BlblNoYWRvd1Jvb3QiLCJzciIsImlzQ2xvc2VkU2hhZG93Um9vdCIsIk9iaiIsInJhd1NldCIsInNldCIsInNldEFsbCIsImF0dHJzIiwic2V0T3B0aW9ucyIsInJlbW92ZSIsImdldE9wdCIsImhhc05vbmUiLCJjbG9uZSIsImF0dHIiLCJ0cmFuc2Zlck9uZSIsInNvdXJjZSIsImRlc3RpbmF0aW9uIiwic3JjVmFsdWUiLCJ0cmFuc2ZlciIsIk9wdGlvbmFscyIsIlN0cmluZ3MiLCJTdHlsZSIsIlN1Z2FyQm9keSIsIkF0dHJpYnV0ZSIsImludGVybmFsU2V0IiwicHJvcGVydHkiLCJpbnRlcm5hbFJlbW92ZSIsImNzcyIsInN0eWxlcyIsImdldFVuc2FmZVByb3BlcnR5IiwiZ2V0UmF3IiwicmF3IiwiZ2V0QWxsUmF3IiwicnVsZU5hbWUiLCJpc1ZhbGlkVmFsdWUiLCJzdHlsZSIsInByZXNlcnZlIiwib2xkU3R5bGVzIiwicmVzdWx0Iiwic291cmNlRG9tIiwidGFyZ2V0RG9tIiwicmVmbG93IiwiQ3NzIiwib25EaXJlY3Rpb24iLCJpc0x0ciIsImlzUnRsIiwiZ2V0RGlyZWN0aW9uIiwiZGVzY2VuZGFudHMiLCJhbmNlc3RvcnMiLCJpc1Jvb3QiLCJzaWJsaW5ncyIsImNoaWxkcmVuIiwiQ2xvc2VzdE9yQW5jZXN0b3IiLCJDb21wYXJlIiwiZmlyc3QiLCJkZXNjZW5kYW50IiwiYW5jZXN0b3IiLCJzdG9wIiwiY2xvc2VzdCIsInRlc3QiLCJzaWJsaW5nIiwiY2hpbGQiLCJkZXNjZW5kIiwicmVzIiwiUHJlZGljYXRlRmlsdGVyIiwic2VsZWN0b3IiLCJQcmVkaWNhdGVGaW5kIiwiZWxlbSIsImJ5cGFzc1NlbGVjdG9yIiwiYmFzZSIsIm9uZSIsIlJlY3Vyc2UiLCJvd25lciIsImRvY3VtZW50T3JPd25lciIsImRvY3VtZW50RWxlbWVudCIsImRlZmF1bHRWaWV3IiwicGFyZW50IiwicGFyZW50Tm9kZSIsInBhcmVudEVsZW1lbnQiLCJraW4iLCJwYXJlbnRzIiwicmV0IiwicmF3UGFyZW50IiwiZmlsdGVyU2VsZiIsIm9mZnNldFBhcmVudCIsInByZXZTaWJsaW5nIiwibmV4dFNpYmxpbmciLCJwcmV2U2libGluZ3MiLCJuZXh0U2libGluZ3MiLCJpbmRleCIsImNzIiwiZmlyc3RDaGlsZCIsImxhc3RDaGlsZCIsImNoaWxkTm9kZXNDb3VudCIsImhhc0NoaWxkTm9kZXMiLCJzcG90Iiwib2Zmc2V0IiwibGVhZiIsImlzU3VwcG9ydGVkIiwiUGx1Z2luTWFuYWdlciIsIkNvbW1hbmRzIiwiQnV0dG9ucyIsImVkaXRvciIsIkRpcmVjdGlvbiIsInJlZ2lzdGVyIiwiU2VsZWN0b3JGaW5kIiwiU2VsZWN0b3JGaWx0ZXIiLCJnZXRQYXJlbnRFbGVtZW50IiwiZ2V0Tm9ybWFsaXplZEJsb2NrIiwiaXNMaXN0SXRlbSIsIm5vcm1hbGl6ZWRFbGVtZW50Iiwic2V0RGlyT25FbGVtZW50cyIsImJsb2NrcyIsImRpciIsImJsb2NrIiwiYmxvY2tFbGVtZW50IiwiaXNCbG9ja0VsZW1lbnRMaXN0SXRlbSIsIm5vcm1hbGl6ZWRCbG9jayIsIm5vcm1hbGl6ZWRCbG9ja1BhcmVudCIsInBhcmVudERpcmVjdGlvbiIsImxpc3RJdGVtcyIsImxpc3RJdGVtIiwic2V0RGlyIiwiZ2V0Tm9kZUNoYW5nZUhhbmRsZXIiLCJhcGkiLCJub2RlQ2hhbmdlSGFuZGxlciIsIlBsdWdpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLDZEQUFlLE1BQU0sRUFBQztBQUNmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNINkI7QUFFUDtBQUNTO0FBQ1A7QUFPL0IsTUFBTUksY0FBY0MsTUFBTSxTQUFTLENBQUMsS0FBSztBQUN6QyxNQUFNQyxnQkFBZ0JELE1BQU0sU0FBUyxDQUFDLE9BQU87QUFDN0MsTUFBTUUsYUFBYUYsTUFBTSxTQUFTLENBQUMsSUFBSTtBQUV2QyxNQUFNRyxhQUFhLENBQUtDLElBQWtCQyxJQUN4Q0osY0FBYyxJQUFJLENBQUNHLElBQUlDO0FBRWxCLE1BQU1DLFVBQVUsQ0FBVUMsSUFBa0JDO0lBQ2pELHdGQUF3RjtJQUN4RixNQUFNQyxJQUFJTixXQUFXSSxJQUFJQztJQUN6QixP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