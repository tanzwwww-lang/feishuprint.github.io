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
"./lib/globals/tinymce/core/api/dom/TextSeeker.js": 
/*!********************************************************!*\
  !*** ./lib/globals/tinymce/core/api/dom/TextSeeker.js ***!
  \********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  TextSeeker: () => (TextSeeker),
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
var global = tinymce.util.Tools.resolve('tinymce.dom.TextSeeker');

/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (global);
var TextSeeker = global;


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
"../polaris/src/main/ts/ephox/polaris/api/Regexes.ts": 
/*!***********************************************************!*\
  !*** ../polaris/src/main/ts/ephox/polaris/api/Regexes.ts ***!
  \***********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  autolink: () => (autolink),
  link: () => (link),
  tokens: () => (tokens)
});
/*
  The RegEx parses the following components (https://www.rfc-editor.org/rfc/rfc3986.txt):

    scheme:[//[user:password@]host[:port]][/]path[?query][#fragment]

          foo://example.com:8042/over/there?name=ferret#nose
          \_/   \______________/\_________/ \_________/ \__/
          |           |            |            |        |
        scheme     authority       path        query   fragment

  Originally from:
    http://blog.mattheworiordan.com/post/13174566389/url-regular-expression-for-links-with-or-without-the

  Modified to:
  - include port numbers
  - allow full stops in email addresses
  - allow [-.~*+=!&;:'%@?^${}(),\/\w] after the #
  - allow [-.~*+=!&;:'%@?^${}(),\/\w] after the ?
  - move allow -_.~*+=!&;:'%@?^${}() in email usernames to the first @ match (TBIO-4809)
  - enforce domains to be [A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)* so they can't end in a period (TBIO-4809)
  - removed a bunch of escaping, made every group non-capturing (during TBIO-4809)
  - colons are only valid when followed directly by // or some text and then @ (TBIO-4867)
  - only include the fragment '#' if it has 1 or more trailing matches
  - only include the query '?' if it has 1 or more trailing matches
  - allow commas in URL path
  - exclude trailing comma and period in URL path
  - allow up to 15 character schemes including all valid characters from the spec https://url.spec.whatwg.org/#url-scheme-string (TINY-5074)
  - changed instances of 0-9 to be \d (TINY-5074)
  - reduced duplication (TINY-5074)
  - allow [*!;:'@$] in the path segment as they are valid characters per the spec: https://url.spec.whatwg.org/#url-path-segment-string (TINY-8069)

(?:
  (?:
    [A-Za-z][A-Za-z\d.+-]{0,14}:\/\/(?:[-.~*+=!&;:'%@?^${}(),\w]+@)?
    | www\.
    | [-;:&=+$,.\w]+@
  )
  [A-Za-z\d-]+
  (?:\.[A-Za-z\d-]+)*
)
(?::\d+)?
(?:
  \/
  (?:
     [-.~*+=!;:'%@$(),\/\w]*[-~*+=%@$()\/\w]
   )?
)?
(?:
  \?
  (?:
    [-.~*+=!&;:'%@?^${}(),\/\w]+
  )
)?
(?:
  #
  (?:
    [-.~*+=!&;:'%@?^${}(),\/\w]+
  )
)?
*/ const link = ()=>// eslint-disable-next-line max-len
    /(?:[A-Za-z][A-Za-z\d.+-]{0,14}:\/\/(?:[-.~*+=!&;:'%@?^${}(),\w]+@)?|www\.|[-;:&=+$,.\w]+@)[A-Za-z\d-]+(?:\.[A-Za-z\d-]+)*(?::\d+)?(?:\/(?:[-.~*+=!;:'%@$(),\/\w]*[-~*+=%@$()\/\w])?)?(?:\?(?:[-.~*+=!&;:'%@?^${}(),\/\w]+))?(?:#(?:[-.~*+=!&;:'%@?^${}(),\/\w]+))?/g;
const autolink = ()=>{
    /*
   * Takes the link regex, and makes two additions:
   *
   * - allows punctuation at the end (so it can be used for TBIO autolink macro)
   * - wraps the link regex in a group so that match[1] returns the desired contents
   *
   * We may need to inline the link regex if this refactoring technique causes
   * performance issues; we're assuming browsers can optimise the above regex
   * but not this style.
   * TBIO calls this method every time space or enter is pressed.
   */ const linksource = link().source;
    return new RegExp('(' + linksource + ')[-.~*+=!&;:\'%@?#^${}(),]*', 'g');
};
const tokens = (value, parameters)=>value.replace(/\{(\d+)\}/g, (match, contents)=>{
        const index = parseInt(contents, 10);
        if (parameters[index] === undefined) {
            throw new Error('No value for token: ' + match + ' in translation: ' + value);
        }
        return parameters[index];
    });



}),
"./src/plugins/autolink/main/ts/Plugin.ts": 
/*!************************************************!*\
  !*** ./src/plugins/autolink/main/ts/Plugin.ts ***!
  \************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var tinymce_core_api_PluginManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/PluginManager */ "./lib/globals/tinymce/core/api/PluginManager.js");
/* ESM import */var _api_Options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/Options */ "./src/plugins/autolink/main/ts/api/Options.ts");
/* ESM import */var _core_Keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/Keys */ "./src/plugins/autolink/main/ts/core/Keys.ts");



/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>{
    tinymce_core_api_PluginManager__WEBPACK_IMPORTED_MODULE_0__["default"].add('autolink', (editor)=>{
        _api_Options__WEBPACK_IMPORTED_MODULE_1__.register(editor);
        _core_Keys__WEBPACK_IMPORTED_MODULE_2__.setup(editor);
    });
});


}),
"./src/plugins/autolink/main/ts/api/Options.ts": 
/*!*****************************************************!*\
  !*** ./src/plugins/autolink/main/ts/api/Options.ts ***!
  \*****************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  allowUnsafeLinkTarget: () => (allowUnsafeLinkTarget),
  getAutoLinkPattern: () => (getAutoLinkPattern),
  getDefaultLinkProtocol: () => (getDefaultLinkProtocol),
  getDefaultLinkTarget: () => (getDefaultLinkTarget),
  register: () => (register)
});
/* ESM import */var _ephox_polaris__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ephox/polaris */ "../polaris/src/main/ts/ephox/polaris/api/Regexes.ts");

const option = (name)=>(editor)=>editor.options.get(name);
const register = (editor)=>{
    const registerOption = editor.options.register;
    registerOption('autolink_pattern', {
        processor: 'regexp',
        // Use the Polaris link detection, however for autolink we need to make it be an exact match
        default: new RegExp('^' + _ephox_polaris__WEBPACK_IMPORTED_MODULE_0__.link().source + '$', 'i')
    });
    registerOption('link_default_target', {
        processor: 'string'
    });
    registerOption('link_default_protocol', {
        processor: 'string',
        default: 'https'
    });
};
const getAutoLinkPattern = option('autolink_pattern');
const getDefaultLinkTarget = option('link_default_target');
const getDefaultLinkProtocol = option('link_default_protocol');
const allowUnsafeLinkTarget = option('allow_unsafe_link_target');



}),
"./src/plugins/autolink/main/ts/core/Keys.ts": 
/*!***************************************************!*\
  !*** ./src/plugins/autolink/main/ts/core/Keys.ts ***!
  \***************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  setup: () => (setup)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Obj.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Fun.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Unicode.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Strings.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Type.ts");
/* ESM import */var tinymce_core_api_dom_TextSeeker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/dom/TextSeeker */ "./lib/globals/tinymce/core/api/dom/TextSeeker.js");
/* ESM import */var _api_Options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/Options */ "./src/plugins/autolink/main/ts/api/Options.ts");
/* ESM import */var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utils */ "./src/plugins/autolink/main/ts/core/Utils.ts");




const parseCurrentLine = (editor, offset)=>{
    const voidElements = editor.schema.getVoidElements();
    const autoLinkPattern = _api_Options__WEBPACK_IMPORTED_MODULE_1__.getAutoLinkPattern(editor);
    const { dom, selection } = editor;
    // Never create a link when we are inside a link
    if (dom.getParent(selection.getNode(), 'a[href]') !== null || editor.mode.isReadOnly()) {
        return null;
    }
    const rng = selection.getRng();
    const textSeeker = (0,tinymce_core_api_dom_TextSeeker__WEBPACK_IMPORTED_MODULE_0__["default"])(dom, (node)=>{
        return dom.isBlock(node) || _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__.has(voidElements, node.nodeName.toLowerCase()) || dom.getContentEditable(node) === 'false' || dom.getParent(node, 'a[href]') !== null;
    });
    // Descend down the end container to find the text node
    const { container: endContainer, offset: endOffset } = (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.freefallRtl)(rng.endContainer, rng.endOffset);
    // Find the root container to use when walking
    const root = dom.getParent(endContainer, dom.isBlock) ?? dom.getRoot();
    // Move the selection backwards to the start of the potential URL to account for the pressed character
    // while also excluding the last full stop from a word like "www.site.com."
    const endSpot = textSeeker.backwards(endContainer, endOffset + offset, (node, offset)=>{
        const text = node.data;
        const idx = (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.findChar)(text, offset, _ephox_katamari__WEBPACK_IMPORTED_MODULE_4__.not(_Utils__WEBPACK_IMPORTED_MODULE_2__.isBracketOrSpace));
        // Move forward one so the offset is after the found character unless the found char is a punctuation char
        return idx === -1 || (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.isPunctuation)(text[idx]) ? idx : idx + 1;
    }, root);
    if (!endSpot) {
        return null;
    }
    // Walk backwards until we find a boundary or a bracket/space
    let lastTextNode = endSpot.container;
    const startSpot = textSeeker.backwards(endSpot.container, endSpot.offset, (node, offset)=>{
        lastTextNode = node;
        const idx = (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.findChar)(node.data, offset, _Utils__WEBPACK_IMPORTED_MODULE_2__.isBracketOrSpace);
        // Move forward one so that the offset is after the bracket/space
        return idx === -1 ? idx : idx + 1;
    }, root);
    const newRng = dom.createRng();
    if (!startSpot) {
        newRng.setStart(lastTextNode, 0);
    } else {
        newRng.setStart(startSpot.container, startSpot.offset);
    }
    newRng.setEnd(endSpot.container, endSpot.offset);
    const rngText = _ephox_katamari__WEBPACK_IMPORTED_MODULE_5__.removeZwsp(newRng.toString());
    const matches = rngText.match(autoLinkPattern);
    if (matches) {
        let url = matches[0];
        if (_ephox_katamari__WEBPACK_IMPORTED_MODULE_6__.startsWith(url, 'www.')) {
            const protocol = _api_Options__WEBPACK_IMPORTED_MODULE_1__.getDefaultLinkProtocol(editor);
            url = protocol + '://' + url;
        } else if (_ephox_katamari__WEBPACK_IMPORTED_MODULE_6__.contains(url, '@') && !(0,_Utils__WEBPACK_IMPORTED_MODULE_2__.hasProtocol)(url)) {
            url = 'mailto:' + url;
        }
        return {
            rng: newRng,
            url
        };
    } else {
        return null;
    }
};
const convertToLink = (editor, result)=>{
    const { dom, selection } = editor;
    const { rng, url } = result;
    const bookmark = selection.getBookmark();
    selection.setRng(rng);
    // Needs to be a native createlink command since this is executed in a keypress event handler
    // so the pending character that is to be inserted needs to be inserted after the link. That will not
    // happen if we use the formatter create link version. Since we're using the native command
    // then we also need to ensure the exec command events are fired for backwards compatibility.
    const command = 'createlink';
    const args = {
        command,
        ui: false,
        value: url
    };
    const beforeExecEvent = editor.dispatch('BeforeExecCommand', args);
    if (!beforeExecEvent.isDefaultPrevented()) {
        editor.getDoc().execCommand(command, false, url);
        editor.dispatch('ExecCommand', args);
        const defaultLinkTarget = _api_Options__WEBPACK_IMPORTED_MODULE_1__.getDefaultLinkTarget(editor);
        if (_ephox_katamari__WEBPACK_IMPORTED_MODULE_7__.isString(defaultLinkTarget)) {
            const anchor = selection.getNode();
            dom.setAttrib(anchor, 'target', defaultLinkTarget);
            // Ensure noopener is added for blank targets to prevent window opener attacks
            if (defaultLinkTarget === '_blank' && !_api_Options__WEBPACK_IMPORTED_MODULE_1__.allowUnsafeLinkTarget(editor)) {
                dom.setAttrib(anchor, 'rel', 'noopener');
            }
        }
    }
    selection.moveToBookmark(bookmark);
    editor.nodeChanged();
};
const handleSpacebar = (editor)=>{
    const result = parseCurrentLine(editor, -1);
    if (_ephox_katamari__WEBPACK_IMPORTED_MODULE_7__.isNonNullable(result)) {
        convertToLink(editor, result);
    }
};
const handleBracket = handleSpacebar;
const handleEnter = (editor)=>{
    const result = parseCurrentLine(editor, 0);
    if (_ephox_katamari__WEBPACK_IMPORTED_MODULE_7__.isNonNullable(result)) {
        convertToLink(editor, result);
    }
};
const setup = (editor)=>{
    editor.on('keydown', (e)=>{
        if (e.keyCode === 13 && !e.isDefaultPrevented()) {
            handleEnter(editor);
        }
    });
    editor.on('keyup', (e)=>{
        if (e.keyCode === 32) {
            handleSpacebar(editor);
        // One of the closing bracket keys: ), ] or }
        } else if (e.keyCode === 48 && e.shiftKey || e.keyCode === 221) {
            handleBracket(editor);
        }
    });
};



}),
"./src/plugins/autolink/main/ts/core/Utils.ts": 
/*!****************************************************!*\
  !*** ./src/plugins/autolink/main/ts/core/Utils.ts ***!
  \****************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  findChar: () => (findChar),
  freefallRtl: () => (freefallRtl),
  hasProtocol: () => (hasProtocol),
  isBracketOrSpace: () => (isBracketOrSpace),
  isElement: () => (isElement),
  isPunctuation: () => (isPunctuation),
  isTextNode: () => (isTextNode)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Unicode.ts");

const isTextNode = (node)=>node.nodeType === 3;
const isElement = (node)=>node.nodeType === 1;
const isBracketOrSpace = (char)=>/^[(\[{ \u00a0]$/.test(char);
// Note: This is similar to the Polaris protocol detection, except it also handles `mailto` and any length scheme
const hasProtocol = (url)=>/^([A-Za-z][A-Za-z\d.+-]*:\/\/)|mailto:/.test(url);
// A limited list of punctuation characters that might be used after a link
const isPunctuation = (char)=>/[?!,.;:]/.test(char);
const findChar = (text, index, predicate)=>{
    for(let i = index - 1; i >= 0; i--){
        const char = text.charAt(i);
        if (!_ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.isZwsp(char) && predicate(char)) {
            return i;
        }
    }
    return -1;
};
const freefallRtl = (container, offset)=>{
    let tempNode = container;
    let tempOffset = offset;
    while(isElement(tempNode) && tempNode.childNodes[tempOffset]){
        tempNode = tempNode.childNodes[tempOffset];
        tempOffset = isTextNode(tempNode) ? tempNode.data.length : tempNode.childNodes.length;
    }
    return {
        container: tempNode,
        offset: tempOffset
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

/*!**********************************************!*\
  !*** ./src/plugins/autolink/main/ts/Main.ts ***!
  \**********************************************/
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _Plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Plugin */ "./src/plugins/autolink/main/ts/Plugin.ts");

