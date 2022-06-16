/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 5643:
/***/ ((module) => {

module.exports = false;



/***/ }),

/***/ 1143:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (false) {}

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ 2705:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(5639);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ 4636:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTimes = __webpack_require__(2545),
    isArguments = __webpack_require__(5694),
    isArray = __webpack_require__(1469),
    isBuffer = __webpack_require__(4144),
    isIndex = __webpack_require__(5776),
    isTypedArray = __webpack_require__(6719);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ 9932:
/***/ ((module) => {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ 151:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyArray = __webpack_require__(278),
    shuffleSelf = __webpack_require__(3480);

/**
 * A specialized version of `_.shuffle` for arrays.
 *
 * @private
 * @param {Array} array The array to shuffle.
 * @returns {Array} Returns the new shuffled array.
 */
function arrayShuffle(array) {
  return shuffleSelf(copyArray(array));
}

module.exports = arrayShuffle;


/***/ }),

/***/ 4239:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(2705),
    getRawTag = __webpack_require__(9607),
    objectToString = __webpack_require__(2333);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ 9454:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(4239),
    isObjectLike = __webpack_require__(7005);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ 8749:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(4239),
    isLength = __webpack_require__(1780),
    isObjectLike = __webpack_require__(7005);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ 280:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isPrototype = __webpack_require__(5726),
    nativeKeys = __webpack_require__(6916);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ 9877:
/***/ ((module) => {

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeFloor = Math.floor,
    nativeRandom = Math.random;

/**
 * The base implementation of `_.random` without support for returning
 * floating-point numbers.
 *
 * @private
 * @param {number} lower The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the random number.
 */
function baseRandom(lower, upper) {
  return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
}

module.exports = baseRandom;


/***/ }),

/***/ 5127:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var shuffleSelf = __webpack_require__(3480),
    values = __webpack_require__(2628);

/**
 * The base implementation of `_.shuffle`.
 *
 * @private
 * @param {Array|Object} collection The collection to shuffle.
 * @returns {Array} Returns the new shuffled array.
 */
function baseShuffle(collection) {
  return shuffleSelf(values(collection));
}

module.exports = baseShuffle;


/***/ }),

/***/ 2545:
/***/ ((module) => {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ 7518:
/***/ ((module) => {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ 7415:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayMap = __webpack_require__(9932);

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}

module.exports = baseValues;


/***/ }),

/***/ 278:
/***/ ((module) => {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ 1957:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

module.exports = freeGlobal;


/***/ }),

/***/ 9607:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(2705);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ 5776:
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ 5726:
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ 6916:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(5569);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ 1167:
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var freeGlobal = __webpack_require__(1957);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;


/***/ }),

/***/ 2333:
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ 5569:
/***/ ((module) => {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ 5639:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var freeGlobal = __webpack_require__(1957);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ 3480:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseRandom = __webpack_require__(9877);

/**
 * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
 *
 * @private
 * @param {Array} array The array to shuffle.
 * @param {number} [size=array.length] The size of `array`.
 * @returns {Array} Returns `array`.
 */
function shuffleSelf(array, size) {
  var index = -1,
      length = array.length,
      lastIndex = length - 1;

  size = size === undefined ? length : size;
  while (++index < size) {
    var rand = baseRandom(index, lastIndex),
        value = array[rand];

    array[rand] = array[index];
    array[index] = value;
  }
  array.length = size;
  return array;
}

module.exports = shuffleSelf;


/***/ }),

/***/ 5694:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsArguments = __webpack_require__(9454),
    isObjectLike = __webpack_require__(7005);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ 1469:
/***/ ((module) => {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ 8612:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(3560),
    isLength = __webpack_require__(1780);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ 4144:
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(5639),
    stubFalse = __webpack_require__(5062);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;


/***/ }),

/***/ 3560:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(4239),
    isObject = __webpack_require__(3218);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ 1780:
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ 3218:
/***/ ((module) => {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ 7005:
/***/ ((module) => {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ 6719:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsTypedArray = __webpack_require__(8749),
    baseUnary = __webpack_require__(7518),
    nodeUtil = __webpack_require__(1167);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ 3674:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(4636),
    baseKeys = __webpack_require__(280),
    isArrayLike = __webpack_require__(8612);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ 9983:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayShuffle = __webpack_require__(151),
    baseShuffle = __webpack_require__(5127),
    isArray = __webpack_require__(1469);

/**
 * Creates an array of shuffled values, using a version of the
 * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to shuffle.
 * @returns {Array} Returns the new shuffled array.
 * @example
 *
 * _.shuffle([1, 2, 3, 4]);
 * // => [4, 1, 3, 2]
 */
function shuffle(collection) {
  var func = isArray(collection) ? arrayShuffle : baseShuffle;
  return func(collection);
}

module.exports = shuffle;


/***/ }),

/***/ 5062:
/***/ ((module) => {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ 2628:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseValues = __webpack_require__(7415),
    keys = __webpack_require__(3674);

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object == null ? [] : baseValues(object, keys(object));
}

module.exports = values;


/***/ }),

/***/ 6781:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

module.exports = {
  shouldComponentUpdate: function(nextProps, nextState) {
    return (
      !shallowEqual(this.props, nextProps) ||
      !shallowEqual(this.state, nextState)
    );
  }
};


/***/ }),

/***/ 8732:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(2204)


/***/ }),

/***/ 6635:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var invariant = __webpack_require__(1143);

var GradientLocations = function () {
  var NORTH_WEST = 'north-west';
  var NORTH = 'north';
  var NORTH_EAST = "north-east";
  var EAST = 'east';
  var SOUTH_EAST = 'south-east';
  var SOUTH = 'south';
  var SOUTH_WEST = 'south-west';
  var WEST = 'west';
  var MIDDLE = 'middle';
  var angle_directions = {};
  angle_directions[NORTH_WEST] = 315;
  angle_directions[NORTH] = 0;
  angle_directions[NORTH_EAST] = 45;
  angle_directions[EAST] = 90;
  angle_directions[SOUTH_EAST] = 135;
  angle_directions[SOUTH] = 180;
  angle_directions[SOUTH_WEST] = 225;
  angle_directions[WEST] = 270;

  function directionClass(text_location, container_id) {
    var gradient_postfix;

    if (text_location in angle_directions) {
      gradient_postfix = text_location + container_id;
    } else {
      gradient_postfix = MIDDLE + container_id;
    }

    return gradient_postfix;
  }

  function buildGradient(linear_gradient, area_type) {
    var background_style;

    if (linear_gradient.clear_percent) {
      var gradient_angle = _gradientAngle(area_type);

      invariant(gradient_angle !== '', "If HOVER/NORMAL_linear_gradient has a 'clear_percent' then tile must also have a matching 'HOVER_area/NORMAL_area' ");
      invariant(typeof linear_gradient.gradient_rgba === 'string', "If HOVER/NORMAL_linear_gradient has a 'clear_percent' then the 'clear_percent' must also have an accompanying 'gradient_rgba' ");
      invariant(linear_gradient.gradient_rgba !== '', "gradient_rgba should look like 'rgba(255, 255, 255, 0.9)' ");
      var gradient_percent = linear_gradient.clear_percent;
      var gradient_rgba = linear_gradient.gradient_rgba;

      var rgb_start_from_zero = _rgbaStartFromZero(gradient_rgba);

      background_style = " linear-gradient(".concat(gradient_angle, ", ").concat(rgb_start_from_zero, ", ").concat(rgb_start_from_zero, " ").concat(gradient_percent, "%, ").concat(gradient_rgba, " ) ");
      return {
        background: background_style
      };
    }

    return '';
  }

  function _gradientAngle(text_location) {
    if (text_location in angle_directions) {
      var gradient_angle = angle_directions[text_location] + 'deg';
      return gradient_angle;
    } else {
      return '';
    }
  }

  function _rgbaStartFromZero(gradient_rgba) {
    console.assert(gradient_rgba.startsWith('rgba('), '_rgbaStartFromZero, gradient_rgba does not start correctly');
    console.assert(gradient_rgba.split(",").length === 4, '_rgbaStartFromZero, gradient_rgba wrong number of commmas');
    console.assert(gradient_rgba.endsWith(')'), '_rgbaStartFromZero, gradient_rgba does not end with a bracket');
    var rgba_split = gradient_rgba.split(",");
    rgba_split[3] = '0)';
    var rgb_start_from_zero = rgba_split.join();
    return rgb_start_from_zero;
  }

  return {
    buildGradient: buildGradient,
    directionClass: directionClass,
    NORTH_WEST: NORTH_WEST,
    NORTH: NORTH,
    NORTH_EAST: NORTH_EAST,
    EAST: EAST,
    SOUTH_EAST: SOUTH_EAST,
    SOUTH: SOUTH,
    SOUTH_WEST: SOUTH_WEST,
    WEST: WEST,
    MIDDLE: MIDDLE
  };
}();

module.exports = GradientLocations;

/***/ }),

/***/ 6101:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(7363));

var _propTypes = _interopRequireDefault(__webpack_require__(7086));

var _GradientLocations = _interopRequireDefault(__webpack_require__(6635));

