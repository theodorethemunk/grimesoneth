import {
    j as $
} from "./jsx-runtime.f5826d27.js";
import {
    r,
    $ as $e
} from "./index.52ab0191.js";
import {
    r as re,
    $ as be
} from "./index.bb59a6cf.js";
import "./_commonjsHelpers.725317a4.js";
var he = function(e) {
        if (typeof document > "u") return null;
        var n = Array.isArray(e) ? e[0] : e;
        return n.ownerDocument.body
    },
    T = new WeakMap,
    F = new WeakMap,
    L = {},
    j = 0,
    se = function(e) {
        return e && (e.host || se(e.parentNode))
    },
    ge = function(e, n) {
        return n.map(function(t) {
            if (e.contains(t)) return t;
            var o = se(t);
            return o && e.contains(o) ? o : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null)
        }).filter(function(t) {
            return !!t
        })
    },
    Ee = function(e, n, t, o) {
        var s = ge(n, Array.isArray(e) ? e : [e]);
        L[t] || (L[t] = new WeakMap);
        var c = L[t],
            i = [],
            a = new Set,
            l = new Set(s),
            d = function(u) {
                !u || a.has(u) || (a.add(u), d(u.parentNode))
            };
        s.forEach(d);
        var f = function(u) {
            !u || l.has(u) || Array.prototype.forEach.call(u.children, function(m) {
                if (a.has(m)) f(m);
                else {
                    var p = m.getAttribute(o),
                        E = p !== null && p !== "false",
                        v = (T.get(m) || 0) + 1,
                        x = (c.get(m) || 0) + 1;
                    T.set(m, v), c.set(m, x), i.push(m), v === 1 && E && F.set(m, !0), x === 1 && m.setAttribute(t, "true"), E || m.setAttribute(o, "true")
                }
            })
        };
        return f(n), a.clear(), j++,
            function() {
                i.forEach(function(u) {
                    var m = T.get(u) - 1,
                        p = c.get(u) - 1;
                    T.set(u, m), c.set(u, p), m || (F.has(u) || u.removeAttribute(o), F.delete(u)), p || u.removeAttribute(t)
                }), j--, j || (T = new WeakMap, T = new WeakMap, F = new WeakMap, L = {})
            }
    },
    xe = function(e, n, t) {
        t === void 0 && (t = "data-aria-hidden");
        var o = Array.from(Array.isArray(e) ? e : [e]),
            s = n || he(e);
        return s ? (o.push.apply(o, Array.from(s.querySelectorAll("[aria-live]"))), Ee(o, s, t, "aria-hidden")) : function() {
            return null
        }
    };

function h() {
    return h = Object.assign ? Object.assign.bind() : function(e) {
        for (var n = 1; n < arguments.length; n++) {
            var t = arguments[n];
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
        }
        return e
    }, h.apply(this, arguments)
}

function w(e, n, {
    checkForDefaultPrevented: t = !0
} = {}) {
    return function(s) {
        if (e ? .(s), t === !1 || !s.defaultPrevented) return n ? .(s)
    }
}

function ye(e, n) {
    typeof e == "function" ? e(n) : e != null && (e.current = n)
}

function ce(...e) {
    return n => e.forEach(t => ye(t, n))
}

function A(...e) {
    return r.useCallback(ce(...e), e)
}

function Ce(e, n = []) {
    let t = [];

    function o(c, i) {
        const a = r.createContext(i),
            l = t.length;
        t = [...t, i];

        function d(u) {
            const {
                scope: m,
                children: p,
                ...E
            } = u, v = m ? .[e][l] || a, x = r.useMemo(() => E, Object.values(E));
            return r.createElement(v.Provider, {
                value: x
            }, p)
        }

        function f(u, m) {
            const p = m ? .[e][l] || a,
                E = r.useContext(p);
            if (E) return E;
            if (i !== void 0) return i;
            throw new Error(`\`${u}\` must be used within \`${c}\``)
        }
        return d.displayName = c + "Provider", [d, f]
    }
    const s = () => {
        const c = t.map(i => r.createContext(i));
        return function(a) {
            const l = a ? .[e] || c;
            return r.useMemo(() => ({
                [`__scope${e}`]: { ...a,
                    [e]: l
                }
            }), [a, l])
        }
    };
    return s.scopeName = e, [o, Oe(s, ...n)]
}

