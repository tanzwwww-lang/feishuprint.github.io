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
"./src/plugins/charmap/main/ts/Plugin.ts": 
/*!***********************************************!*\
  !*** ./src/plugins/charmap/main/ts/Plugin.ts ***!
  \***********************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var tinymce_core_api_PluginManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/PluginManager */ "./lib/globals/tinymce/core/api/PluginManager.js");
/* ESM import */var _api_Api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/Api */ "./src/plugins/charmap/main/ts/api/Api.ts");
/* ESM import */var _api_Commands__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/Commands */ "./src/plugins/charmap/main/ts/api/Commands.ts");
/* ESM import */var _api_Options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/Options */ "./src/plugins/charmap/main/ts/api/Options.ts");
/* ESM import */var _core_CharMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/CharMap */ "./src/plugins/charmap/main/ts/core/CharMap.ts");
/* ESM import */var _ui_Autocompletion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/Autocompletion */ "./src/plugins/charmap/main/ts/ui/Autocompletion.ts");
/* ESM import */var _ui_Buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/Buttons */ "./src/plugins/charmap/main/ts/ui/Buttons.ts");







/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>{
    tinymce_core_api_PluginManager__WEBPACK_IMPORTED_MODULE_0__["default"].add('charmap', (editor)=>{
        _api_Options__WEBPACK_IMPORTED_MODULE_3__.register(editor);
        const charMap = _core_CharMap__WEBPACK_IMPORTED_MODULE_4__.getCharMap(editor);
        _api_Commands__WEBPACK_IMPORTED_MODULE_2__.register(editor, charMap);
        _ui_Buttons__WEBPACK_IMPORTED_MODULE_6__.register(editor);
        _ui_Autocompletion__WEBPACK_IMPORTED_MODULE_5__.init(editor, charMap[0]);
        return _api_Api__WEBPACK_IMPORTED_MODULE_1__.get(editor);
    });
});


}),
"./src/plugins/charmap/main/ts/api/Api.ts": 
/*!************************************************!*\
  !*** ./src/plugins/charmap/main/ts/api/Api.ts ***!
  \************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  get: () => (get)
});
/* ESM import */var _core_Actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Actions */ "./src/plugins/charmap/main/ts/core/Actions.ts");
/* ESM import */var _core_CharMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/CharMap */ "./src/plugins/charmap/main/ts/core/CharMap.ts");


const get = (editor)=>{
    const getCharMap = ()=>{
        return _core_CharMap__WEBPACK_IMPORTED_MODULE_1__.getCharMap(editor);
    };
    const insertChar = (chr)=>{
        _core_Actions__WEBPACK_IMPORTED_MODULE_0__.insertChar(editor, chr);
    };
    return {
        getCharMap,
        insertChar
    };
};



}),
"./src/plugins/charmap/main/ts/api/Commands.ts": 
/*!*****************************************************!*\
  !*** ./src/plugins/charmap/main/ts/api/Commands.ts ***!
  \*****************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  register: () => (register)
});
/* ESM import */var _ui_Dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/Dialog */ "./src/plugins/charmap/main/ts/ui/Dialog.ts");

const register = (editor, charMap)=>{
    editor.addCommand('mceShowCharmap', ()=>{
        _ui_Dialog__WEBPACK_IMPORTED_MODULE_0__.open(editor, charMap);
    });
};



}),
"./src/plugins/charmap/main/ts/api/Events.ts": 
/*!***************************************************!*\
  !*** ./src/plugins/charmap/main/ts/api/Events.ts ***!
  \***************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  fireInsertCustomChar: () => (fireInsertCustomChar)
});
const fireInsertCustomChar = (editor, chr)=>{
    return editor.dispatch('insertCustomChar', {
        chr
    });
};



}),
"./src/plugins/charmap/main/ts/api/Options.ts": 
/*!****************************************************!*\
  !*** ./src/plugins/charmap/main/ts/api/Options.ts ***!
  \****************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getCharMap: () => (getCharMap),
  getCharMapAppend: () => (getCharMapAppend),
  register: () => (register)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Type.ts");

const option = (name)=>(editor)=>editor.options.get(name);
const register = (editor)=>{
    const registerOption = editor.options.register;
    const charMapProcessor = (value)=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.isFunction(value) || _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.isArray(value);
    registerOption('charmap', {
        processor: charMapProcessor
    });
    registerOption('charmap_append', {
        processor: charMapProcessor
    });
};
const getCharMap = option('charmap');
const getCharMapAppend = option('charmap_append');



}),
"./src/plugins/charmap/main/ts/core/Actions.ts": 
/*!*****************************************************!*\
  !*** ./src/plugins/charmap/main/ts/core/Actions.ts ***!
  \*****************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  insertChar: () => (insertChar)
});
/* ESM import */var _api_Events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/Events */ "./src/plugins/charmap/main/ts/api/Events.ts");

const insertChar = (editor, chr)=>{
    const evtChr = _api_Events__WEBPACK_IMPORTED_MODULE_0__.fireInsertCustomChar(editor, chr).chr;
    editor.execCommand('mceInsertContent', false, evtChr);
};



}),
"./src/plugins/charmap/main/ts/core/CharMap.ts": 
/*!*****************************************************!*\
  !*** ./src/plugins/charmap/main/ts/core/CharMap.ts ***!
  \*****************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  UserDefined: () => (UserDefined),
  getCharMap: () => (getCharMap)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Arr.ts");
/* ESM import */var tinymce_core_api_util_Tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/util/Tools */ "./lib/globals/tinymce/core/api/util/Tools.js");
/* ESM import */var _api_Options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/Options */ "./src/plugins/charmap/main/ts/api/Options.ts");



const isArray = tinymce_core_api_util_Tools__WEBPACK_IMPORTED_MODULE_0__["default"].isArray;
const UserDefined = 'User Defined';
const getDefaultCharMap = ()=>{
    return [
        // TODO: Merge categories with TBIO
        // {
        //   name: 'Unknown',
        //   characters : [
        //     [160, 'no-break space'],
        //     [173, 'soft hyphen'],
        //     [34, 'quotation mark']
        //   ]
        // },
        {
            name: 'Currency',
            characters: [
                [
                    36,
                    'dollar sign'
                ],
                [
                    162,
                    'cent sign'
                ],
                [
                    8364,
                    'euro sign'
                ],
                [
                    163,
                    'pound sign'
                ],
                [
                    165,
                    'yen sign'
                ],
                [
                    164,
                    'currency sign'
                ],
                [
                    8352,
                    'euro-currency sign'
                ],
                [
                    8353,
                    'colon sign'
                ],
                [
                    8354,
                    'cruzeiro sign'
                ],
                [
                    8355,
                    'french franc sign'
                ],
                [
                    8356,
                    'lira sign'
                ],
                [
                    8357,
                    'mill sign'
                ],
                [
                    8358,
                    'naira sign'
                ],
                [
                    8359,
                    'peseta sign'
                ],
                [
                    8360,
                    'rupee sign'
                ],
                [
                    8361,
                    'won sign'
                ],
                [
                    8362,
                    'new sheqel sign'
                ],
                [
                    8363,
                    'dong sign'
                ],
                [
                    8365,
                    'kip sign'
                ],
                [
                    8366,
                    'tugrik sign'
                ],
                [
                    8367,
                    'drachma sign'
                ],
                [
                    8368,
                    'german penny symbol'
                ],
                [
                    8369,
                    'peso sign'
                ],
                [
                    8370,
                    'guarani sign'
                ],
                [
                    8371,
                    'austral sign'
                ],
                [
                    8372,
                    'hryvnia sign'
                ],
                [
                    8373,
                    'cedi sign'
                ],
                [
                    8374,
                    'livre tournois sign'
                ],
                [
                    8375,
                    'spesmilo sign'
                ],
                [
                    8376,
                    'tenge sign'
                ],
                [
                    8377,
                    'indian rupee sign'
                ],
                [
                    8378,
                    'turkish lira sign'
                ],
                [
                    8379,
                    'nordic mark sign'
                ],
                [
                    8380,
                    'manat sign'
                ],
                [
                    8381,
                    'ruble sign'
                ],
                [
                    20870,
                    'yen character'
                ],
                [
                    20803,
                    'yuan character'
                ],
                [
                    22291,
                    'yuan character, in hong kong and taiwan'
                ],
                [
                    22278,
                    'yen/yuan character variant one'
                ]
            ]
        },
        {
            name: 'Text',
            characters: [
                [
                    169,
                    'copyright sign'
                ],
                [
                    174,
                    'registered sign'
                ],
                [
                    8482,
                    'trade mark sign'
                ],
                [
                    8240,
                    'per mille sign'
                ],
                [
                    181,
                    'micro sign'
                ],
                [
                    183,
                    'middle dot'
                ],
                [
                    8226,
                    'bullet'
                ],
                [
                    8230,
                    'three dot leader'
                ],
                [
                    8242,
                    'minutes / feet'
                ],
                [
                    8243,
                    'seconds / inches'
                ],
                [
                    167,
                    'section sign'
                ],
                [
                    182,
                    'paragraph sign'
                ],
                [
                    223,
                    'sharp s / ess-zed'
                ]
            ]
        },
        {
            name: 'Quotations',
            characters: [
                [
                    8249,
                    'single left-pointing angle quotation mark'
                ],
                [
                    8250,
                    'single right-pointing angle quotation mark'
                ],
                [
                    171,
                    'left pointing guillemet'
                ],
                [
                    187,
                    'right pointing guillemet'
                ],
                [
                    8216,
                    'left single quotation mark'
                ],
                [
                    8217,
                    'right single quotation mark'
                ],
                [
                    8220,
                    'left double quotation mark'
                ],
                [
                    8221,
                    'right double quotation mark'
                ],
                [
                    8218,
                    'single low-9 quotation mark'
                ],
                [
                    8222,
                    'double low-9 quotation mark'
                ],
                [
                    60,
                    'less-than sign'
                ],
                [
                    62,
                    'greater-than sign'
                ],
                [
                    8804,
                    'less-than or equal to'
                ],
                [
                    8805,
                    'greater-than or equal to'
                ],
                [
                    8211,
                    'en dash'
                ],
                [
                    8212,
                    'em dash'
                ],
                [
                    175,
                    'macron'
                ],
                [
                    8254,
                    'overline'
                ],
                [
                    164,
                    'currency sign'
                ],
                [
                    166,
                    'broken bar'
                ],
                [
                    168,
                    'diaeresis'
                ],
                [
                    161,
                    'inverted exclamation mark'
                ],
                [
                    191,
                    'turned question mark'
                ],
                [
                    710,
                    'circumflex accent'
                ],
                [
                    732,
                    'small tilde'
                ],
                [
                    176,
                    'degree sign'
                ],
                [
                    8722,
                    'minus sign'
                ],
                [
                    177,
                    'plus-minus sign'
                ],
                [
                    247,
                    'division sign'
                ],
                [
                    8260,
                    'fraction slash'
                ],
                [
                    215,
                    'multiplication sign'
                ],
                [
                    185,
                    'superscript one'
                ],
                [
                    178,
                    'superscript two'
                ],
                [
                    179,
                    'superscript three'
                ],
                [
                    188,
                    'fraction one quarter'
                ],
                [
                    189,
                    'fraction one half'
                ],
                [
                    190,
                    'fraction three quarters'
                ]
            ]
        },
        {
            name: 'Mathematical',
            characters: [
                [
                    402,
                    'function / florin'
                ],
                [
                    8747,
                    'integral'
                ],
                [
                    8721,
                    'n-ary sumation'
                ],
                [
                    8734,
                    'infinity'
                ],
                [
                    8730,
                    'square root'
                ],
                [
                    8764,
                    'similar to'
                ],
                [
                    8773,
                    'approximately equal to'
                ],
                [
                    8776,
                    'almost equal to'
                ],
                [
                    8800,
                    'not equal to'
                ],
                [
                    8801,
                    'identical to'
                ],
                [
                    8712,
                    'element of'
                ],
                [
                    8713,
                    'not an element of'
                ],
                [
                    8715,
                    'contains as member'
                ],
                [
                    8719,
                    'n-ary product'
                ],
                [
                    8743,
                    'logical and'
                ],
                [
                    8744,
                    'logical or'
                ],
                [
                    172,
                    'not sign'
                ],
                [
                    8745,
                    'intersection'
                ],
                [
                    8746,
                    'union'
                ],
                [
                    8706,
                    'partial differential'
                ],
                [
                    8704,
                    'for all'
                ],
                [
                    8707,
                    'there exists'
                ],
                [
                    8709,
                    'diameter'
                ],
                [
                    8711,
                    'backward difference'
                ],
                [
                    8727,
                    'asterisk operator'
                ],
                [
                    8733,
                    'proportional to'
                ],
                [
                    8736,
                    'angle'
                ]
            ]
        },
        // TODO: Merge categories with TBIO
        // {
        //   name: 'Undefined',
        //   characters: [
        //     [180, 'acute accent'],
        //     [184, 'cedilla'],
        //     [170, 'feminine ordinal indicator'],
        //     [186, 'masculine ordinal indicator'],
        //     [8224, 'dagger'],
        //     [8225, 'double dagger']
        //   ]
        // },
        {
            name: 'Extended Latin',
            characters: [
                [
                    192,
                    'A - grave'
                ],
                [
                    193,
                    'A - acute'
                ],
                [
                    194,
                    'A - circumflex'
                ],
                [
                    195,
                    'A - tilde'
                ],
                [
                    196,
                    'A - diaeresis'
                ],
                [
                    197,
                    'A - ring above'
                ],
                [
                    256,
                    'A - macron'
                ],
                [
                    198,
                    'ligature AE'
                ],
                [
                    199,
                    'C - cedilla'
                ],
                [
                    200,
                    'E - grave'
                ],
                [
                    201,
                    'E - acute'
                ],
                [
                    202,
                    'E - circumflex'
                ],
                [
                    203,
                    'E - diaeresis'
                ],
                [
                    274,
                    'E - macron'
                ],
                [
                    204,
                    'I - grave'
                ],
                [
                    205,
                    'I - acute'
                ],
                [
                    206,
                    'I - circumflex'
                ],
                [
                    207,
                    'I - diaeresis'
                ],
                [
                    298,
                    'I - macron'
                ],
                [
                    208,
                    'ETH'
                ],
                [
                    209,
                    'N - tilde'
                ],
                [
                    210,
                    'O - grave'
                ],
                [
                    211,
                    'O - acute'
                ],
                [
                    212,
                    'O - circumflex'
                ],
                [
                    213,
                    'O - tilde'
                ],
                [
                    214,
                    'O - diaeresis'
                ],
                [
                    216,
                    'O - slash'
                ],
                [
                    332,
                    'O - macron'
                ],
                [
                    338,
                    'ligature OE'
                ],
                [
                    352,
                    'S - caron'
                ],
                [
                    217,
                    'U - grave'
                ],
                [
                    218,
                    'U - acute'
                ],
                [
                    219,
                    'U - circumflex'
                ],
                [
                    220,
                    'U - diaeresis'
                ],
                [
                    362,
                    'U - macron'
                ],
                [
                    221,
                    'Y - acute'
                ],
                [
                    376,
                    'Y - diaeresis'
                ],
                [
                    562,
                    'Y - macron'
                ],
                [
                    222,
                    'THORN'
                ],
                [
                    224,
                    'a - grave'
                ],
                [
                    225,
                    'a - acute'
                ],
                [
                    226,
                    'a - circumflex'
                ],
                [
                    227,
                    'a - tilde'
                ],
                [
                    228,
                    'a - diaeresis'
                ],
                [
                    229,
                    'a - ring above'
                ],
                [
                    257,
                    'a - macron'
                ],
                [
                    230,
                    'ligature ae'
                ],
                [
                    231,
                    'c - cedilla'
                ],
                [
                    232,
                    'e - grave'
                ],
                [
                    233,
                    'e - acute'
                ],
                [
                    234,
                    'e - circumflex'
                ],
                [
                    235,
                    'e - diaeresis'
                ],
                [
                    275,
                    'e - macron'
                ],
                [
                    236,
                    'i - grave'
                ],
                [
                    237,
                    'i - acute'
                ],
                [
                    238,
                    'i - circumflex'
                ],
                [
                    239,
                    'i - diaeresis'
                ],
                [
                    299,
                    'i - macron'
                ],
                [
                    240,
                    'eth'
                ],
                [
                    241,
                    'n - tilde'
                ],
                [
                    242,
                    'o - grave'
                ],
                [
                    243,
                    'o - acute'
                ],
                [
                    244,
                    'o - circumflex'
                ],
                [
                    245,
                    'o - tilde'
                ],
                [
                    246,
                    'o - diaeresis'
                ],
                [
                    248,
                    'o slash'
                ],
                [
                    333,
                    'o macron'
                ],
                [
                    339,
                    'ligature oe'
                ],
                [
                    353,
                    's - caron'
                ],
                [
                    249,
                    'u - grave'
                ],
                [
                    250,
                    'u - acute'
                ],
                [
                    251,
                    'u - circumflex'
                ],
                [
                    252,
                    'u - diaeresis'
                ],
                [
                    363,
                    'u - macron'
                ],
                [
                    253,
                    'y - acute'
                ],
                [
                    254,
                    'thorn'
                ],
                [
                    255,
                    'y - diaeresis'
                ],
                [
                    563,
                    'y - macron'
                ],
                [
                    913,
                    'Alpha'
                ],
                [
                    914,
                    'Beta'
                ],
                [
                    915,
                    'Gamma'
                ],
                [
                    916,
                    'Delta'
                ],
                [
                    917,
                    'Epsilon'
                ],
                [
                    918,
                    'Zeta'
                ],
                [
                    919,
                    'Eta'
                ],
                [
                    920,
                    'Theta'
                ],
                [
                    921,
                    'Iota'
                ],
                [
                    922,
                    'Kappa'
                ],
                [
                    923,
                    'Lambda'
                ],
                [
                    924,
                    'Mu'
                ],
                [
                    925,
                    'Nu'
                ],
                [
                    926,
                    'Xi'
                ],
                [
                    927,
                    'Omicron'
                ],
                [
                    928,
                    'Pi'
                ],
                [
                    929,
                    'Rho'
                ],
                [
                    931,
                    'Sigma'
                ],
                [
                    932,
                    'Tau'
                ],
                [
                    933,
                    'Upsilon'
                ],
                [
                    934,
                    'Phi'
                ],
                [
                    935,
                    'Chi'
                ],
                [
                    936,
                    'Psi'
                ],
                [
                    937,
                    'Omega'
                ],
                [
                    945,
                    'alpha'
                ],
                [
                    946,
                    'beta'
                ],
                [
                    947,
                    'gamma'
                ],
                [
                    948,
                    'delta'
                ],
                [
                    949,
                    'epsilon'
                ],
                [
                    950,
                    'zeta'
                ],
                [
                    951,
                    'eta'
                ],
                [
                    952,
                    'theta'
                ],
                [
                    953,
                    'iota'
                ],
                [
                    954,
                    'kappa'
                ],
                [
                    955,
                    'lambda'
                ],
                [
                    956,
                    'mu'
                ],
                [
                    957,
                    'nu'
                ],
                [
                    958,
                    'xi'
                ],
                [
                    959,
                    'omicron'
                ],
                [
                    960,
                    'pi'
                ],
                [
                    961,
                    'rho'
                ],
                [
                    962,
                    'final sigma'
                ],
                [
                    963,
                    'sigma'
                ],
                [
                    964,
                    'tau'
                ],
                [
                    965,
                    'upsilon'
                ],
                [
                    966,
                    'phi'
                ],
                [
                    967,
                    'chi'
                ],
                [
                    968,
                    'psi'
                ],
                [
                    969,
                    'omega'
                ]
            ]
        },
        {
            name: 'Symbols',
            characters: [
                [
                    8501,
                    'alef symbol'
                ],
                [
                    982,
                    'pi symbol'
                ],
                [
                    8476,
                    'real part symbol'
                ],
                [
                    978,
                    'upsilon - hook symbol'
                ],
                [
                    8472,
                    'Weierstrass p'
                ],
                [
                    8465,
                    'imaginary part'
                ]
            ]
        },
        {
            name: 'Arrows',
            characters: [
                [
                    8592,
                    'leftwards arrow'
                ],
                [
                    8593,
                    'upwards arrow'
                ],
                [
                    8594,
                    'rightwards arrow'
                ],
                [
                    8595,
                    'downwards arrow'
                ],
                [
                    8596,
                    'left right arrow'
                ],
                [
                    8629,
                    'carriage return'
                ],
                [
                    8656,
                    'leftwards double arrow'
                ],
                [
                    8657,
                    'upwards double arrow'
                ],
                [
                    8658,
                    'rightwards double arrow'
                ],
                [
                    8659,
                    'downwards double arrow'
                ],
                [
                    8660,
                    'left right double arrow'
                ],
                [
                    8756,
                    'therefore'
                ],
                [
                    8834,
                    'subset of'
                ],
                [
                    8835,
                    'superset of'
                ],
                [
                    8836,
                    'not a subset of'
                ],
                [
                    8838,
                    'subset of or equal to'
                ],
                [
                    8839,
                    'superset of or equal to'
                ],
                [
                    8853,
                    'circled plus'
                ],
                [
                    8855,
                    'circled times'
                ],
                [
                    8869,
                    'perpendicular'
                ],
                [
                    8901,
                    'dot operator'
                ],
                [
                    8968,
                    'left ceiling'
                ],
                [
                    8969,
                    'right ceiling'
                ],
                [
                    8970,
                    'left floor'
                ],
                [
                    8971,
                    'right floor'
                ],
                [
                    9001,
                    'left-pointing angle bracket'
                ],
                [
                    9002,
                    'right-pointing angle bracket'
                ],
                [
                    9674,
                    'lozenge'
                ],
                [
                    9824,
                    'black spade suit'
                ],
                [
                    9827,
                    'black club suit'
                ],
                [
                    9829,
                    'black heart suit'
                ],
                [
                    9830,
                    'black diamond suit'
                ],
                [
                    8194,
                    'en space'
                ],
                [
                    8195,
                    'em space'
                ],
                [
                    8201,
                    'thin space'
                ],
                [
                    8204,
                    'zero width non-joiner'
                ],
                [
                    8205,
                    'zero width joiner'
                ],
                [
                    8206,
                    'left-to-right mark'
                ],
                [
                    8207,
                    'right-to-left mark'
                ]
            ]
        }
    ];
};
const charmapFilter = (charmap)=>{
    return tinymce_core_api_util_Tools__WEBPACK_IMPORTED_MODULE_0__["default"].grep(charmap, (item)=>{
        return isArray(item) && item.length === 2;
    });
};
const getCharsFromOption = (optionValue)=>{
    if (isArray(optionValue)) {
        return charmapFilter(optionValue);
    }
    if (typeof optionValue === 'function') {
        return optionValue();
    }
    return [];
};
const extendCharMap = (editor, charmap)=>{
    const userCharMap = _api_Options__WEBPACK_IMPORTED_MODULE_1__.getCharMap(editor);
    if (userCharMap) {
        charmap = [
            {
                name: UserDefined,
                characters: getCharsFromOption(userCharMap)
            }
        ];
    }
    const userCharMapAppend = _api_Options__WEBPACK_IMPORTED_MODULE_1__.getCharMapAppend(editor);
    if (userCharMapAppend) {
        const userDefinedGroup = tinymce_core_api_util_Tools__WEBPACK_IMPORTED_MODULE_0__["default"].grep(charmap, (cg)=>cg.name === UserDefined);
        if (userDefinedGroup.length) {
            userDefinedGroup[0].characters = [
                ...userDefinedGroup[0].characters,
                ...getCharsFromOption(userCharMapAppend)
            ];
            return charmap;
        }
        return charmap.concat({
            name: UserDefined,
            characters: getCharsFromOption(userCharMapAppend)
        });
    }
    return charmap;
};
const getCharMap = (editor)=>{
    const groups = extendCharMap(editor, getDefaultCharMap());
    return groups.length > 1 ? [
        {
            name: 'All',
            characters: _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.bind(groups, (g)=>g.characters)
        }
    ].concat(groups) : groups;
};



}),
"./src/plugins/charmap/main/ts/core/Scan.ts": 
/*!**************************************************!*\
  !*** ./src/plugins/charmap/main/ts/core/Scan.ts ***!
  \**************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  scan: () => (scan)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Strings.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Arr.ts");

const charMatches = (charCode, name, lowerCasePattern)=>{
    if (_ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.contains(_ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.fromCodePoint(charCode).toLowerCase(), lowerCasePattern)) {
        return true;
    } else {
        return _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.contains(name.toLowerCase(), lowerCasePattern) || _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.contains(name.toLowerCase().replace(/\s+/g, ''), lowerCasePattern);
    }
};
const scan = (group, pattern)=>{
    const matches = [];
    const lowerCasePattern = pattern.toLowerCase();
    _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.each(group.characters, (g)=>{
        if (charMatches(g[0], g[1], lowerCasePattern)) {
            matches.push(g);
        }
    });
    return _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.map(matches, (m)=>({
            text: m[1],
            value: _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.fromCodePoint(m[0]),
            icon: _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.fromCodePoint(m[0])
        }));
};



}),
"./src/plugins/charmap/main/ts/ui/Autocompletion.ts": 
/*!**********************************************************!*\
  !*** ./src/plugins/charmap/main/ts/ui/Autocompletion.ts ***!
  \**********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  init: () => (init)
});
/* ESM import */var _core_Scan__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Scan */ "./src/plugins/charmap/main/ts/core/Scan.ts");