var _StyleOrJsx = _interopRequireDefault(__webpack_require__(2007));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PureRenderMixin = __webpack_require__(6781); //  https://zhenyong.github.io/react/docs/pure-render-mixin.html


var IMAGES_DIR = "hover-grid-images";
var ORIGINAL_IMAGES = "";
var TILE_SIZED_IMAGES = "tile_sized";

var PictureTile = /*#__PURE__*/function (_Component) {
  _inherits(PictureTile, _Component);

  var _super = _createSuper(PictureTile);

  function PictureTile(props) {
    var _this;

    _classCallCheck(this, PictureTile);

    _this = _super.call(this, props);

    if (_this.props.rgh_ssr_grid_id) {
      _this.css_grid_id = _this.props.rgh_ssr_grid_id; // N.B. use short version 's' of 's_grid_id' for css
    } else {
      _this.css_grid_id = _this.props.rgh_hover_grid_id; // N.B. use long version 'my_dogs_grid_id' for css
    }

    _this.class_id_names = __webpack_require__(5830)(_this.css_grid_id);
    console.assert(_typeof(_this.class_id_names) === "object", "PictureTile, class_id_name error");
    _this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(_assertThisInitialized(_this));
    _this.state = {
      hover: false
    };
    return _this;
  }

  _createClass(PictureTile, [{
    key: "_imageDivStyles",
    value: function _imageDivStyles() {
      var TILE_IMAGE_class = this.class_id_names["TILE_IMAGE_PF"];
      var container_styles = new _StyleOrJsx["default"](TILE_IMAGE_class);
      container_styles.addStyling({
        backgroundPosition: this.props.rgh_left_picture_margin
      });
      var image_className = this.props.picture_src.replace(".", "-");
      container_styles.addStyling(image_className);
      container_styles.addStyling({
        width: this.props.rgh_adjusted_tile_width
      });
      var normal_classNames = container_styles.collectedClassNames();
      var normal_jsx_styles = container_styles.collectedJsx();
      return {
        normal_classNames: normal_classNames,
        normal_jsx_styles: normal_jsx_styles
      };
    }
  }, {
    key: "_hoverDivStyles",
    value: function _hoverDivStyles() {
      var TILE_HOVER_TEXT_class = this.class_id_names["TILE_HOVER_TEXT_PF"];
      var container_styles = new _StyleOrJsx["default"](TILE_HOVER_TEXT_class);
      container_styles.addStyling(this.props.hover_style);
      var hover_classNames = container_styles.collectedClassNames();
      var hover_jsx_styles = container_styles.collectedJsx();
      return {
        hover_classNames: hover_classNames,
        hover_jsx_styles: hover_jsx_styles
      };
    }
  }, {
    key: "_hoverGradientStyles",
    value: function _hoverGradientStyles() {
      var gradient_jsx = "";

      if (typeof this.props.hover_linear_gradient !== "undefined") {
        gradient_jsx = _GradientLocations["default"].buildGradient(this.props.hover_linear_gradient, this.props.hover_area);
      } else if (typeof this.props.hover_gradient !== "undefined") {
        gradient_jsx = {
          background: this.props.hover_gradient
        };
      }

      var tile_class = this.class_id_names["TILE_NORMAL_TEXT_PF"];
      var gradient_styles = new _StyleOrJsx["default"](tile_class, gradient_jsx);
      var gradient_classNames = gradient_styles.collectedClassNames();
      var gradient_jsx_styles = gradient_styles.collectedJsx();
      return {
        gradient_classNames: gradient_classNames,
        gradient_jsx_styles: gradient_jsx_styles
      };
    }
  }, {
    key: "_hoverText",
    value: function _hoverText(hover_show_id) {
      var _this$_hoverDivStyles = this._hoverDivStyles(),
          hover_classNames = _this$_hoverDivStyles.hover_classNames,
          hover_jsx_styles = _this$_hoverDivStyles.hover_jsx_styles;

      var _this$_hoverGradientS = this._hoverGradientStyles(),
          gradient_classNames = _this$_hoverGradientS.gradient_classNames,
          gradient_jsx_styles = _this$_hoverGradientS.gradient_jsx_styles;

      var location_style = _GradientLocations["default"].directionClass(this.props.hover_area, this.css_grid_id);

      var _this$_hoverTitleStyl = this._hoverTitleStyles(),
          title_classNames = _this$_hoverTitleStyl.title_classNames,
          title_jsx_styles = _this$_hoverTitleStyl.title_jsx_styles;

      var _this$_hoverInfoStyle = this._hoverInfoStyles(),
          info_classNames = _this$_hoverInfoStyle.info_classNames,
          info_jsx_styles = _this$_hoverInfoStyle.info_jsx_styles;

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: hover_classNames,
        style: hover_jsx_styles,
        id: hover_show_id,
        "data-from": "PictureTile._hoverText"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: gradient_classNames,
        style: gradient_jsx_styles
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: location_style
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: title_classNames,
        style: title_jsx_styles
      }, this.props.hover_title), /*#__PURE__*/_react["default"].createElement("div", {
        className: info_classNames,
        style: info_jsx_styles
      }, this.props.hover_info))));
    }
  }, {
    key: "_normalDivStyles",
    value: function _normalDivStyles() {
      var normal_css = {
        marginTop: "0px",
        position: "absolute"
      };
      var tile_class = this.class_id_names["TILE_NORMAL_TEXT_PF"];
      var view_styles = new _StyleOrJsx["default"](tile_class, normal_css);
      view_styles.addStyling(this.props.normal_style);
      var view_classNames = view_styles.collectedClassNames();
      var view_jsx_styles = view_styles.collectedJsx();
      return {
        view_classNames: view_classNames,
        view_jsx_styles: view_jsx_styles
      };
    }
  }, {
    key: "_normalGradientStyles",
    value: function _normalGradientStyles() {
      var gradient_jsx = "";

      if (typeof this.props.normal_linear_gradient !== "undefined") {
        gradient_jsx = _GradientLocations["default"].buildGradient(this.props.normal_linear_gradient, this.props.normal_area);
      } else if (typeof this.props.normal_gradient !== "undefined") {
        gradient_jsx = {
          background: this.props.normal_gradient
        };
      }

      var tile_class = this.class_id_names["TILE_NORMAL_TEXT_PF"];
      var gradient_styles = new _StyleOrJsx["default"](tile_class, gradient_jsx);
      var gradient_classNames = gradient_styles.collectedClassNames();
      var gradient_jsx_styles = gradient_styles.collectedJsx();
      return {
        gradient_classNames: gradient_classNames,
        gradient_jsx_styles: gradient_jsx_styles
      };
    }
  }, {
    key: "_plainText",
    value: function _plainText(normal_show_id) {
      var _this$_normalDivStyle = this._normalDivStyles(),
          view_classNames = _this$_normalDivStyle.view_classNames,
          view_jsx_styles = _this$_normalDivStyle.view_jsx_styles;

      var _this$_normalGradient = this._normalGradientStyles(),
          gradient_classNames = _this$_normalGradient.gradient_classNames,
          gradient_jsx_styles = _this$_normalGradient.gradient_jsx_styles;

      var location_style = _GradientLocations["default"].directionClass(this.props.normal_area, this.css_grid_id);

      var _this$_normalTitleSty = this._normalTitleStyles(),
          title_classNames = _this$_normalTitleSty.title_classNames,
          title_jsx_styles = _this$_normalTitleSty.title_jsx_styles;

      var _this$_normalInfoStyl = this._normalInfoStyles(),
          info_classNames = _this$_normalInfoStyl.info_classNames,
          info_jsx_styles = _this$_normalInfoStyl.info_jsx_styles;

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: view_classNames,
        style: view_jsx_styles,
        id: normal_show_id,
        "data-from": "PictureTile._plainText"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: gradient_classNames,
        style: gradient_jsx_styles
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: location_style
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: title_classNames,
        style: title_jsx_styles
      }, this.props.normal_title), /*#__PURE__*/_react["default"].createElement("div", {
        className: info_classNames,
        style: info_jsx_styles
      }, this.props.normal_info))));
    }
  }, {
    key: "_normalInfoStyles",
    value: function _normalInfoStyles() {
      var info_styles = new _StyleOrJsx["default"]();
      info_styles.addStyling(this.props.normal_info_style);
      var info_classNames = info_styles.collectedClassNames();
      var info_jsx_styles = info_styles.collectedJsx();
      return {
        info_classNames: info_classNames,
        info_jsx_styles: info_jsx_styles
      };
    }
  }, {
    key: "_imageUrl",
    value: function _imageUrl() {
      var link_url;

      if (this.props.rgh_is_static_tile) {
        var do_nothing_link = "javascript:void(0);";
        link_url = do_nothing_link; // N.B. static_tile is for menu, and don't let user see gray circle
      } else if (typeof this.props.link_url === "undefined") {
        link_url = this._imageSource(ORIGINAL_IMAGES);
      } else {
        link_url = this.props.link_url;
      }

      return link_url;
    }
  }, {
    key: "_imageSource",
    value: function _imageSource(image_type) {
      var image_folder = this.props.rgh_hover_grid_id.replace("_id", "_images");
      var image_src;

      if (image_type === "") {
        image_src = IMAGES_DIR + "/" + image_folder + "/" + this.props.picture_src;
      } else {
        image_src = IMAGES_DIR + "/" + image_folder + "/" + image_type + "/" + this.props.picture_src;
      }

      return image_src;
    }
  }, {
    key: "_hoverTitleStyles",
    value: function _hoverTitleStyles() {
      var title_styles = new _StyleOrJsx["default"]();
      title_styles.addStyling(this.props.hover_title_style);
      var title_classNames = title_styles.collectedClassNames();
      var title_jsx_styles = title_styles.collectedJsx();
      return {
        title_classNames: title_classNames,
        title_jsx_styles: title_jsx_styles
      };
    }
  }, {
    key: "_hoverInfoStyles",
    value: function _hoverInfoStyles() {
      var info_styles = new _StyleOrJsx["default"]();
      info_styles.addStyling(this.props.hover_info_style);
      var info_classNames = info_styles.collectedClassNames();
      var info_jsx_styles = info_styles.collectedJsx();
      return {
        info_classNames: info_classNames,
        info_jsx_styles: info_jsx_styles
      };
    }
  }, {
    key: "_normalTitleStyles",
    value: function _normalTitleStyles() {
      var title_styles = new _StyleOrJsx["default"]();
      title_styles.addStyling(this.props.normal_title_style);
      var title_classNames = title_styles.collectedClassNames();
      var title_jsx_styles = title_styles.collectedJsx();
      return {
        title_classNames: title_classNames,
        title_jsx_styles: title_jsx_styles
      };
    }
  }, {
    key: "_normalImage",
    value: function _normalImage() {
      var image_id = this.class_id_names["IMAGE_ID"] + this.props.rgh_picture_container_id;

      var image_src = this._imageSource(TILE_SIZED_IMAGES);

      var image_styles;

      if (this.props.rgh_is_static_tile) {
        image_styles = new _StyleOrJsx["default"]("", {
          width: this.props.rgh_picture_width
        });
      } else {
        image_styles = new _StyleOrJsx["default"]("", {
          width: this.props.rgh_picture_width,
          cursor: "pointer"
        });
      }

      image_styles.addStyling({
        marginLeft: this.props.rgh_left_picture_margin
      });
      var image_classNames = image_styles.collectedClassNames();
      var image_jsx_styles = image_styles.collectedJsx();
      return {
        image_id: image_id,
        image_src: image_src,
        image_classNames: image_classNames,
        image_jsx_styles: image_jsx_styles
      };
    }
  }, {
    key: "_imageTile",
    value: function _imageTile() {
      var _this$_imageDivStyles = this._imageDivStyles(),
          normal_classNames = _this$_imageDivStyles.normal_classNames,
          normal_jsx_styles = _this$_imageDivStyles.normal_jsx_styles;

      var _this$_normalImage = this._normalImage(),
          image_id = _this$_normalImage.image_id,
          image_src = _this$_normalImage.image_src,
          image_classNames = _this$_normalImage.image_classNames,
          image_jsx_styles = _this$_normalImage.image_jsx_styles;

      var static_tile_id = "";

      if (this.props.rgh_is_static_tile) {
        static_tile_id = "the_static_tile";
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: normal_classNames,
        style: normal_jsx_styles,
        id: static_tile_id,
        "data-from": "PictureTile._imageTile"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        id: image_id,
        src: image_src,
        style: image_jsx_styles,
        className: image_classNames
      }));
    }
  }, {
    key: "_imageHover",
    value: function _imageHover(is_hovering) {
      this.props.rgh_setHoverFunction(is_hovering);
    }
  }, {
    key: "_showHideCss",
    value: function _showHideCss() {
      var rgh_picture_container_id = this.props.rgh_picture_container_id;
      var hover_show_id = rgh_picture_container_id + this.class_id_names["HOVER_TEXT_POSTFIX"];
      var before_show_id = rgh_picture_container_id + this.class_id_names["NORMAL_TEXT_POSTFIX"];
      var normal_show_id = rgh_picture_container_id + this.class_id_names["IMAGE_POSTFIX"];
      var my_styles = " #".concat(rgh_picture_container_id, ":hover #").concat(hover_show_id, "{opacity:1}") + " #".concat(rgh_picture_container_id, " #").concat(hover_show_id, "{opacity:0}") + " #".concat(rgh_picture_container_id, ":hover #").concat(before_show_id, "{opacity:0}") + " #".concat(rgh_picture_container_id, " #").concat(before_show_id, "{opacity:1}") + " #".concat(rgh_picture_container_id, ":hover #").concat(normal_show_id, "{opacity:0}") + " #".concat(rgh_picture_container_id, " #").concat(normal_show_id, "{opacity:1} ");

      if (typeof this.props.filter_hover !== "undefined") {
        my_styles += " #".concat(rgh_picture_container_id, ":hover {filter: ").concat(this.props.filter_hover, " } ");
      }

      if (typeof this.props.filter_normal !== "undefined") {
        my_styles += " #".concat(rgh_picture_container_id, " {filter: ").concat(this.props.filter_normal, " } ");
      }

      return my_styles;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var mouse_hover_text = this._hoverText(this.props.rgh_picture_container_id + this.class_id_names["HOVER_TEXT_POSTFIX"]);

      var plain_text = this._plainText(this.props.rgh_picture_container_id + this.class_id_names["NORMAL_TEXT_POSTFIX"]);

      var image_tile = this._imageTile(this.props.rgh_picture_container_id + this.class_id_names["IMAGE_POSTFIX"]);

      var tile_container_class = this.class_id_names["TILE_CONTAINER_PF"];

      var my_styles = this._showHideCss();

      var image_url = this._imageUrl();

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: tile_container_class,
        "data-from": "PictureTile.render",
        id: this.props.rgh_picture_container_id,
        onMouseEnter: function onMouseEnter() {
          return _this2._imageHover(true);
        },
        onMouseLeave: function onMouseLeave() {
          return _this2._imageHover(false);
        }
      }, /*#__PURE__*/_react["default"].createElement("a", {
        href: image_url
      }, /*#__PURE__*/_react["default"].createElement("style", {
        dangerouslySetInnerHTML: {
          __html: my_styles
        }
      }), mouse_hover_text, plain_text, image_tile));
    }
  }]);

  return PictureTile;
}(_react.Component);