function Oe(...e) {
    const n = e[0];
    if (e.length === 1) return n;
    const t = () => {
        const o = e.map(s => ({
            useScope: s(),
            scopeName: s.scopeName
        }));
        return function(c) {
            const i = o.reduce((a, {
                useScope: l,
                scopeName: d
            }) => {
                const u = l(c)[`__scope${d}`];
                return { ...a,
                    ...u
                }
            }, {});
            return r.useMemo(() => ({
                [`__scope${n.scopeName}`]: i
            }), [i])
        }
    };
    return t.scopeName = n.scopeName, t
}
const K = globalThis ? .document ? r.useLayoutEffect : () => {},
    we = $e["useId".toString()] || (() => {});
let Pe = 0;

function U(e) {
    const [n, t] = r.useState(we());
    return K(() => {
        e || t(o => o ? ? String(Pe++))
    }, [e]), e || (n ? `radix-${n}` : "")
}

function D(e) {
    const n = r.useRef(e);
    return r.useEffect(() => {
        n.current = e
    }), r.useMemo(() => (...t) => {
        var o;
        return (o = n.current) === null || o === void 0 ? void 0 : o.call(n, ...t)
    }, [])
}

function Ne({
    prop: e,
    defaultProp: n,
    onChange: t = () => {}
}) {
    const [o, s] = De({
        defaultProp: n,
        onChange: t
    }), c = e !== void 0, i = c ? e : o, a = D(t), l = r.useCallback(d => {
        if (c) {
            const u = typeof d == "function" ? d(e) : d;
            u !== e && a(u)
        } else s(d)
    }, [c, e, s, a]);
    return [i, l]
}

function De({
    defaultProp: e,
    onChange: n
}) {
    const t = r.useState(e),
        [o] = t,
        s = r.useRef(o),
        c = D(n);
    return r.useEffect(() => {
        s.current !== o && (c(o), s.current = o)
    }, [o, s, c]), t
}
const ae = r.forwardRef((e, n) => {
    const {
        children: t,
        ...o
    } = e, s = r.Children.toArray(t), c = s.find(Ae);
    if (c) {
        const i = c.props.children,
            a = s.map(l => l === c ? r.Children.count(i) > 1 ? r.Children.only(null) : r.isValidElement(i) ? i.props.children : null : l);
        return r.createElement(V, h({}, o, {
            ref: n
        }), r.isValidElement(i) ? r.cloneElement(i, void 0, a) : null)
    }
    return r.createElement(V, h({}, o, {
        ref: n
    }), t)
});
ae.displayName = "Slot";
const V = r.forwardRef((e, n) => {
    const {
        children: t,
        ...o
    } = e;
    return r.isValidElement(t) ? r.cloneElement(t, { ..._e(o, t.props),
        ref: n ? ce(n, t.ref) : t.ref
    }) : r.Children.count(t) > 1 ? r.Children.only(null) : null
});
V.displayName = "SlotClone";
const Te = ({
    children: e
}) => r.createElement(r.Fragment, null, e);

function Ae(e) {
    return r.isValidElement(e) && e.type === Te
}

