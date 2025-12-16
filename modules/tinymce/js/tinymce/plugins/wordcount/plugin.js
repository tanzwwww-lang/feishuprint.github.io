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
"../polaris/src/main/ts/ephox/polaris/api/Words.ts": 
/*!*********************************************************!*\
  !*** ../polaris/src/main/ts/ephox/polaris/api/Words.ts ***!
  \*********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getWords: () => (getWords),
  getWordsWithIndices: () => (getWordsWithIndices)
});
/* ESM import */var _words_Words__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../words/Words */ "../polaris/src/main/ts/ephox/polaris/words/Words.ts");

const getWords = _words_Words__WEBPACK_IMPORTED_MODULE_0__.getWords;
const getWordsWithIndices = _words_Words__WEBPACK_IMPORTED_MODULE_0__.getWordsWithIndices;



}),
"../polaris/src/main/ts/ephox/polaris/words/StringMapper.ts": 
/*!******************************************************************!*\
  !*** ../polaris/src/main/ts/ephox/polaris/words/StringMapper.ts ***!
  \******************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  classify: () => (classify)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Arr.ts");
/* ESM import */var _UnicodeData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UnicodeData */ "../polaris/src/main/ts/ephox/polaris/words/UnicodeData.ts");


const SETS = _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.SETS;
const OTHER = _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.OTHER;
const getType = (char)=>{
    let type = OTHER;
    const setsLength = SETS.length;
    for(let j = 0; j < setsLength; ++j){
        const set = SETS[j];
        if (set && set.test(char)) {
            type = j;
            break;
        }
    }
    return type;
};
const memoize = (func)=>{
    const cache = {};
    return (char)=>{
        if (cache[char]) {
            return cache[char];
        } else {
            const result = func(char);
            cache[char] = result;
            return result;
        }
    };
};
const classify = (characters)=>{
    const memoized = memoize(getType);
    return _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.map(characters, memoized);
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
"../polaris/src/main/ts/ephox/polaris/words/WordBoundary.ts": 
/*!******************************************************************!*\
  !*** ../polaris/src/main/ts/ephox/polaris/words/WordBoundary.ts ***!
  \******************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  isWordBoundary: () => (isWordBoundary)
});
/* ESM import */var _UnicodeData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UnicodeData */ "../polaris/src/main/ts/ephox/polaris/words/UnicodeData.ts");

const isWordBoundary = (map, index)=>{
    const type = map[index];
    const nextType = map[index + 1];
    if (index < 0 || index > map.length - 1 && index !== 0) {
        return false;
    }
    // WB5. Don't break between most letters.
    if (type === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.ALETTER && nextType === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.ALETTER) {
        return false;
    }
    const nextNextType = map[index + 2];
    // WB6. Don't break letters across certain punctuation.
    if (type === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.ALETTER && (nextType === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.MIDLETTER || nextType === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.MIDNUMLET || nextType === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.AT) && nextNextType === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.ALETTER) {
        return false;
    }
    const prevType = map[index - 1];
    // WB7. Don't break letters across certain punctuation.
    if ((type === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.MIDLETTER || type === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.MIDNUMLET || nextType === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.AT) && nextType === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.ALETTER && prevType === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.ALETTER) {
        return false;
    }
    // WB8/WB9/WB10. Don't break inside sequences of digits or digits
    // adjacent to letters.
    if ((type === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.NUMERIC || type === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.ALETTER) && (nextType === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.NUMERIC || nextType === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.ALETTER)) {
        return false;
    }
    // WB11. Don't break inside numeric sequences like "3.2" or
    // "3,456.789".
    if ((type === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.MIDNUM || type === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.MIDNUMLET) && nextType === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.NUMERIC && prevType === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.NUMERIC) {
        return false;
    }
    // WB12. Don't break inside numeric sequences like "3.2" or
    // "3,456.789".
    if (type === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.NUMERIC && (nextType === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.MIDNUM || nextType === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.MIDNUMLET) && nextNextType === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.NUMERIC) {
        return false;
    }
    // WB4. Ignore format and extend characters.
    if ((type === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.EXTEND || type === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.FORMAT) && (nextType === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.ALETTER || nextType === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.NUMERIC || nextType === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.KATAKANA || nextType === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.EXTEND || nextType === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.FORMAT) || (nextType === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.EXTEND || // TINY-9654: Only ignore format characters if they do not precede a word boundary. Since some format characters overlap with whitespace characters (ex: \ufeff) and
    // our word extraction logic excludes whitespace characters, if a whitespace-overlapping format character that precedes a word boundary is not split on, whichever word
    // it is a part of will not be added to the list of extracted words, causing inaccuracies.
    nextType === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.FORMAT && (nextNextType === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.ALETTER || nextNextType === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.NUMERIC || nextNextType === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.KATAKANA || nextNextType === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.EXTEND || nextNextType === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.FORMAT)) && (type === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.ALETTER || type === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.NUMERIC || type === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.KATAKANA || type === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.EXTEND || type === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.FORMAT)) {
        return false;
    }
    // WB3. Don't break inside CRLF.
    if (type === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.CR && nextType === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.LF) {
        return false;
    }
    // WB3a. Break before newlines (including CR and LF).
    if (type === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.NEWLINE || type === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.CR || type === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.LF) {
        return true;
    }
    // WB3b. Break after newlines (including CR and LF).
    if (nextType === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.NEWLINE || nextType === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.CR || nextType === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.LF) {
        return true;
    }
    // WB13. Don't break between Katakana characters.
    if (type === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.KATAKANA && nextType === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.KATAKANA) {
        return false;
    }
    // WB13a. Don't break from extenders.
    if (nextType === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.EXTENDNUMLET && (type === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.ALETTER || type === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.NUMERIC || type === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.KATAKANA || type === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.EXTENDNUMLET)) {
        return false;
    }
    // WB13b. Don't break from extenders.
    if (type === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.EXTENDNUMLET && (nextType === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.ALETTER || nextType === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.NUMERIC || nextType === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.KATAKANA)) {
        return false;
    }
    if (type === _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.characterIndices.AT) {
        return false;
    }
    // Break after any character not covered by the rules above.
    return true;
};



}),
"../polaris/src/main/ts/ephox/polaris/words/Words.ts": 
/*!***********************************************************!*\
  !*** ../polaris/src/main/ts/ephox/polaris/words/Words.ts ***!
  \***********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getWords: () => (getWords),
  getWordsWithIndices: () => (getWordsWithIndices)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Arr.ts");
/* ESM import */var _StringMapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StringMapper */ "../polaris/src/main/ts/ephox/polaris/words/StringMapper.ts");
/* ESM import */var _UnicodeData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UnicodeData */ "../polaris/src/main/ts/ephox/polaris/words/UnicodeData.ts");
/* ESM import */var _WordBoundary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WordBoundary */ "../polaris/src/main/ts/ephox/polaris/words/WordBoundary.ts");




const EMPTY_STRING = _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.EMPTY_STRING;
const WHITESPACE = _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.WHITESPACE;
const PUNCTUATION = _UnicodeData__WEBPACK_IMPORTED_MODULE_0__.PUNCTUATION;
const isProtocol = (str)=>str === 'http' || str === 'https';
const findWordEnd = (characters, startIndex)=>{
    let i;
    for(i = startIndex; i < characters.length; i++){
        if (WHITESPACE.test(characters[i])) {
            break;
        }
    }
    return i;
};
const findUrlEnd = (characters, startIndex)=>{
    const endIndex = findWordEnd(characters, startIndex + 1);
    const peakedWord = characters.slice(startIndex + 1, endIndex).join(EMPTY_STRING);
    return peakedWord.substr(0, 3) === '://' ? endIndex : startIndex;
};
const findWordsWithIndices = (chars, sChars, characterMap, options)=>{
    const words = [];
    const indices = [];
    let word = [];
    // Loop through each character in the classification map and determine whether
    // it precedes a word boundary, building an array of distinct words as we go.
    for(let i = 0; i < characterMap.length; ++i){
        // Append this character to the current word.
        word.push(chars[i]);
        // If there's a word boundary between the current character and the next character,
        // append the current word to the words array and start building a new word.
        if ((0,_WordBoundary__WEBPACK_IMPORTED_MODULE_1__.isWordBoundary)(characterMap, i)) {
            const ch = sChars[i];
            if ((options.includeWhitespace || !WHITESPACE.test(ch)) && (options.includePunctuation || !PUNCTUATION.test(ch))) {
                const startOfWord = i - word.length + 1;
                const endOfWord = i + 1;
                const str = sChars.slice(startOfWord, endOfWord).join(EMPTY_STRING);
                if (isProtocol(str)) {
                    const endOfUrl = findUrlEnd(sChars, i);
                    const url = chars.slice(endOfWord, endOfUrl);
                    Array.prototype.push.apply(word, url);
                    i = endOfUrl;
                }
                // If the word is an abbreviation, include the next character if it's a period.
                if (sChars[i + 1] === '.' && /^([a-zA-Z]\.)+$/.test(str + '.')) {
                    word.push(chars[i + 1]);
                    indices.push({
                        start: startOfWord,
                        end: endOfWord + 1
                    });
                } else {
                    indices.push({
                        start: startOfWord,
                        end: endOfWord
                    });
                }
                words.push(word);
            }
            word = [];
        }
    }
    return {
        words,
        indices
    };
};
const getDefaultOptions = ()=>({
        includeWhitespace: false,
        includePunctuation: false
    });
const getWordsWithIndices = (chars, extract, options)=>{
    options = {
        ...getDefaultOptions(),
        ...options
    };
    const extractedChars = _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.map(chars, extract);
    const characterMap = (0,_StringMapper__WEBPACK_IMPORTED_MODULE_3__.classify)(extractedChars);
    return findWordsWithIndices(chars, extractedChars, characterMap, options);
};
const getWords = (chars, extract, options)=>getWordsWithIndices(chars, extract, options).words;



}),
"./src/plugins/wordcount/main/ts/Plugin.ts": 
/*!*************************************************!*\
  !*** ./src/plugins/wordcount/main/ts/Plugin.ts ***!
  \*************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var tinymce_core_api_PluginManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/PluginManager */ "./lib/globals/tinymce/core/api/PluginManager.js");
/* ESM import */var _api_Api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/Api */ "./src/plugins/wordcount/main/ts/api/Api.ts");
/* ESM import */var _api_Commands__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/Commands */ "./src/plugins/wordcount/main/ts/api/Commands.ts");
/* ESM import */var _core_WordCounter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/WordCounter */ "./src/plugins/wordcount/main/ts/core/WordCounter.ts");
/* ESM import */var _ui_Buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/Buttons */ "./src/plugins/wordcount/main/ts/ui/Buttons.ts");





/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((delay = 300)=>{
    tinymce_core_api_PluginManager__WEBPACK_IMPORTED_MODULE_0__["default"].add('wordcount', (editor)=>{
        const api = _api_Api__WEBPACK_IMPORTED_MODULE_1__.get(editor);
        _api_Commands__WEBPACK_IMPORTED_MODULE_2__.register(editor, api);
        _ui_Buttons__WEBPACK_IMPORTED_MODULE_4__.register(editor);
        _core_WordCounter__WEBPACK_IMPORTED_MODULE_3__.setup(editor, api, delay);
        return api;
    });
});


}),
"./src/plugins/wordcount/main/ts/api/Api.ts": 
/*!**************************************************!*\
  !*** ./src/plugins/wordcount/main/ts/api/Api.ts ***!
  \**************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  get: () => (get)
});
/* ESM import */var _core_Count__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Count */ "./src/plugins/wordcount/main/ts/core/Count.ts");

const createBodyCounter = (editor, count)=>()=>count(editor.getBody(), editor.schema);
const createSelectionCounter = (editor, count)=>()=>count(editor.selection.getRng().cloneContents(), editor.schema);
const createBodyWordCounter = (editor)=>createBodyCounter(editor, _core_Count__WEBPACK_IMPORTED_MODULE_0__.countWords);
const get = (editor)=>({
        body: {
            getWordCount: createBodyWordCounter(editor),
            getCharacterCount: createBodyCounter(editor, _core_Count__WEBPACK_IMPORTED_MODULE_0__.countCharacters),
            getCharacterCountWithoutSpaces: createBodyCounter(editor, _core_Count__WEBPACK_IMPORTED_MODULE_0__.countCharactersWithoutSpaces)
        },
        selection: {
            getWordCount: createSelectionCounter(editor, _core_Count__WEBPACK_IMPORTED_MODULE_0__.countWords),
            getCharacterCount: createSelectionCounter(editor, _core_Count__WEBPACK_IMPORTED_MODULE_0__.countCharacters),
            getCharacterCountWithoutSpaces: createSelectionCounter(editor, _core_Count__WEBPACK_IMPORTED_MODULE_0__.countCharactersWithoutSpaces)
        },
        getCount: createBodyWordCounter(editor)
    });



}),
"./src/plugins/wordcount/main/ts/api/Commands.ts": 
/*!*******************************************************!*\
  !*** ./src/plugins/wordcount/main/ts/api/Commands.ts ***!
  \*******************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  register: () => (register)
});
/* ESM import */var _ui_Dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/Dialog */ "./src/plugins/wordcount/main/ts/ui/Dialog.ts");

const register = (editor, api)=>{
    editor.addCommand('mceWordCount', ()=>_ui_Dialog__WEBPACK_IMPORTED_MODULE_0__.open(editor, api));
};



}),
"./src/plugins/wordcount/main/ts/api/Events.ts": 
/*!*****************************************************!*\
  !*** ./src/plugins/wordcount/main/ts/api/Events.ts ***!
  \*****************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  fireWordCountUpdate: () => (fireWordCountUpdate)
});
const fireWordCountUpdate = (editor, api)=>{
    editor.dispatch('wordCountUpdate', {
        wordCount: {
            words: api.body.getWordCount(),
            characters: api.body.getCharacterCount(),
            charactersWithoutSpaces: api.body.getCharacterCountWithoutSpaces()
        }
    });
};



}),
"./src/plugins/wordcount/main/ts/core/Count.ts": 
/*!*****************************************************!*\
  !*** ./src/plugins/wordcount/main/ts/core/Count.ts ***!
  \*****************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  countCharacters: () => (countCharacters),
  countCharactersWithoutSpaces: () => (countCharactersWithoutSpaces),
  countWords: () => (countWords)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Fun.ts");
/* ESM import */var _ephox_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ephox/polaris */ "../polaris/src/main/ts/ephox/polaris/api/Words.ts");
/* ESM import */var _GetText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GetText */ "./src/plugins/wordcount/main/ts/core/GetText.ts");



const removeZwsp = (text)=>text.replace(/\u200B/g, '');
const strLen = (str)=>str.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, '_').length;
const countWords = (node, schema)=>{
    // TODO - TINY-9708: See if TINY-7484 fix can be replaced by adding \u200B to the "format" character class as per Unicode standard
    // TINY-7484: The grapheme word boundary logic used by Polaris states a ZWSP (\u200B) should be treated as
    // a word boundary, however word counting normally does not consider it as anything so we strip it out.
    const text = removeZwsp((0,_GetText__WEBPACK_IMPORTED_MODULE_0__.getText)(node, schema).join('\n'));
    return _ephox_polaris__WEBPACK_IMPORTED_MODULE_1__.getWords(text.split(''), _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.identity).length;
};
const countCharacters = (node, schema)=>{
    const text = (0,_GetText__WEBPACK_IMPORTED_MODULE_0__.getText)(node, schema).join('');
    return strLen(text);
};
const countCharactersWithoutSpaces = (node, schema)=>{
    const text = (0,_GetText__WEBPACK_IMPORTED_MODULE_0__.getText)(node, schema).join('').replace(/\s/g, '');
    return strLen(text);
};



}),
"./src/plugins/wordcount/main/ts/core/GetText.ts": 
/*!*******************************************************!*\
  !*** ./src/plugins/wordcount/main/ts/core/GetText.ts ***!
  \*******************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getText: () => (getText)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Unicode.ts");
/* ESM import */var tinymce_core_api_dom_TreeWalker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/dom/TreeWalker */ "./lib/globals/tinymce/core/api/dom/TreeWalker.js");


const getText = (node, schema)=>{
    const blockElements = schema.getBlockElements();
    const voidElements = schema.getVoidElements();
    const isNewline = (node)=>blockElements[node.nodeName] || voidElements[node.nodeName];
    const textBlocks = [];
    let txt = '';
    const treeWalker = new tinymce_core_api_dom_TreeWalker__WEBPACK_IMPORTED_MODULE_0__["default"](node, node);
    let tempNode;
    while(tempNode = treeWalker.next()){
        if (tempNode.nodeType === 3) {
            txt += _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.removeZwsp(tempNode.data);
        } else if (isNewline(tempNode) && txt.length) {
            textBlocks.push(txt);
            txt = '';
        }
    }
    if (txt.length) {
        textBlocks.push(txt);
    }
    return textBlocks;
};



}),
"./src/plugins/wordcount/main/ts/core/WordCounter.ts": 
/*!***********************************************************!*\
  !*** ./src/plugins/wordcount/main/ts/core/WordCounter.ts ***!
  \***********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  setup: () => (setup),
  updateCount: () => (updateCount)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Throttler.ts");
/* ESM import */var tinymce_core_api_util_Delay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/util/Delay */ "./lib/globals/tinymce/core/api/util/Delay.js");
/* ESM import */var _api_Events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/Events */ "./src/plugins/wordcount/main/ts/api/Events.ts");



const updateCount = (editor, api)=>{
    _api_Events__WEBPACK_IMPORTED_MODULE_1__.fireWordCountUpdate(editor, api);
};
const setup = (editor, api, delay)=>{
    const debouncedUpdate = _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.first(()=>updateCount(editor, api), delay);
    editor.on('init', ()=>{
        updateCount(editor, api);
        tinymce_core_api_util_Delay__WEBPACK_IMPORTED_MODULE_0__["default"].setEditorTimeout(editor, ()=>{
            editor.on('SetContent BeforeAddUndo Undo Redo ViewUpdate keyup', debouncedUpdate.throttle);
        }, 0);
        editor.on('remove', debouncedUpdate.cancel);
    });
};



}),
"./src/plugins/wordcount/main/ts/ui/Buttons.ts": 
/*!*****************************************************!*\
  !*** ./src/plugins/wordcount/main/ts/ui/Buttons.ts ***!
  \*****************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  register: () => (register)
});
const register = (editor)=>{
    const onAction = ()=>editor.execCommand('mceWordCount');
    editor.ui.registry.addButton('wordcount', {
        tooltip: 'Word count',
        icon: 'character-count',
        onAction,
        context: 'any'
    });
    editor.ui.registry.addMenuItem('wordcount', {
        text: 'Word count',
        icon: 'character-count',
        onAction,
        context: 'any'
    });
};



}),
"./src/plugins/wordcount/main/ts/ui/Dialog.ts": 
/*!****************************************************!*\
  !*** ./src/plugins/wordcount/main/ts/ui/Dialog.ts ***!
  \****************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  open: () => (open)
});
const open = (editor, api)=>{
    editor.windowManager.open({
        title: 'Word Count',
        body: {
            type: 'panel',
            items: [
                {
                    type: 'table',
                    header: [
                        'Count',
                        'Document',
                        'Selection'
                    ],
                    cells: [
                        [
                            'Words',
                            String(api.body.getWordCount()),
                            String(api.selection.getWordCount())
                        ],
                        [
                            'Characters (no spaces)',
                            String(api.body.getCharacterCountWithoutSpaces()),
                            String(api.selection.getCharacterCountWithoutSpaces())
                        ],
                        [
                            'Characters',
                            String(api.body.getCharacterCount()),
                            String(api.selection.getCharacterCount())
                        ]
                    ]
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
        ]
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

/*!***********************************************!*\
  !*** ./src/plugins/wordcount/main/ts/Main.ts ***!
  \***********************************************/
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _Plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Plugin */ "./src/plugins/wordcount/main/ts/Plugin.ts");