const init = (editor, all)=>{
    editor.ui.registry.addAutocompleter('charmap', {
        trigger: ':',
        columns: 'auto',
        minChars: 2,
        fetch: (pattern, _maxResults)=>new Promise((resolve, _reject)=>{
                resolve(_core_Scan__WEBPACK_IMPORTED_MODULE_0__.scan(all, pattern));
            }),
        onAction: (autocompleteApi, rng, value)=>{
            editor.selection.setRng(rng);
            editor.insertContent(value);
            autocompleteApi.hide();
        }
    });
};



}),
"./src/plugins/charmap/main/ts/ui/Buttons.ts": 
/*!***************************************************!*\
  !*** ./src/plugins/charmap/main/ts/ui/Buttons.ts ***!
  \***************************************************/
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
    const onAction = ()=>editor.execCommand('mceShowCharmap');
    editor.ui.registry.addButton('charmap', {
        icon: 'insert-character',
        tooltip: 'Special character',
        onAction,
        onSetup: onSetupEditable(editor)
    });
    editor.ui.registry.addMenuItem('charmap', {
        icon: 'insert-character',
        text: 'Special character...',
        onAction,
        onSetup: onSetupEditable(editor)
    });
};



}),
"./src/plugins/charmap/main/ts/ui/Dialog.ts": 
/*!**************************************************!*\
  !*** ./src/plugins/charmap/main/ts/ui/Dialog.ts ***!
  \**************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  open: () => (open)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Arr.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Cell.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Throttler.ts");
/* ESM import */var _core_Actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Actions */ "./src/plugins/charmap/main/ts/core/Actions.ts");
/* ESM import */var _core_CharMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/CharMap */ "./src/plugins/charmap/main/ts/core/CharMap.ts");
/* ESM import */var _core_Scan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/Scan */ "./src/plugins/charmap/main/ts/core/Scan.ts");




const patternName = 'pattern';
const open = (editor, charMap)=>{
    const makeGroupItems = ()=>[
            {
                label: 'Search',
                type: 'input',
                name: patternName
            },
            {
                type: 'collection',
                name: 'results'
            }
        ];
    const makeTabs = ()=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_3__.map(charMap, (charGroup)=>({
                title: charGroup.name,
                name: charGroup.name,
                items: makeGroupItems()
            }));
    const makePanel = ()=>({
            type: 'panel',
            items: makeGroupItems()
        });
    const makeTabPanel = ()=>({
            type: 'tabpanel',
            tabs: makeTabs()
        });
    const currentTab = charMap.length === 1 ? (0,_ephox_katamari__WEBPACK_IMPORTED_MODULE_4__.Cell)(_core_CharMap__WEBPACK_IMPORTED_MODULE_1__.UserDefined) : (0,_ephox_katamari__WEBPACK_IMPORTED_MODULE_4__.Cell)('All');
    const scanAndSet = (dialogApi, pattern)=>{
        _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__.find(charMap, (group)=>group.name === currentTab.get()).each((f)=>{
            const items = _core_Scan__WEBPACK_IMPORTED_MODULE_2__.scan(f, pattern);
            dialogApi.setData({
                results: items
            });
        });
    };
    const SEARCH_DELAY = 40;
    const updateFilter = _ephox_katamari__WEBPACK_IMPORTED_MODULE_5__.last((dialogApi)=>{
        const pattern = dialogApi.getData().pattern;
        scanAndSet(dialogApi, pattern);
    }, SEARCH_DELAY);
    const body = charMap.length === 1 ? makePanel() : makeTabPanel();
    const initialData = {
        pattern: '',
        results: _core_Scan__WEBPACK_IMPORTED_MODULE_2__.scan(charMap[0], '')
    };
    const bridgeSpec = {
        title: 'Special Character',
        size: 'normal',
        body,
        buttons: [
            {
                type: 'cancel',
                name: 'close',
                text: 'Close',
                primary: true
            }
        ],
        initialData,
        onAction: (api, details)=>{
            if (details.name === 'results') {
                _core_Actions__WEBPACK_IMPORTED_MODULE_0__.insertChar(editor, details.value);
                api.close();
            }
        },
        onTabChange: (dialogApi, details)=>{
            currentTab.set(details.newTabName);
            updateFilter.throttle(dialogApi);
        },
        onChange: (dialogApi, changeData)=>{
            if (changeData.name === patternName) {
                updateFilter.throttle(dialogApi);
            }
        }
    };
    const dialogApi = editor.windowManager.open(bridgeSpec);
    dialogApi.focus(patternName);
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
  !*** ./src/plugins/charmap/main/ts/Main.ts ***!
  \*********************************************/
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _Plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Plugin */ "./src/plugins/charmap/main/ts/Plugin.ts");