function _e(e, n) {
    const t = { ...n
    };
    for (const o in n) {
        const s = e[o],
            c = n[o];
        /^on[A-Z]/.test(o) ? s && c ? t[o] = (...a) => {
            c(...a), s(...a)
        } : s && (t[o] = s) : o === "style" ? t[o] = { ...s,
            ...c
        } : o === "className" && (t[o] = [s, c].filter(Boolean).join(" "))
    }
    return { ...e,
        ...t
    }
}
const Re = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"],
    _ = Re.reduce((e, n) => {
        const t = r.forwardRef((o, s) => {
            const {
                asChild: c,
                ...i
            } = o, a = c ? ae : n;
            return r.useEffect(() => {
                window[Symbol.for("radix-ui")] = !0
            }, []), r.createElement(a, h({}, i, {
                ref: s
            }))
        });
        return t.displayName = `Primitive.${n}`, { ...e,
            [n]: t
        }
    }, {});

function Se(e, n) {
    e && re.flushSync(() => e.dispatchEvent(n))
}

function Me(e, n = globalThis ? .document) {
    const t = D(e);
    r.useEffect(() => {
        const o = s => {
            s.key === "Escape" && t(s)
        };
        return n.addEventListener("keydown", o), () => n.removeEventListener("keydown", o)
    }, [t, n])
}
const H = "dismissableLayer.update",
    Fe = "dismissableLayer.pointerDownOutside",
    Le = "dismissableLayer.focusOutside";
let J;
const Ie = r.createContext({
        layers: new Set,
        layersWithOutsidePointerEventsDisabled: new Set,
        branches: new Set
    }),
    ke = r.forwardRef((e, n) => {
        var t;
        const {
            disableOutsidePointerEvents: o = !1,
            onEscapeKeyDown: s,
            onPointerDownOutside: c,
            onFocusOutside: i,
            onInteractOutside: a,
            onDismiss: l,
            ...d
        } = e, f = r.useContext(Ie), [u, m] = r.useState(null), p = (t = u ? .ownerDocument) !== null && t !== void 0 ? t : globalThis ? .document, [, E] = r.useState({}), v = A(n, b => m(b)), x = Array.from(f.layers), [g] = [...f.layersWithOutsidePointerEventsDisabled].slice(-1), N = x.indexOf(g), y = u ? x.indexOf(u) : -1, C = f.layersWithOutsidePointerEventsDisabled.size > 0, R = y >= N, ve = je(b => {
            const M = b.target,
                X = [...f.branches].some(k => k.contains(M));
            !R || X || (c ? .(b), a ? .(b), b.defaultPrevented || l ? .())
        }, p), q = Ue(b => {
            const M = b.target;
            [...f.branches].some(k => k.contains(M)) || (i ? .(b), a ? .(b), b.defaultPrevented || l ? .())
        }, p);
        return Me(b => {
            y === f.layers.size - 1 && (s ? .(b), !b.defaultPrevented && l && (b.preventDefault(), l()))
        }, p), r.useEffect(() => {
            if (u) return o && (f.layersWithOutsidePointerEventsDisabled.size === 0 && (J = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), f.layersWithOutsidePointerEventsDisabled.add(u)), f.layers.add(u), Q(), () => {
                o && f.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = J)
            }
        }, [u, p, o, f]), r.useEffect(() => () => {
            u && (f.layers.delete(u), f.layersWithOutsidePointerEventsDisabled.delete(u), Q())
        }, [u, f]), r.useEffect(() => {
            const b = () => E({});
            return document.addEventListener(H, b), () => document.removeEventListener(H, b)
        }, []), r.createElement(_.div, h({}, d, {
            ref: v,
            style: {
                pointerEvents: C ? R ? "auto" : "none" : void 0,
                ...e.style
            },
            onFocusCapture: w(e.onFocusCapture, q.onFocusCapture),
            onBlurCapture: w(e.onBlurCapture, q.onBlurCapture),
            onPointerDownCapture: w(e.onPointerDownCapture, ve.onPointerDownCapture)
        }))
    });

