(() => { // webpackBootstrap
"use strict";
var __webpack_modules__ = ({
"./lib/globals/tinymce/core/api/EditorManager.js": 
/*!*******************************************************!*\
  !*** ./lib/globals/tinymce/core/api/EditorManager.js ***!
  \*******************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  EditorManager: () => (EditorManager),
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
var global = tinymce.util.Tools.resolve('tinymce.EditorManager');

/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (global);
var EditorManager = global;


}),
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
"./lib/globals/tinymce/core/api/util/I18n.js": 
/*!***************************************************!*\
  !*** ./lib/globals/tinymce/core/api/util/I18n.js ***!
  \***************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  I18n: () => (I18n),
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
var global = tinymce.util.Tools.resolve('tinymce.util.I18n');

/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (global);
var I18n = global;


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
"./src/plugins/help/main/ts/Plugin.ts": 
/*!********************************************!*\
  !*** ./src/plugins/help/main/ts/Plugin.ts ***!
  \********************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Cell.ts");
/* ESM import */var tinymce_core_api_PluginManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/PluginManager */ "./lib/globals/tinymce/core/api/PluginManager.js");
/* ESM import */var _api_Api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/Api */ "./src/plugins/help/main/ts/api/Api.ts");
/* ESM import */var _api_Commands__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/Commands */ "./src/plugins/help/main/ts/api/Commands.ts");
/* ESM import */var _api_Options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/Options */ "./src/plugins/help/main/ts/api/Options.ts");
/* ESM import */var _ui_Buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/Buttons */ "./src/plugins/help/main/ts/ui/Buttons.ts");
/* ESM import */var _ui_Dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/Dialog */ "./src/plugins/help/main/ts/ui/Dialog.ts");
/* ESM import */var _ui_KeyboardNavTabI18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/KeyboardNavTabI18n */ "./src/plugins/help/main/ts/ui/KeyboardNavTabI18n.ts");








/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>{
    tinymce_core_api_PluginManager__WEBPACK_IMPORTED_MODULE_0__["default"].add('help', (editor, pluginUrl)=>{
        const customTabs = (0,_ephox_katamari__WEBPACK_IMPORTED_MODULE_7__.Cell)({});
        const api = _api_Api__WEBPACK_IMPORTED_MODULE_1__.get(customTabs);
        _api_Options__WEBPACK_IMPORTED_MODULE_3__.register(editor);
        const dialogOpener = _ui_Dialog__WEBPACK_IMPORTED_MODULE_5__.init(editor, customTabs, pluginUrl);
        _ui_Buttons__WEBPACK_IMPORTED_MODULE_4__.register(editor, dialogOpener);
        _api_Commands__WEBPACK_IMPORTED_MODULE_2__.register(editor, dialogOpener);
        editor.shortcuts.add('Alt+0', 'Open help dialog', 'mceHelp');
        _ui_KeyboardNavTabI18n__WEBPACK_IMPORTED_MODULE_6__.initI18nLoad(editor, pluginUrl);
        return api;
    });
});


}),
"./src/plugins/help/main/ts/alien/ConvertShortcut.ts": 
/*!***********************************************************!*\
  !*** ./src/plugins/help/main/ts/alien/ConvertShortcut.ts ***!
  \***********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  convertText: () => (convertText)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Arr.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Obj.ts");
/* ESM import */var tinymce_core_api_Env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/Env */ "./lib/globals/tinymce/core/api/Env.js");


// Converts shortcut format to Mac/PC variants
const convertText = (source)=>{
    const isMac = tinymce_core_api_Env__WEBPACK_IMPORTED_MODULE_0__["default"].os.isMacOS() || tinymce_core_api_Env__WEBPACK_IMPORTED_MODULE_0__["default"].os.isiOS();
    const mac = {
        alt: '&#x2325;',
        ctrl: '&#x2303;',
        shift: '&#x21E7;',
        meta: '&#x2318;',
        access: '&#x2303;&#x2325;'
    };
    const other = {
        meta: 'Ctrl ',
        access: 'Shift + Alt '
    };
    const replace = isMac ? mac : other;
    const shortcut = source.split('+');
    const updated = _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.map(shortcut, (segment)=>{
        // search lowercase, but if not found use the original
        const search = segment.toLowerCase().trim();
        return _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.has(replace, search) ? replace[search] : segment;
    });
    return isMac ? updated.join('').replace(/\s/, '') : updated.join('+');
};



}),
"./src/plugins/help/main/ts/api/Api.ts": 
/*!*********************************************!*\
  !*** ./src/plugins/help/main/ts/api/Api.ts ***!
  \*********************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  get: () => (get)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Id.ts");

const get = (customTabs)=>{
    const addTab = (spec)=>{
        const name = spec.name ?? _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.generate('tab-name');
        const currentCustomTabs = customTabs.get();
        currentCustomTabs[name] = spec;
        customTabs.set(currentCustomTabs);
    };
    return {
        addTab
    };
};



}),
"./src/plugins/help/main/ts/api/Commands.ts": 
/*!**************************************************!*\
  !*** ./src/plugins/help/main/ts/api/Commands.ts ***!
  \**************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  register: () => (register)
});
const register = (editor, dialogOpener)=>{
    editor.addCommand('mceHelp', dialogOpener);
};



}),
"./src/plugins/help/main/ts/api/Options.ts": 
/*!*************************************************!*\
  !*** ./src/plugins/help/main/ts/api/Options.ts ***!
  \*************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getForcedPlugins: () => (getForcedPlugins),
  getHelpTabs: () => (getHelpTabs),
  register: () => (register)
});
const option = (name)=>(editor)=>editor.options.get(name);
const register = (editor)=>{
    const registerOption = editor.options.register;
    registerOption('help_tabs', {
        processor: 'array'
    });
};
const getHelpTabs = option('help_tabs');
const getForcedPlugins = option('forced_plugins');



}),
"./src/plugins/help/main/ts/data/KeyboardShortcuts.ts": 
/*!************************************************************!*\
  !*** ./src/plugins/help/main/ts/data/KeyboardShortcuts.ts ***!
  \************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  shortcuts: () => (shortcuts)
});
const shortcuts = [
    {
        shortcuts: [
            'Meta + B'
        ],
        action: 'Bold'
    },
    {
        shortcuts: [
            'Meta + I'
        ],
        action: 'Italic'
    },
    {
        shortcuts: [
            'Meta + U'
        ],
        action: 'Underline'
    },
    {
        shortcuts: [
            'Meta + A'
        ],
        action: 'Select all'
    },
    {
        shortcuts: [
            'Meta + Y',
            'Meta + Shift + Z'
        ],
        action: 'Redo'
    },
    {
        shortcuts: [
            'Meta + Z'
        ],
        action: 'Undo'
    },
    {
        shortcuts: [
            'Access + 1'
        ],
        action: 'Heading 1'
    },
    {
        shortcuts: [
            'Access + 2'
        ],
        action: 'Heading 2'
    },
    {
        shortcuts: [
            'Access + 3'
        ],
        action: 'Heading 3'
    },
    {
        shortcuts: [
            'Access + 4'
        ],
        action: 'Heading 4'
    },
    {
        shortcuts: [
            'Access + 5'
        ],
        action: 'Heading 5'
    },
    {
        shortcuts: [
            'Access + 6'
        ],
        action: 'Heading 6'
    },
    {
        shortcuts: [
            'Access + 7'
        ],
        action: 'Paragraph'
    },
    {
        shortcuts: [
            'Access + 8'
        ],
        action: 'Div'
    },
    {
        shortcuts: [
            'Access + 9'
        ],
        action: 'Address'
    },
    {
        shortcuts: [
            'Alt + 0'
        ],
        action: 'Open help dialog'
    },
    {
        shortcuts: [
            'Alt + F9'
        ],
        action: 'Focus to menubar'
    },
    {
        shortcuts: [
            'Alt + F10'
        ],
        action: 'Focus to toolbar'
    },
    {
        shortcuts: [
            'Alt + F11'
        ],
        action: 'Focus to element path'
    },
    {
        shortcuts: [
            'Alt + F12'
        ],
        action: 'Focus to notification'
    },
    {
        shortcuts: [
            'Ctrl + F9'
        ],
        action: 'Focus to contextual toolbar'
    },
    {
        shortcuts: [
            'Shift + Enter'
        ],
        action: 'Open popup menu for split buttons'
    },
    {
        shortcuts: [
            'Meta + K'
        ],
        action: 'Insert link (if link plugin activated)'
    },
    {
        shortcuts: [
            'Meta + S'
        ],
        action: 'Save (if save plugin activated)'
    },
    {
        shortcuts: [
            'Meta + F'
        ],
        action: 'Find (if searchreplace plugin activated)'
    },
    {
        shortcuts: [
            'Meta + Shift + F'
        ],
        action: 'Switch to or from fullscreen mode'
    }
];



}),
"./src/plugins/help/main/ts/data/PluginUrls.ts": 
/*!*****************************************************!*\
  !*** ./src/plugins/help/main/ts/data/PluginUrls.ts ***!
  \*****************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PluginType: () => (PluginType),
  urls: () => (urls)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Arr.ts");

var PluginType = /*#__PURE__*/ function(PluginType) {
    PluginType["Premium"] = "premium";
    PluginType["OpenSource"] = "opensource";
    return PluginType;
}({});
// These lists are automatically sorted when generating the dialog.
const urls = _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.map([
    {
        key: 'accordion',
        name: 'Accordion'
    },
    {
        key: 'anchor',
        name: 'Anchor'
    },
    {
        key: 'autolink',
        name: 'Autolink'
    },
    {
        key: 'autoresize',
        name: 'Autoresize'
    },
    {
        key: 'autosave',
        name: 'Autosave'
    },
    {
        key: 'charmap',
        name: 'Character Map'
    },
    {
        key: 'code',
        name: 'Code'
    },
    {
        key: 'codesample',
        name: 'Code Sample'
    },
    {
        key: 'colorpicker',
        name: 'Color Picker'
    },
    {
        key: 'directionality',
        name: 'Directionality'
    },
    {
        key: 'emoticons',
        name: 'Emoticons'
    },
    {
        key: 'fullscreen',
        name: 'Full Screen'
    },
    {
        key: 'help',
        name: 'Help'
    },
    {
        key: 'image',
        name: 'Image'
    },
    {
        key: 'importcss',
        name: 'Import CSS'
    },
    {
        key: 'insertdatetime',
        name: 'Insert Date/Time'
    },
    {
        key: 'link',
        name: 'Link'
    },
    {
        key: 'lists',
        name: 'Lists'
    },
    {
        key: 'advlist',
        name: 'List Styles'
    },
    {
        key: 'media',
        name: 'Media'
    },
    {
        key: 'nonbreaking',
        name: 'Nonbreaking'
    },
    {
        key: 'pagebreak',
        name: 'Page Break'
    },
    {
        key: 'preview',
        name: 'Preview'
    },
    {
        key: 'quickbars',
        name: 'Quick Toolbars'
    },
    {
        key: 'save',
        name: 'Save'
    },
    {
        key: 'searchreplace',
        name: 'Search and Replace'
    },
    {
        key: 'table',
        name: 'Table'
    },
    {
        key: 'textcolor',
        name: 'Text Color'
    },
    {
        key: 'visualblocks',
        name: 'Visual Blocks'
    },
    {
        key: 'visualchars',
        name: 'Visual Characters'
    },
    {
        key: 'wordcount',
        name: 'Word Count'
    },
    // TODO: Add other premium plugins when they are included in the website
    {
        key: 'a11ychecker',
        name: 'Accessibility Checker',
        type: "premium"
    },
    {
        key: 'typography',
        name: 'Advanced Typography',
        type: "premium",
        slug: 'advanced-typography'
    },
    {
        key: 'ai',
        name: 'AI Assistant',
        type: "premium"
    },
    {
        key: 'casechange',
        name: 'Case Change',
        type: "premium"
    },
    {
        key: 'checklist',
        name: 'Checklist',
        type: "premium"
    },
    {
        key: 'advcode',
        name: 'Enhanced Code Editor',
        type: "premium"
    },
    {
        key: 'mediaembed',
        name: 'Enhanced Media Embed',
        type: "premium",
        slug: 'introduction-to-mediaembed'
    },
    {
        key: 'advtable',
        name: 'Enhanced Tables',
        type: "premium"
    },
    {
        key: 'exportpdf',
        name: 'Export to PDF',
        type: "premium"
    },
    {
        key: 'exportword',
        name: 'Export to Word',
        type: "premium"
    },
    {
        key: 'footnotes',
        name: 'Footnotes',
        type: "premium"
    },
    {
        key: 'formatpainter',
        name: 'Format Painter',
        type: "premium"
    },
    {
        key: 'editimage',
        name: 'Image Editing',
        type: "premium"
    },
    {
        key: 'uploadcare',
        name: 'Image Optimizer Powered by Uploadcare',
        type: "premium"
    },
    {
        key: 'importword',
        name: 'Import from Word',
        type: "premium"
    },
    {
        key: 'inlinecss',
        name: 'Inline CSS',
        type: "premium",
        slug: 'inline-css'
    },
    {
        key: 'linkchecker',
        name: 'Link Checker',
        type: "premium"
    },
    {
        key: 'math',
        name: 'Math',
        type: "premium"
    },
    {
        key: 'markdown',
        name: 'Markdown',
        type: "premium"
    },
    {
        key: 'mentions',
        name: 'Mentions',
        type: "premium"
    },
    {
        key: 'mergetags',
        name: 'Merge Tags',
        type: "premium"
    },
    {
        key: 'pageembed',
        name: 'Page Embed',
        type: "premium"
    },
    {
        key: 'permanentpen',
        name: 'Permanent Pen',
        type: "premium"
    },
    {
        key: 'powerpaste',
        name: 'PowerPaste',
        type: "premium",
        slug: 'introduction-to-powerpaste'
    },
    {
        key: 'revisionhistory',
        name: 'Revision History',
        type: "premium"
    },
    {
        key: 'tinymcespellchecker',
        name: 'Spell Checker',
        type: "premium",
        slug: 'introduction-to-tiny-spellchecker'
    },
    {
        key: 'suggestededits',
        name: 'Suggested Edits',
        type: "premium"
    },
    {
        key: 'autocorrect',
        name: 'Spelling Autocorrect',
        type: "premium"
    },
    {
        key: 'tableofcontents',
        name: 'Table of Contents',
        type: "premium"
    },
    {
        key: 'fullpagehtml',
        name: 'Fullpage HTML',
        type: "premium"
    },
    {
        key: 'advtemplate',
        name: 'Templates',
        type: "premium",
        slug: 'advanced-templates'
    },
    {
        key: 'tinycomments',
        name: 'Tiny Comments',
        type: "premium",
        slug: 'introduction-to-tiny-comments'
    },
    {
        key: 'tinydrive',
        name: 'Tiny Drive',
        type: "premium",
        slug: 'tinydrive-introduction'
    }
], (item)=>({
        ...item,
        // Set the defaults/fallbacks for the plugin urls
        type: item.type || "opensource",
        slug: item.slug || item.key
    }));



}),
"./src/plugins/help/main/ts/ui/Buttons.ts": 
/*!************************************************!*\
  !*** ./src/plugins/help/main/ts/ui/Buttons.ts ***!
  \************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  register: () => (register)
});
const register = (editor, dialogOpener)=>{
    editor.ui.registry.addButton('help', {
        icon: 'help',
        tooltip: 'Help',
        onAction: dialogOpener,
        context: 'any'
    });
    editor.ui.registry.addMenuItem('help', {
        text: 'Help',
        icon: 'help',
        shortcut: 'Alt+0',
        onAction: dialogOpener,
        context: 'any'
    });
};



}),
"./src/plugins/help/main/ts/ui/Dialog.ts": 
/*!***********************************************!*\
  !*** ./src/plugins/help/main/ts/ui/Dialog.ts ***!
  \***********************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  init: () => (init)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Arr.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Type.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Obj.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Id.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Optional.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Optionals.ts");
/* ESM import */var _api_Options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/Options */ "./src/plugins/help/main/ts/api/Options.ts");
/* ESM import */var _KeyboardNavTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KeyboardNavTab */ "./src/plugins/help/main/ts/ui/KeyboardNavTab.ts");
/* ESM import */var _KeyboardShortcutsTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./KeyboardShortcutsTab */ "./src/plugins/help/main/ts/ui/KeyboardShortcutsTab.ts");
/* ESM import */var _PluginsTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PluginsTab */ "./src/plugins/help/main/ts/ui/PluginsTab.ts");
/* ESM import */var _VersionTab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./VersionTab */ "./src/plugins/help/main/ts/ui/VersionTab.ts");






const parseHelpTabsSetting = (tabsFromSettings, tabs)=>{
    const newTabs = {};
    const names = _ephox_katamari__WEBPACK_IMPORTED_MODULE_5__.map(tabsFromSettings, (t)=>{
        if (_ephox_katamari__WEBPACK_IMPORTED_MODULE_6__.isString(t)) {
            // Code below shouldn't care if a tab name doesn't have a spec.
            // If we find it does, we'll need to make this smarter.
            // CustomTabsTest has a case for this.
            if (_ephox_katamari__WEBPACK_IMPORTED_MODULE_7__.has(tabs, t)) {
                newTabs[t] = tabs[t];
            }
            return t;
        } else {
            const name = t.name ?? _ephox_katamari__WEBPACK_IMPORTED_MODULE_8__.generate('tab-name');
            newTabs[name] = t;
            return name;
        }
    });
    return {
        tabs: newTabs,
        names
    };
};
const getNamesFromTabs = (tabs)=>{
    const names = _ephox_katamari__WEBPACK_IMPORTED_MODULE_7__.keys(tabs);
    // Move the versions tab to the end if it exists
    const idx = names.indexOf('versions');
    if (idx !== -1) {
        names.splice(idx, 1);
        names.push('versions');
    }
    return {
        tabs,
        names
    };
};
const pParseCustomTabs = async (editor, customTabs, pluginUrl)=>{
    const shortcuts = _KeyboardShortcutsTab__WEBPACK_IMPORTED_MODULE_2__.tab();
    const nav = await _KeyboardNavTab__WEBPACK_IMPORTED_MODULE_1__.pTab(pluginUrl);
    const plugins = _PluginsTab__WEBPACK_IMPORTED_MODULE_3__.tab(editor);
    const versions = _VersionTab__WEBPACK_IMPORTED_MODULE_4__.tab();
    const tabs = {
        [shortcuts.name]: shortcuts,
        [nav.name]: nav,
        [plugins.name]: plugins,
        [versions.name]: versions,
        ...customTabs.get()
    };
    return _ephox_katamari__WEBPACK_IMPORTED_MODULE_9__.Optional.from(_api_Options__WEBPACK_IMPORTED_MODULE_0__.getHelpTabs(editor)).fold(()=>getNamesFromTabs(tabs), (tabsFromSettings)=>parseHelpTabsSetting(tabsFromSettings, tabs));
};
const init = (editor, customTabs, pluginUrl)=>()=>{
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        pParseCustomTabs(editor, customTabs, pluginUrl).then(({ tabs, names })=>{
            const foundTabs = _ephox_katamari__WEBPACK_IMPORTED_MODULE_5__.map(names, (name)=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_7__.get(tabs, name));
            const dialogTabs = _ephox_katamari__WEBPACK_IMPORTED_MODULE_10__.cat(foundTabs);
            const body = {
                type: 'tabpanel',
                tabs: dialogTabs
            };
            editor.windowManager.open({
                title: 'Help',
                size: 'medium',
                body,
                buttons: [
                    {
                        type: 'cancel',
                        name: 'close',
                        text: 'Close',
                        primary: true
                    }
                ],
                initialData: {}
            });
        });
    };



}),
"./src/plugins/help/main/ts/ui/KeyboardNavTab.ts": 
/*!*******************************************************!*\
  !*** ./src/plugins/help/main/ts/ui/KeyboardNavTab.ts ***!
  \*******************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  pTab: () => (pTab)
});
/* ESM import */var _KeyboardNavTabI18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KeyboardNavTabI18n */ "./src/plugins/help/main/ts/ui/KeyboardNavTabI18n.ts");

const pTab = async (pluginUrl)=>{
    const body = {
        type: 'htmlpanel',
        presets: 'document',
        html: await _KeyboardNavTabI18n__WEBPACK_IMPORTED_MODULE_0__.pLoadI18nHtml(pluginUrl)
    };
    return {
        name: 'keyboardnav',
        title: 'Keyboard Navigation',
        items: [
            body
        ]
    };
};



}),
"./src/plugins/help/main/ts/ui/KeyboardNavTabI18n.ts": 
/*!***********************************************************!*\
  !*** ./src/plugins/help/main/ts/ui/KeyboardNavTabI18n.ts ***!
  \***********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  initI18nLoad: () => (initI18nLoad),
  pLoadI18nHtml: () => (pLoadI18nHtml)
});
/* ESM import */var tinymce_core_api_Resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/Resource */ "./lib/globals/tinymce/core/api/Resource.js");
/* ESM import */var tinymce_core_api_util_I18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tinymce/core/api/util/I18n */ "./lib/globals/tinymce/core/api/util/I18n.js");


const pLoadHtmlByLangCode = (baseUrl, langCode)=>tinymce_core_api_Resource__WEBPACK_IMPORTED_MODULE_0__["default"].load(`tinymce.html-i18n.help-keynav.${langCode}`, `${baseUrl}/js/i18n/keynav/${langCode}.js`);
const pLoadI18nHtml = (baseUrl)=>// TINY-9928: Load language file for the current language, or English if the file is not available
    pLoadHtmlByLangCode(baseUrl, tinymce_core_api_util_I18n__WEBPACK_IMPORTED_MODULE_1__["default"].getCode()).catch(()=>pLoadHtmlByLangCode(baseUrl, 'en'));
const initI18nLoad = (editor, baseUrl)=>{
    editor.on('init', ()=>{
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        pLoadI18nHtml(baseUrl);
    });
};



}),
"./src/plugins/help/main/ts/ui/KeyboardShortcutsTab.ts": 
/*!*************************************************************!*\
  !*** ./src/plugins/help/main/ts/ui/KeyboardShortcutsTab.ts ***!
  \*************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  tab: () => (tab)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Arr.ts");
/* ESM import */var _alien_ConvertShortcut__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../alien/ConvertShortcut */ "./src/plugins/help/main/ts/alien/ConvertShortcut.ts");
/* ESM import */var _data_KeyboardShortcuts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/KeyboardShortcuts */ "./src/plugins/help/main/ts/data/KeyboardShortcuts.ts");



const tab = ()=>{
    const shortcutList = _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.map(_data_KeyboardShortcuts__WEBPACK_IMPORTED_MODULE_1__.shortcuts, (shortcut)=>{
        const shortcutText = _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.map(shortcut.shortcuts, _alien_ConvertShortcut__WEBPACK_IMPORTED_MODULE_0__.convertText).join(' or ');
        return [
            shortcut.action,
            shortcutText
        ];
    });
    const tablePanel = {
        type: 'table',
        // TODO: Fix table styles #TINY-2909
        header: [
            'Action',
            'Shortcut'
        ],
        cells: shortcutList
    };
    return {
        name: 'shortcuts',
        title: 'Handy Shortcuts',
        items: [
            tablePanel
        ]
    };
};



}),
"./src/plugins/help/main/ts/ui/PluginsTab.ts": 
/*!***************************************************!*\
  !*** ./src/plugins/help/main/ts/ui/PluginsTab.ts ***!
  \***************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  tab: () => (tab)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Arr.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Type.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Obj.ts");
/* ESM import */var tinymce_core_api_util_I18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/util/I18n */ "./lib/globals/tinymce/core/api/util/I18n.js");
/* ESM import */var _api_Options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/Options */ "./src/plugins/help/main/ts/api/Options.ts");
/* ESM import */var _data_PluginUrls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/PluginUrls */ "./src/plugins/help/main/ts/data/PluginUrls.ts");




const tab = (editor)=>{
    const availablePlugins = ()=>{
        const premiumPlugins = _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__.filter(_data_PluginUrls__WEBPACK_IMPORTED_MODULE_2__.urls, ({ type })=>{
            return type === _data_PluginUrls__WEBPACK_IMPORTED_MODULE_2__.PluginType.Premium;
        });
        const sortedPremiumPlugins = _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__.sort(_ephox_katamari__WEBPACK_IMPORTED_MODULE_3__.map(premiumPlugins, (p)=>p.name), (s1, s2)=>s1.localeCompare(s2));
        const premiumPluginList = _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__.map(sortedPremiumPlugins, (pluginName)=>`<li>${pluginName}</li>`).join('');
        return '<div>' + '<p><b>' + tinymce_core_api_util_I18n__WEBPACK_IMPORTED_MODULE_0__["default"].translate('Premium plugins:') + '</b></p>' + '<ul>' + premiumPluginList + '<li class="tox-help__more-link" ">' + '<a href="https://www.tiny.cloud/pricing/?utm_campaign=help_dialog_plugin_tab&utm_source=tiny&utm_medium=referral&utm_term=read_more&utm_content=premium_plugin_heading" rel="noopener" target="_blank"' + ' data-alloy-tabstop="true" tabindex="-1">' + tinymce_core_api_util_I18n__WEBPACK_IMPORTED_MODULE_0__["default"].translate('Learn more...') + '</a></li>' + '</ul>' + '</div>';
    };
    const makeLink = (p)=>`<a data-alloy-tabstop="true" tabindex="-1" href="${p.url}" target="_blank" rel="noopener">${p.name}</a>`;
    const identifyUnknownPlugin = (editor, key)=>{
        const getMetadata = editor.plugins[key].getMetadata;
        if (_ephox_katamari__WEBPACK_IMPORTED_MODULE_4__.isFunction(getMetadata)) {
            const metadata = getMetadata();
            return {
                name: metadata.name,
                html: makeLink(metadata)
            };
        } else {
            return {
                name: key,
                html: key
            };
        }
    };
    const getPluginData = (editor, key)=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_3__.find(_data_PluginUrls__WEBPACK_IMPORTED_MODULE_2__.urls, (x)=>{
            return x.key === key;
        }).fold(()=>{
            return identifyUnknownPlugin(editor, key);
        }, (x)=>{
            // We know this plugin, so use our stored details.
            const name = x.type === _data_PluginUrls__WEBPACK_IMPORTED_MODULE_2__.PluginType.Premium ? `${x.name}*` : x.name;
            const html = makeLink({
                name,
                url: `https://www.tiny.cloud/docs/tinymce/${tinymce.majorVersion}/${x.slug}/`
            });
            return {
                name,
                html
            };
        });
    const getPluginKeys = (editor)=>{
        const keys = _ephox_katamari__WEBPACK_IMPORTED_MODULE_5__.keys(editor.plugins);
        const forcedPlugins = _api_Options__WEBPACK_IMPORTED_MODULE_1__.getForcedPlugins(editor);
        const hiddenPlugins = _ephox_katamari__WEBPACK_IMPORTED_MODULE_4__.isUndefined(forcedPlugins) ? [
            'onboarding',
            'licensekeymanager'
        ] : forcedPlugins.concat([
            'onboarding',
            'licensekeymanager'
        ]);
        return _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__.filter(keys, (k)=>!_ephox_katamari__WEBPACK_IMPORTED_MODULE_3__.contains(hiddenPlugins, k));
    };
    const pluginLister = (editor)=>{
        const pluginKeys = getPluginKeys(editor);
        const sortedPluginData = _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__.sort(_ephox_katamari__WEBPACK_IMPORTED_MODULE_3__.map(pluginKeys, (k)=>getPluginData(editor, k)), (pd1, pd2)=>pd1.name.localeCompare(pd2.name));
        const pluginLis = _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__.map(sortedPluginData, (key)=>{
            return '<li>' + key.html + '</li>';
        });
        const count = pluginLis.length;
        const pluginsString = pluginLis.join('');
        const html = '<p><b>' + tinymce_core_api_util_I18n__WEBPACK_IMPORTED_MODULE_0__["default"].translate([
            'Plugins installed ({0}):',
            count
        ]) + '</b></p>' + '<ul>' + pluginsString + '</ul>';
        return html;
    };
    const installedPlugins = (editor)=>{
        if (editor == null) {
            return '';
        }
        return '<div>' + pluginLister(editor) + '</div>';
    };
    const htmlPanel = {
        type: 'htmlpanel',
        presets: 'document',
        html: [
            installedPlugins(editor),
            availablePlugins()
        ].join('')
    };
    return {
        name: 'plugins',
        title: 'Plugins',
        items: [
            htmlPanel
        ]
    };
};



}),
"./src/plugins/help/main/ts/ui/VersionTab.ts": 
/*!***************************************************!*\
  !*** ./src/plugins/help/main/ts/ui/VersionTab.ts ***!
  \***************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  tab: () => (tab)
});
/* ESM import */var tinymce_core_api_EditorManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/EditorManager */ "./lib/globals/tinymce/core/api/EditorManager.js");
/* ESM import */var tinymce_core_api_util_I18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tinymce/core/api/util/I18n */ "./lib/globals/tinymce/core/api/util/I18n.js");


