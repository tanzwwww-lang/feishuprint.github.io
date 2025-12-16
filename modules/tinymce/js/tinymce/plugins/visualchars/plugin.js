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
"../sugar/src/main/ts/ephox/sugar/api/properties/ContentEditable.ts": 
/*!**************************************************************************!*\
  !*** ../sugar/src/main/ts/ephox/sugar/api/properties/ContentEditable.ts ***!
  \**************************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  closest: () => (closest),
  get: () => (get),
  getRaw: () => (getRaw),
  isEditable: () => (isEditable),
  set: () => (set)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Fun.ts");
/* ESM import */var _node_SugarBody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node/SugarBody */ "../sugar/src/main/ts/ephox/sugar/api/node/SugarBody.ts");
/* ESM import */var _search_SelectorFind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../search/SelectorFind */ "../sugar/src/main/ts/ephox/sugar/api/search/SelectorFind.ts");



const closest = (target)=>_search_SelectorFind__WEBPACK_IMPORTED_MODULE_0__.closest(target, '[contenteditable]');
const isEditable = (element, assumeEditable = false)=>{
    if (_node_SugarBody__WEBPACK_IMPORTED_MODULE_1__.inBody(element)) {
        return element.dom.isContentEditable;
    } else {
        // Find the closest contenteditable element and check if it's editable
        return closest(element).fold(_ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.constant(assumeEditable), (editable)=>getRaw(editable) === 'true');
    }
};
const getRaw = (element)=>element.dom.contentEditable;
const get = (element)=>isEditable(element, false);
const set = (element, editable)=>{
    element.dom.contentEditable = editable ? 'true' : 'false';
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
"./src/plugins/visualchars/main/ts/Plugin.ts": 
/*!***************************************************!*\
  !*** ./src/plugins/visualchars/main/ts/Plugin.ts ***!
  \***************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Cell.ts");
/* ESM import */var tinymce_core_api_PluginManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/PluginManager */ "./lib/globals/tinymce/core/api/PluginManager.js");
/* ESM import */var _api_Api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/Api */ "./src/plugins/visualchars/main/ts/api/Api.ts");
/* ESM import */var _api_Commands__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/Commands */ "./src/plugins/visualchars/main/ts/api/Commands.ts");
/* ESM import */var _api_Options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/Options */ "./src/plugins/visualchars/main/ts/api/Options.ts");
/* ESM import */var _core_Bindings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/Bindings */ "./src/plugins/visualchars/main/ts/core/Bindings.ts");
/* ESM import */var _core_Keyboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/Keyboard */ "./src/plugins/visualchars/main/ts/core/Keyboard.ts");
/* ESM import */var _ui_Buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/Buttons */ "./src/plugins/visualchars/main/ts/ui/Buttons.ts");








/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>{
    tinymce_core_api_PluginManager__WEBPACK_IMPORTED_MODULE_0__["default"].add('visualchars', (editor)=>{
        _api_Options__WEBPACK_IMPORTED_MODULE_3__.register(editor);
        const toggleState = (0,_ephox_katamari__WEBPACK_IMPORTED_MODULE_7__.Cell)(_api_Options__WEBPACK_IMPORTED_MODULE_3__.isEnabledByDefault(editor));
        _api_Commands__WEBPACK_IMPORTED_MODULE_2__.register(editor, toggleState);
        _ui_Buttons__WEBPACK_IMPORTED_MODULE_6__.register(editor, toggleState);
        _core_Keyboard__WEBPACK_IMPORTED_MODULE_5__.setup(editor, toggleState);
        _core_Bindings__WEBPACK_IMPORTED_MODULE_4__.setup(editor, toggleState);
        return _api_Api__WEBPACK_IMPORTED_MODULE_1__.get(toggleState);
    });
});


}),
"./src/plugins/visualchars/main/ts/api/Api.ts": 
/*!****************************************************!*\
  !*** ./src/plugins/visualchars/main/ts/api/Api.ts ***!
  \****************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  get: () => (get)
});
const get = (toggleState)=>{
    const isEnabled = ()=>{
        return toggleState.get();
    };
    return {
        isEnabled
    };
};



}),
"./src/plugins/visualchars/main/ts/api/Commands.ts": 
/*!*********************************************************!*\
  !*** ./src/plugins/visualchars/main/ts/api/Commands.ts ***!
  \*********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  register: () => (register)
});
/* ESM import */var _core_Actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Actions */ "./src/plugins/visualchars/main/ts/core/Actions.ts");

const register = (editor, toggleState)=>{
    editor.addCommand('mceVisualChars', ()=>{
        _core_Actions__WEBPACK_IMPORTED_MODULE_0__.toggleVisualChars(editor, toggleState);
    });
};



}),
"./src/plugins/visualchars/main/ts/api/Events.ts": 
/*!*******************************************************!*\
  !*** ./src/plugins/visualchars/main/ts/api/Events.ts ***!
  \*******************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  fireVisualChars: () => (fireVisualChars)
});
const fireVisualChars = (editor, state)=>{
    return editor.dispatch('VisualChars', {
        state
    });
};



}),
"./src/plugins/visualchars/main/ts/api/Options.ts": 
/*!********************************************************!*\
  !*** ./src/plugins/visualchars/main/ts/api/Options.ts ***!
  \********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  isEnabledByDefault: () => (isEnabledByDefault),
  register: () => (register)
});
const option = (name)=>(editor)=>editor.options.get(name);
const register = (editor)=>{
    const registerOption = editor.options.register;
    registerOption('visualchars_default_state', {
        processor: 'boolean',
        default: false
    });
};
const isEnabledByDefault = option('visualchars_default_state');



}),
"./src/plugins/visualchars/main/ts/core/Actions.ts": 
/*!*********************************************************!*\
  !*** ./src/plugins/visualchars/main/ts/core/Actions.ts ***!
  \*********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  applyVisualChars: () => (applyVisualChars),
  toggleVisualChars: () => (toggleVisualChars)
});
/* ESM import */var _api_Events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/Events */ "./src/plugins/visualchars/main/ts/api/Events.ts");
/* ESM import */var _VisualChars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VisualChars */ "./src/plugins/visualchars/main/ts/core/VisualChars.ts");


const applyVisualChars = (editor, toggleState)=>{
    _api_Events__WEBPACK_IMPORTED_MODULE_0__.fireVisualChars(editor, toggleState.get());
    const body = editor.getBody();
    if (toggleState.get() === true) {
        _VisualChars__WEBPACK_IMPORTED_MODULE_1__.show(editor, body);
    } else {
        _VisualChars__WEBPACK_IMPORTED_MODULE_1__.hide(editor, body);
    }
};
// Toggle state and save selection bookmark before applying visualChars
const toggleVisualChars = (editor, toggleState)=>{
    toggleState.set(!toggleState.get());
    const bookmark = editor.selection.getBookmark();
    applyVisualChars(editor, toggleState);
    editor.selection.moveToBookmark(bookmark);
};



}),
"./src/plugins/visualchars/main/ts/core/Bindings.ts": 
/*!**********************************************************!*\
  !*** ./src/plugins/visualchars/main/ts/core/Bindings.ts ***!
  \**********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  setup: () => (setup)
});
/* ESM import */var _Actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Actions */ "./src/plugins/visualchars/main/ts/core/Actions.ts");

const setup = (editor, toggleState)=>{
    /*
    Note: applyVisualChars does not place a bookmark before modifying the DOM on init.
    This will cause a loss of selection if the following conditions are met:
      - Autofocus enabled, or editor is manually focused on init
      - The first piece of text in the editor must be a nbsp
      - Integrator has manually set the selection before init

    Another improvement would be to ensure DOM elements aren't destroyed/recreated,
    but rather wrapped/unwrapped when applying styling for visualchars so that selection
    is not lost.
  */ editor.on('init', ()=>{
        _Actions__WEBPACK_IMPORTED_MODULE_0__.applyVisualChars(editor, toggleState);
    });
};



}),
"./src/plugins/visualchars/main/ts/core/Data.ts": 
/*!******************************************************!*\
  !*** ./src/plugins/visualchars/main/ts/core/Data.ts ***!
  \******************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  charMap: () => (charMap),
  charMapToRegExp: () => (charMapToRegExp),
  charMapToSelector: () => (charMapToSelector),
  nbspClass: () => (nbspClass),
  regExp: () => (regExp),
  regExpGlobal: () => (regExpGlobal),
  selector: () => (selector)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Obj.ts");

const charMap = {
    '\u00a0': 'nbsp',
    '\u00ad': 'shy'
};
const charMapToRegExp = (charMap, global)=>{
    let regExp = '';
    _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.each(charMap, (_value, key)=>{
        regExp += key;
    });
    return new RegExp('[' + regExp + ']', global ? 'g' : '');
};
const charMapToSelector = (charMap)=>{
    let selector = '';
    _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.each(charMap, (value)=>{
        if (selector) {
            selector += ',';
        }
        selector += 'span.mce-' + value;
    });
    return selector;
};
const regExp = charMapToRegExp(charMap);
const regExpGlobal = charMapToRegExp(charMap, true);
const selector = charMapToSelector(charMap);
const nbspClass = 'mce-nbsp';


}),
"./src/plugins/visualchars/main/ts/core/Html.ts": 
/*!******************************************************!*\
  !*** ./src/plugins/visualchars/main/ts/core/Html.ts ***!
  \******************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  wrapCharWithSpan: () => (wrapCharWithSpan)
});
/* ESM import */var _Data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Data */ "./src/plugins/visualchars/main/ts/core/Data.ts");

const wrapCharWithSpan = (value)=>'<span data-mce-bogus="1" class="mce-' + _Data__WEBPACK_IMPORTED_MODULE_0__.charMap[value] + '">' + value + '</span>';



}),
"./src/plugins/visualchars/main/ts/core/Keyboard.ts": 
/*!**********************************************************!*\
  !*** ./src/plugins/visualchars/main/ts/core/Keyboard.ts ***!
  \**********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  setup: () => (setup)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Throttler.ts");
/* ESM import */var _VisualChars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VisualChars */ "./src/plugins/visualchars/main/ts/core/VisualChars.ts");


const setup = (editor, toggleState)=>{
    const debouncedToggle = _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.first(()=>{
        _VisualChars__WEBPACK_IMPORTED_MODULE_0__.toggle(editor);
    }, 300);
    editor.on('keydown', (e)=>{
        if (toggleState.get() === true) {
            e.keyCode === 13 ? _VisualChars__WEBPACK_IMPORTED_MODULE_0__.toggle(editor) : debouncedToggle.throttle();
        }
    });
    editor.on('remove', debouncedToggle.cancel);
};



}),
"./src/plugins/visualchars/main/ts/core/Nodes.ts": 
/*!*******************************************************!*\
  !*** ./src/plugins/visualchars/main/ts/core/Nodes.ts ***!
  \*******************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  filterEditableDescendants: () => (filterEditableDescendants),
  findParentElm: () => (findParentElm),
  isMatch: () => (isMatch),
  isWrappedNbsp: () => (isWrappedNbsp),
  replaceWithSpans: () => (replaceWithSpans)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Type.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Arr.ts");
/* ESM import */var _ephox_sugar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ephox/sugar */ "../sugar/src/main/ts/ephox/sugar/api/node/SugarNode.ts");
/* ESM import */var _ephox_sugar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ephox/sugar */ "../sugar/src/main/ts/ephox/sugar/api/properties/ContentEditable.ts");
/* ESM import */var _ephox_sugar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ephox/sugar */ "../sugar/src/main/ts/ephox/sugar/api/node/SugarElement.ts");
/* ESM import */var _Data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Data */ "./src/plugins/visualchars/main/ts/core/Data.ts");
/* ESM import */var _Html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Html */ "./src/plugins/visualchars/main/ts/core/Html.ts");




const isWrappedNbsp = (node)=>node.nodeName.toLowerCase() === 'span' && node.classList.contains('mce-nbsp-wrap');
const isMatch = (n)=>{
    const value = _ephox_sugar__WEBPACK_IMPORTED_MODULE_2__.value(n);
    return _ephox_sugar__WEBPACK_IMPORTED_MODULE_2__.isText(n) && _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__.isString(value) && _Data__WEBPACK_IMPORTED_MODULE_0__.regExp.test(value);
};
const isContentEditableFalse = (node)=>_ephox_sugar__WEBPACK_IMPORTED_MODULE_2__.isHTMLElement(node) && _ephox_sugar__WEBPACK_IMPORTED_MODULE_4__.getRaw(node) === 'false';
const isChildEditable = (node, currentState)=>{
    if (_ephox_sugar__WEBPACK_IMPORTED_MODULE_2__.isHTMLElement(node) && !isWrappedNbsp(node.dom)) {
        const value = _ephox_sugar__WEBPACK_IMPORTED_MODULE_4__.getRaw(node);
        if (value === 'true') {
            return true;
        } else if (value === 'false') {
            return false;
        }
    }
    return currentState;
};
// inlined sugars PredicateFilter.descendants for file size but also make it only act on editable nodes it changes the current editable state when it traveses down
const filterEditableDescendants = (scope, predicate, editable)=>{
    let result = [];
    const dom = scope.dom;
    const children = _ephox_katamari__WEBPACK_IMPORTED_MODULE_5__.map(dom.childNodes, _ephox_sugar__WEBPACK_IMPORTED_MODULE_6__.SugarElement.fromDom);
    const isEditable = (node)=>isWrappedNbsp(node.dom) || !isContentEditableFalse(node);
    _ephox_katamari__WEBPACK_IMPORTED_MODULE_5__.each(children, (x)=>{
        if (editable && isEditable(x) && predicate(x)) {
            result = result.concat([
                x
            ]);
        }
        result = result.concat(filterEditableDescendants(x, predicate, isChildEditable(x, editable)));
    });
    return result;
};
const findParentElm = (elm, rootElm)=>{
    while(elm.parentNode){
        if (elm.parentNode === rootElm) {
            return rootElm;
        }
        elm = elm.parentNode;
    }
    return undefined;
};
const replaceWithSpans = (text)=>text.replace(_Data__WEBPACK_IMPORTED_MODULE_0__.regExpGlobal, _Html__WEBPACK_IMPORTED_MODULE_1__.wrapCharWithSpan);



}),
"./src/plugins/visualchars/main/ts/core/VisualChars.ts": 
/*!*************************************************************!*\
  !*** ./src/plugins/visualchars/main/ts/core/VisualChars.ts ***!
  \*************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  hide: () => (hide),
  show: () => (show),
  toggle: () => (toggle)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Arr.ts");
/* ESM import */var _ephox_sugar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ephox/sugar */ "../sugar/src/main/ts/ephox/sugar/api/node/SugarElement.ts");
/* ESM import */var _ephox_sugar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ephox/sugar */ "../sugar/src/main/ts/ephox/sugar/api/properties/Class.ts");
/* ESM import */var _ephox_sugar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ephox/sugar */ "../sugar/src/main/ts/ephox/sugar/api/node/SugarNode.ts");
/* ESM import */var _Data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Data */ "./src/plugins/visualchars/main/ts/core/Data.ts");
/* ESM import */var _Nodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nodes */ "./src/plugins/visualchars/main/ts/core/Nodes.ts");




const show = (editor, rootElm)=>{
    const dom = editor.dom;
    const nodeList = _Nodes__WEBPACK_IMPORTED_MODULE_1__.filterEditableDescendants(_ephox_sugar__WEBPACK_IMPORTED_MODULE_2__.SugarElement.fromDom(rootElm), _Nodes__WEBPACK_IMPORTED_MODULE_1__.isMatch, editor.dom.isEditable(rootElm));
    _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__.each(nodeList, (n)=>{
        const parent = n.dom.parentNode;
        if (_Nodes__WEBPACK_IMPORTED_MODULE_1__.isWrappedNbsp(parent)) {
            _ephox_sugar__WEBPACK_IMPORTED_MODULE_4__.add(_ephox_sugar__WEBPACK_IMPORTED_MODULE_2__.SugarElement.fromDom(parent), _Data__WEBPACK_IMPORTED_MODULE_0__.nbspClass);
        } else {
            const withSpans = _Nodes__WEBPACK_IMPORTED_MODULE_1__.replaceWithSpans(dom.encode(_ephox_sugar__WEBPACK_IMPORTED_MODULE_5__.value(n) ?? ''));
            const div = dom.create('div', {}, withSpans);
            let node;
            while(node = div.lastChild){
                dom.insertAfter(node, n.dom);
            }
            editor.dom.remove(n.dom);
        }
    });
};
const hide = (editor, rootElm)=>{
    const nodeList = editor.dom.select(_Data__WEBPACK_IMPORTED_MODULE_0__.selector, rootElm);
    _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__.each(nodeList, (node)=>{
        if (_Nodes__WEBPACK_IMPORTED_MODULE_1__.isWrappedNbsp(node)) {
            _ephox_sugar__WEBPACK_IMPORTED_MODULE_4__.remove(_ephox_sugar__WEBPACK_IMPORTED_MODULE_2__.SugarElement.fromDom(node), _Data__WEBPACK_IMPORTED_MODULE_0__.nbspClass);
        } else {
            editor.dom.remove(node, true);
        }
    });
};
const toggle = (editor)=>{
    const body = editor.getBody();
    const bookmark = editor.selection.getBookmark();
    let parentNode = _Nodes__WEBPACK_IMPORTED_MODULE_1__.findParentElm(editor.selection.getNode(), body);
    // if user does select all the parentNode will be undefined
    parentNode = parentNode !== undefined ? parentNode : body;
    hide(editor, parentNode);
    show(editor, parentNode);
    editor.selection.moveToBookmark(bookmark);
};



}),
"./src/plugins/visualchars/main/ts/ui/Buttons.ts": 
/*!*******************************************************!*\
  !*** ./src/plugins/visualchars/main/ts/ui/Buttons.ts ***!
  \*******************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  register: () => (register)
});
const toggleActiveState = (editor, enabledStated)=>(api)=>{
        api.setActive(enabledStated.get());
        const editorEventCallback = (e)=>api.setActive(e.state);
        editor.on('VisualChars', editorEventCallback);
        return ()=>editor.off('VisualChars', editorEventCallback);
    };
const register = (editor, toggleState)=>{
    const onAction = ()=>editor.execCommand('mceVisualChars');
    editor.ui.registry.addToggleButton('visualchars', {
        tooltip: 'Show invisible characters',
        icon: 'visualchars',
        onAction,
        onSetup: toggleActiveState(editor, toggleState),
        context: 'any'
    });
    editor.ui.registry.addToggleMenuItem('visualchars', {
        text: 'Show invisible characters',
        icon: 'visualchars',
        onAction,
        onSetup: toggleActiveState(editor, toggleState),
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

/*!*************************************************!*\
  !*** ./src/plugins/visualchars/main/ts/Main.ts ***!
  \*************************************************/
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _Plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Plugin */ "./src/plugins/visualchars/main/ts/Plugin.ts");