function je(e, n = globalThis ? .document) {
    const t = D(e),
        o = r.useRef(!1),
        s = r.useRef(() => {});
    return r.useEffect(() => {
        const c = a => {
                if (a.target && !o.current) {
                    let d = function() {
                        ie(Fe, t, l, {
                            discrete: !0
                        })
                    };
                    const l = {
                        originalEvent: a
                    };
                    a.pointerType === "touch" ? (n.removeEventListener("click", s.current), s.current = d, n.addEventListener("click", s.current, {
                        once: !0
                    })) : d()
                } else n.removeEventListener("click", s.current);
                o.current = !1
            },
            i = window.setTimeout(() => {
                n.addEventListener("pointerdown", c)
            }, 0);
        return () => {
            window.clearTimeout(i), n.removeEventListener("pointerdown", c), n.removeEventListener("click", s.current)
        }
    }, [n, t]), {
        onPointerDownCapture: () => o.current = !0
    }
}

function Ue(e, n = globalThis ? .document) {
    const t = D(e),
        o = r.useRef(!1);
    return r.useEffect(() => {
        const s = c => {
            c.target && !o.current && ie(Le, t, {
                originalEvent: c
            }, {
                discrete: !1
            })
        };
        return n.addEventListener("focusin", s), () => n.removeEventListener("focusin", s)
    }, [n, t]), {
        onFocusCapture: () => o.current = !0,
        onBlurCapture: () => o.current = !1
    }
}

function Q() {
    const e = new CustomEvent(H);
    document.dispatchEvent(e)
}

function ie(e, n, t, {
    discrete: o
}) {
    const s = t.originalEvent.target,
        c = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: t
        });
    n && s.addEventListener(e, n, {
        once: !0
    }), o ? Se(s, c) : s.dispatchEvent(c)
}
const W = "focusScope.autoFocusOnMount",
    z = "focusScope.autoFocusOnUnmount",
    Z = {
        bubbles: !1,
        cancelable: !0
    },
    We = r.forwardRef((e, n) => {
        const {
            loop: t = !1,
            trapped: o = !1,
            onMountAutoFocus: s,
            onUnmountAutoFocus: c,
            ...i
        } = e, [a, l] = r.useState(null), d = D(s), f = D(c), u = r.useRef(null), m = A(n, v => l(v)), p = r.useRef({
            paused: !1,
            pause() {
                this.paused = !0
            },
            resume() {
                this.paused = !1
            }
        }).current;
        r.useEffect(() => {
            if (o) {
                let v = function(y) {
                        if (p.paused || !a) return;
                        const C = y.target;
                        a.contains(C) ? u.current = C : O(u.current, {
                            select: !0
                        })
                    },
                    x = function(y) {
                        if (p.paused || !a) return;
                        const C = y.relatedTarget;
                        C !== null && (a.contains(C) || O(u.current, {
                            select: !0
                        }))
                    },
                    g = function(y) {
                        if (document.activeElement === document.body)
                            for (const R of y) R.removedNodes.length > 0 && O(a)
                    };
                document.addEventListener("focusin", v), document.addEventListener("focusout", x);
                const N = new MutationObserver(g);
                return a && N.observe(a, {
                    childList: !0,
                    subtree: !0
                }), () => {
                    document.removeEventListener("focusin", v), document.removeEventListener("focusout", x), N.disconnect()
                }
            }
        }, [o, a, p.paused]), r.useEffect(() => {
            if (a) {
                ee.add(p);
                const v = document.activeElement;
                if (!a.contains(v)) {
                    const g = new CustomEvent(W, Z);
                    a.addEventListener(W, d), a.dispatchEvent(g), g.defaultPrevented || (ze(Ge(ue(a)), {
                        select: !0
                    }), document.activeElement === v && O(a))
                }
                return () => {
                    a.removeEventListener(W, d), setTimeout(() => {
                        const g = new CustomEvent(z, Z);
                        a.addEventListener(z, f), a.dispatchEvent(g), g.defaultPrevented || O(v ? ? document.body, {
                            select: !0
                        }), a.removeEventListener(z, f), ee.remove(p)
                    }, 0)
                }
            }
        }, [a, d, f, p]);
        const E = r.useCallback(v => {
            if (!t && !o || p.paused) return;
            const x = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey,
                g = document.activeElement;
            if (x && g) {
                const N = v.currentTarget,
                    [y, C] = Be(N);
                y && C ? !v.shiftKey && g === C ? (v.preventDefault(), t && O(y, {
                    select: !0
                })) : v.shiftKey && g === y && (v.preventDefault(), t && O(C, {
                    select: !0
                })) : g === N && v.preventDefault()
            }
        }, [t, o, p.paused]);
        return r.createElement(_.div, h({
            tabIndex: -1
        }, i, {
            ref: m,
            onKeyDown: E
        }))
    });

