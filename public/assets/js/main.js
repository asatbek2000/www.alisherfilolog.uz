/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */ ! function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (C, e) {
    "use strict";
    var t = [],
        r = Object.getPrototypeOf,
        s = t.slice,
        g = t.flat ? function (e) {
            return t.flat.call(e)
        } : function (e) {
            return t.concat.apply([], e)
        },
        u = t.push,
        i = t.indexOf,
        n = {},
        o = n.toString,
        v = n.hasOwnProperty,
        a = v.toString,
        l = a.call(Object),
        y = {},
        m = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        x = function (e) {
            return null != e && e === e.window
        },
        E = C.document,
        c = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function b(e, t, n) {
        var r, i, o = (n = n || E).createElement("script");
        if (o.text = e, t)
            for (r in c)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }
    var f = "3.5.1",
        S = function (e, t) {
            return new S.fn.init(e, t)
        };

    function p(e) {
        var t = !!e && "length" in e && e.length,
            n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    S.fn = S.prototype = {
        jquery: f,
        constructor: S,
        length: 0,
        toArray: function () {
            return s.call(this)
        },
        get: function (e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function (e) {
            var t = S.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function (e) {
            return S.each(this, e)
        },
        map: function (n) {
            return this.pushStack(S.map(this, function (e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function () {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        even: function () {
            return this.pushStack(S.grep(this, function (e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function () {
            return this.pushStack(S.grep(this, function (e, t) {
                return t % 2
            }))
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    }, S.extend = S.fn.extend = function () {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, S.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () {},
        isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l)
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function (e, t, n) {
            b(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function (e, t) {
            var n, r = 0;
            if (p(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r])) break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        makeArray: function (e, t) {
            var n = t || [];
            return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
        },
        inArray: function (e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function (e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function (e, t, n) {
            var r, i, o = 0,
                a = [];
            if (p(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return g(a)
        },
        guid: 1,
        support: y
    }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var d = function (n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, S = "sizzle" + 1 * new Date,
            p = n.document,
            k = 0,
            r = 0,
            m = ue(),
            x = ue(),
            A = ue(),
            N = ue(),
            D = function (e, t) {
                return e === t && (l = !0), 0
            },
            j = {}.hasOwnProperty,
            t = [],
            q = t.pop,
            L = t.push,
            H = t.push,
            O = t.slice,
            P = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
            F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            B = new RegExp(M + "+", "g"),
            $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            _ = new RegExp("^" + M + "*," + M + "*"),
            z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp(M + "|>"),
            X = new RegExp(F),
            V = new RegExp("^" + I + "$"),
            G = {
                ID: new RegExp("^#(" + I + ")"),
                CLASS: new RegExp("^\\.(" + I + ")"),
                TAG: new RegExp("^(" + I + "|[*])"),
                ATTR: new RegExp("^" + W),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + R + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
            ne = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function (e, t) {
                return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            oe = function () {
                T()
            },
            ae = be(function (e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: t.length ? function (e, t) {
                    L.apply(e, O.call(t))
                } : function (e, t) {
                    var n = e.length,
                        r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }

        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument,
                p = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && (T(e), e = e || C, E)) {
                if (11 !== p && (u = Z.exec(t)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n
                        } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n
                    } else {
                        if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
                        if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n
                    } if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
                        (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h(t)).length;
                        while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
                        c = l.join(",")
                    }
                    try {
                        return H.apply(n, f.querySelectorAll(c)), n
                    } catch (e) {
                        N(t, !0)
                    } finally {
                        s === S && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace($, "$1"), e, n, r)
        }

        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
            }
        }

        function le(e) {
            return e[S] = !0, e
        }

        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function fe(e, t) {
            var n = e.split("|"),
                r = n.length;
            while (r--) b.attrHandle[n[r]] = t
        }

        function pe(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function de(t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function he(n) {
            return function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function ge(t) {
            return function (e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function ve(a) {
            return le(function (o) {
                return o = +o, le(function (e, t) {
                    var n, r = a([], e.length, o),
                        i = r.length;
                    while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ye(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        for (e in d = se.support = {}, i = se.isXML = function (e) {
                var t = e.namespaceURI,
                    n = (e.ownerDocument || e).documentElement;
                return !Y.test(t || n && n.nodeName || "HTML")
            }, T = se.setDocument = function (e) {
                var t, n, r = e ? e.ownerDocument || e : p;
                return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function (e) {
                    return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                }), d.attributes = ce(function (e) {
                    return e.className = "i", !e.getAttribute("className")
                }), d.getElementsByTagName = ce(function (e) {
                    return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
                }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) {
                    return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length
                }), d.getById ? (b.filter.ID = function (e) {
                    var t = e.replace(te, ne);
                    return function (e) {
                        return e.getAttribute("id") === t
                    }
                }, b.find.ID = function (e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (b.filter.ID = function (e) {
                    var n = e.replace(te, ne);
                    return function (e) {
                        var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }, b.find.ID = function (e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            i = t.getElementsByName(e), r = 0;
                            while (o = i[r++])
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), b.find.TAG = d.getElementsByTagName ? function (e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
                } : function (e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        while (n = o[i++]) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, b.find.CLASS = d.getElementsByClassName && function (e, t) {
                    if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e)
                }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) {
                    var t;
                    a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]")
                }), ce(function (e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = C.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) {
                    d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F)
                }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function (e, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === e) return !0;
                    return !1
                }, D = t ? function (e, t) {
                    if (e === t) return l = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
                } : function (e, t) {
                    if (e === t) return l = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                    if (i === o) return pe(e, t);
                    n = e;
                    while (n = n.parentNode) a.unshift(n);
                    n = t;
                    while (n = n.parentNode) s.unshift(n);
                    while (a[r] === s[r]) r++;
                    return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0
                }), C
            }, se.matches = function (e, t) {
                return se(e, null, null, t)
            }, se.matchesSelector = function (e, t) {
                if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
                    var n = c.call(e, t);
                    if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {
                    N(t, !0)
                }
                return 0 < se(t, C, null, [e]).length
            }, se.contains = function (e, t) {
                return (e.ownerDocument || e) != C && T(e), y(e, t)
            }, se.attr = function (e, t) {
                (e.ownerDocument || e) != C && T(e);
                var n = b.attrHandle[t.toLowerCase()],
                    r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
                return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, se.escape = function (e) {
                return (e + "").replace(re, ie)
            }, se.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, se.uniqueSort = function (e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) {
                    while (t = e[i++]) t === e[i] && (r = n.push(i));
                    while (r--) e.splice(n[r], 1)
                }
                return u = null, e
            }, o = se.getText = function (e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    while (t = e[r++]) n += o(t);
                return n
            }, (b = se.selectors = {
                cacheLength: 50,
                createPseudo: le,
                match: G,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (e) {
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                    },
                    PSEUDO: function (e) {
                        var t, n = !e[6] && e[2];
                        return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function () {
                            return !0
                        } : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function (e) {
                        var t = m[e + " "];
                        return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function (e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (n, r, i) {
                        return function (e) {
                            var t = se.attr(e, n);
                            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function (h, e, t, g, v) {
                        var y = "nth" !== h.slice(0, 3),
                            m = "last" !== h.slice(-4),
                            x = "of-type" === e;
                        return 1 === g && 0 === v ? function (e) {
                            return !!e.parentNode
                        } : function (e, t, n) {
                            var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                f = x && e.nodeName.toLowerCase(),
                                p = !n && !x,
                                d = !1;
                            if (c) {
                                if (y) {
                                    while (l) {
                                        a = e;
                                        while (a = a[l])
                                            if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                        u = l = "only" === h && !u && "nextSibling"
                                    }
                                    return !0
                                }
                                if (u = [m ? c.firstChild : c.lastChild], m && p) {
                                    d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s];
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if (1 === a.nodeType && ++d && a === e) {
                                            i[h] = [k, s, d];
                                            break
                                        }
                                } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d)
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
                                return (d -= v) === g || d % g == 0 && 0 <= d / g
                            }
                        }
                    },
                    PSEUDO: function (e, o) {
                        var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                        return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
                            var n, r = a(e, o),
                                i = r.length;
                            while (i--) e[n = P(e, r[i])] = !(t[n] = r[i])
                        }) : function (e) {
                            return a(e, 0, t)
                        }) : a
                    }
                },
                pseudos: {
                    not: le(function (e) {
                        var r = [],
                            i = [],
                            s = f(e.replace($, "$1"));
                        return s[S] ? le(function (e, t, n, r) {
                            var i, o = s(e, null, r, []),
                                a = e.length;
                            while (a--)(i = o[a]) && (e[a] = !(t[a] = i))
                        }) : function (e, t, n) {
                            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
                        }
                    }),
                    has: le(function (t) {
                        return function (e) {
                            return 0 < se(t, e).length
                        }
                    }),
                    contains: le(function (t) {
                        return t = t.replace(te, ne),
                            function (e) {
                                return -1 < (e.textContent || o(e)).indexOf(t)
                            }
                    }),
                    lang: le(function (n) {
                        return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
                            function (e) {
                                var t;
                                do {
                                    if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function (e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function (e) {
                        return e === a
                    },
                    focus: function (e) {
                        return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function (e) {
                        return !b.pseudos.empty(e)
                    },
                    header: function (e) {
                        return J.test(e.nodeName)
                    },
                    input: function (e) {
                        return Q.test(e.nodeName)
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: ve(function () {
                        return [0]
                    }),
                    last: ve(function (e, t) {
                        return [t - 1]
                    }),
                    eq: ve(function (e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: ve(function (e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: ve(function (e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: ve(function (e, t, n) {
                        for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                        return e
                    }),
                    gt: ve(function (e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = b.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) b.pseudos[e] = de(e);
        for (e in {
                submit: !0,
                reset: !0
            }) b.pseudos[e] = he(e);

        function me() {}

        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function be(s, e, t) {
            var u = e.dir,
                l = e.next,
                c = l || u,
                f = t && "parentNode" === c,
                p = r++;
            return e.first ? function (e, t, n) {
                while (e = e[u])
                    if (1 === e.nodeType || f) return s(e, t, n);
                return !1
            } : function (e, t, n) {
                var r, i, o, a = [k, p];
                if (n) {
                    while (e = e[u])
                        if ((1 === e.nodeType || f) && s(e, t, n)) return !0
                } else
                    while (e = e[u])
                        if (1 === e.nodeType || f)
                            if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
                            else {
                                if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2];
                                if ((i[c] = a)[2] = s(e, t, n)) return !0
                            } return !1
            }
        }

        function we(i) {
            return 1 < i.length ? function (e, t, n) {
                var r = i.length;
                while (r--)
                    if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function Ce(d, h, g, v, y, e) {
            return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), le(function (e, t, n, r) {
                var i, o, a, s = [],
                    u = [],
                    l = t.length,
                    c = e || function (e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []),
                    f = !d || !e && h ? c : Te(c, s, d, n, r),
                    p = g ? y || (e ? d : l || v) ? [] : t : f;
                if (g && g(f, p, n, r), v) {
                    i = Te(p, u), v(i, [], n, r), o = i.length;
                    while (o--)(a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
                }
                if (e) {
                    if (y || d) {
                        if (y) {
                            i = [], o = p.length;
                            while (o--)(a = p[o]) && i.push(f[o] = a);
                            y(null, p = [], i, r)
                        }
                        o = p.length;
                        while (o--)(a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p)
            })
        }

        function Ee(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function (e) {
                    return e === i
                }, a, !0), l = be(function (e) {
                    return -1 < P(i, e)
                }, a, !0), c = [function (e, t, n) {
                    var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                    return i = null, r
                }]; s < r; s++)
                if (t = b.relative[e[s].type]) c = [be(we(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type]) break;
                        return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
                    }
                    c.push(t)
                } return we(c)
        }
        return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function (e, t) {
            var n, r, i, o, a, s, u, l = x[e + " "];
            if (l) return t ? 0 : l.slice(0);
            a = e, s = [], u = b.preFilter;
            while (a) {
                for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
                        value: n,
                        type: r[0].replace($, " ")
                    }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
        }, f = se.compile = function (e, t) {
            var n, v, y, m, x, r, i = [],
                o = [],
                a = A[e + " "];
            if (!a) {
                t || (t = h(e)), n = t.length;
                while (n--)(a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
                (a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function (e, t, n, r, i) {
                    var o, a, s, u = 0,
                        l = "0",
                        c = e && [],
                        f = [],
                        p = w,
                        d = e || x && b.find.TAG("*", i),
                        h = k += null == p ? 1 : Math.random() || .1,
                        g = d.length;
                    for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0, t || o.ownerDocument == C || (T(o), n = !E);
                            while (s = v[a++])
                                if (s(o, t || C, n)) {
                                    r.push(o);
                                    break
                                } i && (k = h)
                        }
                        m && ((o = !s && o) && u--, e && c.push(o))
                    }
                    if (u += l, m && l !== u) {
                        a = 0;
                        while (s = y[a++]) s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                while (l--) c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f)
                        }
                        H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
                    }
                    return i && (k = h, w = p), c
                }, m ? le(r) : r))).selector = e
            }
            return a
        }, g = se.select = function (e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e,
                c = !r && h(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                i = G.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (a = o[i], b.relative[s = a.type]) break;
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
                        break
                    }
                }
            }
            return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n
        }, d.sortStable = S.split("").sort(D).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }), ce(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), d.attributes && ce(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || fe("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ce(function (e) {
            return null == e.getAttribute("disabled")
        }) || fe(R, function (e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), se
    }(C);
    S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;
    var h = function (e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && S(e).is(n)) break;
                    r.push(e)
                } return r
        },
        T = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        k = S.expr.match.needsContext;

    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function D(e, n, r) {
        return m(n) ? S.grep(e, function (e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? S.grep(e, function (e) {
            return e === n !== r
        }) : "string" != typeof n ? S.grep(e, function (e) {
            return -1 < i.call(n, e) !== r
        }) : S.filter(n, e, r)
    }
    S.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, S.fn.extend({
        find: function (e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(S(e).filter(function () {
                for (t = 0; t < r; t++)
                    if (S.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
            return 1 < r ? S.uniqueSort(n) : n
        },
        filter: function (e) {
            return this.pushStack(D(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(D(this, e || [], !0))
        },
        is: function (e) {
            return !!D(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length
        }
    });
    var j, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (S.fn.init = function (e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || j, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t))
                    for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this)
    }).prototype = S.fn, j = S(E);
    var L = /^(?:parents|prev(?:Until|All))/,
        H = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function O(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e
    }
    S.fn.extend({
        has: function (e) {
            var t = S(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++)
                    if (S.contains(this, t[e])) return !0
            })
        },
        closest: function (e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && S(e);
            if (!k.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        } return this.pushStack(1 < o.length ? S.uniqueSort(o) : o)
        },
        index: function (e) {
            return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), S.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return h(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return h(e, "parentNode", n)
        },
        next: function (e) {
            return O(e, "nextSibling")
        },
        prev: function (e) {
            return O(e, "previousSibling")
        },
        nextAll: function (e) {
            return h(e, "nextSibling")
        },
        prevAll: function (e) {
            return h(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return h(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return h(e, "previousSibling", n)
        },
        siblings: function (e) {
            return T((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return T(e.firstChild)
        },
        contents: function (e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes))
        }
    }, function (r, i) {
        S.fn[r] = function (e, t) {
            var n = S.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n)
        }
    });
    var P = /[^\x20\t\r\n\f]+/g;

    function R(e) {
        return e
    }

    function M(e) {
        throw e
    }

    function I(e, t, n, r) {
        var i;
        try {
            e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    S.Callbacks = function (r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function (e, t) {
            n[t] = !0
        }), n) : S.extend({}, r);
        var i, t, o, a, s = [],
            u = [],
            l = -1,
            c = function () {
                for (a = a || r.once, o = i = !0; u.length; l = -1) {
                    t = u.shift();
                    while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1)
                }
                r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
            },
            f = {
                add: function () {
                    return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
                        S.each(e, function (e, t) {
                            m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
                        })
                    }(arguments), t && !i && c()), this
                },
                remove: function () {
                    return S.each(arguments, function (e, t) {
                        var n;
                        while (-1 < (n = S.inArray(t, s, n))) s.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function (e) {
                    return e ? -1 < S.inArray(e, s) : 0 < s.length
                },
                empty: function () {
                    return s && (s = []), this
                },
                disable: function () {
                    return a = u = [], s = t = "", this
                },
                disabled: function () {
                    return !s
                },
                lock: function () {
                    return a = u = [], t || i || (s = t = ""), this
                },
                locked: function () {
                    return !!a
                },
                fireWith: function (e, t) {
                    return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
                },
                fire: function () {
                    return f.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!o
                }
            };
        return f
    }, S.extend({
        Deferred: function (e) {
            var o = [
                    ["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
                    ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                a = {
                    state: function () {
                        return i
                    },
                    always: function () {
                        return s.done(arguments).fail(arguments), this
                    },
                    "catch": function (e) {
                        return a.then(null, e)
                    },
                    pipe: function () {
                        var i = arguments;
                        return S.Deferred(function (r) {
                            S.each(o, function (e, t) {
                                var n = m(i[t[4]]) && i[t[4]];
                                s[t[1]](function () {
                                    var e = n && n.apply(this, arguments);
                                    e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    },
                    then: function (t, n, r) {
                        var u = 0;

                        function l(i, o, a, s) {
                            return function () {
                                var n = this,
                                    r = arguments,
                                    e = function () {
                                        var e, t;
                                        if (!(i < u)) {
                                            if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                                        }
                                    },
                                    t = s ? e : function () {
                                        try {
                                            e()
                                        } catch (e) {
                                            S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r))
                                        }
                                    };
                                i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t))
                            }
                        }
                        return S.Deferred(function (e) {
                            o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M))
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? S.extend(e, a) : a
                    }
                },
                s = {};
            return S.each(o, function (e, t) {
                var n = t[2],
                    r = t[5];
                a[t[1]] = n.add, r && n.add(function () {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        },
        when: function (e) {
            var n = arguments.length,
                t = n,
                r = Array(t),
                i = s.call(arguments),
                o = S.Deferred(),
                a = function (t) {
                    return function (e) {
                        r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i)
                    }
                };
            if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
            while (t--) I(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    S.Deferred.exceptionHook = function (e, t) {
        C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, S.readyException = function (e) {
        C.setTimeout(function () {
            throw e
        })
    };
    var F = S.Deferred();

    function B() {
        E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready()
    }
    S.fn.ready = function (e) {
        return F.then(e)["catch"](function (e) {
            S.readyException(e)
        }), this
    }, S.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (e) {
            (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S])
        }
    }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
    var $ = function (e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === w(n))
                for (s in i = !0, n) $(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
                    return l.call(S(e), n)
                })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        _ = /^-ms-/,
        z = /-([a-z])/g;

    function U(e, t) {
        return t.toUpperCase()
    }

    function X(e) {
        return e.replace(_, "ms-").replace(z, U)
    }
    var V = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function G() {
        this.expando = S.expando + G.uid++
    }
    G.uid = 1, G.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function (e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[X(t)] = n;
            else
                for (r in t) i[X(r)] = t[r];
            return i
        },
        get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
        },
        access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function (e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;
                    while (n--) delete r[t[n]]
                }(void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !S.isEmptyObject(t)
        }
    };
    var Y = new G,
        Q = new G,
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        K = /[A-Z]/g;

    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                Q.set(e, t, n)
            } else n = void 0;
        return n
    }
    S.extend({
        hasData: function (e) {
            return Q.hasData(e) || Y.hasData(e)
        },
        data: function (e, t, n) {
            return Q.access(e, t, n)
        },
        removeData: function (e, t) {
            Q.remove(e, t)
        },
        _data: function (e, t, n) {
            return Y.access(e, t, n)
        },
        _removeData: function (e, t) {
            Y.remove(e, t)
        }
    }), S.fn.extend({
        data: function (n, e) {
            var t, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
                    Y.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function () {
                Q.set(this, n)
            }) : $(this, function (e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                this.each(function () {
                    Q.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function (e) {
            return this.each(function () {
                Q.remove(this, e)
            })
        }
    }), S.extend({
        queue: function (e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = S.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = S._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
                S.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                empty: S.Callbacks("once memory").add(function () {
                    Y.remove(e, [t + "queue", n])
                })
            })
        }
    }), S.fn.extend({
        queue: function (t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function () {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                S.dequeue(this, e)
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
            var n, r = 1,
                i = S.Deferred(),
                o = this,
                a = this.length,
                s = function () {
                    --r || i.resolveWith(o, [o])
                };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--)(n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        re = E.documentElement,
        ie = function (e) {
            return S.contains(e.ownerDocument, e)
        },
        oe = {
            composed: !0
        };
    re.getRootNode && (ie = function (e) {
        return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
    });
    var ae = function (e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display")
    };

    function se(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function () {
                return r.cur()
            } : function () {
                return S.css(e, t, "")
            },
            u = s(),
            l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while (a--) S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, S.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var ue = {};

    function le(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));
        for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    S.fn.extend({
        show: function () {
            return le(this, !0)
        },
        hide: function () {
            return le(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                ae(this) ? S(this).show() : S(this).hide()
            })
        }
    });
    var ce, fe, pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i;
    ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild;
    var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function ve(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n
    }

    function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;

    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
            a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0];
            while (c--) a = a.lastChild;
            S.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0;
        while (o = p[d++])
            if (r && -1 < S.inArray(o, r)) i && i.push(o);
            else if (l = ie(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
            c = 0;
            while (o = a[c++]) he.test(o.type || "") && n.push(o)
        }
        return f
    }
    var be = /^key/,
        we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Te = /^([^.]*)(?:\.(.+)|)/;

    function Ce() {
        return !0
    }

    function Ee() {
        return !1
    }

    function Se(e, t) {
        return e === function () {
            try {
                return E.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function ke(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) ke(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ee;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function (e) {
            return S().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = S.guid++)), e.each(function () {
            S.event.add(this, t, i, r, n)
        })
    }

    function Ae(e, i, o) {
        o ? (Y.set(e, i, !1), S.event.add(e, i, {
            namespace: !1,
            handler: function (e) {
                var t, n, r = Y.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)(S.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value
                } else r.length && (Y.set(this, i, {
                    value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === Y.get(e, i) && S.event.add(e, i, Ce)
    }
    S.event = {
        global: {},
        add: function (t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.get(t);
            if (V(t)) {
                n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function (e) {
                    return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
                }), l = (e = (e || "").match(P) || [""]).length;
                while (l--) d = g = (s = Te.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && S.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0)
            }
        },
        remove: function (e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(P) || [""]).length;
                while (l--)
                    if (d = g = (s = Te.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                        f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                        while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), delete u[d])
                    } else
                        for (d in u) S.event.remove(e, d + t[l], n, r, !0);
                S.isEmptyObject(u) && Y.remove(e, "handle events")
            }
        },
        dispatch: function (e) {
            var t, n, r, i, o, a, s = new Array(arguments.length),
                u = S.event.fix(e),
                l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
                c = S.event.special[u.type] || {};
            for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                a = S.event.handlers.call(this, u, l), t = 0;
                while ((i = a[t++]) && !u.isPropagationStopped()) {
                    u.currentTarget = i.elem, n = 0;
                    while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, u), u.result
            }
        },
        handlers: function (e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    } return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s
        },
        addProp: function (t, e) {
            Object.defineProperty(S.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e) ? function () {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function (e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function (e) {
            return e[S.expando] ? e : new S.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function (e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click", Ce), !1
                },
                trigger: function (e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click"), !0
                },
                _default: function (e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, S.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, S.Event = function (e, t) {
        if (!(this instanceof S.Event)) return new S.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Ee, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0
    }, S.Event.prototype = {
        constructor: S.Event,
        isDefaultPrevented: Ee,
        isPropagationStopped: Ee,
        isImmediatePropagationStopped: Ee,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ce, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = Ce, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ce, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, S.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
            var t = e.button;
            return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, S.event.addProp), S.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        S.event.special[e] = {
            setup: function () {
                return Ae(this, e, Se), !1
            },
            trigger: function () {
                return Ae(this, e), !0
            },
            delegateType: t
        }
    }), S.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, i) {
        S.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function (e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), S.fn.extend({
        on: function (e, t, n, r) {
            return ke(this, e, t, n, r)
        },
        one: function (e, t, n, r) {
            return ke(this, e, t, n, r, 1)
        },
        off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ee), this.each(function () {
                S.event.remove(this, e, n, t)
            })
        }
    });
    var Ne = /<script|<style|<link/i,
        De = /checked\s*(?:[^=]|=\s*.checked.)/i,
        je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function qe(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
    }

    function Le(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function He(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Oe(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events))
                for (i in Y.remove(t, "handle events"), s)
                    for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
            Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a))
        }
    }

    function Pe(n, r, i, o) {
        r = g(r);
        var e, t, a, s, u, l, c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = m(d);
        if (h || 1 < f && "string" == typeof d && !y.checkClone && De.test(d)) return n.each(function (e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), Pe(t, r, i, o)
        });
        if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = S.map(ve(e, "script"), Le)).length; c < f; c++) u = e, c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument, S.map(a, He), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
                    nonce: u.nonce || u.getAttribute("nonce")
                }, l) : b(u.textContent.replace(je, ""), u, l))
        }
        return n
    }

    function Re(e, t, n) {
        for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    S.extend({
        htmlPrefilter: function (e) {
            return e
        },
        clone: function (e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0),
                f = ie(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Oe(o[r], a[r]);
                else Oe(e, c);
            return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
        },
        cleanData: function (e) {
            for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) {
                    if (t = n[Y.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0
                    }
                    n[Q.expando] && (n[Q.expando] = void 0)
                }
        }
    }), S.fn.extend({
        detach: function (e) {
            return Re(this, e, !0)
        },
        remove: function (e) {
            return Re(this, e)
        },
        text: function (e) {
            return $(this, function (e) {
                return void 0 === e ? S.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function () {
            return Pe(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e).appendChild(e)
            })
        },
        prepend: function () {
            return Pe(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = qe(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return Pe(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return Pe(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(ve(e, !1)), e.textContent = "");
            return this
        },
        clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return S.clone(this, e, t)
            })
        },
        html: function (e) {
            return $(this, function (e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ne.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = S.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var n = [];
            return Pe(this, arguments, function (e) {
                var t = this.parentNode;
                S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), S.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, a) {
        S.fn[e] = function (e) {
            for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Ie = function (e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = C), t.getComputedStyle(e)
        },
        We = function (e, t, n) {
            var r, i, o = {};
            for (i in t) o[i] = e.style[i], e.style[i] = t[i];
            for (i in r = n.call(e), t) e.style[i] = o[i];
            return r
        },
        Fe = new RegExp(ne.join("|"), "i");

    function Be(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Ie(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), !y.pixelBoxStyles() && Me.test(a) && Fe.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function $e(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function () {
        function e() {
            if (l) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);
                var e = C.getComputedStyle(l);
                n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null
            }
        }

        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, i, o, a, s, u = E.createElement("div"),
            l = E.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(y, {
            boxSizingReliable: function () {
                return e(), r
            },
            pixelBoxStyles: function () {
                return e(), o
            },
            pixelPosition: function () {
                return e(), n
            },
            reliableMarginLeft: function () {
                return e(), s
            },
            scrollboxSize: function () {
                return e(), i
            },
            reliableTrDimensions: function () {
                var e, t, n, r;
                return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", t.style.height = "1px", n.style.height = "9px", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = 3 < parseInt(r.height), re.removeChild(e)), a
            }
        }))
    }();
    var _e = ["Webkit", "Moz", "ms"],
        ze = E.createElement("div").style,
        Ue = {};

    function Xe(e) {
        var t = S.cssProps[e] || Ue[e];
        return t || (e in ze ? e : Ue[e] = function (e) {
            var t = e[0].toUpperCase() + e.slice(1),
                n = _e.length;
            while (n--)
                if ((e = _e[n] + t) in ze) return e
        }(e) || e)
    }
    var Ve = /^(none|table(?!-c[ea]).+)/,
        Ge = /^--/,
        Ye = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Qe = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function Je(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Ke(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
    }

    function Ze(e, t, n) {
        var r = Ie(e),
            i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
            o = i,
            a = Be(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Me.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }

    function et(e, t, n, r, i) {
        return new et.prototype.init(e, t, n, r, i)
    }
    S.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Be(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = X(t),
                    u = Ge.test(t),
                    l = e.style;
                if (u || (t = Xe(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function (e, t, n, r) {
            var i, o, a, s = X(t);
            return Ge.test(t) || (t = Xe(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Be(e, t, r)), "normal" === i && t in Qe && (i = Qe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), S.each(["height", "width"], function (e, u) {
        S.cssHooks[u] = {
            get: function (e, t, n) {
                if (t) return !Ve.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, u, n) : We(e, Ye, function () {
                    return Ze(e, u, n)
                })
            },
            set: function (e, t, n) {
                var r, i = Ie(e),
                    o = !y.scrollboxSize() && "absolute" === i.position,
                    a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
                    s = n ? Ke(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ke(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Je(0, t, s)
            }
        }
    }), S.cssHooks.marginLeft = $e(y.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {
            marginLeft: 0
        }, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), S.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (i, o) {
        S.cssHooks[i + o] = {
            expand: function (e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, "margin" !== i && (S.cssHooks[i + o].set = Je)
    }), S.fn.extend({
        css: function (e, t) {
            return $(this, function (e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = Ie(e), i = t.length; a < i; a++) o[t[a]] = S.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((S.Tween = et).prototype = {
        constructor: et,
        init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = et.propHooks[this.prop];
            return e && e.get ? e.get(this) : et.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = et.propHooks[this.prop];
            return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this
        }
    }).init.prototype = et.prototype, (et.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function (e) {
                S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = et.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, S.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, S.fx = et.prototype.init, S.fx.step = {};
    var tt, nt, rt, it, ot = /^(?:toggle|show|hide)$/,
        at = /queueHooks$/;

    function st() {
        nt && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(st) : C.setTimeout(st, S.fx.interval), S.fx.tick())
    }

    function ut() {
        return C.setTimeout(function () {
            tt = void 0
        }), tt = Date.now()
    }

    function lt(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function ct(e, t, n) {
        for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function ft(o, e, t) {
        var n, a, r = 0,
            i = ft.prefilters.length,
            s = S.Deferred().always(function () {
                delete u.elem
            }),
            u = function () {
                if (a) return !1;
                for (var e = tt || ut(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
                return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
            },
            l = s.promise({
                elem: o,
                props: S.extend({}, e),
                opts: S.extend(!0, {
                    specialEasing: {},
                    easing: S.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: tt || ut(),
                duration: t.duration,
                tweens: [],
                createTween: function (e, t) {
                    var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(n), n
                },
                stop: function (e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) l.tweens[t].run(1);
                    return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
                }
            }),
            c = l.props;
        for (! function (e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, l.opts.specialEasing); r < i; r++)
            if (n = ft.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return S.map(c, ct, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })), l
    }
    S.Animation = S.extend(ft, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, te.exec(t), n), n
            }]
        },
        tweener: function (e, t) {
            m(e) ? (t = e, e = ["*"]) : e = e.match(P);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t)
        },
        prefilters: [function (e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                p = this,
                d = {},
                h = e.style,
                g = e.nodeType && ae(e),
                v = Y.get(e, "fxshow");
            for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
                    a.unqueued || s()
                }), a.unqueued++, p.always(function () {
                    p.always(function () {
                        a.unqueued--, S.queue(e, "fx").length || a.empty.fire()
                    })
                })), t)
                if (i = t[r], ot.test(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r]) continue;
                        g = !0
                    }
                    d[r] = v && v[r] || S.style(e, r)
                } if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function () {
                        h.display = l
                    }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                    })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
                    display: l
                }), o && (v.hidden = !g), g && le([e], !0), p.done(function () {
                    for (r in g || le([e]), Y.remove(e, "fxshow"), d) S.style(e, r, d[r])
                })), u = ct(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
        }],
        prefilter: function (e, t) {
            t ? ft.prefilters.unshift(e) : ft.prefilters.push(e)
        }
    }), S.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? S.extend({}, e) : {
            complete: n || !n && t || m(e) && e,
            duration: e,
            easing: n && t || t && !m(t) && t
        };
        return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue)
        }, r
    }, S.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function (t, e, n, r) {
            var i = S.isEmptyObject(t),
                o = S.speed(e, n, r),
                a = function () {
                    var e = ft(this, S.extend({}, t), o);
                    (i || Y.get(this, "finish")) && e.stop(!0)
                };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function (i, e, o) {
            var a = function (e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function () {
                var e = !0,
                    t = null != i && i + "queueHooks",
                    n = S.timers,
                    r = Y.get(this);
                if (t) r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && at.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || S.dequeue(this, i)
            })
        },
        finish: function (a) {
            return !1 !== a && (a = a || "fx"), this.each(function () {
                var e, t = Y.get(this),
                    n = t[a + "queue"],
                    r = t[a + "queueHooks"],
                    i = S.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), S.each(["toggle", "show", "hide"], function (e, r) {
        var i = S.fn[r];
        S.fn[r] = function (e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(lt(r, !0), e, t, n)
        }
    }), S.each({
        slideDown: lt("show"),
        slideUp: lt("hide"),
        slideToggle: lt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (e, r) {
        S.fn[e] = function (e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), S.timers = [], S.fx.tick = function () {
        var e, t = 0,
            n = S.timers;
        for (tt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || S.fx.stop(), tt = void 0
    }, S.fx.timer = function (e) {
        S.timers.push(e), S.fx.start()
    }, S.fx.interval = 13, S.fx.start = function () {
        nt || (nt = !0, st())
    }, S.fx.stop = function () {
        nt = null
    }, S.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, S.fn.delay = function (r, e) {
        return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function () {
                C.clearTimeout(n)
            }
        })
    }, rt = E.createElement("input"), it = E.createElement("select").appendChild(E.createElement("option")), rt.type = "checkbox", y.checkOn = "" !== rt.value, y.optSelected = it.selected, (rt = E.createElement("input")).value = "t", rt.type = "radio", y.radioValue = "t" === rt.value;
    var pt, dt = S.expr.attrHandle;
    S.fn.extend({
        attr: function (e, t) {
            return $(this, S.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function (e) {
            return this.each(function () {
                S.removeAttr(this, e)
            })
        }
    }), S.extend({
        attr: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!y.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function (e, t) {
            var n, r = 0,
                i = t && t.match(P);
            if (i && 1 === e.nodeType)
                while (n = i[r++]) e.removeAttribute(n)
        }
    }), pt = {
        set: function (e, t, n) {
            return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var a = dt[t] || S.find.attr;
        dt[t] = function (e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = dt[o], dt[o] = r, r = null != a(e, t, n) ? o : null, dt[o] = i), r
        }
    });
    var ht = /^(?:input|select|textarea|button)$/i,
        gt = /^(?:a|area)$/i;

    function vt(e) {
        return (e.match(P) || []).join(" ")
    }

    function yt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function mt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
    }
    S.fn.extend({
        prop: function (e, t) {
            return $(this, S.prop, e, t, 1 < arguments.length)
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[S.propFix[e] || e]
            })
        }
    }), S.extend({
        prop: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = S.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), y.optSelected || (S.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        S.propFix[this.toLowerCase()] = this
    }), S.fn.extend({
        addClass: function (t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function (e) {
                S(this).addClass(t.call(this, e, yt(this)))
            });
            if ((e = mt(t)).length)
                while (n = this[u++])
                    if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    } return this
        },
        removeClass: function (t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function (e) {
                S(this).removeClass(t.call(this, e, yt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = mt(t)).length)
                while (n = this[u++])
                    if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = e[a++])
                            while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    } return this
        },
        toggleClass: function (i, t) {
            var o = typeof i,
                a = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function (e) {
                S(this).toggleClass(i.call(this, e, yt(this), t), t)
            }) : this.each(function () {
                var e, t, n, r;
                if (a) {
                    t = 0, n = S(this), r = mt(i);
                    while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e)
                } else void 0 !== i && "boolean" !== o || ((e = yt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""))
            })
        },
        hasClass: function (e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + vt(yt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var xt = /\r/g;
    S.fn.extend({
        val: function (n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = m(n), this.each(function (e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function (e) {
                    return null == e ? "" : e + ""
                })), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(xt, "") : null == e ? "" : e : void 0
        }
    }), S.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = S.find.attr(e, "value");
                    return null != t ? t : vt(S.text(e))
                }
            },
            select: {
                get: function (e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = S(n).val(), a) return t;
                            s.push(t)
                        } return s
                },
                set: function (e, t) {
                    var n, r, i = e.options,
                        o = S.makeArray(t),
                        a = i.length;
                    while (a--)((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), S.each(["radio", "checkbox"], function () {
        S.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t)
            }
        }, y.checkOn || (S.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), y.focusin = "onfocusin" in C;
    var bt = /^(?:focusinfocus|focusoutblur)$/,
        wt = function (e) {
            e.stopPropagation()
        };
    S.extend(S.event, {
        trigger: function (e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || E],
                d = v.call(e, "type") ? e.type : e,
                h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !bt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, wt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, wt), S.event.triggered = void 0, a && (n[u] = a)), e.result
            }
        },
        simulate: function (e, t, n) {
            var r = S.extend(new S.Event, n, {
                type: e,
                isSimulated: !0
            });
            S.event.trigger(r, null, t)
        }
    }), S.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                S.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return S.event.trigger(e, t, n, !0)
        }
    }), y.focusin || S.each({
        focus: "focusin",
        blur: "focusout"
    }, function (n, r) {
        var i = function (e) {
            S.event.simulate(r, e.target, S.event.fix(e))
        };
        S.event.special[r] = {
            setup: function () {
                var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r);
                t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1)
            },
            teardown: function () {
                var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r) - 1;
                t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r))
            }
        }
    });
    var Tt = C.location,
        Ct = {
            guid: Date.now()
        },
        Et = /\?/;
    S.parseXML = function (e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e), t
    };
    var St = /\[\]$/,
        kt = /\r?\n/g,
        At = /^(?:submit|button|image|reset|file)$/i,
        Nt = /^(?:input|select|textarea|keygen)/i;

    function Dt(n, e, r, i) {
        var t;
        if (Array.isArray(e)) S.each(e, function (e, t) {
            r || St.test(n) ? i(n, t) : Dt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
        });
        else if (r || "object" !== w(e)) i(n, e);
        else
            for (t in e) Dt(n + "[" + t + "]", e[t], r, i)
    }
    S.param = function (e, t) {
        var n, r = [],
            i = function (e, t) {
                var n = m(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function () {
            i(this.name, this.value)
        });
        else
            for (n in e) Dt(n, e[n], t, i);
        return r.join("&")
    }, S.fn.extend({
        serialize: function () {
            return S.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = S.prop(this, "elements");
                return e ? S.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !S(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !pe.test(e))
            }).map(function (e, t) {
                var n = S(this).val();
                return null == n ? null : Array.isArray(n) ? S.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(kt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(kt, "\r\n")
                }
            }).get()
        }
    });
    var jt = /%20/g,
        qt = /#.*$/,
        Lt = /([?&])_=[^&]*/,
        Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ot = /^(?:GET|HEAD)$/,
        Pt = /^\/\//,
        Rt = {},
        Mt = {},
        It = "*/".concat("*"),
        Wt = E.createElement("a");

    function Ft(o) {
        return function (e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0,
                i = e.toLowerCase().match(P) || [];
            if (m(t))
                while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function Bt(t, i, o, a) {
        var s = {},
            u = t === Mt;

        function l(e) {
            var r;
            return s[e] = !0, S.each(t[e] || [], function (e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
            }), r
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }

    function $t(e, t) {
        var n, r, i = S.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && S.extend(!0, e, r), e
    }
    Wt.href = Tt.href, S.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Tt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": It,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": S.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? $t($t(e, S.ajaxSettings), t) : $t(S.ajaxSettings, e)
        },
        ajaxPrefilter: Ft(Rt),
        ajaxTransport: Ft(Mt),
        ajax: function (e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, f, p, n, d, r, h, g, i, o, v = S.ajaxSetup({}, t),
                y = v.context || v,
                m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
                x = S.Deferred(),
                b = S.Callbacks("once memory"),
                w = v.statusCode || {},
                a = {},
                s = {},
                u = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (h) {
                            if (!n) {
                                n = {};
                                while (t = Ht.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
                            }
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function () {
                        return h ? p : null
                    },
                    setRequestHeader: function (e, t) {
                        return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return null == h && (v.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (h) T.always(e[T.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function (e) {
                        var t = e || u;
                        return c && c.abort(t), l(0, t), this
                    }
                };
            if (x.promise(T), v.url = ((e || v.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""], null == v.crossDomain) {
                r = E.createElement("a");
                try {
                    r.href = v.url, r.href = r.href, v.crossDomain = Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host
                } catch (e) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Bt(Rt, v, t, T), h) return T;
            for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Ot.test(v.type), f = v.url.replace(qt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(jt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (Et.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Lt, "$1"), o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o), v.url = f + o), v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + It + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
            if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Bt(Mt, v, t, T)) {
                if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
                v.async && 0 < v.timeout && (d = C.setTimeout(function () {
                    T.abort("timeout")
                }, v.timeout));
                try {
                    h = !1, c.send(a, l)
                } catch (e) {
                    if (h) throw e;
                    l(-1, e)
                }
            } else l(-1, "No Transport");

            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
                    var r, i, o, a, s = e.contents,
                        u = e.dataTypes;
                    while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            } if (u[0] in n) o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o]
                }(v, T, n)), !i && -1 < S.inArray("script", v.dataTypes) && (v.converters["text script"] = function () {}), s = function (e, t, n, r) {
                    var i, o, a, s, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) {
                        if (!(a = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                    !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                    break
                                } if (!0 !== a)
                            if (a && e["throws"]) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + u + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function (e, t, n) {
            return S.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return S.get(e, void 0, t, "script")
        }
    }), S.each(["get", "post"], function (e, i) {
        S[i] = function (e, t, n, r) {
            return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, S.isPlainObject(e) && e))
        }
    }), S.ajaxPrefilter(function (e) {
        var t;
        for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }), S._evalUrl = function (e, t, n) {
        return S.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function () {}
            },
            dataFilter: function (e) {
                S.globalEval(e, t, n)
            }
        })
    }, S.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function (n) {
            return m(n) ? this.each(function (e) {
                S(this).wrapInner(n.call(this, e))
            }) : this.each(function () {
                var e = S(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function (t) {
            var n = m(t);
            return this.each(function (e) {
                S(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                S(this).replaceWith(this.childNodes)
            }), this
        }
    }), S.expr.pseudos.hidden = function (e) {
        return !S.expr.pseudos.visible(e)
    }, S.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, S.ajaxSettings.xhr = function () {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    };
    var _t = {
            0: 200,
            1223: 204
        },
        zt = S.ajaxSettings.xhr();
    y.cors = !!zt && "withCredentials" in zt, y.ajax = zt = !!zt, S.ajaxTransport(function (i) {
        var o, a;
        if (y.cors || zt && !i.crossDomain) return {
            send: function (e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                    for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function (e) {
                    return function () {
                        o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(_t[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                            binary: r.response
                        } : {
                            text: r.responseText
                        }, r.getAllResponseHeaders()))
                    }
                }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
                    4 === r.readyState && C.setTimeout(function () {
                        o && a()
                    })
                }, o = o("abort");
                try {
                    r.send(i.hasContent && i.data || null)
                } catch (e) {
                    if (o) throw e
                }
            },
            abort: function () {
                o && o()
            }
        }
    }), S.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), S.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (e) {
                return S.globalEval(e), e
            }
        }
    }), S.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), S.ajaxTransport("script", function (n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function (e, t) {
                r = S("<script>").attr(n.scriptAttrs || {}).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", i = function (e) {
                    r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), E.head.appendChild(r[0])
            },
            abort: function () {
                i && i()
            }
        }
    });
    var Ut, Xt = [],
        Vt = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Xt.pop() || S.expando + "_" + Ct.guid++;
            return this[e] = !0, e
        }
    }), S.ajaxPrefilter("json jsonp", function (e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Vt, "$1" + r) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
            return o || S.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", i = C[r], C[r] = function () {
            o = arguments
        }, n.always(function () {
            void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Xt.push(r)), o && m(i) && i(o[0]), o = i = void 0
        }), "script"
    }), y.createHTMLDocument = ((Ut = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), S.parseHTML = function (e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes)));
        var r, i, o
    }, S.fn.load = function (e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return -1 < s && (r = vt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && S.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e)
        }).always(n && function (e, t) {
            a.each(function () {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, S.expr.pseudos.animated = function (t) {
        return S.grep(S.timers, function (e) {
            return t === e.elem
        }).length
    }, S.offset = {
        setOffset: function (e, t, n) {
            var r, i, o, a, s, u, l = S.css(e, "position"),
                c = S(e),
                f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), c.css(f))
        }
    }, S.fn.extend({
        offset: function (t) {
            if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                S.offset.setOffset(this, t, e)
            });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function () {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - S.css(r, "marginTop", !0),
                    left: t.left - i.left - S.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent;
                while (e && "static" === S.css(e, "position")) e = e.offsetParent;
                return e || re
            })
        }
    }), S.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (t, i) {
        var o = "pageYOffset" === i;
        S.fn[t] = function (e) {
            return $(this, function (e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), S.each(["top", "left"], function (e, n) {
        S.cssHooks[n] = $e(y.pixelPosition, function (e, t) {
            if (t) return t = Be(e, n), Me.test(t) ? S(e).position()[n] + "px" : t
        })
    }), S.each({
        Height: "height",
        Width: "width"
    }, function (a, s) {
        S.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function (r, o) {
            S.fn[o] = function (e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return $(this, function (e, t, n) {
                    var r;
                    return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        S.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), S.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
        S.fn[n] = function (e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    });
    var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    S.proxy = function (e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function () {
            return e.apply(t || this, r.concat(s.call(arguments)))
        }).guid = e.guid = e.guid || S.guid++, i
    }, S.holdReady = function (e) {
        e ? S.readyWait++ : S.ready(!0)
    }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function (e) {
        var t = S.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, S.trim = function (e) {
        return null == e ? "" : (e + "").replace(Gt, "")
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return S
    });
    var Yt = C.jQuery,
        Qt = C.$;
    return S.noConflict = function (e) {
        return C.$ === S && (C.$ = Qt), e && C.jQuery === S && (C.jQuery = Yt), S
    }, "undefined" == typeof e && (C.jQuery = C.$ = S), S
});


!function(e){function t(a,n){return this instanceof t?(e.isPlainObject(a)?n=a:(n=n||{},n.alias=a),this.el=void 0,this.opts=e.extend(!0,{},this.defaults,n),this.maskset=void 0,this.noMasksCache=n&&void 0!==n.definitions,this.userOptions=n||{},this.events={},this.dataAttribute="data-inputmask",this.isRTL=this.opts.numericInput,void i(this.opts.alias,n,this.opts)):new t(a,n)}function i(t,a,n){var r=n.aliases[t];return r?(r.alias&&i(r.alias,void 0,n),e.extend(!0,n,r),e.extend(!0,n,a),!0):(null===n.mask&&(n.mask=t),!1)}function a(i,a){function n(i,n,r){if(null!==i&&""!==i){if(1===i.length&&r.greedy===!1&&0!==r.repeat&&(r.placeholder=""),r.repeat>0||"*"===r.repeat||"+"===r.repeat){var o="*"===r.repeat?0:"+"===r.repeat?1:r.repeat;i=r.groupmarker.start+i+r.groupmarker.end+r.quantifiermarker.start+o+","+r.repeat+r.quantifiermarker.end}var s;return void 0===t.prototype.masksCache[i]||a===!0?(s={mask:i,maskToken:t.prototype.analyseMask(i,r),validPositions:{},_buffer:void 0,buffer:void 0,tests:{},metadata:n,maskLength:void 0},a!==!0&&(t.prototype.masksCache[r.numericInput?i.split("").reverse().join(""):i]=s,s=e.extend(!0,{},t.prototype.masksCache[r.numericInput?i.split("").reverse().join(""):i]))):s=e.extend(!0,{},t.prototype.masksCache[r.numericInput?i.split("").reverse().join(""):i]),s}}var r;if(e.isFunction(i.mask)&&(i.mask=i.mask(i)),e.isArray(i.mask)){if(i.mask.length>1){i.keepStatic=null===i.keepStatic||i.keepStatic;var o=i.groupmarker.start;return e.each(i.numericInput?i.mask.reverse():i.mask,function(t,a){o.length>1&&(o+=i.groupmarker.end+i.alternatormarker+i.groupmarker.start),o+=void 0===a.mask||e.isFunction(a.mask)?a:a.mask}),o+=i.groupmarker.end,n(o,i.mask,i)}i.mask=i.mask.pop()}return i.mask&&(r=void 0===i.mask.mask||e.isFunction(i.mask.mask)?n(i.mask,i.mask,i):n(i.mask.mask,i.mask,i)),r}function n(i,a,r){function c(e,t,i){t=t||0;var a,n,o,s=[],l=0,u=f();V=void 0!==W?W.maxLength:void 0,V===-1&&(V=void 0);do e===!0&&p().validPositions[l]?(o=p().validPositions[l],n=o.match,a=o.locator.slice(),s.push(i===!0?o.input:i===!1?n.nativeDef:_(l,n))):(o=v(l,a,l-1),n=o.match,a=o.locator.slice(),(r.jitMasking===!1||l<u||"number"==typeof r.jitMasking&&isFinite(r.jitMasking)&&r.jitMasking>l)&&s.push(i===!1?n.nativeDef:_(l,n))),l++;while((void 0===V||l<V)&&(null!==n.fn||""!==n.def)||t>l);return""===s[s.length-1]&&s.pop(),p().maskLength=l+1,s}function p(){return a}function d(e){var t=p();t.buffer=void 0,e!==!0&&(t._buffer=void 0,t.validPositions={},t.p=0)}function f(e,t,i){var a=-1,n=-1,r=i||p().validPositions;void 0===e&&(e=-1);for(var o in r){var s=parseInt(o);r[s]&&(t||null!==r[s].match.fn)&&(s<=e&&(a=s),s>=e&&(n=s))}return a!==-1&&e-a>1||n<e?a:n}function m(t,i,a,n){function o(e){var t=p().validPositions[e];if(void 0!==t&&null===t.match.fn){var i=p().validPositions[e-1],a=p().validPositions[e+1];return void 0!==i&&void 0!==a}return!1}var s,l=t,u=e.extend(!0,{},p().validPositions),c=!1;for(p().p=t,s=i-1;s>=l;s--)void 0!==p().validPositions[s]&&(a!==!0&&(!p().validPositions[s].match.optionality&&o(s)||r.canClearPosition(p(),s,f(),n,r)===!1)||delete p().validPositions[s]);for(d(!0),s=l+1;s<=f();){for(;void 0!==p().validPositions[l];)l++;if(s<l&&(s=l+1),void 0===p().validPositions[s]&&E(s))s++;else{var m=v(s);c===!1&&u[l]&&u[l].match.def===m.match.def?(p().validPositions[l]=e.extend(!0,{},u[l]),p().validPositions[l].input=m.input,delete p().validPositions[s],s++):y(l,m.match.def)?A(l,m.input||_(s),!0)!==!1&&(delete p().validPositions[s],s++,c=!0):E(s)||(s++,l--),l++}}d(!0)}function h(e,t){for(var i,a=e,n=f(),o=p().validPositions[n]||k(0)[0],s=void 0!==o.alternation?o.locator[o.alternation].toString().split(","):[],l=0;l<a.length&&(i=a[l],!(i.match&&(r.greedy&&i.match.optionalQuantifier!==!0||(i.match.optionality===!1||i.match.newBlockMarker===!1)&&i.match.optionalQuantifier!==!0)&&(void 0===o.alternation||o.alternation!==i.alternation||void 0!==i.locator[o.alternation]&&S(i.locator[o.alternation].toString().split(","),s)))||t===!0&&(null!==i.match.fn||/[0-9a-bA-Z]/.test(i.match.def)));l++);return i}function v(e,t,i){return p().validPositions[e]||h(k(e,t?t.slice():t,i))}function g(e){return p().validPositions[e]?p().validPositions[e]:k(e)[0]}function y(e,t){for(var i=!1,a=k(e),n=0;n<a.length;n++)if(a[n].match&&a[n].match.def===t){i=!0;break}return i}function k(t,i,a){function n(i,a,o,s){function u(o,s,d){function h(t,i){var a=0===e.inArray(t,i.matches);return a||e.each(i.matches,function(e,n){if(n.isQuantifier===!0&&(a=h(t,i.matches[e-1])))return!1}),a}function g(t,i,a){var n,r;return(p().tests[t]||p().validPositions[t])&&e.each(p().tests[t]||[p().validPositions[t]],function(e,t){var o=void 0!==a?a:t.alternation,s=void 0!==t.locator[o]?t.locator[o].toString().indexOf(i):-1;(void 0===r||s<r)&&s!==-1&&(n=t,r=s)}),n?n.locator.slice((void 0!==a?a:n.alternation)+1):void 0!==a?g(t,i):void 0}function y(e,i){return null===e.match.fn&&null!==i.match.fn&&i.match.fn.test(e.match.def,p(),t,!1,r,!1)}if(c>1e4)throw"Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. "+p().mask;if(c===t&&void 0===o.matches)return f.push({match:o,locator:s.reverse(),cd:v}),!0;if(void 0!==o.matches){if(o.isGroup&&d!==o){if(o=u(i.matches[e.inArray(o,i.matches)+1],s))return!0}else if(o.isOptional){var k=o;if(o=n(o,a,s,d)){if(l=f[f.length-1].match,!h(l,k))return!0;m=!0,c=t}}else if(o.isAlternator){var x,b=o,P=[],w=f.slice(),S=s.length,A=a.length>0?a.shift():-1;if(A===-1||"string"==typeof A){var E,C=c,R=a.slice(),M=[];if("string"==typeof A)M=A.split(",");else for(E=0;E<b.matches.length;E++)M.push(E);for(var O=0;O<M.length;O++){if(E=parseInt(M[O]),f=[],a=g(c,E,S)||R.slice(),o=u(b.matches[E]||i.matches[E],[E].concat(s),d)||o,o!==!0&&void 0!==o&&M[M.length-1]<b.matches.length){var _=e.inArray(o,i.matches)+1;i.matches.length>_&&(o=u(i.matches[_],[_].concat(s.slice(1,s.length)),d),o&&(M.push(_.toString()),e.each(f,function(e,t){t.alternation=s.length-1})))}x=f.slice(),c=C,f=[];for(var I=0;I<x.length;I++){var j=x[I],D=!1;j.alternation=j.alternation||S;for(var F=0;F<P.length;F++){var N=P[F];if(("string"!=typeof A||e.inArray(j.locator[j.alternation].toString(),M)!==-1)&&(j.match.def===N.match.def||y(j,N))){D=j.match.nativeDef===N.match.nativeDef,j.alternation==N.alternation&&N.locator[N.alternation].toString().indexOf(j.locator[j.alternation])===-1&&(N.locator[N.alternation]=N.locator[N.alternation]+","+j.locator[j.alternation],N.alternation=j.alternation,null==j.match.fn&&(N.na=N.na||j.locator[j.alternation].toString(),N.na.indexOf(j.locator[j.alternation])===-1&&(N.na=N.na+","+j.locator[j.alternation])));break}}D||P.push(j)}}"string"==typeof A&&(P=e.map(P,function(t,i){if(isFinite(i)){var a,n=t.alternation,r=t.locator[n].toString().split(",");t.locator[n]=void 0,t.alternation=void 0;for(var o=0;o<r.length;o++)a=e.inArray(r[o],M)!==-1,a&&(void 0!==t.locator[n]?(t.locator[n]+=",",t.locator[n]+=r[o]):t.locator[n]=parseInt(r[o]),t.alternation=n);if(void 0!==t.locator[n])return t}})),f=w.concat(P),c=t,m=f.length>0,a=R.slice()}else o=u(b.matches[A]||i.matches[A],[A].concat(s),d);if(o)return!0}else if(o.isQuantifier&&d!==i.matches[e.inArray(o,i.matches)-1])for(var T=o,G=a.length>0?a.shift():0;G<(isNaN(T.quantifier.max)?G+1:T.quantifier.max)&&c<=t;G++){var B=i.matches[e.inArray(T,i.matches)-1];if(o=u(B,[G].concat(s),B)){if(l=f[f.length-1].match,l.optionalQuantifier=G>T.quantifier.min-1,h(l,B)){if(G>T.quantifier.min-1){m=!0,c=t;break}return!0}return!0}}else if(o=n(o,a,s,d))return!0}else c++}for(var d=a.length>0?a.shift():0;d<i.matches.length;d++)if(i.matches[d].isQuantifier!==!0){var h=u(i.matches[d],[d].concat(o),s);if(h&&c===t)return h;if(c>t)break}}function o(t){var i=[];return e.isArray(t)||(t=[t]),t.length>0&&(void 0===t[0].alternation?(i=h(t.slice()).locator.slice(),0===i.length&&(i=t[0].locator.slice())):e.each(t,function(e,t){if(""!==t.def)if(0===i.length)i=t.locator.slice();else for(var a=0;a<i.length;a++)t.locator[a]&&i[a].toString().indexOf(t.locator[a])===-1&&(i[a]+=","+t.locator[a])})),i}function s(e){return r.keepStatic&&t>0&&e.length>1+(""===e[e.length-1].match.def?1:0)&&e[0].match.optionality!==!0&&e[0].match.optionalQuantifier!==!0&&null===e[0].match.fn&&!/[0-9a-bA-Z]/.test(e[0].match.def)?[h(e)]:e}var l,u=p().maskToken,c=i?a:0,d=i?i.slice():[0],f=[],m=!1,v=i?i.join(""):"";if(t>-1){if(void 0===i){for(var g,y=t-1;void 0===(g=p().validPositions[y]||p().tests[y])&&y>-1;)y--;void 0!==g&&y>-1&&(d=o(g),v=d.join(""),c=y)}if(p().tests[t]&&p().tests[t][0].cd===v)return s(p().tests[t]);for(var k=d.shift();k<u.length;k++){var x=n(u[k],d,[k]);if(x&&c===t||c>t)break}}return(0===f.length||m)&&f.push({match:{fn:null,cardinality:0,optionality:!0,casing:null,def:"",placeholder:""},locator:[],cd:v}),void 0!==i&&p().tests[t]?s(e.extend(!0,[],f)):(p().tests[t]=e.extend(!0,[],f),s(p().tests[t]))}function x(){return void 0===p()._buffer&&(p()._buffer=c(!1,1),void 0===p().buffer&&p()._buffer.slice()),p()._buffer}function b(e){return void 0!==p().buffer&&e!==!0||(p().buffer=c(!0,f(),!0)),p().buffer}function P(e,t,i){var a;if(e===!0)d(),e=0,t=i.length;else for(a=e;a<t;a++)delete p().validPositions[a];for(a=e;a<t;a++)d(!0),i[a]!==r.skipOptionalPartCharacter&&A(a,i[a],!0,!0)}function w(e,i,a){switch(r.casing||i.casing){case"upper":e=e.toUpperCase();break;case"lower":e=e.toLowerCase();break;case"title":var n=p().validPositions[a-1];e=0===a||n&&n.input===String.fromCharCode(t.keyCode.SPACE)?e.toUpperCase():e.toLowerCase()}return e}function S(t,i){for(var a=r.greedy?i:i.slice(0,1),n=!1,o=0;o<t.length;o++)if(e.inArray(t[o],a)!==-1){n=!0;break}return n}function A(i,a,n,o,s){function l(e){var t=q?e.begin-e.end>1||e.begin-e.end===1&&r.insertMode:e.end-e.begin>1||e.end-e.begin===1&&r.insertMode;return t&&0===e.begin&&e.end===p().maskLength?"full":t}function u(t,a,n){var s=!1;return e.each(k(t),function(u,c){for(var h=c.match,v=a?1:0,g="",y=h.cardinality;y>v;y--)g+=M(t-(y-1));if(a&&(g+=a),b(!0),s=null!=h.fn?h.fn.test(g,p(),t,n,r,l(i)):(a===h.def||a===r.skipOptionalPartCharacter)&&""!==h.def&&{c:h.placeholder||h.def,pos:t},s!==!1){var k=void 0!==s.c?s.c:a;k=k===r.skipOptionalPartCharacter&&null===h.fn?h.placeholder||h.def:k;var S=t,E=b();if(void 0!==s.remove&&(e.isArray(s.remove)||(s.remove=[s.remove]),e.each(s.remove.sort(function(e,t){return t-e}),function(e,t){m(t,t+1,!0)})),void 0!==s.insert&&(e.isArray(s.insert)||(s.insert=[s.insert]),e.each(s.insert.sort(function(e,t){return e-t}),function(e,t){A(t.pos,t.c,!0,o)})),s.refreshFromBuffer){var C=s.refreshFromBuffer;if(n=!0,P(C===!0?C:C.start,C.end,E),void 0===s.pos&&void 0===s.c)return s.pos=f(),!1;if(S=void 0!==s.pos?s.pos:t,S!==t)return s=e.extend(s,A(S,k,!0,o)),!1}else if(s!==!0&&void 0!==s.pos&&s.pos!==t&&(S=s.pos,P(t,S,b().slice()),S!==t))return s=e.extend(s,A(S,k,!0)),!1;return(s===!0||void 0!==s.pos||void 0!==s.c)&&(u>0&&d(!0),x(S,e.extend({},c,{input:w(k,h,S)}),o,l(i))||(s=!1),!1)}}),s}function c(t,i,a){var n,s,l,u,c,m,h,v,g=e.extend(!0,{},p().validPositions),y=!1,x=f();for(u=p().validPositions[x];x>=0;x--)if(l=p().validPositions[x],l&&void 0!==l.alternation){if(n=x,s=p().validPositions[n].alternation,u.locator[l.alternation]!==l.locator[l.alternation])break;u=l}if(void 0!==s){v=parseInt(n);var b=void 0!==u.locator[u.alternation||s]?u.locator[u.alternation||s]:h[0];b.length>0&&(b=b.split(",")[0]);var P=p().validPositions[v],w=p().validPositions[v-1];e.each(k(v,w?w.locator:void 0,v-1),function(n,l){h=l.locator[s]?l.locator[s].toString().split(","):[];for(var u=0;u<h.length;u++){var k=[],x=0,w=0,S=!1;if(b<h[u]&&(void 0===l.na||e.inArray(h[u],l.na.split(","))===-1)){p().validPositions[v]=e.extend(!0,{},l);var E=p().validPositions[v].locator;for(p().validPositions[v].locator[s]=parseInt(h[u]),null==l.match.fn?(P.input!==l.match.def&&(S=!0,P.generatedInput!==!0&&k.push(P.input)),w++,p().validPositions[v].generatedInput=!/[0-9a-bA-Z]/.test(l.match.def),p().validPositions[v].input=l.match.def):p().validPositions[v].input=P.input,c=v+1;c<f(void 0,!0)+1;c++)m=p().validPositions[c],m&&m.generatedInput!==!0&&/[0-9a-bA-Z]/.test(m.input)?k.push(m.input):c<t&&x++,delete p().validPositions[c];for(S&&k[0]===l.match.def&&k.shift(),d(!0),y=!0;k.length>0;){var C=k.shift();if(C!==r.skipOptionalPartCharacter&&!(y=A(f(void 0,!0)+1,C,!1,o,!0)))break}if(y){p().validPositions[v].locator=E;var R=f(t)+1;for(c=v+1;c<f()+1;c++)m=p().validPositions[c],(void 0===m||null==m.match.fn)&&c<t+(w-x)&&w++;t+=w-x,y=A(t>R?R:t,i,a,o,!0)}if(y)return!1;d(),p().validPositions=e.extend(!0,{},g)}}})}return y}function g(t,i){var a=p().validPositions[i];if(a)for(var n=a.locator,r=n.length,o=t;o<i;o++)if(void 0===p().validPositions[o]&&!E(o,!0)){var s=k(o),l=s[0],u=-1;e.each(s,function(e,t){for(var i=0;i<r&&void 0!==t.locator[i]&&S(t.locator[i].toString().split(","),n[i].toString().split(","));i++)u<i&&(u=i,l=t)}),x(o,e.extend({},l,{input:l.match.placeholder||l.match.def}),!0)}}function x(t,i,a,n){if(n||r.insertMode&&void 0!==p().validPositions[t]&&void 0===a){var o,s=e.extend(!0,{},p().validPositions),l=f(void 0,!0);for(o=t;o<=l;o++)delete p().validPositions[o];p().validPositions[t]=e.extend(!0,{},i);var u,c=!0,m=p().validPositions,h=!1,v=p().maskLength;for(o=u=t;o<=l;o++){var g=s[o];if(void 0!==g)for(var k=u;k<p().maskLength&&(null===g.match.fn&&m[o]&&(m[o].match.optionalQuantifier===!0||m[o].match.optionality===!0)||null!=g.match.fn);){if(k++,h===!1&&s[k]&&s[k].match.def===g.match.def)p().validPositions[k]=e.extend(!0,{},s[k]),p().validPositions[k].input=g.input,R(k),u=k,c=!0;else if(y(k,g.match.def)){var x=A(k,g.input,!0,!0);c=x!==!1,u=x.caret||x.insert?f():k,h=!0}else c=g.generatedInput===!0;if(p().maskLength<v&&(p().maskLength=v),c)break}if(!c)break}if(!c)return p().validPositions=e.extend(!0,{},s),d(!0),!1}else p().validPositions[t]=e.extend(!0,{},i);return d(!0),!0}function R(t){for(var i=t-1;i>-1&&!p().validPositions[i];i--);var a,n;for(i++;i<t;i++)void 0===p().validPositions[i]&&(r.jitMasking===!1||r.jitMasking>i)&&(n=k(i,v(i-1).locator,i-1).slice(),""===n[n.length-1].match.def&&n.pop(),a=h(n),a&&(a.match.def===r.radixPointDefinitionSymbol||!E(i,!0)||e.inArray(r.radixPoint,b())<i&&a.match.fn&&a.match.fn.test(_(i),p(),i,!1,r))&&(I=u(i,a.match.placeholder||(null==a.match.fn?a.match.def:""!==_(i)?_(i):b()[i]),!0),I!==!1&&(p().validPositions[I.pos||i].generatedInput=!0)))}n=n===!0;var O=i;void 0!==i.begin&&(O=q&&!l(i)?i.end:i.begin);var I=!1,j=e.extend(!0,{},p().validPositions);if(R(O),l(i)&&(G(void 0,t.keyCode.DELETE,i),O=p().p),O<p().maskLength&&(I=u(O,a,n),(!n||o===!0)&&I===!1)){var D=p().validPositions[O];if(!D||null!==D.match.fn||D.match.def!==a&&a!==r.skipOptionalPartCharacter){if((r.insertMode||void 0===p().validPositions[C(O)])&&!E(O,!0)){var F=k(O).slice();""===F[F.length-1].match.def&&F.pop();var N=h(F,!0);N&&null===N.match.fn&&(N=N.match.placeholder||N.match.def,u(O,N,n),p().validPositions[O].generatedInput=!0);for(var T=O+1,B=C(O);T<=B;T++)if(I=u(T,a,n),I!==!1){g(O,void 0!==I.pos?I.pos:T),O=T;break}}}else I={caret:C(O)}}return I===!1&&r.keepStatic&&!n&&s!==!0&&(I=c(O,a,n)),I===!0&&(I={pos:O}),e.isFunction(r.postValidation)&&I!==!1&&!n&&o!==!0&&(I=!!r.postValidation(b(!0),I,r)&&I),void 0===I.pos&&(I.pos=O),I===!1&&(d(!0),p().validPositions=e.extend(!0,{},j)),I}function E(e,t){var i;if(t?(i=v(e).match,""===i.def&&(i=g(e).match)):i=g(e).match,null!=i.fn)return i.fn;if(t!==!0&&e>-1){var a=k(e);return a.length>1+(""===a[a.length-1].match.def?1:0)}return!1}function C(e,t){var i=p().maskLength;if(e>=i)return i;for(var a=e;++a<i&&(t===!0&&(g(a).match.newBlockMarker!==!0||!E(a))||t!==!0&&!E(a)););return a}function R(e,t){var i,a=e;if(a<=0)return 0;for(;--a>0&&(t===!0&&g(a).match.newBlockMarker!==!0||t!==!0&&!E(a)&&(i=k(a),i.length<2||2===i.length&&""===i[1].match.def)););return a}function M(e){return void 0===p().validPositions[e]?_(e):p().validPositions[e].input}function O(t,i,a,n,o){if(n&&e.isFunction(r.onBeforeWrite)){var s=r.onBeforeWrite(n,i,a,r);if(s){if(s.refreshFromBuffer){var l=s.refreshFromBuffer;P(l===!0?l:l.start,l.end,s.buffer||i),i=b(!0)}void 0!==a&&(a=void 0!==s.caret?s.caret:a)}}t.inputmask._valueSet(i.join("")),void 0===a||void 0!==n&&"blur"===n.type?L(t,i,a):D(t,a),o===!0&&(Y=!0,e(t).trigger("input"))}function _(e,t){if(t=t||g(e).match,void 0!==t.placeholder)return t.placeholder;if(null===t.fn){if(e>-1&&void 0===p().validPositions[e]){var i,a=k(e),n=[];if(a.length>1+(""===a[a.length-1].match.def?1:0))for(var o=0;o<a.length;o++)if(a[o].match.optionality!==!0&&a[o].match.optionalQuantifier!==!0&&(null===a[o].match.fn||void 0===i||a[o].match.fn.test(i.match.def,p(),e,!0,r)!==!1)&&(n.push(a[o]),null===a[o].match.fn&&(i=a[o]),n.length>1&&/[0-9a-bA-Z]/.test(n[0].match.def)))return r.placeholder.charAt(e%r.placeholder.length)}return t.def}return r.placeholder.charAt(e%r.placeholder.length)}function I(i,a,n,o,s,l){function u(){var e=!1,t=x().slice(h,C(h)).join("").indexOf(m);if(t!==-1&&!E(h)){e=!0;for(var i=x().slice(h,h+t),a=0;a<i.length;a++)if(" "!==i[a]){e=!1;break}}return e}var c=o.slice(),m="",h=0,g=void 0;if(d(),p().p=C(-1),!n)if(r.autoUnmask!==!0){var y=x().slice(0,C(-1)).join(""),k=c.join("").match(new RegExp("^"+t.escapeRegex(y),"g"));k&&k.length>0&&(c.splice(0,k.length*y.length),h=C(h))}else h=C(h);if(e.each(c,function(t,a){if(void 0!==a){var o=new e.Event("keypress");o.which=a.charCodeAt(0),m+=a;var s=f(void 0,!0),l=p().validPositions[s],c=v(s+1,l?l.locator.slice():void 0,s);if(!u()||n||r.autoUnmask){var y=n?t:null==c.match.fn&&c.match.optionality&&s+1<p().p?s+1:p().p;g=ee.keypressEvent.call(i,o,!0,!1,n,y),h=y+1,m=""}else g=ee.keypressEvent.call(i,o,!0,!1,!0,s+1);if(!n&&e.isFunction(r.onBeforeWrite)&&(g=r.onBeforeWrite(o,b(),g.forwardPosition,r),g&&g.refreshFromBuffer)){var k=g.refreshFromBuffer;P(k===!0?k:k.start,k.end,g.buffer),d(!0),g.caret&&(p().p=g.caret)}}}),a){var w=void 0,S=f();document.activeElement===i&&(s||g)&&(w=D(i).begin,s&&g===!1&&(w=C(f(w))),g&&l!==!0&&(w<S+1||S===-1)&&(w=r.numericInput&&void 0===g.caret?R(g.forwardPosition):g.forwardPosition)),O(i,b(),w,s||new e.Event("checkval"))}}function j(t){if(t&&void 0===t.inputmask)return t.value;var i=[],a=p().validPositions;for(var n in a)a[n].match&&null!=a[n].match.fn&&i.push(a[n].input);var o=0===i.length?"":(q?i.reverse():i).join("");if(e.isFunction(r.onUnMask)){var s=(q?b().slice().reverse():b()).join("");o=r.onUnMask(s,o,r)||o}return o}function D(e,t,i,a){function n(e){if(a!==!0&&q&&"number"==typeof e&&(!r.greedy||""!==r.placeholder)){var t=b().join("").length;e=t-e}return e}var s;if("number"!=typeof t)return e.setSelectionRange?(t=e.selectionStart,i=e.selectionEnd):window.getSelection?(s=window.getSelection().getRangeAt(0),s.commonAncestorContainer.parentNode!==e&&s.commonAncestorContainer!==e||(t=s.startOffset,i=s.endOffset)):document.selection&&document.selection.createRange&&(s=document.selection.createRange(),t=0-s.duplicate().moveStart("character",-e.inputmask._valueGet().length),i=t+s.text.length),{begin:n(t),end:n(i)};t=n(t),i=n(i),i="number"==typeof i?i:t;var l=parseInt(((e.ownerDocument.defaultView||window).getComputedStyle?(e.ownerDocument.defaultView||window).getComputedStyle(e,null):e.currentStyle).fontSize)*i;if(e.scrollLeft=l>e.scrollWidth?l:0,o||r.insertMode!==!1||t!==i||i++,e.setSelectionRange)e.selectionStart=t,e.selectionEnd=i;else if(window.getSelection){if(s=document.createRange(),void 0===e.firstChild||null===e.firstChild){var u=document.createTextNode("");e.appendChild(u)}s.setStart(e.firstChild,t<e.inputmask._valueGet().length?t:e.inputmask._valueGet().length),s.setEnd(e.firstChild,i<e.inputmask._valueGet().length?i:e.inputmask._valueGet().length),s.collapse(!0);var c=window.getSelection();c.removeAllRanges(),c.addRange(s)}else e.createTextRange&&(s=e.createTextRange(),s.collapse(!0),s.moveEnd("character",i),s.moveStart("character",t),s.select());L(e,void 0,{begin:t,end:i})}function F(t){var i,a,n=b(),r=n.length,o=f(),s={},l=p().validPositions[o],u=void 0!==l?l.locator.slice():void 0;for(i=o+1;i<n.length;i++)a=v(i,u,i-1),u=a.locator.slice(),s[i]=e.extend(!0,{},a);var c=l&&void 0!==l.alternation?l.locator[l.alternation]:void 0;for(i=r-1;i>o&&(a=s[i],(a.match.optionality||a.match.optionalQuantifier||c&&(c!==s[i].locator[l.alternation]&&null!=a.match.fn||null===a.match.fn&&a.locator[l.alternation]&&S(a.locator[l.alternation].toString().split(","),c.toString().split(","))&&""!==k(i)[0].def))&&n[i]===_(i,a.match));i--)r--;return t?{l:r,def:s[r]?s[r].match:void 0}:r}function N(e){for(var t=F(),i=e.length-1;i>t&&!E(i);i--);return e.splice(t,i+1-t),e}function T(t){if(e.isFunction(r.isComplete))return r.isComplete(t,r);if("*"!==r.repeat){var i=!1,a=F(!0),n=R(a.l);if(void 0===a.def||a.def.newBlockMarker||a.def.optionality||a.def.optionalQuantifier){i=!0;for(var o=0;o<=n;o++){var s=v(o).match;if(null!==s.fn&&void 0===p().validPositions[o]&&s.optionality!==!0&&s.optionalQuantifier!==!0||null===s.fn&&t[o]!==_(o,s)){i=!1;break}}}return i}}function G(i,a,n,o){function s(){if(r.keepStatic){for(var t=[],a=f(-1,!0),n=e.extend(!0,{},p().validPositions),o=p().validPositions[a];a>=0;a--){var s=p().validPositions[a];if(s){if(s.generatedInput!==!0&&/[0-9a-bA-Z]/.test(s.input)&&t.push(s.input),delete p().validPositions[a],void 0!==s.alternation&&s.locator[s.alternation]!==o.locator[s.alternation])break;o=s}}if(a>-1)for(p().p=C(f(-1,!0));t.length>0;){var l=new e.Event("keypress");l.which=t.pop().charCodeAt(0),ee.keypressEvent.call(i,l,!0,!1,!1,p().p)}else p().validPositions=e.extend(!0,{},n)}}if((r.numericInput||q)&&(a===t.keyCode.BACKSPACE?a=t.keyCode.DELETE:a===t.keyCode.DELETE&&(a=t.keyCode.BACKSPACE),q)){var l=n.end;n.end=n.begin,n.begin=l}a===t.keyCode.BACKSPACE&&(n.end-n.begin<1||r.insertMode===!1)?(n.begin=R(n.begin),void 0===p().validPositions[n.begin]||p().validPositions[n.begin].input!==r.groupSeparator&&p().validPositions[n.begin].input!==r.radixPoint||n.begin--):a===t.keyCode.DELETE&&n.begin===n.end&&(n.end=E(n.end,!0)?n.end+1:C(n.end)+1,void 0===p().validPositions[n.begin]||p().validPositions[n.begin].input!==r.groupSeparator&&p().validPositions[n.begin].input!==r.radixPoint||n.end++),m(n.begin,n.end,!1,o),o!==!0&&s();var u=f(n.begin,!0);u<n.begin?p().p=C(u):o!==!0&&(p().p=n.begin)}function B(t){function i(e){var i,a=document.createElement("span");for(var n in o)isNaN(n)&&n.indexOf("font")!==-1&&(a.style[n]=o[n]);a.style.textTransform=o.textTransform,a.style.letterSpacing=o.letterSpacing,a.style.position="absolute",a.style.height="auto",a.style.width="auto",a.style.visibility="hidden",a.style.whiteSpace="nowrap",document.body.appendChild(a);var r,s=t.inputmask._valueGet(),l=0;for(i=0,r=s.length;i<=r;i++){if(a.innerHTML+=s.charAt(i)||"_",a.offsetWidth>=e){var u=e-l,c=a.offsetWidth-e;a.innerHTML=s.charAt(i),u-=a.offsetWidth/3,i=u<c?i-1:i;break}l=a.offsetWidth}return document.body.removeChild(a),i}function a(){z.style.position="absolute",z.style.top=n.top+"px",z.style.left=n.left+"px",z.style.width=parseInt(t.offsetWidth)-parseInt(o.paddingLeft)-parseInt(o.paddingRight)-parseInt(o.borderLeftWidth)-parseInt(o.borderRightWidth)+"px",z.style.height=parseInt(t.offsetHeight)-parseInt(o.paddingTop)-parseInt(o.paddingBottom)-parseInt(o.borderTopWidth)-parseInt(o.borderBottomWidth)+"px",z.style.lineHeight=z.style.height,z.style.zIndex=isNaN(o.zIndex)?-1:o.zIndex-1,z.style.webkitAppearance="textfield",z.style.mozAppearance="textfield",z.style.Appearance="textfield"}var n=e(t).position(),o=(t.ownerDocument.defaultView||window).getComputedStyle(t,null);t.parentNode,z=document.createElement("div"),document.body.appendChild(z);for(var s in o)isNaN(s)&&"cssText"!==s&&s.indexOf("webkit")==-1&&(z.style[s]=o[s]);t.style.backgroundColor="transparent",t.style.color="transparent",t.style.webkitAppearance="caret",t.style.mozAppearance="caret",t.style.Appearance="caret",a(),e(window).on("resize",function(i){n=e(t).position(),o=(t.ownerDocument.defaultView||window).getComputedStyle(t,null),a()}),e(t).on("click",function(e){return D(t,i(e.clientX)),ee.clickEvent.call(this,[e])}),e(t).on("keydown",function(e){e.shiftKey||r.insertMode===!1||setTimeout(function(){L(t)},0)})}function L(e,t,i){function a(){o||null!==l.fn&&void 0!==u.input?o&&null!==l.fn&&void 0!==u.input&&(o=!1,n+="</span>"):(o=!0,n+="<span class='im-static''>")}if(void 0!==z){t=t||b(),void 0===i?i=D(e):void 0===i.begin&&(i={begin:i,end:i});var n="",o=!1;if(""!=t){var s,l,u,c=0,d=f();do c===i.begin&&document.activeElement===e&&(n+="<span class='im-caret' style='border-right-width: 1px;border-right-style: solid;'></span>"),p().validPositions[c]?(u=p().validPositions[c],l=u.match,s=u.locator.slice(),a(),n+=u.input):(u=v(c,s,c-1),l=u.match,s=u.locator.slice(),(r.jitMasking===!1||c<d||"number"==typeof r.jitMasking&&isFinite(r.jitMasking)&&r.jitMasking>c)&&(a(),n+=_(c,l))),c++;while((void 0===V||c<V)&&(null!==l.fn||""!==l.def)||d>c)}z.innerHTML=n}}function H(t){function i(t,i){function a(t){function a(t){if(e.valHooks&&(void 0===e.valHooks[t]||e.valHooks[t].inputmaskpatch!==!0)){var a=e.valHooks[t]&&e.valHooks[t].get?e.valHooks[t].get:function(e){return e.value},n=e.valHooks[t]&&e.valHooks[t].set?e.valHooks[t].set:function(e,t){return e.value=t,e};e.valHooks[t]={get:function(e){if(e.inputmask){if(e.inputmask.opts.autoUnmask)return e.inputmask.unmaskedvalue();var t=a(e);return f(void 0,void 0,e.inputmask.maskset.validPositions)!==-1||i.nullable!==!0?t:""}return a(e)},set:function(t,i){var a,r=e(t);return a=n(t,i),t.inputmask&&r.trigger("setvalue"),a},inputmaskpatch:!0}}}function n(){return this.inputmask?this.inputmask.opts.autoUnmask?this.inputmask.unmaskedvalue():f()!==-1||i.nullable!==!0?document.activeElement===this&&i.clearMaskOnLostFocus?(q?N(b().slice()).reverse():N(b().slice())).join(""):s.call(this):"":s.call(this)}function r(t){l.call(this,t),this.inputmask&&e(this).trigger("setvalue")}function o(t){J.on(t,"mouseenter",function(t){var i=e(this),a=this,n=a.inputmask._valueGet();n!==b().join("")&&i.trigger("setvalue")})}var s,l;if(!t.inputmask.__valueGet){if(i.noValuePatching!==!0){if(Object.getOwnPropertyDescriptor){"function"!=typeof Object.getPrototypeOf&&(Object.getPrototypeOf="object"==typeof"test".__proto__?function(e){return e.__proto__}:function(e){return e.constructor.prototype});var u=Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t),"value"):void 0;u&&u.get&&u.set?(s=u.get,l=u.set,Object.defineProperty(t,"value",{get:n,set:r,configurable:!0})):"INPUT"!==t.tagName&&(s=function(){return this.textContent},l=function(e){this.textContent=e},Object.defineProperty(t,"value",{get:n,set:r,configurable:!0}))}else document.__lookupGetter__&&t.__lookupGetter__("value")&&(s=t.__lookupGetter__("value"),l=t.__lookupSetter__("value"),t.__defineGetter__("value",n),t.__defineSetter__("value",r));t.inputmask.__valueGet=s,t.inputmask.__valueSet=l}t.inputmask._valueGet=function(e){return q&&e!==!0?s.call(this.el).split("").reverse().join(""):s.call(this.el)},t.inputmask._valueSet=function(e,t){l.call(this.el,null===e||void 0===e?"":t!==!0&&q?e.split("").reverse().join(""):e)},void 0===s&&(s=function(){return this.value},l=function(e){this.value=e},a(t.type),o(t))}}var n=t.getAttribute("type"),r="INPUT"===t.tagName&&e.inArray(n,i.supportsInputType)!==-1||t.isContentEditable||"TEXTAREA"===t.tagName;if(!r)if("INPUT"===t.tagName){var o=document.createElement("input");o.setAttribute("type",n),r="text"===o.type,o=null}else r="partial";return r!==!1&&a(t),r}var a=i(t,r);if(a!==!1&&(W=t,U=e(W),("rtl"===W.dir||r.rightAlign)&&(W.style.textAlign="right"),("rtl"===W.dir||r.numericInput)&&(W.dir="ltr",W.removeAttribute("dir"),W.inputmask.isRTL=!0,q=!0),r.colorMask===!0&&B(W),u&&(W.hasOwnProperty("inputmode")&&(W.inputmode=r.inputmode,W.setAttribute("inputmode",r.inputmode)),"rtfm"===r.androidHack&&(r.colorMask!==!0&&B(W),W.type="password")),J.off(W),a===!0&&(J.on(W,"submit",ee.submitEvent),J.on(W,"reset",ee.resetEvent),J.on(W,"mouseenter",ee.mouseenterEvent),J.on(W,"blur",ee.blurEvent),J.on(W,"focus",ee.focusEvent),J.on(W,"mouseleave",ee.mouseleaveEvent),r.colorMask!==!0&&J.on(W,"click",ee.clickEvent),J.on(W,"dblclick",ee.dblclickEvent),J.on(W,"paste",ee.pasteEvent),J.on(W,"dragdrop",ee.pasteEvent),J.on(W,"drop",ee.pasteEvent),J.on(W,"cut",ee.cutEvent),J.on(W,"complete",r.oncomplete),J.on(W,"incomplete",r.onincomplete),J.on(W,"cleared",r.oncleared),r.inputEventOnly!==!0&&(J.on(W,"keydown",ee.keydownEvent),J.on(W,"keypress",ee.keypressEvent)),J.on(W,"compositionstart",e.noop),J.on(W,"compositionupdate",e.noop),J.on(W,"compositionend",e.noop),J.on(W,"keyup",e.noop),J.on(W,"input",ee.inputFallBackEvent)),J.on(W,"setvalue",ee.setValueEvent),x(),""!==W.inputmask._valueGet()||r.clearMaskOnLostFocus===!1||document.activeElement===W)){var n=e.isFunction(r.onBeforeMask)?r.onBeforeMask(W.inputmask._valueGet(),r)||W.inputmask._valueGet():W.inputmask._valueGet();I(W,!0,!1,n.split(""));var o=b().slice();K=o.join(""),T(o)===!1&&r.clearIncomplete&&d(),r.clearMaskOnLostFocus&&document.activeElement!==W&&(f()===-1?o=[]:N(o)),O(W,o),document.activeElement===W&&D(W,C(f()))}}a=a||this.maskset,r=r||this.opts;var K,U,V,z,Q,W=this.el,q=this.isRTL,Z=!1,Y=!1,$=!1,X=!1,J={on:function(i,a,n){var o=function(i){if(void 0===this.inputmask&&"FORM"!==this.nodeName){var a=e.data(this,"_inputmask_opts");a?new t(a).mask(this):J.off(this)}else{if("setvalue"===i.type||!(this.disabled||this.readOnly&&!("keydown"===i.type&&i.ctrlKey&&67===i.keyCode||r.tabThrough===!1&&i.keyCode===t.keyCode.TAB))){switch(i.type){case"input":if(Y===!0)return Y=!1,i.preventDefault();break;case"keydown":Z=!1,Y=!1;break;case"keypress":if(Z===!0)return i.preventDefault();Z=!0;break;case"click":if(s||l){var o=this,u=arguments;return setTimeout(function(){n.apply(o,u)},0),!1}}var c=n.apply(this,arguments);return c===!1&&(i.preventDefault(),i.stopPropagation()),c}i.preventDefault()}};i.inputmask.events[a]=i.inputmask.events[a]||[],i.inputmask.events[a].push(o),e.inArray(a,["submit","reset"])!==-1?null!=i.form&&e(i.form).on(a,o):e(i).on(a,o)},off:function(t,i){if(t.inputmask&&t.inputmask.events){var a;i?(a=[],a[i]=t.inputmask.events[i]):a=t.inputmask.events,e.each(a,function(i,a){for(;a.length>0;){var n=a.pop();e.inArray(i,["submit","reset"])!==-1?null!=t.form&&e(t.form).off(i,n):e(t).off(i,n)}delete t.inputmask.events[i]})}}},ee={keydownEvent:function(i){function a(e){var t=document.createElement("input"),i="on"+e,a=i in t;return a||(t.setAttribute(i,"return;"),a="function"==typeof t[i]),t=null,a}var n=this,o=e(n),s=i.keyCode,u=D(n);if(s===t.keyCode.BACKSPACE||s===t.keyCode.DELETE||l&&s===t.keyCode.BACKSPACE_SAFARI||i.ctrlKey&&s===t.keyCode.X&&!a("cut"))i.preventDefault(),G(n,s,u),O(n,b(!0),p().p,i,n.inputmask._valueGet()!==b().join("")),n.inputmask._valueGet()===x().join("")?o.trigger("cleared"):T(b())===!0&&o.trigger("complete");else if(s===t.keyCode.END||s===t.keyCode.PAGE_DOWN){i.preventDefault();var c=C(f());r.insertMode||c!==p().maskLength||i.shiftKey||c--,D(n,i.shiftKey?u.begin:c,c,!0)}else s===t.keyCode.HOME&&!i.shiftKey||s===t.keyCode.PAGE_UP?(i.preventDefault(),D(n,0,i.shiftKey?u.begin:0,!0)):(r.undoOnEscape&&s===t.keyCode.ESCAPE||90===s&&i.ctrlKey)&&i.altKey!==!0?(I(n,!0,!1,K.split("")),o.trigger("click")):s!==t.keyCode.INSERT||i.shiftKey||i.ctrlKey?r.tabThrough===!0&&s===t.keyCode.TAB?(i.shiftKey===!0?(null===g(u.begin).match.fn&&(u.begin=C(u.begin)),u.end=R(u.begin,!0),u.begin=R(u.end,!0)):(u.begin=C(u.begin,!0),u.end=C(u.begin,!0),u.end<p().maskLength&&u.end--),u.begin<p().maskLength&&(i.preventDefault(),D(n,u.begin,u.end))):i.shiftKey||r.insertMode===!1&&(s===t.keyCode.RIGHT?setTimeout(function(){var e=D(n);D(n,e.begin)},0):s===t.keyCode.LEFT&&setTimeout(function(){var e=D(n);D(n,q?e.begin+1:e.begin-1)},0)):(r.insertMode=!r.insertMode,D(n,r.insertMode||u.begin!==p().maskLength?u.begin:u.begin-1));r.onKeyDown.call(this,i,b(),D(n).begin,r),$=e.inArray(s,r.ignorables)!==-1},keypressEvent:function(i,a,n,o,s){var l=this,u=e(l),c=i.which||i.charCode||i.keyCode;if(!(a===!0||i.ctrlKey&&i.altKey)&&(i.ctrlKey||i.metaKey||$))return c===t.keyCode.ENTER&&K!==b().join("")&&(K=b().join(""),
setTimeout(function(){u.trigger("change")},0)),!0;if(c){46===c&&i.shiftKey===!1&&","===r.radixPoint&&(c=44);var f,m=a?{begin:s,end:s}:D(l),h=String.fromCharCode(c);p().writeOutBuffer=!0;var v=A(m,h,o);if(v!==!1&&(d(!0),f=void 0!==v.caret?v.caret:a?v.pos+1:C(v.pos),p().p=f),n!==!1){var g=this;if(setTimeout(function(){r.onKeyValidation.call(g,c,v,r)},0),p().writeOutBuffer&&v!==!1){var y=b();O(l,y,r.numericInput&&void 0===v.caret?R(f):f,i,a!==!0),a!==!0&&setTimeout(function(){T(y)===!0&&u.trigger("complete")},0)}}if(i.preventDefault(),a)return v.forwardPosition=f,v}},pasteEvent:function(t){var i,a=this,n=t.originalEvent||t,o=e(a),s=a.inputmask._valueGet(!0),l=D(a);q&&(i=l.end,l.end=l.begin,l.begin=i);var u=s.substr(0,l.begin),c=s.substr(l.end,s.length);if(u===(q?x().reverse():x()).slice(0,l.begin).join("")&&(u=""),c===(q?x().reverse():x()).slice(l.end).join("")&&(c=""),q&&(i=u,u=c,c=i),window.clipboardData&&window.clipboardData.getData)s=u+window.clipboardData.getData("Text")+c;else{if(!n.clipboardData||!n.clipboardData.getData)return!0;s=u+n.clipboardData.getData("text/plain")+c}var p=s;if(e.isFunction(r.onBeforePaste)){if(p=r.onBeforePaste(s,r),p===!1)return t.preventDefault();p||(p=s)}return I(a,!1,!1,q?p.split("").reverse():p.toString().split("")),O(a,b(),C(f()),t,K!==b().join("")),T(b())===!0&&o.trigger("complete"),t.preventDefault()},inputFallBackEvent:function(i){var a=this,n=a.inputmask._valueGet();if(b().join("")!==n){var r=D(a);if(n=n.replace(new RegExp("("+t.escapeRegex(x().join(""))+")*"),""),s){var o=n.replace(b().join(""),"");if(1===o.length){var l=new e.Event("keypress");return l.which=o.charCodeAt(0),ee.keypressEvent.call(a,l,!0,!0,!1,p().validPositions[r.begin-1]?r.begin:r.begin-1),!1}}if(r.begin>n.length&&(D(a,n.length),r=D(a)),b().length-n.length!==1||n.charAt(r.begin)===b()[r.begin]||n.charAt(r.begin+1)===b()[r.begin]||E(r.begin)){for(var u=f()+1,c=x().join("");null===n.match(t.escapeRegex(c)+"$");)c=c.slice(1);n=n.replace(c,""),n=n.split(""),I(a,!0,!1,n,i,r.begin<u),T(b())===!0&&e(a).trigger("complete")}else i.keyCode=t.keyCode.BACKSPACE,ee.keydownEvent.call(a,i);i.preventDefault()}},setValueEvent:function(t){var i=this,a=i.inputmask._valueGet();I(i,!0,!1,(e.isFunction(r.onBeforeMask)?r.onBeforeMask(a,r)||a:a).split("")),K=b().join(""),(r.clearMaskOnLostFocus||r.clearIncomplete)&&i.inputmask._valueGet()===x().join("")&&i.inputmask._valueSet("")},focusEvent:function(e){var t=this,i=t.inputmask._valueGet();r.showMaskOnFocus&&(!r.showMaskOnHover||r.showMaskOnHover&&""===i)&&(t.inputmask._valueGet()!==b().join("")?O(t,b(),C(f())):X===!1&&D(t,C(f()))),r.positionCaretOnTab===!0&&ee.clickEvent.apply(t,[e,!0]),K=b().join("")},mouseleaveEvent:function(e){var t=this;if(X=!1,r.clearMaskOnLostFocus&&document.activeElement!==t){var i=b().slice(),a=t.inputmask._valueGet();a!==t.getAttribute("placeholder")&&""!==a&&(f()===-1&&a===x().join("")?i=[]:N(i),O(t,i))}},clickEvent:function(t,i){function a(t){if(""!==r.radixPoint){var i=p().validPositions;if(void 0===i[t]||i[t].input===_(t)){if(t<C(-1))return!0;var a=e.inArray(r.radixPoint,b());if(a!==-1){for(var n in i)if(a<n&&i[n].input!==_(n))return!1;return!0}}}return!1}var n=this;setTimeout(function(){if(document.activeElement===n){var t=D(n);if(i&&(t.begin=t.end),t.begin===t.end)switch(r.positionCaretOnClick){case"none":break;case"radixFocus":if(a(t.begin)){var o=e.inArray(r.radixPoint,b().join(""));D(n,r.numericInput?C(o):o);break}default:var s=t.begin,l=f(s,!0),u=C(l);if(s<u)D(n,E(s)||E(s-1)?s:C(s));else{var c=_(u);(""!==c&&b()[u]!==c&&g(u).match.optionalQuantifier!==!0||!E(u)&&g(u).match.def===c)&&(u=C(u)),D(n,u)}}}},0)},dblclickEvent:function(e){var t=this;setTimeout(function(){D(t,0,C(f()))},0)},cutEvent:function(i){var a=this,n=e(a),r=D(a),o=i.originalEvent||i,s=window.clipboardData||o.clipboardData,l=q?b().slice(r.end,r.begin):b().slice(r.begin,r.end);s.setData("text",q?l.reverse().join(""):l.join("")),document.execCommand&&document.execCommand("copy"),G(a,t.keyCode.DELETE,r),O(a,b(),p().p,i,K!==b().join("")),a.inputmask._valueGet()===x().join("")&&n.trigger("cleared")},blurEvent:function(t){var i=e(this),a=this;if(a.inputmask){var n=a.inputmask._valueGet(),o=b().slice();K!==o.join("")&&setTimeout(function(){i.trigger("change"),K=o.join("")},0),""!==n&&(r.clearMaskOnLostFocus&&(f()===-1&&n===x().join("")?o=[]:N(o)),T(o)===!1&&(setTimeout(function(){i.trigger("incomplete")},0),r.clearIncomplete&&(d(),o=r.clearMaskOnLostFocus?[]:x().slice())),O(a,o,void 0,t))}},mouseenterEvent:function(e){var t=this;X=!0,document.activeElement!==t&&r.showMaskOnHover&&t.inputmask._valueGet()!==b().join("")&&O(t,b())},submitEvent:function(e){K!==b().join("")&&U.trigger("change"),r.clearMaskOnLostFocus&&f()===-1&&W.inputmask._valueGet&&W.inputmask._valueGet()===x().join("")&&W.inputmask._valueSet(""),r.removeMaskOnSubmit&&(W.inputmask._valueSet(W.inputmask.unmaskedvalue(),!0),setTimeout(function(){O(W,b())},0))},resetEvent:function(e){setTimeout(function(){U.trigger("setvalue")},0)}};if(void 0!==i)switch(i.action){case"isComplete":return W=i.el,T(b());case"unmaskedvalue":return void 0!==W&&void 0===i.value||(Q=i.value,Q=(e.isFunction(r.onBeforeMask)?r.onBeforeMask(Q,r)||Q:Q).split(""),I(void 0,!1,!1,q?Q.reverse():Q),e.isFunction(r.onBeforeWrite)&&r.onBeforeWrite(void 0,b(),0,r)),j(W);case"mask":H(W);break;case"format":return Q=(e.isFunction(r.onBeforeMask)?r.onBeforeMask(i.value,r)||i.value:i.value).split(""),I(void 0,!1,!1,q?Q.reverse():Q),e.isFunction(r.onBeforeWrite)&&r.onBeforeWrite(void 0,b(),0,r),i.metadata?{value:q?b().slice().reverse().join(""):b().join(""),metadata:n.call(this,{action:"getmetadata"},a,r)}:q?b().slice().reverse().join(""):b().join("");case"isValid":i.value?(Q=i.value.split(""),I(void 0,!1,!0,q?Q.reverse():Q)):i.value=b().join("");for(var te=b(),ie=F(),ae=te.length-1;ae>ie&&!E(ae);ae--);return te.splice(ie,ae+1-ie),T(te)&&i.value===b().join("");case"getemptymask":return x().join("");case"remove":if(W){U=e(W),W.inputmask._valueSet(j(W)),J.off(W);var ne;Object.getOwnPropertyDescriptor&&Object.getPrototypeOf?(ne=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(W),"value"),ne&&W.inputmask.__valueGet&&Object.defineProperty(W,"value",{get:W.inputmask.__valueGet,set:W.inputmask.__valueSet,configurable:!0})):document.__lookupGetter__&&W.__lookupGetter__("value")&&W.inputmask.__valueGet&&(W.__defineGetter__("value",W.inputmask.__valueGet),W.__defineSetter__("value",W.inputmask.__valueSet)),W.inputmask=void 0}return W;case"getmetadata":if(e.isArray(a.metadata)){var re=c(!0,0,!1).join("");return e.each(a.metadata,function(e,t){if(t.mask===re)return re=t,!1}),re}return a.metadata}}var r=navigator.userAgent,o=/mobile/i.test(r),s=/iemobile/i.test(r),l=/iphone/i.test(r)&&!s,u=/android/i.test(r)&&!s;return t.prototype={defaults:{placeholder:"_",optionalmarker:{start:"[",end:"]"},quantifiermarker:{start:"{",end:"}"},groupmarker:{start:"(",end:")"},alternatormarker:"|",escapeChar:"\\",mask:null,oncomplete:e.noop,onincomplete:e.noop,oncleared:e.noop,repeat:0,greedy:!0,autoUnmask:!1,removeMaskOnSubmit:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,aliases:{},alias:null,onKeyDown:e.noop,onBeforeMask:null,onBeforePaste:function(t,i){return e.isFunction(i.onBeforeMask)?i.onBeforeMask(t,i):t},onBeforeWrite:null,onUnMask:null,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:e.noop,skipOptionalPartCharacter:" ",numericInput:!1,rightAlign:!1,undoOnEscape:!0,radixPoint:"",radixPointDefinitionSymbol:void 0,groupSeparator:"",keepStatic:null,positionCaretOnTab:!0,tabThrough:!1,supportsInputType:["text","tel","password"],definitions:{9:{validator:"[0-9]",cardinality:1,definitionSymbol:"*"},a:{validator:"[A-Za-zА-яЁёÀ-ÿµ]",cardinality:1,definitionSymbol:"*"},"*":{validator:"[0-9A-Za-zА-яЁёÀ-ÿµ]",cardinality:1}},ignorables:[8,9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123],isComplete:null,canClearPosition:e.noop,postValidation:null,staticDefinitionSymbol:void 0,jitMasking:!1,nullable:!0,inputEventOnly:!1,noValuePatching:!1,positionCaretOnClick:"lvp",casing:null,inputmode:"verbatim",colorMask:!1,androidHack:!1},masksCache:{},mask:function(r){function o(t,a,n,r){function o(e,i){i=void 0!==i?i:t.getAttribute(r+"-"+e),null!==i&&("string"==typeof i&&(0===e.indexOf("on")?i=window[i]:"false"===i?i=!1:"true"===i&&(i=!0)),n[e]=i)}var s,l,u,c,p=t.getAttribute(r);if(p&&""!==p&&(p=p.replace(new RegExp("'","g"),'"'),l=JSON.parse("{"+p+"}")),l){u=void 0;for(c in l)if("alias"===c.toLowerCase()){u=l[c];break}}o("alias",u),n.alias&&i(n.alias,n,a);for(s in a){if(l){u=void 0;for(c in l)if(c.toLowerCase()===s.toLowerCase()){u=l[c];break}}o(s,u)}return e.extend(!0,a,n),a}var s=this;return"string"==typeof r&&(r=document.getElementById(r)||document.querySelectorAll(r)),r=r.nodeName?[r]:r,e.each(r,function(i,r){var l=e.extend(!0,{},s.opts);o(r,l,e.extend(!0,{},s.userOptions),s.dataAttribute);var u=a(l,s.noMasksCache);void 0!==u&&(void 0!==r.inputmask&&r.inputmask.remove(),r.inputmask=new t,r.inputmask.opts=l,r.inputmask.noMasksCache=s.noMasksCache,r.inputmask.userOptions=e.extend(!0,{},s.userOptions),r.inputmask.el=r,r.inputmask.maskset=u,e.data(r,"_inputmask_opts",l),n.call(r.inputmask,{action:"mask"}))}),r&&r[0]?r[0].inputmask||this:this},option:function(t,i){return"string"==typeof t?this.opts[t]:"object"==typeof t?(e.extend(this.userOptions,t),this.el&&i!==!0&&this.mask(this.el),this):void 0},unmaskedvalue:function(e){return this.maskset=this.maskset||a(this.opts,this.noMasksCache),n.call(this,{action:"unmaskedvalue",value:e})},remove:function(){return n.call(this,{action:"remove"})},getemptymask:function(){return this.maskset=this.maskset||a(this.opts,this.noMasksCache),n.call(this,{action:"getemptymask"})},hasMaskedValue:function(){return!this.opts.autoUnmask},isComplete:function(){return this.maskset=this.maskset||a(this.opts,this.noMasksCache),n.call(this,{action:"isComplete"})},getmetadata:function(){return this.maskset=this.maskset||a(this.opts,this.noMasksCache),n.call(this,{action:"getmetadata"})},isValid:function(e){return this.maskset=this.maskset||a(this.opts,this.noMasksCache),n.call(this,{action:"isValid",value:e})},format:function(e,t){return this.maskset=this.maskset||a(this.opts,this.noMasksCache),n.call(this,{action:"format",value:e,metadata:t})},analyseMask:function(t,i){function a(e,t,i,a){this.matches=[],this.openGroup=e||!1,this.isGroup=e||!1,this.isOptional=t||!1,this.isQuantifier=i||!1,this.isAlternator=a||!1,this.quantifier={min:1,max:1}}function n(t,a,n){var r=i.definitions[a];n=void 0!==n?n:t.matches.length;var o=t.matches[n-1];if(r&&!v){r.placeholder=e.isFunction(r.placeholder)?r.placeholder(i):r.placeholder;for(var s=r.prevalidator,l=s?s.length:0,u=1;u<r.cardinality;u++){var c=l>=u?s[u-1]:[],p=c.validator,d=c.cardinality;t.matches.splice(n++,0,{fn:p?"string"==typeof p?new RegExp(p):new function(){this.test=p}:new RegExp("."),cardinality:d?d:1,optionality:t.isOptional,newBlockMarker:void 0===o||o.def!==(r.definitionSymbol||a),casing:r.casing,def:r.definitionSymbol||a,placeholder:r.placeholder,nativeDef:a}),o=t.matches[n-1]}t.matches.splice(n++,0,{fn:r.validator?"string"==typeof r.validator?new RegExp(r.validator):new function(){this.test=r.validator}:new RegExp("."),cardinality:r.cardinality,optionality:t.isOptional,newBlockMarker:void 0===o||o.def!==(r.definitionSymbol||a),casing:r.casing,def:r.definitionSymbol||a,placeholder:r.placeholder,nativeDef:a})}else t.matches.splice(n++,0,{fn:null,cardinality:0,optionality:t.isOptional,newBlockMarker:void 0===o||o.def!==a,casing:null,def:i.staticDefinitionSymbol||a,placeholder:void 0!==i.staticDefinitionSymbol?a:void 0,nativeDef:a}),v=!1}function r(t){t&&t.matches&&e.each(t.matches,function(e,a){var o=t.matches[e+1];(void 0===o||void 0===o.matches||o.isQuantifier===!1)&&a&&a.isGroup&&(a.isGroup=!1,n(a,i.groupmarker.start,0),a.openGroup!==!0&&n(a,i.groupmarker.end)),r(a)})}function o(){if(y.length>0){if(p=y[y.length-1],n(p,u),p.isAlternator){d=y.pop();for(var e=0;e<d.matches.length;e++)d.matches[e].isGroup=!1;y.length>0?(p=y[y.length-1],p.matches.push(d)):g.matches.push(d)}}else n(g,u)}function s(e){function t(e){return e===i.optionalmarker.start?e=i.optionalmarker.end:e===i.optionalmarker.end?e=i.optionalmarker.start:e===i.groupmarker.start?e=i.groupmarker.end:e===i.groupmarker.end&&(e=i.groupmarker.start),e}e.matches=e.matches.reverse();for(var a in e.matches){var n=parseInt(a);if(e.matches[a].isQuantifier&&e.matches[n+1]&&e.matches[n+1].isGroup){var r=e.matches[a];e.matches.splice(a,1),e.matches.splice(n+1,0,r)}void 0!==e.matches[a].matches?e.matches[a]=s(e.matches[a]):e.matches[a]=t(e.matches[a])}return e}for(var l,u,c,p,d,f,m,h=/(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g,v=!1,g=new a,y=[],k=[];l=h.exec(t);)if(u=l[0],v)o();else switch(u.charAt(0)){case i.escapeChar:v=!0;break;case i.optionalmarker.end:case i.groupmarker.end:if(c=y.pop(),c.openGroup=!1,void 0!==c)if(y.length>0){if(p=y[y.length-1],p.matches.push(c),p.isAlternator){d=y.pop();for(var x=0;x<d.matches.length;x++)d.matches[x].isGroup=!1;y.length>0?(p=y[y.length-1],p.matches.push(d)):g.matches.push(d)}}else g.matches.push(c);else o();break;case i.optionalmarker.start:y.push(new a(!1,!0));break;case i.groupmarker.start:y.push(new a(!0));break;case i.quantifiermarker.start:var b=new a(!1,!1,!0);u=u.replace(/[{}]/g,"");var P=u.split(","),w=isNaN(P[0])?P[0]:parseInt(P[0]),S=1===P.length?w:isNaN(P[1])?P[1]:parseInt(P[1]);if("*"!==S&&"+"!==S||(w="*"===S?0:1),b.quantifier={min:w,max:S},y.length>0){var A=y[y.length-1].matches;l=A.pop(),l.isGroup||(m=new a(!0),m.matches.push(l),l=m),A.push(l),A.push(b)}else l=g.matches.pop(),l.isGroup||(m=new a(!0),m.matches.push(l),l=m),g.matches.push(l),g.matches.push(b);break;case i.alternatormarker:y.length>0?(p=y[y.length-1],f=p.matches.pop()):f=g.matches.pop(),f.isAlternator?y.push(f):(d=new a(!1,!1,!1,!0),d.matches.push(f),y.push(d));break;default:o()}for(;y.length>0;)c=y.pop(),g.matches.push(c);return g.matches.length>0&&(r(g),k.push(g)),i.numericInput&&s(k[0]),k}},t.extendDefaults=function(i){e.extend(!0,t.prototype.defaults,i)},t.extendDefinitions=function(i){e.extend(!0,t.prototype.defaults.definitions,i)},t.extendAliases=function(i){e.extend(!0,t.prototype.defaults.aliases,i)},t.format=function(e,i,a){return t(i).format(e,a)},t.unmask=function(e,i){return t(i).unmaskedvalue(e)},t.isValid=function(e,i){return t(i).isValid(e)},t.remove=function(t){e.each(t,function(e,t){t.inputmask&&t.inputmask.remove()})},t.escapeRegex=function(e){var t=["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^"];return e.replace(new RegExp("(\\"+t.join("|\\")+")","gim"),"\\$1")},t.keyCode={ALT:18,BACKSPACE:8,BACKSPACE_SAFARI:127,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91,X:88},window.Inputmask=t,t}(jQuery),function(e,t){return void 0===e.fn.inputmask&&(e.fn.inputmask=function(i,a){var n,r=this[0];if(void 0===a&&(a={}),"string"==typeof i)switch(i){case"unmaskedvalue":return r&&r.inputmask?r.inputmask.unmaskedvalue():e(r).val();case"remove":return this.each(function(){this.inputmask&&this.inputmask.remove()});case"getemptymask":return r&&r.inputmask?r.inputmask.getemptymask():"";case"hasMaskedValue":return!(!r||!r.inputmask)&&r.inputmask.hasMaskedValue();case"isComplete":return!r||!r.inputmask||r.inputmask.isComplete();case"getmetadata":return r&&r.inputmask?r.inputmask.getmetadata():void 0;case"setvalue":e(r).val(a),r&&void 0===r.inputmask&&e(r).triggerHandler("setvalue");break;case"option":if("string"!=typeof a)return this.each(function(){if(void 0!==this.inputmask)return this.inputmask.option(a)});if(r&&void 0!==r.inputmask)return r.inputmask.option(a);break;default:return a.alias=i,n=new t(a),this.each(function(){n.mask(this)})}else{if("object"==typeof i)return n=new t(i),void 0===i.mask&&void 0===i.alias?this.each(function(){return void 0!==this.inputmask?this.inputmask.option(i):void n.mask(this)}):this.each(function(){n.mask(this)});if(void 0===i)return this.each(function(){n=new t(a),n.mask(this)})}}),e.fn.inputmask}(jQuery,Inputmask),function(e,t){}(jQuery,Inputmask),function(e,t){function i(e){return isNaN(e)||29===new Date(e,2,0).getDate()}return t.extendAliases({"dd/mm/yyyy":{mask:"1/2/y",placeholder:"dd/mm/yyyy",regex:{val1pre:new RegExp("[0-3]"),val1:new RegExp("0[1-9]|[12][0-9]|3[01]"),val2pre:function(e){var i=t.escapeRegex.call(this,e);return new RegExp("((0[1-9]|[12][0-9]|3[01])"+i+"[01])")},val2:function(e){var i=t.escapeRegex.call(this,e);return new RegExp("((0[1-9]|[12][0-9])"+i+"(0[1-9]|1[012]))|(30"+i+"(0[13-9]|1[012]))|(31"+i+"(0[13578]|1[02]))")}},leapday:"29/02/",separator:"/",yearrange:{minyear:1900,maxyear:2099},isInYearRange:function(e,t,i){if(isNaN(e))return!1;var a=parseInt(e.concat(t.toString().slice(e.length))),n=parseInt(e.concat(i.toString().slice(e.length)));return!isNaN(a)&&t<=a&&a<=i||!isNaN(n)&&t<=n&&n<=i},determinebaseyear:function(e,t,i){var a=(new Date).getFullYear();if(e>a)return e;if(t<a){for(var n=t.toString().slice(0,2),r=t.toString().slice(2,4);t<n+i;)n--;var o=n+r;return e>o?e:o}if(e<=a&&a<=t){for(var s=a.toString().slice(0,2);t<s+i;)s--;var l=s+i;return l<e?e:l}return a},onKeyDown:function(i,a,n,r){var o=e(this);if(i.ctrlKey&&i.keyCode===t.keyCode.RIGHT){var s=new Date;o.val(s.getDate().toString()+(s.getMonth()+1).toString()+s.getFullYear().toString()),o.trigger("setvalue")}},getFrontValue:function(e,t,i){for(var a=0,n=0,r=0;r<e.length&&"2"!==e.charAt(r);r++){var o=i.definitions[e.charAt(r)];o?(a+=n,n=o.cardinality):n++}return t.join("").substr(a,n)},postValidation:function(e,t,a){var n,r,o=e.join("");return 0===a.mask.indexOf("y")?(r=o.substr(0,4),n=o.substr(4,11)):(r=o.substr(6,11),n=o.substr(0,6)),t&&(n!==a.leapday||i(r))},definitions:{1:{validator:function(e,t,i,a,n){var r=n.regex.val1.test(e);return a||r||e.charAt(1)!==n.separator&&"-./".indexOf(e.charAt(1))===-1||!(r=n.regex.val1.test("0"+e.charAt(0)))?r:(t.buffer[i-1]="0",{refreshFromBuffer:{start:i-1,end:i},pos:i,c:e.charAt(0)})},cardinality:2,prevalidator:[{validator:function(e,t,i,a,n){var r=e;isNaN(t.buffer[i+1])||(r+=t.buffer[i+1]);var o=1===r.length?n.regex.val1pre.test(r):n.regex.val1.test(r);if(!a&&!o){if(o=n.regex.val1.test(e+"0"))return t.buffer[i]=e,t.buffer[++i]="0",{pos:i,c:"0"};if(o=n.regex.val1.test("0"+e))return t.buffer[i]="0",i++,{pos:i}}return o},cardinality:1}]},2:{validator:function(e,t,i,a,n){var r=n.getFrontValue(t.mask,t.buffer,n);r.indexOf(n.placeholder[0])!==-1&&(r="01"+n.separator);var o=n.regex.val2(n.separator).test(r+e);return a||o||e.charAt(1)!==n.separator&&"-./".indexOf(e.charAt(1))===-1||!(o=n.regex.val2(n.separator).test(r+"0"+e.charAt(0)))?o:(t.buffer[i-1]="0",{refreshFromBuffer:{start:i-1,end:i},pos:i,c:e.charAt(0)})},cardinality:2,prevalidator:[{validator:function(e,t,i,a,n){isNaN(t.buffer[i+1])||(e+=t.buffer[i+1]);var r=n.getFrontValue(t.mask,t.buffer,n);r.indexOf(n.placeholder[0])!==-1&&(r="01"+n.separator);var o=1===e.length?n.regex.val2pre(n.separator).test(r+e):n.regex.val2(n.separator).test(r+e);return a||o||!(o=n.regex.val2(n.separator).test(r+"0"+e))?o:(t.buffer[i]="0",i++,{pos:i})},cardinality:1}]},y:{validator:function(e,t,i,a,n){return n.isInYearRange(e,n.yearrange.minyear,n.yearrange.maxyear)},cardinality:4,prevalidator:[{validator:function(e,t,i,a,n){var r=n.isInYearRange(e,n.yearrange.minyear,n.yearrange.maxyear);if(!a&&!r){var o=n.determinebaseyear(n.yearrange.minyear,n.yearrange.maxyear,e+"0").toString().slice(0,1);if(r=n.isInYearRange(o+e,n.yearrange.minyear,n.yearrange.maxyear))return t.buffer[i++]=o.charAt(0),{pos:i};if(o=n.determinebaseyear(n.yearrange.minyear,n.yearrange.maxyear,e+"0").toString().slice(0,2),r=n.isInYearRange(o+e,n.yearrange.minyear,n.yearrange.maxyear))return t.buffer[i++]=o.charAt(0),t.buffer[i++]=o.charAt(1),{pos:i}}return r},cardinality:1},{validator:function(e,t,i,a,n){var r=n.isInYearRange(e,n.yearrange.minyear,n.yearrange.maxyear);if(!a&&!r){var o=n.determinebaseyear(n.yearrange.minyear,n.yearrange.maxyear,e).toString().slice(0,2);if(r=n.isInYearRange(e[0]+o[1]+e[1],n.yearrange.minyear,n.yearrange.maxyear))return t.buffer[i++]=o.charAt(1),{pos:i};if(o=n.determinebaseyear(n.yearrange.minyear,n.yearrange.maxyear,e).toString().slice(0,2),r=n.isInYearRange(o+e,n.yearrange.minyear,n.yearrange.maxyear))return t.buffer[i-1]=o.charAt(0),t.buffer[i++]=o.charAt(1),t.buffer[i++]=e.charAt(0),{refreshFromBuffer:{start:i-3,end:i},pos:i}}return r},cardinality:2},{validator:function(e,t,i,a,n){return n.isInYearRange(e,n.yearrange.minyear,n.yearrange.maxyear)},cardinality:3}]}},insertMode:!1,autoUnmask:!1},"mm/dd/yyyy":{placeholder:"mm/dd/yyyy",alias:"dd/mm/yyyy",regex:{val2pre:function(e){var i=t.escapeRegex.call(this,e);return new RegExp("((0[13-9]|1[012])"+i+"[0-3])|(02"+i+"[0-2])")},val2:function(e){var i=t.escapeRegex.call(this,e);return new RegExp("((0[1-9]|1[012])"+i+"(0[1-9]|[12][0-9]))|((0[13-9]|1[012])"+i+"30)|((0[13578]|1[02])"+i+"31)")},val1pre:new RegExp("[01]"),val1:new RegExp("0[1-9]|1[012]")},leapday:"02/29/",onKeyDown:function(i,a,n,r){var o=e(this);if(i.ctrlKey&&i.keyCode===t.keyCode.RIGHT){var s=new Date;o.val((s.getMonth()+1).toString()+s.getDate().toString()+s.getFullYear().toString()),o.trigger("setvalue")}}},"yyyy/mm/dd":{mask:"y/1/2",placeholder:"yyyy/mm/dd",alias:"mm/dd/yyyy",leapday:"/02/29",onKeyDown:function(i,a,n,r){var o=e(this);if(i.ctrlKey&&i.keyCode===t.keyCode.RIGHT){var s=new Date;o.val(s.getFullYear().toString()+(s.getMonth()+1).toString()+s.getDate().toString()),o.trigger("setvalue")}}},"dd.mm.yyyy":{mask:"1.2.y",placeholder:"dd.mm.yyyy",leapday:"29.02.",separator:".",alias:"dd/mm/yyyy"},"dd-mm-yyyy":{mask:"1-2-y",placeholder:"dd-mm-yyyy",leapday:"29-02-",separator:"-",alias:"dd/mm/yyyy"},"mm.dd.yyyy":{mask:"1.2.y",placeholder:"mm.dd.yyyy",leapday:"02.29.",separator:".",alias:"mm/dd/yyyy"},"mm-dd-yyyy":{mask:"1-2-y",placeholder:"mm-dd-yyyy",leapday:"02-29-",separator:"-",alias:"mm/dd/yyyy"},"yyyy.mm.dd":{mask:"y.1.2",placeholder:"yyyy.mm.dd",leapday:".02.29",separator:".",alias:"yyyy/mm/dd"},"yyyy-mm-dd":{mask:"y-1-2",placeholder:"yyyy-mm-dd",leapday:"-02-29",separator:"-",alias:"yyyy/mm/dd"},datetime:{mask:"1/2/y h:s",placeholder:"dd/mm/yyyy hh:mm",alias:"dd/mm/yyyy",regex:{hrspre:new RegExp("[012]"),hrs24:new RegExp("2[0-4]|1[3-9]"),hrs:new RegExp("[01][0-9]|2[0-4]"),ampm:new RegExp("^[a|p|A|P][m|M]"),mspre:new RegExp("[0-5]"),ms:new RegExp("[0-5][0-9]")},timeseparator:":",hourFormat:"24",definitions:{h:{validator:function(e,t,i,a,n){if("24"===n.hourFormat&&24===parseInt(e,10))return t.buffer[i-1]="0",t.buffer[i]="0",{refreshFromBuffer:{start:i-1,end:i},c:"0"};var r=n.regex.hrs.test(e);if(!a&&!r&&(e.charAt(1)===n.timeseparator||"-.:".indexOf(e.charAt(1))!==-1)&&(r=n.regex.hrs.test("0"+e.charAt(0))))return t.buffer[i-1]="0",t.buffer[i]=e.charAt(0),i++,{refreshFromBuffer:{start:i-2,end:i},pos:i,c:n.timeseparator};if(r&&"24"!==n.hourFormat&&n.regex.hrs24.test(e)){var o=parseInt(e,10);return 24===o?(t.buffer[i+5]="a",t.buffer[i+6]="m"):(t.buffer[i+5]="p",t.buffer[i+6]="m"),o-=12,o<10?(t.buffer[i]=o.toString(),t.buffer[i-1]="0"):(t.buffer[i]=o.toString().charAt(1),t.buffer[i-1]=o.toString().charAt(0)),{refreshFromBuffer:{start:i-1,end:i+6},c:t.buffer[i]}}return r},cardinality:2,prevalidator:[{validator:function(e,t,i,a,n){var r=n.regex.hrspre.test(e);return a||r||!(r=n.regex.hrs.test("0"+e))?r:(t.buffer[i]="0",i++,{pos:i})},cardinality:1}]},s:{validator:"[0-5][0-9]",cardinality:2,prevalidator:[{validator:function(e,t,i,a,n){var r=n.regex.mspre.test(e);return a||r||!(r=n.regex.ms.test("0"+e))?r:(t.buffer[i]="0",i++,{pos:i})},cardinality:1}]},t:{validator:function(e,t,i,a,n){return n.regex.ampm.test(e+"m")},casing:"lower",cardinality:1}},insertMode:!1,autoUnmask:!1},datetime12:{mask:"1/2/y h:s t\\m",placeholder:"dd/mm/yyyy hh:mm xm",alias:"datetime",hourFormat:"12"},"mm/dd/yyyy hh:mm xm":{mask:"1/2/y h:s t\\m",placeholder:"mm/dd/yyyy hh:mm xm",alias:"datetime12",regex:{val2pre:function(e){var i=t.escapeRegex.call(this,e);return new RegExp("((0[13-9]|1[012])"+i+"[0-3])|(02"+i+"[0-2])")},val2:function(e){var i=t.escapeRegex.call(this,e);return new RegExp("((0[1-9]|1[012])"+i+"(0[1-9]|[12][0-9]))|((0[13-9]|1[012])"+i+"30)|((0[13578]|1[02])"+i+"31)")},val1pre:new RegExp("[01]"),val1:new RegExp("0[1-9]|1[012]")},leapday:"02/29/",onKeyDown:function(i,a,n,r){var o=e(this);if(i.ctrlKey&&i.keyCode===t.keyCode.RIGHT){var s=new Date;o.val((s.getMonth()+1).toString()+s.getDate().toString()+s.getFullYear().toString()),o.trigger("setvalue")}}},"hh:mm t":{mask:"h:s t\\m",placeholder:"hh:mm xm",alias:"datetime",hourFormat:"12"},"h:s t":{mask:"h:s t\\m",placeholder:"hh:mm xm",alias:"datetime",hourFormat:"12"},"hh:mm:ss":{mask:"h:s:s",placeholder:"hh:mm:ss",alias:"datetime",autoUnmask:!1},"hh:mm":{mask:"h:s",placeholder:"hh:mm",alias:"datetime",autoUnmask:!1},date:{alias:"dd/mm/yyyy"},"mm/yyyy":{mask:"1/y",placeholder:"mm/yyyy",leapday:"donotuse",separator:"/",alias:"mm/dd/yyyy"},shamsi:{regex:{val2pre:function(e){var i=t.escapeRegex.call(this,e);return new RegExp("((0[1-9]|1[012])"+i+"[0-3])")},val2:function(e){var i=t.escapeRegex.call(this,e);return new RegExp("((0[1-9]|1[012])"+i+"(0[1-9]|[12][0-9]))|((0[1-9]|1[012])"+i+"30)|((0[1-6])"+i+"31)")},val1pre:new RegExp("[01]"),val1:new RegExp("0[1-9]|1[012]")},yearrange:{minyear:1300,maxyear:1499},mask:"y/1/2",leapday:"/12/30",placeholder:"yyyy/mm/dd",alias:"mm/dd/yyyy",clearIncomplete:!0}}),t}(jQuery,Inputmask),function(e,t){return t.extendDefinitions({A:{validator:"[A-Za-zА-яЁёÀ-ÿµ]",cardinality:1,casing:"upper"},"&":{validator:"[0-9A-Za-zА-яЁёÀ-ÿµ]",cardinality:1,casing:"upper"},"#":{validator:"[0-9A-Fa-f]",cardinality:1,casing:"upper"}}),t.extendAliases({url:{definitions:{i:{validator:".",cardinality:1}},mask:"(\\http://)|(\\http\\s://)|(ftp://)|(ftp\\s://)i{+}",insertMode:!1,autoUnmask:!1,inputmode:"url"},ip:{mask:"i[i[i]].i[i[i]].i[i[i]].i[i[i]]",definitions:{i:{validator:function(e,t,i,a,n){return i-1>-1&&"."!==t.buffer[i-1]?(e=t.buffer[i-1]+e,e=i-2>-1&&"."!==t.buffer[i-2]?t.buffer[i-2]+e:"0"+e):e="00"+e,new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(e)},cardinality:1}},onUnMask:function(e,t,i){return e},inputmode:"numeric"},email:{mask:"*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",greedy:!1,onBeforePaste:function(e,t){return e=e.toLowerCase(),e.replace("mailto:","")},definitions:{"*":{validator:"[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",cardinality:1,casing:"lower"},"-":{validator:"[0-9A-Za-z-]",cardinality:1,casing:"lower"}},onUnMask:function(e,t,i){return e},inputmode:"email"},mac:{mask:"##:##:##:##:##:##"},vin:{mask:"V{13}9{4}",definitions:{V:{validator:"[A-HJ-NPR-Za-hj-npr-z\\d]",cardinality:1,casing:"upper"}},clearIncomplete:!0,autoUnmask:!0}}),t}(jQuery,Inputmask),function(e,t){return t.extendAliases({numeric:{mask:function(e){function i(t){for(var i="",a=0;a<t.length;a++)i+=e.definitions[t.charAt(a)]||e.optionalmarker.start===t.charAt(a)||e.optionalmarker.end===t.charAt(a)||e.quantifiermarker.start===t.charAt(a)||e.quantifiermarker.end===t.charAt(a)||e.groupmarker.start===t.charAt(a)||e.groupmarker.end===t.charAt(a)||e.alternatormarker===t.charAt(a)?"\\"+t.charAt(a):t.charAt(a);return i}if(0!==e.repeat&&isNaN(e.integerDigits)&&(e.integerDigits=e.repeat),e.repeat=0,e.groupSeparator===e.radixPoint&&("."===e.radixPoint?e.groupSeparator=",":","===e.radixPoint?e.groupSeparator=".":e.groupSeparator="")," "===e.groupSeparator&&(e.skipOptionalPartCharacter=void 0),e.autoGroup=e.autoGroup&&""!==e.groupSeparator,e.autoGroup&&("string"==typeof e.groupSize&&isFinite(e.groupSize)&&(e.groupSize=parseInt(e.groupSize)),isFinite(e.integerDigits))){var a=Math.floor(e.integerDigits/e.groupSize),n=e.integerDigits%e.groupSize;e.integerDigits=parseInt(e.integerDigits)+(0===n?a-1:a),e.integerDigits<1&&(e.integerDigits="*")}e.placeholder.length>1&&(e.placeholder=e.placeholder.charAt(0)),"radixFocus"===e.positionCaretOnClick&&""===e.placeholder&&e.integerOptional===!1&&(e.positionCaretOnClick="lvp"),e.definitions[";"]=e.definitions["~"],e.definitions[";"].definitionSymbol="~",e.numericInput===!0&&(e.positionCaretOnClick="radixFocus"===e.positionCaretOnClick?"lvp":e.positionCaretOnClick,e.digitsOptional=!1,isNaN(e.digits)&&(e.digits=2),e.decimalProtect=!1);var r="[+]";if(r+=i(e.prefix),r+=e.integerOptional===!0?"~{1,"+e.integerDigits+"}":"~{"+e.integerDigits+"}",void 0!==e.digits){e.decimalProtect&&(e.radixPointDefinitionSymbol=":");var o=e.digits.toString().split(",");isFinite(o[0]&&o[1]&&isFinite(o[1]))?r+=(e.decimalProtect?":":e.radixPoint)+";{"+e.digits+"}":(isNaN(e.digits)||parseInt(e.digits)>0)&&(r+=e.digitsOptional?"["+(e.decimalProtect?":":e.radixPoint)+";{1,"+e.digits+"}]":(e.decimalProtect?":":e.radixPoint)+";{"+e.digits+"}")}return r+=i(e.suffix),r+="[-]",e.greedy=!1,null!==e.min&&(e.min=e.min.toString().replace(new RegExp(t.escapeRegex(e.groupSeparator),"g"),""),","===e.radixPoint&&(e.min=e.min.replace(e.radixPoint,"."))),null!==e.max&&(e.max=e.max.toString().replace(new RegExp(t.escapeRegex(e.groupSeparator),"g"),""),","===e.radixPoint&&(e.max=e.max.replace(e.radixPoint,"."))),r},placeholder:"",greedy:!1,digits:"*",digitsOptional:!0,radixPoint:".",positionCaretOnClick:"radixFocus",groupSize:3,groupSeparator:"",autoGroup:!1,allowPlus:!0,allowMinus:!0,negationSymbol:{front:"-",back:""},integerDigits:"+",integerOptional:!0,prefix:"",suffix:"",rightAlign:!0,decimalProtect:!0,min:null,max:null,step:1,insertMode:!0,autoUnmask:!1,unmaskAsNumber:!1,inputmode:"numeric",postFormat:function(i,a,n){n.numericInput===!0&&(i=i.reverse(),isFinite(a)&&(a=i.join("").length-a-1));var r,o;a=a>=i.length?i.length-1:a<0?0:a;var s=i[a],l=i.slice();s===n.groupSeparator&&(l.splice(a--,1),s=l[a]);var u=l.join("").match(new RegExp("^"+t.escapeRegex(n.negationSymbol.front)));u=null!==u&&1===u.length,a>(u?n.negationSymbol.front.length:0)+n.prefix.length&&a<l.length-n.suffix.length&&(l[a]="!");var c=l.join(""),p=l.join();if(u&&(c=c.replace(new RegExp("^"+t.escapeRegex(n.negationSymbol.front)),""),c=c.replace(new RegExp(t.escapeRegex(n.negationSymbol.back)+"$"),"")),c=c.replace(new RegExp(t.escapeRegex(n.suffix)+"$"),""),c=c.replace(new RegExp("^"+t.escapeRegex(n.prefix)),""),c.length>0&&n.autoGroup||c.indexOf(n.groupSeparator)!==-1){var d=t.escapeRegex(n.groupSeparator);c=c.replace(new RegExp(d,"g"),"");var f=c.split(s===n.radixPoint?"!":n.radixPoint);if(c=""===n.radixPoint?c:f[0],s!==n.negationSymbol.front&&(c=c.replace("!","?")),c.length>n.groupSize)for(var m=new RegExp("([-+]?[\\d?]+)([\\d?]{"+n.groupSize+"})");m.test(c)&&""!==n.groupSeparator;)c=c.replace(m,"$1"+n.groupSeparator+"$2"),c=c.replace(n.groupSeparator+n.groupSeparator,n.groupSeparator);c=c.replace("?","!"),""!==n.radixPoint&&f.length>1&&(c+=(s===n.radixPoint?"!":n.radixPoint)+f[1])}c=n.prefix+c+n.suffix,u&&(c=n.negationSymbol.front+c+n.negationSymbol.back);var h=p!==c.split("").join(),v=e.inArray("!",c);if(v===-1&&(v=a),h){for(i.length=c.length,r=0,o=c.length;r<o;r++)i[r]=c.charAt(r);i[v]=s}return v=n.numericInput&&isFinite(a)?i.join("").length-v-1:v,n.numericInput&&(i=i.reverse(),e.inArray(n.radixPoint,i)<v&&i.join("").length-n.suffix.length!==v&&(v-=1)),{pos:v,refreshFromBuffer:h,buffer:i,isNegative:u}},onBeforeWrite:function(i,a,n,r){var o;if(i&&("blur"===i.type||"checkval"===i.type||"keydown"===i.type)){var s=r.numericInput?a.slice().reverse().join(""):a.join(""),l=s.replace(r.prefix,"");l=l.replace(r.suffix,""),l=l.replace(new RegExp(t.escapeRegex(r.groupSeparator),"g"),""),","===r.radixPoint&&(l=l.replace(r.radixPoint,"."));var u=l.match(new RegExp("[-"+t.escapeRegex(r.negationSymbol.front)+"]","g"));if(u=null!==u&&1===u.length,l=l.replace(new RegExp("[-"+t.escapeRegex(r.negationSymbol.front)+"]","g"),""),
l=l.replace(new RegExp(t.escapeRegex(r.negationSymbol.back)+"$"),""),isNaN(r.placeholder)&&(l=l.replace(new RegExp(t.escapeRegex(r.placeholder),"g"),"")),l=l===r.negationSymbol.front?l+"0":l,""!==l&&isFinite(l)){var c=parseFloat(l),p=u?c*-1:c;if(null!==r.min&&isFinite(r.min)&&p<parseFloat(r.min)?(c=Math.abs(r.min),u=r.min<0,s=void 0):null!==r.max&&isFinite(r.max)&&p>parseFloat(r.max)&&(c=Math.abs(r.max),u=r.max<0,s=void 0),l=c.toString().replace(".",r.radixPoint).split(""),isFinite(r.digits)){var d=e.inArray(r.radixPoint,l),f=e.inArray(r.radixPoint,s);d===-1&&(l.push(r.radixPoint),d=l.length-1);for(var m=1;m<=r.digits;m++)r.digitsOptional||void 0!==l[d+m]&&l[d+m]!==r.placeholder.charAt(0)?f!==-1&&void 0!==s[f+m]&&(l[d+m]=l[d+m]||s[f+m]):l[d+m]="0";l[l.length-1]===r.radixPoint&&delete l[l.length-1]}if(c.toString()!==l&&c.toString()+"."!==l||u)return l=(r.prefix+l.join("")).split(""),!u||0===c&&"blur"===i.type||(l.unshift(r.negationSymbol.front),l.push(r.negationSymbol.back)),r.numericInput&&(l=l.reverse()),o=r.postFormat(l,r.numericInput?n:n-1,r),o.buffer&&(o.refreshFromBuffer=o.buffer.join("")!==a.join("")),o}}if(r.autoGroup)return o=r.postFormat(a,r.numericInput?n:n-1,r),o.caret=n<(o.isNegative?r.negationSymbol.front.length:0)+r.prefix.length||n>o.buffer.length-(o.isNegative?r.negationSymbol.back.length:0)?o.pos:o.pos+1,o},regex:{integerPart:function(e){return new RegExp("["+t.escapeRegex(e.negationSymbol.front)+"+]?\\d+")},integerNPart:function(e){return new RegExp("[\\d"+t.escapeRegex(e.groupSeparator)+t.escapeRegex(e.placeholder.charAt(0))+"]+")}},signHandler:function(e,t,i,a,n){if(!a&&n.allowMinus&&"-"===e||n.allowPlus&&"+"===e){var r=t.buffer.join("").match(n.regex.integerPart(n));if(r&&r[0].length>0)return t.buffer[r.index]===("-"===e?"+":n.negationSymbol.front)?"-"===e?""!==n.negationSymbol.back?{pos:0,c:n.negationSymbol.front,remove:0,caret:i,insert:{pos:t.buffer.length-1,c:n.negationSymbol.back}}:{pos:0,c:n.negationSymbol.front,remove:0,caret:i}:""!==n.negationSymbol.back?{pos:0,c:"+",remove:[0,t.buffer.length-1],caret:i}:{pos:0,c:"+",remove:0,caret:i}:t.buffer[0]===("-"===e?n.negationSymbol.front:"+")?"-"===e&&""!==n.negationSymbol.back?{remove:[0,t.buffer.length-1],caret:i-1}:{remove:0,caret:i-1}:"-"===e?""!==n.negationSymbol.back?{pos:0,c:n.negationSymbol.front,caret:i+1,insert:{pos:t.buffer.length,c:n.negationSymbol.back}}:{pos:0,c:n.negationSymbol.front,caret:i+1}:{pos:0,c:e,caret:i+1}}return!1},radixHandler:function(t,i,a,n,r){if(!n&&r.numericInput!==!0&&t===r.radixPoint&&void 0!==r.digits&&(isNaN(r.digits)||parseInt(r.digits)>0)){var o=e.inArray(r.radixPoint,i.buffer),s=i.buffer.join("").match(r.regex.integerPart(r));if(o!==-1&&i.validPositions[o])return i.validPositions[o-1]?{caret:o+1}:{pos:s.index,c:s[0],caret:o+1};if(!s||"0"===s[0]&&s.index+1!==a)return i.buffer[s?s.index:a]="0",{pos:(s?s.index:a)+1,c:r.radixPoint}}return!1},leadingZeroHandler:function(t,i,a,n,r,o){if(!n){var s=i.buffer.slice("");if(s.splice(0,r.prefix.length),s.splice(s.length-r.suffix.length,r.suffix.length),r.numericInput===!0){var s=s.reverse(),l=s[0];if("0"===l&&void 0===i.validPositions[a-1])return{pos:a,remove:s.length-1}}else{a-=r.prefix.length;var u=e.inArray(r.radixPoint,s),c=s.slice(0,u!==-1?u:void 0).join("").match(r.regex.integerNPart(r));if(c&&(u===-1||a<=u)){var p=u===-1?0:parseInt(s.slice(u+1).join(""));if(0===c[0].indexOf(""!==r.placeholder?r.placeholder.charAt(0):"0")&&(c.index+1===a||o!==!0&&0===p))return i.buffer.splice(c.index+r.prefix.length,1),{pos:c.index+r.prefix.length,remove:c.index+r.prefix.length};if("0"===t&&a<=c.index&&c[0]!==r.groupSeparator)return!1}}}return!0},definitions:{"~":{validator:function(i,a,n,r,o,s){var l=o.signHandler(i,a,n,r,o);if(!l&&(l=o.radixHandler(i,a,n,r,o),!l&&(l=r?new RegExp("[0-9"+t.escapeRegex(o.groupSeparator)+"]").test(i):new RegExp("[0-9]").test(i),l===!0&&(l=o.leadingZeroHandler(i,a,n,r,o,s),l===!0)))){var u=e.inArray(o.radixPoint,a.buffer);l=u!==-1&&(o.digitsOptional===!1||a.validPositions[n])&&o.numericInput!==!0&&n>u&&!r?{pos:n,remove:n}:{pos:n}}return l},cardinality:1},"+":{validator:function(e,t,i,a,n){var r=n.signHandler(e,t,i,a,n);return!r&&(a&&n.allowMinus&&e===n.negationSymbol.front||n.allowMinus&&"-"===e||n.allowPlus&&"+"===e)&&(r=!(!a&&"-"===e)||(""!==n.negationSymbol.back?{pos:i,c:"-"===e?n.negationSymbol.front:"+",caret:i+1,insert:{pos:t.buffer.length,c:n.negationSymbol.back}}:{pos:i,c:"-"===e?n.negationSymbol.front:"+",caret:i+1})),r},cardinality:1,placeholder:""},"-":{validator:function(e,t,i,a,n){var r=n.signHandler(e,t,i,a,n);return!r&&a&&n.allowMinus&&e===n.negationSymbol.back&&(r=!0),r},cardinality:1,placeholder:""},":":{validator:function(e,i,a,n,r){var o=r.signHandler(e,i,a,n,r);if(!o){var s="["+t.escapeRegex(r.radixPoint)+"]";o=new RegExp(s).test(e),o&&i.validPositions[a]&&i.validPositions[a].match.placeholder===r.radixPoint&&(o={caret:a+1})}return o},cardinality:1,placeholder:function(e){return e.radixPoint}}},onUnMask:function(e,i,a){if(""===i&&a.nullable===!0)return i;var n=e.replace(a.prefix,"");return n=n.replace(a.suffix,""),n=n.replace(new RegExp(t.escapeRegex(a.groupSeparator),"g"),""),a.unmaskAsNumber?(""!==a.radixPoint&&n.indexOf(a.radixPoint)!==-1&&(n=n.replace(t.escapeRegex.call(this,a.radixPoint),".")),Number(n)):n},isComplete:function(e,i){var a=e.join(""),n=e.slice();if(i.postFormat(n,0,i),n.join("")!==a)return!1;var r=a.replace(i.prefix,"");return r=r.replace(i.suffix,""),r=r.replace(new RegExp(t.escapeRegex(i.groupSeparator),"g"),""),","===i.radixPoint&&(r=r.replace(t.escapeRegex(i.radixPoint),".")),isFinite(r)},onBeforeMask:function(e,i){if(i.numericInput===!0&&(e=e.split("").reverse().join("")),""!==i.radixPoint&&isFinite(e)){var a=e.split("."),n=""!==i.groupSeparator?parseInt(i.groupSize):0;2===a.length&&(a[0].length>n||a[1].length>n)&&(e=e.toString().replace(".",i.radixPoint))}var r=e.match(/,/g),o=e.match(/\./g);if(o&&r?o.length>r.length?(e=e.replace(/\./g,""),e=e.replace(",",i.radixPoint)):r.length>o.length?(e=e.replace(/,/g,""),e=e.replace(".",i.radixPoint)):e=e.indexOf(".")<e.indexOf(",")?e.replace(/\./g,""):e=e.replace(/,/g,""):e=e.replace(new RegExp(t.escapeRegex(i.groupSeparator),"g"),""),0===i.digits&&(e.indexOf(".")!==-1?e=e.substring(0,e.indexOf(".")):e.indexOf(",")!==-1&&(e=e.substring(0,e.indexOf(",")))),""!==i.radixPoint&&isFinite(i.digits)&&e.indexOf(i.radixPoint)!==-1){var s=e.split(i.radixPoint),l=s[1].match(new RegExp("\\d*"))[0];if(parseInt(i.digits)<l.toString().length){var u=Math.pow(10,parseInt(i.digits));e=e.replace(t.escapeRegex(i.radixPoint),"."),e=Math.round(parseFloat(e)*u)/u,e=e.toString().replace(".",i.radixPoint)}}return i.numericInput===!0&&(e=e.split("").reverse().join("")),e.toString()},canClearPosition:function(e,t,i,a,n){var r=e.validPositions[t].input,o=r!==n.radixPoint||null!==e.validPositions[t].match.fn&&n.decimalProtect===!1||isFinite(r)||t===i||r===n.groupSeparator||r===n.negationSymbol.front||r===n.negationSymbol.back;return o},onKeyDown:function(i,a,n,r){var o=e(this);if(i.ctrlKey)switch(i.keyCode){case t.keyCode.UP:o.val(parseFloat(this.inputmask.unmaskedvalue())+parseInt(r.step)),o.trigger("setvalue");break;case t.keyCode.DOWN:o.val(parseFloat(this.inputmask.unmaskedvalue())-parseInt(r.step)),o.trigger("setvalue")}}},currency:{prefix:"$ ",groupSeparator:",",alias:"numeric",placeholder:"0",autoGroup:!0,digits:2,digitsOptional:!1,clearMaskOnLostFocus:!1},decimal:{alias:"numeric"},integer:{alias:"numeric",digits:0,radixPoint:""},percentage:{alias:"numeric",digits:2,radixPoint:".",placeholder:"0",autoGroup:!1,min:0,max:100,suffix:" %",allowPlus:!1,allowMinus:!1}}),t}(jQuery,Inputmask),function(e,t){function i(e,t){var i=(e.mask||e).replace(/#/g,"9").replace(/\)/,"9").replace(/[+()#-]/g,""),a=(t.mask||t).replace(/#/g,"9").replace(/\)/,"9").replace(/[+()#-]/g,""),n=(e.mask||e).split("#")[0],r=(t.mask||t).split("#")[0];return 0===r.indexOf(n)?-1:0===n.indexOf(r)?1:i.localeCompare(a)}var a=t.prototype.analyseMask;return t.prototype.analyseMask=function(t,i){function n(e,i,a){i=i||"",a=a||o,""!==i&&(a[i]={});for(var r="",s=a[i]||a,l=e.length-1;l>=0;l--)t=e[l].mask||e[l],r=t.substr(0,1),s[r]=s[r]||[],s[r].unshift(t.substr(1)),e.splice(l,1);for(var u in s)s[u].length>500&&n(s[u].slice(),u,s)}function r(t){var a="",n=[];for(var o in t)e.isArray(t[o])?1===t[o].length?n.push(o+t[o]):n.push(o+i.groupmarker.start+t[o].join(i.groupmarker.end+i.alternatormarker+i.groupmarker.start)+i.groupmarker.end):n.push(o+r(t[o]));return a+=1===n.length?n[0]:i.groupmarker.start+n.join(i.groupmarker.end+i.alternatormarker+i.groupmarker.start)+i.groupmarker.end}var o={};i.phoneCodes&&i.phoneCodes.length>1e3&&(t=t.substr(1,t.length-2),n(t.split(i.groupmarker.end+i.alternatormarker+i.groupmarker.start)),t=r(o));var s=a.call(this,t,i);return s},t.extendAliases({abstractphone:{groupmarker:{start:"<",end:">"},countrycode:"",phoneCodes:[],mask:function(e){return e.definitions={"#":e.definitions[9]},e.phoneCodes.sort(i)},keepStatic:!0,onBeforeMask:function(e,t){var i=e.replace(/^0{1,2}/,"").replace(/[\s]/g,"");return(i.indexOf(t.countrycode)>1||i.indexOf(t.countrycode)===-1)&&(i="+"+t.countrycode+i),i},onUnMask:function(e,t,i){return t},inputmode:"tel"}}),t}(jQuery,Inputmask),function(e,t){return t.extendAliases({Regex:{mask:"r",greedy:!1,repeat:"*",regex:null,regexTokens:null,tokenizer:/\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,quantifierFilter:/[0-9]+[^,]/,isComplete:function(e,t){return new RegExp(t.regex).test(e.join(""))},definitions:{r:{validator:function(t,i,a,n,r){function o(e,t){this.matches=[],this.isGroup=e||!1,this.isQuantifier=t||!1,this.quantifier={min:1,max:1},this.repeaterPart=void 0}function s(){var e,t,i=new o,a=[];for(r.regexTokens=[];e=r.tokenizer.exec(r.regex);)switch(t=e[0],t.charAt(0)){case"(":a.push(new o(!0));break;case")":c=a.pop(),a.length>0?a[a.length-1].matches.push(c):i.matches.push(c);break;case"{":case"+":case"*":var n=new o(!1,!0);t=t.replace(/[{}]/g,"");var s=t.split(","),l=isNaN(s[0])?s[0]:parseInt(s[0]),u=1===s.length?l:isNaN(s[1])?s[1]:parseInt(s[1]);if(n.quantifier={min:l,max:u},a.length>0){var p=a[a.length-1].matches;e=p.pop(),e.isGroup||(c=new o(!0),c.matches.push(e),e=c),p.push(e),p.push(n)}else e=i.matches.pop(),e.isGroup||(c=new o(!0),c.matches.push(e),e=c),i.matches.push(e),i.matches.push(n);break;default:a.length>0?a[a.length-1].matches.push(t):i.matches.push(t)}i.matches.length>0&&r.regexTokens.push(i)}function l(t,i){var a=!1;i&&(d+="(",m++);for(var n=0;n<t.matches.length;n++){var r=t.matches[n];if(r.isGroup===!0)a=l(r,!0);else if(r.isQuantifier===!0){var o=e.inArray(r,t.matches),s=t.matches[o-1],c=d;if(isNaN(r.quantifier.max)){for(;r.repeaterPart&&r.repeaterPart!==d&&r.repeaterPart.length>d.length&&!(a=l(s,!0)););a=a||l(s,!0),a&&(r.repeaterPart=d),d=c+r.quantifier.max}else{for(var p=0,f=r.quantifier.max-1;p<f&&!(a=l(s,!0));p++);d=c+"{"+r.quantifier.min+","+r.quantifier.max+"}"}}else if(void 0!==r.matches)for(var h=0;h<r.length&&!(a=l(r[h],i));h++);else{var v;if("["==r.charAt(0)){v=d,v+=r;for(var g=0;g<m;g++)v+=")";var y=new RegExp("^("+v+")$");a=y.test(u)}else for(var k=0,x=r.length;k<x;k++)if("\\"!==r.charAt(k)){v=d,v+=r.substr(0,k+1),v=v.replace(/\|$/,"");for(var g=0;g<m;g++)v+=")";var y=new RegExp("^("+v+")$");if(a=y.test(u))break}d+=r}if(a)break}return i&&(d+=")",m--),a}var u,c,p=i.buffer.slice(),d="",f=!1,m=0;null===r.regexTokens&&s(),p.splice(a,0,t),u=p.join("");for(var h=0;h<r.regexTokens.length;h++){var v=r.regexTokens[h];if(f=l(v,v.isGroup))break}return f},cardinality:1}}}}),t}(jQuery,Inputmask);
//# sourceMappingURL=jquery.inputmask.bundle.min.js.map

$(document).ready(function () {
    $('.phone_number_2').inputmask('(999)-99-999-99-99');
});

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = "https://cdn.tiny.cloud/1/no-api-key/tinymce/5/tinymce.min.js"
document.head.appendChild(script);

script.onload = function() {

    tinymce.init({
        selector: '#id_subtitle',
        width: 600,
        height: 300,
        plugins: [
            'advlist autolink link image lists charmap print preview hr anchor pagebreak',
            'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
            'table emoticons template paste help'
        ],
        toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | ' +
            'bullist numlist outdent indent | link image | print preview media fullpage | ' +
            'forecolor backcolor emoticons | help',
        menu: {
            favs: { title: 'My Favorites', items: 'code visualaid | searchreplace | emoticons' }
        },
        menubar: 'favs file edit view insert format tools table help',
        content_css: 'css/content.css'
    });
}