(0,_Plugin__WEBPACK_IMPORTED_MODULE_0__["default"])(); /** *****
 * DO NOT EXPORT ANYTHING
 *
 * IF YOU DO ROLLUP WILL LEAVE A GLOBAL ON THE PAGE
 *******/ 

})();

})()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdGlueW1jZS9wbHVnaW5zL3Zpc3VhbGNoYXJzL3BsdWdpbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL3RpbnltY2UvLi9saWIvZ2xvYmFscy90aW55bWNlL2NvcmUvYXBpL1BsdWdpbk1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9rYXRhbWFyaS9zcmMvbWFpbi90cy9lcGhveC9rYXRhbWFyaS9hcGkvQXJyLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4va2F0YW1hcmkvc3JjL21haW4vdHMvZXBob3gva2F0YW1hcmkvYXBpL0NlbGwudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9rYXRhbWFyaS9zcmMvbWFpbi90cy9lcGhveC9rYXRhbWFyaS9hcGkvRnVuLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4va2F0YW1hcmkvc3JjL21haW4vdHMvZXBob3gva2F0YW1hcmkvYXBpL0dsb2JhbC50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL2thdGFtYXJpL3NyYy9tYWluL3RzL2VwaG94L2thdGFtYXJpL2FwaS9PYmoudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9rYXRhbWFyaS9zcmMvbWFpbi90cy9lcGhveC9rYXRhbWFyaS9hcGkvT3B0aW9uYWwudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9rYXRhbWFyaS9zcmMvbWFpbi90cy9lcGhveC9rYXRhbWFyaS9hcGkvUmVzb2x2ZS50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL2thdGFtYXJpL3NyYy9tYWluL3RzL2VwaG94L2thdGFtYXJpL2FwaS9UaHJvdHRsZXIudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9rYXRhbWFyaS9zcmMvbWFpbi90cy9lcGhveC9rYXRhbWFyaS9hcGkvVHlwZS50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL3NhbmQvc3JjL21haW4vdHMvZXBob3gvc2FuZC9hcGkvU2FuZEhUTUxFbGVtZW50LnRzIiwid2VicGFjazovL3RpbnltY2UvLi4vc2FuZC9zcmMvbWFpbi90cy9lcGhveC9zYW5kL3V0aWwvR2xvYmFsLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4vc3VnYXIvc3JjL21haW4vdHMvZXBob3gvc3VnYXIvYWxpZW4vUmVjdXJzZS50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL3N1Z2FyL3NyYy9tYWluL3RzL2VwaG94L3N1Z2FyL2FwaS9kb20vQ29tcGFyZS50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL3N1Z2FyL3NyYy9tYWluL3RzL2VwaG94L3N1Z2FyL2FwaS9ub2RlL05vZGVUeXBlcy50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL3N1Z2FyL3NyYy9tYWluL3RzL2VwaG94L3N1Z2FyL2FwaS9ub2RlL1N1Z2FyQm9keS50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL3N1Z2FyL3NyYy9tYWluL3RzL2VwaG94L3N1Z2FyL2FwaS9ub2RlL1N1Z2FyRWxlbWVudC50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL3N1Z2FyL3NyYy9tYWluL3RzL2VwaG94L3N1Z2FyL2FwaS9ub2RlL1N1Z2FySGVhZC50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL3N1Z2FyL3NyYy9tYWluL3RzL2VwaG94L3N1Z2FyL2FwaS9ub2RlL1N1Z2FyTm9kZS50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL3N1Z2FyL3NyYy9tYWluL3RzL2VwaG94L3N1Z2FyL2FwaS9ub2RlL1N1Z2FyU2hhZG93RG9tLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4vc3VnYXIvc3JjL21haW4vdHMvZXBob3gvc3VnYXIvYXBpL3Byb3BlcnRpZXMvQXR0ckxpc3QudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9zdWdhci9zcmMvbWFpbi90cy9lcGhveC9zdWdhci9hcGkvcHJvcGVydGllcy9BdHRyaWJ1dGUudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9zdWdhci9zcmMvbWFpbi90cy9lcGhveC9zdWdhci9hcGkvcHJvcGVydGllcy9DbGFzcy50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL3N1Z2FyL3NyYy9tYWluL3RzL2VwaG94L3N1Z2FyL2FwaS9wcm9wZXJ0aWVzL0NvbnRlbnRFZGl0YWJsZS50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL3N1Z2FyL3NyYy9tYWluL3RzL2VwaG94L3N1Z2FyL2FwaS9wcm9wZXJ0aWVzL1RvZ2dsZXIudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9zdWdhci9zcmMvbWFpbi90cy9lcGhveC9zdWdhci9hcGkvc2VhcmNoL1ByZWRpY2F0ZUZpbmQudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9zdWdhci9zcmMvbWFpbi90cy9lcGhveC9zdWdhci9hcGkvc2VhcmNoL1NlbGVjdG9yRmluZC50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL3N1Z2FyL3NyYy9tYWluL3RzL2VwaG94L3N1Z2FyL2FwaS9zZWFyY2gvU2VsZWN0b3JzLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4vc3VnYXIvc3JjL21haW4vdHMvZXBob3gvc3VnYXIvYXBpL3NlYXJjaC9UcmF2ZXJzZS50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL3N1Z2FyL3NyYy9tYWluL3RzL2VwaG94L3N1Z2FyL2ltcGwvQ2xhc3NMaXN0LnRzIiwid2VicGFjazovL3RpbnltY2UvLi4vc3VnYXIvc3JjL21haW4vdHMvZXBob3gvc3VnYXIvaW1wbC9DbG9zZXN0T3JBbmNlc3Rvci50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvdmlzdWFsY2hhcnMvbWFpbi90cy9QbHVnaW4udHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL3Zpc3VhbGNoYXJzL21haW4vdHMvYXBpL0FwaS50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvdmlzdWFsY2hhcnMvbWFpbi90cy9hcGkvQ29tbWFuZHMudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL3Zpc3VhbGNoYXJzL21haW4vdHMvYXBpL0V2ZW50cy50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvdmlzdWFsY2hhcnMvbWFpbi90cy9hcGkvT3B0aW9ucy50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvdmlzdWFsY2hhcnMvbWFpbi90cy9jb3JlL0FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL3Zpc3VhbGNoYXJzL21haW4vdHMvY29yZS9CaW5kaW5ncy50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvdmlzdWFsY2hhcnMvbWFpbi90cy9jb3JlL0RhdGEudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL3Zpc3VhbGNoYXJzL21haW4vdHMvY29yZS9IdG1sLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy92aXN1YWxjaGFycy9tYWluL3RzL2NvcmUvS2V5Ym9hcmQudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL3Zpc3VhbGNoYXJzL21haW4vdHMvY29yZS9Ob2Rlcy50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvdmlzdWFsY2hhcnMvbWFpbi90cy9jb3JlL1Zpc3VhbENoYXJzLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy92aXN1YWxjaGFycy9tYWluL3RzL3VpL0J1dHRvbnMudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi8uLi9ub2RlX21vZHVsZXMvQGVwaG94L2Rpc3B1dGUvc3JjL21haW4vdHMvYXBpL0VxLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4vLi4vbm9kZV9tb2R1bGVzL0BlcGhveC9kaXNwdXRlL3NyYy9tYWluL3RzL2NvcmUvQXJyYXlVdGlsLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4vLi4vbm9kZV9tb2R1bGVzL0BlcGhveC9kaXNwdXRlL3NyYy9tYWluL3RzL2NvcmUvVHlwZS50cyIsIndlYnBhY2s6Ly90aW55bWNlL3dlYnBhY2svcnVudGltZS9kZWZpbmVfcHJvcGVydHlfZ2V0dGVycyIsIndlYnBhY2s6Ly90aW55bWNlL3dlYnBhY2svcnVudGltZS9oYXNfb3duX3Byb3BlcnR5Iiwid2VicGFjazovL3RpbnltY2Uvd2VicGFjay9ydW50aW1lL21ha2VfbmFtZXNwYWNlX29iamVjdCIsIndlYnBhY2s6Ly90aW55bWNlL3dlYnBhY2svcnVudGltZS9yc3BhY2tfdmVyc2lvbiIsIndlYnBhY2s6Ly90aW55bWNlL3dlYnBhY2svcnVudGltZS9yc3BhY2tfdW5pcXVlX2lkIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy92aXN1YWxjaGFycy9tYWluL3RzL01haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGdsb2JhbCA9IHRpbnltY2UudXRpbC5Ub29scy5yZXNvbHZlKCd0aW55bWNlLlBsdWdpbk1hbmFnZXInKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2xvYmFsO1xuZXhwb3J0IHZhciBQbHVnaW5NYW5hZ2VyID0gZ2xvYmFsO1xuIiwiaW1wb3J0IHsgRXEgfSBmcm9tICdAZXBob3gvZGlzcHV0ZSc7XG5cbmltcG9ydCAqIGFzIEZ1biBmcm9tICcuL0Z1bic7XG5pbXBvcnQgeyBPcHRpb25hbCB9IGZyb20gJy4vT3B0aW9uYWwnO1xuaW1wb3J0ICogYXMgVHlwZSBmcm9tICcuL1R5cGUnO1xuXG50eXBlIEFycmF5TW9ycGhpc208VCwgVT4gPSAoeDogVCwgaTogbnVtYmVyKSA9PiBVO1xudHlwZSBBcnJheUd1YXJkUHJlZGljYXRlPFQsIFUgZXh0ZW5kcyBUPiA9ICh4OiBULCBpOiBudW1iZXIpID0+IHggaXMgVTtcbnR5cGUgQXJyYXlQcmVkaWNhdGU8VD4gPSBBcnJheU1vcnBoaXNtPFQsIGJvb2xlYW4+O1xudHlwZSBDb21wYXJhdG9yPFQ+ID0gKGE6IFQsIGI6IFQpID0+IG51bWJlcjtcblxuY29uc3QgbmF0aXZlU2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5jb25zdCBuYXRpdmVJbmRleE9mID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2Y7XG5jb25zdCBuYXRpdmVQdXNoID0gQXJyYXkucHJvdG90eXBlLnB1c2g7XG5cbmNvbnN0IHJhd0luZGV4T2YgPSA8VD4gKHRzOiBBcnJheUxpa2U8VD4sIHQ6IFQpOiBudW1iZXIgPT5cbiAgbmF0aXZlSW5kZXhPZi5jYWxsKHRzLCB0KTtcblxuZXhwb3J0IGNvbnN0IGluZGV4T2YgPSA8VCA9IGFueT4oeHM6IEFycmF5TGlrZTxUPiwgeDogVCk6IE9wdGlvbmFsPG51bWJlcj4gPT4ge1xuICAvLyBUaGUgcmF3SW5kZXhPZiBtZXRob2QgZG9lcyBub3Qgd3JhcCB1cCBpbiBhbiBvcHRpb24uIFRoaXMgaXMgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMuXG4gIGNvbnN0IHIgPSByYXdJbmRleE9mKHhzLCB4KTtcbiAgcmV0dXJuIHIgPT09IC0xID8gT3B0aW9uYWwubm9uZSgpIDogT3B0aW9uYWwuc29tZShyKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb250YWlucyA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCB4OiBUKTogYm9vbGVhbiA9PiByYXdJbmRleE9mKHhzLCB4KSA+IC0xO1xuXG5leHBvcnQgY29uc3QgZXhpc3RzID0gPFQgPSBhbnk+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+KTogYm9vbGVhbiA9PiB7XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICBpZiAocHJlZCh4LCBpKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IGNvbnN0IHJhbmdlID0gPFQ+KG51bTogbnVtYmVyLCBmOiAoYTogbnVtYmVyKSA9PiBUKTogVFtdID0+IHtcbiAgY29uc3QgcjogVFtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtOyBpKyspIHtcbiAgICByLnB1c2goZihpKSk7XG4gIH1cbiAgcmV0dXJuIHI7XG59O1xuXG4vLyBJdCdzIGEgdG90YWwgbWljcm8gb3B0aW1pc2F0aW9uLCBidXQgdGhlc2UgZG8gbWFrZSBzb21lIGRpZmZlcmVuY2UuXG4vLyBQYXJ0aWN1bGFybHkgZm9yIGJyb3dzZXJzIG90aGVyIHRoYW4gQ2hyb21lLlxuLy8gLSBsZW5ndGggY2FjaGluZ1xuLy8gaHR0cDovL2pzcGVyZi5jb20vYnJvd3Nlci1kaWV0LWpxdWVyeS1lYWNoLXZzLWZvci1sb29wLzY5XG4vLyAtIG5vdCB1c2luZyBwdXNoXG4vLyBodHRwOi8vanNwZXJmLmNvbS9hcnJheS1kaXJlY3QtYXNzaWdubWVudC12cy1wdXNoLzJcblxuZXhwb3J0IGNvbnN0IGNodW5rID0gPFQ+KGFycmF5OiBBcnJheUxpa2U8VD4sIHNpemU6IG51bWJlcik6IFRbXVtdID0+IHtcbiAgY29uc3QgcjogVFtdW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkgKz0gc2l6ZSkge1xuICAgIGNvbnN0IHM6IFRbXSA9IG5hdGl2ZVNsaWNlLmNhbGwoYXJyYXksIGksIGkgKyBzaXplKTtcbiAgICByLnB1c2gocyk7XG4gIH1cbiAgcmV0dXJuIHI7XG59O1xuXG5leHBvcnQgY29uc3QgbWFwID0gPFQgPSBhbnksIFUgPSBhbnk+KHhzOiBBcnJheUxpa2U8VD4sIGY6IEFycmF5TW9ycGhpc208VCwgVT4pOiBVW10gPT4ge1xuICAvLyBwcmUtYWxsb2NhdGluZyBhcnJheSBzaXplIHdoZW4gaXQncyBndWFyYW50ZWVkIHRvIGJlIGtub3duXG4gIC8vIGh0dHA6Ly9qc3BlcmYuY29tL3B1c2gtYWxsb2NhdGVkLXZzLWR5bmFtaWMvMjJcbiAgY29uc3QgbGVuID0geHMubGVuZ3RoO1xuICBjb25zdCByID0gbmV3IEFycmF5KGxlbik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgcltpXSA9IGYoeCwgaSk7XG4gIH1cbiAgcmV0dXJuIHI7XG59O1xuXG4vLyBVbndvdW5kIGltcGxlbWVudGluZyBvdGhlciBmdW5jdGlvbnMgaW4gdGVybXMgb2YgZWFjaC5cbi8vIFRoZSBjb2RlIHNpemUgaXMgcm91Z2hseSB0aGUgc2FtZSwgYW5kIGl0IHNob3VsZCBhbGxvdyBmb3IgYmV0dGVyIG9wdGltaXNhdGlvbi5cbi8vIGNvbnN0IGVhY2ggPSBmdW5jdGlvbjxULCBVPih4czogVFtdLCBmOiAoeDogVCwgaT86IG51bWJlciwgeHM/OiBUW10pID0+IHZvaWQpOiB2b2lkIHtcbmV4cG9ydCBjb25zdCBlYWNoID0gPFQgPSBhbnk+KHhzOiBBcnJheUxpa2U8VD4sIGY6IEFycmF5TW9ycGhpc208VCwgdm9pZD4pOiB2b2lkID0+IHtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHhzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIGYoeCwgaSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBlYWNociA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCBmOiBBcnJheU1vcnBoaXNtPFQsIHZvaWQ+KTogdm9pZCA9PiB7XG4gIGZvciAobGV0IGkgPSB4cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICBmKHgsIGkpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgcGFydGl0aW9uID0gPFQgPSBhbnk+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+KTogeyBwYXNzOiBUW107IGZhaWw6IFRbXSB9ID0+IHtcbiAgY29uc3QgcGFzczogVFtdID0gW107XG4gIGNvbnN0IGZhaWw6IFRbXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0geHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgY29uc3QgYXJyID0gcHJlZCh4LCBpKSA/IHBhc3MgOiBmYWlsO1xuICAgIGFyci5wdXNoKHgpO1xuICB9XG4gIHJldHVybiB7IHBhc3MsIGZhaWwgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBmaWx0ZXI6IHtcbiAgPFQsIFUgZXh0ZW5kcyBUPih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheUd1YXJkUHJlZGljYXRlPFQsIFU+KTogVVtdO1xuICA8VD4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlQcmVkaWNhdGU8VD4pOiBUW107XG59ID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+KTogVFtdID0+IHtcbiAgY29uc3QgcjogVFtdID0gW107XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICBpZiAocHJlZCh4LCBpKSkge1xuICAgICAgci5wdXNoKHgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcjtcbn07XG5cbi8qXG4gKiBHcm91cHMgYW4gYXJyYXkgaW50byBjb250aWd1b3VzIGFycmF5cyBvZiBsaWtlIGVsZW1lbnRzLiBXaGV0aGVyIGFuIGVsZW1lbnQgaXMgbGlrZSBvciBub3QgZGVwZW5kcyBvbiBmLlxuICpcbiAqIGYgaXMgYSBmdW5jdGlvbiB0aGF0IGRlcml2ZXMgYSB2YWx1ZSBmcm9tIGFuIGVsZW1lbnQgLSBlLmcuIHRydWUgb3IgZmFsc2UsIG9yIGEgc3RyaW5nLlxuICogRWxlbWVudHMgYXJlIGxpa2UgaWYgdGhpcyBmdW5jdGlvbiBnZW5lcmF0ZXMgdGhlIHNhbWUgdmFsdWUgZm9yIHRoZW0gKGFjY29yZGluZyB0byA9PT0pLlxuICpcbiAqXG4gKiBPcmRlciBvZiB0aGUgZWxlbWVudHMgaXMgcHJlc2VydmVkLiBBcnIuZmxhdHRlbigpIG9uIHRoZSByZXN1bHQgd2lsbCByZXR1cm4gdGhlIG9yaWdpbmFsIGxpc3QsIGFzIHdpdGggSGFza2VsbCBncm91cEJ5IGZ1bmN0aW9uLlxuICogIEZvciBhIGdvb2QgZXhwbGFuYXRpb24sIHNlZSB0aGUgZ3JvdXAgZnVuY3Rpb24gKHdoaWNoIGlzIGEgc3BlY2lhbCBjYXNlIG9mIGdyb3VwQnkpXG4gKiAgaHR0cDovL2hhY2thZ2UuaGFza2VsbC5vcmcvcGFja2FnZS9iYXNlLTQuNy4wLjAvZG9jcy9EYXRhLUxpc3QuaHRtbCN2Omdyb3VwXG4gKi9cbmV4cG9ydCBjb25zdCBncm91cEJ5ID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4sIGY6IChhOiBUKSA9PiBhbnkpOiBUW11bXSA9PiB7XG4gIGlmICh4cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gW107XG4gIH0gZWxzZSB7XG4gICAgbGV0IHdhc1R5cGUgPSBmKHhzWzBdKTsgLy8gaW5pdGlhbCBjYXNlIGZvciBtYXRjaGluZ1xuICAgIGNvbnN0IHI6IFRbXVtdID0gW107XG4gICAgbGV0IGdyb3VwOiBUW10gPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgY29uc3QgeCA9IHhzW2ldO1xuICAgICAgY29uc3QgdHlwZSA9IGYoeCk7XG4gICAgICBpZiAodHlwZSAhPT0gd2FzVHlwZSkge1xuICAgICAgICByLnB1c2goZ3JvdXApO1xuICAgICAgICBncm91cCA9IFtdO1xuICAgICAgfVxuICAgICAgd2FzVHlwZSA9IHR5cGU7XG4gICAgICBncm91cC5wdXNoKHgpO1xuICAgIH1cbiAgICBpZiAoZ3JvdXAubGVuZ3RoICE9PSAwKSB7XG4gICAgICByLnB1c2goZ3JvdXApO1xuICAgIH1cbiAgICByZXR1cm4gcjtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGZvbGRyID0gPFQsIFU+KHhzOiBBcnJheUxpa2U8VD4sIGY6IChhY2M6IFUsIHg6IFQsIGk6IG51bWJlcikgPT4gVSwgYWNjOiBVKTogVSA9PiB7XG4gIGVhY2hyKHhzLCAoeCwgaSkgPT4ge1xuICAgIGFjYyA9IGYoYWNjLCB4LCBpKTtcbiAgfSk7XG4gIHJldHVybiBhY2M7XG59O1xuXG5leHBvcnQgY29uc3QgZm9sZGwgPSA8VCA9IGFueSwgVSA9IGFueT4oeHM6IEFycmF5TGlrZTxUPiwgZjogKGFjYzogVSwgeDogVCwgaTogbnVtYmVyKSA9PiBVLCBhY2M6IFUpOiBVID0+IHtcbiAgZWFjaCh4cywgKHgsIGkpID0+IHtcbiAgICBhY2MgPSBmKGFjYywgeCwgaSk7XG4gIH0pO1xuICByZXR1cm4gYWNjO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmRVbnRpbDoge1xuICA8VCwgVSBleHRlbmRzIFQ+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5R3VhcmRQcmVkaWNhdGU8VCwgVT4sIHVudGlsOiBBcnJheVByZWRpY2F0ZTxUPik6IE9wdGlvbmFsPFU+O1xuICA8VCA9IGFueT4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlQcmVkaWNhdGU8VD4sIHVudGlsOiBBcnJheVByZWRpY2F0ZTxUPik6IE9wdGlvbmFsPFQ+O1xufSA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheVByZWRpY2F0ZTxUPiwgdW50aWw6IEFycmF5UHJlZGljYXRlPFQ+KTogT3B0aW9uYWw8VD4gPT4ge1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0geHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgaWYgKHByZWQoeCwgaSkpIHtcbiAgICAgIHJldHVybiBPcHRpb25hbC5zb21lKHgpO1xuICAgIH0gZWxzZSBpZiAodW50aWwoeCwgaSkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gT3B0aW9uYWwubm9uZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmQ6IHtcbiAgPFQsIFUgZXh0ZW5kcyBUPih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheUd1YXJkUHJlZGljYXRlPFQsIFU+KTogT3B0aW9uYWw8VT47XG4gIDxUID0gYW55Pih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheVByZWRpY2F0ZTxUPik6IE9wdGlvbmFsPFQ+O1xufSA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheVByZWRpY2F0ZTxUPik6IE9wdGlvbmFsPFQ+ID0+IHtcbiAgcmV0dXJuIGZpbmRVbnRpbCh4cywgcHJlZCwgRnVuLm5ldmVyKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmaW5kSW5kZXggPSA8VD4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlQcmVkaWNhdGU8VD4pOiBPcHRpb25hbDxudW1iZXI+ID0+IHtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHhzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIGlmIChwcmVkKHgsIGkpKSB7XG4gICAgICByZXR1cm4gT3B0aW9uYWwuc29tZShpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gT3B0aW9uYWwubm9uZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmRMYXN0SW5kZXggPSA8VD4oYXJyOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+KTogT3B0aW9uYWw8bnVtYmVyPiA9PiB7XG4gIGZvciAobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBpZiAocHJlZChhcnJbaV0sIGkpKSB7XG4gICAgICByZXR1cm4gT3B0aW9uYWwuc29tZShpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gT3B0aW9uYWwubm9uZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZsYXR0ZW4gPSA8VD4oeHM6IEFycmF5TGlrZTxUW10+KTogVFtdID0+IHtcbiAgLy8gTm90ZSwgdGhpcyBpcyBwb3NzaWJsZSBiZWNhdXNlIHB1c2ggc3VwcG9ydHMgbXVsdGlwbGUgYXJndW1lbnRzOlxuICAvLyBodHRwOi8vanNwZXJmLmNvbS9jb25jYXQtcHVzaC82XG4gIC8vIE5vdGUgdGhhdCBpbiB0aGUgcGFzdCwgY29uY2F0KCkgd291bGQgc2lsZW50bHkgd29yayAodmVyeSBzbG93bHkpIGZvciBhcnJheS1saWtlIG9iamVjdHMuXG4gIC8vIFdpdGggdGhpcyBjaGFuZ2UgaXQgd2lsbCB0aHJvdyBhbiBlcnJvci5cbiAgY29uc3QgcjogVFtdID0gW107XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgIC8vIEVuc3VyZSB0aGF0IGVhY2ggdmFsdWUgaXMgYW4gYXJyYXkgaXRzZWxmXG4gICAgaWYgKCFUeXBlLmlzQXJyYXkoeHNbaV0pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Fyci5mbGF0dGVuIGl0ZW0gJyArIGkgKyAnIHdhcyBub3QgYW4gYXJyYXksIGlucHV0OiAnICsgeHMpO1xuICAgIH1cbiAgICBuYXRpdmVQdXNoLmFwcGx5KHIsIHhzW2ldKTtcbiAgfVxuICByZXR1cm4gcjtcbn07XG5cbmV4cG9ydCBjb25zdCBiaW5kID0gPFQgPSBhbnksIFUgPSBhbnk+KHhzOiBBcnJheUxpa2U8VD4sIGY6IEFycmF5TW9ycGhpc208VCwgVVtdPik6IFVbXSA9PlxuICBmbGF0dGVuKG1hcCh4cywgZikpO1xuXG5leHBvcnQgY29uc3QgZm9yYWxsID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+KTogYm9vbGVhbiA9PiB7XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICBpZiAocHJlZCh4LCBpKSAhPT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmV4cG9ydCBjb25zdCBlcXVhbCA9IDxUPihhMTogQXJyYXlMaWtlPFQ+LCBhMjogQXJyYXlMaWtlPFQ+LCBlcTogRXEuRXE8VD4gPSBFcS5lcUFueSk6IGJvb2xlYW4gPT5cbiAgRXEuZXFBcnJheShlcSkuZXEoYTEsIGEyKTtcblxuZXhwb3J0IGNvbnN0IHJldmVyc2UgPSA8VD4oeHM6IEFycmF5TGlrZTxUPik6IFRbXSA9PiB7XG4gIGNvbnN0IHI6IFRbXSA9IG5hdGl2ZVNsaWNlLmNhbGwoeHMsIDApO1xuICByLnJldmVyc2UoKTtcbiAgcmV0dXJuIHI7XG59O1xuXG5leHBvcnQgY29uc3QgZGlmZmVyZW5jZSA9IDxUPihhMTogQXJyYXlMaWtlPFQ+LCBhMjogQXJyYXlMaWtlPFQ+KTogVFtdID0+IGZpbHRlcihhMSwgKHgpID0+ICFjb250YWlucyhhMiwgeCkpO1xuXG5leHBvcnQgY29uc3QgbWFwVG9PYmplY3Q6IHtcbiAgPFQgZXh0ZW5kcyBzdHJpbmcsIFU+KHhzOiBBcnJheUxpa2U8VD4sIGY6ICh4OiBULCBpOiBudW1iZXIpID0+IFUpOiBSZWNvcmQ8VCwgVT47XG4gIDxULCBSIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55Pj4oeHM6IEFycmF5TGlrZTxUPiwgZjogKHg6IFQsIGk6IG51bWJlcikgPT4gUltrZXlvZiBSXSk6IFI7XG59ID0gPFQsIFIgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+Pih4czogQXJyYXlMaWtlPFQ+LCBmOiAoeDogVCwgaTogbnVtYmVyKSA9PiBSW2tleW9mIFJdKTogUiA9PiB7XG4gIGNvbnN0IHIgPSB7fSBhcyBSO1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0geHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgcltTdHJpbmcoeCkgYXMga2V5b2YgUl0gPSBmKHgsIGkpO1xuICB9XG4gIHJldHVybiByO1xufTtcblxuZXhwb3J0IGNvbnN0IHB1cmUgPSA8VD4oeDogVCk6IFRbXSA9PiBbIHggXTtcblxuZXhwb3J0IGNvbnN0IHNvcnQgPSA8VD4oeHM6IEFycmF5TGlrZTxUPiwgY29tcGFyYXRvcj86IENvbXBhcmF0b3I8VD4pOiBUW10gPT4ge1xuICBjb25zdCBjb3B5OiBUW10gPSBuYXRpdmVTbGljZS5jYWxsKHhzLCAwKTtcbiAgY29weS5zb3J0KGNvbXBhcmF0b3IpO1xuICByZXR1cm4gY29weTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXQgPSA8VD4oeHM6IEFycmF5TGlrZTxUPiwgaTogbnVtYmVyKTogT3B0aW9uYWw8VD4gPT4gaSA+PSAwICYmIGkgPCB4cy5sZW5ndGggPyBPcHRpb25hbC5zb21lKHhzW2ldKSA6IE9wdGlvbmFsLm5vbmUoKTtcblxuZXhwb3J0IGNvbnN0IGhlYWQgPSA8VD4oeHM6IEFycmF5TGlrZTxUPik6IE9wdGlvbmFsPFQ+ID0+IGdldCh4cywgMCk7XG5cbmV4cG9ydCBjb25zdCBsYXN0ID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4pOiBPcHRpb25hbDxUPiA9PiBnZXQoeHMsIHhzLmxlbmd0aCAtIDEpO1xuXG5leHBvcnQgY29uc3QgZnJvbTogPFQ+KHg6IEFycmF5TGlrZTxUPikgPT4gVFtdID0gVHlwZS5pc0Z1bmN0aW9uKEFycmF5LmZyb20pID8gQXJyYXkuZnJvbSA6ICh4KSA9PiBuYXRpdmVTbGljZS5jYWxsKHgpO1xuXG5leHBvcnQgY29uc3QgZmluZE1hcCA9IDxBLCBCPihhcnI6IEFycmF5TGlrZTxBPiwgZjogKGE6IEEsIGluZGV4OiBudW1iZXIpID0+IE9wdGlvbmFsPEI+KTogT3B0aW9uYWw8Qj4gPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHIgPSBmKGFycltpXSwgaSk7XG4gICAgaWYgKHIuaXNTb21lKCkpIHtcbiAgICAgIHJldHVybiByO1xuICAgIH1cbiAgfVxuICByZXR1cm4gT3B0aW9uYWwubm9uZTxCPigpO1xufTtcblxuZXhwb3J0IGNvbnN0IHVuaXF1ZSA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCBjb21wYXJhdG9yPzogKGE6IFQsIGI6IFQpID0+IGJvb2xlYW4pOiBUW10gPT4ge1xuICBjb25zdCByOiBUW10gPSBbXTtcblxuICBjb25zdCBpc0R1cGxpY2F0ZWQgPSBUeXBlLmlzRnVuY3Rpb24oY29tcGFyYXRvcikgP1xuICAgICh4OiBUKSA9PiBleGlzdHMociwgKGkpID0+IGNvbXBhcmF0b3IoaSwgeCkpIDpcbiAgICAoeDogVCkgPT4gY29udGFpbnMociwgeCk7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHhzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIGlmICghaXNEdXBsaWNhdGVkKHgpKSB7XG4gICAgICByLnB1c2goeCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHI7XG59O1xuIiwiZXhwb3J0IGludGVyZmFjZSBDZWxsPFQ+IHtcbiAgcmVhZG9ubHkgZ2V0OiAoKSA9PiBUO1xuICByZWFkb25seSBzZXQ6ICh2YWx1ZTogVCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IENlbGwgPSA8VD4oaW5pdGlhbDogVCk6IENlbGw8VD4gPT4ge1xuICBsZXQgdmFsdWUgPSBpbml0aWFsO1xuXG4gIGNvbnN0IGdldCA9ICgpID0+IHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG5cbiAgY29uc3Qgc2V0ID0gKHY6IFQpID0+IHtcbiAgICB2YWx1ZSA9IHY7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQsXG4gICAgc2V0XG4gIH07XG59O1xuIiwiaW1wb3J0ICogYXMgVHlwZSBmcm9tICcuL1R5cGUnO1xuXG5jb25zdCBub29wOiAoLi4uYXJnczogYW55W10pID0+IHZvaWRcbj0gKCkgPT4geyB9O1xuXG5jb25zdCBub2FyZzogPFQ+KGY6ICgpID0+IFQpID0+ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZFxuPSAoZikgPT4gKCkgPT4gZigpO1xuXG4vKiogQ29tcG9zZSBhIHVuYXJ5IGZ1bmN0aW9uIHdpdGggYW4gbi1hcnkgZnVuY3Rpb24gKi9cbmNvbnN0IGNvbXBvc2UgPSA8VCBleHRlbmRzIGFueVtdLCBVLCBWPihmYTogKHY6IFUpID0+IFYsIGZiOiAoLi4ueDogVCkgPT4gVSk6ICguLi54OiBUKSA9PiBWID0+IHtcbiAgcmV0dXJuICguLi5hcmdzOiBUKSA9PiB7XG4gICAgcmV0dXJuIGZhKGZiLmFwcGx5KG51bGwsIGFyZ3MpKTtcbiAgfTtcbn07XG5cbi8qKiBDb21wb3NlIHR3byB1bmFyeSBmdW5jdGlvbnMuIFNpbWlsYXIgdG8gY29tcG9zZSwgYnV0IGF2b2lkcyB1c2luZyBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuICovXG5jb25zdCBjb21wb3NlMSA9IDxBLCBCLCBDPiAoZmJjOiAoYjogQikgPT4gQywgZmFiOiAoYTogQSkgPT4gQikgPT4gKGE6IEEpOiBDID0+XG4gIGZiYyhmYWIoYSkpO1xuXG5jb25zdCBjb25zdGFudCA9IDxUPih2YWx1ZTogVCk6ICgpID0+IFQgPT4ge1xuICByZXR1cm4gKCkgPT4ge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcbn07XG5cbmNvbnN0IGlkZW50aXR5ID0gPFQgPSBhbnk+KHg6IFQpOiBUID0+IHtcbiAgcmV0dXJuIHg7XG59O1xuXG5jb25zdCB0cmlwbGVFcXVhbHMgPSA8VD4oYTogVCwgYjogVCk6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gYSA9PT0gYjtcbn07XG5cbmZ1bmN0aW9uIGN1cnJ5IDxSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8QSwgUkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoYTogQSwgLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCwgYTogQSk6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPEEsIEIsIFJFU1QgZXh0ZW5kcyBhbnlbXSwgT1VUPihmbjogKGE6IEEsIGI6IEIsIC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQsIGE6IEEsIGI6IEIpOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVDtcbmZ1bmN0aW9uIGN1cnJ5IDxBLCBCLCBDLCBSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46IChhOiBBLCBiOiBCLCBjOiBDLCAuLi5yZXN0QXJnczogUkVTVCkgPT4gT1VULCBhOiBBLCBiOiBCLCBjOiBDKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8QSwgQiwgQywgRCwgUkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoYTogQSwgYjogQiwgYzogQywgZDogRCwgLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCwgYTogQSwgYjogQiwgYzogQywgZDogRCk6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPEEsIEIsIEMsIEQsIEUsIFJFU1QgZXh0ZW5kcyBhbnlbXSwgT1VUPihmbjogKGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQsIGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUpOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVDtcbmZ1bmN0aW9uIGN1cnJ5IDxBLCBCLCBDLCBELCBFLCBGLCBSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46IChhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCBmOiBGLCAuLi5yZXN0QXJnczogUkVTVCkgPT4gT1VULCBhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCBmOiBGKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8QSwgQiwgQywgRCwgRSwgRiwgRywgUkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgZjogRiwgZzogRywgLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCwgYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgZjogRiwgZzogRyk6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPEEsIEIsIEMsIEQsIEUsIEYsIEcsIEgsIFJFU1QgZXh0ZW5kcyBhbnlbXSwgT1VUPihmbjogKGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIGY6IEYsIGc6IEcsIGg6IEgsIC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQsIGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIGY6IEYsIGc6IEcsIGg6IEgpOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVDtcbmZ1bmN0aW9uIGN1cnJ5IDxBLCBCLCBDLCBELCBFLCBGLCBHLCBILCBJLCBSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46IChhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCBmOiBGLCBnOiBHLCBoOiBILCBpOiBJLCAuLi5yZXN0QXJnczogUkVTVCkgPT4gT1VULCBhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCBmOiBGLCBnOiBHLCBoOiBILCBpOiBJKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8QSwgQiwgQywgRCwgRSwgRiwgRywgSCwgSSwgSiwgUkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgZjogRiwgZzogRywgaDogSCwgaTogSSwgajogSiwgLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCwgYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgZjogRiwgZzogRywgaDogSCwgaTogSSwgajogSik6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPE9VVD4oZm46ICguLi5hbGxBcmdzOiBhbnlbXSkgPT4gT1VULCAuLi5pbml0aWFsQXJnczogYW55W10pOiAoLi4ucmVzdEFyZ3M6IGFueVtdKSA9PiBPVVQge1xuICByZXR1cm4gKC4uLnJlc3RBcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IGFsbCA9IGluaXRpYWxBcmdzLmNvbmNhdChyZXN0QXJncyk7XG4gICAgcmV0dXJuIGZuLmFwcGx5KG51bGwsIGFsbCk7XG4gIH07XG59XG5cbmNvbnN0IG5vdCA9IDxUPihmOiAodDogVCkgPT4gYm9vbGVhbikgPT4gKHQ6IFQpOiBib29sZWFuID0+XG4gICFmKHQpO1xuXG5jb25zdCBkaWUgPSAobXNnOiBzdHJpbmcpID0+IHtcbiAgcmV0dXJuICgpOiBuZXZlciA9PiB7XG4gICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XG4gIH07XG59O1xuXG5jb25zdCBhcHBseSA9IDxUPihmOiAoKSA9PiBUKTogVCA9PiB7XG4gIHJldHVybiBmKCk7XG59O1xuXG5jb25zdCBjYWxsID0gKGY6ICgpID0+IGFueSk6IHZvaWQgPT4ge1xuICBmKCk7XG59O1xuXG5jb25zdCBuZXZlcjogKC4uLmFyZ3M6IGFueVtdKSA9PiBmYWxzZSA9IGNvbnN0YW50PGZhbHNlPihmYWxzZSk7XG5jb25zdCBhbHdheXM6ICguLi5hcmdzOiBhbnlbXSkgPT4gdHJ1ZSA9IGNvbnN0YW50PHRydWU+KHRydWUpO1xuXG4vKiBVc2VkIHRvIHdlYWtlbiB0eXBlcyAqL1xuY29uc3Qgd2Vha2VuID0gPEEsIEIgZXh0ZW5kcyBBPihiOiBCKTogQSA9PiBiO1xuXG50eXBlIEZ1bjxYLCBZPiA9ICh4OiBYKSA9PiBZO1xuY29uc3QgcGlwZToge1xuICA8QSwgQj4oYTogQSwgYWI6IEZ1bjxBLCBCPik6IEI7XG4gIDxBLCBCLCBDPihhOiBBLCBhYjogRnVuPEEsIEI+LCBiYzogRnVuPEIsIEM+KTogQztcbiAgPEEsIEIsIEMsIEQ+KGE6IEEsIGFiOiBGdW48QSwgQj4sIGJjOiBGdW48QiwgQz4sIGNkOiBGdW48QywgRD4pOiBEO1xuICA8QSwgQiwgQywgRCwgRT4oYTogQSwgYWI6IEZ1bjxBLCBCPiwgYmM6IEZ1bjxCLCBDPiwgY2Q6IEZ1bjxDLCBEPiwgZGU6IEZ1bjxELCBFPik6IEU7XG4gIDxBLCBCLCBDLCBELCBFLCBGPihhOiBBLCBhYjogRnVuPEEsIEI+LCBiYzogRnVuPEIsIEM+LCBjZDogRnVuPEMsIEQ+LCBkZTogRnVuPEQsIEU+LCBlZjogRnVuPEUsIEY+KTogRjtcbiAgPEEsIEIsIEMsIEQsIEUsIEYsIEc+KGE6IEEsIGFiOiBGdW48QSwgQj4sIGJjOiBGdW48QiwgQz4sIGNkOiBGdW48QywgRD4sIGRlOiBGdW48RCwgRT4sIGVmOiBGdW48RSwgRj4sIGZnOiBGdW48RiwgRz4pOiBHO1xuICA8QSwgQiwgQywgRCwgRSwgRiwgRywgSD4oYTogQSwgYWI6IEZ1bjxBLCBCPiwgYmM6IEZ1bjxCLCBDPiwgY2Q6IEZ1bjxDLCBEPiwgZGU6IEZ1bjxELCBFPiwgZWY6IEZ1bjxFLCBGPiwgZmc6IEZ1bjxGLCBHPiwgZ2g6IEZ1bjxHLCBIPik6IEg7XG59ID1cbiAgPEEsIEIsIEMsIEQsIEUsIEYsIEcsIEg+KGE6IEEsIGFiOiBGdW48QSwgQj4sIGJjPzogRnVuPEIsIEM+LCBjZD86IEZ1bjxDLCBEPiwgZGU/OiBGdW48RCwgRT4sIGVmPzogRnVuPEUsIEY+LCBmZz86IEZ1bjxGLCBHPiwgZ2g/OiBGdW48RywgSD4pOiBCIHwgQyB8IEQgfCBFIHwgRiB8IEcgfCBIID0+IHtcbiAgICBjb25zdCBiID0gYWIoYSk7XG4gICAgaWYgKFR5cGUuaXNOdWxsYWJsZShiYykpIHtcbiAgICAgIHJldHVybiBiO1xuICAgIH1cblxuICAgIGNvbnN0IGMgPSBiYyhiKTtcbiAgICBpZiAoVHlwZS5pc051bGxhYmxlKGNkKSkge1xuICAgICAgcmV0dXJuIGM7XG4gICAgfVxuXG4gICAgY29uc3QgZCA9IGNkKGMpO1xuICAgIGlmIChUeXBlLmlzTnVsbGFibGUoZGUpKSB7XG4gICAgICByZXR1cm4gZDtcbiAgICB9XG5cbiAgICBjb25zdCBlID0gZGUoZCk7XG4gICAgaWYgKFR5cGUuaXNOdWxsYWJsZShlZikpIHtcbiAgICAgIHJldHVybiBlO1xuICAgIH1cblxuICAgIGNvbnN0IGYgPSBlZihlKTtcbiAgICBpZiAoVHlwZS5pc051bGxhYmxlKGZnKSkge1xuICAgICAgcmV0dXJuIGY7XG4gICAgfVxuXG4gICAgY29uc3QgZyA9IGZnKGYpO1xuICAgIGlmIChUeXBlLmlzTnVsbGFibGUoZ2gpKSB7XG4gICAgICByZXR1cm4gZztcbiAgICB9XG5cbiAgICByZXR1cm4gZ2goZyk7XG4gIH07XG5cbmV4cG9ydCB7XG4gIG5vb3AsXG4gIG5vYXJnLFxuICBjb21wb3NlLFxuICBjb21wb3NlMSxcbiAgY29uc3RhbnQsXG4gIGlkZW50aXR5LFxuICB0cmlwbGVFcXVhbHMsXG4gIGN1cnJ5LFxuICBub3QsXG4gIGRpZSxcbiAgYXBwbHksXG4gIGNhbGwsXG4gIG5ldmVyLFxuICBhbHdheXMsXG4gIHdlYWtlbixcbiAgcGlwZVxufTtcbiIsIi8vIFVzZSB3aW5kb3cgb2JqZWN0IGFzIHRoZSBnbG9iYWwgaWYgaXQncyBhdmFpbGFibGUgc2luY2UgQ1NQIHdpbGwgYmxvY2sgc2NyaXB0IGV2YWxzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWltcGxpZWQtZXZhbFxuZXhwb3J0IGNvbnN0IEdsb2JhbCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogRnVuY3Rpb24oJ3JldHVybiB0aGlzOycpKCk7XG4iLCJpbXBvcnQgeyBFcSB9IGZyb20gJ0BlcGhveC9kaXNwdXRlJztcblxuaW1wb3J0ICogYXMgRnVuIGZyb20gJy4vRnVuJztcbmltcG9ydCB7IE9wdGlvbmFsIH0gZnJvbSAnLi9PcHRpb25hbCc7XG5cbnR5cGUgT2JqS2V5czxUIGV4dGVuZHMge30+ID0gRXh0cmFjdDxrZXlvZiBULCBzdHJpbmc+O1xudHlwZSBPYmpDYWxsYmFjazxUIGV4dGVuZHMge30+ID0gKHZhbHVlOiBUW2tleW9mIFRdLCBrZXk6IE9iaktleXM8VD4pID0+IHZvaWQ7XG50eXBlIE9iak1vcnBoaXNtPFQgZXh0ZW5kcyB7fSwgUj4gPSAodmFsdWU6IFRba2V5b2YgVF0sIGtleTogT2JqS2V5czxUPikgPT4gUjtcbnR5cGUgT2JqR3VhcmRQcmVkaWNhdGU8VCBleHRlbmRzIHt9LCBVIGV4dGVuZHMgVFtrZXlvZiBUXT4gPSAodmFsdWU6IFRba2V5b2YgVF0sIGtleTogT2JqS2V5czxUPikgPT4gdmFsdWUgaXMgVTtcbnR5cGUgT2JqUHJlZGljYXRlPFQgZXh0ZW5kcyB7fT4gPSAodmFsdWU6IFRba2V5b2YgVF0sIGtleTogT2JqS2V5czxUPikgPT4gYm9vbGVhbjtcblxuLy8gVGhlcmUgYXJlIG1hbnkgdmFyaWF0aW9ucyBvZiBPYmplY3QgaXRlcmF0aW9uIHRoYXQgYXJlIGZhc3RlciB0aGFuIHRoZSAnZm9yLWluJyBzdHlsZTpcbi8vIGh0dHA6Ly9qc3BlcmYuY29tL29iamVjdC1rZXlzLWl0ZXJhdGlvbi8xMDdcbi8vXG4vLyBVc2UgdGhlIG5hdGl2ZSBrZXlzIGlmIGl0IGlzIGF2YWlsYWJsZSAoSUU5KyksIG90aGVyd2lzZSBmYWxsIGJhY2sgdG8gbWFudWFsbHkgZmlsdGVyaW5nXG5leHBvcnQgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzO1xuXG5leHBvcnQgY29uc3QgaGFzT3duUHJvcGVydHkgPSBPYmplY3QuaGFzT3duUHJvcGVydHk7XG5cbmV4cG9ydCBjb25zdCBlYWNoID0gPFQgZXh0ZW5kcyB7fT4ob2JqOiBULCBmOiBPYmpDYWxsYmFjazxUPik6IHZvaWQgPT4ge1xuICBjb25zdCBwcm9wcyA9IGtleXMob2JqKSBhcyBBcnJheTxPYmpLZXlzPFQ+PjtcbiAgZm9yIChsZXQgayA9IDAsIGxlbiA9IHByb3BzLmxlbmd0aDsgayA8IGxlbjsgaysrKSB7XG4gICAgY29uc3QgaSA9IHByb3BzW2tdO1xuICAgIGNvbnN0IHggPSBvYmpbaV07XG4gICAgZih4LCBpKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IG1hcCA9IDxUIGV4dGVuZHMge30sIFI+KG9iajogVCwgZjogT2JqTW9ycGhpc208VCwgUj4pOiB7IFtrIGluIGtleW9mIFRdOiBSIH0gPT4ge1xuICByZXR1cm4gdHVwbGVNYXA8eyBbayBpbiBrZXlvZiBUXTogUiB9LCBUPihvYmosICh4LCBpKSA9PiAoe1xuICAgIGs6IGksXG4gICAgdjogZih4LCBpKVxuICB9KSk7XG59O1xuXG5leHBvcnQgY29uc3QgdHVwbGVNYXAgPSA8UiBleHRlbmRzIHt9LCBUIGV4dGVuZHMge30+KG9iajogVCwgZjogT2JqTW9ycGhpc208VCwgeyBrOiBrZXlvZiBSOyB2OiBSW2tleW9mIFJdIH0+KTogUiA9PiB7XG4gIGNvbnN0IHIgPSB7fSBhcyBSO1xuICBlYWNoKG9iaiwgKHgsIGkpID0+IHtcbiAgICBjb25zdCB0dXBsZSA9IGYoeCwgaSk7XG4gICAgclt0dXBsZS5rXSA9IHR1cGxlLnY7XG4gIH0pO1xuICByZXR1cm4gcjtcbn07XG5cbmNvbnN0IG9iakFjYyA9IDxUIGV4dGVuZHMge30+KHI6IFQpID0+ICh4OiBUW2tleW9mIFRdLCBpOiBrZXlvZiBUKTogdm9pZCA9PiB7XG4gIHJbaV0gPSB4O1xufTtcblxuY29uc3QgaW50ZXJuYWxGaWx0ZXIgPSA8VCBleHRlbmRzIHt9PihvYmo6IFQsIHByZWQ6IE9ialByZWRpY2F0ZTxUPiwgb25UcnVlOiBPYmpDYWxsYmFjazxUPiwgb25GYWxzZTogT2JqQ2FsbGJhY2s8VD4pID0+IHtcbiAgZWFjaChvYmosICh4LCBpKSA9PiB7XG4gICAgKHByZWQoeCwgaSkgPyBvblRydWUgOiBvbkZhbHNlKSh4LCBpKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgYmlmaWx0ZXIgPSA8VCBleHRlbmRzIHt9PihvYmo6IFQsIHByZWQ6IE9ialByZWRpY2F0ZTxUPik6IHsgdDogUmVjb3JkPHN0cmluZywgVFtrZXlvZiBUXT47IGY6IFJlY29yZDxzdHJpbmcsIFRba2V5b2YgVF0+IH0gPT4ge1xuICBjb25zdCB0OiBSZWNvcmQ8c3RyaW5nLCBUW2tleW9mIFRdPiA9IHt9O1xuICBjb25zdCBmOiBSZWNvcmQ8c3RyaW5nLCBUW2tleW9mIFRdPiA9IHt9O1xuICBpbnRlcm5hbEZpbHRlcihvYmosIHByZWQsIG9iakFjYyh0KSwgb2JqQWNjKGYpKTtcbiAgcmV0dXJuIHsgdCwgZiB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbHRlcjoge1xuICA8VCBleHRlbmRzIHt9LCBVIGV4dGVuZHMgVFtrZXlvZiBUXT4ob2JqOiBULCBwcmVkOiBPYmpHdWFyZFByZWRpY2F0ZTxULCBVPik6IFJlY29yZDxzdHJpbmcsIFU+O1xuICA8VCBleHRlbmRzIHt9PihvYmo6IFQsIHByZWQ6IE9ialByZWRpY2F0ZTxUPik6IFJlY29yZDxzdHJpbmcsIFRba2V5b2YgVF0+O1xufSA9IDxUIGV4dGVuZHMge30+KG9iajogVCwgcHJlZDogT2JqUHJlZGljYXRlPFQ+KTogUmVjb3JkPHN0cmluZywgVFtrZXlvZiBUXT4gPT4ge1xuICBjb25zdCB0OiBSZWNvcmQ8c3RyaW5nLCBUW2tleW9mIFRdPiA9IHt9O1xuICBpbnRlcm5hbEZpbHRlcihvYmosIHByZWQsIG9iakFjYyh0KSwgRnVuLm5vb3ApO1xuICByZXR1cm4gdDtcbn07XG5cbmV4cG9ydCBjb25zdCBtYXBUb0FycmF5ID0gPFQgZXh0ZW5kcyB7fSwgUj4ob2JqOiBULCBmOiBPYmpNb3JwaGlzbTxULCBSPik6IFJbXSA9PiB7XG4gIGNvbnN0IHI6IFJbXSA9IFtdO1xuICBlYWNoKG9iaiwgKHZhbHVlLCBuYW1lKSA9PiB7XG4gICAgci5wdXNoKGYodmFsdWUsIG5hbWUpKTtcbiAgfSk7XG4gIHJldHVybiByO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmQgPSA8VCBleHRlbmRzIHt9PihvYmo6IFQsIHByZWQ6ICh2YWx1ZTogVFtrZXlvZiBUXSwga2V5OiBPYmpLZXlzPFQ+LCBvYmo6IFQpID0+IGJvb2xlYW4pOiBPcHRpb25hbDxUW2tleW9mIFRdPiA9PiB7XG4gIGNvbnN0IHByb3BzID0ga2V5cyhvYmopIGFzIEFycmF5PE9iaktleXM8VD4+O1xuICBmb3IgKGxldCBrID0gMCwgbGVuID0gcHJvcHMubGVuZ3RoOyBrIDwgbGVuOyBrKyspIHtcbiAgICBjb25zdCBpID0gcHJvcHNba107XG4gICAgY29uc3QgeCA9IG9ialtpXTtcbiAgICBpZiAocHJlZCh4LCBpLCBvYmopKSB7XG4gICAgICByZXR1cm4gT3B0aW9uYWwuc29tZSh4KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIE9wdGlvbmFsLm5vbmUoKTtcbn07XG5cbmV4cG9ydCBjb25zdCB2YWx1ZXMgPSA8VCBleHRlbmRzIHt9PihvYmo6IFQpOiBBcnJheTxUW2tleW9mIFRdPiA9PiB7XG4gIHJldHVybiBtYXBUb0FycmF5KG9iaiwgRnVuLmlkZW50aXR5KTtcbn07XG5cbmV4cG9ydCBjb25zdCBzaXplID0gKG9iajoge30pOiBudW1iZXIgPT4ge1xuICByZXR1cm4ga2V5cyhvYmopLmxlbmd0aDtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXQgPSA8VCBleHRlbmRzIHt9LCBLIGV4dGVuZHMga2V5b2YgVD4ob2JqOiBULCBrZXk6IEspOiBPcHRpb25hbDxOb25OdWxsYWJsZTxUW0tdPj4gPT4ge1xuICByZXR1cm4gaGFzKG9iaiwga2V5KSA/IE9wdGlvbmFsLmZyb20ob2JqW2tleV0gYXMgTm9uTnVsbGFibGU8VFtLXT4pIDogT3B0aW9uYWwubm9uZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGhhcyA9IDxUIGV4dGVuZHMge30sIEsgZXh0ZW5kcyBrZXlvZiBUPihvYmo6IFQsIGtleTogSyk6IGJvb2xlYW4gPT5cbiAgaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSk7XG5cbmV4cG9ydCBjb25zdCBoYXNOb25OdWxsYWJsZUtleSA9IDxUIGV4dGVuZHMge30sIEsgZXh0ZW5kcyBrZXlvZiBUPihvYmo6IFQsIGtleTogSyk6IG9iaiBpcyBUICYgUmVjb3JkPEssIE5vbk51bGxhYmxlPFRbS10+PiA9PlxuICBoYXMob2JqLCBrZXkpICYmIG9ialtrZXldICE9PSB1bmRlZmluZWQgJiYgb2JqW2tleV0gIT09IG51bGw7XG5cbmV4cG9ydCBjb25zdCBpc0VtcHR5ID0gKHI6IFJlY29yZDxhbnksIGFueT4pOiByIGlzIHt9ID0+IHtcbiAgZm9yIChjb25zdCB4IGluIHIpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChyLCB4KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmV4cG9ydCBjb25zdCBlcXVhbCA9IDxUPihhMTogUmVjb3JkPHN0cmluZywgVD4sIGEyOiBSZWNvcmQ8c3RyaW5nLCBUPiwgZXE6IEVxLkVxPFQ+ID0gRXEuZXFBbnkpOiBib29sZWFuID0+XG4gIEVxLmVxUmVjb3JkKGVxKS5lcShhMSwgYTIpO1xuIiwiaW1wb3J0ICogYXMgVHlwZSBmcm9tICcuL1R5cGUnO1xuXG4vKipcbiAqIFRoZSBgT3B0aW9uYWxgIHR5cGUgcmVwcmVzZW50cyBhIHZhbHVlIChvZiBhbnkgdHlwZSkgdGhhdCBwb3RlbnRpYWxseSBkb2VzXG4gKiBub3QgZXhpc3QuIEFueSBgT3B0aW9uYWw8VD5gIGNhbiBlaXRoZXIgYmUgYSBgU29tZTxUPmAgKGluIHdoaWNoIGNhc2UgdGhlXG4gKiB2YWx1ZSBkb2VzIGV4aXN0KSBvciBhIGBOb25lYCAoaW4gd2hpY2ggY2FzZSB0aGUgdmFsdWUgZG9lcyBub3QgZXhpc3QpLiBUaGlzXG4gKiBtb2R1bGUgZGVmaW5lcyBhIHdob2xlIGxvdCBvZiBGUC1pbnNwaXJlZCB1dGlsaXR5IGZ1bmN0aW9ucyBmb3IgZGVhbGluZyB3aXRoXG4gKiBgT3B0aW9uYWxgIG9iamVjdHMuXG4gKlxuICogQ29tcGFyaXNvbiB3aXRoIG51bGwgb3IgdW5kZWZpbmVkOlxuICogLSBXZSBkb24ndCBnZXQgZmFuY3kgbnVsbCBjb2FsZXNjaW5nIG9wZXJhdG9ycyB3aXRoIGBPcHRpb25hbGBcbiAqIC0gV2UgZG8gZ2V0IGZhbmN5IGhlbHBlciBmdW5jdGlvbnMgd2l0aCBgT3B0aW9uYWxgXG4gKiAtIGBPcHRpb25hbGAgc3VwcG9ydCBuZXN0aW5nLCBhbmQgYWxsb3cgZm9yIHRoZSB0eXBlIHRvIHN0aWxsIGJlIG51bGxhYmxlIChvclxuICogYW5vdGhlciBgT3B0aW9uYWxgKVxuICogLSBUaGVyZSBpcyBubyBvcHRpb24gdG8gdHVybiBvZmYgc3RyaWN0LW9wdGlvbmFsLWNoZWNrcyBsaWtlIHRoZXJlIGlzIGZvclxuICogc3RyaWN0LW51bGwtY2hlY2tzXG4gKi9cbmV4cG9ydCBjbGFzcyBPcHRpb25hbDxUPiB7XG4gIHByaXZhdGUgcmVhZG9ubHkgdGFnOiBib29sZWFuO1xuICBwcml2YXRlIHJlYWRvbmx5IHZhbHVlPzogVDtcblxuICAvLyBTbmVha3kgb3B0aW1pc2F0aW9uOiBldmVyeSBpbnN0YW5jZSBvZiBPcHRpb25hbC5ub25lIGlzIGlkZW50aWNhbCwgc28ganVzdFxuICAvLyByZXVzZSB0aGUgc2FtZSBvYmplY3RcbiAgcHJpdmF0ZSBzdGF0aWMgc2luZ2xldG9uTm9uZSA9IG5ldyBPcHRpb25hbDxhbnk+KGZhbHNlKTtcblxuICAvLyBUaGUgaW50ZXJuYWwgcmVwcmVzZW50YXRpb24gaGFzIGEgYHRhZ2AgYW5kIGEgYHZhbHVlYCwgYnV0IGJvdGggYXJlXG4gIC8vIHByaXZhdGU6IGFibGUgdG8gYmUgY29uc29sZS5sb2dnZWQsIGJ1dCBub3QgYWJsZSB0byBiZSBhY2Nlc3NlZCBieSBjb2RlXG4gIHByaXZhdGUgY29uc3RydWN0b3IodGFnOiBib29sZWFuLCB2YWx1ZT86IFQpIHtcbiAgICB0aGlzLnRhZyA9IHRhZztcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICAvLyAtLS0gSWRlbnRpdGllcyAtLS1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBgT3B0aW9uYWw8VD5gIHRoYXQgKipkb2VzKiogY29udGFpbiBhIHZhbHVlLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBzb21lPFQ+KHRoaXM6IHZvaWQsIHZhbHVlOiBUKTogT3B0aW9uYWw8VD4ge1xuICAgIHJldHVybiBuZXcgT3B0aW9uYWwodHJ1ZSwgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBgT3B0aW9uYWw8VD5gIHRoYXQgKipkb2VzIG5vdCoqIGNvbnRhaW4gYSB2YWx1ZS4gYFRgIGNhbiBiZVxuICAgKiBhbnkgdHlwZSBiZWNhdXNlIHdlIGRvbid0IGFjdHVhbGx5IGhhdmUgYSBgVGAuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIG5vbmU8VCA9IG5ldmVyPih0aGlzOiB2b2lkKTogT3B0aW9uYWw8VD4ge1xuICAgIHJldHVybiBPcHRpb25hbC5zaW5nbGV0b25Ob25lO1xuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm0gYSB0cmFuc2Zvcm0gb24gYW4gYE9wdGlvbmFsYCB0eXBlLiBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpc1xuICAgKiBgT3B0aW9uYWxgIGNvbnRhaW5zIGEgdmFsdWUgb3Igbm90LCBgZm9sZGAgd2lsbCByZXR1cm4gYSB2YWx1ZSBvZiB0eXBlIGBVYC5cbiAgICogSWYgdGhpcyBgT3B0aW9uYWxgIGRvZXMgbm90IGNvbnRhaW4gYSB2YWx1ZSwgdGhlIGBVYCB3aWxsIGJlIGNyZWF0ZWQgYnlcbiAgICogY2FsbGluZyBgb25Ob25lYC4gSWYgdGhpcyBgT3B0aW9uYWxgIGRvZXMgY29udGFpbiBhIHZhbHVlLCB0aGUgYFVgIHdpbGwgYmVcbiAgICogY3JlYXRlZCBieSBjYWxsaW5nIGBvblNvbWVgLlxuICAgKlxuICAgKiBGb3IgdGhlIEZQIGVudGh1c2lhc3RzIGluIHRoZSByb29tLCB0aGlzIGZ1bmN0aW9uOlxuICAgKiAxLiBDb3VsZCBiZSB1c2VkIHRvIGltcGxlbWVudCBhbGwgb2YgdGhlIGZ1bmN0aW9ucyBiZWxvd1xuICAgKiAyLiBGb3JtcyBhIGNhdGFtb3JwaGlzbVxuICAgKi9cbiAgcHVibGljIGZvbGQ8VT4ob25Ob25lOiAoKSA9PiBVLCBvblNvbWU6ICh2YWx1ZTogVCkgPT4gVSk6IFUge1xuICAgIGlmICh0aGlzLnRhZykge1xuICAgICAgcmV0dXJuIG9uU29tZSh0aGlzLnZhbHVlIGFzIFQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb25Ob25lKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBpZiB0aGlzIGBPcHRpb25hbGAgb2JqZWN0IGNvbnRhaW5zIGEgdmFsdWUuXG4gICAqL1xuICBwdWJsaWMgaXNTb21lKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnRhZztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgdGhpcyBgT3B0aW9uYWxgIG9iamVjdCAqKmRvZXMgbm90KiogY29udGFpbiBhIHZhbHVlLlxuICAgKi9cbiAgcHVibGljIGlzTm9uZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMudGFnO1xuICB9XG5cbiAgLy8gLS0tIEZ1bmN0b3IgKG5hbWUgc3RvbGVuIGZyb20gSGFza2VsbCAvIG1hdGhzKSAtLS1cblxuICAvKipcbiAgICogUGVyZm9ybSBhIHRyYW5zZm9ybSBvbiBhbiBgT3B0aW9uYWxgIG9iamVjdCwgKippZioqIHRoZXJlIGlzIGEgdmFsdWUuIElmXG4gICAqIHlvdSBwcm92aWRlIGEgZnVuY3Rpb24gdG8gdHVybiBhIFQgaW50byBhIFUsIHRoaXMgaXMgdGhlIGZ1bmN0aW9uIHlvdSB1c2VcbiAgICogdG8gdHVybiBhbiBgT3B0aW9uYWw8VD5gIGludG8gYW4gYE9wdGlvbmFsPFU+YC4gSWYgdGhpcyAqKmRvZXMqKiBjb250YWluXG4gICAqIGEgdmFsdWUgdGhlbiB0aGUgb3V0cHV0IHdpbGwgYWxzbyBjb250YWluIGEgdmFsdWUgKHRoYXQgdmFsdWUgYmVpbmcgdGhlXG4gICAqIG91dHB1dCBvZiBgbWFwcGVyKHRoaXMudmFsdWUpYCksIGFuZCBpZiB0aGlzICoqZG9lcyBub3QqKiBjb250YWluIGEgdmFsdWVcbiAgICogdGhlbiBuZWl0aGVyIHdpbGwgdGhlIG91dHB1dC5cbiAgICovXG4gIHB1YmxpYyBtYXA8VT4obWFwcGVyOiAodmFsdWU6IFQpID0+IFUpOiBPcHRpb25hbDxVPiB7XG4gICAgaWYgKHRoaXMudGFnKSB7XG4gICAgICByZXR1cm4gT3B0aW9uYWwuc29tZShtYXBwZXIodGhpcy52YWx1ZSBhcyBUKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBPcHRpb25hbC5ub25lKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tIE1vbmFkIChuYW1lIHN0b2xlbiBmcm9tIEhhc2tlbGwgLyBtYXRocykgLS0tXG5cbiAgLyoqXG4gICAqIFBlcmZvcm0gYSB0cmFuc2Zvcm0gb24gYW4gYE9wdGlvbmFsYCBvYmplY3QsICoqaWYqKiB0aGVyZSBpcyBhIHZhbHVlLlxuICAgKiBVbmxpa2UgYG1hcGAsIGhlcmUgdGhlIHRyYW5zZm9ybSBpdHNlbGYgYWxzbyByZXR1cm5zIGFuIGBPcHRpb25hbGAuXG4gICAqL1xuICBwdWJsaWMgYmluZDxVPihiaW5kZXI6ICh2YWx1ZTogVCkgPT4gT3B0aW9uYWw8VT4pOiBPcHRpb25hbDxVPiB7XG4gICAgaWYgKHRoaXMudGFnKSB7XG4gICAgICByZXR1cm4gYmluZGVyKHRoaXMudmFsdWUgYXMgVCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBPcHRpb25hbC5ub25lKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tIFRyYXZlcnNhYmxlIChuYW1lIHN0b2xlbiBmcm9tIEhhc2tlbGwgLyBtYXRocykgLS0tXG5cbiAgLyoqXG4gICAqIEZvciBhIGdpdmVuIHByZWRpY2F0ZSwgdGhpcyBmdW5jdGlvbiBmaW5kcyBvdXQgaWYgdGhlcmUgKipleGlzdHMqKiBhIHZhbHVlXG4gICAqIGluc2lkZSB0aGlzIGBPcHRpb25hbGAgb2JqZWN0IHRoYXQgbWVldHMgdGhlIHByZWRpY2F0ZS4gSW4gcHJhY3RpY2UsIHRoaXNcbiAgICogbWVhbnMgdGhhdCBmb3IgYE9wdGlvbmFsYHMgdGhhdCBkbyBub3QgY29udGFpbiBhIHZhbHVlIGl0IHJldHVybnMgZmFsc2UgKGFzXG4gICAqIG5vIHByZWRpY2F0ZS1tZWV0aW5nIHZhbHVlIGV4aXN0cykuXG4gICAqL1xuICBwdWJsaWMgZXhpc3RzKHByZWRpY2F0ZTogKHZhbHVlOiBUKSA9PiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudGFnICYmIHByZWRpY2F0ZSh0aGlzLnZhbHVlIGFzIFQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvciBhIGdpdmVuIHByZWRpY2F0ZSwgdGhpcyBmdW5jdGlvbiBmaW5kcyBvdXQgaWYgKiphbGwqKiB0aGUgdmFsdWVzIGluc2lkZVxuICAgKiB0aGlzIGBPcHRpb25hbGAgb2JqZWN0IG1lZXQgdGhlIHByZWRpY2F0ZS4gSW4gcHJhY3RpY2UsIHRoaXMgbWVhbnMgdGhhdFxuICAgKiBmb3IgYE9wdGlvbmFsYHMgdGhhdCBkbyBub3QgY29udGFpbiBhIHZhbHVlIGl0IHJldHVybnMgdHJ1ZSAoYXMgYWxsIDBcbiAgICogb2JqZWN0cyBkbyBtZWV0IHRoZSBwcmVkaWNhdGUpLlxuICAgKi9cbiAgcHVibGljIGZvcmFsbChwcmVkaWNhdGU6ICh2YWx1ZTogVCkgPT4gYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy50YWcgfHwgcHJlZGljYXRlKHRoaXMudmFsdWUgYXMgVCk7XG4gIH1cblxuICAvKipcbiAgICogRm9yIGEgZ2l2ZW4gcHJlZGljYXRlLCBjcmVhdGUgYSBuZXcgYE9wdGlvbmFsYCBvYmplY3QgdGhhdCB3aWxsIHJldGFpblxuICAgKiBhbGwgdGhlIHZhbHVlcyBpbnNpZGUgdGhlIG9sZCBgT3B0aW9uYWxgIG9iamVjdCB0aGF0IG1lZXQgdGhlIHByZWRpY2F0ZS5cbiAgICogSW4gcHJhY3RpY2UsIHRoZSBgT3B0aW9uYWxgIG9iamVjdCBjb250YWlucyBlaXRoZXIgMCBvciAxIG9iamVjdHMsIGFuZFxuICAgKiB0aGUgb3V0cHV0IHdpbGwga2VlcCB0aGUgKHNpbmdsZSkgaW5wdXQgb2JqZWN0IChpZiBpdCBleGlzdHMpIGFzIGxvbmcgYXNcbiAgICogaXQgcGFzc2VzIHRoZSBwcmVkaWNhdGUuXG4gICAqL1xuICBwdWJsaWMgZmlsdGVyPFUgZXh0ZW5kcyBUPihwcmVkaWNhdGU6ICh2YWx1ZTogVCkgPT4gdmFsdWUgaXMgVSk6IE9wdGlvbmFsPFU+O1xuICBwdWJsaWMgZmlsdGVyKHByZWRpY2F0ZTogKHZhbHVlOiBUKSA9PiBib29sZWFuKTogT3B0aW9uYWw8VD47XG4gIHB1YmxpYyBmaWx0ZXIocHJlZGljYXRlOiAodmFsdWU6IFQpID0+IGJvb2xlYW4pOiBPcHRpb25hbDxUPiB7XG4gICAgaWYgKCF0aGlzLnRhZyB8fCBwcmVkaWNhdGUodGhpcy52YWx1ZSBhcyBUKSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBPcHRpb25hbC5ub25lKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tIEdldHRlcnMgLS0tXG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdmFsdWUgb3V0IG9mIHRoZSBpbnNpZGUgb2YgdGhlIGBPcHRpb25hbGAgb2JqZWN0LCB1c2luZyBhIGRlZmF1bHRcbiAgICogYHJlcGxhY2VtZW50YCB2YWx1ZSBpZiB0aGUgcHJvdmlkZWQgYE9wdGlvbmFsYCBvYmplY3QgZG9lcyBub3QgY29udGFpbiBhXG4gICAqIHZhbHVlLlxuICAgKi9cbiAgcHVibGljIGdldE9yPFUgPSBUPihyZXBsYWNlbWVudDogVSk6IFQgfCBVIHtcbiAgICByZXR1cm4gdGhpcy50YWcgPyB0aGlzLnZhbHVlIGFzIFQgOiByZXBsYWNlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHZhbHVlIG91dCBvZiB0aGUgaW5zaWRlIG9mIHRoZSBgT3B0aW9uYWxgIG9iamVjdCwgdXNpbmcgYSBkZWZhdWx0XG4gICAqIGByZXBsYWNlbWVudGAgdmFsdWUgaWYgdGhlIHByb3ZpZGVkIGBPcHRpb25hbGAgb2JqZWN0IGRvZXMgbm90IGNvbnRhaW4gYVxuICAgKiB2YWx1ZS4gIFVubGlrZSBgZ2V0T3JgLCBpbiB0aGlzIG1ldGhvZCB0aGUgYHJlcGxhY2VtZW50YCBvYmplY3QgaXMgYWxzb1xuICAgKiBgT3B0aW9uYWxgIC0gbWVhbmluZyB0aGF0IHRoaXMgbWV0aG9kIHdpbGwgYWx3YXlzIHJldHVybiBhbiBgT3B0aW9uYWxgLlxuICAgKi9cbiAgcHVibGljIG9yPFUgPSBUPihyZXBsYWNlbWVudDogT3B0aW9uYWw8VT4pOiBPcHRpb25hbDxUIHwgVT4ge1xuICAgIHJldHVybiB0aGlzLnRhZyA/IHRoaXMgOiByZXBsYWNlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHZhbHVlIG91dCBvZiB0aGUgaW5zaWRlIG9mIHRoZSBgT3B0aW9uYWxgIG9iamVjdCwgdXNpbmcgYSBkZWZhdWx0XG4gICAqIGByZXBsYWNlbWVudGAgdmFsdWUgaWYgdGhlIHByb3ZpZGVkIGBPcHRpb25hbGAgb2JqZWN0IGRvZXMgbm90IGNvbnRhaW4gYVxuICAgKiB2YWx1ZS4gVW5saWtlIGBnZXRPcmAsIGluIHRoaXMgbWV0aG9kIHRoZSBgcmVwbGFjZW1lbnRgIHZhbHVlIGlzXG4gICAqIFwidGh1bmtlZFwiIC0gdGhhdCBpcyB0byBzYXkgdGhhdCB5b3UgZG9uJ3QgcGFzcyBhIHZhbHVlIHRvIGBnZXRPclRodW5rYCwgeW91XG4gICAqIHBhc3MgYSBmdW5jdGlvbiB3aGljaCAoaWYgY2FsbGVkKSB3aWxsICoqcmV0dXJuKiogdGhlIGB2YWx1ZWAgeW91IHdhbnQgdG9cbiAgICogdXNlLlxuICAgKi9cbiAgcHVibGljIGdldE9yVGh1bms8VSA9IFQ+KHRodW5rOiAoKSA9PiBVKTogVCB8IFUge1xuICAgIHJldHVybiB0aGlzLnRhZyA/IHRoaXMudmFsdWUgYXMgVCA6IHRodW5rKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB2YWx1ZSBvdXQgb2YgdGhlIGluc2lkZSBvZiB0aGUgYE9wdGlvbmFsYCBvYmplY3QsIHVzaW5nIGEgZGVmYXVsdFxuICAgKiBgcmVwbGFjZW1lbnRgIHZhbHVlIGlmIHRoZSBwcm92aWRlZCBPcHRpb25hbCBvYmplY3QgZG9lcyBub3QgY29udGFpbiBhXG4gICAqIHZhbHVlLlxuICAgKlxuICAgKiBVbmxpa2UgYG9yYCwgaW4gdGhpcyBtZXRob2QgdGhlIGByZXBsYWNlbWVudGAgdmFsdWUgaXMgXCJ0aHVua2VkXCIgLSB0aGF0IGlzXG4gICAqIHRvIHNheSB0aGF0IHlvdSBkb24ndCBwYXNzIGEgdmFsdWUgdG8gYG9yVGh1bmtgLCB5b3UgcGFzcyBhIGZ1bmN0aW9uIHdoaWNoXG4gICAqIChpZiBjYWxsZWQpIHdpbGwgKipyZXR1cm4qKiB0aGUgYHZhbHVlYCB5b3Ugd2FudCB0byB1c2UuXG4gICAqXG4gICAqIFVubGlrZSBgZ2V0T3JUaHVua2AsIGluIHRoaXMgbWV0aG9kIHRoZSBgcmVwbGFjZW1lbnRgIHZhbHVlIGlzIGFsc29cbiAgICogYE9wdGlvbmFsYCwgbWVhbmluZyB0aGF0IHRoaXMgbWV0aG9kIHdpbGwgYWx3YXlzIHJldHVybiBhbiBgT3B0aW9uYWxgLlxuICAgKi9cbiAgcHVibGljIG9yVGh1bms8VSA9IFQ+KHRodW5rOiAoKSA9PiBPcHRpb25hbDxVPik6IE9wdGlvbmFsPFQgfCBVPiB7XG4gICAgcmV0dXJuIHRoaXMudGFnID8gdGhpcyA6IHRodW5rKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB2YWx1ZSBvdXQgb2YgdGhlIGluc2lkZSBvZiB0aGUgYE9wdGlvbmFsYCBvYmplY3QsIHRocm93aW5nIGFuXG4gICAqIGV4Y2VwdGlvbiBpZiB0aGUgcHJvdmlkZWQgYE9wdGlvbmFsYCBvYmplY3QgZG9lcyBub3QgY29udGFpbiBhIHZhbHVlLlxuICAgKlxuICAgKiBXQVJOSU5HOlxuICAgKiBZb3Ugc2hvdWxkIG9ubHkgYmUgdXNpbmcgdGhpcyBmdW5jdGlvbiBpZiB5b3Uga25vdyB0aGF0IHRoZSBgT3B0aW9uYWxgXG4gICAqIG9iamVjdCAqKmlzIG5vdCoqIGVtcHR5IChvdGhlcndpc2UgeW91J3JlIHRocm93aW5nIGV4Y2VwdGlvbnMgaW4gcHJvZHVjdGlvblxuICAgKiBjb2RlLCB3aGljaCBpcyBiYWQpLlxuICAgKlxuICAgKiBJbiB0ZXN0cyB0aGlzIGlzIG1vcmUgYWNjZXB0YWJsZS5cbiAgICpcbiAgICogUHJlZmVyIG90aGVyIG1ldGhvZHMgdG8gdGhpcywgc3VjaCBhcyBgLmVhY2hgLlxuICAgKi9cbiAgcHVibGljIGdldE9yRGllKG1lc3NhZ2U/OiBzdHJpbmcpOiBUIHtcbiAgICBpZiAoIXRoaXMudGFnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSA/PyAnQ2FsbGVkIGdldE9yRGllIG9uIE5vbmUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWUgYXMgVDtcbiAgICB9XG4gIH1cblxuICAvLyAtLS0gSW50ZXJvcCB3aXRoIG51bGwgYW5kIHVuZGVmaW5lZCAtLS1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBgT3B0aW9uYWxgIHZhbHVlIGZyb20gYSBudWxsYWJsZSAob3IgdW5kZWZpbmVkLWFibGUpIGlucHV0LlxuICAgKiBOdWxsLCBvciB1bmRlZmluZWQsIGlzIGNvbnZlcnRlZCB0byBgTm9uZWAsIGFuZCBhbnl0aGluZyBlbHNlIGlzIGNvbnZlcnRlZFxuICAgKiB0byBgU29tZWAuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGZyb208VD4odGhpczogdm9pZCwgdmFsdWU6IFQgfCBudWxsIHwgdW5kZWZpbmVkKTogT3B0aW9uYWw8Tm9uTnVsbGFibGU8VD4+IHtcbiAgICByZXR1cm4gVHlwZS5pc05vbk51bGxhYmxlKHZhbHVlKSA/IE9wdGlvbmFsLnNvbWUodmFsdWUpIDogT3B0aW9uYWwubm9uZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGFuIGBPcHRpb25hbGAgdG8gYSBudWxsYWJsZSB0eXBlLCBieSBnZXR0aW5nIHRoZSB2YWx1ZSBpZiBpdFxuICAgKiBleGlzdHMsIG9yIHJldHVybmluZyBgbnVsbGAgaWYgaXQgZG9lcyBub3QuXG4gICAqL1xuICBwdWJsaWMgZ2V0T3JOdWxsKCk6IFQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy50YWcgPyB0aGlzLnZhbHVlIGFzIFQgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGFuIGBPcHRpb25hbGAgdG8gYW4gdW5kZWZpbmVkLWFibGUgdHlwZSwgYnkgZ2V0dGluZyB0aGUgdmFsdWUgaWZcbiAgICogaXQgZXhpc3RzLCBvciByZXR1cm5pbmcgYHVuZGVmaW5lZGAgaWYgaXQgZG9lcyBub3QuXG4gICAqL1xuICBwdWJsaWMgZ2V0T3JVbmRlZmluZWQoKTogVCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cblxuICAvLyAtLS0gVXRpbGl0aWVzIC0tLVxuXG4gIC8qKlxuICAgKiBJZiB0aGUgYE9wdGlvbmFsYCBjb250YWlucyBhIHZhbHVlLCBwZXJmb3JtIGFuIGFjdGlvbiBvbiB0aGF0IHZhbHVlLlxuICAgKiBVbmxpa2UgdGhlIHJlc3Qgb2YgdGhlIG1ldGhvZHMgb24gdGhpcyB0eXBlLCBgLmVhY2hgIGhhcyBzaWRlLWVmZmVjdHMuIElmXG4gICAqIHlvdSB3YW50IHRvIHRyYW5zZm9ybSBhbiBgT3B0aW9uYWw8VD5gICoqaW50byoqIHNvbWV0aGluZywgdGhlbiB0aGlzIGlzIG5vdFxuICAgKiB0aGUgbWV0aG9kIGZvciB5b3UuIElmIHlvdSB3YW50IHRvIHVzZSBhbiBgT3B0aW9uYWw8VD5gIHRvICoqZG8qKlxuICAgKiBzb21ldGhpbmcsIHRoZW4gdGhpcyBpcyB0aGUgbWV0aG9kIGZvciB5b3UgLSBwcm92aWRlZCB5b3UncmUgb2theSB3aXRoIG5vdFxuICAgKiBkb2luZyBhbnl0aGluZyBpbiB0aGUgY2FzZSB3aGVyZSB0aGUgYE9wdGlvbmFsYCBkb2Vzbid0IGhhdmUgYSB2YWx1ZSBpbnNpZGVcbiAgICogaXQuIElmIHlvdSdyZSBub3Qgc3VyZSB3aGV0aGVyIHlvdXIgdXNlLWNhc2UgZml0cyBpbnRvIHRyYW5zZm9ybWluZ1xuICAgKiAqKmludG8qKiBzb21ldGhpbmcgb3IgKipkb2luZyoqIHNvbWV0aGluZywgY2hlY2sgd2hldGhlciBpdCBoYXMgYSByZXR1cm5cbiAgICogdmFsdWUuIElmIGl0IGRvZXMsIHlvdSBzaG91bGQgYmUgcGVyZm9ybWluZyBhIHRyYW5zZm9ybS5cbiAgICovXG4gIHB1YmxpYyBlYWNoKHdvcmtlcjogKHZhbHVlOiBUKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudGFnKSB7XG4gICAgICB3b3JrZXIodGhpcy52YWx1ZSBhcyBUKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVHVybiB0aGUgYE9wdGlvbmFsYCBvYmplY3QgaW50byBhbiBhcnJheSB0aGF0IGNvbnRhaW5zIGFsbCBvZiB0aGUgdmFsdWVzXG4gICAqIHN0b3JlZCBpbnNpZGUgdGhlIGBPcHRpb25hbGAuIEluIHByYWN0aWNlLCB0aGlzIG1lYW5zIHRoZSBvdXRwdXQgd2lsbCBoYXZlXG4gICAqIGVpdGhlciAwIG9yIDEgZWxlbWVudHMuXG4gICAqL1xuICBwdWJsaWMgdG9BcnJheSgpOiBUW10ge1xuICAgIHJldHVybiB0aGlzLnRhZyA/IFsgdGhpcy52YWx1ZSBhcyBUIF0gOiBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUdXJuIHRoZSBgT3B0aW9uYWxgIG9iamVjdCBpbnRvIGEgc3RyaW5nIGZvciBkZWJ1Z2dpbmcgb3IgcHJpbnRpbmcuIE5vdFxuICAgKiByZWNvbW1lbmRlZCBmb3IgcHJvZHVjdGlvbiBjb2RlLCBidXQgZ29vZCBmb3IgZGVidWdnaW5nLiBBbHNvIG5vdGUgdGhhdFxuICAgKiB0aGVzZSBkYXlzIGFuIGBPcHRpb25hbGAgb2JqZWN0IGNhbiBiZSBsb2dnZWQgdG8gdGhlIGNvbnNvbGUgZGlyZWN0bHksIGFuZFxuICAgKiBpdHMgaW5uZXIgdmFsdWUgKGlmIGl0IGV4aXN0cykgd2lsbCBiZSB2aXNpYmxlLlxuICAgKi9cbiAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudGFnID8gYHNvbWUoJHt0aGlzLnZhbHVlfSlgIDogJ25vbmUoKSc7XG4gIH1cbn1cbiIsImltcG9ydCB7IEdsb2JhbCB9IGZyb20gJy4vR2xvYmFsJztcblxuLyoqIHBhdGggOjogKFtTdHJpbmddLCBKc09iaj8pIC0+IEpzT2JqICovXG5leHBvcnQgY29uc3QgcGF0aCA9IDxUPihwYXJ0czogc3RyaW5nW10sIHNjb3BlPzoge30pOiBUIHwgdW5kZWZpbmVkID0+IHtcbiAgbGV0IG8gPSBzY29wZSAhPT0gdW5kZWZpbmVkICYmIHNjb3BlICE9PSBudWxsID8gc2NvcGUgOiBHbG9iYWw7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoICYmIG8gIT09IHVuZGVmaW5lZCAmJiBvICE9PSBudWxsOyArK2kpIHtcbiAgICBvID0gb1twYXJ0c1tpXV07XG4gIH1cbiAgcmV0dXJuIG87XG59O1xuXG4vKiogcmVzb2x2ZSA6OiAoU3RyaW5nLCBKc09iaj8pIC0+IEpzT2JqICovXG5leHBvcnQgY29uc3QgcmVzb2x2ZSA9IDxUPihwOiBzdHJpbmcsIHNjb3BlPzoge30pOiBUIHwgdW5kZWZpbmVkID0+IHtcbiAgY29uc3QgcGFydHMgPSBwLnNwbGl0KCcuJyk7XG4gIHJldHVybiBwYXRoKHBhcnRzLCBzY29wZSk7XG59O1xuXG4vKiogc3RlcCA6OiAoSnNPYmosIFN0cmluZykgLT4gSnNPYmogKi9cbmV4cG9ydCBjb25zdCBzdGVwID0gPFQgZXh0ZW5kcyB7fSwgSyBleHRlbmRzIGtleW9mIFQ+KG86IFQsIHBhcnQ6IEspOiBUW0tdID0+IHtcbiAgaWYgKG9bcGFydF0gPT09IHVuZGVmaW5lZCB8fCBvW3BhcnRdID09PSBudWxsKSB7XG4gICAgb1twYXJ0XSA9IHt9IGFzIFRbS107XG4gIH1cbiAgcmV0dXJuIG9bcGFydF07XG59O1xuXG4vKiogZm9yZ2UgOjogKFtTdHJpbmddLCBKc09iaj8pIC0+IEpzT2JqICovXG5leHBvcnQgY29uc3QgZm9yZ2UgPSA8VCBleHRlbmRzIHN0cmluZ1tdPihwYXJ0czogVCwgdGFyZ2V0Pzoge30pOiB7IFsgSyBpbiBUW251bWJlcl1dOiB7fX0gPT4ge1xuICBsZXQgbyA9IHRhcmdldCAhPT0gdW5kZWZpbmVkID8gdGFyZ2V0IDogR2xvYmFsO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgKytpKSB7XG4gICAgbyA9IHN0ZXAobywgcGFydHNbaV0pO1xuICB9XG4gIHJldHVybiBvO1xufTtcblxuLyoqIG5hbWVzcGFjZSA6OiAoU3RyaW5nLCBKc09iaj8pIC0+IEpzT2JqICovXG5leHBvcnQgY29uc3QgbmFtZXNwYWNlID0gKG5hbWU6IHN0cmluZywgdGFyZ2V0Pzoge30pOiB7IFtrZXk6IHN0cmluZ106IHt9fSA9PiB7XG4gIGNvbnN0IHBhcnRzID0gbmFtZS5zcGxpdCgnLicpO1xuICByZXR1cm4gZm9yZ2UocGFydHMsIHRhcmdldCk7XG59O1xuIiwiaW1wb3J0ICogYXMgVHlwZSBmcm9tICcuL1R5cGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRocm90dGxlcjxBIGV4dGVuZHMgYW55W10+IHtcbiAgcmVhZG9ubHkgY2FuY2VsOiAoKSA9PiB2b2lkO1xuICByZWFkb25seSB0aHJvdHRsZTogKC4uLmFyZ3M6IEEpID0+IHZvaWQ7XG59XG5cbi8vIFJ1biBhIGZ1bmN0aW9uIGZuIGFmdGVyIHJhdGUgbXMuIElmIGFub3RoZXIgaW52b2NhdGlvbiBvY2N1cnNcbi8vIGR1cmluZyB0aGUgdGltZSBpdCBpcyB3YWl0aW5nLCB1cGRhdGUgdGhlIGFyZ3VtZW50cyBmIHdpbGwgcnVuXG4vLyB3aXRoIChidXQga2VlcCB0aGUgY3VycmVudCBzY2hlZHVsZSlcbmV4cG9ydCBjb25zdCBhZGFwdGFibGUgPSA8QSBleHRlbmRzIGFueVtdPihmbjogKC4uLmE6IEEpID0+IHZvaWQsIHJhdGU6IG51bWJlcik6IFRocm90dGxlcjxBPiA9PiB7XG4gIGxldCB0aW1lcjogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIGxldCBhcmdzOiBBIHwgbnVsbCA9IG51bGw7XG4gIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICBpZiAoIVR5cGUuaXNOdWxsKHRpbWVyKSkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgIHRpbWVyID0gbnVsbDtcbiAgICAgIGFyZ3MgPSBudWxsO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgdGhyb3R0bGUgPSAoLi4ubmV3QXJnczogQSkgPT4ge1xuICAgIGFyZ3MgPSBuZXdBcmdzO1xuICAgIGlmIChUeXBlLmlzTnVsbCh0aW1lcikpIHtcbiAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRlbXBBcmdzID0gYXJncztcbiAgICAgICAgdGltZXIgPSBudWxsO1xuICAgICAgICBhcmdzID0gbnVsbDtcbiAgICAgICAgZm4uYXBwbHkobnVsbCwgdGVtcEFyZ3MgYXMgQSk7XG4gICAgICB9LCByYXRlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBjYW5jZWwsXG4gICAgdGhyb3R0bGVcbiAgfTtcbn07XG5cbi8vIFJ1biBhIGZ1bmN0aW9uIGZuIGFmdGVyIHJhdGUgbXMuIElmIGFub3RoZXIgaW52b2NhdGlvbiBvY2N1cnNcbi8vIGR1cmluZyB0aGUgdGltZSBpdCBpcyB3YWl0aW5nLCBpZ25vcmUgaXQgY29tcGxldGVseS5cbmV4cG9ydCBjb25zdCBmaXJzdCA9IDxBIGV4dGVuZHMgYW55W10+KGZuOiAoLi4uYTogQSkgPT4gdm9pZCwgcmF0ZTogbnVtYmVyKTogVGhyb3R0bGVyPEE+ID0+IHtcbiAgbGV0IHRpbWVyOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgIGlmICghVHlwZS5pc051bGwodGltZXIpKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgdGltZXIgPSBudWxsO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgdGhyb3R0bGUgPSAoLi4uYXJnczogQSkgPT4ge1xuICAgIGlmIChUeXBlLmlzTnVsbCh0aW1lcikpIHtcbiAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRpbWVyID0gbnVsbDtcbiAgICAgICAgZm4uYXBwbHkobnVsbCwgYXJncyk7XG4gICAgICB9LCByYXRlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBjYW5jZWwsXG4gICAgdGhyb3R0bGVcbiAgfTtcbn07XG5cbi8vIFJ1biBhIGZ1bmN0aW9uIGZuIGFmdGVyIHJhdGUgbXMuIElmIGFub3RoZXIgaW52b2NhdGlvbiBvY2N1cnNcbi8vIGR1cmluZyB0aGUgdGltZSBpdCBpcyB3YWl0aW5nLCByZXNjaGVkdWxlIHRoZSBmdW5jdGlvbiBhZ2FpblxuLy8gd2l0aCB0aGUgbmV3IGFyZ3VtZW50cy5cbmV4cG9ydCBjb25zdCBsYXN0ID0gPEEgZXh0ZW5kcyBhbnlbXT4oZm46ICguLi5hOiBBKSA9PiB2b2lkLCByYXRlOiBudW1iZXIpOiBUaHJvdHRsZXI8QT4gPT4ge1xuICBsZXQgdGltZXI6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgaWYgKCFUeXBlLmlzTnVsbCh0aW1lcikpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICB0aW1lciA9IG51bGw7XG4gICAgfVxuICB9O1xuICBjb25zdCB0aHJvdHRsZSA9ICguLi5hcmdzOiBBKSA9PiB7XG4gICAgY2FuY2VsKCk7XG4gICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRpbWVyID0gbnVsbDtcbiAgICAgIGZuLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgIH0sIHJhdGUpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY2FuY2VsLFxuICAgIHRocm90dGxlXG4gIH07XG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXdyYXBwZXItb2JqZWN0LXR5cGVzICovXG5jb25zdCBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcblxuaW50ZXJmYWNlIENvbnN0cnVjdG9yPFQgZXh0ZW5kcyBPYmplY3Q+IHtcbiAgcmVhZG9ubHkgcHJvdG90eXBlOiBUO1xuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG59XG5cbmNvbnN0IGhhc1Byb3RvID0gPFQgZXh0ZW5kcyBPYmplY3Q+KHY6IE9iamVjdCwgY29uc3RydWN0b3I6IENvbnN0cnVjdG9yPFQ+LCBwcmVkaWNhdGU6ICh2OiBPYmplY3QsIHByb3RvdHlwZTogVCkgPT4gYm9vbGVhbik6IGJvb2xlYW4gPT4ge1xuICBpZiAocHJlZGljYXRlKHYsIGNvbnN0cnVjdG9yLnByb3RvdHlwZSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICAvLyBTdHJpbmctYmFzZWQgZmFsbGJhY2sgdGltZVxuICAgIHJldHVybiB2LmNvbnN0cnVjdG9yPy5uYW1lID09PSBjb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG59O1xuXG5jb25zdCB0eXBlT2YgPSAoeDogYW55KTogc3RyaW5nID0+IHtcbiAgY29uc3QgdCA9IHR5cGVvZiB4O1xuICBpZiAoeCA9PT0gbnVsbCkge1xuICAgIHJldHVybiAnbnVsbCc7XG4gIH0gZWxzZSBpZiAodCA9PT0gJ29iamVjdCcgJiYgQXJyYXkuaXNBcnJheSh4KSkge1xuICAgIHJldHVybiAnYXJyYXknO1xuICB9IGVsc2UgaWYgKHQgPT09ICdvYmplY3QnICYmIGhhc1Byb3RvKHgsIFN0cmluZywgKG8sIHByb3RvKSA9PiBwcm90by5pc1Byb3RvdHlwZU9mKG8pKSkge1xuICAgIHJldHVybiAnc3RyaW5nJztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdDtcbiAgfVxufTtcblxuY29uc3QgaXNUeXBlID0gPFlvbG8+KHR5cGU6IHN0cmluZykgPT4gKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBZb2xvID0+XG4gIHR5cGVPZih2YWx1ZSkgPT09IHR5cGU7XG5cbmNvbnN0IGlzU2ltcGxlVHlwZSA9IDxZb2xvPih0eXBlOiBzdHJpbmcpID0+ICh2YWx1ZTogYW55KTogdmFsdWUgaXMgWW9sbyA9PlxuICB0eXBlb2YgdmFsdWUgPT09IHR5cGU7XG5cbmNvbnN0IGVxID0gPFQ+ICh0OiBUKSA9PiAoYTogYW55KTogYSBpcyBUID0+XG4gIHQgPT09IGE7XG5cbmV4cG9ydCBjb25zdCBpcyA9IDxFIGV4dGVuZHMgT2JqZWN0Pih2YWx1ZTogYW55LCBjb25zdHJ1Y3RvcjogQ29uc3RydWN0b3I8RT4pOiB2YWx1ZSBpcyBFID0+XG4gIGlzT2JqZWN0KHZhbHVlKSAmJiBoYXNQcm90bzxFPih2YWx1ZSwgY29uc3RydWN0b3IsIChvLCBwcm90bykgPT4gZ2V0UHJvdG90eXBlT2YobykgPT09IHByb3RvKTtcblxuZXhwb3J0IGNvbnN0IGlzU3RyaW5nOiAodmFsdWU6IGFueSkgPT4gdmFsdWUgaXMgc3RyaW5nID1cbiAgaXNUeXBlKCdzdHJpbmcnKTtcblxuZXhwb3J0IGNvbnN0IGlzT2JqZWN0OiAodmFsdWU6IGFueSkgPT4gdmFsdWUgaXMgT2JqZWN0ID1cbiAgaXNUeXBlKCdvYmplY3QnKTtcblxuZXhwb3J0IGNvbnN0IGlzUGxhaW5PYmplY3QgPSAodmFsdWU6IHVua25vd24pOiB2YWx1ZSBpcyBPYmplY3QgPT5cbiAgaXModmFsdWUsIE9iamVjdCk7XG5cbmV4cG9ydCBjb25zdCBpc0FycmF5OiAodmFsdWU6IGFueSkgPT4gdmFsdWUgaXMgQXJyYXk8dW5rbm93bj4gPVxuICBpc1R5cGUoJ2FycmF5Jyk7XG5cbmV4cG9ydCBjb25zdCBpc051bGw6IChhOiBhbnkpID0+IGEgaXMgbnVsbCA9XG4gIGVxKG51bGwpO1xuXG5leHBvcnQgY29uc3QgaXNCb29sZWFuOiAodmFsdWU6IGFueSkgPT4gdmFsdWUgaXMgYm9vbGVhbiA9XG4gIGlzU2ltcGxlVHlwZTxib29sZWFuPignYm9vbGVhbicpO1xuXG5leHBvcnQgY29uc3QgaXNVbmRlZmluZWQ6IChhOiBhbnkpID0+IGEgaXMgdW5kZWZpbmVkID1cbiAgZXEodW5kZWZpbmVkKTtcblxuZXhwb3J0IGNvbnN0IGlzTnVsbGFibGUgPSAoYTogYW55KTogYSBpcyBudWxsIHwgdW5kZWZpbmVkID0+XG4gIGEgPT09IG51bGwgfHwgYSA9PT0gdW5kZWZpbmVkO1xuXG5leHBvcnQgY29uc3QgaXNOb25OdWxsYWJsZSA9IDxBPiAoYTogQSB8IG51bGwgfCB1bmRlZmluZWQpOiBhIGlzIE5vbk51bGxhYmxlPEE+ID0+XG4gICFpc051bGxhYmxlKGEpO1xuXG5leHBvcnQgY29uc3QgaXNGdW5jdGlvbjogKHZhbHVlOiBhbnkpID0+IHZhbHVlIGlzIEZ1bmN0aW9uID1cbiAgaXNTaW1wbGVUeXBlPEZ1bmN0aW9uPignZnVuY3Rpb24nKTtcblxuZXhwb3J0IGNvbnN0IGlzTnVtYmVyOiAodmFsdWU6IGFueSkgPT4gdmFsdWUgaXMgbnVtYmVyID1cbiAgaXNTaW1wbGVUeXBlPG51bWJlcj4oJ251bWJlcicpO1xuXG5leHBvcnQgY29uc3QgaXNBcnJheU9mID0gPEU+KHZhbHVlOiBhbnksIHByZWQ6ICh4OiBhbnkpID0+IHggaXMgRSk6IHZhbHVlIGlzIEFycmF5PEU+ID0+IHtcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHZhbHVlLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICBpZiAoIShwcmVkKHZhbHVlW2ldKSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQgY29uc3QgaXNQcm9taXNlTGlrZSA9ICh4OiBhbnkpOiB4IGlzIFByb21pc2U8dW5rbm93bj4gPT5cbiAgaXNPYmplY3QoeClcbiAgJiYgaXNGdW5jdGlvbih4LnRoZW4pXG4gICYmIGlzRnVuY3Rpb24oeC5jYXRjaCk7XG4iLCJpbXBvcnQgeyBSZXNvbHZlLCBUeXBlIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0ICogYXMgR2xvYmFsIGZyb20gJy4uL3V0aWwvR2xvYmFsJztcblxuY29uc3QgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG5cbi8qXG4gKiBJRTkgYW5kIGFib3ZlXG4gKlxuICogTUROIG5vIHVzZSBvbiB0aGlzIG9uZSwgYnV0IGhlcmUncyB0aGUgbGluayBhbnl3YXk6XG4gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9kb2NzL1dlYi9BUEkvSFRNTEVsZW1lbnRcbiAqL1xuY29uc3Qgc2FuZEhUTUxFbGVtZW50ID0gKHNjb3BlOiBXaW5kb3cgfCB1bmRlZmluZWQpID0+IHtcbiAgcmV0dXJuIEdsb2JhbC5nZXRPckRpZSgnSFRNTEVsZW1lbnQnLCBzY29wZSkgYXMgdHlwZW9mIEhUTUxFbGVtZW50O1xufTtcblxuY29uc3QgaXNQcm90b3R5cGVPZiA9ICh4OiBhbnkpOiB4IGlzIEhUTUxFbGVtZW50ID0+IHtcbiAgLy8gdXNlIFJlc29sdmUgdG8gZ2V0IHRoZSB3aW5kb3cgb2JqZWN0IGZvciB4IGFuZCBqdXN0IHJldHVybiB1bmRlZmluZWQgaWYgaXQgY2FuJ3QgZmluZCBpdC5cbiAgLy8gdW5kZWZpbmVkIHNjb3BlIGxhdGVyIHRyaWdnZXJzIHVzaW5nIHRoZSBnbG9iYWwgd2luZG93LlxuICBjb25zdCBzY29wZTogV2luZG93IHwgdW5kZWZpbmVkID0gUmVzb2x2ZS5yZXNvbHZlKCdvd25lckRvY3VtZW50LmRlZmF1bHRWaWV3JywgeCk7XG5cbiAgLy8gVElOWS03Mzc0OiBXZSBjYW4ndCByZWx5IG9uIGxvb2tpbmcgYXQgdGhlIG93bmVyIHdpbmRvdyBIVE1MRWxlbWVudCBhcyB0aGUgZWxlbWVudCBtYXkgaGF2ZVxuICAvLyBiZWVuIGNvbnN0cnVjdGVkIGluIGEgZGlmZmVyZW50IHdpbmRvdyBhbmQgdGhlbiBhcHBlbmRlZCB0byB0aGUgY3VycmVudCB3aW5kb3cgZG9jdW1lbnQuXG4gIHJldHVybiBUeXBlLmlzT2JqZWN0KHgpICYmIChzYW5kSFRNTEVsZW1lbnQoc2NvcGUpLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKHgpIHx8IC9eSFRNTFxcdypFbGVtZW50JC8udGVzdChnZXRQcm90b3R5cGVPZih4KS5jb25zdHJ1Y3Rvci5uYW1lKSk7XG59O1xuXG5leHBvcnQge1xuICBpc1Byb3RvdHlwZU9mXG59O1xuIiwiaW1wb3J0IHsgUmVzb2x2ZSB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmNvbnN0IHVuc2FmZSA9IDxUPihuYW1lOiBzdHJpbmcsIHNjb3BlPzoge30pOiBUIHwgdW5kZWZpbmVkID0+IHtcbiAgcmV0dXJuIFJlc29sdmUucmVzb2x2ZShuYW1lLCBzY29wZSk7XG59O1xuXG5jb25zdCBnZXRPckRpZSA9IDxUPihuYW1lOiBzdHJpbmcsIHNjb3BlPzoge30pOiBUID0+IHtcbiAgY29uc3QgYWN0dWFsID0gdW5zYWZlPFQ+KG5hbWUsIHNjb3BlKTtcblxuICBpZiAoYWN0dWFsID09PSB1bmRlZmluZWQgfHwgYWN0dWFsID09PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKG5hbWUgKyAnIG5vdCBhdmFpbGFibGUgb24gdGhpcyBicm93c2VyJyk7XG4gIH1cbiAgcmV0dXJuIGFjdHVhbDtcbn07XG5cbmV4cG9ydCB7XG4gIGdldE9yRGllXG59O1xuIiwiaW1wb3J0IHR5cGUgeyBPcHRpb25hbCB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbi8qKlxuICogQXBwbGllcyBmIHJlcGVhdGVkbHkgdW50aWwgaXQgY29tcGxldGVzIChieSByZXR1cm5pbmcgT3B0aW9uYWwubm9uZSgpKS5cbiAqXG4gKiBOb3JtYWxseSB3b3VsZCBqdXN0IHVzZSByZWN1cnNpb24sIGJ1dCBKYXZhU2NyaXB0IGxhY2tzIHRhaWwgY2FsbCBvcHRpbWlzYXRpb24uXG4gKlxuICogVGhpcyBpcyB3aGF0IHJlY3Vyc2lvbiBsb29rcyBsaWtlIHdoZW4gbWFudWFsbHkgdW5yYXZlbGxlZCA6KVxuICovXG5jb25zdCB0b0FycmF5ID0gPFQgPSBhbnksIFUgZXh0ZW5kcyBUID0gVD4gKHRhcmdldDogVCwgZjogKHQ6IFQpID0+IE9wdGlvbmFsPFU+KTogVVtdID0+IHtcbiAgY29uc3QgcjogVVtdID0gW107XG5cbiAgY29uc3QgcmVjdXJzZSA9IChlOiBVKSA9PiB7XG4gICAgci5wdXNoKGUpO1xuICAgIHJldHVybiBmKGUpO1xuICB9O1xuXG4gIGxldCBjdXIgPSBmKHRhcmdldCk7XG4gIGRvIHtcbiAgICBjdXIgPSBjdXIuYmluZChyZWN1cnNlKTtcbiAgfSB3aGlsZSAoY3VyLmlzU29tZSgpKTtcblxuICByZXR1cm4gcjtcbn07XG5cbmV4cG9ydCB7XG4gIHRvQXJyYXlcbn07XG4iLCJpbXBvcnQgeyBBcnIsIEZ1biB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmltcG9ydCB0eXBlIHsgU3VnYXJFbGVtZW50IH0gZnJvbSAnLi4vbm9kZS9TdWdhckVsZW1lbnQnO1xuaW1wb3J0ICogYXMgU2VsZWN0b3JzIGZyb20gJy4uL3NlYXJjaC9TZWxlY3RvcnMnO1xuXG5jb25zdCBlcSA9IChlMTogU3VnYXJFbGVtZW50PHVua25vd24+LCBlMjogU3VnYXJFbGVtZW50PHVua25vd24+KTogYm9vbGVhbiA9PlxuICBlMS5kb20gPT09IGUyLmRvbTtcblxuY29uc3QgaXNFcXVhbE5vZGUgPSAoZTE6IFN1Z2FyRWxlbWVudDxOb2RlPiwgZTI6IFN1Z2FyRWxlbWVudDxOb2RlPik6IGJvb2xlYW4gPT5cbiAgZTEuZG9tLmlzRXF1YWxOb2RlKGUyLmRvbSk7XG5cbmNvbnN0IG1lbWJlciA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8dW5rbm93bj4sIGVsZW1lbnRzOiBTdWdhckVsZW1lbnQ8dW5rbm93bj5bXSk6IGJvb2xlYW4gPT5cbiAgQXJyLmV4aXN0cyhlbGVtZW50cywgRnVuLmN1cnJ5KGVxLCBlbGVtZW50KSk7XG5cbi8vIFJldHVybnM6IHRydWUgaWYgbm9kZSBlMSBjb250YWlucyBlMiwgb3RoZXJ3aXNlIGZhbHNlLlxuLy8gKHJldHVybnMgZmFsc2UgaWYgZTE9PT1lMjogQSBub2RlIGRvZXMgbm90IGNvbnRhaW4gaXRzZWxmKS5cbmNvbnN0IGNvbnRhaW5zID0gKGUxOiBTdWdhckVsZW1lbnQ8Tm9kZT4sIGUyOiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBib29sZWFuID0+IHtcbiAgY29uc3QgZDEgPSBlMS5kb207XG4gIGNvbnN0IGQyID0gZTIuZG9tO1xuICByZXR1cm4gZDEgPT09IGQyID8gZmFsc2UgOiBkMS5jb250YWlucyhkMik7XG59O1xuXG5jb25zdCBpcyA9IFNlbGVjdG9ycy5pcztcblxuZXhwb3J0IHtcbiAgZXEsXG4gIGlzRXF1YWxOb2RlLFxuICBtZW1iZXIsXG4gIGNvbnRhaW5zLFxuICAvLyBPbmx5IHVzZWQgYnkgRG9tVW5pdmVyc2UuIFJlbW92ZSAob3Igc2hvdWxkIFNlbGVjdG9ycy5pcyBtb3ZlIGhlcmU/KVxuICBpc1xufTtcbiIsImNvbnN0IEFUVFJJQlVURSA9IDI7XG5jb25zdCBDREFUQV9TRUNUSU9OID0gNDtcbmNvbnN0IENPTU1FTlQgPSA4O1xuY29uc3QgRE9DVU1FTlQgPSA5O1xuY29uc3QgRE9DVU1FTlRfVFlQRSA9IDEwO1xuY29uc3QgRE9DVU1FTlRfRlJBR01FTlQgPSAxMTtcbmNvbnN0IEVMRU1FTlQgPSAxO1xuY29uc3QgVEVYVCA9IDM7XG5jb25zdCBQUk9DRVNTSU5HX0lOU1RSVUNUSU9OID0gNztcbmNvbnN0IEVOVElUWV9SRUZFUkVOQ0UgPSA1O1xuY29uc3QgRU5USVRZID0gNjtcbmNvbnN0IE5PVEFUSU9OID0gMTI7XG5cbmV4cG9ydCB7XG4gIEFUVFJJQlVURSxcbiAgQ0RBVEFfU0VDVElPTixcbiAgQ09NTUVOVCxcbiAgRE9DVU1FTlQsXG4gIERPQ1VNRU5UX1RZUEUsXG4gIERPQ1VNRU5UX0ZSQUdNRU5ULFxuICBFTEVNRU5ULFxuICBURVhULFxuICBQUk9DRVNTSU5HX0lOU1RSVUNUSU9OLFxuICBFTlRJVFlfUkVGRVJFTkNFLFxuICBFTlRJVFksXG4gIE5PVEFUSU9OXG59O1xuIiwiaW1wb3J0IHsgRnVuIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0IHsgU3VnYXJFbGVtZW50IH0gZnJvbSAnLi9TdWdhckVsZW1lbnQnO1xuaW1wb3J0ICogYXMgU3VnYXJOb2RlIGZyb20gJy4vU3VnYXJOb2RlJztcbmltcG9ydCB7IGdldFNoYWRvd0hvc3QsIGdldFNoYWRvd1Jvb3QgfSBmcm9tICcuL1N1Z2FyU2hhZG93RG9tJztcblxuLy8gTm9kZS5jb250YWlucygpIGlzIHZlcnksIHZlcnksIHZlcnkgZ29vZCBwZXJmb3JtYW5jZVxuLy8gaHR0cDovL2pzcGVyZi5jb20vY2xvc2VzdC12cy1jb250YWlucy81XG5jb25zdCBpbkJvZHkgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KTogYm9vbGVhbiA9PiB7XG4gIC8vIFRlY2huaWNhbGx5IHRoaXMgaXMgb25seSByZXF1aXJlZCBvbiBJRSwgd2hlcmUgY29udGFpbnMoKSByZXR1cm5zIGZhbHNlIGZvciB0ZXh0IG5vZGVzLlxuICAvLyBCdXQgaXQncyBjaGVhcCBlbm91Z2ggdG8gcnVuIGV2ZXJ5d2hlcmUgYW5kIFN1Z2FyIGRvZXNuJ3QgaGF2ZSBwbGF0Zm9ybSBkZXRlY3Rpb24gKHlldCkuXG4gIGNvbnN0IGRvbSA9IFN1Z2FyTm9kZS5pc1RleHQoZWxlbWVudCkgPyBlbGVtZW50LmRvbS5wYXJlbnROb2RlIDogZWxlbWVudC5kb207XG5cbiAgLy8gdXNlIG93bmVyRG9jdW1lbnQuYm9keSB0byBlbnN1cmUgdGhpcyB3b3JrcyBpbnNpZGUgaWZyYW1lcy5cbiAgLy8gTm9ybWFsbHkgY29udGFpbnMgaXMgYmFkIGJlY2F1c2UgYW4gZWxlbWVudCBcImNvbnRhaW5zXCIgaXRzZWxmLCBidXQgaGVyZSB3ZSB3YW50IHRoYXQuXG4gIGlmIChkb20gPT09IHVuZGVmaW5lZCB8fCBkb20gPT09IG51bGwgfHwgZG9tLm93bmVyRG9jdW1lbnQgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBkb2MgPSBkb20ub3duZXJEb2N1bWVudDtcbiAgcmV0dXJuIGdldFNoYWRvd1Jvb3QoU3VnYXJFbGVtZW50LmZyb21Eb20oZG9tKSkuZm9sZChcbiAgICAoKSA9PiBkb2MuYm9keS5jb250YWlucyhkb20pLFxuICAgIEZ1bi5jb21wb3NlMShpbkJvZHksIGdldFNoYWRvd0hvc3QpXG4gICk7XG59O1xuXG5jb25zdCBib2R5ID0gKCk6IFN1Z2FyRWxlbWVudDxIVE1MRWxlbWVudD4gPT5cbiAgZ2V0Qm9keShTdWdhckVsZW1lbnQuZnJvbURvbShkb2N1bWVudCkpO1xuXG5jb25zdCBnZXRCb2R5ID0gKGRvYzogU3VnYXJFbGVtZW50PERvY3VtZW50Pik6IFN1Z2FyRWxlbWVudDxIVE1MRWxlbWVudD4gPT4ge1xuICBjb25zdCBiID0gZG9jLmRvbS5ib2R5O1xuICBpZiAoYiA9PT0gbnVsbCB8fCBiID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0JvZHkgaXMgbm90IGF2YWlsYWJsZSB5ZXQnKTtcbiAgfVxuICByZXR1cm4gU3VnYXJFbGVtZW50LmZyb21Eb20oYik7XG59O1xuXG5leHBvcnQge1xuICBib2R5LFxuICBnZXRCb2R5LFxuICBpbkJvZHlcbn07XG4iLCJpbXBvcnQgeyBPcHRpb25hbCB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmltcG9ydCB0eXBlIHsgSFRNTEVsZW1lbnRGdWxsVGFnTmFtZU1hcCB9IGZyb20gJy4uLy4uL2FsaWVuL0RvbVR5cGVzJztcblxuaW50ZXJmYWNlIFN1Z2FyRWxlbWVudDxUID0gYW55PiB7XG4gIHJlYWRvbmx5IGRvbTogVDtcbn1cblxuY29uc3QgZnJvbUh0bWwgPSA8RSBleHRlbmRzIE5vZGUgPSBOb2RlICYgQ2hpbGROb2RlPiAoaHRtbDogc3RyaW5nLCBzY29wZT86IERvY3VtZW50IHwgbnVsbCk6IFN1Z2FyRWxlbWVudDxFPiA9PiB7XG4gIGNvbnN0IGRvYyA9IHNjb3BlIHx8IGRvY3VtZW50O1xuICBjb25zdCBkaXYgPSBkb2MuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5pbm5lckhUTUwgPSBodG1sO1xuICBpZiAoIWRpdi5oYXNDaGlsZE5vZGVzKCkgfHwgZGl2LmNoaWxkTm9kZXMubGVuZ3RoID4gMSkge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSAnSFRNTCBkb2VzIG5vdCBoYXZlIGEgc2luZ2xlIHJvb3Qgbm9kZSc7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UsIGh0bWwpO1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgfVxuICByZXR1cm4gZnJvbURvbShkaXYuY2hpbGROb2Rlc1swXSBhcyB1bmtub3duIGFzIEUpO1xufTtcblxuY29uc3QgZnJvbVRhZzoge1xuICA8SyBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50RnVsbFRhZ05hbWVNYXA+KHRhZzogSywgc2NvcGU/OiBEb2N1bWVudCB8IG51bGwpOiBTdWdhckVsZW1lbnQ8SFRNTEVsZW1lbnRGdWxsVGFnTmFtZU1hcFtLXT47XG4gICh0YWc6IHN0cmluZywgc2NvcGU/OiBEb2N1bWVudCB8IG51bGwpOiBTdWdhckVsZW1lbnQ8SFRNTEVsZW1lbnQ+O1xufSA9ICh0YWc6IHN0cmluZywgc2NvcGU/OiBEb2N1bWVudCB8IG51bGwpOiBTdWdhckVsZW1lbnQ8SFRNTEVsZW1lbnQ+ID0+IHtcbiAgY29uc3QgZG9jID0gc2NvcGUgfHwgZG9jdW1lbnQ7XG4gIGNvbnN0IG5vZGUgPSBkb2MuY3JlYXRlRWxlbWVudCh0YWcpO1xuICByZXR1cm4gZnJvbURvbShub2RlKTtcbn07XG5cbmNvbnN0IGZyb21UZXh0ID0gKHRleHQ6IHN0cmluZywgc2NvcGU/OiBEb2N1bWVudCB8IG51bGwpOiBTdWdhckVsZW1lbnQ8VGV4dD4gPT4ge1xuICBjb25zdCBkb2MgPSBzY29wZSB8fCBkb2N1bWVudDtcbiAgY29uc3Qgbm9kZSA9IGRvYy5jcmVhdGVUZXh0Tm9kZSh0ZXh0KTtcbiAgcmV0dXJuIGZyb21Eb20obm9kZSk7XG59O1xuXG5jb25zdCBmcm9tRG9tID0gPFQgZXh0ZW5kcyBOb2RlIHwgV2luZG93PiAobm9kZTogVCk6IFN1Z2FyRWxlbWVudDxUPiA9PiB7XG4gIC8vIFRPRE86IENvbnNpZGVyIHJlbW92aW5nIHRoaXMgY2hlY2ssIGJ1dCBsZWZ0IGF0bSBmb3Igc2FmZXR5XG4gIGlmIChub2RlID09PSBudWxsIHx8IG5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignTm9kZSBjYW5ub3QgYmUgbnVsbCBvciB1bmRlZmluZWQnKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGRvbTogbm9kZVxuICB9O1xufTtcblxuY29uc3QgZnJvbVBvaW50ID0gKGRvY0VsbTogU3VnYXJFbGVtZW50PERvY3VtZW50PiwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBPcHRpb25hbDxTdWdhckVsZW1lbnQ8RWxlbWVudD4+ID0+XG4gIE9wdGlvbmFsLmZyb20oZG9jRWxtLmRvbS5lbGVtZW50RnJvbVBvaW50KHgsIHkpKS5tYXAoZnJvbURvbSk7XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YXJpYWJsZS1uYW1lXG5jb25zdCBTdWdhckVsZW1lbnQgPSB7XG4gIGZyb21IdG1sLFxuICBmcm9tVGFnLFxuICBmcm9tVGV4dCxcbiAgZnJvbURvbSxcbiAgZnJvbVBvaW50XG59O1xuXG5leHBvcnQge1xuICBTdWdhckVsZW1lbnRcbn07XG4iLCJpbXBvcnQgeyBTdWdhckVsZW1lbnQgfSBmcm9tICcuL1N1Z2FyRWxlbWVudCc7XG5cbmV4cG9ydCBjb25zdCBoZWFkID0gKCk6IFN1Z2FyRWxlbWVudDxIVE1MSGVhZEVsZW1lbnQ+ID0+IGdldEhlYWQoU3VnYXJFbGVtZW50LmZyb21Eb20oZG9jdW1lbnQpKTtcblxuZXhwb3J0IGNvbnN0IGdldEhlYWQgPSAoZG9jOiBTdWdhckVsZW1lbnQ8RG9jdW1lbnQ+KTogU3VnYXJFbGVtZW50PEhUTUxIZWFkRWxlbWVudD4gPT4ge1xuICAvKlxuICAgKiBJRTkgYW5kIGFib3ZlIHBlclxuICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRG9jdW1lbnQvaGVhZFxuICAgKi9cbiAgY29uc3QgYiA9IGRvYy5kb20uaGVhZDtcbiAgaWYgKGIgPT09IG51bGwgfHwgYiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdIZWFkIGlzIG5vdCBhdmFpbGFibGUgeWV0Jyk7XG4gIH1cbiAgcmV0dXJuIFN1Z2FyRWxlbWVudC5mcm9tRG9tKGIpO1xufTtcbiIsImltcG9ydCB7IFNhbmRIVE1MRWxlbWVudCB9IGZyb20gJ0BlcGhveC9zYW5kJztcblxuaW1wb3J0IHR5cGUgeyBIVE1MRWxlbWVudEZ1bGxUYWdOYW1lTWFwIH0gZnJvbSAnLi4vLi4vYWxpZW4vRG9tVHlwZXMnO1xuXG5pbXBvcnQgKiBhcyBOb2RlVHlwZXMgZnJvbSAnLi9Ob2RlVHlwZXMnO1xuaW1wb3J0IHR5cGUgeyBTdWdhckVsZW1lbnQgfSBmcm9tICcuL1N1Z2FyRWxlbWVudCc7XG5cbmNvbnN0IG5hbWUgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KTogc3RyaW5nID0+IHtcbiAgY29uc3QgciA9IGVsZW1lbnQuZG9tLm5vZGVOYW1lO1xuICByZXR1cm4gci50b0xvd2VyQ2FzZSgpO1xufTtcblxuY29uc3QgdHlwZSA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBudW1iZXIgPT5cbiAgZWxlbWVudC5kb20ubm9kZVR5cGU7XG5cbmNvbnN0IHZhbHVlID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPik6IHN0cmluZyB8IG51bGwgPT5cbiAgZWxlbWVudC5kb20ubm9kZVZhbHVlO1xuXG5jb25zdCBpc1R5cGUgPSA8RSBleHRlbmRzIE5vZGU+ICh0OiBudW1iZXIpID0+IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBlbGVtZW50IGlzIFN1Z2FyRWxlbWVudDxFPiA9PlxuICB0eXBlKGVsZW1lbnQpID09PSB0O1xuXG5jb25zdCBpc0NvbW1lbnQgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KTogZWxlbWVudCBpcyBTdWdhckVsZW1lbnQ8Q29tbWVudD4gPT5cbiAgdHlwZShlbGVtZW50KSA9PT0gTm9kZVR5cGVzLkNPTU1FTlQgfHwgbmFtZShlbGVtZW50KSA9PT0gJyNjb21tZW50JztcblxuY29uc3QgaXNIVE1MRWxlbWVudCA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBlbGVtZW50IGlzIFN1Z2FyRWxlbWVudDxIVE1MRWxlbWVudD4gPT5cbiAgaXNFbGVtZW50KGVsZW1lbnQpICYmIFNhbmRIVE1MRWxlbWVudC5pc1Byb3RvdHlwZU9mKGVsZW1lbnQuZG9tKTtcblxuY29uc3QgaXNFbGVtZW50ID0gaXNUeXBlPEVsZW1lbnQ+KE5vZGVUeXBlcy5FTEVNRU5UKTtcbmNvbnN0IGlzVGV4dCA9IGlzVHlwZTxUZXh0PihOb2RlVHlwZXMuVEVYVCk7XG5jb25zdCBpc0RvY3VtZW50ID0gaXNUeXBlPERvY3VtZW50PihOb2RlVHlwZXMuRE9DVU1FTlQpO1xuY29uc3QgaXNEb2N1bWVudEZyYWdtZW50ID0gaXNUeXBlPERvY3VtZW50RnJhZ21lbnQ+KE5vZGVUeXBlcy5ET0NVTUVOVF9GUkFHTUVOVCk7XG5cbmNvbnN0IGlzVGFnID0gPEsgZXh0ZW5kcyBrZXlvZiBIVE1MRWxlbWVudEZ1bGxUYWdOYW1lTWFwPih0YWc6IEspID0+IChlOiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBlIGlzIFN1Z2FyRWxlbWVudDxIVE1MRWxlbWVudEZ1bGxUYWdOYW1lTWFwW0tdPiA9PlxuICBpc0VsZW1lbnQoZSkgJiYgbmFtZShlKSA9PT0gdGFnO1xuXG5leHBvcnQge1xuICBuYW1lLFxuICB0eXBlLFxuICB2YWx1ZSxcbiAgaXNFbGVtZW50LFxuICBpc0hUTUxFbGVtZW50LFxuICBpc1RleHQsXG4gIGlzRG9jdW1lbnQsXG4gIGlzRG9jdW1lbnRGcmFnbWVudCxcbiAgaXNDb21tZW50LFxuICBpc1RhZ1xufTtcbiIsImltcG9ydCB7IEFyciwgT3B0aW9uYWwsIFR5cGUgfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5pbXBvcnQgdHlwZSB7IEhUTUxFbGVtZW50RnVsbFRhZ05hbWVNYXAgfSBmcm9tICcuLi8uLi9hbGllbi9Eb21UeXBlcyc7XG5pbXBvcnQgKiBhcyBUcmF2ZXJzZSBmcm9tICcuLi9zZWFyY2gvVHJhdmVyc2UnO1xuXG5pbXBvcnQgeyBTdWdhckVsZW1lbnQgfSBmcm9tICcuL1N1Z2FyRWxlbWVudCc7XG5pbXBvcnQgKiBhcyBTdWdhckhlYWQgZnJvbSAnLi9TdWdhckhlYWQnO1xuaW1wb3J0ICogYXMgU3VnYXJOb2RlIGZyb20gJy4vU3VnYXJOb2RlJztcblxuZXhwb3J0IHR5cGUgUm9vdE5vZGUgPSBTdWdhckVsZW1lbnQ8RG9jdW1lbnQgfCBTaGFkb3dSb290PjtcblxuLyoqXG4gKiBJcyB0aGUgZWxlbWVudCBhIFNoYWRvd1Jvb3Q/XG4gKlxuICogTm90ZTogdGhpcyBpcyBpbnN1ZmZpY2llbnQgdG8gdGVzdCBpZiBhbnkgZWxlbWVudCBpcyBhIHNoYWRvdyByb290LCBidXQgaXQgaXMgc3VmZmljaWVudCB0byBkaWZmZXJlbnRpYXRlIGJldHdlZW5cbiAqIGEgRG9jdW1lbnQgYW5kIGEgU2hhZG93Um9vdC5cbiAqL1xuZXhwb3J0IGNvbnN0IGlzU2hhZG93Um9vdCA9IChkb3M6IFN1Z2FyRWxlbWVudDxOb2RlPik6IGRvcyBpcyBTdWdhckVsZW1lbnQ8U2hhZG93Um9vdD4gPT5cbiAgU3VnYXJOb2RlLmlzRG9jdW1lbnRGcmFnbWVudChkb3MpICYmIFR5cGUuaXNOb25OdWxsYWJsZSgoZG9zLmRvbSBhcyBTaGFkb3dSb290KS5ob3N0KTtcblxuZXhwb3J0IGNvbnN0IGdldFJvb3ROb2RlOiAoZTogU3VnYXJFbGVtZW50PE5vZGU+KSA9PiBSb290Tm9kZSA9IChlKSA9PlxuICBTdWdhckVsZW1lbnQuZnJvbURvbShlLmRvbS5nZXRSb290Tm9kZSgpKSBhcyBSb290Tm9kZTtcblxuLyoqIENyZWF0ZSBhbiBlbGVtZW50LCB1c2luZyB0aGUgYWN0dWFsIGRvY3VtZW50LiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZUVsZW1lbnQ6IHtcbiAgPEsgZXh0ZW5kcyBrZXlvZiBIVE1MRWxlbWVudEZ1bGxUYWdOYW1lTWFwPihkb3M6IFJvb3ROb2RlLCB0YWc6IEspOiBTdWdhckVsZW1lbnQ8SFRNTEVsZW1lbnRGdWxsVGFnTmFtZU1hcFtLXT47XG4gIChkb3M6IFJvb3ROb2RlLCB0YWc6IHN0cmluZyk6IFN1Z2FyRWxlbWVudDxIVE1MRWxlbWVudD47XG59ID0gKGRvczogUm9vdE5vZGUsIHRhZzogc3RyaW5nKSA9PlxuICBTdWdhckVsZW1lbnQuZnJvbVRhZyh0YWcsIFRyYXZlcnNlLmRvY3VtZW50T3JPd25lcihkb3MpLmRvbSk7XG5cbi8qKiBXaGVyZSBzdHlsZSB0YWdzIG5lZWQgdG8gZ28uIFNoYWRvd1Jvb3Qgb3IgZG9jdW1lbnQgaGVhZCAqL1xuZXhwb3J0IGNvbnN0IGdldFN0eWxlQ29udGFpbmVyID0gKGRvczogUm9vdE5vZGUpOiBTdWdhckVsZW1lbnQ8SFRNTEhlYWRFbGVtZW50IHwgU2hhZG93Um9vdD4gPT5cbiAgaXNTaGFkb3dSb290KGRvcykgPyBkb3MgOiBTdWdhckhlYWQuZ2V0SGVhZChUcmF2ZXJzZS5kb2N1bWVudE9yT3duZXIoZG9zKSk7XG5cbi8qKiBXaGVyZSBjb250ZW50IG5lZWRzIHRvIGdvLiBTaGFkb3dSb290IG9yIGRvY3VtZW50IGJvZHkgKi9cbmV4cG9ydCBjb25zdCBnZXRDb250ZW50Q29udGFpbmVyID0gKGRvczogUm9vdE5vZGUpOiBTdWdhckVsZW1lbnQ8SFRNTEVsZW1lbnQgfCBTaGFkb3dSb290PiA9PlxuICAvLyBDYW4ndCB1c2UgU3VnYXJCb2R5LmJvZHkgd2l0aG91dCBjYXVzaW5nIGEgY2lyY3VsYXIgbW9kdWxlIHJlZmVyZW5jZSAoc2luY2UgU3VnYXJCb2R5LmluQm9keSB1c2VzIFN1Z2FyU2hhZG93RG9tKVxuICBpc1NoYWRvd1Jvb3QoZG9zKSA/IGRvcyA6IFN1Z2FyRWxlbWVudC5mcm9tRG9tKFRyYXZlcnNlLmRvY3VtZW50T3JPd25lcihkb3MpLmRvbS5ib2R5KTtcblxuLyoqIElzIHRoaXMgZWxlbWVudCBlaXRoZXIgYSBTaGFkb3dSb290IG9yIGEgZGVzY2VuZGVudCBvZiBhIFNoYWRvd1Jvb3QuICovXG5leHBvcnQgY29uc3QgaXNJblNoYWRvd1Jvb3QgPSAoZTogU3VnYXJFbGVtZW50PE5vZGU+KTogYm9vbGVhbiA9PlxuICBnZXRTaGFkb3dSb290KGUpLmlzU29tZSgpO1xuXG4vKiogSWYgdGhpcyBlbGVtZW50IGlzIGluIGEgU2hhZG93Um9vdCwgcmV0dXJuIGl0LiAqL1xuZXhwb3J0IGNvbnN0IGdldFNoYWRvd1Jvb3QgPSAoZTogU3VnYXJFbGVtZW50PE5vZGU+KTogT3B0aW9uYWw8U3VnYXJFbGVtZW50PFNoYWRvd1Jvb3Q+PiA9PiB7XG4gIGNvbnN0IHIgPSBnZXRSb290Tm9kZShlKTtcbiAgcmV0dXJuIGlzU2hhZG93Um9vdChyKSA/IE9wdGlvbmFsLnNvbWUocikgOiBPcHRpb25hbC5ub25lKCk7XG59O1xuXG4vKiogUmV0dXJuIHRoZSBob3N0IG9mIGEgU2hhZG93Um9vdC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHdpbGwgdGhyb3cgaWYgU2hhZG93IERPTSBpcyB1bnN1cHBvcnRlZCBpbiB0aGUgYnJvd3Nlciwgb3IgaWYgdGhlIGhvc3QgaXMgbnVsbC5cbiAqIElmIHlvdSBhY3R1YWxseSBoYXZlIGEgU2hhZG93Um9vdCwgdGhpcyBzaG91bGRuJ3QgaGFwcGVuLlxuICovXG5leHBvcnQgY29uc3QgZ2V0U2hhZG93SG9zdCA9IChlOiBTdWdhckVsZW1lbnQ8U2hhZG93Um9vdD4pOiBTdWdhckVsZW1lbnQ8RWxlbWVudD4gPT5cbiAgU3VnYXJFbGVtZW50LmZyb21Eb20oZS5kb20uaG9zdCk7XG5cbi8qKlxuICogV2hlbiBFdmVudHMgYnViYmxlIHVwIHRocm91Z2ggYSBTaGFkb3dSb290LCB0aGUgYnJvd3NlciBjaGFuZ2VzIHRoZSB0YXJnZXQgdG8gYmUgdGhlIHNoYWRvdyBob3N0LlxuICogVGhpcyBmdW5jdGlvbiBnZXRzIHRoZSBcIm9yaWdpbmFsXCIgZXZlbnQgdGFyZ2V0IGlmIHBvc3NpYmxlLlxuICogVGhpcyBvbmx5IHdvcmtzIGlmIHRoZSBzaGFkb3cgdHJlZSBpcyBvcGVuIC0gaWYgdGhlIHNoYWRvdyB0cmVlIGlzIGNsb3NlZCwgZXZlbnQudGFyZ2V0IGlzIHJldHVybmVkLlxuICogU2VlOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvZnVuZGFtZW50YWxzL3dlYi1jb21wb25lbnRzL3NoYWRvd2RvbSNldmVudHNcbiAqL1xuZXhwb3J0IGNvbnN0IGdldE9yaWdpbmFsRXZlbnRUYXJnZXQgPSAoZXZlbnQ6IEV2ZW50KTogT3B0aW9uYWw8RXZlbnRUYXJnZXQ+ID0+IHtcbiAgaWYgKFR5cGUuaXNOb25OdWxsYWJsZShldmVudC50YXJnZXQpKSB7XG4gICAgY29uc3QgZWwgPSBTdWdhckVsZW1lbnQuZnJvbURvbShldmVudC50YXJnZXQgYXMgTm9kZSk7XG4gICAgaWYgKFN1Z2FyTm9kZS5pc0VsZW1lbnQoZWwpICYmIGlzT3BlblNoYWRvd0hvc3QoZWwpKSB7XG4gICAgICAvLyBXaGVuIHRhcmdldCBlbGVtZW50IGlzIGluc2lkZSBTaGFkb3cgRE9NIHdlIG5lZWQgdG8gdGFrZSBmaXJzdCBlbGVtZW50IGZyb20gY29tcG9zZWRQYXRoXG4gICAgICAvLyBvdGhlcndpc2Ugd2UnbGwgZ2V0IFNoYWRvdyBSb290IHBhcmVudCwgbm90IGFjdHVhbCB0YXJnZXQgZWxlbWVudC5cbiAgICAgIGlmIChldmVudC5jb21wb3NlZCAmJiBldmVudC5jb21wb3NlZFBhdGgpIHtcbiAgICAgICAgY29uc3QgY29tcG9zZWRQYXRoID0gZXZlbnQuY29tcG9zZWRQYXRoKCk7XG4gICAgICAgIGlmIChjb21wb3NlZFBhdGgpIHtcbiAgICAgICAgICByZXR1cm4gQXJyLmhlYWQoY29tcG9zZWRQYXRoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gT3B0aW9uYWwuZnJvbShldmVudC50YXJnZXQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzT3BlblNoYWRvd1Jvb3QgPSAoc3I6IFN1Z2FyRWxlbWVudDxTaGFkb3dSb290Pik6IGJvb2xlYW4gPT5cbiAgc3IuZG9tLm1vZGUgPT09ICdvcGVuJztcblxuZXhwb3J0IGNvbnN0IGlzQ2xvc2VkU2hhZG93Um9vdCA9IChzcjogU3VnYXJFbGVtZW50PFNoYWRvd1Jvb3Q+KTogYm9vbGVhbiA9PlxuICBzci5kb20ubW9kZSA9PT0gJ2Nsb3NlZCc7XG5cbi8qKiBSZXR1cm4gdHJ1ZSBpZiB0aGUgZWxlbWVudCBpcyBhIGhvc3Qgb2YgYW4gb3BlbiBzaGFkb3cgcm9vdC5cbiAqICBSZXR1cm4gZmFsc2UgaWYgdGhlIGVsZW1lbnQgaXMgYSBob3N0IG9mIGEgY2xvc2VkIHNoYWRvdyByb290LCBvciBpZiB0aGUgZWxlbWVudCBpcyBub3QgYSBob3N0LlxuICovXG5leHBvcnQgY29uc3QgaXNPcGVuU2hhZG93SG9zdCA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8RWxlbWVudD4pOiBib29sZWFuID0+XG4gIFR5cGUuaXNOb25OdWxsYWJsZShlbGVtZW50LmRvbS5zaGFkb3dSb290KTtcbiIsImltcG9ydCB7IEFyciB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmltcG9ydCB0eXBlIHsgU3VnYXJFbGVtZW50IH0gZnJvbSAnLi4vbm9kZS9TdWdhckVsZW1lbnQnO1xuXG5pbXBvcnQgKiBhcyBBdHRyaWJ1dGUgZnJvbSAnLi9BdHRyaWJ1dGUnO1xuXG4vLyBNZXRob2RzIGZvciBoYW5kbGluZyBhdHRyaWJ1dGVzIHRoYXQgY29udGFpbiBhIGxpc3Qgb2YgdmFsdWVzIDxkaXYgZm9vPVwiYWxwaGEgYmV0YSB0aGV0YVwiPlxuY29uc3QgcmVhZCA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8RWxlbWVudD4sIGF0dHI6IHN0cmluZyk6IHN0cmluZ1tdID0+IHtcbiAgY29uc3QgdmFsdWUgPSBBdHRyaWJ1dGUuZ2V0KGVsZW1lbnQsIGF0dHIpO1xuICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gJycgPyBbXSA6IHZhbHVlLnNwbGl0KCcgJyk7XG59O1xuXG5jb25zdCBhZGQgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PEVsZW1lbnQ+LCBhdHRyOiBzdHJpbmcsIGlkOiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgY29uc3Qgb2xkID0gcmVhZChlbGVtZW50LCBhdHRyKTtcbiAgY29uc3QgbnUgPSBvbGQuY29uY2F0KFsgaWQgXSk7XG4gIEF0dHJpYnV0ZS5zZXQoZWxlbWVudCwgYXR0ciwgbnUuam9pbignICcpKTtcbiAgcmV0dXJuIHRydWU7XG59O1xuXG5jb25zdCByZW1vdmUgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PEVsZW1lbnQ+LCBhdHRyOiBzdHJpbmcsIGlkOiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgY29uc3QgbnUgPSBBcnIuZmlsdGVyKHJlYWQoZWxlbWVudCwgYXR0ciksICh2KSA9PiB2ICE9PSBpZCk7XG4gIGlmIChudS5sZW5ndGggPiAwKSB7XG4gICAgQXR0cmlidXRlLnNldChlbGVtZW50LCBhdHRyLCBudS5qb2luKCcgJykpO1xuICB9IGVsc2Uge1xuICAgIEF0dHJpYnV0ZS5yZW1vdmUoZWxlbWVudCwgYXR0cik7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IHtcbiAgcmVhZCxcbiAgYWRkLFxuICByZW1vdmVcbn07XG4iLCJpbXBvcnQgeyBBcnIsIE9iaiwgT3B0aW9uYWwsIFR5cGUgfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5pbXBvcnQgdHlwZSB7IFN1Z2FyRWxlbWVudCB9IGZyb20gJy4uL25vZGUvU3VnYXJFbGVtZW50JztcbmltcG9ydCAqIGFzIFN1Z2FyTm9kZSBmcm9tICcuLi9ub2RlL1N1Z2FyTm9kZSc7XG5cbmNvbnN0IHJhd1NldCA9IChkb206IEVsZW1lbnQsIGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIHwgYm9vbGVhbiB8IG51bWJlcik6IHZvaWQgPT4ge1xuICAvKlxuICAgKiBKUXVlcnkgY29lcmNlZCBldmVyeXRoaW5nIHRvIGEgc3RyaW5nLCBhbmQgc2lsZW50bHkgZGlkIG5vdGhpbmcgb24gdGV4dCBub2RlL251bGwvdW5kZWZpbmVkLlxuICAgKlxuICAgKiBXZSBmYWlsIG9uIHRob3NlIGludmFsaWQgY2FzZXMsIG9ubHkgYWxsb3dpbmcgbnVtYmVycyBhbmQgYm9vbGVhbnMuXG4gICAqL1xuICBpZiAoVHlwZS5pc1N0cmluZyh2YWx1ZSkgfHwgVHlwZS5pc0Jvb2xlYW4odmFsdWUpIHx8IFR5cGUuaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgZG9tLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlICsgJycpO1xuICB9IGVsc2Uge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5lcnJvcignSW52YWxpZCBjYWxsIHRvIEF0dHJpYnV0ZS5zZXQuIEtleSAnLCBrZXksICc6OiBWYWx1ZSAnLCB2YWx1ZSwgJzo6IEVsZW1lbnQgJywgZG9tKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0F0dHJpYnV0ZSB2YWx1ZSB3YXMgbm90IHNpbXBsZScpO1xuICB9XG59O1xuXG5jb25zdCBzZXQgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PEVsZW1lbnQ+LCBrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyB8IGJvb2xlYW4gfCBudW1iZXIpOiB2b2lkID0+IHtcbiAgcmF3U2V0KGVsZW1lbnQuZG9tLCBrZXksIHZhbHVlKTtcbn07XG5cbmNvbnN0IHNldEFsbCA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8RWxlbWVudD4sIGF0dHJzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBib29sZWFuIHwgbnVtYmVyPik6IHZvaWQgPT4ge1xuICBjb25zdCBkb20gPSBlbGVtZW50LmRvbTtcbiAgT2JqLmVhY2goYXR0cnMsICh2LCBrKSA9PiB7XG4gICAgcmF3U2V0KGRvbSwgaywgdik7XG4gIH0pO1xufTtcblxuY29uc3Qgc2V0T3B0aW9ucyA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8RWxlbWVudD4sIGF0dHJzOiBSZWNvcmQ8c3RyaW5nLCBPcHRpb25hbDxzdHJpbmcgfCBib29sZWFuIHwgbnVtYmVyPj4pOiB2b2lkID0+IHtcbiAgT2JqLmVhY2goYXR0cnMsICh2LCBrKSA9PiB7XG4gICAgdi5mb2xkKCgpID0+IHtcbiAgICAgIHJlbW92ZShlbGVtZW50LCBrKTtcbiAgICB9LCAodmFsdWUpID0+IHtcbiAgICAgIHJhd1NldChlbGVtZW50LmRvbSwgaywgdmFsdWUpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IGdldCA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8RWxlbWVudD4sIGtleTogc3RyaW5nKTogdW5kZWZpbmVkIHwgc3RyaW5nID0+IHtcbiAgY29uc3QgdiA9IGVsZW1lbnQuZG9tLmdldEF0dHJpYnV0ZShrZXkpO1xuXG4gIC8vIHVuZGVmaW5lZCBpcyB0aGUgbW9yZSBhcHByb3ByaWF0ZSB2YWx1ZSBmb3IgSlMsIGFuZCB0aGlzIG1hdGNoZXMgSlF1ZXJ5XG4gIHJldHVybiB2ID09PSBudWxsID8gdW5kZWZpbmVkIDogdjtcbn07XG5cbmNvbnN0IGdldE9wdCA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8RWxlbWVudD4sIGtleTogc3RyaW5nKTogT3B0aW9uYWw8c3RyaW5nPiA9PlxuICBPcHRpb25hbC5mcm9tKGdldChlbGVtZW50LCBrZXkpKTtcblxuY29uc3QgaGFzID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPiwga2V5OiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgY29uc3QgZG9tID0gZWxlbWVudC5kb207XG5cbiAgLy8gcmV0dXJuIGZhbHNlIGZvciBub24tZWxlbWVudCBub2Rlcywgbm8gcG9pbnQgaW4gdGhyb3dpbmcgYW4gZXJyb3JcbiAgcmV0dXJuIGRvbSAmJiAoZG9tIGFzIEVsZW1lbnQpLmhhc0F0dHJpYnV0ZSA/IChkb20gYXMgRWxlbWVudCkuaGFzQXR0cmlidXRlKGtleSkgOiBmYWxzZTtcbn07XG5cbmNvbnN0IHJlbW92ZSA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8RWxlbWVudD4sIGtleTogc3RyaW5nKTogdm9pZCA9PiB7XG4gIGVsZW1lbnQuZG9tLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xufTtcblxuY29uc3QgaGFzTm9uZSA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBib29sZWFuID0+IHtcbiAgY29uc3QgYXR0cnMgPSAoZWxlbWVudC5kb20gYXMgRWxlbWVudCkuYXR0cmlidXRlcztcbiAgcmV0dXJuIGF0dHJzID09PSB1bmRlZmluZWQgfHwgYXR0cnMgPT09IG51bGwgfHwgYXR0cnMubGVuZ3RoID09PSAwO1xufTtcblxuY29uc3QgY2xvbmUgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PEVsZW1lbnQ+KTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9PlxuICBBcnIuZm9sZGwoZWxlbWVudC5kb20uYXR0cmlidXRlcywgKGFjYywgYXR0cikgPT4ge1xuICAgIGFjY1thdHRyLm5hbWVdID0gYXR0ci52YWx1ZTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KTtcblxuY29uc3QgdHJhbnNmZXJPbmUgPSAoc291cmNlOiBTdWdhckVsZW1lbnQ8RWxlbWVudD4sIGRlc3RpbmF0aW9uOiBTdWdhckVsZW1lbnQ8RWxlbWVudD4sIGF0dHI6IHN0cmluZyk6IHZvaWQgPT4ge1xuICAvLyBOT1RFOiBXZSBkb24ndCB3YW50IHRvIGNsb2JiZXIgYW55IGV4aXN0aW5nIGF0dHJpYnV0ZXNcbiAgaWYgKCFoYXMoZGVzdGluYXRpb24sIGF0dHIpKSB7XG4gICAgZ2V0T3B0KHNvdXJjZSwgYXR0cikuZWFjaCgoc3JjVmFsdWUpID0+IHNldChkZXN0aW5hdGlvbiwgYXR0ciwgc3JjVmFsdWUpKTtcbiAgfVxufTtcblxuLy8gVHJhbnNmZXIgYXR0cmlidXRlcyhhdHRycykgZnJvbSBzb3VyY2UgdG8gZGVzdGluYXRpb24sIHVubGVzcyB0aGV5IGFyZSBhbHJlYWR5IHByZXNlbnRcbmNvbnN0IHRyYW5zZmVyID0gKHNvdXJjZTogU3VnYXJFbGVtZW50PEVsZW1lbnQ+LCBkZXN0aW5hdGlvbjogU3VnYXJFbGVtZW50PEVsZW1lbnQ+LCBhdHRyczogc3RyaW5nW10pOiB2b2lkID0+IHtcbiAgaWYgKCFTdWdhck5vZGUuaXNFbGVtZW50KHNvdXJjZSkgfHwgIVN1Z2FyTm9kZS5pc0VsZW1lbnQoZGVzdGluYXRpb24pKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIEFyci5lYWNoKGF0dHJzLCAoYXR0cikgPT4ge1xuICAgIHRyYW5zZmVyT25lKHNvdXJjZSwgZGVzdGluYXRpb24sIGF0dHIpO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IGNsb25lLCBzZXQsIHNldEFsbCwgc2V0T3B0aW9ucywgZ2V0LCBnZXRPcHQsIGhhcywgcmVtb3ZlLCBoYXNOb25lLCB0cmFuc2ZlciB9O1xuIiwiaW1wb3J0ICogYXMgQ2xhc3NMaXN0IGZyb20gJy4uLy4uL2ltcGwvQ2xhc3NMaXN0JztcbmltcG9ydCB0eXBlIHsgU3VnYXJFbGVtZW50IH0gZnJvbSAnLi4vbm9kZS9TdWdhckVsZW1lbnQnO1xuXG5pbXBvcnQgKiBhcyBBdHRyaWJ1dGUgZnJvbSAnLi9BdHRyaWJ1dGUnO1xuaW1wb3J0IHsgVG9nZ2xlciB9IGZyb20gJy4vVG9nZ2xlcic7XG5cbi8qXG4gKiBDbGFzc0xpc3QgaXMgSUUxMCBtaW5pbXVtOlxuICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0VsZW1lbnQuY2xhc3NMaXN0XG4gKlxuICogTm90ZSB0aGF0IElFIGRvZXNuJ3Qgc3VwcG9ydCB0aGUgc2Vjb25kIGFyZ3VtZW50IHRvIHRvZ2dsZSAoYXQgYWxsKS5cbiAqIElmIGl0IGRpZCwgdGhlIHRvZ2dsZXIgY291bGQgYmUgYmV0dGVyLlxuICovXG5cbmNvbnN0IGFkZCA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8RWxlbWVudD4sIGNsYXp6OiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgaWYgKENsYXNzTGlzdC5zdXBwb3J0cyhlbGVtZW50KSkge1xuICAgIGVsZW1lbnQuZG9tLmNsYXNzTGlzdC5hZGQoY2xhenopO1xuICB9IGVsc2Uge1xuICAgIENsYXNzTGlzdC5hZGQoZWxlbWVudCwgY2xhenopO1xuICB9XG59O1xuXG5jb25zdCBjbGVhbkNsYXNzID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxFbGVtZW50Pik6IHZvaWQgPT4ge1xuICBjb25zdCBjbGFzc0xpc3QgPSBDbGFzc0xpc3Quc3VwcG9ydHMoZWxlbWVudCkgPyBlbGVtZW50LmRvbS5jbGFzc0xpc3QgOiBDbGFzc0xpc3QuZ2V0KGVsZW1lbnQpO1xuICAvLyBjbGFzc0xpc3QgaXMgYSBcImxpdmUgbGlzdFwiLCBzbyB0aGlzIGlzIHVwIHRvIGRhdGUgYWxyZWFkeVxuICBpZiAoY2xhc3NMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIC8vIE5vIG1vcmUgY2xhc3NlcyBsZWZ0LCByZW1vdmUgdGhlIGNsYXNzIGF0dHJpYnV0ZSBhcyB3ZWxsXG4gICAgQXR0cmlidXRlLnJlbW92ZShlbGVtZW50LCAnY2xhc3MnKTtcbiAgfVxufTtcblxuY29uc3QgcmVtb3ZlID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxFbGVtZW50PiwgY2xheno6IHN0cmluZyk6IHZvaWQgPT4ge1xuICBpZiAoQ2xhc3NMaXN0LnN1cHBvcnRzKGVsZW1lbnQpKSB7XG4gICAgY29uc3QgY2xhc3NMaXN0ID0gZWxlbWVudC5kb20uY2xhc3NMaXN0O1xuICAgIGNsYXNzTGlzdC5yZW1vdmUoY2xhenopO1xuICB9IGVsc2Uge1xuICAgIENsYXNzTGlzdC5yZW1vdmUoZWxlbWVudCwgY2xhenopO1xuICB9XG5cbiAgY2xlYW5DbGFzcyhlbGVtZW50KTtcbn07XG5cbmNvbnN0IHRvZ2dsZSA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8RWxlbWVudD4sIGNsYXp6OiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gQ2xhc3NMaXN0LnN1cHBvcnRzKGVsZW1lbnQpID8gZWxlbWVudC5kb20uY2xhc3NMaXN0LnRvZ2dsZShjbGF6eikgOiBDbGFzc0xpc3QudG9nZ2xlKGVsZW1lbnQsIGNsYXp6KTtcbiAgY2xlYW5DbGFzcyhlbGVtZW50KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmNvbnN0IHRvZ2dsZXIgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PEVsZW1lbnQ+LCBjbGF6ejogc3RyaW5nKTogVG9nZ2xlciA9PiB7XG4gIGNvbnN0IGhhc0NsYXNzbGlzdCA9IENsYXNzTGlzdC5zdXBwb3J0cyhlbGVtZW50KTtcbiAgY29uc3QgY2xhc3NMaXN0ID0gZWxlbWVudC5kb20uY2xhc3NMaXN0O1xuICBjb25zdCBvZmYgPSAoKSA9PiB7XG4gICAgaWYgKGhhc0NsYXNzbGlzdCkge1xuICAgICAgY2xhc3NMaXN0LnJlbW92ZShjbGF6eik7XG4gICAgfSBlbHNlIHtcbiAgICAgIENsYXNzTGlzdC5yZW1vdmUoZWxlbWVudCwgY2xhenopO1xuICAgIH1cbiAgICBjbGVhbkNsYXNzKGVsZW1lbnQpO1xuICB9O1xuICBjb25zdCBvbiA9ICgpID0+IHtcbiAgICBpZiAoaGFzQ2xhc3NsaXN0KSB7XG4gICAgICBjbGFzc0xpc3QuYWRkKGNsYXp6KTtcbiAgICB9IGVsc2Uge1xuICAgICAgQ2xhc3NMaXN0LmFkZChlbGVtZW50LCBjbGF6eik7XG4gICAgfVxuICB9O1xuICByZXR1cm4gVG9nZ2xlcihvZmYsIG9uLCBoYXMoZWxlbWVudCwgY2xhenopKTtcbn07XG5cbmNvbnN0IGhhcyA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4sIGNsYXp6OiBzdHJpbmcpOiBib29sZWFuID0+XG4gIENsYXNzTGlzdC5zdXBwb3J0cyhlbGVtZW50KSAmJiBlbGVtZW50LmRvbS5jbGFzc0xpc3QuY29udGFpbnMoY2xhenopO1xuXG5leHBvcnQge1xuICBhZGQsXG4gIHJlbW92ZSxcbiAgdG9nZ2xlLFxuICB0b2dnbGVyLFxuICBoYXNcbn07XG4iLCJpbXBvcnQgeyBGdW4sIHR5cGUgT3B0aW9uYWwgfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5pbXBvcnQgKiBhcyBTdWdhckJvZHkgZnJvbSAnLi4vbm9kZS9TdWdhckJvZHknO1xuaW1wb3J0IHR5cGUgeyBTdWdhckVsZW1lbnQgfSBmcm9tICcuLi9ub2RlL1N1Z2FyRWxlbWVudCc7XG5pbXBvcnQgKiBhcyBTZWxlY3RvckZpbmQgZnJvbSAnLi4vc2VhcmNoL1NlbGVjdG9yRmluZCc7XG5cbmNvbnN0IGNsb3Nlc3QgPSAodGFyZ2V0OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBPcHRpb25hbDxTdWdhckVsZW1lbnQ8SFRNTEVsZW1lbnQ+PiA9PlxuICBTZWxlY3RvckZpbmQuY2xvc2VzdCh0YXJnZXQsICdbY29udGVudGVkaXRhYmxlXScpO1xuXG5jb25zdCBpc0VkaXRhYmxlID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxIVE1MRWxlbWVudD4sIGFzc3VtZUVkaXRhYmxlOiBib29sZWFuID0gZmFsc2UpOiBib29sZWFuID0+IHtcbiAgaWYgKFN1Z2FyQm9keS5pbkJvZHkoZWxlbWVudCkpIHtcbiAgICByZXR1cm4gZWxlbWVudC5kb20uaXNDb250ZW50RWRpdGFibGU7XG4gIH0gZWxzZSB7XG4gICAgLy8gRmluZCB0aGUgY2xvc2VzdCBjb250ZW50ZWRpdGFibGUgZWxlbWVudCBhbmQgY2hlY2sgaWYgaXQncyBlZGl0YWJsZVxuICAgIHJldHVybiBjbG9zZXN0KGVsZW1lbnQpLmZvbGQoXG4gICAgICBGdW4uY29uc3RhbnQoYXNzdW1lRWRpdGFibGUpLFxuICAgICAgKGVkaXRhYmxlKSA9PiBnZXRSYXcoZWRpdGFibGUpID09PSAndHJ1ZSdcbiAgICApO1xuICB9XG59O1xuXG5jb25zdCBnZXRSYXcgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PEhUTUxFbGVtZW50Pik6IHN0cmluZyA9PlxuICBlbGVtZW50LmRvbS5jb250ZW50RWRpdGFibGU7XG5cbmNvbnN0IGdldCA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8SFRNTEVsZW1lbnQ+KTogYm9vbGVhbiA9PlxuICBpc0VkaXRhYmxlKGVsZW1lbnQsIGZhbHNlKTtcblxuY29uc3Qgc2V0ID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxIVE1MRWxlbWVudD4sIGVkaXRhYmxlOiBib29sZWFuKTogdm9pZCA9PiB7XG4gIGVsZW1lbnQuZG9tLmNvbnRlbnRFZGl0YWJsZSA9IGVkaXRhYmxlID8gJ3RydWUnIDogJ2ZhbHNlJztcbn07XG5cbmV4cG9ydCB7XG4gIGdldCxcbiAgZ2V0UmF3LFxuICBjbG9zZXN0LFxuICBpc0VkaXRhYmxlLFxuICBzZXRcbn07XG4iLCJleHBvcnQgaW50ZXJmYWNlIFRvZ2dsZXIge1xuICByZWFkb25seSBvbjogKCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb2ZmOiAoKSA9PiB2b2lkO1xuICByZWFkb25seSB0b2dnbGU6ICgpID0+IHZvaWQ7XG4gIHJlYWRvbmx5IGlzT246ICgpID0+IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBUb2dnbGVyID0gKHR1cm5PZmY6ICgpID0+IHZvaWQsIHR1cm5PbjogKCkgPT4gdm9pZCwgaW5pdGlhbDogYm9vbGVhbik6IFRvZ2dsZXIgPT4ge1xuICBsZXQgYWN0aXZlID0gaW5pdGlhbCB8fCBmYWxzZTtcblxuICBjb25zdCBvbiA9ICgpID0+IHtcbiAgICB0dXJuT24oKTtcbiAgICBhY3RpdmUgPSB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IG9mZiA9ICgpID0+IHtcbiAgICB0dXJuT2ZmKCk7XG4gICAgYWN0aXZlID0gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlID0gKCkgPT4ge1xuICAgIGNvbnN0IGYgPSBhY3RpdmUgPyBvZmYgOiBvbjtcbiAgICBmKCk7XG4gIH07XG5cbiAgY29uc3QgaXNPbiA9ICgpID0+IGFjdGl2ZTtcblxuICByZXR1cm4ge1xuICAgIG9uLFxuICAgIG9mZixcbiAgICB0b2dnbGUsXG4gICAgaXNPblxuICB9O1xufTtcbiIsImltcG9ydCB7IEFyciwgRnVuLCBPcHRpb25hbCwgVHlwZSB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmltcG9ydCBDbG9zZXN0T3JBbmNlc3RvciBmcm9tICcuLi8uLi9pbXBsL0Nsb3Nlc3RPckFuY2VzdG9yJztcbmltcG9ydCAqIGFzIENvbXBhcmUgZnJvbSAnLi4vZG9tL0NvbXBhcmUnO1xuaW1wb3J0ICogYXMgU3VnYXJCb2R5IGZyb20gJy4uL25vZGUvU3VnYXJCb2R5JztcbmltcG9ydCB7IFN1Z2FyRWxlbWVudCB9IGZyb20gJy4uL25vZGUvU3VnYXJFbGVtZW50JztcblxuY29uc3QgZmlyc3Q6IHtcbiAgPFQgZXh0ZW5kcyBOb2RlID0gTm9kZT4gKHByZWRpY2F0ZTogKGU6IFN1Z2FyRWxlbWVudDxOb2RlPikgPT4gZSBpcyBTdWdhckVsZW1lbnQ8VD4pOiBPcHRpb25hbDxTdWdhckVsZW1lbnQ8VCAmIENoaWxkTm9kZT4+O1xuICAocHJlZGljYXRlOiAoZTogU3VnYXJFbGVtZW50PE5vZGU+KSA9PiBib29sZWFuKTogT3B0aW9uYWw8U3VnYXJFbGVtZW50PE5vZGUgJiBDaGlsZE5vZGU+Pjtcbn0gPSAocHJlZGljYXRlOiAoZTogU3VnYXJFbGVtZW50PE5vZGU+KSA9PiBib29sZWFuKSA9PlxuICBkZXNjZW5kYW50KFN1Z2FyQm9keS5ib2R5KCksIHByZWRpY2F0ZSk7XG5cbmNvbnN0IGFuY2VzdG9yOiB7XG4gIDxUIGV4dGVuZHMgTm9kZSA9IE5vZGU+IChzY29wZTogU3VnYXJFbGVtZW50PE5vZGU+LCBwcmVkaWNhdGU6IChlOiBTdWdhckVsZW1lbnQ8Tm9kZT4pID0+IGUgaXMgU3VnYXJFbGVtZW50PFQ+LCBpc1Jvb3Q/OiAoZTogU3VnYXJFbGVtZW50PE5vZGU+KSA9PiBib29sZWFuKTogT3B0aW9uYWw8U3VnYXJFbGVtZW50PFQ+PjtcbiAgKHNjb3BlOiBTdWdhckVsZW1lbnQ8Tm9kZT4sIHByZWRpY2F0ZTogKGU6IFN1Z2FyRWxlbWVudDxOb2RlPikgPT4gYm9vbGVhbiwgaXNSb290PzogKGU6IFN1Z2FyRWxlbWVudDxOb2RlPikgPT4gYm9vbGVhbik6IE9wdGlvbmFsPFN1Z2FyRWxlbWVudDxOb2RlPj47XG59ID0gKHNjb3BlOiBTdWdhckVsZW1lbnQ8Tm9kZT4sIHByZWRpY2F0ZTogKGU6IFN1Z2FyRWxlbWVudDxOb2RlPikgPT4gYm9vbGVhbiwgaXNSb290PzogKGU6IFN1Z2FyRWxlbWVudDxOb2RlPikgPT4gYm9vbGVhbikgPT4ge1xuICBsZXQgZWxlbWVudCA9IHNjb3BlLmRvbTtcbiAgY29uc3Qgc3RvcCA9IFR5cGUuaXNGdW5jdGlvbihpc1Jvb3QpID8gaXNSb290IDogRnVuLm5ldmVyO1xuXG4gIHdoaWxlIChlbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuICAgIGNvbnN0IGVsID0gU3VnYXJFbGVtZW50LmZyb21Eb20oZWxlbWVudCk7XG5cbiAgICBpZiAocHJlZGljYXRlKGVsKSkge1xuICAgICAgcmV0dXJuIE9wdGlvbmFsLnNvbWUoZWwpO1xuICAgIH0gZWxzZSBpZiAoc3RvcChlbCkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gT3B0aW9uYWwubm9uZTxTdWdhckVsZW1lbnQ8Tm9kZT4+KCk7XG59O1xuXG5jb25zdCBjbG9zZXN0OiB7XG4gIDxUIGV4dGVuZHMgTm9kZSA9IE5vZGU+IChzY29wZTogU3VnYXJFbGVtZW50PE5vZGU+LCBwcmVkaWNhdGU6IChlOiBTdWdhckVsZW1lbnQ8Tm9kZT4pID0+IGUgaXMgU3VnYXJFbGVtZW50PFQ+LCBpc1Jvb3Q/OiAoZTogU3VnYXJFbGVtZW50PE5vZGU+KSA9PiBib29sZWFuKTogT3B0aW9uYWw8U3VnYXJFbGVtZW50PFQ+PjtcbiAgKHNjb3BlOiBTdWdhckVsZW1lbnQ8Tm9kZT4sIHByZWRpY2F0ZTogKGU6IFN1Z2FyRWxlbWVudDxOb2RlPikgPT4gYm9vbGVhbiwgaXNSb290PzogKGU6IFN1Z2FyRWxlbWVudDxOb2RlPikgPT4gYm9vbGVhbik6IE9wdGlvbmFsPFN1Z2FyRWxlbWVudDxOb2RlPj47XG59ID0gKHNjb3BlOiBTdWdhckVsZW1lbnQ8Tm9kZT4sIHByZWRpY2F0ZTogKGU6IFN1Z2FyRWxlbWVudDxOb2RlPikgPT4gYm9vbGVhbiwgaXNSb290PzogKGU6IFN1Z2FyRWxlbWVudDxOb2RlPikgPT4gYm9vbGVhbikgPT4ge1xuICAvLyBUaGlzIGlzIHJlcXVpcmVkIHRvIGF2b2lkIENsb3Nlc3RPckFuY2VzdG9yIHBhc3NpbmcgdGhlIHByZWRpY2F0ZSB0byBpdHNlbGZcbiAgY29uc3QgaXMgPSAoczogU3VnYXJFbGVtZW50PE5vZGU+LCB0ZXN0OiAoZTogU3VnYXJFbGVtZW50PE5vZGU+KSA9PiBib29sZWFuKTogcyBpcyBTdWdhckVsZW1lbnQ8Tm9kZT4gPT4gdGVzdChzKTtcbiAgcmV0dXJuIENsb3Nlc3RPckFuY2VzdG9yKGlzLCBhbmNlc3Rvciwgc2NvcGUsIHByZWRpY2F0ZSwgaXNSb290KTtcbn07XG5cbmNvbnN0IHNpYmxpbmc6IHtcbiAgPFQgZXh0ZW5kcyBOb2RlID0gTm9kZT4gKHNjb3BlOiBTdWdhckVsZW1lbnQ8Tm9kZT4sIHByZWRpY2F0ZTogKGU6IFN1Z2FyRWxlbWVudDxOb2RlPikgPT4gZSBpcyBTdWdhckVsZW1lbnQ8VD4pOiBPcHRpb25hbDxTdWdhckVsZW1lbnQ8VCAmIENoaWxkTm9kZT4+O1xuICAoc2NvcGU6IFN1Z2FyRWxlbWVudDxOb2RlPiwgcHJlZGljYXRlOiAoZTogU3VnYXJFbGVtZW50PE5vZGU+KSA9PiBib29sZWFuKTogT3B0aW9uYWw8U3VnYXJFbGVtZW50PE5vZGUgJiBDaGlsZE5vZGU+Pjtcbn0gPSAoc2NvcGU6IFN1Z2FyRWxlbWVudDxOb2RlPiwgcHJlZGljYXRlOiAoZTogU3VnYXJFbGVtZW50PE5vZGU+KSA9PiBib29sZWFuKTogT3B0aW9uYWw8U3VnYXJFbGVtZW50PE5vZGUgJiBDaGlsZE5vZGU+PiA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBzY29wZS5kb207XG4gIGlmICghZWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgcmV0dXJuIE9wdGlvbmFsLm5vbmU8U3VnYXJFbGVtZW50PE5vZGUgJiBDaGlsZE5vZGU+PigpO1xuICB9XG5cbiAgcmV0dXJuIGNoaWxkKFN1Z2FyRWxlbWVudC5mcm9tRG9tKGVsZW1lbnQucGFyZW50Tm9kZSksICh4KSA9PiAhQ29tcGFyZS5lcShzY29wZSwgeCkgJiYgcHJlZGljYXRlKHgpKTtcbn07XG5cbmNvbnN0IGNoaWxkOiB7XG4gIDxUIGV4dGVuZHMgTm9kZSA9IE5vZGU+IChzY29wZTogU3VnYXJFbGVtZW50PE5vZGU+LCBwcmVkaWNhdGU6IChlOiBTdWdhckVsZW1lbnQ8Tm9kZT4pID0+IGUgaXMgU3VnYXJFbGVtZW50PFQ+KTogT3B0aW9uYWw8U3VnYXJFbGVtZW50PFQgJiBDaGlsZE5vZGU+PjtcbiAgKHNjb3BlOiBTdWdhckVsZW1lbnQ8Tm9kZT4sIHByZWRpY2F0ZTogKGU6IFN1Z2FyRWxlbWVudDxOb2RlPikgPT4gYm9vbGVhbik6IE9wdGlvbmFsPFN1Z2FyRWxlbWVudDxOb2RlICYgQ2hpbGROb2RlPj47XG59ID0gKHNjb3BlOiBTdWdhckVsZW1lbnQ8Tm9kZT4sIHByZWRpY2F0ZTogKGU6IFN1Z2FyRWxlbWVudDxOb2RlPikgPT4gYm9vbGVhbikgPT4ge1xuICBjb25zdCBwcmVkID0gKG5vZGU6IE5vZGUpID0+IHByZWRpY2F0ZShTdWdhckVsZW1lbnQuZnJvbURvbShub2RlKSk7XG4gIGNvbnN0IHJlc3VsdCA9IEFyci5maW5kKHNjb3BlLmRvbS5jaGlsZE5vZGVzLCBwcmVkKTtcbiAgcmV0dXJuIHJlc3VsdC5tYXAoU3VnYXJFbGVtZW50LmZyb21Eb20pO1xufTtcblxuY29uc3QgZGVzY2VuZGFudDoge1xuICA8VCBleHRlbmRzIE5vZGUgPSBOb2RlPiAoc2NvcGU6IFN1Z2FyRWxlbWVudDxOb2RlPiwgcHJlZGljYXRlOiAoZTogU3VnYXJFbGVtZW50PE5vZGU+KSA9PiBlIGlzIFN1Z2FyRWxlbWVudDxUPik6IE9wdGlvbmFsPFN1Z2FyRWxlbWVudDxUICYgQ2hpbGROb2RlPj47XG4gIChzY29wZTogU3VnYXJFbGVtZW50PE5vZGU+LCBwcmVkaWNhdGU6IChlOiBTdWdhckVsZW1lbnQ8Tm9kZT4pID0+IGJvb2xlYW4pOiBPcHRpb25hbDxTdWdhckVsZW1lbnQ8Tm9kZSAmIENoaWxkTm9kZT4+O1xufSA9IChzY29wZTogU3VnYXJFbGVtZW50PE5vZGU+LCBwcmVkaWNhdGU6IChlOiBTdWdhckVsZW1lbnQ8Tm9kZT4pID0+IGJvb2xlYW4pID0+IHtcbiAgY29uc3QgZGVzY2VuZCA9IChub2RlOiBOb2RlKTogT3B0aW9uYWw8U3VnYXJFbGVtZW50PE5vZGUgJiBDaGlsZE5vZGU+PiA9PiB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnByZWZlci1mb3Itb2ZcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGUuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY2hpbGQgPSBTdWdhckVsZW1lbnQuZnJvbURvbShub2RlLmNoaWxkTm9kZXNbaV0pO1xuICAgICAgaWYgKHByZWRpY2F0ZShjaGlsZCkpIHtcbiAgICAgICAgcmV0dXJuIE9wdGlvbmFsLnNvbWUoY2hpbGQpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCByZXMgPSBkZXNjZW5kKG5vZGUuY2hpbGROb2Rlc1tpXSk7XG4gICAgICBpZiAocmVzLmlzU29tZSgpKSB7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIE9wdGlvbmFsLm5vbmU8U3VnYXJFbGVtZW50PE5vZGUgJiBDaGlsZE5vZGU+PigpO1xuICB9O1xuXG4gIHJldHVybiBkZXNjZW5kKHNjb3BlLmRvbSk7XG59O1xuXG5leHBvcnQgeyBmaXJzdCwgYW5jZXN0b3IsIGNsb3Nlc3QsIHNpYmxpbmcsIGNoaWxkLCBkZXNjZW5kYW50IH07XG4iLCJpbXBvcnQgdHlwZSB7IE9wdGlvbmFsIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0IENsb3Nlc3RPckFuY2VzdG9yIGZyb20gJy4uLy4uL2ltcGwvQ2xvc2VzdE9yQW5jZXN0b3InO1xuaW1wb3J0IHR5cGUgeyBTdWdhckVsZW1lbnQgfSBmcm9tICcuLi9ub2RlL1N1Z2FyRWxlbWVudCc7XG5cbmltcG9ydCAqIGFzIFByZWRpY2F0ZUZpbmQgZnJvbSAnLi9QcmVkaWNhdGVGaW5kJztcbmltcG9ydCAqIGFzIFNlbGVjdG9ycyBmcm9tICcuL1NlbGVjdG9ycyc7XG5cbi8vIFRPRE86IEFuIGludGVybmFsIFNlbGVjdG9yRmlsdGVyIG1vZHVsZSB0aGF0IGRvZXNuJ3QgU3VnYXJFbGVtZW50LmZyb21Eb20oKSBldmVyeXRoaW5nXG5cbmNvbnN0IGZpcnN0ID0gPFQgZXh0ZW5kcyBFbGVtZW50ID0gRWxlbWVudD4gKHNlbGVjdG9yOiBzdHJpbmcpOiBPcHRpb25hbDxTdWdhckVsZW1lbnQ8VD4+ID0+XG4gIFNlbGVjdG9ycy5vbmU8VD4oc2VsZWN0b3IpO1xuXG5jb25zdCBhbmNlc3RvciA9IDxUIGV4dGVuZHMgRWxlbWVudCA9IEVsZW1lbnQ+IChzY29wZTogU3VnYXJFbGVtZW50PE5vZGU+LCBzZWxlY3Rvcjogc3RyaW5nLCBpc1Jvb3Q/OiAoZTogU3VnYXJFbGVtZW50PE5vZGU+KSA9PiBib29sZWFuKTogT3B0aW9uYWw8U3VnYXJFbGVtZW50PFQ+PiA9PlxuICBQcmVkaWNhdGVGaW5kLmFuY2VzdG9yKHNjb3BlLCAoZSk6IGUgaXMgU3VnYXJFbGVtZW50PFQ+ID0+IFNlbGVjdG9ycy5pczxUPihlLCBzZWxlY3RvciksIGlzUm9vdCk7XG5cbmNvbnN0IHNpYmxpbmcgPSA8VCBleHRlbmRzIEVsZW1lbnQgPSBFbGVtZW50PiAoc2NvcGU6IFN1Z2FyRWxlbWVudDxOb2RlPiwgc2VsZWN0b3I6IHN0cmluZyk6IE9wdGlvbmFsPFN1Z2FyRWxlbWVudDxUPj4gPT5cbiAgUHJlZGljYXRlRmluZC5zaWJsaW5nKHNjb3BlLCAoZSk6IGUgaXMgU3VnYXJFbGVtZW50PFQ+ID0+IFNlbGVjdG9ycy5pczxUPihlLCBzZWxlY3RvcikpO1xuXG5jb25zdCBjaGlsZCA9IDxUIGV4dGVuZHMgRWxlbWVudCA9IEVsZW1lbnQ+IChzY29wZTogU3VnYXJFbGVtZW50PE5vZGU+LCBzZWxlY3Rvcjogc3RyaW5nKTogT3B0aW9uYWw8U3VnYXJFbGVtZW50PFQ+PiA9PlxuICBQcmVkaWNhdGVGaW5kLmNoaWxkKHNjb3BlLCAoZSk6IGUgaXMgU3VnYXJFbGVtZW50PFQ+ID0+IFNlbGVjdG9ycy5pczxUPihlLCBzZWxlY3RvcikpO1xuXG5jb25zdCBkZXNjZW5kYW50ID0gPFQgZXh0ZW5kcyBFbGVtZW50ID0gRWxlbWVudD4gKHNjb3BlOiBTdWdhckVsZW1lbnQ8Tm9kZT4sIHNlbGVjdG9yOiBzdHJpbmcpOiBPcHRpb25hbDxTdWdhckVsZW1lbnQ8VD4+ID0+XG4gIFNlbGVjdG9ycy5vbmU8VD4oc2VsZWN0b3IsIHNjb3BlKTtcblxuLy8gUmV0dXJucyBTb21lKGNsb3Nlc3QgYW5jZXN0b3IgZWxlbWVudCAoc3VnYXJlZCkpIG1hdGNoaW5nICdzZWxlY3RvcicgdXAgdG8gaXNSb290LCBvciBOb25lKCkgb3RoZXJ3aXNlXG5jb25zdCBjbG9zZXN0ID0gPFQgZXh0ZW5kcyBFbGVtZW50ID0gRWxlbWVudD4gKHNjb3BlOiBTdWdhckVsZW1lbnQ8Tm9kZT4sIHNlbGVjdG9yOiBzdHJpbmcsIGlzUm9vdD86IChlOiBTdWdhckVsZW1lbnQ8Tm9kZT4pID0+IGJvb2xlYW4pOiBPcHRpb25hbDxTdWdhckVsZW1lbnQ8VD4+ID0+IHtcbiAgY29uc3QgaXMgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+LCBzZWxlY3Rvcjogc3RyaW5nKTogZWxlbWVudCBpcyBTdWdhckVsZW1lbnQ8VD4gPT4gU2VsZWN0b3JzLmlzPFQ+KGVsZW1lbnQsIHNlbGVjdG9yKTtcbiAgcmV0dXJuIENsb3Nlc3RPckFuY2VzdG9yPHN0cmluZywgVD4oaXMsIGFuY2VzdG9yLCBzY29wZSwgc2VsZWN0b3IsIGlzUm9vdCk7XG59O1xuXG5leHBvcnQge1xuICBmaXJzdCxcbiAgYW5jZXN0b3IsXG4gIHNpYmxpbmcsXG4gIGNoaWxkLFxuICBkZXNjZW5kYW50LFxuICBjbG9zZXN0XG59O1xuIiwiaW1wb3J0IHsgQXJyLCBPcHRpb25hbCB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmltcG9ydCB7IERPQ1VNRU5ULCBET0NVTUVOVF9GUkFHTUVOVCwgRUxFTUVOVCB9IGZyb20gJy4uL25vZGUvTm9kZVR5cGVzJztcbmltcG9ydCB7IFN1Z2FyRWxlbWVudCB9IGZyb20gJy4uL25vZGUvU3VnYXJFbGVtZW50JztcblxuaW50ZXJmYWNlIFZlbmRvckVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgbXNNYXRjaGVzU2VsZWN0b3I/OiAoc2VsZWN0b3I6IHN0cmluZykgPT4gYm9vbGVhbjtcbiAgbW96TWF0Y2hlc1NlbGVjdG9yPzogKHNlbGVjdG9yOiBzdHJpbmcpID0+IGJvb2xlYW47XG59XG5cbmNvbnN0IGlzID0gPFQgZXh0ZW5kcyBFbGVtZW50ID0gRWxlbWVudD4gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPiwgc2VsZWN0b3I6IHN0cmluZyk6IGVsZW1lbnQgaXMgU3VnYXJFbGVtZW50PFQ+ID0+IHtcbiAgY29uc3QgZG9tID0gZWxlbWVudC5kb207XG4gIGlmIChkb20ubm9kZVR5cGUgIT09IEVMRU1FTlQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZWxlbSA9IGRvbSBhcyBWZW5kb3JFbGVtZW50O1xuICAgIGlmIChlbGVtLm1hdGNoZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGVsZW0ubWF0Y2hlcyhzZWxlY3Rvcik7XG4gICAgfSBlbHNlIGlmIChlbGVtLm1zTWF0Y2hlc1NlbGVjdG9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBlbGVtLm1zTWF0Y2hlc1NlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICB9IGVsc2UgaWYgKGVsZW0ud2Via2l0TWF0Y2hlc1NlbGVjdG9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBlbGVtLndlYmtpdE1hdGNoZXNTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgfSBlbHNlIGlmIChlbGVtLm1vek1hdGNoZXNTZWxlY3RvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBjYXN0IHRvIGFueSBhcyBtb3pNYXRjaGVzU2VsZWN0b3IgZG9lc24ndCBleGlzdCBpbiBUUyBET00gbGliXG4gICAgICByZXR1cm4gZWxlbS5tb3pNYXRjaGVzU2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Jyb3dzZXIgbGFja3MgbmF0aXZlIHNlbGVjdG9ycycpO1xuICAgIH0gLy8gdW5mb3J0dW5hdGVseSB3ZSBjYW4ndCB0aHJvdyB0aGlzIG9uIHN0YXJ0dXAgOihcbiAgfVxufTtcblxuY29uc3QgYnlwYXNzU2VsZWN0b3IgPSAoZG9tOiBOb2RlKSA9PlxuICAvLyBPbmx5IGVsZW1lbnRzLCBkb2N1bWVudHMgYW5kIHNoYWRvdyByb290cyBzdXBwb3J0IHF1ZXJ5U2VsZWN0b3JcbiAgLy8gc2hhZG93IHJvb3QgZWxlbWVudCB0eXBlIGlzIERPQ1VNRU5UX0ZSQUdNRU5UXG4gIGRvbS5ub2RlVHlwZSAhPT0gRUxFTUVOVCAmJiBkb20ubm9kZVR5cGUgIT09IERPQ1VNRU5UICYmIGRvbS5ub2RlVHlwZSAhPT0gRE9DVU1FTlRfRlJBR01FTlQgfHxcbiAgICAvLyBJRSBmaXggZm9yIGNvbXBsZXggcXVlcmllcyBvbiBlbXB0eSBub2RlczogaHR0cDovL2pzZmlkZGxlLm5ldC9zcHlkZXIvZnY5cHRyNUwvXG4gICAgKGRvbSBhcyBFbGVtZW50IHwgRG9jdW1lbnQgfCBEb2N1bWVudEZyYWdtZW50KS5jaGlsZEVsZW1lbnRDb3VudCA9PT0gMDtcblxuY29uc3QgYWxsID0gPFQgZXh0ZW5kcyBFbGVtZW50ID0gRWxlbWVudD4gKHNlbGVjdG9yOiBzdHJpbmcsIHNjb3BlPzogU3VnYXJFbGVtZW50PE5vZGU+KTogU3VnYXJFbGVtZW50PFQ+W10gPT4ge1xuICBjb25zdCBiYXNlID0gc2NvcGUgPT09IHVuZGVmaW5lZCA/IGRvY3VtZW50IDogc2NvcGUuZG9tO1xuICByZXR1cm4gYnlwYXNzU2VsZWN0b3IoYmFzZSkgPyBbXSA6IEFyci5tYXAoKGJhc2UgYXMgRWxlbWVudCB8IERvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsPFQ+KHNlbGVjdG9yKSwgU3VnYXJFbGVtZW50LmZyb21Eb20pO1xufTtcblxuY29uc3Qgb25lID0gPFQgZXh0ZW5kcyBFbGVtZW50ID0gRWxlbWVudD4gKHNlbGVjdG9yOiBzdHJpbmcsIHNjb3BlPzogU3VnYXJFbGVtZW50PE5vZGU+KTogT3B0aW9uYWw8U3VnYXJFbGVtZW50PFQ+PiA9PiB7XG4gIGNvbnN0IGJhc2UgPSBzY29wZSA9PT0gdW5kZWZpbmVkID8gZG9jdW1lbnQgOiBzY29wZS5kb207XG4gIHJldHVybiBieXBhc3NTZWxlY3RvcihiYXNlKSA/IE9wdGlvbmFsLm5vbmU8U3VnYXJFbGVtZW50PFQ+PigpIDogT3B0aW9uYWwuZnJvbSgoYmFzZSBhcyBFbGVtZW50IHwgRG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3I8VD4oc2VsZWN0b3IpKS5tYXAoU3VnYXJFbGVtZW50LmZyb21Eb20pO1xufTtcblxuZXhwb3J0IHtcbiAgYWxsLFxuICBpcyxcbiAgb25lXG59O1xuIiwiaW1wb3J0IHsgQXJyLCBGdW4sIE9wdGlvbmFsLCBUeXBlIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0ICogYXMgUmVjdXJzZSBmcm9tICcuLi8uLi9hbGllbi9SZWN1cnNlJztcbmltcG9ydCAqIGFzIENvbXBhcmUgZnJvbSAnLi4vZG9tL0NvbXBhcmUnO1xuaW1wb3J0IHsgU3VnYXJFbGVtZW50IH0gZnJvbSAnLi4vbm9kZS9TdWdhckVsZW1lbnQnO1xuaW1wb3J0ICogYXMgU3VnYXJOb2RlIGZyb20gJy4uL25vZGUvU3VnYXJOb2RlJztcblxuLyoqXG4gKiBUaGUgZG9jdW1lbnQgYXNzb2NpYXRlZCB3aXRoIHRoZSBjdXJyZW50IGVsZW1lbnRcbiAqIE5PVEU6IHRoaXMgd2lsbCB0aHJvdyBpZiB0aGUgb3duZXIgaXMgbnVsbC5cbiAqL1xuY29uc3Qgb3duZXIgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KTogU3VnYXJFbGVtZW50PERvY3VtZW50PiA9PlxuICBTdWdhckVsZW1lbnQuZnJvbURvbShlbGVtZW50LmRvbS5vd25lckRvY3VtZW50IGFzIERvY3VtZW50KTtcblxuLyoqXG4gKiBJZiB0aGUgZWxlbWVudCBpcyBhIGRvY3VtZW50LCByZXR1cm4gaXQuIE90aGVyd2lzZSwgcmV0dXJuIGl0cyBvd25lckRvY3VtZW50LlxuICogQHBhcmFtIGRvc1xuICovXG5jb25zdCBkb2N1bWVudE9yT3duZXIgPSAoZG9zOiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBTdWdhckVsZW1lbnQ8RG9jdW1lbnQ+ID0+XG4gIFN1Z2FyTm9kZS5pc0RvY3VtZW50KGRvcykgPyBkb3MgOiBvd25lcihkb3MpO1xuXG5jb25zdCBkb2N1bWVudEVsZW1lbnQgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KTogU3VnYXJFbGVtZW50PEhUTUxFbGVtZW50PiA9PlxuICBTdWdhckVsZW1lbnQuZnJvbURvbShkb2N1bWVudE9yT3duZXIoZWxlbWVudCkuZG9tLmRvY3VtZW50RWxlbWVudCk7XG5cbi8qKlxuICogVGhlIHdpbmRvdyBlbGVtZW50IGFzc29jaWF0ZWQgd2l0aCB0aGUgZWxlbWVudFxuICogTk9URTogdGhpcyB3aWxsIHRocm93IGlmIHRoZSBkZWZhdWx0VmlldyBpcyBudWxsLlxuICovXG5jb25zdCBkZWZhdWx0VmlldyA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBTdWdhckVsZW1lbnQ8V2luZG93PiA9PlxuICBTdWdhckVsZW1lbnQuZnJvbURvbShkb2N1bWVudE9yT3duZXIoZWxlbWVudCkuZG9tLmRlZmF1bHRWaWV3IGFzIFdpbmRvdyk7XG5cbmNvbnN0IHBhcmVudCA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBPcHRpb25hbDxTdWdhckVsZW1lbnQ8Tm9kZSAmIFBhcmVudE5vZGU+PiA9PlxuICBPcHRpb25hbC5mcm9tKGVsZW1lbnQuZG9tLnBhcmVudE5vZGUpLm1hcChTdWdhckVsZW1lbnQuZnJvbURvbSk7XG5cbi8vIENhc3QgZG93biB0byBqdXN0IGJlIFN1Z2FyRWxlbWVudDxOb2RlPlxuY29uc3QgcGFyZW50Tm9kZSA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBPcHRpb25hbDxTdWdhckVsZW1lbnQ8Tm9kZT4+ID0+XG4gIHBhcmVudChlbGVtZW50KSBhcyBhbnk7XG5cbmNvbnN0IHBhcmVudEVsZW1lbnQgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KTogT3B0aW9uYWw8U3VnYXJFbGVtZW50PEhUTUxFbGVtZW50Pj4gPT5cbiAgT3B0aW9uYWwuZnJvbShlbGVtZW50LmRvbS5wYXJlbnRFbGVtZW50KS5tYXAoU3VnYXJFbGVtZW50LmZyb21Eb20pO1xuXG5jb25zdCBmaW5kSW5kZXggPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KTogT3B0aW9uYWw8bnVtYmVyPiA9PlxuICBwYXJlbnQoZWxlbWVudCkuYmluZCgocCkgPT4ge1xuICAgIC8vIFRPRE86IFJlZmFjdG9yIG91dCBjaGlsZHJlbiBzbyB3ZSBjYW4gYXZvaWQgdGhlIGNvbnN0YW50IHVud3JhcHBpbmdcbiAgICBjb25zdCBraW4gPSBjaGlsZHJlbihwKTtcbiAgICByZXR1cm4gQXJyLmZpbmRJbmRleChraW4sIChlbGVtKSA9PiBDb21wYXJlLmVxKGVsZW1lbnQsIGVsZW0pKTtcbiAgfSk7XG5cbmNvbnN0IHBhcmVudHMgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+LCBpc1Jvb3Q/OiAoZTogU3VnYXJFbGVtZW50PE5vZGU+KSA9PiBib29sZWFuKTogU3VnYXJFbGVtZW50PE5vZGU+W10gPT4ge1xuICBjb25zdCBzdG9wID0gVHlwZS5pc0Z1bmN0aW9uKGlzUm9vdCkgPyBpc1Jvb3QgOiBGdW4ubmV2ZXI7XG5cbiAgLy8gVGhpcyBpcyB1c2VkIGEgKmxvdCogc28gaXQgbmVlZHMgdG8gYmUgcGVyZm9ybWFudCwgbm90IHJlY3Vyc2l2ZVxuICBsZXQgZG9tOiBOb2RlID0gZWxlbWVudC5kb207XG4gIGNvbnN0IHJldDogU3VnYXJFbGVtZW50PE5vZGU+W10gPSBbXTtcblxuICB3aGlsZSAoZG9tLnBhcmVudE5vZGUgIT09IG51bGwgJiYgZG9tLnBhcmVudE5vZGUgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IHJhd1BhcmVudCA9IGRvbS5wYXJlbnROb2RlO1xuICAgIGNvbnN0IHAgPSBTdWdhckVsZW1lbnQuZnJvbURvbShyYXdQYXJlbnQpO1xuICAgIHJldC5wdXNoKHApO1xuXG4gICAgaWYgKHN0b3AocCkgPT09IHRydWUpIHtcbiAgICAgIGJyZWFrO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb20gPSByYXdQYXJlbnQ7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXQ7XG59O1xuXG5jb25zdCBzaWJsaW5ncyA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBTdWdhckVsZW1lbnQ8Tm9kZT5bXSA9PiB7XG4gIC8vIFRPRE86IFJlZmFjdG9yIG91dCBjaGlsZHJlbiBzbyB3ZSBjYW4ganVzdCBub3QgYWRkIHNlbGYgaW5zdGVhZCBvZiBmaWx0ZXJpbmcgYWZ0ZXJ3YXJkc1xuICBjb25zdCBmaWx0ZXJTZWxmID0gPEU+IChlbGVtZW50czogU3VnYXJFbGVtZW50PEU+W10pID0+IEFyci5maWx0ZXIoZWxlbWVudHMsICh4KSA9PiAhQ29tcGFyZS5lcShlbGVtZW50LCB4KSk7XG5cbiAgcmV0dXJuIHBhcmVudChlbGVtZW50KS5tYXAoY2hpbGRyZW4pLm1hcChmaWx0ZXJTZWxmKS5nZXRPcihbXSk7XG59O1xuXG5jb25zdCBvZmZzZXRQYXJlbnQgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PEhUTUxFbGVtZW50Pik6IE9wdGlvbmFsPFN1Z2FyRWxlbWVudDxIVE1MRWxlbWVudD4+ID0+XG4gIE9wdGlvbmFsLmZyb20oZWxlbWVudC5kb20ub2Zmc2V0UGFyZW50IGFzIEhUTUxFbGVtZW50KS5tYXAoU3VnYXJFbGVtZW50LmZyb21Eb20pO1xuXG5jb25zdCBwcmV2U2libGluZyA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBPcHRpb25hbDxTdWdhckVsZW1lbnQ8Tm9kZSAmIENoaWxkTm9kZT4+ID0+XG4gIE9wdGlvbmFsLmZyb20oZWxlbWVudC5kb20ucHJldmlvdXNTaWJsaW5nKS5tYXAoU3VnYXJFbGVtZW50LmZyb21Eb20pO1xuXG5jb25zdCBuZXh0U2libGluZyA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBPcHRpb25hbDxTdWdhckVsZW1lbnQ8Tm9kZSAmIENoaWxkTm9kZT4+ID0+XG4gIE9wdGlvbmFsLmZyb20oZWxlbWVudC5kb20ubmV4dFNpYmxpbmcpLm1hcChTdWdhckVsZW1lbnQuZnJvbURvbSk7XG5cbi8vIFRoaXMgb25lIG5lZWRzIHRvIGJlIHJldmVyc2VkLCBzbyB0aGV5J3JlIHN0aWxsIGluIERPTSBvcmRlclxuY29uc3QgcHJldlNpYmxpbmdzID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPik6IFN1Z2FyRWxlbWVudDxOb2RlICYgQ2hpbGROb2RlPltdID0+XG4gIEFyci5yZXZlcnNlKFJlY3Vyc2UudG9BcnJheShlbGVtZW50LCBwcmV2U2libGluZykpO1xuXG5jb25zdCBuZXh0U2libGluZ3MgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KTogU3VnYXJFbGVtZW50PE5vZGUgJiBDaGlsZE5vZGU+W10gPT5cbiAgUmVjdXJzZS50b0FycmF5KGVsZW1lbnQsIG5leHRTaWJsaW5nKTtcblxuY29uc3QgY2hpbGRyZW4gPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KTogU3VnYXJFbGVtZW50PE5vZGUgJiBDaGlsZE5vZGU+W10gPT5cbiAgQXJyLm1hcChlbGVtZW50LmRvbS5jaGlsZE5vZGVzLCBTdWdhckVsZW1lbnQuZnJvbURvbSk7XG5cbmNvbnN0IGNoaWxkID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPiwgaW5kZXg6IG51bWJlcik6IE9wdGlvbmFsPFN1Z2FyRWxlbWVudDxOb2RlICYgQ2hpbGROb2RlPj4gPT4ge1xuICBjb25zdCBjcyA9IGVsZW1lbnQuZG9tLmNoaWxkTm9kZXM7XG4gIHJldHVybiBPcHRpb25hbC5mcm9tKGNzW2luZGV4XSkubWFwKFN1Z2FyRWxlbWVudC5mcm9tRG9tKTtcbn07XG5cbmNvbnN0IGZpcnN0Q2hpbGQgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KTogT3B0aW9uYWw8U3VnYXJFbGVtZW50PE5vZGUgJiBDaGlsZE5vZGU+PiA9PlxuICBjaGlsZChlbGVtZW50LCAwKTtcblxuY29uc3QgbGFzdENoaWxkID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPik6IE9wdGlvbmFsPFN1Z2FyRWxlbWVudDxOb2RlICYgQ2hpbGROb2RlPj4gPT5cbiAgY2hpbGQoZWxlbWVudCwgZWxlbWVudC5kb20uY2hpbGROb2Rlcy5sZW5ndGggLSAxKTtcblxuY29uc3QgY2hpbGROb2Rlc0NvdW50ID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPik6IG51bWJlciA9PlxuICBlbGVtZW50LmRvbS5jaGlsZE5vZGVzLmxlbmd0aDtcblxuY29uc3QgaGFzQ2hpbGROb2RlcyA9IChlbGVtZW50OiBTdWdhckVsZW1lbnQ8Tm9kZT4pOiBib29sZWFuID0+XG4gIGVsZW1lbnQuZG9tLmhhc0NoaWxkTm9kZXMoKTtcblxuZXhwb3J0IGludGVyZmFjZSBFbGVtZW50QW5kT2Zmc2V0PEU+IHtcbiAgcmVhZG9ubHkgZWxlbWVudDogU3VnYXJFbGVtZW50PEU+O1xuICByZWFkb25seSBvZmZzZXQ6IG51bWJlcjtcbn1cblxuY29uc3Qgc3BvdCA9IDxFPihlbGVtZW50OiBTdWdhckVsZW1lbnQ8RT4sIG9mZnNldDogbnVtYmVyKTogRWxlbWVudEFuZE9mZnNldDxFPiA9PiAoe1xuICBlbGVtZW50LFxuICBvZmZzZXRcbn0pO1xuXG5jb25zdCBsZWFmID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxOb2RlPiwgb2Zmc2V0OiBudW1iZXIpOiBFbGVtZW50QW5kT2Zmc2V0PE5vZGU+ID0+IHtcbiAgY29uc3QgY3MgPSBjaGlsZHJlbihlbGVtZW50KTtcbiAgcmV0dXJuIGNzLmxlbmd0aCA+IDAgJiYgb2Zmc2V0IDwgY3MubGVuZ3RoID8gc3BvdChjc1tvZmZzZXRdLCAwKSA6IHNwb3QoZWxlbWVudCwgb2Zmc2V0KTtcbn07XG5cbmV4cG9ydCB7XG4gIG93bmVyLFxuICBkb2N1bWVudE9yT3duZXIsXG4gIGRlZmF1bHRWaWV3LFxuICBkb2N1bWVudEVsZW1lbnQsXG4gIHBhcmVudCxcbiAgcGFyZW50Tm9kZSxcbiAgcGFyZW50RWxlbWVudCxcbiAgZmluZEluZGV4LFxuICBwYXJlbnRzLFxuICBzaWJsaW5ncyxcbiAgcHJldlNpYmxpbmcsXG4gIG9mZnNldFBhcmVudCxcbiAgcHJldlNpYmxpbmdzLFxuICBuZXh0U2libGluZyxcbiAgbmV4dFNpYmxpbmdzLFxuICBjaGlsZHJlbixcbiAgY2hpbGQsXG4gIGZpcnN0Q2hpbGQsXG4gIGxhc3RDaGlsZCxcbiAgY2hpbGROb2Rlc0NvdW50LFxuICBoYXNDaGlsZE5vZGVzLFxuICBsZWFmXG59O1xuIiwiaW1wb3J0IHsgQXJyIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0IHR5cGUgeyBTdWdhckVsZW1lbnQgfSBmcm9tICcuLi9hcGkvbm9kZS9TdWdhckVsZW1lbnQnO1xuaW1wb3J0ICogYXMgQXR0ckxpc3QgZnJvbSAnLi4vYXBpL3Byb3BlcnRpZXMvQXR0ckxpc3QnO1xuXG4vLyBJRTExIENhbiByZXR1cm4gdW5kZWZpbmVkIGZvciBhIGNsYXNzTGlzdCBvbiBlbGVtZW50cyBzdWNoIGFzIG1hdGgsIHNvIHdlIG1ha2Ugc3VyZSBpdCdzIG5vdCB1bmRlZmluZWQgYmVmb3JlIGF0dGVtcHRpbmcgdG8gdXNlIGl0LlxuY29uc3Qgc3VwcG9ydHMgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PE5vZGU+KTogZWxlbWVudCBpcyBTdWdhckVsZW1lbnQ8RWxlbWVudD4gPT4gKGVsZW1lbnQuZG9tIGFzIEVsZW1lbnQpLmNsYXNzTGlzdCAhPT0gdW5kZWZpbmVkO1xuXG5jb25zdCBnZXQgPSAoZWxlbWVudDogU3VnYXJFbGVtZW50PEVsZW1lbnQ+KTogc3RyaW5nW10gPT4gQXR0ckxpc3QucmVhZChlbGVtZW50LCAnY2xhc3MnKTtcblxuY29uc3QgYWRkID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxFbGVtZW50PiwgY2xheno6IHN0cmluZyk6IGJvb2xlYW4gPT4gQXR0ckxpc3QuYWRkKGVsZW1lbnQsICdjbGFzcycsIGNsYXp6KTtcblxuY29uc3QgcmVtb3ZlID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxFbGVtZW50PiwgY2xheno6IHN0cmluZyk6IGJvb2xlYW4gPT4gQXR0ckxpc3QucmVtb3ZlKGVsZW1lbnQsICdjbGFzcycsIGNsYXp6KTtcblxuY29uc3QgdG9nZ2xlID0gKGVsZW1lbnQ6IFN1Z2FyRWxlbWVudDxFbGVtZW50PiwgY2xheno6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuICBpZiAoQXJyLmNvbnRhaW5zKGdldChlbGVtZW50KSwgY2xhenopKSB7XG4gICAgcmV0dXJuIHJlbW92ZShlbGVtZW50LCBjbGF6eik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGFkZChlbGVtZW50LCBjbGF6eik7XG4gIH1cbn07XG5cbmV4cG9ydCB7XG4gIGdldCxcbiAgYWRkLFxuICByZW1vdmUsXG4gIHRvZ2dsZSxcbiAgc3VwcG9ydHNcbn07XG4iLCJpbXBvcnQgeyBPcHRpb25hbCwgVHlwZSB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmltcG9ydCB0eXBlIHsgU3VnYXJFbGVtZW50IH0gZnJvbSAnLi4vYXBpL25vZGUvU3VnYXJFbGVtZW50JztcblxudHlwZSBUZXN0Rm4gPSAoZTogU3VnYXJFbGVtZW50PE5vZGU+KSA9PiBib29sZWFuO1xudHlwZSBTY29wZVRlc3RGbjxULCBSIGV4dGVuZHMgTm9kZT4gPSAoc2NvcGU6IFN1Z2FyRWxlbWVudDxOb2RlPiwgYTogVCkgPT4gc2NvcGUgaXMgU3VnYXJFbGVtZW50PFI+O1xudHlwZSBBbmNlc3RvckZuPFQsIFIgZXh0ZW5kcyBOb2RlPiA9IChzY29wZTogU3VnYXJFbGVtZW50PE5vZGU+LCBwcmVkaWNhdGU6IFQsIGlzUm9vdD86IFRlc3RGbikgPT4gT3B0aW9uYWw8U3VnYXJFbGVtZW50PFI+PjtcblxuZXhwb3J0IGRlZmF1bHQgPFQsIFIgZXh0ZW5kcyBOb2RlID0gTm9kZT4gKGlzOiBTY29wZVRlc3RGbjxULCBSPiwgYW5jZXN0b3I6IEFuY2VzdG9yRm48VCwgUj4sIHNjb3BlOiBTdWdhckVsZW1lbnQ8Tm9kZT4sIGE6IFQsIGlzUm9vdD86IFRlc3RGbik6IE9wdGlvbmFsPFN1Z2FyRWxlbWVudDxSPj4gPT4ge1xuICBpZiAoaXMoc2NvcGUsIGEpKSB7XG4gICAgcmV0dXJuIE9wdGlvbmFsLnNvbWUoc2NvcGUpO1xuICB9IGVsc2UgaWYgKFR5cGUuaXNGdW5jdGlvbihpc1Jvb3QpICYmIGlzUm9vdChzY29wZSkpIHtcbiAgICByZXR1cm4gT3B0aW9uYWwubm9uZTxTdWdhckVsZW1lbnQ8Uj4+KCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGFuY2VzdG9yKHNjb3BlLCBhLCBpc1Jvb3QpO1xuICB9XG59O1xuIiwiaW1wb3J0IHsgQ2VsbCB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmltcG9ydCBQbHVnaW5NYW5hZ2VyIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvUGx1Z2luTWFuYWdlcic7XG5cbmltcG9ydCAqIGFzIEFwaSBmcm9tICcuL2FwaS9BcGknO1xuaW1wb3J0ICogYXMgQ29tbWFuZHMgZnJvbSAnLi9hcGkvQ29tbWFuZHMnO1xuaW1wb3J0ICogYXMgT3B0aW9ucyBmcm9tICcuL2FwaS9PcHRpb25zJztcbmltcG9ydCAqIGFzIEJpbmRpbmdzIGZyb20gJy4vY29yZS9CaW5kaW5ncyc7XG5pbXBvcnQgKiBhcyBLZXlib2FyZCBmcm9tICcuL2NvcmUvS2V5Ym9hcmQnO1xuaW1wb3J0ICogYXMgQnV0dG9ucyBmcm9tICcuL3VpL0J1dHRvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCAoKTogdm9pZCA9PiB7XG4gIFBsdWdpbk1hbmFnZXIuYWRkKCd2aXN1YWxjaGFycycsIChlZGl0b3IpID0+IHtcbiAgICBPcHRpb25zLnJlZ2lzdGVyKGVkaXRvcik7XG5cbiAgICBjb25zdCB0b2dnbGVTdGF0ZSA9IENlbGwoT3B0aW9ucy5pc0VuYWJsZWRCeURlZmF1bHQoZWRpdG9yKSk7XG4gICAgQ29tbWFuZHMucmVnaXN0ZXIoZWRpdG9yLCB0b2dnbGVTdGF0ZSk7XG4gICAgQnV0dG9ucy5yZWdpc3RlcihlZGl0b3IsIHRvZ2dsZVN0YXRlKTtcbiAgICBLZXlib2FyZC5zZXR1cChlZGl0b3IsIHRvZ2dsZVN0YXRlKTtcbiAgICBCaW5kaW5ncy5zZXR1cChlZGl0b3IsIHRvZ2dsZVN0YXRlKTtcblxuICAgIHJldHVybiBBcGkuZ2V0KHRvZ2dsZVN0YXRlKTtcbiAgfSk7XG59O1xuIiwiaW1wb3J0IHR5cGUgeyBDZWxsIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuZXhwb3J0IGludGVyZmFjZSBBcGkge1xuICByZWFkb25seSBpc0VuYWJsZWQ6ICgpID0+IGJvb2xlYW47XG59XG5cbmNvbnN0IGdldCA9ICh0b2dnbGVTdGF0ZTogQ2VsbDxib29sZWFuPik6IEFwaSA9PiB7XG4gIGNvbnN0IGlzRW5hYmxlZCA9ICgpID0+IHtcbiAgICByZXR1cm4gdG9nZ2xlU3RhdGUuZ2V0KCk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBpc0VuYWJsZWRcbiAgfTtcbn07XG5cbmV4cG9ydCB7XG4gIGdldFxufTtcbiIsImltcG9ydCB0eXBlIHsgQ2VsbCB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmltcG9ydCB0eXBlIEVkaXRvciBmcm9tICd0aW55bWNlL2NvcmUvYXBpL0VkaXRvcic7XG5cbmltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSAnLi4vY29yZS9BY3Rpb25zJztcblxuY29uc3QgcmVnaXN0ZXIgPSAoZWRpdG9yOiBFZGl0b3IsIHRvZ2dsZVN0YXRlOiBDZWxsPGJvb2xlYW4+KTogdm9pZCA9PiB7XG4gIGVkaXRvci5hZGRDb21tYW5kKCdtY2VWaXN1YWxDaGFycycsICgpID0+IHtcbiAgICBBY3Rpb25zLnRvZ2dsZVZpc3VhbENoYXJzKGVkaXRvciwgdG9nZ2xlU3RhdGUpO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7XG4gIHJlZ2lzdGVyXG59O1xuIiwiaW1wb3J0IHR5cGUgRWRpdG9yIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvRWRpdG9yJztcbmltcG9ydCB0eXBlIHsgRWRpdG9yRXZlbnQgfSBmcm9tICd0aW55bWNlL2NvcmUvYXBpL3V0aWwvRXZlbnREaXNwYXRjaGVyJztcblxuY29uc3QgZmlyZVZpc3VhbENoYXJzID0gKGVkaXRvcjogRWRpdG9yLCBzdGF0ZTogYm9vbGVhbik6IEVkaXRvckV2ZW50PHsgc3RhdGU6IGJvb2xlYW4gfT4gPT4ge1xuICByZXR1cm4gZWRpdG9yLmRpc3BhdGNoKCdWaXN1YWxDaGFycycsIHsgc3RhdGUgfSk7XG59O1xuXG5leHBvcnQge1xuICBmaXJlVmlzdWFsQ2hhcnNcbn07XG4iLCJpbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuaW1wb3J0IHR5cGUgeyBFZGl0b3JPcHRpb25zIH0gZnJvbSAndGlueW1jZS9jb3JlL2FwaS9PcHRpb25UeXBlcyc7XG5cbmNvbnN0IG9wdGlvbjoge1xuICA8SyBleHRlbmRzIGtleW9mIEVkaXRvck9wdGlvbnM+KG5hbWU6IEspOiAoZWRpdG9yOiBFZGl0b3IpID0+IEVkaXRvck9wdGlvbnNbS107XG4gIDxUPihuYW1lOiBzdHJpbmcpOiAoZWRpdG9yOiBFZGl0b3IpID0+IFQ7XG59ID0gKG5hbWU6IHN0cmluZykgPT4gKGVkaXRvcjogRWRpdG9yKSA9PlxuICBlZGl0b3Iub3B0aW9ucy5nZXQobmFtZSk7XG5cbmNvbnN0IHJlZ2lzdGVyID0gKGVkaXRvcjogRWRpdG9yKTogdm9pZCA9PiB7XG4gIGNvbnN0IHJlZ2lzdGVyT3B0aW9uID0gZWRpdG9yLm9wdGlvbnMucmVnaXN0ZXI7XG5cbiAgcmVnaXN0ZXJPcHRpb24oJ3Zpc3VhbGNoYXJzX2RlZmF1bHRfc3RhdGUnLCB7XG4gICAgcHJvY2Vzc29yOiAnYm9vbGVhbicsXG4gICAgZGVmYXVsdDogZmFsc2VcbiAgfSk7XG59O1xuXG5jb25zdCBpc0VuYWJsZWRCeURlZmF1bHQgPSBvcHRpb248Ym9vbGVhbj4oJ3Zpc3VhbGNoYXJzX2RlZmF1bHRfc3RhdGUnKTtcblxuZXhwb3J0IHtcbiAgcmVnaXN0ZXIsXG4gIGlzRW5hYmxlZEJ5RGVmYXVsdFxufTtcbiIsImltcG9ydCB0eXBlIHsgQ2VsbCB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmltcG9ydCB0eXBlIEVkaXRvciBmcm9tICd0aW55bWNlL2NvcmUvYXBpL0VkaXRvcic7XG5cbmltcG9ydCAqIGFzIEV2ZW50cyBmcm9tICcuLi9hcGkvRXZlbnRzJztcblxuaW1wb3J0ICogYXMgVmlzdWFsQ2hhcnMgZnJvbSAnLi9WaXN1YWxDaGFycyc7XG5cbmNvbnN0IGFwcGx5VmlzdWFsQ2hhcnMgPSAoZWRpdG9yOiBFZGl0b3IsIHRvZ2dsZVN0YXRlOiBDZWxsPGJvb2xlYW4+KTogdm9pZCA9PiB7XG4gIEV2ZW50cy5maXJlVmlzdWFsQ2hhcnMoZWRpdG9yLCB0b2dnbGVTdGF0ZS5nZXQoKSk7XG5cbiAgY29uc3QgYm9keSA9IGVkaXRvci5nZXRCb2R5KCk7XG4gIGlmICh0b2dnbGVTdGF0ZS5nZXQoKSA9PT0gdHJ1ZSkge1xuICAgIFZpc3VhbENoYXJzLnNob3coZWRpdG9yLCBib2R5KTtcbiAgfSBlbHNlIHtcbiAgICBWaXN1YWxDaGFycy5oaWRlKGVkaXRvciwgYm9keSk7XG4gIH1cbn07XG5cbi8vIFRvZ2dsZSBzdGF0ZSBhbmQgc2F2ZSBzZWxlY3Rpb24gYm9va21hcmsgYmVmb3JlIGFwcGx5aW5nIHZpc3VhbENoYXJzXG5jb25zdCB0b2dnbGVWaXN1YWxDaGFycyA9IChlZGl0b3I6IEVkaXRvciwgdG9nZ2xlU3RhdGU6IENlbGw8Ym9vbGVhbj4pOiB2b2lkID0+IHtcbiAgdG9nZ2xlU3RhdGUuc2V0KCF0b2dnbGVTdGF0ZS5nZXQoKSk7XG5cbiAgY29uc3QgYm9va21hcmsgPSBlZGl0b3Iuc2VsZWN0aW9uLmdldEJvb2ttYXJrKCk7XG4gIGFwcGx5VmlzdWFsQ2hhcnMoZWRpdG9yLCB0b2dnbGVTdGF0ZSk7XG4gIGVkaXRvci5zZWxlY3Rpb24ubW92ZVRvQm9va21hcmsoYm9va21hcmspO1xufTtcblxuZXhwb3J0IHtcbiAgYXBwbHlWaXN1YWxDaGFycyxcbiAgdG9nZ2xlVmlzdWFsQ2hhcnNcbn07XG4iLCJpbXBvcnQgdHlwZSB7IENlbGwgfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5pbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuXG5pbXBvcnQgKiBhcyBBY3Rpb25zIGZyb20gJy4vQWN0aW9ucyc7XG5cbmNvbnN0IHNldHVwID0gKGVkaXRvcjogRWRpdG9yLCB0b2dnbGVTdGF0ZTogQ2VsbDxib29sZWFuPik6IHZvaWQgPT4ge1xuICAvKlxuICAgIE5vdGU6IGFwcGx5VmlzdWFsQ2hhcnMgZG9lcyBub3QgcGxhY2UgYSBib29rbWFyayBiZWZvcmUgbW9kaWZ5aW5nIHRoZSBET00gb24gaW5pdC5cbiAgICBUaGlzIHdpbGwgY2F1c2UgYSBsb3NzIG9mIHNlbGVjdGlvbiBpZiB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAgICAgIC0gQXV0b2ZvY3VzIGVuYWJsZWQsIG9yIGVkaXRvciBpcyBtYW51YWxseSBmb2N1c2VkIG9uIGluaXRcbiAgICAgIC0gVGhlIGZpcnN0IHBpZWNlIG9mIHRleHQgaW4gdGhlIGVkaXRvciBtdXN0IGJlIGEgbmJzcFxuICAgICAgLSBJbnRlZ3JhdG9yIGhhcyBtYW51YWxseSBzZXQgdGhlIHNlbGVjdGlvbiBiZWZvcmUgaW5pdFxuXG4gICAgQW5vdGhlciBpbXByb3ZlbWVudCB3b3VsZCBiZSB0byBlbnN1cmUgRE9NIGVsZW1lbnRzIGFyZW4ndCBkZXN0cm95ZWQvcmVjcmVhdGVkLFxuICAgIGJ1dCByYXRoZXIgd3JhcHBlZC91bndyYXBwZWQgd2hlbiBhcHBseWluZyBzdHlsaW5nIGZvciB2aXN1YWxjaGFycyBzbyB0aGF0IHNlbGVjdGlvblxuICAgIGlzIG5vdCBsb3N0LlxuICAqL1xuICBlZGl0b3Iub24oJ2luaXQnLCAoKSA9PiB7XG4gICAgQWN0aW9ucy5hcHBseVZpc3VhbENoYXJzKGVkaXRvciwgdG9nZ2xlU3RhdGUpO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7XG4gIHNldHVwXG59O1xuIiwiaW1wb3J0IHsgT2JqIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxudHlwZSBDaGFyTWFwID0gUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcblxuZXhwb3J0IGNvbnN0IGNoYXJNYXA6IENoYXJNYXAgPSB7XG4gICdcXHUwMGEwJzogJ25ic3AnLFxuICAnXFx1MDBhZCc6ICdzaHknXG59O1xuXG5leHBvcnQgY29uc3QgY2hhck1hcFRvUmVnRXhwID0gKGNoYXJNYXA6IENoYXJNYXAsIGdsb2JhbD86IGJvb2xlYW4pOiBSZWdFeHAgPT4ge1xuICBsZXQgcmVnRXhwID0gJyc7XG5cbiAgT2JqLmVhY2goY2hhck1hcCwgKF92YWx1ZSwga2V5KSA9PiB7XG4gICAgcmVnRXhwICs9IGtleTtcbiAgfSk7XG5cbiAgcmV0dXJuIG5ldyBSZWdFeHAoJ1snICsgcmVnRXhwICsgJ10nLCBnbG9iYWwgPyAnZycgOiAnJyk7XG59O1xuXG5leHBvcnQgY29uc3QgY2hhck1hcFRvU2VsZWN0b3IgPSAoY2hhck1hcDogQ2hhck1hcCk6IHN0cmluZyA9PiB7XG4gIGxldCBzZWxlY3RvciA9ICcnO1xuICBPYmouZWFjaChjaGFyTWFwLCAodmFsdWUpID0+IHtcbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgIHNlbGVjdG9yICs9ICcsJztcbiAgICB9XG4gICAgc2VsZWN0b3IgKz0gJ3NwYW4ubWNlLScgKyB2YWx1ZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHNlbGVjdG9yO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlZ0V4cCA9IGNoYXJNYXBUb1JlZ0V4cChjaGFyTWFwKTtcbmV4cG9ydCBjb25zdCByZWdFeHBHbG9iYWwgPSBjaGFyTWFwVG9SZWdFeHAoY2hhck1hcCwgdHJ1ZSk7XG5leHBvcnQgY29uc3Qgc2VsZWN0b3IgPSBjaGFyTWFwVG9TZWxlY3RvcihjaGFyTWFwKTtcbmV4cG9ydCBjb25zdCBuYnNwQ2xhc3MgPSAnbWNlLW5ic3AnO1xuIiwiaW1wb3J0ICogYXMgRGF0YSBmcm9tICcuL0RhdGEnO1xuXG5jb25zdCB3cmFwQ2hhcldpdGhTcGFuID0gKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcgPT5cbiAgJzxzcGFuIGRhdGEtbWNlLWJvZ3VzPVwiMVwiIGNsYXNzPVwibWNlLScgKyBEYXRhLmNoYXJNYXBbdmFsdWVdICsgJ1wiPicgKyB2YWx1ZSArICc8L3NwYW4+JztcblxuZXhwb3J0IHtcbiAgd3JhcENoYXJXaXRoU3BhblxufTtcbiIsImltcG9ydCB7IHR5cGUgQ2VsbCwgVGhyb3R0bGVyIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0IHR5cGUgRWRpdG9yIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvRWRpdG9yJztcblxuaW1wb3J0ICogYXMgVmlzdWFsQ2hhcnMgZnJvbSAnLi9WaXN1YWxDaGFycyc7XG5cbmNvbnN0IHNldHVwID0gKGVkaXRvcjogRWRpdG9yLCB0b2dnbGVTdGF0ZTogQ2VsbDxib29sZWFuPik6IHZvaWQgPT4ge1xuICBjb25zdCBkZWJvdW5jZWRUb2dnbGUgPSBUaHJvdHRsZXIuZmlyc3QoKCkgPT4ge1xuICAgIFZpc3VhbENoYXJzLnRvZ2dsZShlZGl0b3IpO1xuICB9LCAzMDApO1xuXG4gIGVkaXRvci5vbigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgaWYgKHRvZ2dsZVN0YXRlLmdldCgpID09PSB0cnVlKSB7XG4gICAgICBlLmtleUNvZGUgPT09IDEzID8gVmlzdWFsQ2hhcnMudG9nZ2xlKGVkaXRvcikgOiBkZWJvdW5jZWRUb2dnbGUudGhyb3R0bGUoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGVkaXRvci5vbigncmVtb3ZlJywgZGVib3VuY2VkVG9nZ2xlLmNhbmNlbCk7XG59O1xuXG5leHBvcnQge1xuICBzZXR1cFxufTtcbiIsImltcG9ydCB7IEFyciwgVHlwZSB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5pbXBvcnQgeyBDb250ZW50RWRpdGFibGUsIFN1Z2FyRWxlbWVudCwgU3VnYXJOb2RlIH0gZnJvbSAnQGVwaG94L3N1Z2FyJztcblxuaW1wb3J0ICogYXMgRGF0YSBmcm9tICcuL0RhdGEnO1xuaW1wb3J0ICogYXMgSHRtbCBmcm9tICcuL0h0bWwnO1xuXG5jb25zdCBpc1dyYXBwZWROYnNwID0gKG5vZGU6IE5vZGUpOiBub2RlIGlzIEhUTUxTcGFuRWxlbWVudCA9PlxuICBub2RlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdzcGFuJyAmJiAobm9kZSBhcyBIVE1MU3BhbkVsZW1lbnQpLmNsYXNzTGlzdC5jb250YWlucygnbWNlLW5ic3Atd3JhcCcpO1xuXG5jb25zdCBpc01hdGNoID0gKG46IFN1Z2FyRWxlbWVudDxOb2RlPik6IG4gaXMgU3VnYXJFbGVtZW50PFRleHQ+ID0+IHtcbiAgY29uc3QgdmFsdWUgPSBTdWdhck5vZGUudmFsdWUobik7XG4gIHJldHVybiBTdWdhck5vZGUuaXNUZXh0KG4pICYmXG4gICAgVHlwZS5pc1N0cmluZyh2YWx1ZSkgJiZcbiAgICBEYXRhLnJlZ0V4cC50ZXN0KHZhbHVlKTtcbn07XG5cbmNvbnN0IGlzQ29udGVudEVkaXRhYmxlRmFsc2UgPSAobm9kZTogU3VnYXJFbGVtZW50PE5vZGU+KSA9PiBTdWdhck5vZGUuaXNIVE1MRWxlbWVudChub2RlKSAmJiBDb250ZW50RWRpdGFibGUuZ2V0UmF3KG5vZGUpID09PSAnZmFsc2UnO1xuXG5jb25zdCBpc0NoaWxkRWRpdGFibGUgPSAobm9kZTogU3VnYXJFbGVtZW50PE5vZGU+LCBjdXJyZW50U3RhdGU6IGJvb2xlYW4pID0+IHtcbiAgaWYgKFN1Z2FyTm9kZS5pc0hUTUxFbGVtZW50KG5vZGUpICYmICFpc1dyYXBwZWROYnNwKG5vZGUuZG9tKSkge1xuICAgIGNvbnN0IHZhbHVlID0gQ29udGVudEVkaXRhYmxlLmdldFJhdyhub2RlKTtcbiAgICBpZiAodmFsdWUgPT09ICd0cnVlJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gJ2ZhbHNlJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjdXJyZW50U3RhdGU7XG59O1xuXG4vLyBpbmxpbmVkIHN1Z2FycyBQcmVkaWNhdGVGaWx0ZXIuZGVzY2VuZGFudHMgZm9yIGZpbGUgc2l6ZSBidXQgYWxzbyBtYWtlIGl0IG9ubHkgYWN0IG9uIGVkaXRhYmxlIG5vZGVzIGl0IGNoYW5nZXMgdGhlIGN1cnJlbnQgZWRpdGFibGUgc3RhdGUgd2hlbiBpdCB0cmF2ZXNlcyBkb3duXG5jb25zdCBmaWx0ZXJFZGl0YWJsZURlc2NlbmRhbnRzID0gPFQgZXh0ZW5kcyBOb2RlPihzY29wZTogU3VnYXJFbGVtZW50PE5vZGU+LCBwcmVkaWNhdGU6ICh4OiBTdWdhckVsZW1lbnQ8Tm9kZT4pID0+IHggaXMgU3VnYXJFbGVtZW50PFQ+LCBlZGl0YWJsZTogYm9vbGVhbik6IFN1Z2FyRWxlbWVudDxUPltdID0+IHtcbiAgbGV0IHJlc3VsdDogU3VnYXJFbGVtZW50PFQ+W10gPSBbXTtcbiAgY29uc3QgZG9tID0gc2NvcGUuZG9tO1xuICBjb25zdCBjaGlsZHJlbiA9IEFyci5tYXAoZG9tLmNoaWxkTm9kZXMsIFN1Z2FyRWxlbWVudC5mcm9tRG9tKTtcbiAgY29uc3QgaXNFZGl0YWJsZSA9IChub2RlOiBTdWdhckVsZW1lbnQ8Tm9kZT4pID0+IGlzV3JhcHBlZE5ic3Aobm9kZS5kb20pIHx8ICFpc0NvbnRlbnRFZGl0YWJsZUZhbHNlKG5vZGUpO1xuXG4gIEFyci5lYWNoKGNoaWxkcmVuLCAoeCkgPT4ge1xuICAgIGlmIChlZGl0YWJsZSAmJiBpc0VkaXRhYmxlKHgpICYmIHByZWRpY2F0ZSh4KSkge1xuICAgICAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdChbIHggXSk7XG4gICAgfVxuICAgIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQoZmlsdGVyRWRpdGFibGVEZXNjZW5kYW50cyh4LCBwcmVkaWNhdGUsIGlzQ2hpbGRFZGl0YWJsZSh4LCBlZGl0YWJsZSkpKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCBmaW5kUGFyZW50RWxtID0gKGVsbTogTm9kZSwgcm9vdEVsbTogRWxlbWVudCk6IEVsZW1lbnQgfCB1bmRlZmluZWQgPT4ge1xuICB3aGlsZSAoZWxtLnBhcmVudE5vZGUpIHtcbiAgICBpZiAoZWxtLnBhcmVudE5vZGUgPT09IHJvb3RFbG0pIHtcbiAgICAgIHJldHVybiByb290RWxtO1xuICAgIH1cbiAgICBlbG0gPSBlbG0ucGFyZW50Tm9kZTtcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59O1xuXG5jb25zdCByZXBsYWNlV2l0aFNwYW5zID0gKHRleHQ6IHN0cmluZyk6IHN0cmluZyA9PlxuICB0ZXh0LnJlcGxhY2UoRGF0YS5yZWdFeHBHbG9iYWwsIEh0bWwud3JhcENoYXJXaXRoU3Bhbik7XG5cbmV4cG9ydCB7XG4gIGlzV3JhcHBlZE5ic3AsXG4gIGlzTWF0Y2gsXG4gIGZpbHRlckVkaXRhYmxlRGVzY2VuZGFudHMsXG4gIGZpbmRQYXJlbnRFbG0sXG4gIHJlcGxhY2VXaXRoU3BhbnNcbn07XG4iLCJpbXBvcnQgeyBBcnIgfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuaW1wb3J0IHsgQ2xhc3MsIFN1Z2FyRWxlbWVudCwgU3VnYXJOb2RlIH0gZnJvbSAnQGVwaG94L3N1Z2FyJztcblxuaW1wb3J0IHR5cGUgRWRpdG9yIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvRWRpdG9yJztcblxuaW1wb3J0ICogYXMgRGF0YSBmcm9tICcuL0RhdGEnO1xuaW1wb3J0ICogYXMgTm9kZXMgZnJvbSAnLi9Ob2Rlcyc7XG5cbmNvbnN0IHNob3cgPSAoZWRpdG9yOiBFZGl0b3IsIHJvb3RFbG06IEVsZW1lbnQpOiB2b2lkID0+IHtcbiAgY29uc3QgZG9tID0gZWRpdG9yLmRvbTtcbiAgY29uc3Qgbm9kZUxpc3QgPSBOb2Rlcy5maWx0ZXJFZGl0YWJsZURlc2NlbmRhbnRzKFN1Z2FyRWxlbWVudC5mcm9tRG9tKHJvb3RFbG0pLCBOb2Rlcy5pc01hdGNoLCBlZGl0b3IuZG9tLmlzRWRpdGFibGUocm9vdEVsbSkpO1xuXG4gIEFyci5lYWNoKG5vZGVMaXN0LCAobikgPT4ge1xuICAgIGNvbnN0IHBhcmVudCA9IG4uZG9tLnBhcmVudE5vZGUgYXMgTm9kZTtcbiAgICBpZiAoTm9kZXMuaXNXcmFwcGVkTmJzcChwYXJlbnQpKSB7XG4gICAgICBDbGFzcy5hZGQoU3VnYXJFbGVtZW50LmZyb21Eb20ocGFyZW50KSwgRGF0YS5uYnNwQ2xhc3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB3aXRoU3BhbnMgPSBOb2Rlcy5yZXBsYWNlV2l0aFNwYW5zKGRvbS5lbmNvZGUoU3VnYXJOb2RlLnZhbHVlKG4pID8/ICcnKSk7XG5cbiAgICAgIGNvbnN0IGRpdiA9IGRvbS5jcmVhdGUoJ2RpdicsIHt9LCB3aXRoU3BhbnMpO1xuICAgICAgbGV0IG5vZGU6IE5vZGUgfCBudWxsO1xuICAgICAgd2hpbGUgKChub2RlID0gZGl2Lmxhc3RDaGlsZCkpIHtcbiAgICAgICAgZG9tLmluc2VydEFmdGVyKG5vZGUsIG4uZG9tKTtcbiAgICAgIH1cblxuICAgICAgZWRpdG9yLmRvbS5yZW1vdmUobi5kb20pO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBoaWRlID0gKGVkaXRvcjogRWRpdG9yLCByb290RWxtOiBFbGVtZW50KTogdm9pZCA9PiB7XG4gIGNvbnN0IG5vZGVMaXN0ID0gZWRpdG9yLmRvbS5zZWxlY3QoRGF0YS5zZWxlY3Rvciwgcm9vdEVsbSk7XG5cbiAgQXJyLmVhY2gobm9kZUxpc3QsIChub2RlKSA9PiB7XG4gICAgaWYgKE5vZGVzLmlzV3JhcHBlZE5ic3Aobm9kZSkpIHtcbiAgICAgIENsYXNzLnJlbW92ZShTdWdhckVsZW1lbnQuZnJvbURvbShub2RlKSwgRGF0YS5uYnNwQ2xhc3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlZGl0b3IuZG9tLnJlbW92ZShub2RlLCB0cnVlKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgdG9nZ2xlID0gKGVkaXRvcjogRWRpdG9yKTogdm9pZCA9PiB7XG4gIGNvbnN0IGJvZHkgPSBlZGl0b3IuZ2V0Qm9keSgpO1xuICBjb25zdCBib29rbWFyayA9IGVkaXRvci5zZWxlY3Rpb24uZ2V0Qm9va21hcmsoKTtcbiAgbGV0IHBhcmVudE5vZGUgPSBOb2Rlcy5maW5kUGFyZW50RWxtKGVkaXRvci5zZWxlY3Rpb24uZ2V0Tm9kZSgpLCBib2R5KTtcblxuICAvLyBpZiB1c2VyIGRvZXMgc2VsZWN0IGFsbCB0aGUgcGFyZW50Tm9kZSB3aWxsIGJlIHVuZGVmaW5lZFxuICBwYXJlbnROb2RlID0gcGFyZW50Tm9kZSAhPT0gdW5kZWZpbmVkID8gcGFyZW50Tm9kZSA6IGJvZHk7XG5cbiAgaGlkZShlZGl0b3IsIHBhcmVudE5vZGUpO1xuICBzaG93KGVkaXRvciwgcGFyZW50Tm9kZSk7XG5cbiAgZWRpdG9yLnNlbGVjdGlvbi5tb3ZlVG9Cb29rbWFyayhib29rbWFyayk7XG59O1xuXG5leHBvcnQge1xuICBzaG93LFxuICBoaWRlLFxuICB0b2dnbGVcbn07XG4iLCJpbXBvcnQgdHlwZSB7IENlbGwgfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5pbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuaW1wb3J0IHR5cGUgeyBNZW51LCBUb29sYmFyIH0gZnJvbSAndGlueW1jZS9jb3JlL2FwaS91aS9VaSc7XG5pbXBvcnQgdHlwZSB7IEVkaXRvckV2ZW50IH0gZnJvbSAndGlueW1jZS9jb3JlL2FwaS91dGlsL0V2ZW50RGlzcGF0Y2hlcic7XG5cbmNvbnN0IHRvZ2dsZUFjdGl2ZVN0YXRlID0gKGVkaXRvcjogRWRpdG9yLCBlbmFibGVkU3RhdGVkOiBDZWxsPGJvb2xlYW4+KSA9PiAoYXBpOiBUb29sYmFyLlRvb2xiYXJUb2dnbGVCdXR0b25JbnN0YW5jZUFwaSB8IE1lbnUuVG9nZ2xlTWVudUl0ZW1JbnN0YW5jZUFwaSkgPT4ge1xuICBhcGkuc2V0QWN0aXZlKGVuYWJsZWRTdGF0ZWQuZ2V0KCkpO1xuICBjb25zdCBlZGl0b3JFdmVudENhbGxiYWNrID0gKGU6IEVkaXRvckV2ZW50PHsgc3RhdGU6IGJvb2xlYW4gfT4pID0+IGFwaS5zZXRBY3RpdmUoZS5zdGF0ZSk7XG4gIGVkaXRvci5vbignVmlzdWFsQ2hhcnMnLCBlZGl0b3JFdmVudENhbGxiYWNrKTtcbiAgcmV0dXJuICgpID0+IGVkaXRvci5vZmYoJ1Zpc3VhbENoYXJzJywgZWRpdG9yRXZlbnRDYWxsYmFjayk7XG59O1xuXG5jb25zdCByZWdpc3RlciA9IChlZGl0b3I6IEVkaXRvciwgdG9nZ2xlU3RhdGU6IENlbGw8Ym9vbGVhbj4pOiB2b2lkID0+IHtcbiAgY29uc3Qgb25BY3Rpb24gPSAoKSA9PiBlZGl0b3IuZXhlY0NvbW1hbmQoJ21jZVZpc3VhbENoYXJzJyk7XG5cbiAgZWRpdG9yLnVpLnJlZ2lzdHJ5LmFkZFRvZ2dsZUJ1dHRvbigndmlzdWFsY2hhcnMnLCB7XG4gICAgdG9vbHRpcDogJ1Nob3cgaW52aXNpYmxlIGNoYXJhY3RlcnMnLFxuICAgIGljb246ICd2aXN1YWxjaGFycycsXG4gICAgb25BY3Rpb24sXG4gICAgb25TZXR1cDogdG9nZ2xlQWN0aXZlU3RhdGUoZWRpdG9yLCB0b2dnbGVTdGF0ZSksXG4gICAgY29udGV4dDogJ2FueSdcbiAgfSk7XG5cbiAgZWRpdG9yLnVpLnJlZ2lzdHJ5LmFkZFRvZ2dsZU1lbnVJdGVtKCd2aXN1YWxjaGFycycsIHtcbiAgICB0ZXh0OiAnU2hvdyBpbnZpc2libGUgY2hhcmFjdGVycycsXG4gICAgaWNvbjogJ3Zpc3VhbGNoYXJzJyxcbiAgICBvbkFjdGlvbixcbiAgICBvblNldHVwOiB0b2dnbGVBY3RpdmVTdGF0ZShlZGl0b3IsIHRvZ2dsZVN0YXRlKSxcbiAgICBjb250ZXh0OiAnYW55J1xuICB9KTtcbn07XG5cbmV4cG9ydCB7XG4gIHJlZ2lzdGVyXG59O1xuIiwiaW1wb3J0ICogYXMgVHlwZSBmcm9tICcuLi9jb3JlL1R5cGUnO1xuaW1wb3J0ICogYXMgQXJyYXlVdGlsIGZyb20gJy4uL2NvcmUvQXJyYXlVdGlsJztcblxuLyoqIEEgd2F5IG9mIGNvbXBhcmluZyB0d28gdmFsdWVzIG9mIHRoZSBzYW1lIHR5cGUgZm9yIGVxdWFsaXR5LiAqL1xuZXhwb3J0IGludGVyZmFjZSBFcTxBPiB7XG4gIGVxOiAoeDogQSwgeTogQSkgPT4gYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGNvbnRyYW1hcCA9IDxBLCBCPiAoZXFhOiBFcTxBPiwgZjogKGI6IEIpID0+IEEpOiBFcTxCPiA9PlxuICBlcSgoeCwgeSkgPT4gZXFhLmVxKGYoeCksIGYoeSkpKTtcblxuZXhwb3J0IGNvbnN0IGVxID0gPEE+IChmOiAoeDogQSwgeTogQSkgPT4gYm9vbGVhbik6IEVxPEE+ID0+XG4gICh7IGVxOiBmIH0pO1xuXG5leHBvcnQgY29uc3QgdHJpcGxlRXE6IEVxPGFueT4gPSBlcSgoeCwgeSkgPT4geCA9PT0geSk7XG5cbmV4cG9ydCBjb25zdCBlcVN0cmluZzogRXE8c3RyaW5nPiA9IHRyaXBsZUVxO1xuXG5leHBvcnQgY29uc3QgZXFCb29sZWFuOiBFcTxib29sZWFuPiA9IHRyaXBsZUVxO1xuXG5leHBvcnQgY29uc3QgZXFOdW1iZXI6IEVxPG51bWJlcj4gPSB0cmlwbGVFcTtcblxuZXhwb3J0IGNvbnN0IGVxVW5kZWZpbmVkOiBFcTx1bmRlZmluZWQ+ID0gdHJpcGxlRXE7XG5cbmV4cG9ydCBjb25zdCBlcU51bGw6IEVxPG51bGw+ID0gdHJpcGxlRXE7XG5cbmV4cG9ydCBjb25zdCBlcUFycmF5ID0gPEE+IChlcWE6IEVxPEE+KTogRXE8QXJyYXlMaWtlPEE+PiA9PiBlcSgoeCwgeSkgPT4ge1xuICBpZiAoeC5sZW5ndGggIT09IHkubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGxlbiA9IHgubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKCFlcWEuZXEoeFtpXSwgeVtpXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59KTtcblxuLy8gVE9ETzogTWFrZSBhbiBPcmQgdHlwZWNsYXNzXG5jb25zdCBlcVNvcnRlZEFycmF5ID0gPEE+KGVxYTogRXE8QT4sIGNvbXBhcmVGbj86IChhOiBBLCBiOiBBKSA9PiBudW1iZXIpOiBFcTxBcnJheUxpa2U8QT4+ID0+XG4gIGNvbnRyYW1hcChlcUFycmF5KGVxYSksICh4cykgPT4gQXJyYXlVdGlsLnNvcnQoeHMsIGNvbXBhcmVGbikpO1xuXG5leHBvcnQgY29uc3QgZXFSZWNvcmQgPSA8QT4gKGVxYTogRXE8QT4pOiBFcTxSZWNvcmQ8c3RyaW5nLCBBPj4gPT4gZXEoKHgsIHkpID0+IHtcbiAgY29uc3Qga3ggPSBPYmplY3Qua2V5cyh4KTtcbiAgY29uc3Qga3kgPSBPYmplY3Qua2V5cyh5KTtcbiAgaWYgKCFlcVNvcnRlZEFycmF5KGVxU3RyaW5nKS5lcShreCwga3kpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGxlbiA9IGt4Lmxlbmd0aDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHEgPSBreFtpXTtcbiAgICBpZiAoIWVxYS5lcSh4W3FdLCB5W3FdKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn0pO1xuXG5leHBvcnQgY29uc3QgZXFBbnk6IEVxPGFueT4gPSBlcSgoeCwgeSkgPT4ge1xuICBpZiAoeCA9PT0geSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgY29uc3QgdHggPSBUeXBlLnR5cGVPZih4KTtcbiAgY29uc3QgdHkgPSBUeXBlLnR5cGVPZih5KTtcbiAgaWYgKHR4ICE9PSB0eSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChUeXBlLmlzRXF1YXRhYmxlVHlwZSh0eCkpIHtcbiAgICByZXR1cm4geCA9PT0geTtcblxuICB9IGVsc2UgaWYgKHR4ID09PSAnYXJyYXknKSB7XG4gICAgcmV0dXJuIGVxQXJyYXkoZXFBbnkpLmVxKHgsIHkpO1xuXG4gIH0gZWxzZSBpZiAodHggPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGVxUmVjb3JkKGVxQW55KS5lcSh4LCB5KTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn0pO1xuIiwiZXhwb3J0IGNvbnN0IG1hcCA9IDxBLCBCPih4czogQXJyYXlMaWtlPEE+LCBmOiAoYTogQSkgPT4gQik6IEJbXSA9PiB7XG4gIGNvbnN0IGxlbiA9IHhzLmxlbmd0aDtcbiAgY29uc3QgciA9IG5ldyBBcnJheShsZW4pO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIHJbaV0gPSBmKHgpO1xuICB9XG4gIHJldHVybiByO1xufTtcblxuLyoqIG1hcCBhIGZ1bmN0aW9uIG92ZXIgYW4gYXJyYXksIHRoZW4gbWFwIGFub3RoZXIgZnVuY3Rpb24gb3ZlciBldmVyeSBpdGVtIGV4Y2VwdCB0aGUgbGFzdCAqL1xuZXhwb3J0IGNvbnN0IG1hcERlbGltaXQgPSA8QSwgQj4gKHhzOiBBcnJheUxpa2U8QT4sIGY6IChhOiBBKSA9PiBCLCBkZWxpbWl0OiAoYjogQikgPT4gQik6IEJbXSA9PiB7XG4gIGNvbnN0IGxlbiA9IHhzLmxlbmd0aDtcbiAgY29uc3QgciA9IG5ldyBBcnJheShsZW4pO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbiAtIDE7IGkrKykge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICByW2ldID0gZGVsaW1pdChmKHgpKTtcbiAgfVxuICBpZiAobGVuID4gMCkge1xuICAgIHJbbGVuIC0gMV0gPSAoZih4c1tsZW4gLSAxXSkpO1xuICB9XG5cbiAgcmV0dXJuIHI7XG59O1xuXG5leHBvcnQgY29uc3Qgc29ydCA9IDxBPiAoeHM6IEFycmF5TGlrZTxBPiwgY29tcGFyZUZuPzogKGE6IEEsIGI6IEEpID0+IG51bWJlcik6IEFbXSA9PiB7XG4gIGNvbnN0IGNsb25lOiBBW10gPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh4cyk7XG4gIHJldHVybiBjbG9uZS5zb3J0KGNvbXBhcmVGbik7XG59O1xuIiwiZXhwb3J0IGNvbnN0IHR5cGVPZiA9ICh4OiBhbnkpID0+IHtcbiAgaWYgKHggPT09IG51bGwpIHtcbiAgICByZXR1cm4gJ251bGwnO1xuICB9XG4gIGlmICh4ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gJ3VuZGVmaW5lZCc7XG4gIH1cbiAgY29uc3QgdCA9IHR5cGVvZiB4O1xuICBpZiAodCA9PT0gJ29iamVjdCcgJiYgKEFycmF5LnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKHgpIHx8IHguY29uc3RydWN0b3IgJiYgeC5jb25zdHJ1Y3Rvci5uYW1lID09PSAnQXJyYXknKSkge1xuICAgIHJldHVybiAnYXJyYXknO1xuICB9XG4gIGlmICh0ID09PSAnb2JqZWN0JyAmJiAoU3RyaW5nLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKHgpIHx8IHguY29uc3RydWN0b3IgJiYgeC5jb25zdHJ1Y3Rvci5uYW1lID09PSAnU3RyaW5nJykpIHtcbiAgICByZXR1cm4gJ3N0cmluZyc7XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG5jb25zdCBpc1R5cGUgPSA8VD4odHlwZTogc3RyaW5nKSA9PiAodmFsdWU6IGFueSk6IHZhbHVlIGlzIFQgPT4gdHlwZU9mKHZhbHVlKSA9PT0gdHlwZTtcblxuZXhwb3J0IGNvbnN0IGlzU3RyaW5nID0gaXNUeXBlPHN0cmluZz4oJ3N0cmluZycpO1xuZXhwb3J0IGNvbnN0IGlzT2JqZWN0ID0gaXNUeXBlPE9iamVjdD4oJ29iamVjdCcpO1xuZXhwb3J0IGNvbnN0IGlzQXJyYXkgPSBpc1R5cGU8QXJyYXk8dW5rbm93bj4+KCdhcnJheScpO1xuZXhwb3J0IGNvbnN0IGlzTnVsbCA9IGlzVHlwZTxudWxsPignbnVsbCcpO1xuZXhwb3J0IGNvbnN0IGlzQm9vbGVhbiA9IGlzVHlwZTxib29sZWFuPignYm9vbGVhbicpO1xuZXhwb3J0IGNvbnN0IGlzVW5kZWZpbmVkID0gaXNUeXBlPHVuZGVmaW5lZD4oJ3VuZGVmaW5lZCcpO1xuZXhwb3J0IGNvbnN0IGlzRnVuY3Rpb24gPSBpc1R5cGU8RnVuY3Rpb24+KCdmdW5jdGlvbicpO1xuZXhwb3J0IGNvbnN0IGlzTnVtYmVyID0gaXNUeXBlPG51bWJlcj4oJ251bWJlcicpO1xuXG5leHBvcnQgY29uc3QgaXNFcXVhdGFibGVUeXBlID0gKHg6IHN0cmluZyk6IGJvb2xlYW4gPT5cbiAgWyAndW5kZWZpbmVkJywgJ2Jvb2xlYW4nLCAnbnVtYmVyJywgJ3N0cmluZycsICdmdW5jdGlvbicsICd4bWwnLCAnbnVsbCcgXS5pbmRleE9mKHgpICE9PSAtMTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcbiAgICAgICAgaWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuICAgICAgICB9XG4gICAgfVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydiA9ICgpID0+IChcIjEuNS4yXCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydWlkID0gXCJidW5kbGVyPXJzcGFja0AxLjUuMlwiO1xuIiwiaW1wb3J0IFBsdWdpbiBmcm9tICcuL1BsdWdpbic7XG5cblBsdWdpbigpO1xuXG4vKiogKioqKipcbiAqIERPIE5PVCBFWFBPUlQgQU5ZVEhJTkdcbiAqXG4gKiBJRiBZT1UgRE8gUk9MTFVQIFdJTEwgTEVBVkUgQSBHTE9CQUwgT04gVEhFIFBBR0VcbiAqKioqKioqL1xuIl0sIm5hbWVzIjpbIkVxIiwiRnVuIiwiT3B0aW9uYWwiLCJUeXBlIiwibmF0aXZlU2xpY2UiLCJBcnJheSIsIm5hdGl2ZUluZGV4T2YiLCJuYXRpdmVQdXNoIiwicmF3SW5kZXhPZiIsInRzIiwidCIsImluZGV4T2YiLCJ4cyIsIngiLCJyIiwiY29udGFpbnMiLCJleGlzdHMiLCJwcmVkIiwiaSIsImxlbiIsInJhbmdlIiwibnVtIiwiZiIsImNodW5rIiwiYXJyYXkiLCJzaXplIiwicyIsIm1hcCIsImVhY2giLCJlYWNociIsInBhcnRpdGlvbiIsInBhc3MiLCJmYWlsIiwiYXJyIiwiZmlsdGVyIiwiZ3JvdXBCeSIsIndhc1R5cGUiLCJncm91cCIsInR5cGUiLCJmb2xkciIsImFjYyIsImZvbGRsIiwiZmluZFVudGlsIiwidW50aWwiLCJmaW5kIiwiZmluZEluZGV4IiwiZmluZExhc3RJbmRleCIsImZsYXR0ZW4iLCJFcnJvciIsImJpbmQiLCJmb3JhbGwiLCJlcXVhbCIsImExIiwiYTIiLCJlcSIsInJldmVyc2UiLCJkaWZmZXJlbmNlIiwibWFwVG9PYmplY3QiLCJTdHJpbmciLCJwdXJlIiwic29ydCIsImNvbXBhcmF0b3IiLCJjb3B5IiwiZ2V0IiwiaGVhZCIsImxhc3QiLCJmcm9tIiwiZmluZE1hcCIsInVuaXF1ZSIsImlzRHVwbGljYXRlZCIsIkNlbGwiLCJpbml0aWFsIiwidmFsdWUiLCJzZXQiLCJ2Iiwibm9vcCIsIm5vYXJnIiwiY29tcG9zZSIsImZhIiwiZmIiLCJhcmdzIiwiY29tcG9zZTEiLCJmYmMiLCJmYWIiLCJhIiwiY29uc3RhbnQiLCJpZGVudGl0eSIsInRyaXBsZUVxdWFscyIsImIiLCJjdXJyeSIsImZuIiwiaW5pdGlhbEFyZ3MiLCJyZXN0QXJncyIsImFsbCIsIm5vdCIsImRpZSIsIm1zZyIsImFwcGx5IiwiY2FsbCIsIm5ldmVyIiwiYWx3YXlzIiwid2Vha2VuIiwicGlwZSIsImFiIiwiYmMiLCJjZCIsImRlIiwiZWYiLCJmZyIsImdoIiwiYyIsImQiLCJlIiwiZyIsIkdsb2JhbCIsIndpbmRvdyIsIkZ1bmN0aW9uIiwia2V5cyIsIk9iamVjdCIsImhhc093blByb3BlcnR5Iiwib2JqIiwicHJvcHMiLCJrIiwidHVwbGVNYXAiLCJ0dXBsZSIsIm9iakFjYyIsImludGVybmFsRmlsdGVyIiwib25UcnVlIiwib25GYWxzZSIsImJpZmlsdGVyIiwibWFwVG9BcnJheSIsIm5hbWUiLCJ2YWx1ZXMiLCJrZXkiLCJoYXMiLCJoYXNOb25OdWxsYWJsZUtleSIsInVuZGVmaW5lZCIsImlzRW1wdHkiLCJ0YWciLCJvbk5vbmUiLCJvblNvbWUiLCJtYXBwZXIiLCJiaW5kZXIiLCJwcmVkaWNhdGUiLCJyZXBsYWNlbWVudCIsInRodW5rIiwibWVzc2FnZSIsIndvcmtlciIsInBhdGgiLCJwYXJ0cyIsInNjb3BlIiwibyIsInJlc29sdmUiLCJwIiwic3RlcCIsInBhcnQiLCJmb3JnZSIsInRhcmdldCIsIm5hbWVzcGFjZSIsImFkYXB0YWJsZSIsInJhdGUiLCJ0aW1lciIsImNhbmNlbCIsImNsZWFyVGltZW91dCIsInRocm90dGxlIiwibmV3QXJncyIsInNldFRpbWVvdXQiLCJ0ZW1wQXJncyIsImZpcnN0IiwiZ2V0UHJvdG90eXBlT2YiLCJoYXNQcm90byIsImNvbnN0cnVjdG9yIiwidHlwZU9mIiwicHJvdG8iLCJpc1R5cGUiLCJpc1NpbXBsZVR5cGUiLCJpcyIsImlzT2JqZWN0IiwiaXNTdHJpbmciLCJpc1BsYWluT2JqZWN0IiwiaXNBcnJheSIsImlzTnVsbCIsImlzQm9vbGVhbiIsImlzVW5kZWZpbmVkIiwiaXNOdWxsYWJsZSIsImlzTm9uTnVsbGFibGUiLCJpc0Z1bmN0aW9uIiwiaXNOdW1iZXIiLCJpc0FycmF5T2YiLCJpc1Byb21pc2VMaWtlIiwiUmVzb2x2ZSIsInNhbmRIVE1MRWxlbWVudCIsImlzUHJvdG90eXBlT2YiLCJ1bnNhZmUiLCJnZXRPckRpZSIsImFjdHVhbCIsInRvQXJyYXkiLCJyZWN1cnNlIiwiY3VyIiwiQXJyIiwiU2VsZWN0b3JzIiwiZTEiLCJlMiIsImlzRXF1YWxOb2RlIiwibWVtYmVyIiwiZWxlbWVudCIsImVsZW1lbnRzIiwiZDEiLCJkMiIsIkFUVFJJQlVURSIsIkNEQVRBX1NFQ1RJT04iLCJDT01NRU5UIiwiRE9DVU1FTlQiLCJET0NVTUVOVF9UWVBFIiwiRE9DVU1FTlRfRlJBR01FTlQiLCJFTEVNRU5UIiwiVEVYVCIsIlBST0NFU1NJTkdfSU5TVFJVQ1RJT04iLCJFTlRJVFlfUkVGRVJFTkNFIiwiRU5USVRZIiwiTk9UQVRJT04iLCJTdWdhckVsZW1lbnQiLCJTdWdhck5vZGUiLCJnZXRTaGFkb3dIb3N0IiwiZ2V0U2hhZG93Um9vdCIsImluQm9keSIsImRvbSIsImRvYyIsImJvZHkiLCJnZXRCb2R5IiwiZG9jdW1lbnQiLCJmcm9tSHRtbCIsImh0bWwiLCJkaXYiLCJjb25zb2xlIiwiZnJvbURvbSIsImZyb21UYWciLCJub2RlIiwiZnJvbVRleHQiLCJ0ZXh0IiwiZnJvbVBvaW50IiwiZG9jRWxtIiwieSIsImdldEhlYWQiLCJTYW5kSFRNTEVsZW1lbnQiLCJOb2RlVHlwZXMiLCJpc0NvbW1lbnQiLCJpc0hUTUxFbGVtZW50IiwiaXNFbGVtZW50IiwiaXNUZXh0IiwiaXNEb2N1bWVudCIsImlzRG9jdW1lbnRGcmFnbWVudCIsImlzVGFnIiwiVHJhdmVyc2UiLCJTdWdhckhlYWQiLCJpc1NoYWRvd1Jvb3QiLCJkb3MiLCJnZXRSb290Tm9kZSIsImNyZWF0ZUVsZW1lbnQiLCJnZXRTdHlsZUNvbnRhaW5lciIsImdldENvbnRlbnRDb250YWluZXIiLCJpc0luU2hhZG93Um9vdCIsImdldE9yaWdpbmFsRXZlbnRUYXJnZXQiLCJldmVudCIsImVsIiwiaXNPcGVuU2hhZG93SG9zdCIsImNvbXBvc2VkUGF0aCIsImlzT3BlblNoYWRvd1Jvb3QiLCJzciIsImlzQ2xvc2VkU2hhZG93Um9vdCIsIkF0dHJpYnV0ZSIsInJlYWQiLCJhdHRyIiwiYWRkIiwiaWQiLCJvbGQiLCJudSIsInJlbW92ZSIsIk9iaiIsInJhd1NldCIsInNldEFsbCIsImF0dHJzIiwic2V0T3B0aW9ucyIsImdldE9wdCIsImhhc05vbmUiLCJjbG9uZSIsInRyYW5zZmVyT25lIiwic291cmNlIiwiZGVzdGluYXRpb24iLCJzcmNWYWx1ZSIsInRyYW5zZmVyIiwiQ2xhc3NMaXN0IiwiVG9nZ2xlciIsImNsYXp6IiwiY2xlYW5DbGFzcyIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInJlc3VsdCIsInRvZ2dsZXIiLCJoYXNDbGFzc2xpc3QiLCJvZmYiLCJvbiIsIlN1Z2FyQm9keSIsIlNlbGVjdG9yRmluZCIsImNsb3Nlc3QiLCJpc0VkaXRhYmxlIiwiYXNzdW1lRWRpdGFibGUiLCJlZGl0YWJsZSIsImdldFJhdyIsInR1cm5PZmYiLCJ0dXJuT24iLCJhY3RpdmUiLCJpc09uIiwiQ2xvc2VzdE9yQW5jZXN0b3IiLCJDb21wYXJlIiwiZGVzY2VuZGFudCIsImFuY2VzdG9yIiwiaXNSb290Iiwic3RvcCIsInRlc3QiLCJzaWJsaW5nIiwiY2hpbGQiLCJkZXNjZW5kIiwicmVzIiwiUHJlZGljYXRlRmluZCIsInNlbGVjdG9yIiwiZWxlbSIsImJ5cGFzc1NlbGVjdG9yIiwiYmFzZSIsIm9uZSIsIlJlY3Vyc2UiLCJvd25lciIsImRvY3VtZW50T3JPd25lciIsImRvY3VtZW50RWxlbWVudCIsImRlZmF1bHRWaWV3IiwicGFyZW50IiwicGFyZW50Tm9kZSIsInBhcmVudEVsZW1lbnQiLCJraW4iLCJjaGlsZHJlbiIsInBhcmVudHMiLCJyZXQiLCJyYXdQYXJlbnQiLCJzaWJsaW5ncyIsImZpbHRlclNlbGYiLCJvZmZzZXRQYXJlbnQiLCJwcmV2U2libGluZyIsIm5leHRTaWJsaW5nIiwicHJldlNpYmxpbmdzIiwibmV4dFNpYmxpbmdzIiwiaW5kZXgiLCJjcyIsImZpcnN0Q2hpbGQiLCJsYXN0Q2hpbGQiLCJjaGlsZE5vZGVzQ291bnQiLCJoYXNDaGlsZE5vZGVzIiwic3BvdCIsIm9mZnNldCIsImxlYWYiLCJBdHRyTGlzdCIsInN1cHBvcnRzIiwiUGx1Z2luTWFuYWdlciIsIkFwaSIsIkNvbW1hbmRzIiwiT3B0aW9ucyIsIkJpbmRpbmdzIiwiS2V5Ym9hcmQiLCJCdXR0b25zIiwiZWRpdG9yIiwidG9nZ2xlU3RhdGUiLCJpc0VuYWJsZWQiLCJBY3Rpb25zIiwicmVnaXN0ZXIiLCJmaXJlVmlzdWFsQ2hhcnMiLCJzdGF0ZSIsIm9wdGlvbiIsInJlZ2lzdGVyT3B0aW9uIiwiaXNFbmFibGVkQnlEZWZhdWx0IiwiRXZlbnRzIiwiVmlzdWFsQ2hhcnMiLCJhcHBseVZpc3VhbENoYXJzIiwidG9nZ2xlVmlzdWFsQ2hhcnMiLCJib29rbWFyayIsInNldHVwIiwiY2hhck1hcCIsImNoYXJNYXBUb1JlZ0V4cCIsImdsb2JhbCIsInJlZ0V4cCIsIl92YWx1ZSIsIlJlZ0V4cCIsImNoYXJNYXBUb1NlbGVjdG9yIiwicmVnRXhwR2xvYmFsIiwibmJzcENsYXNzIiwiRGF0YSIsIndyYXBDaGFyV2l0aFNwYW4iLCJUaHJvdHRsZXIiLCJkZWJvdW5jZWRUb2dnbGUiLCJDb250ZW50RWRpdGFibGUiLCJIdG1sIiwiaXNXcmFwcGVkTmJzcCIsImlzTWF0Y2giLCJuIiwiaXNDb250ZW50RWRpdGFibGVGYWxzZSIsImlzQ2hpbGRFZGl0YWJsZSIsImN1cnJlbnRTdGF0ZSIsImZpbHRlckVkaXRhYmxlRGVzY2VuZGFudHMiLCJmaW5kUGFyZW50RWxtIiwiZWxtIiwicm9vdEVsbSIsInJlcGxhY2VXaXRoU3BhbnMiLCJDbGFzcyIsIk5vZGVzIiwic2hvdyIsIm5vZGVMaXN0Iiwid2l0aFNwYW5zIiwiaGlkZSIsInRvZ2dsZUFjdGl2ZVN0YXRlIiwiZW5hYmxlZFN0YXRlZCIsImFwaSIsImVkaXRvckV2ZW50Q2FsbGJhY2siLCJvbkFjdGlvbiIsIlBsdWdpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLDZEQUFlLE1BQU0sRUFBQztBQUNmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNINkI7QUFFUDtBQUNTO0FBQ1A7QUFPL0IsTUFBTUksY0FBY0MsTUFBTSxTQUFTLENBQUMsS0FBSztBQUN6QyxNQUFNQyxnQkFBZ0JELE1BQU0sU0FBUyxDQUFDLE9BQU87QUFDN0MsTUFBTUUsYUFBYUYsTUFBTSxTQUFTLENBQUMsSUFBSTtBQUV2QyxNQUFNRyxhQUFhLENBQUtDLElBQWtCQyxJQUN4Q0osY0FBYyxJQUFJLENBQUNHLElBQUlDO0FBRWxCLE1BQU1DLFVBQVUsQ0FBVUMsSUFBa0JDO0lBQ2pELHdGQUF3RjtJQUN4RixNQUFNQyxJQUFJTixXQUFXSSxJQUFJQztJQUN6QixPQUFPQyxNQUFNLENBQUMsSUFBSVosb0RBQWEsS0FBS0Esb0RBQWEsQ0FBQ1k7QUFDcEQsRUFBRTtBQUVLLE1BQU1DLFdBQVcsQ0FBSUgsSUFBa0JDLElBQWtCTCxXQUFXSSxJQUFJQyxLQUFLLENBQUMsRUFBRTtBQUVoRixNQUFNRyxTQUFTLENB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