function ze(e, {
    select: n = !1
} = {}) {
    const t = document.activeElement;
    for (const o of e)
        if (O(o, {
                select: n
            }), document.activeElement !== t) return
}

function Be(e) {
    const n = ue(e),
        t = Y(n, e),
        o = Y(n.reverse(), e);
    return [t, o]
}

function ue(e) {
    const n = [],
        t = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: o => {
                const s = o.tagName === "INPUT" && o.type === "hidden";
                return o.disabled || o.hidden || s ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
    for (; t.nextNode();) n.push(t.currentNode);
    return n
}

function Y(e, n) {
    for (const t of e)
        if (!Ke(t, {
                upTo: n
            })) return t
}

function Ke(e, {
    upTo: n
}) {
    if (getComputedStyle(e).visibility === "hidden") return !0;
    for (; e;) {
        if (n !== void 0 && e === n) return !1;
        if (getComputedStyle(e).display === "none") return !0;
        e = e.parentElement
    }
    return !1
}

function Ve(e) {
    return e instanceof HTMLInputElement && "select" in e
}

function O(e, {
    select: n = !1
} = {}) {
    if (e && e.focus) {
        const t = document.activeElement;
        e.focus({
            preventScroll: !0
        }), e !== t && Ve(e) && n && e.select()
    }
}
const ee = He();

function He() {
    let e = [];
    return {
        add(n) {
            const t = e[0];
            n !== t && t ? .pause(), e = te(e, n), e.unshift(n)
        },
        remove(n) {
            var t;
            e = te(e, n), (t = e[0]) === null || t === void 0 || t.resume()
        }
    }
}

function te(e, n) {
    const t = [...e],
        o = t.indexOf(n);
    return o !== -1 && t.splice(o, 1), t
}

function Ge(e) {
    return e.filter(n => n.tagName !== "A")
}
const qe = r.forwardRef((e, n) => {
    var t;
    const {
        container: o = globalThis == null || (t = globalThis.document) === null || t === void 0 ? void 0 : t.body,
        ...s
    } = e;
    return o ? be.createPortal(r.createElement(_.div, h({}, s, {
        ref: n
    })), o) : null
});

function Xe(e, n) {
    return r.useReducer((t, o) => {
        const s = n[t][o];
        return s ? ? t
    }, e)
}
const G = e => {
    const {
        present: n,
        children: t
    } = e, o = Je(n), s = typeof t == "function" ? t({
        present: o.isPresent
    }) : r.Children.only(t), c = A(o.ref, s.ref);
    return typeof t == "function" || o.isPresent ? r.cloneElement(s, {
        ref: c
    }) : null
};
G.displayName = "Presence";

function Je(e) {
    const [n, t] = r.useState(), o = r.useRef({}), s = r.useRef(e), c = r.useRef("none"), i = e ? "mounted" : "unmounted", [a, l] = Xe(i, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return r.useEffect(() => {
        const d = I(o.current);
        c.current = a === "mounted" ? d : "none"
    }, [a]), K(() => {
        const d = o.current,
            f = s.current;
        if (f !== e) {
            const m = c.current,
                p = I(d);
            e ? l("MOUNT") : p === "none" || d ? .display === "none" ? l("UNMOUNT") : l(f && m !== p ? "ANIMATION_OUT" : "UNMOUNT"), s.current = e
        }
    }, [e, l]), K(() => {
        if (n) {
            const d = u => {
                    const p = I(o.current).includes(u.animationName);
                    u.target === n && p && re.flushSync(() => l("ANIMATION_END"))
                },
                f = u => {
                    u.target === n && (c.current = I(o.current))
                };
            return n.addEventListener("animationstart", f), n.addEventListener("animationcancel", d), n.addEventListener("animationend", d), () => {
                n.removeEventListener("animationstart", f), n.removeEventListener("animationcancel", d), n.removeEventListener("animationend", d)
            }
        } else l("ANIMATION_END")
    }, [n, l]), {
        isPresent: ["mounted", "unmountSuspended"].includes(a),
        ref: r.useCallback(d => {
            d && (o.current = getComputedStyle(d)), t(d)
        }, [])
    }
}

function I(e) {
    return e ? .animationName || "none"
}
let B = 0;

function Qe() {
    r.useEffect(() => {
        var e, n;
        const t = document.querySelectorAll("[data-radix-focus-guard]");
        return document.body.insertAdjacentElement("afterbegin", (e = t[0]) !== null && e !== void 0 ? e : ne()), document.body.insertAdjacentElement("beforeend", (n = t[1]) !== null && n !== void 0 ? n : ne()), B++, () => {
            B === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(o => o.remove()), B--
        }
    }, [])
}

function ne() {
    const e = document.createElement("span");
    return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e
}
const le = "Dialog",
    [de, Ct] = Ce(le),
    [Ze, P] = de(le),
    Ye = e => {
        const {
            __scopeDialog: n,
            children: t,
            open: o,
            defaultOpen: s,
            onOpenChange: c,
            modal: i = !0
        } = e, a = r.useRef(null), l = r.useRef(null), [d = !1, f] = Ne({
            prop: o,
            defaultProp: s,
            onChange: c
        });
        return r.createElement(Ze, {
            scope: n,
            triggerRef: a,
            contentRef: l,
            contentId: U(),
            titleId: U(),
            descriptionId: U(),
            open: d,
            onOpenChange: f,
            onOpenToggle: r.useCallback(() => f(u => !u), [f]),
            modal: i
        }, t)
    },
    et = "DialogTrigger",
    tt = r.forwardRef((e, n) => {
        const {
            __scopeDialog: t,
            ...o
        } = e, s = P(et, t), c = A(n, s.triggerRef);
        return r.createElement(_.button, h({
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": s.open,
            "aria-controls": s.contentId,
            "data-state": me(s.open)
        }, o, {
            ref: c,
            onClick: w(e.onClick, s.onOpenToggle)
        }))
    }),
    fe = "DialogPortal",
    [nt, ot] = de(fe, {
        forceMount: void 0
    }),
    rt = e => {
        const {
            __scopeDialog: n,
            forceMount: t,
            children: o,
            container: s
        } = e, c = P(fe, n);
        return r.createElement(nt, {
            scope: n,
            forceMount: t
        }, r.Children.map(o, i => r.createElement(G, {
            present: t || c.open
        }, r.createElement(qe, {
            asChild: !0,
            container: s
        }, i))))
    },
    S = "DialogContent",
    st = r.forwardRef((e, n) => {
        const t = ot(S, e.__scopeDialog),
            {
                forceMount: o = t.forceMount,
                ...s
            } = e,
            c = P(S, e.__scopeDialog);
        return r.createElement(G, {
            present: o || c.open
        }, c.modal ? r.createElement(ct, h({}, s, {
            ref: n
        })) : r.createElement(at, h({}, s, {
            ref: n
        })))
    }),
    ct = r.forwardRef((e, n) => {
        const t = P(S, e.__scopeDialog),
            o = r.useRef(null),
            s = A(n, t.contentRef, o);
        return r.useEffect(() => {
            const c = o.current;
            if (c) return xe(c)
        }, []), r.createElement(pe, h({}, e, {
            ref: s,
            trapFocus: t.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: w(e.onCloseAutoFocus, c => {
                var i;
                c.preventDefault(), (i = t.triggerRef.current) === null || i === void 0 || i.focus()
            }),
            onPointerDownOutside: w(e.onPointerDownOutside, c => {
                const i = c.detail.originalEvent,
                    a = i.button === 0 && i.ctrlKey === !0;
                (i.button === 2 || a) && c.preventDefault()
            }),
            onFocusOutside: w(e.onFocusOutside, c => c.preventDefault())
        }))
    }),
    at = r.forwardRef((e, n) => {
        const t = P(S, e.__scopeDialog),
            o = r.useRef(!1),
            s = r.useRef(!1);
        return r.createElement(pe, h({}, e, {
            ref: n,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: c => {
                var i;
                if ((i = e.onCloseAutoFocus) === null || i === void 0 || i.call(e, c), !c.defaultPrevented) {
                    var a;
                    o.current || (a = t.triggerRef.current) === null || a === void 0 || a.focus(), c.preventDefault()
                }
                o.current = !1, s.current = !1
            },
            onInteractOutside: c => {
                var i, a;
                (i = e.onInteractOutside) === null || i === void 0 || i.call(e, c), c.defaultPrevented || (o.current = !0, c.detail.originalEvent.type === "pointerdown" && (s.current = !0));
                const l = c.target;
                ((a = t.triggerRef.current) === null || a === void 0 ? void 0 : a.contains(l)) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && s.current && c.preventDefault()
            }
        }))
    }),
    pe = r.forwardRef((e, n) => {
        const {
            __scopeDialog: t,
            trapFocus: o,
            onOpenAutoFocus: s,
            onCloseAutoFocus: c,
            ...i
        } = e, a = P(S, t), l = r.useRef(null), d = A(n, l);
        return Qe(), r.createElement(r.Fragment, null, r.createElement(We, {
            asChild: !0,
            loop: !0,
            trapped: o,
            onMountAutoFocus: s,
            onUnmountAutoFocus: c
        }, r.createElement(ke, h({
            role: "dialog",
            id: a.contentId,
            "aria-describedby": a.descriptionId,
            "aria-labelledby": a.titleId,
            "data-state": me(a.open)
        }, i, {
            ref: d,
            onDismiss: () => a.onOpenChange(!1)
        }))), !1)
    }),
    it = "DialogTitle",
    ut = r.forwardRef((e, n) => {
        const {
            __scopeDialog: t,
            ...o
        } = e, s = P(it, t);
        return r.createElement(_.h2, h({
            id: s.titleId
        }, o, {
            ref: n
        }))
    }),
    lt = "DialogClose",
    dt = r.forwardRef((e, n) => {
        const {
            __scopeDialog: t,
            ...o
        } = e, s = P(lt, t);
        return r.createElement(_.button, h({
            type: "button"
        }, o, {
            ref: n,
            onClick: w(e.onClick, () => s.onOpenChange(!1))
        }))
    });

function me(e) {
    return e ? "open" : "closed"
}
const ft = Ye,
    pt = tt,
    mt = rt,
    vt = st,
    $t = ut,
    bt = dt;

function ht() {
    const [e, n] = r.useState();

    function t() {
        return document.documentElement.getAttribute("data-theme")
    }
    r.useEffect(() => {
        n(t())
    }, []);

    function o() {
        const i = t() === "light" ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", i);
        const a = "[&_*]:!transition-none";
        document.documentElement.classList.add(a), n(i), window.setTimeout(() => {
            document.documentElement.classList.remove(a)
        }, 0)
    }
    const s = !!e;
    return $.jsx("button", {
        type: "button",
        className: "inline-flex items-center rounded-full p-2 text-sm text-gray-800 transition-colors hover:bg-gray-100 hover:text-gray-950 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white",
        "aria-label": "Toggle between Dark and Light mode",
        onClick: () => o(),
        disabled: !s,
        children: $.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            "data-loaded": JSON.stringify(s),
            className: "h-6 w-6 opacity-50 data-[loaded='true']:opacity-100",
            children: e === "light" ? $.jsx("path", {
                fillRule: "evenodd",
                d: "M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z",
                clipRule: "evenodd"
            }) : $.jsx("path", {
                d: "M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"
            })
        })
    })
}
const oe = [{
    text: "Home",
    href: "/#home"
}, {
    text: "Mission",
    href: "/#our-mission"
}, {
    text: "Revenue distro",
    href: "/#revenue-distribution"
}, {
    text: "NFT'S",
    href: "/#nfts"
}, {
    text: "FAQ'S",
    href: "/#faqs"
}, {
    text: "Community",
    href: "/#community"
}];

