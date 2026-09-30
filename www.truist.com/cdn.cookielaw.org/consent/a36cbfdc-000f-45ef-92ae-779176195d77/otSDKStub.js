function E(n) {
    var r = 0;
    return function() {
        return r < n.length ? {
            done: !1,
            value: n[r++]
        } : {
            done: !0
        }
    }
}
var H = "function" == typeof Object.defineProperties ? Object.defineProperty : function(n, r, t) {
    if (n == Array.prototype || n == Object.prototype) return n;
    n[r] = t.value;
    return n
};

function I(n) {
    n = ["object" == typeof globalThis && globalThis, n, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
    for (var r = 0; r < n.length; ++r) {
        var t = n[r];
        if (t && t.Math == Math) return t
    }
    throw Error("Cannot find global object");
}
var K = I(this);

function L(n, r) {
    if (r) a: {
        var t = K;n = n.split(".");
        for (var w = 0; w < n.length - 1; w++) {
            var y = n[w];
            if (!(y in t)) break a;
            t = t[y]
        }
        n = n[n.length - 1];w = t[n];r = r(w);r != w && null != r && H(t, n, {
            configurable: !0,
            writable: !0,
            value: r
        })
    }
}
L("Symbol", function(n) {
    function r(x) {
        if (this instanceof r) throw new TypeError("Symbol is not a constructor");
        return new t(w + (x || "") + "_" + y++, x)
    }

    function t(x, m) {
        this.$jscomp$symbol$id_ = x;
        H(this, "description", {
            configurable: !0,
            writable: !0,
            value: m
        })
    }
    if (n) return n;
    t.prototype.toString = function() {
        return this.$jscomp$symbol$id_
    };
    var w = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
        y = 0;
    return r
});
L("Symbol.iterator", function(n) {
    if (n) return n;
    n = Symbol("Symbol.iterator");
    for (var r = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), t = 0; t < r.length; t++) {
        var w = K[r[t]];
        "function" === typeof w && "function" != typeof w.prototype[n] && H(w.prototype, n, {
            configurable: !0,
            writable: !0,
            value: function() {
                return M(E(this))
            }
        })
    }
    return n
});

