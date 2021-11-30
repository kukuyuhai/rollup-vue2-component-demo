(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vue-codemirror'), require('lodash'), require('vuex'), require('vue'), require('clipboard')) :
	typeof define === 'function' && define.amd ? define(['vue-codemirror', 'lodash', 'vuex', 'vue', 'clipboard'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.chinadep = factory(global["vue-codemirror"], global.lodash, global.vuex, global.vue, global.clipboard));
})(this, (function (vueCodemirror, _, vuex, Vue, Clipboard) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var ___default = /*#__PURE__*/_interopDefaultLegacy(_);
	var Vue__default = /*#__PURE__*/_interopDefaultLegacy(Vue);
	var Clipboard__default = /*#__PURE__*/_interopDefaultLegacy(Clipboard);

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	var check = function (it) {
	  return it && it.Math == Math && it;
	};

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global$z =
	  // eslint-disable-next-line es/no-global-this -- safe
	  check(typeof globalThis == 'object' && globalThis) ||
	  check(typeof window == 'object' && window) ||
	  // eslint-disable-next-line no-restricted-globals -- safe
	  check(typeof self == 'object' && self) ||
	  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
	  // eslint-disable-next-line no-new-func -- fallback
	  (function () { return this; })() || Function('return this')();

	var shared$5 = {exports: {}};

	var global$y = global$z;

	// eslint-disable-next-line es/no-object-defineproperty -- safe
	var defineProperty$5 = Object.defineProperty;

	var setGlobal$3 = function (key, value) {
	  try {
	    defineProperty$5(global$y, key, { value: value, configurable: true, writable: true });
	  } catch (error) {
	    global$y[key] = value;
	  } return value;
	};

	var global$x = global$z;
	var setGlobal$2 = setGlobal$3;

	var SHARED = '__core-js_shared__';
	var store$3 = global$x[SHARED] || setGlobal$2(SHARED, {});

	var sharedStore = store$3;

	var store$2 = sharedStore;

	(shared$5.exports = function (key, value) {
	  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: '3.19.2',
	  mode: 'global',
	  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
	});

	var FunctionPrototype$3 = Function.prototype;
	var bind$3 = FunctionPrototype$3.bind;
	var call$a = FunctionPrototype$3.call;
	var callBind = bind$3 && bind$3.bind(call$a);

	var functionUncurryThis = bind$3 ? function (fn) {
	  return fn && callBind(call$a, fn);
	} : function (fn) {
	  return fn && function () {
	    return call$a.apply(fn, arguments);
	  };
	};

	var global$w = global$z;

	var TypeError$c = global$w.TypeError;

	// `RequireObjectCoercible` abstract operation
	// https://tc39.es/ecma262/#sec-requireobjectcoercible
	var requireObjectCoercible$5 = function (it) {
	  if (it == undefined) throw TypeError$c("Can't call method on " + it);
	  return it;
	};

	var global$v = global$z;
	var requireObjectCoercible$4 = requireObjectCoercible$5;

	var Object$4 = global$v.Object;

	// `ToObject` abstract operation
	// https://tc39.es/ecma262/#sec-toobject
	var toObject$5 = function (argument) {
	  return Object$4(requireObjectCoercible$4(argument));
	};

	var uncurryThis$n = functionUncurryThis;
	var toObject$4 = toObject$5;

	var hasOwnProperty = uncurryThis$n({}.hasOwnProperty);

	// `HasOwnProperty` abstract operation
	// https://tc39.es/ecma262/#sec-hasownproperty
	var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
	  return hasOwnProperty(toObject$4(it), key);
	};

	var uncurryThis$m = functionUncurryThis;

	var id = 0;
	var postfix = Math.random();
	var toString$7 = uncurryThis$m(1.0.toString);

	var uid$3 = function (key) {
	  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$7(++id + postfix, 36);
	};

	// `IsCallable` abstract operation
	// https://tc39.es/ecma262/#sec-iscallable
	var isCallable$f = function (argument) {
	  return typeof argument == 'function';
	};

	var global$u = global$z;
	var isCallable$e = isCallable$f;

	var aFunction = function (argument) {
	  return isCallable$e(argument) ? argument : undefined;
	};

	var getBuiltIn$6 = function (namespace, method) {
	  return arguments.length < 2 ? aFunction(global$u[namespace]) : global$u[namespace] && global$u[namespace][method];
	};

	var getBuiltIn$5 = getBuiltIn$6;

	var engineUserAgent = getBuiltIn$5('navigator', 'userAgent') || '';

	var global$t = global$z;
	var userAgent = engineUserAgent;

	var process = global$t.process;
	var Deno = global$t.Deno;
	var versions = process && process.versions || Deno && Deno.version;
	var v8 = versions && versions.v8;
	var match, version;

	if (v8) {
	  match = v8.split('.');
	  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
	  // but their correct versions are not interesting for us
	  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
	}

	// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
	// so check `userAgent` even if `.v8` exists, but 0
	if (!version && userAgent) {
	  match = userAgent.match(/Edge\/(\d+)/);
	  if (!match || match[1] >= 74) {
	    match = userAgent.match(/Chrome\/(\d+)/);
	    if (match) version = +match[1];
	  }
	}

	var engineV8Version = version;

	var fails$i = function (exec) {
	  try {
	    return !!exec();
	  } catch (error) {
	    return true;
	  }
	};

	/* eslint-disable es/no-symbol -- required for testing */

	var V8_VERSION$1 = engineV8Version;
	var fails$h = fails$i;

	// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
	var nativeSymbol = !!Object.getOwnPropertySymbols && !fails$h(function () {
	  var symbol = Symbol();
	  // Chrome 38 Symbol has incorrect toString conversion
	  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
	  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
	    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
	    !Symbol.sham && V8_VERSION$1 && V8_VERSION$1 < 41;
	});

	/* eslint-disable es/no-symbol -- required for testing */

	var NATIVE_SYMBOL$2 = nativeSymbol;

	var useSymbolAsUid = NATIVE_SYMBOL$2
	  && !Symbol.sham
	  && typeof Symbol.iterator == 'symbol';

	var global$s = global$z;
	var shared$4 = shared$5.exports;
	var hasOwn$a = hasOwnProperty_1;
	var uid$2 = uid$3;
	var NATIVE_SYMBOL$1 = nativeSymbol;
	var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

	var WellKnownSymbolsStore$1 = shared$4('wks');
	var Symbol$1 = global$s.Symbol;
	var symbolFor = Symbol$1 && Symbol$1['for'];
	var createWellKnownSymbol = USE_SYMBOL_AS_UID$1 ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$2;

	var wellKnownSymbol$b = function (name) {
	  if (!hasOwn$a(WellKnownSymbolsStore$1, name) || !(NATIVE_SYMBOL$1 || typeof WellKnownSymbolsStore$1[name] == 'string')) {
	    var description = 'Symbol.' + name;
	    if (NATIVE_SYMBOL$1 && hasOwn$a(Symbol$1, name)) {
	      WellKnownSymbolsStore$1[name] = Symbol$1[name];
	    } else if (USE_SYMBOL_AS_UID$1 && symbolFor) {
	      WellKnownSymbolsStore$1[name] = symbolFor(description);
	    } else {
	      WellKnownSymbolsStore$1[name] = createWellKnownSymbol(description);
	    }
	  } return WellKnownSymbolsStore$1[name];
	};

	var wellKnownSymbol$a = wellKnownSymbol$b;

	var TO_STRING_TAG$2 = wellKnownSymbol$a('toStringTag');
	var test = {};

	test[TO_STRING_TAG$2] = 'z';

	var toStringTagSupport = String(test) === '[object z]';

	var redefine$5 = {exports: {}};

	var fails$g = fails$i;

	// Detect IE8's incomplete defineProperty implementation
	var descriptors = !fails$g(function () {
	  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
	  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
	});

	var objectDefineProperty = {};

	var isCallable$d = isCallable$f;

	var isObject$9 = function (it) {
	  return typeof it == 'object' ? it !== null : isCallable$d(it);
	};

	var global$r = global$z;
	var isObject$8 = isObject$9;

	var document$1 = global$r.document;
	// typeof document.createElement is 'object' in old IE
	var EXISTS$1 = isObject$8(document$1) && isObject$8(document$1.createElement);

	var documentCreateElement$2 = function (it) {
	  return EXISTS$1 ? document$1.createElement(it) : {};
	};

	var DESCRIPTORS$b = descriptors;
	var fails$f = fails$i;
	var createElement = documentCreateElement$2;

	// Thank's IE8 for his funny defineProperty
	var ie8DomDefine = !DESCRIPTORS$b && !fails$f(function () {
	  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
	  return Object.defineProperty(createElement('div'), 'a', {
	    get: function () { return 7; }
	  }).a != 7;
	});

	var global$q = global$z;
	var isObject$7 = isObject$9;

	var String$4 = global$q.String;
	var TypeError$b = global$q.TypeError;

	// `Assert: Type(argument) is Object`
	var anObject$a = function (argument) {
	  if (isObject$7(argument)) return argument;
	  throw TypeError$b(String$4(argument) + ' is not an object');
	};

	var call$9 = Function.prototype.call;

	var functionCall = call$9.bind ? call$9.bind(call$9) : function () {
	  return call$9.apply(call$9, arguments);
	};

	var uncurryThis$l = functionUncurryThis;

	var objectIsPrototypeOf = uncurryThis$l({}.isPrototypeOf);

	var global$p = global$z;
	var getBuiltIn$4 = getBuiltIn$6;
	var isCallable$c = isCallable$f;
	var isPrototypeOf$2 = objectIsPrototypeOf;
	var USE_SYMBOL_AS_UID = useSymbolAsUid;

	var Object$3 = global$p.Object;

	var isSymbol$4 = USE_SYMBOL_AS_UID ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  var $Symbol = getBuiltIn$4('Symbol');
	  return isCallable$c($Symbol) && isPrototypeOf$2($Symbol.prototype, Object$3(it));
	};

	var global$o = global$z;

	var String$3 = global$o.String;

	var tryToString$2 = function (argument) {
	  try {
	    return String$3(argument);
	  } catch (error) {
	    return 'Object';
	  }
	};

	var global$n = global$z;
	var isCallable$b = isCallable$f;
	var tryToString$1 = tryToString$2;

	var TypeError$a = global$n.TypeError;

	// `Assert: IsCallable(argument) is true`
	var aCallable$2 = function (argument) {
	  if (isCallable$b(argument)) return argument;
	  throw TypeError$a(tryToString$1(argument) + ' is not a function');
	};

	var aCallable$1 = aCallable$2;

	// `GetMethod` abstract operation
	// https://tc39.es/ecma262/#sec-getmethod
	var getMethod$2 = function (V, P) {
	  var func = V[P];
	  return func == null ? undefined : aCallable$1(func);
	};

	var global$m = global$z;
	var call$8 = functionCall;
	var isCallable$a = isCallable$f;
	var isObject$6 = isObject$9;

	var TypeError$9 = global$m.TypeError;

	// `OrdinaryToPrimitive` abstract operation
	// https://tc39.es/ecma262/#sec-ordinarytoprimitive
	var ordinaryToPrimitive$1 = function (input, pref) {
	  var fn, val;
	  if (pref === 'string' && isCallable$a(fn = input.toString) && !isObject$6(val = call$8(fn, input))) return val;
	  if (isCallable$a(fn = input.valueOf) && !isObject$6(val = call$8(fn, input))) return val;
	  if (pref !== 'string' && isCallable$a(fn = input.toString) && !isObject$6(val = call$8(fn, input))) return val;
	  throw TypeError$9("Can't convert object to primitive value");
	};

	var global$l = global$z;
	var call$7 = functionCall;
	var isObject$5 = isObject$9;
	var isSymbol$3 = isSymbol$4;
	var getMethod$1 = getMethod$2;
	var ordinaryToPrimitive = ordinaryToPrimitive$1;
	var wellKnownSymbol$9 = wellKnownSymbol$b;

	var TypeError$8 = global$l.TypeError;
	var TO_PRIMITIVE$1 = wellKnownSymbol$9('toPrimitive');

	// `ToPrimitive` abstract operation
	// https://tc39.es/ecma262/#sec-toprimitive
	var toPrimitive$2 = function (input, pref) {
	  if (!isObject$5(input) || isSymbol$3(input)) return input;
	  var exoticToPrim = getMethod$1(input, TO_PRIMITIVE$1);
	  var result;
	  if (exoticToPrim) {
	    if (pref === undefined) pref = 'default';
	    result = call$7(exoticToPrim, input, pref);
	    if (!isObject$5(result) || isSymbol$3(result)) return result;
	    throw TypeError$8("Can't convert object to primitive value");
	  }
	  if (pref === undefined) pref = 'number';
	  return ordinaryToPrimitive(input, pref);
	};

	var toPrimitive$1 = toPrimitive$2;
	var isSymbol$2 = isSymbol$4;

	// `ToPropertyKey` abstract operation
	// https://tc39.es/ecma262/#sec-topropertykey
	var toPropertyKey$4 = function (argument) {
	  var key = toPrimitive$1(argument, 'string');
	  return isSymbol$2(key) ? key : key + '';
	};

	var global$k = global$z;
	var DESCRIPTORS$a = descriptors;
	var IE8_DOM_DEFINE$1 = ie8DomDefine;
	var anObject$9 = anObject$a;
	var toPropertyKey$3 = toPropertyKey$4;

	var TypeError$7 = global$k.TypeError;
	// eslint-disable-next-line es/no-object-defineproperty -- safe
	var $defineProperty$1 = Object.defineProperty;

	// `Object.defineProperty` method
	// https://tc39.es/ecma262/#sec-object.defineproperty
	objectDefineProperty.f = DESCRIPTORS$a ? $defineProperty$1 : function defineProperty(O, P, Attributes) {
	  anObject$9(O);
	  P = toPropertyKey$3(P);
	  anObject$9(Attributes);
	  if (IE8_DOM_DEFINE$1) try {
	    return $defineProperty$1(O, P, Attributes);
	  } catch (error) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError$7('Accessors not supported');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var createPropertyDescriptor$4 = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var DESCRIPTORS$9 = descriptors;
	var definePropertyModule$4 = objectDefineProperty;
	var createPropertyDescriptor$3 = createPropertyDescriptor$4;

	var createNonEnumerableProperty$5 = DESCRIPTORS$9 ? function (object, key, value) {
	  return definePropertyModule$4.f(object, key, createPropertyDescriptor$3(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var uncurryThis$k = functionUncurryThis;
	var isCallable$9 = isCallable$f;
	var store$1 = sharedStore;

	var functionToString$1 = uncurryThis$k(Function.toString);

	// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
	if (!isCallable$9(store$1.inspectSource)) {
	  store$1.inspectSource = function (it) {
	    return functionToString$1(it);
	  };
	}

	var inspectSource$3 = store$1.inspectSource;

	var global$j = global$z;
	var isCallable$8 = isCallable$f;
	var inspectSource$2 = inspectSource$3;

	var WeakMap$1 = global$j.WeakMap;

	var nativeWeakMap = isCallable$8(WeakMap$1) && /native code/.test(inspectSource$2(WeakMap$1));

	var shared$3 = shared$5.exports;
	var uid$1 = uid$3;

	var keys$1 = shared$3('keys');

	var sharedKey$3 = function (key) {
	  return keys$1[key] || (keys$1[key] = uid$1(key));
	};

	var hiddenKeys$5 = {};

	var NATIVE_WEAK_MAP = nativeWeakMap;
	var global$i = global$z;
	var uncurryThis$j = functionUncurryThis;
	var isObject$4 = isObject$9;
	var createNonEnumerableProperty$4 = createNonEnumerableProperty$5;
	var hasOwn$9 = hasOwnProperty_1;
	var shared$2 = sharedStore;
	var sharedKey$2 = sharedKey$3;
	var hiddenKeys$4 = hiddenKeys$5;

	var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
	var TypeError$6 = global$i.TypeError;
	var WeakMap = global$i.WeakMap;
	var set, get, has;

	var enforce = function (it) {
	  return has(it) ? get(it) : set(it, {});
	};

	var getterFor = function (TYPE) {
	  return function (it) {
	    var state;
	    if (!isObject$4(it) || (state = get(it)).type !== TYPE) {
	      throw TypeError$6('Incompatible receiver, ' + TYPE + ' required');
	    } return state;
	  };
	};

	if (NATIVE_WEAK_MAP || shared$2.state) {
	  var store = shared$2.state || (shared$2.state = new WeakMap());
	  var wmget = uncurryThis$j(store.get);
	  var wmhas = uncurryThis$j(store.has);
	  var wmset = uncurryThis$j(store.set);
	  set = function (it, metadata) {
	    if (wmhas(store, it)) throw new TypeError$6(OBJECT_ALREADY_INITIALIZED);
	    metadata.facade = it;
	    wmset(store, it, metadata);
	    return metadata;
	  };
	  get = function (it) {
	    return wmget(store, it) || {};
	  };
	  has = function (it) {
	    return wmhas(store, it);
	  };
	} else {
	  var STATE = sharedKey$2('state');
	  hiddenKeys$4[STATE] = true;
	  set = function (it, metadata) {
	    if (hasOwn$9(it, STATE)) throw new TypeError$6(OBJECT_ALREADY_INITIALIZED);
	    metadata.facade = it;
	    createNonEnumerableProperty$4(it, STATE, metadata);
	    return metadata;
	  };
	  get = function (it) {
	    return hasOwn$9(it, STATE) ? it[STATE] : {};
	  };
	  has = function (it) {
	    return hasOwn$9(it, STATE);
	  };
	}

	var internalState = {
	  set: set,
	  get: get,
	  has: has,
	  enforce: enforce,
	  getterFor: getterFor
	};

	var DESCRIPTORS$8 = descriptors;
	var hasOwn$8 = hasOwnProperty_1;

	var FunctionPrototype$2 = Function.prototype;
	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var getDescriptor = DESCRIPTORS$8 && Object.getOwnPropertyDescriptor;

	var EXISTS = hasOwn$8(FunctionPrototype$2, 'name');
	// additional protection from minified / mangled / dropped function names
	var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
	var CONFIGURABLE = EXISTS && (!DESCRIPTORS$8 || (DESCRIPTORS$8 && getDescriptor(FunctionPrototype$2, 'name').configurable));

	var functionName = {
	  EXISTS: EXISTS,
	  PROPER: PROPER,
	  CONFIGURABLE: CONFIGURABLE
	};

	var global$h = global$z;
	var isCallable$7 = isCallable$f;
	var hasOwn$7 = hasOwnProperty_1;
	var createNonEnumerableProperty$3 = createNonEnumerableProperty$5;
	var setGlobal$1 = setGlobal$3;
	var inspectSource$1 = inspectSource$3;
	var InternalStateModule$1 = internalState;
	var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;

	var getInternalState$2 = InternalStateModule$1.get;
	var enforceInternalState = InternalStateModule$1.enforce;
	var TEMPLATE = String(String).split('String');

	(redefine$5.exports = function (O, key, value, options) {
	  var unsafe = options ? !!options.unsafe : false;
	  var simple = options ? !!options.enumerable : false;
	  var noTargetGet = options ? !!options.noTargetGet : false;
	  var name = options && options.name !== undefined ? options.name : key;
	  var state;
	  if (isCallable$7(value)) {
	    if (String(name).slice(0, 7) === 'Symbol(') {
	      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
	    }
	    if (!hasOwn$7(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
	      createNonEnumerableProperty$3(value, 'name', name);
	    }
	    state = enforceInternalState(value);
	    if (!state.source) {
	      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
	    }
	  }
	  if (O === global$h) {
	    if (simple) O[key] = value;
	    else setGlobal$1(key, value);
	    return;
	  } else if (!unsafe) {
	    delete O[key];
	  } else if (!noTargetGet && O[key]) {
	    simple = true;
	  }
	  if (simple) O[key] = value;
	  else createNonEnumerableProperty$3(O, key, value);
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, 'toString', function toString() {
	  return isCallable$7(this) && getInternalState$2(this).source || inspectSource$1(this);
	});

	var uncurryThis$i = functionUncurryThis;

	var toString$6 = uncurryThis$i({}.toString);
	var stringSlice$3 = uncurryThis$i(''.slice);

	var classofRaw$1 = function (it) {
	  return stringSlice$3(toString$6(it), 8, -1);
	};

	var global$g = global$z;
	var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
	var isCallable$6 = isCallable$f;
	var classofRaw = classofRaw$1;
	var wellKnownSymbol$8 = wellKnownSymbol$b;

	var TO_STRING_TAG$1 = wellKnownSymbol$8('toStringTag');
	var Object$2 = global$g.Object;

	// ES3 wrong here
	var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (error) { /* empty */ }
	};

	// getting tag from ES6+ `Object.prototype.toString`
	var classof$8 = TO_STRING_TAG_SUPPORT$2 ? classofRaw : function (it) {
	  var O, tag, result;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (tag = tryGet(O = Object$2(it), TO_STRING_TAG$1)) == 'string' ? tag
	    // builtinTag case
	    : CORRECT_ARGUMENTS ? classofRaw(O)
	    // ES3 arguments fallback
	    : (result = classofRaw(O)) == 'Object' && isCallable$6(O.callee) ? 'Arguments' : result;
	};

	var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
	var classof$7 = classof$8;

	// `Object.prototype.toString` method implementation
	// https://tc39.es/ecma262/#sec-object.prototype.tostring
	var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
	  return '[object ' + classof$7(this) + ']';
	};

	var TO_STRING_TAG_SUPPORT = toStringTagSupport;
	var redefine$4 = redefine$5.exports;
	var toString$5 = objectToString;

	// `Object.prototype.toString` method
	// https://tc39.es/ecma262/#sec-object.prototype.tostring
	if (!TO_STRING_TAG_SUPPORT) {
	  redefine$4(Object.prototype, 'toString', toString$5, { unsafe: true });
	}

	// iterable DOM collections
	// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
	var domIterables = {
	  CSSRuleList: 0,
	  CSSStyleDeclaration: 0,
	  CSSValueList: 0,
	  ClientRectList: 0,
	  DOMRectList: 0,
	  DOMStringList: 0,
	  DOMTokenList: 1,
	  DataTransferItemList: 0,
	  FileList: 0,
	  HTMLAllCollection: 0,
	  HTMLCollection: 0,
	  HTMLFormElement: 0,
	  HTMLSelectElement: 0,
	  MediaList: 0,
	  MimeTypeArray: 0,
	  NamedNodeMap: 0,
	  NodeList: 1,
	  PaintRequestList: 0,
	  Plugin: 0,
	  PluginArray: 0,
	  SVGLengthList: 0,
	  SVGNumberList: 0,
	  SVGPathSegList: 0,
	  SVGPointList: 0,
	  SVGStringList: 0,
	  SVGTransformList: 0,
	  SourceBufferList: 0,
	  StyleSheetList: 0,
	  TextTrackCueList: 0,
	  TextTrackList: 0,
	  TouchList: 0
	};

	// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
	var documentCreateElement$1 = documentCreateElement$2;

	var classList = documentCreateElement$1('span').classList;
	var DOMTokenListPrototype$1 = classList && classList.constructor && classList.constructor.prototype;

	var domTokenListPrototype = DOMTokenListPrototype$1 === Object.prototype ? undefined : DOMTokenListPrototype$1;

	var uncurryThis$h = functionUncurryThis;
	var aCallable = aCallable$2;

	var bind$2 = uncurryThis$h(uncurryThis$h.bind);

	// optional / simple context binding
	var functionBindContext = function (fn, that) {
	  aCallable(fn);
	  return that === undefined ? fn : bind$2 ? bind$2(fn, that) : function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};

	var global$f = global$z;
	var uncurryThis$g = functionUncurryThis;
	var fails$e = fails$i;
	var classof$6 = classofRaw$1;

	var Object$1 = global$f.Object;
	var split = uncurryThis$g(''.split);

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var indexedObject = fails$e(function () {
	  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
	  // eslint-disable-next-line no-prototype-builtins -- safe
	  return !Object$1('z').propertyIsEnumerable(0);
	}) ? function (it) {
	  return classof$6(it) == 'String' ? split(it, '') : Object$1(it);
	} : Object$1;

	var ceil = Math.ceil;
	var floor = Math.floor;

	// `ToIntegerOrInfinity` abstract operation
	// https://tc39.es/ecma262/#sec-tointegerorinfinity
	var toIntegerOrInfinity$3 = function (argument) {
	  var number = +argument;
	  // eslint-disable-next-line no-self-compare -- safe
	  return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
	};

	var toIntegerOrInfinity$2 = toIntegerOrInfinity$3;

	var min$2 = Math.min;

	// `ToLength` abstract operation
	// https://tc39.es/ecma262/#sec-tolength
	var toLength$2 = function (argument) {
	  return argument > 0 ? min$2(toIntegerOrInfinity$2(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
	};

	var toLength$1 = toLength$2;

	// `LengthOfArrayLike` abstract operation
	// https://tc39.es/ecma262/#sec-lengthofarraylike
	var lengthOfArrayLike$3 = function (obj) {
	  return toLength$1(obj.length);
	};

	var classof$5 = classofRaw$1;

	// `IsArray` abstract operation
	// https://tc39.es/ecma262/#sec-isarray
	// eslint-disable-next-line es/no-array-isarray -- safe
	var isArray$2 = Array.isArray || function isArray(argument) {
	  return classof$5(argument) == 'Array';
	};

	var uncurryThis$f = functionUncurryThis;
	var fails$d = fails$i;
	var isCallable$5 = isCallable$f;
	var classof$4 = classof$8;
	var getBuiltIn$3 = getBuiltIn$6;
	var inspectSource = inspectSource$3;

	var noop = function () { /* empty */ };
	var empty = [];
	var construct = getBuiltIn$3('Reflect', 'construct');
	var constructorRegExp = /^\s*(?:class|function)\b/;
	var exec$2 = uncurryThis$f(constructorRegExp.exec);
	var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

	var isConstructorModern = function (argument) {
	  if (!isCallable$5(argument)) return false;
	  try {
	    construct(noop, empty, argument);
	    return true;
	  } catch (error) {
	    return false;
	  }
	};

	var isConstructorLegacy = function (argument) {
	  if (!isCallable$5(argument)) return false;
	  switch (classof$4(argument)) {
	    case 'AsyncFunction':
	    case 'GeneratorFunction':
	    case 'AsyncGeneratorFunction': return false;
	    // we can't check .prototype since constructors produced by .bind haven't it
	  } return INCORRECT_TO_STRING || !!exec$2(constructorRegExp, inspectSource(argument));
	};

	// `IsConstructor` abstract operation
	// https://tc39.es/ecma262/#sec-isconstructor
	var isConstructor$2 = !construct || fails$d(function () {
	  var called;
	  return isConstructorModern(isConstructorModern.call)
	    || !isConstructorModern(Object)
	    || !isConstructorModern(function () { called = true; })
	    || called;
	}) ? isConstructorLegacy : isConstructorModern;

	var global$e = global$z;
	var isArray$1 = isArray$2;
	var isConstructor$1 = isConstructor$2;
	var isObject$3 = isObject$9;
	var wellKnownSymbol$7 = wellKnownSymbol$b;

	var SPECIES$3 = wellKnownSymbol$7('species');
	var Array$2 = global$e.Array;

	// a part of `ArraySpeciesCreate` abstract operation
	// https://tc39.es/ecma262/#sec-arrayspeciescreate
	var arraySpeciesConstructor$1 = function (originalArray) {
	  var C;
	  if (isArray$1(originalArray)) {
	    C = originalArray.constructor;
	    // cross-realm fallback
	    if (isConstructor$1(C) && (C === Array$2 || isArray$1(C.prototype))) C = undefined;
	    else if (isObject$3(C)) {
	      C = C[SPECIES$3];
	      if (C === null) C = undefined;
	    }
	  } return C === undefined ? Array$2 : C;
	};

	var arraySpeciesConstructor = arraySpeciesConstructor$1;

	// `ArraySpeciesCreate` abstract operation
	// https://tc39.es/ecma262/#sec-arrayspeciescreate
	var arraySpeciesCreate$1 = function (originalArray, length) {
	  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
	};

	var bind$1 = functionBindContext;
	var uncurryThis$e = functionUncurryThis;
	var IndexedObject$2 = indexedObject;
	var toObject$3 = toObject$5;
	var lengthOfArrayLike$2 = lengthOfArrayLike$3;
	var arraySpeciesCreate = arraySpeciesCreate$1;

	var push$3 = uncurryThis$e([].push);

	// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
	var createMethod$3 = function (TYPE) {
	  var IS_MAP = TYPE == 1;
	  var IS_FILTER = TYPE == 2;
	  var IS_SOME = TYPE == 3;
	  var IS_EVERY = TYPE == 4;
	  var IS_FIND_INDEX = TYPE == 6;
	  var IS_FILTER_REJECT = TYPE == 7;
	  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
	  return function ($this, callbackfn, that, specificCreate) {
	    var O = toObject$3($this);
	    var self = IndexedObject$2(O);
	    var boundFunction = bind$1(callbackfn, that);
	    var length = lengthOfArrayLike$2(self);
	    var index = 0;
	    var create = specificCreate || arraySpeciesCreate;
	    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
	    var value, result;
	    for (;length > index; index++) if (NO_HOLES || index in self) {
	      value = self[index];
	      result = boundFunction(value, index, O);
	      if (TYPE) {
	        if (IS_MAP) target[index] = result; // map
	        else if (result) switch (TYPE) {
	          case 3: return true;              // some
	          case 5: return value;             // find
	          case 6: return index;             // findIndex
	          case 2: push$3(target, value);      // filter
	        } else switch (TYPE) {
	          case 4: return false;             // every
	          case 7: push$3(target, value);      // filterReject
	        }
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
	  };
	};

	var arrayIteration = {
	  // `Array.prototype.forEach` method
	  // https://tc39.es/ecma262/#sec-array.prototype.foreach
	  forEach: createMethod$3(0),
	  // `Array.prototype.map` method
	  // https://tc39.es/ecma262/#sec-array.prototype.map
	  map: createMethod$3(1),
	  // `Array.prototype.filter` method
	  // https://tc39.es/ecma262/#sec-array.prototype.filter
	  filter: createMethod$3(2),
	  // `Array.prototype.some` method
	  // https://tc39.es/ecma262/#sec-array.prototype.some
	  some: createMethod$3(3),
	  // `Array.prototype.every` method
	  // https://tc39.es/ecma262/#sec-array.prototype.every
	  every: createMethod$3(4),
	  // `Array.prototype.find` method
	  // https://tc39.es/ecma262/#sec-array.prototype.find
	  find: createMethod$3(5),
	  // `Array.prototype.findIndex` method
	  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
	  findIndex: createMethod$3(6),
	  // `Array.prototype.filterReject` method
	  // https://github.com/tc39/proposal-array-filtering
	  filterReject: createMethod$3(7)
	};

	var fails$c = fails$i;

	var arrayMethodIsStrict$1 = function (METHOD_NAME, argument) {
	  var method = [][METHOD_NAME];
	  return !!method && fails$c(function () {
	    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
	    method.call(null, argument || function () { throw 1; }, 1);
	  });
	};

	var $forEach$1 = arrayIteration.forEach;
	var arrayMethodIsStrict = arrayMethodIsStrict$1;

	var STRICT_METHOD = arrayMethodIsStrict('forEach');

	// `Array.prototype.forEach` method implementation
	// https://tc39.es/ecma262/#sec-array.prototype.foreach
	var arrayForEach = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
	  return $forEach$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	// eslint-disable-next-line es/no-array-prototype-foreach -- safe
	} : [].forEach;

	var global$d = global$z;
	var DOMIterables = domIterables;
	var DOMTokenListPrototype = domTokenListPrototype;
	var forEach = arrayForEach;
	var createNonEnumerableProperty$2 = createNonEnumerableProperty$5;

	var handlePrototype = function (CollectionPrototype) {
	  // some Chrome versions have non-configurable methods on DOMTokenList
	  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
	    createNonEnumerableProperty$2(CollectionPrototype, 'forEach', forEach);
	  } catch (error) {
	    CollectionPrototype.forEach = forEach;
	  }
	};

	for (var COLLECTION_NAME in DOMIterables) {
	  if (DOMIterables[COLLECTION_NAME]) {
	    handlePrototype(global$d[COLLECTION_NAME] && global$d[COLLECTION_NAME].prototype);
	  }
	}

	handlePrototype(DOMTokenListPrototype);

	var DESCRIPTORS$7 = descriptors;
	var FUNCTION_NAME_EXISTS = functionName.EXISTS;
	var uncurryThis$d = functionUncurryThis;
	var defineProperty$4 = objectDefineProperty.f;

	var FunctionPrototype$1 = Function.prototype;
	var functionToString = uncurryThis$d(FunctionPrototype$1.toString);
	var nameRE = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
	var regExpExec = uncurryThis$d(nameRE.exec);
	var NAME = 'name';

	// Function instances `.name` property
	// https://tc39.es/ecma262/#sec-function-instances-name
	if (DESCRIPTORS$7 && !FUNCTION_NAME_EXISTS) {
	  defineProperty$4(FunctionPrototype$1, NAME, {
	    configurable: true,
	    get: function () {
	      try {
	        return regExpExec(nameRE, functionToString(this))[1];
	      } catch (error) {
	        return '';
	      }
	    }
	  });
	}

	var fails$b = fails$i;
	var isCallable$4 = isCallable$f;

	var replacement = /#|\.prototype\./;

	var isForced$2 = function (feature, detection) {
	  var value = data[normalize(feature)];
	  return value == POLYFILL ? true
	    : value == NATIVE ? false
	    : isCallable$4(detection) ? fails$b(detection)
	    : !!detection;
	};

	var normalize = isForced$2.normalize = function (string) {
	  return String(string).replace(replacement, '.').toLowerCase();
	};

	var data = isForced$2.data = {};
	var NATIVE = isForced$2.NATIVE = 'N';
	var POLYFILL = isForced$2.POLYFILL = 'P';

	var isForced_1 = isForced$2;

	var global$c = global$z;
	var isCallable$3 = isCallable$f;

	var String$2 = global$c.String;
	var TypeError$5 = global$c.TypeError;

	var aPossiblePrototype$1 = function (argument) {
	  if (typeof argument == 'object' || isCallable$3(argument)) return argument;
	  throw TypeError$5("Can't set " + String$2(argument) + ' as a prototype');
	};

	/* eslint-disable no-proto -- safe */

	var uncurryThis$c = functionUncurryThis;
	var anObject$8 = anObject$a;
	var aPossiblePrototype = aPossiblePrototype$1;

	// `Object.setPrototypeOf` method
	// https://tc39.es/ecma262/#sec-object.setprototypeof
	// Works with __proto__ only. Old v8 can't work with null proto objects.
	// eslint-disable-next-line es/no-object-setprototypeof -- safe
	var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
	  var CORRECT_SETTER = false;
	  var test = {};
	  var setter;
	  try {
	    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	    setter = uncurryThis$c(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
	    setter(test, []);
	    CORRECT_SETTER = test instanceof Array;
	  } catch (error) { /* empty */ }
	  return function setPrototypeOf(O, proto) {
	    anObject$8(O);
	    aPossiblePrototype(proto);
	    if (CORRECT_SETTER) setter(O, proto);
	    else O.__proto__ = proto;
	    return O;
	  };
	}() : undefined);

	var isCallable$2 = isCallable$f;
	var isObject$2 = isObject$9;
	var setPrototypeOf = objectSetPrototypeOf;

	// makes subclassing work correct for wrapped built-ins
	var inheritIfRequired$1 = function ($this, dummy, Wrapper) {
	  var NewTarget, NewTargetPrototype;
	  if (
	    // it can work only with native `setPrototypeOf`
	    setPrototypeOf &&
	    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
	    isCallable$2(NewTarget = dummy.constructor) &&
	    NewTarget !== Wrapper &&
	    isObject$2(NewTargetPrototype = NewTarget.prototype) &&
	    NewTargetPrototype !== Wrapper.prototype
	  ) setPrototypeOf($this, NewTargetPrototype);
	  return $this;
	};

	var objectGetOwnPropertyNames = {};

	// toObject with fallback for non-array-like ES3 strings
	var IndexedObject$1 = indexedObject;
	var requireObjectCoercible$3 = requireObjectCoercible$5;

	var toIndexedObject$8 = function (it) {
	  return IndexedObject$1(requireObjectCoercible$3(it));
	};

	var toIntegerOrInfinity$1 = toIntegerOrInfinity$3;

	var max$1 = Math.max;
	var min$1 = Math.min;

	// Helper for a popular repeating case of the spec:
	// Let integer be ? ToInteger(index).
	// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
	var toAbsoluteIndex$2 = function (index, length) {
	  var integer = toIntegerOrInfinity$1(index);
	  return integer < 0 ? max$1(integer + length, 0) : min$1(integer, length);
	};

	var toIndexedObject$7 = toIndexedObject$8;
	var toAbsoluteIndex$1 = toAbsoluteIndex$2;
	var lengthOfArrayLike$1 = lengthOfArrayLike$3;

	// `Array.prototype.{ indexOf, includes }` methods implementation
	var createMethod$2 = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIndexedObject$7($this);
	    var length = lengthOfArrayLike$1(O);
	    var index = toAbsoluteIndex$1(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare -- NaN check
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare -- NaN check
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) {
	      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

	var arrayIncludes = {
	  // `Array.prototype.includes` method
	  // https://tc39.es/ecma262/#sec-array.prototype.includes
	  includes: createMethod$2(true),
	  // `Array.prototype.indexOf` method
	  // https://tc39.es/ecma262/#sec-array.prototype.indexof
	  indexOf: createMethod$2(false)
	};

	var uncurryThis$b = functionUncurryThis;
	var hasOwn$6 = hasOwnProperty_1;
	var toIndexedObject$6 = toIndexedObject$8;
	var indexOf$1 = arrayIncludes.indexOf;
	var hiddenKeys$3 = hiddenKeys$5;

	var push$2 = uncurryThis$b([].push);

	var objectKeysInternal = function (object, names) {
	  var O = toIndexedObject$6(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) !hasOwn$6(hiddenKeys$3, key) && hasOwn$6(O, key) && push$2(result, key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (hasOwn$6(O, key = names[i++])) {
	    ~indexOf$1(result, key) || push$2(result, key);
	  }
	  return result;
	};

	// IE8- don't enum bug keys
	var enumBugKeys$3 = [
	  'constructor',
	  'hasOwnProperty',
	  'isPrototypeOf',
	  'propertyIsEnumerable',
	  'toLocaleString',
	  'toString',
	  'valueOf'
	];

	var internalObjectKeys$1 = objectKeysInternal;
	var enumBugKeys$2 = enumBugKeys$3;

	var hiddenKeys$2 = enumBugKeys$2.concat('length', 'prototype');

	// `Object.getOwnPropertyNames` method
	// https://tc39.es/ecma262/#sec-object.getownpropertynames
	// eslint-disable-next-line es/no-object-getownpropertynames -- safe
	objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return internalObjectKeys$1(O, hiddenKeys$2);
	};

	var objectGetOwnPropertyDescriptor = {};

	var objectPropertyIsEnumerable = {};

	var $propertyIsEnumerable$1 = {}.propertyIsEnumerable;
	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

	// Nashorn ~ JDK8 bug
	var NASHORN_BUG = getOwnPropertyDescriptor$2 && !$propertyIsEnumerable$1.call({ 1: 2 }, 1);

	// `Object.prototype.propertyIsEnumerable` method implementation
	// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
	objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
	  var descriptor = getOwnPropertyDescriptor$2(this, V);
	  return !!descriptor && descriptor.enumerable;
	} : $propertyIsEnumerable$1;

	var DESCRIPTORS$6 = descriptors;
	var call$6 = functionCall;
	var propertyIsEnumerableModule$2 = objectPropertyIsEnumerable;
	var createPropertyDescriptor$2 = createPropertyDescriptor$4;
	var toIndexedObject$5 = toIndexedObject$8;
	var toPropertyKey$2 = toPropertyKey$4;
	var hasOwn$5 = hasOwnProperty_1;
	var IE8_DOM_DEFINE = ie8DomDefine;

	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

	// `Object.getOwnPropertyDescriptor` method
	// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
	objectGetOwnPropertyDescriptor.f = DESCRIPTORS$6 ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
	  O = toIndexedObject$5(O);
	  P = toPropertyKey$2(P);
	  if (IE8_DOM_DEFINE) try {
	    return $getOwnPropertyDescriptor$1(O, P);
	  } catch (error) { /* empty */ }
	  if (hasOwn$5(O, P)) return createPropertyDescriptor$2(!call$6(propertyIsEnumerableModule$2.f, O, P), O[P]);
	};

	var uncurryThis$a = functionUncurryThis;

	// `thisNumberValue` abstract operation
	// https://tc39.es/ecma262/#sec-thisnumbervalue
	var thisNumberValue$1 = uncurryThis$a(1.0.valueOf);

	var global$b = global$z;
	var classof$3 = classof$8;

	var String$1 = global$b.String;

	var toString$4 = function (argument) {
	  if (classof$3(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
	  return String$1(argument);
	};

	// a string of all valid unicode whitespaces
	var whitespaces$1 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
	  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

	var uncurryThis$9 = functionUncurryThis;
	var requireObjectCoercible$2 = requireObjectCoercible$5;
	var toString$3 = toString$4;
	var whitespaces = whitespaces$1;

	var replace$1 = uncurryThis$9(''.replace);
	var whitespace = '[' + whitespaces + ']';
	var ltrim = RegExp('^' + whitespace + whitespace + '*');
	var rtrim = RegExp(whitespace + whitespace + '*$');

	// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
	var createMethod$1 = function (TYPE) {
	  return function ($this) {
	    var string = toString$3(requireObjectCoercible$2($this));
	    if (TYPE & 1) string = replace$1(string, ltrim, '');
	    if (TYPE & 2) string = replace$1(string, rtrim, '');
	    return string;
	  };
	};

	var stringTrim = {
	  // `String.prototype.{ trimLeft, trimStart }` methods
	  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
	  start: createMethod$1(1),
	  // `String.prototype.{ trimRight, trimEnd }` methods
	  // https://tc39.es/ecma262/#sec-string.prototype.trimend
	  end: createMethod$1(2),
	  // `String.prototype.trim` method
	  // https://tc39.es/ecma262/#sec-string.prototype.trim
	  trim: createMethod$1(3)
	};

	var DESCRIPTORS$5 = descriptors;
	var global$a = global$z;
	var uncurryThis$8 = functionUncurryThis;
	var isForced$1 = isForced_1;
	var redefine$3 = redefine$5.exports;
	var hasOwn$4 = hasOwnProperty_1;
	var inheritIfRequired = inheritIfRequired$1;
	var isPrototypeOf$1 = objectIsPrototypeOf;
	var isSymbol$1 = isSymbol$4;
	var toPrimitive = toPrimitive$2;
	var fails$a = fails$i;
	var getOwnPropertyNames = objectGetOwnPropertyNames.f;
	var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
	var defineProperty$3 = objectDefineProperty.f;
	var thisNumberValue = thisNumberValue$1;
	var trim = stringTrim.trim;

	var NUMBER = 'Number';
	var NativeNumber = global$a[NUMBER];
	var NumberPrototype = NativeNumber.prototype;
	var TypeError$4 = global$a.TypeError;
	var arraySlice$4 = uncurryThis$8(''.slice);
	var charCodeAt$1 = uncurryThis$8(''.charCodeAt);

	// `ToNumeric` abstract operation
	// https://tc39.es/ecma262/#sec-tonumeric
	var toNumeric = function (value) {
	  var primValue = toPrimitive(value, 'number');
	  return typeof primValue == 'bigint' ? primValue : toNumber(primValue);
	};

	// `ToNumber` abstract operation
	// https://tc39.es/ecma262/#sec-tonumber
	var toNumber = function (argument) {
	  var it = toPrimitive(argument, 'number');
	  var first, third, radix, maxCode, digits, length, index, code;
	  if (isSymbol$1(it)) throw TypeError$4('Cannot convert a Symbol value to a number');
	  if (typeof it == 'string' && it.length > 2) {
	    it = trim(it);
	    first = charCodeAt$1(it, 0);
	    if (first === 43 || first === 45) {
	      third = charCodeAt$1(it, 2);
	      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if (first === 48) {
	      switch (charCodeAt$1(it, 1)) {
	        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
	        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
	        default: return +it;
	      }
	      digits = arraySlice$4(it, 2);
	      length = digits.length;
	      for (index = 0; index < length; index++) {
	        code = charCodeAt$1(digits, index);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if (code < 48 || code > maxCode) return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
	};

	// `Number` constructor
	// https://tc39.es/ecma262/#sec-number-constructor
	if (isForced$1(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
	  var NumberWrapper = function Number(value) {
	    var n = arguments.length < 1 ? 0 : NativeNumber(toNumeric(value));
	    var dummy = this;
	    // check on 1..constructor(foo) case
	    return isPrototypeOf$1(NumberPrototype, dummy) && fails$a(function () { thisNumberValue(dummy); })
	      ? inheritIfRequired(Object(n), dummy, NumberWrapper) : n;
	  };
	  for (var keys = DESCRIPTORS$5 ? getOwnPropertyNames(NativeNumber) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES2015 (in case, if modules with ES2015 Number statics required before):
	    'EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,' +
	    // ESNext
	    'fromString,range'
	  ).split(','), j = 0, key; keys.length > j; j++) {
	    if (hasOwn$4(NativeNumber, key = keys[j]) && !hasOwn$4(NumberWrapper, key)) {
	      defineProperty$3(NumberWrapper, key, getOwnPropertyDescriptor$1(NativeNumber, key));
	    }
	  }
	  NumberWrapper.prototype = NumberPrototype;
	  NumberPrototype.constructor = NumberWrapper;
	  redefine$3(global$a, NUMBER, NumberWrapper);
	}

	var objectGetOwnPropertySymbols = {};

	// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
	objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

	var getBuiltIn$2 = getBuiltIn$6;
	var uncurryThis$7 = functionUncurryThis;
	var getOwnPropertyNamesModule$1 = objectGetOwnPropertyNames;
	var getOwnPropertySymbolsModule$2 = objectGetOwnPropertySymbols;
	var anObject$7 = anObject$a;

	var concat$1 = uncurryThis$7([].concat);

	// all object keys, includes non-enumerable and symbols
	var ownKeys$4 = getBuiltIn$2('Reflect', 'ownKeys') || function ownKeys(it) {
	  var keys = getOwnPropertyNamesModule$1.f(anObject$7(it));
	  var getOwnPropertySymbols = getOwnPropertySymbolsModule$2.f;
	  return getOwnPropertySymbols ? concat$1(keys, getOwnPropertySymbols(it)) : keys;
	};

	var hasOwn$3 = hasOwnProperty_1;
	var ownKeys$3 = ownKeys$4;
	var getOwnPropertyDescriptorModule$2 = objectGetOwnPropertyDescriptor;
	var definePropertyModule$3 = objectDefineProperty;

	var copyConstructorProperties$1 = function (target, source) {
	  var keys = ownKeys$3(source);
	  var defineProperty = definePropertyModule$3.f;
	  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule$2.f;
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    if (!hasOwn$3(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
	  }
	};

	var global$9 = global$z;
	var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
	var createNonEnumerableProperty$1 = createNonEnumerableProperty$5;
	var redefine$2 = redefine$5.exports;
	var setGlobal = setGlobal$3;
	var copyConstructorProperties = copyConstructorProperties$1;
	var isForced = isForced_1;

	/*
	  options.target      - name of the target object
	  options.global      - target is the global object
	  options.stat        - export as static methods of target
	  options.proto       - export as prototype methods of target
	  options.real        - real prototype method for the `pure` version
	  options.forced      - export even if the native feature is available
	  options.bind        - bind methods to the target, required for the `pure` version
	  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
	  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
	  options.sham        - add a flag to not completely full polyfills
	  options.enumerable  - export as enumerable property
	  options.noTargetGet - prevent calling a getter on target
	  options.name        - the .name of the function if it does not match the key
	*/
	var _export = function (options, source) {
	  var TARGET = options.target;
	  var GLOBAL = options.global;
	  var STATIC = options.stat;
	  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
	  if (GLOBAL) {
	    target = global$9;
	  } else if (STATIC) {
	    target = global$9[TARGET] || setGlobal(TARGET, {});
	  } else {
	    target = (global$9[TARGET] || {}).prototype;
	  }
	  if (target) for (key in source) {
	    sourceProperty = source[key];
	    if (options.noTargetGet) {
	      descriptor = getOwnPropertyDescriptor(target, key);
	      targetProperty = descriptor && descriptor.value;
	    } else targetProperty = target[key];
	    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
	    // contained in target
	    if (!FORCED && targetProperty !== undefined) {
	      if (typeof sourceProperty == typeof targetProperty) continue;
	      copyConstructorProperties(sourceProperty, targetProperty);
	    }
	    // add a flag to not completely full polyfills
	    if (options.sham || (targetProperty && targetProperty.sham)) {
	      createNonEnumerableProperty$1(sourceProperty, 'sham', true);
	    }
	    // extend global
	    redefine$2(target, key, sourceProperty, options);
	  }
	};

	var internalObjectKeys = objectKeysInternal;
	var enumBugKeys$1 = enumBugKeys$3;

	// `Object.keys` method
	// https://tc39.es/ecma262/#sec-object.keys
	// eslint-disable-next-line es/no-object-keys -- safe
	var objectKeys$3 = Object.keys || function keys(O) {
	  return internalObjectKeys(O, enumBugKeys$1);
	};

	var DESCRIPTORS$4 = descriptors;
	var uncurryThis$6 = functionUncurryThis;
	var call$5 = functionCall;
	var fails$9 = fails$i;
	var objectKeys$2 = objectKeys$3;
	var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
	var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
	var toObject$2 = toObject$5;
	var IndexedObject = indexedObject;

	// eslint-disable-next-line es/no-object-assign -- safe
	var $assign = Object.assign;
	// eslint-disable-next-line es/no-object-defineproperty -- required for testing
	var defineProperty$2 = Object.defineProperty;
	var concat = uncurryThis$6([].concat);

	// `Object.assign` method
	// https://tc39.es/ecma262/#sec-object.assign
	var objectAssign = !$assign || fails$9(function () {
	  // should have correct order of operations (Edge bug)
	  if (DESCRIPTORS$4 && $assign({ b: 1 }, $assign(defineProperty$2({}, 'a', {
	    enumerable: true,
	    get: function () {
	      defineProperty$2(this, 'b', {
	        value: 3,
	        enumerable: false
	      });
	    }
	  }), { b: 2 })).b !== 1) return true;
	  // should work with symbols and should have deterministic property order (V8 bug)
	  var A = {};
	  var B = {};
	  // eslint-disable-next-line es/no-symbol -- safe
	  var symbol = Symbol();
	  var alphabet = 'abcdefghijklmnopqrst';
	  A[symbol] = 7;
	  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
	  return $assign({}, A)[symbol] != 7 || objectKeys$2($assign({}, B)).join('') != alphabet;
	}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
	  var T = toObject$2(target);
	  var argumentsLength = arguments.length;
	  var index = 1;
	  var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
	  var propertyIsEnumerable = propertyIsEnumerableModule$1.f;
	  while (argumentsLength > index) {
	    var S = IndexedObject(arguments[index++]);
	    var keys = getOwnPropertySymbols ? concat(objectKeys$2(S), getOwnPropertySymbols(S)) : objectKeys$2(S);
	    var length = keys.length;
	    var j = 0;
	    var key;
	    while (length > j) {
	      key = keys[j++];
	      if (!DESCRIPTORS$4 || call$5(propertyIsEnumerable, S, key)) T[key] = S[key];
	    }
	  } return T;
	} : $assign;

	var $$7 = _export;
	var assign = objectAssign;

	// `Object.assign` method
	// https://tc39.es/ecma262/#sec-object.assign
	// eslint-disable-next-line es/no-object-assign -- required for testing
	$$7({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
	  assign: assign
	});

	// import "codemirror/lib/codemirror.css"
	// import "codemirror/mode/javascript/javascript"
	// import "codemirror/addon/selection/active-line"
	// import "codemirror/keymap/sublime"
	// import "codemirror/mode/css/css"
	// import "codemirror/theme/monokai.css"
	// import "codemirror/addon/lint/lint"
	// import "codemirror/addon/lint/lint.css"
	// import "codemirror/addon/lint/json-lint"
	// import "codemirror/addon/display/autorefresh"
	// // require('codemirror/mode/css/css')
	// // require('codemirror/theme/monokai.css')
	// // require('codemirror/addon/lint/lint.js')
	// // require('codemirror/addon/lint/lint.css')
	// // require('codemirror/addon/lint/json-lint.js')
	// // require('codemirror/addon/display/autorefresh.js')
	// window.jsonlint = jsonlint

	var script$6 = {
	  mame: "Codemirror",
	  components: {
	    codemirror: vueCodemirror.codemirror
	  },
	  model: {
	    prop: "code",
	    event: "input"
	  },
	  props: {
	    code: {
	      default: function _default() {
	        return "";
	      }
	    },
	    mode: {
	      type: String,
	      default: "application/json"
	    },
	    options: {
	      type: Object,
	      default: function _default() {}
	    },
	    extraClass: String,
	    edit: {
	      type: Boolean,
	      default: false
	    }
	  },
	  computed: {
	    mergeOptions: function mergeOptions() {
	      return Object.assign({}, this.defaultOption(), this.options);
	    },
	    codemirror: function codemirror() {
	      return this.$refs.CodeMirror.codemirror;
	    }
	  },
	  methods: {
	    defaultOption: function defaultOption() {
	      return {
	        mode: this.mode,
	        tabSize: 2,
	        lineNumbers: true,
	        lineWrapping: true,
	        // theme: "monokai",
	        // viewportMargin: Infinity,
	        extraKeys: {
	          "Ctrl-Space": "autocomplete"
	        },
	        styleActiveLine: false,
	        highlightDifferences: true,
	        keyMap: "sublime",
	        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter", "CodeMirror-lint-markers"],
	        lint: true,
	        autoRefresh: true,
	        readOnly: false
	      };
	    },
	    handleInput: function handleInput(value) {
	      this.$emit("input", value);
	    }
	  }
	};

	function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
	    if (typeof shadowMode !== 'boolean') {
	        createInjectorSSR = createInjector;
	        createInjector = shadowMode;
	        shadowMode = false;
	    }
	    // Vue.extend constructor export interop.
	    const options = typeof script === 'function' ? script.options : script;
	    // render functions
	    if (template && template.render) {
	        options.render = template.render;
	        options.staticRenderFns = template.staticRenderFns;
	        options._compiled = true;
	        // functional template
	        if (isFunctionalTemplate) {
	            options.functional = true;
	        }
	    }
	    // scopedId
	    if (scopeId) {
	        options._scopeId = scopeId;
	    }
	    let hook;
	    if (moduleIdentifier) {
	        // server build
	        hook = function (context) {
	            // 2.3 injection
	            context =
	                context || // cached call
	                    (this.$vnode && this.$vnode.ssrContext) || // stateful
	                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
	            // 2.2 with runInNewContext: true
	            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
	                context = __VUE_SSR_CONTEXT__;
	            }
	            // inject component styles
	            if (style) {
	                style.call(this, createInjectorSSR(context));
	            }
	            // register component module identifier for async chunk inference
	            if (context && context._registeredComponents) {
	                context._registeredComponents.add(moduleIdentifier);
	            }
	        };
	        // used by ssr in case component is cached and beforeCreate
	        // never gets called
	        options._ssrRegister = hook;
	    }
	    else if (style) {
	        hook = shadowMode
	            ? function (context) {
	                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
	            }
	            : function (context) {
	                style.call(this, createInjector(context));
	            };
	    }
	    if (hook) {
	        if (options.functional) {
	            // register for functional component in vue file
	            const originalRender = options.render;
	            options.render = function renderWithStyleInjection(h, context) {
	                hook.call(context);
	                return originalRender(h, context);
	            };
	        }
	        else {
	            // inject component registration as beforeCreate hook
	            const existing = options.beforeCreate;
	            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
	        }
	    }
	    return script;
	}

	/* script */
	var __vue_script__$7 = script$6;
	/* template */

	var __vue_render__$7 = function __vue_render__() {
	  var _vm = this;

	  var _h = _vm.$createElement;

	  var _c = _vm._self._c || _h;

	  return _c("div", {
	    staticClass: "code-mirror",
	    class: [{
	      "code-mirror__edit": _vm.edit
	    }, _vm.extraClass]
	  }, [_c("codemirror", {
	    ref: "CodeMirror",
	    staticClass: "editor",
	    attrs: {
	      value: _vm.code,
	      options: _vm.mergeOptions
	    },
	    on: {
	      input: _vm.handleInput
	    }
	  })], 1);
	};

	var __vue_staticRenderFns__$7 = [];
	__vue_render__$7._withStripped = true;
	/* style */

	var __vue_inject_styles__$7 = undefined;
	/* scoped */

	var __vue_scope_id__$7 = "data-v-8623d7ce";
	/* module identifier */

	var __vue_module_identifier__$7 = undefined;
	/* functional template */

	var __vue_is_functional_template__$7 = false;
	/* style inject */

	/* style inject SSR */

	/* style inject shadow dom */

	var __vue_component__$7 = /*#__PURE__*/normalizeComponent({
	  render: __vue_render__$7,
	  staticRenderFns: __vue_staticRenderFns__$7
	}, __vue_inject_styles__$7, __vue_script__$7, __vue_scope_id__$7, __vue_is_functional_template__$7, __vue_module_identifier__$7, false, undefined, undefined, undefined);

	var script$5 = {
	  name: "CodemirrorTab",
	  components: {
	    Codemirror: __vue_component__$7
	  },
	  props: {
	    value: {
	      type: [String, Number],
	      default: 0
	    },
	    simples: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    }
	  },
	  methods: {
	    changeRequestExample: function changeRequestExample(index) {
	      this.$emit("input", index);
	    }
	  }
	};

	/* script */
	var __vue_script__$6 = script$5;
	/* template */

	var __vue_render__$6 = function __vue_render__() {
	  var _vm = this;

	  var _h = _vm.$createElement;

	  var _c = _vm._self._c || _h;

	  return _c("div", {
	    staticClass: "codemirror-tab"
	  }, [_c("div", {
	    staticClass: "request-type tabs"
	  }, _vm._l(_vm.simples, function (item, index) {
	    return _c("div", {
	      key: index,
	      class: ["tab-item", _vm.value == index && "active"],
	      on: {
	        click: function click($event) {
	          return _vm.changeRequestExample(index, item);
	        }
	      }
	    }, [_vm._v("\n      " + _vm._s(item.label) + "\n    ")]);
	  }), 0), _vm._v(" "), _c("Codemirror", {
	    attrs: {
	      code: _vm.simples[_vm.value].simple,
	      mode: "text/javascript"
	    }
	  })], 1);
	};

	var __vue_staticRenderFns__$6 = [];
	__vue_render__$6._withStripped = true;
	/* style */

	var __vue_inject_styles__$6 = undefined;
	/* scoped */

	var __vue_scope_id__$6 = "data-v-096cc92d";
	/* module identifier */

	var __vue_module_identifier__$6 = undefined;
	/* functional template */

	var __vue_is_functional_template__$6 = false;
	/* style inject */

	/* style inject SSR */

	/* style inject shadow dom */

	var __vue_component__$6 = /*#__PURE__*/normalizeComponent({
	  render: __vue_render__$6,
	  staticRenderFns: __vue_staticRenderFns__$6
	}, __vue_inject_styles__$6, __vue_script__$6, __vue_scope_id__$6, __vue_is_functional_template__$6, __vue_module_identifier__$6, false, undefined, undefined, undefined);

	//
	var script$4 = {
	  name: "HttpSection",
	  props: {
	    title: {
	      type: String,
	      default: ""
	    },
	    data: {
	      type: [Array, Object, String, Boolean]
	    }
	  },
	  data: function data() {
	    return {
	      visible: false
	    };
	  },
	  watch: {
	    data: {
	      handler: function handler() {
	        if (!this.disabled) {
	          this.visible = true;
	        }
	      },
	      immediate: true
	    }
	  },
	  computed: {
	    disabled: function disabled() {
	      if (___default["default"].isArray(this.data)) {
	        if (this.data.length) {
	          return false;
	        }

	        return true;
	      } else {
	        return ___default["default"].isEmpty(this.data);
	      }
	    }
	  },
	  methods: {
	    changeVisible: function changeVisible() {
	      // 如果是禁用状态，不显示内容
	      if (this.disabled) {
	        this.visible = false;
	        return;
	      }

	      this.visible = !this.visible;
	    }
	  }
	};

	/* script */
	var __vue_script__$5 = script$4;
	/* template */

	var __vue_render__$5 = function __vue_render__() {
	  var _vm = this;

	  var _h = _vm.$createElement;

	  var _c = _vm._self._c || _h;

	  return !_vm.disabled ? _c("div", {
	    staticClass: "section"
	  }, [_c("div", {
	    staticClass: "sub-title",
	    on: {
	      click: _vm.changeVisible
	    }
	  }, [!_vm.disabled ? _c("span", {
	    class: !_vm.visible ? "arrow-right" : "arrow-bottom"
	  }) : _vm._e(), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.title))])]), _vm._v(" "), _vm._t("default", null, {
	    data: _vm.data,
	    visible: _vm.visible
	  })], 2) : _vm._e();
	};

	var __vue_staticRenderFns__$5 = [];
	__vue_render__$5._withStripped = true;
	/* style */

	var __vue_inject_styles__$5 = undefined;
	/* scoped */

	var __vue_scope_id__$5 = "data-v-08d377c8";
	/* module identifier */

	var __vue_module_identifier__$5 = undefined;
	/* functional template */

	var __vue_is_functional_template__$5 = false;
	/* style inject */

	/* style inject SSR */

	/* style inject shadow dom */

	var __vue_component__$5 = /*#__PURE__*/normalizeComponent({
	  render: __vue_render__$5,
	  staticRenderFns: __vue_staticRenderFns__$5
	}, __vue_inject_styles__$5, __vue_script__$5, __vue_scope_id__$5, __vue_is_functional_template__$5, __vue_module_identifier__$5, false, undefined, undefined, undefined);

	var $$6 = _export;
	var toObject$1 = toObject$5;
	var nativeKeys = objectKeys$3;
	var fails$8 = fails$i;

	var FAILS_ON_PRIMITIVES$1 = fails$8(function () { nativeKeys(1); });

	// `Object.keys` method
	// https://tc39.es/ecma262/#sec-object.keys
	$$6({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$1 }, {
	  keys: function keys(it) {
	    return nativeKeys(toObject$1(it));
	  }
	});

	var FunctionPrototype = Function.prototype;
	var apply$2 = FunctionPrototype.apply;
	var bind = FunctionPrototype.bind;
	var call$4 = FunctionPrototype.call;

	// eslint-disable-next-line es/no-reflect -- safe
	var functionApply = typeof Reflect == 'object' && Reflect.apply || (bind ? call$4.bind(apply$2) : function () {
	  return call$4.apply(apply$2, arguments);
	});

	var DESCRIPTORS$3 = descriptors;
	var definePropertyModule$2 = objectDefineProperty;
	var anObject$6 = anObject$a;
	var toIndexedObject$4 = toIndexedObject$8;
	var objectKeys$1 = objectKeys$3;

	// `Object.defineProperties` method
	// https://tc39.es/ecma262/#sec-object.defineproperties
	// eslint-disable-next-line es/no-object-defineproperties -- safe
	var objectDefineProperties = DESCRIPTORS$3 ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject$6(O);
	  var props = toIndexedObject$4(Properties);
	  var keys = objectKeys$1(Properties);
	  var length = keys.length;
	  var index = 0;
	  var key;
	  while (length > index) definePropertyModule$2.f(O, key = keys[index++], props[key]);
	  return O;
	};

	var getBuiltIn$1 = getBuiltIn$6;

	var html$1 = getBuiltIn$1('document', 'documentElement');

	/* global ActiveXObject -- old IE, WSH */

	var anObject$5 = anObject$a;
	var defineProperties = objectDefineProperties;
	var enumBugKeys = enumBugKeys$3;
	var hiddenKeys$1 = hiddenKeys$5;
	var html = html$1;
	var documentCreateElement = documentCreateElement$2;
	var sharedKey$1 = sharedKey$3;

	var GT = '>';
	var LT = '<';
	var PROTOTYPE$1 = 'prototype';
	var SCRIPT = 'script';
	var IE_PROTO = sharedKey$1('IE_PROTO');

	var EmptyConstructor = function () { /* empty */ };

	var scriptTag = function (content) {
	  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
	};

	// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
	var NullProtoObjectViaActiveX = function (activeXDocument) {
	  activeXDocument.write(scriptTag(''));
	  activeXDocument.close();
	  var temp = activeXDocument.parentWindow.Object;
	  activeXDocument = null; // avoid memory leak
	  return temp;
	};

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var NullProtoObjectViaIFrame = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = documentCreateElement('iframe');
	  var JS = 'java' + SCRIPT + ':';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  html.appendChild(iframe);
	  // https://github.com/zloirock/core-js/issues/475
	  iframe.src = String(JS);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(scriptTag('document.F=Object'));
	  iframeDocument.close();
	  return iframeDocument.F;
	};

	// Check for document.domain and active x support
	// No need to use active x approach when document.domain is not set
	// see https://github.com/es-shims/es5-shim/issues/150
	// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
	// avoid IE GC bug
	var activeXDocument;
	var NullProtoObject = function () {
	  try {
	    activeXDocument = new ActiveXObject('htmlfile');
	  } catch (error) { /* ignore */ }
	  NullProtoObject = typeof document != 'undefined'
	    ? document.domain && activeXDocument
	      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
	      : NullProtoObjectViaIFrame()
	    : NullProtoObjectViaActiveX(activeXDocument); // WSH
	  var length = enumBugKeys.length;
	  while (length--) delete NullProtoObject[PROTOTYPE$1][enumBugKeys[length]];
	  return NullProtoObject();
	};

	hiddenKeys$1[IE_PROTO] = true;

	// `Object.create` method
	// https://tc39.es/ecma262/#sec-object.create
	var objectCreate = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    EmptyConstructor[PROTOTYPE$1] = anObject$5(O);
	    result = new EmptyConstructor();
	    EmptyConstructor[PROTOTYPE$1] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = NullProtoObject();
	  return Properties === undefined ? result : defineProperties(result, Properties);
	};

	var objectGetOwnPropertyNamesExternal = {};

	var toPropertyKey$1 = toPropertyKey$4;
	var definePropertyModule$1 = objectDefineProperty;
	var createPropertyDescriptor$1 = createPropertyDescriptor$4;

	var createProperty$2 = function (object, key, value) {
	  var propertyKey = toPropertyKey$1(key);
	  if (propertyKey in object) definePropertyModule$1.f(object, propertyKey, createPropertyDescriptor$1(0, value));
	  else object[propertyKey] = value;
	};

	var global$8 = global$z;
	var toAbsoluteIndex = toAbsoluteIndex$2;
	var lengthOfArrayLike = lengthOfArrayLike$3;
	var createProperty$1 = createProperty$2;

	var Array$1 = global$8.Array;
	var max = Math.max;

	var arraySliceSimple = function (O, start, end) {
	  var length = lengthOfArrayLike(O);
	  var k = toAbsoluteIndex(start, length);
	  var fin = toAbsoluteIndex(end === undefined ? length : end, length);
	  var result = Array$1(max(fin - k, 0));
	  for (var n = 0; k < fin; k++, n++) createProperty$1(result, n, O[k]);
	  result.length = n;
	  return result;
	};

	/* eslint-disable es/no-object-getownpropertynames -- safe */

	var classof$2 = classofRaw$1;
	var toIndexedObject$3 = toIndexedObject$8;
	var $getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
	var arraySlice$3 = arraySliceSimple;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function (it) {
	  try {
	    return $getOwnPropertyNames$1(it);
	  } catch (error) {
	    return arraySlice$3(windowNames);
	  }
	};

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	objectGetOwnPropertyNamesExternal.f = function getOwnPropertyNames(it) {
	  return windowNames && classof$2(it) == 'Window'
	    ? getWindowNames(it)
	    : $getOwnPropertyNames$1(toIndexedObject$3(it));
	};

	var uncurryThis$5 = functionUncurryThis;

	var arraySlice$2 = uncurryThis$5([].slice);

	var wellKnownSymbolWrapped = {};

	var wellKnownSymbol$6 = wellKnownSymbol$b;

	wellKnownSymbolWrapped.f = wellKnownSymbol$6;

	var global$7 = global$z;

	var path$1 = global$7;

	var path = path$1;
	var hasOwn$2 = hasOwnProperty_1;
	var wrappedWellKnownSymbolModule$1 = wellKnownSymbolWrapped;
	var defineProperty$1 = objectDefineProperty.f;

	var defineWellKnownSymbol$1 = function (NAME) {
	  var Symbol = path.Symbol || (path.Symbol = {});
	  if (!hasOwn$2(Symbol, NAME)) defineProperty$1(Symbol, NAME, {
	    value: wrappedWellKnownSymbolModule$1.f(NAME)
	  });
	};

	var defineProperty = objectDefineProperty.f;
	var hasOwn$1 = hasOwnProperty_1;
	var wellKnownSymbol$5 = wellKnownSymbol$b;

	var TO_STRING_TAG = wellKnownSymbol$5('toStringTag');

	var setToStringTag$1 = function (it, TAG, STATIC) {
	  if (it && !hasOwn$1(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
	    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
	  }
	};

	var $$5 = _export;
	var global$6 = global$z;
	var getBuiltIn = getBuiltIn$6;
	var apply$1 = functionApply;
	var call$3 = functionCall;
	var uncurryThis$4 = functionUncurryThis;
	var DESCRIPTORS$2 = descriptors;
	var NATIVE_SYMBOL = nativeSymbol;
	var fails$7 = fails$i;
	var hasOwn = hasOwnProperty_1;
	var isArray = isArray$2;
	var isCallable$1 = isCallable$f;
	var isObject$1 = isObject$9;
	var isPrototypeOf = objectIsPrototypeOf;
	var isSymbol = isSymbol$4;
	var anObject$4 = anObject$a;
	var toObject = toObject$5;
	var toIndexedObject$2 = toIndexedObject$8;
	var toPropertyKey = toPropertyKey$4;
	var $toString = toString$4;
	var createPropertyDescriptor = createPropertyDescriptor$4;
	var nativeObjectCreate = objectCreate;
	var objectKeys = objectKeys$3;
	var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
	var getOwnPropertyNamesExternal = objectGetOwnPropertyNamesExternal;
	var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
	var getOwnPropertyDescriptorModule$1 = objectGetOwnPropertyDescriptor;
	var definePropertyModule = objectDefineProperty;
	var propertyIsEnumerableModule = objectPropertyIsEnumerable;
	var arraySlice$1 = arraySlice$2;
	var redefine$1 = redefine$5.exports;
	var shared$1 = shared$5.exports;
	var sharedKey = sharedKey$3;
	var hiddenKeys = hiddenKeys$5;
	var uid = uid$3;
	var wellKnownSymbol$4 = wellKnownSymbol$b;
	var wrappedWellKnownSymbolModule = wellKnownSymbolWrapped;
	var defineWellKnownSymbol = defineWellKnownSymbol$1;
	var setToStringTag = setToStringTag$1;
	var InternalStateModule = internalState;
	var $forEach = arrayIteration.forEach;

	var HIDDEN = sharedKey('hidden');
	var SYMBOL = 'Symbol';
	var PROTOTYPE = 'prototype';
	var TO_PRIMITIVE = wellKnownSymbol$4('toPrimitive');

	var setInternalState = InternalStateModule.set;
	var getInternalState$1 = InternalStateModule.getterFor(SYMBOL);

	var ObjectPrototype = Object[PROTOTYPE];
	var $Symbol = global$6.Symbol;
	var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
	var TypeError$3 = global$6.TypeError;
	var QObject = global$6.QObject;
	var $stringify = getBuiltIn('JSON', 'stringify');
	var nativeGetOwnPropertyDescriptor$1 = getOwnPropertyDescriptorModule$1.f;
	var nativeDefineProperty = definePropertyModule.f;
	var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
	var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
	var push$1 = uncurryThis$4([].push);

	var AllSymbols = shared$1('symbols');
	var ObjectPrototypeSymbols = shared$1('op-symbols');
	var StringToSymbolRegistry = shared$1('string-to-symbol-registry');
	var SymbolToStringRegistry = shared$1('symbol-to-string-registry');
	var WellKnownSymbolsStore = shared$1('wks');

	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDescriptor = DESCRIPTORS$2 && fails$7(function () {
	  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
	    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
	  })).a != 7;
	}) ? function (O, P, Attributes) {
	  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor$1(ObjectPrototype, P);
	  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
	  nativeDefineProperty(O, P, Attributes);
	  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
	    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
	  }
	} : nativeDefineProperty;

	var wrap = function (tag, description) {
	  var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype);
	  setInternalState(symbol, {
	    type: SYMBOL,
	    tag: tag,
	    description: description
	  });
	  if (!DESCRIPTORS$2) symbol.description = description;
	  return symbol;
	};

	var $defineProperty = function defineProperty(O, P, Attributes) {
	  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
	  anObject$4(O);
	  var key = toPropertyKey(P);
	  anObject$4(Attributes);
	  if (hasOwn(AllSymbols, key)) {
	    if (!Attributes.enumerable) {
	      if (!hasOwn(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
	      O[HIDDEN][key] = true;
	    } else {
	      if (hasOwn(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
	      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
	    } return setSymbolDescriptor(O, key, Attributes);
	  } return nativeDefineProperty(O, key, Attributes);
	};

	var $defineProperties = function defineProperties(O, Properties) {
	  anObject$4(O);
	  var properties = toIndexedObject$2(Properties);
	  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
	  $forEach(keys, function (key) {
	    if (!DESCRIPTORS$2 || call$3($propertyIsEnumerable, properties, key)) $defineProperty(O, key, properties[key]);
	  });
	  return O;
	};

	var $create = function create(O, Properties) {
	  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
	};

	var $propertyIsEnumerable = function propertyIsEnumerable(V) {
	  var P = toPropertyKey(V);
	  var enumerable = call$3(nativePropertyIsEnumerable, this, P);
	  if (this === ObjectPrototype && hasOwn(AllSymbols, P) && !hasOwn(ObjectPrototypeSymbols, P)) return false;
	  return enumerable || !hasOwn(this, P) || !hasOwn(AllSymbols, P) || hasOwn(this, HIDDEN) && this[HIDDEN][P]
	    ? enumerable : true;
	};

	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
	  var it = toIndexedObject$2(O);
	  var key = toPropertyKey(P);
	  if (it === ObjectPrototype && hasOwn(AllSymbols, key) && !hasOwn(ObjectPrototypeSymbols, key)) return;
	  var descriptor = nativeGetOwnPropertyDescriptor$1(it, key);
	  if (descriptor && hasOwn(AllSymbols, key) && !(hasOwn(it, HIDDEN) && it[HIDDEN][key])) {
	    descriptor.enumerable = true;
	  }
	  return descriptor;
	};

	var $getOwnPropertyNames = function getOwnPropertyNames(O) {
	  var names = nativeGetOwnPropertyNames(toIndexedObject$2(O));
	  var result = [];
	  $forEach(names, function (key) {
	    if (!hasOwn(AllSymbols, key) && !hasOwn(hiddenKeys, key)) push$1(result, key);
	  });
	  return result;
	};

	var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
	  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
	  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject$2(O));
	  var result = [];
	  $forEach(names, function (key) {
	    if (hasOwn(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn(ObjectPrototype, key))) {
	      push$1(result, AllSymbols[key]);
	    }
	  });
	  return result;
	};

	// `Symbol` constructor
	// https://tc39.es/ecma262/#sec-symbol-constructor
	if (!NATIVE_SYMBOL) {
	  $Symbol = function Symbol() {
	    if (isPrototypeOf(SymbolPrototype, this)) throw TypeError$3('Symbol is not a constructor');
	    var description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0]);
	    var tag = uid(description);
	    var setter = function (value) {
	      if (this === ObjectPrototype) call$3(setter, ObjectPrototypeSymbols, value);
	      if (hasOwn(this, HIDDEN) && hasOwn(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
	    };
	    if (DESCRIPTORS$2 && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
	    return wrap(tag, description);
	  };

	  SymbolPrototype = $Symbol[PROTOTYPE];

	  redefine$1(SymbolPrototype, 'toString', function toString() {
	    return getInternalState$1(this).tag;
	  });

	  redefine$1($Symbol, 'withoutSetter', function (description) {
	    return wrap(uid(description), description);
	  });

	  propertyIsEnumerableModule.f = $propertyIsEnumerable;
	  definePropertyModule.f = $defineProperty;
	  getOwnPropertyDescriptorModule$1.f = $getOwnPropertyDescriptor;
	  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
	  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

	  wrappedWellKnownSymbolModule.f = function (name) {
	    return wrap(wellKnownSymbol$4(name), name);
	  };

	  if (DESCRIPTORS$2) {
	    // https://github.com/tc39/proposal-Symbol-description
	    nativeDefineProperty(SymbolPrototype, 'description', {
	      configurable: true,
	      get: function description() {
	        return getInternalState$1(this).description;
	      }
	    });
	    {
	      redefine$1(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
	    }
	  }
	}

	$$5({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
	  Symbol: $Symbol
	});

	$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
	  defineWellKnownSymbol(name);
	});

	$$5({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
	  // `Symbol.for` method
	  // https://tc39.es/ecma262/#sec-symbol.for
	  'for': function (key) {
	    var string = $toString(key);
	    if (hasOwn(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
	    var symbol = $Symbol(string);
	    StringToSymbolRegistry[string] = symbol;
	    SymbolToStringRegistry[symbol] = string;
	    return symbol;
	  },
	  // `Symbol.keyFor` method
	  // https://tc39.es/ecma262/#sec-symbol.keyfor
	  keyFor: function keyFor(sym) {
	    if (!isSymbol(sym)) throw TypeError$3(sym + ' is not a symbol');
	    if (hasOwn(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
	  },
	  useSetter: function () { USE_SETTER = true; },
	  useSimple: function () { USE_SETTER = false; }
	});

	$$5({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS$2 }, {
	  // `Object.create` method
	  // https://tc39.es/ecma262/#sec-object.create
	  create: $create,
	  // `Object.defineProperty` method
	  // https://tc39.es/ecma262/#sec-object.defineproperty
	  defineProperty: $defineProperty,
	  // `Object.defineProperties` method
	  // https://tc39.es/ecma262/#sec-object.defineproperties
	  defineProperties: $defineProperties,
	  // `Object.getOwnPropertyDescriptor` method
	  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
	});

	$$5({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
	  // `Object.getOwnPropertyNames` method
	  // https://tc39.es/ecma262/#sec-object.getownpropertynames
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // `Object.getOwnPropertySymbols` method
	  // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
	// https://bugs.chromium.org/p/v8/issues/detail?id=3443
	$$5({ target: 'Object', stat: true, forced: fails$7(function () { getOwnPropertySymbolsModule.f(1); }) }, {
	  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
	    return getOwnPropertySymbolsModule.f(toObject(it));
	  }
	});

	// `JSON.stringify` method behavior with symbols
	// https://tc39.es/ecma262/#sec-json.stringify
	if ($stringify) {
	  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails$7(function () {
	    var symbol = $Symbol();
	    // MS Edge converts symbol values to JSON as {}
	    return $stringify([symbol]) != '[null]'
	      // WebKit converts symbol values to JSON as null
	      || $stringify({ a: symbol }) != '{}'
	      // V8 throws on boxed symbols
	      || $stringify(Object(symbol)) != '{}';
	  });

	  $$5({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
	    // eslint-disable-next-line no-unused-vars -- required for `.length`
	    stringify: function stringify(it, replacer, space) {
	      var args = arraySlice$1(arguments);
	      var $replacer = replacer;
	      if (!isObject$1(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	      if (!isArray(replacer)) replacer = function (key, value) {
	        if (isCallable$1($replacer)) value = call$3($replacer, this, key, value);
	        if (!isSymbol(value)) return value;
	      };
	      args[1] = replacer;
	      return apply$1($stringify, null, args);
	    }
	  });
	}

	// `Symbol.prototype[@@toPrimitive]` method
	// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
	if (!SymbolPrototype[TO_PRIMITIVE]) {
	  var valueOf = SymbolPrototype.valueOf;
	  // eslint-disable-next-line no-unused-vars -- required for .length
	  redefine$1(SymbolPrototype, TO_PRIMITIVE, function (hint) {
	    // TODO: improve hint logic
	    return call$3(valueOf, this);
	  });
	}
	// `Symbol.prototype[@@toStringTag]` property
	// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
	setToStringTag($Symbol, SYMBOL);

	hiddenKeys[HIDDEN] = true;

	var fails$6 = fails$i;
	var wellKnownSymbol$3 = wellKnownSymbol$b;
	var V8_VERSION = engineV8Version;

	var SPECIES$2 = wellKnownSymbol$3('species');

	var arrayMethodHasSpeciesSupport$2 = function (METHOD_NAME) {
	  // We can't use this feature detection in V8 since it causes
	  // deoptimization and serious performance degradation
	  // https://github.com/zloirock/core-js/issues/677
	  return V8_VERSION >= 51 || !fails$6(function () {
	    var array = [];
	    var constructor = array.constructor = {};
	    constructor[SPECIES$2] = function () {
	      return { foo: 1 };
	    };
	    return array[METHOD_NAME](Boolean).foo !== 1;
	  });
	};

	var $$4 = _export;
	var $filter = arrayIteration.filter;
	var arrayMethodHasSpeciesSupport$1 = arrayMethodHasSpeciesSupport$2;

	var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$1('filter');

	// `Array.prototype.filter` method
	// https://tc39.es/ecma262/#sec-array.prototype.filter
	// with adding support of @@species
	$$4({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$1 }, {
	  filter: function filter(callbackfn /* , thisArg */) {
	    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var $$3 = _export;
	var fails$5 = fails$i;
	var toIndexedObject$1 = toIndexedObject$8;
	var nativeGetOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
	var DESCRIPTORS$1 = descriptors;

	var FAILS_ON_PRIMITIVES = fails$5(function () { nativeGetOwnPropertyDescriptor(1); });
	var FORCED = !DESCRIPTORS$1 || FAILS_ON_PRIMITIVES;

	// `Object.getOwnPropertyDescriptor` method
	// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
	$$3({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS$1 }, {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
	    return nativeGetOwnPropertyDescriptor(toIndexedObject$1(it), key);
	  }
	});

	var $$2 = _export;
	var DESCRIPTORS = descriptors;
	var ownKeys$2 = ownKeys$4;
	var toIndexedObject = toIndexedObject$8;
	var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
	var createProperty = createProperty$2;

	// `Object.getOwnPropertyDescriptors` method
	// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
	$$2({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
	    var O = toIndexedObject(object);
	    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
	    var keys = ownKeys$2(O);
	    var result = {};
	    var index = 0;
	    var key, descriptor;
	    while (keys.length > index) {
	      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
	      if (descriptor !== undefined) createProperty(result, key, descriptor);
	    }
	    return result;
	  }
	});

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	function clipboardSuccess() {
	  Vue__default["default"].prototype.$message({
	    message: "复制成功",
	    type: "success",
	    duration: 1500
	  });
	}

	function clipboardError() {
	  Vue__default["default"].prototype.$message({
	    message: "复制失败",
	    type: "error"
	  });
	}

	function handleClipboard(_text, event) {
	  var clipboard = new Clipboard__default["default"](event.target, {
	    text: function text() {
	      return _text;
	    }
	  });
	  clipboard.on("success", function () {
	    clipboardSuccess();
	    clipboard.destroy();
	  });
	  clipboard.on("error", function () {
	    clipboardError();
	    clipboard.destroy();
	  });
	  clipboard.onClick(event);
	}

	function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	var script$3 = {
	  name: "HttpUri",
	  props: {
	    data: {
	      type: Object,
	      default: function _default() {}
	    }
	  },
	  computed: _objectSpread$1({}, vuex.mapGetters(["dict_json"])),
	  methods: {
	    handleCopy: function handleCopy(text, event) {
	      handleClipboard(text, event);
	    },
	    toUpperCaseStr: function toUpperCaseStr(str) {
	      return String(str).toUpperCase();
	    }
	  }
	};

	/* script */
	var __vue_script__$4 = script$3;
	/* template */

	var __vue_render__$4 = function __vue_render__() {
	  var _vm = this;

	  var _h = _vm.$createElement;

	  var _c = _vm._self._c || _h;

	  return _c("div", {
	    staticClass: "api-desc"
	  }, [_c("el-row", {
	    staticClass: "url"
	  }, [_c("span", {
	    staticClass: "api-desc__label"
	  }, [_vm._v("请求地址：")]), _vm._v(" "), _c("span", [_vm._v("https://" + _vm._s(_vm.data.uri))]), _vm._v(" "), _c("span", {
	    on: {
	      click: function click($event) {
	        return _vm.handleCopy("https://" + _vm.data.uri, $event);
	      }
	    }
	  }, [_c("i", {
	    staticClass: "el-icon-document-copy api-desc__copy"
	  })])]), _vm._v(" "), _c("el-row", {
	    staticClass: "type"
	  }, [_c("span", {
	    staticClass: "api-desc__label"
	  }, [_vm._v("请求方式：")]), _vm._v(" "), _c("span", [_vm._v("\n      " + _vm._s(_vm.toUpperCaseStr(_vm.dict_json.getLabel("requestTypes", _vm.data.requestType) || _vm.data.requestType)) + "\n    ")])])], 1);
	};

	var __vue_staticRenderFns__$4 = [];
	__vue_render__$4._withStripped = true;
	/* style */

	var __vue_inject_styles__$4 = undefined;
	/* scoped */

	var __vue_scope_id__$4 = "data-v-718b6363";
	/* module identifier */

	var __vue_module_identifier__$4 = undefined;
	/* functional template */

	var __vue_is_functional_template__$4 = false;
	/* style inject */

	/* style inject SSR */

	/* style inject shadow dom */

	var __vue_component__$4 = /*#__PURE__*/normalizeComponent({
	  render: __vue_render__$4,
	  staticRenderFns: __vue_staticRenderFns__$4
	}, __vue_inject_styles__$4, __vue_script__$4, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, false, undefined, undefined, undefined);

	function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
	var script$2 = {
	  name: "RequestMeta",
	  props: {
	    data: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    }
	  },
	  computed: _objectSpread({}, vuex.mapGetters(["dict_json"]))
	};

	/* script */
	var __vue_script__$3 = script$2;
	/* template */

	var __vue_render__$3 = function __vue_render__() {
	  var _vm = this;

	  var _h = _vm.$createElement;

	  var _c = _vm._self._c || _h;

	  return _c("el-table", {
	    staticStyle: {
	      width: "100%"
	    },
	    attrs: {
	      data: _vm.data,
	      "header-cell-style": {
	        background: "#fafafa"
	      }
	    }
	  }, [_c("el-table-column", {
	    attrs: {
	      label: "参数名称",
	      align: "center",
	      prop: "name"
	    }
	  }), _vm._v(" "), _c("el-table-column", {
	    attrs: {
	      label: "必填",
	      width: "120",
	      align: "center",
	      prop: "required"
	    },
	    scopedSlots: _vm._u([{
	      key: "default",
	      fn: function fn(scope) {
	        return [_vm._v("\n      " + _vm._s(scope.row.required == "1" ? "必填" : "非必填") + "\n    ")];
	      }
	    }])
	  }), _vm._v(" "), _c("el-table-column", {
	    attrs: {
	      label: "类型",
	      align: "center",
	      prop: "type"
	    },
	    scopedSlots: _vm._u([{
	      key: "default",
	      fn: function fn(scope) {
	        return [_vm._v("\n      " + _vm._s(_vm.dict_json.getLabel("paramsTypes", scope.row.type)) + "\n    ")];
	      }
	    }])
	  }), _vm._v(" "), _c("el-table-column", {
	    attrs: {
	      label: "描述",
	      align: "center",
	      prop: "description",
	      width: "300"
	    }
	  }), _vm._v(" "), _c("el-table-column", {
	    attrs: {
	      label: "示例值",
	      align: "center",
	      prop: "simple"
	    }
	  })], 1);
	};

	var __vue_staticRenderFns__$3 = [];
	__vue_render__$3._withStripped = true;
	/* style */

	var __vue_inject_styles__$3 = undefined;
	/* scoped */

	var __vue_scope_id__$3 = undefined;
	/* module identifier */

	var __vue_module_identifier__$3 = undefined;
	/* functional template */

	var __vue_is_functional_template__$3 = false;
	/* style inject */

	/* style inject SSR */

	/* style inject shadow dom */

	var __vue_component__$3 = /*#__PURE__*/normalizeComponent({
	  render: __vue_render__$3,
	  staticRenderFns: __vue_staticRenderFns__$3
	}, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, undefined, undefined, undefined);

	/* script */
	var __vue_script__$2 = script$6;
	/* template */

	var __vue_render__$2 = function __vue_render__() {
	  var _vm = this;

	  var _h = _vm.$createElement;

	  var _c = _vm._self._c || _h;

	  return _c("div", {
	    staticClass: "code-mirror",
	    class: [{
	      "code-mirror__edit": _vm.edit
	    }, _vm.extraClass]
	  }, [_c("codemirror", {
	    ref: "CodeMirror",
	    staticClass: "editor",
	    attrs: {
	      value: _vm.code,
	      options: _vm.mergeOptions
	    },
	    on: {
	      input: _vm.handleInput
	    }
	  })], 1);
	};

	var __vue_staticRenderFns__$2 = [];
	__vue_render__$2._withStripped = true;
	/* style */

	var __vue_inject_styles__$2 = undefined;
	/* scoped */

	var __vue_scope_id__$2 = "data-v-00ca6346";
	/* module identifier */

	var __vue_module_identifier__$2 = undefined;
	/* functional template */

	var __vue_is_functional_template__$2 = false;
	/* style inject */

	/* style inject SSR */

	/* style inject shadow dom */

	var __vue_component__$2 = /*#__PURE__*/normalizeComponent({
	  render: __vue_render__$2,
	  staticRenderFns: __vue_staticRenderFns__$2
	}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, undefined, undefined);

	var script$1 = {
	  name: "RequestDescription",
	  props: {
	    baseInfo: {
	      type: Object,
	      default: function _default() {}
	    }
	  },
	  components: {
	    Codemirror: __vue_component__$2,
	    HttpSection: __vue_component__$5,
	    RequestMeta: __vue_component__$3,
	    CodemirrorTab: __vue_component__$6,
	    HttpUri: __vue_component__$4
	  },
	  data: function data() {
	    return {
	      active: 0,
	      simpleLabels: ["java", "python", "go", "curl", "php", "nodejs"]
	    };
	  },
	  computed: {
	    // json字典
	    dict: function dict() {
	      return this.$store.state.dict;
	    },
	    // 存储的一些信息
	    httpbaseInfo: function httpbaseInfo() {
	      var _this$baseInfo, _this$baseInfo2, _this$baseInfo3, _this$baseInfo4, _this$baseInfo5;

	      return {
	        requestType: (_this$baseInfo = this.baseInfo) === null || _this$baseInfo === void 0 ? void 0 : _this$baseInfo.requestType,
	        // API 请求方式
	        uri: (_this$baseInfo2 = this.baseInfo) === null || _this$baseInfo2 === void 0 ? void 0 : _this$baseInfo2.uri,
	        // API 请求地址
	        requestBody: (_this$baseInfo3 = this.baseInfo) === null || _this$baseInfo3 === void 0 ? void 0 : _this$baseInfo3.requestBody,
	        // 请求Body
	        responseBody: (_this$baseInfo4 = this.baseInfo) === null || _this$baseInfo4 === void 0 ? void 0 : _this$baseInfo4.responseBody,
	        // 响应Body
	        responseSimple: (_this$baseInfo5 = this.baseInfo) === null || _this$baseInfo5 === void 0 ? void 0 : _this$baseInfo5.responseSimple //响应示例

	      };
	    },
	    // 请求示例
	    supplierProductApiReqSimples: function supplierProductApiReqSimples() {
	      var _this$baseInfo6,
	          _this = this;

	      var simples = ((_this$baseInfo6 = this.baseInfo) === null || _this$baseInfo6 === void 0 ? void 0 : _this$baseInfo6.supplierProductApiReqSimples) || [];
	      var temp = [];
	      simples.forEach(function (v, i) {
	        var hasSimple = !!v.simple;

	        if (hasSimple) {
	          temp.push({
	            language: v.language,
	            simple: v.simple,
	            label: _this.simpleLabels[v.language - 1]
	          });
	        }
	      });
	      return temp;
	    },
	    //错误码
	    supplierProductApiRespCodes: function supplierProductApiRespCodes() {
	      var _this$baseInfo7;

	      return ((_this$baseInfo7 = this.baseInfo) === null || _this$baseInfo7 === void 0 ? void 0 : _this$baseInfo7.supplierProductApiRespCodes) || [];
	    }
	  },
	  methods: {
	    getList: function getList(paramType) {
	      var _this$baseInfo8;

	      var supplierProductApiParams = ((_this$baseInfo8 = this.baseInfo) === null || _this$baseInfo8 === void 0 ? void 0 : _this$baseInfo8.supplierProductApiParams) || [];
	      return supplierProductApiParams.filter(function (v) {
	        return v.paramType == paramType;
	      });
	    }
	  }
	};

	/* script */
	var __vue_script__$1 = script$1;
	/* template */

	var __vue_render__$1 = function __vue_render__() {
	  var _vm = this;

	  var _h = _vm.$createElement;

	  var _c = _vm._self._c || _h;

	  return _c("div", {
	    staticClass: "api-desc"
	  }, [_c("http-uri", {
	    attrs: {
	      data: _vm.httpbaseInfo
	    }
	  }), _vm._v(" "), _c("http-section", {
	    attrs: {
	      title: "请求参数(Params)",
	      data: _vm.getList("2")
	    },
	    scopedSlots: _vm._u([{
	      key: "default",
	      fn: function fn(scope) {
	        return [scope.visible ? _c("request-meta", {
	          attrs: {
	            data: scope.data
	          }
	        }) : _vm._e()];
	      }
	    }])
	  }), _vm._v(" "), _c("http-section", {
	    attrs: {
	      title: "请求参数(Headers)",
	      data: _vm.getList("3")
	    },
	    scopedSlots: _vm._u([{
	      key: "default",
	      fn: function fn(scope) {
	        return [scope.visible ? _c("request-meta", {
	          attrs: {
	            data: scope.data
	          }
	        }) : _vm._e()];
	      }
	    }])
	  }), _vm._v(" "), _c("http-section", {
	    attrs: {
	      title: "请求参数(Body)",
	      data: _vm.httpbaseInfo.requestBody
	    },
	    scopedSlots: _vm._u([{
	      key: "default",
	      fn: function fn(scope) {
	        return [scope.visible ? _c("Codemirror", {
	          attrs: {
	            code: scope.data,
	            mode: "text/javascript"
	          }
	        }) : _vm._e()];
	      }
	    }])
	  }), _vm._v(" "), _c("http-section", {
	    attrs: {
	      title: "响应参数(Params)",
	      data: _vm.getList("4")
	    },
	    scopedSlots: _vm._u([{
	      key: "default",
	      fn: function fn(scope) {
	        return [scope.visible ? _c("request-meta", {
	          attrs: {
	            data: scope.data
	          }
	        }) : _vm._e()];
	      }
	    }])
	  }), _vm._v(" "), _c("http-section", {
	    attrs: {
	      title: "响应参数(Headers)",
	      data: _vm.getList("5")
	    },
	    scopedSlots: _vm._u([{
	      key: "default",
	      fn: function fn(scope) {
	        return [scope.visible ? _c("request-meta", {
	          attrs: {
	            data: scope.data
	          }
	        }) : _vm._e()];
	      }
	    }])
	  }), _vm._v(" "), _c("http-section", {
	    attrs: {
	      title: "响应参数(Body)",
	      data: _vm.httpbaseInfo.responseBody
	    },
	    scopedSlots: _vm._u([{
	      key: "default",
	      fn: function fn(scope) {
	        return [scope.visible ? _c("Codemirror", {
	          attrs: {
	            code: scope.data,
	            mode: "text/javascript"
	          }
	        }) : _vm._e()];
	      }
	    }])
	  }), _vm._v(" "), _c("http-section", {
	    attrs: {
	      title: "请求示例",
	      data: _vm.supplierProductApiReqSimples
	    },
	    scopedSlots: _vm._u([{
	      key: "default",
	      fn: function fn(scope) {
	        return [scope.visible ? _c("div", [_c("codemirror-tab", {
	          attrs: {
	            simples: scope.data
	          },
	          model: {
	            value: _vm.active,
	            callback: function callback($$v) {
	              _vm.active = $$v;
	            },
	            expression: "active"
	          }
	        })], 1) : _vm._e()];
	      }
	    }])
	  }), _vm._v(" "), _c("http-section", {
	    attrs: {
	      title: "返回示例",
	      data: _vm.httpbaseInfo.responseSimple
	    },
	    scopedSlots: _vm._u([{
	      key: "default",
	      fn: function fn(scope) {
	        return [scope.visible ? _c("Codemirror", {
	          attrs: {
	            code: scope.data,
	            mode: "text/javascript"
	          }
	        }) : _vm._e()];
	      }
	    }])
	  }), _vm._v(" "), _c("http-section", {
	    attrs: {
	      title: "错误码定义",
	      data: _vm.supplierProductApiRespCodes
	    },
	    scopedSlots: _vm._u([{
	      key: "default",
	      fn: function fn(scope) {
	        return [scope.visible ? _c("el-table", {
	          staticStyle: {
	            width: "100%"
	          },
	          attrs: {
	            data: scope.data,
	            "header-cell-style": {
	              background: "#fafafa"
	            }
	          }
	        }, [_c("el-table-column", {
	          attrs: {
	            label: "HTTP状态码",
	            align: "center",
	            prop: "httpStatus"
	          }
	        }), _vm._v(" "), _c("el-table-column", {
	          attrs: {
	            label: "错误码",
	            align: "center",
	            prop: "respCode"
	          }
	        }), _vm._v(" "), _c("el-table-column", {
	          attrs: {
	            label: "错误信息",
	            align: "center",
	            prop: "msg"
	          }
	        }), _vm._v(" "), _c("el-table-column", {
	          attrs: {
	            label: "描述",
	            align: "center",
	            prop: "description"
	          }
	        })], 1) : _vm._e()];
	      }
	    }])
	  })], 1);
	};

	var __vue_staticRenderFns__$1 = [];
	__vue_render__$1._withStripped = true;
	/* style */

	var __vue_inject_styles__$1 = undefined;
	/* scoped */

	var __vue_scope_id__$1 = undefined;
	/* module identifier */

	var __vue_module_identifier__$1 = undefined;
	/* functional template */

	var __vue_is_functional_template__$1 = false;
	/* style inject */

	/* style inject SSR */

	/* style inject shadow dom */

	var __vue_component__$1 = /*#__PURE__*/normalizeComponent({
	  render: __vue_render__$1,
	  staticRenderFns: __vue_staticRenderFns__$1
	}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, undefined, undefined);

	var anObject$3 = anObject$a;

	// `RegExp.prototype.flags` getter implementation
	// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
	var regexpFlags$1 = function () {
	  var that = anObject$3(this);
	  var result = '';
	  if (that.global) result += 'g';
	  if (that.ignoreCase) result += 'i';
	  if (that.multiline) result += 'm';
	  if (that.dotAll) result += 's';
	  if (that.unicode) result += 'u';
	  if (that.sticky) result += 'y';
	  return result;
	};

	var fails$4 = fails$i;
	var global$5 = global$z;

	// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
	var $RegExp$2 = global$5.RegExp;

	var UNSUPPORTED_Y$2 = fails$4(function () {
	  var re = $RegExp$2('a', 'y');
	  re.lastIndex = 2;
	  return re.exec('abcd') != null;
	});

	// UC Browser bug
	// https://github.com/zloirock/core-js/issues/1008
	var MISSED_STICKY = UNSUPPORTED_Y$2 || fails$4(function () {
	  return !$RegExp$2('a', 'y').sticky;
	});

	var BROKEN_CARET = UNSUPPORTED_Y$2 || fails$4(function () {
	  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
	  var re = $RegExp$2('^r', 'gy');
	  re.lastIndex = 2;
	  return re.exec('str') != null;
	});

	var regexpStickyHelpers = {
	  BROKEN_CARET: BROKEN_CARET,
	  MISSED_STICKY: MISSED_STICKY,
	  UNSUPPORTED_Y: UNSUPPORTED_Y$2
	};

	var fails$3 = fails$i;
	var global$4 = global$z;

	// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
	var $RegExp$1 = global$4.RegExp;

	var regexpUnsupportedDotAll = fails$3(function () {
	  var re = $RegExp$1('.', 's');
	  return !(re.dotAll && re.exec('\n') && re.flags === 's');
	});

	var fails$2 = fails$i;
	var global$3 = global$z;

	// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
	var $RegExp = global$3.RegExp;

	var regexpUnsupportedNcg = fails$2(function () {
	  var re = $RegExp('(?<a>b)', 'g');
	  return re.exec('b').groups.a !== 'b' ||
	    'b'.replace(re, '$<a>c') !== 'bc';
	});

	/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
	/* eslint-disable regexp/no-useless-quantifier -- testing */
	var call$2 = functionCall;
	var uncurryThis$3 = functionUncurryThis;
	var toString$2 = toString$4;
	var regexpFlags = regexpFlags$1;
	var stickyHelpers$1 = regexpStickyHelpers;
	var shared = shared$5.exports;
	var create = objectCreate;
	var getInternalState = internalState.get;
	var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
	var UNSUPPORTED_NCG = regexpUnsupportedNcg;

	var nativeReplace = shared('native-string-replace', String.prototype.replace);
	var nativeExec = RegExp.prototype.exec;
	var patchedExec = nativeExec;
	var charAt$2 = uncurryThis$3(''.charAt);
	var indexOf = uncurryThis$3(''.indexOf);
	var replace = uncurryThis$3(''.replace);
	var stringSlice$2 = uncurryThis$3(''.slice);

	var UPDATES_LAST_INDEX_WRONG = (function () {
	  var re1 = /a/;
	  var re2 = /b*/g;
	  call$2(nativeExec, re1, 'a');
	  call$2(nativeExec, re2, 'a');
	  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
	})();

	var UNSUPPORTED_Y$1 = stickyHelpers$1.BROKEN_CARET;

	// nonparticipating capturing group, copied from es5-shim's String#split patch.
	var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

	var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$1 || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

	if (PATCH) {
	  patchedExec = function exec(string) {
	    var re = this;
	    var state = getInternalState(re);
	    var str = toString$2(string);
	    var raw = state.raw;
	    var result, reCopy, lastIndex, match, i, object, group;

	    if (raw) {
	      raw.lastIndex = re.lastIndex;
	      result = call$2(patchedExec, raw, str);
	      re.lastIndex = raw.lastIndex;
	      return result;
	    }

	    var groups = state.groups;
	    var sticky = UNSUPPORTED_Y$1 && re.sticky;
	    var flags = call$2(regexpFlags, re);
	    var source = re.source;
	    var charsAdded = 0;
	    var strCopy = str;

	    if (sticky) {
	      flags = replace(flags, 'y', '');
	      if (indexOf(flags, 'g') === -1) {
	        flags += 'g';
	      }

	      strCopy = stringSlice$2(str, re.lastIndex);
	      // Support anchored sticky behavior.
	      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt$2(str, re.lastIndex - 1) !== '\n')) {
	        source = '(?: ' + source + ')';
	        strCopy = ' ' + strCopy;
	        charsAdded++;
	      }
	      // ^(? + rx + ) is needed, in combination with some str slicing, to
	      // simulate the 'y' flag.
	      reCopy = new RegExp('^(?:' + source + ')', flags);
	    }

	    if (NPCG_INCLUDED) {
	      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
	    }
	    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

	    match = call$2(nativeExec, sticky ? reCopy : re, strCopy);

	    if (sticky) {
	      if (match) {
	        match.input = stringSlice$2(match.input, charsAdded);
	        match[0] = stringSlice$2(match[0], charsAdded);
	        match.index = re.lastIndex;
	        re.lastIndex += match[0].length;
	      } else re.lastIndex = 0;
	    } else if (UPDATES_LAST_INDEX_WRONG && match) {
	      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
	    }
	    if (NPCG_INCLUDED && match && match.length > 1) {
	      // Fix browsers whose `exec` methods don't consistently return `undefined`
	      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
	      call$2(nativeReplace, match[0], reCopy, function () {
	        for (i = 1; i < arguments.length - 2; i++) {
	          if (arguments[i] === undefined) match[i] = undefined;
	        }
	      });
	    }

	    if (match && groups) {
	      match.groups = object = create(null);
	      for (i = 0; i < groups.length; i++) {
	        group = groups[i];
	        object[group[0]] = match[group[1]];
	      }
	    }

	    return match;
	  };
	}

	var regexpExec$3 = patchedExec;

	var $$1 = _export;
	var exec$1 = regexpExec$3;

	// `RegExp.prototype.exec` method
	// https://tc39.es/ecma262/#sec-regexp.prototype.exec
	$$1({ target: 'RegExp', proto: true, forced: /./.exec !== exec$1 }, {
	  exec: exec$1
	});

	// TODO: Remove from `core-js@4` since it's moved to entry points

	var uncurryThis$2 = functionUncurryThis;
	var redefine = redefine$5.exports;
	var regexpExec$2 = regexpExec$3;
	var fails$1 = fails$i;
	var wellKnownSymbol$2 = wellKnownSymbol$b;
	var createNonEnumerableProperty = createNonEnumerableProperty$5;

	var SPECIES$1 = wellKnownSymbol$2('species');
	var RegExpPrototype = RegExp.prototype;

	var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
	  var SYMBOL = wellKnownSymbol$2(KEY);

	  var DELEGATES_TO_SYMBOL = !fails$1(function () {
	    // String methods call symbol-named RegEp methods
	    var O = {};
	    O[SYMBOL] = function () { return 7; };
	    return ''[KEY](O) != 7;
	  });

	  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$1(function () {
	    // Symbol-named RegExp methods call .exec
	    var execCalled = false;
	    var re = /a/;

	    if (KEY === 'split') {
	      // We can't use real regex here since it causes deoptimization
	      // and serious performance degradation in V8
	      // https://github.com/zloirock/core-js/issues/306
	      re = {};
	      // RegExp[@@split] doesn't call the regex's exec method, but first creates
	      // a new one. We need to return the patched regex when creating the new one.
	      re.constructor = {};
	      re.constructor[SPECIES$1] = function () { return re; };
	      re.flags = '';
	      re[SYMBOL] = /./[SYMBOL];
	    }

	    re.exec = function () { execCalled = true; return null; };

	    re[SYMBOL]('');
	    return !execCalled;
	  });

	  if (
	    !DELEGATES_TO_SYMBOL ||
	    !DELEGATES_TO_EXEC ||
	    FORCED
	  ) {
	    var uncurriedNativeRegExpMethod = uncurryThis$2(/./[SYMBOL]);
	    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
	      var uncurriedNativeMethod = uncurryThis$2(nativeMethod);
	      var $exec = regexp.exec;
	      if ($exec === regexpExec$2 || $exec === RegExpPrototype.exec) {
	        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
	          // The native String method already delegates to @@method (this
	          // polyfilled function), leasing to infinite recursion.
	          // We avoid it by directly calling the native @@method method.
	          return { done: true, value: uncurriedNativeRegExpMethod(regexp, str, arg2) };
	        }
	        return { done: true, value: uncurriedNativeMethod(str, regexp, arg2) };
	      }
	      return { done: false };
	    });

	    redefine(String.prototype, KEY, methods[0]);
	    redefine(RegExpPrototype, SYMBOL, methods[1]);
	  }

	  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
	};

	var isObject = isObject$9;
	var classof$1 = classofRaw$1;
	var wellKnownSymbol$1 = wellKnownSymbol$b;

	var MATCH = wellKnownSymbol$1('match');

	// `IsRegExp` abstract operation
	// https://tc39.es/ecma262/#sec-isregexp
	var isRegexp = function (it) {
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof$1(it) == 'RegExp');
	};

	var global$2 = global$z;
	var isConstructor = isConstructor$2;
	var tryToString = tryToString$2;

	var TypeError$2 = global$2.TypeError;

	// `Assert: IsConstructor(argument) is true`
	var aConstructor$1 = function (argument) {
	  if (isConstructor(argument)) return argument;
	  throw TypeError$2(tryToString(argument) + ' is not a constructor');
	};

	var anObject$2 = anObject$a;
	var aConstructor = aConstructor$1;
	var wellKnownSymbol = wellKnownSymbol$b;

	var SPECIES = wellKnownSymbol('species');

	// `SpeciesConstructor` abstract operation
	// https://tc39.es/ecma262/#sec-speciesconstructor
	var speciesConstructor$1 = function (O, defaultConstructor) {
	  var C = anObject$2(O).constructor;
	  var S;
	  return C === undefined || (S = anObject$2(C)[SPECIES]) == undefined ? defaultConstructor : aConstructor(S);
	};

	var uncurryThis$1 = functionUncurryThis;
	var toIntegerOrInfinity = toIntegerOrInfinity$3;
	var toString$1 = toString$4;
	var requireObjectCoercible$1 = requireObjectCoercible$5;

	var charAt$1 = uncurryThis$1(''.charAt);
	var charCodeAt = uncurryThis$1(''.charCodeAt);
	var stringSlice$1 = uncurryThis$1(''.slice);

	var createMethod = function (CONVERT_TO_STRING) {
	  return function ($this, pos) {
	    var S = toString$1(requireObjectCoercible$1($this));
	    var position = toIntegerOrInfinity(pos);
	    var size = S.length;
	    var first, second;
	    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
	    first = charCodeAt(S, position);
	    return first < 0xD800 || first > 0xDBFF || position + 1 === size
	      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
	        ? CONVERT_TO_STRING
	          ? charAt$1(S, position)
	          : first
	        : CONVERT_TO_STRING
	          ? stringSlice$1(S, position, position + 2)
	          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
	  };
	};

	var stringMultibyte = {
	  // `String.prototype.codePointAt` method
	  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
	  codeAt: createMethod(false),
	  // `String.prototype.at` method
	  // https://github.com/mathiasbynens/String.prototype.at
	  charAt: createMethod(true)
	};

	var charAt = stringMultibyte.charAt;

	// `AdvanceStringIndex` abstract operation
	// https://tc39.es/ecma262/#sec-advancestringindex
	var advanceStringIndex$1 = function (S, index, unicode) {
	  return index + (unicode ? charAt(S, index).length : 1);
	};

	var global$1 = global$z;
	var call$1 = functionCall;
	var anObject$1 = anObject$a;
	var isCallable = isCallable$f;
	var classof = classofRaw$1;
	var regexpExec$1 = regexpExec$3;

	var TypeError$1 = global$1.TypeError;

	// `RegExpExec` abstract operation
	// https://tc39.es/ecma262/#sec-regexpexec
	var regexpExecAbstract = function (R, S) {
	  var exec = R.exec;
	  if (isCallable(exec)) {
	    var result = call$1(exec, R, S);
	    if (result !== null) anObject$1(result);
	    return result;
	  }
	  if (classof(R) === 'RegExp') return call$1(regexpExec$1, R, S);
	  throw TypeError$1('RegExp#exec called on incompatible receiver');
	};

	var apply = functionApply;
	var call = functionCall;
	var uncurryThis = functionUncurryThis;
	var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
	var isRegExp = isRegexp;
	var anObject = anObject$a;
	var requireObjectCoercible = requireObjectCoercible$5;
	var speciesConstructor = speciesConstructor$1;
	var advanceStringIndex = advanceStringIndex$1;
	var toLength = toLength$2;
	var toString = toString$4;
	var getMethod = getMethod$2;
	var arraySlice = arraySliceSimple;
	var callRegExpExec = regexpExecAbstract;
	var regexpExec = regexpExec$3;
	var stickyHelpers = regexpStickyHelpers;
	var fails = fails$i;

	var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
	var MAX_UINT32 = 0xFFFFFFFF;
	var min = Math.min;
	var $push = [].push;
	var exec = uncurryThis(/./.exec);
	var push = uncurryThis($push);
	var stringSlice = uncurryThis(''.slice);

	// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
	// Weex JS has frozen built-in prototypes, so use try / catch wrapper
	var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
	  // eslint-disable-next-line regexp/no-empty-group -- required for testing
	  var re = /(?:)/;
	  var originalExec = re.exec;
	  re.exec = function () { return originalExec.apply(this, arguments); };
	  var result = 'ab'.split(re);
	  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
	});

	// @@split logic
	fixRegExpWellKnownSymbolLogic('split', function (SPLIT, nativeSplit, maybeCallNative) {
	  var internalSplit;
	  if (
	    'abbc'.split(/(b)*/)[1] == 'c' ||
	    // eslint-disable-next-line regexp/no-empty-group -- required for testing
	    'test'.split(/(?:)/, -1).length != 4 ||
	    'ab'.split(/(?:ab)*/).length != 2 ||
	    '.'.split(/(.?)(.?)/).length != 4 ||
	    // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
	    '.'.split(/()()/).length > 1 ||
	    ''.split(/.?/).length
	  ) {
	    // based on es5-shim implementation, need to rework it
	    internalSplit = function (separator, limit) {
	      var string = toString(requireObjectCoercible(this));
	      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
	      if (lim === 0) return [];
	      if (separator === undefined) return [string];
	      // If `separator` is not a regex, use native split
	      if (!isRegExp(separator)) {
	        return call(nativeSplit, string, separator, lim);
	      }
	      var output = [];
	      var flags = (separator.ignoreCase ? 'i' : '') +
	                  (separator.multiline ? 'm' : '') +
	                  (separator.unicode ? 'u' : '') +
	                  (separator.sticky ? 'y' : '');
	      var lastLastIndex = 0;
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      var separatorCopy = new RegExp(separator.source, flags + 'g');
	      var match, lastIndex, lastLength;
	      while (match = call(regexpExec, separatorCopy, string)) {
	        lastIndex = separatorCopy.lastIndex;
	        if (lastIndex > lastLastIndex) {
	          push(output, stringSlice(string, lastLastIndex, match.index));
	          if (match.length > 1 && match.index < string.length) apply($push, output, arraySlice(match, 1));
	          lastLength = match[0].length;
	          lastLastIndex = lastIndex;
	          if (output.length >= lim) break;
	        }
	        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
	      }
	      if (lastLastIndex === string.length) {
	        if (lastLength || !exec(separatorCopy, '')) push(output, '');
	      } else push(output, stringSlice(string, lastLastIndex));
	      return output.length > lim ? arraySlice(output, 0, lim) : output;
	    };
	  // Chakra, V8
	  } else if ('0'.split(undefined, 0).length) {
	    internalSplit = function (separator, limit) {
	      return separator === undefined && limit === 0 ? [] : call(nativeSplit, this, separator, limit);
	    };
	  } else internalSplit = nativeSplit;

	  return [
	    // `String.prototype.split` method
	    // https://tc39.es/ecma262/#sec-string.prototype.split
	    function split(separator, limit) {
	      var O = requireObjectCoercible(this);
	      var splitter = separator == undefined ? undefined : getMethod(separator, SPLIT);
	      return splitter
	        ? call(splitter, separator, O, limit)
	        : call(internalSplit, toString(O), separator, limit);
	    },
	    // `RegExp.prototype[@@split]` method
	    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
	    //
	    // NOTE: This cannot be properly polyfilled in engines that don't support
	    // the 'y' flag.
	    function (string, limit) {
	      var rx = anObject(this);
	      var S = toString(string);
	      var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);

	      if (res.done) return res.value;

	      var C = speciesConstructor(rx, RegExp);

	      var unicodeMatching = rx.unicode;
	      var flags = (rx.ignoreCase ? 'i' : '') +
	                  (rx.multiline ? 'm' : '') +
	                  (rx.unicode ? 'u' : '') +
	                  (UNSUPPORTED_Y ? 'g' : 'y');

	      // ^(? + rx + ) is needed, in combination with some S slicing, to
	      // simulate the 'y' flag.
	      var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
	      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
	      if (lim === 0) return [];
	      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
	      var p = 0;
	      var q = 0;
	      var A = [];
	      while (q < S.length) {
	        splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
	        var z = callRegExpExec(splitter, UNSUPPORTED_Y ? stringSlice(S, q) : S);
	        var e;
	        if (
	          z === null ||
	          (e = min(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p
	        ) {
	          q = advanceStringIndex(S, q, unicodeMatching);
	        } else {
	          push(A, stringSlice(S, p, q));
	          if (A.length === lim) return A;
	          for (var i = 1; i <= z.length - 1; i++) {
	            push(A, z[i]);
	            if (A.length === lim) return A;
	          }
	          q = p = e;
	        }
	      }
	      push(A, stringSlice(S, p));
	      return A;
	    }
	  ];
	}, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);

	var $ = _export;
	var $map = arrayIteration.map;
	var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$2;

	var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

	// `Array.prototype.map` method
	// https://tc39.es/ecma262/#sec-array.prototype.map
	// with adding support of @@species
	$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
	  map: function map(callbackfn /* , thisArg */) {
	    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var script = {
	  name: "AutoFillTable",
	  props: {
	    text: {
	      type: String,
	      default: "批量输入"
	    },
	    headers: {
	      type: Array,
	      default: function _default() {
	        return [];
	      },
	      required: true
	    }
	  },
	  data: function data() {
	    return {
	      inputValue: "",
	      dialogVisible: false
	    };
	  },
	  computed: {
	    simple: function simple() {
	      return "\u3010\u8BF7\u53C2\u8003\u5982\u4E0B\u683C\u5F0F\u8F93\u5165\u3011\nparamName name nameEn\n\u53C2\u6570\u540D\u79F01 \u4E2D\u6587\u540D\u79F01 \u82F1\u6587\u540D\u79F01\n\u53C2\u6570\u540D\u79F02 \u4E2D\u6587\u540D\u79F02 \u82F1\u6587\u540D\u79F02\n\u53C2\u6570\u540D\u79F03 \u4E2D\u6587\u540D\u79F03 \u82F1\u6587\u540D\u79F03\n";
	    }
	  },
	  methods: {
	    onDialogConfirm: function onDialogConfirm() {
	      this.dialogVisible = false;
	      var rows = this.inputValue.split("\n");

	      if (rows.length) {
	        // 获取第一行的数据
	        var rowHeaders = rows[0].split(/\s+/);
	        var headers = this.headers.map(function (item) {
	          return item.value;
	        }); // 获取到需要传递过滤的表头数组的value值。

	        var intersection = ___default["default"].intersection(rowHeaders, headers); // 求交集，只返回头部相同字段的值
	        // 说明现在是有头部的信息，需要字段匹配，移除第一行输入的值。


	        if (intersection.length > 0) {
	          rows.shift();
	        }

	        this.dialogVisible = false;
	        this.inputValue = "";
	        var compareArr = intersection.length > 0 ? intersection : headers;
	        this.$emit("confirm", this.splitRowStr(rows, [], compareArr));
	      }
	    },
	    addDataItems: function addDataItems() {
	      this.dialogVisible = true;
	    },

	    /**
	     * 分割每一行的字符串
	     * @param {*} rows 所有分割行字符串
	     * @param {*} arr 未处理的数组
	     * @param {*} compareArr 需要分割表格的头部值
	     * @return {arrray} 处理后的数组
	     */
	    splitRowStr: function splitRowStr(rows, arr, compareArr) {
	      rows.forEach(function (item) {
	        var temp = {};
	        var cols = item.split(/\s+/); // 隔开所有空字符

	        compareArr.forEach(function (col, index) {
	          temp[col] = cols[index];
	        });
	        arr.push(temp);
	      });
	      return arr;
	    }
	  }
	};

	var __vue_script__ = script;
	/* template */

	var __vue_render__ = function __vue_render__() {
	  var _vm = this;

	  var _h = _vm.$createElement;

	  var _c = _vm._self._c || _h;

	  return _c("div", {
	    staticClass: "autofill"
	  }, [_c("el-button", {
	    staticClass: "add-data-item-btn",
	    attrs: {
	      type: "primary",
	      icon: "el-icon-plus",
	      plain: ""
	    },
	    on: {
	      click: _vm.addDataItems
	    }
	  }, [_vm._v("\n    " + _vm._s(_vm.text) + "\n  ")]), _vm._v(" "), _c("el-dialog", {
	    attrs: {
	      title: "批量输入",
	      width: "80%",
	      top: "0",
	      center: "",
	      visible: _vm.dialogVisible,
	      "close-on-click-modal": false,
	      "close-on-press-escape": false
	    },
	    on: {
	      "update:visible": function updateVisible($event) {
	        _vm.dialogVisible = $event;
	      }
	    }
	  }, [_vm.headers.length ? _c("div", {
	    staticClass: "autofill-table"
	  }, [_c("p", [_c("b", {
	    staticStyle: {
	      color: "#97a8be"
	    }
	  }, [_vm._v("【输入提示】")]), _vm._v(" "), _c("ol", [_c("li", [_vm._v("\n            你可以任意匹配你所需要的数据列，只需要将表格中对应的字段，添加文本数据框第一行，用空格间隔表示，如输入框提示所示。\n          ")]), _vm._v(" "), _c("li", [_vm._v("\n            如果您输入的文本和表格显示列一致，您无需添加头部行字段，系统会自动识别。\n          ")])])]), _vm._v(" "), _c("table", {
	    staticStyle: {
	      "text-align": "center"
	    },
	    attrs: {
	      border: "0",
	      cellPadding: "1",
	      cellSpacing: "0"
	    }
	  }, [_c("thead", [_c("tr", _vm._l(_vm.headers, function (item) {
	    return _c("td", {
	      key: item.name
	    }, [_vm._v(_vm._s(item.value))]);
	  }), 0)]), _vm._v(" "), _c("tbody", [_c("tr", _vm._l(_vm.headers, function (item) {
	    return _c("td", {
	      key: item.name
	    }, [_vm._v(_vm._s(item.label))]);
	  }), 0)])])]) : _vm._e(), _vm._v(" "), _c("textarea", {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: _vm.inputValue,
	      expression: "inputValue"
	    }],
	    staticClass: "autofill-textarea",
	    attrs: {
	      placeholder: _vm.simple
	    },
	    domProps: {
	      value: _vm.inputValue
	    },
	    on: {
	      input: function input($event) {
	        if ($event.target.composing) {
	          return;
	        }

	        _vm.inputValue = $event.target.value;
	      }
	    }
	  }), _vm._v(" "), _c("span", {
	    staticClass: "dialog-footer",
	    attrs: {
	      slot: "footer"
	    },
	    slot: "footer"
	  }, [_c("el-button", {
	    on: {
	      click: function click($event) {
	        _vm.dialogVisible = false;
	      }
	    }
	  }, [_vm._v("取 消")]), _vm._v(" "), _c("el-button", {
	    attrs: {
	      type: "primary"
	    },
	    on: {
	      click: _vm.onDialogConfirm
	    }
	  }, [_vm._v(" 确 定 ")])], 1)])], 1);
	};

	var __vue_staticRenderFns__ = [];
	__vue_render__._withStripped = true;
	/* style */

	var __vue_inject_styles__ = undefined;
	/* scoped */

	var __vue_scope_id__ = "data-v-80eae0e2";
	/* module identifier */

	var __vue_module_identifier__ = undefined;
	/* functional template */

	var __vue_is_functional_template__ = false;
	/* style inject */

	/* style inject SSR */

	/* style inject shadow dom */

	var __vue_component__ = /*#__PURE__*/normalizeComponent({
	  render: __vue_render__,
	  staticRenderFns: __vue_staticRenderFns__
	}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

	var components = [__vue_component__$5, __vue_component__$3, __vue_component__$6, __vue_component__$4, __vue_component__$1, __vue_component__, Breadcrumb, CommonPanel, SearchItem, TryUseModal];

	var install = function install(Vue) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  components.forEach(function (comp) {
	    Vue.component(comp.name, comp);
	  }); // 注册其他

	  console.log(options);
	};

	if (typeof window !== "undefined" && window.Vue) {
	  install(window.Vue);
	}

	var index = {
	  install: install,
	  version: "1.0.0",
	  HttpSection: __vue_component__$5,
	  RequestMeta: __vue_component__$3,
	  CodemirrorTab: __vue_component__$6,
	  HttpUri: __vue_component__$4,
	  RequestDescription: __vue_component__$1,
	  AutoFillTable: __vue_component__,
	  Breadcrumb: Breadcrumb,
	  CommonPanel: CommonPanel,
	  SearchItem: SearchItem,
	  TryUseModal: TryUseModal
	};

	return index;

}));
