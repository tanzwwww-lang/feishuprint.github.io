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
"./src/plugins/importcss/main/ts/Plugin.ts": 
/*!*************************************************!*\
  !*** ./src/plugins/importcss/main/ts/Plugin.ts ***!
  \*************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var tinymce_core_api_PluginManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/PluginManager */ "./lib/globals/tinymce/core/api/PluginManager.js");
/* ESM import */var _api_Api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/Api */ "./src/plugins/importcss/main/ts/api/Api.ts");
/* ESM import */var _api_Options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/Options */ "./src/plugins/importcss/main/ts/api/Options.ts");
/* ESM import */var _core_ImportCss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/ImportCss */ "./src/plugins/importcss/main/ts/core/ImportCss.ts");




/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>{
    tinymce_core_api_PluginManager__WEBPACK_IMPORTED_MODULE_0__["default"].add('importcss', (editor)=>{
        _api_Options__WEBPACK_IMPORTED_MODULE_2__.register(editor);
        _core_ImportCss__WEBPACK_IMPORTED_MODULE_3__.setup(editor);
        return _api_Api__WEBPACK_IMPORTED_MODULE_1__.get(editor);
    });
});


}),
"./src/plugins/importcss/main/ts/api/Api.ts": 
/*!**************************************************!*\
  !*** ./src/plugins/importcss/main/ts/api/Api.ts ***!
  \**************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  get: () => (get)
});
/* ESM import */var _core_ImportCss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/ImportCss */ "./src/plugins/importcss/main/ts/core/ImportCss.ts");

const get = (editor)=>{
    const convertSelectorToFormat = (selectorText)=>{
        return _core_ImportCss__WEBPACK_IMPORTED_MODULE_0__.defaultConvertSelectorToFormat(editor, selectorText);
    };
    return {
        convertSelectorToFormat
    };
};



}),
"./src/plugins/importcss/main/ts/api/Options.ts": 
/*!******************************************************!*\
  !*** ./src/plugins/importcss/main/ts/api/Options.ts ***!
  \******************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getCssGroups: () => (getCssGroups),
  getFileFilter: () => (getFileFilter),
  getSelectorConverter: () => (getSelectorConverter),
  getSelectorFilter: () => (getSelectorFilter),
  getSkin: () => (getSkin),
  getSkinUrl: () => (getSkinUrl),
  register: () => (register),
  shouldAppend: () => (shouldAppend),
  shouldImportExclusive: () => (shouldImportExclusive),
  shouldMergeClasses: () => (shouldMergeClasses)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Type.ts");

const option = (name)=>(editor)=>editor.options.get(name);
const register = (editor)=>{
    const registerOption = editor.options.register;
    const filterProcessor = (value)=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.isString(value) || _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.isFunction(value) || _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.isObject(value);
    registerOption('importcss_merge_classes', {
        processor: 'boolean',
        default: true
    });
    registerOption('importcss_exclusive', {
        processor: 'boolean',
        default: true
    });
    registerOption('importcss_selector_converter', {
        processor: 'function'
    });
    registerOption('importcss_selector_filter', {
        processor: filterProcessor
    });
    registerOption('importcss_file_filter', {
        processor: filterProcessor
    });
    registerOption('importcss_groups', {
        processor: 'object[]'
    });
    registerOption('importcss_append', {
        processor: 'boolean',
        default: false
    });
};
const shouldMergeClasses = option('importcss_merge_classes');
const shouldImportExclusive = option('importcss_exclusive');
const getSelectorConverter = option('importcss_selector_converter');
const getSelectorFilter = option('importcss_selector_filter');
const getCssGroups = option('importcss_groups');
const shouldAppend = option('importcss_append');
const getFileFilter = option('importcss_file_filter');
const getSkin = option('skin');
const getSkinUrl = option('skin_url');



}),
"./src/plugins/importcss/main/ts/core/ImportCss.ts": 
/*!*********************************************************!*\
  !*** ./src/plugins/importcss/main/ts/core/ImportCss.ts ***!
  \*********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  defaultConvertSelectorToFormat: () => (defaultConvertSelectorToFormat),
  setup: () => (setup)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Type.ts");
/* ESM import */var tinymce_core_api_dom_DOMUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/dom/DOMUtils */ "./lib/globals/tinymce/core/api/dom/DOMUtils.js");
/* ESM import */var tinymce_core_api_EditorManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tinymce/core/api/EditorManager */ "./lib/globals/tinymce/core/api/EditorManager.js");
/* ESM import */var tinymce_core_api_Env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tinymce/core/api/Env */ "./lib/globals/tinymce/core/api/Env.js");
/* ESM import */var tinymce_core_api_util_Tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tinymce/core/api/util/Tools */ "./lib/globals/tinymce/core/api/util/Tools.js");
/* ESM import */var _api_Options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/Options */ "./src/plugins/importcss/main/ts/api/Options.ts");
/* ESM import */var _SelectorModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SelectorModel */ "./src/plugins/importcss/main/ts/core/SelectorModel.ts");







const internalEditorStyle = /^\.(?:ephox|tiny-pageembed|mce)(?:[.-]+\w+)+$/;
const removeCacheSuffix = (url)=>{
    const cacheSuffix = tinymce_core_api_Env__WEBPACK_IMPORTED_MODULE_2__["default"].cacheSuffix;
    if (_ephox_katamari__WEBPACK_IMPORTED_MODULE_6__.isString(url)) {
        url = url.replace('?' + cacheSuffix, '').replace('&' + cacheSuffix, '');
    }
    return url;
};
const isSkinContentCss = (editor, href)=>{
    const skin = _api_Options__WEBPACK_IMPORTED_MODULE_4__.getSkin(editor);
    if (skin) {
        const skinUrlBase = _api_Options__WEBPACK_IMPORTED_MODULE_4__.getSkinUrl(editor);
        const skinUrl = skinUrlBase ? editor.documentBaseURI.toAbsolute(skinUrlBase) : tinymce_core_api_EditorManager__WEBPACK_IMPORTED_MODULE_1__["default"].baseURL + '/skins/ui/' + skin;
        const contentSkinUrlPart = tinymce_core_api_EditorManager__WEBPACK_IMPORTED_MODULE_1__["default"].baseURL + '/skins/content/';
        const suffix = editor.editorManager.suffix;
        return href === skinUrl + '/content' + (editor.inline ? '.inline' : '') + `${suffix}.css` || href.indexOf(contentSkinUrlPart) !== -1;
    }
    return false;
};
const compileFilter = (filter)=>{
    if (_ephox_katamari__WEBPACK_IMPORTED_MODULE_6__.isString(filter)) {
        return (value)=>{
            return value.indexOf(filter) !== -1;
        };
    } else if (filter instanceof RegExp) {
        return (value)=>{
            return filter.test(value);
        };
    }
    return filter;
};
const isCssImportRule = (rule)=>rule.styleSheet;
const isCssPageRule = (rule)=>rule.selectorText;
const getSelectors = (editor, doc, fileFilter)=>{
    const selectors = [];
    const contentCSSUrls = {};
    const append = (styleSheet, imported)=>{
        let href = styleSheet.href;
        let rules;
        href = removeCacheSuffix(href);
        if (!href || fileFilter && !fileFilter(href, imported) || isSkinContentCss(editor, href)) {
            return;
        }
        // TODO: Is this still need as TypeScript/MDN says imports doesn't exist?
        tinymce_core_api_util_Tools__WEBPACK_IMPORTED_MODULE_3__["default"].each(styleSheet.imports, (styleSheet)=>{
            append(styleSheet, true);
        });
        try {
            rules = styleSheet.cssRules || styleSheet.rules;
        } catch  {
        // Firefox fails on rules to remote domain for example:
        // @import url(//fonts.googleapis.com/css?family=Pathway+Gothic+One);
        }
        tinymce_core_api_util_Tools__WEBPACK_IMPORTED_MODULE_3__["default"].each(rules, (cssRule)=>{
            if (isCssImportRule(cssRule) && cssRule.styleSheet) {
                append(cssRule.styleSheet, true);
            } else if (isCssPageRule(cssRule)) {
                tinymce_core_api_util_Tools__WEBPACK_IMPORTED_MODULE_3__["default"].each(cssRule.selectorText.split(','), (selector)=>{
                    selectors.push(tinymce_core_api_util_Tools__WEBPACK_IMPORTED_MODULE_3__["default"].trim(selector));
                });
            }
        });
    };
    tinymce_core_api_util_Tools__WEBPACK_IMPORTED_MODULE_3__["default"].each(editor.contentCSS, (url)=>{
        contentCSSUrls[url] = true;
    });
    if (!fileFilter) {
        fileFilter = (href, imported)=>{
            return imported || contentCSSUrls[href];
        };
    }
    try {
        tinymce_core_api_util_Tools__WEBPACK_IMPORTED_MODULE_3__["default"].each(doc.styleSheets, (styleSheet)=>{
            append(styleSheet);
        });
    } catch  {
    // Ignore
    }
    return selectors;
};
const defaultConvertSelectorToFormat = (editor, selectorText)=>{
    let format = {};
    // Parse simple element.class1, .class1
    const selector = /^(?:([a-z0-9\-_]+))?(\.[a-z0-9_\-\.]+)$/i.exec(selectorText);
    if (!selector) {
        return;
    }
    const elementName = selector[1];
    const classes = selector[2].substr(1).split('.').join(' ');
    const inlineSelectorElements = tinymce_core_api_util_Tools__WEBPACK_IMPORTED_MODULE_3__["default"].makeMap('a,img');
    // element.class - Produce block formats
    if (selector[1]) {
        format = {
            title: selectorText
        };
        if (editor.schema.getTextBlockElements()[elementName]) {
            // Text block format ex: h1.class1
            format.block = elementName;
        } else if (editor.schema.getBlockElements()[elementName] || inlineSelectorElements[elementName.toLowerCase()]) {
            // Block elements such as table.class and special inline elements such as a.class or img.class
            format.selector = elementName;
        } else {
            // Inline format strong.class1
            format.inline = elementName;
        }
    } else if (selector[2]) {
        // .class - Produce inline span with classes
        format = {
            inline: 'span',
            title: selectorText.substr(1),
            classes
        };
    }
    // Append to or override class attribute
    if (_api_Options__WEBPACK_IMPORTED_MODULE_4__.shouldMergeClasses(editor)) {
        format.classes = classes;
    } else {
        format.attributes = {
            class: classes
        };
    }
    return format;
};
const getGroupsBySelector = (groups, selector)=>{
    return tinymce_core_api_util_Tools__WEBPACK_IMPORTED_MODULE_3__["default"].grep(groups, (group)=>{
        return !group.filter || group.filter(selector);
    });
};
const compileUserDefinedGroups = (groups)=>{
    return tinymce_core_api_util_Tools__WEBPACK_IMPORTED_MODULE_3__["default"].map(groups, (group)=>{
        return tinymce_core_api_util_Tools__WEBPACK_IMPORTED_MODULE_3__["default"].extend({}, group, {
            original: group,
            selectors: {},
            filter: compileFilter(group.filter)
        });
    });
};
const isExclusiveMode = (editor, group)=>{
    // Exclusive mode can only be disabled when there are groups allowing the same style to be present in multiple groups
    return group === null || _api_Options__WEBPACK_IMPORTED_MODULE_4__.shouldImportExclusive(editor);
};
const isUniqueSelector = (editor, selector, group, globallyUniqueSelectors)=>{
    return !(isExclusiveMode(editor, group) ? selector in globallyUniqueSelectors : selector in group.selectors);
};
const markUniqueSelector = (editor, selector, group, globallyUniqueSelectors)=>{
    if (isExclusiveMode(editor, group)) {
        globallyUniqueSelectors[selector] = true;
    } else {
        group.selectors[selector] = true;
    }
};
const convertSelectorToFormat = (editor, plugin, selector, group)=>{
    let selectorConverter;
    const converter = _api_Options__WEBPACK_IMPORTED_MODULE_4__.getSelectorConverter(editor);
    if (group && group.selector_converter) {
        selectorConverter = group.selector_converter;
    } else if (converter) {
        selectorConverter = converter;
    } else {
        selectorConverter = ()=>{
            return defaultConvertSelectorToFormat(editor, selector);
        };
    }
    return selectorConverter.call(plugin, selector, group);
};
const setup = (editor)=>{
    editor.on('init', ()=>{
        const model = (0,_SelectorModel__WEBPACK_IMPORTED_MODULE_5__.generate)();
        const globallyUniqueSelectors = {};
        const selectorFilter = compileFilter(_api_Options__WEBPACK_IMPORTED_MODULE_4__.getSelectorFilter(editor));
        const groups = compileUserDefinedGroups(_api_Options__WEBPACK_IMPORTED_MODULE_4__.getCssGroups(editor));
        const processSelector = (selector, group)=>{
            if (isUniqueSelector(editor, selector, group, globallyUniqueSelectors)) {
                markUniqueSelector(editor, selector, group, globallyUniqueSelectors);
                const format = convertSelectorToFormat(editor, editor.plugins.importcss, selector, group);
                if (format) {
                    const formatName = format.name || tinymce_core_api_dom_DOMUtils__WEBPACK_IMPORTED_MODULE_0__["default"].DOM.uniqueId();
                    editor.formatter.register(formatName, format);
                    return {
                        title: format.title,
                        format: formatName
                    };
                }
            }
            return null;
        };
        tinymce_core_api_util_Tools__WEBPACK_IMPORTED_MODULE_3__["default"].each(getSelectors(editor, editor.getDoc(), compileFilter(_api_Options__WEBPACK_IMPORTED_MODULE_4__.getFileFilter(editor))), (selector)=>{
            if (!internalEditorStyle.test(selector)) {
                if (!selectorFilter || selectorFilter(selector)) {
                    const selectorGroups = getGroupsBySelector(groups, selector);
                    if (selectorGroups.length > 0) {
                        tinymce_core_api_util_Tools__WEBPACK_IMPORTED_MODULE_3__["default"].each(selectorGroups, (group)=>{
                            const menuItem = processSelector(selector, group);
                            if (menuItem) {
                                model.addItemToGroup(group.title, menuItem);
                            }
                        });
                    } else {
                        const menuItem = processSelector(selector, null);
                        if (menuItem) {
                            model.addItem(menuItem);
                        }
                    }
                }
            }
        });
        const items = model.toFormats();
        editor.dispatch('addStyleModifications', {
            items,
            replace: !_api_Options__WEBPACK_IMPORTED_MODULE_4__.shouldAppend(editor)
        });
    });
};



}),
"./src/plugins/importcss/main/ts/core/SelectorModel.ts": 
/*!*************************************************************!*\
  !*** ./src/plugins/importcss/main/ts/core/SelectorModel.ts ***!
  \*************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  generate: () => (generate)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Arr.ts");

const generate = ()=>{
    const ungroupedOrder = [];
    const groupOrder = [];
    const groups = {};
    const addItemToGroup = (groupTitle, itemInfo)=>{
        if (groups[groupTitle]) {
            groups[groupTitle].push(itemInfo);
        } else {
            groupOrder.push(groupTitle);
            groups[groupTitle] = [
                itemInfo
            ];
        }
    };
    const addItem = (itemInfo)=>{
        ungroupedOrder.push(itemInfo);
    };
    const toFormats = ()=>{
        const groupItems = _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.bind(groupOrder, (g)=>{
            const items = groups[g];
            return items.length === 0 ? [] : [
                {
                    title: g,
                    items
                }
            ];
        });
        return groupItems.concat(ungroupedOrder);
    };
    return {
        addItemToGroup,
        addItem,
        toFormats
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

/*!***********************************************!*\
  !*** ./src/plugins/importcss/main/ts/Main.ts ***!
  \***********************************************/
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _Plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Plugin */ "./src/plugins/importcss/main/ts/Plugin.ts");