_defineProperty(PictureTile, "AREA_PROP_TYPE", _propTypes["default"].oneOf([_GradientLocations["default"].NORTH_WEST, _GradientLocations["default"].NORTH, _GradientLocations["default"].NORTH_EAST, _GradientLocations["default"].EAST, _GradientLocations["default"].SOUTH_EAST, _GradientLocations["default"].SOUTH, _GradientLocations["default"].SOUTH_WEST, _GradientLocations["default"].WEST, _GradientLocations["default"].MIDDLE]));

_defineProperty(PictureTile, "DEFAULT_NORMAL_AREA", "middle");

_defineProperty(PictureTile, "DEFAULT_HOVER_AREA", "middle");

_defineProperty(PictureTile, "DEFAULT_GRADIENT", {
  background: "rgba(3, 2, 7, 0.3)"
});

_defineProperty(PictureTile, "STRING_OR_OBJECT_CSS", [_propTypes["default"].string, _propTypes["default"].object]);

_defineProperty(PictureTile, "LINEAR_GRADIENT", _propTypes["default"].shape({
  clear_percent: _propTypes["default"].number.isRequired,
  gradient_rgba: _propTypes["default"].string.isRequired
}));

_defineProperty(PictureTile, "BASE_TILE_SHAPE", _propTypes["default"].shape({
  picture_src: _propTypes["default"].string.isRequired,
  rgh_picture_width: _propTypes["default"].number,
  picture_height: _propTypes["default"].number
}));

