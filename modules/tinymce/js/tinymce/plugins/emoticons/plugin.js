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
"./lib/globals/tinymce/core/api/Resource.js": 
/*!**************************************************!*\
  !*** ./lib/globals/tinymce/core/api/Resource.js ***!
  \**************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Resource: () => (Resource),
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
var global = tinymce.util.Tools.resolve('tinymce.Resource');

/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (global);
var Resource = global;


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
"./src/plugins/emoticons/main/ts/Plugin.ts": 
/*!*************************************************!*\
  !*** ./src/plugins/emoticons/main/ts/Plugin.ts ***!
  \*************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var tinymce_core_api_PluginManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/PluginManager */ "./lib/globals/tinymce/core/api/PluginManager.js");
/* ESM import */var _api_Commands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/Commands */ "./src/plugins/emoticons/main/ts/api/Commands.ts");
/* ESM import */var _api_Options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/Options */ "./src/plugins/emoticons/main/ts/api/Options.ts");
/* ESM import */var _core_EmojiDatabase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/EmojiDatabase */ "./src/plugins/emoticons/main/ts/core/EmojiDatabase.ts");
/* ESM import */var _core_Filters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/Filters */ "./src/plugins/emoticons/main/ts/core/Filters.ts");
/* ESM import */var _ui_Autocompletion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/Autocompletion */ "./src/plugins/emoticons/main/ts/ui/Autocompletion.ts");
/* ESM import */var _ui_Buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/Buttons */ "./src/plugins/emoticons/main/ts/ui/Buttons.ts");







/**
 * This class contains all core logic for the emoticons plugin.
 *
 * @class tinymce.emoticons.Plugin
 * @private
 */ /* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>{
    tinymce_core_api_PluginManager__WEBPACK_IMPORTED_MODULE_0__["default"].add('emoticons', (editor, pluginUrl)=>{
        _api_Options__WEBPACK_IMPORTED_MODULE_2__.register(editor, pluginUrl);
        const databaseUrl = _api_Options__WEBPACK_IMPORTED_MODULE_2__.getEmojiDatabaseUrl(editor);
        const databaseId = _api_Options__WEBPACK_IMPORTED_MODULE_2__.getEmojiDatabaseId(editor);
        const database = (0,_core_EmojiDatabase__WEBPACK_IMPORTED_MODULE_3__.initDatabase)(editor, databaseUrl, databaseId);
        _api_Commands__WEBPACK_IMPORTED_MODULE_1__.register(editor, database);
        _ui_Buttons__WEBPACK_IMPORTED_MODULE_6__.register(editor);
        _ui_Autocompletion__WEBPACK_IMPORTED_MODULE_5__.init(editor, database);
        _core_Filters__WEBPACK_IMPORTED_MODULE_4__.setup(editor);
        return {
            getAllEmojis: ()=>database.waitForLoad().then(()=>database.listAll())
        };
    });
});


}),
"./src/plugins/emoticons/main/ts/api/Commands.ts": 
/*!*******************************************************!*\
  !*** ./src/plugins/emoticons/main/ts/api/Commands.ts ***!
  \*******************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  register: () => (register)
});
/* ESM import */var _ui_Dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/Dialog */ "./src/plugins/emoticons/main/ts/ui/Dialog.ts");

const register = (editor, database)=>{
    editor.addCommand('mceEmoticons', ()=>_ui_Dialog__WEBPACK_IMPORTED_MODULE_0__.open(editor, database));
};



}),
"./src/plugins/emoticons/main/ts/api/Options.ts": 
/*!******************************************************!*\
  !*** ./src/plugins/emoticons/main/ts/api/Options.ts ***!
  \******************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getAppendedEmoji: () => (getAppendedEmoji),
  getEmojiDatabase: () => (getEmojiDatabase),
  getEmojiDatabaseId: () => (getEmojiDatabaseId),
  getEmojiDatabaseUrl: () => (getEmojiDatabaseUrl),
  getEmojiImageUrl: () => (getEmojiImageUrl),
  register: () => (register)
});
const DEFAULT_ID = 'tinymce.plugins.emoticons';
const option = (name)=>(editor)=>editor.options.get(name);
const register = (editor, pluginUrl)=>{
    const registerOption = editor.options.register;
    registerOption('emoticons_database', {
        processor: 'string',
        default: 'emojis'
    });
    registerOption('emoticons_database_url', {
        processor: 'string',
        default: `${pluginUrl}/js/${getEmojiDatabase(editor)}${editor.suffix}.js`
    });
    registerOption('emoticons_database_id', {
        processor: 'string',
        default: DEFAULT_ID
    });
    registerOption('emoticons_append', {
        processor: 'object',
        default: {}
    });
    registerOption('emoticons_images_url', {
        processor: 'string',
        default: 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/15.1.0/72x72/'
    });
};
const getEmojiDatabase = option('emoticons_database');
const getEmojiDatabaseUrl = option('emoticons_database_url');
const getEmojiDatabaseId = option('emoticons_database_id');
const getAppendedEmoji = option('emoticons_append');
const getEmojiImageUrl = option('emoticons_images_url');



}),
"./src/plugins/emoticons/main/ts/core/Actions.ts": 
/*!*******************************************************!*\
  !*** ./src/plugins/emoticons/main/ts/core/Actions.ts ***!
  \*******************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  insertEmoticon: () => (insertEmoticon)
});
const insertEmoticon = (editor, ch)=>{
    editor.insertContent(ch);
};



}),
"./src/plugins/emoticons/main/ts/core/EmojiDatabase.ts": 
/*!*************************************************************!*\
  !*** ./src/plugins/emoticons/main/ts/core/EmojiDatabase.ts ***!
  \*************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ALL_CATEGORY: () => (ALL_CATEGORY),
  initDatabase: () => (initDatabase)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Obj.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Singleton.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Strings.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Merger.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Optional.ts");
/* ESM import */var tinymce_core_api_Resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/Resource */ "./lib/globals/tinymce/core/api/Resource.js");
/* ESM import */var _api_Options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/Options */ "./src/plugins/emoticons/main/ts/api/Options.ts");



const ALL_CATEGORY = 'All';
const categoryNameMap = {
    symbols: 'Symbols',
    people: 'People',
    animals_and_nature: 'Animals and Nature',
    food_and_drink: 'Food and Drink',
    activity: 'Activity',
    travel_and_places: 'Travel and Places',
    objects: 'Objects',
    flags: 'Flags',
    user: 'User Defined'
};
const translateCategory = (categories, name)=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.has(categories, name) ? categories[name] : name;
const getUserDefinedEmoji = (editor)=>{
    const userDefinedEmoticons = _api_Options__WEBPACK_IMPORTED_MODULE_1__.getAppendedEmoji(editor);
    return _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.map(userDefinedEmoticons, (value)=>// Set some sane defaults for the custom emoji entry
        ({
            keywords: [],
            category: 'user',
            ...value
        }));
};
// TODO: Consider how to share this loading across different editors
const initDatabase = (editor, databaseUrl, databaseId)=>{
    const categories = _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__.value();
    const all = _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__.value();
    const emojiImagesUrl = _api_Options__WEBPACK_IMPORTED_MODULE_1__.getEmojiImageUrl(editor);
    const getEmoji = (lib)=>{
        // Note: This is a little hacky, but the database doesn't provide a way for us to tell what sort of database is being used
        if (_ephox_katamari__WEBPACK_IMPORTED_MODULE_4__.startsWith(lib.char, '<img')) {
            return lib.char.replace(/src="([^"]+)"/, (match, url)=>`src="${emojiImagesUrl}${url}"`);
        } else {
            return lib.char;
        }
    };
    const processEmojis = (emojis)=>{
        const cats = {};
        const everything = [];
        _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.each(emojis, (lib, title)=>{
            const entry = {
                // Omitting fitzpatrick_scale
                title,
                keywords: lib.keywords,
                char: getEmoji(lib),
                category: translateCategory(categoryNameMap, lib.category)
            };
            const current = cats[entry.category] !== undefined ? cats[entry.category] : [];
            cats[entry.category] = current.concat([
                entry
            ]);
            everything.push(entry);
        });
        categories.set(cats);
        all.set(everything);
    };
    editor.on('init', ()=>{
        tinymce_core_api_Resource__WEBPACK_IMPORTED_MODULE_0__["default"].load(databaseId, databaseUrl).then((emojis)=>{
            const userEmojis = getUserDefinedEmoji(editor);
            processEmojis(_ephox_katamari__WEBPACK_IMPORTED_MODULE_5__.merge(emojis, userEmojis));
        }, (err)=>{
            // eslint-disable-next-line no-console
            console.log(`Failed to load emojis: ${err}`);
            categories.set({});
            all.set([]);
        });
    });
    const listCategory = (category)=>{
        if (category === ALL_CATEGORY) {
            return listAll();
        }
        return categories.get().bind((cats)=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_6__.Optional.from(cats[category])).getOr([]);
    };
    const listAll = ()=>all.get().getOr([]);
    const listCategories = ()=>// TODO: Category key order should be adjusted to match the standard
        [
            ALL_CATEGORY
        ].concat(_ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.keys(categories.get().getOr({})));
    const waitForLoad = ()=>{
        if (hasLoaded()) {
            return Promise.resolve(true);
        } else {
            return new Promise((resolve, reject)=>{
                let numRetries = 15;
                const interval = setInterval(()=>{
                    if (hasLoaded()) {
                        clearInterval(interval);
                        resolve(true);
                    } else {
                        numRetries--;
                        if (numRetries < 0) {
                            // eslint-disable-next-line no-console
                            console.log('Could not load emojis from url: ' + databaseUrl);
                            clearInterval(interval);
                            reject(false);
                        }
                    }
                }, 100);
            });
        }
    };
    const hasLoaded = ()=>categories.isSet() && all.isSet();
    return {
        listCategories,
        hasLoaded,
        waitForLoad,
        listAll,
        listCategory
    };
};
// Load the script.



}),
"./src/plugins/emoticons/main/ts/core/Filters.ts": 
/*!*******************************************************!*\
  !*** ./src/plugins/emoticons/main/ts/core/Filters.ts ***!
  \*******************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  setup: () => (setup)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Arr.ts");

const setup = (editor)=>{
    editor.on('PreInit', ()=>{
        editor.parser.addAttributeFilter('data-emoticon', (nodes)=>{
            _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.each(nodes, (node)=>{
                node.attr('data-mce-resize', 'false');
                node.attr('data-mce-placeholder', '1');
            });
        });
    });
};


}),
"./src/plugins/emoticons/main/ts/core/Lookup.ts": 
/*!******************************************************!*\
  !*** ./src/plugins/emoticons/main/ts/core/Lookup.ts ***!
  \******************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  emojisFrom: () => (emojisFrom)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Strings.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Arr.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Fun.ts");

const emojiMatches = (emoji, lowerCasePattern)=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.contains(emoji.title.toLowerCase(), lowerCasePattern) || _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.exists(emoji.keywords, (k)=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.contains(k.toLowerCase(), lowerCasePattern));
const emojisFrom = (list, pattern, maxResults)=>{
    const matches = [];
    const lowerCasePattern = pattern.toLowerCase();
    const reachedLimit = maxResults.fold(()=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.never, (max)=>(size)=>size >= max);
    for(let i = 0; i < list.length; i++){
        // TODO: more intelligent search by showing title matches at the top, keyword matches after that (use two arrays and concat at the end)
        if (pattern.length === 0 || emojiMatches(list[i], lowerCasePattern)) {
            matches.push({
                value: list[i].char,
                text: list[i].title,
                icon: list[i].char
            });
            if (reachedLimit(matches.length)) {
                break;
            }
        }
    }
    return matches;
};



}),
"./src/plugins/emoticons/main/ts/ui/Autocompletion.ts": 
/*!************************************************************!*\
  !*** ./src/plugins/emoticons/main/ts/ui/Autocompletion.ts ***!
  \************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  init: () => (init)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Optional.ts");
/* ESM import */var _core_Lookup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Lookup */ "./src/plugins/emoticons/main/ts/core/Lookup.ts");


const init = (editor, database)=>{
    editor.ui.registry.addAutocompleter('emoticons', {
        trigger: ':',
        columns: 'auto',
        minChars: 2,
        fetch: (pattern, maxResults)=>database.waitForLoad().then(()=>{
                const candidates = database.listAll();
                return (0,_core_Lookup__WEBPACK_IMPORTED_MODULE_0__.emojisFrom)(candidates, pattern, _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.Optional.some(maxResults));
            }),
        onAction: (autocompleteApi, rng, value)=>{
            editor.selection.setRng(rng);
            editor.insertContent(value);
            autocompleteApi.hide();
        }
    });
};



}),
"./src/plugins/emoticons/main/ts/ui/Buttons.ts": 
/*!*****************************************************!*\
  !*** ./src/plugins/emoticons/main/ts/ui/Buttons.ts ***!
  \*****************************************************/
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
    const onAction = ()=>editor.execCommand('mceEmoticons');
    editor.ui.registry.addButton('emoticons', {
        tooltip: 'Emojis',
        icon: 'emoji',
        onAction,
        onSetup: onSetupEditable(editor)
    });
    editor.ui.registry.addMenuItem('emoticons', {
        text: 'Emojis...',
        icon: 'emoji',
        onAction,
        onSetup: onSetupEditable(editor)
    });
};



}),
"./src/plugins/emoticons/main/ts/ui/Dialog.ts": 
/*!****************************************************!*\
  !*** ./src/plugins/emoticons/main/ts/ui/Dialog.ts ***!
  \****************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  open: () => (open)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Optional.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Cell.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Throttler.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Arr.ts");
/* ESM import */var _core_Actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Actions */ "./src/plugins/emoticons/main/ts/core/Actions.ts");
/* ESM import */var _core_EmojiDatabase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/EmojiDatabase */ "./src/plugins/emoticons/main/ts/core/EmojiDatabase.ts");
/* ESM import */var _core_Lookup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/Lookup */ "./src/plugins/emoticons/main/ts/core/Lookup.ts");