(0,_Plugin__WEBPACK_IMPORTED_MODULE_0__["default"])(); /** *****
 * DO NOT EXPORT ANYTHING
 *
 * IF YOU DO ROLLUP WILL LEAVE A GLOBAL ON THE PAGE
 *******/ 

})();

})()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdGlueW1jZS9wbHVnaW5zL2NoYXJtYXAvcGx1Z2luLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGlueW1jZS8uL2xpYi9nbG9iYWxzL3RpbnltY2UvY29yZS9hcGkvUGx1Z2luTWFuYWdlci5qcyIsIndlYnBhY2s6Ly90aW55bWNlLy4vbGliL2dsb2JhbHMvdGlueW1jZS9jb3JlL2FwaS91dGlsL1Rvb2xzLmpzIiwid2VicGFjazovL3RpbnltY2UvLi4va2F0YW1hcmkvc3JjL21haW4vdHMvZXBob3gva2F0YW1hcmkvYXBpL0Fyci50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL2thdGFtYXJpL3NyYy9tYWluL3RzL2VwaG94L2thdGFtYXJpL2FwaS9DZWxsLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4va2F0YW1hcmkvc3JjL21haW4vdHMvZXBob3gva2F0YW1hcmkvYXBpL0Z1bi50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL2thdGFtYXJpL3NyYy9tYWluL3RzL2VwaG94L2thdGFtYXJpL2FwaS9PcHRpb25hbC50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL2thdGFtYXJpL3NyYy9tYWluL3RzL2VwaG94L2thdGFtYXJpL2FwaS9TdHJpbmdzLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4va2F0YW1hcmkvc3JjL21haW4vdHMvZXBob3gva2F0YW1hcmkvYXBpL1Rocm90dGxlci50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL2thdGFtYXJpL3NyYy9tYWluL3RzL2VwaG94L2thdGFtYXJpL2FwaS9UeXBlLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4va2F0YW1hcmkvc3JjL21haW4vdHMvZXBob3gva2F0YW1hcmkvc3RyL1N0ckFwcGVuZC50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvY2hhcm1hcC9tYWluL3RzL1BsdWdpbi50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvY2hhcm1hcC9tYWluL3RzL2FwaS9BcGkudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL2NoYXJtYXAvbWFpbi90cy9hcGkvQ29tbWFuZHMudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL2NoYXJtYXAvbWFpbi90cy9hcGkvRXZlbnRzLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9jaGFybWFwL21haW4vdHMvYXBpL09wdGlvbnMudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL2NoYXJtYXAvbWFpbi90cy9jb3JlL0FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL2NoYXJtYXAvbWFpbi90cy9jb3JlL0NoYXJNYXAudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL2NoYXJtYXAvbWFpbi90cy9jb3JlL1NjYW4udHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL2NoYXJtYXAvbWFpbi90cy91aS9BdXRvY29tcGxldGlvbi50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvY2hhcm1hcC9tYWluL3RzL3VpL0J1dHRvbnMudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL2NoYXJtYXAvbWFpbi90cy91aS9EaWFsb2cudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi8uLi9ub2RlX21vZHVsZXMvQGVwaG94L2Rpc3B1dGUvc3JjL21haW4vdHMvYXBpL0VxLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4vLi4vbm9kZV9tb2R1bGVzL0BlcGhveC9kaXNwdXRlL3NyYy9tYWluL3RzL2NvcmUvQXJyYXlVdGlsLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4vLi4vbm9kZV9tb2R1bGVzL0BlcGhveC9kaXNwdXRlL3NyYy9tYWluL3RzL2NvcmUvVHlwZS50cyIsIndlYnBhY2s6Ly90aW55bWNlL3dlYnBhY2svcnVudGltZS9kZWZpbmVfcHJvcGVydHlfZ2V0dGVycyIsIndlYnBhY2s6Ly90aW55bWNlL3dlYnBhY2svcnVudGltZS9oYXNfb3duX3Byb3BlcnR5Iiwid2VicGFjazovL3RpbnltY2Uvd2VicGFjay9ydW50aW1lL21ha2VfbmFtZXNwYWNlX29iamVjdCIsIndlYnBhY2s6Ly90aW55bWNlL3dlYnBhY2svcnVudGltZS9yc3BhY2tfdmVyc2lvbiIsIndlYnBhY2s6Ly90aW55bWNlL3dlYnBhY2svcnVudGltZS9yc3BhY2tfdW5pcXVlX2lkIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9jaGFybWFwL21haW4vdHMvTWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZ2xvYmFsID0gdGlueW1jZS51dGlsLlRvb2xzLnJlc29sdmUoJ3RpbnltY2UuUGx1Z2luTWFuYWdlcicpO1xuXG5leHBvcnQgZGVmYXVsdCBnbG9iYWw7XG5leHBvcnQgdmFyIFBsdWdpbk1hbmFnZXIgPSBnbG9iYWw7XG4iLCJ2YXIgZ2xvYmFsID0gdGlueW1jZS51dGlsLlRvb2xzLnJlc29sdmUoJ3RpbnltY2UudXRpbC5Ub29scycpO1xuXG5leHBvcnQgZGVmYXVsdCBnbG9iYWw7XG5leHBvcnQgdmFyIFRvb2xzID0gZ2xvYmFsO1xuIiwiaW1wb3J0IHsgRXEgfSBmcm9tICdAZXBob3gvZGlzcHV0ZSc7XG5cbmltcG9ydCAqIGFzIEZ1biBmcm9tICcuL0Z1bic7XG5pbXBvcnQgeyBPcHRpb25hbCB9IGZyb20gJy4vT3B0aW9uYWwnO1xuaW1wb3J0ICogYXMgVHlwZSBmcm9tICcuL1R5cGUnO1xuXG50eXBlIEFycmF5TW9ycGhpc208VCwgVT4gPSAoeDogVCwgaTogbnVtYmVyKSA9PiBVO1xudHlwZSBBcnJheUd1YXJkUHJlZGljYXRlPFQsIFUgZXh0ZW5kcyBUPiA9ICh4OiBULCBpOiBudW1iZXIpID0+IHggaXMgVTtcbnR5cGUgQXJyYXlQcmVkaWNhdGU8VD4gPSBBcnJheU1vcnBoaXNtPFQsIGJvb2xlYW4+O1xudHlwZSBDb21wYXJhdG9yPFQ+ID0gKGE6IFQsIGI6IFQpID0+IG51bWJlcjtcblxuY29uc3QgbmF0aXZlU2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5jb25zdCBuYXRpdmVJbmRleE9mID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2Y7XG5jb25zdCBuYXRpdmVQdXNoID0gQXJyYXkucHJvdG90eXBlLnB1c2g7XG5cbmNvbnN0IHJhd0luZGV4T2YgPSA8VD4gKHRzOiBBcnJheUxpa2U8VD4sIHQ6IFQpOiBudW1iZXIgPT5cbiAgbmF0aXZlSW5kZXhPZi5jYWxsKHRzLCB0KTtcblxuZXhwb3J0IGNvbnN0IGluZGV4T2YgPSA8VCA9IGFueT4oeHM6IEFycmF5TGlrZTxUPiwgeDogVCk6IE9wdGlvbmFsPG51bWJlcj4gPT4ge1xuICAvLyBUaGUgcmF3SW5kZXhPZiBtZXRob2QgZG9lcyBub3Qgd3JhcCB1cCBpbiBhbiBvcHRpb24uIFRoaXMgaXMgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMuXG4gIGNvbnN0IHIgPSByYXdJbmRleE9mKHhzLCB4KTtcbiAgcmV0dXJuIHIgPT09IC0xID8gT3B0aW9uYWwubm9uZSgpIDogT3B0aW9uYWwuc29tZShyKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb250YWlucyA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCB4OiBUKTogYm9vbGVhbiA9PiByYXdJbmRleE9mKHhzLCB4KSA+IC0xO1xuXG5leHBvcnQgY29uc3QgZXhpc3RzID0gPFQgPSBhbnk+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+KTogYm9vbGVhbiA9PiB7XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICBpZiAocHJlZCh4LCBpKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IGNvbnN0IHJhbmdlID0gPFQ+KG51bTogbnVtYmVyLCBmOiAoYTogbnVtYmVyKSA9PiBUKTogVFtdID0+IHtcbiAgY29uc3QgcjogVFtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtOyBpKyspIHtcbiAgICByLnB1c2goZihpKSk7XG4gIH1cbiAgcmV0dXJuIHI7XG59O1xuXG4vLyBJdCdzIGEgdG90YWwgbWljcm8gb3B0aW1pc2F0aW9uLCBidXQgdGhlc2UgZG8gbWFrZSBzb21lIGRpZmZlcmVuY2UuXG4vLyBQYXJ0aWN1bGFybHkgZm9yIGJyb3dzZXJzIG90aGVyIHRoYW4gQ2hyb21lLlxuLy8gLSBsZW5ndGggY2FjaGluZ1xuLy8gaHR0cDovL2pzcGVyZi5jb20vYnJvd3Nlci1kaWV0LWpxdWVyeS1lYWNoLXZzLWZvci1sb29wLzY5XG4vLyAtIG5vdCB1c2luZyBwdXNoXG4vLyBodHRwOi8vanNwZXJmLmNvbS9hcnJheS1kaXJlY3QtYXNzaWdubWVudC12cy1wdXNoLzJcblxuZXhwb3J0IGNvbnN0IGNodW5rID0gPFQ+KGFycmF5OiBBcnJheUxpa2U8VD4sIHNpemU6IG51bWJlcik6IFRbXVtdID0+IHtcbiAgY29uc3QgcjogVFtdW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkgKz0gc2l6ZSkge1xuICAgIGNvbnN0IHM6IFRbXSA9IG5hdGl2ZVNsaWNlLmNhbGwoYXJyYXksIGksIGkgKyBzaXplKTtcbiAgICByLnB1c2gocyk7XG4gIH1cbiAgcmV0dXJuIHI7XG59O1xuXG5leHBvcnQgY29uc3QgbWFwID0gPFQgPSBhbnksIFUgPSBhbnk+KHhzOiBBcnJheUxpa2U8VD4sIGY6IEFycmF5TW9ycGhpc208VCwgVT4pOiBVW10gPT4ge1xuICAvLyBwcmUtYWxsb2NhdGluZyBhcnJheSBzaXplIHdoZW4gaXQncyBndWFyYW50ZWVkIHRvIGJlIGtub3duXG4gIC8vIGh0dHA6Ly9qc3BlcmYuY29tL3B1c2gtYWxsb2NhdGVkLXZzLWR5bmFtaWMvMjJcbiAgY29uc3QgbGVuID0geHMubGVuZ3RoO1xuICBjb25zdCByID0gbmV3IEFycmF5KGxlbik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgcltpXSA9IGYoeCwgaSk7XG4gIH1cbiAgcmV0dXJuIHI7XG59O1xuXG4vLyBVbndvdW5kIGltcGxlbWVudGluZyBvdGhlciBmdW5jdGlvbnMgaW4gdGVybXMgb2YgZWFjaC5cbi8vIFRoZSBjb2RlIHNpemUgaXMgcm91Z2hseSB0aGUgc2FtZSwgYW5kIGl0IHNob3VsZCBhbGxvdyBmb3IgYmV0dGVyIG9wdGltaXNhdGlvbi5cbi8vIGNvbnN0IGVhY2ggPSBmdW5jdGlvbjxULCBVPih4czogVFtdLCBmOiAoeDogVCwgaT86IG51bWJlciwgeHM/OiBUW10pID0+IHZvaWQpOiB2b2lkIHtcbmV4cG9ydCBjb25zdCBlYWNoID0gPFQgPSBhbnk+KHhzOiBBcnJheUxpa2U8VD4sIGY6IEFycmF5TW9ycGhpc208VCwgdm9pZD4pOiB2b2lkID0+IHtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHhzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIGYoeCwgaSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBlYWNociA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCBmOiBBcnJheU1vcnBoaXNtPFQsIHZvaWQ+KTogdm9pZCA9PiB7XG4gIGZvciAobGV0IGkgPSB4cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICBmKHgsIGkpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgcGFydGl0aW9uID0gPFQgPSBhbnk+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+KTogeyBwYXNzOiBUW107IGZhaWw6IFRbXSB9ID0+IHtcbiAgY29uc3QgcGFzczogVFtdID0gW107XG4gIGNvbnN0IGZhaWw6IFRbXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0geHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgY29uc3QgYXJyID0gcHJlZCh4LCBpKSA/IHBhc3MgOiBmYWlsO1xuICAgIGFyci5wdXNoKHgpO1xuICB9XG4gIHJldHVybiB7IHBhc3MsIGZhaWwgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBmaWx0ZXI6IHtcbiAgPFQsIFUgZXh0ZW5kcyBUPih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheUd1YXJkUHJlZGljYXRlPFQsIFU+KTogVVtdO1xuICA8VD4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlQcmVkaWNhdGU8VD4pOiBUW107XG59ID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+KTogVFtdID0+IHtcbiAgY29uc3QgcjogVFtdID0gW107XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICBpZiAocHJlZCh4LCBpKSkge1xuICAgICAgci5wdXNoKHgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcjtcbn07XG5cbi8qXG4gKiBHcm91cHMgYW4gYXJyYXkgaW50byBjb250aWd1b3VzIGFycmF5cyBvZiBsaWtlIGVsZW1lbnRzLiBXaGV0aGVyIGFuIGVsZW1lbnQgaXMgbGlrZSBvciBub3QgZGVwZW5kcyBvbiBmLlxuICpcbiAqIGYgaXMgYSBmdW5jdGlvbiB0aGF0IGRlcml2ZXMgYSB2YWx1ZSBmcm9tIGFuIGVsZW1lbnQgLSBlLmcuIHRydWUgb3IgZmFsc2UsIG9yIGEgc3RyaW5nLlxuICogRWxlbWVudHMgYXJlIGxpa2UgaWYgdGhpcyBmdW5jdGlvbiBnZW5lcmF0ZXMgdGhlIHNhbWUgdmFsdWUgZm9yIHRoZW0gKGFjY29yZGluZyB0byA9PT0pLlxuICpcbiAqXG4gKiBPcmRlciBvZiB0aGUgZWxlbWVudHMgaXMgcHJlc2VydmVkLiBBcnIuZmxhdHRlbigpIG9uIHRoZSByZXN1bHQgd2lsbCByZXR1cm4gdGhlIG9yaWdpbmFsIGxpc3QsIGFzIHdpdGggSGFza2VsbCBncm91cEJ5IGZ1bmN0aW9uLlxuICogIEZvciBhIGdvb2QgZXhwbGFuYXRpb24sIHNlZSB0aGUgZ3JvdXAgZnVuY3Rpb24gKHdoaWNoIGlzIGEgc3BlY2lhbCBjYXNlIG9mIGdyb3VwQnkpXG4gKiAgaHR0cDovL2hhY2thZ2UuaGFza2VsbC5vcmcvcGFja2FnZS9iYXNlLTQuNy4wLjAvZG9jcy9EYXRhLUxpc3QuaHRtbCN2Omdyb3VwXG4gKi9cbmV4cG9ydCBjb25zdCBncm91cEJ5ID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4sIGY6IChhOiBUKSA9PiBhbnkpOiBUW11bXSA9PiB7XG4gIGlmICh4cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gW107XG4gIH0gZWxzZSB7XG4gICAgbGV0IHdhc1R5cGUgPSBmKHhzWzBdKTsgLy8gaW5pdGlhbCBjYXNlIGZvciBtYXRjaGluZ1xuICAgIGNvbnN0IHI6IFRbXVtdID0gW107XG4gICAgbGV0IGdyb3VwOiBUW10gPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgY29uc3QgeCA9IHhzW2ldO1xuICAgICAgY29uc3QgdHlwZSA9IGYoeCk7XG4gICAgICBpZiAodHlwZSAhPT0gd2FzVHlwZSkge1xuICAgICAgICByLnB1c2goZ3JvdXApO1xuICAgICAgICBncm91cCA9IFtdO1xuICAgICAgfVxuICAgICAgd2FzVHlwZSA9IHR5cGU7XG4gICAgICBncm91cC5wdXNoKHgpO1xuICAgIH1cbiAgICBpZiAoZ3JvdXAubGVuZ3RoICE9PSAwKSB7XG4gICAgICByLnB1c2goZ3JvdXApO1xuICAgIH1cbiAgICByZXR1cm4gcjtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGZvbGRyID0gPFQsIFU+KHhzOiBBcnJheUxpa2U8VD4sIGY6IChhY2M6IFUsIHg6IFQsIGk6IG51bWJlcikgPT4gVSwgYWNjOiBVKTogVSA9PiB7XG4gIGVhY2hyKHhzLCAoeCwgaSkgPT4ge1xuICAgIGFjYyA9IGYoYWNjLCB4LCBpKTtcbiAgfSk7XG4gIHJldHVybiBhY2M7XG59O1xuXG5leHBvcnQgY29uc3QgZm9sZGwgPSA8VCA9IGFueSwgVSA9IGFueT4oeHM6IEFycmF5TGlrZTxUPiwgZjogKGFjYzogVSwgeDogVCwgaTogbnVtYmVyKSA9PiBVLCBhY2M6IFUpOiBVID0+IHtcbiAgZWFjaCh4cywgKHgsIGkpID0+IHtcbiAgICBhY2MgPSBmKGFjYywgeCwgaSk7XG4gIH0pO1xuICByZXR1cm4gYWNjO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmRVbnRpbDoge1xuICA8VCwgVSBleHRlbmRzIFQ+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5R3VhcmRQcmVkaWNhdGU8VCwgVT4sIHVudGlsOiBBcnJheVByZWRpY2F0ZTxUPik6IE9wdGlvbmFsPFU+O1xuICA8VCA9IGFueT4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlQcmVkaWNhdGU8VD4sIHVudGlsOiBBcnJheVByZWRpY2F0ZTxUPik6IE9wdGlvbmFsPFQ+O1xufSA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheVByZWRpY2F0ZTxUPiwgdW50aWw6IEFycmF5UHJlZGljYXRlPFQ+KTogT3B0aW9uYWw8VD4gPT4ge1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0geHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgaWYgKHByZWQoeCwgaSkpIHtcbiAgICAgIHJldHVybiBPcHRpb25hbC5zb21lKHgpO1xuICAgIH0gZWxzZSBpZiAodW50aWwoeCwgaSkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gT3B0aW9uYWwubm9uZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmQ6IHtcbiAgPFQsIFUgZXh0ZW5kcyBUPih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheUd1YXJkUHJlZGljYXRlPFQsIFU+KTogT3B0aW9uYWw8VT47XG4gIDxUID0gYW55Pih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheVByZWRpY2F0ZTxUPik6IE9wdGlvbmFsPFQ+O1xufSA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheVByZWRpY2F0ZTxUPik6IE9wdGlvbmFsPFQ+ID0+IHtcbiAgcmV0dXJuIGZpbmRVbnRpbCh4cywgcHJlZCwgRnVuLm5ldmVyKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmaW5kSW5kZXggPSA8VD4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlQcmVkaWNhdGU8VD4pOiBPcHRpb25hbDxudW1iZXI+ID0+IHtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHhzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIGlmIChwcmVkKHgsIGkpKSB7XG4gICAgICByZXR1cm4gT3B0aW9uYWwuc29tZShpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gT3B0aW9uYWwubm9uZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmRMYXN0SW5kZXggPSA8VD4oYXJyOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+KTogT3B0aW9uYWw8bnVtYmVyPiA9PiB7XG4gIGZvciAobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBpZiAocHJlZChhcnJbaV0sIGkpKSB7XG4gICAgICByZXR1cm4gT3B0aW9uYWwuc29tZShpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gT3B0aW9uYWwubm9uZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZsYXR0ZW4gPSA8VD4oeHM6IEFycmF5TGlrZTxUW10+KTogVFtdID0+IHtcbiAgLy8gTm90ZSwgdGhpcyBpcyBwb3NzaWJsZSBiZWNhdXNlIHB1c2ggc3VwcG9ydHMgbXVsdGlwbGUgYXJndW1lbnRzOlxuICAvLyBodHRwOi8vanNwZXJmLmNvbS9jb25jYXQtcHVzaC82XG4gIC8vIE5vdGUgdGhhdCBpbiB0aGUgcGFzdCwgY29uY2F0KCkgd291bGQgc2lsZW50bHkgd29yayAodmVyeSBzbG93bHkpIGZvciBhcnJheS1saWtlIG9iamVjdHMuXG4gIC8vIFdpdGggdGhpcyBjaGFuZ2UgaXQgd2lsbCB0aHJvdyBhbiBlcnJvci5cbiAgY29uc3QgcjogVFtdID0gW107XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgIC8vIEVuc3VyZSB0aGF0IGVhY2ggdmFsdWUgaXMgYW4gYXJyYXkgaXRzZWxmXG4gICAgaWYgKCFUeXBlLmlzQXJyYXkoeHNbaV0pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Fyci5mbGF0dGVuIGl0ZW0gJyArIGkgKyAnIHdhcyBub3QgYW4gYXJyYXksIGlucHV0OiAnICsgeHMpO1xuICAgIH1cbiAgICBuYXRpdmVQdXNoLmFwcGx5KHIsIHhzW2ldKTtcbiAgfVxuICByZXR1cm4gcjtcbn07XG5cbmV4cG9ydCBjb25zdCBiaW5kID0gPFQgPSBhbnksIFUgPSBhbnk+KHhzOiBBcnJheUxpa2U8VD4sIGY6IEFycmF5TW9ycGhpc208VCwgVVtdPik6IFVbXSA9PlxuICBmbGF0dGVuKG1hcCh4cywgZikpO1xuXG5leHBvcnQgY29uc3QgZm9yYWxsID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+KTogYm9vbGVhbiA9PiB7XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICBpZiAocHJlZCh4LCBpKSAhPT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmV4cG9ydCBjb25zdCBlcXVhbCA9IDxUPihhMTogQXJyYXlMaWtlPFQ+LCBhMjogQXJyYXlMaWtlPFQ+LCBlcTogRXEuRXE8VD4gPSBFcS5lcUFueSk6IGJvb2xlYW4gPT5cbiAgRXEuZXFBcnJheShlcSkuZXEoYTEsIGEyKTtcblxuZXhwb3J0IGNvbnN0IHJldmVyc2UgPSA8VD4oeHM6IEFycmF5TGlrZTxUPik6IFRbXSA9PiB7XG4gIGNvbnN0IHI6IFRbXSA9IG5hdGl2ZVNsaWNlLmNhbGwoeHMsIDApO1xuICByLnJldmVyc2UoKTtcbiAgcmV0dXJuIHI7XG59O1xuXG5leHBvcnQgY29uc3QgZGlmZmVyZW5jZSA9IDxUPihhMTogQXJyYXlMaWtlPFQ+LCBhMjogQXJyYXlMaWtlPFQ+KTogVFtdID0+IGZpbHRlcihhMSwgKHgpID0+ICFjb250YWlucyhhMiwgeCkpO1xuXG5leHBvcnQgY29uc3QgbWFwVG9PYmplY3Q6IHtcbiAgPFQgZXh0ZW5kcyBzdHJpbmcsIFU+KHhzOiBBcnJheUxpa2U8VD4sIGY6ICh4OiBULCBpOiBudW1iZXIpID0+IFUpOiBSZWNvcmQ8VCwgVT47XG4gIDxULCBSIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55Pj4oeHM6IEFycmF5TGlrZTxUPiwgZjogKHg6IFQsIGk6IG51bWJlcikgPT4gUltrZXlvZiBSXSk6IFI7XG59ID0gPFQsIFIgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+Pih4czogQXJyYXlMaWtlPFQ+LCBmOiAoeDogVCwgaTogbnVtYmVyKSA9PiBSW2tleW9mIFJdKTogUiA9PiB7XG4gIGNvbnN0IHIgPSB7fSBhcyBSO1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0geHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgcltTdHJpbmcoeCkgYXMga2V5b2YgUl0gPSBmKHgsIGkpO1xuICB9XG4gIHJldHVybiByO1xufTtcblxuZXhwb3J0IGNvbnN0IHB1cmUgPSA8VD4oeDogVCk6IFRbXSA9PiBbIHggXTtcblxuZXhwb3J0IGNvbnN0IHNvcnQgPSA8VD4oeHM6IEFycmF5TGlrZTxUPiwgY29tcGFyYXRvcj86IENvbXBhcmF0b3I8VD4pOiBUW10gPT4ge1xuICBjb25zdCBjb3B5OiBUW10gPSBuYXRpdmVTbGljZS5jYWxsKHhzLCAwKTtcbiAgY29weS5zb3J0KGNvbXBhcmF0b3IpO1xuICByZXR1cm4gY29weTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXQgPSA8VD4oeHM6IEFycmF5TGlrZTxUPiwgaTogbnVtYmVyKTogT3B0aW9uYWw8VD4gPT4gaSA+PSAwICYmIGkgPCB4cy5sZW5ndGggPyBPcHRpb25hbC5zb21lKHhzW2ldKSA6IE9wdGlvbmFsLm5vbmUoKTtcblxuZXhwb3J0IGNvbnN0IGhlYWQgPSA8VD4oeHM6IEFycmF5TGlrZTxUPik6IE9wdGlvbmFsPFQ+ID0+IGdldCh4cywgMCk7XG5cbmV4cG9ydCBjb25zdCBsYXN0ID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4pOiBPcHRpb25hbDxUPiA9PiBnZXQoeHMsIHhzLmxlbmd0aCAtIDEpO1xuXG5leHBvcnQgY29uc3QgZnJvbTogPFQ+KHg6IEFycmF5TGlrZTxUPikgPT4gVFtdID0gVHlwZS5pc0Z1bmN0aW9uKEFycmF5LmZyb20pID8gQXJyYXkuZnJvbSA6ICh4KSA9PiBuYXRpdmVTbGljZS5jYWxsKHgpO1xuXG5leHBvcnQgY29uc3QgZmluZE1hcCA9IDxBLCBCPihhcnI6IEFycmF5TGlrZTxBPiwgZjogKGE6IEEsIGluZGV4OiBudW1iZXIpID0+IE9wdGlvbmFsPEI+KTogT3B0aW9uYWw8Qj4gPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHIgPSBmKGFycltpXSwgaSk7XG4gICAgaWYgKHIuaXNTb21lKCkpIHtcbiAgICAgIHJldHVybiByO1xuICAgIH1cbiAgfVxuICByZXR1cm4gT3B0aW9uYWwubm9uZTxCPigpO1xufTtcblxuZXhwb3J0IGNvbnN0IHVuaXF1ZSA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCBjb21wYXJhdG9yPzogKGE6IFQsIGI6IFQpID0+IGJvb2xlYW4pOiBUW10gPT4ge1xuICBjb25zdCByOiBUW10gPSBbXTtcblxuICBjb25zdCBpc0R1cGxpY2F0ZWQgPSBUeXBlLmlzRnVuY3Rpb24oY29tcGFyYXRvcikgP1xuICAgICh4OiBUKSA9PiBleGlzdHMociwgKGkpID0+IGNvbXBhcmF0b3IoaSwgeCkpIDpcbiAgICAoeDogVCkgPT4gY29udGFpbnMociwgeCk7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHhzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIGlmICghaXNEdXBsaWNhdGVkKHgpKSB7XG4gICAgICByLnB1c2goeCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHI7XG59O1xuIiwiZXhwb3J0IGludGVyZmFjZSBDZWxsPFQ+IHtcbiAgcmVhZG9ubHkgZ2V0OiAoKSA9PiBUO1xuICByZWFkb25seSBzZXQ6ICh2YWx1ZTogVCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IENlbGwgPSA8VD4oaW5pdGlhbDogVCk6IENlbGw8VD4gPT4ge1xuICBsZXQgdmFsdWUgPSBpbml0aWFsO1xuXG4gIGNvbnN0IGdldCA9ICgpID0+IHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG5cbiAgY29uc3Qgc2V0ID0gKHY6IFQpID0+IHtcbiAgICB2YWx1ZSA9IHY7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQsXG4gICAgc2V0XG4gIH07XG59O1xuIiwiaW1wb3J0ICogYXMgVHlwZSBmcm9tICcuL1R5cGUnO1xuXG5jb25zdCBub29wOiAoLi4uYXJnczogYW55W10pID0+IHZvaWRcbj0gKCkgPT4geyB9O1xuXG5jb25zdCBub2FyZzogPFQ+KGY6ICgpID0+IFQpID0+ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZFxuPSAoZikgPT4gKCkgPT4gZigpO1xuXG4vKiogQ29tcG9zZSBhIHVuYXJ5IGZ1bmN0aW9uIHdpdGggYW4gbi1hcnkgZnVuY3Rpb24gKi9cbmNvbnN0IGNvbXBvc2UgPSA8VCBleHRlbmRzIGFueVtdLCBVLCBWPihmYTogKHY6IFUpID0+IFYsIGZiOiAoLi4ueDogVCkgPT4gVSk6ICguLi54OiBUKSA9PiBWID0+IHtcbiAgcmV0dXJuICguLi5hcmdzOiBUKSA9PiB7XG4gICAgcmV0dXJuIGZhKGZiLmFwcGx5KG51bGwsIGFyZ3MpKTtcbiAgfTtcbn07XG5cbi8qKiBDb21wb3NlIHR3byB1bmFyeSBmdW5jdGlvbnMuIFNpbWlsYXIgdG8gY29tcG9zZSwgYnV0IGF2b2lkcyB1c2luZyBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuICovXG5jb25zdCBjb21wb3NlMSA9IDxBLCBCLCBDPiAoZmJjOiAoYjogQikgPT4gQywgZmFiOiAoYTogQSkgPT4gQikgPT4gKGE6IEEpOiBDID0+XG4gIGZiYyhmYWIoYSkpO1xuXG5jb25zdCBjb25zdGFudCA9IDxUPih2YWx1ZTogVCk6ICgpID0+IFQgPT4ge1xuICByZXR1cm4gKCkgPT4ge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcbn07XG5cbmNvbnN0IGlkZW50aXR5ID0gPFQgPSBhbnk+KHg6IFQpOiBUID0+IHtcbiAgcmV0dXJuIHg7XG59O1xuXG5jb25zdCB0cmlwbGVFcXVhbHMgPSA8VD4oYTogVCwgYjogVCk6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gYSA9PT0gYjtcbn07XG5cbmZ1bmN0aW9uIGN1cnJ5IDxSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8QSwgUkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoYTogQSwgLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCwgYTogQSk6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPEEsIEIsIFJFU1QgZXh0ZW5kcyBhbnlbXSwgT1VUPihmbjogKGE6IEEsIGI6IEIsIC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQsIGE6IEEsIGI6IEIpOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVDtcbmZ1bmN0aW9uIGN1cnJ5IDxBLCBCLCBDLCBSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46IChhOiBBLCBiOiBCLCBjOiBDLCAuLi5yZXN0QXJnczogUkVTVCkgPT4gT1VULCBhOiBBLCBiOiBCLCBjOiBDKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8QSwgQiwgQywgRCwgUkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoYTogQSwgYjogQiwgYzogQywgZDogRCwgLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCwgYTogQSwgYjogQiwgYzogQywgZDogRCk6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPEEsIEIsIEMsIEQsIEUsIFJFU1QgZXh0ZW5kcyBhbnlbXSwgT1VUPihmbjogKGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQsIGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUpOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVDtcbmZ1bmN0aW9uIGN1cnJ5IDxBLCBCLCBDLCBELCBFLCBGLCBSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46IChhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCBmOiBGLCAuLi5yZXN0QXJnczogUkVTVCkgPT4gT1VULCBhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCBmOiBGKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8QSwgQiwgQywgRCwgRSwgRiwgRywgUkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgZjogRiwgZzogRywgLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCwgYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgZjogRiwgZzogRyk6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPEEsIEIsIEMsIEQsIEUsIEYsIEcsIEgsIFJFU1QgZXh0ZW5kcyBhbnlbXSwgT1VUPihmbjogKGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIGY6IEYsIGc6IEcsIGg6IEgsIC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQsIGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIGY6IEYsIGc6IEcsIGg6IEgpOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVDtcbmZ1bmN0aW9uIGN1cnJ5IDxBLCBCLCBDLCBELCBFLCBGLCBHLCBILCBJLCBSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46IChhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCBmOiBGLCBnOiBHLCBoOiBILCBpOiBJLCAuLi5yZXN0QXJnczogUkVTVCkgPT4gT1VULCBhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCBmOiBGLCBnOiBHLCBoOiBILCBpOiBJKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8QSwgQiwgQywgRCwgRSwgRiwgRywgSCwgSSwgSiwgUkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgZjogRiwgZzogRywgaDogSCwgaTogSSwgajogSiwgLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCwgYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgZjogRiwgZzogRywgaDogSCwgaTogSSwgajogSik6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPE9VVD4oZm46ICguLi5hbGxBcmdzOiBhbnlbXSkgPT4gT1VULCAuLi5pbml0aWFsQXJnczogYW55W10pOiAoLi4ucmVzdEFyZ3M6IGFueVtdKSA9PiBPVVQge1xuICByZXR1cm4gKC4uLnJlc3RBcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IGFsbCA9IGluaXRpYWxBcmdzLmNvbmNhdChyZXN0QXJncyk7XG4gICAgcmV0dXJuIGZuLmFwcGx5KG51bGwsIGFsbCk7XG4gIH07XG59XG5cbmNvbnN0IG5vdCA9IDxUPihmOiAodDogVCkgPT4gYm9vbGVhbikgPT4gKHQ6IFQpOiBib29sZWFuID0+XG4gICFmKHQpO1xuXG5jb25zdCBkaWUgPSAobXNnOiBzdHJpbmcpID0+IHtcbiAgcmV0dXJuICgpOiBuZXZlciA9PiB7XG4gICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XG4gIH07XG59O1xuXG5jb25zdCBhcHBseSA9IDxUPihmOiAoKSA9PiBUKTogVCA9PiB7XG4gIHJldHVybiBmKCk7XG59O1xuXG5jb25zdCBjYWxsID0gKGY6ICgpID0+IGFueSk6IHZvaWQgPT4ge1xuICBmKCk7XG59O1xuXG5jb25zdCBuZXZlcjogKC4uLmFyZ3M6IGFueVtdKSA9PiBmYWxzZSA9IGNvbnN0YW50PGZhbHNlPihmYWxzZSk7XG5jb25zdCBhbHdheXM6ICguLi5hcmdzOiBhbnlbXSkgPT4gdHJ1ZSA9IGNvbnN0YW50PHRydWU+KHRydWUpO1xuXG4vKiBVc2VkIHRvIHdlYWtlbiB0eXBlcyAqL1xuY29uc3Qgd2Vha2VuID0gPEEsIEIgZXh0ZW5kcyBBPihiOiBCKTogQSA9PiBiO1xuXG50eXBlIEZ1bjxYLCBZPiA9ICh4OiBYKSA9PiBZO1xuY29uc3QgcGlwZToge1xuICA8QSwgQj4oYTogQSwgYWI6IEZ1bjxBLCBCPik6IEI7XG4gIDxBLCBCLCBDPihhOiBBLCBhYjogRnVuPEEsIEI+LCBiYzogRnVuPEIsIEM+KTogQztcbiAgPEEsIEIsIEMsIEQ+KGE6IEEsIGFiOiBGdW48QSwgQj4sIGJjOiBGdW48QiwgQz4sIGNkOiBGdW48QywgRD4pOiBEO1xuICA8QSwgQiwgQywgRCwgRT4oYTogQSwgYWI6IEZ1bjxBLCBCPiwgYmM6IEZ1bjxCLCBDPiwgY2Q6IEZ1bjxDLCBEPiwgZGU6IEZ1bjxELCBFPik6IEU7XG4gIDxBLCBCLCBDLCBELCBFLCBGPihhOiBBLCBhYjogRnVuPEEsIEI+LCBiYzogRnVuPEIsIEM+LCBjZDogRnVuPEMsIEQ+LCBkZTogRnVuPEQsIEU+LCBlZjogRnVuPEUsIEY+KTogRjtcbiAgPEEsIEIsIEMsIEQsIEUsIEYsIEc+KGE6IEEsIGFiOiBGdW48QSwgQj4sIGJjOiBGdW48QiwgQz4sIGNkOiBGdW48QywgRD4sIGRlOiBGdW48RCwgRT4sIGVmOiBGdW48RSwgRj4sIGZnOiBGdW48RiwgRz4pOiBHO1xuICA8QSwgQiwgQywgRCwgRSwgRiwgRywgSD4oYTogQSwgYWI6IEZ1bjxBLCBCPiwgYmM6IEZ1bjxCLCBDPiwgY2Q6IEZ1bjxDLCBEPiwgZGU6IEZ1bjxELCBFPiwgZWY6IEZ1bjxFLCBGPiwgZmc6IEZ1bjxGLCBHPiwgZ2g6IEZ1bjxHLCBIPik6IEg7XG59ID1cbiAgPEEsIEIsIEMsIEQsIEUsIEYsIEcsIEg+KGE6IEEsIGFiOiBGdW48QSwgQj4sIGJjPzogRnVuPEIsIEM+LCBjZD86IEZ1bjxDLCBEPiwgZGU/OiBGdW48RCwgRT4sIGVmPzogRnVuPEUsIEY+LCBmZz86IEZ1bjxGLCBHPiwgZ2g/OiBGdW48RywgSD4pOiBCIHwgQyB8IEQgfCBFIHwgRiB8IEcgfCBIID0+IHtcbiAgICBjb25zdCBiID0gYWIoYSk7XG4gICAgaWYgKFR5cGUuaXNOdWxsYWJsZShiYykpIHtcbiAgICAgIHJldHVybiBiO1xuICAgIH1cblxuICAgIGNvbnN0IGMgPSBiYyhiKTtcbiAgICBpZiAoVHlwZS5pc051bGxhYmxlKGNkKSkge1xuICAgICAgcmV0dXJuIGM7XG4gICAgfVxuXG4gICAgY29uc3QgZCA9IGNkKGMpO1xuICAgIGlmIChUeXBlLmlzTnVsbGFibGUoZGUpKSB7XG4gICAgICByZXR1cm4gZDtcbiAgICB9XG5cbiAgICBjb25zdCBlID0gZGUoZCk7XG4gICAgaWYgKFR5cGUuaXNOdWxsYWJsZShlZikpIHtcbiAgICAgIHJldHVybiBlO1xuICAgIH1cblxuICAgIGNvbnN0IGYgPSBlZihlKTtcbiAgICBpZiAoVHlwZS5pc051bGxhYmxlKGZnKSkge1xuICAgICAgcmV0dXJuIGY7XG4gICAgfVxuXG4gICAgY29uc3QgZyA9IGZnKGYpO1xuICAgIGlmIChUeXBlLmlzTnVsbGFibGUoZ2gpKSB7XG4gICAgICByZXR1cm4gZztcbiAgICB9XG5cbiAgICByZXR1cm4gZ2goZyk7XG4gIH07XG5cbmV4cG9ydCB7XG4gIG5vb3AsXG4gIG5vYXJnLFxuICBjb21wb3NlLFxuICBjb21wb3NlMSxcbiAgY29uc3RhbnQsXG4gIGlkZW50aXR5LFxuICB0cmlwbGVFcXVhbHMsXG4gIGN1cnJ5LFxuICBub3QsXG4gIGRpZSxcbiAgYXBwbHksXG4gIGNhbGwsXG4gIG5ldmVyLFxuICBhbHdheXMsXG4gIHdlYWtlbixcbiAgcGlwZVxufTtcbiIsImltcG9ydCAqIGFzIFR5cGUgZnJvbSAnLi9UeXBlJztcblxuLyoqXG4gKiBUaGUgYE9wdGlvbmFsYCB0eXBlIHJlcHJlc2VudHMgYSB2YWx1ZSAob2YgYW55IHR5cGUpIHRoYXQgcG90ZW50aWFsbHkgZG9lc1xuICogbm90IGV4aXN0LiBBbnkgYE9wdGlvbmFsPFQ+YCBjYW4gZWl0aGVyIGJlIGEgYFNvbWU8VD5gIChpbiB3aGljaCBjYXNlIHRoZVxuICogdmFsdWUgZG9lcyBleGlzdCkgb3IgYSBgTm9uZWAgKGluIHdoaWNoIGNhc2UgdGhlIHZhbHVlIGRvZXMgbm90IGV4aXN0KS4gVGhpc1xuICogbW9kdWxlIGRlZmluZXMgYSB3aG9sZSBsb3Qgb2YgRlAtaW5zcGlyZWQgdXRpbGl0eSBmdW5jdGlvbnMgZm9yIGRlYWxpbmcgd2l0aFxuICogYE9wdGlvbmFsYCBvYmplY3RzLlxuICpcbiAqIENvbXBhcmlzb24gd2l0aCBudWxsIG9yIHVuZGVmaW5lZDpcbiAqIC0gV2UgZG9uJ3QgZ2V0IGZhbmN5IG51bGwgY29hbGVzY2luZyBvcGVyYXRvcnMgd2l0aCBgT3B0aW9uYWxgXG4gKiAtIFdlIGRvIGdldCBmYW5jeSBoZWxwZXIgZnVuY3Rpb25zIHdpdGggYE9wdGlvbmFsYFxuICogLSBgT3B0aW9uYWxgIHN1cHBvcnQgbmVzdGluZywgYW5kIGFsbG93IGZvciB0aGUgdHlwZSB0byBzdGlsbCBiZSBudWxsYWJsZSAob3JcbiAqIGFub3RoZXIgYE9wdGlvbmFsYClcbiAqIC0gVGhlcmUgaXMgbm8gb3B0aW9uIHRvIHR1cm4gb2ZmIHN0cmljdC1vcHRpb25hbC1jaGVja3MgbGlrZSB0aGVyZSBpcyBmb3JcbiAqIHN0cmljdC1udWxsLWNoZWNrc1xuICovXG5leHBvcnQgY2xhc3MgT3B0aW9uYWw8VD4ge1xuICBwcml2YXRlIHJlYWRvbmx5IHRhZzogYm9vbGVhbjtcbiAgcHJpdmF0ZSByZWFkb25seSB2YWx1ZT86IFQ7XG5cbiAgLy8gU25lYWt5IG9wdGltaXNhdGlvbjogZXZlcnkgaW5zdGFuY2Ugb2YgT3B0aW9uYWwubm9uZSBpcyBpZGVudGljYWwsIHNvIGp1c3RcbiAgLy8gcmV1c2UgdGhlIHNhbWUgb2JqZWN0XG4gIHByaXZhdGUgc3RhdGljIHNpbmdsZXRvbk5vbmUgPSBuZXcgT3B0aW9uYWw8YW55PihmYWxzZSk7XG5cbiAgLy8gVGhlIGludGVybmFsIHJlcHJlc2VudGF0aW9uIGhhcyBhIGB0YWdgIGFuZCBhIGB2YWx1ZWAsIGJ1dCBib3RoIGFyZVxuICAvLyBwcml2YXRlOiBhYmxlIHRvIGJlIGNvbnNvbGUubG9nZ2VkLCBidXQgbm90IGFibGUgdG8gYmUgYWNjZXNzZWQgYnkgY29kZVxuICBwcml2YXRlIGNvbnN0cnVjdG9yKHRhZzogYm9vbGVhbiwgdmFsdWU/OiBUKSB7XG4gICAgdGhpcy50YWcgPSB0YWc7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgLy8gLS0tIElkZW50aXRpZXMgLS0tXG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgYE9wdGlvbmFsPFQ+YCB0aGF0ICoqZG9lcyoqIGNvbnRhaW4gYSB2YWx1ZS5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgc29tZTxUPih0aGlzOiB2b2lkLCB2YWx1ZTogVCk6IE9wdGlvbmFsPFQ+IHtcbiAgICByZXR1cm4gbmV3IE9wdGlvbmFsKHRydWUsIHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgYE9wdGlvbmFsPFQ+YCB0aGF0ICoqZG9lcyBub3QqKiBjb250YWluIGEgdmFsdWUuIGBUYCBjYW4gYmVcbiAgICogYW55IHR5cGUgYmVjYXVzZSB3ZSBkb24ndCBhY3R1YWxseSBoYXZlIGEgYFRgLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBub25lPFQgPSBuZXZlcj4odGhpczogdm9pZCk6IE9wdGlvbmFsPFQ+IHtcbiAgICByZXR1cm4gT3B0aW9uYWwuc2luZ2xldG9uTm9uZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtIGEgdHJhbnNmb3JtIG9uIGFuIGBPcHRpb25hbGAgdHlwZS4gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXNcbiAgICogYE9wdGlvbmFsYCBjb250YWlucyBhIHZhbHVlIG9yIG5vdCwgYGZvbGRgIHdpbGwgcmV0dXJuIGEgdmFsdWUgb2YgdHlwZSBgVWAuXG4gICAqIElmIHRoaXMgYE9wdGlvbmFsYCBkb2VzIG5vdCBjb250YWluIGEgdmFsdWUsIHRoZSBgVWAgd2lsbCBiZSBjcmVhdGVkIGJ5XG4gICAqIGNhbGxpbmcgYG9uTm9uZWAuIElmIHRoaXMgYE9wdGlvbmFsYCBkb2VzIGNvbnRhaW4gYSB2YWx1ZSwgdGhlIGBVYCB3aWxsIGJlXG4gICAqIGNyZWF0ZWQgYnkgY2FsbGluZyBgb25Tb21lYC5cbiAgICpcbiAgICogRm9yIHRoZSBGUCBlbnRodXNpYXN0cyBpbiB0aGUgcm9vbSwgdGhpcyBmdW5jdGlvbjpcbiAgICogMS4gQ291bGQgYmUgdXNlZCB0byBpbXBsZW1lbnQgYWxsIG9mIHRoZSBmdW5jdGlvbnMgYmVsb3dcbiAgICogMi4gRm9ybXMgYSBjYXRhbW9ycGhpc21cbiAgICovXG4gIHB1YmxpYyBmb2xkPFU+KG9uTm9uZTogKCkgPT4gVSwgb25Tb21lOiAodmFsdWU6IFQpID0+IFUpOiBVIHtcbiAgICBpZiAodGhpcy50YWcpIHtcbiAgICAgIHJldHVybiBvblNvbWUodGhpcy52YWx1ZSBhcyBUKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG9uTm9uZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgdGhpcyBgT3B0aW9uYWxgIG9iamVjdCBjb250YWlucyBhIHZhbHVlLlxuICAgKi9cbiAgcHVibGljIGlzU29tZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50YWc7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIGlmIHRoaXMgYE9wdGlvbmFsYCBvYmplY3QgKipkb2VzIG5vdCoqIGNvbnRhaW4gYSB2YWx1ZS5cbiAgICovXG4gIHB1YmxpYyBpc05vbmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLnRhZztcbiAgfVxuXG4gIC8vIC0tLSBGdW5jdG9yIChuYW1lIHN0b2xlbiBmcm9tIEhhc2tlbGwgLyBtYXRocykgLS0tXG5cbiAgLyoqXG4gICAqIFBlcmZvcm0gYSB0cmFuc2Zvcm0gb24gYW4gYE9wdGlvbmFsYCBvYmplY3QsICoqaWYqKiB0aGVyZSBpcyBhIHZhbHVlLiBJZlxuICAgKiB5b3UgcHJvdmlkZSBhIGZ1bmN0aW9uIHRvIHR1cm4gYSBUIGludG8gYSBVLCB0aGlzIGlzIHRoZSBmdW5jdGlvbiB5b3UgdXNlXG4gICAqIHRvIHR1cm4gYW4gYE9wdGlvbmFsPFQ+YCBpbnRvIGFuIGBPcHRpb25hbDxVPmAuIElmIHRoaXMgKipkb2VzKiogY29udGFpblxuICAgKiBhIHZhbHVlIHRoZW4gdGhlIG91dHB1dCB3aWxsIGFsc28gY29udGFpbiBhIHZhbHVlICh0aGF0IHZhbHVlIGJlaW5nIHRoZVxuICAgKiBvdXRwdXQgb2YgYG1hcHBlcih0aGlzLnZhbHVlKWApLCBhbmQgaWYgdGhpcyAqKmRvZXMgbm90KiogY29udGFpbiBhIHZhbHVlXG4gICAqIHRoZW4gbmVpdGhlciB3aWxsIHRoZSBvdXRwdXQuXG4gICAqL1xuICBwdWJsaWMgbWFwPFU+KG1hcHBlcjogKHZhbHVlOiBUKSA9PiBVKTogT3B0aW9uYWw8VT4ge1xuICAgIGlmICh0aGlzLnRhZykge1xuICAgICAgcmV0dXJuIE9wdGlvbmFsLnNvbWUobWFwcGVyKHRoaXMudmFsdWUgYXMgVCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gT3B0aW9uYWwubm9uZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIC0tLSBNb25hZCAobmFtZSBzdG9sZW4gZnJvbSBIYXNrZWxsIC8gbWF0aHMpIC0tLVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtIGEgdHJhbnNmb3JtIG9uIGFuIGBPcHRpb25hbGAgb2JqZWN0LCAqKmlmKiogdGhlcmUgaXMgYSB2YWx1ZS5cbiAgICogVW5saWtlIGBtYXBgLCBoZXJlIHRoZSB0cmFuc2Zvcm0gaXRzZWxmIGFsc28gcmV0dXJucyBhbiBgT3B0aW9uYWxgLlxuICAgKi9cbiAgcHVibGljIGJpbmQ8VT4oYmluZGVyOiAodmFsdWU6IFQpID0+IE9wdGlvbmFsPFU+KTogT3B0aW9uYWw8VT4ge1xuICAgIGlmICh0aGlzLnRhZykge1xuICAgICAgcmV0dXJuIGJpbmRlcih0aGlzLnZhbHVlIGFzIFQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gT3B0aW9uYWwubm9uZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIC0tLSBUcmF2ZXJzYWJsZSAobmFtZSBzdG9sZW4gZnJvbSBIYXNrZWxsIC8gbWF0aHMpIC0tLVxuXG4gIC8qKlxuICAgKiBGb3IgYSBnaXZlbiBwcmVkaWNhdGUsIHRoaXMgZnVuY3Rpb24gZmluZHMgb3V0IGlmIHRoZXJlICoqZXhpc3RzKiogYSB2YWx1ZVxuICAgKiBpbnNpZGUgdGhpcyBgT3B0aW9uYWxgIG9iamVjdCB0aGF0IG1lZXRzIHRoZSBwcmVkaWNhdGUuIEluIHByYWN0aWNlLCB0aGlzXG4gICAqIG1lYW5zIHRoYXQgZm9yIGBPcHRpb25hbGBzIHRoYXQgZG8gbm90IGNvbnRhaW4gYSB2YWx1ZSBpdCByZXR1cm5zIGZhbHNlIChhc1xuICAgKiBubyBwcmVkaWNhdGUtbWVldGluZyB2YWx1ZSBleGlzdHMpLlxuICAgKi9cbiAgcHVibGljIGV4aXN0cyhwcmVkaWNhdGU6ICh2YWx1ZTogVCkgPT4gYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnRhZyAmJiBwcmVkaWNhdGUodGhpcy52YWx1ZSBhcyBUKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3IgYSBnaXZlbiBwcmVkaWNhdGUsIHRoaXMgZnVuY3Rpb24gZmluZHMgb3V0IGlmICoqYWxsKiogdGhlIHZhbHVlcyBpbnNpZGVcbiAgICogdGhpcyBgT3B0aW9uYWxgIG9iamVjdCBtZWV0IHRoZSBwcmVkaWNhdGUuIEluIHByYWN0aWNlLCB0aGlzIG1lYW5zIHRoYXRcbiAgICogZm9yIGBPcHRpb25hbGBzIHRoYXQgZG8gbm90IGNvbnRhaW4gYSB2YWx1ZSBpdCByZXR1cm5zIHRydWUgKGFzIGFsbCAwXG4gICAqIG9iamVjdHMgZG8gbWVldCB0aGUgcHJlZGljYXRlKS5cbiAgICovXG4gIHB1YmxpYyBmb3JhbGwocHJlZGljYXRlOiAodmFsdWU6IFQpID0+IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMudGFnIHx8IHByZWRpY2F0ZSh0aGlzLnZhbHVlIGFzIFQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvciBhIGdpdmVuIHByZWRpY2F0ZSwgY3JlYXRlIGEgbmV3IGBPcHRpb25hbGAgb2JqZWN0IHRoYXQgd2lsbCByZXRhaW5cbiAgICogYWxsIHRoZSB2YWx1ZXMgaW5zaWRlIHRoZSBvbGQgYE9wdGlvbmFsYCBvYmplY3QgdGhhdCBtZWV0IHRoZSBwcmVkaWNhdGUuXG4gICAqIEluIHByYWN0aWNlLCB0aGUgYE9wdGlvbmFsYCBvYmplY3QgY29udGFpbnMgZWl0aGVyIDAgb3IgMSBvYmplY3RzLCBhbmRcbiAgICogdGhlIG91dHB1dCB3aWxsIGtlZXAgdGhlIChzaW5nbGUpIGlucHV0IG9iamVjdCAoaWYgaXQgZXhpc3RzKSBhcyBsb25nIGFzXG4gICAqIGl0IHBhc3NlcyB0aGUgcHJlZGljYXRlLlxuICAgKi9cbiAgcHVibGljIGZpbHRlcjxVIGV4dGVuZHMgVD4ocHJlZGljYXRlOiAodmFsdWU6IFQpID0+IHZhbHVlIGlzIFUpOiBPcHRpb25hbDxVPjtcbiAgcHVibGljIGZpbHRlcihwcmVkaWNhdGU6ICh2YWx1ZTogVCkgPT4gYm9vbGVhbik6IE9wdGlvbmFsPFQ+O1xuICBwdWJsaWMgZmlsdGVyKHByZWRpY2F0ZTogKHZhbHVlOiBUKSA9PiBib29sZWFuKTogT3B0aW9uYWw8VD4ge1xuICAgIGlmICghdGhpcy50YWcgfHwgcHJlZGljYXRlKHRoaXMudmFsdWUgYXMgVCkpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gT3B0aW9uYWwubm9uZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIC0tLSBHZXR0ZXJzIC0tLVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHZhbHVlIG91dCBvZiB0aGUgaW5zaWRlIG9mIHRoZSBgT3B0aW9uYWxgIG9iamVjdCwgdXNpbmcgYSBkZWZhdWx0XG4gICAqIGByZXBsYWNlbWVudGAgdmFsdWUgaWYgdGhlIHByb3ZpZGVkIGBPcHRpb25hbGAgb2JqZWN0IGRvZXMgbm90IGNvbnRhaW4gYVxuICAgKiB2YWx1ZS5cbiAgICovXG4gIHB1YmxpYyBnZXRPcjxVID0gVD4ocmVwbGFjZW1lbnQ6IFUpOiBUIHwgVSB7XG4gICAgcmV0dXJuIHRoaXMudGFnID8gdGhpcy52YWx1ZSBhcyBUIDogcmVwbGFjZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB2YWx1ZSBvdXQgb2YgdGhlIGluc2lkZSBvZiB0aGUgYE9wdGlvbmFsYCBvYmplY3QsIHVzaW5nIGEgZGVmYXVsdFxuICAgKiBgcmVwbGFjZW1lbnRgIHZhbHVlIGlmIHRoZSBwcm92aWRlZCBgT3B0aW9uYWxgIG9iamVjdCBkb2VzIG5vdCBjb250YWluIGFcbiAgICogdmFsdWUuICBVbmxpa2UgYGdldE9yYCwgaW4gdGhpcyBtZXRob2QgdGhlIGByZXBsYWNlbWVudGAgb2JqZWN0IGlzIGFsc29cbiAgICogYE9wdGlvbmFsYCAtIG1lYW5pbmcgdGhhdCB0aGlzIG1ldGhvZCB3aWxsIGFsd2F5cyByZXR1cm4gYW4gYE9wdGlvbmFsYC5cbiAgICovXG4gIHB1YmxpYyBvcjxVID0gVD4ocmVwbGFjZW1lbnQ6IE9wdGlvbmFsPFU+KTogT3B0aW9uYWw8VCB8IFU+IHtcbiAgICByZXR1cm4gdGhpcy50YWcgPyB0aGlzIDogcmVwbGFjZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB2YWx1ZSBvdXQgb2YgdGhlIGluc2lkZSBvZiB0aGUgYE9wdGlvbmFsYCBvYmplY3QsIHVzaW5nIGEgZGVmYXVsdFxuICAgKiBgcmVwbGFjZW1lbnRgIHZhbHVlIGlmIHRoZSBwcm92aWRlZCBgT3B0aW9uYWxgIG9iamVjdCBkb2VzIG5vdCBjb250YWluIGFcbiAgICogdmFsdWUuIFVubGlrZSBgZ2V0T3JgLCBpbiB0aGlzIG1ldGhvZCB0aGUgYHJlcGxhY2VtZW50YCB2YWx1ZSBpc1xuICAgKiBcInRodW5rZWRcIiAtIHRoYXQgaXMgdG8gc2F5IHRoYXQgeW91IGRvbid0IHBhc3MgYSB2YWx1ZSB0byBgZ2V0T3JUaHVua2AsIHlvdVxuICAgKiBwYXNzIGEgZnVuY3Rpb24gd2hpY2ggKGlmIGNhbGxlZCkgd2lsbCAqKnJldHVybioqIHRoZSBgdmFsdWVgIHlvdSB3YW50IHRvXG4gICAqIHVzZS5cbiAgICovXG4gIHB1YmxpYyBnZXRPclRodW5rPFUgPSBUPih0aHVuazogKCkgPT4gVSk6IFQgfCBVIHtcbiAgICByZXR1cm4gdGhpcy50YWcgPyB0aGlzLnZhbHVlIGFzIFQgOiB0aHVuaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdmFsdWUgb3V0IG9mIHRoZSBpbnNpZGUgb2YgdGhlIGBPcHRpb25hbGAgb2JqZWN0LCB1c2luZyBhIGRlZmF1bHRcbiAgICogYHJlcGxhY2VtZW50YCB2YWx1ZSBpZiB0aGUgcHJvdmlkZWQgT3B0aW9uYWwgb2JqZWN0IGRvZXMgbm90IGNvbnRhaW4gYVxuICAgKiB2YWx1ZS5cbiAgICpcbiAgICogVW5saWtlIGBvcmAsIGluIHRoaXMgbWV0aG9kIHRoZSBgcmVwbGFjZW1lbnRgIHZhbHVlIGlzIFwidGh1bmtlZFwiIC0gdGhhdCBpc1xuICAgKiB0byBzYXkgdGhhdCB5b3UgZG9uJ3QgcGFzcyBhIHZhbHVlIHRvIGBvclRodW5rYCwgeW91IHBhc3MgYSBmdW5jdGlvbiB3aGljaFxuICAgKiAoaWYgY2FsbGVkKSB3aWxsICoqcmV0dXJuKiogdGhlIGB2YWx1ZWAgeW91IHdhbnQgdG8gdXNlLlxuICAgKlxuICAgKiBVbmxpa2UgYGdldE9yVGh1bmtgLCBpbiB0aGlzIG1ldGhvZCB0aGUgYHJlcGxhY2VtZW50YCB2YWx1ZSBpcyBhbHNvXG4gICAqIGBPcHRpb25hbGAsIG1lYW5pbmcgdGhhdCB0aGlzIG1ldGhvZCB3aWxsIGFsd2F5cyByZXR1cm4gYW4gYE9wdGlvbmFsYC5cbiAgICovXG4gIHB1YmxpYyBvclRodW5rPFUgPSBUPih0aHVuazogKCkgPT4gT3B0aW9uYWw8VT4pOiBPcHRpb25hbDxUIHwgVT4ge1xuICAgIHJldHVybiB0aGlzLnRhZyA/IHRoaXMgOiB0aHVuaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdmFsdWUgb3V0IG9mIHRoZSBpbnNpZGUgb2YgdGhlIGBPcHRpb25hbGAgb2JqZWN0LCB0aHJvd2luZyBhblxuICAgKiBleGNlcHRpb24gaWYgdGhlIHByb3ZpZGVkIGBPcHRpb25hbGAgb2JqZWN0IGRvZXMgbm90IGNvbnRhaW4gYSB2YWx1ZS5cbiAgICpcbiAgICogV0FSTklORzpcbiAgICogWW91IHNob3VsZCBvbmx5IGJlIHVzaW5nIHRoaXMgZnVuY3Rpb24gaWYgeW91IGtub3cgdGhhdCB0aGUgYE9wdGlvbmFsYFxuICAgKiBvYmplY3QgKippcyBub3QqKiBlbXB0eSAob3RoZXJ3aXNlIHlvdSdyZSB0aHJvd2luZyBleGNlcHRpb25zIGluIHByb2R1Y3Rpb25cbiAgICogY29kZSwgd2hpY2ggaXMgYmFkKS5cbiAgICpcbiAgICogSW4gdGVzdHMgdGhpcyBpcyBtb3JlIGFjY2VwdGFibGUuXG4gICAqXG4gICAqIFByZWZlciBvdGhlciBtZXRob2RzIHRvIHRoaXMsIHN1Y2ggYXMgYC5lYWNoYC5cbiAgICovXG4gIHB1YmxpYyBnZXRPckRpZShtZXNzYWdlPzogc3RyaW5nKTogVCB7XG4gICAgaWYgKCF0aGlzLnRhZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UgPz8gJ0NhbGxlZCBnZXRPckRpZSBvbiBOb25lJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlIGFzIFQ7XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tIEludGVyb3Agd2l0aCBudWxsIGFuZCB1bmRlZmluZWQgLS0tXG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gYE9wdGlvbmFsYCB2YWx1ZSBmcm9tIGEgbnVsbGFibGUgKG9yIHVuZGVmaW5lZC1hYmxlKSBpbnB1dC5cbiAgICogTnVsbCwgb3IgdW5kZWZpbmVkLCBpcyBjb252ZXJ0ZWQgdG8gYE5vbmVgLCBhbmQgYW55dGhpbmcgZWxzZSBpcyBjb252ZXJ0ZWRcbiAgICogdG8gYFNvbWVgLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBmcm9tPFQ+KHRoaXM6IHZvaWQsIHZhbHVlOiBUIHwgbnVsbCB8IHVuZGVmaW5lZCk6IE9wdGlvbmFsPE5vbk51bGxhYmxlPFQ+PiB7XG4gICAgcmV0dXJuIFR5cGUuaXNOb25OdWxsYWJsZSh2YWx1ZSkgPyBPcHRpb25hbC5zb21lKHZhbHVlKSA6IE9wdGlvbmFsLm5vbmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhbiBgT3B0aW9uYWxgIHRvIGEgbnVsbGFibGUgdHlwZSwgYnkgZ2V0dGluZyB0aGUgdmFsdWUgaWYgaXRcbiAgICogZXhpc3RzLCBvciByZXR1cm5pbmcgYG51bGxgIGlmIGl0IGRvZXMgbm90LlxuICAgKi9cbiAgcHVibGljIGdldE9yTnVsbCgpOiBUIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMudGFnID8gdGhpcy52YWx1ZSBhcyBUIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhbiBgT3B0aW9uYWxgIHRvIGFuIHVuZGVmaW5lZC1hYmxlIHR5cGUsIGJ5IGdldHRpbmcgdGhlIHZhbHVlIGlmXG4gICAqIGl0IGV4aXN0cywgb3IgcmV0dXJuaW5nIGB1bmRlZmluZWRgIGlmIGl0IGRvZXMgbm90LlxuICAgKi9cbiAgcHVibGljIGdldE9yVW5kZWZpbmVkKCk6IFQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG5cbiAgLy8gLS0tIFV0aWxpdGllcyAtLS1cblxuICAvKipcbiAgICogSWYgdGhlIGBPcHRpb25hbGAgY29udGFpbnMgYSB2YWx1ZSwgcGVyZm9ybSBhbiBhY3Rpb24gb24gdGhhdCB2YWx1ZS5cbiAgICogVW5saWtlIHRoZSByZXN0IG9mIHRoZSBtZXRob2RzIG9uIHRoaXMgdHlwZSwgYC5lYWNoYCBoYXMgc2lkZS1lZmZlY3RzLiBJZlxuICAgKiB5b3Ugd2FudCB0byB0cmFuc2Zvcm0gYW4gYE9wdGlvbmFsPFQ+YCAqKmludG8qKiBzb21ldGhpbmcsIHRoZW4gdGhpcyBpcyBub3RcbiAgICogdGhlIG1ldGhvZCBmb3IgeW91LiBJZiB5b3Ugd2FudCB0byB1c2UgYW4gYE9wdGlvbmFsPFQ+YCB0byAqKmRvKipcbiAgICogc29tZXRoaW5nLCB0aGVuIHRoaXMgaXMgdGhlIG1ldGhvZCBmb3IgeW91IC0gcHJvdmlkZWQgeW91J3JlIG9rYXkgd2l0aCBub3RcbiAgICogZG9pbmcgYW55dGhpbmcgaW4gdGhlIGNhc2Ugd2hlcmUgdGhlIGBPcHRpb25hbGAgZG9lc24ndCBoYXZlIGEgdmFsdWUgaW5zaWRlXG4gICAqIGl0LiBJZiB5b3UncmUgbm90IHN1cmUgd2hldGhlciB5b3VyIHVzZS1jYXNlIGZpdHMgaW50byB0cmFuc2Zvcm1pbmdcbiAgICogKippbnRvKiogc29tZXRoaW5nIG9yICoqZG9pbmcqKiBzb21ldGhpbmcsIGNoZWNrIHdoZXRoZXIgaXQgaGFzIGEgcmV0dXJuXG4gICAqIHZhbHVlLiBJZiBpdCBkb2VzLCB5b3Ugc2hvdWxkIGJlIHBlcmZvcm1pbmcgYSB0cmFuc2Zvcm0uXG4gICAqL1xuICBwdWJsaWMgZWFjaCh3b3JrZXI6ICh2YWx1ZTogVCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnRhZykge1xuICAgICAgd29ya2VyKHRoaXMudmFsdWUgYXMgVCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFR1cm4gdGhlIGBPcHRpb25hbGAgb2JqZWN0IGludG8gYW4gYXJyYXkgdGhhdCBjb250YWlucyBhbGwgb2YgdGhlIHZhbHVlc1xuICAgKiBzdG9yZWQgaW5zaWRlIHRoZSBgT3B0aW9uYWxgLiBJbiBwcmFjdGljZSwgdGhpcyBtZWFucyB0aGUgb3V0cHV0IHdpbGwgaGF2ZVxuICAgKiBlaXRoZXIgMCBvciAxIGVsZW1lbnRzLlxuICAgKi9cbiAgcHVibGljIHRvQXJyYXkoKTogVFtdIHtcbiAgICByZXR1cm4gdGhpcy50YWcgPyBbIHRoaXMudmFsdWUgYXMgVCBdIDogW107XG4gIH1cblxuICAvKipcbiAgICogVHVybiB0aGUgYE9wdGlvbmFsYCBvYmplY3QgaW50byBhIHN0cmluZyBmb3IgZGVidWdnaW5nIG9yIHByaW50aW5nLiBOb3RcbiAgICogcmVjb21tZW5kZWQgZm9yIHByb2R1Y3Rpb24gY29kZSwgYnV0IGdvb2QgZm9yIGRlYnVnZ2luZy4gQWxzbyBub3RlIHRoYXRcbiAgICogdGhlc2UgZGF5cyBhbiBgT3B0aW9uYWxgIG9iamVjdCBjYW4gYmUgbG9nZ2VkIHRvIHRoZSBjb25zb2xlIGRpcmVjdGx5LCBhbmRcbiAgICogaXRzIGlubmVyIHZhbHVlIChpZiBpdCBleGlzdHMpIHdpbGwgYmUgdmlzaWJsZS5cbiAgICovXG4gIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnRhZyA/IGBzb21lKCR7dGhpcy52YWx1ZX0pYCA6ICdub25lKCknO1xuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBTdHJBcHBlbmQgZnJvbSAnLi4vc3RyL1N0ckFwcGVuZCc7XG5cbmltcG9ydCB7IE9wdGlvbmFsIH0gZnJvbSAnLi9PcHRpb25hbCc7XG5pbXBvcnQgKiBhcyBUeXBlIGZyb20gJy4vVHlwZSc7XG5cbmNvbnN0IGNoZWNrUmFuZ2UgPSAoc3RyOiBzdHJpbmcsIHN1YnN0cjogc3RyaW5nLCBzdGFydDogbnVtYmVyKTogYm9vbGVhbiA9PlxuICBzdWJzdHIgPT09ICcnIHx8IHN0ci5sZW5ndGggPj0gc3Vic3RyLmxlbmd0aCAmJiBzdHIuc3Vic3RyKHN0YXJ0LCBzdGFydCArIHN1YnN0ci5sZW5ndGgpID09PSBzdWJzdHI7XG5cbi8qKiBHaXZlbiBhIHN0cmluZyBhbmQgb2JqZWN0LCBwZXJmb3JtIHRlbXBsYXRlLXJlcGxhY2VtZW50cyBvbiB0aGUgc3RyaW5nLCBhcyBzcGVjaWZpZWQgYnkgdGhlIG9iamVjdC5cbiAqIEFueSB0ZW1wbGF0ZSBmaWVsZHMgb2YgdGhlIGZvcm0gJHtuYW1lfSBhcmUgcmVwbGFjZWQgYnkgdGhlIHN0cmluZyBvciBudW1iZXIgc3BlY2lmaWVkIGFzIG9ialtcIm5hbWVcIl1cbiAqIEJhc2VkIG9uIERvdWdsYXMgQ3JvY2tmb3JkJ3MgJ3N1cHBsYW50JyBtZXRob2QgZm9yIHRlbXBsYXRlLXJlcGxhY2Ugb2Ygc3RyaW5ncy4gVXNlcyBkaWZmZXJlbnQgdGVtcGxhdGUgZm9ybWF0LlxuICovXG5leHBvcnQgY29uc3Qgc3VwcGxhbnQgPSAoc3RyOiBzdHJpbmcsIG9iajogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVtYmVyPik6IHN0cmluZyA9PiB7XG4gIGNvbnN0IGlzU3RyaW5nT3JOdW1iZXIgPSAoYTogdW5rbm93bik6IGEgaXMgc3RyaW5nIHwgbnVtYmVyID0+IHtcbiAgICBjb25zdCB0ID0gdHlwZW9mIGE7XG4gICAgcmV0dXJuIHQgPT09ICdzdHJpbmcnIHx8IHQgPT09ICdudW1iZXInO1xuICB9O1xuXG4gIHJldHVybiBzdHIucmVwbGFjZSgvXFwkXFx7KFtee31dKilcXH0vZyxcbiAgICAoZnVsbE1hdGNoOiBzdHJpbmcsIGtleTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IG9ialtrZXldO1xuICAgICAgcmV0dXJuIGlzU3RyaW5nT3JOdW1iZXIodmFsdWUpID8gdmFsdWUudG9TdHJpbmcoKSA6IGZ1bGxNYXRjaDtcbiAgICB9XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlTGVhZGluZyA9IChzdHI6IHN0cmluZywgcHJlZml4OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gc3RhcnRzV2l0aChzdHIsIHByZWZpeCkgPyBTdHJBcHBlbmQucmVtb3ZlRnJvbVN0YXJ0KHN0ciwgcHJlZml4Lmxlbmd0aCkgOiBzdHI7XG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlVHJhaWxpbmcgPSAoc3RyOiBzdHJpbmcsIHN1ZmZpeDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIGVuZHNXaXRoKHN0ciwgc3VmZml4KSA/IFN0ckFwcGVuZC5yZW1vdmVGcm9tRW5kKHN0ciwgc3VmZml4Lmxlbmd0aCkgOiBzdHI7XG59O1xuXG5leHBvcnQgY29uc3QgZW5zdXJlTGVhZGluZyA9IChzdHI6IHN0cmluZywgcHJlZml4OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gc3RhcnRzV2l0aChzdHIsIHByZWZpeCkgPyBzdHIgOiBTdHJBcHBlbmQuYWRkVG9TdGFydChzdHIsIHByZWZpeCk7XG59O1xuXG5leHBvcnQgY29uc3QgZW5zdXJlVHJhaWxpbmcgPSAoc3RyOiBzdHJpbmcsIHN1ZmZpeDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIGVuZHNXaXRoKHN0ciwgc3VmZml4KSA/IHN0ciA6IFN0ckFwcGVuZC5hZGRUb0VuZChzdHIsIHN1ZmZpeCk7XG59O1xuXG5leHBvcnQgY29uc3QgY29udGFpbnMgPSAoc3RyOiBzdHJpbmcsIHN1YnN0cjogc3RyaW5nLCBzdGFydDogbnVtYmVyID0gMCwgZW5kPzogbnVtYmVyKTogYm9vbGVhbiA9PiB7XG4gIGNvbnN0IGlkeCA9IHN0ci5pbmRleE9mKHN1YnN0ciwgc3RhcnQpO1xuICBpZiAoaWR4ICE9PSAtMSkge1xuICAgIHJldHVybiBUeXBlLmlzVW5kZWZpbmVkKGVuZCkgPyB0cnVlIDogaWR4ICsgc3Vic3RyLmxlbmd0aCA8PSBlbmQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgY2FwaXRhbGl6ZSA9IChzdHI6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBzdHIgPT09ICcnID8gJycgOiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc3Vic3RyaW5nKDEpO1xufTtcblxuLyoqIERvZXMgJ3N0cicgc3RhcnQgd2l0aCAncHJlZml4Jz9cbiAqICBOb3RlOiBhbGwgc3RyaW5ncyBzdGFydCB3aXRoIHRoZSBlbXB0eSBzdHJpbmcuXG4gKiAgICAgICAgTW9yZSBmb3JtYWxseSwgZm9yIGFsbCBzdHJpbmdzIHgsIHN0YXJ0c1dpdGgoeCwgXCJcIikuXG4gKiAgICAgICAgVGhpcyBpcyBzbyB0aGF0IGZvciBhbGwgc3RyaW5ncyB4IGFuZCB5LCBzdGFydHNXaXRoKHkgKyB4LCB5KVxuICovXG5leHBvcnQgY29uc3Qgc3RhcnRzV2l0aCA9IChzdHI6IHN0cmluZywgcHJlZml4OiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgcmV0dXJuIGNoZWNrUmFuZ2Uoc3RyLCBwcmVmaXgsIDApO1xufTtcblxuLyoqIERvZXMgJ3N0cicgZW5kIHdpdGggJ3N1ZmZpeCc/XG4gKiAgTm90ZTogYWxsIHN0cmluZ3MgZW5kIHdpdGggdGhlIGVtcHR5IHN0cmluZy5cbiAqICAgICAgICBNb3JlIGZvcm1hbGx5LCBmb3IgYWxsIHN0cmluZ3MgeCwgZW5kc1dpdGgoeCwgXCJcIikuXG4gKiAgICAgICAgVGhpcyBpcyBzbyB0aGF0IGZvciBhbGwgc3RyaW5ncyB4IGFuZCB5LCBlbmRzV2l0aCh4ICsgeSwgeSlcbiAqL1xuZXhwb3J0IGNvbnN0IGVuZHNXaXRoID0gKHN0cjogc3RyaW5nLCBzdWZmaXg6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gY2hlY2tSYW5nZShzdHIsIHN1ZmZpeCwgc3RyLmxlbmd0aCAtIHN1ZmZpeC5sZW5ndGgpO1xufTtcblxuY29uc3QgYmxhbmsgPSAocjogUmVnRXhwKSA9PiAoczogc3RyaW5nKTogc3RyaW5nID0+XG4gIHMucmVwbGFjZShyLCAnJyk7XG5cbi8qKiByZW1vdmVzIGFsbCBsZWFkaW5nIGFuZCB0cmFpbGluZyBzcGFjZXMgKi9cbmV4cG9ydCBjb25zdCB0cmltOiAoczogc3RyaW5nKSA9PiBzdHJpbmcgPVxuICBibGFuaygvXlxccyt8XFxzKyQvZyk7XG5cbmV4cG9ydCBjb25zdCBsVHJpbTogKHM6IHN0cmluZykgPT4gc3RyaW5nID1cbiAgYmxhbmsoL15cXHMrL2cpO1xuXG5leHBvcnQgY29uc3QgclRyaW06IChzOiBzdHJpbmcpID0+IHN0cmluZyA9XG4gIGJsYW5rKC9cXHMrJC9nKTtcblxuZXhwb3J0IGNvbnN0IGlzTm90RW1wdHkgPSAoczogc3RyaW5nKTogYm9vbGVhbiA9PiBzLmxlbmd0aCA+IDA7XG5cbmV4cG9ydCBjb25zdCBpc0VtcHR5ID0gKHM6IHN0cmluZyk6IGJvb2xlYW4gPT4gIWlzTm90RW1wdHkocyk7XG5cbmV4cG9ydCBjb25zdCByZXBlYXQgPSAoczogc3RyaW5nLCBjb3VudDogbnVtYmVyKTogc3RyaW5nID0+IGNvdW50IDw9IDAgPyAnJyA6IG5ldyBBcnJheShjb3VudCArIDEpLmpvaW4ocyk7XG5cbmV4cG9ydCBjb25zdCBmcm9tQ29kZVBvaW50ID0gU3RyaW5nLmZyb21Db2RlUG9pbnQ7XG5cbmV4cG9ydCBjb25zdCB0b0ludCA9ICh2YWx1ZTogc3RyaW5nLCByYWRpeDogbnVtYmVyID0gMTApOiBPcHRpb25hbDxudW1iZXI+ID0+IHtcbiAgY29uc3QgbnVtID0gcGFyc2VJbnQodmFsdWUsIHJhZGl4KTtcbiAgcmV0dXJuIGlzTmFOKG51bSkgPyBPcHRpb25hbC5ub25lKCkgOiBPcHRpb25hbC5zb21lKG51bSk7XG59O1xuXG5leHBvcnQgY29uc3QgdG9GbG9hdCA9ICh2YWx1ZTogc3RyaW5nKTogT3B0aW9uYWw8bnVtYmVyPiA9PiB7XG4gIGNvbnN0IG51bSA9IHBhcnNlRmxvYXQodmFsdWUpO1xuICByZXR1cm4gaXNOYU4obnVtKSA/IE9wdGlvbmFsLm5vbmUoKSA6IE9wdGlvbmFsLnNvbWUobnVtKTtcbn07XG4iLCJpbXBvcnQgKiBhcyBUeXBlIGZyb20gJy4vVHlwZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGhyb3R0bGVyPEEgZXh0ZW5kcyBhbnlbXT4ge1xuICByZWFkb25seSBjYW5jZWw6ICgpID0+IHZvaWQ7XG4gIHJlYWRvbmx5IHRocm90dGxlOiAoLi4uYXJnczogQSkgPT4gdm9pZDtcbn1cblxuLy8gUnVuIGEgZnVuY3Rpb24gZm4gYWZ0ZXIgcmF0ZSBtcy4gSWYgYW5vdGhlciBpbnZvY2F0aW9uIG9jY3Vyc1xuLy8gZHVyaW5nIHRoZSB0aW1lIGl0IGlzIHdhaXRpbmcsIHVwZGF0ZSB0aGUgYXJndW1lbnRzIGYgd2lsbCBydW5cbi8vIHdpdGggKGJ1dCBrZWVwIHRoZSBjdXJyZW50IHNjaGVkdWxlKVxuZXhwb3J0IGNvbnN0IGFkYXB0YWJsZSA9IDxBIGV4dGVuZHMgYW55W10+KGZuOiAoLi4uYTogQSkgPT4gdm9pZCwgcmF0ZTogbnVtYmVyKTogVGhyb3R0bGVyPEE+ID0+IHtcbiAgbGV0IHRpbWVyOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgbGV0IGFyZ3M6IEEgfCBudWxsID0gbnVsbDtcbiAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgIGlmICghVHlwZS5pc051bGwodGltZXIpKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgdGltZXIgPSBudWxsO1xuICAgICAgYXJncyA9IG51bGw7XG4gICAgfVxuICB9O1xuICBjb25zdCB0aHJvdHRsZSA9ICguLi5uZXdBcmdzOiBBKSA9PiB7XG4gICAgYXJncyA9IG5ld0FyZ3M7XG4gICAgaWYgKFR5cGUuaXNOdWxsKHRpbWVyKSkge1xuICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgdGVtcEFyZ3MgPSBhcmdzO1xuICAgICAgICB0aW1lciA9IG51bGw7XG4gICAgICAgIGFyZ3MgPSBudWxsO1xuICAgICAgICBmbi5hcHBseShudWxsLCB0ZW1wQXJncyBhcyBBKTtcbiAgICAgIH0sIHJhdGUpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGNhbmNlbCxcbiAgICB0aHJvdHRsZVxuICB9O1xufTtcblxuLy8gUnVuIGEgZnVuY3Rpb24gZm4gYWZ0ZXIgcmF0ZSBtcy4gSWYgYW5vdGhlciBpbnZvY2F0aW9uIG9jY3Vyc1xuLy8gZHVyaW5nIHRoZSB0aW1lIGl0IGlzIHdhaXRpbmcsIGlnbm9yZSBpdCBjb21wbGV0ZWx5LlxuZXhwb3J0IGNvbnN0IGZpcnN0ID0gPEEgZXh0ZW5kcyBhbnlbXT4oZm46ICguLi5hOiBBKSA9PiB2b2lkLCByYXRlOiBudW1iZXIpOiBUaHJvdHRsZXI8QT4gPT4ge1xuICBsZXQgdGltZXI6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgaWYgKCFUeXBlLmlzTnVsbCh0aW1lcikpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICB0aW1lciA9IG51bGw7XG4gICAgfVxuICB9O1xuICBjb25zdCB0aHJvdHRsZSA9ICguLi5hcmdzOiBBKSA9PiB7XG4gICAgaWYgKFR5cGUuaXNOdWxsKHRpbWVyKSkge1xuICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGltZXIgPSBudWxsO1xuICAgICAgICBmbi5hcHBseShudWxsLCBhcmdzKTtcbiAgICAgIH0sIHJhdGUpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGNhbmNlbCxcbiAgICB0aHJvdHRsZVxuICB9O1xufTtcblxuLy8gUnVuIGEgZnVuY3Rpb24gZm4gYWZ0ZXIgcmF0ZSBtcy4gSWYgYW5vdGhlciBpbnZvY2F0aW9uIG9jY3Vyc1xuLy8gZHVyaW5nIHRoZSB0aW1lIGl0IGlzIHdhaXRpbmcsIHJlc2NoZWR1bGUgdGhlIGZ1bmN0aW9uIGFnYWluXG4vLyB3aXRoIHRoZSBuZXcgYXJndW1lbnRzLlxuZXhwb3J0IGNvbnN0IGxhc3QgPSA8QSBleHRlbmRzIGFueVtdPihmbjogKC4uLmE6IEEpID0+IHZvaWQsIHJhdGU6IG51bWJlcik6IFRocm90dGxlcjxBPiA9PiB7XG4gIGxldCB0aW1lcjogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICBpZiAoIVR5cGUuaXNOdWxsKHRpbWVyKSkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgIHRpbWVyID0gbnVsbDtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHRocm90dGxlID0gKC4uLmFyZ3M6IEEpID0+IHtcbiAgICBjYW5jZWwoKTtcbiAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGltZXIgPSBudWxsO1xuICAgICAgZm4uYXBwbHkobnVsbCwgYXJncyk7XG4gICAgfSwgcmF0ZSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBjYW5jZWwsXG4gICAgdGhyb3R0bGVcbiAgfTtcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8td3JhcHBlci1vYmplY3QtdHlwZXMgKi9cbmNvbnN0IGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuXG5pbnRlcmZhY2UgQ29uc3RydWN0b3I8VCBleHRlbmRzIE9iamVjdD4ge1xuICByZWFkb25seSBwcm90b3R5cGU6IFQ7XG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbn1cblxuY29uc3QgaGFzUHJvdG8gPSA8VCBleHRlbmRzIE9iamVjdD4odjogT2JqZWN0LCBjb25zdHJ1Y3RvcjogQ29uc3RydWN0b3I8VD4sIHByZWRpY2F0ZTogKHY6IE9iamVjdCwgcHJvdG90eXBlOiBUKSA9PiBib29sZWFuKTogYm9vbGVhbiA9PiB7XG4gIGlmIChwcmVkaWNhdGUodiwgY29uc3RydWN0b3IucHJvdG90eXBlKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIC8vIFN0cmluZy1iYXNlZCBmYWxsYmFjayB0aW1lXG4gICAgcmV0dXJuIHYuY29uc3RydWN0b3I/Lm5hbWUgPT09IGNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cbn07XG5cbmNvbnN0IHR5cGVPZiA9ICh4OiBhbnkpOiBzdHJpbmcgPT4ge1xuICBjb25zdCB0ID0gdHlwZW9mIHg7XG4gIGlmICh4ID09PSBudWxsKSB7XG4gICAgcmV0dXJuICdudWxsJztcbiAgfSBlbHNlIGlmICh0ID09PSAnb2JqZWN0JyAmJiBBcnJheS5pc0FycmF5KHgpKSB7XG4gICAgcmV0dXJuICdhcnJheSc7XG4gIH0gZWxzZSBpZiAodCA9PT0gJ29iamVjdCcgJiYgaGFzUHJvdG8oeCwgU3RyaW5nLCAobywgcHJvdG8pID0+IHByb3RvLmlzUHJvdG90eXBlT2YobykpKSB7XG4gICAgcmV0dXJuICdzdHJpbmcnO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0O1xuICB9XG59O1xuXG5jb25zdCBpc1R5cGUgPSA8WW9sbz4odHlwZTogc3RyaW5nKSA9PiAodmFsdWU6IGFueSk6IHZhbHVlIGlzIFlvbG8gPT5cbiAgdHlwZU9mKHZhbHVlKSA9PT0gdHlwZTtcblxuY29uc3QgaXNTaW1wbGVUeXBlID0gPFlvbG8+KHR5cGU6IHN0cmluZykgPT4gKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBZb2xvID0+XG4gIHR5cGVvZiB2YWx1ZSA9PT0gdHlwZTtcblxuY29uc3QgZXEgPSA8VD4gKHQ6IFQpID0+IChhOiBhbnkpOiBhIGlzIFQgPT5cbiAgdCA9PT0gYTtcblxuZXhwb3J0IGNvbnN0IGlzID0gPEUgZXh0ZW5kcyBPYmplY3Q+KHZhbHVlOiBhbnksIGNvbnN0cnVjdG9yOiBDb25zdHJ1Y3RvcjxFPik6IHZhbHVlIGlzIEUgPT5cbiAgaXNPYmplY3QodmFsdWUpICYmIGhhc1Byb3RvPEU+KHZhbHVlLCBjb25zdHJ1Y3RvciwgKG8sIHByb3RvKSA9PiBnZXRQcm90b3R5cGVPZihvKSA9PT0gcHJvdG8pO1xuXG5leHBvcnQgY29uc3QgaXNTdHJpbmc6ICh2YWx1ZTogYW55KSA9PiB2YWx1ZSBpcyBzdHJpbmcgPVxuICBpc1R5cGUoJ3N0cmluZycpO1xuXG5leHBvcnQgY29uc3QgaXNPYmplY3Q6ICh2YWx1ZTogYW55KSA9PiB2YWx1ZSBpcyBPYmplY3QgPVxuICBpc1R5cGUoJ29iamVjdCcpO1xuXG5leHBvcnQgY29uc3QgaXNQbGFpbk9iamVjdCA9ICh2YWx1ZTogdW5rbm93bik6IHZhbHVlIGlzIE9iamVjdCA9PlxuICBpcyh2YWx1ZSwgT2JqZWN0KTtcblxuZXhwb3J0IGNvbnN0IGlzQXJyYXk6ICh2YWx1ZTogYW55KSA9PiB2YWx1ZSBpcyBBcnJheTx1bmtub3duPiA9XG4gIGlzVHlwZSgnYXJyYXknKTtcblxuZXhwb3J0IGNvbnN0IGlzTnVsbDogKGE6IGFueSkgPT4gYSBpcyBudWxsID1cbiAgZXEobnVsbCk7XG5cbmV4cG9ydCBjb25zdCBpc0Jvb2xlYW46ICh2YWx1ZTogYW55KSA9PiB2YWx1ZSBpcyBib29sZWFuID1cbiAgaXNTaW1wbGVUeXBlPGJvb2xlYW4+KCdib29sZWFuJyk7XG5cbmV4cG9ydCBjb25zdCBpc1VuZGVmaW5lZDogKGE6IGFueSkgPT4gYSBpcyB1bmRlZmluZWQgPVxuICBlcSh1bmRlZmluZWQpO1xuXG5leHBvcnQgY29uc3QgaXNOdWxsYWJsZSA9IChhOiBhbnkpOiBhIGlzIG51bGwgfCB1bmRlZmluZWQgPT5cbiAgYSA9PT0gbnVsbCB8fCBhID09PSB1bmRlZmluZWQ7XG5cbmV4cG9ydCBjb25zdCBpc05vbk51bGxhYmxlID0gPEE+IChhOiBBIHwgbnVsbCB8IHVuZGVmaW5lZCk6IGEgaXMgTm9uTnVsbGFibGU8QT4gPT5cbiAgIWlzTnVsbGFibGUoYSk7XG5cbmV4cG9ydCBjb25zdCBpc0Z1bmN0aW9uOiAodmFsdWU6IGFueSkgPT4gdmFsdWUgaXMgRnVuY3Rpb24gPVxuICBpc1NpbXBsZVR5cGU8RnVuY3Rpb24+KCdmdW5jdGlvbicpO1xuXG5leHBvcnQgY29uc3QgaXNOdW1iZXI6ICh2YWx1ZTogYW55KSA9PiB2YWx1ZSBpcyBudW1iZXIgPVxuICBpc1NpbXBsZVR5cGU8bnVtYmVyPignbnVtYmVyJyk7XG5cbmV4cG9ydCBjb25zdCBpc0FycmF5T2YgPSA8RT4odmFsdWU6IGFueSwgcHJlZDogKHg6IGFueSkgPT4geCBpcyBFKTogdmFsdWUgaXMgQXJyYXk8RT4gPT4ge1xuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdmFsdWUubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIGlmICghKHByZWQodmFsdWVbaV0pKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc1Byb21pc2VMaWtlID0gKHg6IGFueSk6IHggaXMgUHJvbWlzZTx1bmtub3duPiA9PlxuICBpc09iamVjdCh4KVxuICAmJiBpc0Z1bmN0aW9uKHgudGhlbilcbiAgJiYgaXNGdW5jdGlvbih4LmNhdGNoKTtcbiIsImV4cG9ydCBjb25zdCBhZGRUb1N0YXJ0ID0gKHN0cjogc3RyaW5nLCBwcmVmaXg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBwcmVmaXggKyBzdHI7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkVG9FbmQgPSAoc3RyOiBzdHJpbmcsIHN1ZmZpeDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIHN0ciArIHN1ZmZpeDtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVGcm9tU3RhcnQgPSAoc3RyOiBzdHJpbmcsIG51bUNoYXJzOiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gc3RyLnN1YnN0cmluZyhudW1DaGFycyk7XG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlRnJvbUVuZCA9IChzdHI6IHN0cmluZywgbnVtQ2hhcnM6IG51bWJlcik6IHN0cmluZyA9PiB7XG4gIHJldHVybiBzdHIuc3Vic3RyaW5nKDAsIHN0ci5sZW5ndGggLSBudW1DaGFycyk7XG59O1xuIiwiaW1wb3J0IFBsdWdpbk1hbmFnZXIgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9QbHVnaW5NYW5hZ2VyJztcblxuaW1wb3J0ICogYXMgQXBpIGZyb20gJy4vYXBpL0FwaSc7XG5pbXBvcnQgKiBhcyBDb21tYW5kcyBmcm9tICcuL2FwaS9Db21tYW5kcyc7XG5pbXBvcnQgKiBhcyBPcHRpb25zIGZyb20gJy4vYXBpL09wdGlvbnMnO1xuaW1wb3J0ICogYXMgQ2hhck1hcCBmcm9tICcuL2NvcmUvQ2hhck1hcCc7XG5pbXBvcnQgKiBhcyBBdXRvY29tcGxldGlvbiBmcm9tICcuL3VpL0F1dG9jb21wbGV0aW9uJztcbmltcG9ydCAqIGFzIEJ1dHRvbnMgZnJvbSAnLi91aS9CdXR0b25zJztcblxuZXhwb3J0IGRlZmF1bHQgKCk6IHZvaWQgPT4ge1xuICBQbHVnaW5NYW5hZ2VyLmFkZCgnY2hhcm1hcCcsIChlZGl0b3IpID0+IHtcbiAgICBPcHRpb25zLnJlZ2lzdGVyKGVkaXRvcik7XG4gICAgY29uc3QgY2hhck1hcCA9IENoYXJNYXAuZ2V0Q2hhck1hcChlZGl0b3IpO1xuICAgIENvbW1hbmRzLnJlZ2lzdGVyKGVkaXRvciwgY2hhck1hcCk7XG4gICAgQnV0dG9ucy5yZWdpc3RlcihlZGl0b3IpO1xuXG4gICAgQXV0b2NvbXBsZXRpb24uaW5pdChlZGl0b3IsIGNoYXJNYXBbMF0pO1xuXG4gICAgcmV0dXJuIEFwaS5nZXQoZWRpdG9yKTtcbiAgfSk7XG59O1xuIiwiaW1wb3J0IHR5cGUgRWRpdG9yIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvRWRpdG9yJztcblxuaW1wb3J0ICogYXMgQWN0aW9ucyBmcm9tICcuLi9jb3JlL0FjdGlvbnMnO1xuaW1wb3J0ICogYXMgQ2hhck1hcCBmcm9tICcuLi9jb3JlL0NoYXJNYXAnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFwaSB7XG4gIHJlYWRvbmx5IGdldENoYXJNYXA6ICgpID0+IENoYXJNYXAuQ2hhck1hcFtdO1xuICByZWFkb25seSBpbnNlcnRDaGFyOiAoY2hyOiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmNvbnN0IGdldCA9IChlZGl0b3I6IEVkaXRvcik6IEFwaSA9PiB7XG4gIGNvbnN0IGdldENoYXJNYXAgPSAoKSA9PiB7XG4gICAgcmV0dXJuIENoYXJNYXAuZ2V0Q2hhck1hcChlZGl0b3IpO1xuICB9O1xuXG4gIGNvbnN0IGluc2VydENoYXIgPSAoY2hyOiBzdHJpbmcpID0+IHtcbiAgICBBY3Rpb25zLmluc2VydENoYXIoZWRpdG9yLCBjaHIpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0Q2hhck1hcCxcbiAgICBpbnNlcnRDaGFyXG4gIH07XG59O1xuXG5leHBvcnQge1xuICBnZXRcbn07XG4iLCJpbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuXG5pbXBvcnQgdHlwZSAqIGFzIENoYXJNYXAgZnJvbSAnLi4vY29yZS9DaGFyTWFwJztcbmltcG9ydCAqIGFzIERpYWxvZyBmcm9tICcuLi91aS9EaWFsb2cnO1xuXG50eXBlIENoYXJNYXAgPSBDaGFyTWFwLkNoYXJNYXA7XG5cbmNvbnN0IHJlZ2lzdGVyID0gKGVkaXRvcjogRWRpdG9yLCBjaGFyTWFwOiBDaGFyTWFwW10pOiB2b2lkID0+IHtcbiAgZWRpdG9yLmFkZENvbW1hbmQoJ21jZVNob3dDaGFybWFwJywgKCkgPT4ge1xuICAgIERpYWxvZy5vcGVuKGVkaXRvciwgY2hhck1hcCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHtcbiAgcmVnaXN0ZXJcbn07XG4iLCJpbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuaW1wb3J0IHR5cGUgeyBFZGl0b3JFdmVudCB9IGZyb20gJ3RpbnltY2UvY29yZS9hcGkvdXRpbC9FdmVudERpc3BhdGNoZXInO1xuXG5jb25zdCBmaXJlSW5zZXJ0Q3VzdG9tQ2hhciA9IChlZGl0b3I6IEVkaXRvciwgY2hyOiBzdHJpbmcpOiBFZGl0b3JFdmVudDx7IGNocjogc3RyaW5nIH0+ID0+IHtcbiAgcmV0dXJuIGVkaXRvci5kaXNwYXRjaCgnaW5zZXJ0Q3VzdG9tQ2hhcicsIHsgY2hyIH0pO1xufTtcblxuZXhwb3J0IHtcbiAgZmlyZUluc2VydEN1c3RvbUNoYXJcbn07XG4iLCJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0IHR5cGUgRWRpdG9yIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvRWRpdG9yJztcbmltcG9ydCB0eXBlIHsgRWRpdG9yT3B0aW9ucyB9IGZyb20gJ3RpbnltY2UvY29yZS9hcGkvT3B0aW9uVHlwZXMnO1xuXG50eXBlIFVzZXJDaGFyID0gWyBudW1iZXIsIHN0cmluZyBdO1xuXG5jb25zdCBvcHRpb246IHtcbiAgPEsgZXh0ZW5kcyBrZXlvZiBFZGl0b3JPcHRpb25zPihuYW1lOiBLKTogKGVkaXRvcjogRWRpdG9yKSA9PiBFZGl0b3JPcHRpb25zW0tdO1xuICA8VD4obmFtZTogc3RyaW5nKTogKGVkaXRvcjogRWRpdG9yKSA9PiBUO1xufSA9IChuYW1lOiBzdHJpbmcpID0+IChlZGl0b3I6IEVkaXRvcikgPT5cbiAgZWRpdG9yLm9wdGlvbnMuZ2V0KG5hbWUpO1xuXG5jb25zdCByZWdpc3RlciA9IChlZGl0b3I6IEVkaXRvcik6IHZvaWQgPT4ge1xuICBjb25zdCByZWdpc3Rlck9wdGlvbiA9IGVkaXRvci5vcHRpb25zLnJlZ2lzdGVyO1xuXG4gIGNvbnN0IGNoYXJNYXBQcm9jZXNzb3IgPSAodmFsdWU6IHVua25vd24pID0+XG4gICAgVHlwZS5pc0Z1bmN0aW9uKHZhbHVlKSB8fCBUeXBlLmlzQXJyYXkodmFsdWUpO1xuXG4gIHJlZ2lzdGVyT3B0aW9uKCdjaGFybWFwJywge1xuICAgIHByb2Nlc3NvcjogY2hhck1hcFByb2Nlc3NvcixcbiAgfSk7XG5cbiAgcmVnaXN0ZXJPcHRpb24oJ2NoYXJtYXBfYXBwZW5kJywge1xuICAgIHByb2Nlc3NvcjogY2hhck1hcFByb2Nlc3NvclxuICB9KTtcbn07XG5cbmNvbnN0IGdldENoYXJNYXAgPSBvcHRpb248VXNlckNoYXJbXSB8ICgoKSA9PiBVc2VyQ2hhcltdKSB8IHVuZGVmaW5lZD4oJ2NoYXJtYXAnKTtcbmNvbnN0IGdldENoYXJNYXBBcHBlbmQgPSBvcHRpb248VXNlckNoYXJbXSB8ICgoKSA9PiBVc2VyQ2hhcltdKSB8IHVuZGVmaW5lZD4oJ2NoYXJtYXBfYXBwZW5kJyk7XG5cbmV4cG9ydCB7XG4gIHJlZ2lzdGVyLFxuICBnZXRDaGFyTWFwLFxuICBnZXRDaGFyTWFwQXBwZW5kXG59O1xuIiwiaW1wb3J0IHR5cGUgRWRpdG9yIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvRWRpdG9yJztcblxuaW1wb3J0ICogYXMgRXZlbnRzIGZyb20gJy4uL2FwaS9FdmVudHMnO1xuXG5jb25zdCBpbnNlcnRDaGFyID0gKGVkaXRvcjogRWRpdG9yLCBjaHI6IHN0cmluZyk6IHZvaWQgPT4ge1xuICBjb25zdCBldnRDaHIgPSBFdmVudHMuZmlyZUluc2VydEN1c3RvbUNoYXIoZWRpdG9yLCBjaHIpLmNocjtcbiAgZWRpdG9yLmV4ZWNDb21tYW5kKCdtY2VJbnNlcnRDb250ZW50JywgZmFsc2UsIGV2dENocik7XG59O1xuXG5leHBvcnQge1xuICBpbnNlcnRDaGFyXG59O1xuIiwiaW1wb3J0IHsgQXJyIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0IHR5cGUgRWRpdG9yIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvRWRpdG9yJztcbmltcG9ydCBUb29scyBmcm9tICd0aW55bWNlL2NvcmUvYXBpL3V0aWwvVG9vbHMnO1xuXG5pbXBvcnQgKiBhcyBPcHRpb25zIGZyb20gJy4uL2FwaS9PcHRpb25zJztcblxuY29uc3QgaXNBcnJheSA9IFRvb2xzLmlzQXJyYXk7XG5cbmV4cG9ydCBjb25zdCBVc2VyRGVmaW5lZCA9ICdVc2VyIERlZmluZWQnO1xuXG5leHBvcnQgdHlwZSBDaGFyID0gWyBudW1iZXIsIHN0cmluZyBdO1xuXG5leHBvcnQgaW50ZXJmYWNlIENoYXJNYXAge1xuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gIGNoYXJhY3RlcnM6IENoYXJbXTtcbn1cblxuY29uc3QgZ2V0RGVmYXVsdENoYXJNYXAgPSAoKTogQ2hhck1hcFtdID0+IHtcbiAgcmV0dXJuIFtcbiAgICAvLyBUT0RPOiBNZXJnZSBjYXRlZ29yaWVzIHdpdGggVEJJT1xuICAgIC8vIHtcbiAgICAvLyAgIG5hbWU6ICdVbmtub3duJyxcbiAgICAvLyAgIGNoYXJhY3RlcnMgOiBbXG4gICAgLy8gICAgIFsxNjAsICduby1icmVhayBzcGFjZSddLFxuICAgIC8vICAgICBbMTczLCAnc29mdCBoeXBoZW4nXSxcbiAgICAvLyAgICAgWzM0LCAncXVvdGF0aW9uIG1hcmsnXVxuICAgIC8vICAgXVxuICAgIC8vIH0sXG4gICAgeyBuYW1lOiAnQ3VycmVuY3knLFxuICAgICAgY2hhcmFjdGVyczogW1xuICAgICAgICBbIDM2LCAnZG9sbGFyIHNpZ24nIF0sXG4gICAgICAgIFsgMTYyLCAnY2VudCBzaWduJyBdLFxuICAgICAgICBbIDgzNjQsICdldXJvIHNpZ24nIF0sXG4gICAgICAgIFsgMTYzLCAncG91bmQgc2lnbicgXSxcbiAgICAgICAgWyAxNjUsICd5ZW4gc2lnbicgXSxcbiAgICAgICAgWyAxNjQsICdjdXJyZW5jeSBzaWduJyBdLFxuICAgICAgICBbIDgzNTIsICdldXJvLWN1cnJlbmN5IHNpZ24nIF0sXG4gICAgICAgIFsgODM1MywgJ2NvbG9uIHNpZ24nIF0sXG4gICAgICAgIFsgODM1NCwgJ2NydXplaXJvIHNpZ24nIF0sXG4gICAgICAgIFsgODM1NSwgJ2ZyZW5jaCBmcmFuYyBzaWduJyBdLFxuICAgICAgICBbIDgzNTYsICdsaXJhIHNpZ24nIF0sXG4gICAgICAgIFsgODM1NywgJ21pbGwgc2lnbicgXSxcbiAgICAgICAgWyA4MzU4LCAnbmFpcmEgc2lnbicgXSxcbiAgICAgICAgWyA4MzU5LCAncGVzZXRhIHNpZ24nIF0sXG4gICAgICAgIFsgODM2MCwgJ3J1cGVlIHNpZ24nIF0sXG4gICAgICAgIFsgODM2MSwgJ3dvbiBzaWduJyBdLFxuICAgICAgICBbIDgzNjIsICduZXcgc2hlcWVsIHNpZ24nIF0sXG4gICAgICAgIFsgODM2MywgJ2Rvbmcgc2lnbicgXSxcbiAgICAgICAgWyA4MzY1LCAna2lwIHNpZ24nIF0sXG4gICAgICAgIFsgODM2NiwgJ3R1Z3JpayBzaWduJyBdLFxuICAgICAgICBbIDgzNjcsICdkcmFjaG1hIHNpZ24nIF0sXG4gICAgICAgIFsgODM2OCwgJ2dlcm1hbiBwZW5ueSBzeW1ib2wnIF0sXG4gICAgICAgIFsgODM2OSwgJ3Blc28gc2lnbicgXSxcbiAgICAgICAgWyA4MzcwLCAnZ3VhcmFuaSBzaWduJyBdLFxuICAgICAgICBbIDgzNzEsICdhdXN0cmFsIHNpZ24nIF0sXG4gICAgICAgIFsgODM3MiwgJ2hyeXZuaWEgc2lnbicgXSxcbiAgICAgICAgWyA4MzczLCAnY2VkaSBzaWduJyBdLFxuICAgICAgICBbIDgzNzQsICdsaXZyZSB0b3Vybm9pcyBzaWduJyBdLFxuICAgICAgICBbIDgzNzUsICdzcGVzbWlsbyBzaWduJyBdLFxuICAgICAgICBbIDgzNzYsICd0ZW5nZSBzaWduJyBdLFxuICAgICAgICBbIDgzNzcsICdpbmRpYW4gcnVwZWUgc2lnbicgXSxcbiAgICAgICAgWyA4Mzc4LCAndHVya2lzaCBsaXJhIHNpZ24nIF0sXG4gICAgICAgIFsgODM3OSwgJ25vcmRpYyBtYXJrIHNpZ24nIF0sXG4gICAgICAgIFsgODM4MCwgJ21hbmF0IHNpZ24nIF0sXG4gICAgICAgIFsgODM4MSwgJ3J1YmxlIHNpZ24nIF0sXG4gICAgICAgIFsgMjA4NzAsICd5ZW4gY2hhcmFjdGVyJyBdLFxuICAgICAgICBbIDIwODAzLCAneXVhbiBjaGFyYWN0ZXInIF0sXG4gICAgICAgIFsgMjIyOTEsICd5dWFuIGNoYXJhY3RlciwgaW4gaG9uZyBrb25nIGFuZCB0YWl3YW4nIF0sXG4gICAgICAgIFsgMjIyNzgsICd5ZW4veXVhbiBjaGFyYWN0ZXIgdmFyaWFudCBvbmUnIF1cbiAgICAgIF1cbiAgICB9LFxuICAgIHsgbmFtZTogJ1RleHQnLFxuICAgICAgY2hhcmFjdGVyczogW1xuICAgICAgICBbIDE2OSwgJ2NvcHlyaWdodCBzaWduJyBdLFxuICAgICAgICBbIDE3NCwgJ3JlZ2lzdGVyZWQgc2lnbicgXSxcbiAgICAgICAgWyA4NDgyLCAndHJhZGUgbWFyayBzaWduJyBdLFxuICAgICAgICBbIDgyNDAsICdwZXIgbWlsbGUgc2lnbicgXSxcbiAgICAgICAgWyAxODEsICdtaWNybyBzaWduJyBdLFxuICAgICAgICBbIDE4MywgJ21pZGRsZSBkb3QnIF0sXG4gICAgICAgIFsgODIyNiwgJ2J1bGxldCcgXSxcbiAgICAgICAgWyA4MjMwLCAndGhyZWUgZG90IGxlYWRlcicgXSxcbiAgICAgICAgWyA4MjQyLCAnbWludXRlcyAvIGZlZXQnIF0sXG4gICAgICAgIFsgODI0MywgJ3NlY29uZHMgLyBpbmNoZXMnIF0sXG4gICAgICAgIFsgMTY3LCAnc2VjdGlvbiBzaWduJyBdLFxuICAgICAgICBbIDE4MiwgJ3BhcmFncmFwaCBzaWduJyBdLFxuICAgICAgICBbIDIyMywgJ3NoYXJwIHMgLyBlc3MtemVkJyBdXG4gICAgICBdXG4gICAgfSxcbiAgICB7IG5hbWU6ICdRdW90YXRpb25zJyxcbiAgICAgIGNoYXJhY3RlcnM6IFtcbiAgICAgICAgWyA4MjQ5LCAnc2luZ2xlIGxlZnQtcG9pbnRpbmcgYW5nbGUgcXVvdGF0aW9uIG1hcmsnIF0sXG4gICAgICAgIFsgODI1MCwgJ3NpbmdsZSByaWdodC1wb2ludGluZyBhbmdsZSBxdW90YXRpb24gbWFyaycgXSxcbiAgICAgICAgWyAxNzEsICdsZWZ0IHBvaW50aW5nIGd1aWxsZW1ldCcgXSxcbiAgICAgICAgWyAxODcsICdyaWdodCBwb2ludGluZyBndWlsbGVtZXQnIF0sXG4gICAgICAgIFsgODIxNiwgJ2xlZnQgc2luZ2xlIHF1b3RhdGlvbiBtYXJrJyBdLFxuICAgICAgICBbIDgyMTcsICdyaWdodCBzaW5nbGUgcXVvdGF0aW9uIG1hcmsnIF0sXG4gICAgICAgIFsgODIyMCwgJ2xlZnQgZG91YmxlIHF1b3RhdGlvbiBtYXJrJyBdLFxuICAgICAgICBbIDgyMjEsICdyaWdodCBkb3VibGUgcXVvdGF0aW9uIG1hcmsnIF0sXG4gICAgICAgIFsgODIxOCwgJ3NpbmdsZSBsb3ctOSBxdW90YXRpb24gbWFyaycgXSxcbiAgICAgICAgWyA4MjIyLCAnZG91YmxlIGxvdy05IHF1b3RhdGlvbiBtYXJrJyBdLFxuICAgICAgICBbIDYwLCAnbGVzcy10aGFuIHNpZ24nIF0sXG4gICAgICAgIFsgNjIsICdncmVhdGVyLXRoYW4gc2lnbicgXSxcbiAgICAgICAgWyA4ODA0LCAnbGVzcy10aGFuIG9yIGVxdWFsIHRvJyBdLFxuICAgICAgICBbIDg4MDUsICdncmVhdGVyLXRoYW4gb3IgZXF1YWwgdG8nIF0sXG4gICAgICAgIFsgODIxMSwgJ2VuIGRhc2gnIF0sXG4gICAgICAgIFsgODIxMiwgJ2VtIGRhc2gnIF0sXG4gICAgICAgIFsgMTc1LCAnbWFjcm9uJyBdLFxuICAgICAgICBbIDgyNTQsICdvdmVybGluZScgXSxcbiAgICAgICAgWyAxNjQsICdjdXJyZW5jeSBzaWduJyBdLFxuICAgICAgICBbIDE2NiwgJ2Jyb2tlbiBiYXInIF0sXG4gICAgICAgIFsgMTY4LCAnZGlhZXJlc2lzJyBdLFxuICAgICAgICBbIDE2MSwgJ2ludmVydGVkIGV4Y2xhbWF0aW9uIG1hcmsnIF0sXG4gICAgICAgIFsgMTkxLCAndHVybmVkIHF1ZXN0aW9uIG1hcmsnIF0sXG4gICAgICAgIFsgNzEwLCAnY2lyY3VtZmxleCBhY2NlbnQnIF0sXG4gICAgICAgIFsgNzMyLCAnc21hbGwgdGlsZGUnIF0sXG4gICAgICAgIFsgMTc2LCAnZGVncmVlIHNpZ24nIF0sXG4gICAgICAgIFsgODcyMiwgJ21pbnVzIHNpZ24nIF0sXG4gICAgICAgIFsgMTc3LCAncGx1cy1taW51cyBzaWduJyBdLFxuICAgICAgICBbIDI0NywgJ2RpdmlzaW9uIHNpZ24nIF0sXG4gICAgICAgIFsgODI2MCwgJ2ZyYWN0aW9uIHNsYXNoJyBdLFxuICAgICAgICBbIDIxNSwgJ211bHRpcGxpY2F0aW9uIHNpZ24nIF0sXG4gICAgICAgIFsgMTg1LCAnc3VwZXJzY3JpcHQgb25lJyBdLFxuICAgICAgICBbIDE3OCwgJ3N1cGVyc2NyaXB0IHR3bycgXSxcbiAgICAgICAgWyAxNzksICdzdXBlcnNjcmlwdCB0aHJlZScgXSxcbiAgICAgICAgWyAxODgsICdmcmFjdGlvbiBvbmUgcXVhcnRlcicgXSxcbiAgICAgICAgWyAxODksICdmcmFjdGlvbiBvbmUgaGFsZicgXSxcbiAgICAgICAgWyAxOTAsICdmcmFjdGlvbiB0aHJlZSBxdWFydGVycycgXVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ01hdGhlbWF0aWNhbCcsXG4gICAgICBjaGFyYWN0ZXJzOiBbXG4gICAgICAgIFsgNDAyLCAnZnVuY3Rpb24gLyBmbG9yaW4nIF0sXG4gICAgICAgIFsgODc0NywgJ2ludGVncmFsJyBdLFxuICAgICAgICBbIDg3MjEsICduLWFyeSBzdW1hdGlvbicgXSxcbiAgICAgICAgWyA4NzM0LCAnaW5maW5pdHknIF0sXG4gICAgICAgIFsgODczMCwgJ3NxdWFyZSByb290JyBdLFxuICAgICAgICBbIDg3NjQsICdzaW1pbGFyIHRvJyBdLFxuICAgICAgICBbIDg3NzMsICdhcHByb3hpbWF0ZWx5IGVxdWFsIHRvJyBdLFxuICAgICAgICBbIDg3NzYsICdhbG1vc3QgZXF1YWwgdG8nIF0sXG4gICAgICAgIFsgODgwMCwgJ25vdCBlcXVhbCB0bycgXSxcbiAgICAgICAgWyA4ODAxLCAnaWRlbnRpY2FsIHRvJyBdLFxuICAgICAgICBbIDg3MTIsICdlbGVtZW50IG9mJyBdLFxuICAgICAgICBbIDg3MTMsICdub3QgYW4gZWxlbWVudCBvZicgXSxcbiAgICAgICAgWyA4NzE1LCAnY29udGFpbnMgYXMgbWVtYmVyJyBdLFxuICAgICAgICBbIDg3MTksICduLWFyeSBwcm9kdWN0JyBdLFxuICAgICAgICBbIDg3NDMsICdsb2dpY2FsIGFuZCcgXSxcbiAgICAgICAgWyA4NzQ0LCAnbG9naWNhbCBvcicgXSxcbiAgICAgICAgWyAxNzIsICdub3Qgc2lnbicgXSxcbiAgICAgICAgWyA4NzQ1LCAnaW50ZXJzZWN0aW9uJyBdLFxuICAgICAgICBbIDg3NDYsICd1bmlvbicgXSxcbiAgICAgICAgWyA4NzA2LCAncGFydGlhbCBkaWZmZXJlbnRpYWwnIF0sXG4gICAgICAgIFsgODcwNCwgJ2ZvciBhbGwnIF0sXG4gICAgICAgIFsgODcwNywgJ3RoZXJlIGV4aXN0cycgXSxcbiAgICAgICAgWyA4NzA5LCAnZGlhbWV0ZXInIF0sXG4gICAgICAgIFsgODcxMSwgJ2JhY2t3YXJkIGRpZmZlcmVuY2UnIF0sXG4gICAgICAgIFsgODcyNywgJ2FzdGVyaXNrIG9wZXJhdG9yJyBdLFxuICAgICAgICBbIDg3MzMsICdwcm9wb3J0aW9uYWwgdG8nIF0sXG4gICAgICAgIFsgODczNiwgJ2FuZ2xlJyBdXG4gICAgICBdXG4gICAgfSxcbiAgICAvLyBUT0RPOiBNZXJnZSBjYXRlZ29yaWVzIHdpdGggVEJJT1xuICAgIC8vIHtcbiAgICAvLyAgIG5hbWU6ICdVbmRlZmluZWQnLFxuICAgIC8vICAgY2hhcmFjdGVyczogW1xuICAgIC8vICAgICBbMTgwLCAnYWN1dGUgYWNjZW50J10sXG4gICAgLy8gICAgIFsxODQsICdjZWRpbGxhJ10sXG4gICAgLy8gICAgIFsxNzAsICdmZW1pbmluZSBvcmRpbmFsIGluZGljYXRvciddLFxuICAgIC8vICAgICBbMTg2LCAnbWFzY3VsaW5lIG9yZGluYWwgaW5kaWNhdG9yJ10sXG4gICAgLy8gICAgIFs4MjI0LCAnZGFnZ2VyJ10sXG4gICAgLy8gICAgIFs4MjI1LCAnZG91YmxlIGRhZ2dlciddXG4gICAgLy8gICBdXG4gICAgLy8gfSxcbiAgICB7XG4gICAgICBuYW1lOiAnRXh0ZW5kZWQgTGF0aW4nLFxuICAgICAgY2hhcmFjdGVyczogW1xuICAgICAgICBbIDE5MiwgJ0EgLSBncmF2ZScgXSxcbiAgICAgICAgWyAxOTMsICdBIC0gYWN1dGUnIF0sXG4gICAgICAgIFsgMTk0LCAnQSAtIGNpcmN1bWZsZXgnIF0sXG4gICAgICAgIFsgMTk1LCAnQSAtIHRpbGRlJyBdLFxuICAgICAgICBbIDE5NiwgJ0EgLSBkaWFlcmVzaXMnIF0sXG4gICAgICAgIFsgMTk3LCAnQSAtIHJpbmcgYWJvdmUnIF0sXG4gICAgICAgIFsgMjU2LCAnQSAtIG1hY3JvbicgXSxcbiAgICAgICAgWyAxOTgsICdsaWdhdHVyZSBBRScgXSxcbiAgICAgICAgWyAxOTksICdDIC0gY2VkaWxsYScgXSxcbiAgICAgICAgWyAyMDAsICdFIC0gZ3JhdmUnIF0sXG4gICAgICAgIFsgMjAxLCAnRSAtIGFjdXRlJyBdLFxuICAgICAgICBbIDIwMiwgJ0UgLSBjaXJjdW1mbGV4JyBdLFxuICAgICAgICBbIDIwMywgJ0UgLSBkaWFlcmVzaXMnIF0sXG4gICAgICAgIFsgMjc0LCAnRSAtIG1hY3JvbicgXSxcbiAgICAgICAgWyAyMDQsICdJIC0gZ3JhdmUnIF0sXG4gICAgICAgIFsgMjA1LCAnSSAtIGFjdXRlJyBdLFxuICAgICAgICBbIDIwNiwgJ0kgLSBjaXJjdW1mbGV4JyBdLFxuICAgICAgICBbIDIwNywgJ0kgLSBkaWFlcmVzaXMnIF0sXG4gICAgICAgIFsgMjk4LCAnSSAtIG1hY3JvbicgXSxcbiAgICAgICAgWyAyMDgsICdFVEgnIF0sXG4gICAgICAgIFsgMjA5LCAnTiAtIHRpbGRlJyBdLFxuICAgICAgICBbIDIxMCwgJ08gLSBncmF2ZScgXSxcbiAgICAgICAgWyAyMTEsICdPIC0gYWN1dGUnIF0sXG4gICAgICAgIFsgMjEyLCAnTyAtIGNpcmN1bWZsZXgnIF0sXG4gICAgICAgIFsgMjEzLCAnTyAtIHRpbGRlJyBdLFxuICAgICAgICBbIDIxNCwgJ08gLSBkaWFlcmVzaXMnIF0sXG4gICAgICAgIFsgMjE2LCAnTyAtIHNsYXNoJyBdLFxuICAgICAgICBbIDMzMiwgJ08gLSBtYWNyb24nIF0sXG4gICAgICAgIFsgMzM4LCAnbGlnYXR1cmUgT0UnIF0sXG4gICAgICAgIFsgMzUyLCAnUyAtIGNhcm9uJyBdLFxuICAgICAgICBbIDIxNywgJ1UgLSBncmF2ZScgXSxcbiAgICAgICAgWyAyMTgsICdVIC0gYWN1dGUnIF0sXG4gICAgICAgIFsgMjE5LCAnVSAtIGNpcmN1bWZsZXgnIF0sXG4gICAgICAgIFsgMjIwLCAnVSAtIGRpYWVyZXNpcycgXSxcbiAgICAgICAgWyAzNjIsICdVIC0gbWFjcm9uJyBdLFxuICAgICAgICBbIDIyMSwgJ1kgLSBhY3V0ZScgXSxcbiAgICAgICAgWyAzNzYsICdZIC0gZGlhZXJlc2lzJyBdLFxuICAgICAgICBbIDU2MiwgJ1kgLSBtYWNyb24nIF0sXG4gICAgICAgIFsgMjIyLCAnVEhPUk4nIF0sXG4gICAgICAgIFsgMjI0LCAnYSAtIGdyYXZlJyBdLFxuICAgICAgICBbIDIyNSwgJ2EgLSBhY3V0ZScgXSxcbiAgICAgICAgWyAyMjYsICdhIC0gY2lyY3VtZmxleCcgXSxcbiAgICAgICAgWyAyMjcsICdhIC0gdGlsZGUnIF0sXG4gICAgICAgIFsgMjI4LCAnYSAtIGRpYWVyZXNpcycgXSxcbiAgICAgICAgWyAyMjksICdhIC0gcmluZyBhYm92ZScgXSxcbiAgICAgICAgWyAyNTcsICdhIC0gbWFjcm9uJyBdLFxuICAgICAgICBbIDIzMCwgJ2xpZ2F0dXJlIGFlJyBdLFxuICAgICAgICBbIDIzMSwgJ2MgLSBjZWRpbGxhJyBdLFxuICAgICAgICBbIDIzMiwgJ2UgLSBncmF2ZScgXSxcbiAgICAgICAgWyAyMzMsICdlIC0gYWN1dGUnIF0sXG4gICAgICAgIFsgMjM0LCAnZSAtIGNpcmN1bWZsZXgnIF0sXG4gICAgICAgIFsgMjM1LCAnZSAtIGRpYWVyZXNpcycgXSxcbiAgICAgICAgWyAyNzUsICdlIC0gbWFjcm9uJyBdLFxuICAgICAgICBbIDIzNiwgJ2kgLSBncmF2ZScgXSxcbiAgICAgICAgWyAyMzcsICdpIC0gYWN1dGUnIF0sXG4gICAgICAgIFsgMjM4LCAnaSAtIGNpcmN1bWZsZXgnIF0sXG4gICAgICAgIFsgMjM5LCAnaSAtIGRpYWVyZXNpcycgXSxcbiAgICAgICAgWyAyOTksICdpIC0gbWFjcm9uJyBdLFxuICAgICAgICBbIDI0MCwgJ2V0aCcgXSxcbiAgICAgICAgWyAyNDEsICduIC0gdGlsZGUnIF0sXG4gICAgICAgIFsgMjQyLCAnbyAtIGdyYXZlJyBdLFxuICAgICAgICBbIDI0MywgJ28gLSBhY3V0ZScgXSxcbiAgICAgICAgWyAyNDQsICdvIC0gY2lyY3VtZmxleCcgXSxcbiAgICAgICAgWyAyNDUsICdvIC0gdGlsZGUnIF0sXG4gICAgICAgIFsgMjQ2LCAnbyAtIGRpYWVyZXNpcycgXSxcbiAgICAgICAgWyAyNDgsICdvIHNsYXNoJyBdLFxuICAgICAgICBbIDMzMywgJ28gbWFjcm9uJyBdLFxuICAgICAgICBbIDMzOSwgJ2xpZ2F0dXJlIG9lJyBdLFxuICAgICAgICBbIDM1MywgJ3MgLSBjYXJvbicgXSxcbiAgICAgICAgWyAyNDksICd1IC0gZ3JhdmUnIF0sXG4gICAgICAgIFsgMjUwLCAndSAtIGFjdXRlJyBdLFxuICAgICAgICBbIDI1MSwgJ3UgLSBjaXJjdW1mbGV4JyBdLFxuICAgICAgICBbIDI1MiwgJ3UgLSBkaWFlcmVzaXMnIF0sXG4gICAgICAgIFsgMzYzLCAndSAtIG1hY3JvbicgXSxcbiAgICAgICAgWyAyNTMsICd5IC0gYWN1dGUnIF0sXG4gICAgICAgIFsgMjU0LCAndGhvcm4nIF0sXG4gICAgICAgIFsgMjU1LCAneSAtIGRpYWVyZXNpcycgXSxcbiAgICAgICAgWyA1NjMsICd5IC0gbWFjcm9uJyBdLFxuICAgICAgICBbIDkxMywgJ0FscGhhJyBdLFxuICAgICAgICBbIDkxNCwgJ0JldGEnIF0sXG4gICAgICAgIFsgOTE1LCAnR2FtbWEnIF0sXG4gICAgICAgIFsgOTE2LCAnRGVsdGEnIF0sXG4gICAgICAgIFsgOTE3LCAnRXBzaWxvbicgXSxcbiAgICAgICAgWyA5MTgsICdaZXRhJyBdLFxuICAgICAgICBbIDkxOSwgJ0V0YScgXSxcbiAgICAgICAgWyA5MjAsICdUaGV0YScgXSxcbiAgICAgICAgWyA5MjEsICdJb3RhJyBdLFxuICAgICAgICBbIDkyMiwgJ0thcHBhJyBdLFxuICAgICAgICBbIDkyMywgJ0xhbWJkYScgXSxcbiAgICAgICAgWyA5MjQsICdNdScgXSxcbiAgICAgICAgWyA5MjUsICdOdScgXSxcbiAgICAgICAgWyA5MjYsICdYaScgXSxcbiAgICAgICAgWyA5MjcsICdPbWljcm9uJyBdLFxuICAgICAgICBbIDkyOCwgJ1BpJyBdLFxuICAgICAgICBbIDkyOSwgJ1JobycgXSxcbiAgICAgICAgWyA5MzEsICdTaWdtYScgXSxcbiAgICAgICAgWyA5MzIsICdUYXUnIF0sXG4gICAgICAgIFsgOTMzLCAnVXBzaWxvbicgXSxcbiAgICAgICAgWyA5MzQsICdQaGknIF0sXG4gICAgICAgIFsgOTM1LCAnQ2hpJyBdLFxuICAgICAgICBbIDkzNiwgJ1BzaScgXSxcbiAgICAgICAgWyA5MzcsICdPbWVnYScgXSxcbiAgICAgICAgWyA5NDUsICdhbHBoYScgXSxcbiAgICAgICAgWyA5NDYsICdiZXRhJyBdLFxuICAgICAgICBbIDk0NywgJ2dhbW1hJyBdLFxuICAgICAgICBbIDk0OCwgJ2RlbHRhJyBdLFxuICAgICAgICBbIDk0OSwgJ2Vwc2lsb24nIF0sXG4gICAgICAgIFsgOTUwLCAnemV0YScgXSxcbiAgICAgICAgWyA5NTEsICdldGEnIF0sXG4gICAgICAgIFsgOTUyLCAndGhldGEnIF0sXG4gICAgICAgIFsgOTUzLCAnaW90YScgXSxcbiAgICAgICAgWyA5NTQsICdrYXBwYScgXSxcbiAgICAgICAgWyA5NTUsICdsYW1iZGEnIF0sXG4gICAgICAgIFsgOTU2LCAnbXUnIF0sXG4gICAgICAgIFsgOTU3LCAnbnUnIF0sXG4gICAgICAgIFsgOTU4LCAneGknIF0sXG4gICAgICAgIFsgOTU5LCAnb21pY3JvbicgXSxcbiAgICAgICAgWyA5NjAsICdwaScgXSxcbiAgICAgICAgWyA5NjEsICdyaG8nIF0sXG4gICAgICAgIFsgOTYyLCAnZmluYWwgc2lnbWEnIF0sXG4gICAgICAgIFsgOTYzLCAnc2lnbWEnIF0sXG4gICAgICAgIFsgOTY0LCAndGF1JyBdLFxuICAgICAgICBbIDk2NSwgJ3Vwc2lsb24nIF0sXG4gICAgICAgIFsgOTY2LCAncGhpJyBdLFxuICAgICAgICBbIDk2NywgJ2NoaScgXSxcbiAgICAgICAgWyA5NjgsICdwc2knIF0sXG4gICAgICAgIFsgOTY5LCAnb21lZ2EnIF1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdTeW1ib2xzJyxcbiAgICAgIGNoYXJhY3RlcnM6IFtcbiAgICAgICAgWyA4NTAxLCAnYWxlZiBzeW1ib2wnIF0sXG4gICAgICAgIFsgOTgyLCAncGkgc3ltYm9sJyBdLFxuICAgICAgICBbIDg0NzYsICdyZWFsIHBhcnQgc3ltYm9sJyBdLFxuICAgICAgICBbIDk3OCwgJ3Vwc2lsb24gLSBob29rIHN5bWJvbCcgXSxcbiAgICAgICAgWyA4NDcyLCAnV2VpZXJzdHJhc3MgcCcgXSxcbiAgICAgICAgWyA4NDY1LCAnaW1hZ2luYXJ5IHBhcnQnIF1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdBcnJvd3MnLFxuICAgICAgY2hhcmFjdGVyczogW1xuICAgICAgICBbIDg1OTIsICdsZWZ0d2FyZHMgYXJyb3cnIF0sXG4gICAgICAgIFsgODU5MywgJ3Vwd2FyZHMgYXJyb3cnIF0sXG4gICAgICAgIFsgODU5NCwgJ3JpZ2h0d2FyZHMgYXJyb3cnIF0sXG4gICAgICAgIFsgODU5NSwgJ2Rvd253YXJkcyBhcnJvdycgXSxcbiAgICAgICAgWyA4NTk2LCAnbGVmdCByaWdodCBhcnJvdycgXSxcbiAgICAgICAgWyA4NjI5LCAnY2FycmlhZ2UgcmV0dXJuJyBdLFxuICAgICAgICBbIDg2NTYsICdsZWZ0d2FyZHMgZG91YmxlIGFycm93JyBdLFxuICAgICAgICBbIDg2NTcsICd1cHdhcmRzIGRvdWJsZSBhcnJvdycgXSxcbiAgICAgICAgWyA4NjU4LCAncmlnaHR3YXJkcyBkb3VibGUgYXJyb3cnIF0sXG4gICAgICAgIFsgODY1OSwgJ2Rvd253YXJkcyBkb3VibGUgYXJyb3cnIF0sXG4gICAgICAgIFsgODY2MCwgJ2xlZnQgcmlnaHQgZG91YmxlIGFycm93JyBdLFxuICAgICAgICBbIDg3NTYsICd0aGVyZWZvcmUnIF0sXG4gICAgICAgIFsgODgzNCwgJ3N1YnNldCBvZicgXSxcbiAgICAgICAgWyA4ODM1LCAnc3VwZXJzZXQgb2YnIF0sXG4gICAgICAgIFsgODgzNiwgJ25vdCBhIHN1YnNldCBvZicgXSxcbiAgICAgICAgWyA4ODM4LCAnc3Vic2V0IG9mIG9yIGVxdWFsIHRvJyBdLFxuICAgICAgICBbIDg4MzksICdzdXBlcnNldCBvZiBvciBlcXVhbCB0bycgXSxcbiAgICAgICAgWyA4ODUzLCAnY2lyY2xlZCBwbHVzJyBdLFxuICAgICAgICBbIDg4NTUsICdjaXJjbGVkIHRpbWVzJyBdLFxuICAgICAgICBbIDg4NjksICdwZXJwZW5kaWN1bGFyJyBdLFxuICAgICAgICBbIDg5MDEsICdkb3Qgb3BlcmF0b3InIF0sXG4gICAgICAgIFsgODk2OCwgJ2xlZnQgY2VpbGluZycgXSxcbiAgICAgICAgWyA4OTY5LCAncmlnaHQgY2VpbGluZycgXSxcbiAgICAgICAgWyA4OTcwLCAnbGVmdCBmbG9vcicgXSxcbiAgICAgICAgWyA4OTcxLCAncmlnaHQgZmxvb3InIF0sXG4gICAgICAgIFsgOTAwMSwgJ2xlZnQtcG9pbnRpbmcgYW5nbGUgYnJhY2tldCcgXSxcbiAgICAgICAgWyA5MDAyLCAncmlnaHQtcG9pbnRpbmcgYW5nbGUgYnJhY2tldCcgXSxcbiAgICAgICAgWyA5Njc0LCAnbG96ZW5nZScgXSxcbiAgICAgICAgWyA5ODI0LCAnYmxhY2sgc3BhZGUgc3VpdCcgXSxcbiAgICAgICAgWyA5ODI3LCAnYmxhY2sgY2x1YiBzdWl0JyBdLFxuICAgICAgICBbIDk4MjksICdibGFjayBoZWFydCBzdWl0JyBdLFxuICAgICAgICBbIDk4MzAsICdibGFjayBkaWFtb25kIHN1aXQnIF0sXG4gICAgICAgIFsgODE5NCwgJ2VuIHNwYWNlJyBdLFxuICAgICAgICBbIDgxOTUsICdlbSBzcGFjZScgXSxcbiAgICAgICAgWyA4MjAxLCAndGhpbiBzcGFjZScgXSxcbiAgICAgICAgWyA4MjA0LCAnemVybyB3aWR0aCBub24tam9pbmVyJyBdLFxuICAgICAgICBbIDgyMDUsICd6ZXJvIHdpZHRoIGpvaW5lcicgXSxcbiAgICAgICAgWyA4MjA2LCAnbGVmdC10by1yaWdodCBtYXJrJyBdLFxuICAgICAgICBbIDgyMDcsICdyaWdodC10by1sZWZ0IG1hcmsnIF1cbiAgICAgIF1cbiAgICB9XG4gIF07XG59O1xuXG5jb25zdCBjaGFybWFwRmlsdGVyID0gKGNoYXJtYXA6IENoYXJbXSk6IENoYXJbXSA9PiB7XG4gIHJldHVybiBUb29scy5ncmVwKGNoYXJtYXAsIChpdGVtKSA9PiB7XG4gICAgcmV0dXJuIGlzQXJyYXkoaXRlbSkgJiYgaXRlbS5sZW5ndGggPT09IDI7XG4gIH0pO1xufTtcblxuY29uc3QgZ2V0Q2hhcnNGcm9tT3B0aW9uID0gKG9wdGlvblZhbHVlOiBDaGFyW10gfCAoKCkgPT4gQ2hhcltdKSB8IHVuZGVmaW5lZCk6IENoYXJbXSA9PiB7XG4gIGlmIChpc0FycmF5KG9wdGlvblZhbHVlKSkge1xuICAgIHJldHVybiBjaGFybWFwRmlsdGVyKG9wdGlvblZhbHVlKTtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb3B0aW9uVmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gb3B0aW9uVmFsdWUoKTtcbiAgfVxuXG4gIHJldHVybiBbXTtcbn07XG5cbmNvbnN0IGV4dGVuZENoYXJNYXAgPSAoZWRpdG9yOiBFZGl0b3IsIGNoYXJtYXA6IENoYXJNYXBbXSk6IENoYXJNYXBbXSA9PiB7XG4gIGNvbnN0IHVzZXJDaGFyTWFwID0gT3B0aW9ucy5nZXRDaGFyTWFwKGVkaXRvcik7XG4gIGlmICh1c2VyQ2hhck1hcCkge1xuICAgIGNoYXJtYXAgPSBbeyBuYW1lOiBVc2VyRGVmaW5lZCwgY2hhcmFjdGVyczogZ2V0Q2hhcnNGcm9tT3B0aW9uKHVzZXJDaGFyTWFwKSB9XTtcbiAgfVxuXG4gIGNvbnN0IHVzZXJDaGFyTWFwQXBwZW5kID0gT3B0aW9ucy5nZXRDaGFyTWFwQXBwZW5kKGVkaXRvcik7XG4gIGlmICh1c2VyQ2hhck1hcEFwcGVuZCkge1xuICAgIGNvbnN0IHVzZXJEZWZpbmVkR3JvdXAgPSBUb29scy5ncmVwKGNoYXJtYXAsIChjZykgPT4gY2cubmFtZSA9PT0gVXNlckRlZmluZWQpO1xuICAgIGlmICh1c2VyRGVmaW5lZEdyb3VwLmxlbmd0aCkge1xuICAgICAgdXNlckRlZmluZWRHcm91cFswXS5jaGFyYWN0ZXJzID0gWyAuLi51c2VyRGVmaW5lZEdyb3VwWzBdLmNoYXJhY3RlcnMsIC4uLmdldENoYXJzRnJvbU9wdGlvbih1c2VyQ2hhck1hcEFwcGVuZCkgXTtcbiAgICAgIHJldHVybiBjaGFybWFwO1xuICAgIH1cbiAgICByZXR1cm4gY2hhcm1hcC5jb25jYXQoeyBuYW1lOiBVc2VyRGVmaW5lZCwgY2hhcmFjdGVyczogZ2V0Q2hhcnNGcm9tT3B0aW9uKHVzZXJDaGFyTWFwQXBwZW5kKSB9KTtcbiAgfVxuXG4gIHJldHVybiBjaGFybWFwO1xufTtcblxuY29uc3QgZ2V0Q2hhck1hcCA9IChlZGl0b3I6IEVkaXRvcik6IENoYXJNYXBbXSA9PiB7XG4gIGNvbnN0IGdyb3VwcyA9IGV4dGVuZENoYXJNYXAoZWRpdG9yLCBnZXREZWZhdWx0Q2hhck1hcCgpKTtcbiAgcmV0dXJuIGdyb3Vwcy5sZW5ndGggPiAxID8gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdBbGwnLFxuICAgICAgY2hhcmFjdGVyczogQXJyLmJpbmQoZ3JvdXBzLCAoZykgPT4gZy5jaGFyYWN0ZXJzKVxuICAgIH1cbiAgXS5jb25jYXQoZ3JvdXBzKSA6IGdyb3Vwcztcbn07XG5cbmV4cG9ydCB7XG4gIGdldENoYXJNYXBcbn07XG4iLCJpbXBvcnQgeyBBcnIsIFN0cmluZ3MgfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5pbXBvcnQgdHlwZSB7IENoYXJNYXAsIENoYXIgfSBmcm9tICcuL0NoYXJNYXAnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENoYXJJdGVtIHtcbiAgcmVhZG9ubHkgdmFsdWU6IHN0cmluZztcbiAgcmVhZG9ubHkgaWNvbjogc3RyaW5nO1xuICByZWFkb25seSB0ZXh0OiBzdHJpbmc7XG59XG5cbmNvbnN0IGNoYXJNYXRjaGVzID0gKGNoYXJDb2RlOiBudW1iZXIsIG5hbWU6IHN0cmluZywgbG93ZXJDYXNlUGF0dGVybjogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gIGlmIChTdHJpbmdzLmNvbnRhaW5zKFN0cmluZ3MuZnJvbUNvZGVQb2ludChjaGFyQ29kZSkudG9Mb3dlckNhc2UoKSwgbG93ZXJDYXNlUGF0dGVybikpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gU3RyaW5ncy5jb250YWlucyhuYW1lLnRvTG93ZXJDYXNlKCksIGxvd2VyQ2FzZVBhdHRlcm4pIHx8IFN0cmluZ3MuY29udGFpbnMobmFtZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccysvZywgJycpLCBsb3dlckNhc2VQYXR0ZXJuKTtcbiAgfVxufTtcblxuY29uc3Qgc2NhbiA9IChncm91cDogQ2hhck1hcCwgcGF0dGVybjogc3RyaW5nKTogQ2hhckl0ZW1bXSA9PiB7XG4gIGNvbnN0IG1hdGNoZXM6IENoYXJbXSA9IFtdO1xuICBjb25zdCBsb3dlckNhc2VQYXR0ZXJuID0gcGF0dGVybi50b0xvd2VyQ2FzZSgpO1xuICBBcnIuZWFjaChncm91cC5jaGFyYWN0ZXJzLCAoZykgPT4ge1xuICAgIGlmIChjaGFyTWF0Y2hlcyhnWzBdLCBnWzFdLCBsb3dlckNhc2VQYXR0ZXJuKSkge1xuICAgICAgbWF0Y2hlcy5wdXNoKGcpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIEFyci5tYXAobWF0Y2hlcywgKG0pID0+ICh7XG4gICAgdGV4dDogbVsxXSxcbiAgICB2YWx1ZTogU3RyaW5ncy5mcm9tQ29kZVBvaW50KG1bMF0pLFxuICAgIGljb246IFN0cmluZ3MuZnJvbUNvZGVQb2ludChtWzBdKVxuICB9KSk7XG59O1xuXG5leHBvcnQge1xuICBzY2FuXG59O1xuIiwiaW1wb3J0IHR5cGUgRWRpdG9yIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvRWRpdG9yJztcblxuaW1wb3J0IHR5cGUgKiBhcyBDaGFyTWFwIGZyb20gJy4uL2NvcmUvQ2hhck1hcCc7XG5pbXBvcnQgKiBhcyBTY2FuIGZyb20gJy4uL2NvcmUvU2Nhbic7XG5cbnR5cGUgQ2hhck1hcCA9IENoYXJNYXAuQ2hhck1hcDtcblxuY29uc3QgaW5pdCA9IChlZGl0b3I6IEVkaXRvciwgYWxsOiBDaGFyTWFwKTogdm9pZCA9PiB7XG4gIGVkaXRvci51aS5yZWdpc3RyeS5hZGRBdXRvY29tcGxldGVyKCdjaGFybWFwJywge1xuICAgIHRyaWdnZXI6ICc6JyxcbiAgICBjb2x1bW5zOiAnYXV0bycsXG4gICAgbWluQ2hhcnM6IDIsXG4gICAgZmV0Y2g6IChwYXR0ZXJuLCBfbWF4UmVzdWx0cykgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIF9yZWplY3QpID0+IHtcbiAgICAgIHJlc29sdmUoU2Nhbi5zY2FuKGFsbCwgcGF0dGVybikpO1xuICAgIH0pLFxuICAgIG9uQWN0aW9uOiAoYXV0b2NvbXBsZXRlQXBpLCBybmcsIHZhbHVlKSA9PiB7XG4gICAgICBlZGl0b3Iuc2VsZWN0aW9uLnNldFJuZyhybmcpO1xuICAgICAgZWRpdG9yLmluc2VydENvbnRlbnQodmFsdWUpO1xuICAgICAgYXV0b2NvbXBsZXRlQXBpLmhpZGUoKTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IHtcbiAgaW5pdFxufTtcbiIsImltcG9ydCB0eXBlIEVkaXRvciBmcm9tICd0aW55bWNlL2NvcmUvYXBpL0VkaXRvcic7XG5pbXBvcnQgdHlwZSB7IE1lbnUsIFRvb2xiYXIgfSBmcm9tICd0aW55bWNlL2NvcmUvYXBpL3VpL1VpJztcblxuY29uc3Qgb25TZXR1cEVkaXRhYmxlID0gKGVkaXRvcjogRWRpdG9yKSA9PiAoYXBpOiBUb29sYmFyLlRvb2xiYXJCdXR0b25JbnN0YW5jZUFwaSB8IE1lbnUuTWVudUl0ZW1JbnN0YW5jZUFwaSk6IFZvaWRGdW5jdGlvbiA9PiB7XG4gIGNvbnN0IG5vZGVDaGFuZ2VkID0gKCkgPT4ge1xuICAgIGFwaS5zZXRFbmFibGVkKGVkaXRvci5zZWxlY3Rpb24uaXNFZGl0YWJsZSgpKTtcbiAgfTtcblxuICBlZGl0b3Iub24oJ05vZGVDaGFuZ2UnLCBub2RlQ2hhbmdlZCk7XG4gIG5vZGVDaGFuZ2VkKCk7XG5cbiAgcmV0dXJuICgpID0+IHtcbiAgICBlZGl0b3Iub2ZmKCdOb2RlQ2hhbmdlJywgbm9kZUNoYW5nZWQpO1xuICB9O1xufTtcblxuY29uc3QgcmVnaXN0ZXIgPSAoZWRpdG9yOiBFZGl0b3IpOiB2b2lkID0+IHtcbiAgY29uc3Qgb25BY3Rpb24gPSAoKSA9PiBlZGl0b3IuZXhlY0NvbW1hbmQoJ21jZVNob3dDaGFybWFwJyk7XG5cbiAgZWRpdG9yLnVpLnJlZ2lzdHJ5LmFkZEJ1dHRvbignY2hhcm1hcCcsIHtcbiAgICBpY29uOiAnaW5zZXJ0LWNoYXJhY3RlcicsXG4gICAgdG9vbHRpcDogJ1NwZWNpYWwgY2hhcmFjdGVyJyxcbiAgICBvbkFjdGlvbixcbiAgICBvblNldHVwOiBvblNldHVwRWRpdGFibGUoZWRpdG9yKVxuICB9KTtcblxuICBlZGl0b3IudWkucmVnaXN0cnkuYWRkTWVudUl0ZW0oJ2NoYXJtYXAnLCB7XG4gICAgaWNvbjogJ2luc2VydC1jaGFyYWN0ZXInLFxuICAgIHRleHQ6ICdTcGVjaWFsIGNoYXJhY3Rlci4uLicsXG4gICAgb25BY3Rpb24sXG4gICAgb25TZXR1cDogb25TZXR1cEVkaXRhYmxlKGVkaXRvcilcbiAgfSk7XG59O1xuXG5leHBvcnQge1xuICByZWdpc3RlclxufTtcbiIsImltcG9ydCB7IEFyciwgQ2VsbCwgVGhyb3R0bGVyIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0IHR5cGUgRWRpdG9yIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvRWRpdG9yJztcbmltcG9ydCB0eXBlIHsgRGlhbG9nIH0gZnJvbSAndGlueW1jZS9jb3JlL2FwaS91aS9VaSc7XG5cbmltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSAnLi4vY29yZS9BY3Rpb25zJztcbmltcG9ydCB7IHR5cGUgQ2hhck1hcCwgVXNlckRlZmluZWQgfSBmcm9tICcuLi9jb3JlL0NoYXJNYXAnO1xuaW1wb3J0ICogYXMgU2NhbiBmcm9tICcuLi9jb3JlL1NjYW4nO1xuXG5jb25zdCBwYXR0ZXJuTmFtZSA9ICdwYXR0ZXJuJztcblxuY29uc3Qgb3BlbiA9IChlZGl0b3I6IEVkaXRvciwgY2hhck1hcDogQ2hhck1hcFtdKTogdm9pZCA9PiB7XG4gIGNvbnN0IG1ha2VHcm91cEl0ZW1zID0gKCk6IERpYWxvZy5Cb2R5Q29tcG9uZW50U3BlY1tdID0+IFtcbiAgICB7XG4gICAgICBsYWJlbDogJ1NlYXJjaCcsXG4gICAgICB0eXBlOiAnaW5wdXQnLFxuICAgICAgbmFtZTogcGF0dGVybk5hbWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICdjb2xsZWN0aW9uJyxcbiAgICAgIG5hbWU6ICdyZXN1bHRzJ1xuICAgICAgLy8gVE9ETyBUSU5ZLTMyMjkgaW1wbGVtZW50IGNvbGxlY3Rpb24gY29sdW1ucyBwcm9wZXJseVxuICAgICAgLy8gY29sdW1uczogJ2F1dG8nXG4gICAgfVxuICBdO1xuXG4gIGNvbnN0IG1ha2VUYWJzID0gKCkgPT4gQXJyLm1hcChjaGFyTWFwLCAoY2hhckdyb3VwKSA9PiAoe1xuICAgIHRpdGxlOiBjaGFyR3JvdXAubmFtZSxcbiAgICBuYW1lOiBjaGFyR3JvdXAubmFtZSxcbiAgICBpdGVtczogbWFrZUdyb3VwSXRlbXMoKVxuICB9KSk7XG5cbiAgY29uc3QgbWFrZVBhbmVsID0gKCk6IERpYWxvZy5QYW5lbFNwZWMgPT4gKHsgdHlwZTogJ3BhbmVsJywgaXRlbXM6IG1ha2VHcm91cEl0ZW1zKCkgfSk7XG5cbiAgY29uc3QgbWFrZVRhYlBhbmVsID0gKCk6IERpYWxvZy5UYWJQYW5lbFNwZWMgPT4gKHsgdHlwZTogJ3RhYnBhbmVsJywgdGFiczogbWFrZVRhYnMoKSB9KTtcblxuICBjb25zdCBjdXJyZW50VGFiID0gY2hhck1hcC5sZW5ndGggPT09IDEgPyBDZWxsKFVzZXJEZWZpbmVkKSA6IENlbGwoJ0FsbCcpO1xuXG4gIGNvbnN0IHNjYW5BbmRTZXQgPSAoZGlhbG9nQXBpOiBEaWFsb2cuRGlhbG9nSW5zdGFuY2VBcGk8dHlwZW9mIGluaXRpYWxEYXRhPiwgcGF0dGVybjogc3RyaW5nKSA9PiB7XG4gICAgQXJyLmZpbmQoY2hhck1hcCwgKGdyb3VwKSA9PiBncm91cC5uYW1lID09PSBjdXJyZW50VGFiLmdldCgpKS5lYWNoKChmKSA9PiB7XG4gICAgICBjb25zdCBpdGVtcyA9IFNjYW4uc2NhbihmLCBwYXR0ZXJuKTtcbiAgICAgIGRpYWxvZ0FwaS5zZXREYXRhKHtcbiAgICAgICAgcmVzdWx0czogaXRlbXNcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IFNFQVJDSF9ERUxBWSA9IDQwO1xuXG4gIGNvbnN0IHVwZGF0ZUZpbHRlciA9IFRocm90dGxlci5sYXN0KChkaWFsb2dBcGk6IERpYWxvZy5EaWFsb2dJbnN0YW5jZUFwaTx0eXBlb2YgaW5pdGlhbERhdGE+KSA9PiB7XG4gICAgY29uc3QgcGF0dGVybiA9IGRpYWxvZ0FwaS5nZXREYXRhKCkucGF0dGVybjtcbiAgICBzY2FuQW5kU2V0KGRpYWxvZ0FwaSwgcGF0dGVybik7XG4gIH0sIFNFQVJDSF9ERUxBWSk7XG5cbiAgY29uc3QgYm9keSA9IGNoYXJNYXAubGVuZ3RoID09PSAxID8gbWFrZVBhbmVsKCkgOiBtYWtlVGFiUGFuZWwoKTtcblxuICBjb25zdCBpbml0aWFsRGF0YSA9IHtcbiAgICBwYXR0ZXJuOiAnJyxcbiAgICByZXN1bHRzOiBTY2FuLnNjYW4oY2hhck1hcFswXSwgJycpXG4gIH07XG5cbiAgY29uc3QgYnJpZGdlU3BlYzogRGlhbG9nLkRpYWxvZ1NwZWM8dHlwZW9mIGluaXRpYWxEYXRhPiA9IHtcbiAgICB0aXRsZTogJ1NwZWNpYWwgQ2hhcmFjdGVyJyxcbiAgICBzaXplOiAnbm9ybWFsJyxcbiAgICBib2R5LFxuICAgIGJ1dHRvbnM6IFtcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ2NhbmNlbCcsXG4gICAgICAgIG5hbWU6ICdjbG9zZScsXG4gICAgICAgIHRleHQ6ICdDbG9zZScsXG4gICAgICAgIHByaW1hcnk6IHRydWVcbiAgICAgIH1cbiAgICBdLFxuICAgIGluaXRpYWxEYXRhLFxuICAgIG9uQWN0aW9uOiAoYXBpLCBkZXRhaWxzKSA9PiB7XG4gICAgICBpZiAoZGV0YWlscy5uYW1lID09PSAncmVzdWx0cycpIHtcbiAgICAgICAgQWN0aW9ucy5pbnNlcnRDaGFyKGVkaXRvciwgZGV0YWlscy52YWx1ZSk7XG4gICAgICAgIGFwaS5jbG9zZSgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBvblRhYkNoYW5nZTogKGRpYWxvZ0FwaSwgZGV0YWlscykgPT4ge1xuICAgICAgY3VycmVudFRhYi5zZXQoZGV0YWlscy5uZXdUYWJOYW1lKTtcbiAgICAgIHVwZGF0ZUZpbHRlci50aHJvdHRsZShkaWFsb2dBcGkpO1xuICAgIH0sXG5cbiAgICBvbkNoYW5nZTogKGRpYWxvZ0FwaSwgY2hhbmdlRGF0YSkgPT4ge1xuICAgICAgaWYgKGNoYW5nZURhdGEubmFtZSA9PT0gcGF0dGVybk5hbWUpIHtcbiAgICAgICAgdXBkYXRlRmlsdGVyLnRocm90dGxlKGRpYWxvZ0FwaSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBjb25zdCBkaWFsb2dBcGkgPSBlZGl0b3Iud2luZG93TWFuYWdlci5vcGVuKGJyaWRnZVNwZWMpO1xuICBkaWFsb2dBcGkuZm9jdXMocGF0dGVybk5hbWUpO1xufTtcblxuZXhwb3J0IHtcbiAgb3BlblxufTtcbiIsImltcG9ydCAqIGFzIFR5cGUgZnJvbSAnLi4vY29yZS9UeXBlJztcbmltcG9ydCAqIGFzIEFycmF5VXRpbCBmcm9tICcuLi9jb3JlL0FycmF5VXRpbCc7XG5cbi8qKiBBIHdheSBvZiBjb21wYXJpbmcgdHdvIHZhbHVlcyBvZiB0aGUgc2FtZSB0eXBlIGZvciBlcXVhbGl0eS4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRXE8QT4ge1xuICBlcTogKHg6IEEsIHk6IEEpID0+IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBjb250cmFtYXAgPSA8QSwgQj4gKGVxYTogRXE8QT4sIGY6IChiOiBCKSA9PiBBKTogRXE8Qj4gPT5cbiAgZXEoKHgsIHkpID0+IGVxYS5lcShmKHgpLCBmKHkpKSk7XG5cbmV4cG9ydCBjb25zdCBlcSA9IDxBPiAoZjogKHg6IEEsIHk6IEEpID0+IGJvb2xlYW4pOiBFcTxBPiA9PlxuICAoeyBlcTogZiB9KTtcblxuZXhwb3J0IGNvbnN0IHRyaXBsZUVxOiBFcTxhbnk+ID0gZXEoKHgsIHkpID0+IHggPT09IHkpO1xuXG5leHBvcnQgY29uc3QgZXFTdHJpbmc6IEVxPHN0cmluZz4gPSB0cmlwbGVFcTtcblxuZXhwb3J0IGNvbnN0IGVxQm9vbGVhbjogRXE8Ym9vbGVhbj4gPSB0cmlwbGVFcTtcblxuZXhwb3J0IGNvbnN0IGVxTnVtYmVyOiBFcTxudW1iZXI+ID0gdHJpcGxlRXE7XG5cbmV4cG9ydCBjb25zdCBlcVVuZGVmaW5lZDogRXE8dW5kZWZpbmVkPiA9IHRyaXBsZUVxO1xuXG5leHBvcnQgY29uc3QgZXFOdWxsOiBFcTxudWxsPiA9IHRyaXBsZUVxO1xuXG5leHBvcnQgY29uc3QgZXFBcnJheSA9IDxBPiAoZXFhOiBFcTxBPik6IEVxPEFycmF5TGlrZTxBPj4gPT4gZXEoKHgsIHkpID0+IHtcbiAgaWYgKHgubGVuZ3RoICE9PSB5Lmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBsZW4gPSB4Lmxlbmd0aDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGlmICghZXFhLmVxKHhbaV0sIHlbaV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufSk7XG5cbi8vIFRPRE86IE1ha2UgYW4gT3JkIHR5cGVjbGFzc1xuY29uc3QgZXFTb3J0ZWRBcnJheSA9IDxBPihlcWE6IEVxPEE+LCBjb21wYXJlRm4/OiAoYTogQSwgYjogQSkgPT4gbnVtYmVyKTogRXE8QXJyYXlMaWtlPEE+PiA9PlxuICBjb250cmFtYXAoZXFBcnJheShlcWEpLCAoeHMpID0+IEFycmF5VXRpbC5zb3J0KHhzLCBjb21wYXJlRm4pKTtcblxuZXhwb3J0IGNvbnN0IGVxUmVjb3JkID0gPEE+IChlcWE6IEVxPEE+KTogRXE8UmVjb3JkPHN0cmluZywgQT4+ID0+IGVxKCh4LCB5KSA9PiB7XG4gIGNvbnN0IGt4ID0gT2JqZWN0LmtleXMoeCk7XG4gIGNvbnN0IGt5ID0gT2JqZWN0LmtleXMoeSk7XG4gIGlmICghZXFTb3J0ZWRBcnJheShlcVN0cmluZykuZXEoa3gsIGt5KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBsZW4gPSBreC5sZW5ndGg7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCBxID0ga3hbaV07XG4gICAgaWYgKCFlcWEuZXEoeFtxXSwgeVtxXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59KTtcblxuZXhwb3J0IGNvbnN0IGVxQW55OiBFcTxhbnk+ID0gZXEoKHgsIHkpID0+IHtcbiAgaWYgKHggPT09IHkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IHR4ID0gVHlwZS50eXBlT2YoeCk7XG4gIGNvbnN0IHR5ID0gVHlwZS50eXBlT2YoeSk7XG4gIGlmICh0eCAhPT0gdHkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoVHlwZS5pc0VxdWF0YWJsZVR5cGUodHgpKSB7XG4gICAgcmV0dXJuIHggPT09IHk7XG5cbiAgfSBlbHNlIGlmICh0eCA9PT0gJ2FycmF5Jykge1xuICAgIHJldHVybiBlcUFycmF5KGVxQW55KS5lcSh4LCB5KTtcblxuICB9IGVsc2UgaWYgKHR4ID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBlcVJlY29yZChlcUFueSkuZXEoeCwgeSk7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59KTtcbiIsImV4cG9ydCBjb25zdCBtYXAgPSA8QSwgQj4oeHM6IEFycmF5TGlrZTxBPiwgZjogKGE6IEEpID0+IEIpOiBCW10gPT4ge1xuICBjb25zdCBsZW4gPSB4cy5sZW5ndGg7XG4gIGNvbnN0IHIgPSBuZXcgQXJyYXkobGVuKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICByW2ldID0gZih4KTtcbiAgfVxuICByZXR1cm4gcjtcbn07XG5cbi8qKiBtYXAgYSBmdW5jdGlvbiBvdmVyIGFuIGFycmF5LCB0aGVuIG1hcCBhbm90aGVyIGZ1bmN0aW9uIG92ZXIgZXZlcnkgaXRlbSBleGNlcHQgdGhlIGxhc3QgKi9cbmV4cG9ydCBjb25zdCBtYXBEZWxpbWl0ID0gPEEsIEI+ICh4czogQXJyYXlMaWtlPEE+LCBmOiAoYTogQSkgPT4gQiwgZGVsaW1pdDogKGI6IEIpID0+IEIpOiBCW10gPT4ge1xuICBjb25zdCBsZW4gPSB4cy5sZW5ndGg7XG4gIGNvbnN0IHIgPSBuZXcgQXJyYXkobGVuKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW4gLSAxOyBpKyspIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgcltpXSA9IGRlbGltaXQoZih4KSk7XG4gIH1cbiAgaWYgKGxlbiA+IDApIHtcbiAgICByW2xlbiAtIDFdID0gKGYoeHNbbGVuIC0gMV0pKTtcbiAgfVxuXG4gIHJldHVybiByO1xufTtcblxuZXhwb3J0IGNvbnN0IHNvcnQgPSA8QT4gKHhzOiBBcnJheUxpa2U8QT4sIGNvbXBhcmVGbj86IChhOiBBLCBiOiBBKSA9PiBudW1iZXIpOiBBW10gPT4ge1xuICBjb25zdCBjbG9uZTogQVtdID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoeHMpO1xuICByZXR1cm4gY2xvbmUuc29ydChjb21wYXJlRm4pO1xufTtcbiIsImV4cG9ydCBjb25zdCB0eXBlT2YgPSAoeDogYW55KSA9PiB7XG4gIGlmICh4ID09PSBudWxsKSB7XG4gICAgcmV0dXJuICdudWxsJztcbiAgfVxuICBpZiAoeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuICd1bmRlZmluZWQnO1xuICB9XG4gIGNvbnN0IHQgPSB0eXBlb2YgeDtcbiAgaWYgKHQgPT09ICdvYmplY3QnICYmIChBcnJheS5wcm90b3R5cGUuaXNQcm90b3R5cGVPZih4KSB8fCB4LmNvbnN0cnVjdG9yICYmIHguY29uc3RydWN0b3IubmFtZSA9PT0gJ0FycmF5JykpIHtcbiAgICByZXR1cm4gJ2FycmF5JztcbiAgfVxuICBpZiAodCA9PT0gJ29iamVjdCcgJiYgKFN0cmluZy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZih4KSB8fCB4LmNvbnN0cnVjdG9yICYmIHguY29uc3RydWN0b3IubmFtZSA9PT0gJ1N0cmluZycpKSB7XG4gICAgcmV0dXJuICdzdHJpbmcnO1xuICB9XG4gIHJldHVybiB0O1xufTtcblxuY29uc3QgaXNUeXBlID0gPFQ+KHR5cGU6IHN0cmluZykgPT4gKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBUID0+IHR5cGVPZih2YWx1ZSkgPT09IHR5cGU7XG5cbmV4cG9ydCBjb25zdCBpc1N0cmluZyA9IGlzVHlwZTxzdHJpbmc+KCdzdHJpbmcnKTtcbmV4cG9ydCBjb25zdCBpc09iamVjdCA9IGlzVHlwZTxPYmplY3Q+KCdvYmplY3QnKTtcbmV4cG9ydCBjb25zdCBpc0FycmF5ID0gaXNUeXBlPEFycmF5PHVua25vd24+PignYXJyYXknKTtcbmV4cG9ydCBjb25zdCBpc051bGwgPSBpc1R5cGU8bnVsbD4oJ251bGwnKTtcbmV4cG9ydCBjb25zdCBpc0Jvb2xlYW4gPSBpc1R5cGU8Ym9vbGVhbj4oJ2Jvb2xlYW4nKTtcbmV4cG9ydCBjb25zdCBpc1VuZGVmaW5lZCA9IGlzVHlwZTx1bmRlZmluZWQ+KCd1bmRlZmluZWQnKTtcbmV4cG9ydCBjb25zdCBpc0Z1bmN0aW9uID0gaXNUeXBlPEZ1bmN0aW9uPignZnVuY3Rpb24nKTtcbmV4cG9ydCBjb25zdCBpc051bWJlciA9IGlzVHlwZTxudW1iZXI+KCdudW1iZXInKTtcblxuZXhwb3J0IGNvbnN0IGlzRXF1YXRhYmxlVHlwZSA9ICh4OiBzdHJpbmcpOiBib29sZWFuID0+XG4gIFsgJ3VuZGVmaW5lZCcsICdib29sZWFuJywgJ251bWJlcicsICdzdHJpbmcnLCAnZnVuY3Rpb24nLCAneG1sJywgJ251bGwnIF0uaW5kZXhPZih4KSAhPT0gLTE7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG4gICAgICAgIGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcbiAgICAgICAgfVxuICAgIH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucnYgPSAoKSA9PiAoXCIxLjUuMlwiKSIsIl9fd2VicGFja19yZXF1aXJlX18ucnVpZCA9IFwiYnVuZGxlcj1yc3BhY2tAMS41LjJcIjtcbiIsImltcG9ydCBQbHVnaW4gZnJvbSAnLi9QbHVnaW4nO1xuXG5QbHVnaW4oKTtcblxuLyoqICoqKioqXG4gKiBETyBOT1QgRVhQT1JUIEFOWVRISU5HXG4gKlxuICogSUYgWU9VIERPIFJPTExVUCBXSUxMIExFQVZFIEEgR0xPQkFMIE9OIFRIRSBQQUdFXG4gKioqKioqKi9cbiJdLCJuYW1lcyI6WyJFcSIsIkZ1biIsIk9wdGlvbmFsIiwiVHlwZSIsIm5hdGl2ZVNsaWNlIiwiQXJyYXkiLCJuYXRpdmVJbmRleE9mIiwibmF0aXZlUHVzaCIsInJhd0luZGV4T2YiLCJ0cyIsInQiLCJpbmRleE9mIiwieHMiLCJ4IiwiciIsImNvbnRhaW5zIiwiZXhpc3RzIiwicHJlZCIsImkiLCJsZW4iLCJyYW5nZSIsIm51bSIsImYiLCJjaHVuayIsImFycmF5Iiwic2l6ZSIsInMiLCJtYXAiLCJlYWNoIiwiZWFjaHIiLCJwYXJ0aXRpb24iLCJwYXNzIiwiZmFpbCIsImFyciIsImZpbHRlciIsImdyb3VwQnkiLCJ3YXNUeXBlIiwiZ3JvdXAiLCJ0eXBlIiwiZm9sZHIiLCJhY2MiLCJmb2xkbCIsImZpbmRVbnRpbCIsInVudGlsIiwiZmluZCIsImZpbmRJbmRleCIsImZpbmRMYXN0SW5kZXgiLCJmbGF0dGVuIiwiRXJyb3IiLCJiaW5kIiwiZm9yYWxsIiwiZXF1YWwiLCJhMSIsImEyIiwiZXEiLCJyZXZlcnNlIiwiZGlmZmVyZW5jZSIsIm1hcFRvT2JqZWN0IiwiU3RyaW5nIiwicHVyZSIsInNvcnQiLCJjb21wYXJhdG9yIiwiY29weSIsImdldCIsImhlYWQiLCJsYXN0IiwiZnJvbSIsImZpbmRNYXAiLCJ1bmlxdWUiLCJpc0R1cGxpY2F0ZWQiLCJDZWxsIiwiaW5pdGlhbCIsInZhbHVlIiwic2V0IiwidiIsIm5vb3AiLCJub2FyZyIsImNvbXBvc2UiLCJmYSIsImZiIiwiYXJncyIsImNvbXBvc2UxIiwiZmJjIiwiZmFiIiwiYSIsImNvbnN0YW50IiwiaWRlbnRpdHkiLCJ0cmlwbGVFcXVhbHMiLCJiIiwiY3VycnkiLCJmbiIsImluaXRpYWxBcmdzIiwicmVzdEFyZ3MiLCJhbGwiLCJub3QiLCJkaWUiLCJtc2ciLCJhcHBseSIsImNhbGwiLCJuZXZlciIsImFsd2F5cyIsIndlYWtlbiIsInBpcGUiLCJhYiIsImJjIiwiY2QiLCJkZSIsImVmIiwiZmciLCJnaCIsImMiLCJkIiwiZSIsImciLCJ0YWciLCJvbk5vbmUiLCJvblNvbWUiLCJtYXBwZXIiLCJiaW5kZXIiLCJwcmVkaWNhdGUiLCJyZXBsYWNlbWVudCIsInRodW5rIiwibWVzc2FnZSIsIndvcmtlciIsIlN0ckFwcGVuZCIsImNoZWNrUmFuZ2UiLCJzdHIiLCJzdWJzdHIiLCJzdGFydCIsInN1cHBsYW50Iiwib2JqIiwiaXNTdHJpbmdPck51bWJlciIsImZ1bGxNYXRjaCIsImtleSIsInJlbW92ZUxlYWRpbmciLCJwcmVmaXgiLCJzdGFydHNXaXRoIiwicmVtb3ZlVHJhaWxpbmciLCJzdWZmaXgiLCJlbmRzV2l0aCIsImVuc3VyZUxlYWRpbmciLCJlbnN1cmVUcmFpbGluZyIsImVuZCIsImlkeCIsImNhcGl0YWxpemUiLCJibGFuayIsInRyaW0iLCJsVHJpbSIsInJUcmltIiwiaXNOb3RFbXB0eSIsImlzRW1wdHkiLCJyZXBlYXQiLCJjb3VudCIsImZyb21Db2RlUG9pbnQiLCJ0b0ludCIsInJhZGl4IiwicGFyc2VJbnQiLCJpc05hTiIsInRvRmxvYXQiLCJwYXJzZUZsb2F0IiwiYWRhcHRhYmxlIiwicmF0ZSIsInRpbWVyIiwiY2FuY2VsIiwiY2xlYXJUaW1lb3V0IiwidGhyb3R0bGUiLCJuZXdBcmdzIiwic2V0VGltZW91dCIsInRlbXBBcmdzIiwiZmlyc3QiLCJnZXRQcm90b3R5cGVPZiIsIk9iamVjdCIsImhhc1Byb3RvIiwiY29uc3RydWN0b3IiLCJ0eXBlT2YiLCJvIiwicHJvdG8iLCJpc1R5cGUiLCJpc1NpbXBsZVR5cGUiLCJpcyIsImlzT2JqZWN0IiwiaXNTdHJpbmciLCJpc1BsYWluT2JqZWN0IiwiaXNBcnJheSIsImlzTnVsbCIsImlzQm9vbGVhbiIsImlzVW5kZWZpbmVkIiwidW5kZWZpbmVkIiwiaXNOdWxsYWJsZSIsImlzTm9uTnVsbGFibGUiLCJpc0Z1bmN0aW9uIiwiaXNOdW1iZXIiLCJpc0FycmF5T2YiLCJpc1Byb21pc2VMaWtlIiwiYWRkVG9TdGFydCIsImFkZFRvRW5kIiwicmVtb3ZlRnJvbVN0YXJ0IiwibnVtQ2hhcnMiLCJyZW1vdmVGcm9tRW5kIiwiUGx1Z2luTWFuYWdlciIsIkFwaSIsIkNvbW1hbmRzIiwiT3B0aW9ucyIsIkNoYXJNYXAiLCJBdXRvY29tcGxldGlvbiIsIkJ1dHRvbnMiLCJlZGl0b3IiLCJjaGFyTWFwIiwiQWN0aW9ucyIsImdldENoYXJNYXAiLCJpbnNlcnRDaGFyIiwiY2hyIiwiRGlhbG9nIiwicmVnaXN0ZXIiLCJmaXJlSW5zZXJ0Q3VzdG9tQ2hhciIsIm9wdGlvbiIsIm5hbWUiLCJyZWdpc3Rlck9wdGlvbiIsImNoYXJNYXBQcm9jZXNzb3IiLCJnZXRDaGFyTWFwQXBwZW5kIiwiRXZlbnRzIiwiZXZ0Q2hyIiwiQXJyIiwiVG9vbHMiLCJVc2VyRGVmaW5lZCIsImdldERlZmF1bHRDaGFyTWFwIiwiY2hhcm1hcEZpbHRlciIsImNoYXJtYXAiLCJpdGVtIiwiZ2V0Q2hhcnNGcm9tT3B0aW9uIiwib3B0aW9uVmFsdWUiLCJleHRlbmRDaGFyTWFwIiwidXNlckNoYXJNYXAiLCJ1c2VyQ2hhck1hcEFwcGVuZCIsInVzZXJEZWZpbmVkR3JvdXAiLCJjZyIsImdyb3VwcyIsIlN0cmluZ3MiLCJjaGFyTWF0Y2hlcyIsImNoYXJDb2RlIiwibG93ZXJDYXNlUGF0dGVybiIsInNjYW4iLCJwYXR0ZXJuIiwibWF0Y2hlcyIsIm0iLCJTY2FuIiwiaW5pdCIsIl9tYXhSZXN1bHRzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJfcmVqZWN0IiwiYXV0b2NvbXBsZXRlQXBpIiwicm5nIiwib25TZXR1cEVkaXRhYmxlIiwiYXBpIiwibm9kZUNoYW5nZWQiLCJvbkFjdGlvbiIsIlRocm90dGxlciIsInBhdHRlcm5OYW1lIiwib3BlbiIsIm1ha2VHcm91cEl0ZW1zIiwibWFrZVRhYnMiLCJjaGFyR3JvdXAiLCJtYWtlUGFuZWwiLCJtYWtlVGFiUGFuZWwiLCJjdXJyZW50VGFiIiwic2NhbkFuZFNldCIsImRpYWxvZ0FwaSIsIml0ZW1zIiwiU0VBUkNIX0RFTEFZIiwidXBkYXRlRmlsdGVyIiwiYm9keSIsImluaXRpYWxEYXRhIiwiYnJpZGdlU3BlYyIsImRldGFpbHMiLCJjaGFuZ2VEYXRhIiwiUGx1Z2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsNkRBQWUsTUFBTSxFQUFDO0FBQ2Y7Ozs7Ozs7Ozs7Ozs7O0FDSFA7O0FBRUEsNkRBQWUsTUFBTSxFQUFDO0FBQ2Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0g2QjtBQUVQO0FBQ1M7QUFDUDtBQU8vQixNQUFNSSxjQUFjQyxNQUFNLFNBQVMsQ0FBQyxLQUFLO0FBQ3pDLE1BQU1DLGdCQUFnQkQsTUFBTSxTQUFTLENBQUMsT0FBTztBQUM3QyxNQUFNRSxhQUFhRixNQUFNLFNBQVMsQ0FBQyxJQUFJO0FBRXZDLE1BQU1HLGFBQWEsQ0FBS0MsSUFBa0JDLElBQ3hDSixjQUFjLElBQUksQ0FBQ0csSUFBSUM7QUFF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