PictureTile.displayName = "PictureTile";
PictureTile.propTypes = {
  picture_src: _propTypes["default"].string.isRequired,
  normal_area: PictureTile.AREA_PROP_TYPE,
  // cascade from ReactHoverGrid
  hover_area: PictureTile.AREA_PROP_TYPE,
  // cascade from ReactHoverGrid
  normal_style: _propTypes["default"].oneOfType(PictureTile.STRING_OR_OBJECT_CSS),
  // cascade from ReactHoverGrid
  hover_style: _propTypes["default"].oneOfType(PictureTile.STRING_OR_OBJECT_CSS),
  // cascade from ReactHoverGrid
  hover_gradient: _propTypes["default"].string,
  // cascade from ReactHoverGrid
  normal_gradient: _propTypes["default"].string,
  // cascade from ReactHoverGrid
  hover_linear_gradient: PictureTile.LINEAR_GRADIENT,
  // cascade from ReactHoverGrid
  normal_linear_gradient: PictureTile.LINEAR_GRADIENT,
  // cascade from ReactHoverGrid
  normal_title_style: _propTypes["default"].oneOfType(PictureTile.STRING_OR_OBJECT_CSS),
  // cascade from ReactHoverGrid
  normal_info_style: _propTypes["default"].oneOfType(PictureTile.STRING_OR_OBJECT_CSS),
  // cascade from ReactHoverGrid
  hover_title_style: _propTypes["default"].oneOfType(PictureTile.STRING_OR_OBJECT_CSS),
  // cascade from ReactHoverGrid
  hover_info_style: _propTypes["default"].oneOfType(PictureTile.STRING_OR_OBJECT_CSS),
  // cascade from ReactHoverGrid
  filter_normal: _propTypes["default"].string,
  // cascade from ReactHoverGrid
  filter_hover: _propTypes["default"].string,
  // cascade from ReactHoverGrid
  link_url: _propTypes["default"].string,
  normal_title: _propTypes["default"].string,
  normal_info: _propTypes["default"].string,
  hover_title: _propTypes["default"].string,
  hover_info: _propTypes["default"].string,
  rgh_picture_container_id: _propTypes["default"].string.isRequired,
  rgh_setHoverFunction: _propTypes["default"].func.isRequired,
  rgh_hover_grid_id: _propTypes["default"].string.isRequired,
  rgh_ssr_grid_id: _propTypes["default"].string,
  rgh_is_static_tile: _propTypes["default"].bool,
  rgh_adjusted_tile_width: _propTypes["default"].number.isRequired,
  rgh_picture_width: _propTypes["default"].number.isRequired,
  rgh_left_picture_margin: _propTypes["default"].number.isRequired
};
PictureTile.defaultProps = {
  normal_area: PictureTile.DEFAULT_NORMAL_AREA,
  hover_area: PictureTile.DEFAULT_HOVER_AREA
};
var _default = PictureTile;
exports["default"] = _default;

/***/ }),

/***/ 2204:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(7363));

var _propTypes = _interopRequireDefault(__webpack_require__(7086));

var _PictureTile = _interopRequireDefault(__webpack_require__(6101));

var _GradientLocations = _interopRequireDefault(__webpack_require__(6635));

var _ScreenSizeToGrid = _interopRequireDefault(__webpack_require__(9570));

var _miscFuncs = _interopRequireDefault(__webpack_require__(9571));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PureRenderMixin = __webpack_require__(6781);

var lodash_shuffle = __webpack_require__(9983);

var invariant = __webpack_require__(1143);

var IS_NODE = __webpack_require__(5643);

var IS_BROWSER = !IS_NODE;