const patternName = 'pattern';
const open = (editor, database)=>{
    const initialState = {
        pattern: '',
        results: (0,_core_Lookup__WEBPACK_IMPORTED_MODULE_2__.emojisFrom)(database.listAll(), '', _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__.Optional.some(300))
    };
    const currentTab = (0,_ephox_katamari__WEBPACK_IMPORTED_MODULE_4__.Cell)(_core_EmojiDatabase__WEBPACK_IMPORTED_MODULE_1__.ALL_CATEGORY);
    const scan = (dialogApi)=>{
        const dialogData = dialogApi.getData();
        const category = currentTab.get();
        const candidates = database.listCategory(category);
        const results = (0,_core_Lookup__WEBPACK_IMPORTED_MODULE_2__.emojisFrom)(candidates, dialogData[patternName], category === _core_EmojiDatabase__WEBPACK_IMPORTED_MODULE_1__.ALL_CATEGORY ? _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__.Optional.some(300) : _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__.Optional.none());
        dialogApi.setData({
            results
        });
    };
    const updateFilter = _ephox_katamari__WEBPACK_IMPORTED_MODULE_5__.last((dialogApi)=>{
        scan(dialogApi);
    }, 200);
    const searchField = {
        label: 'Search',
        type: 'input',
        name: patternName
    };
    const resultsField = {
        type: 'collection',
        name: 'results'
    };
    const getInitialState = ()=>{
        const body = {
            type: 'tabpanel',
            // All tabs have the same fields.
            tabs: _ephox_katamari__WEBPACK_IMPORTED_MODULE_6__.map(database.listCategories(), (cat)=>({
                    title: cat,
                    name: cat,
                    items: [
                        searchField,
                        resultsField
                    ]
                }))
        };
        return {
            title: 'Emojis',
            size: 'normal',
            body,
            initialData: initialState,
            onTabChange: (dialogApi, details)=>{
                currentTab.set(details.newTabName);
                updateFilter.throttle(dialogApi);
            },
            onChange: updateFilter.throttle,
            onAction: (dialogApi, actionData)=>{
                if (actionData.name === 'results') {
                    (0,_core_Actions__WEBPACK_IMPORTED_MODULE_0__.insertEmoticon)(editor, actionData.value);
                    dialogApi.close();
                }
            },
            buttons: [
                {
                    type: 'cancel',
                    text: 'Close',
                    primary: true
                }
            ]
        };
    };
    const dialogApi = editor.windowManager.open(getInitialState());
    dialogApi.focus(patternName);
    if (!database.hasLoaded()) {
        dialogApi.block('Loading emojis...');
        database.waitForLoad().then(()=>{
            dialogApi.redial(getInitialState());
            updateFilter.throttle(dialogApi);
            dialogApi.focus(patternName);
            dialogApi.unblock();
        }).catch((_err)=>{
            dialogApi.redial({
                title: 'Emojis',
                body: {
                    type: 'panel',
                    items: [
                        {
                            type: 'alertbanner',
                            level: 'error',
                            icon: 'warning',
                            text: 'Could not load emojis'
                        }
                    ]
                },
                buttons: [
                    {
                        type: 'cancel',
                        text: 'Close',
                        primary: true
                    }
                ],
                initialData: {
                    pattern: '',
                    results: []
                }
            });
            dialogApi.focus(patternName);
            dialogApi.unblock();
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
  !*** ./src/plugins/emoticons/main/ts/Main.ts ***!
  \***********************************************/
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _Plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Plugin */ "./src/plugins/emoticons/main/ts/Plugin.ts");

(0,_Plugin__WEBPACK_IMPORTED_MODULE_0__["default"])(); /** *****
 * DO NOT EXPORT ANYTHING
 *
 * IF YOU DO ROLLUP WILL LEAVE A GLOBAL ON THE PAGE
 *******/ 

})();

})()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdGlueW1jZS9wbHVnaW5zL2Vtb3RpY29ucy9wbHVnaW4uanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aW55bWNlLy4vbGliL2dsb2JhbHMvdGlueW1jZS9jb3JlL2FwaS9QbHVnaW5NYW5hZ2VyLmpzIiwid2VicGFjazovL3RpbnltY2UvLi9saWIvZ2xvYmFscy90aW55bWNlL2NvcmUvYXBpL1Jlc291cmNlLmpzIiwid2VicGFjazovL3RpbnltY2UvLi4va2F0YW1hcmkvc3JjL21haW4vdHMvZXBob3gva2F0YW1hcmkvYXBpL0Fyci50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL2thdGFtYXJpL3NyYy9tYWluL3RzL2VwaG94L2thdGFtYXJpL2FwaS9DZWxsLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4va2F0YW1hcmkvc3JjL21haW4vdHMvZXBob3gva2F0YW1hcmkvYXBpL0Z1bi50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL2thdGFtYXJpL3NyYy9tYWluL3RzL2VwaG94L2thdGFtYXJpL2FwaS9NZXJnZXIudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9rYXRhbWFyaS9zcmMvbWFpbi90cy9lcGhveC9rYXRhbWFyaS9hcGkvT2JqLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4va2F0YW1hcmkvc3JjL21haW4vdHMvZXBob3gva2F0YW1hcmkvYXBpL09wdGlvbmFsLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4va2F0YW1hcmkvc3JjL21haW4vdHMvZXBob3gva2F0YW1hcmkvYXBpL1NpbmdsZXRvbi50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL2thdGFtYXJpL3NyYy9tYWluL3RzL2VwaG94L2thdGFtYXJpL2FwaS9TdHJpbmdzLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4va2F0YW1hcmkvc3JjL21haW4vdHMvZXBob3gva2F0YW1hcmkvYXBpL1Rocm90dGxlci50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL2thdGFtYXJpL3NyYy9tYWluL3RzL2VwaG94L2thdGFtYXJpL2FwaS9UeXBlLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4va2F0YW1hcmkvc3JjL21haW4vdHMvZXBob3gva2F0YW1hcmkvc3RyL1N0ckFwcGVuZC50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvZW1vdGljb25zL21haW4vdHMvUGx1Z2luLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9lbW90aWNvbnMvbWFpbi90cy9hcGkvQ29tbWFuZHMudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL2Vtb3RpY29ucy9tYWluL3RzL2FwaS9PcHRpb25zLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9lbW90aWNvbnMvbWFpbi90cy9jb3JlL0FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL2Vtb3RpY29ucy9tYWluL3RzL2NvcmUvRW1vamlEYXRhYmFzZS50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvZW1vdGljb25zL21haW4vdHMvY29yZS9GaWx0ZXJzLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9lbW90aWNvbnMvbWFpbi90cy9jb3JlL0xvb2t1cC50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvZW1vdGljb25zL21haW4vdHMvdWkvQXV0b2NvbXBsZXRpb24udHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL2Vtb3RpY29ucy9tYWluL3RzL3VpL0J1dHRvbnMudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL2Vtb3RpY29ucy9tYWluL3RzL3VpL0RpYWxvZy50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uLy4uL25vZGVfbW9kdWxlcy9AZXBob3gvZGlzcHV0ZS9zcmMvbWFpbi90cy9hcGkvRXEudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi8uLi9ub2RlX21vZHVsZXMvQGVwaG94L2Rpc3B1dGUvc3JjL21haW4vdHMvY29yZS9BcnJheVV0aWwudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi8uLi9ub2RlX21vZHVsZXMvQGVwaG94L2Rpc3B1dGUvc3JjL21haW4vdHMvY29yZS9UeXBlLnRzIiwid2VicGFjazovL3RpbnltY2Uvd2VicGFjay9ydW50aW1lL2RlZmluZV9wcm9wZXJ0eV9nZXR0ZXJzIiwid2VicGFjazovL3RpbnltY2Uvd2VicGFjay9ydW50aW1lL2hhc19vd25fcHJvcGVydHkiLCJ3ZWJwYWNrOi8vdGlueW1jZS93ZWJwYWNrL3J1bnRpbWUvbWFrZV9uYW1lc3BhY2Vfb2JqZWN0Iiwid2VicGFjazovL3RpbnltY2Uvd2VicGFjay9ydW50aW1lL3JzcGFja192ZXJzaW9uIiwid2VicGFjazovL3RpbnltY2Uvd2VicGFjay9ydW50aW1lL3JzcGFja191bmlxdWVfaWQiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL2Vtb3RpY29ucy9tYWluL3RzL01haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGdsb2JhbCA9IHRpbnltY2UudXRpbC5Ub29scy5yZXNvbHZlKCd0aW55bWNlLlBsdWdpbk1hbmFnZXInKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2xvYmFsO1xuZXhwb3J0IHZhciBQbHVnaW5NYW5hZ2VyID0gZ2xvYmFsO1xuIiwidmFyIGdsb2JhbCA9IHRpbnltY2UudXRpbC5Ub29scy5yZXNvbHZlKCd0aW55bWNlLlJlc291cmNlJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGdsb2JhbDtcbmV4cG9ydCB2YXIgUmVzb3VyY2UgPSBnbG9iYWw7XG4iLCJpbXBvcnQgeyBFcSB9IGZyb20gJ0BlcGhveC9kaXNwdXRlJztcblxuaW1wb3J0ICogYXMgRnVuIGZyb20gJy4vRnVuJztcbmltcG9ydCB7IE9wdGlvbmFsIH0gZnJvbSAnLi9PcHRpb25hbCc7XG5pbXBvcnQgKiBhcyBUeXBlIGZyb20gJy4vVHlwZSc7XG5cbnR5cGUgQXJyYXlNb3JwaGlzbTxULCBVPiA9ICh4OiBULCBpOiBudW1iZXIpID0+IFU7XG50eXBlIEFycmF5R3VhcmRQcmVkaWNhdGU8VCwgVSBleHRlbmRzIFQ+ID0gKHg6IFQsIGk6IG51bWJlcikgPT4geCBpcyBVO1xudHlwZSBBcnJheVByZWRpY2F0ZTxUPiA9IEFycmF5TW9ycGhpc208VCwgYm9vbGVhbj47XG50eXBlIENvbXBhcmF0b3I8VD4gPSAoYTogVCwgYjogVCkgPT4gbnVtYmVyO1xuXG5jb25zdCBuYXRpdmVTbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcbmNvbnN0IG5hdGl2ZUluZGV4T2YgPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZjtcbmNvbnN0IG5hdGl2ZVB1c2ggPSBBcnJheS5wcm90b3R5cGUucHVzaDtcblxuY29uc3QgcmF3SW5kZXhPZiA9IDxUPiAodHM6IEFycmF5TGlrZTxUPiwgdDogVCk6IG51bWJlciA9PlxuICBuYXRpdmVJbmRleE9mLmNhbGwodHMsIHQpO1xuXG5leHBvcnQgY29uc3QgaW5kZXhPZiA9IDxUID0gYW55Pih4czogQXJyYXlMaWtlPFQ+LCB4OiBUKTogT3B0aW9uYWw8bnVtYmVyPiA9PiB7XG4gIC8vIFRoZSByYXdJbmRleE9mIG1ldGhvZCBkb2VzIG5vdCB3cmFwIHVwIGluIGFuIG9wdGlvbi4gVGhpcyBpcyBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucy5cbiAgY29uc3QgciA9IHJhd0luZGV4T2YoeHMsIHgpO1xuICByZXR1cm4gciA9PT0gLTEgPyBPcHRpb25hbC5ub25lKCkgOiBPcHRpb25hbC5zb21lKHIpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbnRhaW5zID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4sIHg6IFQpOiBib29sZWFuID0+IHJhd0luZGV4T2YoeHMsIHgpID4gLTE7XG5cbmV4cG9ydCBjb25zdCBleGlzdHMgPSA8VCA9IGFueT4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlQcmVkaWNhdGU8VD4pOiBib29sZWFuID0+IHtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHhzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIGlmIChwcmVkKHgsIGkpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQgY29uc3QgcmFuZ2UgPSA8VD4obnVtOiBudW1iZXIsIGY6IChhOiBudW1iZXIpID0+IFQpOiBUW10gPT4ge1xuICBjb25zdCByOiBUW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW07IGkrKykge1xuICAgIHIucHVzaChmKGkpKTtcbiAgfVxuICByZXR1cm4gcjtcbn07XG5cbi8vIEl0J3MgYSB0b3RhbCBtaWNybyBvcHRpbWlzYXRpb24sIGJ1dCB0aGVzZSBkbyBtYWtlIHNvbWUgZGlmZmVyZW5jZS5cbi8vIFBhcnRpY3VsYXJseSBmb3IgYnJvd3NlcnMgb3RoZXIgdGhhbiBDaHJvbWUuXG4vLyAtIGxlbmd0aCBjYWNoaW5nXG4vLyBodHRwOi8vanNwZXJmLmNvbS9icm93c2VyLWRpZXQtanF1ZXJ5LWVhY2gtdnMtZm9yLWxvb3AvNjlcbi8vIC0gbm90IHVzaW5nIHB1c2hcbi8vIGh0dHA6Ly9qc3BlcmYuY29tL2FycmF5LWRpcmVjdC1hc3NpZ25tZW50LXZzLXB1c2gvMlxuXG5leHBvcnQgY29uc3QgY2h1bmsgPSA8VD4oYXJyYXk6IEFycmF5TGlrZTxUPiwgc2l6ZTogbnVtYmVyKTogVFtdW10gPT4ge1xuICBjb25zdCByOiBUW11bXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSArPSBzaXplKSB7XG4gICAgY29uc3QgczogVFtdID0gbmF0aXZlU2xpY2UuY2FsbChhcnJheSwgaSwgaSArIHNpemUpO1xuICAgIHIucHVzaChzKTtcbiAgfVxuICByZXR1cm4gcjtcbn07XG5cbmV4cG9ydCBjb25zdCBtYXAgPSA8VCA9IGFueSwgVSA9IGFueT4oeHM6IEFycmF5TGlrZTxUPiwgZjogQXJyYXlNb3JwaGlzbTxULCBVPik6IFVbXSA9PiB7XG4gIC8vIHByZS1hbGxvY2F0aW5nIGFycmF5IHNpemUgd2hlbiBpdCdzIGd1YXJhbnRlZWQgdG8gYmUga25vd25cbiAgLy8gaHR0cDovL2pzcGVyZi5jb20vcHVzaC1hbGxvY2F0ZWQtdnMtZHluYW1pYy8yMlxuICBjb25zdCBsZW4gPSB4cy5sZW5ndGg7XG4gIGNvbnN0IHIgPSBuZXcgQXJyYXkobGVuKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICByW2ldID0gZih4LCBpKTtcbiAgfVxuICByZXR1cm4gcjtcbn07XG5cbi8vIFVud291bmQgaW1wbGVtZW50aW5nIG90aGVyIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBlYWNoLlxuLy8gVGhlIGNvZGUgc2l6ZSBpcyByb3VnaGx5IHRoZSBzYW1lLCBhbmQgaXQgc2hvdWxkIGFsbG93IGZvciBiZXR0ZXIgb3B0aW1pc2F0aW9uLlxuLy8gY29uc3QgZWFjaCA9IGZ1bmN0aW9uPFQsIFU+KHhzOiBUW10sIGY6ICh4OiBULCBpPzogbnVtYmVyLCB4cz86IFRbXSkgPT4gdm9pZCk6IHZvaWQge1xuZXhwb3J0IGNvbnN0IGVhY2ggPSA8VCA9IGFueT4oeHM6IEFycmF5TGlrZTxUPiwgZjogQXJyYXlNb3JwaGlzbTxULCB2b2lkPik6IHZvaWQgPT4ge1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0geHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgZih4LCBpKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGVhY2hyID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4sIGY6IEFycmF5TW9ycGhpc208VCwgdm9pZD4pOiB2b2lkID0+IHtcbiAgZm9yIChsZXQgaSA9IHhzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIGYoeCwgaSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBwYXJ0aXRpb24gPSA8VCA9IGFueT4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlQcmVkaWNhdGU8VD4pOiB7IHBhc3M6IFRbXTsgZmFpbDogVFtdIH0gPT4ge1xuICBjb25zdCBwYXNzOiBUW10gPSBbXTtcbiAgY29uc3QgZmFpbDogVFtdID0gW107XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICBjb25zdCBhcnIgPSBwcmVkKHgsIGkpID8gcGFzcyA6IGZhaWw7XG4gICAgYXJyLnB1c2goeCk7XG4gIH1cbiAgcmV0dXJuIHsgcGFzcywgZmFpbCB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbHRlcjoge1xuICA8VCwgVSBleHRlbmRzIFQ+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5R3VhcmRQcmVkaWNhdGU8VCwgVT4pOiBVW107XG4gIDxUPih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheVByZWRpY2F0ZTxUPik6IFRbXTtcbn0gPSA8VD4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlQcmVkaWNhdGU8VD4pOiBUW10gPT4ge1xuICBjb25zdCByOiBUW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHhzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIGlmIChwcmVkKHgsIGkpKSB7XG4gICAgICByLnB1c2goeCk7XG4gICAgfVxuICB9XG4gIHJldHVybiByO1xufTtcblxuLypcbiAqIEdyb3VwcyBhbiBhcnJheSBpbnRvIGNvbnRpZ3VvdXMgYXJyYXlzIG9mIGxpa2UgZWxlbWVudHMuIFdoZXRoZXIgYW4gZWxlbWVudCBpcyBsaWtlIG9yIG5vdCBkZXBlbmRzIG9uIGYuXG4gKlxuICogZiBpcyBhIGZ1bmN0aW9uIHRoYXQgZGVyaXZlcyBhIHZhbHVlIGZyb20gYW4gZWxlbWVudCAtIGUuZy4gdHJ1ZSBvciBmYWxzZSwgb3IgYSBzdHJpbmcuXG4gKiBFbGVtZW50cyBhcmUgbGlrZSBpZiB0aGlzIGZ1bmN0aW9uIGdlbmVyYXRlcyB0aGUgc2FtZSB2YWx1ZSBmb3IgdGhlbSAoYWNjb3JkaW5nIHRvID09PSkuXG4gKlxuICpcbiAqIE9yZGVyIG9mIHRoZSBlbGVtZW50cyBpcyBwcmVzZXJ2ZWQuIEFyci5mbGF0dGVuKCkgb24gdGhlIHJlc3VsdCB3aWxsIHJldHVybiB0aGUgb3JpZ2luYWwgbGlzdCwgYXMgd2l0aCBIYXNrZWxsIGdyb3VwQnkgZnVuY3Rpb24uXG4gKiAgRm9yIGEgZ29vZCBleHBsYW5hdGlvbiwgc2VlIHRoZSBncm91cCBmdW5jdGlvbiAod2hpY2ggaXMgYSBzcGVjaWFsIGNhc2Ugb2YgZ3JvdXBCeSlcbiAqICBodHRwOi8vaGFja2FnZS5oYXNrZWxsLm9yZy9wYWNrYWdlL2Jhc2UtNC43LjAuMC9kb2NzL0RhdGEtTGlzdC5odG1sI3Y6Z3JvdXBcbiAqL1xuZXhwb3J0IGNvbnN0IGdyb3VwQnkgPSA8VD4oeHM6IEFycmF5TGlrZTxUPiwgZjogKGE6IFQpID0+IGFueSk6IFRbXVtdID0+IHtcbiAgaWYgKHhzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBbXTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgd2FzVHlwZSA9IGYoeHNbMF0pOyAvLyBpbml0aWFsIGNhc2UgZm9yIG1hdGNoaW5nXG4gICAgY29uc3QgcjogVFtdW10gPSBbXTtcbiAgICBsZXQgZ3JvdXA6IFRbXSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHhzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0geHNbaV07XG4gICAgICBjb25zdCB0eXBlID0gZih4KTtcbiAgICAgIGlmICh0eXBlICE9PSB3YXNUeXBlKSB7XG4gICAgICAgIHIucHVzaChncm91cCk7XG4gICAgICAgIGdyb3VwID0gW107XG4gICAgICB9XG4gICAgICB3YXNUeXBlID0gdHlwZTtcbiAgICAgIGdyb3VwLnB1c2goeCk7XG4gICAgfVxuICAgIGlmIChncm91cC5sZW5ndGggIT09IDApIHtcbiAgICAgIHIucHVzaChncm91cCk7XG4gICAgfVxuICAgIHJldHVybiByO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZm9sZHIgPSA8VCwgVT4oeHM6IEFycmF5TGlrZTxUPiwgZjogKGFjYzogVSwgeDogVCwgaTogbnVtYmVyKSA9PiBVLCBhY2M6IFUpOiBVID0+IHtcbiAgZWFjaHIoeHMsICh4LCBpKSA9PiB7XG4gICAgYWNjID0gZihhY2MsIHgsIGkpO1xuICB9KTtcbiAgcmV0dXJuIGFjYztcbn07XG5cbmV4cG9ydCBjb25zdCBmb2xkbCA9IDxUID0gYW55LCBVID0gYW55Pih4czogQXJyYXlMaWtlPFQ+LCBmOiAoYWNjOiBVLCB4OiBULCBpOiBudW1iZXIpID0+IFUsIGFjYzogVSk6IFUgPT4ge1xuICBlYWNoKHhzLCAoeCwgaSkgPT4ge1xuICAgIGFjYyA9IGYoYWNjLCB4LCBpKTtcbiAgfSk7XG4gIHJldHVybiBhY2M7XG59O1xuXG5leHBvcnQgY29uc3QgZmluZFVudGlsOiB7XG4gIDxULCBVIGV4dGVuZHMgVD4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlHdWFyZFByZWRpY2F0ZTxULCBVPiwgdW50aWw6IEFycmF5UHJlZGljYXRlPFQ+KTogT3B0aW9uYWw8VT47XG4gIDxUID0gYW55Pih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheVByZWRpY2F0ZTxUPiwgdW50aWw6IEFycmF5UHJlZGljYXRlPFQ+KTogT3B0aW9uYWw8VD47XG59ID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+LCB1bnRpbDogQXJyYXlQcmVkaWNhdGU8VD4pOiBPcHRpb25hbDxUPiA9PiB7XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICBpZiAocHJlZCh4LCBpKSkge1xuICAgICAgcmV0dXJuIE9wdGlvbmFsLnNvbWUoeCk7XG4gICAgfSBlbHNlIGlmICh1bnRpbCh4LCBpKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBPcHRpb25hbC5ub25lKCk7XG59O1xuXG5leHBvcnQgY29uc3QgZmluZDoge1xuICA8VCwgVSBleHRlbmRzIFQ+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5R3VhcmRQcmVkaWNhdGU8VCwgVT4pOiBPcHRpb25hbDxVPjtcbiAgPFQgPSBhbnk+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+KTogT3B0aW9uYWw8VD47XG59ID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+KTogT3B0aW9uYWw8VD4gPT4ge1xuICByZXR1cm4gZmluZFVudGlsKHhzLCBwcmVkLCBGdW4ubmV2ZXIpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmRJbmRleCA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheVByZWRpY2F0ZTxUPik6IE9wdGlvbmFsPG51bWJlcj4gPT4ge1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0geHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgaWYgKHByZWQoeCwgaSkpIHtcbiAgICAgIHJldHVybiBPcHRpb25hbC5zb21lKGkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBPcHRpb25hbC5ub25lKCk7XG59O1xuXG5leHBvcnQgY29uc3QgZmluZExhc3RJbmRleCA9IDxUPihhcnI6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlQcmVkaWNhdGU8VD4pOiBPcHRpb25hbDxudW1iZXI+ID0+IHtcbiAgZm9yIChsZXQgaSA9IGFyci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGlmIChwcmVkKGFycltpXSwgaSkpIHtcbiAgICAgIHJldHVybiBPcHRpb25hbC5zb21lKGkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBPcHRpb25hbC5ub25lKCk7XG59O1xuXG5leHBvcnQgY29uc3QgZmxhdHRlbiA9IDxUPih4czogQXJyYXlMaWtlPFRbXT4pOiBUW10gPT4ge1xuICAvLyBOb3RlLCB0aGlzIGlzIHBvc3NpYmxlIGJlY2F1c2UgcHVzaCBzdXBwb3J0cyBtdWx0aXBsZSBhcmd1bWVudHM6XG4gIC8vIGh0dHA6Ly9qc3BlcmYuY29tL2NvbmNhdC1wdXNoLzZcbiAgLy8gTm90ZSB0aGF0IGluIHRoZSBwYXN0LCBjb25jYXQoKSB3b3VsZCBzaWxlbnRseSB3b3JrICh2ZXJ5IHNsb3dseSkgZm9yIGFycmF5LWxpa2Ugb2JqZWN0cy5cbiAgLy8gV2l0aCB0aGlzIGNoYW5nZSBpdCB3aWxsIHRocm93IGFuIGVycm9yLlxuICBjb25zdCByOiBUW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHhzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgLy8gRW5zdXJlIHRoYXQgZWFjaCB2YWx1ZSBpcyBhbiBhcnJheSBpdHNlbGZcbiAgICBpZiAoIVR5cGUuaXNBcnJheSh4c1tpXSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQXJyLmZsYXR0ZW4gaXRlbSAnICsgaSArICcgd2FzIG5vdCBhbiBhcnJheSwgaW5wdXQ6ICcgKyB4cyk7XG4gICAgfVxuICAgIG5hdGl2ZVB1c2guYXBwbHkociwgeHNbaV0pO1xuICB9XG4gIHJldHVybiByO1xufTtcblxuZXhwb3J0IGNvbnN0IGJpbmQgPSA8VCA9IGFueSwgVSA9IGFueT4oeHM6IEFycmF5TGlrZTxUPiwgZjogQXJyYXlNb3JwaGlzbTxULCBVW10+KTogVVtdID0+XG4gIGZsYXR0ZW4obWFwKHhzLCBmKSk7XG5cbmV4cG9ydCBjb25zdCBmb3JhbGwgPSA8VD4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlQcmVkaWNhdGU8VD4pOiBib29sZWFuID0+IHtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHhzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIGlmIChwcmVkKHgsIGkpICE9PSB0cnVlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxuZXhwb3J0IGNvbnN0IGVxdWFsID0gPFQ+KGExOiBBcnJheUxpa2U8VD4sIGEyOiBBcnJheUxpa2U8VD4sIGVxOiBFcS5FcTxUPiA9IEVxLmVxQW55KTogYm9vbGVhbiA9PlxuICBFcS5lcUFycmF5KGVxKS5lcShhMSwgYTIpO1xuXG5leHBvcnQgY29uc3QgcmV2ZXJzZSA9IDxUPih4czogQXJyYXlMaWtlPFQ+KTogVFtdID0+IHtcbiAgY29uc3QgcjogVFtdID0gbmF0aXZlU2xpY2UuY2FsbCh4cywgMCk7XG4gIHIucmV2ZXJzZSgpO1xuICByZXR1cm4gcjtcbn07XG5cbmV4cG9ydCBjb25zdCBkaWZmZXJlbmNlID0gPFQ+KGExOiBBcnJheUxpa2U8VD4sIGEyOiBBcnJheUxpa2U8VD4pOiBUW10gPT4gZmlsdGVyKGExLCAoeCkgPT4gIWNvbnRhaW5zKGEyLCB4KSk7XG5cbmV4cG9ydCBjb25zdCBtYXBUb09iamVjdDoge1xuICA8VCBleHRlbmRzIHN0cmluZywgVT4oeHM6IEFycmF5TGlrZTxUPiwgZjogKHg6IFQsIGk6IG51bWJlcikgPT4gVSk6IFJlY29yZDxULCBVPjtcbiAgPFQsIFIgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+Pih4czogQXJyYXlMaWtlPFQ+LCBmOiAoeDogVCwgaTogbnVtYmVyKSA9PiBSW2tleW9mIFJdKTogUjtcbn0gPSA8VCwgUiBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4+KHhzOiBBcnJheUxpa2U8VD4sIGY6ICh4OiBULCBpOiBudW1iZXIpID0+IFJba2V5b2YgUl0pOiBSID0+IHtcbiAgY29uc3QgciA9IHt9IGFzIFI7XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICByW1N0cmluZyh4KSBhcyBrZXlvZiBSXSA9IGYoeCwgaSk7XG4gIH1cbiAgcmV0dXJuIHI7XG59O1xuXG5leHBvcnQgY29uc3QgcHVyZSA9IDxUPih4OiBUKTogVFtdID0+IFsgeCBdO1xuXG5leHBvcnQgY29uc3Qgc29ydCA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCBjb21wYXJhdG9yPzogQ29tcGFyYXRvcjxUPik6IFRbXSA9PiB7XG4gIGNvbnN0IGNvcHk6IFRbXSA9IG5hdGl2ZVNsaWNlLmNhbGwoeHMsIDApO1xuICBjb3B5LnNvcnQoY29tcGFyYXRvcik7XG4gIHJldHVybiBjb3B5O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldCA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCBpOiBudW1iZXIpOiBPcHRpb25hbDxUPiA9PiBpID49IDAgJiYgaSA8IHhzLmxlbmd0aCA/IE9wdGlvbmFsLnNvbWUoeHNbaV0pIDogT3B0aW9uYWwubm9uZSgpO1xuXG5leHBvcnQgY29uc3QgaGVhZCA9IDxUPih4czogQXJyYXlMaWtlPFQ+KTogT3B0aW9uYWw8VD4gPT4gZ2V0KHhzLCAwKTtcblxuZXhwb3J0IGNvbnN0IGxhc3QgPSA8VD4oeHM6IEFycmF5TGlrZTxUPik6IE9wdGlvbmFsPFQ+ID0+IGdldCh4cywgeHMubGVuZ3RoIC0gMSk7XG5cbmV4cG9ydCBjb25zdCBmcm9tOiA8VD4oeDogQXJyYXlMaWtlPFQ+KSA9PiBUW10gPSBUeXBlLmlzRnVuY3Rpb24oQXJyYXkuZnJvbSkgPyBBcnJheS5mcm9tIDogKHgpID0+IG5hdGl2ZVNsaWNlLmNhbGwoeCk7XG5cbmV4cG9ydCBjb25zdCBmaW5kTWFwID0gPEEsIEI+KGFycjogQXJyYXlMaWtlPEE+LCBmOiAoYTogQSwgaW5kZXg6IG51bWJlcikgPT4gT3B0aW9uYWw8Qj4pOiBPcHRpb25hbDxCPiA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgciA9IGYoYXJyW2ldLCBpKTtcbiAgICBpZiAoci5pc1NvbWUoKSkge1xuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuICB9XG4gIHJldHVybiBPcHRpb25hbC5ub25lPEI+KCk7XG59O1xuXG5leHBvcnQgY29uc3QgdW5pcXVlID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4sIGNvbXBhcmF0b3I/OiAoYTogVCwgYjogVCkgPT4gYm9vbGVhbik6IFRbXSA9PiB7XG4gIGNvbnN0IHI6IFRbXSA9IFtdO1xuXG4gIGNvbnN0IGlzRHVwbGljYXRlZCA9IFR5cGUuaXNGdW5jdGlvbihjb21wYXJhdG9yKSA/XG4gICAgKHg6IFQpID0+IGV4aXN0cyhyLCAoaSkgPT4gY29tcGFyYXRvcihpLCB4KSkgOlxuICAgICh4OiBUKSA9PiBjb250YWlucyhyLCB4KTtcblxuICBmb3IgKGxldCBpID0gMCwgbGVuID0geHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgaWYgKCFpc0R1cGxpY2F0ZWQoeCkpIHtcbiAgICAgIHIucHVzaCh4KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcjtcbn07XG4iLCJleHBvcnQgaW50ZXJmYWNlIENlbGw8VD4ge1xuICByZWFkb25seSBnZXQ6ICgpID0+IFQ7XG4gIHJlYWRvbmx5IHNldDogKHZhbHVlOiBUKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgQ2VsbCA9IDxUPihpbml0aWFsOiBUKTogQ2VsbDxUPiA9PiB7XG4gIGxldCB2YWx1ZSA9IGluaXRpYWw7XG5cbiAgY29uc3QgZ2V0ID0gKCkgPT4ge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICBjb25zdCBzZXQgPSAodjogVCkgPT4ge1xuICAgIHZhbHVlID0gdjtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldCxcbiAgICBzZXRcbiAgfTtcbn07XG4iLCJpbXBvcnQgKiBhcyBUeXBlIGZyb20gJy4vVHlwZSc7XG5cbmNvbnN0IG5vb3A6ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZFxuPSAoKSA9PiB7IH07XG5cbmNvbnN0IG5vYXJnOiA8VD4oZjogKCkgPT4gVCkgPT4gKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkXG49IChmKSA9PiAoKSA9PiBmKCk7XG5cbi8qKiBDb21wb3NlIGEgdW5hcnkgZnVuY3Rpb24gd2l0aCBhbiBuLWFyeSBmdW5jdGlvbiAqL1xuY29uc3QgY29tcG9zZSA9IDxUIGV4dGVuZHMgYW55W10sIFUsIFY+KGZhOiAodjogVSkgPT4gViwgZmI6ICguLi54OiBUKSA9PiBVKTogKC4uLng6IFQpID0+IFYgPT4ge1xuICByZXR1cm4gKC4uLmFyZ3M6IFQpID0+IHtcbiAgICByZXR1cm4gZmEoZmIuYXBwbHkobnVsbCwgYXJncykpO1xuICB9O1xufTtcblxuLyoqIENvbXBvc2UgdHdvIHVuYXJ5IGZ1bmN0aW9ucy4gU2ltaWxhciB0byBjb21wb3NlLCBidXQgYXZvaWRzIHVzaW5nIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS4gKi9cbmNvbnN0IGNvbXBvc2UxID0gPEEsIEIsIEM+IChmYmM6IChiOiBCKSA9PiBDLCBmYWI6IChhOiBBKSA9PiBCKSA9PiAoYTogQSk6IEMgPT5cbiAgZmJjKGZhYihhKSk7XG5cbmNvbnN0IGNvbnN0YW50ID0gPFQ+KHZhbHVlOiBUKTogKCkgPT4gVCA9PiB7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xufTtcblxuY29uc3QgaWRlbnRpdHkgPSA8VCA9IGFueT4oeDogVCk6IFQgPT4ge1xuICByZXR1cm4geDtcbn07XG5cbmNvbnN0IHRyaXBsZUVxdWFscyA9IDxUPihhOiBULCBiOiBUKTogYm9vbGVhbiA9PiB7XG4gIHJldHVybiBhID09PSBiO1xufTtcblxuZnVuY3Rpb24gY3VycnkgPFJFU1QgZXh0ZW5kcyBhbnlbXSwgT1VUPihmbjogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQpOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVDtcbmZ1bmN0aW9uIGN1cnJ5IDxBLCBSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46IChhOiBBLCAuLi5yZXN0QXJnczogUkVTVCkgPT4gT1VULCBhOiBBKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8QSwgQiwgUkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoYTogQSwgYjogQiwgLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCwgYTogQSwgYjogQik6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPEEsIEIsIEMsIFJFU1QgZXh0ZW5kcyBhbnlbXSwgT1VUPihmbjogKGE6IEEsIGI6IEIsIGM6IEMsIC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQsIGE6IEEsIGI6IEIsIGM6IEMpOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVDtcbmZ1bmN0aW9uIGN1cnJ5IDxBLCBCLCBDLCBELCBSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46IChhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCAuLi5yZXN0QXJnczogUkVTVCkgPT4gT1VULCBhOiBBLCBiOiBCLCBjOiBDLCBkOiBEKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8QSwgQiwgQywgRCwgRSwgUkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCwgYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSk6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPEEsIEIsIEMsIEQsIEUsIEYsIFJFU1QgZXh0ZW5kcyBhbnlbXSwgT1VUPihmbjogKGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIGY6IEYsIC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQsIGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIGY6IEYpOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVDtcbmZ1bmN0aW9uIGN1cnJ5IDxBLCBCLCBDLCBELCBFLCBGLCBHLCBSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46IChhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCBmOiBGLCBnOiBHLCAuLi5yZXN0QXJnczogUkVTVCkgPT4gT1VULCBhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCBmOiBGLCBnOiBHKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8QSwgQiwgQywgRCwgRSwgRiwgRywgSCwgUkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgZjogRiwgZzogRywgaDogSCwgLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCwgYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgZjogRiwgZzogRywgaDogSCk6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPEEsIEIsIEMsIEQsIEUsIEYsIEcsIEgsIEksIFJFU1QgZXh0ZW5kcyBhbnlbXSwgT1VUPihmbjogKGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIGY6IEYsIGc6IEcsIGg6IEgsIGk6IEksIC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQsIGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIGY6IEYsIGc6IEcsIGg6IEgsIGk6IEkpOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVDtcbmZ1bmN0aW9uIGN1cnJ5IDxBLCBCLCBDLCBELCBFLCBGLCBHLCBILCBJLCBKLCBSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46IChhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCBmOiBGLCBnOiBHLCBoOiBILCBpOiBJLCBqOiBKLCAuLi5yZXN0QXJnczogUkVTVCkgPT4gT1VULCBhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCBmOiBGLCBnOiBHLCBoOiBILCBpOiBJLCBqOiBKKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8T1VUPihmbjogKC4uLmFsbEFyZ3M6IGFueVtdKSA9PiBPVVQsIC4uLmluaXRpYWxBcmdzOiBhbnlbXSk6ICguLi5yZXN0QXJnczogYW55W10pID0+IE9VVCB7XG4gIHJldHVybiAoLi4ucmVzdEFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3QgYWxsID0gaW5pdGlhbEFyZ3MuY29uY2F0KHJlc3RBcmdzKTtcbiAgICByZXR1cm4gZm4uYXBwbHkobnVsbCwgYWxsKTtcbiAgfTtcbn1cblxuY29uc3Qgbm90ID0gPFQ+KGY6ICh0OiBUKSA9PiBib29sZWFuKSA9PiAodDogVCk6IGJvb2xlYW4gPT5cbiAgIWYodCk7XG5cbmNvbnN0IGRpZSA9IChtc2c6IHN0cmluZykgPT4ge1xuICByZXR1cm4gKCk6IG5ldmVyID0+IHtcbiAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcbiAgfTtcbn07XG5cbmNvbnN0IGFwcGx5ID0gPFQ+KGY6ICgpID0+IFQpOiBUID0+IHtcbiAgcmV0dXJuIGYoKTtcbn07XG5cbmNvbnN0IGNhbGwgPSAoZjogKCkgPT4gYW55KTogdm9pZCA9PiB7XG4gIGYoKTtcbn07XG5cbmNvbnN0IG5ldmVyOiAoLi4uYXJnczogYW55W10pID0+IGZhbHNlID0gY29uc3RhbnQ8ZmFsc2U+KGZhbHNlKTtcbmNvbnN0IGFsd2F5czogKC4uLmFyZ3M6IGFueVtdKSA9PiB0cnVlID0gY29uc3RhbnQ8dHJ1ZT4odHJ1ZSk7XG5cbi8qIFVzZWQgdG8gd2Vha2VuIHR5cGVzICovXG5jb25zdCB3ZWFrZW4gPSA8QSwgQiBleHRlbmRzIEE+KGI6IEIpOiBBID0+IGI7XG5cbnR5cGUgRnVuPFgsIFk+ID0gKHg6IFgpID0+IFk7XG5jb25zdCBwaXBlOiB7XG4gIDxBLCBCPihhOiBBLCBhYjogRnVuPEEsIEI+KTogQjtcbiAgPEEsIEIsIEM+KGE6IEEsIGFiOiBGdW48QSwgQj4sIGJjOiBGdW48QiwgQz4pOiBDO1xuICA8QSwgQiwgQywgRD4oYTogQSwgYWI6IEZ1bjxBLCBCPiwgYmM6IEZ1bjxCLCBDPiwgY2Q6IEZ1bjxDLCBEPik6IEQ7XG4gIDxBLCBCLCBDLCBELCBFPihhOiBBLCBhYjogRnVuPEEsIEI+LCBiYzogRnVuPEIsIEM+LCBjZDogRnVuPEMsIEQ+LCBkZTogRnVuPEQsIEU+KTogRTtcbiAgPEEsIEIsIEMsIEQsIEUsIEY+KGE6IEEsIGFiOiBGdW48QSwgQj4sIGJjOiBGdW48QiwgQz4sIGNkOiBGdW48QywgRD4sIGRlOiBGdW48RCwgRT4sIGVmOiBGdW48RSwgRj4pOiBGO1xuICA8QSwgQiwgQywgRCwgRSwgRiwgRz4oYTogQSwgYWI6IEZ1bjxBLCBCPiwgYmM6IEZ1bjxCLCBDPiwgY2Q6IEZ1bjxDLCBEPiwgZGU6IEZ1bjxELCBFPiwgZWY6IEZ1bjxFLCBGPiwgZmc6IEZ1bjxGLCBHPik6IEc7XG4gIDxBLCBCLCBDLCBELCBFLCBGLCBHLCBIPihhOiBBLCBhYjogRnVuPEEsIEI+LCBiYzogRnVuPEIsIEM+LCBjZDogRnVuPEMsIEQ+LCBkZTogRnVuPEQsIEU+LCBlZjogRnVuPEUsIEY+LCBmZzogRnVuPEYsIEc+LCBnaDogRnVuPEcsIEg+KTogSDtcbn0gPVxuICA8QSwgQiwgQywgRCwgRSwgRiwgRywgSD4oYTogQSwgYWI6IEZ1bjxBLCBCPiwgYmM/OiBGdW48QiwgQz4sIGNkPzogRnVuPEMsIEQ+LCBkZT86IEZ1bjxELCBFPiwgZWY/OiBGdW48RSwgRj4sIGZnPzogRnVuPEYsIEc+LCBnaD86IEZ1bjxHLCBIPik6IEIgfCBDIHwgRCB8IEUgfCBGIHwgRyB8IEggPT4ge1xuICAgIGNvbnN0IGIgPSBhYihhKTtcbiAgICBpZiAoVHlwZS5pc051bGxhYmxlKGJjKSkge1xuICAgICAgcmV0dXJuIGI7XG4gICAgfVxuXG4gICAgY29uc3QgYyA9IGJjKGIpO1xuICAgIGlmIChUeXBlLmlzTnVsbGFibGUoY2QpKSB7XG4gICAgICByZXR1cm4gYztcbiAgICB9XG5cbiAgICBjb25zdCBkID0gY2QoYyk7XG4gICAgaWYgKFR5cGUuaXNOdWxsYWJsZShkZSkpIHtcbiAgICAgIHJldHVybiBkO1xuICAgIH1cblxuICAgIGNvbnN0IGUgPSBkZShkKTtcbiAgICBpZiAoVHlwZS5pc051bGxhYmxlKGVmKSkge1xuICAgICAgcmV0dXJuIGU7XG4gICAgfVxuXG4gICAgY29uc3QgZiA9IGVmKGUpO1xuICAgIGlmIChUeXBlLmlzTnVsbGFibGUoZmcpKSB7XG4gICAgICByZXR1cm4gZjtcbiAgICB9XG5cbiAgICBjb25zdCBnID0gZmcoZik7XG4gICAgaWYgKFR5cGUuaXNOdWxsYWJsZShnaCkpIHtcbiAgICAgIHJldHVybiBnO1xuICAgIH1cblxuICAgIHJldHVybiBnaChnKTtcbiAgfTtcblxuZXhwb3J0IHtcbiAgbm9vcCxcbiAgbm9hcmcsXG4gIGNvbXBvc2UsXG4gIGNvbXBvc2UxLFxuICBjb25zdGFudCxcbiAgaWRlbnRpdHksXG4gIHRyaXBsZUVxdWFscyxcbiAgY3VycnksXG4gIG5vdCxcbiAgZGllLFxuICBhcHBseSxcbiAgY2FsbCxcbiAgbmV2ZXIsXG4gIGFsd2F5cyxcbiAgd2Vha2VuLFxuICBwaXBlXG59O1xuIiwiaW1wb3J0ICogYXMgT2JqIGZyb20gJy4vT2JqJztcbmltcG9ydCAqIGFzIFR5cGUgZnJvbSAnLi9UeXBlJztcblxudHlwZSBNZXJnZVN0cmF0ZWd5ID0gKG9sZDogYW55LCBudTogYW55KSA9PiBhbnk7XG5cbmludGVyZmFjZSBEZWVwTWVyZ2VGdW5jIHtcbiAgPEEsIEI+KGE6IEEsIGI6IEIpOiBBICYgQjtcbiAgPEEsIEIsIEM+KGE6IEEsIGI6IEIsIGM6IEMpOiBBICYgQiAmIEM7XG4gIDxBLCBCLCBDLCBEPihhOiBBLCBiOiBCLCBjOiBDLCBkOiBEKTogQSAmIEIgJiBDICYgRDtcbiAgPEEsIEIsIEMsIEQsIEU+KGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUpOiBBICYgQiAmIEMgJiBEICYgRTtcbiAgPEEsIEIsIEMsIEQsIEUsIEY+KGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIGY6IEYpOiBBICYgQiAmIEMgJiBEICYgRSAmIEY7XG4gICguLi5vYmpzOiBBcnJheTxSZWNvcmQ8c3RyaW5nLCBhbnk+Pik6IFJlY29yZDxzdHJpbmcsIGFueT47XG59XG5cbnR5cGUgTWVyZ2VPcHRpb25hbDxBLCBCPiA9IEEgZXh0ZW5kcyB1bmRlZmluZWQgPyBCIDogRXhjbHVkZTxCLCB1bmRlZmluZWQ+O1xudHlwZSBTaGFsbG93TWVyZ2U8QSwgQj4gPSAoe1xuICBbSyBpbiBrZXlvZiBBXTogSyBleHRlbmRzIGtleW9mIEIgPyBNZXJnZU9wdGlvbmFsPEFbS10sIEJbS10+IDogQVtLXVxufSAmIEIpO1xuXG5pbnRlcmZhY2UgU2hhbGxvd01lcmdlRnVuYyB7XG4gIDxBLCBCPihhOiBBLCBiOiBCKTogU2hhbGxvd01lcmdlPEEsIEI+O1xuICA8QSwgQiwgQz4oYTogQSwgYjogQiwgYzogQyk6IFNoYWxsb3dNZXJnZTxTaGFsbG93TWVyZ2U8QSwgQj4sIEM+O1xuICA8QSwgQiwgQywgRD4oYTogQSwgYjogQiwgYzogQywgZDogRCk6IFNoYWxsb3dNZXJnZTxTaGFsbG93TWVyZ2U8U2hhbGxvd01lcmdlPEEsIEI+LCBDPiwgRD47XG4gIDxBLCBCLCBDLCBELCBFPihhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFKTogU2hhbGxvd01lcmdlPFNoYWxsb3dNZXJnZTxTaGFsbG93TWVyZ2U8U2hhbGxvd01lcmdlPEEsIEI+LCBDPiwgRD4sIEU+O1xuICA8QSwgQiwgQywgRCwgRSwgRj4oYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgZjogRik6IFNoYWxsb3dNZXJnZTxTaGFsbG93TWVyZ2U8U2hhbGxvd01lcmdlPFNoYWxsb3dNZXJnZTxTaGFsbG93TWVyZ2U8QSwgQj4sIEM+LCBEPiwgRT4sIEY+O1xuICAoLi4ub2JqczogQXJyYXk8UmVjb3JkPHN0cmluZywgYW55Pj4pOiBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xufVxuXG5jb25zdCBzaGFsbG93ID0gKG9sZDogUmVjb3JkPHN0cmluZywgYW55PiwgbnU6IFJlY29yZDxzdHJpbmcsIGFueT4pID0+IHtcbiAgcmV0dXJuIG51O1xufTtcblxuY29uc3QgZGVlcCA9IChvbGQ6IFJlY29yZDxzdHJpbmcsIGFueT4sIG51OiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSA9PiB7XG4gIGNvbnN0IGJvdGhPYmplY3RzID0gVHlwZS5pc1BsYWluT2JqZWN0KG9sZCkgJiYgVHlwZS5pc1BsYWluT2JqZWN0KG51KTtcbiAgcmV0dXJuIGJvdGhPYmplY3RzID8gZGVlcE1lcmdlKG9sZCwgbnUpIDogbnU7XG59O1xuXG5jb25zdCBiYXNlTWVyZ2UgPSAobWVyZ2VyOiBNZXJnZVN0cmF0ZWd5KTogKC4uLm9ianM6IEFycmF5PFJlY29yZDxzdHJpbmcsIGFueT4+KSA9PiBhbnkgPT4ge1xuICByZXR1cm4gKC4uLm9iamVjdHM6IGFueVtdKSA9PiB7XG4gICAgaWYgKG9iamVjdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbid0IG1lcmdlIHplcm8gb2JqZWN0c2ApO1xuICAgIH1cblxuICAgIGNvbnN0IHJldDogUmVjb3JkPHN0cmluZywgYW55PiA9IHt9O1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgb2JqZWN0cy5sZW5ndGg7IGorKykge1xuICAgICAgY29uc3QgY3VyT2JqZWN0ID0gb2JqZWN0c1tqXTtcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIGN1ck9iamVjdCkge1xuICAgICAgICBpZiAoT2JqLmhhcyhjdXJPYmplY3QsIGtleSkpIHtcbiAgICAgICAgICByZXRba2V5XSA9IG1lcmdlcihyZXRba2V5XSwgY3VyT2JqZWN0W2tleV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgZGVlcE1lcmdlOiBEZWVwTWVyZ2VGdW5jID0gYmFzZU1lcmdlKGRlZXApO1xuZXhwb3J0IGNvbnN0IG1lcmdlOiBTaGFsbG93TWVyZ2VGdW5jID0gYmFzZU1lcmdlKHNoYWxsb3cpO1xuIiwiaW1wb3J0IHsgRXEgfSBmcm9tICdAZXBob3gvZGlzcHV0ZSc7XG5cbmltcG9ydCAqIGFzIEZ1biBmcm9tICcuL0Z1bic7XG5pbXBvcnQgeyBPcHRpb25hbCB9IGZyb20gJy4vT3B0aW9uYWwnO1xuXG50eXBlIE9iaktleXM8VCBleHRlbmRzIHt9PiA9IEV4dHJhY3Q8a2V5b2YgVCwgc3RyaW5nPjtcbnR5cGUgT2JqQ2FsbGJhY2s8VCBleHRlbmRzIHt9PiA9ICh2YWx1ZTogVFtrZXlvZiBUXSwga2V5OiBPYmpLZXlzPFQ+KSA9PiB2b2lkO1xudHlwZSBPYmpNb3JwaGlzbTxUIGV4dGVuZHMge30sIFI+ID0gKHZhbHVlOiBUW2tleW9mIFRdLCBrZXk6IE9iaktleXM8VD4pID0+IFI7XG50eXBlIE9iakd1YXJkUHJlZGljYXRlPFQgZXh0ZW5kcyB7fSwgVSBleHRlbmRzIFRba2V5b2YgVF0+ID0gKHZhbHVlOiBUW2tleW9mIFRdLCBrZXk6IE9iaktleXM8VD4pID0+IHZhbHVlIGlzIFU7XG50eXBlIE9ialByZWRpY2F0ZTxUIGV4dGVuZHMge30+ID0gKHZhbHVlOiBUW2tleW9mIFRdLCBrZXk6IE9iaktleXM8VD4pID0+IGJvb2xlYW47XG5cbi8vIFRoZXJlIGFyZSBtYW55IHZhcmlhdGlvbnMgb2YgT2JqZWN0IGl0ZXJhdGlvbiB0aGF0IGFyZSBmYXN0ZXIgdGhhbiB0aGUgJ2Zvci1pbicgc3R5bGU6XG4vLyBodHRwOi8vanNwZXJmLmNvbS9vYmplY3Qta2V5cy1pdGVyYXRpb24vMTA3XG4vL1xuLy8gVXNlIHRoZSBuYXRpdmUga2V5cyBpZiBpdCBpcyBhdmFpbGFibGUgKElFOSspLCBvdGhlcndpc2UgZmFsbCBiYWNrIHRvIG1hbnVhbGx5IGZpbHRlcmluZ1xuZXhwb3J0IGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cztcblxuZXhwb3J0IGNvbnN0IGhhc093blByb3BlcnR5ID0gT2JqZWN0Lmhhc093blByb3BlcnR5O1xuXG5leHBvcnQgY29uc3QgZWFjaCA9IDxUIGV4dGVuZHMge30+KG9iajogVCwgZjogT2JqQ2FsbGJhY2s8VD4pOiB2b2lkID0+IHtcbiAgY29uc3QgcHJvcHMgPSBrZXlzKG9iaikgYXMgQXJyYXk8T2JqS2V5czxUPj47XG4gIGZvciAobGV0IGsgPSAwLCBsZW4gPSBwcm9wcy5sZW5ndGg7IGsgPCBsZW47IGsrKykge1xuICAgIGNvbnN0IGkgPSBwcm9wc1trXTtcbiAgICBjb25zdCB4ID0gb2JqW2ldO1xuICAgIGYoeCwgaSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBtYXAgPSA8VCBleHRlbmRzIHt9LCBSPihvYmo6IFQsIGY6IE9iak1vcnBoaXNtPFQsIFI+KTogeyBbayBpbiBrZXlvZiBUXTogUiB9ID0+IHtcbiAgcmV0dXJuIHR1cGxlTWFwPHsgW2sgaW4ga2V5b2YgVF06IFIgfSwgVD4ob2JqLCAoeCwgaSkgPT4gKHtcbiAgICBrOiBpLFxuICAgIHY6IGYoeCwgaSlcbiAgfSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IHR1cGxlTWFwID0gPFIgZXh0ZW5kcyB7fSwgVCBleHRlbmRzIHt9PihvYmo6IFQsIGY6IE9iak1vcnBoaXNtPFQsIHsgazoga2V5b2YgUjsgdjogUltrZXlvZiBSXSB9Pik6IFIgPT4ge1xuICBjb25zdCByID0ge30gYXMgUjtcbiAgZWFjaChvYmosICh4LCBpKSA9PiB7XG4gICAgY29uc3QgdHVwbGUgPSBmKHgsIGkpO1xuICAgIHJbdHVwbGUua10gPSB0dXBsZS52O1xuICB9KTtcbiAgcmV0dXJuIHI7XG59O1xuXG5jb25zdCBvYmpBY2MgPSA8VCBleHRlbmRzIHt9PihyOiBUKSA9PiAoeDogVFtrZXlvZiBUXSwgaToga2V5b2YgVCk6IHZvaWQgPT4ge1xuICByW2ldID0geDtcbn07XG5cbmNvbnN0IGludGVybmFsRmlsdGVyID0gPFQgZXh0ZW5kcyB7fT4ob2JqOiBULCBwcmVkOiBPYmpQcmVkaWNhdGU8VD4sIG9uVHJ1ZTogT2JqQ2FsbGJhY2s8VD4sIG9uRmFsc2U6IE9iakNhbGxiYWNrPFQ+KSA9PiB7XG4gIGVhY2gob2JqLCAoeCwgaSkgPT4ge1xuICAgIChwcmVkKHgsIGkpID8gb25UcnVlIDogb25GYWxzZSkoeCwgaSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGJpZmlsdGVyID0gPFQgZXh0ZW5kcyB7fT4ob2JqOiBULCBwcmVkOiBPYmpQcmVkaWNhdGU8VD4pOiB7IHQ6IFJlY29yZDxzdHJpbmcsIFRba2V5b2YgVF0+OyBmOiBSZWNvcmQ8c3RyaW5nLCBUW2tleW9mIFRdPiB9ID0+IHtcbiAgY29uc3QgdDogUmVjb3JkPHN0cmluZywgVFtrZXlvZiBUXT4gPSB7fTtcbiAgY29uc3QgZjogUmVjb3JkPHN0cmluZywgVFtrZXlvZiBUXT4gPSB7fTtcbiAgaW50ZXJuYWxGaWx0ZXIob2JqLCBwcmVkLCBvYmpBY2ModCksIG9iakFjYyhmKSk7XG4gIHJldHVybiB7IHQsIGYgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBmaWx0ZXI6IHtcbiAgPFQgZXh0ZW5kcyB7fSwgVSBleHRlbmRzIFRba2V5b2YgVF0+KG9iajogVCwgcHJlZDogT2JqR3VhcmRQcmVkaWNhdGU8VCwgVT4pOiBSZWNvcmQ8c3RyaW5nLCBVPjtcbiAgPFQgZXh0ZW5kcyB7fT4ob2JqOiBULCBwcmVkOiBPYmpQcmVkaWNhdGU8VD4pOiBSZWNvcmQ8c3RyaW5nLCBUW2tleW9mIFRdPjtcbn0gPSA8VCBleHRlbmRzIHt9PihvYmo6IFQsIHByZWQ6IE9ialByZWRpY2F0ZTxUPik6IFJlY29yZDxzdHJpbmcsIFRba2V5b2YgVF0+ID0+IHtcbiAgY29uc3QgdDogUmVjb3JkPHN0cmluZywgVFtrZXlvZiBUXT4gPSB7fTtcbiAgaW50ZXJuYWxGaWx0ZXIob2JqLCBwcmVkLCBvYmpBY2ModCksIEZ1bi5ub29wKTtcbiAgcmV0dXJuIHQ7XG59O1xuXG5leHBvcnQgY29uc3QgbWFwVG9BcnJheSA9IDxUIGV4dGVuZHMge30sIFI+KG9iajogVCwgZjogT2JqTW9ycGhpc208VCwgUj4pOiBSW10gPT4ge1xuICBjb25zdCByOiBSW10gPSBbXTtcbiAgZWFjaChvYmosICh2YWx1ZSwgbmFtZSkgPT4ge1xuICAgIHIucHVzaChmKHZhbHVlLCBuYW1lKSk7XG4gIH0pO1xuICByZXR1cm4gcjtcbn07XG5cbmV4cG9ydCBjb25zdCBmaW5kID0gPFQgZXh0ZW5kcyB7fT4ob2JqOiBULCBwcmVkOiAodmFsdWU6IFRba2V5b2YgVF0sIGtleTogT2JqS2V5czxUPiwgb2JqOiBUKSA9PiBib29sZWFuKTogT3B0aW9uYWw8VFtrZXlvZiBUXT4gPT4ge1xuICBjb25zdCBwcm9wcyA9IGtleXMob2JqKSBhcyBBcnJheTxPYmpLZXlzPFQ+PjtcbiAgZm9yIChsZXQgayA9IDAsIGxlbiA9IHByb3BzLmxlbmd0aDsgayA8IGxlbjsgaysrKSB7XG4gICAgY29uc3QgaSA9IHByb3BzW2tdO1xuICAgIGNvbnN0IHggPSBvYmpbaV07XG4gICAgaWYgKHByZWQoeCwgaSwgb2JqKSkge1xuICAgICAgcmV0dXJuIE9wdGlvbmFsLnNvbWUoeCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBPcHRpb25hbC5ub25lKCk7XG59O1xuXG5leHBvcnQgY29uc3QgdmFsdWVzID0gPFQgZXh0ZW5kcyB7fT4ob2JqOiBUKTogQXJyYXk8VFtrZXlvZiBUXT4gPT4ge1xuICByZXR1cm4gbWFwVG9BcnJheShvYmosIEZ1bi5pZGVudGl0eSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2l6ZSA9IChvYmo6IHt9KTogbnVtYmVyID0+IHtcbiAgcmV0dXJuIGtleXMob2JqKS5sZW5ndGg7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0ID0gPFQgZXh0ZW5kcyB7fSwgSyBleHRlbmRzIGtleW9mIFQ+KG9iajogVCwga2V5OiBLKTogT3B0aW9uYWw8Tm9uTnVsbGFibGU8VFtLXT4+ID0+IHtcbiAgcmV0dXJuIGhhcyhvYmosIGtleSkgPyBPcHRpb25hbC5mcm9tKG9ialtrZXldIGFzIE5vbk51bGxhYmxlPFRbS10+KSA6IE9wdGlvbmFsLm5vbmUoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBoYXMgPSA8VCBleHRlbmRzIHt9LCBLIGV4dGVuZHMga2V5b2YgVD4ob2JqOiBULCBrZXk6IEspOiBib29sZWFuID0+XG4gIGhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpO1xuXG5leHBvcnQgY29uc3QgaGFzTm9uTnVsbGFibGVLZXkgPSA8VCBleHRlbmRzIHt9LCBLIGV4dGVuZHMga2V5b2YgVD4ob2JqOiBULCBrZXk6IEspOiBvYmogaXMgVCAmIFJlY29yZDxLLCBOb25OdWxsYWJsZTxUW0tdPj4gPT5cbiAgaGFzKG9iaiwga2V5KSAmJiBvYmpba2V5XSAhPT0gdW5kZWZpbmVkICYmIG9ialtrZXldICE9PSBudWxsO1xuXG5leHBvcnQgY29uc3QgaXNFbXB0eSA9IChyOiBSZWNvcmQ8YW55LCBhbnk+KTogciBpcyB7fSA9PiB7XG4gIGZvciAoY29uc3QgeCBpbiByKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwociwgeCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5leHBvcnQgY29uc3QgZXF1YWwgPSA8VD4oYTE6IFJlY29yZDxzdHJpbmcsIFQ+LCBhMjogUmVjb3JkPHN0cmluZywgVD4sIGVxOiBFcS5FcTxUPiA9IEVxLmVxQW55KTogYm9vbGVhbiA9PlxuICBFcS5lcVJlY29yZChlcSkuZXEoYTEsIGEyKTtcbiIsImltcG9ydCAqIGFzIFR5cGUgZnJvbSAnLi9UeXBlJztcblxuLyoqXG4gKiBUaGUgYE9wdGlvbmFsYCB0eXBlIHJlcHJlc2VudHMgYSB2YWx1ZSAob2YgYW55IHR5cGUpIHRoYXQgcG90ZW50aWFsbHkgZG9lc1xuICogbm90IGV4aXN0LiBBbnkgYE9wdGlvbmFsPFQ+YCBjYW4gZWl0aGVyIGJlIGEgYFNvbWU8VD5gIChpbiB3aGljaCBjYXNlIHRoZVxuICogdmFsdWUgZG9lcyBleGlzdCkgb3IgYSBgTm9uZWAgKGluIHdoaWNoIGNhc2UgdGhlIHZhbHVlIGRvZXMgbm90IGV4aXN0KS4gVGhpc1xuICogbW9kdWxlIGRlZmluZXMgYSB3aG9sZSBsb3Qgb2YgRlAtaW5zcGlyZWQgdXRpbGl0eSBmdW5jdGlvbnMgZm9yIGRlYWxpbmcgd2l0aFxuICogYE9wdGlvbmFsYCBvYmplY3RzLlxuICpcbiAqIENvbXBhcmlzb24gd2l0aCBudWxsIG9yIHVuZGVmaW5lZDpcbiAqIC0gV2UgZG9uJ3QgZ2V0IGZhbmN5IG51bGwgY29hbGVzY2luZyBvcGVyYXRvcnMgd2l0aCBgT3B0aW9uYWxgXG4gKiAtIFdlIGRvIGdldCBmYW5jeSBoZWxwZXIgZnVuY3Rpb25zIHdpdGggYE9wdGlvbmFsYFxuICogLSBgT3B0aW9uYWxgIHN1cHBvcnQgbmVzdGluZywgYW5kIGFsbG93IGZvciB0aGUgdHlwZSB0byBzdGlsbCBiZSBudWxsYWJsZSAob3JcbiAqIGFub3RoZXIgYE9wdGlvbmFsYClcbiAqIC0gVGhlcmUgaXMgbm8gb3B0aW9uIHRvIHR1cm4gb2ZmIHN0cmljdC1vcHRpb25hbC1jaGVja3MgbGlrZSB0aGVyZSBpcyBmb3JcbiAqIHN0cmljdC1udWxsLWNoZWNrc1xuICovXG5leHBvcnQgY2xhc3MgT3B0aW9uYWw8VD4ge1xuICBwcml2YXRlIHJlYWRvbmx5IHRhZzogYm9vbGVhbjtcbiAgcHJpdmF0ZSByZWFkb25seSB2YWx1ZT86IFQ7XG5cbiAgLy8gU25lYWt5IG9wdGltaXNhdGlvbjogZXZlcnkgaW5zdGFuY2Ugb2YgT3B0aW9uYWwubm9uZSBpcyBpZGVudGljYWwsIHNvIGp1c3RcbiAgLy8gcmV1c2UgdGhlIHNhbWUgb2JqZWN0XG4gIHByaXZhdGUgc3RhdGljIHNpbmdsZXRvbk5vbmUgPSBuZXcgT3B0aW9uYWw8YW55PihmYWxzZSk7XG5cbiAgLy8gVGhlIGludGVybmFsIHJlcHJlc2VudGF0aW9uIGhhcyBhIGB0YWdgIGFuZCBhIGB2YWx1ZWAsIGJ1dCBib3RoIGFyZVxuICAvLyBwcml2YXRlOiBhYmxlIHRvIGJlIGNvbnNvbGUubG9nZ2VkLCBidXQgbm90IGFibGUgdG8gYmUgYWNjZXNzZWQgYnkgY29kZVxuICBwcml2YXRlIGNvbnN0cnVjdG9yKHRhZzogYm9vbGVhbiwgdmFsdWU/OiBUKSB7XG4gICAgdGhpcy50YWcgPSB0YWc7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgLy8gLS0tIElkZW50aXRpZXMgLS0tXG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgYE9wdGlvbmFsPFQ+YCB0aGF0ICoqZG9lcyoqIGNvbnRhaW4gYSB2YWx1ZS5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgc29tZTxUPih0aGlzOiB2b2lkLCB2YWx1ZTogVCk6IE9wdGlvbmFsPFQ+IHtcbiAgICByZXR1cm4gbmV3IE9wdGlvbmFsKHRydWUsIHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgYE9wdGlvbmFsPFQ+YCB0aGF0ICoqZG9lcyBub3QqKiBjb250YWluIGEgdmFsdWUuIGBUYCBjYW4gYmVcbiAgICogYW55IHR5cGUgYmVjYXVzZSB3ZSBkb24ndCBhY3R1YWxseSBoYXZlIGEgYFRgLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBub25lPFQgPSBuZXZlcj4odGhpczogdm9pZCk6IE9wdGlvbmFsPFQ+IHtcbiAgICByZXR1cm4gT3B0aW9uYWwuc2luZ2xldG9uTm9uZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtIGEgdHJhbnNmb3JtIG9uIGFuIGBPcHRpb25hbGAgdHlwZS4gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXNcbiAgICogYE9wdGlvbmFsYCBjb250YWlucyBhIHZhbHVlIG9yIG5vdCwgYGZvbGRgIHdpbGwgcmV0dXJuIGEgdmFsdWUgb2YgdHlwZSBgVWAuXG4gICAqIElmIHRoaXMgYE9wdGlvbmFsYCBkb2VzIG5vdCBjb250YWluIGEgdmFsdWUsIHRoZSBgVWAgd2lsbCBiZSBjcmVhdGVkIGJ5XG4gICAqIGNhbGxpbmcgYG9uTm9uZWAuIElmIHRoaXMgYE9wdGlvbmFsYCBkb2VzIGNvbnRhaW4gYSB2YWx1ZSwgdGhlIGBVYCB3aWxsIGJlXG4gICAqIGNyZWF0ZWQgYnkgY2FsbGluZyBgb25Tb21lYC5cbiAgICpcbiAgICogRm9yIHRoZSBGUCBlbnRodXNpYXN0cyBpbiB0aGUgcm9vbSwgdGhpcyBmdW5jdGlvbjpcbiAgICogMS4gQ291bGQgYmUgdXNlZCB0byBpbXBsZW1lbnQgYWxsIG9mIHRoZSBmdW5jdGlvbnMgYmVsb3dcbiAgICogMi4gRm9ybXMgYSBjYXRhbW9ycGhpc21cbiAgICovXG4gIHB1YmxpYyBmb2xkPFU+KG9uTm9uZTogKCkgPT4gVSwgb25Tb21lOiAodmFsdWU6IFQpID0+IFUpOiBVIHtcbiAgICBpZiAodGhpcy50YWcpIHtcbiAgICAgIHJldHVybiBvblNvbWUodGhpcy52YWx1ZSBhcyBUKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG9uTm9uZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgdGhpcyBgT3B0aW9uYWxgIG9iamVjdCBjb250YWlucyBhIHZhbHVlLlxuICAgKi9cbiAgcHVibGljIGlzU29tZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50YWc7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIGlmIHRoaXMgYE9wdGlvbmFsYCBvYmplY3QgKipkb2VzIG5vdCoqIGNvbnRhaW4gYSB2YWx1ZS5cbiAgICovXG4gIHB1YmxpYyBpc05vbmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLnRhZztcbiAgfVxuXG4gIC8vIC0tLSBGdW5jdG9yIChuYW1lIHN0b2xlbiBmcm9tIEhhc2tlbGwgLyBtYXRocykgLS0tXG5cbiAgLyoqXG4gICAqIFBlcmZvcm0gYSB0cmFuc2Zvcm0gb24gYW4gYE9wdGlvbmFsYCBvYmplY3QsICoqaWYqKiB0aGVyZSBpcyBhIHZhbHVlLiBJZlxuICAgKiB5b3UgcHJvdmlkZSBhIGZ1bmN0aW9uIHRvIHR1cm4gYSBUIGludG8gYSBVLCB0aGlzIGlzIHRoZSBmdW5jdGlvbiB5b3UgdXNlXG4gICAqIHRvIHR1cm4gYW4gYE9wdGlvbmFsPFQ+YCBpbnRvIGFuIGBPcHRpb25hbDxVPmAuIElmIHRoaXMgKipkb2VzKiogY29udGFpblxuICAgKiBhIHZhbHVlIHRoZW4gdGhlIG91dHB1dCB3aWxsIGFsc28gY29udGFpbiBhIHZhbHVlICh0aGF0IHZhbHVlIGJlaW5nIHRoZVxuICAgKiBvdXRwdXQgb2YgYG1hcHBlcih0aGlzLnZhbHVlKWApLCBhbmQgaWYgdGhpcyAqKmRvZXMgbm90KiogY29udGFpbiBhIHZhbHVlXG4gICAqIHRoZW4gbmVpdGhlciB3aWxsIHRoZSBvdXRwdXQuXG4gICAqL1xuICBwdWJsaWMgbWFwPFU+KG1hcHBlcjogKHZhbHVlOiBUKSA9PiBVKTogT3B0aW9uYWw8VT4ge1xuICAgIGlmICh0aGlzLnRhZykge1xuICAgICAgcmV0dXJuIE9wdGlvbmFsLnNvbWUobWFwcGVyKHRoaXMudmFsdWUgYXMgVCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gT3B0aW9uYWwubm9uZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIC0tLSBNb25hZCAobmFtZSBzdG9sZW4gZnJvbSBIYXNrZWxsIC8gbWF0aHMpIC0tLVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtIGEgdHJhbnNmb3JtIG9uIGFuIGBPcHRpb25hbGAgb2JqZWN0LCAqKmlmKiogdGhlcmUgaXMgYSB2YWx1ZS5cbiAgICogVW5saWtlIGBtYXBgLCBoZXJlIHRoZSB0cmFuc2Zvcm0gaXRzZWxmIGFsc28gcmV0dXJucyBhbiBgT3B0aW9uYWxgLlxuICAgKi9cbiAgcHVibGljIGJpbmQ8VT4oYmluZGVyOiAodmFsdWU6IFQpID0+IE9wdGlvbmFsPFU+KTogT3B0aW9uYWw8VT4ge1xuICAgIGlmICh0aGlzLnRhZykge1xuICAgICAgcmV0dXJuIGJpbmRlcih0aGlzLnZhbHVlIGFzIFQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gT3B0aW9uYWwubm9uZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIC0tLSBUcmF2ZXJzYWJsZSAobmFtZSBzdG9sZW4gZnJvbSBIYXNrZWxsIC8gbWF0aHMpIC0tLVxuXG4gIC8qKlxuICAgKiBGb3IgYSBnaXZlbiBwcmVkaWNhdGUsIHRoaXMgZnVuY3Rpb24gZmluZHMgb3V0IGlmIHRoZXJlICoqZXhpc3RzKiogYSB2YWx1ZVxuICAgKiBpbnNpZGUgdGhpcyBgT3B0aW9uYWxgIG9iamVjdCB0aGF0IG1lZXRzIHRoZSBwcmVkaWNhdGUuIEluIHByYWN0aWNlLCB0aGlzXG4gICAqIG1lYW5zIHRoYXQgZm9yIGBPcHRpb25hbGBzIHRoYXQgZG8gbm90IGNvbnRhaW4gYSB2YWx1ZSBpdCByZXR1cm5zIGZhbHNlIChhc1xuICAgKiBubyBwcmVkaWNhdGUtbWVldGluZyB2YWx1ZSBleGlzdHMpLlxuICAgKi9cbiAgcHVibGljIGV4aXN0cyhwcmVkaWNhdGU6ICh2YWx1ZTogVCkgPT4gYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnRhZyAmJiBwcmVkaWNhdGUodGhpcy52YWx1ZSBhcyBUKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3IgYSBnaXZlbiBwcmVkaWNhdGUsIHRoaXMgZnVuY3Rpb24gZmluZHMgb3V0IGlmICoqYWxsKiogdGhlIHZhbHVlcyBpbnNpZGVcbiAgICogdGhpcyBgT3B0aW9uYWxgIG9iamVjdCBtZWV0IHRoZSBwcmVkaWNhdGUuIEluIHByYWN0aWNlLCB0aGlzIG1lYW5zIHRoYXRcbiAgICogZm9yIGBPcHRpb25hbGBzIHRoYXQgZG8gbm90IGNvbnRhaW4gYSB2YWx1ZSBpdCByZXR1cm5zIHRydWUgKGFzIGFsbCAwXG4gICAqIG9iamVjdHMgZG8gbWVldCB0aGUgcHJlZGljYXRlKS5cbiAgICovXG4gIHB1YmxpYyBmb3JhbGwocHJlZGljYXRlOiAodmFsdWU6IFQpID0+IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMudGFnIHx8IHByZWRpY2F0ZSh0aGlzLnZhbHVlIGFzIFQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvciBhIGdpdmVuIHByZWRpY2F0ZSwgY3JlYXRlIGEgbmV3IGBPcHRpb25hbGAgb2JqZWN0IHRoYXQgd2lsbCByZXRhaW5cbiAgICogYWxsIHRoZSB2YWx1ZXMgaW5zaWRlIHRoZSBvbGQgYE9wdGlvbmFsYCBvYmplY3QgdGhhdCBtZWV0IHRoZSBwcmVkaWNhdGUuXG4gICAqIEluIHByYWN0aWNlLCB0aGUgYE9wdGlvbmFsYCBvYmplY3QgY29udGFpbnMgZWl0aGVyIDAgb3IgMSBvYmplY3RzLCBhbmRcbiAgICogdGhlIG91dHB1dCB3aWxsIGtlZXAgdGhlIChzaW5nbGUpIGlucHV0IG9iamVjdCAoaWYgaXQgZXhpc3RzKSBhcyBsb25nIGFzXG4gICAqIGl0IHBhc3NlcyB0aGUgcHJlZGljYXRlLlxuICAgKi9cbiAgcHVibGljIGZpbHRlcjxVIGV4dGVuZHMgVD4ocHJlZGljYXRlOiAodmFsdWU6IFQpID0+IHZhbHVlIGlzIFUpOiBPcHRpb25hbDxVPjtcbiAgcHVibGljIGZpbHRlcihwcmVkaWNhdGU6ICh2YWx1ZTogVCkgPT4gYm9vbGVhbik6IE9wdGlvbmFsPFQ+O1xuICBwdWJsaWMgZmlsdGVyKHByZWRpY2F0ZTogKHZhbHVlOiBUKSA9PiBib29sZWFuKTogT3B0aW9uYWw8VD4ge1xuICAgIGlmICghdGhpcy50YWcgfHwgcHJlZGljYXRlKHRoaXMudmFsdWUgYXMgVCkpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gT3B0aW9uYWwubm9uZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIC0tLSBHZXR0ZXJzIC0tLVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHZhbHVlIG91dCBvZiB0aGUgaW5zaWRlIG9mIHRoZSBgT3B0aW9uYWxgIG9iamVjdCwgdXNpbmcgYSBkZWZhdWx0XG4gICAqIGByZXBsYWNlbWVudGAgdmFsdWUgaWYgdGhlIHByb3ZpZGVkIGBPcHRpb25hbGAgb2JqZWN0IGRvZXMgbm90IGNvbnRhaW4gYVxuICAgKiB2YWx1ZS5cbiAgICovXG4gIHB1YmxpYyBnZXRPcjxVID0gVD4ocmVwbGFjZW1lbnQ6IFUpOiBUIHwgVSB7XG4gICAgcmV0dXJuIHRoaXMudGFnID8gdGhpcy52YWx1ZSBhcyBUIDogcmVwbGFjZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB2YWx1ZSBvdXQgb2YgdGhlIGluc2lkZSBvZiB0aGUgYE9wdGlvbmFsYCBvYmplY3QsIHVzaW5nIGEgZGVmYXVsdFxuICAgKiBgcmVwbGFjZW1lbnRgIHZhbHVlIGlmIHRoZSBwcm92aWRlZCBgT3B0aW9uYWxgIG9iamVjdCBkb2VzIG5vdCBjb250YWluIGFcbiAgICogdmFsdWUuICBVbmxpa2UgYGdldE9yYCwgaW4gdGhpcyBtZXRob2QgdGhlIGByZXBsYWNlbWVudGAgb2JqZWN0IGlzIGFsc29cbiAgICogYE9wdGlvbmFsYCAtIG1lYW5pbmcgdGhhdCB0aGlzIG1ldGhvZCB3aWxsIGFsd2F5cyByZXR1cm4gYW4gYE9wdGlvbmFsYC5cbiAgICovXG4gIHB1YmxpYyBvcjxVID0gVD4ocmVwbGFjZW1lbnQ6IE9wdGlvbmFsPFU+KTogT3B0aW9uYWw8VCB8IFU+IHtcbiAgICByZXR1cm4gdGhpcy50YWcgPyB0aGlzIDogcmVwbGFjZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB2YWx1ZSBvdXQgb2YgdGhlIGluc2lkZSBvZiB0aGUgYE9wdGlvbmFsYCBvYmplY3QsIHVzaW5nIGEgZGVmYXVsdFxuICAgKiBgcmVwbGFjZW1lbnRgIHZhbHVlIGlmIHRoZSBwcm92aWRlZCBgT3B0aW9uYWxgIG9iamVjdCBkb2VzIG5vdCBjb250YWluIGFcbiAgICogdmFsdWUuIFVubGlrZSBgZ2V0T3JgLCBpbiB0aGlzIG1ldGhvZCB0aGUgYHJlcGxhY2VtZW50YCB2YWx1ZSBpc1xuICAgKiBcInRodW5rZWRcIiAtIHRoYXQgaXMgdG8gc2F5IHRoYXQgeW91IGRvbid0IHBhc3MgYSB2YWx1ZSB0byBgZ2V0T3JUaHVua2AsIHlvdVxuICAgKiBwYXNzIGEgZnVuY3Rpb24gd2hpY2ggKGlmIGNhbGxlZCkgd2lsbCAqKnJldHVybioqIHRoZSBgdmFsdWVgIHlvdSB3YW50IHRvXG4gICAqIHVzZS5cbiAgICovXG4gIHB1YmxpYyBnZXRPclRodW5rPFUgPSBUPih0aHVuazogKCkgPT4gVSk6IFQgfCBVIHtcbiAgICByZXR1cm4gdGhpcy50YWcgPyB0aGlzLnZhbHVlIGFzIFQgOiB0aHVuaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdmFsdWUgb3V0IG9mIHRoZSBpbnNpZGUgb2YgdGhlIGBPcHRpb25hbGAgb2JqZWN0LCB1c2luZyBhIGRlZmF1bHRcbiAgICogYHJlcGxhY2VtZW50YCB2YWx1ZSBpZiB0aGUgcHJvdmlkZWQgT3B0aW9uYWwgb2JqZWN0IGRvZXMgbm90IGNvbnRhaW4gYVxuICAgKiB2YWx1ZS5cbiAgICpcbiAgICogVW5saWtlIGBvcmAsIGluIHRoaXMgbWV0aG9kIHRoZSBgcmVwbGFjZW1lbnRgIHZhbHVlIGlzIFwidGh1bmtlZFwiIC0gdGhhdCBpc1xuICAgKiB0byBzYXkgdGhhdCB5b3UgZG9uJ3QgcGFzcyBhIHZhbHVlIHRvIGBvclRodW5rYCwgeW91IHBhc3MgYSBmdW5jdGlvbiB3aGljaFxuICAgKiAoaWYgY2FsbGVkKSB3aWxsICoqcmV0dXJuKiogdGhlIGB2YWx1ZWAgeW91IHdhbnQgdG8gdXNlLlxuICAgKlxuICAgKiBVbmxpa2UgYGdldE9yVGh1bmtgLCBpbiB0aGlzIG1ldGhvZCB0aGUgYHJlcGxhY2VtZW50YCB2YWx1ZSBpcyBhbHNvXG4gICAqIGBPcHRpb25hbGAsIG1lYW5pbmcgdGhhdCB0aGlzIG1ldGhvZCB3aWxsIGFsd2F5cyByZXR1cm4gYW4gYE9wdGlvbmFsYC5cbiAgICovXG4gIHB1YmxpYyBvclRodW5rPFUgPSBUPih0aHVuazogKCkgPT4gT3B0aW9uYWw8VT4pOiBPcHRpb25hbDxUIHwgVT4ge1xuICAgIHJldHVybiB0aGlzLnRhZyA/IHRoaXMgOiB0aHVuaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdmFsdWUgb3V0IG9mIHRoZSBpbnNpZGUgb2YgdGhlIGBPcHRpb25hbGAgb2JqZWN0LCB0aHJvd2luZyBhblxuICAgKiBleGNlcHRpb24gaWYgdGhlIHByb3ZpZGVkIGBPcHRpb25hbGAgb2JqZWN0IGRvZXMgbm90IGNvbnRhaW4gYSB2YWx1ZS5cbiAgICpcbiAgICogV0FSTklORzpcbiAgICogWW91IHNob3VsZCBvbmx5IGJlIHVzaW5nIHRoaXMgZnVuY3Rpb24gaWYgeW91IGtub3cgdGhhdCB0aGUgYE9wdGlvbmFsYFxuICAgKiBvYmplY3QgKippcyBub3QqKiBlbXB0eSAob3RoZXJ3aXNlIHlvdSdyZSB0aHJvd2luZyBleGNlcHRpb25zIGluIHByb2R1Y3Rpb25cbiAgICogY29kZSwgd2hpY2ggaXMgYmFkKS5cbiAgICpcbiAgICogSW4gdGVzdHMgdGhpcyBpcyBtb3JlIGFjY2VwdGFibGUuXG4gICAqXG4gICAqIFByZWZlciBvdGhlciBtZXRob2RzIHRvIHRoaXMsIHN1Y2ggYXMgYC5lYWNoYC5cbiAgICovXG4gIHB1YmxpYyBnZXRPckRpZShtZXNzYWdlPzogc3RyaW5nKTogVCB7XG4gICAgaWYgKCF0aGlzLnRhZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UgPz8gJ0NhbGxlZCBnZXRPckRpZSBvbiBOb25lJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlIGFzIFQ7XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tIEludGVyb3Agd2l0aCBudWxsIGFuZCB1bmRlZmluZWQgLS0tXG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gYE9wdGlvbmFsYCB2YWx1ZSBmcm9tIGEgbnVsbGFibGUgKG9yIHVuZGVmaW5lZC1hYmxlKSBpbnB1dC5cbiAgICogTnVsbCwgb3IgdW5kZWZpbmVkLCBpcyBjb252ZXJ0ZWQgdG8gYE5vbmVgLCBhbmQgYW55dGhpbmcgZWxzZSBpcyBjb252ZXJ0ZWRcbiAgICogdG8gYFNvbWVgLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBmcm9tPFQ+KHRoaXM6IHZvaWQsIHZhbHVlOiBUIHwgbnVsbCB8IHVuZGVmaW5lZCk6IE9wdGlvbmFsPE5vbk51bGxhYmxlPFQ+PiB7XG4gICAgcmV0dXJuIFR5cGUuaXNOb25OdWxsYWJsZSh2YWx1ZSkgPyBPcHRpb25hbC5zb21lKHZhbHVlKSA6IE9wdGlvbmFsLm5vbmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhbiBgT3B0aW9uYWxgIHRvIGEgbnVsbGFibGUgdHlwZSwgYnkgZ2V0dGluZyB0aGUgdmFsdWUgaWYgaXRcbiAgICogZXhpc3RzLCBvciByZXR1cm5pbmcgYG51bGxgIGlmIGl0IGRvZXMgbm90LlxuICAgKi9cbiAgcHVibGljIGdldE9yTnVsbCgpOiBUIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMudGFnID8gdGhpcy52YWx1ZSBhcyBUIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhbiBgT3B0aW9uYWxgIHRvIGFuIHVuZGVmaW5lZC1hYmxlIHR5cGUsIGJ5IGdldHRpbmcgdGhlIHZhbHVlIGlmXG4gICAqIGl0IGV4aXN0cywgb3IgcmV0dXJuaW5nIGB1bmRlZmluZWRgIGlmIGl0IGRvZXMgbm90LlxuICAgKi9cbiAgcHVibGljIGdldE9yVW5kZWZpbmVkKCk6IFQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG5cbiAgLy8gLS0tIFV0aWxpdGllcyAtLS1cblxuICAvKipcbiAgICogSWYgdGhlIGBPcHRpb25hbGAgY29udGFpbnMgYSB2YWx1ZSwgcGVyZm9ybSBhbiBhY3Rpb24gb24gdGhhdCB2YWx1ZS5cbiAgICogVW5saWtlIHRoZSByZXN0IG9mIHRoZSBtZXRob2RzIG9uIHRoaXMgdHlwZSwgYC5lYWNoYCBoYXMgc2lkZS1lZmZlY3RzLiBJZlxuICAgKiB5b3Ugd2FudCB0byB0cmFuc2Zvcm0gYW4gYE9wdGlvbmFsPFQ+YCAqKmludG8qKiBzb21ldGhpbmcsIHRoZW4gdGhpcyBpcyBub3RcbiAgICogdGhlIG1ldGhvZCBmb3IgeW91LiBJZiB5b3Ugd2FudCB0byB1c2UgYW4gYE9wdGlvbmFsPFQ+YCB0byAqKmRvKipcbiAgICogc29tZXRoaW5nLCB0aGVuIHRoaXMgaXMgdGhlIG1ldGhvZCBmb3IgeW91IC0gcHJvdmlkZWQgeW91J3JlIG9rYXkgd2l0aCBub3RcbiAgICogZG9pbmcgYW55dGhpbmcgaW4gdGhlIGNhc2Ugd2hlcmUgdGhlIGBPcHRpb25hbGAgZG9lc24ndCBoYXZlIGEgdmFsdWUgaW5zaWRlXG4gICAqIGl0LiBJZiB5b3UncmUgbm90IHN1cmUgd2hldGhlciB5b3VyIHVzZS1jYXNlIGZpdHMgaW50byB0cmFuc2Zvcm1pbmdcbiAgICogKippbnRvKiogc29tZXRoaW5nIG9yICoqZG9pbmcqKiBzb21ldGhpbmcsIGNoZWNrIHdoZXRoZXIgaXQgaGFzIGEgcmV0dXJuXG4gICAqIHZhbHVlLiBJZiBpdCBkb2VzLCB5b3Ugc2hvdWxkIGJlIHBlcmZvcm1pbmcgYSB0cmFuc2Zvcm0uXG4gICAqL1xuICBwdWJsaWMgZWFjaCh3b3JrZXI6ICh2YWx1ZTogVCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnRhZykge1xuICAgICAgd29ya2VyKHRoaXMudmFsdWUgYXMgVCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFR1cm4gdGhlIGBPcHRpb25hbGAgb2JqZWN0IGludG8gYW4gYXJyYXkgdGhhdCBjb250YWlucyBhbGwgb2YgdGhlIHZhbHVlc1xuICAgKiBzdG9yZWQgaW5zaWRlIHRoZSBgT3B0aW9uYWxgLiBJbiBwcmFjdGljZSwgdGhpcyBtZWFucyB0aGUgb3V0cHV0IHdpbGwgaGF2ZVxuICAgKiBlaXRoZXIgMCBvciAxIGVsZW1lbnRzLlxuICAgKi9cbiAgcHVibGljIHRvQXJyYXkoKTogVFtdIHtcbiAgICByZXR1cm4gdGhpcy50YWcgPyBbIHRoaXMudmFsdWUgYXMgVCBdIDogW107XG4gIH1cblxuICAvKipcbiAgICogVHVybiB0aGUgYE9wdGlvbmFsYCBvYmplY3QgaW50byBhIHN0cmluZyBmb3IgZGVidWdnaW5nIG9yIHByaW50aW5nLiBOb3RcbiAgICogcmVjb21tZW5kZWQgZm9yIHByb2R1Y3Rpb24gY29kZSwgYnV0IGdvb2QgZm9yIGRlYnVnZ2luZy4gQWxzbyBub3RlIHRoYXRcbiAgICogdGhlc2UgZGF5cyBhbiBgT3B0aW9uYWxgIG9iamVjdCBjYW4gYmUgbG9nZ2VkIHRvIHRoZSBjb25zb2xlIGRpcmVjdGx5LCBhbmRcbiAgICogaXRzIGlubmVyIHZhbHVlIChpZiBpdCBleGlzdHMpIHdpbGwgYmUgdmlzaWJsZS5cbiAgICovXG4gIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnRhZyA/IGBzb21lKCR7dGhpcy52YWx1ZX0pYCA6ICdub25lKCknO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDZWxsIH0gZnJvbSAnLi9DZWxsJztcbmltcG9ydCAqIGFzIEZ1biBmcm9tICcuL0Z1bic7XG5pbXBvcnQgeyBPcHRpb25hbCB9IGZyb20gJy4vT3B0aW9uYWwnO1xuXG5pbnRlcmZhY2UgU2luZ2xldG9uPFQ+IHtcbiAgcmVhZG9ubHkgY2xlYXI6ICgpID0+IHZvaWQ7XG4gIHJlYWRvbmx5IGlzU2V0OiAoKSA9PiBib29sZWFuO1xuICByZWFkb25seSBnZXQ6ICgpID0+IE9wdGlvbmFsPFQ+O1xuICByZWFkb25seSBzZXQ6ICh2YWx1ZTogVCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXBlYXRhYmxlIHtcbiAgcmVhZG9ubHkgY2xlYXI6ICgpID0+IHZvaWQ7XG4gIHJlYWRvbmx5IGlzU2V0OiAoKSA9PiBib29sZWFuO1xuICByZWFkb25seSBnZXQ6ICgpID0+IE9wdGlvbmFsPG51bWJlcj47XG4gIHJlYWRvbmx5IHNldDogKGZ1bmN0aW9uVG9SZXBlYXQ6ICgpID0+IHZvaWQpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmV2b2NhYmxlPFQ+IGV4dGVuZHMgU2luZ2xldG9uPFQ+IHsgfVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwaTxUPiBleHRlbmRzIFNpbmdsZXRvbjxUPiB7XG4gIHJlYWRvbmx5IHJ1bjogKGZuOiAoZGF0YTogVCkgPT4gdm9pZCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBWYWx1ZTxUPiBleHRlbmRzIFNpbmdsZXRvbjxUPiB7XG4gIHJlYWRvbmx5IG9uOiAoZm46IChkYXRhOiBUKSA9PiB2b2lkKSA9PiB2b2lkO1xufVxuXG5jb25zdCBzaW5nbGV0b24gPSA8VD4gKGRvUmV2b2tlOiAoZGF0YTogVCkgPT4gdm9pZCk6IFNpbmdsZXRvbjxUPiA9PiB7XG4gIGNvbnN0IHN1YmplY3QgPSBDZWxsKE9wdGlvbmFsLm5vbmU8VD4oKSk7XG5cbiAgY29uc3QgcmV2b2tlID0gKCk6IHZvaWQgPT4gc3ViamVjdC5nZXQoKS5lYWNoKGRvUmV2b2tlKTtcblxuICBjb25zdCBjbGVhciA9ICgpID0+IHtcbiAgICByZXZva2UoKTtcbiAgICBzdWJqZWN0LnNldChPcHRpb25hbC5ub25lKCkpO1xuICB9O1xuXG4gIGNvbnN0IGlzU2V0ID0gKCkgPT4gc3ViamVjdC5nZXQoKS5pc1NvbWUoKTtcblxuICBjb25zdCBnZXQgPSAoKTogT3B0aW9uYWw8VD4gPT4gc3ViamVjdC5nZXQoKTtcblxuICBjb25zdCBzZXQgPSAoczogVCkgPT4ge1xuICAgIHJldm9rZSgpO1xuICAgIHN1YmplY3Quc2V0KE9wdGlvbmFsLnNvbWUocykpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY2xlYXIsXG4gICAgaXNTZXQsXG4gICAgZ2V0LFxuICAgIHNldFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHJlcGVhdGFibGUgPSAoZGVsYXk6IG51bWJlcik6IFJlcGVhdGFibGUgPT4ge1xuICBjb25zdCBpbnRlcnZhbElkID0gQ2VsbChPcHRpb25hbC5ub25lPG51bWJlcj4oKSk7XG5cbiAgY29uc3QgcmV2b2tlID0gKCk6IHZvaWQgPT4gaW50ZXJ2YWxJZC5nZXQoKS5lYWNoKChpZCkgPT4gY2xlYXJJbnRlcnZhbChpZCkpO1xuXG4gIGNvbnN0IGNsZWFyID0gKCkgPT4ge1xuICAgIHJldm9rZSgpO1xuICAgIGludGVydmFsSWQuc2V0KE9wdGlvbmFsLm5vbmUoKSk7XG4gIH07XG5cbiAgY29uc3QgaXNTZXQgPSAoKSA9PiBpbnRlcnZhbElkLmdldCgpLmlzU29tZSgpO1xuXG4gIGNvbnN0IGdldCA9ICgpOiBPcHRpb25hbDxudW1iZXI+ID0+IGludGVydmFsSWQuZ2V0KCk7XG5cbiAgY29uc3Qgc2V0ID0gKGZ1bmN0aW9uVG9SZXBlYXQ6ICgpID0+IHZvaWQpID0+IHtcbiAgICByZXZva2UoKTtcbiAgICBpbnRlcnZhbElkLnNldChPcHRpb25hbC5zb21lKHNldEludGVydmFsKGZ1bmN0aW9uVG9SZXBlYXQsIGRlbGF5KSkpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY2xlYXIsXG4gICAgaXNTZXQsXG4gICAgZ2V0LFxuICAgIHNldCxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZXN0cm95YWJsZSA9IDxUIGV4dGVuZHMgeyBkZXN0cm95OiAoKSA9PiB2b2lkIH0+ICgpOiBSZXZvY2FibGU8VD4gPT4gc2luZ2xldG9uPFQ+KChzKSA9PiBzLmRlc3Ryb3koKSk7XG5cbmV4cG9ydCBjb25zdCB1bmJpbmRhYmxlID0gPFQgZXh0ZW5kcyB7IHVuYmluZDogKCkgPT4gdm9pZCB9PiAoKTogUmV2b2NhYmxlPFQ+ID0+IHNpbmdsZXRvbjxUPigocykgPT4gcy51bmJpbmQoKSk7XG5cbmV4cG9ydCBjb25zdCBhcGkgPSA8VCBleHRlbmRzIHsgZGVzdHJveTogKCkgPT4gdm9pZCB9PiAoKTogQXBpPFQ+ID0+IHtcbiAgY29uc3Qgc3ViamVjdCA9IGRlc3Ryb3lhYmxlPFQ+KCk7XG5cbiAgY29uc3QgcnVuID0gKGY6IChkYXRhOiBUKSA9PiB2b2lkKSA9PiBzdWJqZWN0LmdldCgpLmVhY2goZik7XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5zdWJqZWN0LFxuICAgIHJ1blxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHZhbHVlID0gPFQ+ICgpOiBWYWx1ZTxUPiA9PiB7XG4gIGNvbnN0IHN1YmplY3QgPSBzaW5nbGV0b24oRnVuLm5vb3ApO1xuXG4gIGNvbnN0IG9uID0gKGY6IChkYXRhOiBUKSA9PiB2b2lkKSA9PiBzdWJqZWN0LmdldCgpLmVhY2goZik7XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5zdWJqZWN0LFxuICAgIG9uXG4gIH07XG59O1xuIiwiaW1wb3J0ICogYXMgU3RyQXBwZW5kIGZyb20gJy4uL3N0ci9TdHJBcHBlbmQnO1xuXG5pbXBvcnQgeyBPcHRpb25hbCB9IGZyb20gJy4vT3B0aW9uYWwnO1xuaW1wb3J0ICogYXMgVHlwZSBmcm9tICcuL1R5cGUnO1xuXG5jb25zdCBjaGVja1JhbmdlID0gKHN0cjogc3RyaW5nLCBzdWJzdHI6IHN0cmluZywgc3RhcnQ6IG51bWJlcik6IGJvb2xlYW4gPT5cbiAgc3Vic3RyID09PSAnJyB8fCBzdHIubGVuZ3RoID49IHN1YnN0ci5sZW5ndGggJiYgc3RyLnN1YnN0cihzdGFydCwgc3RhcnQgKyBzdWJzdHIubGVuZ3RoKSA9PT0gc3Vic3RyO1xuXG4vKiogR2l2ZW4gYSBzdHJpbmcgYW5kIG9iamVjdCwgcGVyZm9ybSB0ZW1wbGF0ZS1yZXBsYWNlbWVudHMgb24gdGhlIHN0cmluZywgYXMgc3BlY2lmaWVkIGJ5IHRoZSBvYmplY3QuXG4gKiBBbnkgdGVtcGxhdGUgZmllbGRzIG9mIHRoZSBmb3JtICR7bmFtZX0gYXJlIHJlcGxhY2VkIGJ5IHRoZSBzdHJpbmcgb3IgbnVtYmVyIHNwZWNpZmllZCBhcyBvYmpbXCJuYW1lXCJdXG4gKiBCYXNlZCBvbiBEb3VnbGFzIENyb2NrZm9yZCdzICdzdXBwbGFudCcgbWV0aG9kIGZvciB0ZW1wbGF0ZS1yZXBsYWNlIG9mIHN0cmluZ3MuIFVzZXMgZGlmZmVyZW50IHRlbXBsYXRlIGZvcm1hdC5cbiAqL1xuZXhwb3J0IGNvbnN0IHN1cHBsYW50ID0gKHN0cjogc3RyaW5nLCBvYmo6IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IG51bWJlcj4pOiBzdHJpbmcgPT4ge1xuICBjb25zdCBpc1N0cmluZ09yTnVtYmVyID0gKGE6IHVua25vd24pOiBhIGlzIHN0cmluZyB8IG51bWJlciA9PiB7XG4gICAgY29uc3QgdCA9IHR5cGVvZiBhO1xuICAgIHJldHVybiB0ID09PSAnc3RyaW5nJyB8fCB0ID09PSAnbnVtYmVyJztcbiAgfTtcblxuICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcJFxceyhbXnt9XSopXFx9L2csXG4gICAgKGZ1bGxNYXRjaDogc3RyaW5nLCBrZXk6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBvYmpba2V5XTtcbiAgICAgIHJldHVybiBpc1N0cmluZ09yTnVtYmVyKHZhbHVlKSA/IHZhbHVlLnRvU3RyaW5nKCkgOiBmdWxsTWF0Y2g7XG4gICAgfVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUxlYWRpbmcgPSAoc3RyOiBzdHJpbmcsIHByZWZpeDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIHN0YXJ0c1dpdGgoc3RyLCBwcmVmaXgpID8gU3RyQXBwZW5kLnJlbW92ZUZyb21TdGFydChzdHIsIHByZWZpeC5sZW5ndGgpIDogc3RyO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZVRyYWlsaW5nID0gKHN0cjogc3RyaW5nLCBzdWZmaXg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBlbmRzV2l0aChzdHIsIHN1ZmZpeCkgPyBTdHJBcHBlbmQucmVtb3ZlRnJvbUVuZChzdHIsIHN1ZmZpeC5sZW5ndGgpIDogc3RyO1xufTtcblxuZXhwb3J0IGNvbnN0IGVuc3VyZUxlYWRpbmcgPSAoc3RyOiBzdHJpbmcsIHByZWZpeDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIHN0YXJ0c1dpdGgoc3RyLCBwcmVmaXgpID8gc3RyIDogU3RyQXBwZW5kLmFkZFRvU3RhcnQoc3RyLCBwcmVmaXgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGVuc3VyZVRyYWlsaW5nID0gKHN0cjogc3RyaW5nLCBzdWZmaXg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBlbmRzV2l0aChzdHIsIHN1ZmZpeCkgPyBzdHIgOiBTdHJBcHBlbmQuYWRkVG9FbmQoc3RyLCBzdWZmaXgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbnRhaW5zID0gKHN0cjogc3RyaW5nLCBzdWJzdHI6IHN0cmluZywgc3RhcnQ6IG51bWJlciA9IDAsIGVuZD86IG51bWJlcik6IGJvb2xlYW4gPT4ge1xuICBjb25zdCBpZHggPSBzdHIuaW5kZXhPZihzdWJzdHIsIHN0YXJ0KTtcbiAgaWYgKGlkeCAhPT0gLTEpIHtcbiAgICByZXR1cm4gVHlwZS5pc1VuZGVmaW5lZChlbmQpID8gdHJ1ZSA6IGlkeCArIHN1YnN0ci5sZW5ndGggPD0gZW5kO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGNhcGl0YWxpemUgPSAoc3RyOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gc3RyID09PSAnJyA/ICcnIDogc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnN1YnN0cmluZygxKTtcbn07XG5cbi8qKiBEb2VzICdzdHInIHN0YXJ0IHdpdGggJ3ByZWZpeCc/XG4gKiAgTm90ZTogYWxsIHN0cmluZ3Mgc3RhcnQgd2l0aCB0aGUgZW1wdHkgc3RyaW5nLlxuICogICAgICAgIE1vcmUgZm9ybWFsbHksIGZvciBhbGwgc3RyaW5ncyB4LCBzdGFydHNXaXRoKHgsIFwiXCIpLlxuICogICAgICAgIFRoaXMgaXMgc28gdGhhdCBmb3IgYWxsIHN0cmluZ3MgeCBhbmQgeSwgc3RhcnRzV2l0aCh5ICsgeCwgeSlcbiAqL1xuZXhwb3J0IGNvbnN0IHN0YXJ0c1dpdGggPSAoc3RyOiBzdHJpbmcsIHByZWZpeDogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gIHJldHVybiBjaGVja1JhbmdlKHN0ciwgcHJlZml4LCAwKTtcbn07XG5cbi8qKiBEb2VzICdzdHInIGVuZCB3aXRoICdzdWZmaXgnP1xuICogIE5vdGU6IGFsbCBzdHJpbmdzIGVuZCB3aXRoIHRoZSBlbXB0eSBzdHJpbmcuXG4gKiAgICAgICAgTW9yZSBmb3JtYWxseSwgZm9yIGFsbCBzdHJpbmdzIHgsIGVuZHNXaXRoKHgsIFwiXCIpLlxuICogICAgICAgIFRoaXMgaXMgc28gdGhhdCBmb3IgYWxsIHN0cmluZ3MgeCBhbmQgeSwgZW5kc1dpdGgoeCArIHksIHkpXG4gKi9cbmV4cG9ydCBjb25zdCBlbmRzV2l0aCA9IChzdHI6IHN0cmluZywgc3VmZml4OiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgcmV0dXJuIGNoZWNrUmFuZ2Uoc3RyLCBzdWZmaXgsIHN0ci5sZW5ndGggLSBzdWZmaXgubGVuZ3RoKTtcbn07XG5cbmNvbnN0IGJsYW5rID0gKHI6IFJlZ0V4cCkgPT4gKHM6IHN0cmluZyk6IHN0cmluZyA9PlxuICBzLnJlcGxhY2UociwgJycpO1xuXG4vKiogcmVtb3ZlcyBhbGwgbGVhZGluZyBhbmQgdHJhaWxpbmcgc3BhY2VzICovXG5leHBvcnQgY29uc3QgdHJpbTogKHM6IHN0cmluZykgPT4gc3RyaW5nID1cbiAgYmxhbmsoL15cXHMrfFxccyskL2cpO1xuXG5leHBvcnQgY29uc3QgbFRyaW06IChzOiBzdHJpbmcpID0+IHN0cmluZyA9XG4gIGJsYW5rKC9eXFxzKy9nKTtcblxuZXhwb3J0IGNvbnN0IHJUcmltOiAoczogc3RyaW5nKSA9PiBzdHJpbmcgPVxuICBibGFuaygvXFxzKyQvZyk7XG5cbmV4cG9ydCBjb25zdCBpc05vdEVtcHR5ID0gKHM6IHN0cmluZyk6IGJvb2xlYW4gPT4gcy5sZW5ndGggPiAwO1xuXG5leHBvcnQgY29uc3QgaXNFbXB0eSA9IChzOiBzdHJpbmcpOiBib29sZWFuID0+ICFpc05vdEVtcHR5KHMpO1xuXG5leHBvcnQgY29uc3QgcmVwZWF0ID0gKHM6IHN0cmluZywgY291bnQ6IG51bWJlcik6IHN0cmluZyA9PiBjb3VudCA8PSAwID8gJycgOiBuZXcgQXJyYXkoY291bnQgKyAxKS5qb2luKHMpO1xuXG5leHBvcnQgY29uc3QgZnJvbUNvZGVQb2ludCA9IFN0cmluZy5mcm9tQ29kZVBvaW50O1xuXG5leHBvcnQgY29uc3QgdG9JbnQgPSAodmFsdWU6IHN0cmluZywgcmFkaXg6IG51bWJlciA9IDEwKTogT3B0aW9uYWw8bnVtYmVyPiA9PiB7XG4gIGNvbnN0IG51bSA9IHBhcnNlSW50KHZhbHVlLCByYWRpeCk7XG4gIHJldHVybiBpc05hTihudW0pID8gT3B0aW9uYWwubm9uZSgpIDogT3B0aW9uYWwuc29tZShudW0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHRvRmxvYXQgPSAodmFsdWU6IHN0cmluZyk6IE9wdGlvbmFsPG51bWJlcj4gPT4ge1xuICBjb25zdCBudW0gPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgcmV0dXJuIGlzTmFOKG51bSkgPyBPcHRpb25hbC5ub25lKCkgOiBPcHRpb25hbC5zb21lKG51bSk7XG59O1xuIiwiaW1wb3J0ICogYXMgVHlwZSBmcm9tICcuL1R5cGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRocm90dGxlcjxBIGV4dGVuZHMgYW55W10+IHtcbiAgcmVhZG9ubHkgY2FuY2VsOiAoKSA9PiB2b2lkO1xuICByZWFkb25seSB0aHJvdHRsZTogKC4uLmFyZ3M6IEEpID0+IHZvaWQ7XG59XG5cbi8vIFJ1biBhIGZ1bmN0aW9uIGZuIGFmdGVyIHJhdGUgbXMuIElmIGFub3RoZXIgaW52b2NhdGlvbiBvY2N1cnNcbi8vIGR1cmluZyB0aGUgdGltZSBpdCBpcyB3YWl0aW5nLCB1cGRhdGUgdGhlIGFyZ3VtZW50cyBmIHdpbGwgcnVuXG4vLyB3aXRoIChidXQga2VlcCB0aGUgY3VycmVudCBzY2hlZHVsZSlcbmV4cG9ydCBjb25zdCBhZGFwdGFibGUgPSA8QSBleHRlbmRzIGFueVtdPihmbjogKC4uLmE6IEEpID0+IHZvaWQsIHJhdGU6IG51bWJlcik6IFRocm90dGxlcjxBPiA9PiB7XG4gIGxldCB0aW1lcjogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIGxldCBhcmdzOiBBIHwgbnVsbCA9IG51bGw7XG4gIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICBpZiAoIVR5cGUuaXNOdWxsKHRpbWVyKSkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgIHRpbWVyID0gbnVsbDtcbiAgICAgIGFyZ3MgPSBudWxsO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgdGhyb3R0bGUgPSAoLi4ubmV3QXJnczogQSkgPT4ge1xuICAgIGFyZ3MgPSBuZXdBcmdzO1xuICAgIGlmIChUeXBlLmlzTnVsbCh0aW1lcikpIHtcbiAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRlbXBBcmdzID0gYXJncztcbiAgICAgICAgdGltZXIgPSBudWxsO1xuICAgICAgICBhcmdzID0gbnVsbDtcbiAgICAgICAgZm4uYXBwbHkobnVsbCwgdGVtcEFyZ3MgYXMgQSk7XG4gICAgICB9LCByYXRlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBjYW5jZWwsXG4gICAgdGhyb3R0bGVcbiAgfTtcbn07XG5cbi8vIFJ1biBhIGZ1bmN0aW9uIGZuIGFmdGVyIHJhdGUgbXMuIElmIGFub3RoZXIgaW52b2NhdGlvbiBvY2N1cnNcbi8vIGR1cmluZyB0aGUgdGltZSBpdCBpcyB3YWl0aW5nLCBpZ25vcmUgaXQgY29tcGxldGVseS5cbmV4cG9ydCBjb25zdCBmaXJzdCA9IDxBIGV4dGVuZHMgYW55W10+KGZuOiAoLi4uYTogQSkgPT4gdm9pZCwgcmF0ZTogbnVtYmVyKTogVGhyb3R0bGVyPEE+ID0+IHtcbiAgbGV0IHRpbWVyOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgIGlmICghVHlwZS5pc051bGwodGltZXIpKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgdGltZXIgPSBudWxsO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgdGhyb3R0bGUgPSAoLi4uYXJnczogQSkgPT4ge1xuICAgIGlmIChUeXBlLmlzTnVsbCh0aW1lcikpIHtcbiAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRpbWVyID0gbnVsbDtcbiAgICAgICAgZm4uYXBwbHkobnVsbCwgYXJncyk7XG4gICAgICB9LCByYXRlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBjYW5jZWwsXG4gICAgdGhyb3R0bGVcbiAgfTtcbn07XG5cbi8vIFJ1biBhIGZ1bmN0aW9uIGZuIGFmdGVyIHJhdGUgbXMuIElmIGFub3RoZXIgaW52b2NhdGlvbiBvY2N1cnNcbi8vIGR1cmluZyB0aGUgdGltZSBpdCBpcyB3YWl0aW5nLCByZXNjaGVkdWxlIHRoZSBmdW5jdGlvbiBhZ2FpblxuLy8gd2l0aCB0aGUgbmV3IGFyZ3VtZW50cy5cbmV4cG9ydCBjb25zdCBsYXN0ID0gPEEgZXh0ZW5kcyBhbnlbXT4oZm46ICguLi5hOiBBKSA9PiB2b2lkLCByYXRlOiBudW1iZXIpOiBUaHJvdHRsZXI8QT4gPT4ge1xuICBsZXQgdGltZXI6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgaWYgKCFUeXBlLmlzTnVsbCh0aW1lcikpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICB0aW1lciA9IG51bGw7XG4gICAgfVxuICB9O1xuICBjb25zdCB0aHJvdHRsZSA9ICguLi5hcmdzOiBBKSA9PiB7XG4gICAgY2FuY2VsKCk7XG4gICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRpbWVyID0gbnVsbDtcbiAgICAgIGZuLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgIH0sIHJhdGUpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY2FuY2VsLFxuICAgIHRocm90dGxlXG4gIH07XG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXdyYXBwZXItb2JqZWN0LXR5cGVzICovXG5jb25zdCBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcblxuaW50ZXJmYWNlIENvbnN0cnVjdG9yPFQgZXh0ZW5kcyBPYmplY3Q+IHtcbiAgcmVhZG9ubHkgcHJvdG90eXBlOiBUO1xuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG59XG5cbmNvbnN0IGhhc1Byb3RvID0gPFQgZXh0ZW5kcyBPYmplY3Q+KHY6IE9iamVjdCwgY29uc3RydWN0b3I6IENvbnN0cnVjdG9yPFQ+LCBwcmVkaWNhdGU6ICh2OiBPYmplY3QsIHByb3RvdHlwZTogVCkgPT4gYm9vbGVhbik6IGJvb2xlYW4gPT4ge1xuICBpZiAocHJlZGljYXRlKHYsIGNvbnN0cnVjdG9yLnByb3RvdHlwZSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICAvLyBTdHJpbmctYmFzZWQgZmFsbGJhY2sgdGltZVxuICAgIHJldHVybiB2LmNvbnN0cnVjdG9yPy5uYW1lID09PSBjb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG59O1xuXG5jb25zdCB0eXBlT2YgPSAoeDogYW55KTogc3RyaW5nID0+IHtcbiAgY29uc3QgdCA9IHR5cGVvZiB4O1xuICBpZiAoeCA9PT0gbnVsbCkge1xuICAgIHJldHVybiAnbnVsbCc7XG4gIH0gZWxzZSBpZiAodCA9PT0gJ29iamVjdCcgJiYgQXJyYXkuaXNBcnJheSh4KSkge1xuICAgIHJldHVybiAnYXJyYXknO1xuICB9IGVsc2UgaWYgKHQgPT09ICdvYmplY3QnICYmIGhhc1Byb3RvKHgsIFN0cmluZywgKG8sIHByb3RvKSA9PiBwcm90by5pc1Byb3RvdHlwZU9mKG8pKSkge1xuICAgIHJldHVybiAnc3RyaW5nJztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdDtcbiAgfVxufTtcblxuY29uc3QgaXNUeXBlID0gPFlvbG8+KHR5cGU6IHN0cmluZykgPT4gKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBZb2xvID0+XG4gIHR5cGVPZih2YWx1ZSkgPT09IHR5cGU7XG5cbmNvbnN0IGlzU2ltcGxlVHlwZSA9IDxZb2xvPih0eXBlOiBzdHJpbmcpID0+ICh2YWx1ZTogYW55KTogdmFsdWUgaXMgWW9sbyA9PlxuICB0eXBlb2YgdmFsdWUgPT09IHR5cGU7XG5cbmNvbnN0IGVxID0gPFQ+ICh0OiBUKSA9PiAoYTogYW55KTogYSBpcyBUID0+XG4gIHQgPT09IGE7XG5cbmV4cG9ydCBjb25zdCBpcyA9IDxFIGV4dGVuZHMgT2JqZWN0Pih2YWx1ZTogYW55LCBjb25zdHJ1Y3RvcjogQ29uc3RydWN0b3I8RT4pOiB2YWx1ZSBpcyBFID0+XG4gIGlzT2JqZWN0KHZhbHVlKSAmJiBoYXNQcm90bzxFPih2YWx1ZSwgY29uc3RydWN0b3IsIChvLCBwcm90bykgPT4gZ2V0UHJvdG90eXBlT2YobykgPT09IHByb3RvKTtcblxuZXhwb3J0IGNvbnN0IGlzU3RyaW5nOiAodmFsdWU6IGFueSkgPT4gdmFsdWUgaXMgc3RyaW5nID1cbiAgaXNUeXBlKCdzdHJpbmcnKTtcblxuZXhwb3J0IGNvbnN0IGlzT2JqZWN0OiAodmFsdWU6IGFueSkgPT4gdmFsdWUgaXMgT2JqZWN0ID1cbiAgaXNUeXBlKCdvYmplY3QnKTtcblxuZXhwb3J0IGNvbnN0IGlzUGxhaW5PYmplY3QgPSAodmFsdWU6IHVua25vd24pOiB2YWx1ZSBpcyBPYmplY3QgPT5cbiAgaXModmFsdWUsIE9iamVjdCk7XG5cbmV4cG9ydCBjb25zdCBpc0FycmF5OiAodmFsdWU6IGFueSkgPT4gdmFsdWUgaXMgQXJyYXk8dW5rbm93bj4gPVxuICBpc1R5cGUoJ2FycmF5Jyk7XG5cbmV4cG9ydCBjb25zdCBpc051bGw6IChhOiBhbnkpID0+IGEgaXMgbnVsbCA9XG4gIGVxKG51bGwpO1xuXG5leHBvcnQgY29uc3QgaXNCb29sZWFuOiAodmFsdWU6IGFueSkgPT4gdmFsdWUgaXMgYm9vbGVhbiA9XG4gIGlzU2ltcGxlVHlwZTxib29sZWFuPignYm9vbGVhbicpO1xuXG5leHBvcnQgY29uc3QgaXNVbmRlZmluZWQ6IChhOiBhbnkpID0+IGEgaXMgdW5kZWZpbmVkID1cbiAgZXEodW5kZWZpbmVkKTtcblxuZXhwb3J0IGNvbnN0IGlzTnVsbGFibGUgPSAoYTogYW55KTogYSBpcyBudWxsIHwgdW5kZWZpbmVkID0+XG4gIGEgPT09IG51bGwgfHwgYSA9PT0gdW5kZWZpbmVkO1xuXG5leHBvcnQgY29uc3QgaXNOb25OdWxsYWJsZSA9IDxBPiAoYTogQSB8IG51bGwgfCB1bmRlZmluZWQpOiBhIGlzIE5vbk51bGxhYmxlPEE+ID0+XG4gICFpc051bGxhYmxlKGEpO1xuXG5leHBvcnQgY29uc3QgaXNGdW5jdGlvbjogKHZhbHVlOiBhbnkpID0+IHZhbHVlIGlzIEZ1bmN0aW9uID1cbiAgaXNTaW1wbGVUeXBlPEZ1bmN0aW9uPignZnVuY3Rpb24nKTtcblxuZXhwb3J0IGNvbnN0IGlzTnVtYmVyOiAodmFsdWU6IGFueSkgPT4gdmFsdWUgaXMgbnVtYmVyID1cbiAgaXNTaW1wbGVUeXBlPG51bWJlcj4oJ251bWJlcicpO1xuXG5leHBvcnQgY29uc3QgaXNBcnJheU9mID0gPEU+KHZhbHVlOiBhbnksIHByZWQ6ICh4OiBhbnkpID0+IHggaXMgRSk6IHZhbHVlIGlzIEFycmF5PEU+ID0+IHtcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHZhbHVlLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICBpZiAoIShwcmVkKHZhbHVlW2ldKSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQgY29uc3QgaXNQcm9taXNlTGlrZSA9ICh4OiBhbnkpOiB4IGlzIFByb21pc2U8dW5rbm93bj4gPT5cbiAgaXNPYmplY3QoeClcbiAgJiYgaXNGdW5jdGlvbih4LnRoZW4pXG4gICYmIGlzRnVuY3Rpb24oeC5jYXRjaCk7XG4iLCJleHBvcnQgY29uc3QgYWRkVG9TdGFydCA9IChzdHI6IHN0cmluZywgcHJlZml4OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gcHJlZml4ICsgc3RyO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZFRvRW5kID0gKHN0cjogc3RyaW5nLCBzdWZmaXg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBzdHIgKyBzdWZmaXg7XG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlRnJvbVN0YXJ0ID0gKHN0cjogc3RyaW5nLCBudW1DaGFyczogbnVtYmVyKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIHN0ci5zdWJzdHJpbmcobnVtQ2hhcnMpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUZyb21FbmQgPSAoc3RyOiBzdHJpbmcsIG51bUNoYXJzOiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gc3RyLnN1YnN0cmluZygwLCBzdHIubGVuZ3RoIC0gbnVtQ2hhcnMpO1xufTtcbiIsImltcG9ydCBQbHVnaW5NYW5hZ2VyIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvUGx1Z2luTWFuYWdlcic7XG5cbmltcG9ydCAqIGFzIENvbW1hbmRzIGZyb20gJy4vYXBpL0NvbW1hbmRzJztcbmltcG9ydCAqIGFzIE9wdGlvbnMgZnJvbSAnLi9hcGkvT3B0aW9ucyc7XG5pbXBvcnQgeyBpbml0RGF0YWJhc2UgfSBmcm9tICcuL2NvcmUvRW1vamlEYXRhYmFzZSc7XG5pbXBvcnQgKiBhcyBGaWx0ZXJzIGZyb20gJy4vY29yZS9GaWx0ZXJzJztcbmltcG9ydCAqIGFzIEF1dG9jb21wbGV0aW9uIGZyb20gJy4vdWkvQXV0b2NvbXBsZXRpb24nO1xuaW1wb3J0ICogYXMgQnV0dG9ucyBmcm9tICcuL3VpL0J1dHRvbnMnO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgY29udGFpbnMgYWxsIGNvcmUgbG9naWMgZm9yIHRoZSBlbW90aWNvbnMgcGx1Z2luLlxuICpcbiAqIEBjbGFzcyB0aW55bWNlLmVtb3RpY29ucy5QbHVnaW5cbiAqIEBwcml2YXRlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgKCk6IHZvaWQgPT4ge1xuICBQbHVnaW5NYW5hZ2VyLmFkZCgnZW1vdGljb25zJywgKGVkaXRvciwgcGx1Z2luVXJsKSA9PiB7XG4gICAgT3B0aW9ucy5yZWdpc3RlcihlZGl0b3IsIHBsdWdpblVybCk7XG4gICAgY29uc3QgZGF0YWJhc2VVcmwgPSBPcHRpb25zLmdldEVtb2ppRGF0YWJhc2VVcmwoZWRpdG9yKTtcbiAgICBjb25zdCBkYXRhYmFzZUlkID0gT3B0aW9ucy5nZXRFbW9qaURhdGFiYXNlSWQoZWRpdG9yKTtcblxuICAgIGNvbnN0IGRhdGFiYXNlID0gaW5pdERhdGFiYXNlKGVkaXRvciwgZGF0YWJhc2VVcmwsIGRhdGFiYXNlSWQpO1xuXG4gICAgQ29tbWFuZHMucmVnaXN0ZXIoZWRpdG9yLCBkYXRhYmFzZSk7XG4gICAgQnV0dG9ucy5yZWdpc3RlcihlZGl0b3IpO1xuICAgIEF1dG9jb21wbGV0aW9uLmluaXQoZWRpdG9yLCBkYXRhYmFzZSk7XG4gICAgRmlsdGVycy5zZXR1cChlZGl0b3IpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGdldEFsbEVtb2ppczogKCkgPT4gZGF0YWJhc2Uud2FpdEZvckxvYWQoKS50aGVuKCgpID0+IGRhdGFiYXNlLmxpc3RBbGwoKSlcbiAgICB9O1xuICB9KTtcbn07XG4iLCJpbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuXG5pbXBvcnQgdHlwZSB7IEVtb2ppRGF0YWJhc2UgfSBmcm9tICcuLi9jb3JlL0Vtb2ppRGF0YWJhc2UnO1xuaW1wb3J0ICogYXMgRGlhbG9nIGZyb20gJy4uL3VpL0RpYWxvZyc7XG5cbmNvbnN0IHJlZ2lzdGVyID0gKGVkaXRvcjogRWRpdG9yLCBkYXRhYmFzZTogRW1vamlEYXRhYmFzZSk6IHZvaWQgPT4ge1xuICBlZGl0b3IuYWRkQ29tbWFuZCgnbWNlRW1vdGljb25zJywgKCkgPT4gRGlhbG9nLm9wZW4oZWRpdG9yLCBkYXRhYmFzZSkpO1xufTtcblxuZXhwb3J0IHtcbiAgcmVnaXN0ZXJcbn07XG4iLCJpbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuaW1wb3J0IHR5cGUgeyBFZGl0b3JPcHRpb25zIH0gZnJvbSAndGlueW1jZS9jb3JlL2FwaS9PcHRpb25UeXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlckVtb2ppRW50cnkge1xuICByZWFkb25seSBrZXl3b3Jkcz86IHN0cmluZ1tdO1xuICByZWFkb25seSBjaGFyOiBzdHJpbmc7XG4gIHJlYWRvbmx5IGNhdGVnb3J5Pzogc3RyaW5nO1xufVxuXG5jb25zdCBERUZBVUxUX0lEID0gJ3RpbnltY2UucGx1Z2lucy5lbW90aWNvbnMnO1xuXG5jb25zdCBvcHRpb246IHtcbiAgPEsgZXh0ZW5kcyBrZXlvZiBFZGl0b3JPcHRpb25zPihuYW1lOiBLKTogKGVkaXRvcjogRWRpdG9yKSA9PiBFZGl0b3JPcHRpb25zW0tdO1xuICA8VD4obmFtZTogc3RyaW5nKTogKGVkaXRvcjogRWRpdG9yKSA9PiBUO1xufSA9IChuYW1lOiBzdHJpbmcpID0+IChlZGl0b3I6IEVkaXRvcikgPT5cbiAgZWRpdG9yLm9wdGlvbnMuZ2V0KG5hbWUpO1xuXG5jb25zdCByZWdpc3RlciA9IChlZGl0b3I6IEVkaXRvciwgcGx1Z2luVXJsOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgY29uc3QgcmVnaXN0ZXJPcHRpb24gPSBlZGl0b3Iub3B0aW9ucy5yZWdpc3RlcjtcblxuICByZWdpc3Rlck9wdGlvbignZW1vdGljb25zX2RhdGFiYXNlJywge1xuICAgIHByb2Nlc3NvcjogJ3N0cmluZycsXG4gICAgZGVmYXVsdDogJ2Vtb2ppcydcbiAgfSk7XG5cbiAgcmVnaXN0ZXJPcHRpb24oJ2Vtb3RpY29uc19kYXRhYmFzZV91cmwnLCB7XG4gICAgcHJvY2Vzc29yOiAnc3RyaW5nJyxcbiAgICBkZWZhdWx0OiBgJHtwbHVnaW5Vcmx9L2pzLyR7Z2V0RW1vamlEYXRhYmFzZShlZGl0b3IpfSR7ZWRpdG9yLnN1ZmZpeH0uanNgXG4gIH0pO1xuXG4gIHJlZ2lzdGVyT3B0aW9uKCdlbW90aWNvbnNfZGF0YWJhc2VfaWQnLCB7XG4gICAgcHJvY2Vzc29yOiAnc3RyaW5nJyxcbiAgICBkZWZhdWx0OiBERUZBVUxUX0lEXG4gIH0pO1xuXG4gIHJlZ2lzdGVyT3B0aW9uKCdlbW90aWNvbnNfYXBwZW5kJywge1xuICAgIHByb2Nlc3NvcjogJ29iamVjdCcsXG4gICAgZGVmYXVsdDoge31cbiAgfSk7XG5cbiAgcmVnaXN0ZXJPcHRpb24oJ2Vtb3RpY29uc19pbWFnZXNfdXJsJywge1xuICAgIHByb2Nlc3NvcjogJ3N0cmluZycsXG4gICAgZGVmYXVsdDogJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3R3ZW1vamkvMTUuMS4wLzcyeDcyLydcbiAgfSk7XG59O1xuXG5jb25zdCBnZXRFbW9qaURhdGFiYXNlID0gb3B0aW9uPHN0cmluZz4oJ2Vtb3RpY29uc19kYXRhYmFzZScpO1xuY29uc3QgZ2V0RW1vamlEYXRhYmFzZVVybCA9IG9wdGlvbjxzdHJpbmc+KCdlbW90aWNvbnNfZGF0YWJhc2VfdXJsJyk7XG5jb25zdCBnZXRFbW9qaURhdGFiYXNlSWQgPSBvcHRpb248c3RyaW5nPignZW1vdGljb25zX2RhdGFiYXNlX2lkJyk7XG5jb25zdCBnZXRBcHBlbmRlZEVtb2ppID0gb3B0aW9uPFJlY29yZDxzdHJpbmcsIFVzZXJFbW9qaUVudHJ5Pj4oJ2Vtb3RpY29uc19hcHBlbmQnKTtcbmNvbnN0IGdldEVtb2ppSW1hZ2VVcmwgPSBvcHRpb24oJ2Vtb3RpY29uc19pbWFnZXNfdXJsJyk7XG5cbmV4cG9ydCB7XG4gIHJlZ2lzdGVyLFxuICBnZXRFbW9qaURhdGFiYXNlLFxuICBnZXRFbW9qaURhdGFiYXNlVXJsLFxuICBnZXRFbW9qaURhdGFiYXNlSWQsXG4gIGdldEFwcGVuZGVkRW1vamksXG4gIGdldEVtb2ppSW1hZ2VVcmxcbn07XG4iLCJpbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuXG5jb25zdCBpbnNlcnRFbW90aWNvbiA9IChlZGl0b3I6IEVkaXRvciwgY2g6IHN0cmluZyk6IHZvaWQgPT4ge1xuICBlZGl0b3IuaW5zZXJ0Q29udGVudChjaCk7XG59O1xuXG5leHBvcnQge1xuICBpbnNlcnRFbW90aWNvblxufTtcbiIsImltcG9ydCB7IE1lcmdlciwgT2JqLCBPcHRpb25hbCwgU2luZ2xldG9uLCBTdHJpbmdzIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0IHR5cGUgRWRpdG9yIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvRWRpdG9yJztcbmltcG9ydCBSZXNvdXJjZSBmcm9tICd0aW55bWNlL2NvcmUvYXBpL1Jlc291cmNlJztcblxuaW1wb3J0ICogYXMgT3B0aW9ucyBmcm9tICcuLi9hcGkvT3B0aW9ucyc7XG5cbmNvbnN0IEFMTF9DQVRFR09SWSA9ICdBbGwnO1xuXG5pbnRlcmZhY2UgUmF3RW1vamlFbnRyeSB7XG4gIHJlYWRvbmx5IGtleXdvcmRzOiBzdHJpbmdbXTtcbiAgcmVhZG9ubHkgY2hhcjogc3RyaW5nO1xuICByZWFkb25seSBjYXRlZ29yeTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVtb2ppRW50cnkgZXh0ZW5kcyBSYXdFbW9qaUVudHJ5IHtcbiAgcmVhZG9ubHkgdGl0bGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFbW9qaURhdGFiYXNlIHtcbiAgcmVhZG9ubHkgbGlzdENhdGVnb3J5OiAoY2F0ZWdvcnk6IHN0cmluZykgPT4gRW1vamlFbnRyeVtdO1xuICByZWFkb25seSBoYXNMb2FkZWQ6ICgpID0+IGJvb2xlYW47XG4gIHJlYWRvbmx5IHdhaXRGb3JMb2FkOiAoKSA9PiBQcm9taXNlPGJvb2xlYW4+O1xuICByZWFkb25seSBsaXN0QWxsOiAoKSA9PiBFbW9qaUVudHJ5W107XG4gIHJlYWRvbmx5IGxpc3RDYXRlZ29yaWVzOiAoKSA9PiBzdHJpbmdbXTtcbn1cblxuY29uc3QgY2F0ZWdvcnlOYW1lTWFwID0ge1xuICBzeW1ib2xzOiAnU3ltYm9scycsXG4gIHBlb3BsZTogJ1Blb3BsZScsXG4gIGFuaW1hbHNfYW5kX25hdHVyZTogJ0FuaW1hbHMgYW5kIE5hdHVyZScsXG4gIGZvb2RfYW5kX2RyaW5rOiAnRm9vZCBhbmQgRHJpbmsnLFxuICBhY3Rpdml0eTogJ0FjdGl2aXR5JyxcbiAgdHJhdmVsX2FuZF9wbGFjZXM6ICdUcmF2ZWwgYW5kIFBsYWNlcycsXG4gIG9iamVjdHM6ICdPYmplY3RzJyxcbiAgZmxhZ3M6ICdGbGFncycsXG4gIHVzZXI6ICdVc2VyIERlZmluZWQnXG59O1xuXG5jb25zdCB0cmFuc2xhdGVDYXRlZ29yeSA9IChjYXRlZ29yaWVzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+LCBuYW1lOiBzdHJpbmcpOiBzdHJpbmcgPT5cbiAgT2JqLmhhcyhjYXRlZ29yaWVzLCBuYW1lKSA/IGNhdGVnb3JpZXNbbmFtZV0gOiBuYW1lO1xuXG5jb25zdCBnZXRVc2VyRGVmaW5lZEVtb2ppID0gKGVkaXRvcjogRWRpdG9yKTogUmVjb3JkPHN0cmluZywgUmF3RW1vamlFbnRyeT4gPT4ge1xuICBjb25zdCB1c2VyRGVmaW5lZEVtb3RpY29ucyA9IE9wdGlvbnMuZ2V0QXBwZW5kZWRFbW9qaShlZGl0b3IpO1xuICByZXR1cm4gT2JqLm1hcCh1c2VyRGVmaW5lZEVtb3RpY29ucywgKHZhbHVlKSA9PlxuICAgIC8vIFNldCBzb21lIHNhbmUgZGVmYXVsdHMgZm9yIHRoZSBjdXN0b20gZW1vamkgZW50cnlcbiAgICAoeyBrZXl3b3JkczogW10sIGNhdGVnb3J5OiAndXNlcicsIC4uLnZhbHVlIH0pXG4gICk7XG59O1xuXG4vLyBUT0RPOiBDb25zaWRlciBob3cgdG8gc2hhcmUgdGhpcyBsb2FkaW5nIGFjcm9zcyBkaWZmZXJlbnQgZWRpdG9yc1xuY29uc3QgaW5pdERhdGFiYXNlID0gKGVkaXRvcjogRWRpdG9yLCBkYXRhYmFzZVVybDogc3RyaW5nLCBkYXRhYmFzZUlkOiBzdHJpbmcpOiBFbW9qaURhdGFiYXNlID0+IHtcbiAgY29uc3QgY2F0ZWdvcmllcyA9IFNpbmdsZXRvbi52YWx1ZTxSZWNvcmQ8c3RyaW5nLCBFbW9qaUVudHJ5W10+PigpO1xuICBjb25zdCBhbGwgPSBTaW5nbGV0b24udmFsdWU8RW1vamlFbnRyeVtdPigpO1xuXG4gIGNvbnN0IGVtb2ppSW1hZ2VzVXJsID0gT3B0aW9ucy5nZXRFbW9qaUltYWdlVXJsKGVkaXRvcik7XG5cbiAgY29uc3QgZ2V0RW1vamkgPSAobGliOiBSYXdFbW9qaUVudHJ5KSA9PiB7XG4gICAgLy8gTm90ZTogVGhpcyBpcyBhIGxpdHRsZSBoYWNreSwgYnV0IHRoZSBkYXRhYmFzZSBkb2Vzbid0IHByb3ZpZGUgYSB3YXkgZm9yIHVzIHRvIHRlbGwgd2hhdCBzb3J0IG9mIGRhdGFiYXNlIGlzIGJlaW5nIHVzZWRcbiAgICBpZiAoU3RyaW5ncy5zdGFydHNXaXRoKGxpYi5jaGFyLCAnPGltZycpKSB7XG4gICAgICByZXR1cm4gbGliLmNoYXIucmVwbGFjZSgvc3JjPVwiKFteXCJdKylcIi8sIChtYXRjaCwgdXJsKSA9PiBgc3JjPVwiJHtlbW9qaUltYWdlc1VybH0ke3VybH1cImApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbGliLmNoYXI7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHByb2Nlc3NFbW9qaXMgPSAoZW1vamlzOiBSZWNvcmQ8c3RyaW5nLCBSYXdFbW9qaUVudHJ5PikgPT4ge1xuICAgIGNvbnN0IGNhdHM6IFJlY29yZDxzdHJpbmcsIEVtb2ppRW50cnlbXT4gPSB7fTtcbiAgICBjb25zdCBldmVyeXRoaW5nOiBFbW9qaUVudHJ5W10gPSBbXTtcblxuICAgIE9iai5lYWNoKGVtb2ppcywgKGxpYjogUmF3RW1vamlFbnRyeSwgdGl0bGU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZW50cnk6IEVtb2ppRW50cnkgPSB7XG4gICAgICAgIC8vIE9taXR0aW5nIGZpdHpwYXRyaWNrX3NjYWxlXG4gICAgICAgIHRpdGxlLFxuICAgICAgICBrZXl3b3JkczogbGliLmtleXdvcmRzLFxuICAgICAgICBjaGFyOiBnZXRFbW9qaShsaWIpLFxuICAgICAgICBjYXRlZ29yeTogdHJhbnNsYXRlQ2F0ZWdvcnkoY2F0ZWdvcnlOYW1lTWFwLCBsaWIuY2F0ZWdvcnkpXG4gICAgICB9O1xuICAgICAgY29uc3QgY3VycmVudCA9IGNhdHNbZW50cnkuY2F0ZWdvcnldICE9PSB1bmRlZmluZWQgPyBjYXRzW2VudHJ5LmNhdGVnb3J5XSA6IFtdO1xuICAgICAgY2F0c1tlbnRyeS5jYXRlZ29yeV0gPSBjdXJyZW50LmNvbmNhdChbIGVudHJ5IF0pO1xuICAgICAgZXZlcnl0aGluZy5wdXNoKGVudHJ5KTtcbiAgICB9KTtcblxuICAgIGNhdGVnb3JpZXMuc2V0KGNhdHMpO1xuICAgIGFsbC5zZXQoZXZlcnl0aGluZyk7XG4gIH07XG5cbiAgZWRpdG9yLm9uKCdpbml0JywgKCkgPT4ge1xuICAgIFJlc291cmNlLmxvYWQoZGF0YWJhc2VJZCwgZGF0YWJhc2VVcmwpLnRoZW4oKGVtb2ppcykgPT4ge1xuICAgICAgY29uc3QgdXNlckVtb2ppcyA9IGdldFVzZXJEZWZpbmVkRW1vamkoZWRpdG9yKTtcbiAgICAgIHByb2Nlc3NFbW9qaXMoTWVyZ2VyLm1lcmdlKGVtb2ppcywgdXNlckVtb2ppcykpO1xuICAgIH0sIChlcnIpID0+IHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLmxvZyhgRmFpbGVkIHRvIGxvYWQgZW1vamlzOiAke2Vycn1gKTtcbiAgICAgIGNhdGVnb3JpZXMuc2V0KHt9KTtcbiAgICAgIGFsbC5zZXQoW10pO1xuICAgIH0pO1xuICB9KTtcblxuICBjb25zdCBsaXN0Q2F0ZWdvcnkgPSAoY2F0ZWdvcnk6IHN0cmluZyk6IEVtb2ppRW50cnlbXSA9PiB7XG4gICAgaWYgKGNhdGVnb3J5ID09PSBBTExfQ0FURUdPUlkpIHtcbiAgICAgIHJldHVybiBsaXN0QWxsKCk7XG4gICAgfVxuICAgIHJldHVybiBjYXRlZ29yaWVzLmdldCgpLmJpbmQoKGNhdHMpID0+IE9wdGlvbmFsLmZyb20oY2F0c1tjYXRlZ29yeV0pKS5nZXRPcihbXSk7XG4gIH07XG5cbiAgY29uc3QgbGlzdEFsbCA9ICgpOiBFbW9qaUVudHJ5W10gPT4gYWxsLmdldCgpLmdldE9yKFtdKTtcblxuICBjb25zdCBsaXN0Q2F0ZWdvcmllcyA9ICgpOiBzdHJpbmdbXSA9PlxuICAgIC8vIFRPRE86IENhdGVnb3J5IGtleSBvcmRlciBzaG91bGQgYmUgYWRqdXN0ZWQgdG8gbWF0Y2ggdGhlIHN0YW5kYXJkXG4gICAgWyBBTExfQ0FURUdPUlkgXS5jb25jYXQoT2JqLmtleXMoY2F0ZWdvcmllcy5nZXQoKS5nZXRPcih7fSkpKTtcblxuICBjb25zdCB3YWl0Rm9yTG9hZCA9ICgpOiBQcm9taXNlPGJvb2xlYW4+ID0+IHtcbiAgICBpZiAoaGFzTG9hZGVkKCkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGxldCBudW1SZXRyaWVzID0gMTU7XG4gICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgIGlmIChoYXNMb2FkZWQoKSkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBudW1SZXRyaWVzLS07XG4gICAgICAgICAgICBpZiAobnVtUmV0cmllcyA8IDApIHtcbiAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvdWxkIG5vdCBsb2FkIGVtb2ppcyBmcm9tIHVybDogJyArIGRhdGFiYXNlVXJsKTtcbiAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgIHJlamVjdChmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCAxMDApO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhc0xvYWRlZCA9ICgpOiBib29sZWFuID0+IGNhdGVnb3JpZXMuaXNTZXQoKSAmJiBhbGwuaXNTZXQoKTtcblxuICByZXR1cm4ge1xuICAgIGxpc3RDYXRlZ29yaWVzLFxuICAgIGhhc0xvYWRlZCxcbiAgICB3YWl0Rm9yTG9hZCxcbiAgICBsaXN0QWxsLFxuICAgIGxpc3RDYXRlZ29yeVxuICB9O1xufTtcblxuLy8gTG9hZCB0aGUgc2NyaXB0LlxuXG5leHBvcnQgeyBBTExfQ0FURUdPUlksIGluaXREYXRhYmFzZSB9O1xuIiwiaW1wb3J0IHsgQXJyIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0IHR5cGUgRWRpdG9yIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvRWRpdG9yJztcblxuZXhwb3J0IGNvbnN0IHNldHVwID0gKGVkaXRvcjogRWRpdG9yKTogdm9pZCA9PiB7XG4gIGVkaXRvci5vbignUHJlSW5pdCcsICgpID0+IHtcbiAgICBlZGl0b3IucGFyc2VyLmFkZEF0dHJpYnV0ZUZpbHRlcignZGF0YS1lbW90aWNvbicsIChub2RlcykgPT4ge1xuICAgICAgQXJyLmVhY2gobm9kZXMsIChub2RlKSA9PiB7XG4gICAgICAgIG5vZGUuYXR0cignZGF0YS1tY2UtcmVzaXplJywgJ2ZhbHNlJyk7XG4gICAgICAgIG5vZGUuYXR0cignZGF0YS1tY2UtcGxhY2Vob2xkZXInLCAnMScpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufTtcbiIsImltcG9ydCB7IEFyciwgRnVuLCB0eXBlIE9wdGlvbmFsLCBTdHJpbmdzIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0IHR5cGUgeyBFbW9qaUVudHJ5IH0gZnJvbSAnLi9FbW9qaURhdGFiYXNlJztcblxuY29uc3QgZW1vamlNYXRjaGVzID0gKGVtb2ppOiBFbW9qaUVudHJ5LCBsb3dlckNhc2VQYXR0ZXJuOiBzdHJpbmcpOiBib29sZWFuID0+XG4gIFN0cmluZ3MuY29udGFpbnMoZW1vamkudGl0bGUudG9Mb3dlckNhc2UoKSwgbG93ZXJDYXNlUGF0dGVybikgfHxcbiAgQXJyLmV4aXN0cyhlbW9qaS5rZXl3b3JkcywgKGspID0+IFN0cmluZ3MuY29udGFpbnMoay50b0xvd2VyQ2FzZSgpLCBsb3dlckNhc2VQYXR0ZXJuKSk7XG5cbmNvbnN0IGVtb2ppc0Zyb20gPSAobGlzdDogRW1vamlFbnRyeVtdLCBwYXR0ZXJuOiBzdHJpbmcsIG1heFJlc3VsdHM6IE9wdGlvbmFsPG51bWJlcj4pOiBBcnJheTx7IHZhbHVlOiBzdHJpbmc7IGljb246IHN0cmluZzsgdGV4dDogc3RyaW5nIH0+ID0+IHtcbiAgY29uc3QgbWF0Y2hlcyA9IFtdO1xuICBjb25zdCBsb3dlckNhc2VQYXR0ZXJuID0gcGF0dGVybi50b0xvd2VyQ2FzZSgpO1xuICBjb25zdCByZWFjaGVkTGltaXQgPSBtYXhSZXN1bHRzLmZvbGQoKCkgPT4gRnVuLm5ldmVyLCAobWF4KSA9PiAoc2l6ZSkgPT4gc2l6ZSA+PSBtYXgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAvLyBUT0RPOiBtb3JlIGludGVsbGlnZW50IHNlYXJjaCBieSBzaG93aW5nIHRpdGxlIG1hdGNoZXMgYXQgdGhlIHRvcCwga2V5d29yZCBtYXRjaGVzIGFmdGVyIHRoYXQgKHVzZSB0d28gYXJyYXlzIGFuZCBjb25jYXQgYXQgdGhlIGVuZClcbiAgICBpZiAocGF0dGVybi5sZW5ndGggPT09IDAgfHwgZW1vamlNYXRjaGVzKGxpc3RbaV0sIGxvd2VyQ2FzZVBhdHRlcm4pKSB7XG4gICAgICBtYXRjaGVzLnB1c2goe1xuICAgICAgICB2YWx1ZTogbGlzdFtpXS5jaGFyLFxuICAgICAgICB0ZXh0OiBsaXN0W2ldLnRpdGxlLFxuICAgICAgICBpY29uOiBsaXN0W2ldLmNoYXJcbiAgICAgIH0pO1xuICAgICAgaWYgKHJlYWNoZWRMaW1pdChtYXRjaGVzLmxlbmd0aCkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBtYXRjaGVzO1xufTtcblxuZXhwb3J0IHtcbiAgZW1vamlzRnJvbVxufTtcbiIsImltcG9ydCB7IE9wdGlvbmFsIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0IHR5cGUgRWRpdG9yIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvRWRpdG9yJztcblxuaW1wb3J0IHR5cGUgeyBFbW9qaURhdGFiYXNlIH0gZnJvbSAnLi4vY29yZS9FbW9qaURhdGFiYXNlJztcbmltcG9ydCB7IGVtb2ppc0Zyb20gfSBmcm9tICcuLi9jb3JlL0xvb2t1cCc7XG5cbmNvbnN0IGluaXQgPSAoZWRpdG9yOiBFZGl0b3IsIGRhdGFiYXNlOiBFbW9qaURhdGFiYXNlKTogdm9pZCA9PiB7XG4gIGVkaXRvci51aS5yZWdpc3RyeS5hZGRBdXRvY29tcGxldGVyKCdlbW90aWNvbnMnLCB7XG4gICAgdHJpZ2dlcjogJzonLFxuICAgIGNvbHVtbnM6ICdhdXRvJyxcbiAgICBtaW5DaGFyczogMixcbiAgICBmZXRjaDogKHBhdHRlcm4sIG1heFJlc3VsdHMpID0+IGRhdGFiYXNlLndhaXRGb3JMb2FkKCkudGhlbigoKSA9PiB7XG4gICAgICBjb25zdCBjYW5kaWRhdGVzID0gZGF0YWJhc2UubGlzdEFsbCgpO1xuICAgICAgcmV0dXJuIGVtb2ppc0Zyb20oY2FuZGlkYXRlcywgcGF0dGVybiwgT3B0aW9uYWwuc29tZShtYXhSZXN1bHRzKSk7XG4gICAgfSksXG4gICAgb25BY3Rpb246IChhdXRvY29tcGxldGVBcGksIHJuZywgdmFsdWUpID0+IHtcbiAgICAgIGVkaXRvci5zZWxlY3Rpb24uc2V0Um5nKHJuZyk7XG4gICAgICBlZGl0b3IuaW5zZXJ0Q29udGVudCh2YWx1ZSk7XG4gICAgICBhdXRvY29tcGxldGVBcGkuaGlkZSgpO1xuICAgIH1cbiAgfSk7XG5cbn07XG5cbmV4cG9ydCB7XG4gIGluaXRcbn07XG4iLCJpbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuaW1wb3J0IHR5cGUgeyBNZW51LCBUb29sYmFyIH0gZnJvbSAndGlueW1jZS9jb3JlL2FwaS91aS9VaSc7XG5cbmNvbnN0IG9uU2V0dXBFZGl0YWJsZSA9IChlZGl0b3I6IEVkaXRvcikgPT4gKGFwaTogVG9vbGJhci5Ub29sYmFyQnV0dG9uSW5zdGFuY2VBcGkgfCBNZW51Lk1lbnVJdGVtSW5zdGFuY2VBcGkpOiBWb2lkRnVuY3Rpb24gPT4ge1xuICBjb25zdCBub2RlQ2hhbmdlZCA9ICgpID0+IHtcbiAgICBhcGkuc2V0RW5hYmxlZChlZGl0b3Iuc2VsZWN0aW9uLmlzRWRpdGFibGUoKSk7XG4gIH07XG5cbiAgZWRpdG9yLm9uKCdOb2RlQ2hhbmdlJywgbm9kZUNoYW5nZWQpO1xuICBub2RlQ2hhbmdlZCgpO1xuXG4gIHJldHVybiAoKSA9PiB7XG4gICAgZWRpdG9yLm9mZignTm9kZUNoYW5nZScsIG5vZGVDaGFuZ2VkKTtcbiAgfTtcbn07XG5cbmNvbnN0IHJlZ2lzdGVyID0gKGVkaXRvcjogRWRpdG9yKTogdm9pZCA9PiB7XG4gIGNvbnN0IG9uQWN0aW9uID0gKCkgPT4gZWRpdG9yLmV4ZWNDb21tYW5kKCdtY2VFbW90aWNvbnMnKTtcblxuICBlZGl0b3IudWkucmVnaXN0cnkuYWRkQnV0dG9uKCdlbW90aWNvbnMnLCB7XG4gICAgdG9vbHRpcDogJ0Vtb2ppcycsXG4gICAgaWNvbjogJ2Vtb2ppJyxcbiAgICBvbkFjdGlvbixcbiAgICBvblNldHVwOiBvblNldHVwRWRpdGFibGUoZWRpdG9yKVxuICB9KTtcblxuICBlZGl0b3IudWkucmVnaXN0cnkuYWRkTWVudUl0ZW0oJ2Vtb3RpY29ucycsIHtcbiAgICB0ZXh0OiAnRW1vamlzLi4uJyxcbiAgICBpY29uOiAnZW1vamknLFxuICAgIG9uQWN0aW9uLFxuICAgIG9uU2V0dXA6IG9uU2V0dXBFZGl0YWJsZShlZGl0b3IpXG4gIH0pO1xufTtcblxuZXhwb3J0IHtcbiAgcmVnaXN0ZXJcbn07XG4iLCJpbXBvcnQgeyBBcnIsIENlbGwsIE9wdGlvbmFsLCBUaHJvdHRsZXIgfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5pbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuaW1wb3J0IHR5cGUgeyBEaWFsb2cgfSBmcm9tICd0aW55bWNlL2NvcmUvYXBpL3VpL1VpJztcblxuaW1wb3J0IHsgaW5zZXJ0RW1vdGljb24gfSBmcm9tICcuLi9jb3JlL0FjdGlvbnMnO1xuaW1wb3J0IHsgQUxMX0NBVEVHT1JZLCB0eXBlIEVtb2ppRGF0YWJhc2UgfSBmcm9tICcuLi9jb3JlL0Vtb2ppRGF0YWJhc2UnO1xuaW1wb3J0IHsgZW1vamlzRnJvbSB9IGZyb20gJy4uL2NvcmUvTG9va3VwJztcblxuaW50ZXJmYWNlIERpYWxvZ0RhdGEge1xuICByZWFkb25seSBwYXR0ZXJuOiBzdHJpbmc7XG4gIHJlYWRvbmx5IHJlc3VsdHM6IEFycmF5PHsgdmFsdWU6IHN0cmluZzsgaWNvbjogc3RyaW5nOyB0ZXh0OiBzdHJpbmcgfT47XG59XG5cbmNvbnN0IHBhdHRlcm5OYW1lID0gJ3BhdHRlcm4nO1xuXG5jb25zdCBvcGVuID0gKGVkaXRvcjogRWRpdG9yLCBkYXRhYmFzZTogRW1vamlEYXRhYmFzZSk6IHZvaWQgPT4ge1xuXG4gIGNvbnN0IGluaXRpYWxTdGF0ZTogRGlhbG9nRGF0YSA9IHtcbiAgICBwYXR0ZXJuOiAnJyxcbiAgICByZXN1bHRzOiBlbW9qaXNGcm9tKGRhdGFiYXNlLmxpc3RBbGwoKSwgJycsIE9wdGlvbmFsLnNvbWUoMzAwKSlcbiAgfTtcblxuICBjb25zdCBjdXJyZW50VGFiID0gQ2VsbChBTExfQ0FURUdPUlkpO1xuXG4gIGNvbnN0IHNjYW4gPSAoZGlhbG9nQXBpOiBEaWFsb2cuRGlhbG9nSW5zdGFuY2VBcGk8RGlhbG9nRGF0YT4pID0+IHtcbiAgICBjb25zdCBkaWFsb2dEYXRhID0gZGlhbG9nQXBpLmdldERhdGEoKTtcbiAgICBjb25zdCBjYXRlZ29yeSA9IGN1cnJlbnRUYWIuZ2V0KCk7XG4gICAgY29uc3QgY2FuZGlkYXRlcyA9IGRhdGFiYXNlLmxpc3RDYXRlZ29yeShjYXRlZ29yeSk7XG4gICAgY29uc3QgcmVzdWx0cyA9IGVtb2ppc0Zyb20oY2FuZGlkYXRlcywgZGlhbG9nRGF0YVtwYXR0ZXJuTmFtZV0sIGNhdGVnb3J5ID09PSBBTExfQ0FURUdPUlkgPyBPcHRpb25hbC5zb21lKDMwMCkgOiBPcHRpb25hbC5ub25lKCkpO1xuICAgIGRpYWxvZ0FwaS5zZXREYXRhKHtcbiAgICAgIHJlc3VsdHNcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVGaWx0ZXIgPSBUaHJvdHRsZXIubGFzdCgoZGlhbG9nQXBpKSA9PiB7XG4gICAgc2NhbihkaWFsb2dBcGkpO1xuICB9LCAyMDApO1xuXG4gIGNvbnN0IHNlYXJjaEZpZWxkOiBEaWFsb2cuQm9keUNvbXBvbmVudFNwZWMgPSB7XG4gICAgbGFiZWw6ICdTZWFyY2gnLFxuICAgIHR5cGU6ICdpbnB1dCcsXG4gICAgbmFtZTogcGF0dGVybk5hbWVcbiAgfTtcblxuICBjb25zdCByZXN1bHRzRmllbGQ6IERpYWxvZy5Cb2R5Q29tcG9uZW50U3BlYyA9IHtcbiAgICB0eXBlOiAnY29sbGVjdGlvbicsXG4gICAgbmFtZTogJ3Jlc3VsdHMnXG4gICAgLy8gVE9ETyBUSU5ZLTMyMjkgaW1wbGVtZW50IGNvbGxlY3Rpb24gY29sdW1ucyBwcm9wZXJseVxuICAgIC8vIGNvbHVtbnM6ICdhdXRvJ1xuICB9O1xuXG4gIGNvbnN0IGdldEluaXRpYWxTdGF0ZSA9ICgpOiBEaWFsb2cuRGlhbG9nU3BlYzxEaWFsb2dEYXRhPiA9PiB7XG4gICAgY29uc3QgYm9keTogRGlhbG9nLlRhYlBhbmVsU3BlYyA9IHtcbiAgICAgIHR5cGU6ICd0YWJwYW5lbCcsXG4gICAgICAvLyBBbGwgdGFicyBoYXZlIHRoZSBzYW1lIGZpZWxkcy5cbiAgICAgIHRhYnM6IEFyci5tYXAoZGF0YWJhc2UubGlzdENhdGVnb3JpZXMoKSwgKGNhdCkgPT4gKHtcbiAgICAgICAgdGl0bGU6IGNhdCxcbiAgICAgICAgbmFtZTogY2F0LFxuICAgICAgICBpdGVtczogWyBzZWFyY2hGaWVsZCwgcmVzdWx0c0ZpZWxkIF1cbiAgICAgIH0pKVxuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiAnRW1vamlzJyxcbiAgICAgIHNpemU6ICdub3JtYWwnLFxuICAgICAgYm9keSxcbiAgICAgIGluaXRpYWxEYXRhOiBpbml0aWFsU3RhdGUsXG4gICAgICBvblRhYkNoYW5nZTogKGRpYWxvZ0FwaSwgZGV0YWlscykgPT4ge1xuICAgICAgICBjdXJyZW50VGFiLnNldChkZXRhaWxzLm5ld1RhYk5hbWUpO1xuICAgICAgICB1cGRhdGVGaWx0ZXIudGhyb3R0bGUoZGlhbG9nQXBpKTtcbiAgICAgIH0sXG4gICAgICBvbkNoYW5nZTogdXBkYXRlRmlsdGVyLnRocm90dGxlLFxuICAgICAgb25BY3Rpb246IChkaWFsb2dBcGksIGFjdGlvbkRhdGEpID0+IHtcbiAgICAgICAgaWYgKGFjdGlvbkRhdGEubmFtZSA9PT0gJ3Jlc3VsdHMnKSB7XG4gICAgICAgICAgaW5zZXJ0RW1vdGljb24oZWRpdG9yLCBhY3Rpb25EYXRhLnZhbHVlKTtcbiAgICAgICAgICBkaWFsb2dBcGkuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICdjYW5jZWwnLFxuICAgICAgICAgIHRleHQ6ICdDbG9zZScsXG4gICAgICAgICAgcHJpbWFyeTogdHJ1ZVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBkaWFsb2dBcGkgPSBlZGl0b3Iud2luZG93TWFuYWdlci5vcGVuKGdldEluaXRpYWxTdGF0ZSgpKTtcblxuICBkaWFsb2dBcGkuZm9jdXMocGF0dGVybk5hbWUpO1xuXG4gIGlmICghZGF0YWJhc2UuaGFzTG9hZGVkKCkpIHtcbiAgICBkaWFsb2dBcGkuYmxvY2soJ0xvYWRpbmcgZW1vamlzLi4uJyk7XG4gICAgZGF0YWJhc2Uud2FpdEZvckxvYWQoKS50aGVuKCgpID0+IHtcbiAgICAgIGRpYWxvZ0FwaS5yZWRpYWwoZ2V0SW5pdGlhbFN0YXRlKCkpO1xuICAgICAgdXBkYXRlRmlsdGVyLnRocm90dGxlKGRpYWxvZ0FwaSk7XG4gICAgICBkaWFsb2dBcGkuZm9jdXMocGF0dGVybk5hbWUpO1xuICAgICAgZGlhbG9nQXBpLnVuYmxvY2soKTtcbiAgICB9KS5jYXRjaCgoX2VycikgPT4ge1xuICAgICAgZGlhbG9nQXBpLnJlZGlhbCh7XG4gICAgICAgIHRpdGxlOiAnRW1vamlzJyxcbiAgICAgICAgYm9keToge1xuICAgICAgICAgIHR5cGU6ICdwYW5lbCcsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdHlwZTogJ2FsZXJ0YmFubmVyJyxcbiAgICAgICAgICAgICAgbGV2ZWw6ICdlcnJvcicsXG4gICAgICAgICAgICAgIGljb246ICd3YXJuaW5nJyxcbiAgICAgICAgICAgICAgdGV4dDogJ0NvdWxkIG5vdCBsb2FkIGVtb2ppcydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnY2FuY2VsJyxcbiAgICAgICAgICAgIHRleHQ6ICdDbG9zZScsXG4gICAgICAgICAgICBwcmltYXJ5OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBpbml0aWFsRGF0YToge1xuICAgICAgICAgIHBhdHRlcm46ICcnLFxuICAgICAgICAgIHJlc3VsdHM6IFtdXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgZGlhbG9nQXBpLmZvY3VzKHBhdHRlcm5OYW1lKTtcbiAgICAgIGRpYWxvZ0FwaS51bmJsb2NrKCk7XG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCB7XG4gIG9wZW5cbn07XG4iLCJpbXBvcnQgKiBhcyBUeXBlIGZyb20gJy4uL2NvcmUvVHlwZSc7XG5pbXBvcnQgKiBhcyBBcnJheVV0aWwgZnJvbSAnLi4vY29yZS9BcnJheVV0aWwnO1xuXG4vKiogQSB3YXkgb2YgY29tcGFyaW5nIHR3byB2YWx1ZXMgb2YgdGhlIHNhbWUgdHlwZSBmb3IgZXF1YWxpdHkuICovXG5leHBvcnQgaW50ZXJmYWNlIEVxPEE+IHtcbiAgZXE6ICh4OiBBLCB5OiBBKSA9PiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgY29udHJhbWFwID0gPEEsIEI+IChlcWE6IEVxPEE+LCBmOiAoYjogQikgPT4gQSk6IEVxPEI+ID0+XG4gIGVxKCh4LCB5KSA9PiBlcWEuZXEoZih4KSwgZih5KSkpO1xuXG5leHBvcnQgY29uc3QgZXEgPSA8QT4gKGY6ICh4OiBBLCB5OiBBKSA9PiBib29sZWFuKTogRXE8QT4gPT5cbiAgKHsgZXE6IGYgfSk7XG5cbmV4cG9ydCBjb25zdCB0cmlwbGVFcTogRXE8YW55PiA9IGVxKCh4LCB5KSA9PiB4ID09PSB5KTtcblxuZXhwb3J0IGNvbnN0IGVxU3RyaW5nOiBFcTxzdHJpbmc+ID0gdHJpcGxlRXE7XG5cbmV4cG9ydCBjb25zdCBlcUJvb2xlYW46IEVxPGJvb2xlYW4+ID0gdHJpcGxlRXE7XG5cbmV4cG9ydCBjb25zdCBlcU51bWJlcjogRXE8bnVtYmVyPiA9IHRyaXBsZUVxO1xuXG5leHBvcnQgY29uc3QgZXFVbmRlZmluZWQ6IEVxPHVuZGVmaW5lZD4gPSB0cmlwbGVFcTtcblxuZXhwb3J0IGNvbnN0IGVxTnVsbDogRXE8bnVsbD4gPSB0cmlwbGVFcTtcblxuZXhwb3J0IGNvbnN0IGVxQXJyYXkgPSA8QT4gKGVxYTogRXE8QT4pOiBFcTxBcnJheUxpa2U8QT4+ID0+IGVxKCh4LCB5KSA9PiB7XG4gIGlmICh4Lmxlbmd0aCAhPT0geS5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgbGVuID0geC5sZW5ndGg7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoIWVxYS5lcSh4W2ldLCB5W2ldKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn0pO1xuXG4vLyBUT0RPOiBNYWtlIGFuIE9yZCB0eXBlY2xhc3NcbmNvbnN0IGVxU29ydGVkQXJyYXkgPSA8QT4oZXFhOiBFcTxBPiwgY29tcGFyZUZuPzogKGE6IEEsIGI6IEEpID0+IG51bWJlcik6IEVxPEFycmF5TGlrZTxBPj4gPT5cbiAgY29udHJhbWFwKGVxQXJyYXkoZXFhKSwgKHhzKSA9PiBBcnJheVV0aWwuc29ydCh4cywgY29tcGFyZUZuKSk7XG5cbmV4cG9ydCBjb25zdCBlcVJlY29yZCA9IDxBPiAoZXFhOiBFcTxBPik6IEVxPFJlY29yZDxzdHJpbmcsIEE+PiA9PiBlcSgoeCwgeSkgPT4ge1xuICBjb25zdCBreCA9IE9iamVjdC5rZXlzKHgpO1xuICBjb25zdCBreSA9IE9iamVjdC5rZXlzKHkpO1xuICBpZiAoIWVxU29ydGVkQXJyYXkoZXFTdHJpbmcpLmVxKGt4LCBreSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgbGVuID0ga3gubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgcSA9IGt4W2ldO1xuICAgIGlmICghZXFhLmVxKHhbcV0sIHlbcV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufSk7XG5cbmV4cG9ydCBjb25zdCBlcUFueTogRXE8YW55PiA9IGVxKCh4LCB5KSA9PiB7XG4gIGlmICh4ID09PSB5KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBjb25zdCB0eCA9IFR5cGUudHlwZU9mKHgpO1xuICBjb25zdCB0eSA9IFR5cGUudHlwZU9mKHkpO1xuICBpZiAodHggIT09IHR5KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKFR5cGUuaXNFcXVhdGFibGVUeXBlKHR4KSkge1xuICAgIHJldHVybiB4ID09PSB5O1xuXG4gIH0gZWxzZSBpZiAodHggPT09ICdhcnJheScpIHtcbiAgICByZXR1cm4gZXFBcnJheShlcUFueSkuZXEoeCwgeSk7XG5cbiAgfSBlbHNlIGlmICh0eCA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gZXFSZWNvcmQoZXFBbnkpLmVxKHgsIHkpO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufSk7XG4iLCJleHBvcnQgY29uc3QgbWFwID0gPEEsIEI+KHhzOiBBcnJheUxpa2U8QT4sIGY6IChhOiBBKSA9PiBCKTogQltdID0+IHtcbiAgY29uc3QgbGVuID0geHMubGVuZ3RoO1xuICBjb25zdCByID0gbmV3IEFycmF5KGxlbik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgcltpXSA9IGYoeCk7XG4gIH1cbiAgcmV0dXJuIHI7XG59O1xuXG4vKiogbWFwIGEgZnVuY3Rpb24gb3ZlciBhbiBhcnJheSwgdGhlbiBtYXAgYW5vdGhlciBmdW5jdGlvbiBvdmVyIGV2ZXJ5IGl0ZW0gZXhjZXB0IHRoZSBsYXN0ICovXG5leHBvcnQgY29uc3QgbWFwRGVsaW1pdCA9IDxBLCBCPiAoeHM6IEFycmF5TGlrZTxBPiwgZjogKGE6IEEpID0+IEIsIGRlbGltaXQ6IChiOiBCKSA9PiBCKTogQltdID0+IHtcbiAgY29uc3QgbGVuID0geHMubGVuZ3RoO1xuICBjb25zdCByID0gbmV3IEFycmF5KGxlbik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuIC0gMTsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIHJbaV0gPSBkZWxpbWl0KGYoeCkpO1xuICB9XG4gIGlmIChsZW4gPiAwKSB7XG4gICAgcltsZW4gLSAxXSA9IChmKHhzW2xlbiAtIDFdKSk7XG4gIH1cblxuICByZXR1cm4gcjtcbn07XG5cbmV4cG9ydCBjb25zdCBzb3J0ID0gPEE+ICh4czogQXJyYXlMaWtlPEE+LCBjb21wYXJlRm4/OiAoYTogQSwgYjogQSkgPT4gbnVtYmVyKTogQVtdID0+IHtcbiAgY29uc3QgY2xvbmU6IEFbXSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHhzKTtcbiAgcmV0dXJuIGNsb25lLnNvcnQoY29tcGFyZUZuKTtcbn07XG4iLCJleHBvcnQgY29uc3QgdHlwZU9mID0gKHg6IGFueSkgPT4ge1xuICBpZiAoeCA9PT0gbnVsbCkge1xuICAgIHJldHVybiAnbnVsbCc7XG4gIH1cbiAgaWYgKHggPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAndW5kZWZpbmVkJztcbiAgfVxuICBjb25zdCB0ID0gdHlwZW9mIHg7XG4gIGlmICh0ID09PSAnb2JqZWN0JyAmJiAoQXJyYXkucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoeCkgfHwgeC5jb25zdHJ1Y3RvciAmJiB4LmNvbnN0cnVjdG9yLm5hbWUgPT09ICdBcnJheScpKSB7XG4gICAgcmV0dXJuICdhcnJheSc7XG4gIH1cbiAgaWYgKHQgPT09ICdvYmplY3QnICYmIChTdHJpbmcucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoeCkgfHwgeC5jb25zdHJ1Y3RvciAmJiB4LmNvbnN0cnVjdG9yLm5hbWUgPT09ICdTdHJpbmcnKSkge1xuICAgIHJldHVybiAnc3RyaW5nJztcbiAgfVxuICByZXR1cm4gdDtcbn07XG5cbmNvbnN0IGlzVHlwZSA9IDxUPih0eXBlOiBzdHJpbmcpID0+ICh2YWx1ZTogYW55KTogdmFsdWUgaXMgVCA9PiB0eXBlT2YodmFsdWUpID09PSB0eXBlO1xuXG5leHBvcnQgY29uc3QgaXNTdHJpbmcgPSBpc1R5cGU8c3RyaW5nPignc3RyaW5nJyk7XG5leHBvcnQgY29uc3QgaXNPYmplY3QgPSBpc1R5cGU8T2JqZWN0Pignb2JqZWN0Jyk7XG5leHBvcnQgY29uc3QgaXNBcnJheSA9IGlzVHlwZTxBcnJheTx1bmtub3duPj4oJ2FycmF5Jyk7XG5leHBvcnQgY29uc3QgaXNOdWxsID0gaXNUeXBlPG51bGw+KCdudWxsJyk7XG5leHBvcnQgY29uc3QgaXNCb29sZWFuID0gaXNUeXBlPGJvb2xlYW4+KCdib29sZWFuJyk7XG5leHBvcnQgY29uc3QgaXNVbmRlZmluZWQgPSBpc1R5cGU8dW5kZWZpbmVkPigndW5kZWZpbmVkJyk7XG5leHBvcnQgY29uc3QgaXNGdW5jdGlvbiA9IGlzVHlwZTxGdW5jdGlvbj4oJ2Z1bmN0aW9uJyk7XG5leHBvcnQgY29uc3QgaXNOdW1iZXIgPSBpc1R5cGU8bnVtYmVyPignbnVtYmVyJyk7XG5cbmV4cG9ydCBjb25zdCBpc0VxdWF0YWJsZVR5cGUgPSAoeDogc3RyaW5nKTogYm9vbGVhbiA9PlxuICBbICd1bmRlZmluZWQnLCAnYm9vbGVhbicsICdudW1iZXInLCAnc3RyaW5nJywgJ2Z1bmN0aW9uJywgJ3htbCcsICdudWxsJyBdLmluZGV4T2YoeCkgIT09IC0xO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuICAgICAgICBpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG4gICAgICAgIH1cbiAgICB9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ2ID0gKCkgPT4gKFwiMS41LjJcIikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ1aWQgPSBcImJ1bmRsZXI9cnNwYWNrQDEuNS4yXCI7XG4iLCJpbXBvcnQgUGx1Z2luIGZyb20gJy4vUGx1Z2luJztcblxuUGx1Z2luKCk7XG5cbi8qKiAqKioqKlxuICogRE8gTk9UIEVYUE9SVCBBTllUSElOR1xuICpcbiAqIElGIFlPVSBETyBST0xMVVAgV0lMTCBMRUFWRSBBIEdMT0JBTCBPTiBUSEUgUEFHRVxuICoqKioqKiovXG4iXSwibmFtZXMiOlsiRXEiLCJGdW4iLCJPcHRpb25hbCIsIlR5cGUiLCJuYXRpdmVTbGljZSIsIkFycmF5IiwibmF0aXZlSW5kZXhPZiIsIm5hdGl2ZVB1c2giLCJyYXdJbmRleE9mIiwidHMiLCJ0IiwiaW5kZXhPZiIsInhzIiwieCIsInIiLCJjb250YWlucyIsImV4aXN0cyIsInByZWQiLCJpIiwibGVuIiwicmFuZ2UiLCJudW0iLCJmIiwiY2h1bmsiLCJhcnJheSIsInNpemUiLCJzIiwibWFwIiwiZWFjaCIsImVhY2hyIiwicGFydGl0aW9uIiwicGFzcyIsImZhaWwiLCJhcnIiLCJmaWx0ZXIiLCJncm91cEJ5Iiwid2FzVHlwZSIsImdyb3VwIiwidHlwZSIsImZvbGRyIiwiYWNjIiwiZm9sZGwiLCJmaW5kVW50aWwiLCJ1bnRpbCIsImZpbmQiLCJmaW5kSW5kZXgiLCJmaW5kTGFzdEluZGV4IiwiZmxhdHRlbiIsIkVycm9yIiwiYmluZCIsImZvcmFsbCIsImVxdWFsIiwiYTEiLCJhMiIsImVxIiwicmV2ZXJzZSIsImRpZmZlcmVuY2UiLCJtYXBUb09iamVjdCIsIlN0cmluZyIsInB1cmUiLCJzb3J0IiwiY29tcGFyYXRvciIsImNvcHkiLCJnZXQiLCJoZWFkIiwibGFzdCIsImZyb20iLCJmaW5kTWFwIiwidW5pcXVlIiwiaXNEdXBsaWNhdGVkIiwiQ2VsbCIsImluaXRpYWwiLCJ2YWx1ZSIsInNldCIsInYiLCJub29wIiwibm9hcmciLCJjb21wb3NlIiwiZmEiLCJmYiIsImFyZ3MiLCJjb21wb3NlMSIsImZiYyIsImZhYiIsImEiLCJjb25zdGFudCIsImlkZW50aXR5IiwidHJpcGxlRXF1YWxzIiwiYiIsImN1cnJ5IiwiZm4iLCJpbml0aWFsQXJncyIsInJlc3RBcmdzIiwiYWxsIiwibm90IiwiZGllIiwibXNnIiwiYXBwbHkiLCJjYWxsIiwibmV2ZXIiLCJhbHdheXMiLCJ3ZWFrZW4iLCJwaXBlIiwiYWIiLCJiYyIsImNkIiwiZGUiLCJlZiIsImZnIiwiZ2giLCJjIiwiZCIsImUiLCJnIiwiT2JqIiwic2hhbGxvdyIsIm9sZCIsIm51IiwiZGVlcCIsImJvdGhPYmplY3RzIiwiZGVlcE1lcmdlIiwiYmFzZU1lcmdlIiwibWVyZ2VyIiwib2JqZWN0cyIsInJldCIsImoiLCJjdXJPYmplY3QiLCJrZXkiLCJtZXJnZSIsImtleXMiLCJPYmplY3QiLCJoYXNPd25Qcm9wZXJ0eSIsIm9iaiIsInByb3BzIiwiayIsInR1cGxlTWFwIiwidHVwbGUiLCJvYmpBY2MiLCJpbnRlcm5hbEZpbHRlciIsIm9uVHJ1ZSIsIm9uRmFsc2UiLCJiaWZpbHRlciIsIm1hcFRvQXJyYXkiLCJuYW1lIiwidmFsdWVzIiwiaGFzIiwiaGFzTm9uTnVsbGFibGVLZXkiLCJ1bmRlZmluZWQiLCJpc0VtcHR5IiwidGFnIiwib25Ob25lIiwib25Tb21lIiwibWFwcGVyIiwiYmluZGVyIiwicHJlZGljYXRlIiwicmVwbGFjZW1lbnQiLCJ0aHVuayIsIm1lc3NhZ2UiLCJ3b3JrZXIiLCJzaW5nbGV0b24iLCJkb1Jldm9rZSIsInN1YmplY3QiLCJyZXZva2UiLCJjbGVhciIsImlzU2V0IiwicmVwZWF0YWJsZSIsImRlbGF5IiwiaW50ZXJ2YWxJZCIsImlkIiwiY2xlYXJJbnRlcnZhbCIsImZ1bmN0aW9uVG9SZXBlYXQiLCJzZXRJbnRlcnZhbCIsImRlc3Ryb3lhYmxlIiwidW5iaW5kYWJsZSIsImFwaSIsInJ1biIsIm9uIiwiU3RyQXBwZW5kIiwiY2hlY2tSYW5nZSIsInN0ciIsInN1YnN0ciIsInN0YXJ0Iiwic3VwcGxhbnQiLCJpc1N0cmluZ09yTnVtYmVyIiwiZnVsbE1hdGNoIiwicmVtb3ZlTGVhZGluZyIsInByZWZpeCIsInN0YXJ0c1dpdGgiLCJyZW1vdmVUcmFpbGluZyIsInN1ZmZpeCIsImVuZHNXaXRoIiwiZW5zdXJlTGVhZGluZyIsImVuc3VyZVRyYWlsaW5nIiwiZW5kIiwiaWR4IiwiY2FwaXRhbGl6ZSIsImJsYW5rIiwidHJpbSIsImxUcmltIiwiclRyaW0iLCJpc05vdEVtcHR5IiwicmVwZWF0IiwiY291bnQiLCJmcm9tQ29kZVBvaW50IiwidG9JbnQiLCJyYWRpeCIsInBhcnNlSW50IiwiaXNOYU4iLCJ0b0Zsb2F0IiwicGFyc2VGbG9hdCIsImFkYXB0YWJsZSIsInJhdGUiLCJ0aW1lciIsImNhbmNlbCIsImNsZWFyVGltZW91dCIsInRocm90dGxlIiwibmV3QXJncyIsInNldFRpbWVvdXQiLCJ0ZW1wQXJncyIsImZpcnN0IiwiZ2V0UHJvdG90eXBlT2YiLCJoYXNQcm90byIsImNvbnN0cnVjdG9yIiwidHlwZU9mIiwibyIsInByb3RvIiwiaXNUeXBlIiwiaXNTaW1wbGVUeXBlIiwiaXMiLCJpc09iamVjdCIsImlzU3RyaW5nIiwiaXNQbGFpbk9iamVjdCIsImlzQXJyYXkiLCJpc051bGwiLCJpc0Jvb2xlYW4iLCJpc1VuZGVmaW5lZCIsImlzTnVsbGFibGUiLCJpc05vbk51bGxhYmxlIiwiaXNGdW5jdGlvbiIsImlzTnVtYmVyIiwiaXNBcnJheU9mIiwiaXNQcm9taXNlTGlrZSIsImFkZFRvU3RhcnQiLCJhZGRUb0VuZCIsInJlbW92ZUZyb21TdGFydCIsIm51bUNoYXJzIiwicmVtb3ZlRnJvbUVuZCIsIlBsdWdpbk1hbmFnZXIiLCJDb21tYW5kcyIsIk9wdGlvbnMiLCJpbml0RGF0YWJhc2UiLCJGaWx0ZXJzIiwiQXV0b2NvbXBsZXRpb24iLCJCdXR0b25zIiwiZWRpdG9yIiwicGx1Z2luVXJsIiwiZGF0YWJhc2VVcmwiLCJkYXRhYmFzZUlkIiwiZGF0YWJhc2UiLCJEaWFsb2ciLCJyZWdpc3RlciIsIkRFRkFVTFRfSUQiLCJvcHRpb24iLCJyZWdpc3Rlck9wdGlvbiIsImdldEVtb2ppRGF0YWJhc2UiLCJnZXRFbW9qaURhdGFiYXNlVXJsIiwiZ2V0RW1vamlEYXRhYmFzZUlkIiwiZ2V0QXBwZW5kZWRFbW9qaSIsImdldEVtb2ppSW1hZ2VVcmwiLCJpbnNlcnRFbW90aWNvbiIsImNoIiwiTWVyZ2VyIiwiU2luZ2xldG9uIiwiU3RyaW5ncyIsIlJlc291cmNlIiwiQUxMX0NBVEVHT1JZIiwiY2F0ZWdvcnlOYW1lTWFwIiwidHJhbnNsYXRlQ2F0ZWdvcnkiLCJjYXRlZ29yaWVzIiwiZ2V0VXNlckRlZmluZWRFbW9qaSIsInVzZXJEZWZpbmVkRW1vdGljb25zIiwiZW1vamlJbWFnZXNVcmwiLCJnZXRFbW9qaSIsImxpYiIsIm1hdGNoIiwidXJsIiwicHJvY2Vzc0Vtb2ppcyIsImVtb2ppcyIsImNhdHMiLCJldmVyeXRoaW5nIiwidGl0bGUiLCJlbnRyeSIsImN1cnJlbnQiLCJ1c2VyRW1vamlzIiwiZXJyIiwiY29uc29sZSIsImxpc3RDYXRlZ29yeSIsImNhdGVnb3J5IiwibGlzdEFsbCIsImxpc3RDYXRlZ29yaWVzIiwid2FpdEZvckxvYWQiLCJoYXNMb2FkZWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIm51bVJldHJpZXMiLCJpbnRlcnZhbCIsIkFyciIsInNldHVwIiwibm9kZXMiLCJub2RlIiwiZW1vamlNYXRjaGVzIiwiZW1vamkiLCJsb3dlckNhc2VQYXR0ZXJuIiwiZW1vamlzRnJvbSIsImxpc3QiLCJwYXR0ZXJuIiwibWF4UmVzdWx0cyIsIm1hdGNoZXMiLCJyZWFjaGVkTGltaXQiLCJtYXgiLCJpbml0IiwiY2FuZGlkYXRlcyIsImF1dG9jb21wbGV0ZUFwaSIsInJuZyIsIm9uU2V0dXBFZGl0YWJsZSIsIm5vZGVDaGFuZ2VkIiwib25BY3Rpb24iLCJUaHJvdHRsZXIiLCJwYXR0ZXJuTmFtZSIsIm9wZW4iLCJpbml0aWFsU3RhdGUiLCJjdXJyZW50VGFiIiwic2NhbiIsImRpYWxvZ0FwaSIsImRpYWxvZ0RhdGEiLCJyZXN1bHRzIiwidXBkYXRlRmlsdGVyIiwic2VhcmNoRmllbGQiLCJyZXN1bHRzRmllbGQiLCJnZXRJbml0aWFsU3RhdGUiLCJib2R5IiwiY2F0IiwiZGV0YWlscyIsImFjdGlvbkRhdGEiLCJfZXJyIiwiUGx1Z2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsNkRBQWUsTUFBTSxFQUFDO0FBQ2Y7Ozs7Ozs7Ozs7Ozs7O0FDSFA7O0FBRUEsNkRBQWUsTUFBTSxFQUFDO0FBQ2Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0g2QjtBQUVQO0FBQ1M7QUFDUDtBQU8vQixNQUFNSSxjQUFjQyxNQUFNLFNBQVMsQ0FBQyxLQUFLO0FBQ3pDLE1BQU1DLGdCQUFnQkQsTUFBTSxTQUFTLENBQUMsT0FBTztBQUM3QyxNQUFNRSxhQUFhRixNQUFNLFNBQVMsQ0FBQyxJQUFJO0FBRXZDLE1BQU1HLGFBQWEsQ0FBS0MsSUFBa0JDLElBQ3hDSixjQUFjLElBQUksQ0FBQ0csSUFBSUM7QUFFbEIsTUFBTUMsVUFBVSxDQUFVQyxJQUFrQkM7SUFDakQsd0ZBQXdGO0lBQ3hGLE1BQU1DLElBQUlOLFdBQVdJLElBQUlDO0lBQ3pCLE9BQU9DLE1BQU0sQ0FBQyxJQUFJWixvREFBYSxLQUFLQSxvREFBYSxDQUFDWTtBQUNwRCxFQUFFO0FBRUssTUFBTUMsV0FBVyxDQUFJSCxJQUFrQkMsSUFBa0JMLFdBQVdJLElBQUlDLEtBQUssQ0FBQyxFQUFFO0FBRWhGLE1BQU1HLFNBQVMsQ0FBVUosSUFBa0JLO0lBQ2hELElBQUss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