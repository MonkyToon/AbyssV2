var app = function() {
    "use strict";

    function t() {}

    function e(t) {
        return t()
    }

    function n() {
        return Object.create(null)
    }

    function o(t) {
        t.forEach(e)
    }

    function r(t) {
        return "function" == typeof t
    }

    function c(t, e) {
        return t != t ? e == e : t !== e || t && "object" == typeof t || "function" == typeof t
    }
    let i, s;

    function l(t, e) {
        return i || (i = document.createElement("a")), i.href = e, t === i.href
    }

    function u(t, e) {
        t.appendChild(e)
    }

    function a(t, e, n) {
        t.insertBefore(e, n || null)
    }

    function f(t) {
        t.parentNode && t.parentNode.removeChild(t)
    }

    function d(t) {
        return document.createElement(t)
    }

    function A(t) {
        return document.createTextNode(t)
    }

    function p() {
        return A(" ")
    }

    function g(t, e, n, o) {
        return t.addEventListener(e, n, o), () => t.removeEventListener(e, n, o)
    }

    function h(t, e, n) {
        null == n ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n)
    }

    function m(t, e) {
        t.value = null == e ? "" : e
    }

    function b(t) {
        s = t
    }
    const w = [],
        y = [],
        $ = [],
        v = [],
        k = Promise.resolve();
    let C = !1;

    function E(t) {
        $.push(t)
    }
    const _ = new Set;
    let x = 0;

    function J() {
        if (0 !== x) return;
        const t = s;
        do {
            try {
                for (; x < w.length;) {
                    const t = w[x];
                    x++, b(t), B(t.$$)
                }
            } catch (t) {
                throw w.length = 0, x = 0, t
            }
            for (b(null), w.length = 0, x = 0; y.length;) y.pop()();
            for (let t = 0; t < $.length; t += 1) {
                const e = $[t];
                _.has(e) || (_.add(e), e())
            }
            $.length = 0
        } while (w.length);
        for (; v.length;) v.pop()();
        C = !1, _.clear(), b(t)
    }

    function B(t) {
        if (null !== t.fragment) {
            t.update(), o(t.before_update);
            const e = t.dirty;
            t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(E)
        }
    }
    const M = new Set;

    function D(t, e) {
        t && t.i && (M.delete(t), t.i(e))
    }
    const O = "undefined" != typeof window ? window : "undefined" != typeof globalThis ? globalThis : global;

    function I(t, e) {
        t.d(1), e.delete(t.key)
    }

    function K(t, e, n, o, r, c, i, s, l, u, a, f) {
        let d = t.length,
            A = c.length,
            p = d;
        const g = {};
        for (; p--;) g[t[p].key] = p;
        const h = [],
            m = new Map,
            b = new Map;
        for (p = A; p--;) {
            const t = f(r, c, p),
                s = n(t);
            let l = i.get(s);
            l ? o && l.p(t, e) : (l = u(s, t), l.c()), m.set(s, h[p] = l), s in g && b.set(s, Math.abs(p - g[s]))
        }
        const w = new Set,
            y = new Set;

        function $(t) {
            D(t, 1), t.m(s, a), i.set(t.key, t), a = t.first, A--
        }
        for (; d && A;) {
            const e = h[A - 1],
                n = t[d - 1],
                o = e.key,
                r = n.key;
            e === n ? (a = e.first, d--, A--) : m.has(r) ? !i.has(o) || w.has(o) ? $(e) : y.has(r) ? d-- : b.get(o) > b.get(r) ? (y.add(o), $(e)) : (w.add(r), d--) : (l(n, i), d--)
        }
        for (; d--;) {
            const e = t[d];
            m.has(e.key) || l(e, i)
        }
        for (; A;) $(h[A - 1]);
        return h
    }

    function N(t, e) {
        -1 === t.$$.dirty[0] && (w.push(t), C || (C = !0, k.then(J)), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31
    }

    function Q(c, i, l, u, a, d, A, p = [-1]) {
        const g = s;
        b(c);
        const h = c.$$ = {
            fragment: null,
            ctx: [],
            props: d,
            update: t,
            not_equal: a,
            bound: n(),
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(i.context || (g ? g.$$.context : [])),
            callbacks: n(),
            dirty: p,
            skip_bound: !1,
            root: i.target || g.$$.root
        };
        A && A(h.root);
        let m = !1;
        if (h.ctx = l ? l(c, i.props || {}, ((t, e, ...n) => {
                const o = n.length ? n[0] : e;
                return h.ctx && a(h.ctx[t], h.ctx[t] = o) && (!h.skip_bound && h.bound[t] && h.bound[t](o), m && N(c, t)), e
            })) : [], h.update(), m = !0, o(h.before_update), h.fragment = !!u && u(h.ctx), i.target) {
            if (i.hydrate) {
                const t = function(t) {
                    return Array.from(t.childNodes)
                }(i.target);
                h.fragment && h.fragment.l(t), t.forEach(f)
            } else h.fragment && h.fragment.c();
            i.intro && D(c.$$.fragment),
                function(t, n, c, i) {
                    const {
                        fragment: s,
                        after_update: l
                    } = t.$$;
                    s && s.m(n, c), i || E((() => {
                        const n = t.$$.on_mount.map(e).filter(r);
                        t.$$.on_destroy ? t.$$.on_destroy.push(...n) : o(n), t.$$.on_mount = []
                    })), l.forEach(E)
                }(c, i.target, i.anchor, i.customElement), J()
        }
        b(g)
    }
    class S {
        $destroy() {
            ! function(t, e) {
                const n = t.$$;
                null !== n.fragment && (o(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = [])
            }(this, 1), this.$destroy = t
        }
        $on(e, n) {
            if (!r(n)) return t;
            const o = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
            return o.push(n), () => {
                const t = o.indexOf(n); - 1 !== t && o.splice(t, 1)
            }
        }
        $set(t) {
            var e;
            this.$$set && (e = t, 0 !== Object.keys(e).length) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1)
        }
    }
    const {
        window: T
    } = O;

    function j(t, e, n) {
        const o = t.slice();
        return o[16] = e[n], o[17] = e, o[18] = n, o
    }

    function U(t, e, n) {
        const o = t.slice();
        return o[16] = e[n], o[19] = e, o[18] = n, o
    }

    function X(t, e) {
        let n, r, c, i, s, A, m, b, w, y, $, v = e[18];

        function k(...t) {
            return e[9](e[16], ...t)
        }

        function C() {
            return e[10](e[16])
        }
        const E = () => e[11](n, v),
            _ = () => e[11](null, v);
        return {
            key: t,
            first: null,
            c() {
                n = d("button"), r = d("img"), i = p(), s = d("p"), s.textContent = "New tab", A = p(), m = d("button"), m.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>', b = p(), h(r, "class", "favicon"), h(r, "alt", "new tab icon"), l(r.src, c = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABEElEQVR4nO2ZwWrCQBRFj0KC/oe/2NpV0U9w1ZX+Qb+i3Xdf/ZFK4ElgCsNAMDOaPIP3wNvlJfdyJ1ncgBBCiIFYAlvgBDSAjTxNePYmaMkW/+0g2jqm1bLIMbB9ANGWzHuOgVO0+AJUV65fAZ/JA/fAnHIq4DW632/Ocnzm65478yD6nibq5J3oTSwihxnwkewfbjRhJVpKDXQlUTJn4MfDQFcS95jRDPwnsQP+pmrgVqrkKzQ5A+lXaJIGWmTAG9MRcsaUgDOmBJwxJeCMKQFnTAk4Y0rAGXvKBJqCYmsI6tJiK64W104mauCttFrcDNDpjFruLh+sXv/KrdcJC63ro+MPjmPQkC1eCCEEfbgAuJ68dbQb+kgAAAAASUVORK5CYII=") || h(r, "src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABEElEQVR4nO2ZwWrCQBRFj0KC/oe/2NpV0U9w1ZX+Qb+i3Xdf/ZFK4ElgCsNAMDOaPIP3wNvlJfdyJ1ncgBBCiIFYAlvgBDSAjTxNePYmaMkW/+0g2jqm1bLIMbB9ANGWzHuOgVO0+AJUV65fAZ/JA/fAnHIq4DW632/Ocnzm65478yD6nibq5J3oTSwihxnwkewfbjRhJVpKDXQlUTJn4MfDQFcS95jRDPwnsQP+pmrgVqrkKzQ5A+lXaJIGWmTAG9MRcsaUgDOmBJwxJeCMKQFnTAk4Y0rAGXvKBJqCYmsI6tJiK64W104mauCttFrcDNDpjFruLh+sXv/KrdcJC63ro+MPjmPQkC1eCCEEfbgAuJ68dbQb+kgAAAAASUVORK5CYII="), h(m, "class", "tabclose"), h(n, "class", "tab"), h(n, "id", w = "tab" + e[16]), this.first = n
            },
            m(t, e) {
                a(t, n, e), u(n, r), u(n, i), u(n, s), u(n, A), u(n, m), u(n, b), E(), y || ($ = [g(m, "click", k), g(n, "click", C)], y = !0)
            },
            p(t, o) {
                e = t, 1 & o && w !== (w = "tab" + e[16]) && h(n, "id", w), v !== e[18] && (_(), v = e[18], E())
            },
            d(t) {
                t && f(n), _(), y = !1, o($)
            }
        }
    }

    function q(t, e) {
        let n, o, r, c = e[18];
        const i = () => e[15](n, c),
            s = () => e[15](null, c);
        return {
            key: t,
            first: null,
            c() {
                n = d("iframe"), h(n, "id", o = e[16]), h(n, "title", "iframe"), l(n.src, r = "") || h(n, "src", ""), this.first = n
            },
            m(t, e) {
                a(t, n, e), i()
            },
            p(t, r) {
                e = t, 1 & r && o !== (o = e[16]) && h(n, "id", o), c !== e[18] && (s(), c = e[18], i())
            },
            d(t) {
                t && f(n), s()
            }
        }
    }

    function W(e) {
        let n, r, c, i, s, l, b, w, y, $, v, k, C, E, _, x = [],
            J = new Map,
            B = [],
            M = new Map,
            D = e[0];
        const O = t => t[16];
        for (let t = 0; t < D.length; t += 1) {
            let n = U(e, D, t),
                o = O(n);
            J.set(o, x[t] = X(o, n))
        }
        let N = e[0];
        const Q = t => t[16];
        for (let t = 0; t < N.length; t += 1) {
            let n = j(e, N, t),
                o = Q(n);
            M.set(o, B[t] = q(o, n))
        }
        return {
            c() {
                n = d("div"), r = d("div"), c = d("div");
                for (let t = 0; t < x.length; t += 1) x[t].c();
                i = p(), s = d("div"), l = d("button"), l.innerHTML = '<i class="fa-solid fa-gear"></i>', b = p(), w = d("button"), w.innerHTML = '<i class="fa-solid fa-plus"></i>', y = p(), $ = d("form"), v = d("input"), k = p();
                i = p(), s = d("div"), l = d("button"), l.innerHTML = '<i class="fa-solid fa-discord"></i>', b = p(), w = d("button"), w.innerHTML = '<i class="fa-solid fa-plus"></i>', y = p(), $ = d("form"), v = d("input"), k = p();
                for (let t = 0; t < B.length; t += 1) B[t].c();
                C = A(""), h(c, "id", "tabs"), h(l, "id", "settingsbutton"), h(w, "id", "newtabbutton"), h(s, "id", "settingsandnewtab"), h(r, "id", "tabsandmore"), h(v, "placeholder", "Search or type a URL"), h(v, "type", "text"), h($, "id", "urlbar"), h(n, "id", "topbar")
            },
            m(t, o) {
                a(t, n, o), u(n, r), u(r, c);
                for (let t = 0; t < x.length; t += 1) x[t].m(c, null);
                u(r, i), u(r, s), u(s, l), u(s, b), u(s, w), u(n, y), u(n, $), u($, v), m(v, e[1]), a(t, k, o);
                for (let e = 0; e < B.length; e += 1) B[e].m(t, o);
                var f;
                a(t, C, o), E || (_ = [g(T, "load", e[8]), g(w, "click", e[12]), g(v, "input", e[13]), g($, "submit", (f = e[14], function(t) {
                    return t.preventDefault(), f.call(this, t)
                }))], E = !0)
            },
            p(t, [e]) {
                187 & e && (D = t[0], x = K(x, e, O, 1, t, D, J, c, I, X, null, U)), 2 & e && v.value !== t[1] && m(v, t[1]), 33 & e && (N = t[0], B = K(B, e, Q, 1, t, N, M, C.parentNode, I, q, C, j))
            },
            i: t,
            o: t,
            d(t) {
                t && f(n);
                for (let t = 0; t < x.length; t += 1) x[t].d();
                t && f(k);
                for (let e = 0; e < B.length; e += 1) B[e].d(t);
                t && f(C), E = !1, o(_)
            }
        }
    }

    function L(t, e, n) {
        let o, r = [],
            c = 1,
            i = [];

        function s(t) {
            let e = t.trim();
            ! function(t = "") {
                return !!(/^http(s?):\/\//.test(t) || t.includes(".") && " " !== t.substr(0, 1))
            }(e) ? e = "https://google.com/search?q=" + e: e.startsWith("https://") || e.startsWith("http://") || (e = "https://" + e);
            let r = document.querySelector("iframe.active");
            e = __uv$config.encodeUrl(e), r.style.display = "block", r.src = "/service/" + e, n(1, o = __uv$config.decodeUrl(e))
        }

        function l(t) {
            r.splice(r.indexOf(t), 1), n(0, r), i.splice(i.indexOf(t), 1), n(3, i), document.getElementById("tab" + i.slice(-1)[0]).click()
        }
        let u = [],
            a = [];
        return [r, o, c, i, u, a, s, l, () => {
            document.querySelector("#newtabbutton").click(), window.navigator.serviceWorker.register("./sw.js", {
                scope: __uv$config.prefix
            })
        }, (t, e) => {
            e.stopPropagation(), l(t)
        }, t => {
            i.indexOf(t) > -1 && i.splice(i.indexOf(t), 1), n(3, i[i.length] = t, i);
            let e = document.querySelector("#tab" + t),
                r = document.getElementById(t);
            u.forEach((t => {
                t.classList = "tab"
            })), a.forEach((t => {
                t.classList = "", t.style.display = "none"
            })), e.classList.add("active"), r.classList.add("active"), "" !== r.src ? r.style.display = "block" : r.style.display = "none";
            let c = r.src.split(__uv$config.prefix)[1];
            n(1, o = __uv$config.decodeUrl(c))
        }, function(t, e) {
            y[t ? "unshift" : "push"]((() => {
                u[e] = t, n(4, u)
            }))
        }, () => {
            let t = c,
                e = [...r, t];
            n(0, r = e), n(2, c += 1),
                function e() {
                    null == document.querySelector("#tab" + t) ? window.setTimeout(e, 50) : (document.querySelector("#tab" + t).click(), s("google.com"))
                }()
        }, function() {
            o = this.value, n(1, o)
        }, () => s(o), function(t, e) {
            y[t ? "unshift" : "push"]((() => {
                a[e] = t, n(5, a)
            }))
        }]
    }
    return new class extends S {
        constructor(t) {
            super(), Q(this, t, L, W, c, {})
        }
    }({
        target: document.body
    })
}();
//# sourceMappingURL=bundle.js.map
