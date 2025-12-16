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
"../../node_modules/prismjs/prism.js": 
/*!*******************************************!*\
  !*** ../../node_modules/prismjs/prism.js ***!
  \*******************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
const prismjs = function(global, module, exports) {
// preserve the global if it has already been loaded
const oldprism = window.Prism;
window.Prism = { manual: true };
/// <reference lib="WebWorker"/>

var _self = (typeof window !== 'undefined')
	? window   // if in browser
	: (
		(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
			? self // if in worker
			: {}   // if in node js
	);

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */
var Prism = (function (_self) {

	// Private helper vars
	var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
	var uniqueId = 0;

	// The grammar object for plaintext
	var plainTextGrammar = {};


	var _ = {
		/**
		 * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
		 * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
		 * additional languages or plugins yourself.
		 *
		 * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
		 *
		 * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
		 * empty Prism object into the global scope before loading the Prism script like this:
		 *
		 * ```js
		 * window.Prism = window.Prism || {};
		 * Prism.manual = true;
		 * // add a new <script> to load Prism's script
		 * ```
		 *
		 * @default false
		 * @type {boolean}
		 * @memberof Prism
		 * @public
		 */
		manual: _self.Prism && _self.Prism.manual,
		/**
		 * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
		 * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
		 * own worker, you don't want it to do this.
		 *
		 * By setting this value to `true`, Prism will not add its own listeners to the worker.
		 *
		 * You obviously have to change this value before Prism executes. To do this, you can add an
		 * empty Prism object into the global scope before loading the Prism script like this:
		 *
		 * ```js
		 * window.Prism = window.Prism || {};
		 * Prism.disableWorkerMessageHandler = true;
		 * // Load Prism's script
		 * ```
		 *
		 * @default false
		 * @type {boolean}
		 * @memberof Prism
		 * @public
		 */
		disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,

		/**
		 * A namespace for utility methods.
		 *
		 * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
		 * change or disappear at any time.
		 *
		 * @namespace
		 * @memberof Prism
		 */
		util: {
			encode: function encode(tokens) {
				if (tokens instanceof Token) {
					return new Token(tokens.type, encode(tokens.content), tokens.alias);
				} else if (Array.isArray(tokens)) {
					return tokens.map(encode);
				} else {
					return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
				}
			},

			/**
			 * Returns the name of the type of the given value.
			 *
			 * @param {any} o
			 * @returns {string}
			 * @example
			 * type(null)      === 'Null'
			 * type(undefined) === 'Undefined'
			 * type(123)       === 'Number'
			 * type('foo')     === 'String'
			 * type(true)      === 'Boolean'
			 * type([1, 2])    === 'Array'
			 * type({})        === 'Object'
			 * type(String)    === 'Function'
			 * type(/abc+/)    === 'RegExp'
			 */
			type: function (o) {
				return Object.prototype.toString.call(o).slice(8, -1);
			},

			/**
			 * Returns a unique number for the given object. Later calls will still return the same number.
			 *
			 * @param {Object} obj
			 * @returns {number}
			 */
			objId: function (obj) {
				if (!obj['__id']) {
					Object.defineProperty(obj, '__id', { value: ++uniqueId });
				}
				return obj['__id'];
			},

			/**
			 * Creates a deep clone of the given object.
			 *
			 * The main intended use of this function is to clone language definitions.
			 *
			 * @param {T} o
			 * @param {Record<number, any>} [visited]
			 * @returns {T}
			 * @template T
			 */
			clone: function deepClone(o, visited) {
				visited = visited || {};

				var clone; var id;
				switch (_.util.type(o)) {
					case 'Object':
						id = _.util.objId(o);
						if (visited[id]) {
							return visited[id];
						}
						clone = /** @type {Record<string, any>} */ ({});
						visited[id] = clone;

						for (var key in o) {
							if (o.hasOwnProperty(key)) {
								clone[key] = deepClone(o[key], visited);
							}
						}

						return /** @type {any} */ (clone);

					case 'Array':
						id = _.util.objId(o);
						if (visited[id]) {
							return visited[id];
						}
						clone = [];
						visited[id] = clone;

						(/** @type {Array} */(/** @type {any} */(o))).forEach(function (v, i) {
							clone[i] = deepClone(v, visited);
						});

						return /** @type {any} */ (clone);

					default:
						return o;
				}
			},

			/**
			 * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
			 *
			 * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
			 *
			 * @param {Element} element
			 * @returns {string}
			 */
			getLanguage: function (element) {
				while (element) {
					var m = lang.exec(element.className);
					if (m) {
						return m[1].toLowerCase();
					}
					element = element.parentElement;
				}
				return 'none';
			},

			/**
			 * Sets the Prism `language-xxxx` class of the given element.
			 *
			 * @param {Element} element
			 * @param {string} language
			 * @returns {void}
			 */
			setLanguage: function (element, language) {
				// remove all `language-xxxx` classes
				// (this might leave behind a leading space)
				element.className = element.className.replace(RegExp(lang, 'gi'), '');

				// add the new `language-xxxx` class
				// (using `classList` will automatically clean up spaces for us)
				element.classList.add('language-' + language);
			},

			/**
			 * Returns the script element that is currently executing.
			 *
			 * This does __not__ work for line script element.
			 *
			 * @returns {HTMLScriptElement | null}
			 */
			currentScript: function () {
				if (typeof document === 'undefined') {
					return null;
				}
				if ('currentScript' in document && 1 < 2 /* hack to trip TS' flow analysis */) {
					return /** @type {any} */ (document.currentScript);
				}

				// IE11 workaround
				// we'll get the src of the current script by parsing IE11's error stack trace
				// this will not work for inline scripts

				try {
					throw new Error();
				} catch (err) {
					// Get file src url from stack. Specifically works with the format of stack traces in IE.
					// A stack will look like this:
					//
					// Error
					//    at _.util.currentScript (http://localhost/components/prism-core.js:119:5)
					//    at Global code (http://localhost/components/prism-core.js:606:1)

					var src = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(err.stack) || [])[1];
					if (src) {
						var scripts = document.getElementsByTagName('script');
						for (var i in scripts) {
							if (scripts[i].src == src) {
								return scripts[i];
							}
						}
					}
					return null;
				}
			},

			/**
			 * Returns whether a given class is active for `element`.
			 *
			 * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
			 * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
			 * given class is just the given class with a `no-` prefix.
			 *
			 * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
			 * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
			 * ancestors have the given class or the negated version of it, then the default activation will be returned.
			 *
			 * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
			 * version of it, the class is considered active.
			 *
			 * @param {Element} element
			 * @param {string} className
			 * @param {boolean} [defaultActivation=false]
			 * @returns {boolean}
			 */
			isActive: function (element, className, defaultActivation) {
				var no = 'no-' + className;

				while (element) {
					var classList = element.classList;
					if (classList.contains(className)) {
						return true;
					}
					if (classList.contains(no)) {
						return false;
					}
					element = element.parentElement;
				}
				return !!defaultActivation;
			}
		},

		/**
		 * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
		 *
		 * @namespace
		 * @memberof Prism
		 * @public
		 */
		languages: {
			/**
			 * The grammar for plain, unformatted text.
			 */
			plain: plainTextGrammar,
			plaintext: plainTextGrammar,
			text: plainTextGrammar,
			txt: plainTextGrammar,

			/**
			 * Creates a deep copy of the language with the given id and appends the given tokens.
			 *
			 * If a token in `redef` also appears in the copied language, then the existing token in the copied language
			 * will be overwritten at its original position.
			 *
			 * ## Best practices
			 *
			 * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
			 * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
			 * understand the language definition because, normally, the order of tokens matters in Prism grammars.
			 *
			 * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
			 * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
			 *
			 * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
			 * @param {Grammar} redef The new tokens to append.
			 * @returns {Grammar} The new language created.
			 * @public
			 * @example
			 * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
			 *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
			 *     // at its original position
			 *     'comment': { ... },
			 *     // CSS doesn't have a 'color' token, so this token will be appended
			 *     'color': /\b(?:red|green|blue)\b/
			 * });
			 */
			extend: function (id, redef) {
				var lang = _.util.clone(_.languages[id]);

				for (var key in redef) {
					lang[key] = redef[key];
				}

				return lang;
			},

			/**
			 * Inserts tokens _before_ another token in a language definition or any other grammar.
			 *
			 * ## Usage
			 *
			 * This helper method makes it easy to modify existing languages. For example, the CSS language definition
			 * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
			 * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
			 * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
			 * this:
			 *
			 * ```js
			 * Prism.languages.markup.style = {
			 *     // token
			 * };
			 * ```
			 *
			 * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
			 * before existing tokens. For the CSS example above, you would use it like this:
			 *
			 * ```js
			 * Prism.languages.insertBefore('markup', 'cdata', {
			 *     'style': {
			 *         // token
			 *     }
			 * });
			 * ```
			 *
			 * ## Special cases
			 *
			 * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
			 * will be ignored.
			 *
			 * This behavior can be used to insert tokens after `before`:
			 *
			 * ```js
			 * Prism.languages.insertBefore('markup', 'comment', {
			 *     'comment': Prism.languages.markup.comment,
			 *     // tokens after 'comment'
			 * });
			 * ```
			 *
			 * ## Limitations
			 *
			 * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
			 * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
			 * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
			 * deleting properties which is necessary to insert at arbitrary positions.
			 *
			 * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
			 * Instead, it will create a new object and replace all references to the target object with the new one. This
			 * can be done without temporarily deleting properties, so the iteration order is well-defined.
			 *
			 * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
			 * you hold the target object in a variable, then the value of the variable will not change.
			 *
			 * ```js
			 * var oldMarkup = Prism.languages.markup;
			 * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
			 *
			 * assert(oldMarkup !== Prism.languages.markup);
			 * assert(newMarkup === Prism.languages.markup);
			 * ```
			 *
			 * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
			 * object to be modified.
			 * @param {string} before The key to insert before.
			 * @param {Grammar} insert An object containing the key-value pairs to be inserted.
			 * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
			 * object to be modified.
			 *
			 * Defaults to `Prism.languages`.
			 * @returns {Grammar} The new grammar object.
			 * @public
			 */
			insertBefore: function (inside, before, insert, root) {
				root = root || /** @type {any} */ (_.languages);
				var grammar = root[inside];
				/** @type {Grammar} */
				var ret = {};

				for (var token in grammar) {
					if (grammar.hasOwnProperty(token)) {

						if (token == before) {
							for (var newToken in insert) {
								if (insert.hasOwnProperty(newToken)) {
									ret[newToken] = insert[newToken];
								}
							}
						}

						// Do not insert token which also occur in insert. See #1525
						if (!insert.hasOwnProperty(token)) {
							ret[token] = grammar[token];
						}
					}
				}

				var old = root[inside];
				root[inside] = ret;

				// Update references in other language definitions
				_.languages.DFS(_.languages, function (key, value) {
					if (value === old && key != inside) {
						this[key] = ret;
					}
				});

				return ret;
			},

			// Traverse a language definition with Depth First Search
			DFS: function DFS(o, callback, type, visited) {
				visited = visited || {};

				var objId = _.util.objId;

				for (var i in o) {
					if (o.hasOwnProperty(i)) {
						callback.call(o, i, o[i], type || i);

						var property = o[i];
						var propertyType = _.util.type(property);

						if (propertyType === 'Object' && !visited[objId(property)]) {
							visited[objId(property)] = true;
							DFS(property, callback, null, visited);
						} else if (propertyType === 'Array' && !visited[objId(property)]) {
							visited[objId(property)] = true;
							DFS(property, callback, i, visited);
						}
					}
				}
			}
		},

		plugins: {},

		/**
		 * This is the most high-level function in Prism’s API.
		 * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
		 * each one of them.
		 *
		 * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
		 *
		 * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
		 * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
		 * @memberof Prism
		 * @public
		 */
		highlightAll: function (async, callback) {
			_.highlightAllUnder(document, async, callback);
		},

		/**
		 * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
		 * {@link Prism.highlightElement} on each one of them.
		 *
		 * The following hooks will be run:
		 * 1. `before-highlightall`
		 * 2. `before-all-elements-highlight`
		 * 3. All hooks of {@link Prism.highlightElement} for each element.
		 *
		 * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
		 * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
		 * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
		 * @memberof Prism
		 * @public
		 */
		highlightAllUnder: function (container, async, callback) {
			var env = {
				callback: callback,
				container: container,
				selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
			};

			_.hooks.run('before-highlightall', env);

			env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));

			_.hooks.run('before-all-elements-highlight', env);

			for (var i = 0, element; (element = env.elements[i++]);) {
				_.highlightElement(element, async === true, env.callback);
			}
		},

		/**
		 * Highlights the code inside a single element.
		 *
		 * The following hooks will be run:
		 * 1. `before-sanity-check`
		 * 2. `before-highlight`
		 * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
		 * 4. `before-insert`
		 * 5. `after-highlight`
		 * 6. `complete`
		 *
		 * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
		 * the element's language.
		 *
		 * @param {Element} element The element containing the code.
		 * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
		 * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
		 * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
		 * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
		 *
		 * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
		 * asynchronous highlighting to work. You can build your own bundle on the
		 * [Download page](https://prismjs.com/download.html).
		 * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
		 * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
		 * @memberof Prism
		 * @public
		 */
		highlightElement: function (element, async, callback) {
			// Find language
			var language = _.util.getLanguage(element);
			var grammar = _.languages[language];

			// Set language on the element, if not present
			_.util.setLanguage(element, language);

			// Set language on the parent, for styling
			var parent = element.parentElement;
			if (parent && parent.nodeName.toLowerCase() === 'pre') {
				_.util.setLanguage(parent, language);
			}

			var code = element.textContent;

			var env = {
				element: element,
				language: language,
				grammar: grammar,
				code: code
			};

			function insertHighlightedCode(highlightedCode) {
				env.highlightedCode = highlightedCode;

				_.hooks.run('before-insert', env);

				env.element.innerHTML = env.highlightedCode;

				_.hooks.run('after-highlight', env);
				_.hooks.run('complete', env);
				callback && callback.call(env.element);
			}

			_.hooks.run('before-sanity-check', env);

			// plugins may change/add the parent/element
			parent = env.element.parentElement;
			if (parent && parent.nodeName.toLowerCase() === 'pre' && !parent.hasAttribute('tabindex')) {
				parent.setAttribute('tabindex', '0');
			}

			if (!env.code) {
				_.hooks.run('complete', env);
				callback && callback.call(env.element);
				return;
			}

			_.hooks.run('before-highlight', env);

			if (!env.grammar) {
				insertHighlightedCode(_.util.encode(env.code));
				return;
			}

			if (async && _self.Worker) {
				var worker = new Worker(_.filename);

				worker.onmessage = function (evt) {
					insertHighlightedCode(evt.data);
				};

				worker.postMessage(JSON.stringify({
					language: env.language,
					code: env.code,
					immediateClose: true
				}));
			} else {
				insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
			}
		},

		/**
		 * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
		 * and the language definitions to use, and returns a string with the HTML produced.
		 *
		 * The following hooks will be run:
		 * 1. `before-tokenize`
		 * 2. `after-tokenize`
		 * 3. `wrap`: On each {@link Token}.
		 *
		 * @param {string} text A string with the code to be highlighted.
		 * @param {Grammar} grammar An object containing the tokens to use.
		 *
		 * Usually a language definition like `Prism.languages.markup`.
		 * @param {string} language The name of the language definition passed to `grammar`.
		 * @returns {string} The highlighted HTML.
		 * @memberof Prism
		 * @public
		 * @example
		 * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
		 */
		highlight: function (text, grammar, language) {
			var env = {
				code: text,
				grammar: grammar,
				language: language
			};
			_.hooks.run('before-tokenize', env);
			if (!env.grammar) {
				throw new Error('The language "' + env.language + '" has no grammar.');
			}
			env.tokens = _.tokenize(env.code, env.grammar);
			_.hooks.run('after-tokenize', env);
			return Token.stringify(_.util.encode(env.tokens), env.language);
		},

		/**
		 * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
		 * and the language definitions to use, and returns an array with the tokenized code.
		 *
		 * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
		 *
		 * This method could be useful in other contexts as well, as a very crude parser.
		 *
		 * @param {string} text A string with the code to be highlighted.
		 * @param {Grammar} grammar An object containing the tokens to use.
		 *
		 * Usually a language definition like `Prism.languages.markup`.
		 * @returns {TokenStream} An array of strings and tokens, a token stream.
		 * @memberof Prism
		 * @public
		 * @example
		 * let code = `var foo = 0;`;
		 * let tokens = Prism.tokenize(code, Prism.languages.javascript);
		 * tokens.forEach(token => {
		 *     if (token instanceof Prism.Token && token.type === 'number') {
		 *         console.log(`Found numeric literal: ${token.content}`);
		 *     }
		 * });
		 */
		tokenize: function (text, grammar) {
			var rest = grammar.rest;
			if (rest) {
				for (var token in rest) {
					grammar[token] = rest[token];
				}

				delete grammar.rest;
			}

			var tokenList = new LinkedList();
			addAfter(tokenList, tokenList.head, text);

			matchGrammar(text, tokenList, grammar, tokenList.head, 0);

			return toArray(tokenList);
		},

		/**
		 * @namespace
		 * @memberof Prism
		 * @public
		 */
		hooks: {
			all: {},

			/**
			 * Adds the given callback to the list of callbacks for the given hook.
			 *
			 * The callback will be invoked when the hook it is registered for is run.
			 * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
			 *
			 * One callback function can be registered to multiple hooks and the same hook multiple times.
			 *
			 * @param {string} name The name of the hook.
			 * @param {HookCallback} callback The callback function which is given environment variables.
			 * @public
			 */
			add: function (name, callback) {
				var hooks = _.hooks.all;

				hooks[name] = hooks[name] || [];

				hooks[name].push(callback);
			},

			/**
			 * Runs a hook invoking all registered callbacks with the given environment variables.
			 *
			 * Callbacks will be invoked synchronously and in the order in which they were registered.
			 *
			 * @param {string} name The name of the hook.
			 * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
			 * @public
			 */
			run: function (name, env) {
				var callbacks = _.hooks.all[name];

				if (!callbacks || !callbacks.length) {
					return;
				}

				for (var i = 0, callback; (callback = callbacks[i++]);) {
					callback(env);
				}
			}
		},

		Token: Token
	};
	_self.Prism = _;


	// Typescript note:
	// The following can be used to import the Token type in JSDoc:
	//
	//   @typedef {InstanceType<import("./prism-core")["Token"]>} Token

	/**
	 * Creates a new token.
	 *
	 * @param {string} type See {@link Token#type type}
	 * @param {string | TokenStream} content See {@link Token#content content}
	 * @param {string|string[]} [alias] The alias(es) of the token.
	 * @param {string} [matchedStr=""] A copy of the full string this token was created from.
	 * @class
	 * @global
	 * @public
	 */
	function Token(type, content, alias, matchedStr) {
		/**
		 * The type of the token.
		 *
		 * This is usually the key of a pattern in a {@link Grammar}.
		 *
		 * @type {string}
		 * @see GrammarToken
		 * @public
		 */
		this.type = type;
		/**
		 * The strings or tokens contained by this token.
		 *
		 * This will be a token stream if the pattern matched also defined an `inside` grammar.
		 *
		 * @type {string | TokenStream}
		 * @public
		 */
		this.content = content;
		/**
		 * The alias(es) of the token.
		 *
		 * @type {string|string[]}
		 * @see GrammarToken
		 * @public
		 */
		this.alias = alias;
		// Copy of the full string this token was created from
		this.length = (matchedStr || '').length | 0;
	}

	/**
	 * A token stream is an array of strings and {@link Token Token} objects.
	 *
	 * Token streams have to fulfill a few properties that are assumed by most functions (mostly internal ones) that process
	 * them.
	 *
	 * 1. No adjacent strings.
	 * 2. No empty strings.
	 *
	 *    The only exception here is the token stream that only contains the empty string and nothing else.
	 *
	 * @typedef {Array<string | Token>} TokenStream
	 * @global
	 * @public
	 */

	/**
	 * Converts the given token or token stream to an HTML representation.
	 *
	 * The following hooks will be run:
	 * 1. `wrap`: On each {@link Token}.
	 *
	 * @param {string | Token | TokenStream} o The token or token stream to be converted.
	 * @param {string} language The name of current language.
	 * @returns {string} The HTML representation of the token or token stream.
	 * @memberof Token
	 * @static
	 */
	Token.stringify = function stringify(o, language) {
		if (typeof o == 'string') {
			return o;
		}
		if (Array.isArray(o)) {
			var s = '';
			o.forEach(function (e) {
				s += stringify(e, language);
			});
			return s;
		}

		var env = {
			type: o.type,
			content: stringify(o.content, language),
			tag: 'span',
			classes: ['token', o.type],
			attributes: {},
			language: language
		};

		var aliases = o.alias;
		if (aliases) {
			if (Array.isArray(aliases)) {
				Array.prototype.push.apply(env.classes, aliases);
			} else {
				env.classes.push(aliases);
			}
		}

		_.hooks.run('wrap', env);

		var attributes = '';
		for (var name in env.attributes) {
			attributes += ' ' + name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
		}

		return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + attributes + '>' + env.content + '</' + env.tag + '>';
	};

	/**
	 * @param {RegExp} pattern
	 * @param {number} pos
	 * @param {string} text
	 * @param {boolean} lookbehind
	 * @returns {RegExpExecArray | null}
	 */
	function matchPattern(pattern, pos, text, lookbehind) {
		pattern.lastIndex = pos;
		var match = pattern.exec(text);
		if (match && lookbehind && match[1]) {
			// change the match to remove the text matched by the Prism lookbehind group
			var lookbehindLength = match[1].length;
			match.index += lookbehindLength;
			match[0] = match[0].slice(lookbehindLength);
		}
		return match;
	}

	/**
	 * @param {string} text
	 * @param {LinkedList<string | Token>} tokenList
	 * @param {any} grammar
	 * @param {LinkedListNode<string | Token>} startNode
	 * @param {number} startPos
	 * @param {RematchOptions} [rematch]
	 * @returns {void}
	 * @private
	 *
	 * @typedef RematchOptions
	 * @property {string} cause
	 * @property {number} reach
	 */
	function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
		for (var token in grammar) {
			if (!grammar.hasOwnProperty(token) || !grammar[token]) {
				continue;
			}

			var patterns = grammar[token];
			patterns = Array.isArray(patterns) ? patterns : [patterns];

			for (var j = 0; j < patterns.length; ++j) {
				if (rematch && rematch.cause == token + ',' + j) {
					return;
				}

				var patternObj = patterns[j];
				var inside = patternObj.inside;
				var lookbehind = !!patternObj.lookbehind;
				var greedy = !!patternObj.greedy;
				var alias = patternObj.alias;

				if (greedy && !patternObj.pattern.global) {
					// Without the global flag, lastIndex won't work
					var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
					patternObj.pattern = RegExp(patternObj.pattern.source, flags + 'g');
				}

				/** @type {RegExp} */
				var pattern = patternObj.pattern || patternObj;

				for ( // iterate the token list and keep track of the current token/string position
					var currentNode = startNode.next, pos = startPos;
					currentNode !== tokenList.tail;
					pos += currentNode.value.length, currentNode = currentNode.next
				) {

					if (rematch && pos >= rematch.reach) {
						break;
					}

					var str = currentNode.value;

					if (tokenList.length > text.length) {
						// Something went terribly wrong, ABORT, ABORT!
						return;
					}

					if (str instanceof Token) {
						continue;
					}

					var removeCount = 1; // this is the to parameter of removeBetween
					var match;

					if (greedy) {
						match = matchPattern(pattern, pos, text, lookbehind);
						if (!match || match.index >= text.length) {
							break;
						}

						var from = match.index;
						var to = match.index + match[0].length;
						var p = pos;

						// find the node that contains the match
						p += currentNode.value.length;
						while (from >= p) {
							currentNode = currentNode.next;
							p += currentNode.value.length;
						}
						// adjust pos (and p)
						p -= currentNode.value.length;
						pos = p;

						// the current node is a Token, then the match starts inside another Token, which is invalid
						if (currentNode.value instanceof Token) {
							continue;
						}

						// find the last node which is affected by this match
						for (
							var k = currentNode;
							k !== tokenList.tail && (p < to || typeof k.value === 'string');
							k = k.next
						) {
							removeCount++;
							p += k.value.length;
						}
						removeCount--;

						// replace with the new match
						str = text.slice(pos, p);
						match.index -= pos;
					} else {
						match = matchPattern(pattern, 0, str, lookbehind);
						if (!match) {
							continue;
						}
					}

					// eslint-disable-next-line no-redeclare
					var from = match.index;
					var matchStr = match[0];
					var before = str.slice(0, from);
					var after = str.slice(from + matchStr.length);

					var reach = pos + str.length;
					if (rematch && reach > rematch.reach) {
						rematch.reach = reach;
					}

					var removeFrom = currentNode.prev;

					if (before) {
						removeFrom = addAfter(tokenList, removeFrom, before);
						pos += before.length;
					}

					removeRange(tokenList, removeFrom, removeCount);

					var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
					currentNode = addAfter(tokenList, removeFrom, wrapped);

					if (after) {
						addAfter(tokenList, currentNode, after);
					}

					if (removeCount > 1) {
						// at least one Token object was removed, so we have to do some rematching
						// this can only happen if the current pattern is greedy

						/** @type {RematchOptions} */
						var nestedRematch = {
							cause: token + ',' + j,
							reach: reach
						};
						matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);

						// the reach might have been extended because of the rematching
						if (rematch && nestedRematch.reach > rematch.reach) {
							rematch.reach = nestedRematch.reach;
						}
					}
				}
			}
		}
	}

	/**
	 * @typedef LinkedListNode
	 * @property {T} value
	 * @property {LinkedListNode<T> | null} prev The previous node.
	 * @property {LinkedListNode<T> | null} next The next node.
	 * @template T
	 * @private
	 */

	/**
	 * @template T
	 * @private
	 */
	function LinkedList() {
		/** @type {LinkedListNode<T>} */
		var head = { value: null, prev: null, next: null };
		/** @type {LinkedListNode<T>} */
		var tail = { value: null, prev: head, next: null };
		head.next = tail;

		/** @type {LinkedListNode<T>} */
		this.head = head;
		/** @type {LinkedListNode<T>} */
		this.tail = tail;
		this.length = 0;
	}

	/**
	 * Adds a new node with the given value to the list.
	 *
	 * @param {LinkedList<T>} list
	 * @param {LinkedListNode<T>} node
	 * @param {T} value
	 * @returns {LinkedListNode<T>} The added node.
	 * @template T
	 */
	function addAfter(list, node, value) {
		// assumes that node != list.tail && values.length >= 0
		var next = node.next;

		var newNode = { value: value, prev: node, next: next };
		node.next = newNode;
		next.prev = newNode;
		list.length++;

		return newNode;
	}
	/**
	 * Removes `count` nodes after the given node. The given node will not be removed.
	 *
	 * @param {LinkedList<T>} list
	 * @param {LinkedListNode<T>} node
	 * @param {number} count
	 * @template T
	 */
	function removeRange(list, node, count) {
		var next = node.next;
		for (var i = 0; i < count && next !== list.tail; i++) {
			next = next.next;
		}
		node.next = next;
		next.prev = node;
		list.length -= i;
	}
	/**
	 * @param {LinkedList<T>} list
	 * @returns {T[]}
	 * @template T
	 */
	function toArray(list) {
		var array = [];
		var node = list.head.next;
		while (node !== list.tail) {
			array.push(node.value);
			node = node.next;
		}
		return array;
	}


	if (!_self.document) {
		if (!_self.addEventListener) {
			// in Node.js
			return _;
		}

		if (!_.disableWorkerMessageHandler) {
			// In worker
			_self.addEventListener('message', function (evt) {
				var message = JSON.parse(evt.data);
				var lang = message.language;
				var code = message.code;
				var immediateClose = message.immediateClose;

				_self.postMessage(_.highlight(code, _.languages[lang], lang));
				if (immediateClose) {
					_self.close();
				}
			}, false);
		}

		return _;
	}

	// Get current script and highlight
	var script = _.util.currentScript();

	if (script) {
		_.filename = script.src;

		if (script.hasAttribute('data-manual')) {
			_.manual = true;
		}
	}

	function highlightAutomaticallyCallback() {
		if (!_.manual) {
			_.highlightAll();
		}
	}

	if (!_.manual) {
		// If the document state is "loading", then we'll use DOMContentLoaded.
		// If the document state is "interactive" and the prism.js script is deferred, then we'll also use the
		// DOMContentLoaded event because there might be some plugins or languages which have also been deferred and they
		// might take longer one animation frame to execute which can create a race condition where only some plugins have
		// been loaded when Prism.highlightAll() is executed, depending on how fast resources are loaded.
		// See https://github.com/PrismJS/prism/issues/2102
		var readyState = document.readyState;
		if (readyState === 'loading' || readyState === 'interactive' && script && script.defer) {
			document.addEventListener('DOMContentLoaded', highlightAutomaticallyCallback);
		} else {
			if (window.requestAnimationFrame) {
				window.requestAnimationFrame(highlightAutomaticallyCallback);
			} else {
				window.setTimeout(highlightAutomaticallyCallback, 16);
			}
		}
	}

	return _;

}(_self));

if (typeof module !== 'undefined' && module.exports) {
	module.exports = Prism;
}

// hack for components to work correctly in node.js
if (typeof global !== 'undefined') {
	global.Prism = Prism;
}

// some additional documentation/types

/**
 * The expansion of a simple `RegExp` literal to support additional properties.
 *
 * @typedef GrammarToken
 * @property {RegExp} pattern The regular expression of the token.
 * @property {boolean} [lookbehind=false] If `true`, then the first capturing group of `pattern` will (effectively)
 * behave as a lookbehind group meaning that the captured text will not be part of the matched text of the new token.
 * @property {boolean} [greedy=false] Whether the token is greedy.
 * @property {string|string[]} [alias] An optional alias or list of aliases.
 * @property {Grammar} [inside] The nested grammar of this token.
 *
 * The `inside` grammar will be used to tokenize the text value of each token of this kind.
 *
 * This can be used to make nested and even recursive language definitions.
 *
 * Note: This can cause infinite recursion. Be careful when you embed different languages or even the same language into
 * each another.
 * @global
 * @public
 */

/**
 * @typedef Grammar
 * @type {Object<string, RegExp | GrammarToken | Array<RegExp | GrammarToken>>}
 * @property {Grammar} [rest] An optional grammar object that will be appended to this grammar.
 * @global
 * @public
 */

/**
 * A function which will invoked after an element was successfully highlighted.
 *
 * @callback HighlightCallback
 * @param {Element} element The element successfully highlighted.
 * @returns {void}
 * @global
 * @public
 */

/**
 * @callback HookCallback
 * @param {Object<string, any>} env The environment variables of the hook.
 * @returns {void}
 * @global
 * @public
 */

Prism.languages.clike = {
	'comment': [
		{
			pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
			lookbehind: true,
			greedy: true
		},
		{
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: true,
			greedy: true
		}
	],
	'string': {
		pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'class-name': {
		pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
		lookbehind: true,
		inside: {
			'punctuation': /[.\\]/
		}
	},
	'keyword': /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
	'boolean': /\b(?:false|true)\b/,
	'function': /\b\w+(?=\()/,
	'number': /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
	'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
	'punctuation': /[{}[\];(),.:]/
};

(function (Prism) {

	/**
	 * Returns the placeholder for the given language id and index.
	 *
	 * @param {string} language
	 * @param {string|number} index
	 * @returns {string}
	 */
	function getPlaceholder(language, index) {
		return '___' + language.toUpperCase() + index + '___';
	}

	Object.defineProperties(Prism.languages['markup-templating'] = {}, {
		buildPlaceholders: {
			/**
			 * Tokenize all inline templating expressions matching `placeholderPattern`.
			 *
			 * If `replaceFilter` is provided, only matches of `placeholderPattern` for which `replaceFilter` returns
			 * `true` will be replaced.
			 *
			 * @param {object} env The environment of the `before-tokenize` hook.
			 * @param {string} language The language id.
			 * @param {RegExp} placeholderPattern The matches of this pattern will be replaced by placeholders.
			 * @param {(match: string) => boolean} [replaceFilter]
			 */
			value: function (env, language, placeholderPattern, replaceFilter) {
				if (env.language !== language) {
					return;
				}

				var tokenStack = env.tokenStack = [];

				env.code = env.code.replace(placeholderPattern, function (match) {
					if (typeof replaceFilter === 'function' && !replaceFilter(match)) {
						return match;
					}
					var i = tokenStack.length;
					var placeholder;

					// Check for existing strings
					while (env.code.indexOf(placeholder = getPlaceholder(language, i)) !== -1) {
						++i;
					}

					// Create a sparse array
					tokenStack[i] = match;

					return placeholder;
				});

				// Switch the grammar to markup
				env.grammar = Prism.languages.markup;
			}
		},
		tokenizePlaceholders: {
			/**
			 * Replace placeholders with proper tokens after tokenizing.
			 *
			 * @param {object} env The environment of the `after-tokenize` hook.
			 * @param {string} language The language id.
			 */
			value: function (env, language) {
				if (env.language !== language || !env.tokenStack) {
					return;
				}

				// Switch the grammar back
				env.grammar = Prism.languages[language];

				var j = 0;
				var keys = Object.keys(env.tokenStack);

				function walkTokens(tokens) {
					for (var i = 0; i < tokens.length; i++) {
						// all placeholders are replaced already
						if (j >= keys.length) {
							break;
						}

						var token = tokens[i];
						if (typeof token === 'string' || (token.content && typeof token.content === 'string')) {
							var k = keys[j];
							var t = env.tokenStack[k];
							var s = typeof token === 'string' ? token : token.content;
							var placeholder = getPlaceholder(language, k);

							var index = s.indexOf(placeholder);
							if (index > -1) {
								++j;

								var before = s.substring(0, index);
								var middle = new Prism.Token(language, Prism.tokenize(t, env.grammar), 'language-' + language, t);
								var after = s.substring(index + placeholder.length);

								var replacement = [];
								if (before) {
									replacement.push.apply(replacement, walkTokens([before]));
								}
								replacement.push(middle);
								if (after) {
									replacement.push.apply(replacement, walkTokens([after]));
								}

								if (typeof token === 'string') {
									tokens.splice.apply(tokens, [i, 1].concat(replacement));
								} else {
									token.content = replacement;
								}
							}
						} else if (token.content /* && typeof token.content !== 'string' */) {
							walkTokens(token.content);
						}
					}

					return tokens;
				}

				walkTokens(env.tokens);
			}
		}
	});

}(Prism));

Prism.languages.c = Prism.languages.extend('clike', {
	'comment': {
		pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
		greedy: true
	},
	'string': {
		// https://en.cppreference.com/w/c/language/string_literal
		pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
		greedy: true
	},
	'class-name': {
		pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
		lookbehind: true
	},
	'keyword': /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
	'function': /\b[a-z_]\w*(?=\s*\()/i,
	'number': /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
	'operator': />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/
});

Prism.languages.insertBefore('c', 'string', {
	'char': {
		// https://en.cppreference.com/w/c/language/character_constant
		pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
		greedy: true
	}
});

Prism.languages.insertBefore('c', 'string', {
	'macro': {
		// allow for multiline macro definitions
		// spaces after the # character compile fine with gcc
		pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
		lookbehind: true,
		greedy: true,
		alias: 'property',
		inside: {
			'string': [
				{
					// highlight the path of the include statement as a string
					pattern: /^(#\s*include\s*)<[^>]+>/,
					lookbehind: true
				},
				Prism.languages.c['string']
			],
			'char': Prism.languages.c['char'],
			'comment': Prism.languages.c['comment'],
			'macro-name': [
				{
					pattern: /(^#\s*define\s+)\w+\b(?!\()/i,
					lookbehind: true
				},
				{
					pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
					lookbehind: true,
					alias: 'function'
				}
			],
			// highlight macro directives as keywords
			'directive': {
				pattern: /^(#\s*)[a-z]+/,
				lookbehind: true,
				alias: 'keyword'
			},
			'directive-hash': /^#/,
			'punctuation': /##|\\(?=[\r\n])/,
			'expression': {
				pattern: /\S[\s\S]*/,
				inside: Prism.languages.c
			}
		}
	}
});

Prism.languages.insertBefore('c', 'function', {
	// highlight predefined macros as constants
	'constant': /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/
});

delete Prism.languages.c['boolean'];

(function (Prism) {

	var keyword = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/;
	var modName = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, function () { return keyword.source; });

	Prism.languages.cpp = Prism.languages.extend('c', {
		'class-name': [
			{
				pattern: RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source
					.replace(/<keyword>/g, function () { return keyword.source; })),
				lookbehind: true
			},
			// This is intended to capture the class name of method implementations like:
			//   void foo::bar() const {}
			// However! The `foo` in the above example could also be a namespace, so we only capture the class name if
			// it starts with an uppercase letter. This approximation should give decent results.
			/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
			// This will capture the class name before destructors like:
			//   Foo::~Foo() {}
			/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
			// This also intends to capture the class name of method implementations but here the class has template
			// parameters, so it can't be a namespace (until C++ adds generic namespaces).
			/\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/
		],
		'keyword': keyword,
		'number': {
			pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
			greedy: true
		},
		'operator': />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
		'boolean': /\b(?:false|true)\b/
	});

	Prism.languages.insertBefore('cpp', 'string', {
		'module': {
			// https://en.cppreference.com/w/cpp/language/modules
			pattern: RegExp(
				/(\b(?:import|module)\s+)/.source +
				'(?:' +
				// header-name
				/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source +
				'|' +
				// module name or partition or both
				/<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g, function () { return modName; }) +
				')'
			),
			lookbehind: true,
			greedy: true,
			inside: {
				'string': /^[<"][\s\S]+/,
				'operator': /:/,
				'punctuation': /\./
			}
		},
		'raw-string': {
			pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
			alias: 'string',
			greedy: true
		}
	});

	Prism.languages.insertBefore('cpp', 'keyword', {
		'generic-function': {
			pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
			inside: {
				'function': /^\w+/,
				'generic': {
					pattern: /<[\s\S]+/,
					alias: 'class-name',
					inside: Prism.languages.cpp
				}
			}
		}
	});

	Prism.languages.insertBefore('cpp', 'operator', {
		'double-colon': {
			pattern: /::/,
			alias: 'punctuation'
		}
	});

	Prism.languages.insertBefore('cpp', 'class-name', {
		// the base clause is an optional list of parent classes
		// https://en.cppreference.com/w/cpp/language/class
		'base-clause': {
			pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
			lookbehind: true,
			greedy: true,
			inside: Prism.languages.extend('cpp', {})
		}
	});

	Prism.languages.insertBefore('inside', 'double-colon', {
		// All untokenized words that are not namespaces should be class names
		'class-name': /\b[a-z_]\w*\b(?!\s*::)/i
	}, Prism.languages.cpp['base-clause']);

}(Prism));

(function (Prism) {

	/**
	 * Replaces all placeholders "<<n>>" of given pattern with the n-th replacement (zero based).
	 *
	 * Note: This is a simple text based replacement. Be careful when using backreferences!
	 *
	 * @param {string} pattern the given pattern.
	 * @param {string[]} replacements a list of replacement which can be inserted into the given pattern.
	 * @returns {string} the pattern with all placeholders replaced with their corresponding replacements.
	 * @example replace(/a<<0>>a/.source, [/b+/.source]) === /a(?:b+)a/.source
	 */
	function replace(pattern, replacements) {
		return pattern.replace(/<<(\d+)>>/g, function (m, index) {
			return '(?:' + replacements[+index] + ')';
		});
	}
	/**
	 * @param {string} pattern
	 * @param {string[]} replacements
	 * @param {string} [flags]
	 * @returns {RegExp}
	 */
	function re(pattern, replacements, flags) {
		return RegExp(replace(pattern, replacements), flags || '');
	}

	/**
	 * Creates a nested pattern where all occurrences of the string `<<self>>` are replaced with the pattern itself.
	 *
	 * @param {string} pattern
	 * @param {number} depthLog2
	 * @returns {string}
	 */
	function nested(pattern, depthLog2) {
		for (var i = 0; i < depthLog2; i++) {
			pattern = pattern.replace(/<<self>>/g, function () { return '(?:' + pattern + ')'; });
		}
		return pattern.replace(/<<self>>/g, '[^\\s\\S]');
	}

	// https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/
	var keywordKinds = {
		// keywords which represent a return or variable type
		type: 'bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void',
		// keywords which are used to declare a type
		typeDeclaration: 'class enum interface record struct',
		// contextual keywords
		// ("var" and "dynamic" are missing because they are used like types)
		contextual: 'add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)',
		// all other keywords
		other: 'abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield'
	};

	// keywords
	function keywordsToPattern(words) {
		return '\\b(?:' + words.trim().replace(/ /g, '|') + ')\\b';
	}
	var typeDeclarationKeywords = keywordsToPattern(keywordKinds.typeDeclaration);
	var keywords = RegExp(keywordsToPattern(keywordKinds.type + ' ' + keywordKinds.typeDeclaration + ' ' + keywordKinds.contextual + ' ' + keywordKinds.other));
	var nonTypeKeywords = keywordsToPattern(keywordKinds.typeDeclaration + ' ' + keywordKinds.contextual + ' ' + keywordKinds.other);
	var nonContextualKeywords = keywordsToPattern(keywordKinds.type + ' ' + keywordKinds.typeDeclaration + ' ' + keywordKinds.other);

	// types
	var generic = nested(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source, 2); // the idea behind the other forbidden characters is to prevent false positives. Same for tupleElement.
	var nestedRound = nested(/\((?:[^()]|<<self>>)*\)/.source, 2);
	var name = /@?\b[A-Za-z_]\w*\b/.source;
	var genericName = replace(/<<0>>(?:\s*<<1>>)?/.source, [name, generic]);
	var identifier = replace(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source, [nonTypeKeywords, genericName]);
	var array = /\[\s*(?:,\s*)*\]/.source;
	var typeExpressionWithoutTuple = replace(/<<0>>(?:\s*(?:\?\s*)?<<1>>)*(?:\s*\?)?/.source, [identifier, array]);
	var tupleElement = replace(/[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source, [generic, nestedRound, array]);
	var tuple = replace(/\(<<0>>+(?:,<<0>>+)+\)/.source, [tupleElement]);
	var typeExpression = replace(/(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source, [tuple, identifier, array]);

	var typeInside = {
		'keyword': keywords,
		'punctuation': /[<>()?,.:[\]]/
	};

	// strings & characters
	// https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/lexical-structure#character-literals
	// https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/lexical-structure#string-literals
	var character = /'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source; // simplified pattern
	var regularString = /"(?:\\.|[^\\"\r\n])*"/.source;
	var verbatimString = /@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source;


	Prism.languages.csharp = Prism.languages.extend('clike', {
		'string': [
			{
				pattern: re(/(^|[^$\\])<<0>>/.source, [verbatimString]),
				lookbehind: true,
				greedy: true
			},
			{
				pattern: re(/(^|[^@$\\])<<0>>/.source, [regularString]),
				lookbehind: true,
				greedy: true
			}
		],
		'class-name': [
			{
				// Using static
				// using static System.Math;
				pattern: re(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source, [identifier]),
				lookbehind: true,
				inside: typeInside
			},
			{
				// Using alias (type)
				// using Project = PC.MyCompany.Project;
				pattern: re(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source, [name, typeExpression]),
				lookbehind: true,
				inside: typeInside
			},
			{
				// Using alias (alias)
				// using Project = PC.MyCompany.Project;
				pattern: re(/(\busing\s+)<<0>>(?=\s*=)/.source, [name]),
				lookbehind: true
			},
			{
				// Type declarations
				// class Foo<A, B>
				// interface Foo<out A, B>
				pattern: re(/(\b<<0>>\s+)<<1>>/.source, [typeDeclarationKeywords, genericName]),
				lookbehind: true,
				inside: typeInside
			},
			{
				// Single catch exception declaration
				// catch(Foo)
				// (things like catch(Foo e) is covered by variable declaration)
				pattern: re(/(\bcatch\s*\(\s*)<<0>>/.source, [identifier]),
				lookbehind: true,
				inside: typeInside
			},
			{
				// Name of the type parameter of generic constraints
				// where Foo : class
				pattern: re(/(\bwhere\s+)<<0>>/.source, [name]),
				lookbehind: true
			},
			{
				// Casts and checks via as and is.
				// as Foo<A>, is Bar<B>
				// (things like if(a is Foo b) is covered by variable declaration)
				pattern: re(/(\b(?:is(?:\s+not)?|as)\s+)<<0>>/.source, [typeExpressionWithoutTuple]),
				lookbehind: true,
				inside: typeInside
			},
			{
				// Variable, field and parameter declaration
				// (Foo bar, Bar baz, Foo[,,] bay, Foo<Bar, FooBar<Bar>> bax)
				pattern: re(/\b<<0>>(?=\s+(?!<<1>>|with\s*\{)<<2>>(?:\s*[=,;:{)\]]|\s+(?:in|when)\b))/.source, [typeExpression, nonContextualKeywords, name]),
				inside: typeInside
			}
		],
		'keyword': keywords,
		// https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/lexical-structure#literals
		'number': /(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,
		'operator': />>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,
		'punctuation': /\?\.?|::|[{}[\];(),.:]/
	});

	Prism.languages.insertBefore('csharp', 'number', {
		'range': {
			pattern: /\.\./,
			alias: 'operator'
		}
	});

	Prism.languages.insertBefore('csharp', 'punctuation', {
		'named-parameter': {
			pattern: re(/([(,]\s*)<<0>>(?=\s*:)/.source, [name]),
			lookbehind: true,
			alias: 'punctuation'
		}
	});

	Prism.languages.insertBefore('csharp', 'class-name', {
		'namespace': {
			// namespace Foo.Bar {}
			// using Foo.Bar;
			pattern: re(/(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/.source, [name]),
			lookbehind: true,
			inside: {
				'punctuation': /\./
			}
		},
		'type-expression': {
			// default(Foo), typeof(Foo<Bar>), sizeof(int)
			pattern: re(/(\b(?:default|sizeof|typeof)\s*\(\s*(?!\s))(?:[^()\s]|\s(?!\s)|<<0>>)*(?=\s*\))/.source, [nestedRound]),
			lookbehind: true,
			alias: 'class-name',
			inside: typeInside
		},
		'return-type': {
			// Foo<Bar> ForBar(); Foo IFoo.Bar() => 0
			// int this[int index] => 0; T IReadOnlyList<T>.this[int index] => this[index];
			// int Foo => 0; int Foo { get; set } = 0;
			pattern: re(/<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/.source, [typeExpression, identifier]),
			inside: typeInside,
			alias: 'class-name'
		},
		'constructor-invocation': {
			// new List<Foo<Bar[]>> { }
			pattern: re(/(\bnew\s+)<<0>>(?=\s*[[({])/.source, [typeExpression]),
			lookbehind: true,
			inside: typeInside,
			alias: 'class-name'
		},
		/*'explicit-implementation': {
			// int IFoo<Foo>.Bar => 0; void IFoo<Foo<Foo>>.Foo<T>();
			pattern: replace(/\b<<0>>(?=\.<<1>>)/, className, methodOrPropertyDeclaration),
			inside: classNameInside,
			alias: 'class-name'
		},*/
		'generic-method': {
			// foo<Bar>()
			pattern: re(/<<0>>\s*<<1>>(?=\s*\()/.source, [name, generic]),
			inside: {
				'function': re(/^<<0>>/.source, [name]),
				'generic': {
					pattern: RegExp(generic),
					alias: 'class-name',
					inside: typeInside
				}
			}
		},
		'type-list': {
			// The list of types inherited or of generic constraints
			// class Foo<F> : Bar, IList<FooBar>
			// where F : Bar, IList<int>
			pattern: re(
				/\b((?:<<0>>\s+<<1>>|record\s+<<1>>\s*<<5>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>|<<1>>\s*<<5>>|<<6>>)(?:\s*,\s*(?:<<3>>|<<4>>|<<6>>))*(?=\s*(?:where|[{;]|=>|$))/.source,
				[typeDeclarationKeywords, genericName, name, typeExpression, keywords.source, nestedRound, /\bnew\s*\(\s*\)/.source]
			),
			lookbehind: true,
			inside: {
				'record-arguments': {
					pattern: re(/(^(?!new\s*\()<<0>>\s*)<<1>>/.source, [genericName, nestedRound]),
					lookbehind: true,
					greedy: true,
					inside: Prism.languages.csharp
				},
				'keyword': keywords,
				'class-name': {
					pattern: RegExp(typeExpression),
					greedy: true,
					inside: typeInside
				},
				'punctuation': /[,()]/
			}
		},
		'preprocessor': {
			pattern: /(^[\t ]*)#.*/m,
			lookbehind: true,
			alias: 'property',
			inside: {
				// highlight preprocessor directives as keywords
				'directive': {
					pattern: /(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,
					lookbehind: true,
					alias: 'keyword'
				}
			}
		}
	});

	// attributes
	var regularStringOrCharacter = regularString + '|' + character;
	var regularStringCharacterOrComment = replace(/\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>/.source, [regularStringOrCharacter]);
	var roundExpression = nested(replace(/[^"'/()]|<<0>>|\(<<self>>*\)/.source, [regularStringCharacterOrComment]), 2);

	// https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/attributes/#attribute-targets
	var attrTarget = /\b(?:assembly|event|field|method|module|param|property|return|type)\b/.source;
	var attr = replace(/<<0>>(?:\s*\(<<1>>*\))?/.source, [identifier, roundExpression]);

	Prism.languages.insertBefore('csharp', 'class-name', {
		'attribute': {
			// Attributes
			// [Foo], [Foo(1), Bar(2, Prop = "foo")], [return: Foo(1), Bar(2)], [assembly: Foo(Bar)]
			pattern: re(/((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/.source, [attrTarget, attr]),
			lookbehind: true,
			greedy: true,
			inside: {
				'target': {
					pattern: re(/^<<0>>(?=\s*:)/.source, [attrTarget]),
					alias: 'keyword'
				},
				'attribute-arguments': {
					pattern: re(/\(<<0>>*\)/.source, [roundExpression]),
					inside: Prism.languages.csharp
				},
				'class-name': {
					pattern: RegExp(identifier),
					inside: {
						'punctuation': /\./
					}
				},
				'punctuation': /[:,]/
			}
		}
	});


	// string interpolation
	var formatString = /:[^}\r\n]+/.source;
	// multi line
	var mInterpolationRound = nested(replace(/[^"'/()]|<<0>>|\(<<self>>*\)/.source, [regularStringCharacterOrComment]), 2);
	var mInterpolation = replace(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source, [mInterpolationRound, formatString]);
	// single line
	var sInterpolationRound = nested(replace(/[^"'/()]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>|\(<<self>>*\)/.source, [regularStringOrCharacter]), 2);
	var sInterpolation = replace(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source, [sInterpolationRound, formatString]);

	function createInterpolationInside(interpolation, interpolationRound) {
		return {
			'interpolation': {
				pattern: re(/((?:^|[^{])(?:\{\{)*)<<0>>/.source, [interpolation]),
				lookbehind: true,
				inside: {
					'format-string': {
						pattern: re(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source, [interpolationRound, formatString]),
						lookbehind: true,
						inside: {
							'punctuation': /^:/
						}
					},
					'punctuation': /^\{|\}$/,
					'expression': {
						pattern: /[\s\S]+/,
						alias: 'language-csharp',
						inside: Prism.languages.csharp
					}
				}
			},
			'string': /[\s\S]+/
		};
	}

	Prism.languages.insertBefore('csharp', 'string', {
		'interpolation-string': [
			{
				pattern: re(/(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/.source, [mInterpolation]),
				lookbehind: true,
				greedy: true,
				inside: createInterpolationInside(mInterpolation, mInterpolationRound),
			},
			{
				pattern: re(/(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source, [sInterpolation]),
				lookbehind: true,
				greedy: true,
				inside: createInterpolationInside(sInterpolation, sInterpolationRound),
			}
		],
		'char': {
			pattern: RegExp(character),
			greedy: true
		}
	});

	Prism.languages.dotnet = Prism.languages.cs = Prism.languages.csharp;

}(Prism));

(function (Prism) {

	var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;

	Prism.languages.css = {
		'comment': /\/\*[\s\S]*?\*\//,
		'atrule': {
			pattern: RegExp('@[\\w-](?:' + /[^;{\s"']|\s+(?!\s)/.source + '|' + string.source + ')*?' + /(?:;|(?=\s*\{))/.source),
			inside: {
				'rule': /^@[\w-]+/,
				'selector-function-argument': {
					pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
					lookbehind: true,
					alias: 'selector'
				},
				'keyword': {
					pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
					lookbehind: true
				}
				// See rest below
			}
		},
		'url': {
			// https://drafts.csswg.org/css-values-3/#urls
			pattern: RegExp('\\burl\\((?:' + string.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
			greedy: true,
			inside: {
				'function': /^url/i,
				'punctuation': /^\(|\)$/,
				'string': {
					pattern: RegExp('^' + string.source + '$'),
					alias: 'url'
				}
			}
		},
		'selector': {
			pattern: RegExp('(^|[{}\\s])[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + string.source + ')*(?=\\s*\\{)'),
			lookbehind: true
		},
		'string': {
			pattern: string,
			greedy: true
		},
		'property': {
			pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
			lookbehind: true
		},
		'important': /!important\b/i,
		'function': {
			pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
			lookbehind: true
		},
		'punctuation': /[(){};:,]/
	};

	Prism.languages.css['atrule'].inside.rest = Prism.languages.css;

	var markup = Prism.languages.markup;
	if (markup) {
		markup.tag.addInlined('style', 'css');
		markup.tag.addAttribute('style', 'css');
	}

}(Prism));

(function (Prism) {

	var keywords = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/;

	// full package (optional) + parent classes (optional)
	var classNamePrefix = /(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source;

	// based on the java naming conventions
	var className = {
		pattern: RegExp(/(^|[^\w.])/.source + classNamePrefix + /[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),
		lookbehind: true,
		inside: {
			'namespace': {
				pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
				inside: {
					'punctuation': /\./
				}
			},
			'punctuation': /\./
		}
	};

	Prism.languages.java = Prism.languages.extend('clike', {
		'string': {
			pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,
			lookbehind: true,
			greedy: true
		},
		'class-name': [
			className,
			{
				// variables, parameters, and constructor references
				// this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
				pattern: RegExp(/(^|[^\w.])/.source + classNamePrefix + /[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),
				lookbehind: true,
				inside: className.inside
			},
			{
				// class names based on keyword
				// this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
				pattern: RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source + classNamePrefix + /[A-Z]\w*\b/.source),
				lookbehind: true,
				inside: className.inside
			}
		],
		'keyword': keywords,
		'function': [
			Prism.languages.clike.function,
			{
				pattern: /(::\s*)[a-z_]\w*/,
				lookbehind: true
			}
		],
		'number': /\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
		'operator': {
			pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
			lookbehind: true
		},
		'constant': /\b[A-Z][A-Z_\d]+\b/
	});

	Prism.languages.insertBefore('java', 'string', {
		'triple-quoted-string': {
			// http://openjdk.java.net/jeps/355#Description
			pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
			greedy: true,
			alias: 'string'
		},
		'char': {
			pattern: /'(?:\\.|[^'\\\r\n]){1,6}'/,
			greedy: true
		}
	});

	Prism.languages.insertBefore('java', 'class-name', {
		'annotation': {
			pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/,
			lookbehind: true,
			alias: 'punctuation'
		},
		'generics': {
			pattern: /<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,
			inside: {
				'class-name': className,
				'keyword': keywords,
				'punctuation': /[<>(),.:]/,
				'operator': /[?&|]/
			}
		},
		'import': [
			{
				pattern: RegExp(/(\bimport\s+)/.source + classNamePrefix + /(?:[A-Z]\w*|\*)(?=\s*;)/.source),
				lookbehind: true,
				inside: {
					'namespace': className.inside.namespace,
					'punctuation': /\./,
					'operator': /\*/,
					'class-name': /\w+/
				}
			},
			{
				pattern: RegExp(/(\bimport\s+static\s+)/.source + classNamePrefix + /(?:\w+|\*)(?=\s*;)/.source),
				lookbehind: true,
				alias: 'static',
				inside: {
					'namespace': className.inside.namespace,
					'static': /\b\w+$/,
					'punctuation': /\./,
					'operator': /\*/,
					'class-name': /\w+/
				}
			}
		],
		'namespace': {
			pattern: RegExp(
				/(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/
					.source.replace(/<keyword>/g, function () { return keywords.source; })),
			lookbehind: true,
			inside: {
				'punctuation': /\./,
			}
		}
	});
}(Prism));

Prism.languages.javascript = Prism.languages.extend('clike', {
	'class-name': [
		Prism.languages.clike['class-name'],
		{
			pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
			lookbehind: true
		}
	],
	'keyword': [
		{
			pattern: /((?:^|\})\s*)catch\b/,
			lookbehind: true
		},
		{
			pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
			lookbehind: true
		},
	],
	// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
	'function': /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
	'number': {
		pattern: RegExp(
			/(^|[^\w$])/.source +
			'(?:' +
			(
				// constant
				/NaN|Infinity/.source +
				'|' +
				// binary integer
				/0[bB][01]+(?:_[01]+)*n?/.source +
				'|' +
				// octal integer
				/0[oO][0-7]+(?:_[0-7]+)*n?/.source +
				'|' +
				// hexadecimal integer
				/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
				'|' +
				// decimal bigint
				/\d+(?:_\d+)*n/.source +
				'|' +
				// decimal number (integer or float) but no bigint
				/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source
			) +
			')' +
			/(?![\w$])/.source
		),
		lookbehind: true
	},
	'operator': /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
});

Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;

Prism.languages.insertBefore('javascript', 'keyword', {
	'regex': {
		pattern: RegExp(
			// lookbehind
			// eslint-disable-next-line regexp/no-dupe-characters-character-class
			/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source +
			// Regex pattern:
			// There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
			// classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
			// with the only syntax, so we have to define 2 different regex patterns.
			/\//.source +
			'(?:' +
			/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source +
			'|' +
			// `v` flag syntax. This supports 3 levels of nested character classes.
			/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source +
			')' +
			// lookahead
			/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
		),
		lookbehind: true,
		greedy: true,
		inside: {
			'regex-source': {
				pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
				lookbehind: true,
				alias: 'language-regex',
				inside: Prism.languages.regex
			},
			'regex-delimiter': /^\/|\/$/,
			'regex-flags': /^[a-z]+$/,
		}
	},
	// This must be declared before keyword because we use "function" inside the look-forward
	'function-variable': {
		pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
		alias: 'function'
	},
	'parameter': [
		{
			pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
			lookbehind: true,
			inside: Prism.languages.javascript
		}
	],
	'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});

Prism.languages.insertBefore('javascript', 'string', {
	'hashbang': {
		pattern: /^#!.*/,
		greedy: true,
		alias: 'comment'
	},
	'template-string': {
		pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
		greedy: true,
		inside: {
			'template-punctuation': {
				pattern: /^`|`$/,
				alias: 'string'
			},
			'interpolation': {
				pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
				lookbehind: true,
				inside: {
					'interpolation-punctuation': {
						pattern: /^\$\{|\}$/,
						alias: 'punctuation'
					},
					rest: Prism.languages.javascript
				}
			},
			'string': /[\s\S]+/
		}
	},
	'string-property': {
		pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
		lookbehind: true,
		greedy: true,
		alias: 'property'
	}
});

Prism.languages.insertBefore('javascript', 'operator', {
	'literal-property': {
		pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
		lookbehind: true,
		alias: 'property'
	},
});

if (Prism.languages.markup) {
	Prism.languages.markup.tag.addInlined('script', 'javascript');

	// add attribute support for all DOM events.
	// https://developer.mozilla.org/en-US/docs/Web/Events#Standard_events
	Prism.languages.markup.tag.addAttribute(
		/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
		'javascript'
	);
}

Prism.languages.js = Prism.languages.javascript;

Prism.languages.markup = {
	'comment': {
		pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
		greedy: true
	},
	'prolog': {
		pattern: /<\?[\s\S]+?\?>/,
		greedy: true
	},
	'doctype': {
		// https://www.w3.org/TR/xml/#NT-doctypedecl
		pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
		greedy: true,
		inside: {
			'internal-subset': {
				pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
				lookbehind: true,
				greedy: true,
				inside: null // see below
			},
			'string': {
				pattern: /"[^"]*"|'[^']*'/,
				greedy: true
			},
			'punctuation': /^<!|>$|[[\]]/,
			'doctype-tag': /^DOCTYPE/i,
			'name': /[^\s<>'"]+/
		}
	},
	'cdata': {
		pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
		greedy: true
	},
	'tag': {
		pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
		greedy: true,
		inside: {
			'tag': {
				pattern: /^<\/?[^\s>\/]+/,
				inside: {
					'punctuation': /^<\/?/,
					'namespace': /^[^\s>\/:]+:/
				}
			},
			'special-attr': [],
			'attr-value': {
				pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
				inside: {
					'punctuation': [
						{
							pattern: /^=/,
							alias: 'attr-equals'
						},
						{
							pattern: /^(\s*)["']|["']$/,
							lookbehind: true
						}
					]
				}
			},
			'punctuation': /\/?>/,
			'attr-name': {
				pattern: /[^\s>\/]+/,
				inside: {
					'namespace': /^[^\s>\/:]+:/
				}
			}

		}
	},
	'entity': [
		{
			pattern: /&[\da-z]{1,8};/i,
			alias: 'named-entity'
		},
		/&#x?[\da-f]{1,8};/i
	]
};

Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] =
	Prism.languages.markup['entity'];
Prism.languages.markup['doctype'].inside['internal-subset'].inside = Prism.languages.markup;

// Plugin to make entity title show the real entity, idea by Roman Komarov
Prism.hooks.add('wrap', function (env) {

	if (env.type === 'entity') {
		env.attributes['title'] = env.content.replace(/&amp;/, '&');
	}
});

Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
	/**
	 * Adds an inlined language to markup.
	 *
	 * An example of an inlined language is CSS with `<style>` tags.
	 *
	 * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
	 * case insensitive.
	 * @param {string} lang The language key.
	 * @example
	 * addInlined('style', 'css');
	 */
	value: function addInlined(tagName, lang) {
		var includedCdataInside = {};
		includedCdataInside['language-' + lang] = {
			pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
			lookbehind: true,
			inside: Prism.languages[lang]
		};
		includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;

		var inside = {
			'included-cdata': {
				pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
				inside: includedCdataInside
			}
		};
		inside['language-' + lang] = {
			pattern: /[\s\S]+/,
			inside: Prism.languages[lang]
		};

		var def = {};
		def[tagName] = {
			pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () { return tagName; }), 'i'),
			lookbehind: true,
			greedy: true,
			inside: inside
		};

		Prism.languages.insertBefore('markup', 'cdata', def);
	}
});
Object.defineProperty(Prism.languages.markup.tag, 'addAttribute', {
	/**
	 * Adds an pattern to highlight languages embedded in HTML attributes.
	 *
	 * An example of an inlined language is CSS with `style` attributes.
	 *
	 * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
	 * case insensitive.
	 * @param {string} lang The language key.
	 * @example
	 * addAttribute('style', 'css');
	 */
	value: function (attrName, lang) {
		Prism.languages.markup.tag.inside['special-attr'].push({
			pattern: RegExp(
				/(^|["'\s])/.source + '(?:' + attrName + ')' + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
				'i'
			),
			lookbehind: true,
			inside: {
				'attr-name': /^[^\s=]+/,
				'attr-value': {
					pattern: /=[\s\S]+/,
					inside: {
						'value': {
							pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
							lookbehind: true,
							alias: [lang, 'language-' + lang],
							inside: Prism.languages[lang]
						},
						'punctuation': [
							{
								pattern: /^=/,
								alias: 'attr-equals'
							},
							/"|'/
						]
					}
				}
			}
		});
	}
});

Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;

Prism.languages.xml = Prism.languages.extend('markup', {});
Prism.languages.ssml = Prism.languages.xml;
Prism.languages.atom = Prism.languages.xml;
Prism.languages.rss = Prism.languages.xml;

/**
 * Original by Aaron Harun: http://aahacreative.com/2012/07/31/php-syntax-highlighting-prism/
 * Modified by Miles Johnson: http://milesj.me
 * Rewritten by Tom Pavelec
 *
 * Supports PHP 5.3 - 8.0
 */
(function (Prism) {
	var comment = /\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/;
	var constant = [
		{
			pattern: /\b(?:false|true)\b/i,
			alias: 'boolean'
		},
		{
			pattern: /(::\s*)\b[a-z_]\w*\b(?!\s*\()/i,
			greedy: true,
			lookbehind: true,
		},
		{
			pattern: /(\b(?:case|const)\s+)\b[a-z_]\w*(?=\s*[;=])/i,
			greedy: true,
			lookbehind: true,
		},
		/\b(?:null)\b/i,
		/\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/,
	];
	var number = /\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[\da-f]+(?:_[\da-f]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i;
	var operator = /<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/;
	var punctuation = /[{}\[\](),:;]/;

	Prism.languages.php = {
		'delimiter': {
			pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i,
			alias: 'important'
		},
		'comment': comment,
		'variable': /\$+(?:\w+\b|(?=\{))/,
		'package': {
			pattern: /(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
			lookbehind: true,
			inside: {
				'punctuation': /\\/
			}
		},
		'class-name-definition': {
			pattern: /(\b(?:class|enum|interface|trait)\s+)\b[a-z_]\w*(?!\\)\b/i,
			lookbehind: true,
			alias: 'class-name'
		},
		'function-definition': {
			pattern: /(\bfunction\s+)[a-z_]\w*(?=\s*\()/i,
			lookbehind: true,
			alias: 'function'
		},
		'keyword': [
			{
				pattern: /(\(\s*)\b(?:array|bool|boolean|float|int|integer|object|string)\b(?=\s*\))/i,
				alias: 'type-casting',
				greedy: true,
				lookbehind: true
			},
			{
				pattern: /([(,?]\s*)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|object|self|static|string)\b(?=\s*\$)/i,
				alias: 'type-hint',
				greedy: true,
				lookbehind: true
			},
			{
				pattern: /(\)\s*:\s*(?:\?\s*)?)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|never|object|self|static|string|void)\b/i,
				alias: 'return-type',
				greedy: true,
				lookbehind: true
			},
			{
				pattern: /\b(?:array(?!\s*\()|bool|float|int|iterable|mixed|object|string|void)\b/i,
				alias: 'type-declaration',
				greedy: true
			},
			{
				pattern: /(\|\s*)(?:false|null)\b|\b(?:false|null)(?=\s*\|)/i,
				alias: 'type-declaration',
				greedy: true,
				lookbehind: true
			},
			{
				pattern: /\b(?:parent|self|static)(?=\s*::)/i,
				alias: 'static-context',
				greedy: true
			},
			{
				// yield from
				pattern: /(\byield\s+)from\b/i,
				lookbehind: true
			},
			// `class` is always a keyword unlike other keywords
			/\bclass\b/i,
			{
				// https://www.php.net/manual/en/reserved.keywords.php
				//
				// keywords cannot be preceded by "->"
				// the complex lookbehind means `(?<!(?:->|::)\s*)`
				pattern: /((?:^|[^\s>:]|(?:^|[^-])>|(?:^|[^:]):)\s*)\b(?:abstract|and|array|as|break|callable|case|catch|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|enum|eval|exit|extends|final|finally|fn|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|match|namespace|never|new|or|parent|print|private|protected|public|readonly|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield|__halt_compiler)\b/i,
				lookbehind: true
			}
		],
		'argument-name': {
			pattern: /([(,]\s*)\b[a-z_]\w*(?=\s*:(?!:))/i,
			lookbehind: true
		},
		'class-name': [
			{
				pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i,
				greedy: true,
				lookbehind: true
			},
			{
				pattern: /(\|\s*)\b[a-z_]\w*(?!\\)\b/i,
				greedy: true,
				lookbehind: true
			},
			{
				pattern: /\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i,
				greedy: true
			},
			{
				pattern: /(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i,
				alias: 'class-name-fully-qualified',
				greedy: true,
				lookbehind: true,
				inside: {
					'punctuation': /\\/
				}
			},
			{
				pattern: /(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i,
				alias: 'class-name-fully-qualified',
				greedy: true,
				inside: {
					'punctuation': /\\/
				}
			},
			{
				pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
				alias: 'class-name-fully-qualified',
				greedy: true,
				lookbehind: true,
				inside: {
					'punctuation': /\\/
				}
			},
			{
				pattern: /\b[a-z_]\w*(?=\s*\$)/i,
				alias: 'type-declaration',
				greedy: true
			},
			{
				pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
				alias: ['class-name-fully-qualified', 'type-declaration'],
				greedy: true,
				inside: {
					'punctuation': /\\/
				}
			},
			{
				pattern: /\b[a-z_]\w*(?=\s*::)/i,
				alias: 'static-context',
				greedy: true
			},
			{
				pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*::)/i,
				alias: ['class-name-fully-qualified', 'static-context'],
				greedy: true,
				inside: {
					'punctuation': /\\/
				}
			},
			{
				pattern: /([(,?]\s*)[a-z_]\w*(?=\s*\$)/i,
				alias: 'type-hint',
				greedy: true,
				lookbehind: true
			},
			{
				pattern: /([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
				alias: ['class-name-fully-qualified', 'type-hint'],
				greedy: true,
				lookbehind: true,
				inside: {
					'punctuation': /\\/
				}
			},
			{
				pattern: /(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i,
				alias: 'return-type',
				greedy: true,
				lookbehind: true
			},
			{
				pattern: /(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
				alias: ['class-name-fully-qualified', 'return-type'],
				greedy: true,
				lookbehind: true,
				inside: {
					'punctuation': /\\/
				}
			}
		],
		'constant': constant,
		'function': {
			pattern: /(^|[^\\\w])\\?[a-z_](?:[\w\\]*\w)?(?=\s*\()/i,
			lookbehind: true,
			inside: {
				'punctuation': /\\/
			}
		},
		'property': {
			pattern: /(->\s*)\w+/,
			lookbehind: true
		},
		'number': number,
		'operator': operator,
		'punctuation': punctuation
	};

	var string_interpolation = {
		pattern: /\{\$(?:\{(?:\{[^{}]+\}|[^{}]+)\}|[^{}])+\}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)?)/,
		lookbehind: true,
		inside: Prism.languages.php
	};

	var string = [
		{
			pattern: /<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,
			alias: 'nowdoc-string',
			greedy: true,
			inside: {
				'delimiter': {
					pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
					alias: 'symbol',
					inside: {
						'punctuation': /^<<<'?|[';]$/
					}
				}
			}
		},
		{
			pattern: /<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,
			alias: 'heredoc-string',
			greedy: true,
			inside: {
				'delimiter': {
					pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
					alias: 'symbol',
					inside: {
						'punctuation': /^<<<"?|[";]$/
					}
				},
				'interpolation': string_interpolation
			}
		},
		{
			pattern: /`(?:\\[\s\S]|[^\\`])*`/,
			alias: 'backtick-quoted-string',
			greedy: true
		},
		{
			pattern: /'(?:\\[\s\S]|[^\\'])*'/,
			alias: 'single-quoted-string',
			greedy: true
		},
		{
			pattern: /"(?:\\[\s\S]|[^\\"])*"/,
			alias: 'double-quoted-string',
			greedy: true,
			inside: {
				'interpolation': string_interpolation
			}
		}
	];

	Prism.languages.insertBefore('php', 'variable', {
		'string': string,
		'attribute': {
			pattern: /#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im,
			greedy: true,
			inside: {
				'attribute-content': {
					pattern: /^(#\[)[\s\S]+(?=\]$)/,
					lookbehind: true,
					// inside can appear subset of php
					inside: {
						'comment': comment,
						'string': string,
						'attribute-class-name': [
							{
								pattern: /([^:]|^)\b[a-z_]\w*(?!\\)\b/i,
								alias: 'class-name',
								greedy: true,
								lookbehind: true
							},
							{
								pattern: /([^:]|^)(?:\\?\b[a-z_]\w*)+/i,
								alias: [
									'class-name',
									'class-name-fully-qualified'
								],
								greedy: true,
								lookbehind: true,
								inside: {
									'punctuation': /\\/
								}
							}
						],
						'constant': constant,
						'number': number,
						'operator': operator,
						'punctuation': punctuation
					}
				},
				'delimiter': {
					pattern: /^#\[|\]$/,
					alias: 'punctuation'
				}
			}
		},
	});

	Prism.hooks.add('before-tokenize', function (env) {
		if (!/<\?/.test(env.code)) {
			return;
		}

		var phpPattern = /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/g;
		Prism.languages['markup-templating'].buildPlaceholders(env, 'php', phpPattern);
	});

	Prism.hooks.add('after-tokenize', function (env) {
		Prism.languages['markup-templating'].tokenizePlaceholders(env, 'php');
	});

}(Prism));

Prism.languages.python = {
	'comment': {
		pattern: /(^|[^\\])#.*/,
		lookbehind: true,
		greedy: true
	},
	'string-interpolation': {
		pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
		greedy: true,
		inside: {
			'interpolation': {
				// "{" <expression> <optional "!s", "!r", or "!a"> <optional ":" format specifier> "}"
				pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
				lookbehind: true,
				inside: {
					'format-spec': {
						pattern: /(:)[^:(){}]+(?=\}$)/,
						lookbehind: true
					},
					'conversion-option': {
						pattern: /![sra](?=[:}]$)/,
						alias: 'punctuation'
					},
					rest: null
				}
			},
			'string': /[\s\S]+/
		}
	},
	'triple-quoted-string': {
		pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
		greedy: true,
		alias: 'string'
	},
	'string': {
		pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
		greedy: true
	},
	'function': {
		pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
		lookbehind: true
	},
	'class-name': {
		pattern: /(\bclass\s+)\w+/i,
		lookbehind: true
	},
	'decorator': {
		pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
		lookbehind: true,
		alias: ['annotation', 'punctuation'],
		inside: {
			'punctuation': /\./
		}
	},
	'keyword': /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
	'builtin': /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
	'boolean': /\b(?:False|None|True)\b/,
	'number': /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
	'operator': /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
	'punctuation': /[{}[\];(),.:]/
};

Prism.languages.python['string-interpolation'].inside['interpolation'].inside.rest = Prism.languages.python;

Prism.languages.py = Prism.languages.python;

/**
 * Original by Samuel Flores
 *
 * Adds the following new token classes:
 *     constant, builtin, variable, symbol, regex
 */
(function (Prism) {
	Prism.languages.ruby = Prism.languages.extend('clike', {
		'comment': {
			pattern: /#.*|^=begin\s[\s\S]*?^=end/m,
			greedy: true
		},
		'class-name': {
			pattern: /(\b(?:class|module)\s+|\bcatch\s+\()[\w.\\]+|\b[A-Z_]\w*(?=\s*\.\s*new\b)/,
			lookbehind: true,
			inside: {
				'punctuation': /[.\\]/
			}
		},
		'keyword': /\b(?:BEGIN|END|alias|and|begin|break|case|class|def|define_method|defined|do|each|else|elsif|end|ensure|extend|for|if|in|include|module|new|next|nil|not|or|prepend|private|protected|public|raise|redo|require|rescue|retry|return|self|super|then|throw|undef|unless|until|when|while|yield)\b/,
		'operator': /\.{2,3}|&\.|===|<?=>|[!=]?~|(?:&&|\|\||<<|>>|\*\*|[+\-*/%<>!^&|=])=?|[?:]/,
		'punctuation': /[(){}[\].,;]/,
	});

	Prism.languages.insertBefore('ruby', 'operator', {
		'double-colon': {
			pattern: /::/,
			alias: 'punctuation'
		},
	});

	var interpolation = {
		pattern: /((?:^|[^\\])(?:\\{2})*)#\{(?:[^{}]|\{[^{}]*\})*\}/,
		lookbehind: true,
		inside: {
			'content': {
				pattern: /^(#\{)[\s\S]+(?=\}$)/,
				lookbehind: true,
				inside: Prism.languages.ruby
			},
			'delimiter': {
				pattern: /^#\{|\}$/,
				alias: 'punctuation'
			}
		}
	};

	delete Prism.languages.ruby.function;

	var percentExpression = '(?:' + [
		/([^a-zA-Z0-9\s{(\[<=])(?:(?!\1)[^\\]|\\[\s\S])*\1/.source,
		/\((?:[^()\\]|\\[\s\S]|\((?:[^()\\]|\\[\s\S])*\))*\)/.source,
		/\{(?:[^{}\\]|\\[\s\S]|\{(?:[^{}\\]|\\[\s\S])*\})*\}/.source,
		/\[(?:[^\[\]\\]|\\[\s\S]|\[(?:[^\[\]\\]|\\[\s\S])*\])*\]/.source,
		/<(?:[^<>\\]|\\[\s\S]|<(?:[^<>\\]|\\[\s\S])*>)*>/.source
	].join('|') + ')';

	var symbolName = /(?:"(?:\\.|[^"\\\r\n])*"|(?:\b[a-zA-Z_]\w*|[^\s\0-\x7F]+)[?!]?|\$.)/.source;

	Prism.languages.insertBefore('ruby', 'keyword', {
		'regex-literal': [
			{
				pattern: RegExp(/%r/.source + percentExpression + /[egimnosux]{0,6}/.source),
				greedy: true,
				inside: {
					'interpolation': interpolation,
					'regex': /[\s\S]+/
				}
			},
			{
				pattern: /(^|[^/])\/(?!\/)(?:\[[^\r\n\]]+\]|\\.|[^[/\\\r\n])+\/[egimnosux]{0,6}(?=\s*(?:$|[\r\n,.;})#]))/,
				lookbehind: true,
				greedy: true,
				inside: {
					'interpolation': interpolation,
					'regex': /[\s\S]+/
				}
			}
		],
		'variable': /[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/,
		'symbol': [
			{
				pattern: RegExp(/(^|[^:]):/.source + symbolName),
				lookbehind: true,
				greedy: true
			},
			{
				pattern: RegExp(/([\r\n{(,][ \t]*)/.source + symbolName + /(?=:(?!:))/.source),
				lookbehind: true,
				greedy: true
			},
		],
		'method-definition': {
			pattern: /(\bdef\s+)\w+(?:\s*\.\s*\w+)?/,
			lookbehind: true,
			inside: {
				'function': /\b\w+$/,
				'keyword': /^self\b/,
				'class-name': /^\w+/,
				'punctuation': /\./
			}
		}
	});

	Prism.languages.insertBefore('ruby', 'string', {
		'string-literal': [
			{
				pattern: RegExp(/%[qQiIwWs]?/.source + percentExpression),
				greedy: true,
				inside: {
					'interpolation': interpolation,
					'string': /[\s\S]+/
				}
			},
			{
				pattern: /("|')(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|(?!\1)[^\\#\r\n])*\1/,
				greedy: true,
				inside: {
					'interpolation': interpolation,
					'string': /[\s\S]+/
				}
			},
			{
				pattern: /<<[-~]?([a-z_]\w*)[\r\n](?:.*[\r\n])*?[\t ]*\1/i,
				alias: 'heredoc-string',
				greedy: true,
				inside: {
					'delimiter': {
						pattern: /^<<[-~]?[a-z_]\w*|\b[a-z_]\w*$/i,
						inside: {
							'symbol': /\b\w+/,
							'punctuation': /^<<[-~]?/
						}
					},
					'interpolation': interpolation,
					'string': /[\s\S]+/
				}
			},
			{
				pattern: /<<[-~]?'([a-z_]\w*)'[\r\n](?:.*[\r\n])*?[\t ]*\1/i,
				alias: 'heredoc-string',
				greedy: true,
				inside: {
					'delimiter': {
						pattern: /^<<[-~]?'[a-z_]\w*'|\b[a-z_]\w*$/i,
						inside: {
							'symbol': /\b\w+/,
							'punctuation': /^<<[-~]?'|'$/,
						}
					},
					'string': /[\s\S]+/
				}
			}
		],
		'command-literal': [
			{
				pattern: RegExp(/%x/.source + percentExpression),
				greedy: true,
				inside: {
					'interpolation': interpolation,
					'command': {
						pattern: /[\s\S]+/,
						alias: 'string'
					}
				}
			},
			{
				pattern: /`(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|[^\\`#\r\n])*`/,
				greedy: true,
				inside: {
					'interpolation': interpolation,
					'command': {
						pattern: /[\s\S]+/,
						alias: 'string'
					}
				}
			}
		]
	});

	delete Prism.languages.ruby.string;

	Prism.languages.insertBefore('ruby', 'number', {
		'builtin': /\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Fixnum|Float|Hash|IO|Integer|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|Stat|String|Struct|Symbol|TMS|Thread|ThreadGroup|Time|TrueClass)\b/,
		'constant': /\b[A-Z][A-Z0-9_]*(?:[?!]|\b)/
	});

	Prism.languages.rb = Prism.languages.ruby;
}(Prism));

// restore the original Prism reference
window.Prism = oldprism;
return Prism;
}(undefined, undefined, undefined);
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prismjs);

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
"./src/plugins/codesample/main/ts/Plugin.ts": 
/*!**************************************************!*\
  !*** ./src/plugins/codesample/main/ts/Plugin.ts ***!
  \**************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var tinymce_core_api_PluginManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/PluginManager */ "./lib/globals/tinymce/core/api/PluginManager.js");
/* ESM import */var _api_Commands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/Commands */ "./src/plugins/codesample/main/ts/api/Commands.ts");
/* ESM import */var _api_Options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/Options */ "./src/plugins/codesample/main/ts/api/Options.ts");
/* ESM import */var _core_FilterContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/FilterContent */ "./src/plugins/codesample/main/ts/core/FilterContent.ts");
/* ESM import */var _ui_Buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/Buttons */ "./src/plugins/codesample/main/ts/ui/Buttons.ts");
/* ESM import */var _ui_Dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/Dialog */ "./src/plugins/codesample/main/ts/ui/Dialog.ts");
/* ESM import */var _util_Utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util/Utils */ "./src/plugins/codesample/main/ts/util/Utils.ts");







/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>{
    tinymce_core_api_PluginManager__WEBPACK_IMPORTED_MODULE_0__["default"].add('codesample', (editor)=>{
        _api_Options__WEBPACK_IMPORTED_MODULE_2__.register(editor);
        _core_FilterContent__WEBPACK_IMPORTED_MODULE_3__.setup(editor);
        _ui_Buttons__WEBPACK_IMPORTED_MODULE_4__.register(editor);
        _api_Commands__WEBPACK_IMPORTED_MODULE_1__.register(editor);
        editor.on('dblclick', (ev)=>{
            if (_util_Utils__WEBPACK_IMPORTED_MODULE_6__.isCodeSample(ev.target)) {
                _ui_Dialog__WEBPACK_IMPORTED_MODULE_5__.open(editor);
            }
        });
    });
});


}),
"./src/plugins/codesample/main/ts/api/Commands.ts": 
/*!********************************************************!*\
  !*** ./src/plugins/codesample/main/ts/api/Commands.ts ***!
  \********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  register: () => (register)
});
/* ESM import */var _ui_Dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/Dialog */ "./src/plugins/codesample/main/ts/ui/Dialog.ts");
/* ESM import */var _util_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Utils */ "./src/plugins/codesample/main/ts/util/Utils.ts");


const register = (editor)=>{
    editor.addCommand('codesample', ()=>{
        const node = editor.selection.getNode();
        if (editor.selection.isCollapsed() || _util_Utils__WEBPACK_IMPORTED_MODULE_1__.isCodeSample(node)) {
            _ui_Dialog__WEBPACK_IMPORTED_MODULE_0__.open(editor);
        } else {
            editor.formatter.toggle('code');
        }
    });
};



}),
"./src/plugins/codesample/main/ts/api/Options.ts": 
/*!*******************************************************!*\
  !*** ./src/plugins/codesample/main/ts/api/Options.ts ***!
  \*******************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getLanguages: () => (getLanguages),
  register: () => (register),
  useGlobalPrismJS: () => (useGlobalPrismJS)
});
const option = (name)=>(editor)=>editor.options.get(name);
const register = (editor)=>{
    const registerOption = editor.options.register;
    registerOption('codesample_languages', {
        processor: 'object[]'
    });
    registerOption('codesample_global_prismjs', {
        processor: 'boolean',
        default: false
    });
};
const getLanguages = option('codesample_languages');
const useGlobalPrismJS = option('codesample_global_prismjs');



}),
"./src/plugins/codesample/main/ts/core/CodeSample.ts": 
/*!***********************************************************!*\
  !*** ./src/plugins/codesample/main/ts/core/CodeSample.ts ***!
  \***********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getCurrentCode: () => (getCurrentCode),
  getSelectedCodeSample: () => (getSelectedCodeSample),
  insertCodeSample: () => (insertCodeSample)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Optional.ts");
/* ESM import */var tinymce_core_api_dom_DOMUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/dom/DOMUtils */ "./lib/globals/tinymce/core/api/dom/DOMUtils.js");
/* ESM import */var _prism_Prism__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../prism/Prism */ "./src/plugins/codesample/main/ts/prism/Prism.ts");
/* ESM import */var _util_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/Utils */ "./src/plugins/codesample/main/ts/util/Utils.ts");




const getSelectedCodeSample = (editor)=>{
    const node = editor.selection ? editor.selection.getNode() : null;
    return _util_Utils__WEBPACK_IMPORTED_MODULE_2__.isCodeSample(node) ? _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__.Optional.some(node) : _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__.Optional.none();
};
const insertCodeSample = (editor, language, code)=>{
    const dom = editor.dom;
    editor.undoManager.transact(()=>{
        const node = getSelectedCodeSample(editor);
        code = tinymce_core_api_dom_DOMUtils__WEBPACK_IMPORTED_MODULE_0__["default"].DOM.encode(code);
        return node.fold(()=>{
            editor.insertContent('<pre id="__new" class="language-' + language + '">' + code + '</pre>');
            const newPre = dom.select('#__new')[0];
            dom.setAttrib(newPre, 'id', null);
            editor.selection.select(newPre);
        }, (n)=>{
            dom.setAttrib(n, 'class', 'language-' + language);
            n.innerHTML = code;
            _prism_Prism__WEBPACK_IMPORTED_MODULE_1__.get(editor).highlightElement(n);
            editor.selection.select(n);
        });
    });
};
const getCurrentCode = (editor)=>{
    const node = getSelectedCodeSample(editor);
    return node.bind((n)=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_3__.Optional.from(n.textContent)).getOr('');
};



}),
"./src/plugins/codesample/main/ts/core/FilterContent.ts": 
/*!**************************************************************!*\
  !*** ./src/plugins/codesample/main/ts/core/FilterContent.ts ***!
  \**************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  setup: () => (setup)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Strings.ts");
/* ESM import */var tinymce_core_api_util_Tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/core/api/util/Tools */ "./lib/globals/tinymce/core/api/util/Tools.js");
/* ESM import */var _prism_Prism__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../prism/Prism */ "./src/plugins/codesample/main/ts/prism/Prism.ts");
/* ESM import */var _util_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/Utils */ "./src/plugins/codesample/main/ts/util/Utils.ts");




const setup = (editor)=>{
    editor.on('PreProcess', (e)=>{
        const dom = editor.dom;
        const pres = dom.select('pre[contenteditable=false]', e.node);
        tinymce_core_api_util_Tools__WEBPACK_IMPORTED_MODULE_0__["default"].each(tinymce_core_api_util_Tools__WEBPACK_IMPORTED_MODULE_0__["default"].grep(pres, _util_Utils__WEBPACK_IMPORTED_MODULE_2__.isCodeSample), (elm)=>{
            const code = elm.textContent;
            dom.setAttrib(elm, 'class', _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__.trim(dom.getAttrib(elm, 'class')));
            dom.setAttrib(elm, 'contentEditable', null);
            dom.setAttrib(elm, 'data-mce-highlighted', null);
            // Empty the pre element
            let child;
            while(child = elm.firstChild){
                elm.removeChild(child);
            }
            const codeElm = dom.add(elm, 'code');
            // Needs to be textContent since innerText produces BR:s
            codeElm.textContent = code;
        });
    });
    editor.on('SetContent', ()=>{
        const dom = editor.dom;
        const unprocessedCodeSamples = tinymce_core_api_util_Tools__WEBPACK_IMPORTED_MODULE_0__["default"].grep(dom.select('pre'), (elm)=>{
            return _util_Utils__WEBPACK_IMPORTED_MODULE_2__.isCodeSample(elm) && dom.getAttrib(elm, 'data-mce-highlighted') !== 'true';
        });
        if (unprocessedCodeSamples.length) {
            editor.undoManager.transact(()=>{
                tinymce_core_api_util_Tools__WEBPACK_IMPORTED_MODULE_0__["default"].each(unprocessedCodeSamples, (elm)=>{
                    tinymce_core_api_util_Tools__WEBPACK_IMPORTED_MODULE_0__["default"].each(dom.select('br', elm), (elm)=>{
                        dom.replace(editor.getDoc().createTextNode('\n'), elm);
                    });
                    elm.innerHTML = dom.encode(elm.textContent ?? '');
                    _prism_Prism__WEBPACK_IMPORTED_MODULE_1__.get(editor).highlightElement(elm);
                    dom.setAttrib(elm, 'data-mce-highlighted', true);
                    elm.className = _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__.trim(elm.className);
                });
            });
        }
    });
    editor.on('PreInit', ()=>{
        editor.parser.addNodeFilter('pre', (nodes)=>{
            for(let i = 0, l = nodes.length; i < l; i++){
                const node = nodes[i];
                const isCodeSample = (node.attr('class') ?? '').indexOf('language-') !== -1;
                if (isCodeSample) {
                    node.attr('contenteditable', 'false');
                    node.attr('data-mce-highlighted', 'false');
                }
            }
        });
    });
};



}),
"./src/plugins/codesample/main/ts/core/Languages.ts": 
/*!**********************************************************!*\
  !*** ./src/plugins/codesample/main/ts/core/Languages.ts ***!
  \**********************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getCurrentLanguage: () => (getCurrentLanguage),
  getLanguages: () => (getLanguages)
});
/* ESM import */var _api_Options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/Options */ "./src/plugins/codesample/main/ts/api/Options.ts");
/* ESM import */var _CodeSample__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CodeSample */ "./src/plugins/codesample/main/ts/core/CodeSample.ts");


const getLanguages = (editor)=>{
    const defaultLanguages = [
        {
            text: 'HTML/XML',
            value: 'markup'
        },
        {
            text: 'JavaScript',
            value: 'javascript'
        },
        {
            text: 'CSS',
            value: 'css'
        },
        {
            text: 'PHP',
            value: 'php'
        },
        {
            text: 'Ruby',
            value: 'ruby'
        },
        {
            text: 'Python',
            value: 'python'
        },
        {
            text: 'Java',
            value: 'java'
        },
        {
            text: 'C',
            value: 'c'
        },
        {
            text: 'C#',
            value: 'csharp'
        },
        {
            text: 'C++',
            value: 'cpp'
        }
    ];
    const customLanguages = _api_Options__WEBPACK_IMPORTED_MODULE_0__.getLanguages(editor);
    return customLanguages ? customLanguages : defaultLanguages;
};
const getCurrentLanguage = (editor, fallback)=>{
    const node = _CodeSample__WEBPACK_IMPORTED_MODULE_1__.getSelectedCodeSample(editor);
    return node.fold(()=>fallback, (n)=>{
        const matches = n.className.match(/language-(\w+)/);
        return matches ? matches[1] : fallback;
    });
};



}),
"./src/plugins/codesample/main/ts/prism/Prism.ts": 
/*!*******************************************************!*\
  !*** ./src/plugins/codesample/main/ts/prism/Prism.ts ***!
  \*******************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  get: () => (get)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Global.ts");
/* ESM import */var prismjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prismjs */ "../../node_modules/prismjs/prism.js");
/* ESM import */var _api_Options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/Options */ "./src/plugins/codesample/main/ts/api/Options.ts");



const get = (editor)=>_ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.Global.Prism && _api_Options__WEBPACK_IMPORTED_MODULE_1__.useGlobalPrismJS(editor) ? _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.Global.Prism : prismjs__WEBPACK_IMPORTED_MODULE_0__["default"];



}),
"./src/plugins/codesample/main/ts/ui/Buttons.ts": 
/*!******************************************************!*\
  !*** ./src/plugins/codesample/main/ts/ui/Buttons.ts ***!
  \******************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  register: () => (register)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Fun.ts");

const onSetupEditable = (editor, onChanged = _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.noop)=>(api)=>{
        const nodeChanged = ()=>{
            api.setEnabled(editor.selection.isEditable());
            onChanged(api);
        };
        editor.on('NodeChange', nodeChanged);
        nodeChanged();
        return ()=>{
            editor.off('NodeChange', nodeChanged);
        };
    };
const isCodeSampleSelection = (editor)=>{
    const node = editor.selection.getStart();
    return editor.dom.is(node, 'pre[class*="language-"]');
};
const register = (editor)=>{
    const onAction = ()=>editor.execCommand('codesample');
    editor.ui.registry.addToggleButton('codesample', {
        icon: 'code-sample',
        tooltip: 'Insert/edit code sample',
        onAction,
        onSetup: onSetupEditable(editor, (api)=>{
            api.setActive(isCodeSampleSelection(editor));
        })
    });
    editor.ui.registry.addMenuItem('codesample', {
        text: 'Code sample...',
        icon: 'code-sample',
        onAction,
        onSetup: onSetupEditable(editor)
    });
};



}),
"./src/plugins/codesample/main/ts/ui/Dialog.ts": 
/*!*****************************************************!*\
  !*** ./src/plugins/codesample/main/ts/ui/Dialog.ts ***!
  \*****************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  open: () => (open)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Arr.ts");
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Fun.ts");
/* ESM import */var _core_CodeSample__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/CodeSample */ "./src/plugins/codesample/main/ts/core/CodeSample.ts");
/* ESM import */var _core_Languages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Languages */ "./src/plugins/codesample/main/ts/core/Languages.ts");



const open = (editor)=>{
    const languages = _core_Languages__WEBPACK_IMPORTED_MODULE_1__.getLanguages(editor);
    const defaultLanguage = _ephox_katamari__WEBPACK_IMPORTED_MODULE_2__.head(languages).fold(_ephox_katamari__WEBPACK_IMPORTED_MODULE_3__.constant(''), (l)=>l.value);
    const currentLanguage = _core_Languages__WEBPACK_IMPORTED_MODULE_1__.getCurrentLanguage(editor, defaultLanguage);
    const currentCode = _core_CodeSample__WEBPACK_IMPORTED_MODULE_0__.getCurrentCode(editor);
    editor.windowManager.open({
        title: 'Insert/Edit Code Sample',
        size: 'large',
        body: {
            type: 'panel',
            items: [
                {
                    type: 'listbox',
                    name: 'language',
                    label: 'Language',
                    items: languages
                },
                {
                    type: 'textarea',
                    name: 'code',
                    label: 'Code view',
                    spellcheck: false
                }
            ]
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
        initialData: {
            language: currentLanguage,
            code: currentCode
        },
        onSubmit: (api)=>{
            const data = api.getData();
            _core_CodeSample__WEBPACK_IMPORTED_MODULE_0__.insertCodeSample(editor, data.language, data.code);
            api.close();
        }
    });
};



}),
"./src/plugins/codesample/main/ts/util/Utils.ts": 
/*!******************************************************!*\
  !*** ./src/plugins/codesample/main/ts/util/Utils.ts ***!
  \******************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  isCodeSample: () => (isCodeSample),
  trimArg: () => (trimArg)
});
/* ESM import */var _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ephox/katamari */ "../katamari/src/main/ts/ephox/katamari/api/Type.ts");

const isCodeSample = (elm)=>{
    return _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__.isNonNullable(elm) && elm.nodeName === 'PRE' && elm.className.indexOf('language-') !== -1;
};
const trimArg = (predicateFn)=>{
    return (arg1, arg2)=>{
        return predicateFn(arg2);
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

/*!************************************************!*\
  !*** ./src/plugins/codesample/main/ts/Main.ts ***!
  \************************************************/
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _Plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Plugin */ "./src/plugins/codesample/main/ts/Plugin.ts");

(0,_Plugin__WEBPACK_IMPORTED_MODULE_0__["default"])(); /** *****
 * DO NOT EXPORT ANYTHING
 *
 * IF YOU DO ROLLUP WILL LEAVE A GLOBAL ON THE PAGE
 *******/ 

})();

})()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdGlueW1jZS9wbHVnaW5zL2NvZGVzYW1wbGUvcGx1Z2luLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGlueW1jZS8uL2xpYi9nbG9iYWxzL3RpbnltY2UvY29yZS9hcGkvUGx1Z2luTWFuYWdlci5qcyIsIndlYnBhY2s6Ly90aW55bWNlLy4vbGliL2dsb2JhbHMvdGlueW1jZS9jb3JlL2FwaS9kb20vRE9NVXRpbHMuanMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL2xpYi9nbG9iYWxzL3RpbnltY2UvY29yZS9hcGkvdXRpbC9Ub29scy5qcyIsIndlYnBhY2s6Ly90aW55bWNlLy4uLy4uL25vZGVfbW9kdWxlcy9wcmlzbWpzL3ByaXNtLmpzIiwid2VicGFjazovL3RpbnltY2UvLi4va2F0YW1hcmkvc3JjL21haW4vdHMvZXBob3gva2F0YW1hcmkvYXBpL0Fyci50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL2thdGFtYXJpL3NyYy9tYWluL3RzL2VwaG94L2thdGFtYXJpL2FwaS9GdW4udHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9rYXRhbWFyaS9zcmMvbWFpbi90cy9lcGhveC9rYXRhbWFyaS9hcGkvR2xvYmFsLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4va2F0YW1hcmkvc3JjL21haW4vdHMvZXBob3gva2F0YW1hcmkvYXBpL09wdGlvbmFsLnRzIiwid2VicGFjazovL3RpbnltY2UvLi4va2F0YW1hcmkvc3JjL21haW4vdHMvZXBob3gva2F0YW1hcmkvYXBpL1N0cmluZ3MudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi9rYXRhbWFyaS9zcmMvbWFpbi90cy9lcGhveC9rYXRhbWFyaS9hcGkvVHlwZS50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uL2thdGFtYXJpL3NyYy9tYWluL3RzL2VwaG94L2thdGFtYXJpL3N0ci9TdHJBcHBlbmQudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL2NvZGVzYW1wbGUvbWFpbi90cy9QbHVnaW4udHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL2NvZGVzYW1wbGUvbWFpbi90cy9hcGkvQ29tbWFuZHMudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL2NvZGVzYW1wbGUvbWFpbi90cy9hcGkvT3B0aW9ucy50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvY29kZXNhbXBsZS9tYWluL3RzL2NvcmUvQ29kZVNhbXBsZS50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvY29kZXNhbXBsZS9tYWluL3RzL2NvcmUvRmlsdGVyQ29udGVudC50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4vc3JjL3BsdWdpbnMvY29kZXNhbXBsZS9tYWluL3RzL2NvcmUvTGFuZ3VhZ2VzLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9jb2Rlc2FtcGxlL21haW4vdHMvcHJpc20vUHJpc20udHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL2NvZGVzYW1wbGUvbWFpbi90cy91aS9CdXR0b25zLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9jb2Rlc2FtcGxlL21haW4vdHMvdWkvRGlhbG9nLnRzIiwid2VicGFjazovL3RpbnltY2UvLi9zcmMvcGx1Z2lucy9jb2Rlc2FtcGxlL21haW4vdHMvdXRpbC9VdGlscy50cyIsIndlYnBhY2s6Ly90aW55bWNlLy4uLy4uL25vZGVfbW9kdWxlcy9AZXBob3gvZGlzcHV0ZS9zcmMvbWFpbi90cy9hcGkvRXEudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi8uLi9ub2RlX21vZHVsZXMvQGVwaG94L2Rpc3B1dGUvc3JjL21haW4vdHMvY29yZS9BcnJheVV0aWwudHMiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uLi8uLi9ub2RlX21vZHVsZXMvQGVwaG94L2Rpc3B1dGUvc3JjL21haW4vdHMvY29yZS9UeXBlLnRzIiwid2VicGFjazovL3RpbnltY2Uvd2VicGFjay9ydW50aW1lL2RlZmluZV9wcm9wZXJ0eV9nZXR0ZXJzIiwid2VicGFjazovL3RpbnltY2Uvd2VicGFjay9ydW50aW1lL2hhc19vd25fcHJvcGVydHkiLCJ3ZWJwYWNrOi8vdGlueW1jZS93ZWJwYWNrL3J1bnRpbWUvbWFrZV9uYW1lc3BhY2Vfb2JqZWN0Iiwid2VicGFjazovL3RpbnltY2Uvd2VicGFjay9ydW50aW1lL3JzcGFja192ZXJzaW9uIiwid2VicGFjazovL3RpbnltY2Uvd2VicGFjay9ydW50aW1lL3JzcGFja191bmlxdWVfaWQiLCJ3ZWJwYWNrOi8vdGlueW1jZS8uL3NyYy9wbHVnaW5zL2NvZGVzYW1wbGUvbWFpbi90cy9NYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBnbG9iYWwgPSB0aW55bWNlLnV0aWwuVG9vbHMucmVzb2x2ZSgndGlueW1jZS5QbHVnaW5NYW5hZ2VyJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGdsb2JhbDtcbmV4cG9ydCB2YXIgUGx1Z2luTWFuYWdlciA9IGdsb2JhbDtcbiIsInZhciBnbG9iYWwgPSB0aW55bWNlLnV0aWwuVG9vbHMucmVzb2x2ZSgndGlueW1jZS5kb20uRE9NVXRpbHMnKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2xvYmFsO1xuZXhwb3J0IHZhciBET01VdGlscyA9IGdsb2JhbDtcbiIsInZhciBnbG9iYWwgPSB0aW55bWNlLnV0aWwuVG9vbHMucmVzb2x2ZSgndGlueW1jZS51dGlsLlRvb2xzJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGdsb2JhbDtcbmV4cG9ydCB2YXIgVG9vbHMgPSBnbG9iYWw7XG4iLCJjb25zdCBwcmlzbWpzID0gZnVuY3Rpb24oZ2xvYmFsLCBtb2R1bGUsIGV4cG9ydHMpIHtcbi8vIHByZXNlcnZlIHRoZSBnbG9iYWwgaWYgaXQgaGFzIGFscmVhZHkgYmVlbiBsb2FkZWRcbmNvbnN0IG9sZHByaXNtID0gd2luZG93LlByaXNtO1xud2luZG93LlByaXNtID0geyBtYW51YWw6IHRydWUgfTtcbi8vLyA8cmVmZXJlbmNlIGxpYj1cIldlYldvcmtlclwiLz5cblxudmFyIF9zZWxmID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKVxuXHQ/IHdpbmRvdyAgIC8vIGlmIGluIGJyb3dzZXJcblx0OiAoXG5cdFx0KHR5cGVvZiBXb3JrZXJHbG9iYWxTY29wZSAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZiBpbnN0YW5jZW9mIFdvcmtlckdsb2JhbFNjb3BlKVxuXHRcdFx0PyBzZWxmIC8vIGlmIGluIHdvcmtlclxuXHRcdFx0OiB7fSAgIC8vIGlmIGluIG5vZGUganNcblx0KTtcblxuLyoqXG4gKiBQcmlzbTogTGlnaHR3ZWlnaHQsIHJvYnVzdCwgZWxlZ2FudCBzeW50YXggaGlnaGxpZ2h0aW5nXG4gKlxuICogQGxpY2Vuc2UgTUlUIDxodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVD5cbiAqIEBhdXRob3IgTGVhIFZlcm91IDxodHRwczovL2xlYS52ZXJvdS5tZT5cbiAqIEBuYW1lc3BhY2VcbiAqIEBwdWJsaWNcbiAqL1xudmFyIFByaXNtID0gKGZ1bmN0aW9uIChfc2VsZikge1xuXG5cdC8vIFByaXZhdGUgaGVscGVyIHZhcnNcblx0dmFyIGxhbmcgPSAvKD86XnxcXHMpbGFuZyg/OnVhZ2UpPy0oW1xcdy1dKykoPz1cXHN8JCkvaTtcblx0dmFyIHVuaXF1ZUlkID0gMDtcblxuXHQvLyBUaGUgZ3JhbW1hciBvYmplY3QgZm9yIHBsYWludGV4dFxuXHR2YXIgcGxhaW5UZXh0R3JhbW1hciA9IHt9O1xuXG5cblx0dmFyIF8gPSB7XG5cdFx0LyoqXG5cdFx0ICogQnkgZGVmYXVsdCwgUHJpc20gd2lsbCBhdHRlbXB0IHRvIGhpZ2hsaWdodCBhbGwgY29kZSBlbGVtZW50cyAoYnkgY2FsbGluZyB7QGxpbmsgUHJpc20uaGlnaGxpZ2h0QWxsfSkgb24gdGhlXG5cdFx0ICogY3VycmVudCBwYWdlIGFmdGVyIHRoZSBwYWdlIGZpbmlzaGVkIGxvYWRpbmcuIFRoaXMgbWlnaHQgYmUgYSBwcm9ibGVtIGlmIGUuZy4geW91IHdhbnRlZCB0byBhc3luY2hyb25vdXNseSBsb2FkXG5cdFx0ICogYWRkaXRpb25hbCBsYW5ndWFnZXMgb3IgcGx1Z2lucyB5b3Vyc2VsZi5cblx0XHQgKlxuXHRcdCAqIEJ5IHNldHRpbmcgdGhpcyB2YWx1ZSB0byBgdHJ1ZWAsIFByaXNtIHdpbGwgbm90IGF1dG9tYXRpY2FsbHkgaGlnaGxpZ2h0IGFsbCBjb2RlIGVsZW1lbnRzIG9uIHRoZSBwYWdlLlxuXHRcdCAqXG5cdFx0ICogWW91IG9idmlvdXNseSBoYXZlIHRvIGNoYW5nZSB0aGlzIHZhbHVlIGJlZm9yZSB0aGUgYXV0b21hdGljIGhpZ2hsaWdodGluZyBzdGFydGVkLiBUbyBkbyB0aGlzLCB5b3UgY2FuIGFkZCBhblxuXHRcdCAqIGVtcHR5IFByaXNtIG9iamVjdCBpbnRvIHRoZSBnbG9iYWwgc2NvcGUgYmVmb3JlIGxvYWRpbmcgdGhlIFByaXNtIHNjcmlwdCBsaWtlIHRoaXM6XG5cdFx0ICpcblx0XHQgKiBgYGBqc1xuXHRcdCAqIHdpbmRvdy5QcmlzbSA9IHdpbmRvdy5QcmlzbSB8fCB7fTtcblx0XHQgKiBQcmlzbS5tYW51YWwgPSB0cnVlO1xuXHRcdCAqIC8vIGFkZCBhIG5ldyA8c2NyaXB0PiB0byBsb2FkIFByaXNtJ3Mgc2NyaXB0XG5cdFx0ICogYGBgXG5cdFx0ICpcblx0XHQgKiBAZGVmYXVsdCBmYWxzZVxuXHRcdCAqIEB0eXBlIHtib29sZWFufVxuXHRcdCAqIEBtZW1iZXJvZiBQcmlzbVxuXHRcdCAqIEBwdWJsaWNcblx0XHQgKi9cblx0XHRtYW51YWw6IF9zZWxmLlByaXNtICYmIF9zZWxmLlByaXNtLm1hbnVhbCxcblx0XHQvKipcblx0XHQgKiBCeSBkZWZhdWx0LCBpZiBQcmlzbSBpcyBpbiBhIHdlYiB3b3JrZXIsIGl0IGFzc3VtZXMgdGhhdCBpdCBpcyBpbiBhIHdvcmtlciBpdCBjcmVhdGVkIGl0c2VsZiwgc28gaXQgdXNlc1xuXHRcdCAqIGBhZGRFdmVudExpc3RlbmVyYCB0byBjb21tdW5pY2F0ZSB3aXRoIGl0cyBwYXJlbnQgaW5zdGFuY2UuIEhvd2V2ZXIsIGlmIHlvdSdyZSB1c2luZyBQcmlzbSBtYW51YWxseSBpbiB5b3VyXG5cdFx0ICogb3duIHdvcmtlciwgeW91IGRvbid0IHdhbnQgaXQgdG8gZG8gdGhpcy5cblx0XHQgKlxuXHRcdCAqIEJ5IHNldHRpbmcgdGhpcyB2YWx1ZSB0byBgdHJ1ZWAsIFByaXNtIHdpbGwgbm90IGFkZCBpdHMgb3duIGxpc3RlbmVycyB0byB0aGUgd29ya2VyLlxuXHRcdCAqXG5cdFx0ICogWW91IG9idmlvdXNseSBoYXZlIHRvIGNoYW5nZSB0aGlzIHZhbHVlIGJlZm9yZSBQcmlzbSBleGVjdXRlcy4gVG8gZG8gdGhpcywgeW91IGNhbiBhZGQgYW5cblx0XHQgKiBlbXB0eSBQcmlzbSBvYmplY3QgaW50byB0aGUgZ2xvYmFsIHNjb3BlIGJlZm9yZSBsb2FkaW5nIHRoZSBQcmlzbSBzY3JpcHQgbGlrZSB0aGlzOlxuXHRcdCAqXG5cdFx0ICogYGBganNcblx0XHQgKiB3aW5kb3cuUHJpc20gPSB3aW5kb3cuUHJpc20gfHwge307XG5cdFx0ICogUHJpc20uZGlzYWJsZVdvcmtlck1lc3NhZ2VIYW5kbGVyID0gdHJ1ZTtcblx0XHQgKiAvLyBMb2FkIFByaXNtJ3Mgc2NyaXB0XG5cdFx0ICogYGBgXG5cdFx0ICpcblx0XHQgKiBAZGVmYXVsdCBmYWxzZVxuXHRcdCAqIEB0eXBlIHtib29sZWFufVxuXHRcdCAqIEBtZW1iZXJvZiBQcmlzbVxuXHRcdCAqIEBwdWJsaWNcblx0XHQgKi9cblx0XHRkaXNhYmxlV29ya2VyTWVzc2FnZUhhbmRsZXI6IF9zZWxmLlByaXNtICYmIF9zZWxmLlByaXNtLmRpc2FibGVXb3JrZXJNZXNzYWdlSGFuZGxlcixcblxuXHRcdC8qKlxuXHRcdCAqIEEgbmFtZXNwYWNlIGZvciB1dGlsaXR5IG1ldGhvZHMuXG5cdFx0ICpcblx0XHQgKiBBbGwgZnVuY3Rpb24gaW4gdGhpcyBuYW1lc3BhY2UgdGhhdCBhcmUgbm90IGV4cGxpY2l0bHkgbWFya2VkIGFzIF9wdWJsaWNfIGFyZSBmb3IgX19pbnRlcm5hbCB1c2Ugb25seV9fIGFuZCBtYXlcblx0XHQgKiBjaGFuZ2Ugb3IgZGlzYXBwZWFyIGF0IGFueSB0aW1lLlxuXHRcdCAqXG5cdFx0ICogQG5hbWVzcGFjZVxuXHRcdCAqIEBtZW1iZXJvZiBQcmlzbVxuXHRcdCAqL1xuXHRcdHV0aWw6IHtcblx0XHRcdGVuY29kZTogZnVuY3Rpb24gZW5jb2RlKHRva2Vucykge1xuXHRcdFx0XHRpZiAodG9rZW5zIGluc3RhbmNlb2YgVG9rZW4pIHtcblx0XHRcdFx0XHRyZXR1cm4gbmV3IFRva2VuKHRva2Vucy50eXBlLCBlbmNvZGUodG9rZW5zLmNvbnRlbnQpLCB0b2tlbnMuYWxpYXMpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodG9rZW5zKSkge1xuXHRcdFx0XHRcdHJldHVybiB0b2tlbnMubWFwKGVuY29kZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRva2Vucy5yZXBsYWNlKC8mL2csICcmYW1wOycpLnJlcGxhY2UoLzwvZywgJyZsdDsnKS5yZXBsYWNlKC9cXHUwMGEwL2csICcgJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogUmV0dXJucyB0aGUgbmFtZSBvZiB0aGUgdHlwZSBvZiB0aGUgZ2l2ZW4gdmFsdWUuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHBhcmFtIHthbnl9IG9cblx0XHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdFx0XHQgKiBAZXhhbXBsZVxuXHRcdFx0ICogdHlwZShudWxsKSAgICAgID09PSAnTnVsbCdcblx0XHRcdCAqIHR5cGUodW5kZWZpbmVkKSA9PT0gJ1VuZGVmaW5lZCdcblx0XHRcdCAqIHR5cGUoMTIzKSAgICAgICA9PT0gJ051bWJlcidcblx0XHRcdCAqIHR5cGUoJ2ZvbycpICAgICA9PT0gJ1N0cmluZydcblx0XHRcdCAqIHR5cGUodHJ1ZSkgICAgICA9PT0gJ0Jvb2xlYW4nXG5cdFx0XHQgKiB0eXBlKFsxLCAyXSkgICAgPT09ICdBcnJheSdcblx0XHRcdCAqIHR5cGUoe30pICAgICAgICA9PT0gJ09iamVjdCdcblx0XHRcdCAqIHR5cGUoU3RyaW5nKSAgICA9PT0gJ0Z1bmN0aW9uJ1xuXHRcdFx0ICogdHlwZSgvYWJjKy8pICAgID09PSAnUmVnRXhwJ1xuXHRcdFx0ICovXG5cdFx0XHR0eXBlOiBmdW5jdGlvbiAobykge1xuXHRcdFx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcblx0XHRcdH0sXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogUmV0dXJucyBhIHVuaXF1ZSBudW1iZXIgZm9yIHRoZSBnaXZlbiBvYmplY3QuIExhdGVyIGNhbGxzIHdpbGwgc3RpbGwgcmV0dXJuIHRoZSBzYW1lIG51bWJlci5cblx0XHRcdCAqXG5cdFx0XHQgKiBAcGFyYW0ge09iamVjdH0gb2JqXG5cdFx0XHQgKiBAcmV0dXJucyB7bnVtYmVyfVxuXHRcdFx0ICovXG5cdFx0XHRvYmpJZDogZnVuY3Rpb24gKG9iaikge1xuXHRcdFx0XHRpZiAoIW9ialsnX19pZCddKSB7XG5cdFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgJ19faWQnLCB7IHZhbHVlOiArK3VuaXF1ZUlkIH0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBvYmpbJ19faWQnXTtcblx0XHRcdH0sXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogQ3JlYXRlcyBhIGRlZXAgY2xvbmUgb2YgdGhlIGdpdmVuIG9iamVjdC5cblx0XHRcdCAqXG5cdFx0XHQgKiBUaGUgbWFpbiBpbnRlbmRlZCB1c2Ugb2YgdGhpcyBmdW5jdGlvbiBpcyB0byBjbG9uZSBsYW5ndWFnZSBkZWZpbml0aW9ucy5cblx0XHRcdCAqXG5cdFx0XHQgKiBAcGFyYW0ge1R9IG9cblx0XHRcdCAqIEBwYXJhbSB7UmVjb3JkPG51bWJlciwgYW55Pn0gW3Zpc2l0ZWRdXG5cdFx0XHQgKiBAcmV0dXJucyB7VH1cblx0XHRcdCAqIEB0ZW1wbGF0ZSBUXG5cdFx0XHQgKi9cblx0XHRcdGNsb25lOiBmdW5jdGlvbiBkZWVwQ2xvbmUobywgdmlzaXRlZCkge1xuXHRcdFx0XHR2aXNpdGVkID0gdmlzaXRlZCB8fCB7fTtcblxuXHRcdFx0XHR2YXIgY2xvbmU7IHZhciBpZDtcblx0XHRcdFx0c3dpdGNoIChfLnV0aWwudHlwZShvKSkge1xuXHRcdFx0XHRcdGNhc2UgJ09iamVjdCc6XG5cdFx0XHRcdFx0XHRpZCA9IF8udXRpbC5vYmpJZChvKTtcblx0XHRcdFx0XHRcdGlmICh2aXNpdGVkW2lkXSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdmlzaXRlZFtpZF07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRjbG9uZSA9IC8qKiBAdHlwZSB7UmVjb3JkPHN0cmluZywgYW55Pn0gKi8gKHt9KTtcblx0XHRcdFx0XHRcdHZpc2l0ZWRbaWRdID0gY2xvbmU7XG5cblx0XHRcdFx0XHRcdGZvciAodmFyIGtleSBpbiBvKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChvLmhhc093blByb3BlcnR5KGtleSkpIHtcblx0XHRcdFx0XHRcdFx0XHRjbG9uZVtrZXldID0gZGVlcENsb25lKG9ba2V5XSwgdmlzaXRlZCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0cmV0dXJuIC8qKiBAdHlwZSB7YW55fSAqLyAoY2xvbmUpO1xuXG5cdFx0XHRcdFx0Y2FzZSAnQXJyYXknOlxuXHRcdFx0XHRcdFx0aWQgPSBfLnV0aWwub2JqSWQobyk7XG5cdFx0XHRcdFx0XHRpZiAodmlzaXRlZFtpZF0pIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHZpc2l0ZWRbaWRdO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Y2xvbmUgPSBbXTtcblx0XHRcdFx0XHRcdHZpc2l0ZWRbaWRdID0gY2xvbmU7XG5cblx0XHRcdFx0XHRcdCgvKiogQHR5cGUge0FycmF5fSAqLygvKiogQHR5cGUge2FueX0gKi8obykpKS5mb3JFYWNoKGZ1bmN0aW9uICh2LCBpKSB7XG5cdFx0XHRcdFx0XHRcdGNsb25lW2ldID0gZGVlcENsb25lKHYsIHZpc2l0ZWQpO1xuXHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRcdHJldHVybiAvKiogQHR5cGUge2FueX0gKi8gKGNsb25lKTtcblxuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRyZXR1cm4gbztcblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBSZXR1cm5zIHRoZSBQcmlzbSBsYW5ndWFnZSBvZiB0aGUgZ2l2ZW4gZWxlbWVudCBzZXQgYnkgYSBgbGFuZ3VhZ2UteHh4eGAgb3IgYGxhbmcteHh4eGAgY2xhc3MuXG5cdFx0XHQgKlxuXHRcdFx0ICogSWYgbm8gbGFuZ3VhZ2UgaXMgc2V0IGZvciB0aGUgZWxlbWVudCBvciB0aGUgZWxlbWVudCBpcyBgbnVsbGAgb3IgYHVuZGVmaW5lZGAsIGBub25lYCB3aWxsIGJlIHJldHVybmVkLlxuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuXHRcdFx0ICogQHJldHVybnMge3N0cmluZ31cblx0XHRcdCAqL1xuXHRcdFx0Z2V0TGFuZ3VhZ2U6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG5cdFx0XHRcdHdoaWxlIChlbGVtZW50KSB7XG5cdFx0XHRcdFx0dmFyIG0gPSBsYW5nLmV4ZWMoZWxlbWVudC5jbGFzc05hbWUpO1xuXHRcdFx0XHRcdGlmIChtKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gbVsxXS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbGVtZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiAnbm9uZSc7XG5cdFx0XHR9LFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIFNldHMgdGhlIFByaXNtIGBsYW5ndWFnZS14eHh4YCBjbGFzcyBvZiB0aGUgZ2l2ZW4gZWxlbWVudC5cblx0XHRcdCAqXG5cdFx0XHQgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcblx0XHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBsYW5ndWFnZVxuXHRcdFx0ICogQHJldHVybnMge3ZvaWR9XG5cdFx0XHQgKi9cblx0XHRcdHNldExhbmd1YWdlOiBmdW5jdGlvbiAoZWxlbWVudCwgbGFuZ3VhZ2UpIHtcblx0XHRcdFx0Ly8gcmVtb3ZlIGFsbCBgbGFuZ3VhZ2UteHh4eGAgY2xhc3Nlc1xuXHRcdFx0XHQvLyAodGhpcyBtaWdodCBsZWF2ZSBiZWhpbmQgYSBsZWFkaW5nIHNwYWNlKVxuXHRcdFx0XHRlbGVtZW50LmNsYXNzTmFtZSA9IGVsZW1lbnQuY2xhc3NOYW1lLnJlcGxhY2UoUmVnRXhwKGxhbmcsICdnaScpLCAnJyk7XG5cblx0XHRcdFx0Ly8gYWRkIHRoZSBuZXcgYGxhbmd1YWdlLXh4eHhgIGNsYXNzXG5cdFx0XHRcdC8vICh1c2luZyBgY2xhc3NMaXN0YCB3aWxsIGF1dG9tYXRpY2FsbHkgY2xlYW4gdXAgc3BhY2VzIGZvciB1cylcblx0XHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdsYW5ndWFnZS0nICsgbGFuZ3VhZ2UpO1xuXHRcdFx0fSxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBSZXR1cm5zIHRoZSBzY3JpcHQgZWxlbWVudCB0aGF0IGlzIGN1cnJlbnRseSBleGVjdXRpbmcuXG5cdFx0XHQgKlxuXHRcdFx0ICogVGhpcyBkb2VzIF9fbm90X18gd29yayBmb3IgbGluZSBzY3JpcHQgZWxlbWVudC5cblx0XHRcdCAqXG5cdFx0XHQgKiBAcmV0dXJucyB7SFRNTFNjcmlwdEVsZW1lbnQgfCBudWxsfVxuXHRcdFx0ICovXG5cdFx0XHRjdXJyZW50U2NyaXB0OiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCdjdXJyZW50U2NyaXB0JyBpbiBkb2N1bWVudCAmJiAxIDwgMiAvKiBoYWNrIHRvIHRyaXAgVFMnIGZsb3cgYW5hbHlzaXMgKi8pIHtcblx0XHRcdFx0XHRyZXR1cm4gLyoqIEB0eXBlIHthbnl9ICovIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIElFMTEgd29ya2Fyb3VuZFxuXHRcdFx0XHQvLyB3ZSdsbCBnZXQgdGhlIHNyYyBvZiB0aGUgY3VycmVudCBzY3JpcHQgYnkgcGFyc2luZyBJRTExJ3MgZXJyb3Igc3RhY2sgdHJhY2Vcblx0XHRcdFx0Ly8gdGhpcyB3aWxsIG5vdCB3b3JrIGZvciBpbmxpbmUgc2NyaXB0c1xuXG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCk7XG5cdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRcdC8vIEdldCBmaWxlIHNyYyB1cmwgZnJvbSBzdGFjay4gU3BlY2lmaWNhbGx5IHdvcmtzIHdpdGggdGhlIGZvcm1hdCBvZiBzdGFjayB0cmFjZXMgaW4gSUUuXG5cdFx0XHRcdFx0Ly8gQSBzdGFjayB3aWxsIGxvb2sgbGlrZSB0aGlzOlxuXHRcdFx0XHRcdC8vXG5cdFx0XHRcdFx0Ly8gRXJyb3Jcblx0XHRcdFx0XHQvLyAgICBhdCBfLnV0aWwuY3VycmVudFNjcmlwdCAoaHR0cDovL2xvY2FsaG9zdC9jb21wb25lbnRzL3ByaXNtLWNvcmUuanM6MTE5OjUpXG5cdFx0XHRcdFx0Ly8gICAgYXQgR2xvYmFsIGNvZGUgKGh0dHA6Ly9sb2NhbGhvc3QvY29tcG9uZW50cy9wcmlzbS1jb3JlLmpzOjYwNjoxKVxuXG5cdFx0XHRcdFx0dmFyIHNyYyA9ICgvYXQgW14oXFxyXFxuXSpcXCgoLiopOlteOl0rOlteOl0rXFwpJC9pLmV4ZWMoZXJyLnN0YWNrKSB8fCBbXSlbMV07XG5cdFx0XHRcdFx0aWYgKHNyYykge1xuXHRcdFx0XHRcdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0Jyk7XG5cdFx0XHRcdFx0XHRmb3IgKHZhciBpIGluIHNjcmlwdHMpIHtcblx0XHRcdFx0XHRcdFx0aWYgKHNjcmlwdHNbaV0uc3JjID09IHNyYykge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBzY3JpcHRzW2ldO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIFJldHVybnMgd2hldGhlciBhIGdpdmVuIGNsYXNzIGlzIGFjdGl2ZSBmb3IgYGVsZW1lbnRgLlxuXHRcdFx0ICpcblx0XHRcdCAqIFRoZSBjbGFzcyBjYW4gYmUgYWN0aXZhdGVkIGlmIGBlbGVtZW50YCBvciBvbmUgb2YgaXRzIGFuY2VzdG9ycyBoYXMgdGhlIGdpdmVuIGNsYXNzIGFuZCBpdCBjYW4gYmUgZGVhY3RpdmF0ZWRcblx0XHRcdCAqIGlmIGBlbGVtZW50YCBvciBvbmUgb2YgaXRzIGFuY2VzdG9ycyBoYXMgdGhlIG5lZ2F0ZWQgdmVyc2lvbiBvZiB0aGUgZ2l2ZW4gY2xhc3MuIFRoZSBfbmVnYXRlZCB2ZXJzaW9uXyBvZiB0aGVcblx0XHRcdCAqIGdpdmVuIGNsYXNzIGlzIGp1c3QgdGhlIGdpdmVuIGNsYXNzIHdpdGggYSBgbm8tYCBwcmVmaXguXG5cdFx0XHQgKlxuXHRcdFx0ICogV2hldGhlciB0aGUgY2xhc3MgaXMgYWN0aXZlIGlzIGRldGVybWluZWQgYnkgdGhlIGNsb3Nlc3QgYW5jZXN0b3Igb2YgYGVsZW1lbnRgICh3aGVyZSBgZWxlbWVudGAgaXRzZWxmIGlzXG5cdFx0XHQgKiBjbG9zZXN0IGFuY2VzdG9yKSB0aGF0IGhhcyB0aGUgZ2l2ZW4gY2xhc3Mgb3IgdGhlIG5lZ2F0ZWQgdmVyc2lvbiBvZiBpdC4gSWYgbmVpdGhlciBgZWxlbWVudGAgbm9yIGFueSBvZiBpdHNcblx0XHRcdCAqIGFuY2VzdG9ycyBoYXZlIHRoZSBnaXZlbiBjbGFzcyBvciB0aGUgbmVnYXRlZCB2ZXJzaW9uIG9mIGl0LCB0aGVuIHRoZSBkZWZhdWx0IGFjdGl2YXRpb24gd2lsbCBiZSByZXR1cm5lZC5cblx0XHRcdCAqXG5cdFx0XHQgKiBJbiB0aGUgcGFyYWRveGljYWwgc2l0dWF0aW9uIHdoZXJlIHRoZSBjbG9zZXN0IGFuY2VzdG9yIGNvbnRhaW5zIF9fYm90aF9fIHRoZSBnaXZlbiBjbGFzcyBhbmQgdGhlIG5lZ2F0ZWRcblx0XHRcdCAqIHZlcnNpb24gb2YgaXQsIHRoZSBjbGFzcyBpcyBjb25zaWRlcmVkIGFjdGl2ZS5cblx0XHRcdCAqXG5cdFx0XHQgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcblx0XHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcblx0XHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW2RlZmF1bHRBY3RpdmF0aW9uPWZhbHNlXVxuXHRcdFx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdFx0XHQgKi9cblx0XHRcdGlzQWN0aXZlOiBmdW5jdGlvbiAoZWxlbWVudCwgY2xhc3NOYW1lLCBkZWZhdWx0QWN0aXZhdGlvbikge1xuXHRcdFx0XHR2YXIgbm8gPSAnbm8tJyArIGNsYXNzTmFtZTtcblxuXHRcdFx0XHR3aGlsZSAoZWxlbWVudCkge1xuXHRcdFx0XHRcdHZhciBjbGFzc0xpc3QgPSBlbGVtZW50LmNsYXNzTGlzdDtcblx0XHRcdFx0XHRpZiAoY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpIHtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoY2xhc3NMaXN0LmNvbnRhaW5zKG5vKSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbGVtZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiAhIWRlZmF1bHRBY3RpdmF0aW9uO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBUaGlzIG5hbWVzcGFjZSBjb250YWlucyBhbGwgY3VycmVudGx5IGxvYWRlZCBsYW5ndWFnZXMgYW5kIHRoZSBzb21lIGhlbHBlciBmdW5jdGlvbnMgdG8gY3JlYXRlIGFuZCBtb2RpZnkgbGFuZ3VhZ2VzLlxuXHRcdCAqXG5cdFx0ICogQG5hbWVzcGFjZVxuXHRcdCAqIEBtZW1iZXJvZiBQcmlzbVxuXHRcdCAqIEBwdWJsaWNcblx0XHQgKi9cblx0XHRsYW5ndWFnZXM6IHtcblx0XHRcdC8qKlxuXHRcdFx0ICogVGhlIGdyYW1tYXIgZm9yIHBsYWluLCB1bmZvcm1hdHRlZCB0ZXh0LlxuXHRcdFx0ICovXG5cdFx0XHRwbGFpbjogcGxhaW5UZXh0R3JhbW1hcixcblx0XHRcdHBsYWludGV4dDogcGxhaW5UZXh0R3JhbW1hcixcblx0XHRcdHRleHQ6IHBsYWluVGV4dEdyYW1tYXIsXG5cdFx0XHR0eHQ6IHBsYWluVGV4dEdyYW1tYXIsXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogQ3JlYXRlcyBhIGRlZXAgY29weSBvZiB0aGUgbGFuZ3VhZ2Ugd2l0aCB0aGUgZ2l2ZW4gaWQgYW5kIGFwcGVuZHMgdGhlIGdpdmVuIHRva2Vucy5cblx0XHRcdCAqXG5cdFx0XHQgKiBJZiBhIHRva2VuIGluIGByZWRlZmAgYWxzbyBhcHBlYXJzIGluIHRoZSBjb3BpZWQgbGFuZ3VhZ2UsIHRoZW4gdGhlIGV4aXN0aW5nIHRva2VuIGluIHRoZSBjb3BpZWQgbGFuZ3VhZ2Vcblx0XHRcdCAqIHdpbGwgYmUgb3ZlcndyaXR0ZW4gYXQgaXRzIG9yaWdpbmFsIHBvc2l0aW9uLlxuXHRcdFx0ICpcblx0XHRcdCAqICMjIEJlc3QgcHJhY3RpY2VzXG5cdFx0XHQgKlxuXHRcdFx0ICogU2luY2UgdGhlIHBvc2l0aW9uIG9mIG92ZXJ3cml0aW5nIHRva2VucyAodG9rZW4gaW4gYHJlZGVmYCB0aGF0IG92ZXJ3cml0ZSB0b2tlbnMgaW4gdGhlIGNvcGllZCBsYW5ndWFnZSlcblx0XHRcdCAqIGRvZXNuJ3QgbWF0dGVyLCB0aGV5IGNhbiB0ZWNobmljYWxseSBiZSBpbiBhbnkgb3JkZXIuIEhvd2V2ZXIsIHRoaXMgY2FuIGJlIGNvbmZ1c2luZyB0byBvdGhlcnMgdGhhdCB0cnlpbmcgdG9cblx0XHRcdCAqIHVuZGVyc3RhbmQgdGhlIGxhbmd1YWdlIGRlZmluaXRpb24gYmVjYXVzZSwgbm9ybWFsbHksIHRoZSBvcmRlciBvZiB0b2tlbnMgbWF0dGVycyBpbiBQcmlzbSBncmFtbWFycy5cblx0XHRcdCAqXG5cdFx0XHQgKiBUaGVyZWZvcmUsIGl0IGlzIGVuY291cmFnZWQgdG8gb3JkZXIgb3ZlcndyaXRpbmcgdG9rZW5zIGFjY29yZGluZyB0byB0aGUgcG9zaXRpb25zIG9mIHRoZSBvdmVyd3JpdHRlbiB0b2tlbnMuXG5cdFx0XHQgKiBGdXJ0aGVybW9yZSwgYWxsIG5vbi1vdmVyd3JpdGluZyB0b2tlbnMgc2hvdWxkIGJlIHBsYWNlZCBhZnRlciB0aGUgb3ZlcndyaXRpbmcgb25lcy5cblx0XHRcdCAqXG5cdFx0XHQgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIGlkIG9mIHRoZSBsYW5ndWFnZSB0byBleHRlbmQuIFRoaXMgaGFzIHRvIGJlIGEga2V5IGluIGBQcmlzbS5sYW5ndWFnZXNgLlxuXHRcdFx0ICogQHBhcmFtIHtHcmFtbWFyfSByZWRlZiBUaGUgbmV3IHRva2VucyB0byBhcHBlbmQuXG5cdFx0XHQgKiBAcmV0dXJucyB7R3JhbW1hcn0gVGhlIG5ldyBsYW5ndWFnZSBjcmVhdGVkLlxuXHRcdFx0ICogQHB1YmxpY1xuXHRcdFx0ICogQGV4YW1wbGVcblx0XHRcdCAqIFByaXNtLmxhbmd1YWdlc1snY3NzLXdpdGgtY29sb3JzJ10gPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdjc3MnLCB7XG5cdFx0XHQgKiAgICAgLy8gUHJpc20ubGFuZ3VhZ2VzLmNzcyBhbHJlYWR5IGhhcyBhICdjb21tZW50JyB0b2tlbiwgc28gdGhpcyB0b2tlbiB3aWxsIG92ZXJ3cml0ZSBDU1MnICdjb21tZW50JyB0b2tlblxuXHRcdFx0ICogICAgIC8vIGF0IGl0cyBvcmlnaW5hbCBwb3NpdGlvblxuXHRcdFx0ICogICAgICdjb21tZW50JzogeyAuLi4gfSxcblx0XHRcdCAqICAgICAvLyBDU1MgZG9lc24ndCBoYXZlIGEgJ2NvbG9yJyB0b2tlbiwgc28gdGhpcyB0b2tlbiB3aWxsIGJlIGFwcGVuZGVkXG5cdFx0XHQgKiAgICAgJ2NvbG9yJzogL1xcYig/OnJlZHxncmVlbnxibHVlKVxcYi9cblx0XHRcdCAqIH0pO1xuXHRcdFx0ICovXG5cdFx0XHRleHRlbmQ6IGZ1bmN0aW9uIChpZCwgcmVkZWYpIHtcblx0XHRcdFx0dmFyIGxhbmcgPSBfLnV0aWwuY2xvbmUoXy5sYW5ndWFnZXNbaWRdKTtcblxuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gcmVkZWYpIHtcblx0XHRcdFx0XHRsYW5nW2tleV0gPSByZWRlZltrZXldO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIGxhbmc7XG5cdFx0XHR9LFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIEluc2VydHMgdG9rZW5zIF9iZWZvcmVfIGFub3RoZXIgdG9rZW4gaW4gYSBsYW5ndWFnZSBkZWZpbml0aW9uIG9yIGFueSBvdGhlciBncmFtbWFyLlxuXHRcdFx0ICpcblx0XHRcdCAqICMjIFVzYWdlXG5cdFx0XHQgKlxuXHRcdFx0ICogVGhpcyBoZWxwZXIgbWV0aG9kIG1ha2VzIGl0IGVhc3kgdG8gbW9kaWZ5IGV4aXN0aW5nIGxhbmd1YWdlcy4gRm9yIGV4YW1wbGUsIHRoZSBDU1MgbGFuZ3VhZ2UgZGVmaW5pdGlvblxuXHRcdFx0ICogbm90IG9ubHkgZGVmaW5lcyBDU1MgaGlnaGxpZ2h0aW5nIGZvciBDU1MgZG9jdW1lbnRzLCBidXQgYWxzbyBuZWVkcyB0byBkZWZpbmUgaGlnaGxpZ2h0aW5nIGZvciBDU1MgZW1iZWRkZWRcblx0XHRcdCAqIGluIEhUTUwgdGhyb3VnaCBgPHN0eWxlPmAgZWxlbWVudHMuIFRvIGRvIHRoaXMsIGl0IG5lZWRzIHRvIG1vZGlmeSBgUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cGAgYW5kIGFkZCB0aGVcblx0XHRcdCAqIGFwcHJvcHJpYXRlIHRva2Vucy4gSG93ZXZlciwgYFByaXNtLmxhbmd1YWdlcy5tYXJrdXBgIGlzIGEgcmVndWxhciBKYXZhU2NyaXB0IG9iamVjdCBsaXRlcmFsLCBzbyBpZiB5b3UgZG9cblx0XHRcdCAqIHRoaXM6XG5cdFx0XHQgKlxuXHRcdFx0ICogYGBganNcblx0XHRcdCAqIFByaXNtLmxhbmd1YWdlcy5tYXJrdXAuc3R5bGUgPSB7XG5cdFx0XHQgKiAgICAgLy8gdG9rZW5cblx0XHRcdCAqIH07XG5cdFx0XHQgKiBgYGBcblx0XHRcdCAqXG5cdFx0XHQgKiB0aGVuIHRoZSBgc3R5bGVgIHRva2VuIHdpbGwgYmUgYWRkZWQgKGFuZCBwcm9jZXNzZWQpIGF0IHRoZSBlbmQuIGBpbnNlcnRCZWZvcmVgIGFsbG93cyB5b3UgdG8gaW5zZXJ0IHRva2Vuc1xuXHRcdFx0ICogYmVmb3JlIGV4aXN0aW5nIHRva2Vucy4gRm9yIHRoZSBDU1MgZXhhbXBsZSBhYm92ZSwgeW91IHdvdWxkIHVzZSBpdCBsaWtlIHRoaXM6XG5cdFx0XHQgKlxuXHRcdFx0ICogYGBganNcblx0XHRcdCAqIFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ21hcmt1cCcsICdjZGF0YScsIHtcblx0XHRcdCAqICAgICAnc3R5bGUnOiB7XG5cdFx0XHQgKiAgICAgICAgIC8vIHRva2VuXG5cdFx0XHQgKiAgICAgfVxuXHRcdFx0ICogfSk7XG5cdFx0XHQgKiBgYGBcblx0XHRcdCAqXG5cdFx0XHQgKiAjIyBTcGVjaWFsIGNhc2VzXG5cdFx0XHQgKlxuXHRcdFx0ICogSWYgdGhlIGdyYW1tYXJzIG9mIGBpbnNpZGVgIGFuZCBgaW5zZXJ0YCBoYXZlIHRva2VucyB3aXRoIHRoZSBzYW1lIG5hbWUsIHRoZSB0b2tlbnMgaW4gYGluc2lkZWAncyBncmFtbWFyXG5cdFx0XHQgKiB3aWxsIGJlIGlnbm9yZWQuXG5cdFx0XHQgKlxuXHRcdFx0ICogVGhpcyBiZWhhdmlvciBjYW4gYmUgdXNlZCB0byBpbnNlcnQgdG9rZW5zIGFmdGVyIGBiZWZvcmVgOlxuXHRcdFx0ICpcblx0XHRcdCAqIGBgYGpzXG5cdFx0XHQgKiBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdtYXJrdXAnLCAnY29tbWVudCcsIHtcblx0XHRcdCAqICAgICAnY29tbWVudCc6IFByaXNtLmxhbmd1YWdlcy5tYXJrdXAuY29tbWVudCxcblx0XHRcdCAqICAgICAvLyB0b2tlbnMgYWZ0ZXIgJ2NvbW1lbnQnXG5cdFx0XHQgKiB9KTtcblx0XHRcdCAqIGBgYFxuXHRcdFx0ICpcblx0XHRcdCAqICMjIExpbWl0YXRpb25zXG5cdFx0XHQgKlxuXHRcdFx0ICogVGhlIG1haW4gcHJvYmxlbSBgaW5zZXJ0QmVmb3JlYCBoYXMgdG8gc29sdmUgaXMgaXRlcmF0aW9uIG9yZGVyLiBTaW5jZSBFUzIwMTUsIHRoZSBpdGVyYXRpb24gb3JkZXIgZm9yIG9iamVjdFxuXHRcdFx0ICogcHJvcGVydGllcyBpcyBndWFyYW50ZWVkIHRvIGJlIHRoZSBpbnNlcnRpb24gb3JkZXIgKGV4Y2VwdCBmb3IgaW50ZWdlciBrZXlzKSBidXQgc29tZSBicm93c2VycyBiZWhhdmVcblx0XHRcdCAqIGRpZmZlcmVudGx5IHdoZW4ga2V5cyBhcmUgZGVsZXRlZCBhbmQgcmUtaW5zZXJ0ZWQuIFNvIGBpbnNlcnRCZWZvcmVgIGNhbid0IGJlIGltcGxlbWVudGVkIGJ5IHRlbXBvcmFyaWx5XG5cdFx0XHQgKiBkZWxldGluZyBwcm9wZXJ0aWVzIHdoaWNoIGlzIG5lY2Vzc2FyeSB0byBpbnNlcnQgYXQgYXJiaXRyYXJ5IHBvc2l0aW9ucy5cblx0XHRcdCAqXG5cdFx0XHQgKiBUbyBzb2x2ZSB0aGlzIHByb2JsZW0sIGBpbnNlcnRCZWZvcmVgIGRvZXNuJ3QgYWN0dWFsbHkgaW5zZXJ0IHRoZSBnaXZlbiB0b2tlbnMgaW50byB0aGUgdGFyZ2V0IG9iamVjdC5cblx0XHRcdCAqIEluc3RlYWQsIGl0IHdpbGwgY3JlYXRlIGEgbmV3IG9iamVjdCBhbmQgcmVwbGFjZSBhbGwgcmVmZXJlbmNlcyB0byB0aGUgdGFyZ2V0IG9iamVjdCB3aXRoIHRoZSBuZXcgb25lLiBUaGlzXG5cdFx0XHQgKiBjYW4gYmUgZG9uZSB3aXRob3V0IHRlbXBvcmFyaWx5IGRlbGV0aW5nIHByb3BlcnRpZXMsIHNvIHRoZSBpdGVyYXRpb24gb3JkZXIgaXMgd2VsbC1kZWZpbmVkLlxuXHRcdFx0ICpcblx0XHRcdCAqIEhvd2V2ZXIsIG9ubHkgcmVmZXJlbmNlcyB0aGF0IGNhbiBiZSByZWFjaGVkIGZyb20gYFByaXNtLmxhbmd1YWdlc2Agb3IgYGluc2VydGAgd2lsbCBiZSByZXBsYWNlZC4gSS5lLiBpZlxuXHRcdFx0ICogeW91IGhvbGQgdGhlIHRhcmdldCBvYmplY3QgaW4gYSB2YXJpYWJsZSwgdGhlbiB0aGUgdmFsdWUgb2YgdGhlIHZhcmlhYmxlIHdpbGwgbm90IGNoYW5nZS5cblx0XHRcdCAqXG5cdFx0XHQgKiBgYGBqc1xuXHRcdFx0ICogdmFyIG9sZE1hcmt1cCA9IFByaXNtLmxhbmd1YWdlcy5tYXJrdXA7XG5cdFx0XHQgKiB2YXIgbmV3TWFya3VwID0gUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnbWFya3VwJywgJ2NvbW1lbnQnLCB7IC4uLiB9KTtcblx0XHRcdCAqXG5cdFx0XHQgKiBhc3NlcnQob2xkTWFya3VwICE9PSBQcmlzbS5sYW5ndWFnZXMubWFya3VwKTtcblx0XHRcdCAqIGFzc2VydChuZXdNYXJrdXAgPT09IFByaXNtLmxhbmd1YWdlcy5tYXJrdXApO1xuXHRcdFx0ICogYGBgXG5cdFx0XHQgKlxuXHRcdFx0ICogQHBhcmFtIHtzdHJpbmd9IGluc2lkZSBUaGUgcHJvcGVydHkgb2YgYHJvb3RgIChlLmcuIGEgbGFuZ3VhZ2UgaWQgaW4gYFByaXNtLmxhbmd1YWdlc2ApIHRoYXQgY29udGFpbnMgdGhlXG5cdFx0XHQgKiBvYmplY3QgdG8gYmUgbW9kaWZpZWQuXG5cdFx0XHQgKiBAcGFyYW0ge3N0cmluZ30gYmVmb3JlIFRoZSBrZXkgdG8gaW5zZXJ0IGJlZm9yZS5cblx0XHRcdCAqIEBwYXJhbSB7R3JhbW1hcn0gaW5zZXJ0IEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBrZXktdmFsdWUgcGFpcnMgdG8gYmUgaW5zZXJ0ZWQuXG5cdFx0XHQgKiBAcGFyYW0ge09iamVjdDxzdHJpbmcsIGFueT59IFtyb290XSBUaGUgb2JqZWN0IGNvbnRhaW5pbmcgYGluc2lkZWAsIGkuZS4gdGhlIG9iamVjdCB0aGF0IGNvbnRhaW5zIHRoZVxuXHRcdFx0ICogb2JqZWN0IHRvIGJlIG1vZGlmaWVkLlxuXHRcdFx0ICpcblx0XHRcdCAqIERlZmF1bHRzIHRvIGBQcmlzbS5sYW5ndWFnZXNgLlxuXHRcdFx0ICogQHJldHVybnMge0dyYW1tYXJ9IFRoZSBuZXcgZ3JhbW1hciBvYmplY3QuXG5cdFx0XHQgKiBAcHVibGljXG5cdFx0XHQgKi9cblx0XHRcdGluc2VydEJlZm9yZTogZnVuY3Rpb24gKGluc2lkZSwgYmVmb3JlLCBpbnNlcnQsIHJvb3QpIHtcblx0XHRcdFx0cm9vdCA9IHJvb3QgfHwgLyoqIEB0eXBlIHthbnl9ICovIChfLmxhbmd1YWdlcyk7XG5cdFx0XHRcdHZhciBncmFtbWFyID0gcm9vdFtpbnNpZGVdO1xuXHRcdFx0XHQvKiogQHR5cGUge0dyYW1tYXJ9ICovXG5cdFx0XHRcdHZhciByZXQgPSB7fTtcblxuXHRcdFx0XHRmb3IgKHZhciB0b2tlbiBpbiBncmFtbWFyKSB7XG5cdFx0XHRcdFx0aWYgKGdyYW1tYXIuaGFzT3duUHJvcGVydHkodG9rZW4pKSB7XG5cblx0XHRcdFx0XHRcdGlmICh0b2tlbiA9PSBiZWZvcmUpIHtcblx0XHRcdFx0XHRcdFx0Zm9yICh2YXIgbmV3VG9rZW4gaW4gaW5zZXJ0KSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGluc2VydC5oYXNPd25Qcm9wZXJ0eShuZXdUb2tlbikpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHJldFtuZXdUb2tlbl0gPSBpbnNlcnRbbmV3VG9rZW5dO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBEbyBub3QgaW5zZXJ0IHRva2VuIHdoaWNoIGFsc28gb2NjdXIgaW4gaW5zZXJ0LiBTZWUgIzE1MjVcblx0XHRcdFx0XHRcdGlmICghaW5zZXJ0Lmhhc093blByb3BlcnR5KHRva2VuKSkge1xuXHRcdFx0XHRcdFx0XHRyZXRbdG9rZW5dID0gZ3JhbW1hclt0b2tlbl07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dmFyIG9sZCA9IHJvb3RbaW5zaWRlXTtcblx0XHRcdFx0cm9vdFtpbnNpZGVdID0gcmV0O1xuXG5cdFx0XHRcdC8vIFVwZGF0ZSByZWZlcmVuY2VzIGluIG90aGVyIGxhbmd1YWdlIGRlZmluaXRpb25zXG5cdFx0XHRcdF8ubGFuZ3VhZ2VzLkRGUyhfLmxhbmd1YWdlcywgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcblx0XHRcdFx0XHRpZiAodmFsdWUgPT09IG9sZCAmJiBrZXkgIT0gaW5zaWRlKSB7XG5cdFx0XHRcdFx0XHR0aGlzW2tleV0gPSByZXQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRyZXR1cm4gcmV0O1xuXHRcdFx0fSxcblxuXHRcdFx0Ly8gVHJhdmVyc2UgYSBsYW5ndWFnZSBkZWZpbml0aW9uIHdpdGggRGVwdGggRmlyc3QgU2VhcmNoXG5cdFx0XHRERlM6IGZ1bmN0aW9uIERGUyhvLCBjYWxsYmFjaywgdHlwZSwgdmlzaXRlZCkge1xuXHRcdFx0XHR2aXNpdGVkID0gdmlzaXRlZCB8fCB7fTtcblxuXHRcdFx0XHR2YXIgb2JqSWQgPSBfLnV0aWwub2JqSWQ7XG5cblx0XHRcdFx0Zm9yICh2YXIgaSBpbiBvKSB7XG5cdFx0XHRcdFx0aWYgKG8uaGFzT3duUHJvcGVydHkoaSkpIHtcblx0XHRcdFx0XHRcdGNhbGxiYWNrLmNhbGwobywgaSwgb1tpXSwgdHlwZSB8fCBpKTtcblxuXHRcdFx0XHRcdFx0dmFyIHByb3BlcnR5ID0gb1tpXTtcblx0XHRcdFx0XHRcdHZhciBwcm9wZXJ0eVR5cGUgPSBfLnV0aWwudHlwZShwcm9wZXJ0eSk7XG5cblx0XHRcdFx0XHRcdGlmIChwcm9wZXJ0eVR5cGUgPT09ICdPYmplY3QnICYmICF2aXNpdGVkW29iaklkKHByb3BlcnR5KV0pIHtcblx0XHRcdFx0XHRcdFx0dmlzaXRlZFtvYmpJZChwcm9wZXJ0eSldID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0REZTKHByb3BlcnR5LCBjYWxsYmFjaywgbnVsbCwgdmlzaXRlZCk7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHByb3BlcnR5VHlwZSA9PT0gJ0FycmF5JyAmJiAhdmlzaXRlZFtvYmpJZChwcm9wZXJ0eSldKSB7XG5cdFx0XHRcdFx0XHRcdHZpc2l0ZWRbb2JqSWQocHJvcGVydHkpXSA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdERGUyhwcm9wZXJ0eSwgY2FsbGJhY2ssIGksIHZpc2l0ZWQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRwbHVnaW5zOiB7fSxcblxuXHRcdC8qKlxuXHRcdCAqIFRoaXMgaXMgdGhlIG1vc3QgaGlnaC1sZXZlbCBmdW5jdGlvbiBpbiBQcmlzbeKAmXMgQVBJLlxuXHRcdCAqIEl0IGZldGNoZXMgYWxsIHRoZSBlbGVtZW50cyB0aGF0IGhhdmUgYSBgLmxhbmd1YWdlLXh4eHhgIGNsYXNzIGFuZCB0aGVuIGNhbGxzIHtAbGluayBQcmlzbS5oaWdobGlnaHRFbGVtZW50fSBvblxuXHRcdCAqIGVhY2ggb25lIG9mIHRoZW0uXG5cdFx0ICpcblx0XHQgKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gYFByaXNtLmhpZ2hsaWdodEFsbFVuZGVyKGRvY3VtZW50LCBhc3luYywgY2FsbGJhY2spYC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW2FzeW5jPWZhbHNlXSBTYW1lIGFzIGluIHtAbGluayBQcmlzbS5oaWdobGlnaHRBbGxVbmRlcn0uXG5cdFx0ICogQHBhcmFtIHtIaWdobGlnaHRDYWxsYmFja30gW2NhbGxiYWNrXSBTYW1lIGFzIGluIHtAbGluayBQcmlzbS5oaWdobGlnaHRBbGxVbmRlcn0uXG5cdFx0ICogQG1lbWJlcm9mIFByaXNtXG5cdFx0ICogQHB1YmxpY1xuXHRcdCAqL1xuXHRcdGhpZ2hsaWdodEFsbDogZnVuY3Rpb24gKGFzeW5jLCBjYWxsYmFjaykge1xuXHRcdFx0Xy5oaWdobGlnaHRBbGxVbmRlcihkb2N1bWVudCwgYXN5bmMsIGNhbGxiYWNrKTtcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogRmV0Y2hlcyBhbGwgdGhlIGRlc2NlbmRhbnRzIG9mIGBjb250YWluZXJgIHRoYXQgaGF2ZSBhIGAubGFuZ3VhZ2UteHh4eGAgY2xhc3MgYW5kIHRoZW4gY2FsbHNcblx0XHQgKiB7QGxpbmsgUHJpc20uaGlnaGxpZ2h0RWxlbWVudH0gb24gZWFjaCBvbmUgb2YgdGhlbS5cblx0XHQgKlxuXHRcdCAqIFRoZSBmb2xsb3dpbmcgaG9va3Mgd2lsbCBiZSBydW46XG5cdFx0ICogMS4gYGJlZm9yZS1oaWdobGlnaHRhbGxgXG5cdFx0ICogMi4gYGJlZm9yZS1hbGwtZWxlbWVudHMtaGlnaGxpZ2h0YFxuXHRcdCAqIDMuIEFsbCBob29rcyBvZiB7QGxpbmsgUHJpc20uaGlnaGxpZ2h0RWxlbWVudH0gZm9yIGVhY2ggZWxlbWVudC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7UGFyZW50Tm9kZX0gY29udGFpbmVyIFRoZSByb290IGVsZW1lbnQsIHdob3NlIGRlc2NlbmRhbnRzIHRoYXQgaGF2ZSBhIGAubGFuZ3VhZ2UteHh4eGAgY2xhc3Mgd2lsbCBiZSBoaWdobGlnaHRlZC5cblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFthc3luYz1mYWxzZV0gV2hldGhlciBlYWNoIGVsZW1lbnQgaXMgdG8gYmUgaGlnaGxpZ2h0ZWQgYXN5bmNocm9ub3VzbHkgdXNpbmcgV2ViIFdvcmtlcnMuXG5cdFx0ICogQHBhcmFtIHtIaWdobGlnaHRDYWxsYmFja30gW2NhbGxiYWNrXSBBbiBvcHRpb25hbCBjYWxsYmFjayB0byBiZSBpbnZva2VkIG9uIGVhY2ggZWxlbWVudCBhZnRlciBpdHMgaGlnaGxpZ2h0aW5nIGlzIGRvbmUuXG5cdFx0ICogQG1lbWJlcm9mIFByaXNtXG5cdFx0ICogQHB1YmxpY1xuXHRcdCAqL1xuXHRcdGhpZ2hsaWdodEFsbFVuZGVyOiBmdW5jdGlvbiAoY29udGFpbmVyLCBhc3luYywgY2FsbGJhY2spIHtcblx0XHRcdHZhciBlbnYgPSB7XG5cdFx0XHRcdGNhbGxiYWNrOiBjYWxsYmFjayxcblx0XHRcdFx0Y29udGFpbmVyOiBjb250YWluZXIsXG5cdFx0XHRcdHNlbGVjdG9yOiAnY29kZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl0sIFtjbGFzcyo9XCJsYW5ndWFnZS1cIl0gY29kZSwgY29kZVtjbGFzcyo9XCJsYW5nLVwiXSwgW2NsYXNzKj1cImxhbmctXCJdIGNvZGUnXG5cdFx0XHR9O1xuXG5cdFx0XHRfLmhvb2tzLnJ1bignYmVmb3JlLWhpZ2hsaWdodGFsbCcsIGVudik7XG5cblx0XHRcdGVudi5lbGVtZW50cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShlbnYuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoZW52LnNlbGVjdG9yKSk7XG5cblx0XHRcdF8uaG9va3MucnVuKCdiZWZvcmUtYWxsLWVsZW1lbnRzLWhpZ2hsaWdodCcsIGVudik7XG5cblx0XHRcdGZvciAodmFyIGkgPSAwLCBlbGVtZW50OyAoZWxlbWVudCA9IGVudi5lbGVtZW50c1tpKytdKTspIHtcblx0XHRcdFx0Xy5oaWdobGlnaHRFbGVtZW50KGVsZW1lbnQsIGFzeW5jID09PSB0cnVlLCBlbnYuY2FsbGJhY2spO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBIaWdobGlnaHRzIHRoZSBjb2RlIGluc2lkZSBhIHNpbmdsZSBlbGVtZW50LlxuXHRcdCAqXG5cdFx0ICogVGhlIGZvbGxvd2luZyBob29rcyB3aWxsIGJlIHJ1bjpcblx0XHQgKiAxLiBgYmVmb3JlLXNhbml0eS1jaGVja2Bcblx0XHQgKiAyLiBgYmVmb3JlLWhpZ2hsaWdodGBcblx0XHQgKiAzLiBBbGwgaG9va3Mgb2Yge0BsaW5rIFByaXNtLmhpZ2hsaWdodH0uIFRoZXNlIGhvb2tzIHdpbGwgYmUgcnVuIGJ5IGFuIGFzeW5jaHJvbm91cyB3b3JrZXIgaWYgYGFzeW5jYCBpcyBgdHJ1ZWAuXG5cdFx0ICogNC4gYGJlZm9yZS1pbnNlcnRgXG5cdFx0ICogNS4gYGFmdGVyLWhpZ2hsaWdodGBcblx0XHQgKiA2LiBgY29tcGxldGVgXG5cdFx0ICpcblx0XHQgKiBTb21lIHRoZSBhYm92ZSBob29rcyB3aWxsIGJlIHNraXBwZWQgaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBjb250YWluIGFueSB0ZXh0IG9yIHRoZXJlIGlzIG5vIGdyYW1tYXIgbG9hZGVkIGZvclxuXHRcdCAqIHRoZSBlbGVtZW50J3MgbGFuZ3VhZ2UuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgY29udGFpbmluZyB0aGUgY29kZS5cblx0XHQgKiBJdCBtdXN0IGhhdmUgYSBjbGFzcyBvZiBgbGFuZ3VhZ2UteHh4eGAgdG8gYmUgcHJvY2Vzc2VkLCB3aGVyZSBgeHh4eGAgaXMgYSB2YWxpZCBsYW5ndWFnZSBpZGVudGlmaWVyLlxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW2FzeW5jPWZhbHNlXSBXaGV0aGVyIHRoZSBlbGVtZW50IGlzIHRvIGJlIGhpZ2hsaWdodGVkIGFzeW5jaHJvbm91c2x5IHVzaW5nIFdlYiBXb3JrZXJzXG5cdFx0ICogdG8gaW1wcm92ZSBwZXJmb3JtYW5jZSBhbmQgYXZvaWQgYmxvY2tpbmcgdGhlIFVJIHdoZW4gaGlnaGxpZ2h0aW5nIHZlcnkgbGFyZ2UgY2h1bmtzIG9mIGNvZGUuIFRoaXMgb3B0aW9uIGlzXG5cdFx0ICogW2Rpc2FibGVkIGJ5IGRlZmF1bHRdKGh0dHBzOi8vcHJpc21qcy5jb20vZmFxLmh0bWwjd2h5LWlzLWFzeW5jaHJvbm91cy1oaWdobGlnaHRpbmctZGlzYWJsZWQtYnktZGVmYXVsdCkuXG5cdFx0ICpcblx0XHQgKiBOb3RlOiBBbGwgbGFuZ3VhZ2UgZGVmaW5pdGlvbnMgcmVxdWlyZWQgdG8gaGlnaGxpZ2h0IHRoZSBjb2RlIG11c3QgYmUgaW5jbHVkZWQgaW4gdGhlIG1haW4gYHByaXNtLmpzYCBmaWxlIGZvclxuXHRcdCAqIGFzeW5jaHJvbm91cyBoaWdobGlnaHRpbmcgdG8gd29yay4gWW91IGNhbiBidWlsZCB5b3VyIG93biBidW5kbGUgb24gdGhlXG5cdFx0ICogW0Rvd25sb2FkIHBhZ2VdKGh0dHBzOi8vcHJpc21qcy5jb20vZG93bmxvYWQuaHRtbCkuXG5cdFx0ICogQHBhcmFtIHtIaWdobGlnaHRDYWxsYmFja30gW2NhbGxiYWNrXSBBbiBvcHRpb25hbCBjYWxsYmFjayB0byBiZSBpbnZva2VkIGFmdGVyIHRoZSBoaWdobGlnaHRpbmcgaXMgZG9uZS5cblx0XHQgKiBNb3N0bHkgdXNlZnVsIHdoZW4gYGFzeW5jYCBpcyBgdHJ1ZWAsIHNpbmNlIGluIHRoYXQgY2FzZSwgdGhlIGhpZ2hsaWdodGluZyBpcyBkb25lIGFzeW5jaHJvbm91c2x5LlxuXHRcdCAqIEBtZW1iZXJvZiBQcmlzbVxuXHRcdCAqIEBwdWJsaWNcblx0XHQgKi9cblx0XHRoaWdobGlnaHRFbGVtZW50OiBmdW5jdGlvbiAoZWxlbWVudCwgYXN5bmMsIGNhbGxiYWNrKSB7XG5cdFx0XHQvLyBGaW5kIGxhbmd1YWdlXG5cdFx0XHR2YXIgbGFuZ3VhZ2UgPSBfLnV0aWwuZ2V0TGFuZ3VhZ2UoZWxlbWVudCk7XG5cdFx0XHR2YXIgZ3JhbW1hciA9IF8ubGFuZ3VhZ2VzW2xhbmd1YWdlXTtcblxuXHRcdFx0Ly8gU2V0IGxhbmd1YWdlIG9uIHRoZSBlbGVtZW50LCBpZiBub3QgcHJlc2VudFxuXHRcdFx0Xy51dGlsLnNldExhbmd1YWdlKGVsZW1lbnQsIGxhbmd1YWdlKTtcblxuXHRcdFx0Ly8gU2V0IGxhbmd1YWdlIG9uIHRoZSBwYXJlbnQsIGZvciBzdHlsaW5nXG5cdFx0XHR2YXIgcGFyZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXHRcdFx0aWYgKHBhcmVudCAmJiBwYXJlbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3ByZScpIHtcblx0XHRcdFx0Xy51dGlsLnNldExhbmd1YWdlKHBhcmVudCwgbGFuZ3VhZ2UpO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgY29kZSA9IGVsZW1lbnQudGV4dENvbnRlbnQ7XG5cblx0XHRcdHZhciBlbnYgPSB7XG5cdFx0XHRcdGVsZW1lbnQ6IGVsZW1lbnQsXG5cdFx0XHRcdGxhbmd1YWdlOiBsYW5ndWFnZSxcblx0XHRcdFx0Z3JhbW1hcjogZ3JhbW1hcixcblx0XHRcdFx0Y29kZTogY29kZVxuXHRcdFx0fTtcblxuXHRcdFx0ZnVuY3Rpb24gaW5zZXJ0SGlnaGxpZ2h0ZWRDb2RlKGhpZ2hsaWdodGVkQ29kZSkge1xuXHRcdFx0XHRlbnYuaGlnaGxpZ2h0ZWRDb2RlID0gaGlnaGxpZ2h0ZWRDb2RlO1xuXG5cdFx0XHRcdF8uaG9va3MucnVuKCdiZWZvcmUtaW5zZXJ0JywgZW52KTtcblxuXHRcdFx0XHRlbnYuZWxlbWVudC5pbm5lckhUTUwgPSBlbnYuaGlnaGxpZ2h0ZWRDb2RlO1xuXG5cdFx0XHRcdF8uaG9va3MucnVuKCdhZnRlci1oaWdobGlnaHQnLCBlbnYpO1xuXHRcdFx0XHRfLmhvb2tzLnJ1bignY29tcGxldGUnLCBlbnYpO1xuXHRcdFx0XHRjYWxsYmFjayAmJiBjYWxsYmFjay5jYWxsKGVudi5lbGVtZW50KTtcblx0XHRcdH1cblxuXHRcdFx0Xy5ob29rcy5ydW4oJ2JlZm9yZS1zYW5pdHktY2hlY2snLCBlbnYpO1xuXG5cdFx0XHQvLyBwbHVnaW5zIG1heSBjaGFuZ2UvYWRkIHRoZSBwYXJlbnQvZWxlbWVudFxuXHRcdFx0cGFyZW50ID0gZW52LmVsZW1lbnQucGFyZW50RWxlbWVudDtcblx0XHRcdGlmIChwYXJlbnQgJiYgcGFyZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdwcmUnICYmICFwYXJlbnQuaGFzQXR0cmlidXRlKCd0YWJpbmRleCcpKSB7XG5cdFx0XHRcdHBhcmVudC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFlbnYuY29kZSkge1xuXHRcdFx0XHRfLmhvb2tzLnJ1bignY29tcGxldGUnLCBlbnYpO1xuXHRcdFx0XHRjYWxsYmFjayAmJiBjYWxsYmFjay5jYWxsKGVudi5lbGVtZW50KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRfLmhvb2tzLnJ1bignYmVmb3JlLWhpZ2hsaWdodCcsIGVudik7XG5cblx0XHRcdGlmICghZW52LmdyYW1tYXIpIHtcblx0XHRcdFx0aW5zZXJ0SGlnaGxpZ2h0ZWRDb2RlKF8udXRpbC5lbmNvZGUoZW52LmNvZGUpKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoYXN5bmMgJiYgX3NlbGYuV29ya2VyKSB7XG5cdFx0XHRcdHZhciB3b3JrZXIgPSBuZXcgV29ya2VyKF8uZmlsZW5hbWUpO1xuXG5cdFx0XHRcdHdvcmtlci5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZXZ0KSB7XG5cdFx0XHRcdFx0aW5zZXJ0SGlnaGxpZ2h0ZWRDb2RlKGV2dC5kYXRhKTtcblx0XHRcdFx0fTtcblxuXHRcdFx0XHR3b3JrZXIucG9zdE1lc3NhZ2UoSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHRcdGxhbmd1YWdlOiBlbnYubGFuZ3VhZ2UsXG5cdFx0XHRcdFx0Y29kZTogZW52LmNvZGUsXG5cdFx0XHRcdFx0aW1tZWRpYXRlQ2xvc2U6IHRydWVcblx0XHRcdFx0fSkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aW5zZXJ0SGlnaGxpZ2h0ZWRDb2RlKF8uaGlnaGxpZ2h0KGVudi5jb2RlLCBlbnYuZ3JhbW1hciwgZW52Lmxhbmd1YWdlKSk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIExvdy1sZXZlbCBmdW5jdGlvbiwgb25seSB1c2UgaWYgeW91IGtub3cgd2hhdCB5b3XigJlyZSBkb2luZy4gSXQgYWNjZXB0cyBhIHN0cmluZyBvZiB0ZXh0IGFzIGlucHV0XG5cdFx0ICogYW5kIHRoZSBsYW5ndWFnZSBkZWZpbml0aW9ucyB0byB1c2UsIGFuZCByZXR1cm5zIGEgc3RyaW5nIHdpdGggdGhlIEhUTUwgcHJvZHVjZWQuXG5cdFx0ICpcblx0XHQgKiBUaGUgZm9sbG93aW5nIGhvb2tzIHdpbGwgYmUgcnVuOlxuXHRcdCAqIDEuIGBiZWZvcmUtdG9rZW5pemVgXG5cdFx0ICogMi4gYGFmdGVyLXRva2VuaXplYFxuXHRcdCAqIDMuIGB3cmFwYDogT24gZWFjaCB7QGxpbmsgVG9rZW59LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHQgQSBzdHJpbmcgd2l0aCB0aGUgY29kZSB0byBiZSBoaWdobGlnaHRlZC5cblx0XHQgKiBAcGFyYW0ge0dyYW1tYXJ9IGdyYW1tYXIgQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHRva2VucyB0byB1c2UuXG5cdFx0ICpcblx0XHQgKiBVc3VhbGx5IGEgbGFuZ3VhZ2UgZGVmaW5pdGlvbiBsaWtlIGBQcmlzbS5sYW5ndWFnZXMubWFya3VwYC5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2UgVGhlIG5hbWUgb2YgdGhlIGxhbmd1YWdlIGRlZmluaXRpb24gcGFzc2VkIHRvIGBncmFtbWFyYC5cblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgaGlnaGxpZ2h0ZWQgSFRNTC5cblx0XHQgKiBAbWVtYmVyb2YgUHJpc21cblx0XHQgKiBAcHVibGljXG5cdFx0ICogQGV4YW1wbGVcblx0XHQgKiBQcmlzbS5oaWdobGlnaHQoJ3ZhciBmb28gPSB0cnVlOycsIFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0LCAnamF2YXNjcmlwdCcpO1xuXHRcdCAqL1xuXHRcdGhpZ2hsaWdodDogZnVuY3Rpb24gKHRleHQsIGdyYW1tYXIsIGxhbmd1YWdlKSB7XG5cdFx0XHR2YXIgZW52ID0ge1xuXHRcdFx0XHRjb2RlOiB0ZXh0LFxuXHRcdFx0XHRncmFtbWFyOiBncmFtbWFyLFxuXHRcdFx0XHRsYW5ndWFnZTogbGFuZ3VhZ2Vcblx0XHRcdH07XG5cdFx0XHRfLmhvb2tzLnJ1bignYmVmb3JlLXRva2VuaXplJywgZW52KTtcblx0XHRcdGlmICghZW52LmdyYW1tYXIpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdUaGUgbGFuZ3VhZ2UgXCInICsgZW52Lmxhbmd1YWdlICsgJ1wiIGhhcyBubyBncmFtbWFyLicpO1xuXHRcdFx0fVxuXHRcdFx0ZW52LnRva2VucyA9IF8udG9rZW5pemUoZW52LmNvZGUsIGVudi5ncmFtbWFyKTtcblx0XHRcdF8uaG9va3MucnVuKCdhZnRlci10b2tlbml6ZScsIGVudik7XG5cdFx0XHRyZXR1cm4gVG9rZW4uc3RyaW5naWZ5KF8udXRpbC5lbmNvZGUoZW52LnRva2VucyksIGVudi5sYW5ndWFnZSk7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIFRoaXMgaXMgdGhlIGhlYXJ0IG9mIFByaXNtLCBhbmQgdGhlIG1vc3QgbG93LWxldmVsIGZ1bmN0aW9uIHlvdSBjYW4gdXNlLiBJdCBhY2NlcHRzIGEgc3RyaW5nIG9mIHRleHQgYXMgaW5wdXRcblx0XHQgKiBhbmQgdGhlIGxhbmd1YWdlIGRlZmluaXRpb25zIHRvIHVzZSwgYW5kIHJldHVybnMgYW4gYXJyYXkgd2l0aCB0aGUgdG9rZW5pemVkIGNvZGUuXG5cdFx0ICpcblx0XHQgKiBXaGVuIHRoZSBsYW5ndWFnZSBkZWZpbml0aW9uIGluY2x1ZGVzIG5lc3RlZCB0b2tlbnMsIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQgcmVjdXJzaXZlbHkgb24gZWFjaCBvZiB0aGVzZSB0b2tlbnMuXG5cdFx0ICpcblx0XHQgKiBUaGlzIG1ldGhvZCBjb3VsZCBiZSB1c2VmdWwgaW4gb3RoZXIgY29udGV4dHMgYXMgd2VsbCwgYXMgYSB2ZXJ5IGNydWRlIHBhcnNlci5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IEEgc3RyaW5nIHdpdGggdGhlIGNvZGUgdG8gYmUgaGlnaGxpZ2h0ZWQuXG5cdFx0ICogQHBhcmFtIHtHcmFtbWFyfSBncmFtbWFyIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSB0b2tlbnMgdG8gdXNlLlxuXHRcdCAqXG5cdFx0ICogVXN1YWxseSBhIGxhbmd1YWdlIGRlZmluaXRpb24gbGlrZSBgUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cGAuXG5cdFx0ICogQHJldHVybnMge1Rva2VuU3RyZWFtfSBBbiBhcnJheSBvZiBzdHJpbmdzIGFuZCB0b2tlbnMsIGEgdG9rZW4gc3RyZWFtLlxuXHRcdCAqIEBtZW1iZXJvZiBQcmlzbVxuXHRcdCAqIEBwdWJsaWNcblx0XHQgKiBAZXhhbXBsZVxuXHRcdCAqIGxldCBjb2RlID0gYHZhciBmb28gPSAwO2A7XG5cdFx0ICogbGV0IHRva2VucyA9IFByaXNtLnRva2VuaXplKGNvZGUsIFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0KTtcblx0XHQgKiB0b2tlbnMuZm9yRWFjaCh0b2tlbiA9PiB7XG5cdFx0ICogICAgIGlmICh0b2tlbiBpbnN0YW5jZW9mIFByaXNtLlRva2VuICYmIHRva2VuLnR5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0ICogICAgICAgICBjb25zb2xlLmxvZyhgRm91bmQgbnVtZXJpYyBsaXRlcmFsOiAke3Rva2VuLmNvbnRlbnR9YCk7XG5cdFx0ICogICAgIH1cblx0XHQgKiB9KTtcblx0XHQgKi9cblx0XHR0b2tlbml6ZTogZnVuY3Rpb24gKHRleHQsIGdyYW1tYXIpIHtcblx0XHRcdHZhciByZXN0ID0gZ3JhbW1hci5yZXN0O1xuXHRcdFx0aWYgKHJlc3QpIHtcblx0XHRcdFx0Zm9yICh2YXIgdG9rZW4gaW4gcmVzdCkge1xuXHRcdFx0XHRcdGdyYW1tYXJbdG9rZW5dID0gcmVzdFt0b2tlbl07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRkZWxldGUgZ3JhbW1hci5yZXN0O1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgdG9rZW5MaXN0ID0gbmV3IExpbmtlZExpc3QoKTtcblx0XHRcdGFkZEFmdGVyKHRva2VuTGlzdCwgdG9rZW5MaXN0LmhlYWQsIHRleHQpO1xuXG5cdFx0XHRtYXRjaEdyYW1tYXIodGV4dCwgdG9rZW5MaXN0LCBncmFtbWFyLCB0b2tlbkxpc3QuaGVhZCwgMCk7XG5cblx0XHRcdHJldHVybiB0b0FycmF5KHRva2VuTGlzdCk7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIEBuYW1lc3BhY2Vcblx0XHQgKiBAbWVtYmVyb2YgUHJpc21cblx0XHQgKiBAcHVibGljXG5cdFx0ICovXG5cdFx0aG9va3M6IHtcblx0XHRcdGFsbDoge30sXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogQWRkcyB0aGUgZ2l2ZW4gY2FsbGJhY2sgdG8gdGhlIGxpc3Qgb2YgY2FsbGJhY2tzIGZvciB0aGUgZ2l2ZW4gaG9vay5cblx0XHRcdCAqXG5cdFx0XHQgKiBUaGUgY2FsbGJhY2sgd2lsbCBiZSBpbnZva2VkIHdoZW4gdGhlIGhvb2sgaXQgaXMgcmVnaXN0ZXJlZCBmb3IgaXMgcnVuLlxuXHRcdFx0ICogSG9va3MgYXJlIHVzdWFsbHkgZGlyZWN0bHkgcnVuIGJ5IGEgaGlnaGxpZ2h0IGZ1bmN0aW9uIGJ1dCB5b3UgY2FuIGFsc28gcnVuIGhvb2tzIHlvdXJzZWxmLlxuXHRcdFx0ICpcblx0XHRcdCAqIE9uZSBjYWxsYmFjayBmdW5jdGlvbiBjYW4gYmUgcmVnaXN0ZXJlZCB0byBtdWx0aXBsZSBob29rcyBhbmQgdGhlIHNhbWUgaG9vayBtdWx0aXBsZSB0aW1lcy5cblx0XHRcdCAqXG5cdFx0XHQgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgaG9vay5cblx0XHRcdCAqIEBwYXJhbSB7SG9va0NhbGxiYWNrfSBjYWxsYmFjayBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgZ2l2ZW4gZW52aXJvbm1lbnQgdmFyaWFibGVzLlxuXHRcdFx0ICogQHB1YmxpY1xuXHRcdFx0ICovXG5cdFx0XHRhZGQ6IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaykge1xuXHRcdFx0XHR2YXIgaG9va3MgPSBfLmhvb2tzLmFsbDtcblxuXHRcdFx0XHRob29rc1tuYW1lXSA9IGhvb2tzW25hbWVdIHx8IFtdO1xuXG5cdFx0XHRcdGhvb2tzW25hbWVdLnB1c2goY2FsbGJhY2spO1xuXHRcdFx0fSxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBSdW5zIGEgaG9vayBpbnZva2luZyBhbGwgcmVnaXN0ZXJlZCBjYWxsYmFja3Mgd2l0aCB0aGUgZ2l2ZW4gZW52aXJvbm1lbnQgdmFyaWFibGVzLlxuXHRcdFx0ICpcblx0XHRcdCAqIENhbGxiYWNrcyB3aWxsIGJlIGludm9rZWQgc3luY2hyb25vdXNseSBhbmQgaW4gdGhlIG9yZGVyIGluIHdoaWNoIHRoZXkgd2VyZSByZWdpc3RlcmVkLlxuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBob29rLlxuXHRcdFx0ICogQHBhcmFtIHtPYmplY3Q8c3RyaW5nLCBhbnk+fSBlbnYgVGhlIGVudmlyb25tZW50IHZhcmlhYmxlcyBvZiB0aGUgaG9vayBwYXNzZWQgdG8gYWxsIGNhbGxiYWNrcyByZWdpc3RlcmVkLlxuXHRcdFx0ICogQHB1YmxpY1xuXHRcdFx0ICovXG5cdFx0XHRydW46IGZ1bmN0aW9uIChuYW1lLCBlbnYpIHtcblx0XHRcdFx0dmFyIGNhbGxiYWNrcyA9IF8uaG9va3MuYWxsW25hbWVdO1xuXG5cdFx0XHRcdGlmICghY2FsbGJhY2tzIHx8ICFjYWxsYmFja3MubGVuZ3RoKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Zm9yICh2YXIgaSA9IDAsIGNhbGxiYWNrOyAoY2FsbGJhY2sgPSBjYWxsYmFja3NbaSsrXSk7KSB7XG5cdFx0XHRcdFx0Y2FsbGJhY2soZW52KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRUb2tlbjogVG9rZW5cblx0fTtcblx0X3NlbGYuUHJpc20gPSBfO1xuXG5cblx0Ly8gVHlwZXNjcmlwdCBub3RlOlxuXHQvLyBUaGUgZm9sbG93aW5nIGNhbiBiZSB1c2VkIHRvIGltcG9ydCB0aGUgVG9rZW4gdHlwZSBpbiBKU0RvYzpcblx0Ly9cblx0Ly8gICBAdHlwZWRlZiB7SW5zdGFuY2VUeXBlPGltcG9ydChcIi4vcHJpc20tY29yZVwiKVtcIlRva2VuXCJdPn0gVG9rZW5cblxuXHQvKipcblx0ICogQ3JlYXRlcyBhIG5ldyB0b2tlbi5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgU2VlIHtAbGluayBUb2tlbiN0eXBlIHR5cGV9XG5cdCAqIEBwYXJhbSB7c3RyaW5nIHwgVG9rZW5TdHJlYW19IGNvbnRlbnQgU2VlIHtAbGluayBUb2tlbiNjb250ZW50IGNvbnRlbnR9XG5cdCAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBbYWxpYXNdIFRoZSBhbGlhcyhlcykgb2YgdGhlIHRva2VuLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW21hdGNoZWRTdHI9XCJcIl0gQSBjb3B5IG9mIHRoZSBmdWxsIHN0cmluZyB0aGlzIHRva2VuIHdhcyBjcmVhdGVkIGZyb20uXG5cdCAqIEBjbGFzc1xuXHQgKiBAZ2xvYmFsXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdGZ1bmN0aW9uIFRva2VuKHR5cGUsIGNvbnRlbnQsIGFsaWFzLCBtYXRjaGVkU3RyKSB7XG5cdFx0LyoqXG5cdFx0ICogVGhlIHR5cGUgb2YgdGhlIHRva2VuLlxuXHRcdCAqXG5cdFx0ICogVGhpcyBpcyB1c3VhbGx5IHRoZSBrZXkgb2YgYSBwYXR0ZXJuIGluIGEge0BsaW5rIEdyYW1tYXJ9LlxuXHRcdCAqXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKiBAc2VlIEdyYW1tYXJUb2tlblxuXHRcdCAqIEBwdWJsaWNcblx0XHQgKi9cblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xuXHRcdC8qKlxuXHRcdCAqIFRoZSBzdHJpbmdzIG9yIHRva2VucyBjb250YWluZWQgYnkgdGhpcyB0b2tlbi5cblx0XHQgKlxuXHRcdCAqIFRoaXMgd2lsbCBiZSBhIHRva2VuIHN0cmVhbSBpZiB0aGUgcGF0dGVybiBtYXRjaGVkIGFsc28gZGVmaW5lZCBhbiBgaW5zaWRlYCBncmFtbWFyLlxuXHRcdCAqXG5cdFx0ICogQHR5cGUge3N0cmluZyB8IFRva2VuU3RyZWFtfVxuXHRcdCAqIEBwdWJsaWNcblx0XHQgKi9cblx0XHR0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuXHRcdC8qKlxuXHRcdCAqIFRoZSBhbGlhcyhlcykgb2YgdGhlIHRva2VuLlxuXHRcdCAqXG5cdFx0ICogQHR5cGUge3N0cmluZ3xzdHJpbmdbXX1cblx0XHQgKiBAc2VlIEdyYW1tYXJUb2tlblxuXHRcdCAqIEBwdWJsaWNcblx0XHQgKi9cblx0XHR0aGlzLmFsaWFzID0gYWxpYXM7XG5cdFx0Ly8gQ29weSBvZiB0aGUgZnVsbCBzdHJpbmcgdGhpcyB0b2tlbiB3YXMgY3JlYXRlZCBmcm9tXG5cdFx0dGhpcy5sZW5ndGggPSAobWF0Y2hlZFN0ciB8fCAnJykubGVuZ3RoIHwgMDtcblx0fVxuXG5cdC8qKlxuXHQgKiBBIHRva2VuIHN0cmVhbSBpcyBhbiBhcnJheSBvZiBzdHJpbmdzIGFuZCB7QGxpbmsgVG9rZW4gVG9rZW59IG9iamVjdHMuXG5cdCAqXG5cdCAqIFRva2VuIHN0cmVhbXMgaGF2ZSB0byBmdWxmaWxsIGEgZmV3IHByb3BlcnRpZXMgdGhhdCBhcmUgYXNzdW1lZCBieSBtb3N0IGZ1bmN0aW9ucyAobW9zdGx5IGludGVybmFsIG9uZXMpIHRoYXQgcHJvY2Vzc1xuXHQgKiB0aGVtLlxuXHQgKlxuXHQgKiAxLiBObyBhZGphY2VudCBzdHJpbmdzLlxuXHQgKiAyLiBObyBlbXB0eSBzdHJpbmdzLlxuXHQgKlxuXHQgKiAgICBUaGUgb25seSBleGNlcHRpb24gaGVyZSBpcyB0aGUgdG9rZW4gc3RyZWFtIHRoYXQgb25seSBjb250YWlucyB0aGUgZW1wdHkgc3RyaW5nIGFuZCBub3RoaW5nIGVsc2UuXG5cdCAqXG5cdCAqIEB0eXBlZGVmIHtBcnJheTxzdHJpbmcgfCBUb2tlbj59IFRva2VuU3RyZWFtXG5cdCAqIEBnbG9iYWxcblx0ICogQHB1YmxpY1xuXHQgKi9cblxuXHQvKipcblx0ICogQ29udmVydHMgdGhlIGdpdmVuIHRva2VuIG9yIHRva2VuIHN0cmVhbSB0byBhbiBIVE1MIHJlcHJlc2VudGF0aW9uLlxuXHQgKlxuXHQgKiBUaGUgZm9sbG93aW5nIGhvb2tzIHdpbGwgYmUgcnVuOlxuXHQgKiAxLiBgd3JhcGA6IE9uIGVhY2gge0BsaW5rIFRva2VufS5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmcgfCBUb2tlbiB8IFRva2VuU3RyZWFtfSBvIFRoZSB0b2tlbiBvciB0b2tlbiBzdHJlYW0gdG8gYmUgY29udmVydGVkLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2UgVGhlIG5hbWUgb2YgY3VycmVudCBsYW5ndWFnZS5cblx0ICogQHJldHVybnMge3N0cmluZ30gVGhlIEhUTUwgcmVwcmVzZW50YXRpb24gb2YgdGhlIHRva2VuIG9yIHRva2VuIHN0cmVhbS5cblx0ICogQG1lbWJlcm9mIFRva2VuXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdFRva2VuLnN0cmluZ2lmeSA9IGZ1bmN0aW9uIHN0cmluZ2lmeShvLCBsYW5ndWFnZSkge1xuXHRcdGlmICh0eXBlb2YgbyA9PSAnc3RyaW5nJykge1xuXHRcdFx0cmV0dXJuIG87XG5cdFx0fVxuXHRcdGlmIChBcnJheS5pc0FycmF5KG8pKSB7XG5cdFx0XHR2YXIgcyA9ICcnO1xuXHRcdFx0by5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRcdHMgKz0gc3RyaW5naWZ5KGUsIGxhbmd1YWdlKTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIHM7XG5cdFx0fVxuXG5cdFx0dmFyIGVudiA9IHtcblx0XHRcdHR5cGU6IG8udHlwZSxcblx0XHRcdGNvbnRlbnQ6IHN0cmluZ2lmeShvLmNvbnRlbnQsIGxhbmd1YWdlKSxcblx0XHRcdHRhZzogJ3NwYW4nLFxuXHRcdFx0Y2xhc3NlczogWyd0b2tlbicsIG8udHlwZV0sXG5cdFx0XHRhdHRyaWJ1dGVzOiB7fSxcblx0XHRcdGxhbmd1YWdlOiBsYW5ndWFnZVxuXHRcdH07XG5cblx0XHR2YXIgYWxpYXNlcyA9IG8uYWxpYXM7XG5cdFx0aWYgKGFsaWFzZXMpIHtcblx0XHRcdGlmIChBcnJheS5pc0FycmF5KGFsaWFzZXMpKSB7XG5cdFx0XHRcdEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGVudi5jbGFzc2VzLCBhbGlhc2VzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGVudi5jbGFzc2VzLnB1c2goYWxpYXNlcyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Xy5ob29rcy5ydW4oJ3dyYXAnLCBlbnYpO1xuXG5cdFx0dmFyIGF0dHJpYnV0ZXMgPSAnJztcblx0XHRmb3IgKHZhciBuYW1lIGluIGVudi5hdHRyaWJ1dGVzKSB7XG5cdFx0XHRhdHRyaWJ1dGVzICs9ICcgJyArIG5hbWUgKyAnPVwiJyArIChlbnYuYXR0cmlidXRlc1tuYW1lXSB8fCAnJykucmVwbGFjZSgvXCIvZywgJyZxdW90OycpICsgJ1wiJztcblx0XHR9XG5cblx0XHRyZXR1cm4gJzwnICsgZW52LnRhZyArICcgY2xhc3M9XCInICsgZW52LmNsYXNzZXMuam9pbignICcpICsgJ1wiJyArIGF0dHJpYnV0ZXMgKyAnPicgKyBlbnYuY29udGVudCArICc8LycgKyBlbnYudGFnICsgJz4nO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge1JlZ0V4cH0gcGF0dGVyblxuXHQgKiBAcGFyYW0ge251bWJlcn0gcG9zXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0XG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gbG9va2JlaGluZFxuXHQgKiBAcmV0dXJucyB7UmVnRXhwRXhlY0FycmF5IHwgbnVsbH1cblx0ICovXG5cdGZ1bmN0aW9uIG1hdGNoUGF0dGVybihwYXR0ZXJuLCBwb3MsIHRleHQsIGxvb2tiZWhpbmQpIHtcblx0XHRwYXR0ZXJuLmxhc3RJbmRleCA9IHBvcztcblx0XHR2YXIgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWModGV4dCk7XG5cdFx0aWYgKG1hdGNoICYmIGxvb2tiZWhpbmQgJiYgbWF0Y2hbMV0pIHtcblx0XHRcdC8vIGNoYW5nZSB0aGUgbWF0Y2ggdG8gcmVtb3ZlIHRoZSB0ZXh0IG1hdGNoZWQgYnkgdGhlIFByaXNtIGxvb2tiZWhpbmQgZ3JvdXBcblx0XHRcdHZhciBsb29rYmVoaW5kTGVuZ3RoID0gbWF0Y2hbMV0ubGVuZ3RoO1xuXHRcdFx0bWF0Y2guaW5kZXggKz0gbG9va2JlaGluZExlbmd0aDtcblx0XHRcdG1hdGNoWzBdID0gbWF0Y2hbMF0uc2xpY2UobG9va2JlaGluZExlbmd0aCk7XG5cdFx0fVxuXHRcdHJldHVybiBtYXRjaDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dFxuXHQgKiBAcGFyYW0ge0xpbmtlZExpc3Q8c3RyaW5nIHwgVG9rZW4+fSB0b2tlbkxpc3Rcblx0ICogQHBhcmFtIHthbnl9IGdyYW1tYXJcblx0ICogQHBhcmFtIHtMaW5rZWRMaXN0Tm9kZTxzdHJpbmcgfCBUb2tlbj59IHN0YXJ0Tm9kZVxuXHQgKiBAcGFyYW0ge251bWJlcn0gc3RhcnRQb3Ncblx0ICogQHBhcmFtIHtSZW1hdGNoT3B0aW9uc30gW3JlbWF0Y2hdXG5cdCAqIEByZXR1cm5zIHt2b2lkfVxuXHQgKiBAcHJpdmF0ZVxuXHQgKlxuXHQgKiBAdHlwZWRlZiBSZW1hdGNoT3B0aW9uc1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gY2F1c2Vcblx0ICogQHByb3BlcnR5IHtudW1iZXJ9IHJlYWNoXG5cdCAqL1xuXHRmdW5jdGlvbiBtYXRjaEdyYW1tYXIodGV4dCwgdG9rZW5MaXN0LCBncmFtbWFyLCBzdGFydE5vZGUsIHN0YXJ0UG9zLCByZW1hdGNoKSB7XG5cdFx0Zm9yICh2YXIgdG9rZW4gaW4gZ3JhbW1hcikge1xuXHRcdFx0aWYgKCFncmFtbWFyLmhhc093blByb3BlcnR5KHRva2VuKSB8fCAhZ3JhbW1hclt0b2tlbl0pIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBwYXR0ZXJucyA9IGdyYW1tYXJbdG9rZW5dO1xuXHRcdFx0cGF0dGVybnMgPSBBcnJheS5pc0FycmF5KHBhdHRlcm5zKSA/IHBhdHRlcm5zIDogW3BhdHRlcm5zXTtcblxuXHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBwYXR0ZXJucy5sZW5ndGg7ICsraikge1xuXHRcdFx0XHRpZiAocmVtYXRjaCAmJiByZW1hdGNoLmNhdXNlID09IHRva2VuICsgJywnICsgaikge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciBwYXR0ZXJuT2JqID0gcGF0dGVybnNbal07XG5cdFx0XHRcdHZhciBpbnNpZGUgPSBwYXR0ZXJuT2JqLmluc2lkZTtcblx0XHRcdFx0dmFyIGxvb2tiZWhpbmQgPSAhIXBhdHRlcm5PYmoubG9va2JlaGluZDtcblx0XHRcdFx0dmFyIGdyZWVkeSA9ICEhcGF0dGVybk9iai5ncmVlZHk7XG5cdFx0XHRcdHZhciBhbGlhcyA9IHBhdHRlcm5PYmouYWxpYXM7XG5cblx0XHRcdFx0aWYgKGdyZWVkeSAmJiAhcGF0dGVybk9iai5wYXR0ZXJuLmdsb2JhbCkge1xuXHRcdFx0XHRcdC8vIFdpdGhvdXQgdGhlIGdsb2JhbCBmbGFnLCBsYXN0SW5kZXggd29uJ3Qgd29ya1xuXHRcdFx0XHRcdHZhciBmbGFncyA9IHBhdHRlcm5PYmoucGF0dGVybi50b1N0cmluZygpLm1hdGNoKC9baW1zdXldKiQvKVswXTtcblx0XHRcdFx0XHRwYXR0ZXJuT2JqLnBhdHRlcm4gPSBSZWdFeHAocGF0dGVybk9iai5wYXR0ZXJuLnNvdXJjZSwgZmxhZ3MgKyAnZycpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LyoqIEB0eXBlIHtSZWdFeHB9ICovXG5cdFx0XHRcdHZhciBwYXR0ZXJuID0gcGF0dGVybk9iai5wYXR0ZXJuIHx8IHBhdHRlcm5PYmo7XG5cblx0XHRcdFx0Zm9yICggLy8gaXRlcmF0ZSB0aGUgdG9rZW4gbGlzdCBhbmQga2VlcCB0cmFjayBvZiB0aGUgY3VycmVudCB0b2tlbi9zdHJpbmcgcG9zaXRpb25cblx0XHRcdFx0XHR2YXIgY3VycmVudE5vZGUgPSBzdGFydE5vZGUubmV4dCwgcG9zID0gc3RhcnRQb3M7XG5cdFx0XHRcdFx0Y3VycmVudE5vZGUgIT09IHRva2VuTGlzdC50YWlsO1xuXHRcdFx0XHRcdHBvcyArPSBjdXJyZW50Tm9kZS52YWx1ZS5sZW5ndGgsIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUubmV4dFxuXHRcdFx0XHQpIHtcblxuXHRcdFx0XHRcdGlmIChyZW1hdGNoICYmIHBvcyA+PSByZW1hdGNoLnJlYWNoKSB7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR2YXIgc3RyID0gY3VycmVudE5vZGUudmFsdWU7XG5cblx0XHRcdFx0XHRpZiAodG9rZW5MaXN0Lmxlbmd0aCA+IHRleHQubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHQvLyBTb21ldGhpbmcgd2VudCB0ZXJyaWJseSB3cm9uZywgQUJPUlQsIEFCT1JUIVxuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChzdHIgaW5zdGFuY2VvZiBUb2tlbikge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dmFyIHJlbW92ZUNvdW50ID0gMTsgLy8gdGhpcyBpcyB0aGUgdG8gcGFyYW1ldGVyIG9mIHJlbW92ZUJldHdlZW5cblx0XHRcdFx0XHR2YXIgbWF0Y2g7XG5cblx0XHRcdFx0XHRpZiAoZ3JlZWR5KSB7XG5cdFx0XHRcdFx0XHRtYXRjaCA9IG1hdGNoUGF0dGVybihwYXR0ZXJuLCBwb3MsIHRleHQsIGxvb2tiZWhpbmQpO1xuXHRcdFx0XHRcdFx0aWYgKCFtYXRjaCB8fCBtYXRjaC5pbmRleCA+PSB0ZXh0Lmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0dmFyIGZyb20gPSBtYXRjaC5pbmRleDtcblx0XHRcdFx0XHRcdHZhciB0byA9IG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoO1xuXHRcdFx0XHRcdFx0dmFyIHAgPSBwb3M7XG5cblx0XHRcdFx0XHRcdC8vIGZpbmQgdGhlIG5vZGUgdGhhdCBjb250YWlucyB0aGUgbWF0Y2hcblx0XHRcdFx0XHRcdHAgKz0gY3VycmVudE5vZGUudmFsdWUubGVuZ3RoO1xuXHRcdFx0XHRcdFx0d2hpbGUgKGZyb20gPj0gcCkge1xuXHRcdFx0XHRcdFx0XHRjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLm5leHQ7XG5cdFx0XHRcdFx0XHRcdHAgKz0gY3VycmVudE5vZGUudmFsdWUubGVuZ3RoO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Ly8gYWRqdXN0IHBvcyAoYW5kIHApXG5cdFx0XHRcdFx0XHRwIC09IGN1cnJlbnROb2RlLnZhbHVlLmxlbmd0aDtcblx0XHRcdFx0XHRcdHBvcyA9IHA7XG5cblx0XHRcdFx0XHRcdC8vIHRoZSBjdXJyZW50IG5vZGUgaXMgYSBUb2tlbiwgdGhlbiB0aGUgbWF0Y2ggc3RhcnRzIGluc2lkZSBhbm90aGVyIFRva2VuLCB3aGljaCBpcyBpbnZhbGlkXG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudE5vZGUudmFsdWUgaW5zdGFuY2VvZiBUb2tlbikge1xuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gZmluZCB0aGUgbGFzdCBub2RlIHdoaWNoIGlzIGFmZmVjdGVkIGJ5IHRoaXMgbWF0Y2hcblx0XHRcdFx0XHRcdGZvciAoXG5cdFx0XHRcdFx0XHRcdHZhciBrID0gY3VycmVudE5vZGU7XG5cdFx0XHRcdFx0XHRcdGsgIT09IHRva2VuTGlzdC50YWlsICYmIChwIDwgdG8gfHwgdHlwZW9mIGsudmFsdWUgPT09ICdzdHJpbmcnKTtcblx0XHRcdFx0XHRcdFx0ayA9IGsubmV4dFxuXHRcdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRcdHJlbW92ZUNvdW50Kys7XG5cdFx0XHRcdFx0XHRcdHAgKz0gay52YWx1ZS5sZW5ndGg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRyZW1vdmVDb3VudC0tO1xuXG5cdFx0XHRcdFx0XHQvLyByZXBsYWNlIHdpdGggdGhlIG5ldyBtYXRjaFxuXHRcdFx0XHRcdFx0c3RyID0gdGV4dC5zbGljZShwb3MsIHApO1xuXHRcdFx0XHRcdFx0bWF0Y2guaW5kZXggLT0gcG9zO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRtYXRjaCA9IG1hdGNoUGF0dGVybihwYXR0ZXJuLCAwLCBzdHIsIGxvb2tiZWhpbmQpO1xuXHRcdFx0XHRcdFx0aWYgKCFtYXRjaCkge1xuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVkZWNsYXJlXG5cdFx0XHRcdFx0dmFyIGZyb20gPSBtYXRjaC5pbmRleDtcblx0XHRcdFx0XHR2YXIgbWF0Y2hTdHIgPSBtYXRjaFswXTtcblx0XHRcdFx0XHR2YXIgYmVmb3JlID0gc3RyLnNsaWNlKDAsIGZyb20pO1xuXHRcdFx0XHRcdHZhciBhZnRlciA9IHN0ci5zbGljZShmcm9tICsgbWF0Y2hTdHIubGVuZ3RoKTtcblxuXHRcdFx0XHRcdHZhciByZWFjaCA9IHBvcyArIHN0ci5sZW5ndGg7XG5cdFx0XHRcdFx0aWYgKHJlbWF0Y2ggJiYgcmVhY2ggPiByZW1hdGNoLnJlYWNoKSB7XG5cdFx0XHRcdFx0XHRyZW1hdGNoLnJlYWNoID0gcmVhY2g7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dmFyIHJlbW92ZUZyb20gPSBjdXJyZW50Tm9kZS5wcmV2O1xuXG5cdFx0XHRcdFx0aWYgKGJlZm9yZSkge1xuXHRcdFx0XHRcdFx0cmVtb3ZlRnJvbSA9IGFkZEFmdGVyKHRva2VuTGlzdCwgcmVtb3ZlRnJvbSwgYmVmb3JlKTtcblx0XHRcdFx0XHRcdHBvcyArPSBiZWZvcmUubGVuZ3RoO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJlbW92ZVJhbmdlKHRva2VuTGlzdCwgcmVtb3ZlRnJvbSwgcmVtb3ZlQ291bnQpO1xuXG5cdFx0XHRcdFx0dmFyIHdyYXBwZWQgPSBuZXcgVG9rZW4odG9rZW4sIGluc2lkZSA/IF8udG9rZW5pemUobWF0Y2hTdHIsIGluc2lkZSkgOiBtYXRjaFN0ciwgYWxpYXMsIG1hdGNoU3RyKTtcblx0XHRcdFx0XHRjdXJyZW50Tm9kZSA9IGFkZEFmdGVyKHRva2VuTGlzdCwgcmVtb3ZlRnJvbSwgd3JhcHBlZCk7XG5cblx0XHRcdFx0XHRpZiAoYWZ0ZXIpIHtcblx0XHRcdFx0XHRcdGFkZEFmdGVyKHRva2VuTGlzdCwgY3VycmVudE5vZGUsIGFmdGVyKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAocmVtb3ZlQ291bnQgPiAxKSB7XG5cdFx0XHRcdFx0XHQvLyBhdCBsZWFzdCBvbmUgVG9rZW4gb2JqZWN0IHdhcyByZW1vdmVkLCBzbyB3ZSBoYXZlIHRvIGRvIHNvbWUgcmVtYXRjaGluZ1xuXHRcdFx0XHRcdFx0Ly8gdGhpcyBjYW4gb25seSBoYXBwZW4gaWYgdGhlIGN1cnJlbnQgcGF0dGVybiBpcyBncmVlZHlcblxuXHRcdFx0XHRcdFx0LyoqIEB0eXBlIHtSZW1hdGNoT3B0aW9uc30gKi9cblx0XHRcdFx0XHRcdHZhciBuZXN0ZWRSZW1hdGNoID0ge1xuXHRcdFx0XHRcdFx0XHRjYXVzZTogdG9rZW4gKyAnLCcgKyBqLFxuXHRcdFx0XHRcdFx0XHRyZWFjaDogcmVhY2hcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRtYXRjaEdyYW1tYXIodGV4dCwgdG9rZW5MaXN0LCBncmFtbWFyLCBjdXJyZW50Tm9kZS5wcmV2LCBwb3MsIG5lc3RlZFJlbWF0Y2gpO1xuXG5cdFx0XHRcdFx0XHQvLyB0aGUgcmVhY2ggbWlnaHQgaGF2ZSBiZWVuIGV4dGVuZGVkIGJlY2F1c2Ugb2YgdGhlIHJlbWF0Y2hpbmdcblx0XHRcdFx0XHRcdGlmIChyZW1hdGNoICYmIG5lc3RlZFJlbWF0Y2gucmVhY2ggPiByZW1hdGNoLnJlYWNoKSB7XG5cdFx0XHRcdFx0XHRcdHJlbWF0Y2gucmVhY2ggPSBuZXN0ZWRSZW1hdGNoLnJlYWNoO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBAdHlwZWRlZiBMaW5rZWRMaXN0Tm9kZVxuXHQgKiBAcHJvcGVydHkge1R9IHZhbHVlXG5cdCAqIEBwcm9wZXJ0eSB7TGlua2VkTGlzdE5vZGU8VD4gfCBudWxsfSBwcmV2IFRoZSBwcmV2aW91cyBub2RlLlxuXHQgKiBAcHJvcGVydHkge0xpbmtlZExpc3ROb2RlPFQ+IHwgbnVsbH0gbmV4dCBUaGUgbmV4dCBub2RlLlxuXHQgKiBAdGVtcGxhdGUgVFxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblxuXHQvKipcblx0ICogQHRlbXBsYXRlIFRcblx0ICogQHByaXZhdGVcblx0ICovXG5cdGZ1bmN0aW9uIExpbmtlZExpc3QoKSB7XG5cdFx0LyoqIEB0eXBlIHtMaW5rZWRMaXN0Tm9kZTxUPn0gKi9cblx0XHR2YXIgaGVhZCA9IHsgdmFsdWU6IG51bGwsIHByZXY6IG51bGwsIG5leHQ6IG51bGwgfTtcblx0XHQvKiogQHR5cGUge0xpbmtlZExpc3ROb2RlPFQ+fSAqL1xuXHRcdHZhciB0YWlsID0geyB2YWx1ZTogbnVsbCwgcHJldjogaGVhZCwgbmV4dDogbnVsbCB9O1xuXHRcdGhlYWQubmV4dCA9IHRhaWw7XG5cblx0XHQvKiogQHR5cGUge0xpbmtlZExpc3ROb2RlPFQ+fSAqL1xuXHRcdHRoaXMuaGVhZCA9IGhlYWQ7XG5cdFx0LyoqIEB0eXBlIHtMaW5rZWRMaXN0Tm9kZTxUPn0gKi9cblx0XHR0aGlzLnRhaWwgPSB0YWlsO1xuXHRcdHRoaXMubGVuZ3RoID0gMDtcblx0fVxuXG5cdC8qKlxuXHQgKiBBZGRzIGEgbmV3IG5vZGUgd2l0aCB0aGUgZ2l2ZW4gdmFsdWUgdG8gdGhlIGxpc3QuXG5cdCAqXG5cdCAqIEBwYXJhbSB7TGlua2VkTGlzdDxUPn0gbGlzdFxuXHQgKiBAcGFyYW0ge0xpbmtlZExpc3ROb2RlPFQ+fSBub2RlXG5cdCAqIEBwYXJhbSB7VH0gdmFsdWVcblx0ICogQHJldHVybnMge0xpbmtlZExpc3ROb2RlPFQ+fSBUaGUgYWRkZWQgbm9kZS5cblx0ICogQHRlbXBsYXRlIFRcblx0ICovXG5cdGZ1bmN0aW9uIGFkZEFmdGVyKGxpc3QsIG5vZGUsIHZhbHVlKSB7XG5cdFx0Ly8gYXNzdW1lcyB0aGF0IG5vZGUgIT0gbGlzdC50YWlsICYmIHZhbHVlcy5sZW5ndGggPj0gMFxuXHRcdHZhciBuZXh0ID0gbm9kZS5uZXh0O1xuXG5cdFx0dmFyIG5ld05vZGUgPSB7IHZhbHVlOiB2YWx1ZSwgcHJldjogbm9kZSwgbmV4dDogbmV4dCB9O1xuXHRcdG5vZGUubmV4dCA9IG5ld05vZGU7XG5cdFx0bmV4dC5wcmV2ID0gbmV3Tm9kZTtcblx0XHRsaXN0Lmxlbmd0aCsrO1xuXG5cdFx0cmV0dXJuIG5ld05vZGU7XG5cdH1cblx0LyoqXG5cdCAqIFJlbW92ZXMgYGNvdW50YCBub2RlcyBhZnRlciB0aGUgZ2l2ZW4gbm9kZS4gVGhlIGdpdmVuIG5vZGUgd2lsbCBub3QgYmUgcmVtb3ZlZC5cblx0ICpcblx0ICogQHBhcmFtIHtMaW5rZWRMaXN0PFQ+fSBsaXN0XG5cdCAqIEBwYXJhbSB7TGlua2VkTGlzdE5vZGU8VD59IG5vZGVcblx0ICogQHBhcmFtIHtudW1iZXJ9IGNvdW50XG5cdCAqIEB0ZW1wbGF0ZSBUXG5cdCAqL1xuXHRmdW5jdGlvbiByZW1vdmVSYW5nZShsaXN0LCBub2RlLCBjb3VudCkge1xuXHRcdHZhciBuZXh0ID0gbm9kZS5uZXh0O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY291bnQgJiYgbmV4dCAhPT0gbGlzdC50YWlsOyBpKyspIHtcblx0XHRcdG5leHQgPSBuZXh0Lm5leHQ7XG5cdFx0fVxuXHRcdG5vZGUubmV4dCA9IG5leHQ7XG5cdFx0bmV4dC5wcmV2ID0gbm9kZTtcblx0XHRsaXN0Lmxlbmd0aCAtPSBpO1xuXHR9XG5cdC8qKlxuXHQgKiBAcGFyYW0ge0xpbmtlZExpc3Q8VD59IGxpc3Rcblx0ICogQHJldHVybnMge1RbXX1cblx0ICogQHRlbXBsYXRlIFRcblx0ICovXG5cdGZ1bmN0aW9uIHRvQXJyYXkobGlzdCkge1xuXHRcdHZhciBhcnJheSA9IFtdO1xuXHRcdHZhciBub2RlID0gbGlzdC5oZWFkLm5leHQ7XG5cdFx0d2hpbGUgKG5vZGUgIT09IGxpc3QudGFpbCkge1xuXHRcdFx0YXJyYXkucHVzaChub2RlLnZhbHVlKTtcblx0XHRcdG5vZGUgPSBub2RlLm5leHQ7XG5cdFx0fVxuXHRcdHJldHVybiBhcnJheTtcblx0fVxuXG5cblx0aWYgKCFfc2VsZi5kb2N1bWVudCkge1xuXHRcdGlmICghX3NlbGYuYWRkRXZlbnRMaXN0ZW5lcikge1xuXHRcdFx0Ly8gaW4gTm9kZS5qc1xuXHRcdFx0cmV0dXJuIF87XG5cdFx0fVxuXG5cdFx0aWYgKCFfLmRpc2FibGVXb3JrZXJNZXNzYWdlSGFuZGxlcikge1xuXHRcdFx0Ly8gSW4gd29ya2VyXG5cdFx0XHRfc2VsZi5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gKGV2dCkge1xuXHRcdFx0XHR2YXIgbWVzc2FnZSA9IEpTT04ucGFyc2UoZXZ0LmRhdGEpO1xuXHRcdFx0XHR2YXIgbGFuZyA9IG1lc3NhZ2UubGFuZ3VhZ2U7XG5cdFx0XHRcdHZhciBjb2RlID0gbWVzc2FnZS5jb2RlO1xuXHRcdFx0XHR2YXIgaW1tZWRpYXRlQ2xvc2UgPSBtZXNzYWdlLmltbWVkaWF0ZUNsb3NlO1xuXG5cdFx0XHRcdF9zZWxmLnBvc3RNZXNzYWdlKF8uaGlnaGxpZ2h0KGNvZGUsIF8ubGFuZ3VhZ2VzW2xhbmddLCBsYW5nKSk7XG5cdFx0XHRcdGlmIChpbW1lZGlhdGVDbG9zZSkge1xuXHRcdFx0XHRcdF9zZWxmLmNsb3NlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIGZhbHNlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gXztcblx0fVxuXG5cdC8vIEdldCBjdXJyZW50IHNjcmlwdCBhbmQgaGlnaGxpZ2h0XG5cdHZhciBzY3JpcHQgPSBfLnV0aWwuY3VycmVudFNjcmlwdCgpO1xuXG5cdGlmIChzY3JpcHQpIHtcblx0XHRfLmZpbGVuYW1lID0gc2NyaXB0LnNyYztcblxuXHRcdGlmIChzY3JpcHQuaGFzQXR0cmlidXRlKCdkYXRhLW1hbnVhbCcpKSB7XG5cdFx0XHRfLm1hbnVhbCA9IHRydWU7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gaGlnaGxpZ2h0QXV0b21hdGljYWxseUNhbGxiYWNrKCkge1xuXHRcdGlmICghXy5tYW51YWwpIHtcblx0XHRcdF8uaGlnaGxpZ2h0QWxsKCk7XG5cdFx0fVxuXHR9XG5cblx0aWYgKCFfLm1hbnVhbCkge1xuXHRcdC8vIElmIHRoZSBkb2N1bWVudCBzdGF0ZSBpcyBcImxvYWRpbmdcIiwgdGhlbiB3ZSdsbCB1c2UgRE9NQ29udGVudExvYWRlZC5cblx0XHQvLyBJZiB0aGUgZG9jdW1lbnQgc3RhdGUgaXMgXCJpbnRlcmFjdGl2ZVwiIGFuZCB0aGUgcHJpc20uanMgc2NyaXB0IGlzIGRlZmVycmVkLCB0aGVuIHdlJ2xsIGFsc28gdXNlIHRoZVxuXHRcdC8vIERPTUNvbnRlbnRMb2FkZWQgZXZlbnQgYmVjYXVzZSB0aGVyZSBtaWdodCBiZSBzb21lIHBsdWdpbnMgb3IgbGFuZ3VhZ2VzIHdoaWNoIGhhdmUgYWxzbyBiZWVuIGRlZmVycmVkIGFuZCB0aGV5XG5cdFx0Ly8gbWlnaHQgdGFrZSBsb25nZXIgb25lIGFuaW1hdGlvbiBmcmFtZSB0byBleGVjdXRlIHdoaWNoIGNhbiBjcmVhdGUgYSByYWNlIGNvbmRpdGlvbiB3aGVyZSBvbmx5IHNvbWUgcGx1Z2lucyBoYXZlXG5cdFx0Ly8gYmVlbiBsb2FkZWQgd2hlbiBQcmlzbS5oaWdobGlnaHRBbGwoKSBpcyBleGVjdXRlZCwgZGVwZW5kaW5nIG9uIGhvdyBmYXN0IHJlc291cmNlcyBhcmUgbG9hZGVkLlxuXHRcdC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vUHJpc21KUy9wcmlzbS9pc3N1ZXMvMjEwMlxuXHRcdHZhciByZWFkeVN0YXRlID0gZG9jdW1lbnQucmVhZHlTdGF0ZTtcblx0XHRpZiAocmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnIHx8IHJlYWR5U3RhdGUgPT09ICdpbnRlcmFjdGl2ZScgJiYgc2NyaXB0ICYmIHNjcmlwdC5kZWZlcikge1xuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGhpZ2hsaWdodEF1dG9tYXRpY2FsbHlDYWxsYmFjayk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICh3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG5cdFx0XHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaGlnaGxpZ2h0QXV0b21hdGljYWxseUNhbGxiYWNrKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KGhpZ2hsaWdodEF1dG9tYXRpY2FsbHlDYWxsYmFjaywgMTYpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBfO1xuXG59KF9zZWxmKSk7XG5cbmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRtb2R1bGUuZXhwb3J0cyA9IFByaXNtO1xufVxuXG4vLyBoYWNrIGZvciBjb21wb25lbnRzIHRvIHdvcmsgY29ycmVjdGx5IGluIG5vZGUuanNcbmlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuXHRnbG9iYWwuUHJpc20gPSBQcmlzbTtcbn1cblxuLy8gc29tZSBhZGRpdGlvbmFsIGRvY3VtZW50YXRpb24vdHlwZXNcblxuLyoqXG4gKiBUaGUgZXhwYW5zaW9uIG9mIGEgc2ltcGxlIGBSZWdFeHBgIGxpdGVyYWwgdG8gc3VwcG9ydCBhZGRpdGlvbmFsIHByb3BlcnRpZXMuXG4gKlxuICogQHR5cGVkZWYgR3JhbW1hclRva2VuXG4gKiBAcHJvcGVydHkge1JlZ0V4cH0gcGF0dGVybiBUaGUgcmVndWxhciBleHByZXNzaW9uIG9mIHRoZSB0b2tlbi5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW2xvb2tiZWhpbmQ9ZmFsc2VdIElmIGB0cnVlYCwgdGhlbiB0aGUgZmlyc3QgY2FwdHVyaW5nIGdyb3VwIG9mIGBwYXR0ZXJuYCB3aWxsIChlZmZlY3RpdmVseSlcbiAqIGJlaGF2ZSBhcyBhIGxvb2tiZWhpbmQgZ3JvdXAgbWVhbmluZyB0aGF0IHRoZSBjYXB0dXJlZCB0ZXh0IHdpbGwgbm90IGJlIHBhcnQgb2YgdGhlIG1hdGNoZWQgdGV4dCBvZiB0aGUgbmV3IHRva2VuLlxuICogQHByb3BlcnR5IHtib29sZWFufSBbZ3JlZWR5PWZhbHNlXSBXaGV0aGVyIHRoZSB0b2tlbiBpcyBncmVlZHkuXG4gKiBAcHJvcGVydHkge3N0cmluZ3xzdHJpbmdbXX0gW2FsaWFzXSBBbiBvcHRpb25hbCBhbGlhcyBvciBsaXN0IG9mIGFsaWFzZXMuXG4gKiBAcHJvcGVydHkge0dyYW1tYXJ9IFtpbnNpZGVdIFRoZSBuZXN0ZWQgZ3JhbW1hciBvZiB0aGlzIHRva2VuLlxuICpcbiAqIFRoZSBgaW5zaWRlYCBncmFtbWFyIHdpbGwgYmUgdXNlZCB0byB0b2tlbml6ZSB0aGUgdGV4dCB2YWx1ZSBvZiBlYWNoIHRva2VuIG9mIHRoaXMga2luZC5cbiAqXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIG1ha2UgbmVzdGVkIGFuZCBldmVuIHJlY3Vyc2l2ZSBsYW5ndWFnZSBkZWZpbml0aW9ucy5cbiAqXG4gKiBOb3RlOiBUaGlzIGNhbiBjYXVzZSBpbmZpbml0ZSByZWN1cnNpb24uIEJlIGNhcmVmdWwgd2hlbiB5b3UgZW1iZWQgZGlmZmVyZW50IGxhbmd1YWdlcyBvciBldmVuIHRoZSBzYW1lIGxhbmd1YWdlIGludG9cbiAqIGVhY2ggYW5vdGhlci5cbiAqIEBnbG9iYWxcbiAqIEBwdWJsaWNcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIEdyYW1tYXJcbiAqIEB0eXBlIHtPYmplY3Q8c3RyaW5nLCBSZWdFeHAgfCBHcmFtbWFyVG9rZW4gfCBBcnJheTxSZWdFeHAgfCBHcmFtbWFyVG9rZW4+Pn1cbiAqIEBwcm9wZXJ0eSB7R3JhbW1hcn0gW3Jlc3RdIEFuIG9wdGlvbmFsIGdyYW1tYXIgb2JqZWN0IHRoYXQgd2lsbCBiZSBhcHBlbmRlZCB0byB0aGlzIGdyYW1tYXIuXG4gKiBAZ2xvYmFsXG4gKiBAcHVibGljXG4gKi9cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHdoaWNoIHdpbGwgaW52b2tlZCBhZnRlciBhbiBlbGVtZW50IHdhcyBzdWNjZXNzZnVsbHkgaGlnaGxpZ2h0ZWQuXG4gKlxuICogQGNhbGxiYWNrIEhpZ2hsaWdodENhbGxiYWNrXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgc3VjY2Vzc2Z1bGx5IGhpZ2hsaWdodGVkLlxuICogQHJldHVybnMge3ZvaWR9XG4gKiBAZ2xvYmFsXG4gKiBAcHVibGljXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgSG9va0NhbGxiYWNrXG4gKiBAcGFyYW0ge09iamVjdDxzdHJpbmcsIGFueT59IGVudiBUaGUgZW52aXJvbm1lbnQgdmFyaWFibGVzIG9mIHRoZSBob29rLlxuICogQHJldHVybnMge3ZvaWR9XG4gKiBAZ2xvYmFsXG4gKiBAcHVibGljXG4gKi9cblxuUHJpc20ubGFuZ3VhZ2VzLmNsaWtlID0ge1xuXHQnY29tbWVudCc6IFtcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvKF58W15cXFxcXSlcXC9cXCpbXFxzXFxTXSo/KD86XFwqXFwvfCQpLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRncmVlZHk6IHRydWVcblx0XHR9LFxuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8oXnxbXlxcXFw6XSlcXC9cXC8uKi8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0Z3JlZWR5OiB0cnVlXG5cdFx0fVxuXHRdLFxuXHQnc3RyaW5nJzoge1xuXHRcdHBhdHRlcm46IC8oW1wiJ10pKD86XFxcXCg/OlxcclxcbnxbXFxzXFxTXSl8KD8hXFwxKVteXFxcXFxcclxcbl0pKlxcMS8sXG5cdFx0Z3JlZWR5OiB0cnVlXG5cdH0sXG5cdCdjbGFzcy1uYW1lJzoge1xuXHRcdHBhdHRlcm46IC8oXFxiKD86Y2xhc3N8ZXh0ZW5kc3xpbXBsZW1lbnRzfGluc3RhbmNlb2Z8aW50ZXJmYWNlfG5ld3x0cmFpdClcXHMrfFxcYmNhdGNoXFxzK1xcKClbXFx3LlxcXFxdKy9pLFxuXHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0aW5zaWRlOiB7XG5cdFx0XHQncHVuY3R1YXRpb24nOiAvWy5cXFxcXS9cblx0XHR9XG5cdH0sXG5cdCdrZXl3b3JkJzogL1xcYig/OmJyZWFrfGNhdGNofGNvbnRpbnVlfGRvfGVsc2V8ZmluYWxseXxmb3J8ZnVuY3Rpb258aWZ8aW58aW5zdGFuY2VvZnxuZXd8bnVsbHxyZXR1cm58dGhyb3d8dHJ5fHdoaWxlKVxcYi8sXG5cdCdib29sZWFuJzogL1xcYig/OmZhbHNlfHRydWUpXFxiLyxcblx0J2Z1bmN0aW9uJzogL1xcYlxcdysoPz1cXCgpLyxcblx0J251bWJlcic6IC9cXGIweFtcXGRhLWZdK1xcYnwoPzpcXGJcXGQrKD86XFwuXFxkKik/fFxcQlxcLlxcZCspKD86ZVsrLV0/XFxkKyk/L2ksXG5cdCdvcGVyYXRvcic6IC9bPD5dPT98WyE9XT0/PT98LS0/fFxcK1xcKz98JiY/fFxcfFxcfD98Wz8qL35eJV0vLFxuXHQncHVuY3R1YXRpb24nOiAvW3t9W1xcXTsoKSwuOl0vXG59O1xuXG4oZnVuY3Rpb24gKFByaXNtKSB7XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIHBsYWNlaG9sZGVyIGZvciB0aGUgZ2l2ZW4gbGFuZ3VhZ2UgaWQgYW5kIGluZGV4LlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2Vcblx0ICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBpbmRleFxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHQgKi9cblx0ZnVuY3Rpb24gZ2V0UGxhY2Vob2xkZXIobGFuZ3VhZ2UsIGluZGV4KSB7XG5cdFx0cmV0dXJuICdfX18nICsgbGFuZ3VhZ2UudG9VcHBlckNhc2UoKSArIGluZGV4ICsgJ19fXyc7XG5cdH1cblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydGllcyhQcmlzbS5sYW5ndWFnZXNbJ21hcmt1cC10ZW1wbGF0aW5nJ10gPSB7fSwge1xuXHRcdGJ1aWxkUGxhY2Vob2xkZXJzOiB7XG5cdFx0XHQvKipcblx0XHRcdCAqIFRva2VuaXplIGFsbCBpbmxpbmUgdGVtcGxhdGluZyBleHByZXNzaW9ucyBtYXRjaGluZyBgcGxhY2Vob2xkZXJQYXR0ZXJuYC5cblx0XHRcdCAqXG5cdFx0XHQgKiBJZiBgcmVwbGFjZUZpbHRlcmAgaXMgcHJvdmlkZWQsIG9ubHkgbWF0Y2hlcyBvZiBgcGxhY2Vob2xkZXJQYXR0ZXJuYCBmb3Igd2hpY2ggYHJlcGxhY2VGaWx0ZXJgIHJldHVybnNcblx0XHRcdCAqIGB0cnVlYCB3aWxsIGJlIHJlcGxhY2VkLlxuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSB7b2JqZWN0fSBlbnYgVGhlIGVudmlyb25tZW50IG9mIHRoZSBgYmVmb3JlLXRva2VuaXplYCBob29rLlxuXHRcdFx0ICogQHBhcmFtIHtzdHJpbmd9IGxhbmd1YWdlIFRoZSBsYW5ndWFnZSBpZC5cblx0XHRcdCAqIEBwYXJhbSB7UmVnRXhwfSBwbGFjZWhvbGRlclBhdHRlcm4gVGhlIG1hdGNoZXMgb2YgdGhpcyBwYXR0ZXJuIHdpbGwgYmUgcmVwbGFjZWQgYnkgcGxhY2Vob2xkZXJzLlxuXHRcdFx0ICogQHBhcmFtIHsobWF0Y2g6IHN0cmluZykgPT4gYm9vbGVhbn0gW3JlcGxhY2VGaWx0ZXJdXG5cdFx0XHQgKi9cblx0XHRcdHZhbHVlOiBmdW5jdGlvbiAoZW52LCBsYW5ndWFnZSwgcGxhY2Vob2xkZXJQYXR0ZXJuLCByZXBsYWNlRmlsdGVyKSB7XG5cdFx0XHRcdGlmIChlbnYubGFuZ3VhZ2UgIT09IGxhbmd1YWdlKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dmFyIHRva2VuU3RhY2sgPSBlbnYudG9rZW5TdGFjayA9IFtdO1xuXG5cdFx0XHRcdGVudi5jb2RlID0gZW52LmNvZGUucmVwbGFjZShwbGFjZWhvbGRlclBhdHRlcm4sIGZ1bmN0aW9uIChtYXRjaCkge1xuXHRcdFx0XHRcdGlmICh0eXBlb2YgcmVwbGFjZUZpbHRlciA9PT0gJ2Z1bmN0aW9uJyAmJiAhcmVwbGFjZUZpbHRlcihtYXRjaCkpIHtcblx0XHRcdFx0XHRcdHJldHVybiBtYXRjaDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dmFyIGkgPSB0b2tlblN0YWNrLmxlbmd0aDtcblx0XHRcdFx0XHR2YXIgcGxhY2Vob2xkZXI7XG5cblx0XHRcdFx0XHQvLyBDaGVjayBmb3IgZXhpc3Rpbmcgc3RyaW5nc1xuXHRcdFx0XHRcdHdoaWxlIChlbnYuY29kZS5pbmRleE9mKHBsYWNlaG9sZGVyID0gZ2V0UGxhY2Vob2xkZXIobGFuZ3VhZ2UsIGkpKSAhPT0gLTEpIHtcblx0XHRcdFx0XHRcdCsraTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBDcmVhdGUgYSBzcGFyc2UgYXJyYXlcblx0XHRcdFx0XHR0b2tlblN0YWNrW2ldID0gbWF0Y2g7XG5cblx0XHRcdFx0XHRyZXR1cm4gcGxhY2Vob2xkZXI7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdC8vIFN3aXRjaCB0aGUgZ3JhbW1hciB0byBtYXJrdXBcblx0XHRcdFx0ZW52LmdyYW1tYXIgPSBQcmlzbS5sYW5ndWFnZXMubWFya3VwO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0dG9rZW5pemVQbGFjZWhvbGRlcnM6IHtcblx0XHRcdC8qKlxuXHRcdFx0ICogUmVwbGFjZSBwbGFjZWhvbGRlcnMgd2l0aCBwcm9wZXIgdG9rZW5zIGFmdGVyIHRva2VuaXppbmcuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHBhcmFtIHtvYmplY3R9IGVudiBUaGUgZW52aXJvbm1lbnQgb2YgdGhlIGBhZnRlci10b2tlbml6ZWAgaG9vay5cblx0XHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBsYW5ndWFnZSBUaGUgbGFuZ3VhZ2UgaWQuXG5cdFx0XHQgKi9cblx0XHRcdHZhbHVlOiBmdW5jdGlvbiAoZW52LCBsYW5ndWFnZSkge1xuXHRcdFx0XHRpZiAoZW52Lmxhbmd1YWdlICE9PSBsYW5ndWFnZSB8fCAhZW52LnRva2VuU3RhY2spIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBTd2l0Y2ggdGhlIGdyYW1tYXIgYmFja1xuXHRcdFx0XHRlbnYuZ3JhbW1hciA9IFByaXNtLmxhbmd1YWdlc1tsYW5ndWFnZV07XG5cblx0XHRcdFx0dmFyIGogPSAwO1xuXHRcdFx0XHR2YXIga2V5cyA9IE9iamVjdC5rZXlzKGVudi50b2tlblN0YWNrKTtcblxuXHRcdFx0XHRmdW5jdGlvbiB3YWxrVG9rZW5zKHRva2Vucykge1xuXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHQvLyBhbGwgcGxhY2Vob2xkZXJzIGFyZSByZXBsYWNlZCBhbHJlYWR5XG5cdFx0XHRcdFx0XHRpZiAoaiA+PSBrZXlzLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0dmFyIHRva2VuID0gdG9rZW5zW2ldO1xuXHRcdFx0XHRcdFx0aWYgKHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycgfHwgKHRva2VuLmNvbnRlbnQgJiYgdHlwZW9mIHRva2VuLmNvbnRlbnQgPT09ICdzdHJpbmcnKSkge1xuXHRcdFx0XHRcdFx0XHR2YXIgayA9IGtleXNbal07XG5cdFx0XHRcdFx0XHRcdHZhciB0ID0gZW52LnRva2VuU3RhY2tba107XG5cdFx0XHRcdFx0XHRcdHZhciBzID0gdHlwZW9mIHRva2VuID09PSAnc3RyaW5nJyA/IHRva2VuIDogdG9rZW4uY29udGVudDtcblx0XHRcdFx0XHRcdFx0dmFyIHBsYWNlaG9sZGVyID0gZ2V0UGxhY2Vob2xkZXIobGFuZ3VhZ2UsIGspO1xuXG5cdFx0XHRcdFx0XHRcdHZhciBpbmRleCA9IHMuaW5kZXhPZihwbGFjZWhvbGRlcik7XG5cdFx0XHRcdFx0XHRcdGlmIChpbmRleCA+IC0xKSB7XG5cdFx0XHRcdFx0XHRcdFx0KytqO1xuXG5cdFx0XHRcdFx0XHRcdFx0dmFyIGJlZm9yZSA9IHMuc3Vic3RyaW5nKDAsIGluZGV4KTtcblx0XHRcdFx0XHRcdFx0XHR2YXIgbWlkZGxlID0gbmV3IFByaXNtLlRva2VuKGxhbmd1YWdlLCBQcmlzbS50b2tlbml6ZSh0LCBlbnYuZ3JhbW1hciksICdsYW5ndWFnZS0nICsgbGFuZ3VhZ2UsIHQpO1xuXHRcdFx0XHRcdFx0XHRcdHZhciBhZnRlciA9IHMuc3Vic3RyaW5nKGluZGV4ICsgcGxhY2Vob2xkZXIubGVuZ3RoKTtcblxuXHRcdFx0XHRcdFx0XHRcdHZhciByZXBsYWNlbWVudCA9IFtdO1xuXHRcdFx0XHRcdFx0XHRcdGlmIChiZWZvcmUpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHJlcGxhY2VtZW50LnB1c2guYXBwbHkocmVwbGFjZW1lbnQsIHdhbGtUb2tlbnMoW2JlZm9yZV0pKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0cmVwbGFjZW1lbnQucHVzaChtaWRkbGUpO1xuXHRcdFx0XHRcdFx0XHRcdGlmIChhZnRlcikge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmVwbGFjZW1lbnQucHVzaC5hcHBseShyZXBsYWNlbWVudCwgd2Fsa1Rva2VucyhbYWZ0ZXJdKSk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0aWYgKHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRva2Vucy5zcGxpY2UuYXBwbHkodG9rZW5zLCBbaSwgMV0uY29uY2F0KHJlcGxhY2VtZW50KSk7XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRva2VuLmNvbnRlbnQgPSByZXBsYWNlbWVudDtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAodG9rZW4uY29udGVudCAvKiAmJiB0eXBlb2YgdG9rZW4uY29udGVudCAhPT0gJ3N0cmluZycgKi8pIHtcblx0XHRcdFx0XHRcdFx0d2Fsa1Rva2Vucyh0b2tlbi5jb250ZW50KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXR1cm4gdG9rZW5zO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0d2Fsa1Rva2VucyhlbnYudG9rZW5zKTtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG59KFByaXNtKSk7XG5cblByaXNtLmxhbmd1YWdlcy5jID0gUHJpc20ubGFuZ3VhZ2VzLmV4dGVuZCgnY2xpa2UnLCB7XG5cdCdjb21tZW50Jzoge1xuXHRcdHBhdHRlcm46IC9cXC9cXC8oPzpbXlxcclxcblxcXFxdfFxcXFwoPzpcXHJcXG4/fFxcbnwoPyFbXFxyXFxuXSkpKSp8XFwvXFwqW1xcc1xcU10qPyg/OlxcKlxcL3wkKS8sXG5cdFx0Z3JlZWR5OiB0cnVlXG5cdH0sXG5cdCdzdHJpbmcnOiB7XG5cdFx0Ly8gaHR0cHM6Ly9lbi5jcHByZWZlcmVuY2UuY29tL3cvYy9sYW5ndWFnZS9zdHJpbmdfbGl0ZXJhbFxuXHRcdHBhdHRlcm46IC9cIig/OlxcXFwoPzpcXHJcXG58W1xcc1xcU10pfFteXCJcXFxcXFxyXFxuXSkqXCIvLFxuXHRcdGdyZWVkeTogdHJ1ZVxuXHR9LFxuXHQnY2xhc3MtbmFtZSc6IHtcblx0XHRwYXR0ZXJuOiAvKFxcYig/OmVudW18c3RydWN0KVxccysoPzpfX2F0dHJpYnV0ZV9fXFxzKlxcKFxcKFtcXHNcXFNdKj9cXClcXClcXHMqKT8pXFx3K3xcXGJbYS16XVxcdypfdFxcYi8sXG5cdFx0bG9va2JlaGluZDogdHJ1ZVxuXHR9LFxuXHQna2V5d29yZCc6IC9cXGIoPzpfQWxpZ25hc3xfQWxpZ25vZnxfQXRvbWljfF9Cb29sfF9Db21wbGV4fF9HZW5lcmljfF9JbWFnaW5hcnl8X05vcmV0dXJufF9TdGF0aWNfYXNzZXJ0fF9UaHJlYWRfbG9jYWx8X19hdHRyaWJ1dGVfX3xhc218YXV0b3xicmVha3xjYXNlfGNoYXJ8Y29uc3R8Y29udGludWV8ZGVmYXVsdHxkb3xkb3VibGV8ZWxzZXxlbnVtfGV4dGVybnxmbG9hdHxmb3J8Z290b3xpZnxpbmxpbmV8aW50fGxvbmd8cmVnaXN0ZXJ8cmV0dXJufHNob3J0fHNpZ25lZHxzaXplb2Z8c3RhdGljfHN0cnVjdHxzd2l0Y2h8dHlwZWRlZnx0eXBlb2Z8dW5pb258dW5zaWduZWR8dm9pZHx2b2xhdGlsZXx3aGlsZSlcXGIvLFxuXHQnZnVuY3Rpb24nOiAvXFxiW2Etel9dXFx3Kig/PVxccypcXCgpL2ksXG5cdCdudW1iZXInOiAvKD86XFxiMHgoPzpbXFxkYS1mXSsoPzpcXC5bXFxkYS1mXSopP3xcXC5bXFxkYS1mXSspKD86cFsrLV0/XFxkKyk/fCg/OlxcYlxcZCsoPzpcXC5cXGQqKT98XFxCXFwuXFxkKykoPzplWystXT9cXGQrKT8pW2Z1bF17MCw0fS9pLFxuXHQnb3BlcmF0b3InOiAvPj49P3w8PD0/fC0+fChbLSsmfDpdKVxcMXxbPzp+XXxbLSsqLyUmfF4hPTw+XT0/L1xufSk7XG5cblByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2MnLCAnc3RyaW5nJywge1xuXHQnY2hhcic6IHtcblx0XHQvLyBodHRwczovL2VuLmNwcHJlZmVyZW5jZS5jb20vdy9jL2xhbmd1YWdlL2NoYXJhY3Rlcl9jb25zdGFudFxuXHRcdHBhdHRlcm46IC8nKD86XFxcXCg/OlxcclxcbnxbXFxzXFxTXSl8W14nXFxcXFxcclxcbl0pezAsMzJ9Jy8sXG5cdFx0Z3JlZWR5OiB0cnVlXG5cdH1cbn0pO1xuXG5QcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdjJywgJ3N0cmluZycsIHtcblx0J21hY3JvJzoge1xuXHRcdC8vIGFsbG93IGZvciBtdWx0aWxpbmUgbWFjcm8gZGVmaW5pdGlvbnNcblx0XHQvLyBzcGFjZXMgYWZ0ZXIgdGhlICMgY2hhcmFjdGVyIGNvbXBpbGUgZmluZSB3aXRoIGdjY1xuXHRcdHBhdHRlcm46IC8oXltcXHQgXSopI1xccypbYS16XSg/OlteXFxyXFxuXFxcXC9dfFxcLyg/IVxcKil8XFwvXFwqKD86W14qXXxcXCooPyFcXC8pKSpcXCpcXC98XFxcXCg/OlxcclxcbnxbXFxzXFxTXSkpKi9pbSxcblx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRhbGlhczogJ3Byb3BlcnR5Jyxcblx0XHRpbnNpZGU6IHtcblx0XHRcdCdzdHJpbmcnOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHQvLyBoaWdobGlnaHQgdGhlIHBhdGggb2YgdGhlIGluY2x1ZGUgc3RhdGVtZW50IGFzIGEgc3RyaW5nXG5cdFx0XHRcdFx0cGF0dGVybjogL14oI1xccyppbmNsdWRlXFxzKik8W14+XSs+Lyxcblx0XHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0XHRcdH0sXG5cdFx0XHRcdFByaXNtLmxhbmd1YWdlcy5jWydzdHJpbmcnXVxuXHRcdFx0XSxcblx0XHRcdCdjaGFyJzogUHJpc20ubGFuZ3VhZ2VzLmNbJ2NoYXInXSxcblx0XHRcdCdjb21tZW50JzogUHJpc20ubGFuZ3VhZ2VzLmNbJ2NvbW1lbnQnXSxcblx0XHRcdCdtYWNyby1uYW1lJzogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cGF0dGVybjogLyheI1xccypkZWZpbmVcXHMrKVxcdytcXGIoPyFcXCgpL2ksXG5cdFx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cGF0dGVybjogLyheI1xccypkZWZpbmVcXHMrKVxcdytcXGIoPz1cXCgpL2ksXG5cdFx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0XHRhbGlhczogJ2Z1bmN0aW9uJ1xuXHRcdFx0XHR9XG5cdFx0XHRdLFxuXHRcdFx0Ly8gaGlnaGxpZ2h0IG1hY3JvIGRpcmVjdGl2ZXMgYXMga2V5d29yZHNcblx0XHRcdCdkaXJlY3RpdmUnOiB7XG5cdFx0XHRcdHBhdHRlcm46IC9eKCNcXHMqKVthLXpdKy8sXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdGFsaWFzOiAna2V5d29yZCdcblx0XHRcdH0sXG5cdFx0XHQnZGlyZWN0aXZlLWhhc2gnOiAvXiMvLFxuXHRcdFx0J3B1bmN0dWF0aW9uJzogLyMjfFxcXFwoPz1bXFxyXFxuXSkvLFxuXHRcdFx0J2V4cHJlc3Npb24nOiB7XG5cdFx0XHRcdHBhdHRlcm46IC9cXFNbXFxzXFxTXSovLFxuXHRcdFx0XHRpbnNpZGU6IFByaXNtLmxhbmd1YWdlcy5jXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59KTtcblxuUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnYycsICdmdW5jdGlvbicsIHtcblx0Ly8gaGlnaGxpZ2h0IHByZWRlZmluZWQgbWFjcm9zIGFzIGNvbnN0YW50c1xuXHQnY29uc3RhbnQnOiAvXFxiKD86RU9GfE5VTEx8U0VFS19DVVJ8U0VFS19FTkR8U0VFS19TRVR8X19EQVRFX198X19GSUxFX198X19MSU5FX198X19USU1FU1RBTVBfX3xfX1RJTUVfX3xfX2Z1bmNfX3xzdGRlcnJ8c3RkaW58c3Rkb3V0KVxcYi9cbn0pO1xuXG5kZWxldGUgUHJpc20ubGFuZ3VhZ2VzLmNbJ2Jvb2xlYW4nXTtcblxuKGZ1bmN0aW9uIChQcmlzbSkge1xuXG5cdHZhciBrZXl3b3JkID0gL1xcYig/OmFsaWduYXN8YWxpZ25vZnxhc218YXV0b3xib29sfGJyZWFrfGNhc2V8Y2F0Y2h8Y2hhcnxjaGFyMTZfdHxjaGFyMzJfdHxjaGFyOF90fGNsYXNzfGNvX2F3YWl0fGNvX3JldHVybnxjb195aWVsZHxjb21wbHxjb25jZXB0fGNvbnN0fGNvbnN0X2Nhc3R8Y29uc3RldmFsfGNvbnN0ZXhwcnxjb25zdGluaXR8Y29udGludWV8ZGVjbHR5cGV8ZGVmYXVsdHxkZWxldGV8ZG98ZG91YmxlfGR5bmFtaWNfY2FzdHxlbHNlfGVudW18ZXhwbGljaXR8ZXhwb3J0fGV4dGVybnxmaW5hbHxmbG9hdHxmb3J8ZnJpZW5kfGdvdG98aWZ8aW1wb3J0fGlubGluZXxpbnR8aW50MTZfdHxpbnQzMl90fGludDY0X3R8aW50OF90fGxvbmd8bW9kdWxlfG11dGFibGV8bmFtZXNwYWNlfG5ld3xub2V4Y2VwdHxudWxscHRyfG9wZXJhdG9yfG92ZXJyaWRlfHByaXZhdGV8cHJvdGVjdGVkfHB1YmxpY3xyZWdpc3RlcnxyZWludGVycHJldF9jYXN0fHJlcXVpcmVzfHJldHVybnxzaG9ydHxzaWduZWR8c2l6ZW9mfHN0YXRpY3xzdGF0aWNfYXNzZXJ0fHN0YXRpY19jYXN0fHN0cnVjdHxzd2l0Y2h8dGVtcGxhdGV8dGhpc3x0aHJlYWRfbG9jYWx8dGhyb3d8dHJ5fHR5cGVkZWZ8dHlwZWlkfHR5cGVuYW1lfHVpbnQxNl90fHVpbnQzMl90fHVpbnQ2NF90fHVpbnQ4X3R8dW5pb258dW5zaWduZWR8dXNpbmd8dmlydHVhbHx2b2lkfHZvbGF0aWxlfHdjaGFyX3R8d2hpbGUpXFxiLztcblx0dmFyIG1vZE5hbWUgPSAvXFxiKD8hPGtleXdvcmQ+KVxcdysoPzpcXHMqXFwuXFxzKlxcdyspKlxcYi8uc291cmNlLnJlcGxhY2UoLzxrZXl3b3JkPi9nLCBmdW5jdGlvbiAoKSB7IHJldHVybiBrZXl3b3JkLnNvdXJjZTsgfSk7XG5cblx0UHJpc20ubGFuZ3VhZ2VzLmNwcCA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ2MnLCB7XG5cdFx0J2NsYXNzLW5hbWUnOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHBhdHRlcm46IFJlZ0V4cCgvKFxcYig/OmNsYXNzfGNvbmNlcHR8ZW51bXxzdHJ1Y3R8dHlwZW5hbWUpXFxzKykoPyE8a2V5d29yZD4pXFx3Ky8uc291cmNlXG5cdFx0XHRcdFx0LnJlcGxhY2UoLzxrZXl3b3JkPi9nLCBmdW5jdGlvbiAoKSB7IHJldHVybiBrZXl3b3JkLnNvdXJjZTsgfSkpLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0Ly8gVGhpcyBpcyBpbnRlbmRlZCB0byBjYXB0dXJlIHRoZSBjbGFzcyBuYW1lIG9mIG1ldGhvZCBpbXBsZW1lbnRhdGlvbnMgbGlrZTpcblx0XHRcdC8vICAgdm9pZCBmb286OmJhcigpIGNvbnN0IHt9XG5cdFx0XHQvLyBIb3dldmVyISBUaGUgYGZvb2AgaW4gdGhlIGFib3ZlIGV4YW1wbGUgY291bGQgYWxzbyBiZSBhIG5hbWVzcGFjZSwgc28gd2Ugb25seSBjYXB0dXJlIHRoZSBjbGFzcyBuYW1lIGlmXG5cdFx0XHQvLyBpdCBzdGFydHMgd2l0aCBhbiB1cHBlcmNhc2UgbGV0dGVyLiBUaGlzIGFwcHJveGltYXRpb24gc2hvdWxkIGdpdmUgZGVjZW50IHJlc3VsdHMuXG5cdFx0XHQvXFxiW0EtWl1cXHcqKD89XFxzKjo6XFxzKlxcdytcXHMqXFwoKS8sXG5cdFx0XHQvLyBUaGlzIHdpbGwgY2FwdHVyZSB0aGUgY2xhc3MgbmFtZSBiZWZvcmUgZGVzdHJ1Y3RvcnMgbGlrZTpcblx0XHRcdC8vICAgRm9vOjp+Rm9vKCkge31cblx0XHRcdC9cXGJbQS1aX11cXHcqKD89XFxzKjo6XFxzKn5cXHcrXFxzKlxcKCkvaSxcblx0XHRcdC8vIFRoaXMgYWxzbyBpbnRlbmRzIHRvIGNhcHR1cmUgdGhlIGNsYXNzIG5hbWUgb2YgbWV0aG9kIGltcGxlbWVudGF0aW9ucyBidXQgaGVyZSB0aGUgY2xhc3MgaGFzIHRlbXBsYXRlXG5cdFx0XHQvLyBwYXJhbWV0ZXJzLCBzbyBpdCBjYW4ndCBiZSBhIG5hbWVzcGFjZSAodW50aWwgQysrIGFkZHMgZ2VuZXJpYyBuYW1lc3BhY2VzKS5cblx0XHRcdC9cXGJcXHcrKD89XFxzKjwoPzpbXjw+XXw8KD86W148Pl18PFtePD5dKj4pKj4pKj5cXHMqOjpcXHMqXFx3K1xccypcXCgpL1xuXHRcdF0sXG5cdFx0J2tleXdvcmQnOiBrZXl3b3JkLFxuXHRcdCdudW1iZXInOiB7XG5cdFx0XHRwYXR0ZXJuOiAvKD86XFxiMGJbMDEnXSt8XFxiMHgoPzpbXFxkYS1mJ10rKD86XFwuW1xcZGEtZiddKik/fFxcLltcXGRhLWYnXSspKD86cFsrLV0/W1xcZCddKyk/fCg/OlxcYltcXGQnXSsoPzpcXC5bXFxkJ10qKT98XFxCXFwuW1xcZCddKykoPzplWystXT9bXFxkJ10rKT8pW2Z1bF17MCw0fS9pLFxuXHRcdFx0Z3JlZWR5OiB0cnVlXG5cdFx0fSxcblx0XHQnb3BlcmF0b3InOiAvPj49P3w8PD0/fC0+fC0tfFxcK1xcK3wmJnxcXHxcXHx8Wz86fl18PD0+fFstKyovJSZ8XiE9PD5dPT98XFxiKD86YW5kfGFuZF9lcXxiaXRhbmR8Yml0b3J8bm90fG5vdF9lcXxvcnxvcl9lcXx4b3J8eG9yX2VxKVxcYi8sXG5cdFx0J2Jvb2xlYW4nOiAvXFxiKD86ZmFsc2V8dHJ1ZSlcXGIvXG5cdH0pO1xuXG5cdFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2NwcCcsICdzdHJpbmcnLCB7XG5cdFx0J21vZHVsZSc6IHtcblx0XHRcdC8vIGh0dHBzOi8vZW4uY3BwcmVmZXJlbmNlLmNvbS93L2NwcC9sYW5ndWFnZS9tb2R1bGVzXG5cdFx0XHRwYXR0ZXJuOiBSZWdFeHAoXG5cdFx0XHRcdC8oXFxiKD86aW1wb3J0fG1vZHVsZSlcXHMrKS8uc291cmNlICtcblx0XHRcdFx0Jyg/OicgK1xuXHRcdFx0XHQvLyBoZWFkZXItbmFtZVxuXHRcdFx0XHQvXCIoPzpcXFxcKD86XFxyXFxufFtcXHNcXFNdKXxbXlwiXFxcXFxcclxcbl0pKlwifDxbXjw+XFxyXFxuXSo+Ly5zb3VyY2UgK1xuXHRcdFx0XHQnfCcgK1xuXHRcdFx0XHQvLyBtb2R1bGUgbmFtZSBvciBwYXJ0aXRpb24gb3IgYm90aFxuXHRcdFx0XHQvPG1vZC1uYW1lPig/Olxccyo6XFxzKjxtb2QtbmFtZT4pP3w6XFxzKjxtb2QtbmFtZT4vLnNvdXJjZS5yZXBsYWNlKC88bW9kLW5hbWU+L2csIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1vZE5hbWU7IH0pICtcblx0XHRcdFx0JyknXG5cdFx0XHQpLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRcdGluc2lkZToge1xuXHRcdFx0XHQnc3RyaW5nJzogL15bPFwiXVtcXHNcXFNdKy8sXG5cdFx0XHRcdCdvcGVyYXRvcic6IC86Lyxcblx0XHRcdFx0J3B1bmN0dWF0aW9uJzogL1xcLi9cblx0XHRcdH1cblx0XHR9LFxuXHRcdCdyYXctc3RyaW5nJzoge1xuXHRcdFx0cGF0dGVybjogL1JcIihbXigpXFxcXCBdezAsMTZ9KVxcKFtcXHNcXFNdKj9cXClcXDFcIi8sXG5cdFx0XHRhbGlhczogJ3N0cmluZycsXG5cdFx0XHRncmVlZHk6IHRydWVcblx0XHR9XG5cdH0pO1xuXG5cdFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2NwcCcsICdrZXl3b3JkJywge1xuXHRcdCdnZW5lcmljLWZ1bmN0aW9uJzoge1xuXHRcdFx0cGF0dGVybjogL1xcYig/IW9wZXJhdG9yXFxiKVthLXpfXVxcdypcXHMqPCg/OltePD5dfDxbXjw+XSo+KSo+KD89XFxzKlxcKCkvaSxcblx0XHRcdGluc2lkZToge1xuXHRcdFx0XHQnZnVuY3Rpb24nOiAvXlxcdysvLFxuXHRcdFx0XHQnZ2VuZXJpYyc6IHtcblx0XHRcdFx0XHRwYXR0ZXJuOiAvPFtcXHNcXFNdKy8sXG5cdFx0XHRcdFx0YWxpYXM6ICdjbGFzcy1uYW1lJyxcblx0XHRcdFx0XHRpbnNpZGU6IFByaXNtLmxhbmd1YWdlcy5jcHBcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG5cblx0UHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnY3BwJywgJ29wZXJhdG9yJywge1xuXHRcdCdkb3VibGUtY29sb24nOiB7XG5cdFx0XHRwYXR0ZXJuOiAvOjovLFxuXHRcdFx0YWxpYXM6ICdwdW5jdHVhdGlvbidcblx0XHR9XG5cdH0pO1xuXG5cdFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2NwcCcsICdjbGFzcy1uYW1lJywge1xuXHRcdC8vIHRoZSBiYXNlIGNsYXVzZSBpcyBhbiBvcHRpb25hbCBsaXN0IG9mIHBhcmVudCBjbGFzc2VzXG5cdFx0Ly8gaHR0cHM6Ly9lbi5jcHByZWZlcmVuY2UuY29tL3cvY3BwL2xhbmd1YWdlL2NsYXNzXG5cdFx0J2Jhc2UtY2xhdXNlJzoge1xuXHRcdFx0cGF0dGVybjogLyhcXGIoPzpjbGFzc3xzdHJ1Y3QpXFxzK1xcdytcXHMqOlxccyopW147e31cIidcXHNdKyg/OlxccytbXjt7fVwiJ1xcc10rKSooPz1cXHMqWzt7XSkvLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRcdGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzLmV4dGVuZCgnY3BwJywge30pXG5cdFx0fVxuXHR9KTtcblxuXHRQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdpbnNpZGUnLCAnZG91YmxlLWNvbG9uJywge1xuXHRcdC8vIEFsbCB1bnRva2VuaXplZCB3b3JkcyB0aGF0IGFyZSBub3QgbmFtZXNwYWNlcyBzaG91bGQgYmUgY2xhc3MgbmFtZXNcblx0XHQnY2xhc3MtbmFtZSc6IC9cXGJbYS16X11cXHcqXFxiKD8hXFxzKjo6KS9pXG5cdH0sIFByaXNtLmxhbmd1YWdlcy5jcHBbJ2Jhc2UtY2xhdXNlJ10pO1xuXG59KFByaXNtKSk7XG5cbihmdW5jdGlvbiAoUHJpc20pIHtcblxuXHQvKipcblx0ICogUmVwbGFjZXMgYWxsIHBsYWNlaG9sZGVycyBcIjw8bj4+XCIgb2YgZ2l2ZW4gcGF0dGVybiB3aXRoIHRoZSBuLXRoIHJlcGxhY2VtZW50ICh6ZXJvIGJhc2VkKS5cblx0ICpcblx0ICogTm90ZTogVGhpcyBpcyBhIHNpbXBsZSB0ZXh0IGJhc2VkIHJlcGxhY2VtZW50LiBCZSBjYXJlZnVsIHdoZW4gdXNpbmcgYmFja3JlZmVyZW5jZXMhXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBwYXR0ZXJuIHRoZSBnaXZlbiBwYXR0ZXJuLlxuXHQgKiBAcGFyYW0ge3N0cmluZ1tdfSByZXBsYWNlbWVudHMgYSBsaXN0IG9mIHJlcGxhY2VtZW50IHdoaWNoIGNhbiBiZSBpbnNlcnRlZCBpbnRvIHRoZSBnaXZlbiBwYXR0ZXJuLlxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUgcGF0dGVybiB3aXRoIGFsbCBwbGFjZWhvbGRlcnMgcmVwbGFjZWQgd2l0aCB0aGVpciBjb3JyZXNwb25kaW5nIHJlcGxhY2VtZW50cy5cblx0ICogQGV4YW1wbGUgcmVwbGFjZSgvYTw8MD4+YS8uc291cmNlLCBbL2IrLy5zb3VyY2VdKSA9PT0gL2EoPzpiKylhLy5zb3VyY2Vcblx0ICovXG5cdGZ1bmN0aW9uIHJlcGxhY2UocGF0dGVybiwgcmVwbGFjZW1lbnRzKSB7XG5cdFx0cmV0dXJuIHBhdHRlcm4ucmVwbGFjZSgvPDwoXFxkKyk+Pi9nLCBmdW5jdGlvbiAobSwgaW5kZXgpIHtcblx0XHRcdHJldHVybiAnKD86JyArIHJlcGxhY2VtZW50c1sraW5kZXhdICsgJyknO1xuXHRcdH0pO1xuXHR9XG5cdC8qKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gcGF0dGVyblxuXHQgKiBAcGFyYW0ge3N0cmluZ1tdfSByZXBsYWNlbWVudHNcblx0ICogQHBhcmFtIHtzdHJpbmd9IFtmbGFnc11cblx0ICogQHJldHVybnMge1JlZ0V4cH1cblx0ICovXG5cdGZ1bmN0aW9uIHJlKHBhdHRlcm4sIHJlcGxhY2VtZW50cywgZmxhZ3MpIHtcblx0XHRyZXR1cm4gUmVnRXhwKHJlcGxhY2UocGF0dGVybiwgcmVwbGFjZW1lbnRzKSwgZmxhZ3MgfHwgJycpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBuZXN0ZWQgcGF0dGVybiB3aGVyZSBhbGwgb2NjdXJyZW5jZXMgb2YgdGhlIHN0cmluZyBgPDxzZWxmPj5gIGFyZSByZXBsYWNlZCB3aXRoIHRoZSBwYXR0ZXJuIGl0c2VsZi5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHBhdHRlcm5cblx0ICogQHBhcmFtIHtudW1iZXJ9IGRlcHRoTG9nMlxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHQgKi9cblx0ZnVuY3Rpb24gbmVzdGVkKHBhdHRlcm4sIGRlcHRoTG9nMikge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwdGhMb2cyOyBpKyspIHtcblx0XHRcdHBhdHRlcm4gPSBwYXR0ZXJuLnJlcGxhY2UoLzw8c2VsZj4+L2csIGZ1bmN0aW9uICgpIHsgcmV0dXJuICcoPzonICsgcGF0dGVybiArICcpJzsgfSk7XG5cdFx0fVxuXHRcdHJldHVybiBwYXR0ZXJuLnJlcGxhY2UoLzw8c2VsZj4+L2csICdbXlxcXFxzXFxcXFNdJyk7XG5cdH1cblxuXHQvLyBodHRwczovL2RvY3MubWljcm9zb2Z0LmNvbS9lbi11cy9kb3RuZXQvY3NoYXJwL2xhbmd1YWdlLXJlZmVyZW5jZS9rZXl3b3Jkcy9cblx0dmFyIGtleXdvcmRLaW5kcyA9IHtcblx0XHQvLyBrZXl3b3JkcyB3aGljaCByZXByZXNlbnQgYSByZXR1cm4gb3IgdmFyaWFibGUgdHlwZVxuXHRcdHR5cGU6ICdib29sIGJ5dGUgY2hhciBkZWNpbWFsIGRvdWJsZSBkeW5hbWljIGZsb2F0IGludCBsb25nIG9iamVjdCBzYnl0ZSBzaG9ydCBzdHJpbmcgdWludCB1bG9uZyB1c2hvcnQgdmFyIHZvaWQnLFxuXHRcdC8vIGtleXdvcmRzIHdoaWNoIGFyZSB1c2VkIHRvIGRlY2xhcmUgYSB0eXBlXG5cdFx0dHlwZURlY2xhcmF0aW9uOiAnY2xhc3MgZW51bSBpbnRlcmZhY2UgcmVjb3JkIHN0cnVjdCcsXG5cdFx0Ly8gY29udGV4dHVhbCBrZXl3b3Jkc1xuXHRcdC8vIChcInZhclwiIGFuZCBcImR5bmFtaWNcIiBhcmUgbWlzc2luZyBiZWNhdXNlIHRoZXkgYXJlIHVzZWQgbGlrZSB0eXBlcylcblx0XHRjb250ZXh0dWFsOiAnYWRkIGFsaWFzIGFuZCBhc2NlbmRpbmcgYXN5bmMgYXdhaXQgYnkgZGVzY2VuZGluZyBmcm9tKD89XFxcXHMqKD86XFxcXHd8JCkpIGdldCBnbG9iYWwgZ3JvdXAgaW50byBpbml0KD89XFxcXHMqOykgam9pbiBsZXQgbmFtZW9mIG5vdCBub3RudWxsIG9uIG9yIG9yZGVyYnkgcGFydGlhbCByZW1vdmUgc2VsZWN0IHNldCB1bm1hbmFnZWQgdmFsdWUgd2hlbiB3aGVyZSB3aXRoKD89XFxcXHMqeyknLFxuXHRcdC8vIGFsbCBvdGhlciBrZXl3b3Jkc1xuXHRcdG90aGVyOiAnYWJzdHJhY3QgYXMgYmFzZSBicmVhayBjYXNlIGNhdGNoIGNoZWNrZWQgY29uc3QgY29udGludWUgZGVmYXVsdCBkZWxlZ2F0ZSBkbyBlbHNlIGV2ZW50IGV4cGxpY2l0IGV4dGVybiBmaW5hbGx5IGZpeGVkIGZvciBmb3JlYWNoIGdvdG8gaWYgaW1wbGljaXQgaW4gaW50ZXJuYWwgaXMgbG9jayBuYW1lc3BhY2UgbmV3IG51bGwgb3BlcmF0b3Igb3V0IG92ZXJyaWRlIHBhcmFtcyBwcml2YXRlIHByb3RlY3RlZCBwdWJsaWMgcmVhZG9ubHkgcmVmIHJldHVybiBzZWFsZWQgc2l6ZW9mIHN0YWNrYWxsb2Mgc3RhdGljIHN3aXRjaCB0aGlzIHRocm93IHRyeSB0eXBlb2YgdW5jaGVja2VkIHVuc2FmZSB1c2luZyB2aXJ0dWFsIHZvbGF0aWxlIHdoaWxlIHlpZWxkJ1xuXHR9O1xuXG5cdC8vIGtleXdvcmRzXG5cdGZ1bmN0aW9uIGtleXdvcmRzVG9QYXR0ZXJuKHdvcmRzKSB7XG5cdFx0cmV0dXJuICdcXFxcYig/OicgKyB3b3Jkcy50cmltKCkucmVwbGFjZSgvIC9nLCAnfCcpICsgJylcXFxcYic7XG5cdH1cblx0dmFyIHR5cGVEZWNsYXJhdGlvbktleXdvcmRzID0ga2V5d29yZHNUb1BhdHRlcm4oa2V5d29yZEtpbmRzLnR5cGVEZWNsYXJhdGlvbik7XG5cdHZhciBrZXl3b3JkcyA9IFJlZ0V4cChrZXl3b3Jkc1RvUGF0dGVybihrZXl3b3JkS2luZHMudHlwZSArICcgJyArIGtleXdvcmRLaW5kcy50eXBlRGVjbGFyYXRpb24gKyAnICcgKyBrZXl3b3JkS2luZHMuY29udGV4dHVhbCArICcgJyArIGtleXdvcmRLaW5kcy5vdGhlcikpO1xuXHR2YXIgbm9uVHlwZUtleXdvcmRzID0ga2V5d29yZHNUb1BhdHRlcm4oa2V5d29yZEtpbmRzLnR5cGVEZWNsYXJhdGlvbiArICcgJyArIGtleXdvcmRLaW5kcy5jb250ZXh0dWFsICsgJyAnICsga2V5d29yZEtpbmRzLm90aGVyKTtcblx0dmFyIG5vbkNvbnRleHR1YWxLZXl3b3JkcyA9IGtleXdvcmRzVG9QYXR0ZXJuKGtleXdvcmRLaW5kcy50eXBlICsgJyAnICsga2V5d29yZEtpbmRzLnR5cGVEZWNsYXJhdGlvbiArICcgJyArIGtleXdvcmRLaW5kcy5vdGhlcik7XG5cblx0Ly8gdHlwZXNcblx0dmFyIGdlbmVyaWMgPSBuZXN0ZWQoLzwoPzpbXjw+Oz0rXFwtKi8lJnxeXXw8PHNlbGY+PikqPi8uc291cmNlLCAyKTsgLy8gdGhlIGlkZWEgYmVoaW5kIHRoZSBvdGhlciBmb3JiaWRkZW4gY2hhcmFjdGVycyBpcyB0byBwcmV2ZW50IGZhbHNlIHBvc2l0aXZlcy4gU2FtZSBmb3IgdHVwbGVFbGVtZW50LlxuXHR2YXIgbmVzdGVkUm91bmQgPSBuZXN0ZWQoL1xcKCg/OlteKCldfDw8c2VsZj4+KSpcXCkvLnNvdXJjZSwgMik7XG5cdHZhciBuYW1lID0gL0A/XFxiW0EtWmEtel9dXFx3KlxcYi8uc291cmNlO1xuXHR2YXIgZ2VuZXJpY05hbWUgPSByZXBsYWNlKC88PDA+Pig/Olxccyo8PDE+Pik/Ly5zb3VyY2UsIFtuYW1lLCBnZW5lcmljXSk7XG5cdHZhciBpZGVudGlmaWVyID0gcmVwbGFjZSgvKD8hPDwwPj4pPDwxPj4oPzpcXHMqXFwuXFxzKjw8MT4+KSovLnNvdXJjZSwgW25vblR5cGVLZXl3b3JkcywgZ2VuZXJpY05hbWVdKTtcblx0dmFyIGFycmF5ID0gL1xcW1xccyooPzosXFxzKikqXFxdLy5zb3VyY2U7XG5cdHZhciB0eXBlRXhwcmVzc2lvbldpdGhvdXRUdXBsZSA9IHJlcGxhY2UoLzw8MD4+KD86XFxzKig/OlxcP1xccyopPzw8MT4+KSooPzpcXHMqXFw/KT8vLnNvdXJjZSwgW2lkZW50aWZpZXIsIGFycmF5XSk7XG5cdHZhciB0dXBsZUVsZW1lbnQgPSByZXBsYWNlKC9bXiwoKTw+W1xcXTs9K1xcLSovJSZ8Xl18PDwwPj58PDwxPj58PDwyPj4vLnNvdXJjZSwgW2dlbmVyaWMsIG5lc3RlZFJvdW5kLCBhcnJheV0pO1xuXHR2YXIgdHVwbGUgPSByZXBsYWNlKC9cXCg8PDA+PisoPzosPDwwPj4rKStcXCkvLnNvdXJjZSwgW3R1cGxlRWxlbWVudF0pO1xuXHR2YXIgdHlwZUV4cHJlc3Npb24gPSByZXBsYWNlKC8oPzo8PDA+Pnw8PDE+PikoPzpcXHMqKD86XFw/XFxzKik/PDwyPj4pKig/OlxccypcXD8pPy8uc291cmNlLCBbdHVwbGUsIGlkZW50aWZpZXIsIGFycmF5XSk7XG5cblx0dmFyIHR5cGVJbnNpZGUgPSB7XG5cdFx0J2tleXdvcmQnOiBrZXl3b3Jkcyxcblx0XHQncHVuY3R1YXRpb24nOiAvWzw+KCk/LC46W1xcXV0vXG5cdH07XG5cblx0Ly8gc3RyaW5ncyAmIGNoYXJhY3RlcnNcblx0Ly8gaHR0cHM6Ly9kb2NzLm1pY3Jvc29mdC5jb20vZW4tdXMvZG90bmV0L2NzaGFycC9sYW5ndWFnZS1yZWZlcmVuY2UvbGFuZ3VhZ2Utc3BlY2lmaWNhdGlvbi9sZXhpY2FsLXN0cnVjdHVyZSNjaGFyYWN0ZXItbGl0ZXJhbHNcblx0Ly8gaHR0cHM6Ly9kb2NzLm1pY3Jvc29mdC5jb20vZW4tdXMvZG90bmV0L2NzaGFycC9sYW5ndWFnZS1yZWZlcmVuY2UvbGFuZ3VhZ2Utc3BlY2lmaWNhdGlvbi9sZXhpY2FsLXN0cnVjdHVyZSNzdHJpbmctbGl0ZXJhbHNcblx0dmFyIGNoYXJhY3RlciA9IC8nKD86W15cXHJcXG4nXFxcXF18XFxcXC58XFxcXFtVdXhdW1xcZGEtZkEtRl17MSw4fSknLy5zb3VyY2U7IC8vIHNpbXBsaWZpZWQgcGF0dGVyblxuXHR2YXIgcmVndWxhclN0cmluZyA9IC9cIig/OlxcXFwufFteXFxcXFwiXFxyXFxuXSkqXCIvLnNvdXJjZTtcblx0dmFyIHZlcmJhdGltU3RyaW5nID0gL0BcIig/OlwiXCJ8XFxcXFtcXHNcXFNdfFteXFxcXFwiXSkqXCIoPyFcIikvLnNvdXJjZTtcblxuXG5cdFByaXNtLmxhbmd1YWdlcy5jc2hhcnAgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdjbGlrZScsIHtcblx0XHQnc3RyaW5nJzogW1xuXHRcdFx0e1xuXHRcdFx0XHRwYXR0ZXJuOiByZSgvKF58W14kXFxcXF0pPDwwPj4vLnNvdXJjZSwgW3ZlcmJhdGltU3RyaW5nXSksXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdGdyZWVkeTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0cGF0dGVybjogcmUoLyhefFteQCRcXFxcXSk8PDA+Pi8uc291cmNlLCBbcmVndWxhclN0cmluZ10pLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRncmVlZHk6IHRydWVcblx0XHRcdH1cblx0XHRdLFxuXHRcdCdjbGFzcy1uYW1lJzogW1xuXHRcdFx0e1xuXHRcdFx0XHQvLyBVc2luZyBzdGF0aWNcblx0XHRcdFx0Ly8gdXNpbmcgc3RhdGljIFN5c3RlbS5NYXRoO1xuXHRcdFx0XHRwYXR0ZXJuOiByZSgvKFxcYnVzaW5nXFxzK3N0YXRpY1xccyspPDwwPj4oPz1cXHMqOykvLnNvdXJjZSwgW2lkZW50aWZpZXJdKSxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0aW5zaWRlOiB0eXBlSW5zaWRlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHQvLyBVc2luZyBhbGlhcyAodHlwZSlcblx0XHRcdFx0Ly8gdXNpbmcgUHJvamVjdCA9IFBDLk15Q29tcGFueS5Qcm9qZWN0O1xuXHRcdFx0XHRwYXR0ZXJuOiByZSgvKFxcYnVzaW5nXFxzKzw8MD4+XFxzKj1cXHMqKTw8MT4+KD89XFxzKjspLy5zb3VyY2UsIFtuYW1lLCB0eXBlRXhwcmVzc2lvbl0pLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRpbnNpZGU6IHR5cGVJbnNpZGVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdC8vIFVzaW5nIGFsaWFzIChhbGlhcylcblx0XHRcdFx0Ly8gdXNpbmcgUHJvamVjdCA9IFBDLk15Q29tcGFueS5Qcm9qZWN0O1xuXHRcdFx0XHRwYXR0ZXJuOiByZSgvKFxcYnVzaW5nXFxzKyk8PDA+Pig/PVxccyo9KS8uc291cmNlLCBbbmFtZV0pLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHQvLyBUeXBlIGRlY2xhcmF0aW9uc1xuXHRcdFx0XHQvLyBjbGFzcyBGb288QSwgQj5cblx0XHRcdFx0Ly8gaW50ZXJmYWNlIEZvbzxvdXQgQSwgQj5cblx0XHRcdFx0cGF0dGVybjogcmUoLyhcXGI8PDA+PlxccyspPDwxPj4vLnNvdXJjZSwgW3R5cGVEZWNsYXJhdGlvbktleXdvcmRzLCBnZW5lcmljTmFtZV0pLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRpbnNpZGU6IHR5cGVJbnNpZGVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdC8vIFNpbmdsZSBjYXRjaCBleGNlcHRpb24gZGVjbGFyYXRpb25cblx0XHRcdFx0Ly8gY2F0Y2goRm9vKVxuXHRcdFx0XHQvLyAodGhpbmdzIGxpa2UgY2F0Y2goRm9vIGUpIGlzIGNvdmVyZWQgYnkgdmFyaWFibGUgZGVjbGFyYXRpb24pXG5cdFx0XHRcdHBhdHRlcm46IHJlKC8oXFxiY2F0Y2hcXHMqXFwoXFxzKik8PDA+Pi8uc291cmNlLCBbaWRlbnRpZmllcl0pLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRpbnNpZGU6IHR5cGVJbnNpZGVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdC8vIE5hbWUgb2YgdGhlIHR5cGUgcGFyYW1ldGVyIG9mIGdlbmVyaWMgY29uc3RyYWludHNcblx0XHRcdFx0Ly8gd2hlcmUgRm9vIDogY2xhc3Ncblx0XHRcdFx0cGF0dGVybjogcmUoLyhcXGJ3aGVyZVxccyspPDwwPj4vLnNvdXJjZSwgW25hbWVdKSxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0Ly8gQ2FzdHMgYW5kIGNoZWNrcyB2aWEgYXMgYW5kIGlzLlxuXHRcdFx0XHQvLyBhcyBGb288QT4sIGlzIEJhcjxCPlxuXHRcdFx0XHQvLyAodGhpbmdzIGxpa2UgaWYoYSBpcyBGb28gYikgaXMgY292ZXJlZCBieSB2YXJpYWJsZSBkZWNsYXJhdGlvbilcblx0XHRcdFx0cGF0dGVybjogcmUoLyhcXGIoPzppcyg/Olxccytub3QpP3xhcylcXHMrKTw8MD4+Ly5zb3VyY2UsIFt0eXBlRXhwcmVzc2lvbldpdGhvdXRUdXBsZV0pLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRpbnNpZGU6IHR5cGVJbnNpZGVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdC8vIFZhcmlhYmxlLCBmaWVsZCBhbmQgcGFyYW1ldGVyIGRlY2xhcmF0aW9uXG5cdFx0XHRcdC8vIChGb28gYmFyLCBCYXIgYmF6LCBGb29bLCxdIGJheSwgRm9vPEJhciwgRm9vQmFyPEJhcj4+IGJheClcblx0XHRcdFx0cGF0dGVybjogcmUoL1xcYjw8MD4+KD89XFxzKyg/ITw8MT4+fHdpdGhcXHMqXFx7KTw8Mj4+KD86XFxzKls9LDs6eylcXF1dfFxccysoPzppbnx3aGVuKVxcYikpLy5zb3VyY2UsIFt0eXBlRXhwcmVzc2lvbiwgbm9uQ29udGV4dHVhbEtleXdvcmRzLCBuYW1lXSksXG5cdFx0XHRcdGluc2lkZTogdHlwZUluc2lkZVxuXHRcdFx0fVxuXHRcdF0sXG5cdFx0J2tleXdvcmQnOiBrZXl3b3Jkcyxcblx0XHQvLyBodHRwczovL2RvY3MubWljcm9zb2Z0LmNvbS9lbi11cy9kb3RuZXQvY3NoYXJwL2xhbmd1YWdlLXJlZmVyZW5jZS9sYW5ndWFnZS1zcGVjaWZpY2F0aW9uL2xleGljYWwtc3RydWN0dXJlI2xpdGVyYWxzXG5cdFx0J251bWJlcic6IC8oPzpcXGIwKD86eFtcXGRhLWZfXSpbXFxkYS1mXXxiWzAxX10qWzAxXSl8KD86XFxCXFwuXFxkKyg/Ol8rXFxkKykqfFxcYlxcZCsoPzpfK1xcZCspKig/OlxcLlxcZCsoPzpfK1xcZCspKik/KSg/OmVbLStdP1xcZCsoPzpfK1xcZCspKik/KSg/OltkZmxtdV18bHV8dWwpP1xcYi9pLFxuXHRcdCdvcGVyYXRvcic6IC8+Pj0/fDw8PT98Wy09XT58KFstKyZ8XSlcXDF8fnxcXD9cXD89P3xbLSsqLyUmfF4hPTw+XT0/Lyxcblx0XHQncHVuY3R1YXRpb24nOiAvXFw/XFwuP3w6Onxbe31bXFxdOygpLC46XS9cblx0fSk7XG5cblx0UHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnY3NoYXJwJywgJ251bWJlcicsIHtcblx0XHQncmFuZ2UnOiB7XG5cdFx0XHRwYXR0ZXJuOiAvXFwuXFwuLyxcblx0XHRcdGFsaWFzOiAnb3BlcmF0b3InXG5cdFx0fVxuXHR9KTtcblxuXHRQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdjc2hhcnAnLCAncHVuY3R1YXRpb24nLCB7XG5cdFx0J25hbWVkLXBhcmFtZXRlcic6IHtcblx0XHRcdHBhdHRlcm46IHJlKC8oWygsXVxccyopPDwwPj4oPz1cXHMqOikvLnNvdXJjZSwgW25hbWVdKSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRhbGlhczogJ3B1bmN0dWF0aW9uJ1xuXHRcdH1cblx0fSk7XG5cblx0UHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnY3NoYXJwJywgJ2NsYXNzLW5hbWUnLCB7XG5cdFx0J25hbWVzcGFjZSc6IHtcblx0XHRcdC8vIG5hbWVzcGFjZSBGb28uQmFyIHt9XG5cdFx0XHQvLyB1c2luZyBGb28uQmFyO1xuXHRcdFx0cGF0dGVybjogcmUoLyhcXGIoPzpuYW1lc3BhY2V8dXNpbmcpXFxzKyk8PDA+Pig/OlxccypcXC5cXHMqPDwwPj4pKig/PVxccypbO3tdKS8uc291cmNlLCBbbmFtZV0pLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGluc2lkZToge1xuXHRcdFx0XHQncHVuY3R1YXRpb24nOiAvXFwuL1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0J3R5cGUtZXhwcmVzc2lvbic6IHtcblx0XHRcdC8vIGRlZmF1bHQoRm9vKSwgdHlwZW9mKEZvbzxCYXI+KSwgc2l6ZW9mKGludClcblx0XHRcdHBhdHRlcm46IHJlKC8oXFxiKD86ZGVmYXVsdHxzaXplb2Z8dHlwZW9mKVxccypcXChcXHMqKD8hXFxzKSkoPzpbXigpXFxzXXxcXHMoPyFcXHMpfDw8MD4+KSooPz1cXHMqXFwpKS8uc291cmNlLCBbbmVzdGVkUm91bmRdKSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRhbGlhczogJ2NsYXNzLW5hbWUnLFxuXHRcdFx0aW5zaWRlOiB0eXBlSW5zaWRlXG5cdFx0fSxcblx0XHQncmV0dXJuLXR5cGUnOiB7XG5cdFx0XHQvLyBGb288QmFyPiBGb3JCYXIoKTsgRm9vIElGb28uQmFyKCkgPT4gMFxuXHRcdFx0Ly8gaW50IHRoaXNbaW50IGluZGV4XSA9PiAwOyBUIElSZWFkT25seUxpc3Q8VD4udGhpc1tpbnQgaW5kZXhdID0+IHRoaXNbaW5kZXhdO1xuXHRcdFx0Ly8gaW50IEZvbyA9PiAwOyBpbnQgRm9vIHsgZ2V0OyBzZXQgfSA9IDA7XG5cdFx0XHRwYXR0ZXJuOiByZSgvPDwwPj4oPz1cXHMrKD86PDwxPj5cXHMqKD86PT58Wyh7XXxcXC5cXHMqdGhpc1xccypcXFspfHRoaXNcXHMqXFxbKSkvLnNvdXJjZSwgW3R5cGVFeHByZXNzaW9uLCBpZGVudGlmaWVyXSksXG5cdFx0XHRpbnNpZGU6IHR5cGVJbnNpZGUsXG5cdFx0XHRhbGlhczogJ2NsYXNzLW5hbWUnXG5cdFx0fSxcblx0XHQnY29uc3RydWN0b3ItaW52b2NhdGlvbic6IHtcblx0XHRcdC8vIG5ldyBMaXN0PEZvbzxCYXJbXT4+IHsgfVxuXHRcdFx0cGF0dGVybjogcmUoLyhcXGJuZXdcXHMrKTw8MD4+KD89XFxzKltbKHtdKS8uc291cmNlLCBbdHlwZUV4cHJlc3Npb25dKSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRpbnNpZGU6IHR5cGVJbnNpZGUsXG5cdFx0XHRhbGlhczogJ2NsYXNzLW5hbWUnXG5cdFx0fSxcblx0XHQvKidleHBsaWNpdC1pbXBsZW1lbnRhdGlvbic6IHtcblx0XHRcdC8vIGludCBJRm9vPEZvbz4uQmFyID0+IDA7IHZvaWQgSUZvbzxGb288Rm9vPj4uRm9vPFQ+KCk7XG5cdFx0XHRwYXR0ZXJuOiByZXBsYWNlKC9cXGI8PDA+Pig/PVxcLjw8MT4+KS8sIGNsYXNzTmFtZSwgbWV0aG9kT3JQcm9wZXJ0eURlY2xhcmF0aW9uKSxcblx0XHRcdGluc2lkZTogY2xhc3NOYW1lSW5zaWRlLFxuXHRcdFx0YWxpYXM6ICdjbGFzcy1uYW1lJ1xuXHRcdH0sKi9cblx0XHQnZ2VuZXJpYy1tZXRob2QnOiB7XG5cdFx0XHQvLyBmb288QmFyPigpXG5cdFx0XHRwYXR0ZXJuOiByZSgvPDwwPj5cXHMqPDwxPj4oPz1cXHMqXFwoKS8uc291cmNlLCBbbmFtZSwgZ2VuZXJpY10pLFxuXHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdCdmdW5jdGlvbic6IHJlKC9ePDwwPj4vLnNvdXJjZSwgW25hbWVdKSxcblx0XHRcdFx0J2dlbmVyaWMnOiB7XG5cdFx0XHRcdFx0cGF0dGVybjogUmVnRXhwKGdlbmVyaWMpLFxuXHRcdFx0XHRcdGFsaWFzOiAnY2xhc3MtbmFtZScsXG5cdFx0XHRcdFx0aW5zaWRlOiB0eXBlSW5zaWRlXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdCd0eXBlLWxpc3QnOiB7XG5cdFx0XHQvLyBUaGUgbGlzdCBvZiB0eXBlcyBpbmhlcml0ZWQgb3Igb2YgZ2VuZXJpYyBjb25zdHJhaW50c1xuXHRcdFx0Ly8gY2xhc3MgRm9vPEY+IDogQmFyLCBJTGlzdDxGb29CYXI+XG5cdFx0XHQvLyB3aGVyZSBGIDogQmFyLCBJTGlzdDxpbnQ+XG5cdFx0XHRwYXR0ZXJuOiByZShcblx0XHRcdFx0L1xcYigoPzo8PDA+Plxccys8PDE+PnxyZWNvcmRcXHMrPDwxPj5cXHMqPDw1Pj58d2hlcmVcXHMrPDwyPj4pXFxzKjpcXHMqKSg/Ojw8Mz4+fDw8ND4+fDw8MT4+XFxzKjw8NT4+fDw8Nj4+KSg/OlxccyosXFxzKig/Ojw8Mz4+fDw8ND4+fDw8Nj4+KSkqKD89XFxzKig/OndoZXJlfFt7O118PT58JCkpLy5zb3VyY2UsXG5cdFx0XHRcdFt0eXBlRGVjbGFyYXRpb25LZXl3b3JkcywgZ2VuZXJpY05hbWUsIG5hbWUsIHR5cGVFeHByZXNzaW9uLCBrZXl3b3Jkcy5zb3VyY2UsIG5lc3RlZFJvdW5kLCAvXFxibmV3XFxzKlxcKFxccypcXCkvLnNvdXJjZV1cblx0XHRcdCksXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdCdyZWNvcmQtYXJndW1lbnRzJzoge1xuXHRcdFx0XHRcdHBhdHRlcm46IHJlKC8oXig/IW5ld1xccypcXCgpPDwwPj5cXHMqKTw8MT4+Ly5zb3VyY2UsIFtnZW5lcmljTmFtZSwgbmVzdGVkUm91bmRdKSxcblx0XHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRcdFx0XHRpbnNpZGU6IFByaXNtLmxhbmd1YWdlcy5jc2hhcnBcblx0XHRcdFx0fSxcblx0XHRcdFx0J2tleXdvcmQnOiBrZXl3b3Jkcyxcblx0XHRcdFx0J2NsYXNzLW5hbWUnOiB7XG5cdFx0XHRcdFx0cGF0dGVybjogUmVnRXhwKHR5cGVFeHByZXNzaW9uKSxcblx0XHRcdFx0XHRncmVlZHk6IHRydWUsXG5cdFx0XHRcdFx0aW5zaWRlOiB0eXBlSW5zaWRlXG5cdFx0XHRcdH0sXG5cdFx0XHRcdCdwdW5jdHVhdGlvbic6IC9bLCgpXS9cblx0XHRcdH1cblx0XHR9LFxuXHRcdCdwcmVwcm9jZXNzb3InOiB7XG5cdFx0XHRwYXR0ZXJuOiAvKF5bXFx0IF0qKSMuKi9tLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGFsaWFzOiAncHJvcGVydHknLFxuXHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdC8vIGhpZ2hsaWdodCBwcmVwcm9jZXNzb3IgZGlyZWN0aXZlcyBhcyBrZXl3b3Jkc1xuXHRcdFx0XHQnZGlyZWN0aXZlJzoge1xuXHRcdFx0XHRcdHBhdHRlcm46IC8oIylcXGIoPzpkZWZpbmV8ZWxpZnxlbHNlfGVuZGlmfGVuZHJlZ2lvbnxlcnJvcnxpZnxsaW5lfG51bGxhYmxlfHByYWdtYXxyZWdpb258dW5kZWZ8d2FybmluZylcXGIvLFxuXHRcdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdFx0YWxpYXM6ICdrZXl3b3JkJ1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHQvLyBhdHRyaWJ1dGVzXG5cdHZhciByZWd1bGFyU3RyaW5nT3JDaGFyYWN0ZXIgPSByZWd1bGFyU3RyaW5nICsgJ3wnICsgY2hhcmFjdGVyO1xuXHR2YXIgcmVndWxhclN0cmluZ0NoYXJhY3Rlck9yQ29tbWVudCA9IHJlcGxhY2UoL1xcLyg/IVsqL10pfFxcL1xcL1teXFxyXFxuXSpbXFxyXFxuXXxcXC9cXCooPzpbXipdfFxcKig/IVxcLykpKlxcKlxcL3w8PDA+Pi8uc291cmNlLCBbcmVndWxhclN0cmluZ09yQ2hhcmFjdGVyXSk7XG5cdHZhciByb3VuZEV4cHJlc3Npb24gPSBuZXN0ZWQocmVwbGFjZSgvW15cIicvKCldfDw8MD4+fFxcKDw8c2VsZj4+KlxcKS8uc291cmNlLCBbcmVndWxhclN0cmluZ0NoYXJhY3Rlck9yQ29tbWVudF0pLCAyKTtcblxuXHQvLyBodHRwczovL2RvY3MubWljcm9zb2Z0LmNvbS9lbi11cy9kb3RuZXQvY3NoYXJwL3Byb2dyYW1taW5nLWd1aWRlL2NvbmNlcHRzL2F0dHJpYnV0ZXMvI2F0dHJpYnV0ZS10YXJnZXRzXG5cdHZhciBhdHRyVGFyZ2V0ID0gL1xcYig/OmFzc2VtYmx5fGV2ZW50fGZpZWxkfG1ldGhvZHxtb2R1bGV8cGFyYW18cHJvcGVydHl8cmV0dXJufHR5cGUpXFxiLy5zb3VyY2U7XG5cdHZhciBhdHRyID0gcmVwbGFjZSgvPDwwPj4oPzpcXHMqXFwoPDwxPj4qXFwpKT8vLnNvdXJjZSwgW2lkZW50aWZpZXIsIHJvdW5kRXhwcmVzc2lvbl0pO1xuXG5cdFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2NzaGFycCcsICdjbGFzcy1uYW1lJywge1xuXHRcdCdhdHRyaWJ1dGUnOiB7XG5cdFx0XHQvLyBBdHRyaWJ1dGVzXG5cdFx0XHQvLyBbRm9vXSwgW0ZvbygxKSwgQmFyKDIsIFByb3AgPSBcImZvb1wiKV0sIFtyZXR1cm46IEZvbygxKSwgQmFyKDIpXSwgW2Fzc2VtYmx5OiBGb28oQmFyKV1cblx0XHRcdHBhdHRlcm46IHJlKC8oKD86XnxbXlxcc1xcdz4pP10pXFxzKlxcW1xccyopKD86PDwwPj5cXHMqOlxccyopPzw8MT4+KD86XFxzKixcXHMqPDwxPj4pKig/PVxccypcXF0pLy5zb3VyY2UsIFthdHRyVGFyZ2V0LCBhdHRyXSksXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdCd0YXJnZXQnOiB7XG5cdFx0XHRcdFx0cGF0dGVybjogcmUoL148PDA+Pig/PVxccyo6KS8uc291cmNlLCBbYXR0clRhcmdldF0pLFxuXHRcdFx0XHRcdGFsaWFzOiAna2V5d29yZCdcblx0XHRcdFx0fSxcblx0XHRcdFx0J2F0dHJpYnV0ZS1hcmd1bWVudHMnOiB7XG5cdFx0XHRcdFx0cGF0dGVybjogcmUoL1xcKDw8MD4+KlxcKS8uc291cmNlLCBbcm91bmRFeHByZXNzaW9uXSksXG5cdFx0XHRcdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMuY3NoYXJwXG5cdFx0XHRcdH0sXG5cdFx0XHRcdCdjbGFzcy1uYW1lJzoge1xuXHRcdFx0XHRcdHBhdHRlcm46IFJlZ0V4cChpZGVudGlmaWVyKSxcblx0XHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHRcdCdwdW5jdHVhdGlvbic6IC9cXC4vXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHQncHVuY3R1YXRpb24nOiAvWzosXS9cblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cblx0Ly8gc3RyaW5nIGludGVycG9sYXRpb25cblx0dmFyIGZvcm1hdFN0cmluZyA9IC86W159XFxyXFxuXSsvLnNvdXJjZTtcblx0Ly8gbXVsdGkgbGluZVxuXHR2YXIgbUludGVycG9sYXRpb25Sb3VuZCA9IG5lc3RlZChyZXBsYWNlKC9bXlwiJy8oKV18PDwwPj58XFwoPDxzZWxmPj4qXFwpLy5zb3VyY2UsIFtyZWd1bGFyU3RyaW5nQ2hhcmFjdGVyT3JDb21tZW50XSksIDIpO1xuXHR2YXIgbUludGVycG9sYXRpb24gPSByZXBsYWNlKC9cXHsoPyFcXHspKD86KD8hW306XSk8PDA+PikqPDwxPj4/XFx9Ly5zb3VyY2UsIFttSW50ZXJwb2xhdGlvblJvdW5kLCBmb3JtYXRTdHJpbmddKTtcblx0Ly8gc2luZ2xlIGxpbmVcblx0dmFyIHNJbnRlcnBvbGF0aW9uUm91bmQgPSBuZXN0ZWQocmVwbGFjZSgvW15cIicvKCldfFxcLyg/IVxcKil8XFwvXFwqKD86W14qXXxcXCooPyFcXC8pKSpcXCpcXC98PDwwPj58XFwoPDxzZWxmPj4qXFwpLy5zb3VyY2UsIFtyZWd1bGFyU3RyaW5nT3JDaGFyYWN0ZXJdKSwgMik7XG5cdHZhciBzSW50ZXJwb2xhdGlvbiA9IHJlcGxhY2UoL1xceyg/IVxceykoPzooPyFbfTpdKTw8MD4+KSo8PDE+Pj9cXH0vLnNvdXJjZSwgW3NJbnRlcnBvbGF0aW9uUm91bmQsIGZvcm1hdFN0cmluZ10pO1xuXG5cdGZ1bmN0aW9uIGNyZWF0ZUludGVycG9sYXRpb25JbnNpZGUoaW50ZXJwb2xhdGlvbiwgaW50ZXJwb2xhdGlvblJvdW5kKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdCdpbnRlcnBvbGF0aW9uJzoge1xuXHRcdFx0XHRwYXR0ZXJuOiByZSgvKCg/Ol58W157XSkoPzpcXHtcXHspKik8PDA+Pi8uc291cmNlLCBbaW50ZXJwb2xhdGlvbl0pLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHQnZm9ybWF0LXN0cmluZyc6IHtcblx0XHRcdFx0XHRcdHBhdHRlcm46IHJlKC8oXlxceyg/Oig/IVt9Ol0pPDwwPj4pKik8PDE+Pig/PVxcfSQpLy5zb3VyY2UsIFtpbnRlcnBvbGF0aW9uUm91bmQsIGZvcm1hdFN0cmluZ10pLFxuXHRcdFx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdFx0XHQncHVuY3R1YXRpb24nOiAvXjovXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHQncHVuY3R1YXRpb24nOiAvXlxce3xcXH0kLyxcblx0XHRcdFx0XHQnZXhwcmVzc2lvbic6IHtcblx0XHRcdFx0XHRcdHBhdHRlcm46IC9bXFxzXFxTXSsvLFxuXHRcdFx0XHRcdFx0YWxpYXM6ICdsYW5ndWFnZS1jc2hhcnAnLFxuXHRcdFx0XHRcdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMuY3NoYXJwXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0J3N0cmluZyc6IC9bXFxzXFxTXSsvXG5cdFx0fTtcblx0fVxuXG5cdFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2NzaGFycCcsICdzdHJpbmcnLCB7XG5cdFx0J2ludGVycG9sYXRpb24tc3RyaW5nJzogW1xuXHRcdFx0e1xuXHRcdFx0XHRwYXR0ZXJuOiByZSgvKF58W15cXFxcXSkoPzpcXCRAfEBcXCQpXCIoPzpcIlwifFxcXFxbXFxzXFxTXXxcXHtcXHt8PDwwPj58W15cXFxce1wiXSkqXCIvLnNvdXJjZSwgW21JbnRlcnBvbGF0aW9uXSksXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRcdFx0aW5zaWRlOiBjcmVhdGVJbnRlcnBvbGF0aW9uSW5zaWRlKG1JbnRlcnBvbGF0aW9uLCBtSW50ZXJwb2xhdGlvblJvdW5kKSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHBhdHRlcm46IHJlKC8oXnxbXkBcXFxcXSlcXCRcIig/OlxcXFwufFxce1xce3w8PDA+PnxbXlxcXFxcIntdKSpcIi8uc291cmNlLCBbc0ludGVycG9sYXRpb25dKSxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdFx0XHRpbnNpZGU6IGNyZWF0ZUludGVycG9sYXRpb25JbnNpZGUoc0ludGVycG9sYXRpb24sIHNJbnRlcnBvbGF0aW9uUm91bmQpLFxuXHRcdFx0fVxuXHRcdF0sXG5cdFx0J2NoYXInOiB7XG5cdFx0XHRwYXR0ZXJuOiBSZWdFeHAoY2hhcmFjdGVyKSxcblx0XHRcdGdyZWVkeTogdHJ1ZVxuXHRcdH1cblx0fSk7XG5cblx0UHJpc20ubGFuZ3VhZ2VzLmRvdG5ldCA9IFByaXNtLmxhbmd1YWdlcy5jcyA9IFByaXNtLmxhbmd1YWdlcy5jc2hhcnA7XG5cbn0oUHJpc20pKTtcblxuKGZ1bmN0aW9uIChQcmlzbSkge1xuXG5cdHZhciBzdHJpbmcgPSAvKD86XCIoPzpcXFxcKD86XFxyXFxufFtcXHNcXFNdKXxbXlwiXFxcXFxcclxcbl0pKlwifCcoPzpcXFxcKD86XFxyXFxufFtcXHNcXFNdKXxbXidcXFxcXFxyXFxuXSkqJykvO1xuXG5cdFByaXNtLmxhbmd1YWdlcy5jc3MgPSB7XG5cdFx0J2NvbW1lbnQnOiAvXFwvXFwqW1xcc1xcU10qP1xcKlxcLy8sXG5cdFx0J2F0cnVsZSc6IHtcblx0XHRcdHBhdHRlcm46IFJlZ0V4cCgnQFtcXFxcdy1dKD86JyArIC9bXjt7XFxzXCInXXxcXHMrKD8hXFxzKS8uc291cmNlICsgJ3wnICsgc3RyaW5nLnNvdXJjZSArICcpKj8nICsgLyg/Ojt8KD89XFxzKlxceykpLy5zb3VyY2UpLFxuXHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdCdydWxlJzogL15AW1xcdy1dKy8sXG5cdFx0XHRcdCdzZWxlY3Rvci1mdW5jdGlvbi1hcmd1bWVudCc6IHtcblx0XHRcdFx0XHRwYXR0ZXJuOiAvKFxcYnNlbGVjdG9yXFxzKlxcKFxccyooPyFbXFxzKV0pKSg/OlteKClcXHNdfFxccysoPyFbXFxzKV0pfFxcKCg/OlteKCldfFxcKFteKCldKlxcKSkqXFwpKSsoPz1cXHMqXFwpKS8sXG5cdFx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0XHRhbGlhczogJ3NlbGVjdG9yJ1xuXHRcdFx0XHR9LFxuXHRcdFx0XHQna2V5d29yZCc6IHtcblx0XHRcdFx0XHRwYXR0ZXJuOiAvKF58W15cXHctXSkoPzphbmR8bm90fG9ubHl8b3IpKD8hW1xcdy1dKS8sXG5cdFx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIFNlZSByZXN0IGJlbG93XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQndXJsJzoge1xuXHRcdFx0Ly8gaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXHRcdFx0cGF0dGVybjogUmVnRXhwKCdcXFxcYnVybFxcXFwoKD86JyArIHN0cmluZy5zb3VyY2UgKyAnfCcgKyAvKD86W15cXFxcXFxyXFxuKClcIiddfFxcXFxbXFxzXFxTXSkqLy5zb3VyY2UgKyAnKVxcXFwpJywgJ2knKSxcblx0XHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRcdGluc2lkZToge1xuXHRcdFx0XHQnZnVuY3Rpb24nOiAvXnVybC9pLFxuXHRcdFx0XHQncHVuY3R1YXRpb24nOiAvXlxcKHxcXCkkLyxcblx0XHRcdFx0J3N0cmluZyc6IHtcblx0XHRcdFx0XHRwYXR0ZXJuOiBSZWdFeHAoJ14nICsgc3RyaW5nLnNvdXJjZSArICckJyksXG5cdFx0XHRcdFx0YWxpYXM6ICd1cmwnXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdCdzZWxlY3Rvcic6IHtcblx0XHRcdHBhdHRlcm46IFJlZ0V4cCgnKF58W3t9XFxcXHNdKVtee31cXFxcc10oPzpbXnt9O1wiXFwnXFxcXHNdfFxcXFxzKyg/IVtcXFxcc3tdKXwnICsgc3RyaW5nLnNvdXJjZSArICcpKig/PVxcXFxzKlxcXFx7KScpLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdH0sXG5cdFx0J3N0cmluZyc6IHtcblx0XHRcdHBhdHRlcm46IHN0cmluZyxcblx0XHRcdGdyZWVkeTogdHJ1ZVxuXHRcdH0sXG5cdFx0J3Byb3BlcnR5Jzoge1xuXHRcdFx0cGF0dGVybjogLyhefFteLVxcd1xceEEwLVxcdUZGRkZdKSg/IVxccylbLV9hLXpcXHhBMC1cXHVGRkZGXSg/Oig/IVxccylbLVxcd1xceEEwLVxcdUZGRkZdKSooPz1cXHMqOikvaSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHR9LFxuXHRcdCdpbXBvcnRhbnQnOiAvIWltcG9ydGFudFxcYi9pLFxuXHRcdCdmdW5jdGlvbic6IHtcblx0XHRcdHBhdHRlcm46IC8oXnxbXi1hLXowLTldKVstYS16MC05XSsoPz1cXCgpL2ksXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0fSxcblx0XHQncHVuY3R1YXRpb24nOiAvWygpe307OixdL1xuXHR9O1xuXG5cdFByaXNtLmxhbmd1YWdlcy5jc3NbJ2F0cnVsZSddLmluc2lkZS5yZXN0ID0gUHJpc20ubGFuZ3VhZ2VzLmNzcztcblxuXHR2YXIgbWFya3VwID0gUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cDtcblx0aWYgKG1hcmt1cCkge1xuXHRcdG1hcmt1cC50YWcuYWRkSW5saW5lZCgnc3R5bGUnLCAnY3NzJyk7XG5cdFx0bWFya3VwLnRhZy5hZGRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2NzcycpO1xuXHR9XG5cbn0oUHJpc20pKTtcblxuKGZ1bmN0aW9uIChQcmlzbSkge1xuXG5cdHZhciBrZXl3b3JkcyA9IC9cXGIoPzphYnN0cmFjdHxhc3NlcnR8Ym9vbGVhbnxicmVha3xieXRlfGNhc2V8Y2F0Y2h8Y2hhcnxjbGFzc3xjb25zdHxjb250aW51ZXxkZWZhdWx0fGRvfGRvdWJsZXxlbHNlfGVudW18ZXhwb3J0c3xleHRlbmRzfGZpbmFsfGZpbmFsbHl8ZmxvYXR8Zm9yfGdvdG98aWZ8aW1wbGVtZW50c3xpbXBvcnR8aW5zdGFuY2VvZnxpbnR8aW50ZXJmYWNlfGxvbmd8bW9kdWxlfG5hdGl2ZXxuZXd8bm9uLXNlYWxlZHxudWxsfG9wZW58b3BlbnN8cGFja2FnZXxwZXJtaXRzfHByaXZhdGV8cHJvdGVjdGVkfHByb3ZpZGVzfHB1YmxpY3xyZWNvcmQoPyFcXHMqWygpe31bXFxdPD49JX4uOiw7PytcXC0qLyZ8Xl0pfHJlcXVpcmVzfHJldHVybnxzZWFsZWR8c2hvcnR8c3RhdGljfHN0cmljdGZwfHN1cGVyfHN3aXRjaHxzeW5jaHJvbml6ZWR8dGhpc3x0aHJvd3x0aHJvd3N8dG98dHJhbnNpZW50fHRyYW5zaXRpdmV8dHJ5fHVzZXN8dmFyfHZvaWR8dm9sYXRpbGV8d2hpbGV8d2l0aHx5aWVsZClcXGIvO1xuXG5cdC8vIGZ1bGwgcGFja2FnZSAob3B0aW9uYWwpICsgcGFyZW50IGNsYXNzZXMgKG9wdGlvbmFsKVxuXHR2YXIgY2xhc3NOYW1lUHJlZml4ID0gLyg/OlthLXpdXFx3KlxccypcXC5cXHMqKSooPzpbQS1aXVxcdypcXHMqXFwuXFxzKikqLy5zb3VyY2U7XG5cblx0Ly8gYmFzZWQgb24gdGhlIGphdmEgbmFtaW5nIGNvbnZlbnRpb25zXG5cdHZhciBjbGFzc05hbWUgPSB7XG5cdFx0cGF0dGVybjogUmVnRXhwKC8oXnxbXlxcdy5dKS8uc291cmNlICsgY2xhc3NOYW1lUHJlZml4ICsgL1tBLVpdKD86W1xcZF9BLVpdKlthLXpdXFx3Kik/XFxiLy5zb3VyY2UpLFxuXHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0aW5zaWRlOiB7XG5cdFx0XHQnbmFtZXNwYWNlJzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvXlthLXpdXFx3Kig/OlxccypcXC5cXHMqW2Etel1cXHcqKSooPzpcXHMqXFwuKT8vLFxuXHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHQncHVuY3R1YXRpb24nOiAvXFwuL1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0J3B1bmN0dWF0aW9uJzogL1xcLi9cblx0XHR9XG5cdH07XG5cblx0UHJpc20ubGFuZ3VhZ2VzLmphdmEgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdjbGlrZScsIHtcblx0XHQnc3RyaW5nJzoge1xuXHRcdFx0cGF0dGVybjogLyhefFteXFxcXF0pXCIoPzpcXFxcLnxbXlwiXFxcXFxcclxcbl0pKlwiLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRncmVlZHk6IHRydWVcblx0XHR9LFxuXHRcdCdjbGFzcy1uYW1lJzogW1xuXHRcdFx0Y2xhc3NOYW1lLFxuXHRcdFx0e1xuXHRcdFx0XHQvLyB2YXJpYWJsZXMsIHBhcmFtZXRlcnMsIGFuZCBjb25zdHJ1Y3RvciByZWZlcmVuY2VzXG5cdFx0XHRcdC8vIHRoaXMgdG8gc3VwcG9ydCBjbGFzcyBuYW1lcyAob3IgZ2VuZXJpYyBwYXJhbWV0ZXJzKSB3aGljaCBkbyBub3QgY29udGFpbiBhIGxvd2VyIGNhc2UgbGV0dGVyIChhbHNvIHdvcmtzIGZvciBtZXRob2RzKVxuXHRcdFx0XHRwYXR0ZXJuOiBSZWdFeHAoLyhefFteXFx3Ll0pLy5zb3VyY2UgKyBjbGFzc05hbWVQcmVmaXggKyAvW0EtWl1cXHcqKD89XFxzK1xcdytcXHMqWzssPSgpXXxcXHMqKD86XFxbW1xccyxdKlxcXVxccyopPzo6XFxzKm5ld1xcYikvLnNvdXJjZSksXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdGluc2lkZTogY2xhc3NOYW1lLmluc2lkZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0Ly8gY2xhc3MgbmFtZXMgYmFzZWQgb24ga2V5d29yZFxuXHRcdFx0XHQvLyB0aGlzIHRvIHN1cHBvcnQgY2xhc3MgbmFtZXMgKG9yIGdlbmVyaWMgcGFyYW1ldGVycykgd2hpY2ggZG8gbm90IGNvbnRhaW4gYSBsb3dlciBjYXNlIGxldHRlciAoYWxzbyB3b3JrcyBmb3IgbWV0aG9kcylcblx0XHRcdFx0cGF0dGVybjogUmVnRXhwKC8oXFxiKD86Y2xhc3N8ZW51bXxleHRlbmRzfGltcGxlbWVudHN8aW5zdGFuY2VvZnxpbnRlcmZhY2V8bmV3fHJlY29yZHx0aHJvd3MpXFxzKykvLnNvdXJjZSArIGNsYXNzTmFtZVByZWZpeCArIC9bQS1aXVxcdypcXGIvLnNvdXJjZSksXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdGluc2lkZTogY2xhc3NOYW1lLmluc2lkZVxuXHRcdFx0fVxuXHRcdF0sXG5cdFx0J2tleXdvcmQnOiBrZXl3b3Jkcyxcblx0XHQnZnVuY3Rpb24nOiBbXG5cdFx0XHRQcmlzbS5sYW5ndWFnZXMuY2xpa2UuZnVuY3Rpb24sXG5cdFx0XHR7XG5cdFx0XHRcdHBhdHRlcm46IC8oOjpcXHMqKVthLXpfXVxcdyovLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0XHR9XG5cdFx0XSxcblx0XHQnbnVtYmVyJzogL1xcYjBiWzAxXVswMV9dKkw/XFxifFxcYjB4KD86XFwuW1xcZGEtZl9wKy1dK3xbXFxkYS1mX10rKD86XFwuW1xcZGEtZl9wKy1dKyk/KVxcYnwoPzpcXGJcXGRbXFxkX10qKD86XFwuW1xcZF9dKik/fFxcQlxcLlxcZFtcXGRfXSopKD86ZVsrLV0/XFxkW1xcZF9dKik/W2RmbF0/L2ksXG5cdFx0J29wZXJhdG9yJzoge1xuXHRcdFx0cGF0dGVybjogLyhefFteLl0pKD86PDw9P3w+Pj4/PT98LT58LS18XFwrXFwrfCYmfFxcfFxcfHw6OnxbPzp+XXxbLSsqLyUmfF4hPTw+XT0/KS9tLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdH0sXG5cdFx0J2NvbnN0YW50JzogL1xcYltBLVpdW0EtWl9cXGRdK1xcYi9cblx0fSk7XG5cblx0UHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnamF2YScsICdzdHJpbmcnLCB7XG5cdFx0J3RyaXBsZS1xdW90ZWQtc3RyaW5nJzoge1xuXHRcdFx0Ly8gaHR0cDovL29wZW5qZGsuamF2YS5uZXQvamVwcy8zNTUjRGVzY3JpcHRpb25cblx0XHRcdHBhdHRlcm46IC9cIlwiXCJbIFxcdF0qW1xcclxcbl0oPzooPzpcInxcIlwiKT8oPzpcXFxcLnxbXlwiXFxcXF0pKSpcIlwiXCIvLFxuXHRcdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdFx0YWxpYXM6ICdzdHJpbmcnXG5cdFx0fSxcblx0XHQnY2hhcic6IHtcblx0XHRcdHBhdHRlcm46IC8nKD86XFxcXC58W14nXFxcXFxcclxcbl0pezEsNn0nLyxcblx0XHRcdGdyZWVkeTogdHJ1ZVxuXHRcdH1cblx0fSk7XG5cblx0UHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnamF2YScsICdjbGFzcy1uYW1lJywge1xuXHRcdCdhbm5vdGF0aW9uJzoge1xuXHRcdFx0cGF0dGVybjogLyhefFteLl0pQFxcdysoPzpcXHMqXFwuXFxzKlxcdyspKi8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0YWxpYXM6ICdwdW5jdHVhdGlvbidcblx0XHR9LFxuXHRcdCdnZW5lcmljcyc6IHtcblx0XHRcdHBhdHRlcm46IC88KD86W1xcd1xccywuP118Jig/ISYpfDwoPzpbXFx3XFxzLC4/XXwmKD8hJil8PCg/OltcXHdcXHMsLj9dfCYoPyEmKXw8KD86W1xcd1xccywuP118Jig/ISYpKSo+KSo+KSo+KSo+Lyxcblx0XHRcdGluc2lkZToge1xuXHRcdFx0XHQnY2xhc3MtbmFtZSc6IGNsYXNzTmFtZSxcblx0XHRcdFx0J2tleXdvcmQnOiBrZXl3b3Jkcyxcblx0XHRcdFx0J3B1bmN0dWF0aW9uJzogL1s8PigpLC46XS8sXG5cdFx0XHRcdCdvcGVyYXRvcic6IC9bPyZ8XS9cblx0XHRcdH1cblx0XHR9LFxuXHRcdCdpbXBvcnQnOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHBhdHRlcm46IFJlZ0V4cCgvKFxcYmltcG9ydFxccyspLy5zb3VyY2UgKyBjbGFzc05hbWVQcmVmaXggKyAvKD86W0EtWl1cXHcqfFxcKikoPz1cXHMqOykvLnNvdXJjZSksXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdCduYW1lc3BhY2UnOiBjbGFzc05hbWUuaW5zaWRlLm5hbWVzcGFjZSxcblx0XHRcdFx0XHQncHVuY3R1YXRpb24nOiAvXFwuLyxcblx0XHRcdFx0XHQnb3BlcmF0b3InOiAvXFwqLyxcblx0XHRcdFx0XHQnY2xhc3MtbmFtZSc6IC9cXHcrL1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRwYXR0ZXJuOiBSZWdFeHAoLyhcXGJpbXBvcnRcXHMrc3RhdGljXFxzKykvLnNvdXJjZSArIGNsYXNzTmFtZVByZWZpeCArIC8oPzpcXHcrfFxcKikoPz1cXHMqOykvLnNvdXJjZSksXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdGFsaWFzOiAnc3RhdGljJyxcblx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0J25hbWVzcGFjZSc6IGNsYXNzTmFtZS5pbnNpZGUubmFtZXNwYWNlLFxuXHRcdFx0XHRcdCdzdGF0aWMnOiAvXFxiXFx3KyQvLFxuXHRcdFx0XHRcdCdwdW5jdHVhdGlvbic6IC9cXC4vLFxuXHRcdFx0XHRcdCdvcGVyYXRvcic6IC9cXCovLFxuXHRcdFx0XHRcdCdjbGFzcy1uYW1lJzogL1xcdysvXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRdLFxuXHRcdCduYW1lc3BhY2UnOiB7XG5cdFx0XHRwYXR0ZXJuOiBSZWdFeHAoXG5cdFx0XHRcdC8oXFxiKD86ZXhwb3J0c3xpbXBvcnQoPzpcXHMrc3RhdGljKT98bW9kdWxlfG9wZW58b3BlbnN8cGFja2FnZXxwcm92aWRlc3xyZXF1aXJlc3x0b3x0cmFuc2l0aXZlfHVzZXN8d2l0aClcXHMrKSg/ITxrZXl3b3JkPilbYS16XVxcdyooPzpcXC5bYS16XVxcdyopKlxcLj8vXG5cdFx0XHRcdFx0LnNvdXJjZS5yZXBsYWNlKC88a2V5d29yZD4vZywgZnVuY3Rpb24gKCkgeyByZXR1cm4ga2V5d29yZHMuc291cmNlOyB9KSksXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdCdwdW5jdHVhdGlvbic6IC9cXC4vLFxuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG59KFByaXNtKSk7XG5cblByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0ID0gUHJpc20ubGFuZ3VhZ2VzLmV4dGVuZCgnY2xpa2UnLCB7XG5cdCdjbGFzcy1uYW1lJzogW1xuXHRcdFByaXNtLmxhbmd1YWdlcy5jbGlrZVsnY2xhc3MtbmFtZSddLFxuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8oXnxbXiRcXHdcXHhBMC1cXHVGRkZGXSkoPyFcXHMpW18kQS1aXFx4QTAtXFx1RkZGRl0oPzooPyFcXHMpWyRcXHdcXHhBMC1cXHVGRkZGXSkqKD89XFwuKD86Y29uc3RydWN0b3J8cHJvdG90eXBlKSkvLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdH1cblx0XSxcblx0J2tleXdvcmQnOiBbXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogLygoPzpefFxcfSlcXHMqKWNhdGNoXFxiLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHR9LFxuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8oXnxbXi5dfFxcLlxcLlxcLlxccyopXFxiKD86YXN8YXNzZXJ0KD89XFxzKlxceyl8YXN5bmMoPz1cXHMqKD86ZnVuY3Rpb25cXGJ8XFwofFskXFx3XFx4QTAtXFx1RkZGRl18JCkpfGF3YWl0fGJyZWFrfGNhc2V8Y2xhc3N8Y29uc3R8Y29udGludWV8ZGVidWdnZXJ8ZGVmYXVsdHxkZWxldGV8ZG98ZWxzZXxlbnVtfGV4cG9ydHxleHRlbmRzfGZpbmFsbHkoPz1cXHMqKD86XFx7fCQpKXxmb3J8ZnJvbSg/PVxccyooPzpbJ1wiXXwkKSl8ZnVuY3Rpb258KD86Z2V0fHNldCkoPz1cXHMqKD86WyNcXFskXFx3XFx4QTAtXFx1RkZGRl18JCkpfGlmfGltcGxlbWVudHN8aW1wb3J0fGlufGluc3RhbmNlb2Z8aW50ZXJmYWNlfGxldHxuZXd8bnVsbHxvZnxwYWNrYWdlfHByaXZhdGV8cHJvdGVjdGVkfHB1YmxpY3xyZXR1cm58c3RhdGljfHN1cGVyfHN3aXRjaHx0aGlzfHRocm93fHRyeXx0eXBlb2Z8dW5kZWZpbmVkfHZhcnx2b2lkfHdoaWxlfHdpdGh8eWllbGQpXFxiLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHR9LFxuXHRdLFxuXHQvLyBBbGxvdyBmb3IgYWxsIG5vbi1BU0NJSSBjaGFyYWN0ZXJzIChTZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjAwODQ0NClcblx0J2Z1bmN0aW9uJzogLyM/KD8hXFxzKVtfJGEtekEtWlxceEEwLVxcdUZGRkZdKD86KD8hXFxzKVskXFx3XFx4QTAtXFx1RkZGRl0pKig/PVxccyooPzpcXC5cXHMqKD86YXBwbHl8YmluZHxjYWxsKVxccyopP1xcKCkvLFxuXHQnbnVtYmVyJzoge1xuXHRcdHBhdHRlcm46IFJlZ0V4cChcblx0XHRcdC8oXnxbXlxcdyRdKS8uc291cmNlICtcblx0XHRcdCcoPzonICtcblx0XHRcdChcblx0XHRcdFx0Ly8gY29uc3RhbnRcblx0XHRcdFx0L05hTnxJbmZpbml0eS8uc291cmNlICtcblx0XHRcdFx0J3wnICtcblx0XHRcdFx0Ly8gYmluYXJ5IGludGVnZXJcblx0XHRcdFx0LzBbYkJdWzAxXSsoPzpfWzAxXSspKm4/Ly5zb3VyY2UgK1xuXHRcdFx0XHQnfCcgK1xuXHRcdFx0XHQvLyBvY3RhbCBpbnRlZ2VyXG5cdFx0XHRcdC8wW29PXVswLTddKyg/Ol9bMC03XSspKm4/Ly5zb3VyY2UgK1xuXHRcdFx0XHQnfCcgK1xuXHRcdFx0XHQvLyBoZXhhZGVjaW1hbCBpbnRlZ2VyXG5cdFx0XHRcdC8wW3hYXVtcXGRBLUZhLWZdKyg/Ol9bXFxkQS1GYS1mXSspKm4/Ly5zb3VyY2UgK1xuXHRcdFx0XHQnfCcgK1xuXHRcdFx0XHQvLyBkZWNpbWFsIGJpZ2ludFxuXHRcdFx0XHQvXFxkKyg/Ol9cXGQrKSpuLy5zb3VyY2UgK1xuXHRcdFx0XHQnfCcgK1xuXHRcdFx0XHQvLyBkZWNpbWFsIG51bWJlciAoaW50ZWdlciBvciBmbG9hdCkgYnV0IG5vIGJpZ2ludFxuXHRcdFx0XHQvKD86XFxkKyg/Ol9cXGQrKSooPzpcXC4oPzpcXGQrKD86X1xcZCspKik/KT98XFwuXFxkKyg/Ol9cXGQrKSopKD86W0VlXVsrLV0/XFxkKyg/Ol9cXGQrKSopPy8uc291cmNlXG5cdFx0XHQpICtcblx0XHRcdCcpJyArXG5cdFx0XHQvKD8hW1xcdyRdKS8uc291cmNlXG5cdFx0KSxcblx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdH0sXG5cdCdvcGVyYXRvcic6IC8tLXxcXCtcXCt8XFwqXFwqPT98PT58JiY9P3xcXHxcXHw9P3xbIT1dPT18PDw9P3w+Pj4/PT98Wy0rKi8lJnxeIT08Pl09P3xcXC57M318XFw/XFw/PT98XFw/XFwuP3xbfjpdL1xufSk7XG5cblByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0WydjbGFzcy1uYW1lJ11bMF0ucGF0dGVybiA9IC8oXFxiKD86Y2xhc3N8ZXh0ZW5kc3xpbXBsZW1lbnRzfGluc3RhbmNlb2Z8aW50ZXJmYWNlfG5ldylcXHMrKVtcXHcuXFxcXF0rLztcblxuUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnamF2YXNjcmlwdCcsICdrZXl3b3JkJywge1xuXHQncmVnZXgnOiB7XG5cdFx0cGF0dGVybjogUmVnRXhwKFxuXHRcdFx0Ly8gbG9va2JlaGluZFxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlZ2V4cC9uby1kdXBlLWNoYXJhY3RlcnMtY2hhcmFjdGVyLWNsYXNzXG5cdFx0XHQvKCg/Ol58W14kXFx3XFx4QTAtXFx1RkZGRi5cIidcXF0pXFxzXXxcXGIoPzpyZXR1cm58eWllbGQpKVxccyopLy5zb3VyY2UgK1xuXHRcdFx0Ly8gUmVnZXggcGF0dGVybjpcblx0XHRcdC8vIFRoZXJlIGFyZSAyIHJlZ2V4IHBhdHRlcm5zIGhlcmUuIFRoZSBSZWdFeHAgc2V0IG5vdGF0aW9uIHByb3Bvc2FsIGFkZGVkIHN1cHBvcnQgZm9yIG5lc3RlZCBjaGFyYWN0ZXJcblx0XHRcdC8vIGNsYXNzZXMgaWYgdGhlIGB2YCBmbGFnIGlzIHByZXNlbnQuIFVuZm9ydHVuYXRlbHksIG5lc3RlZCBDQ3MgYXJlIGJvdGggY29udGV4dC1mcmVlIGFuZCBpbmNvbXBhdGlibGVcblx0XHRcdC8vIHdpdGggdGhlIG9ubHkgc3ludGF4LCBzbyB3ZSBoYXZlIHRvIGRlZmluZSAyIGRpZmZlcmVudCByZWdleCBwYXR0ZXJucy5cblx0XHRcdC9cXC8vLnNvdXJjZSArXG5cdFx0XHQnKD86JyArXG5cdFx0XHQvKD86XFxbKD86W15cXF1cXFxcXFxyXFxuXXxcXFxcLikqXFxdfFxcXFwufFteL1xcXFxcXFtcXHJcXG5dKStcXC9bZGdpbXl1c117MCw3fS8uc291cmNlICtcblx0XHRcdCd8JyArXG5cdFx0XHQvLyBgdmAgZmxhZyBzeW50YXguIFRoaXMgc3VwcG9ydHMgMyBsZXZlbHMgb2YgbmVzdGVkIGNoYXJhY3RlciBjbGFzc2VzLlxuXHRcdFx0Lyg/OlxcWyg/OlteW1xcXVxcXFxcXHJcXG5dfFxcXFwufFxcWyg/OlteW1xcXVxcXFxcXHJcXG5dfFxcXFwufFxcWyg/OlteW1xcXVxcXFxcXHJcXG5dfFxcXFwuKSpcXF0pKlxcXSkqXFxdfFxcXFwufFteL1xcXFxcXFtcXHJcXG5dKStcXC9bZGdpbXl1c117MCw3fXZbZGdpbXl1c117MCw3fS8uc291cmNlICtcblx0XHRcdCcpJyArXG5cdFx0XHQvLyBsb29rYWhlYWRcblx0XHRcdC8oPz0oPzpcXHN8XFwvXFwqKD86W14qXXxcXCooPyFcXC8pKSpcXCpcXC8pKig/OiR8W1xcclxcbiwuOzp9KVxcXV18XFwvXFwvKSkvLnNvdXJjZVxuXHRcdCksXG5cdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRncmVlZHk6IHRydWUsXG5cdFx0aW5zaWRlOiB7XG5cdFx0XHQncmVnZXgtc291cmNlJzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvXihcXC8pW1xcc1xcU10rKD89XFwvW2Etel0qJCkvLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRhbGlhczogJ2xhbmd1YWdlLXJlZ2V4Jyxcblx0XHRcdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMucmVnZXhcblx0XHRcdH0sXG5cdFx0XHQncmVnZXgtZGVsaW1pdGVyJzogL15cXC98XFwvJC8sXG5cdFx0XHQncmVnZXgtZmxhZ3MnOiAvXlthLXpdKyQvLFxuXHRcdH1cblx0fSxcblx0Ly8gVGhpcyBtdXN0IGJlIGRlY2xhcmVkIGJlZm9yZSBrZXl3b3JkIGJlY2F1c2Ugd2UgdXNlIFwiZnVuY3Rpb25cIiBpbnNpZGUgdGhlIGxvb2stZm9yd2FyZFxuXHQnZnVuY3Rpb24tdmFyaWFibGUnOiB7XG5cdFx0cGF0dGVybjogLyM/KD8hXFxzKVtfJGEtekEtWlxceEEwLVxcdUZGRkZdKD86KD8hXFxzKVskXFx3XFx4QTAtXFx1RkZGRl0pKig/PVxccypbPTpdXFxzKig/OmFzeW5jXFxzKik/KD86XFxiZnVuY3Rpb25cXGJ8KD86XFwoKD86W14oKV18XFwoW14oKV0qXFwpKSpcXCl8KD8hXFxzKVtfJGEtekEtWlxceEEwLVxcdUZGRkZdKD86KD8hXFxzKVskXFx3XFx4QTAtXFx1RkZGRl0pKilcXHMqPT4pKS8sXG5cdFx0YWxpYXM6ICdmdW5jdGlvbidcblx0fSxcblx0J3BhcmFtZXRlcic6IFtcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvKGZ1bmN0aW9uKD86XFxzKyg/IVxccylbXyRhLXpBLVpcXHhBMC1cXHVGRkZGXSg/Oig/IVxccylbJFxcd1xceEEwLVxcdUZGRkZdKSopP1xccypcXChcXHMqKSg/IVxccykoPzpbXigpXFxzXXxcXHMrKD8hW1xccyldKXxcXChbXigpXSpcXCkpKyg/PVxccypcXCkpLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRpbnNpZGU6IFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0XG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvKF58W14kXFx3XFx4QTAtXFx1RkZGRl0pKD8hXFxzKVtfJGEtelxceEEwLVxcdUZGRkZdKD86KD8hXFxzKVskXFx3XFx4QTAtXFx1RkZGRl0pKig/PVxccyo9PikvaSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRpbnNpZGU6IFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0XG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvKFxcKFxccyopKD8hXFxzKSg/OlteKClcXHNdfFxccysoPyFbXFxzKV0pfFxcKFteKCldKlxcKSkrKD89XFxzKlxcKVxccyo9PikvLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHRcblx0XHR9LFxuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8oKD86XFxifFxcc3xeKSg/ISg/OmFzfGFzeW5jfGF3YWl0fGJyZWFrfGNhc2V8Y2F0Y2h8Y2xhc3N8Y29uc3R8Y29udGludWV8ZGVidWdnZXJ8ZGVmYXVsdHxkZWxldGV8ZG98ZWxzZXxlbnVtfGV4cG9ydHxleHRlbmRzfGZpbmFsbHl8Zm9yfGZyb218ZnVuY3Rpb258Z2V0fGlmfGltcGxlbWVudHN8aW1wb3J0fGlufGluc3RhbmNlb2Z8aW50ZXJmYWNlfGxldHxuZXd8bnVsbHxvZnxwYWNrYWdlfHByaXZhdGV8cHJvdGVjdGVkfHB1YmxpY3xyZXR1cm58c2V0fHN0YXRpY3xzdXBlcnxzd2l0Y2h8dGhpc3x0aHJvd3x0cnl8dHlwZW9mfHVuZGVmaW5lZHx2YXJ8dm9pZHx3aGlsZXx3aXRofHlpZWxkKSg/IVskXFx3XFx4QTAtXFx1RkZGRl0pKSg/Oig/IVxccylbXyRhLXpBLVpcXHhBMC1cXHVGRkZGXSg/Oig/IVxccylbJFxcd1xceEEwLVxcdUZGRkZdKSpcXHMqKVxcKFxccyp8XFxdXFxzKlxcKFxccyopKD8hXFxzKSg/OlteKClcXHNdfFxccysoPyFbXFxzKV0pfFxcKFteKCldKlxcKSkrKD89XFxzKlxcKVxccypcXHspLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRpbnNpZGU6IFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0XG5cdFx0fVxuXHRdLFxuXHQnY29uc3RhbnQnOiAvXFxiW0EtWl0oPzpbQS1aX118XFxkeD8pKlxcYi9cbn0pO1xuXG5QcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdqYXZhc2NyaXB0JywgJ3N0cmluZycsIHtcblx0J2hhc2hiYW5nJzoge1xuXHRcdHBhdHRlcm46IC9eIyEuKi8sXG5cdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdGFsaWFzOiAnY29tbWVudCdcblx0fSxcblx0J3RlbXBsYXRlLXN0cmluZyc6IHtcblx0XHRwYXR0ZXJuOiAvYCg/OlxcXFxbXFxzXFxTXXxcXCRcXHsoPzpbXnt9XXxcXHsoPzpbXnt9XXxcXHtbXn1dKlxcfSkqXFx9KStcXH18KD8hXFwkXFx7KVteXFxcXGBdKSpgLyxcblx0XHRncmVlZHk6IHRydWUsXG5cdFx0aW5zaWRlOiB7XG5cdFx0XHQndGVtcGxhdGUtcHVuY3R1YXRpb24nOiB7XG5cdFx0XHRcdHBhdHRlcm46IC9eYHxgJC8sXG5cdFx0XHRcdGFsaWFzOiAnc3RyaW5nJ1xuXHRcdFx0fSxcblx0XHRcdCdpbnRlcnBvbGF0aW9uJzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvKCg/Ol58W15cXFxcXSkoPzpcXFxcezJ9KSopXFwkXFx7KD86W157fV18XFx7KD86W157fV18XFx7W159XSpcXH0pKlxcfSkrXFx9Lyxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0J2ludGVycG9sYXRpb24tcHVuY3R1YXRpb24nOiB7XG5cdFx0XHRcdFx0XHRwYXR0ZXJuOiAvXlxcJFxce3xcXH0kLyxcblx0XHRcdFx0XHRcdGFsaWFzOiAncHVuY3R1YXRpb24nXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRyZXN0OiBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0J3N0cmluZyc6IC9bXFxzXFxTXSsvXG5cdFx0fVxuXHR9LFxuXHQnc3RyaW5nLXByb3BlcnR5Jzoge1xuXHRcdHBhdHRlcm46IC8oKD86XnxbLHtdKVsgXFx0XSopKFtcIiddKSg/OlxcXFwoPzpcXHJcXG58W1xcc1xcU10pfCg/IVxcMilbXlxcXFxcXHJcXG5dKSpcXDIoPz1cXHMqOikvbSxcblx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRhbGlhczogJ3Byb3BlcnR5J1xuXHR9XG59KTtcblxuUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnamF2YXNjcmlwdCcsICdvcGVyYXRvcicsIHtcblx0J2xpdGVyYWwtcHJvcGVydHknOiB7XG5cdFx0cGF0dGVybjogLygoPzpefFsse10pWyBcXHRdKikoPyFcXHMpW18kYS16QS1aXFx4QTAtXFx1RkZGRl0oPzooPyFcXHMpWyRcXHdcXHhBMC1cXHVGRkZGXSkqKD89XFxzKjopL20sXG5cdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRhbGlhczogJ3Byb3BlcnR5J1xuXHR9LFxufSk7XG5cbmlmIChQcmlzbS5sYW5ndWFnZXMubWFya3VwKSB7XG5cdFByaXNtLmxhbmd1YWdlcy5tYXJrdXAudGFnLmFkZElubGluZWQoJ3NjcmlwdCcsICdqYXZhc2NyaXB0Jyk7XG5cblx0Ly8gYWRkIGF0dHJpYnV0ZSBzdXBwb3J0IGZvciBhbGwgRE9NIGV2ZW50cy5cblx0Ly8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvRXZlbnRzI1N0YW5kYXJkX2V2ZW50c1xuXHRQcmlzbS5sYW5ndWFnZXMubWFya3VwLnRhZy5hZGRBdHRyaWJ1dGUoXG5cdFx0L29uKD86YWJvcnR8Ymx1cnxjaGFuZ2V8Y2xpY2t8Y29tcG9zaXRpb24oPzplbmR8c3RhcnR8dXBkYXRlKXxkYmxjbGlja3xlcnJvcnxmb2N1cyg/OmlufG91dCk/fGtleSg/OmRvd258dXApfGxvYWR8bW91c2UoPzpkb3dufGVudGVyfGxlYXZlfG1vdmV8b3V0fG92ZXJ8dXApfHJlc2V0fHJlc2l6ZXxzY3JvbGx8c2VsZWN0fHNsb3RjaGFuZ2V8c3VibWl0fHVubG9hZHx3aGVlbCkvLnNvdXJjZSxcblx0XHQnamF2YXNjcmlwdCdcblx0KTtcbn1cblxuUHJpc20ubGFuZ3VhZ2VzLmpzID0gUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHQ7XG5cblByaXNtLmxhbmd1YWdlcy5tYXJrdXAgPSB7XG5cdCdjb21tZW50Jzoge1xuXHRcdHBhdHRlcm46IC88IS0tKD86KD8hPCEtLSlbXFxzXFxTXSkqPy0tPi8sXG5cdFx0Z3JlZWR5OiB0cnVlXG5cdH0sXG5cdCdwcm9sb2cnOiB7XG5cdFx0cGF0dGVybjogLzxcXD9bXFxzXFxTXSs/XFw/Pi8sXG5cdFx0Z3JlZWR5OiB0cnVlXG5cdH0sXG5cdCdkb2N0eXBlJzoge1xuXHRcdC8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi94bWwvI05ULWRvY3R5cGVkZWNsXG5cdFx0cGF0dGVybjogLzwhRE9DVFlQRSg/OltePlwiJ1tcXF1dfFwiW15cIl0qXCJ8J1teJ10qJykrKD86XFxbKD86W148XCInXFxdXXxcIlteXCJdKlwifCdbXiddKid8PCg/ISEtLSl8PCEtLSg/OlteLV18LSg/IS0+KSkqLS0+KSpcXF1cXHMqKT8+L2ksXG5cdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdGluc2lkZToge1xuXHRcdFx0J2ludGVybmFsLXN1YnNldCc6IHtcblx0XHRcdFx0cGF0dGVybjogLyheW15cXFtdKlxcWylbXFxzXFxTXSsoPz1cXF0+JCkvLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRncmVlZHk6IHRydWUsXG5cdFx0XHRcdGluc2lkZTogbnVsbCAvLyBzZWUgYmVsb3dcblx0XHRcdH0sXG5cdFx0XHQnc3RyaW5nJzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvXCJbXlwiXSpcInwnW14nXSonLyxcblx0XHRcdFx0Z3JlZWR5OiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0J3B1bmN0dWF0aW9uJzogL148IXw+JHxbW1xcXV0vLFxuXHRcdFx0J2RvY3R5cGUtdGFnJzogL15ET0NUWVBFL2ksXG5cdFx0XHQnbmFtZSc6IC9bXlxcczw+J1wiXSsvXG5cdFx0fVxuXHR9LFxuXHQnY2RhdGEnOiB7XG5cdFx0cGF0dGVybjogLzwhXFxbQ0RBVEFcXFtbXFxzXFxTXSo/XFxdXFxdPi9pLFxuXHRcdGdyZWVkeTogdHJ1ZVxuXHR9LFxuXHQndGFnJzoge1xuXHRcdHBhdHRlcm46IC88XFwvPyg/IVxcZClbXlxccz5cXC89JDwlXSsoPzpcXHMoPzpcXHMqW15cXHM+XFwvPV0rKD86XFxzKj1cXHMqKD86XCJbXlwiXSpcInwnW14nXSonfFteXFxzJ1wiPj1dKyg/PVtcXHM+XSkpfCg/PVtcXHMvPl0pKSkrKT9cXHMqXFwvPz4vLFxuXHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRpbnNpZGU6IHtcblx0XHRcdCd0YWcnOiB7XG5cdFx0XHRcdHBhdHRlcm46IC9ePFxcLz9bXlxccz5cXC9dKy8sXG5cdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdCdwdW5jdHVhdGlvbic6IC9ePFxcLz8vLFxuXHRcdFx0XHRcdCduYW1lc3BhY2UnOiAvXlteXFxzPlxcLzpdKzovXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHQnc3BlY2lhbC1hdHRyJzogW10sXG5cdFx0XHQnYXR0ci12YWx1ZSc6IHtcblx0XHRcdFx0cGF0dGVybjogLz1cXHMqKD86XCJbXlwiXSpcInwnW14nXSonfFteXFxzJ1wiPj1dKykvLFxuXHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHQncHVuY3R1YXRpb24nOiBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHBhdHRlcm46IC9ePS8sXG5cdFx0XHRcdFx0XHRcdGFsaWFzOiAnYXR0ci1lcXVhbHMnXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRwYXR0ZXJuOiAvXihcXHMqKVtcIiddfFtcIiddJC8sXG5cdFx0XHRcdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHQncHVuY3R1YXRpb24nOiAvXFwvPz4vLFxuXHRcdFx0J2F0dHItbmFtZSc6IHtcblx0XHRcdFx0cGF0dGVybjogL1teXFxzPlxcL10rLyxcblx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0J25hbWVzcGFjZSc6IC9eW15cXHM+XFwvOl0rOi9cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0fVxuXHR9LFxuXHQnZW50aXR5JzogW1xuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8mW1xcZGEtel17MSw4fTsvaSxcblx0XHRcdGFsaWFzOiAnbmFtZWQtZW50aXR5J1xuXHRcdH0sXG5cdFx0LyYjeD9bXFxkYS1mXXsxLDh9Oy9pXG5cdF1cbn07XG5cblByaXNtLmxhbmd1YWdlcy5tYXJrdXBbJ3RhZyddLmluc2lkZVsnYXR0ci12YWx1ZSddLmluc2lkZVsnZW50aXR5J10gPVxuXHRQcmlzbS5sYW5ndWFnZXMubWFya3VwWydlbnRpdHknXTtcblByaXNtLmxhbmd1YWdlcy5tYXJrdXBbJ2RvY3R5cGUnXS5pbnNpZGVbJ2ludGVybmFsLXN1YnNldCddLmluc2lkZSA9IFByaXNtLmxhbmd1YWdlcy5tYXJrdXA7XG5cbi8vIFBsdWdpbiB0byBtYWtlIGVudGl0eSB0aXRsZSBzaG93IHRoZSByZWFsIGVudGl0eSwgaWRlYSBieSBSb21hbiBLb21hcm92XG5QcmlzbS5ob29rcy5hZGQoJ3dyYXAnLCBmdW5jdGlvbiAoZW52KSB7XG5cblx0aWYgKGVudi50eXBlID09PSAnZW50aXR5Jykge1xuXHRcdGVudi5hdHRyaWJ1dGVzWyd0aXRsZSddID0gZW52LmNvbnRlbnQucmVwbGFjZSgvJmFtcDsvLCAnJicpO1xuXHR9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFByaXNtLmxhbmd1YWdlcy5tYXJrdXAudGFnLCAnYWRkSW5saW5lZCcsIHtcblx0LyoqXG5cdCAqIEFkZHMgYW4gaW5saW5lZCBsYW5ndWFnZSB0byBtYXJrdXAuXG5cdCAqXG5cdCAqIEFuIGV4YW1wbGUgb2YgYW4gaW5saW5lZCBsYW5ndWFnZSBpcyBDU1Mgd2l0aCBgPHN0eWxlPmAgdGFncy5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRhZ05hbWUgVGhlIG5hbWUgb2YgdGhlIHRhZyB0aGF0IGNvbnRhaW5zIHRoZSBpbmxpbmVkIGxhbmd1YWdlLiBUaGlzIG5hbWUgd2lsbCBiZSB0cmVhdGVkIGFzXG5cdCAqIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBsYW5nIFRoZSBsYW5ndWFnZSBrZXkuXG5cdCAqIEBleGFtcGxlXG5cdCAqIGFkZElubGluZWQoJ3N0eWxlJywgJ2NzcycpO1xuXHQgKi9cblx0dmFsdWU6IGZ1bmN0aW9uIGFkZElubGluZWQodGFnTmFtZSwgbGFuZykge1xuXHRcdHZhciBpbmNsdWRlZENkYXRhSW5zaWRlID0ge307XG5cdFx0aW5jbHVkZWRDZGF0YUluc2lkZVsnbGFuZ3VhZ2UtJyArIGxhbmddID0ge1xuXHRcdFx0cGF0dGVybjogLyhePCFcXFtDREFUQVxcWylbXFxzXFxTXSs/KD89XFxdXFxdPiQpL2ksXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXNbbGFuZ11cblx0XHR9O1xuXHRcdGluY2x1ZGVkQ2RhdGFJbnNpZGVbJ2NkYXRhJ10gPSAvXjwhXFxbQ0RBVEFcXFt8XFxdXFxdPiQvaTtcblxuXHRcdHZhciBpbnNpZGUgPSB7XG5cdFx0XHQnaW5jbHVkZWQtY2RhdGEnOiB7XG5cdFx0XHRcdHBhdHRlcm46IC88IVxcW0NEQVRBXFxbW1xcc1xcU10qP1xcXVxcXT4vaSxcblx0XHRcdFx0aW5zaWRlOiBpbmNsdWRlZENkYXRhSW5zaWRlXG5cdFx0XHR9XG5cdFx0fTtcblx0XHRpbnNpZGVbJ2xhbmd1YWdlLScgKyBsYW5nXSA9IHtcblx0XHRcdHBhdHRlcm46IC9bXFxzXFxTXSsvLFxuXHRcdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXNbbGFuZ11cblx0XHR9O1xuXG5cdFx0dmFyIGRlZiA9IHt9O1xuXHRcdGRlZlt0YWdOYW1lXSA9IHtcblx0XHRcdHBhdHRlcm46IFJlZ0V4cCgvKDxfX1tePl0qPikoPzo8IVxcW0NEQVRBXFxbKD86W15cXF1dfFxcXSg/IVxcXT4pKSpcXF1cXF0+fCg/ITwhXFxbQ0RBVEFcXFspW1xcc1xcU10pKj8oPz08XFwvX18+KS8uc291cmNlLnJlcGxhY2UoL19fL2csIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRhZ05hbWU7IH0pLCAnaScpLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRcdGluc2lkZTogaW5zaWRlXG5cdFx0fTtcblxuXHRcdFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ21hcmt1cCcsICdjZGF0YScsIGRlZik7XG5cdH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KFByaXNtLmxhbmd1YWdlcy5tYXJrdXAudGFnLCAnYWRkQXR0cmlidXRlJywge1xuXHQvKipcblx0ICogQWRkcyBhbiBwYXR0ZXJuIHRvIGhpZ2hsaWdodCBsYW5ndWFnZXMgZW1iZWRkZWQgaW4gSFRNTCBhdHRyaWJ1dGVzLlxuXHQgKlxuXHQgKiBBbiBleGFtcGxlIG9mIGFuIGlubGluZWQgbGFuZ3VhZ2UgaXMgQ1NTIHdpdGggYHN0eWxlYCBhdHRyaWJ1dGVzLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gYXR0ck5hbWUgVGhlIG5hbWUgb2YgdGhlIHRhZyB0aGF0IGNvbnRhaW5zIHRoZSBpbmxpbmVkIGxhbmd1YWdlLiBUaGlzIG5hbWUgd2lsbCBiZSB0cmVhdGVkIGFzXG5cdCAqIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBsYW5nIFRoZSBsYW5ndWFnZSBrZXkuXG5cdCAqIEBleGFtcGxlXG5cdCAqIGFkZEF0dHJpYnV0ZSgnc3R5bGUnLCAnY3NzJyk7XG5cdCAqL1xuXHR2YWx1ZTogZnVuY3Rpb24gKGF0dHJOYW1lLCBsYW5nKSB7XG5cdFx0UHJpc20ubGFuZ3VhZ2VzLm1hcmt1cC50YWcuaW5zaWRlWydzcGVjaWFsLWF0dHInXS5wdXNoKHtcblx0XHRcdHBhdHRlcm46IFJlZ0V4cChcblx0XHRcdFx0LyhefFtcIidcXHNdKS8uc291cmNlICsgJyg/OicgKyBhdHRyTmFtZSArICcpJyArIC9cXHMqPVxccyooPzpcIlteXCJdKlwifCdbXiddKid8W15cXHMnXCI+PV0rKD89W1xccz5dKSkvLnNvdXJjZSxcblx0XHRcdFx0J2knXG5cdFx0XHQpLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGluc2lkZToge1xuXHRcdFx0XHQnYXR0ci1uYW1lJzogL15bXlxccz1dKy8sXG5cdFx0XHRcdCdhdHRyLXZhbHVlJzoge1xuXHRcdFx0XHRcdHBhdHRlcm46IC89W1xcc1xcU10rLyxcblx0XHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHRcdCd2YWx1ZSc6IHtcblx0XHRcdFx0XHRcdFx0cGF0dGVybjogLyhePVxccyooW1wiJ118KD8hW1wiJ10pKSlcXFNbXFxzXFxTXSooPz1cXDIkKS8sXG5cdFx0XHRcdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdFx0XHRcdGFsaWFzOiBbbGFuZywgJ2xhbmd1YWdlLScgKyBsYW5nXSxcblx0XHRcdFx0XHRcdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXNbbGFuZ11cblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHQncHVuY3R1YXRpb24nOiBbXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRwYXR0ZXJuOiAvXj0vLFxuXHRcdFx0XHRcdFx0XHRcdGFsaWFzOiAnYXR0ci1lcXVhbHMnXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdC9cInwnL1xuXHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG59KTtcblxuUHJpc20ubGFuZ3VhZ2VzLmh0bWwgPSBQcmlzbS5sYW5ndWFnZXMubWFya3VwO1xuUHJpc20ubGFuZ3VhZ2VzLm1hdGhtbCA9IFByaXNtLmxhbmd1YWdlcy5tYXJrdXA7XG5QcmlzbS5sYW5ndWFnZXMuc3ZnID0gUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cDtcblxuUHJpc20ubGFuZ3VhZ2VzLnhtbCA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ21hcmt1cCcsIHt9KTtcblByaXNtLmxhbmd1YWdlcy5zc21sID0gUHJpc20ubGFuZ3VhZ2VzLnhtbDtcblByaXNtLmxhbmd1YWdlcy5hdG9tID0gUHJpc20ubGFuZ3VhZ2VzLnhtbDtcblByaXNtLmxhbmd1YWdlcy5yc3MgPSBQcmlzbS5sYW5ndWFnZXMueG1sO1xuXG4vKipcbiAqIE9yaWdpbmFsIGJ5IEFhcm9uIEhhcnVuOiBodHRwOi8vYWFoYWNyZWF0aXZlLmNvbS8yMDEyLzA3LzMxL3BocC1zeW50YXgtaGlnaGxpZ2h0aW5nLXByaXNtL1xuICogTW9kaWZpZWQgYnkgTWlsZXMgSm9obnNvbjogaHR0cDovL21pbGVzai5tZVxuICogUmV3cml0dGVuIGJ5IFRvbSBQYXZlbGVjXG4gKlxuICogU3VwcG9ydHMgUEhQIDUuMyAtIDguMFxuICovXG4oZnVuY3Rpb24gKFByaXNtKSB7XG5cdHZhciBjb21tZW50ID0gL1xcL1xcKltcXHNcXFNdKj9cXCpcXC98XFwvXFwvLip8Iyg/IVxcWykuKi87XG5cdHZhciBjb25zdGFudCA9IFtcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvXFxiKD86ZmFsc2V8dHJ1ZSlcXGIvaSxcblx0XHRcdGFsaWFzOiAnYm9vbGVhbidcblx0XHR9LFxuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8oOjpcXHMqKVxcYlthLXpfXVxcdypcXGIoPyFcXHMqXFwoKS9pLFxuXHRcdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8oXFxiKD86Y2FzZXxjb25zdClcXHMrKVxcYlthLXpfXVxcdyooPz1cXHMqWzs9XSkvaSxcblx0XHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0fSxcblx0XHQvXFxiKD86bnVsbClcXGIvaSxcblx0XHQvXFxiW0EtWl9dW0EtWjAtOV9dKlxcYig/IVxccypcXCgpLyxcblx0XTtcblx0dmFyIG51bWJlciA9IC9cXGIwYlswMV0rKD86X1swMV0rKSpcXGJ8XFxiMG9bMC03XSsoPzpfWzAtN10rKSpcXGJ8XFxiMHhbXFxkYS1mXSsoPzpfW1xcZGEtZl0rKSpcXGJ8KD86XFxiXFxkKyg/Ol9cXGQrKSpcXC4/KD86XFxkKyg/Ol9cXGQrKSopP3xcXEJcXC5cXGQrKSg/OmVbKy1dP1xcZCspPy9pO1xuXHR2YXIgb3BlcmF0b3IgPSAvPD89PnxcXD9cXD89P3xcXC57M318XFw/Py0+fFshPV09Pz0/fDo6fFxcKlxcKj0/fC0tfFxcK1xcK3wmJnxcXHxcXHx8PDx8Pj58Wz9+XXxbL158JSomPD4uKy1dPT8vO1xuXHR2YXIgcHVuY3R1YXRpb24gPSAvW3t9XFxbXFxdKCksOjtdLztcblxuXHRQcmlzbS5sYW5ndWFnZXMucGhwID0ge1xuXHRcdCdkZWxpbWl0ZXInOiB7XG5cdFx0XHRwYXR0ZXJuOiAvXFw/PiR8XjxcXD8oPzpwaHAoPz1cXHMpfD0pPy9pLFxuXHRcdFx0YWxpYXM6ICdpbXBvcnRhbnQnXG5cdFx0fSxcblx0XHQnY29tbWVudCc6IGNvbW1lbnQsXG5cdFx0J3ZhcmlhYmxlJzogL1xcJCsoPzpcXHcrXFxifCg/PVxceykpLyxcblx0XHQncGFja2FnZSc6IHtcblx0XHRcdHBhdHRlcm46IC8obmFtZXNwYWNlXFxzK3x1c2VcXHMrKD86ZnVuY3Rpb25cXHMrKT8pKD86XFxcXD9cXGJbYS16X11cXHcqKStcXGIoPyFcXFxcKS9pLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGluc2lkZToge1xuXHRcdFx0XHQncHVuY3R1YXRpb24nOiAvXFxcXC9cblx0XHRcdH1cblx0XHR9LFxuXHRcdCdjbGFzcy1uYW1lLWRlZmluaXRpb24nOiB7XG5cdFx0XHRwYXR0ZXJuOiAvKFxcYig/OmNsYXNzfGVudW18aW50ZXJmYWNlfHRyYWl0KVxccyspXFxiW2Etel9dXFx3Kig/IVxcXFwpXFxiL2ksXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0YWxpYXM6ICdjbGFzcy1uYW1lJ1xuXHRcdH0sXG5cdFx0J2Z1bmN0aW9uLWRlZmluaXRpb24nOiB7XG5cdFx0XHRwYXR0ZXJuOiAvKFxcYmZ1bmN0aW9uXFxzKylbYS16X11cXHcqKD89XFxzKlxcKCkvaSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRhbGlhczogJ2Z1bmN0aW9uJ1xuXHRcdH0sXG5cdFx0J2tleXdvcmQnOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHBhdHRlcm46IC8oXFwoXFxzKilcXGIoPzphcnJheXxib29sfGJvb2xlYW58ZmxvYXR8aW50fGludGVnZXJ8b2JqZWN0fHN0cmluZylcXGIoPz1cXHMqXFwpKS9pLFxuXHRcdFx0XHRhbGlhczogJ3R5cGUtY2FzdGluZycsXG5cdFx0XHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0cGF0dGVybjogLyhbKCw/XVxccyopXFxiKD86YXJyYXkoPyFcXHMqXFwoKXxib29sfGNhbGxhYmxlfCg/OmZhbHNlfG51bGwpKD89XFxzKlxcfCl8ZmxvYXR8aW50fGl0ZXJhYmxlfG1peGVkfG9iamVjdHxzZWxmfHN0YXRpY3xzdHJpbmcpXFxiKD89XFxzKlxcJCkvaSxcblx0XHRcdFx0YWxpYXM6ICd0eXBlLWhpbnQnLFxuXHRcdFx0XHRncmVlZHk6IHRydWUsXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHBhdHRlcm46IC8oXFwpXFxzKjpcXHMqKD86XFw/XFxzKik/KVxcYig/OmFycmF5KD8hXFxzKlxcKCl8Ym9vbHxjYWxsYWJsZXwoPzpmYWxzZXxudWxsKSg/PVxccypcXHwpfGZsb2F0fGludHxpdGVyYWJsZXxtaXhlZHxuZXZlcnxvYmplY3R8c2VsZnxzdGF0aWN8c3RyaW5nfHZvaWQpXFxiL2ksXG5cdFx0XHRcdGFsaWFzOiAncmV0dXJuLXR5cGUnLFxuXHRcdFx0XHRncmVlZHk6IHRydWUsXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHBhdHRlcm46IC9cXGIoPzphcnJheSg/IVxccypcXCgpfGJvb2x8ZmxvYXR8aW50fGl0ZXJhYmxlfG1peGVkfG9iamVjdHxzdHJpbmd8dm9pZClcXGIvaSxcblx0XHRcdFx0YWxpYXM6ICd0eXBlLWRlY2xhcmF0aW9uJyxcblx0XHRcdFx0Z3JlZWR5OiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRwYXR0ZXJuOiAvKFxcfFxccyopKD86ZmFsc2V8bnVsbClcXGJ8XFxiKD86ZmFsc2V8bnVsbCkoPz1cXHMqXFx8KS9pLFxuXHRcdFx0XHRhbGlhczogJ3R5cGUtZGVjbGFyYXRpb24nLFxuXHRcdFx0XHRncmVlZHk6IHRydWUsXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHBhdHRlcm46IC9cXGIoPzpwYXJlbnR8c2VsZnxzdGF0aWMpKD89XFxzKjo6KS9pLFxuXHRcdFx0XHRhbGlhczogJ3N0YXRpYy1jb250ZXh0Jyxcblx0XHRcdFx0Z3JlZWR5OiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHQvLyB5aWVsZCBmcm9tXG5cdFx0XHRcdHBhdHRlcm46IC8oXFxieWllbGRcXHMrKWZyb21cXGIvaSxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdC8vIGBjbGFzc2AgaXMgYWx3YXlzIGEga2V5d29yZCB1bmxpa2Ugb3RoZXIga2V5d29yZHNcblx0XHRcdC9cXGJjbGFzc1xcYi9pLFxuXHRcdFx0e1xuXHRcdFx0XHQvLyBodHRwczovL3d3dy5waHAubmV0L21hbnVhbC9lbi9yZXNlcnZlZC5rZXl3b3Jkcy5waHBcblx0XHRcdFx0Ly9cblx0XHRcdFx0Ly8ga2V5d29yZHMgY2Fubm90IGJlIHByZWNlZGVkIGJ5IFwiLT5cIlxuXHRcdFx0XHQvLyB0aGUgY29tcGxleCBsb29rYmVoaW5kIG1lYW5zIGAoPzwhKD86LT58OjopXFxzKilgXG5cdFx0XHRcdHBhdHRlcm46IC8oKD86XnxbXlxccz46XXwoPzpefFteLV0pPnwoPzpefFteOl0pOilcXHMqKVxcYig/OmFic3RyYWN0fGFuZHxhcnJheXxhc3xicmVha3xjYWxsYWJsZXxjYXNlfGNhdGNofGNsb25lfGNvbnN0fGNvbnRpbnVlfGRlY2xhcmV8ZGVmYXVsdHxkaWV8ZG98ZWNob3xlbHNlfGVsc2VpZnxlbXB0eXxlbmRkZWNsYXJlfGVuZGZvcnxlbmRmb3JlYWNofGVuZGlmfGVuZHN3aXRjaHxlbmR3aGlsZXxlbnVtfGV2YWx8ZXhpdHxleHRlbmRzfGZpbmFsfGZpbmFsbHl8Zm58Zm9yfGZvcmVhY2h8ZnVuY3Rpb258Z2xvYmFsfGdvdG98aWZ8aW1wbGVtZW50c3xpbmNsdWRlfGluY2x1ZGVfb25jZXxpbnN0YW5jZW9mfGluc3RlYWRvZnxpbnRlcmZhY2V8aXNzZXR8bGlzdHxtYXRjaHxuYW1lc3BhY2V8bmV2ZXJ8bmV3fG9yfHBhcmVudHxwcmludHxwcml2YXRlfHByb3RlY3RlZHxwdWJsaWN8cmVhZG9ubHl8cmVxdWlyZXxyZXF1aXJlX29uY2V8cmV0dXJufHNlbGZ8c3RhdGljfHN3aXRjaHx0aHJvd3x0cmFpdHx0cnl8dW5zZXR8dXNlfHZhcnx3aGlsZXx4b3J8eWllbGR8X19oYWx0X2NvbXBpbGVyKVxcYi9pLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0XHR9XG5cdFx0XSxcblx0XHQnYXJndW1lbnQtbmFtZSc6IHtcblx0XHRcdHBhdHRlcm46IC8oWygsXVxccyopXFxiW2Etel9dXFx3Kig/PVxccyo6KD8hOikpL2ksXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0fSxcblx0XHQnY2xhc3MtbmFtZSc6IFtcblx0XHRcdHtcblx0XHRcdFx0cGF0dGVybjogLyhcXGIoPzpleHRlbmRzfGltcGxlbWVudHN8aW5zdGFuY2VvZnxuZXcoPyFcXHMrc2VsZnxcXHMrc3RhdGljKSlcXHMrfFxcYmNhdGNoXFxzKlxcKClcXGJbYS16X11cXHcqKD8hXFxcXClcXGIvaSxcblx0XHRcdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRwYXR0ZXJuOiAvKFxcfFxccyopXFxiW2Etel9dXFx3Kig/IVxcXFwpXFxiL2ksXG5cdFx0XHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0cGF0dGVybjogL1xcYlthLXpfXVxcdyooPyFcXFxcKVxcYig/PVxccypcXHwpL2ksXG5cdFx0XHRcdGdyZWVkeTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0cGF0dGVybjogLyhcXHxcXHMqKSg/OlxcXFw/XFxiW2Etel9dXFx3KikrXFxiL2ksXG5cdFx0XHRcdGFsaWFzOiAnY2xhc3MtbmFtZS1mdWxseS1xdWFsaWZpZWQnLFxuXHRcdFx0XHRncmVlZHk6IHRydWUsXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdCdwdW5jdHVhdGlvbic6IC9cXFxcL1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRwYXR0ZXJuOiAvKD86XFxcXD9cXGJbYS16X11cXHcqKStcXGIoPz1cXHMqXFx8KS9pLFxuXHRcdFx0XHRhbGlhczogJ2NsYXNzLW5hbWUtZnVsbHktcXVhbGlmaWVkJyxcblx0XHRcdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHQncHVuY3R1YXRpb24nOiAvXFxcXC9cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0cGF0dGVybjogLyhcXGIoPzpleHRlbmRzfGltcGxlbWVudHN8aW5zdGFuY2VvZnxuZXcoPyFcXHMrc2VsZlxcYnxcXHMrc3RhdGljXFxiKSlcXHMrfFxcYmNhdGNoXFxzKlxcKCkoPzpcXFxcP1xcYlthLXpfXVxcdyopK1xcYig/IVxcXFwpL2ksXG5cdFx0XHRcdGFsaWFzOiAnY2xhc3MtbmFtZS1mdWxseS1xdWFsaWZpZWQnLFxuXHRcdFx0XHRncmVlZHk6IHRydWUsXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdCdwdW5jdHVhdGlvbic6IC9cXFxcL1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRwYXR0ZXJuOiAvXFxiW2Etel9dXFx3Kig/PVxccypcXCQpL2ksXG5cdFx0XHRcdGFsaWFzOiAndHlwZS1kZWNsYXJhdGlvbicsXG5cdFx0XHRcdGdyZWVkeTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0cGF0dGVybjogLyg/OlxcXFw/XFxiW2Etel9dXFx3KikrKD89XFxzKlxcJCkvaSxcblx0XHRcdFx0YWxpYXM6IFsnY2xhc3MtbmFtZS1mdWxseS1xdWFsaWZpZWQnLCAndHlwZS1kZWNsYXJhdGlvbiddLFxuXHRcdFx0XHRncmVlZHk6IHRydWUsXG5cdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdCdwdW5jdHVhdGlvbic6IC9cXFxcL1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRwYXR0ZXJuOiAvXFxiW2Etel9dXFx3Kig/PVxccyo6OikvaSxcblx0XHRcdFx0YWxpYXM6ICdzdGF0aWMtY29udGV4dCcsXG5cdFx0XHRcdGdyZWVkeTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0cGF0dGVybjogLyg/OlxcXFw/XFxiW2Etel9dXFx3KikrKD89XFxzKjo6KS9pLFxuXHRcdFx0XHRhbGlhczogWydjbGFzcy1uYW1lLWZ1bGx5LXF1YWxpZmllZCcsICdzdGF0aWMtY29udGV4dCddLFxuXHRcdFx0XHRncmVlZHk6IHRydWUsXG5cdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdCdwdW5jdHVhdGlvbic6IC9cXFxcL1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRwYXR0ZXJuOiAvKFsoLD9dXFxzKilbYS16X11cXHcqKD89XFxzKlxcJCkvaSxcblx0XHRcdFx0YWxpYXM6ICd0eXBlLWhpbnQnLFxuXHRcdFx0XHRncmVlZHk6IHRydWUsXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHBhdHRlcm46IC8oWygsP11cXHMqKSg/OlxcXFw/XFxiW2Etel9dXFx3KikrKD89XFxzKlxcJCkvaSxcblx0XHRcdFx0YWxpYXM6IFsnY2xhc3MtbmFtZS1mdWxseS1xdWFsaWZpZWQnLCAndHlwZS1oaW50J10sXG5cdFx0XHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0J3B1bmN0dWF0aW9uJzogL1xcXFwvXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHBhdHRlcm46IC8oXFwpXFxzKjpcXHMqKD86XFw/XFxzKik/KVxcYlthLXpfXVxcdyooPyFcXFxcKVxcYi9pLFxuXHRcdFx0XHRhbGlhczogJ3JldHVybi10eXBlJyxcblx0XHRcdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRwYXR0ZXJuOiAvKFxcKVxccyo6XFxzKig/OlxcP1xccyopPykoPzpcXFxcP1xcYlthLXpfXVxcdyopK1xcYig/IVxcXFwpL2ksXG5cdFx0XHRcdGFsaWFzOiBbJ2NsYXNzLW5hbWUtZnVsbHktcXVhbGlmaWVkJywgJ3JldHVybi10eXBlJ10sXG5cdFx0XHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0J3B1bmN0dWF0aW9uJzogL1xcXFwvXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRdLFxuXHRcdCdjb25zdGFudCc6IGNvbnN0YW50LFxuXHRcdCdmdW5jdGlvbic6IHtcblx0XHRcdHBhdHRlcm46IC8oXnxbXlxcXFxcXHddKVxcXFw/W2Etel9dKD86W1xcd1xcXFxdKlxcdyk/KD89XFxzKlxcKCkvaSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0J3B1bmN0dWF0aW9uJzogL1xcXFwvXG5cdFx0XHR9XG5cdFx0fSxcblx0XHQncHJvcGVydHknOiB7XG5cdFx0XHRwYXR0ZXJuOiAvKC0+XFxzKilcXHcrLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHR9LFxuXHRcdCdudW1iZXInOiBudW1iZXIsXG5cdFx0J29wZXJhdG9yJzogb3BlcmF0b3IsXG5cdFx0J3B1bmN0dWF0aW9uJzogcHVuY3R1YXRpb25cblx0fTtcblxuXHR2YXIgc3RyaW5nX2ludGVycG9sYXRpb24gPSB7XG5cdFx0cGF0dGVybjogL1xce1xcJCg/Olxceyg/Olxce1tee31dK1xcfXxbXnt9XSspXFx9fFtee31dKStcXH18KF58W15cXFxce10pXFwkKyg/OlxcdysoPzpcXFtbXlxcclxcblxcW1xcXV0rXFxdfC0+XFx3Kyk/KS8sXG5cdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRpbnNpZGU6IFByaXNtLmxhbmd1YWdlcy5waHBcblx0fTtcblxuXHR2YXIgc3RyaW5nID0gW1xuXHRcdHtcblx0XHRcdHBhdHRlcm46IC88PDwnKFteJ10rKSdbXFxyXFxuXSg/Oi4qW1xcclxcbl0pKj9cXDE7Lyxcblx0XHRcdGFsaWFzOiAnbm93ZG9jLXN0cmluZycsXG5cdFx0XHRncmVlZHk6IHRydWUsXG5cdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0J2RlbGltaXRlcic6IHtcblx0XHRcdFx0XHRwYXR0ZXJuOiAvXjw8PCdbXiddKyd8W2Etel9dXFx3KjskL2ksXG5cdFx0XHRcdFx0YWxpYXM6ICdzeW1ib2wnLFxuXHRcdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdFx0J3B1bmN0dWF0aW9uJzogL148PDwnP3xbJztdJC9cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHBhdHRlcm46IC88PDwoPzpcIihbXlwiXSspXCJbXFxyXFxuXSg/Oi4qW1xcclxcbl0pKj9cXDE7fChbYS16X11cXHcqKVtcXHJcXG5dKD86LipbXFxyXFxuXSkqP1xcMjspL2ksXG5cdFx0XHRhbGlhczogJ2hlcmVkb2Mtc3RyaW5nJyxcblx0XHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRcdGluc2lkZToge1xuXHRcdFx0XHQnZGVsaW1pdGVyJzoge1xuXHRcdFx0XHRcdHBhdHRlcm46IC9ePDw8KD86XCJbXlwiXStcInxbYS16X11cXHcqKXxbYS16X11cXHcqOyQvaSxcblx0XHRcdFx0XHRhbGlhczogJ3N5bWJvbCcsXG5cdFx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0XHQncHVuY3R1YXRpb24nOiAvXjw8PFwiP3xbXCI7XSQvXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHQnaW50ZXJwb2xhdGlvbic6IHN0cmluZ19pbnRlcnBvbGF0aW9uXG5cdFx0XHR9XG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvYCg/OlxcXFxbXFxzXFxTXXxbXlxcXFxgXSkqYC8sXG5cdFx0XHRhbGlhczogJ2JhY2t0aWNrLXF1b3RlZC1zdHJpbmcnLFxuXHRcdFx0Z3JlZWR5OiB0cnVlXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvJyg/OlxcXFxbXFxzXFxTXXxbXlxcXFwnXSkqJy8sXG5cdFx0XHRhbGlhczogJ3NpbmdsZS1xdW90ZWQtc3RyaW5nJyxcblx0XHRcdGdyZWVkeTogdHJ1ZVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogL1wiKD86XFxcXFtcXHNcXFNdfFteXFxcXFwiXSkqXCIvLFxuXHRcdFx0YWxpYXM6ICdkb3VibGUtcXVvdGVkLXN0cmluZycsXG5cdFx0XHRncmVlZHk6IHRydWUsXG5cdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0J2ludGVycG9sYXRpb24nOiBzdHJpbmdfaW50ZXJwb2xhdGlvblxuXHRcdFx0fVxuXHRcdH1cblx0XTtcblxuXHRQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdwaHAnLCAndmFyaWFibGUnLCB7XG5cdFx0J3N0cmluZyc6IHN0cmluZyxcblx0XHQnYXR0cmlidXRlJzoge1xuXHRcdFx0cGF0dGVybjogLyNcXFsoPzpbXlwiJ1xcLyNdfFxcLyg/IVsqL10pfFxcL1xcLy4qJHwjKD8hXFxbKS4qJHxcXC9cXCooPzpbXipdfFxcKig/IVxcLykpKlxcKlxcL3xcIig/OlxcXFxbXFxzXFxTXXxbXlxcXFxcIl0pKlwifCcoPzpcXFxcW1xcc1xcU118W15cXFxcJ10pKicpK1xcXSg/PVxccypbYS16JCNdKS9pbSxcblx0XHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRcdGluc2lkZToge1xuXHRcdFx0XHQnYXR0cmlidXRlLWNvbnRlbnQnOiB7XG5cdFx0XHRcdFx0cGF0dGVybjogL14oI1xcWylbXFxzXFxTXSsoPz1cXF0kKS8sXG5cdFx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0XHQvLyBpbnNpZGUgY2FuIGFwcGVhciBzdWJzZXQgb2YgcGhwXG5cdFx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0XHQnY29tbWVudCc6IGNvbW1lbnQsXG5cdFx0XHRcdFx0XHQnc3RyaW5nJzogc3RyaW5nLFxuXHRcdFx0XHRcdFx0J2F0dHJpYnV0ZS1jbGFzcy1uYW1lJzogW1xuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0cGF0dGVybjogLyhbXjpdfF4pXFxiW2Etel9dXFx3Kig/IVxcXFwpXFxiL2ksXG5cdFx0XHRcdFx0XHRcdFx0YWxpYXM6ICdjbGFzcy1uYW1lJyxcblx0XHRcdFx0XHRcdFx0XHRncmVlZHk6IHRydWUsXG5cdFx0XHRcdFx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0cGF0dGVybjogLyhbXjpdfF4pKD86XFxcXD9cXGJbYS16X11cXHcqKSsvaSxcblx0XHRcdFx0XHRcdFx0XHRhbGlhczogW1xuXHRcdFx0XHRcdFx0XHRcdFx0J2NsYXNzLW5hbWUnLFxuXHRcdFx0XHRcdFx0XHRcdFx0J2NsYXNzLW5hbWUtZnVsbHktcXVhbGlmaWVkJ1xuXHRcdFx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XHRcdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdFx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHQncHVuY3R1YXRpb24nOiAvXFxcXC9cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XHQnY29uc3RhbnQnOiBjb25zdGFudCxcblx0XHRcdFx0XHRcdCdudW1iZXInOiBudW1iZXIsXG5cdFx0XHRcdFx0XHQnb3BlcmF0b3InOiBvcGVyYXRvcixcblx0XHRcdFx0XHRcdCdwdW5jdHVhdGlvbic6IHB1bmN0dWF0aW9uXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHQnZGVsaW1pdGVyJzoge1xuXHRcdFx0XHRcdHBhdHRlcm46IC9eI1xcW3xcXF0kLyxcblx0XHRcdFx0XHRhbGlhczogJ3B1bmN0dWF0aW9uJ1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0fSk7XG5cblx0UHJpc20uaG9va3MuYWRkKCdiZWZvcmUtdG9rZW5pemUnLCBmdW5jdGlvbiAoZW52KSB7XG5cdFx0aWYgKCEvPFxcPy8udGVzdChlbnYuY29kZSkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgcGhwUGF0dGVybiA9IC88XFw/KD86W15cIicvI118XFwvKD8hWyovXSl8KFwifCcpKD86XFxcXFtcXHNcXFNdfCg/IVxcMSlbXlxcXFxdKSpcXDF8KD86XFwvXFwvfCMoPyFcXFspKSg/OlteP1xcblxccl18XFw/KD8hPikpKig/PSR8XFw/PnxbXFxyXFxuXSl8I1xcW3xcXC9cXCooPzpbXipdfFxcKig/IVxcLykpKig/OlxcKlxcL3wkKSkqPyg/OlxcPz58JCkvZztcblx0XHRQcmlzbS5sYW5ndWFnZXNbJ21hcmt1cC10ZW1wbGF0aW5nJ10uYnVpbGRQbGFjZWhvbGRlcnMoZW52LCAncGhwJywgcGhwUGF0dGVybik7XG5cdH0pO1xuXG5cdFByaXNtLmhvb2tzLmFkZCgnYWZ0ZXItdG9rZW5pemUnLCBmdW5jdGlvbiAoZW52KSB7XG5cdFx0UHJpc20ubGFuZ3VhZ2VzWydtYXJrdXAtdGVtcGxhdGluZyddLnRva2VuaXplUGxhY2Vob2xkZXJzKGVudiwgJ3BocCcpO1xuXHR9KTtcblxufShQcmlzbSkpO1xuXG5QcmlzbS5sYW5ndWFnZXMucHl0aG9uID0ge1xuXHQnY29tbWVudCc6IHtcblx0XHRwYXR0ZXJuOiAvKF58W15cXFxcXSkjLiovLFxuXHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0Z3JlZWR5OiB0cnVlXG5cdH0sXG5cdCdzdHJpbmctaW50ZXJwb2xhdGlvbic6IHtcblx0XHRwYXR0ZXJuOiAvKD86ZnxmcnxyZikoPzooXCJcIlwifCcnJylbXFxzXFxTXSo/XFwxfChcInwnKSg/OlxcXFwufCg/IVxcMilbXlxcXFxcXHJcXG5dKSpcXDIpL2ksXG5cdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdGluc2lkZToge1xuXHRcdFx0J2ludGVycG9sYXRpb24nOiB7XG5cdFx0XHRcdC8vIFwie1wiIDxleHByZXNzaW9uPiA8b3B0aW9uYWwgXCIhc1wiLCBcIiFyXCIsIG9yIFwiIWFcIj4gPG9wdGlvbmFsIFwiOlwiIGZvcm1hdCBzcGVjaWZpZXI+IFwifVwiXG5cdFx0XHRcdHBhdHRlcm46IC8oKD86XnxbXntdKSg/Olxce1xceykqKVxceyg/IVxceykoPzpbXnt9XXxcXHsoPyFcXHspKD86W157fV18XFx7KD8hXFx7KSg/Oltee31dKStcXH0pK1xcfSkrXFx9Lyxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0J2Zvcm1hdC1zcGVjJzoge1xuXHRcdFx0XHRcdFx0cGF0dGVybjogLyg6KVteOigpe31dKyg/PVxcfSQpLyxcblx0XHRcdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdCdjb252ZXJzaW9uLW9wdGlvbic6IHtcblx0XHRcdFx0XHRcdHBhdHRlcm46IC8hW3NyYV0oPz1bOn1dJCkvLFxuXHRcdFx0XHRcdFx0YWxpYXM6ICdwdW5jdHVhdGlvbidcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHJlc3Q6IG51bGxcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdCdzdHJpbmcnOiAvW1xcc1xcU10rL1xuXHRcdH1cblx0fSxcblx0J3RyaXBsZS1xdW90ZWQtc3RyaW5nJzoge1xuXHRcdHBhdHRlcm46IC8oPzpbcnViXXxicnxyYik/KFwiXCJcInwnJycpW1xcc1xcU10qP1xcMS9pLFxuXHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRhbGlhczogJ3N0cmluZydcblx0fSxcblx0J3N0cmluZyc6IHtcblx0XHRwYXR0ZXJuOiAvKD86W3J1Yl18YnJ8cmIpPyhcInwnKSg/OlxcXFwufCg/IVxcMSlbXlxcXFxcXHJcXG5dKSpcXDEvaSxcblx0XHRncmVlZHk6IHRydWVcblx0fSxcblx0J2Z1bmN0aW9uJzoge1xuXHRcdHBhdHRlcm46IC8oKD86XnxcXHMpZGVmWyBcXHRdKylbYS16QS1aX11cXHcqKD89XFxzKlxcKCkvZyxcblx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdH0sXG5cdCdjbGFzcy1uYW1lJzoge1xuXHRcdHBhdHRlcm46IC8oXFxiY2xhc3NcXHMrKVxcdysvaSxcblx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdH0sXG5cdCdkZWNvcmF0b3InOiB7XG5cdFx0cGF0dGVybjogLyheW1xcdCBdKilAXFx3Kyg/OlxcLlxcdyspKi9tLFxuXHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0YWxpYXM6IFsnYW5ub3RhdGlvbicsICdwdW5jdHVhdGlvbiddLFxuXHRcdGluc2lkZToge1xuXHRcdFx0J3B1bmN0dWF0aW9uJzogL1xcLi9cblx0XHR9XG5cdH0sXG5cdCdrZXl3b3JkJzogL1xcYig/Ol8oPz1cXHMqOil8YW5kfGFzfGFzc2VydHxhc3luY3xhd2FpdHxicmVha3xjYXNlfGNsYXNzfGNvbnRpbnVlfGRlZnxkZWx8ZWxpZnxlbHNlfGV4Y2VwdHxleGVjfGZpbmFsbHl8Zm9yfGZyb218Z2xvYmFsfGlmfGltcG9ydHxpbnxpc3xsYW1iZGF8bWF0Y2h8bm9ubG9jYWx8bm90fG9yfHBhc3N8cHJpbnR8cmFpc2V8cmV0dXJufHRyeXx3aGlsZXx3aXRofHlpZWxkKVxcYi8sXG5cdCdidWlsdGluJzogL1xcYig/Ol9faW1wb3J0X198YWJzfGFsbHxhbnl8YXBwbHl8YXNjaWl8YmFzZXN0cmluZ3xiaW58Ym9vbHxidWZmZXJ8Ynl0ZWFycmF5fGJ5dGVzfGNhbGxhYmxlfGNocnxjbGFzc21ldGhvZHxjbXB8Y29lcmNlfGNvbXBpbGV8Y29tcGxleHxkZWxhdHRyfGRpY3R8ZGlyfGRpdm1vZHxlbnVtZXJhdGV8ZXZhbHxleGVjZmlsZXxmaWxlfGZpbHRlcnxmbG9hdHxmb3JtYXR8ZnJvemVuc2V0fGdldGF0dHJ8Z2xvYmFsc3xoYXNhdHRyfGhhc2h8aGVscHxoZXh8aWR8aW5wdXR8aW50fGludGVybnxpc2luc3RhbmNlfGlzc3ViY2xhc3N8aXRlcnxsZW58bGlzdHxsb2NhbHN8bG9uZ3xtYXB8bWF4fG1lbW9yeXZpZXd8bWlufG5leHR8b2JqZWN0fG9jdHxvcGVufG9yZHxwb3d8cHJvcGVydHl8cmFuZ2V8cmF3X2lucHV0fHJlZHVjZXxyZWxvYWR8cmVwcnxyZXZlcnNlZHxyb3VuZHxzZXR8c2V0YXR0cnxzbGljZXxzb3J0ZWR8c3RhdGljbWV0aG9kfHN0cnxzdW18c3VwZXJ8dHVwbGV8dHlwZXx1bmljaHJ8dW5pY29kZXx2YXJzfHhyYW5nZXx6aXApXFxiLyxcblx0J2Jvb2xlYW4nOiAvXFxiKD86RmFsc2V8Tm9uZXxUcnVlKVxcYi8sXG5cdCdudW1iZXInOiAvXFxiMCg/OmIoPzpfP1swMV0pK3xvKD86Xz9bMC03XSkrfHgoPzpfP1thLWYwLTldKSspXFxifCg/OlxcYlxcZCsoPzpfXFxkKykqKD86XFwuKD86XFxkKyg/Ol9cXGQrKSopPyk/fFxcQlxcLlxcZCsoPzpfXFxkKykqKSg/OmVbKy1dP1xcZCsoPzpfXFxkKykqKT9qPyg/IVxcdykvaSxcblx0J29wZXJhdG9yJzogL1stKyU9XT0/fCE9fDo9fFxcKlxcKj89P3xcXC9cXC8/PT98PFs8PT5dP3w+Wz0+XT98WyZ8Xn5dLyxcblx0J3B1bmN0dWF0aW9uJzogL1t7fVtcXF07KCksLjpdL1xufTtcblxuUHJpc20ubGFuZ3VhZ2VzLnB5dGhvblsnc3RyaW5nLWludGVycG9sYXRpb24nXS5pbnNpZGVbJ2ludGVycG9sYXRpb24nXS5pbnNpZGUucmVzdCA9IFByaXNtLmxhbmd1YWdlcy5weXRob247XG5cblByaXNtLmxhbmd1YWdlcy5weSA9IFByaXNtLmxhbmd1YWdlcy5weXRob247XG5cbi8qKlxuICogT3JpZ2luYWwgYnkgU2FtdWVsIEZsb3Jlc1xuICpcbiAqIEFkZHMgdGhlIGZvbGxvd2luZyBuZXcgdG9rZW4gY2xhc3NlczpcbiAqICAgICBjb25zdGFudCwgYnVpbHRpbiwgdmFyaWFibGUsIHN5bWJvbCwgcmVnZXhcbiAqL1xuKGZ1bmN0aW9uIChQcmlzbSkge1xuXHRQcmlzbS5sYW5ndWFnZXMucnVieSA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ2NsaWtlJywge1xuXHRcdCdjb21tZW50Jzoge1xuXHRcdFx0cGF0dGVybjogLyMuKnxePWJlZ2luXFxzW1xcc1xcU10qP149ZW5kL20sXG5cdFx0XHRncmVlZHk6IHRydWVcblx0XHR9LFxuXHRcdCdjbGFzcy1uYW1lJzoge1xuXHRcdFx0cGF0dGVybjogLyhcXGIoPzpjbGFzc3xtb2R1bGUpXFxzK3xcXGJjYXRjaFxccytcXCgpW1xcdy5cXFxcXSt8XFxiW0EtWl9dXFx3Kig/PVxccypcXC5cXHMqbmV3XFxiKS8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdCdwdW5jdHVhdGlvbic6IC9bLlxcXFxdL1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0J2tleXdvcmQnOiAvXFxiKD86QkVHSU58RU5EfGFsaWFzfGFuZHxiZWdpbnxicmVha3xjYXNlfGNsYXNzfGRlZnxkZWZpbmVfbWV0aG9kfGRlZmluZWR8ZG98ZWFjaHxlbHNlfGVsc2lmfGVuZHxlbnN1cmV8ZXh0ZW5kfGZvcnxpZnxpbnxpbmNsdWRlfG1vZHVsZXxuZXd8bmV4dHxuaWx8bm90fG9yfHByZXBlbmR8cHJpdmF0ZXxwcm90ZWN0ZWR8cHVibGljfHJhaXNlfHJlZG98cmVxdWlyZXxyZXNjdWV8cmV0cnl8cmV0dXJufHNlbGZ8c3VwZXJ8dGhlbnx0aHJvd3x1bmRlZnx1bmxlc3N8dW50aWx8d2hlbnx3aGlsZXx5aWVsZClcXGIvLFxuXHRcdCdvcGVyYXRvcic6IC9cXC57MiwzfXwmXFwufD09PXw8Pz0+fFshPV0/fnwoPzomJnxcXHxcXHx8PDx8Pj58XFwqXFwqfFsrXFwtKi8lPD4hXiZ8PV0pPT98Wz86XS8sXG5cdFx0J3B1bmN0dWF0aW9uJzogL1soKXt9W1xcXS4sO10vLFxuXHR9KTtcblxuXHRQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdydWJ5JywgJ29wZXJhdG9yJywge1xuXHRcdCdkb3VibGUtY29sb24nOiB7XG5cdFx0XHRwYXR0ZXJuOiAvOjovLFxuXHRcdFx0YWxpYXM6ICdwdW5jdHVhdGlvbidcblx0XHR9LFxuXHR9KTtcblxuXHR2YXIgaW50ZXJwb2xhdGlvbiA9IHtcblx0XHRwYXR0ZXJuOiAvKCg/Ol58W15cXFxcXSkoPzpcXFxcezJ9KSopI1xceyg/Oltee31dfFxce1tee31dKlxcfSkqXFx9Lyxcblx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdGluc2lkZToge1xuXHRcdFx0J2NvbnRlbnQnOiB7XG5cdFx0XHRcdHBhdHRlcm46IC9eKCNcXHspW1xcc1xcU10rKD89XFx9JCkvLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRpbnNpZGU6IFByaXNtLmxhbmd1YWdlcy5ydWJ5XG5cdFx0XHR9LFxuXHRcdFx0J2RlbGltaXRlcic6IHtcblx0XHRcdFx0cGF0dGVybjogL14jXFx7fFxcfSQvLFxuXHRcdFx0XHRhbGlhczogJ3B1bmN0dWF0aW9uJ1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHRkZWxldGUgUHJpc20ubGFuZ3VhZ2VzLnJ1YnkuZnVuY3Rpb247XG5cblx0dmFyIHBlcmNlbnRFeHByZXNzaW9uID0gJyg/OicgKyBbXG5cdFx0LyhbXmEtekEtWjAtOVxcc3soXFxbPD1dKSg/Oig/IVxcMSlbXlxcXFxdfFxcXFxbXFxzXFxTXSkqXFwxLy5zb3VyY2UsXG5cdFx0L1xcKCg/OlteKClcXFxcXXxcXFxcW1xcc1xcU118XFwoKD86W14oKVxcXFxdfFxcXFxbXFxzXFxTXSkqXFwpKSpcXCkvLnNvdXJjZSxcblx0XHQvXFx7KD86W157fVxcXFxdfFxcXFxbXFxzXFxTXXxcXHsoPzpbXnt9XFxcXF18XFxcXFtcXHNcXFNdKSpcXH0pKlxcfS8uc291cmNlLFxuXHRcdC9cXFsoPzpbXlxcW1xcXVxcXFxdfFxcXFxbXFxzXFxTXXxcXFsoPzpbXlxcW1xcXVxcXFxdfFxcXFxbXFxzXFxTXSkqXFxdKSpcXF0vLnNvdXJjZSxcblx0XHQvPCg/OltePD5cXFxcXXxcXFxcW1xcc1xcU118PCg/OltePD5cXFxcXXxcXFxcW1xcc1xcU10pKj4pKj4vLnNvdXJjZVxuXHRdLmpvaW4oJ3wnKSArICcpJztcblxuXHR2YXIgc3ltYm9sTmFtZSA9IC8oPzpcIig/OlxcXFwufFteXCJcXFxcXFxyXFxuXSkqXCJ8KD86XFxiW2EtekEtWl9dXFx3KnxbXlxcc1xcMC1cXHg3Rl0rKVs/IV0/fFxcJC4pLy5zb3VyY2U7XG5cblx0UHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgncnVieScsICdrZXl3b3JkJywge1xuXHRcdCdyZWdleC1saXRlcmFsJzogW1xuXHRcdFx0e1xuXHRcdFx0XHRwYXR0ZXJuOiBSZWdFeHAoLyVyLy5zb3VyY2UgKyBwZXJjZW50RXhwcmVzc2lvbiArIC9bZWdpbW5vc3V4XXswLDZ9Ly5zb3VyY2UpLFxuXHRcdFx0XHRncmVlZHk6IHRydWUsXG5cdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdCdpbnRlcnBvbGF0aW9uJzogaW50ZXJwb2xhdGlvbixcblx0XHRcdFx0XHQncmVnZXgnOiAvW1xcc1xcU10rL1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRwYXR0ZXJuOiAvKF58W14vXSlcXC8oPyFcXC8pKD86XFxbW15cXHJcXG5cXF1dK1xcXXxcXFxcLnxbXlsvXFxcXFxcclxcbl0pK1xcL1tlZ2ltbm9zdXhdezAsNn0oPz1cXHMqKD86JHxbXFxyXFxuLC47fSkjXSkpLyxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHQnaW50ZXJwb2xhdGlvbic6IGludGVycG9sYXRpb24sXG5cdFx0XHRcdFx0J3JlZ2V4JzogL1tcXHNcXFNdKy9cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdF0sXG5cdFx0J3ZhcmlhYmxlJzogL1tAJF0rW2EtekEtWl9dXFx3Kig/Ols/IV18XFxiKS8sXG5cdFx0J3N5bWJvbCc6IFtcblx0XHRcdHtcblx0XHRcdFx0cGF0dGVybjogUmVnRXhwKC8oXnxbXjpdKTovLnNvdXJjZSArIHN5bWJvbE5hbWUpLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRncmVlZHk6IHRydWVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHBhdHRlcm46IFJlZ0V4cCgvKFtcXHJcXG57KCxdWyBcXHRdKikvLnNvdXJjZSArIHN5bWJvbE5hbWUgKyAvKD89Oig/ITopKS8uc291cmNlKSxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0Z3JlZWR5OiB0cnVlXG5cdFx0XHR9LFxuXHRcdF0sXG5cdFx0J21ldGhvZC1kZWZpbml0aW9uJzoge1xuXHRcdFx0cGF0dGVybjogLyhcXGJkZWZcXHMrKVxcdysoPzpcXHMqXFwuXFxzKlxcdyspPy8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdCdmdW5jdGlvbic6IC9cXGJcXHcrJC8sXG5cdFx0XHRcdCdrZXl3b3JkJzogL15zZWxmXFxiLyxcblx0XHRcdFx0J2NsYXNzLW5hbWUnOiAvXlxcdysvLFxuXHRcdFx0XHQncHVuY3R1YXRpb24nOiAvXFwuL1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG5cblx0UHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgncnVieScsICdzdHJpbmcnLCB7XG5cdFx0J3N0cmluZy1saXRlcmFsJzogW1xuXHRcdFx0e1xuXHRcdFx0XHRwYXR0ZXJuOiBSZWdFeHAoLyVbcVFpSXdXc10/Ly5zb3VyY2UgKyBwZXJjZW50RXhwcmVzc2lvbiksXG5cdFx0XHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0J2ludGVycG9sYXRpb24nOiBpbnRlcnBvbGF0aW9uLFxuXHRcdFx0XHRcdCdzdHJpbmcnOiAvW1xcc1xcU10rL1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRwYXR0ZXJuOiAvKFwifCcpKD86I1xce1tefV0rXFx9fCMoPyFcXHspfFxcXFwoPzpcXHJcXG58W1xcc1xcU10pfCg/IVxcMSlbXlxcXFwjXFxyXFxuXSkqXFwxLyxcblx0XHRcdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHQnaW50ZXJwb2xhdGlvbic6IGludGVycG9sYXRpb24sXG5cdFx0XHRcdFx0J3N0cmluZyc6IC9bXFxzXFxTXSsvXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHBhdHRlcm46IC88PFstfl0/KFthLXpfXVxcdyopW1xcclxcbl0oPzouKltcXHJcXG5dKSo/W1xcdCBdKlxcMS9pLFxuXHRcdFx0XHRhbGlhczogJ2hlcmVkb2Mtc3RyaW5nJyxcblx0XHRcdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHQnZGVsaW1pdGVyJzoge1xuXHRcdFx0XHRcdFx0cGF0dGVybjogL148PFstfl0/W2Etel9dXFx3KnxcXGJbYS16X11cXHcqJC9pLFxuXHRcdFx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0XHRcdCdzeW1ib2wnOiAvXFxiXFx3Ky8sXG5cdFx0XHRcdFx0XHRcdCdwdW5jdHVhdGlvbic6IC9ePDxbLX5dPy9cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdCdpbnRlcnBvbGF0aW9uJzogaW50ZXJwb2xhdGlvbixcblx0XHRcdFx0XHQnc3RyaW5nJzogL1tcXHNcXFNdKy9cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0cGF0dGVybjogLzw8Wy1+XT8nKFthLXpfXVxcdyopJ1tcXHJcXG5dKD86LipbXFxyXFxuXSkqP1tcXHQgXSpcXDEvaSxcblx0XHRcdFx0YWxpYXM6ICdoZXJlZG9jLXN0cmluZycsXG5cdFx0XHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0J2RlbGltaXRlcic6IHtcblx0XHRcdFx0XHRcdHBhdHRlcm46IC9ePDxbLX5dPydbYS16X11cXHcqJ3xcXGJbYS16X11cXHcqJC9pLFxuXHRcdFx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0XHRcdCdzeW1ib2wnOiAvXFxiXFx3Ky8sXG5cdFx0XHRcdFx0XHRcdCdwdW5jdHVhdGlvbic6IC9ePDxbLX5dPyd8JyQvLFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0J3N0cmluZyc6IC9bXFxzXFxTXSsvXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRdLFxuXHRcdCdjb21tYW5kLWxpdGVyYWwnOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHBhdHRlcm46IFJlZ0V4cCgvJXgvLnNvdXJjZSArIHBlcmNlbnRFeHByZXNzaW9uKSxcblx0XHRcdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHQnaW50ZXJwb2xhdGlvbic6IGludGVycG9sYXRpb24sXG5cdFx0XHRcdFx0J2NvbW1hbmQnOiB7XG5cdFx0XHRcdFx0XHRwYXR0ZXJuOiAvW1xcc1xcU10rLyxcblx0XHRcdFx0XHRcdGFsaWFzOiAnc3RyaW5nJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0cGF0dGVybjogL2AoPzojXFx7W159XStcXH18Iyg/IVxceyl8XFxcXCg/OlxcclxcbnxbXFxzXFxTXSl8W15cXFxcYCNcXHJcXG5dKSpgLyxcblx0XHRcdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHQnaW50ZXJwb2xhdGlvbic6IGludGVycG9sYXRpb24sXG5cdFx0XHRcdFx0J2NvbW1hbmQnOiB7XG5cdFx0XHRcdFx0XHRwYXR0ZXJuOiAvW1xcc1xcU10rLyxcblx0XHRcdFx0XHRcdGFsaWFzOiAnc3RyaW5nJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdF1cblx0fSk7XG5cblx0ZGVsZXRlIFByaXNtLmxhbmd1YWdlcy5ydWJ5LnN0cmluZztcblxuXHRQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdydWJ5JywgJ251bWJlcicsIHtcblx0XHQnYnVpbHRpbic6IC9cXGIoPzpBcnJheXxCaWdudW18QmluZGluZ3xDbGFzc3xDb250aW51YXRpb258RGlyfEV4Y2VwdGlvbnxGYWxzZUNsYXNzfEZpbGV8Rml4bnVtfEZsb2F0fEhhc2h8SU98SW50ZWdlcnxNYXRjaERhdGF8TWV0aG9kfE1vZHVsZXxOaWxDbGFzc3xOdW1lcmljfE9iamVjdHxQcm9jfFJhbmdlfFJlZ2V4cHxTdGF0fFN0cmluZ3xTdHJ1Y3R8U3ltYm9sfFRNU3xUaHJlYWR8VGhyZWFkR3JvdXB8VGltZXxUcnVlQ2xhc3MpXFxiLyxcblx0XHQnY29uc3RhbnQnOiAvXFxiW0EtWl1bQS1aMC05X10qKD86Wz8hXXxcXGIpL1xuXHR9KTtcblxuXHRQcmlzbS5sYW5ndWFnZXMucmIgPSBQcmlzbS5sYW5ndWFnZXMucnVieTtcbn0oUHJpc20pKTtcblxuLy8gcmVzdG9yZSB0aGUgb3JpZ2luYWwgUHJpc20gcmVmZXJlbmNlXG53aW5kb3cuUHJpc20gPSBvbGRwcmlzbTtcbnJldHVybiBQcmlzbTtcbn0odW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCk7XG5leHBvcnQgZGVmYXVsdCBwcmlzbWpzOyIsImltcG9ydCB7IEVxIH0gZnJvbSAnQGVwaG94L2Rpc3B1dGUnO1xuXG5pbXBvcnQgKiBhcyBGdW4gZnJvbSAnLi9GdW4nO1xuaW1wb3J0IHsgT3B0aW9uYWwgfSBmcm9tICcuL09wdGlvbmFsJztcbmltcG9ydCAqIGFzIFR5cGUgZnJvbSAnLi9UeXBlJztcblxudHlwZSBBcnJheU1vcnBoaXNtPFQsIFU+ID0gKHg6IFQsIGk6IG51bWJlcikgPT4gVTtcbnR5cGUgQXJyYXlHdWFyZFByZWRpY2F0ZTxULCBVIGV4dGVuZHMgVD4gPSAoeDogVCwgaTogbnVtYmVyKSA9PiB4IGlzIFU7XG50eXBlIEFycmF5UHJlZGljYXRlPFQ+ID0gQXJyYXlNb3JwaGlzbTxULCBib29sZWFuPjtcbnR5cGUgQ29tcGFyYXRvcjxUPiA9IChhOiBULCBiOiBUKSA9PiBudW1iZXI7XG5cbmNvbnN0IG5hdGl2ZVNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuY29uc3QgbmF0aXZlSW5kZXhPZiA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mO1xuY29uc3QgbmF0aXZlUHVzaCA9IEFycmF5LnByb3RvdHlwZS5wdXNoO1xuXG5jb25zdCByYXdJbmRleE9mID0gPFQ+ICh0czogQXJyYXlMaWtlPFQ+LCB0OiBUKTogbnVtYmVyID0+XG4gIG5hdGl2ZUluZGV4T2YuY2FsbCh0cywgdCk7XG5cbmV4cG9ydCBjb25zdCBpbmRleE9mID0gPFQgPSBhbnk+KHhzOiBBcnJheUxpa2U8VD4sIHg6IFQpOiBPcHRpb25hbDxudW1iZXI+ID0+IHtcbiAgLy8gVGhlIHJhd0luZGV4T2YgbWV0aG9kIGRvZXMgbm90IHdyYXAgdXAgaW4gYW4gb3B0aW9uLiBUaGlzIGlzIGZvciBwZXJmb3JtYW5jZSByZWFzb25zLlxuICBjb25zdCByID0gcmF3SW5kZXhPZih4cywgeCk7XG4gIHJldHVybiByID09PSAtMSA/IE9wdGlvbmFsLm5vbmUoKSA6IE9wdGlvbmFsLnNvbWUocik7XG59O1xuXG5leHBvcnQgY29uc3QgY29udGFpbnMgPSA8VD4oeHM6IEFycmF5TGlrZTxUPiwgeDogVCk6IGJvb2xlYW4gPT4gcmF3SW5kZXhPZih4cywgeCkgPiAtMTtcblxuZXhwb3J0IGNvbnN0IGV4aXN0cyA9IDxUID0gYW55Pih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheVByZWRpY2F0ZTxUPik6IGJvb2xlYW4gPT4ge1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0geHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgaWYgKHByZWQoeCwgaSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCBjb25zdCByYW5nZSA9IDxUPihudW06IG51bWJlciwgZjogKGE6IG51bWJlcikgPT4gVCk6IFRbXSA9PiB7XG4gIGNvbnN0IHI6IFRbXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bTsgaSsrKSB7XG4gICAgci5wdXNoKGYoaSkpO1xuICB9XG4gIHJldHVybiByO1xufTtcblxuLy8gSXQncyBhIHRvdGFsIG1pY3JvIG9wdGltaXNhdGlvbiwgYnV0IHRoZXNlIGRvIG1ha2Ugc29tZSBkaWZmZXJlbmNlLlxuLy8gUGFydGljdWxhcmx5IGZvciBicm93c2VycyBvdGhlciB0aGFuIENocm9tZS5cbi8vIC0gbGVuZ3RoIGNhY2hpbmdcbi8vIGh0dHA6Ly9qc3BlcmYuY29tL2Jyb3dzZXItZGlldC1qcXVlcnktZWFjaC12cy1mb3ItbG9vcC82OVxuLy8gLSBub3QgdXNpbmcgcHVzaFxuLy8gaHR0cDovL2pzcGVyZi5jb20vYXJyYXktZGlyZWN0LWFzc2lnbm1lbnQtdnMtcHVzaC8yXG5cbmV4cG9ydCBjb25zdCBjaHVuayA9IDxUPihhcnJheTogQXJyYXlMaWtlPFQ+LCBzaXplOiBudW1iZXIpOiBUW11bXSA9PiB7XG4gIGNvbnN0IHI6IFRbXVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpICs9IHNpemUpIHtcbiAgICBjb25zdCBzOiBUW10gPSBuYXRpdmVTbGljZS5jYWxsKGFycmF5LCBpLCBpICsgc2l6ZSk7XG4gICAgci5wdXNoKHMpO1xuICB9XG4gIHJldHVybiByO1xufTtcblxuZXhwb3J0IGNvbnN0IG1hcCA9IDxUID0gYW55LCBVID0gYW55Pih4czogQXJyYXlMaWtlPFQ+LCBmOiBBcnJheU1vcnBoaXNtPFQsIFU+KTogVVtdID0+IHtcbiAgLy8gcHJlLWFsbG9jYXRpbmcgYXJyYXkgc2l6ZSB3aGVuIGl0J3MgZ3VhcmFudGVlZCB0byBiZSBrbm93blxuICAvLyBodHRwOi8vanNwZXJmLmNvbS9wdXNoLWFsbG9jYXRlZC12cy1keW5hbWljLzIyXG4gIGNvbnN0IGxlbiA9IHhzLmxlbmd0aDtcbiAgY29uc3QgciA9IG5ldyBBcnJheShsZW4pO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIHJbaV0gPSBmKHgsIGkpO1xuICB9XG4gIHJldHVybiByO1xufTtcblxuLy8gVW53b3VuZCBpbXBsZW1lbnRpbmcgb3RoZXIgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGVhY2guXG4vLyBUaGUgY29kZSBzaXplIGlzIHJvdWdobHkgdGhlIHNhbWUsIGFuZCBpdCBzaG91bGQgYWxsb3cgZm9yIGJldHRlciBvcHRpbWlzYXRpb24uXG4vLyBjb25zdCBlYWNoID0gZnVuY3Rpb248VCwgVT4oeHM6IFRbXSwgZjogKHg6IFQsIGk/OiBudW1iZXIsIHhzPzogVFtdKSA9PiB2b2lkKTogdm9pZCB7XG5leHBvcnQgY29uc3QgZWFjaCA9IDxUID0gYW55Pih4czogQXJyYXlMaWtlPFQ+LCBmOiBBcnJheU1vcnBoaXNtPFQsIHZvaWQ+KTogdm9pZCA9PiB7XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICBmKHgsIGkpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZWFjaHIgPSA8VD4oeHM6IEFycmF5TGlrZTxUPiwgZjogQXJyYXlNb3JwaGlzbTxULCB2b2lkPik6IHZvaWQgPT4ge1xuICBmb3IgKGxldCBpID0geHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgZih4LCBpKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHBhcnRpdGlvbiA9IDxUID0gYW55Pih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheVByZWRpY2F0ZTxUPik6IHsgcGFzczogVFtdOyBmYWlsOiBUW10gfSA9PiB7XG4gIGNvbnN0IHBhc3M6IFRbXSA9IFtdO1xuICBjb25zdCBmYWlsOiBUW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHhzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIGNvbnN0IGFyciA9IHByZWQoeCwgaSkgPyBwYXNzIDogZmFpbDtcbiAgICBhcnIucHVzaCh4KTtcbiAgfVxuICByZXR1cm4geyBwYXNzLCBmYWlsIH07XG59O1xuXG5leHBvcnQgY29uc3QgZmlsdGVyOiB7XG4gIDxULCBVIGV4dGVuZHMgVD4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlHdWFyZFByZWRpY2F0ZTxULCBVPik6IFVbXTtcbiAgPFQ+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+KTogVFtdO1xufSA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheVByZWRpY2F0ZTxUPik6IFRbXSA9PiB7XG4gIGNvbnN0IHI6IFRbXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0geHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgaWYgKHByZWQoeCwgaSkpIHtcbiAgICAgIHIucHVzaCh4KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHI7XG59O1xuXG4vKlxuICogR3JvdXBzIGFuIGFycmF5IGludG8gY29udGlndW91cyBhcnJheXMgb2YgbGlrZSBlbGVtZW50cy4gV2hldGhlciBhbiBlbGVtZW50IGlzIGxpa2Ugb3Igbm90IGRlcGVuZHMgb24gZi5cbiAqXG4gKiBmIGlzIGEgZnVuY3Rpb24gdGhhdCBkZXJpdmVzIGEgdmFsdWUgZnJvbSBhbiBlbGVtZW50IC0gZS5nLiB0cnVlIG9yIGZhbHNlLCBvciBhIHN0cmluZy5cbiAqIEVsZW1lbnRzIGFyZSBsaWtlIGlmIHRoaXMgZnVuY3Rpb24gZ2VuZXJhdGVzIHRoZSBzYW1lIHZhbHVlIGZvciB0aGVtIChhY2NvcmRpbmcgdG8gPT09KS5cbiAqXG4gKlxuICogT3JkZXIgb2YgdGhlIGVsZW1lbnRzIGlzIHByZXNlcnZlZC4gQXJyLmZsYXR0ZW4oKSBvbiB0aGUgcmVzdWx0IHdpbGwgcmV0dXJuIHRoZSBvcmlnaW5hbCBsaXN0LCBhcyB3aXRoIEhhc2tlbGwgZ3JvdXBCeSBmdW5jdGlvbi5cbiAqICBGb3IgYSBnb29kIGV4cGxhbmF0aW9uLCBzZWUgdGhlIGdyb3VwIGZ1bmN0aW9uICh3aGljaCBpcyBhIHNwZWNpYWwgY2FzZSBvZiBncm91cEJ5KVxuICogIGh0dHA6Ly9oYWNrYWdlLmhhc2tlbGwub3JnL3BhY2thZ2UvYmFzZS00LjcuMC4wL2RvY3MvRGF0YS1MaXN0Lmh0bWwjdjpncm91cFxuICovXG5leHBvcnQgY29uc3QgZ3JvdXBCeSA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCBmOiAoYTogVCkgPT4gYW55KTogVFtdW10gPT4ge1xuICBpZiAoeHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9IGVsc2Uge1xuICAgIGxldCB3YXNUeXBlID0gZih4c1swXSk7IC8vIGluaXRpYWwgY2FzZSBmb3IgbWF0Y2hpbmdcbiAgICBjb25zdCByOiBUW11bXSA9IFtdO1xuICAgIGxldCBncm91cDogVFtdID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0geHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICAgIGNvbnN0IHR5cGUgPSBmKHgpO1xuICAgICAgaWYgKHR5cGUgIT09IHdhc1R5cGUpIHtcbiAgICAgICAgci5wdXNoKGdyb3VwKTtcbiAgICAgICAgZ3JvdXAgPSBbXTtcbiAgICAgIH1cbiAgICAgIHdhc1R5cGUgPSB0eXBlO1xuICAgICAgZ3JvdXAucHVzaCh4KTtcbiAgICB9XG4gICAgaWYgKGdyb3VwLmxlbmd0aCAhPT0gMCkge1xuICAgICAgci5wdXNoKGdyb3VwKTtcbiAgICB9XG4gICAgcmV0dXJuIHI7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBmb2xkciA9IDxULCBVPih4czogQXJyYXlMaWtlPFQ+LCBmOiAoYWNjOiBVLCB4OiBULCBpOiBudW1iZXIpID0+IFUsIGFjYzogVSk6IFUgPT4ge1xuICBlYWNocih4cywgKHgsIGkpID0+IHtcbiAgICBhY2MgPSBmKGFjYywgeCwgaSk7XG4gIH0pO1xuICByZXR1cm4gYWNjO1xufTtcblxuZXhwb3J0IGNvbnN0IGZvbGRsID0gPFQgPSBhbnksIFUgPSBhbnk+KHhzOiBBcnJheUxpa2U8VD4sIGY6IChhY2M6IFUsIHg6IFQsIGk6IG51bWJlcikgPT4gVSwgYWNjOiBVKTogVSA9PiB7XG4gIGVhY2goeHMsICh4LCBpKSA9PiB7XG4gICAgYWNjID0gZihhY2MsIHgsIGkpO1xuICB9KTtcbiAgcmV0dXJuIGFjYztcbn07XG5cbmV4cG9ydCBjb25zdCBmaW5kVW50aWw6IHtcbiAgPFQsIFUgZXh0ZW5kcyBUPih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheUd1YXJkUHJlZGljYXRlPFQsIFU+LCB1bnRpbDogQXJyYXlQcmVkaWNhdGU8VD4pOiBPcHRpb25hbDxVPjtcbiAgPFQgPSBhbnk+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+LCB1bnRpbDogQXJyYXlQcmVkaWNhdGU8VD4pOiBPcHRpb25hbDxUPjtcbn0gPSA8VD4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlQcmVkaWNhdGU8VD4sIHVudGlsOiBBcnJheVByZWRpY2F0ZTxUPik6IE9wdGlvbmFsPFQ+ID0+IHtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHhzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIGlmIChwcmVkKHgsIGkpKSB7XG4gICAgICByZXR1cm4gT3B0aW9uYWwuc29tZSh4KTtcbiAgICB9IGVsc2UgaWYgKHVudGlsKHgsIGkpKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIE9wdGlvbmFsLm5vbmUoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmaW5kOiB7XG4gIDxULCBVIGV4dGVuZHMgVD4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlHdWFyZFByZWRpY2F0ZTxULCBVPik6IE9wdGlvbmFsPFU+O1xuICA8VCA9IGFueT4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlQcmVkaWNhdGU8VD4pOiBPcHRpb25hbDxUPjtcbn0gPSA8VD4oeHM6IEFycmF5TGlrZTxUPiwgcHJlZDogQXJyYXlQcmVkaWNhdGU8VD4pOiBPcHRpb25hbDxUPiA9PiB7XG4gIHJldHVybiBmaW5kVW50aWwoeHMsIHByZWQsIEZ1bi5uZXZlcik7XG59O1xuXG5leHBvcnQgY29uc3QgZmluZEluZGV4ID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4sIHByZWQ6IEFycmF5UHJlZGljYXRlPFQ+KTogT3B0aW9uYWw8bnVtYmVyPiA9PiB7XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICBpZiAocHJlZCh4LCBpKSkge1xuICAgICAgcmV0dXJuIE9wdGlvbmFsLnNvbWUoaSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIE9wdGlvbmFsLm5vbmUoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmaW5kTGFzdEluZGV4ID0gPFQ+KGFycjogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheVByZWRpY2F0ZTxUPik6IE9wdGlvbmFsPG51bWJlcj4gPT4ge1xuICBmb3IgKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgaWYgKHByZWQoYXJyW2ldLCBpKSkge1xuICAgICAgcmV0dXJuIE9wdGlvbmFsLnNvbWUoaSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIE9wdGlvbmFsLm5vbmUoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmbGF0dGVuID0gPFQ+KHhzOiBBcnJheUxpa2U8VFtdPik6IFRbXSA9PiB7XG4gIC8vIE5vdGUsIHRoaXMgaXMgcG9zc2libGUgYmVjYXVzZSBwdXNoIHN1cHBvcnRzIG11bHRpcGxlIGFyZ3VtZW50czpcbiAgLy8gaHR0cDovL2pzcGVyZi5jb20vY29uY2F0LXB1c2gvNlxuICAvLyBOb3RlIHRoYXQgaW4gdGhlIHBhc3QsIGNvbmNhdCgpIHdvdWxkIHNpbGVudGx5IHdvcmsgKHZlcnkgc2xvd2x5KSBmb3IgYXJyYXktbGlrZSBvYmplY3RzLlxuICAvLyBXaXRoIHRoaXMgY2hhbmdlIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3IuXG4gIGNvbnN0IHI6IFRbXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0geHMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAvLyBFbnN1cmUgdGhhdCBlYWNoIHZhbHVlIGlzIGFuIGFycmF5IGl0c2VsZlxuICAgIGlmICghVHlwZS5pc0FycmF5KHhzW2ldKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBcnIuZmxhdHRlbiBpdGVtICcgKyBpICsgJyB3YXMgbm90IGFuIGFycmF5LCBpbnB1dDogJyArIHhzKTtcbiAgICB9XG4gICAgbmF0aXZlUHVzaC5hcHBseShyLCB4c1tpXSk7XG4gIH1cbiAgcmV0dXJuIHI7XG59O1xuXG5leHBvcnQgY29uc3QgYmluZCA9IDxUID0gYW55LCBVID0gYW55Pih4czogQXJyYXlMaWtlPFQ+LCBmOiBBcnJheU1vcnBoaXNtPFQsIFVbXT4pOiBVW10gPT5cbiAgZmxhdHRlbihtYXAoeHMsIGYpKTtcblxuZXhwb3J0IGNvbnN0IGZvcmFsbCA9IDxUPih4czogQXJyYXlMaWtlPFQ+LCBwcmVkOiBBcnJheVByZWRpY2F0ZTxUPik6IGJvb2xlYW4gPT4ge1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0geHMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICBjb25zdCB4ID0geHNbaV07XG4gICAgaWYgKHByZWQoeCwgaSkgIT09IHRydWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5leHBvcnQgY29uc3QgZXF1YWwgPSA8VD4oYTE6IEFycmF5TGlrZTxUPiwgYTI6IEFycmF5TGlrZTxUPiwgZXE6IEVxLkVxPFQ+ID0gRXEuZXFBbnkpOiBib29sZWFuID0+XG4gIEVxLmVxQXJyYXkoZXEpLmVxKGExLCBhMik7XG5cbmV4cG9ydCBjb25zdCByZXZlcnNlID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4pOiBUW10gPT4ge1xuICBjb25zdCByOiBUW10gPSBuYXRpdmVTbGljZS5jYWxsKHhzLCAwKTtcbiAgci5yZXZlcnNlKCk7XG4gIHJldHVybiByO1xufTtcblxuZXhwb3J0IGNvbnN0IGRpZmZlcmVuY2UgPSA8VD4oYTE6IEFycmF5TGlrZTxUPiwgYTI6IEFycmF5TGlrZTxUPik6IFRbXSA9PiBmaWx0ZXIoYTEsICh4KSA9PiAhY29udGFpbnMoYTIsIHgpKTtcblxuZXhwb3J0IGNvbnN0IG1hcFRvT2JqZWN0OiB7XG4gIDxUIGV4dGVuZHMgc3RyaW5nLCBVPih4czogQXJyYXlMaWtlPFQ+LCBmOiAoeDogVCwgaTogbnVtYmVyKSA9PiBVKTogUmVjb3JkPFQsIFU+O1xuICA8VCwgUiBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4+KHhzOiBBcnJheUxpa2U8VD4sIGY6ICh4OiBULCBpOiBudW1iZXIpID0+IFJba2V5b2YgUl0pOiBSO1xufSA9IDxULCBSIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55Pj4oeHM6IEFycmF5TGlrZTxUPiwgZjogKHg6IFQsIGk6IG51bWJlcikgPT4gUltrZXlvZiBSXSk6IFIgPT4ge1xuICBjb25zdCByID0ge30gYXMgUjtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHhzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIHJbU3RyaW5nKHgpIGFzIGtleW9mIFJdID0gZih4LCBpKTtcbiAgfVxuICByZXR1cm4gcjtcbn07XG5cbmV4cG9ydCBjb25zdCBwdXJlID0gPFQ+KHg6IFQpOiBUW10gPT4gWyB4IF07XG5cbmV4cG9ydCBjb25zdCBzb3J0ID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4sIGNvbXBhcmF0b3I/OiBDb21wYXJhdG9yPFQ+KTogVFtdID0+IHtcbiAgY29uc3QgY29weTogVFtdID0gbmF0aXZlU2xpY2UuY2FsbCh4cywgMCk7XG4gIGNvcHkuc29ydChjb21wYXJhdG9yKTtcbiAgcmV0dXJuIGNvcHk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0ID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4sIGk6IG51bWJlcik6IE9wdGlvbmFsPFQ+ID0+IGkgPj0gMCAmJiBpIDwgeHMubGVuZ3RoID8gT3B0aW9uYWwuc29tZSh4c1tpXSkgOiBPcHRpb25hbC5ub25lKCk7XG5cbmV4cG9ydCBjb25zdCBoZWFkID0gPFQ+KHhzOiBBcnJheUxpa2U8VD4pOiBPcHRpb25hbDxUPiA9PiBnZXQoeHMsIDApO1xuXG5leHBvcnQgY29uc3QgbGFzdCA9IDxUPih4czogQXJyYXlMaWtlPFQ+KTogT3B0aW9uYWw8VD4gPT4gZ2V0KHhzLCB4cy5sZW5ndGggLSAxKTtcblxuZXhwb3J0IGNvbnN0IGZyb206IDxUPih4OiBBcnJheUxpa2U8VD4pID0+IFRbXSA9IFR5cGUuaXNGdW5jdGlvbihBcnJheS5mcm9tKSA/IEFycmF5LmZyb20gOiAoeCkgPT4gbmF0aXZlU2xpY2UuY2FsbCh4KTtcblxuZXhwb3J0IGNvbnN0IGZpbmRNYXAgPSA8QSwgQj4oYXJyOiBBcnJheUxpa2U8QT4sIGY6IChhOiBBLCBpbmRleDogbnVtYmVyKSA9PiBPcHRpb25hbDxCPik6IE9wdGlvbmFsPEI+ID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCByID0gZihhcnJbaV0sIGkpO1xuICAgIGlmIChyLmlzU29tZSgpKSB7XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIE9wdGlvbmFsLm5vbmU8Qj4oKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1bmlxdWUgPSA8VD4oeHM6IEFycmF5TGlrZTxUPiwgY29tcGFyYXRvcj86IChhOiBULCBiOiBUKSA9PiBib29sZWFuKTogVFtdID0+IHtcbiAgY29uc3QgcjogVFtdID0gW107XG5cbiAgY29uc3QgaXNEdXBsaWNhdGVkID0gVHlwZS5pc0Z1bmN0aW9uKGNvbXBhcmF0b3IpID9cbiAgICAoeDogVCkgPT4gZXhpc3RzKHIsIChpKSA9PiBjb21wYXJhdG9yKGksIHgpKSA6XG4gICAgKHg6IFQpID0+IGNvbnRhaW5zKHIsIHgpO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB4cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICBpZiAoIWlzRHVwbGljYXRlZCh4KSkge1xuICAgICAgci5wdXNoKHgpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByO1xufTtcbiIsImltcG9ydCAqIGFzIFR5cGUgZnJvbSAnLi9UeXBlJztcblxuY29uc3Qgbm9vcDogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkXG49ICgpID0+IHsgfTtcblxuY29uc3Qgbm9hcmc6IDxUPihmOiAoKSA9PiBUKSA9PiAoLi4uYXJnczogYW55W10pID0+IHZvaWRcbj0gKGYpID0+ICgpID0+IGYoKTtcblxuLyoqIENvbXBvc2UgYSB1bmFyeSBmdW5jdGlvbiB3aXRoIGFuIG4tYXJ5IGZ1bmN0aW9uICovXG5jb25zdCBjb21wb3NlID0gPFQgZXh0ZW5kcyBhbnlbXSwgVSwgVj4oZmE6ICh2OiBVKSA9PiBWLCBmYjogKC4uLng6IFQpID0+IFUpOiAoLi4ueDogVCkgPT4gViA9PiB7XG4gIHJldHVybiAoLi4uYXJnczogVCkgPT4ge1xuICAgIHJldHVybiBmYShmYi5hcHBseShudWxsLCBhcmdzKSk7XG4gIH07XG59O1xuXG4vKiogQ29tcG9zZSB0d28gdW5hcnkgZnVuY3Rpb25zLiBTaW1pbGFyIHRvIGNvbXBvc2UsIGJ1dCBhdm9pZHMgdXNpbmcgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LiAqL1xuY29uc3QgY29tcG9zZTEgPSA8QSwgQiwgQz4gKGZiYzogKGI6IEIpID0+IEMsIGZhYjogKGE6IEEpID0+IEIpID0+IChhOiBBKTogQyA9PlxuICBmYmMoZmFiKGEpKTtcblxuY29uc3QgY29uc3RhbnQgPSA8VD4odmFsdWU6IFQpOiAoKSA9PiBUID0+IHtcbiAgcmV0dXJuICgpID0+IHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG59O1xuXG5jb25zdCBpZGVudGl0eSA9IDxUID0gYW55Pih4OiBUKTogVCA9PiB7XG4gIHJldHVybiB4O1xufTtcblxuY29uc3QgdHJpcGxlRXF1YWxzID0gPFQ+KGE6IFQsIGI6IFQpOiBib29sZWFuID0+IHtcbiAgcmV0dXJuIGEgPT09IGI7XG59O1xuXG5mdW5jdGlvbiBjdXJyeSA8UkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCk6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPEEsIFJFU1QgZXh0ZW5kcyBhbnlbXSwgT1VUPihmbjogKGE6IEEsIC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQsIGE6IEEpOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVDtcbmZ1bmN0aW9uIGN1cnJ5IDxBLCBCLCBSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46IChhOiBBLCBiOiBCLCAuLi5yZXN0QXJnczogUkVTVCkgPT4gT1VULCBhOiBBLCBiOiBCKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8QSwgQiwgQywgUkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoYTogQSwgYjogQiwgYzogQywgLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCwgYTogQSwgYjogQiwgYzogQyk6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPEEsIEIsIEMsIEQsIFJFU1QgZXh0ZW5kcyBhbnlbXSwgT1VUPihmbjogKGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQsIGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQpOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVDtcbmZ1bmN0aW9uIGN1cnJ5IDxBLCBCLCBDLCBELCBFLCBSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46IChhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCAuLi5yZXN0QXJnczogUkVTVCkgPT4gT1VULCBhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8QSwgQiwgQywgRCwgRSwgRiwgUkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgZjogRiwgLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCwgYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgZjogRik6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPEEsIEIsIEMsIEQsIEUsIEYsIEcsIFJFU1QgZXh0ZW5kcyBhbnlbXSwgT1VUPihmbjogKGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIGY6IEYsIGc6IEcsIC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQsIGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIGY6IEYsIGc6IEcpOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVDtcbmZ1bmN0aW9uIGN1cnJ5IDxBLCBCLCBDLCBELCBFLCBGLCBHLCBILCBSRVNUIGV4dGVuZHMgYW55W10sIE9VVD4oZm46IChhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCBmOiBGLCBnOiBHLCBoOiBILCAuLi5yZXN0QXJnczogUkVTVCkgPT4gT1VULCBhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFLCBmOiBGLCBnOiBHLCBoOiBIKTogKC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQ7XG5mdW5jdGlvbiBjdXJyeSA8QSwgQiwgQywgRCwgRSwgRiwgRywgSCwgSSwgUkVTVCBleHRlbmRzIGFueVtdLCBPVVQ+KGZuOiAoYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgZjogRiwgZzogRywgaDogSCwgaTogSSwgLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVCwgYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgZjogRiwgZzogRywgaDogSCwgaTogSSk6ICguLi5yZXN0QXJnczogUkVTVCkgPT4gT1VUO1xuZnVuY3Rpb24gY3VycnkgPEEsIEIsIEMsIEQsIEUsIEYsIEcsIEgsIEksIEosIFJFU1QgZXh0ZW5kcyBhbnlbXSwgT1VUPihmbjogKGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIGY6IEYsIGc6IEcsIGg6IEgsIGk6IEksIGo6IEosIC4uLnJlc3RBcmdzOiBSRVNUKSA9PiBPVVQsIGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQsIGU6IEUsIGY6IEYsIGc6IEcsIGg6IEgsIGk6IEksIGo6IEopOiAoLi4ucmVzdEFyZ3M6IFJFU1QpID0+IE9VVDtcbmZ1bmN0aW9uIGN1cnJ5IDxPVVQ+KGZuOiAoLi4uYWxsQXJnczogYW55W10pID0+IE9VVCwgLi4uaW5pdGlhbEFyZ3M6IGFueVtdKTogKC4uLnJlc3RBcmdzOiBhbnlbXSkgPT4gT1VUIHtcbiAgcmV0dXJuICguLi5yZXN0QXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCBhbGwgPSBpbml0aWFsQXJncy5jb25jYXQocmVzdEFyZ3MpO1xuICAgIHJldHVybiBmbi5hcHBseShudWxsLCBhbGwpO1xuICB9O1xufVxuXG5jb25zdCBub3QgPSA8VD4oZjogKHQ6IFQpID0+IGJvb2xlYW4pID0+ICh0OiBUKTogYm9vbGVhbiA9PlxuICAhZih0KTtcblxuY29uc3QgZGllID0gKG1zZzogc3RyaW5nKSA9PiB7XG4gIHJldHVybiAoKTogbmV2ZXIgPT4ge1xuICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xuICB9O1xufTtcblxuY29uc3QgYXBwbHkgPSA8VD4oZjogKCkgPT4gVCk6IFQgPT4ge1xuICByZXR1cm4gZigpO1xufTtcblxuY29uc3QgY2FsbCA9IChmOiAoKSA9PiBhbnkpOiB2b2lkID0+IHtcbiAgZigpO1xufTtcblxuY29uc3QgbmV2ZXI6ICguLi5hcmdzOiBhbnlbXSkgPT4gZmFsc2UgPSBjb25zdGFudDxmYWxzZT4oZmFsc2UpO1xuY29uc3QgYWx3YXlzOiAoLi4uYXJnczogYW55W10pID0+IHRydWUgPSBjb25zdGFudDx0cnVlPih0cnVlKTtcblxuLyogVXNlZCB0byB3ZWFrZW4gdHlwZXMgKi9cbmNvbnN0IHdlYWtlbiA9IDxBLCBCIGV4dGVuZHMgQT4oYjogQik6IEEgPT4gYjtcblxudHlwZSBGdW48WCwgWT4gPSAoeDogWCkgPT4gWTtcbmNvbnN0IHBpcGU6IHtcbiAgPEEsIEI+KGE6IEEsIGFiOiBGdW48QSwgQj4pOiBCO1xuICA8QSwgQiwgQz4oYTogQSwgYWI6IEZ1bjxBLCBCPiwgYmM6IEZ1bjxCLCBDPik6IEM7XG4gIDxBLCBCLCBDLCBEPihhOiBBLCBhYjogRnVuPEEsIEI+LCBiYzogRnVuPEIsIEM+LCBjZDogRnVuPEMsIEQ+KTogRDtcbiAgPEEsIEIsIEMsIEQsIEU+KGE6IEEsIGFiOiBGdW48QSwgQj4sIGJjOiBGdW48QiwgQz4sIGNkOiBGdW48QywgRD4sIGRlOiBGdW48RCwgRT4pOiBFO1xuICA8QSwgQiwgQywgRCwgRSwgRj4oYTogQSwgYWI6IEZ1bjxBLCBCPiwgYmM6IEZ1bjxCLCBDPiwgY2Q6IEZ1bjxDLCBEPiwgZGU6IEZ1bjxELCBFPiwgZWY6IEZ1bjxFLCBGPik6IEY7XG4gIDxBLCBCLCBDLCBELCBFLCBGLCBHPihhOiBBLCBhYjogRnVuPEEsIEI+LCBiYzogRnVuPEIsIEM+LCBjZDogRnVuPEMsIEQ+LCBkZTogRnVuPEQsIEU+LCBlZjogRnVuPEUsIEY+LCBmZzogRnVuPEYsIEc+KTogRztcbiAgPEEsIEIsIEMsIEQsIEUsIEYsIEcsIEg+KGE6IEEsIGFiOiBGdW48QSwgQj4sIGJjOiBGdW48QiwgQz4sIGNkOiBGdW48QywgRD4sIGRlOiBGdW48RCwgRT4sIGVmOiBGdW48RSwgRj4sIGZnOiBGdW48RiwgRz4sIGdoOiBGdW48RywgSD4pOiBIO1xufSA9XG4gIDxBLCBCLCBDLCBELCBFLCBGLCBHLCBIPihhOiBBLCBhYjogRnVuPEEsIEI+LCBiYz86IEZ1bjxCLCBDPiwgY2Q/OiBGdW48QywgRD4sIGRlPzogRnVuPEQsIEU+LCBlZj86IEZ1bjxFLCBGPiwgZmc/OiBGdW48RiwgRz4sIGdoPzogRnVuPEcsIEg+KTogQiB8IEMgfCBEIHwgRSB8IEYgfCBHIHwgSCA9PiB7XG4gICAgY29uc3QgYiA9IGFiKGEpO1xuICAgIGlmIChUeXBlLmlzTnVsbGFibGUoYmMpKSB7XG4gICAgICByZXR1cm4gYjtcbiAgICB9XG5cbiAgICBjb25zdCBjID0gYmMoYik7XG4gICAgaWYgKFR5cGUuaXNOdWxsYWJsZShjZCkpIHtcbiAgICAgIHJldHVybiBjO1xuICAgIH1cblxuICAgIGNvbnN0IGQgPSBjZChjKTtcbiAgICBpZiAoVHlwZS5pc051bGxhYmxlKGRlKSkge1xuICAgICAgcmV0dXJuIGQ7XG4gICAgfVxuXG4gICAgY29uc3QgZSA9IGRlKGQpO1xuICAgIGlmIChUeXBlLmlzTnVsbGFibGUoZWYpKSB7XG4gICAgICByZXR1cm4gZTtcbiAgICB9XG5cbiAgICBjb25zdCBmID0gZWYoZSk7XG4gICAgaWYgKFR5cGUuaXNOdWxsYWJsZShmZykpIHtcbiAgICAgIHJldHVybiBmO1xuICAgIH1cblxuICAgIGNvbnN0IGcgPSBmZyhmKTtcbiAgICBpZiAoVHlwZS5pc051bGxhYmxlKGdoKSkge1xuICAgICAgcmV0dXJuIGc7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdoKGcpO1xuICB9O1xuXG5leHBvcnQge1xuICBub29wLFxuICBub2FyZyxcbiAgY29tcG9zZSxcbiAgY29tcG9zZTEsXG4gIGNvbnN0YW50LFxuICBpZGVudGl0eSxcbiAgdHJpcGxlRXF1YWxzLFxuICBjdXJyeSxcbiAgbm90LFxuICBkaWUsXG4gIGFwcGx5LFxuICBjYWxsLFxuICBuZXZlcixcbiAgYWx3YXlzLFxuICB3ZWFrZW4sXG4gIHBpcGVcbn07XG4iLCIvLyBVc2Ugd2luZG93IG9iamVjdCBhcyB0aGUgZ2xvYmFsIGlmIGl0J3MgYXZhaWxhYmxlIHNpbmNlIENTUCB3aWxsIGJsb2NrIHNjcmlwdCBldmFsc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1pbXBsaWVkLWV2YWxcbmV4cG9ydCBjb25zdCBHbG9iYWwgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpczsnKSgpO1xuIiwiaW1wb3J0ICogYXMgVHlwZSBmcm9tICcuL1R5cGUnO1xuXG4vKipcbiAqIFRoZSBgT3B0aW9uYWxgIHR5cGUgcmVwcmVzZW50cyBhIHZhbHVlIChvZiBhbnkgdHlwZSkgdGhhdCBwb3RlbnRpYWxseSBkb2VzXG4gKiBub3QgZXhpc3QuIEFueSBgT3B0aW9uYWw8VD5gIGNhbiBlaXRoZXIgYmUgYSBgU29tZTxUPmAgKGluIHdoaWNoIGNhc2UgdGhlXG4gKiB2YWx1ZSBkb2VzIGV4aXN0KSBvciBhIGBOb25lYCAoaW4gd2hpY2ggY2FzZSB0aGUgdmFsdWUgZG9lcyBub3QgZXhpc3QpLiBUaGlzXG4gKiBtb2R1bGUgZGVmaW5lcyBhIHdob2xlIGxvdCBvZiBGUC1pbnNwaXJlZCB1dGlsaXR5IGZ1bmN0aW9ucyBmb3IgZGVhbGluZyB3aXRoXG4gKiBgT3B0aW9uYWxgIG9iamVjdHMuXG4gKlxuICogQ29tcGFyaXNvbiB3aXRoIG51bGwgb3IgdW5kZWZpbmVkOlxuICogLSBXZSBkb24ndCBnZXQgZmFuY3kgbnVsbCBjb2FsZXNjaW5nIG9wZXJhdG9ycyB3aXRoIGBPcHRpb25hbGBcbiAqIC0gV2UgZG8gZ2V0IGZhbmN5IGhlbHBlciBmdW5jdGlvbnMgd2l0aCBgT3B0aW9uYWxgXG4gKiAtIGBPcHRpb25hbGAgc3VwcG9ydCBuZXN0aW5nLCBhbmQgYWxsb3cgZm9yIHRoZSB0eXBlIHRvIHN0aWxsIGJlIG51bGxhYmxlIChvclxuICogYW5vdGhlciBgT3B0aW9uYWxgKVxuICogLSBUaGVyZSBpcyBubyBvcHRpb24gdG8gdHVybiBvZmYgc3RyaWN0LW9wdGlvbmFsLWNoZWNrcyBsaWtlIHRoZXJlIGlzIGZvclxuICogc3RyaWN0LW51bGwtY2hlY2tzXG4gKi9cbmV4cG9ydCBjbGFzcyBPcHRpb25hbDxUPiB7XG4gIHByaXZhdGUgcmVhZG9ubHkgdGFnOiBib29sZWFuO1xuICBwcml2YXRlIHJlYWRvbmx5IHZhbHVlPzogVDtcblxuICAvLyBTbmVha3kgb3B0aW1pc2F0aW9uOiBldmVyeSBpbnN0YW5jZSBvZiBPcHRpb25hbC5ub25lIGlzIGlkZW50aWNhbCwgc28ganVzdFxuICAvLyByZXVzZSB0aGUgc2FtZSBvYmplY3RcbiAgcHJpdmF0ZSBzdGF0aWMgc2luZ2xldG9uTm9uZSA9IG5ldyBPcHRpb25hbDxhbnk+KGZhbHNlKTtcblxuICAvLyBUaGUgaW50ZXJuYWwgcmVwcmVzZW50YXRpb24gaGFzIGEgYHRhZ2AgYW5kIGEgYHZhbHVlYCwgYnV0IGJvdGggYXJlXG4gIC8vIHByaXZhdGU6IGFibGUgdG8gYmUgY29uc29sZS5sb2dnZWQsIGJ1dCBub3QgYWJsZSB0byBiZSBhY2Nlc3NlZCBieSBjb2RlXG4gIHByaXZhdGUgY29uc3RydWN0b3IodGFnOiBib29sZWFuLCB2YWx1ZT86IFQpIHtcbiAgICB0aGlzLnRhZyA9IHRhZztcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICAvLyAtLS0gSWRlbnRpdGllcyAtLS1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBgT3B0aW9uYWw8VD5gIHRoYXQgKipkb2VzKiogY29udGFpbiBhIHZhbHVlLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBzb21lPFQ+KHRoaXM6IHZvaWQsIHZhbHVlOiBUKTogT3B0aW9uYWw8VD4ge1xuICAgIHJldHVybiBuZXcgT3B0aW9uYWwodHJ1ZSwgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBgT3B0aW9uYWw8VD5gIHRoYXQgKipkb2VzIG5vdCoqIGNvbnRhaW4gYSB2YWx1ZS4gYFRgIGNhbiBiZVxuICAgKiBhbnkgdHlwZSBiZWNhdXNlIHdlIGRvbid0IGFjdHVhbGx5IGhhdmUgYSBgVGAuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIG5vbmU8VCA9IG5ldmVyPih0aGlzOiB2b2lkKTogT3B0aW9uYWw8VD4ge1xuICAgIHJldHVybiBPcHRpb25hbC5zaW5nbGV0b25Ob25lO1xuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm0gYSB0cmFuc2Zvcm0gb24gYW4gYE9wdGlvbmFsYCB0eXBlLiBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpc1xuICAgKiBgT3B0aW9uYWxgIGNvbnRhaW5zIGEgdmFsdWUgb3Igbm90LCBgZm9sZGAgd2lsbCByZXR1cm4gYSB2YWx1ZSBvZiB0eXBlIGBVYC5cbiAgICogSWYgdGhpcyBgT3B0aW9uYWxgIGRvZXMgbm90IGNvbnRhaW4gYSB2YWx1ZSwgdGhlIGBVYCB3aWxsIGJlIGNyZWF0ZWQgYnlcbiAgICogY2FsbGluZyBgb25Ob25lYC4gSWYgdGhpcyBgT3B0aW9uYWxgIGRvZXMgY29udGFpbiBhIHZhbHVlLCB0aGUgYFVgIHdpbGwgYmVcbiAgICogY3JlYXRlZCBieSBjYWxsaW5nIGBvblNvbWVgLlxuICAgKlxuICAgKiBGb3IgdGhlIEZQIGVudGh1c2lhc3RzIGluIHRoZSByb29tLCB0aGlzIGZ1bmN0aW9uOlxuICAgKiAxLiBDb3VsZCBiZSB1c2VkIHRvIGltcGxlbWVudCBhbGwgb2YgdGhlIGZ1bmN0aW9ucyBiZWxvd1xuICAgKiAyLiBGb3JtcyBhIGNhdGFtb3JwaGlzbVxuICAgKi9cbiAgcHVibGljIGZvbGQ8VT4ob25Ob25lOiAoKSA9PiBVLCBvblNvbWU6ICh2YWx1ZTogVCkgPT4gVSk6IFUge1xuICAgIGlmICh0aGlzLnRhZykge1xuICAgICAgcmV0dXJuIG9uU29tZSh0aGlzLnZhbHVlIGFzIFQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb25Ob25lKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBpZiB0aGlzIGBPcHRpb25hbGAgb2JqZWN0IGNvbnRhaW5zIGEgdmFsdWUuXG4gICAqL1xuICBwdWJsaWMgaXNTb21lKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnRhZztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgdGhpcyBgT3B0aW9uYWxgIG9iamVjdCAqKmRvZXMgbm90KiogY29udGFpbiBhIHZhbHVlLlxuICAgKi9cbiAgcHVibGljIGlzTm9uZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMudGFnO1xuICB9XG5cbiAgLy8gLS0tIEZ1bmN0b3IgKG5hbWUgc3RvbGVuIGZyb20gSGFza2VsbCAvIG1hdGhzKSAtLS1cblxuICAvKipcbiAgICogUGVyZm9ybSBhIHRyYW5zZm9ybSBvbiBhbiBgT3B0aW9uYWxgIG9iamVjdCwgKippZioqIHRoZXJlIGlzIGEgdmFsdWUuIElmXG4gICAqIHlvdSBwcm92aWRlIGEgZnVuY3Rpb24gdG8gdHVybiBhIFQgaW50byBhIFUsIHRoaXMgaXMgdGhlIGZ1bmN0aW9uIHlvdSB1c2VcbiAgICogdG8gdHVybiBhbiBgT3B0aW9uYWw8VD5gIGludG8gYW4gYE9wdGlvbmFsPFU+YC4gSWYgdGhpcyAqKmRvZXMqKiBjb250YWluXG4gICAqIGEgdmFsdWUgdGhlbiB0aGUgb3V0cHV0IHdpbGwgYWxzbyBjb250YWluIGEgdmFsdWUgKHRoYXQgdmFsdWUgYmVpbmcgdGhlXG4gICAqIG91dHB1dCBvZiBgbWFwcGVyKHRoaXMudmFsdWUpYCksIGFuZCBpZiB0aGlzICoqZG9lcyBub3QqKiBjb250YWluIGEgdmFsdWVcbiAgICogdGhlbiBuZWl0aGVyIHdpbGwgdGhlIG91dHB1dC5cbiAgICovXG4gIHB1YmxpYyBtYXA8VT4obWFwcGVyOiAodmFsdWU6IFQpID0+IFUpOiBPcHRpb25hbDxVPiB7XG4gICAgaWYgKHRoaXMudGFnKSB7XG4gICAgICByZXR1cm4gT3B0aW9uYWwuc29tZShtYXBwZXIodGhpcy52YWx1ZSBhcyBUKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBPcHRpb25hbC5ub25lKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tIE1vbmFkIChuYW1lIHN0b2xlbiBmcm9tIEhhc2tlbGwgLyBtYXRocykgLS0tXG5cbiAgLyoqXG4gICAqIFBlcmZvcm0gYSB0cmFuc2Zvcm0gb24gYW4gYE9wdGlvbmFsYCBvYmplY3QsICoqaWYqKiB0aGVyZSBpcyBhIHZhbHVlLlxuICAgKiBVbmxpa2UgYG1hcGAsIGhlcmUgdGhlIHRyYW5zZm9ybSBpdHNlbGYgYWxzbyByZXR1cm5zIGFuIGBPcHRpb25hbGAuXG4gICAqL1xuICBwdWJsaWMgYmluZDxVPihiaW5kZXI6ICh2YWx1ZTogVCkgPT4gT3B0aW9uYWw8VT4pOiBPcHRpb25hbDxVPiB7XG4gICAgaWYgKHRoaXMudGFnKSB7XG4gICAgICByZXR1cm4gYmluZGVyKHRoaXMudmFsdWUgYXMgVCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBPcHRpb25hbC5ub25lKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tIFRyYXZlcnNhYmxlIChuYW1lIHN0b2xlbiBmcm9tIEhhc2tlbGwgLyBtYXRocykgLS0tXG5cbiAgLyoqXG4gICAqIEZvciBhIGdpdmVuIHByZWRpY2F0ZSwgdGhpcyBmdW5jdGlvbiBmaW5kcyBvdXQgaWYgdGhlcmUgKipleGlzdHMqKiBhIHZhbHVlXG4gICAqIGluc2lkZSB0aGlzIGBPcHRpb25hbGAgb2JqZWN0IHRoYXQgbWVldHMgdGhlIHByZWRpY2F0ZS4gSW4gcHJhY3RpY2UsIHRoaXNcbiAgICogbWVhbnMgdGhhdCBmb3IgYE9wdGlvbmFsYHMgdGhhdCBkbyBub3QgY29udGFpbiBhIHZhbHVlIGl0IHJldHVybnMgZmFsc2UgKGFzXG4gICAqIG5vIHByZWRpY2F0ZS1tZWV0aW5nIHZhbHVlIGV4aXN0cykuXG4gICAqL1xuICBwdWJsaWMgZXhpc3RzKHByZWRpY2F0ZTogKHZhbHVlOiBUKSA9PiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudGFnICYmIHByZWRpY2F0ZSh0aGlzLnZhbHVlIGFzIFQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvciBhIGdpdmVuIHByZWRpY2F0ZSwgdGhpcyBmdW5jdGlvbiBmaW5kcyBvdXQgaWYgKiphbGwqKiB0aGUgdmFsdWVzIGluc2lkZVxuICAgKiB0aGlzIGBPcHRpb25hbGAgb2JqZWN0IG1lZXQgdGhlIHByZWRpY2F0ZS4gSW4gcHJhY3RpY2UsIHRoaXMgbWVhbnMgdGhhdFxuICAgKiBmb3IgYE9wdGlvbmFsYHMgdGhhdCBkbyBub3QgY29udGFpbiBhIHZhbHVlIGl0IHJldHVybnMgdHJ1ZSAoYXMgYWxsIDBcbiAgICogb2JqZWN0cyBkbyBtZWV0IHRoZSBwcmVkaWNhdGUpLlxuICAgKi9cbiAgcHVibGljIGZvcmFsbChwcmVkaWNhdGU6ICh2YWx1ZTogVCkgPT4gYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy50YWcgfHwgcHJlZGljYXRlKHRoaXMudmFsdWUgYXMgVCk7XG4gIH1cblxuICAvKipcbiAgICogRm9yIGEgZ2l2ZW4gcHJlZGljYXRlLCBjcmVhdGUgYSBuZXcgYE9wdGlvbmFsYCBvYmplY3QgdGhhdCB3aWxsIHJldGFpblxuICAgKiBhbGwgdGhlIHZhbHVlcyBpbnNpZGUgdGhlIG9sZCBgT3B0aW9uYWxgIG9iamVjdCB0aGF0IG1lZXQgdGhlIHByZWRpY2F0ZS5cbiAgICogSW4gcHJhY3RpY2UsIHRoZSBgT3B0aW9uYWxgIG9iamVjdCBjb250YWlucyBlaXRoZXIgMCBvciAxIG9iamVjdHMsIGFuZFxuICAgKiB0aGUgb3V0cHV0IHdpbGwga2VlcCB0aGUgKHNpbmdsZSkgaW5wdXQgb2JqZWN0IChpZiBpdCBleGlzdHMpIGFzIGxvbmcgYXNcbiAgICogaXQgcGFzc2VzIHRoZSBwcmVkaWNhdGUuXG4gICAqL1xuICBwdWJsaWMgZmlsdGVyPFUgZXh0ZW5kcyBUPihwcmVkaWNhdGU6ICh2YWx1ZTogVCkgPT4gdmFsdWUgaXMgVSk6IE9wdGlvbmFsPFU+O1xuICBwdWJsaWMgZmlsdGVyKHByZWRpY2F0ZTogKHZhbHVlOiBUKSA9PiBib29sZWFuKTogT3B0aW9uYWw8VD47XG4gIHB1YmxpYyBmaWx0ZXIocHJlZGljYXRlOiAodmFsdWU6IFQpID0+IGJvb2xlYW4pOiBPcHRpb25hbDxUPiB7XG4gICAgaWYgKCF0aGlzLnRhZyB8fCBwcmVkaWNhdGUodGhpcy52YWx1ZSBhcyBUKSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBPcHRpb25hbC5ub25lKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tIEdldHRlcnMgLS0tXG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdmFsdWUgb3V0IG9mIHRoZSBpbnNpZGUgb2YgdGhlIGBPcHRpb25hbGAgb2JqZWN0LCB1c2luZyBhIGRlZmF1bHRcbiAgICogYHJlcGxhY2VtZW50YCB2YWx1ZSBpZiB0aGUgcHJvdmlkZWQgYE9wdGlvbmFsYCBvYmplY3QgZG9lcyBub3QgY29udGFpbiBhXG4gICAqIHZhbHVlLlxuICAgKi9cbiAgcHVibGljIGdldE9yPFUgPSBUPihyZXBsYWNlbWVudDogVSk6IFQgfCBVIHtcbiAgICByZXR1cm4gdGhpcy50YWcgPyB0aGlzLnZhbHVlIGFzIFQgOiByZXBsYWNlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHZhbHVlIG91dCBvZiB0aGUgaW5zaWRlIG9mIHRoZSBgT3B0aW9uYWxgIG9iamVjdCwgdXNpbmcgYSBkZWZhdWx0XG4gICAqIGByZXBsYWNlbWVudGAgdmFsdWUgaWYgdGhlIHByb3ZpZGVkIGBPcHRpb25hbGAgb2JqZWN0IGRvZXMgbm90IGNvbnRhaW4gYVxuICAgKiB2YWx1ZS4gIFVubGlrZSBgZ2V0T3JgLCBpbiB0aGlzIG1ldGhvZCB0aGUgYHJlcGxhY2VtZW50YCBvYmplY3QgaXMgYWxzb1xuICAgKiBgT3B0aW9uYWxgIC0gbWVhbmluZyB0aGF0IHRoaXMgbWV0aG9kIHdpbGwgYWx3YXlzIHJldHVybiBhbiBgT3B0aW9uYWxgLlxuICAgKi9cbiAgcHVibGljIG9yPFUgPSBUPihyZXBsYWNlbWVudDogT3B0aW9uYWw8VT4pOiBPcHRpb25hbDxUIHwgVT4ge1xuICAgIHJldHVybiB0aGlzLnRhZyA/IHRoaXMgOiByZXBsYWNlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHZhbHVlIG91dCBvZiB0aGUgaW5zaWRlIG9mIHRoZSBgT3B0aW9uYWxgIG9iamVjdCwgdXNpbmcgYSBkZWZhdWx0XG4gICAqIGByZXBsYWNlbWVudGAgdmFsdWUgaWYgdGhlIHByb3ZpZGVkIGBPcHRpb25hbGAgb2JqZWN0IGRvZXMgbm90IGNvbnRhaW4gYVxuICAgKiB2YWx1ZS4gVW5saWtlIGBnZXRPcmAsIGluIHRoaXMgbWV0aG9kIHRoZSBgcmVwbGFjZW1lbnRgIHZhbHVlIGlzXG4gICAqIFwidGh1bmtlZFwiIC0gdGhhdCBpcyB0byBzYXkgdGhhdCB5b3UgZG9uJ3QgcGFzcyBhIHZhbHVlIHRvIGBnZXRPclRodW5rYCwgeW91XG4gICAqIHBhc3MgYSBmdW5jdGlvbiB3aGljaCAoaWYgY2FsbGVkKSB3aWxsICoqcmV0dXJuKiogdGhlIGB2YWx1ZWAgeW91IHdhbnQgdG9cbiAgICogdXNlLlxuICAgKi9cbiAgcHVibGljIGdldE9yVGh1bms8VSA9IFQ+KHRodW5rOiAoKSA9PiBVKTogVCB8IFUge1xuICAgIHJldHVybiB0aGlzLnRhZyA/IHRoaXMudmFsdWUgYXMgVCA6IHRodW5rKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB2YWx1ZSBvdXQgb2YgdGhlIGluc2lkZSBvZiB0aGUgYE9wdGlvbmFsYCBvYmplY3QsIHVzaW5nIGEgZGVmYXVsdFxuICAgKiBgcmVwbGFjZW1lbnRgIHZhbHVlIGlmIHRoZSBwcm92aWRlZCBPcHRpb25hbCBvYmplY3QgZG9lcyBub3QgY29udGFpbiBhXG4gICAqIHZhbHVlLlxuICAgKlxuICAgKiBVbmxpa2UgYG9yYCwgaW4gdGhpcyBtZXRob2QgdGhlIGByZXBsYWNlbWVudGAgdmFsdWUgaXMgXCJ0aHVua2VkXCIgLSB0aGF0IGlzXG4gICAqIHRvIHNheSB0aGF0IHlvdSBkb24ndCBwYXNzIGEgdmFsdWUgdG8gYG9yVGh1bmtgLCB5b3UgcGFzcyBhIGZ1bmN0aW9uIHdoaWNoXG4gICAqIChpZiBjYWxsZWQpIHdpbGwgKipyZXR1cm4qKiB0aGUgYHZhbHVlYCB5b3Ugd2FudCB0byB1c2UuXG4gICAqXG4gICAqIFVubGlrZSBgZ2V0T3JUaHVua2AsIGluIHRoaXMgbWV0aG9kIHRoZSBgcmVwbGFjZW1lbnRgIHZhbHVlIGlzIGFsc29cbiAgICogYE9wdGlvbmFsYCwgbWVhbmluZyB0aGF0IHRoaXMgbWV0aG9kIHdpbGwgYWx3YXlzIHJldHVybiBhbiBgT3B0aW9uYWxgLlxuICAgKi9cbiAgcHVibGljIG9yVGh1bms8VSA9IFQ+KHRodW5rOiAoKSA9PiBPcHRpb25hbDxVPik6IE9wdGlvbmFsPFQgfCBVPiB7XG4gICAgcmV0dXJuIHRoaXMudGFnID8gdGhpcyA6IHRodW5rKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB2YWx1ZSBvdXQgb2YgdGhlIGluc2lkZSBvZiB0aGUgYE9wdGlvbmFsYCBvYmplY3QsIHRocm93aW5nIGFuXG4gICAqIGV4Y2VwdGlvbiBpZiB0aGUgcHJvdmlkZWQgYE9wdGlvbmFsYCBvYmplY3QgZG9lcyBub3QgY29udGFpbiBhIHZhbHVlLlxuICAgKlxuICAgKiBXQVJOSU5HOlxuICAgKiBZb3Ugc2hvdWxkIG9ubHkgYmUgdXNpbmcgdGhpcyBmdW5jdGlvbiBpZiB5b3Uga25vdyB0aGF0IHRoZSBgT3B0aW9uYWxgXG4gICAqIG9iamVjdCAqKmlzIG5vdCoqIGVtcHR5IChvdGhlcndpc2UgeW91J3JlIHRocm93aW5nIGV4Y2VwdGlvbnMgaW4gcHJvZHVjdGlvblxuICAgKiBjb2RlLCB3aGljaCBpcyBiYWQpLlxuICAgKlxuICAgKiBJbiB0ZXN0cyB0aGlzIGlzIG1vcmUgYWNjZXB0YWJsZS5cbiAgICpcbiAgICogUHJlZmVyIG90aGVyIG1ldGhvZHMgdG8gdGhpcywgc3VjaCBhcyBgLmVhY2hgLlxuICAgKi9cbiAgcHVibGljIGdldE9yRGllKG1lc3NhZ2U/OiBzdHJpbmcpOiBUIHtcbiAgICBpZiAoIXRoaXMudGFnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSA/PyAnQ2FsbGVkIGdldE9yRGllIG9uIE5vbmUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWUgYXMgVDtcbiAgICB9XG4gIH1cblxuICAvLyAtLS0gSW50ZXJvcCB3aXRoIG51bGwgYW5kIHVuZGVmaW5lZCAtLS1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBgT3B0aW9uYWxgIHZhbHVlIGZyb20gYSBudWxsYWJsZSAob3IgdW5kZWZpbmVkLWFibGUpIGlucHV0LlxuICAgKiBOdWxsLCBvciB1bmRlZmluZWQsIGlzIGNvbnZlcnRlZCB0byBgTm9uZWAsIGFuZCBhbnl0aGluZyBlbHNlIGlzIGNvbnZlcnRlZFxuICAgKiB0byBgU29tZWAuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGZyb208VD4odGhpczogdm9pZCwgdmFsdWU6IFQgfCBudWxsIHwgdW5kZWZpbmVkKTogT3B0aW9uYWw8Tm9uTnVsbGFibGU8VD4+IHtcbiAgICByZXR1cm4gVHlwZS5pc05vbk51bGxhYmxlKHZhbHVlKSA/IE9wdGlvbmFsLnNvbWUodmFsdWUpIDogT3B0aW9uYWwubm9uZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGFuIGBPcHRpb25hbGAgdG8gYSBudWxsYWJsZSB0eXBlLCBieSBnZXR0aW5nIHRoZSB2YWx1ZSBpZiBpdFxuICAgKiBleGlzdHMsIG9yIHJldHVybmluZyBgbnVsbGAgaWYgaXQgZG9lcyBub3QuXG4gICAqL1xuICBwdWJsaWMgZ2V0T3JOdWxsKCk6IFQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy50YWcgPyB0aGlzLnZhbHVlIGFzIFQgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGFuIGBPcHRpb25hbGAgdG8gYW4gdW5kZWZpbmVkLWFibGUgdHlwZSwgYnkgZ2V0dGluZyB0aGUgdmFsdWUgaWZcbiAgICogaXQgZXhpc3RzLCBvciByZXR1cm5pbmcgYHVuZGVmaW5lZGAgaWYgaXQgZG9lcyBub3QuXG4gICAqL1xuICBwdWJsaWMgZ2V0T3JVbmRlZmluZWQoKTogVCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cblxuICAvLyAtLS0gVXRpbGl0aWVzIC0tLVxuXG4gIC8qKlxuICAgKiBJZiB0aGUgYE9wdGlvbmFsYCBjb250YWlucyBhIHZhbHVlLCBwZXJmb3JtIGFuIGFjdGlvbiBvbiB0aGF0IHZhbHVlLlxuICAgKiBVbmxpa2UgdGhlIHJlc3Qgb2YgdGhlIG1ldGhvZHMgb24gdGhpcyB0eXBlLCBgLmVhY2hgIGhhcyBzaWRlLWVmZmVjdHMuIElmXG4gICAqIHlvdSB3YW50IHRvIHRyYW5zZm9ybSBhbiBgT3B0aW9uYWw8VD5gICoqaW50byoqIHNvbWV0aGluZywgdGhlbiB0aGlzIGlzIG5vdFxuICAgKiB0aGUgbWV0aG9kIGZvciB5b3UuIElmIHlvdSB3YW50IHRvIHVzZSBhbiBgT3B0aW9uYWw8VD5gIHRvICoqZG8qKlxuICAgKiBzb21ldGhpbmcsIHRoZW4gdGhpcyBpcyB0aGUgbWV0aG9kIGZvciB5b3UgLSBwcm92aWRlZCB5b3UncmUgb2theSB3aXRoIG5vdFxuICAgKiBkb2luZyBhbnl0aGluZyBpbiB0aGUgY2FzZSB3aGVyZSB0aGUgYE9wdGlvbmFsYCBkb2Vzbid0IGhhdmUgYSB2YWx1ZSBpbnNpZGVcbiAgICogaXQuIElmIHlvdSdyZSBub3Qgc3VyZSB3aGV0aGVyIHlvdXIgdXNlLWNhc2UgZml0cyBpbnRvIHRyYW5zZm9ybWluZ1xuICAgKiAqKmludG8qKiBzb21ldGhpbmcgb3IgKipkb2luZyoqIHNvbWV0aGluZywgY2hlY2sgd2hldGhlciBpdCBoYXMgYSByZXR1cm5cbiAgICogdmFsdWUuIElmIGl0IGRvZXMsIHlvdSBzaG91bGQgYmUgcGVyZm9ybWluZyBhIHRyYW5zZm9ybS5cbiAgICovXG4gIHB1YmxpYyBlYWNoKHdvcmtlcjogKHZhbHVlOiBUKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudGFnKSB7XG4gICAgICB3b3JrZXIodGhpcy52YWx1ZSBhcyBUKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVHVybiB0aGUgYE9wdGlvbmFsYCBvYmplY3QgaW50byBhbiBhcnJheSB0aGF0IGNvbnRhaW5zIGFsbCBvZiB0aGUgdmFsdWVzXG4gICAqIHN0b3JlZCBpbnNpZGUgdGhlIGBPcHRpb25hbGAuIEluIHByYWN0aWNlLCB0aGlzIG1lYW5zIHRoZSBvdXRwdXQgd2lsbCBoYXZlXG4gICAqIGVpdGhlciAwIG9yIDEgZWxlbWVudHMuXG4gICAqL1xuICBwdWJsaWMgdG9BcnJheSgpOiBUW10ge1xuICAgIHJldHVybiB0aGlzLnRhZyA/IFsgdGhpcy52YWx1ZSBhcyBUIF0gOiBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUdXJuIHRoZSBgT3B0aW9uYWxgIG9iamVjdCBpbnRvIGEgc3RyaW5nIGZvciBkZWJ1Z2dpbmcgb3IgcHJpbnRpbmcuIE5vdFxuICAgKiByZWNvbW1lbmRlZCBmb3IgcHJvZHVjdGlvbiBjb2RlLCBidXQgZ29vZCBmb3IgZGVidWdnaW5nLiBBbHNvIG5vdGUgdGhhdFxuICAgKiB0aGVzZSBkYXlzIGFuIGBPcHRpb25hbGAgb2JqZWN0IGNhbiBiZSBsb2dnZWQgdG8gdGhlIGNvbnNvbGUgZGlyZWN0bHksIGFuZFxuICAgKiBpdHMgaW5uZXIgdmFsdWUgKGlmIGl0IGV4aXN0cykgd2lsbCBiZSB2aXNpYmxlLlxuICAgKi9cbiAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudGFnID8gYHNvbWUoJHt0aGlzLnZhbHVlfSlgIDogJ25vbmUoKSc7XG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIFN0ckFwcGVuZCBmcm9tICcuLi9zdHIvU3RyQXBwZW5kJztcblxuaW1wb3J0IHsgT3B0aW9uYWwgfSBmcm9tICcuL09wdGlvbmFsJztcbmltcG9ydCAqIGFzIFR5cGUgZnJvbSAnLi9UeXBlJztcblxuY29uc3QgY2hlY2tSYW5nZSA9IChzdHI6IHN0cmluZywgc3Vic3RyOiBzdHJpbmcsIHN0YXJ0OiBudW1iZXIpOiBib29sZWFuID0+XG4gIHN1YnN0ciA9PT0gJycgfHwgc3RyLmxlbmd0aCA+PSBzdWJzdHIubGVuZ3RoICYmIHN0ci5zdWJzdHIoc3RhcnQsIHN0YXJ0ICsgc3Vic3RyLmxlbmd0aCkgPT09IHN1YnN0cjtcblxuLyoqIEdpdmVuIGEgc3RyaW5nIGFuZCBvYmplY3QsIHBlcmZvcm0gdGVtcGxhdGUtcmVwbGFjZW1lbnRzIG9uIHRoZSBzdHJpbmcsIGFzIHNwZWNpZmllZCBieSB0aGUgb2JqZWN0LlxuICogQW55IHRlbXBsYXRlIGZpZWxkcyBvZiB0aGUgZm9ybSAke25hbWV9IGFyZSByZXBsYWNlZCBieSB0aGUgc3RyaW5nIG9yIG51bWJlciBzcGVjaWZpZWQgYXMgb2JqW1wibmFtZVwiXVxuICogQmFzZWQgb24gRG91Z2xhcyBDcm9ja2ZvcmQncyAnc3VwcGxhbnQnIG1ldGhvZCBmb3IgdGVtcGxhdGUtcmVwbGFjZSBvZiBzdHJpbmdzLiBVc2VzIGRpZmZlcmVudCB0ZW1wbGF0ZSBmb3JtYXQuXG4gKi9cbmV4cG9ydCBjb25zdCBzdXBwbGFudCA9IChzdHI6IHN0cmluZywgb2JqOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudW1iZXI+KTogc3RyaW5nID0+IHtcbiAgY29uc3QgaXNTdHJpbmdPck51bWJlciA9IChhOiB1bmtub3duKTogYSBpcyBzdHJpbmcgfCBudW1iZXIgPT4ge1xuICAgIGNvbnN0IHQgPSB0eXBlb2YgYTtcbiAgICByZXR1cm4gdCA9PT0gJ3N0cmluZycgfHwgdCA9PT0gJ251bWJlcic7XG4gIH07XG5cbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXCRcXHsoW157fV0qKVxcfS9nLFxuICAgIChmdWxsTWF0Y2g6IHN0cmluZywga2V5OiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gb2JqW2tleV07XG4gICAgICByZXR1cm4gaXNTdHJpbmdPck51bWJlcih2YWx1ZSkgPyB2YWx1ZS50b1N0cmluZygpIDogZnVsbE1hdGNoO1xuICAgIH1cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVMZWFkaW5nID0gKHN0cjogc3RyaW5nLCBwcmVmaXg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBzdGFydHNXaXRoKHN0ciwgcHJlZml4KSA/IFN0ckFwcGVuZC5yZW1vdmVGcm9tU3RhcnQoc3RyLCBwcmVmaXgubGVuZ3RoKSA6IHN0cjtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVUcmFpbGluZyA9IChzdHI6IHN0cmluZywgc3VmZml4OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gZW5kc1dpdGgoc3RyLCBzdWZmaXgpID8gU3RyQXBwZW5kLnJlbW92ZUZyb21FbmQoc3RyLCBzdWZmaXgubGVuZ3RoKSA6IHN0cjtcbn07XG5cbmV4cG9ydCBjb25zdCBlbnN1cmVMZWFkaW5nID0gKHN0cjogc3RyaW5nLCBwcmVmaXg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBzdGFydHNXaXRoKHN0ciwgcHJlZml4KSA/IHN0ciA6IFN0ckFwcGVuZC5hZGRUb1N0YXJ0KHN0ciwgcHJlZml4KTtcbn07XG5cbmV4cG9ydCBjb25zdCBlbnN1cmVUcmFpbGluZyA9IChzdHI6IHN0cmluZywgc3VmZml4OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gZW5kc1dpdGgoc3RyLCBzdWZmaXgpID8gc3RyIDogU3RyQXBwZW5kLmFkZFRvRW5kKHN0ciwgc3VmZml4KTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb250YWlucyA9IChzdHI6IHN0cmluZywgc3Vic3RyOiBzdHJpbmcsIHN0YXJ0OiBudW1iZXIgPSAwLCBlbmQ/OiBudW1iZXIpOiBib29sZWFuID0+IHtcbiAgY29uc3QgaWR4ID0gc3RyLmluZGV4T2Yoc3Vic3RyLCBzdGFydCk7XG4gIGlmIChpZHggIT09IC0xKSB7XG4gICAgcmV0dXJuIFR5cGUuaXNVbmRlZmluZWQoZW5kKSA/IHRydWUgOiBpZHggKyBzdWJzdHIubGVuZ3RoIDw9IGVuZDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBjYXBpdGFsaXplID0gKHN0cjogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIHN0ciA9PT0gJycgPyAnJyA6IHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zdWJzdHJpbmcoMSk7XG59O1xuXG4vKiogRG9lcyAnc3RyJyBzdGFydCB3aXRoICdwcmVmaXgnP1xuICogIE5vdGU6IGFsbCBzdHJpbmdzIHN0YXJ0IHdpdGggdGhlIGVtcHR5IHN0cmluZy5cbiAqICAgICAgICBNb3JlIGZvcm1hbGx5LCBmb3IgYWxsIHN0cmluZ3MgeCwgc3RhcnRzV2l0aCh4LCBcIlwiKS5cbiAqICAgICAgICBUaGlzIGlzIHNvIHRoYXQgZm9yIGFsbCBzdHJpbmdzIHggYW5kIHksIHN0YXJ0c1dpdGgoeSArIHgsIHkpXG4gKi9cbmV4cG9ydCBjb25zdCBzdGFydHNXaXRoID0gKHN0cjogc3RyaW5nLCBwcmVmaXg6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gY2hlY2tSYW5nZShzdHIsIHByZWZpeCwgMCk7XG59O1xuXG4vKiogRG9lcyAnc3RyJyBlbmQgd2l0aCAnc3VmZml4Jz9cbiAqICBOb3RlOiBhbGwgc3RyaW5ncyBlbmQgd2l0aCB0aGUgZW1wdHkgc3RyaW5nLlxuICogICAgICAgIE1vcmUgZm9ybWFsbHksIGZvciBhbGwgc3RyaW5ncyB4LCBlbmRzV2l0aCh4LCBcIlwiKS5cbiAqICAgICAgICBUaGlzIGlzIHNvIHRoYXQgZm9yIGFsbCBzdHJpbmdzIHggYW5kIHksIGVuZHNXaXRoKHggKyB5LCB5KVxuICovXG5leHBvcnQgY29uc3QgZW5kc1dpdGggPSAoc3RyOiBzdHJpbmcsIHN1ZmZpeDogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gIHJldHVybiBjaGVja1JhbmdlKHN0ciwgc3VmZml4LCBzdHIubGVuZ3RoIC0gc3VmZml4Lmxlbmd0aCk7XG59O1xuXG5jb25zdCBibGFuayA9IChyOiBSZWdFeHApID0+IChzOiBzdHJpbmcpOiBzdHJpbmcgPT5cbiAgcy5yZXBsYWNlKHIsICcnKTtcblxuLyoqIHJlbW92ZXMgYWxsIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHNwYWNlcyAqL1xuZXhwb3J0IGNvbnN0IHRyaW06IChzOiBzdHJpbmcpID0+IHN0cmluZyA9XG4gIGJsYW5rKC9eXFxzK3xcXHMrJC9nKTtcblxuZXhwb3J0IGNvbnN0IGxUcmltOiAoczogc3RyaW5nKSA9PiBzdHJpbmcgPVxuICBibGFuaygvXlxccysvZyk7XG5cbmV4cG9ydCBjb25zdCByVHJpbTogKHM6IHN0cmluZykgPT4gc3RyaW5nID1cbiAgYmxhbmsoL1xccyskL2cpO1xuXG5leHBvcnQgY29uc3QgaXNOb3RFbXB0eSA9IChzOiBzdHJpbmcpOiBib29sZWFuID0+IHMubGVuZ3RoID4gMDtcblxuZXhwb3J0IGNvbnN0IGlzRW1wdHkgPSAoczogc3RyaW5nKTogYm9vbGVhbiA9PiAhaXNOb3RFbXB0eShzKTtcblxuZXhwb3J0IGNvbnN0IHJlcGVhdCA9IChzOiBzdHJpbmcsIGNvdW50OiBudW1iZXIpOiBzdHJpbmcgPT4gY291bnQgPD0gMCA/ICcnIDogbmV3IEFycmF5KGNvdW50ICsgMSkuam9pbihzKTtcblxuZXhwb3J0IGNvbnN0IGZyb21Db2RlUG9pbnQgPSBTdHJpbmcuZnJvbUNvZGVQb2ludDtcblxuZXhwb3J0IGNvbnN0IHRvSW50ID0gKHZhbHVlOiBzdHJpbmcsIHJhZGl4OiBudW1iZXIgPSAxMCk6IE9wdGlvbmFsPG51bWJlcj4gPT4ge1xuICBjb25zdCBudW0gPSBwYXJzZUludCh2YWx1ZSwgcmFkaXgpO1xuICByZXR1cm4gaXNOYU4obnVtKSA/IE9wdGlvbmFsLm5vbmUoKSA6IE9wdGlvbmFsLnNvbWUobnVtKTtcbn07XG5cbmV4cG9ydCBjb25zdCB0b0Zsb2F0ID0gKHZhbHVlOiBzdHJpbmcpOiBPcHRpb25hbDxudW1iZXI+ID0+IHtcbiAgY29uc3QgbnVtID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gIHJldHVybiBpc05hTihudW0pID8gT3B0aW9uYWwubm9uZSgpIDogT3B0aW9uYWwuc29tZShudW0pO1xufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby13cmFwcGVyLW9iamVjdC10eXBlcyAqL1xuY29uc3QgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG5cbmludGVyZmFjZSBDb25zdHJ1Y3RvcjxUIGV4dGVuZHMgT2JqZWN0PiB7XG4gIHJlYWRvbmx5IHByb3RvdHlwZTogVDtcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xufVxuXG5jb25zdCBoYXNQcm90byA9IDxUIGV4dGVuZHMgT2JqZWN0Pih2OiBPYmplY3QsIGNvbnN0cnVjdG9yOiBDb25zdHJ1Y3RvcjxUPiwgcHJlZGljYXRlOiAodjogT2JqZWN0LCBwcm90b3R5cGU6IFQpID0+IGJvb2xlYW4pOiBib29sZWFuID0+IHtcbiAgaWYgKHByZWRpY2F0ZSh2LCBjb25zdHJ1Y3Rvci5wcm90b3R5cGUpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgLy8gU3RyaW5nLWJhc2VkIGZhbGxiYWNrIHRpbWVcbiAgICByZXR1cm4gdi5jb25zdHJ1Y3Rvcj8ubmFtZSA9PT0gY29uc3RydWN0b3IubmFtZTtcbiAgfVxufTtcblxuY29uc3QgdHlwZU9mID0gKHg6IGFueSk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IHQgPSB0eXBlb2YgeDtcbiAgaWYgKHggPT09IG51bGwpIHtcbiAgICByZXR1cm4gJ251bGwnO1xuICB9IGVsc2UgaWYgKHQgPT09ICdvYmplY3QnICYmIEFycmF5LmlzQXJyYXkoeCkpIHtcbiAgICByZXR1cm4gJ2FycmF5JztcbiAgfSBlbHNlIGlmICh0ID09PSAnb2JqZWN0JyAmJiBoYXNQcm90byh4LCBTdHJpbmcsIChvLCBwcm90bykgPT4gcHJvdG8uaXNQcm90b3R5cGVPZihvKSkpIHtcbiAgICByZXR1cm4gJ3N0cmluZyc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHQ7XG4gIH1cbn07XG5cbmNvbnN0IGlzVHlwZSA9IDxZb2xvPih0eXBlOiBzdHJpbmcpID0+ICh2YWx1ZTogYW55KTogdmFsdWUgaXMgWW9sbyA9PlxuICB0eXBlT2YodmFsdWUpID09PSB0eXBlO1xuXG5jb25zdCBpc1NpbXBsZVR5cGUgPSA8WW9sbz4odHlwZTogc3RyaW5nKSA9PiAodmFsdWU6IGFueSk6IHZhbHVlIGlzIFlvbG8gPT5cbiAgdHlwZW9mIHZhbHVlID09PSB0eXBlO1xuXG5jb25zdCBlcSA9IDxUPiAodDogVCkgPT4gKGE6IGFueSk6IGEgaXMgVCA9PlxuICB0ID09PSBhO1xuXG5leHBvcnQgY29uc3QgaXMgPSA8RSBleHRlbmRzIE9iamVjdD4odmFsdWU6IGFueSwgY29uc3RydWN0b3I6IENvbnN0cnVjdG9yPEU+KTogdmFsdWUgaXMgRSA9PlxuICBpc09iamVjdCh2YWx1ZSkgJiYgaGFzUHJvdG88RT4odmFsdWUsIGNvbnN0cnVjdG9yLCAobywgcHJvdG8pID0+IGdldFByb3RvdHlwZU9mKG8pID09PSBwcm90byk7XG5cbmV4cG9ydCBjb25zdCBpc1N0cmluZzogKHZhbHVlOiBhbnkpID0+IHZhbHVlIGlzIHN0cmluZyA9XG4gIGlzVHlwZSgnc3RyaW5nJyk7XG5cbmV4cG9ydCBjb25zdCBpc09iamVjdDogKHZhbHVlOiBhbnkpID0+IHZhbHVlIGlzIE9iamVjdCA9XG4gIGlzVHlwZSgnb2JqZWN0Jyk7XG5cbmV4cG9ydCBjb25zdCBpc1BsYWluT2JqZWN0ID0gKHZhbHVlOiB1bmtub3duKTogdmFsdWUgaXMgT2JqZWN0ID0+XG4gIGlzKHZhbHVlLCBPYmplY3QpO1xuXG5leHBvcnQgY29uc3QgaXNBcnJheTogKHZhbHVlOiBhbnkpID0+IHZhbHVlIGlzIEFycmF5PHVua25vd24+ID1cbiAgaXNUeXBlKCdhcnJheScpO1xuXG5leHBvcnQgY29uc3QgaXNOdWxsOiAoYTogYW55KSA9PiBhIGlzIG51bGwgPVxuICBlcShudWxsKTtcblxuZXhwb3J0IGNvbnN0IGlzQm9vbGVhbjogKHZhbHVlOiBhbnkpID0+IHZhbHVlIGlzIGJvb2xlYW4gPVxuICBpc1NpbXBsZVR5cGU8Ym9vbGVhbj4oJ2Jvb2xlYW4nKTtcblxuZXhwb3J0IGNvbnN0IGlzVW5kZWZpbmVkOiAoYTogYW55KSA9PiBhIGlzIHVuZGVmaW5lZCA9XG4gIGVxKHVuZGVmaW5lZCk7XG5cbmV4cG9ydCBjb25zdCBpc051bGxhYmxlID0gKGE6IGFueSk6IGEgaXMgbnVsbCB8IHVuZGVmaW5lZCA9PlxuICBhID09PSBudWxsIHx8IGEgPT09IHVuZGVmaW5lZDtcblxuZXhwb3J0IGNvbnN0IGlzTm9uTnVsbGFibGUgPSA8QT4gKGE6IEEgfCBudWxsIHwgdW5kZWZpbmVkKTogYSBpcyBOb25OdWxsYWJsZTxBPiA9PlxuICAhaXNOdWxsYWJsZShhKTtcblxuZXhwb3J0IGNvbnN0IGlzRnVuY3Rpb246ICh2YWx1ZTogYW55KSA9PiB2YWx1ZSBpcyBGdW5jdGlvbiA9XG4gIGlzU2ltcGxlVHlwZTxGdW5jdGlvbj4oJ2Z1bmN0aW9uJyk7XG5cbmV4cG9ydCBjb25zdCBpc051bWJlcjogKHZhbHVlOiBhbnkpID0+IHZhbHVlIGlzIG51bWJlciA9XG4gIGlzU2ltcGxlVHlwZTxudW1iZXI+KCdudW1iZXInKTtcblxuZXhwb3J0IGNvbnN0IGlzQXJyYXlPZiA9IDxFPih2YWx1ZTogYW55LCBwcmVkOiAoeDogYW55KSA9PiB4IGlzIEUpOiB2YWx1ZSBpcyBBcnJheTxFPiA9PiB7XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB2YWx1ZS5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgaWYgKCEocHJlZCh2YWx1ZVtpXSkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzUHJvbWlzZUxpa2UgPSAoeDogYW55KTogeCBpcyBQcm9taXNlPHVua25vd24+ID0+XG4gIGlzT2JqZWN0KHgpXG4gICYmIGlzRnVuY3Rpb24oeC50aGVuKVxuICAmJiBpc0Z1bmN0aW9uKHguY2F0Y2gpO1xuIiwiZXhwb3J0IGNvbnN0IGFkZFRvU3RhcnQgPSAoc3RyOiBzdHJpbmcsIHByZWZpeDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIHByZWZpeCArIHN0cjtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRUb0VuZCA9IChzdHI6IHN0cmluZywgc3VmZml4OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gc3RyICsgc3VmZml4O1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUZyb21TdGFydCA9IChzdHI6IHN0cmluZywgbnVtQ2hhcnM6IG51bWJlcik6IHN0cmluZyA9PiB7XG4gIHJldHVybiBzdHIuc3Vic3RyaW5nKG51bUNoYXJzKTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVGcm9tRW5kID0gKHN0cjogc3RyaW5nLCBudW1DaGFyczogbnVtYmVyKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIHN0ci5zdWJzdHJpbmcoMCwgc3RyLmxlbmd0aCAtIG51bUNoYXJzKTtcbn07XG4iLCJpbXBvcnQgUGx1Z2luTWFuYWdlciBmcm9tICd0aW55bWNlL2NvcmUvYXBpL1BsdWdpbk1hbmFnZXInO1xuXG5pbXBvcnQgKiBhcyBDb21tYW5kcyBmcm9tICcuL2FwaS9Db21tYW5kcyc7XG5pbXBvcnQgKiBhcyBPcHRpb25zIGZyb20gJy4vYXBpL09wdGlvbnMnO1xuaW1wb3J0ICogYXMgRmlsdGVyQ29udGVudCBmcm9tICcuL2NvcmUvRmlsdGVyQ29udGVudCc7XG5pbXBvcnQgKiBhcyBCdXR0b25zIGZyb20gJy4vdWkvQnV0dG9ucyc7XG5pbXBvcnQgKiBhcyBEaWFsb2cgZnJvbSAnLi91aS9EaWFsb2cnO1xuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnLi91dGlsL1V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgKCk6IHZvaWQgPT4ge1xuICBQbHVnaW5NYW5hZ2VyLmFkZCgnY29kZXNhbXBsZScsIChlZGl0b3IpID0+IHtcbiAgICBPcHRpb25zLnJlZ2lzdGVyKGVkaXRvcik7XG4gICAgRmlsdGVyQ29udGVudC5zZXR1cChlZGl0b3IpO1xuICAgIEJ1dHRvbnMucmVnaXN0ZXIoZWRpdG9yKTtcbiAgICBDb21tYW5kcy5yZWdpc3RlcihlZGl0b3IpO1xuXG4gICAgZWRpdG9yLm9uKCdkYmxjbGljaycsIChldikgPT4ge1xuICAgICAgaWYgKFV0aWxzLmlzQ29kZVNhbXBsZShldi50YXJnZXQpKSB7XG4gICAgICAgIERpYWxvZy5vcGVuKGVkaXRvcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcbiIsImltcG9ydCB0eXBlIEVkaXRvciBmcm9tICd0aW55bWNlL2NvcmUvYXBpL0VkaXRvcic7XG5cbmltcG9ydCAqIGFzIERpYWxvZyBmcm9tICcuLi91aS9EaWFsb2cnO1xuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnLi4vdXRpbC9VdGlscyc7XG5cbmNvbnN0IHJlZ2lzdGVyID0gKGVkaXRvcjogRWRpdG9yKTogdm9pZCA9PiB7XG4gIGVkaXRvci5hZGRDb21tYW5kKCdjb2Rlc2FtcGxlJywgKCkgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBlZGl0b3Iuc2VsZWN0aW9uLmdldE5vZGUoKTtcbiAgICBpZiAoZWRpdG9yLnNlbGVjdGlvbi5pc0NvbGxhcHNlZCgpIHx8IFV0aWxzLmlzQ29kZVNhbXBsZShub2RlKSkge1xuICAgICAgRGlhbG9nLm9wZW4oZWRpdG9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWRpdG9yLmZvcm1hdHRlci50b2dnbGUoJ2NvZGUnKTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IHtcbiAgcmVnaXN0ZXJcbn07XG4iLCJpbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuaW1wb3J0IHR5cGUgeyBFZGl0b3JPcHRpb25zIH0gZnJvbSAndGlueW1jZS9jb3JlL2FwaS9PcHRpb25UeXBlcyc7XG5cbmltcG9ydCB0eXBlIHsgTGFuZ3VhZ2VTcGVjIH0gZnJvbSAnLi4vY29yZS9MYW5ndWFnZXMnO1xuXG5jb25zdCBvcHRpb246IHtcbiAgPEsgZXh0ZW5kcyBrZXlvZiBFZGl0b3JPcHRpb25zPihuYW1lOiBLKTogKGVkaXRvcjogRWRpdG9yKSA9PiBFZGl0b3JPcHRpb25zW0tdO1xuICA8VD4obmFtZTogc3RyaW5nKTogKGVkaXRvcjogRWRpdG9yKSA9PiBUO1xufSA9IChuYW1lOiBzdHJpbmcpID0+IChlZGl0b3I6IEVkaXRvcikgPT5cbiAgZWRpdG9yLm9wdGlvbnMuZ2V0KG5hbWUpO1xuXG5jb25zdCByZWdpc3RlciA9IChlZGl0b3I6IEVkaXRvcik6IHZvaWQgPT4ge1xuICBjb25zdCByZWdpc3Rlck9wdGlvbiA9IGVkaXRvci5vcHRpb25zLnJlZ2lzdGVyO1xuXG4gIHJlZ2lzdGVyT3B0aW9uKCdjb2Rlc2FtcGxlX2xhbmd1YWdlcycsIHtcbiAgICBwcm9jZXNzb3I6ICdvYmplY3RbXSdcbiAgfSk7XG5cbiAgcmVnaXN0ZXJPcHRpb24oJ2NvZGVzYW1wbGVfZ2xvYmFsX3ByaXNtanMnLCB7XG4gICAgcHJvY2Vzc29yOiAnYm9vbGVhbicsXG4gICAgZGVmYXVsdDogZmFsc2VcbiAgfSk7XG59O1xuXG5jb25zdCBnZXRMYW5ndWFnZXMgPSBvcHRpb248TGFuZ3VhZ2VTcGVjW10gfCB1bmRlZmluZWQ+KCdjb2Rlc2FtcGxlX2xhbmd1YWdlcycpO1xuY29uc3QgdXNlR2xvYmFsUHJpc21KUyA9IG9wdGlvbjxib29sZWFuPignY29kZXNhbXBsZV9nbG9iYWxfcHJpc21qcycpO1xuXG5leHBvcnQge1xuICByZWdpc3RlcixcbiAgZ2V0TGFuZ3VhZ2VzLFxuICB1c2VHbG9iYWxQcmlzbUpTXG59O1xuIiwiaW1wb3J0IHsgT3B0aW9uYWwgfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5pbXBvcnQgRE9NVXRpbHMgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9kb20vRE9NVXRpbHMnO1xuaW1wb3J0IHR5cGUgRWRpdG9yIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvRWRpdG9yJztcblxuaW1wb3J0ICogYXMgUHJpc20gZnJvbSAnLi4vcHJpc20vUHJpc20nO1xuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnLi4vdXRpbC9VdGlscyc7XG5cbmNvbnN0IGdldFNlbGVjdGVkQ29kZVNhbXBsZSA9IChlZGl0b3I6IEVkaXRvcik6IE9wdGlvbmFsPEhUTUxQcmVFbGVtZW50PiA9PiB7XG4gIGNvbnN0IG5vZGUgPSBlZGl0b3Iuc2VsZWN0aW9uID8gZWRpdG9yLnNlbGVjdGlvbi5nZXROb2RlKCkgOiBudWxsO1xuICByZXR1cm4gVXRpbHMuaXNDb2RlU2FtcGxlKG5vZGUpID8gT3B0aW9uYWwuc29tZShub2RlKSA6IE9wdGlvbmFsLm5vbmUoKTtcbn07XG5cbmNvbnN0IGluc2VydENvZGVTYW1wbGUgPSAoZWRpdG9yOiBFZGl0b3IsIGxhbmd1YWdlOiBzdHJpbmcsIGNvZGU6IHN0cmluZyk6IHZvaWQgPT4ge1xuICBjb25zdCBkb20gPSBlZGl0b3IuZG9tO1xuICBlZGl0b3IudW5kb01hbmFnZXIudHJhbnNhY3QoKCkgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBnZXRTZWxlY3RlZENvZGVTYW1wbGUoZWRpdG9yKTtcblxuICAgIGNvZGUgPSBET01VdGlscy5ET00uZW5jb2RlKGNvZGUpO1xuXG4gICAgcmV0dXJuIG5vZGUuZm9sZCgoKSA9PiB7XG4gICAgICBlZGl0b3IuaW5zZXJ0Q29udGVudCgnPHByZSBpZD1cIl9fbmV3XCIgY2xhc3M9XCJsYW5ndWFnZS0nICsgbGFuZ3VhZ2UgKyAnXCI+JyArIGNvZGUgKyAnPC9wcmU+Jyk7XG4gICAgICBjb25zdCBuZXdQcmUgPSBkb20uc2VsZWN0KCcjX19uZXcnKVswXTtcbiAgICAgIGRvbS5zZXRBdHRyaWIobmV3UHJlLCAnaWQnLCBudWxsKTtcbiAgICAgIGVkaXRvci5zZWxlY3Rpb24uc2VsZWN0KG5ld1ByZSk7XG4gICAgfSwgKG4pID0+IHtcbiAgICAgIGRvbS5zZXRBdHRyaWIobiwgJ2NsYXNzJywgJ2xhbmd1YWdlLScgKyBsYW5ndWFnZSk7XG4gICAgICBuLmlubmVySFRNTCA9IGNvZGU7XG4gICAgICBQcmlzbS5nZXQoZWRpdG9yKS5oaWdobGlnaHRFbGVtZW50KG4pO1xuICAgICAgZWRpdG9yLnNlbGVjdGlvbi5zZWxlY3Qobik7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgZ2V0Q3VycmVudENvZGUgPSAoZWRpdG9yOiBFZGl0b3IpOiBzdHJpbmcgPT4ge1xuICBjb25zdCBub2RlID0gZ2V0U2VsZWN0ZWRDb2RlU2FtcGxlKGVkaXRvcik7XG4gIHJldHVybiBub2RlLmJpbmQoKG4pID0+IE9wdGlvbmFsLmZyb20obi50ZXh0Q29udGVudCkpLmdldE9yKCcnKTtcbn07XG5cbmV4cG9ydCB7XG4gIGdldFNlbGVjdGVkQ29kZVNhbXBsZSxcbiAgaW5zZXJ0Q29kZVNhbXBsZSxcbiAgZ2V0Q3VycmVudENvZGVcbn07XG4iLCJpbXBvcnQgeyBTdHJpbmdzIH0gZnJvbSAnQGVwaG94L2thdGFtYXJpJztcblxuaW1wb3J0IHR5cGUgRWRpdG9yIGZyb20gJ3RpbnltY2UvY29yZS9hcGkvRWRpdG9yJztcbmltcG9ydCBUb29scyBmcm9tICd0aW55bWNlL2NvcmUvYXBpL3V0aWwvVG9vbHMnO1xuXG5pbXBvcnQgKiBhcyBQcmlzbSBmcm9tICcuLi9wcmlzbS9QcmlzbSc7XG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuLi91dGlsL1V0aWxzJztcblxuY29uc3Qgc2V0dXAgPSAoZWRpdG9yOiBFZGl0b3IpOiB2b2lkID0+IHtcbiAgZWRpdG9yLm9uKCdQcmVQcm9jZXNzJywgKGUpID0+IHtcbiAgICBjb25zdCBkb20gPSBlZGl0b3IuZG9tO1xuICAgIGNvbnN0IHByZXMgPSBkb20uc2VsZWN0KCdwcmVbY29udGVudGVkaXRhYmxlPWZhbHNlXScsIGUubm9kZSk7XG4gICAgVG9vbHMuZWFjaChUb29scy5ncmVwPEhUTUxFbGVtZW50PihwcmVzLCBVdGlscy5pc0NvZGVTYW1wbGUpLCAoZWxtKSA9PiB7XG4gICAgICBjb25zdCBjb2RlID0gZWxtLnRleHRDb250ZW50O1xuXG4gICAgICBkb20uc2V0QXR0cmliKGVsbSwgJ2NsYXNzJywgU3RyaW5ncy50cmltKGRvbS5nZXRBdHRyaWIoZWxtLCAnY2xhc3MnKSkpO1xuICAgICAgZG9tLnNldEF0dHJpYihlbG0sICdjb250ZW50RWRpdGFibGUnLCBudWxsKTtcbiAgICAgIGRvbS5zZXRBdHRyaWIoZWxtLCAnZGF0YS1tY2UtaGlnaGxpZ2h0ZWQnLCBudWxsKTtcblxuICAgICAgLy8gRW1wdHkgdGhlIHByZSBlbGVtZW50XG4gICAgICBsZXQgY2hpbGQ6IE5vZGUgfCBudWxsO1xuICAgICAgd2hpbGUgKChjaGlsZCA9IGVsbS5maXJzdENoaWxkKSkge1xuICAgICAgICBlbG0ucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjb2RlRWxtID0gZG9tLmFkZChlbG0sICdjb2RlJyk7XG4gICAgICAvLyBOZWVkcyB0byBiZSB0ZXh0Q29udGVudCBzaW5jZSBpbm5lclRleHQgcHJvZHVjZXMgQlI6c1xuICAgICAgY29kZUVsbS50ZXh0Q29udGVudCA9IGNvZGU7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGVkaXRvci5vbignU2V0Q29udGVudCcsICgpID0+IHtcbiAgICBjb25zdCBkb20gPSBlZGl0b3IuZG9tO1xuICAgIGNvbnN0IHVucHJvY2Vzc2VkQ29kZVNhbXBsZXMgPSBUb29scy5ncmVwKGRvbS5zZWxlY3QoJ3ByZScpLCAoZWxtKSA9PiB7XG4gICAgICByZXR1cm4gVXRpbHMuaXNDb2RlU2FtcGxlKGVsbSkgJiYgZG9tLmdldEF0dHJpYihlbG0sICdkYXRhLW1jZS1oaWdobGlnaHRlZCcpICE9PSAndHJ1ZSc7XG4gICAgfSk7XG5cbiAgICBpZiAodW5wcm9jZXNzZWRDb2RlU2FtcGxlcy5sZW5ndGgpIHtcbiAgICAgIGVkaXRvci51bmRvTWFuYWdlci50cmFuc2FjdCgoKSA9PiB7XG4gICAgICAgIFRvb2xzLmVhY2godW5wcm9jZXNzZWRDb2RlU2FtcGxlcywgKGVsbSkgPT4ge1xuICAgICAgICAgIFRvb2xzLmVhY2goZG9tLnNlbGVjdCgnYnInLCBlbG0pLCAoZWxtKSA9PiB7XG4gICAgICAgICAgICBkb20ucmVwbGFjZShlZGl0b3IuZ2V0RG9jKCkuY3JlYXRlVGV4dE5vZGUoJ1xcbicpLCBlbG0pO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgZWxtLmlubmVySFRNTCA9IGRvbS5lbmNvZGUoZWxtLnRleHRDb250ZW50ID8/ICcnKTtcbiAgICAgICAgICBQcmlzbS5nZXQoZWRpdG9yKS5oaWdobGlnaHRFbGVtZW50KGVsbSk7XG4gICAgICAgICAgZG9tLnNldEF0dHJpYihlbG0sICdkYXRhLW1jZS1oaWdobGlnaHRlZCcsIHRydWUpO1xuICAgICAgICAgIGVsbS5jbGFzc05hbWUgPSBTdHJpbmdzLnRyaW0oZWxtLmNsYXNzTmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICBlZGl0b3Iub24oJ1ByZUluaXQnLCAoKSA9PiB7XG4gICAgZWRpdG9yLnBhcnNlci5hZGROb2RlRmlsdGVyKCdwcmUnLCAobm9kZXMpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gbm9kZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgICAgY29uc3QgaXNDb2RlU2FtcGxlID0gKG5vZGUuYXR0cignY2xhc3MnKSA/PyAnJykuaW5kZXhPZignbGFuZ3VhZ2UtJykgIT09IC0xO1xuICAgICAgICBpZiAoaXNDb2RlU2FtcGxlKSB7XG4gICAgICAgICAgbm9kZS5hdHRyKCdjb250ZW50ZWRpdGFibGUnLCAnZmFsc2UnKTtcbiAgICAgICAgICBub2RlLmF0dHIoJ2RhdGEtbWNlLWhpZ2hsaWdodGVkJywgJ2ZhbHNlJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQge1xuICBzZXR1cFxufTtcbiIsImltcG9ydCB0eXBlIEVkaXRvciBmcm9tICd0aW55bWNlL2NvcmUvYXBpL0VkaXRvcic7XG5cbmltcG9ydCAqIGFzIE9wdGlvbnMgZnJvbSAnLi4vYXBpL09wdGlvbnMnO1xuXG5pbXBvcnQgKiBhcyBDb2RlU2FtcGxlIGZyb20gJy4vQ29kZVNhbXBsZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGFuZ3VhZ2VTcGVjIHtcbiAgcmVhZG9ubHkgdGV4dDogc3RyaW5nO1xuICByZWFkb25seSB2YWx1ZTogc3RyaW5nO1xufVxuXG5jb25zdCBnZXRMYW5ndWFnZXMgPSAoZWRpdG9yOiBFZGl0b3IpOiBMYW5ndWFnZVNwZWNbXSA9PiB7XG4gIGNvbnN0IGRlZmF1bHRMYW5ndWFnZXM6IExhbmd1YWdlU3BlY1tdID0gW1xuICAgIHsgdGV4dDogJ0hUTUwvWE1MJywgdmFsdWU6ICdtYXJrdXAnIH0sXG4gICAgeyB0ZXh0OiAnSmF2YVNjcmlwdCcsIHZhbHVlOiAnamF2YXNjcmlwdCcgfSxcbiAgICB7IHRleHQ6ICdDU1MnLCB2YWx1ZTogJ2NzcycgfSxcbiAgICB7IHRleHQ6ICdQSFAnLCB2YWx1ZTogJ3BocCcgfSxcbiAgICB7IHRleHQ6ICdSdWJ5JywgdmFsdWU6ICdydWJ5JyB9LFxuICAgIHsgdGV4dDogJ1B5dGhvbicsIHZhbHVlOiAncHl0aG9uJyB9LFxuICAgIHsgdGV4dDogJ0phdmEnLCB2YWx1ZTogJ2phdmEnIH0sXG4gICAgeyB0ZXh0OiAnQycsIHZhbHVlOiAnYycgfSxcbiAgICB7IHRleHQ6ICdDIycsIHZhbHVlOiAnY3NoYXJwJyB9LFxuICAgIHsgdGV4dDogJ0MrKycsIHZhbHVlOiAnY3BwJyB9XG4gIF07XG5cbiAgY29uc3QgY3VzdG9tTGFuZ3VhZ2VzID0gT3B0aW9ucy5nZXRMYW5ndWFnZXMoZWRpdG9yKTtcbiAgcmV0dXJuIGN1c3RvbUxhbmd1YWdlcyA/IGN1c3RvbUxhbmd1YWdlcyA6IGRlZmF1bHRMYW5ndWFnZXM7XG59O1xuXG5jb25zdCBnZXRDdXJyZW50TGFuZ3VhZ2UgPSAoZWRpdG9yOiBFZGl0b3IsIGZhbGxiYWNrOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICBjb25zdCBub2RlID0gQ29kZVNhbXBsZS5nZXRTZWxlY3RlZENvZGVTYW1wbGUoZWRpdG9yKTtcblxuICByZXR1cm4gbm9kZS5mb2xkKCgpID0+IGZhbGxiYWNrLCAobikgPT4ge1xuICAgIGNvbnN0IG1hdGNoZXMgPSBuLmNsYXNzTmFtZS5tYXRjaCgvbGFuZ3VhZ2UtKFxcdyspLyk7XG4gICAgcmV0dXJuIG1hdGNoZXMgPyBtYXRjaGVzWzFdIDogZmFsbGJhY2s7XG4gIH0pO1xufTtcblxuZXhwb3J0IHtcbiAgZ2V0TGFuZ3VhZ2VzLFxuICBnZXRDdXJyZW50TGFuZ3VhZ2Vcbn07XG4iLCJpbXBvcnQgeyBHbG9iYWwgfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuaW1wb3J0IFByaXNtIGZyb20gJ3ByaXNtanMnO1xuXG5pbXBvcnQgdHlwZSBFZGl0b3IgZnJvbSAndGlueW1jZS9jb3JlL2FwaS9FZGl0b3InO1xuXG5pbXBvcnQgKiBhcyBPcHRpb25zIGZyb20gJy4uL2FwaS9PcHRpb25zJztcblxudHlwZSBQcmlzbSA9IHR5cGVvZiBQcmlzbTtcblxuY29uc3QgZ2V0ID0gKGVkaXRvcjogRWRpdG9yKTogUHJpc20gPT5cbiAgR2xvYmFsLlByaXNtICYmIE9wdGlvbnMudXNlR2xvYmFsUHJpc21KUyhlZGl0b3IpID8gR2xvYmFsLlByaXNtIDogUHJpc207XG5cbmV4cG9ydCB7XG4gIGdldFxufTtcbiIsImltcG9ydCB7IEZ1biB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmltcG9ydCB0eXBlIEVkaXRvciBmcm9tICd0aW55bWNlL2NvcmUvYXBpL0VkaXRvcic7XG5pbXBvcnQgdHlwZSB7IE1lbnUsIFRvb2xiYXIgfSBmcm9tICd0aW55bWNlL2NvcmUvYXBpL3VpL1VpJztcblxudHlwZSBDb250cm9sQXBpID0gVG9vbGJhci5Ub29sYmFyQnV0dG9uSW5zdGFuY2VBcGkgfCBNZW51Lk1lbnVJdGVtSW5zdGFuY2VBcGk7XG5cbmNvbnN0IG9uU2V0dXBFZGl0YWJsZSA9IDxUIGV4dGVuZHMgQ29udHJvbEFwaT4oZWRpdG9yOiBFZGl0b3IsIG9uQ2hhbmdlZDogKGFwaTogVCkgPT4gdm9pZCA9IEZ1bi5ub29wKSA9PiAoYXBpOiBUKTogVm9pZEZ1bmN0aW9uID0+IHtcbiAgY29uc3Qgbm9kZUNoYW5nZWQgPSAoKSA9PiB7XG4gICAgYXBpLnNldEVuYWJsZWQoZWRpdG9yLnNlbGVjdGlvbi5pc0VkaXRhYmxlKCkpO1xuICAgIG9uQ2hhbmdlZChhcGkpO1xuICB9O1xuXG4gIGVkaXRvci5vbignTm9kZUNoYW5nZScsIG5vZGVDaGFuZ2VkKTtcbiAgbm9kZUNoYW5nZWQoKTtcblxuICByZXR1cm4gKCkgPT4ge1xuICAgIGVkaXRvci5vZmYoJ05vZGVDaGFuZ2UnLCBub2RlQ2hhbmdlZCk7XG4gIH07XG59O1xuXG5jb25zdCBpc0NvZGVTYW1wbGVTZWxlY3Rpb24gPSAoZWRpdG9yOiBFZGl0b3IpOiBib29sZWFuID0+IHtcbiAgY29uc3Qgbm9kZSA9IGVkaXRvci5zZWxlY3Rpb24uZ2V0U3RhcnQoKTtcbiAgcmV0dXJuIGVkaXRvci5kb20uaXMobm9kZSwgJ3ByZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl0nKTtcbn07XG5cbmNvbnN0IHJlZ2lzdGVyID0gKGVkaXRvcjogRWRpdG9yKTogdm9pZCA9PiB7XG5cbiAgY29uc3Qgb25BY3Rpb24gPSAoKSA9PiBlZGl0b3IuZXhlY0NvbW1hbmQoJ2NvZGVzYW1wbGUnKTtcblxuICBlZGl0b3IudWkucmVnaXN0cnkuYWRkVG9nZ2xlQnV0dG9uKCdjb2Rlc2FtcGxlJywge1xuICAgIGljb246ICdjb2RlLXNhbXBsZScsXG4gICAgdG9vbHRpcDogJ0luc2VydC9lZGl0IGNvZGUgc2FtcGxlJyxcbiAgICBvbkFjdGlvbixcbiAgICBvblNldHVwOiBvblNldHVwRWRpdGFibGUoZWRpdG9yLCAoYXBpKSA9PiB7XG4gICAgICBhcGkuc2V0QWN0aXZlKGlzQ29kZVNhbXBsZVNlbGVjdGlvbihlZGl0b3IpKTtcbiAgICB9KVxuICB9KTtcblxuICBlZGl0b3IudWkucmVnaXN0cnkuYWRkTWVudUl0ZW0oJ2NvZGVzYW1wbGUnLCB7XG4gICAgdGV4dDogJ0NvZGUgc2FtcGxlLi4uJyxcbiAgICBpY29uOiAnY29kZS1zYW1wbGUnLFxuICAgIG9uQWN0aW9uLFxuICAgIG9uU2V0dXA6IG9uU2V0dXBFZGl0YWJsZShlZGl0b3IpXG4gIH0pO1xufTtcblxuZXhwb3J0IHtcbiAgcmVnaXN0ZXJcbn07XG4iLCJpbXBvcnQgeyBBcnIsIEZ1biB9IGZyb20gJ0BlcGhveC9rYXRhbWFyaSc7XG5cbmltcG9ydCB0eXBlIEVkaXRvciBmcm9tICd0aW55bWNlL2NvcmUvYXBpL0VkaXRvcic7XG5cbmltcG9ydCAqIGFzIENvZGVTYW1wbGUgZnJvbSAnLi4vY29yZS9Db2RlU2FtcGxlJztcbmltcG9ydCAqIGFzIExhbmd1YWdlcyBmcm9tICcuLi9jb3JlL0xhbmd1YWdlcyc7XG5cbnR5cGUgTGFuZ3VhZ2VTcGVjID0gTGFuZ3VhZ2VzLkxhbmd1YWdlU3BlYztcblxuY29uc3Qgb3BlbiA9IChlZGl0b3I6IEVkaXRvcik6IHZvaWQgPT4ge1xuICBjb25zdCBsYW5ndWFnZXM6IExhbmd1YWdlU3BlY1tdID0gTGFuZ3VhZ2VzLmdldExhbmd1YWdlcyhlZGl0b3IpO1xuICBjb25zdCBkZWZhdWx0TGFuZ3VhZ2U6IHN0cmluZyA9IEFyci5oZWFkKGxhbmd1YWdlcykuZm9sZChGdW4uY29uc3RhbnQoJycpLCAobCkgPT4gbC52YWx1ZSk7XG4gIGNvbnN0IGN1cnJlbnRMYW5ndWFnZTogc3RyaW5nID0gTGFuZ3VhZ2VzLmdldEN1cnJlbnRMYW5ndWFnZShlZGl0b3IsIGRlZmF1bHRMYW5ndWFnZSk7XG4gIGNvbnN0IGN1cnJlbnRDb2RlOiBzdHJpbmcgPSBDb2RlU2FtcGxlLmdldEN1cnJlbnRDb2RlKGVkaXRvcik7XG5cbiAgZWRpdG9yLndpbmRvd01hbmFnZXIub3Blbih7XG4gICAgdGl0bGU6ICdJbnNlcnQvRWRpdCBDb2RlIFNhbXBsZScsXG4gICAgc2l6ZTogJ2xhcmdlJyxcbiAgICBib2R5OiB7XG4gICAgICB0eXBlOiAncGFuZWwnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICdsaXN0Ym94JyxcbiAgICAgICAgICBuYW1lOiAnbGFuZ3VhZ2UnLFxuICAgICAgICAgIGxhYmVsOiAnTGFuZ3VhZ2UnLFxuICAgICAgICAgIGl0ZW1zOiBsYW5ndWFnZXNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICd0ZXh0YXJlYScsXG4gICAgICAgICAgbmFtZTogJ2NvZGUnLFxuICAgICAgICAgIGxhYmVsOiAnQ29kZSB2aWV3JyxcbiAgICAgICAgICBzcGVsbGNoZWNrOiBmYWxzZSxcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAgYnV0dG9uczogW1xuICAgICAge1xuICAgICAgICB0eXBlOiAnY2FuY2VsJyxcbiAgICAgICAgbmFtZTogJ2NhbmNlbCcsXG4gICAgICAgIHRleHQ6ICdDYW5jZWwnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiAnc3VibWl0JyxcbiAgICAgICAgbmFtZTogJ3NhdmUnLFxuICAgICAgICB0ZXh0OiAnU2F2ZScsXG4gICAgICAgIHByaW1hcnk6IHRydWVcbiAgICAgIH1cbiAgICBdLFxuICAgIGluaXRpYWxEYXRhOiB7XG4gICAgICBsYW5ndWFnZTogY3VycmVudExhbmd1YWdlLFxuICAgICAgY29kZTogY3VycmVudENvZGVcbiAgICB9LFxuICAgIG9uU3VibWl0OiAoYXBpKSA9PiB7XG4gICAgICBjb25zdCBkYXRhID0gYXBpLmdldERhdGEoKTtcbiAgICAgIENvZGVTYW1wbGUuaW5zZXJ0Q29kZVNhbXBsZShlZGl0b3IsIGRhdGEubGFuZ3VhZ2UsIGRhdGEuY29kZSk7XG4gICAgICBhcGkuY2xvc2UoKTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IHtcbiAgb3BlblxufTtcbiIsImltcG9ydCB7IFR5cGUgfSBmcm9tICdAZXBob3gva2F0YW1hcmknO1xuXG5jb25zdCBpc0NvZGVTYW1wbGUgPSAoZWxtOiBFbGVtZW50IHwgbnVsbCk6IGVsbSBpcyBIVE1MUHJlRWxlbWVudCA9PiB7XG4gIHJldHVybiBUeXBlLmlzTm9uTnVsbGFibGUoZWxtKSAmJiBlbG0ubm9kZU5hbWUgPT09ICdQUkUnICYmIGVsbS5jbGFzc05hbWUuaW5kZXhPZignbGFuZ3VhZ2UtJykgIT09IC0xO1xufTtcblxuY29uc3QgdHJpbUFyZyA9IDxUPihwcmVkaWNhdGVGbjogKGE6IFQpID0+IGJvb2xlYW4pID0+IHtcbiAgcmV0dXJuIChhcmcxOiB1bmtub3duLCBhcmcyOiBUKTogYm9vbGVhbiA9PiB7XG4gICAgcmV0dXJuIHByZWRpY2F0ZUZuKGFyZzIpO1xuICB9O1xufTtcblxuZXhwb3J0IHtcbiAgaXNDb2RlU2FtcGxlLFxuICB0cmltQXJnXG59O1xuIiwiaW1wb3J0ICogYXMgVHlwZSBmcm9tICcuLi9jb3JlL1R5cGUnO1xuaW1wb3J0ICogYXMgQXJyYXlVdGlsIGZyb20gJy4uL2NvcmUvQXJyYXlVdGlsJztcblxuLyoqIEEgd2F5IG9mIGNvbXBhcmluZyB0d28gdmFsdWVzIG9mIHRoZSBzYW1lIHR5cGUgZm9yIGVxdWFsaXR5LiAqL1xuZXhwb3J0IGludGVyZmFjZSBFcTxBPiB7XG4gIGVxOiAoeDogQSwgeTogQSkgPT4gYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGNvbnRyYW1hcCA9IDxBLCBCPiAoZXFhOiBFcTxBPiwgZjogKGI6IEIpID0+IEEpOiBFcTxCPiA9PlxuICBlcSgoeCwgeSkgPT4gZXFhLmVxKGYoeCksIGYoeSkpKTtcblxuZXhwb3J0IGNvbnN0IGVxID0gPEE+IChmOiAoeDogQSwgeTogQSkgPT4gYm9vbGVhbik6IEVxPEE+ID0+XG4gICh7IGVxOiBmIH0pO1xuXG5leHBvcnQgY29uc3QgdHJpcGxlRXE6IEVxPGFueT4gPSBlcSgoeCwgeSkgPT4geCA9PT0geSk7XG5cbmV4cG9ydCBjb25zdCBlcVN0cmluZzogRXE8c3RyaW5nPiA9IHRyaXBsZUVxO1xuXG5leHBvcnQgY29uc3QgZXFCb29sZWFuOiBFcTxib29sZWFuPiA9IHRyaXBsZUVxO1xuXG5leHBvcnQgY29uc3QgZXFOdW1iZXI6IEVxPG51bWJlcj4gPSB0cmlwbGVFcTtcblxuZXhwb3J0IGNvbnN0IGVxVW5kZWZpbmVkOiBFcTx1bmRlZmluZWQ+ID0gdHJpcGxlRXE7XG5cbmV4cG9ydCBjb25zdCBlcU51bGw6IEVxPG51bGw+ID0gdHJpcGxlRXE7XG5cbmV4cG9ydCBjb25zdCBlcUFycmF5ID0gPEE+IChlcWE6IEVxPEE+KTogRXE8QXJyYXlMaWtlPEE+PiA9PiBlcSgoeCwgeSkgPT4ge1xuICBpZiAoeC5sZW5ndGggIT09IHkubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGxlbiA9IHgubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKCFlcWEuZXEoeFtpXSwgeVtpXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59KTtcblxuLy8gVE9ETzogTWFrZSBhbiBPcmQgdHlwZWNsYXNzXG5jb25zdCBlcVNvcnRlZEFycmF5ID0gPEE+KGVxYTogRXE8QT4sIGNvbXBhcmVGbj86IChhOiBBLCBiOiBBKSA9PiBudW1iZXIpOiBFcTxBcnJheUxpa2U8QT4+ID0+XG4gIGNvbnRyYW1hcChlcUFycmF5KGVxYSksICh4cykgPT4gQXJyYXlVdGlsLnNvcnQoeHMsIGNvbXBhcmVGbikpO1xuXG5leHBvcnQgY29uc3QgZXFSZWNvcmQgPSA8QT4gKGVxYTogRXE8QT4pOiBFcTxSZWNvcmQ8c3RyaW5nLCBBPj4gPT4gZXEoKHgsIHkpID0+IHtcbiAgY29uc3Qga3ggPSBPYmplY3Qua2V5cyh4KTtcbiAgY29uc3Qga3kgPSBPYmplY3Qua2V5cyh5KTtcbiAgaWYgKCFlcVNvcnRlZEFycmF5KGVxU3RyaW5nKS5lcShreCwga3kpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGxlbiA9IGt4Lmxlbmd0aDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHEgPSBreFtpXTtcbiAgICBpZiAoIWVxYS5lcSh4W3FdLCB5W3FdKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn0pO1xuXG5leHBvcnQgY29uc3QgZXFBbnk6IEVxPGFueT4gPSBlcSgoeCwgeSkgPT4ge1xuICBpZiAoeCA9PT0geSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgY29uc3QgdHggPSBUeXBlLnR5cGVPZih4KTtcbiAgY29uc3QgdHkgPSBUeXBlLnR5cGVPZih5KTtcbiAgaWYgKHR4ICE9PSB0eSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChUeXBlLmlzRXF1YXRhYmxlVHlwZSh0eCkpIHtcbiAgICByZXR1cm4geCA9PT0geTtcblxuICB9IGVsc2UgaWYgKHR4ID09PSAnYXJyYXknKSB7XG4gICAgcmV0dXJuIGVxQXJyYXkoZXFBbnkpLmVxKHgsIHkpO1xuXG4gIH0gZWxzZSBpZiAodHggPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGVxUmVjb3JkKGVxQW55KS5lcSh4LCB5KTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn0pO1xuIiwiZXhwb3J0IGNvbnN0IG1hcCA9IDxBLCBCPih4czogQXJyYXlMaWtlPEE+LCBmOiAoYTogQSkgPT4gQik6IEJbXSA9PiB7XG4gIGNvbnN0IGxlbiA9IHhzLmxlbmd0aDtcbiAgY29uc3QgciA9IG5ldyBBcnJheShsZW4pO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHhzW2ldO1xuICAgIHJbaV0gPSBmKHgpO1xuICB9XG4gIHJldHVybiByO1xufTtcblxuLyoqIG1hcCBhIGZ1bmN0aW9uIG92ZXIgYW4gYXJyYXksIHRoZW4gbWFwIGFub3RoZXIgZnVuY3Rpb24gb3ZlciBldmVyeSBpdGVtIGV4Y2VwdCB0aGUgbGFzdCAqL1xuZXhwb3J0IGNvbnN0IG1hcERlbGltaXQgPSA8QSwgQj4gKHhzOiBBcnJheUxpa2U8QT4sIGY6IChhOiBBKSA9PiBCLCBkZWxpbWl0OiAoYjogQikgPT4gQik6IEJbXSA9PiB7XG4gIGNvbnN0IGxlbiA9IHhzLmxlbmd0aDtcbiAgY29uc3QgciA9IG5ldyBBcnJheShsZW4pO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbiAtIDE7IGkrKykge1xuICAgIGNvbnN0IHggPSB4c1tpXTtcbiAgICByW2ldID0gZGVsaW1pdChmKHgpKTtcbiAgfVxuICBpZiAobGVuID4gMCkge1xuICAgIHJbbGVuIC0gMV0gPSAoZih4c1tsZW4gLSAxXSkpO1xuICB9XG5cbiAgcmV0dXJuIHI7XG59O1xuXG5leHBvcnQgY29uc3Qgc29ydCA9IDxBPiAoeHM6IEFycmF5TGlrZTxBPiwgY29tcGFyZUZuPzogKGE6IEEsIGI6IEEpID0+IG51bWJlcik6IEFbXSA9PiB7XG4gIGNvbnN0IGNsb25lOiBBW10gPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh4cyk7XG4gIHJldHVybiBjbG9uZS5zb3J0KGNvbXBhcmVGbik7XG59O1xuIiwiZXhwb3J0IGNvbnN0IHR5cGVPZiA9ICh4OiBhbnkpID0+IHtcbiAgaWYgKHggPT09IG51bGwpIHtcbiAgICByZXR1cm4gJ251bGwnO1xuICB9XG4gIGlmICh4ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gJ3VuZGVmaW5lZCc7XG4gIH1cbiAgY29uc3QgdCA9IHR5cGVvZiB4O1xuICBpZiAodCA9PT0gJ29iamVjdCcgJiYgKEFycmF5LnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKHgpIHx8IHguY29uc3RydWN0b3IgJiYgeC5jb25zdHJ1Y3Rvci5uYW1lID09PSAnQXJyYXknKSkge1xuICAgIHJldHVybiAnYXJyYXknO1xuICB9XG4gIGlmICh0ID09PSAnb2JqZWN0JyAmJiAoU3RyaW5nLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKHgpIHx8IHguY29uc3RydWN0b3IgJiYgeC5jb25zdHJ1Y3Rvci5uYW1lID09PSAnU3RyaW5nJykpIHtcbiAgICByZXR1cm4gJ3N0cmluZyc7XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG5jb25zdCBpc1R5cGUgPSA8VD4odHlwZTogc3RyaW5nKSA9PiAodmFsdWU6IGFueSk6IHZhbHVlIGlzIFQgPT4gdHlwZU9mKHZhbHVlKSA9PT0gdHlwZTtcblxuZXhwb3J0IGNvbnN0IGlzU3RyaW5nID0gaXNUeXBlPHN0cmluZz4oJ3N0cmluZycpO1xuZXhwb3J0IGNvbnN0IGlzT2JqZWN0ID0gaXNUeXBlPE9iamVjdD4oJ29iamVjdCcpO1xuZXhwb3J0IGNvbnN0IGlzQXJyYXkgPSBpc1R5cGU8QXJyYXk8dW5rbm93bj4+KCdhcnJheScpO1xuZXhwb3J0IGNvbnN0IGlzTnVsbCA9IGlzVHlwZTxudWxsPignbnVsbCcpO1xuZXhwb3J0IGNvbnN0IGlzQm9vbGVhbiA9IGlzVHlwZTxib29sZWFuPignYm9vbGVhbicpO1xuZXhwb3J0IGNvbnN0IGlzVW5kZWZpbmVkID0gaXNUeXBlPHVuZGVmaW5lZD4oJ3VuZGVmaW5lZCcpO1xuZXhwb3J0IGNvbnN0IGlzRnVuY3Rpb24gPSBpc1R5cGU8RnVuY3Rpb24+KCdmdW5jdGlvbicpO1xuZXhwb3J0IGNvbnN0IGlzTnVtYmVyID0gaXNUeXBlPG51bWJlcj4oJ251bWJlcicpO1xuXG5leHBvcnQgY29uc3QgaXNFcXVhdGFibGVUeXBlID0gKHg6IHN0cmluZyk6IGJvb2xlYW4gPT5cbiAgWyAndW5kZWZpbmVkJywgJ2Jvb2xlYW4nLCAnbnVtYmVyJywgJ3N0cmluZycsICdmdW5jdGlvbicsICd4bWwnLCAnbnVsbCcgXS5pbmRleE9mKHgpICE9PSAtMTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcbiAgICAgICAgaWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuICAgICAgICB9XG4gICAgfVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydiA9ICgpID0+IChcIjEuNS4yXCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydWlkID0gXCJidW5kbGVyPXJzcGFja0AxLjUuMlwiO1xuIiwiaW1wb3J0IFBsdWdpbiBmcm9tICcuL1BsdWdpbic7XG5cblBsdWdpbigpO1xuXG4vKiogKioqKipcbiAqIERPIE5PVCBFWFBPUlQgQU5ZVEhJTkdcbiAqXG4gKiBJRiBZT1UgRE8gUk9MTFVQIFdJTEwgTEVBVkUgQSBHTE9CQUwgT04gVEhFIFBBR0VcbiAqKioqKioqL1xuIl0sIm5hbWVzIjpbIkVxIiwiRnVuIiwiT3B0aW9uYWwiLCJUeXBlIiwibmF0aXZlU2xpY2UiLCJBcnJheSIsIm5hdGl2ZUluZGV4T2YiLCJuYXRpdmVQdXNoIiwicmF3SW5kZXhPZiIsInRzIiwidCIsImluZGV4T2YiLCJ4cyIsIngiLCJyIiwiY29udGFpbnMiLCJleGlzdHMiLCJwcmVkIiwiaSIsImxlbiIsInJhbmdlIiwibnVtIiwiZiIsImNodW5rIiwiYXJyYXkiLCJzaXplIiwicyIsIm1hcCIsImVhY2giLCJlYWNociIsInBhcnRpdGlvbiIsInBhc3MiLCJmYWlsIiwiYXJyIiwiZmlsdGVyIiwiZ3JvdXBCeSIsIndhc1R5cGUiLCJncm91cCIsInR5cGUiLCJmb2xkciIsImFjYyIsImZvbGRsIiwiZmluZFVudGlsIiwidW50aWwiLCJmaW5kIiwiZmluZEluZGV4IiwiZmluZExhc3RJbmRleCIsImZsYXR0ZW4iLCJFcnJvciIsImJpbmQiLCJmb3JhbGwiLCJlcXVhbCIsImExIiwiYTIiLCJlcSIsInJldmVyc2UiLCJkaWZmZXJlbmNlIiwibWFwVG9PYmplY3QiLCJTdHJpbmciLCJwdXJlIiwic29ydCIsImNvbXBhcmF0b3IiLCJjb3B5IiwiZ2V0IiwiaGVhZCIsImxhc3QiLCJmcm9tIiwiZmluZE1hcCIsInVuaXF1ZSIsImlzRHVwbGljYXRlZCIsIm5vb3AiLCJub2FyZyIsImNvbXBvc2UiLCJmYSIsImZiIiwiYXJncyIsImNvbXBvc2UxIiwiZmJjIiwiZmFiIiwiYSIsImNvbnN0YW50IiwidmFsdWUiLCJpZGVudGl0eSIsInRyaXBsZUVxdWFscyIsImIiLCJjdXJyeSIsImZuIiwiaW5pdGlhbEFyZ3MiLCJyZXN0QXJncyIsImFsbCIsIm5vdCIsImRpZSIsIm1zZyIsImFwcGx5IiwiY2FsbCIsIm5ldmVyIiwiYWx3YXlzIiwid2Vha2VuIiwicGlwZSIsImFiIiwiYmMiLCJjZCIsImRlIiwiZWYiLCJmZyIsImdoIiwiYyIsImQiLCJlIiwiZyIsIkdsb2JhbCIsIndpbmRvdyIsIkZ1bmN0aW9uIiwidGFnIiwib25Ob25lIiwib25Tb21lIiwibWFwcGVyIiwiYmluZGVyIiwicHJlZGljYXRlIiwicmVwbGFjZW1lbnQiLCJ0aHVuayIsIm1lc3NhZ2UiLCJ3b3JrZXIiLCJTdHJBcHBlbmQiLCJjaGVja1JhbmdlIiwic3RyIiwic3Vic3RyIiwic3RhcnQiLCJzdXBwbGFudCIsIm9iaiIsImlzU3RyaW5nT3JOdW1iZXIiLCJmdWxsTWF0Y2giLCJrZXkiLCJyZW1vdmVMZWFkaW5nIiwicHJlZml4Iiwic3RhcnRzV2l0aCIsInJlbW92ZVRyYWlsaW5nIiwic3VmZml4IiwiZW5kc1dpdGgiLCJlbnN1cmVMZWFkaW5nIiwiZW5zdXJlVHJhaWxpbmciLCJlbmQiLCJpZHgiLCJjYXBpdGFsaXplIiwiYmxhbmsiLCJ0cmltIiwibFRyaW0iLCJyVHJpbSIsImlzTm90RW1wdHkiLCJpc0VtcHR5IiwicmVwZWF0IiwiY291bnQiLCJmcm9tQ29kZVBvaW50IiwidG9JbnQiLCJyYWRpeCIsInBhcnNlSW50IiwiaXNOYU4iLCJ0b0Zsb2F0IiwicGFyc2VGbG9hdCIsImdldFByb3RvdHlwZU9mIiwiT2JqZWN0IiwiaGFzUHJvdG8iLCJ2IiwiY29uc3RydWN0b3IiLCJ0eXBlT2YiLCJvIiwicHJvdG8iLCJpc1R5cGUiLCJpc1NpbXBsZVR5cGUiLCJpcyIsImlzT2JqZWN0IiwiaXNTdHJpbmciLCJpc1BsYWluT2JqZWN0IiwiaXNBcnJheSIsImlzTnVsbCIsImlzQm9vbGVhbiIsImlzVW5kZWZpbmVkIiwidW5kZWZpbmVkIiwiaXNOdWxsYWJsZSIsImlzTm9uTnVsbGFibGUiLCJpc0Z1bmN0aW9uIiwiaXNOdW1iZXIiLCJpc0FycmF5T2YiLCJpc1Byb21pc2VMaWtlIiwiYWRkVG9TdGFydCIsImFkZFRvRW5kIiwicmVtb3ZlRnJvbVN0YXJ0IiwibnVtQ2hhcnMiLCJyZW1vdmVGcm9tRW5kIiwiUGx1Z2luTWFuYWdlciIsIkNvbW1hbmRzIiwiT3B0aW9ucyIsIkZpbHRlckNvbnRlbnQiLCJCdXR0b25zIiwiRGlhbG9nIiwiVXRpbHMiLCJlZGl0b3IiLCJldiIsInJlZ2lzdGVyIiwibm9kZSIsIm9wdGlvbiIsIm5hbWUiLCJyZWdpc3Rlck9wdGlvbiIsImdldExhbmd1YWdlcyIsInVzZUdsb2JhbFByaXNtSlMiLCJET01VdGlscyIsIlByaXNtIiwiZ2V0U2VsZWN0ZWRDb2RlU2FtcGxlIiwiaW5zZXJ0Q29kZVNhbXBsZSIsImxhbmd1YWdlIiwiY29kZSIsImRvbSIsIm5ld1ByZSIsIm4iLCJnZXRDdXJyZW50Q29kZSIsIlN0cmluZ3MiLCJUb29scyIsInNldHVwIiwicHJlcyIsImVsbSIsImNoaWxkIiwiY29kZUVsbSIsInVucHJvY2Vzc2VkQ29kZVNhbXBsZXMiLCJub2RlcyIsImwiLCJpc0NvZGVTYW1wbGUiLCJDb2RlU2FtcGxlIiwiZGVmYXVsdExhbmd1YWdlcyIsImN1c3RvbUxhbmd1YWdlcyIsImdldEN1cnJlbnRMYW5ndWFnZSIsImZhbGxiYWNrIiwibWF0Y2hlcyIsIm9uU2V0dXBFZGl0YWJsZSIsIm9uQ2hhbmdlZCIsImFwaSIsIm5vZGVDaGFuZ2VkIiwiaXNDb2RlU2FtcGxlU2VsZWN0aW9uIiwib25BY3Rpb24iLCJBcnIiLCJMYW5ndWFnZXMiLCJvcGVuIiwibGFuZ3VhZ2VzIiwiZGVmYXVsdExhbmd1YWdlIiwiY3VycmVudExhbmd1YWdlIiwiY3VycmVudENvZGUiLCJkYXRhIiwidHJpbUFyZyIsInByZWRpY2F0ZUZuIiwiYXJnMSIsImFyZzIiLCJQbHVnaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSw2REFBZSxNQUFNLEVBQUM7QUFDZjs7Ozs7Ozs7Ozs7Ozs7QUNIUDs7QUFFQSw2REFBZSxNQUFNLEVBQUM7QUFDZjs7Ozs7Ozs7Ozs7Ozs7QUNIUDs7QUFFQSw2REFBZSxNQUFNLEVBQUM7QUFDZjs7Ozs7Ozs7Ozs7OztBQ0hQO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLGdGQUFnRix5QkFBeUI7QUFDekc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Es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