(0,_Plugin__WEBPACK_IMPORTED_MODULE_0__["default"])(); /** *****
 * DO NOT EXPORT ANYTHING
 *
 * IF YOU DO ROLLUP WILL LEAVE A GLOBAL ON THE PAGE
 *******/ 

})();

})()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdGlueW1jZS9wbHVnaW5zL2F1dG9saW5rL3BsdWdpbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL3RpbnltY2UvLi9saWIvZ2xvYmFscy90aW55bWNlL2NvcmUvYXBpL1BsdWdpbk1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL2xpYi9nbG9iYWxzL3RpbnltY2UvY29yZS9hcGkvZG9tL1RleHRTZWVrZXIuanMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9rYXRhbWFyaS9zcmMvbWFpbi90cy9lcGhveC9rYXRhbWFyaS9hcGkvRnVuLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4va2F0YW1hcmkvc3JjL21haW4vdHMvZXBob3gva2F0YW1hcmkvYXBpL09iai50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL2thdGFtYXJpL3NyYy9tYWluL3RzL2VwaG94L2thdGFtYXJpL2FwaS9PcHRpb25hbC50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL2thdGFtYXJpL3NyYy9tYWluL3RzL2VwaG94L2thdGFtYXJpL2FwaS9TdHJpbmdzLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4va2F0YW1hcmkvc3JjL21haW4vdHMvZXBob3gva2F0YW1hcmkvYXBpL1R5cGUudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9rYXRhbWFyaS9zcmMvbWFpbi90cy9lcGhveC9rYXRhbWFyaS9hcGkvVW5pY29kZS50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL2thdGFtYXJpL3NyYy9tYWluL3RzL2VwaG94L2thdGFtYXJpL3N0ci9TdHJBcHBlbmQudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9wb2xhcmlzL3NyYy9tYWluL3RzL2VwaG94L3BvbGFyaXMvYXBpL1JlZ2V4ZXMudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL2F1dG9saW5rL21haW4vdHMvUGx1Z2luLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9hdXRvbGluay9tYWluL3RzL2FwaS9PcHRpb25zLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9hdXRvbGluay9tYWluL3RzL2NvcmUvS2V5cy50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvYXV0b2xpbmsvbWFpbi90cy9jb3JlL1V0aWxzLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4vLi4vbm9kZV9tb2R1bGVzL0BlcGhveC9kaXNwdXRlL3NyYy9tYWluL3RzL2FwaS9FcS50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uLy4uL25vZGVfbW9kdWxlcy9AZXBob3gvZGlzcHV0ZS9zcmMvbWFpbi90cy9jb3JlL0FycmF5VXRpbC50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uLy4uL25vZGVfbW9kdWxlcy9AZXBob3gvZGlzcHV0ZS9zcmMvbWFpbi90cy9jb3JlL1R5cGUudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lX3Byb3BlcnR5X2dldHRlcnMiLCJ3ZWJwYWNrOi8vdGlueW1jZS93ZWJwYWNrL3J1bnRpbWUvaGFzX293bl9wcm9wZXJ0eSIsIndlYnBhY2s6Ly90aW55bWNlL3dlYnBhY2svcnVudGltZS9tYWtlX25hbWVzcGFjZV9vYmplY3QiLCJ3ZWJwYWNrOi8vdGlueW1jZS93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3ZlcnNpb24iLCJ3ZWJwYWNrOi8vdGlueW1jZS93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3VuaXF1ZV9pZCIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvYXV0b2xpbmsvbWFpbi90cy9NYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBnbG9iYWwgPSB0aW55bWNlLnV0aWwuVG9vbHMucmVzb2x2ZSgndGlueW1jZS5QbHVnaW5NYW5hZ2VyJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGdsb2JhbDtcbmV4cG9ydCB2YXIgUGx1Z2luTWFuYWdlciA9IGdsb2JhbDtcbiIsInZhciBnbG9iYWwgPSB0aW55bWNlLnV0aWwuVG9vbHMucmVzb2x2ZSgndGlueW1jZS5kb20uVGV4dFNlZWtlcicpO1xuXG5leHBvcnQgZGVmYXVsdCBnbG9iYWw7XG5leHBvcnQgdmFyIFRleHRTZWVrZXIgPSBnbG9iYWw7XG4iLCJpbXBvcnQgKiBhcyBUeXBlIGZyb20gJy4vVHlwZSc7XG5cbmNvbnN0IG5vb3A6ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZFxuPSAoKSA9PiB7IH07XG5cbmNvbnN0IG5vYXJnOiA8VD4oZjogKCkgPT4gVCkgPT4gKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkXG49IChmKSA9PiAoKSA9PiBmKCk7XG5cbi8qKiBDb21wb3NlIGEgdW5hcnkgZnVuY3Rpb24gd2l0aCBhbiBuLWFyeSBmdW5jdGlvbiAqL1xuY29uc3QgY29tcG9zZSA9IDxUIGV4dGVuZHMgYW55W10sIFUsIFY+KGZhOiAodjogVSkgPT4gViwgZmI6ICguLi54OiBUKSA9PiBVKTogKC4uLng6IFQpID0+IFYgPT4ge1xuICByZXR1cm4gKC4uLmFyZ3M6IFQpID0+IHtcbiAgICByZXR1cm4gZmEoZmIuYXBwbHkobnVsbCwgYXJncykpO1xuICB9O1xufTtcblxuLyoqIENvbXBvc2UgdHdvIHVuYXJ5IGZ1bmN0aW9ucy4gU2ltaWxhciB0byBjb21wb3NlLCBidXQgYXZvaWRzIHVzaW5nIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS4gKi9cbmNvbnN0IGNvbXBvc2UxID0gPEEsIEIsIEM+IChmYmM6IChiOiBCKSA9PiBDLCBmYWI6IChhOiBBKSA9PiBCKSA9PiAoYTogQSk6IEMgPT5cbiAgZmJjKGZhYihhKSk7XG5cbmNvbnN0IGNvbnN0YW50ID0gPFQ+KHZhbHVlOiBUKTogKCkgPT4gVCA9PiB7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xufTtcblxuY29uc3QgaWRlbnRpdHkgPSA8VCA9IGFueT4oeDogVCk6IFQgPT4ge1xuICByZXR1cm4geDtcbn07XG5cbmNvbnN0IHRyaXBsZUVxdWFscyA9IDxUPihhOiBULCBiOiBUKTogYm9vbGVhbiA9PiB7XG4gIHJldHVybiBhID09PSBiO1xufTtcblxuZnVuY3Rpb24gY3VycnkgPFJFU1QgZXh0ZW5kcyBhbnlbXSwgT1VUPihmbjogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQpOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVDtcbmZ1bmN0aW9uIGN1cnJ5IDxBLCBSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46IChhOiBBLCAuLi5yZXN0QXJnczogUkVTVCkgPT4gT1VULCBhOiBBKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8QSwgQiwgUkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoYTogQSwgYjogQiwgLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCwgYTogQSwgYjogQik6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPEEsIEIsIEMsIFJFU1QgZXh0ZW5kcyBhbnlbXSwgT1VUPihmbjogKGE6IEEsIGI6IEIsIGM6IEMsIC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQsIGE6IEEsIGI6IEIsIGM6IEMpOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVDtcbmZ1bmN0aW9uIGN1cnJ5IDxBLCBCLCBDLCBELCBSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46IChhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCAuLi5yZXN0QXJnczogUkVTVCkgPT4gT1VULCBhOiBBLCBiOiBCLCBjOiBDLCBkOiBEKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8QSwgQiwgQywgRCwgRSwgUkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCwgYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSk6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPEEsIEIsIEMsIEQsIEUsIEYsIFJFU1QgZXh0ZW5kcyBhbnlbXSwgT1VUPihmbjogKGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIGY6IEYsIC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQsIGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIGY6IEYpOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVDtcbmZ1bmN0aW9uIGN1cnJ5IDxBLCBCLCBDLCBELCBFLCBGLCBHLCBSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46IChhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCBmOiBGLCBnOiBHLCAuLi5yZXN0QXJnczogUkVTVCkgPT4gT1VULCBhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCBmOiBGLCBnOiBHKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8QSwgQiwgQywgRCwgRSwgRiwgRywgSCwgUkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgZjogRiwgZzogRywgaDogSCwgLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCwgYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgZjogRiwgZzogRywgaDogSCk6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPEEsIEIsIEMsIEQsIEUsIEYsIEcsIEgsIEksIFJFU1QgZXh0ZW5kcyBhbnlbXSwgT1VUPihmbjogKGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIGY6IEYsIGc6IEcsIGg6IEgsIGk6IEksIC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQsIGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIGY6IEYsIGc6IEcsIGg6IEgsIGk6IEkpOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVDtcbmZ1bmN0aW9uIGN1cnJ5IDxBLCBCLCBDLCBELCBFLCBGLCBHLCBILCBJLCBKLCBSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46IChhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCBmOiBGLCBnOiBHLCBoOiBILCBpOiBJLCBqOiBKLCAuLi5yZXN0QXJnczogUkVTVCkgPT4gT1VULCBhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCBmOiBGLCBnOiBHLCBoOiBILCBpOiBJLCBqOiBKKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8T1VUPihmbjogKC4uLmFsbEFyZ3M6IGFueVtdKSA9PiBPVVQsIC4uLmluaXRpYWxBcmdzOiBhbnlbXSk6ICguLi5yZXN0QXJnczogYW55W10pID0+IE9VVCB7XG4gIHJldHVybiAoLi4ucmVzdEFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3QgYWxsID0gaW5pdGlhbEFyZ3MuY29uY2F0KHJlc3RBcmdzKTtcbiAgICByZXR1cm4gZm4uYXBwbHkobnVsbCwgYWxsKTtcbiAgfTtcbn1cblxuY29uc3Qgbm90ID0gPFQ+KGY6ICh0OiBUKSA9PiBib29sZWFuKSA9PiAodDogVCk6IGJvb2xlYW4gPT5cbiAgIWYodCk7XG5cbmNvbnN0IGRpZSA9IChtc2c6IHN0cmluZykgPT4ge1xuICByZXR1cm4gKCk6IG5ldmVyID0+IHtcbiAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcbiAgfTtcbn07XG5cbmNvbnN0IGFwcGx5ID0gPFQ+KGY6ICgpID0+IFQpOiBUID0+IHtcbiAgcmV0dXJuIGYoKTtcbn07XG5cbmNvbnN0IGNhbGwgPSAoZjogKCkgPT4gYW55KTogdm9pZCA9PiB7XG4gIGYoKTtcbn07XG5cbmNvbnN0IG5ldmVyOiAoLi4uYXJnczogYW55W10pID0+IGZhbHNlID0gY29uc3RhbnQ8ZmFsc2U+KGZhbHNlKTtcbmNvbnN0IGFsd2F5czogKC4uLmFyZ3M6IGFueVtdKSA9PiB0cnVlID0gY29uc3RhbnQ8dHJ1ZT4odHJ1ZSk7XG5cbi8qIFVzZWQgdG8gd2Vha2VuIHR5cGVzICovXG5jb25zdCB3ZWFrZW4gPSA8QSwgQiBleHRlbmRzIEE+KGI6IEIpOiBBID0+IGI7XG5cbnR5cGUgRnVuPFgsIFk+ID0gKHg6IFgpID0+IFk7XG5jb25zdCBwaXBlOiB7XG4gIDxBLCBCPihhOiBBLCBhYjogRnVuPEEsIEI+KTogQjtcbiAgPEEsIEIsIEM+KGE6IEEsIGFiOiBGdW48QSwgQj4sIGJjOiBGdW48QiwgQz4pOiBDO1xuICA8QSwgQiwgQywgRD4oYTogQSwgYWI6IEZ1bjxBLCBCPiwgYmM6IEZ1bjxCLCBDPiwgY2Q6IEZ1bjxDLCBEPik6IEQ7XG4gIDxBLCBCLCBDLCBELCBFPihhOiBBLCBhYjogRnVuPEEsIEI+LCBiYzogRnVuPEIsIEM+LCBjZDogRnVuPEMsIEQ+LCBkZTogRnVuPEQsIEU+KTogRTtcbiAgPEEsIEIsIEMsIEQsIEUsIEY+KGE6IEEsIGFiOiBGdW48QSwgQj4sIGJjOiBGdW48QiwgQz4sIGNkOiBGdW48QywgRD4sIGRlOiBGdW48RCwgRT4sIGVmOiBGdW48RSwgRj4pOiBGO1xuICA8QSwgQiwgQywgRCwgRSwgRiwgRz4oYTogQSwgYWI6IEZ1bjxBLCBCPiwgYmM6IEZ1bjxCLCBDPiwgY2Q6IEZ1bjxDLCBEPiwgZGU6IEZ1bjxELCBFPiwgZWY6IEZ1bjxFLCBGPiwgZmc6IEZ1bjxGLCBHPik6IEc7XG4gIDxBLCBCLCBDLCBELCBFLCBGLCBHLCBIPihhOiBBLCBhYjogRnVuPEEsIEI+LCBiYzogRnVuPEIsIEM+LCBjZDogRnVuPEMsIEQ+LCBkZTogRnVuPEQsIEU+LCBlZjogRnVuPEUsIEY+LCBmZzogRnVuPEYsIEc+LCBnaDogRnVuPEcsIEg+KTogSDtcbn0gPVxuICA8QSwgQiwgQywgRCwgRSwgRiwgRywgSD4oYTogQSwgYWI6IEZ1bjxBLCBCPiwgYmM/OiBGdW48QiwgQz4sIGNkPzogRnVuPEMsIEQ+LCBkZT86IEZ1bjxELCBFPiwgZWY/OiBGdW48RSwgRj4sIGZnPzogRnVuPEYsIEc+LCBnaD86IEZ1bjxHLCBIPik6IEIgfCBDIHwgRCB8IEUgfCBGIHwgRyB8IEggPT4ge1xuICAgIGNvbnN0IGIgPSBhYihhKTtcbiAgICBpZiAoVHlwZS5pc051bGxhYmxlKGJjKSkge1xuICAgICAgcmV0dXJuIGI7XG4gICAgfVxuXG4gICAgY29uc3QgYyA9IGJjKGIpO1xuICAgIGlmIChUeXBlLmlzTnVsbGFibGUoY2QpKSB7XG4gICAgICByZXR1cm4gYztcbiAgICB9XG5cbiAgICBjb25zdCBkID0gY2QoYyk7XG4gICAgaWYgKFR5cGUuaXNOdWxsYWJsZShkZSkpIHtcbiAgICAgIHJldHVybiBkO1xuICAgIH1cblxuICAgIGNvbnN0IGUgPSBkZShkKTtcbiAgICBpZiAoVHlwZS5pc051bGxhYmxlKGVmKSkge1xuICAgICAgcmV0dXJuIGU7XG4gICAgfVxuXG4gICAgY29uc3QgZiA9IGVmKGUpO1xuICAgIGlmIChUeXBlLmlzTnVsbGFibGUoZmcpKSB7XG4gICAgICByZXR1cm4gZjtcbiAgICB9XG5cbiAgICBjb25zdCBnID0gZmcoZik7XG4gICAgaWYgKFR5cGUuaXNOdWxsYWJsZShnaCkpIHtcbiAgICAgIHJldHVybiBnO1xuICAgIH1cblxuICAgIHJldHVybiBnaChnKTtcbiAgfTtcblxuZXhwb3J0IHtcbiAgbm9vcCxcbiAgbm9hcmcsXG4gIGNvbXBvc2UsXG4gIGNvbXBvc2UxLFxuICBjb25zdGFudCxcbiAgaWRlbnRpdHksXG4gIHRyaXBsZUVxdWFscyxcbiAgY3VycnksXG4gIG5vdCxcbiAgZGllLFxuICBhcHBseSxcbiAgY2FsbCxcbiAgbmV2ZXIsXG4gIGFsd2F5cyxcbiAgd2Vha2VuLFxuICBwaXBlXG59O1xuIiwiaW1wb3J0IHsgRXEgfSBmcm9tICdAZXBob3gvZGlzcHV0ZSc7XG5cbmltcG9ydCAqIGFzIEZ1biBmcm9tICcuL0Z1bic7XG5pbXBvcnQgeyBPcHRpb25hbCB9IGZyb20gJy4vT3B0aW9uYWwnO1xuXG50eXBlIE9iaktleXM8VCBleHRlbmRzIHt9PiA9IEV4dHJhY3Q8a2V5b2YgVCwgc3RyaW5nPjtcbnR5cGUgT2JqQ2FsbGJhY2s8VCBleHRlbmRzIHt9PiA9ICh2YWx1ZTogVFtrZXlvZiBUXSwga2V5OiBPYmpLZXlzPFQ+KSA9PiB2b2lkO1xudHlwZSBPYmpNb3JwaGlzbTxUIGV4dGVuZHMge30sIFI+ID0gKHZhbHVlOiBUW2tleW9mIFRdLCBrZXk6IE9iaktleXM8VD4pID0+IFI7XG50eXBlIE9iakd1YXJkUHJlZGljYXRlPFQgZXh0ZW5kcyB7fSwgVSBleHRlbmRzIFRba2V5b2YgVF0+ID0gKHZhbHVlOiBUW2tleW9mIFRdLCBrZXk6IE9iaktleXM8VD4pID0+IHZhbHVlIGlzIFU7XG50eXBlIE9ialByZWRpY2F0ZTxUIGV4dGVuZHMge30+ID0gKHZhbHVlOiBUW2tleW9mIFRdLCBrZXk6IE9iaktleXM8VD4pID0+IGJvb2xlYW47XG5cbi8vIFRoZXJlIGFyZSBtYW55IHZhcmlhdGlvbnMgb2YgT2JqZWN0IGl0ZXJhdGlvbiB0aGF0IGFyZSBmYXN0ZXIgdGhhbiB0aGUgJ2Zvci1pbicgc3R5bGU6XG4vLyBodHRwOi8vanNwZXJmLmNvbS9vYmplY3Qta2V5cy1pdGVyYXRpb24vMTA3XG4vL1xuLy8gVXNlIHRoZSBuYXRpdmUga2V5cyBpZiBpdCBpcyBhdmFpbGFibGUgKElFOSspLCBvdGhlcndpc2UgZmFsbCBiYWNrIHRvIG1hbnVhbGx5IGZpbHRlcmluZ1xuZXhwb3J0IGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cztcblxuZXhwb3J0IGNvbnN0IGhhc093blByb3BlcnR5ID0gT2JqZWN0Lmhhc093blByb3BlcnR5O1xuXG5leHBvcnQgY29uc3QgZWFjaCA9IDxUIGV4dGVuZHMge30+KG9iajogVCwgZjogT2JqQ2FsbGJhY2s8VD4pOiB2b2lkID0+IHtcbiAgY29uc3QgcHJvcHMgPSBrZXlzKG9iaikgYXMgQXJyYXk8T2JqS2V5czxUPj47XG4gIGZvciAobGV0IGsgPSAwLCBsZW4gPSBwcm9wcy5sZW5ndGg7IGsgPCBsZW47IGsrKykge1xuICAgIGNvbnN0IGkgPSBwcm9wc1trXTtcbiAgICBjb25zdCB4ID0gb2JqW2ldO1xuICAgIGYoeCwgaSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBtYXAgPSA8VCBleHRlbmRzIHt9LCBSPihvYmo6IFQsIGY6IE9iak1vcnBoaXNtPFQsIFI+KTogeyBbayBpbiBrZXlvZiBUXTogUiB9ID0+IHtcbiAgcmV0dXJuIHR1cGxlTWFwPHsgW2sgaW4ga2V5b2YgVF06IFIgfSwgVD4ob2JqLCAoeCwgaSkgPT4gKHtcbiAgICBrOiBpLFxuICAgIHY6IGYoeCwgaSlcbiAgfSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IHR1cGxlTWFwID0gPFIgZXh0ZW5kcyB7fSwgVCBleHRlbmRzIHt9PihvYmo6IFQsIGY6IE9iak1vcnBoaXNtPFQsIHsgazoga2V5b2YgUjsgdjogUltrZXlvZiBSXSB9Pik6IFIgPT4ge1xuICBjb25zdCByID0ge30gYXMgUjtcbiAgZWFjaChvYmosICh4LCBpKSA9PiB7XG4gICAgY29uc3QgdHVwbGUgPSBmKHgsIGkpO1xuICAgIHJbdHVwbGUua10gPSB0dXBsZS52O1xuICB9KTtcbiAgcmV0dXJuIHI7XG59O1xuXG5jb25zdCBvYmpBY2MgPSA8VCBleHRlbmRzIHt9PihyOiBUKSA9PiAoeDogVFtrZXlvZiBUXSwgaToga2V5b2YgVCk6IHZvaWQgPT4ge1xuICByW2ldID0geDtcbn07XG5cbmNvbnN0IGludGVybmFsRmlsdGVyID0gPFQgZXh0ZW5kcyB7fT4ob2JqOiBULCBwcmVkOiBPYmpQcmVkaWNhdGU8VD4sIG9uVHJ1ZTogT2JqQ2FsbGJhY2s8VD4sIG9uRmFsc2U6IE9iakNhbGxiYWNrPFQ+KSA9PiB7XG4gIGVhY2gob2JqLCAoeCwgaSkgPT4ge1xuICAgIChwcmVkKHgsIGkpID8gb25UcnVlIDogb25GYWxzZSkoeCwgaSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGJpZmlsdGVyID0gPFQgZXh0ZW5kcyB7fT4ob2JqOiBULCBwcmVkOiBPYmpQcmVkaWNhdGU8VD4pOiB7IHQ6IFJlY29yZDxzdHJpbmcsIFRba2V5b2YgVF0+OyBmOiBSZWNvcmQ8c3RyaW5nLCBUW2tleW9mIFRdPiB9ID0+IHtcbiAgY29uc3QgdDogUmVjb3JkPHN0cmluZywgVFtrZXlvZiBUXT4gPSB7fTtcbiAgY29uc3QgZjogUmVjb3JkPHN0cmluZywgVFtrZXlvZiBUXT4gPSB7fTtcbiAgaW50ZXJuYWxGaWx0ZXIob2JqLCBwcmVkLCBvYmpBY2ModCksIG9iakFjYyhmKSk7XG4gIHJldHVybiB7IHQsIGYgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBmaWx0ZXI6IHtcbiAgPFQgZXh0ZW5kcyB7fSwgVSBleHRlbmRzIFRba2V5b2YgVF0+KG9iajogVCwgcHJlZDogT2JqR3VhcmRQcmVkaWNhdGU8VCwgVT4pOiBSZWNvcmQ8c3RyaW5nLCBVPjtcbiAgPFQgZXh0ZW5kcyB7fT4ob2JqOiBULCBwcmVkOiBPYmpQcmVkaWNhdGU8VD4pOiBSZWNvcmQ8c3RyaW5nLCBUW2tleW9mIFRdPjtcbn0gPSA8VCBleHRlbmRzIHt9PihvYmo6IFQsIHByZWQ6IE9ialByZWRpY2F0ZTxUPik6IFJlY29yZDxzdHJpbmcsIFRba2V5b2YgVF0+ID0+IHtcbiAgY29uc3QgdDogUmVjb3JkPHN0cmluZywgVFtrZXlvZiBUXT4gPSB7fTtcbiAgaW50ZXJuYWxGaWx0ZXIob2JqLCBwcmVkLCBvYmpBY2ModCksIEZ1bi5ub29wKTtcbiAgcmV0dXJuIHQ7XG59O1xuXG5leHBvcnQgY29uc3QgbWFwVG9BcnJheSA9IDxUIGV4dGVuZHMge30sIFI+KG9iajogVCwgZjogT2JqTW9ycGhpc208VCwgUj4pOiBSW10gPT4ge1xuICBjb25zdCByOiBSW10gPSBbXTtcbiAgZWFjaChvYmosICh2YWx1ZSwgbmFtZSkgPT4ge1xuICAgIHIucHVzaChmKHZhbHVlLCBuYW1lKSk7XG4gIH0pO1xuICByZXR1cm4gcjtcbn07XG5cbmV4cG9ydCBjb25zdCBmaW5kID0gPFQgZXh0ZW5kcyB7fT4ob2JqOiBULCBwcmVkOiAodmFsdWU6IFRba2V5b2YgVF0sIGtleTogT2JqS2V5czxUPiwgb2JqOiBUKSA9PiBib29sZWFuKTogT3B0aW9uYWw8VFtrZXlvZiBUXT4gPT4ge1xuICBjb25zdCBwcm9wcyA9IGtleXMob2JqKSBhcyBBcnJheTxPYmpLZXlzPFQ+PjtcbiAgZm9yIChsZXQgayA9IDAsIGxlbiA9IHByb3BzLmxlbmd0aDsgayA8IGxlbjsgaysrKSB7XG4gICAgY29uc3QgaSA9IHByb3BzW2tdO1xuICAgIGNvbnN0IHggPSBvYmpbaV07XG4gICAgaWYgKHByZWQoeCwgaSwgb2JqKSkge1xuICAgICAgcmV0dXJuIE9wdGlvbmFsLnNvbWUoeCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBPcHRpb25hbC5ub25lKCk7XG59O1xuXG5leHBvcnQgY29uc3QgdmFsdWVzID0gPFQgZXh0ZW5kcyB7fT4ob2JqOiBUKTogQXJyYXk8VFtrZXlvZiBUXT4gPT4ge1xuICByZXR1cm4gbWFwVG9BcnJheShvYmosIEZ1bi5pZGVudGl0eSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2l6ZSA9IChvYmo6IHt9KTogbnVtYmVyID0+IHtcbiAgcmV0dXJuIGtleXMob2JqKS5sZW5ndGg7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0ID0gPFQgZXh0ZW5kcyB7fSwgSyBleHRlbmRzIGtleW9mIFQ+KG9iajogVCwga2V5OiBLKTogT3B0aW9uYWw8Tm9uTnVsbGFibGU8VFtLXT4+ID0+IHtcbiAgcmV0dXJuIGhhcyhvYmosIGtleSkgPyBPcHRpb25hbC5mcm9tKG9ialtrZXldIGFzIE5vbk51bGxhYmxlPFRbS10+KSA6IE9wdGlvbmFsLm5vbmUoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBoYXMgPSA8VCBleHRlbmRzIHt9LCBLIGV4dGVuZHMga2V5b2YgVD4ob2JqOiBULCBrZXk6IEspOiBib29sZWFuID0+XG4gIGhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpO1xuXG5leHBvcnQgY29uc3QgaGFzTm9uTnVsbGFibGVLZXkgPSA8VCBleHRlbmRzIHt9LCBLIGV4dGVuZHMga2V5b2YgVD4ob2JqOiBULCBrZXk6IEspOiBvYmogaXMgVCAmIFJlY29yZDxLLCBOb25OdWxsYWJsZTxUW0tdPj4gPT5cbiAgaGFzKG9iaiwga2V5KSAmJiBvYmpba2V5XSAhPT0gdW5kZWZpbmVkICYmIG9ialtrZXldICE9PSBudWxsO1xuXG5leHBvcnQgY29uc3QgaXNFbXB0eSA9IChyOiBSZWNvcmQ8YW55LCBhbnk+KTogciBpcyB7fSA9PiB7XG4gIGZvciAoY29uc3QgeCBpbiByKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwociwgeCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5leHBvcnQgY29uc3QgZXF1YWwgPSA8VD4oYTE6IFJlY29yZDxzdHJpbmcsIFQ+LCBhMjogUmVjb3JkPHN0cmluZywgVD4sIGVxOiBFcS5FcTxUPiA9IEVxLmVxQW55KTogYm9vbGVhbiA9PlxuICBFcS5lcVJlY29yZChlcSkuZXEoYTEsIGEyKTtcbiIsImltcG9ydCAqIGFzIFR5cGUgZnJvbSAnLi9UeXBlJztcblxuLyoqXG4gKiBUaGUgYE9wdGlvbmFsYCB0eXBlIHJlcHJlc2VudHMgYSB2YWx1ZSAob2YgYW55IHR5cGUpIHRoYXQgcG90ZW50aWFsbHkgZG9lc1xuICogbm90IGV4aXN0LiBBbnkgYE9wdGlvbmFsPFQ+YCBjYW4gZWl0aGVyIGJlIGEgYFNvbWU8VD5gIChpbiB3aGljaCBjYXNlIHRoZVxuICogdmFsdWUgZG9lcyBleGlzdCkgb3IgYSBgTm9uZWAgKGluIHdoaWNoIGNhc2UgdGhlIHZhbHVlIGRvZXMgbm90IGV4aXN0KS4gVGhpc1xuICogbW9kdWxlIGRlZmluZXMgYSB3aG9sZSBsb3Qgb2YgRlAtaW5zcGlyZWQgdXRpbGl0eSBmdW5jdGlvbnMgZm9yIGRlYWxpbmcgd2l0aFxuICogYE9wdGlvbmFsYCBvYmplY3RzLlxuICpcbiAqIENvbXBhcmlzb24gd2l0aCBudWxsIG9yIHVuZGVmaW5lZDpcbiAqIC0gV2UgZG9uJ3QgZ2V0IGZhbmN5IG51bGwgY29hbGVzY2luZyBvcGVyYXRvcnMgd2l0aCBgT3B0aW9uYWxgXG4gKiAtIFdlIGRvIGdldCBmYW5jeSBoZWxwZXIgZnVuY3Rpb25zIHdpdGggYE9wdGlvbmFsYFxuICogLSBgT3B0aW9uYWxgIHN1cHBvcnQgbmVzdGluZywgYW5kIGFsbG93IGZvciB0aGUgdHlwZSB0byBzdGlsbCBiZSBudWxsYWJsZSAob3JcbiAqIGFub3RoZXIgYE9wdGlvbmFsYClcbiAqIC0gVGhlcmUgaXMgbm8gb3B0aW9uIHRvIHR1cm4gb2ZmIHN0cmljdC1vcHRpb25hbC1jaGVja3MgbGlrZSB0aGVyZSBpcyBmb3JcbiAqIHN0cmljdC1udWxsLWNoZWNrc1xuICovXG5leHBvcnQgY2xhc3MgT3B0aW9uYWw8VD4ge1xuICBwcml2YXRlIHJlYWRvbmx5IHRhZzogYm9vbGVhbjtcbiAgcHJpdmF0ZSByZWFkb25seSB2YWx1ZT86IFQ7XG5cbiAgLy8gU25lYWt5IG9wdGltaXNhdGlvbjogZXZlcnkgaW5zdGFuY2Ugb2YgT3B0aW9uYWwubm9uZSBpcyBpZGVudGljYWwsIHNvIGp1c3RcbiAgLy8gcmV1c2UgdGhlIHNhbWUgb2JqZWN0XG4gIHByaXZhdGUgc3RhdGljIHNpbmdsZXRvbk5vbmUgPSBuZXcgT3B0aW9uYWw8YW55PihmYWxzZSk7XG5cbiAgLy8gVGhlIGludGVybmFsIHJlcHJlc2VudGF0aW9uIGhhcyBhIGB0YWdgIGFuZCBhIGB2YWx1ZWAsIGJ1dCBib3RoIGFyZVxuICAvLyBwcml2YXRlOiBhYmxlIHRvIGJlIGNvbnNvbGUubG9nZ2VkLCBidXQgbm90IGFibGUgdG8gYmUgYWNjZXNzZWQgYnkgY29kZVxuICBwcml2YXRlIGNvbnN0cnVjdG9yKHRhZzogYm9vbGVhbiwgdmFsdWU/OiBUKSB7XG4gICAgdGhpcy50YWcgPSB0YWc7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgLy8gLS0tIElkZW50aXRpZXMgLS0tXG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgYE9wdGlvbmFsPFQ+YCB0aGF0ICoqZG9lcyoqIGNvbnRhaW4gYSB2YWx1ZS5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgc29tZTxUPih0aGlzOiB2b2lkLCB2YWx1ZTogVCk6IE9wdGlvbmFsPFQ+IHtcbiAgICByZXR1cm4gbmV3IE9wdGlvbmFsKHRydWUsIHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgYE9wdGlvbmFsPFQ+YCB0aGF0ICoqZG9lcyBub3QqKiBjb250YWluIGEgdmFsdWUuIGBUYCBjYW4gYmVcbiAgICogYW55IHR5cGUgYmVjYXVzZSB3ZSBkb24ndCBhY3R1YWxseSBoYXZlIGEgYFRgLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBub25lPFQgPSBuZXZlcj4odGhpczogdm9pZCk6IE9wdGlvbmFsPFQ+IHtcbiAgICByZXR1cm4gT3B0aW9uYWwuc2luZ2xldG9uTm9uZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtIGEgdHJhbnNmb3JtIG9uIGFuIGBPcHRpb25hbGAgdHlwZS4gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXNcbiAgICogYE9wdGlvbmFsYCBjb250YWlucyBhIHZhbHVlIG9yIG5vdCwgYGZvbGRgIHdpbGwgcmV0dXJuIGEgdmFsdWUgb2YgdHlwZSBgVWAuXG4gICAqIElmIHRoaXMgYE9wdGlvbmFsYCBkb2VzIG5vdCBjb250YWluIGEgdmFsdWUsIHRoZSBgVWAgd2lsbCBiZSBjcmVhdGVkIGJ5XG4gICAqIGNhbGxpbmcgYG9uTm9uZWAuIElmIHRoaXMgYE9wdGlvbmFsYCBkb2VzIGNvbnRhaW4gYSB2YWx1ZSwgdGhlIGBVYCB3aWxsIGJlXG4gICAqIGNyZWF0ZWQgYnkgY2FsbGluZyBgb25Tb21lYC5cbiAgICpcbiAgICogRm9yIHRoZSBGUCBlbnRodXNpYXN0cyBpbiB0aGUgcm9vbSwgdGhpcyBmdW5jdGlvbjpcbiAgICogMS4gQ291bGQgYmUgdXNlZCB0byBpbXBsZW1lbnQgYWxsIG9mIHRoZSBmdW5jdGlvbnMgYmVsb3dcbiAgICogMi4gRm9ybXMgYSBjYXRhbW9ycGhpc21cbiAgICovXG4gIHB1YmxpYyBmb2xkPFU+KG9uTm9uZTogKCkgPT4gVSwgb25Tb21lOiAodmFsdWU6IFQpID0+IFUpOiBVIHtcbiAgICBpZiAodGhpcy50YWcpIHtcbiAgICAgIHJldHVybiBvblNvbWUodGhpcy52YWx1ZSBhcyBUKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG9uTm9uZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgdGhpcyBgT3B0aW9uYWxgIG9iamVjdCBjb250YWlucyBhIHZhbHVlLlxuICAgKi9cbiAgcHVibGljIGlzU29tZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50YWc7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIGlmIHRoaXMgYE9wdGlvbmFsYCBvYmplY3QgKipkb2VzIG5vdCoqIGNvbnRhaW4gYSB2YWx1ZS5cbiAgICovXG4gIHB1YmxpYyBpc05vbmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLnRhZztcbiAgfVxuXG4gIC8vIC0tLSBGdW5jdG9yIChuYW1lIHN0b2xlbiBmcm9tIEhhc2tlbGwgLyBtYXRocykgLS0tXG5cbiAgLyoqXG4gICAqIFBlcmZvcm0gYSB0cmFuc2Zvcm0gb24gYW4gYE9wdGlvbmFsYCBvYmplY3QsICoqaWYqKiB0aGVyZSBpcyBhIHZhbHVlLiBJZlxuICAgKiB5b3UgcHJvdmlkZSBhIGZ1bmN0aW9uIHRvIHR1cm4gYSBUIGludG8gYSBVLCB0aGlzIGlzIHRoZSBmdW5jdGlvbiB5b3UgdXNlXG4gICAqIHRvIHR1cm4gYW4gYE9wdGlvbmFsPFQ+YCBpbnRvIGFuIGBPcHRpb25hbDxVPmAuIElmIHRoaXMgKipkb2VzKiogY29udGFpblxuICAgKiBhIHZhbHVlIHRoZW4gdGhlIG91dHB1dCB3aWxsIGFsc28gY29udGFpbiBhIHZhbHVlICh0aGF0IHZhbHVlIGJlaW5nIHRoZVxuICAgKiBvdXRwdXQgb2YgYG1hcHBlcih0aGlzLnZhbHVlKWApLCBhbmQgaWYgdGhpcyAqKmRvZXMgbm90KiogY29udGFpbiBhIHZhbHVlXG4gICAqIHRoZW4gbmVpdGhlciB3aWxsIHRoZSBvdXRwdXQuXG4gICAqL1xuICBwdWJsaWMgbWFwPFU+KG1hcHBlcjogKHZhbHVlOiBUKSA9PiBVKTogT3B0aW9uYWw8VT4ge1xuICAgIGlmICh0aGlzLnRhZykge1xuICAgICAgcmV0dXJuIE9wdGlvbmFsLnNvbWUobWFwcGVyKHRoaXMudmFsdWUgYXMgVCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gT3B0aW9uYWwubm9uZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIC0tLSBNb25hZCAobmFtZSBzdG9sZW4gZnJvbSBIYXNrZWxsIC8gbWF0aHMpIC0tLVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtIGEgdHJhbnNmb3JtIG9uIGFuIGBPcHRpb25hbGAgb2JqZWN0LCAqKmlmKiogdGhlcmUgaXMgYSB2YWx1ZS5cbiAgICogVW5saWtlIGBtYXBgLCBoZXJlIHRoZSB0cmFuc2Zvcm0gaXRzZWxmIGFsc28gcmV0dXJucyBhbiBgT3B0aW9uYWxgLlxuICAgKi9cbiAgcHVibGljIGJpbmQ8VT4oYmluZGVyOiAodmFsdWU6IFQpID0+IE9wdGlvbmFsPFU+KTogT3B0aW9uYWw8VT4ge1xuICAgIGlmICh0aGlzLnRhZykge1xuICAgICAgcmV0dXJuIGJpbmRlcih0aGlzLnZhbHVlIGFzIFQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gT3B0aW9uYWwubm9uZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIC0tLSBUcmF2ZXJzYWJsZSAobmFtZSBzdG9sZW4gZnJvbSBIYXNrZWxsIC8gbWF0aHMpIC0tLVxuXG4gIC8qKlxuICAgKiBGb3IgYSBnaXZlbiBwcmVkaWNhdGUsIHRoaXMgZnVuY3Rpb24gZmluZHMgb3V0IGlmIHRoZXJlICoqZXhpc3RzKiogYSB2YWx1ZVxuICAgKiBpbnNpZGUgdGhpcyBgT3B0aW9uYWxgIG9iamVjdCB0aGF0IG1lZXRzIHRoZSBwcmVkaWNhdGUuIEluIHByYWN0aWNlLCB0aGlzXG4gICAqIG1lYW5zIHRoYXQgZm9yIGBPcHRpb25hbGBzIHRoYXQgZG8gbm90IGNvbnRhaW4gYSB2YWx1ZSBpdCByZXR1cm5zIGZhbHNlIChhc1xuICAgKiBubyBwcmVkaWNhdGUtbWVldGluZyB2YWx1ZSBleGlzdHMpLlxuICAgKi9cbiAgcHVibGljIGV4aXN0cyhwcmVkaWNhdGU6ICh2YWx1ZTogVCkgPT4gYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnRhZyAmJiBwcmVkaWNhdGUodGhpcy52YWx1ZSBhcyBUKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3IgYSBnaXZlbiBwcmVkaWNhdGUsIHRoaXMgZnVuY3Rpb24gZmluZHMgb3V0IGlmICoqYWxsKiogdGhlIHZhbHVlcyBpbnNpZGVcbiAgICogdGhpcyBgT3B0aW9uYWxgIG9iamVjdCBtZWV0IHRoZSBwcmVkaWNhdGUuIEluIHByYWN0aWNlLCB0aGlzIG1lYW5zIHRoYXRcbiAgICogZm9yIGBPcHRpb25hbGBzIHRoYXQgZG8gbm90IGNvbnRhaW4gYSB2YWx1ZSBpdCByZXR1cm5zIHRydWUgKGFzIGFsbCAwXG4gICAqIG9iamVjdHMgZG8gbWVldCB0aGUgcHJlZGljYXRlKS5cbiAgICovXG4gIHB1YmxpYyBmb3JhbGwocHJlZGljYXRlOiAodmFsdWU6IFQpID0+IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMudGFnIHx8IHByZWRpY2F0ZSh0aGlzLnZhbHVlIGFzIFQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvciBhIGdpdmVuIHByZWRpY2F0ZSwgY3JlYXRlIGEgbmV3IGBPcHRpb25hbGAgb2JqZWN0IHRoYXQgd2lsbCByZXRhaW5cbiAgICogYWxsIHRoZSB2YWx1ZXMgaW5zaWRlIHRoZSBvbGQgYE9wdGlvbmFsYCBvYmplY3QgdGhhdCBtZWV0IHRoZSBwcmVkaWNhdGUuXG4gICAqIEluIHByYWN0aWNlLCB0aGUgYE9wdGlvbmFsYCBvYmplY3QgY29udGFpbnMgZWl0aGVyIDAgb3IgMSBvYmplY3RzLCBhbmRcbiAgICogdGhlIG91dHB1dCB3aWxsIGtlZXAgdGhlIChzaW5nbGUpIGlucHV0IG9iamVjdCAoaWYgaXQgZXhpc3RzKSBhcyBsb25nIGFzXG4gICAqIGl0IHBhc3NlcyB0aGUgcHJlZGljYXRlLlxuICAgKi9cbiAgcHVibGljIGZpbHRlcjxVIGV4dGVuZHMgVD4ocHJlZGljYXRlOiAodmFsdWU6IFQpID0+IHZhbHVlIGlzIFUpOiBPcHRpb25hbDxVPjtcbiAgcHVibGljIGZpbHRlcihwcmVkaWNhdGU6ICh2YWx1ZTogVCkgPT4gYm9vbGVhbik6IE9wdGlvbmFsPFQ+O1xuICBwdWJsaWMgZmlsdGVyKHByZWRpY2F0ZTogKHZhbHVlOiBUKSA9PiBib29sZWFuKTogT3B0aW9uYWw8VD4ge1xuICAgIGlmICghdGhpcy50YWcgfHwgcHJlZGljYXRlKHRoaXMudmFsdWUgYXMgVCkpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gT3B0aW9uYWwubm9uZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIC0tLSBHZXR0ZXJzIC0tLVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHZhbHVlIG91dCBvZiB0aGUgaW5zaWRlIG9mIHRoZSBgT3B0aW9uYWxgIG9iamVjdCwgdXNpbmcgYSBkZWZhdWx0XG4gICAqIGByZXBsYWNlbWVudGAgdmFsdWUgaWYgdGhlIHByb3ZpZGVkIGBPcHRpb25hbGAgb2JqZWN0IGRvZXMgbm90IGNvbnRhaW4gYVxuICAgKiB2YWx1ZS5cbiAgICovXG4gIHB1YmxpYyBnZXRPcjxVID0gVD4ocmVwbGFjZW1lbnQ6IFUpOiBUIHwgVSB7XG4gICAgcmV0dXJuIHRoaXMudGFnID8gdGhpcy52YWx1ZSBhcyBUIDogcmVwbGFjZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB2YWx1ZSBvdXQgb2YgdGhlIGluc2lkZSBvZiB0aGUgYE9wdGlvbmFsYCBvYmplY3QsIHVzaW5nIGEgZGVmYXVsdFxuICAgKiBgcmVwbGFjZW1lbnRgIHZhbHVlIGlmIHRoZSBwcm92aWRlZCBgT3B0aW9uYWxgIG9iamVjdCBkb2VzIG5vdCBjb250YWluIGFcbiAgICogdmFsdWUuICBVbmxpa2UgYGdldE9yYCwgaW4gdGhpcyBtZXRob2QgdGhlIGByZXBsYWNlbWVudGAgb2JqZWN0IGlzIGFsc29cbiAgICogYE9wdGlvbmFsYCAtIG1lYW5pbmcgdGhhdCB0aGlzIG1ldGhvZCB3aWxsIGFsd2F5cyByZXR1cm4gYW4gYE9wdGlvbmFsYC5cbiAgICovXG4gIHB1YmxpYyBvcjxVID0gVD4ocmVwbGFjZW1lbnQ6IE9wdGlvbmFsPFU+KTogT3B0aW9uYWw8VCB8IFU+IHtcbiAgICByZXR1cm4gdGhpcy50YWcgPyB0aGlzIDogcmVwbGFjZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB2YWx1ZSBvdXQgb2YgdGhlIGluc2lkZSBvZiB0aGUgYE9wdGlvbmFsYCBvYmplY3QsIHVzaW5nIGEgZGVmYXVsdFxuICAgKiBgcmVwbGFjZW1lbnRgIHZhbHVlIGlmIHRoZSBwcm92aWRlZCBgT3B0aW9uYWxgIG9iamVjdCBkb2VzIG5vdCBjb250YWluIGFcbiAgICogdmFsdWUuIFVubGlrZSBgZ2V0T3JgLCBpbiB0aGlzIG1ldGhvZCB0aGUgYHJlcGxhY2VtZW50YCB2YWx1ZSBpc1xuICAgKiBcInRodW5rZWRcIiAtIHRoYXQgaXMgdG8gc2F5IHRoYXQgeW91IGRvbid0IHBhc3MgYSB2YWx1ZSB0byBgZ2V0T3JUaHVua2AsIHlvdVxuICAgKiBwYXNzIGEgZnVuY3Rpb24gd2hpY2ggKGlmIGNhbGxlZCkgd2lsbCAqKnJldHVybioqIHRoZSBgdmFsdWVgIHlvdSB3YW50IHRvXG4gICAqIHVzZS5cbiAgICovXG4gIHB1YmxpYyBnZXRPclRodW5rPFUgPSBUPih0aHVuazogKCkgPT4gVSk6IFQgfCBVIHtcbiAgICByZXR1cm4gdGhpcy50YWcgPyB0aGlzLnZhbHVlIGFzIFQgOiB0aHVuaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdmFsdWUgb3V0IG9mIHRoZSBpbnNpZGUgb2YgdGhlIGBPcHRpb25hbGAgb2JqZWN0LCB1c2luZyBhIGRlZmF1bHRcbiAgICogYHJlcGxhY2VtZW50YCB2YWx1ZSBpZiB0aGUgcHJvdmlkZWQgT3B0aW9uYWwgb2JqZWN0IGRvZXMgbm90IGNvbnRhaW4gYVxuICAgKiB2YWx1ZS5cbiAgICpcbiAgICogVW5saWtlIGBvcmAsIGluIHRoaXMgbWV0aG9kIHRoZSBgcmVwbGFjZW1lbnRgIHZhbHVlIGlzIFwidGh1bmtlZFwiIC0gdGhhdCBpc1xuICAgKiB0byBzYXkgdGhhdCB5b3UgZG9uJ3QgcGFzcyBhIHZhbHVlIHRvIGBvclRodW5rYCwgeW91IHBhc3MgYSBmdW5jdGlvbiB3aGljaFxuICAgKiAoaWYgY2FsbGVkKSB3aWxsICoqcmV0dXJuKiogdGhlIGB2YWx1ZWAgeW91IHdhbnQgdG8gdXNlLlxuICAgKlxuICAgKiBVbmxpa2UgYGdldE9yVGh1bmtgLCBpbiB0aGlzIG1ldGhvZCB0aGUgYHJlcGxhY2VtZW50YCB2YWx1ZSBpcyBhbHNvXG4gICAqIGBPcHRpb25hbGAsIG1lYW5pbmcgdGhhdCB0aGlzIG1ldGhvZCB3aWxsIGFsd2F5cyByZXR1cm4gYW4gYE9wdGlvbmFsYC5cbiAgICovXG4gIHB1YmxpYyBvclRodW5rPFUgPSBUPih0aHVuazogKCkgPT4gT3B0aW9uYWw8VT4pOiBPcHRpb25hbDxUIHwgVT4ge1xuICAgIHJldHVybiB0aGlzLnRhZyA/IHRoaXMgOiB0aHVuaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdmFsdWUgb3V0IG9mIHRoZSBpbnNpZGUgb2YgdGhlIGBPcHRpb25hbGAgb2JqZWN0LCB0aHJvd2luZyBhblxuICAgKiBleGNlcHRpb24gaWYgdGhlIHByb3ZpZGVkIGBPcHRpb25hbGAgb2JqZWN0IGRvZXMgbm90IGNvbnRhaW4gYSB2YWx1ZS5cbiAgICpcbiAgICogV0FSTklORzpcbiAgICogWW91IHNob3VsZCBvbmx5IGJlIHVzaW5nIHRoaXMgZnVuY3Rpb24gaWYgeW91IGtub3cgdGhhdCB0aGUgYE9wdGlvbmFsYFxuICAgKiBvYmplY3QgKippcyBub3QqKiBlbXB0eSAob3RoZXJ3aXNlIHlvdSdyZSB0aHJvd2luZyBleGNlcHRpb25zIGluIHByb2R1Y3Rpb25cbiAgICogY29kZSwgd2hpY2ggaXMgYmFkKS5cbiAgICpcbiAgICogSW4gdGVzdHMgdGhpcyBpcyBtb3JlIGFjY2VwdGFibGUuXG4gICAqXG4gICAqIFByZWZlciBvdGhlciBtZXRob2RzIHRvIHRoaXMsIHN1Y2ggYXMgYC5lYWNoYC5cbiAgICovXG4gIHB1YmxpYyBnZXRPckRpZShtZXNzYWdlPzogc3RyaW5nKTogVCB7XG4gICAgaWYgKCF0aGlzLnRhZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UgPz8gJ0NhbGxlZCBnZXRPckRpZSBvbiBOb25lJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlIGFzIFQ7XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tIEludGVyb3Agd2l0aCBudWxsIGFuZCB1bmRlZmluZWQgLS0tXG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gYE9wdGlvbmFsYCB2YWx1ZSBmcm9tIGEgbnVsbGFibGUgKG9yIHVuZGVmaW5lZC1hYmxlKSBpbnB1dC5cbiAgICogTnVsbCwgb3IgdW5kZWZpbmVkLCBpcyBjb252ZXJ0ZWQgdG8gYE5vbmVgLCBhbmQgYW55dGhpbmcgZWxzZSBpcyBjb252ZXJ0ZWRcbiAgICogdG8gYFNvbWVgLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBmcm9tPFQ+KHRoaXM6IHZvaWQsIHZhbHVlOiBUIHwgbnVsbCB8IHVuZGVmaW5lZCk6IE9wdGlvbmFsPE5vbk51bGxhYmxlPFQ+PiB7XG4gICAgcmV0dXJuIFR5cGUuaXNOb25OdWxsYWJsZSh2YWx1ZSkgPyBPcHRpb25hbC5zb21lKHZhbHVlKSA6IE9wdGlvbmFsLm5vbmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhbiBgT3B0aW9uYWxgIHRvIGEgbnVsbGFibGUgdHlwZSwgYnkgZ2V0dGluZyB0aGUgdmFsdWUgaWYgaXRcbiAgICogZXhpc3RzLCBvciByZXR1cm5pbmcgYG51bGxgIGlmIGl0IGRvZXMgbm90LlxuICAgKi9cbiAgcHVibGljIGdldE9yTnVsbCgpOiBUIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMudGFnID8gdGhpcy52YWx1ZSBhcyBUIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhbiBgT3B0aW9uYWxgIHRvIGFuIHVuZGVmaW5lZC1hYmxlIHR5cGUsIGJ5IGdldHRpbmcgdGhlIHZhbHVlIGlmXG4gICAqIGl0IGV4aXN0cywgb3IgcmV0dXJuaW5nIGB1bmRlZmluZWRgIGlmIGl0IGRvZXMgbm90LlxuICAgKi9cbiAgcHVibGljIGdldE9yVW5kZWZpbmVkKCk6IFQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG5cbiAgLy8gLS0tIFV0aWxpdGllcyAtLS1cblxuICAvKipcbiAgICogSWYgdGhlIGBPcHRpb25hbGAgY29udGFpbnMgYSB2YWx1ZSwgcGVyZm9ybSBhbiBhY3Rpb24gb24gdGhhdCB2YWx1ZS5cbiAgICogVW5saWtlIHRoZSByZXN0IG9mIHRoZSBtZXRob2RzIG9uIHRoaXMgdHlwZSwgYC5lYWNoYCBoYXMgc2lkZS1lZmZlY3RzLiBJZlxuICAgKiB5b3Ugd2FudCB0byB0cmFuc2Zvcm0gYW4gYE9wdGlvbmFsPFQ+YCAqKmludG8qKiBzb21ldGhpbmcsIHRoZW4gdGhpcyBpcyBub3RcbiAgICogdGhlIG1ldGhvZCBmb3IgeW91LiBJZiB5b3Ugd2FudCB0byB1c2UgYW4gYE9wdGlvbmFsPFQ+YCB0byAqKmRvKipcbiAgICogc29tZXRoaW5nLCB0aGVuIHRoaXMgaXMgdGhlIG1ldGhvZCBmb3IgeW91IC0gcHJvdmlkZWQgeW91J3JlIG9rYXkgd2l0aCBub3RcbiAgICogZG9pbmcgYW55dGhpbmcgaW4gdGhlIGNhc2Ugd2hlcmUgdGhlIGBPcHRpb25hbGAgZG9lc24ndCBoYXZlIGEgdmFsdWUgaW5zaWRlXG4gICAqIGl0LiBJZiB5b3UncmUgbm90IHN1cmUgd2hldGhlciB5b3VyIHVzZS1jYXNlIGZpdHMgaW50byB0cmFuc2Zvcm1pbmdcbiAgICogKippbnRvKiogc29tZXRoaW5nIG9yICoqZG9pbmcqKiBzb21ldGhpbmcsIGNoZWNrIHdoZXRoZXIgaXQgaGFzIGEgcmV0dXJuXG4gICAqIHZhbHVlLiBJZiBpdCBkb2VzLCB5b3Ugc2hvdWxkIGJlIHBlcmZvcm1pbmcgYSB0cmFuc2Zvcm0uXG4gICAqL1xuICBwdWJsaWMgZWFjaCh3b3JrZXI6ICh2YWx1ZTogVCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnRhZykge1xuICAgICAgd29ya2VyKHRoaXMudmFsdWUgYXMgVCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFR1cm4gdGhlIGBPcHRpb25hbGAgb2JqZWN0IGludG8gYW4gYXJyYXkgdGhhdCBjb250YWlucyBhbGwgb2YgdGhlIHZhbHVlc1xuICAgKiBzdG9yZWQgaW5zaWRlIHRoZSBgT3B0aW9uYWxgLiBJbiBwcmFjdGljZSwgdGhpcyBtZWFucyB0aGUgb3V0cHV0IHdpbGwgaGF2ZVxuICAgKiBlaXRoZXIgMCBvciAxIGVsZW1lbnRzLlxuICAgKi9cbiAgcHVibGljIHRvQXJyYXkoKTogVFtdIHtcbiAgICByZXR1cm4gdGhpcy50YWcgPyBbIHRoaXMudmFsdWUgYXMgVCBdIDogW107XG4gIH1cblxuICAvKipcbiAgICogVHVybiB0aGUgYE9wdGlvbmFsYCBvYmplY3QgaW50byBhIHN0cmluZyBmb3IgZGVidWdnaW5nIG9yIHByaW50aW5nLiBOb3RcbiAgICogcmVjb21tZW5kZWQgZm9yIHByb2R1Y3Rpb24gY29kZSwgYnV0IGdvb2QgZm9yIGRlYnVnZ2luZy4gQWxzbyBub3RlIHRoYXRcbiAgICogdGhlc2UgZGF5cyBhbiBgT3B0aW9uYWxgIG9iamVjdCBjYW4gYmUgbG9nZ2VkIHRvIHRoZSBjb25zb2xlIGRpcmVjdGx5LCBhbmRcbiAgICogaXRzIGlubmVyIHZhbHVlIChpZiBpdCBleGlzdHMpIHdpbGwgYmUgdmlzaWJsZS5cbiAgICovXG4gIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnRhZyA/IGBzb21lKCR7dGhpcy52YWx1ZX0pYCA6ICdub25lKCknO1xuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBTdHJBcHBlbmQgZnJvbSAnLi4vc3RyL1N0ckFwcGVuZCc7XG5cbmltcG9ydCB7IE9wdGlvbmFsIH0gZnJvbSAnLi9PcHRpb25hbCc7XG5pbXBvcnQgKiBhcyBUeXBlIGZyb20gJy4vVHlwZSc7XG5cbmNvbnN0IGNoZWNrUmFuZ2UgPSAoc3RyOiBzdHJpbmcsIHN1YnN0cjogc3RyaW5nLCBzdGFydDogbnVtYmVyKTogYm9vbGVhbiA9PlxuICBzdWJzdHIgPT09ICcnIHx8IHN0ci5sZW5ndGggPj0gc3Vic3RyLmxlbmd0aCAmJiBzdHIuc3Vic3RyKHN0YXJ0LCBzdGFydCArIHN1YnN0ci5sZW5ndGgpID09PSBzdWJzdHI7XG5cbi8qKiBHaXZlbiBhIHN0cmluZyBhbmQgb2JqZWN0LCBwZXJmb3JtIHRlbXBsYXRlLXJlcGxhY2VtZW50cyBvbiB0aGUgc3RyaW5nLCBhcyBzcGVjaWZpZWQgYnkgdGhlIG9iamVjdC5cbiAqIEFueSB0ZW1wbGF0ZSBmaWVsZHMgb2YgdGhlIGZvcm0gJHtuYW1lfSBhcmUgcmVwbGFjZWQgYnkgdGhlIHN0cmluZyBvciBudW1iZXIgc3BlY2lmaWVkIGFzIG9ialtcIm5hbWVcIl1cbiAqIEJhc2VkIG9uIERvdWdsYXMgQ3JvY2tmb3JkJ3MgJ3N1cHBsYW50JyBtZXRob2QgZm9yIHRlbXBsYXRlLXJlcGxhY2Ugb2Ygc3RyaW5ncy4gVXNlcyBkaWZmZXJlbnQgdGVtcGxhdGUgZm9ybWF0LlxuICovXG5leHBvcnQgY29uc3Qgc3VwcGxhbnQgPSAoc3RyOiBzdHJpbmcsIG9iajogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVtYmVyPik6IHN0cmluZyA9PiB7XG4gIGNvbnN0IGlzU3RyaW5nT3JOdW1iZXIgPSAoYTogdW5rbm93bik6IGEgaXMgc3RyaW5nIHwgbnVtYmVyID0+IHtcbiAgICBjb25zdCB0ID0gdHlwZW9mIGE7XG4gICAgcmV0dXJuIHQgPT09ICdzdHJpbmcnIHx8IHQgPT09ICdudW1iZXInO1xuICB9O1xuXG4gIHJldHVybiBzdHIucmVwbGFjZSgvXFwkXFx7KFtee31dKilcXH0vZyxcbiAgICAoZnVsbE1hdGNoOiBzdHJpbmcsIGtleTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IG9ialtrZXldO1xuICAgICAgcmV0dXJuIGlzU3RyaW5nT3JOdW1iZXIodmFsdWUpID8gdmFsdWUudG9TdHJpbmcoKSA6IGZ1bGxNYXRjaDtcbiAgICB9XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlTGVhZGluZyA9IChzdHI6IHN0cmluZywgcHJlZml4OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gc3RhcnRzV2l0aChzdHIsIHByZWZpeCkgPyBTdHJBcHBlbmQucmVtb3ZlRnJvbVN0YXJ0KHN0ciwgcHJlZml4Lmxlbmd0aCkgOiBzdHI7XG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlVHJhaWxpbmcgPSAoc3RyOiBzdHJpbmcsIHN1ZmZpeDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIGVuZHNXaXRoKHN0ciwgc3VmZml4KSA/IFN0ckFwcGVuZC5yZW1vdmVGcm9tRW5kKHN0ciwgc3VmZml4Lmxlbmd0aCkgOiBzdHI7XG59O1xuXG5leHBvcnQgY29uc3QgZW5zdXJlTGVhZGluZyA9IChzdHI6IHN0cmluZywgcHJlZml4OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gc3RhcnRzV2l0aChzdHIsIHByZWZpeCkgPyBzdHIgOiBTdHJBcHBlbmQuYWRkVG9TdGFydChzdHIsIHByZWZpeCk7XG59O1xuXG5leHBvcnQgY29uc3QgZW5zdXJlVHJhaWxpbmcgPSAoc3RyOiBzdHJpbmcsIHN1ZmZpeDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIGVuZHNXaXRoKHN0ciwgc3VmZml4KSA/IHN0ciA6IFN0ckFwcGVuZC5hZGRUb0VuZChzdHIsIHN1ZmZpeCk7XG59O1xuXG5leHBvcnQgY29uc3QgY29udGFpbnMgPSAoc3RyOiBzdHJpbmcsIHN1YnN0cjogc3RyaW5nLCBzdGFydDogbnVtYmVyID0gMCwgZW5kPzogbnVtYmVyKTogYm9vbGVhbiA9PiB7XG4gIGNvbnN0IGlkeCA9IHN0ci5pbmRleE9mKHN1YnN0ciwgc3RhcnQpO1xuICBpZiAoaWR4ICE9PSAtMSkge1xuICAgIHJldHVybiBUeXBlLmlzVW5kZWZpbmVkKGVuZCkgPyB0cnVlIDogaWR4ICsgc3Vic3RyLmxlbmd0aCA8PSBlbmQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgY2FwaXRhbGl6ZSA9IChzdHI6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBzdHIgPT09ICcnID8gJycgOiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc3Vic3RyaW5nKDEpO1xufTtcblxuLyoqIERvZXMgJ3N0cicgc3RhcnQgd2l0aCAncHJlZml4Jz9cbiAqICBOb3RlOiBhbGwgc3RyaW5ncyBzdGFydCB3aXRoIHRoZSBlbXB0eSBzdHJpbmcuXG4gKiAgICAgICAgTW9yZSBmb3JtYWxseSwgZm9yIGFsbCBzdHJpbmdzIHgsIHN0YXJ0c1dpdGgoeCwgXCJcIikuXG4gKiAgICAgICAgVGhpcyBpcyBzbyB0aGF0IGZvciBhbGwgc3RyaW5ncyB4IGFuZCB5LCBzdGFydHNXaXRoKHkgKyB4LCB5KVxuICovXG5leHBvcnQgY29uc3Qgc3RhcnRzV2l0aCA9IChzdHI6IHN0cmluZywgcHJlZml4OiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgcmV0dXJuIGNoZWNrUmFuZ2Uoc3RyLCBwcmVmaXgsIDApO1xufTtcblxuLyoqIERvZXMgJ3N0cicgZW5kIHdpdGggJ3N1ZmZpeCc/XG4gKiAgTm90ZTogYWxsIHN0cmluZ3MgZW5kIHdpdGggdGhlIGVtcHR5IHN0cmluZy5cbiAqICAgICAgICBNb3JlIGZvcm1hbGx5LCBmb3IgYWxsIHN0cmluZ3MgeCwgZW5kc1dpdGgoeCwgXCJcIikuXG4gKiAgICAgICAgVGhpcyBpcyBzbyB0aGF0IGZvciBhbGwgc3RyaW5ncyB4IGFuZCB5LCBlbmRzV2l0aCh4ICsgeSwgeSlcbiAqL1xuZXhwb3J0IGNvbnN0IGVuZHNXaXRoID0gKHN0cjogc3RyaW5nLCBzdWZmaXg6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gY2hlY2tSYW5nZShzdHIsIHN1ZmZpeCwgc3RyLmxlbmd0aCAtIHN1ZmZpeC5sZW5ndGgpO1xufTtcblxuY29uc3QgYmxhbmsgPSAocjogUmVnRXhwKSA9PiAoczogc3RyaW5nKTogc3RyaW5nID0+XG4gIHMucmVwbGFjZShyLCAnJyk7XG5cbi8qKiByZW1vdmVzIGFsbCBsZWFkaW5nIGFuZCB0cmFpbGluZyBzcGFjZXMgKi9cbmV4cG9ydCBjb25zdCB0cmltOiAoczogc3RyaW5nKSA9PiBzdHJpbmcgPVxuICBibGFuaygvXlxccyt8XFxzKyQvZyk7XG5cbmV4cG9ydCBjb25zdCBsVHJpbTogKHM6IHN0cmluZykgPT4gc3RyaW5nID1cbiAgYmxhbmsoL15cXHMrL2cpO1xuXG5leHBvcnQgY29uc3QgclRyaW06IChzOiBzdHJpbmcpID0+IHN0cmluZyA9XG4gIGJsYW5rKC9cXHMrJC9nKTtcblxuZXhwb3J0IGNvbnN0IGlzTm90RW1wdHkgPSAoczogc3RyaW5nKTogYm9vbGVhbiA9PiBzLmxlbmd0aCA+IDA7XG5cbmV4cG9ydCBjb25zdCBpc0VtcHR5ID0gKHM6IHN0cmluZyk6IGJvb2xlYW4gPT4gIWlzTm90RW1wdHkocyk7XG5cbmV4cG9ydCBjb25zdCByZXBlYXQgPSAoczogc3RyaW5nLCBjb3VudDogbnVtYmVyKTogc3RyaW5nID0+IGNvdW50IDw9IDAgPyAnJyA6IG5ldyBBcnJheShjb3VudCArIDEpLmpvaW4ocyk7XG5cbmV4cG9ydCBjb25zdCBmcm9tQ29kZVBvaW50ID0gU3RyaW5nLmZyb21Db2RlUG9pbnQ7XG5cbmV4cG9ydCBjb25zdCB0b0ludCA9ICh2YWx1ZTogc3RyaW5nLCByYWRpeDogbnVtYmVyID0gMTApOiBPcHRpb25hbDxudW1iZXI+ID0+IHtcbiAgY29uc3QgbnVtID0gcGFyc2VJbnQodmFsdWUsIHJhZGl4KTtcbiAgcmV0dXJuIGlzTmFOKG51bSkgPyBPcHRpb25hbC5ub25lKCkgOiBPcHRpb25hbC5zb21lKG51bSk7XG59O1xuXG5leHBvcnQgY29uc3QgdG9GbG9hdCA9ICh2YWx1ZTogc3RyaW5nKTogT3B0aW9uYWw8bnVtYmVyPiA9PiB7XG4gIGNvbnN0IG51bSA9IHBhcnNlRmxvYXQodmFsdWUpO1xuICByZXR1cm4gaXNOYU4obnVtKSA/IE9wdGlvbmFsLm5vbmUoKSA6IE9wdGlvbmFsLnNvbWUobnVtKTtcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8td3JhcHBlci1vYmplY3QtdHlwZXMgKi9cbmNvbnN0IGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuXG5pbnRlcmZhY2UgQ29uc3RydWN0b3I8VCBleHRlbmRzIE9iamVjdD4ge1xuICByZWFkb25seSBwcm90b3R5cGU6IFQ7XG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbn1cblxuY29uc3QgaGFzUHJvdG8gPSA8VCBleHRlbmRzIE9iamVjdD4odjogT2JqZWN0LCBjb25zdHJ1Y3RvcjogQ29uc3RydWN0b3I8VD4sIHByZWRpY2F0ZTogKHY6IE9iamVjdCwgcHJvdG90eXBlOiBUKSA9PiBib29sZWFuKTogYm9vbGVhbiA9PiB7XG4gIGlmIChwcmVkaWNhdGUodiwgY29uc3RydWN0b3IucHJvdG90eXBlKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIC8vIFN0cmluZy1iYXNlZCBmYWxsYmFjayB0aW1lXG4gICAgcmV0dXJuIHYuY29uc3RydWN0b3I/Lm5hbWUgPT09IGNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cbn07XG5cbmNvbnN0IHR5cGVPZiA9ICh4OiBhbnkpOiBzdHJpbmcgPT4ge1xuICBjb25zdCB0ID0gdHlwZW9mIHg7XG4gIGlmICh4ID09PSBudWxsKSB7XG4gICAgcmV0dXJuICdudWxsJztcbiAgfSBlbHNlIGlmICh0ID09PSAnb2JqZWN0JyAmJiBBcnJheS5pc0FycmF5KHgpKSB7XG4gICAgcmV0dXJuICdhcnJheSc7XG4gIH0gZWxzZSBpZiAodCA9PT0gJ29iamVjdCcgJiYgaGFzUHJvdG8oeCwgU3RyaW5nLCAobywgcHJvdG8pID0+IHByb3RvLmlzUHJvdG90eXBlT2YobykpKSB7XG4gICAgcmV0dXJuICdzdHJpbmcnO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0O1xuICB9XG59O1xuXG5jb25zdCBpc1R5cGUgPSA8WW9sbz4odHlwZTogc3RyaW5nKSA9PiAodmFsdWU6IGFueSk6IHZhbHVlIGlzIFlvbG8gPT5cbiAgdHlwZU9mKHZhbHVlKSA9PT0gdHlwZTtcblxuY29uc3QgaXNTaW1wbGVUeXBlID0gPFlvbG8+KHR5cGU6IHN0cmluZykgPT4gKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBZb2xvID0+XG4gIHR5cGVvZiB2YWx1ZSA9PT0gdHlwZTtcblxuY29uc3QgZXEgPSA8VD4gKHQ6IFQpID0+IChhOiBhbnkpOiBhIGlzIFQgPT5cbiAgdCA9PT0gYTtcblxuZXhwb3J0IGNvbnN0IGlzID0gPEUgZXh0ZW5kcyBPYmplY3Q+KHZhbHVlOiBhbnksIGNvbnN0cnVjdG9yOiBDb25zdHJ1Y3RvcjxFPik6IHZhbHVlIGlzIEUgPT5cbiAgaXNPYmplY3QodmFsdWUpICYmIGhhc1Byb3RvPEU+KHZhbHVlLCBjb25zdHJ1Y3RvciwgKG8sIHByb3RvKSA9PiBnZXRQcm90b3R5cGVPZihvKSA9PT0gcHJvdG8pO1xuXG5leHBvcnQgY29uc3QgaXNTdHJpbmc6ICh2YWx1ZTogYW55KSA9PiB2YWx1ZSBpcyBzdHJpbmcgPVxuICBpc1R5cGUoJ3N0cmluZycpO1xuXG5leHBvcnQgY29uc3QgaXNPYmplY3Q6ICh2YWx1ZTogYW55KSA9PiB2YWx1ZSBpcyBPYmplY3QgPVxuICBpc1R5cGUoJ29iamVjdCcpO1xuXG5leHBvcnQgY29uc3QgaXNQbGFpbk9iamVjdCA9ICh2YWx1ZTogdW5rbm93bik6IHZhbHVlIGlzIE9iamVjdCA9PlxuICBpcyh2YWx1ZSwgT2JqZWN0KTtcblxuZXhwb3J0IGNvbnN0IGlzQXJyYXk6ICh2YWx1ZTogYW55KSA9PiB2YWx1ZSBpcyBBcnJheTx1bmtub3duPiA9XG4gIGlzVHlwZSgnYXJyYXknKTtcblxuZXhwb3J0IGNvbnN0IGlzTnVsbDogKGE6IGFueSkgPT4gYSBpcyBudWxsID1cbiAgZXEobnVsbCk7XG5cbmV4cG9ydCBjb25zdCBpc0Jvb2xlYW46ICh2YWx1ZTogYW55KSA9PiB2YWx1ZSBpcyBib29sZWFuID1cbiAgaXNTaW1wbGVUeXBlPGJvb2xlYW4+KCdib29sZWFuJyk7XG5cbmV4cG9ydCBjb25zdCBpc1VuZGVmaW5lZDogKGE6IGFueSkgPT4gYSBpcyB1bmRlZmluZWQgPVxuICBlcSh1bmRlZmluZWQpO1xuXG5leHBvcnQgY29uc3QgaXNOdWxsYWJsZSA9IChhOiBhbnkpOiBhIGlzIG51bGwgfCB1bmRlZmluZWQgPT5cbiAgYSA9PT0gbnVsbCB8fCBhID09PSB1bmRlZmluZWQ7XG5cbmV4cG9ydCBjb25zdCBpc05vbk51bGxhYmxlID0gPEE+IChhOiBBIHwgbnVsbCB8IHVuZGVmaW5lZCk6IGEgaXMgTm9uTnVsbGFibGU8QT4gPT5cbiAgIWlzTnVsbGFibGUoYSk7XG5cbmV4cG9ydCBjb25zdCBpc0Z1bmN0aW9uOiAodmFsdWU6IGFueSkgPT4gdmFsdWUgaXMgRnVuY3Rpb24gPVxuICBpc1NpbXBsZVR5cGU8RnVuY3Rpb24+KCdmdW5jdGlvbicpO1xuXG5leHBvcnQgY29uc3QgaXNOdW1iZXI6ICh2YWx1ZTogYW55KSA9PiB2YWx1ZSBpcyBudW1iZXIgPVxuICBpc1NpbXBsZVR5cGU8bnVtYmVyPignbnVtYmVyJyk7XG5cbmV4cG9ydCBjb25zdCBpc0FycmF5T2YgPSA8RT4odmFsdWU6IGFueSwgcHJlZDogKHg6IGFueSkgPT4geCBpcyBFKTogdmFsdWUgaXMgQXJyYXk8RT4gPT4ge1xuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdmFsdWUubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIGlmICghKHByZWQodmFsdWVbaV0pKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc1Byb21pc2VMaWtlID0gKHg6IGFueSk6IHggaXMgUHJvbWlzZTx1bmtub3duPiA9PlxuICBpc09iamVjdCh4KVxuICAmJiBpc0Z1bmN0aW9uKHgudGhlbilcbiAgJiYgaXNGdW5jdGlvbih4LmNhdGNoKTtcbiIsImV4cG9ydCBjb25zdCB6ZXJvV2lkdGggPSAnXFx1RkVGRic7XG5leHBvcnQgY29uc3QgbmJzcCA9ICdcXHUwMEEwJztcbmV4cG9ydCBjb25zdCBzb2Z0SHlwaGVuID0gJ1xcdTAwQUQnO1xuZXhwb3J0IGNvbnN0IGVsbGlwc2lzID0gJ1xcdTIwMjYnO1xuXG5leHBvcnQgY29uc3QgaXNad3NwID0gKGNoYXI6IHN0cmluZyk6IGJvb2xlYW4gPT4gY2hhciA9PT0gemVyb1dpZHRoO1xuZXhwb3J0IGNvbnN0IHJlbW92ZVp3c3AgPSAoczogc3RyaW5nKTogc3RyaW5nID0+IHMucmVwbGFjZSgvXFx1RkVGRi9nLCAnJyk7XG4iLCJleHBvcnQgY29uc3QgYWRkVG9TdGFydCA9IChzdHI6IHN0cmluZywgcHJlZml4OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gcHJlZml4ICsgc3RyO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZFRvRW5kID0gKHN0cjogc3RyaW5nLCBzdWZmaXg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBzdHIgKyBzdWZmaXg7XG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlRnJvbVN0YXJ0ID0gKHN0cjogc3RyaW5nLCBudW1DaGFyczogbnVtYmVyKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIHN0ci5zdWJzdHJpbmcobnVtQ2hhcnMpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUZyb21FbmQgPSAoc3RyOiBzdHJpbmcsIG51bUNoYXJzOiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gc3RyLnN1YnN0cmluZygwLCBzdHIubGVuZ3RoIC0gbnVtQ2hhcnMpO1xufTtcbiIsIi8qXG4gIFRoZSBSZWdFeCBwYXJzZXMgdGhlIGZvbGxvd2luZyBjb21wb25lbnRzIChodHRwczovL3d3dy5yZmMtZWRpdG9yLm9yZy9yZmMvcmZjMzk4Ni50eHQpOlxuXG4gICAgc2NoZW1lOlsvL1t1c2VyOnBhc3N3b3JkQF1ob3N0Wzpwb3J0XV1bL11wYXRoWz9xdWVyeV1bI2ZyYWdtZW50XVxuXG4gICAgICAgICAgZm9vOi8vZXhhbXBsZS5jb206ODA0Mi9vdmVyL3RoZXJlP25hbWU9ZmVycmV0I25vc2VcbiAgICAgICAgICBcXF8vICAgXFxfX19fX19fX19fX19fXy9cXF9fX19fX19fXy8gXFxfX19fX19fX18vIFxcX18vXG4gICAgICAgICAgfCAgICAgICAgICAgfCAgICAgICAgICAgIHwgICAgICAgICAgICB8ICAgICAgICB8XG4gICAgICAgIHNjaGVtZSAgICAgYXV0aG9yaXR5ICAgICAgIHBhdGggICAgICAgIHF1ZXJ5ICAgZnJhZ21lbnRcblxuICBPcmlnaW5hbGx5IGZyb206XG4gICAgaHR0cDovL2Jsb2cubWF0dGhld29yaW9yZGFuLmNvbS9wb3N0LzEzMTc0NTY2Mzg5L3VybC1yZWd1bGFyLWV4cHJlc3Npb24tZm9yLWxpbmtzLXdpdGgtb3Itd2l0aG91dC10aGVcblxuICBNb2RpZmllZCB0bzpcbiAgLSBpbmNsdWRlIHBvcnQgbnVtYmVyc1xuICAtIGFsbG93IGZ1bGwgc3RvcHMgaW4gZW1haWwgYWRkcmVzc2VzXG4gIC0gYWxsb3cgWy0ufiorPSEmOzonJUA/XiR7fSgpLFxcL1xcd10gYWZ0ZXIgdGhlICNcbiAgLSBhbGxvdyBbLS5+Kis9ISY7OiclQD9eJHt9KCksXFwvXFx3XSBhZnRlciB0aGUgP1xuICAtIG1vdmUgYWxsb3cgLV8ufiorPSEmOzonJUA/XiR7fSgpIGluIGVtYWlsIHVzZXJuYW1lcyB0byB0aGUgZmlyc3QgQCBtYXRjaCAoVEJJTy00ODA5KVxuICAtIGVuZm9yY2UgZG9tYWlucyB0byBiZSBbQS1aYS16MC05LV0rKD86XFwuW0EtWmEtejAtOS1dKykqIHNvIHRoZXkgY2FuJ3QgZW5kIGluIGEgcGVyaW9kIChUQklPLTQ4MDkpXG4gIC0gcmVtb3ZlZCBhIGJ1bmNoIG9mIGVzY2FwaW5nLCBtYWRlIGV2ZXJ5IGdyb3VwIG5vbi1jYXB0dXJpbmcgKGR1cmluZyBUQklPLTQ4MDkpXG4gIC0gY29sb25zIGFyZSBvbmx5IHZhbGlkIHdoZW4gZm9sbG93ZWQgZGlyZWN0bHkgYnkgLy8gb3Igc29tZSB0ZXh0IGFuZCB0aGVuIEAgKFRCSU8tNDg2NylcbiAgLSBvbmx5IGluY2x1ZGUgdGhlIGZyYWdtZW50ICcjJyBpZiBpdCBoYXMgMSBvciBtb3JlIHRyYWlsaW5nIG1hdGNoZXNcbiAgLSBvbmx5IGluY2x1ZGUgdGhlIHF1ZXJ5ICc/JyBpZiBpdCBoYXMgMSBvciBtb3JlIHRyYWlsaW5nIG1hdGNoZXNcbiAgLSBhbGxvdyBjb21tYXMgaW4gVVJMIHBhdGhcbiAgLSBleGNsdWRlIHRyYWlsaW5nIGNvbW1hIGFuZCBwZXJpb2QgaW4gVVJMIHBhdGhcbiAgLSBhbGxvdyB1cCB0byAxNSBjaGFyYWN0ZXIgc2NoZW1lcyBpbmNsdWRpbmcgYWxsIHZhbGlkIGNoYXJhY3RlcnMgZnJvbSB0aGUgc3BlYyBodHRwczovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybC1zY2hlbWUtc3RyaW5nIChUSU5ZLTUwNzQpXG4gIC0gY2hhbmdlZCBpbnN0YW5jZXMgb2YgMC05IHRvIGJlIFxcZCAoVElOWS01MDc0KVxuICAtIHJlZHVjZWQgZHVwbGljYXRpb24gKFRJTlktNTA3NClcbiAgLSBhbGxvdyBbKiE7OidAJF0gaW4gdGhlIHBhdGggc2VnbWVudCBhcyB0aGV5IGFyZSB2YWxpZCBjaGFyYWN0ZXJzIHBlciB0aGUgc3BlYzogaHR0cHM6Ly91cmwuc3BlYy53aGF0d2cub3JnLyN1cmwtcGF0aC1zZWdtZW50LXN0cmluZyAoVElOWS04MDY5KVxuXG4oPzpcbiAgKD86XG4gICAgW0EtWmEtel1bQS1aYS16XFxkListXXswLDE0fTpcXC9cXC8oPzpbLS5+Kis9ISY7OiclQD9eJHt9KCksXFx3XStAKT9cbiAgICB8IHd3d1xcLlxuICAgIHwgWy07OiY9KyQsLlxcd10rQFxuICApXG4gIFtBLVphLXpcXGQtXStcbiAgKD86XFwuW0EtWmEtelxcZC1dKykqXG4pXG4oPzo6XFxkKyk/XG4oPzpcbiAgXFwvXG4gICg/OlxuICAgICBbLS5+Kis9ITs6JyVAJCgpLFxcL1xcd10qWy1+Kis9JUAkKClcXC9cXHddXG4gICApP1xuKT9cbig/OlxuICBcXD9cbiAgKD86XG4gICAgWy0ufiorPSEmOzonJUA/XiR7fSgpLFxcL1xcd10rXG4gIClcbik/XG4oPzpcbiAgI1xuICAoPzpcbiAgICBbLS5+Kis9ISY7OiclQD9eJHt9KCksXFwvXFx3XStcbiAgKVxuKT9cbiovXG5cbmNvbnN0IGxpbmsgPSAoKTogUmVnRXhwID0+XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4gIC8oPzpbQS1aYS16XVtBLVphLXpcXGQuKy1dezAsMTR9OlxcL1xcLyg/OlstLn4qKz0hJjs6JyVAP14ke30oKSxcXHddK0ApP3x3d3dcXC58Wy07OiY9KyQsLlxcd10rQClbQS1aYS16XFxkLV0rKD86XFwuW0EtWmEtelxcZC1dKykqKD86OlxcZCspPyg/OlxcLyg/OlstLn4qKz0hOzonJUAkKCksXFwvXFx3XSpbLX4qKz0lQCQoKVxcL1xcd10pPyk/KD86XFw/KD86Wy0ufiorPSEmOzonJUA/XiR7fSgpLFxcL1xcd10rKSk/KD86Iyg/OlstLn4qKz0hJjs6JyVAP14ke30oKSxcXC9cXHddKykpPy9nO1xuXG5jb25zdCBhdXRvbGluayA9ICgpOiBSZWdFeHAgPT4ge1xuICAvKlxuICAgKiBUYWtlcyB0aGUgbGluayByZWdleCwgYW5kIG1ha2VzIHR3byBhZGRpdGlvbnM6XG4gICAqXG4gICAqIC0gYWxsb3dzIHB1bmN0dWF0aW9uIGF0IHRoZSBlbmQgKHNvIGl0IGNhbiBiZSB1c2VkIGZvciBUQklPIGF1dG9saW5rIG1hY3JvKVxuICAgKiAtIHdyYXBzIHRoZSBsaW5rIHJlZ2V4IGluIGEgZ3JvdXAgc28gdGhhdCBtYXRjaFsxXSByZXR1cm5zIHRoZSBkZXNpcmVkIGNvbnRlbnRzXG4gICAqXG4gICAqIFdlIG1heSBuZWVkIHRvIGlubGluZSB0aGUgbGluayByZWdleCBpZiB0aGlzIHJlZmFjdG9yaW5nIHRlY2huaXF1ZSBjYXVzZXNcbiAgICogcGVyZm9ybWFuY2UgaXNzdWVzOyB3ZSdyZSBhc3N1bWluZyBicm93c2VycyBjYW4gb3B0aW1pc2UgdGhlIGFib3ZlIHJlZ2V4XG4gICAqIGJ1dCBub3QgdGhpcyBzdHlsZS5cbiAgICogVEJJTyBjYWxscyB0aGlzIG1ldGhvZCBldmVyeSB0aW1lIHNwYWNlIG9yIGVudGVyIGlzIHByZXNzZWQuXG4gICAqL1xuICBjb25zdCBsaW5rc291cmNlID0gbGluaygpLnNvdXJjZTtcbiAgcmV0dXJuIG5ldyBSZWdFeHAoJygnICsgbGlua3NvdXJjZSArICcpWy0ufiorPSEmOzpcXCclQD8jXiR7fSgpLF0qJywgJ2cnKTtcbn07XG5cbmNvbnN0IHRva2VucyA9ICh2YWx1ZTogc3RyaW5nLCBwYXJhbWV0ZXJzOiBzdHJpbmdbXSk6IHN0cmluZyA9PlxuICB2YWx1ZS5yZXBsYWNlKC9cXHsoXFxkKylcXH0vZywgKG1hdGNoLCBjb250ZW50czogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSBwYXJzZUludChjb250ZW50cywgMTApO1xuICAgIGlmIChwYXJhbWV0ZXJzW2luZGV4XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHZhbHVlIGZvciB0b2tlbjogJyArIG1hdGNoICsgJyBpbiB0cmFuc2xhdGlvbjogJyArIHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcmFtZXRlcnNbaW5kZXhdO1xuICB9KTtcblxuZXhwb3J0IHtcbiAgdG9rZW5zLFxuICBsaW5rLFxuICBhdXRvbGlua1xufTtcbiIsImltcG9ydCBQbHVnaW5NYW5hZ2VyIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvUGx1Z2luTWFuYWdlcic7XG5cbmltcG9ydCAqIGFzIE9wdGlvbnMgZnJvbSAnLi9hcGkvT3B0aW9ucyc7XG5pbXBvcnQgKiBhcyBLZXlzIGZyb20gJy4vY29yZS9LZXlzJztcblxuZXhwb3J0IGRlZmF1bHQgKCk6IHZvaWQgPT4ge1xuICBQbHVnaW5NYW5hZ2VyLmFkZCgnYXV0b2xpbmsnLCAoZWRpdG9yKSA9PiB7XG4gICAgT3B0aW9ucy5yZWdpc3RlcihlZGl0b3IpO1xuICAgIEtleXMuc2V0dXAoZWRpdG9yKTtcbiAgfSk7XG59O1xuIiwiaW1wb3J0IHsgUmVnZXhlcyB9IGZyb20gJ0BlcGhveC9wb2xhcmlzJztcblxuaW1wb3J0IHR5cGUgRWRpdG9yIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvRWRpdG9yJztcbmltcG9ydCB0eXBlIHsgRWRpdG9yT3B0aW9ucyB9IGZyb20gJ3RpbnltY2UvY29yZS9hcGkvT3B0aW9uVHlwZXMnO1xuXG5jb25zdCBvcHRpb246IHtcbiAgPEsgZXh0ZW5kcyBrZXlvZiBFZGl0b3JPcHRpb25zPihuYW1lOiBLKTogKGVkaXRvcjogRWRpdG9yKSA9PiBFZGl0b3JPcHRpb25zW0tdO1xuICA8VD4obmFtZTogc3RyaW5nKTogKGVkaXRvcjogRWRpdG9yKSA9PiBUO1xufSA9IChuYW1lOiBzdHJpbmcpID0+IChlZGl0b3I6IEVkaXRvcikgPT5cbiAgZWRpdG9yLm9wdGlvbnMuZ2V0KG5hbWUpO1xuXG5jb25zdCByZWdpc3RlciA9IChlZGl0b3I6IEVkaXRvcik6IHZvaWQgPT4ge1xuICBjb25zdCByZWdpc3Rlck9wdGlvbiA9IGVkaXRvci5vcHRpb25zLnJlZ2lzdGVyO1xuXG4gIHJlZ2lzdGVyT3B0aW9uKCdhdXRvbGlua19wYXR0ZXJuJywge1xuICAgIHByb2Nlc3NvcjogJ3JlZ2V4cCcsXG4gICAgLy8gVXNlIHRoZSBQb2xhcmlzIGxpbmsgZGV0ZWN0aW9uLCBob3dldmVyIGZvciBhdXRvbGluayB3ZSBuZWVkIHRvIG1ha2UgaXQgYmUgYW4gZXhhY3QgbWF0Y2hcbiAgICBkZWZhdWx0OiBuZXcgUmVnRXhwKCdeJyArIFJlZ2V4ZXMubGluaygpLnNvdXJjZSArICckJywgJ2knKVxuICB9KTtcblxuICByZWdpc3Rlck9wdGlvbignbGlua19kZWZhdWx0X3RhcmdldCcsIHtcbiAgICBwcm9jZXNzb3I6ICdzdHJpbmcnXG4gIH0pO1xuXG4gIHJlZ2lzdGVyT3B0aW9uKCdsaW5rX2RlZmF1bHRfcHJvdG9jb2wnLCB7XG4gICAgcHJvY2Vzc29yOiAnc3RyaW5nJyxcbiAgICBkZWZhdWx0OiAnaHR0cHMnXG4gIH0pO1xufTtcblxuY29uc3QgZ2V0QXV0b0xpbmtQYXR0ZXJuID0gb3B0aW9uPFJlZ0V4cD4oJ2F1dG9saW5rX3BhdHRlcm4nKTtcbmNvbnN0IGdldERlZmF1bHRMaW5rVGFyZ2V0ID0gb3B0aW9uPHN0cmluZyB8IHVuZGVmaW5lZD4oJ2xpbmtfZGVmYXVsdF90YXJnZXQnKTtcbmNvbnN0IGdldERlZmF1bHRMaW5rUHJvdG9jb2wgPSBvcHRpb248c3RyaW5nPignbGlua19kZWZhdWx0X3Byb3RvY29sJyk7XG5jb25zdCBhbGxvd1Vuc2FmZUxpbmtUYXJnZXQgPSBvcHRpb24oJ2FsbG93X3Vuc2FmZV9saW5rX3RhcmdldCcpO1xuXG5leHBvcnQge1xuICByZWdpc3RlcixcbiAgYWxsb3dVbnNhZmVMaW5rVGFyZ2V0LFxuICBnZXRBdXRvTGlua1BhdHRlcm4sXG4gIGdldERlZmF1bHRMaW5rVGFyZ2V0LFxuICBnZXREZWZhdWx0TGlua1Byb3RvY29sXG59O1xuIiwiaW1wb3J0IHsgRnVuLCBPYmosIFN0cmluZ3MsIFR5cGUsIFVuaWNvZGUgfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5pbXBvcnQgVGV4dFNlZWtlciBmcm9tICd0aW55bWNlL2NvcmUvYXBpL2RvbS9UZXh0U2Vla2VyJztcbmltcG9ydCB0eXBlIEVkaXRvciBmcm9tICd0aW55bWNlL2NvcmUvYXBpL0VkaXRvcic7XG5cbmltcG9ydCAqIGFzIE9wdGlvbnMgZnJvbSAnLi4vYXBpL09wdGlvbnMnO1xuXG5pbXBvcnQgeyBmaW5kQ2hhciwgZnJlZWZhbGxSdGwsIGhhc1Byb3RvY29sLCBpc0JyYWNrZXRPclNwYWNlLCBpc1B1bmN0dWF0aW9uIH0gZnJvbSAnLi9VdGlscyc7XG5cbmludGVyZmFjZSBQYXJzZVJlc3VsdCB7XG4gIHJlYWRvbmx5IHJuZzogUmFuZ2U7XG4gIHJlYWRvbmx5IHVybDogc3RyaW5nO1xufVxuXG5jb25zdCBwYXJzZUN1cnJlbnRMaW5lID0gKGVkaXRvcjogRWRpdG9yLCBvZmZzZXQ6IG51bWJlcik6IFBhcnNlUmVzdWx0IHwgbnVsbCA9PiB7XG4gIGNvbnN0IHZvaWRFbGVtZW50cyA9IGVkaXRvci5zY2hlbWEuZ2V0Vm9pZEVsZW1lbnRzKCk7XG4gIGNvbnN0IGF1dG9MaW5rUGF0dGVybiA9IE9wdGlvbnMuZ2V0QXV0b0xpbmtQYXR0ZXJuKGVkaXRvcik7XG4gIGNvbnN0IHsgZG9tLCBzZWxlY3Rpb24gfSA9IGVkaXRvcjtcblxuICAvLyBOZXZlciBjcmVhdGUgYSBsaW5rIHdoZW4gd2UgYXJlIGluc2lkZSBhIGxpbmtcbiAgaWYgKGRvbS5nZXRQYXJlbnQoc2VsZWN0aW9uLmdldE5vZGUoKSwgJ2FbaHJlZl0nKSAhPT0gbnVsbCB8fCBlZGl0b3IubW9kZS5pc1JlYWRPbmx5KCkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IHJuZyA9IHNlbGVjdGlvbi5nZXRSbmcoKTtcbiAgY29uc3QgdGV4dFNlZWtlciA9IFRleHRTZWVrZXIoZG9tLCAobm9kZSkgPT4ge1xuICAgIHJldHVybiBkb20uaXNCbG9jayhub2RlKSB8fCBPYmouaGFzKHZvaWRFbGVtZW50cywgbm9kZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKSB8fCBkb20uZ2V0Q29udGVudEVkaXRhYmxlKG5vZGUpID09PSAnZmFsc2UnIHx8IGRvbS5nZXRQYXJlbnQobm9kZSwgJ2FbaHJlZl0nKSAhPT0gbnVsbDtcbiAgfSk7XG5cbiAgLy8gRGVzY2VuZCBkb3duIHRoZSBlbmQgY29udGFpbmVyIHRvIGZpbmQgdGhlIHRleHQgbm9kZVxuICBjb25zdCB7IGNvbnRhaW5lcjogZW5kQ29udGFpbmVyLCBvZmZzZXQ6IGVuZE9mZnNldCB9ID0gZnJlZWZhbGxSdGwocm5nLmVuZENvbnRhaW5lciwgcm5nLmVuZE9mZnNldCk7XG5cbiAgLy8gRmluZCB0aGUgcm9vdCBjb250YWluZXIgdG8gdXNlIHdoZW4gd2Fsa2luZ1xuICBjb25zdCByb290ID0gZG9tLmdldFBhcmVudChlbmRDb250YWluZXIsIGRvbS5pc0Jsb2NrKSA/PyBkb20uZ2V0Um9vdCgpO1xuXG4gIC8vIE1vdmUgdGhlIHNlbGVjdGlvbiBiYWNrd2FyZHMgdG8gdGhlIHN0YXJ0IG9mIHRoZSBwb3RlbnRpYWwgVVJMIHRvIGFjY291bnQgZm9yIHRoZSBwcmVzc2VkIGNoYXJhY3RlclxuICAvLyB3aGlsZSBhbHNvIGV4Y2x1ZGluZyB0aGUgbGFzdCBmdWxsIHN0b3AgZnJvbSBhIHdvcmQgbGlrZSBcInd3dy5zaXRlLmNvbS5cIlxuICBjb25zdCBlbmRTcG90ID0gdGV4dFNlZWtlci5iYWNrd2FyZHMoZW5kQ29udGFpbmVyLCBlbmRPZmZzZXQgKyBvZmZzZXQsIChub2RlLCBvZmZzZXQpID0+IHtcbiAgICBjb25zdCB0ZXh0ID0gbm9kZS5kYXRhO1xuICAgIGNvbnN0IGlkeCA9IGZpbmRDaGFyKHRleHQsIG9mZnNldCwgRnVuLm5vdChpc0JyYWNrZXRPclNwYWNlKSk7XG4gICAgLy8gTW92ZSBmb3J3YXJkIG9uZSBzbyB0aGUgb2Zmc2V0IGlzIGFmdGVyIHRoZSBmb3VuZCBjaGFyYWN0ZXIgdW5sZXNzIHRoZSBmb3VuZCBjaGFyIGlzIGEgcHVuY3R1YXRpb24gY2hhclxuICAgIHJldHVybiBpZHggPT09IC0xIHx8IGlzUHVuY3R1YXRpb24odGV4dFtpZHhdKSA/IGlkeCA6IGlkeCArIDE7XG4gIH0sIHJvb3QpO1xuXG4gIGlmICghZW5kU3BvdCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLy8gV2FsayBiYWNrd2FyZHMgdW50aWwgd2UgZmluZCBhIGJvdW5kYXJ5IG9yIGEgYnJhY2tldC9zcGFjZVxuICBsZXQgbGFzdFRleHROb2RlID0gZW5kU3BvdC5jb250YWluZXI7XG4gIGNvbnN0IHN0YXJ0U3BvdCA9IHRleHRTZWVrZXIuYmFja3dhcmRzKGVuZFNwb3QuY29udGFpbmVyLCBlbmRTcG90Lm9mZnNldCwgKG5vZGUsIG9mZnNldCkgPT4ge1xuICAgIGxhc3RUZXh0Tm9kZSA9IG5vZGU7XG4gICAgY29uc3QgaWR4ID0gZmluZENoYXIobm9kZS5kYXRhLCBvZmZzZXQsIGlzQnJhY2tldE9yU3BhY2UpO1xuICAgIC8vIE1vdmUgZm9yd2FyZCBvbmUgc28gdGhhdCB0aGUgb2Zmc2V0IGlzIGFmdGVyIHRoZSBicmFja2V0L3NwYWNlXG4gICAgcmV0dXJuIGlkeCA9PT0gLTEgPyBpZHggOiBpZHggKyAxO1xuICB9LCByb290KTtcblxuICBjb25zdCBuZXdSbmcgPSBkb20uY3JlYXRlUm5nKCk7XG4gIGlmICghc3RhcnRTcG90KSB7XG4gICAgbmV3Um5nLnNldFN0YXJ0KGxhc3RUZXh0Tm9kZSwgMCk7XG4gIH0gZWxzZSB7XG4gICAgbmV3Um5nLnNldFN0YXJ0KHN0YXJ0U3BvdC5jb250YWluZXIsIHN0YXJ0U3BvdC5vZmZzZXQpO1xuICB9XG4gIG5ld1JuZy5zZXRFbmQoZW5kU3BvdC5jb250YWluZXIsIGVuZFNwb3Qub2Zmc2V0KTtcblxuICBjb25zdCBybmdUZXh0ID0gVW5pY29kZS5yZW1vdmVad3NwKG5ld1JuZy50b1N0cmluZygpKTtcbiAgY29uc3QgbWF0Y2hlcyA9IHJuZ1RleHQubWF0Y2goYXV0b0xpbmtQYXR0ZXJuKTtcbiAgaWYgKG1hdGNoZXMpIHtcbiAgICBsZXQgdXJsID0gbWF0Y2hlc1swXTtcbiAgICBpZiAoU3RyaW5ncy5zdGFydHNXaXRoKHVybCwgJ3d3dy4nKSkge1xuICAgICAgY29uc3QgcHJvdG9jb2wgPSBPcHRpb25zLmdldERlZmF1bHRMaW5rUHJvdG9jb2woZWRpdG9yKTtcbiAgICAgIHVybCA9IHByb3RvY29sICsgJzovLycgKyB1cmw7XG4gICAgfSBlbHNlIGlmIChTdHJpbmdzLmNvbnRhaW5zKHVybCwgJ0AnKSAmJiAhaGFzUHJvdG9jb2wodXJsKSkge1xuICAgICAgdXJsID0gJ21haWx0bzonICsgdXJsO1xuICAgIH1cblxuICAgIHJldHVybiB7IHJuZzogbmV3Um5nLCB1cmwgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuY29uc3QgY29udmVydFRvTGluayA9IChlZGl0b3I6IEVkaXRvciwgcmVzdWx0OiBQYXJzZVJlc3VsdCk6IHZvaWQgPT4ge1xuICBjb25zdCB7IGRvbSwgc2VsZWN0aW9uIH0gPSBlZGl0b3I7XG4gIGNvbnN0IHsgcm5nLCB1cmwgfSA9IHJlc3VsdDtcblxuICBjb25zdCBib29rbWFyayA9IHNlbGVjdGlvbi5nZXRCb29rbWFyaygpO1xuICBzZWxlY3Rpb24uc2V0Um5nKHJuZyk7XG5cbiAgLy8gTmVlZHMgdG8gYmUgYSBuYXRpdmUgY3JlYXRlbGluayBjb21tYW5kIHNpbmNlIHRoaXMgaXMgZXhlY3V0ZWQgaW4gYSBrZXlwcmVzcyBldmVudCBoYW5kbGVyXG4gIC8vIHNvIHRoZSBwZW5kaW5nIGNoYXJhY3RlciB0aGF0IGlzIHRvIGJlIGluc2VydGVkIG5lZWRzIHRvIGJlIGluc2VydGVkIGFmdGVyIHRoZSBsaW5rLiBUaGF0IHdpbGwgbm90XG4gIC8vIGhhcHBlbiBpZiB3ZSB1c2UgdGhlIGZvcm1hdHRlciBjcmVhdGUgbGluayB2ZXJzaW9uLiBTaW5jZSB3ZSdyZSB1c2luZyB0aGUgbmF0aXZlIGNvbW1hbmRcbiAgLy8gdGhlbiB3ZSBhbHNvIG5lZWQgdG8gZW5zdXJlIHRoZSBleGVjIGNvbW1hbmQgZXZlbnRzIGFyZSBmaXJlZCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4gIGNvbnN0IGNvbW1hbmQgPSAnY3JlYXRlbGluayc7XG4gIGNvbnN0IGFyZ3MgPSB7IGNvbW1hbmQsIHVpOiBmYWxzZSwgdmFsdWU6IHVybCB9O1xuICBjb25zdCBiZWZvcmVFeGVjRXZlbnQgPSBlZGl0b3IuZGlzcGF0Y2goJ0JlZm9yZUV4ZWNDb21tYW5kJywgYXJncyk7XG4gIGlmICghYmVmb3JlRXhlY0V2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgZWRpdG9yLmdldERvYygpLmV4ZWNDb21tYW5kKGNvbW1hbmQsIGZhbHNlLCB1cmwpO1xuICAgIGVkaXRvci5kaXNwYXRjaCgnRXhlY0NvbW1hbmQnLCBhcmdzKTtcblxuICAgIGNvbnN0IGRlZmF1bHRMaW5rVGFyZ2V0ID0gT3B0aW9ucy5nZXREZWZhdWx0TGlua1RhcmdldChlZGl0b3IpO1xuICAgIGlmIChUeXBlLmlzU3RyaW5nKGRlZmF1bHRMaW5rVGFyZ2V0KSkge1xuICAgICAgY29uc3QgYW5jaG9yID0gc2VsZWN0aW9uLmdldE5vZGUoKTtcbiAgICAgIGRvbS5zZXRBdHRyaWIoYW5jaG9yLCAndGFyZ2V0JywgZGVmYXVsdExpbmtUYXJnZXQpO1xuXG4gICAgICAvLyBFbnN1cmUgbm9vcGVuZXIgaXMgYWRkZWQgZm9yIGJsYW5rIHRhcmdldHMgdG8gcHJldmVudCB3aW5kb3cgb3BlbmVyIGF0dGFja3NcbiAgICAgIGlmIChkZWZhdWx0TGlua1RhcmdldCA9PT0gJ19ibGFuaycgJiYgIU9wdGlvbnMuYWxsb3dVbnNhZmVMaW5rVGFyZ2V0KGVkaXRvcikpIHtcbiAgICAgICAgZG9tLnNldEF0dHJpYihhbmNob3IsICdyZWwnLCAnbm9vcGVuZXInKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZWxlY3Rpb24ubW92ZVRvQm9va21hcmsoYm9va21hcmspO1xuICBlZGl0b3Iubm9kZUNoYW5nZWQoKTtcbn07XG5cbmNvbnN0IGhhbmRsZVNwYWNlYmFyID0gKGVkaXRvcjogRWRpdG9yKTogdm9pZCA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IHBhcnNlQ3VycmVudExpbmUoZWRpdG9yLCAtMSk7XG4gIGlmIChUeXBlLmlzTm9uTnVsbGFibGUocmVzdWx0KSkge1xuICAgIGNvbnZlcnRUb0xpbmsoZWRpdG9yLCByZXN1bHQpO1xuICB9XG59O1xuXG5jb25zdCBoYW5kbGVCcmFja2V0ID0gaGFuZGxlU3BhY2ViYXI7XG5cbmNvbnN0IGhhbmRsZUVudGVyID0gKGVkaXRvcjogRWRpdG9yKTogdm9pZCA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IHBhcnNlQ3VycmVudExpbmUoZWRpdG9yLCAwKTtcbiAgaWYgKFR5cGUuaXNOb25OdWxsYWJsZShyZXN1bHQpKSB7XG4gICAgY29udmVydFRvTGluayhlZGl0b3IsIHJlc3VsdCk7XG4gIH1cbn07XG5cbmNvbnN0IHNldHVwID0gKGVkaXRvcjogRWRpdG9yKTogdm9pZCA9PiB7XG4gIGVkaXRvci5vbigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMgJiYgIWUuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgIGhhbmRsZUVudGVyKGVkaXRvcik7XG4gICAgfVxuICB9KTtcblxuICBlZGl0b3Iub24oJ2tleXVwJywgKGUpID0+IHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAzMikge1xuICAgICAgaGFuZGxlU3BhY2ViYXIoZWRpdG9yKTtcbiAgICAvLyBPbmUgb2YgdGhlIGNsb3NpbmcgYnJhY2tldCBrZXlzOiApLCBdIG9yIH1cbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gNDggJiYgZS5zaGlmdEtleSB8fCBlLmtleUNvZGUgPT09IDIyMSkge1xuICAgICAgaGFuZGxlQnJhY2tldChlZGl0b3IpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQge1xuICBzZXR1cFxufTtcbiIsImltcG9ydCB7IFVuaWNvZGUgfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5jb25zdCBpc1RleHROb2RlID0gKG5vZGU6IE5vZGUpOiBub2RlIGlzIFRleHQgPT5cbiAgbm9kZS5ub2RlVHlwZSA9PT0gMztcblxuY29uc3QgaXNFbGVtZW50ID0gKG5vZGU6IE5vZGUpOiBub2RlIGlzIEVsZW1lbnQgPT5cbiAgbm9kZS5ub2RlVHlwZSA9PT0gMTtcblxuY29uc3QgaXNCcmFja2V0T3JTcGFjZSA9IChjaGFyOiBzdHJpbmcpOiBib29sZWFuID0+XG4gIC9eWyhcXFt7IFxcdTAwYTBdJC8udGVzdChjaGFyKTtcblxuLy8gTm90ZTogVGhpcyBpcyBzaW1pbGFyIHRvIHRoZSBQb2xhcmlzIHByb3RvY29sIGRldGVjdGlvbiwgZXhjZXB0IGl0IGFsc28gaGFuZGxlcyBgbWFpbHRvYCBhbmQgYW55IGxlbmd0aCBzY2hlbWVcbmNvbnN0IGhhc1Byb3RvY29sID0gKHVybDogc3RyaW5nKTogYm9vbGVhbiA9PlxuICAvXihbQS1aYS16XVtBLVphLXpcXGQuKy1dKjpcXC9cXC8pfG1haWx0bzovLnRlc3QodXJsKTtcblxuLy8gQSBsaW1pdGVkIGxpc3Qgb2YgcHVuY3R1YXRpb24gY2hhcmFjdGVycyB0aGF0IG1pZ2h0IGJlIHVzZWQgYWZ0ZXIgYSBsaW5rXG5jb25zdCBpc1B1bmN0dWF0aW9uID0gKGNoYXI6IHN0cmluZyk6IGJvb2xlYW4gPT5cbiAgL1s/ISwuOzpdLy50ZXN0KGNoYXIpO1xuXG5jb25zdCBmaW5kQ2hhciA9ICh0ZXh0OiBzdHJpbmcsIGluZGV4OiBudW1iZXIsIHByZWRpY2F0ZTogKGNoYXI6IHN0cmluZykgPT4gYm9vbGVhbik6IG51bWJlciA9PiB7XG4gIGZvciAobGV0IGkgPSBpbmRleCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgY29uc3QgY2hhciA9IHRleHQuY2hhckF0KGkpO1xuICAgIGlmICghVW5pY29kZS5pc1p3c3AoY2hhcikgJiYgcHJlZGljYXRlKGNoYXIpKSB7XG4gICAgICByZXR1cm4gaTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gLTE7XG59O1xuXG5jb25zdCBmcmVlZmFsbFJ0bCA9IChjb250YWluZXI6IE5vZGUsIG9mZnNldDogbnVtYmVyKTogeyBjb250YWluZXI6IE5vZGU7IG9mZnNldDogbnVtYmVyIH0gPT4ge1xuICBsZXQgdGVtcE5vZGUgPSBjb250YWluZXI7XG4gIGxldCB0ZW1wT2Zmc2V0ID0gb2Zmc2V0O1xuICB3aGlsZSAoaXNFbGVtZW50KHRlbXBOb2RlKSAmJiB0ZW1wTm9kZS5jaGlsZE5vZGVzW3RlbXBPZmZzZXRdKSB7XG4gICAgdGVtcE5vZGUgPSB0ZW1wTm9kZS5jaGlsZE5vZGVzW3RlbXBPZmZzZXRdO1xuICAgIHRlbXBPZmZzZXQgPSBpc1RleHROb2RlKHRlbXBOb2RlKSA/IHRlbXBOb2RlLmRhdGEubGVuZ3RoIDogdGVtcE5vZGUuY2hpbGROb2Rlcy5sZW5ndGg7XG4gIH1cblxuICByZXR1cm4geyBjb250YWluZXI6IHRlbXBOb2RlLCBvZmZzZXQ6IHRlbXBPZmZzZXQgfTtcbn07XG5cbmV4cG9ydCB7XG4gIGZyZWVmYWxsUnRsLFxuICBmaW5kQ2hhcixcbiAgaXNFbGVtZW50LFxuICBpc1RleHROb2RlLFxuICBpc1B1bmN0dWF0aW9uLFxuICBpc0JyYWNrZXRPclNwYWNlLFxuICBoYXNQcm90b2NvbFxufTtcbiIsImltcG9ydCAqIGFzIFR5cGUgZnJvbSAnLi4vY29yZS9UeXBlJztcbmltcG9ydCAqIGFzIEFycmF5VXRpbCBmcm9tICcuLi9jb3JlL0FycmF5VXRpbCc7XG5cbi8qKiBBIHdheSBvZiBjb21wYXJpbmcgdHdvIHZhbHVlcyBvZiB0aGUgc2FtZSB0eXBlIGZvciBlcXVhbGl0eS4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRXE8QT4ge1xuICBlcTogKHg6IEEsIHk6IEEpID0+IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBjb250cmFtYXAgPSA8QSwgQj4gKGVxYTogRXE8QT4sIGY6IChiOiBCKSA9PiBBKTogRXE8Qj4gPT5cbiAgZXEoKHgsIHkpID0+IGVxYS5lcShmKHgpLCBmKHkpKSk7XG5cbmV4cG9ydCBjb25zdCBlcSA9IDxBPiAoZjogKHg6IEEsIHk6IEEpID0+IGJvb2xlYW4pOiBFcTxBPiA9PlxuICAoeyBlcTogZiB9KTtcblxuZXhwb3J0IGNvbnN0IHRyaXBsZUVxOiBFcTxhbnk+ID0gZXEoKHgsIHkpID0+IHggPT09IHkpO1xuXG5leHBvcnQgY29uc3QgZXFTdHJpbmc6IEVxPHN0cmluZz4gPSB0cmlwbGVFcTtcblxuZXhwb3J0IGNvbnN0IGVxQm9vbGVhbjogRXE8Ym9vbGVhbj4gPSB0cmlwbGVFcTtcblxuZXhwb3J0IGNvbnN0IGVxTnVtYmVyOiBFcTxudW1iZXI+ID0gdHJpcGxlRXE7XG5cbmV4cG9ydCBjb25zdCBlcVVuZGVmaW5lZDogRXE8dW5kZWZpbmVkPiA9IHRyaXBsZUVxO1xuXG5leHBvcnQgY29uc3QgZXFOdWxsOiBFcTxudWxsPiA9IHRyaXBsZUVxO1xuXG5leHBvcnQgY29uc3QgZXFBcnJheSA9IDxBPiAoZXFhOiBFcTxBPik6IEVxPEFycmF5TGlrZTxBPj4gPT4gZXEoKHgsIHkpID0+IHtcbiAgaWYgKHgubGVuZ3RoICE9PSB5Lmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBsZW4gPSB4Lmxlbmd0aDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGlmICghZXFhLmVxKHhbaV0sIHlbaV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufSk7XG5cbi8vIFRPRE86IE1ha2UgYW4gT3JkIHR5cGVjbGFzc1xuY29uc3QgZXFTb3J0ZWRBcnJheSA9IDxBPihlcWE6IEVxPEE+LCBjb21wYXJlRm4/OiAoYTogQSwgYjogQSkgPT4gbnVtYmVyKTogRXE8QXJyYXlMaWtlPEE+PiA9PlxuICBjb250cmFtYXAoZXFBcnJheShlcWEpLCAoeHMpID0+IEFycmF5VXRpbC5zb3J0KHhzLCBjb21wYXJlRm4pKTtcblxuZXhwb3J0IGNvbnN0IGVxUmVjb3JkID0gPEE+IChlcWE6IEVxPEE+KTogRXE8UmVjb3JkPHN0cmluZywgQT4+ID0+IGVxKCh4LCB5KSA9PiB7XG4gIGNvbnN0IGt4ID0gT2JqZWN0LmtleXMoeCk7XG4gIGNvbnN0IGt5ID0gT2JqZWN0LmtleXMoeSk7XG4gIGlmICghZXFTb3J0ZWRBcnJheShlcVN0cmluZykuZXEoa3gsIGt5KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBsZW4gPSBreC5sZW5ndGg7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCBxID0ga3hbaV07XG4gICAgaWYgKCFlcWEuZXEoeFtxXSwgeVtxXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59KTtcblxuZXhwb3J0IGNvbnN0IGVxQW55OiBFcTxhbnk+ID0gZXEoKHgsIHkpID0+IHtcbiAgaWYgKHggPT09IHkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IHR4ID0gVHlwZS50eXBlT2YoeCk7XG4gIGNvbnN0IHR5ID0gVHlwZS50eXBlT2YoeSk7XG4gIGlmICh0eCAhPT0gdHkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoVHlwZS5pc0VxdWF0YWJsZVR5cGUodHgpKSB7XG4gICAgcmV0dXJuIHggPT09IHk7XG5cbiAgfSBlbHNlIGlmICh0eCA9PT0gJ2FycmF5Jykge1xuICAgIHJldHVybiBlcUFycmF5KGVxQW55KS5lcSh4LCB5KTtcblxuICB9IGVsc2UgaWYgKHR4ID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBlcVJlY29yZChlcUFueSkuZXEoeCwgeSk7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59KTtcbiIsImV4cG9ydCBjb25zdCBtYXAgPSA8QSwgQj4oeHM6IEFycmF5TGlrZTxBPiwgZjogKGE6IEEpID0+IEIpOiBCW10gPT4ge1xuICBjb25zdCBsZW4gPSB4cy5sZW5ndGg7XG4gIGNvbnN0IHIgPSBuZXcgQXJyYXkobGVuKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICByW2ldID0gZih4KTtcbiAgfVxuICByZXR1cm4gcjtcbn07XG5cbi8qKiBtYXAgYSBmdW5jdGlvbiBvdmVyIGFuIGFycmF5LCB0aGVuIG1hcCBhbm90aGVyIGZ1bmN0aW9uIG92ZXIgZXZlcnkgaXRlbSBleGNlcHQgdGhlIGxhc3QgKi9cbmV4cG9ydCBjb25zdCBtYXBEZWxpbWl0ID0gPEEsIEI+ICh4czogQXJyYXlMaWtlPEE+LCBmOiAoYTogQSkgPT4gQiwgZGVsaW1pdDogKGI6IEIpID0+IEIpOiBCW10gPT4ge1xuICBjb25zdCBsZW4gPSB4cy5sZW5ndGg7XG4gIGNvbnN0IHIgPSBuZXcgQXJyYXkobGVuKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW4gLSAxOyBpKyspIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgcltpXSA9IGRlbGltaXQoZih4KSk7XG4gIH1cbiAgaWYgKGxlbiA+IDApIHtcbiAgICByW2xlbiAtIDFdID0gKGYoeHNbbGVuIC0gMV0pKTtcbiAgfVxuXG4gIHJldHVybiByO1xufTtcblxuZXhwb3J0IGNvbnN0IHNvcnQgPSA8QT4gKHhzOiBBcnJheUxpa2U8QT4sIGNvbXBhcmVGbj86IChhOiBBLCBiOiBBKSA9PiBudW1iZXIpOiBBW10gPT4ge1xuICBjb25zdCBjbG9uZTogQVtdID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoeHMpO1xuICByZXR1cm4gY2xvbmUuc29ydChjb21wYXJlRm4pO1xufTtcbiIsImV4cG9ydCBjb25zdCB0eXBlT2YgPSAoeDogYW55KSA9PiB7XG4gIGlmICh4ID09PSBudWxsKSB7XG4gICAgcmV0dXJuICdudWxsJztcbiAgfVxuICBpZiAoeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuICd1bmRlZmluZWQnO1xuICB9XG4gIGNvbnN0IHQgPSB0eXBlb2YgeDtcbiAgaWYgKHQgPT09ICdvYmplY3QnICYmIChBcnJheS5wcm90b3R5cGUuaXNQcm90b3R5cGVPZih4KSB8fCB4LmNvbnN0cnVjdG9yICYmIHguY29uc3RydWN0b3IubmFtZSA9PT0gJ0FycmF5JykpIHtcbiAgICByZXR1cm4gJ2FycmF5JztcbiAgfVxuICBpZiAodCA9PT0gJ29iamVjdCcgJiYgKFN0cmluZy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZih4KSB8fCB4LmNvbnN0cnVjdG9yICYmIHguY29uc3RydWN0b3IubmFtZSA9PT0gJ1N0cmluZycpKSB7XG4gICAgcmV0dXJuICdzdHJpbmcnO1xuICB9XG4gIHJldHVybiB0O1xufTtcblxuY29uc3QgaXNUeXBlID0gPFQ+KHR5cGU6IHN0cmluZykgPT4gKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBUID0+IHR5cGVPZih2YWx1ZSkgPT09IHR5cGU7XG5cbmV4cG9ydCBjb25zdCBpc1N0cmluZyA9IGlzVHlwZTxzdHJpbmc+KCdzdHJpbmcnKTtcbmV4cG9ydCBjb25zdCBpc09iamVjdCA9IGlzVHlwZTxPYmplY3Q+KCdvYmplY3QnKTtcbmV4cG9ydCBjb25zdCBpc0FycmF5ID0gaXNUeXBlPEFycmF5PHVua25vd24+PignYXJyYXknKTtcbmV4cG9ydCBjb25zdCBpc051bGwgPSBpc1R5cGU8bnVsbD4oJ251bGwnKTtcbmV4cG9ydCBjb25zdCBpc0Jvb2xlYW4gPSBpc1R5cGU8Ym9vbGVhbj4oJ2Jvb2xlYW4nKTtcbmV4cG9ydCBjb25zdCBpc1VuZGVmaW5lZCA9IGlzVHlwZTx1bmRlZmluZWQ+KCd1bmRlZmluZWQnKTtcbmV4cG9ydCBjb25zdCBpc0Z1bmN0aW9uID0gaXNUeXBlPEZ1bmN0aW9uPignZnVuY3Rpb24nKTtcbmV4cG9ydCBjb25zdCBpc051bWJlciA9IGlzVHlwZTxudW1iZXI+KCdudW1iZXInKTtcblxuZXhwb3J0IGNvbnN0IGlzRXF1YXRhYmxlVHlwZSA9ICh4OiBzdHJpbmcpOiBib29sZWFuID0+XG4gIFsgJ3VuZGVmaW5lZCcsICdib29sZWFuJywgJ251bWJlcicsICdzdHJpbmcnLCAnZnVuY3Rpb24nLCAneG1sJywgJ251bGwnIF0uaW5kZXhPZih4KSAhPT0gLTE7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG4gICAgICAgIGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcbiAgICAgICAgfVxuICAgIH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucnYgPSAoKSA9PiAoXCIxLjUuMlwiKSIsIl9fd2VicGFja19yZXF1aXJlX18ucnVpZCA9IFwiYnVuZGxlcj1yc3BhY2tAMS41LjJcIjtcbiIsImltcG9ydCBQbHVnaW4gZnJvbSAnLi9QbHVnaW4nO1xuXG5QbHVnaW4oKTtcblxuLyoqICoqKioqXG4gKiBETyBOT1QgRVhQT1JUIEFOWVRISU5HXG4gKlxuICogSUYgWU9VIERPIFJPTExVUCBXSUxMIExFQVZFIEEgR0xPQkFMIE9OIFRIRSBQQUdFXG4gKioqKioqKi9cbiJdLCJuYW1lcyI6WyJUeXBlIiwibm9vcCIsIm5vYXJnIiwiZiIsImNvbXBvc2UiLCJmYSIsImZiIiwiYXJncyIsImNvbXBvc2UxIiwiZmJjIiwiZmFiIiwiYSIsImNvbnN0YW50IiwidmFsdWUiLCJpZGVudGl0eSIsIngiLCJ0cmlwbGVFcXVhbHMiLCJiIiwiY3VycnkiLCJmbiIsImluaXRpYWxBcmdzIiwicmVzdEFyZ3MiLCJhbGwiLCJub3QiLCJ0IiwiZGllIiwibXNnIiwiRXJyb3IiLCJhcHBseSIsImNhbGwiLCJuZXZlciIsImFsd2F5cyIsIndlYWtlbiIsInBpcGUiLCJhYiIsImJjIiwiY2QiLCJkZSIsImVmIiwiZmciLCJnaCIsImMiLCJkIiwiZSIsImciLCJFcSIsIkZ1biIsIk9wdGlvbmFsIiwia2V5cyIsIk9iamVjdCIsImhhc093blByb3BlcnR5IiwiZWFjaCIsIm9iaiIsInByb3BzIiwiayIsImxlbiIsImkiLCJtYXAiLCJ0dXBsZU1hcCIsInIiLCJ0dXBsZSIsIm9iakFjYyIsImludGVybmFsRmlsdGVyIiwicHJlZCIsIm9uVHJ1ZSIsIm9uRmFsc2UiLCJiaWZpbHRlciIsImZpbHRlciIsIm1hcFRvQXJyYXkiLCJuYW1lIiwiZmluZCIsInZhbHVlcyIsInNpemUiLCJnZXQiLCJrZXkiLCJoYXMiLCJoYXNOb25OdWxsYWJsZUtleSIsInVuZGVmaW5lZCIsImlzRW1wdHkiLCJlcXVhbCIsImExIiwiYTIiLCJlcSIsInRhZyIsIm9uTm9uZSIsIm9uU29tZSIsIm1hcHBlciIsImJpbmRlciIsInByZWRpY2F0ZSIsInJlcGxhY2VtZW50IiwidGh1bmsiLCJtZXNzYWdlIiwid29ya2VyIiwiU3RyQXBwZW5kIiwiY2hlY2tSYW5nZSIsInN0ciIsInN1YnN0ciIsInN0YXJ0Iiwic3VwcGxhbnQiLCJpc1N0cmluZ09yTnVtYmVyIiwiZnVsbE1hdGNoIiwicmVtb3ZlTGVhZGluZyIsInByZWZpeCIsInN0YXJ0c1dpdGgiLCJyZW1vdmVUcmFpbGluZyIsInN1ZmZpeCIsImVuZHNXaXRoIiwiZW5zdXJlTGVhZGluZyIsImVuc3VyZVRyYWlsaW5nIiwiY29udGFpbnMiLCJlbmQiLCJpZHgiLCJjYXBpdGFsaXplIiwiYmxhbmsiLCJzIiwidHJpbSIsImxUcmltIiwiclRyaW0iLCJpc05vdEVtcHR5IiwicmVwZWF0IiwiY291bnQiLCJBcnJheSIsImZyb21Db2RlUG9pbnQiLCJTdHJpbmciLCJ0b0ludCIsInJhZGl4IiwibnVtIiwicGFyc2VJbnQiLCJpc05hTiIsInRvRmxvYXQiLCJwYXJzZUZsb2F0IiwiZ2V0UHJvdG90eXBlT2YiLCJoYXNQcm90byIsInYiLCJjb25zdHJ1Y3RvciIsInR5cGVPZiIsIm8iLCJwcm90byIsImlzVHlwZSIsInR5cGUiLCJpc1NpbXBsZVR5cGUiLCJpcyIsImlzT2JqZWN0IiwiaXNTdHJpbmciLCJpc1BsYWluT2JqZWN0IiwiaXNBcnJheSIsImlzTnVsbCIsImlzQm9vbGVhbiIsImlzVW5kZWZpbmVkIiwiaXNOdWxsYWJsZSIsImlzTm9uTnVsbGFibGUiLCJpc0Z1bmN0aW9uIiwiaXNOdW1iZXIiLCJpc0FycmF5T2YiLCJpc1Byb21pc2VMaWtlIiwiemVyb1dpZHRoIiwibmJzcCIsInNvZnRIeXBoZW4iLCJlbGxpcHNpcyIsImlzWndzcCIsImNoYXIiLCJyZW1vdmVad3NwIiwiYWRkVG9TdGFydCIsImFkZFRvRW5kIiwicmVtb3ZlRnJvbVN0YXJ0IiwibnVtQ2hhcnMiLCJyZW1vdmVGcm9tRW5kIiwibGluayIsImF1dG9saW5rIiwibGlua3NvdXJjZSIsIlJlZ0V4cCIsInRva2VucyIsInBhcmFtZXRlcnMiLCJtYXRjaCIsImNvbnRlbnRzIiwiaW5kZXgiLCJQbHVnaW5NYW5hZ2VyIiwiT3B0aW9ucyIsIktleXMiLCJlZGl0b3IiLCJSZWdleGVzIiwib3B0aW9uIiwicmVnaXN0ZXIiLCJyZWdpc3Rlck9wdGlvbiIsImdldEF1dG9MaW5rUGF0dGVybiIsImdldERlZmF1bHRMaW5rVGFyZ2V0IiwiZ2V0RGVmYXVsdExpbmtQcm90b2NvbCIsImFsbG93VW5zYWZlTGlua1RhcmdldCIsIk9iaiIsIlN0cmluZ3MiLCJVbmljb2RlIiwiVGV4dFNlZWtlciIsImZpbmRDaGFyIiwiZnJlZWZhbGxSdGwiLCJoYXNQcm90b2NvbCIsImlzQnJhY2tldE9yU3BhY2UiLCJpc1B1bmN0dWF0aW9uIiwicGFyc2VDdXJyZW50TGluZSIsIm9mZnNldCIsInZvaWRFbGVtZW50cyIsImF1dG9MaW5rUGF0dGVybiIsImRvbSIsInNlbGVjdGlvbiIsInJuZyIsInRleHRTZWVrZXIiLCJub2RlIiwiZW5kQ29udGFpbmVyIiwiZW5kT2Zmc2V0Iiwicm9vdCIsImVuZFNwb3QiLCJ0ZXh0IiwibGFzdFRleHROb2RlIiwic3RhcnRTcG90IiwibmV3Um5nIiwicm5nVGV4dCIsIm1hdGNoZXMiLCJ1cmwiLCJwcm90b2NvbCIsImNvbnZlcnRUb0xpbmsiLCJyZXN1bHQiLCJib29rbWFyayIsImNvbW1hbmQiLCJiZWZvcmVFeGVjRXZlbnQiLCJkZWZhdWx0TGlua1RhcmdldCIsImFuY2hvciIsImhhbmRsZVNwYWNlYmFyIiwiaGFuZGxlQnJhY2tldCIsImhhbmRsZUVudGVyIiwic2V0dXAiLCJpc1RleHROb2RlIiwiaXNFbGVtZW50IiwiY29udGFpbmVyIiwidGVtcE5vZGUiLCJ0ZW1wT2Zmc2V0IiwiUGx1Z2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsNkRBQWUsTUFBTSxFQUFDO0FBQ2Y7Ozs7Ozs7Ozs7Ozs7O0FDSFA7O0FBRUEsNkRBQWUsTUFBTSxFQUFDO0FBQ2Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSHdCO0FBRS9CLE1BQU1DLE9BQ0osS0FBUTtBQUVWLE1BQU1DLFFBQ0osQ0FBQ0MsSUFBTSxJQUFNQTtBQUVmLG9EQUFvRCxHQUNwRCxNQUFNQyxVQUFVLENBQXdCQyxJQUFpQkM7SUFDdkQsT0FBTyxDQUFDLEdBQUdDO1FBQ1QsT0FBT0YsR0FBR0MsR0FBRyxLQUFLLENBQUMsTUFBTUM7SUFDM0I7QUFDRjtBQUVBLGdH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