/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonpGLOBAL_WEBPACK__name_"];
/******/ 	window["webpackJsonpGLOBAL_WEBPACK__name_"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/ 		if(executeModules) {
/******/ 			for(i=0; i < executeModules.length; i++) {
/******/ 				result = __webpack_require__(__webpack_require__.s = executeModules[i]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		6: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + {"0":"1982d41a60fd4a540464","1":"f910b768fe3e18f1b6f7","2":"572386facb9ffaccbf72","3":"902f6a9cd60e0b394d95","4":"e3d6b7c14ec55770e13c","5":"cd878b2ca98a02cb8cda"}[chunkId] + ".js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(35)


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(36)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = require('./factoryWithThrowingShims')();
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function getComputedStyleById (elem_id) {
  const element = document.getElementById(elem_id)
  const elem_style = window.getComputedStyle(element)
  return elem_style
}

function getBoundingClientRectById (elem_id) {
  const element = document.getElementById(elem_id)
  const rect = element.getBoundingClientRect()
  return rect
}

function mergeWidthsWithText (grid_pictureTiles, grid_image_widths, dir_name) {
  let image_not_copied = []
  for (let picture_src in grid_image_widths) {
    image_not_copied[picture_src] = true
  }
  let pictureTile_sizes = []
  for (let i = 0; i < grid_pictureTiles.length; i++) {
    var picture_src = grid_pictureTiles[i].picture_src
    if (typeof grid_image_widths[picture_src] !== 'undefined') {
      var new_picture_tile = Object.assign({}, grid_pictureTiles[i], grid_image_widths[picture_src])
      pictureTile_sizes.push(new_picture_tile)
      image_not_copied[picture_src] = false
    } else {
      if (true) {
        console.log('Image', picture_src, 'does not exist in /public/hover-grid-images/' + dir_name)
      }
    }
  }
  for (let picture_src in grid_image_widths) {
    if (image_not_copied[picture_src]) {
      const picture_width = grid_image_widths[picture_src].picture_width
      const picture_height = grid_image_widths[picture_src].picture_height
      const no_text_image = {
        picture_src: picture_src
        , picture_width: picture_width
        , picture_height: picture_height
      }
      pictureTile_sizes.push(no_text_image)
    }
  }
  return pictureTile_sizes
}
module.exports = {
  getComputedStyleById: getComputedStyleById
  , getBoundingClientRectById: getBoundingClientRectById
  , mergeWidthsWithText: mergeWidthsWithText
}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

 const all_tile_tile_image_widths = {"circle_clip_grid":{"bat.png":{"picture_width":198,"picture_height":150},"bees.png":{"picture_width":198,"picture_height":150},"bridge.png":{"picture_width":198,"picture_height":150},"buntzen.png":{"picture_width":198,"picture_height":150},"car.png":{"picture_width":198,"picture_height":150},"car_dog.png":{"picture_width":198,"picture_height":150},"cato.png":{"picture_width":198,"picture_height":150},"cave.png":{"picture_width":198,"picture_height":150},"cranes.png":{"picture_width":198,"picture_height":150},"deer.png":{"picture_width":198,"picture_height":150},"dennet.png":{"picture_width":198,"picture_height":150},"denver.png":{"picture_width":198,"picture_height":150},"dragon.png":{"picture_width":198,"picture_height":150},"eggs.png":{"picture_width":198,"picture_height":150},"family.png":{"picture_width":198,"picture_height":150},"flare.png":{"picture_width":198,"picture_height":150},"flower.png":{"picture_width":198,"picture_height":150},"frog.png":{"picture_width":198,"picture_height":150},"garibaldi.png":{"picture_width":198,"picture_height":150},"happy.png":{"picture_width":198,"picture_height":150},"hello_kitty.png":{"picture_width":198,"picture_height":150},"jelly.png":{"picture_width":198,"picture_height":150},"kiwi.png":{"picture_width":198,"picture_height":150},"like.png":{"picture_width":198,"picture_height":150},"longs.png":{"picture_width":198,"picture_height":150},"maggie.png":{"picture_width":198,"picture_height":150},"menu.png":{"picture_width":198,"picture_height":150},"minnekhada.png":{"picture_width":198,"picture_height":150},"monster.png":{"picture_width":198,"picture_height":150},"mud.png":{"picture_width":198,"picture_height":150},"newt.png":{"picture_width":198,"picture_height":150},"new_west.png":{"picture_width":198,"picture_height":150},"nuke.png":{"picture_width":198,"picture_height":150},"pigs.png":{"picture_width":198,"picture_height":150},"pkd.png":{"picture_width":198,"picture_height":150},"plane.png":{"picture_width":198,"picture_height":150},"quarry.png":{"picture_width":198,"picture_height":150},"ramp.png":{"picture_width":198,"picture_height":150},"seymour.png":{"picture_width":198,"picture_height":150},"sfu.png":{"picture_width":198,"picture_height":150},"shrooms.png":{"picture_width":198,"picture_height":150},"sky_train.png":{"picture_width":198,"picture_height":150},"smile.png":{"picture_width":198,"picture_height":150},"snow_lake.png":{"picture_width":198,"picture_height":150},"st_marks.png":{"picture_width":198,"picture_height":150},"sun.png":{"picture_width":198,"picture_height":150},"the_lions.png":{"picture_width":198,"picture_height":150},"tiger.png":{"picture_width":198,"picture_height":150},"tree.png":{"picture_width":198,"picture_height":150},"tree_bears.png":{"picture_width":198,"picture_height":150},"two_trees.png":{"picture_width":198,"picture_height":150},"wet_maggie.png":{"picture_width":198,"picture_height":150},"whale.png":{"picture_width":198,"picture_height":150},"white.png":{"picture_width":198,"picture_height":150},"willow.png":{"picture_width":198,"picture_height":150}},"npm_example_grid":{"1_canada_bernie.jpg":{"picture_width":367,"picture_height":234},"2_amc_spirit.jpg":{"picture_width":416,"picture_height":234},"3_kiwi_airforce.jpg":{"picture_width":312,"picture_height":234},"4_christmas_cranes.jpg":{"picture_width":416,"picture_height":234},"5_sfu_observatory.jpg":{"picture_width":416,"picture_height":234},"6_i_like_coffee.jpg":{"picture_width":432,"picture_height":234},"7_pkd_tombstone.jpg":{"picture_width":312,"picture_height":234},"8_hello_kitty_skytrain.jpg":{"picture_width":416,"picture_height":234},"9_denver_nukes.jpg":{"picture_width":312,"picture_height":234}},"readme_sample_grid":{"1_east_van.png":{"picture_width":208,"picture_height":234},"2_over_sasamat.png":{"picture_width":415,"picture_height":234},"3_bc_snake.png":{"picture_width":229,"picture_height":234},"4_amazon_in_bc.png":{"picture_width":180,"picture_height":234}},"shrink_grow_grid":{"buntzen_lake.jpg":{"picture_width":703,"picture_height":200},"golden_colorado.jpg":{"picture_width":270,"picture_height":200},"joe_mills_mtn.jpg":{"picture_width":267,"picture_height":200},"lake_garabaldi.jpg":{"picture_width":267,"picture_height":200},"longs_peak.jpg":{"picture_width":267,"picture_height":200},"old_quary_colorado_springs.jpg":{"picture_width":364,"picture_height":200},"snow_lake_colorado.jpg":{"picture_width":267,"picture_height":200},"whale_rock_utah.jpg":{"picture_width":773,"picture_height":200},"white_rock.jpg":{"picture_width":1333,"picture_height":200}},"sizeable_left_grid":{"alouette_mtn.jpg":{"picture_width":141,"picture_height":250},"car_deer.jpg":{"picture_width":210,"picture_height":250},"cato.jpg":{"picture_width":141,"picture_height":250},"fiji_bat.jpg":{"picture_width":188,"picture_height":250},"green_tree.jpg":{"picture_width":141,"picture_height":250},"inukshuk.jpg":{"picture_width":141,"picture_height":250},"mushrooms.jpg":{"picture_width":333,"picture_height":250},"no_swim.jpg":{"picture_width":141,"picture_height":250},"plant_dragon.jpg":{"picture_width":141,"picture_height":250},"snow_bridge.jpg":{"picture_width":141,"picture_height":250},"trees_snow_sun.jpg":{"picture_width":141,"picture_height":250},"wood_monster.jpg":{"picture_width":141,"picture_height":250}},"sizeable_right_grid":{"alouette_mounatin.jpg":{"picture_width":178,"picture_height":100},"buntzen_ridge.jpg":{"picture_width":178,"picture_height":100},"coquitlam_lake.jpg":{"picture_width":178,"picture_height":100},"frozen_newt.jpg":{"picture_width":147,"picture_height":100},"green_frog.jpg":{"picture_width":178,"picture_height":100},"jug_island.jpg":{"picture_width":178,"picture_height":100},"longs_peak.jpg":{"picture_width":133,"picture_height":100},"lower_mainland.jpg":{"picture_width":178,"picture_height":100},"mayne_island.jpg":{"picture_width":178,"picture_height":100},"monroe_lake.jpg":{"picture_width":162,"picture_height":100},"mount_unnecessary.jpg":{"picture_width":178,"picture_height":100},"new_west.jpg":{"picture_width":178,"picture_height":100},"nz_pigs.jpg":{"picture_width":133,"picture_height":100},"robin_eggs.jpg":{"picture_width":178,"picture_height":100},"sfu_in_clouds.jpg":{"picture_width":178,"picture_height":100},"sister_bees.jpg":{"picture_width":178,"picture_height":100},"tree_bears.jpg":{"picture_width":178,"picture_height":100},"ubc_airport.jpg":{"picture_width":178,"picture_height":100},"weird_eggs.jpg":{"picture_width":178,"picture_height":100},"_maggie_sun.jpg":{"picture_width":120,"picture_height":100}},"ssr_with_js_grid":{"bike_works.jpg":{"picture_width":249,"picture_height":140},"black_mountain.jpg":{"picture_width":249,"picture_height":140},"buntzen.jpg":{"picture_width":249,"picture_height":140},"carSurfing.jpg":{"picture_width":187,"picture_height":140},"chase_tail.jpg":{"picture_width":187,"picture_height":140},"cypress_lake.jpg":{"picture_width":249,"picture_height":140},"dennet_lake.jpg":{"picture_width":249,"picture_height":140},"dog_car.jpg":{"picture_width":249,"picture_height":140},"dog_head.jpg":{"picture_width":187,"picture_height":140},"dog_rocks.jpg":{"picture_width":187,"picture_height":140},"fat_bastard.jpg":{"picture_width":249,"picture_height":140},"hansenGiles.jpg":{"picture_width":187,"picture_height":140},"maggie.jpg":{"picture_width":187,"picture_height":140},"maggie_sun.jpg":{"picture_width":169,"picture_height":140},"minnekhada.jpg":{"picture_width":187,"picture_height":140},"pink_flower.jpg":{"picture_width":187,"picture_height":140},"snow_cave.jpg":{"picture_width":187,"picture_height":140},"st_marks.jpg":{"picture_width":249,"picture_height":140},"the_lions.jpg":{"picture_width":249,"picture_height":140},"this_little_piggy.jpg":{"picture_width":187,"picture_height":140},"tiger.jpg":{"picture_width":187,"picture_height":140},"two_trees.jpg":{"picture_width":187,"picture_height":140},"wheres_bugs.jpg":{"picture_width":186,"picture_height":140},"white_flower.jpg":{"picture_width":187,"picture_height":140}}} 
                                   module.exports = all_tile_tile_image_widths 

/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (post_fix) {

  var SERVER_WIDTH_ID = void 0,
      SERVER_KEY_ID = void 0,
      TILE_HOVER_TEXT_PF = void 0,
      TEXT_UP = void 0,
      TILE_IMAGE_PF = void 0,
      TILE_CONTAINER_PF = void 0,
      TILE_NORMAL_TEXT_PF = void 0,
      HOVER_TEXT_POSTFIX = void 0,
      NORMAL_TEXT_POSTFIX = void 0,
      IMAGE_POSTFIX = void 0,
      IMAGE_ID = void 0;

  if (true) {
    SERVER_WIDTH_ID = "server_width_";
    SERVER_KEY_ID = "server_key_";
    TILE_HOVER_TEXT_PF = "tile-hover-text--";
    TILE_IMAGE_PF = 'tile-image--';
    TILE_CONTAINER_PF = 'tile-container--';
    TILE_NORMAL_TEXT_PF = "tile-normal-text--";
    HOVER_TEXT_POSTFIX = '--hover-text';
    IMAGE_POSTFIX = '--image';
    IMAGE_ID = 'image-id';
    NORMAL_TEXT_POSTFIX = '--normal-text';
  } else {
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
    SERVER_WIDTH_ID: SERVER_WIDTH_ID, SERVER_KEY_ID: SERVER_KEY_ID, TILE_HOVER_TEXT_PF: TILE_HOVER_TEXT_PF, TEXT_UP: TEXT_UP, TILE_IMAGE_PF: TILE_IMAGE_PF, TILE_CONTAINER_PF: TILE_CONTAINER_PF,
    TILE_NORMAL_TEXT_PF: TILE_NORMAL_TEXT_PF, HOVER_TEXT_POSTFIX: HOVER_TEXT_POSTFIX, NORMAL_TEXT_POSTFIX: NORMAL_TEXT_POSTFIX, IMAGE_POSTFIX: IMAGE_POSTFIX, IMAGE_ID: IMAGE_ID,
    serverWidthId: serverWidthId
  };
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(23),
    getRawTag = __webpack_require__(56),
    objectToString = __webpack_require__(57);

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
/* 10 */
/***/ (function(module, exports) {

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
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
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

var validateFormat = function validateFormat(format) {};

if (true) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(14);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (true) {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var invariant = __webpack_require__(19);

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
    var gradient_postfix = void 0;
    if (text_location in angle_directions) {
      gradient_postfix = text_location + container_id;
    } else {
      gradient_postfix = MIDDLE + container_id;
    }
    return gradient_postfix;
  }

  function buildGradient(linear_gradient, area_type) {
    var background_style = void 0;
    if (linear_gradient.clear_percent) {
      var gradient_angle = _gradientAngle(area_type);
      !(gradient_angle !== '') ?  true ? invariant(false, "If HOVER/NORMAL_linear_gradient has a 'clear_percent' then tile must also have a matching 'HOVER_area/NORMAL_area' ") : invariant(false) : void 0;
      !(typeof linear_gradient.gradient_rgba === 'string') ?  true ? invariant(false, "If HOVER/NORMAL_linear_gradient has a 'clear_percent' then the 'clear_percent' must also have an accompanying 'gradient_rgba' ") : invariant(false) : void 0;
      !(linear_gradient.gradient_rgba !== '') ?  true ? invariant(false, "gradient_rgba should look like 'rgba(255, 255, 255, 0.9)' ") : invariant(false) : void 0;
      var gradient_percent = linear_gradient.clear_percent;
      var gradient_rgba = linear_gradient.gradient_rgba;
      var rgb_start_from_zero = _rgbaStartFromZero(gradient_rgba);
      background_style = ' linear-gradient(' + gradient_angle + ', ' + rgb_start_from_zero + ', ' + rgb_start_from_zero + ' ' + gradient_percent + '%, ' + gradient_rgba + ' ) ';
      return { background: background_style };
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
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
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var shallowEqual = __webpack_require__(41);

module.exports = {
  shouldComponentUpdate: function(nextProps, nextState) {
    return (
      !shallowEqual(this.props, nextProps) ||
      !shallowEqual(this.state, nextState)
    );
  }
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

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

module.exports = { _windowWidth: _windowWidth, _getComputedWidth: _getComputedWidth };

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var baseRandom = __webpack_require__(46);

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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(24);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(25);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(26)))

/***/ }),
/* 26 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 27 */
/***/ (function(module, exports) {

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
/* 28 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

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
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PictureTile = __webpack_require__(39);

var _PictureTile2 = _interopRequireDefault(_PictureTile);

var _GradientLocations = __webpack_require__(18);

var _GradientLocations2 = _interopRequireDefault(_GradientLocations);

var _ScreenSizeToGrid = __webpack_require__(42);

var _ScreenSizeToGrid2 = _interopRequireDefault(_ScreenSizeToGrid);

var _miscFuncs = __webpack_require__(21);

var _miscFuncs2 = _interopRequireDefault(_miscFuncs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PureRenderMixin = __webpack_require__(20);

var lodash_shuffle = __webpack_require__(43);
var invariant = __webpack_require__(19);

var IS_NODE = __webpack_require__(72);
var IS_BROWSER = !IS_NODE;

var ReactHoverGrid = function (_React$Component) {
  _inherits(ReactHoverGrid, _React$Component);

  _createClass(ReactHoverGrid, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (IS_BROWSER && this.props.resize_nested_component) {
        window.addEventListener('resize', this.props.resize_pub_sub.publishWidthChange);
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
    key: '_serverRenderCheck',
    value: function _serverRenderCheck() {
      if (this.props.server_render_ssr) {
        !(typeof this.props.server_screen_size !== 'undefined') ?  true ? invariant(false, 'ReactHoverGrid must have a server_screen_size property if server_render_ssr') : invariant(false) : void 0;
        !Array.isArray(this.props.server_screen_size) ?  true ? invariant(false, 'ReactHoverGrid, server_screen_size must be an array if server_render_ssr, it is a ' + _typeof(this.props.server_screen_size)) : invariant(false) : void 0;
        !(this.props.server_screen_size.length > 0) ?  true ? invariant(false, 'ReactHoverGrid must have an un-empty server_screen_size property if server_render_ssr') : invariant(false) : void 0;

        !(typeof this.props.server_grid_size !== 'undefined') ?  true ? invariant(false, 'ReactHoverGrid must have a server_grid_size property if server_render_ssr') : invariant(false) : void 0;
        !Array.isArray(this.props.server_grid_size) ?  true ? invariant(false, 'ReactHoverGrid, server_grid_size must be an array if server_render_ssr, it is a ' + _typeof(this.props.server_grid_size)) : invariant(false) : void 0;
        !(this.props.server_grid_size.length > 0) ?  true ? invariant(false, 'ReactHoverGrid must have an un-empty server_grid_size property if server_render_ssr') : invariant(false) : void 0;

        !(this.props.server_screen_size.length === this.props.server_grid_size.length) ?  true ? invariant(false, 'ReactHoverGrid server_grid_size and server_screen_size must be the same length') : invariant(false) : void 0;
        var window_to_grid_sizes = _ScreenSizeToGrid2.default.ScreenSizeToGrid(this.html_grid_id, this.props.server_screen_size, this.props.server_grid_size);
        return window_to_grid_sizes;
      } else {
        return false;
      }
    }
  }, {
    key: '_nestedComponentResizing',
    value: function _nestedComponentResizing() {
      if (this.props.resize_nested_component) {
        !(_typeof(this.props.resize_pub_sub) === 'object') ?  true ? invariant(false, 'ReactHoverGrid must have a resize_pub_sub property if resize_nested_component') : invariant(false) : void 0;
        !(typeof this.props.resize_pub_sub.subscribeToWidthChange === 'function') ?  true ? invariant(false, 'resize_pub_sub must have a subscribeToWidthChange method') : invariant(false) : void 0;
        !(typeof this.props.resize_pub_sub.publishWidthChange === 'function') ?  true ? invariant(false, 'resize_pub_sub must have a publishWidthChange method') : invariant(false) : void 0;
      }
    }
  }, {
    key: '_bindMethods',
    value: function _bindMethods() {
      this._onBrowserResize = this._onBrowserResize.bind(this);
      this.onContainerResize = this.onContainerResize.bind(this);
      this.setHoverFunction = this.setHoverFunction.bind(this);
      this.getHover = this.getHover.bind(this);
    }
  }, {
    key: '_ssrOneCharId',
    value: function _ssrOneCharId(hover_grid_id) {
      !hover_grid_id.endsWith('_grid_id') ?  true ? invariant(false, "ReactHoverGrid, constructor this.html_grid_id must end with '_grid_id' ") : invariant(false) : void 0;
      if (this.props.server_render_ssr) {
        if (this.props.ssr_grid_id) {
          hover_grid_id = this.props.ssr_grid_id; // N.B. 's_grid_id' will be called 's' instead to save thousands of bytes on SSR hover grid
        }
      }
      return hover_grid_id;
    }
  }], [{
    key: 'windowWidth',
    value: function windowWidth() {
      return _miscFuncs2.default._windowWidth();
    }
  }, {
    key: 'getComputedWidth',
    value: function getComputedWidth(grid_id) {
      !(typeof grid_id === 'string') ?  true ? invariant(false, 'getComputedWidth, grid_id must be a string, is a ' + (typeof grid_id === 'undefined' ? 'undefined' : _typeof(grid_id))) : invariant(false) : void 0;
      !(grid_id.length > 0) ?  true ? invariant(false, 'getComputedWidth, grid_ must have at least one character, is length of ' + grid_id.length) : invariant(false) : void 0;
      !!/\s/g.test(grid_id) ?  true ? invariant(false, 'getComputedWidth, grid_ must have no spaces, is "' + grid_id + '" ') : invariant(false) : void 0;
      return _miscFuncs2.default._getComputedWidth(grid_id);
    }
  }]);

  function ReactHoverGrid(props) {
    _classCallCheck(this, ReactHoverGrid);

    var _this = _possibleConstructorReturn(this, (ReactHoverGrid.__proto__ || Object.getPrototypeOf(ReactHoverGrid)).call(this, props));

    !(_this.props.pictureTile_list.length > 0) ?  true ? invariant(false, 'ReactHoverGrid, constructor pictureTile_list must have at least 1 element') : invariant(false) : void 0;
    _this.html_grid_id = _this._ssrOneCharId(_this.props.hover_grid_id);
    _this.class_id_names = __webpack_require__(8)(_this.html_grid_id);
    console.assert(_typeof(_this.class_id_names) === 'object', 'ReactHoverGrid, class_id_name error');
    _this._bindMethods();
    _this.is_hovering = false;
    _this.change_div_to_percent = false;
    _this.window_to_grid_sizes = _this._serverRenderCheck();
    _this._nestedComponentResizing();
    _this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(_this);

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
    key: '_initialShuffle',
    value: function _initialShuffle(not_static_tiles) {
      if (this.props.shuffle_seconds && !this.props.server_render_ssr) {
        not_static_tiles = lodash_shuffle(not_static_tiles);
      }
      return not_static_tiles;
    }
  }, {
    key: '_removeStatics',
    value: function _removeStatics() {
      var not_static_tiles = [];
      var static_tile = false;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.props.pictureTile_list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var tile_data = _step.value;

          if (typeof tile_data['static_col'] !== 'undefined' && typeof tile_data['static_row'] !== 'undefined') {
            static_tile = tile_data;
          } else {
            not_static_tiles.push(tile_data);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return {
        not_static_tiles: not_static_tiles,
        static_tile: static_tile
      };
    }
  }, {
    key: '_shuffleTiles',
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
    key: '_turnOnShuffling',
    value: function _turnOnShuffling() {
      if (this.props.shuffle_seconds) {
        var milliseconds = this.props.shuffle_seconds * 1000;
        this._shuffleTiles = this._shuffleTiles.bind(this);
        setInterval(this._shuffleTiles, milliseconds);
      }
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (IS_BROWSER && !this.props.resize_nested_component) {
        this._onBrowserResize();
        window.addEventListener('resize', this._onBrowserResize);
      }
    }
  }, {
    key: '_onBrowserResize',
    value: function _onBrowserResize() {
      var container_elem = document.getElementById(this.html_grid_id);
      console.assert((typeof container_elem === 'undefined' ? 'undefined' : _typeof(container_elem)) === 'object', '_onBrowserResize, container_elem not an object');
      var width_container_start = container_elem.clientWidth;
      var window_width = _miscFuncs2.default._windowWidth();
      this._captureContainerSizes(window_width, width_container_start);
      var computed_tiles = this._figureTileRows(width_container_start);
      console.assert((typeof computed_tiles === 'undefined' ? 'undefined' : _typeof(computed_tiles)) === 'object', '_onBrowserResize, computed_tiles not an object');
      console.assert(Object.keys(computed_tiles).length > 0, '_onBrowserResize, computed_tiles must have at least 1 tile');
      this.setState({
        computed_tiles: computed_tiles
      });
      console.assert(width_container_start === container_elem.clientWidth, '_onBrowserResize, width_container_start === container_elem.clientWidth');
    }
  }, {
    key: '_showSsrContainerSizes',
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
        var screen_size_text = 'server_screen_size: [' + screen_sizes.join(', ') + '],';
        var grid_size_text = 'server_grid_size: [' + grid_sizes.join(', ') + '],';
        console.log('*****************************************************************');
        console.log('For', this.html_grid_id, ':');
        console.log(screen_size_text);
        console.log(grid_size_text);
        console.log('*****************************************************************');
      } else {
        console.log('screen-size = ', window_width, ', hover-grid-size =', width_container_start, ', missing screen-sizes', this.not_done_sizes);
      }
    }
  }, {
    key: '_captureContainerSizes',
    value: function _captureContainerSizes(window_width, width_container_start) {
      // N.B. for building up server side render information
      if (true) {
        if (typeof this.props.server_screen_size !== 'undefined') {
          if (typeof this.props.server_grid_size !== 'undefined') {
            if (typeof this.props.show_server_grid_sizes !== 'undefined') {
              if (typeof this.hover_tiles_grid_sizes === 'undefined') {
                this.hover_tiles_grid_sizes = {};
                this.not_done_sizes = {};
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                  for (var _iterator2 = this.props.server_screen_size[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var screen_size = _step2.value;

                    this.not_done_sizes[screen_size] = screen_size;
                  }
                } catch (err) {
                  _didIteratorError2 = true;
                  _iteratorError2 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                      _iterator2.return();
                    }
                  } finally {
                    if (_didIteratorError2) {
                      throw _iteratorError2;
                    }
                  }
                }
              }
              this._showSsrContainerSizes(window_width, width_container_start);
            }
          }
        }
      }
    }
  }, {
    key: '_calculateCutOff',
    value: function _calculateCutOff(current_row_width, extra_width, row_of_tiles) {
      console.assert(typeof current_row_width === 'number', '_calculateCutOff, current_row_width not a number');
      console.assert(current_row_width >= 0, '_calculateCutOff, current_row_width not positive');
      console.assert(typeof extra_width === 'number', '_calculateCutOff, extra_width not a number');
      console.assert(extra_width >= 0, '_calculateCutOff, extra_width not positive');
      console.assert(Array.isArray(row_of_tiles), '_calculateCutOff, row_of_tiles is not an array');
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
    key: '_buildTileRow',
    value: function _buildTileRow(image_tiles, width_of_container, current_row) {
      console.assert((typeof image_tiles === 'undefined' ? 'undefined' : _typeof(image_tiles)) === 'object', '_buildTileRow, image_tiles not an object');
      console.assert(Object.keys(image_tiles).length > 0, '_buildTileRow, image_tiles must have at least 1 tile');

      var row = [];
      var current_row_width = 0;
      var column_count = 0;
      var image_tile = void 0;
      var image_margin = 2 * this.props.tile_edge;
      while (image_tiles.length > 0 && current_row_width < width_of_container) {
        column_count++;
        if (this.state.static_tile && column_count === this.state.static_tile['static_col'] && current_row === this.state.static_tile['static_row']) {
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
    key: 'onContainerResize',
    value: function onContainerResize(my_width) {
      !(typeof my_width === 'number') ?  true ? invariant(false, 'onContainerResize, my_width must be a number is ' + my_width + ' ' + this.html_grid_id) : invariant(false) : void 0;
      !(my_width >= 0) ?  true ? invariant(false, 'onContainerResize, my_width must be positive is ' + my_width) : invariant(false) : void 0;
      this.last_container_width = my_width;
      var computed_tiles = this._figureTileRows(my_width);
      console.assert((typeof computed_tiles === 'undefined' ? 'undefined' : _typeof(computed_tiles)) === 'object', 'onContainerResize, computed_tiles not an object');
      console.assert(Object.keys(computed_tiles).length > 0, 'onContainerResize, computed_tiles must have at least 1 tile');
      this.setState({
        computed_tiles: computed_tiles
      });
    }
  }, {
    key: '_figureTileRows',
    value: function _figureTileRows(width_of_container) {
      console.assert(typeof width_of_container === 'number', '_figureTileRows, width_of_container must be a number');
      console.assert(width_of_container >= 0, '_figureTileRows, width_of_container must be positive');

      if (!this.state.list_of_tiles || width_of_container === 0) {
        return [];
      }
      var edgeless_width = width_of_container - 2 * this.props.tile_edge;
      if (edgeless_width < 1) {
        edgeless_width = 1;
      }
      var list_of_tiles = [];
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this.state.list_of_tiles[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var picture_object = _step3.value;

          var picture_copy = Object.assign({}, picture_object);
          list_of_tiles.push(picture_copy);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
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
    key: '_generateCss',
    value: function _generateCss() {
      this.injected_css_styles = this._injectedCssStyles();
      console.assert(this.injected_css_styles.length > 0, '_generateCss, injected_css_styles is emtpy');
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
    key: 'setHoverFunction',
    value: function setHoverFunction(is_hovering) {
      this.is_hovering = is_hovering;
    }
  }, {
    key: 'getHover',
    value: function getHover() {
      return this.is_hovering;
    }
  }, {
    key: '_tileViewCss',
    value: function _tileViewCss() {
      var hover_grid_row_height = this.props.hover_grid_row_height + 'px';
      var TILE_IMAGE_class = this.class_id_names['TILE_IMAGE_PF'];
      var tile_image = ' .' + TILE_IMAGE_class + '{overflow:hidden' + (';height:' + hover_grid_row_height + '} ');
      return tile_image;
    }
  }, {
    key: '_defaultTileHoverCss',
    value: function _defaultTileHoverCss() {
      var hover_class = this.class_id_names['TILE_HOVER_TEXT_PF'];
      var tile_hover_text = ' .' + hover_class + '{pointer-events:none' + ';opacity:1' + ';position:absolute' + ';height:100%' + ';width:100%} ';
      return tile_hover_text;
    }
  }, {
    key: '_tileContainerCss',
    value: function _tileContainerCss() {
      var tile_cont_class = this.class_id_names['TILE_CONTAINER_PF'];
      var tile_edge = this.props.tile_edge + 'px';
      var tile_cont = ' .' + tile_cont_class + '{margin:' + tile_edge + ';position:relative' + ';float:left' + ';cursor:pointer' + ';padding:0' + ';overflow:hidden} ';
      return tile_cont;
    }
  }, {
    key: '_locationCss',
    value: function _locationCss() {
      var hor_text_edge_px = this.props.hor_text_edge + 'px';
      var ver_text_edge_px = this.props.ver_text_edge + 'px';
      var hover_grid_row_height_px = this.props.hover_grid_row_height + 'px';
      var tile_class = this.class_id_names['TILE_NORMAL_TEXT_PF'];
      var tile_parent = ' .' + tile_class + '{display:table' + ';width:100%' + (';height:' + hover_grid_row_height_px + ' }');

      var middle = ' .middle' + this.html_grid_id + '{display:table-cell' + ';vertical-align:middle' + ';text-align:center} ';

      var name_north_west = _GradientLocations2.default.NORTH_WEST + this.html_grid_id;
      var north_west = ' .' + name_north_west + '{display:table-cell' + ';vertical-align:top' + (';padding:' + ver_text_edge_px + ' 0 0 ' + hor_text_edge_px) + ';text-align:left} ';

      var name_north = _GradientLocations2.default.NORTH + this.html_grid_id;
      var north = ' .' + name_north + '{display:table-cell' + ';vertical-align:top' + (';padding:' + ver_text_edge_px + ' 0 0') + ';text-align:center} ';

      var name_north_east = _GradientLocations2.default.NORTH_EAST + this.html_grid_id;
      var north_east = ' .' + name_north_east + '{display:table-cell' + (';padding:' + ver_text_edge_px + ' ' + hor_text_edge_px + ' 0') + ';vertical-align:top' + ';text-align:right} ';

      var name_east = _GradientLocations2.default.EAST + this.html_grid_id;
      var east = ' .' + name_east + '{display:table-cell' + (';padding:0 ' + hor_text_edge_px + ' 0') + ';vertical-align:middle' + ';text-align:right} ';

      var name_south_east = _GradientLocations2.default.SOUTH_EAST + this.html_grid_id;
      var south_east = ' .' + name_south_east + '{display:table-cell' + (';padding:0 ' + hor_text_edge_px + ' ' + ver_text_edge_px) + ';vertical-align:bottom' + ';text-align:right} ';

      var name_south = _GradientLocations2.default.SOUTH + this.html_grid_id;
      var south = ' .' + name_south + '{display:table-cell' + (';padding:0 0 ' + ver_text_edge_px) + ';vertical-align:bottom' + ';text-align:center} ';

      var name_south_west = _GradientLocations2.default.SOUTH_WEST + this.html_grid_id;
      var south_west = ' .' + name_south_west + '{display:table-cell' + (';padding:0 0 ' + ver_text_edge_px + ' ' + hor_text_edge_px) + ';vertical-align:bottom' + ';text-align:left} ';

      var name_west = _GradientLocations2.default.WEST + this.html_grid_id;
      var west = ' .' + name_west + '{display:table-cell' + (';padding:0 0 0 ' + hor_text_edge_px) + ';vertical-align:middle' + ';text-align:left} ';
      var location_css = tile_parent + north_west + north + north_east + west + middle + east + south_west + south + south_east;
      return location_css;
    }
  }, {
    key: '_injectedCssStyles',
    value: function _injectedCssStyles() {
      var location_css = this._locationCss();
      var tile_container_css = this._tileContainerCss();
      var default_TILE_HOVER_TEXT_css = this._defaultTileHoverCss();
      var TILE_IMAGE_port_css = this._tileViewCss();
      var injected_css_styles = location_css + tile_container_css + default_TILE_HOVER_TEXT_css + TILE_IMAGE_port_css;
      return injected_css_styles;
    }
  }, {
    key: '_cascadeGridToEmptyTile',
    value: function _cascadeGridToEmptyTile(current_tile, grid_to_tile_name) {
      console.assert((typeof current_tile === 'undefined' ? 'undefined' : _typeof(current_tile)) === 'object', '_cascadeGridToEmptyTile, current_tile not an object');
      console.assert(typeof grid_to_tile_name === 'string', '_cascadeGridToEmptyTile, grid_to_tile_name not an string');
      if (!current_tile[grid_to_tile_name]) {
        if (this.props[grid_to_tile_name]) {
          current_tile[grid_to_tile_name] = this.props[grid_to_tile_name];
        }
      }
      return current_tile;
    }
  }, {
    key: '_cascadeStyles',
    value: function _cascadeStyles(current_tile) {
      // cascade to PictureTile
      console.assert((typeof current_tile === 'undefined' ? 'undefined' : _typeof(current_tile)) === 'object', '_cascadeStyles, current_tile not an object');
      var cascade_properties = ['normal_area', 'hover_area', 'normal_style', 'hover_style', 'normal_title_style', 'normal_info_style', 'hover_title_style', 'hover_info_style', 'hover_gradient', 'normal_gradient', 'hover_linear_gradient', 'normal_linear_gradient', 'filter_normal', 'filter_hover'];
      var that = this;
      cascade_properties.forEach(function (cascade_element) {
        current_tile = that._cascadeGridToEmptyTile(current_tile, cascade_element);
      });
      if (current_tile['normal_style'] && !current_tile['hover_style']) {
        current_tile['hover_style'] = current_tile['normal_style'];
      }
      return current_tile;
    }
  }, {
    key: '_renderServerMultiples',
    value: function _renderServerMultiples(google_font_links) {
      var all_server_widths = [];
      for (var browser_width in this.state.pictures_tiles_rows_server) {
        var adjusted_pictures = this.state.pictures_tiles_rows_server[browser_width];
        var picture_list = this._cssInjectedPictures(adjusted_pictures);
        var id_name = this.class_id_names.serverWidthId(browser_width, this.html_grid_id);
        var px_width_browser = this.state.pictures_container_width[browser_width] + 'px';
        var styles_of_tile = { width: px_width_browser };
        all_server_widths.push(_react2.default.createElement(
          'div',
          { id: id_name, key: browser_width, style: styles_of_tile },
          picture_list
        ));
      }
      var edge_styles = { paddingLeft: this.props.tile_edge, paddingRight: this.props.tile_edge };
      var media_hide_grids = this.window_to_grid_sizes.showMatchingSizedGridCss();
      var multiple_widths = _react2.default.createElement(
        'div',
        { style: edge_styles },
        _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: this.props.inject_css_rules } }),
        _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: google_font_links } }),
        _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: media_hide_grids } }),
        _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: this.injected_css_styles } }),
        all_server_widths
      );
      return multiple_widths;
    }
  }, {
    key: '_renderBrowserExact',
    value: function _renderBrowserExact(google_font_links) {
      var adjusted_pictures = this.state.computed_tiles;
      var picture_list = this._cssInjectedPictures(adjusted_pictures);
      var border_adjust = { paddingLeft: this.props.tile_edge, paddingRight: this.props.tile_edge };
      return _react2.default.createElement(
        'div',
        { style: border_adjust },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: this.props.inject_css_rules } }),
          _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: google_font_links } }),
          _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: this.injected_css_styles } }),
          picture_list
        )
      );
    }
  }, {
    key: '_cssInjectedPictures',
    value: function _cssInjectedPictures(adjusted_pictures) {
      var _this2 = this;

      console.assert((typeof adjusted_pictures === 'undefined' ? 'undefined' : _typeof(adjusted_pictures)) === 'object', '_cssInjectedPictures, adjusted_pictures not an object');
      var picture_list = adjusted_pictures.map(function (tile_before_css, tile_index) {
        var current_tile = _this2._cascadeStyles(tile_before_css);
        console.assert((typeof current_tile === 'undefined' ? 'undefined' : _typeof(current_tile)) === 'object', '_cssInjectedPictures, current_tile not an object');
        var picture_container_id = _this2.html_grid_id + tile_index;

        var is_static_tile = false;
        if (current_tile['static_col'] && current_tile['static_row']) {
          is_static_tile = true;
        }

        return _react2.default.createElement(_PictureTile2.default, {
          key: tile_index,

          picture_src: current_tile.picture_src,

          normal_area: current_tile.normal_area // cascade to PictureTile
          , hover_area: current_tile.hover_area // cascade to PictureTile
          , normal_style: current_tile.normal_style // cascade to PictureTile
          , hover_style: current_tile.hover_style // cascade to PictureTile

          , hover_gradient: current_tile.hover_gradient // cascade to PictureTile
          , normal_gradient: current_tile.normal_gradient // cascade to PictureTile
          , hover_linear_gradient: current_tile.hover_linear_gradient // cascade to PictureTile
          , normal_linear_gradient: current_tile.normal_linear_gradient // cascade to PictureTile

          , normal_title_style: current_tile.normal_title_style // cascade to PictureTile
          , normal_info_style: current_tile.normal_info_style // cascade to PictureTile
          , hover_title_style: current_tile.hover_title_style // cascade to PictureTile
          , hover_info_style: current_tile.hover_info_style // cascade to PictureTile

          , filter_normal: current_tile.filter_normal // cascade to PictureTile
          , filter_hover: current_tile.filter_hover // cascade to PictureTile

          , link_url: current_tile.link_url,

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
    key: '_googleLinks',
    value: function _googleLinks() {
      var google_font_links = '';
      if (this.props.google_font_link) {
        if (_typeof(this.props.google_font_link) === 'object') {
          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = this.props.google_font_link[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var a_google_font = _step4.value;

              google_font_links += '<link href="' + a_google_font + '" rel="stylesheet" />';
            }
          } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion4 && _iterator4.return) {
                _iterator4.return();
              }
            } finally {
              if (_didIteratorError4) {
                throw _iteratorError4;
              }
            }
          }
        } else {
          google_font_links = '<link href="' + this.props.google_font_link + '" rel="stylesheet" />';
        }
      }
      return google_font_links;
    }
  }, {
    key: 'render',
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
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.props.onResize) {
        this.props.onResize();
      }
    }
  }]);

  return ReactHoverGrid;
}(_react2.default.Component);

ReactHoverGrid.STRING_OR_ARRAY = [_react2.default.PropTypes.string, _react2.default.PropTypes.array];


ReactHoverGrid.displayName = 'ReactHoverGrid';

ReactHoverGrid.propTypes = {
  hover_grid_id: _propTypes2.default.string.isRequired,
  ssr_grid_id: _propTypes2.default.string,
  hover_grid_row_height: _propTypes2.default.number.isRequired,
  pictureTile_list: _propTypes2.default.arrayOf(_PictureTile2.default.BASE_TILE_SHAPE).isRequired,

  normal_title_style: _propTypes2.default.oneOfType(_PictureTile2.default.STRING_OR_OBJECT_CSS) // cascade to PictureTile
  , normal_info_style: _propTypes2.default.oneOfType(_PictureTile2.default.STRING_OR_OBJECT_CSS) // cascade to PictureTile
  , hover_title_style: _propTypes2.default.oneOfType(_PictureTile2.default.STRING_OR_OBJECT_CSS) // cascade to PictureTile
  , hover_info_style: _propTypes2.default.oneOfType(_PictureTile2.default.STRING_OR_OBJECT_CSS) // cascade to PictureTile

  , hover_gradient: _propTypes2.default.string // cascade to PictureTile
  , normal_gradient: _propTypes2.default.string // cascade to PictureTile

  , hover_linear_gradient: _PictureTile2.default.LINEAR_GRADIENT // cascade to PictureTile
  , normal_linear_gradient: _PictureTile2.default.LINEAR_GRADIENT // cascade to PictureTile

  , filter_normal: _propTypes2.default.string // cascade to PictureTile
  , filter_hover: _propTypes2.default.string // cascade to PictureTile
  , normal_area: _PictureTile2.default.AREA_PROP_TYPE // cascade to PictureTile
  , hover_area: _PictureTile2.default.AREA_PROP_TYPE // cascade to PictureTile
  , normal_style: _propTypes2.default.oneOfType(_PictureTile2.default.STRING_OR_OBJECT_CSS) // cascade to PictureTile
  , hover_style: _propTypes2.default.oneOfType(_PictureTile2.default.STRING_OR_OBJECT_CSS) // cascade to PictureTile

  , hor_text_edge: _propTypes2.default.number,
  ver_text_edge: _propTypes2.default.number,
  tile_edge: _propTypes2.default.number,

  shuffle_seconds: _propTypes2.default.number,
  google_font_link: _propTypes2.default.oneOfType(ReactHoverGrid.STRING_OR_ARRAY),

  inject_css_rules: _propTypes2.default.string,
  max_rows: _propTypes2.default.number,

  resize_nested_component: _propTypes2.default.bool,
  resize_pub_sub: _propTypes2.default.object,

  server_render_ssr: _propTypes2.default.bool,
  init_shuffle_ssr: _propTypes2.default.bool,

  static_col: _propTypes2.default.number // N.B. can only use if all images are the same size !
  , static_row: _propTypes2.default.number // static_col and static_row are from one, and only one, PictureTile
  , onResize: _propTypes2.default.func

  // Below 3 properties are for matching screen sizes to grid sizes for server side rendering.
  // .env file must be set to "NODE_ENV=development"

  , show_server_grid_sizes: _propTypes2.default.bool // Find ssr grid sizes for screen sizes?
  , server_screen_size: _propTypes2.default.array // Screen sizes to find grid sizes for when generate ssr grid
  , server_grid_size: _propTypes2.default.array // Store grid to screen sizes here to console.log out


};

ReactHoverGrid.defaultProps = {
  hor_text_edge: 4,
  ver_text_edge: 2,
  tile_edge: 3,
  server_render_ssr: false,
  init_shuffle_ssr: false,
  resize_nested_component: false
};

exports.default = ReactHoverGrid;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(14);
var invariant = __webpack_require__(15);
var warning = __webpack_require__(16);
var assign = __webpack_require__(37);

var ReactPropTypesSecret = __webpack_require__(17);
var checkPropTypes = __webpack_require__(38);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  var invariant = __webpack_require__(15);
  var warning = __webpack_require__(16);
  var ReactPropTypesSecret = __webpack_require__(17);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _GradientLocations = __webpack_require__(18);

var _GradientLocations2 = _interopRequireDefault(_GradientLocations);

var _StyleOrJsx = __webpack_require__(40);

var _StyleOrJsx2 = _interopRequireDefault(_StyleOrJsx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PureRenderMixin = __webpack_require__(20); //  https://zhenyong.github.io/react/docs/pure-render-mixin.html

var IMAGES_DIR = 'hover-grid-images';
var ORIGINAL_IMAGES = '';
var TILE_SIZED_IMAGES = 'tile_sized';

var PictureTile = function (_Component) {
  _inherits(PictureTile, _Component);

  _createClass(PictureTile, [{
    key: '_imageDivStyles',
    value: function _imageDivStyles() {
      var TILE_IMAGE_class = this.class_id_names['TILE_IMAGE_PF'];
      var container_styles = new _StyleOrJsx2.default(TILE_IMAGE_class);
      container_styles.addStyling({ backgroundPosition: this.props.rgh_left_picture_margin });
      var image_className = this.props.picture_src.replace('.', '-');
      container_styles.addStyling(image_className);
      container_styles.addStyling({ width: this.props.rgh_adjusted_tile_width });
      var normal_classNames = container_styles.collectedClassNames();
      var normal_jsx_styles = container_styles.collectedJsx();
      return { normal_classNames: normal_classNames, normal_jsx_styles: normal_jsx_styles };
    }
  }, {
    key: '_hoverDivStyles',
    value: function _hoverDivStyles() {
      var TILE_HOVER_TEXT_class = this.class_id_names['TILE_HOVER_TEXT_PF'];
      var container_styles = new _StyleOrJsx2.default(TILE_HOVER_TEXT_class);
      container_styles.addStyling(this.props.hover_style);
      var hover_classNames = container_styles.collectedClassNames();
      var hover_jsx_styles = container_styles.collectedJsx();
      return { hover_classNames: hover_classNames, hover_jsx_styles: hover_jsx_styles };
    }
  }, {
    key: '_hoverGradientStyles',
    value: function _hoverGradientStyles() {
      var gradient_jsx = '';
      if (typeof this.props.hover_linear_gradient !== 'undefined') {
        gradient_jsx = _GradientLocations2.default.buildGradient(this.props.hover_linear_gradient, this.props.hover_area);
      } else if (typeof this.props.hover_gradient !== 'undefined') {
        gradient_jsx = { background: this.props.hover_gradient };
      }
      var tile_class = this.class_id_names['TILE_NORMAL_TEXT_PF'];
      var gradient_styles = new _StyleOrJsx2.default(tile_class, gradient_jsx);
      var gradient_classNames = gradient_styles.collectedClassNames();
      var gradient_jsx_styles = gradient_styles.collectedJsx();
      return { gradient_classNames: gradient_classNames, gradient_jsx_styles: gradient_jsx_styles };
    }
  }, {
    key: '_hoverText',
    value: function _hoverText(hover_show_id) {
      var _hoverDivStyles2 = this._hoverDivStyles(),
          hover_classNames = _hoverDivStyles2.hover_classNames,
          hover_jsx_styles = _hoverDivStyles2.hover_jsx_styles;

      var _hoverGradientStyles2 = this._hoverGradientStyles(),
          gradient_classNames = _hoverGradientStyles2.gradient_classNames,
          gradient_jsx_styles = _hoverGradientStyles2.gradient_jsx_styles;

      var location_style = _GradientLocations2.default.directionClass(this.props.hover_area, this.css_grid_id);

      var _hoverTitleStyles2 = this._hoverTitleStyles(),
          title_classNames = _hoverTitleStyles2.title_classNames,
          title_jsx_styles = _hoverTitleStyles2.title_jsx_styles;

      var _hoverInfoStyles2 = this._hoverInfoStyles(),
          info_classNames = _hoverInfoStyles2.info_classNames,
          info_jsx_styles = _hoverInfoStyles2.info_jsx_styles;

      return _react2.default.createElement(
        'div',
        { className: hover_classNames, style: hover_jsx_styles, id: hover_show_id },
        _react2.default.createElement(
          'div',
          { className: gradient_classNames, style: gradient_jsx_styles },
          _react2.default.createElement(
            'div',
            { className: location_style },
            _react2.default.createElement(
              'div',
              { className: title_classNames, style: title_jsx_styles },
              this.props.hover_title
            ),
            _react2.default.createElement(
              'div',
              { className: info_classNames, style: info_jsx_styles },
              this.props.hover_info
            )
          )
        )
      );
    }
  }, {
    key: '_normalDivStyles',
    value: function _normalDivStyles() {
      var normal_css = { marginTop: '0px', position: 'absolute' };
      var tile_class = this.class_id_names['TILE_NORMAL_TEXT_PF'];
      var view_styles = new _StyleOrJsx2.default(tile_class, normal_css);
      view_styles.addStyling(this.props.normal_style);
      var view_classNames = view_styles.collectedClassNames();
      var view_jsx_styles = view_styles.collectedJsx();
      return { view_classNames: view_classNames, view_jsx_styles: view_jsx_styles };
    }
  }, {
    key: '_normalGradientStyles',
    value: function _normalGradientStyles() {
      var gradient_jsx = '';
      if (typeof this.props.normal_linear_gradient !== 'undefined') {
        gradient_jsx = _GradientLocations2.default.buildGradient(this.props.normal_linear_gradient, this.props.normal_area);
      } else if (typeof this.props.normal_gradient !== 'undefined') {
        gradient_jsx = { background: this.props.normal_gradient };
      }
      var tile_class = this.class_id_names['TILE_NORMAL_TEXT_PF'];
      var gradient_styles = new _StyleOrJsx2.default(tile_class, gradient_jsx);
      var gradient_classNames = gradient_styles.collectedClassNames();
      var gradient_jsx_styles = gradient_styles.collectedJsx();
      return { gradient_classNames: gradient_classNames, gradient_jsx_styles: gradient_jsx_styles };
    }
  }, {
    key: '_plainText',
    value: function _plainText(normal_show_id) {
      var _normalDivStyles2 = this._normalDivStyles(),
          view_classNames = _normalDivStyles2.view_classNames,
          view_jsx_styles = _normalDivStyles2.view_jsx_styles;

      var _normalGradientStyles2 = this._normalGradientStyles(),
          gradient_classNames = _normalGradientStyles2.gradient_classNames,
          gradient_jsx_styles = _normalGradientStyles2.gradient_jsx_styles;

      var location_style = _GradientLocations2.default.directionClass(this.props.normal_area, this.css_grid_id);

      var _normalTitleStyles2 = this._normalTitleStyles(),
          title_classNames = _normalTitleStyles2.title_classNames,
          title_jsx_styles = _normalTitleStyles2.title_jsx_styles;

      var _normalInfoStyles2 = this._normalInfoStyles(),
          info_classNames = _normalInfoStyles2.info_classNames,
          info_jsx_styles = _normalInfoStyles2.info_jsx_styles;

      return _react2.default.createElement(
        'div',
        { className: view_classNames, style: view_jsx_styles, id: normal_show_id },
        _react2.default.createElement(
          'div',
          { className: gradient_classNames, style: gradient_jsx_styles },
          _react2.default.createElement(
            'div',
            { className: location_style },
            _react2.default.createElement(
              'div',
              { className: title_classNames, style: title_jsx_styles },
              this.props.normal_title
            ),
            _react2.default.createElement(
              'div',
              { className: info_classNames, style: info_jsx_styles },
              this.props.normal_info
            )
          )
        )
      );
    }
  }, {
    key: '_normalInfoStyles',
    value: function _normalInfoStyles() {
      var info_styles = new _StyleOrJsx2.default();
      info_styles.addStyling(this.props.normal_info_style);
      var info_classNames = info_styles.collectedClassNames();
      var info_jsx_styles = info_styles.collectedJsx();
      return { info_classNames: info_classNames, info_jsx_styles: info_jsx_styles };
    }
  }, {
    key: '_imageUrl',
    value: function _imageUrl() {
      var link_url = void 0;
      if (this.props.rgh_is_static_tile) {
        var do_nothing_link = 'javascript:void(0);';
        link_url = do_nothing_link; // N.B. static_tile is for menu, and don't let user see gray circle
      } else if (typeof this.props.link_url === 'undefined') {
        link_url = this._imageSource(ORIGINAL_IMAGES);
      } else {
        link_url = this.props.link_url;
      }
      return link_url;
    }
  }, {
    key: '_imageSource',
    value: function _imageSource(image_type) {
      var image_folder = this.props.rgh_hover_grid_id.replace('_id', '_images');
      var image_src = void 0;
      if (image_type === '') {
        image_src = IMAGES_DIR + '/' + image_folder + '/' + this.props.picture_src;
      } else {
        image_src = IMAGES_DIR + '/' + image_folder + '/' + image_type + '/' + this.props.picture_src;
      }
      return image_src;
    }
  }]);

  function PictureTile(props) {
    _classCallCheck(this, PictureTile);

    var _this = _possibleConstructorReturn(this, (PictureTile.__proto__ || Object.getPrototypeOf(PictureTile)).call(this, props));

    if (_this.props.rgh_ssr_grid_id) {
      _this.css_grid_id = _this.props.rgh_ssr_grid_id; // N.B. use short version 's' of 's_grid_id' for css
    } else {
      _this.css_grid_id = _this.props.rgh_hover_grid_id; // N.B. use long version 'my_dogs_grid_id' for css
    }
    _this.class_id_names = __webpack_require__(8)(_this.css_grid_id);
    console.assert(_typeof(_this.class_id_names) === 'object', 'PictureTile, class_id_name error');
    _this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(_this);
    _this.state = {
      hover: false
    };
    return _this;
  }

  _createClass(PictureTile, [{
    key: '_hoverTitleStyles',
    value: function _hoverTitleStyles() {
      var title_styles = new _StyleOrJsx2.default();
      title_styles.addStyling(this.props.hover_title_style);
      var title_classNames = title_styles.collectedClassNames();
      var title_jsx_styles = title_styles.collectedJsx();
      return { title_classNames: title_classNames, title_jsx_styles: title_jsx_styles };
    }
  }, {
    key: '_hoverInfoStyles',
    value: function _hoverInfoStyles() {
      var info_styles = new _StyleOrJsx2.default();
      info_styles.addStyling(this.props.hover_info_style);
      var info_classNames = info_styles.collectedClassNames();
      var info_jsx_styles = info_styles.collectedJsx();
      return { info_classNames: info_classNames, info_jsx_styles: info_jsx_styles };
    }
  }, {
    key: '_normalTitleStyles',
    value: function _normalTitleStyles() {
      var title_styles = new _StyleOrJsx2.default();
      title_styles.addStyling(this.props.normal_title_style);
      var title_classNames = title_styles.collectedClassNames();
      var title_jsx_styles = title_styles.collectedJsx();
      return { title_classNames: title_classNames, title_jsx_styles: title_jsx_styles };
    }
  }, {
    key: '_normalImage',
    value: function _normalImage() {
      var image_id = this.class_id_names['IMAGE_ID'] + this.props.rgh_picture_container_id;
      var image_src = this._imageSource(TILE_SIZED_IMAGES);
      var image_styles = void 0;
      if (this.props.rgh_is_static_tile) {
        image_styles = new _StyleOrJsx2.default('', { width: this.props.rgh_picture_width });
      } else {
        image_styles = new _StyleOrJsx2.default('', { width: this.props.rgh_picture_width, cursor: 'pointer' });
      }
      image_styles.addStyling({ marginLeft: this.props.rgh_left_picture_margin });
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
    key: '_imageTile',
    value: function _imageTile() {
      var _imageDivStyles2 = this._imageDivStyles(),
          normal_classNames = _imageDivStyles2.normal_classNames,
          normal_jsx_styles = _imageDivStyles2.normal_jsx_styles;

      var _normalImage2 = this._normalImage(),
          image_id = _normalImage2.image_id,
          image_src = _normalImage2.image_src,
          image_classNames = _normalImage2.image_classNames,
          image_jsx_styles = _normalImage2.image_jsx_styles;

      var static_tile_id = '';
      if (this.props.rgh_is_static_tile) {
        static_tile_id = 'the_static_tile';
      }
      return _react2.default.createElement(
        'div',
        { className: normal_classNames, style: normal_jsx_styles, id: static_tile_id },
        _react2.default.createElement('img', { id: image_id, src: image_src, style: image_jsx_styles, className: image_classNames })
      );
    }
  }, {
    key: '_imageHover',
    value: function _imageHover(is_hovering) {
      this.props.rgh_setHoverFunction(is_hovering);
    }
  }, {
    key: '_showHideCss',
    value: function _showHideCss() {
      var rgh_picture_container_id = this.props.rgh_picture_container_id;
      var hover_show_id = rgh_picture_container_id + this.class_id_names['HOVER_TEXT_POSTFIX'];
      var before_show_id = rgh_picture_container_id + this.class_id_names['NORMAL_TEXT_POSTFIX'];
      var normal_show_id = rgh_picture_container_id + this.class_id_names['IMAGE_POSTFIX'];
      var my_styles = ' #' + rgh_picture_container_id + ':hover #' + hover_show_id + '{opacity:1}' + (' #' + rgh_picture_container_id + ' #' + hover_show_id + '{opacity:0}') + (' #' + rgh_picture_container_id + ':hover #' + before_show_id + '{opacity:0}') + (' #' + rgh_picture_container_id + ' #' + before_show_id + '{opacity:1}') + (' #' + rgh_picture_container_id + ':hover #' + normal_show_id + '{opacity:0}') + (' #' + rgh_picture_container_id + ' #' + normal_show_id + '{opacity:1} ');
      if (typeof this.props.filter_hover !== 'undefined') {
        my_styles += ' #' + rgh_picture_container_id + ':hover {filter: ' + this.props.filter_hover + ' } ';
      }
      if (typeof this.props.filter_normal !== 'undefined') {
        my_styles += ' #' + rgh_picture_container_id + ' {filter: ' + this.props.filter_normal + ' } ';
      }
      return my_styles;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var mouse_hover_text = this._hoverText(this.props.rgh_picture_container_id + this.class_id_names['HOVER_TEXT_POSTFIX']);
      var plain_text = this._plainText(this.props.rgh_picture_container_id + this.class_id_names['NORMAL_TEXT_POSTFIX']);
      var image_tile = this._imageTile(this.props.rgh_picture_container_id + this.class_id_names['IMAGE_POSTFIX']);
      var tile_container_class = this.class_id_names['TILE_CONTAINER_PF'];
      var my_styles = this._showHideCss();
      var image_url = this._imageUrl();
      return _react2.default.createElement(
        'div',
        { className: tile_container_class,
          id: this.props.rgh_picture_container_id,
          onMouseEnter: function onMouseEnter() {
            return _this2._imageHover(true);
          },
          onMouseLeave: function onMouseLeave() {
            return _this2._imageHover(false);
          } },
        _react2.default.createElement(
          'a',
          { href: image_url },
          _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: my_styles } }),
          mouse_hover_text,
          plain_text,
          image_tile
        )
      );
    }
  }]);

  return PictureTile;
}(_react.Component);

PictureTile.AREA_PROP_TYPE = _propTypes2.default.oneOf([_GradientLocations2.default.NORTH_WEST, _GradientLocations2.default.NORTH, _GradientLocations2.default.NORTH_EAST, _GradientLocations2.default.EAST, _GradientLocations2.default.SOUTH_EAST, _GradientLocations2.default.SOUTH, _GradientLocations2.default.SOUTH_WEST, _GradientLocations2.default.WEST, _GradientLocations2.default.MIDDLE]);
PictureTile.DEFAULT_NORMAL_AREA = 'middle';
PictureTile.DEFAULT_HOVER_AREA = 'middle';
PictureTile.DEFAULT_GRADIENT = { background: 'rgba(3, 2, 7, 0.3)' };
PictureTile.STRING_OR_OBJECT_CSS = [_react2.default.PropTypes.string, _react2.default.PropTypes.object];
PictureTile.LINEAR_GRADIENT = _propTypes2.default.shape({
  clear_percent: _propTypes2.default.number.isRequired,
  gradient_rgba: _propTypes2.default.string.isRequired
});
PictureTile.BASE_TILE_SHAPE = _propTypes2.default.shape({
  picture_src: _propTypes2.default.string.isRequired,
  rgh_picture_width: _propTypes2.default.number,
  picture_height: _propTypes2.default.number
});

PictureTile.displayName = 'PictureTile';

PictureTile.propTypes = {
  picture_src: _propTypes2.default.string.isRequired,

  normal_area: PictureTile.AREA_PROP_TYPE // cascade from ReactHoverGrid
  , hover_area: PictureTile.AREA_PROP_TYPE // cascade from ReactHoverGrid

  , normal_style: _propTypes2.default.oneOfType(PictureTile.STRING_OR_OBJECT_CSS) // cascade from ReactHoverGrid 
  , hover_style: _propTypes2.default.oneOfType(PictureTile.STRING_OR_OBJECT_CSS) // cascade from ReactHoverGrid 

  , hover_gradient: _propTypes2.default.string // cascade from ReactHoverGrid 
  , normal_gradient: _propTypes2.default.string // cascade from ReactHoverGrid 
  , hover_linear_gradient: PictureTile.LINEAR_GRADIENT // cascade from ReactHoverGrid 
  , normal_linear_gradient: PictureTile.LINEAR_GRADIENT // cascade from ReactHoverGrid 

  , normal_title_style: _propTypes2.default.oneOfType(PictureTile.STRING_OR_OBJECT_CSS) // cascade from ReactHoverGrid
  , normal_info_style: _propTypes2.default.oneOfType(PictureTile.STRING_OR_OBJECT_CSS) // cascade from ReactHoverGrid
  , hover_title_style: _propTypes2.default.oneOfType(PictureTile.STRING_OR_OBJECT_CSS) // cascade from ReactHoverGrid
  , hover_info_style: _propTypes2.default.oneOfType(PictureTile.STRING_OR_OBJECT_CSS) // cascade from ReactHoverGrid 

  , filter_normal: _propTypes2.default.string // cascade from ReactHoverGrid 
  , filter_hover: _propTypes2.default.string // cascade from ReactHoverGrid 

  , link_url: _propTypes2.default.string,

  normal_title: _propTypes2.default.string,
  normal_info: _propTypes2.default.string,
  hover_title: _propTypes2.default.string,
  hover_info: _propTypes2.default.string,

  rgh_picture_container_id: _propTypes2.default.string.isRequired,
  rgh_setHoverFunction: _propTypes2.default.func.isRequired,
  rgh_hover_grid_id: _propTypes2.default.string.isRequired,
  rgh_ssr_grid_id: _propTypes2.default.string,
  rgh_is_static_tile: _propTypes2.default.bool,

  rgh_adjusted_tile_width: _propTypes2.default.number.isRequired,
  rgh_picture_width: _propTypes2.default.number.isRequired,
  rgh_left_picture_margin: _propTypes2.default.number.isRequired

};

PictureTile.defaultProps = {
  normal_area: PictureTile.DEFAULT_NORMAL_AREA,
  hover_area: PictureTile.DEFAULT_HOVER_AREA
};

exports.default = PictureTile;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function StyleOrJsx(className_list, jsx_styles) {
  className_list = typeof className_list !== 'undefined' ? className_list : '';
  jsx_styles = typeof jsx_styles !== 'undefined' ? jsx_styles : {};
  var members = Object.assign({}, { className_list: className_list, jsx_styles: jsx_styles });

  var cssToJsx = function cssToJsx(declaration_block) {
    var the_declarations = declaration_block.split(';');
    var jsx_object = {};
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = the_declarations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var a_declaration = _step.value;

        try {
          var property_and_value = a_declaration.split(':');
          var the_property = property_and_value[0].trim();
          var the_value = property_and_value[1].trim();
          if (the_property.includes('-')) {
            var dash_parts = the_property.split('-');
            var jsx_property = dash_parts.shift();
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = dash_parts[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var a_dash_part = _step2.value;

                var first_uppercase = a_dash_part.charAt(0).toUpperCase() + a_dash_part.slice(1);
                jsx_property = jsx_property + first_uppercase;
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }

            jsx_object[jsx_property] = the_value;
          } else {
            jsx_object[the_property] = the_value;
          }
        } catch (e) {}
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return jsx_object;
  };

  var addStyling = function addStyling(className_or_jsx) {
    if (typeof className_or_jsx === 'undefined') {
      return '';
    } else if ((typeof className_or_jsx === 'undefined' ? 'undefined' : _typeof(className_or_jsx)) === 'object') {
      members.jsx_styles = Object.assign(members.jsx_styles, className_or_jsx);
    } else if (typeof className_or_jsx === 'string' || className_or_jsx instanceof String) {
      if (className_or_jsx.includes(':')) {
        var css_to_jsx = cssToJsx(className_or_jsx);
        members.jsx_styles = Object.assign(members.jsx_styles, css_to_jsx);
      } else {
        if (className_or_jsx.charAt(0) === '.') {
          className_or_jsx = className_or_jsx.substr(1);
        }
        members.className_list += ' ' + className_or_jsx;
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
      return '';
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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 * 
 */

/*eslint-disable no-self-compare */



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

module.exports = shallowEqual;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _miscFuncs = __webpack_require__(21);

var _miscFuncs2 = _interopRequireDefault(_miscFuncs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ScreenSizeToGrid = function () {

  var container_id = void 0;
  var server_screen_size = void 0;
  var server_grid_size = void 0;
  var class_id_names = void 0;

  function ScreenSizeToGrid(id_of_container, screen_size_match, grid_size_match) {
    console.assert(typeof id_of_container === 'string', 'ScreenSizeToGrid, id_of_container must be a string is ' + id_of_container);
    console.assert(Array.isArray(screen_size_match), 'ScreenSizeToGrid, screen_size_match is not an array is ' + screen_size_match);
    console.assert(Array.isArray(grid_size_match), 'ScreenSizeToGrid, grid_size_match is not an array is ' + grid_size_match);
    container_id = id_of_container;
    server_screen_size = screen_size_match;
    server_grid_size = grid_size_match;
    class_id_names = __webpack_require__(8)(container_id);
    console.assert((typeof class_id_names === 'undefined' ? 'undefined' : _typeof(class_id_names)) === 'object', 'ScreenSizeToGrid, class_id_names error');
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
    var window_width = _miscFuncs2.default.windowWidth();
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
    var min_max_rule = ' @media all and (min-width: ' + min_width + 'px) and (max-width:' + max_width + 'px) {';
    for (var screen_display = 0, max_screen_display = server_screen_size.length; screen_display < max_screen_display; screen_display++) {
      var screen_width = server_screen_size[screen_display];
      var server_width_id = class_id_names.serverWidthId(screen_width, container_id);
      if (screen_index === screen_display) {
        min_max_rule += '#' + server_width_id + '{display:block}';
      } else {
        min_max_rule += '#' + server_width_id + '{display:none}';
      }
    }
    min_max_rule += '}';
    return min_max_rule;
  }

  function showMatchingSizedGridCss() {
    var screen_rules_template = '';
    var max_width = void 0;
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

  return { ScreenSizeToGrid: ScreenSizeToGrid, _gridWidthFromScreen: _gridWidthFromScreen, showMatchingSizedGridCss: showMatchingSizedGridCss };
}();

module.exports = ScreenSizeToGrid;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var arrayShuffle = __webpack_require__(44),
    baseShuffle = __webpack_require__(47),
    isArray = __webpack_require__(27);

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
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var copyArray = __webpack_require__(45),
    shuffleSelf = __webpack_require__(22);

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
/* 45 */
/***/ (function(module, exports) {

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
/* 46 */
/***/ (function(module, exports) {

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
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var shuffleSelf = __webpack_require__(22),
    values = __webpack_require__(48);

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
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var baseValues = __webpack_require__(49),
    keys = __webpack_require__(51);

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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(50);

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
/* 50 */
/***/ (function(module, exports) {

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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(52),
    baseKeys = __webpack_require__(65),
    isArrayLike = __webpack_require__(69);

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
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(53),
    isArguments = __webpack_require__(54),
    isArray = __webpack_require__(27),
    isBuffer = __webpack_require__(58),
    isIndex = __webpack_require__(60),
    isTypedArray = __webpack_require__(61);

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
/* 53 */
/***/ (function(module, exports) {

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
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(55),
    isObjectLike = __webpack_require__(10);

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
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(9),
    isObjectLike = __webpack_require__(10);

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
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(23);

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
/* 57 */
/***/ (function(module, exports) {

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
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(24),
    stubFalse = __webpack_require__(59);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28)(module)))

/***/ }),
/* 59 */
/***/ (function(module, exports) {

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
/* 60 */
/***/ (function(module, exports) {

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
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(62),
    baseUnary = __webpack_require__(63),
    nodeUtil = __webpack_require__(64);

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
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(9),
    isLength = __webpack_require__(29),
    isObjectLike = __webpack_require__(10);

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
/* 63 */
/***/ (function(module, exports) {

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
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(25);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28)(module)))

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(66),
    nativeKeys = __webpack_require__(67);

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
/* 66 */
/***/ (function(module, exports) {

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
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(68);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 68 */
/***/ (function(module, exports) {

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
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(70),
    isLength = __webpack_require__(29);

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
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(9),
    isObject = __webpack_require__(71);

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
/* 71 */
/***/ (function(module, exports) {

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
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = false;

// Only Node.JS has a process variable that is of [[Class]] process
try {
 module.exports = Object.prototype.toString.call(global.process) === '[object process]' 
} catch(e) {}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(26)))

/***/ })
/******/ ]);