var ReactHoverGrid = /*#__PURE__*/function (_React$Component) {
  _inherits(ReactHoverGrid, _React$Component);

  var _super = _createSuper(ReactHoverGrid);

  function ReactHoverGrid(props) {
    var _this;

    _classCallCheck(this, ReactHoverGrid);

    _this = _super.call(this, props);
    invariant(_this.props.pictureTile_list.length > 0, "ReactHoverGrid, constructor pictureTile_list must have at least 1 element");
    _this.html_grid_id = _this._ssrOneCharId(_this.props.hover_grid_id);
    _this.class_id_names = __webpack_require__(5830)(_this.html_grid_id);
    console.assert(_typeof(_this.class_id_names) === "object", "ReactHoverGrid, class_id_name error");

    _this._bindMethods();

    _this.is_hovering = false;
    _this.change_div_to_percent = false;
    _this.window_to_grid_sizes = _this._serverRenderCheck();

    _this._nestedComponentResizing();

    _this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(_assertThisInitialized(_this));

    var _this$_removeStatics = _this._removeStatics(),
        not_static_tiles = _this$_removeStatics.not_static_tiles,
        static_tile = _this$_removeStatics.static_tile;

    not_static_tiles = _this._initialShuffle(not_static_tiles);
    _this.state = {
      list_of_tiles: not_static_tiles,
      static_tile: static_tile,
      computed_tiles: []
    };

    _this._generateCss();

    _this._turnOnShuffling();

    return _this;
  }

  _createClass(ReactHoverGrid, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (IS_BROWSER && this.props.resize_nested_component) {
        window.addEventListener("resize", this.props.resize_pub_sub.publishWidthChange);
        this.props.resize_pub_sub.subscribeToWidthChange(this.onContainerResize, this.html_grid_id, this.getHover);
        this.props.resize_pub_sub.publishWidthChange();
      } else if (this.props.onResize) {
        var onResize = this.props.onResize;
        setTimeout(function () {
          window.requestAnimationFrame(onResize);
        }, 0);
      }
    }
  }, {
    key: "_serverRenderCheck",
    value: function _serverRenderCheck() {
      if (this.props.server_render_ssr) {
        invariant(typeof this.props.server_screen_size !== "undefined", "ReactHoverGrid must have a server_screen_size property if server_render_ssr");
        invariant(Array.isArray(this.props.server_screen_size), "ReactHoverGrid, server_screen_size must be an array if server_render_ssr, it is a " + _typeof(this.props.server_screen_size));
        invariant(this.props.server_screen_size.length > 0, "ReactHoverGrid must have an un-empty server_screen_size property if server_render_ssr");
        invariant(typeof this.props.server_grid_size !== "undefined", "ReactHoverGrid must have a server_grid_size property if server_render_ssr");
        invariant(Array.isArray(this.props.server_grid_size), "ReactHoverGrid, server_grid_size must be an array if server_render_ssr, it is a " + _typeof(this.props.server_grid_size));
        invariant(this.props.server_grid_size.length > 0, "ReactHoverGrid must have an un-empty server_grid_size property if server_render_ssr");
        invariant(this.props.server_screen_size.length === this.props.server_grid_size.length, "ReactHoverGrid server_grid_size and server_screen_size must be the same length");

        var window_to_grid_sizes = _ScreenSizeToGrid["default"].ScreenSizeToGrid(this.html_grid_id, this.props.server_screen_size, this.props.server_grid_size);

        return window_to_grid_sizes;
      } else {
        return false;
      }
    }
  }, {
    key: "_nestedComponentResizing",
    value: function _nestedComponentResizing() {
      if (this.props.resize_nested_component) {
        invariant(_typeof(this.props.resize_pub_sub) === "object", "ReactHoverGrid must have a resize_pub_sub property if resize_nested_component");
        invariant(typeof this.props.resize_pub_sub.subscribeToWidthChange === "function", "resize_pub_sub must have a subscribeToWidthChange method");
        invariant(typeof this.props.resize_pub_sub.publishWidthChange === "function", "resize_pub_sub must have a publishWidthChange method");
      }
    }
  }, {
    key: "_bindMethods",
    value: function _bindMethods() {
      this._onBrowserResize = this._onBrowserResize.bind(this);
      this.onContainerResize = this.onContainerResize.bind(this);
      this.setHoverFunction = this.setHoverFunction.bind(this);
      this.getHover = this.getHover.bind(this);
    }
  }, {
    key: "_ssrOneCharId",
    value: function _ssrOneCharId(hover_grid_id) {
      invariant(hover_grid_id.endsWith("_grid_id"), "ReactHoverGrid, constructor this.html_grid_id must end with '_grid_id' ");

      if (this.props.server_render_ssr) {
        if (this.props.ssr_grid_id) {
          hover_grid_id = this.props.ssr_grid_id; // N.B. 's_grid_id' will be called 's' instead to save thousands of bytes on SSR hover grid
        }
      }

      return hover_grid_id;
    }
  }, {
    key: "_initialShuffle",
    value: function _initialShuffle(not_static_tiles) {
      if (this.props.shuffle_seconds && !this.props.server_render_ssr) {
        not_static_tiles = lodash_shuffle(not_static_tiles);
      }

      return not_static_tiles;
    }
  }, {
    key: "_removeStatics",
    value: function _removeStatics() {
      var not_static_tiles = [];
      var static_tile = false;

      var _iterator = _createForOfIteratorHelper(this.props.pictureTile_list),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var tile_data = _step.value;

          if (typeof tile_data["static_col"] !== "undefined" && typeof tile_data["static_row"] !== "undefined") {
            static_tile = tile_data;
          } else {
            not_static_tiles.push(tile_data);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return {
        not_static_tiles: not_static_tiles,
        static_tile: static_tile
      };
    }
  }, {
    key: "_shuffleTiles",
    value: function _shuffleTiles() {
      if (IS_BROWSER && !this.is_hovering) {
        this.state.list_of_tiles = lodash_shuffle(this.state.list_of_tiles);

        if (this.props.resize_nested_component) {
          this.onContainerResize(this.last_container_width);
        } else {
          this._onBrowserResize();
        }
      }
    }
  }, {
    key: "_turnOnShuffling",
    value: function _turnOnShuffling() {
      if (this.props.shuffle_seconds) {
        var milliseconds = this.props.shuffle_seconds * 1000;
        this._shuffleTiles = this._shuffleTiles.bind(this);
        setInterval(this._shuffleTiles, milliseconds);
      }
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      if (IS_BROWSER && !this.props.resize_nested_component) {
        this._onBrowserResize();

        window.addEventListener("resize", this._onBrowserResize);
      }
    }
  }, {
    key: "_onBrowserResize",
    value: function _onBrowserResize() {
      var container_elem = document.getElementById(this.html_grid_id);
      console.assert(_typeof(container_elem) === "object", "_onBrowserResize, container_elem not an object");
      var width_container_start = container_elem.clientWidth;

      var window_width = _miscFuncs["default"]._windowWidth();

      this._captureContainerSizes(window_width, width_container_start);

      var computed_tiles = this._figureTileRows(width_container_start);

      console.assert(_typeof(computed_tiles) === "object", "_onBrowserResize, computed_tiles not an object");
      console.assert(Object.keys(computed_tiles).length > 0, "_onBrowserResize, computed_tiles must have at least 1 tile");
      this.setState({
        computed_tiles: computed_tiles
      });
      console.assert(width_container_start === container_elem.clientWidth, "_onBrowserResize, width_container_start === container_elem.clientWidth");
    }
  }, {
    key: "_showSsrContainerSizes",
    value: function _showSsrContainerSizes(window_width, width_container_start) {
      if (this.not_done_sizes[window_width]) {
        this.hover_tiles_grid_sizes[window_width] = width_container_start;
        delete this.not_done_sizes[window_width];
      }

      var not_done_keys = Object.keys(this.not_done_sizes);

      if (not_done_keys.length === 0) {
        var screen_sizes = [];
        var grid_sizes = [];

        for (var server_screen_size in this.hover_tiles_grid_sizes) {
          var server_grid_size = this.hover_tiles_grid_sizes[server_screen_size];
          screen_sizes.push(server_screen_size);
          grid_sizes.push(server_grid_size);
        }

        var screen_size_text = "server_screen_size: [" + screen_sizes.join(", ") + "],";
        var grid_size_text = "server_grid_size: [" + grid_sizes.join(", ") + "],";
        console.log("*****************************************************************");
        console.log("For", this.html_grid_id, ":");
        console.log(screen_size_text);
        console.log(grid_size_text);
        console.log("*****************************************************************");
      } else {
        console.log("screen-size = ", window_width, ", hover-grid-size =", width_container_start, ", missing screen-sizes", this.not_done_sizes);
      }
    }
  }, {
    key: "_captureContainerSizes",
    value: function _captureContainerSizes(window_width, width_container_start) {
      // N.B. for building up server side render information
      if (false) { var screen_size, _iterator2, _step2; }
    }
  }, {
    key: "_calculateCutOff",
    value: function _calculateCutOff(current_row_width, extra_width, row_of_tiles) {
      console.assert(typeof current_row_width === "number", "_calculateCutOff, current_row_width not a number");
      console.assert(current_row_width >= 0, "_calculateCutOff, current_row_width not positive");
      console.assert(typeof extra_width === "number", "_calculateCutOff, extra_width not a number");
      console.assert(extra_width >= 0, "_calculateCutOff, extra_width not positive");
      console.assert(Array.isArray(row_of_tiles), "_calculateCutOff, row_of_tiles is not an array");
      var tile_cut_offs = [];
      var cut_off_total = 0;

      for (var i in row_of_tiles) {
        var tile = row_of_tiles[i];
        var tile_row_percentage = tile.picture_width / current_row_width;
        tile_cut_offs[i] = Math.floor(tile_row_percentage * extra_width);
        cut_off_total += tile_cut_offs[i];
      }

      var still_to_cut_off = extra_width - cut_off_total;

      while (still_to_cut_off > 0) {
        for (var _i in tile_cut_offs) {
          tile_cut_offs[_i]++;
          still_to_cut_off--;

          if (still_to_cut_off < 0) {
            break;
          }
        }
      }

      return tile_cut_offs;
    }
  }, {
    key: "_buildTileRow",
    value: function _buildTileRow(image_tiles, width_of_container, current_row) {
      console.assert(_typeof(image_tiles) === "object", "_buildTileRow, image_tiles not an object");
      console.assert(Object.keys(image_tiles).length > 0, "_buildTileRow, image_tiles must have at least 1 tile");
      var row = [];
      var current_row_width = 0;
      var column_count = 0;
      var image_tile;
      var image_margin = 2 * this.props.tile_edge;

      while (image_tiles.length > 0 && current_row_width < width_of_container) {
        column_count++;

        if (this.state.static_tile && column_count === this.state.static_tile["static_col"] && current_row === this.state.static_tile["static_row"]) {
          image_tile = Object.assign({}, this.state.static_tile);
        } else {
          image_tile = image_tiles.shift();
        }

        row.push(image_tile);
        var scaled_margin_width = image_tile.picture_width + image_margin;
        current_row_width += scaled_margin_width;
      }

      var extra_width = current_row_width - width_of_container;

      if (row.length > 0 && extra_width > 0) {
        var tile_cut_offs = this._calculateCutOff(current_row_width, extra_width, row);

        for (var i in row) {
          var pixelsToRemove = tile_cut_offs[i];
          var _image_tile = row[i];
          _image_tile.left_picture_margin = -Math.abs(Math.floor(pixelsToRemove / 2));
          _image_tile.adjusted_tile_width = _image_tile.picture_width - pixelsToRemove;
        }
      } else {
        for (var j in row) {
          var _image_tile2 = row[j];
          _image_tile2.left_picture_margin = 0;
          _image_tile2.adjusted_tile_width = _image_tile2.picture_width;
        }
      }

      return row;
    }
  }, {
    key: "onContainerResize",
    value: function onContainerResize(my_width) {
      invariant(typeof my_width === "number", "onContainerResize, my_width must be a number is " + my_width + " " + this.html_grid_id);
      invariant(my_width >= 0, "onContainerResize, my_width must be positive is " + my_width);
      this.last_container_width = my_width;

      var computed_tiles = this._figureTileRows(my_width);

      console.assert(_typeof(computed_tiles) === "object", "onContainerResize, computed_tiles not an object");
      console.assert(Object.keys(computed_tiles).length > 0, "onContainerResize, computed_tiles must have at least 1 tile");
      this.setState({
        computed_tiles: computed_tiles
      });
    }
  }, {
    key: "_figureTileRows",
    value: function _figureTileRows(width_of_container) {
      console.assert(typeof width_of_container === "number", "_figureTileRows, width_of_container must be a number");
      console.assert(width_of_container >= 0, "_figureTileRows, width_of_container must be positive");

      if (!this.state.list_of_tiles || width_of_container === 0) {
        return [];
      }

      var edgeless_width = width_of_container - 2 * this.props.tile_edge;

      if (edgeless_width < 1) {
        edgeless_width = 1;
      }

      var list_of_tiles = [];

      var _iterator3 = _createForOfIteratorHelper(this.state.list_of_tiles),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var picture_object = _step3.value;
          var picture_copy = Object.assign({}, picture_object);
          list_of_tiles.push(picture_copy);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      var pictures_tiles_rows_server = [];
      var number_rows = 0;

      while (list_of_tiles.length > 0) {
        number_rows++;

        var tile_row = this._buildTileRow(list_of_tiles, edgeless_width, number_rows);

        pictures_tiles_rows_server.push(tile_row);

        if (number_rows === this.props.max_rows) {
          break;
        }
      }

      var adjusted_tiles = [];

      for (var row in pictures_tiles_rows_server) {
        for (var column in pictures_tiles_rows_server[row]) {
          var adjusted_tile = pictures_tiles_rows_server[row][column];
          adjusted_tiles.push(adjusted_tile);
        }
      }

      return adjusted_tiles;
    }
  }, {
    key: "_generateCss",
    value: function _generateCss() {
      this.injected_css_styles = this._injectedCssStyles();
      console.assert(this.injected_css_styles.length > 0, "_generateCss, injected_css_styles is emtpy");

      if (IS_NODE && this.window_to_grid_sizes) {
        this.state.pictures_tiles_rows_server = [];
        this.state.pictures_container_width = [];
        var max_screen_index = this.props.server_screen_size.length;

        for (var screen_index = 0; screen_index < max_screen_index; screen_index++) {
          var screen_width = this.props.server_screen_size[screen_index];
          var width_of_grid = this.props.server_grid_size[screen_index];
          this.state.pictures_tiles_rows_server[screen_width] = this._figureTileRows(width_of_grid);
          this.state.pictures_container_width[screen_width] = width_of_grid;
        }
      } else {
        this.state.computed_tiles = [];
      }
    }
  }, {
    key: "setHoverFunction",
    value: function setHoverFunction(is_hovering) {
      this.is_hovering = is_hovering;
    }
  }, {
    key: "getHover",
    value: function getHover() {
      return this.is_hovering;
    }
  }, {
    key: "_tileViewCss",
    value: function _tileViewCss() {
      var hover_grid_row_height = this.props.hover_grid_row_height + "px";
      var TILE_IMAGE_class = this.class_id_names["TILE_IMAGE_PF"];
      var tile_image = " .".concat(TILE_IMAGE_class, "{overflow:hidden") + ";height:".concat(hover_grid_row_height, "} ");
      return tile_image;
    }
  }, {
    key: "_defaultTileHoverCss",
    value: function _defaultTileHoverCss() {
      var hover_class = this.class_id_names["TILE_HOVER_TEXT_PF"];
      var tile_hover_text = " .".concat(hover_class, "{pointer-events:none") + ";opacity:1" + ";position:absolute" + ";height:100%" + ";width:100%} ";
      return tile_hover_text;
    }
  }, {
    key: "_tileContainerCss",
    value: function _tileContainerCss() {
      var tile_cont_class = this.class_id_names["TILE_CONTAINER_PF"];
      var tile_edge = this.props.tile_edge + "px";
      var tile_cont = " .".concat(tile_cont_class, "{margin:").concat(tile_edge) + ";position:relative" + ";float:left" + ";cursor:pointer" + ";padding:0" + ";overflow:hidden} ";
      return tile_cont;
    }
  }, {
    key: "_locationCss",
    value: function _locationCss() {
      var hor_text_edge_px = this.props.hor_text_edge + "px";
      var ver_text_edge_px = this.props.ver_text_edge + "px";
      var hover_grid_row_height_px = this.props.hover_grid_row_height + "px";
      var tile_class = this.class_id_names["TILE_NORMAL_TEXT_PF"];
      var tile_parent = " .".concat(tile_class, "{display:table") + ";width:100%" + ";height:".concat(hover_grid_row_height_px, " }");
      var middle = " .middle".concat(this.html_grid_id, "{display:table-cell") + ";vertical-align:middle" + ";text-align:center} ";
      var name_north_west = _GradientLocations["default"].NORTH_WEST + this.html_grid_id;
      var north_west = " .".concat(name_north_west, "{display:table-cell") + ";vertical-align:top" + ";padding:".concat(ver_text_edge_px, " 0 0 ").concat(hor_text_edge_px) + ";text-align:left} ";
      var name_north = _GradientLocations["default"].NORTH + this.html_grid_id;
      var north = " .".concat(name_north, "{display:table-cell") + ";vertical-align:top" + ";padding:".concat(ver_text_edge_px, " 0 0") + ";text-align:center} ";
      var name_north_east = _GradientLocations["default"].NORTH_EAST + this.html_grid_id;
      var north_east = " .".concat(name_north_east, "{display:table-cell") + ";padding:".concat(ver_text_edge_px, " ").concat(hor_text_edge_px, " 0") + ";vertical-align:top" + ";text-align:right} ";
      var name_east = _GradientLocations["default"].EAST + this.html_grid_id;
      var east = " .".concat(name_east, "{display:table-cell") + ";padding:0 ".concat(hor_text_edge_px, " 0") + ";vertical-align:middle" + ";text-align:right} ";
      var name_south_east = _GradientLocations["default"].SOUTH_EAST + this.html_grid_id;
      var south_east = " .".concat(name_south_east, "{display:table-cell") + ";padding:0 ".concat(hor_text_edge_px, " ").concat(ver_text_edge_px) + ";vertical-align:bottom" + ";text-align:right} ";
      var name_south = _GradientLocations["default"].SOUTH + this.html_grid_id;
      var south = " .".concat(name_south, "{display:table-cell") + ";padding:0 0 ".concat(ver_text_edge_px) + ";vertical-align:bottom" + ";text-align:center} ";
      var name_south_west = _GradientLocations["default"].SOUTH_WEST + this.html_grid_id;
      var south_west = " .".concat(name_south_west, "{display:table-cell") + ";padding:0 0 ".concat(ver_text_edge_px, " ").concat(hor_text_edge_px) + ";vertical-align:bottom" + ";text-align:left} ";
      var name_west = _GradientLocations["default"].WEST + this.html_grid_id;
      var west = " .".concat(name_west, "{display:table-cell") + ";padding:0 0 0 ".concat(hor_text_edge_px) + ";vertical-align:middle" + ";text-align:left} ";
      var location_css = tile_parent + north_west + north + north_east + west + middle + east + south_west + south + south_east;
      return location_css;
    }
  }, {
    key: "_injectedCssStyles",
    value: function _injectedCssStyles() {
      var location_css = this._locationCss();

      var tile_container_css = this._tileContainerCss();

      var default_TILE_HOVER_TEXT_css = this._defaultTileHoverCss();

      var TILE_IMAGE_port_css = this._tileViewCss();

      var injected_css_styles = location_css + tile_container_css + default_TILE_HOVER_TEXT_css + TILE_IMAGE_port_css;
      return injected_css_styles;
    }
  }, {
    key: "_cascadeGridToEmptyTile",
    value: function _cascadeGridToEmptyTile(current_tile, grid_to_tile_name) {
      console.assert(_typeof(current_tile) === "object", "_cascadeGridToEmptyTile, current_tile not an object");
      console.assert(typeof grid_to_tile_name === "string", "_cascadeGridToEmptyTile, grid_to_tile_name not an string");

      if (!current_tile[grid_to_tile_name]) {
        if (this.props[grid_to_tile_name]) {
          current_tile[grid_to_tile_name] = this.props[grid_to_tile_name];
        }
      }

      return current_tile;
    }
  }, {
    key: "_cascadeStyles",
    value: function _cascadeStyles(current_tile) {
      // cascade to PictureTile
      console.assert(_typeof(current_tile) === "object", "_cascadeStyles, current_tile not an object");
      var cascade_properties = ["normal_area", "hover_area", "normal_style", "hover_style", "normal_title_style", "normal_info_style", "hover_title_style", "hover_info_style", "hover_gradient", "normal_gradient", "hover_linear_gradient", "normal_linear_gradient", "filter_normal", "filter_hover"];
      var that = this;
      cascade_properties.forEach(function (cascade_element) {
        current_tile = that._cascadeGridToEmptyTile(current_tile, cascade_element);
      });

      if (current_tile["normal_style"] && !current_tile["hover_style"]) {
        current_tile["hover_style"] = current_tile["normal_style"];
      }

      return current_tile;
    }
  }, {
    key: "_renderServerMultiples",
    value: function _renderServerMultiples(google_font_links) {
      var all_server_widths = [];

      for (var browser_width in this.state.pictures_tiles_rows_server) {
        var adjusted_pictures = this.state.pictures_tiles_rows_server[browser_width];

        var picture_list = this._cssInjectedPictures(adjusted_pictures);

        var id_name = this.class_id_names.serverWidthId(browser_width, this.html_grid_id);
        var px_width_browser = this.state.pictures_container_width[browser_width] + "px";
        var styles_of_tile = {
          width: px_width_browser
        };
        all_server_widths.push( /*#__PURE__*/_react["default"].createElement("div", {
          id: id_name,
          key: browser_width,
          style: styles_of_tile
        }, picture_list));
      }

      var edge_styles = {
        paddingLeft: this.props.tile_edge,
        paddingRight: this.props.tile_edge
      };
      var media_hide_grids = this.window_to_grid_sizes.showMatchingSizedGridCss();

      var multiple_widths = /*#__PURE__*/_react["default"].createElement("div", {
        style: edge_styles,
        "data-from": "ReactHoverGrid._renderServerMultiples"
      }, /*#__PURE__*/_react["default"].createElement("style", {
        dangerouslySetInnerHTML: {
          __html: this.props.inject_css_rules
        }
      }), /*#__PURE__*/_react["default"].createElement("div", {
        dangerouslySetInnerHTML: {
          __html: google_font_links
        }
      }), /*#__PURE__*/_react["default"].createElement("style", {
        dangerouslySetInnerHTML: {
          __html: media_hide_grids
        }
      }), /*#__PURE__*/_react["default"].createElement("style", {
        dangerouslySetInnerHTML: {
          __html: this.injected_css_styles
        }
      }), all_server_widths);

      return multiple_widths;
    }
  }, {
    key: "_renderBrowserExact",
    value: function _renderBrowserExact(google_font_links) {
      var adjusted_pictures = this.state.computed_tiles;

      var picture_list = this._cssInjectedPictures(adjusted_pictures);

      var border_adjust = {
        paddingLeft: this.props.tile_edge,
        paddingRight: this.props.tile_edge
      };
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: border_adjust,
        "data-from": "ReactHoverGrid._renderBrowserExact"
      }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("style", {
        dangerouslySetInnerHTML: {
          __html: this.props.inject_css_rules
        }
      }), /*#__PURE__*/_react["default"].createElement("div", {
        dangerouslySetInnerHTML: {
          __html: google_font_links
        }
      }), /*#__PURE__*/_react["default"].createElement("style", {
        dangerouslySetInnerHTML: {
          __html: this.injected_css_styles
        }
      }), picture_list));
    }
  }, {
    key: "_cssInjectedPictures",
    value: function _cssInjectedPictures(adjusted_pictures) {
      var _this2 = this;

      console.assert(_typeof(adjusted_pictures) === "object", "_cssInjectedPictures, adjusted_pictures not an object");
      var picture_list = adjusted_pictures.map(function (tile_before_css, tile_index) {
        var current_tile = _this2._cascadeStyles(tile_before_css);

        console.assert(_typeof(current_tile) === "object", "_cssInjectedPictures, current_tile not an object");
        var picture_container_id = _this2.html_grid_id + tile_index;
        var is_static_tile = false;

        if (current_tile["static_col"] && current_tile["static_row"]) {
          is_static_tile = true;
        }

        return /*#__PURE__*/_react["default"].createElement(_PictureTile["default"], {
          key: tile_index,
          picture_src: current_tile.picture_src,
          normal_area: current_tile.normal_area // cascade to PictureTile
          ,
          hover_area: current_tile.hover_area // cascade to PictureTile
          ,
          normal_style: current_tile.normal_style // cascade to PictureTile
          ,
          hover_style: current_tile.hover_style // cascade to PictureTile
          ,
          hover_gradient: current_tile.hover_gradient // cascade to PictureTile
          ,
          normal_gradient: current_tile.normal_gradient // cascade to PictureTile
          ,
          hover_linear_gradient: current_tile.hover_linear_gradient // cascade to PictureTile
          ,
          normal_linear_gradient: current_tile.normal_linear_gradient // cascade to PictureTile
          ,
          normal_title_style: current_tile.normal_title_style // cascade to PictureTile
          ,
          normal_info_style: current_tile.normal_info_style // cascade to PictureTile
          ,
          hover_title_style: current_tile.hover_title_style // cascade to PictureTile
          ,
          hover_info_style: current_tile.hover_info_style // cascade to PictureTile
          ,
          filter_normal: current_tile.filter_normal // cascade to PictureTile
          ,
          filter_hover: current_tile.filter_hover // cascade to PictureTile
          ,
          link_url: current_tile.link_url,
          normal_title: current_tile.normal_title,
          normal_info: current_tile.normal_info,
          hover_title: current_tile.hover_title,
          hover_info: current_tile.hover_info,
          rgh_picture_container_id: picture_container_id,
          rgh_setHoverFunction: _this2.setHoverFunction,
          rgh_hover_grid_id: _this2.props.hover_grid_id,
          rgh_ssr_grid_id: _this2.props.ssr_grid_id,
          rgh_is_static_tile: is_static_tile,
          rgh_adjusted_tile_width: current_tile.adjusted_tile_width,
          rgh_picture_width: current_tile.picture_width,
          rgh_left_picture_margin: current_tile.left_picture_margin
        });
      });
      return picture_list;
    }
  }, {
    key: "_googleLinks",
    value: function _googleLinks() {
      var google_font_links = "";

      if (this.props.google_font_link) {
        if (_typeof(this.props.google_font_link) === "object") {
          var _iterator4 = _createForOfIteratorHelper(this.props.google_font_link),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var a_google_font = _step4.value;
              google_font_links += "<link href=\"".concat(a_google_font, "\" rel=\"stylesheet\" />");
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        } else {
          google_font_links = "<link href=\"".concat(this.props.google_font_link, "\" rel=\"stylesheet\" />");
        }
      }

      return google_font_links;
    }
  }, {
    key: "render",
    value: function render() {
      var google_font_links = this._googleLinks();

      if (IS_NODE) {
        if (this.props.server_render_ssr) {
          return this._renderServerMultiples(google_font_links);
        } else {
          return null;
        }
      } else {
        return this._renderBrowserExact(google_font_links);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.onResize) {
        this.props.onResize();
      }
    }
  }], [{
    key: "windowWidth",
    value: function windowWidth() {
      return _miscFuncs["default"]._windowWidth();
    }
  }, {
    key: "getComputedWidth",
    value: function getComputedWidth(grid_id) {
      invariant(typeof grid_id === "string", "getComputedWidth, grid_id must be a string, is a " + _typeof(grid_id));
      invariant(grid_id.length > 0, "getComputedWidth, grid_ must have at least one character, is length of " + grid_id.length);
      invariant(!/\s/g.test(grid_id), 'getComputedWidth, grid_ must have no spaces, is "' + grid_id + '" ');
      return _miscFuncs["default"]._getComputedWidth(grid_id);
    }
  }]);

  return ReactHoverGrid;
}(_react["default"].Component);