(0,_Plugin__WEBPACK_IMPORTED_MODULE_0__["default"])(); /** *****
 * DO NOT EXPORT ANYTHING
 *
 * IF YOU DO ROLLUP WILL LEAVE A GLOBAL ON THE PAGE
 *******/ 

})();

})()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdGlueW1jZS9wbHVnaW5zL3dvcmRjb3VudC9wbHVnaW4uanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aW55bWNlLy4vbGliL2dsb2JhbHMvdGlueW1jZS9jb3JlL2FwaS9QbHVnaW5NYW5hZ2VyLmpzIiwid2VicGFjazovL3RpbnltY2UvLi9saWIvZ2xvYmFscy90aW55bWNlL2NvcmUvYXBpL2RvbS9UcmVlV2Fsa2VyLmpzIiwid2VicGFjazovL3RpbnltY2UvLi9saWIvZ2xvYmFscy90aW55bWNlL2NvcmUvYXBpL3V0aWwvRGVsYXkuanMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9rYXRhbWFyaS9zcmMvbWFpbi90cy9lcGhveC9rYXRhbWFyaS9hcGkvQXJyLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4va2F0YW1hcmkvc3JjL21haW4vdHMvZXBob3gva2F0YW1hcmkvYXBpL0Z1bi50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL2thdGFtYXJpL3NyYy9tYWluL3RzL2VwaG94L2thdGFtYXJpL2FwaS9PcHRpb25hbC50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL2thdGFtYXJpL3NyYy9tYWluL3RzL2VwaG94L2thdGFtYXJpL2FwaS9UaHJvdHRsZXIudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9rYXRhbWFyaS9zcmMvbWFpbi90cy9lcGhveC9rYXRhbWFyaS9hcGkvVHlwZS50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL2thdGFtYXJpL3NyYy9tYWluL3RzL2VwaG94L2thdGFtYXJpL2FwaS9Vbmljb2RlLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4vcG9sYXJpcy9zcmMvbWFpbi90cy9lcGhveC9wb2xhcmlzL2FwaS9Xb3Jkcy50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL3BvbGFyaXMvc3JjL21haW4vdHMvZXBob3gvcG9sYXJpcy93b3Jkcy9TdHJpbmdNYXBwZXIudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9wb2xhcmlzL3NyYy9tYWluL3RzL2VwaG94L3BvbGFyaXMvd29yZHMvVW5pY29kZURhdGEudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9wb2xhcmlzL3NyYy9tYWluL3RzL2VwaG94L3BvbGFyaXMvd29yZHMvV29yZEJvdW5kYXJ5LnRzIiwid2VicGFjazovL3RpbnltY2UvLi4vcG9sYXJpcy9zcmMvbWFpbi90cy9lcGhveC9wb2xhcmlzL3dvcmRzL1dvcmRzLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy93b3JkY291bnQvbWFpbi90cy9QbHVnaW4udHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL3dvcmRjb3VudC9tYWluL3RzL2FwaS9BcGkudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL3dvcmRjb3VudC9tYWluL3RzL2FwaS9Db21tYW5kcy50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvd29yZGNvdW50L21haW4vdHMvYXBpL0V2ZW50cy50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvd29yZGNvdW50L21haW4vdHMvY29yZS9Db3VudC50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvd29yZGNvdW50L21haW4vdHMvY29yZS9HZXRUZXh0LnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy93b3JkY291bnQvbWFpbi90cy9jb3JlL1dvcmRDb3VudGVyLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy93b3JkY291bnQvbWFpbi90cy91aS9CdXR0b25zLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy93b3JkY291bnQvbWFpbi90cy91aS9EaWFsb2cudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi8uLi9ub2RlX21vZHVsZXMvQGVwaG94L2Rpc3B1dGUvc3JjL21haW4vdHMvYXBpL0VxLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4vLi4vbm9kZV9tb2R1bGVzL0BlcGhveC9kaXNwdXRlL3NyYy9tYWluL3RzL2NvcmUvQXJyYXlVdGlsLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4vLi4vbm9kZV9tb2R1bGVzL0BlcGhveC9kaXNwdXRlL3NyYy9tYWluL3RzL2NvcmUvVHlwZS50cyIsIndlYnBhY2s6Ly90aW55bWNlL3dlYnBhY2svcnVudGltZS9kZWZpbmVfcHJvcGVydHlfZ2V0dGVycyIsIndlYnBhY2s6Ly90aW55bWNlL3dlYnBhY2svcnVudGltZS9oYXNfb3duX3Byb3BlcnR5Iiwid2VicGFjazovL3RpbnltY2Uvd2VicGFjay9ydW50aW1lL21ha2VfbmFtZXNwYWNlX29iamVjdCIsIndlYnBhY2s6Ly90aW55bWNlL3dlYnBhY2svcnVudGltZS9yc3BhY2tfdmVyc2lvbiIsIndlYnBhY2s6Ly90aW55bWNlL3dlYnBhY2svcnVudGltZS9yc3BhY2tfdW5pcXVlX2lkIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy93b3JkY291bnQvbWFpbi90cy9NYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBnbG9iYWwgPSB0aW55bWNlLnV0aWwuVG9vbHMucmVzb2x2ZSgndGlueW1jZS5QbHVnaW5NYW5hZ2VyJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGdsb2JhbDtcbmV4cG9ydCB2YXIgUGx1Z2luTWFuYWdlciA9IGdsb2JhbDtcbiIsInZhciBnbG9iYWwgPSB0aW55bWNlLnV0aWwuVG9vbHMucmVzb2x2ZSgndGlueW1jZS5kb20uVHJlZVdhbGtlcicpO1xuXG5leHBvcnQgZGVmYXVsdCBnbG9iYWw7XG5leHBvcnQgdmFyIFRyZWVXYWxrZXIgPSBnbG9iYWw7XG4iLCJ2YXIgZ2xvYmFsID0gdGlueW1jZS51dGlsLlRvb2xzLnJlc29sdmUoJ3RpbnltY2UudXRpbC5EZWxheScpO1xuXG5leHBvcnQgZGVmYXVsdCBnbG9iYWw7XG5leHBvcnQgdmFyIERlbGF5ID0gZ2xvYmFsO1xuIiwiaW1wb3J0IHsgRXEgfSBmcm9tICdAZXBob3gvZGlzcHV0ZSc7XG5cbmltcG9ydCAqIGFzIEZ1biBmcm9tICcuL0Z1bic7XG5pbXBvcnQgeyBPcHRpb25hbCB9IGZyb20gJy4vT3B0aW9uYWwnO1xuaW1wb3J0ICogYXMgVHlwZSBmcm9tICcuL1R5cGUnO1xuXG50eXBlIEFycmF5TW9ycGhpc208VCwgVT4gPSAoeDogVCwgaTogbnVtYmVyKSA9PiBVO1xudHlwZSBBcnJheUd1YXJkUHJlZGljYXRlPFQsIFUgZXh0ZW5kcyBUPiA9ICh4OiBULCBpOiBudW1iZXIpID0+IHggaXMgVTtcbnR5cGUgQXJyYXlQcmVkaWNhdGU8VD4gPSBBcnJheU1vcnBoaXNtPFQsIGJvb2xlYW4+O1xudHlwZSBDb21wYXJhdG9yPFQ+ID0gKGE6IFQsIGI6IFQpID0+IG51bWJlcjtcblxuY29uc3QgbmF0aXZlU2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5jb25zdCBuYXRpdmVJbmRleE9mID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2Y7XG5jb25zdCBuYXRpdmVQdXNoID0gQXJyYXkucHJvdG90eXBlLnB1c2g7XG5cbmNvbnN0IHJhd0luZGV4T2YgPSA8VD4gKHRzOiBBcnJheUxpa2U8VD4sIHQ6IFQpOiBudW1iZXIgPT5cbiAgbmF0aXZlSW5kZXhPZi5jYWxsKHRzLCB0KTtcblxuZXhwb3J0IGNvbnN0IGluZGV4T2YgPSA8VCA9IGFueT4oeHM6IEFycmF5TGlrZTxUPiwgeDogVCk6IE9wdGlvbmFsPG51bWJlcj4gPT4ge1xuICAvLyBUaGUgcmF3SW5kZXhPZiBtZXRob2QgZG9lcyBub3Qgd3JhcCB1cCBpbiBhbiBvcHRpb24uIFRoaXMgaXMgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMuXG4gIGNvbnN0IHIgPSByYXdJbmRleE9mKHhzLCB4KTtcbiAgcmV0dXJuIHIgPT09IC0xID8gT3B0aW9uYWwubm9uZSgpIDogT3B0aW9uYWwuc29tZShyKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb250YWlucyA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCB4OiBUKTogYm9vbGVhbiA9PiByYXdJbmRleE9mKHhzLCB4KSA+IC0xO1xuXG5leHBvcnQgY29uc3QgZXhpc3RzID0gPFQgPSBhbnk+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+KTogYm9vbGVhbiA9PiB7XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICBpZiAocHJlZCh4LCBpKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IGNvbnN0IHJhbmdlID0gPFQ+KG51bTogbnVtYmVyLCBmOiAoYTogbnVtYmVyKSA9PiBUKTogVFtdID0+IHtcbiAgY29uc3QgcjogVFtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtOyBpKyspIHtcbiAgICByLnB1c2goZihpKSk7XG4gIH1cbiAgcmV0dXJuIHI7XG59O1xuXG4vLyBJdCdzIGEgdG90YWwgbWljcm8gb3B0aW1pc2F0aW9uLCBidXQgdGhlc2UgZG8gbWFrZSBzb21lIGRpZmZlcmVuY2UuXG4vLyBQYXJ0aWN1bGFybHkgZm9yIGJyb3dzZXJzIG90aGVyIHRoYW4gQ2hyb21lLlxuLy8gLSBsZW5ndGggY2FjaGluZ1xuLy8gaHR0cDovL2pzcGVyZi5jb20vYnJvd3Nlci1kaWV0LWpxdWVyeS1lYWNoLXZzLWZvci1sb29wLzY5XG4vLyAtIG5vdCB1c2luZyBwdXNoXG4vLyBodHRwOi8vanNwZXJmLmNvbS9hcnJheS1kaXJlY3QtYXNzaWdubWVudC12cy1wdXNoLzJcblxuZXhwb3J0IGNvbnN0IGNodW5rID0gPFQ+KGFycmF5OiBBcnJheUxpa2U8VD4sIHNpemU6IG51bWJlcik6IFRbXVtdID0+IHtcbiAgY29uc3QgcjogVFtdW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkgKz0gc2l6ZSkge1xuICAgIGNvbnN0IHM6IFRbXSA9IG5hdGl2ZVNsaWNlLmNhbGwoYXJyYXksIGksIGkgKyBzaXplKTtcbiAgICByLnB1c2gocyk7XG4gIH1cbiAgcmV0dXJuIHI7XG59O1xuXG5leHBvcnQgY29uc3QgbWFwID0gPFQgPSBhbnksIFUgPSBhbnk+KHhzOiBBcnJheUxpa2U8VD4sIGY6IEFycmF5TW9ycGhpc208VCwgVT4pOiBVW10gPT4ge1xuICAvLyBwcmUtYWxsb2NhdGluZyBhcnJheSBzaXplIHdoZW4gaXQncyBndWFyYW50ZWVkIHRvIGJlIGtub3duXG4gIC8vIGh0dHA6Ly9qc3BlcmYuY29tL3B1c2gtYWxsb2NhdGVkLXZzLWR5bmFtaWMvMjJcbiAgY29uc3QgbGVuID0geHMubGVuZ3RoO1xuICBjb25zdCByID0gbmV3IEFycmF5KGxlbik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgcltpXSA9IGYoeCwgaSk7XG4gIH1cbiAgcmV0dXJuIHI7XG59O1xuXG4vLyBVbndvdW5kIGltcGxlbWVudGluZyBvdGhlciBmdW5jdGlvbnMgaW4gdGVybXMgb2YgZWFjaC5cbi8vIFRoZSBjb2RlIHNpemUgaXMgcm91Z2hseSB0aGUgc2FtZSwgYW5kIGl0IHNob3VsZCBhbGxvdyBmb3IgYmV0dGVyIG9wdGltaXNhdGlvbi5cbi8vIGNvbnN0IGVhY2ggPSBmdW5jdGlvbjxULCBVPih4czogVFtdLCBmOiAoeDogVCwgaT86IG51bWJlciwgeHM/OiBUW10pID0+IHZvaWQpOiB2b2lkIHtcbmV4cG9ydCBjb25zdCBlYWNoID0gPFQgPSBhbnk+KHhzOiBBcnJheUxpa2U8VD4sIGY6IEFycmF5TW9ycGhpc208VCwgdm9pZD4pOiB2b2lkID0+IHtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHhzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIGYoeCwgaSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBlYWNociA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCBmOiBBcnJheU1vcnBoaXNtPFQsIHZvaWQ+KTogdm9pZCA9PiB7XG4gIGZvciAobGV0IGkgPSB4cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICBmKHgsIGkpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgcGFydGl0aW9uID0gPFQgPSBhbnk+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+KTogeyBwYXNzOiBUW107IGZhaWw6IFRbXSB9ID0+IHtcbiAgY29uc3QgcGFzczogVFtdID0gW107XG4gIGNvbnN0IGZhaWw6IFRbXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0geHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgY29uc3QgYXJyID0gcHJlZCh4LCBpKSA/IHBhc3MgOiBmYWlsO1xuICAgIGFyci5wdXNoKHgpO1xuICB9XG4gIHJldHVybiB7IHBhc3MsIGZhaWwgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBmaWx0ZXI6IHtcbiAgPFQsIFUgZXh0ZW5kcyBUPih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheUd1YXJkUHJlZGljYXRlPFQsIFU+KTogVVtdO1xuICA8VD4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlQcmVkaWNhdGU8VD4pOiBUW107XG59ID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+KTogVFtdID0+IHtcbiAgY29uc3QgcjogVFtdID0gW107XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICBpZiAocHJlZCh4LCBpKSkge1xuICAgICAgci5wdXNoKHgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcjtcbn07XG5cbi8qXG4gKiBHcm91cHMgYW4gYXJyYXkgaW50byBjb250aWd1b3VzIGFycmF5cyBvZiBsaWtlIGVsZW1lbnRzLiBXaGV0aGVyIGFuIGVsZW1lbnQgaXMgbGlrZSBvciBub3QgZGVwZW5kcyBvbiBmLlxuICpcbiAqIGYgaXMgYSBmdW5jdGlvbiB0aGF0IGRlcml2ZXMgYSB2YWx1ZSBmcm9tIGFuIGVsZW1lbnQgLSBlLmcuIHRydWUgb3IgZmFsc2UsIG9yIGEgc3RyaW5nLlxuICogRWxlbWVudHMgYXJlIGxpa2UgaWYgdGhpcyBmdW5jdGlvbiBnZW5lcmF0ZXMgdGhlIHNhbWUgdmFsdWUgZm9yIHRoZW0gKGFjY29yZGluZyB0byA9PT0pLlxuICpcbiAqXG4gKiBPcmRlciBvZiB0aGUgZWxlbWVudHMgaXMgcHJlc2VydmVkLiBBcnIuZmxhdHRlbigpIG9uIHRoZSByZXN1bHQgd2lsbCByZXR1cm4gdGhlIG9yaWdpbmFsIGxpc3QsIGFzIHdpdGggSGFza2VsbCBncm91cEJ5IGZ1bmN0aW9uLlxuICogIEZvciBhIGdvb2QgZXhwbGFuYXRpb24sIHNlZSB0aGUgZ3JvdXAgZnVuY3Rpb24gKHdoaWNoIGlzIGEgc3BlY2lhbCBjYXNlIG9mIGdyb3VwQnkpXG4gKiAgaHR0cDovL2hhY2thZ2UuaGFza2VsbC5vcmcvcGFja2FnZS9iYXNlLTQuNy4wLjAvZG9jcy9EYXRhLUxpc3QuaHRtbCN2Omdyb3VwXG4gKi9cbmV4cG9ydCBjb25zdCBncm91cEJ5ID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4sIGY6IChhOiBUKSA9PiBhbnkpOiBUW11bXSA9PiB7XG4gIGlmICh4cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gW107XG4gIH0gZWxzZSB7XG4gICAgbGV0IHdhc1R5cGUgPSBmKHhzWzBdKTsgLy8gaW5pdGlhbCBjYXNlIGZvciBtYXRjaGluZ1xuICAgIGNvbnN0IHI6IFRbXVtdID0gW107XG4gICAgbGV0IGdyb3VwOiBUW10gPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgY29uc3QgeCA9IHhzW2ldO1xuICAgICAgY29uc3QgdHlwZSA9IGYoeCk7XG4gICAgICBpZiAodHlwZSAhPT0gd2FzVHlwZSkge1xuICAgICAgICByLnB1c2goZ3JvdXApO1xuICAgICAgICBncm91cCA9IFtdO1xuICAgICAgfVxuICAgICAgd2FzVHlwZSA9IHR5cGU7XG4gICAgICBncm91cC5wdXNoKHgpO1xuICAgIH1cbiAgICBpZiAoZ3JvdXAubGVuZ3RoICE9PSAwKSB7XG4gICAgICByLnB1c2goZ3JvdXApO1xuICAgIH1cbiAgICByZXR1cm4gcjtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGZvbGRyID0gPFQsIFU+KHhzOiBBcnJheUxpa2U8VD4sIGY6IChhY2M6IFUsIHg6IFQsIGk6IG51bWJlcikgPT4gVSwgYWNjOiBVKTogVSA9PiB7XG4gIGVhY2hyKHhzLCAoeCwgaSkgPT4ge1xuICAgIGFjYyA9IGYoYWNjLCB4LCBpKTtcbiAgfSk7XG4gIHJldHVybiBhY2M7XG59O1xuXG5leHBvcnQgY29uc3QgZm9sZGwgPSA8VCA9IGFueSwgVSA9IGFueT4oeHM6IEFycmF5TGlrZTxUPiwgZjogKGFjYzogVSwgeDogVCwgaTogbnVtYmVyKSA9PiBVLCBhY2M6IFUpOiBVID0+IHtcbiAgZWFjaCh4cywgKHgsIGkpID0+IHtcbiAgICBhY2MgPSBmKGFjYywgeCwgaSk7XG4gIH0pO1xuICByZXR1cm4gYWNjO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmRVbnRpbDoge1xuICA8VCwgVSBleHRlbmRzIFQ+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5R3VhcmRQcmVkaWNhdGU8VCwgVT4sIHVudGlsOiBBcnJheVByZWRpY2F0ZTxUPik6IE9wdGlvbmFsPFU+O1xuICA8VCA9IGFueT4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlQcmVkaWNhdGU8VD4sIHVudGlsOiBBcnJheVByZWRpY2F0ZTxUPik6IE9wdGlvbmFsPFQ+O1xufSA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheVByZWRpY2F0ZTxUPiwgdW50aWw6IEFycmF5UHJlZGljYXRlPFQ+KTogT3B0aW9uYWw8VD4gPT4ge1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0geHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgaWYgKHByZWQoeCwgaSkpIHtcbiAgICAgIHJldHVybiBPcHRpb25hbC5zb21lKHgpO1xuICAgIH0gZWxzZSBpZiAodW50aWwoeCwgaSkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gT3B0aW9uYWwubm9uZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmQ6IHtcbiAgPFQsIFUgZXh0ZW5kcyBUPih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheUd1YXJkUHJlZGljYXRlPFQsIFU+KTogT3B0aW9uYWw8VT47XG4gIDxUID0gYW55Pih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheVByZWRpY2F0ZTxUPik6IE9wdGlvbmFsPFQ+O1xufSA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheVByZWRpY2F0ZTxUPik6IE9wdGlvbmFsPFQ+ID0+IHtcbiAgcmV0dXJuIGZpbmRVbnRpbCh4cywgcHJlZCwgRnVuLm5ldmVyKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmaW5kSW5kZXggPSA8VD4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlQcmVkaWNhdGU8VD4pOiBPcHRpb25hbDxudW1iZXI+ID0+IHtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHhzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIGlmIChwcmVkKHgsIGkpKSB7XG4gICAgICByZXR1cm4gT3B0aW9uYWwuc29tZShpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gT3B0aW9uYWwubm9uZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmRMYXN0SW5kZXggPSA8VD4oYXJyOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+KTogT3B0aW9uYWw8bnVtYmVyPiA9PiB7XG4gIGZvciAobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBpZiAocHJlZChhcnJbaV0sIGkpKSB7XG4gICAgICByZXR1cm4gT3B0aW9uYWwuc29tZShpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gT3B0aW9uYWwubm9uZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZsYXR0ZW4gPSA8VD4oeHM6IEFycmF5TGlrZTxUW10+KTogVFtdID0+IHtcbiAgLy8gTm90ZSwgdGhpcyBpcyBwb3NzaWJsZSBiZWNhdXNlIHB1c2ggc3VwcG9ydHMgbXVsdGlwbGUgYXJndW1lbnRzOlxuICAvLyBodHRwOi8vanNwZXJmLmNvbS9jb25jYXQtcHVzaC82XG4gIC8vIE5vdGUgdGhhdCBpbiB0aGUgcGFzdCwgY29uY2F0KCkgd291bGQgc2lsZW50bHkgd29yayAodmVyeSBzbG93bHkpIGZvciBhcnJheS1saWtlIG9iamVjdHMuXG4gIC8vIFdpdGggdGhpcyBjaGFuZ2UgaXQgd2lsbCB0aHJvdyBhbiBlcnJvci5cbiAgY29uc3QgcjogVFtdID0gW107XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgIC8vIEVuc3VyZSB0aGF0IGVhY2ggdmFsdWUgaXMgYW4gYXJyYXkgaXRzZWxmXG4gICAgaWYgKCFUeXBlLmlzQXJyYXkoeHNbaV0pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Fyci5mbGF0dGVuIGl0ZW0gJyArIGkgKyAnIHdhcyBub3QgYW4gYXJyYXksIGlucHV0OiAnICsgeHMpO1xuICAgIH1cbiAgICBuYXRpdmVQdXNoLmFwcGx5KHIsIHhzW2ldKTtcbiAgfVxuICByZXR1cm4gcjtcbn07XG5cbmV4cG9ydCBjb25zdCBiaW5kID0gPFQgPSBhbnksIFUgPSBhbnk+KHhzOiBBcnJheUxpa2U8VD4sIGY6IEFycmF5TW9ycGhpc208VCwgVVtdPik6IFVbXSA9PlxuICBmbGF0dGVuKG1hcCh4cywgZikpO1xuXG5leHBvcnQgY29uc3QgZm9yYWxsID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+KTogYm9vbGVhbiA9PiB7XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICBpZiAocHJlZCh4LCBpKSAhPT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmV4cG9ydCBjb25zdCBlcXVhbCA9IDxUPihhMTogQXJyYXlMaWtlPFQ+LCBhMjogQXJyYXlMaWtlPFQ+LCBlcTogRXEuRXE8VD4gPSBFcS5lcUFueSk6IGJvb2xlYW4gPT5cbiAgRXEuZXFBcnJheShlcSkuZXEoYTEsIGEyKTtcblxuZXhwb3J0IGNvbnN0IHJldmVyc2UgPSA8VD4oeHM6IEFycmF5TGlrZTxUPik6IFRbXSA9PiB7XG4gIGNvbnN0IHI6IFRbXSA9IG5hdGl2ZVNsaWNlLmNhbGwoeHMsIDApO1xuICByLnJldmVyc2UoKTtcbiAgcmV0dXJuIHI7XG59O1xuXG5leHBvcnQgY29uc3QgZGlmZmVyZW5jZSA9IDxUPihhMTogQXJyYXlMaWtlPFQ+LCBhMjogQXJyYXlMaWtlPFQ+KTogVFtdID0+IGZpbHRlcihhMSwgKHgpID0+ICFjb250YWlucyhhMiwgeCkpO1xuXG5leHBvcnQgY29uc3QgbWFwVG9PYmplY3Q6IHtcbiAgPFQgZXh0ZW5kcyBzdHJpbmcsIFU+KHhzOiBBcnJheUxpa2U8VD4sIGY6ICh4OiBULCBpOiBudW1iZXIpID0+IFUpOiBSZWNvcmQ8VCwgVT47XG4gIDxULCBSIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55Pj4oeHM6IEFycmF5TGlrZTxUPiwgZjogKHg6IFQsIGk6IG51bWJlcikgPT4gUltrZXlvZiBSXSk6IFI7XG59ID0gPFQsIFIgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+Pih4czogQXJyYXlMaWtlPFQ+LCBmOiAoeDogVCwgaTogbnVtYmVyKSA9PiBSW2tleW9mIFJdKTogUiA9PiB7XG4gIGNvbnN0IHIgPSB7fSBhcyBSO1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0geHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgcltTdHJpbmcoeCkgYXMga2V5b2YgUl0gPSBmKHgsIGkpO1xuICB9XG4gIHJldHVybiByO1xufTtcblxuZXhwb3J0IGNvbnN0IHB1cmUgPSA8VD4oeDogVCk6IFRbXSA9PiBbIHggXTtcblxuZXhwb3J0IGNvbnN0IHNvcnQgPSA8VD4oeHM6IEFycmF5TGlrZTxUPiwgY29tcGFyYXRvcj86IENvbXBhcmF0b3I8VD4pOiBUW10gPT4ge1xuICBjb25zdCBjb3B5OiBUW10gPSBuYXRpdmVTbGljZS5jYWxsKHhzLCAwKTtcbiAgY29weS5zb3J0KGNvbXBhcmF0b3IpO1xuICByZXR1cm4gY29weTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXQgPSA8VD4oeHM6IEFycmF5TGlrZTxUPiwgaTogbnVtYmVyKTogT3B0aW9uYWw8VD4gPT4gaSA+PSAwICYmIGkgPCB4cy5sZW5ndGggPyBPcHRpb25hbC5zb21lKHhzW2ldKSA6IE9wdGlvbmFsLm5vbmUoKTtcblxuZXhwb3J0IGNvbnN0IGhlYWQgPSA8VD4oeHM6IEFycmF5TGlrZTxUPik6IE9wdGlvbmFsPFQ+ID0+IGdldCh4cywgMCk7XG5cbmV4cG9ydCBjb25zdCBsYXN0ID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4pOiBPcHRpb25hbDxUPiA9PiBnZXQoeHMsIHhzLmxlbmd0aCAtIDEpO1xuXG5leHBvcnQgY29uc3QgZnJvbTogPFQ+KHg6IEFycmF5TGlrZTxUPikgPT4gVFtdID0gVHlwZS5pc0Z1bmN0aW9uKEFycmF5LmZyb20pID8gQXJyYXkuZnJvbSA6ICh4KSA9PiBuYXRpdmVTbGljZS5jYWxsKHgpO1xuXG5leHBvcnQgY29uc3QgZmluZE1hcCA9IDxBLCBCPihhcnI6IEFycmF5TGlrZTxBPiwgZjogKGE6IEEsIGluZGV4OiBudW1iZXIpID0+IE9wdGlvbmFsPEI+KTogT3B0aW9uYWw8Qj4gPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHIgPSBmKGFycltpXSwgaSk7XG4gICAgaWYgKHIuaXNTb21lKCkpIHtcbiAgICAgIHJldHVybiByO1xuICAgIH1cbiAgfVxuICByZXR1cm4gT3B0aW9uYWwubm9uZTxCPigpO1xufTtcblxuZXhwb3J0IGNvbnN0IHVuaXF1ZSA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCBjb21wYXJhdG9yPzogKGE6IFQsIGI6IFQpID0+IGJvb2xlYW4pOiBUW10gPT4ge1xuICBjb25zdCByOiBUW10gPSBbXTtcblxuICBjb25zdCBpc0R1cGxpY2F0ZWQgPSBUeXBlLmlzRnVuY3Rpb24oY29tcGFyYXRvcikgP1xuICAgICh4OiBUKSA9PiBleGlzdHMociwgKGkpID0+IGNvbXBhcmF0b3IoaSwgeCkpIDpcbiAgICAoeDogVCkgPT4gY29udGFpbnMociwgeCk7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHhzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIGlmICghaXNEdXBsaWNhdGVkKHgpKSB7XG4gICAgICByLnB1c2goeCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHI7XG59O1xuIiwiaW1wb3J0ICogYXMgVHlwZSBmcm9tICcuL1R5cGUnO1xuXG5jb25zdCBub29wOiAoLi4uYXJnczogYW55W10pID0+IHZvaWRcbj0gKCkgPT4geyB9O1xuXG5jb25zdCBub2FyZzogPFQ+KGY6ICgpID0+IFQpID0+ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZFxuPSAoZikgPT4gKCkgPT4gZigpO1xuXG4vKiogQ29tcG9zZSBhIHVuYXJ5IGZ1bmN0aW9uIHdpdGggYW4gbi1hcnkgZnVuY3Rpb24gKi9cbmNvbnN0IGNvbXBvc2UgPSA8VCBleHRlbmRzIGFueVtdLCBVLCBWPihmYTogKHY6IFUpID0+IFYsIGZiOiAoLi4ueDogVCkgPT4gVSk6ICguLi54OiBUKSA9PiBWID0+IHtcbiAgcmV0dXJuICguLi5hcmdzOiBUKSA9PiB7XG4gICAgcmV0dXJuIGZhKGZiLmFwcGx5KG51bGwsIGFyZ3MpKTtcbiAgfTtcbn07XG5cbi8qKiBDb21wb3NlIHR3byB1bmFyeSBmdW5jdGlvbnMuIFNpbWlsYXIgdG8gY29tcG9zZSwgYnV0IGF2b2lkcyB1c2luZyBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuICovXG5jb25zdCBjb21wb3NlMSA9IDxBLCBCLCBDPiAoZmJjOiAoYjogQikgPT4gQywgZmFiOiAoYTogQSkgPT4gQikgPT4gKGE6IEEpOiBDID0+XG4gIGZiYyhmYWIoYSkpO1xuXG5jb25zdCBjb25zdGFudCA9IDxUPih2YWx1ZTogVCk6ICgpID0+IFQgPT4ge1xuICByZXR1cm4gKCkgPT4ge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcbn07XG5cbmNvbnN0IGlkZW50aXR5ID0gPFQgPSBhbnk+KHg6IFQpOiBUID0+IHtcbiAgcmV0dXJuIHg7XG59O1xuXG5jb25zdCB0cmlwbGVFcXVhbHMgPSA8VD4oYTogVCwgYjogVCk6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gYSA9PT0gYjtcbn07XG5cbmZ1bmN0aW9uIGN1cnJ5IDxSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8QSwgUkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoYTogQSwgLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCwgYTogQSk6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPEEsIEIsIFJFU1QgZXh0ZW5kcyBhbnlbXSwgT1VUPihmbjogKGE6IEEsIGI6IEIsIC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQsIGE6IEEsIGI6IEIpOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVDtcbmZ1bmN0aW9uIGN1cnJ5IDxBLCBCLCBDLCBSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46IChhOiBBLCBiOiBCLCBjOiBDLCAuLi5yZXN0QXJnczogUkVTVCkgPT4gT1VULCBhOiBBLCBiOiBCLCBjOiBDKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8QSwgQiwgQywgRCwgUkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoYTogQSwgYjogQiwgYzogQywgZDogRCwgLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCwgYTogQSwgYjogQiwgYzogQywgZDogRCk6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPEEsIEIsIEMsIEQsIEUsIFJFU1QgZXh0ZW5kcyBhbnlbXSwgT1VUPihmbjogKGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQsIGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUpOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVDtcbmZ1bmN0aW9uIGN1cnJ5IDxBLCBCLCBDLCBELCBFLCBGLCBSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46IChhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCBmOiBGLCAuLi5yZXN0QXJnczogUkVTVCkgPT4gT1VULCBhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCBmOiBGKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8QSwgQiwgQywgRCwgRSwgRiwgRywgUkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgZjogRiwgZzogRywgLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCwgYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgZjogRiwgZzogRyk6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPEEsIEIsIEMsIEQsIEUsIEYsIEcsIEgsIFJFU1QgZXh0ZW5kcyBhbnlbXSwgT1VUPihmbjogKGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIGY6IEYsIGc6IEcsIGg6IEgsIC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQsIGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIGY6IEYsIGc6IEcsIGg6IEgpOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVDtcbmZ1bmN0aW9uIGN1cnJ5IDxBLCBCLCBDLCBELCBFLCBGLCBHLCBILCBJLCBSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46IChhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCBmOiBGLCBnOiBHLCBoOiBILCBpOiBJLCAuLi5yZXN0QXJnczogUkVTVCkgPT4gT1VULCBhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCBmOiBGLCBnOiBHLCBoOiBILCBpOiBJKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8QSwgQiwgQywgRCwgRSwgRiwgRywgSCwgSSwgSiwgUkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgZjogRiwgZzogRywgaDogSCwgaTogSSwgajogSiwgLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCwgYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgZjogRiwgZzogRywgaDogSCwgaTogSSwgajogSik6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPE9VVD4oZm46ICguLi5hbGxBcmdzOiBhbnlbXSkgPT4gT1VULCAuLi5pbml0aWFsQXJnczogYW55W10pOiAoLi4ucmVzdEFyZ3M6IGFueVtdKSA9PiBPVVQge1xuICByZXR1cm4gKC4uLnJlc3RBcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IGFsbCA9IGluaXRpYWxBcmdzLmNvbmNhdChyZXN0QXJncyk7XG4gICAgcmV0dXJuIGZuLmFwcGx5KG51bGwsIGFsbCk7XG4gIH07XG59XG5cbmNvbnN0IG5vdCA9IDxUPihmOiAodDogVCkgPT4gYm9vbGVhbikgPT4gKHQ6IFQpOiBib29sZWFuID0+XG4gICFmKHQpO1xuXG5jb25zdCBkaWUgPSAobXNnOiBzdHJpbmcpID0+IHtcbiAgcmV0dXJuICgpOiBuZXZlciA9PiB7XG4gICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XG4gIH07XG59O1xuXG5jb25zdCBhcHBseSA9IDxUPihmOiAoKSA9PiBUKTogVCA9PiB7XG4gIHJldHVybiBmKCk7XG59O1xuXG5jb25zdCBjYWxsID0gKGY6ICgpID0+IGFueSk6IHZvaWQgPT4ge1xuICBmKCk7XG59O1xuXG5jb25zdCBuZXZlcjogKC4uLmFyZ3M6IGFueVtdKSA9PiBmYWxzZSA9IGNvbnN0YW50PGZhbHNlPihmYWxzZSk7XG5jb25zdCBhbHdheXM6ICguLi5hcmdzOiBhbnlbXSkgPT4gdHJ1ZSA9IGNvbnN0YW50PHRydWU+KHRydWUpO1xuXG4vKiBVc2VkIHRvIHdlYWtlbiB0eXBlcyAqL1xuY29uc3Qgd2Vha2VuID0gPEEsIEIgZXh0ZW5kcyBBPihiOiBCKTogQSA9PiBiO1xuXG50eXBlIEZ1bjxYLCBZPiA9ICh4OiBYKSA9PiBZO1xuY29uc3QgcGlwZToge1xuICA8QSwgQj4oYTogQSwgYWI6IEZ1bjxBLCBCPik6IEI7XG4gIDxBLCBCLCBDPihhOiBBLCBhYjogRnVuPEEsIEI+LCBiYzogRnVuPEIsIEM+KTogQztcbiAgPEEsIEIsIEMsIEQ+KGE6IEEsIGFiOiBGdW48QSwgQj4sIGJjOiBGdW48QiwgQz4sIGNkOiBGdW48QywgRD4pOiBEO1xuICA8QSwgQiwgQywgRCwgRT4oYTogQSwgYWI6IEZ1bjxBLCBCPiwgYmM6IEZ1bjxCLCBDPiwgY2Q6IEZ1bjxDLCBEPiwgZGU6IEZ1bjxELCBFPik6IEU7XG4gIDxBLCBCLCBDLCBELCBFLCBGPihhOiBBLCBhYjogRnVuPEEsIEI+LCBiYzogRnVuPEIsIEM+LCBjZDogRnVuPEMsIEQ+LCBkZTogRnVuPEQsIEU+LCBlZjogRnVuPEUsIEY+KTogRjtcbiAgPEEsIEIsIEMsIEQsIEUsIEYsIEc+KGE6IEEsIGFiOiBGdW48QSwgQj4sIGJjOiBGdW48QiwgQz4sIGNkOiBGdW48QywgRD4sIGRlOiBGdW48RCwgRT4sIGVmOiBGdW48RSwgRj4sIGZnOiBGdW48RiwgRz4pOiBHO1xuICA8QSwgQiwgQywgRCwgRSwgRiwgRywgSD4oYTogQSwgYWI6IEZ1bjxBLCBCPiwgYmM6IEZ1bjxCLCBDPiwgY2Q6IEZ1bjxDLCBEPiwgZGU6IEZ1bjxELCBFPiwgZWY6IEZ1bjxFLCBGPiwgZmc6IEZ1bjxGLCBHPiwgZ2g6IEZ1bjxHLCBIPik6IEg7XG59ID1cbiAgPEEsIEIsIEMsIEQsIEUsIEYsIEcsIEg+KGE6IEEsIGFiOiBGdW48QSwgQj4sIGJjPzogRnVuPEIsIEM+LCBjZD86IEZ1bjxDLCBEPiwgZGU/OiBGdW48RCwgRT4sIGVmPzogRnVuPEUsIEY+LCBmZz86IEZ1bjxGLCBHPiwgZ2g/OiBGdW48RywgSD4pOiBCIHwgQyB8IEQgfCBFIHwgRiB8IEcgfCBIID0+IHtcbiAgICBjb25zdCBiID0gYWIoYSk7XG4gICAgaWYgKFR5cGUuaXNOdWxsYWJsZShiYykpIHtcbiAgICAgIHJldHVybiBiO1xuICAgIH1cblxuICAgIGNvbnN0IGMgPSBiYyhiKTtcbiAgICBpZiAoVHlwZS5pc051bGxhYmxlKGNkKSkge1xuICAgICAgcmV0dXJuIGM7XG4gICAgfVxuXG4gICAgY29uc3QgZCA9IGNkKGMpO1xuICAgIGlmIChUeXBlLmlzTnVsbGFibGUoZGUpKSB7XG4gICAgICByZXR1cm4gZDtcbiAgICB9XG5cbiAgICBjb25zdCBlID0gZGUoZCk7XG4gICAgaWYgKFR5cGUuaXNOdWxsYWJsZShlZikpIHtcbiAgICAgIHJldHVybiBlO1xuICAgIH1cblxuICAgIGNvbnN0IGYgPSBlZihlKTtcbiAgICBpZiAoVHlwZS5pc051bGxhYmxlKGZnKSkge1xuICAgICAgcmV0dXJuIGY7XG4gICAgfVxuXG4gICAgY29uc3QgZyA9IGZnKGYpO1xuICAgIGlmIChUeXBlLmlzTnVsbGFibGUoZ2gpKSB7XG4gICAgICByZXR1cm4gZztcbiAgICB9XG5cbiAgICByZXR1cm4gZ2goZyk7XG4gIH07XG5cbmV4cG9ydCB7XG4gIG5vb3AsXG4gIG5vYXJnLFxuICBjb21wb3NlLFxuICBjb21wb3NlMSxcbiAgY29uc3RhbnQsXG4gIGlkZW50aXR5LFxuICB0cmlwbGVFcXVhbHMsXG4gIGN1cnJ5LFxuICBub3QsXG4gIGRpZSxcbiAgYXBwbHksXG4gIGNhbGwsXG4gIG5ldmVyLFxuICBhbHdheXMsXG4gIHdlYWtlbixcbiAgcGlwZVxufTtcbiIsImltcG9ydCAqIGFzIFR5cGUgZnJvbSAnLi9UeXBlJztcblxuLyoqXG4gKiBUaGUgYE9wdGlvbmFsYCB0eXBlIHJlcHJlc2VudHMgYSB2YWx1ZSAob2YgYW55IHR5cGUpIHRoYXQgcG90ZW50aWFsbHkgZG9lc1xuICogbm90IGV4aXN0LiBBbnkgYE9wdGlvbmFsPFQ+YCBjYW4gZWl0aGVyIGJlIGEgYFNvbWU8VD5gIChpbiB3aGljaCBjYXNlIHRoZVxuICogdmFsdWUgZG9lcyBleGlzdCkgb3IgYSBgTm9uZWAgKGluIHdoaWNoIGNhc2UgdGhlIHZhbHVlIGRvZXMgbm90IGV4aXN0KS4gVGhpc1xuICogbW9kdWxlIGRlZmluZXMgYSB3aG9sZSBsb3Qgb2YgRlAtaW5zcGlyZWQgdXRpbGl0eSBmdW5jdGlvbnMgZm9yIGRlYWxpbmcgd2l0aFxuICogYE9wdGlvbmFsYCBvYmplY3RzLlxuICpcbiAqIENvbXBhcmlzb24gd2l0aCBudWxsIG9yIHVuZGVmaW5lZDpcbiAqIC0gV2UgZG9uJ3QgZ2V0IGZhbmN5IG51bGwgY29hbGVzY2luZyBvcGVyYXRvcnMgd2l0aCBgT3B0aW9uYWxgXG4gKiAtIFdlIGRvIGdldCBmYW5jeSBoZWxwZXIgZnVuY3Rpb25zIHdpdGggYE9wdGlvbmFsYFxuICogLSBgT3B0aW9uYWxgIHN1cHBvcnQgbmVzdGluZywgYW5kIGFsbG93IGZvciB0aGUgdHlwZSB0byBzdGlsbCBiZSBudWxsYWJsZSAob3JcbiAqIGFub3RoZXIgYE9wdGlvbmFsYClcbiAqIC0gVGhlcmUgaXMgbm8gb3B0aW9uIHRvIHR1cm4gb2ZmIHN0cmljdC1vcHRpb25hbC1jaGVja3MgbGlrZSB0aGVyZSBpcyBmb3JcbiAqIHN0cmljdC1udWxsLWNoZWNrc1xuICovXG5leHBvcnQgY2xhc3MgT3B0aW9uYWw8VD4ge1xuICBwcml2YXRlIHJlYWRvbmx5IHRhZzogYm9vbGVhbjtcbiAgcHJpdmF0ZSByZWFkb25seSB2YWx1ZT86IFQ7XG5cbiAgLy8gU25lYWt5IG9wdGltaXNhdGlvbjogZXZlcnkgaW5zdGFuY2Ugb2YgT3B0aW9uYWwubm9uZSBpcyBpZGVudGljYWwsIHNvIGp1c3RcbiAgLy8gcmV1c2UgdGhlIHNhbWUgb2JqZWN0XG4gIHByaXZhdGUgc3RhdGljIHNpbmdsZXRvbk5vbmUgPSBuZXcgT3B0aW9uYWw8YW55PihmYWxzZSk7XG5cbiAgLy8gVGhlIGludGVybmFsIHJlcHJlc2VudGF0aW9uIGhhcyBhIGB0YWdgIGFuZCBhIGB2YWx1ZWAsIGJ1dCBib3RoIGFyZVxuICAvLyBwcml2YXRlOiBhYmxlIHRvIGJlIGNvbnNvbGUubG9nZ2VkLCBidXQgbm90IGFibGUgdG8gYmUgYWNjZXNzZWQgYnkgY29kZVxuICBwcml2YXRlIGNvbnN0cnVjdG9yKHRhZzogYm9vbGVhbiwgdmFsdWU/OiBUKSB7XG4gICAgdGhpcy50YWcgPSB0YWc7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgLy8gLS0tIElkZW50aXRpZXMgLS0tXG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgYE9wdGlvbmFsPFQ+YCB0aGF0ICoqZG9lcyoqIGNvbnRhaW4gYSB2YWx1ZS5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgc29tZTxUPih0aGlzOiB2b2lkLCB2YWx1ZTogVCk6IE9wdGlvbmFsPFQ+IHtcbiAgICByZXR1cm4gbmV3IE9wdGlvbmFsKHRydWUsIHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgYE9wdGlvbmFsPFQ+YCB0aGF0ICoqZG9lcyBub3QqKiBjb250YWluIGEgdmFsdWUuIGBUYCBjYW4gYmVcbiAgICogYW55IHR5cGUgYmVjYXVzZSB3ZSBkb24ndCBhY3R1YWxseSBoYXZlIGEgYFRgLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBub25lPFQgPSBuZXZlcj4odGhpczogdm9pZCk6IE9wdGlvbmFsPFQ+IHtcbiAgICByZXR1cm4gT3B0aW9uYWwuc2luZ2xldG9uTm9uZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtIGEgdHJhbnNmb3JtIG9uIGFuIGBPcHRpb25hbGAgdHlwZS4gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXNcbiAgICogYE9wdGlvbmFsYCBjb250YWlucyBhIHZhbHVlIG9yIG5vdCwgYGZvbGRgIHdpbGwgcmV0dXJuIGEgdmFsdWUgb2YgdHlwZSBgVWAuXG4gICAqIElmIHRoaXMgYE9wdGlvbmFsYCBkb2VzIG5vdCBjb250YWluIGEgdmFsdWUsIHRoZSBgVWAgd2lsbCBiZSBjcmVhdGVkIGJ5XG4gICAqIGNhbGxpbmcgYG9uTm9uZWAuIElmIHRoaXMgYE9wdGlvbmFsYCBkb2VzIGNvbnRhaW4gYSB2YWx1ZSwgdGhlIGBVYCB3aWxsIGJlXG4gICAqIGNyZWF0ZWQgYnkgY2FsbGluZyBgb25Tb21lYC5cbiAgICpcbiAgICogRm9yIHRoZSBGUCBlbnRodXNpYXN0cyBpbiB0aGUgcm9vbSwgdGhpcyBmdW5jdGlvbjpcbiAgICogMS4gQ291bGQgYmUgdXNlZCB0byBpbXBsZW1lbnQgYWxsIG9mIHRoZSBmdW5jdGlvbnMgYmVsb3dcbiAgICogMi4gRm9ybXMgYSBjYXRhbW9ycGhpc21cbiAgICovXG4gIHB1YmxpYyBmb2xkPFU+KG9uTm9uZTogKCkgPT4gVSwgb25Tb21lOiAodmFsdWU6IFQpID0+IFUpOiBVIHtcbiAgICBpZiAodGhpcy50YWcpIHtcbiAgICAgIHJldHVybiBvblNvbWUodGhpcy52YWx1ZSBhcyBUKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG9uTm9uZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgdGhpcyBgT3B0aW9uYWxgIG9iamVjdCBjb250YWlucyBhIHZhbHVlLlxuICAgKi9cbiAgcHVibGljIGlzU29tZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50YWc7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIGlmIHRoaXMgYE9wdGlvbmFsYCBvYmplY3QgKipkb2VzIG5vdCoqIGNvbnRhaW4gYSB2YWx1ZS5cbiAgICovXG4gIHB1YmxpYyBpc05vbmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLnRhZztcbiAgfVxuXG4gIC8vIC0tLSBGdW5jdG9yIChuYW1lIHN0b2xlbiBmcm9tIEhhc2tlbGwgLyBtYXRocykgLS0tXG5cbiAgLyoqXG4gICAqIFBlcmZvcm0gYSB0cmFuc2Zvcm0gb24gYW4gYE9wdGlvbmFsYCBvYmplY3QsICoqaWYqKiB0aGVyZSBpcyBhIHZhbHVlLiBJZlxuICAgKiB5b3UgcHJvdmlkZSBhIGZ1bmN0aW9uIHRvIHR1cm4gYSBUIGludG8gYSBVLCB0aGlzIGlzIHRoZSBmdW5jdGlvbiB5b3UgdXNlXG4gICAqIHRvIHR1cm4gYW4gYE9wdGlvbmFsPFQ+YCBpbnRvIGFuIGBPcHRpb25hbDxVPmAuIElmIHRoaXMgKipkb2VzKiogY29udGFpblxuICAgKiBhIHZhbHVlIHRoZW4gdGhlIG91dHB1dCB3aWxsIGFsc28gY29udGFpbiBhIHZhbHVlICh0aGF0IHZhbHVlIGJlaW5nIHRoZVxuICAgKiBvdXRwdXQgb2YgYG1hcHBlcih0aGlzLnZhbHVlKWApLCBhbmQgaWYgdGhpcyAqKmRvZXMgbm90KiogY29udGFpbiBhIHZhbHVlXG4gICAqIHRoZW4gbmVpdGhlciB3aWxsIHRoZSBvdXRwdXQuXG4gICAqL1xuICBwdWJsaWMgbWFwPFU+KG1hcHBlcjogKHZhbHVlOiBUKSA9PiBVKTogT3B0aW9uYWw8VT4ge1xuICAgIGlmICh0aGlzLnRhZykge1xuICAgICAgcmV0dXJuIE9wdGlvbmFsLnNvbWUobWFwcGVyKHRoaXMudmFsdWUgYXMgVCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gT3B0aW9uYWwubm9uZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIC0tLSBNb25hZCAobmFtZSBzdG9sZW4gZnJvbSBIYXNrZWxsIC8gbWF0aHMpIC0tLVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtIGEgdHJhbnNmb3JtIG9uIGFuIGBPcHRpb25hbGAgb2JqZWN0LCAqKmlmKiogdGhlcmUgaXMgYSB2YWx1ZS5cbiAgICogVW5saWtlIGBtYXBgLCBoZXJlIHRoZSB0cmFuc2Zvcm0gaXRzZWxmIGFsc28gcmV0dXJucyBhbiBgT3B0aW9uYWxgLlxuICAgKi9cbiAgcHVibGljIGJpbmQ8VT4oYmluZGVyOiAodmFsdWU6IFQpID0+IE9wdGlvbmFsPFU+KTogT3B0aW9uYWw8VT4ge1xuICAgIGlmICh0aGlzLnRhZykge1xuICAgICAgcmV0dXJuIGJpbmRlcih0aGlzLnZhbHVlIGFzIFQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gT3B0aW9uYWwubm9uZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIC0tLSBUcmF2ZXJzYWJsZSAobmFtZSBzdG9sZW4gZnJvbSBIYXNrZWxsIC8gbWF0aHMpIC0tLVxuXG4gIC8qKlxuICAgKiBGb3IgYSBnaXZlbiBwcmVkaWNhdGUsIHRoaXMgZnVuY3Rpb24gZmluZHMgb3V0IGlmIHRoZXJlICoqZXhpc3RzKiogYSB2YWx1ZVxuICAgKiBpbnNpZGUgdGhpcyBgT3B0aW9uYWxgIG9iamVjdCB0aGF0IG1lZXRzIHRoZSBwcmVkaWNhdGUuIEluIHByYWN0aWNlLCB0aGlzXG4gICAqIG1lYW5zIHRoYXQgZm9yIGBPcHRpb25hbGBzIHRoYXQgZG8gbm90IGNvbnRhaW4gYSB2YWx1ZSBpdCByZXR1cm5zIGZhbHNlIChhc1xuICAgKiBubyBwcmVkaWNhdGUtbWVldGluZyB2YWx1ZSBleGlzdHMpLlxuICAgKi9cbiAgcHVibGljIGV4aXN0cyhwcmVkaWNhdGU6ICh2YWx1ZTogVCkgPT4gYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnRhZyAmJiBwcmVkaWNhdGUodGhpcy52YWx1ZSBhcyBUKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3IgYSBnaXZlbiBwcmVkaWNhdGUsIHRoaXMgZnVuY3Rpb24gZmluZHMgb3V0IGlmICoqYWxsKiogdGhlIHZhbHVlcyBpbnNpZGVcbiAgICogdGhpcyBgT3B0aW9uYWxgIG9iamVjdCBtZWV0IHRoZSBwcmVkaWNhdGUuIEluIHByYWN0aWNlLCB0aGlzIG1lYW5zIHRoYXRcbiAgICogZm9yIGBPcHRpb25hbGBzIHRoYXQgZG8gbm90IGNvbnRhaW4gYSB2YWx1ZSBpdCByZXR1cm5zIHRydWUgKGFzIGFsbCAwXG4gICAqIG9iamVjdHMgZG8gbWVldCB0aGUgcHJlZGljYXRlKS5cbiAgICovXG4gIHB1YmxpYyBmb3JhbGwocHJlZGljYXRlOiAodmFsdWU6IFQpID0+IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMudGFnIHx8IHByZWRpY2F0ZSh0aGlzLnZhbHVlIGFzIFQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvciBhIGdpdmVuIHByZWRpY2F0ZSwgY3JlYXRlIGEgbmV3IGBPcHRpb25hbGAgb2JqZWN0IHRoYXQgd2lsbCByZXRhaW5cbiAgICogYWxsIHRoZSB2YWx1ZXMgaW5zaWRlIHRoZSBvbGQgYE9wdGlvbmFsYCBvYmplY3QgdGhhdCBtZWV0IHRoZSBwcmVkaWNhdGUuXG4gICAqIEluIHByYWN0aWNlLCB0aGUgYE9wdGlvbmFsYCBvYmplY3QgY29udGFpbnMgZWl0aGVyIDAgb3IgMSBvYmplY3RzLCBhbmRcbiAgICogdGhlIG91dHB1dCB3aWxsIGtlZXAgdGhlIChzaW5nbGUpIGlucHV0IG9iamVjdCAoaWYgaXQgZXhpc3RzKSBhcyBsb25nIGFzXG4gICAqIGl0IHBhc3NlcyB0aGUgcHJlZGljYXRlLlxuICAgKi9cbiAgcHVibGljIGZpbHRlcjxVIGV4dGVuZHMgVD4ocHJlZGljYXRlOiAodmFsdWU6IFQpID0+IHZhbHVlIGlzIFUpOiBPcHRpb25hbDxVPjtcbiAgcHVibGljIGZpbHRlcihwcmVkaWNhdGU6ICh2YWx1ZTogVCkgPT4gYm9vbGVhbik6IE9wdGlvbmFsPFQ+O1xuICBwdWJsaWMgZmlsdGVyKHByZWRpY2F0ZTogKHZhbHVlOiBUKSA9PiBib29sZWFuKTogT3B0aW9uYWw8VD4ge1xuICAgIGlmICghdGhpcy50YWcgfHwgcHJlZGljYXRlKHRoaXMudmFsdWUgYXMgVCkpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gT3B0aW9uYWwubm9uZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIC0tLSBHZXR0ZXJzIC0tLVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHZhbHVlIG91dCBvZiB0aGUgaW5zaWRlIG9mIHRoZSBgT3B0aW9uYWxgIG9iamVjdCwgdXNpbmcgYSBkZWZhdWx0XG4gICAqIGByZXBsYWNlbWVudGAgdmFsdWUgaWYgdGhlIHByb3ZpZGVkIGBPcHRpb25hbGAgb2JqZWN0IGRvZXMgbm90IGNvbnRhaW4gYVxuICAgKiB2YWx1ZS5cbiAgICovXG4gIHB1YmxpYyBnZXRPcjxVID0gVD4ocmVwbGFjZW1lbnQ6IFUpOiBUIHwgVSB7XG4gICAgcmV0dXJuIHRoaXMudGFnID8gdGhpcy52YWx1ZSBhcyBUIDogcmVwbGFjZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB2YWx1ZSBvdXQgb2YgdGhlIGluc2lkZSBvZiB0aGUgYE9wdGlvbmFsYCBvYmplY3QsIHVzaW5nIGEgZGVmYXVsdFxuICAgKiBgcmVwbGFjZW1lbnRgIHZhbHVlIGlmIHRoZSBwcm92aWRlZCBgT3B0aW9uYWxgIG9iamVjdCBkb2VzIG5vdCBjb250YWluIGFcbiAgICogdmFsdWUuICBVbmxpa2UgYGdldE9yYCwgaW4gdGhpcyBtZXRob2QgdGhlIGByZXBsYWNlbWVudGAgb2JqZWN0IGlzIGFsc29cbiAgICogYE9wdGlvbmFsYCAtIG1lYW5pbmcgdGhhdCB0aGlzIG1ldGhvZCB3aWxsIGFsd2F5cyByZXR1cm4gYW4gYE9wdGlvbmFsYC5cbiAgICovXG4gIHB1YmxpYyBvcjxVID0gVD4ocmVwbGFjZW1lbnQ6IE9wdGlvbmFsPFU+KTogT3B0aW9uYWw8VCB8IFU+IHtcbiAgICByZXR1cm4gdGhpcy50YWcgPyB0aGlzIDogcmVwbGFjZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB2YWx1ZSBvdXQgb2YgdGhlIGluc2lkZSBvZiB0aGUgYE9wdGlvbmFsYCBvYmplY3QsIHVzaW5nIGEgZGVmYXVsdFxuICAgKiBgcmVwbGFjZW1lbnRgIHZhbHVlIGlmIHRoZSBwcm92aWRlZCBgT3B0aW9uYWxgIG9iamVjdCBkb2VzIG5vdCBjb250YWluIGFcbiAgICogdmFsdWUuIFVubGlrZSBgZ2V0T3JgLCBpbiB0aGlzIG1ldGhvZCB0aGUgYHJlcGxhY2VtZW50YCB2YWx1ZSBpc1xuICAgKiBcInRodW5rZWRcIiAtIHRoYXQgaXMgdG8gc2F5IHRoYXQgeW91IGRvbid0IHBhc3MgYSB2YWx1ZSB0byBgZ2V0T3JUaHVua2AsIHlvdVxuICAgKiBwYXNzIGEgZnVuY3Rpb24gd2hpY2ggKGlmIGNhbGxlZCkgd2lsbCAqKnJldHVybioqIHRoZSBgdmFsdWVgIHlvdSB3YW50IHRvXG4gICAqIHVzZS5cbiAgICovXG4gIHB1YmxpYyBnZXRPclRodW5rPFUgPSBUPih0aHVuazogKCkgPT4gVSk6IFQgfCBVIHtcbiAgICByZXR1cm4gdGhpcy50YWcgPyB0aGlzLnZhbHVlIGFzIFQgOiB0aHVuaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdmFsdWUgb3V0IG9mIHRoZSBpbnNpZGUgb2YgdGhlIGBPcHRpb25hbGAgb2JqZWN0LCB1c2luZyBhIGRlZmF1bHRcbiAgICogYHJlcGxhY2VtZW50YCB2YWx1ZSBpZiB0aGUgcHJvdmlkZWQgT3B0aW9uYWwgb2JqZWN0IGRvZXMgbm90IGNvbnRhaW4gYVxuICAgKiB2YWx1ZS5cbiAgICpcbiAgICogVW5saWtlIGBvcmAsIGluIHRoaXMgbWV0aG9kIHRoZSBgcmVwbGFjZW1lbnRgIHZhbHVlIGlzIFwidGh1bmtlZFwiIC0gdGhhdCBpc1xuICAgKiB0byBzYXkgdGhhdCB5b3UgZG9uJ3QgcGFzcyBhIHZhbHVlIHRvIGBvclRodW5rYCwgeW91IHBhc3MgYSBmdW5jdGlvbiB3aGljaFxuICAgKiAoaWYgY2FsbGVkKSB3aWxsICoqcmV0dXJuKiogdGhlIGB2YWx1ZWAgeW91IHdhbnQgdG8gdXNlLlxuICAgKlxuICAgKiBVbmxpa2UgYGdldE9yVGh1bmtgLCBpbiB0aGlzIG1ldGhvZCB0aGUgYHJlcGxhY2VtZW50YCB2YWx1ZSBpcyBhbHNvXG4gICAqIGBPcHRpb25hbGAsIG1lYW5pbmcgdGhhdCB0aGlzIG1ldGhvZCB3aWxsIGFsd2F5cyByZXR1cm4gYW4gYE9wdGlvbmFsYC5cbiAgICovXG4gIHB1YmxpYyBvclRodW5rPFUgPSBUPih0aHVuazogKCkgPT4gT3B0aW9uYWw8VT4pOiBPcHRpb25hbDxUIHwgVT4ge1xuICAgIHJldHVybiB0aGlzLnRhZyA/IHRoaXMgOiB0aHVuaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdmFsdWUgb3V0IG9mIHRoZSBpbnNpZGUgb2YgdGhlIGBPcHRpb25hbGAgb2JqZWN0LCB0aHJvd2luZyBhblxuICAgKiBleGNlcHRpb24gaWYgdGhlIHByb3ZpZGVkIGBPcHRpb25hbGAgb2JqZWN0IGRvZXMgbm90IGNvbnRhaW4gYSB2YWx1ZS5cbiAgICpcbiAgICogV0FSTklORzpcbiAgICogWW91IHNob3VsZCBvbmx5IGJlIHVzaW5nIHRoaXMgZnVuY3Rpb24gaWYgeW91IGtub3cgdGhhdCB0aGUgYE9wdGlvbmFsYFxuICAgKiBvYmplY3QgKippcyBub3QqKiBlbXB0eSAob3RoZXJ3aXNlIHlvdSdyZSB0aHJvd2luZyBleGNlcHRpb25zIGluIHByb2R1Y3Rpb25cbiAgICogY29kZSwgd2hpY2ggaXMgYmFkKS5cbiAgICpcbiAgICogSW4gdGVzdHMgdGhpcyBpcyBtb3JlIGFjY2VwdGFibGUuXG4gICAqXG4gICAqIFByZWZlciBvdGhlciBtZXRob2RzIHRvIHRoaXMsIHN1Y2ggYXMgYC5lYWNoYC5cbiAgICovXG4gIHB1YmxpYyBnZXRPckRpZShtZXNzYWdlPzogc3RyaW5nKTogVCB7XG4gICAgaWYgKCF0aGlzLnRhZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UgPz8gJ0NhbGxlZCBnZXRPckRpZSBvbiBOb25lJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlIGFzIFQ7XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tIEludGVyb3Agd2l0aCBudWxsIGFuZCB1bmRlZmluZWQgLS0tXG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gYE9wdGlvbmFsYCB2YWx1ZSBmcm9tIGEgbnVsbGFibGUgKG9yIHVuZGVmaW5lZC1hYmxlKSBpbnB1dC5cbiAgICogTnVsbCwgb3IgdW5kZWZpbmVkLCBpcyBjb252ZXJ0ZWQgdG8gYE5vbmVgLCBhbmQgYW55dGhpbmcgZWxzZSBpcyBjb252ZXJ0ZWRcbiAgICogdG8gYFNvbWVgLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBmcm9tPFQ+KHRoaXM6IHZvaWQsIHZhbHVlOiBUIHwgbnVsbCB8IHVuZGVmaW5lZCk6IE9wdGlvbmFsPE5vbk51bGxhYmxlPFQ+PiB7XG4gICAgcmV0dXJuIFR5cGUuaXNOb25OdWxsYWJsZSh2YWx1ZSkgPyBPcHRpb25hbC5zb21lKHZhbHVlKSA6IE9wdGlvbmFsLm5vbmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhbiBgT3B0aW9uYWxgIHRvIGEgbnVsbGFibGUgdHlwZSwgYnkgZ2V0dGluZyB0aGUgdmFsdWUgaWYgaXRcbiAgICogZXhpc3RzLCBvciByZXR1cm5pbmcgYG51bGxgIGlmIGl0IGRvZXMgbm90LlxuICAgKi9cbiAgcHVibGljIGdldE9yTnVsbCgpOiBUIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMudGFnID8gdGhpcy52YWx1ZSBhcyBUIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhbiBgT3B0aW9uYWxgIHRvIGFuIHVuZGVmaW5lZC1hYmxlIHR5cGUsIGJ5IGdldHRpbmcgdGhlIHZhbHVlIGlmXG4gICAqIGl0IGV4aXN0cywgb3IgcmV0dXJuaW5nIGB1bmRlZmluZWRgIGlmIGl0IGRvZXMgbm90LlxuICAgKi9cbiAgcHVibGljIGdldE9yVW5kZWZpbmVkKCk6IFQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG5cbiAgLy8gLS0tIFV0aWxpdGllcyAtLS1cblxuICAvKipcbiAgICogSWYgdGhlIGBPcHRpb25hbGAgY29udGFpbnMgYSB2YWx1ZSwgcGVyZm9ybSBhbiBhY3Rpb24gb24gdGhhdCB2YWx1ZS5cbiAgICogVW5saWtlIHRoZSByZXN0IG9mIHRoZSBtZXRob2RzIG9uIHRoaXMgdHlwZSwgYC5lYWNoYCBoYXMgc2lkZS1lZmZlY3RzLiBJZlxuICAgKiB5b3Ugd2FudCB0byB0cmFuc2Zvcm0gYW4gYE9wdGlvbmFsPFQ+YCAqKmludG8qKiBzb21ldGhpbmcsIHRoZW4gdGhpcyBpcyBub3RcbiAgICogdGhlIG1ldGhvZCBmb3IgeW91LiBJZiB5b3Ugd2FudCB0byB1c2UgYW4gYE9wdGlvbmFsPFQ+YCB0byAqKmRvKipcbiAgICogc29tZXRoaW5nLCB0aGVuIHRoaXMgaXMgdGhlIG1ldGhvZCBmb3IgeW91IC0gcHJvdmlkZWQgeW91J3JlIG9rYXkgd2l0aCBub3RcbiAgICogZG9pbmcgYW55dGhpbmcgaW4gdGhlIGNhc2Ugd2hlcmUgdGhlIGBPcHRpb25hbGAgZG9lc24ndCBoYXZlIGEgdmFsdWUgaW5zaWRlXG4gICAqIGl0LiBJZiB5b3UncmUgbm90IHN1cmUgd2hldGhlciB5b3VyIHVzZS1jYXNlIGZpdHMgaW50byB0cmFuc2Zvcm1pbmdcbiAgICogKippbnRvKiogc29tZXRoaW5nIG9yICoqZG9pbmcqKiBzb21ldGhpbmcsIGNoZWNrIHdoZXRoZXIgaXQgaGFzIGEgcmV0dXJuXG4gICAqIHZhbHVlLiBJZiBpdCBkb2VzLCB5b3Ugc2hvdWxkIGJlIHBlcmZvcm1pbmcgYSB0cmFuc2Zvcm0uXG4gICAqL1xuICBwdWJsaWMgZWFjaCh3b3JrZXI6ICh2YWx1ZTogVCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnRhZykge1xuICAgICAgd29ya2VyKHRoaXMudmFsdWUgYXMgVCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFR1cm4gdGhlIGBPcHRpb25hbGAgb2JqZWN0IGludG8gYW4gYXJyYXkgdGhhdCBjb250YWlucyBhbGwgb2YgdGhlIHZhbHVlc1xuICAgKiBzdG9yZWQgaW5zaWRlIHRoZSBgT3B0aW9uYWxgLiBJbiBwcmFjdGljZSwgdGhpcyBtZWFucyB0aGUgb3V0cHV0IHdpbGwgaGF2ZVxuICAgKiBlaXRoZXIgMCBvciAxIGVsZW1lbnRzLlxuICAgKi9cbiAgcHVibGljIHRvQXJyYXkoKTogVFtdIHtcbiAgICByZXR1cm4gdGhpcy50YWcgPyBbIHRoaXMudmFsdWUgYXMgVCBdIDogW107XG4gIH1cblxuICAvKipcbiAgICogVHVybiB0aGUgYE9wdGlvbmFsYCBvYmplY3QgaW50byBhIHN0cmluZyBmb3IgZGVidWdnaW5nIG9yIHByaW50aW5nLiBOb3RcbiAgICogcmVjb21tZW5kZWQgZm9yIHByb2R1Y3Rpb24gY29kZSwgYnV0IGdvb2QgZm9yIGRlYnVnZ2luZy4gQWxzbyBub3RlIHRoYXRcbiAgICogdGhlc2UgZGF5cyBhbiBgT3B0aW9uYWxgIG9iamVjdCBjYW4gYmUgbG9nZ2VkIHRvIHRoZSBjb25zb2xlIGRpcmVjdGx5LCBhbmRcbiAgICogaXRzIGlubmVyIHZhbHVlIChpZiBpdCBleGlzdHMpIHdpbGwgYmUgdmlzaWJsZS5cbiAgICovXG4gIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnRhZyA/IGBzb21lKCR7dGhpcy52YWx1ZX0pYCA6ICdub25lKCknO1xuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBUeXBlIGZyb20gJy4vVHlwZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGhyb3R0bGVyPEEgZXh0ZW5kcyBhbnlbXT4ge1xuICByZWFkb25seSBjYW5jZWw6ICgpID0+IHZvaWQ7XG4gIHJlYWRvbmx5IHRocm90dGxlOiAoLi4uYXJnczogQSkgPT4gdm9pZDtcbn1cblxuLy8gUnVuIGEgZnVuY3Rpb24gZm4gYWZ0ZXIgcmF0ZSBtcy4gSWYgYW5vdGhlciBpbnZvY2F0aW9uIG9jY3Vyc1xuLy8gZHVyaW5nIHRoZSB0aW1lIGl0IGlzIHdhaXRpbmcsIHVwZGF0ZSB0aGUgYXJndW1lbnRzIGYgd2lsbCBydW5cbi8vIHdpdGggKGJ1dCBrZWVwIHRoZSBjdXJyZW50IHNjaGVkdWxlKVxuZXhwb3J0IGNvbnN0IGFkYXB0YWJsZSA9IDxBIGV4dGVuZHMgYW55W10+KGZuOiAoLi4uYTogQSkgPT4gdm9pZCwgcmF0ZTogbnVtYmVyKTogVGhyb3R0bGVyPEE+ID0+IHtcbiAgbGV0IHRpbWVyOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgbGV0IGFyZ3M6IEEgfCBudWxsID0gbnVsbDtcbiAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgIGlmICghVHlwZS5pc051bGwodGltZXIpKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgdGltZXIgPSBudWxsO1xuICAgICAgYXJncyA9IG51bGw7XG4gICAgfVxuICB9O1xuICBjb25zdCB0aHJvdHRsZSA9ICguLi5uZXdBcmdzOiBBKSA9PiB7XG4gICAgYXJncyA9IG5ld0FyZ3M7XG4gICAgaWYgKFR5cGUuaXNOdWxsKHRpbWVyKSkge1xuICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgdGVtcEFyZ3MgPSBhcmdzO1xuICAgICAgICB0aW1lciA9IG51bGw7XG4gICAgICAgIGFyZ3MgPSBudWxsO1xuICAgICAgICBmbi5hcHBseShudWxsLCB0ZW1wQXJncyBhcyBBKTtcbiAgICAgIH0sIHJhdGUpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGNhbmNlbCxcbiAgICB0aHJvdHRsZVxuICB9O1xufTtcblxuLy8gUnVuIGEgZnVuY3Rpb24gZm4gYWZ0ZXIgcmF0ZSBtcy4gSWYgYW5vdGhlciBpbnZvY2F0aW9uIG9jY3Vyc1xuLy8gZHVyaW5nIHRoZSB0aW1lIGl0IGlzIHdhaXRpbmcsIGlnbm9yZSBpdCBjb21wbGV0ZWx5LlxuZXhwb3J0IGNvbnN0IGZpcnN0ID0gPEEgZXh0ZW5kcyBhbnlbXT4oZm46ICguLi5hOiBBKSA9PiB2b2lkLCByYXRlOiBudW1iZXIpOiBUaHJvdHRsZXI8QT4gPT4ge1xuICBsZXQgdGltZXI6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgaWYgKCFUeXBlLmlzTnVsbCh0aW1lcikpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICB0aW1lciA9IG51bGw7XG4gICAgfVxuICB9O1xuICBjb25zdCB0aHJvdHRsZSA9ICguLi5hcmdzOiBBKSA9PiB7XG4gICAgaWYgKFR5cGUuaXNOdWxsKHRpbWVyKSkge1xuICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGltZXIgPSBudWxsO1xuICAgICAgICBmbi5hcHBseShudWxsLCBhcmdzKTtcbiAgICAgIH0sIHJhdGUpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGNhbmNlbCxcbiAgICB0aHJvdHRsZVxuICB9O1xufTtcblxuLy8gUnVuIGEgZnVuY3Rpb24gZm4gYWZ0ZXIgcmF0ZSBtcy4gSWYgYW5vdGhlciBpbnZvY2F0aW9uIG9jY3Vyc1xuLy8gZHVyaW5nIHRoZSB0aW1lIGl0IGlzIHdhaXRpbmcsIHJlc2NoZWR1bGUgdGhlIGZ1bmN0aW9uIGFnYWluXG4vLyB3aXRoIHRoZSBuZXcgYXJndW1lbnRzLlxuZXhwb3J0IGNvbnN0IGxhc3QgPSA8QSBleHRlbmRzIGFueVtdPihmbjogKC4uLmE6IEEpID0+IHZvaWQsIHJhdGU6IG51bWJlcik6IFRocm90dGxlcjxBPiA9PiB7XG4gIGxldCB0aW1lcjogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICBpZiAoIVR5cGUuaXNOdWxsKHRpbWVyKSkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgIHRpbWVyID0gbnVsbDtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHRocm90dGxlID0gKC4uLmFyZ3M6IEEpID0+IHtcbiAgICBjYW5jZWwoKTtcbiAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGltZXIgPSBudWxsO1xuICAgICAgZm4uYXBwbHkobnVsbCwgYXJncyk7XG4gICAgfSwgcmF0ZSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBjYW5jZWwsXG4gICAgdGhyb3R0bGVcbiAgfTtcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8td3JhcHBlci1vYmplY3QtdHlwZXMgKi9cbmNvbnN0IGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuXG5pbnRlcmZhY2UgQ29uc3RydWN0b3I8VCBleHRlbmRzIE9iamVjdD4ge1xuICByZWFkb25seSBwcm90b3R5cGU6IFQ7XG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbn1cblxuY29uc3QgaGFzUHJvdG8gPSA8VCBleHRlbmRzIE9iamVjdD4odjogT2JqZWN0LCBjb25zdHJ1Y3RvcjogQ29uc3RydWN0b3I8VD4sIHByZWRpY2F0ZTogKHY6IE9iamVjdCwgcHJvdG90eXBlOiBUKSA9PiBib29sZWFuKTogYm9vbGVhbiA9PiB7XG4gIGlmIChwcmVkaWNhdGUodiwgY29uc3RydWN0b3IucHJvdG90eXBlKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIC8vIFN0cmluZy1iYXNlZCBmYWxsYmFjayB0aW1lXG4gICAgcmV0dXJuIHYuY29uc3RydWN0b3I/Lm5hbWUgPT09IGNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cbn07XG5cbmNvbnN0IHR5cGVPZiA9ICh4OiBhbnkpOiBzdHJpbmcgPT4ge1xuICBjb25zdCB0ID0gdHlwZW9mIHg7XG4gIGlmICh4ID09PSBudWxsKSB7XG4gICAgcmV0dXJuICdudWxsJztcbiAgfSBlbHNlIGlmICh0ID09PSAnb2JqZWN0JyAmJiBBcnJheS5pc0FycmF5KHgpKSB7XG4gICAgcmV0dXJuICdhcnJheSc7XG4gIH0gZWxzZSBpZiAodCA9PT0gJ29iamVjdCcgJiYgaGFzUHJvdG8oeCwgU3RyaW5nLCAobywgcHJvdG8pID0+IHByb3RvLmlzUHJvdG90eXBlT2YobykpKSB7XG4gICAgcmV0dXJuICdzdHJpbmcnO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0O1xuICB9XG59O1xuXG5jb25zdCBpc1R5cGUgPSA8WW9sbz4odHlwZTogc3RyaW5nKSA9PiAodmFsdWU6IGFueSk6IHZhbHVlIGlzIFlvbG8gPT5cbiAgdHlwZU9mKHZhbHVlKSA9PT0gdHlwZTtcblxuY29uc3QgaXNTaW1wbGVUeXBlID0gPFlvbG8+KHR5cGU6IHN0cmluZykgPT4gKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBZb2xvID0+XG4gIHR5cGVvZiB2YWx1ZSA9PT0gdHlwZTtcblxuY29uc3QgZXEgPSA8VD4gKHQ6IFQpID0+IChhOiBhbnkpOiBhIGlzIFQgPT5cbiAgdCA9PT0gYTtcblxuZXhwb3J0IGNvbnN0IGlzID0gPEUgZXh0ZW5kcyBPYmplY3Q+KHZhbHVlOiBhbnksIGNvbnN0cnVjdG9yOiBDb25zdHJ1Y3RvcjxFPik6IHZhbHVlIGlzIEUgPT5cbiAgaXNPYmplY3QodmFsdWUpICYmIGhhc1Byb3RvPEU+KHZhbHVlLCBjb25zdHJ1Y3RvciwgKG8sIHByb3RvKSA9PiBnZXRQcm90b3R5cGVPZihvKSA9PT0gcHJvdG8pO1xuXG5leHBvcnQgY29uc3QgaXNTdHJpbmc6ICh2YWx1ZTogYW55KSA9PiB2YWx1ZSBpcyBzdHJpbmcgPVxuICBpc1R5cGUoJ3N0cmluZycpO1xuXG5leHBvcnQgY29uc3QgaXNPYmplY3Q6ICh2YWx1ZTogYW55KSA9PiB2YWx1ZSBpcyBPYmplY3QgPVxuICBpc1R5cGUoJ29iamVjdCcpO1xuXG5leHBvcnQgY29uc3QgaXNQbGFpbk9iamVjdCA9ICh2YWx1ZTogdW5rbm93bik6IHZhbHVlIGlzIE9iamVjdCA9PlxuICBpcyh2YWx1ZSwgT2JqZWN0KTtcblxuZXhwb3J0IGNvbnN0IGlzQXJyYXk6ICh2YWx1ZTogYW55KSA9PiB2YWx1ZSBpcyBBcnJheTx1bmtub3duPiA9XG4gIGlzVHlwZSgnYXJyYXknKTtcblxuZXhwb3J0IGNvbnN0IGlzTnVsbDogKGE6IGFueSkgPT4gYSBpcyBudWxsID1cbiAgZXEobnVsbCk7XG5cbmV4cG9ydCBjb25zdCBpc0Jvb2xlYW46ICh2YWx1ZTogYW55KSA9PiB2YWx1ZSBpcyBib29sZWFuID1cbiAgaXNTaW1wbGVUeXBlPGJvb2xlYW4+KCdib29sZWFuJyk7XG5cbmV4cG9ydCBjb25zdCBpc1VuZGVmaW5lZDogKGE6IGFueSkgPT4gYSBpcyB1bmRlZmluZWQgPVxuICBlcSh1bmRlZmluZWQpO1xuXG5leHBvcnQgY29uc3QgaXNOdWxsYWJsZSA9IChhOiBhbnkpOiBhIGlzIG51bGwgfCB1bmRlZmluZWQgPT5cbiAgYSA9PT0gbnVsbCB8fCBhID09PSB1bmRlZmluZWQ7XG5cbmV4cG9ydCBjb25zdCBpc05vbk51bGxhYmxlID0gPEE+IChhOiBBIHwgbnVsbCB8IHVuZGVmaW5lZCk6IGEgaXMgTm9uTnVsbGFibGU8QT4gPT5cbiAgIWlzTnVsbGFibGUoYSk7XG5cbmV4cG9ydCBjb25zdCBpc0Z1bmN0aW9uOiAodmFsdWU6IGFueSkgPT4gdmFsdWUgaXMgRnVuY3Rpb24gPVxuICBpc1NpbXBsZVR5cGU8RnVuY3Rpb24+KCdmdW5jdGlvbicpO1xuXG5leHBvcnQgY29uc3QgaXNOdW1iZXI6ICh2YWx1ZTogYW55KSA9PiB2YWx1ZSBpcyBudW1iZXIgPVxuICBpc1NpbXBsZVR5cGU8bnVtYmVyPignbnVtYmVyJyk7XG5cbmV4cG9ydCBjb25zdCBpc0FycmF5T2YgPSA8RT4odmFsdWU6IGFueSwgcHJlZDogKHg6IGFueSkgPT4geCBpcyBFKTogdmFsdWUgaXMgQXJyYXk8RT4gPT4ge1xuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdmFsdWUubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIGlmICghKHByZWQodmFsdWVbaV0pKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc1Byb21pc2VMaWtlID0gKHg6IGFueSk6IHggaXMgUHJvbWlzZTx1bmtub3duPiA9PlxuICBpc09iamVjdCh4KVxuICAmJiBpc0Z1bmN0aW9uKHgudGhlbilcbiAgJiYgaXNGdW5jdGlvbih4LmNhdGNoKTtcbiIsImV4cG9ydCBjb25zdCB6ZXJvV2lkdGggPSAnXFx1RkVGRic7XG5leHBvcnQgY29uc3QgbmJzcCA9ICdcXHUwMEEwJztcbmV4cG9ydCBjb25zdCBzb2Z0SHlwaGVuID0gJ1xcdTAwQUQnO1xuZXhwb3J0IGNvbnN0IGVsbGlwc2lzID0gJ1xcdTIwMjYnO1xuXG5leHBvcnQgY29uc3QgaXNad3NwID0gKGNoYXI6IHN0cmluZyk6IGJvb2xlYW4gPT4gY2hhciA9PT0gemVyb1dpZHRoO1xuZXhwb3J0IGNvbnN0IHJlbW92ZVp3c3AgPSAoczogc3RyaW5nKTogc3RyaW5nID0+IHMucmVwbGFjZSgvXFx1RkVGRi9nLCAnJyk7XG4iLCJpbXBvcnQgKiBhcyBXb3JkcyBmcm9tICcuLi93b3Jkcy9Xb3Jkcyc7XG5cbnR5cGUgR2V0V29yZHNBcGkgPSA8VD4oY2hhcnM6IFRbXSwgZXh0cmFjdDogKGNoYXI6IFQpID0+IHN0cmluZywgb3B0aW9ucz86IFdvcmRzLldvcmRPcHRpb25zKSA9PiBXb3Jkcy5Xb3JkPFQ+W107XG5jb25zdCBnZXRXb3JkczogR2V0V29yZHNBcGkgPSBXb3Jkcy5nZXRXb3JkcztcblxudHlwZSBHZXRXb3Jkc0FuZEluZGljZXNBcGkgPSA8VD4oY2hhcnM6IFRbXSwgZXh0cmFjdDogKGNoYXI6IFQpID0+IHN0cmluZywgb3B0aW9ucz86IFdvcmRzLldvcmRPcHRpb25zKSA9PiBXb3Jkcy5Xb3Jkc1dpdGhJbmRpY2VzPFQ+O1xuY29uc3QgZ2V0V29yZHNXaXRoSW5kaWNlczogR2V0V29yZHNBbmRJbmRpY2VzQXBpID0gV29yZHMuZ2V0V29yZHNXaXRoSW5kaWNlcztcblxuZXhwb3J0IHtcbiAgZ2V0V29yZHMsXG4gIGdldFdvcmRzV2l0aEluZGljZXNcbn07XG4iLCJpbXBvcnQgeyBBcnIgfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5pbXBvcnQgKiBhcyBVbmljb2RlRGF0YSBmcm9tICcuL1VuaWNvZGVEYXRhJztcblxuY29uc3QgU0VUUyA9IFVuaWNvZGVEYXRhLlNFVFM7XG5jb25zdCBPVEhFUiA9IFVuaWNvZGVEYXRhLmNoYXJhY3RlckluZGljZXMuT1RIRVI7XG5cbmNvbnN0IGdldFR5cGUgPSAoY2hhcjogc3RyaW5nKTogbnVtYmVyID0+IHtcbiAgbGV0IHR5cGUgPSBPVEhFUjtcbiAgY29uc3Qgc2V0c0xlbmd0aCA9IFNFVFMubGVuZ3RoO1xuICBmb3IgKGxldCBqID0gMDsgaiA8IHNldHNMZW5ndGg7ICsraikge1xuICAgIGNvbnN0IHNldCA9IFNFVFNbal07XG5cbiAgICBpZiAoc2V0ICYmIHNldC50ZXN0KGNoYXIpKSB7XG4gICAgICB0eXBlID0gajtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHlwZTtcbn07XG5cbmNvbnN0IG1lbW9pemUgPSA8Uj4gKGZ1bmM6IChjaGFyOiBzdHJpbmcpID0+IFIpID0+IHtcbiAgY29uc3QgY2FjaGU6IFJlY29yZDxzdHJpbmcsIFI+ID0ge307XG5cbiAgcmV0dXJuIChjaGFyOiBzdHJpbmcpID0+IHtcbiAgICBpZiAoY2FjaGVbY2hhcl0pIHtcbiAgICAgIHJldHVybiBjYWNoZVtjaGFyXTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmVzdWx0ID0gZnVuYyhjaGFyKTtcbiAgICAgIGNhY2hlW2NoYXJdID0gcmVzdWx0O1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gIH07XG59O1xuXG5leHBvcnQgdHlwZSBDaGFyYWN0ZXJNYXAgPSBudW1iZXJbXTtcblxuY29uc3QgY2xhc3NpZnkgPSAoY2hhcmFjdGVyczogc3RyaW5nW10pOiBDaGFyYWN0ZXJNYXAgPT4ge1xuICBjb25zdCBtZW1vaXplZCA9IG1lbW9pemUoZ2V0VHlwZSk7XG4gIHJldHVybiBBcnIubWFwKGNoYXJhY3RlcnMsIG1lbW9pemVkKTtcbn07XG5cbmV4cG9ydCB7XG4gIGNsYXNzaWZ5XG59O1xuIiwiXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5jb25zdCBwdW5jdHVhdGlvblN0ciA9IGBbfuKElnwhLSorLVxcXFwvOjs/QFxcXFxbLVxcYHt9XFx1MDBBMVxcdTAwQUJcXHUwMEI3XFx1MDBCQlxcdTAwQkY7XFx1MDBCN1xcdTA1NUEtXFx1MDU1RlxcdTA1ODlcXHUwNThBXFx1MDVCRVxcdTA1QzBcXHUwNUMzXFx1MDVDNlxcdTA1RjNcXHUwNUY0XFx1MDYwOVxcdTA2MEFcXHUwNjBDXFx1MDYwRFxcdTA2MUJcXHUwNjFFXFx1MDYxRlxcdTA2NkEtXFx1MDY2RFxcdTA2RDRcXHUwNzAwLVxcdTA3MERcXHUwN0Y3LVxcdTA3RjlcXHUwODMwLVxcdTA4M0VcXHUwODVFXFx1MDk2NFxcdTA5NjVcXHUwOTcwXFx1MERGNFxcdTBFNEZcXHUwRTVBXFx1MEU1QlxcdTBGMDQtXFx1MEYxMlxcdTBGM0EtXFx1MEYzRFxcdTBGODVcXHUwRkQwLVxcdTBGRDRcXHUwRkQ5XFx1MEZEQVxcdTEwNEEtXFx1MTA0RlxcdTEwRkJcXHUxMzYxLVxcdTEzNjhcXHUxNDAwXFx1MTY2RFxcdTE2NkVcXHUxNjlCXFx1MTY5Q1xcdTE2RUItXFx1MTZFRFxcdTE3MzVcXHUxNzM2XFx1MTdENC1cXHUxN0Q2XFx1MTdEOC1cXHUxN0RBXFx1MTgwMC1cXHUxODBBXFx1MTk0NFxcdTE5NDVcXHUxQTFFXFx1MUExRlxcdTFBQTAtXFx1MUFBNlxcdTFBQTgtXFx1MUFBRFxcdTFCNUEtXFx1MUI2MFxcdTFCRkMtXFx1MUJGRlxcdTFDM0ItXFx1MUMzRlxcdTFDN0VcXHUxQzdGXFx1MUNEM1xcdTIwMTAtXFx1MjAyN1xcdTIwMzAtXFx1MjA0M1xcdTIwNDUtXFx1MjA1MVxcdTIwNTMtXFx1MjA1RVxcdTIwN0RcXHUyMDdFXFx1MjA4RFxcdTIwOEVcXHUzMDA4XFx1MzAwOVxcdTI3NjgtXFx1Mjc3NVxcdTI3QzVcXHUyN0M2XFx1MjdFNi1cXHUyN0VGXFx1Mjk4My1cXHUyOTk4XFx1MjlEOC1cXHUyOURCXFx1MjlGQ1xcdTI5RkRcXHUyQ0Y5LVxcdTJDRkNcXHUyQ0ZFXFx1MkNGRlxcdTJENzBcXHUyRTAwLVxcdTJFMkVcXHUyRTMwXFx1MkUzMVxcdTMwMDEtXFx1MzAwM1xcdTMwMDgtXFx1MzAxMVxcdTMwMTQtXFx1MzAxRlxcdTMwMzBcXHUzMDNEXFx1MzBBMFxcdTMwRkJcXHVBNEZFXFx1QTRGRlxcdUE2MEQtXFx1QTYwRlxcdUE2NzNcXHVBNjdFXFx1QTZGMi1cXHVBNkY3XFx1QTg3NC1cXHVBODc3XFx1QThDRVxcdUE4Q0ZcXHVBOEY4LVxcdUE4RkFcXHVBOTJFXFx1QTkyRlxcdUE5NUZcXHVBOUMxLVxcdUE5Q0RcXHVBOURFXFx1QTlERlxcdUFBNUMtXFx1QUE1RlxcdUFBREVcXHVBQURGXFx1QUJFQlxcdUZEM0VcXHVGRDNGXFx1RkUxMC1cXHVGRTE5XFx1RkUzMC1cXHVGRTUyXFx1RkU1NC1cXHVGRTYxXFx1RkU2M1xcdUZFNjhcXHVGRTZBXFx1RkU2QlxcdUZGMDEtXFx1RkYwM1xcdUZGMDUtXFx1RkYwQVxcdUZGMEMtXFx1RkYwRlxcdUZGMUFcXHVGRjFCXFx1RkYxRlxcdUZGMjBcXHVGRjNCLVxcdUZGM0RcXHVGRjNGXFx1RkY1QlxcdUZGNURcXHVGRjVGLVxcdUZGNjVdYDtcblxuY29uc3QgcmVnRXhwcyA9IHtcbiAgYWxldHRlcjogJ1tBLVphLXpcXHUwMEFBXFx1MDBCNVxcdTAwQkFcXHUwMEMwLVxcdTAwRDZcXHUwMEQ4LVxcdTAwRjZcXHUwMEY4LVxcdTAyQzFcXHUwMkM2LVxcdTAyRDFcXHUwMkUwLVxcdTAyRTRcXHUwMkVDXFx1MDJFRVxcdTAzNzAtXFx1MDM3NFxcdTAzNzZcXHUwMzc3XFx1MDM3QS1cXHUwMzdEXFx1MDM4NlxcdTAzODgtXFx1MDM4QVxcdTAzOENcXHUwMzhFLVxcdTAzQTFcXHUwM0EzLVxcdTAzRjVcXHUwM0Y3LVxcdTA0ODFcXHUwNDhBLVxcdTA1MjdcXHUwNTMxLVxcdTA1NTZcXHUwNTU5XFx1MDU2MS1cXHUwNTg3XFx1MDVEMC1cXHUwNUVBXFx1MDVGMC1cXHUwNUYzXFx1MDYyMC1cXHUwNjRBXFx1MDY2RVxcdTA2NkZcXHUwNjcxLVxcdTA2RDNcXHUwNkQ1XFx1MDZFNVxcdTA2RTZcXHUwNkVFXFx1MDZFRlxcdTA2RkEtXFx1MDZGQ1xcdTA2RkZcXHUwNzEwXFx1MDcxMi1cXHUwNzJGXFx1MDc0RC1cXHUwN0E1XFx1MDdCMVxcdTA3Q0EtXFx1MDdFQVxcdTA3RjRcXHUwN0Y1XFx1MDdGQVxcdTA4MDAtXFx1MDgxNVxcdTA4MUFcXHUwODI0XFx1MDgyOFxcdTA4NDAtXFx1MDg1OFxcdTA5MDQtXFx1MDkzOVxcdTA5M0RcXHUwOTUwXFx1MDk1OC1cXHUwOTYxXFx1MDk3MS1cXHUwOTc3XFx1MDk3OS1cXHUwOTdGXFx1MDk4NS1cXHUwOThDXFx1MDk4RlxcdTA5OTBcXHUwOTkzLVxcdTA5QThcXHUwOUFBLVxcdTA5QjBcXHUwOUIyXFx1MDlCNi1cXHUwOUI5XFx1MDlCRFxcdTA5Q0VcXHUwOURDXFx1MDlERFxcdTA5REYtXFx1MDlFMVxcdTA5RjBcXHUwOUYxXFx1MEEwNS1cXHUwQTBBXFx1MEEwRlxcdTBBMTBcXHUwQTEzLVxcdTBBMjhcXHUwQTJBLVxcdTBBMzBcXHUwQTMyXFx1MEEzM1xcdTBBMzVcXHUwQTM2XFx1MEEzOFxcdTBBMzlcXHUwQTU5LVxcdTBBNUNcXHUwQTVFXFx1MEE3Mi1cXHUwQTc0XFx1MEE4NS1cXHUwQThEXFx1MEE4Ri1cXHUwQTkxXFx1MEE5My1cXHUwQUE4XFx1MEFBQS1cXHUwQUIwXFx1MEFCMlxcdTBBQjNcXHUwQUI1LVxcdTBBQjlcXHUwQUJEXFx1MEFEMFxcdTBBRTBcXHUwQUUxXFx1MEIwNS1cXHUwQjBDXFx1MEIwRlxcdTBCMTBcXHUwQjEzLVxcdTBCMjhcXHUwQjJBLVxcdTBCMzBcXHUwQjMyXFx1MEIzM1xcdTBCMzUtXFx1MEIzOVxcdTBCM0RcXHUwQjVDXFx1MEI1RFxcdTBCNUYtXFx1MEI2MVxcdTBCNzFcXHUwQjgzXFx1MEI4NS1cXHUwQjhBXFx1MEI4RS1cXHUwQjkwXFx1MEI5Mi1cXHUwQjk1XFx1MEI5OVxcdTBCOUFcXHUwQjlDXFx1MEI5RVxcdTBCOUZcXHUwQkEzXFx1MEJBNFxcdTBCQTgtXFx1MEJBQVxcdTBCQUUtXFx1MEJCOVxcdTBCRDBcXHUwQzA1LVxcdTBDMENcXHUwQzBFLVxcdTBDMTBcXHUwQzEyLVxcdTBDMjhcXHUwQzJBLVxcdTBDMzNcXHUwQzM1LVxcdTBDMzlcXHUwQzNEXFx1MEM1OFxcdTBDNTlcXHUwQzYwXFx1MEM2MVxcdTBDODUtXFx1MEM4Q1xcdTBDOEUtXFx1MEM5MFxcdTBDOTItXFx1MENBOFxcdTBDQUEtXFx1MENCM1xcdTBDQjUtXFx1MENCOVxcdTBDQkRcXHUwQ0RFXFx1MENFMFxcdTBDRTFcXHUwQ0YxXFx1MENGMlxcdTBEMDUtXFx1MEQwQ1xcdTBEMEUtXFx1MEQxMFxcdTBEMTItXFx1MEQzQVxcdTBEM0RcXHUwRDRFXFx1MEQ2MFxcdTBENjFcXHUwRDdBLVxcdTBEN0ZcXHUwRDg1LVxcdTBEOTZcXHUwRDlBLVxcdTBEQjFcXHUwREIzLVxcdTBEQkJcXHUwREJEXFx1MERDMC1cXHUwREM2XFx1MEYwMFxcdTBGNDAtXFx1MEY0N1xcdTBGNDktXFx1MEY2Q1xcdTBGODgtXFx1MEY4Q1xcdTEwQTAtXFx1MTBDNVxcdTEwRDAtXFx1MTBGQVxcdTEwRkNcXHUxMTAwLVxcdTEyNDhcXHUxMjRBLVxcdTEyNERcXHUxMjUwLVxcdTEyNTZcXHUxMjU4XFx1MTI1QS1cXHUxMjVEXFx1MTI2MC1cXHUxMjg4XFx1MTI4QS1cXHUxMjhEXFx1MTI5MC1cXHUxMkIwXFx1MTJCMi1cXHUxMkI1XFx1MTJCOC1cXHUxMkJFXFx1MTJDMFxcdTEyQzItXFx1MTJDNVxcdTEyQzgtXFx1MTJENlxcdTEyRDgtXFx1MTMxMFxcdTEzMTItXFx1MTMxNVxcdTEzMTgtXFx1MTM1QVxcdTEzODAtXFx1MTM4RlxcdTEzQTAtXFx1MTNGNFxcdTE0MDEtXFx1MTY2Q1xcdTE2NkYtXFx1MTY3RlxcdTE2ODEtXFx1MTY5QVxcdTE2QTAtXFx1MTZFQVxcdTE2RUUtXFx1MTZGMFxcdTE3MDAtXFx1MTcwQ1xcdTE3MEUtXFx1MTcxMVxcdTE3MjAtXFx1MTczMVxcdTE3NDAtXFx1MTc1MVxcdTE3NjAtXFx1MTc2Q1xcdTE3NkUtXFx1MTc3MFxcdTE4MjAtXFx1MTg3N1xcdTE4ODAtXFx1MThBOFxcdTE4QUFcXHUxOEIwLVxcdTE4RjVcXHUxOTAwLVxcdTE5MUNcXHUxQTAwLVxcdTFBMTZcXHUxQjA1LVxcdTFCMzNcXHUxQjQ1LVxcdTFCNEJcXHUxQjgzLVxcdTFCQTBcXHUxQkFFXFx1MUJBRlxcdTFCQzAtXFx1MUJFNVxcdTFDMDAtXFx1MUMyM1xcdTFDNEQtXFx1MUM0RlxcdTFDNUEtXFx1MUM3RFxcdTFDRTktXFx1MUNFQ1xcdTFDRUUtXFx1MUNGMVxcdTFEMDAtXFx1MURCRlxcdTFFMDAtXFx1MUYxNVxcdTFGMTgtXFx1MUYxRFxcdTFGMjAtXFx1MUY0NVxcdTFGNDgtXFx1MUY0RFxcdTFGNTAtXFx1MUY1N1xcdTFGNTlcXHUxRjVCXFx1MUY1RFxcdTFGNUYtXFx1MUY3RFxcdTFGODAtXFx1MUZCNFxcdTFGQjYtXFx1MUZCQ1xcdTFGQkVcXHUxRkMyLVxcdTFGQzRcXHUxRkM2LVxcdTFGQ0NcXHUxRkQwLVxcdTFGRDNcXHUxRkQ2LVxcdTFGREJcXHUxRkUwLVxcdTFGRUNcXHUxRkYyLVxcdTFGRjRcXHUxRkY2LVxcdTFGRkNcXHUyMDcxXFx1MjA3RlxcdTIwOTAtXFx1MjA5Q1xcdTIxMDJcXHUyMTA3XFx1MjEwQS1cXHUyMTEzXFx1MjExNVxcdTIxMTktXFx1MjExRFxcdTIxMjRcXHUyMTI2XFx1MjEyOFxcdTIxMkEtXFx1MjEyRFxcdTIxMkYtXFx1MjEzOVxcdTIxM0MtXFx1MjEzRlxcdTIxNDUtXFx1MjE0OVxcdTIxNEVcXHUyMTYwLVxcdTIxODhcXHUyNEI2LVxcdTI0RTlcXHUyQzAwLVxcdTJDMkVcXHUyQzMwLVxcdTJDNUVcXHUyQzYwLVxcdTJDRTRcXHUyQ0VCLVxcdTJDRUVcXHUyRDAwLVxcdTJEMjVcXHUyRDMwLVxcdTJENjVcXHUyRDZGXFx1MkQ4MC1cXHUyRDk2XFx1MkRBMC1cXHUyREE2XFx1MkRBOC1cXHUyREFFXFx1MkRCMC1cXHUyREI2XFx1MkRCOC1cXHUyREJFXFx1MkRDMC1cXHUyREM2XFx1MkRDOC1cXHUyRENFXFx1MkREMC1cXHUyREQ2XFx1MkREOC1cXHUyRERFXFx1MkUyRlxcdTMwMDVcXHUzMDNCXFx1MzAzQ1xcdTMxMDUtXFx1MzEyRFxcdTMxMzEtXFx1MzE4RVxcdTMxQTAtXFx1MzFCQVxcdUEwMDAtXFx1QTQ4Q1xcdUE0RDAtXFx1QTRGRFxcdUE1MDAtXFx1QTYwQ1xcdUE2MTAtXFx1QTYxRlxcdUE2MkFcXHVBNjJCXFx1QTY0MC1cXHVBNjZFXFx1QTY3Ri1cXHVBNjk3XFx1QTZBMC1cXHVBNkVGXFx1QTcxNy1cXHVBNzFGXFx1QTcyMi1cXHVBNzg4XFx1QTc4Qi1cXHVBNzhFXFx1QTc5MFxcdUE3OTFcXHVBN0EwLVxcdUE3QTlcXHVBN0ZBLVxcdUE4MDFcXHVBODAzLVxcdUE4MDVcXHVBODA3LVxcdUE4MEFcXHVBODBDLVxcdUE4MjJcXHVBODQwLVxcdUE4NzNcXHVBODgyLVxcdUE4QjNcXHVBOEYyLVxcdUE4RjdcXHVBOEZCXFx1QTkwQS1cXHVBOTI1XFx1QTkzMC1cXHVBOTQ2XFx1QTk2MC1cXHVBOTdDXFx1QTk4NC1cXHVBOUIyXFx1QTlDRlxcdUFBMDAtXFx1QUEyOFxcdUFBNDAtXFx1QUE0MlxcdUFBNDQtXFx1QUE0QlxcdUFCMDEtXFx1QUIwNlxcdUFCMDktXFx1QUIwRVxcdUFCMTEtXFx1QUIxNlxcdUFCMjAtXFx1QUIyNlxcdUFCMjgtXFx1QUIyRVxcdUFCQzAtXFx1QUJFMlxcdUFDMDAtXFx1RDdBM1xcdUQ3QjAtXFx1RDdDNlxcdUQ3Q0ItXFx1RDdGQlxcdUZCMDAtXFx1RkIwNlxcdUZCMTMtXFx1RkIxN1xcdUZCMURcXHVGQjFGLVxcdUZCMjhcXHVGQjJBLVxcdUZCMzZcXHVGQjM4LVxcdUZCM0NcXHVGQjNFXFx1RkI0MFxcdUZCNDFcXHVGQjQzXFx1RkI0NFxcdUZCNDYtXFx1RkJCMVxcdUZCRDMtXFx1RkQzRFxcdUZENTAtXFx1RkQ4RlxcdUZEOTItXFx1RkRDN1xcdUZERjAtXFx1RkRGQlxcdUZFNzAtXFx1RkU3NFxcdUZFNzYtXFx1RkVGQ1xcdUZGMjEtXFx1RkYzQVxcdUZGNDEtXFx1RkY1QVxcdUZGQTAtXFx1RkZCRVxcdUZGQzItXFx1RkZDN1xcdUZGQ0EtXFx1RkZDRlxcdUZGRDItXFx1RkZEN1xcdUZGREEtXFx1RkZEQ10nLFxuICBtaWRudW1sZXQ6IGBbLSdcXFxcLlxcdTIwMThcXHUyMDE5XFx1MjAyNFxcdUZFNTJcXHVGRjA3XFx1RkYwRV1gLFxuICBtaWRsZXR0ZXI6ICdbOlxcdTAwQjdcXHUwMEI3XFx1MDVGNFxcdTIwMjdcXHVGRTEzXFx1RkU1NVxcdUZGMUFdJyxcbiAgbWlkbnVtOiAnW8KxKyovLDs7XFx1MDU4OVxcdTA2MENcXHUwNjBEXFx1MDY2Q1xcdTA3RjhcXHUyMDQ0XFx1RkUxMFxcdUZFMTRcXHVGRTUwXFx1RkU1NFxcdUZGMENcXHVGRjFCXScsXG4gIG51bWVyaWM6ICdbMC05XFx1MDY2MC1cXHUwNjY5XFx1MDY2QlxcdTA2RjAtXFx1MDZGOVxcdTA3QzAtXFx1MDdDOVxcdTA5NjYtXFx1MDk2RlxcdTA5RTYtXFx1MDlFRlxcdTBBNjYtXFx1MEE2RlxcdTBBRTYtXFx1MEFFRlxcdTBCNjYtXFx1MEI2RlxcdTBCRTYtXFx1MEJFRlxcdTBDNjYtXFx1MEM2RlxcdTBDRTYtXFx1MENFRlxcdTBENjYtXFx1MEQ2RlxcdTBFNTAtXFx1MEU1OVxcdTBFRDAtXFx1MEVEOVxcdTBGMjAtXFx1MEYyOVxcdTEwNDAtXFx1MTA0OVxcdTEwOTAtXFx1MTA5OVxcdTE3RTAtXFx1MTdFOVxcdTE4MTAtXFx1MTgxOVxcdTE5NDYtXFx1MTk0RlxcdTE5RDAtXFx1MTlEOVxcdTFBODAtXFx1MUE4OVxcdTFBOTAtXFx1MUE5OVxcdTFCNTAtXFx1MUI1OVxcdTFCQjAtXFx1MUJCOVxcdTFDNDAtXFx1MUM0OVxcdTFDNTAtXFx1MUM1OVxcdUE2MjAtXFx1QTYyOVxcdUE4RDAtXFx1QThEOVxcdUE5MDAtXFx1QTkwOVxcdUE5RDAtXFx1QTlEOVxcdUFBNTAtXFx1QUE1OVxcdUFCRjAtXFx1QUJGOV0nLFxuICBjcjogJ1xcXFxyJyxcbiAgbGY6ICdcXFxcbicsXG4gIG5ld2xpbmU6ICdbXFx1MDAwQlxcdTAwMENcXHUwMDg1XFx1MjAyOFxcdTIwMjldJyxcbiAgZXh0ZW5kOiAnW1xcdTAzMDAtXFx1MDM2RlxcdTA0ODMtXFx1MDQ4OVxcdTA1OTEtXFx1MDVCRFxcdTA1QkZcXHUwNUMxXFx1MDVDMlxcdTA1QzRcXHUwNUM1XFx1MDVDN1xcdTA2MTAtXFx1MDYxQVxcdTA2NEItXFx1MDY1RlxcdTA2NzBcXHUwNkQ2LVxcdTA2RENcXHUwNkRGLVxcdTA2RTRcXHUwNkU3XFx1MDZFOFxcdTA2RUEtXFx1MDZFRFxcdTA3MTFcXHUwNzMwLVxcdTA3NEFcXHUwN0E2LVxcdTA3QjBcXHUwN0VCLVxcdTA3RjNcXHUwODE2LVxcdTA4MTlcXHUwODFCLVxcdTA4MjNcXHUwODI1LVxcdTA4MjdcXHUwODI5LVxcdTA4MkRcXHUwODU5LVxcdTA4NUJcXHUwOTAwLVxcdTA5MDNcXHUwOTNBLVxcdTA5M0NcXHUwOTNFLVxcdTA5NEZcXHUwOTUxLVxcdTA5NTdcXHUwOTYyXFx1MDk2M1xcdTA5ODEtXFx1MDk4M1xcdTA5QkNcXHUwOUJFLVxcdTA5QzRcXHUwOUM3XFx1MDlDOFxcdTA5Q0ItXFx1MDlDRFxcdTA5RDdcXHUwOUUyXFx1MDlFM1xcdTBBMDEtXFx1MEEwM1xcdTBBM0NcXHUwQTNFLVxcdTBBNDJcXHUwQTQ3XFx1MEE0OFxcdTBBNEItXFx1MEE0RFxcdTBBNTFcXHUwQTcwXFx1MEE3MVxcdTBBNzVcXHUwQTgxLVxcdTBBODNcXHUwQUJDXFx1MEFCRS1cXHUwQUM1XFx1MEFDNy1cXHUwQUM5XFx1MEFDQi1cXHUwQUNEXFx1MEFFMlxcdTBBRTNcXHUwQjAxLVxcdTBCMDNcXHUwQjNDXFx1MEIzRS1cXHUwQjQ0XFx1MEI0N1xcdTBCNDhcXHUwQjRCLVxcdTBCNERcXHUwQjU2XFx1MEI1N1xcdTBCNjJcXHUwQjYzXFx1MEI4MlxcdTBCQkUtXFx1MEJDMlxcdTBCQzYtXFx1MEJDOFxcdTBCQ0EtXFx1MEJDRFxcdTBCRDdcXHUwQzAxLVxcdTBDMDNcXHUwQzNFLVxcdTBDNDRcXHUwQzQ2LVxcdTBDNDhcXHUwQzRBLVxcdTBDNERcXHUwQzU1XFx1MEM1NlxcdTBDNjJcXHUwQzYzXFx1MEM4MlxcdTBDODNcXHUwQ0JDXFx1MENCRS1cXHUwQ0M0XFx1MENDNi1cXHUwQ0M4XFx1MENDQS1cXHUwQ0NEXFx1MENENVxcdTBDRDZcXHUwQ0UyXFx1MENFM1xcdTBEMDJcXHUwRDAzXFx1MEQzRS1cXHUwRDQ0XFx1MEQ0Ni1cXHUwRDQ4XFx1MEQ0QS1cXHUwRDREXFx1MEQ1N1xcdTBENjJcXHUwRDYzXFx1MEQ4MlxcdTBEODNcXHUwRENBXFx1MERDRi1cXHUwREQ0XFx1MERENlxcdTBERDgtXFx1MERERlxcdTBERjJcXHUwREYzXFx1MEUzMVxcdTBFMzQtXFx1MEUzQVxcdTBFNDctXFx1MEU0RVxcdTBFQjFcXHUwRUI0LVxcdTBFQjlcXHUwRUJCXFx1MEVCQ1xcdTBFQzgtXFx1MEVDRFxcdTBGMThcXHUwRjE5XFx1MEYzNVxcdTBGMzdcXHUwRjM5XFx1MEYzRVxcdTBGM0ZcXHUwRjcxLVxcdTBGODRcXHUwRjg2XFx1MEY4N1xcdTBGOEQtXFx1MEY5N1xcdTBGOTktXFx1MEZCQ1xcdTBGQzZcXHUxMDJCLVxcdTEwM0VcXHUxMDU2LVxcdTEwNTlcXHUxMDVFLVxcdTEwNjBcXHUxMDYyLVxcdTEwNjRcXHUxMDY3LVxcdTEwNkRcXHUxMDcxLVxcdTEwNzRcXHUxMDgyLVxcdTEwOERcXHUxMDhGXFx1MTA5QS1cXHUxMDlEXFx1MTM1RC1cXHUxMzVGXFx1MTcxMi1cXHUxNzE0XFx1MTczMi1cXHUxNzM0XFx1MTc1MlxcdTE3NTNcXHUxNzcyXFx1MTc3M1xcdTE3QjYtXFx1MTdEM1xcdTE3RERcXHUxODBCLVxcdTE4MERcXHUxOEE5XFx1MTkyMC1cXHUxOTJCXFx1MTkzMC1cXHUxOTNCXFx1MTlCMC1cXHUxOUMwXFx1MTlDOFxcdTE5QzlcXHUxQTE3LVxcdTFBMUJcXHUxQTU1LVxcdTFBNUVcXHUxQTYwLVxcdTFBN0NcXHUxQTdGXFx1MUIwMC1cXHUxQjA0XFx1MUIzNC1cXHUxQjQ0XFx1MUI2Qi1cXHUxQjczXFx1MUI4MC1cXHUxQjgyXFx1MUJBMS1cXHUxQkFBXFx1MUJFNi1cXHUxQkYzXFx1MUMyNC1cXHUxQzM3XFx1MUNEMC1cXHUxQ0QyXFx1MUNENC1cXHUxQ0U4XFx1MUNFRFxcdTFDRjJcXHUxREMwLVxcdTFERTZcXHUxREZDLVxcdTFERkZcXHUyMDBDXFx1MjAwRFxcdTIwRDAtXFx1MjBGMFxcdTJDRUYtXFx1MkNGMVxcdTJEN0ZcXHUyREUwLVxcdTJERkZcXHUzMDJBLVxcdTMwMkZcXHUzMDk5XFx1MzA5QVxcdUE2NkYtXFx1QTY3MlxcdUE2N0NcXHVBNjdEXFx1QTZGMFxcdUE2RjFcXHVBODAyXFx1QTgwNlxcdUE4MEJcXHVBODIzLVxcdUE4MjdcXHVBODgwXFx1QTg4MVxcdUE4QjQtXFx1QThDNFxcdUE4RTAtXFx1QThGMVxcdUE5MjYtXFx1QTkyRFxcdUE5NDctXFx1QTk1M1xcdUE5ODAtXFx1QTk4M1xcdUE5QjMtXFx1QTlDMFxcdUFBMjktXFx1QUEzNlxcdUFBNDNcXHVBQTRDXFx1QUE0RFxcdUFBN0JcXHVBQUIwXFx1QUFCMi1cXHVBQUI0XFx1QUFCN1xcdUFBQjhcXHVBQUJFXFx1QUFCRlxcdUFBQzFcXHVBQkUzLVxcdUFCRUFcXHVBQkVDXFx1QUJFRFxcdUZCMUVcXHVGRTAwLVxcdUZFMEZcXHVGRTIwLVxcdUZFMjZcXHVGRjlFXFx1RkY5Rl0nLFxuICBmb3JtYXQ6ICdbXFx1MDBBRFxcdTA2MDAtXFx1MDYwM1xcdTA2RERcXHUwNzBGXFx1MTdCNFxcdTE3QjVcXHUyMDBFXFx1MjAwRlxcdTIwMkEtXFx1MjAyRVxcdTIwNjAtXFx1MjA2NFxcdTIwNkEtXFx1MjA2RlxcdUZFRkZcXHVGRkY5LVxcdUZGRkJdJyxcbiAga2F0YWthbmE6ICdbXFx1MzAzMS1cXHUzMDM1XFx1MzA5QlxcdTMwOUNcXHUzMEEwLVxcdTMwRkFcXHUzMEZDLVxcdTMwRkZcXHUzMUYwLVxcdTMxRkZcXHUzMkQwLVxcdTMyRkVcXHUzMzAwLVxcdTMzNTdcXHVGRjY2LVxcdUZGOURdJyxcbiAgZXh0ZW5kbnVtbGV0OiAnWz1fXFx1MjAzRlxcdTIwNDBcXHUyMDU0XFx1RkUzM1xcdUZFMzRcXHVGRTRELVxcdUZFNEZcXHVGRjNGXFx1MjIwMC1cXHUyMkZGXFx1MDAzY1xcdTAwM2VdJyxcbiAgcHVuY3R1YXRpb246IHB1bmN0dWF0aW9uU3RyXG59O1xuLyogZXNsaW50LWVuYWJsZSBtYXgtbGVuICovXG5cbmNvbnN0IGNoYXJhY3RlckluZGljZXMgPSB7XG4gIEFMRVRURVI6IDAsXG4gIE1JRE5VTUxFVDogMSxcbiAgTUlETEVUVEVSOiAyLFxuICBNSUROVU06IDMsXG4gIE5VTUVSSUM6IDQsXG4gIENSOiA1LFxuICBMRjogNixcbiAgTkVXTElORTogNyxcbiAgRVhURU5EOiA4LFxuICBGT1JNQVQ6IDksXG4gIEtBVEFLQU5BOiAxMCxcbiAgRVhURU5ETlVNTEVUOiAxMSxcbiAgQVQ6IDEyLFxuICBPVEhFUjogMTNcbn07XG5cbi8vIFJlZ0V4cCBvYmplY3RzIGdlbmVyYXRlZCBmcm9tIGNvZGUgcG9pbnQgZGF0YS4gRWFjaCByZWdleCBtYXRjaGVzIGEgc2luZ2xlXG4vLyBjaGFyYWN0ZXIgYWdhaW5zdCBhIHNldCBvZiBVbmljb2RlIGNvZGUgcG9pbnRzLiBUaGUgaW5kZXggb2YgZWFjaCBpdGVtIGluXG4vLyB0aGlzIGFycmF5IG11c3QgbWF0Y2ggaXRzIGNvcnJlc3BvbmRpbmcgY29kZSBwb2ludCBjb25zdGFudCB2YWx1ZSBkZWZpbmVkXG4vLyBhYm92ZS5cbmNvbnN0IFNFVFMgPSBbXG4gIG5ldyBSZWdFeHAocmVnRXhwcy5hbGV0dGVyKSxcbiAgbmV3IFJlZ0V4cChyZWdFeHBzLm1pZG51bWxldCksXG4gIG5ldyBSZWdFeHAocmVnRXhwcy5taWRsZXR0ZXIpLFxuICBuZXcgUmVnRXhwKHJlZ0V4cHMubWlkbnVtKSxcbiAgbmV3IFJlZ0V4cChyZWdFeHBzLm51bWVyaWMpLFxuICBuZXcgUmVnRXhwKHJlZ0V4cHMuY3IpLFxuICBuZXcgUmVnRXhwKHJlZ0V4cHMubGYpLFxuICBuZXcgUmVnRXhwKHJlZ0V4cHMubmV3bGluZSksXG4gIG5ldyBSZWdFeHAocmVnRXhwcy5leHRlbmQpLFxuICBuZXcgUmVnRXhwKHJlZ0V4cHMuZm9ybWF0KSxcbiAgbmV3IFJlZ0V4cChyZWdFeHBzLmthdGFrYW5hKSxcbiAgbmV3IFJlZ0V4cChyZWdFeHBzLmV4dGVuZG51bWxldCksXG4gIG5ldyBSZWdFeHAoJ0AnKVxuXTtcblxuY29uc3QgRU1QVFlfU1RSSU5HID0gJyc7XG5jb25zdCBQVU5DVFVBVElPTiA9IG5ldyBSZWdFeHAoJ14nICsgcmVnRXhwcy5wdW5jdHVhdGlvbiArICckJyk7XG5jb25zdCBXSElURVNQQUNFID0gL15cXHMrJC87XG5cbmV4cG9ydCB7XG4gIHB1bmN0dWF0aW9uU3RyLFxuICBjaGFyYWN0ZXJJbmRpY2VzLFxuICBTRVRTLFxuICBFTVBUWV9TVFJJTkcsXG4gIFBVTkNUVUFUSU9OLFxuICBXSElURVNQQUNFXG59O1xuIiwiaW1wb3J0IHR5cGUgeyBDaGFyYWN0ZXJNYXAgfSBmcm9tICcuL1N0cmluZ01hcHBlcic7XG5pbXBvcnQgeyBjaGFyYWN0ZXJJbmRpY2VzIGFzIGNpIH0gZnJvbSAnLi9Vbmljb2RlRGF0YSc7XG5cbmNvbnN0IGlzV29yZEJvdW5kYXJ5ID0gKG1hcDogQ2hhcmFjdGVyTWFwLCBpbmRleDogbnVtYmVyKTogYm9vbGVhbiA9PiB7XG4gIGNvbnN0IHR5cGUgPSBtYXBbaW5kZXhdO1xuICBjb25zdCBuZXh0VHlwZSA9IG1hcFtpbmRleCArIDFdO1xuXG4gIGlmIChpbmRleCA8IDAgfHwgKGluZGV4ID4gbWFwLmxlbmd0aCAtIDEgJiYgaW5kZXggIT09IDApKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gV0I1LiBEb24ndCBicmVhayBiZXR3ZWVuIG1vc3QgbGV0dGVycy5cbiAgaWYgKHR5cGUgPT09IGNpLkFMRVRURVIgJiYgbmV4dFR5cGUgPT09IGNpLkFMRVRURVIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBuZXh0TmV4dFR5cGUgPSBtYXBbaW5kZXggKyAyXTtcblxuICAvLyBXQjYuIERvbid0IGJyZWFrIGxldHRlcnMgYWNyb3NzIGNlcnRhaW4gcHVuY3R1YXRpb24uXG4gIGlmICh0eXBlID09PSBjaS5BTEVUVEVSICYmXG4gICAgKG5leHRUeXBlID09PSBjaS5NSURMRVRURVIgfHwgbmV4dFR5cGUgPT09IGNpLk1JRE5VTUxFVCB8fCBuZXh0VHlwZSA9PT0gY2kuQVQpICYmXG4gICAgbmV4dE5leHRUeXBlID09PSBjaS5BTEVUVEVSKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgcHJldlR5cGUgPSBtYXBbaW5kZXggLSAxXTtcblxuICAvLyBXQjcuIERvbid0IGJyZWFrIGxldHRlcnMgYWNyb3NzIGNlcnRhaW4gcHVuY3R1YXRpb24uXG4gIGlmICgodHlwZSA9PT0gY2kuTUlETEVUVEVSIHx8IHR5cGUgPT09IGNpLk1JRE5VTUxFVCB8fCBuZXh0VHlwZSA9PT0gY2kuQVQpICYmXG4gICAgbmV4dFR5cGUgPT09IGNpLkFMRVRURVIgJiZcbiAgICBwcmV2VHlwZSA9PT0gY2kuQUxFVFRFUikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIFdCOC9XQjkvV0IxMC4gRG9uJ3QgYnJlYWsgaW5zaWRlIHNlcXVlbmNlcyBvZiBkaWdpdHMgb3IgZGlnaXRzXG4gIC8vIGFkamFjZW50IHRvIGxldHRlcnMuXG4gIGlmICgodHlwZSA9PT0gY2kuTlVNRVJJQyB8fCB0eXBlID09PSBjaS5BTEVUVEVSKSAmJlxuICAgIChuZXh0VHlwZSA9PT0gY2kuTlVNRVJJQyB8fCBuZXh0VHlwZSA9PT0gY2kuQUxFVFRFUikpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBXQjExLiBEb24ndCBicmVhayBpbnNpZGUgbnVtZXJpYyBzZXF1ZW5jZXMgbGlrZSBcIjMuMlwiIG9yXG4gIC8vIFwiMyw0NTYuNzg5XCIuXG4gIGlmICgodHlwZSA9PT0gY2kuTUlETlVNIHx8IHR5cGUgPT09IGNpLk1JRE5VTUxFVCkgJiZcbiAgICBuZXh0VHlwZSA9PT0gY2kuTlVNRVJJQyAmJlxuICAgIHByZXZUeXBlID09PSBjaS5OVU1FUklDKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gV0IxMi4gRG9uJ3QgYnJlYWsgaW5zaWRlIG51bWVyaWMgc2VxdWVuY2VzIGxpa2UgXCIzLjJcIiBvclxuICAvLyBcIjMsNDU2Ljc4OVwiLlxuICBpZiAodHlwZSA9PT0gY2kuTlVNRVJJQyAmJlxuICAgIChuZXh0VHlwZSA9PT0gY2kuTUlETlVNIHx8IG5leHRUeXBlID09PSBjaS5NSUROVU1MRVQpICYmXG4gICAgbmV4dE5leHRUeXBlID09PSBjaS5OVU1FUklDKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gV0I0LiBJZ25vcmUgZm9ybWF0IGFuZCBleHRlbmQgY2hhcmFjdGVycy5cbiAgaWYgKCh0eXBlID09PSBjaS5FWFRFTkQgfHwgdHlwZSA9PT0gY2kuRk9STUFUKSAmJlxuICAgIChuZXh0VHlwZSA9PT0gY2kuQUxFVFRFUiB8fCBuZXh0VHlwZSA9PT0gY2kuTlVNRVJJQyB8fCBuZXh0VHlwZSA9PT0gY2kuS0FUQUtBTkEgfHxcbiAgICAgIG5leHRUeXBlID09PSBjaS5FWFRFTkQgfHwgbmV4dFR5cGUgPT09IGNpLkZPUk1BVClcbiAgICB8fFxuICAgIChuZXh0VHlwZSA9PT0gY2kuRVhURU5EIHx8XG4gICAgICAvLyBUSU5ZLTk2NTQ6IE9ubHkgaWdub3JlIGZvcm1hdCBjaGFyYWN0ZXJzIGlmIHRoZXkgZG8gbm90IHByZWNlZGUgYSB3b3JkIGJvdW5kYXJ5LiBTaW5jZSBzb21lIGZvcm1hdCBjaGFyYWN0ZXJzIG92ZXJsYXAgd2l0aCB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMgKGV4OiBcXHVmZWZmKSBhbmRcbiAgICAgIC8vIG91ciB3b3JkIGV4dHJhY3Rpb24gbG9naWMgZXhjbHVkZXMgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzLCBpZiBhIHdoaXRlc3BhY2Utb3ZlcmxhcHBpbmcgZm9ybWF0IGNoYXJhY3RlciB0aGF0IHByZWNlZGVzIGEgd29yZCBib3VuZGFyeSBpcyBub3Qgc3BsaXQgb24sIHdoaWNoZXZlciB3b3JkXG4gICAgICAvLyBpdCBpcyBhIHBhcnQgb2Ygd2lsbCBub3QgYmUgYWRkZWQgdG8gdGhlIGxpc3Qgb2YgZXh0cmFjdGVkIHdvcmRzLCBjYXVzaW5nIGluYWNjdXJhY2llcy5cbiAgICAgIG5leHRUeXBlID09PSBjaS5GT1JNQVQgJiYgKG5leHROZXh0VHlwZSA9PT0gY2kuQUxFVFRFUiB8fCBuZXh0TmV4dFR5cGUgPT09IGNpLk5VTUVSSUMgfHwgbmV4dE5leHRUeXBlID09PSBjaS5LQVRBS0FOQSB8fCBuZXh0TmV4dFR5cGUgPT09IGNpLkVYVEVORCB8fCBuZXh0TmV4dFR5cGUgPT09IGNpLkZPUk1BVCkpXG4gICAgICAmJiAodHlwZSA9PT0gY2kuQUxFVFRFUiB8fCB0eXBlID09PSBjaS5OVU1FUklDIHx8IHR5cGUgPT09IGNpLktBVEFLQU5BIHx8IHR5cGUgPT09IGNpLkVYVEVORCB8fCB0eXBlID09PSBjaS5GT1JNQVQpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gV0IzLiBEb24ndCBicmVhayBpbnNpZGUgQ1JMRi5cbiAgaWYgKHR5cGUgPT09IGNpLkNSICYmIG5leHRUeXBlID09PSBjaS5MRikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIFdCM2EuIEJyZWFrIGJlZm9yZSBuZXdsaW5lcyAoaW5jbHVkaW5nIENSIGFuZCBMRikuXG4gIGlmICh0eXBlID09PSBjaS5ORVdMSU5FIHx8IHR5cGUgPT09IGNpLkNSIHx8IHR5cGUgPT09IGNpLkxGKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyBXQjNiLiBCcmVhayBhZnRlciBuZXdsaW5lcyAoaW5jbHVkaW5nIENSIGFuZCBMRikuXG4gIGlmIChuZXh0VHlwZSA9PT0gY2kuTkVXTElORSB8fCBuZXh0VHlwZSA9PT0gY2kuQ1IgfHwgbmV4dFR5cGUgPT09IGNpLkxGKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyBXQjEzLiBEb24ndCBicmVhayBiZXR3ZWVuIEthdGFrYW5hIGNoYXJhY3RlcnMuXG4gIGlmICh0eXBlID09PSBjaS5LQVRBS0FOQSAmJiBuZXh0VHlwZSA9PT0gY2kuS0FUQUtBTkEpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBXQjEzYS4gRG9uJ3QgYnJlYWsgZnJvbSBleHRlbmRlcnMuXG4gIGlmIChuZXh0VHlwZSA9PT0gY2kuRVhURU5ETlVNTEVUICYmXG4gICAgKHR5cGUgPT09IGNpLkFMRVRURVIgfHwgdHlwZSA9PT0gY2kuTlVNRVJJQyB8fCB0eXBlID09PSBjaS5LQVRBS0FOQSB8fFxuICAgICAgdHlwZSA9PT0gY2kuRVhURU5ETlVNTEVUKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIFdCMTNiLiBEb24ndCBicmVhayBmcm9tIGV4dGVuZGVycy5cbiAgaWYgKHR5cGUgPT09IGNpLkVYVEVORE5VTUxFVCAmJlxuICAgIChuZXh0VHlwZSA9PT0gY2kuQUxFVFRFUiB8fCBuZXh0VHlwZSA9PT0gY2kuTlVNRVJJQyB8fFxuICAgICAgbmV4dFR5cGUgPT09IGNpLktBVEFLQU5BKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh0eXBlID09PSBjaS5BVCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIEJyZWFrIGFmdGVyIGFueSBjaGFyYWN0ZXIgbm90IGNvdmVyZWQgYnkgdGhlIHJ1bGVzIGFib3ZlLlxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmV4cG9ydCB7XG4gIGlzV29yZEJvdW5kYXJ5XG59O1xuIiwiaW1wb3J0IHsgQXJyIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0IHsgdHlwZSBDaGFyYWN0ZXJNYXAsIGNsYXNzaWZ5IH0gZnJvbSAnLi9TdHJpbmdNYXBwZXInO1xuaW1wb3J0ICogYXMgVW5pY29kZURhdGEgZnJvbSAnLi9Vbmljb2RlRGF0YSc7XG5pbXBvcnQgeyBpc1dvcmRCb3VuZGFyeSB9IGZyb20gJy4vV29yZEJvdW5kYXJ5JztcblxuY29uc3QgRU1QVFlfU1RSSU5HID0gVW5pY29kZURhdGEuRU1QVFlfU1RSSU5HO1xuY29uc3QgV0hJVEVTUEFDRSA9IFVuaWNvZGVEYXRhLldISVRFU1BBQ0U7XG5jb25zdCBQVU5DVFVBVElPTiA9IFVuaWNvZGVEYXRhLlBVTkNUVUFUSU9OO1xuXG5jb25zdCBpc1Byb3RvY29sID0gKHN0cjogc3RyaW5nKTogYm9vbGVhbiA9PiBzdHIgPT09ICdodHRwJyB8fCBzdHIgPT09ICdodHRwcyc7XG5cbmNvbnN0IGZpbmRXb3JkRW5kID0gKGNoYXJhY3RlcnM6IHN0cmluZ1tdLCBzdGFydEluZGV4OiBudW1iZXIpID0+IHtcbiAgbGV0IGk6IG51bWJlcjtcbiAgZm9yIChpID0gc3RhcnRJbmRleDsgaSA8IGNoYXJhY3RlcnMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoV0hJVEVTUEFDRS50ZXN0KGNoYXJhY3RlcnNbaV0pKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGk7XG59O1xuXG5jb25zdCBmaW5kVXJsRW5kID0gKGNoYXJhY3RlcnM6IHN0cmluZ1tdLCBzdGFydEluZGV4OiBudW1iZXIpOiBudW1iZXIgPT4ge1xuICBjb25zdCBlbmRJbmRleCA9IGZpbmRXb3JkRW5kKGNoYXJhY3RlcnMsIHN0YXJ0SW5kZXggKyAxKTtcbiAgY29uc3QgcGVha2VkV29yZCA9IGNoYXJhY3RlcnMuc2xpY2Uoc3RhcnRJbmRleCArIDEsIGVuZEluZGV4KS5qb2luKEVNUFRZX1NUUklORyk7XG4gIHJldHVybiBwZWFrZWRXb3JkLnN1YnN0cigwLCAzKSA9PT0gJzovLycgPyBlbmRJbmRleCA6IHN0YXJ0SW5kZXg7XG59O1xuXG5leHBvcnQgdHlwZSBXb3JkPFQ+ID0gVFtdO1xuXG5pbnRlcmZhY2UgV29yZEluZGV4IHtcbiAgcmVhZG9ubHkgc3RhcnQ6IG51bWJlcjtcbiAgcmVhZG9ubHkgZW5kOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV29yZHNXaXRoSW5kaWNlczxUPiB7XG4gIHJlYWRvbmx5IHdvcmRzOiBXb3JkPFQ+W107XG4gIHJlYWRvbmx5IGluZGljZXM6IFdvcmRJbmRleFtdO1xufVxuXG5jb25zdCBmaW5kV29yZHNXaXRoSW5kaWNlcyA9IDxUPihjaGFyczogV29yZDxUPiwgc0NoYXJzOiBzdHJpbmdbXSwgY2hhcmFjdGVyTWFwOiBDaGFyYWN0ZXJNYXAsIG9wdGlvbnM6IFdvcmRPcHRpb25zKTogV29yZHNXaXRoSW5kaWNlczxUPiA9PiB7XG4gIGNvbnN0IHdvcmRzOiBXb3JkPFQ+W10gPSBbXTtcbiAgY29uc3QgaW5kaWNlczogV29yZEluZGV4W10gPSBbXTtcbiAgbGV0IHdvcmQ6IFdvcmQ8VD4gPSBbXTtcblxuICAvLyBMb29wIHRocm91Z2ggZWFjaCBjaGFyYWN0ZXIgaW4gdGhlIGNsYXNzaWZpY2F0aW9uIG1hcCBhbmQgZGV0ZXJtaW5lIHdoZXRoZXJcbiAgLy8gaXQgcHJlY2VkZXMgYSB3b3JkIGJvdW5kYXJ5LCBidWlsZGluZyBhbiBhcnJheSBvZiBkaXN0aW5jdCB3b3JkcyBhcyB3ZSBnby5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGFyYWN0ZXJNYXAubGVuZ3RoOyArK2kpIHtcblxuICAgIC8vIEFwcGVuZCB0aGlzIGNoYXJhY3RlciB0byB0aGUgY3VycmVudCB3b3JkLlxuICAgIHdvcmQucHVzaChjaGFyc1tpXSk7XG5cbiAgICAvLyBJZiB0aGVyZSdzIGEgd29yZCBib3VuZGFyeSBiZXR3ZWVuIHRoZSBjdXJyZW50IGNoYXJhY3RlciBhbmQgdGhlIG5leHQgY2hhcmFjdGVyLFxuICAgIC8vIGFwcGVuZCB0aGUgY3VycmVudCB3b3JkIHRvIHRoZSB3b3JkcyBhcnJheSBhbmQgc3RhcnQgYnVpbGRpbmcgYSBuZXcgd29yZC5cbiAgICBpZiAoaXNXb3JkQm91bmRhcnkoY2hhcmFjdGVyTWFwLCBpKSkge1xuICAgICAgY29uc3QgY2ggPSBzQ2hhcnNbaV07XG4gICAgICBpZiAoXG4gICAgICAgIChvcHRpb25zLmluY2x1ZGVXaGl0ZXNwYWNlIHx8ICFXSElURVNQQUNFLnRlc3QoY2gpKSAmJlxuICAgICAgICAob3B0aW9ucy5pbmNsdWRlUHVuY3R1YXRpb24gfHwgIVBVTkNUVUFUSU9OLnRlc3QoY2gpKVxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0T2ZXb3JkID0gaSAtIHdvcmQubGVuZ3RoICsgMTtcbiAgICAgICAgY29uc3QgZW5kT2ZXb3JkID0gaSArIDE7XG4gICAgICAgIGNvbnN0IHN0ciA9IHNDaGFycy5zbGljZShzdGFydE9mV29yZCwgZW5kT2ZXb3JkKS5qb2luKEVNUFRZX1NUUklORyk7XG5cbiAgICAgICAgaWYgKGlzUHJvdG9jb2woc3RyKSkge1xuICAgICAgICAgIGNvbnN0IGVuZE9mVXJsID0gZmluZFVybEVuZChzQ2hhcnMsIGkpO1xuICAgICAgICAgIGNvbnN0IHVybCA9IGNoYXJzLnNsaWNlKGVuZE9mV29yZCwgZW5kT2ZVcmwpO1xuICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KHdvcmQsIHVybCk7XG4gICAgICAgICAgaSA9IGVuZE9mVXJsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlIHdvcmQgaXMgYW4gYWJicmV2aWF0aW9uLCBpbmNsdWRlIHRoZSBuZXh0IGNoYXJhY3RlciBpZiBpdCdzIGEgcGVyaW9kLlxuICAgICAgICBpZiAoc0NoYXJzW2kgKyAxXSA9PT0gJy4nICYmIC9eKFthLXpBLVpdXFwuKSskLy50ZXN0KHN0ciArICcuJykpIHtcbiAgICAgICAgICB3b3JkLnB1c2goY2hhcnNbaSArIDFdKTtcbiAgICAgICAgICBpbmRpY2VzLnB1c2goe1xuICAgICAgICAgICAgc3RhcnQ6IHN0YXJ0T2ZXb3JkLFxuICAgICAgICAgICAgZW5kOiBlbmRPZldvcmQgKyAxXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW5kaWNlcy5wdXNoKHtcbiAgICAgICAgICAgIHN0YXJ0OiBzdGFydE9mV29yZCxcbiAgICAgICAgICAgIGVuZDogZW5kT2ZXb3JkXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgd29yZHMucHVzaCh3b3JkKTtcbiAgICAgIH1cblxuICAgICAgd29yZCA9IFtdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IHdvcmRzLCBpbmRpY2VzIH07XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFdvcmRPcHRpb25zIHtcbiAgaW5jbHVkZVdoaXRlc3BhY2U/OiBib29sZWFuO1xuICBpbmNsdWRlUHVuY3R1YXRpb24/OiBib29sZWFuO1xufVxuXG5jb25zdCBnZXREZWZhdWx0T3B0aW9ucyA9ICgpOiBXb3JkT3B0aW9ucyA9PiAoe1xuICBpbmNsdWRlV2hpdGVzcGFjZTogZmFsc2UsXG4gIGluY2x1ZGVQdW5jdHVhdGlvbjogZmFsc2Vcbn0pO1xuXG5jb25zdCBnZXRXb3Jkc1dpdGhJbmRpY2VzID0gPFQ+KGNoYXJzOiBXb3JkPFQ+LCBleHRyYWN0OiAoY2hhcjogVCkgPT4gc3RyaW5nLCBvcHRpb25zPzogV29yZE9wdGlvbnMpOiBXb3Jkc1dpdGhJbmRpY2VzPFQ+ID0+IHtcbiAgb3B0aW9ucyA9IHtcbiAgICAuLi5nZXREZWZhdWx0T3B0aW9ucygpLFxuICAgIC4uLm9wdGlvbnNcbiAgfTtcbiAgY29uc3QgZXh0cmFjdGVkQ2hhcnM6IHN0cmluZ1tdID0gQXJyLm1hcChjaGFycywgZXh0cmFjdCk7XG4gIGNvbnN0IGNoYXJhY3Rlck1hcDogQ2hhcmFjdGVyTWFwID0gY2xhc3NpZnkoZXh0cmFjdGVkQ2hhcnMpO1xuICByZXR1cm4gZmluZFdvcmRzV2l0aEluZGljZXMoY2hhcnMsIGV4dHJhY3RlZENoYXJzLCBjaGFyYWN0ZXJNYXAsIG9wdGlvbnMpO1xufTtcblxuY29uc3QgZ2V0V29yZHMgPSA8VD4oY2hhcnM6IFdvcmQ8VD4sIGV4dHJhY3Q6IChjaGFyOiBUKSA9PiBzdHJpbmcsIG9wdGlvbnM/OiBXb3JkT3B0aW9ucyk6IFdvcmQ8VD5bXSA9PlxuICBnZXRXb3Jkc1dpdGhJbmRpY2VzKGNoYXJzLCBleHRyYWN0LCBvcHRpb25zKS53b3JkcztcblxuZXhwb3J0IHtcbiAgZ2V0V29yZHMsXG4gIGdldFdvcmRzV2l0aEluZGljZXNcbn07XG4iLCJpbXBvcnQgUGx1Z2luTWFuYWdlciBmcm9tICd0aW55bWNlL2NvcmUvYXBpL1BsdWdpbk1hbmFnZXInO1xuXG5pbXBvcnQgKiBhcyBBcGkgZnJvbSAnLi9hcGkvQXBpJztcbmltcG9ydCAqIGFzIENvbW1hbmRzIGZyb20gJy4vYXBpL0NvbW1hbmRzJztcbmltcG9ydCAqIGFzIFdvcmRjb3VudGVyIGZyb20gJy4vY29yZS9Xb3JkQ291bnRlcic7XG5pbXBvcnQgKiBhcyBCdXR0b25zIGZyb20gJy4vdWkvQnV0dG9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IChkZWxheTogbnVtYmVyID0gMzAwKTogdm9pZCA9PiB7XG4gIFBsdWdpbk1hbmFnZXIuYWRkKCd3b3JkY291bnQnLCAoZWRpdG9yKSA9PiB7XG4gICAgY29uc3QgYXBpID0gQXBpLmdldChlZGl0b3IpO1xuXG4gICAgQ29tbWFuZHMucmVnaXN0ZXIoZWRpdG9yLCBhcGkpO1xuICAgIEJ1dHRvbnMucmVnaXN0ZXIoZWRpdG9yKTtcbiAgICBXb3JkY291bnRlci5zZXR1cChlZGl0b3IsIGFwaSwgZGVsYXkpO1xuICAgIHJldHVybiBhcGk7XG4gIH0pO1xufTtcbiIsImltcG9ydCB0eXBlIEVkaXRvciBmcm9tICd0aW55bWNlL2NvcmUvYXBpL0VkaXRvcic7XG5cbmltcG9ydCB7IGNvdW50Q2hhcmFjdGVycywgY291bnRDaGFyYWN0ZXJzV2l0aG91dFNwYWNlcywgdHlwZSBDb3VudGVyLCBjb3VudFdvcmRzIH0gZnJvbSAnLi4vY29yZS9Db3VudCc7XG5cbmV4cG9ydCB0eXBlIENvdW50R2V0dGVyID0gKCkgPT4gbnVtYmVyO1xuXG5pbnRlcmZhY2UgQ291bnRHZXR0ZXJzIHtcbiAgcmVhZG9ubHkgZ2V0V29yZENvdW50OiBDb3VudEdldHRlcjtcbiAgcmVhZG9ubHkgZ2V0Q2hhcmFjdGVyQ291bnQ6IENvdW50R2V0dGVyO1xuICByZWFkb25seSBnZXRDaGFyYWN0ZXJDb3VudFdpdGhvdXRTcGFjZXM6IENvdW50R2V0dGVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdvcmRDb3VudEFwaSB7XG4gIHJlYWRvbmx5IGJvZHk6IENvdW50R2V0dGVycztcbiAgcmVhZG9ubHkgc2VsZWN0aW9uOiBDb3VudEdldHRlcnM7XG4gIHJlYWRvbmx5IGdldENvdW50OiBDb3VudEdldHRlcjsgLy8gVE9ETzogRGVwcmVjYXRlXG59XG5cbmNvbnN0IGNyZWF0ZUJvZHlDb3VudGVyID0gKGVkaXRvcjogRWRpdG9yLCBjb3VudDogQ291bnRlcik6IENvdW50R2V0dGVyID0+ICgpOiBudW1iZXIgPT5cbiAgY291bnQoZWRpdG9yLmdldEJvZHkoKSwgZWRpdG9yLnNjaGVtYSk7XG5cbmNvbnN0IGNyZWF0ZVNlbGVjdGlvbkNvdW50ZXIgPSAoZWRpdG9yOiBFZGl0b3IsIGNvdW50OiBDb3VudGVyKTogQ291bnRHZXR0ZXIgPT4gKCk6IG51bWJlciA9PlxuICBjb3VudChlZGl0b3Iuc2VsZWN0aW9uLmdldFJuZygpLmNsb25lQ29udGVudHMoKSwgZWRpdG9yLnNjaGVtYSk7XG5cbmNvbnN0IGNyZWF0ZUJvZHlXb3JkQ291bnRlciA9IChlZGl0b3I6IEVkaXRvcik6IENvdW50R2V0dGVyID0+XG4gIGNyZWF0ZUJvZHlDb3VudGVyKGVkaXRvciwgY291bnRXb3Jkcyk7XG5cbmNvbnN0IGdldCA9IChlZGl0b3I6IEVkaXRvcik6IFdvcmRDb3VudEFwaSA9PiAoe1xuICBib2R5OiB7XG4gICAgZ2V0V29yZENvdW50OiBjcmVhdGVCb2R5V29yZENvdW50ZXIoZWRpdG9yKSxcbiAgICBnZXRDaGFyYWN0ZXJDb3VudDogY3JlYXRlQm9keUNvdW50ZXIoZWRpdG9yLCBjb3VudENoYXJhY3RlcnMpLFxuICAgIGdldENoYXJhY3RlckNvdW50V2l0aG91dFNwYWNlczogY3JlYXRlQm9keUNvdW50ZXIoZWRpdG9yLCBjb3VudENoYXJhY3RlcnNXaXRob3V0U3BhY2VzKVxuICB9LFxuICBzZWxlY3Rpb246IHtcbiAgICBnZXRXb3JkQ291bnQ6IGNyZWF0ZVNlbGVjdGlvbkNvdW50ZXIoZWRpdG9yLCBjb3VudFdvcmRzKSxcbiAgICBnZXRDaGFyYWN0ZXJDb3VudDogY3JlYXRlU2VsZWN0aW9uQ291bnRlcihlZGl0b3IsIGNvdW50Q2hhcmFjdGVycyksXG4gICAgZ2V0Q2hhcmFjdGVyQ291bnRXaXRob3V0U3BhY2VzOiBjcmVhdGVTZWxlY3Rpb25Db3VudGVyKGVkaXRvciwgY291bnRDaGFyYWN0ZXJzV2l0aG91dFNwYWNlcylcbiAgfSxcbiAgZ2V0Q291bnQ6IGNyZWF0ZUJvZHlXb3JkQ291bnRlcihlZGl0b3IpXG59KTtcblxuZXhwb3J0IHtcbiAgZ2V0XG59O1xuIiwiaW1wb3J0IHR5cGUgRWRpdG9yIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvRWRpdG9yJztcblxuaW1wb3J0ICogYXMgRGlhbG9nIGZyb20gJy4uL3VpL0RpYWxvZyc7XG5cbmltcG9ydCB0eXBlIHsgV29yZENvdW50QXBpIH0gZnJvbSAnLi9BcGknO1xuXG5jb25zdCByZWdpc3RlciA9IChlZGl0b3I6IEVkaXRvciwgYXBpOiBXb3JkQ291bnRBcGkpOiB2b2lkID0+IHtcbiAgZWRpdG9yLmFkZENvbW1hbmQoJ21jZVdvcmRDb3VudCcsICgpID0+IERpYWxvZy5vcGVuKGVkaXRvciwgYXBpKSk7XG59O1xuXG5leHBvcnQge1xuICByZWdpc3RlclxufTtcbiIsImltcG9ydCB0eXBlIEVkaXRvciBmcm9tICd0aW55bWNlL2NvcmUvYXBpL0VkaXRvcic7XG5cbmltcG9ydCB0eXBlIHsgV29yZENvdW50QXBpIH0gZnJvbSAnLi9BcGknO1xuXG5jb25zdCBmaXJlV29yZENvdW50VXBkYXRlID0gKGVkaXRvcjogRWRpdG9yLCBhcGk6IFdvcmRDb3VudEFwaSk6IHZvaWQgPT4ge1xuICBlZGl0b3IuZGlzcGF0Y2goJ3dvcmRDb3VudFVwZGF0ZScsIHtcbiAgICB3b3JkQ291bnQ6IHtcbiAgICAgIHdvcmRzOiBhcGkuYm9keS5nZXRXb3JkQ291bnQoKSxcbiAgICAgIGNoYXJhY3RlcnM6IGFwaS5ib2R5LmdldENoYXJhY3RlckNvdW50KCksXG4gICAgICBjaGFyYWN0ZXJzV2l0aG91dFNwYWNlczogYXBpLmJvZHkuZ2V0Q2hhcmFjdGVyQ291bnRXaXRob3V0U3BhY2VzKClcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IHtcbiAgZmlyZVdvcmRDb3VudFVwZGF0ZVxufTtcbiIsImltcG9ydCB7IEZ1biB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5pbXBvcnQgeyBXb3JkcyB9IGZyb20gJ0BlcGhveC9wb2xhcmlzJztcblxuaW1wb3J0IHR5cGUgU2NoZW1hIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvaHRtbC9TY2hlbWEnO1xuXG5pbXBvcnQgeyBnZXRUZXh0IH0gZnJvbSAnLi9HZXRUZXh0JztcblxuZXhwb3J0IHR5cGUgQ291bnRlciA9IChub2RlOiBOb2RlLCBzY2hlbWE6IFNjaGVtYSkgPT4gbnVtYmVyO1xuXG5jb25zdCByZW1vdmVad3NwID0gKHRleHQ6IHN0cmluZykgPT5cbiAgdGV4dC5yZXBsYWNlKC9cXHUyMDBCL2csICcnKTtcblxuY29uc3Qgc3RyTGVuID0gKHN0cjogc3RyaW5nKTogbnVtYmVyID0+XG4gIHN0ci5yZXBsYWNlKC9bXFx1RDgwMC1cXHVEQkZGXVtcXHVEQzAwLVxcdURGRkZdL2csICdfJykubGVuZ3RoO1xuXG5jb25zdCBjb3VudFdvcmRzOiBDb3VudGVyID0gKG5vZGU6IE5vZGUsIHNjaGVtYTogU2NoZW1hKTogbnVtYmVyID0+IHtcbiAgLy8gVE9ETyAtIFRJTlktOTcwODogU2VlIGlmIFRJTlktNzQ4NCBmaXggY2FuIGJlIHJlcGxhY2VkIGJ5IGFkZGluZyBcXHUyMDBCIHRvIHRoZSBcImZvcm1hdFwiIGNoYXJhY3RlciBjbGFzcyBhcyBwZXIgVW5pY29kZSBzdGFuZGFyZFxuICAvLyBUSU5ZLTc0ODQ6IFRoZSBncmFwaGVtZSB3b3JkIGJvdW5kYXJ5IGxvZ2ljIHVzZWQgYnkgUG9sYXJpcyBzdGF0ZXMgYSBaV1NQIChcXHUyMDBCKSBzaG91bGQgYmUgdHJlYXRlZCBhc1xuICAvLyBhIHdvcmQgYm91bmRhcnksIGhvd2V2ZXIgd29yZCBjb3VudGluZyBub3JtYWxseSBkb2VzIG5vdCBjb25zaWRlciBpdCBhcyBhbnl0aGluZyBzbyB3ZSBzdHJpcCBpdCBvdXQuXG4gIGNvbnN0IHRleHQgPSByZW1vdmVad3NwKGdldFRleHQobm9kZSwgc2NoZW1hKS5qb2luKCdcXG4nKSk7XG4gIHJldHVybiBXb3Jkcy5nZXRXb3Jkcyh0ZXh0LnNwbGl0KCcnKSwgRnVuLmlkZW50aXR5KS5sZW5ndGg7XG59O1xuXG5jb25zdCBjb3VudENoYXJhY3RlcnM6IENvdW50ZXIgPSAobm9kZTogTm9kZSwgc2NoZW1hOiBTY2hlbWEpOiBudW1iZXIgPT4ge1xuICBjb25zdCB0ZXh0ID0gZ2V0VGV4dChub2RlLCBzY2hlbWEpLmpvaW4oJycpO1xuICByZXR1cm4gc3RyTGVuKHRleHQpO1xufTtcblxuY29uc3QgY291bnRDaGFyYWN0ZXJzV2l0aG91dFNwYWNlczogQ291bnRlciA9IChub2RlOiBOb2RlLCBzY2hlbWE6IFNjaGVtYSk6IG51bWJlciA9PiB7XG4gIGNvbnN0IHRleHQgPSBnZXRUZXh0KG5vZGUsIHNjaGVtYSkuam9pbignJykucmVwbGFjZSgvXFxzL2csICcnKTtcbiAgcmV0dXJuIHN0ckxlbih0ZXh0KTtcbn07XG5cbmV4cG9ydCB7XG4gIGNvdW50V29yZHMsXG4gIGNvdW50Q2hhcmFjdGVycyxcbiAgY291bnRDaGFyYWN0ZXJzV2l0aG91dFNwYWNlc1xufTtcbiIsImltcG9ydCB7IFVuaWNvZGUgfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5pbXBvcnQgRG9tVHJlZVdhbGtlciBmcm9tICd0aW55bWNlL2NvcmUvYXBpL2RvbS9UcmVlV2Fsa2VyJztcbmltcG9ydCB0eXBlIHsgU2NoZW1hTWFwLCBkZWZhdWx0IGFzIFNjaGVtYSB9IGZyb20gJ3RpbnltY2UvY29yZS9hcGkvaHRtbC9TY2hlbWEnO1xuXG5jb25zdCBnZXRUZXh0ID0gKG5vZGU6IE5vZGUsIHNjaGVtYTogU2NoZW1hKTogc3RyaW5nW10gPT4ge1xuICBjb25zdCBibG9ja0VsZW1lbnRzOiBTY2hlbWFNYXAgPSBzY2hlbWEuZ2V0QmxvY2tFbGVtZW50cygpO1xuICBjb25zdCB2b2lkRWxlbWVudHM6IFNjaGVtYU1hcCA9IHNjaGVtYS5nZXRWb2lkRWxlbWVudHMoKTtcblxuICBjb25zdCBpc05ld2xpbmUgPSAobm9kZTogTm9kZSkgPT4gYmxvY2tFbGVtZW50c1tub2RlLm5vZGVOYW1lXSB8fCB2b2lkRWxlbWVudHNbbm9kZS5ub2RlTmFtZV07XG5cbiAgY29uc3QgdGV4dEJsb2Nrczogc3RyaW5nW10gPSBbXTtcbiAgbGV0IHR4dCA9ICcnO1xuICBjb25zdCB0cmVlV2Fsa2VyID0gbmV3IERvbVRyZWVXYWxrZXIobm9kZSwgbm9kZSk7XG5cbiAgbGV0IHRlbXBOb2RlOiBOb2RlIHwgbnVsbCB8IHVuZGVmaW5lZDtcbiAgd2hpbGUgKCh0ZW1wTm9kZSA9IHRyZWVXYWxrZXIubmV4dCgpKSkge1xuICAgIGlmICh0ZW1wTm9kZS5ub2RlVHlwZSA9PT0gMykge1xuICAgICAgdHh0ICs9IFVuaWNvZGUucmVtb3ZlWndzcCgodGVtcE5vZGUgYXMgVGV4dCkuZGF0YSk7XG4gICAgfSBlbHNlIGlmIChpc05ld2xpbmUodGVtcE5vZGUpICYmIHR4dC5sZW5ndGgpIHtcbiAgICAgIHRleHRCbG9ja3MucHVzaCh0eHQpO1xuICAgICAgdHh0ID0gJyc7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR4dC5sZW5ndGgpIHtcbiAgICB0ZXh0QmxvY2tzLnB1c2godHh0KTtcbiAgfVxuXG4gIHJldHVybiB0ZXh0QmxvY2tzO1xufTtcblxuZXhwb3J0IHtcbiAgZ2V0VGV4dFxufTtcbiIsImltcG9ydCB7IFRocm90dGxlciB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmltcG9ydCB0eXBlIEVkaXRvciBmcm9tICd0aW55bWNlL2NvcmUvYXBpL0VkaXRvcic7XG5pbXBvcnQgRGVsYXkgZnJvbSAndGlueW1jZS9jb3JlL2FwaS91dGlsL0RlbGF5JztcblxuaW1wb3J0IHR5cGUgeyBXb3JkQ291bnRBcGkgfSBmcm9tICcuLi9hcGkvQXBpJztcbmltcG9ydCAqIGFzIEV2ZW50cyBmcm9tICcuLi9hcGkvRXZlbnRzJztcblxuY29uc3QgdXBkYXRlQ291bnQgPSAoZWRpdG9yOiBFZGl0b3IsIGFwaTogV29yZENvdW50QXBpKTogdm9pZCA9PiB7XG4gIEV2ZW50cy5maXJlV29yZENvdW50VXBkYXRlKGVkaXRvciwgYXBpKTtcbn07XG5cbmNvbnN0IHNldHVwID0gKGVkaXRvcjogRWRpdG9yLCBhcGk6IFdvcmRDb3VudEFwaSwgZGVsYXk6IG51bWJlcik6IHZvaWQgPT4ge1xuICBjb25zdCBkZWJvdW5jZWRVcGRhdGUgPSBUaHJvdHRsZXIuZmlyc3QoKCkgPT4gdXBkYXRlQ291bnQoZWRpdG9yLCBhcGkpLCBkZWxheSk7XG5cbiAgZWRpdG9yLm9uKCdpbml0JywgKCkgPT4ge1xuICAgIHVwZGF0ZUNvdW50KGVkaXRvciwgYXBpKTtcbiAgICBEZWxheS5zZXRFZGl0b3JUaW1lb3V0KGVkaXRvciwgKCkgPT4ge1xuICAgICAgZWRpdG9yLm9uKCdTZXRDb250ZW50IEJlZm9yZUFkZFVuZG8gVW5kbyBSZWRvIFZpZXdVcGRhdGUga2V5dXAnLCBkZWJvdW5jZWRVcGRhdGUudGhyb3R0bGUpO1xuICAgIH0sIDApO1xuICAgIGVkaXRvci5vbigncmVtb3ZlJywgZGVib3VuY2VkVXBkYXRlLmNhbmNlbCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHtcbiAgc2V0dXAsXG4gIHVwZGF0ZUNvdW50XG59O1xuIiwiaW1wb3J0IHR5cGUgRWRpdG9yIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvRWRpdG9yJztcblxuY29uc3QgcmVnaXN0ZXIgPSAoZWRpdG9yOiBFZGl0b3IpOiB2b2lkID0+IHtcbiAgY29uc3Qgb25BY3Rpb24gPSAoKSA9PiBlZGl0b3IuZXhlY0NvbW1hbmQoJ21jZVdvcmRDb3VudCcpO1xuXG4gIGVkaXRvci51aS5yZWdpc3RyeS5hZGRCdXR0b24oJ3dvcmRjb3VudCcsIHtcbiAgICB0b29sdGlwOiAnV29yZCBjb3VudCcsXG4gICAgaWNvbjogJ2NoYXJhY3Rlci1jb3VudCcsXG4gICAgb25BY3Rpb24sXG4gICAgY29udGV4dDogJ2FueSdcbiAgfSk7XG5cbiAgZWRpdG9yLnVpLnJlZ2lzdHJ5LmFkZE1lbnVJdGVtKCd3b3JkY291bnQnLCB7XG4gICAgdGV4dDogJ1dvcmQgY291bnQnLFxuICAgIGljb246ICdjaGFyYWN0ZXItY291bnQnLFxuICAgIG9uQWN0aW9uLFxuICAgIGNvbnRleHQ6ICdhbnknXG4gIH0pO1xufTtcblxuZXhwb3J0IHtcbiAgcmVnaXN0ZXJcbn07XG4iLCJpbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuXG5pbXBvcnQgdHlwZSB7IFdvcmRDb3VudEFwaSB9IGZyb20gJy4uL2FwaS9BcGknO1xuXG5jb25zdCBvcGVuID0gKGVkaXRvcjogRWRpdG9yLCBhcGk6IFdvcmRDb3VudEFwaSk6IHZvaWQgPT4ge1xuICBlZGl0b3Iud2luZG93TWFuYWdlci5vcGVuKHtcbiAgICB0aXRsZTogJ1dvcmQgQ291bnQnLFxuICAgIGJvZHk6IHtcbiAgICAgIHR5cGU6ICdwYW5lbCcsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ3RhYmxlJyxcbiAgICAgICAgICBoZWFkZXI6IFsgJ0NvdW50JywgJ0RvY3VtZW50JywgJ1NlbGVjdGlvbicgXSxcbiAgICAgICAgICBjZWxsczogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAnV29yZHMnLFxuICAgICAgICAgICAgICBTdHJpbmcoYXBpLmJvZHkuZ2V0V29yZENvdW50KCkpLFxuICAgICAgICAgICAgICBTdHJpbmcoYXBpLnNlbGVjdGlvbi5nZXRXb3JkQ291bnQoKSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICdDaGFyYWN0ZXJzIChubyBzcGFjZXMpJyxcbiAgICAgICAgICAgICAgU3RyaW5nKGFwaS5ib2R5LmdldENoYXJhY3RlckNvdW50V2l0aG91dFNwYWNlcygpKSxcbiAgICAgICAgICAgICAgU3RyaW5nKGFwaS5zZWxlY3Rpb24uZ2V0Q2hhcmFjdGVyQ291bnRXaXRob3V0U3BhY2VzKCkpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAnQ2hhcmFjdGVycycsXG4gICAgICAgICAgICAgIFN0cmluZyhhcGkuYm9keS5nZXRDaGFyYWN0ZXJDb3VudCgpKSxcbiAgICAgICAgICAgICAgU3RyaW5nKGFwaS5zZWxlY3Rpb24uZ2V0Q2hhcmFjdGVyQ291bnQoKSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIGJ1dHRvbnM6IFtcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ2NhbmNlbCcsXG4gICAgICAgIG5hbWU6ICdjbG9zZScsXG4gICAgICAgIHRleHQ6ICdDbG9zZScsXG4gICAgICAgIHByaW1hcnk6IHRydWVcbiAgICAgIH1cbiAgICBdXG4gIH0pO1xufTtcblxuZXhwb3J0IHtcbiAgb3BlblxufTtcbiIsImltcG9ydCAqIGFzIFR5cGUgZnJvbSAnLi4vY29yZS9UeXBlJztcbmltcG9ydCAqIGFzIEFycmF5VXRpbCBmcm9tICcuLi9jb3JlL0FycmF5VXRpbCc7XG5cbi8qKiBBIHdheSBvZiBjb21wYXJpbmcgdHdvIHZhbHVlcyBvZiB0aGUgc2FtZSB0eXBlIGZvciBlcXVhbGl0eS4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRXE8QT4ge1xuICBlcTogKHg6IEEsIHk6IEEpID0+IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBjb250cmFtYXAgPSA8QSwgQj4gKGVxYTogRXE8QT4sIGY6IChiOiBCKSA9PiBBKTogRXE8Qj4gPT5cbiAgZXEoKHgsIHkpID0+IGVxYS5lcShmKHgpLCBmKHkpKSk7XG5cbmV4cG9ydCBjb25zdCBlcSA9IDxBPiAoZjogKHg6IEEsIHk6IEEpID0+IGJvb2xlYW4pOiBFcTxBPiA9PlxuICAoeyBlcTogZiB9KTtcblxuZXhwb3J0IGNvbnN0IHRyaXBsZUVxOiBFcTxhbnk+ID0gZXEoKHgsIHkpID0+IHggPT09IHkpO1xuXG5leHBvcnQgY29uc3QgZXFTdHJpbmc6IEVxPHN0cmluZz4gPSB0cmlwbGVFcTtcblxuZXhwb3J0IGNvbnN0IGVxQm9vbGVhbjogRXE8Ym9vbGVhbj4gPSB0cmlwbGVFcTtcblxuZXhwb3J0IGNvbnN0IGVxTnVtYmVyOiBFcTxudW1iZXI+ID0gdHJpcGxlRXE7XG5cbmV4cG9ydCBjb25zdCBlcVVuZGVmaW5lZDogRXE8dW5kZWZpbmVkPiA9IHRyaXBsZUVxO1xuXG5leHBvcnQgY29uc3QgZXFOdWxsOiBFcTxudWxsPiA9IHRyaXBsZUVxO1xuXG5leHBvcnQgY29uc3QgZXFBcnJheSA9IDxBPiAoZXFhOiBFcTxBPik6IEVxPEFycmF5TGlrZTxBPj4gPT4gZXEoKHgsIHkpID0+IHtcbiAgaWYgKHgubGVuZ3RoICE9PSB5Lmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBsZW4gPSB4Lmxlbmd0aDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGlmICghZXFhLmVxKHhbaV0sIHlbaV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufSk7XG5cbi8vIFRPRE86IE1ha2UgYW4gT3JkIHR5cGVjbGFzc1xuY29uc3QgZXFTb3J0ZWRBcnJheSA9IDxBPihlcWE6IEVxPEE+LCBjb21wYXJlRm4/OiAoYTogQSwgYjogQSkgPT4gbnVtYmVyKTogRXE8QXJyYXlMaWtlPEE+PiA9PlxuICBjb250cmFtYXAoZXFBcnJheShlcWEpLCAoeHMpID0+IEFycmF5VXRpbC5zb3J0KHhzLCBjb21wYXJlRm4pKTtcblxuZXhwb3J0IGNvbnN0IGVxUmVjb3JkID0gPEE+IChlcWE6IEVxPEE+KTogRXE8UmVjb3JkPHN0cmluZywgQT4+ID0+IGVxKCh4LCB5KSA9PiB7XG4gIGNvbnN0IGt4ID0gT2JqZWN0LmtleXMoeCk7XG4gIGNvbnN0IGt5ID0gT2JqZWN0LmtleXMoeSk7XG4gIGlmICghZXFTb3J0ZWRBcnJheShlcVN0cmluZykuZXEoa3gsIGt5KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBsZW4gPSBreC5sZW5ndGg7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCBxID0ga3hbaV07XG4gICAgaWYgKCFlcWEuZXEoeFtxXSwgeVtxXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59KTtcblxuZXhwb3J0IGNvbnN0IGVxQW55OiBFcTxhbnk+ID0gZXEoKHgsIHkpID0+IHtcbiAgaWYgKHggPT09IHkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IHR4ID0gVHlwZS50eXBlT2YoeCk7XG4gIGNvbnN0IHR5ID0gVHlwZS50eXBlT2YoeSk7XG4gIGlmICh0eCAhPT0gdHkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoVHlwZS5pc0VxdWF0YWJsZVR5cGUodHgpKSB7XG4gICAgcmV0dXJuIHggPT09IHk7XG5cbiAgfSBlbHNlIGlmICh0eCA9PT0gJ2FycmF5Jykge1xuICAgIHJldHVybiBlcUFycmF5KGVxQW55KS5lcSh4LCB5KTtcblxuICB9IGVsc2UgaWYgKHR4ID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBlcVJlY29yZChlcUFueSkuZXEoeCwgeSk7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59KTtcbiIsImV4cG9ydCBjb25zdCBtYXAgPSA8QSwgQj4oeHM6IEFycmF5TGlrZTxBPiwgZjogKGE6IEEpID0+IEIpOiBCW10gPT4ge1xuICBjb25zdCBsZW4gPSB4cy5sZW5ndGg7XG4gIGNvbnN0IHIgPSBuZXcgQXJyYXkobGVuKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICByW2ldID0gZih4KTtcbiAgfVxuICByZXR1cm4gcjtcbn07XG5cbi8qKiBtYXAgYSBmdW5jdGlvbiBvdmVyIGFuIGFycmF5LCB0aGVuIG1hcCBhbm90aGVyIGZ1bmN0aW9uIG92ZXIgZXZlcnkgaXRlbSBleGNlcHQgdGhlIGxhc3QgKi9cbmV4cG9ydCBjb25zdCBtYXBEZWxpbWl0ID0gPEEsIEI+ICh4czogQXJyYXlMaWtlPEE+LCBmOiAoYTogQSkgPT4gQiwgZGVsaW1pdDogKGI6IEIpID0+IEIpOiBCW10gPT4ge1xuICBjb25zdCBsZW4gPSB4cy5sZW5ndGg7XG4gIGNvbnN0IHIgPSBuZXcgQXJyYXkobGVuKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW4gLSAxOyBpKyspIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgcltpXSA9IGRlbGltaXQoZih4KSk7XG4gIH1cbiAgaWYgKGxlbiA+IDApIHtcbiAgICByW2xlbiAtIDFdID0gKGYoeHNbbGVuIC0gMV0pKTtcbiAgfVxuXG4gIHJldHVybiByO1xufTtcblxuZXhwb3J0IGNvbnN0IHNvcnQgPSA8QT4gKHhzOiBBcnJheUxpa2U8QT4sIGNvbXBhcmVGbj86IChhOiBBLCBiOiBBKSA9PiBudW1iZXIpOiBBW10gPT4ge1xuICBjb25zdCBjbG9uZTogQVtdID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoeHMpO1xuICByZXR1cm4gY2xvbmUuc29ydChjb21wYXJlRm4pO1xufTtcbiIsImV4cG9ydCBjb25zdCB0eXBlT2YgPSAoeDogYW55KSA9PiB7XG4gIGlmICh4ID09PSBudWxsKSB7XG4gICAgcmV0dXJuICdudWxsJztcbiAgfVxuICBpZiAoeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuICd1bmRlZmluZWQnO1xuICB9XG4gIGNvbnN0IHQgPSB0eXBlb2YgeDtcbiAgaWYgKHQgPT09ICdvYmplY3QnICYmIChBcnJheS5wcm90b3R5cGUuaXNQcm90b3R5cGVPZih4KSB8fCB4LmNvbnN0cnVjdG9yICYmIHguY29uc3RydWN0b3IubmFtZSA9PT0gJ0FycmF5JykpIHtcbiAgICByZXR1cm4gJ2FycmF5JztcbiAgfVxuICBpZiAodCA9PT0gJ29iamVjdCcgJiYgKFN0cmluZy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZih4KSB8fCB4LmNvbnN0cnVjdG9yICYmIHguY29uc3RydWN0b3IubmFtZSA9PT0gJ1N0cmluZycpKSB7XG4gICAgcmV0dXJuICdzdHJpbmcnO1xuICB9XG4gIHJldHVybiB0O1xufTtcblxuY29uc3QgaXNUeXBlID0gPFQ+KHR5cGU6IHN0cmluZykgPT4gKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBUID0+IHR5cGVPZih2YWx1ZSkgPT09IHR5cGU7XG5cbmV4cG9ydCBjb25zdCBpc1N0cmluZyA9IGlzVHlwZTxzdHJpbmc+KCdzdHJpbmcnKTtcbmV4cG9ydCBjb25zdCBpc09iamVjdCA9IGlzVHlwZTxPYmplY3Q+KCdvYmplY3QnKTtcbmV4cG9ydCBjb25zdCBpc0FycmF5ID0gaXNUeXBlPEFycmF5PHVua25vd24+PignYXJyYXknKTtcbmV4cG9ydCBjb25zdCBpc051bGwgPSBpc1R5cGU8bnVsbD4oJ251bGwnKTtcbmV4cG9ydCBjb25zdCBpc0Jvb2xlYW4gPSBpc1R5cGU8Ym9vbGVhbj4oJ2Jvb2xlYW4nKTtcbmV4cG9ydCBjb25zdCBpc1VuZGVmaW5lZCA9IGlzVHlwZTx1bmRlZmluZWQ+KCd1bmRlZmluZWQnKTtcbmV4cG9ydCBjb25zdCBpc0Z1bmN0aW9uID0gaXNUeXBlPEZ1bmN0aW9uPignZnVuY3Rpb24nKTtcbmV4cG9ydCBjb25zdCBpc051bWJlciA9IGlzVHlwZTxudW1iZXI+KCdudW1iZXInKTtcblxuZXhwb3J0IGNvbnN0IGlzRXF1YXRhYmxlVHlwZSA9ICh4OiBzdHJpbmcpOiBib29sZWFuID0+XG4gIFsgJ3VuZGVmaW5lZCcsICdib29sZWFuJywgJ251bWJlcicsICdzdHJpbmcnLCAnZnVuY3Rpb24nLCAneG1sJywgJ251bGwnIF0uaW5kZXhPZih4KSAhPT0gLTE7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG4gICAgICAgIGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcbiAgICAgICAgfVxuICAgIH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucnYgPSAoKSA9PiAoXCIxLjUuMlwiKSIsIl9fd2VicGFja19yZXF1aXJlX18ucnVpZCA9IFwiYnVuZGxlcj1yc3BhY2tAMS41LjJcIjtcbiIsImltcG9ydCBQbHVnaW4gZnJvbSAnLi9QbHVnaW4nO1xuXG5QbHVnaW4oKTtcblxuLyoqICoqKioqXG4gKiBETyBOT1QgRVhQT1JUIEFOWVRISU5HXG4gKlxuICogSUYgWU9VIERPIFJPTExVUCBXSUxMIExFQVZFIEEgR0xPQkFMIE9OIFRIRSBQQUdFXG4gKioqKioqKi9cbiJdLCJuYW1lcyI6WyJFcSIsIkZ1biIsIk9wdGlvbmFsIiwiVHlwZSIsIm5hdGl2ZVNsaWNlIiwiQXJyYXkiLCJuYXRpdmVJbmRleE9mIiwibmF0aXZlUHVzaCIsInJhd0luZGV4T2YiLCJ0cyIsInQiLCJpbmRleE9mIiwieHMiLCJ4IiwiciIsImNvbnRhaW5zIiwiZXhpc3RzIiwicHJlZCIsImkiLCJsZW4iLCJyYW5nZSIsIm51bSIsImYiLCJjaHVuayIsImFycmF5Iiwic2l6ZSIsInMiLCJtYXAiLCJlYWNoIiwiZWFjaHIiLCJwYXJ0aXRpb24iLCJwYXNzIiwiZmFpbCIsImFyciIsImZpbHRlciIsImdyb3VwQnkiLCJ3YXNUeXBlIiwiZ3JvdXAiLCJ0eXBlIiwiZm9sZHIiLCJhY2MiLCJmb2xkbCIsImZpbmRVbnRpbCIsInVudGlsIiwiZmluZCIsImZpbmRJbmRleCIsImZpbmRMYXN0SW5kZXgiLCJmbGF0dGVuIiwiRXJyb3IiLCJiaW5kIiwiZm9yYWxsIiwiZXF1YWwiLCJhMSIsImEyIiwiZXEiLCJyZXZlcnNlIiwiZGlmZmVyZW5jZSIsIm1hcFRvT2JqZWN0IiwiU3RyaW5nIiwicHVyZSIsInNvcnQiLCJjb21wYXJhdG9yIiwiY29weSIsImdldCIsImhlYWQiLCJsYXN0IiwiZnJvbSIsImZpbmRNYXAiLCJ1bmlxdWUiLCJpc0R1cGxpY2F0ZWQiLCJub29wIiwibm9hcmciLCJjb21wb3NlIiwiZmEiLCJmYiIsImFyZ3MiLCJjb21wb3NlMSIsImZiYyIsImZhYiIsImEiLCJjb25zdGFudCIsInZhbHVlIiwiaWRlbnRpdHkiLCJ0cmlwbGVFcXVhbHMiLCJiIiwiY3VycnkiLCJmbiIsImluaXRpYWxBcmdzIiwicmVzdEFyZ3MiLCJhbGwiLCJub3QiLCJkaWUiLCJtc2ciLCJhcHBseSIsImNhbGwiLCJuZXZlciIsImFsd2F5cyIsIndlYWtlbiIsInBpcGUiLCJhYiIsImJjIiwiY2QiLCJkZSIsImVmIiwiZmciLCJnaCIsImMiLCJkIiwiZSIsImciLCJ0YWciLCJvbk5vbmUiLCJvblNvbWUiLCJtYXBwZXIiLCJiaW5kZXIiLCJwcmVkaWNhdGUiLCJyZXBsYWNlbWVudCIsInRodW5rIiwibWVzc2FnZSIsIndvcmtlciIsImFkYXB0YWJsZSIsInJhdGUiLCJ0aW1lciIsImNhbmNlbCIsImNsZWFyVGltZW91dCIsInRocm90dGxlIiwibmV3QXJncyIsInNldFRpbWVvdXQiLCJ0ZW1wQXJncyIsImZpcnN0IiwiZ2V0UHJvdG90eXBlT2YiLCJPYmplY3QiLCJoYXNQcm90byIsInYiLCJjb25zdHJ1Y3RvciIsInR5cGVPZiIsIm8iLCJwcm90byIsImlzVHlwZSIsImlzU2ltcGxlVHlwZSIsImlzIiwiaXNPYmplY3QiLCJpc1N0cmluZyIsImlzUGxhaW5PYmplY3QiLCJpc0FycmF5IiwiaXNOdWxsIiwiaXNCb29sZWFuIiwiaXNVbmRlZmluZWQiLCJ1bmRlZmluZWQiLCJpc051bGxhYmxlIiwiaXNOb25OdWxsYWJsZSIsImlzRnVuY3Rpb24iLCJpc051bWJlciIsImlzQXJyYXlPZiIsImlzUHJvbWlzZUxpa2UiLCJ6ZXJvV2lkdGgiLCJuYnNwIiwic29mdEh5cGhlbiIsImVsbGlwc2lzIiwiaXNad3NwIiwiY2hhciIsInJlbW92ZVp3c3AiLCJXb3JkcyIsImdldFdvcmRzIiwiZ2V0V29yZHNXaXRoSW5kaWNlcyIsIkFyciIsIlVuaWNvZGVEYXRhIiwiU0VUUyIsIk9USEVSIiwiZ2V0VHlwZSIsInNldHNMZW5ndGgiLCJqIiwic2V0IiwibWVtb2l6ZSIsImZ1bmMiLCJjYWNoZSIsInJlc3VsdCIsImNsYXNzaWZ5IiwiY2hhcmFjdGVycyIsIm1lbW9pemVkIiwicHVuY3R1YXRpb25TdHIiLCJyZWdFeHBzIiwiY2hhcmFjdGVySW5kaWNlcyIsIlJlZ0V4cCIsIkVNUFRZX1NUUklORyIsIlBVTkNUVUFUSU9OIiwiV0hJVEVTUEFDRSIsImNpIiwiaXNXb3JkQm91bmRhcnkiLCJpbmRleCIsIm5leHRUeXBlIiwibmV4dE5leHRUeXBlIiwicHJldlR5cGUiLCJpc1Byb3RvY29sIiwic3RyIiwiZmluZFdvcmRFbmQiLCJzdGFydEluZGV4IiwiZmluZFVybEVuZCIsImVuZEluZGV4IiwicGVha2VkV29yZCIsImZpbmRXb3Jkc1dpdGhJbmRpY2VzIiwiY2hhcnMiLCJzQ2hhcnMiLCJjaGFyYWN0ZXJNYXAiLCJvcHRpb25zIiwid29yZHMiLCJpbmRpY2VzIiwid29yZCIsImNoIiwic3RhcnRPZldvcmQiLCJlbmRPZldvcmQiLCJlbmRPZlVybCIsInVybCIsImdldERlZmF1bHRPcHRpb25zIiwiZXh0cmFjdCIsImV4dHJhY3RlZENoYXJzIiwiUGx1Z2luTWFuYWdlciIsIkFwaSIsIkNvbW1hbmRzIiwiV29yZGNvdW50ZXIiLCJCdXR0b25zIiwiZGVsYXkiLCJlZGl0b3IiLCJhcGkiLCJjb3VudENoYXJhY3RlcnMiLCJjb3VudENoYXJhY3RlcnNXaXRob3V0U3BhY2VzIiwiY291bnRXb3JkcyIsImNyZWF0ZUJvZHlDb3VudGVyIiwiY291bnQiLCJjcmVhdGVTZWxlY3Rpb25Db3VudGVyIiwiY3JlYXRlQm9keVdvcmRDb3VudGVyIiwiRGlhbG9nIiwicmVnaXN0ZXIiLCJmaXJlV29yZENvdW50VXBkYXRlIiwiZ2V0VGV4dCIsInRleHQiLCJzdHJMZW4iLCJub2RlIiwic2NoZW1hIiwiVW5pY29kZSIsIkRvbVRyZWVXYWxrZXIiLCJibG9ja0VsZW1lbnRzIiwidm9pZEVsZW1lbnRzIiwiaXNOZXdsaW5lIiwidGV4dEJsb2NrcyIsInR4dCIsInRyZWVXYWxrZXIiLCJ0ZW1wTm9kZSIsIlRocm90dGxlciIsIkRlbGF5IiwiRXZlbnRzIiwidXBkYXRlQ291bnQiLCJzZXR1cCIsImRlYm91bmNlZFVwZGF0ZSIsIm9uQWN0aW9uIiwib3BlbiIsIlBsdWdpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLDZEQUFlLE1BQU0sRUFBQztBQUNmOzs7Ozs7Ozs7Ozs7OztBQ0hQOztBQUVBLDZEQUFlLE1BQU0sRUFBQztBQUNmOzs7Ozs7Ozs7Ozs7OztBQ0hQOztBQUVBLDZEQUFlLE1BQU0sRUFBQztBQUNmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNINkI7QUFFUDtBQUNTO0FBQ1A7QUFPL0IsTUFBTUksY0FBY0MsTUFBTSxTQUFTLENBQUMsS0FBSztBQUN6QyxNQUFNQyxnQkFBZ0JELE1BQU0sU0FBUyxDQUFDLE9BQU87QUFDN0MsTUFBTUUsYUFBYUYsTUFBTSxTQUFTLENBQUMsSUFBSTtBQUV2QyxNQUFNRyxhQUFhLENBQUtDLElBQWtCQyxJQUN4Q0osY0FBYyxJQUFJLENBQUNHLElBQUlDO0FBRWxCLE1BQU1DLFVBQVUsQ0FBVUMsSUFBa0JDO0lBQ2pELHdGQUF3RjtJQUN4RixNQUFNQyxJQUFJTixXQUFXSSxJQUFJQztJQUN6QixPQUFPQyxNQUFNLENBQUMsSUFBSVosb0RBQWEsS0FBS0Esb0RBQWEsQ0FBQ1k7QUFDcEQsRUFBRTtBQUVLLE1BQU1DLFdBQVcsQ0FBSUgsSUFBa0JDLElBQWtCTCxXQUFXSSxJ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