function Ot() {
    const [e, n] = r.useState(!1);
    return r.useEffect(() => {
        const t = document.querySelector("body"),
            o = "overflow-hidden";
        t.classList[e ? "add" : "remove"](...o.split(" "))
    }, [e]), $.jsxs(ft, {
        open: e,
        onOpenChange: n,
        children: [$.jsx(pt, {
            asChild: !0,
            children: $.jsxs("button", {
                className: "btn-primary rounded-full p-2 shadow-xl shadow-primary-500/50",
                children: [$.jsx("span", {
                    className: "sr-only",
                    children: "Menu"
                }), $.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: "1.5",
                    stroke: "currentColor",
                    className: "h-6 w-6",
                    children: $.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                    })
                })]
            })
        }), $.jsx(mt, {
            children: $.jsxs(vt, {
                className: "fixed inset-0 z-40 flex flex-col bg-white p-4 data-[state=closed]:animate-[dialog-content-hide_200ms] data-[state=open]:animate-[dialog-content-show_200ms] dark:bg-gray-950 sm:px-8",
                children: [$.jsx(bt, {
                    asChild: !0,
                    children: $.jsxs("button", {
                        className: "btn-primary absolute right-4 top-4 z-50 rounded-full p-2 shadow-xl shadow-primary-500/50 sm:right-8",
                        children: [$.jsx("span", {
                            className: "sr-only",
                            children: "Close"
                        }), $.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            strokeWidth: "1.5",
                            stroke: "currentColor",
                            className: "h-6 w-6",
                            children: $.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M6 18L18 6M6 6l12 12"
                            })
                        })]
                    })
                }), $.jsxs("div", {
                    className: "relative",
                    children: [$.jsx($t, {
                        "data-aos": "fade",
                        "data-aos-delay": (oe.length - 2) * 100,
                        className: "text-gradient text-xl font-bold uppercase sm:absolute sm:left-0 sm:top-2 sm:!rotate-180 sm:text-2xl sm:!leading-none sm:[writing-mode:vertical-lr]",
                        children: "Menu"
                    }), $.jsx("div", {
                        className: "mt-4 grid grid-cols-1 gap-4 sm:ml-10 sm:mt-0",
                        children: oe.map(({
                            href: t,
                            text: o
                        }, s) => $.jsx("a", {
                            href: t,
                            onClick: () => n(!1),
                            className: "text-4xl font-bold uppercase text-gray-400 transition-colors hover:text-gray-800 dark:text-gray-600 dark:hover:text-gray-50 sm:text-7xl",
                            "data-aos": "fade-right",
                            "data-aos-delay": s * 100,
                            children: o
                        }, t))
                    })]
                }), $.jsxs("div", {
                    className: "mt-auto flex items-center justify-between pt-8",
                    children: [$.jsx("div", {}), $.jsx("div", {
                        children: $.jsx(ht, {})
                    })]
                })]
            })
        })]
    })
}
export {
    Ot as
    default
};