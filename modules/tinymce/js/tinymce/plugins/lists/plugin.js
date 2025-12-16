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
"./src/plugins/lists/main/ts/Plugin.ts": 
/*!*********************************************!*\
  !*** ./src/plugins/lists/main/ts/Plugin.ts ***!
  \*********************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var tinymce_core_api_PluginManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/PluginManager */ "./lib/globals/tinymce/core/api/PluginManager.js");
/* ESM import */var _api_Api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/Api */ "./src/plugins/lists/main/ts/api/Api.ts");
/* ESM import */var _api_Commands__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/Commands */ "./src/plugins/lists/main/ts/api/Commands.ts");
/* ESM import */var _ui_Buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/Buttons */ "./src/plugins/lists/main/ts/ui/Buttons.ts");
/* ESM import */var _ui_MenuItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/MenuItems */ "./src/plugins/lists/main/ts/ui/MenuItems.ts");





/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>{
    tinymce_core_api_PluginManager__WEBPACK_IMPORTED_MODULE_0__["default"].add('lists', (editor)=>{
        _api_Commands__WEBPACK_IMPORTED_MODULE_2__.register(editor);
        _ui_Buttons__WEBPACK_IMPORTED_MODULE_3__.register(editor);
        _ui_MenuItems__WEBPACK_IMPORTED_MODULE_4__.register(editor);
        return _api_Api__WEBPACK_IMPORTED_MODULE_1__.get(editor);
    });
});


}),
"./src/plugins/lists/main/ts/api/Api.ts": 
/*!**********************************************!*\
  !*** ./src/plugins/lists/main/ts/api/Api.ts ***!
  \**********************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  get: () => (get)
});
const get = (editor)=>({
        backspaceDelete: (isForward)=>{
            editor.execCommand('mceListBackspaceDelete', false, isForward);
        }
    });



}),
"./src/plugins/lists/main/ts/api/Commands.ts": 
/*!***************************************************!*\
  !*** ./src/plugins/lists/main/ts/api/Commands.ts ***!
  \***************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  register: () => (register)
});
/* ESM import */var _ui_Dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/Dialog */ "./src/plugins/lists/main/ts/ui/Dialog.ts");

const register = (editor)=>{
    editor.addCommand('mceListProps', ()=>{
        _ui_Dialog__WEBPACK_IMPORTED_MODULE_0__.open(editor);
    });
};



}),
"./src/plugins/lists/main/ts/api/Options.ts": 
/*!**************************************************!*\
  !*** ./src/plugins/lists/main/ts/api/Options.ts ***!
  \**************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getForcedRootBlock: () => (getForcedRootBlock)
});
const option = (name)=>(editor)=>editor.options.get(name);
const getForcedRootBlock = option('forced_root_block');



}),
"./src/plugins/lists/main/ts/ui/Buttons.ts": 
/*!*************************************************!*\
  !*** ./src/plugins/lists/main/ts/ui/Buttons.ts ***!
  \*************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  register: () => (register)
});
/* ESM import */var _Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util */ "./src/plugins/lists/main/ts/ui/Util.ts");

const setupToggleButtonHandler = (editor, listName)=>(api)=>{
        const toggleButtonHandler = (e)=>{
            api.setActive(_Util__WEBPACK_IMPORTED_MODULE_0__.inList(e.parents, listName));
            api.setEnabled(!_Util__WEBPACK_IMPORTED_MODULE_0__.isWithinNonEditableList(editor, e.element) && editor.selection.isEditable());
        };
        api.setEnabled(editor.selection.isEditable());
        return _Util__WEBPACK_IMPORTED_MODULE_0__.setNodeChangeHandler(editor, toggleButtonHandler);
    };
const register = (editor)=>{
    const exec = (command)=>()=>editor.execCommand(command);
    if (!editor.hasPlugin('advlist')) {
        editor.ui.registry.addToggleButton('numlist', {
            icon: 'ordered-list',
            active: false,
            tooltip: 'Numbered list',
            onAction: exec('InsertOrderedList'),
            onSetup: setupToggleButtonHandler(editor, 'OL')
        });
        editor.ui.registry.addToggleButton('bullist', {
            icon: 'unordered-list',
            active: false,
            tooltip: 'Bullet list',
            onAction: exec('InsertUnorderedList'),
            onSetup: setupToggleButtonHandler(editor, 'UL')
        });
    }
};



}),
"./src/plugins/lists/main/ts/ui/Dialog.ts": 
/*!************************************************!*\
  !*** ./src/plugins/lists/main/ts/ui/Dialog.ts ***!
  \************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  open: () => (open)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Optional.ts");
/* ESM import */var _ListNumbering__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListNumbering */ "./src/plugins/lists/main/ts/ui/ListNumbering.ts");
/* ESM import */var _Util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Util */ "./src/plugins/lists/main/ts/ui/Util.ts");



const open = (editor)=>{
    // Find the current list and skip opening if the selection isn't in an ordered list
    const currentList = (0,_Util__WEBPACK_IMPORTED_MODULE_1__.getParentList)(editor);
    if (!(0,_Util__WEBPACK_IMPORTED_MODULE_1__.isOlNode)(currentList) || (0,_Util__WEBPACK_IMPORTED_MODULE_1__.isWithinNonEditableList)(editor, currentList)) {
        return;
    }
    editor.windowManager.open({
        title: 'List Properties',
        body: {
            type: 'panel',
            items: [
                {
                    type: 'input',
                    name: 'start',
                    label: 'Start list at number',
                    inputMode: 'numeric'
                }
            ]
        },
        initialData: {
            start: (0,_ListNumbering__WEBPACK_IMPORTED_MODULE_0__.parseDetail)({
                start: editor.dom.getAttrib(currentList, 'start', '1'),
                listStyleType: _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.Optional.from(editor.dom.getStyle(currentList, 'list-style-type'))
            })
        },
        buttons: [
            {
                type: 'cancel',
                name: 'cancel',
                text: 'Cancel'
            },
            {
                type: 'submit',
                name: 'save',
                text: 'Save',
                primary: true
            }
        ],
        onSubmit: (api)=>{
            const data = api.getData();
            (0,_ListNumbering__WEBPACK_IMPORTED_MODULE_0__.parseStartValue)(data.start).each((detail)=>{
                editor.execCommand('mceListUpdate', false, {
                    attrs: {
                        start: detail.start === '1' ? '' : detail.start
                    },
                    styles: {
                        'list-style-type': detail.listStyleType.getOr('')
                    }
                });
            });
            api.close();
        }
    });
};



}),
"./src/plugins/lists/main/ts/ui/ListNumbering.ts": 
/*!*******************************************************!*\
  !*** ./src/plugins/lists/main/ts/ui/ListNumbering.ts ***!
  \*******************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  parseDetail: () => (parseDetail),
  parseStartValue: () => (parseStartValue)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Arr.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Strings.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Optional.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Optionals.ts");

// Example: 'AB' -> 28
const parseAlphabeticBase26 = (str)=>{
    const chars = _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.reverse(_ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.trim(str).split(''));
    const values = _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.map(chars, (char, i)=>{
        const charValue = char.toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0) + 1;
        return Math.pow(26, i) * charValue;
    });
    return _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.foldl(values, (sum, v)=>sum + v, 0);
};
// Example: 28 -> 'AB'
const composeAlphabeticBase26 = (value)=>{
    value--;
    if (value < 0) {
        return '';
    } else {
        const remainder = value % 26;
        const quotient = Math.floor(value / 26);
        const rest = composeAlphabeticBase26(quotient);
        const char = String.fromCharCode('A'.charCodeAt(0) + remainder);
        return rest + char;
    }
};
const isUppercase = (str)=>/^[A-Z]+$/.test(str);
const isLowercase = (str)=>/^[a-z]+$/.test(str);
const isNumeric = (str)=>/^[0-9]+$/.test(str);
const deduceListType = (start)=>{
    if (isNumeric(start)) {
        return 2;
    } else if (isUppercase(start)) {
        return 0;
    } else if (isLowercase(start)) {
        return 1;
    } else if (_ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.isEmpty(start)) {
        return 3;
    } else {
        return 4;
    }
};
const parseStartValue = (start)=>{
    switch(deduceListType(start)){
        case 2:
            return _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.Optional.some({
                listStyleType: _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.Optional.none(),
                start
            });
        case 0:
            return _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.Optional.some({
                listStyleType: _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.Optional.some('upper-alpha'),
                start: parseAlphabeticBase26(start).toString()
            });
        case 1:
            return _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.Optional.some({
                listStyleType: _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.Optional.some('lower-alpha'),
                start: parseAlphabeticBase26(start).toString()
            });
        case 3:
            return _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.Optional.some({
                listStyleType: _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.Optional.none(),
                start: ''
            });
        case 4:
            return _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.Optional.none();
    }
};
const parseDetail = (detail)=>{
    const start = parseInt(detail.start, 10);
    if (_ephox_katamari__WEBPACK_IMPORTED_MODULE_3__.is(detail.listStyleType, 'upper-alpha')) {
        return composeAlphabeticBase26(start);
    } else if (_ephox_katamari__WEBPACK_IMPORTED_MODULE_3__.is(detail.listStyleType, 'lower-alpha')) {
        return composeAlphabeticBase26(start).toLowerCase();
    } else {
        return detail.start;
    }
};



}),
"./src/plugins/lists/main/ts/ui/MenuItems.ts": 
/*!***************************************************!*\
  !*** ./src/plugins/lists/main/ts/ui/MenuItems.ts ***!
  \***************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  register: () => (register)
});
/* ESM import */var _Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util */ "./src/plugins/lists/main/ts/ui/Util.ts");

const setupMenuButtonHandler = (editor, listName)=>(api)=>{
        const menuButtonHandler = (e)=>api.setEnabled(_Util__WEBPACK_IMPORTED_MODULE_0__.inList(e.parents, listName) && !_Util__WEBPACK_IMPORTED_MODULE_0__.isWithinNonEditableList(editor, e.element));
        return _Util__WEBPACK_IMPORTED_MODULE_0__.setNodeChangeHandler(editor, menuButtonHandler);
    };
const register = (editor)=>{
    const listProperties = {
        text: 'List properties...',
        icon: 'ordered-list',
        onAction: ()=>editor.execCommand('mceListProps'),
        onSetup: setupMenuButtonHandler(editor, 'OL')
    };
    editor.ui.registry.addMenuItem('listprops', listProperties);
    editor.ui.registry.addContextMenu('lists', {
        update: (node)=>{
            const parentList = _Util__WEBPACK_IMPORTED_MODULE_0__.getParentList(editor, node);
            return _Util__WEBPACK_IMPORTED_MODULE_0__.isOlNode(parentList) ? [
                'listprops'
            ] : [];
        }
    });
};



}),
"./src/plugins/lists/main/ts/ui/Util.ts": 
/*!**********************************************!*\
  !*** ./src/plugins/lists/main/ts/ui/Util.ts ***!
  \**********************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getParentList: () => (getParentList),
  inList: () => (inList),
  isOlNode: () => (isOlNode),
  isWithinNonEditableList: () => (isWithinNonEditableList),
  setNodeChangeHandler: () => (setNodeChangeHandler)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Type.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Arr.ts");
/* ESM import */var _api_Options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/Options */ "./src/plugins/lists/main/ts/api/Options.ts");


const isCustomList = (list)=>/\btox\-/.test(list.className);
const matchNodeNames = (regex)=>(node)=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.isNonNullable(node) && regex.test(node.nodeName);
const matchNodeName = (name)=>(node)=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_1__.isNonNullable(node) && node.nodeName.toLowerCase() === name;
const isListNode = matchNodeNames(/^(OL|UL|DL)$/);
const isTableCellNode = matchNodeNames(/^(TH|TD)$/);
const isListItemNode = matchNodeNames(/^(LI|DT|DD)$/);
const inList = (parents, listName)=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.findUntil(parents, isListNode, isTableCellNode).exists((list)=>list.nodeName === listName && !isCustomList(list));
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
const isWithinNonEditable = (editor, element)=>element !== null && !editor.dom.isEditable(element);
const isWithinNonEditableList = (editor, element)=>{
    const parentList = editor.dom.getParent(element, 'ol,ul,dl');
    return isWithinNonEditable(editor, parentList) || !editor.selection.isEditable();
};
const isOlNode = matchNodeName('ol');
const listNames = [
    'OL',
    'UL',
    'DL'
];
const listSelector = listNames.join(',');
const getParentList = (editor, node)=>{
    const selectionStart = node || editor.selection.getStart(true);
    return editor.dom.getParent(selectionStart, listSelector, getClosestListHost(editor, selectionStart));
};
const getClosestListHost = (editor, elm)=>{
    const parentBlocks = editor.dom.getParents(elm, editor.dom.isBlock);
    const isNotForcedRootBlock = (elm)=>elm.nodeName.toLowerCase() !== (0,_api_Options__WEBPACK_IMPORTED_MODULE_0__.getForcedRootBlock)(editor);
    const parentBlock = _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.find(parentBlocks, (elm)=>isNotForcedRootBlock(elm) && isListHost(editor.schema, elm));
    return parentBlock.getOr(editor.getBody());
};
const isListHost = (schema, node)=>!isListNode(node) && !isListItemNode(node) && _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.exists(listNames, (listName)=>schema.isValidChild(node.nodeName, listName));



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

/*!*******************************************!*\
  !*** ./src/plugins/lists/main/ts/Main.ts ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _Plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Plugin */ "./src/plugins/lists/main/ts/Plugin.ts");