const tab = ()=>{
    const getVersion = (major, minor)=>major.indexOf('@') === 0 ? 'X.X.X' : major + '.' + minor;
    const version = getVersion(tinymce_core_api_EditorManager__WEBPACK_IMPORTED_MODULE_0__["default"].majorVersion, tinymce_core_api_EditorManager__WEBPACK_IMPORTED_MODULE_0__["default"].minorVersion);
    const changeLogLink = '<a data-alloy-tabstop="true" tabindex="-1" href="https://www.tiny.cloud/docs/tinymce/8/changelog/?utm_campaign=help_dialog_version_tab&utm_source=tiny&utm_medium=referral" rel="noopener" target="_blank">TinyMCE ' + version + '</a>';
    const htmlPanel = {
        type: 'htmlpanel',
        html: '<p>' + tinymce_core_api_util_I18n__WEBPACK_IMPORTED_MODULE_1__["default"].translate([
            'You are using {0}',
            changeLogLink
        ]) + '</p>',
        presets: 'document'
    };
    return {
        name: 'versions',
        title: 'Version',
        items: [
            htmlPanel
        ]
    };
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
  !*** ./src/plugins/help/main/ts/Main.ts ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _Plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Plugin */ "./src/plugins/help/main/ts/Plugin.ts");