(0,_Plugin__WEBPACK_IMPORTED_MODULE_0__["default"])(); /** *****
 * DO NOT EXPORT ANYTHING
 *
 * IF YOU DO ROLLUP WILL LEAVE A GLOBAL ON THE PAGE
 *******/ 

})();

})()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdGlueW1jZS9wbHVnaW5zL2ltcG9ydGNzcy9wbHVnaW4uanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aW55bWNlLy4vbGliL2dsb2JhbHMvdGlueW1jZS9jb3JlL2FwaS9FZGl0b3JNYW5hZ2VyLmpzIiwid2VicGFjazovL3RpbnltY2UvLi9saWIvZ2xvYmFscy90aW55bWNlL2NvcmUvYXBpL0Vudi5qcyIsIndlYnBhY2s6Ly90aW55bWNlLy4vbGliL2dsb2JhbHMvdGlueW1jZS9jb3JlL2FwaS9QbHVnaW5NYW5hZ2VyLmpzIiwid2VicGFjazovL3RpbnltY2UvLi9saWIvZ2xvYmFscy90aW55bWNlL2NvcmUvYXBpL2RvbS9ET01VdGlscy5qcyIsIndlYnBhY2s6Ly90aW55bWNlLy4vbGliL2dsb2JhbHMvdGlueW1jZS9jb3JlL2FwaS91dGlsL1Rvb2xzLmpzIiwid2VicGFjazovL3RpbnltY2UvLi4va2F0YW1hcmkvc3JjL21haW4vdHMvZXBob3gva2F0YW1hcmkvYXBpL0Fyci50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL2thdGFtYXJpL3NyYy9tYWluL3RzL2VwaG94L2thdGFtYXJpL2FwaS9GdW4udHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9rYXRhbWFyaS9zcmMvbWFpbi90cy9lcGhveC9rYXRhbWFyaS9hcGkvT3B0aW9uYWwudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9rYXRhbWFyaS9zcmMvbWFpbi90cy9lcGhveC9rYXRhbWFyaS9hcGkvVHlwZS50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvaW1wb3J0Y3NzL21haW4vdHMvUGx1Z2luLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9pbXBvcnRjc3MvbWFpbi90cy9hcGkvQXBpLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9pbXBvcnRjc3MvbWFpbi90cy9hcGkvT3B0aW9ucy50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvaW1wb3J0Y3NzL21haW4vdHMvY29yZS9JbXBvcnRDc3MudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL2ltcG9ydGNzcy9tYWluL3RzL2NvcmUvU2VsZWN0b3JNb2RlbC50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uLy4uL25vZGVfbW9kdWxlcy9AZXBob3gvZGlzcHV0ZS9zcmMvbWFpbi90cy9hcGkvRXEudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi8uLi9ub2RlX21vZHVsZXMvQGVwaG94L2Rpc3B1dGUvc3JjL21haW4vdHMvY29yZS9BcnJheVV0aWwudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi8uLi9ub2RlX21vZHVsZXMvQGVwaG94L2Rpc3B1dGUvc3JjL21haW4vdHMvY29yZS9UeXBlLnRzIiwid2VicGFjazovL3RpbnltY2Uvd2VicGFjay9ydW50aW1lL2RlZmluZV9wcm9wZXJ0eV9nZXR0ZXJzIiwid2VicGFjazovL3RpbnltY2Uvd2VicGFjay9ydW50aW1lL2hhc19vd25fcHJvcGVydHkiLCJ3ZWJwYWNrOi8vdGlueW1jZS93ZWJwYWNrL3J1bnRpbWUvbWFrZV9uYW1lc3BhY2Vfb2JqZWN0Iiwid2VicGFjazovL3RpbnltY2Uvd2VicGFjay9ydW50aW1lL3JzcGFja192ZXJzaW9uIiwid2VicGFjazovL3RpbnltY2Uvd2VicGFjay9ydW50aW1lL3JzcGFja191bmlxdWVfaWQiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL2ltcG9ydGNzcy9tYWluL3RzL01haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGdsb2JhbCA9IHRpbnltY2UudXRpbC5Ub29scy5yZXNvbHZlKCd0aW55bWNlLkVkaXRvck1hbmFnZXInKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2xvYmFsO1xuZXhwb3J0IHZhciBFZGl0b3JNYW5hZ2VyID0gZ2xvYmFsO1xuIiwidmFyIGdsb2JhbCA9IHRpbnltY2UudXRpbC5Ub29scy5yZXNvbHZlKCd0aW55bWNlLkVudicpO1xuXG5leHBvcnQgZGVmYXVsdCBnbG9iYWw7XG5leHBvcnQgdmFyIEVudiA9IGdsb2JhbDtcbiIsInZhciBnbG9iYWwgPSB0aW55bWNlLnV0aWwuVG9vbHMucmVzb2x2ZSgndGlueW1jZS5QbHVnaW5NYW5hZ2VyJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGdsb2JhbDtcbmV4cG9ydCB2YXIgUGx1Z2luTWFuYWdlciA9IGdsb2JhbDtcbiIsInZhciBnbG9iYWwgPSB0aW55bWNlLnV0aWwuVG9vbHMucmVzb2x2ZSgndGlueW1jZS5kb20uRE9NVXRpbHMnKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2xvYmFsO1xuZXhwb3J0IHZhciBET01VdGlscyA9IGdsb2JhbDtcbiIsInZhciBnbG9iYWwgPSB0aW55bWNlLnV0aWwuVG9vbHMucmVzb2x2ZSgndGlueW1jZS51dGlsLlRvb2xzJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGdsb2JhbDtcbmV4cG9ydCB2YXIgVG9vbHMgPSBnbG9iYWw7XG4iLCJpbXBvcnQgeyBFcSB9IGZyb20gJ0BlcGhveC9kaXNwdXRlJztcblxuaW1wb3J0ICogYXMgRnVuIGZyb20gJy4vRnVuJztcbmltcG9ydCB7IE9wdGlvbmFsIH0gZnJvbSAnLi9PcHRpb25hbCc7XG5pbXBvcnQgKiBhcyBUeXBlIGZyb20gJy4vVHlwZSc7XG5cbnR5cGUgQXJyYXlNb3JwaGlzbTxULCBVPiA9ICh4OiBULCBpOiBudW1iZXIpID0+IFU7XG50eXBlIEFycmF5R3VhcmRQcmVkaWNhdGU8VCwgVSBleHRlbmRzIFQ+ID0gKHg6IFQsIGk6IG51bWJlcikgPT4geCBpcyBVO1xudHlwZSBBcnJheVByZWRpY2F0ZTxUPiA9IEFycmF5TW9ycGhpc208VCwgYm9vbGVhbj47XG50eXBlIENvbXBhcmF0b3I8VD4gPSAoYTogVCwgYjogVCkgPT4gbnVtYmVyO1xuXG5jb25zdCBuYXRpdmVTbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcbmNvbnN0IG5hdGl2ZUluZGV4T2YgPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZjtcbmNvbnN0IG5hdGl2ZVB1c2ggPSBBcnJheS5wcm90b3R5cGUucHVzaDtcblxuY29uc3QgcmF3SW5kZXhPZiA9IDxUPiAodHM6IEFycmF5TGlrZTxUPiwgdDogVCk6IG51bWJlciA9PlxuICBuYXRpdmVJbmRleE9mLmNhbGwodHMsIHQpO1xuXG5leHBvcnQgY29uc3QgaW5kZXhPZiA9IDxUID0gYW55Pih4czogQXJyYXlMaWtlPFQ+LCB4OiBUKTogT3B0aW9uYWw8bnVtYmVyPiA9PiB7XG4gIC8vIFRoZSByYXdJbmRleE9mIG1ldGhvZCBkb2VzIG5vdCB3cmFwIHVwIGluIGFuIG9wdGlvbi4gVGhpcyBpcyBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucy5cbiAgY29uc3QgciA9IHJhd0luZGV4T2YoeHMsIHgpO1xuICByZXR1cm4gciA9PT0gLTEgPyBPcHRpb25hbC5ub25lKCkgOiBPcHRpb25hbC5zb21lKHIpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbnRhaW5zID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4sIHg6IFQpOiBib29sZWFuID0+IHJhd0luZGV4T2YoeHMsIHgpID4gLTE7XG5cbmV4cG9ydCBjb25zdCBleGlzdHMgPSA8VCA9IGFueT4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlQcmVkaWNhdGU8VD4pOiBib29sZWFuID0+IHtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHhzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIGlmIChwcmVkKHgsIGkpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQgY29uc3QgcmFuZ2UgPSA8VD4obnVtOiBudW1iZXIsIGY6IChhOiBudW1iZXIpID0+IFQpOiBUW10gPT4ge1xuICBjb25zdCByOiBUW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW07IGkrKykge1xuICAgIHIucHVzaChmKGkpKTtcbiAgfVxuICByZXR1cm4gcjtcbn07XG5cbi8vIEl0J3MgYSB0b3RhbCBtaWNybyBvcHRpbWlzYXRpb24sIGJ1dCB0aGVzZSBkbyBtYWtlIHNvbWUgZGlmZmVyZW5jZS5cbi8vIFBhcnRpY3VsYXJseSBmb3IgYnJvd3NlcnMgb3RoZXIgdGhhbiBDaHJvbWUuXG4vLyAtIGxlbmd0aCBjYWNoaW5nXG4vLyBodHRwOi8vanNwZXJmLmNvbS9icm93c2VyLWRpZXQtanF1ZXJ5LWVhY2gtdnMtZm9yLWxvb3AvNjlcbi8vIC0gbm90IHVzaW5nIHB1c2hcbi8vIGh0dHA6Ly9qc3BlcmYuY29tL2FycmF5LWRpcmVjdC1hc3NpZ25tZW50LXZzLXB1c2gvMlxuXG5leHBvcnQgY29uc3QgY2h1bmsgPSA8VD4oYXJyYXk6IEFycmF5TGlrZTxUPiwgc2l6ZTogbnVtYmVyKTogVFtdW10gPT4ge1xuICBjb25zdCByOiBUW11bXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSArPSBzaXplKSB7XG4gICAgY29uc3QgczogVFtdID0gbmF0aXZlU2xpY2UuY2FsbChhcnJheSwgaSwgaSArIHNpemUpO1xuICAgIHIucHVzaChzKTtcbiAgfVxuICByZXR1cm4gcjtcbn07XG5cbmV4cG9ydCBjb25zdCBtYXAgPSA8VCA9IGFueSwgVSA9IGFueT4oeHM6IEFycmF5TGlrZTxUPiwgZjogQXJyYXlNb3JwaGlzbTxULCBVPik6IFVbXSA9PiB7XG4gIC8vIHByZS1hbGxvY2F0aW5nIGFycmF5IHNpemUgd2hlbiBpdCdzIGd1YXJhbnRlZWQgdG8gYmUga25vd25cbiAgLy8gaHR0cDovL2pzcGVyZi5jb20vcHVzaC1hbGxvY2F0ZWQtdnMtZHluYW1pYy8yMlxuICBjb25zdCBsZW4gPSB4cy5sZW5ndGg7XG4gIGNvbnN0IHIgPSBuZXcgQXJyYXkobGVuKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICByW2ldID0gZih4LCBpKTtcbiAgfVxuICByZXR1cm4gcjtcbn07XG5cbi8vIFVud291bmQgaW1wbGVtZW50aW5nIG90aGVyIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBlYWNoLlxuLy8gVGhlIGNvZGUgc2l6ZSBpcyByb3VnaGx5IHRoZSBzYW1lLCBhbmQgaXQgc2hvdWxkIGFsbG93IGZvciBiZXR0ZXIgb3B0aW1pc2F0aW9uLlxuLy8gY29uc3QgZWFjaCA9IGZ1bmN0aW9uPFQsIFU+KHhzOiBUW10sIGY6ICh4OiBULCBpPzogbnVtYmVyLCB4cz86IFRbXSkgPT4gdm9pZCk6IHZvaWQge1xuZXhwb3J0IGNvbnN0IGVhY2ggPSA8VCA9IGFueT4oeHM6IEFycmF5TGlrZTxUPiwgZjogQXJyYXlNb3JwaGlzbTxULCB2b2lkPik6IHZvaWQgPT4ge1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0geHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgZih4LCBpKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGVhY2hyID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4sIGY6IEFycmF5TW9ycGhpc208VCwgdm9pZD4pOiB2b2lkID0+IHtcbiAgZm9yIChsZXQgaSA9IHhzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIGYoeCwgaSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBwYXJ0aXRpb24gPSA8VCA9IGFueT4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlQcmVkaWNhdGU8VD4pOiB7IHBhc3M6IFRbXTsgZmFpbDogVFtdIH0gPT4ge1xuICBjb25zdCBwYXNzOiBUW10gPSBbXTtcbiAgY29uc3QgZmFpbDogVFtdID0gW107XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICBjb25zdCBhcnIgPSBwcmVkKHgsIGkpID8gcGFzcyA6IGZhaWw7XG4gICAgYXJyLnB1c2goeCk7XG4gIH1cbiAgcmV0dXJuIHsgcGFzcywgZmFpbCB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbHRlcjoge1xuICA8VCwgVSBleHRlbmRzIFQ+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5R3VhcmRQcmVkaWNhdGU8VCwgVT4pOiBVW107XG4gIDxUPih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheVByZWRpY2F0ZTxUPik6IFRbXTtcbn0gPSA8VD4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlQcmVkaWNhdGU8VD4pOiBUW10gPT4ge1xuICBjb25zdCByOiBUW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHhzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIGlmIChwcmVkKHgsIGkpKSB7XG4gICAgICByLnB1c2goeCk7XG4gICAgfVxuICB9XG4gIHJldHVybiByO1xufTtcblxuLypcbiAqIEdyb3VwcyBhbiBhcnJheSBpbnRvIGNvbnRpZ3VvdXMgYXJyYXlzIG9mIGxpa2UgZWxlbWVudHMuIFdoZXRoZXIgYW4gZWxlbWVudCBpcyBsaWtlIG9yIG5vdCBkZXBlbmRzIG9uIGYuXG4gKlxuICogZiBpcyBhIGZ1bmN0aW9uIHRoYXQgZGVyaXZlcyBhIHZhbHVlIGZyb20gYW4gZWxlbWVudCAtIGUuZy4gdHJ1ZSBvciBmYWxzZSwgb3IgYSBzdHJpbmcuXG4gKiBFbGVtZW50cyBhcmUgbGlrZSBpZiB0aGlzIGZ1bmN0aW9uIGdlbmVyYXRlcyB0aGUgc2FtZSB2YWx1ZSBmb3IgdGhlbSAoYWNjb3JkaW5nIHRvID09PSkuXG4gKlxuICpcbiAqIE9yZGVyIG9mIHRoZSBlbGVtZW50cyBpcyBwcmVzZXJ2ZWQuIEFyci5mbGF0dGVuKCkgb24gdGhlIHJlc3VsdCB3aWxsIHJldHVybiB0aGUgb3JpZ2luYWwgbGlzdCwgYXMgd2l0aCBIYXNrZWxsIGdyb3VwQnkgZnVuY3Rpb24uXG4gKiAgRm9yIGEgZ29vZCBleHBsYW5hdGlvbiwgc2VlIHRoZSBncm91cCBmdW5jdGlvbiAod2hpY2ggaXMgYSBzcGVjaWFsIGNhc2Ugb2YgZ3JvdXBCeSlcbiAqICBodHRwOi8vaGFja2FnZS5oYXNrZWxsLm9yZy9wYWNrYWdlL2Jhc2UtNC43LjAuMC9kb2NzL0RhdGEtTGlzdC5odG1sI3Y6Z3JvdXBcbiAqL1xuZXhwb3J0IGNvbnN0IGdyb3VwQnkgPSA8VD4oeHM6IEFycmF5TGlrZTxUPiwgZjogKGE6IFQpID0+IGFueSk6IFRbXVtdID0+IHtcbiAgaWYgKHhzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBbXTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgd2FzVHlwZSA9IGYoeHNbMF0pOyAvLyBpbml0aWFsIGNhc2UgZm9yIG1hdGNoaW5nXG4gICAgY29uc3QgcjogVFtdW10gPSBbXTtcbiAgICBsZXQgZ3JvdXA6IFRbXSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHhzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0geHNbaV07XG4gICAgICBjb25zdCB0eXBlID0gZih4KTtcbiAgICAgIGlmICh0eXBlICE9PSB3YXNUeXBlKSB7XG4gICAgICAgIHIucHVzaChncm91cCk7XG4gICAgICAgIGdyb3VwID0gW107XG4gICAgICB9XG4gICAgICB3YXNUeXBlID0gdHlwZTtcbiAgICAgIGdyb3VwLnB1c2goeCk7XG4gICAgfVxuICAgIGlmIChncm91cC5sZW5ndGggIT09IDApIHtcbiAgICAgIHIucHVzaChncm91cCk7XG4gICAgfVxuICAgIHJldHVybiByO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZm9sZHIgPSA8VCwgVT4oeHM6IEFycmF5TGlrZTxUPiwgZjogKGFjYzogVSwgeDogVCwgaTogbnVtYmVyKSA9PiBVLCBhY2M6IFUpOiBVID0+IHtcbiAgZWFjaHIoeHMsICh4LCBpKSA9PiB7XG4gICAgYWNjID0gZihhY2MsIHgsIGkpO1xuICB9KTtcbiAgcmV0dXJuIGFjYztcbn07XG5cbmV4cG9ydCBjb25zdCBmb2xkbCA9IDxUID0gYW55LCBVID0gYW55Pih4czogQXJyYXlMaWtlPFQ+LCBmOiAoYWNjOiBVLCB4OiBULCBpOiBudW1iZXIpID0+IFUsIGFjYzogVSk6IFUgPT4ge1xuICBlYWNoKHhzLCAoeCwgaSkgPT4ge1xuICAgIGFjYyA9IGYoYWNjLCB4LCBpKTtcbiAgfSk7XG4gIHJldHVybiBhY2M7XG59O1xuXG5leHBvcnQgY29uc3QgZmluZFVudGlsOiB7XG4gIDxULCBVIGV4dGVuZHMgVD4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlHdWFyZFByZWRpY2F0ZTxULCBVPiwgdW50aWw6IEFycmF5UHJlZGljYXRlPFQ+KTogT3B0aW9uYWw8VT47XG4gIDxUID0gYW55Pih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheVByZWRpY2F0ZTxUPiwgdW50aWw6IEFycmF5UHJlZGljYXRlPFQ+KTogT3B0aW9uYWw8VD47XG59ID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+LCB1bnRpbDogQXJyYXlQcmVkaWNhdGU8VD4pOiBPcHRpb25hbDxUPiA9PiB7XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICBpZiAocHJlZCh4LCBpKSkge1xuICAgICAgcmV0dXJuIE9wdGlvbmFsLnNvbWUoeCk7XG4gICAgfSBlbHNlIGlmICh1bnRpbCh4LCBpKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBPcHRpb25hbC5ub25lKCk7XG59O1xuXG5leHBvcnQgY29uc3QgZmluZDoge1xuICA8VCwgVSBleHRlbmRzIFQ+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5R3VhcmRQcmVkaWNhdGU8VCwgVT4pOiBPcHRpb25hbDxVPjtcbiAgPFQgPSBhbnk+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+KTogT3B0aW9uYWw8VD47XG59ID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+KTogT3B0aW9uYWw8VD4gPT4ge1xuICByZXR1cm4gZmluZFVudGlsKHhzLCBwcmVkLCBGdW4ubmV2ZXIpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmRJbmRleCA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheVByZWRpY2F0ZTxUPik6IE9wdGlvbmFsPG51bWJlcj4gPT4ge1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0geHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgaWYgKHByZWQoeCwgaSkpIHtcbiAgICAgIHJldHVybiBPcHRpb25hbC5zb21lKGkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBPcHRpb25hbC5ub25lKCk7XG59O1xuXG5leHBvcnQgY29uc3QgZmluZExhc3RJbmRleCA9IDxUPihhcnI6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlQcmVkaWNhdGU8VD4pOiBPcHRpb25hbDxudW1iZXI+ID0+IHtcbiAgZm9yIChsZXQgaSA9IGFyci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGlmIChwcmVkKGFycltpXSwgaSkpIHtcbiAgICAgIHJldHVybiBPcHRpb25hbC5zb21lKGkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBPcHRpb25hbC5ub25lKCk7XG59O1xuXG5leHBvcnQgY29uc3QgZmxhdHRlbiA9IDxUPih4czogQXJyYXlMaWtlPFRbXT4pOiBUW10gPT4ge1xuICAvLyBOb3RlLCB0aGlzIGlzIHBvc3NpYmxlIGJlY2F1c2UgcHVzaCBzdXBwb3J0cyBtdWx0aXBsZSBhcmd1bWVudHM6XG4gIC8vIGh0dHA6Ly9qc3BlcmYuY29tL2NvbmNhdC1wdXNoLzZcbiAgLy8gTm90ZSB0aGF0IGluIHRoZSBwYXN0LCBjb25jYXQoKSB3b3VsZCBzaWxlbnRseSB3b3JrICh2ZXJ5IHNsb3dseSkgZm9yIGFycmF5LWxpa2Ugb2JqZWN0cy5cbiAgLy8gV2l0aCB0aGlzIGNoYW5nZSBpdCB3aWxsIHRocm93IGFuIGVycm9yLlxuICBjb25zdCByOiBUW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHhzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgLy8gRW5zdXJlIHRoYXQgZWFjaCB2YWx1ZSBpcyBhbiBhcnJheSBpdHNlbGZcbiAgICBpZiAoIVR5cGUuaXNBcnJheSh4c1tpXSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQXJyLmZsYXR0ZW4gaXRlbSAnICsgaSArICcgd2FzIG5vdCBhbiBhcnJheSwgaW5wdXQ6ICcgKyB4cyk7XG4gICAgfVxuICAgIG5hdGl2ZVB1c2guYXBwbHkociwgeHNbaV0pO1xuICB9XG4gIHJldHVybiByO1xufTtcblxuZXhwb3J0IGNvbnN0IGJpbmQgPSA8VCA9IGFueSwgVSA9IGFueT4oeHM6IEFycmF5TGlrZTxUPiwgZjogQXJyYXlNb3JwaGlzbTxULCBVW10+KTogVVtdID0+XG4gIGZsYXR0ZW4obWFwKHhzLCBmKSk7XG5cbmV4cG9ydCBjb25zdCBmb3JhbGwgPSA8VD4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlQcmVkaWNhdGU8VD4pOiBib29sZWFuID0+IHtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHhzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIGlmIChwcmVkKHgsIGkpICE9PSB0cnVlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxuZXhwb3J0IGNvbnN0IGVxdWFsID0gPFQ+KGExOiBBcnJheUxpa2U8VD4sIGEyOiBBcnJheUxpa2U8VD4sIGVxOiBFcS5FcTxUPiA9IEVxLmVxQW55KTogYm9vbGVhbiA9PlxuICBFcS5lcUFycmF5KGVxKS5lcShhMSwgYTIpO1xuXG5leHBvcnQgY29uc3QgcmV2ZXJzZSA9IDxUPih4czogQXJyYXlMaWtlPFQ+KTogVFtdID0+IHtcbiAgY29uc3QgcjogVFtdID0gbmF0aXZlU2xpY2UuY2FsbCh4cywgMCk7XG4gIHIucmV2ZXJzZSgpO1xuICByZXR1cm4gcjtcbn07XG5cbmV4cG9ydCBjb25zdCBkaWZmZXJlbmNlID0gPFQ+KGExOiBBcnJheUxpa2U8VD4sIGEyOiBBcnJheUxpa2U8VD4pOiBUW10gPT4gZmlsdGVyKGExLCAoeCkgPT4gIWNvbnRhaW5zKGEyLCB4KSk7XG5cbmV4cG9ydCBjb25zdCBtYXBUb09iamVjdDoge1xuICA8VCBleHRlbmRzIHN0cmluZywgVT4oeHM6IEFycmF5TGlrZTxUPiwgZjogKHg6IFQsIGk6IG51bWJlcikgPT4gVSk6IFJlY29yZDxULCBVPjtcbiAgPFQsIFIgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+Pih4czogQXJyYXlMaWtlPFQ+LCBmOiAoeDogVCwgaTogbnVtYmVyKSA9PiBSW2tleW9mIFJdKTogUjtcbn0gPSA8VCwgUiBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4+KHhzOiBBcnJheUxpa2U8VD4sIGY6ICh4OiBULCBpOiBudW1iZXIpID0+IFJba2V5b2YgUl0pOiBSID0+IHtcbiAgY29uc3QgciA9IHt9IGFzIFI7XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICByW1N0cmluZyh4KSBhcyBrZXlvZiBSXSA9IGYoeCwgaSk7XG4gIH1cbiAgcmV0dXJuIHI7XG59O1xuXG5leHBvcnQgY29uc3QgcHVyZSA9IDxUPih4OiBUKTogVFtdID0+IFsgeCBdO1xuXG5leHBvcnQgY29uc3Qgc29ydCA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCBjb21wYXJhdG9yPzogQ29tcGFyYXRvcjxUPik6IFRbXSA9PiB7XG4gIGNvbnN0IGNvcHk6IFRbXSA9IG5hdGl2ZVNsaWNlLmNhbGwoeHMsIDApO1xuICBjb3B5LnNvcnQoY29tcGFyYXRvcik7XG4gIHJldHVybiBjb3B5O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldCA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCBpOiBudW1iZXIpOiBPcHRpb25hbDxUPiA9PiBpID49IDAgJiYgaSA8IHhzLmxlbmd0aCA/IE9wdGlvbmFsLnNvbWUoeHNbaV0pIDogT3B0aW9uYWwubm9uZSgpO1xuXG5leHBvcnQgY29uc3QgaGVhZCA9IDxUPih4czogQXJyYXlMaWtlPFQ+KTogT3B0aW9uYWw8VD4gPT4gZ2V0KHhzLCAwKTtcblxuZXhwb3J0IGNvbnN0IGxhc3QgPSA8VD4oeHM6IEFycmF5TGlrZTxUPik6IE9wdGlvbmFsPFQ+ID0+IGdldCh4cywgeHMubGVuZ3RoIC0gMSk7XG5cbmV4cG9ydCBjb25zdCBmcm9tOiA8VD4oeDogQXJyYXlMaWtlPFQ+KSA9PiBUW10gPSBUeXBlLmlzRnVuY3Rpb24oQXJyYXkuZnJvbSkgPyBBcnJheS5mcm9tIDogKHgpID0+IG5hdGl2ZVNsaWNlLmNhbGwoeCk7XG5cbmV4cG9ydCBjb25zdCBmaW5kTWFwID0gPEEsIEI+KGFycjogQXJyYXlMaWtlPEE+LCBmOiAoYTogQSwgaW5kZXg6IG51bWJlcikgPT4gT3B0aW9uYWw8Qj4pOiBPcHRpb25hbDxCPiA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgciA9IGYoYXJyW2ldLCBpKTtcbiAgICBpZiAoci5pc1NvbWUoKSkge1xuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuICB9XG4gIHJldHVybiBPcHRpb25hbC5ub25lPEI+KCk7XG59O1xuXG5leHBvcnQgY29uc3QgdW5pcXVlID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4sIGNvbXBhcmF0b3I/OiAoYTogVCwgYjogVCkgPT4gYm9vbGVhbik6IFRbXSA9PiB7XG4gIGNvbnN0IHI6IFRbXSA9IFtdO1xuXG4gIGNvbnN0IGlzRHVwbGljYXRlZCA9IFR5cGUuaXNGdW5jdGlvbihjb21wYXJhdG9yKSA/XG4gICAgKHg6IFQpID0+IGV4aXN0cyhyLCAoaSkgPT4gY29tcGFyYXRvcihpLCB4KSkgOlxuICAgICh4OiBUKSA9PiBjb250YWlucyhyLCB4KTtcblxuICBmb3IgKGxldCBpID0gMCwgbGVuID0geHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgaWYgKCFpc0R1cGxpY2F0ZWQoeCkpIHtcbiAgICAgIHIucHVzaCh4KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcjtcbn07XG4iLCJpbXBvcnQgKiBhcyBUeXBlIGZyb20gJy4vVHlwZSc7XG5cbmNvbnN0IG5vb3A6ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZFxuPSAoKSA9PiB7IH07XG5cbmNvbnN0IG5vYXJnOiA8VD4oZjogKCkgPT4gVCkgPT4gKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkXG49IChmKSA9PiAoKSA9PiBmKCk7XG5cbi8qKiBDb21wb3NlIGEgdW5hcnkgZnVuY3Rpb24gd2l0aCBhbiBuLWFyeSBmdW5jdGlvbiAqL1xuY29uc3QgY29tcG9zZSA9IDxUIGV4dGVuZHMgYW55W10sIFUsIFY+KGZhOiAodjogVSkgPT4gViwgZmI6ICguLi54OiBUKSA9PiBVKTogKC4uLng6IFQpID0+IFYgPT4ge1xuICByZXR1cm4gKC4uLmFyZ3M6IFQpID0+IHtcbiAgICByZXR1cm4gZmEoZmIuYXBwbHkobnVsbCwgYXJncykpO1xuICB9O1xufTtcblxuLyoqIENvbXBvc2UgdHdvIHVuYXJ5IGZ1bmN0aW9ucy4gU2ltaWxhciB0byBjb21wb3NlLCBidXQgYXZvaWRzIHVzaW5nIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS4gKi9cbmNvbnN0IGNvbXBvc2UxID0gPEEsIEIsIEM+IChmYmM6IChiOiBCKSA9PiBDLCBmYWI6IChhOiBBKSA9PiBCKSA9PiAoYTogQSk6IEMgPT5cbiAgZmJjKGZhYihhKSk7XG5cbmNvbnN0IGNvbnN0YW50ID0gPFQ+KHZhbHVlOiBUKTogKCkgPT4gVCA9PiB7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xufTtcblxuY29uc3QgaWRlbnRpdHkgPSA8VCA9IGFueT4oeDogVCk6IFQgPT4ge1xuICByZXR1cm4geDtcbn07XG5cbmNvbnN0IHRyaXBsZUVxdWFscyA9IDxUPihhOiBULCBiOiBUKTogYm9vbGVhbiA9PiB7XG4gIHJldHVybiBhID09PSBiO1xufTtcblxuZnVuY3Rpb24gY3VycnkgPFJFU1QgZXh0ZW5kcyBhbnlbXSwgT1VUPihmbjogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQpOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVDtcbmZ1bmN0aW9uIGN1cnJ5IDxBLCBSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46IChhOiBBLCAuLi5yZXN0QXJnczogUkVTVCkgPT4gT1VULCBhOiBBKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8QSwgQiwgUkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoYTogQSwgYjogQiwgLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCwgYTogQSwgYjogQik6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPEEsIEIsIEMsIFJFU1QgZXh0ZW5kcyBhbnlbXSwgT1VUPihmbjogKGE6IEEsIGI6IEIsIGM6IEMsIC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQsIGE6IEEsIGI6IEIsIGM6IEMpOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVDtcbmZ1bmN0aW9uIGN1cnJ5IDxBLCBCLCBDLCBELCBSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46IChhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCAuLi5yZXN0QXJnczogUkVTVCkgPT4gT1VULCBhOiBBLCBiOiBCLCBjOiBDLCBkOiBEKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8QSwgQiwgQywgRCwgRSwgUkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCwgYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSk6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPEEsIEIsIEMsIEQsIEUsIEYsIFJFU1QgZXh0ZW5kcyBhbnlbXSwgT1VUPihmbjogKGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIGY6IEYsIC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQsIGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIGY6IEYpOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVDtcbmZ1bmN0aW9uIGN1cnJ5IDxBLCBCLCBDLCBELCBFLCBGLCBHLCBSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46IChhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCBmOiBGLCBnOiBHLCAuLi5yZXN0QXJnczogUkVTVCkgPT4gT1VULCBhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCBmOiBGLCBnOiBHKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8QSwgQiwgQywgRCwgRSwgRiwgRywgSCwgUkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgZjogRiwgZzogRywgaDogSCwgLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCwgYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgZjogRiwgZzogRywgaDogSCk6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPEEsIEIsIEMsIEQsIEUsIEYsIEcsIEgsIEksIFJFU1QgZXh0ZW5kcyBhbnlbXSwgT1VUPihmbjogKGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIGY6IEYsIGc6IEcsIGg6IEgsIGk6IEksIC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQsIGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIGY6IEYsIGc6IEcsIGg6IEgsIGk6IEkpOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVDtcbmZ1bmN0aW9uIGN1cnJ5IDxBLCBCLCBDLCBELCBFLCBGLCBHLCBILCBJLCBKLCBSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46IChhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCBmOiBGLCBnOiBHLCBoOiBILCBpOiBJLCBqOiBKLCAuLi5yZXN0QXJnczogUkVTVCkgPT4gT1VULCBhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCBmOiBGLCBnOiBHLCBoOiBILCBpOiBJLCBqOiBKKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8T1VUPihmbjogKC4uLmFsbEFyZ3M6IGFueVtdKSA9PiBPVVQsIC4uLmluaXRpYWxBcmdzOiBhbnlbXSk6ICguLi5yZXN0QXJnczogYW55W10pID0+IE9VVCB7XG4gIHJldHVybiAoLi4ucmVzdEFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3QgYWxsID0gaW5pdGlhbEFyZ3MuY29uY2F0KHJlc3RBcmdzKTtcbiAgICByZXR1cm4gZm4uYXBwbHkobnVsbCwgYWxsKTtcbiAgfTtcbn1cblxuY29uc3Qgbm90ID0gPFQ+KGY6ICh0OiBUKSA9PiBib29sZWFuKSA9PiAodDogVCk6IGJvb2xlYW4gPT5cbiAgIWYodCk7XG5cbmNvbnN0IGRpZSA9IChtc2c6IHN0cmluZykgPT4ge1xuICByZXR1cm4gKCk6IG5ldmVyID0+IHtcbiAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcbiAgfTtcbn07XG5cbmNvbnN0IGFwcGx5ID0gPFQ+KGY6ICgpID0+IFQpOiBUID0+IHtcbiAgcmV0dXJuIGYoKTtcbn07XG5cbmNvbnN0IGNhbGwgPSAoZjogKCkgPT4gYW55KTogdm9pZCA9PiB7XG4gIGYoKTtcbn07XG5cbmNvbnN0IG5ldmVyOiAoLi4uYXJnczogYW55W10pID0+IGZhbHNlID0gY29uc3RhbnQ8ZmFsc2U+KGZhbHNlKTtcbmNvbnN0IGFsd2F5czogKC4uLmFyZ3M6IGFueVtdKSA9PiB0cnVlID0gY29uc3RhbnQ8dHJ1ZT4odHJ1ZSk7XG5cbi8qIFVzZWQgdG8gd2Vha2VuIHR5cGVzICovXG5jb25zdCB3ZWFrZW4gPSA8QSwgQiBleHRlbmRzIEE+KGI6IEIpOiBBID0+IGI7XG5cbnR5cGUgRnVuPFgsIFk+ID0gKHg6IFgpID0+IFk7XG5jb25zdCBwaXBlOiB7XG4gIDxBLCBCPihhOiBBLCBhYjogRnVuPEEsIEI+KTogQjtcbiAgPEEsIEIsIEM+KGE6IEEsIGFiOiBGdW48QSwgQj4sIGJjOiBGdW48QiwgQz4pOiBDO1xuICA8QSwgQiwgQywgRD4oYTogQSwgYWI6IEZ1bjxBLCBCPiwgYmM6IEZ1bjxCLCBDPiwgY2Q6IEZ1bjxDLCBEPik6IEQ7XG4gIDxBLCBCLCBDLCBELCBFPihhOiBBLCBhYjogRnVuPEEsIEI+LCBiYzogRnVuPEIsIEM+LCBjZDogRnVuPEMsIEQ+LCBkZTogRnVuPEQsIEU+KTogRTtcbiAgPEEsIEIsIEMsIEQsIEUsIEY+KGE6IEEsIGFiOiBGdW48QSwgQj4sIGJjOiBGdW48QiwgQz4sIGNkOiBGdW48QywgRD4sIGRlOiBGdW48RCwgRT4sIGVmOiBGdW48RSwgRj4pOiBGO1xuICA8QSwgQiwgQywgRCwgRSwgRiwgRz4oYTogQSwgYWI6IEZ1bjxBLCBCPiwgYmM6IEZ1bjxCLCBDPiwgY2Q6IEZ1bjxDLCBEPiwgZGU6IEZ1bjxELCBFPiwgZWY6IEZ1bjxFLCBGPiwgZmc6IEZ1bjxGLCBHPik6IEc7XG4gIDxBLCBCLCBDLCBELCBFLCBGLCBHLCBIPihhOiBBLCBhYjogRnVuPEEsIEI+LCBiYzogRnVuPEIsIEM+LCBjZDogRnVuPEMsIEQ+LCBkZTogRnVuPEQsIEU+LCBlZjogRnVuPEUsIEY+LCBmZzogRnVuPEYsIEc+LCBnaDogRnVuPEcsIEg+KTogSDtcbn0gPVxuICA8QSwgQiwgQywgRCwgRSwgRiwgRywgSD4oYTogQSwgYWI6IEZ1bjxBLCBCPiwgYmM/OiBGdW48QiwgQz4sIGNkPzogRnVuPEMsIEQ+LCBkZT86IEZ1bjxELCBFPiwgZWY/OiBGdW48RSwgRj4sIGZnPzogRnVuPEYsIEc+LCBnaD86IEZ1bjxHLCBIPik6IEIgfCBDIHwgRCB8IEUgfCBGIHwgRyB8IEggPT4ge1xuICAgIGNvbnN0IGIgPSBhYihhKTtcbiAgICBpZiAoVHlwZS5pc051bGxhYmxlKGJjKSkge1xuICAgICAgcmV0dXJuIGI7XG4gICAgfVxuXG4gICAgY29uc3QgYyA9IGJjKGIpO1xuICAgIGlmIChUeXBlLmlzTnVsbGFibGUoY2QpKSB7XG4gICAgICByZXR1cm4gYztcbiAgICB9XG5cbiAgICBjb25zdCBkID0gY2QoYyk7XG4gICAgaWYgKFR5cGUuaXNOdWxsYWJsZShkZSkpIHtcbiAgICAgIHJldHVybiBkO1xuICAgIH1cblxuICAgIGNvbnN0IGUgPSBkZShkKTtcbiAgICBpZiAoVHlwZS5pc051bGxhYmxlKGVmKSkge1xuICAgICAgcmV0dXJuIGU7XG4gICAgfVxuXG4gICAgY29uc3QgZiA9IGVmKGUpO1xuICAgIGlmIChUeXBlLmlzTnVsbGFibGUoZmcpKSB7XG4gICAgICByZXR1cm4gZjtcbiAgICB9XG5cbiAgICBjb25zdCBnID0gZmcoZik7XG4gICAgaWYgKFR5cGUuaXNOdWxsYWJsZShnaCkpIHtcbiAgICAgIHJldHVybiBnO1xuICAgIH1cblxuICAgIHJldHVybiBnaChnKTtcbiAgfTtcblxuZXhwb3J0IHtcbiAgbm9vcCxcbiAgbm9hcmcsXG4gIGNvbXBvc2UsXG4gIGNvbXBvc2UxLFxuICBjb25zdGFudCxcbiAgaWRlbnRpdHksXG4gIHRyaXBsZUVxdWFscyxcbiAgY3VycnksXG4gIG5vdCxcbiAgZGllLFxuICBhcHBseSxcbiAgY2FsbCxcbiAgbmV2ZXIsXG4gIGFsd2F5cyxcbiAgd2Vha2VuLFxuICBwaXBlXG59O1xuIiwiaW1wb3J0ICogYXMgVHlwZSBmcm9tICcuL1R5cGUnO1xuXG4vKipcbiAqIFRoZSBgT3B0aW9uYWxgIHR5cGUgcmVwcmVzZW50cyBhIHZhbHVlIChvZiBhbnkgdHlwZSkgdGhhdCBwb3RlbnRpYWxseSBkb2VzXG4gKiBub3QgZXhpc3QuIEFueSBgT3B0aW9uYWw8VD5gIGNhbiBlaXRoZXIgYmUgYSBgU29tZTxUPmAgKGluIHdoaWNoIGNhc2UgdGhlXG4gKiB2YWx1ZSBkb2VzIGV4aXN0KSBvciBhIGBOb25lYCAoaW4gd2hpY2ggY2FzZSB0aGUgdmFsdWUgZG9lcyBub3QgZXhpc3QpLiBUaGlzXG4gKiBtb2R1bGUgZGVmaW5lcyBhIHdob2xlIGxvdCBvZiBGUC1pbnNwaXJlZCB1dGlsaXR5IGZ1bmN0aW9ucyBmb3IgZGVhbGluZyB3aXRoXG4gKiBgT3B0aW9uYWxgIG9iamVjdHMuXG4gKlxuICogQ29tcGFyaXNvbiB3aXRoIG51bGwgb3IgdW5kZWZpbmVkOlxuICogLSBXZSBkb24ndCBnZXQgZmFuY3kgbnVsbCBjb2FsZXNjaW5nIG9wZXJhdG9ycyB3aXRoIGBPcHRpb25hbGBcbiAqIC0gV2UgZG8gZ2V0IGZhbmN5IGhlbHBlciBmdW5jdGlvbnMgd2l0aCBgT3B0aW9uYWxgXG4gKiAtIGBPcHRpb25hbGAgc3VwcG9ydCBuZXN0aW5nLCBhbmQgYWxsb3cgZm9yIHRoZSB0eXBlIHRvIHN0aWxsIGJlIG51bGxhYmxlIChvclxuICogYW5vdGhlciBgT3B0aW9uYWxgKVxuICogLSBUaGVyZSBpcyBubyBvcHRpb24gdG8gdHVybiBvZmYgc3RyaWN0LW9wdGlvbmFsLWNoZWNrcyBsaWtlIHRoZXJlIGlzIGZvclxuICogc3RyaWN0LW51bGwtY2hlY2tzXG4gKi9cbmV4cG9ydCBjbGFzcyBPcHRpb25hbDxUPiB7XG4gIHByaXZhdGUgcmVhZG9ubHkgdGFnOiBib29sZWFuO1xuICBwcml2YXRlIHJlYWRvbmx5IHZhbHVlPzogVDtcblxuICAvLyBTbmVha3kgb3B0aW1pc2F0aW9uOiBldmVyeSBpbnN0YW5jZSBvZiBPcHRpb25hbC5ub25lIGlzIGlkZW50aWNhbCwgc28ganVzdFxuICAvLyByZXVzZSB0aGUgc2FtZSBvYmplY3RcbiAgcHJpdmF0ZSBzdGF0aWMgc2luZ2xldG9uTm9uZSA9IG5ldyBPcHRpb25hbDxhbnk+KGZhbHNlKTtcblxuICAvLyBUaGUgaW50ZXJuYWwgcmVwcmVzZW50YXRpb24gaGFzIGEgYHRhZ2AgYW5kIGEgYHZhbHVlYCwgYnV0IGJvdGggYXJlXG4gIC8vIHByaXZhdGU6IGFibGUgdG8gYmUgY29uc29sZS5sb2dnZWQsIGJ1dCBub3QgYWJsZSB0byBiZSBhY2Nlc3NlZCBieSBjb2RlXG4gIHByaXZhdGUgY29uc3RydWN0b3IodGFnOiBib29sZWFuLCB2YWx1ZT86IFQpIHtcbiAgICB0aGlzLnRhZyA9IHRhZztcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICAvLyAtLS0gSWRlbnRpdGllcyAtLS1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBgT3B0aW9uYWw8VD5gIHRoYXQgKipkb2VzKiogY29udGFpbiBhIHZhbHVlLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBzb21lPFQ+KHRoaXM6IHZvaWQsIHZhbHVlOiBUKTogT3B0aW9uYWw8VD4ge1xuICAgIHJldHVybiBuZXcgT3B0aW9uYWwodHJ1ZSwgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBgT3B0aW9uYWw8VD5gIHRoYXQgKipkb2VzIG5vdCoqIGNvbnRhaW4gYSB2YWx1ZS4gYFRgIGNhbiBiZVxuICAgKiBhbnkgdHlwZSBiZWNhdXNlIHdlIGRvbid0IGFjdHVhbGx5IGhhdmUgYSBgVGAuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIG5vbmU8VCA9IG5ldmVyPih0aGlzOiB2b2lkKTogT3B0aW9uYWw8VD4ge1xuICAgIHJldHVybiBPcHRpb25hbC5zaW5nbGV0b25Ob25lO1xuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm0gYSB0cmFuc2Zvcm0gb24gYW4gYE9wdGlvbmFsYCB0eXBlLiBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpc1xuICAgKiBgT3B0aW9uYWxgIGNvbnRhaW5zIGEgdmFsdWUgb3Igbm90LCBgZm9sZGAgd2lsbCByZXR1cm4gYSB2YWx1ZSBvZiB0eXBlIGBVYC5cbiAgICogSWYgdGhpcyBgT3B0aW9uYWxgIGRvZXMgbm90IGNvbnRhaW4gYSB2YWx1ZSwgdGhlIGBVYCB3aWxsIGJlIGNyZWF0ZWQgYnlcbiAgICogY2FsbGluZyBgb25Ob25lYC4gSWYgdGhpcyBgT3B0aW9uYWxgIGRvZXMgY29udGFpbiBhIHZhbHVlLCB0aGUgYFVgIHdpbGwgYmVcbiAgICogY3JlYXRlZCBieSBjYWxsaW5nIGBvblNvbWVgLlxuICAgKlxuICAgKiBGb3IgdGhlIEZQIGVudGh1c2lhc3RzIGluIHRoZSByb29tLCB0aGlzIGZ1bmN0aW9uOlxuICAgKiAxLiBDb3VsZCBiZSB1c2VkIHRvIGltcGxlbWVudCBhbGwgb2YgdGhlIGZ1bmN0aW9ucyBiZWxvd1xuICAgKiAyLiBGb3JtcyBhIGNhdGFtb3JwaGlzbVxuICAgKi9cbiAgcHVibGljIGZvbGQ8VT4ob25Ob25lOiAoKSA9PiBVLCBvblNvbWU6ICh2YWx1ZTogVCkgPT4gVSk6IFUge1xuICAgIGlmICh0aGlzLnRhZykge1xuICAgICAgcmV0dXJuIG9uU29tZSh0aGlzLnZhbHVlIGFzIFQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb25Ob25lKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBpZiB0aGlzIGBPcHRpb25hbGAgb2JqZWN0IGNvbnRhaW5zIGEgdmFsdWUuXG4gICAqL1xuICBwdWJsaWMgaXNTb21lKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnRhZztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgdGhpcyBgT3B0aW9uYWxgIG9iamVjdCAqKmRvZXMgbm90KiogY29udGFpbiBhIHZhbHVlLlxuICAgKi9cbiAgcHVibGljIGlzTm9uZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMudGFnO1xuICB9XG5cbiAgLy8gLS0tIEZ1bmN0b3IgKG5hbWUgc3RvbGVuIGZyb20gSGFza2VsbCAvIG1hdGhzKSAtLS1cblxuICAvKipcbiAgICogUGVyZm9ybSBhIHRyYW5zZm9ybSBvbiBhbiBgT3B0aW9uYWxgIG9iamVjdCwgKippZioqIHRoZXJlIGlzIGEgdmFsdWUuIElmXG4gICAqIHlvdSBwcm92aWRlIGEgZnVuY3Rpb24gdG8gdHVybiBhIFQgaW50byBhIFUsIHRoaXMgaXMgdGhlIGZ1bmN0aW9uIHlvdSB1c2VcbiAgICogdG8gdHVybiBhbiBgT3B0aW9uYWw8VD5gIGludG8gYW4gYE9wdGlvbmFsPFU+YC4gSWYgdGhpcyAqKmRvZXMqKiBjb250YWluXG4gICAqIGEgdmFsdWUgdGhlbiB0aGUgb3V0cHV0IHdpbGwgYWxzbyBjb250YWluIGEgdmFsdWUgKHRoYXQgdmFsdWUgYmVpbmcgdGhlXG4gICAqIG91dHB1dCBvZiBgbWFwcGVyKHRoaXMudmFsdWUpYCksIGFuZCBpZiB0aGlzICoqZG9lcyBub3QqKiBjb250YWluIGEgdmFsdWVcbiAgICogdGhlbiBuZWl0aGVyIHdpbGwgdGhlIG91dHB1dC5cbiAgICovXG4gIHB1YmxpYyBtYXA8VT4obWFwcGVyOiAodmFsdWU6IFQpID0+IFUpOiBPcHRpb25hbDxVPiB7XG4gICAgaWYgKHRoaXMudGFnKSB7XG4gICAgICByZXR1cm4gT3B0aW9uYWwuc29tZShtYXBwZXIodGhpcy52YWx1ZSBhcyBUKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBPcHRpb25hbC5ub25lKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tIE1vbmFkIChuYW1lIHN0b2xlbiBmcm9tIEhhc2tlbGwgLyBtYXRocykgLS0tXG5cbiAgLyoqXG4gICAqIFBlcmZvcm0gYSB0cmFuc2Zvcm0gb24gYW4gYE9wdGlvbmFsYCBvYmplY3QsICoqaWYqKiB0aGVyZSBpcyBhIHZhbHVlLlxuICAgKiBVbmxpa2UgYG1hcGAsIGhlcmUgdGhlIHRyYW5zZm9ybSBpdHNlbGYgYWxzbyByZXR1cm5zIGFuIGBPcHRpb25hbGAuXG4gICAqL1xuICBwdWJsaWMgYmluZDxVPihiaW5kZXI6ICh2YWx1ZTogVCkgPT4gT3B0aW9uYWw8VT4pOiBPcHRpb25hbDxVPiB7XG4gICAgaWYgKHRoaXMudGFnKSB7XG4gICAgICByZXR1cm4gYmluZGVyKHRoaXMudmFsdWUgYXMgVCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBPcHRpb25hbC5ub25lKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tIFRyYXZlcnNhYmxlIChuYW1lIHN0b2xlbiBmcm9tIEhhc2tlbGwgLyBtYXRocykgLS0tXG5cbiAgLyoqXG4gICAqIEZvciBhIGdpdmVuIHByZWRpY2F0ZSwgdGhpcyBmdW5jdGlvbiBmaW5kcyBvdXQgaWYgdGhlcmUgKipleGlzdHMqKiBhIHZhbHVlXG4gICAqIGluc2lkZSB0aGlzIGBPcHRpb25hbGAgb2JqZWN0IHRoYXQgbWVldHMgdGhlIHByZWRpY2F0ZS4gSW4gcHJhY3RpY2UsIHRoaXNcbiAgICogbWVhbnMgdGhhdCBmb3IgYE9wdGlvbmFsYHMgdGhhdCBkbyBub3QgY29udGFpbiBhIHZhbHVlIGl0IHJldHVybnMgZmFsc2UgKGFzXG4gICAqIG5vIHByZWRpY2F0ZS1tZWV0aW5nIHZhbHVlIGV4aXN0cykuXG4gICAqL1xuICBwdWJsaWMgZXhpc3RzKHByZWRpY2F0ZTogKHZhbHVlOiBUKSA9PiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudGFnICYmIHByZWRpY2F0ZSh0aGlzLnZhbHVlIGFzIFQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvciBhIGdpdmVuIHByZWRpY2F0ZSwgdGhpcyBmdW5jdGlvbiBmaW5kcyBvdXQgaWYgKiphbGwqKiB0aGUgdmFsdWVzIGluc2lkZVxuICAgKiB0aGlzIGBPcHRpb25hbGAgb2JqZWN0IG1lZXQgdGhlIHByZWRpY2F0ZS4gSW4gcHJhY3RpY2UsIHRoaXMgbWVhbnMgdGhhdFxuICAgKiBmb3IgYE9wdGlvbmFsYHMgdGhhdCBkbyBub3QgY29udGFpbiBhIHZhbHVlIGl0IHJldHVybnMgdHJ1ZSAoYXMgYWxsIDBcbiAgICogb2JqZWN0cyBkbyBtZWV0IHRoZSBwcmVkaWNhdGUpLlxuICAgKi9cbiAgcHVibGljIGZvcmFsbChwcmVkaWNhdGU6ICh2YWx1ZTogVCkgPT4gYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy50YWcgfHwgcHJlZGljYXRlKHRoaXMudmFsdWUgYXMgVCk7XG4gIH1cblxuICAvKipcbiAgICogRm9yIGEgZ2l2ZW4gcHJlZGljYXRlLCBjcmVhdGUgYSBuZXcgYE9wdGlvbmFsYCBvYmplY3QgdGhhdCB3aWxsIHJldGFpblxuICAgKiBhbGwgdGhlIHZhbHVlcyBpbnNpZGUgdGhlIG9sZCBgT3B0aW9uYWxgIG9iamVjdCB0aGF0IG1lZXQgdGhlIHByZWRpY2F0ZS5cbiAgICogSW4gcHJhY3RpY2UsIHRoZSBgT3B0aW9uYWxgIG9iamVjdCBjb250YWlucyBlaXRoZXIgMCBvciAxIG9iamVjdHMsIGFuZFxuICAgKiB0aGUgb3V0cHV0IHdpbGwga2VlcCB0aGUgKHNpbmdsZSkgaW5wdXQgb2JqZWN0IChpZiBpdCBleGlzdHMpIGFzIGxvbmcgYXNcbiAgICogaXQgcGFzc2VzIHRoZSBwcmVkaWNhdGUuXG4gICAqL1xuICBwdWJsaWMgZmlsdGVyPFUgZXh0ZW5kcyBUPihwcmVkaWNhdGU6ICh2YWx1ZTogVCkgPT4gdmFsdWUgaXMgVSk6IE9wdGlvbmFsPFU+O1xuICBwdWJsaWMgZmlsdGVyKHByZWRpY2F0ZTogKHZhbHVlOiBUKSA9PiBib29sZWFuKTogT3B0aW9uYWw8VD47XG4gIHB1YmxpYyBmaWx0ZXIocHJlZGljYXRlOiAodmFsdWU6IFQpID0+IGJvb2xlYW4pOiBPcHRpb25hbDxUPiB7XG4gICAgaWYgKCF0aGlzLnRhZyB8fCBwcmVkaWNhdGUodGhpcy52YWx1ZSBhcyBUKSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBPcHRpb25hbC5ub25lKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tIEdldHRlcnMgLS0tXG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdmFsdWUgb3V0IG9mIHRoZSBpbnNpZGUgb2YgdGhlIGBPcHRpb25hbGAgb2JqZWN0LCB1c2luZyBhIGRlZmF1bHRcbiAgICogYHJlcGxhY2VtZW50YCB2YWx1ZSBpZiB0aGUgcHJvdmlkZWQgYE9wdGlvbmFsYCBvYmplY3QgZG9lcyBub3QgY29udGFpbiBhXG4gICAqIHZhbHVlLlxuICAgKi9cbiAgcHVibGljIGdldE9yPFUgPSBUPihyZXBsYWNlbWVudDogVSk6IFQgfCBVIHtcbiAgICByZXR1cm4gdGhpcy50YWcgPyB0aGlzLnZhbHVlIGFzIFQgOiByZXBsYWNlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHZhbHVlIG91dCBvZiB0aGUgaW5zaWRlIG9mIHRoZSBgT3B0aW9uYWxgIG9iamVjdCwgdXNpbmcgYSBkZWZhdWx0XG4gICAqIGByZXBsYWNlbWVudGAgdmFsdWUgaWYgdGhlIHByb3ZpZGVkIGBPcHRpb25hbGAgb2JqZWN0IGRvZXMgbm90IGNvbnRhaW4gYVxuICAgKiB2YWx1ZS4gIFVubGlrZSBgZ2V0T3JgLCBpbiB0aGlzIG1ldGhvZCB0aGUgYHJlcGxhY2VtZW50YCBvYmplY3QgaXMgYWxzb1xuICAgKiBgT3B0aW9uYWxgIC0gbWVhbmluZyB0aGF0IHRoaXMgbWV0aG9kIHdpbGwgYWx3YXlzIHJldHVybiBhbiBgT3B0aW9uYWxgLlxuICAgKi9cbiAgcHVibGljIG9yPFUgPSBUPihyZXBsYWNlbWVudDogT3B0aW9uYWw8VT4pOiBPcHRpb25hbDxUIHwgVT4ge1xuICAgIHJldHVybiB0aGlzLnRhZyA/IHRoaXMgOiByZXBsYWNlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHZhbHVlIG91dCBvZiB0aGUgaW5zaWRlIG9mIHRoZSBgT3B0aW9uYWxgIG9iamVjdCwgdXNpbmcgYSBkZWZhdWx0XG4gICAqIGByZXBsYWNlbWVudGAgdmFsdWUgaWYgdGhlIHByb3ZpZGVkIGBPcHRpb25hbGAgb2JqZWN0IGRvZXMgbm90IGNvbnRhaW4gYVxuICAgKiB2YWx1ZS4gVW5saWtlIGBnZXRPcmAsIGluIHRoaXMgbWV0aG9kIHRoZSBgcmVwbGFjZW1lbnRgIHZhbHVlIGlzXG4gICAqIFwidGh1bmtlZFwiIC0gdGhhdCBpcyB0byBzYXkgdGhhdCB5b3UgZG9uJ3QgcGFzcyBhIHZhbHVlIHRvIGBnZXRPclRodW5rYCwgeW91XG4gICAqIHBhc3MgYSBmdW5jdGlvbiB3aGljaCAoaWYgY2FsbGVkKSB3aWxsICoqcmV0dXJuKiogdGhlIGB2YWx1ZWAgeW91IHdhbnQgdG9cbiAgICogdXNlLlxuICAgKi9cbiAgcHVibGljIGdldE9yVGh1bms8VSA9IFQ+KHRodW5rOiAoKSA9PiBVKTogVCB8IFUge1xuICAgIHJldHVybiB0aGlzLnRhZyA/IHRoaXMudmFsdWUgYXMgVCA6IHRodW5rKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB2YWx1ZSBvdXQgb2YgdGhlIGluc2lkZSBvZiB0aGUgYE9wdGlvbmFsYCBvYmplY3QsIHVzaW5nIGEgZGVmYXVsdFxuICAgKiBgcmVwbGFjZW1lbnRgIHZhbHVlIGlmIHRoZSBwcm92aWRlZCBPcHRpb25hbCBvYmplY3QgZG9lcyBub3QgY29udGFpbiBhXG4gICAqIHZhbHVlLlxuICAgKlxuICAgKiBVbmxpa2UgYG9yYCwgaW4gdGhpcyBtZXRob2QgdGhlIGByZXBsYWNlbWVudGAgdmFsdWUgaXMgXCJ0aHVua2VkXCIgLSB0aGF0IGlzXG4gICAqIHRvIHNheSB0aGF0IHlvdSBkb24ndCBwYXNzIGEgdmFsdWUgdG8gYG9yVGh1bmtgLCB5b3UgcGFzcyBhIGZ1bmN0aW9uIHdoaWNoXG4gICAqIChpZiBjYWxsZWQpIHdpbGwgKipyZXR1cm4qKiB0aGUgYHZhbHVlYCB5b3Ugd2FudCB0byB1c2UuXG4gICAqXG4gICAqIFVubGlrZSBgZ2V0T3JUaHVua2AsIGluIHRoaXMgbWV0aG9kIHRoZSBgcmVwbGFjZW1lbnRgIHZhbHVlIGlzIGFsc29cbiAgICogYE9wdGlvbmFsYCwgbWVhbmluZyB0aGF0IHRoaXMgbWV0aG9kIHdpbGwgYWx3YXlzIHJldHVybiBhbiBgT3B0aW9uYWxgLlxuICAgKi9cbiAgcHVibGljIG9yVGh1bms8VSA9IFQ+KHRodW5rOiAoKSA9PiBPcHRpb25hbDxVPik6IE9wdGlvbmFsPFQgfCBVPiB7XG4gICAgcmV0dXJuIHRoaXMudGFnID8gdGhpcyA6IHRodW5rKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB2YWx1ZSBvdXQgb2YgdGhlIGluc2lkZSBvZiB0aGUgYE9wdGlvbmFsYCBvYmplY3QsIHRocm93aW5nIGFuXG4gICAqIGV4Y2VwdGlvbiBpZiB0aGUgcHJvdmlkZWQgYE9wdGlvbmFsYCBvYmplY3QgZG9lcyBub3QgY29udGFpbiBhIHZhbHVlLlxuICAgKlxuICAgKiBXQVJOSU5HOlxuICAgKiBZb3Ugc2hvdWxkIG9ubHkgYmUgdXNpbmcgdGhpcyBmdW5jdGlvbiBpZiB5b3Uga25vdyB0aGF0IHRoZSBgT3B0aW9uYWxgXG4gICAqIG9iamVjdCAqKmlzIG5vdCoqIGVtcHR5IChvdGhlcndpc2UgeW91J3JlIHRocm93aW5nIGV4Y2VwdGlvbnMgaW4gcHJvZHVjdGlvblxuICAgKiBjb2RlLCB3aGljaCBpcyBiYWQpLlxuICAgKlxuICAgKiBJbiB0ZXN0cyB0aGlzIGlzIG1vcmUgYWNjZXB0YWJsZS5cbiAgICpcbiAgICogUHJlZmVyIG90aGVyIG1ldGhvZHMgdG8gdGhpcywgc3VjaCBhcyBgLmVhY2hgLlxuICAgKi9cbiAgcHVibGljIGdldE9yRGllKG1lc3NhZ2U/OiBzdHJpbmcpOiBUIHtcbiAgICBpZiAoIXRoaXMudGFnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSA/PyAnQ2FsbGVkIGdldE9yRGllIG9uIE5vbmUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWUgYXMgVDtcbiAgICB9XG4gIH1cblxuICAvLyAtLS0gSW50ZXJvcCB3aXRoIG51bGwgYW5kIHVuZGVmaW5lZCAtLS1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBgT3B0aW9uYWxgIHZhbHVlIGZyb20gYSBudWxsYWJsZSAob3IgdW5kZWZpbmVkLWFibGUpIGlucHV0LlxuICAgKiBOdWxsLCBvciB1bmRlZmluZWQsIGlzIGNvbnZlcnRlZCB0byBgTm9uZWAsIGFuZCBhbnl0aGluZyBlbHNlIGlzIGNvbnZlcnRlZFxuICAgKiB0byBgU29tZWAuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGZyb208VD4odGhpczogdm9pZCwgdmFsdWU6IFQgfCBudWxsIHwgdW5kZWZpbmVkKTogT3B0aW9uYWw8Tm9uTnVsbGFibGU8VD4+IHtcbiAgICByZXR1cm4gVHlwZS5pc05vbk51bGxhYmxlKHZhbHVlKSA/IE9wdGlvbmFsLnNvbWUodmFsdWUpIDogT3B0aW9uYWwubm9uZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGFuIGBPcHRpb25hbGAgdG8gYSBudWxsYWJsZSB0eXBlLCBieSBnZXR0aW5nIHRoZSB2YWx1ZSBpZiBpdFxuICAgKiBleGlzdHMsIG9yIHJldHVybmluZyBgbnVsbGAgaWYgaXQgZG9lcyBub3QuXG4gICAqL1xuICBwdWJsaWMgZ2V0T3JOdWxsKCk6IFQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy50YWcgPyB0aGlzLnZhbHVlIGFzIFQgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGFuIGBPcHRpb25hbGAgdG8gYW4gdW5kZWZpbmVkLWFibGUgdHlwZSwgYnkgZ2V0dGluZyB0aGUgdmFsdWUgaWZcbiAgICogaXQgZXhpc3RzLCBvciByZXR1cm5pbmcgYHVuZGVmaW5lZGAgaWYgaXQgZG9lcyBub3QuXG4gICAqL1xuICBwdWJsaWMgZ2V0T3JVbmRlZmluZWQoKTogVCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cblxuICAvLyAtLS0gVXRpbGl0aWVzIC0tLVxuXG4gIC8qKlxuICAgKiBJZiB0aGUgYE9wdGlvbmFsYCBjb250YWlucyBhIHZhbHVlLCBwZXJmb3JtIGFuIGFjdGlvbiBvbiB0aGF0IHZhbHVlLlxuICAgKiBVbmxpa2UgdGhlIHJlc3Qgb2YgdGhlIG1ldGhvZHMgb24gdGhpcyB0eXBlLCBgLmVhY2hgIGhhcyBzaWRlLWVmZmVjdHMuIElmXG4gICAqIHlvdSB3YW50IHRvIHRyYW5zZm9ybSBhbiBgT3B0aW9uYWw8VD5gICoqaW50byoqIHNvbWV0aGluZywgdGhlbiB0aGlzIGlzIG5vdFxuICAgKiB0aGUgbWV0aG9kIGZvciB5b3UuIElmIHlvdSB3YW50IHRvIHVzZSBhbiBgT3B0aW9uYWw8VD5gIHRvICoqZG8qKlxuICAgKiBzb21ldGhpbmcsIHRoZW4gdGhpcyBpcyB0aGUgbWV0aG9kIGZvciB5b3UgLSBwcm92aWRlZCB5b3UncmUgb2theSB3aXRoIG5vdFxuICAgKiBkb2luZyBhbnl0aGluZyBpbiB0aGUgY2FzZSB3aGVyZSB0aGUgYE9wdGlvbmFsYCBkb2Vzbid0IGhhdmUgYSB2YWx1ZSBpbnNpZGVcbiAgICogaXQuIElmIHlvdSdyZSBub3Qgc3VyZSB3aGV0aGVyIHlvdXIgdXNlLWNhc2UgZml0cyBpbnRvIHRyYW5zZm9ybWluZ1xuICAgKiAqKmludG8qKiBzb21ldGhpbmcgb3IgKipkb2luZyoqIHNvbWV0aGluZywgY2hlY2sgd2hldGhlciBpdCBoYXMgYSByZXR1cm5cbiAgICogdmFsdWUuIElmIGl0IGRvZXMsIHlvdSBzaG91bGQgYmUgcGVyZm9ybWluZyBhIHRyYW5zZm9ybS5cbiAgICovXG4gIHB1YmxpYyBlYWNoKHdvcmtlcjogKHZhbHVlOiBUKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudGFnKSB7XG4gICAgICB3b3JrZXIodGhpcy52YWx1ZSBhcyBUKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVHVybiB0aGUgYE9wdGlvbmFsYCBvYmplY3QgaW50byBhbiBhcnJheSB0aGF0IGNvbnRhaW5zIGFsbCBvZiB0aGUgdmFsdWVzXG4gICAqIHN0b3JlZCBpbnNpZGUgdGhlIGBPcHRpb25hbGAuIEluIHByYWN0aWNlLCB0aGlzIG1lYW5zIHRoZSBvdXRwdXQgd2lsbCBoYXZlXG4gICAqIGVpdGhlciAwIG9yIDEgZWxlbWVudHMuXG4gICAqL1xuICBwdWJsaWMgdG9BcnJheSgpOiBUW10ge1xuICAgIHJldHVybiB0aGlzLnRhZyA/IFsgdGhpcy52YWx1ZSBhcyBUIF0gOiBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUdXJuIHRoZSBgT3B0aW9uYWxgIG9iamVjdCBpbnRvIGEgc3RyaW5nIGZvciBkZWJ1Z2dpbmcgb3IgcHJpbnRpbmcuIE5vdFxuICAgKiByZWNvbW1lbmRlZCBmb3IgcHJvZHVjdGlvbiBjb2RlLCBidXQgZ29vZCBmb3IgZGVidWdnaW5nLiBBbHNvIG5vdGUgdGhhdFxuICAgKiB0aGVzZSBkYXlzIGFuIGBPcHRpb25hbGAgb2JqZWN0IGNhbiBiZSBsb2dnZWQgdG8gdGhlIGNvbnNvbGUgZGlyZWN0bHksIGFuZFxuICAgKiBpdHMgaW5uZXIgdmFsdWUgKGlmIGl0IGV4aXN0cykgd2lsbCBiZSB2aXNpYmxlLlxuICAgKi9cbiAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudGFnID8gYHNvbWUoJHt0aGlzLnZhbHVlfSlgIDogJ25vbmUoKSc7XG4gIH1cbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby13cmFwcGVyLW9iamVjdC10eXBlcyAqL1xuY29uc3QgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG5cbmludGVyZmFjZSBDb25zdHJ1Y3RvcjxUIGV4dGVuZHMgT2JqZWN0PiB7XG4gIHJlYWRvbmx5IHByb3RvdHlwZTogVDtcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xufVxuXG5jb25zdCBoYXNQcm90byA9IDxUIGV4dGVuZHMgT2JqZWN0Pih2OiBPYmplY3QsIGNvbnN0cnVjdG9yOiBDb25zdHJ1Y3RvcjxUPiwgcHJlZGljYXRlOiAodjogT2JqZWN0LCBwcm90b3R5cGU6IFQpID0+IGJvb2xlYW4pOiBib29sZWFuID0+IHtcbiAgaWYgKHByZWRpY2F0ZSh2LCBjb25zdHJ1Y3Rvci5wcm90b3R5cGUpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgLy8gU3RyaW5nLWJhc2VkIGZhbGxiYWNrIHRpbWVcbiAgICByZXR1cm4gdi5jb25zdHJ1Y3Rvcj8ubmFtZSA9PT0gY29uc3RydWN0b3IubmFtZTtcbiAgfVxufTtcblxuY29uc3QgdHlwZU9mID0gKHg6IGFueSk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IHQgPSB0eXBlb2YgeDtcbiAgaWYgKHggPT09IG51bGwpIHtcbiAgICByZXR1cm4gJ251bGwnO1xuICB9IGVsc2UgaWYgKHQgPT09ICdvYmplY3QnICYmIEFycmF5LmlzQXJyYXkoeCkpIHtcbiAgICByZXR1cm4gJ2FycmF5JztcbiAgfSBlbHNlIGlmICh0ID09PSAnb2JqZWN0JyAmJiBoYXNQcm90byh4LCBTdHJpbmcsIChvLCBwcm90bykgPT4gcHJvdG8uaXNQcm90b3R5cGVPZihvKSkpIHtcbiAgICByZXR1cm4gJ3N0cmluZyc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHQ7XG4gIH1cbn07XG5cbmNvbnN0IGlzVHlwZSA9IDxZb2xvPih0eXBlOiBzdHJpbmcpID0+ICh2YWx1ZTogYW55KTogdmFsdWUgaXMgWW9sbyA9PlxuICB0eXBlT2YodmFsdWUpID09PSB0eXBlO1xuXG5jb25zdCBpc1NpbXBsZVR5cGUgPSA8WW9sbz4odHlwZTogc3RyaW5nKSA9PiAodmFsdWU6IGFueSk6IHZhbHVlIGlzIFlvbG8gPT5cbiAgdHlwZW9mIHZhbHVlID09PSB0eXBlO1xuXG5jb25zdCBlcSA9IDxUPiAodDogVCkgPT4gKGE6IGFueSk6IGEgaXMgVCA9PlxuICB0ID09PSBhO1xuXG5leHBvcnQgY29uc3QgaXMgPSA8RSBleHRlbmRzIE9iamVjdD4odmFsdWU6IGFueSwgY29uc3RydWN0b3I6IENvbnN0cnVjdG9yPEU+KTogdmFsdWUgaXMgRSA9PlxuICBpc09iamVjdCh2YWx1ZSkgJiYgaGFzUHJvdG88RT4odmFsdWUsIGNvbnN0cnVjdG9yLCAobywgcHJvdG8pID0+IGdldFByb3RvdHlwZU9mKG8pID09PSBwcm90byk7XG5cbmV4cG9ydCBjb25zdCBpc1N0cmluZzogKHZhbHVlOiBhbnkpID0+IHZhbHVlIGlzIHN0cmluZyA9XG4gIGlzVHlwZSgnc3RyaW5nJyk7XG5cbmV4cG9ydCBjb25zdCBpc09iamVjdDogKHZhbHVlOiBhbnkpID0+IHZhbHVlIGlzIE9iamVjdCA9XG4gIGlzVHlwZSgnb2JqZWN0Jyk7XG5cbmV4cG9ydCBjb25zdCBpc1BsYWluT2JqZWN0ID0gKHZhbHVlOiB1bmtub3duKTogdmFsdWUgaXMgT2JqZWN0ID0+XG4gIGlzKHZhbHVlLCBPYmplY3QpO1xuXG5leHBvcnQgY29uc3QgaXNBcnJheTogKHZhbHVlOiBhbnkpID0+IHZhbHVlIGlzIEFycmF5PHVua25vd24+ID1cbiAgaXNUeXBlKCdhcnJheScpO1xuXG5leHBvcnQgY29uc3QgaXNOdWxsOiAoYTogYW55KSA9PiBhIGlzIG51bGwgPVxuICBlcShudWxsKTtcblxuZXhwb3J0IGNvbnN0IGlzQm9vbGVhbjogKHZhbHVlOiBhbnkpID0+IHZhbHVlIGlzIGJvb2xlYW4gPVxuICBpc1NpbXBsZVR5cGU8Ym9vbGVhbj4oJ2Jvb2xlYW4nKTtcblxuZXhwb3J0IGNvbnN0IGlzVW5kZWZpbmVkOiAoYTogYW55KSA9PiBhIGlzIHVuZGVmaW5lZCA9XG4gIGVxKHVuZGVmaW5lZCk7XG5cbmV4cG9ydCBjb25zdCBpc051bGxhYmxlID0gKGE6IGFueSk6IGEgaXMgbnVsbCB8IHVuZGVmaW5lZCA9PlxuICBhID09PSBudWxsIHx8IGEgPT09IHVuZGVmaW5lZDtcblxuZXhwb3J0IGNvbnN0IGlzTm9uTnVsbGFibGUgPSA8QT4gKGE6IEEgfCBudWxsIHwgdW5kZWZpbmVkKTogYSBpcyBOb25OdWxsYWJsZTxBPiA9PlxuICAhaXNOdWxsYWJsZShhKTtcblxuZXhwb3J0IGNvbnN0IGlzRnVuY3Rpb246ICh2YWx1ZTogYW55KSA9PiB2YWx1ZSBpcyBGdW5jdGlvbiA9XG4gIGlzU2ltcGxlVHlwZTxGdW5jdGlvbj4oJ2Z1bmN0aW9uJyk7XG5cbmV4cG9ydCBjb25zdCBpc051bWJlcjogKHZhbHVlOiBhbnkpID0+IHZhbHVlIGlzIG51bWJlciA9XG4gIGlzU2ltcGxlVHlwZTxudW1iZXI+KCdudW1iZXInKTtcblxuZXhwb3J0IGNvbnN0IGlzQXJyYXlPZiA9IDxFPih2YWx1ZTogYW55LCBwcmVkOiAoeDogYW55KSA9PiB4IGlzIEUpOiB2YWx1ZSBpcyBBcnJheTxFPiA9PiB7XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB2YWx1ZS5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgaWYgKCEocHJlZCh2YWx1ZVtpXSkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzUHJvbWlzZUxpa2UgPSAoeDogYW55KTogeCBpcyBQcm9taXNlPHVua25vd24+ID0+XG4gIGlzT2JqZWN0KHgpXG4gICYmIGlzRnVuY3Rpb24oeC50aGVuKVxuICAmJiBpc0Z1bmN0aW9uKHguY2F0Y2gpO1xuIiwiaW1wb3J0IFBsdWdpbk1hbmFnZXIgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9QbHVnaW5NYW5hZ2VyJztcblxuaW1wb3J0ICogYXMgQXBpIGZyb20gJy4vYXBpL0FwaSc7XG5pbXBvcnQgKiBhcyBPcHRpb25zIGZyb20gJy4vYXBpL09wdGlvbnMnO1xuaW1wb3J0ICogYXMgSW1wb3J0Q3NzIGZyb20gJy4vY29yZS9JbXBvcnRDc3MnO1xuXG5leHBvcnQgZGVmYXVsdCAoKTogdm9pZCA9PiB7XG4gIFBsdWdpbk1hbmFnZXIuYWRkKCdpbXBvcnRjc3MnLCAoZWRpdG9yKSA9PiB7XG4gICAgT3B0aW9ucy5yZWdpc3RlcihlZGl0b3IpO1xuICAgIEltcG9ydENzcy5zZXR1cChlZGl0b3IpO1xuICAgIHJldHVybiBBcGkuZ2V0KGVkaXRvcik7XG4gIH0pO1xufTtcbiIsImltcG9ydCB0eXBlIEVkaXRvciBmcm9tICd0aW55bWNlL2NvcmUvYXBpL0VkaXRvcic7XG5pbXBvcnQgdHlwZSB7IFN0eWxlRm9ybWF0IH0gZnJvbSAndGlueW1jZS9jb3JlL2FwaS9mbXQvU3R5bGVGb3JtYXQnO1xuXG5pbXBvcnQgKiBhcyBJbXBvcnRDc3MgZnJvbSAnLi4vY29yZS9JbXBvcnRDc3MnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFwaSB7XG4gIHJlYWRvbmx5IGNvbnZlcnRTZWxlY3RvclRvRm9ybWF0OiAoc2VsZWN0b3JUZXh0OiBzdHJpbmcpID0+IFN0eWxlRm9ybWF0IHwgdW5kZWZpbmVkO1xufVxuXG5jb25zdCBnZXQgPSAoZWRpdG9yOiBFZGl0b3IpOiBBcGkgPT4ge1xuICBjb25zdCBjb252ZXJ0U2VsZWN0b3JUb0Zvcm1hdCA9IChzZWxlY3RvclRleHQ6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiBJbXBvcnRDc3MuZGVmYXVsdENvbnZlcnRTZWxlY3RvclRvRm9ybWF0KGVkaXRvciwgc2VsZWN0b3JUZXh0KTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGNvbnZlcnRTZWxlY3RvclRvRm9ybWF0XG4gIH07XG59O1xuXG5leHBvcnQge1xuICBnZXRcbn07XG4iLCJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0IHR5cGUgRWRpdG9yIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvRWRpdG9yJztcbmltcG9ydCB0eXBlIHsgU3R5bGVGb3JtYXQgfSBmcm9tICd0aW55bWNlL2NvcmUvYXBpL2ZtdC9TdHlsZUZvcm1hdCc7XG5pbXBvcnQgdHlwZSB7IEVkaXRvck9wdGlvbnMgfSBmcm9tICd0aW55bWNlL2NvcmUvYXBpL09wdGlvblR5cGVzJztcblxuaW1wb3J0IHR5cGUgeyBVc2VyRGVmaW5lZEdyb3VwIH0gZnJvbSAnLi4vY29yZS9JbXBvcnRDc3MnO1xuXG50eXBlIFNlbGVjdG9yQ29udmVydG9yID0gKCkgPT4gU3R5bGVGb3JtYXQgfCB1bmRlZmluZWQ7XG50eXBlIEZpbGVGaWx0ZXIgPSBzdHJpbmcgfCBSZWdFeHAgfCAoKHZhbHVlOiBzdHJpbmcsIGltcG9ydGVkPzogYm9vbGVhbikgPT4gYm9vbGVhbikgfCB1bmRlZmluZWQ7XG50eXBlIFNlbGVjdG9yRmlsdGVyID0gc3RyaW5nIHwgUmVnRXhwIHwgKCh2YWx1ZTogc3RyaW5nKSA9PiBib29sZWFuKSB8IHVuZGVmaW5lZDtcblxuY29uc3Qgb3B0aW9uOiB7XG4gIDxLIGV4dGVuZHMga2V5b2YgRWRpdG9yT3B0aW9ucz4obmFtZTogSyk6IChlZGl0b3I6IEVkaXRvcikgPT4gRWRpdG9yT3B0aW9uc1tLXTtcbiAgPFQ+KG5hbWU6IHN0cmluZyk6IChlZGl0b3I6IEVkaXRvcikgPT4gVDtcbn0gPSAobmFtZTogc3RyaW5nKSA9PiAoZWRpdG9yOiBFZGl0b3IpID0+XG4gIGVkaXRvci5vcHRpb25zLmdldChuYW1lKTtcblxuY29uc3QgcmVnaXN0ZXIgPSAoZWRpdG9yOiBFZGl0b3IpOiB2b2lkID0+IHtcbiAgY29uc3QgcmVnaXN0ZXJPcHRpb24gPSBlZGl0b3Iub3B0aW9ucy5yZWdpc3RlcjtcblxuICBjb25zdCBmaWx0ZXJQcm9jZXNzb3IgPSAodmFsdWU6IHVua25vd24pID0+XG4gICAgVHlwZS5pc1N0cmluZyh2YWx1ZSkgfHwgVHlwZS5pc0Z1bmN0aW9uKHZhbHVlKSB8fCBUeXBlLmlzT2JqZWN0KHZhbHVlKTtcblxuICByZWdpc3Rlck9wdGlvbignaW1wb3J0Y3NzX21lcmdlX2NsYXNzZXMnLCB7XG4gICAgcHJvY2Vzc29yOiAnYm9vbGVhbicsXG4gICAgZGVmYXVsdDogdHJ1ZVxuICB9KTtcblxuICByZWdpc3Rlck9wdGlvbignaW1wb3J0Y3NzX2V4Y2x1c2l2ZScsIHtcbiAgICBwcm9jZXNzb3I6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0OiB0cnVlXG4gIH0pO1xuXG4gIHJlZ2lzdGVyT3B0aW9uKCdpbXBvcnRjc3Nfc2VsZWN0b3JfY29udmVydGVyJywge1xuICAgIHByb2Nlc3NvcjogJ2Z1bmN0aW9uJ1xuICB9KTtcblxuICByZWdpc3Rlck9wdGlvbignaW1wb3J0Y3NzX3NlbGVjdG9yX2ZpbHRlcicsIHtcbiAgICBwcm9jZXNzb3I6IGZpbHRlclByb2Nlc3NvclxuICB9KTtcblxuICByZWdpc3Rlck9wdGlvbignaW1wb3J0Y3NzX2ZpbGVfZmlsdGVyJywge1xuICAgIHByb2Nlc3NvcjogZmlsdGVyUHJvY2Vzc29yXG4gIH0pO1xuXG4gIHJlZ2lzdGVyT3B0aW9uKCdpbXBvcnRjc3NfZ3JvdXBzJywge1xuICAgIHByb2Nlc3NvcjogJ29iamVjdFtdJ1xuICB9KTtcblxuICByZWdpc3Rlck9wdGlvbignaW1wb3J0Y3NzX2FwcGVuZCcsIHtcbiAgICBwcm9jZXNzb3I6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0OiBmYWxzZVxuICB9KTtcbn07XG5cbmNvbnN0IHNob3VsZE1lcmdlQ2xhc3NlcyA9IG9wdGlvbjxib29sZWFuPignaW1wb3J0Y3NzX21lcmdlX2NsYXNzZXMnKTtcbmNvbnN0IHNob3VsZEltcG9ydEV4Y2x1c2l2ZSA9IG9wdGlvbjxib29sZWFuPignaW1wb3J0Y3NzX2V4Y2x1c2l2ZScpO1xuY29uc3QgZ2V0U2VsZWN0b3JDb252ZXJ0ZXIgPSBvcHRpb248U2VsZWN0b3JDb252ZXJ0b3IgfCB1bmRlZmluZWQ+KCdpbXBvcnRjc3Nfc2VsZWN0b3JfY29udmVydGVyJyk7XG5jb25zdCBnZXRTZWxlY3RvckZpbHRlciA9IG9wdGlvbjxTZWxlY3RvckZpbHRlciB8IHVuZGVmaW5lZD4oJ2ltcG9ydGNzc19zZWxlY3Rvcl9maWx0ZXInKTtcbmNvbnN0IGdldENzc0dyb3VwcyA9IG9wdGlvbjxVc2VyRGVmaW5lZEdyb3VwW10gfCB1bmRlZmluZWQ+KCdpbXBvcnRjc3NfZ3JvdXBzJyk7XG5jb25zdCBzaG91bGRBcHBlbmQgPSBvcHRpb248Ym9vbGVhbj4oJ2ltcG9ydGNzc19hcHBlbmQnKTtcbmNvbnN0IGdldEZpbGVGaWx0ZXIgPSBvcHRpb248RmlsZUZpbHRlciB8IHVuZGVmaW5lZD4oJ2ltcG9ydGNzc19maWxlX2ZpbHRlcicpO1xuY29uc3QgZ2V0U2tpbiA9IG9wdGlvbignc2tpbicpO1xuY29uc3QgZ2V0U2tpblVybCA9IG9wdGlvbignc2tpbl91cmwnKTtcblxuZXhwb3J0IHtcbiAgcmVnaXN0ZXIsXG4gIHNob3VsZE1lcmdlQ2xhc3NlcyxcbiAgc2hvdWxkSW1wb3J0RXhjbHVzaXZlLFxuICBnZXRTZWxlY3RvckNvbnZlcnRlcixcbiAgZ2V0U2VsZWN0b3JGaWx0ZXIsXG4gIGdldENzc0dyb3VwcyxcbiAgc2hvdWxkQXBwZW5kLFxuICBnZXRGaWxlRmlsdGVyLFxuICBnZXRTa2luLFxuICBnZXRTa2luVXJsXG59O1xuIiwiaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmltcG9ydCBET01VdGlscyBmcm9tICd0aW55bWNlL2NvcmUvYXBpL2RvbS9ET01VdGlscyc7XG5pbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuaW1wb3J0IEVkaXRvck1hbmFnZXIgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3JNYW5hZ2VyJztcbmltcG9ydCBFbnYgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FbnYnO1xuaW1wb3J0IHR5cGUgeyBTdHlsZUZvcm1hdCB9IGZyb20gJ3RpbnltY2UvY29yZS9hcGkvZm10L1N0eWxlRm9ybWF0JztcbmltcG9ydCB0eXBlIHsgUGx1Z2luIH0gZnJvbSAndGlueW1jZS9jb3JlL2FwaS9QbHVnaW5NYW5hZ2VyJztcbmltcG9ydCBUb29scyBmcm9tICd0aW55bWNlL2NvcmUvYXBpL3V0aWwvVG9vbHMnO1xuXG5pbXBvcnQgKiBhcyBPcHRpb25zIGZyb20gJy4uL2FwaS9PcHRpb25zJztcblxuaW1wb3J0IHsgZ2VuZXJhdGUsIHR5cGUgU2VsZWN0b3JGb3JtYXRJdGVtIH0gZnJvbSAnLi9TZWxlY3Rvck1vZGVsJztcblxudHlwZSBGaWx0ZXIgPSAodmFsdWU6IHN0cmluZywgaW1wb3J0ZWQ/OiBib29sZWFuKSA9PiBib29sZWFuO1xudHlwZSBTZWxlY3RvckNvbnZlcnRvciA9IChzZWxlY3Rvcjogc3RyaW5nLCBncm91cDogR3JvdXAgfCBudWxsKSA9PiBTdHlsZUZvcm1hdCB8IHVuZGVmaW5lZDtcblxuZXhwb3J0IGludGVyZmFjZSBVc2VyRGVmaW5lZEdyb3VwIHtcbiAgcmVhZG9ubHkgdGl0bGU6IHN0cmluZztcbiAgcmVhZG9ubHkgZmlsdGVyPzogRmlsdGVyO1xuICByZWFkb25seSBzZWxlY3Rvcl9jb252ZXJ0ZXI/OiBTZWxlY3RvckNvbnZlcnRvcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHcm91cCBleHRlbmRzIFVzZXJEZWZpbmVkR3JvdXAge1xuICByZWFkb25seSBvcmlnaW5hbDogVXNlckRlZmluZWRHcm91cDtcbiAgcmVhZG9ubHkgc2VsZWN0b3JzOiBSZWNvcmQ8c3RyaW5nLCBib29sZWFuPjtcbiAgcmVhZG9ubHkgZmlsdGVyOiBGaWx0ZXIgfCB1bmRlZmluZWQ7XG59XG5cbmNvbnN0IGludGVybmFsRWRpdG9yU3R5bGUgPSAvXlxcLig/OmVwaG94fHRpbnktcGFnZWVtYmVkfG1jZSkoPzpbLi1dK1xcdyspKyQvO1xuXG5jb25zdCByZW1vdmVDYWNoZVN1ZmZpeCA9ICh1cmw6IHN0cmluZyB8IG51bGwpOiBzdHJpbmcgfCBudWxsID0+IHtcbiAgY29uc3QgY2FjaGVTdWZmaXggPSBFbnYuY2FjaGVTdWZmaXg7XG5cbiAgaWYgKFR5cGUuaXNTdHJpbmcodXJsKSkge1xuICAgIHVybCA9IHVybC5yZXBsYWNlKCc/JyArIGNhY2hlU3VmZml4LCAnJykucmVwbGFjZSgnJicgKyBjYWNoZVN1ZmZpeCwgJycpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07XG5cbmNvbnN0IGlzU2tpbkNvbnRlbnRDc3MgPSAoZWRpdG9yOiBFZGl0b3IsIGhyZWY6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuICBjb25zdCBza2luID0gT3B0aW9ucy5nZXRTa2luKGVkaXRvcik7XG5cbiAgaWYgKHNraW4pIHtcbiAgICBjb25zdCBza2luVXJsQmFzZSA9IE9wdGlvbnMuZ2V0U2tpblVybChlZGl0b3IpO1xuICAgIGNvbnN0IHNraW5VcmwgPSBza2luVXJsQmFzZSA/IGVkaXRvci5kb2N1bWVudEJhc2VVUkkudG9BYnNvbHV0ZShza2luVXJsQmFzZSkgOiBFZGl0b3JNYW5hZ2VyLmJhc2VVUkwgKyAnL3NraW5zL3VpLycgKyBza2luO1xuICAgIGNvbnN0IGNvbnRlbnRTa2luVXJsUGFydCA9IEVkaXRvck1hbmFnZXIuYmFzZVVSTCArICcvc2tpbnMvY29udGVudC8nO1xuICAgIGNvbnN0IHN1ZmZpeCA9IGVkaXRvci5lZGl0b3JNYW5hZ2VyLnN1ZmZpeDtcbiAgICByZXR1cm4gaHJlZiA9PT0gc2tpblVybCArICcvY29udGVudCcgKyAoZWRpdG9yLmlubGluZSA/ICcuaW5saW5lJyA6ICcnKSArIGAke3N1ZmZpeH0uY3NzYCB8fCBocmVmLmluZGV4T2YoY29udGVudFNraW5VcmxQYXJ0KSAhPT0gLTE7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCBjb21waWxlRmlsdGVyID0gKGZpbHRlcjogc3RyaW5nIHwgUmVnRXhwIHwgRmlsdGVyIHwgdW5kZWZpbmVkKTogRmlsdGVyIHwgdW5kZWZpbmVkID0+IHtcbiAgaWYgKFR5cGUuaXNTdHJpbmcoZmlsdGVyKSkge1xuICAgIHJldHVybiAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgcmV0dXJuIHZhbHVlLmluZGV4T2YoZmlsdGVyKSAhPT0gLTE7XG4gICAgfTtcbiAgfSBlbHNlIGlmIChmaWx0ZXIgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICByZXR1cm4gKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgIHJldHVybiBmaWx0ZXIudGVzdCh2YWx1ZSk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmaWx0ZXI7XG59O1xuXG5jb25zdCBpc0Nzc0ltcG9ydFJ1bGUgPSAocnVsZTogQ1NTUnVsZSk6IHJ1bGUgaXMgQ1NTSW1wb3J0UnVsZSA9PiAocnVsZSBhcyBhbnkpLnN0eWxlU2hlZXQ7XG5jb25zdCBpc0Nzc1BhZ2VSdWxlID0gKHJ1bGU6IENTU1J1bGUpOiBydWxlIGlzIENTU1BhZ2VSdWxlID0+IChydWxlIGFzIGFueSkuc2VsZWN0b3JUZXh0O1xuXG5jb25zdCBnZXRTZWxlY3RvcnMgPSAoZWRpdG9yOiBFZGl0b3IsIGRvYzogRG9jdW1lbnQsIGZpbGVGaWx0ZXI6IEZpbHRlciB8IHVuZGVmaW5lZCk6IHN0cmluZ1tdID0+IHtcbiAgY29uc3Qgc2VsZWN0b3JzOiBzdHJpbmdbXSA9IFtdO1xuICBjb25zdCBjb250ZW50Q1NTVXJsczogUmVjb3JkPHN0cmluZywgYm9vbGVhbj4gPSB7fTtcblxuICBjb25zdCBhcHBlbmQgPSAoc3R5bGVTaGVldDogQ1NTU3R5bGVTaGVldCwgaW1wb3J0ZWQ/OiBib29sZWFuKSA9PiB7XG4gICAgbGV0IGhyZWYgPSBzdHlsZVNoZWV0LmhyZWY7XG4gICAgbGV0IHJ1bGVzOiBDU1NSdWxlTGlzdCB8IHVuZGVmaW5lZDtcblxuICAgIGhyZWYgPSByZW1vdmVDYWNoZVN1ZmZpeChocmVmKTtcblxuICAgIGlmICghaHJlZiB8fCBmaWxlRmlsdGVyICYmICFmaWxlRmlsdGVyKGhyZWYsIGltcG9ydGVkKSB8fCBpc1NraW5Db250ZW50Q3NzKGVkaXRvciwgaHJlZikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBUT0RPOiBJcyB0aGlzIHN0aWxsIG5lZWQgYXMgVHlwZVNjcmlwdC9NRE4gc2F5cyBpbXBvcnRzIGRvZXNuJ3QgZXhpc3Q/XG4gICAgVG9vbHMuZWFjaCgoc3R5bGVTaGVldCBhcyBhbnkpLmltcG9ydHMsIChzdHlsZVNoZWV0OiBDU1NTdHlsZVNoZWV0KSA9PiB7XG4gICAgICBhcHBlbmQoc3R5bGVTaGVldCwgdHJ1ZSk7XG4gICAgfSk7XG5cbiAgICB0cnkge1xuICAgICAgcnVsZXMgPSBzdHlsZVNoZWV0LmNzc1J1bGVzIHx8IHN0eWxlU2hlZXQucnVsZXM7XG4gICAgfSBjYXRjaCB7XG4gICAgICAvLyBGaXJlZm94IGZhaWxzIG9uIHJ1bGVzIHRvIHJlbW90ZSBkb21haW4gZm9yIGV4YW1wbGU6XG4gICAgICAvLyBAaW1wb3J0IHVybCgvL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UGF0aHdheStHb3RoaWMrT25lKTtcbiAgICB9XG5cbiAgICBUb29scy5lYWNoKHJ1bGVzLCAoY3NzUnVsZSkgPT4ge1xuICAgICAgaWYgKGlzQ3NzSW1wb3J0UnVsZShjc3NSdWxlKSAmJiBjc3NSdWxlLnN0eWxlU2hlZXQpIHtcbiAgICAgICAgYXBwZW5kKGNzc1J1bGUuc3R5bGVTaGVldCwgdHJ1ZSk7XG4gICAgICB9IGVsc2UgaWYgKGlzQ3NzUGFnZVJ1bGUoY3NzUnVsZSkpIHtcbiAgICAgICAgVG9vbHMuZWFjaChjc3NSdWxlLnNlbGVjdG9yVGV4dC5zcGxpdCgnLCcpLCAoc2VsZWN0b3IpID0+IHtcbiAgICAgICAgICBzZWxlY3RvcnMucHVzaChUb29scy50cmltKHNlbGVjdG9yKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIFRvb2xzLmVhY2goZWRpdG9yLmNvbnRlbnRDU1MsICh1cmwpID0+IHtcbiAgICBjb250ZW50Q1NTVXJsc1t1cmxdID0gdHJ1ZTtcbiAgfSk7XG5cbiAgaWYgKCFmaWxlRmlsdGVyKSB7XG4gICAgZmlsZUZpbHRlciA9IChocmVmOiBzdHJpbmcsIGltcG9ydGVkPzogYm9vbGVhbikgPT4ge1xuICAgICAgcmV0dXJuIGltcG9ydGVkIHx8IGNvbnRlbnRDU1NVcmxzW2hyZWZdO1xuICAgIH07XG4gIH1cblxuICB0cnkge1xuICAgIFRvb2xzLmVhY2goZG9jLnN0eWxlU2hlZXRzLCAoc3R5bGVTaGVldCkgPT4ge1xuICAgICAgYXBwZW5kKHN0eWxlU2hlZXQpO1xuICAgIH0pO1xuICB9IGNhdGNoIHtcbiAgICAvLyBJZ25vcmVcbiAgfVxuXG4gIHJldHVybiBzZWxlY3RvcnM7XG59O1xuXG5jb25zdCBkZWZhdWx0Q29udmVydFNlbGVjdG9yVG9Gb3JtYXQgPSAoZWRpdG9yOiBFZGl0b3IsIHNlbGVjdG9yVGV4dDogc3RyaW5nKTogU3R5bGVGb3JtYXQgfCB1bmRlZmluZWQgPT4ge1xuICBsZXQgZm9ybWF0OiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge307XG5cbiAgLy8gUGFyc2Ugc2ltcGxlIGVsZW1lbnQuY2xhc3MxLCAuY2xhc3MxXG4gIGNvbnN0IHNlbGVjdG9yID0gL14oPzooW2EtejAtOVxcLV9dKykpPyhcXC5bYS16MC05X1xcLVxcLl0rKSQvaS5leGVjKHNlbGVjdG9yVGV4dCk7XG4gIGlmICghc2VsZWN0b3IpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBlbGVtZW50TmFtZSA9IHNlbGVjdG9yWzFdO1xuICBjb25zdCBjbGFzc2VzID0gc2VsZWN0b3JbMl0uc3Vic3RyKDEpLnNwbGl0KCcuJykuam9pbignICcpO1xuICBjb25zdCBpbmxpbmVTZWxlY3RvckVsZW1lbnRzID0gVG9vbHMubWFrZU1hcCgnYSxpbWcnKTtcblxuICAvLyBlbGVtZW50LmNsYXNzIC0gUHJvZHVjZSBibG9jayBmb3JtYXRzXG4gIGlmIChzZWxlY3RvclsxXSkge1xuICAgIGZvcm1hdCA9IHtcbiAgICAgIHRpdGxlOiBzZWxlY3RvclRleHRcbiAgICB9O1xuXG4gICAgaWYgKGVkaXRvci5zY2hlbWEuZ2V0VGV4dEJsb2NrRWxlbWVudHMoKVtlbGVtZW50TmFtZV0pIHtcbiAgICAgIC8vIFRleHQgYmxvY2sgZm9ybWF0IGV4OiBoMS5jbGFzczFcbiAgICAgIGZvcm1hdC5ibG9jayA9IGVsZW1lbnROYW1lO1xuICAgIH0gZWxzZSBpZiAoZWRpdG9yLnNjaGVtYS5nZXRCbG9ja0VsZW1lbnRzKClbZWxlbWVudE5hbWVdIHx8IGlubGluZVNlbGVjdG9yRWxlbWVudHNbZWxlbWVudE5hbWUudG9Mb3dlckNhc2UoKV0pIHtcbiAgICAgIC8vIEJsb2NrIGVsZW1lbnRzIHN1Y2ggYXMgdGFibGUuY2xhc3MgYW5kIHNwZWNpYWwgaW5saW5lIGVsZW1lbnRzIHN1Y2ggYXMgYS5jbGFzcyBvciBpbWcuY2xhc3NcbiAgICAgIGZvcm1hdC5zZWxlY3RvciA9IGVsZW1lbnROYW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJbmxpbmUgZm9ybWF0IHN0cm9uZy5jbGFzczFcbiAgICAgIGZvcm1hdC5pbmxpbmUgPSBlbGVtZW50TmFtZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoc2VsZWN0b3JbMl0pIHtcbiAgICAvLyAuY2xhc3MgLSBQcm9kdWNlIGlubGluZSBzcGFuIHdpdGggY2xhc3Nlc1xuICAgIGZvcm1hdCA9IHtcbiAgICAgIGlubGluZTogJ3NwYW4nLFxuICAgICAgdGl0bGU6IHNlbGVjdG9yVGV4dC5zdWJzdHIoMSksXG4gICAgICBjbGFzc2VzXG4gICAgfTtcbiAgfVxuXG4gIC8vIEFwcGVuZCB0byBvciBvdmVycmlkZSBjbGFzcyBhdHRyaWJ1dGVcbiAgaWYgKE9wdGlvbnMuc2hvdWxkTWVyZ2VDbGFzc2VzKGVkaXRvcikpIHtcbiAgICBmb3JtYXQuY2xhc3NlcyA9IGNsYXNzZXM7XG4gIH0gZWxzZSB7XG4gICAgZm9ybWF0LmF0dHJpYnV0ZXMgPSB7IGNsYXNzOiBjbGFzc2VzIH07XG4gIH1cblxuICByZXR1cm4gZm9ybWF0IGFzIFN0eWxlRm9ybWF0O1xufTtcblxuY29uc3QgZ2V0R3JvdXBzQnlTZWxlY3RvciA9IChncm91cHM6IEdyb3VwW10sIHNlbGVjdG9yOiBzdHJpbmcpOiBHcm91cFtdID0+IHtcbiAgcmV0dXJuIFRvb2xzLmdyZXAoZ3JvdXBzLCAoZ3JvdXApID0+IHtcbiAgICByZXR1cm4gIWdyb3VwLmZpbHRlciB8fCBncm91cC5maWx0ZXIoc2VsZWN0b3IpO1xuICB9KTtcbn07XG5cbmNvbnN0IGNvbXBpbGVVc2VyRGVmaW5lZEdyb3VwcyA9IChncm91cHM6IFVzZXJEZWZpbmVkR3JvdXBbXSB8IHVuZGVmaW5lZCk6IEdyb3VwW10gPT4ge1xuICByZXR1cm4gVG9vbHMubWFwKGdyb3VwcywgKGdyb3VwKSA9PiB7XG4gICAgcmV0dXJuIFRvb2xzLmV4dGVuZCh7fSwgZ3JvdXAsIHtcbiAgICAgIG9yaWdpbmFsOiBncm91cCxcbiAgICAgIHNlbGVjdG9yczoge30sXG4gICAgICBmaWx0ZXI6IGNvbXBpbGVGaWx0ZXIoZ3JvdXAuZmlsdGVyKVxuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IGlzRXhjbHVzaXZlTW9kZSA9IChlZGl0b3I6IEVkaXRvciwgZ3JvdXA6IEdyb3VwIHwgbnVsbCk6IGdyb3VwIGlzIG51bGwgPT4ge1xuICAvLyBFeGNsdXNpdmUgbW9kZSBjYW4gb25seSBiZSBkaXNhYmxlZCB3aGVuIHRoZXJlIGFyZSBncm91cHMgYWxsb3dpbmcgdGhlIHNhbWUgc3R5bGUgdG8gYmUgcHJlc2VudCBpbiBtdWx0aXBsZSBncm91cHNcbiAgcmV0dXJuIGdyb3VwID09PSBudWxsIHx8IE9wdGlvbnMuc2hvdWxkSW1wb3J0RXhjbHVzaXZlKGVkaXRvcik7XG59O1xuXG5jb25zdCBpc1VuaXF1ZVNlbGVjdG9yID0gKGVkaXRvcjogRWRpdG9yLCBzZWxlY3Rvcjogc3RyaW5nLCBncm91cDogR3JvdXAgfCBudWxsLCBnbG9iYWxseVVuaXF1ZVNlbGVjdG9yczogUmVjb3JkPHN0cmluZywgYm9vbGVhbj4pOiBib29sZWFuID0+IHtcbiAgcmV0dXJuICEoaXNFeGNsdXNpdmVNb2RlKGVkaXRvciwgZ3JvdXApID8gc2VsZWN0b3IgaW4gZ2xvYmFsbHlVbmlxdWVTZWxlY3RvcnMgOiBzZWxlY3RvciBpbiBncm91cC5zZWxlY3RvcnMpO1xufTtcblxuY29uc3QgbWFya1VuaXF1ZVNlbGVjdG9yID0gKGVkaXRvcjogRWRpdG9yLCBzZWxlY3Rvcjogc3RyaW5nLCBncm91cDogR3JvdXAgfCBudWxsLCBnbG9iYWxseVVuaXF1ZVNlbGVjdG9yczogUmVjb3JkPHN0cmluZywgYm9vbGVhbj4pOiB2b2lkID0+IHtcbiAgaWYgKGlzRXhjbHVzaXZlTW9kZShlZGl0b3IsIGdyb3VwKSkge1xuICAgIGdsb2JhbGx5VW5pcXVlU2VsZWN0b3JzW3NlbGVjdG9yXSA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgZ3JvdXAuc2VsZWN0b3JzW3NlbGVjdG9yXSA9IHRydWU7XG4gIH1cbn07XG5cbmNvbnN0IGNvbnZlcnRTZWxlY3RvclRvRm9ybWF0ID0gKGVkaXRvcjogRWRpdG9yLCBwbHVnaW46IFBsdWdpbiwgc2VsZWN0b3I6IHN0cmluZywgZ3JvdXA6IEdyb3VwIHwgbnVsbCk6IFN0eWxlRm9ybWF0IHwgdW5kZWZpbmVkID0+IHtcbiAgbGV0IHNlbGVjdG9yQ29udmVydGVyOiBTZWxlY3RvckNvbnZlcnRvcjtcblxuICBjb25zdCBjb252ZXJ0ZXIgPSBPcHRpb25zLmdldFNlbGVjdG9yQ29udmVydGVyKGVkaXRvcik7XG4gIGlmIChncm91cCAmJiBncm91cC5zZWxlY3Rvcl9jb252ZXJ0ZXIpIHtcbiAgICBzZWxlY3RvckNvbnZlcnRlciA9IGdyb3VwLnNlbGVjdG9yX2NvbnZlcnRlcjtcbiAgfSBlbHNlIGlmIChjb252ZXJ0ZXIpIHtcbiAgICBzZWxlY3RvckNvbnZlcnRlciA9IGNvbnZlcnRlcjtcbiAgfSBlbHNlIHtcbiAgICBzZWxlY3RvckNvbnZlcnRlciA9ICgpID0+IHtcbiAgICAgIHJldHVybiBkZWZhdWx0Q29udmVydFNlbGVjdG9yVG9Gb3JtYXQoZWRpdG9yLCBzZWxlY3Rvcik7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBzZWxlY3RvckNvbnZlcnRlci5jYWxsKHBsdWdpbiwgc2VsZWN0b3IsIGdyb3VwKTtcbn07XG5cbmNvbnN0IHNldHVwID0gKGVkaXRvcjogRWRpdG9yKTogdm9pZCA9PiB7XG4gIGVkaXRvci5vbignaW5pdCcsICgpID0+IHtcbiAgICBjb25zdCBtb2RlbCA9IGdlbmVyYXRlKCk7XG5cbiAgICBjb25zdCBnbG9iYWxseVVuaXF1ZVNlbGVjdG9ycyA9IHt9O1xuICAgIGNvbnN0IHNlbGVjdG9yRmlsdGVyID0gY29tcGlsZUZpbHRlcihPcHRpb25zLmdldFNlbGVjdG9yRmlsdGVyKGVkaXRvcikpO1xuICAgIGNvbnN0IGdyb3VwcyA9IGNvbXBpbGVVc2VyRGVmaW5lZEdyb3VwcyhPcHRpb25zLmdldENzc0dyb3VwcyhlZGl0b3IpKTtcblxuICAgIGNvbnN0IHByb2Nlc3NTZWxlY3RvciA9IChzZWxlY3Rvcjogc3RyaW5nLCBncm91cDogR3JvdXAgfCBudWxsKTogU2VsZWN0b3JGb3JtYXRJdGVtIHwgbnVsbCA9PiB7XG4gICAgICBpZiAoaXNVbmlxdWVTZWxlY3RvcihlZGl0b3IsIHNlbGVjdG9yLCBncm91cCwgZ2xvYmFsbHlVbmlxdWVTZWxlY3RvcnMpKSB7XG4gICAgICAgIG1hcmtVbmlxdWVTZWxlY3RvcihlZGl0b3IsIHNlbGVjdG9yLCBncm91cCwgZ2xvYmFsbHlVbmlxdWVTZWxlY3RvcnMpO1xuXG4gICAgICAgIGNvbnN0IGZvcm1hdCA9IGNvbnZlcnRTZWxlY3RvclRvRm9ybWF0KGVkaXRvciwgZWRpdG9yLnBsdWdpbnMuaW1wb3J0Y3NzLCBzZWxlY3RvciwgZ3JvdXApO1xuICAgICAgICBpZiAoZm9ybWF0KSB7XG4gICAgICAgICAgY29uc3QgZm9ybWF0TmFtZSA9IGZvcm1hdC5uYW1lIHx8IERPTVV0aWxzLkRPTS51bmlxdWVJZCgpO1xuICAgICAgICAgIGVkaXRvci5mb3JtYXR0ZXIucmVnaXN0ZXIoZm9ybWF0TmFtZSwgZm9ybWF0KTtcblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0aXRsZTogZm9ybWF0LnRpdGxlLFxuICAgICAgICAgICAgZm9ybWF0OiBmb3JtYXROYW1lXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuXG4gICAgVG9vbHMuZWFjaChnZXRTZWxlY3RvcnMoZWRpdG9yLCBlZGl0b3IuZ2V0RG9jKCksIGNvbXBpbGVGaWx0ZXIoT3B0aW9ucy5nZXRGaWxlRmlsdGVyKGVkaXRvcikpKSwgKHNlbGVjdG9yKSA9PiB7XG4gICAgICBpZiAoIWludGVybmFsRWRpdG9yU3R5bGUudGVzdChzZWxlY3RvcikpIHtcbiAgICAgICAgaWYgKCFzZWxlY3RvckZpbHRlciB8fCBzZWxlY3RvckZpbHRlcihzZWxlY3RvcikpIHtcbiAgICAgICAgICBjb25zdCBzZWxlY3Rvckdyb3VwcyA9IGdldEdyb3Vwc0J5U2VsZWN0b3IoZ3JvdXBzLCBzZWxlY3Rvcik7XG5cbiAgICAgICAgICBpZiAoc2VsZWN0b3JHcm91cHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgVG9vbHMuZWFjaChzZWxlY3Rvckdyb3VwcywgKGdyb3VwKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IG1lbnVJdGVtID0gcHJvY2Vzc1NlbGVjdG9yKHNlbGVjdG9yLCBncm91cCk7XG4gICAgICAgICAgICAgIGlmIChtZW51SXRlbSkge1xuICAgICAgICAgICAgICAgIG1vZGVsLmFkZEl0ZW1Ub0dyb3VwKGdyb3VwLnRpdGxlLCBtZW51SXRlbSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBtZW51SXRlbSA9IHByb2Nlc3NTZWxlY3RvcihzZWxlY3RvciwgbnVsbCk7XG4gICAgICAgICAgICBpZiAobWVudUl0ZW0pIHtcbiAgICAgICAgICAgICAgbW9kZWwuYWRkSXRlbShtZW51SXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBpdGVtcyA9IG1vZGVsLnRvRm9ybWF0cygpO1xuICAgIGVkaXRvci5kaXNwYXRjaCgnYWRkU3R5bGVNb2RpZmljYXRpb25zJywge1xuICAgICAgaXRlbXMsXG4gICAgICByZXBsYWNlOiAhT3B0aW9ucy5zaG91bGRBcHBlbmQoZWRpdG9yKVxuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7XG4gIGRlZmF1bHRDb252ZXJ0U2VsZWN0b3JUb0Zvcm1hdCxcbiAgc2V0dXBcbn07XG4iLCJpbXBvcnQgeyBBcnIgfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlbGVjdG9yRm9ybWF0SXRlbSB7XG4gIHJlYWRvbmx5IHRpdGxlOiBzdHJpbmc7XG4gIHJlYWRvbmx5IGZvcm1hdDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlbGVjdG9yTWVudUl0ZW0ge1xuICByZWFkb25seSB0aXRsZTogc3RyaW5nO1xuICByZWFkb25seSBpdGVtczogU2VsZWN0b3JGb3JtYXRJdGVtW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VsZWN0b3JNb2RlbCB7XG4gIHJlYWRvbmx5IGFkZEl0ZW1Ub0dyb3VwOiAoZ3JvdXBUaXRsZTogc3RyaW5nLCBpdGVtSW5mbzogU2VsZWN0b3JGb3JtYXRJdGVtKSA9PiB2b2lkO1xuICByZWFkb25seSBhZGRJdGVtOiAoaXRlbUluZm86IFNlbGVjdG9yRm9ybWF0SXRlbSkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgdG9Gb3JtYXRzOiAoKSA9PiBBcnJheTxTZWxlY3Rvck1lbnVJdGVtIHwgU2VsZWN0b3JGb3JtYXRJdGVtPjtcbn1cblxuY29uc3QgZ2VuZXJhdGUgPSAoKTogU2VsZWN0b3JNb2RlbCA9PiB7XG4gIGNvbnN0IHVuZ3JvdXBlZE9yZGVyOiBTZWxlY3RvckZvcm1hdEl0ZW1bXSA9IFsgXTtcbiAgY29uc3QgZ3JvdXBPcmRlcjogc3RyaW5nW10gPSBbIF07XG5cbiAgY29uc3QgZ3JvdXBzOiBSZWNvcmQ8c3RyaW5nLCBTZWxlY3RvckZvcm1hdEl0ZW1bXT4gPSB7IH07XG5cbiAgY29uc3QgYWRkSXRlbVRvR3JvdXAgPSAoZ3JvdXBUaXRsZTogc3RyaW5nLCBpdGVtSW5mbzogU2VsZWN0b3JGb3JtYXRJdGVtKSA9PiB7XG4gICAgaWYgKGdyb3Vwc1tncm91cFRpdGxlXSkge1xuICAgICAgZ3JvdXBzW2dyb3VwVGl0bGVdLnB1c2goaXRlbUluZm8pO1xuICAgIH0gZWxzZSB7XG4gICAgICBncm91cE9yZGVyLnB1c2goZ3JvdXBUaXRsZSk7XG4gICAgICBncm91cHNbZ3JvdXBUaXRsZV0gPSBbIGl0ZW1JbmZvIF07XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGFkZEl0ZW0gPSAoaXRlbUluZm86IFNlbGVjdG9yRm9ybWF0SXRlbSkgPT4ge1xuICAgIHVuZ3JvdXBlZE9yZGVyLnB1c2goaXRlbUluZm8pO1xuICB9O1xuXG4gIGNvbnN0IHRvRm9ybWF0cyA9ICgpOiBBcnJheTxTZWxlY3Rvck1lbnVJdGVtIHwgU2VsZWN0b3JGb3JtYXRJdGVtPiA9PiB7XG4gICAgY29uc3QgZ3JvdXBJdGVtcyA9IEFyci5iaW5kKGdyb3VwT3JkZXIsIChnKTogQXJyYXk8U2VsZWN0b3JNZW51SXRlbSB8IFNlbGVjdG9yRm9ybWF0SXRlbT4gPT4ge1xuICAgICAgY29uc3QgaXRlbXMgPSBncm91cHNbZ107XG4gICAgICByZXR1cm4gaXRlbXMubGVuZ3RoID09PSAwID8gWyBdIDogW3tcbiAgICAgICAgdGl0bGU6IGcsXG4gICAgICAgIGl0ZW1zXG4gICAgICB9XTtcbiAgICB9KTtcblxuICAgIHJldHVybiBncm91cEl0ZW1zLmNvbmNhdCh1bmdyb3VwZWRPcmRlcik7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBhZGRJdGVtVG9Hcm91cCxcbiAgICBhZGRJdGVtLFxuICAgIHRvRm9ybWF0c1xuICB9O1xufTtcblxuZXhwb3J0IHtcbiAgZ2VuZXJhdGVcbn07XG4iLCJpbXBvcnQgKiBhcyBUeXBlIGZyb20gJy4uL2NvcmUvVHlwZSc7XG5pbXBvcnQgKiBhcyBBcnJheVV0aWwgZnJvbSAnLi4vY29yZS9BcnJheVV0aWwnO1xuXG4vKiogQSB3YXkgb2YgY29tcGFyaW5nIHR3byB2YWx1ZXMgb2YgdGhlIHNhbWUgdHlwZSBmb3IgZXF1YWxpdHkuICovXG5leHBvcnQgaW50ZXJmYWNlIEVxPEE+IHtcbiAgZXE6ICh4OiBBLCB5OiBBKSA9PiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgY29udHJhbWFwID0gPEEsIEI+IChlcWE6IEVxPEE+LCBmOiAoYjogQikgPT4gQSk6IEVxPEI+ID0+XG4gIGVxKCh4LCB5KSA9PiBlcWEuZXEoZih4KSwgZih5KSkpO1xuXG5leHBvcnQgY29uc3QgZXEgPSA8QT4gKGY6ICh4OiBBLCB5OiBBKSA9PiBib29sZWFuKTogRXE8QT4gPT5cbiAgKHsgZXE6IGYgfSk7XG5cbmV4cG9ydCBjb25zdCB0cmlwbGVFcTogRXE8YW55PiA9IGVxKCh4LCB5KSA9PiB4ID09PSB5KTtcblxuZXhwb3J0IGNvbnN0IGVxU3RyaW5nOiBFcTxzdHJpbmc+ID0gdHJpcGxlRXE7XG5cbmV4cG9ydCBjb25zdCBlcUJvb2xlYW46IEVxPGJvb2xlYW4+ID0gdHJpcGxlRXE7XG5cbmV4cG9ydCBjb25zdCBlcU51bWJlcjogRXE8bnVtYmVyPiA9IHRyaXBsZUVxO1xuXG5leHBvcnQgY29uc3QgZXFVbmRlZmluZWQ6IEVxPHVuZGVmaW5lZD4gPSB0cmlwbGVFcTtcblxuZXhwb3J0IGNvbnN0IGVxTnVsbDogRXE8bnVsbD4gPSB0cmlwbGVFcTtcblxuZXhwb3J0IGNvbnN0IGVxQXJyYXkgPSA8QT4gKGVxYTogRXE8QT4pOiBFcTxBcnJheUxpa2U8QT4+ID0+IGVxKCh4LCB5KSA9PiB7XG4gIGlmICh4Lmxlbmd0aCAhPT0geS5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgbGVuID0geC5sZW5ndGg7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoIWVxYS5lcSh4W2ldLCB5W2ldKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn0pO1xuXG4vLyBUT0RPOiBNYWtlIGFuIE9yZCB0eXBlY2xhc3NcbmNvbnN0IGVxU29ydGVkQXJyYXkgPSA8QT4oZXFhOiBFcTxBPiwgY29tcGFyZUZuPzogKGE6IEEsIGI6IEEpID0+IG51bWJlcik6IEVxPEFycmF5TGlrZTxBPj4gPT5cbiAgY29udHJhbWFwKGVxQXJyYXkoZXFhKSwgKHhzKSA9PiBBcnJheVV0aWwuc29ydCh4cywgY29tcGFyZUZuKSk7XG5cbmV4cG9ydCBjb25zdCBlcVJlY29yZCA9IDxBPiAoZXFhOiBFcTxBPik6IEVxPFJlY29yZDxzdHJpbmcsIEE+PiA9PiBlcSgoeCwgeSkgPT4ge1xuICBjb25zdCBreCA9IE9iamVjdC5rZXlzKHgpO1xuICBjb25zdCBreSA9IE9iamVjdC5rZXlzKHkpO1xuICBpZiAoIWVxU29ydGVkQXJyYXkoZXFTdHJpbmcpLmVxKGt4LCBreSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgbGVuID0ga3gubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgcSA9IGt4W2ldO1xuICAgIGlmICghZXFhLmVxKHhbcV0sIHlbcV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufSk7XG5cbmV4cG9ydCBjb25zdCBlcUFueTogRXE8YW55PiA9IGVxKCh4LCB5KSA9PiB7XG4gIGlmICh4ID09PSB5KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBjb25zdCB0eCA9IFR5cGUudHlwZU9mKHgpO1xuICBjb25zdCB0eSA9IFR5cGUudHlwZU9mKHkpO1xuICBpZiAodHggIT09IHR5KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKFR5cGUuaXNFcXVhdGFibGVUeXBlKHR4KSkge1xuICAgIHJldHVybiB4ID09PSB5O1xuXG4gIH0gZWxzZSBpZiAodHggPT09ICdhcnJheScpIHtcbiAgICByZXR1cm4gZXFBcnJheShlcUFueSkuZXEoeCwgeSk7XG5cbiAgfSBlbHNlIGlmICh0eCA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gZXFSZWNvcmQoZXFBbnkpLmVxKHgsIHkpO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufSk7XG4iLCJleHBvcnQgY29uc3QgbWFwID0gPEEsIEI+KHhzOiBBcnJheUxpa2U8QT4sIGY6IChhOiBBKSA9PiBCKTogQltdID0+IHtcbiAgY29uc3QgbGVuID0geHMubGVuZ3RoO1xuICBjb25zdCByID0gbmV3IEFycmF5KGxlbik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgcltpXSA9IGYoeCk7XG4gIH1cbiAgcmV0dXJuIHI7XG59O1xuXG4vKiogbWFwIGEgZnVuY3Rpb24gb3ZlciBhbiBhcnJheSwgdGhlbiBtYXAgYW5vdGhlciBmdW5jdGlvbiBvdmVyIGV2ZXJ5IGl0ZW0gZXhjZXB0IHRoZSBsYXN0ICovXG5leHBvcnQgY29uc3QgbWFwRGVsaW1pdCA9IDxBLCBCPiAoeHM6IEFycmF5TGlrZTxBPiwgZjogKGE6IEEpID0+IEIsIGRlbGltaXQ6IChiOiBCKSA9PiBCKTogQltdID0+IHtcbiAgY29uc3QgbGVuID0geHMubGVuZ3RoO1xuICBjb25zdCByID0gbmV3IEFycmF5KGxlbik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuIC0gMTsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIHJbaV0gPSBkZWxpbWl0KGYoeCkpO1xuICB9XG4gIGlmIChsZW4gPiAwKSB7XG4gICAgcltsZW4gLSAxXSA9IChmKHhzW2xlbiAtIDFdKSk7XG4gIH1cblxuICByZXR1cm4gcjtcbn07XG5cbmV4cG9ydCBjb25zdCBzb3J0ID0gPEE+ICh4czogQXJyYXlMaWtlPEE+LCBjb21wYXJlRm4/OiAoYTogQSwgYjogQSkgPT4gbnVtYmVyKTogQVtdID0+IHtcbiAgY29uc3QgY2xvbmU6IEFbXSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHhzKTtcbiAgcmV0dXJuIGNsb25lLnNvcnQoY29tcGFyZUZuKTtcbn07XG4iLCJleHBvcnQgY29uc3QgdHlwZU9mID0gKHg6IGFueSkgPT4ge1xuICBpZiAoeCA9PT0gbnVsbCkge1xuICAgIHJldHVybiAnbnVsbCc7XG4gIH1cbiAgaWYgKHggPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAndW5kZWZpbmVkJztcbiAgfVxuICBjb25zdCB0ID0gdHlwZW9mIHg7XG4gIGlmICh0ID09PSAnb2JqZWN0JyAmJiAoQXJyYXkucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoeCkgfHwgeC5jb25zdHJ1Y3RvciAmJiB4LmNvbnN0cnVjdG9yLm5hbWUgPT09ICdBcnJheScpKSB7XG4gICAgcmV0dXJuICdhcnJheSc7XG4gIH1cbiAgaWYgKHQgPT09ICdvYmplY3QnICYmIChTdHJpbmcucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoeCkgfHwgeC5jb25zdHJ1Y3RvciAmJiB4LmNvbnN0cnVjdG9yLm5hbWUgPT09ICdTdHJpbmcnKSkge1xuICAgIHJldHVybiAnc3RyaW5nJztcbiAgfVxuICByZXR1cm4gdDtcbn07XG5cbmNvbnN0IGlzVHlwZSA9IDxUPih0eXBlOiBzdHJpbmcpID0+ICh2YWx1ZTogYW55KTogdmFsdWUgaXMgVCA9PiB0eXBlT2YodmFsdWUpID09PSB0eXBlO1xuXG5leHBvcnQgY29uc3QgaXNTdHJpbmcgPSBpc1R5cGU8c3RyaW5nPignc3RyaW5nJyk7XG5leHBvcnQgY29uc3QgaXNPYmplY3QgPSBpc1R5cGU8T2JqZWN0Pignb2JqZWN0Jyk7XG5leHBvcnQgY29uc3QgaXNBcnJheSA9IGlzVHlwZTxBcnJheTx1bmtub3duPj4oJ2FycmF5Jyk7XG5leHBvcnQgY29uc3QgaXNOdWxsID0gaXNUeXBlPG51bGw+KCdudWxsJyk7XG5leHBvcnQgY29uc3QgaXNCb29sZWFuID0gaXNUeXBlPGJvb2xlYW4+KCdib29sZWFuJyk7XG5leHBvcnQgY29uc3QgaXNVbmRlZmluZWQgPSBpc1R5cGU8dW5kZWZpbmVkPigndW5kZWZpbmVkJyk7XG5leHBvcnQgY29uc3QgaXNGdW5jdGlvbiA9IGlzVHlwZTxGdW5jdGlvbj4oJ2Z1bmN0aW9uJyk7XG5leHBvcnQgY29uc3QgaXNOdW1iZXIgPSBpc1R5cGU8bnVtYmVyPignbnVtYmVyJyk7XG5cbmV4cG9ydCBjb25zdCBpc0VxdWF0YWJsZVR5cGUgPSAoeDogc3RyaW5nKTogYm9vbGVhbiA9PlxuICBbICd1bmRlZmluZWQnLCAnYm9vbGVhbicsICdudW1iZXInLCAnc3RyaW5nJywgJ2Z1bmN0aW9uJywgJ3htbCcsICdudWxsJyBdLmluZGV4T2YoeCkgIT09IC0xO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuICAgICAgICBpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG4gICAgICAgIH1cbiAgICB9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ2ID0gKCkgPT4gKFwiMS41LjJcIikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ1aWQgPSBcImJ1bmRsZXI9cnNwYWNrQDEuNS4yXCI7XG4iLCJpbXBvcnQgUGx1Z2luIGZyb20gJy4vUGx1Z2luJztcblxuUGx1Z2luKCk7XG5cbi8qKiAqKioqKlxuICogRE8gTk9UIEVYUE9SVCBBTllUSElOR1xuICpcbiAqIElGIFlPVSBETyBST0xMVVAgV0lMTCBMRUFWRSBBIEdMT0JBTCBPTiBUSEUgUEFHRVxuICoqKioqKiovXG4iXSwibmFtZXMiOlsiRXEiLCJGdW4iLCJPcHRpb25hbCIsIlR5cGUiLCJuYXRpdmVTbGljZSIsIkFycmF5IiwibmF0aXZlSW5kZXhPZiIsIm5hdGl2ZVB1c2giLCJyYXdJbmRleE9mIiwidHMiLCJ0IiwiaW5kZXhPZiIsInhzIiwieCIsInIiLCJjb250YWlucyIsImV4aXN0cyIsInByZWQiLCJpIiwibGVuIiwicmFuZ2UiLCJudW0iLCJmIiwiY2h1bmsiLCJhcnJheSIsInNpemUiLCJzIiwibWFwIiwiZWFjaCIsImVhY2hyIiwicGFydGl0aW9uIiwicGFzcyIsImZhaWwiLCJhcnIiLCJmaWx0ZXIiLCJncm91cEJ5Iiwid2FzVHlwZSIsImdyb3VwIiwidHlwZSIsImZvbGRyIiwiYWNjIiwiZm9sZGwiLCJmaW5kVW50aWwiLCJ1bnRpbCIsImZpbmQiLCJmaW5kSW5kZXgiLCJmaW5kTGFzdEluZGV4IiwiZmxhdHRlbiIsIkVycm9yIiwiYmluZCIsImZvcmFsbCIsImVxdWFsIiwiYTEiLCJhMiIsImVxIiwicmV2ZXJzZSIsImRpZmZlcmVuY2UiLCJtYXBUb09iamVjdCIsIlN0cmluZyIsInB1cmUiLCJzb3J0IiwiY29tcGFyYXRvciIsImNvcHkiLCJnZXQiLCJoZWFkIiwibGFzdCIsImZyb20iLCJmaW5kTWFwIiwidW5pcXVlIiwiaXNEdXBsaWNhdGVkIiwibm9vcCIsIm5vYXJnIiwiY29tcG9zZSIsImZhIiwiZmIiLCJhcmdzIiwiY29tcG9zZTEiLCJmYmMiLCJmYWIiLCJhIiwiY29uc3RhbnQiLCJ2YWx1ZSIsImlkZW50aXR5IiwidHJpcGxlRXF1YWxzIiwiYiIsImN1cnJ5IiwiZm4iLCJpbml0aWFsQXJncyIsInJlc3RBcmdzIiwiYWxsIiwibm90IiwiZGllIiwibXNnIiwiYXBwbHkiLCJjYWxsIiwibmV2ZXIiLCJhbHdheXMiLCJ3ZWFrZW4iLCJwaXBlIiwiYWIiLCJiYyIsImNkIiwiZGUiLCJlZiIsImZnIiwiZ2giLCJjIiwiZCIsImUiLCJnIiwidGFnIiwib25Ob25lIiwib25Tb21lIiwibWFwcGVyIiwiYmluZGVyIiwicHJlZGljYXRlIiwicmVwbGFjZW1lbnQiLCJ0aHVuayIsIm1lc3NhZ2UiLCJ3b3JrZXIiLCJnZXRQcm90b3R5cGVPZiIsIk9iamVjdCIsImhhc1Byb3RvIiwidiIsImNvbnN0cnVjdG9yIiwidHlwZU9mIiwibyIsInByb3RvIiwiaXNUeXBlIiwiaXNTaW1wbGVUeXBlIiwiaXMiLCJpc09iamVjdCIsImlzU3RyaW5nIiwiaXNQbGFpbk9iamVjdCIsImlzQXJyYXkiLCJpc051bGwiLCJpc0Jvb2xlYW4iLCJpc1VuZGVmaW5lZCIsInVuZGVmaW5lZCIsImlzTnVsbGFibGUiLCJpc05vbk51bGxhYmxlIiwiaXNGdW5jdGlvbiIsImlzTnVtYmVyIiwiaXNBcnJheU9mIiwiaXNQcm9taXNlTGlrZSIsIlBsdWdpbk1hbmFnZXIiLCJBcGkiLCJPcHRpb25zIiwiSW1wb3J0Q3NzIiwiZWRpdG9yIiwiY29udmVydFNlbGVjdG9yVG9Gb3JtYXQiLCJzZWxlY3RvclRleHQiLCJvcHRpb24iLCJuYW1lIiwicmVnaXN0ZXIiLCJyZWdpc3Rlck9wdGlvbiIsImZpbHRlclByb2Nlc3NvciIsInNob3VsZE1lcmdlQ2xhc3NlcyIsInNob3VsZEltcG9ydEV4Y2x1c2l2ZSIsImdldFNlbGVjdG9yQ29udmVydGVyIiwiZ2V0U2VsZWN0b3JGaWx0ZXIiLCJnZXRDc3NHcm91cHMiLCJzaG91bGRBcHBlbmQiLCJnZXRGaWxlRmlsdGVyIiwiZ2V0U2tpbiIsImdldFNraW5VcmwiLCJET01VdGlscyIsIkVkaXRvck1hbmFnZXIiLCJFbnYiLCJUb29scyIsImdlbmVyYXRlIiwiaW50ZXJuYWxFZGl0b3JTdHlsZSIsInJlbW92ZUNhY2hlU3VmZml4IiwidXJsIiwiY2FjaGVTdWZmaXgiLCJpc1NraW5Db250ZW50Q3NzIiwiaHJlZiIsInNraW4iLCJza2luVXJsQmFzZSIsInNraW5VcmwiLCJjb250ZW50U2tpblVybFBhcnQiLCJzdWZmaXgiLCJjb21waWxlRmlsdGVyIiwiUmVnRXhwIiwiaXNDc3NJbXBvcnRSdWxlIiwicnVsZSIsImlzQ3NzUGFnZVJ1bGUiLCJnZXRTZWxlY3RvcnMiLCJkb2MiLCJmaWxlRmlsdGVyIiwic2VsZWN0b3JzIiwiY29udGVudENTU1VybHMiLCJhcHBlbmQiLCJzdHlsZVNoZWV0IiwiaW1wb3J0ZWQiLCJydWxlcyIsImNzc1J1bGUiLCJzZWxlY3RvciIsImRlZmF1bHRDb252ZXJ0U2VsZWN0b3JUb0Zvcm1hdCIsImZvcm1hdCIsImVsZW1lbnROYW1lIiwiY2xhc3NlcyIsImlubGluZVNlbGVjdG9yRWxlbWVudHMiLCJnZXRHcm91cHNCeVNlbGVjdG9yIiwiZ3JvdXBzIiwiY29tcGlsZVVzZXJEZWZpbmVkR3JvdXBzIiwiaXNFeGNsdXNpdmVNb2RlIiwiaXNVbmlxdWVTZWxlY3RvciIsImdsb2JhbGx5VW5pcXVlU2VsZWN0b3JzIiwibWFya1VuaXF1ZVNlbGVjdG9yIiwicGx1Z2luIiwic2VsZWN0b3JDb252ZXJ0ZXIiLCJjb252ZXJ0ZXIiLCJzZXR1cCIsIm1vZGVsIiwic2VsZWN0b3JGaWx0ZXIiLCJwcm9jZXNzU2VsZWN0b3IiLCJmb3JtYXROYW1lIiwic2VsZWN0b3JHcm91cHMiLCJtZW51SXRlbSIsIml0ZW1zIiwiQXJyIiwidW5ncm91cGVkT3JkZXIiLCJncm91cE9yZGVyIiwiYWRkSXRlbVRvR3JvdXAiLCJncm91cFRpdGxlIiwiaXRlbUluZm8iLCJhZGRJdGVtIiwidG9Gb3JtYXRzIiwiZ3JvdXBJdGVtcyIsIlBsdWdpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLDZEQUFlLE1BQU0sRUFBQztBQUNmOzs7Ozs7Ozs7Ozs7OztBQ0hQOztBQUVBLDZEQUFlLE1BQU0sRUFBQztBQUNmOzs7Ozs7Ozs7Ozs7OztBQ0hQOztBQUVBLDZEQUFlLE1BQU0sRUFBQztBQUNmOzs7Ozs7Ozs7Ozs7OztBQ0hQOztBQUVBLDZEQUFlLE1BQU0sRUFBQztB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