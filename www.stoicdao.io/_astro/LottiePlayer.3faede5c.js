import {
    j as jsxRuntimeExports
} from "./jsx-runtime.f5826d27.js";
import {
    r as reactExports
} from "./index.52ab0191.js";
import "./_commonjsHelpers.725317a4.js";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var extendStatics = function(t, e) {
    return (extendStatics = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(r, i) {
            r.__proto__ = i
        } || function(r, i) {
            for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (r[a] = i[a])
        })(t, e)
};

function __extends(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

    function r() {
        this.constructor = t
    }
    extendStatics(t, e), t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r)
}
var __assign = function() {
    return (__assign = Object.assign || function(t) {
        for (var e, r = 1, i = arguments.length; r < i; r++)
            for (var a in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
        return t
    }).apply(this, arguments)
};

function __awaiter(t, e, r, i) {
    return new(r || (r = Promise))(function(a, s) {
        function f(c) {
            try {
                g(i.next(c))
            } catch (l) {
                s(l)
            }
        }

        function o(c) {
            try {
                g(i.throw(c))
            } catch (l) {
                s(l)
            }
        }

        function g(c) {
            var l;
            c.done ? a(c.value) : (l = c.value, l instanceof r ? l : new r(function(m) {
                m(l)
            })).then(f, o)
        }
        g((i = i.apply(t, e || [])).next())
    })
}

function __generator(t, e) {
    var r, i, a, s, f = {
        label: 0,
        sent: function() {
            if (1 & a[0]) throw a[1];
            return a[1]
        },
        trys: [],
        ops: []
    };
    return s = {
        next: o(0),
        throw: o(1),
        return: o(2)
    }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
        return this
    }), s;

    function o(g) {
        return function(c) {
            return function(l) {
                if (r) throw new TypeError("Generator is already executing.");
                for (; f;) try {
                    if (r = 1, i && (a = 2 & l[0] ? i.return : l[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, l[1])).done) return a;
                    switch (i = 0, a && (l = [2 & l[0], a.value]), l[0]) {
                        case 0:
                        case 1:
                            a = l;
                            break;
                        case 4:
                            return f.label++, {
                                value: l[1],
                                done: !1
                            };
                        case 5:
                            f.label++, i = l[1], l = [0];
                            continue;
                        case 7:
                            l = f.ops.pop(), f.trys.pop();
                            continue;
                        default:
                            if (a = f.trys, !((a = a.length > 0 && a[a.length - 1]) || l[0] !== 6 && l[0] !== 2)) {
                                f = 0;
                                continue
                            }
                            if (l[0] === 3 && (!a || l[1] > a[0] && l[1] < a[3])) {
                                f.label = l[1];
                                break
                            }
                            if (l[0] === 6 && f.label < a[1]) {
                                f.label = a[1], a = l;
                                break
                            }
                            if (a && f.label < a[2]) {
                                f.label = a[2], f.ops.push(l);
                                break
                            }
                            a[2] && f.ops.pop(), f.trys.pop();
                            continue
                    }
                    l = e.call(t, f)
                } catch (m) {
                    l = [6, m], i = 0
                } finally {
                    r = a = 0
                }
                if (5 & l[0]) throw l[1];
                return {
                    value: l[0] ? l[1] : void 0,
                    done: !0
                }
            }([g, c])
        }
    }
}

function createCommonjsModule(t, e) {
    return t(e = {
        exports: {}
    }, e.exports), e.exports
}
var lottie = createCommonjsModule(function(module, exports) {
        typeof navigator < "u" && function(t, e) {
            module.exports = e()
        }(0, function() {
            var svgNS = "http://www.w3.org/2000/svg",
                locationHref = "",
                _useWebWorker = !1,
                initialDefaultFrame = -999999,
                setWebWorker = function(t) {
                    _useWebWorker = !!t
                },
                getWebWorker = function() {
                    return _useWebWorker
                },
                setLocationHref = function(t) {
                    locationHref = t
                },
                getLocationHref = function() {
                    return locationHref
                };

            function createTag(t) {
                return document.createElement(t)
            }

            function extendPrototype(t, e) {
                var r, i, a = t.length;
                for (r = 0; r < a; r += 1)
                    for (var s in i = t[r].prototype) Object.prototype.hasOwnProperty.call(i, s) && (e.prototype[s] = i[s])
            }

            function getDescriptor(t, e) {
                return Object.getOwnPropertyDescriptor(t, e)
            }

            function createProxyFunction(t) {
                function e() {}
                return e.prototype = t, e
            }
            var audioControllerFactory = function() {
                    function t(e) {
                        this.audios = [], this.audioFactory = e, this._volume = 1, this._isMuted = !1
                    }
                    return t.prototype = {
                            addAudio: function(e) {
                                this.audios.push(e)
                            },
                            pause: function() {
                                var e, r = this.audios.length;
                                for (e = 0; e < r; e += 1) this.audios[e].pause()
                            },
                            resume: function() {
                                var e, r = this.audios.length;
                                for (e = 0; e < r; e += 1) this.audios[e].resume()
                            },
                            setRate: function(e) {
                                var r, i = this.audios.length;
                                for (r = 0; r < i; r += 1) this.audios[r].setRate(e)
                            },
                            createAudio: function(e) {
                                return this.audioFactory ? this.audioFactory(e) : window.Howl ? new window.Howl({
                                    src: [e]
                                }) : {
                                    isPlaying: !1,
                                    play: function() {
                                        this.isPlaying = !0
                                    },
                                    seek: function() {
                                        this.isPlaying = !1
                                    },
                                    playing: function() {},
                                    rate: function() {},
                                    setVolume: function() {}
                                }
                            },
                            setAudioFactory: function(e) {
                                this.audioFactory = e
                            },
                            setVolume: function(e) {
                                this._volume = e, this._updateVolume()
                            },
                            mute: function() {
                                this._isMuted = !0, this._updateVolume()
                            },
                            unmute: function() {
                                this._isMuted = !1, this._updateVolume()
                            },
                            getVolume: function() {
                                return this._volume
                            },
                            _updateVolume: function() {
                                var e, r = this.audios.length;
                                for (e = 0; e < r; e += 1) this.audios[e].volume(this._volume * (this._isMuted ? 0 : 1))
                            }
                        },
                        function() {
                            return new t
                        }
                }(),
                createTypedArray = function() {
                    function t(e, r) {
                        var i, a = 0,
                            s = [];
                        switch (e) {
                            case "int16":
                            case "uint8c":
                                i = 1;
                                break;
                            default:
                                i = 1.1
                        }
                        for (a = 0; a < r; a += 1) s.push(i);
                        return s
                    }
                    return typeof Uint8ClampedArray == "function" && typeof Float32Array == "function" ? function(e, r) {
                        return e === "float32" ? new Float32Array(r) : e === "int16" ? new Int16Array(r) : e === "uint8c" ? new Uint8ClampedArray(r) : t(e, r)
                    } : t
                }();

            function createSizedArray(t) {
                return Array.apply(null, {
                    length: t
                })
            }

            function _typeof$6(t) {
                return (_typeof$6 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(t)
            }
            var subframeEnabled = !0,
                expressionsPlugin = null,
                expressionsInterfaces = null,
                idPrefix$1 = "",
                isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
                bmPow = Math.pow,
                bmSqrt = Math.sqrt,
                bmFloor = Math.floor,
                bmMax = Math.max,
                bmMin = Math.min,
                BMMath = {};
            (function() {
                var t, e = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
                    r = e.length;
                for (t = 0; t < r; t += 1) BMMath[e[t]] = Math[e[t]]
            })(), BMMath.random = Math.random, BMMath.abs = function(t) {
                if (_typeof$6(t) === "object" && t.length) {
                    var e, r = createSizedArray(t.length),
                        i = t.length;
                    for (e = 0; e < i; e += 1) r[e] = Math.abs(t[e]);
                    return r
                }
                return Math.abs(t)
            };
            var defaultCurveSegments = 150,
                degToRads = Math.PI / 180,
                roundCorner = .5519;

            function styleDiv(t) {
                t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.display = "block", t.style.transformOrigin = "0 0", t.style.webkitTransformOrigin = "0 0", t.style.backfaceVisibility = "visible", t.style.webkitBackfaceVisibility = "visible", t.style.transformStyle = "preserve-3d", t.style.webkitTransformStyle = "preserve-3d", t.style.mozTransformStyle = "preserve-3d"
            }

            function BMEnterFrameEvent(t, e, r, i) {
                this.type = t, this.currentTime = e, this.totalTime = r, this.direction = i < 0 ? -1 : 1
            }

            function BMCompleteEvent(t, e) {
                this.type = t, this.direction = e < 0 ? -1 : 1
            }

            function BMCompleteLoopEvent(t, e, r, i) {
                this.type = t, this.currentLoop = r, this.totalLoops = e, this.direction = i < 0 ? -1 : 1
            }

            function BMSegmentStartEvent(t, e, r) {
                this.type = t, this.firstFrame = e, this.totalFrames = r
            }

            function BMDestroyEvent(t, e) {
                this.type = t, this.target = e
            }

            function BMRenderFrameErrorEvent(t, e) {
                this.type = "renderFrameError", this.nativeError = t, this.currentTime = e
            }

            function BMConfigErrorEvent(t) {
                this.type = "configError", this.nativeError = t
            }
            var createElementID = (_count = 0, function() {
                    return idPrefix$1 + "__lottie_element_" + (_count += 1)
                }),
                _count;

            function HSVtoRGB(t, e, r) {
                var i, a, s, f, o, g, c, l;
                switch (g = r * (1 - e), c = r * (1 - (o = 6 * t - (f = Math.floor(6 * t))) * e), l = r * (1 - (1 - o) * e), f % 6) {
                    case 0:
                        i = r, a = l, s = g;
                        break;
                    case 1:
                        i = c, a = r, s = g;
                        break;
                    case 2:
                        i = g, a = r, s = l;
                        break;
                    case 3:
                        i = g, a = c, s = r;
                        break;
                    case 4:
                        i = l, a = g, s = r;
                        break;
                    case 5:
                        i = r, a = g, s = c
                }
                return [i, a, s]
            }

            function RGBtoHSV(t, e, r) {
                var i, a = Math.max(t, e, r),
                    s = Math.min(t, e, r),
                    f = a - s,
                    o = a === 0 ? 0 : f / a,
                    g = a / 255;
                switch (a) {
                    case s:
                        i = 0;
                        break;
                    case t:
                        i = e - r + f * (e < r ? 6 : 0), i /= 6 * f;
                        break;
                    case e:
                        i = r - t + 2 * f, i /= 6 * f;
                        break;
                    case r:
                        i = t - e + 4 * f, i /= 6 * f
                }
                return [i, o, g]
            }

            function addSaturationToRGB(t, e) {
                var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
                return r[1] += e, r[1] > 1 ? r[1] = 1 : r[1] <= 0 && (r[1] = 0), HSVtoRGB(r[0], r[1], r[2])
            }

            function addBrightnessToRGB(t, e) {
                var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
                return r[2] += e, r[2] > 1 ? r[2] = 1 : r[2] < 0 && (r[2] = 0), HSVtoRGB(r[0], r[1], r[2])
            }

            function addHueToRGB(t, e) {
                var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
                return r[0] += e / 360, r[0] > 1 ? r[0] -= 1 : r[0] < 0 && (r[0] += 1), HSVtoRGB(r[0], r[1], r[2])
            }
            var rgbToHex = function() {
                    var t, e, r = [];
                    for (t = 0; t < 256; t += 1) e = t.toString(16), r[t] = e.length === 1 ? "0" + e : e;
                    return function(i, a, s) {
                        return i < 0 && (i = 0), a < 0 && (a = 0), s < 0 && (s = 0), "#" + r[i] + r[a] + r[s]
                    }
                }(),
                setSubframeEnabled = function(t) {
                    subframeEnabled = !!t
                },
                getSubframeEnabled = function() {
                    return subframeEnabled
                },
                setExpressionsPlugin = function(t) {
                    expressionsPlugin = t
                },
                getExpressionsPlugin = function() {
                    return expressionsPlugin
                },
                setExpressionInterfaces = function(t) {
                    expressionsInterfaces = t
                },
                getExpressionInterfaces = function() {
                    return expressionsInterfaces
                },
                setDefaultCurveSegments = function(t) {
                    defaultCurveSegments = t
                },
                getDefaultCurveSegments = function() {
                    return defaultCurveSegments
                },
                setIdPrefix = function(t) {
                    idPrefix$1 = t
                };

            function createNS(t) {
                return document.createElementNS(svgNS, t)
            }

            function _typeof$5(t) {
                return (_typeof$5 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(t)
            }
            var dataManager = function() {
                    var t, e, r = 1,
                        i = [],
                        a = {
                            onmessage: function() {},
                            postMessage: function(g) {
                                t({
                                    data: g
                                })
                            }
                        },
                        s = {
                            postMessage: function(g) {
                                a.onmessage({
                                    data: g
                                })
                            }
                        };

                    function f() {
                        e || ((e = function(g) {
                            if (window.Worker && window.Blob && getWebWorker()) {
                                var c = new Blob(["var _workerSelf = self; self.onmessage = ", g.toString()], {
                                        type: "text/javascript"
                                    }),
                                    l = URL.createObjectURL(c);
                                return new Worker(l)
                            }
                            return t = g, a
                        }(function(g) {
                            if (s.dataManager || (s.dataManager = function() {
                                    function l(_, A) {
                                        var T, E, C, F, M, D, I = _.length;
                                        for (E = 0; E < I; E += 1)
                                            if ("ks" in (T = _[E]) && !T.completed) {
                                                if (T.completed = !0, T.hasMask) {
                                                    var L = T.masksProperties;
                                                    for (F = L.length, C = 0; C < F; C += 1)
                                                        if (L[C].pt.k.i) h(L[C].pt.k);
                                                        else
                                                            for (D = L[C].pt.k.length, M = 0; M < D; M += 1) L[C].pt.k[M].s && h(L[C].pt.k[M].s[0]), L[C].pt.k[M].e && h(L[C].pt.k[M].e[0])
                                                }
                                                T.ty === 0 ? (T.layers = m(T.refId, A), l(T.layers, A)) : T.ty === 4 ? u(T.shapes) : T.ty === 5 && S(T)
                                            }
                                    }

                                    function m(_, A) {
                                        var T = function(E, C) {
                                            for (var F = 0, M = C.length; F < M;) {
                                                if (C[F].id === E) return C[F];
                                                F += 1
                                            }
                                            return null
                                        }(_, A);
                                        return T ? T.layers.__used ? JSON.parse(JSON.stringify(T.layers)) : (T.layers.__used = !0, T.layers) : null
                                    }

                                    function u(_) {
                                        var A, T, E;
                                        for (A = _.length - 1; A >= 0; A -= 1)
                                            if (_[A].ty === "sh")
                                                if (_[A].ks.k.i) h(_[A].ks.k);
                                                else
                                                    for (E = _[A].ks.k.length, T = 0; T < E; T += 1) _[A].ks.k[T].s && h(_[A].ks.k[T].s[0]), _[A].ks.k[T].e && h(_[A].ks.k[T].e[0]);
                                        else _[A].ty === "gr" && u(_[A].it)
                                    }

                                    function h(_) {
                                        var A, T = _.i.length;
                                        for (A = 0; A < T; A += 1) _.i[A][0] += _.v[A][0], _.i[A][1] += _.v[A][1], _.o[A][0] += _.v[A][0], _.o[A][1] += _.v[A][1]
                                    }

                                    function p(_, A) {
                                        var T = A ? A.split(".") : [100, 100, 100];
                                        return _[0] > T[0] || !(T[0] > _[0]) && (_[1] > T[1] || !(T[1] > _[1]) && (_[2] > T[2] || !(T[2] > _[2]) && null))
                                    }
                                    var d, n = function() {
                                            var _ = [4, 4, 14];

                                            function A(T) {
                                                var E, C, F, M = T.length;
                                                for (E = 0; E < M; E += 1) T[E].ty === 5 && (C = T[E], F = void 0, F = C.t.d, C.t.d = {
                                                    k: [{
                                                        s: F,
                                                        t: 0
                                                    }]
                                                })
                                            }
                                            return function(T) {
                                                if (p(_, T.v) && (A(T.layers), T.assets)) {
                                                    var E, C = T.assets.length;
                                                    for (E = 0; E < C; E += 1) T.assets[E].layers && A(T.assets[E].layers)
                                                }
                                            }
                                        }(),
                                        y = (d = [4, 7, 99], function(_) {
                                            if (_.chars && !p(d, _.v)) {
                                                var A, T = _.chars.length;
                                                for (A = 0; A < T; A += 1) {
                                                    var E = _.chars[A];
                                                    E.data && E.data.shapes && (u(E.data.shapes), E.data.ip = 0, E.data.op = 99999, E.data.st = 0, E.data.sr = 1, E.data.ks = {
                                                        p: {
                                                            k: [0, 0],
                                                            a: 0
                                                        },
                                                        s: {
                                                            k: [100, 100],
                                                            a: 0
                                                        },
                                                        a: {
                                                            k: [0, 0],
                                                            a: 0
                                                        },
                                                        r: {
                                                            k: 0,
                                                            a: 0
                                                        },
                                                        o: {
                                                            k: 100,
                                                            a: 0
                                                        }
                                                    }, _.chars[A].t || (E.data.shapes.push({
                                                        ty: "no"
                                                    }), E.data.shapes[0].it.push({
                                                        p: {
                                                            k: [0, 0],
                                                            a: 0
                                                        },
                                                        s: {
                                                            k: [100, 100],
                                                            a: 0
                                                        },
                                                        a: {
                                                            k: [0, 0],
                                                            a: 0
                                                        },
                                                        r: {
                                                            k: 0,
                                                            a: 0
                                                        },
                                                        o: {
                                                            k: 100,
                                                            a: 0
                                                        },
                                                        sk: {
                                                            k: 0,
                                                            a: 0
                                                        },
                                                        sa: {
                                                            k: 0,
                                                            a: 0
                                                        },
                                                        ty: "tr"
                                                    })))
                                                }
                                            }
                                        }),
                                        v = function() {
                                            var _ = [5, 7, 15];

                                            function A(T) {
                                                var E, C, F, M = T.length;
                                                for (E = 0; E < M; E += 1) T[E].ty === 5 && (C = T[E], F = void 0, typeof(F = C.t.p).a == "number" && (F.a = {
                                                    a: 0,
                                                    k: F.a
                                                }), typeof F.p == "number" && (F.p = {
                                                    a: 0,
                                                    k: F.p
                                                }), typeof F.r == "number" && (F.r = {
                                                    a: 0,
                                                    k: F.r
                                                }))
                                            }
                                            return function(T) {
                                                if (p(_, T.v) && (A(T.layers), T.assets)) {
                                                    var E, C = T.assets.length;
                                                    for (E = 0; E < C; E += 1) T.assets[E].layers && A(T.assets[E].layers)
                                                }
                                            }
                                        }(),
                                        b = function() {
                                            var _ = [4, 1, 9];

                                            function A(E) {
                                                var C, F, M, D = E.length;
                                                for (C = 0; C < D; C += 1)
                                                    if (E[C].ty === "gr") A(E[C].it);
                                                    else if (E[C].ty === "fl" || E[C].ty === "st")
                                                    if (E[C].c.k && E[C].c.k[0].i)
                                                        for (M = E[C].c.k.length, F = 0; F < M; F += 1) E[C].c.k[F].s && (E[C].c.k[F].s[0] /= 255, E[C].c.k[F].s[1] /= 255, E[C].c.k[F].s[2] /= 255, E[C].c.k[F].s[3] /= 255), E[C].c.k[F].e && (E[C].c.k[F].e[0] /= 255, E[C].c.k[F].e[1] /= 255, E[C].c.k[F].e[2] /= 255, E[C].c.k[F].e[3] /= 255);
                                                    else E[C].c.k[0] /= 255, E[C].c.k[1] /= 255, E[C].c.k[2] /= 255, E[C].c.k[3] /= 255
                                            }

                                            function T(E) {
                                                var C, F = E.length;
                                                for (C = 0; C < F; C += 1) E[C].ty === 4 && A(E[C].shapes)
                                            }
                                            return function(E) {
                                                if (p(_, E.v) && (T(E.layers), E.assets)) {
                                                    var C, F = E.assets.length;
                                                    for (C = 0; C < F; C += 1) E.assets[C].layers && T(E.assets[C].layers)
                                                }
                                            }
                                        }(),
                                        x = function() {
                                            var _ = [4, 4, 18];

                                            function A(E) {
                                                var C, F, M;
                                                for (C = E.length - 1; C >= 0; C -= 1)
                                                    if (E[C].ty === "sh")
                                                        if (E[C].ks.k.i) E[C].ks.k.c = E[C].closed;
                                                        else
                                                            for (M = E[C].ks.k.length, F = 0; F < M; F += 1) E[C].ks.k[F].s && (E[C].ks.k[F].s[0].c = E[C].closed), E[C].ks.k[F].e && (E[C].ks.k[F].e[0].c = E[C].closed);
                                                else E[C].ty === "gr" && A(E[C].it)
                                            }

                                            function T(E) {
                                                var C, F, M, D, I, L, w = E.length;
                                                for (F = 0; F < w; F += 1) {
                                                    if ((C = E[F]).hasMask) {
                                                        var P = C.masksProperties;
                                                        for (D = P.length, M = 0; M < D; M += 1)
                                                            if (P[M].pt.k.i) P[M].pt.k.c = P[M].cl;
                                                            else
                                                                for (L = P[M].pt.k.length, I = 0; I < L; I += 1) P[M].pt.k[I].s && (P[M].pt.k[I].s[0].c = P[M].cl), P[M].pt.k[I].e && (P[M].pt.k[I].e[0].c = P[M].cl)
                                                    }
                                                    C.ty === 4 && A(C.shapes)
                                                }
                                            }
                                            return function(E) {
                                                if (p(_, E.v) && (T(E.layers), E.assets)) {
                                                    var C, F = E.assets.length;
                                                    for (C = 0; C < F; C += 1) E.assets[C].layers && T(E.assets[C].layers)
                                                }
                                            }
                                        }();

                                    function S(_) {
                                        _.t.a.length === 0 && _.t.p
                                    }
                                    var k = {
                                        completeData: function(_) {
                                            _.__complete || (b(_), n(_), y(_), v(_), x(_), l(_.layers, _.assets), function(A, T) {
                                                if (A) {
                                                    var E = 0,
                                                        C = A.length;
                                                    for (E = 0; E < C; E += 1) A[E].t === 1 && (A[E].data.layers = m(A[E].data.refId, T), l(A[E].data.layers, T))
                                                }
                                            }(_.chars, _.assets), _.__complete = !0)
                                        }
                                    };
                                    return k.checkColors = b, k.checkChars = y, k.checkPathProperties = v, k.checkShapes = x, k.completeLayers = l, k
                                }()), s.assetLoader || (s.assetLoader = function() {
                                    function l(m) {
                                        var u = m.getResponseHeader("content-type");
                                        return u && m.responseType === "json" && u.indexOf("json") !== -1 || m.response && _typeof$5(m.response) === "object" ? m.response : m.response && typeof m.response == "string" ? JSON.parse(m.response) : m.responseText ? JSON.parse(m.responseText) : null
                                    }
                                    return {
                                        load: function(m, u, h, p) {
                                            var d, n = new XMLHttpRequest;
                                            try {
                                                n.responseType = "json"
                                            } catch {}
                                            n.onreadystatechange = function() {
                                                if (n.readyState === 4)
                                                    if (n.status === 200) d = l(n), h(d);
                                                    else try {
                                                        d = l(n), h(d)
                                                    } catch (y) {
                                                        p && p(y)
                                                    }
                                            };
                                            try {
                                                n.open(["G", "E", "T"].join(""), m, !0)
                                            } catch {
                                                n.open(["G", "E", "T"].join(""), u + "/" + m, !0)
                                            }
                                            n.send()
                                        }
                                    }
                                }()), g.data.type === "loadAnimation") s.assetLoader.load(g.data.path, g.data.fullPath, function(l) {
                                s.dataManager.completeData(l), s.postMessage({
                                    id: g.data.id,
                                    payload: l,
                                    status: "success"
                                })
                            }, function() {
                                s.postMessage({
                                    id: g.data.id,
                                    status: "error"
                                })
                            });
                            else if (g.data.type === "complete") {
                                var c = g.data.animation;
                                s.dataManager.completeData(c), s.postMessage({
                                    id: g.data.id,
                                    payload: c,
                                    status: "success"
                                })
                            } else g.data.type === "loadData" && s.assetLoader.load(g.data.path, g.data.fullPath, function(l) {
                                s.postMessage({
                                    id: g.data.id,
                                    payload: l,
                                    status: "success"
                                })
                            }, function() {
                                s.postMessage({
                                    id: g.data.id,
                                    status: "error"
                                })
                            })
                        })).onmessage = function(g) {
                            var c = g.data,
                                l = c.id,
                                m = i[l];
                            i[l] = null, c.status === "success" ? m.onComplete(c.payload) : m.onError && m.onError()
                        })
                    }

                    function o(g, c) {
                        var l = "processId_" + (r += 1);
                        return i[l] = {
                            onComplete: g,
                            onError: c
                        }, l
                    }
                    return {
                        loadAnimation: function(g, c, l) {
                            f();
                            var m = o(c, l);
                            e.postMessage({
                                type: "loadAnimation",
                                path: g,
                                fullPath: window.location.origin + window.location.pathname,
                                id: m
                            })
                        },
                        loadData: function(g, c, l) {
                            f();
                            var m = o(c, l);
                            e.postMessage({
                                type: "loadData",
                                path: g,
                                fullPath: window.location.origin + window.location.pathname,
                                id: m
                            })
                        },
                        completeAnimation: function(g, c, l) {
                            f();
                            var m = o(c, l);
                            e.postMessage({
                                type: "complete",
                                animation: g,
                                id: m
                            })
                        }
                    }
                }(),
                ImagePreloader = function() {
                    var t = function() {
                        var o = createTag("canvas");
                        o.width = 1, o.height = 1;
                        var g = o.getContext("2d");
                        return g.fillStyle = "rgba(0,0,0,0)", g.fillRect(0, 0, 1, 1), o
                    }();

                    function e() {
                        this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                    }

                    function r() {
                        this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                    }

                    function i(o, g, c) {
                        var l = "";
                        if (o.e) l = o.p;
                        else if (g) {
                            var m = o.p;
                            m.indexOf("images/") !== -1 && (m = m.split("/")[1]), l = g + m
                        } else l = c, l += o.u ? o.u : "", l += o.p;
                        return l
                    }

                    function a(o) {
                        var g = 0,
                            c = setInterval(function() {
                                (o.getBBox().width || g > 500) && (this._imageLoaded(), clearInterval(c)), g += 1
                            }.bind(this), 50)
                    }

                    function s(o) {
                        var g = {
                                assetData: o
                            },
                            c = i(o, this.assetsPath, this.path);
                        return dataManager.loadData(c, function(l) {
                            g.img = l, this._footageLoaded()
                        }.bind(this), function() {
                            g.img = {}, this._footageLoaded()
                        }.bind(this)), g
                    }

                    function f() {
                        this._imageLoaded = e.bind(this), this._footageLoaded = r.bind(this), this.testImageLoaded = a.bind(this), this.createFootageData = s.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = []
                    }
                    return f.prototype = {
                        loadAssets: function(o, g) {
                            var c;
                            this.imagesLoadedCb = g;
                            var l = o.length;
                            for (c = 0; c < l; c += 1) o[c].layers || (o[c].t && o[c].t !== "seq" ? o[c].t === 3 && (this.totalFootages += 1, this.images.push(this.createFootageData(o[c]))) : (this.totalImages += 1, this.images.push(this._createImageData(o[c]))))
                        },
                        setAssetsPath: function(o) {
                            this.assetsPath = o || ""
                        },
                        setPath: function(o) {
                            this.path = o || ""
                        },
                        loadedImages: function() {
                            return this.totalImages === this.loadedAssets
                        },
                        loadedFootages: function() {
                            return this.totalFootages === this.loadedFootagesCount
                        },
                        destroy: function() {
                            this.imagesLoadedCb = null, this.images.length = 0
                        },
                        getAsset: function(o) {
                            for (var g = 0, c = this.images.length; g < c;) {
                                if (this.images[g].assetData === o) return this.images[g].img;
                                g += 1
                            }
                            return null
                        },
                        createImgData: function(o) {
                            var g = i(o, this.assetsPath, this.path),
                                c = createTag("img");
                            c.crossOrigin = "anonymous", c.addEventListener("load", this._imageLoaded, !1), c.addEventListener("error", function() {
                                l.img = t, this._imageLoaded()
                            }.bind(this), !1), c.src = g;
                            var l = {
                                img: c,
                                assetData: o
                            };
                            return l
                        },
                        createImageData: function(o) {
                            var g = i(o, this.assetsPath, this.path),
                                c = createNS("image");
                            isSafari ? this.testImageLoaded(c) : c.addEventListener("load", this._imageLoaded, !1), c.addEventListener("error", function() {
                                l.img = t, this._imageLoaded()
                            }.bind(this), !1), c.setAttributeNS("http://www.w3.org/1999/xlink", "href", g), this._elementHelper.append ? this._elementHelper.append(c) : this._elementHelper.appendChild(c);
                            var l = {
                                img: c,
                                assetData: o
                            };
                            return l
                        },
                        imageLoaded: e,
                        footageLoaded: r,
                        setCacheType: function(o, g) {
                            o === "svg" ? (this._elementHelper = g, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this)
                        }
                    }, f
                }();

            function BaseEvent() {}
            BaseEvent.prototype = {
                triggerEvent: function(t, e) {
                    if (this._cbs[t])
                        for (var r = this._cbs[t], i = 0; i < r.length; i += 1) r[i](e)
                },
                addEventListener: function(t, e) {
                    return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e),
                        function() {
                            this.removeEventListener(t, e)
                        }.bind(this)
                },
                removeEventListener: function(t, e) {
                    if (e) {
                        if (this._cbs[t]) {
                            for (var r = 0, i = this._cbs[t].length; r < i;) this._cbs[t][r] === e && (this._cbs[t].splice(r, 1), r -= 1, i -= 1), r += 1;
                            this._cbs[t].length || (this._cbs[t] = null)
                        }
                    } else this._cbs[t] = null
                }
            };
            var markerParser = function() {
                    function t(e) {
                        for (var r, i = e.split(`\r
`), a = {}, s = 0, f = 0; f < i.length; f += 1)(r = i[f].split(":")).length === 2 && (a[r[0]] = r[1].trim(), s += 1);
                        if (s === 0) throw new Error;
                        return a
                    }
                    return function(e) {
                        for (var r = [], i = 0; i < e.length; i += 1) {
                            var a = e[i],
                                s = {
                                    time: a.tm,
                                    duration: a.dr
                                };
                            try {
                                s.payload = JSON.parse(e[i].cm)
                            } catch {
                                try {
                                    s.payload = t(e[i].cm)
                                } catch {
                                    s.payload = {
                                        name: e[i].cm
                                    }
                                }
                            }
                            r.push(s)
                        }
                        return r
                    }
                }(),
                ProjectInterface = function() {
                    function t(e) {
                        this.compositions.push(e)
                    }
                    return function() {
                        function e(r) {
                            for (var i = 0, a = this.compositions.length; i < a;) {
                                if (this.compositions[i].data && this.compositions[i].data.nm === r) return this.compositions[i].prepareFrame && this.compositions[i].data.xt && this.compositions[i].prepareFrame(this.currentFrame), this.compositions[i].compInterface;
                                i += 1
                            }
                            return null
                        }
                        return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e
                    }
                }(),
                renderers = {},
                registerRenderer = function(t, e) {
                    renderers[t] = e
                };

            function getRenderer(t) {
                return renderers[t]
            }

            function _typeof$4(t) {
                return (_typeof$4 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(t)
            }
            var AnimationItem = function() {
                this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = getSubframeEnabled(), this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader, this.audioController = audioControllerFactory(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame", 0, 0, 0)
            };
            extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function(t) {
                (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
                var e = "svg";
                t.animType ? e = t.animType : t.renderer && (e = t.renderer);
                var r = getRenderer(e);
                this.renderer = new r(this, t.rendererSettings), this.imagePreloader.setCacheType(e, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, t.loop === "" || t.loop === null || t.loop === void 0 || t.loop === !0 ? this.loop = !0 : t.loop === !1 ? this.loop = !1 : this.loop = parseInt(t.loop, 10), this.autoplay = !("autoplay" in t) || t.autoplay, this.name = t.name ? t.name : "", this.autoloadSegments = !Object.prototype.hasOwnProperty.call(t, "autoloadSegments") || t.autoloadSegments, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.setupAnimation(t.animationData) : t.path && (t.path.lastIndexOf("\\") !== -1 ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), dataManager.loadAnimation(t.path, this.configAnimation, this.onSetupError))
            }, AnimationItem.prototype.onSetupError = function() {
                this.trigger("data_failed")
            }, AnimationItem.prototype.setupAnimation = function(t) {
                dataManager.completeAnimation(t, this.configAnimation)
            }, AnimationItem.prototype.setData = function(t, e) {
                e && _typeof$4(e) !== "object" && (e = JSON.parse(e));
                var r = {
                        wrapper: t,
                        animationData: e
                    },
                    i = t.attributes;
                r.path = i.getNamedItem("data-animation-path") ? i.getNamedItem("data-animation-path").value : i.getNamedItem("data-bm-path") ? i.getNamedItem("data-bm-path").value : i.getNamedItem("bm-path") ? i.getNamedItem("bm-path").value : "", r.animType = i.getNamedItem("data-anim-type") ? i.getNamedItem("data-anim-type").value : i.getNamedItem("data-bm-type") ? i.getNamedItem("data-bm-type").value : i.getNamedItem("bm-type") ? i.getNamedItem("bm-type").value : i.getNamedItem("data-bm-renderer") ? i.getNamedItem("data-bm-renderer").value : i.getNamedItem("bm-renderer") ? i.getNamedItem("bm-renderer").value : "canvas";
                var a = i.getNamedItem("data-anim-loop") ? i.getNamedItem("data-anim-loop").value : i.getNamedItem("data-bm-loop") ? i.getNamedItem("data-bm-loop").value : i.getNamedItem("bm-loop") ? i.getNamedItem("bm-loop").value : "";
                a === "false" ? r.loop = !1 : a === "true" ? r.loop = !0 : a !== "" && (r.loop = parseInt(a, 10));
                var s = i.getNamedItem("data-anim-autoplay") ? i.getNamedItem("data-anim-autoplay").value : i.getNamedItem("data-bm-autoplay") ? i.getNamedItem("data-bm-autoplay").value : !i.getNamedItem("bm-autoplay") || i.getNamedItem("bm-autoplay").value;
                r.autoplay = s !== "false", r.name = i.getNamedItem("data-name") ? i.getNamedItem("data-name").value : i.getNamedItem("data-bm-name") ? i.getNamedItem("data-bm-name").value : i.getNamedItem("bm-name") ? i.getNamedItem("bm-name").value : "", (i.getNamedItem("data-anim-prerender") ? i.getNamedItem("data-anim-prerender").value : i.getNamedItem("data-bm-prerender") ? i.getNamedItem("data-bm-prerender").value : i.getNamedItem("bm-prerender") ? i.getNamedItem("bm-prerender").value : "") === "false" && (r.prerender = !1), this.setParams(r)
            }, AnimationItem.prototype.includeLayers = function(t) {
                t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
                var e, r, i = this.animationData.layers,
                    a = i.length,
                    s = t.layers,
                    f = s.length;
                for (r = 0; r < f; r += 1)
                    for (e = 0; e < a;) {
                        if (i[e].id === s[r].id) {
                            i[e] = s[r];
                            break
                        }
                        e += 1
                    }
                if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets)
                    for (a = t.assets.length, e = 0; e < a; e += 1) this.animationData.assets.push(t.assets[e]);
                this.animationData.__complete = !1, dataManager.completeAnimation(this.animationData, this.onSegmentComplete)
            }, AnimationItem.prototype.onSegmentComplete = function(t) {
                this.animationData = t;
                var e = getExpressionsPlugin();
                e && e.initExpressions(this), this.loadNextSegment()
            }, AnimationItem.prototype.loadNextSegment = function() {
                var t = this.animationData.segments;
                if (!t || t.length === 0 || !this.autoloadSegments) return this.trigger("data_ready"), void(this.timeCompleted = this.totalFrames);
                var e = t.shift();
                this.timeCompleted = e.time * this.frameRate;
                var r = this.path + this.fileName + "_" + this.segmentPos + ".json";
                this.segmentPos += 1, dataManager.loadData(r, this.includeLayers.bind(this), function() {
                    this.trigger("data_failed")
                }.bind(this))
            }, AnimationItem.prototype.loadSegments = function() {
                this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
            }, AnimationItem.prototype.imagesLoaded = function() {
                this.trigger("loaded_images"), this.checkLoaded()
            }, AnimationItem.prototype.preloadImages = function() {
                this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
            }, AnimationItem.prototype.configAnimation = function(t) {
                if (this.renderer) try {
                    this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.markers = markerParser(t.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause()
                } catch (e) {
                    this.triggerConfigError(e)
                }
            }, AnimationItem.prototype.waitForFontsLoaded = function() {
                this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
            }, AnimationItem.prototype.checkLoaded = function() {
                if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || this.renderer.rendererType !== "canvas") && this.imagePreloader.loadedFootages()) {
                    this.isLoaded = !0;
                    var t = getExpressionsPlugin();
                    t && t.initExpressions(this), this.renderer.initItems(), setTimeout(function() {
                        this.trigger("DOMLoaded")
                    }.bind(this), 0), this.gotoFrame(), this.autoplay && this.play()
                }
            }, AnimationItem.prototype.resize = function(t, e) {
                var r = typeof t == "number" ? t : void 0,
                    i = typeof e == "number" ? e : void 0;
                this.renderer.updateContainerSize(r, i)
            }, AnimationItem.prototype.setSubframe = function(t) {
                this.isSubframeEnabled = !!t
            }, AnimationItem.prototype.gotoFrame = function() {
                this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame")
            }, AnimationItem.prototype.renderFrame = function() {
                if (this.isLoaded !== !1 && this.renderer) try {
                    this.renderer.renderFrame(this.currentFrame + this.firstFrame)
                } catch (t) {
                    this.triggerRenderFrameError(t)
                }
            }, AnimationItem.prototype.play = function(t) {
                t && this.name !== t || this.isPaused === !0 && (this.isPaused = !1, this.trigger("_pause"), this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")))
            }, AnimationItem.prototype.pause = function(t) {
                t && this.name !== t || this.isPaused === !1 && (this.isPaused = !0, this.trigger("_play"), this._idle = !0, this.trigger("_idle"), this.audioController.pause())
            }, AnimationItem.prototype.togglePause = function(t) {
                t && this.name !== t || (this.isPaused === !0 ? this.play() : this.pause())
            }, AnimationItem.prototype.stop = function(t) {
                t && this.name !== t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
            }, AnimationItem.prototype.getMarkerData = function(t) {
                for (var e, r = 0; r < this.markers.length; r += 1)
                    if ((e = this.markers[r]).payload && e.payload.name === t) return e;
                return null
            }, AnimationItem.prototype.goToAndStop = function(t, e, r) {
                if (!r || this.name === r) {
                    var i = Number(t);
                    if (isNaN(i)) {
                        var a = this.getMarkerData(t);
                        a && this.goToAndStop(a.time, !0)
                    } else e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
                    this.pause()
                }
            }, AnimationItem.prototype.goToAndPlay = function(t, e, r) {
                if (!r || this.name === r) {
                    var i = Number(t);
                    if (isNaN(i)) {
                        var a = this.getMarkerData(t);
                        a && (a.duration ? this.playSegments([a.time, a.time + a.duration], !0) : this.goToAndStop(a.time, !0))
                    } else this.goToAndStop(i, e, r);
                    this.play()
                }
            }, AnimationItem.prototype.advanceTime = function(t) {
                if (this.isPaused !== !0 && this.isLoaded !== !1) {
                    var e = this.currentRawFrame + t * this.frameModifier,
                        r = !1;
                    e >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (r = !0, e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && this.loop !== !0 ? (r = !0, e = 0) : (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(e), r && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"))
                }
            }, AnimationItem.prototype.adjustSegment = function(t, e) {
                this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(.001 + e)), this.trigger("segmentStart")
            }, AnimationItem.prototype.setSegment = function(t, e) {
                var r = -1;
                this.isPaused && (this.currentRawFrame + this.firstFrame < t ? r = t : this.currentRawFrame + this.firstFrame > e && (r = e - t)), this.firstFrame = t, this.totalFrames = e - t, this.timeCompleted = this.totalFrames, r !== -1 && this.goToAndStop(r, !0)
            }, AnimationItem.prototype.playSegments = function(t, e) {
                if (e && (this.segments.length = 0), _typeof$4(t[0]) === "object") {
                    var r, i = t.length;
                    for (r = 0; r < i; r += 1) this.segments.push(t[r])
                } else this.segments.push(t);
                this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
            }, AnimationItem.prototype.resetSegments = function(t) {
                this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0)
            }, AnimationItem.prototype.checkSegments = function(t) {
                return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), !0)
            }, AnimationItem.prototype.destroy = function(t) {
                t && this.name !== t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.renderer = null, this.imagePreloader = null, this.projectInterface = null)
            }, AnimationItem.prototype.setCurrentRawFrameValue = function(t) {
                this.currentRawFrame = t, this.gotoFrame()
            }, AnimationItem.prototype.setSpeed = function(t) {
                this.playSpeed = t, this.updaFrameModifier()
            }, AnimationItem.prototype.setDirection = function(t) {
                this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier()
            }, AnimationItem.prototype.setLoop = function(t) {
                this.loop = t
            }, AnimationItem.prototype.setVolume = function(t, e) {
                e && this.name !== e || this.audioController.setVolume(t)
            }, AnimationItem.prototype.getVolume = function() {
                return this.audioController.getVolume()
            }, AnimationItem.prototype.mute = function(t) {
                t && this.name !== t || this.audioController.mute()
            }, AnimationItem.prototype.unmute = function(t) {
                t && this.name !== t || this.audioController.unmute()
            }, AnimationItem.prototype.updaFrameModifier = function() {
                this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection)
            }, AnimationItem.prototype.getPath = function() {
                return this.path
            }, AnimationItem.prototype.getAssetsPath = function(t) {
                var e = "";
                if (t.e) e = t.p;
                else if (this.assetsPath) {
                    var r = t.p;
                    r.indexOf("images/") !== -1 && (r = r.split("/")[1]), e = this.assetsPath + r
                } else e = this.path, e += t.u ? t.u : "", e += t.p;
                return e
            }, AnimationItem.prototype.getAssetData = function(t) {
                for (var e = 0, r = this.assets.length; e < r;) {
                    if (t === this.assets[e].id) return this.assets[e];
                    e += 1
                }
                return null
            }, AnimationItem.prototype.hide = function() {
                this.renderer.hide()
            }, AnimationItem.prototype.show = function() {
                this.renderer.show()
            }, AnimationItem.prototype.getDuration = function(t) {
                return t ? this.totalFrames : this.totalFrames / this.frameRate
            }, AnimationItem.prototype.updateDocumentData = function(t, e, r) {
                try {
                    this.renderer.getElementByPath(t).updateDocumentData(e, r)
                } catch {}
            }, AnimationItem.prototype.trigger = function(t) {
                if (this._cbs && this._cbs[t]) switch (t) {
                    case "enterFrame":
                        this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameModifier));
                        break;
                    case "drawnFrame":
                        this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(t, this.drawnFrameEvent);
                        break;
                    case "loopComplete":
                        this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult));
                        break;
                    case "complete":
                        this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
                        break;
                    case "segmentStart":
                        this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));
                        break;
                    case "destroy":
                        this.triggerEvent(t, new BMDestroyEvent(t, this));
                        break;
                    default:
                        this.triggerEvent(t)
                }
                t === "enterFrame" && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)), t === "loopComplete" && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)), t === "complete" && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)), t === "segmentStart" && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)), t === "destroy" && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this))
            }, AnimationItem.prototype.triggerRenderFrameError = function(t) {
                var e = new BMRenderFrameErrorEvent(t, this.currentFrame);
                this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
            }, AnimationItem.prototype.triggerConfigError = function(t) {
                var e = new BMConfigErrorEvent(t, this.currentFrame);
                this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
            };
            var animationManager = function() {
                    var t = {},
                        e = [],
                        r = 0,
                        i = 0,
                        a = 0,
                        s = !0,
                        f = !1;

                    function o(d) {
                        for (var n = 0, y = d.target; n < i;) e[n].animation === y && (e.splice(n, 1), n -= 1, i -= 1, y.isPaused || l()), n += 1
                    }

                    function g(d, n) {
                        if (!d) return null;
                        for (var y = 0; y < i;) {
                            if (e[y].elem === d && e[y].elem !== null) return e[y].animation;
                            y += 1
                        }
                        var v = new AnimationItem;
                        return m(v, d), v.setData(d, n), v
                    }

                    function c() {
                        a += 1, p()
                    }

                    function l() {
                        a -= 1
                    }

                    function m(d, n) {
                        d.addEventListener("destroy", o), d.addEventListener("_active", c), d.addEventListener("_idle", l), e.push({
                            elem: n,
                            animation: d
                        }), i += 1
                    }

                    function u(d) {
                        var n, y = d - r;
                        for (n = 0; n < i; n += 1) e[n].animation.advanceTime(y);
                        r = d, a && !f ? window.requestAnimationFrame(u) : s = !0
                    }

                    function h(d) {
                        r = d, window.requestAnimationFrame(u)
                    }

                    function p() {
                        !f && a && s && (window.requestAnimationFrame(h), s = !1)
                    }
                    return t.registerAnimation = g, t.loadAnimation = function(d) {
                        var n = new AnimationItem;
                        return m(n, null), n.setParams(d), n
                    }, t.setSpeed = function(d, n) {
                        var y;
                        for (y = 0; y < i; y += 1) e[y].animation.setSpeed(d, n)
                    }, t.setDirection = function(d, n) {
                        var y;
                        for (y = 0; y < i; y += 1) e[y].animation.setDirection(d, n)
                    }, t.play = function(d) {
                        var n;
                        for (n = 0; n < i; n += 1) e[n].animation.play(d)
                    }, t.pause = function(d) {
                        var n;
                        for (n = 0; n < i; n += 1) e[n].animation.pause(d)
                    }, t.stop = function(d) {
                        var n;
                        for (n = 0; n < i; n += 1) e[n].animation.stop(d)
                    }, t.togglePause = function(d) {
                        var n;
                        for (n = 0; n < i; n += 1) e[n].animation.togglePause(d)
                    }, t.searchAnimations = function(d, n, y) {
                        var v, b = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
                            x = b.length;
                        for (v = 0; v < x; v += 1) y && b[v].setAttribute("data-bm-type", y), g(b[v], d);
                        if (n && x === 0) {
                            y || (y = "svg");
                            var S = document.getElementsByTagName("body")[0];
                            S.innerText = "";
                            var k = createTag("div");
                            k.style.width = "100%", k.style.height = "100%", k.setAttribute("data-bm-type", y), S.appendChild(k), g(k, d)
                        }
                    }, t.resize = function() {
                        var d;
                        for (d = 0; d < i; d += 1) e[d].animation.resize()
                    }, t.goToAndStop = function(d, n, y) {
                        var v;
                        for (v = 0; v < i; v += 1) e[v].animation.goToAndStop(d, n, y)
                    }, t.destroy = function(d) {
                        var n;
                        for (n = i - 1; n >= 0; n -= 1) e[n].animation.destroy(d)
                    }, t.freeze = function() {
                        f = !0
                    }, t.unfreeze = function() {
                        f = !1, p()
                    }, t.setVolume = function(d, n) {
                        var y;
                        for (y = 0; y < i; y += 1) e[y].animation.setVolume(d, n)
                    }, t.mute = function(d) {
                        var n;
                        for (n = 0; n < i; n += 1) e[n].animation.mute(d)
                    }, t.unmute = function(d) {
                        var n;
                        for (n = 0; n < i; n += 1) e[n].animation.unmute(d)
                    }, t.getRegisteredAnimations = function() {
                        var d, n = e.length,
                            y = [];
                        for (d = 0; d < n; d += 1) y.push(e[d].animation);
                        return y
                    }, t
                }(),
                BezierFactory = function() {
                    var t = {
                            getBezierEasing: function(c, l, m, u, h) {
                                var p = h || ("bez_" + c + "_" + l + "_" + m + "_" + u).replace(/\./g, "p");
                                if (e[p]) return e[p];
                                var d = new g([c, l, m, u]);
                                return e[p] = d, d
                            }
                        },
                        e = {},
                        r = typeof Float32Array == "function";

                    function i(c, l) {
                        return 1 - 3 * l + 3 * c
                    }

                    function a(c, l) {
                        return 3 * l - 6 * c
                    }

                    function s(c) {
                        return 3 * c
                    }

                    function f(c, l, m) {
                        return ((i(l, m) * c + a(l, m)) * c + s(l)) * c
                    }

                    function o(c, l, m) {
                        return 3 * i(l, m) * c * c + 2 * a(l, m) * c + s(l)
                    }

                    function g(c) {
                        this._p = c, this._mSampleValues = r ? new Float32Array(11) : new Array(11), this._precomputed = !1, this.get = this.get.bind(this)
                    }
                    return g.prototype = {
                        get: function(c) {
                            var l = this._p[0],
                                m = this._p[1],
                                u = this._p[2],
                                h = this._p[3];
                            return this._precomputed || this._precompute(), l === m && u === h ? c : c === 0 ? 0 : c === 1 ? 1 : f(this._getTForX(c), m, h)
                        },
                        _precompute: function() {
                            var c = this._p[0],
                                l = this._p[1],
                                m = this._p[2],
                                u = this._p[3];
                            this._precomputed = !0, c === l && m === u || this._calcSampleValues()
                        },
                        _calcSampleValues: function() {
                            for (var c = this._p[0], l = this._p[2], m = 0; m < 11; ++m) this._mSampleValues[m] = f(.1 * m, c, l)
                        },
                        _getTForX: function(c) {
                            for (var l = this._p[0], m = this._p[2], u = this._mSampleValues, h = 0, p = 1; p !== 10 && u[p] <= c; ++p) h += .1;
                            var d = h + .1 * ((c - u[--p]) / (u[p + 1] - u[p])),
                                n = o(d, l, m);
                            return n >= .001 ? function(y, v, b, x) {
                                for (var S = 0; S < 4; ++S) {
                                    var k = o(v, b, x);
                                    if (k === 0) return v;
                                    v -= (f(v, b, x) - y) / k
                                }
                                return v
                            }(c, d, l, m) : n === 0 ? d : function(y, v, b, x, S) {
                                var k, _, A = 0;
                                do(k = f(_ = v + (b - v) / 2, x, S) - y) > 0 ? b = _ : v = _; while (Math.abs(k) > 1e-7 && ++A < 10);
                                return _
                            }(c, h, h + .1, l, m)
                        }
                    }, t
                }(),
                pooling = {
                    double: function(t) {
                        return t.concat(createSizedArray(t.length))
                    }
                },
                poolFactory = function(t, e, r) {
                    var i = 0,
                        a = t,
                        s = createSizedArray(a);
                    return {
                        newElement: function() {
                            return i ? s[i -= 1] : e()
                        },
                        release: function(f) {
                            i === a && (s = pooling.double(s), a *= 2), r && r(f), s[i] = f, i += 1
                        }
                    }
                },
                bezierLengthPool = poolFactory(8, function() {
                    return {
                        addedLength: 0,
                        percents: createTypedArray("float32", getDefaultCurveSegments()),
                        lengths: createTypedArray("float32", getDefaultCurveSegments())
                    }
                }),
                segmentsLengthPool = poolFactory(8, function() {
                    return {
                        lengths: [],
                        totalLength: 0
                    }
                }, function(t) {
                    var e, r = t.lengths.length;
                    for (e = 0; e < r; e += 1) bezierLengthPool.release(t.lengths[e]);
                    t.lengths.length = 0
                });

            function bezFunction() {
                var t = Math;

                function e(c, l, m, u, h, p) {
                    var d = c * u + l * h + m * p - h * u - p * c - m * l;
                    return d > -.001 && d < .001
                }
                var r = function(c, l, m, u) {
                    var h, p, d, n, y, v, b = getDefaultCurveSegments(),
                        x = 0,
                        S = [],
                        k = [],
                        _ = bezierLengthPool.newElement();
                    for (d = m.length, h = 0; h < b; h += 1) {
                        for (y = h / (b - 1), v = 0, p = 0; p < d; p += 1) n = bmPow(1 - y, 3) * c[p] + 3 * bmPow(1 - y, 2) * y * m[p] + 3 * (1 - y) * bmPow(y, 2) * u[p] + bmPow(y, 3) * l[p], S[p] = n, k[p] !== null && (v += bmPow(S[p] - k[p], 2)), k[p] = S[p];
                        v && (x += v = bmSqrt(v)), _.percents[h] = y, _.lengths[h] = x
                    }
                    return _.addedLength = x, _
                };

                function i(c) {
                    this.segmentLength = 0, this.points = new Array(c)
                }

                function a(c, l) {
                    this.partialLength = c, this.point = l
                }
                var s, f = (s = {}, function(c, l, m, u) {
                    var h = (c[0] + "_" + c[1] + "_" + l[0] + "_" + l[1] + "_" + m[0] + "_" + m[1] + "_" + u[0] + "_" + u[1]).replace(/\./g, "p");
                    if (!s[h]) {
                        var p, d, n, y, v, b, x, S = getDefaultCurveSegments(),
                            k = 0,
                            _ = null;
                        c.length === 2 && (c[0] !== l[0] || c[1] !== l[1]) && e(c[0], c[1], l[0], l[1], c[0] + m[0], c[1] + m[1]) && e(c[0], c[1], l[0], l[1], l[0] + u[0], l[1] + u[1]) && (S = 2);
                        var A = new i(S);
                        for (n = m.length, p = 0; p < S; p += 1) {
                            for (x = createSizedArray(n), v = p / (S - 1), b = 0, d = 0; d < n; d += 1) y = bmPow(1 - v, 3) * c[d] + 3 * bmPow(1 - v, 2) * v * (c[d] + m[d]) + 3 * (1 - v) * bmPow(v, 2) * (l[d] + u[d]) + bmPow(v, 3) * l[d], x[d] = y, _ !== null && (b += bmPow(x[d] - _[d], 2));
                            k += b = bmSqrt(b), A.points[p] = new a(b, x), _ = x
                        }
                        A.segmentLength = k, s[h] = A
                    }
                    return s[h]
                });

                function o(c, l) {
                    var m = l.percents,
                        u = l.lengths,
                        h = m.length,
                        p = bmFloor((h - 1) * c),
                        d = c * l.addedLength,
                        n = 0;
                    if (p === h - 1 || p === 0 || d === u[p]) return m[p];
                    for (var y = u[p] > d ? -1 : 1, v = !0; v;)
                        if (u[p] <= d && u[p + 1] > d ? (n = (d - u[p]) / (u[p + 1] - u[p]), v = !1) : p += y, p < 0 || p >= h - 1) {
                            if (p === h - 1) return m[p];
                            v = !1
                        }
                    return m[p] + (m[p + 1] - m[p]) * n
                }
                var g = createTypedArray("float32", 8);
                return {
                    getSegmentsLength: function(c) {
                        var l, m = segmentsLengthPool.newElement(),
                            u = c.c,
                            h = c.v,
                            p = c.o,
                            d = c.i,
                            n = c._length,
                            y = m.lengths,
                            v = 0;
                        for (l = 0; l < n - 1; l += 1) y[l] = r(h[l], h[l + 1], p[l], d[l + 1]), v += y[l].addedLength;
                        return u && n && (y[l] = r(h[l], h[0], p[l], d[0]), v += y[l].addedLength), m.totalLength = v, m
                    },
                    getNewSegment: function(c, l, m, u, h, p, d) {
                        h < 0 ? h = 0 : h > 1 && (h = 1);
                        var n, y = o(h, d),
                            v = o(p = p > 1 ? 1 : p, d),
                            b = c.length,
                            x = 1 - y,
                            S = 1 - v,
                            k = x * x * x,
                            _ = y * x * x * 3,
                            A = y * y * x * 3,
                            T = y * y * y,
                            E = x * x * S,
                            C = y * x * S + x * y * S + x * x * v,
                            F = y * y * S + x * y * v + y * x * v,
                            M = y * y * v,
                            D = x * S * S,
                            I = y * S * S + x * v * S + x * S * v,
                            L = y * v * S + x * v * v + y * S * v,
                            w = y * v * v,
                            P = S * S * S,
                            B = v * S * S + S * v * S + S * S * v,
                            R = v * v * S + S * v * v + v * S * v,
                            O = v * v * v;
                        for (n = 0; n < b; n += 1) g[4 * n] = t.round(1e3 * (k * c[n] + _ * m[n] + A * u[n] + T * l[n])) / 1e3, g[4 * n + 1] = t.round(1e3 * (E * c[n] + C * m[n] + F * u[n] + M * l[n])) / 1e3, g[4 * n + 2] = t.round(1e3 * (D * c[n] + I * m[n] + L * u[n] + w * l[n])) / 1e3, g[4 * n + 3] = t.round(1e3 * (P * c[n] + B * m[n] + R * u[n] + O * l[n])) / 1e3;
                        return g
                    },
                    getPointInSegment: function(c, l, m, u, h, p) {
                        var d = o(h, p),
                            n = 1 - d;
                        return [t.round(1e3 * (n * n * n * c[0] + (d * n * n + n * d * n + n * n * d) * m[0] + (d * d * n + n * d * d + d * n * d) * u[0] + d * d * d * l[0])) / 1e3, t.round(1e3 * (n * n * n * c[1] + (d * n * n + n * d * n + n * n * d) * m[1] + (d * d * n + n * d * d + d * n * d) * u[1] + d * d * d * l[1])) / 1e3]
                    },
                    buildBezierData: f,
                    pointOnLine2D: e,
                    pointOnLine3D: function(c, l, m, u, h, p, d, n, y) {
                        if (m === 0 && p === 0 && y === 0) return e(c, l, u, h, d, n);
                        var v, b = t.sqrt(t.pow(u - c, 2) + t.pow(h - l, 2) + t.pow(p - m, 2)),
                            x = t.sqrt(t.pow(d - c, 2) + t.pow(n - l, 2) + t.pow(y - m, 2)),
                            S = t.sqrt(t.pow(d - u, 2) + t.pow(n - h, 2) + t.pow(y - p, 2));
                        return (v = b > x ? b > S ? b - x - S : S - x - b : S > x ? S - x - b : x - b - S) > -1e-4 && v < 1e-4
                    }
                }
            }
            var bez = bezFunction(),
                PropertyFactory = function() {
                    var t = initialDefaultFrame,
                        e = Math.abs;

                    function r(u, h) {
                        var p, d = this.offsetTime;
                        this.propType === "multidimensional" && (p = createTypedArray("float32", this.pv.length));
                        for (var n, y, v, b, x, S, k, _, A, T = h.lastIndex, E = T, C = this.keyframes.length - 1, F = !0; F;) {
                            if (n = this.keyframes[E], y = this.keyframes[E + 1], E === C - 1 && u >= y.t - d) {
                                n.h && (n = y), T = 0;
                                break
                            }
                            if (y.t - d > u) {
                                T = E;
                                break
                            }
                            E < C - 1 ? E += 1 : (T = 0, F = !1)
                        }
                        v = this.keyframesMetadata[E] || {};
                        var M, D = y.t - d,
                            I = n.t - d;
                        if (n.to) {
                            v.bezierData || (v.bezierData = bez.buildBezierData(n.s, y.s || n.e, n.to, n.ti));
                            var L = v.bezierData;
                            if (u >= D || u < I) {
                                var w = u >= D ? L.points.length - 1 : 0;
                                for (x = L.points[w].point.length, b = 0; b < x; b += 1) p[b] = L.points[w].point[b]
                            } else {
                                v.__fnct ? A = v.__fnct : (A = BezierFactory.getBezierEasing(n.o.x, n.o.y, n.i.x, n.i.y, n.n).get, v.__fnct = A), S = A((u - I) / (D - I));
                                var P, B = L.segmentLength * S,
                                    R = h.lastFrame < u && h._lastKeyframeIndex === E ? h._lastAddedLength : 0;
                                for (_ = h.lastFrame < u && h._lastKeyframeIndex === E ? h._lastPoint : 0, F = !0, k = L.points.length; F;) {
                                    if (R += L.points[_].partialLength, B === 0 || S === 0 || _ === L.points.length - 1) {
                                        for (x = L.points[_].point.length, b = 0; b < x; b += 1) p[b] = L.points[_].point[b];
                                        break
                                    }
                                    if (B >= R && B < R + L.points[_ + 1].partialLength) {
                                        for (P = (B - R) / L.points[_ + 1].partialLength, x = L.points[_].point.length, b = 0; b < x; b += 1) p[b] = L.points[_].point[b] + (L.points[_ + 1].point[b] - L.points[_].point[b]) * P;
                                        break
                                    }
                                    _ < k - 1 ? _ += 1 : F = !1
                                }
                                h._lastPoint = _, h._lastAddedLength = R - L.points[_].partialLength, h._lastKeyframeIndex = E
                            }
                        } else {
                            var O, j, W, N, $;
                            if (C = n.s.length, M = y.s || n.e, this.sh && n.h !== 1) u >= D ? (p[0] = M[0], p[1] = M[1], p[2] = M[2]) : u <= I ? (p[0] = n.s[0], p[1] = n.s[1], p[2] = n.s[2]) : function(H, G) {
                                var z = G[0],
                                    Y = G[1],
                                    q = G[2],
                                    Z = G[3],
                                    X = Math.atan2(2 * Y * Z - 2 * z * q, 1 - 2 * Y * Y - 2 * q * q),
                                    V = Math.asin(2 * z * Y + 2 * q * Z),
                                    J = Math.atan2(2 * z * Z - 2 * Y * q, 1 - 2 * z * z - 2 * q * q);
                                H[0] = X / degToRads, H[1] = V / degToRads, H[2] = J / degToRads
                            }(p, function(H, G, z) {
                                var Y, q, Z, X, V, J = [],
                                    st = H[0],
                                    nt = H[1],
                                    at = H[2],
                                    Q = H[3],
                                    U = G[0],
                                    K = G[1],
                                    tt = G[2],
                                    et = G[3];
                                return (q = st * U + nt * K + at * tt + Q * et) < 0 && (q = -q, U = -U, K = -K, tt = -tt, et = -et), 1 - q > 1e-6 ? (Y = Math.acos(q), Z = Math.sin(Y), X = Math.sin((1 - z) * Y) / Z, V = Math.sin(z * Y) / Z) : (X = 1 - z, V = z), J[0] = X * st + V * U, J[1] = X * nt + V * K, J[2] = X * at + V * tt, J[3] = X * Q + V * et, J
                            }(i(n.s), i(M), (u - I) / (D - I)));
                            else
                                for (E = 0; E < C; E += 1) n.h !== 1 && (u >= D ? S = 1 : u < I ? S = 0 : (n.o.x.constructor === Array ? (v.__fnct || (v.__fnct = []), v.__fnct[E] ? A = v.__fnct[E] : (O = n.o.x[E] === void 0 ? n.o.x[0] : n.o.x[E], j = n.o.y[E] === void 0 ? n.o.y[0] : n.o.y[E], W = n.i.x[E] === void 0 ? n.i.x[0] : n.i.x[E], N = n.i.y[E] === void 0 ? n.i.y[0] : n.i.y[E], A = BezierFactory.getBezierEasing(O, j, W, N).get, v.__fnct[E] = A)) : v.__fnct ? A = v.__fnct : (O = n.o.x, j = n.o.y, W = n.i.x, N = n.i.y, A = BezierFactory.getBezierEasing(O, j, W, N).get, n.keyframeMetadata = A), S = A((u - I) / (D - I)))), M = y.s || n.e, $ = n.h === 1 ? n.s[E] : n.s[E] + (M[E] - n.s[E]) * S, this.propType === "multidimensional" ? p[E] = $ : p = $
                        }
                        return h.lastIndex = T, p
                    }

                    function i(u) {
                        var h = u[0] * degToRads,
                            p = u[1] * degToRads,
                            d = u[2] * degToRads,
                            n = Math.cos(h / 2),
                            y = Math.cos(p / 2),
                            v = Math.cos(d / 2),
                            b = Math.sin(h / 2),
                            x = Math.sin(p / 2),
                            S = Math.sin(d / 2);
                        return [b * x * v + n * y * S, b * y * v + n * x * S, n * x * v - b * y * S, n * y * v - b * x * S]
                    }

                    function a() {
                        var u = this.comp.renderedFrame - this.offsetTime,
                            h = this.keyframes[0].t - this.offsetTime,
                            p = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
                        if (!(u === this._caching.lastFrame || this._caching.lastFrame !== t && (this._caching.lastFrame >= p && u >= p || this._caching.lastFrame < h && u < h))) {
                            this._caching.lastFrame >= u && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
                            var d = this.interpolateValue(u, this._caching);
                            this.pv = d
                        }
                        return this._caching.lastFrame = u, this.pv
                    }

                    function s(u) {
                        var h;
                        if (this.propType === "unidimensional") h = u * this.mult, e(this.v - h) > 1e-5 && (this.v = h, this._mdf = !0);
                        else
                            for (var p = 0, d = this.v.length; p < d;) h = u[p] * this.mult, e(this.v[p] - h) > 1e-5 && (this.v[p] = h, this._mdf = !0), p += 1
                    }

                    function f() {
                        if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
                            if (this.lock) this.setVValue(this.pv);
                            else {
                                var u;
                                this.lock = !0, this._mdf = this._isFirstFrame;
                                var h = this.effectsSequence.length,
                                    p = this.kf ? this.pv : this.data.k;
                                for (u = 0; u < h; u += 1) p = this.effectsSequence[u](p);
                                this.setVValue(p), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
                            }
                    }

                    function o(u) {
                        this.effectsSequence.push(u), this.container.addDynamicProperty(this)
                    }

                    function g(u, h, p, d) {
                        this.propType = "unidimensional", this.mult = p || 1, this.data = h, this.v = p ? h.k * p : h.k, this.pv = h.k, this._mdf = !1, this.elem = u, this.container = d, this.comp = u.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = f, this.setVValue = s, this.addEffect = o
                    }

                    function c(u, h, p, d) {
                        var n;
                        this.propType = "multidimensional", this.mult = p || 1, this.data = h, this._mdf = !1, this.elem = u, this.container = d, this.comp = u.comp, this.k = !1, this.kf = !1, this.frameId = -1;
                        var y = h.k.length;
                        for (this.v = createTypedArray("float32", y), this.pv = createTypedArray("float32", y), this.vel = createTypedArray("float32", y), n = 0; n < y; n += 1) this.v[n] = h.k[n] * this.mult, this.pv[n] = h.k[n];
                        this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = f, this.setVValue = s, this.addEffect = o
                    }

                    function l(u, h, p, d) {
                        this.propType = "unidimensional", this.keyframes = h.k, this.keyframesMetadata = [], this.offsetTime = u.data.st, this.frameId = -1, this._caching = {
                            lastFrame: t,
                            lastIndex: 0,
                            value: 0,
                            _lastKeyframeIndex: -1
                        }, this.k = !0, this.kf = !0, this.data = h, this.mult = p || 1, this.elem = u, this.container = d, this.comp = u.comp, this.v = t, this.pv = t, this._isFirstFrame = !0, this.getValue = f, this.setVValue = s, this.interpolateValue = r, this.effectsSequence = [a.bind(this)], this.addEffect = o
                    }

                    function m(u, h, p, d) {
                        var n;
                        this.propType = "multidimensional";
                        var y, v, b, x, S = h.k.length;
                        for (n = 0; n < S - 1; n += 1) h.k[n].to && h.k[n].s && h.k[n + 1] && h.k[n + 1].s && (y = h.k[n].s, v = h.k[n + 1].s, b = h.k[n].to, x = h.k[n].ti, (y.length === 2 && (y[0] !== v[0] || y[1] !== v[1]) && bez.pointOnLine2D(y[0], y[1], v[0], v[1], y[0] + b[0], y[1] + b[1]) && bez.pointOnLine2D(y[0], y[1], v[0], v[1], v[0] + x[0], v[1] + x[1]) || y.length === 3 && (y[0] !== v[0] || y[1] !== v[1] || y[2] !== v[2]) && bez.pointOnLine3D(y[0], y[1], y[2], v[0], v[1], v[2], y[0] + b[0], y[1] + b[1], y[2] + b[2]) && bez.pointOnLine3D(y[0], y[1], y[2], v[0], v[1], v[2], v[0] + x[0], v[1] + x[1], v[2] + x[2])) && (h.k[n].to = null, h.k[n].ti = null), y[0] === v[0] && y[1] === v[1] && b[0] === 0 && b[1] === 0 && x[0] === 0 && x[1] === 0 && (y.length === 2 || y[2] === v[2] && b[2] === 0 && x[2] === 0) && (h.k[n].to = null, h.k[n].ti = null));
                        this.effectsSequence = [a.bind(this)], this.data = h, this.keyframes = h.k, this.keyframesMetadata = [], this.offsetTime = u.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = p || 1, this.elem = u, this.container = d, this.comp = u.comp, this.getValue = f, this.setVValue = s, this.interpolateValue = r, this.frameId = -1;
                        var k = h.k[0].s.length;
                        for (this.v = createTypedArray("float32", k), this.pv = createTypedArray("float32", k), n = 0; n < k; n += 1) this.v[n] = t, this.pv[n] = t;
                        this._caching = {
                            lastFrame: t,
                            lastIndex: 0,
                            value: createTypedArray("float32", k)
                        }, this.addEffect = o
                    }
                    return {
                        getProp: function(u, h, p, d, n) {
                            var y;
                            if (h.k.length)
                                if (typeof h.k[0] == "number") y = new c(u, h, d, n);
                                else switch (p) {
                                    case 0:
                                        y = new l(u, h, d, n);
                                        break;
                                    case 1:
                                        y = new m(u, h, d, n)
                                } else y = new g(u, h, d, n);
                            return y.effectsSequence.length && n.addDynamicProperty(y), y
                        }
                    }
                }();

            function DynamicPropertyContainer() {}
            DynamicPropertyContainer.prototype = {
                addDynamicProperty: function(t) {
                    this.dynamicProperties.indexOf(t) === -1 && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = !0)
                },
                iterateDynamicProperties: function() {
                    var t;
                    this._mdf = !1;
                    var e = this.dynamicProperties.length;
                    for (t = 0; t < e; t += 1) this.dynamicProperties[t].getValue(), this.dynamicProperties[t]._mdf && (this._mdf = !0)
                },
                initDynamicPropertyContainer: function(t) {
                    this.container = t, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1
                }
            };
            var pointPool = poolFactory(8, function() {
                return createTypedArray("float32", 2)
            });

            function ShapePath() {
                this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength)
            }
            ShapePath.prototype.setPathData = function(t, e) {
                this.c = t, this.setLength(e);
                for (var r = 0; r < e;) this.v[r] = pointPool.newElement(), this.o[r] = pointPool.newElement(), this.i[r] = pointPool.newElement(), r += 1
            }, ShapePath.prototype.setLength = function(t) {
                for (; this._maxLength < t;) this.doubleArrayLength();
                this._length = t
            }, ShapePath.prototype.doubleArrayLength = function() {
                this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2
            }, ShapePath.prototype.setXYAt = function(t, e, r, i, a) {
                var s;
                switch (this._length = Math.max(this._length, i + 1), this._length >= this._maxLength && this.doubleArrayLength(), r) {
                    case "v":
                        s = this.v;
                        break;
                    case "i":
                        s = this.i;
                        break;
                    case "o":
                        s = this.o;
                        break;
                    default:
                        s = []
                }(!s[i] || s[i] && !a) && (s[i] = pointPool.newElement()), s[i][0] = t, s[i][1] = e
            }, ShapePath.prototype.setTripleAt = function(t, e, r, i, a, s, f, o) {
                this.setXYAt(t, e, "v", f, o), this.setXYAt(r, i, "o", f, o), this.setXYAt(a, s, "i", f, o)
            }, ShapePath.prototype.reverse = function() {
                var t = new ShapePath;
                t.setPathData(this.c, this._length);
                var e = this.v,
                    r = this.o,
                    i = this.i,
                    a = 0;
                this.c && (t.setTripleAt(e[0][0], e[0][1], i[0][0], i[0][1], r[0][0], r[0][1], 0, !1), a = 1);
                var s, f = this._length - 1,
                    o = this._length;
                for (s = a; s < o; s += 1) t.setTripleAt(e[f][0], e[f][1], i[f][0], i[f][1], r[f][0], r[f][1], s, !1), f -= 1;
                return t
            }, ShapePath.prototype.length = function() {
                return this._length
            };
            var shapePool = (factory = poolFactory(4, function() {
                    return new ShapePath
                }, function(t) {
                    var e, r = t._length;
                    for (e = 0; e < r; e += 1) pointPool.release(t.v[e]), pointPool.release(t.i[e]), pointPool.release(t.o[e]), t.v[e] = null, t.i[e] = null, t.o[e] = null;
                    t._length = 0, t.c = !1
                }), factory.clone = function(t) {
                    var e, r = factory.newElement(),
                        i = t._length === void 0 ? t.v.length : t._length;
                    for (r.setLength(i), r.c = t.c, e = 0; e < i; e += 1) r.setTripleAt(t.v[e][0], t.v[e][1], t.o[e][0], t.o[e][1], t.i[e][0], t.i[e][1], e);
                    return r
                }, factory),
                factory;

            function ShapeCollection() {
                this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength)
            }
            ShapeCollection.prototype.addShape = function(t) {
                this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1
            }, ShapeCollection.prototype.releaseShapes = function() {
                var t;
                for (t = 0; t < this._length; t += 1) shapePool.release(this.shapes[t]);
                this._length = 0
            };
            var shapeCollectionPool = (ob = {
                    newShapeCollection: function() {
                        return _length ? pool[_length -= 1] : new ShapeCollection
                    },
                    release: function(t) {
                        var e, r = t._length;
                        for (e = 0; e < r; e += 1) shapePool.release(t.shapes[e]);
                        t._length = 0, _length === _maxLength && (pool = pooling.double(pool), _maxLength *= 2), pool[_length] = t, _length += 1
                    }
                }, _length = 0, _maxLength = 4, pool = createSizedArray(_maxLength), ob),
                ob, _length, _maxLength, pool, ShapePropertyFactory = function() {
                    function t(u, h, p) {
                        var d, n, y, v, b, x, S, k, _, A = p.lastIndex,
                            T = this.keyframes;
                        if (u < T[0].t - this.offsetTime) d = T[0].s[0], y = !0, A = 0;
                        else if (u >= T[T.length - 1].t - this.offsetTime) d = T[T.length - 1].s ? T[T.length - 1].s[0] : T[T.length - 2].e[0], y = !0;
                        else {
                            for (var E, C, F, M = A, D = T.length - 1, I = !0; I && (E = T[M], !((C = T[M + 1]).t - this.offsetTime > u));) M < D - 1 ? M += 1 : I = !1;
                            if (F = this.keyframesMetadata[M] || {}, A = M, !(y = E.h === 1)) {
                                if (u >= C.t - this.offsetTime) k = 1;
                                else if (u < E.t - this.offsetTime) k = 0;
                                else {
                                    var L;
                                    F.__fnct ? L = F.__fnct : (L = BezierFactory.getBezierEasing(E.o.x, E.o.y, E.i.x, E.i.y).get, F.__fnct = L), k = L((u - (E.t - this.offsetTime)) / (C.t - this.offsetTime - (E.t - this.offsetTime)))
                                }
                                n = C.s ? C.s[0] : E.e[0]
                            }
                            d = E.s[0]
                        }
                        for (x = h._length, S = d.i[0].length, p.lastIndex = A, v = 0; v < x; v += 1)
                            for (b = 0; b < S; b += 1) _ = y ? d.i[v][b] : d.i[v][b] + (n.i[v][b] - d.i[v][b]) * k, h.i[v][b] = _, _ = y ? d.o[v][b] : d.o[v][b] + (n.o[v][b] - d.o[v][b]) * k, h.o[v][b] = _, _ = y ? d.v[v][b] : d.v[v][b] + (n.v[v][b] - d.v[v][b]) * k, h.v[v][b] = _
                    }

                    function e() {
                        var u = this.comp.renderedFrame - this.offsetTime,
                            h = this.keyframes[0].t - this.offsetTime,
                            p = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                            d = this._caching.lastFrame;
                        return d !== -999999 && (d < h && u < h || d > p && u > p) || (this._caching.lastIndex = d < u ? this._caching.lastIndex : 0, this.interpolateShape(u, this.pv, this._caching)), this._caching.lastFrame = u, this.pv
                    }

                    function r() {
                        this.paths = this.localShapeCollection
                    }

                    function i(u) {
                        (function(h, p) {
                            if (h._length !== p._length || h.c !== p.c) return !1;
                            var d, n = h._length;
                            for (d = 0; d < n; d += 1)
                                if (h.v[d][0] !== p.v[d][0] || h.v[d][1] !== p.v[d][1] || h.o[d][0] !== p.o[d][0] || h.o[d][1] !== p.o[d][1] || h.i[d][0] !== p.i[d][0] || h.i[d][1] !== p.i[d][1]) return !1;
                            return !0
                        })(this.v, u) || (this.v = shapePool.clone(u), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
                    }

                    function a() {
                        if (this.elem.globalData.frameId !== this.frameId)
                            if (this.effectsSequence.length)
                                if (this.lock) this.setVValue(this.pv);
                                else {
                                    var u, h;
                                    this.lock = !0, this._mdf = !1, u = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
                                    var p = this.effectsSequence.length;
                                    for (h = 0; h < p; h += 1) u = this.effectsSequence[h](u);
                                    this.setVValue(u), this.lock = !1, this.frameId = this.elem.globalData.frameId
                                }
                        else this._mdf = !1
                    }

                    function s(u, h, p) {
                        this.propType = "shape", this.comp = u.comp, this.container = u, this.elem = u, this.data = h, this.k = !1, this.kf = !1, this._mdf = !1;
                        var d = p === 3 ? h.pt.k : h.ks.k;
                        this.v = shapePool.clone(d), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = r, this.effectsSequence = []
                    }

                    function f(u) {
                        this.effectsSequence.push(u), this.container.addDynamicProperty(this)
                    }

                    function o(u, h, p) {
                        this.propType = "shape", this.comp = u.comp, this.elem = u, this.container = u, this.offsetTime = u.data.st, this.keyframes = p === 3 ? h.pt.k : h.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
                        var d = this.keyframes[0].s[0].i.length;
                        this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, d), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = -999999, this.reset = r, this._caching = {
                            lastFrame: -999999,
                            lastIndex: 0
                        }, this.effectsSequence = [e.bind(this)]
                    }
                    s.prototype.interpolateShape = t, s.prototype.getValue = a, s.prototype.setVValue = i, s.prototype.addEffect = f, o.prototype.getValue = a, o.prototype.interpolateShape = t, o.prototype.setVValue = i, o.prototype.addEffect = f;
                    var g = function() {
                            var u = roundCorner;

                            function h(p, d) {
                                this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = d.d, this.elem = p, this.comp = p.comp, this.frameId = -1, this.initDynamicPropertyContainer(p), this.p = PropertyFactory.getProp(p, d.p, 1, 0, this), this.s = PropertyFactory.getProp(p, d.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
                            }
                            return h.prototype = {
                                reset: r,
                                getValue: function() {
                                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
                                },
                                convertEllToPath: function() {
                                    var p = this.p.v[0],
                                        d = this.p.v[1],
                                        n = this.s.v[0] / 2,
                                        y = this.s.v[1] / 2,
                                        v = this.d !== 3,
                                        b = this.v;
                                    b.v[0][0] = p, b.v[0][1] = d - y, b.v[1][0] = v ? p + n : p - n, b.v[1][1] = d, b.v[2][0] = p, b.v[2][1] = d + y, b.v[3][0] = v ? p - n : p + n, b.v[3][1] = d, b.i[0][0] = v ? p - n * u : p + n * u, b.i[0][1] = d - y, b.i[1][0] = v ? p + n : p - n, b.i[1][1] = d - y * u, b.i[2][0] = v ? p + n * u : p - n * u, b.i[2][1] = d + y, b.i[3][0] = v ? p - n : p + n, b.i[3][1] = d + y * u, b.o[0][0] = v ? p + n * u : p - n * u, b.o[0][1] = d - y, b.o[1][0] = v ? p + n : p - n, b.o[1][1] = d + y * u, b.o[2][0] = v ? p - n * u : p + n * u, b.o[2][1] = d + y, b.o[3][0] = v ? p - n : p + n, b.o[3][1] = d - y * u
                                }
                            }, extendPrototype([DynamicPropertyContainer], h), h
                        }(),
                        c = function() {
                            function u(h, p) {
                                this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = h, this.comp = h.comp, this.data = p, this.frameId = -1, this.d = p.d, this.initDynamicPropertyContainer(h), p.sy === 1 ? (this.ir = PropertyFactory.getProp(h, p.ir, 0, 0, this), this.is = PropertyFactory.getProp(h, p.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(h, p.pt, 0, 0, this), this.p = PropertyFactory.getProp(h, p.p, 1, 0, this), this.r = PropertyFactory.getProp(h, p.r, 0, degToRads, this), this.or = PropertyFactory.getProp(h, p.or, 0, 0, this), this.os = PropertyFactory.getProp(h, p.os, 0, .01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
                            }
                            return u.prototype = {
                                reset: r,
                                getValue: function() {
                                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
                                },
                                convertStarToPath: function() {
                                    var h, p, d, n, y = 2 * Math.floor(this.pt.v),
                                        v = 2 * Math.PI / y,
                                        b = !0,
                                        x = this.or.v,
                                        S = this.ir.v,
                                        k = this.os.v,
                                        _ = this.is.v,
                                        A = 2 * Math.PI * x / (2 * y),
                                        T = 2 * Math.PI * S / (2 * y),
                                        E = -Math.PI / 2;
                                    E += this.r.v;
                                    var C = this.data.d === 3 ? -1 : 1;
                                    for (this.v._length = 0, h = 0; h < y; h += 1) {
                                        d = b ? k : _, n = b ? A : T;
                                        var F = (p = b ? x : S) * Math.cos(E),
                                            M = p * Math.sin(E),
                                            D = F === 0 && M === 0 ? 0 : M / Math.sqrt(F * F + M * M),
                                            I = F === 0 && M === 0 ? 0 : -F / Math.sqrt(F * F + M * M);
                                        F += +this.p.v[0], M += +this.p.v[1], this.v.setTripleAt(F, M, F - D * n * d * C, M - I * n * d * C, F + D * n * d * C, M + I * n * d * C, h, !0), b = !b, E += v * C
                                    }
                                },
                                convertPolygonToPath: function() {
                                    var h, p = Math.floor(this.pt.v),
                                        d = 2 * Math.PI / p,
                                        n = this.or.v,
                                        y = this.os.v,
                                        v = 2 * Math.PI * n / (4 * p),
                                        b = .5 * -Math.PI,
                                        x = this.data.d === 3 ? -1 : 1;
                                    for (b += this.r.v, this.v._length = 0, h = 0; h < p; h += 1) {
                                        var S = n * Math.cos(b),
                                            k = n * Math.sin(b),
                                            _ = S === 0 && k === 0 ? 0 : k / Math.sqrt(S * S + k * k),
                                            A = S === 0 && k === 0 ? 0 : -S / Math.sqrt(S * S + k * k);
                                        S += +this.p.v[0], k += +this.p.v[1], this.v.setTripleAt(S, k, S - _ * v * y * x, k - A * v * y * x, S + _ * v * y * x, k + A * v * y * x, h, !0), b += d * x
                                    }
                                    this.paths.length = 0, this.paths[0] = this.v
                                }
                            }, extendPrototype([DynamicPropertyContainer], u), u
                        }(),
                        l = function() {
                            function u(h, p) {
                                this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = h, this.comp = h.comp, this.frameId = -1, this.d = p.d, this.initDynamicPropertyContainer(h), this.p = PropertyFactory.getProp(h, p.p, 1, 0, this), this.s = PropertyFactory.getProp(h, p.s, 1, 0, this), this.r = PropertyFactory.getProp(h, p.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
                            }
                            return u.prototype = {
                                convertRectToPath: function() {
                                    var h = this.p.v[0],
                                        p = this.p.v[1],
                                        d = this.s.v[0] / 2,
                                        n = this.s.v[1] / 2,
                                        y = bmMin(d, n, this.r.v),
                                        v = y * (1 - roundCorner);
                                    this.v._length = 0, this.d === 2 || this.d === 1 ? (this.v.setTripleAt(h + d, p - n + y, h + d, p - n + y, h + d, p - n + v, 0, !0), this.v.setTripleAt(h + d, p + n - y, h + d, p + n - v, h + d, p + n - y, 1, !0), y !== 0 ? (this.v.setTripleAt(h + d - y, p + n, h + d - y, p + n, h + d - v, p + n, 2, !0), this.v.setTripleAt(h - d + y, p + n, h - d + v, p + n, h - d + y, p + n, 3, !0), this.v.setTripleAt(h - d, p + n - y, h - d, p + n - y, h - d, p + n - v, 4, !0), this.v.setTripleAt(h - d, p - n + y, h - d, p - n + v, h - d, p - n + y, 5, !0), this.v.setTripleAt(h - d + y, p - n, h - d + y, p - n, h - d + v, p - n, 6, !0), this.v.setTripleAt(h + d - y, p - n, h + d - v, p - n, h + d - y, p - n, 7, !0)) : (this.v.setTripleAt(h - d, p + n, h - d + v, p + n, h - d, p + n, 2), this.v.setTripleAt(h - d, p - n, h - d, p - n + v, h - d, p - n, 3))) : (this.v.setTripleAt(h + d, p - n + y, h + d, p - n + v, h + d, p - n + y, 0, !0), y !== 0 ? (this.v.setTripleAt(h + d - y, p - n, h + d - y, p - n, h + d - v, p - n, 1, !0), this.v.setTripleAt(h - d + y, p - n, h - d + v, p - n, h - d + y, p - n, 2, !0), this.v.setTripleAt(h - d, p - n + y, h - d, p - n + y, h - d, p - n + v, 3, !0), this.v.setTripleAt(h - d, p + n - y, h - d, p + n - v, h - d, p + n - y, 4, !0), this.v.setTripleAt(h - d + y, p + n, h - d + y, p + n, h - d + v, p + n, 5, !0), this.v.setTripleAt(h + d - y, p + n, h + d - v, p + n, h + d - y, p + n, 6, !0), this.v.setTripleAt(h + d, p + n - y, h + d, p + n - y, h + d, p + n - v, 7, !0)) : (this.v.setTripleAt(h - d, p - n, h - d + v, p - n, h - d, p - n, 1, !0), this.v.setTripleAt(h - d, p + n, h - d, p + n - v, h - d, p + n, 2, !0), this.v.setTripleAt(h + d, p + n, h + d - v, p + n, h + d, p + n, 3, !0)))
                                },
                                getValue: function() {
                                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
                                },
                                reset: r
                            }, extendPrototype([DynamicPropertyContainer], u), u
                        }(),
                        m = {
                            getShapeProp: function(u, h, p) {
                                var d;
                                return p === 3 || p === 4 ? d = (p === 3 ? h.pt : h.ks).k.length ? new o(u, h, p) : new s(u, h, p) : p === 5 ? d = new l(u, h) : p === 6 ? d = new g(u, h) : p === 7 && (d = new c(u, h)), d.k && u.addDynamicProperty(d), d
                            },
                            getConstructorFunction: function() {
                                return s
                            },
                            getKeyframedConstructorFunction: function() {
                                return o
                            }
                        };
                    return m
                }(),
                Matrix = function() {
                    var t = Math.cos,
                        e = Math.sin,
                        r = Math.tan,
                        i = Math.round;

                    function a() {
                        return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
                    }

                    function s(w) {
                        if (w === 0) return this;
                        var P = t(w),
                            B = e(w);
                        return this._t(P, -B, 0, 0, B, P, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                    }

                    function f(w) {
                        if (w === 0) return this;
                        var P = t(w),
                            B = e(w);
                        return this._t(1, 0, 0, 0, 0, P, -B, 0, 0, B, P, 0, 0, 0, 0, 1)
                    }

                    function o(w) {
                        if (w === 0) return this;
                        var P = t(w),
                            B = e(w);
                        return this._t(P, 0, B, 0, 0, 1, 0, 0, -B, 0, P, 0, 0, 0, 0, 1)
                    }

                    function g(w) {
                        if (w === 0) return this;
                        var P = t(w),
                            B = e(w);
                        return this._t(P, -B, 0, 0, B, P, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                    }

                    function c(w, P) {
                        return this._t(1, P, w, 1, 0, 0)
                    }

                    function l(w, P) {
                        return this.shear(r(w), r(P))
                    }

                    function m(w, P) {
                        var B = t(P),
                            R = e(P);
                        return this._t(B, R, 0, 0, -R, B, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, r(w), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(B, -R, 0, 0, R, B, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                    }

                    function u(w, P, B) {
                        return B || B === 0 || (B = 1), w === 1 && P === 1 && B === 1 ? this : this._t(w, 0, 0, 0, 0, P, 0, 0, 0, 0, B, 0, 0, 0, 0, 1)
                    }

                    function h(w, P, B, R, O, j, W, N, $, H, G, z, Y, q, Z, X) {
                        return this.props[0] = w, this.props[1] = P, this.props[2] = B, this.props[3] = R, this.props[4] = O, this.props[5] = j, this.props[6] = W, this.props[7] = N, this.props[8] = $, this.props[9] = H, this.props[10] = G, this.props[11] = z, this.props[12] = Y, this.props[13] = q, this.props[14] = Z, this.props[15] = X, this
                    }

                    function p(w, P, B) {
                        return B = B || 0, w !== 0 || P !== 0 || B !== 0 ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, w, P, B, 1) : this
                    }

                    function d(w, P, B, R, O, j, W, N, $, H, G, z, Y, q, Z, X) {
                        var V = this.props;
                        if (w === 1 && P === 0 && B === 0 && R === 0 && O === 0 && j === 1 && W === 0 && N === 0 && $ === 0 && H === 0 && G === 1 && z === 0) return V[12] = V[12] * w + V[15] * Y, V[13] = V[13] * j + V[15] * q, V[14] = V[14] * G + V[15] * Z, V[15] *= X, this._identityCalculated = !1, this;
                        var J = V[0],
                            st = V[1],
                            nt = V[2],
                            at = V[3],
                            Q = V[4],
                            U = V[5],
                            K = V[6],
                            tt = V[7],
                            et = V[8],
                            rt = V[9],
                            ot = V[10],
                            it = V[11],
                            ht = V[12],
                            lt = V[13],
                            pt = V[14],
                            ft = V[15];
                        return V[0] = J * w + st * O + nt * $ + at * Y, V[1] = J * P + st * j + nt * H + at * q, V[2] = J * B + st * W + nt * G + at * Z, V[3] = J * R + st * N + nt * z + at * X, V[4] = Q * w + U * O + K * $ + tt * Y, V[5] = Q * P + U * j + K * H + tt * q, V[6] = Q * B + U * W + K * G + tt * Z, V[7] = Q * R + U * N + K * z + tt * X, V[8] = et * w + rt * O + ot * $ + it * Y, V[9] = et * P + rt * j + ot * H + it * q, V[10] = et * B + rt * W + ot * G + it * Z, V[11] = et * R + rt * N + ot * z + it * X, V[12] = ht * w + lt * O + pt * $ + ft * Y, V[13] = ht * P + lt * j + pt * H + ft * q, V[14] = ht * B + lt * W + pt * G + ft * Z, V[15] = ht * R + lt * N + pt * z + ft * X, this._identityCalculated = !1, this
                    }

                    function n() {
                        return this._identityCalculated || (this._identity = !(this.props[0] !== 1 || this.props[1] !== 0 || this.props[2] !== 0 || this.props[3] !== 0 || this.props[4] !== 0 || this.props[5] !== 1 || this.props[6] !== 0 || this.props[7] !== 0 || this.props[8] !== 0 || this.props[9] !== 0 || this.props[10] !== 1 || this.props[11] !== 0 || this.props[12] !== 0 || this.props[13] !== 0 || this.props[14] !== 0 || this.props[15] !== 1), this._identityCalculated = !0), this._identity
                    }

                    function y(w) {
                        for (var P = 0; P < 16;) {
                            if (w.props[P] !== this.props[P]) return !1;
                            P += 1
                        }
                        return !0
                    }

                    function v(w) {
                        var P;
                        for (P = 0; P < 16; P += 1) w.props[P] = this.props[P];
                        return w
                    }

                    function b(w) {
                        var P;
                        for (P = 0; P < 16; P += 1) this.props[P] = w[P]
                    }

                    function x(w, P, B) {
                        return {
                            x: w * this.props[0] + P * this.props[4] + B * this.props[8] + this.props[12],
                            y: w * this.props[1] + P * this.props[5] + B * this.props[9] + this.props[13],
                            z: w * this.props[2] + P * this.props[6] + B * this.props[10] + this.props[14]
                        }
                    }

                    function S(w, P, B) {
                        return w * this.props[0] + P * this.props[4] + B * this.props[8] + this.props[12]
                    }

                    function k(w, P, B) {
                        return w * this.props[1] + P * this.props[5] + B * this.props[9] + this.props[13]
                    }

                    function _(w, P, B) {
                        return w * this.props[2] + P * this.props[6] + B * this.props[10] + this.props[14]
                    }

                    function A() {
                        var w = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                            P = this.props[5] / w,
                            B = -this.props[1] / w,
                            R = -this.props[4] / w,
                            O = this.props[0] / w,
                            j = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / w,
                            W = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / w,
                            N = new Matrix;
                        return N.props[0] = P, N.props[1] = B, N.props[4] = R, N.props[5] = O, N.props[12] = j, N.props[13] = W, N
                    }

                    function T(w) {
                        return this.getInverseMatrix().applyToPointArray(w[0], w[1], w[2] || 0)
                    }

                    function E(w) {
                        var P, B = w.length,
                            R = [];
                        for (P = 0; P < B; P += 1) R[P] = T(w[P]);
                        return R
                    }

                    function C(w, P, B) {
                        var R = createTypedArray("float32", 6);
                        if (this.isIdentity()) R[0] = w[0], R[1] = w[1], R[2] = P[0], R[3] = P[1], R[4] = B[0], R[5] = B[1];
                        else {
                            var O = this.props[0],
                                j = this.props[1],
                                W = this.props[4],
                                N = this.props[5],
                                $ = this.props[12],
                                H = this.props[13];
                            R[0] = w[0] * O + w[1] * W + $, R[1] = w[0] * j + w[1] * N + H, R[2] = P[0] * O + P[1] * W + $, R[3] = P[0] * j + P[1] * N + H, R[4] = B[0] * O + B[1] * W + $, R[5] = B[0] * j + B[1] * N + H
                        }
                        return R
                    }

                    function F(w, P, B) {
                        return this.isIdentity() ? [w, P, B] : [w * this.props[0] + P * this.props[4] + B * this.props[8] + this.props[12], w * this.props[1] + P * this.props[5] + B * this.props[9] + this.props[13], w * this.props[2] + P * this.props[6] + B * this.props[10] + this.props[14]]
                    }

                    function M(w, P) {
                        if (this.isIdentity()) return w + "," + P;
                        var B = this.props;
                        return Math.round(100 * (w * B[0] + P * B[4] + B[12])) / 100 + "," + Math.round(100 * (w * B[1] + P * B[5] + B[13])) / 100
                    }

                    function D() {
                        for (var w = 0, P = this.props, B = "matrix3d("; w < 16;) B += i(1e4 * P[w]) / 1e4, B += w === 15 ? ")" : ",", w += 1;
                        return B
                    }

                    function I(w) {
                        return w < 1e-6 && w > 0 || w > -1e-6 && w < 0 ? i(1e4 * w) / 1e4 : w
                    }

                    function L() {
                        var w = this.props;
                        return "matrix(" + I(w[0]) + "," + I(w[1]) + "," + I(w[4]) + "," + I(w[5]) + "," + I(w[12]) + "," + I(w[13]) + ")"
                    }
                    return function() {
                        this.reset = a, this.rotate = s, this.rotateX = f, this.rotateY = o, this.rotateZ = g, this.skew = l, this.skewFromAxis = m, this.shear = c, this.scale = u, this.setTransform = h, this.translate = p, this.transform = d, this.applyToPoint = x, this.applyToX = S, this.applyToY = k, this.applyToZ = _, this.applyToPointArray = F, this.applyToTriplePoints = C, this.applyToPointStringified = M, this.toCSS = D, this.to2dCSS = L, this.clone = v, this.cloneFromProps = b, this.equals = y, this.inversePoints = E, this.inversePoint = T, this.getInverseMatrix = A, this._t = this.transform, this.isIdentity = n, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset()
                    }
                }();

            function _typeof$3(t) {
                return (_typeof$3 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(t)
            }
            var lottie = {};

            function setLocation(t) {
                setLocationHref(t)
            }

            function searchAnimations() {
                animationManager.searchAnimations()
            }

            function setSubframeRendering(t) {
                setSubframeEnabled(t)
            }

            function setPrefix(t) {
                setIdPrefix(t)
            }

            function loadAnimation(t) {
                return animationManager.loadAnimation(t)
            }

            function setQuality(t) {
                if (typeof t == "string") switch (t) {
                    case "high":
                        setDefaultCurveSegments(200);
                        break;
                    default:
                    case "medium":
                        setDefaultCurveSegments(50);
                        break;
                    case "low":
                        setDefaultCurveSegments(10)
                } else !isNaN(t) && t > 1 && setDefaultCurveSegments(t)
            }

            function inBrowser() {
                return typeof navigator < "u"
            }

            function installPlugin(t, e) {
                t === "expressions" && setExpressionsPlugin(e)
            }

            function getFactory(t) {
                switch (t) {
                    case "propertyFactory":
                        return PropertyFactory;
                    case "shapePropertyFactory":
                        return ShapePropertyFactory;
                    case "matrix":
                        return Matrix;
                    default:
                        return null
                }
            }

            function checkReady() {
                document.readyState === "complete" && (clearInterval(readyStateCheckInterval), searchAnimations())
            }

            function getQueryVariable(t) {
                for (var e = queryString.split("&"), r = 0; r < e.length; r += 1) {
                    var i = e[r].split("=");
                    if (decodeURIComponent(i[0]) == t) return decodeURIComponent(i[1])
                }
                return null
            }
            lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocation, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.useWebWorker = setWebWorker, lottie.setIDPrefix = setPrefix, lottie.__getFactory = getFactory, lottie.version = "5.10.2";
            var queryString = ""; {
                var scripts = document.getElementsByTagName("script"),
                    index = scripts.length - 1,
                    myScript = scripts[index] || {
                        src: ""
                    };
                queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, "") : "", getQueryVariable("renderer")
            }
            var readyStateCheckInterval = setInterval(checkReady, 100);
            try {
                _typeof$3(exports) !== "object" && (window.bodymovin = lottie)
            } catch (t) {}
            var ShapeModifiers = function() {
                var t = {},
                    e = {};
                return t.registerModifier = function(r, i) {
                    e[r] || (e[r] = i)
                }, t.getModifier = function(r, i, a) {
                    return new e[r](i, a)
                }, t
            }();

            function ShapeModifier() {}

            function TrimModifier() {}

            function PuckerAndBloatModifier() {}
            ShapeModifier.prototype.initModifierProperties = function() {}, ShapeModifier.prototype.addShapeToModifier = function() {}, ShapeModifier.prototype.addShape = function(t) {
                if (!this.closed) {
                    t.sh.container.addDynamicProperty(t.sh);
                    var e = {
                        shape: t.sh,
                        data: t,
                        localShapeCollection: shapeCollectionPool.newShapeCollection()
                    };
                    this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated()
                }
            }, ShapeModifier.prototype.init = function(t, e) {
                this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
            }, ShapeModifier.prototype.processKeys = function() {
                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
            }, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function(t, e) {
                this.s = PropertyFactory.getProp(t, e.s, 0, .01, this), this.e = PropertyFactory.getProp(t, e.e, 0, .01, this), this.o = PropertyFactory.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
            }, TrimModifier.prototype.addShapeToModifier = function(t) {
                t.pathsData = []
            }, TrimModifier.prototype.calculateShapeEdges = function(t, e, r, i, a) {
                var s = [];
                e <= 1 ? s.push({
                    s: t,
                    e
                }) : t >= 1 ? s.push({
                    s: t - 1,
                    e: e - 1
                }) : (s.push({
                    s: t,
                    e: 1
                }), s.push({
                    s: 0,
                    e: e - 1
                }));
                var f, o, g = [],
                    c = s.length;
                for (f = 0; f < c; f += 1) {
                    var l, m;
                    (o = s[f]).e * a < i || o.s * a > i + r || (l = o.s * a <= i ? 0 : (o.s * a - i) / r, m = o.e * a >= i + r ? 1 : (o.e * a - i) / r, g.push([l, m]))
                }
                return g.length || g.push([0, 0]), g
            }, TrimModifier.prototype.releasePathsData = function(t) {
                var e, r = t.length;
                for (e = 0; e < r; e += 1) segmentsLengthPool.release(t[e]);
                return t.length = 0, t
            }, TrimModifier.prototype.processShapes = function(t) {
                var e, r, i, a;
                if (this._mdf || t) {
                    var s = this.o.v % 360 / 360;
                    if (s < 0 && (s += 1), (e = this.s.v > 1 ? 1 + s : this.s.v < 0 ? 0 + s : this.s.v + s) > (r = this.e.v > 1 ? 1 + s : this.e.v < 0 ? 0 + s : this.e.v + s)) {
                        var f = e;
                        e = r, r = f
                    }
                    e = 1e-4 * Math.round(1e4 * e), r = 1e-4 * Math.round(1e4 * r), this.sValue = e, this.eValue = r
                } else e = this.sValue, r = this.eValue;
                var o, g, c, l, m, u = this.shapes.length,
                    h = 0;
                if (r === e)
                    for (a = 0; a < u; a += 1) this.shapes[a].localShapeCollection.releaseShapes(), this.shapes[a].shape._mdf = !0, this.shapes[a].shape.paths = this.shapes[a].localShapeCollection, this._mdf && (this.shapes[a].pathsData.length = 0);
                else if (r === 1 && e === 0 || r === 0 && e === 1) {
                    if (this._mdf)
                        for (a = 0; a < u; a += 1) this.shapes[a].pathsData.length = 0, this.shapes[a].shape._mdf = !0
                } else {
                    var p, d, n = [];
                    for (a = 0; a < u; a += 1)
                        if ((p = this.shapes[a]).shape._mdf || this._mdf || t || this.m === 2) {
                            if (g = (i = p.shape.paths)._length, m = 0, !p.shape._mdf && p.pathsData.length) m = p.totalShapeLength;
                            else {
                                for (c = this.releasePathsData(p.pathsData), o = 0; o < g; o += 1) l = bez.getSegmentsLength(i.shapes[o]), c.push(l), m += l.totalLength;
                                p.totalShapeLength = m, p.pathsData = c
                            }
                            h += m, p.shape._mdf = !0
                        } else p.shape.paths = p.localShapeCollection;
                    var y, v = e,
                        b = r,
                        x = 0;
                    for (a = u - 1; a >= 0; a -= 1)
                        if ((p = this.shapes[a]).shape._mdf) {
                            for ((d = p.localShapeCollection).releaseShapes(), this.m === 2 && u > 1 ? (y = this.calculateShapeEdges(e, r, p.totalShapeLength, x, h), x += p.totalShapeLength) : y = [
                                    [v, b]
                                ], g = y.length, o = 0; o < g; o += 1) {
                                v = y[o][0], b = y[o][1], n.length = 0, b <= 1 ? n.push({
                                    s: p.totalShapeLength * v,
                                    e: p.totalShapeLength * b
                                }) : v >= 1 ? n.push({
                                    s: p.totalShapeLength * (v - 1),
                                    e: p.totalShapeLength * (b - 1)
                                }) : (n.push({
                                    s: p.totalShapeLength * v,
                                    e: p.totalShapeLength
                                }), n.push({
                                    s: 0,
                                    e: p.totalShapeLength * (b - 1)
                                }));
                                var S = this.addShapes(p, n[0]);
                                if (n[0].s !== n[0].e) {
                                    if (n.length > 1)
                                        if (p.shape.paths.shapes[p.shape.paths._length - 1].c) {
                                            var k = S.pop();
                                            this.addPaths(S, d), S = this.addShapes(p, n[1], k)
                                        } else this.addPaths(S, d), S = this.addShapes(p, n[1]);
                                    this.addPaths(S, d)
                                }
                            }
                            p.shape.paths = d
                        }
                }
            }, TrimModifier.prototype.addPaths = function(t, e) {
                var r, i = t.length;
                for (r = 0; r < i; r += 1) e.addShape(t[r])
            }, TrimModifier.prototype.addSegment = function(t, e, r, i, a, s, f) {
                a.setXYAt(e[0], e[1], "o", s), a.setXYAt(r[0], r[1], "i", s + 1), f && a.setXYAt(t[0], t[1], "v", s), a.setXYAt(i[0], i[1], "v", s + 1)
            }, TrimModifier.prototype.addSegmentFromArray = function(t, e, r, i) {
                e.setXYAt(t[1], t[5], "o", r), e.setXYAt(t[2], t[6], "i", r + 1), i && e.setXYAt(t[0], t[4], "v", r), e.setXYAt(t[3], t[7], "v", r + 1)
            }, TrimModifier.prototype.addShapes = function(t, e, r) {
                var i, a, s, f, o, g, c, l, m = t.pathsData,
                    u = t.shape.paths.shapes,
                    h = t.shape.paths._length,
                    p = 0,
                    d = [],
                    n = !0;
                for (r ? (o = r._length, l = r._length) : (r = shapePool.newElement(), o = 0, l = 0), d.push(r), i = 0; i < h; i += 1) {
                    for (g = m[i].lengths, r.c = u[i].c, s = u[i].c ? g.length : g.length + 1, a = 1; a < s; a += 1)
                        if (p + (f = g[a - 1]).addedLength < e.s) p += f.addedLength, r.c = !1;
                        else {
                            if (p > e.e) {
                                r.c = !1;
                                break
                            }
                            e.s <= p && e.e >= p + f.addedLength ? (this.addSegment(u[i].v[a - 1], u[i].o[a - 1], u[i].i[a], u[i].v[a], r, o, n), n = !1) : (c = bez.getNewSegment(u[i].v[a - 1], u[i].v[a], u[i].o[a - 1], u[i].i[a], (e.s - p) / f.addedLength, (e.e - p) / f.addedLength, g[a - 1]), this.addSegmentFromArray(c, r, o, n), n = !1, r.c = !1), p += f.addedLength, o += 1
                        }
                    if (u[i].c && g.length) {
                        if (f = g[a - 1], p <= e.e) {
                            var y = g[a - 1].addedLength;
                            e.s <= p && e.e >= p + y ? (this.addSegment(u[i].v[a - 1], u[i].o[a - 1], u[i].i[0], u[i].v[0], r, o, n), n = !1) : (c = bez.getNewSegment(u[i].v[a - 1], u[i].v[0], u[i].o[a - 1], u[i].i[0], (e.s - p) / y, (e.e - p) / y, g[a - 1]), this.addSegmentFromArray(c, r, o, n), n = !1, r.c = !1)
                        } else r.c = !1;
                        p += f.addedLength, o += 1
                    }
                    if (r._length && (r.setXYAt(r.v[l][0], r.v[l][1], "i", l), r.setXYAt(r.v[r._length - 1][0], r.v[r._length - 1][1], "o", r._length - 1)), p > e.e) break;
                    i < h - 1 && (r = shapePool.newElement(), n = !0, d.push(r), o = 0)
                }
                return d
            }, extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(t, e) {
                this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length
            }, PuckerAndBloatModifier.prototype.processPath = function(t, e) {
                var r = e / 100,
                    i = [0, 0],
                    a = t._length,
                    s = 0;
                for (s = 0; s < a; s += 1) i[0] += t.v[s][0], i[1] += t.v[s][1];
                i[0] /= a, i[1] /= a;
                var f, o, g, c, l, m, u = shapePool.newElement();
                for (u.c = t.c, s = 0; s < a; s += 1) f = t.v[s][0] + (i[0] - t.v[s][0]) * r, o = t.v[s][1] + (i[1] - t.v[s][1]) * r, g = t.o[s][0] + (i[0] - t.o[s][0]) * -r, c = t.o[s][1] + (i[1] - t.o[s][1]) * -r, l = t.i[s][0] + (i[0] - t.i[s][0]) * -r, m = t.i[s][1] + (i[1] - t.i[s][1]) * -r, u.setTripleAt(f, o, g, c, l, m, s);
                return u
            }, PuckerAndBloatModifier.prototype.processShapes = function(t) {
                var e, r, i, a, s, f, o = this.shapes.length,
                    g = this.amount.v;
                if (g !== 0)
                    for (r = 0; r < o; r += 1) {
                        if (f = (s = this.shapes[r]).localShapeCollection, s.shape._mdf || this._mdf || t)
                            for (f.releaseShapes(), s.shape._mdf = !0, e = s.shape.paths.shapes, a = s.shape.paths._length, i = 0; i < a; i += 1) f.addShape(this.processPath(e[i], g));
                        s.shape.paths = s.localShapeCollection
                    }
                this.dynamicProperties.length || (this._mdf = !1)
            };
            var TransformPropertyFactory = function() {
                var t = [0, 0];

                function e(r, i, a) {
                    if (this.elem = r, this.frameId = -1, this.propType = "transform", this.data = i, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(a || r), i.p && i.p.s ? (this.px = PropertyFactory.getProp(r, i.p.x, 0, 0, this), this.py = PropertyFactory.getProp(r, i.p.y, 0, 0, this), i.p.z && (this.pz = PropertyFactory.getProp(r, i.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(r, i.p || {
                            k: [0, 0, 0]
                        }, 1, 0, this), i.rx) {
                        if (this.rx = PropertyFactory.getProp(r, i.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(r, i.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(r, i.rz, 0, degToRads, this), i.or.k[0].ti) {
                            var s, f = i.or.k.length;
                            for (s = 0; s < f; s += 1) i.or.k[s].to = null, i.or.k[s].ti = null
                        }
                        this.or = PropertyFactory.getProp(r, i.or, 1, degToRads, this), this.or.sh = !0
                    } else this.r = PropertyFactory.getProp(r, i.r || {
                        k: 0
                    }, 0, degToRads, this);
                    i.sk && (this.sk = PropertyFactory.getProp(r, i.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(r, i.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(r, i.a || {
                        k: [0, 0, 0]
                    }, 1, 0, this), this.s = PropertyFactory.getProp(r, i.s || {
                        k: [100, 100, 100]
                    }, 1, .01, this), i.o ? this.o = PropertyFactory.getProp(r, i.o, 0, .01, r) : this.o = {
                        _mdf: !1,
                        v: 1
                    }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
                }
                return e.prototype = {
                    applyToMatrix: function(r) {
                        var i = this._mdf;
                        this.iterateDynamicProperties(), this._mdf = this._mdf || i, this.a && r.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && r.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && r.skewFromAxis(-this.sk.v, this.sa.v), this.r ? r.rotate(-this.r.v) : r.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? r.translate(this.px.v, this.py.v, -this.pz.v) : r.translate(this.px.v, this.py.v, 0) : r.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                    },
                    getValue: function(r) {
                        if (this.elem.globalData.frameId !== this.frameId) {
                            if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || r) {
                                var i;
                                if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                                    var a, s;
                                    if (i = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (a = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / i, 0), s = this.p.getValueAtTime(this.p.keyframes[0].t / i, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (a = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / i, 0), s = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / i, 0)) : (a = this.p.pv, s = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / i, this.p.offsetTime));
                                    else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                        a = [], s = [];
                                        var f = this.px,
                                            o = this.py;
                                        f._caching.lastFrame + f.offsetTime <= f.keyframes[0].t ? (a[0] = f.getValueAtTime((f.keyframes[0].t + .01) / i, 0), a[1] = o.getValueAtTime((o.keyframes[0].t + .01) / i, 0), s[0] = f.getValueAtTime(f.keyframes[0].t / i, 0), s[1] = o.getValueAtTime(o.keyframes[0].t / i, 0)) : f._caching.lastFrame + f.offsetTime >= f.keyframes[f.keyframes.length - 1].t ? (a[0] = f.getValueAtTime(f.keyframes[f.keyframes.length - 1].t / i, 0), a[1] = o.getValueAtTime(o.keyframes[o.keyframes.length - 1].t / i, 0), s[0] = f.getValueAtTime((f.keyframes[f.keyframes.length - 1].t - .01) / i, 0), s[1] = o.getValueAtTime((o.keyframes[o.keyframes.length - 1].t - .01) / i, 0)) : (a = [f.pv, o.pv], s[0] = f.getValueAtTime((f._caching.lastFrame + f.offsetTime - .01) / i, f.offsetTime), s[1] = o.getValueAtTime((o._caching.lastFrame + o.offsetTime - .01) / i, o.offsetTime))
                                    } else a = s = t;
                                    this.v.rotate(-Math.atan2(a[1] - s[1], a[0] - s[0]))
                                }
                                this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                            }
                            this.frameId = this.elem.globalData.frameId
                        }
                    },
                    precalculateMatrix: function() {
                        if (!this.a.k && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
                            if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
                                if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                                this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3
                            }
                            this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
                        }
                    },
                    autoOrient: function() {}
                }, extendPrototype([DynamicPropertyContainer], e), e.prototype.addDynamicProperty = function(r) {
                    this._addDynamicProperty(r), this.elem.addDynamicProperty(r), this._isDirty = !0
                }, e.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, {
                    getTransformProperty: function(r, i, a) {
                        return new e(r, i, a)
                    }
                }
            }();

            function RepeaterModifier() {}

            function RoundCornersModifier() {}

            function floatEqual(t, e) {
                return 1e5 * Math.abs(t - e) <= Math.min(Math.abs(t), Math.abs(e))
            }

            function floatZero(t) {
                return Math.abs(t) <= 1e-5
            }

            function lerp(t, e, r) {
                return t * (1 - r) + e * r
            }

            function lerpPoint(t, e, r) {
                return [lerp(t[0], e[0], r), lerp(t[1], e[1], r)]
            }

            function quadRoots(t, e, r) {
                if (t === 0) return [];
                var i = e * e - 4 * t * r;
                if (i < 0) return [];
                var a = -e / (2 * t);
                if (i === 0) return [a];
                var s = Math.sqrt(i) / (2 * t);
                return [a - s, a + s]
            }

            function polynomialCoefficients(t, e, r, i) {
                return [3 * e - t - 3 * r + i, 3 * t - 6 * e + 3 * r, -3 * t + 3 * e, t]
            }

            function singlePoint(t) {
                return new PolynomialBezier(t, t, t, t, !1)
            }

            function PolynomialBezier(t, e, r, i, a) {
                a && pointEqual(t, e) && (e = lerpPoint(t, i, 1 / 3)), a && pointEqual(r, i) && (r = lerpPoint(t, i, 2 / 3));
                var s = polynomialCoefficients(t[0], e[0], r[0], i[0]),
                    f = polynomialCoefficients(t[1], e[1], r[1], i[1]);
                this.a = [s[0], f[0]], this.b = [s[1], f[1]], this.c = [s[2], f[2]], this.d = [s[3], f[3]], this.points = [t, e, r, i]
            }

            function extrema(t, e) {
                var r = t.points[0][e],
                    i = t.points[t.points.length - 1][e];
                if (r > i) {
                    var a = i;
                    i = r, r = a
                }
                for (var s = quadRoots(3 * t.a[e], 2 * t.b[e], t.c[e]), f = 0; f < s.length; f += 1)
                    if (s[f] > 0 && s[f] < 1) {
                        var o = t.point(s[f])[e];
                        o < r ? r = o : o > i && (i = o)
                    }
                return {
                    min: r,
                    max: i
                }
            }

            function intersectData(t, e, r) {
                var i = t.boundingBox();
                return {
                    cx: i.cx,
                    cy: i.cy,
                    width: i.width,
                    height: i.height,
                    bez: t,
                    t: (e + r) / 2,
                    t1: e,
                    t2: r
                }
            }

            function splitData(t) {
                var e = t.bez.split(.5);
                return [intersectData(e[0], t.t1, t.t), intersectData(e[1], t.t, t.t2)]
            }

            function boxIntersect(t, e) {
                return 2 * Math.abs(t.cx - e.cx) < t.width + e.width && 2 * Math.abs(t.cy - e.cy) < t.height + e.height
            }

            function intersectsImpl(t, e, r, i, a, s) {
                if (boxIntersect(t, e))
                    if (r >= s || t.width <= i && t.height <= i && e.width <= i && e.height <= i) a.push([t.t, e.t]);
                    else {
                        var f = splitData(t),
                            o = splitData(e);
                        intersectsImpl(f[0], o[0], r + 1, i, a, s), intersectsImpl(f[0], o[1], r + 1, i, a, s), intersectsImpl(f[1], o[0], r + 1, i, a, s), intersectsImpl(f[1], o[1], r + 1, i, a, s)
                    }
            }

            function crossProduct(t, e) {
                return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]]
            }

            function lineIntersection(t, e, r, i) {
                var a = [t[0], t[1], 1],
                    s = [e[0], e[1], 1],
                    f = [r[0], r[1], 1],
                    o = [i[0], i[1], 1],
                    g = crossProduct(crossProduct(a, s), crossProduct(f, o));
                return floatZero(g[2]) ? null : [g[0] / g[2], g[1] / g[2]]
            }

            function polarOffset(t, e, r) {
                return [t[0] + Math.cos(e) * r, t[1] - Math.sin(e) * r]
            }

            function pointDistance(t, e) {
                return Math.hypot(t[0] - e[0], t[1] - e[1])
            }

            function pointEqual(t, e) {
                return floatEqual(t[0], e[0]) && floatEqual(t[1], e[1])
            }

            function ZigZagModifier() {}

            function setPoint(t, e, r, i, a, s, f) {
                var o = r - Math.PI / 2,
                    g = r + Math.PI / 2,
                    c = e[0] + Math.cos(r) * i * a,
                    l = e[1] - Math.sin(r) * i * a;
                t.setTripleAt(c, l, c + Math.cos(o) * s, l - Math.sin(o) * s, c + Math.cos(g) * f, l - Math.sin(g) * f, t.length())
            }

            function getPerpendicularVector(t, e) {
                var r = [e[0] - t[0], e[1] - t[1]],
                    i = .5 * -Math.PI;
                return [Math.cos(i) * r[0] - Math.sin(i) * r[1], Math.sin(i) * r[0] + Math.cos(i) * r[1]]
            }

            function getProjectingAngle(t, e) {
                var r = e === 0 ? t.length() - 1 : e - 1,
                    i = (e + 1) % t.length(),
                    a = getPerpendicularVector(t.v[r], t.v[i]);
                return Math.atan2(0, 1) - Math.atan2(a[1], a[0])
            }

            function zigZagCorner(t, e, r, i, a, s, f) {
                var o = getProjectingAngle(e, r),
                    g = e.v[r % e._length],
                    c = e.v[r === 0 ? e._length - 1 : r - 1],
                    l = e.v[(r + 1) % e._length],
                    m = s === 2 ? Math.sqrt(Math.pow(g[0] - c[0], 2) + Math.pow(g[1] - c[1], 2)) : 0,
                    u = s === 2 ? Math.sqrt(Math.pow(g[0] - l[0], 2) + Math.pow(g[1] - l[1], 2)) : 0;
                setPoint(t, e.v[r % e._length], o, f, i, u / (2 * (a + 1)), m / (2 * (a + 1)))
            }

            function zigZagSegment(t, e, r, i, a, s) {
                for (var f = 0; f < i; f += 1) {
                    var o = (f + 1) / (i + 1),
                        g = a === 2 ? Math.sqrt(Math.pow(e.points[3][0] - e.points[0][0], 2) + Math.pow(e.points[3][1] - e.points[0][1], 2)) : 0,
                        c = e.normalAngle(o);
                    setPoint(t, e.point(o), c, s, r, g / (2 * (i + 1)), g / (2 * (i + 1))), s = -s
                }
                return s
            }

            function linearOffset(t, e, r) {
                var i = Math.atan2(e[0] - t[0], e[1] - t[1]);
                return [polarOffset(t, i, r), polarOffset(e, i, r)]
            }

            function offsetSegment(t, e) {
                var r, i, a, s, f, o, g;
                r = (g = linearOffset(t.points[0], t.points[1], e))[0], i = g[1], a = (g = linearOffset(t.points[1], t.points[2], e))[0], s = g[1], f = (g = linearOffset(t.points[2], t.points[3], e))[0], o = g[1];
                var c = lineIntersection(r, i, a, s);
                c === null && (c = i);
                var l = lineIntersection(f, o, a, s);
                return l === null && (l = f), new PolynomialBezier(r, c, l, o)
            }

            function joinLines(t, e, r, i, a) {
                var s = e.points[3],
                    f = r.points[0];
                if (i === 3 || pointEqual(s, f)) return s;
                if (i === 2) {
                    var o = -e.tangentAngle(1),
                        g = -r.tangentAngle(0) + Math.PI,
                        c = lineIntersection(s, polarOffset(s, o + Math.PI / 2, 100), f, polarOffset(f, o + Math.PI / 2, 100)),
                        l = c ? pointDistance(c, s) : pointDistance(s, f) / 2,
                        m = polarOffset(s, o, 2 * l * roundCorner);
                    return t.setXYAt(m[0], m[1], "o", t.length() - 1), m = polarOffset(f, g, 2 * l * roundCorner), t.setTripleAt(f[0], f[1], f[0], f[1], m[0], m[1], t.length()), f
                }
                var u = lineIntersection(pointEqual(s, e.points[2]) ? e.points[0] : e.points[2], s, f, pointEqual(f, r.points[1]) ? r.points[3] : r.points[1]);
                return u && pointDistance(u, s) < a ? (t.setTripleAt(u[0], u[1], u[0], u[1], u[0], u[1], t.length()), u) : s
            }

            function getIntersection(t, e) {
                var r = t.intersections(e);
                return r.length && floatEqual(r[0][0], 1) && r.shift(), r.length ? r[0] : null
            }

            function pruneSegmentIntersection(t, e) {
                var r = t.slice(),
                    i = e.slice(),
                    a = getIntersection(t[t.length - 1], e[0]);
                return a && (r[t.length - 1] = t[t.length - 1].split(a[0])[0], i[0] = e[0].split(a[1])[1]), t.length > 1 && e.length > 1 && (a = getIntersection(t[0], e[e.length - 1])) ? [
                    [t[0].split(a[0])[0]],
                    [e[e.length - 1].split(a[1])[1]]
                ] : [r, i]
            }

            function pruneIntersections(t) {
                for (var e, r = 1; r < t.length; r += 1) e = pruneSegmentIntersection(t[r - 1], t[r]), t[r - 1] = e[0], t[r] = e[1];
                return t.length > 1 && (e = pruneSegmentIntersection(t[t.length - 1], t[0]), t[t.length - 1] = e[0], t[0] = e[1]), t
            }

            function offsetSegmentSplit(t, e) {
                var r, i, a, s, f = t.inflectionPoints();
                if (f.length === 0) return [offsetSegment(t, e)];
                if (f.length === 1 || floatEqual(f[1], 1)) return r = (a = t.split(f[0]))[0], i = a[1], [offsetSegment(r, e), offsetSegment(i, e)];
                r = (a = t.split(f[0]))[0];
                var o = (f[1] - f[0]) / (1 - f[0]);
                return s = (a = a[1].split(o))[0], i = a[1], [offsetSegment(r, e), offsetSegment(s, e), offsetSegment(i, e)]
            }

            function OffsetPathModifier() {}

            function getFontProperties(t) {
                for (var e = t.fStyle ? t.fStyle.split(" ") : [], r = "normal", i = "normal", a = e.length, s = 0; s < a; s += 1) switch (e[s].toLowerCase()) {
                    case "italic":
                        i = "italic";
                        break;
                    case "bold":
                        r = "700";
                        break;
                    case "black":
                        r = "900";
                        break;
                    case "medium":
                        r = "500";
                        break;
                    case "regular":
                    case "normal":
                        r = "400";
                        break;
                    case "light":
                    case "thin":
                        r = "200"
                }
                return {
                    style: i,
                    weight: t.fWeight || r
                }
            }
            extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(t, e) {
                this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this), this.o = PropertyFactory.getProp(t, e.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this), this.so = PropertyFactory.getProp(t, e.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, .01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix
            }, RepeaterModifier.prototype.applyTransforms = function(t, e, r, i, a, s) {
                var f = s ? -1 : 1,
                    o = i.s.v[0] + (1 - i.s.v[0]) * (1 - a),
                    g = i.s.v[1] + (1 - i.s.v[1]) * (1 - a);
                t.translate(i.p.v[0] * f * a, i.p.v[1] * f * a, i.p.v[2]), e.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), e.rotate(-i.r.v * f * a), e.translate(i.a.v[0], i.a.v[1], i.a.v[2]), r.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), r.scale(s ? 1 / o : o, s ? 1 / g : g), r.translate(i.a.v[0], i.a.v[1], i.a.v[2])
            }, RepeaterModifier.prototype.init = function(t, e, r, i) {
                for (this.elem = t, this.arr = e, this.pos = r, this.elemsData = i, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[r]); r > 0;) r -= 1, this._elements.unshift(e[r]);
                this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
            }, RepeaterModifier.prototype.resetElements = function(t) {
                var e, r = t.length;
                for (e = 0; e < r; e += 1) t[e]._processed = !1, t[e].ty === "gr" && this.resetElements(t[e].it)
            }, RepeaterModifier.prototype.cloneElements = function(t) {
                var e = JSON.parse(JSON.stringify(t));
                return this.resetElements(e), e
            }, RepeaterModifier.prototype.changeGroupRender = function(t, e) {
                var r, i = t.length;
                for (r = 0; r < i; r += 1) t[r]._render = e, t[r].ty === "gr" && this.changeGroupRender(t[r].it, e)
            }, RepeaterModifier.prototype.processShapes = function(t) {
                var e, r, i, a, s, f = !1;
                if (this._mdf || t) {
                    var o, g = Math.ceil(this.c.v);
                    if (this._groups.length < g) {
                        for (; this._groups.length < g;) {
                            var c = {
                                it: this.cloneElements(this._elements),
                                ty: "gr"
                            };
                            c.it.push({
                                a: {
                                    a: 0,
                                    ix: 1,
                                    k: [0, 0]
                                },
                                nm: "Transform",
                                o: {
                                    a: 0,
                                    ix: 7,
                                    k: 100
                                },
                                p: {
                                    a: 0,
                                    ix: 2,
                                    k: [0, 0]
                                },
                                r: {
                                    a: 1,
                                    ix: 6,
                                    k: [{
                                        s: 0,
                                        e: 0,
                                        t: 0
                                    }, {
                                        s: 0,
                                        e: 0,
                                        t: 1
                                    }]
                                },
                                s: {
                                    a: 0,
                                    ix: 3,
                                    k: [100, 100]
                                },
                                sa: {
                                    a: 0,
                                    ix: 5,
                                    k: 0
                                },
                                sk: {
                                    a: 0,
                                    ix: 4,
                                    k: 0
                                },
                                ty: "tr"
                            }), this.arr.splice(0, 0, c), this._groups.splice(0, 0, c), this._currentCopies += 1
                        }
                        this.elem.reloadShapes(), f = !0
                    }
                    for (s = 0, i = 0; i <= this._groups.length - 1; i += 1) {
                        if (o = s < g, this._groups[i]._render = o, this.changeGroupRender(this._groups[i].it, o), !o) {
                            var l = this.elemsData[i].it,
                                m = l[l.length - 1];
                            m.transform.op.v !== 0 ? (m.transform.op._mdf = !0, m.transform.op.v = 0) : m.transform.op._mdf = !1
                        }
                        s += 1
                    }
                    this._currentCopies = g;
                    var u = this.o.v,
                        h = u % 1,
                        p = u > 0 ? Math.floor(u) : Math.ceil(u),
                        d = this.pMatrix.props,
                        n = this.rMatrix.props,
                        y = this.sMatrix.props;
                    this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
                    var v, b, x = 0;
                    if (u > 0) {
                        for (; x < p;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), x += 1;
                        h && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, h, !1), x += h)
                    } else if (u < 0) {
                        for (; x > p;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), x -= 1;
                        h && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -h, !0), x -= h)
                    }
                    for (i = this.data.m === 1 ? 0 : this._currentCopies - 1, a = this.data.m === 1 ? 1 : -1, s = this._currentCopies; s;) {
                        if (b = (r = (e = this.elemsData[i].it)[e.length - 1].transform.mProps.v.props).length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = this._currentCopies === 1 ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (i / (this._currentCopies - 1)), x !== 0) {
                            for ((i !== 0 && a === 1 || i !== this._currentCopies - 1 && a === -1) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(n[0], n[1], n[2], n[3], n[4], n[5], n[6], n[7], n[8], n[9], n[10], n[11], n[12], n[13], n[14], n[15]), this.matrix.transform(y[0], y[1], y[2], y[3], y[4], y[5], y[6], y[7], y[8], y[9], y[10], y[11], y[12], y[13], y[14], y[15]), this.matrix.transform(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8], d[9], d[10], d[11], d[12], d[13], d[14], d[15]), v = 0; v < b; v += 1) r[v] = this.matrix.props[v];
                            this.matrix.reset()
                        } else
                            for (this.matrix.reset(), v = 0; v < b; v += 1) r[v] = this.matrix.props[v];
                        x += 1, s -= 1, i += a
                    }
                } else
                    for (s = this._currentCopies, i = 0, a = 1; s;) r = (e = this.elemsData[i].it)[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, s -= 1, i += a;
                return f
            }, RepeaterModifier.prototype.addShape = function() {}, extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(t, e) {
                this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
            }, RoundCornersModifier.prototype.processPath = function(t, e) {
                var r, i = shapePool.newElement();
                i.c = t.c;
                var a, s, f, o, g, c, l, m, u, h, p, d, n = t._length,
                    y = 0;
                for (r = 0; r < n; r += 1) a = t.v[r], f = t.o[r], s = t.i[r], a[0] === f[0] && a[1] === f[1] && a[0] === s[0] && a[1] === s[1] ? r !== 0 && r !== n - 1 || t.c ? (o = r === 0 ? t.v[n - 1] : t.v[r - 1], c = (g = Math.sqrt(Math.pow(a[0] - o[0], 2) + Math.pow(a[1] - o[1], 2))) ? Math.min(g / 2, e) / g : 0, l = p = a[0] + (o[0] - a[0]) * c, m = d = a[1] - (a[1] - o[1]) * c, u = l - (l - a[0]) * roundCorner, h = m - (m - a[1]) * roundCorner, i.setTripleAt(l, m, u, h, p, d, y), y += 1, o = r === n - 1 ? t.v[0] : t.v[r + 1], c = (g = Math.sqrt(Math.pow(a[0] - o[0], 2) + Math.pow(a[1] - o[1], 2))) ? Math.min(g / 2, e) / g : 0, l = u = a[0] + (o[0] - a[0]) * c, m = h = a[1] + (o[1] - a[1]) * c, p = l - (l - a[0]) * roundCorner, d = m - (m - a[1]) * roundCorner, i.setTripleAt(l, m, u, h, p, d, y), y += 1) : (i.setTripleAt(a[0], a[1], f[0], f[1], s[0], s[1], y), y += 1) : (i.setTripleAt(t.v[r][0], t.v[r][1], t.o[r][0], t.o[r][1], t.i[r][0], t.i[r][1], y), y += 1);
                return i
            }, RoundCornersModifier.prototype.processShapes = function(t) {
                var e, r, i, a, s, f, o = this.shapes.length,
                    g = this.rd.v;
                if (g !== 0)
                    for (r = 0; r < o; r += 1) {
                        if (f = (s = this.shapes[r]).localShapeCollection, s.shape._mdf || this._mdf || t)
                            for (f.releaseShapes(), s.shape._mdf = !0, e = s.shape.paths.shapes, a = s.shape.paths._length, i = 0; i < a; i += 1) f.addShape(this.processPath(e[i], g));
                        s.shape.paths = s.localShapeCollection
                    }
                this.dynamicProperties.length || (this._mdf = !1)
            }, PolynomialBezier.prototype.point = function(t) {
                return [((this.a[0] * t + this.b[0]) * t + this.c[0]) * t + this.d[0], ((this.a[1] * t + this.b[1]) * t + this.c[1]) * t + this.d[1]]
            }, PolynomialBezier.prototype.derivative = function(t) {
                return [(3 * t * this.a[0] + 2 * this.b[0]) * t + this.c[0], (3 * t * this.a[1] + 2 * this.b[1]) * t + this.c[1]]
            }, PolynomialBezier.prototype.tangentAngle = function(t) {
                var e = this.derivative(t);
                return Math.atan2(e[1], e[0])
            }, PolynomialBezier.prototype.normalAngle = function(t) {
                var e = this.derivative(t);
                return Math.atan2(e[0], e[1])
            }, PolynomialBezier.prototype.inflectionPoints = function() {
                var t = this.a[1] * this.b[0] - this.a[0] * this.b[1];
                if (floatZero(t)) return [];
                var e = -.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / t,
                    r = e * e - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / t;
                if (r < 0) return [];
                var i = Math.sqrt(r);
                return floatZero(i) ? i > 0 && i < 1 ? [e] : [] : [e - i, e + i].filter(function(a) {
                    return a > 0 && a < 1
                })
            }, PolynomialBezier.prototype.split = function(t) {
                if (t <= 0) return [singlePoint(this.points[0]), this];
                if (t >= 1) return [this, singlePoint(this.points[this.points.length - 1])];
                var e = lerpPoint(this.points[0], this.points[1], t),
                    r = lerpPoint(this.points[1], this.points[2], t),
                    i = lerpPoint(this.points[2], this.points[3], t),
                    a = lerpPoint(e, r, t),
                    s = lerpPoint(r, i, t),
                    f = lerpPoint(a, s, t);
                return [new PolynomialBezier(this.points[0], e, a, f, !0), new PolynomialBezier(f, s, i, this.points[3], !0)]
            }, PolynomialBezier.prototype.bounds = function() {
                return {
                    x: extrema(this, 0),
                    y: extrema(this, 1)
                }
            }, PolynomialBezier.prototype.boundingBox = function() {
                var t = this.bounds();
                return {
                    left: t.x.min,
                    right: t.x.max,
                    top: t.y.min,
                    bottom: t.y.max,
                    width: t.x.max - t.x.min,
                    height: t.y.max - t.y.min,
                    cx: (t.x.max + t.x.min) / 2,
                    cy: (t.y.max + t.y.min) / 2
                }
            }, PolynomialBezier.prototype.intersections = function(t, e, r) {
                e === void 0 && (e = 2), r === void 0 && (r = 7);
                var i = [];
                return intersectsImpl(intersectData(this, 0, 1), intersectData(t, 0, 1), 0, e, i, r), i
            }, PolynomialBezier.shapeSegment = function(t, e) {
                var r = (e + 1) % t.length();
                return new PolynomialBezier(t.v[e], t.o[e], t.i[r], t.v[r], !0)
            }, PolynomialBezier.shapeSegmentInverted = function(t, e) {
                var r = (e + 1) % t.length();
                return new PolynomialBezier(t.v[r], t.i[r], t.o[e], t.v[e], !0)
            }, extendPrototype([ShapeModifier], ZigZagModifier), ZigZagModifier.prototype.initModifierProperties = function(t, e) {
                this.getValue = this.processKeys, this.amplitude = PropertyFactory.getProp(t, e.s, 0, null, this), this.frequency = PropertyFactory.getProp(t, e.r, 0, null, this), this.pointsType = PropertyFactory.getProp(t, e.pt, 0, null, this), this._isAnimated = this.amplitude.effectsSequence.length !== 0 || this.frequency.effectsSequence.length !== 0 || this.pointsType.effectsSequence.length !== 0
            }, ZigZagModifier.prototype.processPath = function(t, e, r, i) {
                var a = t._length,
                    s = shapePool.newElement();
                if (s.c = t.c, t.c || (a -= 1), a === 0) return s;
                var f = -1,
                    o = PolynomialBezier.shapeSegment(t, 0);
                zigZagCorner(s, t, 0, e, r, i, f);
                for (var g = 0; g < a; g += 1) f = zigZagSegment(s, o, e, r, i, -f), o = g !== a - 1 || t.c ? PolynomialBezier.shapeSegment(t, (g + 1) % a) : null, zigZagCorner(s, t, g + 1, e, r, i, f);
                return s
            }, ZigZagModifier.prototype.processShapes = function(t) {
                var e, r, i, a, s, f, o = this.shapes.length,
                    g = this.amplitude.v,
                    c = Math.max(0, Math.round(this.frequency.v)),
                    l = this.pointsType.v;
                if (g !== 0)
                    for (r = 0; r < o; r += 1) {
                        if (f = (s = this.shapes[r]).localShapeCollection, s.shape._mdf || this._mdf || t)
                            for (f.releaseShapes(), s.shape._mdf = !0, e = s.shape.paths.shapes, a = s.shape.paths._length, i = 0; i < a; i += 1) f.addShape(this.processPath(e[i], g, c, l));
                        s.shape.paths = s.localShapeCollection
                    }
                this.dynamicProperties.length || (this._mdf = !1)
            }, extendPrototype([ShapeModifier], OffsetPathModifier), OffsetPathModifier.prototype.initModifierProperties = function(t, e) {
                this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this.miterLimit = PropertyFactory.getProp(t, e.ml, 0, null, this), this.lineJoin = e.lj, this._isAnimated = this.amount.effectsSequence.length !== 0
            }, OffsetPathModifier.prototype.processPath = function(t, e, r, i) {
                var a = shapePool.newElement();
                a.c = t.c;
                var s, f, o, g = t.length();
                t.c || (g -= 1);
                var c = [];
                for (s = 0; s < g; s += 1) o = PolynomialBezier.shapeSegment(t, s), c.push(offsetSegmentSplit(o, e));
                if (!t.c)
                    for (s = g - 1; s >= 0; s -= 1) o = PolynomialBezier.shapeSegmentInverted(t, s), c.push(offsetSegmentSplit(o, e));
                c = pruneIntersections(c);
                var l = null,
                    m = null;
                for (s = 0; s < c.length; s += 1) {
                    var u = c[s];
                    for (m && (l = joinLines(a, m, u[0], r, i)), m = u[u.length - 1], f = 0; f < u.length; f += 1) o = u[f], l && pointEqual(o.points[0], l) ? a.setXYAt(o.points[1][0], o.points[1][1], "o", a.length() - 1) : a.setTripleAt(o.points[0][0], o.points[0][1], o.points[1][0], o.points[1][1], o.points[0][0], o.points[0][1], a.length()), a.setTripleAt(o.points[3][0], o.points[3][1], o.points[3][0], o.points[3][1], o.points[2][0], o.points[2][1], a.length()), l = o.points[3]
                }
                return c.length && joinLines(a, m, c[0][0], r, i), a
            }, OffsetPathModifier.prototype.processShapes = function(t) {
                var e, r, i, a, s, f, o = this.shapes.length,
                    g = this.amount.v,
                    c = this.miterLimit.v,
                    l = this.lineJoin;
                if (g !== 0)
                    for (r = 0; r < o; r += 1) {
                        if (f = (s = this.shapes[r]).localShapeCollection, s.shape._mdf || this._mdf || t)
                            for (f.releaseShapes(), s.shape._mdf = !0, e = s.shape.paths.shapes, a = s.shape.paths._length, i = 0; i < a; i += 1) f.addShape(this.processPath(e[i], g, l, c));
                        s.shape.paths = s.localShapeCollection
                    }
                this.dynamicProperties.length || (this._mdf = !1)
            };
            var FontManager = function() {
                var t = {
                        w: 0,
                        size: 0,
                        shapes: [],
                        data: {
                            shapes: []
                        }
                    },
                    e = [];
                e = e.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
                var r = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"],
                    i = [65039, 8205];

                function a(o, g) {
                    var c = createTag("span");
                    c.setAttribute("aria-hidden", !0), c.style.fontFamily = g;
                    var l = createTag("span");
                    l.innerText = "giItT1WQy@!-/#", c.style.position = "absolute", c.style.left = "-10000px", c.style.top = "-10000px", c.style.fontSize = "300px", c.style.fontVariant = "normal", c.style.fontStyle = "normal", c.style.fontWeight = "normal", c.style.letterSpacing = "0", c.appendChild(l), document.body.appendChild(c);
                    var m = l.offsetWidth;
                    return l.style.fontFamily = function(u) {
                        var h, p = u.split(","),
                            d = p.length,
                            n = [];
                        for (h = 0; h < d; h += 1) p[h] !== "sans-serif" && p[h] !== "monospace" && n.push(p[h]);
                        return n.join(",")
                    }(o) + ", " + g, {
                        node: l,
                        w: m,
                        parent: c
                    }
                }

                function s(o, g) {
                    var c, l = document.body && g ? "svg" : "canvas",
                        m = getFontProperties(o);
                    if (l === "svg") {
                        var u = createNS("text");
                        u.style.fontSize = "100px", u.setAttribute("font-family", o.fFamily), u.setAttribute("font-style", m.style), u.setAttribute("font-weight", m.weight), u.textContent = "1", o.fClass ? (u.style.fontFamily = "inherit", u.setAttribute("class", o.fClass)) : u.style.fontFamily = o.fFamily, g.appendChild(u), c = u
                    } else {
                        var h = new OffscreenCanvas(500, 500).getContext("2d");
                        h.font = m.style + " " + m.weight + " 100px " + o.fFamily, c = h
                    }
                    return {
                        measureText: function(p) {
                            return l === "svg" ? (c.textContent = p, c.getComputedTextLength()) : c.measureText(p).width
                        }
                    }
                }
                var f = function() {
                    this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
                };
                return f.isModifier = function(o, g) {
                    var c = o.toString(16) + g.toString(16);
                    return r.indexOf(c) !== -1
                }, f.isZeroWidthJoiner = function(o, g) {
                    return g ? o === i[0] && g === i[1] : o === i[1]
                }, f.isCombinedCharacter = function(o) {
                    return e.indexOf(o) !== -1
                }, f.prototype = {
                    addChars: function(o) {
                        if (o) {
                            var g;
                            this.chars || (this.chars = []);
                            var c, l, m = o.length,
                                u = this.chars.length;
                            for (g = 0; g < m; g += 1) {
                                for (c = 0, l = !1; c < u;) this.chars[c].style === o[g].style && this.chars[c].fFamily === o[g].fFamily && this.chars[c].ch === o[g].ch && (l = !0), c += 1;
                                l || (this.chars.push(o[g]), u += 1)
                            }
                        }
                    },
                    addFonts: function(o, g) {
                        if (o) {
                            if (this.chars) return this.isLoaded = !0, void(this.fonts = o.list);
                            if (!document.body) return this.isLoaded = !0, o.list.forEach(function(b) {
                                b.helper = s(b), b.cache = {}
                            }), void(this.fonts = o.list);
                            var c, l = o.list,
                                m = l.length,
                                u = m;
                            for (c = 0; c < m; c += 1) {
                                var h, p, d = !0;
                                if (l[c].loaded = !1, l[c].monoCase = a(l[c].fFamily, "monospace"), l[c].sansCase = a(l[c].fFamily, "sans-serif"), l[c].fPath) {
                                    if (l[c].fOrigin === "p" || l[c].origin === 3) {
                                        if ((h = document.querySelectorAll('style[f-forigin="p"][f-family="' + l[c].fFamily + '"], style[f-origin="3"][f-family="' + l[c].fFamily + '"]')).length > 0 && (d = !1), d) {
                                            var n = createTag("style");
                                            n.setAttribute("f-forigin", l[c].fOrigin), n.setAttribute("f-origin", l[c].origin), n.setAttribute("f-family", l[c].fFamily), n.type = "text/css", n.innerText = "@font-face {font-family: " + l[c].fFamily + "; font-style: normal; src: url('" + l[c].fPath + "');}", g.appendChild(n)
                                        }
                                    } else if (l[c].fOrigin === "g" || l[c].origin === 1) {
                                        for (h = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), p = 0; p < h.length; p += 1) h[p].href.indexOf(l[c].fPath) !== -1 && (d = !1);
                                        if (d) {
                                            var y = createTag("link");
                                            y.setAttribute("f-forigin", l[c].fOrigin), y.setAttribute("f-origin", l[c].origin), y.type = "text/css", y.rel = "stylesheet", y.href = l[c].fPath, document.body.appendChild(y)
                                        }
                                    } else if (l[c].fOrigin === "t" || l[c].origin === 2) {
                                        for (h = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), p = 0; p < h.length; p += 1) l[c].fPath === h[p].src && (d = !1);
                                        if (d) {
                                            var v = createTag("link");
                                            v.setAttribute("f-forigin", l[c].fOrigin), v.setAttribute("f-origin", l[c].origin), v.setAttribute("rel", "stylesheet"), v.setAttribute("href", l[c].fPath), g.appendChild(v)
                                        }
                                    }
                                } else l[c].loaded = !0, u -= 1;
                                l[c].helper = s(l[c], g), l[c].cache = {}, this.fonts.push(l[c])
                            }
                            u === 0 ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
                        } else this.isLoaded = !0
                    },
                    getCharData: function(o, g, c) {
                        for (var l = 0, m = this.chars.length; l < m;) {
                            if (this.chars[l].ch === o && this.chars[l].style === g && this.chars[l].fFamily === c) return this.chars[l];
                            l += 1
                        }
                        return (typeof o == "string" && o.charCodeAt(0) !== 13 || !o) && console && console.warn && !this._warned && (this._warned = !0), t
                    },
                    getFontByName: function(o) {
                        for (var g = 0, c = this.fonts.length; g < c;) {
                            if (this.fonts[g].fName === o) return this.fonts[g];
                            g += 1
                        }
                        return this.fonts[0]
                    },
                    measureText: function(o, g, c) {
                        var l = this.getFontByName(g),
                            m = o.charCodeAt(0);
                        if (!l.cache[m + 1]) {
                            var u = l.helper;
                            if (o === " ") {
                                var h = u.measureText("|" + o + "|"),
                                    p = u.measureText("||");
                                l.cache[m + 1] = (h - p) / 100
                            } else l.cache[m + 1] = u.measureText(o) / 100
                        }
                        return l.cache[m + 1] * c
                    },
                    checkLoadedFonts: function() {
                        var o, g, c, l = this.fonts.length,
                            m = l;
                        for (o = 0; o < l; o += 1) this.fonts[o].loaded ? m -= 1 : this.fonts[o].fOrigin === "n" || this.fonts[o].origin === 0 ? this.fonts[o].loaded = !0 : (g = this.fonts[o].monoCase.node, c = this.fonts[o].monoCase.w, g.offsetWidth !== c ? (m -= 1, this.fonts[o].loaded = !0) : (g = this.fonts[o].sansCase.node, c = this.fonts[o].sansCase.w, g.offsetWidth !== c && (m -= 1, this.fonts[o].loaded = !0)), this.fonts[o].loaded && (this.fonts[o].sansCase.parent.parentNode.removeChild(this.fonts[o].sansCase.parent), this.fonts[o].monoCase.parent.parentNode.removeChild(this.fonts[o].monoCase.parent)));
                        m !== 0 && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
                    },
                    setIsLoaded: function() {
                        this.isLoaded = !0
                    }
                }, f
            }();

            function RenderableElement() {}
            RenderableElement.prototype = {
                initRenderable: function() {
                    this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = []
                },
                addRenderableComponent: function(t) {
                    this.renderableComponents.indexOf(t) === -1 && this.renderableComponents.push(t)
                },
                removeRenderableComponent: function(t) {
                    this.renderableComponents.indexOf(t) !== -1 && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1)
                },
                prepareRenderableFrame: function(t) {
                    this.checkLayerLimits(t)
                },
                checkTransparency: function() {
                    this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
                },
                checkLayerLimits: function(t) {
                    this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? this.isInRange !== !0 && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : this.isInRange !== !1 && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
                },
                renderRenderable: function() {
                    var t, e = this.renderableComponents.length;
                    for (t = 0; t < e; t += 1) this.renderableComponents[t].renderFrame(this._isFirstFrame)
                },
                sourceRectAtTime: function() {
                    return {
                        top: 0,
                        left: 0,
                        width: 100,
                        height: 100
                    }
                },
                getLayerSize: function() {
                    return this.data.ty === 5 ? {
                        w: this.data.textData.width,
                        h: this.data.textData.height
                    } : {
                        w: this.data.width,
                        h: this.data.height
                    }
                }
            };
            var getBlendMode = (blendModeEnums = {
                    0: "source-over",
                    1: "multiply",
                    2: "screen",
                    3: "overlay",
                    4: "darken",
                    5: "lighten",
                    6: "color-dodge",
                    7: "color-burn",
                    8: "hard-light",
                    9: "soft-light",
                    10: "difference",
                    11: "exclusion",
                    12: "hue",
                    13: "saturation",
                    14: "color",
                    15: "luminosity"
                }, function(t) {
                    return blendModeEnums[t] || ""
                }),
                blendModeEnums;

            function SliderEffect(t, e, r) {
                this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
            }

            function AngleEffect(t, e, r) {
                this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
            }

            function ColorEffect(t, e, r) {
                this.p = PropertyFactory.getProp(e, t.v, 1, 0, r)
            }

            function PointEffect(t, e, r) {
                this.p = PropertyFactory.getProp(e, t.v, 1, 0, r)
            }

            function LayerIndexEffect(t, e, r) {
                this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
            }

            function MaskIndexEffect(t, e, r) {
                this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
            }

            function CheckboxEffect(t, e, r) {
                this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
            }

            function NoValueEffect() {
                this.p = {}
            }

            function EffectsManager(t, e) {
                var r, i = t.ef || [];
                this.effectElements = [];
                var a, s = i.length;
                for (r = 0; r < s; r += 1) a = new GroupEffect(i[r], e), this.effectElements.push(a)
            }

            function GroupEffect(t, e) {
                this.init(t, e)
            }

            function BaseElement() {}

            function FrameElement() {}

            function FootageElement(t, e, r) {
                this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.footageData = e.imageLoader.getAsset(this.assetData), this.initBaseData(t, e, r)
            }

            function AudioElement(t, e, r) {
                this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, r), this._isPlaying = !1, this._canPlay = !1;
                var i = this.globalData.getAssetsPath(this.assetData);
                this.audio = this.globalData.audioController.createAudio(i), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                    _placeholder: !0
                }, this.lv = PropertyFactory.getProp(this, t.au && t.au.lv ? t.au.lv : {
                    k: [100]
                }, 1, .01, this)
            }

            function BaseRenderer() {}

            function TransformElement() {}

            function MaskElement(t, e, r) {
                this.data = t, this.element = e, this.globalData = r, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
                var i, a, s = this.globalData.defs,
                    f = this.masksProperties ? this.masksProperties.length : 0;
                this.viewData = createSizedArray(f), this.solidPath = "";
                var o, g, c, l, m, u, h = this.masksProperties,
                    p = 0,
                    d = [],
                    n = createElementID(),
                    y = "clipPath",
                    v = "clip-path";
                for (i = 0; i < f; i += 1)
                    if ((h[i].mode !== "a" && h[i].mode !== "n" || h[i].inv || h[i].o.k !== 100 || h[i].o.x) && (y = "mask", v = "mask"), h[i].mode !== "s" && h[i].mode !== "i" || p !== 0 ? c = null : ((c = createNS("rect")).setAttribute("fill", "#ffffff"), c.setAttribute("width", this.element.comp.data.w || 0), c.setAttribute("height", this.element.comp.data.h || 0), d.push(c)), a = createNS("path"), h[i].mode === "n") this.viewData[i] = {
                        op: PropertyFactory.getProp(this.element, h[i].o, 0, .01, this.element),
                        prop: ShapePropertyFactory.getShapeProp(this.element, h[i], 3),
                        elem: a,
                        lastPath: ""
                    }, s.appendChild(a);
                    else {
                        var b;
                        if (p += 1, a.setAttribute("fill", h[i].mode === "s" ? "#000000" : "#ffffff"), a.setAttribute("clip-rule", "nonzero"), h[i].x.k !== 0 ? (y = "mask", v = "mask", u = PropertyFactory.getProp(this.element, h[i].x, 0, null, this.element), b = createElementID(), (l = createNS("filter")).setAttribute("id", b), (m = createNS("feMorphology")).setAttribute("operator", "erode"), m.setAttribute("in", "SourceGraphic"), m.setAttribute("radius", "0"), l.appendChild(m), s.appendChild(l), a.setAttribute("stroke", h[i].mode === "s" ? "#000000" : "#ffffff")) : (m = null, u = null), this.storedData[i] = {
                                elem: a,
                                x: u,
                                expan: m,
                                lastPath: "",
                                lastOperator: "",
                                filterId: b,
                                lastRadius: 0
                            }, h[i].mode === "i") {
                            g = d.length;
                            var x = createNS("g");
                            for (o = 0; o < g; o += 1) x.appendChild(d[o]);
                            var S = createNS("mask");
                            S.setAttribute("mask-type", "alpha"), S.setAttribute("id", n + "_" + p), S.appendChild(a), s.appendChild(S), x.setAttribute("mask", "url(" + getLocationHref() + "#" + n + "_" + p + ")"), d.length = 0, d.push(x)
                        } else d.push(a);
                        h[i].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[i] = {
                            elem: a,
                            lastPath: "",
                            op: PropertyFactory.getProp(this.element, h[i].o, 0, .01, this.element),
                            prop: ShapePropertyFactory.getShapeProp(this.element, h[i], 3),
                            invRect: c
                        }, this.viewData[i].prop.k || this.drawPath(h[i], this.viewData[i].prop.v, this.viewData[i])
                    }
                for (this.maskElement = createNS(y), f = d.length, i = 0; i < f; i += 1) this.maskElement.appendChild(d[i]);
                p > 0 && (this.maskElement.setAttribute("id", n), this.element.maskedElement.setAttribute(v, "url(" + getLocationHref() + "#" + n + ")"), s.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
            }
            extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(t, e) {
                var r;
                this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
                var i, a = this.data.ef.length,
                    s = this.data.ef;
                for (r = 0; r < a; r += 1) {
                    switch (i = null, s[r].ty) {
                        case 0:
                            i = new SliderEffect(s[r], e, this);
                            break;
                        case 1:
                            i = new AngleEffect(s[r], e, this);
                            break;
                        case 2:
                            i = new ColorEffect(s[r], e, this);
                            break;
                        case 3:
                            i = new PointEffect(s[r], e, this);
                            break;
                        case 4:
                        case 7:
                            i = new CheckboxEffect(s[r], e, this);
                            break;
                        case 10:
                            i = new LayerIndexEffect(s[r], e, this);
                            break;
                        case 11:
                            i = new MaskIndexEffect(s[r], e, this);
                            break;
                        case 5:
                            i = new EffectsManager(s[r], e);
                            break;
                        default:
                            i = new NoValueEffect(s[r])
                    }
                    i && this.effectElements.push(i)
                }
            }, BaseElement.prototype = {
                checkMasks: function() {
                    if (!this.data.hasMask) return !1;
                    for (var t = 0, e = this.data.masksProperties.length; t < e;) {
                        if (this.data.masksProperties[t].mode !== "n" && this.data.masksProperties[t].cl !== !1) return !0;
                        t += 1
                    }
                    return !1
                },
                initExpressions: function() {
                    var t = getExpressionInterfaces();
                    if (t) {
                        var e = t("layer"),
                            r = t("effects"),
                            i = t("shape"),
                            a = t("text"),
                            s = t("comp");
                        this.layerInterface = e(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
                        var f = r.createEffectsInterface(this, this.layerInterface);
                        this.layerInterface.registerEffectsInterface(f), this.data.ty === 0 || this.data.xt ? this.compInterface = s(this) : this.data.ty === 4 ? (this.layerInterface.shapeInterface = i(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : this.data.ty === 5 && (this.layerInterface.textInterface = a(this), this.layerInterface.text = this.layerInterface.textInterface)
                    }
                },
                setBlendMode: function() {
                    var t = getBlendMode(this.data.bm);
                    (this.baseElement || this.layerElement).style["mix-blend-mode"] = t
                },
                initBaseData: function(t, e, r) {
                    this.globalData = e, this.comp = r, this.data = t, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties)
                },
                getType: function() {
                    return this.type
                },
                sourceRectAtTime: function() {}
            }, FrameElement.prototype = {
                initFrame: function() {
                    this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
                },
                prepareProperties: function(t, e) {
                    var r, i = this.dynamicProperties.length;
                    for (r = 0; r < i; r += 1)(e || this._isParent && this.dynamicProperties[r].propType === "transform") && (this.dynamicProperties[r].getValue(), this.dynamicProperties[r]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
                },
                addDynamicProperty: function(t) {
                    this.dynamicProperties.indexOf(t) === -1 && this.dynamicProperties.push(t)
                }
            }, FootageElement.prototype.prepareFrame = function() {}, extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement), FootageElement.prototype.getBaseElement = function() {
                return null
            }, FootageElement.prototype.renderFrame = function() {}, FootageElement.prototype.destroy = function() {}, FootageElement.prototype.initExpressions = function() {
                var t = getExpressionInterfaces();
                if (t) {
                    var e = t("footage");
                    this.layerInterface = e(this)
                }
            }, FootageElement.prototype.getFootageData = function() {
                return this.footageData
            }, AudioElement.prototype.prepareFrame = function(t) {
                if (this.prepareRenderableFrame(t, !0), this.prepareProperties(t, !0), this.tm._placeholder) this._currentTime = t / this.data.sr;
                else {
                    var e = this.tm.v;
                    this._currentTime = e
                }
                this._volume = this.lv.v[0];
                var r = this._volume * this._volumeMultiplier;
                this._previousVolume !== r && (this._previousVolume = r, this.audio.volume(r))
            }, extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement), AudioElement.prototype.renderFrame = function() {
                this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0))
            }, AudioElement.prototype.show = function() {}, AudioElement.prototype.hide = function() {
                this.audio.pause(), this._isPlaying = !1
            }, AudioElement.prototype.pause = function() {
                this.audio.pause(), this._isPlaying = !1, this._canPlay = !1
            }, AudioElement.prototype.resume = function() {
                this._canPlay = !0
            }, AudioElement.prototype.setRate = function(t) {
                this.audio.rate(t)
            }, AudioElement.prototype.volume = function(t) {
                this._volumeMultiplier = t, this._previousVolume = t * this._volume, this.audio.volume(this._previousVolume)
            }, AudioElement.prototype.getBaseElement = function() {
                return null
            }, AudioElement.prototype.destroy = function() {}, AudioElement.prototype.sourceRectAtTime = function() {}, AudioElement.prototype.initExpressions = function() {}, BaseRenderer.prototype.checkLayers = function(t) {
                var e, r, i = this.layers.length;
                for (this.completeLayers = !0, e = i - 1; e >= 0; e -= 1) this.elements[e] || (r = this.layers[e]).ip - r.st <= t - this.layers[e].st && r.op - r.st > t - this.layers[e].st && this.buildItem(e), this.completeLayers = !!this.elements[e] && this.completeLayers;
                this.checkPendingElements()
            }, BaseRenderer.prototype.createItem = function(t) {
                switch (t.ty) {
                    case 2:
                        return this.createImage(t);
                    case 0:
                        return this.createComp(t);
                    case 1:
                        return this.createSolid(t);
                    case 3:
                        return this.createNull(t);
                    case 4:
                        return this.createShape(t);
                    case 5:
                        return this.createText(t);
                    case 6:
                        return this.createAudio(t);
                    case 13:
                        return this.createCamera(t);
                    case 15:
                        return this.createFootage(t);
                    default:
                        return this.createNull(t)
                }
            }, BaseRenderer.prototype.createCamera = function() {
                throw new Error("You're using a 3d camera. Try the html renderer.")
            }, BaseRenderer.prototype.createAudio = function(t) {
                return new AudioElement(t, this.globalData, this)
            }, BaseRenderer.prototype.createFootage = function(t) {
                return new FootageElement(t, this.globalData, this)
            }, BaseRenderer.prototype.buildAllItems = function() {
                var t, e = this.layers.length;
                for (t = 0; t < e; t += 1) this.buildItem(t);
                this.checkPendingElements()
            }, BaseRenderer.prototype.includeLayers = function(t) {
                var e;
                this.completeLayers = !1;
                var r, i = t.length,
                    a = this.layers.length;
                for (e = 0; e < i; e += 1)
                    for (r = 0; r < a;) {
                        if (this.layers[r].id === t[e].id) {
                            this.layers[r] = t[e];
                            break
                        }
                        r += 1
                    }
            }, BaseRenderer.prototype.setProjectInterface = function(t) {
                this.globalData.projectInterface = t
            }, BaseRenderer.prototype.initItems = function() {
                this.globalData.progressiveLoad || this.buildAllItems()
            }, BaseRenderer.prototype.buildElementParenting = function(t, e, r) {
                for (var i = this.elements, a = this.layers, s = 0, f = a.length; s < f;) a[s].ind == e && (i[s] && i[s] !== !0 ? (r.push(i[s]), i[s].setAsParent(), a[s].parent !== void 0 ? this.buildElementParenting(t, a[s].parent, r) : t.setHierarchy(r)) : (this.buildItem(s), this.addPendingElement(t))), s += 1
            }, BaseRenderer.prototype.addPendingElement = function(t) {
                this.pendingElements.push(t)
            }, BaseRenderer.prototype.searchExtraCompositions = function(t) {
                var e, r = t.length;
                for (e = 0; e < r; e += 1)
                    if (t[e].xt) {
                        var i = this.createComp(t[e]);
                        i.initExpressions(), this.globalData.projectInterface.registerComposition(i)
                    }
            }, BaseRenderer.prototype.getElementById = function(t) {
                var e, r = this.elements.length;
                for (e = 0; e < r; e += 1)
                    if (this.elements[e].data.ind === t) return this.elements[e];
                return null
            }, BaseRenderer.prototype.getElementByPath = function(t) {
                var e, r = t.shift();
                if (typeof r == "number") e = this.elements[r];
                else {
                    var i, a = this.elements.length;
                    for (i = 0; i < a; i += 1)
                        if (this.elements[i].data.nm === r) {
                            e = this.elements[i];
                            break
                        }
                }
                return t.length === 0 ? e : e.getElementByPath(t)
            }, BaseRenderer.prototype.setupGlobalData = function(t, e) {
                this.globalData.fontManager = new FontManager, this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = {
                    w: t.w,
                    h: t.h
                }
            }, TransformElement.prototype = {
                initTransform: function() {
                    this.finalTransform = {
                        mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
                            o: 0
                        },
                        _matMdf: !1,
                        _opMdf: !1,
                        mat: new Matrix
                    }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty
                },
                renderTransform: function() {
                    if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
                        var t, e = this.finalTransform.mat,
                            r = 0,
                            i = this.hierarchy.length;
                        if (!this.finalTransform._matMdf)
                            for (; r < i;) {
                                if (this.hierarchy[r].finalTransform.mProp._mdf) {
                                    this.finalTransform._matMdf = !0;
                                    break
                                }
                                r += 1
                            }
                        if (this.finalTransform._matMdf)
                            for (t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), r = 0; r < i; r += 1) t = this.hierarchy[r].finalTransform.mProp.v.props, e.transform(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15])
                    }
                },
                globalToLocal: function(t) {
                    var e = [];
                    e.push(this.finalTransform);
                    for (var r, i = !0, a = this.comp; i;) a.finalTransform ? (a.data.hasMask && e.splice(0, 0, a.finalTransform), a = a.comp) : i = !1;
                    var s, f = e.length;
                    for (r = 0; r < f; r += 1) s = e[r].mat.applyToPointArray(0, 0, 0), t = [t[0] - s[0], t[1] - s[1], 0];
                    return t
                },
                mHelper: new Matrix
            }, MaskElement.prototype.getMaskProperty = function(t) {
                return this.viewData[t].prop
            }, MaskElement.prototype.renderFrame = function(t) {
                var e, r = this.element.finalTransform.mat,
                    i = this.masksProperties.length;
                for (e = 0; e < i; e += 1)
                    if ((this.viewData[e].prop._mdf || t) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]), (this.viewData[e].op._mdf || t) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v), this.masksProperties[e].mode !== "n" && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[e].invRect.setAttribute("transform", r.getInverseMatrix().to2dCSS()), this.storedData[e].x && (this.storedData[e].x._mdf || t))) {
                        var a = this.storedData[e].expan;
                        this.storedData[e].x.v < 0 ? (this.storedData[e].lastOperator !== "erode" && (this.storedData[e].lastOperator = "erode", this.storedData[e].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[e].filterId + ")")), a.setAttribute("radius", -this.storedData[e].x.v)) : (this.storedData[e].lastOperator !== "dilate" && (this.storedData[e].lastOperator = "dilate", this.storedData[e].elem.setAttribute("filter", null)), this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v))
                    }
            }, MaskElement.prototype.getMaskelement = function() {
                return this.maskElement
            }, MaskElement.prototype.createLayerSolidPath = function() {
                var t = "M0,0 ";
                return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, t += " h-" + this.globalData.compSize.w, t += " v-" + this.globalData.compSize.h + " "
            }, MaskElement.prototype.drawPath = function(t, e, r) {
                var i, a, s = " M" + e.v[0][0] + "," + e.v[0][1];
                for (a = e._length, i = 1; i < a; i += 1) s += " C" + e.o[i - 1][0] + "," + e.o[i - 1][1] + " " + e.i[i][0] + "," + e.i[i][1] + " " + e.v[i][0] + "," + e.v[i][1];
                if (e.c && a > 1 && (s += " C" + e.o[i - 1][0] + "," + e.o[i - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), r.lastPath !== s) {
                    var f = "";
                    r.elem && (e.c && (f = t.inv ? this.solidPath + s : s), r.elem.setAttribute("d", f)), r.lastPath = s
                }
            }, MaskElement.prototype.destroy = function() {
                this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
            };
            var filtersFactory = function() {
                    var t = {};
                    return t.createFilter = function(e, r) {
                        var i = createNS("filter");
                        return i.setAttribute("id", e), r !== !0 && (i.setAttribute("filterUnits", "objectBoundingBox"), i.setAttribute("x", "0%"), i.setAttribute("y", "0%"), i.setAttribute("width", "100%"), i.setAttribute("height", "100%")), i
                    }, t.createAlphaToLuminanceFilter = function() {
                        var e = createNS("feColorMatrix");
                        return e.setAttribute("type", "matrix"), e.setAttribute("color-interpolation-filters", "sRGB"), e.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), e
                    }, t
                }(),
                featureSupport = function() {
                    var t = {
                        maskType: !0,
                        svgLumaHidden: !0,
                        offscreenCanvas: typeof OffscreenCanvas < "u"
                    };
                    return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = !1), /firefox/i.test(navigator.userAgent) && (t.svgLumaHidden = !1), t
                }(),
                registeredEffects = {},
                idPrefix = "filter_result_";

            function SVGEffects(t) {
                var e, r, i = "SourceGraphic",
                    a = t.data.ef ? t.data.ef.length : 0,
                    s = createElementID(),
                    f = filtersFactory.createFilter(s, !0),
                    o = 0;
                for (this.filters = [], e = 0; e < a; e += 1) {
                    r = null;
                    var g = t.data.ef[e].ty;
                    registeredEffects[g] && (r = new registeredEffects[g].effect(f, t.effectsManager.effectElements[e], t, idPrefix + o, i), i = idPrefix + o, registeredEffects[g].countsAsEffect && (o += 1)), r && this.filters.push(r)
                }
                o && (t.globalData.defs.appendChild(f), t.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + s + ")")), this.filters.length && t.addRenderableComponent(this)
            }

            function registerEffect(t, e, r) {
                registeredEffects[t] = {
                    effect: e,
                    countsAsEffect: r
                }
            }

            function SVGBaseElement() {}

            function HierarchyElement() {}

            function RenderableDOMElement() {}

            function IImageElement(t, e, r) {
                this.assetData = e.getAssetData(t.refId), this.initElement(t, e, r), this.sourceRect = {
                    top: 0,
                    left: 0,
                    width: this.assetData.w,
                    height: this.assetData.h
                }
            }

            function ProcessedElement(t, e) {
                this.elem = t, this.pos = e
            }

            function IShapeElement() {}
            SVGEffects.prototype.renderFrame = function(t) {
                var e, r = this.filters.length;
                for (e = 0; e < r; e += 1) this.filters[e].renderFrame(t)
            }, SVGBaseElement.prototype = {
                initRendererElement: function() {
                    this.layerElement = createNS("g")
                },
                createContainerElements: function() {
                    this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
                    var t = null;
                    if (this.data.td) {
                        this.matteMasks = {};
                        var e = createNS("g");
                        e.setAttribute("id", this.layerId), e.appendChild(this.layerElement), t = e, this.globalData.defs.appendChild(e)
                    } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), t = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
                    if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), this.data.ty === 0 && !this.data.hd) {
                        var r = createNS("clipPath"),
                            i = createNS("path");
                        i.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                        var a = createElementID();
                        if (r.setAttribute("id", a), r.appendChild(i), this.globalData.defs.appendChild(r), this.checkMasks()) {
                            var s = createNS("g");
                            s.setAttribute("clip-path", "url(" + getLocationHref() + "#" + a + ")"), s.appendChild(this.layerElement), this.transformedElement = s, t ? t.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
                        } else this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + a + ")")
                    }
                    this.data.bm !== 0 && this.setBlendMode()
                },
                renderElement: function() {
                    this.finalTransform._matMdf && this.transformedElement.setAttribute("transform", this.finalTransform.mat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.mProp.o.v)
                },
                destroyBaseElement: function() {
                    this.layerElement = null, this.matteElement = null, this.maskManager.destroy()
                },
                getBaseElement: function() {
                    return this.data.hd ? null : this.baseElement
                },
                createRenderableComponents: function() {
                    this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this)
                },
                getMatte: function(t) {
                    if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[t]) {
                        var e, r, i, a, s = this.layerId + "_" + t;
                        if (t === 1 || t === 3) {
                            var f = createNS("mask");
                            f.setAttribute("id", s), f.setAttribute("mask-type", t === 3 ? "luminance" : "alpha"), (i = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), f.appendChild(i), this.globalData.defs.appendChild(f), featureSupport.maskType || t !== 1 || (f.setAttribute("mask-type", "luminance"), e = createElementID(), r = filtersFactory.createFilter(e), this.globalData.defs.appendChild(r), r.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (a = createNS("g")).appendChild(i), f.appendChild(a), a.setAttribute("filter", "url(" + getLocationHref() + "#" + e + ")"))
                        } else if (t === 2) {
                            var o = createNS("mask");
                            o.setAttribute("id", s), o.setAttribute("mask-type", "alpha");
                            var g = createNS("g");
                            o.appendChild(g), e = createElementID(), r = filtersFactory.createFilter(e);
                            var c = createNS("feComponentTransfer");
                            c.setAttribute("in", "SourceGraphic"), r.appendChild(c);
                            var l = createNS("feFuncA");
                            l.setAttribute("type", "table"), l.setAttribute("tableValues", "1.0 0.0"), c.appendChild(l), this.globalData.defs.appendChild(r);
                            var m = createNS("rect");
                            m.setAttribute("width", this.comp.data.w), m.setAttribute("height", this.comp.data.h), m.setAttribute("x", "0"), m.setAttribute("y", "0"), m.setAttribute("fill", "#ffffff"), m.setAttribute("opacity", "0"), g.setAttribute("filter", "url(" + getLocationHref() + "#" + e + ")"), g.appendChild(m), (i = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), g.appendChild(i), featureSupport.maskType || (o.setAttribute("mask-type", "luminance"), r.appendChild(filtersFactory.createAlphaToLuminanceFilter()), a = createNS("g"), g.appendChild(m), a.appendChild(this.layerElement), g.appendChild(a)), this.globalData.defs.appendChild(o)
                        }
                        this.matteMasks[t] = s
                    }
                    return this.matteMasks[t]
                },
                setMatte: function(t) {
                    this.matteElement && this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + t + ")")
                }
            }, HierarchyElement.prototype = {
                initHierarchy: function() {
                    this.hierarchy = [], this._isParent = !1, this.checkParenting()
                },
                setHierarchy: function(t) {
                    this.hierarchy = t
                },
                setAsParent: function() {
                    this._isParent = !0
                },
                checkParenting: function() {
                    this.data.parent !== void 0 && this.comp.buildElementParenting(this, this.data.parent, [])
                }
            }, extendPrototype([RenderableElement, createProxyFunction({
                initElement: function(t, e, r) {
                    this.initFrame(), this.initBaseData(t, e, r), this.initTransform(t, e, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
                },
                hide: function() {
                    this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0)
                },
                show: function() {
                    this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0)
                },
                renderFrame: function() {
                    this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
                },
                renderInnerContent: function() {},
                prepareFrame: function(t) {
                    this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.checkTransparency()
                },
                destroy: function() {
                    this.innerElem = null, this.destroyBaseElement()
                }
            })], RenderableDOMElement), extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function() {
                var t = this.globalData.getAssetsPath(this.assetData);
                this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem)
            }, IImageElement.prototype.sourceRectAtTime = function() {
                return this.sourceRect
            }, IShapeElement.prototype = {
                addShapeToModifiers: function(t) {
                    var e, r = this.shapeModifiers.length;
                    for (e = 0; e < r; e += 1) this.shapeModifiers[e].addShape(t)
                },
                isShapeInAnimatedModifiers: function(t) {
                    for (var e = this.shapeModifiers.length; 0 < e;)
                        if (this.shapeModifiers[0].isAnimatedWithShape(t)) return !0;
                    return !1
                },
                renderModifiers: function() {
                    if (this.shapeModifiers.length) {
                        var t, e = this.shapes.length;
                        for (t = 0; t < e; t += 1) this.shapes[t].sh.reset();
                        for (t = (e = this.shapeModifiers.length) - 1; t >= 0 && !this.shapeModifiers[t].processShapes(this._isFirstFrame); t -= 1);
                    }
                },
                searchProcessedElement: function(t) {
                    for (var e = this.processedElements, r = 0, i = e.length; r < i;) {
                        if (e[r].elem === t) return e[r].pos;
                        r += 1
                    }
                    return 0
                },
                addProcessedElement: function(t, e) {
                    for (var r = this.processedElements, i = r.length; i;)
                        if (r[i -= 1].elem === t) return void(r[i].pos = e);
                    r.push(new ProcessedElement(t, e))
                },
                prepareFrame: function(t) {
                    this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange)
                }
            };
            var lineCapEnum = {
                    1: "butt",
                    2: "round",
                    3: "square"
                },
                lineJoinEnum = {
                    1: "miter",
                    2: "round",
                    3: "bevel"
                };

            function SVGShapeData(t, e, r) {
                this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = r, this.lvl = e, this._isAnimated = !!r.k;
                for (var i = 0, a = t.length; i < a;) {
                    if (t[i].mProps.dynamicProperties.length) {
                        this._isAnimated = !0;
                        break
                    }
                    i += 1
                }
            }

            function SVGStyleData(t, e) {
                this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = !1, this.closed = t.hd === !0, this.pElem = createNS("path"), this.msElem = null
            }

            function DashProperty(t, e, r, i) {
                var a;
                this.elem = t, this.frameId = -1, this.dataProps = createSizedArray(e.length), this.renderer = r, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(i);
                var s, f = e.length || 0;
                for (a = 0; a < f; a += 1) s = PropertyFactory.getProp(t, e[a].v, 0, 0, this), this.k = s.k || this.k, this.dataProps[a] = {
                    n: e[a].n,
                    p: s
                };
                this.k || this.getValue(!0), this._isAnimated = this.k
            }

            function SVGStrokeStyleData(t, e, r) {
                this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = r, this._isAnimated = !!this._isAnimated
            }

            function SVGFillStyleData(t, e, r) {
                this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = r
            }

            function SVGNoStyleData(t, e, r) {
                this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.style = r
            }

            function GradientProperty(t, e, r) {
                this.data = e, this.c = createTypedArray("uint8c", 4 * e.p);
                var i = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
                this.o = createTypedArray("float32", i), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = i, this.initDynamicPropertyContainer(r), this.prop = PropertyFactory.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
            }

            function SVGGradientFillStyleData(t, e, r) {
                this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, r)
            }

            function SVGGradientStrokeStyleData(t, e, r) {
                this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.initGradientData(t, e, r), this._isAnimated = !!this._isAnimated
            }

            function ShapeGroupData() {
                this.it = [], this.prevViewData = [], this.gr = createNS("g")
            }

            function SVGTransformData(t, e, r) {
                this.transform = {
                    mProps: t,
                    op: e,
                    container: r
                }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
            }
            SVGShapeData.prototype.setAsAnimated = function() {
                this._isAnimated = !0
            }, SVGStyleData.prototype.reset = function() {
                this.d = "", this._mdf = !1
            }, DashProperty.prototype.getValue = function(t) {
                if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
                    var e = 0,
                        r = this.dataProps.length;
                    for (this.renderer === "svg" && (this.dashStr = ""), e = 0; e < r; e += 1) this.dataProps[e].n !== "o" ? this.renderer === "svg" ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v
                }
            }, extendPrototype([DynamicPropertyContainer], DashProperty), extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), extendPrototype([DynamicPropertyContainer], SVGNoStyleData), GradientProperty.prototype.comparePoints = function(t, e) {
                for (var r = 0, i = this.o.length / 2; r < i;) {
                    if (Math.abs(t[4 * r] - t[4 * e + 2 * r]) > .01) return !1;
                    r += 1
                }
                return !0
            }, GradientProperty.prototype.checkCollapsable = function() {
                if (this.o.length / 2 != this.c.length / 4) return !1;
                if (this.data.k.k[0].s)
                    for (var t = 0, e = this.data.k.k.length; t < e;) {
                        if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1;
                        t += 1
                    } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
                return !0
            }, GradientProperty.prototype.getValue = function(t) {
                if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {
                    var e, r, i, a = 4 * this.data.p;
                    for (e = 0; e < a; e += 1) r = e % 4 == 0 ? 100 : 255, i = Math.round(this.prop.v[e] * r), this.c[e] !== i && (this.c[e] = i, this._cmdf = !t);
                    if (this.o.length)
                        for (a = this.prop.v.length, e = 4 * this.data.p; e < a; e += 1) r = e % 2 == 0 ? 100 : 1, i = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e], this.o[e - 4 * this.data.p] !== i && (this.o[e - 4 * this.data.p] = i, this._omdf = !t);
                    this._mdf = !t
                }
            }, extendPrototype([DynamicPropertyContainer], GradientProperty), SVGGradientFillStyleData.prototype.initGradientData = function(t, e, r) {
                this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.s = PropertyFactory.getProp(t, e.s, 1, null, this), this.e = PropertyFactory.getProp(t, e.e, 1, null, this), this.h = PropertyFactory.getProp(t, e.h || {
                    k: 0
                }, 0, .01, this), this.a = PropertyFactory.getProp(t, e.a || {
                    k: 0
                }, 0, degToRads, this), this.g = new GradientProperty(t, e.g, this), this.style = r, this.stops = [], this.setGradientData(r.pElem, e), this.setGradientOpacity(e, r), this._isAnimated = !!this._isAnimated
            }, SVGGradientFillStyleData.prototype.setGradientData = function(t, e) {
                var r = createElementID(),
                    i = createNS(e.t === 1 ? "linearGradient" : "radialGradient");
                i.setAttribute("id", r), i.setAttribute("spreadMethod", "pad"), i.setAttribute("gradientUnits", "userSpaceOnUse");
                var a, s, f, o = [];
                for (f = 4 * e.g.p, s = 0; s < f; s += 4) a = createNS("stop"), i.appendChild(a), o.push(a);
                t.setAttribute(e.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + r + ")"), this.gf = i, this.cst = o
            }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(t, e) {
                if (this.g._hasOpacity && !this.g._collapsable) {
                    var r, i, a, s = createNS("mask"),
                        f = createNS("path");
                    s.appendChild(f);
                    var o = createElementID(),
                        g = createElementID();
                    s.setAttribute("id", g);
                    var c = createNS(t.t === 1 ? "linearGradient" : "radialGradient");
                    c.setAttribute("id", o), c.setAttribute("spreadMethod", "pad"), c.setAttribute("gradientUnits", "userSpaceOnUse"), a = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
                    var l = this.stops;
                    for (i = 4 * t.g.p; i < a; i += 2)(r = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), c.appendChild(r), l.push(r);
                    f.setAttribute(t.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + o + ")"), t.ty === "gs" && (f.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), f.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), t.lj === 1 && f.setAttribute("stroke-miterlimit", t.ml)), this.of = c, this.ms = s, this.ost = l, this.maskId = g, e.msElem = f
                }
            }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
            var buildShapeString = function(t, e, r, i) {
                    if (e === 0) return "";
                    var a, s = t.o,
                        f = t.i,
                        o = t.v,
                        g = " M" + i.applyToPointStringified(o[0][0], o[0][1]);
                    for (a = 1; a < e; a += 1) g += " C" + i.applyToPointStringified(s[a - 1][0], s[a - 1][1]) + " " + i.applyToPointStringified(f[a][0], f[a][1]) + " " + i.applyToPointStringified(o[a][0], o[a][1]);
                    return r && e && (g += " C" + i.applyToPointStringified(s[a - 1][0], s[a - 1][1]) + " " + i.applyToPointStringified(f[0][0], f[0][1]) + " " + i.applyToPointStringified(o[0][0], o[0][1]), g += "z"), g
                },
                SVGElementsRenderer = function() {
                    var t = new Matrix,
                        e = new Matrix;

                    function r(c, l, m) {
                        (m || l.transform.op._mdf) && l.transform.container.setAttribute("opacity", l.transform.op.v), (m || l.transform.mProps._mdf) && l.transform.container.setAttribute("transform", l.transform.mProps.v.to2dCSS())
                    }

                    function i() {}

                    function a(c, l, m) {
                        var u, h, p, d, n, y, v, b, x, S, k, _ = l.styles.length,
                            A = l.lvl;
                        for (y = 0; y < _; y += 1) {
                            if (d = l.sh._mdf || m, l.styles[y].lvl < A) {
                                for (b = e.reset(), S = A - l.styles[y].lvl, k = l.transformers.length - 1; !d && S > 0;) d = l.transformers[k].mProps._mdf || d, S -= 1, k -= 1;
                                if (d)
                                    for (S = A - l.styles[y].lvl, k = l.transformers.length - 1; S > 0;) x = l.transformers[k].mProps.v.props, b.transform(x[0], x[1], x[2], x[3], x[4], x[5], x[6], x[7], x[8], x[9], x[10], x[11], x[12], x[13], x[14], x[15]), S -= 1, k -= 1
                            } else b = t;
                            if (h = (v = l.sh.paths)._length, d) {
                                for (p = "", u = 0; u < h; u += 1)(n = v.shapes[u]) && n._length && (p += buildShapeString(n, n._length, n.c, b));
                                l.caches[y] = p
                            } else p = l.caches[y];
                            l.styles[y].d += c.hd === !0 ? "" : p, l.styles[y]._mdf = d || l.styles[y]._mdf
                        }
                    }

                    function s(c, l, m) {
                        var u = l.style;
                        (l.c._mdf || m) && u.pElem.setAttribute("fill", "rgb(" + bmFloor(l.c.v[0]) + "," + bmFloor(l.c.v[1]) + "," + bmFloor(l.c.v[2]) + ")"), (l.o._mdf || m) && u.pElem.setAttribute("fill-opacity", l.o.v)
                    }

                    function f(c, l, m) {
                        o(c, l, m), g(c, l, m)
                    }

                    function o(c, l, m) {
                        var u, h, p, d, n, y = l.gf,
                            v = l.g._hasOpacity,
                            b = l.s.v,
                            x = l.e.v;
                        if (l.o._mdf || m) {
                            var S = c.ty === "gf" ? "fill-opacity" : "stroke-opacity";
                            l.style.pElem.setAttribute(S, l.o.v)
                        }
                        if (l.s._mdf || m) {
                            var k = c.t === 1 ? "x1" : "cx",
                                _ = k === "x1" ? "y1" : "cy";
                            y.setAttribute(k, b[0]), y.setAttribute(_, b[1]), v && !l.g._collapsable && (l.of.setAttribute(k, b[0]), l.of.setAttribute(_, b[1]))
                        }
                        if (l.g._cmdf || m) {
                            u = l.cst;
                            var A = l.g.c;
                            for (p = u.length, h = 0; h < p; h += 1)(d = u[h]).setAttribute("offset", A[4 * h] + "%"), d.setAttribute("stop-color", "rgb(" + A[4 * h + 1] + "," + A[4 * h + 2] + "," + A[4 * h + 3] + ")")
                        }
                        if (v && (l.g._omdf || m)) {
                            var T = l.g.o;
                            for (p = (u = l.g._collapsable ? l.cst : l.ost).length, h = 0; h < p; h += 1) d = u[h], l.g._collapsable || d.setAttribute("offset", T[2 * h] + "%"), d.setAttribute("stop-opacity", T[2 * h + 1])
                        }
                        if (c.t === 1)(l.e._mdf || m) && (y.setAttribute("x2", x[0]), y.setAttribute("y2", x[1]), v && !l.g._collapsable && (l.of.setAttribute("x2", x[0]), l.of.setAttribute("y2", x[1])));
                        else if ((l.s._mdf || l.e._mdf || m) && (n = Math.sqrt(Math.pow(b[0] - x[0], 2) + Math.pow(b[1] - x[1], 2)), y.setAttribute("r", n), v && !l.g._collapsable && l.of.setAttribute("r", n)), l.e._mdf || l.h._mdf || l.a._mdf || m) {
                            n || (n = Math.sqrt(Math.pow(b[0] - x[0], 2) + Math.pow(b[1] - x[1], 2)));
                            var E = Math.atan2(x[1] - b[1], x[0] - b[0]),
                                C = l.h.v;
                            C >= 1 ? C = .99 : C <= -1 && (C = -.99);
                            var F = n * C,
                                M = Math.cos(E + l.a.v) * F + b[0],
                                D = Math.sin(E + l.a.v) * F + b[1];
                            y.setAttribute("fx", M), y.setAttribute("fy", D), v && !l.g._collapsable && (l.of.setAttribute("fx", M), l.of.setAttribute("fy", D))
                        }
                    }

                    function g(c, l, m) {
                        var u = l.style,
                            h = l.d;
                        h && (h._mdf || m) && h.dashStr && (u.pElem.setAttribute("stroke-dasharray", h.dashStr), u.pElem.setAttribute("stroke-dashoffset", h.dashoffset[0])), l.c && (l.c._mdf || m) && u.pElem.setAttribute("stroke", "rgb(" + bmFloor(l.c.v[0]) + "," + bmFloor(l.c.v[1]) + "," + bmFloor(l.c.v[2]) + ")"), (l.o._mdf || m) && u.pElem.setAttribute("stroke-opacity", l.o.v), (l.w._mdf || m) && (u.pElem.setAttribute("stroke-width", l.w.v), u.msElem && u.msElem.setAttribute("stroke-width", l.w.v))
                    }
                    return {
                        createRenderFunction: function(c) {
                            switch (c.ty) {
                                case "fl":
                                    return s;
                                case "gf":
                                    return o;
                                case "gs":
                                    return f;
                                case "st":
                                    return g;
                                case "sh":
                                case "el":
                                case "rc":
                                case "sr":
                                    return a;
                                case "tr":
                                    return r;
                                case "no":
                                    return i;
                                default:
                                    return null
                            }
                        }
                    }
                }();

            function SVGShapeElement(t, e, r) {
                this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, r), this.prevViewData = []
            }

            function LetterProps(t, e, r, i, a, s) {
                this.o = t, this.sw = e, this.sc = r, this.fc = i, this.m = a, this.p = s, this._mdf = {
                    o: !0,
                    sw: !!e,
                    sc: !!r,
                    fc: !!i,
                    m: !0,
                    p: !0
                }
            }

            function TextProperty(t, e) {
                this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
                    ascent: 0,
                    boxWidth: this.defaultBoxWidth,
                    f: "",
                    fStyle: "",
                    fWeight: "",
                    fc: "",
                    j: "",
                    justifyOffset: "",
                    l: [],
                    lh: 0,
                    lineWidths: [],
                    ls: "",
                    of: "",
                    s: "",
                    sc: "",
                    sw: 0,
                    t: 0,
                    tr: 0,
                    sz: 0,
                    ps: null,
                    fillColorAnim: !1,
                    strokeColorAnim: !1,
                    strokeWidthAnim: !1,
                    yOffset: 0,
                    finalSize: 0,
                    finalText: [],
                    finalLineHeight: 0,
                    __complete: !1
                }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData)
            }
            extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {}, SVGShapeElement.prototype.identityMatrix = new Matrix, SVGShapeElement.prototype.buildExpressionInterface = function() {}, SVGShapeElement.prototype.createContent = function() {
                this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes()
            }, SVGShapeElement.prototype.filterUniqueShapes = function() {
                var t, e, r, i, a = this.shapes.length,
                    s = this.stylesList.length,
                    f = [],
                    o = !1;
                for (r = 0; r < s; r += 1) {
                    for (i = this.stylesList[r], o = !1, f.length = 0, t = 0; t < a; t += 1)(e = this.shapes[t]).styles.indexOf(i) !== -1 && (f.push(e), o = e._isAnimated || o);
                    f.length > 1 && o && this.setShapesAsAnimated(f)
                }
            }, SVGShapeElement.prototype.setShapesAsAnimated = function(t) {
                var e, r = t.length;
                for (e = 0; e < r; e += 1) t[e].setAsAnimated()
            }, SVGShapeElement.prototype.createStyleElement = function(t, e) {
                var r, i = new SVGStyleData(t, e),
                    a = i.pElem;
                return t.ty === "st" ? r = new SVGStrokeStyleData(this, t, i) : t.ty === "fl" ? r = new SVGFillStyleData(this, t, i) : t.ty === "gf" || t.ty === "gs" ? (r = new(t.ty === "gf" ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, t, i), this.globalData.defs.appendChild(r.gf), r.maskId && (this.globalData.defs.appendChild(r.ms), this.globalData.defs.appendChild(r.of), a.setAttribute("mask", "url(" + getLocationHref() + "#" + r.maskId + ")"))) : t.ty === "no" && (r = new SVGNoStyleData(this, t, i)), t.ty !== "st" && t.ty !== "gs" || (a.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), a.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), a.setAttribute("fill-opacity", "0"), t.lj === 1 && a.setAttribute("stroke-miterlimit", t.ml)), t.r === 2 && a.setAttribute("fill-rule", "evenodd"), t.ln && a.setAttribute("id", t.ln), t.cl && a.setAttribute("class", t.cl), t.bm && (a.style["mix-blend-mode"] = getBlendMode(t.bm)), this.stylesList.push(i), this.addToAnimatedContents(t, r), r
            }, SVGShapeElement.prototype.createGroupElement = function(t) {
                var e = new ShapeGroupData;
                return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)), e
            }, SVGShapeElement.prototype.createTransformElement = function(t, e) {
                var r = TransformPropertyFactory.getTransformProperty(this, t, this),
                    i = new SVGTransformData(r, r.o, e);
                return this.addToAnimatedContents(t, i), i
            }, SVGShapeElement.prototype.createShapeElement = function(t, e, r) {
                var i = 4;
                t.ty === "rc" ? i = 5 : t.ty === "el" ? i = 6 : t.ty === "sr" && (i = 7);
                var a = new SVGShapeData(e, r, ShapePropertyFactory.getShapeProp(this, t, i, this));
                return this.shapes.push(a), this.addShapeToModifiers(a), this.addToAnimatedContents(t, a), a
            }, SVGShapeElement.prototype.addToAnimatedContents = function(t, e) {
                for (var r = 0, i = this.animatedContents.length; r < i;) {
                    if (this.animatedContents[r].element === e) return;
                    r += 1
                }
                this.animatedContents.push({
                    fn: SVGElementsRenderer.createRenderFunction(t),
                    element: e,
                    data: t
                })
            }, SVGShapeElement.prototype.setElementStyles = function(t) {
                var e, r = t.styles,
                    i = this.stylesList.length;
                for (e = 0; e < i; e += 1) this.stylesList[e].closed || r.push(this.stylesList[e])
            }, SVGShapeElement.prototype.reloadShapes = function() {
                var t;
                this._isFirstFrame = !0;
                var e = this.itemsData.length;
                for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
                for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
                this.renderModifiers()
            }, SVGShapeElement.prototype.searchShapes = function(t, e, r, i, a, s, f) {
                var o, g, c, l, m, u, h = [].concat(s),
                    p = t.length - 1,
                    d = [],
                    n = [];
                for (o = p; o >= 0; o -= 1) {
                    if ((u = this.searchProcessedElement(t[o])) ? e[o] = r[u - 1] : t[o]._render = f, t[o].ty === "fl" || t[o].ty === "st" || t[o].ty === "gf" || t[o].ty === "gs" || t[o].ty === "no") u ? e[o].style.closed = !1 : e[o] = this.createStyleElement(t[o], a), t[o]._render && e[o].style.pElem.parentNode !== i && i.appendChild(e[o].style.pElem), d.push(e[o].style);
                    else if (t[o].ty === "gr") {
                        if (u)
                            for (c = e[o].it.length, g = 0; g < c; g += 1) e[o].prevViewData[g] = e[o].it[g];
                        else e[o] = this.createGroupElement(t[o]);
                        this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, a + 1, h, f), t[o]._render && e[o].gr.parentNode !== i && i.appendChild(e[o].gr)
                    } else t[o].ty === "tr" ? (u || (e[o] = this.createTransformElement(t[o], i)), l = e[o].transform, h.push(l)) : t[o].ty === "sh" || t[o].ty === "rc" || t[o].ty === "el" || t[o].ty === "sr" ? (u || (e[o] = this.createShapeElement(t[o], h, a)), this.setElementStyles(e[o])) : t[o].ty === "tm" || t[o].ty === "rd" || t[o].ty === "ms" || t[o].ty === "pb" || t[o].ty === "zz" || t[o].ty === "op" ? (u ? (m = e[o]).closed = !1 : ((m = ShapeModifiers.getModifier(t[o].ty)).init(this, t[o]), e[o] = m, this.shapeModifiers.push(m)), n.push(m)) : t[o].ty === "rp" && (u ? (m = e[o]).closed = !0 : (m = ShapeModifiers.getModifier(t[o].ty), e[o] = m, m.init(this, t, o, e), this.shapeModifiers.push(m), f = !1), n.push(m));
                    this.addProcessedElement(t[o], o + 1)
                }
                for (p = d.length, o = 0; o < p; o += 1) d[o].closed = !0;
                for (p = n.length, o = 0; o < p; o += 1) n[o].closed = !0
            }, SVGShapeElement.prototype.renderInnerContent = function() {
                var t;
                this.renderModifiers();
                var e = this.stylesList.length;
                for (t = 0; t < e; t += 1) this.stylesList[t].reset();
                for (this.renderShape(), t = 0; t < e; t += 1)(this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"))
            }, SVGShapeElement.prototype.renderShape = function() {
                var t, e, r = this.animatedContents.length;
                for (t = 0; t < r; t += 1) e = this.animatedContents[t], (this._isFirstFrame || e.element._isAnimated) && e.data !== !0 && e.fn(e.data, e.element, this._isFirstFrame)
            }, SVGShapeElement.prototype.destroy = function() {
                this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
            }, LetterProps.prototype.update = function(t, e, r, i, a, s) {
                this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
                var f = !1;
                return this.o !== t && (this.o = t, this._mdf.o = !0, f = !0), this.sw !== e && (this.sw = e, this._mdf.sw = !0, f = !0), this.sc !== r && (this.sc = r, this._mdf.sc = !0, f = !0), this.fc !== i && (this.fc = i, this._mdf.fc = !0, f = !0), this.m !== a && (this.m = a, this._mdf.m = !0, f = !0), !s.length || this.p[0] === s[0] && this.p[1] === s[1] && this.p[4] === s[4] && this.p[5] === s[5] && this.p[12] === s[12] && this.p[13] === s[13] || (this.p = s, this._mdf.p = !0, f = !0), f
            }, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(t, e) {
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t
            }, TextProperty.prototype.setCurrentData = function(t) {
                t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
            }, TextProperty.prototype.searchProperty = function() {
                return this.searchKeyframes()
            }, TextProperty.prototype.searchKeyframes = function() {
                return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
            }, TextProperty.prototype.addEffect = function(t) {
                this.effectsSequence.push(t), this.elem.addDynamicProperty(this)
            }, TextProperty.prototype.getValue = function(t) {
                if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) {
                    this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                    var e = this.currentData,
                        r = this.keysIndex;
                    if (this.lock) this.setCurrentData(this.currentData);
                    else {
                        var i;
                        this.lock = !0, this._mdf = !1;
                        var a = this.effectsSequence.length,
                            s = t || this.data.d.k[this.keysIndex].s;
                        for (i = 0; i < a; i += 1) s = r !== this.keysIndex ? this.effectsSequence[i](s, s.t) : this.effectsSequence[i](this.currentData, s.t);
                        e !== s && this.setCurrentData(s), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId
                    }
                }
            }, TextProperty.prototype.getKeyframeValue = function() {
                for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, r = 0, i = t.length; r <= i - 1 && !(r === i - 1 || t[r + 1].t > e);) r += 1;
                return this.keysIndex !== r && (this.keysIndex = r), this.data.d.k[this.keysIndex].s
            }, TextProperty.prototype.buildFinalText = function(t) {
                for (var e, r, i = [], a = 0, s = t.length, f = !1; a < s;) e = t.charCodeAt(a), FontManager.isCombinedCharacter(e) ? i[i.length - 1] += t.charAt(a) : e >= 55296 && e <= 56319 ? (r = t.charCodeAt(a + 1)) >= 56320 && r <= 57343 ? (f || FontManager.isModifier(e, r) ? (i[i.length - 1] += t.substr(a, 2), f = !1) : i.push(t.substr(a, 2)), a += 1) : i.push(t.charAt(a)) : e > 56319 ? (r = t.charCodeAt(a + 1), FontManager.isZeroWidthJoiner(e, r) ? (f = !0, i[i.length - 1] += t.substr(a, 2), a += 1) : i.push(t.charAt(a))) : FontManager.isZeroWidthJoiner(e) ? (i[i.length - 1] += t.charAt(a), f = !0) : i.push(t.charAt(a)), a += 1;
                return i
            }, TextProperty.prototype.completeTextData = function(t) {
                t.__complete = !0;
                var e, r, i, a, s, f, o, g = this.elem.globalData.fontManager,
                    c = this.data,
                    l = [],
                    m = 0,
                    u = c.m.g,
                    h = 0,
                    p = 0,
                    d = 0,
                    n = [],
                    y = 0,
                    v = 0,
                    b = g.getFontByName(t.f),
                    x = 0,
                    S = getFontProperties(b);
                t.fWeight = S.weight, t.fStyle = S.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), r = t.finalText.length, t.finalLineHeight = t.lh;
                var k, _ = t.tr / 1e3 * t.finalSize;
                if (t.sz)
                    for (var A, T, E = !0, C = t.sz[0], F = t.sz[1]; E;) {
                        A = 0, y = 0, r = (T = this.buildFinalText(t.t)).length, _ = t.tr / 1e3 * t.finalSize;
                        var M = -1;
                        for (e = 0; e < r; e += 1) k = T[e].charCodeAt(0), i = !1, T[e] === " " ? M = e : k !== 13 && k !== 3 || (y = 0, i = !0, A += t.finalLineHeight || 1.2 * t.finalSize), g.chars ? (o = g.getCharData(T[e], b.fStyle, b.fFamily), x = i ? 0 : o.w * t.finalSize / 100) : x = g.measureText(T[e], t.f, t.finalSize), y + x > C && T[e] !== " " ? (M === -1 ? r += 1 : e = M, A += t.finalLineHeight || 1.2 * t.finalSize, T.splice(e, M === e ? 1 : 0, "\r"), M = -1, y = 0) : (y += x, y += _);
                        A += b.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && F < A ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = T, r = t.finalText.length, E = !1)
                    }
                y = -_, x = 0;
                var D, I = 0;
                for (e = 0; e < r; e += 1)
                    if (i = !1, (k = (D = t.finalText[e]).charCodeAt(0)) === 13 || k === 3 ? (I = 0, n.push(y), v = y > v ? y : v, y = -2 * _, a = "", i = !0, d += 1) : a = D, g.chars ? (o = g.getCharData(D, b.fStyle, g.getFontByName(t.f).fFamily), x = i ? 0 : o.w * t.finalSize / 100) : x = g.measureText(a, t.f, t.finalSize), D === " " ? I += x + _ : (y += x + _ + I, I = 0), l.push({
                            l: x,
                            an: x,
                            add: h,
                            n: i,
                            anIndexes: [],
                            val: a,
                            line: d,
                            animatorJustifyOffset: 0
                        }), u == 2) {
                        if (h += x, a === "" || a === " " || e === r - 1) {
                            for (a !== "" && a !== " " || (h -= x); p <= e;) l[p].an = h, l[p].ind = m, l[p].extra = x, p += 1;
                            m += 1, h = 0
                        }
                    } else if (u == 3) {
                    if (h += x, a === "" || e === r - 1) {
                        for (a === "" && (h -= x); p <= e;) l[p].an = h, l[p].ind = m, l[p].extra = x, p += 1;
                        h = 0, m += 1
                    }
                } else l[m].ind = m, l[m].extra = 0, m += 1;
                if (t.l = l, v = y > v ? y : v, n.push(y), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
                else switch (t.boxWidth = v, t.j) {
                    case 1:
                        t.justifyOffset = -t.boxWidth;
                        break;
                    case 2:
                        t.justifyOffset = -t.boxWidth / 2;
                        break;
                    default:
                        t.justifyOffset = 0
                }
                t.lineWidths = n;
                var L, w, P, B, R = c.a;
                f = R.length;
                var O = [];
                for (s = 0; s < f; s += 1) {
                    for ((L = R[s]).a.sc && (t.strokeColorAnim = !0), L.a.sw && (t.strokeWidthAnim = !0), (L.a.fc || L.a.fh || L.a.fs || L.a.fb) && (t.fillColorAnim = !0), B = 0, P = L.s.b, e = 0; e < r; e += 1)(w = l[e]).anIndexes[s] = B, (P == 1 && w.val !== "" || P == 2 && w.val !== "" && w.val !== " " || P == 3 && (w.n || w.val == " " || e == r - 1) || P == 4 && (w.n || e == r - 1)) && (L.s.rn === 1 && O.push(B), B += 1);
                    c.a[s].s.totalChars = B;
                    var j, W = -1;
                    if (L.s.rn === 1)
                        for (e = 0; e < r; e += 1) W != (w = l[e]).anIndexes[s] && (W = w.anIndexes[s], j = O.splice(Math.floor(Math.random() * O.length), 1)[0]), w.anIndexes[s] = j
                }
                t.yOffset = t.finalLineHeight || 1.2 * t.finalSize, t.ls = t.ls || 0, t.ascent = b.ascent * t.finalSize / 100
            }, TextProperty.prototype.updateDocumentData = function(t, e) {
                e = e === void 0 ? this.keysIndex : e;
                var r = this.copyData({}, this.data.d.k[e].s);
                r = this.copyData(r, t), this.data.d.k[e].s = r, this.recalculate(e), this.elem.addDynamicProperty(this)
            }, TextProperty.prototype.recalculate = function(t) {
                var e = this.data.d.k[t].s;
                e.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e)
            }, TextProperty.prototype.canResizeFont = function(t) {
                this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
            }, TextProperty.prototype.setMinimumFontSize = function(t) {
                this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
            };
            var TextSelectorProp = function() {
                var t = Math.max,
                    e = Math.min,
                    r = Math.floor;

                function i(a, s) {
                    this._currentTextLength = -1, this.k = !1, this.data = s, this.elem = a, this.comp = a.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(a), this.s = PropertyFactory.getProp(a, s.s || {
                        k: 0
                    }, 0, 0, this), this.e = "e" in s ? PropertyFactory.getProp(a, s.e, 0, 0, this) : {
                        v: 100
                    }, this.o = PropertyFactory.getProp(a, s.o || {
                        k: 0
                    }, 0, 0, this), this.xe = PropertyFactory.getProp(a, s.xe || {
                        k: 0
                    }, 0, 0, this), this.ne = PropertyFactory.getProp(a, s.ne || {
                        k: 0
                    }, 0, 0, this), this.sm = PropertyFactory.getProp(a, s.sm || {
                        k: 100
                    }, 0, 0, this), this.a = PropertyFactory.getProp(a, s.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
                }
                return i.prototype = {
                    getMult: function(a) {
                        this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                        var s = 0,
                            f = 0,
                            o = 1,
                            g = 1;
                        this.ne.v > 0 ? s = this.ne.v / 100 : f = -this.ne.v / 100, this.xe.v > 0 ? o = 1 - this.xe.v / 100 : g = 1 + this.xe.v / 100;
                        var c = BezierFactory.getBezierEasing(s, f, o, g).get,
                            l = 0,
                            m = this.finalS,
                            u = this.finalE,
                            h = this.data.sh;
                        if (h === 2) l = c(l = u === m ? a >= u ? 1 : 0 : t(0, e(.5 / (u - m) + (a - m) / (u - m), 1)));
                        else if (h === 3) l = c(l = u === m ? a >= u ? 0 : 1 : 1 - t(0, e(.5 / (u - m) + (a - m) / (u - m), 1)));
                        else if (h === 4) u === m ? l = 0 : (l = t(0, e(.5 / (u - m) + (a - m) / (u - m), 1))) < .5 ? l *= 2 : l = 1 - 2 * (l - .5), l = c(l);
                        else if (h === 5) {
                            if (u === m) l = 0;
                            else {
                                var p = u - m,
                                    d = -p / 2 + (a = e(t(0, a + .5 - m), u - m)),
                                    n = p / 2;
                                l = Math.sqrt(1 - d * d / (n * n))
                            }
                            l = c(l)
                        } else h === 6 ? (u === m ? l = 0 : (a = e(t(0, a + .5 - m), u - m), l = (1 + Math.cos(Math.PI + 2 * Math.PI * a / (u - m))) / 2), l = c(l)) : (a >= r(m) && (l = t(0, e(a - m < 0 ? e(u, 1) - (m - a) : u - a, 1))), l = c(l));
                        if (this.sm.v !== 100) {
                            var y = .01 * this.sm.v;
                            y === 0 && (y = 1e-8);
                            var v = .5 - .5 * y;
                            l < v ? l = 0 : (l = (l - v) / y) > 1 && (l = 1)
                        }
                        return l * this.a.v
                    },
                    getValue: function(a) {
                        this.iterateDynamicProperties(), this._mdf = a || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, a && this.data.r === 2 && (this.e.v = this._currentTextLength);
                        var s = this.data.r === 2 ? 1 : 100 / this.data.totalChars,
                            f = this.o.v / s,
                            o = this.s.v / s + f,
                            g = this.e.v / s + f;
                        if (o > g) {
                            var c = o;
                            o = g, g = c
                        }
                        this.finalS = o, this.finalE = g
                    }
                }, extendPrototype([DynamicPropertyContainer], i), {
                    getTextSelectorProp: function(a, s, f) {
                        return new i(a, s)
                    }
                }
            }();

            function TextAnimatorDataProperty(t, e, r) {
                var i = {
                        propType: !1
                    },
                    a = PropertyFactory.getProp,
                    s = e.a;
                this.a = {
                    r: s.r ? a(t, s.r, 0, degToRads, r) : i,
                    rx: s.rx ? a(t, s.rx, 0, degToRads, r) : i,
                    ry: s.ry ? a(t, s.ry, 0, degToRads, r) : i,
                    sk: s.sk ? a(t, s.sk, 0, degToRads, r) : i,
                    sa: s.sa ? a(t, s.sa, 0, degToRads, r) : i,
                    s: s.s ? a(t, s.s, 1, .01, r) : i,
                    a: s.a ? a(t, s.a, 1, 0, r) : i,
                    o: s.o ? a(t, s.o, 0, .01, r) : i,
                    p: s.p ? a(t, s.p, 1, 0, r) : i,
                    sw: s.sw ? a(t, s.sw, 0, 0, r) : i,
                    sc: s.sc ? a(t, s.sc, 1, 0, r) : i,
                    fc: s.fc ? a(t, s.fc, 1, 0, r) : i,
                    fh: s.fh ? a(t, s.fh, 0, 0, r) : i,
                    fs: s.fs ? a(t, s.fs, 0, .01, r) : i,
                    fb: s.fb ? a(t, s.fb, 0, .01, r) : i,
                    t: s.t ? a(t, s.t, 0, 0, r) : i
                }, this.s = TextSelectorProp.getTextSelectorProp(t, e.s, r), this.s.t = e.s.t
            }

            function TextAnimatorProperty(t, e, r) {
                this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = r, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {
                    alignment: {}
                }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(r)
            }

            function ITextElement() {}
            TextAnimatorProperty.prototype.searchProperties = function() {
                var t, e, r = this._textData.a.length,
                    i = PropertyFactory.getProp;
                for (t = 0; t < r; t += 1) e = this._textData.a[t], this._animatorsData[t] = new TextAnimatorDataProperty(this._elem, e, this);
                this._textData.p && "m" in this._textData.p ? (this._pathData = {
                    a: i(this._elem, this._textData.p.a, 0, 0, this),
                    f: i(this._elem, this._textData.p.f, 0, 0, this),
                    l: i(this._elem, this._textData.p.l, 0, 0, this),
                    r: i(this._elem, this._textData.p.r, 0, 0, this),
                    p: i(this._elem, this._textData.p.p, 0, 0, this),
                    m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
                }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = i(this._elem, this._textData.m.a, 1, 0, this)
            }, TextAnimatorProperty.prototype.getMeasures = function(t, e) {
                if (this.lettersChangedFlag = e, this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {
                    this._isFirstFrame = !1;
                    var r, i, a, s, f, o, g, c, l, m, u, h, p, d, n, y, v, b, x, S = this._moreOptions.alignment.v,
                        k = this._animatorsData,
                        _ = this._textData,
                        A = this.mHelper,
                        T = this._renderType,
                        E = this.renderedLetters.length,
                        C = t.l;
                    if (this._hasMaskedPath) {
                        if (x = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                            var F, M = x.v;
                            for (this._pathData.r.v && (M = M.reverse()), f = {
                                    tLength: 0,
                                    segments: []
                                }, s = M._length - 1, y = 0, a = 0; a < s; a += 1) F = bez.buildBezierData(M.v[a], M.v[a + 1], [M.o[a][0] - M.v[a][0], M.o[a][1] - M.v[a][1]], [M.i[a + 1][0] - M.v[a + 1][0], M.i[a + 1][1] - M.v[a + 1][1]]), f.tLength += F.segmentLength, f.segments.push(F), y += F.segmentLength;
                            a = s, x.v.c && (F = bez.buildBezierData(M.v[a], M.v[0], [M.o[a][0] - M.v[a][0], M.o[a][1] - M.v[a][1]], [M.i[0][0] - M.v[0][0], M.i[0][1] - M.v[0][1]]), f.tLength += F.segmentLength, f.segments.push(F), y += F.segmentLength), this._pathData.pi = f
                        }
                        if (f = this._pathData.pi, o = this._pathData.f.v, u = 0, m = 1, c = 0, l = !0, d = f.segments, o < 0 && x.v.c)
                            for (f.tLength < Math.abs(o) && (o = -Math.abs(o) % f.tLength), m = (p = d[u = d.length - 1].points).length - 1; o < 0;) o += p[m].partialLength, (m -= 1) < 0 && (m = (p = d[u -= 1].points).length - 1);
                        h = (p = d[u].points)[m - 1], n = (g = p[m]).partialLength
                    }
                    s = C.length, r = 0, i = 0;
                    var D, I, L, w, P, B = 1.2 * t.finalSize * .714,
                        R = !0;
                    L = k.length;
                    var O, j, W, N, $, H, G, z, Y, q, Z, X, V = -1,
                        J = o,
                        st = u,
                        nt = m,
                        at = -1,
                        Q = "",
                        U = this.defaultPropsArray;
                    if (t.j === 2 || t.j === 1) {
                        var K = 0,
                            tt = 0,
                            et = t.j === 2 ? -.5 : -1,
                            rt = 0,
                            ot = !0;
                        for (a = 0; a < s; a += 1)
                            if (C[a].n) {
                                for (K && (K += tt); rt < a;) C[rt].animatorJustifyOffset = K, rt += 1;
                                K = 0, ot = !0
                            } else {
                                for (I = 0; I < L; I += 1)(D = k[I].a).t.propType && (ot && t.j === 2 && (tt += D.t.v * et), (P = k[I].s.getMult(C[a].anIndexes[I], _.a[I].s.totalChars)).length ? K += D.t.v * P[0] * et : K += D.t.v * P * et);
                                ot = !1
                            }
                        for (K && (K += tt); rt < a;) C[rt].animatorJustifyOffset = K, rt += 1
                    }
                    for (a = 0; a < s; a += 1) {
                        if (A.reset(), N = 1, C[a].n) r = 0, i += t.yOffset, i += R ? 1 : 0, o = J, R = !1, this._hasMaskedPath && (m = nt, h = (p = d[u = st].points)[m - 1], n = (g = p[m]).partialLength, c = 0), Q = "", Z = "", Y = "", X = "", U = this.defaultPropsArray;
                        else {
                            if (this._hasMaskedPath) {
                                if (at !== C[a].line) {
                                    switch (t.j) {
                                        case 1:
                                            o += y - t.lineWidths[C[a].line];
                                            break;
                                        case 2:
                                            o += (y - t.lineWidths[C[a].line]) / 2
                                    }
                                    at = C[a].line
                                }
                                V !== C[a].ind && (C[V] && (o += C[V].extra), o += C[a].an / 2, V = C[a].ind), o += S[0] * C[a].an * .005;
                                var it = 0;
                                for (I = 0; I < L; I += 1)(D = k[I].a).p.propType && ((P = k[I].s.getMult(C[a].anIndexes[I], _.a[I].s.totalChars)).length ? it += D.p.v[0] * P[0] : it += D.p.v[0] * P), D.a.propType && ((P = k[I].s.getMult(C[a].anIndexes[I], _.a[I].s.totalChars)).length ? it += D.a.v[0] * P[0] : it += D.a.v[0] * P);
                                for (l = !0, this._pathData.a.v && (o = .5 * C[0].an + (y - this._pathData.f.v - .5 * C[0].an - .5 * C[C.length - 1].an) * V / (s - 1), o += this._pathData.f.v); l;) c + n >= o + it || !p ? (v = (o + it - c) / g.partialLength, j = h.point[0] + (g.point[0] - h.point[0]) * v, W = h.point[1] + (g.point[1] - h.point[1]) * v, A.translate(-S[0] * C[a].an * .005, -S[1] * B * .01), l = !1) : p && (c += g.partialLength, (m += 1) >= p.length && (m = 0, d[u += 1] ? p = d[u].points : x.v.c ? (m = 0, p = d[u = 0].points) : (c -= g.partialLength, p = null)), p && (h = g, n = (g = p[m]).partialLength));
                                O = C[a].an / 2 - C[a].add, A.translate(-O, 0, 0)
                            } else O = C[a].an / 2 - C[a].add, A.translate(-O, 0, 0), A.translate(-S[0] * C[a].an * .005, -S[1] * B * .01, 0);
                            for (I = 0; I < L; I += 1)(D = k[I].a).t.propType && (P = k[I].s.getMult(C[a].anIndexes[I], _.a[I].s.totalChars), r === 0 && t.j === 0 || (this._hasMaskedPath ? P.length ? o += D.t.v * P[0] : o += D.t.v * P : P.length ? r += D.t.v * P[0] : r += D.t.v * P));
                            for (t.strokeWidthAnim && (H = t.sw || 0), t.strokeColorAnim && ($ = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && (G = [t.fc[0], t.fc[1], t.fc[2]]), I = 0; I < L; I += 1)(D = k[I].a).a.propType && ((P = k[I].s.getMult(C[a].anIndexes[I], _.a[I].s.totalChars)).length ? A.translate(-D.a.v[0] * P[0], -D.a.v[1] * P[1], D.a.v[2] * P[2]) : A.translate(-D.a.v[0] * P, -D.a.v[1] * P, D.a.v[2] * P));
                            for (I = 0; I < L; I += 1)(D = k[I].a).s.propType && ((P = k[I].s.getMult(C[a].anIndexes[I], _.a[I].s.totalChars)).length ? A.scale(1 + (D.s.v[0] - 1) * P[0], 1 + (D.s.v[1] - 1) * P[1], 1) : A.scale(1 + (D.s.v[0] - 1) * P, 1 + (D.s.v[1] - 1) * P, 1));
                            for (I = 0; I < L; I += 1) {
                                if (D = k[I].a, P = k[I].s.getMult(C[a].anIndexes[I], _.a[I].s.totalChars), D.sk.propType && (P.length ? A.skewFromAxis(-D.sk.v * P[0], D.sa.v * P[1]) : A.skewFromAxis(-D.sk.v * P, D.sa.v * P)), D.r.propType && (P.length ? A.rotateZ(-D.r.v * P[2]) : A.rotateZ(-D.r.v * P)), D.ry.propType && (P.length ? A.rotateY(D.ry.v * P[1]) : A.rotateY(D.ry.v * P)), D.rx.propType && (P.length ? A.rotateX(D.rx.v * P[0]) : A.rotateX(D.rx.v * P)), D.o.propType && (P.length ? N += (D.o.v * P[0] - N) * P[0] : N += (D.o.v * P - N) * P), t.strokeWidthAnim && D.sw.propType && (P.length ? H += D.sw.v * P[0] : H += D.sw.v * P), t.strokeColorAnim && D.sc.propType)
                                    for (z = 0; z < 3; z += 1) P.length ? $[z] += (D.sc.v[z] - $[z]) * P[0] : $[z] += (D.sc.v[z] - $[z]) * P;
                                if (t.fillColorAnim && t.fc) {
                                    if (D.fc.propType)
                                        for (z = 0; z < 3; z += 1) P.length ? G[z] += (D.fc.v[z] - G[z]) * P[0] : G[z] += (D.fc.v[z] - G[z]) * P;
                                    D.fh.propType && (G = P.length ? addHueToRGB(G, D.fh.v * P[0]) : addHueToRGB(G, D.fh.v * P)), D.fs.propType && (G = P.length ? addSaturationToRGB(G, D.fs.v * P[0]) : addSaturationToRGB(G, D.fs.v * P)), D.fb.propType && (G = P.length ? addBrightnessToRGB(G, D.fb.v * P[0]) : addBrightnessToRGB(G, D.fb.v * P))
                                }
                            }
                            for (I = 0; I < L; I += 1)(D = k[I].a).p.propType && (P = k[I].s.getMult(C[a].anIndexes[I], _.a[I].s.totalChars), this._hasMaskedPath ? P.length ? A.translate(0, D.p.v[1] * P[0], -D.p.v[2] * P[1]) : A.translate(0, D.p.v[1] * P, -D.p.v[2] * P) : P.length ? A.translate(D.p.v[0] * P[0], D.p.v[1] * P[1], -D.p.v[2] * P[2]) : A.translate(D.p.v[0] * P, D.p.v[1] * P, -D.p.v[2] * P));
                            if (t.strokeWidthAnim && (Y = H < 0 ? 0 : H), t.strokeColorAnim && (q = "rgb(" + Math.round(255 * $[0]) + "," + Math.round(255 * $[1]) + "," + Math.round(255 * $[2]) + ")"), t.fillColorAnim && t.fc && (Z = "rgb(" + Math.round(255 * G[0]) + "," + Math.round(255 * G[1]) + "," + Math.round(255 * G[2]) + ")"), this._hasMaskedPath) {
                                if (A.translate(0, -t.ls), A.translate(0, S[1] * B * .01 + i, 0), this._pathData.p.v) {
                                    b = (g.point[1] - h.point[1]) / (g.point[0] - h.point[0]);
                                    var ht = 180 * Math.atan(b) / Math.PI;
                                    g.point[0] < h.point[0] && (ht += 180), A.rotate(-ht * Math.PI / 180)
                                }
                                A.translate(j, W, 0), o -= S[0] * C[a].an * .005, C[a + 1] && V !== C[a + 1].ind && (o += C[a].an / 2, o += .001 * t.tr * t.finalSize)
                            } else {
                                switch (A.translate(r, i, 0), t.ps && A.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                                    case 1:
                                        A.translate(C[a].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[C[a].line]), 0, 0);
                                        break;
                                    case 2:
                                        A.translate(C[a].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[C[a].line]) / 2, 0, 0)
                                }
                                A.translate(0, -t.ls), A.translate(O, 0, 0), A.translate(S[0] * C[a].an * .005, S[1] * B * .01, 0), r += C[a].l + .001 * t.tr * t.finalSize
                            }
                            T === "html" ? Q = A.toCSS() : T === "svg" ? Q = A.to2dCSS() : U = [A.props[0], A.props[1], A.props[2], A.props[3], A.props[4], A.props[5], A.props[6], A.props[7], A.props[8], A.props[9], A.props[10], A.props[11], A.props[12], A.props[13], A.props[14], A.props[15]], X = N
                        }
                        E <= a ? (w = new LetterProps(X, Y, q, Z, Q, U), this.renderedLetters.push(w), E += 1, this.lettersChangedFlag = !0) : (w = this.renderedLetters[a], this.lettersChangedFlag = w.update(X, Y, q, Z, Q, U) || this.lettersChangedFlag)
                    }
                }
            }, TextAnimatorProperty.prototype.getValue = function() {
                this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
            }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), ITextElement.prototype.initElement = function(t, e, r) {
                this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, r), this.textProperty = new TextProperty(this, t.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this), this.initTransform(t, e, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
            }, ITextElement.prototype.prepareFrame = function(t) {
                this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
            }, ITextElement.prototype.createPathShape = function(t, e) {
                var r, i, a = e.length,
                    s = "";
                for (r = 0; r < a; r += 1) e[r].ty === "sh" && (i = e[r].ks.k, s += buildShapeString(i, i.i.length, !0, t));
                return s
            }, ITextElement.prototype.updateDocumentData = function(t, e) {
                this.textProperty.updateDocumentData(t, e)
            }, ITextElement.prototype.canResizeFont = function(t) {
                this.textProperty.canResizeFont(t)
            }, ITextElement.prototype.setMinimumFontSize = function(t) {
                this.textProperty.setMinimumFontSize(t)
            }, ITextElement.prototype.applyTextPropertiesToMatrix = function(t, e, r, i, a) {
                switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
                    case 1:
                        e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]), 0, 0);
                        break;
                    case 2:
                        e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]) / 2, 0, 0)
                }
                e.translate(i, a, 0)
            }, ITextElement.prototype.buildColor = function(t) {
                return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")"
            }, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function() {};
            var emptyShapeData = {
                shapes: []
            };

            function SVGTextLottieElement(t, e, r) {
                this.textSpans = [], this.renderType = "svg", this.initElement(t, e, r)
            }

            function ISolidElement(t, e, r) {
                this.initElement(t, e, r)
            }

            function NullElement(t, e, r) {
                this.initFrame(), this.initBaseData(t, e, r), this.initFrame(), this.initTransform(t, e, r), this.initHierarchy()
            }

            function SVGRendererBase() {}

            function ICompElement() {}

            function SVGCompElement(t, e, r) {
                this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                    _placeholder: !0
                }
            }

            function SVGRenderer(t, e) {
                this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
                var r = "";
                if (e && e.title) {
                    var i = createNS("title"),
                        a = createElementID();
                    i.setAttribute("id", a), i.textContent = e.title, this.svgElement.appendChild(i), r += a
                }
                if (e && e.description) {
                    var s = createNS("desc"),
                        f = createElementID();
                    s.setAttribute("id", f), s.textContent = e.description, this.svgElement.appendChild(s), r += " " + f
                }
                r && this.svgElement.setAttribute("aria-labelledby", r);
                var o = createNS("defs");
                this.svgElement.appendChild(o);
                var g = createNS("g");
                this.svgElement.appendChild(g), this.layerElement = g, this.renderConfig = {
                    preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                    imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                    contentVisibility: e && e.contentVisibility || "visible",
                    progressiveLoad: e && e.progressiveLoad || !1,
                    hideOnTransparent: !(e && e.hideOnTransparent === !1),
                    viewBoxOnly: e && e.viewBoxOnly || !1,
                    viewBoxSize: e && e.viewBoxSize || !1,
                    className: e && e.className || "",
                    id: e && e.id || "",
                    focusable: e && e.focusable,
                    filterSize: {
                        width: e && e.filterSize && e.filterSize.width || "100%",
                        height: e && e.filterSize && e.filterSize.height || "100%",
                        x: e && e.filterSize && e.filterSize.x || "0%",
                        y: e && e.filterSize && e.filterSize.y || "0%"
                    },
                    width: e && e.width,
                    height: e && e.height,
                    runExpressions: !e || e.runExpressions === void 0 || e.runExpressions
                }, this.globalData = {
                    _mdf: !1,
                    frameNum: -1,
                    defs: o,
                    renderConfig: this.renderConfig
                }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg"
            }

            function CVContextData() {
                var t;
                for (this.saved = [], this.cArrPos = 0, this.cTr = new Matrix, this.cO = 1, this.savedOp = createTypedArray("float32", 15), t = 0; t < 15; t += 1) this.saved[t] = createTypedArray("float32", 16);
                this._length = 15
            }

            function ShapeTransformManager() {
                this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0
            }
            extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function() {
                this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"))
            }, SVGTextLottieElement.prototype.buildTextContents = function(t) {
                for (var e = 0, r = t.length, i = [], a = ""; e < r;) t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (i.push(a), a = "") : a += t[e], e += 1;
                return i.push(a), i
            }, SVGTextLottieElement.prototype.buildShapeData = function(t, e) {
                if (t.shapes && t.shapes.length) {
                    var r = t.shapes[0];
                    if (r.it) {
                        var i = r.it[r.it.length - 1];
                        i.s && (i.s.k[0] = e, i.s.k[1] = e)
                    }
                }
                return t
            }, SVGTextLottieElement.prototype.buildNewText = function() {
                var t, e;
                this.addDynamicProperty(this);
                var r = this.textProperty.currentData;
                this.renderedLetters = createSizedArray(r ? r.l.length : 0), r.fc ? this.layerElement.setAttribute("fill", this.buildColor(r.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), r.sc && (this.layerElement.setAttribute("stroke", this.buildColor(r.sc)), this.layerElement.setAttribute("stroke-width", r.sw)), this.layerElement.setAttribute("font-size", r.finalSize);
                var i = this.globalData.fontManager.getFontByName(r.f);
                if (i.fClass) this.layerElement.setAttribute("class", i.fClass);
                else {
                    this.layerElement.setAttribute("font-family", i.fFamily);
                    var a = r.fWeight,
                        s = r.fStyle;
                    this.layerElement.setAttribute("font-style", s), this.layerElement.setAttribute("font-weight", a)
                }
                this.layerElement.setAttribute("aria-label", r.t);
                var f, o = r.l || [],
                    g = !!this.globalData.fontManager.chars;
                e = o.length;
                var c = this.mHelper,
                    l = this.data.singleShape,
                    m = 0,
                    u = 0,
                    h = !0,
                    p = .001 * r.tr * r.finalSize;
                if (!l || g || r.sz) {
                    var d, n = this.textSpans.length;
                    for (t = 0; t < e; t += 1) {
                        if (this.textSpans[t] || (this.textSpans[t] = {
                                span: null,
                                childSpan: null,
                                glyph: null
                            }), !g || !l || t === 0) {
                            if (f = n > t ? this.textSpans[t].span : createNS(g ? "g" : "text"), n <= t) {
                                if (f.setAttribute("stroke-linecap", "butt"), f.setAttribute("stroke-linejoin", "round"), f.setAttribute("stroke-miterlimit", "4"), this.textSpans[t].span = f, g) {
                                    var y = createNS("g");
                                    f.appendChild(y), this.textSpans[t].childSpan = y
                                }
                                this.textSpans[t].span = f, this.layerElement.appendChild(f)
                            }
                            f.style.display = "inherit"
                        }
                        if (c.reset(), l && (o[t].n && (m = -p, u += r.yOffset, u += h ? 1 : 0, h = !1), this.applyTextPropertiesToMatrix(r, c, o[t].line, m, u), m += o[t].l || 0, m += p), g) {
                            var v;
                            if ((d = this.globalData.fontManager.getCharData(r.finalText[t], i.fStyle, this.globalData.fontManager.getFontByName(r.f).fFamily)).t === 1) v = new SVGCompElement(d.data, this.globalData, this);
                            else {
                                var b = emptyShapeData;
                                d.data && d.data.shapes && (b = this.buildShapeData(d.data, r.finalSize)), v = new SVGShapeElement(b, this.globalData, this)
                            }
                            if (this.textSpans[t].glyph) {
                                var x = this.textSpans[t].glyph;
                                this.textSpans[t].childSpan.removeChild(x.layerElement), x.destroy()
                            }
                            this.textSpans[t].glyph = v, v._debug = !0, v.prepareFrame(0), v.renderFrame(), this.textSpans[t].childSpan.appendChild(v.layerElement), d.t === 1 && this.textSpans[t].childSpan.setAttribute("transform", "scale(" + r.finalSize / 100 + "," + r.finalSize / 100 + ")")
                        } else l && f.setAttribute("transform", "translate(" + c.props[12] + "," + c.props[13] + ")"), f.textContent = o[t].val, f.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve")
                    }
                    l && f && f.setAttribute("d", "")
                } else {
                    var S = this.textContainer,
                        k = "start";
                    switch (r.j) {
                        case 1:
                            k = "end";
                            break;
                        case 2:
                            k = "middle";
                            break;
                        default:
                            k = "start"
                    }
                    S.setAttribute("text-anchor", k), S.setAttribute("letter-spacing", p);
                    var _ = this.buildTextContents(r.finalText);
                    for (e = _.length, u = r.ps ? r.ps[1] + r.ascent : 0, t = 0; t < e; t += 1)(f = this.textSpans[t].span || createNS("tspan")).textContent = _[t], f.setAttribute("x", 0), f.setAttribute("y", u), f.style.display = "inherit", S.appendChild(f), this.textSpans[t] || (this.textSpans[t] = {
                        span: null,
                        glyph: null
                    }), this.textSpans[t].span = f, u += r.finalLineHeight;
                    this.layerElement.appendChild(S)
                }
                for (; t < this.textSpans.length;) this.textSpans[t].span.style.display = "none", t += 1;
                this._sizeChanged = !0
            }, SVGTextLottieElement.prototype.sourceRectAtTime = function() {
                if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
                    this._sizeChanged = !1;
                    var t = this.layerElement.getBBox();
                    this.bbox = {
                        top: t.y,
                        left: t.x,
                        width: t.width,
                        height: t.height
                    }
                }
                return this.bbox
            }, SVGTextLottieElement.prototype.getValue = function() {
                var t, e, r = this.textSpans.length;
                for (this.renderedFrame = this.comp.renderedFrame, t = 0; t < r; t += 1)(e = this.textSpans[t].glyph) && (e.prepareFrame(this.comp.renderedFrame - this.data.st), e._mdf && (this._mdf = !0))
            }, SVGTextLottieElement.prototype.renderInnerContent = function() {
                if ((!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
                    var t, e;
                    this._sizeChanged = !0;
                    var r, i, a, s = this.textAnimator.renderedLetters,
                        f = this.textProperty.currentData.l;
                    for (e = f.length, t = 0; t < e; t += 1) f[t].n || (r = s[t], i = this.textSpans[t].span, (a = this.textSpans[t].glyph) && a.renderFrame(), r._mdf.m && i.setAttribute("transform", r.m), r._mdf.o && i.setAttribute("opacity", r.o), r._mdf.sw && i.setAttribute("stroke-width", r.sw), r._mdf.sc && i.setAttribute("stroke", r.sc), r._mdf.fc && i.setAttribute("fill", r.fc))
                }
            }, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function() {
                var t = createNS("rect");
                t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t)
            }, NullElement.prototype.prepareFrame = function(t) {
                this.prepareProperties(t, !0)
            }, NullElement.prototype.renderFrame = function() {}, NullElement.prototype.getBaseElement = function() {
                return null
            }, NullElement.prototype.destroy = function() {}, NullElement.prototype.sourceRectAtTime = function() {}, NullElement.prototype.hide = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), extendPrototype([BaseRenderer], SVGRendererBase), SVGRendererBase.prototype.createNull = function(t) {
                return new NullElement(t, this.globalData, this)
            }, SVGRendererBase.prototype.createShape = function(t) {
                return new SVGShapeElement(t, this.globalData, this)
            }, SVGRendererBase.prototype.createText = function(t) {
                return new SVGTextLottieElement(t, this.globalData, this)
            }, SVGRendererBase.prototype.createImage = function(t) {
                return new IImageElement(t, this.globalData, this)
            }, SVGRendererBase.prototype.createSolid = function(t) {
                return new ISolidElement(t, this.globalData, this)
            }, SVGRendererBase.prototype.configAnimation = function(t) {
                this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), this.renderConfig.focusable !== void 0 && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
                var e = this.globalData.defs;
                this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
                var r = createNS("clipPath"),
                    i = createNS("rect");
                i.setAttribute("width", t.w), i.setAttribute("height", t.h), i.setAttribute("x", 0), i.setAttribute("y", 0);
                var a = createElementID();
                r.setAttribute("id", a), r.appendChild(i), this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + a + ")"), e.appendChild(r), this.layers = t.layers, this.elements = createSizedArray(t.layers.length)
            }, SVGRendererBase.prototype.destroy = function() {
                var t;
                this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
                var e = this.layers ? this.layers.length : 0;
                for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy();
                this.elements.length = 0, this.destroyed = !0, this.animationItem = null
            }, SVGRendererBase.prototype.updateContainerSize = function() {}, SVGRendererBase.prototype.findIndexByInd = function(t) {
                var e = 0,
                    r = this.layers.length;
                for (e = 0; e < r; e += 1)
                    if (this.layers[e].ind === t) return e;
                return -1
            }, SVGRendererBase.prototype.buildItem = function(t) {
                var e = this.elements;
                if (!e[t] && this.layers[t].ty !== 99) {
                    e[t] = !0;
                    var r = this.createItem(this.layers[t]);
                    if (e[t] = r, getExpressionsPlugin() && (this.layers[t].ty === 0 && this.globalData.projectInterface.registerComposition(r), r.initExpressions()), this.appendElementInPos(r, t), this.layers[t].tt) {
                        var i = "tp" in this.layers[t] ? this.findIndexByInd(this.layers[t].tp) : t - 1;
                        if (i === -1) return;
                        if (this.elements[i] && this.elements[i] !== !0) {
                            var a = e[i].getMatte(this.layers[t].tt);
                            r.setMatte(a)
                        } else this.buildItem(i), this.addPendingElement(r)
                    }
                }
            }, SVGRendererBase.prototype.checkPendingElements = function() {
                for (; this.pendingElements.length;) {
                    var t = this.pendingElements.pop();
                    if (t.checkParenting(), t.data.tt)
                        for (var e = 0, r = this.elements.length; e < r;) {
                            if (this.elements[e] === t) {
                                var i = "tp" in t.data ? this.findIndexByInd(t.data.tp) : e - 1,
                                    a = this.elements[i].getMatte(this.layers[e].tt);
                                t.setMatte(a);
                                break
                            }
                            e += 1
                        }
                }
            }, SVGRendererBase.prototype.renderFrame = function(t) {
                if (this.renderedFrame !== t && !this.destroyed) {
                    var e;
                    t === null ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1;
                    var r = this.layers.length;
                    for (this.completeLayers || this.checkLayers(t), e = r - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
                    if (this.globalData._mdf)
                        for (e = 0; e < r; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
                }
            }, SVGRendererBase.prototype.appendElementInPos = function(t, e) {
                var r = t.getBaseElement();
                if (r) {
                    for (var i, a = 0; a < e;) this.elements[a] && this.elements[a] !== !0 && this.elements[a].getBaseElement() && (i = this.elements[a].getBaseElement()), a += 1;
                    i ? this.layerElement.insertBefore(r, i) : this.layerElement.appendChild(r)
                }
            }, SVGRendererBase.prototype.hide = function() {
                this.layerElement.style.display = "none"
            }, SVGRendererBase.prototype.show = function() {
                this.layerElement.style.display = "block"
            }, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function(t, e, r) {
                this.initFrame(), this.initBaseData(t, e, r), this.initTransform(t, e, r), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && e.progressiveLoad || this.buildAllItems(), this.hide()
            }, ICompElement.prototype.prepareFrame = function(t) {
                if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.isInRange || this.data.xt) {
                    if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
                    else {
                        var e = this.tm.v;
                        e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e
                    }
                    var r, i = this.elements.length;
                    for (this.completeLayers || this.checkLayers(this.renderedFrame), r = i - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && (this.elements[r].prepareFrame(this.renderedFrame - this.layers[r].st), this.elements[r]._mdf && (this._mdf = !0))
                }
            }, ICompElement.prototype.renderInnerContent = function() {
                var t, e = this.layers.length;
                for (t = 0; t < e; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
            }, ICompElement.prototype.setElements = function(t) {
                this.elements = t
            }, ICompElement.prototype.getElements = function() {
                return this.elements
            }, ICompElement.prototype.destroyElements = function() {
                var t, e = this.layers.length;
                for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy()
            }, ICompElement.prototype.destroy = function() {
                this.destroyElements(), this.destroyBaseElement()
            }, extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement), SVGCompElement.prototype.createComp = function(t) {
                return new SVGCompElement(t, this.globalData, this)
            }, extendPrototype([SVGRendererBase], SVGRenderer), SVGRenderer.prototype.createComp = function(t) {
                return new SVGCompElement(t, this.globalData, this)
            }, CVContextData.prototype.duplicate = function() {
                var t = 2 * this._length,
                    e = this.savedOp;
                this.savedOp = createTypedArray("float32", t), this.savedOp.set(e);
                var r = 0;
                for (r = this._length; r < t; r += 1) this.saved[r] = createTypedArray("float32", 16);
                this._length = t
            }, CVContextData.prototype.reset = function() {
                this.cArrPos = 0, this.cTr.reset(), this.cO = 1
            }, CVContextData.prototype.popTransform = function() {
                var t, e = this.saved[this.cArrPos],
                    r = this.cTr.props;
                for (t = 0; t < 16; t += 1) r[t] = e[t];
                return e
            }, CVContextData.prototype.popOpacity = function() {
                var t = this.savedOp[this.cArrPos];
                return this.cO = t, t
            }, CVContextData.prototype.pop = function() {
                return this.cArrPos -= 1, {
                    transform: this.popTransform(),
                    opacity: this.popOpacity()
                }
            }, CVContextData.prototype.push = function() {
                var t, e = this.cTr.props;
                this._length <= this.cArrPos && this.duplicate();
                var r = this.saved[this.cArrPos];
                for (t = 0; t < 16; t += 1) r[t] = e[t];
                this.savedOp[this.cArrPos] = this.cO, this.cArrPos += 1
            }, CVContextData.prototype.getTransform = function() {
                return this.cTr
            }, CVContextData.prototype.getOpacity = function() {
                return this.cO
            }, CVContextData.prototype.setOpacity = function(t) {
                this.cO = t
            }, ShapeTransformManager.prototype = {
                addTransformSequence: function(t) {
                    var e, r = t.length,
                        i = "_";
                    for (e = 0; e < r; e += 1) i += t[e].transform.key + "_";
                    var a = this.sequences[i];
                    return a || (a = {
                        transforms: [].concat(t),
                        finalTransform: new Matrix,
                        _mdf: !1
                    }, this.sequences[i] = a, this.sequenceList.push(a)), a
                },
                processSequence: function(t, e) {
                    for (var r, i = 0, a = t.transforms.length, s = e; i < a && !e;) {
                        if (t.transforms[i].transform.mProps._mdf) {
                            s = !0;
                            break
                        }
                        i += 1
                    }
                    if (s)
                        for (t.finalTransform.reset(), i = a - 1; i >= 0; i -= 1) r = t.transforms[i].transform.mProps.v.props, t.finalTransform.transform(r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7], r[8], r[9], r[10], r[11], r[12], r[13], r[14], r[15]);
                    t._mdf = s
                },
                processSequences: function(t) {
                    var e, r = this.sequenceList.length;
                    for (e = 0; e < r; e += 1) this.processSequence(this.sequenceList[e], t)
                },
                getNewKey: function() {
                    return this.transform_key_count += 1, "_" + this.transform_key_count
                }
            };
            var lumaLoader = function() {
                var t = "__lottie_element_luma_buffer",
                    e = null,
                    r = null,
                    i = null;

                function a() {
                    var s, f, o;
                    e || (s = createNS("svg"), f = createNS("filter"), o = createNS("feColorMatrix"), f.setAttribute("id", t), o.setAttribute("type", "matrix"), o.setAttribute("color-interpolation-filters", "sRGB"), o.setAttribute("values", "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"), f.appendChild(o), s.appendChild(f), s.setAttribute("id", t + "_svg"), featureSupport.svgLumaHidden && (s.style.display = "none"), i = s, document.body.appendChild(i), e = createTag("canvas"), (r = e.getContext("2d")).filter = "url(#" + t + ")", r.fillStyle = "rgba(0,0,0,0)", r.fillRect(0, 0, 1, 1))
                }
                return {
                    load: a,
                    get: function(s) {
                        return e || a(), e.width = s.width, e.height = s.height, r.filter = "url(#" + t + ")", e
                    }
                }
            };

            function createCanvas(t, e) {
                if (featureSupport.offscreenCanvas) return new OffscreenCanvas(t, e);
                var r = createTag("canvas");
                return r.width = t, r.height = e, r
            }
            var assetLoader = {
                loadLumaCanvas: lumaLoader.load,
                getLumaCanvas: lumaLoader.get,
                createCanvas
            };

            function CVEffects() {}

            function CVMaskElement(t, e) {
                var r;
                this.data = t, this.element = e, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
                var i = this.masksProperties.length,
                    a = !1;
                for (r = 0; r < i; r += 1) this.masksProperties[r].mode !== "n" && (a = !0), this.viewData[r] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[r], 3);
                this.hasMasks = a, a && this.element.addRenderableComponent(this)
            }

            function CVBaseElement() {}
            CVEffects.prototype.renderFrame = function() {}, CVMaskElement.prototype.renderFrame = function() {
                if (this.hasMasks) {
                    var t, e, r, i, a = this.element.finalTransform.mat,
                        s = this.element.canvasContext,
                        f = this.masksProperties.length;
                    for (s.beginPath(), t = 0; t < f; t += 1)
                        if (this.masksProperties[t].mode !== "n") {
                            var o;
                            this.masksProperties[t].inv && (s.moveTo(0, 0), s.lineTo(this.element.globalData.compSize.w, 0), s.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), s.lineTo(0, this.element.globalData.compSize.h), s.lineTo(0, 0)), i = this.viewData[t].v, e = a.applyToPointArray(i.v[0][0], i.v[0][1], 0), s.moveTo(e[0], e[1]);
                            var g = i._length;
                            for (o = 1; o < g; o += 1) r = a.applyToTriplePoints(i.o[o - 1], i.i[o], i.v[o]), s.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
                            r = a.applyToTriplePoints(i.o[o - 1], i.i[0], i.v[0]), s.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5])
                        }
                    this.element.globalData.renderer.save(!0), s.clip()
                }
            }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() {
                this.element = null
            };
            var operationsMap = {
                1: "source-in",
                2: "source-out",
                3: "source-in",
                4: "source-out"
            };

            function CVShapeData(t, e, r, i) {
                this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
                var a, s = 4;
                e.ty === "rc" ? s = 5 : e.ty === "el" ? s = 6 : e.ty === "sr" && (s = 7), this.sh = ShapePropertyFactory.getShapeProp(t, e, s, t);
                var f, o = r.length;
                for (a = 0; a < o; a += 1) r[a].closed || (f = {
                    transforms: i.addTransformSequence(r[a].transforms),
                    trNodes: []
                }, this.styledShapes.push(f), r[a].elements.push(f))
            }

            function CVShapeElement(t, e, r) {
                this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(t, e, r)
            }

            function CVTextElement(t, e, r) {
                this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
                    fill: "rgba(0,0,0,0)",
                    stroke: "rgba(0,0,0,0)",
                    sWidth: 0,
                    fValue: ""
                }, this.initElement(t, e, r)
            }

            function CVImageElement(t, e, r) {
                this.assetData = e.getAssetData(t.refId), this.img = e.imageLoader.getAsset(this.assetData), this.initElement(t, e, r)
            }

            function CVSolidElement(t, e, r) {
                this.initElement(t, e, r)
            }

            function CanvasRendererBase(t, e) {
                this.animationItem = t, this.renderConfig = {
                    clearCanvas: !e || e.clearCanvas === void 0 || e.clearCanvas,
                    context: e && e.context || null,
                    progressiveLoad: e && e.progressiveLoad || !1,
                    preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                    imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                    contentVisibility: e && e.contentVisibility || "visible",
                    className: e && e.className || "",
                    id: e && e.id || ""
                }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
                    frameNum: -1,
                    _mdf: !1,
                    renderConfig: this.renderConfig,
                    currentGlobalAlpha: -1
                }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas"
            }

            function CVCompElement(t, e, r) {
                this.completeLayers = !1, this.layers = t.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                    _placeholder: !0
                }
            }

            function CanvasRenderer(t, e) {
                this.animationItem = t, this.renderConfig = {
                    clearCanvas: !e || e.clearCanvas === void 0 || e.clearCanvas,
                    context: e && e.context || null,
                    progressiveLoad: e && e.progressiveLoad || !1,
                    preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                    imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                    contentVisibility: e && e.contentVisibility || "visible",
                    className: e && e.className || "",
                    id: e && e.id || "",
                    runExpressions: !e || e.runExpressions === void 0 || e.runExpressions
                }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
                    frameNum: -1,
                    _mdf: !1,
                    renderConfig: this.renderConfig,
                    currentGlobalAlpha: -1
                }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas"
            }

            function HBaseElement() {}

            function HSolidElement(t, e, r) {
                this.initElement(t, e, r)
            }

            function HShapeElement(t, e, r) {
                this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(t, e, r), this.prevViewData = [], this.currentBBox = {
                    x: 999999,
                    y: -999999,
                    h: 0,
                    w: 0
                }
            }

            function HTextElement(t, e, r) {
                this.textSpans = [], this.textPaths = [], this.currentBBox = {
                    x: 999999,
                    y: -999999,
                    h: 0,
                    w: 0
                }, this.renderType = "svg", this.isMasked = !1, this.initElement(t, e, r)
            }

            function HCameraElement(t, e, r) {
                this.initFrame(), this.initBaseData(t, e, r), this.initHierarchy();
                var i = PropertyFactory.getProp;
                if (this.pe = i(this, t.pe, 0, 0, this), t.ks.p.s ? (this.px = i(this, t.ks.p.x, 1, 0, this), this.py = i(this, t.ks.p.y, 1, 0, this), this.pz = i(this, t.ks.p.z, 1, 0, this)) : this.p = i(this, t.ks.p, 1, 0, this), t.ks.a && (this.a = i(this, t.ks.a, 1, 0, this)), t.ks.or.k.length && t.ks.or.k[0].to) {
                    var a, s = t.ks.or.k.length;
                    for (a = 0; a < s; a += 1) t.ks.or.k[a].to = null, t.ks.or.k[a].ti = null
                }
                this.or = i(this, t.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = i(this, t.ks.rx, 0, degToRads, this), this.ry = i(this, t.ks.ry, 0, degToRads, this), this.rz = i(this, t.ks.rz, 0, degToRads, this), this.mat = new Matrix, this._prevMat = new Matrix, this._isFirstFrame = !0, this.finalTransform = {
                    mProp: this
                }
            }

            function HImageElement(t, e, r) {
                this.assetData = e.getAssetData(t.refId), this.initElement(t, e, r)
            }

            function HybridRendererBase(t, e) {
                this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
                    className: e && e.className || "",
                    imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                    hideOnTransparent: !(e && e.hideOnTransparent === !1),
                    filterSize: {
                        width: e && e.filterSize && e.filterSize.width || "400%",
                        height: e && e.filterSize && e.filterSize.height || "400%",
                        x: e && e.filterSize && e.filterSize.x || "-100%",
                        y: e && e.filterSize && e.filterSize.y || "-100%"
                    }
                }, this.globalData = {
                    _mdf: !1,
                    frameNum: -1,
                    renderConfig: this.renderConfig
                }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
            }

            function HCompElement(t, e, r) {
                this.layers = t.layers, this.supports3d = !t.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                    _placeholder: !0
                }
            }

            function HybridRenderer(t, e) {
                this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
                    className: e && e.className || "",
                    imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                    hideOnTransparent: !(e && e.hideOnTransparent === !1),
                    filterSize: {
                        width: e && e.filterSize && e.filterSize.width || "400%",
                        height: e && e.filterSize && e.filterSize.height || "400%",
                        x: e && e.filterSize && e.filterSize.x || "-100%",
                        y: e && e.filterSize && e.filterSize.y || "-100%"
                    },
                    runExpressions: !e || e.runExpressions === void 0 || e.runExpressions
                }, this.globalData = {
                    _mdf: !1,
                    frameNum: -1,
                    renderConfig: this.renderConfig
                }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
            }
            CVBaseElement.prototype = {
                createElements: function() {},
                initRendererElement: function() {},
                createContainerElements: function() {
                    if (this.data.tt >= 1) {
                        this.buffers = [];
                        var t = this.globalData.canvasContext,
                            e = assetLoader.createCanvas(t.canvas.width, t.canvas.height);
                        this.buffers.push(e);
                        var r = assetLoader.createCanvas(t.canvas.width, t.canvas.height);
                        this.buffers.push(r), this.data.tt >= 3 && !document._isProxy && assetLoader.loadLumaCanvas()
                    }
                    this.canvasContext = this.globalData.canvasContext, this.transformCanvas = this.globalData.transformCanvas, this.renderableEffectsManager = new CVEffects
                },
                createContent: function() {},
                setBlendMode: function() {
                    var t = this.globalData;
                    if (t.blendMode !== this.data.bm) {
                        t.blendMode = this.data.bm;
                        var e = getBlendMode(this.data.bm);
                        t.canvasContext.globalCompositeOperation = e
                    }
                },
                createRenderableComponents: function() {
                    this.maskManager = new CVMaskElement(this.data, this)
                },
                hideElement: function() {
                    this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0)
                },
                showElement: function() {
                    this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0)
                },
                clearCanvas: function(t) {
                    t.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy)
                },
                prepareLayer: function() {
                    if (this.data.tt >= 1) {
                        var t = this.buffers[0].getContext("2d");
                        this.clearCanvas(t), t.drawImage(this.canvasContext.canvas, 0, 0), this.currentTransform = this.canvasContext.getTransform(), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform)
                    }
                },
                exitLayer: function() {
                    if (this.data.tt >= 1) {
                        var t = this.buffers[1],
                            e = t.getContext("2d");
                        if (this.clearCanvas(e), e.drawImage(this.canvasContext.canvas, 0, 0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform), this.comp.getElementById("tp" in this.data ? this.data.tp : this.data.ind - 1).renderFrame(!0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.data.tt >= 3 && !document._isProxy) {
                            var r = assetLoader.getLumaCanvas(this.canvasContext.canvas);
                            r.getContext("2d").drawImage(this.canvasContext.canvas, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.drawImage(r, 0, 0)
                        }
                        this.canvasContext.globalCompositeOperation = operationsMap[this.data.tt], this.canvasContext.drawImage(t, 0, 0), this.canvasContext.globalCompositeOperation = "destination-over", this.canvasContext.drawImage(this.buffers[0], 0, 0), this.canvasContext.setTransform(this.currentTransform), this.canvasContext.globalCompositeOperation = "source-over"
                    }
                },
                renderFrame: function(t) {
                    if (!this.hidden && !this.data.hd && (this.data.td !== 1 || t)) {
                        this.renderTransform(), this.renderRenderable(), this.setBlendMode();
                        var e = this.data.ty === 0;
                        this.prepareLayer(), this.globalData.renderer.save(e), this.globalData.renderer.ctxTransform(this.finalTransform.mat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v), this.renderInnerContent(), this.globalData.renderer.restore(e), this.exitLayer(), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1)
                    }
                },
                destroy: function() {
                    this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy()
                },
                mHelper: new Matrix
            }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = {
                opacity: 1,
                _opMdf: !1
            }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() {
                this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, [])
            }, CVShapeElement.prototype.createStyleElement = function(t, e) {
                var r = {
                        data: t,
                        type: t.ty,
                        preTransforms: this.transformsManager.addTransformSequence(e),
                        transforms: [],
                        elements: [],
                        closed: t.hd === !0
                    },
                    i = {};
                if (t.ty === "fl" || t.ty === "st" ? (i.c = PropertyFactory.getProp(this, t.c, 1, 255, this), i.c.k || (r.co = "rgb(" + bmFloor(i.c.v[0]) + "," + bmFloor(i.c.v[1]) + "," + bmFloor(i.c.v[2]) + ")")) : t.ty !== "gf" && t.ty !== "gs" || (i.s = PropertyFactory.getProp(this, t.s, 1, null, this), i.e = PropertyFactory.getProp(this, t.e, 1, null, this), i.h = PropertyFactory.getProp(this, t.h || {
                        k: 0
                    }, 0, .01, this), i.a = PropertyFactory.getProp(this, t.a || {
                        k: 0
                    }, 0, degToRads, this), i.g = new GradientProperty(this, t.g, this)), i.o = PropertyFactory.getProp(this, t.o, 0, .01, this), t.ty === "st" || t.ty === "gs") {
                    if (r.lc = lineCapEnum[t.lc || 2], r.lj = lineJoinEnum[t.lj || 2], t.lj == 1 && (r.ml = t.ml), i.w = PropertyFactory.getProp(this, t.w, 0, null, this), i.w.k || (r.wi = i.w.v), t.d) {
                        var a = new DashProperty(this, t.d, "canvas", this);
                        i.d = a, i.d.k || (r.da = i.d.dashArray, r.do = i.d.dashoffset[0])
                    }
                } else r.r = t.r === 2 ? "evenodd" : "nonzero";
                return this.stylesList.push(r), i.style = r, i
            }, CVShapeElement.prototype.createGroupElement = function() {
                return {
                    it: [],
                    prevViewData: []
                }
            }, CVShapeElement.prototype.createTransformElement = function(t) {
                return {
                    transform: {
                        opacity: 1,
                        _opMdf: !1,
                        key: this.transformsManager.getNewKey(),
                        op: PropertyFactory.getProp(this, t.o, 0, .01, this),
                        mProps: TransformPropertyFactory.getTransformProperty(this, t, this)
                    }
                }
            }, CVShapeElement.prototype.createShapeElement = function(t) {
                var e = new CVShapeData(this, t, this.stylesList, this.transformsManager);
                return this.shapes.push(e), this.addShapeToModifiers(e), e
            }, CVShapeElement.prototype.reloadShapes = function() {
                var t;
                this._isFirstFrame = !0;
                var e = this.itemsData.length;
                for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
                for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
                this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame)
            }, CVShapeElement.prototype.addTransformToStyleList = function(t) {
                var e, r = this.stylesList.length;
                for (e = 0; e < r; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.push(t)
            }, CVShapeElement.prototype.removeTransformFromStyleList = function() {
                var t, e = this.stylesList.length;
                for (t = 0; t < e; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.pop()
            }, CVShapeElement.prototype.closeStyles = function(t) {
                var e, r = t.length;
                for (e = 0; e < r; e += 1) t[e].closed = !0
            }, CVShapeElement.prototype.searchShapes = function(t, e, r, i, a) {
                var s, f, o, g, c, l, m = t.length - 1,
                    u = [],
                    h = [],
                    p = [].concat(a);
                for (s = m; s >= 0; s -= 1) {
                    if ((g = this.searchProcessedElement(t[s])) ? e[s] = r[g - 1] : t[s]._shouldRender = i, t[s].ty === "fl" || t[s].ty === "st" || t[s].ty === "gf" || t[s].ty === "gs") g ? e[s].style.closed = !1 : e[s] = this.createStyleElement(t[s], p), u.push(e[s].style);
                    else if (t[s].ty === "gr") {
                        if (g)
                            for (o = e[s].it.length, f = 0; f < o; f += 1) e[s].prevViewData[f] = e[s].it[f];
                        else e[s] = this.createGroupElement(t[s]);
                        this.searchShapes(t[s].it, e[s].it, e[s].prevViewData, i, p)
                    } else t[s].ty === "tr" ? (g || (l = this.createTransformElement(t[s]), e[s] = l), p.push(e[s]), this.addTransformToStyleList(e[s])) : t[s].ty === "sh" || t[s].ty === "rc" || t[s].ty === "el" || t[s].ty === "sr" ? g || (e[s] = this.createShapeElement(t[s])) : t[s].ty === "tm" || t[s].ty === "rd" || t[s].ty === "pb" || t[s].ty === "zz" || t[s].ty === "op" ? (g ? (c = e[s]).closed = !1 : ((c = ShapeModifiers.getModifier(t[s].ty)).init(this, t[s]), e[s] = c, this.shapeModifiers.push(c)), h.push(c)) : t[s].ty === "rp" && (g ? (c = e[s]).closed = !0 : (c = ShapeModifiers.getModifier(t[s].ty), e[s] = c, c.init(this, t, s, e), this.shapeModifiers.push(c), i = !1), h.push(c));
                    this.addProcessedElement(t[s], s + 1)
                }
                for (this.removeTransformFromStyleList(), this.closeStyles(u), m = h.length, s = 0; s < m; s += 1) h[s].closed = !0
            }, CVShapeElement.prototype.renderInnerContent = function() {
                this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
            }, CVShapeElement.prototype.renderShapeTransform = function(t, e) {
                (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, e._opMdf = !0)
            }, CVShapeElement.prototype.drawLayer = function() {
                var t, e, r, i, a, s, f, o, g, c = this.stylesList.length,
                    l = this.globalData.renderer,
                    m = this.globalData.canvasContext;
                for (t = 0; t < c; t += 1)
                    if (((o = (g = this.stylesList[t]).type) !== "st" && o !== "gs" || g.wi !== 0) && g.data._shouldRender && g.coOp !== 0 && this.globalData.currentGlobalAlpha !== 0) {
                        for (l.save(), s = g.elements, o === "st" || o === "gs" ? (m.strokeStyle = o === "st" ? g.co : g.grd, m.lineWidth = g.wi, m.lineCap = g.lc, m.lineJoin = g.lj, m.miterLimit = g.ml || 0) : m.fillStyle = o === "fl" ? g.co : g.grd, l.ctxOpacity(g.coOp), o !== "st" && o !== "gs" && m.beginPath(), l.ctxTransform(g.preTransforms.finalTransform.props), r = s.length, e = 0; e < r; e += 1) {
                            for (o !== "st" && o !== "gs" || (m.beginPath(), g.da && (m.setLineDash(g.da), m.lineDashOffset = g.do)), a = (f = s[e].trNodes).length, i = 0; i < a; i += 1) f[i].t === "m" ? m.moveTo(f[i].p[0], f[i].p[1]) : f[i].t === "c" ? m.bezierCurveTo(f[i].pts[0], f[i].pts[1], f[i].pts[2], f[i].pts[3], f[i].pts[4], f[i].pts[5]) : m.closePath();
                            o !== "st" && o !== "gs" || (m.stroke(), g.da && m.setLineDash(this.dashResetter))
                        }
                        o !== "st" && o !== "gs" && m.fill(g.r), l.restore()
                    }
            }, CVShapeElement.prototype.renderShape = function(t, e, r, i) {
                var a, s;
                for (s = t, a = e.length - 1; a >= 0; a -= 1) e[a].ty === "tr" ? (s = r[a].transform, this.renderShapeTransform(t, s)) : e[a].ty === "sh" || e[a].ty === "el" || e[a].ty === "rc" || e[a].ty === "sr" ? this.renderPath(e[a], r[a]) : e[a].ty === "fl" ? this.renderFill(e[a], r[a], s) : e[a].ty === "st" ? this.renderStroke(e[a], r[a], s) : e[a].ty === "gf" || e[a].ty === "gs" ? this.renderGradientFill(e[a], r[a], s) : e[a].ty === "gr" ? this.renderShape(s, e[a].it, r[a].it) : e[a].ty;
                i && this.drawLayer()
            }, CVShapeElement.prototype.renderStyledShape = function(t, e) {
                if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
                    var r, i, a, s = t.trNodes,
                        f = e.paths,
                        o = f._length;
                    s.length = 0;
                    var g = t.transforms.finalTransform;
                    for (a = 0; a < o; a += 1) {
                        var c = f.shapes[a];
                        if (c && c.v) {
                            for (i = c._length, r = 1; r < i; r += 1) r === 1 && s.push({
                                t: "m",
                                p: g.applyToPointArray(c.v[0][0], c.v[0][1], 0)
                            }), s.push({
                                t: "c",
                                pts: g.applyToTriplePoints(c.o[r - 1], c.i[r], c.v[r])
                            });
                            i === 1 && s.push({
                                t: "m",
                                p: g.applyToPointArray(c.v[0][0], c.v[0][1], 0)
                            }), c.c && i && (s.push({
                                t: "c",
                                pts: g.applyToTriplePoints(c.o[r - 1], c.i[0], c.v[0])
                            }), s.push({
                                t: "z"
                            }))
                        }
                    }
                    t.trNodes = s
                }
            }, CVShapeElement.prototype.renderPath = function(t, e) {
                if (t.hd !== !0 && t._shouldRender) {
                    var r, i = e.styledShapes.length;
                    for (r = 0; r < i; r += 1) this.renderStyledShape(e.styledShapes[r], e.sh)
                }
            }, CVShapeElement.prototype.renderFill = function(t, e, r) {
                var i = e.style;
                (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * r.opacity)
            }, CVShapeElement.prototype.renderGradientFill = function(t, e, r) {
                var i, a = e.style;
                if (!a.grd || e.g._mdf || e.s._mdf || e.e._mdf || t.t !== 1 && (e.h._mdf || e.a._mdf)) {
                    var s, f = this.globalData.canvasContext,
                        o = e.s.v,
                        g = e.e.v;
                    if (t.t === 1) i = f.createLinearGradient(o[0], o[1], g[0], g[1]);
                    else {
                        var c = Math.sqrt(Math.pow(o[0] - g[0], 2) + Math.pow(o[1] - g[1], 2)),
                            l = Math.atan2(g[1] - o[1], g[0] - o[0]),
                            m = e.h.v;
                        m >= 1 ? m = .99 : m <= -1 && (m = -.99);
                        var u = c * m,
                            h = Math.cos(l + e.a.v) * u + o[0],
                            p = Math.sin(l + e.a.v) * u + o[1];
                        i = f.createRadialGradient(h, p, 0, o[0], o[1], c)
                    }
                    var d = t.g.p,
                        n = e.g.c,
                        y = 1;
                    for (s = 0; s < d; s += 1) e.g._hasOpacity && e.g._collapsable && (y = e.g.o[2 * s + 1]), i.addColorStop(n[4 * s] / 100, "rgba(" + n[4 * s + 1] + "," + n[4 * s + 2] + "," + n[4 * s + 3] + "," + y + ")");
                    a.grd = i
                }
                a.coOp = e.o.v * r.opacity
            }, CVShapeElement.prototype.renderStroke = function(t, e, r) {
                var i = e.style,
                    a = e.d;
                a && (a._mdf || this._isFirstFrame) && (i.da = a.dashArray, i.do = a.dashoffset[0]), (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * r.opacity), (e.w._mdf || this._isFirstFrame) && (i.wi = e.w.v)
            }, CVShapeElement.prototype.destroy = function() {
                this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0
            }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
                var t = this.textProperty.currentData;
                this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
                var e = !1;
                t.fc ? (e = !0, this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = e;
                var r = !1;
                t.sc && (r = !0, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw);
                var i, a, s, f, o, g, c, l, m, u, h, p, d = this.globalData.fontManager.getFontByName(t.f),
                    n = t.l,
                    y = this.mHelper;
                this.stroke = r, this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, a = t.finalText.length;
                var v = this.data.singleShape,
                    b = .001 * t.tr * t.finalSize,
                    x = 0,
                    S = 0,
                    k = !0,
                    _ = 0;
                for (i = 0; i < a; i += 1) {
                    f = (s = this.globalData.fontManager.getCharData(t.finalText[i], d.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) && s.data || {}, y.reset(), v && n[i].n && (x = -b, S += t.yOffset, S += k ? 1 : 0, k = !1), m = (c = f.shapes ? f.shapes[0].it : []).length, y.scale(t.finalSize / 100, t.finalSize / 100), v && this.applyTextPropertiesToMatrix(t, y, n[i].line, x, S), h = createSizedArray(m - 1);
                    var A = 0;
                    for (l = 0; l < m; l += 1)
                        if (c[l].ty === "sh") {
                            for (g = c[l].ks.k.i.length, u = c[l].ks.k, p = [], o = 1; o < g; o += 1) o === 1 && p.push(y.applyToX(u.v[0][0], u.v[0][1], 0), y.applyToY(u.v[0][0], u.v[0][1], 0)), p.push(y.applyToX(u.o[o - 1][0], u.o[o - 1][1], 0), y.applyToY(u.o[o - 1][0], u.o[o - 1][1], 0), y.applyToX(u.i[o][0], u.i[o][1], 0), y.applyToY(u.i[o][0], u.i[o][1], 0), y.applyToX(u.v[o][0], u.v[o][1], 0), y.applyToY(u.v[o][0], u.v[o][1], 0));
                            p.push(y.applyToX(u.o[o - 1][0], u.o[o - 1][1], 0), y.applyToY(u.o[o - 1][0], u.o[o - 1][1], 0), y.applyToX(u.i[0][0], u.i[0][1], 0), y.applyToY(u.i[0][0], u.i[0][1], 0), y.applyToX(u.v[0][0], u.v[0][1], 0), y.applyToY(u.v[0][0], u.v[0][1], 0)), h[A] = p, A += 1
                        }
                    v && (x += n[i].l, x += b), this.textSpans[_] ? this.textSpans[_].elem = h : this.textSpans[_] = {
                        elem: h
                    }, _ += 1
                }
            }, CVTextElement.prototype.renderInnerContent = function() {
                var t, e, r, i, a, s, f = this.canvasContext;
                f.font = this.values.fValue, f.lineCap = "butt", f.lineJoin = "miter", f.miterLimit = 4, this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
                var o, g = this.textAnimator.renderedLetters,
                    c = this.textProperty.currentData.l;
                e = c.length;
                var l, m, u = null,
                    h = null,
                    p = null;
                for (t = 0; t < e; t += 1)
                    if (!c[t].n) {
                        if ((o = g[t]) && (this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(o.p), this.globalData.renderer.ctxOpacity(o.o)), this.fill) {
                            for (o && o.fc ? u !== o.fc && (u = o.fc, f.fillStyle = o.fc) : u !== this.values.fill && (u = this.values.fill, f.fillStyle = this.values.fill), i = (l = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < i; r += 1)
                                for (s = (m = l[r]).length, this.globalData.canvasContext.moveTo(m[0], m[1]), a = 2; a < s; a += 6) this.globalData.canvasContext.bezierCurveTo(m[a], m[a + 1], m[a + 2], m[a + 3], m[a + 4], m[a + 5]);
                            this.globalData.canvasContext.closePath(), this.globalData.canvasContext.fill()
                        }
                        if (this.stroke) {
                            for (o && o.sw ? p !== o.sw && (p = o.sw, f.lineWidth = o.sw) : p !== this.values.sWidth && (p = this.values.sWidth, f.lineWidth = this.values.sWidth), o && o.sc ? h !== o.sc && (h = o.sc, f.strokeStyle = o.sc) : h !== this.values.stroke && (h = this.values.stroke, f.strokeStyle = this.values.stroke), i = (l = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < i; r += 1)
                                for (s = (m = l[r]).length, this.globalData.canvasContext.moveTo(m[0], m[1]), a = 2; a < s; a += 6) this.globalData.canvasContext.bezierCurveTo(m[a], m[a + 1], m[a + 2], m[a + 3], m[a + 4], m[a + 5]);
                            this.globalData.canvasContext.closePath(), this.globalData.canvasContext.stroke()
                        }
                        o && this.globalData.renderer.restore()
                    }
            }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
                if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
                    var t = createTag("canvas");
                    t.width = this.assetData.w, t.height = this.assetData.h;
                    var e, r, i = t.getContext("2d"),
                        a = this.img.width,
                        s = this.img.height,
                        f = a / s,
                        o = this.assetData.w / this.assetData.h,
                        g = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
                    f > o && g === "xMidYMid slice" || f < o && g !== "xMidYMid slice" ? e = (r = s) * o : r = (e = a) / o, i.drawImage(this.img, (a - e) / 2, (s - r) / 2, e, r, 0, 0, this.assetData.w, this.assetData.h), this.img = t
                }
            }, CVImageElement.prototype.renderInnerContent = function() {
                this.canvasContext.drawImage(this.img, 0, 0)
            }, CVImageElement.prototype.destroy = function() {
                this.img = null
            }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() {
                var t = this.canvasContext;
                t.fillStyle = this.data.sc, t.fillRect(0, 0, this.data.sw, this.data.sh)
            }, extendPrototype([BaseRenderer], CanvasRendererBase), CanvasRendererBase.prototype.createShape = function(t) {
                return new CVShapeElement(t, this.globalData, this)
            }, CanvasRendererBase.prototype.createText = function(t) {
                return new CVTextElement(t, this.globalData, this)
            }, CanvasRendererBase.prototype.createImage = function(t) {
                return new CVImageElement(t, this.globalData, this)
            }, CanvasRendererBase.prototype.createSolid = function(t) {
                return new CVSolidElement(t, this.globalData, this)
            }, CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRendererBase.prototype.ctxTransform = function(t) {
                if (t[0] !== 1 || t[1] !== 0 || t[4] !== 0 || t[5] !== 1 || t[12] !== 0 || t[13] !== 0)
                    if (this.renderConfig.clearCanvas) {
                        this.transformMat.cloneFromProps(t);
                        var e = this.contextData.getTransform(),
                            r = e.props;
                        this.transformMat.transform(r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7], r[8], r[9], r[10], r[11], r[12], r[13], r[14], r[15]), e.cloneFromProps(this.transformMat.props);
                        var i = e.props;
                        this.canvasContext.setTransform(i[0], i[1], i[4], i[5], i[12], i[13])
                    } else this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13])
            }, CanvasRendererBase.prototype.ctxOpacity = function(t) {
                var e = this.contextData.getOpacity();
                if (!this.renderConfig.clearCanvas) return this.canvasContext.globalAlpha *= t < 0 ? 0 : t, void(this.globalData.currentGlobalAlpha = e);
                e *= t < 0 ? 0 : t, this.contextData.setOpacity(e), this.globalData.currentGlobalAlpha !== e && (this.canvasContext.globalAlpha = e, this.globalData.currentGlobalAlpha = e)
            }, CanvasRendererBase.prototype.reset = function() {
                this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore()
            }, CanvasRendererBase.prototype.save = function(t) {
                this.renderConfig.clearCanvas ? (t && this.canvasContext.save(), this.contextData.push()) : this.canvasContext.save()
            }, CanvasRendererBase.prototype.restore = function(t) {
                if (this.renderConfig.clearCanvas) {
                    t && (this.canvasContext.restore(), this.globalData.blendMode = "source-over");
                    var e = this.contextData.pop(),
                        r = e.transform,
                        i = e.opacity;
                    this.canvasContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]), this.globalData.currentGlobalAlpha !== i && (this.canvasContext.globalAlpha = i, this.globalData.currentGlobalAlpha = i)
                } else this.canvasContext.restore()
            }, CanvasRendererBase.prototype.configAnimation = function(t) {
                if (this.animationItem.wrapper) {
                    this.animationItem.container = createTag("canvas");
                    var e = this.animationItem.container.style;
                    e.width = "100%", e.height = "100%";
                    var r = "0px 0px 0px";
                    e.transformOrigin = r, e.mozTransformOrigin = r, e.webkitTransformOrigin = r, e["-webkit-transform"] = r, e.contentVisibility = this.renderConfig.contentVisibility, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id)
                } else this.canvasContext = this.renderConfig.context;
                this.data = t, this.layers = t.layers, this.transformCanvas = {
                    w: t.w,
                    h: t.h,
                    sx: 0,
                    sy: 0,
                    tx: 0,
                    ty: 0
                }, this.setupGlobalData(t, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(t.layers.length), this.updateContainerSize()
            }, CanvasRendererBase.prototype.updateContainerSize = function(t, e) {
                var r, i, a, s;
                if (this.reset(), t ? (r = t, i = e, this.canvasContext.canvas.width = r, this.canvasContext.canvas.height = i) : (this.animationItem.wrapper && this.animationItem.container ? (r = this.animationItem.wrapper.offsetWidth, i = this.animationItem.wrapper.offsetHeight) : (r = this.canvasContext.canvas.width, i = this.canvasContext.canvas.height), this.canvasContext.canvas.width = r * this.renderConfig.dpr, this.canvasContext.canvas.height = i * this.renderConfig.dpr), this.renderConfig.preserveAspectRatio.indexOf("meet") !== -1 || this.renderConfig.preserveAspectRatio.indexOf("slice") !== -1) {
                    var f = this.renderConfig.preserveAspectRatio.split(" "),
                        o = f[1] || "meet",
                        g = f[0] || "xMidYMid",
                        c = g.substr(0, 4),
                        l = g.substr(4);
                    a = r / i, (s = this.transformCanvas.w / this.transformCanvas.h) > a && o === "meet" || s < a && o === "slice" ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = r / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = i / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = i / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = c === "xMid" && (s < a && o === "meet" || s > a && o === "slice") ? (r - this.transformCanvas.w * (i / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : c === "xMax" && (s < a && o === "meet" || s > a && o === "slice") ? (r - this.transformCanvas.w * (i / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = l === "YMid" && (s > a && o === "meet" || s < a && o === "slice") ? (i - this.transformCanvas.h * (r / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : l === "YMax" && (s > a && o === "meet" || s < a && o === "slice") ? (i - this.transformCanvas.h * (r / this.transformCanvas.w)) * this.renderConfig.dpr : 0
                } else this.renderConfig.preserveAspectRatio === "none" ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = i / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
                this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0)
            }, CanvasRendererBase.prototype.destroy = function() {
                var t;
                for (this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), t = (this.layers ? this.layers.length : 0) - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy();
                this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0
            }, CanvasRendererBase.prototype.renderFrame = function(t, e) {
                if ((this.renderedFrame !== t || this.renderConfig.clearCanvas !== !0 || e) && !this.destroyed && t !== -1) {
                    var r;
                    this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || e, this.globalData.projectInterface.currentFrame = t;
                    var i = this.layers.length;
                    for (this.completeLayers || this.checkLayers(t), r = 0; r < i; r += 1)(this.completeLayers || this.elements[r]) && this.elements[r].prepareFrame(t - this.layers[r].st);
                    if (this.globalData._mdf) {
                        for (this.renderConfig.clearCanvas === !0 ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), r = i - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && this.elements[r].renderFrame();
                        this.renderConfig.clearCanvas !== !0 && this.restore()
                    }
                }
            }, CanvasRendererBase.prototype.buildItem = function(t) {
                var e = this.elements;
                if (!e[t] && this.layers[t].ty !== 99) {
                    var r = this.createItem(this.layers[t], this, this.globalData);
                    e[t] = r, r.initExpressions()
                }
            }, CanvasRendererBase.prototype.checkPendingElements = function() {
                for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
            }, CanvasRendererBase.prototype.hide = function() {
                this.animationItem.container.style.display = "none"
            }, CanvasRendererBase.prototype.show = function() {
                this.animationItem.container.style.display = "block"
            }, extendPrototype([CanvasRendererBase, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function() {
                var t, e = this.canvasContext;
                for (e.beginPath(), e.moveTo(0, 0), e.lineTo(this.data.w, 0), e.lineTo(this.data.w, this.data.h), e.lineTo(0, this.data.h), e.lineTo(0, 0), e.clip(), t = this.layers.length - 1; t >= 0; t -= 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
            }, CVCompElement.prototype.destroy = function() {
                var t;
                for (t = this.layers.length - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy();
                this.layers = null, this.elements = null
            }, CVCompElement.prototype.createComp = function(t) {
                return new CVCompElement(t, this.globalData, this)
            }, extendPrototype([CanvasRendererBase], CanvasRenderer), CanvasRenderer.prototype.createComp = function(t) {
                return new CVCompElement(t, this.globalData, this)
            }, HBaseElement.prototype = {
                checkBlendMode: function() {},
                initRendererElement: function() {
                    this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement)
                },
                createContainerElements: function() {
                    this.renderableEffectsManager = new CVEffects, this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), this.data.bm !== 0 && this.setBlendMode()
                },
                renderElement: function() {
                    var t = this.transformedElement ? this.transformedElement.style : {};
                    if (this.finalTransform._matMdf) {
                        var e = this.finalTransform.mat.toCSS();
                        t.transform = e, t.webkitTransform = e
                    }
                    this.finalTransform._opMdf && (t.opacity = this.finalTransform.mProp.o.v)
                },
                renderFrame: function() {
                    this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
                },
                destroy: function() {
                    this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null)
                },
                createRenderableComponents: function() {
                    this.maskManager = new MaskElement(this.data, this, this.globalData)
                },
                addEffects: function() {},
                setMatte: function() {}
            }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = BaseRenderer.prototype.buildElementParenting, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function() {
                var t;
                this.data.hasMask ? ((t = createNS("rect")).setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((t = createTag("div")).style.width = this.data.sw + "px", t.style.height = this.data.sh + "px", t.style.backgroundColor = this.data.sc), this.layerElement.appendChild(t)
            }, extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() {
                var t;
                if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), t = this.svgElement;
                else {
                    t = createNS("svg");
                    var e = this.comp.data ? this.comp.data : this.globalData.compSize;
                    t.setAttribute("width", e.w), t.setAttribute("height", e.h), t.appendChild(this.shapesContainer), this.layerElement.appendChild(t)
                }
                this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = t
            }, HShapeElement.prototype.getTransformedPoint = function(t, e) {
                var r, i = t.length;
                for (r = 0; r < i; r += 1) e = t[r].mProps.v.applyToPointArray(e[0], e[1], 0);
                return e
            }, HShapeElement.prototype.calculateShapeBoundingBox = function(t, e) {
                var r, i, a, s, f, o = t.sh.v,
                    g = t.transformers,
                    c = o._length;
                if (!(c <= 1)) {
                    for (r = 0; r < c - 1; r += 1) i = this.getTransformedPoint(g, o.v[r]), a = this.getTransformedPoint(g, o.o[r]), s = this.getTransformedPoint(g, o.i[r + 1]), f = this.getTransformedPoint(g, o.v[r + 1]), this.checkBounds(i, a, s, f, e);
                    o.c && (i = this.getTransformedPoint(g, o.v[r]), a = this.getTransformedPoint(g, o.o[r]), s = this.getTransformedPoint(g, o.i[0]), f = this.getTransformedPoint(g, o.v[0]), this.checkBounds(i, a, s, f, e))
                }
            }, HShapeElement.prototype.checkBounds = function(t, e, r, i, a) {
                this.getBoundsOfCurve(t, e, r, i);
                var s = this.shapeBoundingBox;
                a.x = bmMin(s.left, a.x), a.xMax = bmMax(s.right, a.xMax), a.y = bmMin(s.top, a.y), a.yMax = bmMax(s.bottom, a.yMax)
            }, HShapeElement.prototype.shapeBoundingBox = {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }, HShapeElement.prototype.tempBoundingBox = {
                x: 0,
                xMax: 0,
                y: 0,
                yMax: 0,
                width: 0,
                height: 0
            }, HShapeElement.prototype.getBoundsOfCurve = function(t, e, r, i) {
                for (var a, s, f, o, g, c, l, m = [
                        [t[0], i[0]],
                        [t[1], i[1]]
                    ], u = 0; u < 2; ++u) s = 6 * t[u] - 12 * e[u] + 6 * r[u], a = -3 * t[u] + 9 * e[u] - 9 * r[u] + 3 * i[u], f = 3 * e[u] - 3 * t[u], s |= 0, f |= 0, (a |= 0) === 0 && s === 0 || (a === 0 ? (o = -f / s) > 0 && o < 1 && m[u].push(this.calculateF(o, t, e, r, i, u)) : (g = s * s - 4 * f * a) >= 0 && ((c = (-s + bmSqrt(g)) / (2 * a)) > 0 && c < 1 && m[u].push(this.calculateF(c, t, e, r, i, u)), (l = (-s - bmSqrt(g)) / (2 * a)) > 0 && l < 1 && m[u].push(this.calculateF(l, t, e, r, i, u))));
                this.shapeBoundingBox.left = bmMin.apply(null, m[0]), this.shapeBoundingBox.top = bmMin.apply(null, m[1]), this.shapeBoundingBox.right = bmMax.apply(null, m[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, m[1])
            }, HShapeElement.prototype.calculateF = function(t, e, r, i, a, s) {
                return bmPow(1 - t, 3) * e[s] + 3 * bmPow(1 - t, 2) * t * r[s] + 3 * (1 - t) * bmPow(t, 2) * i[s] + bmPow(t, 3) * a[s]
            }, HShapeElement.prototype.calculateBoundingBox = function(t, e) {
                var r, i = t.length;
                for (r = 0; r < i; r += 1) t[r] && t[r].sh ? this.calculateShapeBoundingBox(t[r], e) : t[r] && t[r].it ? this.calculateBoundingBox(t[r].it, e) : t[r] && t[r].style && t[r].w && this.expandStrokeBoundingBox(t[r].w, e)
            }, HShapeElement.prototype.expandStrokeBoundingBox = function(t, e) {
                var r = 0;
                if (t.keyframes) {
                    for (var i = 0; i < t.keyframes.length; i += 1) {
                        var a = t.keyframes[i].s;
                        a > r && (r = a)
                    }
                    r *= t.mult
                } else r = t.v * t.mult;
                e.x -= r, e.xMax += r, e.y -= r, e.yMax += r
            }, HShapeElement.prototype.currentBoxContains = function(t) {
                return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height
            }, HShapeElement.prototype.renderInnerContent = function() {
                if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
                    var t = this.tempBoundingBox,
                        e = 999999;
                    if (t.x = e, t.xMax = -e, t.y = e, t.yMax = -e, this.calculateBoundingBox(this.itemsData, t), t.width = t.xMax < t.x ? 0 : t.xMax - t.x, t.height = t.yMax < t.y ? 0 : t.yMax - t.y, this.currentBoxContains(t)) return;
                    var r = !1;
                    if (this.currentBBox.w !== t.width && (this.currentBBox.w = t.width, this.shapeCont.setAttribute("width", t.width), r = !0), this.currentBBox.h !== t.height && (this.currentBBox.h = t.height, this.shapeCont.setAttribute("height", t.height), r = !0), r || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y) {
                        this.currentBBox.w = t.width, this.currentBBox.h = t.height, this.currentBBox.x = t.x, this.currentBBox.y = t.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
                        var i = this.shapeCont.style,
                            a = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                        i.transform = a, i.webkitTransform = a
                    }
                }
            }, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function() {
                if (this.isMasked = this.checkMasks(), this.isMasked) {
                    this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
                    var t = createNS("g");
                    this.maskedElement.appendChild(t), this.innerElem = t
                } else this.renderType = "html", this.innerElem = this.layerElement;
                this.checkParenting()
            }, HTextElement.prototype.buildNewText = function() {
                var t = this.textProperty.currentData;
                this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
                var e = this.innerElem.style,
                    r = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)";
                e.fill = r, e.color = r, t.sc && (e.stroke = this.buildColor(t.sc), e.strokeWidth = t.sw + "px");
                var i, a, s = this.globalData.fontManager.getFontByName(t.f);
                if (!this.globalData.fontManager.chars)
                    if (e.fontSize = t.finalSize + "px", e.lineHeight = t.finalSize + "px", s.fClass) this.innerElem.className = s.fClass;
                    else {
                        e.fontFamily = s.fFamily;
                        var f = t.fWeight,
                            o = t.fStyle;
                        e.fontStyle = o, e.fontWeight = f
                    }
                var g, c, l, m = t.l;
                a = m.length;
                var u, h = this.mHelper,
                    p = "",
                    d = 0;
                for (i = 0; i < a; i += 1) {
                    if (this.globalData.fontManager.chars ? (this.textPaths[d] ? g = this.textPaths[d] : ((g = createNS("path")).setAttribute("stroke-linecap", lineCapEnum[1]), g.setAttribute("stroke-linejoin", lineJoinEnum[2]), g.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[d] ? l = (c = this.textSpans[d]).children[0] : ((c = createTag("div")).style.lineHeight = 0, (l = createNS("svg")).appendChild(g), styleDiv(c)))) : this.isMasked ? g = this.textPaths[d] ? this.textPaths[d] : createNS("text") : this.textSpans[d] ? (c = this.textSpans[d], g = this.textPaths[d]) : (styleDiv(c = createTag("span")), styleDiv(g = createTag("span")), c.appendChild(g)), this.globalData.fontManager.chars) {
                        var n, y = this.globalData.fontManager.getCharData(t.finalText[i], s.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily);
                        if (n = y ? y.data : null, h.reset(), n && n.shapes && n.shapes.length && (u = n.shapes[0].it, h.scale(t.finalSize / 100, t.finalSize / 100), p = this.createPathShape(h, u), g.setAttribute("d", p)), this.isMasked) this.innerElem.appendChild(g);
                        else {
                            if (this.innerElem.appendChild(c), n && n.shapes) {
                                document.body.appendChild(l);
                                var v = l.getBBox();
                                l.setAttribute("width", v.width + 2), l.setAttribute("height", v.height + 2), l.setAttribute("viewBox", v.x - 1 + " " + (v.y - 1) + " " + (v.width + 2) + " " + (v.height + 2));
                                var b = l.style,
                                    x = "translate(" + (v.x - 1) + "px," + (v.y - 1) + "px)";
                                b.transform = x, b.webkitTransform = x, m[i].yOffset = v.y - 1
                            } else l.setAttribute("width", 1), l.setAttribute("height", 1);
                            c.appendChild(l)
                        }
                    } else if (g.textContent = m[i].val, g.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(g);
                    else {
                        this.innerElem.appendChild(c);
                        var S = g.style,
                            k = "translate3d(0," + -t.finalSize / 1.2 + "px,0)";
                        S.transform = k, S.webkitTransform = k
                    }
                    this.isMasked ? this.textSpans[d] = g : this.textSpans[d] = c, this.textSpans[d].style.display = "block", this.textPaths[d] = g, d += 1
                }
                for (; d < this.textSpans.length;) this.textSpans[d].style.display = "none", d += 1
            }, HTextElement.prototype.renderInnerContent = function() {
                var t;
                if (this.data.singleShape) {
                    if (!this._isFirstFrame && !this.lettersChangedFlag) return;
                    if (this.isMasked && this.finalTransform._matMdf) {
                        this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), t = this.svgElement.style;
                        var e = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
                        t.transform = e, t.webkitTransform = e
                    }
                }
                if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
                    var r, i, a, s, f, o = 0,
                        g = this.textAnimator.renderedLetters,
                        c = this.textProperty.currentData.l;
                    for (i = c.length, r = 0; r < i; r += 1) c[r].n ? o += 1 : (s = this.textSpans[r], f = this.textPaths[r], a = g[o], o += 1, a._mdf.m && (this.isMasked ? s.setAttribute("transform", a.m) : (s.style.webkitTransform = a.m, s.style.transform = a.m)), s.style.opacity = a.o, a.sw && a._mdf.sw && f.setAttribute("stroke-width", a.sw), a.sc && a._mdf.sc && f.setAttribute("stroke", a.sc), a.fc && a._mdf.fc && (f.setAttribute("fill", a.fc), f.style.color = a.fc));
                    if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
                        var l = this.innerElem.getBBox();
                        if (this.currentBBox.w !== l.width && (this.currentBBox.w = l.width, this.svgElement.setAttribute("width", l.width)), this.currentBBox.h !== l.height && (this.currentBBox.h = l.height, this.svgElement.setAttribute("height", l.height)), this.currentBBox.w !== l.width + 2 || this.currentBBox.h !== l.height + 2 || this.currentBBox.x !== l.x - 1 || this.currentBBox.y !== l.y - 1) {
                            this.currentBBox.w = l.width + 2, this.currentBBox.h = l.height + 2, this.currentBBox.x = l.x - 1, this.currentBBox.y = l.y - 1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), t = this.svgElement.style;
                            var m = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                            t.transform = m, t.webkitTransform = m
                        }
                    }
                }
            }, extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function() {
                var t, e, r, i, a = this.comp.threeDElements.length;
                for (t = 0; t < a; t += 1)
                    if ((e = this.comp.threeDElements[t]).type === "3d") {
                        r = e.perspectiveElem.style, i = e.container.style;
                        var s = this.pe.v + "px",
                            f = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                        r.perspective = s, r.webkitPerspective = s, i.transformOrigin = "0px 0px 0px", i.mozTransformOrigin = "0px 0px 0px", i.webkitTransformOrigin = "0px 0px 0px", r.transform = f, r.webkitTransform = f
                    }
            }, HCameraElement.prototype.createElements = function() {}, HCameraElement.prototype.hide = function() {}, HCameraElement.prototype.renderFrame = function() {
                var t, e, r = this._isFirstFrame;
                if (this.hierarchy)
                    for (e = this.hierarchy.length, t = 0; t < e; t += 1) r = this.hierarchy[t].finalTransform.mProp._mdf || r;
                if (r || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
                    if (this.mat.reset(), this.hierarchy)
                        for (t = e = this.hierarchy.length - 1; t >= 0; t -= 1) {
                            var i = this.hierarchy[t].finalTransform.mProp;
                            this.mat.translate(-i.p.v[0], -i.p.v[1], i.p.v[2]), this.mat.rotateX(-i.or.v[0]).rotateY(-i.or.v[1]).rotateZ(i.or.v[2]), this.mat.rotateX(-i.rx.v).rotateY(-i.ry.v).rotateZ(i.rz.v), this.mat.scale(1 / i.s.v[0], 1 / i.s.v[1], 1 / i.s.v[2]), this.mat.translate(i.a.v[0], i.a.v[1], i.a.v[2])
                        }
                    if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
                        var a;
                        a = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
                        var s = Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2)),
                            f = [a[0] / s, a[1] / s, a[2] / s],
                            o = Math.sqrt(f[2] * f[2] + f[0] * f[0]),
                            g = Math.atan2(f[1], o),
                            c = Math.atan2(f[0], -f[2]);
                        this.mat.rotateY(c).rotateX(-g)
                    }
                    this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
                    var l = !this._prevMat.equals(this.mat);
                    if ((l || this.pe._mdf) && this.comp.threeDElements) {
                        var m, u, h;
                        for (e = this.comp.threeDElements.length, t = 0; t < e; t += 1)
                            if ((m = this.comp.threeDElements[t]).type === "3d") {
                                if (l) {
                                    var p = this.mat.toCSS();
                                    (h = m.container.style).transform = p, h.webkitTransform = p
                                }
                                this.pe._mdf && ((u = m.perspectiveElem.style).perspective = this.pe.v + "px", u.webkitPerspective = this.pe.v + "px")
                            }
                        this.mat.clone(this._prevMat)
                    }
                }
                this._isFirstFrame = !1
            }, HCameraElement.prototype.prepareFrame = function(t) {
                this.prepareProperties(t, !0)
            }, HCameraElement.prototype.destroy = function() {}, HCameraElement.prototype.getBaseElement = function() {
                return null
            }, extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function() {
                var t = this.globalData.getAssetsPath(this.assetData),
                    e = new Image;
                this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(e), e.crossOrigin = "anonymous", e.src = t, this.data.ln && this.baseElement.setAttribute("id", this.data.ln)
            }, extendPrototype([BaseRenderer], HybridRendererBase), HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRendererBase.prototype.checkPendingElements = function() {
                for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
            }, HybridRendererBase.prototype.appendElementInPos = function(t, e) {
                var r = t.getBaseElement();
                if (r) {
                    var i = this.layers[e];
                    if (i.ddd && this.supports3d) this.addTo3dContainer(r, e);
                    else if (this.threeDElements) this.addTo3dContainer(r, e);
                    else {
                        for (var a, s, f = 0; f < e;) this.elements[f] && this.elements[f] !== !0 && this.elements[f].getBaseElement && (s = this.elements[f], a = (this.layers[f].ddd ? this.getThreeDContainerByPos(f) : s.getBaseElement()) || a), f += 1;
                        a ? i.ddd && this.supports3d || this.layerElement.insertBefore(r, a) : i.ddd && this.supports3d || this.layerElement.appendChild(r)
                    }
                }
            }, HybridRendererBase.prototype.createShape = function(t) {
                return this.supports3d ? new HShapeElement(t, this.globalData, this) : new SVGShapeElement(t, this.globalData, this)
            }, HybridRendererBase.prototype.createText = function(t) {
                return this.supports3d ? new HTextElement(t, this.globalData, this) : new SVGTextLottieElement(t, this.globalData, this)
            }, HybridRendererBase.prototype.createCamera = function(t) {
                return this.camera = new HCameraElement(t, this.globalData, this), this.camera
            }, HybridRendererBase.prototype.createImage = function(t) {
                return this.supports3d ? new HImageElement(t, this.globalData, this) : new IImageElement(t, this.globalData, this)
            }, HybridRendererBase.prototype.createSolid = function(t) {
                return this.supports3d ? new HSolidElement(t, this.globalData, this) : new ISolidElement(t, this.globalData, this)
            }, HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, HybridRendererBase.prototype.getThreeDContainerByPos = function(t) {
                for (var e = 0, r = this.threeDElements.length; e < r;) {
                    if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t) return this.threeDElements[e].perspectiveElem;
                    e += 1
                }
                return null
            }, HybridRendererBase.prototype.createThreeDContainer = function(t, e) {
                var r, i, a = createTag("div");
                styleDiv(a);
                var s = createTag("div");
                if (styleDiv(s), e === "3d") {
                    (r = a.style).width = this.globalData.compSize.w + "px", r.height = this.globalData.compSize.h + "px", r.webkitTransformOrigin = "50% 50%", r.mozTransformOrigin = "50% 50%", r.transformOrigin = "50% 50%";
                    var f = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                    (i = s.style).transform = f, i.webkitTransform = f
                }
                a.appendChild(s);
                var o = {
                    container: s,
                    perspectiveElem: a,
                    startPos: t,
                    endPos: t,
                    type: e
                };
                return this.threeDElements.push(o), o
            }, HybridRendererBase.prototype.build3dContainers = function() {
                var t, e, r = this.layers.length,
                    i = "";
                for (t = 0; t < r; t += 1) this.layers[t].ddd && this.layers[t].ty !== 3 ? (i !== "3d" && (i = "3d", e = this.createThreeDContainer(t, "3d")), e.endPos = Math.max(e.endPos, t)) : (i !== "2d" && (i = "2d", e = this.createThreeDContainer(t, "2d")), e.endPos = Math.max(e.endPos, t));
                for (t = (r = this.threeDElements.length) - 1; t >= 0; t -= 1) this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem)
            }, HybridRendererBase.prototype.addTo3dContainer = function(t, e) {
                for (var r = 0, i = this.threeDElements.length; r < i;) {
                    if (e <= this.threeDElements[r].endPos) {
                        for (var a, s = this.threeDElements[r].startPos; s < e;) this.elements[s] && this.elements[s].getBaseElement && (a = this.elements[s].getBaseElement()), s += 1;
                        a ? this.threeDElements[r].container.insertBefore(t, a) : this.threeDElements[r].container.appendChild(t);
                        break
                    }
                    r += 1
                }
            }, HybridRendererBase.prototype.configAnimation = function(t) {
                var e = createTag("div"),
                    r = this.animationItem.wrapper,
                    i = e.style;
                i.width = t.w + "px", i.height = t.h + "px", this.resizerElem = e, styleDiv(e), i.transformStyle = "flat", i.mozTransformStyle = "flat", i.webkitTransformStyle = "flat", this.renderConfig.className && e.setAttribute("class", this.renderConfig.className), r.appendChild(e), i.overflow = "hidden";
                var a = createNS("svg");
                a.setAttribute("width", "1"), a.setAttribute("height", "1"), styleDiv(a), this.resizerElem.appendChild(a);
                var s = createNS("defs");
                a.appendChild(s), this.data = t, this.setupGlobalData(t, a), this.globalData.defs = s, this.layers = t.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize()
            }, HybridRendererBase.prototype.destroy = function() {
                var t;
                this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
                var e = this.layers ? this.layers.length : 0;
                for (t = 0; t < e; t += 1) this.elements[t].destroy();
                this.elements.length = 0, this.destroyed = !0, this.animationItem = null
            }, HybridRendererBase.prototype.updateContainerSize = function() {
                var t, e, r, i, a = this.animationItem.wrapper.offsetWidth,
                    s = this.animationItem.wrapper.offsetHeight,
                    f = a / s;
                this.globalData.compSize.w / this.globalData.compSize.h > f ? (t = a / this.globalData.compSize.w, e = a / this.globalData.compSize.w, r = 0, i = (s - this.globalData.compSize.h * (a / this.globalData.compSize.w)) / 2) : (t = s / this.globalData.compSize.h, e = s / this.globalData.compSize.h, r = (a - this.globalData.compSize.w * (s / this.globalData.compSize.h)) / 2, i = 0);
                var o = this.resizerElem.style;
                o.webkitTransform = "matrix3d(" + t + ",0,0,0,0," + e + ",0,0,0,0,1,0," + r + "," + i + ",0,1)", o.transform = o.webkitTransform
            }, HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRendererBase.prototype.hide = function() {
                this.resizerElem.style.display = "none"
            }, HybridRendererBase.prototype.show = function() {
                this.resizerElem.style.display = "block"
            }, HybridRendererBase.prototype.initItems = function() {
                if (this.buildAllItems(), this.camera) this.camera.setup();
                else {
                    var t, e = this.globalData.compSize.w,
                        r = this.globalData.compSize.h,
                        i = this.threeDElements.length;
                    for (t = 0; t < i; t += 1) {
                        var a = this.threeDElements[t].perspectiveElem.style;
                        a.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(r, 2)) + "px", a.perspective = a.webkitPerspective
                    }
                }
            }, HybridRendererBase.prototype.searchExtraCompositions = function(t) {
                var e, r = t.length,
                    i = createTag("div");
                for (e = 0; e < r; e += 1)
                    if (t[e].xt) {
                        var a = this.createComp(t[e], i, this.globalData.comp, null);
                        a.initExpressions(), this.globalData.projectInterface.registerComposition(a)
                    }
            }, extendPrototype([HybridRendererBase, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() {
                this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement
            }, HCompElement.prototype.addTo3dContainer = function(t, e) {
                for (var r, i = 0; i < e;) this.elements[i] && this.elements[i].getBaseElement && (r = this.elements[i].getBaseElement()), i += 1;
                r ? this.layerElement.insertBefore(t, r) : this.layerElement.appendChild(t)
            }, HCompElement.prototype.createComp = function(t) {
                return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this)
            }, extendPrototype([HybridRendererBase], HybridRenderer), HybridRenderer.prototype.createComp = function(t) {
                return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this)
            };
            var CompExpressionInterface = function(t) {
                    function e(r) {
                        for (var i = 0, a = t.layers.length; i < a;) {
                            if (t.layers[i].nm === r || t.layers[i].ind === r) return t.elements[i].layerInterface;
                            i += 1
                        }
                        return null
                    }
                    return Object.defineProperty(e, "_name", {
                        value: t.data.nm
                    }), e.layer = e, e.pixelAspect = 1, e.height = t.data.h || t.globalData.compSize.h, e.width = t.data.w || t.globalData.compSize.w, e.pixelAspect = 1, e.frameDuration = 1 / t.globalData.frameRate, e.displayStartTime = 0, e.numLayers = t.layers.length, e
                },
                Expressions = function() {
                    var t = {};
                    return t.initExpressions = function(e) {
                        var r = 0,
                            i = [];
                        e.renderer.compInterface = CompExpressionInterface(e.renderer), e.renderer.globalData.projectInterface.registerComposition(e.renderer), e.renderer.globalData.pushExpression = function() {
                            r += 1
                        }, e.renderer.globalData.popExpression = function() {
                            (r -= 1) === 0 && function() {
                                var a, s = i.length;
                                for (a = 0; a < s; a += 1) i[a].release();
                                i.length = 0
                            }()
                        }, e.renderer.globalData.registerExpressionProperty = function(a) {
                            i.indexOf(a) === -1 && i.push(a)
                        }
                    }, t
                }(),
                MaskManagerInterface = function() {
                    function t(e, r) {
                        this._mask = e, this._data = r
                    }
                    return Object.defineProperty(t.prototype, "maskPath", {
                            get: function() {
                                return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop
                            }
                        }), Object.defineProperty(t.prototype, "maskOpacity", {
                            get: function() {
                                return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v
                            }
                        }),
                        function(e) {
                            var r, i = createSizedArray(e.viewData.length),
                                a = e.viewData.length;
                            for (r = 0; r < a; r += 1) i[r] = new t(e.viewData[r], e.masksProperties[r]);
                            return function(s) {
                                for (r = 0; r < a;) {
                                    if (e.masksProperties[r].nm === s) return i[r];
                                    r += 1
                                }
                                return null
                            }
                        }
                }(),
                ExpressionPropertyInterface = function() {
                    var t = {
                            pv: 0,
                            v: 0,
                            mult: 1
                        },
                        e = {
                            pv: [0, 0, 0],
                            v: [0, 0, 0],
                            mult: 1
                        };

                    function r(a, s, f) {
                        Object.defineProperty(a, "velocity", {
                            get: function() {
                                return s.getVelocityAtTime(s.comp.currentFrame)
                            }
                        }), a.numKeys = s.keyframes ? s.keyframes.length : 0, a.key = function(o) {
                            if (!a.numKeys) return 0;
                            var g = "";
                            g = "s" in s.keyframes[o - 1] ? s.keyframes[o - 1].s : "e" in s.keyframes[o - 2] ? s.keyframes[o - 2].e : s.keyframes[o - 2].s;
                            var c = f === "unidimensional" ? new Number(g) : Object.assign({}, g);
                            return c.time = s.keyframes[o - 1].t / s.elem.comp.globalData.frameRate, c.value = f === "unidimensional" ? g[0] : g, c
                        }, a.valueAtTime = s.getValueAtTime, a.speedAtTime = s.getSpeedAtTime, a.velocityAtTime = s.getVelocityAtTime, a.propertyGroup = s.propertyGroup
                    }

                    function i() {
                        return t
                    }
                    return function(a) {
                        return a ? a.propType === "unidimensional" ? function(s) {
                            s && "pv" in s || (s = t);
                            var f = 1 / s.mult,
                                o = s.pv * f,
                                g = new Number(o);
                            return g.value = o, r(g, s, "unidimensional"),
                                function() {
                                    return s.k && s.getValue(), o = s.v * f, g.value !== o && ((g = new Number(o)).value = o, r(g, s, "unidimensional")), g
                                }
                        }(a) : function(s) {
                            s && "pv" in s || (s = e);
                            var f = 1 / s.mult,
                                o = s.data && s.data.l || s.pv.length,
                                g = createTypedArray("float32", o),
                                c = createTypedArray("float32", o);
                            return g.value = c, r(g, s, "multidimensional"),
                                function() {
                                    s.k && s.getValue();
                                    for (var l = 0; l < o; l += 1) c[l] = s.v[l] * f, g[l] = c[l];
                                    return g
                                }
                        }(a) : i
                    }
                }(),
                TransformExpressionInterface = function(t) {
                    function e(f) {
                        switch (f) {
                            case "scale":
                            case "Scale":
                            case "ADBE Scale":
                            case 6:
                                return e.scale;
                            case "rotation":
                            case "Rotation":
                            case "ADBE Rotation":
                            case "ADBE Rotate Z":
                            case 10:
                                return e.rotation;
                            case "ADBE Rotate X":
                                return e.xRotation;
                            case "ADBE Rotate Y":
                                return e.yRotation;
                            case "position":
                            case "Position":
                            case "ADBE Position":
                            case 2:
                                return e.position;
                            case "ADBE Position_0":
                                return e.xPosition;
                            case "ADBE Position_1":
                                return e.yPosition;
                            case "ADBE Position_2":
                                return e.zPosition;
                            case "anchorPoint":
                            case "AnchorPoint":
                            case "Anchor Point":
                            case "ADBE AnchorPoint":
                            case 1:
                                return e.anchorPoint;
                            case "opacity":
                            case "Opacity":
                            case 11:
                                return e.opacity;
                            default:
                                return null
                        }
                    }
                    var r, i, a, s;
                    return Object.defineProperty(e, "rotation", {
                        get: ExpressionPropertyInterface(t.r || t.rz)
                    }), Object.defineProperty(e, "zRotation", {
                        get: ExpressionPropertyInterface(t.rz || t.r)
                    }), Object.defineProperty(e, "xRotation", {
                        get: ExpressionPropertyInterface(t.rx)
                    }), Object.defineProperty(e, "yRotation", {
                        get: ExpressionPropertyInterface(t.ry)
                    }), Object.defineProperty(e, "scale", {
                        get: ExpressionPropertyInterface(t.s)
                    }), t.p ? s = ExpressionPropertyInterface(t.p) : (r = ExpressionPropertyInterface(t.px), i = ExpressionPropertyInterface(t.py), t.pz && (a = ExpressionPropertyInterface(t.pz))), Object.defineProperty(e, "position", {
                        get: function() {
                            return t.p ? s() : [r(), i(), a ? a() : 0]
                        }
                    }), Object.defineProperty(e, "xPosition", {
                        get: ExpressionPropertyInterface(t.px)
                    }), Object.defineProperty(e, "yPosition", {
                        get: ExpressionPropertyInterface(t.py)
                    }), Object.defineProperty(e, "zPosition", {
                        get: ExpressionPropertyInterface(t.pz)
                    }), Object.defineProperty(e, "anchorPoint", {
                        get: ExpressionPropertyInterface(t.a)
                    }), Object.defineProperty(e, "opacity", {
                        get: ExpressionPropertyInterface(t.o)
                    }), Object.defineProperty(e, "skew", {
                        get: ExpressionPropertyInterface(t.sk)
                    }), Object.defineProperty(e, "skewAxis", {
                        get: ExpressionPropertyInterface(t.sa)
                    }), Object.defineProperty(e, "orientation", {
                        get: ExpressionPropertyInterface(t.or)
                    }), e
                },
                LayerExpressionInterface = function() {
                    function t(c) {
                        var l = new Matrix;
                        return c !== void 0 ? this._elem.finalTransform.mProp.getValueAtTime(c).clone(l) : this._elem.finalTransform.mProp.applyToMatrix(l), l
                    }

                    function e(c, l) {
                        var m = this.getMatrix(l);
                        return m.props[12] = 0, m.props[13] = 0, m.props[14] = 0, this.applyPoint(m, c)
                    }

                    function r(c, l) {
                        var m = this.getMatrix(l);
                        return this.applyPoint(m, c)
                    }

                    function i(c, l) {
                        var m = this.getMatrix(l);
                        return m.props[12] = 0, m.props[13] = 0, m.props[14] = 0, this.invertPoint(m, c)
                    }

                    function a(c, l) {
                        var m = this.getMatrix(l);
                        return this.invertPoint(m, c)
                    }

                    function s(c, l) {
                        if (this._elem.hierarchy && this._elem.hierarchy.length) {
                            var m, u = this._elem.hierarchy.length;
                            for (m = 0; m < u; m += 1) this._elem.hierarchy[m].finalTransform.mProp.applyToMatrix(c)
                        }
                        return c.applyToPointArray(l[0], l[1], l[2] || 0)
                    }

                    function f(c, l) {
                        if (this._elem.hierarchy && this._elem.hierarchy.length) {
                            var m, u = this._elem.hierarchy.length;
                            for (m = 0; m < u; m += 1) this._elem.hierarchy[m].finalTransform.mProp.applyToMatrix(c)
                        }
                        return c.inversePoint(l)
                    }

                    function o(c) {
                        var l = new Matrix;
                        if (l.reset(), this._elem.finalTransform.mProp.applyToMatrix(l), this._elem.hierarchy && this._elem.hierarchy.length) {
                            var m, u = this._elem.hierarchy.length;
                            for (m = 0; m < u; m += 1) this._elem.hierarchy[m].finalTransform.mProp.applyToMatrix(l);
                            return l.inversePoint(c)
                        }
                        return l.inversePoint(c)
                    }

                    function g() {
                        return [1, 1, 1, 1]
                    }
                    return function(c) {
                        var l;

                        function m(h) {
                            switch (h) {
                                case "ADBE Root Vectors Group":
                                case "Contents":
                                case 2:
                                    return m.shapeInterface;
                                case 1:
                                case 6:
                                case "Transform":
                                case "transform":
                                case "ADBE Transform Group":
                                    return l;
                                case 4:
                                case "ADBE Effect Parade":
                                case "effects":
                                case "Effects":
                                    return m.effect;
                                case "ADBE Text Properties":
                                    return m.textInterface;
                                default:
                                    return null
                            }
                        }
                        m.getMatrix = t, m.invertPoint = f, m.applyPoint = s, m.toWorld = r, m.toWorldVec = e, m.fromWorld = a, m.fromWorldVec = i, m.toComp = r, m.fromComp = o, m.sampleImage = g, m.sourceRectAtTime = c.sourceRectAtTime.bind(c), m._elem = c;
                        var u = getDescriptor(l = TransformExpressionInterface(c.finalTransform.mProp), "anchorPoint");
                        return Object.defineProperties(m, {
                            hasParent: {
                                get: function() {
                                    return c.hierarchy.length
                                }
                            },
                            parent: {
                                get: function() {
                                    return c.hierarchy[0].layerInterface
                                }
                            },
                            rotation: getDescriptor(l, "rotation"),
                            scale: getDescriptor(l, "scale"),
                            position: getDescriptor(l, "position"),
                            opacity: getDescriptor(l, "opacity"),
                            anchorPoint: u,
                            anchor_point: u,
                            transform: {
                                get: function() {
                                    return l
                                }
                            },
                            active: {
                                get: function() {
                                    return c.isInRange
                                }
                            }
                        }), m.startTime = c.data.st, m.index = c.data.ind, m.source = c.data.refId, m.height = c.data.ty === 0 ? c.data.h : 100, m.width = c.data.ty === 0 ? c.data.w : 100, m.inPoint = c.data.ip / c.comp.globalData.frameRate, m.outPoint = c.data.op / c.comp.globalData.frameRate, m._name = c.data.nm, m.registerMaskInterface = function(h) {
                            m.mask = new MaskManagerInterface(h, c)
                        }, m.registerEffectsInterface = function(h) {
                            m.effect = h
                        }, m
                    }
                }(),
                propertyGroupFactory = function(t, e) {
                    return function(r) {
                        return (r = r === void 0 ? 1 : r) <= 0 ? t : e(r - 1)
                    }
                },
                PropertyInterface = function(t, e) {
                    var r = {
                        _name: t
                    };
                    return function(i) {
                        return (i = i === void 0 ? 1 : i) <= 0 ? r : e(i - 1)
                    }
                },
                EffectsExpressionInterface = function() {
                    function t(r, i, a, s) {
                        function f(m) {
                            for (var u = r.ef, h = 0, p = u.length; h < p;) {
                                if (m === u[h].nm || m === u[h].mn || m === u[h].ix) return u[h].ty === 5 ? c[h] : c[h]();
                                h += 1
                            }
                            throw new Error
                        }
                        var o, g = propertyGroupFactory(f, a),
                            c = [],
                            l = r.ef.length;
                        for (o = 0; o < l; o += 1) r.ef[o].ty === 5 ? c.push(t(r.ef[o], i.effectElements[o], i.effectElements[o].propertyGroup, s)) : c.push(e(i.effectElements[o], r.ef[o].ty, s, g));
                        return r.mn === "ADBE Color Control" && Object.defineProperty(f, "color", {
                            get: function() {
                                return c[0]()
                            }
                        }), Object.defineProperties(f, {
                            numProperties: {
                                get: function() {
                                    return r.np
                                }
                            },
                            _name: {
                                value: r.nm
                            },
                            propertyGroup: {
                                value: g
                            }
                        }), f.enabled = r.en !== 0, f.active = f.enabled, f
                    }

                    function e(r, i, a, s) {
                        var f = ExpressionPropertyInterface(r.p);
                        return r.p.setGroupProperty && r.p.setGroupProperty(PropertyInterface("", s)),
                            function() {
                                return i === 10 ? a.comp.compInterface(r.p.v) : f()
                            }
                    }
                    return {
                        createEffectsInterface: function(r, i) {
                            if (r.effectsManager) {
                                var a, s = [],
                                    f = r.data.ef,
                                    o = r.effectsManager.effectElements.length;
                                for (a = 0; a < o; a += 1) s.push(t(f[a], r.effectsManager.effectElements[a], i, r));
                                var g = r.data.ef || [],
                                    c = function(l) {
                                        for (a = 0, o = g.length; a < o;) {
                                            if (l === g[a].nm || l === g[a].mn || l === g[a].ix) return s[a];
                                            a += 1
                                        }
                                        return null
                                    };
                                return Object.defineProperty(c, "numProperties", {
                                    get: function() {
                                        return g.length
                                    }
                                }), c
                            }
                            return null
                        }
                    }
                }(),
                ShapePathInterface = function(t, e, r) {
                    var i = e.sh;

                    function a(f) {
                        return f === "Shape" || f === "shape" || f === "Path" || f === "path" || f === "ADBE Vector Shape" || f === 2 ? a.path : null
                    }
                    var s = propertyGroupFactory(a, r);
                    return i.setGroupProperty(PropertyInterface("Path", s)), Object.defineProperties(a, {
                        path: {
                            get: function() {
                                return i.k && i.getValue(), i
                            }
                        },
                        shape: {
                            get: function() {
                                return i.k && i.getValue(), i
                            }
                        },
                        _name: {
                            value: t.nm
                        },
                        ix: {
                            value: t.ix
                        },
                        propertyIndex: {
                            value: t.ix
                        },
                        mn: {
                            value: t.mn
                        },
                        propertyGroup: {
                            value: r
                        }
                    }), a
                },
                ShapeExpressionInterface = function() {
                    function t(h, p, d) {
                        var n, y = [],
                            v = h ? h.length : 0;
                        for (n = 0; n < v; n += 1) h[n].ty === "gr" ? y.push(e(h[n], p[n], d)) : h[n].ty === "fl" ? y.push(r(h[n], p[n], d)) : h[n].ty === "st" ? y.push(s(h[n], p[n], d)) : h[n].ty === "tm" ? y.push(f(h[n], p[n], d)) : h[n].ty === "tr" || (h[n].ty === "el" ? y.push(g(h[n], p[n], d)) : h[n].ty === "sr" ? y.push(c(h[n], p[n], d)) : h[n].ty === "sh" ? y.push(ShapePathInterface(h[n], p[n], d)) : h[n].ty === "rc" ? y.push(l(h[n], p[n], d)) : h[n].ty === "rd" ? y.push(m(h[n], p[n], d)) : h[n].ty === "rp" ? y.push(u(h[n], p[n], d)) : h[n].ty === "gf" ? y.push(i(h[n], p[n], d)) : y.push(a(h[n], p[n])));
                        return y
                    }

                    function e(h, p, d) {
                        var n = function(b) {
                            switch (b) {
                                case "ADBE Vectors Group":
                                case "Contents":
                                case 2:
                                    return n.content;
                                default:
                                    return n.transform
                            }
                        };
                        n.propertyGroup = propertyGroupFactory(n, d);
                        var y = function(b, x, S) {
                                var k, _ = function(T) {
                                    for (var E = 0, C = k.length; E < C;) {
                                        if (k[E]._name === T || k[E].mn === T || k[E].propertyIndex === T || k[E].ix === T || k[E].ind === T) return k[E];
                                        E += 1
                                    }
                                    return typeof T == "number" ? k[T - 1] : null
                                };
                                _.propertyGroup = propertyGroupFactory(_, S), k = t(b.it, x.it, _.propertyGroup), _.numProperties = k.length;
                                var A = o(b.it[b.it.length - 1], x.it[x.it.length - 1], _.propertyGroup);
                                return _.transform = A, _.propertyIndex = b.cix, _._name = b.nm, _
                            }(h, p, n.propertyGroup),
                            v = o(h.it[h.it.length - 1], p.it[p.it.length - 1], n.propertyGroup);
                        return n.content = y, n.transform = v, Object.defineProperty(n, "_name", {
                            get: function() {
                                return h.nm
                            }
                        }), n.numProperties = h.np, n.propertyIndex = h.ix, n.nm = h.nm, n.mn = h.mn, n
                    }

                    function r(h, p, d) {
                        function n(y) {
                            return y === "Color" || y === "color" ? n.color : y === "Opacity" || y === "opacity" ? n.opacity : null
                        }
                        return Object.defineProperties(n, {
                            color: {
                                get: ExpressionPropertyInterface(p.c)
                            },
                            opacity: {
                                get: ExpressionPropertyInterface(p.o)
                            },
                            _name: {
                                value: h.nm
                            },
                            mn: {
                                value: h.mn
                            }
                        }), p.c.setGroupProperty(PropertyInterface("Color", d)), p.o.setGroupProperty(PropertyInterface("Opacity", d)), n
                    }

                    function i(h, p, d) {
                        function n(y) {
                            return y === "Start Point" || y === "start point" ? n.startPoint : y === "End Point" || y === "end point" ? n.endPoint : y === "Opacity" || y === "opacity" ? n.opacity : null
                        }
                        return Object.defineProperties(n, {
                            startPoint: {
                                get: ExpressionPropertyInterface(p.s)
                            },
                            endPoint: {
                                get: ExpressionPropertyInterface(p.e)
                            },
                            opacity: {
                                get: ExpressionPropertyInterface(p.o)
                            },
                            type: {
                                get: function() {
                                    return "a"
                                }
                            },
                            _name: {
                                value: h.nm
                            },
                            mn: {
                                value: h.mn
                            }
                        }), p.s.setGroupProperty(PropertyInterface("Start Point", d)), p.e.setGroupProperty(PropertyInterface("End Point", d)), p.o.setGroupProperty(PropertyInterface("Opacity", d)), n
                    }

                    function a() {
                        return function() {
                            return null
                        }
                    }

                    function s(h, p, d) {
                        var n, y = propertyGroupFactory(k, d),
                            v = propertyGroupFactory(S, y);

                        function b(_) {
                            Object.defineProperty(S, h.d[_].nm, {
                                get: ExpressionPropertyInterface(p.d.dataProps[_].p)
                            })
                        }
                        var x = h.d ? h.d.length : 0,
                            S = {};
                        for (n = 0; n < x; n += 1) b(n), p.d.dataProps[n].p.setGroupProperty(v);

                        function k(_) {
                            return _ === "Color" || _ === "color" ? k.color : _ === "Opacity" || _ === "opacity" ? k.opacity : _ === "Stroke Width" || _ === "stroke width" ? k.strokeWidth : null
                        }
                        return Object.defineProperties(k, {
                            color: {
                                get: ExpressionPropertyInterface(p.c)
                            },
                            opacity: {
                                get: ExpressionPropertyInterface(p.o)
                            },
                            strokeWidth: {
                                get: ExpressionPropertyInterface(p.w)
                            },
                            dash: {
                                get: function() {
                                    return S
                                }
                            },
                            _name: {
                                value: h.nm
                            },
                            mn: {
                                value: h.mn
                            }
                        }), p.c.setGroupProperty(PropertyInterface("Color", y)), p.o.setGroupProperty(PropertyInterface("Opacity", y)), p.w.setGroupProperty(PropertyInterface("Stroke Width", y)), k
                    }

                    function f(h, p, d) {
                        function n(v) {
                            return v === h.e.ix || v === "End" || v === "end" ? n.end : v === h.s.ix ? n.start : v === h.o.ix ? n.offset : null
                        }
                        var y = propertyGroupFactory(n, d);
                        return n.propertyIndex = h.ix, p.s.setGroupProperty(PropertyInterface("Start", y)), p.e.setGroupProperty(PropertyInterface("End", y)), p.o.setGroupProperty(PropertyInterface("Offset", y)), n.propertyIndex = h.ix, n.propertyGroup = d, Object.defineProperties(n, {
                            start: {
                                get: ExpressionPropertyInterface(p.s)
                            },
                            end: {
                                get: ExpressionPropertyInterface(p.e)
                            },
                            offset: {
                                get: ExpressionPropertyInterface(p.o)
                            },
                            _name: {
                                value: h.nm
                            }
                        }), n.mn = h.mn, n
                    }

                    function o(h, p, d) {
                        function n(v) {
                            return h.a.ix === v || v === "Anchor Point" ? n.anchorPoint : h.o.ix === v || v === "Opacity" ? n.opacity : h.p.ix === v || v === "Position" ? n.position : h.r.ix === v || v === "Rotation" || v === "ADBE Vector Rotation" ? n.rotation : h.s.ix === v || v === "Scale" ? n.scale : h.sk && h.sk.ix === v || v === "Skew" ? n.skew : h.sa && h.sa.ix === v || v === "Skew Axis" ? n.skewAxis : null
                        }
                        var y = propertyGroupFactory(n, d);
                        return p.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", y)), p.transform.mProps.p.setGroupProperty(PropertyInterface("Position", y)), p.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", y)), p.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", y)), p.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", y)), p.transform.mProps.sk && (p.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", y)), p.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", y))), p.transform.op.setGroupProperty(PropertyInterface("Opacity", y)), Object.defineProperties(n, {
                            opacity: {
                                get: ExpressionPropertyInterface(p.transform.mProps.o)
                            },
                            position: {
                                get: ExpressionPropertyInterface(p.transform.mProps.p)
                            },
                            anchorPoint: {
                                get: ExpressionPropertyInterface(p.transform.mProps.a)
                            },
                            scale: {
                                get: ExpressionPropertyInterface(p.transform.mProps.s)
                            },
                            rotation: {
                                get: ExpressionPropertyInterface(p.transform.mProps.r)
                            },
                            skew: {
                                get: ExpressionPropertyInterface(p.transform.mProps.sk)
                            },
                            skewAxis: {
                                get: ExpressionPropertyInterface(p.transform.mProps.sa)
                            },
                            _name: {
                                value: h.nm
                            }
                        }), n.ty = "tr", n.mn = h.mn, n.propertyGroup = d, n
                    }

                    function g(h, p, d) {
                        function n(b) {
                            return h.p.ix === b ? n.position : h.s.ix === b ? n.size : null
                        }
                        var y = propertyGroupFactory(n, d);
                        n.propertyIndex = h.ix;
                        var v = p.sh.ty === "tm" ? p.sh.prop : p.sh;
                        return v.s.setGroupProperty(PropertyInterface("Size", y)), v.p.setGroupProperty(PropertyInterface("Position", y)), Object.defineProperties(n, {
                            size: {
                                get: ExpressionPropertyInterface(v.s)
                            },
                            position: {
                                get: ExpressionPropertyInterface(v.p)
                            },
                            _name: {
                                value: h.nm
                            }
                        }), n.mn = h.mn, n
                    }

                    function c(h, p, d) {
                        function n(b) {
                            return h.p.ix === b ? n.position : h.r.ix === b ? n.rotation : h.pt.ix === b ? n.points : h.or.ix === b || b === "ADBE Vector Star Outer Radius" ? n.outerRadius : h.os.ix === b ? n.outerRoundness : !h.ir || h.ir.ix !== b && b !== "ADBE Vector Star Inner Radius" ? h.is && h.is.ix === b ? n.innerRoundness : null : n.innerRadius
                        }
                        var y = propertyGroupFactory(n, d),
                            v = p.sh.ty === "tm" ? p.sh.prop : p.sh;
                        return n.propertyIndex = h.ix, v.or.setGroupProperty(PropertyInterface("Outer Radius", y)), v.os.setGroupProperty(PropertyInterface("Outer Roundness", y)), v.pt.setGroupProperty(PropertyInterface("Points", y)), v.p.setGroupProperty(PropertyInterface("Position", y)), v.r.setGroupProperty(PropertyInterface("Rotation", y)), h.ir && (v.ir.setGroupProperty(PropertyInterface("Inner Radius", y)), v.is.setGroupProperty(PropertyInterface("Inner Roundness", y))), Object.defineProperties(n, {
                            position: {
                                get: ExpressionPropertyInterface(v.p)
                            },
                            rotation: {
                                get: ExpressionPropertyInterface(v.r)
                            },
                            points: {
                                get: ExpressionPropertyInterface(v.pt)
                            },
                            outerRadius: {
                                get: ExpressionPropertyInterface(v.or)
                            },
                            outerRoundness: {
                                get: ExpressionPropertyInterface(v.os)
                            },
                            innerRadius: {
                                get: ExpressionPropertyInterface(v.ir)
                            },
                            innerRoundness: {
                                get: ExpressionPropertyInterface(v.is)
                            },
                            _name: {
                                value: h.nm
                            }
                        }), n.mn = h.mn, n
                    }

                    function l(h, p, d) {
                        function n(b) {
                            return h.p.ix === b ? n.position : h.r.ix === b ? n.roundness : h.s.ix === b || b === "Size" || b === "ADBE Vector Rect Size" ? n.size : null
                        }
                        var y = propertyGroupFactory(n, d),
                            v = p.sh.ty === "tm" ? p.sh.prop : p.sh;
                        return n.propertyIndex = h.ix, v.p.setGroupProperty(PropertyInterface("Position", y)), v.s.setGroupProperty(PropertyInterface("Size", y)), v.r.setGroupProperty(PropertyInterface("Rotation", y)), Object.defineProperties(n, {
                            position: {
                                get: ExpressionPropertyInterface(v.p)
                            },
                            roundness: {
                                get: ExpressionPropertyInterface(v.r)
                            },
                            size: {
                                get: ExpressionPropertyInterface(v.s)
                            },
                            _name: {
                                value: h.nm
                            }
                        }), n.mn = h.mn, n
                    }

                    function m(h, p, d) {
                        function n(b) {
                            return h.r.ix === b || b === "Round Corners 1" ? n.radius : null
                        }
                        var y = propertyGroupFactory(n, d),
                            v = p;
                        return n.propertyIndex = h.ix, v.rd.setGroupProperty(PropertyInterface("Radius", y)), Object.defineProperties(n, {
                            radius: {
                                get: ExpressionPropertyInterface(v.rd)
                            },
                            _name: {
                                value: h.nm
                            }
                        }), n.mn = h.mn, n
                    }

                    function u(h, p, d) {
                        function n(b) {
                            return h.c.ix === b || b === "Copies" ? n.copies : h.o.ix === b || b === "Offset" ? n.offset : null
                        }
                        var y = propertyGroupFactory(n, d),
                            v = p;
                        return n.propertyIndex = h.ix, v.c.setGroupProperty(PropertyInterface("Copies", y)), v.o.setGroupProperty(PropertyInterface("Offset", y)), Object.defineProperties(n, {
                            copies: {
                                get: ExpressionPropertyInterface(v.c)
                            },
                            offset: {
                                get: ExpressionPropertyInterface(v.o)
                            },
                            _name: {
                                value: h.nm
                            }
                        }), n.mn = h.mn, n
                    }
                    return function(h, p, d) {
                        var n;

                        function y(v) {
                            if (typeof v == "number") return (v = v === void 0 ? 1 : v) === 0 ? d : n[v - 1];
                            for (var b = 0, x = n.length; b < x;) {
                                if (n[b]._name === v) return n[b];
                                b += 1
                            }
                            return null
                        }
                        return y.propertyGroup = propertyGroupFactory(y, function() {
                            return d
                        }), n = t(h, p, y.propertyGroup), y.numProperties = n.length, y._name = "Contents", y
                    }
                }(),
                TextExpressionInterface = function(t) {
                    var e, r;

                    function i(a) {
                        switch (a) {
                            case "ADBE Text Document":
                                return i.sourceText;
                            default:
                                return null
                        }
                    }
                    return Object.defineProperty(i, "sourceText", {
                        get: function() {
                            t.textProperty.getValue();
                            var a = t.textProperty.currentData.t;
                            return a !== e && (e = t.textProperty.currentData.t, (r = new String(a)).value = a || new String(a), Object.defineProperty(r, "style", {
                                get: function() {
                                    return {
                                        fillColor: t.textProperty.currentData.fc
                                    }
                                }
                            })), r
                        }
                    }), i
                };

            function _typeof$2(t) {
                return (_typeof$2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(t)
            }
            var FootageInterface = (dataInterfaceFactory = function(t) {
                    function e(r) {
                        return r === "Outline" ? e.outlineInterface() : null
                    }
                    return e._name = "Outline", e.outlineInterface = function(r) {
                        var i = "",
                            a = r.getFootageData();

                        function s(f) {
                            if (a[f]) return i = f, _typeof$2(a = a[f]) === "object" ? s : a;
                            var o = f.indexOf(i);
                            if (o !== -1) {
                                var g = parseInt(f.substr(o + i.length), 10);
                                return _typeof$2(a = a[g]) === "object" ? s : a
                            }
                            return ""
                        }
                        return function() {
                            return i = "", a = r.getFootageData(), s
                        }
                    }(t), e
                }, function(t) {
                    function e(r) {
                        return r === "Data" ? e.dataInterface : null
                    }
                    return e._name = "Data", e.dataInterface = dataInterfaceFactory(t), e
                }),
                dataInterfaceFactory, interfaces = {
                    layer: LayerExpressionInterface,
                    effects: EffectsExpressionInterface,
                    comp: CompExpressionInterface,
                    shape: ShapeExpressionInterface,
                    text: TextExpressionInterface,
                    footage: FootageInterface
                };

            function getInterface(t) {
                return interfaces[t] || null
            }

            function _typeof$1(t) {
                return (_typeof$1 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(t)
            }

            function seedRandom(t, e) {
                var r = this,
                    i = e.pow(256, 6),
                    a = e.pow(2, 52),
                    s = 2 * a;

                function f(l) {
                    var m, u = l.length,
                        h = this,
                        p = 0,
                        d = h.i = h.j = 0,
                        n = h.S = [];
                    for (u || (l = [u++]); p < 256;) n[p] = p++;
                    for (p = 0; p < 256; p++) n[p] = n[d = 255 & d + l[p % u] + (m = n[p])], n[d] = m;
                    h.g = function(y) {
                        for (var v, b = 0, x = h.i, S = h.j, k = h.S; y--;) v = k[x = 255 & x + 1], b = 256 * b + k[255 & (k[x] = k[S = 255 & S + v]) + (k[S] = v)];
                        return h.i = x, h.j = S, b
                    }
                }

                function o(l, m) {
                    return m.i = l.i, m.j = l.j, m.S = l.S.slice(), m
                }

                function g(l, m) {
                    for (var u, h = l + "", p = 0; p < h.length;) m[255 & p] = 255 & (u ^= 19 * m[255 & p]) + h.charCodeAt(p++);
                    return c(m)
                }

                function c(l) {
                    return String.fromCharCode.apply(0, l)
                }
                e.seedrandom = function(l, m, u) {
                    var h = [],
                        p = g(function y(v, b) {
                            var x, S = [],
                                k = _typeof$1(v);
                            if (b && k == "object")
                                for (x in v) try {
                                    S.push(y(v[x], b - 1))
                                } catch {}
                            return S.length ? S : k == "string" ? v : v + "\0"
                        }((m = m === !0 ? {
                            entropy: !0
                        } : m || {}).entropy ? [l, c(t)] : l === null ? function() {
                            try {
                                var y = new Uint8Array(256);
                                return (r.crypto || r.msCrypto).getRandomValues(y), c(y)
                            } catch {
                                var v = r.navigator,
                                    b = v && v.plugins;
                                return [+new Date, r, b, r.screen, c(t)]
                            }
                        }() : l, 3), h),
                        d = new f(h),
                        n = function() {
                            for (var y = d.g(6), v = i, b = 0; y < a;) y = 256 * (y + b), v *= 256, b = d.g(1);
                            for (; y >= s;) y /= 2, v /= 2, b >>>= 1;
                            return (y + b) / v
                        };
                    return n.int32 = function() {
                        return 0 | d.g(4)
                    }, n.quick = function() {
                        return d.g(4) / 4294967296
                    }, n.double = n, g(c(d.S), t), (m.pass || u || function(y, v, b, x) {
                        return x && (x.S && o(x, d), y.state = function() {
                            return o(d, {})
                        }), b ? (e.random = y, v) : y
                    })(n, p, "global" in m ? m.global : this == e, m.state)
                }, g(e.random(), t)
            }

            function initialize$2(t) {
                seedRandom([], t)
            }
            var propTypes = {
                SHAPE: "shape"
            };

            function _typeof(t) {
                return (_typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(t)
            }
            var ExpressionManager = function() {
                    var ob = {},
                        Math = BMMath,
                        window = null,
                        document = null,
                        XMLHttpRequest = null,
                        fetch = null,
                        frames = null;

                    function $bm_isInstanceOfArray(t) {
                        return t.constructor === Array || t.constructor === Float32Array
                    }

                    function isNumerable(t, e) {
                        return t === "number" || t === "boolean" || t === "string" || e instanceof Number
                    }

                    function $bm_neg(t) {
                        var e = _typeof(t);
                        if (e === "number" || e === "boolean" || t instanceof Number) return -t;
                        if ($bm_isInstanceOfArray(t)) {
                            var r, i = t.length,
                                a = [];
                            for (r = 0; r < i; r += 1) a[r] = -t[r];
                            return a
                        }
                        return t.propType ? t.v : -t
                    }
                    initialize$2(BMMath);
                    var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
                        easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
                        easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;

                    function sum(t, e) {
                        var r = _typeof(t),
                            i = _typeof(e);
                        if (r === "string" || i === "string" || isNumerable(r, t) && isNumerable(i, e)) return t + e;
                        if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) return (t = t.slice(0))[0] += e, t;
                        if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t + e[0], e;
                        if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                            for (var a = 0, s = t.length, f = e.length, o = []; a < s || a < f;)(typeof t[a] == "number" || t[a] instanceof Number) && (typeof e[a] == "number" || e[a] instanceof Number) ? o[a] = t[a] + e[a] : o[a] = e[a] === void 0 ? t[a] : t[a] || e[a], a += 1;
                            return o
                        }
                        return 0
                    }
                    var add = sum;

                    function sub(t, e) {
                        var r = _typeof(t),
                            i = _typeof(e);
                        if (isNumerable(r, t) && isNumerable(i, e)) return r === "string" && (t = parseInt(t, 10)), i === "string" && (e = parseInt(e, 10)), t - e;
                        if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) return (t = t.slice(0))[0] -= e, t;
                        if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t - e[0], e;
                        if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                            for (var a = 0, s = t.length, f = e.length, o = []; a < s || a < f;)(typeof t[a] == "number" || t[a] instanceof Number) && (typeof e[a] == "number" || e[a] instanceof Number) ? o[a] = t[a] - e[a] : o[a] = e[a] === void 0 ? t[a] : t[a] || e[a], a += 1;
                            return o
                        }
                        return 0
                    }

                    function mul(t, e) {
                        var r, i, a, s = _typeof(t),
                            f = _typeof(e);
                        if (isNumerable(s, t) && isNumerable(f, e)) return t * e;
                        if ($bm_isInstanceOfArray(t) && isNumerable(f, e)) {
                            for (a = t.length, r = createTypedArray("float32", a), i = 0; i < a; i += 1) r[i] = t[i] * e;
                            return r
                        }
                        if (isNumerable(s, t) && $bm_isInstanceOfArray(e)) {
                            for (a = e.length, r = createTypedArray("float32", a), i = 0; i < a; i += 1) r[i] = t * e[i];
                            return r
                        }
                        return 0
                    }

                    function div(t, e) {
                        var r, i, a, s = _typeof(t),
                            f = _typeof(e);
                        if (isNumerable(s, t) && isNumerable(f, e)) return t / e;
                        if ($bm_isInstanceOfArray(t) && isNumerable(f, e)) {
                            for (a = t.length, r = createTypedArray("float32", a), i = 0; i < a; i += 1) r[i] = t[i] / e;
                            return r
                        }
                        if (isNumerable(s, t) && $bm_isInstanceOfArray(e)) {
                            for (a = e.length, r = createTypedArray("float32", a), i = 0; i < a; i += 1) r[i] = t / e[i];
                            return r
                        }
                        return 0
                    }

                    function mod(t, e) {
                        return typeof t == "string" && (t = parseInt(t, 10)), typeof e == "string" && (e = parseInt(e, 10)), t % e
                    }
                    var $bm_sum = sum,
                        $bm_sub = sub,
                        $bm_mul = mul,
                        $bm_div = div,
                        $bm_mod = mod;

                    function clamp(t, e, r) {
                        if (e > r) {
                            var i = r;
                            r = e, e = i
                        }
                        return Math.min(Math.max(t, e), r)
                    }

                    function radiansToDegrees(t) {
                        return t / degToRads
                    }
                    var radians_to_degrees = radiansToDegrees;

                    function degreesToRadians(t) {
                        return t * degToRads
                    }
                    var degrees_to_radians = radiansToDegrees,
                        helperLengthArray = [0, 0, 0, 0, 0, 0];

                    function length(t, e) {
                        if (typeof t == "number" || t instanceof Number) return e = e || 0, Math.abs(t - e);
                        var r;
                        e || (e = helperLengthArray);
                        var i = Math.min(t.length, e.length),
                            a = 0;
                        for (r = 0; r < i; r += 1) a += Math.pow(e[r] - t[r], 2);
                        return Math.sqrt(a)
                    }

                    function normalize(t) {
                        return div(t, length(t))
                    }

                    function rgbToHsl(t) {
                        var e, r, i = t[0],
                            a = t[1],
                            s = t[2],
                            f = Math.max(i, a, s),
                            o = Math.min(i, a, s),
                            g = (f + o) / 2;
                        if (f === o) e = 0, r = 0;
                        else {
                            var c = f - o;
                            switch (r = g > .5 ? c / (2 - f - o) : c / (f + o), f) {
                                case i:
                                    e = (a - s) / c + (a < s ? 6 : 0);
                                    break;
                                case a:
                                    e = (s - i) / c + 2;
                                    break;
                                case s:
                                    e = (i - a) / c + 4
                            }
                            e /= 6
                        }
                        return [e, r, g, t[3]]
                    }

                    function hue2rgb(t, e, r) {
                        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + 6 * (e - t) * r : r < .5 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t
                    }

                    function hslToRgb(t) {
                        var e, r, i, a = t[0],
                            s = t[1],
                            f = t[2];
                        if (s === 0) e = f, i = f, r = f;
                        else {
                            var o = f < .5 ? f * (1 + s) : f + s - f * s,
                                g = 2 * f - o;
                            e = hue2rgb(g, o, a + 1 / 3), r = hue2rgb(g, o, a), i = hue2rgb(g, o, a - 1 / 3)
                        }
                        return [e, r, i, t[3]]
                    }

                    function linear(t, e, r, i, a) {
                        if (i !== void 0 && a !== void 0 || (i = e, a = r, e = 0, r = 1), r < e) {
                            var s = r;
                            r = e, e = s
                        }
                        if (t <= e) return i;
                        if (t >= r) return a;
                        var f, o = r === e ? 0 : (t - e) / (r - e);
                        if (!i.length) return i + (a - i) * o;
                        var g = i.length,
                            c = createTypedArray("float32", g);
                        for (f = 0; f < g; f += 1) c[f] = i[f] + (a[f] - i[f]) * o;
                        return c
                    }

                    function random(t, e) {
                        if (e === void 0 && (t === void 0 ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) {
                            var r, i = e.length;
                            t || (t = createTypedArray("float32", i));
                            var a = createTypedArray("float32", i),
                                s = BMMath.random();
                            for (r = 0; r < i; r += 1) a[r] = t[r] + s * (e[r] - t[r]);
                            return a
                        }
                        return t === void 0 && (t = 0), t + BMMath.random() * (e - t)
                    }

                    function createPath(t, e, r, i) {
                        var a, s = t.length,
                            f = shapePool.newElement();
                        f.setPathData(!!i, s);
                        var o, g, c = [0, 0];
                        for (a = 0; a < s; a += 1) o = e && e[a] ? e[a] : c, g = r && r[a] ? r[a] : c, f.setTripleAt(t[a][0], t[a][1], g[0] + t[a][0], g[1] + t[a][1], o[0] + t[a][0], o[1] + t[a][1], a, !0);
                        return f
                    }

                    function initiateExpression(elem, data, property) {
                        function noOp(t) {
                            return t
                        }
                        if (!elem.globalData.renderConfig.runExpressions) return noOp;
                        var val = data.x,
                            needsVelocity = /velocity(?![\w\d])/.test(val),
                            _needsRandom = val.indexOf("random") !== -1,
                            elemType = elem.data.ty,
                            transform, $bm_transform, content, effect, thisProperty = property;
                        thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
                            get: function() {
                                return thisProperty.v
                            }
                        }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
                        var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
                            outPoint = elem.data.op / elem.comp.globalData.frameRate,
                            width = elem.data.sw ? elem.data.sw : 0,
                            height = elem.data.sh ? elem.data.sh : 0,
                            name = elem.data.nm,
                            loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0],
                            numKeys = property.kf ? data.k.length : 0,
                            active = !this.data || this.data.hd !== !0,
                            wiggle = function(t, e) {
                                var r, i, a = this.pv.length ? this.pv.length : 1,
                                    s = createTypedArray("float32", a),
                                    f = Math.floor(5 * time);
                                for (r = 0, i = 0; r < f;) {
                                    for (i = 0; i < a; i += 1) s[i] += -e + 2 * e * BMMath.random();
                                    r += 1
                                }
                                var o = 5 * time,
                                    g = o - Math.floor(o),
                                    c = createTypedArray("float32", a);
                                if (a > 1) {
                                    for (i = 0; i < a; i += 1) c[i] = this.pv[i] + s[i] + (-e + 2 * e * BMMath.random()) * g;
                                    return c
                                }
                                return this.pv + s[0] + (-e + 2 * e * BMMath.random()) * g
                            }.bind(this);

                        function loopInDuration(t, e) {
                            return loopIn(t, e, !0)
                        }

                        function loopOutDuration(t, e) {
                            return loopOut(t, e, !0)
                        }
                        thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
                        var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),
                            time, velocity, value, text, textIndex, textTotal, selectorValue;

                        function lookAt(t, e) {
                            var r = [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
                                i = Math.atan2(r[0], Math.sqrt(r[1] * r[1] + r[2] * r[2])) / degToRads;
                            return [-Math.atan2(r[1], r[2]) / degToRads, i, 0]
                        }

                        function easeOut(t, e, r, i, a) {
                            return applyEase(easeOutBez, t, e, r, i, a)
                        }

                        function easeIn(t, e, r, i, a) {
                            return applyEase(easeInBez, t, e, r, i, a)
                        }

                        function ease(t, e, r, i, a) {
                            return applyEase(easeInOutBez, t, e, r, i, a)
                        }

                        function applyEase(t, e, r, i, a, s) {
                            a === void 0 ? (a = r, s = i) : e = (e - r) / (i - r), e > 1 ? e = 1 : e < 0 && (e = 0);
                            var f = t(e);
                            if ($bm_isInstanceOfArray(a)) {
                                var o, g = a.length,
                                    c = createTypedArray("float32", g);
                                for (o = 0; o < g; o += 1) c[o] = (s[o] - a[o]) * f + a[o];
                                return c
                            }
                            return (s - a) * f + a
                        }

                        function nearestKey(t) {
                            var e, r, i, a = data.k.length;
                            if (data.k.length && typeof data.k[0] != "number")
                                if (r = -1, (t *= elem.comp.globalData.frameRate) < data.k[0].t) r = 1, i = data.k[0].t;
                                else {
                                    for (e = 0; e < a - 1; e += 1) {
                                        if (t === data.k[e].t) {
                                            r = e + 1, i = data.k[e].t;
                                            break
                                        }
                                        if (t > data.k[e].t && t < data.k[e + 1].t) {
                                            t - data.k[e].t > data.k[e + 1].t - t ? (r = e + 2, i = data.k[e + 1].t) : (r = e + 1, i = data.k[e].t);
                                            break
                                        }
                                    }
                                    r === -1 && (r = e + 1, i = data.k[e].t)
                                }
                            else r = 0, i = 0;
                            var s = {};
                            return s.index = r, s.time = i / elem.comp.globalData.frameRate, s
                        }

                        function key(t) {
                            var e, r, i;
                            if (!data.k.length || typeof data.k[0] == "number") throw new Error("The property has no keyframe at index " + t);
                            t -= 1, e = {
                                time: data.k[t].t / elem.comp.globalData.frameRate,
                                value: []
                            };
                            var a = Object.prototype.hasOwnProperty.call(data.k[t], "s") ? data.k[t].s : data.k[t - 1].e;
                            for (i = a.length, r = 0; r < i; r += 1) e[r] = a[r], e.value[r] = a[r];
                            return e
                        }

                        function framesToTime(t, e) {
                            return e || (e = elem.comp.globalData.frameRate), t / e
                        }

                        function timeToFrames(t, e) {
                            return t || t === 0 || (t = time), e || (e = elem.comp.globalData.frameRate), t * e
                        }

                        function seedRandom(t) {
                            BMMath.seedrandom(randSeed + t)
                        }

                        function sourceRectAtTime() {
                            return elem.sourceRectAtTime()
                        }

                        function substring(t, e) {
                            return typeof value == "string" ? e === void 0 ? value.substring(t) : value.substring(t, e) : ""
                        }

                        function substr(t, e) {
                            return typeof value == "string" ? e === void 0 ? value.substr(t) : value.substr(t, e) : ""
                        }

                        function posterizeTime(t) {
                            time = t === 0 ? 0 : Math.floor(time * t) / t, value = valueAtTime(time)
                        }
                        var index = elem.data.ind;
                        !elem.hierarchy || elem.hierarchy.length;
                        var parent, randSeed = Math.floor(1e6 * Math.random()),
                            globalData = elem.globalData;

                        function executeExpression(t) {
                            return value = t, this.frameExpressionId === elem.globalData.frameId && this.propType !== "textSelector" ? value : (this.propType === "textSelector" && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), elemType !== 4 || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), !(!elem.hierarchy || !elem.hierarchy.length) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, _needsRandom && seedRandom(randSeed + time), needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt)
                        }
                        return executeExpression.__preventDeadCodeRemoval = [$bm_transform, anchorPoint, time, velocity, inPoint, outPoint, width, height, name, loop_in, loop_out, smooth, toComp, fromCompToSurface, toWorld, fromWorld, mask, position, rotation, scale, thisComp, numKeys, active, wiggle, loopInDuration, loopOutDuration, comp, lookAt, easeOut, easeIn, ease, nearestKey, key, text, textIndex, textTotal, selectorValue, framesToTime, timeToFrames, sourceRectAtTime, substring, substr, posterizeTime, index, globalData], executeExpression
                    }
                    return ob.initiateExpression = initiateExpression, ob.__preventDeadCodeRemoval = [window, document, XMLHttpRequest, fetch, frames, $bm_neg, add, $bm_sum, $bm_sub, $bm_mul, $bm_div, $bm_mod, clamp, radians_to_degrees, degreesToRadians, degrees_to_radians, normalize, rgbToHsl, hslToRgb, linear, random, createPath], ob
                }(),
                expressionHelpers = {
                    searchExpressions: function(t, e, r) {
                        e.x && (r.k = !0, r.x = !0, r.initiateExpression = ExpressionManager.initiateExpression, r.effectsSequence.push(r.initiateExpression(t, e, r).bind(r)))
                    },
                    getSpeedAtTime: function(t) {
                        var e = this.getValueAtTime(t),
                            r = this.getValueAtTime(t + -.01),
                            i = 0;
                        if (e.length) {
                            var a;
                            for (a = 0; a < e.length; a += 1) i += Math.pow(r[a] - e[a], 2);
                            i = 100 * Math.sqrt(i)
                        } else i = 0;
                        return i
                    },
                    getVelocityAtTime: function(t) {
                        if (this.vel !== void 0) return this.vel;
                        var e, r, i = this.getValueAtTime(t),
                            a = this.getValueAtTime(t + -.001);
                        if (i.length)
                            for (e = createTypedArray("float32", i.length), r = 0; r < i.length; r += 1) e[r] = (a[r] - i[r]) / -.001;
                        else e = (a - i) / -.001;
                        return e
                    },
                    getValueAtTime: function(t) {
                        return t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < t ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(t, this._cachingAtTime), this._cachingAtTime.lastFrame = t), this._cachingAtTime.value
                    },
                    getStaticValueAtTime: function() {
                        return this.pv
                    },
                    setGroupProperty: function(t) {
                        this.propertyGroup = t
                    }
                };

            function addPropertyDecorator() {
                function t(m, u, h) {
                    if (!this.k || !this.keyframes) return this.pv;
                    m = m ? m.toLowerCase() : "";
                    var p, d, n, y, v, b = this.comp.renderedFrame,
                        x = this.keyframes,
                        S = x[x.length - 1].t;
                    if (b <= S) return this.pv;
                    if (h ? d = S - (p = u ? Math.abs(S - this.elem.comp.globalData.frameRate * u) : Math.max(0, S - this.elem.data.ip)) : ((!u || u > x.length - 1) && (u = x.length - 1), p = S - (d = x[x.length - 1 - u].t)), m === "pingpong") {
                        if (Math.floor((b - d) / p) % 2 != 0) return this.getValueAtTime((p - (b - d) % p + d) / this.comp.globalData.frameRate, 0)
                    } else {
                        if (m === "offset") {
                            var k = this.getValueAtTime(d / this.comp.globalData.frameRate, 0),
                                _ = this.getValueAtTime(S / this.comp.globalData.frameRate, 0),
                                A = this.getValueAtTime(((b - d) % p + d) / this.comp.globalData.frameRate, 0),
                                T = Math.floor((b - d) / p);
                            if (this.pv.length) {
                                for (y = (v = new Array(k.length)).length, n = 0; n < y; n += 1) v[n] = (_[n] - k[n]) * T + A[n];
                                return v
                            }
                            return (_ - k) * T + A
                        }
                        if (m === "continue") {
                            var E = this.getValueAtTime(S / this.comp.globalData.frameRate, 0),
                                C = this.getValueAtTime((S - .001) / this.comp.globalData.frameRate, 0);
                            if (this.pv.length) {
                                for (y = (v = new Array(E.length)).length, n = 0; n < y; n += 1) v[n] = E[n] + (E[n] - C[n]) * ((b - S) / this.comp.globalData.frameRate) / 5e-4;
                                return v
                            }
                            return E + (b - S) / .001 * (E - C)
                        }
                    }
                    return this.getValueAtTime(((b - d) % p + d) / this.comp.globalData.frameRate, 0)
                }

                function e(m, u, h) {
                    if (!this.k) return this.pv;
                    m = m ? m.toLowerCase() : "";
                    var p, d, n, y, v, b = this.comp.renderedFrame,
                        x = this.keyframes,
                        S = x[0].t;
                    if (b >= S) return this.pv;
                    if (h ? d = S + (p = u ? Math.abs(this.elem.comp.globalData.frameRate * u) : Math.max(0, this.elem.data.op - S)) : ((!u || u > x.length - 1) && (u = x.length - 1), p = (d = x[u].t) - S), m === "pingpong") {
                        if (Math.floor((S - b) / p) % 2 == 0) return this.getValueAtTime(((S - b) % p + S) / this.comp.globalData.frameRate, 0)
                    } else {
                        if (m === "offset") {
                            var k = this.getValueAtTime(S / this.comp.globalData.frameRate, 0),
                                _ = this.getValueAtTime(d / this.comp.globalData.frameRate, 0),
                                A = this.getValueAtTime((p - (S - b) % p + S) / this.comp.globalData.frameRate, 0),
                                T = Math.floor((S - b) / p) + 1;
                            if (this.pv.length) {
                                for (y = (v = new Array(k.length)).length, n = 0; n < y; n += 1) v[n] = A[n] - (_[n] - k[n]) * T;
                                return v
                            }
                            return A - (_ - k) * T
                        }
                        if (m === "continue") {
                            var E = this.getValueAtTime(S / this.comp.globalData.frameRate, 0),
                                C = this.getValueAtTime((S + .001) / this.comp.globalData.frameRate, 0);
                            if (this.pv.length) {
                                for (y = (v = new Array(E.length)).length, n = 0; n < y; n += 1) v[n] = E[n] + (E[n] - C[n]) * (S - b) / .001;
                                return v
                            }
                            return E + (E - C) * (S - b) / .001
                        }
                    }
                    return this.getValueAtTime((p - ((S - b) % p + S)) / this.comp.globalData.frameRate, 0)
                }

                function r(m, u) {
                    if (!this.k) return this.pv;
                    if (m = .5 * (m || .4), (u = Math.floor(u || 5)) <= 1) return this.pv;
                    var h, p, d = this.comp.renderedFrame / this.comp.globalData.frameRate,
                        n = d - m,
                        y = u > 1 ? (d + m - n) / (u - 1) : 1,
                        v = 0,
                        b = 0;
                    for (h = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; v < u;) {
                        if (p = this.getValueAtTime(n + v * y), this.pv.length)
                            for (b = 0; b < this.pv.length; b += 1) h[b] += p[b];
                        else h += p;
                        v += 1
                    }
                    if (this.pv.length)
                        for (b = 0; b < this.pv.length; b += 1) h[b] /= u;
                    else h /= u;
                    return h
                }

                function i(m) {
                    this._transformCachingAtTime || (this._transformCachingAtTime = {
                        v: new Matrix
                    });
                    var u = this._transformCachingAtTime.v;
                    if (u.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
                        var h = this.a.getValueAtTime(m);
                        u.translate(-h[0] * this.a.mult, -h[1] * this.a.mult, h[2] * this.a.mult)
                    }
                    if (this.appliedTransformations < 2) {
                        var p = this.s.getValueAtTime(m);
                        u.scale(p[0] * this.s.mult, p[1] * this.s.mult, p[2] * this.s.mult)
                    }
                    if (this.sk && this.appliedTransformations < 3) {
                        var d = this.sk.getValueAtTime(m),
                            n = this.sa.getValueAtTime(m);
                        u.skewFromAxis(-d * this.sk.mult, n * this.sa.mult)
                    }
                    if (this.r && this.appliedTransformations < 4) {
                        var y = this.r.getValueAtTime(m);
                        u.rotate(-y * this.r.mult)
                    } else if (!this.r && this.appliedTransformations < 4) {
                        var v = this.rz.getValueAtTime(m),
                            b = this.ry.getValueAtTime(m),
                            x = this.rx.getValueAtTime(m),
                            S = this.or.getValueAtTime(m);
                        u.rotateZ(-v * this.rz.mult).rotateY(b * this.ry.mult).rotateX(x * this.rx.mult).rotateZ(-S[2] * this.or.mult).rotateY(S[1] * this.or.mult).rotateX(S[0] * this.or.mult)
                    }
                    if (this.data.p && this.data.p.s) {
                        var k = this.px.getValueAtTime(m),
                            _ = this.py.getValueAtTime(m);
                        if (this.data.p.z) {
                            var A = this.pz.getValueAtTime(m);
                            u.translate(k * this.px.mult, _ * this.py.mult, -A * this.pz.mult)
                        } else u.translate(k * this.px.mult, _ * this.py.mult, 0)
                    } else {
                        var T = this.p.getValueAtTime(m);
                        u.translate(T[0] * this.p.mult, T[1] * this.p.mult, -T[2] * this.p.mult)
                    }
                    return u
                }

                function a() {
                    return this.v.clone(new Matrix)
                }
                var s = TransformPropertyFactory.getTransformProperty;
                TransformPropertyFactory.getTransformProperty = function(m, u, h) {
                    var p = s(m, u, h);
                    return p.dynamicProperties.length ? p.getValueAtTime = i.bind(p) : p.getValueAtTime = a.bind(p), p.setGroupProperty = expressionHelpers.setGroupProperty, p
                };
                var f = PropertyFactory.getProp;
                PropertyFactory.getProp = function(m, u, h, p, d) {
                    var n = f(m, u, h, p, d);
                    n.kf ? n.getValueAtTime = expressionHelpers.getValueAtTime.bind(n) : n.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(n), n.setGroupProperty = expressionHelpers.setGroupProperty, n.loopOut = t, n.loopIn = e, n.smooth = r, n.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(n), n.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(n), n.numKeys = u.a === 1 ? u.k.length : 0, n.propertyIndex = u.ix;
                    var y = 0;
                    return h !== 0 && (y = createTypedArray("float32", u.a === 1 ? u.k[0].s.length : u.k.length)), n._cachingAtTime = {
                        lastFrame: initialDefaultFrame,
                        lastIndex: 0,
                        value: y
                    }, expressionHelpers.searchExpressions(m, u, n), n.k && d.addDynamicProperty(n), n
                };
                var o = ShapePropertyFactory.getConstructorFunction(),
                    g = ShapePropertyFactory.getKeyframedConstructorFunction();

                function c() {}
                c.prototype = {
                    vertices: function(m, u) {
                        this.k && this.getValue();
                        var h, p = this.v;
                        u !== void 0 && (p = this.getValueAtTime(u, 0));
                        var d = p._length,
                            n = p[m],
                            y = p.v,
                            v = createSizedArray(d);
                        for (h = 0; h < d; h += 1) v[h] = m === "i" || m === "o" ? [n[h][0] - y[h][0], n[h][1] - y[h][1]] : [n[h][0], n[h][1]];
                        return v
                    },
                    points: function(m) {
                        return this.vertices("v", m)
                    },
                    inTangents: function(m) {
                        return this.vertices("i", m)
                    },
                    outTangents: function(m) {
                        return this.vertices("o", m)
                    },
                    isClosed: function() {
                        return this.v.c
                    },
                    pointOnPath: function(m, u) {
                        var h = this.v;
                        u !== void 0 && (h = this.getValueAtTime(u, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(h));
                        for (var p, d = this._segmentsLength, n = d.lengths, y = d.totalLength * m, v = 0, b = n.length, x = 0; v < b;) {
                            if (x + n[v].addedLength > y) {
                                var S = v,
                                    k = h.c && v === b - 1 ? 0 : v + 1,
                                    _ = (y - x) / n[v].addedLength;
                                p = bez.getPointInSegment(h.v[S], h.v[k], h.o[S], h.i[k], _, n[v]);
                                break
                            }
                            x += n[v].addedLength, v += 1
                        }
                        return p || (p = h.c ? [h.v[0][0], h.v[0][1]] : [h.v[h._length - 1][0], h.v[h._length - 1][1]]), p
                    },
                    vectorOnPath: function(m, u, h) {
                        m == 1 ? m = this.v.c : m == 0 && (m = .999);
                        var p = this.pointOnPath(m, u),
                            d = this.pointOnPath(m + .001, u),
                            n = d[0] - p[0],
                            y = d[1] - p[1],
                            v = Math.sqrt(Math.pow(n, 2) + Math.pow(y, 2));
                        return v === 0 ? [0, 0] : h === "tangent" ? [n / v, y / v] : [-y / v, n / v]
                    },
                    tangentOnPath: function(m, u) {
                        return this.vectorOnPath(m, u, "tangent")
                    },
                    normalOnPath: function(m, u) {
                        return this.vectorOnPath(m, u, "normal")
                    },
                    setGroupProperty: expressionHelpers.setGroupProperty,
                    getValueAtTime: expressionHelpers.getStaticValueAtTime
                }, extendPrototype([c], o), extendPrototype([c], g), g.prototype.getValueAtTime = function(m) {
                    return this._cachingAtTime || (this._cachingAtTime = {
                        shapeValue: shapePool.clone(this.pv),
                        lastIndex: 0,
                        lastTime: initialDefaultFrame
                    }), m *= this.elem.globalData.frameRate, (m -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < m ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = m, this.interpolateShape(m, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue
                }, g.prototype.initiateExpression = ExpressionManager.initiateExpression;
                var l = ShapePropertyFactory.getShapeProp;
                ShapePropertyFactory.getShapeProp = function(m, u, h, p, d) {
                    var n = l(m, u, h, p, d);
                    return n.propertyIndex = u.ix, n.lock = !1, h === 3 ? expressionHelpers.searchExpressions(m, u.pt, n) : h === 4 && expressionHelpers.searchExpressions(m, u.ks, n), n.k && m.addDynamicProperty(n), n
                }
            }

            function initialize$1() {
                addPropertyDecorator()
            }

            function addDecorator() {
                TextProperty.prototype.getExpressionValue = function(t, e) {
                    var r = this.calculateExpression(e);
                    if (t.t !== r) {
                        var i = {};
                        return this.copyData(i, t), i.t = r.toString(), i.__complete = !1, i
                    }
                    return t
                }, TextProperty.prototype.searchProperty = function() {
                    var t = this.searchKeyframes(),
                        e = this.searchExpressions();
                    return this.kf = t || e, this.kf
                }, TextProperty.prototype.searchExpressions = function() {
                    return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null
                }
            }

            function initialize() {
                addDecorator()
            }

            function SVGComposableEffect() {}
            SVGComposableEffect.prototype = {
                createMergeNode: function(t, e) {
                    var r, i, a = createNS("feMerge");
                    for (a.setAttribute("result", t), i = 0; i < e.length; i += 1)(r = createNS("feMergeNode")).setAttribute("in", e[i]), a.appendChild(r), a.appendChild(r);
                    return a
                }
            };
            var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";

            function SVGTintFilter(t, e, r, i, a) {
                this.filterManager = e;
                var s = createNS("feColorMatrix");
                s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "linearRGB"), s.setAttribute("values", linearFilterValue + " 1 0"), this.linearFilter = s, s.setAttribute("result", i + "_tint_1"), t.appendChild(s), (s = createNS("feColorMatrix")).setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), s.setAttribute("result", i + "_tint_2"), t.appendChild(s), this.matrixFilter = s;
                var f = this.createMergeNode(i, [a, i + "_tint_1", i + "_tint_2"]);
                t.appendChild(f)
            }

            function SVGFillFilter(t, e, r, i) {
                this.filterManager = e;
                var a = createNS("feColorMatrix");
                a.setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), a.setAttribute("result", i), t.appendChild(a), this.matrixFilter = a
            }

            function SVGStrokeEffect(t, e, r) {
                this.initialized = !1, this.filterManager = e, this.elem = r, this.paths = []
            }

            function SVGTritoneFilter(t, e, r, i) {
                this.filterManager = e;
                var a = createNS("feColorMatrix");
                a.setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "linearRGB"), a.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), t.appendChild(a);
                var s = createNS("feComponentTransfer");
                s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("result", i), this.matrixFilter = s;
                var f = createNS("feFuncR");
                f.setAttribute("type", "table"), s.appendChild(f), this.feFuncR = f;
                var o = createNS("feFuncG");
                o.setAttribute("type", "table"), s.appendChild(o), this.feFuncG = o;
                var g = createNS("feFuncB");
                g.setAttribute("type", "table"), s.appendChild(g), this.feFuncB = g, t.appendChild(s)
            }

            function SVGProLevelsFilter(t, e, r, i) {
                this.filterManager = e;
                var a = this.filterManager.effectElements,
                    s = createNS("feComponentTransfer");
                (a[10].p.k || a[10].p.v !== 0 || a[11].p.k || a[11].p.v !== 1 || a[12].p.k || a[12].p.v !== 1 || a[13].p.k || a[13].p.v !== 0 || a[14].p.k || a[14].p.v !== 1) && (this.feFuncR = this.createFeFunc("feFuncR", s)), (a[17].p.k || a[17].p.v !== 0 || a[18].p.k || a[18].p.v !== 1 || a[19].p.k || a[19].p.v !== 1 || a[20].p.k || a[20].p.v !== 0 || a[21].p.k || a[21].p.v !== 1) && (this.feFuncG = this.createFeFunc("feFuncG", s)), (a[24].p.k || a[24].p.v !== 0 || a[25].p.k || a[25].p.v !== 1 || a[26].p.k || a[26].p.v !== 1 || a[27].p.k || a[27].p.v !== 0 || a[28].p.k || a[28].p.v !== 1) && (this.feFuncB = this.createFeFunc("feFuncB", s)), (a[31].p.k || a[31].p.v !== 0 || a[32].p.k || a[32].p.v !== 1 || a[33].p.k || a[33].p.v !== 1 || a[34].p.k || a[34].p.v !== 0 || a[35].p.k || a[35].p.v !== 1) && (this.feFuncA = this.createFeFunc("feFuncA", s)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (s.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(s)), (a[3].p.k || a[3].p.v !== 0 || a[4].p.k || a[4].p.v !== 1 || a[5].p.k || a[5].p.v !== 1 || a[6].p.k || a[6].p.v !== 0 || a[7].p.k || a[7].p.v !== 1) && ((s = createNS("feComponentTransfer")).setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("result", i), t.appendChild(s), this.feFuncRComposed = this.createFeFunc("feFuncR", s), this.feFuncGComposed = this.createFeFunc("feFuncG", s), this.feFuncBComposed = this.createFeFunc("feFuncB", s))
            }

            function SVGDropShadowEffect(t, e, r, i, a) {
                var s = e.container.globalData.renderConfig.filterSize,
                    f = e.data.fs || s;
                t.setAttribute("x", f.x || s.x), t.setAttribute("y", f.y || s.y), t.setAttribute("width", f.width || s.width), t.setAttribute("height", f.height || s.height), this.filterManager = e;
                var o = createNS("feGaussianBlur");
                o.setAttribute("in", "SourceAlpha"), o.setAttribute("result", i + "_drop_shadow_1"), o.setAttribute("stdDeviation", "0"), this.feGaussianBlur = o, t.appendChild(o);
                var g = createNS("feOffset");
                g.setAttribute("dx", "25"), g.setAttribute("dy", "0"), g.setAttribute("in", i + "_drop_shadow_1"), g.setAttribute("result", i + "_drop_shadow_2"), this.feOffset = g, t.appendChild(g);
                var c = createNS("feFlood");
                c.setAttribute("flood-color", "#00ff00"), c.setAttribute("flood-opacity", "1"), c.setAttribute("result", i + "_drop_shadow_3"), this.feFlood = c, t.appendChild(c);
                var l = createNS("feComposite");
                l.setAttribute("in", i + "_drop_shadow_3"), l.setAttribute("in2", i + "_drop_shadow_2"), l.setAttribute("operator", "in"), l.setAttribute("result", i + "_drop_shadow_4"), t.appendChild(l);
                var m = this.createMergeNode(i, [i + "_drop_shadow_4", a]);
                t.appendChild(m)
            }
            extendPrototype([SVGComposableEffect], SVGTintFilter), SVGTintFilter.prototype.renderFrame = function(t) {
                if (t || this.filterManager._mdf) {
                    var e = this.filterManager.effectElements[0].p.v,
                        r = this.filterManager.effectElements[1].p.v,
                        i = this.filterManager.effectElements[2].p.v / 100;
                    this.linearFilter.setAttribute("values", linearFilterValue + " " + i + " 0"), this.matrixFilter.setAttribute("values", r[0] - e[0] + " 0 0 0 " + e[0] + " " + (r[1] - e[1]) + " 0 0 0 " + e[1] + " " + (r[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 1 0")
                }
            }, SVGFillFilter.prototype.renderFrame = function(t) {
                if (t || this.filterManager._mdf) {
                    var e = this.filterManager.effectElements[2].p.v,
                        r = this.filterManager.effectElements[6].p.v;
                    this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + r + " 0")
                }
            }, SVGStrokeEffect.prototype.initialize = function() {
                var t, e, r, i, a = this.elem.layerElement.children || this.elem.layerElement.childNodes;
                for (this.filterManager.effectElements[1].p.v === 1 ? (i = this.elem.maskManager.masksProperties.length, r = 0) : i = (r = this.filterManager.effectElements[0].p.v - 1) + 1, (e = createNS("g")).setAttribute("fill", "none"), e.setAttribute("stroke-linecap", "round"), e.setAttribute("stroke-dashoffset", 1); r < i; r += 1) t = createNS("path"), e.appendChild(t), this.paths.push({
                    p: t,
                    m: r
                });
                if (this.filterManager.effectElements[10].p.v === 3) {
                    var s = createNS("mask"),
                        f = createElementID();
                    s.setAttribute("id", f), s.setAttribute("mask-type", "alpha"), s.appendChild(e), this.elem.globalData.defs.appendChild(s);
                    var o = createNS("g");
                    for (o.setAttribute("mask", "url(" + getLocationHref() + "#" + f + ")"); a[0];) o.appendChild(a[0]);
                    this.elem.layerElement.appendChild(o), this.masker = s, e.setAttribute("stroke", "#fff")
                } else if (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) {
                    if (this.filterManager.effectElements[10].p.v === 2)
                        for (a = this.elem.layerElement.children || this.elem.layerElement.childNodes; a.length;) this.elem.layerElement.removeChild(a[0]);
                    this.elem.layerElement.appendChild(e), this.elem.layerElement.removeAttribute("mask"), e.setAttribute("stroke", "#fff")
                }
                this.initialized = !0, this.pathMasker = e
            }, SVGStrokeEffect.prototype.renderFrame = function(t) {
                var e;
                this.initialized || this.initialize();
                var r, i, a = this.paths.length;
                for (e = 0; e < a; e += 1)
                    if (this.paths[e].m !== -1 && (r = this.elem.maskManager.viewData[this.paths[e].m], i = this.paths[e].p, (t || this.filterManager._mdf || r.prop._mdf) && i.setAttribute("d", r.lastPath), t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || r.prop._mdf)) {
                        var s;
                        if (this.filterManager.effectElements[7].p.v !== 0 || this.filterManager.effectElements[8].p.v !== 100) {
                            var f = .01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                                o = .01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                                g = i.getTotalLength();
                            s = "0 0 0 " + g * f + " ";
                            var c, l = g * (o - f),
                                m = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01,
                                u = Math.floor(l / m);
                            for (c = 0; c < u; c += 1) s += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01 + " ";
                            s += "0 " + 10 * g + " 0 0"
                        } else s = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01;
                        i.setAttribute("stroke-dasharray", s)
                    }
                if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) && (t || this.filterManager.effectElements[3].p._mdf)) {
                    var h = this.filterManager.effectElements[3].p.v;
                    this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(255 * h[0]) + "," + bmFloor(255 * h[1]) + "," + bmFloor(255 * h[2]) + ")")
                }
            }, SVGTritoneFilter.prototype.renderFrame = function(t) {
                if (t || this.filterManager._mdf) {
                    var e = this.filterManager.effectElements[0].p.v,
                        r = this.filterManager.effectElements[1].p.v,
                        i = this.filterManager.effectElements[2].p.v,
                        a = i[0] + " " + r[0] + " " + e[0],
                        s = i[1] + " " + r[1] + " " + e[1],
                        f = i[2] + " " + r[2] + " " + e[2];
                    this.feFuncR.setAttribute("tableValues", a), this.feFuncG.setAttribute("tableValues", s), this.feFuncB.setAttribute("tableValues", f)
                }
            }, SVGProLevelsFilter.prototype.createFeFunc = function(t, e) {
                var r = createNS(t);
                return r.setAttribute("type", "table"), e.appendChild(r), r
            }, SVGProLevelsFilter.prototype.getTableValue = function(t, e, r, i, a) {
                for (var s, f, o = 0, g = Math.min(t, e), c = Math.max(t, e), l = Array.call(null, {
                        length: 256
                    }), m = 0, u = a - i, h = e - t; o <= 256;) f = (s = o / 256) <= g ? h < 0 ? a : i : s >= c ? h < 0 ? i : a : i + u * Math.pow((s - t) / h, 1 / r), l[m] = f, m += 1, o += 256 / 255;
                return l.join(" ")
            }, SVGProLevelsFilter.prototype.renderFrame = function(t) {
                if (t || this.filterManager._mdf) {
                    var e, r = this.filterManager.effectElements;
                    this.feFuncRComposed && (t || r[3].p._mdf || r[4].p._mdf || r[5].p._mdf || r[6].p._mdf || r[7].p._mdf) && (e = this.getTableValue(r[3].p.v, r[4].p.v, r[5].p.v, r[6].p.v, r[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || r[10].p._mdf || r[11].p._mdf || r[12].p._mdf || r[13].p._mdf || r[14].p._mdf) && (e = this.getTableValue(r[10].p.v, r[11].p.v, r[12].p.v, r[13].p.v, r[14].p.v), this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || r[17].p._mdf || r[18].p._mdf || r[19].p._mdf || r[20].p._mdf || r[21].p._mdf) && (e = this.getTableValue(r[17].p.v, r[18].p.v, r[19].p.v, r[20].p.v, r[21].p.v), this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || r[24].p._mdf || r[25].p._mdf || r[26].p._mdf || r[27].p._mdf || r[28].p._mdf) && (e = this.getTableValue(r[24].p.v, r[25].p.v, r[26].p.v, r[27].p.v, r[28].p.v), this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || r[31].p._mdf || r[32].p._mdf || r[33].p._mdf || r[34].p._mdf || r[35].p._mdf) && (e = this.getTableValue(r[31].p.v, r[32].p.v, r[33].p.v, r[34].p.v, r[35].p.v), this.feFuncA.setAttribute("tableValues", e))
                }
            }, extendPrototype([SVGComposableEffect], SVGDropShadowEffect), SVGDropShadowEffect.prototype.renderFrame = function(t) {
                if (t || this.filterManager._mdf) {
                    if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), t || this.filterManager.effectElements[0].p._mdf) {
                        var e = this.filterManager.effectElements[0].p.v;
                        this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2])))
                    }
                    if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
                        var r = this.filterManager.effectElements[3].p.v,
                            i = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
                            a = r * Math.cos(i),
                            s = r * Math.sin(i);
                        this.feOffset.setAttribute("dx", a), this.feOffset.setAttribute("dy", s)
                    }
                }
            };
            var _svgMatteSymbols = [];

            function SVGMatte3Effect(t, e, r) {
                this.initialized = !1, this.filterManager = e, this.filterElem = t, this.elem = r, r.matteElement = createNS("g"), r.matteElement.appendChild(r.layerElement), r.matteElement.appendChild(r.transformedElement), r.baseElement = r.matteElement
            }

            function SVGGaussianBlurEffect(t, e, r, i) {
                t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "300%"), t.setAttribute("height", "300%"), this.filterManager = e;
                var a = createNS("feGaussianBlur");
                a.setAttribute("result", i), t.appendChild(a), this.feGaussianBlur = a
            }
            return SVGMatte3Effect.prototype.findSymbol = function(t) {
                for (var e = 0, r = _svgMatteSymbols.length; e < r;) {
                    if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e];
                    e += 1
                }
                return null
            }, SVGMatte3Effect.prototype.replaceInParent = function(t, e) {
                var r = t.layerElement.parentNode;
                if (r) {
                    for (var i, a = r.children, s = 0, f = a.length; s < f && a[s] !== t.layerElement;) s += 1;
                    s <= f - 2 && (i = a[s + 1]);
                    var o = createNS("use");
                    o.setAttribute("href", "#" + e), i ? r.insertBefore(o, i) : r.appendChild(o)
                }
            }, SVGMatte3Effect.prototype.setElementAsMask = function(t, e) {
                if (!this.findSymbol(e)) {
                    var r = createElementID(),
                        i = createNS("mask");
                    i.setAttribute("id", e.layerId), i.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(e);
                    var a = t.globalData.defs;
                    a.appendChild(i);
                    var s = createNS("symbol");
                    s.setAttribute("id", r), this.replaceInParent(e, r), s.appendChild(e.layerElement), a.appendChild(s);
                    var f = createNS("use");
                    f.setAttribute("href", "#" + r), i.appendChild(f), e.data.hd = !1, e.show()
                }
                t.setMatte(e.layerId)
            }, SVGMatte3Effect.prototype.initialize = function() {
                for (var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, r = 0, i = e.length; r < i;) e[r] && e[r].data.ind === t && this.setElementAsMask(this.elem, e[r]), r += 1;
                this.initialized = !0
            }, SVGMatte3Effect.prototype.renderFrame = function() {
                this.initialized || this.initialize()
            }, SVGGaussianBlurEffect.prototype.renderFrame = function(t) {
                if (t || this.filterManager._mdf) {
                    var e = .3 * this.filterManager.effectElements[0].p.v,
                        r = this.filterManager.effectElements[1].p.v,
                        i = r == 3 ? 0 : e,
                        a = r == 2 ? 0 : e;
                    this.feGaussianBlur.setAttribute("stdDeviation", i + " " + a);
                    var s = this.filterManager.effectElements[2].p.v == 1 ? "wrap" : "duplicate";
                    this.feGaussianBlur.setAttribute("edgeMode", s)
                }
            }, registerRenderer("canvas", CanvasRenderer), registerRenderer("html", HybridRenderer), registerRenderer("svg", SVGRenderer), ShapeModifiers.registerModifier("tm", TrimModifier), ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeModifiers.registerModifier("rd", RoundCornersModifier), ShapeModifiers.registerModifier("zz", ZigZagModifier), ShapeModifiers.registerModifier("op", OffsetPathModifier), setExpressionsPlugin(Expressions), setExpressionInterfaces(getInterface), initialize$1(), initialize(), registerEffect(20, SVGTintFilter, !0), registerEffect(21, SVGFillFilter, !0), registerEffect(22, SVGStrokeEffect, !1), registerEffect(23, SVGTritoneFilter, !0), registerEffect(24, SVGProLevelsFilter, !0), registerEffect(25, SVGDropShadowEffect, !0), registerEffect(28, SVGMatte3Effect, !1), registerEffect(29, SVGGaussianBlurEffect, !0), lottie
        })
    }),
    REACT_LOTTIE_PLAYER_VERSION = "3.5.3",
    LOTTIE_WEB_VERSION = "^5.10.2",
    PlayerState, PlayerEvent;

function parseSrc(t) {
    if (typeof t == "object") return t;
    try {
        return JSON.parse(t)
    } catch {}
    try {
        return new URL(t).toString()
    } catch {}
    return t
}(function(t) {
    t.Loading = "loading", t.Playing = "playing", t.Paused = "paused", t.Stopped = "stopped", t.Frozen = "frozen", t.Error = "error"
})(PlayerState || (PlayerState = {})),
function(t) {
    t.Load = "load", t.InstanceSaved = "instanceSaved", t.Error = "error", t.Ready = "ready", t.Play = "play", t.Pause = "pause", t.Stop = "stop", t.Freeze = "freeze", t.Loop = "loop", t.Complete = "complete", t.Frame = "frame"
}(PlayerEvent || (PlayerEvent = {}));
var defaultOptions = {
        clearCanvas: !1,
        hideOnTransparent: !0,
        progressiveLoad: !0
    },
    Player = function(t) {
        function e(r) {
            var i = t.call(this, r) || this;
            return i.container = null, i.unmounted = !1, i.handleBgChange = function(a) {
                i.setState({
                    background: a
                })
            }, i.triggerDownload = function(a, s) {
                var f = document.createElement("a");
                f.href = a, f.download = s, document.body.appendChild(f), f.click(), document.body.removeChild(f)
            }, i.snapshot = function(a) {
                var s;
                a === void 0 && (a = !0);
                var f = i.props.id ? i.props.id : "lottie",
                    o = document.getElementById(f);
                if (i.props.renderer === "svg") {
                    if (o) {
                        var g = o.querySelector("svg");
                        if (g) {
                            var c = new XMLSerializer().serializeToString(g);
                            s = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(c)
                        }
                    }
                    a && i.triggerDownload(s, "snapshot.svg")
                } else if (i.props.renderer === "canvas") {
                    if (o) {
                        var l = o.querySelector("canvas");
                        l && (s = l.toDataURL("image/png"))
                    }
                    a && i.triggerDownload(s, "snapshot.png")
                }
                return s
            }, typeof window < "u" && (window.lottie = lottie), i.state = {
                animationData: null,
                background: "transparent",
                containerRef: reactExports.createRef(),
                debug: !0,
                instance: null,
                playerState: PlayerState.Loading,
                seeker: 0
            }, i
        }
        return __extends(e, t), e.getDerivedStateFromProps = function(r, i) {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(a) {
                    return r.background !== i.background ? [2, {
                        background: r.background
                    }] : [2, null]
                })
            })
        }, e.prototype.getVersions = function() {
            return {
                lottieWebVersion: LOTTIE_WEB_VERSION,
                lottiePlayerVersion: REACT_LOTTIE_PLAYER_VERSION
            }
        }, e.prototype.componentDidMount = function() {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return this.unmounted ? [3, 2] : [4, this.createLottie()];
                        case 1:
                            r.sent(), r.label = 2;
                        case 2:
                            return [2]
                    }
                })
            })
        }, e.prototype.componentWillUnmount = function() {
            this.unmounted = !0, this.state.instance && this.state.instance.destroy()
        }, e.prototype.componentDidUpdate = function(r) {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return this.props.src === r.src ? [3, 2] : (this.state.instance && this.state.instance.destroy(), [4, this.createLottie()]);
                        case 1:
                            i.sent(), i.label = 2;
                        case 2:
                            return [2]
                    }
                })
            })
        }, e.prototype.render = function() {
            var r = this,
                i = this.props,
                a = i.children,
                s = i.loop,
                f = i.style,
                o = i.onBackgroundChange,
                g = i.className,
                c = this.state,
                l = c.animationData,
                m = c.instance,
                u = c.playerState,
                h = c.seeker,
                p = c.debug,
                d = c.background;
            return reactExports.createElement("div", {
                className: "lf-player-container"
            }, this.state.playerState === PlayerState.Error ? reactExports.createElement("div", {
                className: "lf-error"
            }, reactExports.createElement("span", {
                "aria-label": "error-symbol",
                role: "img"
            }, "⚠️")) : reactExports.createElement("div", {
                id: this.props.id ? this.props.id : "lottie",
                ref: function(n) {
                    return r.container = n
                },
                style: __assign({
                    background: d,
                    margin: "0 auto",
                    outline: "none",
                    overflow: "hidden"
                }, f),
                className: g
            }), reactExports.Children.map(a, function(n) {
                return reactExports.isValidElement(n) ? reactExports.cloneElement(n, {
                    animationData: l,
                    background: d,
                    debug: p,
                    instance: m,
                    loop: s,
                    pause: function() {
                        return r.pause()
                    },
                    play: function() {
                        return r.play()
                    },
                    playerState: u,
                    seeker: h,
                    setBackground: function(y) {
                        r.setState({
                            background: y
                        }), typeof o == "function" && o(y)
                    },
                    setSeeker: function(y, v) {
                        return r.setSeeker(y, v)
                    },
                    stop: function() {
                        return r.stop()
                    },
                    toggleDebug: function() {
                        return r.toggleDebug()
                    },
                    setLoop: function(y) {
                        return r.setLoop(y)
                    },
                    colorChangedEvent: function(y) {
                        r.handleBgChange(y)
                    },
                    snapshot: function() {
                        r.snapshot()
                    }
                }) : null
            }))
        }, e.prototype.toggleDebug = function() {
            this.setState({
                debug: !this.state.debug
            })
        }, e.prototype.createLottie = function() {
            return __awaiter(this, void 0, void 0, function() {
                var r, i, a, s, f, o, g, c, l, m, u, h, p, d, n = this;
                return __generator(this, function(y) {
                    switch (y.label) {
                        case 0:
                            if (r = this.props, i = r.autoplay, a = r.direction, s = r.loop, f = r.lottieRef, o = r.renderer, g = r.speed, c = r.src, l = r.background, m = r.rendererSettings, u = r.hover, h = this.state.instance, !c || !this.container) return [2];
                            y.label = 1;
                        case 1:
                            return y.trys.push([1, 5, , 6]), typeof(p = parseSrc(c)) != "string" ? [3, 4] : [4, fetch(p).catch(function() {
                                throw n.setState({
                                    playerState: PlayerState.Error
                                }), n.triggerEvent(PlayerEvent.Error), new Error("@LottieFiles/lottie-react: Animation data could not be fetched.")
                            })];
                        case 2:
                            return [4, y.sent().json().catch(function() {
                                throw n.setState({
                                    playerState: PlayerState.Error
                                }), n.triggerEvent(PlayerEvent.Error), new Error("@LottieFiles/lottie-react: Animation data could not be fetched.")
                            })];
                        case 3:
                            p = y.sent(), y.label = 4;
                        case 4:
                            return h && h.destroy(), d = lottie.loadAnimation({
                                rendererSettings: m || defaultOptions,
                                animationData: p,
                                autoplay: i || !1,
                                container: this.container,
                                loop: s || !1,
                                renderer: o
                            }), g && d.setSpeed(g), this.setState({
                                animationData: p
                            }), this.setState({
                                instance: d
                            }, function() {
                                n.triggerEvent(PlayerEvent.InstanceSaved), typeof f == "function" && f(d), i && n.play()
                            }), d.addEventListener("enterFrame", function() {
                                n.triggerEvent(PlayerEvent.Frame), n.setState({
                                    seeker: Math.floor(d.currentFrame)
                                })
                            }), d.addEventListener("DOMLoaded", function() {
                                n.triggerEvent(PlayerEvent.Load)
                            }), d.addEventListener("data_ready", function() {
                                n.triggerEvent(PlayerEvent.Ready)
                            }), d.addEventListener("data_failed", function() {
                                n.setState({
                                    playerState: PlayerState.Error
                                }), n.triggerEvent(PlayerEvent.Error)
                            }), d.addEventListener("loopComplete", function() {
                                n.triggerEvent(PlayerEvent.Loop)
                            }), d.addEventListener("complete", function() {
                                n.triggerEvent(PlayerEvent.Complete), n.setState({
                                    playerState: PlayerState.Paused
                                }), n.props.keepLastFrame && !n.props.loop || n.setSeeker(0)
                            }), this.container && (this.container.addEventListener("mouseenter", function() {
                                u && n.state.playerState !== PlayerState.Playing && (n.props.keepLastFrame && n.stop(), n.play())
                            }), this.container.addEventListener("mouseleave", function() {
                                u && n.state.playerState === PlayerState.Playing && n.stop()
                            })), g && this.setPlayerSpeed(g), a && this.setPlayerDirection(a), l && this.setState({
                                background: l
                            }), [3, 6];
                        case 5:
                            return y.sent(), this.setState({
                                playerState: PlayerState.Error
                            }), this.triggerEvent(PlayerEvent.Error), [3, 6];
                        case 6:
                            return [2]
                    }
                })
            })
        }, e.prototype.play = function() {
            var r = this.state.instance;
            r && (this.triggerEvent(PlayerEvent.Play), r.play(), this.setState({
                playerState: PlayerState.Playing
            }))
        }, e.prototype.pause = function() {
            var r = this.state.instance;
            r && (this.triggerEvent(PlayerEvent.Pause), r.pause(), this.setState({
                playerState: PlayerState.Paused
            }))
        }, e.prototype.stop = function() {
            var r = this.state.instance;
            r && (this.triggerEvent(PlayerEvent.Stop), r.stop(), this.setState({
                playerState: PlayerState.Stopped
            }))
        }, e.prototype.setPlayerSpeed = function(r) {
            var i = this.state.instance;
            i && i.setSpeed(r)
        }, e.prototype.setPlayerDirection = function(r) {
            var i = this.state.instance;
            i && i.setDirection(r)
        }, e.prototype.setSeeker = function(r, i) {
            i === void 0 && (i = !1);
            var a = this.state,
                s = a.instance,
                f = a.playerState;
            s && (i && f === PlayerState.Playing ? s.goToAndPlay(r, !0) : (s.goToAndStop(r, !0), this.triggerEvent(PlayerEvent.Pause), this.setState({
                playerState: PlayerState.Paused
            })))
        }, e.prototype.setLoop = function(r) {
            var i = this.state.instance;
            i && (i.loop = r, this.setState({
                instance: i
            }))
        }, e.prototype.triggerEvent = function(r) {
            var i = this.props.onEvent;
            i && i(r)
        }, e.defaultProps = {
            loop: !1
        }, e
    }(reactExports.Component);

function styleInject(t, e) {
    e === void 0 && (e = {});
    var r = e.insertAt;
    if (t && typeof document < "u") {
        var i = document.head || document.getElementsByTagName("head")[0],
            a = document.createElement("style");
        a.type = "text/css", r === "top" && i.firstChild ? i.insertBefore(a, i.firstChild) : i.appendChild(a), a.styleSheet ? a.styleSheet.cssText = t : a.appendChild(document.createTextNode(t))
    }
}
var css_248z = `.lf-progress {
  -webkit-appearance: none;
  -moz-apperance: none;
  width: 100%;
  /* margin: 0 10px; */
  height: 4px;
  border-radius: 3px;
  cursor: pointer;
}
.lf-progress:focus {
  outline: none;
  border: none;
}
.lf-progress::-moz-range-track {
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
}
.lf-progress::-webkit-slider-thumb {
  -webkit-appearance: none !important;
  height: 13px;
  width: 13px;
  border: 0;
  border-radius: 50%;
  background: #0fccce;
  cursor: pointer;
}
.lf-progress::-moz-range-thumb {
  -moz-appearance: none !important;
  height: 13px;
  width: 13px;
  border: 0;
  border-radius: 50%;
  background: #0fccce;
  cursor: pointer;
}
.lf-progress::-ms-track {
  width: 100%;
  height: 3px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
.lf-progress::-ms-fill-lower {
  background: #ccc;
  border-radius: 3px;
}
.lf-progress::-ms-fill-upper {
  background: #ccc;
  border-radius: 3px;
}
.lf-progress::-ms-thumb {
  border: 0;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background: #0fccce;
  cursor: pointer;
}
.lf-progress:focus::-ms-fill-lower {
  background: #ccc;
}
.lf-progress:focus::-ms-fill-upper {
  background: #ccc;
}
.lf-player-container :focus {
  outline: 0;
}
.lf-popover {
  position: relative;
}

.lf-popover-content {
  display: inline-block;
  position: absolute;
  opacity: 1;
  visibility: visible;
  transform: translate(0, -10px);
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
  transition: all 0.3s cubic-bezier(0.75, -0.02, 0.2, 0.97);
}

.lf-popover-content.hidden {
  opacity: 0;
  visibility: hidden;
  transform: translate(0, 0px);
}

.lf-player-btn-container {
  display: flex;
  align-items: center;
}
.lf-player-btn {
  cursor: pointer;
  fill: #999;
  width: 14px;
}

.lf-player-btn.active {
  fill: #555;
}

.lf-popover {
  position: relative;
}

.lf-popover-content {
  display: inline-block;
  position: absolute;
  background-color: #ffffff;
  opacity: 1;

  transform: translate(0, -10px);
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
  transition: all 0.3s cubic-bezier(0.75, -0.02, 0.2, 0.97);
  padding: 10px;
}

.lf-popover-content.hidden {
  opacity: 0;
  visibility: hidden;
  transform: translate(0, 0px);
}

.lf-arrow {
  position: absolute;
  z-index: -1;
  content: '';
  bottom: -9px;
  border-style: solid;
  border-width: 10px 10px 0px 10px;
}

.lf-left-align,
.lf-left-align .lfarrow {
  left: 0;
  right: unset;
}

.lf-right-align,
.lf-right-align .lf-arrow {
  right: 0;
  left: unset;
}

.lf-text-input {
  border: 1px #ccc solid;
  border-radius: 5px;
  padding: 3px;
  width: 60px;
  margin: 0;
}

.lf-color-picker {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 90px;
}

.lf-color-selectors {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.lf-color-component {
  display: flex;
  flex-direction: row;
  font-size: 12px;
  align-items: center;
  justify-content: center;
}

.lf-color-component strong {
  width: 40px;
}

.lf-color-component input[type='range'] {
  margin: 0 0 0 10px;
}

.lf-color-component input[type='number'] {
  width: 50px;
  margin: 0 0 0 10px;
}

.lf-color-preview {
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-left: 5px;
}

.lf-preview {
  height: 60px;
  width: 60px;
}

.lf-popover-snapshot {
  width: 150px;
}
.lf-popover-snapshot h5 {
  margin: 5px 0 10px 0;
  font-size: 0.75rem;
}
.lf-popover-snapshot a {
  display: block;
  text-decoration: none;
}
.lf-popover-snapshot a:before {
  content: '⥼';
  margin-right: 5px;
}
.lf-popover-snapshot .lf-note {
  display: block;
  margin-top: 10px;
  color: #999;
}
.lf-player-controls > div {
  margin-right: 5px;
  margin-left: 5px;
}
.lf-player-controls > div:first-child {
  margin-left: 0px;
}
.lf-player-controls > div:last-child {
  margin-right: 0px;
}
`;
styleInject(css_248z);
var ColorPicker = function(t) {
        function e() {
            var r = t !== null && t.apply(this, arguments) || this;
            return r.state = {
                red: 0,
                green: 0,
                blue: 0,
                rgba: null,
                hex: "#000000",
                colorComponents: []
            }, r.handleChange = function(i, a) {
                if (i === "r") {
                    var s = "#" + (256 | a).toString(16).slice(1) + (256 | r.state.green).toString(16).slice(1) + (256 | r.state.blue).toString(16).slice(1);
                    r.setState({
                        hex: s
                    })
                } else i === "g" ? (s = "#" + (256 | r.state.red).toString(16).slice(1) + (256 | a).toString(16).slice(1) + (256 | r.state.blue).toString(16).slice(1), r.setState({
                    hex: s
                })) : i === "b" && (s = "#" + (256 | r.state.red).toString(16).slice(1) + (256 | r.state.green).toString(16).slice(1) + (256 | a).toString(16).slice(1), r.setState({
                    hex: s
                }))
            }, r.parseColor = function(i) {
                var a;
                if (typeof i == "string") {
                    if (i[0] === "#") {
                        var s = i.length === 4 ? [i.slice(1, 2), i.slice(2, 3), i.slice(3, 4)].map(function(f) {
                            return parseInt("" + f + f, 16)
                        }) : [i.slice(1, 3), i.slice(3, 5), i.slice(5, 7)].map(function(f) {
                            return parseInt(f, 16)
                        });
                        r.setState({
                            colorComponents: s
                        })
                    } else i.startsWith("rgb") && (s = (a = i.match(/\d+/g)) === null || a === void 0 ? void 0 : a.map(function(f) {
                        return parseInt(f)
                    })) !== void 0 && r.setState({
                        colorComponents: s
                    });
                    r.state.colorComponents.length && (r.setState({
                        red: r.state.colorComponents[0]
                    }), r.setState({
                        green: r.state.colorComponents[1]
                    }), r.setState({
                        blue: r.state.colorComponents[2]
                    }))
                }
            }, r
        }
        return __extends(e, t), e.prototype.componentDidUpdate = function(r, i) {
            return this.props.colorChangedEvent && this.state.hex !== i.hex && this.props.colorChangedEvent(this.state.hex), !0
        }, e.prototype.render = function() {
            var r = this;
            return reactExports.createElement("div", {
                className: "lf-color-picker"
            }, reactExports.createElement("div", {
                className: "lf-color-selectors"
            }, reactExports.createElement("div", {
                className: "lf-color-component"
            }, reactExports.createElement("strong", null, "Red"), reactExports.createElement("input", {
                type: "range",
                min: "0",
                max: "255",
                value: this.state.red,
                onChange: function(i) {
                    r.setState({
                        red: i.target.value
                    }), r.handleChange("r", i.target.value)
                }
            }), reactExports.createElement("input", {
                className: "lf-text-input",
                type: "number",
                min: "0",
                max: "255",
                value: this.state.red,
                onChange: function(i) {
                    r.setState({
                        red: i.target.value
                    }), r.handleChange("r", i.target.value)
                }
            })), reactExports.createElement("div", {
                className: "lf-color-component"
            }, reactExports.createElement("strong", null, "Green"), reactExports.createElement("input", {
                type: "range",
                min: "0",
                max: "255",
                value: this.state.green,
                onChange: function(i) {
                    r.setState({
                        green: i.target.value
                    }), r.handleChange("g", i.target.value)
                }
            }), reactExports.createElement("input", {
                className: "lf-text-input",
                type: "number",
                min: "0",
                max: "255",
                value: this.state.green,
                onChange: function(i) {
                    r.setState({
                        green: i.target.value
                    }), r.handleChange("g", i.target.value)
                }
            })), reactExports.createElement("div", {
                className: "lf-color-component"
            }, reactExports.createElement("strong", null, "Blue"), reactExports.createElement("input", {
                type: "range",
                min: "0",
                max: "255",
                value: this.state.blue,
                onChange: function(i) {
                    r.setState({
                        blue: i.target.value
                    }), r.handleChange("b", i.target.value)
                }
            }), reactExports.createElement("input", {
                className: "lf-text-input",
                type: "number",
                min: "0",
                max: "255",
                value: this.state.blue,
                onChange: function(i) {
                    r.setState({
                        blue: i.target.value
                    }), r.handleChange("b", i.target.value)
                }
            }))), reactExports.createElement("div", {
                className: "lf-color-preview"
            }, reactExports.createElement("div", {
                className: "lf-preview",
                style: {
                    background: "rgb(" + this.state.red + ", " + this.state.green + ", " + this.state.blue + ")"
                }
            }), reactExports.createElement("div", null, reactExports.createElement("input", {
                className: "lf-text-input",
                type: "text",
                value: this.state.hex,
                onChange: function(i) {
                    r.setState({
                        hex: i.target.value
                    }), r.parseColor(i.target.value)
                }
            }))))
        }, e
    }(reactExports.Component),
    Popover = function(t) {
        var e = t.children,
            r = t.icon,
            i = reactExports.useState(null),
            a = i[0],
            s = i[1],
            f = reactExports.useState(null),
            o = f[0],
            g = f[1],
            c = reactExports.useState(null),
            l = c[0],
            m = c[1],
            u = reactExports.useState(!1),
            h = u[0],
            p = u[1];
        return reactExports.useEffect(function() {
            if (a && o) {
                var d = a.getBoundingClientRect(),
                    n = o.getBoundingClientRect(),
                    y = d.left + n.width > window.innerWidth ? -1 : 0;
                m(y)
            }
        }, [l, o, a]), reactExports.createElement("div", {
            className: "lf-popover",
            onMouseOver: function() {
                p(!0)
            },
            onMouseLeave: function() {
                p(!1)
            },
            ref: function(d) {
                s(d)
            }
        }, reactExports.createElement("div", {
            className: " lf-player-btn"
        }, r), reactExports.createElement("div", {
            className: "lf-popover-content",
            ref: function(d) {
                g(d)
            },
            style: {
                bottom: "22px",
                right: "0px",
                zIndex: 2,
                visibility: h ? "visible" : "hidden"
            }
        }, e))
    },
    Seeker = function(t) {
        function e(r) {
            var i = t.call(this, r) || this;
            return i.inputRef = reactExports.createRef(), i.handleChange = function() {
                return function(a) {
                    var s = a.target.value,
                        f = Math.floor(s / 100 * i.props.max);
                    i.props.onChange(f)
                }
            }, i.state = {
                value: 0
            }, i
        }
        return __extends(e, t), e.prototype.render = function() {
            var r = this.props.value / this.props.max * 100,
                i = {
                    backgroundImage: "-webkit-gradient(linear, left top, right top, color-stop(" + r + "%, rgba(15, 204, 206, 0.4)), color-stop(" + r + "%, #DAE1E7))"
                },
                a = {
                    position: "absolute",
                    left: 0,
                    marginTop: "8px",
                    width: "20px",
                    display: "block",
                    border: "0px",
                    backgroundColor: this.props.darkTheme ? "#505050" : "rgb(218, 225, 231)",
                    color: this.props.darkTheme ? "#B9B9B9" : "#555",
                    padding: "2px",
                    textAlign: "center",
                    borderRadius: "3px",
                    fontSize: "8px",
                    fontWeight: "bold"
                },
                s = {
                    position: "absolute",
                    right: 0,
                    marginTop: "8px",
                    width: "20px",
                    display: "block",
                    border: "0px",
                    backgroundColor: this.props.darkTheme ? "#505050" : "rgb(218, 225, 231)",
                    color: this.props.darkTheme ? "#B9B9B9" : "#555",
                    padding: "2px",
                    textAlign: "center",
                    borderRadius: "3px",
                    fontSize: "8px",
                    fontWeight: "bold"
                };
            return reactExports.createElement("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                    marginRight: "5px",
                    marginLeft: "5px",
                    position: "relative"
                }
            }, reactExports.createElement("input", {
                ref: this.inputRef,
                id: "track",
                className: "lf-progress",
                name: "progress",
                "aria-label": "progress",
                type: "range",
                min: "0",
                max: "100",
                step: "0.1",
                value: r,
                onInput: this.handleChange(),
                onChange: this.handleChange(),
                style: i
            }), this.props.showLabels && reactExports.createElement("div", {
                style: {
                    display: "flex",
                    justifyContent: "space-between"
                }
            }, reactExports.createElement("div", {
                style: a
            }, this.props.min), reactExports.createElement("div", {
                style: s
            }, this.props.max)))
        }, e
    }(reactExports.Component),
    ControlButtonStyle = {
        display: "inline-flex",
        cursor: "pointer"
    };
(function(t) {
    function e(r) {
        var i = t.call(this, r) || this;
        return i.state = {
            activeFrame: 0,
            mouseDown: !1
        }, i
    }
    return __extends(e, t), e.prototype.render = function() {
        var r = this,
            i = this.props,
            a = i.instance,
            s = i.playerState,
            f = i.seeker,
            o = i.setLoop,
            g = i.setSeeker,
            c = i.play,
            l = i.pause,
            m = i.stop,
            u = i.visible,
            h = i.buttons;
        if (!a || !u) return null;
        var p = !h || h.includes("play"),
            d = !h || h.includes("stop"),
            n = !h || h.includes("repeat"),
            y = !h || h.includes("frame"),
            v = !h || h.includes("background"),
            b = !h || h.includes("snapshot"),
            x = {
                width: 14,
                height: 14,
                viewBox: "0 0 24 24"
            },
            S = Math.round(a.currentFrame);
        return reactExports.createElement("div", {
            className: "lf-player-controls",
            style: {
                display: "flex",
                justifyContent: "space-between",
                height: "60px",
                alignItems: "center",
                backgroundColor: this.props.transparentTheme ? "transparent" : this.props.darkTheme ? "#3C3C3C" : "#ffffff",
                paddingLeft: "10px",
                paddingRight: "10px"
            }
        }, p && reactExports.createElement("div", {
            role: "button",
            "aria-label": s === PlayerState.Playing ? PlayerEvent.Pause : PlayerEvent.Play,
            tabIndex: 0,
            onClick: function() {
                s === PlayerState.Playing ? typeof l == "function" && l() : typeof c == "function" && c()
            },
            onKeyDown: function() {
                s === PlayerState.Playing ? typeof l == "function" && l() : typeof c == "function" && c()
            },
            className: "lf-player-btn",
            style: ControlButtonStyle
        }, s === PlayerState.Playing ? reactExports.createElement("svg", __assign({}, x), reactExports.createElement("rect", {
            height: "22.9",
            rx: "1.9",
            width: "7.6",
            x: "14",
            y: ".5"
        }), reactExports.createElement("rect", {
            height: "22.9",
            rx: "1.9",
            width: "7.6",
            x: "2",
            y: ".5"
        })) : reactExports.createElement("svg", __assign({}, x), reactExports.createElement("path", {
            d: "M2 3.4C2 1.9 3.5 1 4.8 1.8l16.5 9.6c1.2.7 1.2 2.5 0 3.2L4.8 24.2C3.5 25 2 24.1 2 22.6V3.4z"
        }))), d && reactExports.createElement("div", {
            tabIndex: 0,
            role: "button",
            "aria-label": PlayerEvent.Stop,
            onClick: function() {
                return m && m()
            },
            onKeyDown: function() {
                return m && m()
            },
            className: s === PlayerState.Stopped ? "lf-player-btn active" : "lf-player-btn",
            style: ControlButtonStyle
        }, reactExports.createElement("svg", __assign({}, x), reactExports.createElement("path", {
            d: `M2 3.667A1.67 1.67 0 0 1 3.667 2h16.666A1.67 1.67 0 0 1 22 3.667v16.666A1.67 1.67 0 0 1 20.333
            22H3.667A1.67 1.67 0 0 1 2 20.333z`
        }))), reactExports.createElement(Seeker, {
            min: 0,
            step: 1,
            max: a ? a.totalFrames : 1,
            value: f || 0,
            onChange: function(k) {
                g && r.setState({
                    activeFrame: k
                }, function() {
                    g(k, !1)
                })
            },
            onChangeEnd: function(k) {
                g && r.setState({
                    activeFrame: k
                }, function() {
                    g(k, !1)
                })
            },
            showLabels: this.props.showLabels,
            darkTheme: this.props.darkTheme
        }), y && reactExports.createElement("div", {
            role: "button",
            className: "lf-player-btn-container"
        }, reactExports.createElement("input", {
            style: {
                outline: "none",
                border: this.props.darkTheme ? "1px #505050 solid" : "1px #ccc solid",
                borderRadius: "3px",
                width: "40px",
                textAlign: "center",
                backgroundColor: this.props.darkTheme ? "#505050" : "#ffffff",
                color: this.props.darkTheme ? "#B9B9B9" : "#999",
                fontSize: "0.7rem",
                padding: "0",
                fontFamily: "inherit"
            },
            type: "text",
            value: S,
            readOnly: !0
        })), n && reactExports.createElement("div", {
            role: "button",
            "aria-label": PlayerEvent.Loop,
            tabIndex: 0,
            onClick: function() {
                a && o && o(!a.loop)
            },
            onKeyDown: function() {
                a && o && o(!a.loop)
            },
            className: a.loop ? "lf-player-btn active" : "lf-player-btn",
            style: ControlButtonStyle
        }, reactExports.createElement("svg", __assign({}, x), reactExports.createElement("path", {
            d: `M12.5 16.8137h-.13v1.8939h4.9696c3.6455 0 6.6113-2.9658 6.6113-6.6116
            0-3.64549-2.9658-6.61131-6.6113-6.61131-.5231 0-.947.42391-.947.94696 0 .52304.4239.94696.947.94696 2.6011 0
            4.7174 2.11634 4.7174 4.71739 0 2.6014-2.1166 4.7177-4.7174 4.7177H12.5zM13.6025
            5.61469v-.13H7.48137C3.83582 5.48469.87 8.45051.87 12.096c0 3.6509 3.17269 6.6117 6.81304 6.6117.52304 0
            .94696-.424.94696-.947 0-.5231-.42392-.947-.94696-.947-2.60804 0-4.91907-2.1231-4.91907-4.7176 0-2.60115
            2.11634-4.71744 4.7174-4.71744h6.12113V5.61469z`,
            stroke: "#8795A1",
            strokeWidth: ".26"
        }), reactExports.createElement("path", {
            d: `M11.1482
            2.20355h0l-.001-.00116c-.3412-.40061-.9405-.44558-1.33668-.0996h-.00001c-.39526.34519-.43936.94795-.09898
            1.34767l2.51487 3.03683-2.51894 3.06468c-.33872.40088-.29282 1.00363.10347
            1.34723l.08517-.0982-.08517.0982c.17853.1549.39807.2308.61647.2308.2671 0 .5328-.114.72-.3347h0l.0011-.0014
            3.0435-3.68655.0006-.00068c.3035-.35872.3025-.88754-.0019-1.24526l-3.0425-3.65786zM13.9453
            21.7965h0l.001.0011c.3413.4006.9407.4456 1.337.0996h0c.3953-.3452.4395-.9479.099-1.3477l-2.5154-3.0368
            2.5195-3.0647c.3388-.4008.2929-1.0036-.1035-1.3472l-.0852.0982.0852-.0982c-.1786-.1549-.3981-.2308-.6166-.2308-.2671
            0-.5329.114-.7202.3347h0l-.0011.0014-3.0442
            3.6865c-.0001.0003-.0003.0005-.0005.0007-.3036.3587-.3027.8876.0019 1.2453l3.0431 3.6579z`,
            fill: "#8795A1",
            stroke: "#8795A1",
            strokeWidth: ".26"
        }))), v && reactExports.createElement(Popover, {
            icon: reactExports.createElement("svg", __assign({}, x), reactExports.createElement("path", {
                d: `M12 3.1L6.1 8.6a7.6 7.6 0 00-2.2 4 7.2 7.2 0 00.4 4.4 7.9 7.9 0 003 3.5 8.7 8.7 0 004.7 1.3c1.6 0
            3.2-.5 4.6-1.3s2.4-2 3-3.5a7.2 7.2 0 00.5-4.5 7.6 7.6 0 00-2.2-4L12 3.2zM12 0l7.5 7a9.8 9.8 0 013 5.1
            9.3 9.3 0 01-.6 5.8c-.9 1.8-2.2 3.3-4 4.4A11.2 11.2 0 0112 24a11.2 11.2 0
            01-6-1.7c-1.7-1-3-2.6-3.9-4.4a9.3 9.3 0 01-.6-5.8c.4-2 1.5-3.7 3-5L12 0zM6 14h12c0 1.5-.7 3-1.8 4s-2.6
            1.6-4.2 1.6S9 19 7.8 18s-1.7-2.5-1.7-4z`
            }))
        }, reactExports.createElement("div", {
            slot: "content",
            className: "lf-popover popover-background"
        }, reactExports.createElement(ColorPicker, {
            colorChangedEvent: this.props.colorChangedEvent
        }))), b && reactExports.createElement(Popover, {
            icon: reactExports.createElement("svg", __assign({}, x), reactExports.createElement("path", {
                clipRule: "evenodd",
                d: `M0 3.01A2.983 2.983 0 012.983.027H16.99a2.983 2.983 0 012.983 2.983v14.008a2.982 2.982 0 01-2.983
              2.983H2.983A2.983 2.983 0 010 17.018zm2.983-.941a.941.941 0 00-.942.94v14.01c0
              .52.422.94.942.94H16.99a.94.94 0 00.941-.94V3.008a.941.941 0 00-.94-.94H2.981z`,
                fillRule: "evenodd"
            }), reactExports.createElement("path", {
                d: "M12.229 7.945l-2.07 4.598-2.586-2.605-2.414 2.758v2.146h9.656V11.93z"
            }), reactExports.createElement("circle", {
                cx: "7.444",
                cy: "6.513",
                r: "2.032"
            }), reactExports.createElement("path", {
                d: `M9.561 23.916h11.25a2.929 2.929 0 002.926-2.927V9.954a1.06 1.06 0 10-2.122 0v11.035a.805.805 0
              01-.803.804H9.562a1.061 1.061 0 100 2.123z`,
                stroke: "#8795a1",
                strokeWidth: ".215"
            }))
        }, reactExports.createElement("div", {
            slot: "content",
            className: "lf-popover lf-popover-snapshot",
            onWheel: function(k) {
                g && g(S + (k.deltaY > 0 ? -1 : 1), !1)
            }
        }, reactExports.createElement("h5", null, "Frame ", S), reactExports.createElement("div", {
            style: {
                cursor: "pointer",
                color: "#0FCCCE"
            },
            onClick: this.props.snapshot
        }, "Download SVG"), reactExports.createElement("div", {
            style: {
                cursor: "pointer",
                color: "#0FCCCE"
            },
            onClick: this.props.snapshot
        }, "Download PNG"), reactExports.createElement("i", {
            className: "lf-note"
        }, "Scroll with mousewheel to find exact frame"))))
    }, e
})(reactExports.Component);

function LottiePlayer({
    data: t
}) {
    return jsxRuntimeExports.jsx(Player, {
        src: t,
        loop: !0,
        autoplay: !0
    })
}
export {
    LottiePlayer as
    default
};