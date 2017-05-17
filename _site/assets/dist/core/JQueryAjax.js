define(['module'], function (module) {
    'use strict';

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };

    var inBrowserEnv = typeof window !== "undefined";

    var arr = [];

    var slice = arr.slice;

    var concat = arr.concat;

    var push = arr.push;

    var indexOf = arr.indexOf;

    var class2type = {};

    var toString = class2type.toString;

    var hasOwn = class2type.hasOwnProperty;
    //let hasOwn = ({}).hasOwnProperty

    var support = {};

    // Use the correct document accordingly with window argument (sandbox)
    var document = inBrowserEnv && window.document;
    if (!document.head) {
        document.head = document.getElementsByTagName('head')[0];
    }

    var version = "1.0.0";

    "Boolean Number String Function Array Date RegExp Object Error".split(" ").forEach(function (name) {
        class2type["[object " + name + "]"] = name.toLowerCase();
    });

    function checkType(obj) {
        if (obj == null) {
            return obj + "";
        }
        // Support: Android<4.0, iOS<6 (functionish RegExp)
        return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
    }

    function globalEval(code) {
        if (typeof code !== 'string') return;

        var script = void 0,
            indirect = eval;

        code = code.trim();

        if (code) {
            // If the code includes a valid, prologue position
            // strict mode pragma, execute code by injecting a
            // script tag into the document.
            if (code.indexOf("use strict") === 1 && inBrowserEnv) {
                script = document.createElement("script");
                script.text = code;
                document.head.appendChild(script).parentNode.removeChild(script);
            } else {
                // Otherwise, avoid the DOM node creation, insertion
                // and removal by using an indirect global eval
                indirect(code);
            }
        }
    }

    function isFunction(obj) {
        return checkType(obj) === "function";
    }

    module.exports.isFunction = isFunction;

    function isWindow(obj) {
        return obj != null && obj === obj.window;
    }

    module.exports.isWindow = isWindow;

    function isPlainObject(obj) {
        // Not plain objects:
        // - Any object or value whose internal [[Class]] property is not "[object Object]"
        // - DOM nodes
        // - window
        if (checkType(obj) !== "object" || obj.nodeType || isWindow(obj)) {
            return false;
        }

        if (obj.constructor && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
            return false;
        }

        // If the function hasn't returned already, we're confident that
        // |obj| is a plain object, created by {} or constructed with new Object
        return true;
    }

    module.exports.isPlainObject = isPlainObject;

    function extend() {
        var options = void 0,
            name = void 0,
            src = void 0,
            copy = void 0,
            copyIsArray = void 0,
            clone = void 0,
            target = arguments[0] || {},
            i = 1,
            length = arguments.length,
            deep = false;

        // Handle a deep copy situation
        if (typeof target === "boolean") {
            deep = target;

            // Skip the boolean and the target
            target = arguments[i] || {};
            i++;
        }

        // Handle case when target is a string or something (possible in deep copy)
        if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) !== "object" && !isFunction(target)) {
            target = {};
        }

        // Extend OWNER itself if only one argument is passed
        if (i === length) {
            target = this;
            i--;
        }

        for (; i < length; i++) {
            // Only deal with non-null/undefined values
            if ((options = arguments[i]) != null) {
                // Extend the base object
                for (name in options) {
                    src = target[name];
                    copy = options[name];

                    // Prevent never-ending loop
                    if (target === copy) {
                        continue;
                    }

                    // Recurse if we're merging plain objects or arrays
                    if (deep && copy && (isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && Array.isArray(src) ? src : [];
                        } else {
                            clone = src && isPlainObject(src) ? src : {};
                        }

                        // Never move original objects, clone them
                        target[name] = extend(deep, clone, copy);

                        // Don't bring in undefined values
                    } else if (copy !== undefined) {
                            target[name] = copy;
                        }
                }
            }
        }

        // Return the modified object
        return target;
    }

    module.exports.extend = extend;

    function throwError(msg) {
        throw new Error(msg);
    }

    function inArray(elem, arr, i) {
        return arr == null ? -1 : indexOf.call(arr, elem, i);
    }

    var rnotwhite = /\S+/g;

    // String to Object options format cache
    var optionsCache = {};

    // Convert String-formatted options into Object-formatted ones and store in cache
    function createOptions(options) {
        var object = optionsCache[options] = {};(options.match(rnotwhite) || []).forEach(function (flag) {
            object[flag] = true;
        });
        return object;
    }

    /*
     * Create a callback list using the following parameters:
     *
     *	options: an optional list of space-separated options that will change how
     *			the callback list behaves or a more traditional option object
     *
     * By default a callback list will act like an event callback list and can be
     * "fired" multiple times.
     *
     * Possible options:
     *
     *	once:			will ensure the callback list can only be fired once (like a Deferred)
     *
     *	memory:			will keep track of previous values and will call any callback added
     *					after the list has been fired right away with the latest "memorized"
     *					values (like a Deferred)
     *
     *	unique:			will ensure a callback can only be added once (no duplicate in the list)
     *
     *	stopOnFalse:	interrupt callings when a callback returns false
     *
     */
    function Callbacks(options) {

        // Convert options from String-formatted to Object-formatted if needed
        // (we check in cache first)
        options = typeof options === "string" ? optionsCache[options] || createOptions(options) : extend({}, options);

        var // Last fire value (for non-forgettable lists)
        memory = void 0,

        // Flag to know if list was already fired
        _fired = void 0,

        // Flag to know if list is currently firing
        firing = void 0,

        // First callback to fire (used internally by add and fireWith)
        firingStart = void 0,

        // End of the loop when firing
        firingLength = void 0,

        // Index of currently firing callback (modified by remove if needed)
        firingIndex = void 0,

        // Actual callback list
        list = [],

        // Stack of fire calls for repeatable lists
        stack = !options.once && [],

        // Fire callbacks
        fire = function fire(data) {
            memory = options.memory && data;
            _fired = true;
            firingIndex = firingStart || 0;
            firingStart = 0;
            firingLength = list.length;
            firing = true;
            for (; list && firingIndex < firingLength; firingIndex++) {
                if (list[firingIndex].apply(data[0], data[1]) === false && options.stopOnFalse) {
                    memory = false; // To prevent further calls using add
                    break;
                }
            }
            firing = false;
            if (list) {
                if (stack) {
                    if (stack.length) {
                        fire(stack.shift());
                    }
                } else if (memory) {
                    list = [];
                } else {
                    self.disable();
                }
            }
        },

        // Actual Callbacks object
        self = {
            // Add a callback or a collection of callbacks to the list
            add: function add() {
                if (list) {
                    // First, we save the current length
                    var start = list.length;
                    (function add(args) {
                        var doEach = function doEach(arg) {
                            var type = checkType(arg);
                            if (type === "function") {
                                if (!options.unique || !self.has(arg)) {
                                    list.push(arg);
                                }
                            } else if (arg && arg.length && type !== "string") {
                                // Inspect recursively
                                add(arg);
                            }
                        };
                        if (Array.isArray(args)) {
                            args.forEach(doEach);
                        } else {
                            for (var k = 0; k < args.length; k++) {
                                doEach(args[k]);
                            }
                        }
                    })(arguments);
                    // Do we need to add the callbacks to the
                    // current firing batch?
                    if (firing) {
                        firingLength = list.length;
                        // With memory, if we're not firing then
                        // we should call right away
                    } else if (memory) {
                            firingStart = start;
                            fire(memory);
                        }
                }
                return this;
            },
            // Remove a callback from the list
            remove: function remove() {
                if (list) {
                    arguments.forEach(function (arg) {
                        var index = void 0;
                        while ((index = inArray(arg, list, index)) > -1) {
                            list.splice(index, 1);
                            // Handle firing indexes
                            if (firing) {
                                if (index <= firingLength) {
                                    firingLength--;
                                }
                                if (index <= firingIndex) {
                                    firingIndex--;
                                }
                            }
                        }
                    });
                }
                return this;
            },
            // Check if a given callback is in the list.
            // If no argument is given, return whether or not list has callbacks attached.
            has: function has(fn) {
                return fn ? inArray(fn, list) > -1 : !!(list && list.length);
            },
            // Remove all callbacks from the list
            empty: function empty() {
                list = [];
                firingLength = 0;
                return this;
            },
            // Have the list do nothing anymore
            disable: function disable() {
                list = stack = memory = undefined;
                return this;
            },
            // Is it disabled?
            disabled: function disabled() {
                return !list;
            },
            // Lock the list in its current state
            lock: function lock() {
                stack = undefined;
                if (!memory) {
                    self.disable();
                }
                return this;
            },
            // Is it locked?
            locked: function locked() {
                return !stack;
            },
            // Call all callbacks with the given context and arguments
            fireWith: function fireWith(context, args) {
                if (list && (!_fired || stack)) {
                    args = args || [];
                    args = [context, args.slice ? args.slice() : args];
                    if (firing) {
                        stack.push(args);
                    } else {
                        fire(args);
                    }
                }
                return this;
            },
            // Call all the callbacks with the given arguments
            fire: function fire() {
                self.fireWith(this, arguments);
                return this;
            },
            // To know if the callbacks have already been called at least once
            fired: function fired() {
                return !!_fired;
            }
        };

        return self;
    }

    function Deferred(func) {
        var tuples = [
        // action, add listener, listener list, final state
        ["resolve", "done", Callbacks("once memory"), "resolved"], ["reject", "fail", Callbacks("once memory"), "rejected"], ["notify", "progress", Callbacks("memory")]],
            _state = "pending",
            deferred = {},
            _promise = {
            state: function state() {
                return _state;
            },
            always: function always() {
                deferred.done(arguments).fail(arguments);
                return this;
            },
            then: function then() /* fnDone, fnFail, fnProgress */{
                var fns = arguments;
                return Deferred(function (newDefer) {
                    tuples.forEach(function (tuple, i) {
                        var fn = isFunction(fns[i]) && fns[i];
                        // deferred[ done | fail | progress ] for forwarding actions to newDefer
                        deferred[tuple[1]](function () {
                            var returned = fn && fn.apply(this, arguments);
                            if (returned && isFunction(returned.promise)) {
                                returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify);
                            } else {
                                newDefer[tuple[0] + "With"](this === _promise ? newDefer.promise() : this, fn ? [returned] : arguments);
                            }
                        });
                    });
                    fns = null;
                }).promise();
            },
            // Get a promise for this deferred
            // If obj is provided, the promise aspect is added to the object
            promise: function promise(obj) {
                return obj != null ? extend(obj, _promise) : _promise;
            }
        };

        // Keep pipe for back-compat
        _promise.pipe = _promise.then;

        // Add list-specific methods
        tuples.forEach(function (tuple, i) {
            var list = tuple[2],
                stateString = tuple[3];

            // promise[ done | fail | progress ] = list.add
            _promise[tuple[1]] = list.add;

            // Handle state
            if (stateString) {
                list.add(function () {
                    // state = [ resolved | rejected ]
                    _state = stateString;

                    // [ reject_list | resolve_list ].disable; progress_list.lock
                }, tuples[i ^ 1][2].disable, tuples[2][2].lock);
            }

            // deferred[ resolve | reject | notify ]
            deferred[tuple[0]] = function () {
                deferred[tuple[0] + "With"](this === deferred ? _promise : this, arguments);
                return this;
            };
            deferred[tuple[0] + "With"] = list.fireWith;
        });

        // Make the deferred a promise
        _promise.promise(deferred);

        // Call given func if any
        if (func) {
            func.call(deferred, deferred);
        }

        // All done!
        return deferred;
    }

    var rhash = /#.*$/,
        rts = /([?&])_=[^&]*/,
        rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

    // #7653, #8125, #8152: local protocol detection
    rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        rnoContent = /^(?:GET|HEAD)$/,
        rprotocol = /^\/\//,
        rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,


    /* Prefilters
     * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
     * 2) These are called:
     *    - BEFORE asking for a transport
     *    - AFTER param serialization (s.data is a string if s.processData is true)
     * 3) key is the dataType
     * 4) the catchall symbol "*" can be used
     * 5) execution will start with transport dataType and THEN continue down to "*" if needed
     */
    prefilters = {},


    /* Transports bindings
     * 1) key is the dataType
     * 2) the catchall symbol "*" can be used
     * 3) selection will start with transport dataType and THEN go to "*" if needed
     */
    transports = {},


    // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
    allTypes = "*/".concat("*"),


    // Document location
    ajaxLocation = inBrowserEnv ? window.location.href : '',


    // Segment location into parts
    ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];

    // Base "constructor" for UnJQ.ajaxPrefilter and UnJQ.ajaxTransport
    function addToPrefiltersOrTransports(structure) {

        // dataTypeExpression is optional and defaults to "*"
        return function (dataTypeExpression, func) {

            if (typeof dataTypeExpression !== "string") {
                func = dataTypeExpression;
                dataTypeExpression = "*";
            }

            var dataType = void 0,
                i = 0,
                dataTypes = dataTypeExpression.toLowerCase().match(rnotwhite) || [];

            if (isFunction(func)) {
                // For each dataType in the dataTypeExpression
                while (dataType = dataTypes[i++]) {
                    // Prepend if requested
                    if (dataType[0] === "+") {
                        dataType = dataType.slice(1) || "*";
                        (structure[dataType] = structure[dataType] || []).unshift(func);

                        // Otherwise append
                    } else {
                            (structure[dataType] = structure[dataType] || []).push(func);
                        }
                }
            }
        };
    }

    // Base inspection function for prefilters and transports
    function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {

        var inspected = {},
            seekingTransport = structure === transports;

        var inspect = function inspect(dataType) {
            var selected = void 0;
            inspected[dataType] = true;
            //jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
            (structure[dataType] || []).every(function (prefilterOrFactory) {
                var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                    options.dataTypes.unshift(dataTypeOrTransport);
                    inspect(dataTypeOrTransport);
                    return false;
                } else if (seekingTransport) {
                    return !(selected = dataTypeOrTransport);
                }
                return true;
            });
            return selected;
        };

        return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
    }

    // A special extend for ajax options
    // that takes "flat" options (not to be deep extended)
    // Fixes #9887
    function ajaxExtend(target, src) {
        var key = void 0,
            deep = void 0,
            flatOptions = UnJQ.ajaxSettings.flatOptions || {};

        for (key in src) {
            if (src[key] !== undefined) {
                (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
            }
        }
        if (deep) {
            extend(true, target, deep);
        }

        return target;
    }

    /* Handles responses to an ajax request:
     * - finds the right dataType (mediates between content-type and expected dataType)
     * - returns the corresponding response
     */
    function ajaxHandleResponses(s, jqXHR, responses) {

        var ct = void 0,
            finalDataType = void 0,
            firstDataType = void 0,
            contents = s.contents,
            dataTypes = s.dataTypes;

        // Remove auto dataType and get content-type in the process
        while (dataTypes[0] === "*") {
            dataTypes.shift();
            if (ct === undefined) {
                ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
            }
        }

        // Check if we're dealing with a known content-type
        if (ct) {
            for (var type in contents) {
                if (contents[type] && contents[type].test(ct)) {
                    dataTypes.unshift(type);
                    break;
                }
            }
        }

        // Check to see if we have a response for the expected dataType
        if (dataTypes[0] in responses) {
            finalDataType = dataTypes[0];
        } else {
            // Try convertible dataTypes
            for (var _type in responses) {
                if (!dataTypes[0] || s.converters[_type + " " + dataTypes[0]]) {
                    finalDataType = _type;
                    break;
                }
                if (!firstDataType) {
                    firstDataType = _type;
                }
            }
            // Or just use first one
            finalDataType = finalDataType || firstDataType;
        }

        // If we found a dataType
        // We add the dataType to the list if needed
        // and return the corresponding response
        if (finalDataType) {
            if (finalDataType !== dataTypes[0]) {
                dataTypes.unshift(finalDataType);
            }
            return responses[finalDataType];
        }
    }

    /* Chain conversions given the request and the original response
     * Also sets the responseXXX fields on the jqXHR instance
     */
    function ajaxConvert(s, response, jqXHR, isSuccess) {
        var conv2 = void 0,
            current = void 0,
            conv = void 0,
            tmp = void 0,
            prev = void 0,
            converters = {},

        // Work with a copy of dataTypes in case we need to modify it for conversion
        dataTypes = s.dataTypes.slice();

        // Create converters map with lowercased keys
        if (dataTypes[1]) {
            for (conv in s.converters) {
                converters[conv.toLowerCase()] = s.converters[conv];
            }
        }

        current = dataTypes.shift();

        // Convert to each sequential dataType
        while (current) {

            if (s.responseFields[current]) {
                jqXHR[s.responseFields[current]] = response;
            }

            // Apply the dataFilter if provided
            if (!prev && isSuccess && s.dataFilter) {
                response = s.dataFilter(response, s.dataType);
            }

            prev = current;
            current = dataTypes.shift();

            if (current) {

                // There's only work to do if current dataType is non-auto
                if (current === "*") {

                    current = prev;

                    // Convert response if prev dataType is non-auto and differs from current
                } else if (prev !== "*" && prev !== current) {

                        // Seek a direct converter
                        conv = converters[prev + " " + current] || converters["* " + current];

                        // If none found, seek a pair
                        if (!conv) {
                            for (conv2 in converters) {

                                // If conv2 outputs current
                                tmp = conv2.split(" ");
                                if (tmp[1] === current) {

                                    // If prev can be converted to accepted input
                                    conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                                    if (conv) {
                                        // Condense equivalence converters
                                        if (conv === true) {
                                            conv = converters[conv2];

                                            // Otherwise, insert the intermediate dataType
                                        } else if (converters[conv2] !== true) {
                                                current = tmp[0];
                                                dataTypes.unshift(tmp[1]);
                                            }
                                        break;
                                    }
                                }
                            }
                        }

                        // Apply converter (if not an equivalence)
                        if (conv !== true) {

                            // Unless errors are allowed to bubble, catch and return them
                            if (conv && s["throws"]) {
                                response = conv(response);
                            } else {
                                try {
                                    response = conv(response);
                                } catch (e) {
                                    return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
                                }
                            }
                        }
                    }
            }
        }

        return { state: "success", data: response };
    }

    var nonce = Date.now();

    var rquery = /\?/;

    var UnJQ = {

        expando: "UnJQ_AJAX" + (version + Math.random()).replace(/\D/g, ""),

        // Counter for holding the number of active queries
        active: 0,

        // Last-Modified header cache for next request
        lastModified: {},
        etag: {},

        ajaxSettings: {
            url: ajaxLocation,
            type: "GET",
            isLocal: rlocalProtocol.test(ajaxLocParts[1]),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            /*
             timeout: 0,
             data: null,
             dataType: null,
             username: null,
             password: null,
             cache: null,
             throws: false,
             traditional: false,
             headers: {},
             */

            accepts: {
                "*": allTypes,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },

            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },

            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },

            // Data converters
            // Keys separate source (or catchall "*") and destination types with a single space
            converters: {

                // Convert anything to text
                "* text": String,

                // Text to html (true = no transformation)
                "text html": true,

                // Evaluate text as a json expression
                "text json": function textJson(data) {
                    return JSON.parse(data + "");
                },

                // Parse text as xml
                "text xml": function textXml(data) {
                    var xml = void 0,
                        tmp = void 0;
                    if (!data || typeof data !== "string") {
                        return null;
                    }

                    // Support: IE9
                    try {
                        tmp = new DOMParser();
                        xml = tmp.parseFromString(data, "text/xml");
                    } catch (e) {
                        xml = undefined;
                    }

                    if (!xml || xml.getElementsByTagName("parsererror").length) {
                        throwError("Invalid XML: " + data);
                    }
                    return xml;
                }
            },

            // For options that shouldn't be deep extended:
            // you can add your own custom options here if
            // and when you create one that shouldn't be
            // deep extended (see ajaxExtend)
            flatOptions: {
                url: true,
                context: true
            }
        },

        ajaxSetup: function ajaxSetup(target, settings) {
            return settings ?

            // Building a settings object
            ajaxExtend(ajaxExtend(target, this.ajaxSettings), settings) :

            // Extending ajaxSettings
            ajaxExtend(this.ajaxSettings, target);
        },


        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        ajaxTransport: addToPrefiltersOrTransports(transports),

        ajax: function ajax(url, options) {

            // If url is an object, simulate pre-1.5 signature
            if ((typeof url === 'undefined' ? 'undefined' : _typeof(url)) === "object") {
                options = url;
                url = undefined;
            }

            var self = this;

            // Force options to be an object
            options = options || {};

            var transport = void 0,

            // URL without anti-cache param
            cacheURL = void 0,

            // Response headers
            responseHeadersString = void 0,
                responseHeaders = void 0,

            // timeout handle
            timeoutTimer = void 0,

            // Cross-domain detection vars
            parts = void 0,

            // To know if global events are to be dispatched
            fireGlobals = void 0,

            // Loop variable
            i = void 0,

            // Create the final options object
            s = self.ajaxSetup({}, options),

            // Callbacks context
            callbackContext = s.context || s,

            // Context for global events is callbackContext if it is a DOM node or UnJQ collection
            globalEventContext = this.event || {},
                //NOTE: don't support global events
            //s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
            //jQuery( callbackContext ) :
            //jQuery.event,
            // Deferreds
            deferred = Deferred(),
                completeDeferred = Callbacks("once memory"),

            // Status-dependent callbacks
            _statusCode = s.statusCode || {},

            // Headers (they are sent all at once)
            requestHeaders = {},
                requestHeadersNames = {},

            // The jqXHR state
            state = 0,

            // Default abort message
            strAbort = "canceled",

            // Fake xhr
            jqXHR = {
                readyState: 0,

                // Builds headers hashtable if needed
                getResponseHeader: function getResponseHeader(key) {
                    var match = void 0;
                    if (state === 2) {
                        if (!responseHeaders) {
                            responseHeaders = {};
                            while (match = rheaders.exec(responseHeadersString)) {
                                responseHeaders[match[1].toLowerCase()] = match[2];
                            }
                        }
                        match = responseHeaders[key.toLowerCase()];
                    }
                    return match == null ? null : match;
                },

                // Raw string
                getAllResponseHeaders: function getAllResponseHeaders() {
                    return state === 2 ? responseHeadersString : null;
                },

                // Caches the header
                setRequestHeader: function setRequestHeader(name, value) {
                    var lname = name.toLowerCase();
                    if (!state) {
                        name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
                        requestHeaders[name] = value;
                    }
                    return this;
                },

                // Overrides response content-type header
                overrideMimeType: function overrideMimeType(type) {
                    if (!state) {
                        s.mimeType = type;
                    }
                    return this;
                },

                // Status-dependent callbacks
                statusCode: function statusCode(map) {
                    var code = void 0;
                    if (map) {
                        if (state < 2) {
                            for (code in map) {
                                // Lazy-add the new callback in a way that preserves old ones
                                _statusCode[code] = [_statusCode[code], map[code]];
                            }
                        } else {
                            // Execute the appropriate callbacks
                            jqXHR.always(map[jqXHR.status]);
                        }
                    }
                    return this;
                },

                // Cancel the request
                abort: function abort(statusText) {
                    var finalText = statusText || strAbort;
                    if (transport) {
                        transport.abort(finalText);
                    }
                    done(0, finalText);
                    return this;
                }
            };

            // Attach deferreds
            deferred.promise(jqXHR).complete = completeDeferred.add;
            jqXHR.success = jqXHR.done;
            jqXHR.error = jqXHR.fail;

            // Remove hash character (#7531: and string promotion)
            // Add protocol if not provided (prefilters might expect it)
            // Handle falsy url in the settings object (#10093: consistency with old signature)
            // We also use the url parameter if available
            s.url = ((url || s.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//");

            // Alias method option to type as per ticket #12004
            s.type = options.method || options.type || s.method || s.type;

            // Extract dataTypes list
            s.dataTypes = (s.dataType || "*").trim().toLowerCase().match(rnotwhite) || [""];

            // A cross-domain request is in order when we have a protocol:host:port mismatch
            if (s.crossDomain == null) {
                parts = rurl.exec(s.url.toLowerCase());
                s.crossDomain = !!(parts && (parts[1] !== ajaxLocParts[1] || parts[2] !== ajaxLocParts[2] || (parts[3] || (parts[1] === "http:" ? "80" : "443")) !== (ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? "80" : "443"))));
            }

            // Convert data if not already a string
            if (s.data && s.processData && typeof s.data !== "string") {
                s.data = param(s.data, s.traditional);
            }

            // Apply prefilters
            inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);

            // If request was aborted inside a prefilter, stop there
            if (state === 2) {
                return jqXHR;
            }

            // We can fire global events as of now if asked to
            // Don't fire events if UnJQ.event is undefined in an AMD-usage scenario (#15118)
            fireGlobals = self.event && s.global; //NOTE: false here, no global events

            // Watch for a new set of requests
            if (fireGlobals && self.active++ === 0) {
                self.event.trigger("ajaxStart");
            }

            // Uppercase the type
            s.type = s.type.toUpperCase();

            // Determine if request has content
            s.hasContent = !rnoContent.test(s.type);

            // Save the URL in case we're toying with the If-Modified-Since
            // and/or If-None-Match header later on
            cacheURL = s.url;

            // More options handling for requests with no content
            if (!s.hasContent) {

                // If data is available, append data to url
                if (s.data) {
                    cacheURL = s.url += (rquery.test(cacheURL) ? "&" : "?") + s.data;
                    // #9682: remove data so that it's not used in an eventual retry
                    delete s.data;
                }

                // Add anti-cache in url if needed
                if (s.cache === false) {
                    s.url = rts.test(cacheURL) ?

                    // If there is already a '_' parameter, set its value
                    cacheURL.replace(rts, "$1_=" + nonce++) :

                    // Otherwise add one to the end
                    cacheURL + (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++;
                }
            }

            // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
            if (s.ifModified) {
                if (self.lastModified[cacheURL]) {
                    jqXHR.setRequestHeader("If-Modified-Since", self.lastModified[cacheURL]);
                }
                if (self.etag[cacheURL]) {
                    jqXHR.setRequestHeader("If-None-Match", self.etag[cacheURL]);
                }
            }

            // Set the correct header, if data is being sent
            if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
                jqXHR.setRequestHeader("Content-Type", s.contentType);
            }

            // Set the Accepts header for the server, depending on the dataType
            jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);

            // Check for headers option
            for (i in s.headers) {
                jqXHR.setRequestHeader(i, s.headers[i]);
            }

            // Allow custom headers/mimetypes and early abort
            if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)) {
                // Abort if not done already and return
                return jqXHR.abort();
            }

            // Aborting is no longer a cancellation
            strAbort = "abort";

            // Install callbacks on deferreds
            for (i in { success: 1, error: 1, complete: 1 }) {
                jqXHR[i](s[i]);
            }

            // Get transport
            transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);

            // If no transport, we auto-abort
            if (!transport) {
                done(-1, "No Transport");
            } else {
                jqXHR.readyState = 1;

                // Send global event
                if (fireGlobals) {
                    globalEventContext.trigger("ajaxSend", jqXHR, s);
                }
                // Timeout
                if (s.async && s.timeout > 0) {
                    timeoutTimer = setTimeout(function () {
                        jqXHR.abort("timeout");
                    }, s.timeout);
                }

                try {
                    state = 1;
                    transport.send(requestHeaders, done);
                } catch (e) {
                    // Propagate exception as error if not done
                    if (state < 2) {
                        done(-1, e);
                        // Simply rethrow otherwise
                    } else {
                            throw e;
                        }
                }
            }

            // Callback for when everything is done
            function done(status, nativeStatusText, responses, headers) {
                var isSuccess = void 0,
                    success = void 0,
                    error = void 0,
                    response = void 0,
                    modified = void 0,
                    statusText = nativeStatusText;

                // Called once
                if (state === 2) {
                    return;
                }

                // State is "done" now
                state = 2;

                // Clear timeout if it exists
                if (timeoutTimer) {
                    clearTimeout(timeoutTimer);
                }

                // Dereference transport for early garbage collection
                // (no matter how long the jqXHR object will be used)
                transport = undefined;

                // Cache response headers
                responseHeadersString = headers || "";

                // Set readyState
                jqXHR.readyState = status > 0 ? 4 : 0;

                // Determine if successful
                isSuccess = status >= 200 && status < 300 || status === 304;

                // Get response data
                if (responses) {
                    response = ajaxHandleResponses(s, jqXHR, responses);
                }

                // Convert no matter what (that way responseXXX fields are always set)
                response = ajaxConvert(s, response, jqXHR, isSuccess);

                // If successful, handle type chaining
                if (isSuccess) {

                    // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
                    if (s.ifModified) {
                        modified = jqXHR.getResponseHeader("Last-Modified");
                        if (modified) {
                            self.lastModified[cacheURL] = modified;
                        }
                        modified = jqXHR.getResponseHeader("etag");
                        if (modified) {
                            self.etag[cacheURL] = modified;
                        }
                    }

                    // if no content
                    if (status === 204 || s.type === "HEAD") {
                        statusText = "nocontent";

                        // if not modified
                    } else if (status === 304) {
                            statusText = "notmodified";

                            // If we have data, let's convert it
                        } else {
                                statusText = response.state;
                                success = response.data;
                                error = response.error;
                                isSuccess = !error;
                            }
                } else {
                    // Extract error from statusText and normalize for non-aborts
                    error = statusText;
                    if (status || !statusText) {
                        statusText = "error";
                        if (status < 0) {
                            status = 0;
                        }
                    }
                }

                // Set data for the fake xhr object
                jqXHR.status = status;
                jqXHR.statusText = (nativeStatusText || statusText) + "";

                // Success/Error
                if (isSuccess) {
                    deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
                } else {
                    deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
                }

                // Status-dependent callbacks
                jqXHR.statusCode(_statusCode);
                _statusCode = undefined;

                if (fireGlobals) {
                    globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", jqXHR, s, isSuccess ? success : error);
                }

                // Complete
                completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

                if (fireGlobals) {
                    globalEventContext.trigger("ajaxComplete", jqXHR, s);
                    // Handle the global AJAX counter
                    if (! --self.active) {
                        self.event.trigger("ajaxStop");
                    }
                }
            }

            return jqXHR;
        },
        getJSON: function getJSON(url, data, callback) {
            return this.get(url, data, callback, "json");
        },
        getScript: function getScript(url, callback) {
            return this.get(url, undefined, callback, "script");
        }
    };["get", "post"].forEach(function (method, i) {
        UnJQ[method] = function (url, data, callback, type) {
            // Shift arguments if data argument was omitted
            if (isFunction(data)) {
                type = type || callback;
                callback = data;
                data = undefined;
            }

            return UnJQ.ajax({
                url: url,
                type: method,
                dataType: type,
                data: data,
                success: callback
            });
        };
    });

    var r20 = /%20/g,
        rbracket = /\[\]$/,
        rCRLF = /\r?\n/g,
        rreturn = /\r/g,
        rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
        rsubmittable = /^(?:input|select|textarea|keygen)/i,
        rcheckableType = /^(?:checkbox|radio)$/i;

    function buildParams(prefix, obj, traditional, add) {
        var name = void 0;

        if (Array.isArray(obj)) {
            // Serialize array item.
            obj.forEach(function (v, i) {
                if (traditional || rbracket.test(prefix)) {
                    // Treat each array item as a scalar.
                    add(prefix, v);
                } else {
                    // Item is non-scalar (array or object), encode its numeric index.
                    buildParams(prefix + "[" + ((typeof v === 'undefined' ? 'undefined' : _typeof(v)) === "object" ? i : "") + "]", v, traditional, add);
                }
            });
        } else if (!traditional && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === "object") {
            // Serialize object item.
            for (name in obj) {
                buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
            }
        } else {
            // Serialize scalar item.
            add(prefix, obj);
        }
    }

    function param(a, traditional) {
        var prefix = void 0,
            s = [],
            add = function add(key, value) {
            // If value is a function, invoke it and return its value
            value = isFunction(value) ? value() : value == null ? "" : value;
            s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
        };

        if (traditional === undefined) {
            traditional = UnJQ.ajaxSettings && UnJQ.ajaxSettings.traditional;
        }

        // If an array was passed in, assume that it is an array of form elements.
        if (Array.isArray(a)) {
            // Serialize the form elements
            a.forEach(function (v) {
                add(v.name, v.value);
            });
        } else {
            // If traditional, encode the "old" way (the way 1.3.2 or older
            // did it), otherwise encode params recursively.
            for (prefix in a) {
                buildParams(prefix, a[prefix], traditional, add);
            }
        }

        // Return the resulting serialization
        return s.join("&").replace(r20, "+");
    }

    module.exports.param = param;

    UnJQ.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest();
        } catch (e) {}
    };

    var xhrId = 0,
        xhrCallbacks = {},
        xhrSuccessStatus = {
        // file protocol always yields status code 0, assume 200
        0: 200,
        // Support: IE9
        // #1450: sometimes IE returns 1223 when it should be 204
        1223: 204
    },
        xhrSupported = UnJQ.ajaxSettings.xhr();

    // Support: IE9
    // Open requests must be manually aborted on unload (#5280)
    // See https://support.microsoft.com/kb/2856746 for more info
    if (inBrowserEnv && window.attachEvent) {
        window.attachEvent("onunload", function () {
            for (var key in xhrCallbacks) {
                xhrCallbacks[key]();
            }
        });
    }

    support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
    support.ajax = xhrSupported = !!xhrSupported;

    UnJQ.ajaxTransport(function (options) {
        var _callback = void 0;

        // Cross domain only allowed if supported through XMLHttpRequest
        if (support.cors || xhrSupported && !options.crossDomain) {
            return {
                send: function send(headers, complete) {
                    var i = void 0,
                        xhr = options.xhr(),
                        id = ++xhrId;

                    xhr.open(options.type, options.url, options.async, options.username, options.password);

                    // Apply custom fields if provided
                    if (options.xhrFields) {
                        for (i in options.xhrFields) {
                            xhr[i] = options.xhrFields[i];
                        }
                    }

                    // Override mime type if needed
                    if (options.mimeType && xhr.overrideMimeType) {
                        xhr.overrideMimeType(options.mimeType);
                    }

                    // X-Requested-With header
                    // For cross-domain requests, seeing as conditions for a preflight are
                    // akin to a jigsaw puzzle, we simply never set it to be sure.
                    // (it can always be set on a per-request basis or even using ajaxSetup)
                    // For same-domain requests, won't change header if already provided.
                    if (!options.crossDomain && !headers["X-Requested-With"]) {
                        headers["X-Requested-With"] = "XMLHttpRequest";
                    }

                    // Set headers
                    for (i in headers) {
                        xhr.setRequestHeader(i, headers[i]);
                    }

                    // Callback
                    _callback = function callback(type) {
                        return function () {
                            if (_callback) {
                                delete xhrCallbacks[id];
                                _callback = xhr.onload = xhr.onerror = null;

                                if (type === "abort") {
                                    xhr.abort();
                                } else if (type === "error") {
                                    complete(
                                    // file: protocol always yields status 0; see #8605, #14207
                                    xhr.status, xhr.statusText);
                                } else {
                                    complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText,
                                    // Support: IE9
                                    // Accessing binary-data responseText throws an exception
                                    // (#11426)
                                    typeof xhr.responseText === "string" ? {
                                        text: xhr.responseText
                                    } : undefined, xhr.getAllResponseHeaders());
                                }
                            }
                        };
                    };

                    // Listen to events
                    xhr.onload = _callback();
                    xhr.onerror = _callback("error");

                    // Create the abort callback
                    _callback = xhrCallbacks[id] = _callback("abort");

                    try {
                        // Do send the request (this may raise an exception)
                        xhr.send(options.hasContent && options.data || null);
                    } catch (e) {
                        // #14683: Only rethrow if this hasn't been notified as an error yet
                        if (_callback) {
                            throw e;
                        }
                    }
                },

                abort: function abort() {
                    if (_callback) {
                        _callback();
                    }
                }
            };
        }
    });

    // Install script dataType
    UnJQ.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function textScript(text) {
                globalEval(text);
                return text;
            }
        }
    });

    // Handle cache's special case and crossDomain
    UnJQ.ajaxPrefilter("script", function (s) {
        if (s.cache === undefined) {
            s.cache = false;
        }
        if (s.crossDomain) {
            s.type = "GET";
        }
    });

    // Bind script tag hack transport
    UnJQ.ajaxTransport("script", function (s) {
        // This transport only deals with cross domain requests
        if (s.crossDomain) {
            var _ret = function () {
                var script = void 0,
                    callback = void 0;
                return {
                    v: {
                        send: function send(_, complete) {
                            script = document.createElement('script');
                            script.setAttribute('async', 'async');
                            script.setAttribute('charset', s.scriptCharset);
                            var _callback2 = function callback(evt) {
                                if (script.remove) {
                                    script.remove();
                                } else {
                                    script.parentNode.removeChild(script);
                                }
                                _callback2 = null;
                                if (evt) {
                                    complete(evt.type === "error" ? 404 : 200, evt.type);
                                }
                            };
                            script.setAttribute('src', s.url);
                            if (script.addEventListener) {
                                script.addEventListener('load', _callback2);
                                script.addEventListener('error', _callback2);
                            } else {
                                script.attachEvent('onload', function () {
                                    _callback2.call(script);
                                });
                                script.onreadystatechange = function () {
                                    var r = script.readyState;
                                    if (r === 'loaded' || r === 'complete') {
                                        script.onreadystatechange = null;
                                        _callback2.call(script, { type: "load" });
                                    }
                                };
                                script.attachEvent('error', function () {
                                    _callback2.call(script);
                                });
                            }
                            document.head.appendChild(script);
                        },
                        abort: function abort() {
                            if (callback) {
                                callback();
                            }
                        }
                    }
                };
            }();

            if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
        }
    });

    var oldCallbacks = [],
        rjsonp = /(=)\?(?=&|$)|\?\?/;

    // Default jsonp settings
    UnJQ.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function jsonpCallback() {
            var callback = oldCallbacks.pop() || UnJQ.expando + "_" + nonce++;
            this[callback] = true;
            return callback;
        }
    });

    // Detect, normalize options and install callbacks for jsonp requests
    UnJQ.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {

        var callbackName = void 0,
            overwritten = void 0,
            responseContainer = void 0,
            jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && !(s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data");

        // Handle iff the expected data type is "jsonp" or we have a parameter to set
        if (jsonProp || s.dataTypes[0] === "jsonp") {

            // Get callback name, remembering preexisting value associated with it
            callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;

            // Insert callback into url or form data
            if (jsonProp) {
                s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
            } else if (s.jsonp !== false) {
                s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
            }

            // Use data converter to retrieve json after script execution
            s.converters["script json"] = function () {
                if (!responseContainer) {
                    throwError(callbackName + " was not called");
                }
                return responseContainer[0];
            };

            // force json dataType
            s.dataTypes[0] = "json";

            // Install callback
            overwritten = window[callbackName];
            window[callbackName] = function () {
                responseContainer = arguments;
            };

            // Clean-up function (fires after converters)
            jqXHR.always(function () {
                // Restore preexisting value
                window[callbackName] = overwritten;

                // Save back as free
                if (s[callbackName]) {
                    // make sure that re-using the options doesn't screw things around
                    s.jsonpCallback = originalSettings.jsonpCallback;

                    // save the callback name for future use
                    oldCallbacks.push(callbackName);
                }

                // Call if it was a function and we have a response
                if (responseContainer && isFunction(overwritten)) {
                    overwritten(responseContainer[0]);
                }

                responseContainer = overwritten = undefined;
            });

            // Delegate to script
            return "script";
        }
    });

    module.exports.UnJQ = UnJQ;

    function serialize(form) {
        return param(serializeArray(form));
    }

    module.exports.serialize = serialize;

    function serializeArray(form) {
        if (!form) return [];
        var elements = form.elements || [],
            arr = [];
        for (var i = 0; i < elements.length; i++) {
            var el = elements[i],
                type = el.type;
            if (el.name && !el.disabled && rsubmittable.test(el.nodeName) && !rsubmitterTypes.test(type) && (el.checked || !rcheckableType.test(type))) {
                var val = el.value;
                val = typeof val === "string" ?
                // Handle most common string cases
                val.replace(rreturn, "") :
                // Handle cases where value is null/undef or number
                val == null ? "" : val;

                var ret = void 0;
                if (val != null) {
                    if (Array.isArray(val)) {
                        ret = val.map(function (v) {
                            return { name: elem.name, value: v.replace(rCRLF, "\r\n") };
                        });
                    } else {
                        ret = { name: el.name, value: val.replace(rCRLF, "\r\n") };
                    }
                    arr.push(ret);
                }
            }
        }
        return arr;
    }

    module.exports.serializeArray = serializeArray;

    function upload(fileElements, url, data, success, dataType) {
        if (isFunction(data)) {
            dataType = success;
            success = data;
            data = undefined;
        } else if (typeof data === 'string') {
            dataType = data;
            success = undefined;
            data = undefined;
        } else if (typeof success === 'string') {
            dataType = success;
            success = undefined;
        }

        fileElements = Array.isArray(fileElements) ? fileElements : [fileElements];

        var upData = new FormData();
        if (isPlainObject(data)) {
            for (var k in data) {
                upData.append(k, data[k]);
            }
        } else if (Array.isArray(data)) {
            data.forEach(function (o) {
                o && o.name && o.value && upData.append(o.name, o.value);
            });
        }

        fileElements.forEach(function (el) {
            var name = el.name;
            if (!name) return;
            if ('files' in el) {
                if (el.files.length > 1) name += '[]';
                for (var i = 0; i < el.files.length; i++) {
                    upData.append(name, el.files[i]);
                }
            }
        });

        return UnJQ.ajax({
            url: url,
            type: 'POST',
            data: upData,
            cache: false,
            dataType: dataType,
            processData: false, // Don't process the files
            contentType: false, // Set content type to false as jQuery will tell the server its a query string request
            success: success
        });
    }

    module.exports.upload = upload;
});