(0,_Plugin__WEBPACK_IMPORTED_MODULE_0__["default"])(); /** *****
 * DO NOT EXPORT ANYTHING
 *
 * IF YOU DO ROLLUP WILL LEAVE A GLOBAL ON THE PAGE
 *******/ 

})();

})()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdGlueW1jZS9wbHVnaW5zL2hlbHAvcGx1Z2luLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGlueW1jZS8uL2xpYi9nbG9iYWxzL3RpbnltY2UvY29yZS9hcGkvRWRpdG9yTWFuYWdlci5qcyIsIndlYnBhY2s6Ly90aW55bWNlLy4vbGliL2dsb2JhbHMvdGlueW1jZS9jb3JlL2FwaS9FbnYuanMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL2xpYi9nbG9iYWxzL3RpbnltY2UvY29yZS9hcGkvUGx1Z2luTWFuYWdlci5qcyIsIndlYnBhY2s6Ly90aW55bWNlLy4vbGliL2dsb2JhbHMvdGlueW1jZS9jb3JlL2FwaS9SZXNvdXJjZS5qcyIsIndlYnBhY2s6Ly90aW55bWNlLy4vbGliL2dsb2JhbHMvdGlueW1jZS9jb3JlL2FwaS91dGlsL0kxOG4uanMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9rYXRhbWFyaS9zcmMvbWFpbi90cy9lcGhveC9rYXRhbWFyaS9hcGkvQXJyLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4va2F0YW1hcmkvc3JjL21haW4vdHMvZXBob3gva2F0YW1hcmkvYXBpL0NlbGwudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9rYXRhbWFyaS9zcmMvbWFpbi90cy9lcGhveC9rYXRhbWFyaS9hcGkvRnVuLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4va2F0YW1hcmkvc3JjL21haW4vdHMvZXBob3gva2F0YW1hcmkvYXBpL0lkLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4va2F0YW1hcmkvc3JjL21haW4vdHMvZXBob3gva2F0YW1hcmkvYXBpL051bS50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL2thdGFtYXJpL3NyYy9tYWluL3RzL2VwaG94L2thdGFtYXJpL2FwaS9PYmoudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9rYXRhbWFyaS9zcmMvbWFpbi90cy9lcGhveC9rYXRhbWFyaS9hcGkvT3B0aW9uYWwudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9rYXRhbWFyaS9zcmMvbWFpbi90cy9lcGhveC9rYXRhbWFyaS9hcGkvT3B0aW9uYWxzLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4va2F0YW1hcmkvc3JjL21haW4vdHMvZXBob3gva2F0YW1hcmkvYXBpL1R5cGUudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9rYXRhbWFyaS9zcmMvbWFpbi90cy9lcGhveC9rYXRhbWFyaS91dGlsL0lkVXRpbHMudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL2hlbHAvbWFpbi90cy9QbHVnaW4udHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL2hlbHAvbWFpbi90cy9hbGllbi9Db252ZXJ0U2hvcnRjdXQudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL2hlbHAvbWFpbi90cy9hcGkvQXBpLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9oZWxwL21haW4vdHMvYXBpL0NvbW1hbmRzLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9oZWxwL21haW4vdHMvYXBpL09wdGlvbnMudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL2hlbHAvbWFpbi90cy9kYXRhL0tleWJvYXJkU2hvcnRjdXRzLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9oZWxwL21haW4vdHMvZGF0YS9QbHVnaW5VcmxzLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9oZWxwL21haW4vdHMvdWkvQnV0dG9ucy50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvaGVscC9tYWluL3RzL3VpL0RpYWxvZy50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvaGVscC9tYWluL3RzL3VpL0tleWJvYXJkTmF2VGFiLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9oZWxwL21haW4vdHMvdWkvS2V5Ym9hcmROYXZUYWJJMThuLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9oZWxwL21haW4vdHMvdWkvS2V5Ym9hcmRTaG9ydGN1dHNUYWIudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL2hlbHAvbWFpbi90cy91aS9QbHVnaW5zVGFiLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9oZWxwL21haW4vdHMvdWkvVmVyc2lvblRhYi50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uLy4uL25vZGVfbW9kdWxlcy9AZXBob3gvZGlzcHV0ZS9zcmMvbWFpbi90cy9hcGkvRXEudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi8uLi9ub2RlX21vZHVsZXMvQGVwaG94L2Rpc3B1dGUvc3JjL21haW4vdHMvY29yZS9BcnJheVV0aWwudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi8uLi9ub2RlX21vZHVsZXMvQGVwaG94L2Rpc3B1dGUvc3JjL21haW4vdHMvY29yZS9UeXBlLnRzIiwid2VicGFjazovL3RpbnltY2Uvd2VicGFjay9ydW50aW1lL2RlZmluZV9wcm9wZXJ0eV9nZXR0ZXJzIiwid2VicGFjazovL3RpbnltY2Uvd2VicGFjay9ydW50aW1lL2hhc19vd25fcHJvcGVydHkiLCJ3ZWJwYWNrOi8vdGlueW1jZS93ZWJwYWNrL3J1bnRpbWUvbWFrZV9uYW1lc3BhY2Vfb2JqZWN0Iiwid2VicGFjazovL3RpbnltY2Uvd2VicGFjay9ydW50aW1lL3JzcGFja192ZXJzaW9uIiwid2VicGFjazovL3RpbnltY2Uvd2VicGFjay9ydW50aW1lL3JzcGFja191bmlxdWVfaWQiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL2hlbHAvbWFpbi90cy9NYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBnbG9iYWwgPSB0aW55bWNlLnV0aWwuVG9vbHMucmVzb2x2ZSgndGlueW1jZS5FZGl0b3JNYW5hZ2VyJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGdsb2JhbDtcbmV4cG9ydCB2YXIgRWRpdG9yTWFuYWdlciA9IGdsb2JhbDtcbiIsInZhciBnbG9iYWwgPSB0aW55bWNlLnV0aWwuVG9vbHMucmVzb2x2ZSgndGlueW1jZS5FbnYnKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2xvYmFsO1xuZXhwb3J0IHZhciBFbnYgPSBnbG9iYWw7XG4iLCJ2YXIgZ2xvYmFsID0gdGlueW1jZS51dGlsLlRvb2xzLnJlc29sdmUoJ3RpbnltY2UuUGx1Z2luTWFuYWdlcicpO1xuXG5leHBvcnQgZGVmYXVsdCBnbG9iYWw7XG5leHBvcnQgdmFyIFBsdWdpbk1hbmFnZXIgPSBnbG9iYWw7XG4iLCJ2YXIgZ2xvYmFsID0gdGlueW1jZS51dGlsLlRvb2xzLnJlc29sdmUoJ3RpbnltY2UuUmVzb3VyY2UnKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2xvYmFsO1xuZXhwb3J0IHZhciBSZXNvdXJjZSA9IGdsb2JhbDtcbiIsInZhciBnbG9iYWwgPSB0aW55bWNlLnV0aWwuVG9vbHMucmVzb2x2ZSgndGlueW1jZS51dGlsLkkxOG4nKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2xvYmFsO1xuZXhwb3J0IHZhciBJMThuID0gZ2xvYmFsO1xuIiwiaW1wb3J0IHsgRXEgfSBmcm9tICdAZXBob3gvZGlzcHV0ZSc7XG5cbmltcG9ydCAqIGFzIEZ1biBmcm9tICcuL0Z1bic7XG5pbXBvcnQgeyBPcHRpb25hbCB9IGZyb20gJy4vT3B0aW9uYWwnO1xuaW1wb3J0ICogYXMgVHlwZSBmcm9tICcuL1R5cGUnO1xuXG50eXBlIEFycmF5TW9ycGhpc208VCwgVT4gPSAoeDogVCwgaTogbnVtYmVyKSA9PiBVO1xudHlwZSBBcnJheUd1YXJkUHJlZGljYXRlPFQsIFUgZXh0ZW5kcyBUPiA9ICh4OiBULCBpOiBudW1iZXIpID0+IHggaXMgVTtcbnR5cGUgQXJyYXlQcmVkaWNhdGU8VD4gPSBBcnJheU1vcnBoaXNtPFQsIGJvb2xlYW4+O1xudHlwZSBDb21wYXJhdG9yPFQ+ID0gKGE6IFQsIGI6IFQpID0+IG51bWJlcjtcblxuY29uc3QgbmF0aXZlU2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5jb25zdCBuYXRpdmVJbmRleE9mID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2Y7XG5jb25zdCBuYXRpdmVQdXNoID0gQXJyYXkucHJvdG90eXBlLnB1c2g7XG5cbmNvbnN0IHJhd0luZGV4T2YgPSA8VD4gKHRzOiBBcnJheUxpa2U8VD4sIHQ6IFQpOiBudW1iZXIgPT5cbiAgbmF0aXZlSW5kZXhPZi5jYWxsKHRzLCB0KTtcblxuZXhwb3J0IGNvbnN0IGluZGV4T2YgPSA8VCA9IGFueT4oeHM6IEFycmF5TGlrZTxUPiwgeDogVCk6IE9wdGlvbmFsPG51bWJlcj4gPT4ge1xuICAvLyBUaGUgcmF3SW5kZXhPZiBtZXRob2QgZG9lcyBub3Qgd3JhcCB1cCBpbiBhbiBvcHRpb24uIFRoaXMgaXMgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMuXG4gIGNvbnN0IHIgPSByYXdJbmRleE9mKHhzLCB4KTtcbiAgcmV0dXJuIHIgPT09IC0xID8gT3B0aW9uYWwubm9uZSgpIDogT3B0aW9uYWwuc29tZShyKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb250YWlucyA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCB4OiBUKTogYm9vbGVhbiA9PiByYXdJbmRleE9mKHhzLCB4KSA+IC0xO1xuXG5leHBvcnQgY29uc3QgZXhpc3RzID0gPFQgPSBhbnk+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+KTogYm9vbGVhbiA9PiB7XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICBpZiAocHJlZCh4LCBpKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IGNvbnN0IHJhbmdlID0gPFQ+KG51bTogbnVtYmVyLCBmOiAoYTogbnVtYmVyKSA9PiBUKTogVFtdID0+IHtcbiAgY29uc3QgcjogVFtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtOyBpKyspIHtcbiAgICByLnB1c2goZihpKSk7XG4gIH1cbiAgcmV0dXJuIHI7XG59O1xuXG4vLyBJdCdzIGEgdG90YWwgbWljcm8gb3B0aW1pc2F0aW9uLCBidXQgdGhlc2UgZG8gbWFrZSBzb21lIGRpZmZlcmVuY2UuXG4vLyBQYXJ0aWN1bGFybHkgZm9yIGJyb3dzZXJzIG90aGVyIHRoYW4gQ2hyb21lLlxuLy8gLSBsZW5ndGggY2FjaGluZ1xuLy8gaHR0cDovL2pzcGVyZi5jb20vYnJvd3Nlci1kaWV0LWpxdWVyeS1lYWNoLXZzLWZvci1sb29wLzY5XG4vLyAtIG5vdCB1c2luZyBwdXNoXG4vLyBodHRwOi8vanNwZXJmLmNvbS9hcnJheS1kaXJlY3QtYXNzaWdubWVudC12cy1wdXNoLzJcblxuZXhwb3J0IGNvbnN0IGNodW5rID0gPFQ+KGFycmF5OiBBcnJheUxpa2U8VD4sIHNpemU6IG51bWJlcik6IFRbXVtdID0+IHtcbiAgY29uc3QgcjogVFtdW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkgKz0gc2l6ZSkge1xuICAgIGNvbnN0IHM6IFRbXSA9IG5hdGl2ZVNsaWNlLmNhbGwoYXJyYXksIGksIGkgKyBzaXplKTtcbiAgICByLnB1c2gocyk7XG4gIH1cbiAgcmV0dXJuIHI7XG59O1xuXG5leHBvcnQgY29uc3QgbWFwID0gPFQgPSBhbnksIFUgPSBhbnk+KHhzOiBBcnJheUxpa2U8VD4sIGY6IEFycmF5TW9ycGhpc208VCwgVT4pOiBVW10gPT4ge1xuICAvLyBwcmUtYWxsb2NhdGluZyBhcnJheSBzaXplIHdoZW4gaXQncyBndWFyYW50ZWVkIHRvIGJlIGtub3duXG4gIC8vIGh0dHA6Ly9qc3BlcmYuY29tL3B1c2gtYWxsb2NhdGVkLXZzLWR5bmFtaWMvMjJcbiAgY29uc3QgbGVuID0geHMubGVuZ3RoO1xuICBjb25zdCByID0gbmV3IEFycmF5KGxlbik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgcltpXSA9IGYoeCwgaSk7XG4gIH1cbiAgcmV0dXJuIHI7XG59O1xuXG4vLyBVbndvdW5kIGltcGxlbWVudGluZyBvdGhlciBmdW5jdGlvbnMgaW4gdGVybXMgb2YgZWFjaC5cbi8vIFRoZSBjb2RlIHNpemUgaXMgcm91Z2hseSB0aGUgc2FtZSwgYW5kIGl0IHNob3VsZCBhbGxvdyBmb3IgYmV0dGVyIG9wdGltaXNhdGlvbi5cbi8vIGNvbnN0IGVhY2ggPSBmdW5jdGlvbjxULCBVPih4czogVFtdLCBmOiAoeDogVCwgaT86IG51bWJlciwgeHM/OiBUW10pID0+IHZvaWQpOiB2b2lkIHtcbmV4cG9ydCBjb25zdCBlYWNoID0gPFQgPSBhbnk+KHhzOiBBcnJheUxpa2U8VD4sIGY6IEFycmF5TW9ycGhpc208VCwgdm9pZD4pOiB2b2lkID0+IHtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHhzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIGYoeCwgaSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBlYWNociA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCBmOiBBcnJheU1vcnBoaXNtPFQsIHZvaWQ+KTogdm9pZCA9PiB7XG4gIGZvciAobGV0IGkgPSB4cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICBmKHgsIGkpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgcGFydGl0aW9uID0gPFQgPSBhbnk+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+KTogeyBwYXNzOiBUW107IGZhaWw6IFRbXSB9ID0+IHtcbiAgY29uc3QgcGFzczogVFtdID0gW107XG4gIGNvbnN0IGZhaWw6IFRbXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0geHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgY29uc3QgYXJyID0gcHJlZCh4LCBpKSA/IHBhc3MgOiBmYWlsO1xuICAgIGFyci5wdXNoKHgpO1xuICB9XG4gIHJldHVybiB7IHBhc3MsIGZhaWwgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBmaWx0ZXI6IHtcbiAgPFQsIFUgZXh0ZW5kcyBUPih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheUd1YXJkUHJlZGljYXRlPFQsIFU+KTogVVtdO1xuICA8VD4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlQcmVkaWNhdGU8VD4pOiBUW107XG59ID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+KTogVFtdID0+IHtcbiAgY29uc3QgcjogVFtdID0gW107XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICBpZiAocHJlZCh4LCBpKSkge1xuICAgICAgci5wdXNoKHgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcjtcbn07XG5cbi8qXG4gKiBHcm91cHMgYW4gYXJyYXkgaW50byBjb250aWd1b3VzIGFycmF5cyBvZiBsaWtlIGVsZW1lbnRzLiBXaGV0aGVyIGFuIGVsZW1lbnQgaXMgbGlrZSBvciBub3QgZGVwZW5kcyBvbiBmLlxuICpcbiAqIGYgaXMgYSBmdW5jdGlvbiB0aGF0IGRlcml2ZXMgYSB2YWx1ZSBmcm9tIGFuIGVsZW1lbnQgLSBlLmcuIHRydWUgb3IgZmFsc2UsIG9yIGEgc3RyaW5nLlxuICogRWxlbWVudHMgYXJlIGxpa2UgaWYgdGhpcyBmdW5jdGlvbiBnZW5lcmF0ZXMgdGhlIHNhbWUgdmFsdWUgZm9yIHRoZW0gKGFjY29yZGluZyB0byA9PT0pLlxuICpcbiAqXG4gKiBPcmRlciBvZiB0aGUgZWxlbWVudHMgaXMgcHJlc2VydmVkLiBBcnIuZmxhdHRlbigpIG9uIHRoZSByZXN1bHQgd2lsbCByZXR1cm4gdGhlIG9yaWdpbmFsIGxpc3QsIGFzIHdpdGggSGFza2VsbCBncm91cEJ5IGZ1bmN0aW9uLlxuICogIEZvciBhIGdvb2QgZXhwbGFuYXRpb24sIHNlZSB0aGUgZ3JvdXAgZnVuY3Rpb24gKHdoaWNoIGlzIGEgc3BlY2lhbCBjYXNlIG9mIGdyb3VwQnkpXG4gKiAgaHR0cDovL2hhY2thZ2UuaGFza2VsbC5vcmcvcGFja2FnZS9iYXNlLTQuNy4wLjAvZG9jcy9EYXRhLUxpc3QuaHRtbCN2Omdyb3VwXG4gKi9cbmV4cG9ydCBjb25zdCBncm91cEJ5ID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4sIGY6IChhOiBUKSA9PiBhbnkpOiBUW11bXSA9PiB7XG4gIGlmICh4cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gW107XG4gIH0gZWxzZSB7XG4gICAgbGV0IHdhc1R5cGUgPSBmKHhzWzBdKTsgLy8gaW5pdGlhbCBjYXNlIGZvciBtYXRjaGluZ1xuICAgIGNvbnN0IHI6IFRbXVtdID0gW107XG4gICAgbGV0IGdyb3VwOiBUW10gPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgY29uc3QgeCA9IHhzW2ldO1xuICAgICAgY29uc3QgdHlwZSA9IGYoeCk7XG4gICAgICBpZiAodHlwZSAhPT0gd2FzVHlwZSkge1xuICAgICAgICByLnB1c2goZ3JvdXApO1xuICAgICAgICBncm91cCA9IFtdO1xuICAgICAgfVxuICAgICAgd2FzVHlwZSA9IHR5cGU7XG4gICAgICBncm91cC5wdXNoKHgpO1xuICAgIH1cbiAgICBpZiAoZ3JvdXAubGVuZ3RoICE9PSAwKSB7XG4gICAgICByLnB1c2goZ3JvdXApO1xuICAgIH1cbiAgICByZXR1cm4gcjtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGZvbGRyID0gPFQsIFU+KHhzOiBBcnJheUxpa2U8VD4sIGY6IChhY2M6IFUsIHg6IFQsIGk6IG51bWJlcikgPT4gVSwgYWNjOiBVKTogVSA9PiB7XG4gIGVhY2hyKHhzLCAoeCwgaSkgPT4ge1xuICAgIGFjYyA9IGYoYWNjLCB4LCBpKTtcbiAgfSk7XG4gIHJldHVybiBhY2M7XG59O1xuXG5leHBvcnQgY29uc3QgZm9sZGwgPSA8VCA9IGFueSwgVSA9IGFueT4oeHM6IEFycmF5TGlrZTxUPiwgZjogKGFjYzogVSwgeDogVCwgaTogbnVtYmVyKSA9PiBVLCBhY2M6IFUpOiBVID0+IHtcbiAgZWFjaCh4cywgKHgsIGkpID0+IHtcbiAgICBhY2MgPSBmKGFjYywgeCwgaSk7XG4gIH0pO1xuICByZXR1cm4gYWNjO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmRVbnRpbDoge1xuICA8VCwgVSBleHRlbmRzIFQ+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5R3VhcmRQcmVkaWNhdGU8VCwgVT4sIHVudGlsOiBBcnJheVByZWRpY2F0ZTxUPik6IE9wdGlvbmFsPFU+O1xuICA8VCA9IGFueT4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlQcmVkaWNhdGU8VD4sIHVudGlsOiBBcnJheVByZWRpY2F0ZTxUPik6IE9wdGlvbmFsPFQ+O1xufSA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheVByZWRpY2F0ZTxUPiwgdW50aWw6IEFycmF5UHJlZGljYXRlPFQ+KTogT3B0aW9uYWw8VD4gPT4ge1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0geHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgaWYgKHByZWQoeCwgaSkpIHtcbiAgICAgIHJldHVybiBPcHRpb25hbC5zb21lKHgpO1xuICAgIH0gZWxzZSBpZiAodW50aWwoeCwgaSkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gT3B0aW9uYWwubm9uZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmQ6IHtcbiAgPFQsIFUgZXh0ZW5kcyBUPih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheUd1YXJkUHJlZGljYXRlPFQsIFU+KTogT3B0aW9uYWw8VT47XG4gIDxUID0gYW55Pih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheVByZWRpY2F0ZTxUPik6IE9wdGlvbmFsPFQ+O1xufSA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheVByZWRpY2F0ZTxUPik6IE9wdGlvbmFsPFQ+ID0+IHtcbiAgcmV0dXJuIGZpbmRVbnRpbCh4cywgcHJlZCwgRnVuLm5ldmVyKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmaW5kSW5kZXggPSA8VD4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlQcmVkaWNhdGU8VD4pOiBPcHRpb25hbDxudW1iZXI+ID0+IHtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHhzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIGlmIChwcmVkKHgsIGkpKSB7XG4gICAgICByZXR1cm4gT3B0aW9uYWwuc29tZShpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gT3B0aW9uYWwubm9uZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmRMYXN0SW5kZXggPSA8VD4oYXJyOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+KTogT3B0aW9uYWw8bnVtYmVyPiA9PiB7XG4gIGZvciAobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBpZiAocHJlZChhcnJbaV0sIGkpKSB7XG4gICAgICByZXR1cm4gT3B0aW9uYWwuc29tZShpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gT3B0aW9uYWwubm9uZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZsYXR0ZW4gPSA8VD4oeHM6IEFycmF5TGlrZTxUW10+KTogVFtdID0+IHtcbiAgLy8gTm90ZSwgdGhpcyBpcyBwb3NzaWJsZSBiZWNhdXNlIHB1c2ggc3VwcG9ydHMgbXVsdGlwbGUgYXJndW1lbnRzOlxuICAvLyBodHRwOi8vanNwZXJmLmNvbS9jb25jYXQtcHVzaC82XG4gIC8vIE5vdGUgdGhhdCBpbiB0aGUgcGFzdCwgY29uY2F0KCkgd291bGQgc2lsZW50bHkgd29yayAodmVyeSBzbG93bHkpIGZvciBhcnJheS1saWtlIG9iamVjdHMuXG4gIC8vIFdpdGggdGhpcyBjaGFuZ2UgaXQgd2lsbCB0aHJvdyBhbiBlcnJvci5cbiAgY29uc3QgcjogVFtdID0gW107XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgIC8vIEVuc3VyZSB0aGF0IGVhY2ggdmFsdWUgaXMgYW4gYXJyYXkgaXRzZWxmXG4gICAgaWYgKCFUeXBlLmlzQXJyYXkoeHNbaV0pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Fyci5mbGF0dGVuIGl0ZW0gJyArIGkgKyAnIHdhcyBub3QgYW4gYXJyYXksIGlucHV0OiAnICsgeHMpO1xuICAgIH1cbiAgICBuYXRpdmVQdXNoLmFwcGx5KHIsIHhzW2ldKTtcbiAgfVxuICByZXR1cm4gcjtcbn07XG5cbmV4cG9ydCBjb25zdCBiaW5kID0gPFQgPSBhbnksIFUgPSBhbnk+KHhzOiBBcnJheUxpa2U8VD4sIGY6IEFycmF5TW9ycGhpc208VCwgVVtdPik6IFVbXSA9PlxuICBmbGF0dGVuKG1hcCh4cywgZikpO1xuXG5leHBvcnQgY29uc3QgZm9yYWxsID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+KTogYm9vbGVhbiA9PiB7XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICBpZiAocHJlZCh4LCBpKSAhPT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmV4cG9ydCBjb25zdCBlcXVhbCA9IDxUPihhMTogQXJyYXlMaWtlPFQ+LCBhMjogQXJyYXlMaWtlPFQ+LCBlcTogRXEuRXE8VD4gPSBFcS5lcUFueSk6IGJvb2xlYW4gPT5cbiAgRXEuZXFBcnJheShlcSkuZXEoYTEsIGEyKTtcblxuZXhwb3J0IGNvbnN0IHJldmVyc2UgPSA8VD4oeHM6IEFycmF5TGlrZTxUPik6IFRbXSA9PiB7XG4gIGNvbnN0IHI6IFRbXSA9IG5hdGl2ZVNsaWNlLmNhbGwoeHMsIDApO1xuICByLnJldmVyc2UoKTtcbiAgcmV0dXJuIHI7XG59O1xuXG5leHBvcnQgY29uc3QgZGlmZmVyZW5jZSA9IDxUPihhMTogQXJyYXlMaWtlPFQ+LCBhMjogQXJyYXlMaWtlPFQ+KTogVFtdID0+IGZpbHRlcihhMSwgKHgpID0+ICFjb250YWlucyhhMiwgeCkpO1xuXG5leHBvcnQgY29uc3QgbWFwVG9PYmplY3Q6IHtcbiAgPFQgZXh0ZW5kcyBzdHJpbmcsIFU+KHhzOiBBcnJheUxpa2U8VD4sIGY6ICh4OiBULCBpOiBudW1iZXIpID0+IFUpOiBSZWNvcmQ8VCwgVT47XG4gIDxULCBSIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55Pj4oeHM6IEFycmF5TGlrZTxUPiwgZjogKHg6IFQsIGk6IG51bWJlcikgPT4gUltrZXlvZiBSXSk6IFI7XG59ID0gPFQsIFIgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+Pih4czogQXJyYXlMaWtlPFQ+LCBmOiAoeDogVCwgaTogbnVtYmVyKSA9PiBSW2tleW9mIFJdKTogUiA9PiB7XG4gIGNvbnN0IHIgPSB7fSBhcyBSO1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0geHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgcltTdHJpbmcoeCkgYXMga2V5b2YgUl0gPSBmKHgsIGkpO1xuICB9XG4gIHJldHVybiByO1xufTtcblxuZXhwb3J0IGNvbnN0IHB1cmUgPSA8VD4oeDogVCk6IFRbXSA9PiBbIHggXTtcblxuZXhwb3J0IGNvbnN0IHNvcnQgPSA8VD4oeHM6IEFycmF5TGlrZTxUPiwgY29tcGFyYXRvcj86IENvbXBhcmF0b3I8VD4pOiBUW10gPT4ge1xuICBjb25zdCBjb3B5OiBUW10gPSBuYXRpdmVTbGljZS5jYWxsKHhzLCAwKTtcbiAgY29weS5zb3J0KGNvbXBhcmF0b3IpO1xuICByZXR1cm4gY29weTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXQgPSA8VD4oeHM6IEFycmF5TGlrZTxUPiwgaTogbnVtYmVyKTogT3B0aW9uYWw8VD4gPT4gaSA+PSAwICYmIGkgPCB4cy5sZW5ndGggPyBPcHRpb25hbC5zb21lKHhzW2ldKSA6IE9wdGlvbmFsLm5vbmUoKTtcblxuZXhwb3J0IGNvbnN0IGhlYWQgPSA8VD4oeHM6IEFycmF5TGlrZTxUPik6IE9wdGlvbmFsPFQ+ID0+IGdldCh4cywgMCk7XG5cbmV4cG9ydCBjb25zdCBsYXN0ID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4pOiBPcHRpb25hbDxUPiA9PiBnZXQoeHMsIHhzLmxlbmd0aCAtIDEpO1xuXG5leHBvcnQgY29uc3QgZnJvbTogPFQ+KHg6IEFycmF5TGlrZTxUPikgPT4gVFtdID0gVHlwZS5pc0Z1bmN0aW9uKEFycmF5LmZyb20pID8gQXJyYXkuZnJvbSA6ICh4KSA9PiBuYXRpdmVTbGljZS5jYWxsKHgpO1xuXG5leHBvcnQgY29uc3QgZmluZE1hcCA9IDxBLCBCPihhcnI6IEFycmF5TGlrZTxBPiwgZjogKGE6IEEsIGluZGV4OiBudW1iZXIpID0+IE9wdGlvbmFsPEI+KTogT3B0aW9uYWw8Qj4gPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHIgPSBmKGFycltpXSwgaSk7XG4gICAgaWYgKHIuaXNTb21lKCkpIHtcbiAgICAgIHJldHVybiByO1xuICAgIH1cbiAgfVxuICByZXR1cm4gT3B0aW9uYWwubm9uZTxCPigpO1xufTtcblxuZXhwb3J0IGNvbnN0IHVuaXF1ZSA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCBjb21wYXJhdG9yPzogKGE6IFQsIGI6IFQpID0+IGJvb2xlYW4pOiBUW10gPT4ge1xuICBjb25zdCByOiBUW10gPSBbXTtcblxuICBjb25zdCBpc0R1cGxpY2F0ZWQgPSBUeXBlLmlzRnVuY3Rpb24oY29tcGFyYXRvcikgP1xuICAgICh4OiBUKSA9PiBleGlzdHMociwgKGkpID0+IGNvbXBhcmF0b3IoaSwgeCkpIDpcbiAgICAoeDogVCkgPT4gY29udGFpbnMociwgeCk7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHhzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIGlmICghaXNEdXBsaWNhdGVkKHgpKSB7XG4gICAgICByLnB1c2goeCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHI7XG59O1xuIiwiZXhwb3J0IGludGVyZmFjZSBDZWxsPFQ+IHtcbiAgcmVhZG9ubHkgZ2V0OiAoKSA9PiBUO1xuICByZWFkb25seSBzZXQ6ICh2YWx1ZTogVCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IENlbGwgPSA8VD4oaW5pdGlhbDogVCk6IENlbGw8VD4gPT4ge1xuICBsZXQgdmFsdWUgPSBpbml0aWFsO1xuXG4gIGNvbnN0IGdldCA9ICgpID0+IHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG5cbiAgY29uc3Qgc2V0ID0gKHY6IFQpID0+IHtcbiAgICB2YWx1ZSA9IHY7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQsXG4gICAgc2V0XG4gIH07XG59O1xuIiwiaW1wb3J0ICogYXMgVHlwZSBmcm9tICcuL1R5cGUnO1xuXG5jb25zdCBub29wOiAoLi4uYXJnczogYW55W10pID0+IHZvaWRcbj0gKCkgPT4geyB9O1xuXG5jb25zdCBub2FyZzogPFQ+KGY6ICgpID0+IFQpID0+ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZFxuPSAoZikgPT4gKCkgPT4gZigpO1xuXG4vKiogQ29tcG9zZSBhIHVuYXJ5IGZ1bmN0aW9uIHdpdGggYW4gbi1hcnkgZnVuY3Rpb24gKi9cbmNvbnN0IGNvbXBvc2UgPSA8VCBleHRlbmRzIGFueVtdLCBVLCBWPihmYTogKHY6IFUpID0+IFYsIGZiOiAoLi4ueDogVCkgPT4gVSk6ICguLi54OiBUKSA9PiBWID0+IHtcbiAgcmV0dXJuICguLi5hcmdzOiBUKSA9PiB7XG4gICAgcmV0dXJuIGZhKGZiLmFwcGx5KG51bGwsIGFyZ3MpKTtcbiAgfTtcbn07XG5cbi8qKiBDb21wb3NlIHR3byB1bmFyeSBmdW5jdGlvbnMuIFNpbWlsYXIgdG8gY29tcG9zZSwgYnV0IGF2b2lkcyB1c2luZyBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuICovXG5jb25zdCBjb21wb3NlMSA9IDxBLCBCLCBDPiAoZmJjOiAoYjogQikgPT4gQywgZmFiOiAoYTogQSkgPT4gQikgPT4gKGE6IEEpOiBDID0+XG4gIGZiYyhmYWIoYSkpO1xuXG5jb25zdCBjb25zdGFudCA9IDxUPih2YWx1ZTogVCk6ICgpID0+IFQgPT4ge1xuICByZXR1cm4gKCkgPT4ge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcbn07XG5cbmNvbnN0IGlkZW50aXR5ID0gPFQgPSBhbnk+KHg6IFQpOiBUID0+IHtcbiAgcmV0dXJuIHg7XG59O1xuXG5jb25zdCB0cmlwbGVFcXVhbHMgPSA8VD4oYTogVCwgYjogVCk6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gYSA9PT0gYjtcbn07XG5cbmZ1bmN0aW9uIGN1cnJ5IDxSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8QSwgUkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoYTogQSwgLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCwgYTogQSk6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPEEsIEIsIFJFU1QgZXh0ZW5kcyBhbnlbXSwgT1VUPihmbjogKGE6IEEsIGI6IEIsIC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQsIGE6IEEsIGI6IEIpOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVDtcbmZ1bmN0aW9uIGN1cnJ5IDxBLCBCLCBDLCBSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46IChhOiBBLCBiOiBCLCBjOiBDLCAuLi5yZXN0QXJnczogUkVTVCkgPT4gT1VULCBhOiBBLCBiOiBCLCBjOiBDKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8QSwgQiwgQywgRCwgUkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoYTogQSwgYjogQiwgYzogQywgZDogRCwgLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCwgYTogQSwgYjogQiwgYzogQywgZDogRCk6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPEEsIEIsIEMsIEQsIEUsIFJFU1QgZXh0ZW5kcyBhbnlbXSwgT1VUPihmbjogKGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQsIGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUpOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVDtcbmZ1bmN0aW9uIGN1cnJ5IDxBLCBCLCBDLCBELCBFLCBGLCBSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46IChhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCBmOiBGLCAuLi5yZXN0QXJnczogUkVTVCkgPT4gT1VULCBhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCBmOiBGKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8QSwgQiwgQywgRCwgRSwgRiwgRywgUkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgZjogRiwgZzogRywgLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCwgYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgZjogRiwgZzogRyk6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPEEsIEIsIEMsIEQsIEUsIEYsIEcsIEgsIFJFU1QgZXh0ZW5kcyBhbnlbXSwgT1VUPihmbjogKGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIGY6IEYsIGc6IEcsIGg6IEgsIC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQsIGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIGY6IEYsIGc6IEcsIGg6IEgpOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVDtcbmZ1bmN0aW9uIGN1cnJ5IDxBLCBCLCBDLCBELCBFLCBGLCBHLCBILCBJLCBSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46IChhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCBmOiBGLCBnOiBHLCBoOiBILCBpOiBJLCAuLi5yZXN0QXJnczogUkVTVCkgPT4gT1VULCBhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCBmOiBGLCBnOiBHLCBoOiBILCBpOiBJKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8QSwgQiwgQywgRCwgRSwgRiwgRywgSCwgSSwgSiwgUkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgZjogRiwgZzogRywgaDogSCwgaTogSSwgajogSiwgLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCwgYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgZjogRiwgZzogRywgaDogSCwgaTogSSwgajogSik6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPE9VVD4oZm46ICguLi5hbGxBcmdzOiBhbnlbXSkgPT4gT1VULCAuLi5pbml0aWFsQXJnczogYW55W10pOiAoLi4ucmVzdEFyZ3M6IGFueVtdKSA9PiBPVVQge1xuICByZXR1cm4gKC4uLnJlc3RBcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IGFsbCA9IGluaXRpYWxBcmdzLmNvbmNhdChyZXN0QXJncyk7XG4gICAgcmV0dXJuIGZuLmFwcGx5KG51bGwsIGFsbCk7XG4gIH07XG59XG5cbmNvbnN0IG5vdCA9IDxUPihmOiAodDogVCkgPT4gYm9vbGVhbikgPT4gKHQ6IFQpOiBib29sZWFuID0+XG4gICFmKHQpO1xuXG5jb25zdCBkaWUgPSAobXNnOiBzdHJpbmcpID0+IHtcbiAgcmV0dXJuICgpOiBuZXZlciA9PiB7XG4gICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XG4gIH07XG59O1xuXG5jb25zdCBhcHBseSA9IDxUPihmOiAoKSA9PiBUKTogVCA9PiB7XG4gIHJldHVybiBmKCk7XG59O1xuXG5jb25zdCBjYWxsID0gKGY6ICgpID0+IGFueSk6IHZvaWQgPT4ge1xuICBmKCk7XG59O1xuXG5jb25zdCBuZXZlcjogKC4uLmFyZ3M6IGFueVtdKSA9PiBmYWxzZSA9IGNvbnN0YW50PGZhbHNlPihmYWxzZSk7XG5jb25zdCBhbHdheXM6ICguLi5hcmdzOiBhbnlbXSkgPT4gdHJ1ZSA9IGNvbnN0YW50PHRydWU+KHRydWUpO1xuXG4vKiBVc2VkIHRvIHdlYWtlbiB0eXBlcyAqL1xuY29uc3Qgd2Vha2VuID0gPEEsIEIgZXh0ZW5kcyBBPihiOiBCKTogQSA9PiBiO1xuXG50eXBlIEZ1bjxYLCBZPiA9ICh4OiBYKSA9PiBZO1xuY29uc3QgcGlwZToge1xuICA8QSwgQj4oYTogQSwgYWI6IEZ1bjxBLCBCPik6IEI7XG4gIDxBLCBCLCBDPihhOiBBLCBhYjogRnVuPEEsIEI+LCBiYzogRnVuPEIsIEM+KTogQztcbiAgPEEsIEIsIEMsIEQ+KGE6IEEsIGFiOiBGdW48QSwgQj4sIGJjOiBGdW48QiwgQz4sIGNkOiBGdW48QywgRD4pOiBEO1xuICA8QSwgQiwgQywgRCwgRT4oYTogQSwgYWI6IEZ1bjxBLCBCPiwgYmM6IEZ1bjxCLCBDPiwgY2Q6IEZ1bjxDLCBEPiwgZGU6IEZ1bjxELCBFPik6IEU7XG4gIDxBLCBCLCBDLCBELCBFLCBGPihhOiBBLCBhYjogRnVuPEEsIEI+LCBiYzogRnVuPEIsIEM+LCBjZDogRnVuPEMsIEQ+LCBkZTogRnVuPEQsIEU+LCBlZjogRnVuPEUsIEY+KTogRjtcbiAgPEEsIEIsIEMsIEQsIEUsIEYsIEc+KGE6IEEsIGFiOiBGdW48QSwgQj4sIGJjOiBGdW48QiwgQz4sIGNkOiBGdW48QywgRD4sIGRlOiBGdW48RCwgRT4sIGVmOiBGdW48RSwgRj4sIGZnOiBGdW48RiwgRz4pOiBHO1xuICA8QSwgQiwgQywgRCwgRSwgRiwgRywgSD4oYTogQSwgYWI6IEZ1bjxBLCBCPiwgYmM6IEZ1bjxCLCBDPiwgY2Q6IEZ1bjxDLCBEPiwgZGU6IEZ1bjxELCBFPiwgZWY6IEZ1bjxFLCBGPiwgZmc6IEZ1bjxGLCBHPiwgZ2g6IEZ1bjxHLCBIPik6IEg7XG59ID1cbiAgPEEsIEIsIEMsIEQsIEUsIEYsIEcsIEg+KGE6IEEsIGFiOiBGdW48QSwgQj4sIGJjPzogRnVuPEIsIEM+LCBjZD86IEZ1bjxDLCBEPiwgZGU/OiBGdW48RCwgRT4sIGVmPzogRnVuPEUsIEY+LCBmZz86IEZ1bjxGLCBHPiwgZ2g/OiBGdW48RywgSD4pOiBCIHwgQyB8IEQgfCBFIHwgRiB8IEcgfCBIID0+IHtcbiAgICBjb25zdCBiID0gYWIoYSk7XG4gICAgaWYgKFR5cGUuaXNOdWxsYWJsZShiYykpIHtcbiAgICAgIHJldHVybiBiO1xuICAgIH1cblxuICAgIGNvbnN0IGMgPSBiYyhiKTtcbiAgICBpZiAoVHlwZS5pc051bGxhYmxlKGNkKSkge1xuICAgICAgcmV0dXJuIGM7XG4gICAgfVxuXG4gICAgY29uc3QgZCA9IGNkKGMpO1xuICAgIGlmIChUeXBlLmlzTnVsbGFibGUoZGUpKSB7XG4gICAgICByZXR1cm4gZDtcbiAgICB9XG5cbiAgICBjb25zdCBlID0gZGUoZCk7XG4gICAgaWYgKFR5cGUuaXNOdWxsYWJsZShlZikpIHtcbiAgICAgIHJldHVybiBlO1xuICAgIH1cblxuICAgIGNvbnN0IGYgPSBlZihlKTtcbiAgICBpZiAoVHlwZS5pc051bGxhYmxlKGZnKSkge1xuICAgICAgcmV0dXJuIGY7XG4gICAgfVxuXG4gICAgY29uc3QgZyA9IGZnKGYpO1xuICAgIGlmIChUeXBlLmlzTnVsbGFibGUoZ2gpKSB7XG4gICAgICByZXR1cm4gZztcbiAgICB9XG5cbiAgICByZXR1cm4gZ2goZyk7XG4gIH07XG5cbmV4cG9ydCB7XG4gIG5vb3AsXG4gIG5vYXJnLFxuICBjb21wb3NlLFxuICBjb21wb3NlMSxcbiAgY29uc3RhbnQsXG4gIGlkZW50aXR5LFxuICB0cmlwbGVFcXVhbHMsXG4gIGN1cnJ5LFxuICBub3QsXG4gIGRpZSxcbiAgYXBwbHksXG4gIGNhbGwsXG4gIG5ldmVyLFxuICBhbHdheXMsXG4gIHdlYWtlbixcbiAgcGlwZVxufTtcbiIsImltcG9ydCAqIGFzIElkVXRpbHMgZnJvbSAnLi4vdXRpbC9JZFV0aWxzJztcblxuaW1wb3J0ICogYXMgTnVtIGZyb20gJy4vTnVtJztcblxuLyoqXG4gKiBHZW5lcmF0ZSBhIHVuaXF1ZSBpZGVudGlmaWVyLlxuICpcbiAqIFRoZSB1bmlxdWUgcG9ydGlvbiBvZiB0aGUgaWRlbnRpZmllciBvbmx5IGNvbnRhaW5zIGFuIHVuZGVyc2NvcmVcbiAqIGFuZCBkaWdpdHMsIHNvIHRoYXQgaXQgbWF5IHNhZmVseSBiZSB1c2VkIHdpdGhpbiBIVE1MIGF0dHJpYnV0ZXMuXG4gKlxuICogVGhlIGNoYW5jZSBvZiBnZW5lcmF0aW5nIGEgbm9uLXVuaXF1ZSBpZGVudGlmaWVyIGhhcyBiZWVuIG1pbmltaXplZFxuICogYnkgY29tYmluaW5nIHRoZSBjdXJyZW50IHRpbWUsIGEgcmFuZG9tIG51bWJlciBhbmQgYSBvbmUtdXAgY291bnRlci5cbiAqXG4gKiBnZW5lcmF0ZSA6OiBTdHJpbmcgLT4gU3RyaW5nXG4gKi9cbmxldCB1bmlxdWUgPSAwO1xuXG5jb25zdCBnZW5lcmF0ZSA9IChwcmVmaXg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCB0aW1lID0gZGF0ZS5nZXRUaW1lKCk7XG4gIGNvbnN0IHJhbmRvbSA9IE1hdGguZmxvb3IoTnVtLnJhbmRvbSgpICogMTAwMDAwMDAwMCk7XG5cbiAgdW5pcXVlKys7XG5cbiAgcmV0dXJuIHByZWZpeCArICdfJyArIHJhbmRvbSArIHVuaXF1ZSArIFN0cmluZyh0aW1lKTtcbn07XG5cbi8qKlxuICogR2VuZXJhdGUgYSB1dWlkdjQgc3RyaW5nXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggUkZDIDQxMjIgKGh0dHBzOi8vZGF0YXRyYWNrZXIuaWV0Zi5vcmcvZG9jL2h0bWwvcmZjNDEyMilcbiAqL1xuY29uc3QgdXVpZFY0ID0gKCk6IGAke3N0cmluZ30tJHtzdHJpbmd9LSR7c3RyaW5nfS0ke3N0cmluZ30tJHtzdHJpbmd9YCA9PiB7XG5cbiAgaWYgKHdpbmRvdy5pc1NlY3VyZUNvbnRleHQpIHtcbiAgICByZXR1cm4gd2luZG93LmNyeXB0by5yYW5kb21VVUlEKCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIElkVXRpbHMudXVpZFY0U3RyaW5nKCk7XG4gIH1cbn07XG5cbmV4cG9ydCB7XG4gIGdlbmVyYXRlLFxuICB1dWlkVjRcbn07XG4iLCIvKipcbiAqIEFkZHMgdHdvIG51bWJlcnMsIGFuZCB3cmFwIHRvIGEgcmFuZ2UuXG4gKiBJZiB0aGUgcmVzdWx0IG92ZXJmbG93cyB0byB0aGUgcmlnaHQsIHNuYXAgdG8gdGhlIGxlZnQuXG4gKiBJZiB0aGUgcmVzdWx0IG92ZXJmbG93cyB0byB0aGUgbGVmdCwgc25hcCB0byB0aGUgcmlnaHQuXG4gKi9cbmV4cG9ydCBjb25zdCBjeWNsZUJ5ID0gKHZhbHVlOiBudW1iZXIsIGRlbHRhOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciA9PiB7XG4gIGNvbnN0IHIgPSB2YWx1ZSArIGRlbHRhO1xuICBpZiAociA+IG1heCkge1xuICAgIHJldHVybiBtaW47XG4gIH0gZWxzZSBpZiAociA8IG1pbikge1xuICAgIHJldHVybiBtYXg7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHI7XG4gIH1cbn07XG5cbi8vIEFTU1VNUFRJT046IE1heCB3aWxsIGFsd2F5cyBiZSBsYXJnZXIgdGhhbiBtaW5cbmV4cG9ydCBjb25zdCBjbGFtcCA9ICh2YWx1ZTogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIgPT5cbiAgTWF0aC5taW4oTWF0aC5tYXgodmFsdWUsIG1pbiksIG1heCk7XG5cbi8vIHRoZSBkaXZpc2lvbiBpcyBtZWFudCB0byBnZXQgYSBudW1iZXIgYmV0d2VlbiAwIGFuZCAxIGZvciBtb3JlIGluZm9ybWF0aW9uIGNoZWNrIHRoaXMgZGlzY3Vzc2lvbjogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTgyODU5NDEvaG93LXRvLXJlcGxhY2UtbWF0aC1yYW5kb20td2l0aC1jcnlwdG8tZ2V0cmFuZG9tdmFsdWVzLWFuZC1rZWVwLXNhbWUtcmVzdWx0XG5leHBvcnQgY29uc3QgcmFuZG9tID0gKCk6IG51bWJlciA9PiB3aW5kb3cuY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDMyQXJyYXkoMSkpWzBdIC8gNDI5NDk2NzI5NTtcbiIsImltcG9ydCB7IEVxIH0gZnJvbSAnQGVwaG94L2Rpc3B1dGUnO1xuXG5pbXBvcnQgKiBhcyBGdW4gZnJvbSAnLi9GdW4nO1xuaW1wb3J0IHsgT3B0aW9uYWwgfSBmcm9tICcuL09wdGlvbmFsJztcblxudHlwZSBPYmpLZXlzPFQgZXh0ZW5kcyB7fT4gPSBFeHRyYWN0PGtleW9mIFQsIHN0cmluZz47XG50eXBlIE9iakNhbGxiYWNrPFQgZXh0ZW5kcyB7fT4gPSAodmFsdWU6IFRba2V5b2YgVF0sIGtleTogT2JqS2V5czxUPikgPT4gdm9pZDtcbnR5cGUgT2JqTW9ycGhpc208VCBleHRlbmRzIHt9LCBSPiA9ICh2YWx1ZTogVFtrZXlvZiBUXSwga2V5OiBPYmpLZXlzPFQ+KSA9PiBSO1xudHlwZSBPYmpHdWFyZFByZWRpY2F0ZTxUIGV4dGVuZHMge30sIFUgZXh0ZW5kcyBUW2tleW9mIFRdPiA9ICh2YWx1ZTogVFtrZXlvZiBUXSwga2V5OiBPYmpLZXlzPFQ+KSA9PiB2YWx1ZSBpcyBVO1xudHlwZSBPYmpQcmVkaWNhdGU8VCBleHRlbmRzIHt9PiA9ICh2YWx1ZTogVFtrZXlvZiBUXSwga2V5OiBPYmpLZXlzPFQ+KSA9PiBib29sZWFuO1xuXG4vLyBUaGVyZSBhcmUgbWFueSB2YXJpYXRpb25zIG9mIE9iamVjdCBpdGVyYXRpb24gdGhhdCBhcmUgZmFzdGVyIHRoYW4gdGhlICdmb3ItaW4nIHN0eWxlOlxuLy8gaHR0cDovL2pzcGVyZi5jb20vb2JqZWN0LWtleXMtaXRlcmF0aW9uLzEwN1xuLy9cbi8vIFVzZSB0aGUgbmF0aXZlIGtleXMgaWYgaXQgaXMgYXZhaWxhYmxlIChJRTkrKSwgb3RoZXJ3aXNlIGZhbGwgYmFjayB0byBtYW51YWxseSBmaWx0ZXJpbmdcbmV4cG9ydCBjb25zdCBrZXlzID0gT2JqZWN0LmtleXM7XG5cbmV4cG9ydCBjb25zdCBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5oYXNPd25Qcm9wZXJ0eTtcblxuZXhwb3J0IGNvbnN0IGVhY2ggPSA8VCBleHRlbmRzIHt9PihvYmo6IFQsIGY6IE9iakNhbGxiYWNrPFQ+KTogdm9pZCA9PiB7XG4gIGNvbnN0IHByb3BzID0ga2V5cyhvYmopIGFzIEFycmF5PE9iaktleXM8VD4+O1xuICBmb3IgKGxldCBrID0gMCwgbGVuID0gcHJvcHMubGVuZ3RoOyBrIDwgbGVuOyBrKyspIHtcbiAgICBjb25zdCBpID0gcHJvcHNba107XG4gICAgY29uc3QgeCA9IG9ialtpXTtcbiAgICBmKHgsIGkpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgbWFwID0gPFQgZXh0ZW5kcyB7fSwgUj4ob2JqOiBULCBmOiBPYmpNb3JwaGlzbTxULCBSPik6IHsgW2sgaW4ga2V5b2YgVF06IFIgfSA9PiB7XG4gIHJldHVybiB0dXBsZU1hcDx7IFtrIGluIGtleW9mIFRdOiBSIH0sIFQ+KG9iaiwgKHgsIGkpID0+ICh7XG4gICAgazogaSxcbiAgICB2OiBmKHgsIGkpXG4gIH0pKTtcbn07XG5cbmV4cG9ydCBjb25zdCB0dXBsZU1hcCA9IDxSIGV4dGVuZHMge30sIFQgZXh0ZW5kcyB7fT4ob2JqOiBULCBmOiBPYmpNb3JwaGlzbTxULCB7IGs6IGtleW9mIFI7IHY6IFJba2V5b2YgUl0gfT4pOiBSID0+IHtcbiAgY29uc3QgciA9IHt9IGFzIFI7XG4gIGVhY2gob2JqLCAoeCwgaSkgPT4ge1xuICAgIGNvbnN0IHR1cGxlID0gZih4LCBpKTtcbiAgICByW3R1cGxlLmtdID0gdHVwbGUudjtcbiAgfSk7XG4gIHJldHVybiByO1xufTtcblxuY29uc3Qgb2JqQWNjID0gPFQgZXh0ZW5kcyB7fT4ocjogVCkgPT4gKHg6IFRba2V5b2YgVF0sIGk6IGtleW9mIFQpOiB2b2lkID0+IHtcbiAgcltpXSA9IHg7XG59O1xuXG5jb25zdCBpbnRlcm5hbEZpbHRlciA9IDxUIGV4dGVuZHMge30+KG9iajogVCwgcHJlZDogT2JqUHJlZGljYXRlPFQ+LCBvblRydWU6IE9iakNhbGxiYWNrPFQ+LCBvbkZhbHNlOiBPYmpDYWxsYmFjazxUPikgPT4ge1xuICBlYWNoKG9iaiwgKHgsIGkpID0+IHtcbiAgICAocHJlZCh4LCBpKSA/IG9uVHJ1ZSA6IG9uRmFsc2UpKHgsIGkpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBiaWZpbHRlciA9IDxUIGV4dGVuZHMge30+KG9iajogVCwgcHJlZDogT2JqUHJlZGljYXRlPFQ+KTogeyB0OiBSZWNvcmQ8c3RyaW5nLCBUW2tleW9mIFRdPjsgZjogUmVjb3JkPHN0cmluZywgVFtrZXlvZiBUXT4gfSA9PiB7XG4gIGNvbnN0IHQ6IFJlY29yZDxzdHJpbmcsIFRba2V5b2YgVF0+ID0ge307XG4gIGNvbnN0IGY6IFJlY29yZDxzdHJpbmcsIFRba2V5b2YgVF0+ID0ge307XG4gIGludGVybmFsRmlsdGVyKG9iaiwgcHJlZCwgb2JqQWNjKHQpLCBvYmpBY2MoZikpO1xuICByZXR1cm4geyB0LCBmIH07XG59O1xuXG5leHBvcnQgY29uc3QgZmlsdGVyOiB7XG4gIDxUIGV4dGVuZHMge30sIFUgZXh0ZW5kcyBUW2tleW9mIFRdPihvYmo6IFQsIHByZWQ6IE9iakd1YXJkUHJlZGljYXRlPFQsIFU+KTogUmVjb3JkPHN0cmluZywgVT47XG4gIDxUIGV4dGVuZHMge30+KG9iajogVCwgcHJlZDogT2JqUHJlZGljYXRlPFQ+KTogUmVjb3JkPHN0cmluZywgVFtrZXlvZiBUXT47XG59ID0gPFQgZXh0ZW5kcyB7fT4ob2JqOiBULCBwcmVkOiBPYmpQcmVkaWNhdGU8VD4pOiBSZWNvcmQ8c3RyaW5nLCBUW2tleW9mIFRdPiA9PiB7XG4gIGNvbnN0IHQ6IFJlY29yZDxzdHJpbmcsIFRba2V5b2YgVF0+ID0ge307XG4gIGludGVybmFsRmlsdGVyKG9iaiwgcHJlZCwgb2JqQWNjKHQpLCBGdW4ubm9vcCk7XG4gIHJldHVybiB0O1xufTtcblxuZXhwb3J0IGNvbnN0IG1hcFRvQXJyYXkgPSA8VCBleHRlbmRzIHt9LCBSPihvYmo6IFQsIGY6IE9iak1vcnBoaXNtPFQsIFI+KTogUltdID0+IHtcbiAgY29uc3QgcjogUltdID0gW107XG4gIGVhY2gob2JqLCAodmFsdWUsIG5hbWUpID0+IHtcbiAgICByLnB1c2goZih2YWx1ZSwgbmFtZSkpO1xuICB9KTtcbiAgcmV0dXJuIHI7XG59O1xuXG5leHBvcnQgY29uc3QgZmluZCA9IDxUIGV4dGVuZHMge30+KG9iajogVCwgcHJlZDogKHZhbHVlOiBUW2tleW9mIFRdLCBrZXk6IE9iaktleXM8VD4sIG9iajogVCkgPT4gYm9vbGVhbik6IE9wdGlvbmFsPFRba2V5b2YgVF0+ID0+IHtcbiAgY29uc3QgcHJvcHMgPSBrZXlzKG9iaikgYXMgQXJyYXk8T2JqS2V5czxUPj47XG4gIGZvciAobGV0IGsgPSAwLCBsZW4gPSBwcm9wcy5sZW5ndGg7IGsgPCBsZW47IGsrKykge1xuICAgIGNvbnN0IGkgPSBwcm9wc1trXTtcbiAgICBjb25zdCB4ID0gb2JqW2ldO1xuICAgIGlmIChwcmVkKHgsIGksIG9iaikpIHtcbiAgICAgIHJldHVybiBPcHRpb25hbC5zb21lKHgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gT3B0aW9uYWwubm9uZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IHZhbHVlcyA9IDxUIGV4dGVuZHMge30+KG9iajogVCk6IEFycmF5PFRba2V5b2YgVF0+ID0+IHtcbiAgcmV0dXJuIG1hcFRvQXJyYXkob2JqLCBGdW4uaWRlbnRpdHkpO1xufTtcblxuZXhwb3J0IGNvbnN0IHNpemUgPSAob2JqOiB7fSk6IG51bWJlciA9PiB7XG4gIHJldHVybiBrZXlzKG9iaikubGVuZ3RoO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldCA9IDxUIGV4dGVuZHMge30sIEsgZXh0ZW5kcyBrZXlvZiBUPihvYmo6IFQsIGtleTogSyk6IE9wdGlvbmFsPE5vbk51bGxhYmxlPFRbS10+PiA9PiB7XG4gIHJldHVybiBoYXMob2JqLCBrZXkpID8gT3B0aW9uYWwuZnJvbShvYmpba2V5XSBhcyBOb25OdWxsYWJsZTxUW0tdPikgOiBPcHRpb25hbC5ub25lKCk7XG59O1xuXG5leHBvcnQgY29uc3QgaGFzID0gPFQgZXh0ZW5kcyB7fSwgSyBleHRlbmRzIGtleW9mIFQ+KG9iajogVCwga2V5OiBLKTogYm9vbGVhbiA9PlxuICBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KTtcblxuZXhwb3J0IGNvbnN0IGhhc05vbk51bGxhYmxlS2V5ID0gPFQgZXh0ZW5kcyB7fSwgSyBleHRlbmRzIGtleW9mIFQ+KG9iajogVCwga2V5OiBLKTogb2JqIGlzIFQgJiBSZWNvcmQ8SywgTm9uTnVsbGFibGU8VFtLXT4+ID0+XG4gIGhhcyhvYmosIGtleSkgJiYgb2JqW2tleV0gIT09IHVuZGVmaW5lZCAmJiBvYmpba2V5XSAhPT0gbnVsbDtcblxuZXhwb3J0IGNvbnN0IGlzRW1wdHkgPSAocjogUmVjb3JkPGFueSwgYW55Pik6IHIgaXMge30gPT4ge1xuICBmb3IgKGNvbnN0IHggaW4gcikge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHIsIHgpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxuZXhwb3J0IGNvbnN0IGVxdWFsID0gPFQ+KGExOiBSZWNvcmQ8c3RyaW5nLCBUPiwgYTI6IFJlY29yZDxzdHJpbmcsIFQ+LCBlcTogRXEuRXE8VD4gPSBFcS5lcUFueSk6IGJvb2xlYW4gPT5cbiAgRXEuZXFSZWNvcmQoZXEpLmVxKGExLCBhMik7XG4iLCJpbXBvcnQgKiBhcyBUeXBlIGZyb20gJy4vVHlwZSc7XG5cbi8qKlxuICogVGhlIGBPcHRpb25hbGAgdHlwZSByZXByZXNlbnRzIGEgdmFsdWUgKG9mIGFueSB0eXBlKSB0aGF0IHBvdGVudGlhbGx5IGRvZXNcbiAqIG5vdCBleGlzdC4gQW55IGBPcHRpb25hbDxUPmAgY2FuIGVpdGhlciBiZSBhIGBTb21lPFQ+YCAoaW4gd2hpY2ggY2FzZSB0aGVcbiAqIHZhbHVlIGRvZXMgZXhpc3QpIG9yIGEgYE5vbmVgIChpbiB3aGljaCBjYXNlIHRoZSB2YWx1ZSBkb2VzIG5vdCBleGlzdCkuIFRoaXNcbiAqIG1vZHVsZSBkZWZpbmVzIGEgd2hvbGUgbG90IG9mIEZQLWluc3BpcmVkIHV0aWxpdHkgZnVuY3Rpb25zIGZvciBkZWFsaW5nIHdpdGhcbiAqIGBPcHRpb25hbGAgb2JqZWN0cy5cbiAqXG4gKiBDb21wYXJpc29uIHdpdGggbnVsbCBvciB1bmRlZmluZWQ6XG4gKiAtIFdlIGRvbid0IGdldCBmYW5jeSBudWxsIGNvYWxlc2Npbmcgb3BlcmF0b3JzIHdpdGggYE9wdGlvbmFsYFxuICogLSBXZSBkbyBnZXQgZmFuY3kgaGVscGVyIGZ1bmN0aW9ucyB3aXRoIGBPcHRpb25hbGBcbiAqIC0gYE9wdGlvbmFsYCBzdXBwb3J0IG5lc3RpbmcsIGFuZCBhbGxvdyBmb3IgdGhlIHR5cGUgdG8gc3RpbGwgYmUgbnVsbGFibGUgKG9yXG4gKiBhbm90aGVyIGBPcHRpb25hbGApXG4gKiAtIFRoZXJlIGlzIG5vIG9wdGlvbiB0byB0dXJuIG9mZiBzdHJpY3Qtb3B0aW9uYWwtY2hlY2tzIGxpa2UgdGhlcmUgaXMgZm9yXG4gKiBzdHJpY3QtbnVsbC1jaGVja3NcbiAqL1xuZXhwb3J0IGNsYXNzIE9wdGlvbmFsPFQ+IHtcbiAgcHJpdmF0ZSByZWFkb25seSB0YWc6IGJvb2xlYW47XG4gIHByaXZhdGUgcmVhZG9ubHkgdmFsdWU/OiBUO1xuXG4gIC8vIFNuZWFreSBvcHRpbWlzYXRpb246IGV2ZXJ5IGluc3RhbmNlIG9mIE9wdGlvbmFsLm5vbmUgaXMgaWRlbnRpY2FsLCBzbyBqdXN0XG4gIC8vIHJldXNlIHRoZSBzYW1lIG9iamVjdFxuICBwcml2YXRlIHN0YXRpYyBzaW5nbGV0b25Ob25lID0gbmV3IE9wdGlvbmFsPGFueT4oZmFsc2UpO1xuXG4gIC8vIFRoZSBpbnRlcm5hbCByZXByZXNlbnRhdGlvbiBoYXMgYSBgdGFnYCBhbmQgYSBgdmFsdWVgLCBidXQgYm90aCBhcmVcbiAgLy8gcHJpdmF0ZTogYWJsZSB0byBiZSBjb25zb2xlLmxvZ2dlZCwgYnV0IG5vdCBhYmxlIHRvIGJlIGFjY2Vzc2VkIGJ5IGNvZGVcbiAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcih0YWc6IGJvb2xlYW4sIHZhbHVlPzogVCkge1xuICAgIHRoaXMudGFnID0gdGFnO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIC8vIC0tLSBJZGVudGl0aWVzIC0tLVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGBPcHRpb25hbDxUPmAgdGhhdCAqKmRvZXMqKiBjb250YWluIGEgdmFsdWUuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHNvbWU8VD4odGhpczogdm9pZCwgdmFsdWU6IFQpOiBPcHRpb25hbDxUPiB7XG4gICAgcmV0dXJuIG5ldyBPcHRpb25hbCh0cnVlLCB2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGBPcHRpb25hbDxUPmAgdGhhdCAqKmRvZXMgbm90KiogY29udGFpbiBhIHZhbHVlLiBgVGAgY2FuIGJlXG4gICAqIGFueSB0eXBlIGJlY2F1c2Ugd2UgZG9uJ3QgYWN0dWFsbHkgaGF2ZSBhIGBUYC5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgbm9uZTxUID0gbmV2ZXI+KHRoaXM6IHZvaWQpOiBPcHRpb25hbDxUPiB7XG4gICAgcmV0dXJuIE9wdGlvbmFsLnNpbmdsZXRvbk5vbmU7XG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybSBhIHRyYW5zZm9ybSBvbiBhbiBgT3B0aW9uYWxgIHR5cGUuIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzXG4gICAqIGBPcHRpb25hbGAgY29udGFpbnMgYSB2YWx1ZSBvciBub3QsIGBmb2xkYCB3aWxsIHJldHVybiBhIHZhbHVlIG9mIHR5cGUgYFVgLlxuICAgKiBJZiB0aGlzIGBPcHRpb25hbGAgZG9lcyBub3QgY29udGFpbiBhIHZhbHVlLCB0aGUgYFVgIHdpbGwgYmUgY3JlYXRlZCBieVxuICAgKiBjYWxsaW5nIGBvbk5vbmVgLiBJZiB0aGlzIGBPcHRpb25hbGAgZG9lcyBjb250YWluIGEgdmFsdWUsIHRoZSBgVWAgd2lsbCBiZVxuICAgKiBjcmVhdGVkIGJ5IGNhbGxpbmcgYG9uU29tZWAuXG4gICAqXG4gICAqIEZvciB0aGUgRlAgZW50aHVzaWFzdHMgaW4gdGhlIHJvb20sIHRoaXMgZnVuY3Rpb246XG4gICAqIDEuIENvdWxkIGJlIHVzZWQgdG8gaW1wbGVtZW50IGFsbCBvZiB0aGUgZnVuY3Rpb25zIGJlbG93XG4gICAqIDIuIEZvcm1zIGEgY2F0YW1vcnBoaXNtXG4gICAqL1xuICBwdWJsaWMgZm9sZDxVPihvbk5vbmU6ICgpID0+IFUsIG9uU29tZTogKHZhbHVlOiBUKSA9PiBVKTogVSB7XG4gICAgaWYgKHRoaXMudGFnKSB7XG4gICAgICByZXR1cm4gb25Tb21lKHRoaXMudmFsdWUgYXMgVCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvbk5vbmUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIGlmIHRoaXMgYE9wdGlvbmFsYCBvYmplY3QgY29udGFpbnMgYSB2YWx1ZS5cbiAgICovXG4gIHB1YmxpYyBpc1NvbWUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudGFnO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBpZiB0aGlzIGBPcHRpb25hbGAgb2JqZWN0ICoqZG9lcyBub3QqKiBjb250YWluIGEgdmFsdWUuXG4gICAqL1xuICBwdWJsaWMgaXNOb25lKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy50YWc7XG4gIH1cblxuICAvLyAtLS0gRnVuY3RvciAobmFtZSBzdG9sZW4gZnJvbSBIYXNrZWxsIC8gbWF0aHMpIC0tLVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtIGEgdHJhbnNmb3JtIG9uIGFuIGBPcHRpb25hbGAgb2JqZWN0LCAqKmlmKiogdGhlcmUgaXMgYSB2YWx1ZS4gSWZcbiAgICogeW91IHByb3ZpZGUgYSBmdW5jdGlvbiB0byB0dXJuIGEgVCBpbnRvIGEgVSwgdGhpcyBpcyB0aGUgZnVuY3Rpb24geW91IHVzZVxuICAgKiB0byB0dXJuIGFuIGBPcHRpb25hbDxUPmAgaW50byBhbiBgT3B0aW9uYWw8VT5gLiBJZiB0aGlzICoqZG9lcyoqIGNvbnRhaW5cbiAgICogYSB2YWx1ZSB0aGVuIHRoZSBvdXRwdXQgd2lsbCBhbHNvIGNvbnRhaW4gYSB2YWx1ZSAodGhhdCB2YWx1ZSBiZWluZyB0aGVcbiAgICogb3V0cHV0IG9mIGBtYXBwZXIodGhpcy52YWx1ZSlgKSwgYW5kIGlmIHRoaXMgKipkb2VzIG5vdCoqIGNvbnRhaW4gYSB2YWx1ZVxuICAgKiB0aGVuIG5laXRoZXIgd2lsbCB0aGUgb3V0cHV0LlxuICAgKi9cbiAgcHVibGljIG1hcDxVPihtYXBwZXI6ICh2YWx1ZTogVCkgPT4gVSk6IE9wdGlvbmFsPFU+IHtcbiAgICBpZiAodGhpcy50YWcpIHtcbiAgICAgIHJldHVybiBPcHRpb25hbC5zb21lKG1hcHBlcih0aGlzLnZhbHVlIGFzIFQpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIE9wdGlvbmFsLm5vbmUoKTtcbiAgICB9XG4gIH1cblxuICAvLyAtLS0gTW9uYWQgKG5hbWUgc3RvbGVuIGZyb20gSGFza2VsbCAvIG1hdGhzKSAtLS1cblxuICAvKipcbiAgICogUGVyZm9ybSBhIHRyYW5zZm9ybSBvbiBhbiBgT3B0aW9uYWxgIG9iamVjdCwgKippZioqIHRoZXJlIGlzIGEgdmFsdWUuXG4gICAqIFVubGlrZSBgbWFwYCwgaGVyZSB0aGUgdHJhbnNmb3JtIGl0c2VsZiBhbHNvIHJldHVybnMgYW4gYE9wdGlvbmFsYC5cbiAgICovXG4gIHB1YmxpYyBiaW5kPFU+KGJpbmRlcjogKHZhbHVlOiBUKSA9PiBPcHRpb25hbDxVPik6IE9wdGlvbmFsPFU+IHtcbiAgICBpZiAodGhpcy50YWcpIHtcbiAgICAgIHJldHVybiBiaW5kZXIodGhpcy52YWx1ZSBhcyBUKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIE9wdGlvbmFsLm5vbmUoKTtcbiAgICB9XG4gIH1cblxuICAvLyAtLS0gVHJhdmVyc2FibGUgKG5hbWUgc3RvbGVuIGZyb20gSGFza2VsbCAvIG1hdGhzKSAtLS1cblxuICAvKipcbiAgICogRm9yIGEgZ2l2ZW4gcHJlZGljYXRlLCB0aGlzIGZ1bmN0aW9uIGZpbmRzIG91dCBpZiB0aGVyZSAqKmV4aXN0cyoqIGEgdmFsdWVcbiAgICogaW5zaWRlIHRoaXMgYE9wdGlvbmFsYCBvYmplY3QgdGhhdCBtZWV0cyB0aGUgcHJlZGljYXRlLiBJbiBwcmFjdGljZSwgdGhpc1xuICAgKiBtZWFucyB0aGF0IGZvciBgT3B0aW9uYWxgcyB0aGF0IGRvIG5vdCBjb250YWluIGEgdmFsdWUgaXQgcmV0dXJucyBmYWxzZSAoYXNcbiAgICogbm8gcHJlZGljYXRlLW1lZXRpbmcgdmFsdWUgZXhpc3RzKS5cbiAgICovXG4gIHB1YmxpYyBleGlzdHMocHJlZGljYXRlOiAodmFsdWU6IFQpID0+IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50YWcgJiYgcHJlZGljYXRlKHRoaXMudmFsdWUgYXMgVCk7XG4gIH1cblxuICAvKipcbiAgICogRm9yIGEgZ2l2ZW4gcHJlZGljYXRlLCB0aGlzIGZ1bmN0aW9uIGZpbmRzIG91dCBpZiAqKmFsbCoqIHRoZSB2YWx1ZXMgaW5zaWRlXG4gICAqIHRoaXMgYE9wdGlvbmFsYCBvYmplY3QgbWVldCB0aGUgcHJlZGljYXRlLiBJbiBwcmFjdGljZSwgdGhpcyBtZWFucyB0aGF0XG4gICAqIGZvciBgT3B0aW9uYWxgcyB0aGF0IGRvIG5vdCBjb250YWluIGEgdmFsdWUgaXQgcmV0dXJucyB0cnVlIChhcyBhbGwgMFxuICAgKiBvYmplY3RzIGRvIG1lZXQgdGhlIHByZWRpY2F0ZSkuXG4gICAqL1xuICBwdWJsaWMgZm9yYWxsKHByZWRpY2F0ZTogKHZhbHVlOiBUKSA9PiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLnRhZyB8fCBwcmVkaWNhdGUodGhpcy52YWx1ZSBhcyBUKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3IgYSBnaXZlbiBwcmVkaWNhdGUsIGNyZWF0ZSBhIG5ldyBgT3B0aW9uYWxgIG9iamVjdCB0aGF0IHdpbGwgcmV0YWluXG4gICAqIGFsbCB0aGUgdmFsdWVzIGluc2lkZSB0aGUgb2xkIGBPcHRpb25hbGAgb2JqZWN0IHRoYXQgbWVldCB0aGUgcHJlZGljYXRlLlxuICAgKiBJbiBwcmFjdGljZSwgdGhlIGBPcHRpb25hbGAgb2JqZWN0IGNvbnRhaW5zIGVpdGhlciAwIG9yIDEgb2JqZWN0cywgYW5kXG4gICAqIHRoZSBvdXRwdXQgd2lsbCBrZWVwIHRoZSAoc2luZ2xlKSBpbnB1dCBvYmplY3QgKGlmIGl0IGV4aXN0cykgYXMgbG9uZyBhc1xuICAgKiBpdCBwYXNzZXMgdGhlIHByZWRpY2F0ZS5cbiAgICovXG4gIHB1YmxpYyBmaWx0ZXI8VSBleHRlbmRzIFQ+KHByZWRpY2F0ZTogKHZhbHVlOiBUKSA9PiB2YWx1ZSBpcyBVKTogT3B0aW9uYWw8VT47XG4gIHB1YmxpYyBmaWx0ZXIocHJlZGljYXRlOiAodmFsdWU6IFQpID0+IGJvb2xlYW4pOiBPcHRpb25hbDxUPjtcbiAgcHVibGljIGZpbHRlcihwcmVkaWNhdGU6ICh2YWx1ZTogVCkgPT4gYm9vbGVhbik6IE9wdGlvbmFsPFQ+IHtcbiAgICBpZiAoIXRoaXMudGFnIHx8IHByZWRpY2F0ZSh0aGlzLnZhbHVlIGFzIFQpKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIE9wdGlvbmFsLm5vbmUoKTtcbiAgICB9XG4gIH1cblxuICAvLyAtLS0gR2V0dGVycyAtLS1cblxuICAvKipcbiAgICogR2V0IHRoZSB2YWx1ZSBvdXQgb2YgdGhlIGluc2lkZSBvZiB0aGUgYE9wdGlvbmFsYCBvYmplY3QsIHVzaW5nIGEgZGVmYXVsdFxuICAgKiBgcmVwbGFjZW1lbnRgIHZhbHVlIGlmIHRoZSBwcm92aWRlZCBgT3B0aW9uYWxgIG9iamVjdCBkb2VzIG5vdCBjb250YWluIGFcbiAgICogdmFsdWUuXG4gICAqL1xuICBwdWJsaWMgZ2V0T3I8VSA9IFQ+KHJlcGxhY2VtZW50OiBVKTogVCB8IFUge1xuICAgIHJldHVybiB0aGlzLnRhZyA/IHRoaXMudmFsdWUgYXMgVCA6IHJlcGxhY2VtZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdmFsdWUgb3V0IG9mIHRoZSBpbnNpZGUgb2YgdGhlIGBPcHRpb25hbGAgb2JqZWN0LCB1c2luZyBhIGRlZmF1bHRcbiAgICogYHJlcGxhY2VtZW50YCB2YWx1ZSBpZiB0aGUgcHJvdmlkZWQgYE9wdGlvbmFsYCBvYmplY3QgZG9lcyBub3QgY29udGFpbiBhXG4gICAqIHZhbHVlLiAgVW5saWtlIGBnZXRPcmAsIGluIHRoaXMgbWV0aG9kIHRoZSBgcmVwbGFjZW1lbnRgIG9iamVjdCBpcyBhbHNvXG4gICAqIGBPcHRpb25hbGAgLSBtZWFuaW5nIHRoYXQgdGhpcyBtZXRob2Qgd2lsbCBhbHdheXMgcmV0dXJuIGFuIGBPcHRpb25hbGAuXG4gICAqL1xuICBwdWJsaWMgb3I8VSA9IFQ+KHJlcGxhY2VtZW50OiBPcHRpb25hbDxVPik6IE9wdGlvbmFsPFQgfCBVPiB7XG4gICAgcmV0dXJuIHRoaXMudGFnID8gdGhpcyA6IHJlcGxhY2VtZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdmFsdWUgb3V0IG9mIHRoZSBpbnNpZGUgb2YgdGhlIGBPcHRpb25hbGAgb2JqZWN0LCB1c2luZyBhIGRlZmF1bHRcbiAgICogYHJlcGxhY2VtZW50YCB2YWx1ZSBpZiB0aGUgcHJvdmlkZWQgYE9wdGlvbmFsYCBvYmplY3QgZG9lcyBub3QgY29udGFpbiBhXG4gICAqIHZhbHVlLiBVbmxpa2UgYGdldE9yYCwgaW4gdGhpcyBtZXRob2QgdGhlIGByZXBsYWNlbWVudGAgdmFsdWUgaXNcbiAgICogXCJ0aHVua2VkXCIgLSB0aGF0IGlzIHRvIHNheSB0aGF0IHlvdSBkb24ndCBwYXNzIGEgdmFsdWUgdG8gYGdldE9yVGh1bmtgLCB5b3VcbiAgICogcGFzcyBhIGZ1bmN0aW9uIHdoaWNoIChpZiBjYWxsZWQpIHdpbGwgKipyZXR1cm4qKiB0aGUgYHZhbHVlYCB5b3Ugd2FudCB0b1xuICAgKiB1c2UuXG4gICAqL1xuICBwdWJsaWMgZ2V0T3JUaHVuazxVID0gVD4odGh1bms6ICgpID0+IFUpOiBUIHwgVSB7XG4gICAgcmV0dXJuIHRoaXMudGFnID8gdGhpcy52YWx1ZSBhcyBUIDogdGh1bmsoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHZhbHVlIG91dCBvZiB0aGUgaW5zaWRlIG9mIHRoZSBgT3B0aW9uYWxgIG9iamVjdCwgdXNpbmcgYSBkZWZhdWx0XG4gICAqIGByZXBsYWNlbWVudGAgdmFsdWUgaWYgdGhlIHByb3ZpZGVkIE9wdGlvbmFsIG9iamVjdCBkb2VzIG5vdCBjb250YWluIGFcbiAgICogdmFsdWUuXG4gICAqXG4gICAqIFVubGlrZSBgb3JgLCBpbiB0aGlzIG1ldGhvZCB0aGUgYHJlcGxhY2VtZW50YCB2YWx1ZSBpcyBcInRodW5rZWRcIiAtIHRoYXQgaXNcbiAgICogdG8gc2F5IHRoYXQgeW91IGRvbid0IHBhc3MgYSB2YWx1ZSB0byBgb3JUaHVua2AsIHlvdSBwYXNzIGEgZnVuY3Rpb24gd2hpY2hcbiAgICogKGlmIGNhbGxlZCkgd2lsbCAqKnJldHVybioqIHRoZSBgdmFsdWVgIHlvdSB3YW50IHRvIHVzZS5cbiAgICpcbiAgICogVW5saWtlIGBnZXRPclRodW5rYCwgaW4gdGhpcyBtZXRob2QgdGhlIGByZXBsYWNlbWVudGAgdmFsdWUgaXMgYWxzb1xuICAgKiBgT3B0aW9uYWxgLCBtZWFuaW5nIHRoYXQgdGhpcyBtZXRob2Qgd2lsbCBhbHdheXMgcmV0dXJuIGFuIGBPcHRpb25hbGAuXG4gICAqL1xuICBwdWJsaWMgb3JUaHVuazxVID0gVD4odGh1bms6ICgpID0+IE9wdGlvbmFsPFU+KTogT3B0aW9uYWw8VCB8IFU+IHtcbiAgICByZXR1cm4gdGhpcy50YWcgPyB0aGlzIDogdGh1bmsoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHZhbHVlIG91dCBvZiB0aGUgaW5zaWRlIG9mIHRoZSBgT3B0aW9uYWxgIG9iamVjdCwgdGhyb3dpbmcgYW5cbiAgICogZXhjZXB0aW9uIGlmIHRoZSBwcm92aWRlZCBgT3B0aW9uYWxgIG9iamVjdCBkb2VzIG5vdCBjb250YWluIGEgdmFsdWUuXG4gICAqXG4gICAqIFdBUk5JTkc6XG4gICAqIFlvdSBzaG91bGQgb25seSBiZSB1c2luZyB0aGlzIGZ1bmN0aW9uIGlmIHlvdSBrbm93IHRoYXQgdGhlIGBPcHRpb25hbGBcbiAgICogb2JqZWN0ICoqaXMgbm90KiogZW1wdHkgKG90aGVyd2lzZSB5b3UncmUgdGhyb3dpbmcgZXhjZXB0aW9ucyBpbiBwcm9kdWN0aW9uXG4gICAqIGNvZGUsIHdoaWNoIGlzIGJhZCkuXG4gICAqXG4gICAqIEluIHRlc3RzIHRoaXMgaXMgbW9yZSBhY2NlcHRhYmxlLlxuICAgKlxuICAgKiBQcmVmZXIgb3RoZXIgbWV0aG9kcyB0byB0aGlzLCBzdWNoIGFzIGAuZWFjaGAuXG4gICAqL1xuICBwdWJsaWMgZ2V0T3JEaWUobWVzc2FnZT86IHN0cmluZyk6IFQge1xuICAgIGlmICghdGhpcy50YWcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlID8/ICdDYWxsZWQgZ2V0T3JEaWUgb24gTm9uZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZSBhcyBUO1xuICAgIH1cbiAgfVxuXG4gIC8vIC0tLSBJbnRlcm9wIHdpdGggbnVsbCBhbmQgdW5kZWZpbmVkIC0tLVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGBPcHRpb25hbGAgdmFsdWUgZnJvbSBhIG51bGxhYmxlIChvciB1bmRlZmluZWQtYWJsZSkgaW5wdXQuXG4gICAqIE51bGwsIG9yIHVuZGVmaW5lZCwgaXMgY29udmVydGVkIHRvIGBOb25lYCwgYW5kIGFueXRoaW5nIGVsc2UgaXMgY29udmVydGVkXG4gICAqIHRvIGBTb21lYC5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZnJvbTxUPih0aGlzOiB2b2lkLCB2YWx1ZTogVCB8IG51bGwgfCB1bmRlZmluZWQpOiBPcHRpb25hbDxOb25OdWxsYWJsZTxUPj4ge1xuICAgIHJldHVybiBUeXBlLmlzTm9uTnVsbGFibGUodmFsdWUpID8gT3B0aW9uYWwuc29tZSh2YWx1ZSkgOiBPcHRpb25hbC5ub25lKCk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgYW4gYE9wdGlvbmFsYCB0byBhIG51bGxhYmxlIHR5cGUsIGJ5IGdldHRpbmcgdGhlIHZhbHVlIGlmIGl0XG4gICAqIGV4aXN0cywgb3IgcmV0dXJuaW5nIGBudWxsYCBpZiBpdCBkb2VzIG5vdC5cbiAgICovXG4gIHB1YmxpYyBnZXRPck51bGwoKTogVCB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLnRhZyA/IHRoaXMudmFsdWUgYXMgVCA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgYW4gYE9wdGlvbmFsYCB0byBhbiB1bmRlZmluZWQtYWJsZSB0eXBlLCBieSBnZXR0aW5nIHRoZSB2YWx1ZSBpZlxuICAgKiBpdCBleGlzdHMsIG9yIHJldHVybmluZyBgdW5kZWZpbmVkYCBpZiBpdCBkb2VzIG5vdC5cbiAgICovXG4gIHB1YmxpYyBnZXRPclVuZGVmaW5lZCgpOiBUIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgfVxuXG4gIC8vIC0tLSBVdGlsaXRpZXMgLS0tXG5cbiAgLyoqXG4gICAqIElmIHRoZSBgT3B0aW9uYWxgIGNvbnRhaW5zIGEgdmFsdWUsIHBlcmZvcm0gYW4gYWN0aW9uIG9uIHRoYXQgdmFsdWUuXG4gICAqIFVubGlrZSB0aGUgcmVzdCBvZiB0aGUgbWV0aG9kcyBvbiB0aGlzIHR5cGUsIGAuZWFjaGAgaGFzIHNpZGUtZWZmZWN0cy4gSWZcbiAgICogeW91IHdhbnQgdG8gdHJhbnNmb3JtIGFuIGBPcHRpb25hbDxUPmAgKippbnRvKiogc29tZXRoaW5nLCB0aGVuIHRoaXMgaXMgbm90XG4gICAqIHRoZSBtZXRob2QgZm9yIHlvdS4gSWYgeW91IHdhbnQgdG8gdXNlIGFuIGBPcHRpb25hbDxUPmAgdG8gKipkbyoqXG4gICAqIHNvbWV0aGluZywgdGhlbiB0aGlzIGlzIHRoZSBtZXRob2QgZm9yIHlvdSAtIHByb3ZpZGVkIHlvdSdyZSBva2F5IHdpdGggbm90XG4gICAqIGRvaW5nIGFueXRoaW5nIGluIHRoZSBjYXNlIHdoZXJlIHRoZSBgT3B0aW9uYWxgIGRvZXNuJ3QgaGF2ZSBhIHZhbHVlIGluc2lkZVxuICAgKiBpdC4gSWYgeW91J3JlIG5vdCBzdXJlIHdoZXRoZXIgeW91ciB1c2UtY2FzZSBmaXRzIGludG8gdHJhbnNmb3JtaW5nXG4gICAqICoqaW50byoqIHNvbWV0aGluZyBvciAqKmRvaW5nKiogc29tZXRoaW5nLCBjaGVjayB3aGV0aGVyIGl0IGhhcyBhIHJldHVyblxuICAgKiB2YWx1ZS4gSWYgaXQgZG9lcywgeW91IHNob3VsZCBiZSBwZXJmb3JtaW5nIGEgdHJhbnNmb3JtLlxuICAgKi9cbiAgcHVibGljIGVhY2god29ya2VyOiAodmFsdWU6IFQpID0+IHZvaWQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50YWcpIHtcbiAgICAgIHdvcmtlcih0aGlzLnZhbHVlIGFzIFQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUdXJuIHRoZSBgT3B0aW9uYWxgIG9iamVjdCBpbnRvIGFuIGFycmF5IHRoYXQgY29udGFpbnMgYWxsIG9mIHRoZSB2YWx1ZXNcbiAgICogc3RvcmVkIGluc2lkZSB0aGUgYE9wdGlvbmFsYC4gSW4gcHJhY3RpY2UsIHRoaXMgbWVhbnMgdGhlIG91dHB1dCB3aWxsIGhhdmVcbiAgICogZWl0aGVyIDAgb3IgMSBlbGVtZW50cy5cbiAgICovXG4gIHB1YmxpYyB0b0FycmF5KCk6IFRbXSB7XG4gICAgcmV0dXJuIHRoaXMudGFnID8gWyB0aGlzLnZhbHVlIGFzIFQgXSA6IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIFR1cm4gdGhlIGBPcHRpb25hbGAgb2JqZWN0IGludG8gYSBzdHJpbmcgZm9yIGRlYnVnZ2luZyBvciBwcmludGluZy4gTm90XG4gICAqIHJlY29tbWVuZGVkIGZvciBwcm9kdWN0aW9uIGNvZGUsIGJ1dCBnb29kIGZvciBkZWJ1Z2dpbmcuIEFsc28gbm90ZSB0aGF0XG4gICAqIHRoZXNlIGRheXMgYW4gYE9wdGlvbmFsYCBvYmplY3QgY2FuIGJlIGxvZ2dlZCB0byB0aGUgY29uc29sZSBkaXJlY3RseSwgYW5kXG4gICAqIGl0cyBpbm5lciB2YWx1ZSAoaWYgaXQgZXhpc3RzKSB3aWxsIGJlIHZpc2libGUuXG4gICAqL1xuICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy50YWcgPyBgc29tZSgke3RoaXMudmFsdWV9KWAgOiAnbm9uZSgpJztcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgQXJyIGZyb20gJy4vQXJyJztcbmltcG9ydCAqIGFzIEZ1biBmcm9tICcuL0Z1bic7XG5pbXBvcnQgeyBPcHRpb25hbCB9IGZyb20gJy4vT3B0aW9uYWwnO1xuXG4vKipcbiAqICoqSXMqKiB0aGUgdmFsdWUgc3RvcmVkIGluc2lkZSB0aGlzIE9wdGlvbmFsIG9iamVjdCBlcXVhbCB0byBgcmhzYD9cbiAqL1xuZXhwb3J0IGNvbnN0IGlzID0gPFQ+KGxoczogT3B0aW9uYWw8VD4sIHJoczogVCwgY29tcGFyYXRvcjogKGE6IFQsIGI6IFQpID0+IGJvb2xlYW4gPSBGdW4udHJpcGxlRXF1YWxzKTogYm9vbGVhbiA9PlxuICBsaHMuZXhpc3RzKChsZWZ0KSA9PiBjb21wYXJhdG9yKGxlZnQsIHJocykpO1xuXG4vKipcbiAqIEFyZSB0aGVzZSB0d28gT3B0aW9uYWwgb2JqZWN0cyBlcXVhbD8gRXF1YWxpdHkgaGVyZSBtZWFucyBlaXRoZXIgdGhleSdyZSBib3RoXG4gKiBgU29tZWAgKGFuZCB0aGUgdmFsdWVzIGFyZSBlcXVhbCB1bmRlciB0aGUgY29tcGFyYXRvcikgb3IgdGhleSdyZSBib3RoIGBOb25lYC5cbiAqL1xuZXhwb3J0IGNvbnN0IGVxdWFsczoge1xuICA8QSwgQj4obGhzOiBPcHRpb25hbDxBPiwgcmhzOiBPcHRpb25hbDxCPiwgY29tcGFyYXRvcjogKGE6IEEsIGI6IEIpID0+IGJvb2xlYW4pOiBib29sZWFuO1xuICA8VD4obGhzOiBPcHRpb25hbDxUPiwgcmhzOiBPcHRpb25hbDxUPik6IGJvb2xlYW47XG59ID0gPEEsIEI+KGxoczogT3B0aW9uYWw8QT4sIHJoczogT3B0aW9uYWw8Qj4sIGNvbXBhcmF0b3I6IChhOiBBLCBiOiBCKSA9PiBib29sZWFuID0gRnVuLnRyaXBsZUVxdWFscyBhcyBhbnkpOiBib29sZWFuID0+XG4gIGxpZnQyKGxocywgcmhzLCBjb21wYXJhdG9yKS5nZXRPcihsaHMuaXNOb25lKCkgJiYgcmhzLmlzTm9uZSgpKTtcblxuZXhwb3J0IGNvbnN0IGNhdCA9IDxBPihhcnI6IE9wdGlvbmFsPEE+W10pOiBBW10gPT4ge1xuICBjb25zdCByOiBBW10gPSBbXTtcbiAgY29uc3QgcHVzaCA9ICh4OiBBKSA9PiB7XG4gICAgci5wdXNoKHgpO1xuICB9O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGFycltpXS5lYWNoKHB1c2gpO1xuICB9XG4gIHJldHVybiByO1xufTtcblxuZXhwb3J0IGNvbnN0IHNlcXVlbmNlID0gPEE+IChhcnI6IEFycmF5TGlrZTxPcHRpb25hbDxBPj4pOiBPcHRpb25hbDxBcnJheTxBPj4gPT4ge1xuICBjb25zdCByOiBBW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB4ID0gYXJyW2ldO1xuICAgIGlmICh4LmlzU29tZSgpKSB7XG4gICAgICByLnB1c2goeC5nZXRPckRpZSgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIE9wdGlvbmFsLm5vbmU8QXJyYXk8QT4+KCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBPcHRpb25hbC5zb21lKHIpO1xufTtcblxuLyoqIEBkZXByZWNhdGVkIFVzZSBBcnIuZmluZE1hcCBpbnN0ZWFkLiAqL1xuZXhwb3J0IGNvbnN0IGZpbmRNYXAgPSBBcnIuZmluZE1hcDtcblxuLyoqIE1hcCBlYWNoIGVsZW1lbnQgb2YgYW4gYXJyYXkgdG8gYW4gT3B0aW9uYWwgYW5kIGNvbGxlY3QgdGhlIHJlc3VsdHMuXG4gKiAgSWYgYWxsIHJlc3VsdHMgYXJlIFwic29tZVwiLCByZXR1cm4gT3B0aW9uYWwuc29tZSBvZiB0aGUgcmVzdWx0cy5cbiAqICBJZiBhbnkgcmVzdWx0IGlzIFwibm9uZVwiLCByZXR1cm4gT3B0aW9uYWwubm9uZVxuICovXG5leHBvcnQgY29uc3QgdHJhdmVyc2UgPSA8QSwgQj4gKGFycjogQXJyYXlMaWtlPEE+LCBmOiAoYTogQSkgPT4gT3B0aW9uYWw8Qj4pOiBPcHRpb25hbDxBcnJheTxCPj4gPT5cbiAgc2VxdWVuY2UoQXJyLm1hcChhcnIsIGYpKTtcblxuLypcbk5vdGVzIG9uIHRoZSBsaWZ0IGZ1bmN0aW9uczpcbi0gV2UgdXNlZCB0byBoYXZlIGEgZ2VuZXJpYyBsaWZ0TiwgYnV0IHdlIHdlcmUgY29uY2VybmVkIGFib3V0IGl0cyB0eXBlLXNhZmV0eSwgYW5kIHRoZSBiZWxvdyB2YXJpYW50cyB3ZXJlIGZhc3RlciBpbiBtaWNyb2JlbmNobWFya3MuXG4tIFRoZSBnZXRPckRpZSBjYWxscyBhcmUgcGFydGlhbCBmdW5jdGlvbnMsIGJ1dCBhcmUgY2hlY2tlZCBiZWZvcmVoYW5kLiBUaGlzIGlzIGZhc3RlciBhbmQgbW9yZSBjb252ZW5pZW50IChidXQgbGVzcyBzYWZlKSB0aGFuIGZvbGRzLlxuLSAmJiBpcyB1c2VkIGluc3RlYWQgb2YgYSBsb29wIGZvciBzaW1wbGljaXR5IGFuZCBwZXJmb3JtYW5jZS5cbiovXG5cbmV4cG9ydCBjb25zdCBsaWZ0MiA9IDxBLCBCLCBDPiAob2E6IE9wdGlvbmFsPEE+LCBvYjogT3B0aW9uYWw8Qj4sIGY6IChhOiBBLCBiOiBCKSA9PiBDKTogT3B0aW9uYWw8Qz4gPT5cbiAgb2EuaXNTb21lKCkgJiYgb2IuaXNTb21lKCkgPyBPcHRpb25hbC5zb21lKGYob2EuZ2V0T3JEaWUoKSwgb2IuZ2V0T3JEaWUoKSkpIDogT3B0aW9uYWwubm9uZTxDPigpO1xuXG5leHBvcnQgY29uc3QgbGlmdDMgPSA8QSwgQiwgQywgRD4gKG9hOiBPcHRpb25hbDxBPiwgb2I6IE9wdGlvbmFsPEI+LCBvYzogT3B0aW9uYWw8Qz4sIGY6IChhOiBBLCBiOiBCLCBjOiBDKSA9PiBEKTogT3B0aW9uYWw8RD4gPT5cbiAgb2EuaXNTb21lKCkgJiYgb2IuaXNTb21lKCkgJiYgb2MuaXNTb21lKCkgPyBPcHRpb25hbC5zb21lKGYob2EuZ2V0T3JEaWUoKSwgb2IuZ2V0T3JEaWUoKSwgb2MuZ2V0T3JEaWUoKSkpIDogT3B0aW9uYWwubm9uZTxEPigpO1xuXG5leHBvcnQgY29uc3QgbGlmdDQgPSA8QSwgQiwgQywgRCwgRT4gKG9hOiBPcHRpb25hbDxBPiwgb2I6IE9wdGlvbmFsPEI+LCBvYzogT3B0aW9uYWw8Qz4sIG9kOiBPcHRpb25hbDxEPiwgZjogKGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQpID0+IEUpOiBPcHRpb25hbDxFPiA9PlxuICBvYS5pc1NvbWUoKSAmJiBvYi5pc1NvbWUoKSAmJiBvYy5pc1NvbWUoKSAmJiBvZC5pc1NvbWUoKSA/IE9wdGlvbmFsLnNvbWUoZihvYS5nZXRPckRpZSgpLCBvYi5nZXRPckRpZSgpLCBvYy5nZXRPckRpZSgpLCBvZC5nZXRPckRpZSgpKSkgOiBPcHRpb25hbC5ub25lPEU+KCk7XG5cbmV4cG9ydCBjb25zdCBsaWZ0NSA9IDxBLCBCLCBDLCBELCBFLCBGPiAob2E6IE9wdGlvbmFsPEE+LCBvYjogT3B0aW9uYWw8Qj4sIG9jOiBPcHRpb25hbDxDPiwgb2Q6IE9wdGlvbmFsPEQ+LCBvZTogT3B0aW9uYWw8RT4sIGY6IChhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFKSA9PiBGKTogT3B0aW9uYWw8Rj4gPT5cbiAgb2EuaXNTb21lKCkgJiYgb2IuaXNTb21lKCkgJiYgb2MuaXNTb21lKCkgJiYgb2QuaXNTb21lKCkgJiYgb2UuaXNTb21lKCkgPyBPcHRpb25hbC5zb21lKGYob2EuZ2V0T3JEaWUoKSwgb2IuZ2V0T3JEaWUoKSwgb2MuZ2V0T3JEaWUoKSwgb2QuZ2V0T3JEaWUoKSwgb2UuZ2V0T3JEaWUoKSkpIDogT3B0aW9uYWwubm9uZTxGPigpO1xuXG5leHBvcnQgY29uc3QgbWFwRnJvbSA9IDxBLCBCPiAoYTogQSB8IG51bGwgfCB1bmRlZmluZWQsIGY6IChhOiBBKSA9PiBCKTogT3B0aW9uYWw8Qj4gPT5cbiAgKGEgIT09IHVuZGVmaW5lZCAmJiBhICE9PSBudWxsKSA/IE9wdGlvbmFsLnNvbWUoZihhKSkgOiBPcHRpb25hbC5ub25lPEI+KCk7XG5cbmV4cG9ydCBjb25zdCBiaW5kRnJvbSA9IDxBLCBCPiAoYTogQSB8IG51bGwgfCB1bmRlZmluZWQsIGY6IChhOiBBKSA9PiBPcHRpb25hbDxCPik6IE9wdGlvbmFsPEI+ID0+XG4gIChhICE9PSB1bmRlZmluZWQgJiYgYSAhPT0gbnVsbCkgPyBmKGEpIDogT3B0aW9uYWwubm9uZTxCPigpO1xuXG5leHBvcnQgY29uc3QgZmxhdHRlbiA9IDxUPiAob290OiBPcHRpb25hbDxPcHRpb25hbDxUPj4pOiBPcHRpb25hbDxUPiA9PiBvb3QuYmluZChGdW4uaWRlbnRpdHkpO1xuXG4vLyBUaGlzIGNhbiBoZWxwIHdpdGggdHlwZSBpbmZlcmVuY2UsIGJ5IHNwZWNpZnlpbmcgdGhlIHR5cGUgcGFyYW0gb24gdGhlIG5vbmUgY2FzZSwgc28gdGhlIGNhbGxlciBkb2Vzbid0IGhhdmUgdG8uXG5leHBvcnQgY29uc3Qgc29tZUlmID0gPEE+IChiOiBib29sZWFuLCBhOiBBKTogT3B0aW9uYWw8QT4gPT5cbiAgYiA/IE9wdGlvbmFsLnNvbWUoYSkgOiBPcHRpb25hbC5ub25lPEE+KCk7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8td3JhcHBlci1vYmplY3QtdHlwZXMgKi9cbmNvbnN0IGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuXG5pbnRlcmZhY2UgQ29uc3RydWN0b3I8VCBleHRlbmRzIE9iamVjdD4ge1xuICByZWFkb25seSBwcm90b3R5cGU6IFQ7XG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbn1cblxuY29uc3QgaGFzUHJvdG8gPSA8VCBleHRlbmRzIE9iamVjdD4odjogT2JqZWN0LCBjb25zdHJ1Y3RvcjogQ29uc3RydWN0b3I8VD4sIHByZWRpY2F0ZTogKHY6IE9iamVjdCwgcHJvdG90eXBlOiBUKSA9PiBib29sZWFuKTogYm9vbGVhbiA9PiB7XG4gIGlmIChwcmVkaWNhdGUodiwgY29uc3RydWN0b3IucHJvdG90eXBlKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIC8vIFN0cmluZy1iYXNlZCBmYWxsYmFjayB0aW1lXG4gICAgcmV0dXJuIHYuY29uc3RydWN0b3I/Lm5hbWUgPT09IGNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cbn07XG5cbmNvbnN0IHR5cGVPZiA9ICh4OiBhbnkpOiBzdHJpbmcgPT4ge1xuICBjb25zdCB0ID0gdHlwZW9mIHg7XG4gIGlmICh4ID09PSBudWxsKSB7XG4gICAgcmV0dXJuICdudWxsJztcbiAgfSBlbHNlIGlmICh0ID09PSAnb2JqZWN0JyAmJiBBcnJheS5pc0FycmF5KHgpKSB7XG4gICAgcmV0dXJuICdhcnJheSc7XG4gIH0gZWxzZSBpZiAodCA9PT0gJ29iamVjdCcgJiYgaGFzUHJvdG8oeCwgU3RyaW5nLCAobywgcHJvdG8pID0+IHByb3RvLmlzUHJvdG90eXBlT2YobykpKSB7XG4gICAgcmV0dXJuICdzdHJpbmcnO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0O1xuICB9XG59O1xuXG5jb25zdCBpc1R5cGUgPSA8WW9sbz4odHlwZTogc3RyaW5nKSA9PiAodmFsdWU6IGFueSk6IHZhbHVlIGlzIFlvbG8gPT5cbiAgdHlwZU9mKHZhbHVlKSA9PT0gdHlwZTtcblxuY29uc3QgaXNTaW1wbGVUeXBlID0gPFlvbG8+KHR5cGU6IHN0cmluZykgPT4gKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBZb2xvID0+XG4gIHR5cGVvZiB2YWx1ZSA9PT0gdHlwZTtcblxuY29uc3QgZXEgPSA8VD4gKHQ6IFQpID0+IChhOiBhbnkpOiBhIGlzIFQgPT5cbiAgdCA9PT0gYTtcblxuZXhwb3J0IGNvbnN0IGlzID0gPEUgZXh0ZW5kcyBPYmplY3Q+KHZhbHVlOiBhbnksIGNvbnN0cnVjdG9yOiBDb25zdHJ1Y3RvcjxFPik6IHZhbHVlIGlzIEUgPT5cbiAgaXNPYmplY3QodmFsdWUpICYmIGhhc1Byb3RvPEU+KHZhbHVlLCBjb25zdHJ1Y3RvciwgKG8sIHByb3RvKSA9PiBnZXRQcm90b3R5cGVPZihvKSA9PT0gcHJvdG8pO1xuXG5leHBvcnQgY29uc3QgaXNTdHJpbmc6ICh2YWx1ZTogYW55KSA9PiB2YWx1ZSBpcyBzdHJpbmcgPVxuICBpc1R5cGUoJ3N0cmluZycpO1xuXG5leHBvcnQgY29uc3QgaXNPYmplY3Q6ICh2YWx1ZTogYW55KSA9PiB2YWx1ZSBpcyBPYmplY3QgPVxuICBpc1R5cGUoJ29iamVjdCcpO1xuXG5leHBvcnQgY29uc3QgaXNQbGFpbk9iamVjdCA9ICh2YWx1ZTogdW5rbm93bik6IHZhbHVlIGlzIE9iamVjdCA9PlxuICBpcyh2YWx1ZSwgT2JqZWN0KTtcblxuZXhwb3J0IGNvbnN0IGlzQXJyYXk6ICh2YWx1ZTogYW55KSA9PiB2YWx1ZSBpcyBBcnJheTx1bmtub3duPiA9XG4gIGlzVHlwZSgnYXJyYXknKTtcblxuZXhwb3J0IGNvbnN0IGlzTnVsbDogKGE6IGFueSkgPT4gYSBpcyBudWxsID1cbiAgZXEobnVsbCk7XG5cbmV4cG9ydCBjb25zdCBpc0Jvb2xlYW46ICh2YWx1ZTogYW55KSA9PiB2YWx1ZSBpcyBib29sZWFuID1cbiAgaXNTaW1wbGVUeXBlPGJvb2xlYW4+KCdib29sZWFuJyk7XG5cbmV4cG9ydCBjb25zdCBpc1VuZGVmaW5lZDogKGE6IGFueSkgPT4gYSBpcyB1bmRlZmluZWQgPVxuICBlcSh1bmRlZmluZWQpO1xuXG5leHBvcnQgY29uc3QgaXNOdWxsYWJsZSA9IChhOiBhbnkpOiBhIGlzIG51bGwgfCB1bmRlZmluZWQgPT5cbiAgYSA9PT0gbnVsbCB8fCBhID09PSB1bmRlZmluZWQ7XG5cbmV4cG9ydCBjb25zdCBpc05vbk51bGxhYmxlID0gPEE+IChhOiBBIHwgbnVsbCB8IHVuZGVmaW5lZCk6IGEgaXMgTm9uTnVsbGFibGU8QT4gPT5cbiAgIWlzTnVsbGFibGUoYSk7XG5cbmV4cG9ydCBjb25zdCBpc0Z1bmN0aW9uOiAodmFsdWU6IGFueSkgPT4gdmFsdWUgaXMgRnVuY3Rpb24gPVxuICBpc1NpbXBsZVR5cGU8RnVuY3Rpb24+KCdmdW5jdGlvbicpO1xuXG5leHBvcnQgY29uc3QgaXNOdW1iZXI6ICh2YWx1ZTogYW55KSA9PiB2YWx1ZSBpcyBudW1iZXIgPVxuICBpc1NpbXBsZVR5cGU8bnVtYmVyPignbnVtYmVyJyk7XG5cbmV4cG9ydCBjb25zdCBpc0FycmF5T2YgPSA8RT4odmFsdWU6IGFueSwgcHJlZDogKHg6IGFueSkgPT4geCBpcyBFKTogdmFsdWUgaXMgQXJyYXk8RT4gPT4ge1xuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdmFsdWUubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIGlmICghKHByZWQodmFsdWVbaV0pKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc1Byb21pc2VMaWtlID0gKHg6IGFueSk6IHggaXMgUHJvbWlzZTx1bmtub3duPiA9PlxuICBpc09iamVjdCh4KVxuICAmJiBpc0Z1bmN0aW9uKHgudGhlbilcbiAgJiYgaXNGdW5jdGlvbih4LmNhdGNoKTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWJpdHdpc2UgKi9cblxuY29uc3QgdXVpZFY0Qnl0ZXMgPSAoKTogVWludDhBcnJheSA9PiB7XG4gIGNvbnN0IGJ5dGVzID0gd2luZG93LmNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoMTYpKTtcblxuICAvLyBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNDEyMiNzZWN0aW9uLTQuMS4zXG4gIC8vIFRoaXMgd2lsbCBmaXJzdCBiaXQgbWFzayBhd2F5IHRoZSBtb3N0IHNpZ25pZmljYW50IDQgYml0cyAodmVyc2lvbiBvY3RldClcbiAgLy8gdGhlbiBtYXNrIGluIHRoZSB2NCBudW1iZXIgd2Ugb25seSBjYXJlIGFib3V0IHY0IHJhbmRvbSB2ZXJzaW9uIGF0IHRoaXMgcG9pbnQgc28gKGJ5dGUgJiAwYjAwMDAxMTExIHwgMGIwMTAwMDAwMClcbiAgYnl0ZXNbNl0gPSBieXRlc1s2XSAmIDE1IHwgNjQ7XG5cbiAgLy8gaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzQxMjIjc2VjdGlvbi00LjEuMVxuICAvLyBUaGlzIHdpbGwgZmlyc3QgYml0IG1hc2sgYXdheSB0aGUgaGlnaGVzdCB0d28gYml0cyB0aGVuIG1hc2tzIGluIHRoZSBoaWdoZXN0IGJpdCBzbyAoYnl0ZSAmIDBiMDAxMTExMTEgfCAwYjEwMDAwMDAwKVxuICAvLyBTbyBpdCB3aWxsIHNldCB0aGUgTXNiMD0xICYgTXNiMT0wIGRlc2NyaWJlZCBieSB0aGUgXCJUaGUgdmFyaWFudCBzcGVjaWZpZWQgaW4gdGhpcyBkb2N1bWVudC5cIiByb3cgaW4gdGhlIHRhYmxlXG4gIGJ5dGVzWzhdID0gYnl0ZXNbOF0gJiA2MyB8IDEyODtcblxuICByZXR1cm4gYnl0ZXM7XG59O1xuXG5jb25zdCB1dWlkVjRTdHJpbmcgPSAoKTogYCR7c3RyaW5nfS0ke3N0cmluZ30tJHtzdHJpbmd9LSR7c3RyaW5nfS0ke3N0cmluZ31gID0+IHtcbiAgY29uc3QgdXVpZCA9IHV1aWRWNEJ5dGVzKCk7XG4gIGNvbnN0IGdldEhleFJhbmdlID0gKHN0YXJ0SW5kZXg6IG51bWJlciwgZW5kSW5kZXg6IG51bWJlcikgPT4ge1xuICAgIGxldCBidWZmID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0SW5kZXg7IGkgPD0gZW5kSW5kZXg7ICsraSkge1xuICAgICAgY29uc3QgaGV4Qnl0ZSA9IHV1aWRbaV0udG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICBidWZmICs9IGhleEJ5dGU7XG4gICAgfVxuICAgIHJldHVybiBidWZmO1xuICB9O1xuICAvLyBSRkMgNDEyMiBVVUlEIGZvcm1hdDogeHh4eHh4eHgteHh4eC14eHh4LXh4eHgteHh4eHh4eHh4eHh4XG4gIHJldHVybiBgJHtnZXRIZXhSYW5nZSgwLCAzKX0tJHtnZXRIZXhSYW5nZSg0LCA1KX0tJHtnZXRIZXhSYW5nZSg2LCA3KX0tJHtnZXRIZXhSYW5nZSg4LCA5KX0tJHtnZXRIZXhSYW5nZSgxMCwgMTUpfWA7XG59O1xuXG5leHBvcnQge1xuICB1dWlkVjRCeXRlcyxcbiAgdXVpZFY0U3RyaW5nXG59O1xuIiwiaW1wb3J0IHsgQ2VsbCB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmltcG9ydCBQbHVnaW5NYW5hZ2VyIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvUGx1Z2luTWFuYWdlcic7XG5pbXBvcnQgdHlwZSB7IERpYWxvZyBhcyBEaWFsb2dUeXBlIH0gZnJvbSAndGlueW1jZS9jb3JlL2FwaS91aS9VaSc7XG5cbmltcG9ydCAqIGFzIEFwaSBmcm9tICcuL2FwaS9BcGknO1xuaW1wb3J0ICogYXMgQ29tbWFuZHMgZnJvbSAnLi9hcGkvQ29tbWFuZHMnO1xuaW1wb3J0ICogYXMgT3B0aW9ucyBmcm9tICcuL2FwaS9PcHRpb25zJztcbmltcG9ydCAqIGFzIEJ1dHRvbnMgZnJvbSAnLi91aS9CdXR0b25zJztcbmltcG9ydCAqIGFzIERpYWxvZyBmcm9tICcuL3VpL0RpYWxvZyc7XG5pbXBvcnQgKiBhcyBLZXlib2FyZE5hdlRhYkkxOG4gZnJvbSAnLi91aS9LZXlib2FyZE5hdlRhYkkxOG4nO1xuXG5leHBvcnQgdHlwZSBUYWJTcGVjcyA9IFJlY29yZDxzdHJpbmcsIERpYWxvZ1R5cGUuVGFiU3BlYz47XG5leHBvcnQgdHlwZSBDdXN0b21UYWJTcGVjcyA9IENlbGw8VGFiU3BlY3M+O1xuXG5leHBvcnQgZGVmYXVsdCAoKTogdm9pZCA9PiB7XG4gIFBsdWdpbk1hbmFnZXIuYWRkKCdoZWxwJywgKGVkaXRvciwgcGx1Z2luVXJsKSA9PiB7XG4gICAgY29uc3QgY3VzdG9tVGFiczogQ3VzdG9tVGFiU3BlY3MgPSBDZWxsKHt9KTtcbiAgICBjb25zdCBhcGkgPSBBcGkuZ2V0KGN1c3RvbVRhYnMpO1xuXG4gICAgT3B0aW9ucy5yZWdpc3RlcihlZGl0b3IpO1xuICAgIGNvbnN0IGRpYWxvZ09wZW5lciA9IERpYWxvZy5pbml0KGVkaXRvciwgY3VzdG9tVGFicywgcGx1Z2luVXJsKTtcbiAgICBCdXR0b25zLnJlZ2lzdGVyKGVkaXRvciwgZGlhbG9nT3BlbmVyKTtcbiAgICBDb21tYW5kcy5yZWdpc3RlcihlZGl0b3IsIGRpYWxvZ09wZW5lcik7XG4gICAgZWRpdG9yLnNob3J0Y3V0cy5hZGQoJ0FsdCswJywgJ09wZW4gaGVscCBkaWFsb2cnLCAnbWNlSGVscCcpO1xuICAgIEtleWJvYXJkTmF2VGFiSTE4bi5pbml0STE4bkxvYWQoZWRpdG9yLCBwbHVnaW5VcmwpO1xuXG4gICAgcmV0dXJuIGFwaTtcbiAgfSk7XG59O1xuIiwiaW1wb3J0IHsgQXJyLCBPYmogfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5pbXBvcnQgRW52IGZyb20gJ3RpbnltY2UvY29yZS9hcGkvRW52JztcblxuLy8gQ29udmVydHMgc2hvcnRjdXQgZm9ybWF0IHRvIE1hYy9QQyB2YXJpYW50c1xuY29uc3QgY29udmVydFRleHQgPSAoc291cmNlOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICBjb25zdCBpc01hYyA9IEVudi5vcy5pc01hY09TKCkgfHwgRW52Lm9zLmlzaU9TKCk7XG4gIGNvbnN0IG1hYyA9IHtcbiAgICBhbHQ6ICcmI3gyMzI1OycsXG4gICAgY3RybDogJyYjeDIzMDM7JyxcbiAgICBzaGlmdDogJyYjeDIxRTc7JyxcbiAgICBtZXRhOiAnJiN4MjMxODsnLFxuICAgIGFjY2VzczogJyYjeDIzMDM7JiN4MjMyNTsnXG4gIH07XG4gIGNvbnN0IG90aGVyID0ge1xuICAgIG1ldGE6ICdDdHJsICcsXG4gICAgYWNjZXNzOiAnU2hpZnQgKyBBbHQgJ1xuICB9O1xuICBjb25zdCByZXBsYWNlOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0gaXNNYWMgPyBtYWMgOiBvdGhlcjtcblxuICBjb25zdCBzaG9ydGN1dCA9IHNvdXJjZS5zcGxpdCgnKycpO1xuXG4gIGNvbnN0IHVwZGF0ZWQgPSBBcnIubWFwKHNob3J0Y3V0LCAoc2VnbWVudDogc3RyaW5nKSA9PiB7XG4gICAgLy8gc2VhcmNoIGxvd2VyY2FzZSwgYnV0IGlmIG5vdCBmb3VuZCB1c2UgdGhlIG9yaWdpbmFsXG4gICAgY29uc3Qgc2VhcmNoID0gc2VnbWVudC50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcbiAgICByZXR1cm4gT2JqLmhhcyhyZXBsYWNlLCBzZWFyY2gpID8gcmVwbGFjZVtzZWFyY2hdIDogc2VnbWVudDtcbiAgfSk7XG5cbiAgcmV0dXJuIGlzTWFjID8gKHVwZGF0ZWQuam9pbignJykpLnJlcGxhY2UoL1xccy8sICcnKSA6IHVwZGF0ZWQuam9pbignKycpO1xufTtcblxuZXhwb3J0IHtcbiAgY29udmVydFRleHRcbn07XG4iLCJpbXBvcnQgeyBJZCB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmltcG9ydCB0eXBlIHsgRGlhbG9nIH0gZnJvbSAndGlueW1jZS9jb3JlL2FwaS91aS9VaSc7XG5cbmltcG9ydCB0eXBlIHsgQ3VzdG9tVGFiU3BlY3MgfSBmcm9tICcuLi9QbHVnaW4nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFwaSB7XG4gIHJlYWRvbmx5IGFkZFRhYjogKHNwZWM6IERpYWxvZy5UYWJTcGVjKSA9PiB2b2lkO1xufVxuXG5jb25zdCBnZXQgPSAoY3VzdG9tVGFiczogQ3VzdG9tVGFiU3BlY3MpOiBBcGkgPT4ge1xuICBjb25zdCBhZGRUYWIgPSAoc3BlYzogRGlhbG9nLlRhYlNwZWMpOiB2b2lkID0+IHtcbiAgICBjb25zdCBuYW1lID0gc3BlYy5uYW1lID8/IElkLmdlbmVyYXRlKCd0YWItbmFtZScpO1xuICAgIGNvbnN0IGN1cnJlbnRDdXN0b21UYWJzID0gY3VzdG9tVGFicy5nZXQoKTtcbiAgICBjdXJyZW50Q3VzdG9tVGFic1tuYW1lXSA9IHNwZWM7XG4gICAgY3VzdG9tVGFicy5zZXQoY3VycmVudEN1c3RvbVRhYnMpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYWRkVGFiXG4gIH07XG59O1xuXG5leHBvcnQgeyBnZXQgfTtcbiIsImltcG9ydCB0eXBlIEVkaXRvciBmcm9tICd0aW55bWNlL2NvcmUvYXBpL0VkaXRvcic7XG5cbmNvbnN0IHJlZ2lzdGVyID0gKGVkaXRvcjogRWRpdG9yLCBkaWFsb2dPcGVuZXI6ICgpID0+IHZvaWQpOiB2b2lkID0+IHtcbiAgZWRpdG9yLmFkZENvbW1hbmQoJ21jZUhlbHAnLCBkaWFsb2dPcGVuZXIpO1xufTtcblxuZXhwb3J0IHtcbiAgcmVnaXN0ZXJcbn07XG4iLCJpbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuaW1wb3J0IHR5cGUgeyBFZGl0b3JPcHRpb25zIH0gZnJvbSAndGlueW1jZS9jb3JlL2FwaS9PcHRpb25UeXBlcyc7XG5pbXBvcnQgdHlwZSB7IERpYWxvZyB9IGZyb20gJ3RpbnltY2UvY29yZS9hcGkvdWkvVWknO1xuXG5leHBvcnQgdHlwZSBIZWxwVGFic1NldHRpbmcgPSAoc3RyaW5nIHwgRGlhbG9nLlRhYlNwZWMpW107XG5cbmNvbnN0IG9wdGlvbjoge1xuICA8SyBleHRlbmRzIGtleW9mIEVkaXRvck9wdGlvbnM+KG5hbWU6IEspOiAoZWRpdG9yOiBFZGl0b3IpID0+IEVkaXRvck9wdGlvbnNbS107XG4gIDxUPihuYW1lOiBzdHJpbmcpOiAoZWRpdG9yOiBFZGl0b3IpID0+IFQ7XG59ID0gKG5hbWU6IHN0cmluZykgPT4gKGVkaXRvcjogRWRpdG9yKSA9PlxuICBlZGl0b3Iub3B0aW9ucy5nZXQobmFtZSk7XG5cbmNvbnN0IHJlZ2lzdGVyID0gKGVkaXRvcjogRWRpdG9yKTogdm9pZCA9PiB7XG4gIGNvbnN0IHJlZ2lzdGVyT3B0aW9uID0gZWRpdG9yLm9wdGlvbnMucmVnaXN0ZXI7XG5cbiAgcmVnaXN0ZXJPcHRpb24oJ2hlbHBfdGFicycsIHtcbiAgICBwcm9jZXNzb3I6ICdhcnJheSdcbiAgfSk7XG59O1xuXG5jb25zdCBnZXRIZWxwVGFicyA9IG9wdGlvbjxIZWxwVGFic1NldHRpbmcgfCB1bmRlZmluZWQ+KCdoZWxwX3RhYnMnKTtcbmNvbnN0IGdldEZvcmNlZFBsdWdpbnMgPSBvcHRpb24oJ2ZvcmNlZF9wbHVnaW5zJyk7XG5cbmV4cG9ydCB7XG4gIHJlZ2lzdGVyLFxuICBnZXRIZWxwVGFicyxcbiAgZ2V0Rm9yY2VkUGx1Z2luc1xufTtcbiIsImltcG9ydCB0eXBlIHsgU2hvcnRjdXRBY3Rpb25QYWlyVHlwZSB9IGZyb20gJy4uL3VpL0tleWJvYXJkU2hvcnRjdXRzVGFiJztcblxuY29uc3Qgc2hvcnRjdXRzOiBTaG9ydGN1dEFjdGlvblBhaXJUeXBlW10gPSBbXG4gIHsgc2hvcnRjdXRzOiBbICdNZXRhICsgQicgXSwgYWN0aW9uOiAnQm9sZCcgfSxcbiAgeyBzaG9ydGN1dHM6IFsgJ01ldGEgKyBJJyBdLCBhY3Rpb246ICdJdGFsaWMnIH0sXG4gIHsgc2hvcnRjdXRzOiBbICdNZXRhICsgVScgXSwgYWN0aW9uOiAnVW5kZXJsaW5lJyB9LFxuICB7IHNob3J0Y3V0czogWyAnTWV0YSArIEEnIF0sIGFjdGlvbjogJ1NlbGVjdCBhbGwnIH0sXG4gIHsgc2hvcnRjdXRzOiBbICdNZXRhICsgWScsICdNZXRhICsgU2hpZnQgKyBaJyBdLCBhY3Rpb246ICdSZWRvJyB9LFxuICB7IHNob3J0Y3V0czogWyAnTWV0YSArIFonIF0sIGFjdGlvbjogJ1VuZG8nIH0sXG4gIHsgc2hvcnRjdXRzOiBbICdBY2Nlc3MgKyAxJyBdLCBhY3Rpb246ICdIZWFkaW5nIDEnIH0sXG4gIHsgc2hvcnRjdXRzOiBbICdBY2Nlc3MgKyAyJyBdLCBhY3Rpb246ICdIZWFkaW5nIDInIH0sXG4gIHsgc2hvcnRjdXRzOiBbICdBY2Nlc3MgKyAzJyBdLCBhY3Rpb246ICdIZWFkaW5nIDMnIH0sXG4gIHsgc2hvcnRjdXRzOiBbICdBY2Nlc3MgKyA0JyBdLCBhY3Rpb246ICdIZWFkaW5nIDQnIH0sXG4gIHsgc2hvcnRjdXRzOiBbICdBY2Nlc3MgKyA1JyBdLCBhY3Rpb246ICdIZWFkaW5nIDUnIH0sXG4gIHsgc2hvcnRjdXRzOiBbICdBY2Nlc3MgKyA2JyBdLCBhY3Rpb246ICdIZWFkaW5nIDYnIH0sXG4gIHsgc2hvcnRjdXRzOiBbICdBY2Nlc3MgKyA3JyBdLCBhY3Rpb246ICdQYXJhZ3JhcGgnIH0sXG4gIHsgc2hvcnRjdXRzOiBbICdBY2Nlc3MgKyA4JyBdLCBhY3Rpb246ICdEaXYnIH0sXG4gIHsgc2hvcnRjdXRzOiBbICdBY2Nlc3MgKyA5JyBdLCBhY3Rpb246ICdBZGRyZXNzJyB9LFxuICB7IHNob3J0Y3V0czogWyAnQWx0ICsgMCcgXSwgYWN0aW9uOiAnT3BlbiBoZWxwIGRpYWxvZycgfSxcbiAgeyBzaG9ydGN1dHM6IFsgJ0FsdCArIEY5JyBdLCBhY3Rpb246ICdGb2N1cyB0byBtZW51YmFyJyB9LFxuICB7IHNob3J0Y3V0czogWyAnQWx0ICsgRjEwJyBdLCBhY3Rpb246ICdGb2N1cyB0byB0b29sYmFyJyB9LFxuICB7IHNob3J0Y3V0czogWyAnQWx0ICsgRjExJyBdLCBhY3Rpb246ICdGb2N1cyB0byBlbGVtZW50IHBhdGgnIH0sXG4gIHsgc2hvcnRjdXRzOiBbICdBbHQgKyBGMTInIF0sIGFjdGlvbjogJ0ZvY3VzIHRvIG5vdGlmaWNhdGlvbicgfSxcbiAgeyBzaG9ydGN1dHM6IFsgJ0N0cmwgKyBGOScgXSwgYWN0aW9uOiAnRm9jdXMgdG8gY29udGV4dHVhbCB0b29sYmFyJyB9LFxuICB7IHNob3J0Y3V0czogWyAnU2hpZnQgKyBFbnRlcicgXSwgYWN0aW9uOiAnT3BlbiBwb3B1cCBtZW51IGZvciBzcGxpdCBidXR0b25zJyB9LFxuICB7IHNob3J0Y3V0czogWyAnTWV0YSArIEsnIF0sIGFjdGlvbjogJ0luc2VydCBsaW5rIChpZiBsaW5rIHBsdWdpbiBhY3RpdmF0ZWQpJyB9LFxuICB7IHNob3J0Y3V0czogWyAnTWV0YSArIFMnIF0sIGFjdGlvbjogJ1NhdmUgKGlmIHNhdmUgcGx1Z2luIGFjdGl2YXRlZCknIH0sXG4gIHsgc2hvcnRjdXRzOiBbICdNZXRhICsgRicgXSwgYWN0aW9uOiAnRmluZCAoaWYgc2VhcmNocmVwbGFjZSBwbHVnaW4gYWN0aXZhdGVkKScgfSxcbiAgeyBzaG9ydGN1dHM6IFsgJ01ldGEgKyBTaGlmdCArIEYnIF0sIGFjdGlvbjogJ1N3aXRjaCB0byBvciBmcm9tIGZ1bGxzY3JlZW4gbW9kZScgfVxuXTtcblxuZXhwb3J0IHtcbiAgc2hvcnRjdXRzXG59O1xuIiwiaW1wb3J0IHsgQXJyIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuZXhwb3J0IGNvbnN0IGVudW0gUGx1Z2luVHlwZSB7XG4gIFByZW1pdW0gPSAncHJlbWl1bScsXG4gIE9wZW5Tb3VyY2UgPSAnb3BlbnNvdXJjZSdcbn1cblxuaW50ZXJmYWNlIFBhcnRpYWxQbHVnaW5Vcmwge1xuICByZWFkb25seSBrZXk6IHN0cmluZztcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICByZWFkb25seSB0eXBlPzogUGx1Z2luVHlwZTtcbiAgcmVhZG9ubHkgc2x1Zz86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQbHVnaW5VcmwgZXh0ZW5kcyBQYXJ0aWFsUGx1Z2luVXJsIHtcbiAgcmVhZG9ubHkgdHlwZTogUGx1Z2luVHlwZTtcbiAgcmVhZG9ubHkgc2x1Zzogc3RyaW5nO1xufVxuXG4vLyBUaGVzZSBsaXN0cyBhcmUgYXV0b21hdGljYWxseSBzb3J0ZWQgd2hlbiBnZW5lcmF0aW5nIHRoZSBkaWFsb2cuXG5jb25zdCB1cmxzID0gQXJyLm1hcDxQYXJ0aWFsUGx1Z2luVXJsLCBQbHVnaW5Vcmw+KFtcbiAgeyBrZXk6ICdhY2NvcmRpb24nLCBuYW1lOiAnQWNjb3JkaW9uJyB9LFxuICB7IGtleTogJ2FuY2hvcicsIG5hbWU6ICdBbmNob3InIH0sXG4gIHsga2V5OiAnYXV0b2xpbmsnLCBuYW1lOiAnQXV0b2xpbmsnIH0sXG4gIHsga2V5OiAnYXV0b3Jlc2l6ZScsIG5hbWU6ICdBdXRvcmVzaXplJyB9LFxuICB7IGtleTogJ2F1dG9zYXZlJywgbmFtZTogJ0F1dG9zYXZlJyB9LFxuICB7IGtleTogJ2NoYXJtYXAnLCBuYW1lOiAnQ2hhcmFjdGVyIE1hcCcgfSxcbiAgeyBrZXk6ICdjb2RlJywgbmFtZTogJ0NvZGUnIH0sXG4gIHsga2V5OiAnY29kZXNhbXBsZScsIG5hbWU6ICdDb2RlIFNhbXBsZScgfSxcbiAgeyBrZXk6ICdjb2xvcnBpY2tlcicsIG5hbWU6ICdDb2xvciBQaWNrZXInIH0sXG4gIHsga2V5OiAnZGlyZWN0aW9uYWxpdHknLCBuYW1lOiAnRGlyZWN0aW9uYWxpdHknIH0sXG4gIHsga2V5OiAnZW1vdGljb25zJywgbmFtZTogJ0Vtb3RpY29ucycgfSxcbiAgeyBrZXk6ICdmdWxsc2NyZWVuJywgbmFtZTogJ0Z1bGwgU2NyZWVuJyB9LFxuICB7IGtleTogJ2hlbHAnLCBuYW1lOiAnSGVscCcgfSxcbiAgeyBrZXk6ICdpbWFnZScsIG5hbWU6ICdJbWFnZScgfSxcbiAgeyBrZXk6ICdpbXBvcnRjc3MnLCBuYW1lOiAnSW1wb3J0IENTUycgfSxcbiAgeyBrZXk6ICdpbnNlcnRkYXRldGltZScsIG5hbWU6ICdJbnNlcnQgRGF0ZS9UaW1lJyB9LFxuICB7IGtleTogJ2xpbmsnLCBuYW1lOiAnTGluaycgfSxcbiAgeyBrZXk6ICdsaXN0cycsIG5hbWU6ICdMaXN0cycgfSxcbiAgeyBrZXk6ICdhZHZsaXN0JywgbmFtZTogJ0xpc3QgU3R5bGVzJyB9LFxuICB7IGtleTogJ21lZGlhJywgbmFtZTogJ01lZGlhJyB9LFxuICB7IGtleTogJ25vbmJyZWFraW5nJywgbmFtZTogJ05vbmJyZWFraW5nJyB9LFxuICB7IGtleTogJ3BhZ2VicmVhaycsIG5hbWU6ICdQYWdlIEJyZWFrJyB9LFxuICB7IGtleTogJ3ByZXZpZXcnLCBuYW1lOiAnUHJldmlldycgfSxcbiAgeyBrZXk6ICdxdWlja2JhcnMnLCBuYW1lOiAnUXVpY2sgVG9vbGJhcnMnIH0sXG4gIHsga2V5OiAnc2F2ZScsIG5hbWU6ICdTYXZlJyB9LFxuICB7IGtleTogJ3NlYXJjaHJlcGxhY2UnLCBuYW1lOiAnU2VhcmNoIGFuZCBSZXBsYWNlJyB9LFxuICB7IGtleTogJ3RhYmxlJywgbmFtZTogJ1RhYmxlJyB9LFxuICB7IGtleTogJ3RleHRjb2xvcicsIG5hbWU6ICdUZXh0IENvbG9yJyB9LFxuICB7IGtleTogJ3Zpc3VhbGJsb2NrcycsIG5hbWU6ICdWaXN1YWwgQmxvY2tzJyB9LFxuICB7IGtleTogJ3Zpc3VhbGNoYXJzJywgbmFtZTogJ1Zpc3VhbCBDaGFyYWN0ZXJzJyB9LFxuICB7IGtleTogJ3dvcmRjb3VudCcsIG5hbWU6ICdXb3JkIENvdW50JyB9LFxuICAvLyBUT0RPOiBBZGQgb3RoZXIgcHJlbWl1bSBwbHVnaW5zIHdoZW4gdGhleSBhcmUgaW5jbHVkZWQgaW4gdGhlIHdlYnNpdGVcbiAgeyBrZXk6ICdhMTF5Y2hlY2tlcicsIG5hbWU6ICdBY2Nlc3NpYmlsaXR5IENoZWNrZXInLCB0eXBlOiBQbHVnaW5UeXBlLlByZW1pdW0gfSxcbiAgeyBrZXk6ICd0eXBvZ3JhcGh5JywgbmFtZTogJ0FkdmFuY2VkIFR5cG9ncmFwaHknLCB0eXBlOiBQbHVnaW5UeXBlLlByZW1pdW0sIHNsdWc6ICdhZHZhbmNlZC10eXBvZ3JhcGh5JyB9LFxuICB7IGtleTogJ2FpJywgbmFtZTogJ0FJIEFzc2lzdGFudCcsIHR5cGU6IFBsdWdpblR5cGUuUHJlbWl1bSB9LFxuICB7IGtleTogJ2Nhc2VjaGFuZ2UnLCBuYW1lOiAnQ2FzZSBDaGFuZ2UnLCB0eXBlOiBQbHVnaW5UeXBlLlByZW1pdW0gfSxcbiAgeyBrZXk6ICdjaGVja2xpc3QnLCBuYW1lOiAnQ2hlY2tsaXN0JywgdHlwZTogUGx1Z2luVHlwZS5QcmVtaXVtIH0sXG4gIHsga2V5OiAnYWR2Y29kZScsIG5hbWU6ICdFbmhhbmNlZCBDb2RlIEVkaXRvcicsIHR5cGU6IFBsdWdpblR5cGUuUHJlbWl1bSB9LFxuICB7IGtleTogJ21lZGlhZW1iZWQnLCBuYW1lOiAnRW5oYW5jZWQgTWVkaWEgRW1iZWQnLCB0eXBlOiBQbHVnaW5UeXBlLlByZW1pdW0sIHNsdWc6ICdpbnRyb2R1Y3Rpb24tdG8tbWVkaWFlbWJlZCcgfSxcbiAgeyBrZXk6ICdhZHZ0YWJsZScsIG5hbWU6ICdFbmhhbmNlZCBUYWJsZXMnLCB0eXBlOiBQbHVnaW5UeXBlLlByZW1pdW0gfSxcbiAgeyBrZXk6ICdleHBvcnRwZGYnLCBuYW1lOiAnRXhwb3J0IHRvIFBERicsIHR5cGU6IFBsdWdpblR5cGUuUHJlbWl1bSB9LFxuICB7IGtleTogJ2V4cG9ydHdvcmQnLCBuYW1lOiAnRXhwb3J0IHRvIFdvcmQnLCB0eXBlOiBQbHVnaW5UeXBlLlByZW1pdW0gfSxcbiAgeyBrZXk6ICdmb290bm90ZXMnLCBuYW1lOiAnRm9vdG5vdGVzJywgdHlwZTogUGx1Z2luVHlwZS5QcmVtaXVtIH0sXG4gIHsga2V5OiAnZm9ybWF0cGFpbnRlcicsIG5hbWU6ICdGb3JtYXQgUGFpbnRlcicsIHR5cGU6IFBsdWdpblR5cGUuUHJlbWl1bSB9LFxuICB7IGtleTogJ2VkaXRpbWFnZScsIG5hbWU6ICdJbWFnZSBFZGl0aW5nJywgdHlwZTogUGx1Z2luVHlwZS5QcmVtaXVtIH0sXG4gIHsga2V5OiAndXBsb2FkY2FyZScsIG5hbWU6ICdJbWFnZSBPcHRpbWl6ZXIgUG93ZXJlZCBieSBVcGxvYWRjYXJlJywgdHlwZTogUGx1Z2luVHlwZS5QcmVtaXVtIH0sXG4gIHsga2V5OiAnaW1wb3J0d29yZCcsIG5hbWU6ICdJbXBvcnQgZnJvbSBXb3JkJywgdHlwZTogUGx1Z2luVHlwZS5QcmVtaXVtIH0sXG4gIHsga2V5OiAnaW5saW5lY3NzJywgbmFtZTogJ0lubGluZSBDU1MnLCB0eXBlOiBQbHVnaW5UeXBlLlByZW1pdW0sIHNsdWc6ICdpbmxpbmUtY3NzJyB9LFxuICB7IGtleTogJ2xpbmtjaGVja2VyJywgbmFtZTogJ0xpbmsgQ2hlY2tlcicsIHR5cGU6IFBsdWdpblR5cGUuUHJlbWl1bSB9LFxuICB7IGtleTogJ21hdGgnLCBuYW1lOiAnTWF0aCcsIHR5cGU6IFBsdWdpblR5cGUuUHJlbWl1bSB9LFxuICB7IGtleTogJ21hcmtkb3duJywgbmFtZTogJ01hcmtkb3duJywgdHlwZTogUGx1Z2luVHlwZS5QcmVtaXVtIH0sXG4gIHsga2V5OiAnbWVudGlvbnMnLCBuYW1lOiAnTWVudGlvbnMnLCB0eXBlOiBQbHVnaW5UeXBlLlByZW1pdW0gfSxcbiAgeyBrZXk6ICdtZXJnZXRhZ3MnLCBuYW1lOiAnTWVyZ2UgVGFncycsIHR5cGU6IFBsdWdpblR5cGUuUHJlbWl1bSB9LFxuICB7IGtleTogJ3BhZ2VlbWJlZCcsIG5hbWU6ICdQYWdlIEVtYmVkJywgdHlwZTogUGx1Z2luVHlwZS5QcmVtaXVtIH0sXG4gIHsga2V5OiAncGVybWFuZW50cGVuJywgbmFtZTogJ1Blcm1hbmVudCBQZW4nLCB0eXBlOiBQbHVnaW5UeXBlLlByZW1pdW0gfSxcbiAgeyBrZXk6ICdwb3dlcnBhc3RlJywgbmFtZTogJ1Bvd2VyUGFzdGUnLCB0eXBlOiBQbHVnaW5UeXBlLlByZW1pdW0sIHNsdWc6ICdpbnRyb2R1Y3Rpb24tdG8tcG93ZXJwYXN0ZScgfSxcbiAgeyBrZXk6ICdyZXZpc2lvbmhpc3RvcnknLCBuYW1lOiAnUmV2aXNpb24gSGlzdG9yeScsIHR5cGU6IFBsdWdpblR5cGUuUHJlbWl1bSB9LFxuICB7IGtleTogJ3RpbnltY2VzcGVsbGNoZWNrZXInLCBuYW1lOiAnU3BlbGwgQ2hlY2tlcicsIHR5cGU6IFBsdWdpblR5cGUuUHJlbWl1bSwgc2x1ZzogJ2ludHJvZHVjdGlvbi10by10aW55LXNwZWxsY2hlY2tlcicgfSxcbiAgeyBrZXk6ICdzdWdnZXN0ZWRlZGl0cycsIG5hbWU6ICdTdWdnZXN0ZWQgRWRpdHMnLCB0eXBlOiBQbHVnaW5UeXBlLlByZW1pdW0gfSxcbiAgeyBrZXk6ICdhdXRvY29ycmVjdCcsIG5hbWU6ICdTcGVsbGluZyBBdXRvY29ycmVjdCcsIHR5cGU6IFBsdWdpblR5cGUuUHJlbWl1bSB9LFxuICB7IGtleTogJ3RhYmxlb2Zjb250ZW50cycsIG5hbWU6ICdUYWJsZSBvZiBDb250ZW50cycsIHR5cGU6IFBsdWdpblR5cGUuUHJlbWl1bSB9LFxuICB7IGtleTogJ2Z1bGxwYWdlaHRtbCcsIG5hbWU6ICdGdWxscGFnZSBIVE1MJywgdHlwZTogUGx1Z2luVHlwZS5QcmVtaXVtIH0sXG4gIHsga2V5OiAnYWR2dGVtcGxhdGUnLCBuYW1lOiAnVGVtcGxhdGVzJywgdHlwZTogUGx1Z2luVHlwZS5QcmVtaXVtLCBzbHVnOiAnYWR2YW5jZWQtdGVtcGxhdGVzJyB9LFxuICB7IGtleTogJ3Rpbnljb21tZW50cycsIG5hbWU6ICdUaW55IENvbW1lbnRzJywgdHlwZTogUGx1Z2luVHlwZS5QcmVtaXVtLCBzbHVnOiAnaW50cm9kdWN0aW9uLXRvLXRpbnktY29tbWVudHMnIH0sXG4gIHsga2V5OiAndGlueWRyaXZlJywgbmFtZTogJ1RpbnkgRHJpdmUnLCB0eXBlOiBQbHVnaW5UeXBlLlByZW1pdW0sIHNsdWc6ICd0aW55ZHJpdmUtaW50cm9kdWN0aW9uJyB9LFxuXSwgKGl0ZW0pID0+ICh7XG4gIC4uLml0ZW0sXG4gIC8vIFNldCB0aGUgZGVmYXVsdHMvZmFsbGJhY2tzIGZvciB0aGUgcGx1Z2luIHVybHNcbiAgdHlwZTogaXRlbS50eXBlIHx8IFBsdWdpblR5cGUuT3BlblNvdXJjZSxcbiAgc2x1ZzogaXRlbS5zbHVnIHx8IGl0ZW0ua2V5XG59KSk7XG5cbmV4cG9ydCB7XG4gIHVybHNcbn07XG4iLCJpbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuXG5jb25zdCByZWdpc3RlciA9IChlZGl0b3I6IEVkaXRvciwgZGlhbG9nT3BlbmVyOiAoKSA9PiB2b2lkKTogdm9pZCA9PiB7XG4gIGVkaXRvci51aS5yZWdpc3RyeS5hZGRCdXR0b24oJ2hlbHAnLCB7XG4gICAgaWNvbjogJ2hlbHAnLFxuICAgIHRvb2x0aXA6ICdIZWxwJyxcbiAgICBvbkFjdGlvbjogZGlhbG9nT3BlbmVyLFxuICAgIGNvbnRleHQ6ICdhbnknXG4gIH0pO1xuXG4gIGVkaXRvci51aS5yZWdpc3RyeS5hZGRNZW51SXRlbSgnaGVscCcsIHtcbiAgICB0ZXh0OiAnSGVscCcsXG4gICAgaWNvbjogJ2hlbHAnLFxuICAgIHNob3J0Y3V0OiAnQWx0KzAnLFxuICAgIG9uQWN0aW9uOiBkaWFsb2dPcGVuZXIsXG4gICAgY29udGV4dDogJ2FueSdcbiAgfSk7XG59O1xuXG5leHBvcnQge1xuICByZWdpc3RlclxufTtcbiIsImltcG9ydCB7IEFyciwgSWQsIE9iaiwgT3B0aW9uYWwsIE9wdGlvbmFscywgVHlwZSB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmltcG9ydCB0eXBlIEVkaXRvciBmcm9tICd0aW55bWNlL2NvcmUvYXBpL0VkaXRvcic7XG5pbXBvcnQgdHlwZSB7IERpYWxvZyB9IGZyb20gJ3RpbnltY2UvY29yZS9hcGkvdWkvVWknO1xuXG5pbXBvcnQgKiBhcyBPcHRpb25zIGZyb20gJy4uL2FwaS9PcHRpb25zJztcbmltcG9ydCB0eXBlIHsgQ3VzdG9tVGFiU3BlY3MsIFRhYlNwZWNzIH0gZnJvbSAnLi4vUGx1Z2luJztcblxuaW1wb3J0ICogYXMgS2V5Ym9hcmROYXZUYWIgZnJvbSAnLi9LZXlib2FyZE5hdlRhYic7XG5pbXBvcnQgKiBhcyBLZXlib2FyZFNob3J0Y3V0c1RhYiBmcm9tICcuL0tleWJvYXJkU2hvcnRjdXRzVGFiJztcbmltcG9ydCAqIGFzIFBsdWdpbnNUYWIgZnJvbSAnLi9QbHVnaW5zVGFiJztcbmltcG9ydCAqIGFzIFZlcnNpb25UYWIgZnJvbSAnLi9WZXJzaW9uVGFiJztcblxuaW50ZXJmYWNlIFRhYkRhdGEge1xuICByZWFkb25seSB0YWJzOiBUYWJTcGVjcztcbiAgcmVhZG9ubHkgbmFtZXM6IHN0cmluZ1tdO1xufVxuXG5jb25zdCBwYXJzZUhlbHBUYWJzU2V0dGluZyA9ICh0YWJzRnJvbVNldHRpbmdzOiBPcHRpb25zLkhlbHBUYWJzU2V0dGluZywgdGFiczogVGFiU3BlY3MpOiBUYWJEYXRhID0+IHtcbiAgY29uc3QgbmV3VGFiczogUmVjb3JkPHN0cmluZywgYW55PiA9IHt9O1xuICBjb25zdCBuYW1lcyA9IEFyci5tYXAodGFic0Zyb21TZXR0aW5ncywgKHQpID0+IHtcbiAgICBpZiAoVHlwZS5pc1N0cmluZyh0KSkge1xuICAgICAgLy8gQ29kZSBiZWxvdyBzaG91bGRuJ3QgY2FyZSBpZiBhIHRhYiBuYW1lIGRvZXNuJ3QgaGF2ZSBhIHNwZWMuXG4gICAgICAvLyBJZiB3ZSBmaW5kIGl0IGRvZXMsIHdlJ2xsIG5lZWQgdG8gbWFrZSB0aGlzIHNtYXJ0ZXIuXG4gICAgICAvLyBDdXN0b21UYWJzVGVzdCBoYXMgYSBjYXNlIGZvciB0aGlzLlxuICAgICAgaWYgKE9iai5oYXModGFicywgdCkpIHtcbiAgICAgICAgbmV3VGFic1t0XSA9IHRhYnNbdF07XG4gICAgICB9XG4gICAgICByZXR1cm4gdDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbmFtZSA9IHQubmFtZSA/PyBJZC5nZW5lcmF0ZSgndGFiLW5hbWUnKTtcbiAgICAgIG5ld1RhYnNbbmFtZV0gPSB0O1xuICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHsgdGFiczogbmV3VGFicywgbmFtZXMgfTtcbn07XG5cbmNvbnN0IGdldE5hbWVzRnJvbVRhYnMgPSAodGFiczogVGFiU3BlY3MpOiBUYWJEYXRhID0+IHtcbiAgY29uc3QgbmFtZXMgPSBPYmoua2V5cyh0YWJzKTtcblxuICAvLyBNb3ZlIHRoZSB2ZXJzaW9ucyB0YWIgdG8gdGhlIGVuZCBpZiBpdCBleGlzdHNcbiAgY29uc3QgaWR4ID0gbmFtZXMuaW5kZXhPZigndmVyc2lvbnMnKTtcbiAgaWYgKGlkeCAhPT0gLTEpIHtcbiAgICBuYW1lcy5zcGxpY2UoaWR4LCAxKTtcbiAgICBuYW1lcy5wdXNoKCd2ZXJzaW9ucycpO1xuICB9XG5cbiAgcmV0dXJuIHsgdGFicywgbmFtZXMgfTtcbn07XG5cbmNvbnN0IHBQYXJzZUN1c3RvbVRhYnMgPSBhc3luYyAoZWRpdG9yOiBFZGl0b3IsIGN1c3RvbVRhYnM6IEN1c3RvbVRhYlNwZWNzLCBwbHVnaW5Vcmw6IHN0cmluZyk6IFByb21pc2U8VGFiRGF0YT4gPT4ge1xuICBjb25zdCBzaG9ydGN1dHMgPSBLZXlib2FyZFNob3J0Y3V0c1RhYi50YWIoKTtcbiAgY29uc3QgbmF2ID0gYXdhaXQgS2V5Ym9hcmROYXZUYWIucFRhYihwbHVnaW5VcmwpO1xuICBjb25zdCBwbHVnaW5zID0gUGx1Z2luc1RhYi50YWIoZWRpdG9yKTtcbiAgY29uc3QgdmVyc2lvbnMgPSBWZXJzaW9uVGFiLnRhYigpO1xuICBjb25zdCB0YWJzID0ge1xuICAgIFtzaG9ydGN1dHMubmFtZV06IHNob3J0Y3V0cyxcbiAgICBbbmF2Lm5hbWVdOiBuYXYsXG4gICAgW3BsdWdpbnMubmFtZV06IHBsdWdpbnMsXG4gICAgW3ZlcnNpb25zLm5hbWVdOiB2ZXJzaW9ucyxcbiAgICAuLi5jdXN0b21UYWJzLmdldCgpXG4gIH07XG5cbiAgcmV0dXJuIE9wdGlvbmFsLmZyb20oT3B0aW9ucy5nZXRIZWxwVGFicyhlZGl0b3IpKS5mb2xkKFxuICAgICgpID0+IGdldE5hbWVzRnJvbVRhYnModGFicyksXG4gICAgKHRhYnNGcm9tU2V0dGluZ3M6IE9wdGlvbnMuSGVscFRhYnNTZXR0aW5nKSA9PiBwYXJzZUhlbHBUYWJzU2V0dGluZyh0YWJzRnJvbVNldHRpbmdzLCB0YWJzKVxuICApO1xufTtcblxuY29uc3QgaW5pdCA9IChlZGl0b3I6IEVkaXRvciwgY3VzdG9tVGFiczogQ3VzdG9tVGFiU3BlY3MsIHBsdWdpblVybDogc3RyaW5nKSA9PiAoKTogdm9pZCA9PiB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZmxvYXRpbmctcHJvbWlzZXNcbiAgcFBhcnNlQ3VzdG9tVGFicyhlZGl0b3IsIGN1c3RvbVRhYnMsIHBsdWdpblVybCkudGhlbigoeyB0YWJzLCBuYW1lcyB9KSA9PiB7XG4gICAgY29uc3QgZm91bmRUYWJzOiBPcHRpb25hbDxEaWFsb2cuVGFiU3BlYz5bXSA9IEFyci5tYXAobmFtZXMsIChuYW1lKSA9PiBPYmouZ2V0KHRhYnMsIG5hbWUpKTtcbiAgICBjb25zdCBkaWFsb2dUYWJzOiBEaWFsb2cuVGFiU3BlY1tdID0gT3B0aW9uYWxzLmNhdChmb3VuZFRhYnMpO1xuXG4gICAgY29uc3QgYm9keTogRGlhbG9nLlRhYlBhbmVsU3BlYyA9IHtcbiAgICAgIHR5cGU6ICd0YWJwYW5lbCcsXG4gICAgICB0YWJzOiBkaWFsb2dUYWJzXG4gICAgfTtcbiAgICBlZGl0b3Iud2luZG93TWFuYWdlci5vcGVuKFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ0hlbHAnLFxuICAgICAgICBzaXplOiAnbWVkaXVtJyxcbiAgICAgICAgYm9keSxcbiAgICAgICAgYnV0dG9uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdjYW5jZWwnLFxuICAgICAgICAgICAgbmFtZTogJ2Nsb3NlJyxcbiAgICAgICAgICAgIHRleHQ6ICdDbG9zZScsXG4gICAgICAgICAgICBwcmltYXJ5OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBpbml0aWFsRGF0YToge31cbiAgICAgIH1cbiAgICApO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IGluaXQgfTtcbiIsImltcG9ydCB0eXBlIHsgRGlhbG9nIH0gZnJvbSAndGlueW1jZS9jb3JlL2FwaS91aS9VaSc7XG5cbmltcG9ydCAqIGFzIEtleWJvYXJkTmF2VGFiSTE4biBmcm9tICcuL0tleWJvYXJkTmF2VGFiSTE4bic7XG5cbmNvbnN0IHBUYWIgPSBhc3luYyAocGx1Z2luVXJsOiBzdHJpbmcpOiBQcm9taXNlPERpYWxvZy5UYWJTcGVjICYgeyBuYW1lOiBzdHJpbmcgfT4gPT4ge1xuICBjb25zdCBib2R5OiBEaWFsb2cuQm9keUNvbXBvbmVudFNwZWMgPSB7XG4gICAgdHlwZTogJ2h0bWxwYW5lbCcsXG4gICAgcHJlc2V0czogJ2RvY3VtZW50JyxcbiAgICBodG1sOiBhd2FpdCBLZXlib2FyZE5hdlRhYkkxOG4ucExvYWRJMThuSHRtbChwbHVnaW5VcmwpXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAna2V5Ym9hcmRuYXYnLFxuICAgIHRpdGxlOiAnS2V5Ym9hcmQgTmF2aWdhdGlvbicsXG4gICAgaXRlbXM6IFsgYm9keSBdXG4gIH07XG59O1xuXG5leHBvcnQge1xuICBwVGFiXG59O1xuIiwiaW1wb3J0IHR5cGUgRWRpdG9yIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvRWRpdG9yJztcbmltcG9ydCBSZXNvdXJjZSBmcm9tICd0aW55bWNlL2NvcmUvYXBpL1Jlc291cmNlJztcbmltcG9ydCBJMThuIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvdXRpbC9JMThuJztcblxuY29uc3QgcExvYWRIdG1sQnlMYW5nQ29kZSA9IChiYXNlVXJsOiBzdHJpbmcsIGxhbmdDb2RlOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4gPT5cbiAgUmVzb3VyY2UubG9hZChgdGlueW1jZS5odG1sLWkxOG4uaGVscC1rZXluYXYuJHtsYW5nQ29kZX1gLCBgJHtiYXNlVXJsfS9qcy9pMThuL2tleW5hdi8ke2xhbmdDb2RlfS5qc2ApO1xuXG5jb25zdCBwTG9hZEkxOG5IdG1sID0gKGJhc2VVcmw6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiA9PlxuICAvLyBUSU5ZLTk5Mjg6IExvYWQgbGFuZ3VhZ2UgZmlsZSBmb3IgdGhlIGN1cnJlbnQgbGFuZ3VhZ2UsIG9yIEVuZ2xpc2ggaWYgdGhlIGZpbGUgaXMgbm90IGF2YWlsYWJsZVxuICBwTG9hZEh0bWxCeUxhbmdDb2RlKGJhc2VVcmwsIEkxOG4uZ2V0Q29kZSgpKS5jYXRjaCgoKSA9PiBwTG9hZEh0bWxCeUxhbmdDb2RlKGJhc2VVcmwsICdlbicpKTtcblxuY29uc3QgaW5pdEkxOG5Mb2FkID0gKGVkaXRvcjogRWRpdG9yLCBiYXNlVXJsOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgZWRpdG9yLm9uKCdpbml0JywgKCkgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZmxvYXRpbmctcHJvbWlzZXNcbiAgICBwTG9hZEkxOG5IdG1sKGJhc2VVcmwpO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7XG4gIGluaXRJMThuTG9hZCxcbiAgcExvYWRJMThuSHRtbFxufTtcbiIsImltcG9ydCB7IEFyciB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmltcG9ydCB0eXBlIHsgRGlhbG9nIH0gZnJvbSAndGlueW1jZS9jb3JlL2FwaS91aS9VaSc7XG5cbmltcG9ydCAqIGFzIENvbnZlcnRTaG9ydGN1dCBmcm9tICcuLi9hbGllbi9Db252ZXJ0U2hvcnRjdXQnO1xuaW1wb3J0ICogYXMgS2V5Ym9hcmRTaG9ydGN1dHMgZnJvbSAnLi4vZGF0YS9LZXlib2FyZFNob3J0Y3V0cyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2hvcnRjdXRBY3Rpb25QYWlyVHlwZSB7XG4gIHNob3J0Y3V0czogc3RyaW5nW107XG4gIGFjdGlvbjogc3RyaW5nO1xufVxuXG5jb25zdCB0YWIgPSAoKTogRGlhbG9nLlRhYlNwZWMgJiB7IG5hbWU6IHN0cmluZyB9ID0+IHtcbiAgY29uc3Qgc2hvcnRjdXRMaXN0ID0gQXJyLm1hcChLZXlib2FyZFNob3J0Y3V0cy5zaG9ydGN1dHMsIChzaG9ydGN1dDogU2hvcnRjdXRBY3Rpb25QYWlyVHlwZSkgPT4ge1xuICAgIGNvbnN0IHNob3J0Y3V0VGV4dCA9IEFyci5tYXAoc2hvcnRjdXQuc2hvcnRjdXRzLCBDb252ZXJ0U2hvcnRjdXQuY29udmVydFRleHQpLmpvaW4oJyBvciAnKTtcbiAgICByZXR1cm4gWyBzaG9ydGN1dC5hY3Rpb24sIHNob3J0Y3V0VGV4dCBdO1xuICB9KTtcblxuICBjb25zdCB0YWJsZVBhbmVsOiBEaWFsb2cuVGFibGVTcGVjID0ge1xuICAgIHR5cGU6ICd0YWJsZScsXG4gICAgLy8gVE9ETzogRml4IHRhYmxlIHN0eWxlcyAjVElOWS0yOTA5XG4gICAgaGVhZGVyOiBbICdBY3Rpb24nLCAnU2hvcnRjdXQnIF0sXG4gICAgY2VsbHM6IHNob3J0Y3V0TGlzdFxuICB9O1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdzaG9ydGN1dHMnLFxuICAgIHRpdGxlOiAnSGFuZHkgU2hvcnRjdXRzJyxcbiAgICBpdGVtczogW1xuICAgICAgdGFibGVQYW5lbFxuICAgIF1cbiAgfTtcbn07XG5cbmV4cG9ydCB7XG4gIHRhYlxufTtcbiIsImltcG9ydCB7IEFyciwgT2JqLCBUeXBlIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0IHR5cGUgRWRpdG9yIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvRWRpdG9yJztcbmltcG9ydCB0eXBlIHsgVGlueU1DRSB9IGZyb20gJ3RpbnltY2UvY29yZS9hcGkvVGlueW1jZSc7XG5pbXBvcnQgdHlwZSB7IERpYWxvZyB9IGZyb20gJ3RpbnltY2UvY29yZS9hcGkvdWkvVWknO1xuaW1wb3J0IEkxOG4gZnJvbSAndGlueW1jZS9jb3JlL2FwaS91dGlsL0kxOG4nO1xuXG5pbXBvcnQgKiBhcyBPcHRpb25zIGZyb20gJy4uL2FwaS9PcHRpb25zJztcbmltcG9ydCAqIGFzIFBsdWdpblVybHMgZnJvbSAnLi4vZGF0YS9QbHVnaW5VcmxzJztcblxuZGVjbGFyZSBsZXQgdGlueW1jZTogVGlueU1DRTtcblxuaW50ZXJmYWNlIFBsdWdpbkRhdGEge1xuICAvLyBUaGUgbmFtZSBpcyBqdXN0IHVzZWQgZm9yIHNvcnRpbmcgYWxwaGFiZXRpY2FsbHkuXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgcmVhZG9ubHkgaHRtbDogc3RyaW5nO1xufVxuXG5jb25zdCB0YWIgPSAoZWRpdG9yOiBFZGl0b3IpOiBEaWFsb2cuVGFiU3BlYyAmIHsgbmFtZTogc3RyaW5nIH0gPT4ge1xuICBjb25zdCBhdmFpbGFibGVQbHVnaW5zID0gKCkgPT4ge1xuICAgIGNvbnN0IHByZW1pdW1QbHVnaW5zID0gQXJyLmZpbHRlcihQbHVnaW5VcmxzLnVybHMsICh7IHR5cGUgfSkgPT4ge1xuICAgICAgcmV0dXJuIHR5cGUgPT09IFBsdWdpblVybHMuUGx1Z2luVHlwZS5QcmVtaXVtO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgc29ydGVkUHJlbWl1bVBsdWdpbnMgPSBBcnIuc29ydChcbiAgICAgIEFyci5tYXAocHJlbWl1bVBsdWdpbnMsIChwKSA9PiBwLm5hbWUpLFxuICAgICAgKHMxLCBzMikgPT4gczEubG9jYWxlQ29tcGFyZShzMilcbiAgICApO1xuXG4gICAgY29uc3QgcHJlbWl1bVBsdWdpbkxpc3QgPSBBcnIubWFwKHNvcnRlZFByZW1pdW1QbHVnaW5zLCAocGx1Z2luTmFtZSkgPT4gYDxsaT4ke3BsdWdpbk5hbWV9PC9saT5gKS5qb2luKCcnKTtcbiAgICByZXR1cm4gJzxkaXY+JyArXG4gICAgICAnPHA+PGI+JyArIEkxOG4udHJhbnNsYXRlKCdQcmVtaXVtIHBsdWdpbnM6JykgKyAnPC9iPjwvcD4nICtcbiAgICAgICc8dWw+JyArXG4gICAgICBwcmVtaXVtUGx1Z2luTGlzdCArXG4gICAgICAnPGxpIGNsYXNzPVwidG94LWhlbHBfX21vcmUtbGlua1wiIFwiPicgK1xuICAgICAgJzxhIGhyZWY9XCJodHRwczovL3d3dy50aW55LmNsb3VkL3ByaWNpbmcvP3V0bV9jYW1wYWlnbj1oZWxwX2RpYWxvZ19wbHVnaW5fdGFiJnV0bV9zb3VyY2U9dGlueSZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV90ZXJtPXJlYWRfbW9yZSZ1dG1fY29udGVudD1wcmVtaXVtX3BsdWdpbl9oZWFkaW5nXCIgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIicgK1xuICAgICAgJyBkYXRhLWFsbG95LXRhYnN0b3A9XCJ0cnVlXCIgdGFiaW5kZXg9XCItMVwiPicgKyBJMThuLnRyYW5zbGF0ZSgnTGVhcm4gbW9yZS4uLicpICsgJzwvYT48L2xpPicgK1xuICAgICAgJzwvdWw+JyArXG4gICAgICAnPC9kaXY+JztcbiAgfTtcblxuICBjb25zdCBtYWtlTGluayA9IChwOiB7IG5hbWU6IHN0cmluZzsgdXJsOiBzdHJpbmcgfSk6IHN0cmluZyA9PlxuICAgIGA8YSBkYXRhLWFsbG95LXRhYnN0b3A9XCJ0cnVlXCIgdGFiaW5kZXg9XCItMVwiIGhyZWY9XCIke3AudXJsfVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyXCI+JHtwLm5hbWV9PC9hPmA7XG5cbiAgY29uc3QgaWRlbnRpZnlVbmtub3duUGx1Z2luID0gKGVkaXRvcjogRWRpdG9yLCBrZXk6IHN0cmluZyk6IFBsdWdpbkRhdGEgPT4ge1xuICAgIGNvbnN0IGdldE1ldGFkYXRhID0gZWRpdG9yLnBsdWdpbnNba2V5XS5nZXRNZXRhZGF0YTtcbiAgICBpZiAoVHlwZS5pc0Z1bmN0aW9uKGdldE1ldGFkYXRhKSkge1xuICAgICAgY29uc3QgbWV0YWRhdGEgPSBnZXRNZXRhZGF0YSgpO1xuICAgICAgcmV0dXJuIHsgbmFtZTogbWV0YWRhdGEubmFtZSwgaHRtbDogbWFrZUxpbmsobWV0YWRhdGEpIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7IG5hbWU6IGtleSwgaHRtbDoga2V5IH07XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdldFBsdWdpbkRhdGEgPSAoZWRpdG9yOiBFZGl0b3IsIGtleTogc3RyaW5nKTogUGx1Z2luRGF0YSA9PiBBcnIuZmluZChQbHVnaW5VcmxzLnVybHMsICh4KSA9PiB7XG4gICAgcmV0dXJuIHgua2V5ID09PSBrZXk7XG4gIH0pLmZvbGQoKCkgPT4ge1xuICAgIHJldHVybiBpZGVudGlmeVVua25vd25QbHVnaW4oZWRpdG9yLCBrZXkpO1xuICB9LCAoeCkgPT4ge1xuICAgIC8vIFdlIGtub3cgdGhpcyBwbHVnaW4sIHNvIHVzZSBvdXIgc3RvcmVkIGRldGFpbHMuXG4gICAgY29uc3QgbmFtZSA9IHgudHlwZSA9PT0gUGx1Z2luVXJscy5QbHVnaW5UeXBlLlByZW1pdW0gPyBgJHt4Lm5hbWV9KmAgOiB4Lm5hbWU7XG4gICAgY29uc3QgaHRtbCA9IG1ha2VMaW5rKHsgbmFtZSwgdXJsOiBgaHR0cHM6Ly93d3cudGlueS5jbG91ZC9kb2NzL3RpbnltY2UvJHt0aW55bWNlLm1ham9yVmVyc2lvbn0vJHt4LnNsdWd9L2AgfSk7XG4gICAgcmV0dXJuIHsgbmFtZSwgaHRtbCB9O1xuICB9KTtcblxuICBjb25zdCBnZXRQbHVnaW5LZXlzID0gKGVkaXRvcjogRWRpdG9yKSA9PiB7XG4gICAgY29uc3Qga2V5cyA9IE9iai5rZXlzKGVkaXRvci5wbHVnaW5zKTtcbiAgICBjb25zdCBmb3JjZWRQbHVnaW5zID0gT3B0aW9ucy5nZXRGb3JjZWRQbHVnaW5zKGVkaXRvcik7XG4gICAgY29uc3QgaGlkZGVuUGx1Z2lucyA9IFR5cGUuaXNVbmRlZmluZWQoZm9yY2VkUGx1Z2lucykgPyBbICdvbmJvYXJkaW5nJywgJ2xpY2Vuc2VrZXltYW5hZ2VyJyBdIDogZm9yY2VkUGx1Z2lucy5jb25jYXQoWyAnb25ib2FyZGluZycsICdsaWNlbnNla2V5bWFuYWdlcicgXSApO1xuXG4gICAgcmV0dXJuIEFyci5maWx0ZXIoa2V5cywgKGspID0+ICFBcnIuY29udGFpbnMoaGlkZGVuUGx1Z2lucywgaykpO1xuICB9O1xuXG4gIGNvbnN0IHBsdWdpbkxpc3RlciA9IChlZGl0b3I6IEVkaXRvcikgPT4ge1xuICAgIGNvbnN0IHBsdWdpbktleXMgPSBnZXRQbHVnaW5LZXlzKGVkaXRvcik7XG4gICAgY29uc3Qgc29ydGVkUGx1Z2luRGF0YSA9IEFyci5zb3J0KFxuICAgICAgQXJyLm1hcChwbHVnaW5LZXlzLCAoaykgPT4gZ2V0UGx1Z2luRGF0YShlZGl0b3IsIGspKSxcbiAgICAgIChwZDEsIHBkMikgPT4gcGQxLm5hbWUubG9jYWxlQ29tcGFyZShwZDIubmFtZSlcbiAgICApO1xuXG4gICAgY29uc3QgcGx1Z2luTGlzID0gQXJyLm1hcChzb3J0ZWRQbHVnaW5EYXRhLCAoa2V5KSA9PiB7XG4gICAgICByZXR1cm4gJzxsaT4nICsga2V5Lmh0bWwgKyAnPC9saT4nO1xuICAgIH0pO1xuICAgIGNvbnN0IGNvdW50ID0gcGx1Z2luTGlzLmxlbmd0aDtcbiAgICBjb25zdCBwbHVnaW5zU3RyaW5nID0gcGx1Z2luTGlzLmpvaW4oJycpO1xuXG4gICAgY29uc3QgaHRtbCA9ICc8cD48Yj4nICsgSTE4bi50cmFuc2xhdGUoWyAnUGx1Z2lucyBpbnN0YWxsZWQgKHswfSk6JywgY291bnQgXSkgKyAnPC9iPjwvcD4nICtcbiAgICAgICc8dWw+JyArIHBsdWdpbnNTdHJpbmcgKyAnPC91bD4nO1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH07XG5cbiAgY29uc3QgaW5zdGFsbGVkUGx1Z2lucyA9IChlZGl0b3I6IEVkaXRvcikgPT4ge1xuICAgIGlmIChlZGl0b3IgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gJzxkaXY+JyArXG4gICAgICBwbHVnaW5MaXN0ZXIoZWRpdG9yKSArXG4gICAgICAnPC9kaXY+JztcbiAgfTtcblxuICBjb25zdCBodG1sUGFuZWw6IERpYWxvZy5IdG1sUGFuZWxTcGVjID0ge1xuICAgIHR5cGU6ICdodG1scGFuZWwnLFxuICAgIHByZXNldHM6ICdkb2N1bWVudCcsXG4gICAgaHRtbDogW1xuICAgICAgaW5zdGFsbGVkUGx1Z2lucyhlZGl0b3IpLFxuICAgICAgYXZhaWxhYmxlUGx1Z2lucygpXG4gICAgXS5qb2luKCcnKVxuICB9O1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdwbHVnaW5zJyxcbiAgICB0aXRsZTogJ1BsdWdpbnMnLFxuICAgIGl0ZW1zOiBbXG4gICAgICBodG1sUGFuZWxcbiAgICBdXG4gIH07XG59O1xuXG5leHBvcnQge1xuICB0YWJcbn07XG4iLCJpbXBvcnQgRWRpdG9yTWFuYWdlciBmcm9tICd0aW55bWNlL2NvcmUvYXBpL0VkaXRvck1hbmFnZXInO1xuaW1wb3J0IHR5cGUgeyBEaWFsb2cgfSBmcm9tICd0aW55bWNlL2NvcmUvYXBpL3VpL1VpJztcbmltcG9ydCBJMThuIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvdXRpbC9JMThuJztcblxuY29uc3QgdGFiID0gKCk6IERpYWxvZy5UYWJTcGVjICYgeyBuYW1lOiBzdHJpbmcgfSA9PiB7XG4gIGNvbnN0IGdldFZlcnNpb24gPSAobWFqb3I6IHN0cmluZywgbWlub3I6IHN0cmluZykgPT4gbWFqb3IuaW5kZXhPZignQCcpID09PSAwID8gJ1guWC5YJyA6IG1ham9yICsgJy4nICsgbWlub3I7XG4gIGNvbnN0IHZlcnNpb24gPSBnZXRWZXJzaW9uKEVkaXRvck1hbmFnZXIubWFqb3JWZXJzaW9uLCBFZGl0b3JNYW5hZ2VyLm1pbm9yVmVyc2lvbik7XG4gIGNvbnN0IGNoYW5nZUxvZ0xpbmsgPSAnPGEgZGF0YS1hbGxveS10YWJzdG9wPVwidHJ1ZVwiIHRhYmluZGV4PVwiLTFcIiBocmVmPVwiaHR0cHM6Ly93d3cudGlueS5jbG91ZC9kb2NzL3RpbnltY2UvOC9jaGFuZ2Vsb2cvP3V0bV9jYW1wYWlnbj1oZWxwX2RpYWxvZ192ZXJzaW9uX3RhYiZ1dG1fc291cmNlPXRpbnkmdXRtX21lZGl1bT1yZWZlcnJhbFwiIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+VGlueU1DRSAnICsgdmVyc2lvbiArICc8L2E+JztcblxuICBjb25zdCBodG1sUGFuZWw6IERpYWxvZy5IdG1sUGFuZWxTcGVjID0ge1xuICAgIHR5cGU6ICdodG1scGFuZWwnLFxuICAgIGh0bWw6ICc8cD4nICsgSTE4bi50cmFuc2xhdGUoWyAnWW91IGFyZSB1c2luZyB7MH0nLCBjaGFuZ2VMb2dMaW5rIF0pICsgJzwvcD4nLFxuICAgIHByZXNldHM6ICdkb2N1bWVudCdcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICd2ZXJzaW9ucycsXG4gICAgdGl0bGU6ICdWZXJzaW9uJyxcbiAgICBpdGVtczogW1xuICAgICAgaHRtbFBhbmVsXG4gICAgXVxuICB9O1xufTtcblxuZXhwb3J0IHtcbiAgdGFiXG59O1xuIiwiaW1wb3J0ICogYXMgVHlwZSBmcm9tICcuLi9jb3JlL1R5cGUnO1xuaW1wb3J0ICogYXMgQXJyYXlVdGlsIGZyb20gJy4uL2NvcmUvQXJyYXlVdGlsJztcblxuLyoqIEEgd2F5IG9mIGNvbXBhcmluZyB0d28gdmFsdWVzIG9mIHRoZSBzYW1lIHR5cGUgZm9yIGVxdWFsaXR5LiAqL1xuZXhwb3J0IGludGVyZmFjZSBFcTxBPiB7XG4gIGVxOiAoeDogQSwgeTogQSkgPT4gYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGNvbnRyYW1hcCA9IDxBLCBCPiAoZXFhOiBFcTxBPiwgZjogKGI6IEIpID0+IEEpOiBFcTxCPiA9PlxuICBlcSgoeCwgeSkgPT4gZXFhLmVxKGYoeCksIGYoeSkpKTtcblxuZXhwb3J0IGNvbnN0IGVxID0gPEE+IChmOiAoeDogQSwgeTogQSkgPT4gYm9vbGVhbik6IEVxPEE+ID0+XG4gICh7IGVxOiBmIH0pO1xuXG5leHBvcnQgY29uc3QgdHJpcGxlRXE6IEVxPGFueT4gPSBlcSgoeCwgeSkgPT4geCA9PT0geSk7XG5cbmV4cG9ydCBjb25zdCBlcVN0cmluZzogRXE8c3RyaW5nPiA9IHRyaXBsZUVxO1xuXG5leHBvcnQgY29uc3QgZXFCb29sZWFuOiBFcTxib29sZWFuPiA9IHRyaXBsZUVxO1xuXG5leHBvcnQgY29uc3QgZXFOdW1iZXI6IEVxPG51bWJlcj4gPSB0cmlwbGVFcTtcblxuZXhwb3J0IGNvbnN0IGVxVW5kZWZpbmVkOiBFcTx1bmRlZmluZWQ+ID0gdHJpcGxlRXE7XG5cbmV4cG9ydCBjb25zdCBlcU51bGw6IEVxPG51bGw+ID0gdHJpcGxlRXE7XG5cbmV4cG9ydCBjb25zdCBlcUFycmF5ID0gPEE+IChlcWE6IEVxPEE+KTogRXE8QXJyYXlMaWtlPEE+PiA9PiBlcSgoeCwgeSkgPT4ge1xuICBpZiAoeC5sZW5ndGggIT09IHkubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGxlbiA9IHgubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKCFlcWEuZXEoeFtpXSwgeVtpXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59KTtcblxuLy8gVE9ETzogTWFrZSBhbiBPcmQgdHlwZWNsYXNzXG5jb25zdCBlcVNvcnRlZEFycmF5ID0gPEE+KGVxYTogRXE8QT4sIGNvbXBhcmVGbj86IChhOiBBLCBiOiBBKSA9PiBudW1iZXIpOiBFcTxBcnJheUxpa2U8QT4+ID0+XG4gIGNvbnRyYW1hcChlcUFycmF5KGVxYSksICh4cykgPT4gQXJyYXlVdGlsLnNvcnQoeHMsIGNvbXBhcmVGbikpO1xuXG5leHBvcnQgY29uc3QgZXFSZWNvcmQgPSA8QT4gKGVxYTogRXE8QT4pOiBFcTxSZWNvcmQ8c3RyaW5nLCBBPj4gPT4gZXEoKHgsIHkpID0+IHtcbiAgY29uc3Qga3ggPSBPYmplY3Qua2V5cyh4KTtcbiAgY29uc3Qga3kgPSBPYmplY3Qua2V5cyh5KTtcbiAgaWYgKCFlcVNvcnRlZEFycmF5KGVxU3RyaW5nKS5lcShreCwga3kpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGxlbiA9IGt4Lmxlbmd0aDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHEgPSBreFtpXTtcbiAgICBpZiAoIWVxYS5lcSh4W3FdLCB5W3FdKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn0pO1xuXG5leHBvcnQgY29uc3QgZXFBbnk6IEVxPGFueT4gPSBlcSgoeCwgeSkgPT4ge1xuICBpZiAoeCA9PT0geSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgY29uc3QgdHggPSBUeXBlLnR5cGVPZih4KTtcbiAgY29uc3QgdHkgPSBUeXBlLnR5cGVPZih5KTtcbiAgaWYgKHR4ICE9PSB0eSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChUeXBlLmlzRXF1YXRhYmxlVHlwZSh0eCkpIHtcbiAgICByZXR1cm4geCA9PT0geTtcblxuICB9IGVsc2UgaWYgKHR4ID09PSAnYXJyYXknKSB7XG4gICAgcmV0dXJuIGVxQXJyYXkoZXFBbnkpLmVxKHgsIHkpO1xuXG4gIH0gZWxzZSBpZiAodHggPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGVxUmVjb3JkKGVxQW55KS5lcSh4LCB5KTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn0pO1xuIiwiZXhwb3J0IGNvbnN0IG1hcCA9IDxBLCBCPih4czogQXJyYXlMaWtlPEE+LCBmOiAoYTogQSkgPT4gQik6IEJbXSA9PiB7XG4gIGNvbnN0IGxlbiA9IHhzLmxlbmd0aDtcbiAgY29uc3QgciA9IG5ldyBBcnJheShsZW4pO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIHJbaV0gPSBmKHgpO1xuICB9XG4gIHJldHVybiByO1xufTtcblxuLyoqIG1hcCBhIGZ1bmN0aW9uIG92ZXIgYW4gYXJyYXksIHRoZW4gbWFwIGFub3RoZXIgZnVuY3Rpb24gb3ZlciBldmVyeSBpdGVtIGV4Y2VwdCB0aGUgbGFzdCAqL1xuZXhwb3J0IGNvbnN0IG1hcERlbGltaXQgPSA8QSwgQj4gKHhzOiBBcnJheUxpa2U8QT4sIGY6IChhOiBBKSA9PiBCLCBkZWxpbWl0OiAoYjogQikgPT4gQik6IEJbXSA9PiB7XG4gIGNvbnN0IGxlbiA9IHhzLmxlbmd0aDtcbiAgY29uc3QgciA9IG5ldyBBcnJheShsZW4pO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbiAtIDE7IGkrKykge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICByW2ldID0gZGVsaW1pdChmKHgpKTtcbiAgfVxuICBpZiAobGVuID4gMCkge1xuICAgIHJbbGVuIC0gMV0gPSAoZih4c1tsZW4gLSAxXSkpO1xuICB9XG5cbiAgcmV0dXJuIHI7XG59O1xuXG5leHBvcnQgY29uc3Qgc29ydCA9IDxBPiAoeHM6IEFycmF5TGlrZTxBPiwgY29tcGFyZUZuPzogKGE6IEEsIGI6IEEpID0+IG51bWJlcik6IEFbXSA9PiB7XG4gIGNvbnN0IGNsb25lOiBBW10gPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh4cyk7XG4gIHJldHVybiBjbG9uZS5zb3J0KGNvbXBhcmVGbik7XG59O1xuIiwiZXhwb3J0IGNvbnN0IHR5cGVPZiA9ICh4OiBhbnkpID0+IHtcbiAgaWYgKHggPT09IG51bGwpIHtcbiAgICByZXR1cm4gJ251bGwnO1xuICB9XG4gIGlmICh4ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gJ3VuZGVmaW5lZCc7XG4gIH1cbiAgY29uc3QgdCA9IHR5cGVvZiB4O1xuICBpZiAodCA9PT0gJ29iamVjdCcgJiYgKEFycmF5LnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKHgpIHx8IHguY29uc3RydWN0b3IgJiYgeC5jb25zdHJ1Y3Rvci5uYW1lID09PSAnQXJyYXknKSkge1xuICAgIHJldHVybiAnYXJyYXknO1xuICB9XG4gIGlmICh0ID09PSAnb2JqZWN0JyAmJiAoU3RyaW5nLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKHgpIHx8IHguY29uc3RydWN0b3IgJiYgeC5jb25zdHJ1Y3Rvci5uYW1lID09PSAnU3RyaW5nJykpIHtcbiAgICByZXR1cm4gJ3N0cmluZyc7XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG5jb25zdCBpc1R5cGUgPSA8VD4odHlwZTogc3RyaW5nKSA9PiAodmFsdWU6IGFueSk6IHZhbHVlIGlzIFQgPT4gdHlwZU9mKHZhbHVlKSA9PT0gdHlwZTtcblxuZXhwb3J0IGNvbnN0IGlzU3RyaW5nID0gaXNUeXBlPHN0cmluZz4oJ3N0cmluZycpO1xuZXhwb3J0IGNvbnN0IGlzT2JqZWN0ID0gaXNUeXBlPE9iamVjdD4oJ29iamVjdCcpO1xuZXhwb3J0IGNvbnN0IGlzQXJyYXkgPSBpc1R5cGU8QXJyYXk8dW5rbm93bj4+KCdhcnJheScpO1xuZXhwb3J0IGNvbnN0IGlzTnVsbCA9IGlzVHlwZTxudWxsPignbnVsbCcpO1xuZXhwb3J0IGNvbnN0IGlzQm9vbGVhbiA9IGlzVHlwZTxib29sZWFuPignYm9vbGVhbicpO1xuZXhwb3J0IGNvbnN0IGlzVW5kZWZpbmVkID0gaXNUeXBlPHVuZGVmaW5lZD4oJ3VuZGVmaW5lZCcpO1xuZXhwb3J0IGNvbnN0IGlzRnVuY3Rpb24gPSBpc1R5cGU8RnVuY3Rpb24+KCdmdW5jdGlvbicpO1xuZXhwb3J0IGNvbnN0IGlzTnVtYmVyID0gaXNUeXBlPG51bWJlcj4oJ251bWJlcicpO1xuXG5leHBvcnQgY29uc3QgaXNFcXVhdGFibGVUeXBlID0gKHg6IHN0cmluZyk6IGJvb2xlYW4gPT5cbiAgWyAndW5kZWZpbmVkJywgJ2Jvb2xlYW4nLCAnbnVtYmVyJywgJ3N0cmluZycsICdmdW5jdGlvbicsICd4bWwnLCAnbnVsbCcgXS5pbmRleE9mKHgpICE9PSAtMTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcbiAgICAgICAgaWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuICAgICAgICB9XG4gICAgfVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydiA9ICgpID0+IChcIjEuNS4yXCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydWlkID0gXCJidW5kbGVyPXJzcGFja0AxLjUuMlwiO1xuIiwiaW1wb3J0IFBsdWdpbiBmcm9tICcuL1BsdWdpbic7XG5cblBsdWdpbigpO1xuXG4vKiogKioqKipcbiAqIERPIE5PVCBFWFBPUlQgQU5ZVEhJTkdcbiAqXG4gKiBJRiBZT1UgRE8gUk9MTFVQIFdJTEwgTEVBVkUgQSBHTE9CQUwgT04gVEhFIFBBR0VcbiAqKioqKioqL1xuIl0sIm5hbWVzIjpbIkVxIiwiRnVuIiwiT3B0aW9uYWwiLCJUeXBlIiwibmF0aXZlU2xpY2UiLCJBcnJheSIsIm5hdGl2ZUluZGV4T2YiLCJuYXRpdmVQdXNoIiwicmF3SW5kZXhPZiIsInRzIiwidCIsImluZGV4T2YiLCJ4cyIsIngiLCJyIiwiY29udGFpbnMiLCJleGlzdHMiLCJwcmVkIiwiaSIsImxlbiIsInJhbmdlIiwibnVtIiwiZiIsImNodW5rIiwiYXJyYXkiLCJzaXplIiwicyIsIm1hcCIsImVhY2giLCJlYWNociIsInBhcnRpdGlvbiIsInBhc3MiLCJmYWlsIiwiYXJyIiwiZmlsdGVyIiwiZ3JvdXBCeSIsIndhc1R5cGUiLCJncm91cCIsInR5cGUiLCJmb2xkciIsImFjYyIsImZvbGRsIiwiZmluZFVudGlsIiwidW50aWwiLCJmaW5kIiwiZmluZEluZGV4IiwiZmluZExhc3RJbmRleCIsImZsYXR0ZW4iLCJFcnJvciIsImJpbmQiLCJmb3JhbGwiLCJlcXVhbCIsImExIiwiYTIiLCJlcSIsInJldmVyc2UiLCJkaWZmZXJlbmNlIiwibWFwVG9PYmplY3QiLCJTdHJpbmciLCJwdXJlIiwic29ydCIsImNvbXBhcmF0b3IiLCJjb3B5IiwiZ2V0IiwiaGVhZCIsImxhc3QiLCJmcm9tIiwiZmluZE1hcCIsInVuaXF1ZSIsImlzRHVwbGljYXRlZCIsIkNlbGwiLCJpbml0aWFsIiwidmFsdWUiLCJzZXQiLCJ2Iiwibm9vcCIsIm5vYXJnIiwiY29tcG9zZSIsImZhIiwiZmIiLCJhcmdzIiwiY29tcG9zZTEiLCJmYmMiLCJmYWIiLCJhIiwiY29uc3RhbnQiLCJpZGVudGl0eSIsInRyaXBsZUVxdWFscyIsImIiLCJjdXJyeSIsImZuIiwiaW5pdGlhbEFyZ3MiLCJyZXN0QXJncyIsImFsbCIsIm5vdCIsImRpZSIsIm1zZyIsImFwcGx5IiwiY2FsbCIsIm5ldmVyIiwiYWx3YXlzIiwid2Vha2VuIiwicGlwZSIsImFiIiwiYmMiLCJjZCIsImRlIiwiZWYiLCJmZyIsImdoIiwiYyIsImQiLCJlIiwiZyIsIklkVXRpbHMiLCJOdW0iLCJnZW5lcmF0ZSIsInByZWZpeCIsImRhdGUiLCJEYXRlIiwidGltZSIsInJhbmRvbSIsIk1hdGgiLCJ1dWlkVjQiLCJ3aW5kb3ciLCJjeWNsZUJ5IiwiZGVsdGEiLCJtaW4iLCJtYXgiLCJjbGFtcCIsIlVpbnQzMkFycmF5Iiwia2V5cyIsIk9iamVjdCIsImhhc093blByb3BlcnR5Iiwib2JqIiwicHJvcHMiLCJrIiwidHVwbGVNYXAiLCJ0dXBsZSIsIm9iakFjYyIsImludGVybmFsRmlsdGVyIiwib25UcnVlIiwib25GYWxzZSIsImJpZmlsdGVyIiwibWFwVG9BcnJheSIsIm5hbWUiLCJ2YWx1ZXMiLCJrZXkiLCJoYXMiLCJoYXNOb25OdWxsYWJsZUtleSIsInVuZGVmaW5lZCIsImlzRW1wdHkiLCJ0YWciLCJvbk5vbmUiLCJvblNvbWUiLCJtYXBwZXIiLCJiaW5kZXIiLCJwcmVkaWNhdGUiLCJyZXBsYWNlbWVudCIsInRodW5rIiwibWVzc2FnZSIsIndvcmtlciIsIkFyciIsImlzIiwibGhzIiwicmhzIiwibGVmdCIsImVxdWFscyIsImxpZnQyIiwiY2F0IiwicHVzaCIsInNlcXVlbmNlIiwidHJhdmVyc2UiLCJvYSIsIm9iIiwibGlmdDMiLCJvYyIsImxpZnQ0Iiwib2QiLCJsaWZ0NSIsIm9lIiwibWFwRnJvbSIsImJpbmRGcm9tIiwib290Iiwic29tZUlmIiwiZ2V0UHJvdG90eXBlT2YiLCJoYXNQcm90byIsImNvbnN0cnVjdG9yIiwidHlwZU9mIiwibyIsInByb3RvIiwiaXNUeXBlIiwiaXNTaW1wbGVUeXBlIiwiaXNPYmplY3QiLCJpc1N0cmluZyIsImlzUGxhaW5PYmplY3QiLCJpc0FycmF5IiwiaXNOdWxsIiwiaXNCb29sZWFuIiwiaXNVbmRlZmluZWQiLCJpc051bGxhYmxlIiwiaXNOb25OdWxsYWJsZSIsImlzRnVuY3Rpb24iLCJpc051bWJlciIsImlzQXJyYXlPZiIsImlzUHJvbWlzZUxpa2UiLCJ1dWlkVjRCeXRlcyIsImJ5dGVzIiwiVWludDhBcnJheSIsInV1aWRWNFN0cmluZyIsInV1aWQiLCJnZXRIZXhSYW5nZSIsInN0YXJ0SW5kZXgiLCJlbmRJbmRleCIsImJ1ZmYiLCJoZXhCeXRlIiwiUGx1Z2luTWFuYWdlciIsIkFwaSIsIkNvbW1hbmRzIiwiT3B0aW9ucyIsIkJ1dHRvbnMiLCJEaWFsb2ciLCJLZXlib2FyZE5hdlRhYkkxOG4iLCJlZGl0b3IiLCJwbHVnaW5VcmwiLCJjdXN0b21UYWJzIiwiYXBpIiwiZGlhbG9nT3BlbmVyIiwiT2JqIiwiRW52IiwiY29udmVydFRleHQiLCJzb3VyY2UiLCJpc01hYyIsIm1hYyIsIm90aGVyIiwicmVwbGFjZSIsInNob3J0Y3V0IiwidXBkYXRlZCIsInNlZ21lbnQiLCJzZWFyY2giLCJJZCIsImFkZFRhYiIsInNwZWMiLCJjdXJyZW50Q3VzdG9tVGFicyIsInJlZ2lzdGVyIiwib3B0aW9uIiwicmVnaXN0ZXJPcHRpb24iLCJnZXRIZWxwVGFicyIsImdldEZvcmNlZFBsdWdpbnMiLCJzaG9ydGN1dHMiLCJQbHVnaW5UeXBlIiwidXJscyIsIml0ZW0iLCJPcHRpb25hbHMiLCJLZXlib2FyZE5hdlRhYiIsIktleWJvYXJkU2hvcnRjdXRzVGFiIiwiUGx1Z2luc1RhYiIsIlZlcnNpb25UYWIiLCJwYXJzZUhlbHBUYWJzU2V0dGluZyIsInRhYnNGcm9tU2V0dGluZ3MiLCJ0YWJzIiwibmV3VGFicyIsIm5hbWVzIiwiZ2V0TmFtZXNGcm9tVGFicyIsImlkeCIsInBQYXJzZUN1c3RvbVRhYnMiLCJuYXYiLCJwbHVnaW5zIiwidmVyc2lvbnMiLCJpbml0IiwiZm91bmRUYWJzIiwiZGlhbG9nVGFicyIsImJvZHkiLCJwVGFiIiwiUmVzb3VyY2UiLCJJMThuIiwicExvYWRIdG1sQnlMYW5nQ29kZSIsImJhc2VVcmwiLCJsYW5nQ29kZSIsInBMb2FkSTE4bkh0bWwiLCJpbml0STE4bkxvYWQiLCJDb252ZXJ0U2hvcnRjdXQiLCJLZXlib2FyZFNob3J0Y3V0cyIsInRhYiIsInNob3J0Y3V0TGlzdCIsInNob3J0Y3V0VGV4dCIsInRhYmxlUGFuZWwiLCJQbHVnaW5VcmxzIiwiYXZhaWxhYmxlUGx1Z2lucyIsInByZW1pdW1QbHVnaW5zIiwic29ydGVkUHJlbWl1bVBsdWdpbnMiLCJwIiwiczEiLCJzMiIsInByZW1pdW1QbHVnaW5MaXN0IiwicGx1Z2luTmFtZSIsIm1ha2VMaW5rIiwiaWRlbnRpZnlVbmtub3duUGx1Z2luIiwiZ2V0TWV0YWRhdGEiLCJtZXRhZGF0YSIsImdldFBsdWdpbkRhdGEiLCJodG1sIiwidGlueW1jZSIsImdldFBsdWdpbktleXMiLCJmb3JjZWRQbHVnaW5zIiwiaGlkZGVuUGx1Z2lucyIsInBsdWdpbkxpc3RlciIsInBsdWdpbktleXMiLCJzb3J0ZWRQbHVnaW5EYXRhIiwicGQxIiwicGQyIiwicGx1Z2luTGlzIiwiY291bnQiLCJwbHVnaW5zU3RyaW5nIiwiaW5zdGFsbGVkUGx1Z2lucyIsImh0bWxQYW5lbCIsIkVkaXRvck1hbmFnZXIiLCJnZXRWZXJzaW9uIiwibWFqb3IiLCJtaW5vciIsInZlcnNpb24iLCJjaGFuZ2VMb2dMaW5rIiwiUGx1Z2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsNkRBQWUsTUFBTSxFQUFDO0FBQ2Y7Ozs7Ozs7Ozs7Ozs7O0FDSFA7O0FBRUEsNkRBQWUsTUFBTSxFQUFDO0FBQ2Y7Ozs7Ozs7Ozs7Ozs7O0FDSFA7O0FBRUEsNkRBQWUsTUFBTSxFQUFDO0FBQ2Y7Ozs7Ozs7Ozs7Ozs7O0FDSFA7O0FBRUEsNkRBQWUsTUFBTSxFQUFDO0FBQ2Y7Ozs7Ozs7Ozs7Ozs7O0FDSFA7O0FBRUEsNkRBQWUsTUFBTSxFQUFDO0FBQ2Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0g2QjtBQUVQO0FBQ1M7QUFDUDtBQU8vQixNQUFNSSxjQUFjQyxNQUFNLFNBQVMsQ0FBQyxLQUFLO0FBQ3pDLE1B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