function M(n) {
    n = {
        next: n
    };
    n[Symbol.iterator] = function() {
        return this
    };
    return n
}
(function(n) {
    function r(a, b, c, d) {
        return new(c = c || Promise)(function(f, g) {
            function k(l) {
                try {
                    u(d.next(l))
                } catch (v) {
                    g(v)
                }
            }

            function q(l) {
                try {
                    u(d.throw(l))
                } catch (v) {
                    g(v)
                }
            }

            function u(l) {
                var v;
                l.done ? f(l.value) : ((v = l.value) instanceof c ? v : new c(function(F) {
                    F(v)
                })).then(k, q)
            }
            u((d = d.apply(a, b || [])).next())
        })
    }

    function t(a, b) {
        function c(u) {
            return function(l) {
                l = [u, l];
                if (d) throw new TypeError("Generator is already executing.");
                for (; k = q && l[q = 0] ? 0 : k;) try {
                    if (d = 1, f && (g = 2 & l[0] ? f.return : l[0] ? f.throw || ((g = f.return) &&
                            g.call(f), 0) : f.next) && !(g = g.call(f, l[1])).done) return g;
                    switch (f = 0, (l = g ? [2 & l[0], g.value] : l)[0]) {
                        case 0:
                        case 1:
                            g = l;
                            break;
                        case 4:
                            return k.label++, {
                                value: l[1],
                                done: !1
                            };
                        case 5:
                            k.label++;
                            f = l[1];
                            l = [0];
                            continue;
                        case 7:
                            l = k.ops.pop();
                            k.trys.pop();
                            continue;
                        default:
                            if (!(g = 0 < (g = k.trys).length && g[g.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                k = 0;
                                continue
                            }
                            if (3 === l[0] && (!g || l[1] > g[0] && l[1] < g[3])) k.label = l[1];
                            else if (6 === l[0] && k.label < g[1]) k.label = g[1], g = l;
                            else {
                                if (!(g && k.label < g[2])) {
                                    g[2] && k.ops.pop();
                                    k.trys.pop();
                                    continue
                                }
                                k.label =
                                    g[2];
                                k.ops.push(l)
                            }
                    }
                    l = b.call(a, k)
                } catch (v) {
                    l = [6, v], f = 0
                } finally {
                    d = g = 0
                }
                if (5 & l[0]) throw l[1];
                return {
                    value: l[0] ? l[1] : void 0,
                    done: !0
                }
            }
        }
        var d, f, g, k = {
                label: 0,
                sent: function() {
                    if (1 & g[0]) throw g[1];
                    return g[1]
                },
                trys: [],
                ops: []
            },
            q = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return q.next = c(0), q.throw = c(1), q.return = c(2), "function" == typeof Symbol && (q[Symbol.iterator] = function() {
            return this
        }), q
    }

    function w() {
        var a = this;
        this.implementThePolyfill = function() {
            var b = Element.prototype.setAttribute;
            Element.prototype.setAttribute = function(c, d) {
                var f = "string" == typeof c ? c.toLowerCase() : "";
                if ("style" !== f && b.apply(this, [c, d]), "style" !== f || d || this.removeAttribute("style"), "style" === f && d) {
                    this.removeAttribute("style");
                    var g;
                    c = a.strToObj(d);
                    for (g in c) this.style[g] = c[g]
                }
            }
        }
    }

    function y(a, b, c) {
        function d(k) {
            return k ? (";" !== (k = k.trim()).charAt(k.length - 1) && (k += ";"), k.trim()) : null
        }
        void 0 === c && (c = !1);
        var f = d(a.getAttribute("style")),
            g = d(b);
        b = "";
        b = c && f ? function() {
            for (var k = f.split(";").concat(g.split(";")).filter(function(F) {
                    return 0 !==
                        F.length
                }), q = "", u = "", l = k.length - 1; 0 <= l; l--) {
                var v = k[l].substring(0, k[l].indexOf(":") + 1).trim();
                0 > q.indexOf(v) && (q += v, u += k[l] + ";")
            }
            return u
        }() : g;
        a.setAttribute("style", b)
    }

    function x() {}

    function m() {
        var a = this;
        this.iabType = null;
        this.iabTypeAdded = !0;
        this.crossOrigin = null;
        this.isAmp = !1;
        this.domainId = "";
        this.isPreview = this.isReset = !1;
        this.nonce = this.geoFromUrl = "";
        this.setAttributePolyfillIsActive = !1;
        this.storageBaseURL = "";
        this.charset = null;
        this.subDomainEnabled = this.isBotHeaderDomain = this.isShopify = !1;
        this.scriptType = this.domainHashValue = "";
        this.buildType = "BUILDMODE";
        this.addBannerSDKScript = function(b) {
            return r(a, void 0, void 0, function() {
                var c, d, f, g, k;
                return t(this, function(q) {
                    switch (q.label) {
                        case 0:
                            return ((c = this.getRegionSet(b)).GCEnable || (this.updateGtmMacros(), this.gtmUpdated = !0), this.iabTypeAdded && ("IAB2" !== c.Type && "IAB2V2" !== c.Type || (this.iabType = c.Type, this.intializeIabStub()), "IAB2" !== c.Type) && "IAB2V2" !== c.Type && this.removeTcf(), c.IsGPPEnabled ? J.init() : J.removeGppApi(), d = e.stubScriptElement.cloneNode(!0),
                                f = "", f = b.UseSDKRefactor ? (e.isMigratedURL && (d.src = e.storageBaseURL + "/scripttemplates/new/scripttemplates/" + e.stubFileName + ".js"), e.storageBaseURL + "/scripttemplates/new/scripttemplates/" + b.Version + "/" + e.bannerScriptName) : "5.11.0" === b.Version ? (e.isMigratedURL && (d.src = e.storageBaseURL + "/scripttemplates/old/scripttemplates/" + e.stubFileName + ".js"), e.storageBaseURL + "/scripttemplates/old/scripttemplates/5.11.0/" + e.bannerScriptName) : (e.isMigratedURL && (d.src = e.storageBaseURL + "/scripttemplates/" + e.stubFileName +
                                    ".js"), e.storageBaseURL + "/scripttemplates/" + b.Version + "/" + e.bannerScriptName), "charset data-language data-document-language data-domain-script crossorigin data-ignore-ga".split(" ").forEach(function(u) {
                                    e.stubScriptElement.getAttribute(u) && d.setAttribute(u, e.stubScriptElement.getAttribute(u))
                                }), this.charset = e.stubScriptElement.getAttribute("charset"), this.isAmp = !!e.stubScriptElement.getAttribute("amp"), e.stubScriptElement.getAttribute("integrity")) ? (k = b.CDNLocation + "/scripttemplates/" + b.Version + "/sri-hashes.json", [4, this.fetchSriHash(k)]) : [3, 2];
                        case 1:
                            return g = q.sent(), [3, 3];
                        case 2:
                            g = null, q.label = 3;
                        case 3:
                            return window.otStubData = {
                                bannerBaseDataURL: e.bannerBaseDataURL,
                                crossOrigin: this.crossOrigin,
                                domainData: b,
                                domainId: this.domainId,
                                geoFromUrl: this.geoFromUrl,
                                isAmp: this.isAmp,
                                isPreview: this.isPreview,
                                isReset: this.isReset,
                                mobileOnlineURL: e.mobileOnlineURL,
                                nonce: this.nonce,
                                otDataLayer: this.otDataLayer,
                                regionRule: c,
                                setAttributePolyfillIsActive: this.setAttributePolyfillIsActive,
                                storageBaseURL: this.storageBaseURL,
                                stubElement: d,
                                urlParams: this.urlParams,
                                userLocation: e.userLocation,
                                gtmUpdated: this.gtmUpdated,
                                previewMode: this.previewMode,
                                charset: this.charset,
                                stubUrl: e.stubScriptElement.getAttribute("src"),
                                sriHash: g,
                                isShopify: this.isShopify,
                                isBotHeaderDomain: this.isBotHeaderDomain
                            }, this.jsonp(f, null, !0, null == (k = g) ? void 0 : k["otBannerSdk.js"]), [2]
                    }
                })
            })
        };
        this.fetchSriHash = function(b) {
            return r(a, void 0, void 0, function() {
                var c;
                return t(this, function(d) {
                    switch (d.label) {
                        case 0:
                            return d.trys.push([0, 4, , 5]), [4, fetch(b)];
                        case 1:
                            return (c = d.sent()).ok ? [4, c.json()] : [3, 3];
                        case 2:
                            return [2, d.sent()];
                        case 3:
                            return [3, 5];
                        case 4:
                            return c = d.sent(), console.error("Error fetching SRI hash:", c), [3, 5];
                        case 5:
                            return [2, null]
                    }
                })
            })
        };
        this.intializeIabStub = function() {
            var b = window;
            a.iabTypeAdded ? (void 0 === b.__tcfapi && (window.__tcfapi = a.executeTcfApi), a.addIabFrame()) : a.addBackwardIabFrame();
            b.receiveOTMessage = a.receiveIabMessage;
            (b.attachEvent || window.addEventListener)("message", b.receiveOTMessage, !1)
        };
        this.addIabFrame = function() {
            var b =
                window;
            !b.frames.__tcfapiLocator && (b.document.body ? a.addLocator("CMP") : setTimeout(a.addIabFrame, 5))
        };
        this.addBackwardIabFrame = function() {
            var b = window;
            !b.frames.__tcfapiLocator && (b.document.body ? a.addLocator("TCF") : setTimeout(a.addIabFrame, 5))
        };
        this.addLocator = function(b) {
            var c = window,
                d = c.document.createElement("iframe");
            y(d, "display: none;", !0);
            d.name = "__tcfapiLocator";
            d.setAttribute("title", b + " Locator");
            c.document.body.appendChild(d)
        };
        this.receiveIabMessage = function(b) {
            var c, d, f, g = "string" == typeof b.data,
                k = {};
            try {
                k = g ? JSON.parse(b.data) : b.data
            } catch (q) {}
            k.__cmpCall && "IAB2" === a.iabType && console.log("Expecting IAB TCF v2.0 vendor iFrame call; Received IAB TCF v1.1");
            k.__tcfapiCall && "IAB2" === a.iabType && (c = k.__tcfapiCall.callId, d = k.__tcfapiCall.command, f = k.__tcfapiCall.parameter, k = k.__tcfapiCall.version, a.executeTcfApi(d, f, function(q, u) {
                q = {
                    __tcfapiReturn: {
                        returnValue: q,
                        success: u,
                        callId: c,
                        command: d
                    }
                };
                b && b.source && b.source.postMessage && b.source.postMessage(g ? JSON.stringify(q) : q, "*")
            }, k))
        };
        this.executeTcfApi =
            function() {
                for (var b = [], c = 0; c < arguments.length; c++) b[c] = arguments[c];
                if (a.iabType = "IAB2", !b.length) return window.__tcfapi.a || [];
                c = b[0];
                var d = b[1],
                    f = b[2];
                b = b[3];
                "function" == typeof f && c && ("ping" === c ? a.getPingRequest(f) : a.addToQueue(c, d, f, b))
            };
        this.addToQueue = function(b, c, d, f) {
            var g = window;
            g.__tcfapi.a = g.__tcfapi.a || [];
            g.__tcfapi.a.push([b, c, d, f])
        };
        this.getPingRequest = function(b) {
            var c, d;
            b && (d = !(c = {}), "IAB2" !== a.iabType && "IAB2V2" !== a.iabType || (c = {
                gdprApplies: e.oneTrustIABgdprAppliesGlobally,
                cmpLoaded: !1,
                cmpStatus: "stub",
                displayStatus: "stub",
                apiVersion: "2.0",
                cmpVersion: void 0,
                cmpId: void 0,
                gvlVersion: void 0,
                tcfPolicyVersion: void 0
            }, d = !0), b(c, d))
        };
        this.initConsentSDK()
    }
    var z, B, C, A, p, e = new function() {
            this.optanonCookieName = "OptanonConsent";
            this.optanonHtmlGroupData = [];
            this.optanonHostData = [];
            this.genVendorsData = [];
            this.vendorsServiceData = [];
            this.IABCookieValue = "";
            this.oneTrustIABCookieName = "eupubconsent";
            this.oneTrustIsIABCrossConsentEnableParam = "isIABGlobal";
            this.isStubReady = !0;
            this.geolocationCookiesParam =
                "geolocation";
            this.EUCOUNTRIES = "BE BG CZ DK DE EE IE GR ES FR IT CY LV LT LU HU MT NL AT PL PT RO SI SK FI SE GB HR LI NO IS".split(" ");
            this.stubFileName = "otSDKStub";
            this.DATAFILEATTRIBUTE = "data-domain-script";
            this.bannerScriptName = "otBannerSdk.js";
            this.mobileOnlineURL = [];
            this.isMigratedURL = !1;
            this.migratedCCTID = "[[OldCCTID]]";
            this.migratedDomainId = "[[NewDomainId]]";
            this.userLocation = {
                country: "",
                state: "",
                stateName: ""
            }
        },
        N = ((h = z = z || {})[h.Days = 1] = "Days", h[h.Weeks = 7] = "Weeks", h[h.Months = 30] = "Months",
            h[h.Years = 365] = "Years", (h = p = p || {}).GDPR = "GDPR", h.CCPA = "CCPA", h.IAB2 = "IAB2", h.IAB2V2 = "IAB2V2", h.GENERIC = "GENERIC", h.LGPD = "LGPD", h.GENERIC_PROMPT = "GENERIC_PROMPT", h.CPRA = "CPRA", h.CDPA = "CDPA", h.DELAWARE = "DELAWARE", h.IOWA = "IOWA", h.NEBRASKA = "NEBRASKA", h.USNATIONAL = "USNATIONAL", h.CUSTOM = "CUSTOM", h.FLORIDA = "FLORIDA", h.COLORADO = "COLORADO", h.CONNECTICUT = "CTDPA", h.MONTANA = "MONTANA", h.TEXAS = "TEXAS", h.OREGON = "OREGON", h.TENNESSEE = "TENNESSEE", h.NEWJERSEY = "NEWJERSEY", h.NEWHAMPSHIRE = "NEWHAMPSHIRE", h.UCPA = "UCPA",
            h.VIRGINIA = "VIRGINIA", p.CPRA, p.CDPA, p.COLORADO, p.OREGON, p.CONNECTICUT, p.FLORIDA, p.MONTANA, p.TEXAS, p.DELAWARE, p.IOWA, p.NEBRASKA, p.TENNESSEE, p.NEWJERSEY, p.NEWHAMPSHIRE, p.UCPA, (h = D = D || {}).Name = "OTGPPConsent", h[h.ChunkSize = 4E3] = "ChunkSize", h.ChunkCountParam = "GPPCookiesCount", h.gppSid = "gppSid", (p = B = B || {}).CPRA = "usca", p.CCPA = "usca", p.CDPA = "usva", p.OREGON = "usor", p.USNATIONAL = "usnat", p.COLORADO = "usco", p.FLORIDA = "usfl", p.CTDPA = "usct", p.MONTANA = "usmt", p.TEXAS = "ustx", p.DELAWARE = "usde", p.IOWA = "usia", p.NEBRASKA =
            "usne", p.TENNESSEE = "ustn", p.NEWJERSEY = "usnj", p.NEWHAMPSHIRE = "usnh", p.UCPA = "usut", p.VIRGINIA = "usva", p.IAB2V2 = "tcfeuv2", (h = C = C || {})[h.CPRA = 8] = "CPRA", h[h.CCPA = 8] = "CCPA", h[h.CDPA = 9] = "CDPA", h[h.OREGON = 15] = "OREGON", h[h.USNATIONAL = 7] = "USNATIONAL", h[h.COLORADO = 10] = "COLORADO", h[h.FLORIDA = 13] = "FLORIDA", h[h.MONTANA = 14] = "MONTANA", h[h.TEXAS = 16] = "TEXAS", h[h.DELAWARE = 17] = "DELAWARE", h[h.IOWA = 18] = "IOWA", h[h.NEBRASKA = 19] = "NEBRASKA", h[h.NEWHAMPSHIRE = 20] = "NEWHAMPSHIRE", h[h.NEWJERSEY = 21] = "NEWJERSEY", h[h.TENNESSEE = 22] =
            "TENNESSEE", h[h.UCPA = 11] = "UCPA", h[h.VIRGINIA = 9] = "VIRGINIA", h[h.CTDPA = 12] = "CTDPA", h[h.IAB2V2 = 2] = "IAB2V2", "geo"),
        O = (D.Name, "LOCAL"),
        P = (0, z.Days, z.Weeks, z.Months, z.Years, w.prototype.camelize = function(a) {
            return (a = a.replace("--", "")).split("-").map(function(b, c) {
                var d = b ? b[0].toUpperCase() + b.slice(1) : "";
                return 0 === c ? b : d
            }).join("")
        }, w.prototype.strToObj = function(a) {
            var b = {};
            a = a.split(";").map(function(f) {
                return f.trim()
            });
            for (var c = 0, d = void 0; c < a.length; ++c)
                if (/:/.test(a[c])) {
                    if (!(d = a[c].split(/:(.+)/))[1]) return null;
                    b[this.camelize(d[0])] = d[1].trim()
                }
            return b
        }, w);
    (p = A = A || {}).ping = "ping";
    p.addEventListener = "addEventListener";
    p.removeEventListener = "removeEventListener";
    p.hasSection = "hasSection";
    p.getSection = "getSection";
    p.getField = "getField";
    p.getGPPData = "getGPPData";
    var J = new function() {
            var a = this;
            this.LOCATOR_NAME = "__gppLocator";
            this.win = window;
            this.customInit = "CUSTOMINIT";
            this.init = function() {
                a.win.__gpp && "function" == typeof a.win.__gpp || (a.win.__gpp = a.executeGppApi, window.addEventListener("message", a.messageHandler, !1), a.addFrame(a.LOCATOR_NAME))
            };
            this.removeGppApi = function() {
                delete a.win.__gpp;
                var b = document.querySelectorAll("iframe[name\x3d" + a.LOCATOR_NAME + "]")[0];
                b && b.parentElement.removeChild(b)
            };
            this.executeGppApi = function() {
                for (var b = [], c = 0; c < arguments.length; c++) b[c] = arguments[c];
                var d = null == (d = a.win) ? void 0 : d.__gpp;
                if (d.queue = d.queue || [], d.events = d.events || [], !b.length || 1 === b.length && "queue" === b[0]) return d.queue;
                if (1 === b.length && "events" === b[0]) return d.events;
                c = b[0];
                d = 1 < b.length ? b[1] : null;
                b = 2 < b.length ?
                    b[2] : null;
                switch (c) {
                    case A.ping:
                        return a.getPingRequest(d);
                    case A.addEventListener:
                        return a.addEventListener(d, b);
                    case A.removeEventListener:
                        return a.removeEventListener(b);
                    default:
                        return void a.addToQueue(c, d, b)
                }
            };
            this.getPingRequest = function(b) {
                var c, d, f = {
                    gppVersion: 1.1,
                    cmpStatus: "stub",
                    cmpDisplayStatus: "hidden",
                    signalStatus: "not ready",
                    supportedAPIs: (c = [], d = {}, Object.keys(C).forEach(function(g) {
                        var k = {};
                        d = g = (k[g] = C[g], Object.assign(k, d))
                    }), Object.keys(B).map(function(g) {
                        return {
                            name: g,
                            value: B[g]
                        }
                    }).forEach(function(g) {
                        g =
                            d[g.name] + ":" + g.value;
                        c.push(g)
                    }), c.filter(function(g, k) {
                        return c.indexOf(g) === k
                    })),
                    currentAPI: "",
                    cmpId: Number.parseInt("28"),
                    sectionList: [],
                    applicableSections: [0],
                    gppString: "",
                    parsedSections: {}
                };
                return b && b(f, !0), f
            };
            this.addFrame = function(b) {
                var c, d = a.win.document;
                a.win.frames[b] || (d.body ? ((c = d.createElement("iframe")).style.cssText = "display:none", c.name = b, c.setAttribute("title", "GPP Locator"), d.body.appendChild(c)) : setTimeout(function() {
                    a.addFrame(b)
                }, 5))
            };
            this.addEventListener = function(b, c) {
                var d =
                    a.win.__gpp;
                return d.events = d.events || [], null != d && d.lastId || (d.lastId = 0), d.lastId++, d.events.push({
                    id: d.lastId,
                    callback: b,
                    parameter: c
                }), {
                    eventName: "listenerRegistered",
                    listenerId: d.lastId,
                    data: !0,
                    pingData: a.getPingRequest()
                }
            };
            this.removeEventListener = function(b) {
                var c = !1,
                    d = a.win.__gpp;
                return d.events = d.events || [], d.events = d.events.filter(function(f) {
                    return f.id.toString() !== b.toString() || !(c = !0)
                }), {
                    eventName: "listenerRemoved",
                    listenerId: b,
                    data: c,
                    pingData: a.getPingRequest()
                }
            };
            this.addToQueue = function(b,
                c, d) {
                var f = a.win.__gpp;
                f.queue = f.queue || [];
                f.queue.push([b, c, d])
            };
            this.messageHandler = function(b) {
                var c, d = "string" == typeof b.data;
                try {
                    var f = d ? JSON.parse(b.data) : b.data
                } catch (g) {
                    f = null
                }
                f && f.__gppCall && (c = f.__gppCall, (0, a.win.__gpp)(c.command, function(g, k) {
                    g = {
                        __gppReturn: {
                            returnValue: g,
                            success: k,
                            callId: c.callId
                        }
                    };
                    b && b.source && b.source.postMessage && b.source.postMessage(d ? JSON.stringify(g) : g, b.origin || "*")
                }, c.parameter))
            };
            this.customInit || this.init()
        },
        G = (x.initCSPTrustedType = function(a) {
            var b = new URL(a,
                location.origin);
            window.DOMPurify && window.trustedTypes && window.trustedTypes.createPolicy && (window.OtTrustedType.TrustedTypePolicy = window.trustedTypes.createPolicy("ot-trusted-type-policy", {
                createHTML: function(c) {
                    return window.DOMPurify.sanitize(c)
                },
                createScript: function(c) {
                    return window.DOMPurify.sanitize(c)
                },
                createScriptURL: function(c) {
                    var d = [document.location.hostname, b.hostname];
                    try {
                        var f = new URL(c, location.origin)
                    } catch (g) {
                        return "about:blank#error"
                    }
                    return f.hostname && !d.includes(f.hostname) ? "about:blank#blocked" :
                        f.href
                }
            }))
        }, x.isCspTrustedType = function() {
            var a;
            return (null == (a = window.OtTrustedType) ? void 0 : a.isCspTrustedTypeEnabled) && (null == (a = window.OtTrustedType) ? void 0 : a.TrustedTypePolicy)
        }, x.createScriptURL = function(a) {
            return x.isCspTrustedType() ? window.OtTrustedType.TrustedTypePolicy.createScriptURL(a) : a
        }, x.checkAndAssignCspTrustedTypeEnabled = function(a) {
            a = null == (a = a.TenantFeatures) ? void 0 : a.CookieV2CSPTrustedType;
            return window.OtTrustedType = {
                isCspTrustedTypeEnabled: a
            }, a
        }, x);
    m.prototype.initConsentSDK =
        function() {
            this.initCustomEventPolyfill();
            this.setStubScriptElement();
            this.setOTDataLayer();
            this.getParam();
            this.fetchBannerSDKDependency();
            this.captureNonce();
            this.captureShopify()
        };
    m.prototype.captureNonce = function() {
        this.nonce = e.stubScriptElement.nonce || e.stubScriptElement.getAttribute("nonce") || null
    };
    m.prototype.captureShopify = function() {
        this.isShopify = e.stubScriptElement.hasAttribute("data-shopify-consent-mapping")
    };
    m.prototype.fetchBannerSDKDependency = function() {
        this.setDomainDataFileURL();
        this.crossOrigin = e.stubScriptElement.getAttribute("crossorigin") || null;
        this.previewMode = "true" === e.stubScriptElement.getAttribute("data-preview-mode");
        this.otFetch(e.bannerDataParentURL, this.getLocation.bind(this), !1, null, null, !0)
    };
    m.prototype.setDomainIfBulkDomainEnabled = function(a) {
        var b = a && a.TenantFeatures,
            c = window.location.hostname,
            d = a.Domain,
            f = a.BulkDomainCheckUrl;
        b && b.CookieV2BulkDomainManagement && c !== d && "PRODUCTION" === a.ScriptType && ((b = window.sessionStorage) && b.getItem("bulkDomainMgmtEnabled") ?
            this.handleBulkDomainMgmt({
                isValid: "true" === window.sessionStorage.getItem("bulkDomainMgmtEnabled")
            }, a) : (d = {
                location: e.storageBaseURL.replace(/^https?:\/\//, ""),
                domainId: this.domainId,
                url: c
            }, this.otFetch(f, this.handleBulkDomainMgmt, !1, d, a)))
    };
    m.prototype.getLocation = function(a) {
        if (this.setDomainIfBulkDomainEnabled(a), this.updateVersion(a), this.subDomainEnabled = a.SubDomainEnabled || !1, this.domainHashValue = a.DomainHashValue || "", this.scriptType = a.ScriptType || "", this.ensureHtmlGroupDataInitialised(), (a.TenantFeatures &&
                a.TenantFeatures.CookieV2CSP || a.CookieV2CSPEnabled) && this.nonce && (this.setAttributePolyfillIsActive = !0, (new P).implementThePolyfill()), G.checkAndAssignCspTrustedTypeEnabled(a) && G.initCSPTrustedType(e.storageBaseURL), !a.RuleSet[0].Type) return this.iabTypeAdded = !1, window.__tcfapi = this.executeTcfApi, this.intializeIabStub(), this.addBannerSDKScript(a);
        var b, c = window;
        c.OneTrust && c.OneTrust.geolocationResponse ? (c = c.OneTrust.geolocationResponse, this.setGeoLocation(c.countryCode, c.stateCode, c.stateName), this.addBannerSDKScript(a)) :
            (c = this.readCookieParam(e.optanonCookieName, e.geolocationCookiesParam)) || a.SkipGeolocation ? (b = c.split(";")[0], c = c.split(";")[1], this.setGeoLocation(b, c), this.addBannerSDKScript(a)) : this.getGeoLocation(a)
    };
    m.prototype.handleBulkDomainMgmt = function(a, b) {
        window.sessionStorage && window.sessionStorage.setItem("bulkDomainMgmtEnabled", JSON.stringify(a.isValid));
        a.isValid && (b.Domain = window.location.hostname)
    };
    m.prototype.getGeolocationURL = function(a) {
        a.TenantFeatures;
        var b = "" + e.stubScriptElement.getAttribute("src").split(e.stubFileName)[0] +
            a.Version;
        return RegExp("^file://", "i").test(b) && a.MobileSDK ? (b = "/" + a.GeolocationUrl.replace(/^(http|https):\/\//, "").split("/").slice(1).join("/") + ".js", e.storageBaseURL + b) : a.GeolocationUrl
    };
    m.prototype.geoLocationJsonCallback = function(a, b) {
        b && this.setGeoLocation(b.country, b.state, b.stateName);
        this.addBannerSDKScript(a)
    };
    m.prototype.getGeoLocation = function(a) {
        var b = this.getGeolocationURL(a);
        this.otFetch(b, this.geoLocationJsonCallback.bind(this, a), !0)
    };
    m.prototype.setOTDataLayer = function() {
        var a =
            "data-dLayer-ignore",
            b = e.stubScriptElement.hasAttribute(a);
        a = e.stubScriptElement.getAttribute(a);
        this.otDataLayer = {
            ignore: b && "true" === a || b && "" === a,
            name: this.getStubAttrOrQueryParam() || "dataLayer"
        }
    };
    m.prototype.setGeoLocation = function(a, b, c) {
        e.userLocation = {
            country: a,
            state: void 0 === b ? "" : b,
            stateName: void 0 === c ? "" : c
        }
    };
    m.prototype.otFetch = function(a, b, c, d, f, g) {
        void 0 === c && (c = !1);
        void 0 === d && (d = null);
        void 0 === g && (g = !1);
        var k = window.sessionStorage && window.sessionStorage.getItem("otPreviewData");
        if (RegExp("^file://",
                "i").test(a)) this.otFetchOfflineFile(a, b);
        else if (0 <= a.indexOf("/consent/") && this.previewMode && k) k = JSON.parse(k).domainJson, b(k);
        else {
            e.mobileOnlineURL.push(a);
            k = new XMLHttpRequest;
            var q = this;
            if (k.onload = function(l) {
                    var v;
                    this && this.responseText ? v = this.responseText : l && l.target && (v = l.target.responseText);
                    g && this && this.getResponseHeader && (l = this.getResponseHeader("X-OneTrust-IsBot"), q.isBotHeaderDomain = !!l && "true" === l.toLowerCase());
                    f ? b(JSON.parse(v), f) : b(JSON.parse(v))
                }, k.onerror = function() {
                    b()
                }, k.open("GET",
                    a), k.withCredentials = !1, c && k.setRequestHeader("accept", "application/json"), d)
                for (var u in d) k.setRequestHeader(u, d[u]);
            k.send()
        }
    };
    m.prototype.otFetchOfflineFile = function(a, b) {
        var c = (a = a.replace(".json", ".js")).split("/"),
            d = c[c.length - 1].split(".js")[0];
        this.jsonp(a, function() {
            b(window[d])
        })
    };
    m.prototype.jsonp = function(a, b, c, d) {
        void 0 === c && (c = !1);
        void 0 === d && (d = "");
        var f = document.createElement("script"),
            g = G.createScriptURL(a);
        f.setAttribute("src", g);
        this.nonce && f.setAttribute("nonce", this.nonce);
        f.async = !0;
        f.type = "text/javascript";
        c && d && (f.integrity = d);
        this.crossOrigin && f.setAttribute("crossorigin", this.crossOrigin);
        document.getElementsByTagName("head")[0].appendChild(f);
        RegExp("^file://", "i").test(a) || e.mobileOnlineURL.push(a);
        b && (f.onload = f.onerror = function() {
            b()
        })
    };
    m.prototype.getRegionSet = function(a) {
        var b, c = e.userLocation,
            d = a.RuleSet.filter(function(u) {
                return !0 === u.Default
            });
        if (!c.country && !c.state) return d && 0 < d.length ? d[0] : null;
        d = c.state.toLowerCase();
        c = c.country.toLowerCase();
        for (var f = 0; f <
            a.RuleSet.length; f++)
            if (!0 === a.RuleSet[f].Global) var g = a.RuleSet[f];
            else {
                var k = a.RuleSet[f].States;
                if (k[c] && 0 <= k[c].indexOf(d)) {
                    var q = a.RuleSet[f];
                    break
                }
                0 <= a.RuleSet[f].Countries.indexOf(c) && (b = a.RuleSet[f])
            }
        return q || b || g
    };
    m.prototype.ensureHtmlGroupDataInitialised = function() {
        this.initializeIABData();
        this.initializeGroupData();
        this.initializeHostData();
        this.initializeGenVenData()
    };
    m.prototype.initializeGroupData = function() {
        var a = this.readCookieParam(e.optanonCookieName, "groups");
        a && (e.optanonHtmlGroupData =
            this.deserialiseStringToArray(a))
    };
    m.prototype.initializeHostData = function() {
        var a = this.readCookieParam(e.optanonCookieName, "hosts");
        a && (e.optanonHostData = this.deserialiseStringToArray(a))
    };
    m.prototype.initializeGenVenData = function() {
        var a = this.readCookieParam(e.optanonCookieName, "genVendors");
        a && (e.genVendorsData = this.deserialiseStringToArray(a))
    };
    m.prototype.initializeIABData = function() {
        this.validateIABGDPRApplied();
        this.validateIABGlobalScope()
    };
    m.prototype.validateIABGlobalScope = function() {
        var a =
            this.readCookieParam(e.optanonCookieName, e.oneTrustIsIABCrossConsentEnableParam);
        a ? "true" === a ? (e.hasIABGlobalScope = !0, e.isStubReady = !1) : (e.hasIABGlobalScope = !1, e.IABCookieValue = this.getCookie(e.oneTrustIABCookieName)) : e.isStubReady = !1
    };
    m.prototype.validateIABGDPRApplied = function() {
        var a = this.readCookieParam(e.optanonCookieName, e.geolocationCookiesParam).split(";")[0];
        a ? this.isBoolean(a) ? e.oneTrustIABgdprAppliesGlobally = "true" === a : e.oneTrustIABgdprAppliesGlobally = 0 <= e.EUCOUNTRIES.indexOf(a) : e.isStubReady = !1
    };
    m.prototype.isBoolean = function(a) {
        return "true" === a || "false" === a
    };
    m.prototype.readCookieParam = function(a, b) {
        if (a = this.getCookie(a)) {
            var c = {};
            var d = a.split("\x26");
            for (a = 0; a < d.length; a += 1) {
                var f = d[a].split("\x3d");
                c[decodeURIComponent(f[0])] = decodeURIComponent(f[1]).replace(/\+/g, " ")
            }
            return b && c[b] ? c[b] : b && !c[b] ? "" : c
        }
        return ""
    };
    m.prototype.getCookieNameSuffix = function() {
        return ("PRODUCTION" === this.scriptType || this.scriptType === O) && this.subDomainEnabled && this.domainHashValue ? "_" + this.domainHashValue :
            ""
    };
    m.prototype.getCookie = function(a) {
        if (this.isAmp) return (JSON.parse(window.localStorage.getItem(this.domainId)) || {})[a] || null;
        a = "" + a + this.getCookieNameSuffix() + "\x3d";
        for (var b = 0, c = document.cookie.split(";"); b < c.length; b++) {
            var d = c[b].trim();
            if (0 === d.indexOf(a)) return d.substring(a.length)
        }
        return null
    };
    m.prototype.updateGtmMacros = function() {
        for (var a = [], b = e.optanonHtmlGroupData.length, c = 0; c < b; c++) this.endsWith(e.optanonHtmlGroupData[c], ":1") && a.push(e.optanonHtmlGroupData[c].replace(":1", ""));
        b =
            e.optanonHostData.length;
        for (c = 0; c < b; c++) this.endsWith(e.optanonHostData[c], ":1") && a.push(e.optanonHostData[c].replace(":1", ""));
        b = e.genVendorsData.length;
        for (c = 0; c < b; c++) this.endsWith(e.genVendorsData[c], ":1") && a.push(e.genVendorsData[c].replace(":1", ""));
        b = e.vendorsServiceData.length;
        for (c = 0; c < b; c++) this.endsWith(e.vendorsServiceData[c], ":1") && a.push(e.vendorsServiceData[c].replace(":1", ""));
        var d;
        b = "," + this.serialiseArrayToString(a) + ",";
        c = (window.OnetrustActiveGroups = b, window.OptanonActiveGroups =
            b, window);
        var f = (this.otDataLayer.ignore || void 0 === c[this.otDataLayer.name] ? this.otDataLayer.ignore || (c[this.otDataLayer.name] = [{
            event: "OneTrustLoaded",
            OnetrustActiveGroups: b
        }, {
            event: "OptanonLoaded",
            OptanonActiveGroups: b
        }]) : c[this.otDataLayer.name].constructor === Array && (c[this.otDataLayer.name].push({
            event: "OneTrustLoaded",
            OnetrustActiveGroups: b
        }), c[this.otDataLayer.name].push({
            event: "OptanonLoaded",
            OptanonActiveGroups: b
        })), new CustomEvent("consent.onetrust", {
            detail: a
        }));
        !this.otDataLayer.ignore &&
            a.length && (c[this.otDataLayer.name].constructor === Array && c[this.otDataLayer.name].push({
                event: "OneTrustGroupsUpdated",
                OnetrustActiveGroups: b
            }), d = new CustomEvent("OneTrustGroupsUpdated", {
                detail: a
            }));
        setTimeout(function() {
            a.length && window.dispatchEvent(f);
            d && window.dispatchEvent(d)
        })
    };
    m.prototype.deserialiseStringToArray = function(a) {
        return a ? a.split(",") : []
    };
    m.prototype.endsWith = function(a, b) {
        return -1 !== a.indexOf(b, a.length - b.length)
    };
    m.prototype.serialiseArrayToString = function(a) {
        return a.toString()
    };
    m.prototype.getStubAttrOrQueryParam = function() {
        var a = e.stubScriptElement,
            b = a && a.getAttribute("data-dLayer-name");
        return b || (b = a && a.getAttribute("src"), this.getStubQueryParam(b, "data-dLayer-name"))
    };
    m.prototype.getStubQueryParam = function(a, b) {
        return !a || 2 > (a = a.split("?")).length ? null : (new URLSearchParams(a[1])).get(b)
    };
    m.prototype.setStubScriptElement = function() {
        e.stubScriptElement = document.querySelector("script[src*\x3d'" + e.stubFileName + "']");
        var a = e.stubScriptElement && e.stubScriptElement.getAttribute("src");
        a = a && this.getStubQueryParam(a, "did");
        e.stubScriptElement && e.stubScriptElement.hasAttribute(e.DATAFILEATTRIBUTE) ? this.domainId = e.stubScriptElement.getAttribute(e.DATAFILEATTRIBUTE).trim() : a ? this.domainId = a : e.stubScriptElement || (e.stubScriptElement = document.querySelector("script[src*\x3d'" + e.migratedCCTID + "']"), e.stubScriptElement && (e.isMigratedURL = !0, this.domainId = e.migratedDomainId.trim()))
    };
    m.prototype.setDomainDataFileURL = function() {
        var a = e.stubScriptElement.getAttribute("src"),
            b = -1 < a.indexOf("/consent");
        a && (e.isMigratedURL ? e.storageBaseURL = a.split("/consent/" + e.migratedCCTID)[0] : e.storageBaseURL = (b ? a.split("/consent") : a.split("/scripttemplates/" + e.stubFileName))[0]);
        this.storageBaseURL = e.storageBaseURL;
        this.isPreview && -1 === this.domainId.indexOf("test") ? this.domainId += "-test" : this.isPreview = !1;
        e.bannerBaseDataURL = e.storageBaseURL && e.storageBaseURL + "/consent/" + this.domainId;
        e.bannerDataParentURL = e.bannerBaseDataURL + "/" + this.domainId + ".json"
    };
    m.prototype.initCustomEventPolyfill = function() {
        function a(b,
            c) {
            c = c || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
            var d = document.createEvent("CustomEvent");
            return d.initCustomEvent(b, c.bubbles, c.cancelable, c.detail), d
        }
        "function" != typeof window.CustomEvent && (a.prototype = window.Event.prototype, window.CustomEvent = a)
    };
    m.prototype.removeTcf = function() {
        delete window.__tcfapi;
        var a = document.querySelectorAll("iframe[name\x3d'__tcfapiLocator']")[0];
        a && a.parentElement.removeChild(a)
    };
    m.prototype.getParamForIE = function() {
        return {
            get: function(a) {
                a = (new RegExp("[?\x26]" + a + "\x3d([^\x26#]*)")).exec(window.location.search);
                return null === a ? null : decodeURI(a[1]) || ""
            }
        }
    };
    m.prototype.getParam = function() {
        window.document.documentMode || !window.URLSearchParams ? this.urlParams = this.getParamForIE() : this.urlParams = new URLSearchParams(window.location.search);
        var a = "true" === this.urlParams.get("otreset"),
            b = "true" === this.urlParams.get("otpreview"),
            c = (this.geoFromUrl = (this.urlParams.get("otgeo") || "").toLowerCase(), this.readCookieParam("otpreview", "expiry")),
            d = this.readCookieParam("otpreview", N);
        this.isReset = a || c && new Date(c) < new Date;
        this.isPreview = !this.isReset && (b || c && new Date(c) > new Date);
        this.setGeoParam(this.geoFromUrl || d)
    };
    m.prototype.setGeoParam = function(a) {
        var b;
        a && ((b = window).OneTrust || (b.OneTrust = {}), a = a.split(","), b.OneTrust.geolocationResponse = {
            countryCode: a[0],
            stateCode: a[1]
        })
    };
    m.prototype.updateVersion = function(a) {
        "debug" !== this.buildType && "cybuild" !== this.buildType || (a.Version = "VERSION")
    };
    var h = m,
        D = new h;
    return n.OtSDKStub = h, n.otSdkStub = D, Object.defineProperty(n, "__esModule", {
        value: !0
    }), n
})({});