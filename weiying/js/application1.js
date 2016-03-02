if (function(e, t) {
		"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
			if (!e.document) throw new Error("jQuery requires a window with a document");
			return t(e)
		} : t(e)
	}("undefined" != typeof window ? window : this, function(e, t) {
		function n(e) {
			var t = "length" in e && e.length,
				n = Z.type(e);
			return "function" === n || Z.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
		}

		function r(e, t, n) {
			if (Z.isFunction(t)) return Z.grep(e, function(e, r) {
				return !!t.call(e, r, e) !== n
			});
			if (t.nodeType) return Z.grep(e, function(e) {
				return e === t !== n
			});
			if ("string" == typeof t) {
				if (st.test(t)) return Z.filter(t, e, n);
				t = Z.filter(t, e)
			}
			return Z.grep(e, function(e) {
				return U.call(t, e) >= 0 !== n
			})
		}

		function o(e, t) {
			for (;
				(e = e[t]) && 1 !== e.nodeType;);
			return e
		}

		function i(e) {
			var t = ht[e] = {};
			return Z.each(e.match(pt) || [], function(e, n) {
				t[n] = !0
			}), t
		}

		function a() {
			G.removeEventListener("DOMContentLoaded", a, !1), e.removeEventListener("load", a, !1), Z.ready()
		}

		function s() {
			Object.defineProperty(this.cache = {}, 0, {
				get: function() {
					return {}
				}
			}), this.expando = Z.expando + s.uid++
		}

		function u(e, t, n) {
			var r;
			if (void 0 === n && 1 === e.nodeType)
				if (r = "data-" + t.replace(_t, "-$1").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
					try {
						n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : bt.test(n) ? Z.parseJSON(n) : n
					} catch (o) {}
					yt.set(e, t, n)
				} else n = void 0;
			return n
		}

		function l() {
			return !0
		}

		function c() {
			return !1
		}

		function f() {
			try {
				return G.activeElement
			} catch (e) {}
		}

		function d(e, t) {
			return Z.nodeName(e, "table") && Z.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
		}

		function p(e) {
			return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
		}

		function h(e) {
			var t = Rt.exec(e.type);
			return t ? e.type = t[1] : e.removeAttribute("type"), e
		}

		function m(e, t) {
			for (var n = 0, r = e.length; r > n; n++) vt.set(e[n], "globalEval", !t || vt.get(t[n], "globalEval"))
		}

		function g(e, t) {
			var n, r, o, i, a, s, u, l;
			if (1 === t.nodeType) {
				if (vt.hasData(e) && (i = vt.access(e), a = vt.set(t, i), l = i.events)) {
					delete a.handle, a.events = {};
					for (o in l)
						for (n = 0, r = l[o].length; r > n; n++) Z.event.add(t, o, l[o][n])
				}
				yt.hasData(e) && (s = yt.access(e), u = Z.extend({}, s), yt.set(t, u))
			}
		}

		function v(e, t) {
			var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
			return void 0 === t || t && Z.nodeName(e, t) ? Z.merge([e], n) : n
		}

		function y(e, t) {
			var n = t.nodeName.toLowerCase();
			"input" === n && Ct.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
		}

		function b(t, n) {
			var r, o = Z(n.createElement(t)).appendTo(n.body),
				i = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(o[0])) ? r.display : Z.css(o[0], "display");
			return o.detach(), i
		}

		function _(e) {
			var t = G,
				n = It[e];
			return n || (n = b(e, t), "none" !== n && n || (Pt = (Pt || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Pt[0].contentDocument, t.write(), t.close(), n = b(e, t), Pt.detach()), It[e] = n), n
		}

		function x(e, t, n) {
			var r, o, i, a, s = e.style;
			return n = n || Wt(e), n && (a = n.getPropertyValue(t) || n[t]), n && ("" !== a || Z.contains(e.ownerDocument, e) || (a = Z.style(e, t)), Bt.test(a) && Mt.test(t) && (r = s.width, o = s.minWidth, i = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = o, s.maxWidth = i)), void 0 !== a ? a + "" : a
		}

		function w(e, t) {
			return {
				get: function() {
					return e() ? void delete this.get : (this.get = t).apply(this, arguments)
				}
			}
		}

		function T(e, t) {
			if (t in e) return t;
			for (var n = t[0].toUpperCase() + t.slice(1), r = t, o = Yt.length; o--;)
				if (t = Yt[o] + n, t in e) return t;
			return r
		}

		function C(e, t, n) {
			var r = Xt.exec(t);
			return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
		}

		function k(e, t, n, r, o) {
			for (var i = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > i; i += 2) "margin" === n && (a += Z.css(e, n + wt[i], !0, o)), r ? ("content" === n && (a -= Z.css(e, "padding" + wt[i], !0, o)), "margin" !== n && (a -= Z.css(e, "border" + wt[i] + "Width", !0, o))) : (a += Z.css(e, "padding" + wt[i], !0, o), "padding" !== n && (a += Z.css(e, "border" + wt[i] + "Width", !0, o)));
			return a
		}

		function j(e, t, n) {
			var r = !0,
				o = "width" === t ? e.offsetWidth : e.offsetHeight,
				i = Wt(e),
				a = "border-box" === Z.css(e, "boxSizing", !1, i);
			if (0 >= o || null == o) {
				if (o = x(e, t, i), (0 > o || null == o) && (o = e.style[t]), Bt.test(o)) return o;
				r = a && (J.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
			}
			return o + k(e, t, n || (a ? "border" : "content"), r, i) + "px"
		}

		function S(e, t) {
			for (var n, r, o, i = [], a = 0, s = e.length; s > a; a++) r = e[a], r.style && (i[a] = vt.get(r, "olddisplay"), n = r.style.display, t ? (i[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && Tt(r) && (i[a] = vt.access(r, "olddisplay", _(r.nodeName)))) : (o = Tt(r), "none" === n && o || vt.set(r, "olddisplay", o ? n : Z.css(r, "display"))));
			for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? i[a] || "" : "none"));
			return e
		}

		function E(e, t, n, r, o) {
			return new E.prototype.init(e, t, n, r, o)
		}

		function $() {
			return setTimeout(function() {
				Jt = void 0
			}), Jt = Z.now()
		}

		function N(e, t) {
			var n, r = 0,
				o = {
					height: e
				};
			for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = wt[r], o["margin" + n] = o["padding" + n] = e;
			return t && (o.opacity = o.width = e), o
		}

		function D(e, t, n) {
			for (var r, o = (nn[t] || []).concat(nn["*"]), i = 0, a = o.length; a > i; i++)
				if (r = o[i].call(n, t, e)) return r
		}

		function A(e, t, n) {
			var r, o, i, a, s, u, l, c, f = this,
				d = {},
				p = e.style,
				h = e.nodeType && Tt(e),
				m = vt.get(e, "fxshow");
			n.queue || (s = Z._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function() {
				s.unqueued || u()
			}), s.unqueued++, f.always(function() {
				f.always(function() {
					s.unqueued--, Z.queue(e, "fx").length || s.empty.fire()
				})
			})), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], l = Z.css(e, "display"), c = "none" === l ? vt.get(e, "olddisplay") || _(e.nodeName) : l, "inline" === c && "none" === Z.css(e, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", f.always(function() {
				p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
			}));
			for (r in t)
				if (o = t[r], Kt.exec(o)) {
					if (delete t[r], i = i || "toggle" === o, o === (h ? "hide" : "show")) {
						if ("show" !== o || !m || void 0 === m[r]) continue;
						h = !0
					}
					d[r] = m && m[r] || Z.style(e, r)
				} else l = void 0;
			if (Z.isEmptyObject(d)) "inline" === ("none" === l ? _(e.nodeName) : l) && (p.display = l);
			else {
				m ? "hidden" in m && (h = m.hidden) : m = vt.access(e, "fxshow", {}), i && (m.hidden = !h), h ? Z(e).show() : f.done(function() {
					Z(e).hide()
				}), f.done(function() {
					var t;
					vt.remove(e, "fxshow");
					for (t in d) Z.style(e, t, d[t])
				});
				for (r in d) a = D(h ? m[r] : 0, r, f), r in m || (m[r] = a.start, h && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
			}
		}

		function L(e, t) {
			var n, r, o, i, a;
			for (n in e)
				if (r = Z.camelCase(n), o = t[r], i = e[n], Z.isArray(i) && (o = i[1], i = e[n] = i[0]), n !== r && (e[r] = i, delete e[n]), a = Z.cssHooks[r], a && "expand" in a) {
					i = a.expand(i), delete e[r];
					for (n in i) n in e || (e[n] = i[n], t[n] = o)
				} else t[r] = o
		}

		function q(e, t, n) {
			var r, o, i = 0,
				a = tn.length,
				s = Z.Deferred().always(function() {
					delete u.elem
				}),
				u = function() {
					if (o) return !1;
					for (var t = Jt || $(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, i = 1 - r, a = 0, u = l.tweens.length; u > a; a++) l.tweens[a].run(i);
					return s.notifyWith(e, [l, i, n]), 1 > i && u ? n : (s.resolveWith(e, [l]), !1)
				},
				l = s.promise({
					elem: e,
					props: Z.extend({}, t),
					opts: Z.extend(!0, {
						specialEasing: {}
					}, n),
					originalProperties: t,
					originalOptions: n,
					startTime: Jt || $(),
					duration: n.duration,
					tweens: [],
					createTween: function(t, n) {
						var r = Z.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
						return l.tweens.push(r), r
					},
					stop: function(t) {
						var n = 0,
							r = t ? l.tweens.length : 0;
						if (o) return this;
						for (o = !0; r > n; n++) l.tweens[n].run(1);
						return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
					}
				}),
				c = l.props;
			for (L(c, l.opts.specialEasing); a > i; i++)
				if (r = tn[i].call(l, e, c, l.opts)) return r;
			return Z.map(c, D, l), Z.isFunction(l.opts.start) && l.opts.start.call(e, l), Z.fx.timer(Z.extend(u, {
				elem: e,
				anim: l,
				queue: l.opts.queue
			})), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
		}

		function O(e) {
			return function(t, n) {
				"string" != typeof t && (n = t, t = "*");
				var r, o = 0,
					i = t.toLowerCase().match(pt) || [];
				if (Z.isFunction(n))
					for (; r = i[o++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
			}
		}

		function R(e, t, n, r) {
			function o(s) {
				var u;
				return i[s] = !0, Z.each(e[s] || [], function(e, s) {
					var l = s(t, n, r);
					return "string" != typeof l || a || i[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), o(l), !1)
				}), u
			}
			var i = {},
				a = e === _n;
			return o(t.dataTypes[0]) || !i["*"] && o("*")
		}

		function F(e, t) {
			var n, r, o = Z.ajaxSettings.flatOptions || {};
			for (n in t) void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
			return r && Z.extend(!0, e, r), e
		}

		function H(e, t, n) {
			for (var r, o, i, a, s = e.contents, u = e.dataTypes;
				"*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
			if (r)
				for (o in s)
					if (s[o] && s[o].test(r)) {
						u.unshift(o);
						break
					}
			if (u[0] in n) i = u[0];
			else {
				for (o in n) {
					if (!u[0] || e.converters[o + " " + u[0]]) {
						i = o;
						break
					}
					a || (a = o)
				}
				i = i || a
			}
			return i ? (i !== u[0] && u.unshift(i), n[i]) : void 0
		}

		function P(e, t, n, r) {
			var o, i, a, s, u, l = {},
				c = e.dataTypes.slice();
			if (c[1])
				for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
			for (i = c.shift(); i;)
				if (e.responseFields[i] && (n[e.responseFields[i]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = i, i = c.shift())
					if ("*" === i) i = u;
					else if ("*" !== u && u !== i) {
				if (a = l[u + " " + i] || l["* " + i], !a)
					for (o in l)
						if (s = o.split(" "), s[1] === i && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
							a === !0 ? a = l[o] : l[o] !== !0 && (i = s[0], c.unshift(s[1]));
							break
						}
				if (a !== !0)
					if (a && e["throws"]) t = a(t);
					else try {
						t = a(t)
					} catch (f) {
						return {
							state: "parsererror",
							error: a ? f : "No conversion from " + u + " to " + i
						}
					}
			}
			return {
				state: "success",
				data: t
			}
		}

		function I(e, t, n, r) {
			var o;
			if (Z.isArray(t)) Z.each(t, function(t, o) {
				n || kn.test(e) ? r(e, o) : I(e + "[" + ("object" == typeof o ? t : "") + "]", o, n, r)
			});
			else if (n || "object" !== Z.type(t)) r(e, t);
			else
				for (o in t) I(e + "[" + o + "]", t[o], n, r)
		}

		function M(e) {
			return Z.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
		}
		var B = [],
			W = B.slice,
			z = B.concat,
			X = B.push,
			U = B.indexOf,
			Q = {},
			V = Q.toString,
			Y = Q.hasOwnProperty,
			J = {},
			G = e.document,
			K = "2.1.4",
			Z = function(e, t) {
				return new Z.fn.init(e, t)
			},
			et = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
			tt = /^-ms-/,
			nt = /-([\da-z])/gi,
			rt = function(e, t) {
				return t.toUpperCase()
			};
		Z.fn = Z.prototype = {
			jquery: K,
			constructor: Z,
			selector: "",
			length: 0,
			toArray: function() {
				return W.call(this)
			},
			get: function(e) {
				return null != e ? 0 > e ? this[e + this.length] : this[e] : W.call(this)
			},
			pushStack: function(e) {
				var t = Z.merge(this.constructor(), e);
				return t.prevObject = this, t.context = this.context, t
			},
			each: function(e, t) {
				return Z.each(this, e, t)
			},
			map: function(e) {
				return this.pushStack(Z.map(this, function(t, n) {
					return e.call(t, n, t)
				}))
			},
			slice: function() {
				return this.pushStack(W.apply(this, arguments))
			},
			first: function() {
				return this.eq(0)
			},
			last: function() {
				return this.eq(-1)
			},
			eq: function(e) {
				var t = this.length,
					n = +e + (0 > e ? t : 0);
				return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
			},
			end: function() {
				return this.prevObject || this.constructor(null)
			},
			push: X,
			sort: B.sort,
			splice: B.splice
		}, Z.extend = Z.fn.extend = function() {
			var e, t, n, r, o, i, a = arguments[0] || {},
				s = 1,
				u = arguments.length,
				l = !1;
			for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || Z.isFunction(a) || (a = {}), s === u && (a = this, s--); u > s; s++)
				if (null != (e = arguments[s]))
					for (t in e) n = a[t], r = e[t], a !== r && (l && r && (Z.isPlainObject(r) || (o = Z.isArray(r))) ? (o ? (o = !1, i = n && Z.isArray(n) ? n : []) : i = n && Z.isPlainObject(n) ? n : {}, a[t] = Z.extend(l, i, r)) : void 0 !== r && (a[t] = r));
			return a
		}, Z.extend({
			expando: "jQuery" + (K + Math.random()).replace(/\D/g, ""),
			isReady: !0,
			error: function(e) {
				throw new Error(e)
			},
			noop: function() {},
			isFunction: function(e) {
				return "function" === Z.type(e)
			},
			isArray: Array.isArray,
			isWindow: function(e) {
				return null != e && e === e.window
			},
			isNumeric: function(e) {
				return !Z.isArray(e) && e - parseFloat(e) + 1 >= 0
			},
			isPlainObject: function(e) {
				return "object" !== Z.type(e) || e.nodeType || Z.isWindow(e) ? !1 : e.constructor && !Y.call(e.constructor.prototype, "isPrototypeOf") ? !1 : !0
			},
			isEmptyObject: function(e) {
				var t;
				for (t in e) return !1;
				return !0
			},
			type: function(e) {
				return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Q[V.call(e)] || "object" : typeof e
			},
			globalEval: function(e) {
				var t, n = eval;
				e = Z.trim(e), e && (1 === e.indexOf("use strict") ? (t = G.createElement("script"), t.text = e, G.head.appendChild(t).parentNode.removeChild(t)) : n(e))
			},
			camelCase: function(e) {
				return e.replace(tt, "ms-").replace(nt, rt)
			},
			nodeName: function(e, t) {
				return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
			},
			each: function(e, t, r) {
				var o, i = 0,
					a = e.length,
					s = n(e);
				if (r) {
					if (s)
						for (; a > i && (o = t.apply(e[i], r), o !== !1); i++);
					else
						for (i in e)
							if (o = t.apply(e[i], r), o === !1) break
				} else if (s)
					for (; a > i && (o = t.call(e[i], i, e[i]), o !== !1); i++);
				else
					for (i in e)
						if (o = t.call(e[i], i, e[i]), o === !1) break;
				return e
			},
			trim: function(e) {
				return null == e ? "" : (e + "").replace(et, "")
			},
			makeArray: function(e, t) {
				var r = t || [];
				return null != e && (n(Object(e)) ? Z.merge(r, "string" == typeof e ? [e] : e) : X.call(r, e)), r
			},
			inArray: function(e, t, n) {
				return null == t ? -1 : U.call(t, e, n)
			},
			merge: function(e, t) {
				for (var n = +t.length, r = 0, o = e.length; n > r; r++) e[o++] = t[r];
				return e.length = o, e
			},
			grep: function(e, t, n) {
				for (var r, o = [], i = 0, a = e.length, s = !n; a > i; i++) r = !t(e[i], i), r !== s && o.push(e[i]);
				return o
			},
			map: function(e, t, r) {
				var o, i = 0,
					a = e.length,
					s = n(e),
					u = [];
				if (s)
					for (; a > i; i++) o = t(e[i], i, r), null != o && u.push(o);
				else
					for (i in e) o = t(e[i], i, r), null != o && u.push(o);
				return z.apply([], u)
			},
			guid: 1,
			proxy: function(e, t) {
				var n, r, o;
				return "string" == typeof t && (n = e[t], t = e, e = n), Z.isFunction(e) ? (r = W.call(arguments, 2), o = function() {
					return e.apply(t || this, r.concat(W.call(arguments)))
				}, o.guid = e.guid = e.guid || Z.guid++, o) : void 0
			},
			now: Date.now,
			support: J
		}), Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
			Q["[object " + t + "]"] = t.toLowerCase()
		});
		var ot = function(e) {
			function t(e, t, n, r) {
				var o, i, a, s, u, l, f, p, h, m;
				if ((t ? t.ownerDocument || t : I) !== A && D(t), t = t || A, n = n || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
				if (!r && q) {
					if (11 !== s && (o = yt.exec(e)))
						if (a = o[1]) {
							if (9 === s) {
								if (i = t.getElementById(a), !i || !i.parentNode) return n;
								if (i.id === a) return n.push(i), n
							} else if (t.ownerDocument && (i = t.ownerDocument.getElementById(a)) && H(t, i) && i.id === a) return n.push(i), n
						} else {
							if (o[2]) return K.apply(n, t.getElementsByTagName(e)), n;
							if ((a = o[3]) && x.getElementsByClassName) return K.apply(n, t.getElementsByClassName(a)), n
						}
					if (x.qsa && (!O || !O.test(e))) {
						if (p = f = P, h = t, m = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
							for (l = k(e), (f = t.getAttribute("id")) ? p = f.replace(_t, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", u = l.length; u--;) l[u] = p + d(l[u]);
							h = bt.test(e) && c(t.parentNode) || t, m = l.join(",")
						}
						if (m) try {
							return K.apply(n, h.querySelectorAll(m)), n
						} catch (g) {} finally {
							f || t.removeAttribute("id")
						}
					}
				}
				return S(e.replace(ut, "$1"), t, n, r)
			}

			function n() {
				function e(n, r) {
					return t.push(n + " ") > w.cacheLength && delete e[t.shift()], e[n + " "] = r
				}
				var t = [];
				return e
			}

			function r(e) {
				return e[P] = !0, e
			}

			function o(e) {
				var t = A.createElement("div");
				try {
					return !!e(t)
				} catch (n) {
					return !1
				} finally {
					t.parentNode && t.parentNode.removeChild(t), t = null
				}
			}

			function i(e, t) {
				for (var n = e.split("|"), r = e.length; r--;) w.attrHandle[n[r]] = t
			}

			function a(e, t) {
				var n = t && e,
					r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Q) - (~e.sourceIndex || Q);
				if (r) return r;
				if (n)
					for (; n = n.nextSibling;)
						if (n === t) return -1;
				return e ? 1 : -1
			}

			function s(e) {
				return function(t) {
					var n = t.nodeName.toLowerCase();
					return "input" === n && t.type === e
				}
			}

			function u(e) {
				return function(t) {
					var n = t.nodeName.toLowerCase();
					return ("input" === n || "button" === n) && t.type === e
				}
			}

			function l(e) {
				return r(function(t) {
					return t = +t, r(function(n, r) {
						for (var o, i = e([], n.length, t), a = i.length; a--;) n[o = i[a]] && (n[o] = !(r[o] = n[o]))
					})
				})
			}

			function c(e) {
				return e && "undefined" != typeof e.getElementsByTagName && e
			}

			function f() {}

			function d(e) {
				for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
				return r
			}

			function p(e, t, n) {
				var r = t.dir,
					o = n && "parentNode" === r,
					i = B++;
				return t.first ? function(t, n, i) {
					for (; t = t[r];)
						if (1 === t.nodeType || o) return e(t, n, i)
				} : function(t, n, a) {
					var s, u, l = [M, i];
					if (a) {
						for (; t = t[r];)
							if ((1 === t.nodeType || o) && e(t, n, a)) return !0
					} else
						for (; t = t[r];)
							if (1 === t.nodeType || o) {
								if (u = t[P] || (t[P] = {}), (s = u[r]) && s[0] === M && s[1] === i) return l[2] = s[2];
								if (u[r] = l, l[2] = e(t, n, a)) return !0
							}
				}
			}

			function h(e) {
				return e.length > 1 ? function(t, n, r) {
					for (var o = e.length; o--;)
						if (!e[o](t, n, r)) return !1;
					return !0
				} : e[0]
			}

			function m(e, n, r) {
				for (var o = 0, i = n.length; i > o; o++) t(e, n[o], r);
				return r
			}

			function g(e, t, n, r, o) {
				for (var i, a = [], s = 0, u = e.length, l = null != t; u > s; s++)(i = e[s]) && (!n || n(i, r, o)) && (a.push(i), l && t.push(s));
				return a
			}

			function v(e, t, n, o, i, a) {
				return o && !o[P] && (o = v(o)), i && !i[P] && (i = v(i, a)), r(function(r, a, s, u) {
					var l, c, f, d = [],
						p = [],
						h = a.length,
						v = r || m(t || "*", s.nodeType ? [s] : s, []),
						y = !e || !r && t ? v : g(v, d, e, s, u),
						b = n ? i || (r ? e : h || o) ? [] : a : y;
					if (n && n(y, b, s, u), o)
						for (l = g(b, p), o(l, [], s, u), c = l.length; c--;)(f = l[c]) && (b[p[c]] = !(y[p[c]] = f));
					if (r) {
						if (i || e) {
							if (i) {
								for (l = [], c = b.length; c--;)(f = b[c]) && l.push(y[c] = f);
								i(null, b = [], l, u)
							}
							for (c = b.length; c--;)(f = b[c]) && (l = i ? et(r, f) : d[c]) > -1 && (r[l] = !(a[l] = f))
						}
					} else b = g(b === a ? b.splice(h, b.length) : b), i ? i(null, a, b, u) : K.apply(a, b)
				})
			}

			function y(e) {
				for (var t, n, r, o = e.length, i = w.relative[e[0].type], a = i || w.relative[" "], s = i ? 1 : 0, u = p(function(e) {
						return e === t
					}, a, !0), l = p(function(e) {
						return et(t, e) > -1
					}, a, !0), c = [function(e, n, r) {
						var o = !i && (r || n !== E) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
						return t = null, o
					}]; o > s; s++)
					if (n = w.relative[e[s].type]) c = [p(h(c), n)];
					else {
						if (n = w.filter[e[s].type].apply(null, e[s].matches), n[P]) {
							for (r = ++s; o > r && !w.relative[e[r].type]; r++);
							return v(s > 1 && h(c), s > 1 && d(e.slice(0, s - 1).concat({
								value: " " === e[s - 2].type ? "*" : ""
							})).replace(ut, "$1"), n, r > s && y(e.slice(s, r)), o > r && y(e = e.slice(r)), o > r && d(e))
						}
						c.push(n)
					}
				return h(c)
			}

			function b(e, n) {
				var o = n.length > 0,
					i = e.length > 0,
					a = function(r, a, s, u, l) {
						var c, f, d, p = 0,
							h = "0",
							m = r && [],
							v = [],
							y = E,
							b = r || i && w.find.TAG("*", l),
							_ = M += null == y ? 1 : Math.random() || .1,
							x = b.length;
						for (l && (E = a !== A && a); h !== x && null != (c = b[h]); h++) {
							if (i && c) {
								for (f = 0; d = e[f++];)
									if (d(c, a, s)) {
										u.push(c);
										break
									}
								l && (M = _)
							}
							o && ((c = !d && c) && p--, r && m.push(c))
						}
						if (p += h, o && h !== p) {
							for (f = 0; d = n[f++];) d(m, v, a, s);
							if (r) {
								if (p > 0)
									for (; h--;) m[h] || v[h] || (v[h] = J.call(u));
								v = g(v)
							}
							K.apply(u, v), l && !r && v.length > 0 && p + n.length > 1 && t.uniqueSort(u)
						}
						return l && (M = _, E = y), m
					};
				return o ? r(a) : a
			}
			var _, x, w, T, C, k, j, S, E, $, N, D, A, L, q, O, R, F, H, P = "sizzle" + 1 * new Date,
				I = e.document,
				M = 0,
				B = 0,
				W = n(),
				z = n(),
				X = n(),
				U = function(e, t) {
					return e === t && (N = !0), 0
				},
				Q = 1 << 31,
				V = {}.hasOwnProperty,
				Y = [],
				J = Y.pop,
				G = Y.push,
				K = Y.push,
				Z = Y.slice,
				et = function(e, t) {
					for (var n = 0, r = e.length; r > n; n++)
						if (e[n] === t) return n;
					return -1
				},
				tt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
				nt = "[\\x20\\t\\r\\n\\f]",
				rt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
				ot = rt.replace("w", "w#"),
				it = "\\[" + nt + "*(" + rt + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ot + "))|)" + nt + "*\\]",
				at = ":(" + rt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + it + ")*)|.*)\\)|)",
				st = new RegExp(nt + "+", "g"),
				ut = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
				lt = new RegExp("^" + nt + "*," + nt + "*"),
				ct = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
				ft = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
				dt = new RegExp(at),
				pt = new RegExp("^" + ot + "$"),
				ht = {
					ID: new RegExp("^#(" + rt + ")"),
					CLASS: new RegExp("^\\.(" + rt + ")"),
					TAG: new RegExp("^(" + rt.replace("w", "w*") + ")"),
					ATTR: new RegExp("^" + it),
					PSEUDO: new RegExp("^" + at),
					CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
					bool: new RegExp("^(?:" + tt + ")$", "i"),
					needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
				},
				mt = /^(?:input|select|textarea|button)$/i,
				gt = /^h\d$/i,
				vt = /^[^{]+\{\s*\[native \w/,
				yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
				bt = /[+~]/,
				_t = /'|\\/g,
				xt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
				wt = function(e, t, n) {
					var r = "0x" + t - 65536;
					return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
				},
				Tt = function() {
					D()
				};
			try {
				K.apply(Y = Z.call(I.childNodes), I.childNodes), Y[I.childNodes.length].nodeType
			} catch (Ct) {
				K = {
					apply: Y.length ? function(e, t) {
						G.apply(e, Z.call(t))
					} : function(e, t) {
						for (var n = e.length, r = 0; e[n++] = t[r++];);
						e.length = n - 1
					}
				}
			}
			x = t.support = {}, C = t.isXML = function(e) {
				var t = e && (e.ownerDocument || e).documentElement;
				return t ? "HTML" !== t.nodeName : !1
			}, D = t.setDocument = function(e) {
				var t, n, r = e ? e.ownerDocument || e : I;
				return r !== A && 9 === r.nodeType && r.documentElement ? (A = r, L = r.documentElement, n = r.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Tt, !1) : n.attachEvent && n.attachEvent("onunload", Tt)), q = !C(r), x.attributes = o(function(e) {
					return e.className = "i", !e.getAttribute("className")
				}), x.getElementsByTagName = o(function(e) {
					return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length
				}), x.getElementsByClassName = vt.test(r.getElementsByClassName), x.getById = o(function(e) {
					return L.appendChild(e).id = P, !r.getElementsByName || !r.getElementsByName(P).length
				}), x.getById ? (w.find.ID = function(e, t) {
					if ("undefined" != typeof t.getElementById && q) {
						var n = t.getElementById(e);
						return n && n.parentNode ? [n] : []
					}
				}, w.filter.ID = function(e) {
					var t = e.replace(xt, wt);
					return function(e) {
						return e.getAttribute("id") === t
					}
				}) : (delete w.find.ID, w.filter.ID = function(e) {
					var t = e.replace(xt, wt);
					return function(e) {
						var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
						return n && n.value === t
					}
				}), w.find.TAG = x.getElementsByTagName ? function(e, t) {
					return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
				} : function(e, t) {
					var n, r = [],
						o = 0,
						i = t.getElementsByTagName(e);
					if ("*" === e) {
						for (; n = i[o++];) 1 === n.nodeType && r.push(n);
						return r
					}
					return i
				}, w.find.CLASS = x.getElementsByClassName && function(e, t) {
					return q ? t.getElementsByClassName(e) : void 0
				}, R = [], O = [], (x.qsa = vt.test(r.querySelectorAll)) && (o(function(e) {
					L.appendChild(e).innerHTML = "<a id='" + P + "'></a><select id='" + P + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + nt + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || O.push("\\[" + nt + "*(?:value|" + tt + ")"), e.querySelectorAll("[id~=" + P + "-]").length || O.push("~="), e.querySelectorAll(":checked").length || O.push(":checked"), e.querySelectorAll("a#" + P + "+*").length || O.push(".#.+[+~]")
				}), o(function(e) {
					var t = r.createElement("input");
					t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && O.push("name" + nt + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), O.push(",.*:")
				})), (x.matchesSelector = vt.test(F = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && o(function(e) {
					x.disconnectedMatch = F.call(e, "div"), F.call(e, "[s!='']:x"), R.push("!=", at)
				}), O = O.length && new RegExp(O.join("|")), R = R.length && new RegExp(R.join("|")), t = vt.test(L.compareDocumentPosition), H = t || vt.test(L.contains) ? function(e, t) {
					var n = 9 === e.nodeType ? e.documentElement : e,
						r = t && t.parentNode;
					return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
				} : function(e, t) {
					if (t)
						for (; t = t.parentNode;)
							if (t === e) return !0;
					return !1
				}, U = t ? function(e, t) {
					if (e === t) return N = !0, 0;
					var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
					return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === r || e.ownerDocument === I && H(I, e) ? -1 : t === r || t.ownerDocument === I && H(I, t) ? 1 : $ ? et($, e) - et($, t) : 0 : 4 & n ? -1 : 1)
				} : function(e, t) {
					if (e === t) return N = !0, 0;
					var n, o = 0,
						i = e.parentNode,
						s = t.parentNode,
						u = [e],
						l = [t];
					if (!i || !s) return e === r ? -1 : t === r ? 1 : i ? -1 : s ? 1 : $ ? et($, e) - et($, t) : 0;
					if (i === s) return a(e, t);
					for (n = e; n = n.parentNode;) u.unshift(n);
					for (n = t; n = n.parentNode;) l.unshift(n);
					for (; u[o] === l[o];) o++;
					return o ? a(u[o], l[o]) : u[o] === I ? -1 : l[o] === I ? 1 : 0
				}, r) : A
			}, t.matches = function(e, n) {
				return t(e, null, null, n)
			}, t.matchesSelector = function(e, n) {
				if ((e.ownerDocument || e) !== A && D(e), n = n.replace(ft, "='$1']"), !(!x.matchesSelector || !q || R && R.test(n) || O && O.test(n))) try {
					var r = F.call(e, n);
					if (r || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
				} catch (o) {}
				return t(n, A, null, [e]).length > 0
			}, t.contains = function(e, t) {
				return (e.ownerDocument || e) !== A && D(e), H(e, t)
			}, t.attr = function(e, t) {
				(e.ownerDocument || e) !== A && D(e);
				var n = w.attrHandle[t.toLowerCase()],
					r = n && V.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !q) : void 0;
				return void 0 !== r ? r : x.attributes || !q ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
			}, t.error = function(e) {
				throw new Error("Syntax error, unrecognized expression: " + e)
			}, t.uniqueSort = function(e) {
				var t, n = [],
					r = 0,
					o = 0;
				if (N = !x.detectDuplicates, $ = !x.sortStable && e.slice(0), e.sort(U), N) {
					for (; t = e[o++];) t === e[o] && (r = n.push(o));
					for (; r--;) e.splice(n[r], 1)
				}
				return $ = null, e
			}, T = t.getText = function(e) {
				var t, n = "",
					r = 0,
					o = e.nodeType;
				if (o) {
					if (1 === o || 9 === o || 11 === o) {
						if ("string" == typeof e.textContent) return e.textContent;
						for (e = e.firstChild; e; e = e.nextSibling) n += T(e)
					} else if (3 === o || 4 === o) return e.nodeValue
				} else
					for (; t = e[r++];) n += T(t);
				return n
			}, w = t.selectors = {
				cacheLength: 50,
				createPseudo: r,
				match: ht,
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
					ATTR: function(e) {
						return e[1] = e[1].replace(xt, wt), e[3] = (e[3] || e[4] || e[5] || "").replace(xt, wt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
					},
					CHILD: function(e) {
						return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
					},
					PSEUDO: function(e) {
						var t, n = !e[6] && e[2];
						return ht.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && dt.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
					}
				},
				filter: {
					TAG: function(e) {
						var t = e.replace(xt, wt).toLowerCase();
						return "*" === e ? function() {
							return !0
						} : function(e) {
							return e.nodeName && e.nodeName.toLowerCase() === t
						}
					},
					CLASS: function(e) {
						var t = W[e + " "];
						return t || (t = new RegExp("(^|" + nt + ")" + e + "(" + nt + "|$)")) && W(e, function(e) {
							return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
						})
					},
					ATTR: function(e, n, r) {
						return function(o) {
							var i = t.attr(o, e);
							return null == i ? "!=" === n : n ? (i += "", "=" === n ? i === r : "!=" === n ? i !== r : "^=" === n ? r && 0 === i.indexOf(r) : "*=" === n ? r && i.indexOf(r) > -1 : "$=" === n ? r && i.slice(-r.length) === r : "~=" === n ? (" " + i.replace(st, " ") + " ").indexOf(r) > -1 : "|=" === n ? i === r || i.slice(0, r.length + 1) === r + "-" : !1) : !0
						}
					},
					CHILD: function(e, t, n, r, o) {
						var i = "nth" !== e.slice(0, 3),
							a = "last" !== e.slice(-4),
							s = "of-type" === t;
						return 1 === r && 0 === o ? function(e) {
							return !!e.parentNode
						} : function(t, n, u) {
							var l, c, f, d, p, h, m = i !== a ? "nextSibling" : "previousSibling",
								g = t.parentNode,
								v = s && t.nodeName.toLowerCase(),
								y = !u && !s;
							if (g) {
								if (i) {
									for (; m;) {
										for (f = t; f = f[m];)
											if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
										h = m = "only" === e && !h && "nextSibling"
									}
									return !0
								}
								if (h = [a ? g.firstChild : g.lastChild], a && y) {
									for (c = g[P] || (g[P] = {}), l = c[e] || [], p = l[0] === M && l[1], d = l[0] === M && l[2], f = p && g.childNodes[p]; f = ++p && f && f[m] || (d = p = 0) || h.pop();)
										if (1 === f.nodeType && ++d && f === t) {
											c[e] = [M, p, d];
											break
										}
								} else if (y && (l = (t[P] || (t[P] = {}))[e]) && l[0] === M) d = l[1];
								else
									for (;
										(f = ++p && f && f[m] || (d = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++d || (y && ((f[P] || (f[P] = {}))[e] = [M, d]), f !== t)););
								return d -= o, d === r || d % r === 0 && d / r >= 0
							}
						}
					},
					PSEUDO: function(e, n) {
						var o, i = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
						return i[P] ? i(n) : i.length > 1 ? (o = [e, e, "", n], w.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
							for (var r, o = i(e, n), a = o.length; a--;) r = et(e, o[a]), e[r] = !(t[r] = o[a])
						}) : function(e) {
							return i(e, 0, o)
						}) : i
					}
				},
				pseudos: {
					not: r(function(e) {
						var t = [],
							n = [],
							o = j(e.replace(ut, "$1"));
						return o[P] ? r(function(e, t, n, r) {
							for (var i, a = o(e, null, r, []), s = e.length; s--;)(i = a[s]) && (e[s] = !(t[s] = i))
						}) : function(e, r, i) {
							return t[0] = e, o(t, null, i, n), t[0] = null, !n.pop()
						}
					}),
					has: r(function(e) {
						return function(n) {
							return t(e, n).length > 0
						}
					}),
					contains: r(function(e) {
						return e = e.replace(xt, wt),
							function(t) {
								return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
							}
					}),
					lang: r(function(e) {
						return pt.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xt, wt).toLowerCase(),
							function(t) {
								var n;
								do
									if (n = q ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
								while ((t = t.parentNode) && 1 === t.nodeType);
								return !1
							}
					}),
					target: function(t) {
						var n = e.location && e.location.hash;
						return n && n.slice(1) === t.id
					},
					root: function(e) {
						return e === L
					},
					focus: function(e) {
						return e === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
					},
					enabled: function(e) {
						return e.disabled === !1
					},
					disabled: function(e) {
						return e.disabled === !0
					},
					checked: function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && !!e.checked || "option" === t && !!e.selected
					},
					selected: function(e) {
						return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
					},
					empty: function(e) {
						for (e = e.firstChild; e; e = e.nextSibling)
							if (e.nodeType < 6) return !1;
						return !0
					},
					parent: function(e) {
						return !w.pseudos.empty(e)
					},
					header: function(e) {
						return gt.test(e.nodeName)
					},
					input: function(e) {
						return mt.test(e.nodeName)
					},
					button: function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && "button" === e.type || "button" === t
					},
					text: function(e) {
						var t;
						return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
					},
					first: l(function() {
						return [0]
					}),
					last: l(function(e, t) {
						return [t - 1]
					}),
					eq: l(function(e, t, n) {
						return [0 > n ? n + t : n]
					}),
					even: l(function(e, t) {
						for (var n = 0; t > n; n += 2) e.push(n);
						return e
					}),
					odd: l(function(e, t) {
						for (var n = 1; t > n; n += 2) e.push(n);
						return e
					}),
					lt: l(function(e, t, n) {
						for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
						return e
					}),
					gt: l(function(e, t, n) {
						for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
						return e
					})
				}
			}, w.pseudos.nth = w.pseudos.eq;
			for (_ in {
					radio: !0,
					checkbox: !0,
					file: !0,
					password: !0,
					image: !0
				}) w.pseudos[_] = s(_);
			for (_ in {
					submit: !0,
					reset: !0
				}) w.pseudos[_] = u(_);
			return f.prototype = w.filters = w.pseudos, w.setFilters = new f, k = t.tokenize = function(e, n) {
				var r, o, i, a, s, u, l, c = z[e + " "];
				if (c) return n ? 0 : c.slice(0);
				for (s = e, u = [], l = w.preFilter; s;) {
					(!r || (o = lt.exec(s))) && (o && (s = s.slice(o[0].length) || s), u.push(i = [])), r = !1, (o = ct.exec(s)) && (r = o.shift(), i.push({
						value: r,
						type: o[0].replace(ut, " ")
					}), s = s.slice(r.length));
					for (a in w.filter) !(o = ht[a].exec(s)) || l[a] && !(o = l[a](o)) || (r = o.shift(), i.push({
						value: r,
						type: a,
						matches: o
					}), s = s.slice(r.length));
					if (!r) break
				}
				return n ? s.length : s ? t.error(e) : z(e, u).slice(0)
			}, j = t.compile = function(e, t) {
				var n, r = [],
					o = [],
					i = X[e + " "];
				if (!i) {
					for (t || (t = k(e)), n = t.length; n--;) i = y(t[n]), i[P] ? r.push(i) : o.push(i);
					i = X(e, b(o, r)), i.selector = e
				}
				return i
			}, S = t.select = function(e, t, n, r) {
				var o, i, a, s, u, l = "function" == typeof e && e,
					f = !r && k(e = l.selector || e);
				if (n = n || [], 1 === f.length) {
					if (i = f[0] = f[0].slice(0), i.length > 2 && "ID" === (a = i[0]).type && x.getById && 9 === t.nodeType && q && w.relative[i[1].type]) {
						if (t = (w.find.ID(a.matches[0].replace(xt, wt), t) || [])[0], !t) return n;
						l && (t = t.parentNode), e = e.slice(i.shift().value.length)
					}
					for (o = ht.needsContext.test(e) ? 0 : i.length; o-- && (a = i[o], !w.relative[s = a.type]);)
						if ((u = w.find[s]) && (r = u(a.matches[0].replace(xt, wt), bt.test(i[0].type) && c(t.parentNode) || t))) {
							if (i.splice(o, 1), e = r.length && d(i), !e) return K.apply(n, r), n;
							break
						}
				}
				return (l || j(e, f))(r, t, !q, n, bt.test(e) && c(t.parentNode) || t), n
			}, x.sortStable = P.split("").sort(U).join("") === P, x.detectDuplicates = !!N, D(), x.sortDetached = o(function(e) {
				return 1 & e.compareDocumentPosition(A.createElement("div"))
			}), o(function(e) {
				return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
			}) || i("type|href|height|width", function(e, t, n) {
				return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
			}), x.attributes && o(function(e) {
				return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
			}) || i("value", function(e, t, n) {
				return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
			}), o(function(e) {
				return null == e.getAttribute("disabled")
			}) || i(tt, function(e, t, n) {
				var r;
				return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
			}), t
		}(e);
		Z.find = ot, Z.expr = ot.selectors, Z.expr[":"] = Z.expr.pseudos, Z.unique = ot.uniqueSort, Z.text = ot.getText, Z.isXMLDoc = ot.isXML, Z.contains = ot.contains;
		var it = Z.expr.match.needsContext,
			at = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
			st = /^.[^:#\[\.,]*$/;
		Z.filter = function(e, t, n) {
			var r = t[0];
			return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? Z.find.matchesSelector(r, e) ? [r] : [] : Z.find.matches(e, Z.grep(t, function(e) {
				return 1 === e.nodeType
			}))
		}, Z.fn.extend({
			find: function(e) {
				var t, n = this.length,
					r = [],
					o = this;
				if ("string" != typeof e) return this.pushStack(Z(e).filter(function() {
					for (t = 0; n > t; t++)
						if (Z.contains(o[t], this)) return !0
				}));
				for (t = 0; n > t; t++) Z.find(e, o[t], r);
				return r = this.pushStack(n > 1 ? Z.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
			},
			filter: function(e) {
				return this.pushStack(r(this, e || [], !1))
			},
			not: function(e) {
				return this.pushStack(r(this, e || [], !0))
			},
			is: function(e) {
				return !!r(this, "string" == typeof e && it.test(e) ? Z(e) : e || [], !1).length
			}
		});
		var ut, lt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
			ct = Z.fn.init = function(e, t) {
				var n, r;
				if (!e) return this;
				if ("string" == typeof e) {
					if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : lt.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || ut).find(e) : this.constructor(t).find(e);
					if (n[1]) {
						if (t = t instanceof Z ? t[0] : t, Z.merge(this, Z.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : G, !0)), at.test(n[1]) && Z.isPlainObject(t))
							for (n in t) Z.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
						return this
					}
					return r = G.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = G, this.selector = e, this
				}
				return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : Z.isFunction(e) ? "undefined" != typeof ut.ready ? ut.ready(e) : e(Z) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), Z.makeArray(e, this))
			};
		ct.prototype = Z.fn, ut = Z(G);
		var ft = /^(?:parents|prev(?:Until|All))/,
			dt = {
				children: !0,
				contents: !0,
				next: !0,
				prev: !0
			};
		Z.extend({
			dir: function(e, t, n) {
				for (var r = [], o = void 0 !== n;
					(e = e[t]) && 9 !== e.nodeType;)
					if (1 === e.nodeType) {
						if (o && Z(e).is(n)) break;
						r.push(e)
					}
				return r
			},
			sibling: function(e, t) {
				for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
				return n
			}
		}), Z.fn.extend({
			has: function(e) {
				var t = Z(e, this),
					n = t.length;
				return this.filter(function() {
					for (var e = 0; n > e; e++)
						if (Z.contains(this, t[e])) return !0
				})
			},
			closest: function(e, t) {
				for (var n, r = 0, o = this.length, i = [], a = it.test(e) || "string" != typeof e ? Z(e, t || this.context) : 0; o > r; r++)
					for (n = this[r]; n && n !== t; n = n.parentNode)
						if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && Z.find.matchesSelector(n, e))) {
							i.push(n);
							break
						}
				return this.pushStack(i.length > 1 ? Z.unique(i) : i)
			},
			index: function(e) {
				return e ? "string" == typeof e ? U.call(Z(e), this[0]) : U.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
			},
			add: function(e, t) {
				return this.pushStack(Z.unique(Z.merge(this.get(), Z(e, t))))
			},
			addBack: function(e) {
				return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
			}
		}), Z.each({
			parent: function(e) {
				var t = e.parentNode;
				return t && 11 !== t.nodeType ? t : null
			},
			parents: function(e) {
				return Z.dir(e, "parentNode")
			},
			parentsUntil: function(e, t, n) {
				return Z.dir(e, "parentNode", n)
			},
			next: function(e) {
				return o(e, "nextSibling")
			},
			prev: function(e) {
				return o(e, "previousSibling")
			},
			nextAll: function(e) {
				return Z.dir(e, "nextSibling")
			},
			prevAll: function(e) {
				return Z.dir(e, "previousSibling")
			},
			nextUntil: function(e, t, n) {
				return Z.dir(e, "nextSibling", n)
			},
			prevUntil: function(e, t, n) {
				return Z.dir(e, "previousSibling", n)
			},
			siblings: function(e) {
				return Z.sibling((e.parentNode || {}).firstChild, e)
			},
			children: function(e) {
				return Z.sibling(e.firstChild)
			},
			contents: function(e) {
				return e.contentDocument || Z.merge([], e.childNodes)
			}
		}, function(e, t) {
			Z.fn[e] = function(n, r) {
				var o = Z.map(this, t, n);
				return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (o = Z.filter(r, o)), this.length > 1 && (dt[e] || Z.unique(o), ft.test(e) && o.reverse()), this.pushStack(o)
			}
		});
		var pt = /\S+/g,
			ht = {};
		Z.Callbacks = function(e) {
			e = "string" == typeof e ? ht[e] || i(e) : Z.extend({}, e);
			var t, n, r, o, a, s, u = [],
				l = !e.once && [],
				c = function(i) {
					for (t = e.memory && i, n = !0, s = o || 0, o = 0, a = u.length, r = !0; u && a > s; s++)
						if (u[s].apply(i[0], i[1]) === !1 && e.stopOnFalse) {
							t = !1;
							break
						}
					r = !1, u && (l ? l.length && c(l.shift()) : t ? u = [] : f.disable())
				},
				f = {
					add: function() {
						if (u) {
							var n = u.length;
							! function i(t) {
								Z.each(t, function(t, n) {
									var r = Z.type(n);
									"function" === r ? e.unique && f.has(n) || u.push(n) : n && n.length && "string" !== r && i(n)
								})
							}(arguments), r ? a = u.length : t && (o = n, c(t))
						}
						return this
					},
					remove: function() {
						return u && Z.each(arguments, function(e, t) {
							for (var n;
								(n = Z.inArray(t, u, n)) > -1;) u.splice(n, 1), r && (a >= n && a--, s >= n && s--)
						}), this
					},
					has: function(e) {
						return e ? Z.inArray(e, u) > -1 : !(!u || !u.length)
					},
					empty: function() {
						return u = [], a = 0, this
					},
					disable: function() {
						return u = l = t = void 0, this
					},
					disabled: function() {
						return !u
					},
					lock: function() {
						return l = void 0, t || f.disable(), this
					},
					locked: function() {
						return !l
					},
					fireWith: function(e, t) {
						return !u || n && !l || (t = t || [], t = [e, t.slice ? t.slice() : t], r ? l.push(t) : c(t)), this
					},
					fire: function() {
						return f.fireWith(this, arguments), this
					},
					fired: function() {
						return !!n
					}
				};
			return f
		}, Z.extend({
			Deferred: function(e) {
				var t = [
						["resolve", "done", Z.Callbacks("once memory"), "resolved"],
						["reject", "fail", Z.Callbacks("once memory"), "rejected"],
						["notify", "progress", Z.Callbacks("memory")]
					],
					n = "pending",
					r = {
						state: function() {
							return n
						},
						always: function() {
							return o.done(arguments).fail(arguments), this
						},
						then: function() {
							var e = arguments;
							return Z.Deferred(function(n) {
								Z.each(t, function(t, i) {
									var a = Z.isFunction(e[t]) && e[t];
									o[i[1]](function() {
										var e = a && a.apply(this, arguments);
										e && Z.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[i[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
									})
								}), e = null
							}).promise()
						},
						promise: function(e) {
							return null != e ? Z.extend(e, r) : r
						}
					},
					o = {};
				return r.pipe = r.then, Z.each(t, function(e, i) {
					var a = i[2],
						s = i[3];
					r[i[1]] = a.add, s && a.add(function() {
						n = s
					}, t[1 ^ e][2].disable, t[2][2].lock), o[i[0]] = function() {
						return o[i[0] + "With"](this === o ? r : this, arguments), this
					}, o[i[0] + "With"] = a.fireWith
				}), r.promise(o), e && e.call(o, o), o
			},
			when: function(e) {
				var t, n, r, o = 0,
					i = W.call(arguments),
					a = i.length,
					s = 1 !== a || e && Z.isFunction(e.promise) ? a : 0,
					u = 1 === s ? e : Z.Deferred(),
					l = function(e, n, r) {
						return function(o) {
							n[e] = this, r[e] = arguments.length > 1 ? W.call(arguments) : o, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
						}
					};
				if (a > 1)
					for (t = new Array(a), n = new Array(a), r = new Array(a); a > o; o++) i[o] && Z.isFunction(i[o].promise) ? i[o].promise().done(l(o, r, i)).fail(u.reject).progress(l(o, n, t)) : --s;
				return s || u.resolveWith(r, i), u.promise()
			}
		});
		var mt;
		Z.fn.ready = function(e) {
			return Z.ready.promise().done(e), this
		}, Z.extend({
			isReady: !1,
			readyWait: 1,
			holdReady: function(e) {
				e ? Z.readyWait++ : Z.ready(!0)
			},
			ready: function(e) {
				(e === !0 ? --Z.readyWait : Z.isReady) || (Z.isReady = !0, e !== !0 && --Z.readyWait > 0 || (mt.resolveWith(G, [Z]), Z.fn.triggerHandler && (Z(G).triggerHandler("ready"), Z(G).off("ready"))))
			}
		}), Z.ready.promise = function(t) {
			return mt || (mt = Z.Deferred(), "complete" === G.readyState ? setTimeout(Z.ready) : (G.addEventListener("DOMContentLoaded", a, !1), e.addEventListener("load", a, !1))), mt.promise(t)
		}, Z.ready.promise();
		var gt = Z.access = function(e, t, n, r, o, i, a) {
			var s = 0,
				u = e.length,
				l = null == n;
			if ("object" === Z.type(n)) {
				o = !0;
				for (s in n) Z.access(e, t, s, n[s], !0, i, a)
			} else if (void 0 !== r && (o = !0, Z.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
					return l.call(Z(e), n)
				})), t))
				for (; u > s; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
			return o ? e : l ? t.call(e) : u ? t(e[0], n) : i
		};
		Z.acceptData = function(e) {
			return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
		}, s.uid = 1, s.accepts = Z.acceptData, s.prototype = {
			key: function(e) {
				if (!s.accepts(e)) return 0;
				var t = {},
					n = e[this.expando];
				if (!n) {
					n = s.uid++;
					try {
						t[this.expando] = {
							value: n
						}, Object.defineProperties(e, t)
					} catch (r) {
						t[this.expando] = n, Z.extend(e, t)
					}
				}
				return this.cache[n] || (this.cache[n] = {}), n
			},
			set: function(e, t, n) {
				var r, o = this.key(e),
					i = this.cache[o];
				if ("string" == typeof t) i[t] = n;
				else if (Z.isEmptyObject(i)) Z.extend(this.cache[o], t);
				else
					for (r in t) i[r] = t[r];
				return i
			},
			get: function(e, t) {
				var n = this.cache[this.key(e)];
				return void 0 === t ? n : n[t]
			},
			access: function(e, t, n) {
				var r;
				return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, Z.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
			},
			remove: function(e, t) {
				var n, r, o, i = this.key(e),
					a = this.cache[i];
				if (void 0 === t) this.cache[i] = {};
				else {
					Z.isArray(t) ? r = t.concat(t.map(Z.camelCase)) : (o = Z.camelCase(t), t in a ? r = [t, o] : (r = o, r = r in a ? [r] : r.match(pt) || [])), n = r.length;
					for (; n--;) delete a[r[n]]
				}
			},
			hasData: function(e) {
				return !Z.isEmptyObject(this.cache[e[this.expando]] || {})
			},
			discard: function(e) {
				e[this.expando] && delete this.cache[e[this.expando]]
			}
		};
		var vt = new s,
			yt = new s,
			bt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
			_t = /([A-Z])/g;
		Z.extend({
			hasData: function(e) {
				return yt.hasData(e) || vt.hasData(e)
			},
			data: function(e, t, n) {
				return yt.access(e, t, n)
			},
			removeData: function(e, t) {
				yt.remove(e, t)
			},
			_data: function(e, t, n) {
				return vt.access(e, t, n)
			},
			_removeData: function(e, t) {
				vt.remove(e, t)
			}
		}), Z.fn.extend({
			data: function(e, t) {
				var n, r, o, i = this[0],
					a = i && i.attributes;
				if (void 0 === e) {
					if (this.length && (o = yt.get(i), 1 === i.nodeType && !vt.get(i, "hasDataAttrs"))) {
						for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = Z.camelCase(r.slice(5)), u(i, r, o[r])));
						vt.set(i, "hasDataAttrs", !0)
					}
					return o
				}
				return "object" == typeof e ? this.each(function() {
					yt.set(this, e)
				}) : gt(this, function(t) {
					var n, r = Z.camelCase(e);
					if (i && void 0 === t) {
						if (n = yt.get(i, e), void 0 !== n) return n;
						if (n = yt.get(i, r), void 0 !== n) return n;
						if (n = u(i, r, void 0), void 0 !== n) return n
					} else this.each(function() {
						var n = yt.get(this, r);
						yt.set(this, r, t), -1 !== e.indexOf("-") && void 0 !== n && yt.set(this, e, t)
					})
				}, null, t, arguments.length > 1, null, !0)
			},
			removeData: function(e) {
				return this.each(function() {
					yt.remove(this, e)
				})
			}
		}), Z.extend({
			queue: function(e, t, n) {
				var r;
				return e ? (t = (t || "fx") + "queue", r = vt.get(e, t), n && (!r || Z.isArray(n) ? r = vt.access(e, t, Z.makeArray(n)) : r.push(n)), r || []) : void 0
			},
			dequeue: function(e, t) {
				t = t || "fx";
				var n = Z.queue(e, t),
					r = n.length,
					o = n.shift(),
					i = Z._queueHooks(e, t),
					a = function() {
						Z.dequeue(e, t)
					};
				"inprogress" === o && (o = n.shift(), r--), o && ("fx" === t && n.unshift("inprogress"), delete i.stop, o.call(e, a, i)), !r && i && i.empty.fire()
			},
			_queueHooks: function(e, t) {
				var n = t + "queueHooks";
				return vt.get(e, n) || vt.access(e, n, {
					empty: Z.Callbacks("once memory").add(function() {
						vt.remove(e, [t + "queue", n])
					})
				})
			}
		}), Z.fn.extend({
			queue: function(e, t) {
				var n = 2;
				return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Z.queue(this[0], e) : void 0 === t ? this : this.each(function() {
					var n = Z.queue(this, e, t);
					Z._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Z.dequeue(this, e)
				})
			},
			dequeue: function(e) {
				return this.each(function() {
					Z.dequeue(this, e)
				})
			},
			clearQueue: function(e) {
				return this.queue(e || "fx", [])
			},
			promise: function(e, t) {
				var n, r = 1,
					o = Z.Deferred(),
					i = this,
					a = this.length,
					s = function() {
						--r || o.resolveWith(i, [i])
					};
				for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = vt.get(i[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
				return s(), o.promise(t)
			}
		});
		var xt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
			wt = ["Top", "Right", "Bottom", "Left"],
			Tt = function(e, t) {
				return e = t || e, "none" === Z.css(e, "display") || !Z.contains(e.ownerDocument, e)
			},
			Ct = /^(?:checkbox|radio)$/i;
		! function() {
			var e = G.createDocumentFragment(),
				t = e.appendChild(G.createElement("div")),
				n = G.createElement("input");
			n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), J.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", J.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
		}();
		var kt = "undefined";
		J.focusinBubbles = "onfocusin" in e;
		var jt = /^key/,
			St = /^(?:mouse|pointer|contextmenu)|click/,
			Et = /^(?:focusinfocus|focusoutblur)$/,
			$t = /^([^.]*)(?:\.(.+)|)$/;
		Z.event = {
			global: {},
			add: function(e, t, n, r, o) {
				var i, a, s, u, l, c, f, d, p, h, m, g = vt.get(e);
				if (g)
					for (n.handler && (i = n, n = i.handler, o = i.selector), n.guid || (n.guid = Z.guid++), (u = g.events) || (u = g.events = {}), (a = g.handle) || (a = g.handle = function(t) {
							return typeof Z !== kt && Z.event.triggered !== t.type ? Z.event.dispatch.apply(e, arguments) : void 0
						}), t = (t || "").match(pt) || [""], l = t.length; l--;) s = $t.exec(t[l]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p && (f = Z.event.special[p] || {}, p = (o ? f.delegateType : f.bindType) || p, f = Z.event.special[p] || {}, c = Z.extend({
						type: p,
						origType: m,
						data: r,
						handler: n,
						guid: n.guid,
						selector: o,
						needsContext: o && Z.expr.match.needsContext.test(o),
						namespace: h.join(".")
					}, i), (d = u[p]) || (d = u[p] = [], d.delegateCount = 0, f.setup && f.setup.call(e, r, h, a) !== !1 || e.addEventListener && e.addEventListener(p, a, !1)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), o ? d.splice(d.delegateCount++, 0, c) : d.push(c), Z.event.global[p] = !0)
			},
			remove: function(e, t, n, r, o) {
				var i, a, s, u, l, c, f, d, p, h, m, g = vt.hasData(e) && vt.get(e);
				if (g && (u = g.events)) {
					for (t = (t || "").match(pt) || [""], l = t.length; l--;)
						if (s = $t.exec(t[l]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p) {
							for (f = Z.event.special[p] || {}, p = (r ? f.delegateType : f.bindType) || p, d = u[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = i = d.length; i--;) c = d[i], !o && m !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(i, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
							a && !d.length && (f.teardown && f.teardown.call(e, h, g.handle) !== !1 || Z.removeEvent(e, p, g.handle), delete u[p])
						} else
							for (p in u) Z.event.remove(e, p + t[l], n, r, !0);
					Z.isEmptyObject(u) && (delete g.handle, vt.remove(e, "events"))
				}
			},
			trigger: function(t, n, r, o) {
				var i, a, s, u, l, c, f, d = [r || G],
					p = Y.call(t, "type") ? t.type : t,
					h = Y.call(t, "namespace") ? t.namespace.split(".") : [];
				if (a = s = r = r || G, 3 !== r.nodeType && 8 !== r.nodeType && !Et.test(p + Z.event.triggered) && (p.indexOf(".") >= 0 && (h = p.split("."), p = h.shift(), h.sort()), l = p.indexOf(":") < 0 && "on" + p, t = t[Z.expando] ? t : new Z.Event(p, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : Z.makeArray(n, [t]), f = Z.event.special[p] || {}, o || !f.trigger || f.trigger.apply(r, n) !== !1)) {
					if (!o && !f.noBubble && !Z.isWindow(r)) {
						for (u = f.delegateType || p, Et.test(u + p) || (a = a.parentNode); a; a = a.parentNode) d.push(a), s = a;
						s === (r.ownerDocument || G) && d.push(s.defaultView || s.parentWindow || e)
					}
					for (i = 0;
						(a = d[i++]) && !t.isPropagationStopped();) t.type = i > 1 ? u : f.bindType || p, c = (vt.get(a, "events") || {})[t.type] && vt.get(a, "handle"), c && c.apply(a, n), c = l && a[l], c && c.apply && Z.acceptData(a) && (t.result = c.apply(a, n), t.result === !1 && t.preventDefault());
					return t.type = p, o || t.isDefaultPrevented() || f._default && f._default.apply(d.pop(), n) !== !1 || !Z.acceptData(r) || l && Z.isFunction(r[p]) && !Z.isWindow(r) && (s = r[l], s && (r[l] = null), Z.event.triggered = p, r[p](), Z.event.triggered = void 0, s && (r[l] = s)), t.result
				}
			},
			dispatch: function(e) {
				e = Z.event.fix(e);
				var t, n, r, o, i, a = [],
					s = W.call(arguments),
					u = (vt.get(this, "events") || {})[e.type] || [],
					l = Z.event.special[e.type] || {};
				if (s[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
					for (a = Z.event.handlers.call(this, e, u), t = 0;
						(o = a[t++]) && !e.isPropagationStopped();)
						for (e.currentTarget = o.elem, n = 0;
							(i = o.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((Z.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, s), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
					return l.postDispatch && l.postDispatch.call(this, e), e.result
				}
			},
			handlers: function(e, t) {
				var n, r, o, i, a = [],
					s = t.delegateCount,
					u = e.target;
				if (s && u.nodeType && (!e.button || "click" !== e.type))
					for (; u !== this; u = u.parentNode || this)
						if (u.disabled !== !0 || "click" !== e.type) {
							for (r = [], n = 0; s > n; n++) i = t[n], o = i.selector + " ", void 0 === r[o] && (r[o] = i.needsContext ? Z(o, this).index(u) >= 0 : Z.find(o, this, null, [u]).length), r[o] && r.push(i);
							r.length && a.push({
								elem: u,
								handlers: r
							})
						}
				return s < t.length && a.push({
					elem: this,
					handlers: t.slice(s)
				}), a
			},
			props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
			fixHooks: {},
			keyHooks: {
				props: "char charCode key keyCode".split(" "),
				filter: function(e, t) {
					return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
				}
			},
			mouseHooks: {
				props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
				filter: function(e, t) {
					var n, r, o, i = t.button;
					return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || G, r = n.documentElement, o = n.body, e.pageX = t.clientX + (r && r.scrollLeft || o && o.scrollLeft || 0) - (r && r.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || o && o.scrollTop || 0) - (r && r.clientTop || o && o.clientTop || 0)), e.which || void 0 === i || (e.which = 1 & i ? 1 : 2 & i ? 3 : 4 & i ? 2 : 0), e
				}
			},
			fix: function(e) {
				if (e[Z.expando]) return e;
				var t, n, r, o = e.type,
					i = e,
					a = this.fixHooks[o];
				for (a || (this.fixHooks[o] = a = St.test(o) ? this.mouseHooks : jt.test(o) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new Z.Event(i), t = r.length; t--;) n = r[t], e[n] = i[n];
				return e.target || (e.target = G), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, i) : e
			},
			special: {
				load: {
					noBubble: !0
				},
				focus: {
					trigger: function() {
						return this !== f() && this.focus ? (this.focus(), !1) : void 0
					},
					delegateType: "focusin"
				},
				blur: {
					trigger: function() {
						return this === f() && this.blur ? (this.blur(), !1) : void 0
					},
					delegateType: "focusout"
				},
				click: {
					trigger: function() {
						return "checkbox" === this.type && this.click && Z.nodeName(this, "input") ? (this.click(), !1) : void 0
					},
					_default: function(e) {
						return Z.nodeName(e.target, "a")
					}
				},
				beforeunload: {
					postDispatch: function(e) {
						void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
					}
				}
			},
			simulate: function(e, t, n, r) {
				var o = Z.extend(new Z.Event, n, {
					type: e,
					isSimulated: !0,
					originalEvent: {}
				});
				r ? Z.event.trigger(o, null, t) : Z.event.dispatch.call(t, o), o.isDefaultPrevented() && n.preventDefault()
			}
		}, Z.removeEvent = function(e, t, n) {
			e.removeEventListener && e.removeEventListener(t, n, !1)
		}, Z.Event = function(e, t) {
			return this instanceof Z.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? l : c) : this.type = e, t && Z.extend(this, t), this.timeStamp = e && e.timeStamp || Z.now(), void(this[Z.expando] = !0)) : new Z.Event(e, t)
		}, Z.Event.prototype = {
			isDefaultPrevented: c,
			isPropagationStopped: c,
			isImmediatePropagationStopped: c,
			preventDefault: function() {
				var e = this.originalEvent;
				this.isDefaultPrevented = l, e && e.preventDefault && e.preventDefault()
			},
			stopPropagation: function() {
				var e = this.originalEvent;
				this.isPropagationStopped = l, e && e.stopPropagation && e.stopPropagation()
			},
			stopImmediatePropagation: function() {
				var e = this.originalEvent;
				this.isImmediatePropagationStopped = l, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
			}
		}, Z.each({
			mouseenter: "mouseover",
			mouseleave: "mouseout",
			pointerenter: "pointerover",
			pointerleave: "pointerout"
		}, function(e, t) {
			Z.event.special[e] = {
				delegateType: t,
				bindType: t,
				handle: function(e) {
					var n, r = this,
						o = e.relatedTarget,
						i = e.handleObj;
					return (!o || o !== r && !Z.contains(r, o)) && (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
				}
			}
		}), J.focusinBubbles || Z.each({
			focus: "focusin",
			blur: "focusout"
		}, function(e, t) {
			var n = function(e) {
				Z.event.simulate(t, e.target, Z.event.fix(e), !0)
			};
			Z.event.special[t] = {
				setup: function() {
					var r = this.ownerDocument || this,
						o = vt.access(r, t);
					o || r.addEventListener(e, n, !0), vt.access(r, t, (o || 0) + 1)
				},
				teardown: function() {
					var r = this.ownerDocument || this,
						o = vt.access(r, t) - 1;
					o ? vt.access(r, t, o) : (r.removeEventListener(e, n, !0), vt.remove(r, t))
				}
			}
		}), Z.fn.extend({
			on: function(e, t, n, r, o) {
				var i, a;
				if ("object" == typeof e) {
					"string" != typeof t && (n = n || t, t = void 0);
					for (a in e) this.on(a, t, n, e[a], o);
					return this
				}
				if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = c;
				else if (!r) return this;
				return 1 === o && (i = r, r = function(e) {
					return Z().off(e), i.apply(this, arguments)
				}, r.guid = i.guid || (i.guid = Z.guid++)), this.each(function() {
					Z.event.add(this, e, r, n, t)
				})
			},
			one: function(e, t, n, r) {
				return this.on(e, t, n, r, 1)
			},
			off: function(e, t, n) {
				var r, o;
				if (e && e.preventDefault && e.handleObj) return r = e.handleObj, Z(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
				if ("object" == typeof e) {
					for (o in e) this.off(o, t, e[o]);
					return this
				}
				return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = c), this.each(function() {
					Z.event.remove(this, e, n, t)
				})
			},
			trigger: function(e, t) {
				return this.each(function() {
					Z.event.trigger(e, t, this)
				})
			},
			triggerHandler: function(e, t) {
				var n = this[0];
				return n ? Z.event.trigger(e, t, n, !0) : void 0
			}
		});
		var Nt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
			Dt = /<([\w:]+)/,
			At = /<|&#?\w+;/,
			Lt = /<(?:script|style|link)/i,
			qt = /checked\s*(?:[^=]|=\s*.checked.)/i,
			Ot = /^$|\/(?:java|ecma)script/i,
			Rt = /^true\/(.*)/,
			Ft = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
			Ht = {
				option: [1, "<select multiple='multiple'>", "</select>"],
				thead: [1, "<table>", "</table>"],
				col: [2, "<table><colgroup>", "</colgroup></table>"],
				tr: [2, "<table><tbody>", "</tbody></table>"],
				td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
				_default: [0, "", ""]
			};
		Ht.optgroup = Ht.option, Ht.tbody = Ht.tfoot = Ht.colgroup = Ht.caption = Ht.thead, Ht.th = Ht.td, Z.extend({
			clone: function(e, t, n) {
				var r, o, i, a, s = e.cloneNode(!0),
					u = Z.contains(e.ownerDocument, e);
				if (!(J.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Z.isXMLDoc(e)))
					for (a = v(s), i = v(e), r = 0, o = i.length; o > r; r++) y(i[r], a[r]);
				if (t)
					if (n)
						for (i = i || v(e), a = a || v(s), r = 0, o = i.length; o > r; r++) g(i[r], a[r]);
					else g(e, s);
				return a = v(s, "script"), a.length > 0 && m(a, !u && v(e, "script")), s
			},
			buildFragment: function(e, t, n, r) {
				for (var o, i, a, s, u, l, c = t.createDocumentFragment(), f = [], d = 0, p = e.length; p > d; d++)
					if (o = e[d], o || 0 === o)
						if ("object" === Z.type(o)) Z.merge(f, o.nodeType ? [o] : o);
						else if (At.test(o)) {
					for (i = i || c.appendChild(t.createElement("div")), a = (Dt.exec(o) || ["", ""])[1].toLowerCase(), s = Ht[a] || Ht._default, i.innerHTML = s[1] + o.replace(Nt, "<$1><$2>") + s[2], l = s[0]; l--;) i = i.lastChild;
					Z.merge(f, i.childNodes), i = c.firstChild, i.textContent = ""
				} else f.push(t.createTextNode(o));
				for (c.textContent = "", d = 0; o = f[d++];)
					if ((!r || -1 === Z.inArray(o, r)) && (u = Z.contains(o.ownerDocument, o), i = v(c.appendChild(o), "script"), u && m(i), n))
						for (l = 0; o = i[l++];) Ot.test(o.type || "") && n.push(o);
				return c
			},
			cleanData: function(e) {
				for (var t, n, r, o, i = Z.event.special, a = 0; void 0 !== (n = e[a]); a++) {
					if (Z.acceptData(n) && (o = n[vt.expando], o && (t = vt.cache[o]))) {
						if (t.events)
							for (r in t.events) i[r] ? Z.event.remove(n, r) : Z.removeEvent(n, r, t.handle);
						vt.cache[o] && delete vt.cache[o]
					}
					delete yt.cache[n[yt.expando]]
				}
			}
		}), Z.fn.extend({
			text: function(e) {
				return gt(this, function(e) {
					return void 0 === e ? Z.text(this) : this.empty().each(function() {
						(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
					})
				}, null, e, arguments.length)
			},
			append: function() {
				return this.domManip(arguments, function(e) {
					if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
						var t = d(this, e);
						t.appendChild(e)
					}
				})
			},
			prepend: function() {
				return this.domManip(arguments, function(e) {
					if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
						var t = d(this, e);
						t.insertBefore(e, t.firstChild)
					}
				})
			},
			before: function() {
				return this.domManip(arguments, function(e) {
					this.parentNode && this.parentNode.insertBefore(e, this)
				})
			},
			after: function() {
				return this.domManip(arguments, function(e) {
					this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
				})
			},
			remove: function(e, t) {
				for (var n, r = e ? Z.filter(e, this) : this, o = 0; null != (n = r[o]); o++) t || 1 !== n.nodeType || Z.cleanData(v(n)), n.parentNode && (t && Z.contains(n.ownerDocument, n) && m(v(n, "script")), n.parentNode.removeChild(n));
				return this
			},
			empty: function() {
				for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Z.cleanData(v(e, !1)), e.textContent = "");
				return this
			},
			clone: function(e, t) {
				return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
					return Z.clone(this, e, t)
				})
			},
			html: function(e) {
				return gt(this, function(e) {
					var t = this[0] || {},
						n = 0,
						r = this.length;
					if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
					if ("string" == typeof e && !Lt.test(e) && !Ht[(Dt.exec(e) || ["", ""])[1].toLowerCase()]) {
						e = e.replace(Nt, "<$1><$2>");
						try {
							for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (Z.cleanData(v(t, !1)), t.innerHTML = e);
							t = 0
						} catch (o) {}
					}
					t && this.empty().append(e)
				}, null, e, arguments.length)
			},
			replaceWith: function() {
				var e = arguments[0];
				return this.domManip(arguments, function(t) {
					e = this.parentNode, Z.cleanData(v(this)), e && e.replaceChild(t, this)
				}), e && (e.length || e.nodeType) ? this : this.remove()
			},
			detach: function(e) {
				return this.remove(e, !0)
			},
			domManip: function(e, t) {
				e = z.apply([], e);
				var n, r, o, i, a, s, u = 0,
					l = this.length,
					c = this,
					f = l - 1,
					d = e[0],
					m = Z.isFunction(d);
				if (m || l > 1 && "string" == typeof d && !J.checkClone && qt.test(d)) return this.each(function(n) {
					var r = c.eq(n);
					m && (e[0] = d.call(this, n, r.html())), r.domManip(e, t)
				});
				if (l && (n = Z.buildFragment(e, this[0].ownerDocument, !1, this), r = n.firstChild, 1 === n.childNodes.length && (n = r), r)) {
					for (o = Z.map(v(n, "script"), p), i = o.length; l > u; u++) a = n, u !== f && (a = Z.clone(a, !0, !0), i && Z.merge(o, v(a, "script"))), t.call(this[u], a, u);
					if (i)
						for (s = o[o.length - 1].ownerDocument, Z.map(o, h), u = 0; i > u; u++) a = o[u], Ot.test(a.type || "") && !vt.access(a, "globalEval") && Z.contains(s, a) && (a.src ? Z._evalUrl && Z._evalUrl(a.src) : Z.globalEval(a.textContent.replace(Ft, "")))
				}
				return this
			}
		}), Z.each({
			appendTo: "append",
			prependTo: "prepend",
			insertBefore: "before",
			insertAfter: "after",
			replaceAll: "replaceWith"
		}, function(e, t) {
			Z.fn[e] = function(e) {
				for (var n, r = [], o = Z(e), i = o.length - 1, a = 0; i >= a; a++) n = a === i ? this : this.clone(!0), Z(o[a])[t](n), X.apply(r, n.get());
				return this.pushStack(r)
			}
		});
		var Pt, It = {},
			Mt = /^margin/,
			Bt = new RegExp("^(" + xt + ")(?!px)[a-z%]+$", "i"),
			Wt = function(t) {
				return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
			};
		! function() {
			function t() {
				a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a.innerHTML = "", o.appendChild(i);
				var t = e.getComputedStyle(a, null);
				n = "1%" !== t.top, r = "4px" === t.width, o.removeChild(i)
			}
			var n, r, o = G.documentElement,
				i = G.createElement("div"),
				a = G.createElement("div");
			a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", J.clearCloneStyle = "content-box" === a.style.backgroundClip, i.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", i.appendChild(a), e.getComputedStyle && Z.extend(J, {
				pixelPosition: function() {
					return t(), n
				},
				boxSizingReliable: function() {
					return null == r && t(), r
				},
				reliableMarginRight: function() {
					var t, n = a.appendChild(G.createElement("div"));
					return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", o.appendChild(i), t = !parseFloat(e.getComputedStyle(n, null).marginRight), o.removeChild(i), a.removeChild(n), t
				}
			}))
		}(), Z.swap = function(e, t, n, r) {
			var o, i, a = {};
			for (i in t) a[i] = e.style[i], e.style[i] = t[i];
			o = n.apply(e, r || []);
			for (i in t) e.style[i] = a[i];
			return o
		};
		var zt = /^(none|table(?!-c[ea]).+)/,
			Xt = new RegExp("^(" + xt + ")(.*)$", "i"),
			Ut = new RegExp("^([+-])=(" + xt + ")", "i"),
			Qt = {
				position: "absolute",
				visibility: "hidden",
				display: "block"
			},
			Vt = {
				letterSpacing: "0",
				fontWeight: "400"
			},
			Yt = ["Webkit", "O", "Moz", "ms"];
		Z.extend({
			cssHooks: {
				opacity: {
					get: function(e, t) {
						if (t) {
							var n = x(e, "opacity");
							return "" === n ? "1" : n
						}
					}
				}
			},
			cssNumber: {
				columnCount: !0,
				fillOpacity: !0,
				flexGrow: !0,
				flexShrink: !0,
				fontWeight: !0,
				lineHeight: !0,
				opacity: !0,
				order: !0,
				orphans: !0,
				widows: !0,
				zIndex: !0,
				zoom: !0
			},
			cssProps: {
				"float": "cssFloat"
			},
			style: function(e, t, n, r) {
				if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
					var o, i, a, s = Z.camelCase(t),
						u = e.style;
					return t = Z.cssProps[s] || (Z.cssProps[s] = T(u, s)), a = Z.cssHooks[t] || Z.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (o = a.get(e, !1, r)) ? o : u[t] : (i = typeof n, "string" === i && (o = Ut.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(Z.css(e, t)), i = "number"), null != n && n === n && ("number" !== i || Z.cssNumber[s] || (n += "px"), J.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u[t] = n)), void 0)
				}
			},
			css: function(e, t, n, r) {
				var o, i, a, s = Z.camelCase(t);
				return t = Z.cssProps[s] || (Z.cssProps[s] = T(e.style, s)), a = Z.cssHooks[t] || Z.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = x(e, t, r)), "normal" === o && t in Vt && (o = Vt[t]), "" === n || n ? (i = parseFloat(o), n === !0 || Z.isNumeric(i) ? i || 0 : o) : o
			}
		}), Z.each(["height", "width"], function(e, t) {
			Z.cssHooks[t] = {
				get: function(e, n, r) {
					return n ? zt.test(Z.css(e, "display")) && 0 === e.offsetWidth ? Z.swap(e, Qt, function() {
						return j(e, t, r)
					}) : j(e, t, r) : void 0
				},
				set: function(e, n, r) {
					var o = r && Wt(e);
					return C(e, n, r ? k(e, t, r, "border-box" === Z.css(e, "boxSizing", !1, o), o) : 0)
				}
			}
		}), Z.cssHooks.marginRight = w(J.reliableMarginRight, function(e, t) {
			return t ? Z.swap(e, {
				display: "inline-block"
			}, x, [e, "marginRight"]) : void 0
		}), Z.each({
			margin: "",
			padding: "",
			border: "Width"
		}, function(e, t) {
			Z.cssHooks[e + t] = {
				expand: function(n) {
					for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) o[e + wt[r] + t] = i[r] || i[r - 2] || i[0];
					return o
				}
			}, Mt.test(e) || (Z.cssHooks[e + t].set = C)
		}), Z.fn.extend({
			css: function(e, t) {
				return gt(this, function(e, t, n) {
					var r, o, i = {},
						a = 0;
					if (Z.isArray(t)) {
						for (r = Wt(e), o = t.length; o > a; a++) i[t[a]] = Z.css(e, t[a], !1, r);
						return i
					}
					return void 0 !== n ? Z.style(e, t, n) : Z.css(e, t)
				}, e, t, arguments.length > 1)
			},
			show: function() {
				return S(this, !0)
			},
			hide: function() {
				return S(this)
			},
			toggle: function(e) {
				return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
					Tt(this) ? Z(this).show() : Z(this).hide()
				})
			}
		}), Z.Tween = E, E.prototype = {
			constructor: E,
			init: function(e, t, n, r, o, i) {
				this.elem = e, this.prop = n, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = i || (Z.cssNumber[n] ? "" : "px")
			},
			cur: function() {
				var e = E.propHooks[this.prop];
				return e && e.get ? e.get(this) : E.propHooks._default.get(this)
			},
			run: function(e) {
				var t, n = E.propHooks[this.prop];
				return this.pos = t = this.options.duration ? Z.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : E.propHooks._default.set(this), this
			}
		}, E.prototype.init.prototype = E.prototype, E.propHooks = {
			_default: {
				get: function(e) {
					var t;
					return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = Z.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
				},
				set: function(e) {
					Z.fx.step[e.prop] ? Z.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Z.cssProps[e.prop]] || Z.cssHooks[e.prop]) ? Z.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
				}
			}
		}, E.propHooks.scrollTop = E.propHooks.scrollLeft = {
			set: function(e) {
				e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
			}
		}, Z.easing = {
			linear: function(e) {
				return e
			},
			swing: function(e) {
				return .5 - Math.cos(e * Math.PI) / 2
			}
		}, Z.fx = E.prototype.init, Z.fx.step = {};
		var Jt, Gt, Kt = /^(?:toggle|show|hide)$/,
			Zt = new RegExp("^(?:([+-])=|)(" + xt + ")([a-z%]*)$", "i"),
			en = /queueHooks$/,
			tn = [A],
			nn = {
				"*": [function(e, t) {
					var n = this.createTween(e, t),
						r = n.cur(),
						o = Zt.exec(t),
						i = o && o[3] || (Z.cssNumber[e] ? "" : "px"),
						a = (Z.cssNumber[e] || "px" !== i && +r) && Zt.exec(Z.css(n.elem, e)),
						s = 1,
						u = 20;
					if (a && a[3] !== i) {
						i = i || a[3], o = o || [], a = +r || 1;
						do s = s || ".5", a /= s, Z.style(n.elem, e, a + i); while (s !== (s = n.cur() / r) && 1 !== s && --u)
					}
					return o && (a = n.start = +a || +r || 0, n.unit = i, n.end = o[1] ? a + (o[1] + 1) * o[2] : +o[2]), n
				}]
			};
		Z.Animation = Z.extend(q, {
				tweener: function(e, t) {
					Z.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
					for (var n, r = 0, o = e.length; o > r; r++) n = e[r], nn[n] = nn[n] || [], nn[n].unshift(t)
				},
				prefilter: function(e, t) {
					t ? tn.unshift(e) : tn.push(e)
				}
			}), Z.speed = function(e, t, n) {
				var r = e && "object" == typeof e ? Z.extend({}, e) : {
					complete: n || !n && t || Z.isFunction(e) && e,
					duration: e,
					easing: n && t || t && !Z.isFunction(t) && t
				};
				return r.duration = Z.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in Z.fx.speeds ? Z.fx.speeds[r.duration] : Z.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
					Z.isFunction(r.old) && r.old.call(this), r.queue && Z.dequeue(this, r.queue)
				}, r
			}, Z.fn.extend({
				fadeTo: function(e, t, n, r) {
					return this.filter(Tt).css("opacity", 0).show().end().animate({
						opacity: t
					}, e, n, r)
				},
				animate: function(e, t, n, r) {
					var o = Z.isEmptyObject(e),
						i = Z.speed(t, n, r),
						a = function() {
							var t = q(this, Z.extend({}, e), i);
							(o || vt.get(this, "finish")) && t.stop(!0)
						};
					return a.finish = a, o || i.queue === !1 ? this.each(a) : this.queue(i.queue, a)
				},
				stop: function(e, t, n) {
					var r = function(e) {
						var t = e.stop;
						delete e.stop, t(n)
					};
					return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
						var t = !0,
							o = null != e && e + "queueHooks",
							i = Z.timers,
							a = vt.get(this);
						if (o) a[o] && a[o].stop && r(a[o]);
						else
							for (o in a) a[o] && a[o].stop && en.test(o) && r(a[o]);
						for (o = i.length; o--;) i[o].elem !== this || null != e && i[o].queue !== e || (i[o].anim.stop(n), t = !1, i.splice(o, 1));
						(t || !n) && Z.dequeue(this, e)
					})
				},
				finish: function(e) {
					return e !== !1 && (e = e || "fx"), this.each(function() {
						var t, n = vt.get(this),
							r = n[e + "queue"],
							o = n[e + "queueHooks"],
							i = Z.timers,
							a = r ? r.length : 0;
						for (n.finish = !0, Z.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = i.length; t--;) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
						for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
						delete n.finish
					})
				}
			}), Z.each(["toggle", "show", "hide"], function(e, t) {
				var n = Z.fn[t];
				Z.fn[t] = function(e, r, o) {
					return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(N(t, !0), e, r, o)
				}
			}), Z.each({
				slideDown: N("show"),
				slideUp: N("hide"),
				slideToggle: N("toggle"),
				fadeIn: {
					opacity: "show"
				},
				fadeOut: {
					opacity: "hide"
				},
				fadeToggle: {
					opacity: "toggle"
				}
			}, function(e, t) {
				Z.fn[e] = function(e, n, r) {
					return this.animate(t, e, n, r)
				}
			}), Z.timers = [], Z.fx.tick = function() {
				var e, t = 0,
					n = Z.timers;
				for (Jt = Z.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
				n.length || Z.fx.stop(), Jt = void 0
			}, Z.fx.timer = function(e) {
				Z.timers.push(e), e() ? Z.fx.start() : Z.timers.pop()
			}, Z.fx.interval = 13, Z.fx.start = function() {
				Gt || (Gt = setInterval(Z.fx.tick, Z.fx.interval))
			}, Z.fx.stop = function() {
				clearInterval(Gt), Gt = null
			}, Z.fx.speeds = {
				slow: 600,
				fast: 200,
				_default: 400
			}, Z.fn.delay = function(e, t) {
				return e = Z.fx ? Z.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
					var r = setTimeout(t, e);
					n.stop = function() {
						clearTimeout(r)
					}
				})
			},
			function() {
				var e = G.createElement("input"),
					t = G.createElement("select"),
					n = t.appendChild(G.createElement("option"));
				e.type = "checkbox", J.checkOn = "" !== e.value, J.optSelected = n.selected, t.disabled = !0, J.optDisabled = !n.disabled, e = G.createElement("input"), e.value = "t", e.type = "radio", J.radioValue = "t" === e.value
			}();
		var rn, on, an = Z.expr.attrHandle;
		Z.fn.extend({
			attr: function(e, t) {
				return gt(this, Z.attr, e, t, arguments.length > 1)
			},
			removeAttr: function(e) {
				return this.each(function() {
					Z.removeAttr(this, e)
				})
			}
		}), Z.extend({
			attr: function(e, t, n) {
				var r, o, i = e.nodeType;
				if (e && 3 !== i && 8 !== i && 2 !== i) return typeof e.getAttribute === kt ? Z.prop(e, t, n) : (1 === i && Z.isXMLDoc(e) || (t = t.toLowerCase(), r = Z.attrHooks[t] || (Z.expr.match.bool.test(t) ? on : rn)), void 0 === n ? r && "get" in r && null !== (o = r.get(e, t)) ? o : (o = Z.find.attr(e, t), null == o ? void 0 : o) : null !== n ? r && "set" in r && void 0 !== (o = r.set(e, n, t)) ? o : (e.setAttribute(t, n + ""), n) : void Z.removeAttr(e, t))
			},
			removeAttr: function(e, t) {
				var n, r, o = 0,
					i = t && t.match(pt);
				if (i && 1 === e.nodeType)
					for (; n = i[o++];) r = Z.propFix[n] || n, Z.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
			},
			attrHooks: {
				type: {
					set: function(e, t) {
						if (!J.radioValue && "radio" === t && Z.nodeName(e, "input")) {
							var n = e.value;
							return e.setAttribute("type", t), n && (e.value = n), t
						}
					}
				}
			}
		}), on = {
			set: function(e, t, n) {
				return t === !1 ? Z.removeAttr(e, n) : e.setAttribute(n, n), n
			}
		}, Z.each(Z.expr.match.bool.source.match(/\w+/g), function(e, t) {
			var n = an[t] || Z.find.attr;
			an[t] = function(e, t, r) {
				var o, i;
				return r || (i = an[t], an[t] = o, o = null != n(e, t, r) ? t.toLowerCase() : null, an[t] = i), o
			}
		});
		var sn = /^(?:input|select|textarea|button)$/i;
		Z.fn.extend({
			prop: function(e, t) {
				return gt(this, Z.prop, e, t, arguments.length > 1)
			},
			removeProp: function(e) {
				return this.each(function() {
					delete this[Z.propFix[e] || e]
				})
			}
		}), Z.extend({
			propFix: {
				"for": "htmlFor",
				"class": "className"
			},
			prop: function(e, t, n) {
				var r, o, i, a = e.nodeType;
				if (e && 3 !== a && 8 !== a && 2 !== a) return i = 1 !== a || !Z.isXMLDoc(e), i && (t = Z.propFix[t] || t, o = Z.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get" in o && null !== (r = o.get(e, t)) ? r : e[t]
			},
			propHooks: {
				tabIndex: {
					get: function(e) {
						return e.hasAttribute("tabindex") || sn.test(e.nodeName) || e.href ? e.tabIndex : -1
					}
				}
			}
		}), J.optSelected || (Z.propHooks.selected = {
			get: function(e) {
				var t = e.parentNode;
				return t && t.parentNode && t.parentNode.selectedIndex, null
			}
		}), Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
			Z.propFix[this.toLowerCase()] = this
		});
		var un = /[\t\r\n\f]/g;
		Z.fn.extend({
			addClass: function(e) {
				var t, n, r, o, i, a, s = "string" == typeof e && e,
					u = 0,
					l = this.length;
				if (Z.isFunction(e)) return this.each(function(t) {
					Z(this).addClass(e.call(this, t, this.className))
				});
				if (s)
					for (t = (e || "").match(pt) || []; l > u; u++)
						if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(un, " ") : " ")) {
							for (i = 0; o = t[i++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
							a = Z.trim(r), n.className !== a && (n.className = a)
						}
				return this
			},
			removeClass: function(e) {
				var t, n, r, o, i, a, s = 0 === arguments.length || "string" == typeof e && e,
					u = 0,
					l = this.length;
				if (Z.isFunction(e)) return this.each(function(t) {
					Z(this).removeClass(e.call(this, t, this.className))
				});
				if (s)
					for (t = (e || "").match(pt) || []; l > u; u++)
						if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(un, " ") : "")) {
							for (i = 0; o = t[i++];)
								for (; r.indexOf(" " + o + " ") >= 0;) r = r.replace(" " + o + " ", " ");
							a = e ? Z.trim(r) : "", n.className !== a && (n.className = a)
						}
				return this
			},
			toggleClass: function(e, t) {
				var n = typeof e;
				return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(Z.isFunction(e) ? function(n) {
					Z(this).toggleClass(e.call(this, n, this.className, t), t)
				} : function() {
					if ("string" === n)
						for (var t, r = 0, o = Z(this), i = e.match(pt) || []; t = i[r++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
					else(n === kt || "boolean" === n) && (this.className && vt.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : vt.get(this, "__className__") || "")
				})
			},
			hasClass: function(e) {
				for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
					if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(un, " ").indexOf(t) >= 0) return !0;
				return !1
			}
		});
		var ln = /\r/g;
		Z.fn.extend({
			val: function(e) {
				var t, n, r, o = this[0]; {
					if (arguments.length) return r = Z.isFunction(e), this.each(function(n) {
						var o;
						1 === this.nodeType && (o = r ? e.call(this, n, Z(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : Z.isArray(o) && (o = Z.map(o, function(e) {
							return null == e ? "" : e + ""
						})), t = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
					});
					if (o) return t = Z.valHooks[o.type] || Z.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(ln, "") : null == n ? "" : n)
				}
			}
		}), Z.extend({
			valHooks: {
				option: {
					get: function(e) {
						var t = Z.find.attr(e, "value");
						return null != t ? t : Z.trim(Z.text(e))
					}
				},
				select: {
					get: function(e) {
						for (var t, n, r = e.options, o = e.selectedIndex, i = "select-one" === e.type || 0 > o, a = i ? null : [], s = i ? o + 1 : r.length, u = 0 > o ? s : i ? o : 0; s > u; u++)
							if (n = r[u], !(!n.selected && u !== o || (J.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && Z.nodeName(n.parentNode, "optgroup"))) {
								if (t = Z(n).val(), i) return t;
								a.push(t)
							}
						return a
					},
					set: function(e, t) {
						for (var n, r, o = e.options, i = Z.makeArray(t), a = o.length; a--;) r = o[a], (r.selected = Z.inArray(r.value, i) >= 0) && (n = !0);
						return n || (e.selectedIndex = -1), i
					}
				}
			}
		}), Z.each(["radio", "checkbox"], function() {
			Z.valHooks[this] = {
				set: function(e, t) {
					return Z.isArray(t) ? e.checked = Z.inArray(Z(e).val(), t) >= 0 : void 0
				}
			}, J.checkOn || (Z.valHooks[this].get = function(e) {
				return null === e.getAttribute("value") ? "on" : e.value
			})
		}), Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
			Z.fn[t] = function(e, n) {
				return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
			}
		}), Z.fn.extend({
			hover: function(e, t) {
				return this.mouseenter(e).mouseleave(t || e)
			},
			bind: function(e, t, n) {
				return this.on(e, null, t, n)
			},
			unbind: function(e, t) {
				return this.off(e, null, t)
			},
			delegate: function(e, t, n, r) {
				return this.on(t, e, n, r)
			},
			undelegate: function(e, t, n) {
				return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
			}
		});
		var cn = Z.now(),
			fn = /\?/;
		Z.parseJSON = function(e) {
			return JSON.parse(e + "")
		}, Z.parseXML = function(e) {
			var t, n;
			if (!e || "string" != typeof e) return null;
			try {
				n = new DOMParser, t = n.parseFromString(e, "text/xml")
			} catch (r) {
				t = void 0
			}
			return (!t || t.getElementsByTagName("parsererror").length) && Z.error("Invalid XML: " + e), t
		};
		var dn = /#.*$/,
			pn = /([?&])_=[^&]*/,
			hn = /^(.*?):[ \t]*([^\r\n]*)$/gm,
			mn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
			gn = /^(?:GET|HEAD)$/,
			vn = /^\/\//,
			yn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
			bn = {},
			_n = {},
			xn = "*/".concat("*"),
			wn = e.location.href,
			Tn = yn.exec(wn.toLowerCase()) || [];
		Z.extend({
			active: 0,
			lastModified: {},
			etag: {},
			ajaxSettings: {
				url: wn,
				type: "GET",
				isLocal: mn.test(Tn[1]),
				global: !0,
				processData: !0,
				async: !0,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				accepts: {
					"*": xn,
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
				converters: {
					"* text": String,
					"text html": !0,
					"text json": Z.parseJSON,
					"text xml": Z.parseXML
				},
				flatOptions: {
					url: !0,
					context: !0
				}
			},
			ajaxSetup: function(e, t) {
				return t ? F(F(e, Z.ajaxSettings), t) : F(Z.ajaxSettings, e)
			},
			ajaxPrefilter: O(bn),
			ajaxTransport: O(_n),
			ajax: function(e, t) {
				function n(e, t, n, a) {
					var u, c, v, y, _, w = t;
					2 !== b && (b = 2, s && clearTimeout(s), r = void 0, i = a || "", x.readyState = e > 0 ? 4 : 0, u = e >= 200 && 300 > e || 304 === e, n && (y = H(f, x, n)), y = P(f, y, x, u), u ? (f.ifModified && (_ = x.getResponseHeader("Last-Modified"), _ && (Z.lastModified[o] = _), _ = x.getResponseHeader("etag"), _ && (Z.etag[o] = _)), 204 === e || "HEAD" === f.type ? w = "nocontent" : 304 === e ? w = "notmodified" : (w = y.state, c = y.data, v = y.error, u = !v)) : (v = w, (e || !w) && (w = "error", 0 > e && (e = 0))), x.status = e, x.statusText = (t || w) + "", u ? h.resolveWith(d, [c, w, x]) : h.rejectWith(d, [x, w, v]), x.statusCode(g), g = void 0, l && p.trigger(u ? "ajaxSuccess" : "ajaxError", [x, f, u ? c : v]), m.fireWith(d, [x, w]), l && (p.trigger("ajaxComplete", [x, f]), --Z.active || Z.event.trigger("ajaxStop")))
				}
				"object" == typeof e && (t = e, e = void 0), t = t || {};
				var r, o, i, a, s, u, l, c, f = Z.ajaxSetup({}, t),
					d = f.context || f,
					p = f.context && (d.nodeType || d.jquery) ? Z(d) : Z.event,
					h = Z.Deferred(),
					m = Z.Callbacks("once memory"),
					g = f.statusCode || {},
					v = {},
					y = {},
					b = 0,
					_ = "canceled",
					x = {
						readyState: 0,
						getResponseHeader: function(e) {
							var t;
							if (2 === b) {
								if (!a)
									for (a = {}; t = hn.exec(i);) a[t[1].toLowerCase()] = t[2];
								t = a[e.toLowerCase()]
							}
							return null == t ? null : t
						},
						getAllResponseHeaders: function() {
							return 2 === b ? i : null
						},
						setRequestHeader: function(e, t) {
							var n = e.toLowerCase();
							return b || (e = y[n] = y[n] || e, v[e] = t), this
						},
						overrideMimeType: function(e) {
							return b || (f.mimeType = e), this
						},
						statusCode: function(e) {
							var t;
							if (e)
								if (2 > b)
									for (t in e) g[t] = [g[t], e[t]];
								else x.always(e[x.status]);
							return this
						},
						abort: function(e) {
							var t = e || _;
							return r && r.abort(t), n(0, t), this
						}
					};
				if (h.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, f.url = ((e || f.url || wn) + "").replace(dn, "").replace(vn, Tn[1] + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = Z.trim(f.dataType || "*").toLowerCase().match(pt) || [""], null == f.crossDomain && (u = yn.exec(f.url.toLowerCase()), f.crossDomain = !(!u || u[1] === Tn[1] && u[2] === Tn[2] && (u[3] || ("http:" === u[1] ? "80" : "443")) === (Tn[3] || ("http:" === Tn[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = Z.param(f.data, f.traditional)), R(bn, f, t, x), 2 === b) return x;
				l = Z.event && f.global, l && 0 === Z.active++ && Z.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !gn.test(f.type), o = f.url, f.hasContent || (f.data && (o = f.url += (fn.test(o) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = pn.test(o) ? o.replace(pn, "$1_=" + cn++) : o + (fn.test(o) ? "&" : "?") + "_=" + cn++)), f.ifModified && (Z.lastModified[o] && x.setRequestHeader("If-Modified-Since", Z.lastModified[o]), Z.etag[o] && x.setRequestHeader("If-None-Match", Z.etag[o])), (f.data && f.hasContent && f.contentType !== !1 || t.contentType) && x.setRequestHeader("Content-Type", f.contentType), x.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + xn + "; q=0.01" : "") : f.accepts["*"]);
				for (c in f.headers) x.setRequestHeader(c, f.headers[c]);
				if (f.beforeSend && (f.beforeSend.call(d, x, f) === !1 || 2 === b)) return x.abort();
				_ = "abort";
				for (c in {
						success: 1,
						error: 1,
						complete: 1
					}) x[c](f[c]);
				if (r = R(_n, f, t, x)) {
					x.readyState = 1, l && p.trigger("ajaxSend", [x, f]), f.async && f.timeout > 0 && (s = setTimeout(function() {
						x.abort("timeout")
					}, f.timeout));
					try {
						b = 1, r.send(v, n)
					} catch (w) {
						if (!(2 > b)) throw w;
						n(-1, w)
					}
				} else n(-1, "No Transport");
				return x
			},
			getJSON: function(e, t, n) {
				return Z.get(e, t, n, "json")
			},
			getScript: function(e, t) {
				return Z.get(e, void 0, t, "script")
			}
		}), Z.each(["get", "post"], function(e, t) {
			Z[t] = function(e, n, r, o) {
				return Z.isFunction(n) && (o = o || r, r = n, n = void 0), Z.ajax({
					url: e,
					type: t,
					dataType: o,
					data: n,
					success: r
				})
			}
		}), Z._evalUrl = function(e) {
			return Z.ajax({
				url: e,
				type: "GET",
				dataType: "script",
				async: !1,
				global: !1,
				"throws": !0
			})
		}, Z.fn.extend({
			wrapAll: function(e) {
				var t;
				return Z.isFunction(e) ? this.each(function(t) {
					Z(this).wrapAll(e.call(this, t))
				}) : (this[0] && (t = Z(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
					for (var e = this; e.firstElementChild;) e = e.firstElementChild;
					return e
				}).append(this)), this)
			},
			wrapInner: function(e) {
				return this.each(Z.isFunction(e) ? function(t) {
					Z(this).wrapInner(e.call(this, t))
				} : function() {
					var t = Z(this),
						n = t.contents();
					n.length ? n.wrapAll(e) : t.append(e)
				})
			},
			wrap: function(e) {
				var t = Z.isFunction(e);
				return this.each(function(n) {
					Z(this).wrapAll(t ? e.call(this, n) : e)
				})
			},
			unwrap: function() {
				return this.parent().each(function() {
					Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
				}).end()
			}
		}), Z.expr.filters.hidden = function(e) {
			return e.offsetWidth <= 0 && e.offsetHeight <= 0
		}, Z.expr.filters.visible = function(e) {
			return !Z.expr.filters.hidden(e)
		};
		var Cn = /%20/g,
			kn = /\[\]$/,
			jn = /\r?\n/g,
			Sn = /^(?:submit|button|image|reset|file)$/i,
			En = /^(?:input|select|textarea|keygen)/i;
		Z.param = function(e, t) {
			var n, r = [],
				o = function(e, t) {
					t = Z.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
				};
			if (void 0 === t && (t = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(e) || e.jquery && !Z.isPlainObject(e)) Z.each(e, function() {
				o(this.name, this.value)
			});
			else
				for (n in e) I(n, e[n], t, o);
			return r.join("&").replace(Cn, "+")
		}, Z.fn.extend({
			serialize: function() {
				return Z.param(this.serializeArray())
			},
			serializeArray: function() {
				return this.map(function() {
					var e = Z.prop(this, "elements");
					return e ? Z.makeArray(e) : this
				}).filter(function() {
					var e = this.type;
					return this.name && !Z(this).is(":disabled") && En.test(this.nodeName) && !Sn.test(e) && (this.checked || !Ct.test(e))
				}).map(function(e, t) {
					var n = Z(this).val();
					return null == n ? null : Z.isArray(n) ? Z.map(n, function(e) {
						return {
							name: t.name,
							value: e.replace(jn, "\r\n")
						}
					}) : {
						name: t.name,
						value: n.replace(jn, "\r\n")
					}
				}).get()
			}
		}), Z.ajaxSettings.xhr = function() {
			try {
				return new XMLHttpRequest
			} catch (e) {}
		};
		var $n = 0,
			Nn = {},
			Dn = {
				0: 200,
				1223: 204
			},
			An = Z.ajaxSettings.xhr();
		e.attachEvent && e.attachEvent("onunload", function() {
			for (var e in Nn) Nn[e]()
		}), J.cors = !!An && "withCredentials" in An, J.ajax = An = !!An, Z.ajaxTransport(function(e) {
			var t;
			return J.cors || An && !e.crossDomain ? {
				send: function(n, r) {
					var o, i = e.xhr(),
						a = ++$n;
					if (i.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
						for (o in e.xhrFields) i[o] = e.xhrFields[o];
					e.mimeType && i.overrideMimeType && i.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
					for (o in n) i.setRequestHeader(o, n[o]);
					t = function(e) {
						return function() {
							t && (delete Nn[a], t = i.onload = i.onerror = null, "abort" === e ? i.abort() : "error" === e ? r(i.status, i.statusText) : r(Dn[i.status] || i.status, i.statusText, "string" == typeof i.responseText ? {
								text: i.responseText
							} : void 0, i.getAllResponseHeaders()))
						}
					}, i.onload = t(), i.onerror = t("error"), t = Nn[a] = t("abort");
					try {
						i.send(e.hasContent && e.data || null)
					} catch (s) {
						if (t) throw s
					}
				},
				abort: function() {
					t && t()
				}
			} : void 0
		}), Z.ajaxSetup({
			accepts: {
				script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
			},
			contents: {
				script: /(?:java|ecma)script/
			},
			converters: {
				"text script": function(e) {
					return Z.globalEval(e), e
				}
			}
		}), Z.ajaxPrefilter("script", function(e) {
			void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
		}), Z.ajaxTransport("script", function(e) {
			if (e.crossDomain) {
				var t, n;
				return {
					send: function(r, o) {
						t = Z("<script>").prop({
							async: !0,
							charset: e.scriptCharset,
							src: e.url
						}).on("load error", n = function(e) {
							t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
						}), G.head.appendChild(t[0])
					},
					abort: function() {
						n && n()
					}
				}
			}
		});
		var Ln = [],
			qn = /(=)\?(?=&|$)|\?\?/;
		Z.ajaxSetup({
			jsonp: "callback",
			jsonpCallback: function() {
				var e = Ln.pop() || Z.expando + "_" + cn++;
				return this[e] = !0, e
			}
		}), Z.ajaxPrefilter("json jsonp", function(t, n, r) {
			var o, i, a, s = t.jsonp !== !1 && (qn.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && qn.test(t.data) && "data");
			return s || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = Z.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(qn, "$1" + o) : t.jsonp !== !1 && (t.url += (fn.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
				return a || Z.error(o + " was not called"), a[0]
			}, t.dataTypes[0] = "json", i = e[o], e[o] = function() {
				a = arguments
			}, r.always(function() {
				e[o] = i, t[o] && (t.jsonpCallback = n.jsonpCallback, Ln.push(o)), a && Z.isFunction(i) && i(a[0]), a = i = void 0
			}), "script") : void 0
		}), Z.parseHTML = function(e, t, n) {
			if (!e || "string" != typeof e) return null;
			"boolean" == typeof t && (n = t, t = !1), t = t || G;
			var r = at.exec(e),
				o = !n && [];
			return r ? [t.createElement(r[1])] : (r = Z.buildFragment([e], t, o), o && o.length && Z(o).remove(), Z.merge([], r.childNodes))
		};
		var On = Z.fn.load;
		Z.fn.load = function(e, t, n) {
			if ("string" != typeof e && On) return On.apply(this, arguments);
			var r, o, i, a = this,
				s = e.indexOf(" ");
			return s >= 0 && (r = Z.trim(e.slice(s)), e = e.slice(0, s)), Z.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && Z.ajax({
				url: e,
				type: o,
				dataType: "html",
				data: t
			}).done(function(e) {
				i = arguments, a.html(r ? Z("<div>").append(Z.parseHTML(e)).find(r) : e)
			}).complete(n && function(e, t) {
				a.each(n, i || [e.responseText, t, e])
			}), this
		}, Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
			Z.fn[t] = function(e) {
				return this.on(t, e)
			}
		}), Z.expr.filters.animated = function(e) {
			return Z.grep(Z.timers, function(t) {
				return e === t.elem
			}).length
		};
		var Rn = e.document.documentElement;
		Z.offset = {
			setOffset: function(e, t, n) {
				var r, o, i, a, s, u, l, c = Z.css(e, "position"),
					f = Z(e),
					d = {};
				"static" === c && (e.style.position = "relative"), s = f.offset(), i = Z.css(e, "top"), u = Z.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (i + u).indexOf("auto") > -1, l ? (r = f.position(), a = r.top, o = r.left) : (a = parseFloat(i) || 0, o = parseFloat(u) || 0), Z.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + o), "using" in t ? t.using.call(e, d) : f.css(d)
			}
		}, Z.fn.extend({
			offset: function(e) {
				if (arguments.length) return void 0 === e ? this : this.each(function(t) {
					Z.offset.setOffset(this, e, t)
				});
				var t, n, r = this[0],
					o = {
						top: 0,
						left: 0
					},
					i = r && r.ownerDocument;
				if (i) return t = i.documentElement, Z.contains(t, r) ? (typeof r.getBoundingClientRect !== kt && (o = r.getBoundingClientRect()), n = M(i), {
					top: o.top + n.pageYOffset - t.clientTop,
					left: o.left + n.pageXOffset - t.clientLeft
				}) : o
			},
			position: function() {
				if (this[0]) {
					var e, t, n = this[0],
						r = {
							top: 0,
							left: 0
						};
					return "fixed" === Z.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), Z.nodeName(e[0], "html") || (r = e.offset()), r.top += Z.css(e[0], "borderTopWidth", !0), r.left += Z.css(e[0], "borderLeftWidth", !0)), {
						top: t.top - r.top - Z.css(n, "marginTop", !0),
						left: t.left - r.left - Z.css(n, "marginLeft", !0)
					}
				}
			},
			offsetParent: function() {
				return this.map(function() {
					for (var e = this.offsetParent || Rn; e && !Z.nodeName(e, "html") && "static" === Z.css(e, "position");) e = e.offsetParent;
					return e || Rn
				})
			}
		}), Z.each({
			scrollLeft: "pageXOffset",
			scrollTop: "pageYOffset"
		}, function(t, n) {
			var r = "pageYOffset" === n;
			Z.fn[t] = function(o) {
				return gt(this, function(t, o, i) {
					var a = M(t);
					return void 0 === i ? a ? a[n] : t[o] : void(a ? a.scrollTo(r ? e.pageXOffset : i, r ? i : e.pageYOffset) : t[o] = i)
				}, t, o, arguments.length, null)
			}
		}), Z.each(["top", "left"], function(e, t) {
			Z.cssHooks[t] = w(J.pixelPosition, function(e, n) {
				return n ? (n = x(e, t), Bt.test(n) ? Z(e).position()[t] + "px" : n) : void 0
			})
		}), Z.each({
			Height: "height",
			Width: "width"
		}, function(e, t) {
			Z.each({
				padding: "inner" + e,
				content: t,
				"": "outer" + e
			}, function(n, r) {
				Z.fn[r] = function(r, o) {
					var i = arguments.length && (n || "boolean" != typeof r),
						a = n || (r === !0 || o === !0 ? "margin" : "border");
					return gt(this, function(t, n, r) {
						var o;
						return Z.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? Z.css(t, n, a) : Z.style(t, n, r, a)
					}, t, i ? r : void 0, i, null)
				}
			})
		}), Z.fn.size = function() {
			return this.length
		}, Z.fn.andSelf = Z.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
			return Z
		});
		var Fn = e.jQuery,
			Hn = e.$;
		return Z.noConflict = function(t) {
			return e.$ === Z && (e.$ = Hn), t && e.jQuery === Z && (e.jQuery = Fn), Z
		}, typeof t === kt && (e.jQuery = e.$ = Z), Z
	}), function(e, t) {
		e.rails !== t && e.error("jquery-ujs has already been loaded!");
		var n, r = e(document);
		e.rails = n = {
			linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]",
			buttonClickSelector: "button[data-remote]:not(form button), button[data-confirm]:not(form button)",
			inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
			formSubmitSelector: "form",
			formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
			disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
			enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
			requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
			fileInputSelector: "input[type=file]",
			linkDisableSelector: "a[data-disable-with], a[data-disable]",
			buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
			CSRFProtection: function(t) {
				var n = e('meta[name="csrf-token"]').attr("content");
				n && t.setRequestHeader("X-CSRF-Token", n)
			},
			refreshCSRFTokens: function() {
				var t = e("meta[name=csrf-token]").attr("content"),
					n = e("meta[name=csrf-param]").attr("content");
				e('form input[name="' + n + '"]').val(t)
			},
			fire: function(t, n, r) {
				var o = e.Event(n);
				return t.trigger(o, r), o.result !== !1
			},
			confirm: function(e) {
				return confirm(e)
			},
			ajax: function(t) {
				return e.ajax(t)
			},
			href: function(e) {
				return e[0].href
			},
			handleRemote: function(r) {
				var o, i, a, s, u, l;
				if (n.fire(r, "ajax:before")) {
					if (s = r.data("with-credentials") || null, u = r.data("type") || e.ajaxSettings && e.ajaxSettings.dataType, r.is("form")) {
						o = r.attr("method"), i = r.attr("action"), a = r.serializeArray();
						var c = r.data("ujs:submit-button");
						c && (a.push(c), r.data("ujs:submit-button", null))
					} else r.is(n.inputChangeSelector) ? (o = r.data("method"), i = r.data("url"), a = r.serialize(), r.data("params") && (a = a + "&" + r.data("params"))) : r.is(n.buttonClickSelector) ? (o = r.data("method") || "get", i = r.data("url"), a = r.serialize(), r.data("params") && (a = a + "&" + r.data("params"))) : (o = r.data("method"), i = n.href(r), a = r.data("params") || null);
					return l = {
						type: o || "GET",
						data: a,
						dataType: u,
						beforeSend: function(e, o) {
							return o.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + o.accepts.script), n.fire(r, "ajax:beforeSend", [e, o]) ? void r.trigger("ajax:send", e) : !1
						},
						success: function(e, t, n) {
							r.trigger("ajax:success", [e, t, n])
						},
						complete: function(e, t) {
							r.trigger("ajax:complete", [e, t])
						},
						error: function(e, t, n) {
							r.trigger("ajax:error", [e, t, n])
						},
						crossDomain: n.isCrossDomain(i)
					}, s && (l.xhrFields = {
						withCredentials: s
					}), i && (l.url = i), n.ajax(l)
				}
				return !1
			},
			isCrossDomain: function(e) {
				var t = document.createElement("a");
				t.href = location.href;
				var n = document.createElement("a");
				try {
					return n.href = e, n.href = n.href, !n.protocol || !n.host || t.protocol + "//" + t.host != n.protocol + "//" + n.host
				} catch (r) {
					return !0
				}
			},
			handleMethod: function(r) {
				var o = n.href(r),
					i = r.data("method"),
					a = r.attr("target"),
					s = e("meta[name=csrf-token]").attr("content"),
					u = e("meta[name=csrf-param]").attr("content"),
					l = e('<form method="post" action="' + o + '"></form>'),
					c = '<input name="_method" value="' + i + '" type="hidden" />';
				u === t || s === t || n.isCrossDomain(o) || (c += '<input name="' + u + '" value="' + s + '" type="hidden" />'), a && l.attr("target", a), l.hide().append(c).appendTo("body"), l.submit()
			},
			formElements: function(t, n) {
				return t.is("form") ? e(t[0].elements).filter(n) : t.find(n)
			},
			disableFormElements: function(t) {
				n.formElements(t, n.disableSelector).each(function() {
					n.disableFormElement(e(this))
				})
			},
			disableFormElement: function(e) {
				var n, r;
				n = e.is("button") ? "html" : "val", r = e.data("disable-with"), e.data("ujs:enable-with", e[n]()), r !== t && e[n](r), e.prop("disabled", !0)
			},
			enableFormElements: function(t) {
				n.formElements(t, n.enableSelector).each(function() {
					n.enableFormElement(e(this))
				})
			},
			enableFormElement: function(e) {
				var t = e.is("button") ? "html" : "val";
				e.data("ujs:enable-with") && e[t](e.data("ujs:enable-with")), e.prop("disabled", !1)
			},
			allowAction: function(e) {
				var t, r = e.data("confirm"),
					o = !1;
				return r ? (n.fire(e, "confirm") && (o = n.confirm(r), t = n.fire(e, "confirm:complete", [o])), o && t) : !0
			},
			blankInputs: function(t, n, r) {
				var o, i, a = e(),
					s = n || "input,textarea",
					u = t.find(s);
				return u.each(function() {
					if (o = e(this), i = o.is("input[type=checkbox],input[type=radio]") ? o.is(":checked") : o.val(), !i == !r) {
						if (o.is("input[type=radio]") && u.filter('input[type=radio]:checked[name="' + o.attr("name") + '"]').length) return !0;
						a = a.add(o)
					}
				}), a.length ? a : !1
			},
			nonBlankInputs: function(e, t) {
				return n.blankInputs(e, t, !0)
			},
			stopEverything: function(t) {
				return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
			},
			disableElement: function(e) {
				var r = e.data("disable-with");
				e.data("ujs:enable-with", e.html()), r !== t && e.html(r), e.bind("click.railsDisable", function(e) {
					return n.stopEverything(e)
				})
			},
			enableElement: function(e) {
				e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.unbind("click.railsDisable")
			}
		}, n.fire(r, "rails:attachBindings") && (e.ajaxPrefilter(function(e, t, r) {
			e.crossDomain || n.CSRFProtection(r)
		}), r.delegate(n.linkDisableSelector, "ajax:complete", function() {
			n.enableElement(e(this))
		}), r.delegate(n.buttonDisableSelector, "ajax:complete", function() {
			n.enableFormElement(e(this))
		}), r.delegate(n.linkClickSelector, "click.rails", function(r) {
			var o = e(this),
				i = o.data("method"),
				a = o.data("params"),
				s = r.metaKey || r.ctrlKey;
			if (!n.allowAction(o)) return n.stopEverything(r);
			if (!s && o.is(n.linkDisableSelector) && n.disableElement(o), o.data("remote") !== t) {
				if (s && (!i || "GET" === i) && !a) return !0;
				var u = n.handleRemote(o);
				return u === !1 ? n.enableElement(o) : u.error(function() {
					n.enableElement(o)
				}), !1
			}
			return o.data("method") ? (n.handleMethod(o), !1) : void 0
		}), r.delegate(n.buttonClickSelector, "click.rails", function(t) {
			var r = e(this);
			if (!n.allowAction(r)) return n.stopEverything(t);
			r.is(n.buttonDisableSelector) && n.disableFormElement(r);
			var o = n.handleRemote(r);
			return o === !1 ? n.enableFormElement(r) : o.error(function() {
				n.enableFormElement(r)
			}), !1
		}), r.delegate(n.inputChangeSelector, "change.rails", function(t) {
			var r = e(this);
			return n.allowAction(r) ? (n.handleRemote(r), !1) : n.stopEverything(t)
		}), r.delegate(n.formSubmitSelector, "submit.rails", function(r) {
			var o, i, a = e(this),
				s = a.data("remote") !== t;
			if (!n.allowAction(a)) return n.stopEverything(r);
			if (a.attr("novalidate") == t && (o = n.blankInputs(a, n.requiredInputSelector), o && n.fire(a, "ajax:aborted:required", [o]))) return n.stopEverything(r);
			if (s) {
				if (i = n.nonBlankInputs(a, n.fileInputSelector)) {
					setTimeout(function() {
						n.disableFormElements(a)
					}, 13);
					var u = n.fire(a, "ajax:aborted:file", [i]);
					return u || setTimeout(function() {
						n.enableFormElements(a)
					}, 13), u
				}
				return n.handleRemote(a), !1
			}
			setTimeout(function() {
				n.disableFormElements(a)
			}, 13)
		}), r.delegate(n.formInputClickSelector, "click.rails", function(t) {
			var r = e(this);
			if (!n.allowAction(r)) return n.stopEverything(t);
			var o = r.attr("name"),
				i = o ? {
					name: o,
					value: r.val()
				} : null;
			r.closest("form").data("ujs:submit-button", i)
		}), r.delegate(n.formSubmitSelector, "ajax:send.rails", function(t) {
			this == t.target && n.disableFormElements(e(this))
		}), r.delegate(n.formSubmitSelector, "ajax:complete.rails", function(t) {
			this == t.target && n.enableFormElements(e(this))
		}), e(function() {
			n.refreshCSRFTokens()
		}))
	}(jQuery), jQuery(function() {
		window.particlesJS && particlesJS("particles-js", {
			particles: {
				color: "#f5f5f5",
				shape: "circle",
				opacity: 1,
				size: 1,
				size_random: !0,
				nb: 200,
				line_linked: {
					enable_auto: !0,
					distance: 100,
					color: "#f5f5f5",
					opacity: .5,
					width: 1,
					condensed_mode: {
						enable: !1,
						rotateX: 600,
						rotateY: 600
					}
				},
				anim: {
					enable: !0,
					speed: 2.5
				}
			},
			interactivity: {
				enable: !0,
				mouse: {
					distance: 250
				},
				detect_on: "canvas",
				mode: "grab",
				line_linked: {
					opacity: .35
				},
				events: {
					onclick: {
						enable: !0,
						mode: "push",
						nb: 3
					}
				}
			},
			retina_detect: !0
		})
	}), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(e) {
	var t = e.fn.jquery.split(" ")[0].split(".");
	if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), + function(e) {
	"use strict";

	function t(t) {
		return this.each(function() {
			var r = e(this),
				o = r.data("bs.button"),
				i = "object" == typeof t && t;
			o || r.data("bs.button", o = new n(this, i)), "toggle" == t ? o.toggle() : t && o.setState(t)
		})
	}
	var n = function(t, r) {
		this.$element = e(t), this.options = e.extend({}, n.DEFAULTS, r), this.isLoading = !1
	};
	n.VERSION = "3.3.1", n.DEFAULTS = {
		loadingText: "loading..."
	}, n.prototype.setState = function(t) {
		var n = "disabled",
			r = this.$element,
			o = r.is("input") ? "val" : "html",
			i = r.data();
		t += "Text", null == i.resetText && r.data("resetText", r[o]()), setTimeout(e.proxy(function() {
			r[o](null == i[t] ? this.options[t] : i[t]), "loadingText" == t ? (this.isLoading = !0, r.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, r.removeClass(n).removeAttr(n))
		}, this), 0)
	}, n.prototype.toggle = function() {
		var e = !0,
			t = this.$element.closest('[data-toggle="buttons"]');
		if (t.length) {
			var n = this.$element.find("input");
			"radio" == n.prop("type") && (n.prop("checked") && this.$element.hasClass("active") ? e = !1 : t.find(".active").removeClass("active")), e && n.prop("checked", !this.$element.hasClass("active")).trigger("change")
		} else this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
		e && this.$element.toggleClass("active")
	};
	var r = e.fn.button;
	e.fn.button = t, e.fn.button.Constructor = n, e.fn.button.noConflict = function() {
		return e.fn.button = r, this
	}, e(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
		var r = e(n.target);
		r.hasClass("btn") || (r = r.closest(".btn")), t.call(r, "toggle"), n.preventDefault()
	}).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(t) {
		e(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
	})
}(jQuery),
function() {
	var e, t, n, r, o, i, a = {}.hasOwnProperty;
	i = "undefined" != typeof exports && null !== exports ? exports : this, t = function(e) {
		this.message = e
	}, t.prototype = new Error, o = {
		prefix: "",
		default_url_options: {}
	}, e = {
		GROUP: 1,
		CAT: 2,
		SYMBOL: 3,
		OR: 4,
		STAR: 5,
		LITERAL: 6,
		SLASH: 7,
		DOT: 8
	}, n = {
		serialize: function(e, t) {
			var n, r, o, s, u, l, c, f;
			if (null == t && (t = null), !e) return "";
			if (!t && "object" !== this.get_object_type(e)) throw new Error("Url parameters should be a javascript hash");
			if (i.jQuery) return u = i.jQuery.param(e), u ? u : "";
			switch (l = [], this.get_object_type(e)) {
				case "array":
					for (r = c = 0, f = e.length; f > c; r = ++c) n = e[r], l.push(this.serialize(n, t + "[]"));
					break;
				case "object":
					for (o in e) a.call(e, o) && (s = e[o], null != s && (null != t && (o = "" + t + "[" + o + "]"), l.push(this.serialize(s, o))));
					break;
				default:
					e && l.push("" + encodeURIComponent(t.toString()) + "=" + encodeURIComponent(e.toString()))
			}
			return l.length ? l.join("&") : ""
		},
		clean_path: function(e) {
			var t;
			return e = e.split("://"), t = e.length - 1, e[t] = e[t].replace(/\/+/g, "/"), e.join("://")
		},
		set_default_url_options: function(e, t) {
			var n, r, i, a, s;
			for (s = [], n = i = 0, a = e.length; a > i; n = ++i) r = e[n], !t.hasOwnProperty(r) && o.default_url_options.hasOwnProperty(r) && s.push(t[r] = o.default_url_options[r]);
			return s
		},
		extract_anchor: function(e) {
			var t;
			return t = "", e.hasOwnProperty("anchor") && (t = "#" + e.anchor, delete e.anchor), t
		},
		extract_trailing_slash: function(e) {
			var t;
			return t = !1, o.default_url_options.hasOwnProperty("trailing_slash") && (t = o.default_url_options.trailing_slash), e.hasOwnProperty("trailing_slash") && (t = e.trailing_slash, delete e.trailing_slash), t
		},
		extract_options: function(e, t) {
			var n;
			return n = t[t.length - 1], t.length > e || null != n && "object" === this.get_object_type(n) && !this.look_like_serialized_model(n) ? t.pop() : {}
		},
		look_like_serialized_model: function(e) {
			return "id" in e || "to_param" in e
		},
		path_identifier: function(e) {
			var t;
			return 0 === e ? "0" : e ? (t = e, "object" === this.get_object_type(e) && (t = "to_param" in e ? e.to_param : "id" in e ? e.id : e, "function" === this.get_object_type(t) && (t = t.call(e))), t.toString()) : ""
		},
		clone: function(e) {
			var t, n, r;
			if (null == e || "object" !== this.get_object_type(e)) return e;
			n = e.constructor();
			for (r in e) a.call(e, r) && (t = e[r], n[r] = t);
			return n
		},
		prepare_parameters: function(e, t, n) {
			var r, o, i, a, s;
			for (o = this.clone(n) || {}, r = a = 0, s = e.length; s > a; r = ++a) i = e[r], r < t.length && (o[i] = t[r]);
			return o
		},
		build_path: function(e, t, r, o) {
			var i, a, s, u, l, c, f;
			if (o = Array.prototype.slice.call(o), a = this.extract_options(e.length, o), o.length > e.length) throw new Error("Too many parameters provided for path");
			return s = this.prepare_parameters(e, o, a), this.set_default_url_options(t, s), i = this.extract_anchor(s), l = this.extract_trailing_slash(s), u = "" + this.get_prefix() + this.visit(r, s), c = n.clean_path("" + u), l === !0 && (c = c.replace(/(.*?)[\/]?$/, "$1/")), (f = this.serialize(s)).length && (c += "?" + f), c += i
		},
		visit: function(n, r, o) {
			var i, a, s, u, l, c;
			switch (null == o && (o = !1), l = n[0], i = n[1], s = n[2], l) {
				case e.GROUP:
					return this.visit(i, r, !0);
				case e.STAR:
					return this.visit_globbing(i, r, !0);
				case e.LITERAL:
				case e.SLASH:
				case e.DOT:
					return i;
				case e.CAT:
					return a = this.visit(i, r, o), u = this.visit(s, r, o), !o || a && u ? "" + a + u : "";
				case e.SYMBOL:
					if (c = r[i], null != c) return delete r[i], this.path_identifier(c);
					if (o) return "";
					throw new t("Route parameter missing: " + i);
				default:
					throw new Error("Unknown Rails node type")
			}
		},
		build_path_spec: function(t, n) {
			var r, o, i;
			switch (null == n && (n = !1), i = t[0], r = t[1], o = t[2], i) {
				case e.GROUP:
					return "(" + this.build_path_spec(r) + ")";
				case e.CAT:
					return "" + this.build_path_spec(r) + this.build_path_spec(o);
				case e.STAR:
					return this.build_path_spec(r, !0);
				case e.SYMBOL:
					return n === !0 ? "" + ("*" === r[0] ? "" : "*") + r : ":" + r;
				case e.SLASH:
				case e.DOT:
				case e.LITERAL:
					return r;
				default:
					throw new Error("Unknown Rails node type")
			}
		},
		visit_globbing: function(e, t, n) {
			var r, o, i, a;
			return i = e[0], r = e[1], o = e[2], r.replace(/^\*/i, "") !== r && (e[1] = r = r.replace(/^\*/i, "")), a = t[r], null == a ? this.visit(e, t, n) : (t[r] = function() {
				switch (this.get_object_type(a)) {
					case "array":
						return a.join("/");
					default:
						return a
				}
			}.call(this), this.visit(e, t, n))
		},
		get_prefix: function() {
			var e;
			return e = o.prefix, "" !== e && (e = e.match("/$") ? e : "" + e + "/"), e
		},
		route: function(e, t, r) {
			var o;
			return o = function() {
				return n.build_path(e, t, r, arguments)
			}, o.required_params = e, o.toString = function() {
				return n.build_path_spec(r)
			}, o
		},
		_classToTypeCache: null,
		_classToType: function() {
			var e, t, n, r;
			if (null != this._classToTypeCache) return this._classToTypeCache;
			for (this._classToTypeCache = {}, r = "Boolean Number String Function Array Date RegExp Object Error".split(" "), t = 0, n = r.length; n > t; t++) e = r[t], this._classToTypeCache["[object " + e + "]"] = e.toLowerCase();
			return this._classToTypeCache
		},
		get_object_type: function(e) {
			return i.jQuery && null != i.jQuery.type ? i.jQuery.type(e) : null == e ? "" + e : "object" == typeof e || "function" == typeof e ? this._classToType()[Object.prototype.toString.call(e)] || "object" : typeof e
		}
	}, r = function() {
		var e;
		return e = function(t, n) {
			var r, o;
			return o = n ? n.split(".") : [], o.length ? (r = o.shift(), t[r] = t[r] || {}, e(t[r], o.join("."))) : void 0
		}, e(i, "Routes"), i.Routes = {
			accept_user_invitation_path: n.route([], ["format"], [2, [2, [2, [2, [2, [2, [7, "/", !1],
									[6, "users", !1]
								],
								[7, "/", !1]
							],
							[6, "invitation", !1]
						],
						[7, "/", !1]
					],
					[6, "accept", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			admin_app_path: n.route(["id"], ["format"], [2, [2, [2, [2, [2, [2, [7, "/", !1],
									[6, "admin", !1]
								],
								[7, "/", !1]
							],
							[6, "apps", !1]
						],
						[7, "/", !1]
					],
					[3, "id", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			admin_apps_path: n.route([], ["format"], [2, [2, [2, [2, [7, "/", !1],
							[6, "admin", !1]
						],
						[7, "/", !1]
					],
					[6, "apps", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			admin_dashboard_path: n.route([], ["format"], [2, [2, [2, [2, [7, "/", !1],
							[6, "admin", !1]
						],
						[7, "/", !1]
					],
					[6, "dashboard", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			admin_email_template_path: n.route(["id"], ["format"], [2, [2, [2, [2, [2, [2, [7, "/", !1],
									[6, "admin", !1]
								],
								[7, "/", !1]
							],
							[6, "email_templates", !1]
						],
						[7, "/", !1]
					],
					[3, "id", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			admin_email_templates_path: n.route([], ["format"], [2, [2, [2, [2, [7, "/", !1],
							[6, "admin", !1]
						],
						[7, "/", !1]
					],
					[6, "email_templates", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			admin_fragment_template_path: n.route(["id"], ["format"], [2, [2, [2, [2, [2, [2, [7, "/", !1],
									[6, "admin", !1]
								],
								[7, "/", !1]
							],
							[6, "fragment_templates", !1]
						],
						[7, "/", !1]
					],
					[3, "id", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			admin_fragment_templates_path: n.route([], ["format"], [2, [2, [2, [2, [7, "/", !1],
							[6, "admin", !1]
						],
						[7, "/", !1]
					],
					[6, "fragment_templates", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			admin_page_template_path: n.route(["id"], ["format"], [2, [2, [2, [2, [2, [2, [7, "/", !1],
									[6, "admin", !1]
								],
								[7, "/", !1]
							],
							[6, "page_templates", !1]
						],
						[7, "/", !1]
					],
					[3, "id", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			admin_page_templates_path: n.route([], ["format"], [2, [2, [2, [2, [7, "/", !1],
							[6, "admin", !1]
						],
						[7, "/", !1]
					],
					[6, "page_templates", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			admin_root_path: n.route([], ["format"], [2, [2, [7, "/", !1],
					[6, "admin", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			admin_sidekiq_web_path: n.route([], [], [2, [2, [2, [7, "/", !1],
						[6, "admin", !1]
					],
					[7, "/", !1]
				],
				[6, "sidekiq", !1]
			], arguments),
			admin_user_path: n.route(["id"], ["format"], [2, [2, [2, [2, [2, [2, [7, "/", !1],
									[6, "admin", !1]
								],
								[7, "/", !1]
							],
							[6, "users", !1]
						],
						[7, "/", !1]
					],
					[3, "id", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			admin_users_path: n.route([], ["format"], [2, [2, [2, [2, [7, "/", !1],
							[6, "admin", !1]
						],
						[7, "/", !1]
					],
					[6, "users", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			api_v1_user_path: n.route(["id"], ["format"], [2, [2, [2, [2, [2, [2, [2, [2, [7, "/", !1],
											[6, "api", !1]
										],
										[7, "/", !1]
									],
									[6, "v1", !1]
								],
								[7, "/", !1]
							],
							[6, "users", !1]
						],
						[7, "/", !1]
					],
					[3, "id", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			api_v1_users_path: n.route([], ["format"], [2, [2, [2, [2, [2, [2, [2, [2, [7, "/", !1],
											[6, "api", !1]
										],
										[7, "/", !1]
									],
									[6, "v1", !1]
								],
								[7, "/", !1]
							],
							[6, "users", !1]
						],
						[7, "/", !1]
					],
					[6, "show", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			api_v1_users_authentication_path: n.route(["id"], ["format"], [2, [2, [2, [2, [2, [2, [2, [2, [2, [2, [7, "/", !1],
													[6, "api", !1]
												],
												[7, "/", !1]
											],
											[6, "v1", !1]
										],
										[7, "/", !1]
									],
									[6, "users", !1]
								],
								[7, "/", !1]
							],
							[6, "authentications", !1]
						],
						[7, "/", !1]
					],
					[3, "id", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			api_v1_users_authentications_path: n.route([], ["format"], [2, [2, [2, [2, [2, [2, [2, [2, [7, "/", !1],
											[6, "api", !1]
										],
										[7, "/", !1]
									],
									[6, "v1", !1]
								],
								[7, "/", !1]
							],
							[6, "users", !1]
						],
						[7, "/", !1]
					],
					[6, "authentications", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			back_users_path: n.route([], ["format"], [2, [2, [2, [2, [7, "/", !1],
							[6, "users", !1]
						],
						[7, "/", !1]
					],
					[6, "back", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			bind_api_v1_users_authentications_path: n.route([], ["format"], [2, [2, [2, [2, [2, [2, [2, [2, [2, [2, [7, "/", !1],
													[6, "api", !1]
												],
												[7, "/", !1]
											],
											[6, "v1", !1]
										],
										[7, "/", !1]
									],
									[6, "users", !1]
								],
								[7, "/", !1]
							],
							[6, "authentications", !1]
						],
						[7, "/", !1]
					],
					[6, "bind", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			bind_status_api_v1_user_path: n.route(["id"], ["format"], [2, [2, [2, [2, [2, [2, [2, [2, [2, [2, [7, "/", !1],
													[6, "api", !1]
												],
												[7, "/", !1]
											],
											[6, "v1", !1]
										],
										[7, "/", !1]
									],
									[6, "users", !1]
								],
								[7, "/", !1]
							],
							[3, "id", !1]
						],
						[7, "/", !1]
					],
					[6, "bind_status", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			bind_status_user_path: n.route(["id"], ["format"], [2, [2, [2, [2, [2, [2, [7, "/", !1],
									[6, "users", !1]
								],
								[7, "/", !1]
							],
							[3, "id", !1]
						],
						[7, "/", !1]
					],
					[6, "bind_status", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			bind_users_authentications_path: n.route([], ["format"], [2, [2, [2, [2, [2, [2, [7, "/", !1],
									[6, "users", !1]
								],
								[7, "/", !1]
							],
							[6, "authentications", !1]
						],
						[7, "/", !1]
					],
					[6, "bind", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			cancel_user_registration_path: n.route([], ["format"], [2, [2, [2, [2, [7, "/", !1],
							[6, "users", !1]
						],
						[7, "/", !1]
					],
					[6, "cancel", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			destroy_user_session_path: n.route([], ["format"], [2, [2, [2, [2, [7, "/", !1],
							[6, "users", !1]
						],
						[7, "/", !1]
					],
					[6, "sign_out", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			edit_admin_app_path: n.route(["id"], ["format"], [2, [2, [2, [2, [2, [2, [2, [2, [7, "/", !1],
											[6, "admin", !1]
										],
										[7, "/", !1]
									],
									[6, "apps", !1]
								],
								[7, "/", !1]
							],
							[3, "id", !1]
						],
						[7, "/", !1]
					],
					[6, "edit", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			edit_admin_email_template_path: n.route(["id"], ["format"], [2, [2, [2, [2, [2, [2, [2, [2, [7, "/", !1],
											[6, "admin", !1]
										],
										[7, "/", !1]
									],
									[6, "email_templates", !1]
								],
								[7, "/", !1]
							],
							[3, "id", !1]
						],
						[7, "/", !1]
					],
					[6, "edit", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			edit_admin_fragment_template_path: n.route(["id"], ["format"], [2, [2, [2, [2, [2, [2, [2, [2, [7, "/", !1],
											[6, "admin", !1]
										],
										[7, "/", !1]
									],
									[6, "fragment_templates", !1]
								],
								[7, "/", !1]
							],
							[3, "id", !1]
						],
						[7, "/", !1]
					],
					[6, "edit", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			edit_admin_page_template_path: n.route(["id"], ["format"], [2, [2, [2, [2, [2, [2, [2, [2, [7, "/", !1],
											[6, "admin", !1]
										],
										[7, "/", !1]
									],
									[6, "page_templates", !1]
								],
								[7, "/", !1]
							],
							[3, "id", !1]
						],
						[7, "/", !1]
					],
					[6, "edit", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			edit_admin_user_path: n.route(["id"], ["format"], [2, [2, [2, [2, [2, [2, [2, [2, [7, "/", !1],
											[6, "admin", !1]
										],
										[7, "/", !1]
									],
									[6, "users", !1]
								],
								[7, "/", !1]
							],
							[3, "id", !1]
						],
						[7, "/", !1]
					],
					[6, "edit", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			edit_api_v1_user_path: n.route(["id"], ["format"], [2, [2, [2, [2, [2, [2, [2, [2, [2, [2, [7, "/", !1],
													[6, "api", !1]
												],
												[7, "/", !1]
											],
											[6, "v1", !1]
										],
										[7, "/", !1]
									],
									[6, "users", !1]
								],
								[7, "/", !1]
							],
							[3, "id", !1]
						],
						[7, "/", !1]
					],
					[6, "edit", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			edit_api_v1_users_authentication_path: n.route(["id"], ["format"], [2, [2, [2, [2, [2, [2, [2, [2, [2, [2, [2, [2, [7, "/", !1],
															[6, "api", !1]
														],
														[7, "/", !1]
													],
													[6, "v1", !1]
												],
												[7, "/", !1]
											],
											[6, "users", !1]
										],
										[7, "/", !1]
									],
									[6, "authentications", !1]
								],
								[7, "/", !1]
							],
							[3, "id", !1]
						],
						[7, "/", !1]
					],
					[6, "edit", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			edit_location_path: n.route(["id"], ["format"], [2, [2, [2, [2, [2, [2, [7, "/", !1],
									[6, "locations", !1]
								],
								[7, "/", !1]
							],
							[3, "id", !1]
						],
						[7, "/", !1]
					],
					[6, "edit", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			edit_short_url_path: n.route(["id"], ["format"], [2, [2, [2, [2, [2, [2, [7, "/", !1],
									[6, "s", !1]
								],
								[7, "/", !1]
							],
							[3, "id", !1]
						],
						[7, "/", !1]
					],
					[6, "edit", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			edit_user_path: n.route(["id"], ["format"], [2, [2, [2, [2, [2, [2, [7, "/", !1],
									[6, "users", !1]
								],
								[7, "/", !1]
							],
							[3, "id", !1]
						],
						[7, "/", !1]
					],
					[6, "edit", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			edit_user_password_path: n.route([], ["format"], [2, [2, [2, [2, [2, [2, [7, "/", !1],
									[6, "users", !1]
								],
								[7, "/", !1]
							],
							[6, "password", !1]
						],
						[7, "/", !1]
					],
					[6, "edit", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			edit_user_registration_path: n.route([], ["format"], [2, [2, [2, [2, [7, "/", !1],
							[6, "users", !1]
						],
						[7, "/", !1]
					],
					[6, "edit", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			edit_users_authentication_path: n.route(["id"], ["format"], [2, [2, [2, [2, [2, [2, [2, [2, [7, "/", !1],
											[6, "users", !1]
										],
										[7, "/", !1]
									],
									[6, "authentications", !1]
								],
								[7, "/", !1]
							],
							[3, "id", !1]
						],
						[7, "/", !1]
					],
					[6, "edit", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			edit_wechat_message_path: n.route(["id"], ["format"], [2, [2, [2, [2, [2, [2, [2, [2, [7, "/", !1],
											[6, "wechat", !1]
										],
										[7, "/", !1]
									],
									[6, "messages", !1]
								],
								[7, "/", !1]
							],
							[3, "id", !1]
						],
						[7, "/", !1]
					],
					[6, "edit", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			exists_users_authentications_path: n.route([], ["format"], [2, [2, [2, [2, [2, [2, [7, "/", !1],
									[6, "users", !1]
								],
								[7, "/", !1]
							],
							[6, "authentications", !1]
						],
						[7, "/", !1]
					],
					[6, "exists", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			find_by_access_token_api_v1_users_path: n.route([], ["format"], [2, [2, [2, [2, [2, [2, [2, [2, [7, "/", !1],
											[6, "api", !1]
										],
										[7, "/", !1]
									],
									[6, "v1", !1]
								],
								[7, "/", !1]
							],
							[6, "users", !1]
						],
						[7, "/", !1]
					],
					[6, "find_by_access_token", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			find_by_authentication_api_v1_users_path: n.route([], ["format"], [2, [2, [2, [2, [2, [2, [2, [2, [7, "/", !1],
											[6, "api", !1]
										],
										[7, "/", !1]
									],
									[6, "v1", !1]
								],
								[7, "/", !1]
							],
							[6, "users", !1]
						],
						[7, "/", !1]
					],
					[6, "find_by_authentication", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			invite_api_v1_users_path: n.route([], ["format"], [2, [2, [2, [2, [2, [2, [2, [2, [7, "/", !1],
											[6, "api", !1]
										],
										[7, "/", !1]
									],
									[6, "v1", !1]
								],
								[7, "/", !1]
							],
							[6, "users", !1]
						],
						[7, "/", !1]
					],
					[6, "invite", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			list_api_v1_users_path: n.route([], ["format"], [2, [2, [2, [2, [2, [2, [2, [2, [7, "/", !1],
											[6, "api", !1]
										],
										[7, "/", !1]
									],
									[6, "v1", !1]
								],
								[7, "/", !1]
							],
							[6, "users", !1]
						],
						[7, "/", !1]
					],
					[6, "list", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			location_path: n.route(["id"], ["format"], [2, [2, [2, [2, [7, "/", !1],
							[6, "locations", !1]
						],
						[7, "/", !1]
					],
					[3, "id", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			locations_path: n.route([], ["format"], [2, [2, [7, "/", !1],
					[6, "locations", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			login_admin_user_path: n.route(["id"], ["format"], [2, [2, [2, [2, [2, [2, [2, [2, [7, "/", !1],
											[6, "admin", !1]
										],
										[7, "/", !1]
									],
									[6, "users", !1]
								],
								[7, "/", !1]
							],
							[3, "id", !1]
						],
						[7, "/", !1]
					],
					[6, "login", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			new_admin_app_path: n.route([], ["format"], [2, [2, [2, [2, [2, [2, [7, "/", !1],
									[6, "admin", !1]
								],
								[7, "/", !1]
							],
							[6, "apps", !1]
						],
						[7, "/", !1]
					],
					[6, "new", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			new_admin_email_template_path: n.route([], ["format"], [2, [2, [2, [2, [2, [2, [7, "/", !1],
									[6, "admin", !1]
								],
								[7, "/", !1]
							],
							[6, "email_templates", !1]
						],
						[7, "/", !1]
					],
					[6, "new", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			new_admin_fragment_template_path: n.route([], ["format"], [2, [2, [2, [2, [2, [2, [7, "/", !1],
									[6, "admin", !1]
								],
								[7, "/", !1]
							],
							[6, "fragment_templates", !1]
						],
						[7, "/", !1]
					],
					[6, "new", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			new_admin_page_template_path: n.route([], ["format"], [2, [2, [2, [2, [2, [2, [7, "/", !1],
									[6, "admin", !1]
								],
								[7, "/", !1]
							],
							[6, "page_templates", !1]
						],
						[7, "/", !1]
					],
					[6, "new", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			new_admin_user_path: n.route([], ["format"], [2, [2, [2, [2, [2, [2, [7, "/", !1],
									[6, "admin", !1]
								],
								[7, "/", !1]
							],
							[6, "users", !1]
						],
						[7, "/", !1]
					],
					[6, "new", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			new_api_v1_user_path: n.route([], ["format"], [2, [2, [2, [2, [2, [2, [2, [2, [7, "/", !1],
											[6, "api", !1]
										],
										[7, "/", !1]
									],
									[6, "v1", !1]
								],
								[7, "/", !1]
							],
							[6, "users", !1]
						],
						[7, "/", !1]
					],
					[6, "new", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			new_api_v1_users_authentication_path: n.route([], ["format"], [2, [2, [2, [2, [2, [2, [2, [2, [2, [2, [7, "/", !1],
													[6, "api", !1]
												],
												[7, "/", !1]
											],
											[6, "v1", !1]
										],
										[7, "/", !1]
									],
									[6, "users", !1]
								],
								[7, "/", !1]
							],
							[6, "authentications", !1]
						],
						[7, "/", !1]
					],
					[6, "new", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			new_location_path: n.route([], ["format"], [2, [2, [2, [2, [7, "/", !1],
							[6, "locations", !1]
						],
						[7, "/", !1]
					],
					[6, "new", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			new_short_url_path: n.route([], ["format"], [2, [2, [2, [2, [7, "/", !1],
							[6, "s", !1]
						],
						[7, "/", !1]
					],
					[6, "new", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			new_user_path: n.route([], ["format"], [2, [2, [2, [2, [7, "/", !1],
							[6, "users", !1]
						],
						[7, "/", !1]
					],
					[6, "new", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			new_user_confirmation_path: n.route([], ["format"], [2, [2, [2, [2, [2, [2, [7, "/", !1],
									[6, "users", !1]
								],
								[7, "/", !1]
							],
							[6, "confirmation", !1]
						],
						[7, "/", !1]
					],
					[6, "new", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			new_user_invitation_path: n.route([], ["format"], [2, [2, [2, [2, [2, [2, [7, "/", !1],
									[6, "users", !1]
								],
								[7, "/", !1]
							],
							[6, "invitation", !1]
						],
						[7, "/", !1]
					],
					[6, "new", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			new_user_password_path: n.route([], ["format"], [2, [2, [2, [2, [2, [2, [7, "/", !1],
									[6, "users", !1]
								],
								[7, "/", !1]
							],
							[6, "password", !1]
						],
						[7, "/", !1]
					],
					[6, "new", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			new_user_registration_path: n.route([], ["format"], [2, [2, [2, [2, [7, "/", !1],
							[6, "users", !1]
						],
						[7, "/", !1]
					],
					[6, "sign_up", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			new_user_session_path: n.route([], ["format"], [2, [2, [2, [2, [7, "/", !1],
							[6, "users", !1]
						],
						[7, "/", !1]
					],
					[6, "sign_in", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			new_user_unlock_path: n.route([], ["format"], [2, [2, [2, [2, [2, [2, [7, "/", !1],
									[6, "users", !1]
								],
								[7, "/", !1]
							],
							[6, "unlock", !1]
						],
						[7, "/", !1]
					],
					[6, "new", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			new_users_authentication_path: n.route([], ["format"], [2, [2, [2, [2, [2, [2, [7, "/", !1],
									[6, "users", !1]
								],
								[7, "/", !1]
							],
							[6, "authentications", !1]
						],
						[7, "/", !1]
					],
					[6, "new", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			new_wechat_message_path: n.route([], ["format"], [2, [2, [2, [2, [2, [2, [7, "/", !1],
									[6, "wechat", !1]
								],
								[7, "/", !1]
							],
							[6, "messages", !1]
						],
						[7, "/", !1]
					],
					[6, "new", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			oauth_authorization_path: n.route([], ["format"], [2, [2, [2, [2, [7, "/", !1],
							[6, "oauth", !1]
						],
						[7, "/", !1]
					],
					[6, "authorize", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			oauth_revoke_path: n.route([], ["format"], [2, [2, [2, [2, [7, "/", !1],
							[6, "oauth", !1]
						],
						[7, "/", !1]
					],
					[6, "revoke", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			oauth_token_path: n.route([], ["format"], [2, [2, [2, [2, [7, "/", !1],
							[6, "oauth", !1]
						],
						[7, "/", !1]
					],
					[6, "token", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			origin_ids_api_v1_user_path: n.route(["id"], ["format"], [2, [2, [2, [2, [2, [2, [2, [2, [2, [2, [7, "/", !1],
													[6, "api", !1]
												],
												[7, "/", !1]
											],
											[6, "v1", !1]
										],
										[7, "/", !1]
									],
									[6, "users", !1]
								],
								[7, "/", !1]
							],
							[3, "id", !1]
						],
						[7, "/", !1]
					],
					[6, "origin_ids", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			preview_admin_email_template_path: n.route(["id"], ["format"], [2, [2, [2, [2, [2, [2, [2, [2, [7, "/", !1],
											[6, "admin", !1]
										],
										[7, "/", !1]
									],
									[6, "email_templates", !1]
								],
								[7, "/", !1]
							],
							[3, "id", !1]
						],
						[7, "/", !1]
					],
					[6, "preview", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			remove_user_invitation_path: n.route([], ["format"], [2, [2, [2, [2, [2, [2, [7, "/", !1],
									[6, "users", !1]
								],
								[7, "/", !1]
							],
							[6, "invitation", !1]
						],
						[7, "/", !1]
					],
					[6, "remove", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			reset_password_api_v1_users_path: n.route([], ["format"], [2, [2, [2, [2, [2, [2, [2, [2, [7, "/", !1],
											[6, "api", !1]
										],
										[7, "/", !1]
									],
									[6, "v1", !1]
								],
								[7, "/", !1]
							],
							[6, "users", !1]
						],
						[7, "/", !1]
					],
					[6, "reset_password", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			review_path: n.route([], ["format"], [2, [2, [7, "/", !1],
					[6, "review", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			root_path: n.route([], [], [7, "/", !1], arguments),
			send_confirmation_instructions_api_v1_user_path: n.route(["id"], ["format"], [2, [2, [2, [2, [2, [2, [2, [2, [2, [2, [7, "/", !1],
													[6, "api", !1]
												],
												[7, "/", !1]
											],
											[6, "v1", !1]
										],
										[7, "/", !1]
									],
									[6, "users", !1]
								],
								[7, "/", !1]
							],
							[3, "id", !1]
						],
						[7, "/", !1]
					],
					[6, "send_confirmation_instructions", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			send_confirmation_instructions_users_path: n.route([], ["format"], [2, [2, [2, [2, [7, "/", !1],
							[6, "users", !1]
						],
						[7, "/", !1]
					],
					[6, "send_confirmation_instructions", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			send_verify_code_api_v1_users_path: n.route([], ["format"], [2, [2, [2, [2, [2, [2, [2, [2, [7, "/", !1],
											[6, "api", !1]
										],
										[7, "/", !1]
									],
									[6, "v1", !1]
								],
								[7, "/", !1]
							],
							[6, "users", !1]
						],
						[7, "/", !1]
					],
					[6, "send_verify_code", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			short_url_path: n.route(["id"], ["format"], [2, [2, [2, [2, [7, "/", !1],
							[6, "s", !1]
						],
						[7, "/", !1]
					],
					[3, "id", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			short_urls_path: n.route([], ["format"], [2, [2, [7, "/", !1],
					[6, "s", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			unbind_api_v1_users_authentications_path: n.route([], ["format"], [2, [2, [2, [2, [2, [2, [2, [2, [2, [2, [7, "/", !1],
													[6, "api", !1]
												],
												[7, "/", !1]
											],
											[6, "v1", !1]
										],
										[7, "/", !1]
									],
									[6, "users", !1]
								],
								[7, "/", !1]
							],
							[6, "authentications", !1]
						],
						[7, "/", !1]
					],
					[6, "unbind", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			updated_api_v1_users_path: n.route([], ["format"], [2, [2, [2, [2, [2, [2, [2, [2, [7, "/", !1],
											[6, "api", !1]
										],
										[7, "/", !1]
									],
									[6, "v1", !1]
								],
								[7, "/", !1]
							],
							[6, "users", !1]
						],
						[7, "/", !1]
					],
					[6, "updated", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			user_path: n.route(["id"], ["format"], [2, [2, [2, [2, [7, "/", !1],
							[6, "users", !1]
						],
						[7, "/", !1]
					],
					[3, "id", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			user_confirmation_path: n.route([], ["format"], [2, [2, [2, [2, [7, "/", !1],
							[6, "users", !1]
						],
						[7, "/", !1]
					],
					[6, "confirmation", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			user_invitation_path: n.route([], ["format"], [2, [2, [2, [2, [7, "/", !1],
							[6, "users", !1]
						],
						[7, "/", !1]
					],
					[6, "invitation", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			user_omniauth_authorize_path: n.route(["provider"], ["format"], [2, [2, [2, [2, [2, [2, [7, "/", !1],
									[6, "users", !1]
								],
								[7, "/", !1]
							],
							[6, "auth", !1]
						],
						[7, "/", !1]
					],
					[3, "provider", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			user_omniauth_callback_path: n.route(["action"], ["format"], [2, [2, [2, [2, [2, [2, [2, [2, [7, "/", !1],
											[6, "users", !1]
										],
										[7, "/", !1]
									],
									[6, "auth", !1]
								],
								[7, "/", !1]
							],
							[3, "action", !1]
						],
						[7, "/", !1]
					],
					[6, "callback", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			user_password_path: n.route([], ["format"], [2, [2, [2, [2, [7, "/", !1],
							[6, "users", !1]
						],
						[7, "/", !1]
					],
					[6, "password", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			user_registration_path: n.route([], ["format"], [2, [2, [7, "/", !1],
					[6, "users", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			user_session_path: n.route([], ["format"], [2, [2, [2, [2, [7, "/", !1],
							[6, "users", !1]
						],
						[7, "/", !1]
					],
					[6, "sign_in", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			user_unlock_path: n.route([], ["format"], [2, [2, [2, [2, [7, "/", !1],
							[6, "users", !1]
						],
						[7, "/", !1]
					],
					[6, "unlock", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			users_path: n.route([], ["format"], [2, [2, [7, "/", !1],
					[6, "users", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			users_authentication_path: n.route(["id"], ["format"], [2, [2, [2, [2, [2, [2, [7, "/", !1],
									[6, "users", !1]
								],
								[7, "/", !1]
							],
							[6, "authentications", !1]
						],
						[7, "/", !1]
					],
					[3, "id", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			users_authentications_path: n.route([], ["format"], [2, [2, [2, [2, [7, "/", !1],
							[6, "users", !1]
						],
						[7, "/", !1]
					],
					[6, "authentications", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			users_check_path: n.route([], ["format"], [2, [2, [2, [2, [7, "/", !1],
							[6, "users", !1]
						],
						[7, "/", !1]
					],
					[6, "check", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			users_confirm_path: n.route([], ["format"], [2, [2, [2, [2, [7, "/", !1],
							[6, "users", !1]
						],
						[7, "/", !1]
					],
					[6, "confirm", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			users_confirmations_complete_path: n.route([], ["format"], [2, [2, [2, [2, [2, [2, [7, "/", !1],
									[6, "users", !1]
								],
								[7, "/", !1]
							],
							[6, "confirmations", !1]
						],
						[7, "/", !1]
					],
					[6, "complete", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			users_confirmations_sent_path: n.route([], ["format"], [2, [2, [2, [2, [2, [2, [7, "/", !1],
									[6, "users", !1]
								],
								[7, "/", !1]
							],
							[6, "confirmations", !1]
						],
						[7, "/", !1]
					],
					[6, "sent", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			users_passwords_complete_path: n.route([], ["format"], [2, [2, [2, [2, [2, [2, [7, "/", !1],
									[6, "users", !1]
								],
								[7, "/", !1]
							],
							[6, "passwords", !1]
						],
						[7, "/", !1]
					],
					[6, "complete", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			users_passwords_init_path: n.route([], ["format"], [2, [2, [2, [2, [2, [2, [7, "/", !1],
									[6, "users", !1]
								],
								[7, "/", !1]
							],
							[6, "passwords", !1]
						],
						[7, "/", !1]
					],
					[6, "init", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			users_passwords_remedy_path: n.route([], ["format"], [2, [2, [2, [2, [2, [2, [7, "/", !1],
									[6, "users", !1]
								],
								[7, "/", !1]
							],
							[6, "passwords", !1]
						],
						[7, "/", !1]
					],
					[6, "remedy", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			users_passwords_send_code_path: n.route([], ["format"], [2, [2, [2, [2, [2, [2, [7, "/", !1],
									[6, "users", !1]
								],
								[7, "/", !1]
							],
							[6, "passwords", !1]
						],
						[7, "/", !1]
					],
					[6, "send_code", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			users_passwords_sent_path: n.route([], ["format"], [2, [2, [2, [2, [2, [2, [7, "/", !1],
									[6, "users", !1]
								],
								[7, "/", !1]
							],
							[6, "passwords", !1]
						],
						[7, "/", !1]
					],
					[6, "sent", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			users_registrations_complete_path: n.route([], ["format"], [2, [2, [2, [2, [2, [2, [7, "/", !1],
									[6, "users", !1]
								],
								[7, "/", !1]
							],
							[6, "registrations", !1]
						],
						[7, "/", !1]
					],
					[6, "complete", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			users_registrations_send_code_path: n.route([], ["format"], [2, [2, [2, [2, [2, [2, [7, "/", !1],
									[6, "users", !1]
								],
								[7, "/", !1]
							],
							[6, "registrations", !1]
						],
						[7, "/", !1]
					],
					[6, "send_code", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			users_send_code_path: n.route([], ["format"], [2, [2, [2, [2, [7, "/", !1],
							[6, "users", !1]
						],
						[7, "/", !1]
					],
					[6, "send_code", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			users_sessions_send_code_path: n.route([], ["format"], [2, [2, [2, [2, [2, [2, [7, "/", !1],
									[6, "users", !1]
								],
								[7, "/", !1]
							],
							[6, "sessions", !1]
						],
						[7, "/", !1]
					],
					[6, "send_code", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			users_wechat_sign_in_qrcode_path: n.route([], ["format"], [2, [2, [2, [2, [7, "/", !1],
							[6, "users", !1]
						],
						[7, "/", !1]
					],
					[6, "wechat_sign_in_qrcode", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			wechat_message_path: n.route(["id"], ["format"], [2, [2, [2, [2, [2, [2, [7, "/", !1],
									[6, "wechat", !1]
								],
								[7, "/", !1]
							],
							[6, "messages", !1]
						],
						[7, "/", !1]
					],
					[3, "id", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments),
			wechat_messages_path: n.route([], ["format"], [2, [2, [2, [2, [7, "/", !1],
							[6, "wechat", !1]
						],
						[7, "/", !1]
					],
					[6, "messages", !1]
				],
				[1, [2, [8, ".", !1],
					[3, "format", !1]
				], !1]
			], arguments)
		}, i.Routes.options = o, i.Routes
	}, "function" == typeof define && define.amd ? define([], function() {
		return r()
	}) : r()
}.call(this),
	function() {
		jQuery(function() {
			return $('select[data-remote="true"]').bind("ajax:success", function(e, t) {
				var n, r, o, i, a, s;
				r = $(this), i = r.data("target"), n = i ? $(i) : r, n.closest(".hide").removeClass("hide"), n.find('option:not([value=""])').remove(), o = [];
				for (s in t) a = t[s], o.push($("<option value='" + s + "'>" + a + "</option>").appendTo(n));
				return o
			}), $.fn.verify_code_sendable = function(e, t) {
				return null == t && (t = {}), $(this).on({
					click: function() {
						var n, r;
						return n = $(this), $(".verify-code").focus(), $(this).is(".disabled") ? !1 : (r = $.extend({
							url: Routes.users_sessions_send_code_path(),
							method: "POST",
							data: {
								login: e.val(),
								captcha: $("input#captcha").val(),
								captcha_key: $("input[name=captcha_key]").val()
							},
							beforeSend: function() {
								return n.button("loading")
							},
							success: function(e) {
								return n.trigger("resend_counter", [e.limit]), $("a.captcha").trigger("click")
							},
							error: function(e) {
								var t, r, o, i, a, s;
								return $("a.captcha").trigger("click"), 423 !== e.status ? (n.button("reset").removeClass("disabled"), 422 === e.status ? alert("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u624b\u673a\u53f7\u7801") : 406 === e.status ? (o = e.responseJSON, s = o.reason, "invalid_captcha" === s && ($("#captcha_wrapper").show(), $("input#captcha").focus()), alert(o.message)) : alert("\u62b1\u6b49, \u77ed\u4fe1\u53d1\u9001\u5931\u8d25, \u8bf7\u7a0d\u540e\u91cd\u8bd5")) : (a = e.responseJSON.limit, n.trigger("resend_counter", [a]), t = new Date, alert("\u8bf7\u7b49\u5f85\u5012\u8ba1\u65f6\u7ed3\u675f\u540e\u518d\u53d1\u9001"), r = (new Date).getTime() - t.getTime(), i = a - parseInt(r / 1e3), i > 1 ? n.trigger("resend_counter", [i]) : void 0)
							}
						}, t), $.ajax(r))
					},
					resend_counter: function(e, t) {
						var n, r, o, i;
						return n = $(this).addClass("disabled"), (i = n.data("counter-interval")) && clearInterval(i), (r = function() {
							return n.text(n.data("counter-text").replace("#seconds#", t--))
						})(), o = setInterval(function() {
							return r(), 0 > t ? (clearInterval(o), n.button("reset").removeClass("disabled")) : void 0
						}, 1e3), n.data("counter-interval", o)
					}
				})
			}
		})
	}.call(this),
	function() {
		jQuery(function() {
			return function() {
				var e;
				if (0 !== $("body.sessions-new").length) return $("#sign_in_form").on({
					"ajax:before": function() {
						var e;
						return e = $("#submit"), e.prop("disabled") ? !1 : ($(".error-msg").hide(), e.button("loading").prop("disabled", !0), e.data("back-text", e.val()))
					},
					"ajax:success": function(e, t) {
						return t.redirect_to ? window.location.href = t.redirect_to : void 0
					},
					"ajax:error": function(e, t) {
						return 422 === t.status || 401 === t.status ? $(".error-msg").html(t.responseJSON.message).show() : void 0
					},
					"ajax:complete": function() {
						return $("#submit").button("reset").button("back").prop("disabled", !1)
					}
				}), $("#user_login").on("check", function(t, n, r) {
					return e.push($.ajax({
						url: Routes.users_check_path(),
						data: {
							user: {
								login: n
							}
						},
						beforeSend: function() {
							return $("#user_login").addClass("loading")
						},
						complete: function() {
							return $("#user_login").removeClass("loading")
						},
						success: function(e, t, n) {
							var o;
							return $("#submit").button("login"), "phone" === r ? (200 === n.status ? ($("#sms_verify_code_wrapper").show(), o = $("#captcha_wrapper"), o.data("required") === !0 && o.show(), $("#submit").button("loginandsetpassword"), $("#slogan").hide(), $(".alert-tip").html("\u4e3a\u4e86\u4f60\u7684\u8d26\u53f7\u5b89\u5168\uff0c\u8bf7\u8865\u5168\u5bc6\u7801<br/>\u4eca\u540e\u4f60\u53ef\u4ee5\u4f7f\u7528\u624b\u673a\u53f7\u7801\u53ca\u5bc6\u7801\u8fdb\u884c\u767b\u5f55")) : $("#slogan").html("\u767b\u5f55").show(), $("#user_password").show()) : (200 === n.status ? ($("#user_password").hide(), $("#submit").button("confirm")) : 202 === n.status && $("#user_password").show(), $("#slogan").html("\u767b\u5f55").show(), $(".alert-tip").empty()), $(".third-part-login").fadeOut(), $("#forgot_password").show()
						},
						error: function(e) {
							var t;
							return 404 === e.status ? ("phone" === r && ($("#sms_verify_code_wrapper").show(), t = $("#captcha_wrapper"), t.data("required") === !0 && t.show()), $("#forgot_password").hide(), $("#submit").button("register"), $("#user_password").show(), $(".third-part-login").fadeOut(), $("#slogan").html("\u6ce8\u518c").show(), $(".alert-tip").empty()) : void 0
						}
					}))
				}), e = [], setInterval(function() {
					var t, n, r;
					if (t = $("#user_login"), n = $.trim(t.val()), t.data("old-value") !== n) {
						for (; r = e.pop();) r.abort();
						return t.data("old-value", n), /^\d{11}$/.test(n) ? t.trigger("check", [n, "phone"]) : /^[^@\s]+@([^@\s]+\.)+[^@\s]+$/.test(n) ? t.trigger("check", [n, "email"]) : ($("#sms_verify_code_wrapper, #user_password, .error-msg").hide(), $(".third-part-login").fadeIn(), $("#user_verify").val(""), $("#submit").button("reset"), $("#forgot_password").show(), $("#slogan").html($("#slogan").data("default")).show(), $(".alert-tip").empty(), $("#captcha_wrapper").hide())
					}
				}, 100), $("#get_verify").verify_code_sendable($("#user_login"), Routes.users_sessions_send_code_path())
			}()
		})
	}.call(this),
	function() {
		jQuery(function() {
			return 0 !== $("body.registrations-new").length ? ($("#sign_up_form").on({
				"ajax:before": function() {
					var e;
					return e = $("#submit"), e.prop("disabled") ? !1 : ($(".error-msg").hide(), e.button("loading").prop("disabled", !0), e.data("back-text", e.val()))
				},
				"ajax:success": function(e, t) {
					return window.location.href = t.redirect_to
				},
				"ajax:error": function(e, t) {
					return 422 === t.status || 401 === t.status ? $(".error-msg").html(t.responseJSON.message).show() : void 0
				},
				"ajax:complete": function() {
					return $("#submit").button("reset").button("back").prop("disabled", !1)
				}
			}), $("#user_login").on("check", function(e, t, n) {
				return $.ajax({
					url: Routes.users_check_path(),
					data: {
						user: {
							login: t
						}
					},
					beforeSend: function() {
						return $("#user_login").addClass("loading")
					},
					complete: function() {
						return $("#user_login").removeClass("loading")
					},
					success: function(e, t, r) {
						if ($("#submit").button("login"), "phone" === n) {
							if (200 === r.status) return $("#sms_verify_code_wrapper").show(), $("#submit").button("loginandsetpassword")
						} else if (200 === r.status) return $("#submit").button("confirm")
					},
					error: function(e) {
						return 404 === e.status ? ("phone" === n && $("#sms_verify_code_wrapper").show(), $("#submit").button("register")) : void 0
					}
				})
			}), setInterval(function() {
				var e, t;
				return e = $("#user_login"), t = $.trim(e.val()), e.data("old-value") !== t ? (e.data("old-value", t), /^\d{11}$/.test(t) ? e.is(".pending") ? $("#sms_verify_code_wrapper").show() : e.trigger("check", [t, "phone"]) : /^[^@\s]+@([^@\s]+\.)+[^@\s]+$/.test(t) ? e.is(".pending") ? void 0 : e.trigger("check", [t, "email"]) : ($("#sms_verify_code_wrapper, .error-msg").hide(), $("#user_verify").val(""), $("#submit").button("reset"))) : void 0
			}, 100), $("#get_verify").verify_code_sendable($("#user_login"), {
				url: Routes.users_registrations_send_code_path()
			})) : void 0
		})
	}.call(this),
	function() {
		jQuery(function() {
			var e;
			if (0 !== $("body.passwords-new").length) return $("#recorver_form").on({
				"ajax:before": function() {
					var e;
					return e = $("#submit"), e.prop("disabled") ? !1 : ($(".error-msg").hide(), e.button("loading").prop("disabled", !0), e.data("back-text", e.val()))
				},
				"ajax:success": function(e, t) {
					return t.redirect_to ? window.location.href = t.redirect_to : void 0
				},
				"ajax:error": function(e, t) {
					var n;
					return 422 === (n = t.status) || 423 === n ? $(".error-msg").html(t.responseJSON.message).show() : void 0
				},
				"ajax:complete": function() {
					return $("#submit").button("reset").button("back").prop("disabled", !1)
				}
			}), $("#user_login").on("check", function(t, n, r) {
				return e.push($.ajax({
					url: Routes.users_check_path(),
					data: {
						user: {
							login: n
						}
					},
					beforeSend: function() {
						return $("#user_login").addClass("loading")
					},
					complete: function() {
						return $("#user_login").removeClass("loading")
					},
					success: function() {
						var e;
						return $("#submit").button("login"), "phone" === r ? ($("#user_password, #sms_verify_code_wrapper").show(), e = $("#captcha_wrapper"), e.data("required") === !0 && e.show(), $("#submit").button("set")) : $("#submit").button("send")
					},
					error: function(e) {
						return 404 === e.status ? $(".error-msg").html("\u8be5\u5e10\u53f7\u4e0d\u5b58\u5728").show() : void 0
					}
				}))
			}), e = [], setInterval(function() {
				var t, n, r;
				if (t = $("#user_login"), n = $.trim(t.val()), t.data("old-value") !== n) {
					for (; r = e.pop();) r.abort();
					return t.data("old-value", n), $(".error-msg").hide(), /^\d{11}$/.test(n) ? t.trigger("check", [n, "phone"]) : /^[^@\s]+@([^@\s]+\.)+[^@\s]+$/.test(n) ? t.trigger("check", [n, "email"]) : ($("#user_password, #sms_verify_code_wrapper, .error-msg").hide(), $("#user_verify").val(""), $("#submit").button("reset"), $("#captcha_wrapper").hide())
				}
			}, 100), $("#get_verify").verify_code_sendable($("#user_login"), {
				url: Routes.users_passwords_send_code_path()
			})
		})
	}.call(this),
	function() {
		jQuery(function() {
			return $(document.body).on("ajax:error", function(e, t) {
				return t.status >= 500 ? alert("\u670d\u52a1\u5668\u5f00\u5c0f\u5dee\u4e86\uff0c\u8bf7\u5237\u65b0\u6216\u7a0d\u540e\u91cd\u8bd5\u3002") : void 0
			}), $("body").is(".portable-device") ? $('[data-toggle="popup"]').each(function() {
				return $(this).attr("href", $(this).data("src"))
			}) : $(document).on("click", '[data-toggle="popup"]', function() {
				var e, t, n, r, o, i, a;
				return e = $(this), o = e.data("src"), t = e.data("height"), a = e.data("width"), i = e.data("top") || 200, n = e.data("left") || 400, r = window.open(o, "_blank", "location=no, menubar=no, resizable=no, toolbar=no, top=" + i + ", left=" + n + ", height=" + t + ", width=" + a)
			}), $(".stop-ajax-propagation").on({
				"ajax:before": function(e) {
					return e.stopPropagation()
				},
				"ajax:beforeSend": function(e) {
					return e.stopPropagation()
				},
				"ajax:success": function(e) {
					return e.stopPropagation()
				},
				"ajax:error": function(e) {
					return e.stopPropagation()
				},
				"ajax:complete": function(e) {
					return e.stopPropagation()
				}
			})
		})
	}.call(this);