_defineProperty(ReactHoverGrid, "STRING_OR_ARRAY", [_propTypes["default"].string, _propTypes["default"].array]);

ReactHoverGrid.displayName = "ReactHoverGrid";
ReactHoverGrid.propTypes = {
  hover_grid_id: _propTypes["default"].string.isRequired,
  ssr_grid_id: _propTypes["default"].string,
  hover_grid_row_height: _propTypes["default"].number.isRequired,
  pictureTile_list: _propTypes["default"].arrayOf(_PictureTile["default"].BASE_TILE_SHAPE).isRequired,
  normal_title_style: _propTypes["default"].oneOfType(_PictureTile["default"].STRING_OR_OBJECT_CSS),
  // cascade to PictureTile
  normal_info_style: _propTypes["default"].oneOfType(_PictureTile["default"].STRING_OR_OBJECT_CSS),
  // cascade to PictureTile
  hover_title_style: _propTypes["default"].oneOfType(_PictureTile["default"].STRING_OR_OBJECT_CSS),
  // cascade to PictureTile
  hover_info_style: _propTypes["default"].oneOfType(_PictureTile["default"].STRING_OR_OBJECT_CSS),
  // cascade to PictureTile
  hover_gradient: _propTypes["default"].string,
  // cascade to PictureTile
  normal_gradient: _propTypes["default"].string,
  // cascade to PictureTile
  hover_linear_gradient: _PictureTile["default"].LINEAR_GRADIENT,
  // cascade to PictureTile
  normal_linear_gradient: _PictureTile["default"].LINEAR_GRADIENT,
  // cascade to PictureTile
  filter_normal: _propTypes["default"].string,
  // cascade to PictureTile
  filter_hover: _propTypes["default"].string,
  // cascade to PictureTile
  normal_area: _PictureTile["default"].AREA_PROP_TYPE,
  // cascade to PictureTile
  hover_area: _PictureTile["default"].AREA_PROP_TYPE,
  // cascade to PictureTile
  normal_style: _propTypes["default"].oneOfType(_PictureTile["default"].STRING_OR_OBJECT_CSS),
  // cascade to PictureTile
  hover_style: _propTypes["default"].oneOfType(_PictureTile["default"].STRING_OR_OBJECT_CSS),
  // cascade to PictureTile
  hor_text_edge: _propTypes["default"].number,
  ver_text_edge: _propTypes["default"].number,
  tile_edge: _propTypes["default"].number,
  shuffle_seconds: _propTypes["default"].number,
  google_font_link: _propTypes["default"].oneOfType(ReactHoverGrid.STRING_OR_ARRAY),
  inject_css_rules: _propTypes["default"].string,
  max_rows: _propTypes["default"].number,
  resize_nested_component: _propTypes["default"].bool,
  resize_pub_sub: _propTypes["default"].object,
  server_render_ssr: _propTypes["default"].bool,
  init_shuffle_ssr: _propTypes["default"].bool,
  static_col: _propTypes["default"].number,
  // N.B. can only use if all images are the same size !
  static_row: _propTypes["default"].number,
  // static_col and static_row are from one, and only one, PictureTile
  onResize: _propTypes["default"].func,
  // Below 3 properties are for matching screen sizes to grid sizes for server side rendering.
  // .env file must be set to "NODE_ENV=development"
  show_server_grid_sizes: _propTypes["default"].bool,
  // Find ssr grid sizes for screen sizes?
  server_screen_size: _propTypes["default"].array,
  // Screen sizes to find grid sizes for when generate ssr grid
  server_grid_size: _propTypes["default"].array // Store grid to screen sizes here to console.log out

};
ReactHoverGrid.defaultProps = {
  hor_text_edge: 4,
  ver_text_edge: 2,
  tile_edge: 3,
  server_render_ssr: false,
  init_shuffle_ssr: false,
  resize_nested_component: false
};
var _default = ReactHoverGrid;
exports["default"] = _default;

