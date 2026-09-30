var __webpack_modules__ = [, , t => {
        t.exports = window.Wistia.Preact
    }, (t, e, i) => {
        i.d(e, {
            addInlineCss: () => u,
            elemAnimate: () => T,
            elemAppend: () => p,
            elemBind: () => _,
            elemFromObject: () => d,
            elemHeight: () => C,
            elemIsInside: () => S,
            elemOffset: () => r.hG,
            elemRemove: () => g,
            elemStyle: () => m,
            elemUnbind: () => x,
            elemWidth: () => w
        });
        var n = i(4),
            s = i(6),
            o = i(9),
            r = i(18),
            a = (i(19), i(25)),
            l = i(13),
            c = function(t, e) {
                if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                return Object.prototype.hasOwnProperty.call(Object(t), e)
            };
        const h = (0, s.o1)(),
            u = (t, e) => {
                const i = t || document.body || document.head,
                    n = document.createElement("style");
                return n.id = (0, a.h)("wistia_", "_style"), n.setAttribute("type", "text/css"), n.className = "wistia_injected_style", i.appendChild(n, i.nextSibling), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e)), n
            },
            d = t => {
                if ((0, n.isArray)(t)) {
                    let e = [];
                    for (let i = 0; i < t.length; i++) e.push(d(t[i]));
                    return e
                }
                const e = t.tagName || "div";
                let i = t.childNodes || [];
                (0, n.isArray)(i) || (i = [i]);
                const s = document.createElement(e);
                for (let e in t)
                    if (c(t, e)) {
                        let i = t[e];
                        if ("childNodes" !== e && "tagName" !== e && "ref" !== e) {
                            let t = e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
                            if ("style" === e)
                                if ((0, n.isObject)(i))
                                    for (let t in i) s.style[t] = i[t];
                                else {
                                    let t = i.split(";");
                                    for (let e = 0; e < t.length; e++) {
                                        let i = t[e].split(/\s*:\s*/),
                                            n = i[0],
                                            o = i[1];
                                        n && o && (s.style[n] = o)
                                    }
                                }
                            else if ("events" === e)
                                for (let t in i) {
                                    let e = i[t];
                                    _(s, t, e)
                                } else "className" === e || "class" === e ? s.className = i : "innerHTML" === e ? s.innerHTML = i : "innerText" === e ? s.innerText = i : null != i && "function" == typeof i.toString && s.setAttribute(t, i.toString())
                        }
                    }
                for (let t = 0; t < i.length; t++) {
                    let e = i[t];
                    if ((0, n.isObject)(e)) {
                        let t = d(e);
                        p(s, t)
                    } else {
                        let t = document.createTextNode(e.toString());
                        p(s, t)
                    }
                }
                return "function" == typeof t.ref && t.ref(s), s
            },
            p = (t, e) => {
                if ((0, n.isArray)(e))
                    for (let i = 0; i < e.length; i++) p(t, e[i]);
                else t.tagName.includes("-") ? t.shadowRoot.appendChild(e, {
                    wistiaGridCaller: !0
                }) : t.appendChild(e, {
                    wistiaGridCaller: !0
                })
            },
            g = t => {
                if ((0, n.isArray)(t) || window.NodeList && t instanceof NodeList) {
                    for (let e = 0; e < t.length; e++) g(t[e]);
                    return
                }
                let e;
                null == t || 1 !== t.nodeType && 3 !== t.nodeType || !(e = t.parentNode) || (e.removeChild(t), t = null)
            },
            m = (t, ...e) => {
                if ((0, n.isArray)(t) || window.NodeList && t instanceof NodeList) {
                    let i = [];
                    for (let n = 0; n < t.length; n++) {
                        let s = t[n];
                        1 === s.nodeType && i.push(m(s, ...e))
                    }
                    return i
                }
                if (2 === e.length) {
                    let i = e[0],
                        n = e[1];
                    t.style[i] = n
                } else if (1 === e.length)
                    if ("string" == typeof e[0]) {
                        let i = e[0];
                        try {
                            return t.currentStyle ? t.currentStyle[i] : window.getComputedStyle ? window.getComputedStyle(t, null).getPropertyValue(i) : null
                        } catch (t) {
                            o.ct.notice(t)
                        }
                    } else {
                        let i = y(e[0]);
                        for (let e in i) {
                            let n = i[e];
                            t.style[e] = n
                        }
                    }
                else(0, o.ct)("Unexpected args", t, ...e)
            },
            f = {
                borderImage: !0,
                mixBlendMode: !0,
                transform: !0,
                transition: !0,
                transitionDuration: !0
            },
            v = ["webkit", "moz", "o", "ms"],
            y = t => {
                if (h.chrome) return t;
                const e = {};
                for (let i in t) {
                    let n = t[i];
                    if (e[i] = n, f[i]) {
                        let t = v;
                        for (let s = 0; s < t.length; s++) {
                            let o = t[s] + i.charAt(0).toUpperCase() + i.slice(1);
                            i[o] || (e[o] = n)
                        }
                    }
                }
                return e
            },
            b = (t, e) => {
                if (!window.getComputedStyle) return null;
                const i = window.getComputedStyle(t, null);
                return null == i ? null : null != e ? i[e] : i
            },
            w = t => {
                if (t === window) return window.innerWidth ? window.innerWidth : document.documentElement ? document.documentElement.offsetWidth : document.body.offsetWidth;
                if (t === document) {
                    const t = document.body,
                        e = document.documentElement;
                    return Math.max(t.scrollWidth, t.offsetWidth, e.clientWidth, e.scrollWidth, e.offsetWidth)
                }
                let e;
                return (e = b(t, "width")) && null != e ? parseFloat(e) : t.currentStyle ? t.offsetWidth : -1
            },
            C = t => {
                if (t === window) return window.innerHeight ? window.innerHeight : document.documentElement ? document.documentElement.offsetHeight : document.body.offsetHeight;
                if (t === document) {
                    const t = document.body,
                        e = document.documentElement;
                    return Math.max(t.scrollHeight, t.offsetHeight, e.clientHeight, e.scrollHeight, e.offsetHeight)
                }
                let e;
                return (e = b(t, "height")) && null != e ? parseFloat(e) : t.currentStyle ? t.offsetHeight : -1
            },
            S = (t, e) => t === e || ((t, e) => {
                let i = (t => {
                    let e = t;
                    const i = [];
                    for (; e = e.parentNode;) i.push(e);
                    return i
                })(t);
                for (let t = 0; t < i.length; t++)
                    if (i[t] === e) return !0;
                return !1
            })(t, e),
            T = (t, e = {}, i = {}) => {
                i = (0, n.merge)({
                    time: 400,
                    easing: "ease"
                }, i);
                const s = ((t, e, i) => {
                    const n = [];
                    for (let s in t) n.push(`${s} ${e}ms ${i}`);
                    return n.join(",")
                })(e, i.time, i.easing);
                m(t, {
                    transition: s
                }), A((() => {
                    m(t, e), setTimeout((() => {
                        m(t, {
                            transition: ""
                        }), "function" == typeof i.callback && i.callback()
                    }), i.time)
                }))
            },
            _ = (t, e, i, n = !1) => {
                const s = (n, ...s) => {
                    (n = n || window.event).pageX || n.pageY || !n.clientX && !n.clientY || (n.pageX = n.clientX + M(), n.pageY = n.clientY + L()), n.preventDefault || (n.preventDefault = function() {
                        n.returnValue = !1
                    }), n.stopPropagation || (n.stopPropagation = function() {
                        n.cancelBubble = !0
                    }), null == n.which && (n.which = null != n.charCode ? n.charCode : n.keyCode), null == n.which && null != n.button && (1 & n.button ? n.which = 1 : 2 & n.button ? n.which = 3 : 4 & n.button ? n.which = 2 : n.which = 0), n.target || n.srcElement && (n.target = n.srcElement), n.target && 3 === n.target.nodeType && (n.target = n.target.parentNode);
                    const o = i.apply(n.target, [n].concat(s));
                    return o === x && x(t, e, i), o
                };
                l.s._elemBind = l.s._elemBind || {};
                const o = E(t, e, i);
                return l.s._elemBind[o] = s, s.elem = t, s.event = e, t.addEventListener(e, s, n),
                    function() {
                        x(t, e, i, n)
                    }
            },
            x = (t, e, i, n = !1) => {
                if (null == t || null == t._wistiaElemId || null == i || !i._wistiaBindId) return;
                const s = E(t, e, i),
                    o = l.s._elemBind[s];
                return o && (t.removeEventListener(e, o, n), o.elem = null, o.event = null), delete l.s._elemBind[s]
            },
            E = (t, e, i) => (t._wistiaElemId = t._wistiaElemId || (0, a.h)("wistia_elem_"), i._wistiaBindId = i._wistiaBindId || (0, a.h)("wistia_bind_"), `${t._wistiaElemId}.${e}.${i._wistiaBindId}`),
            L = t => {
                let e = document.body,
                    i = document.documentElement;
                if (null == t) return i && i.scrollTop || e && e.scrollTop || 0;
                e && (e.scrollTop = t), i && (i.scrollTop = t)
            },
            M = t => {
                let e = document.body,
                    i = document.documentElement;
                if (null == t) return i && i.scrollLeft || e && e.scrollLeft || 0;
                e && (e.scrollLeft = t), i && (i.scrollLeft = t)
            },
            A = t => (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || (t => setTimeout(t, 1e3 / 60)))(t);
        let k, O = null;
        ["auxclick", "click", "contextmenu", "dblclick", "focus", "keydown", "keypress", "keyup", "mousedown", "mouseup", "reset", "submit", "touchend", "touchstart"].forEach((t => {
            _(document, t, (t => {
                k = t, O = Date.now(), setTimeout((() => {
                    k === t && (k = void 0)
                }), 0)
            }), !h.passiveSupported || {
                capture: !0,
                passive: !0
            })
        }))
    }, (t, e, i) => {
        i.d(e, {
            cast: () => g,
            clone: () => c,
            eachLeaf: () => E,
            equalsDeep: () => _,
            getDeep: () => h,
            isArray: () => y,
            isObject: () => w,
            merge: () => o,
            setAndPreserveUndefined: () => d,
            setDeep: () => u
        });
        var n = function(t, e) {
            if (null == t) throw new TypeError("Cannot convert undefined or null to object");
            return Object.prototype.hasOwnProperty.call(Object(t), e)
        };
        const s = Array.prototype.slice,
            o = (t, ...e) => {
                if (0 === e.length) return t;
                for (let i = 0; i < e.length; i++) r(t, e[i]);
                return t
            },
            r = (t, e, i = a, s = l) => {
                if (y(e)) {
                    y(t) || (t = []);
                    for (let n = 0; n < e.length; n++) {
                        let o = e[n];
                        null == t[n] && null != o && (y(o) ? t[n] = [] : w(o) && (t[n] = {}));
                        const a = r(t[n], o, i);
                        s(e, n, a) ? delete t[n] : t[n] = a
                    }
                    return i(t)
                }
                if (w(e)) {
                    for (let o in e)
                        if (n(e, o) && (n(t, o) || null == t[o])) {
                            let n = e[o];
                            y(n) ? (y(t[o]) || (t[o] = []), r(t[o], n, i), t[o] = i(t[o])) : w(n) ? (w(t[o]) || (t[o] = {}), r(t[o], n, i), t[o] = i(t[o])) : null == t ? (t = {}, s(e, o, n) || (t[o] = i(n))) : s(e, o, n) ? delete t[o] : t[o] = i(n)
                        }
                    return i(t)
                }
                return i(e)
            },
            a = t => t,
            l = (t, e, i) => null == i,
            c = (t, e) => y(t) ? r([], t, e) : r({}, t, e),
            h = (t, e, i) => {
                e = "string" == typeof e ? e.split(".") : s.call(e);
                let o, r = t;
                for (; null != t && e.length;) {
                    let s = e.shift();
                    void 0 !== t[s] && (w(t[s]) || y(t[s])) || !i || (0 === s ? (t = r[o] = [])[s] = {} : t[s] = {}), r = t, o = s, t = n(t, s) ? t[s] : void 0
                }
                return t
            },
            u = (t, e, i) => p(t, e, i, !0),
            d = (t, e, i) => p(t, e, i, !1),
            p = (t, e, i, n = !0) => {
                const o = (e = "string" == typeof e ? e.split(".") : s.call(e)).pop();
                null != (t = h(t, e, !0)) && (w(t) || y(t)) && null != o && (n && null == i ? delete t[o] : t[o] = i)
            },
            g = t => null == t ? t : w(t) || y(t) ? f(t) : m(`${t}`, t),
            m = (t, e = t) => /^-?[1-9]\d*?$/.test(t) ? parseInt(t, 10) : "0" === t || "-0" === t ? 0 : /^-?\d*\.\d+$/.test(t) ? parseFloat(t) : !!/^true$/i.test(t) || !/^false$/i.test(t) && e,
            f = t => r(t, t, (t => "string" == typeof t ? m(t) : t), (() => !1)),
            v = /^\s*function Array()/,
            y = t => null != t && t.push && v.test(t.constructor),
            b = /^\s*function Object()/,
            w = t => null != t && "object" == typeof t && b.test(t.constructor),
            C = /^\s*function RegExp()/,
            S = /^string|number|boolean|function$/i,
            T = (t, e) => {
                if (t === e) return !0;
                if (null != t && null == e || null == t && null != e) return !1;
                let i = !0;
                return E(t, ((t, n) => {
                    t !== h(e, n) && (i = !1)
                })), i
            },
            _ = (t, e) => T(t, e) && T(e, t),
            x = (t, e, i, o, r) => {
                if (null == i && (i = []), (t => null != t && (S.test(typeof t) || (t => null != t && C.test(t.constructor))(t)))(t)) e(t, i, o, r);
                else if (w(t) || y(t)) {
                    e(t, i, o, r);
                    for (let o in t)
                        if (n(t, o)) {
                            const n = s.call(i);
                            n.push(o), x(t[o], e, n, t, o)
                        }
                } else e(t, i, o, r)
            },
            E = (t, e) => {
                x(t, ((t, i, n, s) => {
                    y(t) || w(t) || e(t, i, n, s)
                }))
            }
    }, (t, e, i) => {
        i.d(e, {
            k: () => s
        });
        var n = function(t, e) {
            if (null == t) throw new TypeError("Cannot convert undefined or null to object");
            return Object.prototype.hasOwnProperty.call(Object(t), e)
        };
        const s = (t, ...e) => {
                if (Object.assign) return Object.assign(t, ...e);
                for (let i = 0; i < e.length; i++) o(t, e[i]);
                return t
            },
            o = (t, e) => {
                for (let i in e) n(e, i) && (t[i] = e[i]);
                return t
            }
    }, (t, e, i) => {
        i.d(e, {
            GS: () => z,
            o1: () => W
        });
        var n = i(7),
            s = i(8);
        const o = navigator.userAgent;
        let r = null;
        const a = /(webkit)[ /]([^\s]+)/i,
            l = /OPR\/([^\s]+)/i,
            c = /(edge)\/(\d+(?:\.\d+)?)/i,
            h = /(mozilla)(?:.*? rv:([^\s)]+))?/i,
            u = /(android) ([^;]+)/i,
            d = /(iphone)/i,
            p = /(Windows Phone OS (\d+(?:\.\d+)?))/,
            g = /OS (\d+)_(\d+)/i,
            m = /(firefox)/i,
            f = /Mobile VR/i,
            v = /Version\/([^\s]+)/i,
            y = () => (w()[1] || "webkit").toLowerCase(),
            b = () => w()[2],
            w = () => {
                let t;
                return t = o.match(c), t || (t = o.match(a), t || (t = o.match(l), t || (t ? (null != document.documentMode && (t[2] = document.documentMode), t) : (t = o.match(h), t || []))))
            },
            C = () => {
                const t = o.match(u);
                return null != t && {
                    version: t[2]
                }
            },
            S = () => d.test(o),
            T = () => A() > 0 || C() || x(),
            _ = () => {
                try {
                    const t = matchMedia("(hover:hover)");
                    if ("not all" !== t.media) return t.matches
                } catch (t) {}
                return !T()
            },
            x = () => /Macintosh/i.test(navigator.userAgent) && navigator.maxTouchPoints && navigator.maxTouchPoints > 1,
            E = () => a.test(o) && !/chrome/i.test(o) && !x() && !S(),
            L = () => !(!/Chrome/.test(o) || !/Google Inc/.test(navigator.vendor)) && {
                version: M()
            },
            M = () => {
                const t = o.match(/\bChrome\/([^\s]+)/);
                return t && t[1]
            },
            A = () => {
                const t = o.match(g),
                    e = o.match(v);
                return null != t ? parseFloat(`${t[1]}.${t[2]}`) : null != e && e[1] && x() ? parseFloat(e[1]) : 0
            },
            k = () => c.test(o),
            O = () => m.test(o),
            P = () => {
                const t = document.createElement("video");
                let e = !1;
                try {
                    if (t.canPlayType) {
                        e = {};
                        const i = 'video/mp4; codecs="avc1.42E01E';
                        e.h264 = !!t.canPlayType(`${i}"`) || !!t.canPlayType(`${i}, mp4a.40.2"`), e.webm = !!t.canPlayType('video/webm; codecs="vp9, vorbis"'), e.nativeHls = !!t.canPlayType("application/vnd.apple.mpegURL")
                    }
                } catch (t) {
                    e = {
                        ogg: !1,
                        h264: !1,
                        webm: !1,
                        nativeHls: !1
                    }
                }
                return e
            },
            I = () => {
                try {
                    return "localStorage" in n.z && null != n.z.localStorage
                } catch (t) {
                    return !1
                }
            },
            F = ["WebKit", "Moz", "O", "Ms", ""],
            R = () => {
                for (let t = 0; t < F.length; t++) {
                    let e = `${F[t]}MutationObserver`;
                    if (n.z[e]) return e
                }
                return null
            },
            D = () => {
                const t = /webkit|mozilla|edge/.test(y());
                return !!(S() || x() || C()) || Boolean(t && P().h264 && Object.defineProperties)
            };
        let H;
        const N = () => {
                if (null != H) return H;
                try {
                    const t = Object.defineProperty({}, "passive", {
                        get() {
                            H = !0
                        }
                    });
                    window.addEventListener("test", null, t)
                } catch (t) {
                    H = !1
                }
                return H
            },
            B = () => {
                const t = L(),
                    e = O(),
                    i = k(),
                    n = l.test(o),
                    s = t && b() >= 32,
                    r = t && b() >= 75 && C(),
                    a = e && b() >= 65,
                    c = e && b() >= 67 && C(),
                    h = i && b() >= 18,
                    u = n && b() >= 19;
                return s || r || a || c || h || u
            },
            $ = () => {
                try {
                    const t = document.createElement("canvas"),
                        e = t.getContext("webgl") || t.getContext("experimental-webgl");
                    return !!e && (e.getExtension("WEBGL_lose_context") ? .loseContext(), !0)
                } catch (t) {
                    return !1
                }
            },
            W = () => r || (r = j(), r),
            j = () => {
                const t = {
                    browser: {
                        version: b()
                    },
                    edge: k(),
                    firefox: O(),
                    gearvr: f.test(o),
                    hdr: !!window.matchMedia ? .("(dynamic-range: high)").matches || !!(screen.colorDepth && screen.colorDepth >= 30),
                    hdrCodecs: {
                        hevc: window.MediaSource ? .isTypeSupported ? .('video/mp4; codecs="hvc1.2.4.L153.B0"') ? ? !1,
                        av1: window.MediaSource ? .isTypeSupported ? .('video/mp4; codecs="av01.0.08M.10.0.110.09.16.09"') ? ? !1,
                        vp92: window.MediaSource ? .isTypeSupported ? .('video/mp4; codecs="vp09.02.10.10.01.09.16.09"') ? ? !1
                    },
                    android: C(),
                    oldandroid: C() && parseFloat(C().version) < 4.1,
                    iphone: S(),
                    ipad: x(),
                    safari: E(),
                    chrome: L(),
                    winphone: {
                        version: p.test(o)[2]
                    },
                    ios: {
                        version: A()
                    },
                    windows: /win/i.test(navigator.platform),
                    mac: /mac/i.test(navigator.platform),
                    retina: null != n.z.devicePixelRatio && n.z.devicePixelRatio > 1,
                    hoverIsNatural: _(),
                    touchScreen: T(),
                    video: P(),
                    managedMediaSource: "ManagedMediaSource" in window && "function" == typeof window.ManagedMediaSource ? .isTypeSupported,
                    mediaSource: n.z.MediaSource && n.z.MediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E, mp4a.40.2"'),
                    nativeHls: (S() || x() || E()) && P().nativeHls,
                    localstorage: I(),
                    fullscreenEnabled: document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled || document.msFullscreenEnabled,
                    vulcanV2Support: D(),
                    mutationObserver: R(),
                    callingPlayRequiresEventContext: A() > 0 || C() || E(),
                    passiveSupported: N(),
                    webp: B(),
                    webgl: $(),
                    performanceMeasure: (0, s.O)()
                };
                return t.browser[y()] = !0, t
            },
            z = () => {
                const t = C(),
                    e = x(),
                    i = S();
                return t || e || i
            }
    }, (t, e, i) => {
        let n;
        i.d(e, {
            z: () => s
        });
        try {
            n = self, n.self !== n && void 0 !== n.self && "undefined" != typeof window && (n = window)
        } catch (t) {
            n = "undefined" != typeof globalThis ? globalThis : window
        }
        const s = n
    }, (t, e, i) => {
        i.d(e, {
            O: () => n
        });
        const n = () => {
            const {
                performance: t
            } = window;
            return Boolean(t) && Boolean(t.measure)
        }
    }, (t, e, i) => {
        i.d(e, {
            ct: () => g
        });
        var n = i(10),
            s = i(13);
        const o = {
                ERROR: 0,
                WARNING: 1,
                NOTICE: 2,
                INFO: 3,
                DEBUG: 4,
                error: 0,
                warning: 1,
                notice: 2,
                info: 3,
                debug: 4
            },
            r = function() {},
            a = function(t) {
                const e = this;
                return null == t && (t = {}), e.error = (...t) => e.log(0, t), e.warn = (...t) => e.log(1, t), e.notice = (...t) => e.log(1, t), e.info = (...t) => e.log(3, t), e.debug = (...t) => e.log(4, t), e.ctx = t, e.ctx.initializedAt || e.reset(), e
            },
            l = a.prototype;
        l.reset = function() {
            this.ctx.level = 0, this.ctx.grep = null, this.ctx.grepv = null, this.ctx.first1000LogLines = [], this.ctx.last1000LogLines = [], this.ctx.initializedAt = (new Date).getTime()
        }, l.setLevel = function(t) {
            const e = this.logFunc(3);
            null != o[t] ? (this.ctx.level = o[t], e(`Log level set to "${t}" (${o[t]})`)) : e(`Unknown log level "${t}"`)
        }, l.setGrep = function(t) {
            this.ctx.grep = t
        }, l.setGrepv = function(t) {
            this.ctx.grepv = t
        }, l.first1000LogLines = function() {
            return this.ctx.first1000LogLines
        }, l.last1000LogLines = function() {
            return this.ctx.last1000LogLines
        }, l.matchedGrep = function(t) {
            let e = !1;
            if (this.ctx.grep || this.ctx.grepv) {
                let i = [];
                for (let e = 0; e < t.length; e++) try {
                    let n = t[e];
                    i.push(n.toString && n.toString())
                } catch (t) {
                    i.push("")
                }
                let n = i.join(" "),
                    s = !this.ctx.grep || n.match(this.ctx.grep),
                    o = !this.ctx.grepv || !n.match(this.ctx.grepv);
                e = s && o
            } else e = !0;
            return e
        }, l.now = function() {
            return "undefined" != typeof performance && "function" == typeof performance.now ? performance.now().toFixed(3) : Date.now ? Date.now() - this.ctx.initializedAt : (new Date).getTime() - this.ctx.initializedAt
        }, l.messagesToLogLine = function(t, e, i) {
            let n, s = [t, e];
            s = s.concat(i);
            try {
                n = s.join(" ") || "", n.length > 200 && (n = n.slice(0, 200))
            } catch (t) {
                n = "could not serialize"
            }
            return n
        }, l.persistLine = function(t) {
            this.ctx.first1000LogLines.length < 1e3 ? this.ctx.first1000LogLines.push(t) : (this.ctx.last1000LogLines.length >= 1e3 && this.ctx.last1000LogLines.shift(), this.ctx.last1000LogLines.push(t))
        }, l.log = function(t, e) {
            const i = t <= this.ctx.level,
                s = t < 4,
                o = (i || s) && this.matchedGrep(e);
            let r;
            if (0 === t && (0, n.mj)("problem", {
                    type: "error-logged",
                    data: {
                        messages: e
                    }
                }), o && (i || s) && (r = this.now()), s && o) {
                const i = this.messagesToLogLine(t, r, e);
                this.persistLine(i)
            }
            if (i && o) {
                const i = this.logFunc(t);
                let n;
                1 === e.length && (n = e[0]) instanceof Error ? (i(n.message), n.stack && i(n.stack)) : i(...e)
            }
        };
        const c = function(...t) {
                console.error.apply(console, t)
            },
            h = function(...t) {
                console.warn.apply(console, t)
            },
            u = function(...t) {
                console.info.apply(console, t)
            },
            d = function(...t) {
                console.debug.apply(console, t)
            },
            p = function(t) {
                console.log.apply(console, t)
            };
        l.logFunc = function(t) {
            if (null == t && (t = this.level), !console) return r;
            let e;
            return 0 === t ? e = c : 1 === t ? e = h : 3 === t ? e = u : 4 === t && (e = d), e || (e = p), "function" != typeof e && (this.noConsoleLog = !0, e = r), e
        }, l.maybePrefix = function(t, e) {
            if (t) {
                if ("function" == typeof t) try {
                    t = t()
                } catch (e) {
                    t = `prefix err "${e.message}"`
                }
                return t instanceof Array ? t.concat(e) : [t].concat(e)
            }
            return e
        }, l.getPrefixedFunctions = function(t) {
            return {
                log: (...e) => this.log(0, this.maybePrefix(t, e)),
                error: (...e) => this.log(0, this.maybePrefix(t, e)),
                warn: (...e) => this.log(1, this.maybePrefix(t, e)),
                notice: (...e) => this.log(1, this.maybePrefix(t, e)),
                info: (...e) => this.log(3, this.maybePrefix(t, e)),
                debug: (...e) => this.log(4, this.maybePrefix(t, e))
            }
        }, s.s && null == s.s.wlogCtx && (s.s.wlogCtx = {});
        const g = new a(s.s.wlogCtx)
    }, (t, e, i) => {
        i.d(e, {
            mj: () => o
        });
        var n = i(11),
            s = i(13);
        (0, n.R)(s.s), s.s.bind.bind(s.s), s.s.on.bind(s.s), s.s.off.bind(s.s), s.s.rebind.bind(s.s);
        const o = s.s.trigger.bind(s.s);
        s.s.unbind.bind(s.s)
    }, (t, e, i) => {
        i.d(e, {
            R: () => r
        });
        var n = i(12),
            s = i(13),
            o = i(16);
        s.s.bindable || (s.s.EventShepherdManager || (s.s.EventShepherdManager = {}), s.s.bindable = {
            bind(t, e) {
                if ("crosstime" === t && this.crossTime) return this.crossTime.addBinding(arguments[1], arguments[2]), this;
                if ("betweentimes" === t && this.betweenTimes) return this.betweenTimes.addBinding(arguments[1], arguments[2], arguments[3]), this;
                const i = this.embedElement || this.container;
                if (Object.keys(o.h).includes(t) && i) {
                    const n = a(i);
                    return void 0 === s.s.EventShepherdManager[n] && (s.s.EventShepherdManager[n] = new o.S), s.s.EventShepherdManager[n].addListener(t, i, e), this
                }
                if (e) return n.oI.call(this, t, e), this;
                s.s.warn && s.s.warn(this.constructor.name, "bind", "falsey value passed in as callback:", e)
            },
            unbind(t, e) {
                if ("crosstime" === t && this.crossTime) return e ? this.crossTime.removeBinding(arguments[1], arguments[2]) : this.crossTime.removeAllBindings(), this;
                if ("betweentimes" === t && this.betweenTimes) return e ? this.betweenTimes.removeBinding(arguments[1], arguments[2], arguments[3]) : this.betweenTimes.removeAllBindings(), this;
                const i = this.embedElement || this.container;
                if (Object.keys(o.h).includes(t) && i) {
                    const n = a(i);
                    return void 0 === s.s.EventShepherdManager[n] || s.s.EventShepherdManager[n].removeListener(t, i, e), this
                }
                return e ? n.Nw.call(this, t, e) : this._bindings && (this._bindings[t] = []), this._bindings && this._bindings[t] && !this._bindings[t].length && (this._bindings[t] = null, delete this._bindings[t]), this
            },
            on(t, e) {
                if ("crosstime" === t && this.crossTime) return this.crossTime.addBinding(arguments[1], arguments[2]), () => {
                    this.crossTime.removeBinding(arguments[1], arguments[2])
                };
                if ("betweentimes" === t && this.betweenTimes) return this.betweenTimes.addBinding(arguments[1], arguments[2], arguments[3]), () => {
                    this.betweenTimes.removeBinding(arguments[1], arguments[2], arguments[3])
                };
                const i = this.embedElement || this.container;
                if (Object.keys(o.h).includes(t) && i) {
                    const n = a(i);
                    return void 0 === s.s.EventShepherdManager[n] && (s.s.EventShepherdManager[n] = new o.S(i)), s.s.EventShepherdManager[n].addListener(t, i, e), () => {
                        s.s.EventShepherdManager[n].removeListener(t, i, e)
                    }
                }
                return n.oI.call(this, t, e)
            },
            off(t, e) {
                if ("crosstime" === t && this.crossTime) return this.crossTime.removeBinding(arguments[1], arguments[2]);
                if ("betweentimes" === t && this.betweenTimes) return this.betweenTimes.removeBinding(arguments[1], arguments[2], arguments[3]);
                const i = this.embedElement || this.container;
                if (Object.keys(o.h).includes(t) && i) {
                    const n = a(i);
                    return void 0 === s.s.EventShepherdManager[n] ? () => {} : s.s.EventShepherdManager[n].removeListener(t, i, e)
                }
                return n.Nw.call(this, t, e)
            },
            rebind(t, e) {
                return this.unbind(t, e), this.bind(t, e), this
            },
            trigger(t, ...e) {
                return n.hZ.call(this, t, ...e), this
            },
            bindNamed() {
                return n.RX.apply(this, arguments)
            },
            unbindNamed() {
                return n._Z.apply(this, arguments)
            },
            unbindAllInNamespace() {
                return n.E0.apply(this, arguments)
            }
        });
        const r = function(t) {
                for (let e in s.s.bindable) {
                    const i = s.s.bindable[e];
                    t[e] || (t[e] = i)
                }
            },
            a = function(t) {
                return t ? .mediaId ? t.mediaId : t ? .id ? t.id : void 0
            }
    }, (t, e, i) => {
        i.d(e, {
            E0: () => g,
            Nw: () => a,
            RX: () => d,
            Ut: () => f,
            _Z: () => p,
            hZ: () => c,
            oI: () => r
        });
        var n = i(13),
            s = function(t, e) {
                if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                return Object.prototype.hasOwnProperty.call(Object(t), e)
            };
        const o = Array.prototype.slice,
            r = function(t, e) {
                const i = this;
                return i._bindings || (i._bindings = {}), i._bindings[t] || (i._bindings[t] = []), i._bindings[t].push(e),
                    function() {
                        i.unbind(t, e)
                    }
            },
            a = function(t, e) {
                if (!this._bindings) return this;
                if (!this._bindings[t]) return this;
                const i = [];
                for (let n = 0; n < this._bindings[t].length; n++) {
                    let s = this._bindings[t][n];
                    s !== e && i.push(s)
                }
                this._bindings[t] = i
            },
            l = function(t, e) {
                return this.unbind(t, e), this.bind(t, e), {
                    event: t,
                    fn: e
                }
            },
            c = function(t, ...e) {
                return this._bindings && null != this._bindings.all && h.apply(this, ["all", t].concat(e)), h.apply(this, [t].concat(e))
            },
            h = function(t) {
                if (!this._bindings) return this;
                if (!this._bindings[t]) return this;
                const e = o.call(arguments, 1);
                let i;
                const s = [...this._bindings[t]];
                for (let o = 0; o < s.length; o++) {
                    let r = s[o];
                    try {
                        r.apply(this, e) === this.unbind && (null == i && (i = []), i.push({
                            event: t,
                            fn: r
                        }))
                    } catch (t) {
                        if (this._throwTriggerErrors) throw t;
                        n.s.error && n.s.error(t)
                    }
                }
                if (i)
                    for (let t = 0; t < i.length; t++) {
                        let e = i[t];
                        this.unbind(e.event, e.fn)
                    }
                return this
            },
            u = function(t, e) {
                null == t._namedBindings && (t._namedBindings = {}), null == t._namedBindings[e] && (t._namedBindings[e] = {})
            },
            d = function(t, e, i, n) {
                return this.unbindNamed(t, e),
                    function(t, e, i, n, s) {
                        u(t, e), t._namedBindings[e][i] = {
                            event: n,
                            fn: s
                        }
                    }(this, t, e, i, n), this.bind(i, n),
                    function() {
                        this.unbindNamed(t, e)
                    }
            },
            p = function(t, e) {
                u(this, t);
                const i = function(t, e, i) {
                    return u(t, e), t._namedBindings[e][i]
                }(this, t, e);
                if (i) {
                    const {
                        event: t,
                        fn: e
                    } = i;
                    this.unbind(t, e)
                }
                const n = this._namedBindings;
                return delete n[t][e], m(n[t]) && delete n[t], this
            },
            g = function(t) {
                const e = this._namedBindings && this._namedBindings[t];
                if (null == e) return this;
                for (let i in e) s(e, i) && this.unbindNamed(t, i)
            },
            m = function(t) {
                for (let e in t)
                    if (s(t, e)) return !1;
                return !0
            },
            f = function(t) {
                return t.bind = r, t.unbind = a, t.on = r, t.off = a, t.rebind = l, t.trigger = c, t.bindNamed = d, t.unbindNamed = p, t.unbindAllInNamespace = g, t
            };
        f(function() {}.prototype)
    }, (t, e, i) => {
        i.d(e, {
            s: () => a
        });
        var n = i(2),
            s = i(14),
            o = i(15),
            r = i(7);
        r.z.Wistia ? ? = {}, r.z.Wistia.Preact ? ? = { ...n,
            hooks: s,
            compat: o
        }, r.z.Wistia._destructors ? ? = {}, r.z.Wistia._initializers ? ? = {}, r.z.Wistia._remoteData ? ? = new Map, r.z.Wistia.api ? ? = () => (console.error("Accessed Wistia.api() before it was initialized"), null), r.z.Wistia.defineControl ? ? = () => (console.error("Accessed Wistia.defineControl() before it was initialized"), null), r.z.Wistia.EventShepherdManager ? ? = {}, r.z.Wistia.mixin ? ? = (t, e = {}) => {
            Object.keys(e).forEach((i => {
                (function(t, e) {
                    if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                    return Object.prototype.hasOwnProperty.call(Object(t), e)
                })(e, i) && (t[i] = e[i])
            }))
        }, r.z.Wistia.playlistMethods ? ? = new Map, r.z.Wistia.PublicApi ? ? = null, r.z.Wistia.uncacheMedia ? ? = () => (console.error("Accessed Wistia.uncacheMedia() before it was initialized"), null), r.z.Wistia.VisitorKey ? ? = null, r.z.Wistia.visitorKey ? ? = null, r.z.Wistia.wistia ? ? = void 0, r.z.Wistia._liveStreamEventDataPromises ? ? = {}, r.z.Wistia._mediaDataPromises ? ? = {}, r.z.Wistia._liveStreamPollingPromises ? ? = {}, r.z.Wistia.first ? ? = () => r.z.Wistia.api() ? ? document.querySelector("wistia-player");
        const a = r.z.Wistia
    }, t => {
        t.exports = window.Wistia.Preact.hooks
    }, t => {
        t.exports = window.Wistia.Preact.compat
    }, (t, e, i) => {
        i.d(e, {
            S: () => o,
            h: () => n
        });
        const n = {
                mutechange: i(17).MUTE_CHANGE_EVENT
            },
            s = {
                mutechange: t => t.isMuted
            };
        class o {
            constructor() {
                var t, e, i;
                t = this, i = {}, (e = function(t) {
                    var e = function(t) {
                        if ("object" != typeof t || !t) return t;
                        var e = t[Symbol.toPrimitive];
                        if (void 0 !== e) {
                            var i = e.call(t, "string");
                            if ("object" != typeof i) return i;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(t)
                    }(t);
                    return "symbol" == typeof e ? e : e + ""
                }(e = "convertedEventsMap")) in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = i
            }
            addListener(t, e, i) {
                const o = n[t] ? ? t;
                this.convertedEventsMap[o] ? ? = [];
                const r = e => {
                    if (s[t]) {
                        const n = s[t](e.detail);
                        i(n)
                    } else i()
                };
                this.convertedEventsMap[o].push({
                    givenCallback: i,
                    eventListenerCallback: r
                }), e.addEventListener(o, r)
            }
            removeAllListeners(t) {
                Object.keys(this.convertedEventsMap).forEach((e => {
                    this.convertedEventsMap[e] ? .forEach((i => {
                        t.removeEventListener(e, i.eventListenerCallback)
                    })), this.convertedEventsMap[e] = []
                }))
            }
            removeListener(t, e, i) {
                const s = n[t] ? ? t,
                    o = [];
                i ? (e.removeEventListener(s, i), this.convertedEventsMap[s] && (this.convertedEventsMap[s].forEach(((t, n) => {
                    t.givenCallback === i && (o.push(n), e.removeEventListener(s, t.eventListenerCallback))
                })), o.forEach((t => {
                    this.convertedEventsMap[s] && this.convertedEventsMap[s].splice(t, 1)
                })))) : this.convertedEventsMap[s] = []
            }
        }
    }, (t, e, i) => {
        i.d(e, {
            MUTE_CHANGE_EVENT: () => n
        });
        const n = "mute-change"
    }, (t, e, i) => {
        let n;
        i.d(e, {
            hG: () => o
        });
        const s = () => {
                if (null != n) return n;
                const t = document.createElement("div");
                return t.style.paddingLeft = t.style.width = "1px", document.body.appendChild(t), n = 2 === t.offsetWidth, document.body.removeChild(t), n
            },
            o = t => {
                const e = document.body,
                    i = document.defaultView,
                    n = document.documentElement,
                    o = t.getBoundingClientRect(),
                    a = n.clientTop || e.clientTop || 0,
                    l = n.clientLeft || e.clientLeft || 0;
                let c, h;
                c = i && null != i.pageYOffset ? i.pageYOffset : s() && n && null != n.scrollTop ? n.scrollTop : e.scrollTop, h = i && null != i.pageXOffset ? i.pageXOffset : s() && n && null != n.scrollLeft ? n.scrollLeft : e.scrollLeft;
                const u = r(t);
                return {
                    height: o.height * u,
                    top: o.top * u + c - a,
                    left: o.left * u + h - l,
                    width: o.width * u,
                    zoom: u
                }
            },
            r = t => t && t !== document.documentElement ? r(t.parentElement) * (getComputedStyle(t).zoom || 1) : 1
    }, (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
        var utilities_script_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
        const getScriptTags = t => t.match(/<script.*?src[^>]*>\s*<\/script>|<script.*?>[\s\S]+?<\/script>/gi) || [],
            scriptTagsToRunScriptsInput = scriptTags => {
                if (!scriptTags) return [];
                scriptTags instanceof Array || (scriptTags = getScriptTags(scriptTags));
                const hashes = [];
                for (let i = 0; i < scriptTags.length; i++) {
                    let scriptTag = scriptTags[i],
                        hash = {},
                        matches = scriptTag.match(/<script.*?>/i);
                    if (matches && (matches = matches[0].match(/src="([^"]+)"/i), matches && (hash.src = matches[1], hash.async = /async/i.test(scriptTag.replace(hash.src, "")))), !matches && (matches = scriptTag.match(/<script>([\s\S]+?)<\/script>/i), matches)) {
                        let src = matches[1];
                        hash.fn = function() {
                            return eval(src)
                        }
                    }
                    hashes.push(hash)
                }
                return hashes
            },
            execScriptTags = (t, e) => {
                if (!t) return null;
                const i = scriptTagsToRunScriptsInput(t);
                return runScripts(i).then(e)
            },
            removeScriptTags = t => t.replace(/<script.*?src[^>]*>\s*<\/script>|<script>[\s\S]+?<\/script>/g, "")
    }, (t, e, i) => {
        i(9), i(4), i(21)
    }, (t, e, i) => {
        i(22)
    }, (t, e, i) => {
        i.d(e, {
            Dd: () => f,
            Qz: () => v,
            U4: () => a,
            aY: () => g,
            kh: () => u,
            lR: () => l,
            v9: () => m
        });
        var n = i(7),
            s = i(23),
            o = i(24);
        (0, o.Ni)("app"), (0, o.Ni)("fast-protected");
        const r = (0, o.Ni)("fast"),
            a = "",
            l = "113028ec7b0c65ab5df78649c512187fde580d88",
            c = ("undefined" != typeof window && n.z === window && n.z.location && n.z.location.protocol, () => (0, o.rY)("fast") || null),
            h = (t = void 0) => {
                if (t) return t;
                return c() || r
            },
            u = () => {
                const t = c();
                return t || "fast.wistia.net"
            },
            d = (() => {
                const t = document.getElementsByTagName("script");
                for (let e = 0; e < t.length; e++) {
                    const i = t[e];
                    if (i.src) {
                        const t = new s.s0(i.src),
                            e = /\/assets\/external\/E-v1?\.js$/.test(t.rawPath),
                            n = t.host === h() || t.host === u() || "fast-canary.wistia.net" === t.host,
                            o = "https:" === location.protocol && "https:" === t.protocol,
                            r = "" === t.protocol || null == t.protocol,
                            a = o || r || "http:" === location.protocol,
                            l = !i.readyState || /loaded|complete/.test(i.readyState);
                        if (e && n && a && l) return t
                    }
                }
                return new s.s0(`${(0,s.ff)()}//${u()}/E-v1.js`)
            })(),
            p = () => d.host,
            g = () => d.port ? `${p()}:${d.port}` : p(),
            m = () => d.protocol,
            f = (t = {}) => t.embedHost ? b(t.embedHost) : g(),
            v = () => "pipedream.wistia.com",
            y = new RegExp(`(${["wistia.net","wistia.com","wistia.mx","wistia.dev","wistia.tech","wistia.am","wistia.se","wistia.io","wistia.st"].map((t=>`\\.${t.replace(".","\\.")}`)).join("|")})$`),
            b = t => t && y.test(t) ? t : g()
    }, (t, e, i) => {
        i.d(e, {
            ff: () => o,
            s0: () => c
        });
        var n = i(4),
            s = i(9);
        const o = (t = location.href) => /^http:\/\//.test(t) ? "http:" : "https:",
            r = t => {
                if (null == t) return t;
                let e;
                try {
                    e = decodeURIComponent(t)
                } catch (i) {
                    setTimeout((() => {
                        s.ct.notice(i)
                    }), 50), e = t
                }
                return e
            },
            a = t => {
                let e = t[0];
                for (let i = 1; i < t.length; i++) e += `[${t[i]}]`;
                return e
            },
            l = ["protocol", "host", "port", "params", "path"],
            c = function(t) {
                const e = this;
                e.params = {}, e.path = [], e.host = "", e.rawPath = "", "object" == typeof t ? e.fromOptions(t) : t && e.fromRaw(t)
            },
            h = c.prototype;
        h.fromOptions = function(t) {
            for (let e = 0; e < l.length; e++) {
                let i = l[e];
                null != t[i] && (this[i] = t[i])
            }
            return this
        }, h.fromRaw = function(t) {
            let e;
            return this.rawUrl = t, e = t.match(/^((?:https?:)|(?:file:)|(?:ftp:))?\/\//), e && (this.protocol = e[1] || void 0), e = t.match(/\/\/([^:?#/]*)/), e && (this.host = e[1] || void 0), e = t.match(/\/\/.*?(\/[^?#$]+)/) || t.match(/(^\/[^/][^?#$]+)/), e && this.setPath(e[1]), e = t.match(/:(\d+)/), e && (this.port = parseInt(e[1], 10)), e = t.match(/\?([^#]+)/), e && (this.rawParams = e[1], this.params = (t => {
                const e = {};
                if (!t) return e;
                const i = t.split("&");
                for (let t = 0; t < i.length; t++) {
                    let o = i[t].split("="),
                        a = o[0],
                        l = o[1];
                    try {
                        a = decodeURIComponent(a).match(/([\w\-_]+)/g) || ""
                    } catch (t) {
                        setTimeout((() => {
                            s.ct.notice(t)
                        }), 50), a = ""
                    }(0, n.cast)(a);
                    const c = (0, n.getDeep)(e, a);
                    if (null != c)
                        if ((0, n.isArray)(c)) c.push(r(l));
                        else {
                            const t = [c];
                            t.push(r(l)), (0, n.setAndPreserveUndefined)(e, a, t)
                        }
                    else(0, n.setAndPreserveUndefined)(e, a, r(l))
                }
                return e
            })(this.rawParams)), e = t.match(/#(.*)$/), e && (this.anchor = e[1]), this
        }, h.clone = function() {
            return new c({
                protocol: this.protocol,
                host: this.host,
                port: this.port,
                path: (0, n.clone)(this.path),
                params: (0, n.clone)(this.params),
                anchor: this.anchor
            })
        }, h.ext = function(t) {
            if (null != t) {
                const e = this.ext(),
                    i = this.path.length - 1,
                    n = new RegExp(`\\.${e}`, "g");
                return e && (this.path[i] = `${this.path[i].replace(n,"")}`), this.path[i] = `${this.path[i]}.${t}`
            }
            const e = this.path[this.path.length - 1].match(/\.(.*)$/);
            return null != e && e[1] || null
        }, h.isRelative = function(t = window.location) {
            const e = this.protocol,
                i = this.host;
            return !(null != e && "" !== e && e !== t.protocol || i && i !== t.hostname)
        }, h.toString = function() {
            return this.isRelative() ? this.relative() : this.absolute()
        }, h.absolute = function() {
            let t = "";
            null != this.protocol && (t = this.protocol);
            let e = "";
            return null != this.port && (e = `:${this.port}`), `${t}//${this.host||location.host}${e}${this.relative()}`
        }, h.relative = function() {
            let t = "";
            var e;
            this.path.length > 0 && ("string" == typeof(e = this.path) && (e = e.split("/")), t = null == e ? "" : `/${e.join("/")}`, this._hasTrailingSlash && (t += "/"));
            let i = `?${(t=>{const e=[];return(0,n.eachLeaf)(t,((t,i)=>{null!=t?e.push(`${encodeURIComponent(a(i))}=${encodeURIComponent(t)}`):e.push(encodeURIComponent(a(i)))})),e.join("&")})(this.params)}`;
            return 1 === i.length && (i = ""), `${t}${i}${this.relativeAnchor()}`
        }, h.authority = function() {
            const t = null != this.port ? `:${this.port}` : "";
            return `${this.host}${t}`
        }, h.relativeProtocol = function() {
            let t = "";
            return null != this.port && (t = `:${this.port}`), `//${this.host}${t}${this.relative()}`
        }, h.relativeAnchor = function() {
            let t = "";
            return null != this.anchor && (t = `#${this.anchor}`), `${t}`
        }, h.setPath = function(t) {
            this.rawPath = t, this._hasTrailingSlash = /\/$/.test(this.rawPath), this.path = (t => {
                const e = [];
                if (null == t) return e;
                const i = t.split(/\/+/);
                for (let t = 0; t < i.length; t++) {
                    let n = i[t];
                    null != n && "" !== n && e.push(n)
                }
                return e
            })(this.rawPath)
        }, c.create = t => new c(t), c.create, c.parse = t => new c(t), c.parse
    }, (t, e, i) => {
        i.d(e, {
            Ni: () => l,
            rY: () => c
        });
        const n = /([a-z0-9-]+)-cde-([a-z0-9-]+)\.([a-z0-9-]+)\.wistia\.io/i,
            s = /([a-z0-9-]+)-cde-([a-z0-9-]+)\.([a-z0-9-]+)\.claw\.wistia\.io/i,
            o = /([a-z0-9-]+)-cde-([a-z0-9-]+)\.([a-z0-9-]+)\.wiz\.wistia\.io/i,
            r = /([a-z0-9-]+)-cde-([a-z0-9-]+)\.([a-z0-9-]+)\.cdb-staging\.wistia\.io/i,
            a = /([a-z0-9-]+)-txl-([a-z0-9-]+)\.([a-z0-9-]+)\.mtl\.wistia\.io/i,
            l = (t = "app") => c(t) || `${t}.wistia.com`,
            c = (t = "app") => {
                if ((() => {
                        if ("undefined" == typeof document || "function" != typeof document.querySelector) return !1;
                        try {
                            const t = document.querySelector('meta[name="wistia-host-mode"]'),
                                e = t ? .getAttribute("content");
                            return "string" == typeof e && "production" === e.trim().toLowerCase()
                        } catch {
                            return !1
                        }
                    })()) return null;
                if ("undefined" != typeof window && window.location) {
                    const e = window.location.hostname,
                        i = r.exec(e);
                    if (i) return `${t}-cde-${i[2]}.${i[3]}.cdb-staging.wistia.io`;
                    const l = n.exec(e);
                    if (l) return `${t}-cde-${l[2]}.${l[3]}.wistia.io`;
                    const c = s.exec(e);
                    if (c) return `${t}-cde-${c[2]}.${c[3]}.claw.wistia.io`;
                    const h = o.exec(e);
                    if (h) return `${t}-cde-${h[2]}.${h[3]}.wiz.wistia.io`;
                    const u = a.exec(e);
                    if (u) return `${t}-txl-${u[2]}.${u[3]}.mtl.wistia.io`
                }
                return null
            }
    }, (t, e, i) => {
        i.d(e, {
            h: () => s
        });
        var n = i(13);
        const s = (t = "wistia_", e = "") => {
            const i = n.s._sequenceVal || 1,
                s = `${t}${i}${e}`;
            return n.s._sequenceVal = i + 1, s
        }
    }, , (t, e, i) => {
        i.d(e, {
            yY: () => n
        });
        const n = "WistiaPlayerInter, Helvetica, Sans-Serif"
    }, , (t, e, i) => {
        i.d(e, {
            I: () => n
        });
        const n = ({
            width: t = 40,
            height: e = 34,
            styleOverride: i = {},
            ariaHidden: n = !1,
            fillColor: s = "#ffffff"
        }) => ({
            x: "0px",
            y: "0px",
            viewBox: `0 0 ${t} ${e}`,
            "enable-background": `new 0 0 ${t} ${e}`,
            "aria-hidden": `${n}`,
            style: {
                fill: s,
                height: "100%",
                left: 0,
                strokeWidth: 0,
                top: 0,
                width: "100%",
                ...i
            }
        })
    }, , , (t, e, i) => {
        i.d(e, {
            K6: () => r,
            bJ: () => a,
            s1: () => o
        });
        var n = i(33),
            s = i(34);
        i(35);
        const o = {
                nonText: 3,
                largeText: 3,
                paragraphText: 4.5,
                smallText: 5.5,
                backgroundColorWhereNonTextHitAreaContentsHaveProperContrast: 2
            },
            r = t => {
                let e = t;
                if (t instanceof s.Q1) {
                    if ((0, n.gD)(t.r) || (0, n.gD)(t.g) || (0, n.gD)(t.b)) throw new Error("Color does not contain required RGB values");
                    e = [t.r, t.g, t.b]
                } else if ("string" == typeof t) {
                    const i = new s.Q1(t);
                    if ((0, n.gD)(i.r) || (0, n.gD)(i.g) || (0, n.gD)(i.b)) throw new Error("Color does not contain required RGB values");
                    e = [i.r, i.g, i.b]
                }
                const i = e[0] / 255,
                    o = e[1] / 255,
                    r = e[2] / 255,
                    a = Math.max(i, o, r),
                    l = Math.min(i, o, r);
                let c = 0,
                    h = 0;
                const u = (a + l) / 2;
                a === l && (c = 0, h = 0);
                const d = a - l;
                return 0 === d ? {
                    hue: c,
                    saturation: h,
                    lightness: 100 * i
                } : (h = u > .5 ? d / (2 - a - l) : d / (a + l), c = a === i ? (o - r) / d + (o < r ? 6 : 0) : a === o ? (r - i) / d + 2 : (i - o) / d + 4, c /= 6, {
                    hue: 360 * c,
                    saturation: 100 * h,
                    lightness: 100 * u
                })
            },
            a = (t, e) => {
                const i = new s.Q1(t),
                    n = new s.Q1(e),
                    o = i.getRelativeLuminance(),
                    r = n.getRelativeLuminance(),
                    a = o > r ? (o + .05) / (r + .05) : (r + .05) / (o + .05);
                return Number.parseFloat(a.toFixed(3))
            }
    }, (t, e, i) => {
        i.d(e, {
            DM: () => l,
            Tn: () => h,
            gD: () => n,
            n9: () => s,
            uI: () => r,
            uu: () => c
        }), Number.NaN;
        var n = t => (t => null === t)(t) || (t => void 0 === t)(t),
            s = t => !n(t),
            o = t => "string" == typeof t,
            r = t => o(t) && !(t => o(t) && "" === t)(t),
            a = t => s(t) && "object" == typeof t && !(t instanceof Array),
            l = t => a(t) && 0 === Object.keys(t).length,
            c = t => a(t) && Object.keys(t).length > 0,
            h = t => s(t) && "function" == typeof t
    }, (t, e, i) => {
        i.d(e, {
            Q1: () => h
        });
        var n = i(32);
        const s = /^#?([0-9a-f]{3,4}|[0-9a-f]{6,8})$/i,
            o = /^rgba?\((\d{1,3}(?:\.\d+)?%?),\s*(\d{1,3}(?:\.\d+)?%?),\s*(\d{1,3}(?:\.\d+)?%?)(?:,\s*([01]?\.?\d*))?\)$/,
            r = /^\d+(\.\d+)*%$/,
            a = /([0-9a-f])/gi,
            l = t => r.test(t) ? 2.55 * parseFloat(t) : t,
            c = (t, e, i) => (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t);
        class h {
            constructor(t) {
                t instanceof h ? (this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a) : t ? this.parse(t) : (this.r = this.g = this.b = 0, this.a = 1)
            }
            parse(t) {
                let e = !1;
                if (Array.isArray(t)) this.r = t[0], this.g = t[1], this.b = t[2], this.a = t[3] ? ? 1, e = !0;
                else {
                    const i = String(t).replace(/\s+/g, "");
                    if (s.test(i)) {
                        let t = i.replace(/^#/, "");
                        3 !== t.length && 4 !== t.length || (t = t.replace(a, "$1$1")), this.r = parseInt(t.substr(0, 2), 16), this.g = parseInt(t.substr(2, 2), 16), this.b = parseInt(t.substr(4, 2), 16), 8 === t.length ? this.a = parseInt(t.substr(6, 2), 16) / 255 : this.a = 1, e = !0
                    } else if (o.test(i)) {
                        const t = i.match(o);
                        this.r = parseFloat(l(t[1])), this.g = parseFloat(l(t[2])), this.b = parseFloat(l(t[3])), t[4] ? this.a = parseFloat(t[4]) : this.a = 1, e = !0
                    }
                }
                return (!e || isNaN(this.r) || isNaN(this.g) || isNaN(this.b) || isNaN(this.a) || this.r < 0 || this.g < 0 || this.b < 0 || this.a < 0) && (this.r = 41, this.g = 73, this.b = 229, this.a = 1, console.error(`An invalid color was provided, ${t.toString()}, using default color instead.`)), this
            }
            clone() {
                return new h(this)
            }
            _hslFromRgb() {
                const {
                    hue: t,
                    saturation: e,
                    lightness: i
                } = (0, n.K6)([this.r, this.g, this.b]);
                return this._h = t, this._s = e, this._l = i, this
            }
            _rgbFromHsl() {
                const t = this._h / 360,
                    e = this._s / 100,
                    i = this._l / 100,
                    n = i < .5 ? i * (1 + e) : i + e - i * e,
                    s = 2 * i - n;
                return this.r = 255 * c(s, n, t + 1 / 3), this.g = 255 * c(s, n, t), this.b = 255 * c(s, n, t - 1 / 3), this
            }
            blendChannel(t, e, i, n) {
                return n ? (this[t] = Math.sqrt(this[t] ** 2 * (1 - i) + e ** 2 * i), this) : (this[t] = i * e + (1 - i) * this[t], this)
            }
            blend(t, e, i) {
                return t = new h(t), this.blendChannel("r", t.r, e, i), this.blendChannel("g", t.g, e, i), this.blendChannel("b", t.b, e, i), this
            }
            getContrastRatio(t) {
                return Number.parseFloat((0, n.bJ)(this.toHexWithHash(), new h(t).toHexWithHash()).toFixed(3))
            }
            hasAccessibleContrast(t, e) {
                return this.getContrastRatio(t) >= n.s1[e]
            }
            hue() {
                return this._hslFromRgb(), this._h
            }
            lightenChannel(t, e) {
                return this[t] += e, this[t] < 0 ? this[t] = 0 : this[t] > 255 && (this[t] = 255), this
            }
            lighten(t) {
                return this.looksLikePercent(t) ? this.lightness(this.lightness() + parseFloat(t)) : (this.lightenChannel("r", t), this.lightenChannel("g", t), this.lightenChannel("b", t)), this
            }
            darken(t) {
                return "string" == typeof t ? this.lighten(`-${t}`) : this.lighten(-t)
            }
            looksLikePercent(t) {
                return /^-?\d+(\.\d+)?%$/.test(t)
            }
            lightness(t) {
                return this._hslFromRgb(), null != t ? (this._l = Math.max(0, Math.min(100, t)), this._rgbFromHsl(), this) : this._l
            }
            saturation(t) {
                return this._hslFromRgb(), null != t ? (this._s = Math.max(0, Math.min(100, t)), this._rgbFromHsl(), this) : this._s
            }
            setHue(t) {
                if (this._hslFromRgb(), null != t) return this._h = Math.max(0, Math.min(360, t)), this._rgbFromHsl(), this
            }
            shade(t, e) {
                return this.blend("#000000", t, e)
            }
            grayLevel() {
                return (.299 * this.r + .587 * this.g + .114 * this.b) / 255
            }
            tint(t, e) {
                return this.blend("#ffffff", t, e)
            }
            whiteLevel() {
                return Math.min(Math.min(this.r, this.g), this.b)
            }
            getRelativeLuminance() {
                const t = t => {
                        const e = .003921569 * t;
                        return e <= .03928 ? e / 12.92 : ((e + .055) / 1.055) ** 2.4
                    },
                    e = t(this.r),
                    i = t(this.g),
                    n = t(this.b);
                return Math.min(.2126 * e + .7152 * i + .0722 * n, 1)
            }
            isDark(t) {
                return t ? this.getRelativeLuminance() < .15 : this.grayLevel() <= .4
            }
            isLight(t) {
                return t ? this.getRelativeLuminance() >= .8 : this.grayLevel() > .4
            }
            isGrayscale() {
                return this.r === this.g && this.g === this.b
            }
            distanceFrom(t) {
                return Math.sqrt((this.r - t.r) ** 2 + (this.g - t.g) ** 2 + (this.b - t.b) ** 2)
            }
            channelDominance() {
                return ["r", "g", "b"].sort(((t, e) => this[e] - this[t]))
            }
            alpha(t) {
                return null != t ? (this.a = t, this) : this.a
            }
            red(t) {
                return null != t ? (this.r = t, this) : this.r
            }
            green(t) {
                return null != t ? (this.g = t, this) : this.g
            }
            blue(t) {
                return null != t ? (this.b = t, this) : this.b
            }
            toHex() {
                let t = Math.round(this.r).toString(16),
                    e = Math.round(this.g).toString(16),
                    i = Math.round(this.b).toString(16);
                return 1 === t.length && (t = `0${t}`), 1 === e.length && (e = `0${e}`), 1 === i.length && (i = `0${i}`), `${t}${e}${i}`
            }
            toHexWithAlpha() {
                let t = Math.round(255 * this.a).toString(16);
                return 1 === t.length && (t = `0${t}`), `${t}${this.toHex()}`
            }
            toHexWithHash() {
                return `#${this.toHex()}`
            }
            toRgb() {
                return `rgb(${Math.round(this.r)},${Math.round(this.g)},${Math.round(this.b)})`
            }
            toRgba() {
                return `rgba(${Math.round(this.r)},${Math.round(this.g)},${Math.round(this.b)},${this.a})`
            }
            toRgbaOrHex() {
                return this.toRgba()
            }
            toPercent() {
                return `rgba(${this.r/255*100}%,${this.g/255*100}%,${this.b/255*100}%,${this.a})`
            }
            toIeGradient() {
                return `progid:DXImageTransform.Microsoft.gradient(startColorStr='#${this.toHexWithAlpha()}', endColorStr='#${this.toHexWithAlpha()}')`
            }
            toString() {
                return this.toPercent()
            }
        }
    }, (t, e, i) => {
        i.d(e, {
            N7: () => u
        });
        var n = i(33),
            s = i(36),
            o = i(13),
            r = i(24),
            a = i(22),
            l = i(41);
        let c = !1;
        const h = [],
            u = (t, e, i) => {
                try {
                    if (!0 !== (0, s.D5)()) return;
                    if (!o.s.isSentryInitialized) return (() => {
                        if (!0 === (0, s.D5)() && !window.Sentry && !o.s.isSentryInitialized && !c) {
                            c = !0;
                            const t = document.createElement("script");
                            t.src = "https://browser.sentry-cdn.com/9.6.1/bundle.min.js", t.crossOrigin = "anonymous", t.integrity = "sha384-kbRmCeIl7Uxr+vT9YhSAdguCdd4L5QPRj7jzQTanorUVVlw/Y5X9vtzVyOEHLfpH", t.onload = () => (() => {
                                if ((0, n.gD)(window.Sentry) || (0, n.gD)(window.Sentry.BrowserClient) || (0, n.gD)(window.Sentry.makeFetchTransport) || (0, n.gD)(window.Sentry.defaultStackParser) || (0, n.gD)(window.Sentry.Scope)) return;
                                const t = new window.Sentry.BrowserClient({
                                        dsn: "https://a3591ba5e949a37083cc6f5a4191e903@o4505518331658240.ingest.us.sentry.io/4505794284290048",
                                        transport: window.Sentry.makeFetchTransport,
                                        stackParser: window.Sentry.defaultStackParser,
                                        integrations: [window.Sentry.httpContextIntegration()],
                                        release: (0, n.uI)(a.U4) ? a.U4 : a.lR
                                    }),
                                    e = new window.Sentry.Scope;
                                e.setClient(t), e.setTags({
                                    pillar: "publish"
                                }), o.s._sentryScope = e, t.init(), o.s.isSentryInitialized = !0, h.length > 0 && (0, l.WO)("player/buffered-sentry-errors", h.length), h.forEach((t => {
                                    u(t.product, t.error, { ...t.details,
                                        isBuffered: "true"
                                    })
                                })), h.length = 0, g(), m()
                            })(), document.head.appendChild(t)
                        }
                    })(), void(h.length < 50 && h.push({
                        details: i,
                        error: e,
                        product: t
                    }));
                    const d = "mediaPlayback" === (r = t) ? .001 : "hlsPlayback" === r ? .01 : 1;
                    let p = !1;
                    const f = (0, n.gD)(window.crypto) ? window.msCrypto : window.crypto;
                    p = void 0 !== f ? f.getRandomValues(new Uint32Array(1))[0] / 4294967296 < d : Math.random() < d, p ? (0, s.D5)() && (o.s._sentryScope.clear(), o.s._sentryScope.setTag("pillar", "publish"), o.s._sentryScope.setTag("product", t), (0, n.uu)(i) && o.s._sentryScope.setTags(i), o.s._sentryScope.setTag("url", window.location.href), o.s._sentryScope.captureException(e)) : console.error(e)
                } catch (t) {
                    console.error(t)
                }
                var r
            },
            d = t => {
                const e = t.error;
                if (!(e instanceof Error)) return;
                const i = t.error ? .source ? ? "",
                    n = (0, r.Ni)("fast");
                i.includes(n) && u("globalListener", e)
            },
            p = t => {
                const e = t.reason;
                e instanceof Error && (t.reason ? .stack ? ? "").includes((0, r.Ni)("fast")) && u("globalListener", e)
            },
            g = () => {
                o.s._isListeningForGlobalErrors || (window.addEventListener("error", d), o.s._isListeningForGlobalErrors = !0)
            },
            m = () => {
                o.s._isListeningForGlobalUnhandledRejections || (window.addEventListener("unhandledrejection", p), o.s._isListeningForGlobalUnhandledRejections = !0)
            }
    }, (t, e, i) => {
        i.d(e, {
            D5: () => l
        });
        var n = i(10),
            s = i(37),
            o = i(39),
            r = i(13);
        r.s._visitorTrackingDomain || (r.s._visitorTrackingDomain = location.hostname || ""), r.s._visitorTracking || ((() => {
            const t = (0, s.y1)().visitorTrackingEnabled;
            null != t && ((0, s.$B)((t => delete t.visitorTrackingEnabled)), r.s._visitorTracking = {}, r.s._visitorTracking[r.s._visitorTrackingDomain] = {
                isEnabled: t,
                updatedAt: Date.now()
            }, (0, s.$B)((t => t.visitorTracking = r.s._visitorTracking)))
        })(), r.s._visitorTracking = (0, s.y1)().visitorTracking || {}), r.s.consent = t => null == t ? l() : a(t);
        const a = (t, e = r.s._visitorTrackingDomain) => {
                "default" === t ? delete r.s._visitorTracking[e] : r.s._visitorTracking[e] = {
                    isEnabled: "true" == `${t}`,
                    updatedAt: Date.now()
                }, (0, s.$B)((t => t.visitorTracking = r.s._visitorTracking)), (0, n.mj)("visitortrackingchange", t), [...document.getElementsByTagName("wistia-player")].forEach((e => {
                    e.dispatchEvent(new CustomEvent("visitor-tracking-change", {
                        detail: {
                            isTrackingEnabled: t
                        }
                    }))
                }))
            },
            l = () => {
                if ("boolean" == typeof r.s._visitorTracking) return r.s._visitorTracking;
                if (r.s._visitorTracking) {
                    const t = (() => {
                        if (r.s._visitorTrackingDomain) {
                            const t = r.s._visitorTrackingDomain.split(".");
                            for (; t.length > 0;) {
                                const e = r.s._visitorTracking[t.join(".")],
                                    i = e && e.isEnabled;
                                if (null != i) return i;
                                t.shift()
                            }
                        }
                    })();
                    if (null != t) return Boolean(t)
                }
                const t = (0, o.getAllApiHandles)();
                if (r.s.channel && r.s.channel.all) try {
                    t.push(...r.s.channel.all())
                } catch (t) {}
                return !(t.some((t => !0 === (t._mediaData || t._galleryData || {}).privacyMode)) || c())
            },
            c = () => Object.values(r.s._privacyModeSources || {}).some(Boolean)
    }, (t, e, i) => {
        i.d(e, {
            $B: () => a,
            y1: () => r
        });
        var n = i(38),
            s = i(13);
        const o = "wistia",
            r = () => (0, n.Lg)(o),
            a = t => (s.s._localStorage = (0, n.yo)(o, t), s.s._localStorage)
    }, (t, e, i) => {
        i.d(e, {
            Lg: () => l,
            yo: () => c
        });
        var n = i(13);
        const s = t => {
                setTimeout((() => {
                    throw t
                }), 0)
            },
            o = "_namespacedLocalStorage",
            r = (t = "wistia-test-localstorage") => {
                try {
                    if ("undefined" == typeof localStorage) return !1;
                    if (null != n.s._localStorageWorks) return n.s._localStorageWorks;
                    const e = localStorage.getItem(t);
                    localStorage.removeItem(t), localStorage.setItem(t, e), localStorage.removeItem(t), n.s._localStorageWorks = !0
                } catch (t) {
                    n.s._localStorageWorks = !1
                }
                return n.s._localStorageWorks
            },
            a = () => (null == n.s[o] && (n.s[o] = {}), n.s[o]),
            l = t => {
                if (!r()) return a()[t] || {};
                if (localStorage[t]) try {
                    return "null" === localStorage[t] ? {} : JSON.parse(localStorage[t])
                } catch (t) {
                    s(t)
                }
                return {}
            },
            c = (t, e) => {
                const i = l(t);
                try {
                    e(i)
                } catch (t) {
                    s(t)
                }
                return ((t, e) => {
                    if (!r()) return null != e && "object" == typeof e && (a()[t] = e), e;
                    try {
                        a()[t] = e, localStorage[t] = JSON.stringify(e)
                    } catch (t) {
                        s(t)
                    }
                    return e
                })(t, i)
            }
    }, (t, e, i) => {
        i.d(e, {
            getAllApiHandles: () => s
        }), i(9);
        var n = i(40);
        const s = () => (void 0 === (0, n.wData)("video") ? [] : Object.values((0, n.wData)("video"))).concat(void 0 === (0, n.wData)("iframe_api") ? [] : Object.values((0, n.wData)("iframe_api")))
    }, (t, e, i) => {
        i.d(e, {
            wData: () => o
        });
        var n = i(4),
            s = i(13);
        const o = (t, e) => ((0, n.isArray)(t) || (t = t.split(".")), null != e && (0, n.setDeep)(s.s, ["_data"].concat(t), e), (0, n.getDeep)(s.s, ["_data"].concat(t)))
    }, (t, e, i) => {
        i.d(e, {
            WO: () => c
        });
        var n = i(5),
            s = i(42),
            o = i(36),
            r = i(22),
            a = i(13);
        null == a.s._simpleMetricsCache && (a.s._simpleMetricsCache = {}), null == a.s._simpleMetricsDebounceInterval && (a.s._simpleMetricsDebounceInterval = 500);
        const l = a.s._simpleMetricsCache,
            c = (t, e = 1, i = {}) => u("count", t, e, i),
            h = (...t) => {
                if (!(0, o.D5)()) return;
                const e = `https://${(0,r.Qz)()}/mput?topic=metrics`;
                return fetch(e, {
                    method: "POST",
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: t.join("\n")
                }).then((t => {
                    t.ok || console.error(t)
                })).catch((t => {
                    console.error(t)
                }))
            },
            u = (t, e, i, r = {}) => {
                if ((0, o.D5)()) try {
                    null == l.toMput && (l.toMput = []);
                    const o = (0, n.k)({
                            type: t,
                            key: e,
                            value: null != i ? i : null
                        }, r),
                        c = JSON.stringify(o, (() => {
                            const t = new WeakSet;
                            return (e, i) => {
                                if ("object" == typeof i && null !== i) {
                                    if (t.has(i)) return "[Circular]";
                                    t.add(i)
                                }
                                return i
                            }
                        })());
                    l.toMput.push(c), clearTimeout(a.s._msendTimeout), a.s._msendTimeout = setTimeout((() => {
                        (0, s.R)((() => {
                            h.apply(void 0, l.toMput), l.toMput = []
                        }))
                    }), a.s._simpleMetricsDebounceInterval)
                } catch (t) {
                    console.error(t.message), console.error(t.stack)
                }
            }
    }, (t, e, i) => {
        i.d(e, {
            R: () => n
        });
        const n = (t, e = 4e3, i = document, n = window) => {
            if (/loaded|complete/.test(i.readyState)) setTimeout(t, 0);
            else {
                const i = () => {
                        n.removeEventListener("load", s, !1)
                    },
                    s = () => {
                        clearTimeout(o), i(), t()
                    };
                n.addEventListener("load", s, !1);
                const o = setTimeout((() => {
                    i(), t()
                }), e)
            }
        }
    }, (t, e, i) => {
        i.d(e, {
            C: () => l,
            y: () => a
        });
        var n = i(3),
            s = i(6),
            o = i(13);
        const r = (0, s.o1)();
        if (null == o.s._isMouseDown) {
            o.s._isMouseDown = !1;
            const t = t => {
                    o.s._isMouseDown = !0, o.s._lastMouseDownAt = Date.now(), setTimeout((() => {
                        t.defaultPrevented && (o.s._isMouseDown = !1)
                    }), 0)
                },
                e = () => {
                    o.s._lastMouseUpAt = Date.now(), setTimeout((() => {
                        o.s._isMouseDown = !1
                    }), 0)
                },
                i = () => {
                    o.s._lastMouseUpAt = Date.now(), setTimeout((() => {
                        o.s._isMouseDown = !1
                    }), 0)
                };
            r.touchScreen ? ((0, n.elemBind)(document, "touchstart", t, !0), (0, n.elemBind)(document, "touchend", i, !0)) : ((0, n.elemBind)(document, "mousedown", t, !0), (0, n.elemBind)(document, "mouseup", e, !0));
            const s = r.windows ? e : t;
            (0, n.elemBind)(document, "contextmenu", s, !0)
        }
        const a = () => null != o.s._mouseDownForceReturnVal ? o.s._mouseDownForceReturnVal : o.s._isMouseDown,
            l = () => null != o.s._mouseDownForceReturnVal ? o.s._mouseDownForceReturnVal : Math.max(o.s._lastMouseDownAt || 0, (o.s._lastMouseUpAt || 0) - 1) > Date.now() - 500
    }, (t, e, i) => {
        i.d(e, {
            $: () => g,
            Oj: () => c,
            sC: () => p
        });
        var n = i(4),
            s = (i(45), i(13));
        const o = s.s.languages = s.s.languages || {},
            r = s.s.translations = s.s.translations || {};
        s.s._translationPromises || (s.s._translationPromises = {});
        const a = ["ar", "de", "es", "en-US", "fr", "it", "ja", "ko", "pt", "ru", "zh-CN"],
            l = {
                ara: "ar",
                ger: "de",
                spa: "es",
                eng: "en-US",
                fre: "fr",
                ita: "it",
                jpn: "ja",
                kor: "ko",
                por: "pt",
                rus: "ru",
                chi: "zh-CN"
            },
            c = (t, e) => {
                if (null == o[t]) throw new Error(`Must define a language with code ${t} before defining its translations.`);
                const i = r[t];
                i ? (0, n.merge)(i, e) : r[t] = (0, n.clone)(e)
            };
        let h;
        const u = s.s.cachedDecodings = s.s.cachedDecodings || {},
            d = t => (h || (h = document.createElement("textarea")), null != u[t] ? u[t] : (h.innerHTML = t, u[t] = h.value, h.value)),
            p = (t, e) => {
                let i;
                return t = (t => {
                    if (null == t) return "en-US";
                    if (t = l[t] || t, !a.includes(t)) {
                        const e = f((() => [t]))[0];
                        e && (t = e)
                    }
                    return ("en" === t || /^en-/.test(t)) && (t = "en-US"), ("zh" === t || /^zh-/.test(t)) && (t = "zh-CN"), t
                })(t), i = r[t] && r[t][e] ? r[t][e] : r["en-US"][e], d((t => null == t ? "?" : t)(i))
            },
            g = (t, e = []) => {
                const i = {};
                return e.forEach((e => {
                    i[e] = p(t, e)
                })), i
            },
            m = () => (navigator.languages || navigator.language ? s.s.languagePreference = navigator.languages || [navigator.language] : s.s.languagePreference = ["en-US"], s.s.languagePreference);
        Promise.resolve({
            code: "en-US",
            translations: r["en-US"]
        });
        const f = (t = m) => t().reduce(((t, e) => {
            const i = -1 !== a.indexOf(e),
                n = e.split("-")[0],
                s = -1 !== a.indexOf(n);
            return i ? t.push(e) : s && t.push(n), t
        }), []);
        ((t, e, i) => {
            o[t] = {
                code: t,
                text: d(e)
            }, i && c(t, i)
        })("en-US", "English"), c("en-US", {
            BACKGROUND_FOCUS_MORE_OPTIONS_HINT: "Press O for more options",
            ELLIPSIS_LESS: "Show fewer buttons",
            ELLIPSIS_MORE: "Show more buttons",
            PAUSE: "Pause",
            PLAY: "Play",
            PLAY_BUTTON_LIVE_NOT_STARTED: "Livestream has not started",
            PLAY_BUTTON_TITLE_WHEN_NOT_PLAYING: "Play Video",
            PLAY_BUTTON_TITLE_WHEN_PLAYING: "Pause Video",
            REWATCH: "Rewatch",
            SKIP: "Skip"
        })
    }, (t, e, i) => {
        i.d(e, {
            $: () => a
        });
        var n = i(22),
            s = i(35),
            o = i(41);
        const r = async (t, e = 3, i = 200, n = 0) => {
                const s = 0 === n ? t : `${t}${t.includes("?")?"&":"?"}retry=${n}`;
                try {
                    const e = await
                    import (s);
                    return n > 0 && (0, o.WO)("dynamic-import/retry-success", 1, {
                        attempt: String(n),
                        url: t
                    }), e
                } catch (s) {
                    if (e <= 0) throw s;
                    return await new Promise((t => {
                        setTimeout(t, i)
                    })), r(t, e - 1, i, n + 1)
                }
            },
            a = async (t, e = {}) => {
                const i = function(t) {
                        if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                        return Object.prototype.hasOwnProperty.call(Object(t), "host")
                    }(e) && null != e.host ? e.host : (0, n.aY)(),
                    a = n.U4,
                    l = n.lR,
                    c = `${(0,n.v9)()}//${i}/${t}${""!==a&&a.length>0&&!0!==e.mediaData?`@${a}`:""!==l&&l.length>0&&!0!==e.mediaData?`@${l}`:""}`;
                try {
                    return await r(c)
                } catch (t) {
                    const e = t instanceof Error ? t : new Error(String(t));
                    throw (0, s.N7)("dynamicImport", e, {
                        importUrl: c
                    }), (0, o.WO)("dynamic-import/failure-after-retry", 1, {
                        attempt: String(3),
                        url: c
                    }), t
                }
            }
    }, , , , , , , , , , , , , , , , , , , , , , (t, e, i) => {
        i.d(e, {
            u: () => l
        });
        var n = i(2),
            s = i(6),
            o = i(68);

        function r(t, e, i) {
            return (e = function(t) {
                var e = function(t) {
                    if ("object" != typeof t || !t) return t;
                    var e = t[Symbol.toPrimitive];
                    if (void 0 !== e) {
                        var i = e.call(t, "string");
                        if ("object" != typeof i) return i;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(t)
                }(t);
                return "symbol" == typeof e ? e : e + ""
            }(e)) in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        }
        const a = (0, s.o1)();
        class l extends n.Component {
            constructor(...t) {
                super(...t), r(this, "onSwipe", ((t, e) => {
                    const i = this.props.onSwipe;
                    i && i(t, e)
                })), r(this, "onPinch", ((t, e) => {
                    const i = this.props.onPinch;
                    i && i(t, e)
                })), r(this, "onLongPress", ((t, e) => {
                    const i = this.props.onLongPress;
                    i && i(t, e)
                })), r(this, "onCustomTouchMove", ((t, e) => {
                    const i = this.props.onCustomTouchMove;
                    i && i(t, e)
                }))
            }
            render() {
                const t = this.props.tagName || "div";
                return (0, n.h)(t, { ...this.props,
                    ref: this.props.elemRef
                }, this.props.children)
            }
            componentDidMount() {
                this._savedBase = this.base, this.setupBindings()
            }
            componentDidUpdate() {
                this.base !== this._savedBase && (this._savedBase = this.base, this.destroyBindings(), this.setupBindings())
            }
            componentWillUnmount() {
                this.destroyBindings()
            }
            setupBindings() {
                if (this.unbinds = [], a.touchScreen) {
                    const t = this.touchEvents = new o.A(this.base);
                    t.on("swipe", this.onSwipe), t.on("pinch", this.onPinch), t.on("longpress", this.onLongPress), t.on("touchmove", this.onCustomTouchMove)
                }
            }
            destroyBindings() {
                this.touchEvents && (this.touchEvents.destroy(), this.touchEvents = null), this.unbinds && (this.unbinds.map((t => t())), this.unbinds = null)
            }
        }
    }, (t, e, i) => {
        i.d(e, {
            A: () => l
        });
        var n = i(12),
            s = i(3);

        function o(t, e, i) {
            return (e = function(t) {
                var e = function(t) {
                    if ("object" != typeof t || !t) return t;
                    var e = t[Symbol.toPrimitive];
                    if (void 0 !== e) {
                        var i = e.call(t, "string");
                        if ("object" != typeof i) return i;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(t)
                }(t);
                return "symbol" == typeof e ? e : e + ""
            }(e)) in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        }
        const r = (0, i(6).o1)();
        class a {
            constructor(t) {
                o(this, "onTouchStart", (t => {
                    this.rootWidth = (0, s.elemWidth)(this.rootElem), this.rootHeight = (0, s.elemHeight)(this.rootElem), this.rootOffset = (0, s.elemOffset)(this.rootElem), this.resetTouchContext(), t.touches[0] && (this.xDown = t.touches[0].clientX, this.yDown = t.touches[0].clientY), this.updatePinch(t), 2 == t.touches.length && this.touchesAreInsideRootElem() && t.preventDefault(), this.startedAt = Date.now(), (0, s.elemBind)(document, "touchmove", this.onTouchMoveDocument, {
                        passive: !1
                    }), (0, s.elemBind)(document, "touchend", this.onTouchEndDocument), (0, s.elemBind)(this.rootElem, "touchmove", this.onTouchMove, {
                        passive: !1
                    }), (0, s.elemBind)(this.rootElem, "touchend", this.onTouchEnd);
                    const e = this.getTouchContext(t);
                    this.trigger("touchstart", t, e), this.maybeTriggerMoreSpecificEvent(t, e)
                })), o(this, "onTouchMove", (t => {
                    t._handledByTouchMove = !0;
                    const e = t.touches[0].clientX,
                        i = t.touches[0].clientY;
                    this.xDiff = this.xDown - e, this.yDiff = this.yDown - i, this.updatePinch(t), this.isPinch || (Math.sqrt(this.xDiff * this.xDiff + this.yDiff * this.yDiff) > 25 || Date.now() - this.startedAt > 300) && (this.isSwipe = !0);
                    const n = this.getTouchContext(t);
                    this.trigger("touchmove", t, n), this.maybeTriggerMoreSpecificEvent(t, n)
                })), o(this, "onTouchMoveDocument", (t => {
                    t._handledByTouchMove || this.onTouchMove(t)
                })), o(this, "onTouchEnd", (t => {
                    t._handledByTouchEnd = !0;
                    const e = this.getTouchContext(t);
                    this.trigger("touchend", t, e), this.maybeTriggerMoreSpecificEvent(t, e), setTimeout((() => {
                        this.resetTouchContext(), this.unbindTouchEndAndTouchMove()
                    }), 0)
                })), o(this, "onTouchEndDocument", (t => {
                    t._handledByTouchEnd || this.onTouchEnd(t)
                })), this.rootElem = t, this.xDown = this.yDown = null, this.xDiff = this.yDiff = 0, this.isSwipe = !1, this.isPinch = !1, this.startedAt = null, this.initialPinchDistance = null, this.touch1 = this.touch2 = null, this.pinchDistance = 0, this.pinchScale = 0, (0, s.elemBind)(t, "touchstart", this.onTouchStart, !!r.passiveSupported && {
                    passive: !1
                })
            }
            updatePinch(t) {
                const e = this.rootOffset;
                return 2 === t.touches.length ? (this.touch1 = {
                    left: t.touches[0].pageX - e.left,
                    top: t.touches[0].pageY - e.top
                }, this.touch2 = {
                    left: t.touches[1].pageX - e.left,
                    top: t.touches[1].pageY - e.top
                }, this.pinchDistance = Math.sqrt((this.touch1.left - this.touch2.left) ** 2, (this.touch1.top - this.touch2.top) ** 2), null == this.initialPinchDistance && (this.initialPinchDistance = this.pinchDistance), this.pinchScale = this.pinchDistance / this.initialPinchDistance, this.pinchDelta = this.pinchDistance - this.initialPinchDistance, this.isPinch = !0, this.pinchScale) : 0
            }
            getTouchContext(t) {
                const e = this.rootOffset,
                    i = Date.now() - this.startedAt,
                    n = Object(t.touches[0]);
                return {
                    xOffset: n.pageX - e.left,
                    yOffset: n.pageY - e.top,
                    xDelta: this.xDiff,
                    yDelta: this.yDiff,
                    absXDelta: Math.abs(this.xDiff),
                    absYDelta: Math.abs(this.yDiff),
                    delta: Math.sqrt(this.xDiff * this.xDiff + this.yDiff * this.yDiff),
                    startedAt: this.startedAt,
                    isSwipe: !this.isPinch && this.isSwipe,
                    isTap: i < 1e3 && !this.isPinch && !this.isSwipe,
                    isLongPress: i >= 1e3 && !this.isPinch && !this.isSwipe,
                    isPinch: this.isPinch,
                    timeDelta: i,
                    pinchScale: this.pinchScale,
                    pinchDistance: this.pinchDistance
                }
            }
            touchIsInsideRootElem(t) {
                return t.left >= 0 && t.left < this.rootWidth && t.top >= 0 && t.top < this.rootHeight
            }
            touchesAreInsideRootElem() {
                return this.touchIsInsideRootElem(this.touch1) && this.touchIsInsideRootElem(this.touch2)
            }
            resetTouchContext() {
                this.xDown = this.yDown = null, this.xDiff = this.yDiff = 0, this.isSwipe = !1, this.isPinch = !1, this.startedAt = null, this.pinchDelta = 0, this.pinchDistance = 0, this.initialPinchDistance = null, this.touch1 = this.touch2 = null
            }
            maybeTriggerMoreSpecificEvent(t, e) {
                e.isLongPress ? this.trigger("longpress", t, e) : e.isTap ? this.trigger("tap", t, e) : e.isSwipe ? this.trigger("swipe", t, e) : e.isPinch && this.trigger("pinch", t, e)
            }
            destroy() {
                (0, s.elemUnbind)(this.rootElem, "touchstart", this.onTouchStart), this.unbindTouchEndAndTouchMove(), this.rootElem = null
            }
            unbindTouchEndAndTouchMove() {
                (0, s.elemUnbind)(document, "touchmove", this.onTouchMoveDocument), (0, s.elemUnbind)(document, "touchend", this.onTouchEndDocument), (0, s.elemUnbind)(this.rootElem, "touchmove", this.onTouchMove), (0, s.elemUnbind)(this.rootElem, "touchend", this.onTouchEnd)
            }
        }(0, n.Ut)(a.prototype);
        const l = a
    }, , (t, e, i) => {
        i.d(e, {
            cm: () => a
        });
        var n = i(6),
            s = (i(71), i(3)),
            o = i(2),
            r = (i(25), i(72), function(t, e) {
                if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                return Object.prototype.hasOwnProperty.call(Object(t), e)
            });
        (0, n.o1)();
        const a = t => {
                t._destroyed = !0, (t => {
                    t.unbinds instanceof Array && (t.unbinds.forEach((t => {
                        try {
                            "function" == typeof t && t()
                        } catch (t) {
                            setTimeout((() => {
                                throw t
                            }), 1)
                        }
                    })), t.unbinds = null)
                })(t), (t => {
                    t.eventListeners instanceof Map && (t.eventListeners.forEach(((e, i) => {
                        try {
                            "function" == typeof e && t.embedElement.removeEventListener(i, e)
                        } catch (t) {
                            setTimeout((() => {
                                throw t
                            }), 1)
                        }
                    })), t.eventListeners.clear())
                })(t), l(t), h(t), u(t)
            },
            l = t => {
                t.rootElem && (0, s.elemRemove)(Array.prototype.slice.call(t.rootElem.childNodes))
            },
            c = t => {
                const e = t[0],
                    i = t[1];
                e && i && (0, o.render)((0, o.h)("nothing", null), e)
            },
            h = t => {
                const e = t.reactMounts;
                if (e)
                    if (e instanceof Array) c(e);
                    else
                        for (let t in e) r(e, t) && e[t] && c(e[t])
            },
            u = t => {
                for (let i in t) r(t, i) && ("_" !== (e = i)[0] || "_" !== e[1]) && "mounted" !== i && (t[i] = null);
                var e;
                t.__prevProps = null, t._destroyed = !0
            }
    }, (t, e, i) => {
        i(4);
        var n = i(13);
        null == n.s._timeouts && (n.s._timeouts = {})
    }, (t, e, i) => {
        i.d(e, {
            X: () => r
        });
        var n = i(41),
            s = i(33),
            o = i(13);
        null == o.s._controlDefinitions && (o.s._controlDefinitions = {});
        const r = t => {
            null != t.handle ? null == o.s._controlDefinitions[t.handle] && (o.s._controlDefinitions[t.handle] = t, o.s.trigger && o.s.trigger("controldefined", t)) : console.error("Please specify a handle property for control", t)
        };
        o.s.defineControl = t => {
            const e = {
                name: t.handle,
                location: location.origin + location.pathname
            };
            try {
                const t = o.s.first();
                (0, s.Tn)(t.playerColor) && (0, s.Tn)(t.hashedId) ? (e.playerColor = t.playerColor(), e.hashedId = t.hashedId()) : (e.playerColor = t.playerColor, e.hashedId = t.mediaId)
            } catch (t) {}(0, n.WO)("player/custom-control-definition", 1, e), r(t)
        }
    }, , , , , , , , , , , , , , , , , , , , , (t, e, i) => {
        i.d(e, {
            J: () => o
        });
        const n = t => t.split("-")[0],
            s = () => {
                const t = new Error;
                return t.stack ? .split("\n").slice(2).join("\n")
            },
            o = (t, e) => {
                t.some((t => "string" != typeof t)) && (console.error("availableLanguages has non-string values", t, s()), t = t.filter((t => "string" == typeof t))), e.some((t => "string" != typeof t)) && (console.error("preferredLanguages has non-string values", e, s()), e = e.filter((t => "string" == typeof t)));
                for (const i of e) {
                    if (t.includes(i)) return t.indexOf(i);
                    const e = n(i);
                    if (t.some((t => n(t) === e))) return t.findIndex((t => n(t) === e))
                }
                return -1
            }
    }, (t, e, i) => {
        i.d(e, {
            QL: () => r,
            kx: () => o
        });
        var n = i(38),
            s = i(13);
        const o = t => {
                const e = !1 === s.s._viewerPreferencesEnabled ? {} : (0, n.Lg)("wistia-viewer-preferences");
                return e ? e[t] : null
            },
            r = (t, e) => {
                (0, n.yo)("wistia-viewer-preferences", (i => {
                    i.plugin && delete i.plugin, i[t] = e
                }))
            }
    }, , , , , , , , , , , , (t, e, i) => {
        i.d(e, {
            E: () => a
        });
        var n = i(70);

        function s(t, e, i) {
            return (e = function(t) {
                var e = function(t) {
                    if ("object" != typeof t || !t) return t;
                    var e = t[Symbol.toPrimitive];
                    if (void 0 !== e) {
                        var i = e.call(t, "string");
                        if ("object" != typeof i) return i;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(t)
                }(t);
                return "symbol" == typeof e ? e : e + ""
            }(e)) in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        }

        function o(t, e, i) {
            if ("function" == typeof t ? t === e : t.has(e)) return arguments.length < 3 ? e : i;
            throw new TypeError("Private element is not present on this object")
        }
        var r = new WeakMap;
        class a {
            constructor(t) {
                var e, i, n;
                s(this, "_destroyed", void 0), s(this, "api", void 0), s(this, "embedElement", void 0), s(this, "eventListeners", void 0), s(this, "impl", void 0), s(this, "isWistiaPlayer", void 0), s(this, "props", void 0), s(this, "reactMounts", void 0), s(this, "rootElem", void 0), s(this, "unbinds", void 0), s(this, "video", void 0), n = void 0,
                    function(t, e) {
                        if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
                    }(e = this, i = r), i.set(e, n), this.video = t, this.embedElement = t.container, this.unbinds = [], this.eventListeners = new Map, this.reactMounts = {}, this.isWistiaPlayer = "WISTIA-PLAYER" === this.embedElement.tagName, this.impl = t, this.isWistiaPlayer ? this.api = this.embedElement : this.api = t.publicApi, this.props = {}
            }
            get disabledButton() {
                return (t = r).get(o(t, this));
                var t
            }
            set disabledButton(t) {
                var e, i;
                i = t, (e = r).set(o(e, this), i)
            }
            destroy() {
                (0, n.cm)(this)
            }
            isAtRootLevel() {
                return !0
            }
            mount(t) {
                this.rootElem = t
            }
        }
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , (t, e, i) => {
        i.d(e, {
            _: () => n
        });
        const n = {
            clip: "rect(1px, 1px, 1px, 1px)",
            height: "1px",
            overflow: "hidden",
            position: "absolute",
            whiteSpace: "nowrap",
            width: "1px"
        }
    }, , , , , , , , , , , (t, e, i) => {
        var n = i(2),
            s = i(33),
            o = i(6),
            r = i(3),
            a = i(45),
            l = i(106),
            c = i(158),
            h = i(159),
            u = i(72),
            d = i(44),
            p = i(189),
            g = i(43),
            m = i(162),
            f = i(4),
            v = i(13),
            y = i(93);

        function b(t, e, i) {
            return (e = function(t) {
                var e = function(t) {
                    if ("object" != typeof t || !t) return t;
                    var e = t[Symbol.toPrimitive];
                    if (void 0 !== e) {
                        var i = e.call(t, "string");
                        if ("object" != typeof i) return i;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(t)
                }(t);
                return "symbol" == typeof e ? e : e + ""
            }(e)) in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        }
        const w = (0, o.o1)();
        (0, d.Oj)("en-US", {
            CAPTIONS_HIDE_MENU: "Hide captions menu",
            CAPTIONS_OFF: "Off",
            CAPTIONS_SHOW_MENU: "Show captions menu"
        });
        const C = "_off_",
            S = ["playerLanguage", "scale", "controlBarBorderRadius", "videoWidth"];
        class T extends l.E {
            constructor(t) {
                super(t), b(this, "onCaptionSettingsChange", ((t, e) => {
                    this.video.embedElement.dispatchEvent(new CustomEvent("captionssettingschange", {
                        detail: t
                    })), v.s.Metrics.videoCount(this.video, "player/captions-settings-change", 1, {
                        allSettings: t,
                        changedSettings: e
                    })
                })), b(this, "setAriaLiveText", ((t = "") => {
                    this.video.setAriaLiveText(t)
                })), b(this, "onMenuKeyChange", (t => {
                    this._currentMenuKey = t
                })), b(this, "toggleTranscript", (() => {
                    this.video.whenControlMounted("transcript").then((t => {
                        t._isVisible ? t.close() : t.open()
                    }))
                })), this.video = t, this.options = t.plugin ? .captions ? .options ? ? {}, this._menuKey = 0, this._isTranscriptOpen = !1, this._currentMenuKey = "root", this.fetchCaptions().then((() => {
                    const t = (0, m.JM)();
                    if (this.options.onByDefault && (0, s.DM)(t)) return void this.video.captionsEnabled(!0);
                    const {
                        onByViewerPreference: e,
                        iso6392Language: i
                    } = t;
                    !1 !== e && !1 !== v.s._viewerPreferencesEnabled ? (e && (this.video.captionsLanguages() ? ? []).some((({
                        iso6392LanguageCode: t
                    }) => t === i)) || this.options.onByDefault) && this.video.captionsEnabled(!0) : this.video.captionsEnabled(!1)
                })), this.unbinds = [], this.onTranscriptControlVisibilityChange = t => {
                    this._isTranscriptOpen = t.detail.isVisible, this.renderDialog()
                }, this.video.embedElement.addEventListener("transcript-control-visibility-change", this.onTranscriptControlVisibilityChange), this.unbinds.push((() => {
                    this.video.embedElement.removeEventListener("transcript-control-visibility-change", this.onTranscriptControlVisibilityChange)
                })), this.onCaptionsChange = () => {
                    this.renderDialog(), this.renderButton(), this.logSelectionInStats(), this.setCustomizeEmbedOptionsForCurrentLanguage()
                }, this.video.embedElement.addEventListener("captions-change", this.onCaptionsChange), this.unbinds.push((() => {
                    this.video.embedElement.removeEventListener("captions-change", this.onCaptionsChange)
                })), this.video.whenVideoElementInDom().then((t => {
                    this.unbinds.push((0, r.elemBind)(t.textTracks, "change", (() => {
                        (0, p.bo)(this.video) && this.matchMenuToSelectedTextTrack()
                    })))
                }))
            }
            mountButton(t) {
                this.buttonRoot = t, this.renderButton()
            }
            mountDialog(t) {
                this.dialogRoot = t;
                const e = Promise.all([(0, a.$)("assets/external/interFontFace.js"), this.fetchCaptions()]).then((() => {
                    this.renderDialog()
                }));
                return this.loading(new Promise((t => {
                    e.then(t)
                }))), e
            }
            renderButton() {
                this.video._inNativeMode() || this.buttonRoot && (this.updateButtonLabel(), (0, n.render)((0, n.h)(c._, null), this.buttonRoot), this.reactMounts.button = [this.buttonRoot])
            }
            controlDialogOpened() {
                this.updateButtonLabel()
            }
            controlDialogClosed() {
                this._menuKey += 1, this._currentMenuKey = "root", this.renderDialog(), this.updateButtonLabel(), this.setAriaLiveText ? .("")
            }
            updateButtonLabel() {
                this.dialog && (this.dialog.isOpen() ? this.setButtonLabel(this.translate("HIDE_MENU")) : this.setButtonLabel(this.translate("SHOW_MENU")))
            }
            isAtRootLevel() {
                return "root" === this._currentMenuKey
            }
            renderDialog() {
                this.captionsResp && this.dialogRoot && ((0, n.render)((0, n.h)(h.X, { ...this.props,
                    key: this._menuKey,
                    items: this.menuItems(),
                    scale: this.props.scale,
                    isPlaybarEnabled: this.video.isControlEnabled("playbar"),
                    isTranscriptEnabled: this.isTranscriptEnabled(),
                    isTranscriptOpen: this._isTranscriptOpen,
                    setAriaLiveText: this.setAriaLiveText,
                    toggleTranscript: this.toggleTranscript,
                    onCaptionsSettingsUpdated: this.onCaptionSettingsChange,
                    onMenuKeyChange: this.onMenuKeyChange
                }), this.dialogRoot), this.reactMounts.menu = [this.dialogRoot])
            }
            shouldRenderDialog(t) {
                return this.dialog && this.dialog.isOpen() && S.some((e => !(0, f.equalsDeep)(t[e], this.props[e])))
            }
            onControlPropsUpdated(t) {
                this.shouldRenderDialog(t) && this.renderDialog(), t.playerLanguage && this.props.playerLanguage.code !== t.playerLanguage.code && this.updateButtonLabel()
            }
            translate(t) {
                return (0, d.sC)(this.props.playerLanguage.code, `CAPTIONS_${t}`)
            }
            isTranscriptEnabled() {
                return !1 !== this.options.transcript
            }
            tearDownDialogIfClickedRecently() {
                (0, g.C)() && setTimeout((() => {
                    this.dialog.close(), this.buttonRoot.parentElement.focus()
                }), 300)
            }
            clearCaptionsViewerPreferenceLanguage() {
                (0, m.iZ)({
                    bcp47LanguageTag: void 0,
                    iso6392Language: void 0,
                    language: void 0
                })
            }
            menuItems() {
                return [{
                    bcp47LanguageTag: this.props.playerLanguage.code,
                    text: this.translate("OFF"),
                    isSelected: !this.video.captionsEnabled() && !this.video._captionsLanguageCode,
                    onClick: () => {
                        this.isTranscriptEnabled() && this.video.whenControlMounted("transcript").then((t => t.close())), this.turnOff(), this.tearDownDialogIfClickedRecently()
                    }
                }].concat(this.captionsResp.captions.map((t => {
                    const e = !this.captionsResp.captions.some((e => e.native_name !== t.native_name && e.generic_name === t.generic_name));
                    return {
                        bcp47LanguageTag: t.bcp47LanguageTag,
                        text: e ? t.familyNativeName : t.nativeName,
                        isSelected: this.video.captionsLanguage().wistiaLanguageCode === t.language && (this.video.captionsEnabled() || this.video._captionsLanguageCode),
                        onClick: () => {
                            t.language === C ? this.video.captionsEnabled(!1) : (this.video.captionsLanguageCode(t.language), this.video.captionsEnabled(!0)), this.tearDownDialogIfClickedRecently()
                        }
                    }
                })).sort(((t, e) => t.text === this.translate("OFF") ? -1 : e.text === this.translate("OFF") ? 1 : t.text.localeCompare(e.text))))
            }
            getCaptions() {
                return this.captionsResp && this.captionsResp.captions ? this.captionsResp.captions : []
            }
            getPreferredLanguage() {
                const t = (0, p.Tx)(this.video._mediaData, this.getPreferredLanguageOptions());
                return t >= 0 ? this.video._mediaData.availableTranscripts[t] : null
            }
            getPreferredLanguageOptions() {
                return {
                    language: this.video.embedOptions().language,
                    ...this.options
                }
            }
            turnOff() {
                this.video.captionsEnabled(!1)
            }
            findMatchingLanguage(t) {
                const e = [t],
                    i = (0, y.J)(this.captionsResp.captions.map((t => t.language)), e);
                return -1 === i ? null : this.captionsResp.captions[i]
            }
            logSelectionInStats() {
                if (!this.captionsResp) return;
                const t = (0, p.jj)(this.selectedLanguage, this.captionsResp.captions);
                t && "_preview_" !== t.language ? (this._lastStatsData = {
                    caption_key: t.key,
                    language: t.language,
                    time: this.video.time(),
                    enabled: t.language !== C
                }, this.video._tracker.logCaptionSelection(this._lastStatsData)) : this._lastStatsData && (this._lastStatsData.enabled = !1, this._lastStatsData.time = this.video.time(), this.video._tracker.logCaptionSelection(this._lastStatsData))
            }
            fetchCaptions() {
                return this._destroyed ? new Promise((() => {})) : (0, p.gV)(this.video, this.getPreferredLanguageOptions()).then((t => (this.captionsResp = t, t)))
            }
            matchMenuToSelectedTextTrack() {
                if (w.edge && !this.video._inNativeMode()) return;
                if (this._lastMatchedMenuAt && Date.now() - this._lastMatchedMenuAt < 500) return;
                this._lastMatchedMenuAt = Date.now();
                const t = this.video.getMediaElement(),
                    e = this.video.captionsLanguage().wistiaLanguageCode;
                let i = null;
                for (let e = 0; e < t.textTracks.length; e++) {
                    const n = t.textTracks[e];
                    "showing" === n.mode && "captions" === n.kind && (i = n.language)
                }
                null == i ? this.video.captionsEnabled(!1) : e !== i && this.video.captionsLanguage(i)
            }
            setCustomizeEmbedOptionsForCurrentLanguage(t = this.video.captionsLanguage().wistiaLanguageCode) {
                const e = this.video._mediaData.translatedMediaData ? .find((e => e.wistiaLanguageCode === t)) ? .embedOptions;
                this.video.setCustomizeEmbedOptions(e)
            }
        }
        T.handle = "captionsButton", T.type = "control-bar-right", T.sortValue = 50, T.shouldMount = t => {
            const e = t.plugin.captions;
            return null != e && !1 === t.isLiveMedia() && (null != e.captions ? e.captions.length > 0 : (t._mediaData.availableTranscripts ? .length ? ? 0) > 0)
        }, (0, u.X)(T)
    }, (t, e, i) => {
        i.d(e, {
            _: () => o
        });
        var n = i(2),
            s = i(29);
        const o = () => {
            const t = (0, s.I)({
                width: 40,
                height: 34,
                ariaHidden: !0,
                styleOverride: {
                    fill: "none"
                }
            });
            return (0, n.h)("svg", t, (0, n.h)("path", {
                d: "M18.4 18.7C17.9 19.4 17.3 19.9 16.3 19.9C15 19.9 13.9 18.8 13.9 17.1C13.9 15.5 14.9 14.3 16.3 14.3C17.3 14.3 17.9 14.8 18.3 15.5",
                stroke: "currentcolor",
                "stroke-width": "1.8",
                "stroke-linecap": "round"
            }), (0, n.h)("path", {
                d: "M25.8 18.7C25.3 19.4 24.7 19.9 23.7 19.9C22.4 19.9 21.3 18.8 21.3 17.1C21.3 15.5 22.3 14.3 23.7 14.3C24.7 14.3 25.3 14.8 25.7 15.5",
                stroke: "currentcolor",
                "stroke-width": "1.8",
                "stroke-linecap": "round"
            }), (0, n.h)("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M31 21.9811C31 23.5912 29.6 25 28 25H12C10.4 25 9 23.5912 9 21.9811V12.0189C9 10.4088 10.4 9 12 9H28C29.6 9 31 10.4088 31 12.0189V21.9811Z",
                stroke: "currentcolor",
                "stroke-width": "2",
                "stroke-linecap": "round"
            }))
        }
    }, (t, e, i) => {
        i.d(e, {
            X: () => m
        });
        var n = i(2),
            s = i(14),
            o = i(160),
            r = i(171),
            a = i(174),
            l = i(167),
            c = i(169),
            h = i(187),
            u = i(188),
            d = i(168),
            p = i(163);
        const g = ({
                isTranscriptEnabled: t,
                isTranscriptOpen: e,
                isPlaybarEnabled: i,
                items: g,
                controlBarBorderRadius: m,
                scale: f,
                playerLanguage: v,
                toggleTranscript: y,
                onCaptionsSettingsUpdated: b,
                videoWidth: w,
                setAriaLiveText: C,
                onMenuKeyChange: S
            }) => {
                const T = (0, l.Y)(),
                    _ = w < p.sO;
                return (0, s.useEffect)((() => {
                    S(T.currentMenuKey)
                }), [T.currentMenuKey, S]), (0, n.h)("div", {
                    class: "w-captions-menu w-css-reset w-css-reset-tree",
                    "data-testid": "captions-menu",
                    onKeyDown: t => {
                        "Escape" === t.key && "root" !== T.currentMenuKey && (t.preventDefault(), t.stopPropagation(), T.goBack())
                    }
                }, (0, n.h)(a.W1, null, t && i && (0, n.h)(h.O, {
                    isTranscriptOpen: e,
                    playerLanguage: v,
                    toggleTranscript: y,
                    controlBarBorderRadius: m,
                    scale: f
                }), (0, n.h)("fieldset", {
                    style: {
                        border: 0,
                        padding: 0,
                        margin: 0
                    }
                }, (0, n.h)(c.A, {
                    tagName: "legend"
                }, "Captions Menu"), g.map(((t, e) => (0, n.h)(u.h, {
                    controlBarBorderRadius: m,
                    scale: f,
                    item: t,
                    index: e
                })))), (0, n.h)(a.cQ, {
                    menuKey: "captionsSettings",
                    shouldHaveRoundedBottomCorners: !0
                }, (0, n.h)("div", {
                    style: {
                        height: d.zL * f + "px",
                        display: "flex",
                        alignItems: "center",
                        lineHeight: d.a8 * f + "px"
                    }
                }, (0, n.h)(r.g, {
                    scale: f
                }), "Captions settings"))), (0, n.h)(o.o, {
                    onCaptionsSettingsUpdated: b,
                    isNarrow: _,
                    setAriaLiveText: C
                }))
            },
            m = t => (0, n.h)(a.il, {
                scale: t.scale,
                controlBarBorderRadius: t.controlBarBorderRadius,
                playerLanguage: t.playerLanguage
            }, (0, n.h)(g, t))
    }, (t, e, i) => {
        i.d(e, {
            o: () => x
        });
        var n = i(2),
            s = i(14),
            o = i(33),
            r = i(161),
            a = i(165),
            l = i(170),
            c = i(171),
            h = i(172),
            u = i(173),
            d = i(174),
            p = i(167),
            g = i(179),
            m = i(183),
            f = i(164),
            v = i(184),
            y = i(163),
            b = i(44);
        (0, b.Oj)("en-US", {
            CAPTIONS_BACK_TO_CAPTIONS_MENU: "Back to captions menu",
            CAPTIONS_CAPTIONS_SETTINGS_RESET_DEFAULTS: "Captions settings reset to defaults",
            CAPTIONS_CHARACTER_EDGE_STYLE: "Character edge style",
            CAPTIONS_CHARACTER_EDGE_STYLE_CLOSE: "Close character edge style menu",
            CAPTIONS_CHARACTER_EDGE_STYLE_OPEN: "Open character edge style menu",
            CAPTIONS_FONT_FAMILY: "Font family",
            CAPTIONS_FONT_FAMILY_CLOSE: "Close font family menu",
            CAPTIONS_FONT_FAMILY_OPEN: "Open font family menu"
        });
        const w = "font-family",
            C = "character-edge-styles",
            S = ({
                menuKey: t,
                scale: e,
                children: i,
                ariaLabel: s
            }) => (0, n.h)(d.cQ, {
                menuKey: t,
                ...(0, o.n9)(s) ? {
                    ariaLabel: s
                } : {}
            }, (0, n.h)("div", {
                style: {
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    fontSize: 12 * e + "px",
                    position: "relative",
                    paddingLeft: y.wf * e + "px"
                }
            }, i, (0, n.h)("div", {
                style: {
                    position: "absolute",
                    right: 0,
                    top: "50%",
                    transform: "translateY(-50%)"
                }
            }, (0, n.h)(l.e, {
                scale: e
            })))),
            T = ({
                children: t
            }) => {
                const {
                    uiContext: {
                        scale: e
                    }
                } = (0, p.Y)();
                return (0, n.h)("div", {
                    style: {
                        padding: `0 ${y.wf*e}px`
                    }
                }, t)
            },
            _ = ({
                isNarrow: t,
                onChangeHex: e,
                scale: i,
                selectedHex: o,
                title: r
            }) => {
                const [a, l] = (0, s.useState)(null), [c, u] = (0, s.useState)(null), d = y.L1.find((t => t.hex === o)) ? .ariaLabel ? ? null;
                return (0, n.h)(h.Z, {
                    title: r,
                    value: a ? ? c ? ? d
                }, (0, n.h)(T, null, (0, n.h)(g.z6, {
                    direction: "horizontal",
                    shouldWrap: t,
                    ariaLabel: r,
                    scale: i
                }, y.L1.map((t => (0, n.h)(g.fM, {
                    key: t.hex,
                    scale: i,
                    name: r,
                    ariaLabel: t.ariaLabel,
                    value: t.hex,
                    checked: o === t.hex,
                    onChange: t => {
                        if (!(t.target instanceof HTMLInputElement)) return;
                        const i = t.target.value;
                        (0, f.jz)(i) && e(i)
                    },
                    onPreview: e => {
                        "hover" !== e ? (u(t.ariaLabel), l((e => e === t.ariaLabel ? e : null))) : l(t.ariaLabel)
                    },
                    onPreviewEnd: e => {
                        ("hover" === e ? l : u)((e => e === t.ariaLabel ? null : e))
                    }
                }))))))
            },
            x = ({
                onCaptionsSettingsUpdated: t,
                isNarrow: e,
                setAriaLiveText: i
            }) => {
                const {
                    uiContext: {
                        scale: o,
                        playerLanguage: l
                    },
                    currentMenuKey: x
                } = (0, p.Y)(), E = (0, s.useRef)(null), L = (0, s.useRef)(null), {
                    captionsSettings: M,
                    setCaptionsSettings: A
                } = (0, r.a)({
                    onCaptionsSettingsUpdated: t
                });
                (0, s.useEffect)((() => {
                    x !== w && x !== C || setTimeout((() => {
                        (t => {
                            if (t) {
                                const e = t.querySelector('input[type="radio"]:checked');
                                e && e.focus()
                            }
                        })(x === w ? E.current : L.current)
                    }), 0)
                }), [x]);
                const {
                    CAPTIONS_BACK_TO_CAPTIONS_MENU: k,
                    CAPTIONS_CAPTIONS_SETTINGS_RESET_DEFAULTS: O,
                    CAPTIONS_CHARACTER_EDGE_STYLE: P,
                    CAPTIONS_CHARACTER_EDGE_STYLE_CLOSE: I,
                    CAPTIONS_CHARACTER_EDGE_STYLE_OPEN: F,
                    CAPTIONS_FONT_FAMILY: R,
                    CAPTIONS_FONT_FAMILY_CLOSE: D,
                    CAPTIONS_FONT_FAMILY_OPEN: H
                } = (0, b.$)("string" == typeof l ? l : l.code, ["CAPTIONS_BACK_TO_CAPTIONS_MENU", "CAPTIONS_CAPTIONS_SETTINGS_RESET_DEFAULTS", "CAPTIONS_CHARACTER_EDGE_STYLE", "CAPTIONS_CHARACTER_EDGE_STYLE_CLOSE", "CAPTIONS_CHARACTER_EDGE_STYLE_OPEN", "CAPTIONS_FONT_FAMILY", "CAPTIONS_FONT_FAMILY_CLOSE", "CAPTIONS_FONT_FAMILY_OPEN"]), N = Object.keys(y.f5).some((t => y.f5[t] !== M[t]));
                return N && i(""), (0, n.h)(n.Fragment, null, (0, n.h)(d.W1, {
                    menuKey: "captionsSettings",
                    label: "Captions settings",
                    ariaLabel: k
                }, (0, n.h)(h.Z, {
                    title: "Font size"
                }, (0, n.h)(T, null, (0, n.h)(g.z6, {
                    direction: "horizontal",
                    shouldWrap: e,
                    ariaLabel: "Font size",
                    scale: o
                }, y.$N.map((t => (0, n.h)(g.HQ, {
                    key: t,
                    name: "font-size",
                    label: `${t}%`,
                    value: t.toString(),
                    scale: o,
                    checked: M.fontSize === t,
                    onChange: t => {
                        if (!(t.target instanceof HTMLInputElement)) return;
                        const e = Number(t.target.value);
                        (0, f.ZW)(e) && A({
                            fontSize: e
                        })
                    }
                })))))), (0, n.h)(h.Z, {
                    title: R,
                    style: {
                        gap: "4px"
                    }
                }, (0, n.h)(S, {
                    ariaLabel: H,
                    menuKey: w,
                    scale: o
                }, (0, n.h)("span", {
                    style: (0, v.R)(M.fontFamily)
                }, M.fontFamily))), (0, n.h)(_, {
                    title: "Font color",
                    isNarrow: e,
                    scale: o,
                    selectedHex: M.fontColor,
                    onChangeHex: t => {
                        A({
                            fontColor: t
                        })
                    }
                }), (0, n.h)(h.Z, {
                    title: "Font opacity"
                }, (0, n.h)(T, null, (0, n.h)(g.z6, {
                    direction: "horizontal",
                    shouldWrap: e,
                    ariaLabel: "Font opacity",
                    scale: o
                }, y.rA.map((t => (0, n.h)(g.HQ, {
                    key: t,
                    name: "font-opacity",
                    label: `${t}%`,
                    value: t.toString(),
                    checked: M.fontOpacityPercentage === t,
                    scale: o,
                    onChange: t => {
                        if (!(t.target instanceof HTMLInputElement)) return;
                        const e = Number(t.target.value);
                        (0, f.iV)(e) && A({
                            fontOpacityPercentage: e
                        })
                    }
                })))))), (0, n.h)(h.Z, {
                    title: P,
                    style: {
                        gap: "4px"
                    }
                }, (0, n.h)(S, {
                    ariaLabel: F,
                    menuKey: C,
                    scale: o
                }, M.characterEdgeStyle)), (0, n.h)(_, {
                    title: "Background color",
                    isNarrow: e,
                    scale: o,
                    selectedHex: M.backgroundColor,
                    onChangeHex: t => {
                        A({
                            backgroundColor: t
                        })
                    }
                }), (0, n.h)(h.Z, {
                    title: "Background opacity"
                }, (0, n.h)(T, null, (0, n.h)(g.z6, {
                    direction: "horizontal",
                    shouldWrap: e,
                    ariaLabel: "Background opacity",
                    scale: o
                }, y.UJ.map((t => (0, n.h)(g.HQ, {
                    key: t,
                    name: "background-opacity",
                    label: `${t}%`,
                    value: t.toString(),
                    scale: o,
                    checked: M.backgroundOpacityPercentage === t,
                    onChange: t => {
                        if (!(t.target instanceof HTMLInputElement)) return;
                        const e = Number(t.target.value);
                        (0, f.iV)(e) && A({
                            backgroundOpacityPercentage: e
                        })
                    }
                })))))), (0, n.h)(_, {
                    title: "Window color",
                    isNarrow: e,
                    scale: o,
                    selectedHex: M.windowColor,
                    onChangeHex: t => {
                        A({
                            windowColor: t
                        })
                    }
                }), (0, n.h)(h.Z, {
                    title: "Window opacity"
                }, (0, n.h)(T, null, (0, n.h)(g.z6, {
                    direction: "horizontal",
                    shouldWrap: e,
                    ariaLabel: "Window opacity",
                    scale: o
                }, y.UJ.map((t => (0, n.h)(g.HQ, {
                    key: t,
                    name: "window-opacity",
                    label: `${t}%`,
                    value: t.toString(),
                    scale: o,
                    checked: M.windowOpacityPercentage === t,
                    onChange: t => {
                        if (!(t.target instanceof HTMLInputElement)) return;
                        const e = Number(t.target.value);
                        (0, f.iV)(e) && A({
                            windowOpacityPercentage: e
                        })
                    }
                })))))), (0, n.h)(u.T, {
                    ariaDisabled: !N,
                    onClick: () => {
                        N && (i(O), A(y.f5))
                    },
                    shouldHaveRoundedBottomCorners: !0
                }, (0, n.h)(c.g, {
                    scale: o
                }), "Reset to defaults")), (0, n.h)(d.W1, {
                    menuKey: w,
                    label: R,
                    ariaLabel: D,
                    shouldNameGroup: !1
                }, (0, n.h)(m.C, {
                    legendText: R,
                    selectedFontOptionLabel: M.fontFamily,
                    setSelectedFontOptionLabel: t => {
                        A({
                            fontFamily: t
                        })
                    },
                    fieldsetRef: t => {
                        E.current = t
                    }
                })), (0, n.h)(d.W1, {
                    menuKey: C,
                    label: "Character edge style",
                    ariaLabel: I,
                    shouldNameGroup: !1
                }, (0, n.h)(a.G, {
                    legendText: P,
                    selectedEdgeStyleOption: M.characterEdgeStyle,
                    setSelectedEdgeStyleOption: t => {
                        A({
                            characterEdgeStyle: t
                        })
                    },
                    fieldsetRef: t => {
                        L.current = t
                    }
                })))
            }
    }, (t, e, i) => {
        i.d(e, {
            a: () => o
        });
        var n = i(14),
            s = i(162);
        const o = ({
            onCaptionsSettingsUpdated: t
        }) => {
            const [e, i] = (0, n.useState)((0, s.S7)());
            return {
                captionsSettings: e,
                setCaptionsSettings: n => {
                    const o = { ...e,
                        ...n
                    };
                    i(o), (0, s.iZ)(o), t ? .(o, n)
                }
            }
        }
    }, (t, e, i) => {
        i.d(e, {
            JM: () => a,
            S7: () => l,
            iZ: () => c
        });
        var n = i(163),
            s = i(164),
            o = i(94);
        const r = "captionsViewerPreferences",
            a = () => {
                const t = (0, o.kx)(r);
                return "object" != typeof(e = t) || null == e ? {} : t;
                var e
            },
            l = () => {
                const t = a();
                return (0, s.lN)(t) ? t : { ...n.f5
                }
            },
            c = t => {
                (0, o.QL)(r, { ...a(),
                    ...t
                })
            }
    }, (t, e, i) => {
        i.d(e, {
            $N: () => o,
            L1: () => l,
            UJ: () => r,
            Yc: () => s,
            f5: () => c,
            rA: () => a,
            sO: () => u,
            wf: () => h
        });
        var n = i(27);
        const s = new Map([
                ["Monospace serif", '"Courier New", Courier, "Nimbus Mono L", "Cutive Mono", monospace'],
                ["Monospace sans-serif", '"Deja Vu Sans Mono", "Lucida Console", Monaco, Consolas, "PT Mono", monospace'],
                ["Proportional serif", '"Times New Roman", Times, Georgia, Cambria, "PT Serif Caption", serif'],
                ["Proportional sans-serif", n.yY],
                ["Casual", '"Comic Sans MS", Impact, Handlee, fantasy'],
                ["Cursive", '"Monotype Corsiva", "URW Chancery L", "Apple Chancery", "Dancing Script", cursive'],
                ["Small caps", n.yY]
            ]),
            o = [100, 120, 140, 160],
            r = [100, 75, 50, 25, 0],
            a = r.filter((t => 0 !== t)),
            l = [{
                ariaLabel: "Black",
                hex: "#000000"
            }, {
                ariaLabel: "Yellow",
                hex: "#FFF200"
            }, {
                ariaLabel: "Green",
                hex: "#00F024"
            }, {
                ariaLabel: "Cyan",
                hex: "#00EAFF"
            }, {
                ariaLabel: "Blue",
                hex: "#001AFF"
            }, {
                ariaLabel: "Magenta",
                hex: "#FF00AA"
            }, {
                ariaLabel: "Red",
                hex: "#FF0000"
            }, {
                ariaLabel: "White",
                hex: "#FFFFFF"
            }],
            c = {
                fontSize: o[0],
                fontOpacityPercentage: r[0],
                backgroundOpacityPercentage: r[1],
                windowOpacityPercentage: r[r.length - 1],
                fontColor: l[l.length - 1].hex,
                backgroundColor: l[0].hex,
                windowColor: l[0].hex,
                fontFamily: "Proportional sans-serif",
                characterEdgeStyle: "None"
            },
            h = 16,
            u = 340
    }, (t, e, i) => {
        i.d(e, {
            ZW: () => s,
            iV: () => o,
            jz: () => r,
            lN: () => a
        });
        var n = i(163);
        const s = t => n.$N.some((e => e === t)),
            o = t => n.UJ.some((e => e === t)),
            r = t => n.L1.some((e => e.hex === t)),
            a = t => {
                if ("object" != typeof t || null === t) return !1;
                const e = t;
                return r(e.backgroundColor) && o(e.backgroundOpacityPercentage) && r(e.fontColor) && s(e.fontSize) && o(e.fontOpacityPercentage) && r(e.windowColor) && o(e.windowOpacityPercentage)
            }
    }, (t, e, i) => {
        i.d(e, {
            G: () => l
        });
        var n = i(2),
            s = i(166),
            o = i(169),
            r = i(27);
        const a = ["None", "Depressed", "Drop shadow", "Outline", "Raised"],
            l = ({
                legendText: t,
                selectedEdgeStyleOption: e,
                setSelectedEdgeStyleOption: i,
                fieldsetRef: l
            }) => (0, n.h)(n.Fragment, null, (0, n.h)("fieldset", {
                style: {
                    border: 0,
                    padding: 0
                },
                ref: l
            }, (0, n.h)(o.A, {
                tagName: "legend"
            }, t), a.map(((t, o) => (0, n.h)(s.h, {
                key: t,
                name: "fontFamily",
                value: t,
                checked: t === e,
                onChange: () => i(t),
                shouldHaveRoundedBottomCorners: o === a.length - 1
            }, (0, n.h)("span", {
                style: {
                    fontFamily: r.yY
                }
            }, t))))))
    }, (t, e, i) => {
        i.d(e, {
            h: () => u
        });
        var n = i(2),
            s = i(14),
            o = i(146),
            r = i(43),
            a = i(29),
            l = i(167),
            c = i(168);
        const h = ({
                visible: t
            }) => {
                const {
                    uiContext: {
                        scale: e
                    }
                } = (0, l.Y)(), i = {
                    height: c.a8 * e + "px",
                    verticalAlign: "middle",
                    width: c.fN * e + "px",
                    visibility: t ? "visible" : "hidden"
                };
                return (0, n.h)("svg", { ...(0, a.I)({
                        width: 40,
                        height: 34,
                        styleOverride: i,
                        ariaHidden: !0
                    }),
                    class: "w-checkmark"
                }, (0, n.h)("polyline", {
                    fill: "none",
                    stroke: "#ffffff",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-miterlimit": "10",
                    points: "17,17 20,20 25,14 "
                }))
            },
            u = ({
                value: t,
                onChange: e,
                name: i,
                checked: a,
                children: u,
                shouldHaveRoundedBottomCorners: d = !1
            }) => {
                const {
                    uiContext: {
                        scale: p,
                        controlBarBorderRadius: g
                    }
                } = (0, l.Y)(), [m, f] = (0, s.useState)(!1), [v, y] = (0, s.useState)(!1);
                return (0, n.h)("div", {
                    onMouseEnter: () => y(!0),
                    onMouseLeave: () => y(!1),
                    onFocus: () => {
                        (0, r.C)() || f(!0)
                    },
                    onBlur: () => f(!1),
                    style: {
                        cursor: "pointer",
                        outline: "none",
                        backgroundColor: v ? "rgba(0,0,0,.3)" : "",
                        boxShadow: m ? "inset 0 0 0 2px #fff" : "",
                        fontSize: c.Uh * p,
                        borderBottomLeftRadius: d ? `${g}px` : "0",
                        borderBottomRightRadius: d ? `${g}px` : "0"
                    }
                }, (0, n.h)("input", {
                    type: "radio",
                    name: i,
                    onChange: e,
                    id: t,
                    style: o._,
                    value: t,
                    checked: a
                }), (0, n.h)("label", {
                    htmlFor: t
                }, (0, n.h)(h, {
                    visible: a
                }), u))
            }
    }, (t, e, i) => {
        i.d(e, {
            Y: () => l,
            i: () => a
        });
        var n = i(2),
            s = i(14);
        const o = (0, n.createContext)(null),
            r = (t, e) => {
                const i = t.menuStack[t.menuStack.length - 1];
                switch (e.type) {
                    case "OPEN_SUBMENU":
                        return {
                            menuStack: [...t.menuStack, e.menuKey],
                            prevMenuKey: i,
                            navigationDirection: "away-from-root"
                        };
                    case "GO_BACK":
                        return {
                            menuStack: t.menuStack.slice(0, -1),
                            prevMenuKey: i,
                            navigationDirection: "towards-root"
                        };
                    case "GO_TO_ROOT":
                        return {
                            menuStack: ["root"],
                            prevMenuKey: i,
                            navigationDirection: "towards-root"
                        };
                    case "NAVIGATION_END":
                        return { ...t,
                            navigationDirection: "none"
                        };
                    default:
                        return t
                }
            },
            a = ({
                children: t,
                controlBarBorderRadius: e,
                scale: i,
                playerLanguage: a
            }) => {
                const [l, c] = (0, s.useReducer)(r, {
                    menuStack: ["root"],
                    prevMenuKey: null,
                    navigationDirection: "none"
                }), {
                    navigationDirection: h,
                    prevMenuKey: u,
                    menuStack: d
                } = l, p = (0, s.useMemo)((() => d[d.length - 1] ? ? "root"), [d]), g = (0, s.useMemo)((() => ({
                    goBack: () => c({
                        type: "GO_BACK"
                    }),
                    goToRoot: () => c({
                        type: "GO_TO_ROOT"
                    }),
                    openMenu: t => c({
                        menuKey: t,
                        type: "OPEN_SUBMENU"
                    }),
                    currentMenuKey: p,
                    uiContext: {
                        scale: i,
                        controlBarBorderRadius: e,
                        playerLanguage: a
                    },
                    navigationDirection: h,
                    prevMenuKey: u
                })), [p, i, e, h, u]);
                return (0, n.h)(o.Provider, {
                    value: g
                }, t)
            },
            l = () => {
                const t = (0, s.useContext)(o);
                if (null === t) throw new Error("useMenuRootContext must be used within a MenuRoot");
                return t
            }
    }, (t, e, i) => {
        i.d(e, {
            F$: () => n,
            Uh: () => r,
            a8: () => s,
            aE: () => a,
            fN: () => o,
            zL: () => l
        });
        const n = 34,
            s = n,
            o = 40,
            r = 14,
            a = 10,
            l = 40
    }, (t, e, i) => {
        i.d(e, {
            A: () => r
        });
        var n = i(2),
            s = i(146);
        class o extends n.Component {
            render() {
                const t = this.props.tagName || "div";
                return (0, n.h)(t, { ...this.props,
                    ref: this.props.elemRef,
                    style: s._
                }, this.props.children)
            }
        }
        const r = o
    }, (t, e, i) => {
        i.d(e, {
            e: () => r
        });
        var n = i(2),
            s = i(29),
            o = i(168);
        const r = ({
            scale: t
        }) => {
            const e = (0, s.I)({
                width: 40,
                height: 34,
                styleOverride: {
                    height: o.F$ * t + "px",
                    verticalAlign: "middle",
                    visibility: "visible",
                    width: o.fN * t + "px",
                    transform: "rotate(180deg)"
                },
                ariaHidden: !0
            });
            return (0, n.h)("svg", e, (0, n.h)("path", {
                d: "M21.6889 22.0889C21.5438 22.0889 21.3988 22.0337 21.2884 21.9227L16.5662 17.2004C16.3448 16.9791 16.3448 16.6202 16.5662 16.3988L21.2884 11.6773C21.5098 11.456 21.8687 11.456 22.0901 11.6773C22.3115 11.8987 22.3115 12.2576 22.0901 12.479L17.7683 16.8008L22.0901 21.1225C22.3115 21.3439 22.3115 21.7028 22.0901 21.9242C21.9798 22.0345 21.8347 22.0904 21.6896 22.0904L21.6889 22.0889Z",
                fill: "white"
            }))
        }
    }, (t, e, i) => {
        i.d(e, {
            g: () => r
        });
        var n = i(2),
            s = i(29),
            o = i(168);
        const r = ({
            scale: t
        }) => {
            const e = (0, s.I)({
                width: 40,
                height: 34,
                styleOverride: {
                    height: o.F$ * t + "px",
                    verticalAlign: "middle",
                    visibility: "visible",
                    width: o.fN * t + "px"
                },
                ariaHidden: !0
            });
            return (0, n.h)("svg", e, (0, n.h)("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M26.4 15.4H28.3C28.7 15.4 29 15.7 29 16.1V16.7C29 17.1 28.7 17.4 28.3 17.4H26.4C26 17.4 25.6 17.7 25.5 18.1L25.1 19.2C25 19.5 25 20 25.3 20.3L26.6 21.6C26.9 21.9 26.9 22.3 26.6 22.6L26.2 23C25.9 23.3 25.5 23.3 25.2 23L23.9 21.7C23.6 21.5 23.1 21.4 22.8 21.6L21.7 22.1C21.3 22.2 21 22.6 21 23V24.7C21 25.1 20.7 25.4 20.3 25.4H19.7C19.3 25.4 19 25.1 19 24.7V23C19 22.6 18.7 22.2 18.3 22.1L17.1 21.6C16.8 21.5 16.3 21.5 16 21.8L14.8 23C14.5 23.3 14.1 23.3 13.8 23L13.4 22.6C13.1 22.3 13.1 21.9 13.4 21.6L14.6 20.4C14.8 20.1 14.9 19.6 14.7 19.3L14.2 18.1C14.1 17.7 13.7 17.4 13.3 17.4H11.7C11.3 17.4 11 17.1 11 16.7V16.1C11 15.7 11.3 15.4 11.7 15.4H13.3C13.7 15.4 14.1 15.1 14.2 14.7L14.7 13.5C14.9 13.2 14.9 12.7 14.6 12.4L13.4 11.2C13.1 10.9 13.1 10.5 13.4 10.2L13.8 9.8C14.1 9.5 14.5 9.5 14.8 9.8L16 11C16.3 11.3 16.8 11.4 17.1 11.2L18.3 10.7C18.7 10.6 19 10.2 19 9.8V8.1C19 7.7 19.3 7.4 19.7 7.4H20.3C20.7 7.4 21 7.7 21 8.1V9.8C21 10.2 21.3 10.6 21.7 10.7L22.8 11.2C23.1 11.4 23.6 11.4 23.9 11.1L25.2 9.8C25.5 9.5 25.9 9.5 26.2 9.8L26.6 10.2C26.9 10.5 26.9 10.9 26.6 11.2L25.3 12.5C25 12.8 24.9 13.3 25.1 13.6L25.5 14.7C25.6 15.1 26 15.4 26.4 15.4ZM19.9 20.4C22 20.4 23.8 18.7 23.8 16.5C23.8 14.3 22.1 12.6 19.9 12.6C17.7 12.6 16 14.4 16 16.5C16 18.6 17.7 20.4 19.9 20.4Z",
                fill: "white"
            }))
        }
    }, (t, e, i) => {
        i.d(e, {
            Z: () => h
        });
        var n = i(2),
            s = i(33),
            o = i(168),
            r = i(167),
            a = i(163),
            l = i(27);
        const c = ({
                title: t,
                value: e
            }) => {
                const {
                    uiContext: {
                        scale: i
                    }
                } = (0, r.Y)(), c = {
                    display: "flex",
                    justifyContent: "space-between",
                    padding: `0 ${a.wf*i}px`
                }, h = {
                    fontFamily: l.yY,
                    fontSize: o.Uh * i,
                    lineHeight: 18 * i + "px"
                }, u = { ...h,
                    opacity: .8
                };
                return (0, n.h)("div", {
                    style: c
                }, (0, n.h)("label", {
                    style: h
                }, t), (0, s.uI)(e) ? (0, n.h)("span", {
                    style: u,
                    "aria-hidden": "true"
                }, e) : null)
            },
            h = ({
                children: t,
                title: e,
                value: i,
                style: s = {}
            }) => {
                const {
                    uiContext: {
                        scale: o
                    }
                } = (0, r.Y)(), a = {
                    display: "flex",
                    flexDirection: "column",
                    gap: 8 * o + "px",
                    padding: 8 * o + "px 0",
                    ...s
                };
                return (0, n.h)("div", {
                    style: a
                }, (0, n.h)(c, {
                    title: e,
                    value: i
                }), t)
            }
    }, (t, e, i) => {
        i.d(e, {
            T: () => d
        });
        var n = i(2),
            s = i(14),
            o = i(15),
            r = i(33),
            a = i(167),
            l = i(168),
            c = i(67),
            h = i(43),
            u = i(27);
        const d = (0, o.forwardRef)((({
            children: t,
            onClick: e,
            shouldHaveRoundedBottomCorners: i = !1,
            shouldHaveRoundedTopCorners: o = !1,
            ariaLabel: d,
            ariaDisabled: p,
            tabIndex: g
        }, m) => {
            const {
                uiContext: {
                    scale: f,
                    controlBarBorderRadius: v
                }
            } = (0, a.Y)(), [y, b] = (0, s.useState)(!1), [w, C] = (0, s.useState)(!1), S = {
                alignItems: "center",
                background: y ? "rgba(0,0,0,.3)" : "",
                borderBottomLeftRadius: i ? `${v}px` : "0",
                borderBottomRightRadius: i ? `${v}px` : "0",
                borderTopLeftRadius: o ? `${v}px` : "0",
                borderTopRightRadius: o ? `${v}px` : "0",
                boxShadow: w ? "0 0 0 2px #fff inset" : "none",
                cursor: "pointer",
                display: "flex",
                fontFamily: u.yY,
                fontSize: l.Uh * f,
                marginRight: l.aE * f + "px",
                textAlign: "left",
                width: "100%"
            };
            return (0, n.h)(c.u, {
                elemRef: m,
                class: "w-css-reset-dialog-button-important w-vulcan-v2-button",
                tagName: "button",
                onClick: e,
                onFocusIn: () => {
                    (0, h.C)() || C(!0)
                },
                onFocusOut: () => {
                    C(!1)
                },
                onMouseEnter: () => b(!0),
                onMouseLeave: () => b(!1),
                style: S,
                tabIndex: -1 === g ? -1 : g ? ? 0,
                ...(0, r.n9)(d) ? {
                    ariaLabel: d
                } : {},
                ...(0, r.n9)(p) ? {
                    "aria-disabled": p
                } : {}
            }, t)
        }))
    }, (t, e, i) => {
        i.d(e, {
            W1: () => n.W,
            cQ: () => s.c,
            il: () => o.i
        });
        var n = i(175),
            s = i(178),
            o = i(167)
    }, (t, e, i) => {
        i.d(e, {
            W: () => u
        });
        var n = i(2),
            s = i(14),
            o = i(33),
            r = i(167),
            a = i(173),
            l = i(176),
            c = i(177);
        const h = {
                font: "inherit",
                margin: 0
            },
            u = ({
                ariaLabel: t,
                children: e,
                label: i,
                menuKey: u = "root",
                shouldNameGroup: d = !0
            }) => {
                const p = (0, s.useRef)(null),
                    g = (0, s.useId)(),
                    {
                        currentMenuKey: m,
                        goBack: f,
                        uiContext: {
                            scale: v
                        },
                        navigationDirection: y
                    } = (0, r.Y)(),
                    b = (0, s.useMemo)((() => u === m), [m, u]),
                    w = (0, s.useMemo)((() => "root" !== u), [u]);
                if ((0, s.useEffect)((() => {
                        const t = p.current;
                        t && "away-from-root" === y && (0, c.FR)(t)
                    }), [b, y]), !b) return null;
                const C = i ? ? "Go back",
                    S = (0, o.n9)(t) ? `${C}, ${t}` : void 0,
                    T = w && (0, o.n9)(i),
                    _ = T && d,
                    x = w && (0, n.h)(a.T, {
                        onClick: f,
                        shouldHaveRoundedTopCorners: !0,
                        ...(0, o.n9)(S) ? {
                            ariaLabel: S
                        } : {}
                    }, (0, n.h)(l.s, {
                        scale: v
                    }), (0, n.h)("span", {
                        id: g
                    }, C));
                return (0, n.h)("div", {
                    class: "w-css-reset w-css-reset-tree",
                    ref: p,
                    ..._ ? {
                        "aria-labelledby": g,
                        role: "group"
                    } : {}
                }, T ? (0, n.h)("h2", {
                    "aria-labelledby": g,
                    style: h
                }, x) : x, e)
            }
    }, (t, e, i) => {
        i.d(e, {
            s: () => r
        });
        var n = i(2),
            s = i(29),
            o = i(168);
        const r = ({
            scale: t
        }) => {
            const e = (0, s.I)({
                width: 40,
                height: 34,
                styleOverride: {
                    height: o.F$ * t + "px",
                    verticalAlign: "middle",
                    visibility: "visible",
                    width: o.fN * t + "px"
                },
                ariaHidden: !0
            });
            return (0, n.h)("svg", e, (0, n.h)("path", {
                d: "M21.6889 22.0889C21.5438 22.0889 21.3988 22.0337 21.2884 21.9227L16.5662 17.2004C16.3448 16.9791 16.3448 16.6202 16.5662 16.3988L21.2884 11.6773C21.5098 11.456 21.8687 11.456 22.0901 11.6773C22.3115 11.8987 22.3115 12.2576 22.0901 12.479L17.7683 16.8008L22.0901 21.1225C22.3115 21.3439 22.3115 21.7028 22.0901 21.9242C21.9798 22.0345 21.8347 22.0904 21.6896 22.0904L21.6889 22.0889Z",
                fill: "white"
            }))
        }
    }, (t, e, i) => {
        i.d(e, {
            FR: () => s
        });
        const n = t => "INPUT" === t.tagName,
            s = t => {
                const e = (t => {
                    const e = [],
                        i = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
                            acceptNode: t => t instanceof HTMLElement && (t => {
                                const e = n(t) && "hidden" === t.type;
                                return !((t => n(t) || "BUTTON" === t.tagName)(t) && t.disabled || t.hidden || e) && t.tabIndex >= 0
                            })(t) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                        });
                    for (; i.nextNode();) e.push(i.currentNode);
                    return e
                })(t);
                e[0] ? .focus({
                    preventScroll: !0
                })
            }
    }, (t, e, i) => {
        i.d(e, {
            c: () => c
        });
        var n = i(2),
            s = i(14),
            o = i(173),
            r = i(167),
            a = i(41),
            l = i(6);
        const c = t => {
            const {
                openMenu: e,
                navigationDirection: i,
                prevMenuKey: c
            } = (0, r.Y)(), h = (0, s.useRef)(null);
            return (0, s.useEffect)((() => {
                const e = h.current;
                e && "towards-root" === i && c === t.menuKey && e.focus({
                    preventScroll: !0
                })
            }), [i, c, t.menuKey]), (0, n.h)(o.T, {
                ref: h,
                ...t,
                onClick: () => {
                    const i = Boolean((0, l.GS)());
                    (0, a.WO)("player/control-button-click", 1, {
                        control: t.menuKey,
                        desktop: !i,
                        mobile: i
                    }), e(t.menuKey)
                }
            })
        }
    }, (t, e, i) => {
        i.d(e, {
            HQ: () => s.H,
            fM: () => o.f,
            z6: () => n.z
        });
        var n = i(180),
            s = i(181),
            o = i(182)
    }, (t, e, i) => {
        i.d(e, {
            z: () => r
        });
        var n = i(2),
            s = i(15),
            o = i(14);
        const r = (0, s.forwardRef)((({
            children: t,
            ariaLabel: e,
            onChange: i,
            shouldWrap: s,
            scale: r,
            direction: a
        }, l) => {
            const c = (0, o.useRef)(null),
                h = {
                    display: "horizontal" === a ? "flex" : "block",
                    gap: 8 * r + "px",
                    alignItems: "center",
                    flexWrap: s ? "wrap" : "nowrap",
                    justifyContent: "start"
                },
                u = (0, o.useCallback)((t => {
                    const e = t.target;
                    if ("INPUT" !== e.tagName || "radio" !== e.type) return;
                    const n = e;
                    if (!["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"].includes(t.key)) return;
                    if (t.preventDefault(), t.stopPropagation(), !c.current) return;
                    const s = Array.from(c.current.querySelectorAll(`input[type="radio"][name="${n.name}"]`));
                    if (s.length <= 1) return;
                    const o = s.indexOf(n);
                    let r = 0;
                    r = "ArrowDown" === t.key || "ArrowRight" === t.key ? (o + 1) % s.length : 0 === o ? s.length - 1 : o - 1;
                    const a = s[r];
                    a.focus(), a.checked = !0, a.dispatchEvent(new Event("change", {
                        bubbles: !0
                    })), i && i(a.value)
                }), [i]),
                d = (0, o.useCallback)((t => {
                    const e = t.target;
                    "radio" === e.type && i && i(e.value)
                }), [i]),
                p = (0, o.useCallback)((t => {
                    c.current = t, l && ("function" == typeof l ? l(t) : "object" == typeof l && "current" in l && (l.current = t))
                }), [l]);
            return (0, n.h)("div", {
                ref: p,
                role: "radiogroup",
                "aria-label": e,
                style: h,
                onKeyDown: u,
                onChange: d
            }, t)
        }))
    }, (t, e, i) => {
        i.d(e, {
            H: () => l
        });
        var n = i(2),
            s = i(14),
            o = i(146),
            r = i(25),
            a = i(43);
        const l = ({
            value: t,
            label: e,
            onChange: i,
            name: l,
            checked: c,
            scale: h
        }) => {
            const [u, d] = (0, s.useState)(!1), p = {
                appearance: "none",
                borderRadius: 99999,
                padding: `${2*h}px ${10*h}px`,
                fontSize: 12 * h + "px",
                cursor: "pointer",
                border: "1px solid #82828A",
                lineHeight: 16 * h + "px",
                backgroundColor: c ? "white" : "transparent",
                color: c ? "#242528" : "#fff",
                outline: "none",
                boxShadow: u ? "0 0 0 2px #fff" : "none",
                flex: "0 0 auto"
            }, g = (0, r.h)(`w-radio-${t}-`);
            return (0, n.h)("div", {
                style: {
                    display: "flex",
                    alignItems: "center"
                }
            }, (0, n.h)("input", {
                type: "radio",
                name: l,
                onChange: i,
                id: g,
                style: o._,
                value: t,
                checked: c,
                onFocus: () => {
                    (0, a.C)() || d(!0)
                },
                onBlur: () => {
                    d(!1)
                }
            }), (0, n.h)("label", {
                htmlFor: g,
                style: p
            }, e))
        }
    }, (t, e, i) => {
        i.d(e, {
            f: () => l
        });
        var n = i(2),
            s = i(14),
            o = i(146),
            r = i(25),
            a = i(43);
        const l = ({
            value: t,
            onChange: e,
            name: i,
            checked: l,
            ariaLabel: c,
            scale: h,
            onPreview: u,
            onPreviewEnd: d
        }) => {
            const [p, g] = (0, s.useState)(!1), m = (0, r.h)(`w-radio-${t}-`), f = {
                appearance: "none",
                borderRadius: "50%",
                width: 24 * h + "px",
                height: 24 * h + "px",
                cursor: "pointer",
                border: "none",
                boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.55), 0 0 0 2px rgba(255, 255, 255, 0.7)",
                backgroundColor: t
            }, v = {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                boxShadow: l ? "0 0 0 2px #fff" : "",
                padding: "2px",
                transform: p ? "scale(1.2)" : "",
                transition: "transform 150ms ease"
            };
            return (0, n.h)("div", {
                style: {
                    flex: "0 0 auto"
                }
            }, (0, n.h)("input", {
                type: "radio",
                name: i,
                onChange: e,
                id: m,
                value: t,
                checked: l,
                style: o._,
                onFocus: () => {
                    (0, a.C)() || g(!0), u ? .("focus")
                },
                onBlur: () => {
                    g(!1), d ? .("focus")
                }
            }), (0, n.h)("div", {
                style: v
            }, (0, n.h)("label", {
                htmlFor: m,
                style: f,
                "aria-label": c,
                onMouseEnter: () => u ? .("hover"),
                onMouseLeave: () => d ? .("hover")
            })))
        }
    }, (t, e, i) => {
        i.d(e, {
            C: () => l
        });
        var n = i(2),
            s = i(166),
            o = i(163),
            r = i(184),
            a = i(169);
        const l = ({
            legendText: t,
            selectedFontOptionLabel: e,
            setSelectedFontOptionLabel: i,
            fieldsetRef: l
        }) => (0, n.h)(n.Fragment, null, (0, n.h)("fieldset", {
            style: {
                border: 0,
                padding: 0
            },
            ref: l
        }, (0, n.h)(a.A, {
            tagName: "legend"
        }, t), Array.from(o.Yc).map((([t], a) => (0, n.h)(s.h, {
            key: t,
            name: "fontFamily",
            value: t,
            checked: t === e,
            onChange: () => i(t),
            shouldHaveRoundedBottomCorners: a === o.Yc.size - 1
        }, (0, n.h)("span", {
            style: (0, r.R)(t)
        }, t))))))
    }, (t, e, i) => {
        i.d(e, {
            R: () => o
        });
        var n = i(185),
            s = i(186);
        const o = t => ({
            fontFamily: (0, s.d)(t),
            fontVariant: (0, n.s)(t)
        })
    }, (t, e, i) => {
        i.d(e, {
            s: () => n
        });
        const n = t => "Small caps" === t ? "small-caps" : "normal"
    }, (t, e, i) => {
        i.d(e, {
            d: () => o
        });
        var n = i(163),
            s = i(27);
        const o = t => n.Yc.get(t) ? ? s.yY
    }, (t, e, i) => {
        i.d(e, {
            O: () => h
        });
        var n = i(2),
            s = i(27),
            o = i(29),
            r = i(43),
            a = i(44),
            l = i(67);

        function c(t, e, i) {
            return (e = function(t) {
                var e = function(t) {
                    if ("object" != typeof t || !t) return t;
                    var e = t[Symbol.toPrimitive];
                    if (void 0 !== e) {
                        var i = e.call(t, "string");
                        if ("object" != typeof i) return i;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(t)
                }(t);
                return "symbol" == typeof e ? e : e + ""
            }(e)) in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        }(0, a.Oj)("en-US", {
            CAPTIONS_READ_TRANSCRIPT: "Search Video",
            CAPTIONS_OPEN_TRANSCRIPT: "Search Video - open transcript viewer",
            CAPTIONS_CLOSE_TRANSCRIPT: "Search Video - close transcript viewer"
        });
        class h extends n.Component {
            constructor(...t) {
                super(...t), c(this, "onFocus", (() => {
                    (0, r.C)() || this.setState({
                        isKeyboardFocused: !0
                    })
                })), c(this, "onBlur", (() => {
                    this.state.isKeyboardFocused && this.setState({
                        isKeyboardFocused: !1
                    })
                })), c(this, "onMouseEnter", (() => {
                    this.setState({
                        isHovering: !0
                    })
                })), c(this, "onMouseLeave", (() => {
                    this.setState({
                        isHovering: !1
                    })
                }))
            }
            render() {
                return (0, n.h)(l.u, {
                    "aria-label": this.props.isTranscriptOpen ? this.translate("CLOSE_TRANSCRIPT") : this.translate("OPEN_TRANSCRIPT"),
                    class: "w-css-reset-dialog-button-important w-vulcan-v2-button w-transcript-item",
                    tagName: "button",
                    onClick: this.props.toggleTranscript,
                    onfocusin: this.onFocus,
                    onfocusout: this.onBlur,
                    onMouseEnter: this.onMouseEnter,
                    onMouseLeave: this.onMouseLeave,
                    style: this.menuItemStyle()
                }, (0, n.h)("svg", { ...(0, o.I)({
                        width: 40,
                        height: 34,
                        styleOverride: this.transcriptStyle(),
                        ariaHidden: !0
                    }),
                    class: "w-checkmark"
                }, (0, n.h)("g", {
                    fill: "none",
                    stroke: "#ffffff",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-miterlimit": "10"
                }, (0, n.h)("line", {
                    x1: "17",
                    x2: "27",
                    y1: "12",
                    y2: "12"
                }), (0, n.h)("line", {
                    x1: "17",
                    x2: "30",
                    y1: "17",
                    y2: "17"
                }), (0, n.h)("line", {
                    x1: "17",
                    x2: "25",
                    y1: "22",
                    y2: "22"
                }))), this.translate("READ_TRANSCRIPT"))
            }
            transcriptStyle() {
                return {
                    height: p(this),
                    verticalAlign: "middle",
                    visibility: "visible",
                    width: u(this)
                }
            }
            menuItemStyle() {
                return {
                    background: this.state.isHovering ? "rgba(0,0,0,.3)" : "",
                    boxShadow: this.state.isKeyboardFocused ? "0 0 0 2px #fff inset" : "none",
                    borderTopLeftRadius: `${this.props.controlBarBorderRadius}px`,
                    borderTopRightRadius: `${this.props.controlBarBorderRadius}px`,
                    cursor: "pointer",
                    display: "block",
                    fontFamily: s.yY,
                    fontSize: d(this),
                    lineHeight: p(this),
                    marginRight: 10 * this.props.scale + "px",
                    textAlign: "left",
                    width: "100%"
                }
            }
            translate(t) {
                return (0, a.sC)(this.props.playerLanguage.code, `CAPTIONS_${t}`)
            }
        }
        const u = t => `${(t=>40*t.props.scale)(t)}px`,
            d = t => 14 * t.props.scale,
            p = t => `${g(t)}px`,
            g = t => 34 * t.props.scale
    }, (t, e, i) => {
        i.d(e, {
            h: () => h
        });
        var n = i(2),
            s = i(27),
            o = i(43),
            r = i(25),
            a = i(29),
            l = i(169);

        function c(t, e, i) {
            return (e = function(t) {
                var e = function(t) {
                    if ("object" != typeof t || !t) return t;
                    var e = t[Symbol.toPrimitive];
                    if (void 0 !== e) {
                        var i = e.call(t, "string");
                        if ("object" != typeof i) return i;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(t)
                }(t);
                return "symbol" == typeof e ? e : e + ""
            }(e)) in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        }
        class h extends n.Component {
            constructor(...t) {
                super(...t), c(this, "onBlur", (() => {
                    this.state.isKeyboardFocused && this.setState({
                        isKeyboardFocused: !1
                    })
                })), c(this, "onClick", (() => {
                    this.props.item.onClick()
                })), c(this, "onFocus", (() => {
                    (0, o.y)() || this.setState({
                        isKeyboardFocused: !0
                    })
                })), c(this, "onMouseEnter", (() => {
                    this.setState({
                        isHovering: !0
                    })
                })), c(this, "onMouseLeave", (() => {
                    this.setState({
                        isHovering: !1
                    })
                }))
            }
            render() {
                const t = this.props.item,
                    e = (0, r.h)(`w-captions-${t.text}-`);
                return (0, n.h)("div", {
                    style: this.menuItemStyle(),
                    onMouseEnter: this.onMouseEnter,
                    onMouseLeave: this.onMouseLeave
                }, (0, n.h)(l.A, {
                    checked: Boolean(t.isSelected),
                    id: e,
                    name: "Captions Menu",
                    onFocus: this.onFocus,
                    onClick: this.onClick,
                    onBlur: this.onBlur,
                    tagName: "input",
                    type: "radio",
                    value: t.text
                }), (0, n.h)("label", {
                    class: "w-css-reset",
                    for: e,
                    "data-handle": `captions-menu-item-${this.props.index}`,
                    lang: t.bcp47LanguageTag
                }, (0, n.h)("svg", { ...(0, a.I)({
                        width: 40,
                        height: 34,
                        styleOverride: this.checkStyle(),
                        ariaHidden: !0
                    }),
                    class: "w-checkmark"
                }, (0, n.h)("polyline", {
                    fill: "none",
                    stroke: "#ffffff",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-miterlimit": "10",
                    points: "17,17 20,20 25,14 "
                })), t.text))
            }
            checkStyle() {
                return {
                    height: d(this),
                    verticalAlign: "middle",
                    visibility: this.props.item.isSelected ? "visible" : "hidden",
                    width: u(this)
                }
            }
            menuItemStyle() {
                return {
                    background: this.state.isHovering ? "rgba(0,0,0,.3)" : "",
                    boxShadow: this.state.isKeyboardFocused ? "0 0 0 2px #fff inset" : "none",
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    display: "block",
                    fontFamily: s.yY,
                    fontSize: p(this),
                    lineHeight: d(this),
                    marginRight: 10 * this.props.scale + "px",
                    textAlign: "left",
                    width: "100%"
                }
            }
        }
        const u = t => `${(t=>40*t.props.scale)(t)}px`,
            d = t => `${(t=>34*t.props.scale)(t)}px`,
            p = t => 14 * t.props.scale
    }, (t, e, i) => {
        i.d(e, {
            Kk: () => h,
            Tx: () => u,
            bo: () => g,
            gV: () => p,
            jj: () => m
        });
        var n = i(13),
            s = i(190),
            o = i(22),
            r = i(9),
            a = i(33),
            l = i(162),
            c = i(93);
        n.s.captionsPromises ? ? = {};
        const h = n.s.captionsPromises;
        n.s.uncacheCaptions = (t, e) => {
            if (t && e) {
                const i = d(t, e);
                delete n.s.captionsPromises[i]
            } else t ? Object.keys(n.s.captionsPromises).forEach((e => {
                e.startsWith(t) && delete n.s.captionsPromises[e]
            })) : Object.keys(n.s.captionsPromises).forEach((t => {
                delete n.s.captionsPromises[t]
            }))
        };
        const u = (t, e = {}) => {
                if (null == t || null == t.availableTranscripts) return -1;
                const i = [];
                e.language && i.push(e.language);
                const n = (0, l.JM)();
                null != n.bcp47LanguageTag && i.push(n.bcp47LanguageTag);
                const s = i.filter(((t, e) => i.indexOf(t) === e));
                let o = (0, c.J)(t.availableTranscripts.map((t => t.bcp47LanguageTag)), s);
                return -1 === o && (o = (0, c.J)(t.availableTranscripts.map((t => t.wistiaLanguageCode)), s)), -1 === o && (o = (0, c.J)(t.availableTranscripts.map((t => t.bcp47LanguageTag)), [...navigator.languages, "en"])), o
            },
            d = (t, e) => `${t}${e?`-${e}`:""}`,
            p = (t, e = {}) => {
                if ((0, a.gD)(t)) return Promise.resolve({
                    captions: []
                });
                const i = t.hashedId(),
                    l = d(i, e.language);
                if (n.s.captionsPromises[l]) return n.s.captionsPromises[l];
                const c = t.captionsLanguages();
                return c.length > 10 ? n.s.captionsPromises[l] = ((t, e, i) => {
                    const n = t.hashedId(),
                        a = i.map((i => (i => {
                            const a = `${(0,o.v9)()}//${(0,o.Dd)(t._opts)}`,
                                l = new window.URL(`${a}/embed/captions/${n}/${i}.json`);
                            return r.ct.info(l, e), (0, s.J)({
                                input: l,
                                metricName: "captions-fetch"
                            }).then((t => t.json())).then((t => (null != t && null == t.error || (t = {
                                captions: []
                            }), t))).catch((t => (r.ct.warn("Failed to fetch captions for", n, i, t), {
                                captions: []
                            })))
                        })(i.ietfLanguageTag || i.wistiaLanguageCode))),
                        l = setTimeout((() => (r.ct.warn("Timed out fetching captions for", t.hashedId(), i), {
                            captions: []
                        })), 2e4);
                    return Promise.all(a).then((t => t.reduce(((t, e) => (t.captions.push(...e.captions), t)), {
                        captions: []
                    }))).finally((() => clearTimeout(l)))
                })(t, e, c) : n.s.captionsPromises[l] = new Promise((n => {
                    const a = `${(0,o.v9)()}//${(0,o.Dd)(t._opts)}`,
                        l = new window.URL(`${a}/embed/captions/${i}.json`);
                    e.language && l.searchParams.append("language", e.language);
                    const c = setTimeout((() => {
                        n({
                            captions: []
                        }), r.ct.warn("Timed out fetching captions for", t.hashedId(), e)
                    }), 2e4);
                    r.ct.info(l, e), (0, s.J)({
                        input: l,
                        metricName: "captions-fetch"
                    }).then((t => t.json())).then((t => {
                        null != t && null == t.error || (t = {
                            captions: []
                        }), n(t)
                    })).catch((t => {
                        r.ct.warn("Failed to fetch captions for", i, e, t), n({
                            captions: []
                        })
                    })).finally((() => clearTimeout(c)))
                }))
            },
            g = t => t._inNativeMode() || t._impl.behaviors.fullscreen && t._impl.behaviors.fullscreen.inNativeFullscreen(),
            m = (t, e) => {
                for (let i = 0; i < e.length; i++) {
                    let n = e[i];
                    if (n.language === t) return n
                }
                return null
            }
    }, (t, e, i) => {
        i.d(e, {
            J: () => o
        });
        var n = i(41);
        const s = async (t, e) => {
                const {
                    delay: i,
                    init: o,
                    input: r,
                    metricName: a,
                    retries: l
                } = t;
                try {
                    const t = await fetch(r, o);
                    if (e > 0) {
                        const t = {
                            attempt: String(e)
                        };
                        null != a && (t.name = a), (0, n.WO)("fetch/retry-success", 1, t)
                    }
                    return t
                } catch (o) {
                    if (l <= 0) {
                        const t = {
                            attempts: String(e + 1)
                        };
                        throw null != a && (t.name = a), (0, n.WO)("fetch/failure-after-retry", 1, t), o instanceof Error ? o : new Error(String(o))
                    }
                    return await new Promise((t => {
                        setTimeout(t, i)
                    })), s({ ...t,
                        retries: l - 1
                    }, e + 1)
                }
            },
            o = async ({
                delay: t = 200,
                init: e,
                input: i,
                metricName: n,
                retries: o = 3
            }) => s({
                delay: t,
                init: e,
                input: i,
                metricName: n,
                retries: o
            }, 0)
    }, (t, e, i) => {
        var n = i(192),
            s = i(22),
            o = i(23),
            r = i(25),
            a = i(2),
            l = i(3),
            c = i(6),
            h = i(72),
            u = i(45),
            d = i(189),
            p = i(193),
            g = i(106);
        const m = (0, c.o1)(),
            f = (t, e) => {
                if (!e || null == t) return t;
                const i = e.currentTrack() ? .cues || [],
                    n = i.map(((t, e) => {
                        const n = i[e + 1];
                        return {
                            start: t.triggerStart,
                            end: n ? n.triggerStart : t.triggerStart + (t.audioEnd - t.audioStart),
                            text: t.text.split("\n"),
                            extendedAudioDescription: !0
                        }
                    })),
                    s = [...t.hash.lines.filter((t => !t.extendedAudioDescription)), ...n].sort(((t, e) => t.start - e.start || t.end - e.end));
                return { ...t,
                    hash: { ...t.hash,
                        lines: s
                    }
                }
            };
        class v extends g.E {
            constructor(t) {
                var e, i, n;
                super(t), e = this, n = t => {
                    if (this.captions && this.video.captionsEnabled()) {
                        const e = this.captions.hash.lines.filter((e => e.start <= t && t < e.end));
                        let i = e[0];
                        if (this.video.controls.extendedAudioDescriptionButton ? .isEnabled() && this.video.controls.extendedAudioDescriptionButton ? .isAudioPlaying()) {
                            const t = e.find((t => t.extendedAudioDescription));
                            t && (i = t)
                        } else i = e.find((t => !t.extendedAudioDescription));
                        if (i) return this.setActiveLine(i.text, this.captions.right_to_left), void this.renderCaptions()
                    }
                    this.setNoActiveLine(), this.renderCaptions()
                }, (i = function(t) {
                    var e = function(t) {
                        if ("object" != typeof t || !t) return t;
                        var e = t[Symbol.toPrimitive];
                        if (void 0 !== e) {
                            var i = e.call(t, "string");
                            if ("object" != typeof i) return i;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(t)
                    }(t);
                    return "symbol" == typeof e ? e : e + ""
                }(i = "setActiveLineForTime")) in e ? Object.defineProperty(e, i, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[i] = n, (0, u.$)("assets/external/interFontFace.js"), this.options = t.plugin.captions.options, this._wistiaCaptionsId = (0, r.h)("wistia_", "_captions"), this._userScale = this.options.subtitlesScale || 1, this.unbinds = [t.on("timechange", this.setActiveLineForTime), t.on("extendedaudiodescriptionplay", (() => {
                    this.setActiveLineForTime(this.video.time())
                })), t.on("extendedaudiodescriptionstop", (() => {
                    this.setActiveLineForTime(this.video.time())
                })), t.on("enterfullscreen", (() => {
                    this.hideOrShowNativeCaptions()
                })), t.on("cancelfullscreen", (() => {
                    this.hideOrShowNativeCaptions()
                })), t.on("beforereplace", (() => {
                    this.removeTextTracks()
                })), t.on("extendedaudiodescriptionchange", (() => {
                    this.captions = f(this.captions, this.video.controls.extendedAudioDescriptionButton), this.resetTextTracks();
                    const t = "playing" === this.video.state(),
                        e = this.video.time();
                    this.video.time(e), t && this.video.play(), this.setActiveLineForTime(this.video.time()), this.renderCaptions()
                }))], this.onCaptionsChange = () => {
                    this.updateAfterCaptionsChange(this.video.captionsLanguage().wistiaLanguageCode)
                }, this.video.embedElement.addEventListener("captions-change", this.onCaptionsChange), this.unbinds.push((() => {
                    this.video.embedElement.removeEventListener("captions-change", this.onCaptionsChange)
                })), this.video.whenControlMounted("captionsButton").then((() => {
                    this.updateAfterCaptionsChange(this.video.captionsLanguage().wistiaLanguageCode, {
                        initial: !0
                    })
                }))
            }
            destroy() {
                (0, l.elemRemove)(this.clippedCueStyle), this.clippedCueStyle = null, this.removeTextTracks(), super.destroy()
            }
            mount(t) {
                this.rootElem = t, this.fetchCaptions().then((() => {
                    this._destroyed || (this.setupTextTracks(), this.setActiveLineForTime(this.video.time()), this.renderCaptions())
                }))
            }
            getSelectedCaptions() {
                return this.captions
            }
            fetchCaptions() {
                return this._destroyed ? new Promise((() => {})) : (0, d.gV)(this.video, this.options).then((t => (this.captionsResp = t, t)))
            }
            resetTextTracks() {
                this.removeTextTracks(), this._setupTextTracksPromise = null, this.setupTextTracks()
            }
            setupTextTracks() {
                if (this._setupTextTracksPromise) return this._setupTextTracksPromise;
                if (m.edge && !this.video._inNativeMode()) return this._setupTextTracksPromise = new Promise((() => {}));
                const t = this.video;
                return this._setupTextTracksPromise = new Promise((e => {
                    this.fetchCaptions();
                    const i = () => {
                        this.fetchCaptions().then((i => {
                            this.removeTextTracks(), t.whenVideoElementInDom().then((n => {
                                if (!this._destroyed) {
                                    if (t.engine) {
                                        const e = i.captions.map((e => {
                                            e._wistiaCaptionsId = this._wistiaCaptionsId;
                                            let i = `${(0,o.ff)()}//${(0,s.kh)()}/embed/captions/${t.hashedId()}.vtt?language=${e.language}`;
                                            return e.src = i, e
                                        })).filter((t => "_preview_" !== t.language));
                                        t.engine.addTextTracks(e)
                                    }
                                    this.hideOrShowNativeCaptions(), e()
                                }
                            }))
                        }))
                    };
                    "beforeplay" === t.state() && (m.safari || m.ios.version) ? t.bind("play", (() => (i(), t.unbind))) : i()
                }))
            }
            removeTextTracks() {
                this.video.engine && this.video.engine.removeTextTracks(this._wistiaCaptionsId)
            }
            renderCaptions() {
                "beforeplay" === this.video.state() || this.video._inNativeMode() || (this.activeLine && !this._captionsHidden ? (0, a.render)((0, a.h)(p.A, { ...this.props,
                    ...this.activeLine,
                    scale: this.scale(),
                    isInFullscreen: this.video.inFullscreen(),
                    isPlaybarEnabled: this.video.isControlEnabled("playbar"),
                    isTranscriptEnabled: this.isTranscriptEnabled()
                }), this.rootElem) : (0, a.render)((0, a.h)("nothing", null), this.rootElem), this.reactMounts.captions = [this.rootElem])
            }
            isTranscriptEnabled() {
                return !1 !== this.options.transcript
            }
            onControlPropsUpdated(t) {
                t.videoWidth === this.props.videoWidth && t.controlsAreVisible === this.props.controlsAreVisible && t.controlBarHeight === this.props.controlBarHeight && t.captionsBackgroundColor === this.props.captionsBackgroundColor && t.captionsTextSize === this.props.captionsTextSize && t.captionsTextColor === this.props.captionsTextColor && t.captionsTextShadow === this.props.captionsTextShadow && t.captionsFontFamily === this.props.captionsFontFamily && t.captionsFontVariant === this.props.captionsFontVariant && t.captionsBorderRadius === this.props.captionsBorderRadius && t.captionsWindowColor === this.props.captionsWindowColor && t.captionsWindowOpacityPercentage === this.props.captionsWindowOpacityPercentage && t.captionsTextOpacityPercentage === this.props.captionsTextOpacityPercentage && t.captionsBackgroundOpacityPercentage === this.props.captionsBackgroundOpacityPercentage && t.scale === this.props.scale || this.renderCaptions()
            }
            setActiveLine(t, e = !1) {
                this.activeLine = {
                    text: t,
                    rtl: e
                }
            }
            setNoActiveLine() {
                this.activeLine = null
            }
            remapCaptionsTimingsToMatchVideoLanguage() {
                if (null == this.captions || this.captions.media_hashed_id === this.video.hashedId()) return;
                if (!this.video.mediaLanguage().hasVideoStream) return;
                const t = this.video.mediaLanguages().find((t => t.isOriginal)),
                    e = this.video.mediaLanguage().wistiaLanguageCode,
                    i = this.captions.hash.lines.map((i => {
                        const n = this.remapTime(t.wistiaLanguageCode, e, i.start),
                            s = this.remapTime(t.wistiaLanguageCode, e, i.end);
                        return { ...i,
                            start: n,
                            end: s
                        }
                    }));
                this.captions = { ...this.captions,
                    hash: { ...this.captions.hash,
                        lines: i
                    }
                }
            }
            setLanguage(t) {
                this.video.captionsLanguageCode(t)
            }
            isEnabled() {
                return Boolean(this._isEnabled)
            }
            updateAfterCaptionsChange(t, e = {}) {
                if (this._isEnabled = this.video.captionsEnabled(), !this.video.captionsEnabled()) return this.setNoActiveLine(), void this.renderCaptions();
                this.fetchCaptions().then((async () => {
                    const i = (0, d.jj)(t, this.captionsResp.captions);
                    this.captions = f(i, this.video.controls.extendedAudioDescriptionButton), this.remapTime = await this.video.getRemapTime(), this.remapCaptionsTimingsToMatchVideoLanguage(), this.setActiveLineForTime(this.video.time()), this.renderCaptions(), !1 !== e.track && this.showCorrespondingTrack(i), !1 !== e.initial && this.video.trigger("captionslanguagechange", t)
                }))
            }
            turnOff() {
                this.video.captionsEnabled(!1)
            }
            showCorrespondingTrack(t) {
                m.edge && !this.video._inNativeMode() || this.setupTextTracks().then((() => {
                    const e = this.video.getMediaElement();
                    for (let i = 0; i < e.textTracks.length; i++) {
                        const n = e.textTracks[i];
                        "captions" === n.kind && (t && n.language === t.language ? n.mode = "showing" : n.mode = "disabled")
                    }
                }))
            }
            hideOrShowNativeCaptions() {
                (0, d.bo)(this.video) ? this.allowShowingNativeCaptions(): this.disallowShowingNativeCaptions()
            }
            allowShowingNativeCaptions() {
                this.clippedCueStyle && ((0, l.elemRemove)(this.clippedCueStyle), this.clippedCueStyle = null), this.hideCustomCaptions()
            }
            disallowShowingNativeCaptions() {
                if (this.clippedCueStyle) return this.clippedCueStyle;
                const t = "WISTIA-PLAYER" === this.embedElement.tagName && !0 !== this.video._attrs.wistiaPopover ? this.embedElement.shadowRoot : document.head;
                this.clippedCueStyle = (0, l.addInlineCss)(t, `\n      #${this.video.chrome.id} ::cue {\n        visibility: hidden;\n      }\n      #${this.video.chrome.id} ::-webkit-media-text-track-container {\n        visibility: hidden;\n      }\n      #${this.video.chrome.id} ::-webkit-media-text-track-background {\n        visibility: hidden;\n      }\n      #${this.video.chrome.id} ::-webkit-media-text-track-display {\n        visibility: hidden;\n      }\n    `), this.showCustomCaptions()
            }
            hideCustomCaptions() {
                this._captionsHidden = !0, this.renderCaptions()
            }
            showCustomCaptions() {
                this._captionsHidden = !1, this.renderCaptions()
            }
            setUserScale(t) {
                this._userScale = t, this.renderCaptions()
            }
            getUserScale() {
                return this._userScale
            }
            scale() {
                return this._userScale * Math.min(2, Math.max(.6, (0, n.O8)(this.video, [640, 850])))
            }
        }
        v.handle = "captions", v.type = "above-control-bar", v.sortValue = 501, v.shouldMount = t => t.plugin.captions && !1 === t.isLiveMedia(), (0, h.X)(v)
    }, (t, e, i) => {
        i.d(e, {
            O8: () => a
        }), i(3), i(71);
        var n = i(6),
            s = i(4);
        const o = (0, n.o1)(),
            r = () => {
                const t = document.querySelector("meta[name=viewport]"),
                    e = t && t.getAttribute("content"),
                    i = {};
                return e && e.split(/[\s,]+/).forEach((t => {
                    const e = t.split("=");
                    2 === e.length && (i[e[0]] = (0, s.cast)(e[1]))
                })), i
            },
            a = (t, e) => {
                const i = t.videoWidth(),
                    n = t.videoHeight();
                if (i / n < 1) {
                    const [e, i] = (t => {
                        if (!(o.iphone || o.ipad || o.android)) return [340, 860];
                        if (t ? .isAudio()) return [500, 960];
                        const e = r();
                        let i;
                        if (e.height) {
                            i = "number" == typeof e.height ? 0 + e.height : screen.height || window.innerHeight;
                            const t = Math.max(e["minimum-scale"] || 0, Math.min(e["maximum-scale"] || 10, e["initial-scale"] || 1));
                            t < 1 && (i /= t)
                        } else i = window.innerWidth;
                        return [i, 2 * i / 1.3]
                    })(t);
                    if (n <= e) return n / e;
                    if (n > i) return n / i
                } else {
                    const [n, s] = e || (t => {
                        if (!(o.iphone || o.ipad || o.android)) return [640, 960];
                        if (t ? .isAudio()) return [500, 960];
                        const e = r();
                        let i;
                        if (e.width) {
                            i = "number" == typeof e.width ? 0 + e.width : screen.width || window.innerWidth;
                            const t = Math.max(e["minimum-scale"] || 0, Math.min(e["maximum-scale"] || 10, e["initial-scale"] || 1));
                            t < 1 && (i /= t)
                        } else i = window.innerWidth;
                        return [i, 2 * i / 3]
                    })(t);
                    if (i <= n) return i / n;
                    if (i > s) return i / s
                }
                return 1
            }
    }, (t, e, i) => {
        i.d(e, {
            A: () => a
        });
        var n = i(2),
            s = i(34),
            o = i(194);
        class r extends n.Component {
            constructor(t) {
                super(t), (0, o.AW)().includes(t.captionsFontFamily) || (0, o.UW)(t.captionsFontFamily)
            }
            componentDidUpdate(t) {
                const e = (0, o.AW)();
                this.props.captionsFontFamily == t.captionsFontFamily || e.includes(this.props.captionsFontFamily) || (0, o.UW)(this.props.captionsFontFamily)
            }
            render() {
                const t = this.props.text.map(((t, e) => this.renderLine(t, e)));
                return (0, n.h)("div", {
                    class: "w-captions w-css-reset w-css-reset-tree w-vulcan-v2-button",
                    style: this.rootContainerStyle()
                }, (0, n.h)("div", {
                    class: "w-captions-window",
                    style: this.groupStyle()
                }, t))
            }
            renderLine(t, e) {
                const i = {
                        isFirst: 0 === e,
                        isLast: e === this.props.text.length - 1
                    },
                    s = this.props.rtl ? "rtl" : "ltr";
                return (0, n.h)("p", {
                    class: "w-captions-line",
                    style: this.lineStyle()
                }, (0, n.h)("div", {
                    style: {
                        display: "inline-block",
                        transition: "all 200ms ease",
                        verticalAlign: "bottom"
                    },
                    class: "w-css-reset"
                }, (0, n.h)("span", {
                    dir: s,
                    style: this.spanStyle(i),
                    dangerouslySetInnerHTML: {
                        __html: t
                    }
                })))
            }
            rootContainerStyle() {
                const t = this.props,
                    e = 18 * t.scale;
                return {
                    bottom: `${(t.controlsAreVisible?0:-t.controlBarHeight)+e}px`,
                    left: 0,
                    pointerEvents: "none",
                    position: "absolute",
                    textAlign: "center",
                    width: "100%",
                    transition: "all 100ms ease"
                }
            }
            groupStyle() {
                const {
                    captionsWindowColor: t,
                    captionsWindowOpacityPercentage: e
                } = this.props;
                return {
                    backgroundColor: new s.Q1(t).alpha(e),
                    display: "inline-block",
                    position: "relative",
                    margin: "auto",
                    maxWidth: "80%",
                    outline: "none",
                    cursor: "pointer"
                }
            }
            lineStyle() {
                return {
                    lineHeight: "1em",
                    margin: 0,
                    padding: 0
                }
            }
            spanStyle() {
                const {
                    scale: t,
                    captionsBackgroundOpacityPercentage: e,
                    captionsBackgroundColor: i,
                    captionsBorderRadius: n,
                    captionsTextColor: o,
                    captionsTextOpacityPercentage: r,
                    captionsTextSize: a,
                    captionsFontFamily: l,
                    captionsFontVariant: c,
                    captionsTextShadow: h
                } = this.props;
                return {
                    background: new s.Q1(i).alpha(e),
                    borderRadius: `${n}px`,
                    color: new s.Q1(o).alpha(r),
                    display: "block",
                    fontFamily: l,
                    fontSize: a * t + "px",
                    fontVariant: c,
                    textShadow: h,
                    lineHeight: "1em",
                    overflow: "hidden",
                    padding: ".25em .6em",
                    textOverflow: "ellipsis",
                    webkitFontSmoothing: "antialiased",
                    width: "100%",
                    transition: "all 200ms ease-in-out"
                }
            }
        }
        r.defaultProps = {
            captionsBorderRadius: 0,
            captionsBackgroundColor: "#000",
            captionsTextColor: "#fff",
            captionsTextSize: 18,
            captionsTextOpacityPercentage: 1,
            captionsFontVariant: "normal",
            captionsTextShadow: "none",
            captionsFontFamily: "Inter",
            captionsBackgroundOpacityPercentage: .75,
            captionsWindowColor: "#000",
            captionsWindowOpacityPercentage: 0
        };
        const a = r
    }, (t, e, i) => {
        i.d(e, {
            AW: () => o,
            UW: () => r
        });
        const n = ["Arsenal", "Barlow Condensed", "Catamaran", "Chivo", "Corben", "Dancing Script", "Fira Mono", "Inconsolata", "Inter", "Lato", "Libre Franklin", "Lora", "Merriweather", "Montserrat", "Nunito", "Open Sans", "Oswald", "PT Serif", "Playfair Display", "Poppins", "Roboto", "Slabo 13px", "Source Sans Pro", "Source Serif Pro", "Work Sans", "Zilla Slab"],
            s = "https://fast.wistia.com/fonts/google_fonts/",
            o = () => {
                const t = document.querySelectorAll(`link[rel="stylesheet"][href^="${s}"]`);
                return 0 === t.length ? [] : Array.from(t).reduce(((t, e) => {
                    const i = new URL(e.href).pathname.split("/")[3];
                    return t.includes(i) || t.push(i), t
                }), [])
            },
            r = t => {
                if (!n.includes(t)) return;
                const e = encodeURIComponent(t).replaceAll("%20", "_");
                if (o().includes(e)) return;
                const i = document.createElement("link");
                i.rel = "stylesheet", i.href = `${s}${e}/${e}.css`, document.head.appendChild(i)
            }
    }, (t, e, i) => {
        var n = i(2),
            s = i(3),
            o = i(45),
            r = i(72),
            a = i(13),
            l = i(106),
            c = i(196),
            h = i(189);

        function u(t, e, i) {
            return (e = function(t) {
                var e = function(t) {
                    if ("object" != typeof t || !t) return t;
                    var e = t[Symbol.toPrimitive];
                    if (void 0 !== e) {
                        var i = e.call(t, "string");
                        if ("object" != typeof i) return i;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(t)
                }(t);
                return "symbol" == typeof e ? e : e + ""
            }(e)) in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        }
        class d extends l.E {
            constructor(t) {
                super(t), u(this, "close", (() => {
                    this._isVisible = !1, this.animateOut().then((() => {
                        this.video.embedElement.dispatchEvent(new CustomEvent("transcript-control-visibility-change", {
                            detail: {
                                isVisible: !1
                            }
                        })), this.video.controls.captions.showCustomCaptions(), (0, n.render)((0, n.h)("nothing", null), this.rootElem), this.reactMounts = [this.rootElem]
                    }))
                })), u(this, "seekTranscript", (t => {
                    this.video.time(t)
                })), u(this, "metricsVideoCount", (t => {
                    a.s.Metrics.videoCount(this.video._impl, `player/${t}`)
                })), u(this, "onClickCloseTranscript", (() => {
                    this.close(), this.video.controls.captionsButton.buttonElement.focus()
                })), u(this, "onSearchHitCounterChange", (({
                    activeHitIndex: t,
                    totalHits: e
                }) => {
                    this.video.behaviors.ui.setAriaLiveText(`${t} of ${e} results.`)
                })), this.video = t, this.options = t.plugin.captions ? .options ? ? {}, this._isVisible = !1, this._turnstileClosed = !1, this.unbinds = [], this.unbinds.push(this.video.on("captionschange", (t => {
                    this.setSelectedLanguage(t)
                })), this.video.on("timechange", (() => {
                    this._isVisible && this.renderTranscript()
                })), this.video.on("turnstileclose", (() => {
                    this._turnstileClosed = !0, this._isVisible && this.renderTranscript()
                })), this.video.on("extendedaudiodescriptionchange", (() => {
                    this._isVisible && this.rerenderTranscript()
                })), this.video.on("extendedaudiodescriptioninit", (() => {
                    this._isVisible && this.rerenderTranscript()
                })))
            }
            mount(t) {
                this.fetchCaptions().then((() => {
                    const e = (0, s.elemFromObject)({
                        style: {
                            position: "absolute"
                        },
                        class: "w-css-reset"
                    });
                    (0, s.elemAppend)(t, e), this.rootElem = e
                }))
            }
            open() {
                "beforeplay" === this.video.state() && this.video.setControlEnabled("bigPlayButton", !1), this.video.controls.captions.hideCustomCaptions(), this._isVisible = !0, this.video.embedElement.dispatchEvent(new CustomEvent("transcript-control-visibility-change", {
                    detail: {
                        isVisible: !0
                    }
                })), this.renderTranscript(), this.animateIn()
            }
            onControlPropsUpdated(t) {
                this._isVisible && (this.props.controlsAreVisible !== t.controlsAreVisible && this.fetchCaptions().then((() => {
                    this.renderTranscript()
                })), this.props.videoWidth !== t.videoWidth && this.fetchCaptions().then((() => {
                    this.renderTranscript()
                })), this.props.videoHeight !== t.videoHeight && this.fetchCaptions().then((() => {
                    this.renderTranscript()
                })))
            }
            fetchCaptions() {
                return (0, h.gV)(this.video, this.options).then((t => (this.captionsResp = t, t)))
            }
            setSelectedLanguage(t) {
                this.selectedLanguage = t.language, this.rootElem && this._isVisible && ("_off_" === t.language ? this.close() : this.renderTranscript())
            }
            renderTranscript() {
                this.video.controls.captions.hideCustomCaptions();
                const t = (0, h.Tx)(this.video._mediaData, this.video.embedOptions().plugin ? .["captions-v1"]);
                let e;
                return t >= 0 && (e = this.captionsResp.captions[t].language), new Promise((t => {
                    (0, o.$)("assets/external/interFontFace.js").then((() => {
                        (0, n.render)((0, n.h)(c.A, {
                            closeTranscript: this.onClickCloseTranscript,
                            controlBarHeight: this.props.controlBarHeight,
                            controlsAreVisible: this.props.controlsAreVisible,
                            preferredLanguage: e,
                            playerLanguage: this.video.playerLanguage(),
                            scale: this.props.scale,
                            seekTranscript: this.seekTranscript,
                            selectedLanguage: this.selectedLanguage || this.captionsResp.preferred_languages[0],
                            srtCaptions: this.getSrtCaptions(),
                            metricsVideoCount: this.metricsVideoCount,
                            turnstileClosed: this._turnstileClosed,
                            turnstileEmail: this.video.email(),
                            turnstilePlugin: this.video.plugin.turnstile || this.video.plugin.form,
                            videoDuration: this.video.duration(),
                            videoHeight: this.video.videoHeight(),
                            videoTime: this.video.time(),
                            videoWidth: this.video.videoWidth(),
                            onSearchHitCounterChange: this.onSearchHitCounterChange
                        }), this.rootElem), this.reactMounts = [this.rootElem], t()
                    }))
                }))
            }
            rerenderTranscript() {
                return (0, n.render)((0, n.h)("nothing", null), this.rootElem), this.renderTranscript()
            }
            getSrtCaptions() {
                return this.video.controls.extendedAudioDescriptionButton ? .isEnabled() ? this.captionsResp.captions : (this.captionsWithoutExtendedAudioDescription || (this.captionsWithoutExtendedAudioDescription = {}, this.captionsWithoutExtendedAudioDescription.captions = this.captionsResp.captions.map((t => {
                    const e = t.hash.lines.filter((t => !t.extendedAudioDescription));
                    return { ...t,
                        hash: { ...t.hash,
                            lines: e
                        }
                    }
                }))), this.captionsWithoutExtendedAudioDescription.captions)
            }
            animateIn() {
                return new Promise((t => {
                    (0, s.elemStyle)(this.rootElem, {
                        opacity: 0,
                        height: "100%",
                        width: "100%"
                    }), setTimeout((() => {
                        (0, s.elemAnimate)(this.rootElem, {
                            opacity: 1
                        }, {
                            time: 200,
                            callback: t
                        })
                    }), 0)
                }))
            }
            animateOut() {
                return new Promise((t => {
                    (0, s.elemStyle)(this.rootElem, {
                        opacity: 1
                    }), setTimeout((() => {
                        (0, s.elemAnimate)(this.rootElem, {
                            opacity: 0
                        }, {
                            time: 200,
                            callback: () => {
                                (0, s.elemStyle)(this.rootElem, {
                                    height: 0,
                                    width: 0
                                }), t()
                            }
                        })
                    }), 0)
                }))
            }
        }
        d.handle = "transcript", d.type = "above-control-bar", d.sortValue = 600, d.shouldMount = t => {
            const e = t.embedOptions().plugin && t.embedOptions().plugin["captions-v1"] && !1 === t.embedOptions().plugin["captions-v1"].transcript;
            return !e && (t.plugin.captions && t.plugin.captions.options && !1 === t.isLiveMedia() && !e)
        }, (0, r.X)(d)
    }, (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        var n = i(2),
            s = i(27),
            o = i(43),
            r = i(197),
            a = i(200),
            l = i(201),
            c = i(168);

        function h(t, e, i) {
            return (e = function(t) {
                var e = function(t) {
                    if ("object" != typeof t || !t) return t;
                    var e = t[Symbol.toPrimitive];
                    if (void 0 !== e) {
                        var i = e.call(t, "string");
                        if ("object" != typeof i) return i;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(t)
                }(t);
                return "symbol" == typeof e ? e : e + ""
            }(e)) in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        }
        class u extends n.Component {
            constructor(t) {
                super(t), h(this, "setRefs", (t => {
                    this.sectionRefs = t
                })), h(this, "resetFirstHitIndex", (() => {
                    this.setState({
                        activeSearchHitIndex: void 0
                    })
                })), h(this, "setCloseFocus", (() => {
                    (0, o.y)() || this.setState({
                        closeFocus: !0
                    })
                })), h(this, "setCloseBlur", (() => {
                    this.setState({
                        closeFocus: !1
                    })
                })), h(this, "setClearSearchFocus", (() => {
                    (0, o.y)() || this.setState({
                        clearSearchFocus: !0
                    })
                })), h(this, "setClearSearchBlur", (() => {
                    this.setState({
                        clearSearchFocus: !1
                    })
                })), h(this, "updateSearchValue", (t => {
                    this.setState({
                        searchKey: t.target.value
                    })
                })), h(this, "inputKeyDown", (t => {
                    const {
                        hitCounter: e,
                        activeSearchHitIndex: i,
                        hitAndMissIndices: n,
                        searchKey: s
                    } = this.state, o = 40 === t.which ? 0 : i + 1, r = n.indexOf(!0, o);
                    let a = n.indexOf(!0);
                    a = -1 === a ? 0 : a;
                    let l, c = e;
                    switch (-1 === r ? (l = a, c = s ? 1 : 0) : (l = r, c += 1), t.which) {
                        case 40:
                            this.setState({
                                activeSearchHitIndex: l,
                                hitCounter: s ? 1 : 0
                            }), setTimeout((() => {
                                requestAnimationFrame((() => {
                                    this.sectionRefs[l].focus()
                                }))
                            }), 20);
                            break;
                        case 13:
                            this.setState({
                                activeSearchHitIndex: l,
                                hitCounter: c
                            })
                    }
                })), h(this, "inputOnFocus", (() => {
                    this.setState({
                        inputHasFocus: !0
                    })
                })), h(this, "inputOnBlur", (() => {
                    this.setState({
                        inputHasFocus: !1
                    })
                })), h(this, "focusInput", (t => {
                    this.inputElem.focus(), this.setState({
                        activeSearchHitIndex: t
                    })
                })), h(this, "updateHitCounter", (t => {
                    const {
                        hitCounter: e
                    } = this.state, i = t ? e + 1 : e - 1;
                    this.state.searchKey && this.setState({
                        hitCounter: i
                    })
                })), h(this, "onMouseMove", (() => {
                    !1 === this.state.recentlyMoused && this.setState({
                        recentlyMoused: !0
                    }), this.isMousingTimeout && clearTimeout(this.isMousingTimeout), this.isMousingTimeout = setTimeout((() => {
                        this.setState({
                            recentlyMoused: !1
                        })
                    }), 7e3)
                })), h(this, "onKeyUp", (t => {
                    27 !== t.which || t.escapeHandled || (t.escapeHandled = !0, this.props.closeTranscript())
                })), this.state = {
                    captions: this.formatCaptions(),
                    clearSearchFocus: !1,
                    closeFocus: !1,
                    hitAndMissIndices: [],
                    hitCounter: 0,
                    inputHasFocus: !1,
                    isContainerHover: null,
                    recentlyMoused: !1,
                    searchKey: "",
                    totalHits: 0,
                    turnstile: {}
                }, this.isMousingTimeout = null, this.searchTimeout = null, this.setTurnstileOptions()
            }
            componentDidMount() {
                this.setState({
                    hitAndMissIndices: this.initialHitAndMissIndices()
                }), this.props.metricsVideoCount("interactiveCaptions-open"), this.inputElem.focus()
            }
            componentWillUnmount() {
                this.props.metricsVideoCount("interactiveCaptions-close")
            }
            componentDidUpdate(t, e) {
                this.state.searchKey !== e.searchKey && this.debounceSearch(), this.props.selectedLanguage !== t.selectedLanguage && (this.setState({
                    captions: this.formatCaptions()
                }), this.setState({
                    hitAndMissIndices: this.initialHitAndMissIndices()
                })), (this.props.turnstileClosed !== t.turnstileClosed || this.props.turnstileEmail !== t.turnstileEmail || void 0 !== this.props.turnstilePlugin && void 0 === t.turnstilePlugin) && this.setTurnstileOptions(), e.hitCounter === this.state.hitCounter && e.totalHits === this.state.totalHits || this.props.onSearchHitCounterChange({
                    activeHitIndex: this.state.hitCounter,
                    totalHits: this.state.totalHits
                })
            }
            initialHitAndMissIndices() {
                const {
                    captions: t
                } = this.state, e = t.length;
                return Array.apply(null, Array(e)).map((() => !1))
            }
            setTurnstileOptions() {
                const t = this.props.turnstilePlugin;
                t ? this.setState({
                    turnstile: {
                        enabled: !0,
                        time: t.options.time,
                        hasClosed: this.props.turnstileClosed || Boolean(this.props.turnstileEmail) || !1
                    }
                }) : this.setState({
                    turnstile: {
                        enabled: !1,
                        time: void 0,
                        hasClosed: void 0
                    }
                })
            }
            debounceSearch() {
                clearTimeout(this.searchTimeout), this.searchTimeout = setTimeout((() => {
                    this.doSearch()
                }), 350)
            }
            doSearch() {
                const {
                    searchKey: t,
                    captions: e,
                    turnstile: i
                } = this.state, n = t.replaceAll("&", "&amp;"), s = new RegExp(n, "ig");
                let o, r = 0;
                if (!e || !t) return void this.setState({
                    hitAndMissIndices: this.initialHitAndMissIndices(),
                    totalHits: r,
                    hitCounter: 0,
                    activeSearchHitIndex: o
                });
                const a = e.map(((t, e) => {
                        if (i.enabled && !1 === i.hasClosed && "end" !== i.time && t.start > i.time) return !1;
                        const n = s.test(t.text);
                        return void 0 === o && n && (o = e), n && (r += 1), n
                    })),
                    l = o ? 1 : 0;
                this.setState({
                    hitAndMissIndices: a,
                    activeSearchHitIndex: o,
                    hitCounter: l,
                    totalHits: r
                }), this.props.metricsVideoCount("interactiveCaptions-search")
            }
            getCaptionsForLanguage() {
                const {
                    srtCaptions: t,
                    selectedLanguage: e,
                    preferredLanguage: i
                } = this.props, n = e && "_off_" !== e ? e : i;
                return t.filter((t => t.language === n))[0]
            }
            formatCaptions() {
                const t = this.getCaptionsForLanguage(),
                    e = t ? .hash.lines.map((t => t.text.map((e => ({
                        start: t.start,
                        end: t.end,
                        text: e
                    })))));
                return [].concat.apply([], e)
            }
            render() {
                const {
                    scale: t
                } = this.props, {
                    captions: e,
                    hitCounter: i,
                    totalHits: s
                } = this.state, o = this.getCaptionsForLanguage() ? .right_to_left ? "rtl" : "ltr";
                return (0, n.h)("div", {
                    class: "w-css-reset w-css-reset-tree",
                    onKeyUp: this.onKeyUp,
                    onMouseMove: this.onMouseMove,
                    style: this.rootStyles()
                }, (0, n.h)("div", {
                    dir: o,
                    style: this.searchAndCloseContainerStyles()
                }, (0, n.h)("div", {
                    style: {
                        position: "absolute",
                        width: "50%",
                        left: 0,
                        right: 0,
                        top: "50%",
                        transform: "translateY(-50%)",
                        margin: "auto"
                    }
                }, (0, n.h)("div", {
                    style: this.searchIconStyles()
                }, (0, n.h)(l.W, {
                    color: this.state.inputHasFocus || this.state.searchKey ? "#505050" : "#FFF"
                })), (0, n.h)("style", {
                    dangerouslySetInnerHTML: {
                        __html: `\n                .w-interactive-captions--search-input::placeholder {\n                  color: ${this.state.inputHasFocus||this.state.searchKey?"#505050":"#FFF"};\n                  opacity: 1;\n                }\n                .w-interactive-captions--search-input::-webkit-search-cancel-button {\n                  display: none;\n                }\n              `
                    }
                }), (0, n.h)("input", {
                    "aria-label": "Search Captions",
                    class: "w-interactive-captions--search-input",
                    onBlur: this.inputOnBlur,
                    onInput: this.updateSearchValue,
                    onFocus: this.inputOnFocus,
                    onKeyDown: this.inputKeyDown,
                    placeholder: "Search",
                    style: this.searchInputStyles(),
                    type: "search",
                    value: this.state.searchKey,
                    ref: t => this.inputElem = t
                }), this.state.searchKey ? (0, n.h)("button", {
                    style: this.stylesForClearSearchButton(),
                    class: "w-vulcan-v2-button w-css-reset",
                    onClick: () => {
                        this.setState({
                            searchKey: ""
                        }), this.inputElem.focus()
                    },
                    onFocus: this.setClearSearchFocus,
                    onBlur: this.setClearSearchBlur,
                    "aria-label": "Clear search input"
                }, (0, n.h)(a.U, {
                    color: "#000"
                })) : null, this.state.searchKey ? (0, n.h)("div", {
                    style: this.hitCountStyle()
                }, i, " / ", s) : null), (0, n.h)("div", {
                    style: {
                        position: "absolute",
                        right: "5%",
                        top: "50%",
                        transform: "translateY(-50%)",
                        display: "inline-block"
                    }
                }, (0, n.h)("button", {
                    style: this.closeButtonStyles(),
                    class: "w-vulcan-v2-button w-css-reset",
                    onClick: this.props.closeTranscript,
                    onFocus: this.setCloseFocus,
                    onBlur: this.setCloseBlur,
                    tabIndex: 0,
                    "aria-label": "Close Interactive Captions"
                }, (0, n.h)(a.U, {
                    color: "#FFF"
                })))), (0, n.h)(r.A, {
                    activeSearchHitIndex: this.state.activeSearchHitIndex,
                    allRefs: this.sectionRefs,
                    captions: e,
                    closeTranscript: this.props.closeTranscript,
                    controlsAreVisible: this.props.controlsAreVisible,
                    controlBarHeight: this.calculateSearchHeight(),
                    focusInput: this.focusInput,
                    hitAndMissIndices: this.state.hitAndMissIndices,
                    recentlyMoused: this.state.recentlyMoused,
                    scale: this.props.scale,
                    setRefs: this.setRefs,
                    searchKey: this.state.searchKey,
                    seekTranscript: this.props.seekTranscript,
                    turnstile: this.state.turnstile,
                    updateHitCounter: this.updateHitCounter,
                    videoDuration: this.props.videoDuration,
                    videoHeight: this.props.videoHeight,
                    videoTime: this.props.videoTime,
                    dir: o
                }))
            }
            rootStyles() {
                return {
                    backgroundColor: "rgba(0,0,0,.65)",
                    clip: "rect(0,0,0,0)",
                    color: "#fff",
                    height: `calc(100% + ${this.props.controlBarHeight}px)`
                }
            }
            calculateSearchHeight() {
                return this.props.controlBarHeight ? this.props.controlBarHeight : c.F$ * this.props.scale
            }
            searchAndCloseContainerStyles() {
                return {
                    position: "relative",
                    height: 2 * this.calculateSearchHeight() + "px",
                    minHeight: 2 * this.calculateSearchHeight() + "px"
                }
            }
            searchIconStyles() {
                const {
                    scale: t
                } = this.props;
                return {
                    position: "absolute",
                    display: "inline-block",
                    top: 20 * t + "px",
                    transform: "translateY(-50%)",
                    left: 16 * t + "px",
                    transition: "all 300ms ease",
                    width: 20 * t + "px"
                }
            }
            closeButtonStyles() {
                const {
                    scale: t
                } = this.props;
                return {
                    boxShadow: this.state.closeFocus ? "0 0 0 2px #fff inset" : "none",
                    borderWidth: "1px",
                    borderRadius: "0%",
                    cursor: "pointer",
                    padding: "2px",
                    height: 22.5 * t + "px",
                    width: 22.5 * t + "px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }
            }
            hitCountStyle() {
                const {
                    scale: t
                } = this.props, e = {
                    position: "absolute",
                    transform: "translateY(-50%)",
                    color: "#000",
                    top: "50%",
                    fontSize: 10 * t + "px",
                    fontWeight: 600,
                    fontFamily: s.yY,
                    transition: "all 300ms ease"
                }, i = this.getCaptionsForLanguage() ? .right_to_left;
                return i ? e.left = 48 * t + 45 + "px" : e.right = 48 * t + "px", e
            }
            stylesForClearSearchButton() {
                const {
                    scale: t
                } = this.props;
                return {
                    boxShadow: this.state.clearSearchFocus ? "0 0 0 2px #000 inset" : "none",
                    cursor: "pointer",
                    display: "flex",
                    outline: "none",
                    padding: "2px",
                    position: "absolute",
                    right: 16 * t + "px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    transition: "all 300ms ease",
                    width: 15 * t + "px"
                }
            }
            searchInputStyles() {
                const {
                    scale: t
                } = this.props, {
                    inputHasFocus: e,
                    searchKey: i
                } = this.state, n = Boolean(e || i), o = n ? "white" : "transparent", r = 8 * t;
                return {
                    "-webkit-appearance": "none",
                    padding: `${r}px ${85*t}px ${r}px ${45*t}px`,
                    fontSize: 17 * t + "px",
                    display: "block",
                    fontFamily: s.yY,
                    transition: "all 300ms ease",
                    color: n ? "#505050" : "white",
                    backgroundColor: o,
                    border: "1px solid white",
                    width: "100%",
                    margin: 0,
                    outline: "none",
                    boxSizing: "border-box"
                }
            }
        }
        const d = u
    }, (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        var n = i(198),
            s = i(2),
            o = i(27),
            r = i(3),
            a = i(43),
            l = i(25),
            c = i(199);

        function h(t, e, i) {
            return (e = function(t) {
                var e = function(t) {
                    if ("object" != typeof t || !t) return t;
                    var e = t[Symbol.toPrimitive];
                    if (void 0 !== e) {
                        var i = e.call(t, "string");
                        if ("object" != typeof i) return i;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(t)
                }(t);
                return "symbol" == typeof e ? e : e + ""
            }(e)) in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        }
        class u extends s.Component {
            constructor(t) {
                super(t), h(this, "focusNextOrPrevious", (t => {
                    this.setState({
                        scrollToIndex: t,
                        focusIndex: t
                    }), setTimeout((() => {
                        requestAnimationFrame((() => {
                            this.props.allRefs[t].focus()
                        }))
                    }), 20)
                })), h(this, "handleScroll", (t => {
                    this.setState({
                        scrollTop: t.target.scrollTop
                    })
                })), h(this, "onKeyDown", (t => {
                    if ((38 === t.which || 40 === t.which) && !t.wistiaPlayerHandled) {
                        t.preventDefault(), t.wistiaPlayerHandled = !0;
                        const e = this.props.hitAndMissIndices.indexOf(!0),
                            i = -1 !== e ? e : 0;
                        this.setState({
                            scrollToIndex: i,
                            focusIndex: i
                        }), setTimeout((() => {
                            requestAnimationFrame((() => {
                                this.props.allRefs[i].focus()
                            }))
                        }), 20)
                    }
                })), h(this, "onWheel", (() => {
                    !1 === this.state.recentlyScrolled && this.setState({
                        recentlyScrolled: !0
                    }), this.scrollingTimeout && clearTimeout(this.scrollingTimeout), this.scrollingTimeout = setTimeout((() => {
                        this.setState({
                            recentlyScrolled: !1
                        })
                    }), 7e3)
                })), h(this, "setSectionBlur", (() => {
                    this.setState({
                        sectionFocus: !1
                    })
                })), h(this, "setSectionFocus", (() => {
                    (0, a.y)() || this.setState({
                        sectionFocus: !0
                    })
                })), h(this, "setFocusIndex", (t => {
                    this.setState({
                        focusIndex: t
                    })
                })), h(this, "setSectionRef", ((t, e) => {
                    this.savedRefs[e] = t
                })), h(this, "renderRowAtIndex", ((t, e = {}) => this.renderLine(this.props.captions[t], t, e))), this.state = {
                    sectionFocus: !1,
                    availableHeight: 0,
                    scrollTop: 0,
                    scrollToIndex: void 0,
                    prevScrollToIndex: void 0,
                    recentlyScrolled: !1
                }, this.savedRefs = {}, this.scrollingTimeout = null, this.containerId = (0, l.h)("w-interactive-transcript-")
            }
            componentDidMount() {
                const t = this.props.captions;
                if (this.props.setRefs && this.props.setRefs(this.savedRefs), this.setState({
                        availableHeight: this.calculateAvailableHeight()
                    }), this.props.videoTime > 0)
                    for (let e = 0; e < t.length; e++)
                        if (this.isWithinTime(t[e])) {
                            this.setState({
                                scrollToIndex: e
                            });
                            break
                        }
            }
            componentDidUpdate(t, e) {
                const i = this.props.captions;
                if (this.props.setRefs && this.props.setRefs(this.savedRefs), this.props.controlsAreVisible === t.controlsAreVisible && this.props.videoHeight === t.videoHeight || this.setState({
                        availableHeight: this.calculateAvailableHeight()
                    }), this.props.activeSearchHitIndex !== t.activeSearchHitIndex && this.setState({
                        scrollToIndex: this.props.activeSearchHitIndex,
                        prevScrollToIndex: t.activeSearchHitIndex
                    }), this.state.scrollToIndex !== e.scrollToIndex && this.setState({
                        prevScrollToIndex: this.state.scrollToIndex
                    }), this.props.videoTime !== t.videoTime && !1 === this.props.recentlyMoused && !1 === this.state.recentlyScrolled)
                    for (let t = 0; t < i.length; t++)
                        if (this.isWithinTime(i[t])) {
                            this.props.allRefs[t - 1] && null !== this.props.allRefs[t - 1].offsetParent ? this.startScrollAnimation(t) : this.setState({
                                scrollToIndex: t
                            });
                            break
                        }
                this.props.controlsAreVisible && !t.controlsAreVisible && this.isAtBottomOfCaptions() && this.scrollToBottom()
            }
            animate() {
                this.scollInterpolation && !this.scollInterpolation.atEnd() ? this.scrollingAnimation = requestAnimationFrame((() => {
                    this.transcriptText.scrollTop = this.scollInterpolation.value(), this.scollInterpolation.atEnd() || this.animate()
                })) : cancelAnimationFrame(this.scrollingAnimation)
            }
            calculateAvailableHeight() {
                const {
                    controlsAreVisible: t,
                    controlBarHeight: e,
                    videoHeight: i
                } = this.props;
                return i - (2 * e + (t ? e : 0))
            }
            focusMaintainer(t, e) {
                this.state.focusIndex && (0, r.elemIsInside)(document.activeElement, this.transcriptTextRoot) && (this.state.focusIndex < t || this.state.focusIndex >= e ? this.props.allRefs.focusHelper && this.props.allRefs.focusHelper.focus({
                    preventScroll: !0
                }) : this.state.focusIndex > t && this.state.focusIndex < e && this.props.allRefs[this.state.focusIndex].focus())
            }
            calculateNumberOfRowsToRender() {
                const {
                    captions: t,
                    turnstile: e
                } = this.props;
                if (e.enabled && !1 === e.hasClosed && "end" !== e.time) {
                    let i = 0,
                        n = t.length - 1,
                        s = Math.floor((i + n) / 2);
                    for (; t[s].start > e.time && s - 1 < n;) e.time > t[s].start ? i = s - 1 : n = s + 1, s = Math.floor((i + n) / 2);
                    return t[s].start <= e.time ? s + 1 : 1
                }
                return t.length
            }
            getNeighboringIndices(t) {
                let e = t,
                    i = t;
                const n = this.props.hitAndMissIndices;
                if (!this.props.searchKey) return [t - 1, t === n.length - 1 ? -1 : t + 1];
                for (;
                    (e -= 1) >= 0 && !n[e];);
                for (;
                    (i += 1) < n.length && !n[i];);
                return [e, i === n.length ? -1 : i]
            }
            isAtBottomOfCaptions() {
                const t = this.transcriptText;
                return t.scrollTop + 5 >= t.scrollHeight - t.offsetHeight
            }
            isWithinTime(t) {
                const {
                    videoTime: e
                } = this.props, {
                    start: i,
                    end: n
                } = t;
                return e >= i && e < n
            }
            scrollToBottom() {
                const t = this.props.captions.length - 1;
                this.startScrollAnimation(t)
            }
            sectionContainerStyles() {
                return {
                    height: "100%",
                    overflowY: "scroll",
                    boxShadow: this.state.sectionFocus ? "0 0 0 2px #fff inset" : "none",
                    outline: "none"
                }
            }
            startScrollAnimation(t) {
                const e = 20 * t * 1.5 * this.props.scale;
                let i = Math.max(0, e),
                    s = this.transcriptText.scrollTop;
                cancelAnimationFrame(this.scrollingAnimation), this.scollInterpolation = new n.l({
                    seedRange: 300,
                    outputStart: s,
                    outputEnd: i
                }), this.animate()
            }
            turnstileText() {
                const {
                    scale: t
                } = this.props;
                return {
                    display: "block",
                    fontWeight: "500",
                    fontSize: 16 * t + "px",
                    lineHeight: 30 * t + "px",
                    fontFamily: o.yY,
                    textAlign: "center",
                    textStyle: "italic",
                    marginTop: 20 * t + "px",
                    paddingBottom: 20 * t + "px"
                }
            }
            renderLine(t, e, i) {
                const {
                    start: n,
                    end: o
                } = t, r = this.isWithinTime({
                    start: n,
                    end: o
                }), a = this.getNeighboringIndices(e);
                return (0, s.h)("div", {
                    key: e,
                    style: {
                        boxShadow: r && !i.focusHelper ? "2px 0 0 0 #fff inset" : "none",
                        boxSizing: "border-box"
                    },
                    dir: this.props.dir,
                    "aria-rowindex": e + 1,
                    role: !i.focusHelper && "row"
                }, (0, s.h)(c.A, {
                    containerId: this.containerId,
                    dir: this.props.dir,
                    line: t,
                    focusHelper: i.focusHelper || !1,
                    focusInput: this.props.focusInput,
                    focusNeighbors: a,
                    focusNextOrPrevious: this.focusNextOrPrevious,
                    index: e,
                    isActive: r,
                    isHovered: !1,
                    key: e,
                    scale: this.props.scale,
                    searchKey: this.props.searchKey,
                    seek: this.props.seekTranscript,
                    setSectionRef: this.setSectionRef,
                    setFocusIndex: this.setFocusIndex,
                    updateHitCounter: this.props.updateHitCounter
                }))
            }
            render() {
                const {
                    scale: t,
                    turnstile: e,
                    videoDuration: i
                } = this.props, n = this.calculateNumberOfRowsToRender(), o = 30 * t, r = o * n;
                let a;
                a = "end" === e.time || i - 5 <= e.time;
                const {
                    availableHeight: l,
                    scrollTop: c
                } = this.state;
                let h = Math.floor(c / o);
                this.state.prevScrollToIndex !== this.state.scrollToIndex && this.transcriptText && void 0 !== this.state.scrollToIndex && (h = this.state.scrollToIndex, this.transcriptText.scrollTop = h * o);
                let u = h + Math.ceil(l / o);
                u > n && (u = n);
                const d = [];
                let p = h;
                for (; p < u;) d.push(this.renderRowAtIndex(p, {})), p += 1;
                this.focusMaintainer(h, u);
                const g = {
                    height: r,
                    paddingTop: h * o + "px"
                };
                "rtl" === this.props.dir ? (g.marginRight = "25%", g.textAlign = "right") : (g.marginLeft = "29%", g.textAlign = "left", g.width = "60%");
                const m = this.props.captions.length > 0;
                return (0, s.h)("div", {
                    style: {
                        height: `${l}px`
                    },
                    ref: t => this.transcriptTextRoot = t
                }, (0, s.h)("div", {
                    key: "focusHelper",
                    style: {
                        height: 0
                    }
                }, m && this.renderRowAtIndex(this.state.focusIndex || 0, {
                    focusHelper: !0
                })), (0, s.h)("div", {
                    "aria-label": "Use the arrow keys to move between the different caption lines. Click each line to seek the video to that line",
                    id: this.containerId,
                    onBlur: this.setSectionBlur,
                    onFocus: this.setSectionFocus,
                    onKeyDown: this.onKeyDown,
                    onScroll: this.handleScroll,
                    onWheel: this.onWheel,
                    ref: t => this.transcriptText = t,
                    style: this.sectionContainerStyles(),
                    tabIndex: 0
                }, (0, s.h)("div", {
                    style: g,
                    role: "grid",
                    "aria-rowcount": n
                }, (0, s.h)("div", {
                    role: "rowgroup"
                }, d)), e.enabled && !1 === e.hasClosed && !a && (0, s.h)("span", {
                    style: this.turnstileText()
                }, "-- You must enter your email to access the rest of the video. --")))
            }
        }
        const d = u
    }, (t, e, i) => {
        i.d(e, {
            l: () => n
        });
        class n {
            constructor(...t) {
                const e = t[0],
                    {
                        seedRange: i,
                        seedFunction: s,
                        seedStart: o
                    } = e,
                    r = e.outputStart,
                    a = null != r ? r : 0,
                    l = e.outputEnd,
                    c = null != l ? l : 1,
                    h = e.easing,
                    u = null != h ? h : n.linear;
                if (null == i) throw new Error("Must provide seedRange argument");
                if (null != s && "function" != typeof s) throw new Error("Given seed is not a function");
                if ("function" != typeof u) throw new Error(`Invalid easing function given: ${this.easing}`);
                this._seedRange = i, this._seedFunction = s || (() => (new Date).getTime()), this._outputStart = a, this._outputEnd = c, this._easing = u, this._seedStart = o ? .() || this.seed()
            }
            seed() {
                return this.seedFunction()()
            }
            seedStart() {
                return this._seedStart
            }
            seedRange() {
                return this._valOrFn(this._seedRange)
            }
            seedFunction() {
                return this._seedFunction
            }
            outputStart() {
                return this._valOrFn(this._outputStart)
            }
            outputEnd() {
                return this._valOrFn(this._outputEnd)
            }
            easing() {
                return this._valOrFn(this._easing)
            }
            value() {
                return this._easing(...Array.from(this.easingArgs() || []))
            }
            atEnd() {
                return 1 === this.ratio()
            }
            atStart() {
                return 0 === this.ratio()
            }
            easingArgs() {
                return [this.c(), this.t(), this.d(), this.b()]
            }
            seedDelta() {
                return this.seedRange() > 0 ? Math.min(this.seedRange(), this.seed() - this.seedStart()) : this.seedRange() < 0 ? Math.max(this.seedRange(), this.seed() - this.seedStart()) : 0
            }
            ratio() {
                const t = this.seedRange();
                return 0 === t ? 1 : Math.max(0, Math.min(1, this.seedDelta() / t))
            }
            c() {
                return this.outputEnd() - this.outputStart()
            }
            t() {
                return this.seedDelta()
            }
            d() {
                return this.seedRange()
            }
            b() {
                return this.outputStart()
            }
            _valOrFn(t) {
                return "function" == typeof t ? t() : t
            }
            static linear(t, e, i, n) {
                return t * e / (i || 1) + n
            }
            static easeInOut(t, e, i, n) {
                return (e /= (i || 1) / 2) < 1 ? t / 2 * e * e + n : -t / 2 * ((e -= 1) * (e - 2) - 1) + n
            }
        }
    }, (t, e, i) => {
        i.d(e, {
            A: () => l
        });
        var n = i(2),
            s = i(27),
            o = i(43);

        function r(t, e, i) {
            return (e = function(t) {
                var e = function(t) {
                    if ("object" != typeof t || !t) return t;
                    var e = t[Symbol.toPrimitive];
                    if (void 0 !== e) {
                        var i = e.call(t, "string");
                        if ("object" != typeof i) return i;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(t)
                }(t);
                return "symbol" == typeof e ? e : e + ""
            }(e)) in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        }
        class a extends n.Component {
            constructor(t) {
                super(t), r(this, "clickLine", (t => {
                    const {
                        seek: e,
                        line: i
                    } = this.props;
                    t.preventDefault(), e(i.start + .001)
                })), r(this, "onMouseEnter", (() => {
                    !0 !== this.state.isHovered && this.setState({
                        isHovered: !0
                    })
                })), r(this, "onMouseLeave", (() => {
                    !1 !== this.state.isHovered && this.setState({
                        isHovered: !1
                    })
                })), r(this, "onFocus", (() => {
                    (0, o.y)() || (this.props.setFocusIndex(this.props.index), this.setState({
                        isKeyboardFocused: !0
                    }))
                })), r(this, "unsetKeyboardFocus", (() => {
                    this.setState({
                        isKeyboardFocused: !1
                    })
                })), r(this, "onKeyDown", (t => {
                    const [e, i] = this.props.focusNeighbors;
                    switch (t.which) {
                        case 40:
                            t.preventDefault(), t.wistiaPlayerHandled = !0, -1 !== i && (this.unsetKeyboardFocus(), this.props.focusNextOrPrevious(i), this.props.updateHitCounter(!0));
                            break;
                        case 38:
                            t.preventDefault(), t.wistiaPlayerHandled = !0, this.unsetKeyboardFocus(), -1 !== e ? (this.props.focusNextOrPrevious(e), this.props.updateHitCounter(!1)) : this.props.focusInput(this.props.index)
                    }
                })), r(this, "onKeyUp", (t => {
                    27 === t.which && (this.props.focusInput(this.props.index), t.escapeHandled = !0)
                })), this.state = {
                    isHovered: !1,
                    isKeyboardFocused: !1
                }
            }
            componentDidMount() {
                if (this.el) {
                    const t = this.props.focusHelper ? "focusHelper" : this.props.index;
                    this.props.setSectionRef(this.el, t)
                }
            }
            componentDidUpdate() {
                if (this.el) {
                    const t = this.props.focusHelper ? "focusHelper" : this.props.index;
                    this.props.setSectionRef(this.el, t)
                }
            }
            render() {
                const {
                    searchKey: t,
                    line: e,
                    isActive: i,
                    scale: s
                } = this.props, o = t.replaceAll("&", "&amp;"), r = new RegExp(o, "ig"), a = this.props.focusHelper ? "div" : "button";
                let l = e.text;
                return "" !== t && r.test(e.text) && (l = e.text.replace(r, (t => `<mark>${t}</mark>`))), (0, n.h)("div", {
                    role: !this.props.focusHelper && "gridcell"
                }, (0, n.h)(a, {
                    "aria-describedby": this.props.focusHelper ? "" : this.props.containerId,
                    onBlur: this.unsetKeyboardFocus,
                    onClick: this.clickLine,
                    onFocus: this.onFocus,
                    onKeyDown: this.onKeyDown,
                    onKeyUp: this.onKeyUp,
                    onMouseLeave: this.onMouseLeave,
                    onMouseEnter: this.onMouseEnter,
                    ref: t => this.el = t,
                    style: this.lineStyles(i),
                    tabIndex: -1
                }, !1 === this.props.focusHelper && (0, n.h)("span", {
                    dangerouslySetInnerHTML: {
                        __html: l
                    },
                    style: {
                        backgroundColor: this.state.isHovered ? "black" : "transparent",
                        boxShadow: this.state.isKeyboardFocused ? "0 0 0 2px #fff inset" : "none",
                        cursor: "pointer",
                        padding: `${3.4*s}px ${8*s}px`,
                        textAlign: "rtl" === this.props.dir ? "right" : "left"
                    }
                })))
            }
            lineStyles(t) {
                const {
                    scale: e
                } = this.props;
                return {
                    display: "inline-flex",
                    minHeight: this.props.focusHelper ? "0" : 30 * e + "px",
                    fontFamily: s.yY,
                    fontSize: 17 * e + "px",
                    fontWeight: t ? "700" : "500",
                    lineHeight: this.props.focusHelper ? "0" : 26 * e + "px",
                    outline: "none",
                    marginLeft: 20 / 3.3 * e + "px"
                }
            }
        }
        const l = a
    }, (t, e, i) => {
        i.d(e, {
            U: () => o
        });
        var n = i(2),
            s = i(29);
        const o = ({
            color: t
        }) => (0, n.h)("svg", (0, s.I)({
            width: 24,
            height: 24,
            ariaHidden: !0
        }), (0, n.h)("g", {
            stroke: "none",
            strokeWidth: "1",
            fill: `${t}` || "#fff",
            fillRule: "evenodd"
        }, (0, n.h)("path", {
            d: "M18.643128,20.7643515 C19.228878,21.3502515 20.178678,21.3502515 20.764428,20.7643515 C21.350178,20.1786015 21.350178,19.2288015 20.764428,18.6430515 L14.121378,12.0000015 L20.764428,5.3569065 C21.350178,4.7711115 21.350178,3.8213715 20.764428,3.2355765 C20.178678,2.6497965 19.228878,2.6497965 18.643128,3.2355765 L12.000018,9.8786715 L5.356893,3.2355465 C4.771098,2.6497515 3.821358,2.6497515 3.235563,3.2355465 C2.649783,3.8213265 2.649783,4.7710815 3.235563,5.3568615 L9.878703,12.0000015 L3.235578,18.6430515 C2.649783,19.2289515 2.649783,20.1786015 3.235578,20.7645015 C3.821358,21.3502515 4.771113,21.3502515 5.356893,20.7645015 L12.000018,14.1213165 L18.643128,20.7643515 Z"
        })))
    }, (t, e, i) => {
        i.d(e, {
            W: () => o
        });
        var n = i(2),
            s = i(29);
        const o = ({
            color: t
        }) => (0, n.h)("svg", (0, s.I)({
            width: 24,
            height: 24,
            ariaHidden: !0
        }), (0, n.h)("g", {
            stroke: "none",
            strokeWidth: "1",
            fill: `${t}` || "#fff",
            fillRule: "evenodd"
        }, (0, n.h)("path", {
            d: "M3 10.5C3 6.364 6.364 3 10.5 3S18 6.364 18 10.5 14.636 18 10.5 18 3 14.636 3 10.5m20.562 10.941l-4.661-4.661C20.213 15.027 21 12.858 21 10.5 21 4.701 16.298 0 10.5 0 4.7 0 0 4.701 0 10.5 0 16.298 4.7 21 10.5 21c2.358 0 4.527-.787 6.28-2.098l4.661 4.66c.292.291.677.438 1.06.438.386 0 .77-.147 1.061-.438.584-.584.584-1.539 0-2.121"
        })))
    }, (t, e, i) => {
        var n = i(4),
            s = i(9),
            o = i(13),
            r = i(189),
            a = i(162);
        class l extends o.s.Plugin.Base {
            constructor(t, e) {
                super(t, e);
                const i = (0, a.JM)();
                this.video = t, this.options = { ...e,
                    ...i
                }, this.captions = null;
                const n = this.options.language ? {
                    language: this.options.language
                } : {};
                this.fetched = (0, r.gV)(t, n).then((t => {
                    this.captions = t.captions
                })), this.isEnabled = !1 !== e.on, this.unbinds = [], this.unbinds.push(this.video.on("plugininitialized", (t => {
                    "captions" === t && (this.isEnabled ? (this.enable(), this.options.onByDefault || this.options.onByViewerPreferences ? this.turnOn() : !1 !== this.options.autoEnableForSilentAutoPlay && ("playing" === this.video.state() && this.video.inSilentPlaybackMode() && this.turnOn(), this.video.on("play", (() => (this.video.inSilentPlaybackMode() && this.turnOn(), this.video.unbind))), this.video.on("silentplaybackmodechange", (t => (t && this.turnOn(), this.video.unbind))))) : this.disable())
                })))
            }
            customizePreview(t) {
                if (t.anyChanged(["plugin[captions]", "ephemeral[captions]"])) return new Promise((e => {
                    const i = t.currentValue("plugin[captions]") || {
                        on: !1
                    };
                    t.changed("ephemeral[captions][captionsArray]") && this.clearCache(), this.allMountedAndFetched().then((() => {
                        this.video.requestControls("customizePreview-captions", 4e3);
                        const t = (0, n.getDeep)(this.video, "controls.captionsButton.dialog");
                        if (t ? .open(), setTimeout((() => {
                                const t = (0, n.getDeep)(this.video, "controls.captionsButton.dialog");
                                t ? .close()
                            }), 4e3), this.captions.length) i.onByDefault ? this.turnOn() : this.turnOff();
                        else {
                            const t = [{
                                start: 0,
                                end: 5,
                                text: ["These captions are only an example."]
                            }, {
                                start: 5,
                                end: 10,
                                text: ["When you get real captions,", "they'll be automatically enabled."]
                            }, {
                                start: 10,
                                end: 15,
                                text: ["Go ahead: upload an SRT or VTT file,", "or order a transcript!"]
                            }];
                            this.insertCaptions(t), this.turnOn()
                        }!1 === i.on && this.turnOff(), e()
                    }))
                }))
            }
            captionsOptionsChanged(t) {
                return t.some((t => 0 === t.indexOf("plugin[captions-v1]") || 0 === t.indexOf("ephemeral[captions]")))
            }
            captionsArrayChanged(t) {
                return t.some((t => 0 === t.indexOf("ephemeral[captions][captionsArray]")))
            }
            enable() {
                this.video.setControlEnabled("captions", !0), this.video.setControlEnabled("captionsButton", !0), this.video.addPlugin("captions-v1", {
                    legacy: !0
                })
            }
            disable() {
                this.video.setControlEnabled("captions", !1), this.video.setControlEnabled("captionsButton", !1), this.video.removePlugin("captions-v1")
            }
            allMountedAndFetched() {
                const t = [this.video.whenControlMounted("captionsButton"), this.video.whenControlMounted("captions")];
                return Promise.all(t).then((([t, e]) => Promise.all([t.fetchCaptions(), e.fetchCaptions()])))
            }
            turnOn() {
                this.video.captionsEnabled(!0)
            }
            remove() {
                this.unbinds.forEach((t => {
                    "function" == typeof t ? t() : s.ct.warn("trying to unbind a non-function", t)
                })), this.disable(), delete this.video.plugin.captions, delete this.video.plugin["captions-v1"], super.remove()
            }
            turnOff() {
                this.video.captionsEnabled(!1)
            }
            show() {
                this.video.setControlEnabled("captions", !0)
            }
            hide() {
                this.video.setControlEnabled("captions", !1)
            }
            setSubtitlesScale(t) {
                this.video.whenControlMounted("captions").then((() => {
                    this.video.controls.captions.setUserScale(t)
                }))
            }
            getSubtitlesScale() {
                return this.video.controls.captions ? this.video.controls.captions.getUserScale() : 1
            }
            saveOriginalHash(t) {
                if (this.captions && (this.originalHashByLanguage || (this.originalHashByLanguage = {}), !this.originalHashByLanguage[t])) {
                    const e = this.captions.find((e => e.language === t));
                    e && (this.originalHashByLanguage[t] = e.hash)
                }
            }
            restoreOriginalHash(t) {
                if (this.captions) {
                    if (this.originalHashByLanguage || (this.originalHashByLanguage = {}), this.originalHashByLanguage[t]) {
                        const e = this.captions.find((e => e.language === t));
                        e && (e.hash = this.originalHashByLanguage[t]), delete this.originalHashByLanguage[t]
                    }
                    this.video.controls.captions ? .setActiveLineForTime(this.video.time())
                }
            }
            restoreOriginalCaptions() {
                Object.keys(this.originalHashByLanguage || {}).forEach((t => {
                    this.restoreOriginalHash(t)
                }))
            }
            setCaptionsHash(t, e) {
                this.captions && (this.captions.forEach((i => {
                    i.language === t && (i.hash = e)
                })), this.video.controls.captions ? .setActiveLineForTime(this.video.time()))
            }
            refreshDataFromServer() {
                return new Promise((t => {
                    if (this.clearCache(), this.video.isControlEnabled("captions") || this.video.isControlEnabled("captionsButton")) {
                        this.video.setControlEnabled("captions", !1), this.video.setControlEnabled("captionsButton", !1);
                        const e = this.video.on("controldisabled", (i => {
                            "captions" !== i && "captionsButton" !== i || (e(), this.video.setControlEnabled("captions", !0), this.video.setControlEnabled("captionsButton", !0), this.video.whenControlMounted("captions").then((e => {
                                e.setActiveLineForTime(this.video.time()), t()
                            })))
                        }))
                    }
                }))
            }
            insertCaptions(t) {
                const e = {
                        english_name: "English",
                        hash: {
                            lines: t
                        },
                        language: "_preview_",
                        native_name: "English",
                        right_to_left: !1
                    },
                    i = {
                        captions: [e],
                        preferred_languages: []
                    };
                this.video.controls.captions.captionsResp = i, this.video.controls.captionsButton.captionsResp = i, this.video.controls.transcript.captionsResp = i, this.captions = [e], r.Kk[this.video.hashedId()] = Promise.resolve(i)
            }
            clearCache() {
                this.captions = null, delete r.Kk[this.video.hashedId()], this.fetched = (0, r.gV)(this.video, this.options).then((t => {
                    this.captions = t.captions
                }))
            }
            setLanguage(t) {
                this.video.captionsLanguageCode(t)
            }
            turnOnByDefaultForAllMediaInCarousel() {
                this.options.isForCarousel = !0, this.options.onByDefault = !0, this.turnOn()
            }
            turnOffByDefaultForAllMediaInCarousel() {
                this.options.isForCarousel = !0, this.options.onByDefault = !1, this.turnOff()
            }
        }
        o.s.plugin("captions", ((t, e) => {
            if (!t.isLiveMedia()) return new l(t, e)
        })), o.s.plugin("captions-v1", ((t, e) => t.isLiveMedia() ? {} : {
            turnOn: () => {
                t.plugin.captions.turnOn()
            },
            turnOff: () => {
                t.plugin.captions.turnOff()
            }
        }))
    }],
    __webpack_module_cache__ = {};

function __webpack_require__(t) {
    var e = __webpack_module_cache__[t];
    if (void 0 !== e) return e.exports;
    var i = __webpack_module_cache__[t] = {
        exports: {}
    };
    return __webpack_modules__[t](i, i.exports, __webpack_require__), i.exports
}
__webpack_require__.n = t => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return __webpack_require__.d(e, {
        a: e
    }), e
}, __webpack_require__.d = (t, e) => {
    for (var i in e) __webpack_require__.o(e, i) && !__webpack_require__.o(t, i) && Object.defineProperty(t, i, {
        enumerable: !0,
        get: e[i]
    })
}, __webpack_require__.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
var __webpack_exports__ = {};
__webpack_require__(157), __webpack_require__(191), __webpack_require__(195), __webpack_require__(202);
//# debugId=32614dd1-4dc5-418b-9bfa-009748fb60ce
//# sourceMappingURL=captions.js.map