(0,_Plugin__WEBPACK_IMPORTED_MODULE_0__["default"])(); /** *****
 * DO NOT EXPORT ANYTHING
 *
 * IF YOU DO ROLLUP WILL LEAVE A GLOBAL ON THE PAGE
 *******/ 

})();

})()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdGlueW1jZS9wbHVnaW5zL2xpc3RzL3BsdWdpbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL3RpbnltY2UvLi9saWIvZ2xvYmFscy90aW55bWNlL2NvcmUvYXBpL1BsdWdpbk1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9rYXRhbWFyaS9zcmMvbWFpbi90cy9lcGhveC9rYXRhbWFyaS9hcGkvQXJyLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4va2F0YW1hcmkvc3JjL21haW4vdHMvZXBob3gva2F0YW1hcmkvYXBpL0Z1bi50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL2thdGFtYXJpL3NyYy9tYWluL3RzL2VwaG94L2thdGFtYXJpL2FwaS9PcHRpb25hbC50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL2thdGFtYXJpL3NyYy9tYWluL3RzL2VwaG94L2thdGFtYXJpL2FwaS9PcHRpb25hbHMudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9rYXRhbWFyaS9zcmMvbWFpbi90cy9lcGhveC9rYXRhbWFyaS9hcGkvU3RyaW5ncy50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL2thdGFtYXJpL3NyYy9tYWluL3RzL2VwaG94L2thdGFtYXJpL2FwaS9UeXBlLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4va2F0YW1hcmkvc3JjL21haW4vdHMvZXBob3gva2F0YW1hcmkvc3RyL1N0ckFwcGVuZC50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvbGlzdHMvbWFpbi90cy9QbHVnaW4udHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL2xpc3RzL21haW4vdHMvYXBpL0FwaS50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvbGlzdHMvbWFpbi90cy9hcGkvQ29tbWFuZHMudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL2xpc3RzL21haW4vdHMvYXBpL09wdGlvbnMudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL2xpc3RzL21haW4vdHMvdWkvQnV0dG9ucy50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvbGlzdHMvbWFpbi90cy91aS9EaWFsb2cudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL2xpc3RzL21haW4vdHMvdWkvTGlzdE51bWJlcmluZy50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvbGlzdHMvbWFpbi90cy91aS9NZW51SXRlbXMudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL2xpc3RzL21haW4vdHMvdWkvVXRpbC50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uLy4uL25vZGVfbW9kdWxlcy9AZXBob3gvZGlzcHV0ZS9zcmMvbWFpbi90cy9hcGkvRXEudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi8uLi9ub2RlX21vZHVsZXMvQGVwaG94L2Rpc3B1dGUvc3JjL21haW4vdHMvY29yZS9BcnJheVV0aWwudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi8uLi9ub2RlX21vZHVsZXMvQGVwaG94L2Rpc3B1dGUvc3JjL21haW4vdHMvY29yZS9UeXBlLnRzIiwid2VicGFjazovL3RpbnltY2Uvd2VicGFjay9ydW50aW1lL2RlZmluZV9wcm9wZXJ0eV9nZXR0ZXJzIiwid2VicGFjazovL3RpbnltY2Uvd2VicGFjay9ydW50aW1lL2hhc19vd25fcHJvcGVydHkiLCJ3ZWJwYWNrOi8vdGlueW1jZS93ZWJwYWNrL3J1bnRpbWUvbWFrZV9uYW1lc3BhY2Vfb2JqZWN0Iiwid2VicGFjazovL3RpbnltY2Uvd2VicGFjay9ydW50aW1lL3JzcGFja192ZXJzaW9uIiwid2VicGFjazovL3RpbnltY2Uvd2VicGFjay9ydW50aW1lL3JzcGFja191bmlxdWVfaWQiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL2xpc3RzL21haW4vdHMvTWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZ2xvYmFsID0gdGlueW1jZS51dGlsLlRvb2xzLnJlc29sdmUoJ3RpbnltY2UuUGx1Z2luTWFuYWdlcicpO1xuXG5leHBvcnQgZGVmYXVsdCBnbG9iYWw7XG5leHBvcnQgdmFyIFBsdWdpbk1hbmFnZXIgPSBnbG9iYWw7XG4iLCJpbXBvcnQgeyBFcSB9IGZyb20gJ0BlcGhveC9kaXNwdXRlJztcblxuaW1wb3J0ICogYXMgRnVuIGZyb20gJy4vRnVuJztcbmltcG9ydCB7IE9wdGlvbmFsIH0gZnJvbSAnLi9PcHRpb25hbCc7XG5pbXBvcnQgKiBhcyBUeXBlIGZyb20gJy4vVHlwZSc7XG5cbnR5cGUgQXJyYXlNb3JwaGlzbTxULCBVPiA9ICh4OiBULCBpOiBudW1iZXIpID0+IFU7XG50eXBlIEFycmF5R3VhcmRQcmVkaWNhdGU8VCwgVSBleHRlbmRzIFQ+ID0gKHg6IFQsIGk6IG51bWJlcikgPT4geCBpcyBVO1xudHlwZSBBcnJheVByZWRpY2F0ZTxUPiA9IEFycmF5TW9ycGhpc208VCwgYm9vbGVhbj47XG50eXBlIENvbXBhcmF0b3I8VD4gPSAoYTogVCwgYjogVCkgPT4gbnVtYmVyO1xuXG5jb25zdCBuYXRpdmVTbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcbmNvbnN0IG5hdGl2ZUluZGV4T2YgPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZjtcbmNvbnN0IG5hdGl2ZVB1c2ggPSBBcnJheS5wcm90b3R5cGUucHVzaDtcblxuY29uc3QgcmF3SW5kZXhPZiA9IDxUPiAodHM6IEFycmF5TGlrZTxUPiwgdDogVCk6IG51bWJlciA9PlxuICBuYXRpdmVJbmRleE9mLmNhbGwodHMsIHQpO1xuXG5leHBvcnQgY29uc3QgaW5kZXhPZiA9IDxUID0gYW55Pih4czogQXJyYXlMaWtlPFQ+LCB4OiBUKTogT3B0aW9uYWw8bnVtYmVyPiA9PiB7XG4gIC8vIFRoZSByYXdJbmRleE9mIG1ldGhvZCBkb2VzIG5vdCB3cmFwIHVwIGluIGFuIG9wdGlvbi4gVGhpcyBpcyBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucy5cbiAgY29uc3QgciA9IHJhd0luZGV4T2YoeHMsIHgpO1xuICByZXR1cm4gciA9PT0gLTEgPyBPcHRpb25hbC5ub25lKCkgOiBPcHRpb25hbC5zb21lKHIpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbnRhaW5zID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4sIHg6IFQpOiBib29sZWFuID0+IHJhd0luZGV4T2YoeHMsIHgpID4gLTE7XG5cbmV4cG9ydCBjb25zdCBleGlzdHMgPSA8VCA9IGFueT4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlQcmVkaWNhdGU8VD4pOiBib29sZWFuID0+IHtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHhzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIGlmIChwcmVkKHgsIGkpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQgY29uc3QgcmFuZ2UgPSA8VD4obnVtOiBudW1iZXIsIGY6IChhOiBudW1iZXIpID0+IFQpOiBUW10gPT4ge1xuICBjb25zdCByOiBUW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW07IGkrKykge1xuICAgIHIucHVzaChmKGkpKTtcbiAgfVxuICByZXR1cm4gcjtcbn07XG5cbi8vIEl0J3MgYSB0b3RhbCBtaWNybyBvcHRpbWlzYXRpb24sIGJ1dCB0aGVzZSBkbyBtYWtlIHNvbWUgZGlmZmVyZW5jZS5cbi8vIFBhcnRpY3VsYXJseSBmb3IgYnJvd3NlcnMgb3RoZXIgdGhhbiBDaHJvbWUuXG4vLyAtIGxlbmd0aCBjYWNoaW5nXG4vLyBodHRwOi8vanNwZXJmLmNvbS9icm93c2VyLWRpZXQtanF1ZXJ5LWVhY2gtdnMtZm9yLWxvb3AvNjlcbi8vIC0gbm90IHVzaW5nIHB1c2hcbi8vIGh0dHA6Ly9qc3BlcmYuY29tL2FycmF5LWRpcmVjdC1hc3NpZ25tZW50LXZzLXB1c2gvMlxuXG5leHBvcnQgY29uc3QgY2h1bmsgPSA8VD4oYXJyYXk6IEFycmF5TGlrZTxUPiwgc2l6ZTogbnVtYmVyKTogVFtdW10gPT4ge1xuICBjb25zdCByOiBUW11bXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSArPSBzaXplKSB7XG4gICAgY29uc3QgczogVFtdID0gbmF0aXZlU2xpY2UuY2FsbChhcnJheSwgaSwgaSArIHNpemUpO1xuICAgIHIucHVzaChzKTtcbiAgfVxuICByZXR1cm4gcjtcbn07XG5cbmV4cG9ydCBjb25zdCBtYXAgPSA8VCA9IGFueSwgVSA9IGFueT4oeHM6IEFycmF5TGlrZTxUPiwgZjogQXJyYXlNb3JwaGlzbTxULCBVPik6IFVbXSA9PiB7XG4gIC8vIHByZS1hbGxvY2F0aW5nIGFycmF5IHNpemUgd2hlbiBpdCdzIGd1YXJhbnRlZWQgdG8gYmUga25vd25cbiAgLy8gaHR0cDovL2pzcGVyZi5jb20vcHVzaC1hbGxvY2F0ZWQtdnMtZHluYW1pYy8yMlxuICBjb25zdCBsZW4gPSB4cy5sZW5ndGg7XG4gIGNvbnN0IHIgPSBuZXcgQXJyYXkobGVuKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICByW2ldID0gZih4LCBpKTtcbiAgfVxuICByZXR1cm4gcjtcbn07XG5cbi8vIFVud291bmQgaW1wbGVtZW50aW5nIG90aGVyIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBlYWNoLlxuLy8gVGhlIGNvZGUgc2l6ZSBpcyByb3VnaGx5IHRoZSBzYW1lLCBhbmQgaXQgc2hvdWxkIGFsbG93IGZvciBiZXR0ZXIgb3B0aW1pc2F0aW9uLlxuLy8gY29uc3QgZWFjaCA9IGZ1bmN0aW9uPFQsIFU+KHhzOiBUW10sIGY6ICh4OiBULCBpPzogbnVtYmVyLCB4cz86IFRbXSkgPT4gdm9pZCk6IHZvaWQge1xuZXhwb3J0IGNvbnN0IGVhY2ggPSA8VCA9IGFueT4oeHM6IEFycmF5TGlrZTxUPiwgZjogQXJyYXlNb3JwaGlzbTxULCB2b2lkPik6IHZvaWQgPT4ge1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0geHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgZih4LCBpKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGVhY2hyID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4sIGY6IEFycmF5TW9ycGhpc208VCwgdm9pZD4pOiB2b2lkID0+IHtcbiAgZm9yIChsZXQgaSA9IHhzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIGYoeCwgaSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBwYXJ0aXRpb24gPSA8VCA9IGFueT4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlQcmVkaWNhdGU8VD4pOiB7IHBhc3M6IFRbXTsgZmFpbDogVFtdIH0gPT4ge1xuICBjb25zdCBwYXNzOiBUW10gPSBbXTtcbiAgY29uc3QgZmFpbDogVFtdID0gW107XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICBjb25zdCBhcnIgPSBwcmVkKHgsIGkpID8gcGFzcyA6IGZhaWw7XG4gICAgYXJyLnB1c2goeCk7XG4gIH1cbiAgcmV0dXJuIHsgcGFzcywgZmFpbCB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbHRlcjoge1xuICA8VCwgVSBleHRlbmRzIFQ+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5R3VhcmRQcmVkaWNhdGU8VCwgVT4pOiBVW107XG4gIDxUPih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheVByZWRpY2F0ZTxUPik6IFRbXTtcbn0gPSA8VD4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlQcmVkaWNhdGU8VD4pOiBUW10gPT4ge1xuICBjb25zdCByOiBUW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHhzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIGlmIChwcmVkKHgsIGkpKSB7XG4gICAgICByLnB1c2goeCk7XG4gICAgfVxuICB9XG4gIHJldHVybiByO1xufTtcblxuLypcbiAqIEdyb3VwcyBhbiBhcnJheSBpbnRvIGNvbnRpZ3VvdXMgYXJyYXlzIG9mIGxpa2UgZWxlbWVudHMuIFdoZXRoZXIgYW4gZWxlbWVudCBpcyBsaWtlIG9yIG5vdCBkZXBlbmRzIG9uIGYuXG4gKlxuICogZiBpcyBhIGZ1bmN0aW9uIHRoYXQgZGVyaXZlcyBhIHZhbHVlIGZyb20gYW4gZWxlbWVudCAtIGUuZy4gdHJ1ZSBvciBmYWxzZSwgb3IgYSBzdHJpbmcuXG4gKiBFbGVtZW50cyBhcmUgbGlrZSBpZiB0aGlzIGZ1bmN0aW9uIGdlbmVyYXRlcyB0aGUgc2FtZSB2YWx1ZSBmb3IgdGhlbSAoYWNjb3JkaW5nIHRvID09PSkuXG4gKlxuICpcbiAqIE9yZGVyIG9mIHRoZSBlbGVtZW50cyBpcyBwcmVzZXJ2ZWQuIEFyci5mbGF0dGVuKCkgb24gdGhlIHJlc3VsdCB3aWxsIHJldHVybiB0aGUgb3JpZ2luYWwgbGlzdCwgYXMgd2l0aCBIYXNrZWxsIGdyb3VwQnkgZnVuY3Rpb24uXG4gKiAgRm9yIGEgZ29vZCBleHBsYW5hdGlvbiwgc2VlIHRoZSBncm91cCBmdW5jdGlvbiAod2hpY2ggaXMgYSBzcGVjaWFsIGNhc2Ugb2YgZ3JvdXBCeSlcbiAqICBodHRwOi8vaGFja2FnZS5oYXNrZWxsLm9yZy9wYWNrYWdlL2Jhc2UtNC43LjAuMC9kb2NzL0RhdGEtTGlzdC5odG1sI3Y6Z3JvdXBcbiAqL1xuZXhwb3J0IGNvbnN0IGdyb3VwQnkgPSA8VD4oeHM6IEFycmF5TGlrZTxUPiwgZjogKGE6IFQpID0+IGFueSk6IFRbXVtdID0+IHtcbiAgaWYgKHhzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBbXTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgd2FzVHlwZSA9IGYoeHNbMF0pOyAvLyBpbml0aWFsIGNhc2UgZm9yIG1hdGNoaW5nXG4gICAgY29uc3QgcjogVFtdW10gPSBbXTtcbiAgICBsZXQgZ3JvdXA6IFRbXSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHhzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0geHNbaV07XG4gICAgICBjb25zdCB0eXBlID0gZih4KTtcbiAgICAgIGlmICh0eXBlICE9PSB3YXNUeXBlKSB7XG4gICAgICAgIHIucHVzaChncm91cCk7XG4gICAgICAgIGdyb3VwID0gW107XG4gICAgICB9XG4gICAgICB3YXNUeXBlID0gdHlwZTtcbiAgICAgIGdyb3VwLnB1c2goeCk7XG4gICAgfVxuICAgIGlmIChncm91cC5sZW5ndGggIT09IDApIHtcbiAgICAgIHIucHVzaChncm91cCk7XG4gICAgfVxuICAgIHJldHVybiByO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZm9sZHIgPSA8VCwgVT4oeHM6IEFycmF5TGlrZTxUPiwgZjogKGFjYzogVSwgeDogVCwgaTogbnVtYmVyKSA9PiBVLCBhY2M6IFUpOiBVID0+IHtcbiAgZWFjaHIoeHMsICh4LCBpKSA9PiB7XG4gICAgYWNjID0gZihhY2MsIHgsIGkpO1xuICB9KTtcbiAgcmV0dXJuIGFjYztcbn07XG5cbmV4cG9ydCBjb25zdCBmb2xkbCA9IDxUID0gYW55LCBVID0gYW55Pih4czogQXJyYXlMaWtlPFQ+LCBmOiAoYWNjOiBVLCB4OiBULCBpOiBudW1iZXIpID0+IFUsIGFjYzogVSk6IFUgPT4ge1xuICBlYWNoKHhzLCAoeCwgaSkgPT4ge1xuICAgIGFjYyA9IGYoYWNjLCB4LCBpKTtcbiAgfSk7XG4gIHJldHVybiBhY2M7XG59O1xuXG5leHBvcnQgY29uc3QgZmluZFVudGlsOiB7XG4gIDxULCBVIGV4dGVuZHMgVD4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlHdWFyZFByZWRpY2F0ZTxULCBVPiwgdW50aWw6IEFycmF5UHJlZGljYXRlPFQ+KTogT3B0aW9uYWw8VT47XG4gIDxUID0gYW55Pih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheVByZWRpY2F0ZTxUPiwgdW50aWw6IEFycmF5UHJlZGljYXRlPFQ+KTogT3B0aW9uYWw8VD47XG59ID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+LCB1bnRpbDogQXJyYXlQcmVkaWNhdGU8VD4pOiBPcHRpb25hbDxUPiA9PiB7XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICBpZiAocHJlZCh4LCBpKSkge1xuICAgICAgcmV0dXJuIE9wdGlvbmFsLnNvbWUoeCk7XG4gICAgfSBlbHNlIGlmICh1bnRpbCh4LCBpKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBPcHRpb25hbC5ub25lKCk7XG59O1xuXG5leHBvcnQgY29uc3QgZmluZDoge1xuICA8VCwgVSBleHRlbmRzIFQ+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5R3VhcmRQcmVkaWNhdGU8VCwgVT4pOiBPcHRpb25hbDxVPjtcbiAgPFQgPSBhbnk+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+KTogT3B0aW9uYWw8VD47XG59ID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+KTogT3B0aW9uYWw8VD4gPT4ge1xuICByZXR1cm4gZmluZFVudGlsKHhzLCBwcmVkLCBGdW4ubmV2ZXIpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmRJbmRleCA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheVByZWRpY2F0ZTxUPik6IE9wdGlvbmFsPG51bWJlcj4gPT4ge1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0geHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgaWYgKHByZWQoeCwgaSkpIHtcbiAgICAgIHJldHVybiBPcHRpb25hbC5zb21lKGkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBPcHRpb25hbC5ub25lKCk7XG59O1xuXG5leHBvcnQgY29uc3QgZmluZExhc3RJbmRleCA9IDxUPihhcnI6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlQcmVkaWNhdGU8VD4pOiBPcHRpb25hbDxudW1iZXI+ID0+IHtcbiAgZm9yIChsZXQgaSA9IGFyci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGlmIChwcmVkKGFycltpXSwgaSkpIHtcbiAgICAgIHJldHVybiBPcHRpb25hbC5zb21lKGkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBPcHRpb25hbC5ub25lKCk7XG59O1xuXG5leHBvcnQgY29uc3QgZmxhdHRlbiA9IDxUPih4czogQXJyYXlMaWtlPFRbXT4pOiBUW10gPT4ge1xuICAvLyBOb3RlLCB0aGlzIGlzIHBvc3NpYmxlIGJlY2F1c2UgcHVzaCBzdXBwb3J0cyBtdWx0aXBsZSBhcmd1bWVudHM6XG4gIC8vIGh0dHA6Ly9qc3BlcmYuY29tL2NvbmNhdC1wdXNoLzZcbiAgLy8gTm90ZSB0aGF0IGluIHRoZSBwYXN0LCBjb25jYXQoKSB3b3VsZCBzaWxlbnRseSB3b3JrICh2ZXJ5IHNsb3dseSkgZm9yIGFycmF5LWxpa2Ugb2JqZWN0cy5cbiAgLy8gV2l0aCB0aGlzIGNoYW5nZSBpdCB3aWxsIHRocm93IGFuIGVycm9yLlxuICBjb25zdCByOiBUW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHhzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgLy8gRW5zdXJlIHRoYXQgZWFjaCB2YWx1ZSBpcyBhbiBhcnJheSBpdHNlbGZcbiAgICBpZiAoIVR5cGUuaXNBcnJheSh4c1tpXSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQXJyLmZsYXR0ZW4gaXRlbSAnICsgaSArICcgd2FzIG5vdCBhbiBhcnJheSwgaW5wdXQ6ICcgKyB4cyk7XG4gICAgfVxuICAgIG5hdGl2ZVB1c2guYXBwbHkociwgeHNbaV0pO1xuICB9XG4gIHJldHVybiByO1xufTtcblxuZXhwb3J0IGNvbnN0IGJpbmQgPSA8VCA9IGFueSwgVSA9IGFueT4oeHM6IEFycmF5TGlrZTxUPiwgZjogQXJyYXlNb3JwaGlzbTxULCBVW10+KTogVVtdID0+XG4gIGZsYXR0ZW4obWFwKHhzLCBmKSk7XG5cbmV4cG9ydCBjb25zdCBmb3JhbGwgPSA8VD4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlQcmVkaWNhdGU8VD4pOiBib29sZWFuID0+IHtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHhzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIGlmIChwcmVkKHgsIGkpICE9PSB0cnVlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxuZXhwb3J0IGNvbnN0IGVxdWFsID0gPFQ+KGExOiBBcnJheUxpa2U8VD4sIGEyOiBBcnJheUxpa2U8VD4sIGVxOiBFcS5FcTxUPiA9IEVxLmVxQW55KTogYm9vbGVhbiA9PlxuICBFcS5lcUFycmF5KGVxKS5lcShhMSwgYTIpO1xuXG5leHBvcnQgY29uc3QgcmV2ZXJzZSA9IDxUPih4czogQXJyYXlMaWtlPFQ+KTogVFtdID0+IHtcbiAgY29uc3QgcjogVFtdID0gbmF0aXZlU2xpY2UuY2FsbCh4cywgMCk7XG4gIHIucmV2ZXJzZSgpO1xuICByZXR1cm4gcjtcbn07XG5cbmV4cG9ydCBjb25zdCBkaWZmZXJlbmNlID0gPFQ+KGExOiBBcnJheUxpa2U8VD4sIGEyOiBBcnJheUxpa2U8VD4pOiBUW10gPT4gZmlsdGVyKGExLCAoeCkgPT4gIWNvbnRhaW5zKGEyLCB4KSk7XG5cbmV4cG9ydCBjb25zdCBtYXBUb09iamVjdDoge1xuICA8VCBleHRlbmRzIHN0cmluZywgVT4oeHM6IEFycmF5TGlrZTxUPiwgZjogKHg6IFQsIGk6IG51bWJlcikgPT4gVSk6IFJlY29yZDxULCBVPjtcbiAgPFQsIFIgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+Pih4czogQXJyYXlMaWtlPFQ+LCBmOiAoeDogVCwgaTogbnVtYmVyKSA9PiBSW2tleW9mIFJdKTogUjtcbn0gPSA8VCwgUiBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4+KHhzOiBBcnJheUxpa2U8VD4sIGY6ICh4OiBULCBpOiBudW1iZXIpID0+IFJba2V5b2YgUl0pOiBSID0+IHtcbiAgY29uc3QgciA9IHt9IGFzIFI7XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICByW1N0cmluZyh4KSBhcyBrZXlvZiBSXSA9IGYoeCwgaSk7XG4gIH1cbiAgcmV0dXJuIHI7XG59O1xuXG5leHBvcnQgY29uc3QgcHVyZSA9IDxUPih4OiBUKTogVFtdID0+IFsgeCBdO1xuXG5leHBvcnQgY29uc3Qgc29ydCA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCBjb21wYXJhdG9yPzogQ29tcGFyYXRvcjxUPik6IFRbXSA9PiB7XG4gIGNvbnN0IGNvcHk6IFRbXSA9IG5hdGl2ZVNsaWNlLmNhbGwoeHMsIDApO1xuICBjb3B5LnNvcnQoY29tcGFyYXRvcik7XG4gIHJldHVybiBjb3B5O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldCA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCBpOiBudW1iZXIpOiBPcHRpb25hbDxUPiA9PiBpID49IDAgJiYgaSA8IHhzLmxlbmd0aCA/IE9wdGlvbmFsLnNvbWUoeHNbaV0pIDogT3B0aW9uYWwubm9uZSgpO1xuXG5leHBvcnQgY29uc3QgaGVhZCA9IDxUPih4czogQXJyYXlMaWtlPFQ+KTogT3B0aW9uYWw8VD4gPT4gZ2V0KHhzLCAwKTtcblxuZXhwb3J0IGNvbnN0IGxhc3QgPSA8VD4oeHM6IEFycmF5TGlrZTxUPik6IE9wdGlvbmFsPFQ+ID0+IGdldCh4cywgeHMubGVuZ3RoIC0gMSk7XG5cbmV4cG9ydCBjb25zdCBmcm9tOiA8VD4oeDogQXJyYXlMaWtlPFQ+KSA9PiBUW10gPSBUeXBlLmlzRnVuY3Rpb24oQXJyYXkuZnJvbSkgPyBBcnJheS5mcm9tIDogKHgpID0+IG5hdGl2ZVNsaWNlLmNhbGwoeCk7XG5cbmV4cG9ydCBjb25zdCBmaW5kTWFwID0gPEEsIEI+KGFycjogQXJyYXlMaWtlPEE+LCBmOiAoYTogQSwgaW5kZXg6IG51bWJlcikgPT4gT3B0aW9uYWw8Qj4pOiBPcHRpb25hbDxCPiA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgciA9IGYoYXJyW2ldLCBpKTtcbiAgICBpZiAoci5pc1NvbWUoKSkge1xuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuICB9XG4gIHJldHVybiBPcHRpb25hbC5ub25lPEI+KCk7XG59O1xuXG5leHBvcnQgY29uc3QgdW5pcXVlID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4sIGNvbXBhcmF0b3I/OiAoYTogVCwgYjogVCkgPT4gYm9vbGVhbik6IFRbXSA9PiB7XG4gIGNvbnN0IHI6IFRbXSA9IFtdO1xuXG4gIGNvbnN0IGlzRHVwbGljYXRlZCA9IFR5cGUuaXNGdW5jdGlvbihjb21wYXJhdG9yKSA/XG4gICAgKHg6IFQpID0+IGV4aXN0cyhyLCAoaSkgPT4gY29tcGFyYXRvcihpLCB4KSkgOlxuICAgICh4OiBUKSA9PiBjb250YWlucyhyLCB4KTtcblxuICBmb3IgKGxldCBpID0gMCwgbGVuID0geHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgaWYgKCFpc0R1cGxpY2F0ZWQoeCkpIHtcbiAgICAgIHIucHVzaCh4KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcjtcbn07XG4iLCJpbXBvcnQgKiBhcyBUeXBlIGZyb20gJy4vVHlwZSc7XG5cbmNvbnN0IG5vb3A6ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZFxuPSAoKSA9PiB7IH07XG5cbmNvbnN0IG5vYXJnOiA8VD4oZjogKCkgPT4gVCkgPT4gKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkXG49IChmKSA9PiAoKSA9PiBmKCk7XG5cbi8qKiBDb21wb3NlIGEgdW5hcnkgZnVuY3Rpb24gd2l0aCBhbiBuLWFyeSBmdW5jdGlvbiAqL1xuY29uc3QgY29tcG9zZSA9IDxUIGV4dGVuZHMgYW55W10sIFUsIFY+KGZhOiAodjogVSkgPT4gViwgZmI6ICguLi54OiBUKSA9PiBVKTogKC4uLng6IFQpID0+IFYgPT4ge1xuICByZXR1cm4gKC4uLmFyZ3M6IFQpID0+IHtcbiAgICByZXR1cm4gZmEoZmIuYXBwbHkobnVsbCwgYXJncykpO1xuICB9O1xufTtcblxuLyoqIENvbXBvc2UgdHdvIHVuYXJ5IGZ1bmN0aW9ucy4gU2ltaWxhciB0byBjb21wb3NlLCBidXQgYXZvaWRzIHVzaW5nIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS4gKi9cbmNvbnN0IGNvbXBvc2UxID0gPEEsIEIsIEM+IChmYmM6IChiOiBCKSA9PiBDLCBmYWI6IChhOiBBKSA9PiBCKSA9PiAoYTogQSk6IEMgPT5cbiAgZmJjKGZhYihhKSk7XG5cbmNvbnN0IGNvbnN0YW50ID0gPFQ+KHZhbHVlOiBUKTogKCkgPT4gVCA9PiB7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xufTtcblxuY29uc3QgaWRlbnRpdHkgPSA8VCA9IGFueT4oeDogVCk6IFQgPT4ge1xuICByZXR1cm4geDtcbn07XG5cbmNvbnN0IHRyaXBsZUVxdWFscyA9IDxUPihhOiBULCBiOiBUKTogYm9vbGVhbiA9PiB7XG4gIHJldHVybiBhID09PSBiO1xufTtcblxuZnVuY3Rpb24gY3VycnkgPFJFU1QgZXh0ZW5kcyBhbnlbXSwgT1VUPihmbjogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQpOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVDtcbmZ1bmN0aW9uIGN1cnJ5IDxBLCBSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46IChhOiBBLCAuLi5yZXN0QXJnczogUkVTVCkgPT4gT1VULCBhOiBBKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8QSwgQiwgUkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoYTogQSwgYjogQiwgLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCwgYTogQSwgYjogQik6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPEEsIEIsIEMsIFJFU1QgZXh0ZW5kcyBhbnlbXSwgT1VUPihmbjogKGE6IEEsIGI6IEIsIGM6IEMsIC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQsIGE6IEEsIGI6IEIsIGM6IEMpOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVDtcbmZ1bmN0aW9uIGN1cnJ5IDxBLCBCLCBDLCBELCBSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46IChhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCAuLi5yZXN0QXJnczogUkVTVCkgPT4gT1VULCBhOiBBLCBiOiBCLCBjOiBDLCBkOiBEKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8QSwgQiwgQywgRCwgRSwgUkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCwgYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSk6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPEEsIEIsIEMsIEQsIEUsIEYsIFJFU1QgZXh0ZW5kcyBhbnlbXSwgT1VUPihmbjogKGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIGY6IEYsIC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQsIGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIGY6IEYpOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVDtcbmZ1bmN0aW9uIGN1cnJ5IDxBLCBCLCBDLCBELCBFLCBGLCBHLCBSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46IChhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCBmOiBGLCBnOiBHLCAuLi5yZXN0QXJnczogUkVTVCkgPT4gT1VULCBhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCBmOiBGLCBnOiBHKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8QSwgQiwgQywgRCwgRSwgRiwgRywgSCwgUkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgZjogRiwgZzogRywgaDogSCwgLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCwgYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgZjogRiwgZzogRywgaDogSCk6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPEEsIEIsIEMsIEQsIEUsIEYsIEcsIEgsIEksIFJFU1QgZXh0ZW5kcyBhbnlbXSwgT1VUPihmbjogKGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIGY6IEYsIGc6IEcsIGg6IEgsIGk6IEksIC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQsIGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIGY6IEYsIGc6IEcsIGg6IEgsIGk6IEkpOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVDtcbmZ1bmN0aW9uIGN1cnJ5IDxBLCBCLCBDLCBELCBFLCBGLCBHLCBILCBJLCBKLCBSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46IChhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCBmOiBGLCBnOiBHLCBoOiBILCBpOiBJLCBqOiBKLCAuLi5yZXN0QXJnczogUkVTVCkgPT4gT1VULCBhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCBmOiBGLCBnOiBHLCBoOiBILCBpOiBJLCBqOiBKKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8T1VUPihmbjogKC4uLmFsbEFyZ3M6IGFueVtdKSA9PiBPVVQsIC4uLmluaXRpYWxBcmdzOiBhbnlbXSk6ICguLi5yZXN0QXJnczogYW55W10pID0+IE9VVCB7XG4gIHJldHVybiAoLi4ucmVzdEFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3QgYWxsID0gaW5pdGlhbEFyZ3MuY29uY2F0KHJlc3RBcmdzKTtcbiAgICByZXR1cm4gZm4uYXBwbHkobnVsbCwgYWxsKTtcbiAgfTtcbn1cblxuY29uc3Qgbm90ID0gPFQ+KGY6ICh0OiBUKSA9PiBib29sZWFuKSA9PiAodDogVCk6IGJvb2xlYW4gPT5cbiAgIWYodCk7XG5cbmNvbnN0IGRpZSA9IChtc2c6IHN0cmluZykgPT4ge1xuICByZXR1cm4gKCk6IG5ldmVyID0+IHtcbiAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcbiAgfTtcbn07XG5cbmNvbnN0IGFwcGx5ID0gPFQ+KGY6ICgpID0+IFQpOiBUID0+IHtcbiAgcmV0dXJuIGYoKTtcbn07XG5cbmNvbnN0IGNhbGwgPSAoZjogKCkgPT4gYW55KTogdm9pZCA9PiB7XG4gIGYoKTtcbn07XG5cbmNvbnN0IG5ldmVyOiAoLi4uYXJnczogYW55W10pID0+IGZhbHNlID0gY29uc3RhbnQ8ZmFsc2U+KGZhbHNlKTtcbmNvbnN0IGFsd2F5czogKC4uLmFyZ3M6IGFueVtdKSA9PiB0cnVlID0gY29uc3RhbnQ8dHJ1ZT4odHJ1ZSk7XG5cbi8qIFVzZWQgdG8gd2Vha2VuIHR5cGVzICovXG5jb25zdCB3ZWFrZW4gPSA8QSwgQiBleHRlbmRzIEE+KGI6IEIpOiBBID0+IGI7XG5cbnR5cGUgRnVuPFgsIFk+ID0gKHg6IFgpID0+IFk7XG5jb25zdCBwaXBlOiB7XG4gIDxBLCBCPihhOiBBLCBhYjogRnVuPEEsIEI+KTogQjtcbiAgPEEsIEIsIEM+KGE6IEEsIGFiOiBGdW48QSwgQj4sIGJjOiBGdW48QiwgQz4pOiBDO1xuICA8QSwgQiwgQywgRD4oYTogQSwgYWI6IEZ1bjxBLCBCPiwgYmM6IEZ1bjxCLCBDPiwgY2Q6IEZ1bjxDLCBEPik6IEQ7XG4gIDxBLCBCLCBDLCBELCBFPihhOiBBLCBhYjogRnVuPEEsIEI+LCBiYzogRnVuPEIsIEM+LCBjZDogRnVuPEMsIEQ+LCBkZTogRnVuPEQsIEU+KTogRTtcbiAgPEEsIEIsIEMsIEQsIEUsIEY+KGE6IEEsIGFiOiBGdW48QSwgQj4sIGJjOiBGdW48QiwgQz4sIGNkOiBGdW48QywgRD4sIGRlOiBGdW48RCwgRT4sIGVmOiBGdW48RSwgRj4pOiBGO1xuICA8QSwgQiwgQywgRCwgRSwgRiwgRz4oYTogQSwgYWI6IEZ1bjxBLCBCPiwgYmM6IEZ1bjxCLCBDPiwgY2Q6IEZ1bjxDLCBEPiwgZGU6IEZ1bjxELCBFPiwgZWY6IEZ1bjxFLCBGPiwgZmc6IEZ1bjxGLCBHPik6IEc7XG4gIDxBLCBCLCBDLCBELCBFLCBGLCBHLCBIPihhOiBBLCBhYjogRnVuPEEsIEI+LCBiYzogRnVuPEIsIEM+LCBjZDogRnVuPEMsIEQ+LCBkZTogRnVuPEQsIEU+LCBlZjogRnVuPEUsIEY+LCBmZzogRnVuPEYsIEc+LCBnaDogRnVuPEcsIEg+KTogSDtcbn0gPVxuICA8QSwgQiwgQywgRCwgRSwgRiwgRywgSD4oYTogQSwgYWI6IEZ1bjxBLCBCPiwgYmM/OiBGdW48QiwgQz4sIGNkPzogRnVuPEMsIEQ+LCBkZT86IEZ1bjxELCBFPiwgZWY/OiBGdW48RSwgRj4sIGZnPzogRnVuPEYsIEc+LCBnaD86IEZ1bjxHLCBIPik6IEIgfCBDIHwgRCB8IEUgfCBGIHwgRyB8IEggPT4ge1xuICAgIGNvbnN0IGIgPSBhYihhKTtcbiAgICBpZiAoVHlwZS5pc051bGxhYmxlKGJjKSkge1xuICAgICAgcmV0dXJuIGI7XG4gICAgfVxuXG4gICAgY29uc3QgYyA9IGJjKGIpO1xuICAgIGlmIChUeXBlLmlzTnVsbGFibGUoY2QpKSB7XG4gICAgICByZXR1cm4gYztcbiAgICB9XG5cbiAgICBjb25zdCBkID0gY2QoYyk7XG4gICAgaWYgKFR5cGUuaXNOdWxsYWJsZShkZSkpIHtcbiAgICAgIHJldHVybiBkO1xuICAgIH1cblxuICAgIGNvbnN0IGUgPSBkZShkKTtcbiAgICBpZiAoVHlwZS5pc051bGxhYmxlKGVmKSkge1xuICAgICAgcmV0dXJuIGU7XG4gICAgfVxuXG4gICAgY29uc3QgZiA9IGVmKGUpO1xuICAgIGlmIChUeXBlLmlzTnVsbGFibGUoZmcpKSB7XG4gICAgICByZXR1cm4gZjtcbiAgICB9XG5cbiAgICBjb25zdCBnID0gZmcoZik7XG4gICAgaWYgKFR5cGUuaXNOdWxsYWJsZShnaCkpIHtcbiAgICAgIHJldHVybiBnO1xuICAgIH1cblxuICAgIHJldHVybiBnaChnKTtcbiAgfTtcblxuZXhwb3J0IHtcbiAgbm9vcCxcbiAgbm9hcmcsXG4gIGNvbXBvc2UsXG4gIGNvbXBvc2UxLFxuICBjb25zdGFudCxcbiAgaWRlbnRpdHksXG4gIHRyaXBsZUVxdWFscyxcbiAgY3VycnksXG4gIG5vdCxcbiAgZGllLFxuICBhcHBseSxcbiAgY2FsbCxcbiAgbmV2ZXIsXG4gIGFsd2F5cyxcbiAgd2Vha2VuLFxuICBwaXBlXG59O1xuIiwiaW1wb3J0ICogYXMgVHlwZSBmcm9tICcuL1R5cGUnO1xuXG4vKipcbiAqIFRoZSBgT3B0aW9uYWxgIHR5cGUgcmVwcmVzZW50cyBhIHZhbHVlIChvZiBhbnkgdHlwZSkgdGhhdCBwb3RlbnRpYWxseSBkb2VzXG4gKiBub3QgZXhpc3QuIEFueSBgT3B0aW9uYWw8VD5gIGNhbiBlaXRoZXIgYmUgYSBgU29tZTxUPmAgKGluIHdoaWNoIGNhc2UgdGhlXG4gKiB2YWx1ZSBkb2VzIGV4aXN0KSBvciBhIGBOb25lYCAoaW4gd2hpY2ggY2FzZSB0aGUgdmFsdWUgZG9lcyBub3QgZXhpc3QpLiBUaGlzXG4gKiBtb2R1bGUgZGVmaW5lcyBhIHdob2xlIGxvdCBvZiBGUC1pbnNwaXJlZCB1dGlsaXR5IGZ1bmN0aW9ucyBmb3IgZGVhbGluZyB3aXRoXG4gKiBgT3B0aW9uYWxgIG9iamVjdHMuXG4gKlxuICogQ29tcGFyaXNvbiB3aXRoIG51bGwgb3IgdW5kZWZpbmVkOlxuICogLSBXZSBkb24ndCBnZXQgZmFuY3kgbnVsbCBjb2FsZXNjaW5nIG9wZXJhdG9ycyB3aXRoIGBPcHRpb25hbGBcbiAqIC0gV2UgZG8gZ2V0IGZhbmN5IGhlbHBlciBmdW5jdGlvbnMgd2l0aCBgT3B0aW9uYWxgXG4gKiAtIGBPcHRpb25hbGAgc3VwcG9ydCBuZXN0aW5nLCBhbmQgYWxsb3cgZm9yIHRoZSB0eXBlIHRvIHN0aWxsIGJlIG51bGxhYmxlIChvclxuICogYW5vdGhlciBgT3B0aW9uYWxgKVxuICogLSBUaGVyZSBpcyBubyBvcHRpb24gdG8gdHVybiBvZmYgc3RyaWN0LW9wdGlvbmFsLWNoZWNrcyBsaWtlIHRoZXJlIGlzIGZvclxuICogc3RyaWN0LW51bGwtY2hlY2tzXG4gKi9cbmV4cG9ydCBjbGFzcyBPcHRpb25hbDxUPiB7XG4gIHByaXZhdGUgcmVhZG9ubHkgdGFnOiBib29sZWFuO1xuICBwcml2YXRlIHJlYWRvbmx5IHZhbHVlPzogVDtcblxuICAvLyBTbmVha3kgb3B0aW1pc2F0aW9uOiBldmVyeSBpbnN0YW5jZSBvZiBPcHRpb25hbC5ub25lIGlzIGlkZW50aWNhbCwgc28ganVzdFxuICAvLyByZXVzZSB0aGUgc2FtZSBvYmplY3RcbiAgcHJpdmF0ZSBzdGF0aWMgc2luZ2xldG9uTm9uZSA9IG5ldyBPcHRpb25hbDxhbnk+KGZhbHNlKTtcblxuICAvLyBUaGUgaW50ZXJuYWwgcmVwcmVzZW50YXRpb24gaGFzIGEgYHRhZ2AgYW5kIGEgYHZhbHVlYCwgYnV0IGJvdGggYXJlXG4gIC8vIHByaXZhdGU6IGFibGUgdG8gYmUgY29uc29sZS5sb2dnZWQsIGJ1dCBub3QgYWJsZSB0byBiZSBhY2Nlc3NlZCBieSBjb2RlXG4gIHByaXZhdGUgY29uc3RydWN0b3IodGFnOiBib29sZWFuLCB2YWx1ZT86IFQpIHtcbiAgICB0aGlzLnRhZyA9IHRhZztcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICAvLyAtLS0gSWRlbnRpdGllcyAtLS1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBgT3B0aW9uYWw8VD5gIHRoYXQgKipkb2VzKiogY29udGFpbiBhIHZhbHVlLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBzb21lPFQ+KHRoaXM6IHZvaWQsIHZhbHVlOiBUKTogT3B0aW9uYWw8VD4ge1xuICAgIHJldHVybiBuZXcgT3B0aW9uYWwodHJ1ZSwgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBgT3B0aW9uYWw8VD5gIHRoYXQgKipkb2VzIG5vdCoqIGNvbnRhaW4gYSB2YWx1ZS4gYFRgIGNhbiBiZVxuICAgKiBhbnkgdHlwZSBiZWNhdXNlIHdlIGRvbid0IGFjdHVhbGx5IGhhdmUgYSBgVGAuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIG5vbmU8VCA9IG5ldmVyPih0aGlzOiB2b2lkKTogT3B0aW9uYWw8VD4ge1xuICAgIHJldHVybiBPcHRpb25hbC5zaW5nbGV0b25Ob25lO1xuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm0gYSB0cmFuc2Zvcm0gb24gYW4gYE9wdGlvbmFsYCB0eXBlLiBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpc1xuICAgKiBgT3B0aW9uYWxgIGNvbnRhaW5zIGEgdmFsdWUgb3Igbm90LCBgZm9sZGAgd2lsbCByZXR1cm4gYSB2YWx1ZSBvZiB0eXBlIGBVYC5cbiAgICogSWYgdGhpcyBgT3B0aW9uYWxgIGRvZXMgbm90IGNvbnRhaW4gYSB2YWx1ZSwgdGhlIGBVYCB3aWxsIGJlIGNyZWF0ZWQgYnlcbiAgICogY2FsbGluZyBgb25Ob25lYC4gSWYgdGhpcyBgT3B0aW9uYWxgIGRvZXMgY29udGFpbiBhIHZhbHVlLCB0aGUgYFVgIHdpbGwgYmVcbiAgICogY3JlYXRlZCBieSBjYWxsaW5nIGBvblNvbWVgLlxuICAgKlxuICAgKiBGb3IgdGhlIEZQIGVudGh1c2lhc3RzIGluIHRoZSByb29tLCB0aGlzIGZ1bmN0aW9uOlxuICAgKiAxLiBDb3VsZCBiZSB1c2VkIHRvIGltcGxlbWVudCBhbGwgb2YgdGhlIGZ1bmN0aW9ucyBiZWxvd1xuICAgKiAyLiBGb3JtcyBhIGNhdGFtb3JwaGlzbVxuICAgKi9cbiAgcHVibGljIGZvbGQ8VT4ob25Ob25lOiAoKSA9PiBVLCBvblNvbWU6ICh2YWx1ZTogVCkgPT4gVSk6IFUge1xuICAgIGlmICh0aGlzLnRhZykge1xuICAgICAgcmV0dXJuIG9uU29tZSh0aGlzLnZhbHVlIGFzIFQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb25Ob25lKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBpZiB0aGlzIGBPcHRpb25hbGAgb2JqZWN0IGNvbnRhaW5zIGEgdmFsdWUuXG4gICAqL1xuICBwdWJsaWMgaXNTb21lKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnRhZztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgdGhpcyBgT3B0aW9uYWxgIG9iamVjdCAqKmRvZXMgbm90KiogY29udGFpbiBhIHZhbHVlLlxuICAgKi9cbiAgcHVibGljIGlzTm9uZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMudGFnO1xuICB9XG5cbiAgLy8gLS0tIEZ1bmN0b3IgKG5hbWUgc3RvbGVuIGZyb20gSGFza2VsbCAvIG1hdGhzKSAtLS1cblxuICAvKipcbiAgICogUGVyZm9ybSBhIHRyYW5zZm9ybSBvbiBhbiBgT3B0aW9uYWxgIG9iamVjdCwgKippZioqIHRoZXJlIGlzIGEgdmFsdWUuIElmXG4gICAqIHlvdSBwcm92aWRlIGEgZnVuY3Rpb24gdG8gdHVybiBhIFQgaW50byBhIFUsIHRoaXMgaXMgdGhlIGZ1bmN0aW9uIHlvdSB1c2VcbiAgICogdG8gdHVybiBhbiBgT3B0aW9uYWw8VD5gIGludG8gYW4gYE9wdGlvbmFsPFU+YC4gSWYgdGhpcyAqKmRvZXMqKiBjb250YWluXG4gICAqIGEgdmFsdWUgdGhlbiB0aGUgb3V0cHV0IHdpbGwgYWxzbyBjb250YWluIGEgdmFsdWUgKHRoYXQgdmFsdWUgYmVpbmcgdGhlXG4gICAqIG91dHB1dCBvZiBgbWFwcGVyKHRoaXMudmFsdWUpYCksIGFuZCBpZiB0aGlzICoqZG9lcyBub3QqKiBjb250YWluIGEgdmFsdWVcbiAgICogdGhlbiBuZWl0aGVyIHdpbGwgdGhlIG91dHB1dC5cbiAgICovXG4gIHB1YmxpYyBtYXA8VT4obWFwcGVyOiAodmFsdWU6IFQpID0+IFUpOiBPcHRpb25hbDxVPiB7XG4gICAgaWYgKHRoaXMudGFnKSB7XG4gICAgICByZXR1cm4gT3B0aW9uYWwuc29tZShtYXBwZXIodGhpcy52YWx1ZSBhcyBUKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBPcHRpb25hbC5ub25lKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tIE1vbmFkIChuYW1lIHN0b2xlbiBmcm9tIEhhc2tlbGwgLyBtYXRocykgLS0tXG5cbiAgLyoqXG4gICAqIFBlcmZvcm0gYSB0cmFuc2Zvcm0gb24gYW4gYE9wdGlvbmFsYCBvYmplY3QsICoqaWYqKiB0aGVyZSBpcyBhIHZhbHVlLlxuICAgKiBVbmxpa2UgYG1hcGAsIGhlcmUgdGhlIHRyYW5zZm9ybSBpdHNlbGYgYWxzbyByZXR1cm5zIGFuIGBPcHRpb25hbGAuXG4gICAqL1xuICBwdWJsaWMgYmluZDxVPihiaW5kZXI6ICh2YWx1ZTogVCkgPT4gT3B0aW9uYWw8VT4pOiBPcHRpb25hbDxVPiB7XG4gICAgaWYgKHRoaXMudGFnKSB7XG4gICAgICByZXR1cm4gYmluZGVyKHRoaXMudmFsdWUgYXMgVCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBPcHRpb25hbC5ub25lKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tIFRyYXZlcnNhYmxlIChuYW1lIHN0b2xlbiBmcm9tIEhhc2tlbGwgLyBtYXRocykgLS0tXG5cbiAgLyoqXG4gICAqIEZvciBhIGdpdmVuIHByZWRpY2F0ZSwgdGhpcyBmdW5jdGlvbiBmaW5kcyBvdXQgaWYgdGhlcmUgKipleGlzdHMqKiBhIHZhbHVlXG4gICAqIGluc2lkZSB0aGlzIGBPcHRpb25hbGAgb2JqZWN0IHRoYXQgbWVldHMgdGhlIHByZWRpY2F0ZS4gSW4gcHJhY3RpY2UsIHRoaXNcbiAgICogbWVhbnMgdGhhdCBmb3IgYE9wdGlvbmFsYHMgdGhhdCBkbyBub3QgY29udGFpbiBhIHZhbHVlIGl0IHJldHVybnMgZmFsc2UgKGFzXG4gICAqIG5vIHByZWRpY2F0ZS1tZWV0aW5nIHZhbHVlIGV4aXN0cykuXG4gICAqL1xuICBwdWJsaWMgZXhpc3RzKHByZWRpY2F0ZTogKHZhbHVlOiBUKSA9PiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudGFnICYmIHByZWRpY2F0ZSh0aGlzLnZhbHVlIGFzIFQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvciBhIGdpdmVuIHByZWRpY2F0ZSwgdGhpcyBmdW5jdGlvbiBmaW5kcyBvdXQgaWYgKiphbGwqKiB0aGUgdmFsdWVzIGluc2lkZVxuICAgKiB0aGlzIGBPcHRpb25hbGAgb2JqZWN0IG1lZXQgdGhlIHByZWRpY2F0ZS4gSW4gcHJhY3RpY2UsIHRoaXMgbWVhbnMgdGhhdFxuICAgKiBmb3IgYE9wdGlvbmFsYHMgdGhhdCBkbyBub3QgY29udGFpbiBhIHZhbHVlIGl0IHJldHVybnMgdHJ1ZSAoYXMgYWxsIDBcbiAgICogb2JqZWN0cyBkbyBtZWV0IHRoZSBwcmVkaWNhdGUpLlxuICAgKi9cbiAgcHVibGljIGZvcmFsbChwcmVkaWNhdGU6ICh2YWx1ZTogVCkgPT4gYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy50YWcgfHwgcHJlZGljYXRlKHRoaXMudmFsdWUgYXMgVCk7XG4gIH1cblxuICAvKipcbiAgICogRm9yIGEgZ2l2ZW4gcHJlZGljYXRlLCBjcmVhdGUgYSBuZXcgYE9wdGlvbmFsYCBvYmplY3QgdGhhdCB3aWxsIHJldGFpblxuICAgKiBhbGwgdGhlIHZhbHVlcyBpbnNpZGUgdGhlIG9sZCBgT3B0aW9uYWxgIG9iamVjdCB0aGF0IG1lZXQgdGhlIHByZWRpY2F0ZS5cbiAgICogSW4gcHJhY3RpY2UsIHRoZSBgT3B0aW9uYWxgIG9iamVjdCBjb250YWlucyBlaXRoZXIgMCBvciAxIG9iamVjdHMsIGFuZFxuICAgKiB0aGUgb3V0cHV0IHdpbGwga2VlcCB0aGUgKHNpbmdsZSkgaW5wdXQgb2JqZWN0IChpZiBpdCBleGlzdHMpIGFzIGxvbmcgYXNcbiAgICogaXQgcGFzc2VzIHRoZSBwcmVkaWNhdGUuXG4gICAqL1xuICBwdWJsaWMgZmlsdGVyPFUgZXh0ZW5kcyBUPihwcmVkaWNhdGU6ICh2YWx1ZTogVCkgPT4gdmFsdWUgaXMgVSk6IE9wdGlvbmFsPFU+O1xuICBwdWJsaWMgZmlsdGVyKHByZWRpY2F0ZTogKHZhbHVlOiBUKSA9PiBib29sZWFuKTogT3B0aW9uYWw8VD47XG4gIHB1YmxpYyBmaWx0ZXIocHJlZGljYXRlOiAodmFsdWU6IFQpID0+IGJvb2xlYW4pOiBPcHRpb25hbDxUPiB7XG4gICAgaWYgKCF0aGlzLnRhZyB8fCBwcmVkaWNhdGUodGhpcy52YWx1ZSBhcyBUKSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBPcHRpb25hbC5ub25lKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tIEdldHRlcnMgLS0tXG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdmFsdWUgb3V0IG9mIHRoZSBpbnNpZGUgb2YgdGhlIGBPcHRpb25hbGAgb2JqZWN0LCB1c2luZyBhIGRlZmF1bHRcbiAgICogYHJlcGxhY2VtZW50YCB2YWx1ZSBpZiB0aGUgcHJvdmlkZWQgYE9wdGlvbmFsYCBvYmplY3QgZG9lcyBub3QgY29udGFpbiBhXG4gICAqIHZhbHVlLlxuICAgKi9cbiAgcHVibGljIGdldE9yPFUgPSBUPihyZXBsYWNlbWVudDogVSk6IFQgfCBVIHtcbiAgICByZXR1cm4gdGhpcy50YWcgPyB0aGlzLnZhbHVlIGFzIFQgOiByZXBsYWNlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHZhbHVlIG91dCBvZiB0aGUgaW5zaWRlIG9mIHRoZSBgT3B0aW9uYWxgIG9iamVjdCwgdXNpbmcgYSBkZWZhdWx0XG4gICAqIGByZXBsYWNlbWVudGAgdmFsdWUgaWYgdGhlIHByb3ZpZGVkIGBPcHRpb25hbGAgb2JqZWN0IGRvZXMgbm90IGNvbnRhaW4gYVxuICAgKiB2YWx1ZS4gIFVubGlrZSBgZ2V0T3JgLCBpbiB0aGlzIG1ldGhvZCB0aGUgYHJlcGxhY2VtZW50YCBvYmplY3QgaXMgYWxzb1xuICAgKiBgT3B0aW9uYWxgIC0gbWVhbmluZyB0aGF0IHRoaXMgbWV0aG9kIHdpbGwgYWx3YXlzIHJldHVybiBhbiBgT3B0aW9uYWxgLlxuICAgKi9cbiAgcHVibGljIG9yPFUgPSBUPihyZXBsYWNlbWVudDogT3B0aW9uYWw8VT4pOiBPcHRpb25hbDxUIHwgVT4ge1xuICAgIHJldHVybiB0aGlzLnRhZyA/IHRoaXMgOiByZXBsYWNlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHZhbHVlIG91dCBvZiB0aGUgaW5zaWRlIG9mIHRoZSBgT3B0aW9uYWxgIG9iamVjdCwgdXNpbmcgYSBkZWZhdWx0XG4gICAqIGByZXBsYWNlbWVudGAgdmFsdWUgaWYgdGhlIHByb3ZpZGVkIGBPcHRpb25hbGAgb2JqZWN0IGRvZXMgbm90IGNvbnRhaW4gYVxuICAgKiB2YWx1ZS4gVW5saWtlIGBnZXRPcmAsIGluIHRoaXMgbWV0aG9kIHRoZSBgcmVwbGFjZW1lbnRgIHZhbHVlIGlzXG4gICAqIFwidGh1bmtlZFwiIC0gdGhhdCBpcyB0byBzYXkgdGhhdCB5b3UgZG9uJ3QgcGFzcyBhIHZhbHVlIHRvIGBnZXRPclRodW5rYCwgeW91XG4gICAqIHBhc3MgYSBmdW5jdGlvbiB3aGljaCAoaWYgY2FsbGVkKSB3aWxsICoqcmV0dXJuKiogdGhlIGB2YWx1ZWAgeW91IHdhbnQgdG9cbiAgICogdXNlLlxuICAgKi9cbiAgcHVibGljIGdldE9yVGh1bms8VSA9IFQ+KHRodW5rOiAoKSA9PiBVKTogVCB8IFUge1xuICAgIHJldHVybiB0aGlzLnRhZyA/IHRoaXMudmFsdWUgYXMgVCA6IHRodW5rKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB2YWx1ZSBvdXQgb2YgdGhlIGluc2lkZSBvZiB0aGUgYE9wdGlvbmFsYCBvYmplY3QsIHVzaW5nIGEgZGVmYXVsdFxuICAgKiBgcmVwbGFjZW1lbnRgIHZhbHVlIGlmIHRoZSBwcm92aWRlZCBPcHRpb25hbCBvYmplY3QgZG9lcyBub3QgY29udGFpbiBhXG4gICAqIHZhbHVlLlxuICAgKlxuICAgKiBVbmxpa2UgYG9yYCwgaW4gdGhpcyBtZXRob2QgdGhlIGByZXBsYWNlbWVudGAgdmFsdWUgaXMgXCJ0aHVua2VkXCIgLSB0aGF0IGlzXG4gICAqIHRvIHNheSB0aGF0IHlvdSBkb24ndCBwYXNzIGEgdmFsdWUgdG8gYG9yVGh1bmtgLCB5b3UgcGFzcyBhIGZ1bmN0aW9uIHdoaWNoXG4gICAqIChpZiBjYWxsZWQpIHdpbGwgKipyZXR1cm4qKiB0aGUgYHZhbHVlYCB5b3Ugd2FudCB0byB1c2UuXG4gICAqXG4gICAqIFVubGlrZSBgZ2V0T3JUaHVua2AsIGluIHRoaXMgbWV0aG9kIHRoZSBgcmVwbGFjZW1lbnRgIHZhbHVlIGlzIGFsc29cbiAgICogYE9wdGlvbmFsYCwgbWVhbmluZyB0aGF0IHRoaXMgbWV0aG9kIHdpbGwgYWx3YXlzIHJldHVybiBhbiBgT3B0aW9uYWxgLlxuICAgKi9cbiAgcHVibGljIG9yVGh1bms8VSA9IFQ+KHRodW5rOiAoKSA9PiBPcHRpb25hbDxVPik6IE9wdGlvbmFsPFQgfCBVPiB7XG4gICAgcmV0dXJuIHRoaXMudGFnID8gdGhpcyA6IHRodW5rKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB2YWx1ZSBvdXQgb2YgdGhlIGluc2lkZSBvZiB0aGUgYE9wdGlvbmFsYCBvYmplY3QsIHRocm93aW5nIGFuXG4gICAqIGV4Y2VwdGlvbiBpZiB0aGUgcHJvdmlkZWQgYE9wdGlvbmFsYCBvYmplY3QgZG9lcyBub3QgY29udGFpbiBhIHZhbHVlLlxuICAgKlxuICAgKiBXQVJOSU5HOlxuICAgKiBZb3Ugc2hvdWxkIG9ubHkgYmUgdXNpbmcgdGhpcyBmdW5jdGlvbiBpZiB5b3Uga25vdyB0aGF0IHRoZSBgT3B0aW9uYWxgXG4gICAqIG9iamVjdCAqKmlzIG5vdCoqIGVtcHR5IChvdGhlcndpc2UgeW91J3JlIHRocm93aW5nIGV4Y2VwdGlvbnMgaW4gcHJvZHVjdGlvblxuICAgKiBjb2RlLCB3aGljaCBpcyBiYWQpLlxuICAgKlxuICAgKiBJbiB0ZXN0cyB0aGlzIGlzIG1vcmUgYWNjZXB0YWJsZS5cbiAgICpcbiAgICogUHJlZmVyIG90aGVyIG1ldGhvZHMgdG8gdGhpcywgc3VjaCBhcyBgLmVhY2hgLlxuICAgKi9cbiAgcHVibGljIGdldE9yRGllKG1lc3NhZ2U/OiBzdHJpbmcpOiBUIHtcbiAgICBpZiAoIXRoaXMudGFnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSA/PyAnQ2FsbGVkIGdldE9yRGllIG9uIE5vbmUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWUgYXMgVDtcbiAgICB9XG4gIH1cblxuICAvLyAtLS0gSW50ZXJvcCB3aXRoIG51bGwgYW5kIHVuZGVmaW5lZCAtLS1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBgT3B0aW9uYWxgIHZhbHVlIGZyb20gYSBudWxsYWJsZSAob3IgdW5kZWZpbmVkLWFibGUpIGlucHV0LlxuICAgKiBOdWxsLCBvciB1bmRlZmluZWQsIGlzIGNvbnZlcnRlZCB0byBgTm9uZWAsIGFuZCBhbnl0aGluZyBlbHNlIGlzIGNvbnZlcnRlZFxuICAgKiB0byBgU29tZWAuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGZyb208VD4odGhpczogdm9pZCwgdmFsdWU6IFQgfCBudWxsIHwgdW5kZWZpbmVkKTogT3B0aW9uYWw8Tm9uTnVsbGFibGU8VD4+IHtcbiAgICByZXR1cm4gVHlwZS5pc05vbk51bGxhYmxlKHZhbHVlKSA/IE9wdGlvbmFsLnNvbWUodmFsdWUpIDogT3B0aW9uYWwubm9uZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGFuIGBPcHRpb25hbGAgdG8gYSBudWxsYWJsZSB0eXBlLCBieSBnZXR0aW5nIHRoZSB2YWx1ZSBpZiBpdFxuICAgKiBleGlzdHMsIG9yIHJldHVybmluZyBgbnVsbGAgaWYgaXQgZG9lcyBub3QuXG4gICAqL1xuICBwdWJsaWMgZ2V0T3JOdWxsKCk6IFQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy50YWcgPyB0aGlzLnZhbHVlIGFzIFQgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGFuIGBPcHRpb25hbGAgdG8gYW4gdW5kZWZpbmVkLWFibGUgdHlwZSwgYnkgZ2V0dGluZyB0aGUgdmFsdWUgaWZcbiAgICogaXQgZXhpc3RzLCBvciByZXR1cm5pbmcgYHVuZGVmaW5lZGAgaWYgaXQgZG9lcyBub3QuXG4gICAqL1xuICBwdWJsaWMgZ2V0T3JVbmRlZmluZWQoKTogVCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cblxuICAvLyAtLS0gVXRpbGl0aWVzIC0tLVxuXG4gIC8qKlxuICAgKiBJZiB0aGUgYE9wdGlvbmFsYCBjb250YWlucyBhIHZhbHVlLCBwZXJmb3JtIGFuIGFjdGlvbiBvbiB0aGF0IHZhbHVlLlxuICAgKiBVbmxpa2UgdGhlIHJlc3Qgb2YgdGhlIG1ldGhvZHMgb24gdGhpcyB0eXBlLCBgLmVhY2hgIGhhcyBzaWRlLWVmZmVjdHMuIElmXG4gICAqIHlvdSB3YW50IHRvIHRyYW5zZm9ybSBhbiBgT3B0aW9uYWw8VD5gICoqaW50byoqIHNvbWV0aGluZywgdGhlbiB0aGlzIGlzIG5vdFxuICAgKiB0aGUgbWV0aG9kIGZvciB5b3UuIElmIHlvdSB3YW50IHRvIHVzZSBhbiBgT3B0aW9uYWw8VD5gIHRvICoqZG8qKlxuICAgKiBzb21ldGhpbmcsIHRoZW4gdGhpcyBpcyB0aGUgbWV0aG9kIGZvciB5b3UgLSBwcm92aWRlZCB5b3UncmUgb2theSB3aXRoIG5vdFxuICAgKiBkb2luZyBhbnl0aGluZyBpbiB0aGUgY2FzZSB3aGVyZSB0aGUgYE9wdGlvbmFsYCBkb2Vzbid0IGhhdmUgYSB2YWx1ZSBpbnNpZGVcbiAgICogaXQuIElmIHlvdSdyZSBub3Qgc3VyZSB3aGV0aGVyIHlvdXIgdXNlLWNhc2UgZml0cyBpbnRvIHRyYW5zZm9ybWluZ1xuICAgKiAqKmludG8qKiBzb21ldGhpbmcgb3IgKipkb2luZyoqIHNvbWV0aGluZywgY2hlY2sgd2hldGhlciBpdCBoYXMgYSByZXR1cm5cbiAgICogdmFsdWUuIElmIGl0IGRvZXMsIHlvdSBzaG91bGQgYmUgcGVyZm9ybWluZyBhIHRyYW5zZm9ybS5cbiAgICovXG4gIHB1YmxpYyBlYWNoKHdvcmtlcjogKHZhbHVlOiBUKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudGFnKSB7XG4gICAgICB3b3JrZXIodGhpcy52YWx1ZSBhcyBUKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVHVybiB0aGUgYE9wdGlvbmFsYCBvYmplY3QgaW50byBhbiBhcnJheSB0aGF0IGNvbnRhaW5zIGFsbCBvZiB0aGUgdmFsdWVzXG4gICAqIHN0b3JlZCBpbnNpZGUgdGhlIGBPcHRpb25hbGAuIEluIHByYWN0aWNlLCB0aGlzIG1lYW5zIHRoZSBvdXRwdXQgd2lsbCBoYXZlXG4gICAqIGVpdGhlciAwIG9yIDEgZWxlbWVudHMuXG4gICAqL1xuICBwdWJsaWMgdG9BcnJheSgpOiBUW10ge1xuICAgIHJldHVybiB0aGlzLnRhZyA/IFsgdGhpcy52YWx1ZSBhcyBUIF0gOiBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUdXJuIHRoZSBgT3B0aW9uYWxgIG9iamVjdCBpbnRvIGEgc3RyaW5nIGZvciBkZWJ1Z2dpbmcgb3IgcHJpbnRpbmcuIE5vdFxuICAgKiByZWNvbW1lbmRlZCBmb3IgcHJvZHVjdGlvbiBjb2RlLCBidXQgZ29vZCBmb3IgZGVidWdnaW5nLiBBbHNvIG5vdGUgdGhhdFxuICAgKiB0aGVzZSBkYXlzIGFuIGBPcHRpb25hbGAgb2JqZWN0IGNhbiBiZSBsb2dnZWQgdG8gdGhlIGNvbnNvbGUgZGlyZWN0bHksIGFuZFxuICAgKiBpdHMgaW5uZXIgdmFsdWUgKGlmIGl0IGV4aXN0cykgd2lsbCBiZSB2aXNpYmxlLlxuICAgKi9cbiAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudGFnID8gYHNvbWUoJHt0aGlzLnZhbHVlfSlgIDogJ25vbmUoKSc7XG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIEFyciBmcm9tICcuL0Fycic7XG5pbXBvcnQgKiBhcyBGdW4gZnJvbSAnLi9GdW4nO1xuaW1wb3J0IHsgT3B0aW9uYWwgfSBmcm9tICcuL09wdGlvbmFsJztcblxuLyoqXG4gKiAqKklzKiogdGhlIHZhbHVlIHN0b3JlZCBpbnNpZGUgdGhpcyBPcHRpb25hbCBvYmplY3QgZXF1YWwgdG8gYHJoc2A/XG4gKi9cbmV4cG9ydCBjb25zdCBpcyA9IDxUPihsaHM6IE9wdGlvbmFsPFQ+LCByaHM6IFQsIGNvbXBhcmF0b3I6IChhOiBULCBiOiBUKSA9PiBib29sZWFuID0gRnVuLnRyaXBsZUVxdWFscyk6IGJvb2xlYW4gPT5cbiAgbGhzLmV4aXN0cygobGVmdCkgPT4gY29tcGFyYXRvcihsZWZ0LCByaHMpKTtcblxuLyoqXG4gKiBBcmUgdGhlc2UgdHdvIE9wdGlvbmFsIG9iamVjdHMgZXF1YWw/IEVxdWFsaXR5IGhlcmUgbWVhbnMgZWl0aGVyIHRoZXkncmUgYm90aFxuICogYFNvbWVgIChhbmQgdGhlIHZhbHVlcyBhcmUgZXF1YWwgdW5kZXIgdGhlIGNvbXBhcmF0b3IpIG9yIHRoZXkncmUgYm90aCBgTm9uZWAuXG4gKi9cbmV4cG9ydCBjb25zdCBlcXVhbHM6IHtcbiAgPEEsIEI+KGxoczogT3B0aW9uYWw8QT4sIHJoczogT3B0aW9uYWw8Qj4sIGNvbXBhcmF0b3I6IChhOiBBLCBiOiBCKSA9PiBib29sZWFuKTogYm9vbGVhbjtcbiAgPFQ+KGxoczogT3B0aW9uYWw8VD4sIHJoczogT3B0aW9uYWw8VD4pOiBib29sZWFuO1xufSA9IDxBLCBCPihsaHM6IE9wdGlvbmFsPEE+LCByaHM6IE9wdGlvbmFsPEI+LCBjb21wYXJhdG9yOiAoYTogQSwgYjogQikgPT4gYm9vbGVhbiA9IEZ1bi50cmlwbGVFcXVhbHMgYXMgYW55KTogYm9vbGVhbiA9PlxuICBsaWZ0MihsaHMsIHJocywgY29tcGFyYXRvcikuZ2V0T3IobGhzLmlzTm9uZSgpICYmIHJocy5pc05vbmUoKSk7XG5cbmV4cG9ydCBjb25zdCBjYXQgPSA8QT4oYXJyOiBPcHRpb25hbDxBPltdKTogQVtdID0+IHtcbiAgY29uc3QgcjogQVtdID0gW107XG4gIGNvbnN0IHB1c2ggPSAoeDogQSkgPT4ge1xuICAgIHIucHVzaCh4KTtcbiAgfTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICBhcnJbaV0uZWFjaChwdXNoKTtcbiAgfVxuICByZXR1cm4gcjtcbn07XG5cbmV4cG9ydCBjb25zdCBzZXF1ZW5jZSA9IDxBPiAoYXJyOiBBcnJheUxpa2U8T3B0aW9uYWw8QT4+KTogT3B0aW9uYWw8QXJyYXk8QT4+ID0+IHtcbiAgY29uc3QgcjogQVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgeCA9IGFycltpXTtcbiAgICBpZiAoeC5pc1NvbWUoKSkge1xuICAgICAgci5wdXNoKHguZ2V0T3JEaWUoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBPcHRpb25hbC5ub25lPEFycmF5PEE+PigpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gT3B0aW9uYWwuc29tZShyKTtcbn07XG5cbi8qKiBAZGVwcmVjYXRlZCBVc2UgQXJyLmZpbmRNYXAgaW5zdGVhZC4gKi9cbmV4cG9ydCBjb25zdCBmaW5kTWFwID0gQXJyLmZpbmRNYXA7XG5cbi8qKiBNYXAgZWFjaCBlbGVtZW50IG9mIGFuIGFycmF5IHRvIGFuIE9wdGlvbmFsIGFuZCBjb2xsZWN0IHRoZSByZXN1bHRzLlxuICogIElmIGFsbCByZXN1bHRzIGFyZSBcInNvbWVcIiwgcmV0dXJuIE9wdGlvbmFsLnNvbWUgb2YgdGhlIHJlc3VsdHMuXG4gKiAgSWYgYW55IHJlc3VsdCBpcyBcIm5vbmVcIiwgcmV0dXJuIE9wdGlvbmFsLm5vbmVcbiAqL1xuZXhwb3J0IGNvbnN0IHRyYXZlcnNlID0gPEEsIEI+IChhcnI6IEFycmF5TGlrZTxBPiwgZjogKGE6IEEpID0+IE9wdGlvbmFsPEI+KTogT3B0aW9uYWw8QXJyYXk8Qj4+ID0+XG4gIHNlcXVlbmNlKEFyci5tYXAoYXJyLCBmKSk7XG5cbi8qXG5Ob3RlcyBvbiB0aGUgbGlmdCBmdW5jdGlvbnM6XG4tIFdlIHVzZWQgdG8gaGF2ZSBhIGdlbmVyaWMgbGlmdE4sIGJ1dCB3ZSB3ZXJlIGNvbmNlcm5lZCBhYm91dCBpdHMgdHlwZS1zYWZldHksIGFuZCB0aGUgYmVsb3cgdmFyaWFudHMgd2VyZSBmYXN0ZXIgaW4gbWljcm9iZW5jaG1hcmtzLlxuLSBUaGUgZ2V0T3JEaWUgY2FsbHMgYXJlIHBhcnRpYWwgZnVuY3Rpb25zLCBidXQgYXJlIGNoZWNrZWQgYmVmb3JlaGFuZC4gVGhpcyBpcyBmYXN0ZXIgYW5kIG1vcmUgY29udmVuaWVudCAoYnV0IGxlc3Mgc2FmZSkgdGhhbiBmb2xkcy5cbi0gJiYgaXMgdXNlZCBpbnN0ZWFkIG9mIGEgbG9vcCBmb3Igc2ltcGxpY2l0eSBhbmQgcGVyZm9ybWFuY2UuXG4qL1xuXG5leHBvcnQgY29uc3QgbGlmdDIgPSA8QSwgQiwgQz4gKG9hOiBPcHRpb25hbDxBPiwgb2I6IE9wdGlvbmFsPEI+LCBmOiAoYTogQSwgYjogQikgPT4gQyk6IE9wdGlvbmFsPEM+ID0+XG4gIG9hLmlzU29tZSgpICYmIG9iLmlzU29tZSgpID8gT3B0aW9uYWwuc29tZShmKG9hLmdldE9yRGllKCksIG9iLmdldE9yRGllKCkpKSA6IE9wdGlvbmFsLm5vbmU8Qz4oKTtcblxuZXhwb3J0IGNvbnN0IGxpZnQzID0gPEEsIEIsIEMsIEQ+IChvYTogT3B0aW9uYWw8QT4sIG9iOiBPcHRpb25hbDxCPiwgb2M6IE9wdGlvbmFsPEM+LCBmOiAoYTogQSwgYjogQiwgYzogQykgPT4gRCk6IE9wdGlvbmFsPEQ+ID0+XG4gIG9hLmlzU29tZSgpICYmIG9iLmlzU29tZSgpICYmIG9jLmlzU29tZSgpID8gT3B0aW9uYWwuc29tZShmKG9hLmdldE9yRGllKCksIG9iLmdldE9yRGllKCksIG9jLmdldE9yRGllKCkpKSA6IE9wdGlvbmFsLm5vbmU8RD4oKTtcblxuZXhwb3J0IGNvbnN0IGxpZnQ0ID0gPEEsIEIsIEMsIEQsIEU+IChvYTogT3B0aW9uYWw8QT4sIG9iOiBPcHRpb25hbDxCPiwgb2M6IE9wdGlvbmFsPEM+LCBvZDogT3B0aW9uYWw8RD4sIGY6IChhOiBBLCBiOiBCLCBjOiBDLCBkOiBEKSA9PiBFKTogT3B0aW9uYWw8RT4gPT5cbiAgb2EuaXNTb21lKCkgJiYgb2IuaXNTb21lKCkgJiYgb2MuaXNTb21lKCkgJiYgb2QuaXNTb21lKCkgPyBPcHRpb25hbC5zb21lKGYob2EuZ2V0T3JEaWUoKSwgb2IuZ2V0T3JEaWUoKSwgb2MuZ2V0T3JEaWUoKSwgb2QuZ2V0T3JEaWUoKSkpIDogT3B0aW9uYWwubm9uZTxFPigpO1xuXG5leHBvcnQgY29uc3QgbGlmdDUgPSA8QSwgQiwgQywgRCwgRSwgRj4gKG9hOiBPcHRpb25hbDxBPiwgb2I6IE9wdGlvbmFsPEI+LCBvYzogT3B0aW9uYWw8Qz4sIG9kOiBPcHRpb25hbDxEPiwgb2U6IE9wdGlvbmFsPEU+LCBmOiAoYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSkgPT4gRik6IE9wdGlvbmFsPEY+ID0+XG4gIG9hLmlzU29tZSgpICYmIG9iLmlzU29tZSgpICYmIG9jLmlzU29tZSgpICYmIG9kLmlzU29tZSgpICYmIG9lLmlzU29tZSgpID8gT3B0aW9uYWwuc29tZShmKG9hLmdldE9yRGllKCksIG9iLmdldE9yRGllKCksIG9jLmdldE9yRGllKCksIG9kLmdldE9yRGllKCksIG9lLmdldE9yRGllKCkpKSA6IE9wdGlvbmFsLm5vbmU8Rj4oKTtcblxuZXhwb3J0IGNvbnN0IG1hcEZyb20gPSA8QSwgQj4gKGE6IEEgfCBudWxsIHwgdW5kZWZpbmVkLCBmOiAoYTogQSkgPT4gQik6IE9wdGlvbmFsPEI+ID0+XG4gIChhICE9PSB1bmRlZmluZWQgJiYgYSAhPT0gbnVsbCkgPyBPcHRpb25hbC5zb21lKGYoYSkpIDogT3B0aW9uYWwubm9uZTxCPigpO1xuXG5leHBvcnQgY29uc3QgYmluZEZyb20gPSA8QSwgQj4gKGE6IEEgfCBudWxsIHwgdW5kZWZpbmVkLCBmOiAoYTogQSkgPT4gT3B0aW9uYWw8Qj4pOiBPcHRpb25hbDxCPiA9PlxuICAoYSAhPT0gdW5kZWZpbmVkICYmIGEgIT09IG51bGwpID8gZihhKSA6IE9wdGlvbmFsLm5vbmU8Qj4oKTtcblxuZXhwb3J0IGNvbnN0IGZsYXR0ZW4gPSA8VD4gKG9vdDogT3B0aW9uYWw8T3B0aW9uYWw8VD4+KTogT3B0aW9uYWw8VD4gPT4gb290LmJpbmQoRnVuLmlkZW50aXR5KTtcblxuLy8gVGhpcyBjYW4gaGVscCB3aXRoIHR5cGUgaW5mZXJlbmNlLCBieSBzcGVjaWZ5aW5nIHRoZSB0eXBlIHBhcmFtIG9uIHRoZSBub25lIGNhc2UsIHNvIHRoZSBjYWxsZXIgZG9lc24ndCBoYXZlIHRvLlxuZXhwb3J0IGNvbnN0IHNvbWVJZiA9IDxBPiAoYjogYm9vbGVhbiwgYTogQSk6IE9wdGlvbmFsPEE+ID0+XG4gIGIgPyBPcHRpb25hbC5zb21lKGEpIDogT3B0aW9uYWwubm9uZTxBPigpO1xuIiwiaW1wb3J0ICogYXMgU3RyQXBwZW5kIGZyb20gJy4uL3N0ci9TdHJBcHBlbmQnO1xuXG5pbXBvcnQgeyBPcHRpb25hbCB9IGZyb20gJy4vT3B0aW9uYWwnO1xuaW1wb3J0ICogYXMgVHlwZSBmcm9tICcuL1R5cGUnO1xuXG5jb25zdCBjaGVja1JhbmdlID0gKHN0cjogc3RyaW5nLCBzdWJzdHI6IHN0cmluZywgc3RhcnQ6IG51bWJlcik6IGJvb2xlYW4gPT5cbiAgc3Vic3RyID09PSAnJyB8fCBzdHIubGVuZ3RoID49IHN1YnN0ci5sZW5ndGggJiYgc3RyLnN1YnN0cihzdGFydCwgc3RhcnQgKyBzdWJzdHIubGVuZ3RoKSA9PT0gc3Vic3RyO1xuXG4vKiogR2l2ZW4gYSBzdHJpbmcgYW5kIG9iamVjdCwgcGVyZm9ybSB0ZW1wbGF0ZS1yZXBsYWNlbWVudHMgb24gdGhlIHN0cmluZywgYXMgc3BlY2lmaWVkIGJ5IHRoZSBvYmplY3QuXG4gKiBBbnkgdGVtcGxhdGUgZmllbGRzIG9mIHRoZSBmb3JtICR7bmFtZX0gYXJlIHJlcGxhY2VkIGJ5IHRoZSBzdHJpbmcgb3IgbnVtYmVyIHNwZWNpZmllZCBhcyBvYmpbXCJuYW1lXCJdXG4gKiBCYXNlZCBvbiBEb3VnbGFzIENyb2NrZm9yZCdzICdzdXBwbGFudCcgbWV0aG9kIGZvciB0ZW1wbGF0ZS1yZXBsYWNlIG9mIHN0cmluZ3MuIFVzZXMgZGlmZmVyZW50IHRlbXBsYXRlIGZvcm1hdC5cbiAqL1xuZXhwb3J0IGNvbnN0IHN1cHBsYW50ID0gKHN0cjogc3RyaW5nLCBvYmo6IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IG51bWJlcj4pOiBzdHJpbmcgPT4ge1xuICBjb25zdCBpc1N0cmluZ09yTnVtYmVyID0gKGE6IHVua25vd24pOiBhIGlzIHN0cmluZyB8IG51bWJlciA9PiB7XG4gICAgY29uc3QgdCA9IHR5cGVvZiBhO1xuICAgIHJldHVybiB0ID09PSAnc3RyaW5nJyB8fCB0ID09PSAnbnVtYmVyJztcbiAgfTtcblxuICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcJFxceyhbXnt9XSopXFx9L2csXG4gICAgKGZ1bGxNYXRjaDogc3RyaW5nLCBrZXk6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBvYmpba2V5XTtcbiAgICAgIHJldHVybiBpc1N0cmluZ09yTnVtYmVyKHZhbHVlKSA/IHZhbHVlLnRvU3RyaW5nKCkgOiBmdWxsTWF0Y2g7XG4gICAgfVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUxlYWRpbmcgPSAoc3RyOiBzdHJpbmcsIHByZWZpeDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIHN0YXJ0c1dpdGgoc3RyLCBwcmVmaXgpID8gU3RyQXBwZW5kLnJlbW92ZUZyb21TdGFydChzdHIsIHByZWZpeC5sZW5ndGgpIDogc3RyO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZVRyYWlsaW5nID0gKHN0cjogc3RyaW5nLCBzdWZmaXg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBlbmRzV2l0aChzdHIsIHN1ZmZpeCkgPyBTdHJBcHBlbmQucmVtb3ZlRnJvbUVuZChzdHIsIHN1ZmZpeC5sZW5ndGgpIDogc3RyO1xufTtcblxuZXhwb3J0IGNvbnN0IGVuc3VyZUxlYWRpbmcgPSAoc3RyOiBzdHJpbmcsIHByZWZpeDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIHN0YXJ0c1dpdGgoc3RyLCBwcmVmaXgpID8gc3RyIDogU3RyQXBwZW5kLmFkZFRvU3RhcnQoc3RyLCBwcmVmaXgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGVuc3VyZVRyYWlsaW5nID0gKHN0cjogc3RyaW5nLCBzdWZmaXg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBlbmRzV2l0aChzdHIsIHN1ZmZpeCkgPyBzdHIgOiBTdHJBcHBlbmQuYWRkVG9FbmQoc3RyLCBzdWZmaXgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbnRhaW5zID0gKHN0cjogc3RyaW5nLCBzdWJzdHI6IHN0cmluZywgc3RhcnQ6IG51bWJlciA9IDAsIGVuZD86IG51bWJlcik6IGJvb2xlYW4gPT4ge1xuICBjb25zdCBpZHggPSBzdHIuaW5kZXhPZihzdWJzdHIsIHN0YXJ0KTtcbiAgaWYgKGlkeCAhPT0gLTEpIHtcbiAgICByZXR1cm4gVHlwZS5pc1VuZGVmaW5lZChlbmQpID8gdHJ1ZSA6IGlkeCArIHN1YnN0ci5sZW5ndGggPD0gZW5kO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGNhcGl0YWxpemUgPSAoc3RyOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gc3RyID09PSAnJyA/ICcnIDogc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnN1YnN0cmluZygxKTtcbn07XG5cbi8qKiBEb2VzICdzdHInIHN0YXJ0IHdpdGggJ3ByZWZpeCc/XG4gKiAgTm90ZTogYWxsIHN0cmluZ3Mgc3RhcnQgd2l0aCB0aGUgZW1wdHkgc3RyaW5nLlxuICogICAgICAgIE1vcmUgZm9ybWFsbHksIGZvciBhbGwgc3RyaW5ncyB4LCBzdGFydHNXaXRoKHgsIFwiXCIpLlxuICogICAgICAgIFRoaXMgaXMgc28gdGhhdCBmb3IgYWxsIHN0cmluZ3MgeCBhbmQgeSwgc3RhcnRzV2l0aCh5ICsgeCwgeSlcbiAqL1xuZXhwb3J0IGNvbnN0IHN0YXJ0c1dpdGggPSAoc3RyOiBzdHJpbmcsIHByZWZpeDogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gIHJldHVybiBjaGVja1JhbmdlKHN0ciwgcHJlZml4LCAwKTtcbn07XG5cbi8qKiBEb2VzICdzdHInIGVuZCB3aXRoICdzdWZmaXgnP1xuICogIE5vdGU6IGFsbCBzdHJpbmdzIGVuZCB3aXRoIHRoZSBlbXB0eSBzdHJpbmcuXG4gKiAgICAgICAgTW9yZSBmb3JtYWxseSwgZm9yIGFsbCBzdHJpbmdzIHgsIGVuZHNXaXRoKHgsIFwiXCIpLlxuICogICAgICAgIFRoaXMgaXMgc28gdGhhdCBmb3IgYWxsIHN0cmluZ3MgeCBhbmQgeSwgZW5kc1dpdGgoeCArIHksIHkpXG4gKi9cbmV4cG9ydCBjb25zdCBlbmRzV2l0aCA9IChzdHI6IHN0cmluZywgc3VmZml4OiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgcmV0dXJuIGNoZWNrUmFuZ2Uoc3RyLCBzdWZmaXgsIHN0ci5sZW5ndGggLSBzdWZmaXgubGVuZ3RoKTtcbn07XG5cbmNvbnN0IGJsYW5rID0gKHI6IFJlZ0V4cCkgPT4gKHM6IHN0cmluZyk6IHN0cmluZyA9PlxuICBzLnJlcGxhY2UociwgJycpO1xuXG4vKiogcmVtb3ZlcyBhbGwgbGVhZGluZyBhbmQgdHJhaWxpbmcgc3BhY2VzICovXG5leHBvcnQgY29uc3QgdHJpbTogKHM6IHN0cmluZykgPT4gc3RyaW5nID1cbiAgYmxhbmsoL15cXHMrfFxccyskL2cpO1xuXG5leHBvcnQgY29uc3QgbFRyaW06IChzOiBzdHJpbmcpID0+IHN0cmluZyA9XG4gIGJsYW5rKC9eXFxzKy9nKTtcblxuZXhwb3J0IGNvbnN0IHJUcmltOiAoczogc3RyaW5nKSA9PiBzdHJpbmcgPVxuICBibGFuaygvXFxzKyQvZyk7XG5cbmV4cG9ydCBjb25zdCBpc05vdEVtcHR5ID0gKHM6IHN0cmluZyk6IGJvb2xlYW4gPT4gcy5sZW5ndGggPiAwO1xuXG5leHBvcnQgY29uc3QgaXNFbXB0eSA9IChzOiBzdHJpbmcpOiBib29sZWFuID0+ICFpc05vdEVtcHR5KHMpO1xuXG5leHBvcnQgY29uc3QgcmVwZWF0ID0gKHM6IHN0cmluZywgY291bnQ6IG51bWJlcik6IHN0cmluZyA9PiBjb3VudCA8PSAwID8gJycgOiBuZXcgQXJyYXkoY291bnQgKyAxKS5qb2luKHMpO1xuXG5leHBvcnQgY29uc3QgZnJvbUNvZGVQb2ludCA9IFN0cmluZy5mcm9tQ29kZVBvaW50O1xuXG5leHBvcnQgY29uc3QgdG9JbnQgPSAodmFsdWU6IHN0cmluZywgcmFkaXg6IG51bWJlciA9IDEwKTogT3B0aW9uYWw8bnVtYmVyPiA9PiB7XG4gIGNvbnN0IG51bSA9IHBhcnNlSW50KHZhbHVlLCByYWRpeCk7XG4gIHJldHVybiBpc05hTihudW0pID8gT3B0aW9uYWwubm9uZSgpIDogT3B0aW9uYWwuc29tZShudW0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHRvRmxvYXQgPSAodmFsdWU6IHN0cmluZyk6IE9wdGlvbmFsPG51bWJlcj4gPT4ge1xuICBjb25zdCBudW0gPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgcmV0dXJuIGlzTmFOKG51bSkgPyBPcHRpb25hbC5ub25lKCkgOiBPcHRpb25hbC5zb21lKG51bSk7XG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXdyYXBwZXItb2JqZWN0LXR5cGVzICovXG5jb25zdCBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcblxuaW50ZXJmYWNlIENvbnN0cnVjdG9yPFQgZXh0ZW5kcyBPYmplY3Q+IHtcbiAgcmVhZG9ubHkgcHJvdG90eXBlOiBUO1xuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG59XG5cbmNvbnN0IGhhc1Byb3RvID0gPFQgZXh0ZW5kcyBPYmplY3Q+KHY6IE9iamVjdCwgY29uc3RydWN0b3I6IENvbnN0cnVjdG9yPFQ+LCBwcmVkaWNhdGU6ICh2OiBPYmplY3QsIHByb3RvdHlwZTogVCkgPT4gYm9vbGVhbik6IGJvb2xlYW4gPT4ge1xuICBpZiAocHJlZGljYXRlKHYsIGNvbnN0cnVjdG9yLnByb3RvdHlwZSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICAvLyBTdHJpbmctYmFzZWQgZmFsbGJhY2sgdGltZVxuICAgIHJldHVybiB2LmNvbnN0cnVjdG9yPy5uYW1lID09PSBjb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG59O1xuXG5jb25zdCB0eXBlT2YgPSAoeDogYW55KTogc3RyaW5nID0+IHtcbiAgY29uc3QgdCA9IHR5cGVvZiB4O1xuICBpZiAoeCA9PT0gbnVsbCkge1xuICAgIHJldHVybiAnbnVsbCc7XG4gIH0gZWxzZSBpZiAodCA9PT0gJ29iamVjdCcgJiYgQXJyYXkuaXNBcnJheSh4KSkge1xuICAgIHJldHVybiAnYXJyYXknO1xuICB9IGVsc2UgaWYgKHQgPT09ICdvYmplY3QnICYmIGhhc1Byb3RvKHgsIFN0cmluZywgKG8sIHByb3RvKSA9PiBwcm90by5pc1Byb3RvdHlwZU9mKG8pKSkge1xuICAgIHJldHVybiAnc3RyaW5nJztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdDtcbiAgfVxufTtcblxuY29uc3QgaXNUeXBlID0gPFlvbG8+KHR5cGU6IHN0cmluZykgPT4gKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBZb2xvID0+XG4gIHR5cGVPZih2YWx1ZSkgPT09IHR5cGU7XG5cbmNvbnN0IGlzU2ltcGxlVHlwZSA9IDxZb2xvPih0eXBlOiBzdHJpbmcpID0+ICh2YWx1ZTogYW55KTogdmFsdWUgaXMgWW9sbyA9PlxuICB0eXBlb2YgdmFsdWUgPT09IHR5cGU7XG5cbmNvbnN0IGVxID0gPFQ+ICh0OiBUKSA9PiAoYTogYW55KTogYSBpcyBUID0+XG4gIHQgPT09IGE7XG5cbmV4cG9ydCBjb25zdCBpcyA9IDxFIGV4dGVuZHMgT2JqZWN0Pih2YWx1ZTogYW55LCBjb25zdHJ1Y3RvcjogQ29uc3RydWN0b3I8RT4pOiB2YWx1ZSBpcyBFID0+XG4gIGlzT2JqZWN0KHZhbHVlKSAmJiBoYXNQcm90bzxFPih2YWx1ZSwgY29uc3RydWN0b3IsIChvLCBwcm90bykgPT4gZ2V0UHJvdG90eXBlT2YobykgPT09IHByb3RvKTtcblxuZXhwb3J0IGNvbnN0IGlzU3RyaW5nOiAodmFsdWU6IGFueSkgPT4gdmFsdWUgaXMgc3RyaW5nID1cbiAgaXNUeXBlKCdzdHJpbmcnKTtcblxuZXhwb3J0IGNvbnN0IGlzT2JqZWN0OiAodmFsdWU6IGFueSkgPT4gdmFsdWUgaXMgT2JqZWN0ID1cbiAgaXNUeXBlKCdvYmplY3QnKTtcblxuZXhwb3J0IGNvbnN0IGlzUGxhaW5PYmplY3QgPSAodmFsdWU6IHVua25vd24pOiB2YWx1ZSBpcyBPYmplY3QgPT5cbiAgaXModmFsdWUsIE9iamVjdCk7XG5cbmV4cG9ydCBjb25zdCBpc0FycmF5OiAodmFsdWU6IGFueSkgPT4gdmFsdWUgaXMgQXJyYXk8dW5rbm93bj4gPVxuICBpc1R5cGUoJ2FycmF5Jyk7XG5cbmV4cG9ydCBjb25zdCBpc051bGw6IChhOiBhbnkpID0+IGEgaXMgbnVsbCA9XG4gIGVxKG51bGwpO1xuXG5leHBvcnQgY29uc3QgaXNCb29sZWFuOiAodmFsdWU6IGFueSkgPT4gdmFsdWUgaXMgYm9vbGVhbiA9XG4gIGlzU2ltcGxlVHlwZTxib29sZWFuPignYm9vbGVhbicpO1xuXG5leHBvcnQgY29uc3QgaXNVbmRlZmluZWQ6IChhOiBhbnkpID0+IGEgaXMgdW5kZWZpbmVkID1cbiAgZXEodW5kZWZpbmVkKTtcblxuZXhwb3J0IGNvbnN0IGlzTnVsbGFibGUgPSAoYTogYW55KTogYSBpcyBudWxsIHwgdW5kZWZpbmVkID0+XG4gIGEgPT09IG51bGwgfHwgYSA9PT0gdW5kZWZpbmVkO1xuXG5leHBvcnQgY29uc3QgaXNOb25OdWxsYWJsZSA9IDxBPiAoYTogQSB8IG51bGwgfCB1bmRlZmluZWQpOiBhIGlzIE5vbk51bGxhYmxlPEE+ID0+XG4gICFpc051bGxhYmxlKGEpO1xuXG5leHBvcnQgY29uc3QgaXNGdW5jdGlvbjogKHZhbHVlOiBhbnkpID0+IHZhbHVlIGlzIEZ1bmN0aW9uID1cbiAgaXNTaW1wbGVUeXBlPEZ1bmN0aW9uPignZnVuY3Rpb24nKTtcblxuZXhwb3J0IGNvbnN0IGlzTnVtYmVyOiAodmFsdWU6IGFueSkgPT4gdmFsdWUgaXMgbnVtYmVyID1cbiAgaXNTaW1wbGVUeXBlPG51bWJlcj4oJ251bWJlcicpO1xuXG5leHBvcnQgY29uc3QgaXNBcnJheU9mID0gPEU+KHZhbHVlOiBhbnksIHByZWQ6ICh4OiBhbnkpID0+IHggaXMgRSk6IHZhbHVlIGlzIEFycmF5PEU+ID0+IHtcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHZhbHVlLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICBpZiAoIShwcmVkKHZhbHVlW2ldKSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQgY29uc3QgaXNQcm9taXNlTGlrZSA9ICh4OiBhbnkpOiB4IGlzIFByb21pc2U8dW5rbm93bj4gPT5cbiAgaXNPYmplY3QoeClcbiAgJiYgaXNGdW5jdGlvbih4LnRoZW4pXG4gICYmIGlzRnVuY3Rpb24oeC5jYXRjaCk7XG4iLCJleHBvcnQgY29uc3QgYWRkVG9TdGFydCA9IChzdHI6IHN0cmluZywgcHJlZml4OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gcHJlZml4ICsgc3RyO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZFRvRW5kID0gKHN0cjogc3RyaW5nLCBzdWZmaXg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBzdHIgKyBzdWZmaXg7XG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlRnJvbVN0YXJ0ID0gKHN0cjogc3RyaW5nLCBudW1DaGFyczogbnVtYmVyKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIHN0ci5zdWJzdHJpbmcobnVtQ2hhcnMpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUZyb21FbmQgPSAoc3RyOiBzdHJpbmcsIG51bUNoYXJzOiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gc3RyLnN1YnN0cmluZygwLCBzdHIubGVuZ3RoIC0gbnVtQ2hhcnMpO1xufTtcbiIsImltcG9ydCBQbHVnaW5NYW5hZ2VyIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvUGx1Z2luTWFuYWdlcic7XG5cbmltcG9ydCAqIGFzIEFwaSBmcm9tICcuL2FwaS9BcGknO1xuaW1wb3J0ICogYXMgQ29tbWFuZHMgZnJvbSAnLi9hcGkvQ29tbWFuZHMnO1xuaW1wb3J0ICogYXMgQnV0dG9ucyBmcm9tICcuL3VpL0J1dHRvbnMnO1xuaW1wb3J0ICogYXMgTWVudUl0ZW1zIGZyb20gJy4vdWkvTWVudUl0ZW1zJztcblxuZXhwb3J0IGRlZmF1bHQgKCk6IHZvaWQgPT4ge1xuICBQbHVnaW5NYW5hZ2VyLmFkZCgnbGlzdHMnLCAoZWRpdG9yKSA9PiB7XG4gICAgQ29tbWFuZHMucmVnaXN0ZXIoZWRpdG9yKTtcbiAgICBCdXR0b25zLnJlZ2lzdGVyKGVkaXRvcik7XG4gICAgTWVudUl0ZW1zLnJlZ2lzdGVyKGVkaXRvcik7XG5cbiAgICByZXR1cm4gQXBpLmdldChlZGl0b3IpO1xuICB9KTtcbn07XG4iLCJpbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFwaSB7XG4gIHJlYWRvbmx5IGJhY2tzcGFjZURlbGV0ZTogKGlzRm9yd2FyZDogYm9vbGVhbikgPT4gdm9pZDtcbn1cblxuY29uc3QgZ2V0ID0gKGVkaXRvcjogRWRpdG9yKTogQXBpID0+ICh7XG4gIGJhY2tzcGFjZURlbGV0ZTogKGlzRm9yd2FyZDogYm9vbGVhbikgPT4ge1xuICAgIGVkaXRvci5leGVjQ29tbWFuZCgnbWNlTGlzdEJhY2tzcGFjZURlbGV0ZScsIGZhbHNlLCBpc0ZvcndhcmQpO1xuICB9XG59KTtcblxuZXhwb3J0IHtcbiAgZ2V0XG59O1xuIiwiaW1wb3J0IHR5cGUgRWRpdG9yIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvRWRpdG9yJztcblxuaW1wb3J0ICogYXMgRGlhbG9nIGZyb20gJy4uL3VpL0RpYWxvZyc7XG5cbmNvbnN0IHJlZ2lzdGVyID0gKGVkaXRvcjogRWRpdG9yKTogdm9pZCA9PiB7XG4gIGVkaXRvci5hZGRDb21tYW5kKCdtY2VMaXN0UHJvcHMnLCAoKSA9PiB7XG4gICAgRGlhbG9nLm9wZW4oZWRpdG9yKTtcbiAgfSk7XG59O1xuXG5leHBvcnQge1xuICByZWdpc3RlclxufTtcbiIsImltcG9ydCB0eXBlIEVkaXRvciBmcm9tICd0aW55bWNlL2NvcmUvYXBpL0VkaXRvcic7XG5cbmNvbnN0IG9wdGlvbiA9IChuYW1lOiBzdHJpbmcpID0+IChlZGl0b3I6IEVkaXRvcikgPT5cbiAgZWRpdG9yLm9wdGlvbnMuZ2V0KG5hbWUpO1xuXG5jb25zdCBnZXRGb3JjZWRSb290QmxvY2sgPSBvcHRpb24oJ2ZvcmNlZF9yb290X2Jsb2NrJyk7XG5cbmV4cG9ydCB7XG4gIGdldEZvcmNlZFJvb3RCbG9ja1xufTtcbiIsImltcG9ydCB0eXBlIEVkaXRvciBmcm9tICd0aW55bWNlL2NvcmUvYXBpL0VkaXRvcic7XG5pbXBvcnQgdHlwZSB7IE5vZGVDaGFuZ2VFdmVudCB9IGZyb20gJ3RpbnltY2UvY29yZS9hcGkvRXZlbnRUeXBlcyc7XG5pbXBvcnQgdHlwZSB7IFRvb2xiYXIgfSBmcm9tICd0aW55bWNlL2NvcmUvYXBpL3VpL1VpJztcblxuaW1wb3J0ICogYXMgVXRpbCBmcm9tICcuL1V0aWwnO1xuXG5jb25zdCBzZXR1cFRvZ2dsZUJ1dHRvbkhhbmRsZXIgPSAoZWRpdG9yOiBFZGl0b3IsIGxpc3ROYW1lOiBzdHJpbmcpID0+IChhcGk6IFRvb2xiYXIuVG9vbGJhclRvZ2dsZUJ1dHRvbkluc3RhbmNlQXBpKTogKCkgPT4gdm9pZCA9PiB7XG4gIGNvbnN0IHRvZ2dsZUJ1dHRvbkhhbmRsZXIgPSAoZTogTm9kZUNoYW5nZUV2ZW50KSA9PiB7XG4gICAgYXBpLnNldEFjdGl2ZShVdGlsLmluTGlzdChlLnBhcmVudHMsIGxpc3ROYW1lKSk7XG4gICAgYXBpLnNldEVuYWJsZWQoIVV0aWwuaXNXaXRoaW5Ob25FZGl0YWJsZUxpc3QoZWRpdG9yLCBlLmVsZW1lbnQpICYmIGVkaXRvci5zZWxlY3Rpb24uaXNFZGl0YWJsZSgpKTtcbiAgfTtcblxuICBhcGkuc2V0RW5hYmxlZChlZGl0b3Iuc2VsZWN0aW9uLmlzRWRpdGFibGUoKSk7XG5cbiAgcmV0dXJuIFV0aWwuc2V0Tm9kZUNoYW5nZUhhbmRsZXIoZWRpdG9yLCB0b2dnbGVCdXR0b25IYW5kbGVyKTtcbn07XG5cbmNvbnN0IHJlZ2lzdGVyID0gKGVkaXRvcjogRWRpdG9yKTogdm9pZCA9PiB7XG4gIGNvbnN0IGV4ZWMgPSAoY29tbWFuZDogc3RyaW5nKSA9PiAoKSA9PiBlZGl0b3IuZXhlY0NvbW1hbmQoY29tbWFuZCk7XG5cbiAgaWYgKCFlZGl0b3IuaGFzUGx1Z2luKCdhZHZsaXN0JykpIHtcbiAgICBlZGl0b3IudWkucmVnaXN0cnkuYWRkVG9nZ2xlQnV0dG9uKCdudW1saXN0Jywge1xuICAgICAgaWNvbjogJ29yZGVyZWQtbGlzdCcsXG4gICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgdG9vbHRpcDogJ051bWJlcmVkIGxpc3QnLFxuICAgICAgb25BY3Rpb246IGV4ZWMoJ0luc2VydE9yZGVyZWRMaXN0JyksXG4gICAgICBvblNldHVwOiBzZXR1cFRvZ2dsZUJ1dHRvbkhhbmRsZXIoZWRpdG9yLCAnT0wnKVxuICAgIH0pO1xuXG4gICAgZWRpdG9yLnVpLnJlZ2lzdHJ5LmFkZFRvZ2dsZUJ1dHRvbignYnVsbGlzdCcsIHtcbiAgICAgIGljb246ICd1bm9yZGVyZWQtbGlzdCcsXG4gICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgdG9vbHRpcDogJ0J1bGxldCBsaXN0JyxcbiAgICAgIG9uQWN0aW9uOiBleGVjKCdJbnNlcnRVbm9yZGVyZWRMaXN0JyksXG4gICAgICBvblNldHVwOiBzZXR1cFRvZ2dsZUJ1dHRvbkhhbmRsZXIoZWRpdG9yLCAnVUwnKVxuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQge1xuICByZWdpc3RlclxufTtcbiIsImltcG9ydCB7IE9wdGlvbmFsIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0IHR5cGUgRWRpdG9yIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvRWRpdG9yJztcblxuaW1wb3J0IHsgcGFyc2VEZXRhaWwsIHBhcnNlU3RhcnRWYWx1ZSB9IGZyb20gJy4vTGlzdE51bWJlcmluZyc7XG5pbXBvcnQgeyBnZXRQYXJlbnRMaXN0LCBpc09sTm9kZSwgaXNXaXRoaW5Ob25FZGl0YWJsZUxpc3QgfSBmcm9tICcuL1V0aWwnO1xuXG5jb25zdCBvcGVuID0gKGVkaXRvcjogRWRpdG9yKTogdm9pZCA9PiB7XG4gIC8vIEZpbmQgdGhlIGN1cnJlbnQgbGlzdCBhbmQgc2tpcCBvcGVuaW5nIGlmIHRoZSBzZWxlY3Rpb24gaXNuJ3QgaW4gYW4gb3JkZXJlZCBsaXN0XG4gIGNvbnN0IGN1cnJlbnRMaXN0ID0gZ2V0UGFyZW50TGlzdChlZGl0b3IpO1xuICBpZiAoIWlzT2xOb2RlKGN1cnJlbnRMaXN0KSB8fCBpc1dpdGhpbk5vbkVkaXRhYmxlTGlzdChlZGl0b3IsIGN1cnJlbnRMaXN0KSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGVkaXRvci53aW5kb3dNYW5hZ2VyLm9wZW4oe1xuICAgIHRpdGxlOiAnTGlzdCBQcm9wZXJ0aWVzJyxcbiAgICBib2R5OiB7XG4gICAgICB0eXBlOiAncGFuZWwnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICdpbnB1dCcsXG4gICAgICAgICAgbmFtZTogJ3N0YXJ0JyxcbiAgICAgICAgICBsYWJlbDogJ1N0YXJ0IGxpc3QgYXQgbnVtYmVyJyxcbiAgICAgICAgICBpbnB1dE1vZGU6ICdudW1lcmljJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICBpbml0aWFsRGF0YToge1xuICAgICAgc3RhcnQ6IHBhcnNlRGV0YWlsKHtcbiAgICAgICAgc3RhcnQ6IGVkaXRvci5kb20uZ2V0QXR0cmliKGN1cnJlbnRMaXN0LCAnc3RhcnQnLCAnMScpLFxuICAgICAgICBsaXN0U3R5bGVUeXBlOiBPcHRpb25hbC5mcm9tKGVkaXRvci5kb20uZ2V0U3R5bGUoY3VycmVudExpc3QsICdsaXN0LXN0eWxlLXR5cGUnKSlcbiAgICAgIH0pXG4gICAgfSxcbiAgICBidXR0b25zOiBbXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdjYW5jZWwnLFxuICAgICAgICBuYW1lOiAnY2FuY2VsJyxcbiAgICAgICAgdGV4dDogJ0NhbmNlbCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdzdWJtaXQnLFxuICAgICAgICBuYW1lOiAnc2F2ZScsXG4gICAgICAgIHRleHQ6ICdTYXZlJyxcbiAgICAgICAgcHJpbWFyeTogdHJ1ZVxuICAgICAgfVxuICAgIF0sXG4gICAgb25TdWJtaXQ6IChhcGkpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhcGkuZ2V0RGF0YSgpO1xuICAgICAgcGFyc2VTdGFydFZhbHVlKGRhdGEuc3RhcnQpLmVhY2goKGRldGFpbCkgPT4ge1xuICAgICAgICBlZGl0b3IuZXhlY0NvbW1hbmQoJ21jZUxpc3RVcGRhdGUnLCBmYWxzZSwge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBzdGFydDogZGV0YWlsLnN0YXJ0ID09PSAnMScgPyAnJyA6IGRldGFpbC5zdGFydFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3R5bGVzOiB7XG4gICAgICAgICAgICAnbGlzdC1zdHlsZS10eXBlJzogZGV0YWlsLmxpc3RTdHlsZVR5cGUuZ2V0T3IoJycpXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgYXBpLmNsb3NlKCk7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCB7XG4gIG9wZW5cbn07XG4iLCJpbXBvcnQgeyBBcnIsIE9wdGlvbmFsLCBPcHRpb25hbHMsIFN0cmluZ3MgfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5leHBvcnQgaW50ZXJmYWNlIExpc3REZXRhaWwge1xuICByZWFkb25seSBzdGFydDogc3RyaW5nO1xuICByZWFkb25seSBsaXN0U3R5bGVUeXBlOiBPcHRpb25hbDxzdHJpbmc+O1xufVxuXG5jb25zdCBlbnVtIExpc3RUeXBlIHtcbiAgVXBwZXJBbHBoYSxcbiAgTG93ZXJBbHBoYSxcbiAgTnVtZXJpYyxcbiAgTm9uZSxcbiAgVW5rbm93blxufVxuXG4vLyBFeGFtcGxlOiAnQUInIC0+IDI4XG5jb25zdCBwYXJzZUFscGhhYmV0aWNCYXNlMjYgPSAoc3RyOiBzdHJpbmcpOiBudW1iZXIgPT4ge1xuICBjb25zdCBjaGFycyA9IEFyci5yZXZlcnNlKFN0cmluZ3MudHJpbShzdHIpLnNwbGl0KCcnKSk7XG4gIGNvbnN0IHZhbHVlcyA9IEFyci5tYXAoY2hhcnMsIChjaGFyLCBpKSA9PiB7XG4gICAgY29uc3QgY2hhclZhbHVlID0gY2hhci50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgLSAnQScuY2hhckNvZGVBdCgwKSArIDE7XG4gICAgcmV0dXJuIE1hdGgucG93KDI2LCBpKSAqIGNoYXJWYWx1ZTtcbiAgfSk7XG4gIHJldHVybiBBcnIuZm9sZGwodmFsdWVzLCAoc3VtLCB2KSA9PiBzdW0gKyB2LCAwKTtcbn07XG5cbi8vIEV4YW1wbGU6IDI4IC0+ICdBQidcbmNvbnN0IGNvbXBvc2VBbHBoYWJldGljQmFzZTI2ID0gKHZhbHVlOiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuICB2YWx1ZS0tO1xuICBpZiAodmFsdWUgPCAwKSB7XG4gICAgcmV0dXJuICcnO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHJlbWFpbmRlciA9IHZhbHVlICUgMjY7XG4gICAgY29uc3QgcXVvdGllbnQgPSBNYXRoLmZsb29yKHZhbHVlIC8gMjYpO1xuXG4gICAgY29uc3QgcmVzdCA9IGNvbXBvc2VBbHBoYWJldGljQmFzZTI2KHF1b3RpZW50KTtcbiAgICBjb25zdCBjaGFyID0gU3RyaW5nLmZyb21DaGFyQ29kZSgnQScuY2hhckNvZGVBdCgwKSArIHJlbWFpbmRlcik7XG5cbiAgICByZXR1cm4gcmVzdCArIGNoYXI7XG4gIH1cbn07XG5cbmNvbnN0IGlzVXBwZXJjYXNlID0gKHN0cjogc3RyaW5nKTogYm9vbGVhbiA9PiAvXltBLVpdKyQvLnRlc3Qoc3RyKTtcblxuY29uc3QgaXNMb3dlcmNhc2UgPSAoc3RyOiBzdHJpbmcpOiBib29sZWFuID0+IC9eW2Etel0rJC8udGVzdChzdHIpO1xuXG5jb25zdCBpc051bWVyaWMgPSAoc3RyOiBzdHJpbmcpOiBib29sZWFuID0+IC9eWzAtOV0rJC8udGVzdChzdHIpO1xuXG5jb25zdCBkZWR1Y2VMaXN0VHlwZSA9IChzdGFydDogc3RyaW5nKTogTGlzdFR5cGUgPT4ge1xuICBpZiAoaXNOdW1lcmljKHN0YXJ0KSkge1xuICAgIHJldHVybiBMaXN0VHlwZS5OdW1lcmljO1xuICB9IGVsc2UgaWYgKGlzVXBwZXJjYXNlKHN0YXJ0KSkge1xuICAgIHJldHVybiBMaXN0VHlwZS5VcHBlckFscGhhO1xuICB9IGVsc2UgaWYgKGlzTG93ZXJjYXNlKHN0YXJ0KSkge1xuICAgIHJldHVybiBMaXN0VHlwZS5Mb3dlckFscGhhO1xuICB9IGVsc2UgaWYgKFN0cmluZ3MuaXNFbXB0eShzdGFydCkpIHtcbiAgICByZXR1cm4gTGlzdFR5cGUuTm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gTGlzdFR5cGUuVW5rbm93bjtcbiAgfVxufTtcblxuY29uc3QgcGFyc2VTdGFydFZhbHVlID0gKHN0YXJ0OiBzdHJpbmcpOiBPcHRpb25hbDxMaXN0RGV0YWlsPiA9PiB7XG4gIHN3aXRjaCAoZGVkdWNlTGlzdFR5cGUoc3RhcnQpKSB7XG4gICAgY2FzZSBMaXN0VHlwZS5OdW1lcmljOlxuICAgICAgcmV0dXJuIE9wdGlvbmFsLnNvbWUoe1xuICAgICAgICBsaXN0U3R5bGVUeXBlOiBPcHRpb25hbC5ub25lKCksXG4gICAgICAgIHN0YXJ0XG4gICAgICB9KTtcblxuICAgIGNhc2UgTGlzdFR5cGUuVXBwZXJBbHBoYTpcbiAgICAgIHJldHVybiBPcHRpb25hbC5zb21lKHtcbiAgICAgICAgbGlzdFN0eWxlVHlwZTogT3B0aW9uYWwuc29tZSgndXBwZXItYWxwaGEnKSxcbiAgICAgICAgc3RhcnQ6IHBhcnNlQWxwaGFiZXRpY0Jhc2UyNihzdGFydCkudG9TdHJpbmcoKVxuICAgICAgfSk7XG5cbiAgICBjYXNlIExpc3RUeXBlLkxvd2VyQWxwaGE6XG4gICAgICByZXR1cm4gT3B0aW9uYWwuc29tZSh7XG4gICAgICAgIGxpc3RTdHlsZVR5cGU6IE9wdGlvbmFsLnNvbWUoJ2xvd2VyLWFscGhhJyksXG4gICAgICAgIHN0YXJ0OiBwYXJzZUFscGhhYmV0aWNCYXNlMjYoc3RhcnQpLnRvU3RyaW5nKClcbiAgICAgIH0pO1xuXG4gICAgY2FzZSBMaXN0VHlwZS5Ob25lOlxuICAgICAgcmV0dXJuIE9wdGlvbmFsLnNvbWUoe1xuICAgICAgICBsaXN0U3R5bGVUeXBlOiBPcHRpb25hbC5ub25lKCksXG4gICAgICAgIHN0YXJ0OiAnJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlIExpc3RUeXBlLlVua25vd246XG4gICAgICByZXR1cm4gT3B0aW9uYWwubm9uZSgpO1xuICB9XG59O1xuXG5jb25zdCBwYXJzZURldGFpbCA9IChkZXRhaWw6IExpc3REZXRhaWwpOiBzdHJpbmcgPT4ge1xuICBjb25zdCBzdGFydCA9IHBhcnNlSW50KGRldGFpbC5zdGFydCwgMTApO1xuXG4gIGlmIChPcHRpb25hbHMuaXMoZGV0YWlsLmxpc3RTdHlsZVR5cGUsICd1cHBlci1hbHBoYScpKSB7XG4gICAgcmV0dXJuIGNvbXBvc2VBbHBoYWJldGljQmFzZTI2KHN0YXJ0KTtcbiAgfSBlbHNlIGlmIChPcHRpb25hbHMuaXMoZGV0YWlsLmxpc3RTdHlsZVR5cGUsICdsb3dlci1hbHBoYScpKSB7XG4gICAgcmV0dXJuIGNvbXBvc2VBbHBoYWJldGljQmFzZTI2KHN0YXJ0KS50b0xvd2VyQ2FzZSgpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBkZXRhaWwuc3RhcnQ7XG4gIH1cbn07XG5cbmV4cG9ydCB7XG4gIHBhcnNlRGV0YWlsLFxuICBwYXJzZVN0YXJ0VmFsdWVcbn07XG4iLCJpbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuaW1wb3J0IHR5cGUgeyBOb2RlQ2hhbmdlRXZlbnQgfSBmcm9tICd0aW55bWNlL2NvcmUvYXBpL0V2ZW50VHlwZXMnO1xuaW1wb3J0IHR5cGUgeyBNZW51IH0gZnJvbSAndGlueW1jZS9jb3JlL2FwaS91aS9VaSc7XG5cbmltcG9ydCAqIGFzIFV0aWwgZnJvbSAnLi9VdGlsJztcblxuY29uc3Qgc2V0dXBNZW51QnV0dG9uSGFuZGxlciA9IChlZGl0b3I6IEVkaXRvciwgbGlzdE5hbWU6IHN0cmluZykgPT4gKGFwaTogTWVudS5NZW51SXRlbUluc3RhbmNlQXBpKTogKCkgPT4gdm9pZCA9PiB7XG4gIGNvbnN0IG1lbnVCdXR0b25IYW5kbGVyID0gKGU6IE5vZGVDaGFuZ2VFdmVudCkgPT5cbiAgICBhcGkuc2V0RW5hYmxlZChVdGlsLmluTGlzdChlLnBhcmVudHMsIGxpc3ROYW1lKSAmJiAhVXRpbC5pc1dpdGhpbk5vbkVkaXRhYmxlTGlzdChlZGl0b3IsIGUuZWxlbWVudCkpO1xuICByZXR1cm4gVXRpbC5zZXROb2RlQ2hhbmdlSGFuZGxlcihlZGl0b3IsIG1lbnVCdXR0b25IYW5kbGVyKTtcbn07XG5cbmNvbnN0IHJlZ2lzdGVyID0gKGVkaXRvcjogRWRpdG9yKTogdm9pZCA9PiB7XG4gIGNvbnN0IGxpc3RQcm9wZXJ0aWVzOiBNZW51Lk1lbnVJdGVtU3BlYyA9IHtcbiAgICB0ZXh0OiAnTGlzdCBwcm9wZXJ0aWVzLi4uJyxcbiAgICBpY29uOiAnb3JkZXJlZC1saXN0JyxcbiAgICBvbkFjdGlvbjogKCkgPT4gZWRpdG9yLmV4ZWNDb21tYW5kKCdtY2VMaXN0UHJvcHMnKSxcbiAgICBvblNldHVwOiBzZXR1cE1lbnVCdXR0b25IYW5kbGVyKGVkaXRvciwgJ09MJylcbiAgfTtcblxuICBlZGl0b3IudWkucmVnaXN0cnkuYWRkTWVudUl0ZW0oJ2xpc3Rwcm9wcycsIGxpc3RQcm9wZXJ0aWVzKTtcblxuICBlZGl0b3IudWkucmVnaXN0cnkuYWRkQ29udGV4dE1lbnUoJ2xpc3RzJywge1xuICAgIHVwZGF0ZTogKG5vZGUpID0+IHtcbiAgICAgIGNvbnN0IHBhcmVudExpc3QgPSBVdGlsLmdldFBhcmVudExpc3QoZWRpdG9yLCBub2RlKTtcbiAgICAgIHJldHVybiBVdGlsLmlzT2xOb2RlKHBhcmVudExpc3QpID8gWyAnbGlzdHByb3BzJyBdIDogWyBdO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQge1xuICByZWdpc3RlclxufTtcbiIsImltcG9ydCB7IEFyciwgVHlwZSB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmltcG9ydCB0eXBlIEVkaXRvciBmcm9tICd0aW55bWNlL2NvcmUvYXBpL0VkaXRvcic7XG5pbXBvcnQgdHlwZSB7IE5vZGVDaGFuZ2VFdmVudCB9IGZyb20gJ3RpbnltY2UvY29yZS9hcGkvRXZlbnRUeXBlcyc7XG5pbXBvcnQgdHlwZSBTY2hlbWEgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9odG1sL1NjaGVtYSc7XG5cbmltcG9ydCB7IGdldEZvcmNlZFJvb3RCbG9jayB9IGZyb20gJy4uL2FwaS9PcHRpb25zJztcblxuY29uc3QgaXNDdXN0b21MaXN0ID0gKGxpc3Q6IEhUTUxFbGVtZW50KTogYm9vbGVhbiA9PlxuICAvXFxidG94XFwtLy50ZXN0KGxpc3QuY2xhc3NOYW1lKTtcblxuY29uc3QgbWF0Y2hOb2RlTmFtZXMgPSA8VCBleHRlbmRzIE5vZGUgPSBOb2RlPihyZWdleDogUmVnRXhwKSA9PlxuICAobm9kZTogTm9kZSB8IG51bGwpOiBub2RlIGlzIFQgPT4gVHlwZS5pc05vbk51bGxhYmxlKG5vZGUpICYmIHJlZ2V4LnRlc3Qobm9kZS5ub2RlTmFtZSk7XG5cbmNvbnN0IG1hdGNoTm9kZU5hbWUgPSA8VCBleHRlbmRzIE5vZGUgPSBOb2RlPihuYW1lOiBzdHJpbmcpID0+XG4gIChub2RlOiBOb2RlIHwgbnVsbCk6IG5vZGUgaXMgVCA9PiBUeXBlLmlzTm9uTnVsbGFibGUobm9kZSkgJiYgbm9kZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBuYW1lO1xuXG5jb25zdCBpc0xpc3ROb2RlID0gbWF0Y2hOb2RlTmFtZXM8SFRNTE9MaXN0RWxlbWVudCB8IEhUTUxVTGlzdEVsZW1lbnQgfCBIVE1MRExpc3RFbGVtZW50PigvXihPTHxVTHxETCkkLyk7XG5cbmNvbnN0IGlzVGFibGVDZWxsTm9kZSA9IG1hdGNoTm9kZU5hbWVzPEhUTUxUYWJsZUhlYWRlckNlbGxFbGVtZW50IHwgSFRNTFRhYmxlQ2VsbEVsZW1lbnQ+KC9eKFRIfFREKSQvKTtcblxuY29uc3QgaXNMaXN0SXRlbU5vZGUgPSBtYXRjaE5vZGVOYW1lczxIVE1MTElFbGVtZW50IHwgSFRNTEVsZW1lbnQ+KC9eKExJfERUfEREKSQvKTtcblxuY29uc3QgaW5MaXN0ID0gKHBhcmVudHM6IE5vZGVbXSwgbGlzdE5hbWU6IHN0cmluZyk6IGJvb2xlYW4gPT5cbiAgQXJyLmZpbmRVbnRpbChwYXJlbnRzLCBpc0xpc3ROb2RlLCBpc1RhYmxlQ2VsbE5vZGUpXG4gICAgLmV4aXN0cygobGlzdCkgPT4gbGlzdC5ub2RlTmFtZSA9PT0gbGlzdE5hbWUgJiYgIWlzQ3VzdG9tTGlzdChsaXN0KSk7XG5cbmNvbnN0IHNldE5vZGVDaGFuZ2VIYW5kbGVyID0gKGVkaXRvcjogRWRpdG9yLCBub2RlQ2hhbmdlSGFuZGxlcjogKGU6IE5vZGVDaGFuZ2VFdmVudCkgPT4gdm9pZCk6ICgpID0+IHZvaWQgPT4ge1xuICBjb25zdCBpbml0aWFsTm9kZSA9IGVkaXRvci5zZWxlY3Rpb24uZ2V0Tm9kZSgpO1xuICAvLyBTZXQgdGhlIGluaXRpYWwgc3RhdGVcbiAgbm9kZUNoYW5nZUhhbmRsZXIoe1xuICAgIHBhcmVudHM6IGVkaXRvci5kb20uZ2V0UGFyZW50cyhpbml0aWFsTm9kZSksXG4gICAgZWxlbWVudDogaW5pdGlhbE5vZGVcbiAgfSk7XG4gIGVkaXRvci5vbignTm9kZUNoYW5nZScsIG5vZGVDaGFuZ2VIYW5kbGVyKTtcbiAgcmV0dXJuICgpID0+IGVkaXRvci5vZmYoJ05vZGVDaGFuZ2UnLCBub2RlQ2hhbmdlSGFuZGxlcik7XG59O1xuXG5jb25zdCBpc1dpdGhpbk5vbkVkaXRhYmxlID0gKGVkaXRvcjogRWRpdG9yLCBlbGVtZW50OiBFbGVtZW50IHwgbnVsbCk6IGJvb2xlYW4gPT5cbiAgZWxlbWVudCAhPT0gbnVsbCAmJiAhZWRpdG9yLmRvbS5pc0VkaXRhYmxlKGVsZW1lbnQpO1xuXG5jb25zdCBpc1dpdGhpbk5vbkVkaXRhYmxlTGlzdCA9IChlZGl0b3I6IEVkaXRvciwgZWxlbWVudDogRWxlbWVudCB8IG51bGwpOiBib29sZWFuID0+IHtcbiAgY29uc3QgcGFyZW50TGlzdCA9IGVkaXRvci5kb20uZ2V0UGFyZW50KGVsZW1lbnQsICdvbCx1bCxkbCcpO1xuICByZXR1cm4gaXNXaXRoaW5Ob25FZGl0YWJsZShlZGl0b3IsIHBhcmVudExpc3QpIHx8ICFlZGl0b3Iuc2VsZWN0aW9uLmlzRWRpdGFibGUoKTtcbn07XG5cbmNvbnN0IGlzT2xOb2RlID0gbWF0Y2hOb2RlTmFtZTxIVE1MT0xpc3RFbGVtZW50Pignb2wnKTtcblxuY29uc3QgbGlzdE5hbWVzID0gWyAnT0wnLCAnVUwnLCAnREwnIF07XG5jb25zdCBsaXN0U2VsZWN0b3IgPSBsaXN0TmFtZXMuam9pbignLCcpO1xuXG5jb25zdCBnZXRQYXJlbnRMaXN0ID0gKGVkaXRvcjogRWRpdG9yLCBub2RlPzogTm9kZSk6IEhUTUxFbGVtZW50IHwgbnVsbCA9PiB7XG4gIGNvbnN0IHNlbGVjdGlvblN0YXJ0ID0gbm9kZSB8fCBlZGl0b3Iuc2VsZWN0aW9uLmdldFN0YXJ0KHRydWUpO1xuXG4gIHJldHVybiBlZGl0b3IuZG9tLmdldFBhcmVudChzZWxlY3Rpb25TdGFydCwgbGlzdFNlbGVjdG9yLCBnZXRDbG9zZXN0TGlzdEhvc3QoZWRpdG9yLCBzZWxlY3Rpb25TdGFydCkpO1xufTtcblxuY29uc3QgZ2V0Q2xvc2VzdExpc3RIb3N0ID0gKGVkaXRvcjogRWRpdG9yLCBlbG06IE5vZGUpOiBIVE1MRWxlbWVudCA9PiB7XG4gIGNvbnN0IHBhcmVudEJsb2NrcyA9IGVkaXRvci5kb20uZ2V0UGFyZW50czxIVE1MRWxlbWVudD4oZWxtLCBlZGl0b3IuZG9tLmlzQmxvY2spO1xuICBjb25zdCBpc05vdEZvcmNlZFJvb3RCbG9jayA9IChlbG06IEhUTUxFbGVtZW50KSA9PiBlbG0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSAhPT0gZ2V0Rm9yY2VkUm9vdEJsb2NrKGVkaXRvcik7XG4gIGNvbnN0IHBhcmVudEJsb2NrID0gQXJyLmZpbmQocGFyZW50QmxvY2tzLCAoZWxtKSA9PiBpc05vdEZvcmNlZFJvb3RCbG9jayhlbG0pICYmIGlzTGlzdEhvc3QoZWRpdG9yLnNjaGVtYSwgZWxtKSk7XG5cbiAgcmV0dXJuIHBhcmVudEJsb2NrLmdldE9yKGVkaXRvci5nZXRCb2R5KCkpO1xufTtcblxuY29uc3QgaXNMaXN0SG9zdCA9IChzY2hlbWE6IFNjaGVtYSwgbm9kZTogTm9kZSk6IGJvb2xlYW4gPT5cbiAgIWlzTGlzdE5vZGUobm9kZSkgJiYgIWlzTGlzdEl0ZW1Ob2RlKG5vZGUpICYmIEFyci5leGlzdHMobGlzdE5hbWVzLCAobGlzdE5hbWUpID0+IHNjaGVtYS5pc1ZhbGlkQ2hpbGQobm9kZS5ub2RlTmFtZSwgbGlzdE5hbWUpKTtcblxuZXhwb3J0IHtcbiAgZ2V0UGFyZW50TGlzdCxcbiAgaW5MaXN0LFxuICBpc09sTm9kZSxcbiAgaXNXaXRoaW5Ob25FZGl0YWJsZUxpc3QsXG4gIHNldE5vZGVDaGFuZ2VIYW5kbGVyXG59O1xuIiwiaW1wb3J0ICogYXMgVHlwZSBmcm9tICcuLi9jb3JlL1R5cGUnO1xuaW1wb3J0ICogYXMgQXJyYXlVdGlsIGZyb20gJy4uL2NvcmUvQXJyYXlVdGlsJztcblxuLyoqIEEgd2F5IG9mIGNvbXBhcmluZyB0d28gdmFsdWVzIG9mIHRoZSBzYW1lIHR5cGUgZm9yIGVxdWFsaXR5LiAqL1xuZXhwb3J0IGludGVyZmFjZSBFcTxBPiB7XG4gIGVxOiAoeDogQSwgeTogQSkgPT4gYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGNvbnRyYW1hcCA9IDxBLCBCPiAoZXFhOiBFcTxBPiwgZjogKGI6IEIpID0+IEEpOiBFcTxCPiA9PlxuICBlcSgoeCwgeSkgPT4gZXFhLmVxKGYoeCksIGYoeSkpKTtcblxuZXhwb3J0IGNvbnN0IGVxID0gPEE+IChmOiAoeDogQSwgeTogQSkgPT4gYm9vbGVhbik6IEVxPEE+ID0+XG4gICh7IGVxOiBmIH0pO1xuXG5leHBvcnQgY29uc3QgdHJpcGxlRXE6IEVxPGFueT4gPSBlcSgoeCwgeSkgPT4geCA9PT0geSk7XG5cbmV4cG9ydCBjb25zdCBlcVN0cmluZzogRXE8c3RyaW5nPiA9IHRyaXBsZUVxO1xuXG5leHBvcnQgY29uc3QgZXFCb29sZWFuOiBFcTxib29sZWFuPiA9IHRyaXBsZUVxO1xuXG5leHBvcnQgY29uc3QgZXFOdW1iZXI6IEVxPG51bWJlcj4gPSB0cmlwbGVFcTtcblxuZXhwb3J0IGNvbnN0IGVxVW5kZWZpbmVkOiBFcTx1bmRlZmluZWQ+ID0gdHJpcGxlRXE7XG5cbmV4cG9ydCBjb25zdCBlcU51bGw6IEVxPG51bGw+ID0gdHJpcGxlRXE7XG5cbmV4cG9ydCBjb25zdCBlcUFycmF5ID0gPEE+IChlcWE6IEVxPEE+KTogRXE8QXJyYXlMaWtlPEE+PiA9PiBlcSgoeCwgeSkgPT4ge1xuICBpZiAoeC5sZW5ndGggIT09IHkubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGxlbiA9IHgubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKCFlcWEuZXEoeFtpXSwgeVtpXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59KTtcblxuLy8gVE9ETzogTWFrZSBhbiBPcmQgdHlwZWNsYXNzXG5jb25zdCBlcVNvcnRlZEFycmF5ID0gPEE+KGVxYTogRXE8QT4sIGNvbXBhcmVGbj86IChhOiBBLCBiOiBBKSA9PiBudW1iZXIpOiBFcTxBcnJheUxpa2U8QT4+ID0+XG4gIGNvbnRyYW1hcChlcUFycmF5KGVxYSksICh4cykgPT4gQXJyYXlVdGlsLnNvcnQoeHMsIGNvbXBhcmVGbikpO1xuXG5leHBvcnQgY29uc3QgZXFSZWNvcmQgPSA8QT4gKGVxYTogRXE8QT4pOiBFcTxSZWNvcmQ8c3RyaW5nLCBBPj4gPT4gZXEoKHgsIHkpID0+IHtcbiAgY29uc3Qga3ggPSBPYmplY3Qua2V5cyh4KTtcbiAgY29uc3Qga3kgPSBPYmplY3Qua2V5cyh5KTtcbiAgaWYgKCFlcVNvcnRlZEFycmF5KGVxU3RyaW5nKS5lcShreCwga3kpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGxlbiA9IGt4Lmxlbmd0aDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHEgPSBreFtpXTtcbiAgICBpZiAoIWVxYS5lcSh4W3FdLCB5W3FdKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn0pO1xuXG5leHBvcnQgY29uc3QgZXFBbnk6IEVxPGFueT4gPSBlcSgoeCwgeSkgPT4ge1xuICBpZiAoeCA9PT0geSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgY29uc3QgdHggPSBUeXBlLnR5cGVPZih4KTtcbiAgY29uc3QgdHkgPSBUeXBlLnR5cGVPZih5KTtcbiAgaWYgKHR4ICE9PSB0eSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChUeXBlLmlzRXF1YXRhYmxlVHlwZSh0eCkpIHtcbiAgICByZXR1cm4geCA9PT0geTtcblxuICB9IGVsc2UgaWYgKHR4ID09PSAnYXJyYXknKSB7XG4gICAgcmV0dXJuIGVxQXJyYXkoZXFBbnkpLmVxKHgsIHkpO1xuXG4gIH0gZWxzZSBpZiAodHggPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGVxUmVjb3JkKGVxQW55KS5lcSh4LCB5KTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn0pO1xuIiwiZXhwb3J0IGNvbnN0IG1hcCA9IDxBLCBCPih4czogQXJyYXlMaWtlPEE+LCBmOiAoYTogQSkgPT4gQik6IEJbXSA9PiB7XG4gIGNvbnN0IGxlbiA9IHhzLmxlbmd0aDtcbiAgY29uc3QgciA9IG5ldyBBcnJheShsZW4pO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIHJbaV0gPSBmKHgpO1xuICB9XG4gIHJldHVybiByO1xufTtcblxuLyoqIG1hcCBhIGZ1bmN0aW9uIG92ZXIgYW4gYXJyYXksIHRoZW4gbWFwIGFub3RoZXIgZnVuY3Rpb24gb3ZlciBldmVyeSBpdGVtIGV4Y2VwdCB0aGUgbGFzdCAqL1xuZXhwb3J0IGNvbnN0IG1hcERlbGltaXQgPSA8QSwgQj4gKHhzOiBBcnJheUxpa2U8QT4sIGY6IChhOiBBKSA9PiBCLCBkZWxpbWl0OiAoYjogQikgPT4gQik6IEJbXSA9PiB7XG4gIGNvbnN0IGxlbiA9IHhzLmxlbmd0aDtcbiAgY29uc3QgciA9IG5ldyBBcnJheShsZW4pO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbiAtIDE7IGkrKykge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICByW2ldID0gZGVsaW1pdChmKHgpKTtcbiAgfVxuICBpZiAobGVuID4gMCkge1xuICAgIHJbbGVuIC0gMV0gPSAoZih4c1tsZW4gLSAxXSkpO1xuICB9XG5cbiAgcmV0dXJuIHI7XG59O1xuXG5leHBvcnQgY29uc3Qgc29ydCA9IDxBPiAoeHM6IEFycmF5TGlrZTxBPiwgY29tcGFyZUZuPzogKGE6IEEsIGI6IEEpID0+IG51bWJlcik6IEFbXSA9PiB7XG4gIGNvbnN0IGNsb25lOiBBW10gPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh4cyk7XG4gIHJldHVybiBjbG9uZS5zb3J0KGNvbXBhcmVGbik7XG59O1xuIiwiZXhwb3J0IGNvbnN0IHR5cGVPZiA9ICh4OiBhbnkpID0+IHtcbiAgaWYgKHggPT09IG51bGwpIHtcbiAgICByZXR1cm4gJ251bGwnO1xuICB9XG4gIGlmICh4ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gJ3VuZGVmaW5lZCc7XG4gIH1cbiAgY29uc3QgdCA9IHR5cGVvZiB4O1xuICBpZiAodCA9PT0gJ29iamVjdCcgJiYgKEFycmF5LnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKHgpIHx8IHguY29uc3RydWN0b3IgJiYgeC5jb25zdHJ1Y3Rvci5uYW1lID09PSAnQXJyYXknKSkge1xuICAgIHJldHVybiAnYXJyYXknO1xuICB9XG4gIGlmICh0ID09PSAnb2JqZWN0JyAmJiAoU3RyaW5nLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKHgpIHx8IHguY29uc3RydWN0b3IgJiYgeC5jb25zdHJ1Y3Rvci5uYW1lID09PSAnU3RyaW5nJykpIHtcbiAgICByZXR1cm4gJ3N0cmluZyc7XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG5jb25zdCBpc1R5cGUgPSA8VD4odHlwZTogc3RyaW5nKSA9PiAodmFsdWU6IGFueSk6IHZhbHVlIGlzIFQgPT4gdHlwZU9mKHZhbHVlKSA9PT0gdHlwZTtcblxuZXhwb3J0IGNvbnN0IGlzU3RyaW5nID0gaXNUeXBlPHN0cmluZz4oJ3N0cmluZycpO1xuZXhwb3J0IGNvbnN0IGlzT2JqZWN0ID0gaXNUeXBlPE9iamVjdD4oJ29iamVjdCcpO1xuZXhwb3J0IGNvbnN0IGlzQXJyYXkgPSBpc1R5cGU8QXJyYXk8dW5rbm93bj4+KCdhcnJheScpO1xuZXhwb3J0IGNvbnN0IGlzTnVsbCA9IGlzVHlwZTxudWxsPignbnVsbCcpO1xuZXhwb3J0IGNvbnN0IGlzQm9vbGVhbiA9IGlzVHlwZTxib29sZWFuPignYm9vbGVhbicpO1xuZXhwb3J0IGNvbnN0IGlzVW5kZWZpbmVkID0gaXNUeXBlPHVuZGVmaW5lZD4oJ3VuZGVmaW5lZCcpO1xuZXhwb3J0IGNvbnN0IGlzRnVuY3Rpb24gPSBpc1R5cGU8RnVuY3Rpb24+KCdmdW5jdGlvbicpO1xuZXhwb3J0IGNvbnN0IGlzTnVtYmVyID0gaXNUeXBlPG51bWJlcj4oJ251bWJlcicpO1xuXG5leHBvcnQgY29uc3QgaXNFcXVhdGFibGVUeXBlID0gKHg6IHN0cmluZyk6IGJvb2xlYW4gPT5cbiAgWyAndW5kZWZpbmVkJywgJ2Jvb2xlYW4nLCAnbnVtYmVyJywgJ3N0cmluZycsICdmdW5jdGlvbicsICd4bWwnLCAnbnVsbCcgXS5pbmRleE9mKHgpICE9PSAtMTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcbiAgICAgICAgaWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuICAgICAgICB9XG4gICAgfVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydiA9ICgpID0+IChcIjEuNS4yXCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydWlkID0gXCJidW5kbGVyPXJzcGFja0AxLjUuMlwiO1xuIiwiaW1wb3J0IFBsdWdpbiBmcm9tICcuL1BsdWdpbic7XG5cblBsdWdpbigpO1xuXG4vKiogKioqKipcbiAqIERPIE5PVCBFWFBPUlQgQU5ZVEhJTkdcbiAqXG4gKiBJRiBZT1UgRE8gUk9MTFVQIFdJTEwgTEVBVkUgQSBHTE9CQUwgT04gVEhFIFBBR0VcbiAqKioqKioqL1xuIl0sIm5hbWVzIjpbIkVxIiwiRnVuIiwiT3B0aW9uYWwiLCJUeXBlIiwibmF0aXZlU2xpY2UiLCJBcnJheSIsIm5hdGl2ZUluZGV4T2YiLCJuYXRpdmVQdXNoIiwicmF3SW5kZXhPZiIsInRzIiwidCIsImluZGV4T2YiLCJ4cyIsIngiLCJyIiwiY29udGFpbnMiLCJleGlzdHMiLCJwcmVkIiwiaSIsImxlbiIsInJhbmdlIiwibnVtIiwiZiIsImNodW5rIiwiYXJyYXkiLCJzaXplIiwicyIsIm1hcCIsImVhY2giLCJlYWNociIsInBhcnRpdGlvbiIsInBhc3MiLCJmYWlsIiwiYXJyIiwiZmlsdGVyIiwiZ3JvdXBCeSIsIndhc1R5cGUiLCJncm91cCIsInR5cGUiLCJmb2xkciIsImFjYyIsImZvbGRsIiwiZmluZFVudGlsIiwidW50aWwiLCJmaW5kIiwiZmluZEluZGV4IiwiZmluZExhc3RJbmRleCIsImZsYXR0ZW4iLCJFcnJvciIsImJpbmQiLCJmb3JhbGwiLCJlcXVhbCIsImExIiwiYTIiLCJlcSIsInJldmVyc2UiLCJkaWZmZXJlbmNlIiwibWFwVG9PYmplY3QiLCJTdHJpbmciLCJwdXJlIiwic29ydCIsImNvbXBhcmF0b3IiLCJjb3B5IiwiZ2V0IiwiaGVhZCIsImxhc3QiLCJmcm9tIiwiZmluZE1hcCIsInVuaXF1ZSIsImlzRHVwbGljYXRlZCIsIm5vb3AiLCJub2FyZyIsImNvbXBvc2UiLCJmYSIsImZiIiwiYXJncyIsImNvbXBvc2UxIiwiZmJjIiwiZmFiIiwiYSIsImNvbnN0YW50IiwidmFsdWUiLCJpZGVudGl0eSIsInRyaXBsZUVxdWFscyIsImIiLCJjdXJyeSIsImZuIiwiaW5pdGlhbEFyZ3MiLCJyZXN0QXJncyIsImFsbCIsIm5vdCIsImRpZSIsIm1zZyIsImFwcGx5IiwiY2FsbCIsIm5ldmVyIiwiYWx3YXlzIiwid2Vha2VuIiwicGlwZSIsImFiIiwiYmMiLCJjZCIsImRlIiwiZWYiLCJmZyIsImdoIiwiYyIsImQiLCJlIiwiZyIsInRhZyIsIm9uTm9uZSIsIm9uU29tZSIsIm1hcHBlciIsImJpbmRlciIsInByZWRpY2F0ZSIsInJlcGxhY2VtZW50IiwidGh1bmsiLCJtZXNzYWdlIiwid29ya2VyIiwiQXJyIiwiaXMiLCJsaHMiLCJyaHMiLCJsZWZ0IiwiZXF1YWxzIiwibGlmdDIiLCJjYXQiLCJwdXNoIiwic2VxdWVuY2UiLCJ0cmF2ZXJzZSIsIm9hIiwib2IiLCJsaWZ0MyIsIm9jIiwibGlmdDQiLCJvZCIsImxpZnQ1Iiwib2UiLCJtYXBGcm9tIiwidW5kZWZpbmVkIiwiYmluZEZyb20iLCJvb3QiLCJzb21lSWYiLCJTdHJBcHBlbmQiLCJjaGVja1JhbmdlIiwic3RyIiwic3Vic3RyIiwic3RhcnQiLCJzdXBwbGFudCIsIm9iaiIsImlzU3RyaW5nT3JOdW1iZXIiLCJmdWxsTWF0Y2giLCJrZXkiLCJyZW1vdmVMZWFkaW5nIiwicHJlZml4Iiwic3RhcnRzV2l0aCIsInJlbW92ZVRyYWlsaW5nIiwic3VmZml4IiwiZW5kc1dpdGgiLCJlbnN1cmVMZWFkaW5nIiwiZW5zdXJlVHJhaWxpbmciLCJlbmQiLCJpZHgiLCJjYXBpdGFsaXplIiwiYmxhbmsiLCJ0cmltIiwibFRyaW0iLCJyVHJpbSIsImlzTm90RW1wdHkiLCJpc0VtcHR5IiwicmVwZWF0IiwiY291bnQiLCJmcm9tQ29kZVBvaW50IiwidG9JbnQiLCJyYWRpeCIsInBhcnNlSW50IiwiaXNOYU4iLCJ0b0Zsb2F0IiwicGFyc2VGbG9hdCIsImdldFByb3RvdHlwZU9mIiwiT2JqZWN0IiwiaGFzUHJvdG8iLCJ2IiwiY29uc3RydWN0b3IiLCJ0eXBlT2YiLCJvIiwicHJvdG8iLCJpc1R5cGUiLCJpc1NpbXBsZVR5cGUiLCJpc09iamVjdCIsImlzU3RyaW5nIiwiaXNQbGFpbk9iamVjdCIsImlzQXJyYXkiLCJpc051bGwiLCJpc0Jvb2xlYW4iLCJpc1VuZGVmaW5lZCIsImlzTnVsbGFibGUiLCJpc05vbk51bGxhYmxlIiwiaXNGdW5jdGlvbiIsImlzTnVtYmVyIiwiaXNBcnJheU9mIiwiaXNQcm9taXNlTGlrZSIsImFkZFRvU3RhcnQiLCJhZGRUb0VuZCIsInJlbW92ZUZyb21TdGFydCIsIm51bUNoYXJzIiwicmVtb3ZlRnJvbUVuZCIsIlBsdWdpbk1hbmFnZXIiLCJBcGkiLCJDb21tYW5kcyIsIkJ1dHRvbnMiLCJNZW51SXRlbXMiLCJlZGl0b3IiLCJpc0ZvcndhcmQiLCJEaWFsb2ciLCJyZWdpc3RlciIsIm9wdGlvbiIsIm5hbWUiLCJnZXRGb3JjZWRSb290QmxvY2siLCJVdGlsIiwic2V0dXBUb2dnbGVCdXR0b25IYW5kbGVyIiwibGlzdE5hbWUiLCJhcGkiLCJ0b2dnbGVCdXR0b25IYW5kbGVyIiwiZXhlYyIsImNvbW1hbmQiLCJwYXJzZURldGFpbCIsInBhcnNlU3RhcnRWYWx1ZSIsImdldFBhcmVudExpc3QiLCJpc09sTm9kZSIsImlzV2l0aGluTm9uRWRpdGFibGVMaXN0Iiwib3BlbiIsImN1cnJlbnRMaXN0IiwiZGF0YSIsImRldGFpbCIsIk9wdGlvbmFscyIsIlN0cmluZ3MiLCJwYXJzZUFscGhhYmV0aWNCYXNlMjYiLCJjaGFycyIsInZhbHVlcyIsImNoYXIiLCJjaGFyVmFsdWUiLCJNYXRoIiwic3VtIiwiY29tcG9zZUFscGhhYmV0aWNCYXNlMjYiLCJyZW1haW5kZXIiLCJxdW90aWVudCIsInJlc3QiLCJpc1VwcGVyY2FzZSIsImlzTG93ZXJjYXNlIiwiaXNOdW1lcmljIiwiZGVkdWNlTGlzdFR5cGUiLCJzZXR1cE1lbnVCdXR0b25IYW5kbGVyIiwibWVudUJ1dHRvbkhhbmRsZXIiLCJsaXN0UHJvcGVydGllcyIsIm5vZGUiLCJwYXJlbnRMaXN0IiwiaXNDdXN0b21MaXN0IiwibGlzdCIsIm1hdGNoTm9kZU5hbWVzIiwicmVnZXgiLCJtYXRjaE5vZGVOYW1lIiwiaXNMaXN0Tm9kZSIsImlzVGFibGVDZWxsTm9kZSIsImlzTGlzdEl0ZW1Ob2RlIiwiaW5MaXN0IiwicGFyZW50cyIsInNldE5vZGVDaGFuZ2VIYW5kbGVyIiwibm9kZUNoYW5nZUhhbmRsZXIiLCJpbml0aWFsTm9kZSIsImlzV2l0aGluTm9uRWRpdGFibGUiLCJlbGVtZW50IiwibGlzdE5hbWVzIiwibGlzdFNlbGVjdG9yIiwic2VsZWN0aW9uU3RhcnQiLCJnZXRDbG9zZXN0TGlzdEhvc3QiLCJlbG0iLCJwYXJlbnRCbG9ja3MiLCJpc05vdEZvcmNlZFJvb3RCbG9jayIsInBhcmVudEJsb2NrIiwiaXNMaXN0SG9zdCIsInNjaGVtYSIsIlBsdWdpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLDZEQUFlLE1BQU0sRUFBQztBQUNmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNINkI7QUFFUDtBQUNTO0FBQ1A7QUFPL0IsTUFBTUksY0FBY0MsTUFBTSxTQUFTLENBQUMsS0FBSztBQUN6QyxNQUFNQyxnQkFBZ0JELE1BQU0sU0FBUyxDQUFDLE9BQU87QUFDN0MsTUFBTUUsYUFBYUYsTUFBTSxTQUFTLENBQUMsSUFBSTtBQUV2QyxNQUFNRyxhQUFhLENBQUtDLElBQWtCQyxJQUN4Q0osY0FBYyxJQUFJLENBQUNHLElBQUlDO0FBRWxCLE1BQU1DLFVBQVUsQ0FBVUMsSUFBa0JDO0lBQ2pELHdGQUF3RjtJQUN4RixNQUFNQyxJQUFJTixXQUFXSSxJQUFJQztJQUN6QixPQUFPQyxNQUFNLENBQUMsSUFBSVosb0RBQWEsS0FBS0Esb0RBQWEsQ0FBQ1k7QUFDcEQsRUFBRTtBQUVLLE1BQU1DLFdBQVcsQ0FBSUgsSUFBa0JDLElBQWtCTCxXQUFXSSxJQUFJQyxLQUFLLENBQUMsRUFBRTtBQUVoRixNQUFNRyxTQUFTLENBQVVKLElBQWtCSztJQUNoRCxJQUFLLElBQUlDLElBQUksR0FBR0MsTUFBTVAsR0FBRyxNQUFNLEVBQUVNLElBQUlDLEtBQUtELElBQUs7UUFDN0MsTUFBTUwsSUFBSUQsRUFBRSxDQUFDTSxFQUFFO1FBQ2YsSUFBSUQsS0FBS0osR0FBR0ssSUFBSTtZQUNkLE9BQU87UUFDVDtJQUNGO0lBRUEsT0FBTztBQUNULEVBQUU7QUFFSyxNQUFNRSxRQUFRLENBQUlDLEtBQWFDO0lBQ3BDLE1BQU1SLElBQVMsRUFBRTtJQUNqQixJQUFLLElBQUlJLElBQUksR0FBR0EsSUFBSUcsS0FBS0gsSUFBSztRQUM1QkosRUFBRSxJQUFJLENBQUNRLEVBQUVKO0lBQ1g7SUFDQSxPQUFPSjtBQUNULEVBQUU7QUFFRixzRUFBc0U7QUFDdEUsK0NBQStDO0FBQy9DLG1CQUFtQjtBQUNuQiw0REFBNEQ7QUFDNUQsbUJBQW1CO0FBQ25CLHNEQUFzRDtBQUUvQyxNQUFNUyxRQUFRLENBQUlDLE9BQXFCQztJQUM1QyxNQUFNWCxJQUFXLEVBQUU7SUFDbkIsSUFBSyxJQUFJSSxJQUFJLEdBQUdBLElBQUlNLE1BQU0sTUFBTSxFQUFFTixLQUFLTyxLQUFNO1FBQzNDLE1BQU1DLElBQVN0QixZQUFZLElBQUksQ0FBQ29CLE9BQU9OLEdBQUdBLElBQUlPO1FBQzlDWCxFQUFFLElBQUksQ0FBQ1k7SUFDVDtJQUNBLE9BQU9aO0FBQ1QsRUFBRTtBQUVLLE1BQU1hLE1BQU0sQ0FBbUJmLElBQWtCVTtJQUN0RCw2REFBNkQ7SUFDN0QsaURBQWlEO0lBQ2pELE1BQU1ILE1BQU1QLEdBQUcsTUFBTTtJQUNyQixNQUFNRSxJQUFJLElBQUlULE1BQU1jO0lBQ3BCLElBQUssSUFBSUQsSUFBSSxHQUFHQSxJQUFJQyxLQUFLRCxJQUFLO1FBQzVCLE1BQU1MLElBQUlELEVBQUUsQ0FBQ00sRUFBRTtRQUNmSixDQUFDLENBQUNJLEVBQUUsR0FBR0ksRUFBRVQsR0FBR0s7SUFDZDtJQUNBLE9BQU9KO0FBQ1QsRUFBRTtBQUVGLHlEQUF5RDtBQUN6RCxrRkFBa0Y7QUFDbEYsd0ZBQXdGO0FBQ2pGLE1BQU1jLE9BQU8sQ0FBVWhCLElBQWtCVTtJQUM5QyxJQUFLLElBQUlKLElBQUksR0FBR0MsTUFBTVAsR0FBRyxNQUFNLEVBQUVNLElBQUlDLEtBQUtELElBQUs7UUFDN0MsTUFBTUwsSUFBSUQsRUFBRSxDQUFDTSxFQUFFO1FBQ2ZJLEVBQUVULEdBQUdLO0lBQ1A7QUFDRixFQUFFO0FBRUssTUFBTVcsUUFBUSxDQUFJakIsSUFBa0JVO0lBQ3pDLElBQUssSUFBSUosSUFBSU4sR0FBRyxNQUFNLEdBQUcsR0FBR00sS0FBSyxHQUFHQSxJQUFLO1FBQ3ZDLE1BQU1MLElBQUlELEVBQUUsQ0FBQ00sRUFBRTtRQUNmSSxFQUFFVCxHQUFHSztJQUNQO0FBQ0YsRUFBRTtBQUVLLE1BQU1ZLFlBQVksQ0FBVWxCLElBQWtCSztJQUNuRCxNQUFNYyxPQUFZLEVBQUU7SUFDcEIsTUFBTUMsT0FBWSxFQUFFO0lBQ3BCLElBQUssSUFBSWQsSUFBSSxHQUFHQyxNQUFNUCxHQUFHLE1BQU0sRUFBRU0sSUFBSUMsS0FBS0QsSUFBSztRQUM3QyxNQUFNTCxJQUFJRCxFQUFFLENBQUNNLEVBQUU7UUFDZixNQUFNZSxNQUFNaEIsS0FBS0osR0FBR0ssS0FBS2EsT0FBT0M7UUFDaENDLElBQUksSUFBSSxDQUFDcEI7SUFDWDtJQUNBLE9BQU87UUFBRWtCO1FBQU1DO0lBQUs7QUFDdEIsRUFBRTtBQUVLLE1BQU1FLFNBR1QsQ0FBSXRCLElBQWtCSztJQUN4QixNQUFNSCxJQUFTLEVBQUU7SUFDakIsSUFBSyxJQUFJSSxJQUFJLEdBQUdDLE1BQU1QLEdBQUcsTUFBTSxFQUFFTSxJQUFJQyxLQUFLRCxJQUFLO1FBQzdDLE1BQU1MLElBQUlELEVBQUUsQ0FBQ00sRUFBRTtRQUNmLElBQUlELEtBQUtKLEdBQUdLLElBQUk7WUFDZEosRUFBRSxJQUFJLENBQUNEO1FBQ1Q7SUFDRjtJQUNBLE9BQU9DO0FBQ1QsRUFBRTtBQUVGOzs7Ozs7Ozs7O0NBVUMsR0FDTSxNQUFNcUIsVUFBVSxDQUFJdkIsSUFBa0JVO0lBQzNDLElBQUlWLEdBQUcsTUFBTSxLQUFLLEdBQUc7UUFDbkIsT0FBTyxFQUFFO0lBQ1gsT0FBTztRQUNMLElBQUl3QixVQUFVZCxFQUFFVixFQUFFLENBQUMsRUFBRSxHQUFHLDRCQUE0QjtRQUNwRCxNQUFNRSxJQUFXLEVBQUU7UUFDbkIsSUFBSXVCLFFBQWEsRUFBRTtRQUVuQixJQUFLLElBQUluQixJQUFJLEdBQUdDLE1BQU1QLEdBQUcsTUFBTSxFQUFFTSxJQUFJQyxLQUFLRCxJQUFLO1lBQzdDLE1BQU1MLElBQUlELEVBQUUsQ0FBQ00sRUFBRTtZQUNmLE1BQU1vQixPQUFPaEIsRUFBRVQ7WUFDZixJQUFJeUIsU0FBU0YsU0FBUztnQkFDcEJ0QixFQUFFLElBQUksQ0FBQ3VCO2dCQUNQQSxRQUFRLEVBQUU7WUFDWjtZQUNBRCxVQUFVRTtZQUNWRCxNQUFNLElBQUksQ0FBQ3hCO1FBQ2I7UUFDQSxJQUFJd0IsTUFBTSxNQUFNLEtBQUssR0FBRztZQUN0QnZCLEVBQUUsSUFBSSxDQUFDdUI7UUFDVDtRQUNBLE9BQU92QjtJQUNUO0FBQ0YsRUFBRTtBQUVLLE1BQU15QixRQUFRLENBQU8zQixJQUFrQlUsR0FBbUNrQjtJQUMvRVgsTUFBTWpCLElBQUksQ0FBQ0MsR0FBR0s7UUFDWnNCLE1BQU1sQixFQUFFa0IsS0FBSzNCLEdBQUdLO0lBQ2xCO0lBQ0EsT0FBT3NCO0FBQ1QsRUFBRTtBQUVLLE1BQU1DLFFBQVEsQ0FBbUI3QixJQUFrQlUsR0FBbUNrQjtJQUMzRlosS0FBS2hCLElBQUksQ0FBQ0MsR0FBR0s7UUFDWHNCLE1BQU1sQixFQUFFa0IsS0FBSzNCLEdBQUdLO0lBQ2xCO0lBQ0EsT0FBT3NCO0FBQ1QsRUFBRTtBQUVLLE1BQU1FLFlBR1QsQ0FBSTlCLElBQWtCSyxNQUF5QjBCO0lBQ2pELElBQUssSUFBSXpCLElBQUksR0FBR0MsTUFBTVAsR0FBRyxNQUFNLEVBQUVNLElBQUlDLEtBQUtELElBQUs7UUFDN0MsTUFBTUwsSUFBSUQsRUFBRSxDQUFDTSxFQUFFO1FBQ2YsSUFBSUQsS0FBS0osR0FBR0ssSUFBSTtZQUNkLE9BQU9oQixvREFBYSxDQUFDVztRQUN2QixPQUFPLElBQUk4QixNQUFNOUIsR0FBR0ssSUFBSTtZQUN0QjtRQUNGO0lBQ0Y7SUFDQSxPQUFPaEIsb0RBQWE7QUFDdEIsRUFBRTtBQUVLLE1BQU0wQyxPQUdULENBQUloQyxJQUFrQks7SUFDeEIsT0FBT3lCLFVBQVU5QixJQUFJSyxNQUFNaEIsdUNBQVM7QUFDdEMsRUFBRTtBQUVLLE1BQU00QyxZQUFZLENBQUlqQyxJQUFrQks7SUFDN0MsSUFBSyxJQUFJQyxJQUFJLEdBQUdDLE1BQU1QLEdBQUcsTUFBTSxFQUFFTSxJQUFJQyxLQUFLRCxJQUFLO1FBQzdDLE1BQU1MLElBQUlELEVBQUUsQ0FBQ00sRUFBRTtRQUNmLElBQUlELEtBQUtKLEdBQUdLLElBQUk7WUFDZCxPQUFPaEIsb0RBQWEsQ0FBQ2dCO1FBQ3ZCO0lBQ0Y7SUFFQSxPQUFPaEIsb0RBQWE7QUFDdEIsRUFBRTtBQUVLLE1BQU00QyxnQkFBZ0IsQ0FBSWIsS0FBbUJoQjtJQUNsRCxJQUFLLElBQUlDLElBQUllLElBQUksTUFBTSxHQUFHLEdBQUdmLEtBQUssR0FBR0EsSUFBSztRQUN4QyxJQUFJRCxLQUFLZ0IsR0FBRyxDQUFDZixFQUFFLEVBQUVBLElBQUk7WUFDbkIsT0FBT2hCLG9EQUFhLENBQUNnQjtRQUN2QjtJQUNGO0lBRUEsT0FBT2hCLG9EQUFhO0FBQ3RCLEVBQUU7QUFFSyxNQUFNNkMsVUFBVSxDQUFJbkM7SUFDekIsbUVBQW1FO0lBQ25FLGtDQUFrQztJQUNsQyw0RkFBNEY7SUFDNUYsMkNBQTJDO0lBQzNDLE1BQU1FLElBQVMsRUFBRTtJQUNqQixJQUFLLElBQUlJLElBQUksR0FBR0MsTUFBTVAsR0FBRyxNQUFNLEVBQUVNLElBQUlDLEtBQUssRUFBRUQsRUFBRztRQUM3Qyw0Q0FBNEM7UUFDNUMsSUFBSSxDQUFDZiwwQ0FBWSxDQUFDUyxFQUFFLENBQUNNLEVBQUUsR0FBRztZQUN4QixNQUFNLElBQUk4QixNQUFNLHNCQUFzQjlCLElBQUksK0JBQStCTjtRQUMzRTtRQUNBTCxXQUFXLEtBQUssQ0FBQ08sR0FBR0YsRUFBRSxDQUFDTSxFQUFFO0lBQzNCO0lBQ0EsT0FBT0o7QUFDVCxFQUFFO0FBRUssTUFBTW1DLE9BQU8sQ0FBbUJyQyxJQUFrQlUsSUFDdkR5QixRQUFRcEIsSUFBSWYsSUFBSVUsSUFBSTtBQUVmLE1BQU00QixTQUFTLENBQUl0QyxJQUFrQks7SUFDMUMsSUFBSyxJQUFJQyxJQUFJLEdBQUdDLE1BQU1QLEdBQUcsTUFBTSxFQUFFTSxJQUFJQyxLQUFLLEVBQUVELEVBQUc7UUFDN0MsTUFBTUwsSUFBSUQsRUFBRSxDQUFDTSxFQUFFO1FBQ2YsSUFBSUQsS0FBS0osR0FBR0ssT0FBTyxNQUFNO1lBQ3ZCLE9BQU87UUFDVDtJQUNGO0lBQ0EsT0FBTztBQUNULEVBQUU7QUFFSyxNQUFNaUMsUUFBUSxDQUFJQyxJQUFrQkMsSUFBa0JDLEtBQWV0RCxpREFBUSxHQUNsRkEsbURBQVUsQ0FBQ3NELElBQUksRUFBRSxDQUFDRixJQUFJQyxJQUFJO0FBRXJCLE1BQU1FLFVBQVUsQ0FBSTNDO0lBQ3pCLE1BQU1FLElBQVNWLFlBQVksSUFBSSxDQUFDUSxJQUFJO0lBQ3BDRSxFQUFFLE9BQU87SUFDVCxPQUFPQTtBQUNULEVBQUU7QUFFSyxNQUFNMEMsYUFBYSxDQUFJSixJQUFrQkMsS0FBMEJuQixPQUFPa0IsSUFBSSxDQUFDdkMsSUFBTSxDQUFDRSxTQUFTc0MsSUFBSXhDLElBQUk7QUFFdkcsTUFBTTRDLGNBR1QsQ0FBbUM3QyxJQUFrQlU7SUFDdkQsTUFBTVIsSUFBSSxDQUFDO0lBQ1gsSUFBSyxJQUFJSSxJQUFJLEdBQUdDLE1BQU1QLEdBQUcsTUFBTSxFQUFFTSxJQUFJQyxLQUFLRCxJQUFLO1FBQzdDLE1BQU1MLElBQUlELEVBQUUsQ0FBQ00sRUFBRTtRQUNmSixDQUFDLENBQUM0QyxPQUFPN0MsR0FBYyxHQUFHUyxFQUFFVCxHQUFHSztJQUNqQztJQUNBLE9BQU9KO0FBQ1QsRUFBRTtBQUVLLE1BQU02QyxPQUFPLENBQUk5QyxJQUFjO1FBQUVBO0tBQUcsQ0FBQztBQUVyQyxNQUFNK0MsT0FBTyxDQUFJaEQsSUFBa0JpRDtJQUN4QyxNQUFNQyxPQUFZMUQsWUFBWSxJQUFJLENBQUNRLElBQUk7SUFDdkNrRCxLQUFLLElBQUksQ0FBQ0Q7SUFDVixPQUFPQztBQUNULEVBQUU7QUFFSyxNQUFNQyxNQUFNLENBQUluRCxJQUFrQk0sSUFBMkJBLEtBQUssS0FBS0EsSUFBSU4sR0FBRyxNQUFNLEdBQUdWLG9EQUFhLENBQUNVLEVBQUUsQ0FBQ00sRUFBRSxJQUFJaEIsb0RBQWEsR0FBRztBQUU5SCxNQUFNOEQsT0FBTyxDQUFJcEQsS0FBa0NtRCxJQUFJbkQsSUFBSSxHQUFHO0FBRTlELE1BQU1xRCxPQUFPLENBQUlyRCxLQUFrQ21ELElBQUluRCxJQUFJQSxHQUFHLE1BQU0sR0FBRyxHQUFHO0FBRTFFLE1BQU1zRCxPQUFvQy9ELDZDQUFlLENBQUNFLE1BQU0sSUFBSSxJQUFJQSxNQUFNLElBQUksR0FBRyxDQUFDUSxJQUFNVCxZQUFZLElBQUksQ0FBQ1MsR0FBRztBQUVoSCxNQUFNc0QsVUFBVSxDQUFPbEMsS0FBbUJYO0lBQy9DLElBQUssSUFBSUosSUFBSSxHQUFHQSxJQUFJZSxJQUFJLE1BQU0sRUFBRWYsSUFBSztRQUNuQyxNQUFNSixJQUFJUSxFQUFFVyxHQUFHLENBQUNmLEVBQUUsRUFBRUE7UUFDcEIsSUFBSUosRUFBRSxNQUFNLElBQUk7WUFDZCxPQUFPQTtRQUNUO0lBQ0Y7SUFDQSxPQUFPWixvREFBYTtBQUN0QixFQUFFO0FBRUssTUFBTWtFLFNBQVMsQ0FBSXhELElBQWtCaUQ7SUFDMUMsTUFBTS9DLElBQVMsRUFBRTtJQUVqQixNQUFNdUQsZUFBZWxFLDZDQUFlLENBQUMwRCxjQUNuQyxDQUFDaEQsSUFBU0csT0FBT0YsR0FBRyxDQUFDSSxJQUFNMkMsV0FBVzNDLEdBQUdMLE1BQ3pDLENBQUNBLElBQVNFLFNBQVNELEdBQUdEO0lBRXhCLElBQUssSUFBSUssSUFBSSxHQUFHQyxNQUFNUCxHQUFHLE1BQU0sRUFBRU0sSUFBSUMsS0FBS0QsSUFBSztRQUM3QyxNQUFNTCxJQUFJRCxFQUFFLENBQUNNLEVBQUU7UUFDZixJQUFJLENBQUNtRCxhQUFheEQsSUFBSTtZQUNwQkMsRUFBRSxJQUFJLENBQUNEO1FBQ1Q7SUFDRjtJQUVBLE9BQU9DO0FBQ1QsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3UzZCO0FBRS9CLE1BQU13RCxPQUNKLEtBQVE7QUFFVixNQUFNQyxRQUNKLENBQUNqRCxJQUFNLElBQU1BO0FBRWYsb0RBQW9ELEdBQ3BELE1BQU1rRCxVQUFVLENBQXdCQyxJQUFpQkM7SUFDdkQsT0FBTyxDQUFDLEdBQUdDO1FBQ1QsT0FBT0YsR0FBR0MsR0FBRyxLQUFLLENBQUMsTUFBTUM7SUFDM0I7QUFDRjtBQUVBLGdHQUFnRyxHQUNoRyxNQUFNQyxXQUFXLENBQVdDLEtBQWtCQyxNQUFxQixDQUFDQyxJQUNsRUYsSUFBSUMsSUFBSUM7QUFFVixNQUFNQyxXQUFXLENBQUlDO0lBQ25CLE9BQU87UUFDTCxPQUFPQTtJQUNUO0FBQ0Y7QUFFQSxNQUFNQyxXQUFXLENBQVVyRTtJQUN6QixPQUFPQTtBQUNUO0FBRUEsTUFBTXNFLGVBQWUsQ0FBSUosR0FBTUs7SUFDN0IsT0FBT0wsTUFBTUs7QUFDZjtBQWFBLFNBQVNDLE1BQVlDLEVBQThCLEVBQUUsR0FBR0MsV0FBa0I7SUFDeEUsT0FBTyxDQUFDLEdBQUdDO1FBQ1QsTUFBTUMsTUFBTUYsWUFBWSxNQUFNLENBQUNDO1FBQy9CLE9BQU9GLEdBQUcsS0FBSyxDQUFDLE1BQU1HO0lBQ3hCO0FBQ0Y7QUFFQSxNQUFNQyxNQUFNLENBQUlwRSxJQUF5QixDQUFDWixJQUN4QyxDQUFDWSxFQUFFWjtBQUVMLE1BQU1pRixNQUFNLENBQUNDO0lBQ1gsT0FBTztRQUNMLE1BQU0sSUFBSTVDLE1BQU00QztJQUNsQjtBQUNGO0FBRUEsTUFBTUMsUUFBUSxDQUFJdkU7SUFDaEIsT0FBT0E7QUFDVDtBQUVBLE1BQU13RSxPQUFPLENBQUN4RTtJQUNaQTtBQUNGO0FBRUEsTUFBTXlFLFFBQW1DZixTQUFnQjtBQUN6RCxNQUFNZ0IsU0FBbUNoQixTQUFlO0FBRXhELHdCQUF3QixHQUN4QixNQUFNaUIsU0FBUyxDQUFpQmIsSUFBWUE7QUFHNUMsTUFBTWMsT0FTSixDQUF5Qm5CLEdBQU1vQixJQUFlQyxJQUFnQkMsSUFBZ0JDLElBQWdCQyxJQUFnQkMsSUFBZ0JDO0lBQzVILE1BQU1yQixJQUFJZSxHQUFHcEI7SUFDYixJQUFJNUUsNkNBQWUsQ0FBQ2lHLEtBQUs7UUFDdkIsT0FBT2hCO0lBQ1Q7SUFFQSxNQUFNc0IsSUFBSU4sR0FBR2hCO0lBQ2IsSUFBSWpGLDZDQUFlLENBQUNrRyxLQUFLO1FBQ3ZCLE9BQU9LO0lBQ1Q7SUFFQSxNQUFNQyxJQUFJTixHQUFHSztJQUNiLElBQUl2Ryw2Q0FBZSxDQUFDbUcsS0FBSztRQUN2QixPQUFPSztJQUNUO0lBRUEsTUFBTUMsSUFBSU4sR0FBR0s7SUFDYixJQUFJeEcsNkNBQWUsQ0FBQ29HLEtBQUs7UUFDdkIsT0FBT0s7SUFDVDtJQUVBLE1BQU10RixJQUFJaUYsR0FBR0s7SUFDYixJQUFJekcsNkNBQWUsQ0FBQ3FHLEtBQUs7UUFDdkIsT0FBT2xGO0lBQ1Q7SUFFQSxNQUFNdUYsSUFBSUwsR0FBR2xGO0lBQ2IsSUFBSW5CLDZDQUFlLENBQUNzRyxLQUFLO1FBQ3ZCLE9BQU9JO0lBQ1Q7SUFFQSxPQUFPSixHQUFHSTtBQUNaO0FBbUJBOzs7Ozs7Ozs7Ozs7OztBQ3ZJNkI7QUFFL0I7Ozs7Ozs7Ozs7Ozs7O0NBY0MsR0FDTSxNQUFNM0c7SUFDTSxJQUFhO0lBQ2IsTUFBVTtJQUUzQiw2RUFBNkU7SUFDN0Usd0JBQXdCO0lBQ3hCLE9BQWUsZ0JBQWdCLElBQUlBLFNBQWMsT0FBTztJQUV4RCxzRUFBc0U7SUFDdEUsMEVBQTBFO0lBQzFFLFlBQW9CNEcsR0FBWSxFQUFFN0IsS0FBUyxDQUFFO1FBQzNDLElBQUksQ0FBQyxHQUFHLEdBQUc2QjtRQUNYLElBQUksQ0FBQyxLQUFLLEdBQUc3QjtJQUNmO0lBRUEscUJBQXFCO0lBRXJCOztHQUVDLEdBQ0QsT0FBYyxLQUFvQkEsS0FBUSxFQUFlO1FBQ3ZELE9BQU8sSUFBSS9FLFNBQVMsTUFBTStFO0lBQzVCO0lBRUE7OztHQUdDLEdBQ0QsT0FBYyxPQUF5QztRQUNyRCxPQUFPL0UsU0FBUyxhQUFhO0lBQy9CO0lBRUE7Ozs7Ozs7Ozs7R0FVQyxHQUNNLEtBQVE2RyxNQUFlLEVBQUVDLE1BQXVCLEVBQUs7UUFDMUQsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1osT0FBT0EsT0FBTyxJQUFJLENBQUMsS0FBSztRQUMxQixPQUFPO1lBQ0wsT0FBT0Q7UUFDVDtJQUNGO0lBRUE7O0dBRUMsR0FDTSxTQUFrQjtRQUN2QixPQUFPLElBQUksQ0FBQyxHQUFHO0lBQ2pCO0lBRUE7O0dBRUMsR0FDTSxTQUFrQjtRQUN2QixPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUc7SUFDbEI7SUFFQSxxREFBcUQ7SUFFckQ7Ozs7Ozs7R0FPQyxHQUNNLElBQU9FLE1BQXVCLEVBQWU7UUFDbEQsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1osT0FBTy9HLFNBQVMsSUFBSSxDQUFDK0csT0FBTyxJQUFJLENBQUMsS0FBSztRQUN4QyxPQUFPO1lBQ0wsT0FBTy9HLFNBQVMsSUFBSTtRQUN0QjtJQUNGO0lBRUEsbURBQW1EO0lBRW5EOzs7R0FHQyxHQUNNLEtBQVFnSCxNQUFpQyxFQUFlO1FBQzdELElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNaLE9BQU9BLE9BQU8sSUFBSSxDQUFDLEtBQUs7UUFDMUIsT0FBTztZQUNMLE9BQU9oSCxTQUFTLElBQUk7UUFDdEI7SUFDRjtJQUVBLHlEQUF5RDtJQUV6RDs7Ozs7R0FLQyxHQUNNLE9BQU9pSCxTQUFnQyxFQUFXO1FBQ3ZELE9BQU8sSUFBSSxDQUFDLEdBQUcsSUFBSUEsVUFBVSxJQUFJLENBQUMsS0FBSztJQUN6QztJQUVBOzs7OztHQUtDLEdBQ00sT0FBT0EsU0FBZ0MsRUFBVztRQUN2RCxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSUEsVUFBVSxJQUFJLENBQUMsS0FBSztJQUMxQztJQVdPLE9BQU9BLFNBQWdDLEVBQWU7UUFDM0QsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUlBLFVBQVUsSUFBSSxDQUFDLEtBQUssR0FBUTtZQUMzQyxPQUFPLElBQUk7UUFDYixPQUFPO1lBQ0wsT0FBT2pILFNBQVMsSUFBSTtRQUN0QjtJQUNGO0lBRUEsa0JBQWtCO0lBRWxCOzs7O0dBSUMsR0FDTSxNQUFha0gsV0FBYyxFQUFTO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFRQTtJQUN0QztJQUVBOzs7OztHQUtDLEdBQ00sR0FBVUEsV0FBd0IsRUFBbUI7UUFDMUQsT0FBTyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksR0FBR0E7SUFDM0I7SUFFQTs7Ozs7OztHQU9DLEdBQ00sV0FBa0JDLEtBQWMsRUFBUztRQUM5QyxPQUFPLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBUUE7SUFDdEM7SUFFQTs7Ozs7Ozs7Ozs7R0FXQyxHQUNNLFFBQWVBLEtBQXdCLEVBQW1CO1FBQy9ELE9BQU8sSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLEdBQUdBO0lBQzNCO0lBRUE7Ozs7Ozs7Ozs7OztHQVlDLEdBQ00sU0FBU0MsT0FBZ0IsRUFBSztRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNiLE1BQU0sSUFBSXRFLE1BQU1zRSxXQUFXO1FBQzdCLE9BQU87WUFDTCxPQUFPLElBQUksQ0FBQyxLQUFLO1FBQ25CO0lBQ0Y7SUFFQSwwQ0FBMEM7SUFFMUM7Ozs7R0FJQyxHQUNELE9BQWMsS0FBb0JyQyxLQUEyQixFQUE0QjtRQUN2RixPQUFPOUUsZ0RBQWtCLENBQUM4RSxTQUFTL0UsU0FBUyxJQUFJLENBQUMrRSxTQUFTL0UsU0FBUyxJQUFJO0lBQ3pFO0lBRUE7OztHQUdDLEdBQ00sWUFBc0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQVE7SUFDdEM7SUFFQTs7O0dBR0MsR0FDTSxpQkFBZ0M7UUFDckMsT0FBTyxJQUFJLENBQUMsS0FBSztJQUNuQjtJQUVBLG9CQUFvQjtJQUVwQjs7Ozs7Ozs7OztHQVVDLEdBQ00sS0FBS3FILE1BQTBCLEVBQVE7UUFDNUMsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1pBLE9BQU8sSUFBSSxDQUFDLEtBQUs7UUFDbkI7SUFDRjtJQUVBOzs7O0dBSUMsR0FDTSxVQUFlO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLEdBQUcsR0FBRztZQUFFLElBQUksQ0FBQyxLQUFLO1NBQU8sR0FBRyxFQUFFO0lBQzVDO0lBRUE7Ozs7O0dBS0MsR0FDTSxXQUFtQjtRQUN4QixPQUFPLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRztJQUM1QztBQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9SNkI7QUFDQTtBQUNTO0FBRXRDOztDQUVDLEdBQ00sTUFBTUUsS0FBSyxDQUFJQyxLQUFrQkMsS0FBUTlELGFBQXNDNUQsOENBQWdCLEdBQ3BHeUgsSUFBSSxNQUFNLENBQUMsQ0FBQ0UsT0FBUy9ELFdBQVcrRCxNQUFNRCxNQUFNO0FBRTlDOzs7Q0FHQyxHQUNNLE1BQU1FLFNBR1QsQ0FBT0gsS0FBa0JDLEtBQWtCOUQsYUFBc0M1RCw4Q0FBdUIsR0FDMUc2SCxNQUFNSixLQUFLQyxLQUFLOUQsWUFBWSxLQUFLLENBQUM2RCxJQUFJLE1BQU0sTUFBTUMsSUFBSSxNQUFNLElBQUk7QUFFM0QsTUFBTUksTUFBTSxDQUFJOUY7SUFDckIsTUFBTW5CLElBQVMsRUFBRTtJQUNqQixNQUFNa0gsT0FBTyxDQUFDbkg7UUFDWkMsRUFBRSxJQUFJLENBQUNEO0lBQ1Q7SUFDQSxJQUFLLElBQUlLLElBQUksR0FBR0EsSUFBSWUsSUFBSSxNQUFNLEVBQUVmLElBQUs7UUFDbkNlLEdBQUcsQ0FBQ2YsRUFBRSxDQUFDLElBQUksQ0FBQzhHO0lBQ2Q7SUFDQSxPQUFPbEg7QUFDVCxFQUFFO0FBRUssTUFBTW1ILFdBQVcsQ0FBS2hHO0lBQzNCLE1BQU1uQixJQUFTLEVBQUU7SUFDakIsSUFBSyxJQUFJSSxJQUFJLEdBQUdBLElBQUllLElBQUksTUFBTSxFQUFFZixJQUFLO1FBQ25DLE1BQU1MLElBQUlvQixHQUFHLENBQUNmLEVBQUU7UUFDaEIsSUFBSUwsRUFBRSxNQUFNLElBQUk7WUFDZEMsRUFBRSxJQUFJLENBQUNELEVBQUUsUUFBUTtRQUNuQixPQUFPO1lBQ0wsT0FBT1gsb0RBQWE7UUFDdEI7SUFDRjtJQUNBLE9BQU9BLG9EQUFhLENBQUNZO0FBQ3ZCLEVBQUU7QUFFRix5Q0FBeUMsR0FDbEMsTUFBTXFELFVBQVVxRCx5Q0FBVyxDQUFDO0FBRW5DOzs7Q0FHQyxHQUNNLE1BQU1VLFdBQVcsQ0FBUWpHLEtBQW1CWCxJQUNqRDJHLFNBQVNULHFDQUFPLENBQUN2RixLQUFLWCxJQUFJO0FBRTVCOzs7OztBQUtBLEdBRU8sTUFBTXdHLFFBQVEsQ0FBV0ssSUFBaUJDLElBQWlCOUcsSUFDaEU2RyxHQUFHLE1BQU0sTUFBTUMsR0FBRyxNQUFNLEtBQUtsSSxvREFBYSxDQUFDb0IsRUFBRTZHLEdBQUcsUUFBUSxJQUFJQyxHQUFHLFFBQVEsT0FBT2xJLG9EQUFhLEdBQU07QUFFNUYsTUFBTW1JLFFBQVEsQ0FBY0YsSUFBaUJDLElBQWlCRSxJQUFpQmhILElBQ3BGNkcsR0FBRyxNQUFNLE1BQU1DLEdBQUcsTUFBTSxNQUFNRSxHQUFHLE1BQU0sS0FBS3BJLG9EQUFhLENBQUNvQixFQUFFNkcsR0FBRyxRQUFRLElBQUlDLEdBQUcsUUFBUSxJQUFJRSxHQUFHLFFBQVEsT0FBT3BJLG9EQUFhLEdBQU07QUFFMUgsTUFBTXFJLFFBQVEsQ0FBaUJKLElBQWlCQyxJQUFpQkUsSUFBaUJFLElBQWlCbEgsSUFDeEc2RyxHQUFHLE1BQU0sTUFBTUMsR0FBRyxNQUFNLE1BQU1FLEdBQUcsTUFBTSxNQUFNRSxHQUFHLE1BQU0sS0FBS3RJLG9EQUFhLENBQUNvQixFQUFFNkcsR0FBRyxRQUFRLElBQUlDLEdBQUcsUUFBUSxJQUFJRSxHQUFHLFFBQVEsSUFBSUUsR0FBRyxRQUFRLE9BQU90SSxvREFBYSxHQUFNO0FBRXhKLE1BQU11SSxRQUFRLENBQW9CTixJQUFpQkMsSUFBaUJFLElBQWlCRSxJQUFpQkUsSUFBaUJwSCxJQUM1SDZHLEdBQUcsTUFBTSxNQUFNQyxHQUFHLE1BQU0sTUFBTUUsR0FBRyxNQUFNLE1BQU1FLEdBQUcsTUFBTSxNQUFNRSxHQUFHLE1BQU0sS0FBS3hJLG9EQUFhLENBQUNvQixFQUFFNkcsR0FBRyxRQUFRLElBQUlDLEdBQUcsUUFBUSxJQUFJRSxHQUFHLFFBQVEsSUFBSUUsR0FBRyxRQUFRLElBQUlFLEdBQUcsUUFBUSxPQUFPeEksb0RBQWEsR0FBTTtBQUV0TCxNQUFNeUksVUFBVSxDQUFRNUQsR0FBeUJ6RCxJQUNyRHlELE1BQU02RCxhQUFhN0QsTUFBTSxPQUFRN0Usb0RBQWEsQ0FBQ29CLEVBQUV5RCxNQUFNN0Usb0RBQWEsR0FBTTtBQUV0RSxNQUFNMkksV0FBVyxDQUFROUQsR0FBeUJ6RCxJQUN0RHlELE1BQU02RCxhQUFhN0QsTUFBTSxPQUFRekQsRUFBRXlELEtBQUs3RSxvREFBYSxHQUFNO0FBRXZELE1BQU02QyxVQUFVLENBQUsrRixNQUE0Q0EsSUFBSSxJQUFJLENBQUM3SSwwQ0FBWSxFQUFFO0FBRS9GLG1IQUFtSDtBQUM1RyxNQUFNOEksU0FBUyxDQUFLM0QsR0FBWUwsSUFDckNLLElBQUlsRixvREFBYSxDQUFDNkUsS0FBSzdFLG9EQUFhLEdBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25GRTtBQUVSO0FBQ1A7QUFFL0IsTUFBTStJLGFBQWEsQ0FBQ0MsS0FBYUMsUUFBZ0JDLFFBQy9DRCxXQUFXLE1BQU1ELElBQUksTUFBTSxJQUFJQyxPQUFPLE1BQU0sSUFBSUQsSUFBSSxNQUFNLENBQUNFLE9BQU9BLFFBQVFELE9BQU8sTUFBTSxNQUFNQTtBQUUvRjs7O0NBR0MsR0FDTSxNQUFNRSxXQUFXLENBQUNILEtBQWFJO0lBQ3BDLE1BQU1DLG1CQUFtQixDQUFDeEU7UUFDeEIsTUFBTXJFLElBQUksT0FBT3FFO1FBQ2pCLE9BQU9yRSxNQUFNLFlBQVlBLE1BQU07SUFDakM7SUFFQSxPQUFPd0ksSUFBSSxPQUFPLENBQUMsbUJBQ2pCLENBQUNNLFdBQW1CQztRQUNsQixNQUFNeEUsUUFBUXFFLEdBQUcsQ0FBQ0csSUFBSTtRQUN0QixPQUFPRixpQkFBaUJ0RSxTQUFTQSxNQUFNLFFBQVEsS0FBS3VFO0lBQ3REO0FBRUosRUFBRTtBQUVLLE1BQU1FLGdCQUFnQixDQUFDUixLQUFhUztJQUN6QyxPQUFPQyxXQUFXVixLQUFLUyxVQUFVWCwyREFBeUIsQ0FBQ0UsS0FBS1MsT0FBTyxNQUFNLElBQUlUO0FBQ25GLEVBQUU7QUFFSyxNQUFNVyxpQkFBaUIsQ0FBQ1gsS0FBYVk7SUFDMUMsT0FBT0MsU0FBU2IsS0FBS1ksVUFBVWQseURBQXVCLENBQUNFLEtBQUtZLE9BQU8sTUFBTSxJQUFJWjtBQUMvRSxFQUFFO0FBRUssTUFBTWMsZ0JBQWdCLENBQUNkLEtBQWFTO0lBQ3pDLE9BQU9DLFdBQVdWLEtBQUtTLFVBQVVULE1BQU1GLHNEQUFvQixDQUFDRSxLQUFLUztBQUNuRSxFQUFFO0FBRUssTUFBTU0saUJBQWlCLENBQUNmLEtBQWFZO0lBQzFDLE9BQU9DLFNBQVNiLEtBQUtZLFVBQVVaLE1BQU1GLG9EQUFrQixDQUFDRSxLQUFLWTtBQUMvRCxFQUFFO0FBRUssTUFBTS9JLFdBQVcsQ0FBQ21JLEtBQWFDLFFBQWdCQyxRQUFnQixDQUFDLEVBQUVjO0lBQ3ZFLE1BQU1DLE1BQU1qQixJQUFJLE9BQU8sQ0FBQ0MsUUFBUUM7SUFDaEMsSUFBSWUsUUFBUSxDQUFDLEdBQUc7UUFDZCxPQUFPaEssOENBQWdCLENBQUMrSixPQUFPLE9BQU9DLE1BQU1oQixPQUFPLE1BQU0sSUFBSWU7SUFDL0QsT0FBTztRQUNMLE9BQU87SUFDVDtBQUNGLEVBQUU7QUFFSyxNQUFNRSxhQUFhLENBQUNsQjtJQUN6QixPQUFPQSxRQUFRLEtBQUssS0FBS0EsSUFBSSxNQUFNLENBQUMsR0FBRyxXQUFXLEtBQUtBLElBQUksU0FBUyxDQUFDO0FBQ3ZFLEVBQUU7QUFFRjs7OztDQUlDLEdBQ00sTUFBTVUsYUFBYSxDQUFDVixLQUFhUztJQUN0QyxPQUFPVixXQUFXQyxLQUFLUyxRQUFRO0FBQ2pDLEVBQUU7QUFFRjs7OztDQUlDLEdBQ00sTUFBTUksV0FBVyxDQUFDYixLQUFhWTtJQUNwQyxPQUFPYixXQUFXQyxLQUFLWSxRQUFRWixJQUFJLE1BQU0sR0FBR1ksT0FBTyxNQUFNO0FBQzNELEVBQUU7QUFFRixNQUFNTyxRQUFRLENBQUN2SixJQUFjLENBQUNZLElBQzVCQSxFQUFFLE9BQU8sQ0FBQ1osR0FBRztBQUVmLDRDQUE0QyxHQUNyQyxNQUFNd0osT0FDWEQsTUFBTSxjQUFjO0FBRWYsTUFBTUUsUUFDWEYsTUFBTSxTQUFTO0FBRVYsTUFBTUcsUUFDWEgsTUFBTSxTQUFTO0FBRVYsTUFBTUksYUFBYSxDQUFDL0ksSUFBdUJBLEVBQUUsTUFBTSxHQUFHLEVBQUU7QUFFeEQsTUFBTWdKLFVBQVUsQ0FBQ2hKLElBQXVCLENBQUMrSSxXQUFXL0ksR0FBRztBQUV2RCxNQUFNaUosU0FBUyxDQUFDakosR0FBV2tKLFFBQTBCQSxTQUFTLElBQUksS0FBSyxJQUFJdkssTUFBTXVLLFFBQVEsR0FBRyxJQUFJLENBQUNsSixHQUFHO0FBRXBHLE1BQU1tSixnQkFBZ0JuSCxPQUFPLGFBQWEsQ0FBQztBQUUzQyxNQUFNb0gsUUFBUSxDQUFDN0YsT0FBZThGLFFBQWdCLEVBQUU7SUFDckQsTUFBTTFKLE1BQU0ySixTQUFTL0YsT0FBTzhGO0lBQzVCLE9BQU9FLE1BQU01SixPQUFPbkIsb0RBQWEsS0FBS0Esb0RBQWEsQ0FBQ21CO0FBQ3RELEVBQUU7QUFFSyxNQUFNNkosVUFBVSxDQUFDakc7SUFDdEIsTUFBTTVELE1BQU04SixXQUFXbEc7SUFDdkIsT0FBT2dHLE1BQU01SixPQUFPbkIsb0RBQWEsS0FBS0Esb0RBQWEsQ0FBQ21CO0FBQ3RELEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEdGLDZEQUE2RCxHQUM3RCxNQUFNK0osaUJBQWlCQyxPQUFPLGNBQWM7QUFPNUMsTUFBTUMsV0FBVyxDQUFtQkMsR0FBV0MsYUFBNkJyRTtJQUMxRSxJQUFJQSxVQUFVb0UsR0FBR0MsWUFBWSxTQUFTLEdBQUc7UUFDdkMsT0FBTztJQUNULE9BQU87UUFDTCw2QkFBNkI7UUFDN0IsT0FBT0QsRUFBRSxXQUFXLEVBQUUsU0FBU0MsWUFBWSxJQUFJO0lBQ2pEO0FBQ0Y7QUFFQSxNQUFNQyxTQUFTLENBQUM1SztJQUNkLE1BQU1ILElBQUksT0FBT0c7SUFDakIsSUFBSUEsTUFBTSxNQUFNO1FBQ2QsT0FBTztJQUNULE9BQU8sSUFBSUgsTUFBTSxZQUFZTCxNQUFNLE9BQU8sQ0FBQ1EsSUFBSTtRQUM3QyxPQUFPO0lBQ1QsT0FBTyxJQUFJSCxNQUFNLFlBQVk0SyxTQUFTekssR0FBRzZDLFFBQVEsQ0FBQ2dJLEdBQUdDLFFBQVVBLE1BQU0sYUFBYSxDQUFDRCxLQUFLO1FBQ3RGLE9BQU87SUFDVCxPQUFPO1FBQ0wsT0FBT2hMO0lBQ1Q7QUFDRjtBQUVBLE1BQU1rTCxTQUFTLENBQU90SixPQUFpQixDQUFDMkMsUUFDdEN3RyxPQUFPeEcsV0FBVzNDO0FBRXBCLE1BQU11SixlQUFlLENBQU92SixPQUFpQixDQUFDMkMsUUFDNUMsT0FBT0EsVUFBVTNDO0FBRW5CLE1BQU1nQixLQUFLLENBQUs1QyxJQUFTLENBQUNxRSxJQUN4QnJFLE1BQU1xRTtBQUVELE1BQU0wQyxLQUFLLENBQW1CeEMsT0FBWXVHLGNBQy9DTSxTQUFTN0csVUFBVXFHLFNBQVlyRyxPQUFPdUcsYUFBYSxDQUFDRSxHQUFHQyxRQUFVUCxlQUFlTSxPQUFPQyxPQUFPO0FBRXpGLE1BQU1JLFdBQ1hILE9BQU8sVUFBVTtBQUVaLE1BQU1FLFdBQ1hGLE9BQU8sVUFBVTtBQUVaLE1BQU1JLGdCQUFnQixDQUFDL0csUUFDNUJ3QyxHQUFHeEMsT0FBT29HLFFBQVE7QUFFYixNQUFNWSxVQUNYTCxPQUFPLFNBQVM7QUFFWCxNQUFNTSxTQUNYNUksR0FBRyxNQUFNO0FBRUosTUFBTTZJLFlBQ1hOLGFBQXNCLFdBQVc7QUFFNUIsTUFBTU8sY0FDWDlJLEdBQUdzRixXQUFXO0FBRVQsTUFBTXlELGFBQWEsQ0FBQ3RILElBQ3pCQSxNQUFNLFFBQVFBLE1BQU02RCxVQUFVO0FBRXpCLE1BQU0wRCxnQkFBZ0IsQ0FBS3ZILElBQ2hDLENBQUNzSCxXQUFXdEgsR0FBRztBQUVWLE1BQU13SCxhQUNYVixhQUF1QixZQUFZO0FBRTlCLE1BQU1XLFdBQ1hYLGFBQXFCLFVBQVU7QUFFMUIsTUFBTVksWUFBWSxDQUFJeEgsT0FBWWhFO0lBQ3ZDLElBQUlnTCxRQUFRaEgsUUFBUTtRQUNsQixJQUFLLElBQUkvRCxJQUFJLEdBQUdDLE1BQU04RCxNQUFNLE1BQU0sRUFBRS9ELElBQUlDLEtBQUssRUFBRUQsRUFBRztZQUNoRCxJQUFJLENBQUVELEtBQUtnRSxLQUFLLENBQUMvRCxFQUFFLEdBQUk7Z0JBQ3JCLE9BQU87WUFDVDtRQUNGO1FBQ0EsT0FBTztJQUNUO0lBQ0EsT0FBTztBQUNULEVBQUU7QUFFSyxNQUFNd0wsZ0JBQWdCLENBQUM3TCxJQUM1QmlMLFNBQVNqTCxNQUNOMEwsV0FBVzFMLEVBQUUsSUFBSSxLQUNqQjBMLFdBQVcxTCxFQUFFLEtBQUssRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQzFGbEIsTUFBTThMLGFBQWEsQ0FBQ3pELEtBQWFTO0lBQ3RDLE9BQU9BLFNBQVNUO0FBQ2xCLEVBQUU7QUFFSyxNQUFNMEQsV0FBVyxDQUFDMUQsS0FBYVk7SUFDcEMsT0FBT1osTUFBTVk7QUFDZixFQUFFO0FBRUssTUFBTStDLGtCQUFrQixDQUFDM0QsS0FBYTREO0lBQzNDLE9BQU81RCxJQUFJLFNBQVMsQ0FBQzREO0FBQ3ZCLEVBQUU7QUFFSyxNQUFNQyxnQkFBZ0IsQ0FBQzdELEtBQWE0RDtJQUN6QyxPQUFPNUQsSUFBSSxTQUFTLENBQUMsR0FBR0EsSUFBSSxNQUFNLEdBQUc0RDtBQUN2QyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkeUQ7QUFFMUI7QUFDVTtBQUNIO0FBQ0k7QUFFNUMsNkRBQWdCO0lBQ2RFLDBFQUFpQixDQUFDLFNBQVMsQ0FBQ0s7UUFDMUJILG1EQUFpQixDQUFDRztRQUNsQkYsaURBQWdCLENBQUNFO1FBQ2pCRCxtREFBa0IsQ0FBQ0M7UUFFbkIsT0FBT0oseUNBQU8sQ0FBQ0k7SUFDakI7QUFDRixDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNURixNQUFNdEosTUFBTSxDQUFDc0osU0FBeUI7UUFDcEMsaUJBQWlCLENBQUNDO1lBQ2hCRCxPQUFPLFdBQVcsQ0FBQywwQkFBMEIsT0FBT0M7UUFDdEQ7SUFDRjtBQUlFOzs7Ozs7Ozs7Ozs7OztBQ1pxQztBQUV2QyxNQUFNRSxXQUFXLENBQUNIO0lBQ2hCQSxPQUFPLFVBQVUsQ0FBQyxnQkFBZ0I7UUFDaENFLDRDQUFXLENBQUNGO0lBQ2Q7QUFDRjtBQUlFOzs7Ozs7Ozs7Ozs7O0FDVkYsTUFBTUksU0FBUyxDQUFDQyxPQUFpQixDQUFDTCxTQUNoQ0EsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDSztBQUVyQixNQUFNQyxxQkFBcUJGLE9BQU87QUFJaEM7Ozs7Ozs7Ozs7Ozs7O0FDTDZCO0FBRS9CLE1BQU1JLDJCQUEyQixDQUFDUixRQUFnQlMsV0FBcUIsQ0FBQ0M7UUFDdEUsTUFBTUMsc0JBQXNCLENBQUNwSDtZQUMzQm1ILElBQUksU0FBUyxDQUFDSCx5Q0FBVyxDQUFDaEgsRUFBRSxPQUFPLEVBQUVrSDtZQUNyQ0MsSUFBSSxVQUFVLENBQUMsQ0FBQ0gsMERBQTRCLENBQUNQLFFBQVF6RyxFQUFFLE9BQU8sS0FBS3lHLE9BQU8sU0FBUyxDQUFDLFVBQVU7UUFDaEc7UUFFQVUsSUFBSSxVQUFVLENBQUNWLE9BQU8sU0FBUyxDQUFDLFVBQVU7UUFFMUMsT0FBT08sdURBQXlCLENBQUNQLFFBQVFXO0lBQzNDO0FBRUEsTUFBTVIsV0FBVyxDQUFDSDtJQUNoQixNQUFNWSxPQUFPLENBQUNDLFVBQW9CLElBQU1iLE9BQU8sV0FBVyxDQUFDYTtJQUUzRCxJQUFJLENBQUNiLE9BQU8sU0FBUyxDQUFDLFlBQVk7UUFDaENBLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsV0FBVztZQUM1QyxNQUFNO1lBQ04sUUFBUTtZQUNSLFNBQVM7WUFDVCxVQUFVWSxLQUFLO1lBQ2YsU0FBU0oseUJBQXlCUixRQUFRO1FBQzVDO1FBRUFBLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsV0FBVztZQUM1QyxNQUFNO1lBQ04sUUFBUTtZQUNSLFNBQVM7WUFDVCxVQUFVWSxLQUFLO1lBQ2YsU0FBU0oseUJBQXlCUixRQUFRO1FBQzVDO0lBQ0Y7QUFDRjtBQUlFOzs7Ozs7Ozs7Ozs7Ozs7O0FDekN5QztBQUlvQjtBQUNXO0FBRTFFLE1BQU1tQixPQUFPLENBQUNuQjtJQUNaLG1GQUFtRjtJQUNuRixNQUFNb0IsY0FBY0osb0RBQWFBLENBQUNoQjtJQUNsQyxJQUFJLENBQUNpQiwrQ0FBUUEsQ0FBQ0csZ0JBQWdCRiw4REFBdUJBLENBQUNsQixRQUFRb0IsY0FBYztRQUMxRTtJQUNGO0lBRUFwQixPQUFPLGFBQWEsQ0FBQyxJQUFJLENBQUM7UUFDeEIsT0FBTztRQUNQLE1BQU07WUFDSixNQUFNO1lBQ04sT0FBTztnQkFDTDtvQkFDRSxNQUFNO29CQUNOLE1BQU07b0JBQ04sT0FBTztvQkFDUCxXQUFXO2dCQUNiO2FBQ0Q7UUFDSDtRQUNBLGFBQWE7WUFDWCxPQUFPYywyREFBV0EsQ0FBQztnQkFDakIsT0FBT2QsT0FBTyxHQUFHLENBQUMsU0FBUyxDQUFDb0IsYUFBYSxTQUFTO2dCQUNsRCxlQUFldk8sMERBQWEsQ0FBQ21OLE9BQU8sR0FBRyxDQUFDLFFBQVEsQ0FBQ29CLGFBQWE7WUFDaEU7UUFDRjtRQUNBLFNBQVM7WUFDUDtnQkFDRSxNQUFNO2dCQUNOLE1BQU07Z0JBQ04sTUFBTTtZQUNSO1lBQ0E7Z0JBQ0UsTUFBTTtnQkFDTixNQUFNO2dCQUNOLE1BQU07Z0JBQ04sU0FBUztZQUNYO1NBQ0Q7UUFDRCxVQUFVLENBQUNWO1lBQ1QsTUFBTVcsT0FBT1gsSUFBSSxPQUFPO1lBQ3hCSywrREFBZUEsQ0FBQ00sS0FBSyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUNDO2dCQUNoQ3RCLE9BQU8sV0FBVyxDQUFDLGlCQUFpQixPQUFPO29CQUN6QyxPQUFPO3dCQUNMLE9BQU9zQixPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUtBLE9BQU8sS0FBSztvQkFDakQ7b0JBQ0EsUUFBUTt3QkFDTixtQkFBbUJBLE9BQU8sYUFBYSxDQUFDLEtBQUssQ0FBQztvQkFDaEQ7Z0JBQ0Y7WUFDRjtZQUNBWixJQUFJLEtBQUs7UUFDWDtJQUNGO0FBQ0Y7QUFJRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakVrRTtBQWVwRSxzQkFBc0I7QUFDdEIsTUFBTWUsd0JBQXdCLENBQUM1RjtJQUM3QixNQUFNNkYsUUFBUXZILG9EQUFXLENBQUNxSCxpREFBWSxDQUFDM0YsS0FBSyxLQUFLLENBQUM7SUFDbEQsTUFBTThGLFNBQVN4SCxnREFBTyxDQUFDdUgsT0FBTyxDQUFDRSxNQUFNL047UUFDbkMsTUFBTWdPLFlBQVlELEtBQUssV0FBVyxHQUFHLFVBQVUsQ0FBQyxLQUFLLElBQUksVUFBVSxDQUFDLEtBQUs7UUFDekUsT0FBT0UsS0FBSyxHQUFHLENBQUMsSUFBSWpPLEtBQUtnTztJQUMzQjtJQUNBLE9BQU8xSCxrREFBUyxDQUFDd0gsUUFBUSxDQUFDSSxLQUFLN0QsSUFBTTZELE1BQU03RCxHQUFHO0FBQ2hEO0FBRUEsc0JBQXNCO0FBQ3RCLE1BQU04RCwwQkFBMEIsQ0FBQ3BLO0lBQy9CQTtJQUNBLElBQUlBLFFBQVEsR0FBRztRQUNiLE9BQU87SUFDVCxPQUFPO1FBQ0wsTUFBTXFLLFlBQVlySyxRQUFRO1FBQzFCLE1BQU1zSyxXQUFXSixLQUFLLEtBQUssQ0FBQ2xLLFFBQVE7UUFFcEMsTUFBTXVLLE9BQU9ILHdCQUF3QkU7UUFDckMsTUFBTU4sT0FBT3ZMLE9BQU8sWUFBWSxDQUFDLElBQUksVUFBVSxDQUFDLEtBQUs0TDtRQUVyRCxPQUFPRSxPQUFPUDtJQUNoQjtBQUNGO0FBRUEsTUFBTVEsY0FBYyxDQUFDdkcsTUFBeUIsV0FBVyxJQUFJLENBQUNBO0FBRTlELE1BQU13RyxjQUFjLENBQUN4RyxNQUF5QixXQUFXLElBQUksQ0FBQ0E7QUFFOUQsTUFBTXlHLFlBQVksQ0FBQ3pHLE1BQXlCLFdBQVcsSUFBSSxDQUFDQTtBQUU1RCxNQUFNMEcsaUJBQWlCLENBQUN4RztJQUN0QixJQUFJdUcsVUFBVXZHLFFBQVE7UUFDcEI7SUFDRixPQUFPLElBQUlxRyxZQUFZckcsUUFBUTtRQUM3QjtJQUNGLE9BQU8sSUFBSXNHLFlBQVl0RyxRQUFRO1FBQzdCO0lBQ0YsT0FBTyxJQUFJeUYsb0RBQWUsQ0FBQ3pGLFFBQVE7UUFDakM7SUFDRixPQUFPO1FBQ0w7SUFDRjtBQUNGO0FBRUEsTUFBTWdGLGtCQUFrQixDQUFDaEY7SUFDdkIsT0FBUXdHLGVBQWV4RztRQUNyQjtZQUNFLE9BQU9sSiwwREFBYSxDQUFDO2dCQUNuQixlQUFlQSwwREFBYTtnQkFDNUJrSjtZQUNGO1FBRUY7WUFDRSxPQUFPbEosMERBQWEsQ0FBQztnQkFDbkIsZUFBZUEsMERBQWEsQ0FBQztnQkFDN0IsT0FBTzRPLHNCQUFzQjFGLE9BQU8sUUFBUTtZQUM5QztRQUVGO1lBQ0UsT0FBT2xKLDBEQUFhLENBQUM7Z0JBQ25CLGVBQWVBLDBEQUFhLENBQUM7Z0JBQzdCLE9BQU80TyxzQkFBc0IxRixPQUFPLFFBQVE7WUFDOUM7UUFFRjtZQUNFLE9BQU9sSiwwREFBYSxDQUFDO2dCQUNuQixlQUFlQSwwREFBYTtnQkFDNUIsT0FBTztZQUNUO1FBRUY7WUFDRSxPQUFPQSwwREFBYTtJQUN4QjtBQUNGO0FBRUEsTUFBTWlPLGNBQWMsQ0FBQ1E7SUFDbkIsTUFBTXZGLFFBQVE0QixTQUFTMkQsT0FBTyxLQUFLLEVBQUU7SUFFckMsSUFBSUMsK0NBQVksQ0FBQ0QsT0FBTyxhQUFhLEVBQUUsZ0JBQWdCO1FBQ3JELE9BQU9VLHdCQUF3QmpHO0lBQ2pDLE9BQU8sSUFBSXdGLCtDQUFZLENBQUNELE9BQU8sYUFBYSxFQUFFLGdCQUFnQjtRQUM1RCxPQUFPVSx3QkFBd0JqRyxPQUFPLFdBQVc7SUFDbkQsT0FBTztRQUNMLE9BQU91RixPQUFPLEtBQUs7SUFDckI7QUFDRjtBQUtFOzs7Ozs7Ozs7Ozs7OztBQ3ZHNkI7QUFFL0IsTUFBTWtCLHlCQUF5QixDQUFDeEMsUUFBZ0JTLFdBQXFCLENBQUNDO1FBQ3BFLE1BQU0rQixvQkFBb0IsQ0FBQ2xKLElBQ3pCbUgsSUFBSSxVQUFVLENBQUNILHlDQUFXLENBQUNoSCxFQUFFLE9BQU8sRUFBRWtILGFBQWEsQ0FBQ0YsMERBQTRCLENBQUNQLFFBQVF6RyxFQUFFLE9BQU87UUFDcEcsT0FBT2dILHVEQUF5QixDQUFDUCxRQUFReUM7SUFDM0M7QUFFQSxNQUFNdEMsV0FBVyxDQUFDSDtJQUNoQixNQUFNMEMsaUJBQW9DO1FBQ3hDLE1BQU07UUFDTixNQUFNO1FBQ04sVUFBVSxJQUFNMUMsT0FBTyxXQUFXLENBQUM7UUFDbkMsU0FBU3dDLHVCQUF1QnhDLFFBQVE7SUFDMUM7SUFFQUEsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxhQUFhMEM7SUFFNUMxQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVM7UUFDekMsUUFBUSxDQUFDMkM7WUFDUCxNQUFNQyxhQUFhckMsZ0RBQWtCLENBQUNQLFFBQVEyQztZQUM5QyxPQUFPcEMsMkNBQWEsQ0FBQ3FDLGNBQWM7Z0JBQUU7YUFBYSxHQUFHLEVBQUc7UUFDMUQ7SUFDRjtBQUNGO0FBSUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEMwQztBQU1RO0FBRXBELE1BQU1DLGVBQWUsQ0FBQ0MsT0FDcEIsVUFBVSxJQUFJLENBQUNBLEtBQUssU0FBUztBQUUvQixNQUFNQyxpQkFBaUIsQ0FBd0JDLFFBQzdDLENBQUNMLE9BQWlDN1AsMERBQWtCLENBQUM2UCxTQUFTSyxNQUFNLElBQUksQ0FBQ0wsS0FBSyxRQUFRO0FBRXhGLE1BQU1NLGdCQUFnQixDQUF3QjVDLE9BQzVDLENBQUNzQyxPQUFpQzdQLDBEQUFrQixDQUFDNlAsU0FBU0EsS0FBSyxRQUFRLENBQUMsV0FBVyxPQUFPdEM7QUFFaEcsTUFBTTZDLGFBQWFILGVBQXVFO0FBRTFGLE1BQU1JLGtCQUFrQkosZUFBa0U7QUFFMUYsTUFBTUssaUJBQWlCTCxlQUE0QztBQUVuRSxNQUFNTSxTQUFTLENBQUNDLFNBQWlCN0MsV0FDL0J0RyxzREFBYSxDQUFDbUosU0FBU0osWUFBWUMsaUJBQ2hDLE1BQU0sQ0FBQyxDQUFDTCxPQUFTQSxLQUFLLFFBQVEsS0FBS3JDLFlBQVksQ0FBQ29DLGFBQWFDO0FBRWxFLE1BQU1TLHVCQUF1QixDQUFDdkQsUUFBZ0J3RDtJQUM1QyxNQUFNQyxjQUFjekQsT0FBTyxTQUFTLENBQUMsT0FBTztJQUM1Qyx3QkFBd0I7SUFDeEJ3RCxrQkFBa0I7UUFDaEIsU0FBU3hELE9BQU8sR0FBRyxDQUFDLFVBQVUsQ0FBQ3lEO1FBQy9CLFNBQVNBO0lBQ1g7SUFDQXpELE9BQU8sRUFBRSxDQUFDLGNBQWN3RDtJQUN4QixPQUFPLElBQU14RCxPQUFPLEdBQUcsQ0FBQyxjQUFjd0Q7QUFDeEM7QUFFQSxNQUFNRSxzQkFBc0IsQ0FBQzFELFFBQWdCMkQsVUFDM0NBLFlBQVksUUFBUSxDQUFDM0QsT0FBTyxHQUFHLENBQUMsVUFBVSxDQUFDMkQ7QUFFN0MsTUFBTXpDLDBCQUEwQixDQUFDbEIsUUFBZ0IyRDtJQUMvQyxNQUFNZixhQUFhNUMsT0FBTyxHQUFHLENBQUMsU0FBUyxDQUFDMkQsU0FBUztJQUNqRCxPQUFPRCxvQkFBb0IxRCxRQUFRNEMsZUFBZSxDQUFDNUMsT0FBTyxTQUFTLENBQUMsVUFBVTtBQUNoRjtBQUVBLE1BQU1pQixXQUFXZ0MsY0FBZ0M7QUFFakQsTUFBTVcsWUFBWTtJQUFFO0lBQU07SUFBTTtDQUFNO0FBQ3RDLE1BQU1DLGVBQWVELFVBQVUsSUFBSSxDQUFDO0FBRXBDLE1BQU01QyxnQkFBZ0IsQ0FBQ2hCLFFBQWdCMkM7SUFDckMsTUFBTW1CLGlCQUFpQm5CLFFBQVEzQyxPQUFPLFNBQVMsQ0FBQyxRQUFRLENBQUM7SUFFekQsT0FBT0EsT0FBTyxHQUFHLENBQUMsU0FBUyxDQUFDOEQsZ0JBQWdCRCxjQUFjRSxtQkFBbUIvRCxRQUFROEQ7QUFDdkY7QUFFQSxNQUFNQyxxQkFBcUIsQ0FBQy9ELFFBQWdCZ0U7SUFDMUMsTUFBTUMsZUFBZWpFLE9BQU8sR0FBRyxDQUFDLFVBQVUsQ0FBY2dFLEtBQUtoRSxPQUFPLEdBQUcsQ0FBQyxPQUFPO0lBQy9FLE1BQU1rRSx1QkFBdUIsQ0FBQ0YsTUFBcUJBLElBQUksUUFBUSxDQUFDLFdBQVcsT0FBTzFELGdFQUFrQkEsQ0FBQ047SUFDckcsTUFBTW1FLGNBQWNoSyxpREFBUSxDQUFDOEosY0FBYyxDQUFDRCxNQUFRRSxxQkFBcUJGLFFBQVFJLFdBQVdwRSxPQUFPLE1BQU0sRUFBRWdFO0lBRTNHLE9BQU9HLFlBQVksS0FBSyxDQUFDbkUsT0FBTyxPQUFPO0FBQ3pDO0FBRUEsTUFBTW9FLGFBQWEsQ0FBQ0MsUUFBZ0IxQixPQUNsQyxDQUFDTyxXQUFXUCxTQUFTLENBQUNTLGVBQWVULFNBQVN4SSxtREFBVSxDQUFDeUosV0FBVyxDQUFDbkQsV0FBYTRELE9BQU8sWUFBWSxDQUFDMUIsS0FBSyxRQUFRLEVBQUVsQztBQVFySDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFFbUM7QUFDVTtBQU94QyxJQUFNLFNBQVMsR0FBRyxVQUFRLEdBQVUsRUFBRSxDQUFjO0lBQ3pELFNBQUUsQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssVUFBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQWxCLENBQWtCLENBQUM7QUFBaEMsQ0FBZ0MsQ0FBQztBQUU1QixJQUFNLEVBQUUsR0FBRyxVQUFLLENBQTBCO0lBQy9DLFFBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUM7QUFBWCxDQUFXLENBQUM7QUFFUCxJQUFNLFFBQVEsR0FBWSxFQUFFLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLFFBQUMsS0FBSyxDQUFDLEVBQVAsQ0FBTyxDQUFDLENBQUM7QUFFaEQsSUFBTSxRQUFRLEdBQWUsUUFBUSxDQUFDO0FBRXRDLElBQU0sU0FBUyxHQUFnQixRQUFRLENBQUM7QUFFeEMsSUFBTSxRQUFRLEdBQWUsUUFBUSxDQUFDO0FBRXRDLElBQU0sV0FBVyxHQUFrQixRQUFRLENBQUM7QUFFNUMsSUFBTSxNQUFNLEdBQWEsUUFBUSxDQUFDO0FBRWxDLElBQU0sT0FBTyxHQUFHLFVBQUssR0FBVSxJQUF1QixTQUFFLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQztJQUNuRSxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRTtRQUN6QixPQUFPLEtBQUssQ0FBQztLQUNkO0lBQ0QsSUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNyQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUN2QixPQUFPLEtBQUssQ0FBQztTQUNkO0tBQ0Y7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMsQ0FBQyxFQVgyRCxDQVczRCxDQUFDO0FBRUgsOEJBQThCO0FBQzlCLElBQU0sYUFBYSxHQUFHLFVBQUksR0FBVSxFQUFFLFNBQWtDO0lBQ3RFLGdCQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLFVBQUMsRUFBRSxJQUFLLHdEQUFjLENBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxFQUE3QixDQUE2QixDQUFDO0FBQTlELENBQThELENBQUM7QUFFMUQsSUFBTSxRQUFRLEdBQUcsVUFBSyxHQUFVLElBQTRCLFNBQUUsQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3pFLElBQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUIsSUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUU7UUFDdkMsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUNELElBQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7SUFDdEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUM1QixJQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3ZCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7S0FDRjtJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyxDQUFDLEVBZGlFLENBY2pFLENBQUM7QUFFSSxJQUFNLEtBQUssR0FBWSxFQUFFLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQztJQUNwQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDWCxPQUFPLElBQUksQ0FBQztLQUNiO0lBRUQsSUFBTSxFQUFFLEdBQUcsOENBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixJQUFNLEVBQUUsR0FBRyw4Q0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUNiLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxJQUFJLHVEQUFvQixDQUFDLEVBQUUsQ0FBQyxFQUFFO1FBQzVCLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUVoQjtTQUFNLElBQUksRUFBRSxLQUFLLE9BQU8sRUFBRTtRQUN6QixPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBRWhDO1NBQU0sSUFBSSxFQUFFLEtBQUssUUFBUSxFQUFFO1FBQzFCLE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDakM7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNqRkksSUFBTSxHQUFHLEdBQUcsVUFBTyxFQUFnQixFQUFFLENBQWM7SUFDeEQsSUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQztJQUN0QixJQUFNLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzVCLElBQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2I7SUFDRCxPQUFPLENBQUMsQ0FBQztBQUNYLENBQUMsQ0FBQztBQUVGLDhGQUE4RjtBQUN2RixJQUFNLFVBQVUsR0FBRyxVQUFRLEVBQWdCLEVBQUUsQ0FBYyxFQUFFLE9BQW9CO0lBQ3RGLElBQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7SUFDdEIsSUFBTSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDaEMsSUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDdEI7SUFDRCxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUU7UUFDWCxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQy9CO0lBRUQsT0FBTyxDQUFDLENBQUM7QUFDWCxDQUFDLENBQUM7QUFFSyxJQUFNLElBQUksR0FBRyxVQUFLLEVBQWdCLEVBQUUsU0FBa0M7SUFDM0UsSUFBTSxLQUFLLEdBQVEsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2xELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUMvQixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkssSUFBTSxNQUFNLEdBQUcsVUFBQyxDQUFNO0lBQzNCLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRTtRQUNkLE9BQU8sTUFBTSxDQUFDO0tBQ2Y7SUFDRCxJQUFJLENBQUMsS0FBSyxTQUFTLEVBQUU7UUFDbkIsT0FBTyxXQUFXLENBQUM7S0FDcEI7SUFDRCxJQUFNLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQztJQUNuQixJQUFJLENBQUMsS0FBSyxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLE9BQU8sQ0FBQyxFQUFFO1FBQzNHLE9BQU8sT0FBTyxDQUFDO0tBQ2hCO0lBQ0QsSUFBSSxDQUFDLEtBQUssUUFBUSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsRUFBRTtRQUM3RyxPQUFPLFFBQVEsQ0FBQztLQUNqQjtJQUNELE9BQU8sQ0FBQyxDQUFDO0FBQ1gsQ0FBQyxDQUFDO0FBRUYsSUFBTSxNQUFNLEdBQUcsVUFBSSxJQUFZLElBQUssaUJBQUMsS0FBVSxJQUFpQixhQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxFQUF0QixDQUFzQixFQUFsRCxDQUFrRCxDQUFDO0FBRWhGLElBQU0sUUFBUSxHQUFHLE1BQU0sQ0FBUyxRQUFRLENBQUMsQ0FBQztBQUMxQyxJQUFNLFFBQVEsR0FBRyxNQUFNLENBQVMsUUFBUSxDQUFDLENBQUM7QUFDMUMsSUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFpQixPQUFPLENBQUMsQ0FBQztBQUNoRCxJQUFNLE1BQU0sR0FBRyxNQUFNLENBQU8sTUFBTSxDQUFDLENBQUM7QUFDcEMsSUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFVLFNBQVMsQ0FBQyxDQUFDO0FBQzdDLElBQU0sV0FBVyxHQUFHLE1BQU0sQ0FBWSxXQUFXLENBQUMsQ0FBQztBQUNuRCxJQUFNLFVBQVUsR0FBRyxNQUFNLENBQVcsVUFBVSxDQUFDLENBQUM7QUFDaEQsSUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFTLFFBQVEsQ0FBQyxDQUFDO0FBRTFDLElBQU0sZUFBZSxHQUFHLFVBQUMsQ0FBUztJQUN2QyxRQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7QUFBM0YsQ0FBMkYsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0I5RjtBQUNBO0FBQ0E7QUFDQSxrREFBa0Qsd0NBQXdDO0FBQzFGO0FBQ0E7QUFDQTs7OztBQ05BOzs7O0FDQUE7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGlCQUFpQjtBQUN4RTtBQUNBLGdEQUFnRCxhQUFhO0FBQzdEOzs7O0FDTkE7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0E4QjtBQUU5QjZELG1EQUFNQSxJQUVOOzs7O09BSU8ifQ==