/***/ }),

/***/ 9570:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _miscFuncs = _interopRequireDefault(__webpack_require__(9571));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var ScreenSizeToGrid = function () {
  var container_id;
  var server_screen_size;
  var server_grid_size;
  var class_id_names;

  function ScreenSizeToGrid(id_of_container, screen_size_match, grid_size_match) {
    console.assert(typeof id_of_container === 'string', 'ScreenSizeToGrid, id_of_container must be a string is ' + id_of_container);
    console.assert(Array.isArray(screen_size_match), 'ScreenSizeToGrid, screen_size_match is not an array is ' + screen_size_match);
    console.assert(Array.isArray(grid_size_match), 'ScreenSizeToGrid, grid_size_match is not an array is ' + grid_size_match);
    container_id = id_of_container;
    server_screen_size = screen_size_match;
    server_grid_size = grid_size_match;
    class_id_names = __webpack_require__(5830)(container_id);
    console.assert(_typeof(class_id_names) === 'object', 'ScreenSizeToGrid, class_id_names error');
    return this;
  }
  /*
   Before first render by React, the css @media rules fake a valid grid
   server_screen_size={
   320 : 200,             // screen sizes from 320px to 767px will get a 200px wide grid
   768 : 700,             // screen sizes from 768px to 1023px will get a 700px wide grid
   1024 :1000             // screen sizes above 1023px will get a 1000px wide grid
   }
     */


  function _gridWidthFromScreen() {
    var width_of_grid = 0;

    var window_width = _miscFuncs["default"].windowWidth();

    console.assert(Array.isArray(server_screen_size), 'ScreenSizeToGrid._gridWidthFromScreen, server_screen_size is not an array is ' + server_screen_size);

    for (var screen_index = 0, max_screen_index = server_screen_size.length; screen_index < max_screen_index; screen_index++) {
      var browser_width = server_screen_size[screen_index];

      if (browser_width > window_width) {
        break;
      }

      width_of_grid = server_grid_size[screen_index];
    }

    return width_of_grid;
  }
  /*
   @media all and (min-width: 320px) {
   #server_width_320px-my_id  { display: block }
   #server_width_768px-my_id  { display: none }
   #server_width_1024px-my_id { display: none } }
   @media all and (min-width: 768px) {
   #server_width_320px-my_id  { display: none }
   #server_width_768px-my_id  { display: block }
   #server_width_1024px-my_id { display: none } }
   @media all and (min-width: 1024px) {
   #server_width_320px-my_id  { display: none }
   #server_width_768px-my_id  { display: none }
   #server_width_1024px-my_id { display: block } }
   */


  function _displayBlockNone(screen_index, min_width, max_width) {
    console.assert(screen_index >= 0, 'ScreenSizeToGrid, _displayBlockNone has bad screen_index is' + screen_index);
    console.assert(min_width > 0, 'ScreenSizeToGrid, _displayBlockNone has bad min_width is ' + min_width);
    console.assert(max_width > 0, 'ScreenSizeToGrid, _displayBlockNone has bad max_width is ' + max_width);
    console.assert(min_width < max_width, 'ScreenSizeToGrid, _displayBlockNone has bad min max widths is ' + min_width + '<>' + max_width);
    var min_max_rule = " @media all and (min-width: ".concat(min_width, "px) and (max-width:").concat(max_width, "px) {");

    for (var screen_display = 0, max_screen_display = server_screen_size.length; screen_display < max_screen_display; screen_display++) {
      var screen_width = server_screen_size[screen_display];
      var server_width_id = class_id_names.serverWidthId(screen_width, container_id);

      if (screen_index === screen_display) {
        min_max_rule += "#".concat(server_width_id, "{display:block}");
      } else {
        min_max_rule += "#".concat(server_width_id, "{display:none}");
      }
    }

    min_max_rule += '}';
    return min_max_rule;
  }

  function showMatchingSizedGridCss() {
    var screen_rules_template = '';
    var max_width;

    for (var screen_index = 0, max_screen_index = server_screen_size.length; screen_index < max_screen_index; screen_index++) {
      if (screen_index === max_screen_index - 1) {
        max_width = 99999;
      } else {
        max_width = server_screen_size[screen_index + 1] - 1;
      }

      var min_width = server_screen_size[screen_index];
      screen_rules_template += _displayBlockNone(screen_index, min_width, max_width);
    }

    return screen_rules_template;
  }

  return {
    ScreenSizeToGrid: ScreenSizeToGrid,
    _gridWidthFromScreen: _gridWidthFromScreen,
    showMatchingSizedGridCss: showMatchingSizedGridCss
  };
}();

module.exports = ScreenSizeToGrid;

/***/ }),

/***/ 2007:
/***/ ((module) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function StyleOrJsx(className_list, jsx_styles) {
  className_list = typeof className_list !== "undefined" ? className_list : "";
  jsx_styles = typeof jsx_styles !== "undefined" ? jsx_styles : {};
  var members = Object.assign({}, {
    className_list: className_list,
    jsx_styles: jsx_styles
  });

  var cssToJsx = function cssToJsx(declaration_block) {
    var the_declarations = declaration_block.split(";");
    var jsx_object = {};

    var _iterator = _createForOfIteratorHelper(the_declarations),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var a_declaration = _step.value;

        try {
          var property_and_value = a_declaration.split(":");
          var the_property = property_and_value[0].trim();
          var the_value = property_and_value[1].trim();

          if (the_property.includes("-")) {
            var dash_parts = the_property.split("-");
            var jsx_property = dash_parts.shift();

            var _iterator2 = _createForOfIteratorHelper(dash_parts),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var a_dash_part = _step2.value;
                var first_uppercase = a_dash_part.charAt(0).toUpperCase() + a_dash_part.slice(1);
                jsx_property = jsx_property + first_uppercase;
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            jsx_object[jsx_property] = the_value;
          } else {
            jsx_object[the_property] = the_value;
          }
        } catch (e) {}
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return jsx_object;
  };

  var addStyling = function addStyling(className_or_jsx) {
    if (typeof className_or_jsx === "undefined") {
      return "";
    } else if (_typeof(className_or_jsx) === "object") {
      members.jsx_styles = Object.assign(members.jsx_styles, className_or_jsx);
    } else if (typeof className_or_jsx === "string" || className_or_jsx instanceof String) {
      if (className_or_jsx.includes(":")) {
        var css_to_jsx = cssToJsx(className_or_jsx);
        members.jsx_styles = Object.assign(members.jsx_styles, css_to_jsx);
      } else {
        if (className_or_jsx.charAt(0) === ".") {
          className_or_jsx = className_or_jsx.substr(1);
        }

        members.className_list += " " + className_or_jsx;
      }
    }
  };

  var collectedJsx = function collectedJsx() {
    if (Object.keys(members.jsx_styles).length === 0) {
      return {};
    } else {
      return members.jsx_styles;
    }
  };

  var collectedClassNames = function collectedClassNames() {
    var trimmed_classNames = members.className_list.trim();

    if (trimmed_classNames.length === 0) {
      return "";
    } else {
      return trimmed_classNames;
    }
  };

  return Object.freeze({
    addStyling: addStyling,
    collectedJsx: collectedJsx,
    collectedClassNames: collectedClassNames
  });
}

module.exports = StyleOrJsx;

/***/ }),

/***/ 5830:
/***/ ((module) => {

"use strict";


module.exports = function (post_fix) {
  var SERVER_WIDTH_ID, SERVER_KEY_ID, TILE_HOVER_TEXT_PF, TEXT_UP, TILE_IMAGE_PF, TILE_CONTAINER_PF, TILE_NORMAL_TEXT_PF, HOVER_TEXT_POSTFIX, NORMAL_TEXT_POSTFIX, IMAGE_POSTFIX, IMAGE_ID;

  if (false) {} else {
    SERVER_WIDTH_ID = "a";
    SERVER_KEY_ID = "b";
    TILE_HOVER_TEXT_PF = "c";
    TILE_IMAGE_PF = "d";
    TILE_CONTAINER_PF = "e";
    TILE_NORMAL_TEXT_PF = "f";
    HOVER_TEXT_POSTFIX = 'g';
    IMAGE_POSTFIX = 'h';
    IMAGE_ID = 'i';
    NORMAL_TEXT_POSTFIX = 'j';
  }

  TILE_HOVER_TEXT_PF = TILE_HOVER_TEXT_PF + post_fix;
  TILE_IMAGE_PF = TILE_IMAGE_PF + post_fix;
  TILE_CONTAINER_PF = TILE_CONTAINER_PF + post_fix;
  TILE_NORMAL_TEXT_PF = TILE_NORMAL_TEXT_PF + post_fix;

  function serverWidthId(browser_width, id_postfix) {
    var server_width_name = SERVER_WIDTH_ID + browser_width + id_postfix;
    return server_width_name;
  }

  return {
    SERVER_WIDTH_ID: SERVER_WIDTH_ID,
    SERVER_KEY_ID: SERVER_KEY_ID,
    TILE_HOVER_TEXT_PF: TILE_HOVER_TEXT_PF,
    TEXT_UP: TEXT_UP,
    TILE_IMAGE_PF: TILE_IMAGE_PF,
    TILE_CONTAINER_PF: TILE_CONTAINER_PF,
    TILE_NORMAL_TEXT_PF: TILE_NORMAL_TEXT_PF,
    HOVER_TEXT_POSTFIX: HOVER_TEXT_POSTFIX,
    NORMAL_TEXT_POSTFIX: NORMAL_TEXT_POSTFIX,
    IMAGE_POSTFIX: IMAGE_POSTFIX,
    IMAGE_ID: IMAGE_ID,
    serverWidthId: serverWidthId
  };
};

/***/ }),

/***/ 9571:
/***/ ((module) => {

"use strict";


function _windowWidth() {
  var window_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  return window_width;
}

function _getComputedWidth(grid_id) {
  var element = document.getElementById(grid_id);

  if (element === null) {
    return null;
  } else {
    var elem_style = window.getComputedStyle(element);
    var elem_px_width = elem_style.width;
    var elem_width = parseInt(elem_px_width, 10);
    return elem_width;
  }
}

module.exports = {
  _windowWidth: _windowWidth,
  _getComputedWidth: _getComputedWidth
};

/***/ }),

/***/ 7086:
/***/ ((module) => {

"use strict";
module.exports = PropTypes;

/***/ }),

/***/ 7363:
/***/ ((module) => {

"use strict";
module.exports = React;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
__webpack_unused_export__ = void 0;

var _reactHoverGrid = _interopRequireDefault(__webpack_require__(8732));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function readmeHover(hover_data, container_id) {
  ReactDOM.render( /*#__PURE__*/React.createElement(_reactHoverGrid["default"], hover_data), document.getElementById(container_id));
}

window.readmeHover = readmeHover;
var _default = readmeHover;
__webpack_unused_export__ = _default;
})();

/******/ })()
;