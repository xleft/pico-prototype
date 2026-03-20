function hy(i, r) {
  for (var s = 0; s < r.length; s++) {
    const u = r[s];
    if (typeof u != "string" && !Array.isArray(u)) {
      for (const f in u)
        if (f !== "default" && !(f in i)) {
          const d = Object.getOwnPropertyDescriptor(u, f);
          d &&
            Object.defineProperty(
              i,
              f,
              d.get ? d : { enumerable: !0, get: () => u[f] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const f of document.querySelectorAll('link[rel="modulepreload"]')) u(f);
  new MutationObserver((f) => {
    for (const d of f)
      if (d.type === "childList")
        for (const p of d.addedNodes)
          p.tagName === "LINK" && p.rel === "modulepreload" && u(p);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(f) {
    const d = {};
    return (
      f.integrity && (d.integrity = f.integrity),
      f.referrerPolicy && (d.referrerPolicy = f.referrerPolicy),
      f.crossOrigin === "use-credentials"
        ? (d.credentials = "include")
        : f.crossOrigin === "anonymous"
          ? (d.credentials = "omit")
          : (d.credentials = "same-origin"),
      d
    );
  }
  function u(f) {
    if (f.ep) return;
    f.ep = !0;
    const d = s(f);
    fetch(f.href, d);
  }
})();
function F0(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default")
    ? i.default
    : i;
}
var js = { exports: {} },
  Di = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var u0;
function gy() {
  if (u0) return Di;
  u0 = 1;
  var i = Symbol.for("react.transitional.element"),
    r = Symbol.for("react.fragment");
  function s(u, f, d) {
    var p = null;
    if (
      (d !== void 0 && (p = "" + d),
      f.key !== void 0 && (p = "" + f.key),
      "key" in f)
    ) {
      d = {};
      for (var b in f) b !== "key" && (d[b] = f[b]);
    } else d = f;
    return (
      (f = d.ref),
      { $$typeof: i, type: u, key: p, ref: f !== void 0 ? f : null, props: d }
    );
  }
  return ((Di.Fragment = r), (Di.jsx = s), (Di.jsxs = s), Di);
}
var s0;
function py() {
  return (s0 || ((s0 = 1), (js.exports = gy())), js.exports);
}
var G = py(),
  Bs = { exports: {} },
  Hi = {},
  Us = { exports: {} },
  Ls = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var c0;
function yy() {
  return (
    c0 ||
      ((c0 = 1),
      (function (i) {
        function r(w, L) {
          var D = w.length;
          w.push(L);
          t: for (; 0 < D; ) {
            var it = (D - 1) >>> 1,
              ut = w[it];
            if (0 < f(ut, L)) ((w[it] = L), (w[D] = ut), (D = it));
            else break t;
          }
        }
        function s(w) {
          return w.length === 0 ? null : w[0];
        }
        function u(w) {
          if (w.length === 0) return null;
          var L = w[0],
            D = w.pop();
          if (D !== L) {
            w[0] = D;
            t: for (var it = 0, ut = w.length, S = ut >>> 1; it < S; ) {
              var U = 2 * (it + 1) - 1,
                B = w[U],
                V = U + 1,
                F = w[V];
              if (0 > f(B, D))
                V < ut && 0 > f(F, B)
                  ? ((w[it] = F), (w[V] = D), (it = V))
                  : ((w[it] = B), (w[U] = D), (it = U));
              else if (V < ut && 0 > f(F, D))
                ((w[it] = F), (w[V] = D), (it = V));
              else break t;
            }
          }
          return L;
        }
        function f(w, L) {
          var D = w.sortIndex - L.sortIndex;
          return D !== 0 ? D : w.id - L.id;
        }
        if (
          ((i.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var d = performance;
          i.unstable_now = function () {
            return d.now();
          };
        } else {
          var p = Date,
            b = p.now();
          i.unstable_now = function () {
            return p.now() - b;
          };
        }
        var y = [],
          g = [],
          v = 1,
          h = null,
          A = 3,
          M = !1,
          N = !1,
          Y = !1,
          k = !1,
          R = typeof setTimeout == "function" ? setTimeout : null,
          W = typeof clearTimeout == "function" ? clearTimeout : null,
          J = typeof setImmediate < "u" ? setImmediate : null;
        function $(w) {
          for (var L = s(g); L !== null; ) {
            if (L.callback === null) u(g);
            else if (L.startTime <= w)
              (u(g), (L.sortIndex = L.expirationTime), r(y, L));
            else break;
            L = s(g);
          }
        }
        function I(w) {
          if (((Y = !1), $(w), !N))
            if (s(y) !== null) ((N = !0), lt || ((lt = !0), gt()));
            else {
              var L = s(g);
              L !== null && xt(I, L.startTime - w);
            }
        }
        var lt = !1,
          Q = -1,
          Z = 5,
          mt = -1;
        function St() {
          return k ? !0 : !(i.unstable_now() - mt < Z);
        }
        function _t() {
          if (((k = !1), lt)) {
            var w = i.unstable_now();
            mt = w;
            var L = !0;
            try {
              t: {
                ((N = !1), Y && ((Y = !1), W(Q), (Q = -1)), (M = !0));
                var D = A;
                try {
                  e: {
                    for (
                      $(w), h = s(y);
                      h !== null && !(h.expirationTime > w && St());
                    ) {
                      var it = h.callback;
                      if (typeof it == "function") {
                        ((h.callback = null), (A = h.priorityLevel));
                        var ut = it(h.expirationTime <= w);
                        if (((w = i.unstable_now()), typeof ut == "function")) {
                          ((h.callback = ut), $(w), (L = !0));
                          break e;
                        }
                        (h === s(y) && u(y), $(w));
                      } else u(y);
                      h = s(y);
                    }
                    if (h !== null) L = !0;
                    else {
                      var S = s(g);
                      (S !== null && xt(I, S.startTime - w), (L = !1));
                    }
                  }
                  break t;
                } finally {
                  ((h = null), (A = D), (M = !1));
                }
                L = void 0;
              }
            } finally {
              L ? gt() : (lt = !1);
            }
          }
        }
        var gt;
        if (typeof J == "function")
          gt = function () {
            J(_t);
          };
        else if (typeof MessageChannel < "u") {
          var pt = new MessageChannel(),
            vt = pt.port2;
          ((pt.port1.onmessage = _t),
            (gt = function () {
              vt.postMessage(null);
            }));
        } else
          gt = function () {
            R(_t, 0);
          };
        function xt(w, L) {
          Q = R(function () {
            w(i.unstable_now());
          }, L);
        }
        ((i.unstable_IdlePriority = 5),
          (i.unstable_ImmediatePriority = 1),
          (i.unstable_LowPriority = 4),
          (i.unstable_NormalPriority = 3),
          (i.unstable_Profiling = null),
          (i.unstable_UserBlockingPriority = 2),
          (i.unstable_cancelCallback = function (w) {
            w.callback = null;
          }),
          (i.unstable_forceFrameRate = function (w) {
            0 > w || 125 < w
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Z = 0 < w ? Math.floor(1e3 / w) : 5);
          }),
          (i.unstable_getCurrentPriorityLevel = function () {
            return A;
          }),
          (i.unstable_next = function (w) {
            switch (A) {
              case 1:
              case 2:
              case 3:
                var L = 3;
                break;
              default:
                L = A;
            }
            var D = A;
            A = L;
            try {
              return w();
            } finally {
              A = D;
            }
          }),
          (i.unstable_requestPaint = function () {
            k = !0;
          }),
          (i.unstable_runWithPriority = function (w, L) {
            switch (w) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                w = 3;
            }
            var D = A;
            A = w;
            try {
              return L();
            } finally {
              A = D;
            }
          }),
          (i.unstable_scheduleCallback = function (w, L, D) {
            var it = i.unstable_now();
            switch (
              (typeof D == "object" && D !== null
                ? ((D = D.delay),
                  (D = typeof D == "number" && 0 < D ? it + D : it))
                : (D = it),
              w)
            ) {
              case 1:
                var ut = -1;
                break;
              case 2:
                ut = 250;
                break;
              case 5:
                ut = 1073741823;
                break;
              case 4:
                ut = 1e4;
                break;
              default:
                ut = 5e3;
            }
            return (
              (ut = D + ut),
              (w = {
                id: v++,
                callback: L,
                priorityLevel: w,
                startTime: D,
                expirationTime: ut,
                sortIndex: -1,
              }),
              D > it
                ? ((w.sortIndex = D),
                  r(g, w),
                  s(y) === null &&
                    w === s(g) &&
                    (Y ? (W(Q), (Q = -1)) : (Y = !0), xt(I, D - it)))
                : ((w.sortIndex = ut),
                  r(y, w),
                  N || M || ((N = !0), lt || ((lt = !0), gt()))),
              w
            );
          }),
          (i.unstable_shouldYield = St),
          (i.unstable_wrapCallback = function (w) {
            var L = A;
            return function () {
              var D = A;
              A = L;
              try {
                return w.apply(this, arguments);
              } finally {
                A = D;
              }
            };
          }));
      })(Ls)),
    Ls
  );
}
var f0;
function vy() {
  return (f0 || ((f0 = 1), (Us.exports = yy())), Us.exports);
}
var Ys = { exports: {} },
  dt = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var d0;
function by() {
  if (d0) return dt;
  d0 = 1;
  var i = Symbol.for("react.transitional.element"),
    r = Symbol.for("react.portal"),
    s = Symbol.for("react.fragment"),
    u = Symbol.for("react.strict_mode"),
    f = Symbol.for("react.profiler"),
    d = Symbol.for("react.consumer"),
    p = Symbol.for("react.context"),
    b = Symbol.for("react.forward_ref"),
    y = Symbol.for("react.suspense"),
    g = Symbol.for("react.memo"),
    v = Symbol.for("react.lazy"),
    h = Symbol.for("react.activity"),
    A = Symbol.iterator;
  function M(S) {
    return S === null || typeof S != "object"
      ? null
      : ((S = (A && S[A]) || S["@@iterator"]),
        typeof S == "function" ? S : null);
  }
  var N = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Y = Object.assign,
    k = {};
  function R(S, U, B) {
    ((this.props = S),
      (this.context = U),
      (this.refs = k),
      (this.updater = B || N));
  }
  ((R.prototype.isReactComponent = {}),
    (R.prototype.setState = function (S, U) {
      if (typeof S != "object" && typeof S != "function" && S != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, S, U, "setState");
    }),
    (R.prototype.forceUpdate = function (S) {
      this.updater.enqueueForceUpdate(this, S, "forceUpdate");
    }));
  function W() {}
  W.prototype = R.prototype;
  function J(S, U, B) {
    ((this.props = S),
      (this.context = U),
      (this.refs = k),
      (this.updater = B || N));
  }
  var $ = (J.prototype = new W());
  (($.constructor = J), Y($, R.prototype), ($.isPureReactComponent = !0));
  var I = Array.isArray;
  function lt() {}
  var Q = { H: null, A: null, T: null, S: null },
    Z = Object.prototype.hasOwnProperty;
  function mt(S, U, B) {
    var V = B.ref;
    return {
      $$typeof: i,
      type: S,
      key: U,
      ref: V !== void 0 ? V : null,
      props: B,
    };
  }
  function St(S, U) {
    return mt(S.type, U, S.props);
  }
  function _t(S) {
    return typeof S == "object" && S !== null && S.$$typeof === i;
  }
  function gt(S) {
    var U = { "=": "=0", ":": "=2" };
    return (
      "$" +
      S.replace(/[=:]/g, function (B) {
        return U[B];
      })
    );
  }
  var pt = /\/+/g;
  function vt(S, U) {
    return typeof S == "object" && S !== null && S.key != null
      ? gt("" + S.key)
      : U.toString(36);
  }
  function xt(S) {
    switch (S.status) {
      case "fulfilled":
        return S.value;
      case "rejected":
        throw S.reason;
      default:
        switch (
          (typeof S.status == "string"
            ? S.then(lt, lt)
            : ((S.status = "pending"),
              S.then(
                function (U) {
                  S.status === "pending" &&
                    ((S.status = "fulfilled"), (S.value = U));
                },
                function (U) {
                  S.status === "pending" &&
                    ((S.status = "rejected"), (S.reason = U));
                },
              )),
          S.status)
        ) {
          case "fulfilled":
            return S.value;
          case "rejected":
            throw S.reason;
        }
    }
    throw S;
  }
  function w(S, U, B, V, F) {
    var ot = typeof S;
    (ot === "undefined" || ot === "boolean") && (S = null);
    var nt = !1;
    if (S === null) nt = !0;
    else
      switch (ot) {
        case "bigint":
        case "string":
        case "number":
          nt = !0;
          break;
        case "object":
          switch (S.$$typeof) {
            case i:
            case r:
              nt = !0;
              break;
            case v:
              return ((nt = S._init), w(nt(S._payload), U, B, V, F));
          }
      }
    if (nt)
      return (
        (F = F(S)),
        (nt = V === "" ? "." + vt(S, 0) : V),
        I(F)
          ? ((B = ""),
            nt != null && (B = nt.replace(pt, "$&/") + "/"),
            w(F, U, B, "", function (ne) {
              return ne;
            }))
          : F != null &&
            (_t(F) &&
              (F = St(
                F,
                B +
                  (F.key == null || (S && S.key === F.key)
                    ? ""
                    : ("" + F.key).replace(pt, "$&/") + "/") +
                  nt,
              )),
            U.push(F)),
        1
      );
    nt = 0;
    var ct = V === "" ? "." : V + ":";
    if (I(S))
      for (var zt = 0; zt < S.length; zt++)
        ((V = S[zt]), (ot = ct + vt(V, zt)), (nt += w(V, U, B, ot, F)));
    else if (((zt = M(S)), typeof zt == "function"))
      for (S = zt.call(S), zt = 0; !(V = S.next()).done; )
        ((V = V.value), (ot = ct + vt(V, zt++)), (nt += w(V, U, B, ot, F)));
    else if (ot === "object") {
      if (typeof S.then == "function") return w(xt(S), U, B, V, F);
      throw (
        (U = String(S)),
        Error(
          "Objects are not valid as a React child (found: " +
            (U === "[object Object]"
              ? "object with keys {" + Object.keys(S).join(", ") + "}"
              : U) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return nt;
  }
  function L(S, U, B) {
    if (S == null) return S;
    var V = [],
      F = 0;
    return (
      w(S, V, "", "", function (ot) {
        return U.call(B, ot, F++);
      }),
      V
    );
  }
  function D(S) {
    if (S._status === -1) {
      var U = S._result;
      ((U = U()),
        U.then(
          function (B) {
            (S._status === 0 || S._status === -1) &&
              ((S._status = 1), (S._result = B));
          },
          function (B) {
            (S._status === 0 || S._status === -1) &&
              ((S._status = 2), (S._result = B));
          },
        ),
        S._status === -1 && ((S._status = 0), (S._result = U)));
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var it =
      typeof reportError == "function"
        ? reportError
        : function (S) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var U = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof S == "object" &&
                  S !== null &&
                  typeof S.message == "string"
                    ? String(S.message)
                    : String(S),
                error: S,
              });
              if (!window.dispatchEvent(U)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", S);
              return;
            }
            console.error(S);
          },
    ut = {
      map: L,
      forEach: function (S, U, B) {
        L(
          S,
          function () {
            U.apply(this, arguments);
          },
          B,
        );
      },
      count: function (S) {
        var U = 0;
        return (
          L(S, function () {
            U++;
          }),
          U
        );
      },
      toArray: function (S) {
        return (
          L(S, function (U) {
            return U;
          }) || []
        );
      },
      only: function (S) {
        if (!_t(S))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return S;
      },
    };
  return (
    (dt.Activity = h),
    (dt.Children = ut),
    (dt.Component = R),
    (dt.Fragment = s),
    (dt.Profiler = f),
    (dt.PureComponent = J),
    (dt.StrictMode = u),
    (dt.Suspense = y),
    (dt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Q),
    (dt.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (S) {
        return Q.H.useMemoCache(S);
      },
    }),
    (dt.cache = function (S) {
      return function () {
        return S.apply(null, arguments);
      };
    }),
    (dt.cacheSignal = function () {
      return null;
    }),
    (dt.cloneElement = function (S, U, B) {
      if (S == null)
        throw Error(
          "The argument must be a React element, but you passed " + S + ".",
        );
      var V = Y({}, S.props),
        F = S.key;
      if (U != null)
        for (ot in (U.key !== void 0 && (F = "" + U.key), U))
          !Z.call(U, ot) ||
            ot === "key" ||
            ot === "__self" ||
            ot === "__source" ||
            (ot === "ref" && U.ref === void 0) ||
            (V[ot] = U[ot]);
      var ot = arguments.length - 2;
      if (ot === 1) V.children = B;
      else if (1 < ot) {
        for (var nt = Array(ot), ct = 0; ct < ot; ct++)
          nt[ct] = arguments[ct + 2];
        V.children = nt;
      }
      return mt(S.type, F, V);
    }),
    (dt.createContext = function (S) {
      return (
        (S = {
          $$typeof: p,
          _currentValue: S,
          _currentValue2: S,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (S.Provider = S),
        (S.Consumer = { $$typeof: d, _context: S }),
        S
      );
    }),
    (dt.createElement = function (S, U, B) {
      var V,
        F = {},
        ot = null;
      if (U != null)
        for (V in (U.key !== void 0 && (ot = "" + U.key), U))
          Z.call(U, V) &&
            V !== "key" &&
            V !== "__self" &&
            V !== "__source" &&
            (F[V] = U[V]);
      var nt = arguments.length - 2;
      if (nt === 1) F.children = B;
      else if (1 < nt) {
        for (var ct = Array(nt), zt = 0; zt < nt; zt++)
          ct[zt] = arguments[zt + 2];
        F.children = ct;
      }
      if (S && S.defaultProps)
        for (V in ((nt = S.defaultProps), nt))
          F[V] === void 0 && (F[V] = nt[V]);
      return mt(S, ot, F);
    }),
    (dt.createRef = function () {
      return { current: null };
    }),
    (dt.forwardRef = function (S) {
      return { $$typeof: b, render: S };
    }),
    (dt.isValidElement = _t),
    (dt.lazy = function (S) {
      return { $$typeof: v, _payload: { _status: -1, _result: S }, _init: D };
    }),
    (dt.memo = function (S, U) {
      return { $$typeof: g, type: S, compare: U === void 0 ? null : U };
    }),
    (dt.startTransition = function (S) {
      var U = Q.T,
        B = {};
      Q.T = B;
      try {
        var V = S(),
          F = Q.S;
        (F !== null && F(B, V),
          typeof V == "object" &&
            V !== null &&
            typeof V.then == "function" &&
            V.then(lt, it));
      } catch (ot) {
        it(ot);
      } finally {
        (U !== null && B.types !== null && (U.types = B.types), (Q.T = U));
      }
    }),
    (dt.unstable_useCacheRefresh = function () {
      return Q.H.useCacheRefresh();
    }),
    (dt.use = function (S) {
      return Q.H.use(S);
    }),
    (dt.useActionState = function (S, U, B) {
      return Q.H.useActionState(S, U, B);
    }),
    (dt.useCallback = function (S, U) {
      return Q.H.useCallback(S, U);
    }),
    (dt.useContext = function (S) {
      return Q.H.useContext(S);
    }),
    (dt.useDebugValue = function () {}),
    (dt.useDeferredValue = function (S, U) {
      return Q.H.useDeferredValue(S, U);
    }),
    (dt.useEffect = function (S, U) {
      return Q.H.useEffect(S, U);
    }),
    (dt.useEffectEvent = function (S) {
      return Q.H.useEffectEvent(S);
    }),
    (dt.useId = function () {
      return Q.H.useId();
    }),
    (dt.useImperativeHandle = function (S, U, B) {
      return Q.H.useImperativeHandle(S, U, B);
    }),
    (dt.useInsertionEffect = function (S, U) {
      return Q.H.useInsertionEffect(S, U);
    }),
    (dt.useLayoutEffect = function (S, U) {
      return Q.H.useLayoutEffect(S, U);
    }),
    (dt.useMemo = function (S, U) {
      return Q.H.useMemo(S, U);
    }),
    (dt.useOptimistic = function (S, U) {
      return Q.H.useOptimistic(S, U);
    }),
    (dt.useReducer = function (S, U, B) {
      return Q.H.useReducer(S, U, B);
    }),
    (dt.useRef = function (S) {
      return Q.H.useRef(S);
    }),
    (dt.useState = function (S) {
      return Q.H.useState(S);
    }),
    (dt.useSyncExternalStore = function (S, U, B) {
      return Q.H.useSyncExternalStore(S, U, B);
    }),
    (dt.useTransition = function () {
      return Q.H.useTransition();
    }),
    (dt.version = "19.2.1"),
    dt
  );
}
var m0;
function dr() {
  return (m0 || ((m0 = 1), (Ys.exports = by())), Ys.exports);
}
var qs = { exports: {} },
  fe = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var h0;
function xy() {
  if (h0) return fe;
  h0 = 1;
  var i = dr();
  function r(y) {
    var g = "https://react.dev/errors/" + y;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var v = 2; v < arguments.length; v++)
        g += "&args[]=" + encodeURIComponent(arguments[v]);
    }
    return (
      "Minified React error #" +
      y +
      "; visit " +
      g +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function s() {}
  var u = {
      d: {
        f: s,
        r: function () {
          throw Error(r(522));
        },
        D: s,
        C: s,
        L: s,
        m: s,
        X: s,
        S: s,
        M: s,
      },
      p: 0,
      findDOMNode: null,
    },
    f = Symbol.for("react.portal");
  function d(y, g, v) {
    var h =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: f,
      key: h == null ? null : "" + h,
      children: y,
      containerInfo: g,
      implementation: v,
    };
  }
  var p = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function b(y, g) {
    if (y === "font") return "";
    if (typeof g == "string") return g === "use-credentials" ? g : "";
  }
  return (
    (fe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = u),
    (fe.createPortal = function (y, g) {
      var v =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!g || (g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11))
        throw Error(r(299));
      return d(y, g, null, v);
    }),
    (fe.flushSync = function (y) {
      var g = p.T,
        v = u.p;
      try {
        if (((p.T = null), (u.p = 2), y)) return y();
      } finally {
        ((p.T = g), (u.p = v), u.d.f());
      }
    }),
    (fe.preconnect = function (y, g) {
      typeof y == "string" &&
        (g
          ? ((g = g.crossOrigin),
            (g =
              typeof g == "string"
                ? g === "use-credentials"
                  ? g
                  : ""
                : void 0))
          : (g = null),
        u.d.C(y, g));
    }),
    (fe.prefetchDNS = function (y) {
      typeof y == "string" && u.d.D(y);
    }),
    (fe.preinit = function (y, g) {
      if (typeof y == "string" && g && typeof g.as == "string") {
        var v = g.as,
          h = b(v, g.crossOrigin),
          A = typeof g.integrity == "string" ? g.integrity : void 0,
          M = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
        v === "style"
          ? u.d.S(y, typeof g.precedence == "string" ? g.precedence : void 0, {
              crossOrigin: h,
              integrity: A,
              fetchPriority: M,
            })
          : v === "script" &&
            u.d.X(y, {
              crossOrigin: h,
              integrity: A,
              fetchPriority: M,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
      }
    }),
    (fe.preinitModule = function (y, g) {
      if (typeof y == "string")
        if (typeof g == "object" && g !== null) {
          if (g.as == null || g.as === "script") {
            var v = b(g.as, g.crossOrigin);
            u.d.M(y, {
              crossOrigin: v,
              integrity: typeof g.integrity == "string" ? g.integrity : void 0,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
          }
        } else g == null && u.d.M(y);
    }),
    (fe.preload = function (y, g) {
      if (
        typeof y == "string" &&
        typeof g == "object" &&
        g !== null &&
        typeof g.as == "string"
      ) {
        var v = g.as,
          h = b(v, g.crossOrigin);
        u.d.L(y, v, {
          crossOrigin: h,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          nonce: typeof g.nonce == "string" ? g.nonce : void 0,
          type: typeof g.type == "string" ? g.type : void 0,
          fetchPriority:
            typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
          referrerPolicy:
            typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
          imageSrcSet:
            typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
          imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
          media: typeof g.media == "string" ? g.media : void 0,
        });
      }
    }),
    (fe.preloadModule = function (y, g) {
      if (typeof y == "string")
        if (g) {
          var v = b(g.as, g.crossOrigin);
          u.d.m(y, {
            as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
            crossOrigin: v,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          });
        } else u.d.m(y);
    }),
    (fe.requestFormReset = function (y) {
      u.d.r(y);
    }),
    (fe.unstable_batchedUpdates = function (y, g) {
      return y(g);
    }),
    (fe.useFormState = function (y, g, v) {
      return p.H.useFormState(y, g, v);
    }),
    (fe.useFormStatus = function () {
      return p.H.useHostTransitionStatus();
    }),
    (fe.version = "19.2.1"),
    fe
  );
}
var g0;
function P0() {
  if (g0) return qs.exports;
  g0 = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (r) {
        console.error(r);
      }
  }
  return (i(), (qs.exports = xy()), qs.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var p0;
function Sy() {
  if (p0) return Hi;
  p0 = 1;
  var i = vy(),
    r = dr(),
    s = P0();
  function u(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function f(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function d(t) {
    var e = t,
      n = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do ((e = t), (e.flags & 4098) !== 0 && (n = e.return), (t = e.return));
      while (t);
    }
    return e.tag === 3 ? n : null;
  }
  function p(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function b(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function y(t) {
    if (d(t) !== t) throw Error(u(188));
  }
  function g(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = d(t)), e === null)) throw Error(u(188));
      return e !== t ? null : t;
    }
    for (var n = t, a = e; ; ) {
      var l = n.return;
      if (l === null) break;
      var o = l.alternate;
      if (o === null) {
        if (((a = l.return), a !== null)) {
          n = a;
          continue;
        }
        break;
      }
      if (l.child === o.child) {
        for (o = l.child; o; ) {
          if (o === n) return (y(l), t);
          if (o === a) return (y(l), e);
          o = o.sibling;
        }
        throw Error(u(188));
      }
      if (n.return !== a.return) ((n = l), (a = o));
      else {
        for (var c = !1, m = l.child; m; ) {
          if (m === n) {
            ((c = !0), (n = l), (a = o));
            break;
          }
          if (m === a) {
            ((c = !0), (a = l), (n = o));
            break;
          }
          m = m.sibling;
        }
        if (!c) {
          for (m = o.child; m; ) {
            if (m === n) {
              ((c = !0), (n = o), (a = l));
              break;
            }
            if (m === a) {
              ((c = !0), (a = o), (n = l));
              break;
            }
            m = m.sibling;
          }
          if (!c) throw Error(u(189));
        }
      }
      if (n.alternate !== a) throw Error(u(190));
    }
    if (n.tag !== 3) throw Error(u(188));
    return n.stateNode.current === n ? t : e;
  }
  function v(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = v(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var h = Object.assign,
    A = Symbol.for("react.element"),
    M = Symbol.for("react.transitional.element"),
    N = Symbol.for("react.portal"),
    Y = Symbol.for("react.fragment"),
    k = Symbol.for("react.strict_mode"),
    R = Symbol.for("react.profiler"),
    W = Symbol.for("react.consumer"),
    J = Symbol.for("react.context"),
    $ = Symbol.for("react.forward_ref"),
    I = Symbol.for("react.suspense"),
    lt = Symbol.for("react.suspense_list"),
    Q = Symbol.for("react.memo"),
    Z = Symbol.for("react.lazy"),
    mt = Symbol.for("react.activity"),
    St = Symbol.for("react.memo_cache_sentinel"),
    _t = Symbol.iterator;
  function gt(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (_t && t[_t]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var pt = Symbol.for("react.client.reference");
  function vt(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === pt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case Y:
        return "Fragment";
      case R:
        return "Profiler";
      case k:
        return "StrictMode";
      case I:
        return "Suspense";
      case lt:
        return "SuspenseList";
      case mt:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case N:
          return "Portal";
        case J:
          return t.displayName || "Context";
        case W:
          return (t._context.displayName || "Context") + ".Consumer";
        case $:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case Q:
          return (
            (e = t.displayName || null),
            e !== null ? e : vt(t.type) || "Memo"
          );
        case Z:
          ((e = t._payload), (t = t._init));
          try {
            return vt(t(e));
          } catch {}
      }
    return null;
  }
  var xt = Array.isArray,
    w = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    L = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    D = { pending: !1, data: null, method: null, action: null },
    it = [],
    ut = -1;
  function S(t) {
    return { current: t };
  }
  function U(t) {
    0 > ut || ((t.current = it[ut]), (it[ut] = null), ut--);
  }
  function B(t, e) {
    (ut++, (it[ut] = t.current), (t.current = e));
  }
  var V = S(null),
    F = S(null),
    ot = S(null),
    nt = S(null);
  function ct(t, e) {
    switch ((B(ot, e), B(F, t), B(V, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Rm(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          ((e = Rm(e)), (t = Nm(e, t)));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    (U(V), B(V, t));
  }
  function zt() {
    (U(V), U(F), U(ot));
  }
  function ne(t) {
    t.memoizedState !== null && B(nt, t);
    var e = V.current,
      n = Nm(e, t.type);
    e !== n && (B(F, t), B(V, n));
  }
  function de(t) {
    (F.current === t && (U(V), U(F)),
      nt.current === t && (U(nt), (Mi._currentValue = D)));
  }
  var ae, hn;
  function Je(t) {
    if (ae === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        ((ae = (e && e[1]) || ""),
          (hn =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      ae +
      t +
      hn
    );
  }
  var Ll = !1;
  function Xa(t, e) {
    if (!t || Ll) return "";
    Ll = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var X = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(X.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(X, []);
                } catch (H) {
                  var C = H;
                }
                Reflect.construct(t, [], X);
              } else {
                try {
                  X.call();
                } catch (H) {
                  C = H;
                }
                t.call(X.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (H) {
                C = H;
              }
              (X = t()) &&
                typeof X.catch == "function" &&
                X.catch(function () {});
            }
          } catch (H) {
            if (H && C && typeof H.stack == "string") return [H.stack, C.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var l = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name",
      );
      l &&
        l.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var o = a.DetermineComponentFrameRoot(),
        c = o[0],
        m = o[1];
      if (c && m) {
        var x = c.split(`
`),
          _ = m.split(`
`);
        for (
          l = a = 0;
          a < x.length && !x[a].includes("DetermineComponentFrameRoot");
        )
          a++;
        for (; l < _.length && !_[l].includes("DetermineComponentFrameRoot"); )
          l++;
        if (a === x.length || l === _.length)
          for (
            a = x.length - 1, l = _.length - 1;
            1 <= a && 0 <= l && x[a] !== _[l];
          )
            l--;
        for (; 1 <= a && 0 <= l; a--, l--)
          if (x[a] !== _[l]) {
            if (a !== 1 || l !== 1)
              do
                if ((a--, l--, 0 > l || x[a] !== _[l])) {
                  var j =
                    `
` + x[a].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      j.includes("<anonymous>") &&
                      (j = j.replace("<anonymous>", t.displayName)),
                    j
                  );
                }
              while (1 <= a && 0 <= l);
            break;
          }
      }
    } finally {
      ((Ll = !1), (Error.prepareStackTrace = n));
    }
    return (n = t ? t.displayName || t.name : "") ? Je(n) : "";
  }
  function ha(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Je(t.type);
      case 16:
        return Je("Lazy");
      case 13:
        return t.child !== e && e !== null
          ? Je("Suspense Fallback")
          : Je("Suspense");
      case 19:
        return Je("SuspenseList");
      case 0:
      case 15:
        return Xa(t.type, !1);
      case 11:
        return Xa(t.type.render, !1);
      case 1:
        return Xa(t.type, !0);
      case 31:
        return Je("Activity");
      default:
        return "";
    }
  }
  function Yl(t) {
    try {
      var e = "",
        n = null;
      do ((e += ha(t, n)), (n = t), (t = t.return));
      while (t);
      return e;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  var _e = Object.prototype.hasOwnProperty,
    ql = i.unstable_scheduleCallback,
    Gl = i.unstable_cancelCallback,
    me = i.unstable_shouldYield,
    Ln = i.unstable_requestPaint,
    he = i.unstable_now,
    wr = i.unstable_getCurrentPriorityLevel,
    ga = i.unstable_ImmediatePriority,
    Gi = i.unstable_UserBlockingPriority,
    pa = i.unstable_NormalPriority,
    Xl = i.unstable_LowPriority,
    gn = i.unstable_IdlePriority,
    Xi = i.log,
    Yn = i.unstable_setDisableYieldValue,
    ya = null,
    ge = null;
  function We(t) {
    if (
      (typeof Xi == "function" && Yn(t),
      ge && typeof ge.setStrictMode == "function")
    )
      try {
        ge.setStrictMode(ya, t);
      } catch {}
  }
  var se = Math.clz32 ? Math.clz32 : nn,
    Tr = Math.log,
    kl = Math.LN2;
  function nn(t) {
    return ((t >>>= 0), t === 0 ? 32 : (31 - ((Tr(t) / kl) | 0)) | 0);
  }
  var ka = 256,
    Va = 262144,
    va = 4194304;
  function an(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function ft(t, e, n) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var l = 0,
      o = t.suspendedLanes,
      c = t.pingedLanes;
    t = t.warmLanes;
    var m = a & 134217727;
    return (
      m !== 0
        ? ((a = m & ~o),
          a !== 0
            ? (l = an(a))
            : ((c &= m),
              c !== 0
                ? (l = an(c))
                : n || ((n = m & ~t), n !== 0 && (l = an(n)))))
        : ((m = a & ~o),
          m !== 0
            ? (l = an(m))
            : c !== 0
              ? (l = an(c))
              : n || ((n = a & ~t), n !== 0 && (l = an(n)))),
      l === 0
        ? 0
        : e !== 0 &&
            e !== l &&
            (e & o) === 0 &&
            ((o = l & -l),
            (n = e & -e),
            o >= n || (o === 32 && (n & 4194048) !== 0))
          ? e
          : l
    );
  }
  function qt(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function It(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ce() {
    var t = va;
    return ((va <<= 1), (va & 62914560) === 0 && (va = 4194304), t);
  }
  function qn(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function Xt(t, e) {
    ((t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
  }
  function ye(t, e, n, a, l, o) {
    var c = t.pendingLanes;
    ((t.pendingLanes = n),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= n),
      (t.entangledLanes &= n),
      (t.errorRecoveryDisabledLanes &= n),
      (t.shellSuspendCounter = 0));
    var m = t.entanglements,
      x = t.expirationTimes,
      _ = t.hiddenUpdates;
    for (n = c & ~n; 0 < n; ) {
      var j = 31 - se(n),
        X = 1 << j;
      ((m[j] = 0), (x[j] = -1));
      var C = _[j];
      if (C !== null)
        for (_[j] = null, j = 0; j < C.length; j++) {
          var H = C[j];
          H !== null && (H.lane &= -536870913);
        }
      n &= ~X;
    }
    (a !== 0 && ba(t, a, 0),
      o !== 0 && l === 0 && t.tag !== 0 && (t.suspendedLanes |= o & ~(c & ~e)));
  }
  function ba(t, e, n) {
    ((t.pendingLanes |= e), (t.suspendedLanes &= ~e));
    var a = 31 - se(e);
    ((t.entangledLanes |= e),
      (t.entanglements[a] = t.entanglements[a] | 1073741824 | (n & 261930)));
  }
  function ve(t, e) {
    var n = (t.entangledLanes |= e);
    for (t = t.entanglements; n; ) {
      var a = 31 - se(n),
        l = 1 << a;
      ((l & e) | (t[a] & e) && (t[a] |= e), (n &= ~l));
    }
  }
  function be(t, e) {
    var n = e & -e;
    return (
      (n = (n & 42) !== 0 ? 1 : Qa(n)),
      (n & (t.suspendedLanes | e)) !== 0 ? 0 : n
    );
  }
  function Qa(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function $e(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Ar() {
    var t = L.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : e0(t.type));
  }
  function pc(t, e) {
    var n = L.p;
    try {
      return ((L.p = t), e());
    } finally {
      L.p = n;
    }
  }
  var Gn = Math.random().toString(36).slice(2),
    le = "__reactFiber$" + Gn,
    xe = "__reactProps$" + Gn,
    Za = "__reactContainer$" + Gn,
    zr = "__reactEvents$" + Gn,
    ag = "__reactListeners$" + Gn,
    lg = "__reactHandles$" + Gn,
    yc = "__reactResources$" + Gn,
    Vl = "__reactMarker$" + Gn;
  function Or(t) {
    (delete t[le], delete t[xe], delete t[zr], delete t[ag], delete t[lg]);
  }
  function Ka(t) {
    var e = t[le];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if ((e = n[Za] || n[le])) {
        if (
          ((n = e.alternate),
          e.child !== null || (n !== null && n.child !== null))
        )
          for (t = Ym(t); t !== null; ) {
            if ((n = t[le])) return n;
            t = Ym(t);
          }
        return e;
      }
      ((t = n), (n = t.parentNode));
    }
    return null;
  }
  function Ja(t) {
    if ((t = t[le] || t[Za])) {
      var e = t.tag;
      if (
        e === 5 ||
        e === 6 ||
        e === 13 ||
        e === 31 ||
        e === 26 ||
        e === 27 ||
        e === 3
      )
        return t;
    }
    return null;
  }
  function Ql(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(u(33));
  }
  function Wa(t) {
    var e = t[yc];
    return (
      e ||
        (e = t[yc] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function te(t) {
    t[Vl] = !0;
  }
  var vc = new Set(),
    bc = {};
  function xa(t, e) {
    ($a(t, e), $a(t + "Capture", e));
  }
  function $a(t, e) {
    for (bc[t] = e, t = 0; t < e.length; t++) vc.add(e[t]);
  }
  var ig = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    xc = {},
    Sc = {};
  function og(t) {
    return _e.call(Sc, t)
      ? !0
      : _e.call(xc, t)
        ? !1
        : ig.test(t)
          ? (Sc[t] = !0)
          : ((xc[t] = !0), !1);
  }
  function ki(t, e, n) {
    if (og(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + n);
      }
  }
  function Vi(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + n);
    }
  }
  function pn(t, e, n, a) {
    if (a === null) t.removeAttribute(n);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, "" + a);
    }
  }
  function Le(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Ec(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function rg(t, e, n) {
    var a = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
    if (
      !t.hasOwnProperty(e) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var l = a.get,
        o = a.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (c) {
            ((n = "" + c), o.call(this, c));
          },
        }),
        Object.defineProperty(t, e, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return n;
          },
          setValue: function (c) {
            n = "" + c;
          },
          stopTracking: function () {
            ((t._valueTracker = null), delete t[e]);
          },
        }
      );
    }
  }
  function _r(t) {
    if (!t._valueTracker) {
      var e = Ec(t) ? "checked" : "value";
      t._valueTracker = rg(t, e, "" + t[e]);
    }
  }
  function wc(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(),
      a = "";
    return (
      t && (a = Ec(t) ? (t.checked ? "true" : "false") : t.value),
      (t = a),
      t !== n ? (e.setValue(t), !0) : !1
    );
  }
  function Qi(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var ug = /[\n"\\]/g;
  function Ye(t) {
    return t.replace(ug, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function Mr(t, e, n, a, l, o, c, m) {
    ((t.name = ""),
      c != null &&
      typeof c != "function" &&
      typeof c != "symbol" &&
      typeof c != "boolean"
        ? (t.type = c)
        : t.removeAttribute("type"),
      e != null
        ? c === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + Le(e))
          : t.value !== "" + Le(e) && (t.value = "" + Le(e))
        : (c !== "submit" && c !== "reset") || t.removeAttribute("value"),
      e != null
        ? Cr(t, c, Le(e))
        : n != null
          ? Cr(t, c, Le(n))
          : a != null && t.removeAttribute("value"),
      l == null && o != null && (t.defaultChecked = !!o),
      l != null &&
        (t.checked = l && typeof l != "function" && typeof l != "symbol"),
      m != null &&
      typeof m != "function" &&
      typeof m != "symbol" &&
      typeof m != "boolean"
        ? (t.name = "" + Le(m))
        : t.removeAttribute("name"));
  }
  function Tc(t, e, n, a, l, o, c, m) {
    if (
      (o != null &&
        typeof o != "function" &&
        typeof o != "symbol" &&
        typeof o != "boolean" &&
        (t.type = o),
      e != null || n != null)
    ) {
      if (!((o !== "submit" && o !== "reset") || e != null)) {
        _r(t);
        return;
      }
      ((n = n != null ? "" + Le(n) : ""),
        (e = e != null ? "" + Le(e) : n),
        m || e === t.value || (t.value = e),
        (t.defaultValue = e));
    }
    ((a = a ?? l),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (t.checked = m ? t.checked : !!a),
      (t.defaultChecked = !!a),
      c != null &&
        typeof c != "function" &&
        typeof c != "symbol" &&
        typeof c != "boolean" &&
        (t.name = c),
      _r(t));
  }
  function Cr(t, e, n) {
    (e === "number" && Qi(t.ownerDocument) === t) ||
      t.defaultValue === "" + n ||
      (t.defaultValue = "" + n);
  }
  function Fa(t, e, n, a) {
    if (((t = t.options), e)) {
      e = {};
      for (var l = 0; l < n.length; l++) e["$" + n[l]] = !0;
      for (n = 0; n < t.length; n++)
        ((l = e.hasOwnProperty("$" + t[n].value)),
          t[n].selected !== l && (t[n].selected = l),
          l && a && (t[n].defaultSelected = !0));
    } else {
      for (n = "" + Le(n), e = null, l = 0; l < t.length; l++) {
        if (t[l].value === n) {
          ((t[l].selected = !0), a && (t[l].defaultSelected = !0));
          return;
        }
        e !== null || t[l].disabled || (e = t[l]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Ac(t, e, n) {
    if (
      e != null &&
      ((e = "" + Le(e)), e !== t.value && (t.value = e), n == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + Le(n) : "";
  }
  function zc(t, e, n, a) {
    if (e == null) {
      if (a != null) {
        if (n != null) throw Error(u(92));
        if (xt(a)) {
          if (1 < a.length) throw Error(u(93));
          a = a[0];
        }
        n = a;
      }
      (n == null && (n = ""), (e = n));
    }
    ((n = Le(e)),
      (t.defaultValue = n),
      (a = t.textContent),
      a === n && a !== "" && a !== null && (t.value = a),
      _r(t));
  }
  function Pa(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var sg = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function Oc(t, e, n) {
    var a = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? a
        ? t.setProperty(e, "")
        : e === "float"
          ? (t.cssFloat = "")
          : (t[e] = "")
      : a
        ? t.setProperty(e, n)
        : typeof n != "number" || n === 0 || sg.has(e)
          ? e === "float"
            ? (t.cssFloat = n)
            : (t[e] = ("" + n).trim())
          : (t[e] = n + "px");
  }
  function _c(t, e, n) {
    if (e != null && typeof e != "object") throw Error(u(62));
    if (((t = t.style), n != null)) {
      for (var a in n)
        !n.hasOwnProperty(a) ||
          (e != null && e.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? t.setProperty(a, "")
            : a === "float"
              ? (t.cssFloat = "")
              : (t[a] = ""));
      for (var l in e)
        ((a = e[l]), e.hasOwnProperty(l) && n[l] !== a && Oc(t, l, a));
    } else for (var o in e) e.hasOwnProperty(o) && Oc(t, o, e[o]);
  }
  function Rr(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var cg = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    fg =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Zi(t) {
    return fg.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  function yn() {}
  var Nr = null;
  function Dr(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var Ia = null,
    tl = null;
  function Mc(t) {
    var e = Ja(t);
    if (e && (t = e.stateNode)) {
      var n = t[xe] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (Mr(
              t,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name,
            ),
            (e = n.name),
            n.type === "radio" && e != null)
          ) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + Ye("" + e) + '"][type="radio"]',
              ),
                e = 0;
              e < n.length;
              e++
            ) {
              var a = n[e];
              if (a !== t && a.form === t.form) {
                var l = a[xe] || null;
                if (!l) throw Error(u(90));
                Mr(
                  a,
                  l.value,
                  l.defaultValue,
                  l.defaultValue,
                  l.checked,
                  l.defaultChecked,
                  l.type,
                  l.name,
                );
              }
            }
            for (e = 0; e < n.length; e++)
              ((a = n[e]), a.form === t.form && wc(a));
          }
          break t;
        case "textarea":
          Ac(t, n.value, n.defaultValue);
          break t;
        case "select":
          ((e = n.value), e != null && Fa(t, !!n.multiple, e, !1));
      }
    }
  }
  var Hr = !1;
  function Cc(t, e, n) {
    if (Hr) return t(e, n);
    Hr = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (
        ((Hr = !1),
        (Ia !== null || tl !== null) &&
          (Ho(), Ia && ((e = Ia), (t = tl), (tl = Ia = null), Mc(e), t)))
      )
        for (e = 0; e < t.length; e++) Mc(t[e]);
    }
  }
  function Zl(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var a = n[xe] || null;
    if (a === null) return null;
    n = a[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((a = !a.disabled) ||
          ((t = t.type),
          (a = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !a));
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function") throw Error(u(231, e, typeof n));
    return n;
  }
  var vn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    jr = !1;
  if (vn)
    try {
      var Kl = {};
      (Object.defineProperty(Kl, "passive", {
        get: function () {
          jr = !0;
        },
      }),
        window.addEventListener("test", Kl, Kl),
        window.removeEventListener("test", Kl, Kl));
    } catch {
      jr = !1;
    }
  var Xn = null,
    Br = null,
    Ki = null;
  function Rc() {
    if (Ki) return Ki;
    var t,
      e = Br,
      n = e.length,
      a,
      l = "value" in Xn ? Xn.value : Xn.textContent,
      o = l.length;
    for (t = 0; t < n && e[t] === l[t]; t++);
    var c = n - t;
    for (a = 1; a <= c && e[n - a] === l[o - a]; a++);
    return (Ki = l.slice(t, 1 < a ? 1 - a : void 0));
  }
  function Ji(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Wi() {
    return !0;
  }
  function Nc() {
    return !1;
  }
  function Se(t) {
    function e(n, a, l, o, c) {
      ((this._reactName = n),
        (this._targetInst = l),
        (this.type = a),
        (this.nativeEvent = o),
        (this.target = c),
        (this.currentTarget = null));
      for (var m in t)
        t.hasOwnProperty(m) && ((n = t[m]), (this[m] = n ? n(o) : o[m]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? Wi
          : Nc),
        (this.isPropagationStopped = Nc),
        this
      );
    }
    return (
      h(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Wi));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Wi));
        },
        persist: function () {},
        isPersistent: Wi,
      }),
      e
    );
  }
  var Sa = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    $i = Se(Sa),
    Jl = h({}, Sa, { view: 0, detail: 0 }),
    dg = Se(Jl),
    Ur,
    Lr,
    Wl,
    Fi = h({}, Jl, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: qr,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== Wl &&
              (Wl && t.type === "mousemove"
                ? ((Ur = t.screenX - Wl.screenX), (Lr = t.screenY - Wl.screenY))
                : (Lr = Ur = 0),
              (Wl = t)),
            Ur);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : Lr;
      },
    }),
    Dc = Se(Fi),
    mg = h({}, Fi, { dataTransfer: 0 }),
    hg = Se(mg),
    gg = h({}, Jl, { relatedTarget: 0 }),
    Yr = Se(gg),
    pg = h({}, Sa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    yg = Se(pg),
    vg = h({}, Sa, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    bg = Se(vg),
    xg = h({}, Sa, { data: 0 }),
    Hc = Se(xg),
    Sg = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Eg = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    wg = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Tg(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = wg[t])
        ? !!e[t]
        : !1;
  }
  function qr() {
    return Tg;
  }
  var Ag = h({}, Jl, {
      key: function (t) {
        if (t.key) {
          var e = Sg[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = Ji(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
            ? Eg[t.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: qr,
      charCode: function (t) {
        return t.type === "keypress" ? Ji(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? Ji(t)
          : t.type === "keydown" || t.type === "keyup"
            ? t.keyCode
            : 0;
      },
    }),
    zg = Se(Ag),
    Og = h({}, Fi, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    jc = Se(Og),
    _g = h({}, Jl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: qr,
    }),
    Mg = Se(_g),
    Cg = h({}, Sa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Rg = Se(Cg),
    Ng = h({}, Fi, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
            ? -t.wheelDeltaX
            : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
            ? -t.wheelDeltaY
            : "wheelDelta" in t
              ? -t.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Dg = Se(Ng),
    Hg = h({}, Sa, { newState: 0, oldState: 0 }),
    jg = Se(Hg),
    Bg = [9, 13, 27, 32],
    Gr = vn && "CompositionEvent" in window,
    $l = null;
  vn && "documentMode" in document && ($l = document.documentMode);
  var Ug = vn && "TextEvent" in window && !$l,
    Bc = vn && (!Gr || ($l && 8 < $l && 11 >= $l)),
    Uc = " ",
    Lc = !1;
  function Yc(t, e) {
    switch (t) {
      case "keyup":
        return Bg.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function qc(t) {
    return (
      (t = t.detail),
      typeof t == "object" && "data" in t ? t.data : null
    );
  }
  var el = !1;
  function Lg(t, e) {
    switch (t) {
      case "compositionend":
        return qc(e);
      case "keypress":
        return e.which !== 32 ? null : ((Lc = !0), Uc);
      case "textInput":
        return ((t = e.data), t === Uc && Lc ? null : t);
      default:
        return null;
    }
  }
  function Yg(t, e) {
    if (el)
      return t === "compositionend" || (!Gr && Yc(t, e))
        ? ((t = Rc()), (Ki = Br = Xn = null), (el = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return Bc && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var qg = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Gc(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!qg[t.type] : e === "textarea";
  }
  function Xc(t, e, n, a) {
    (Ia ? (tl ? tl.push(a) : (tl = [a])) : (Ia = a),
      (e = Go(e, "onChange")),
      0 < e.length &&
        ((n = new $i("onChange", "change", null, n, a)),
        t.push({ event: n, listeners: e })));
  }
  var Fl = null,
    Pl = null;
  function Gg(t) {
    Am(t, 0);
  }
  function Pi(t) {
    var e = Ql(t);
    if (wc(e)) return t;
  }
  function kc(t, e) {
    if (t === "change") return e;
  }
  var Vc = !1;
  if (vn) {
    var Xr;
    if (vn) {
      var kr = "oninput" in document;
      if (!kr) {
        var Qc = document.createElement("div");
        (Qc.setAttribute("oninput", "return;"),
          (kr = typeof Qc.oninput == "function"));
      }
      Xr = kr;
    } else Xr = !1;
    Vc = Xr && (!document.documentMode || 9 < document.documentMode);
  }
  function Zc() {
    Fl && (Fl.detachEvent("onpropertychange", Kc), (Pl = Fl = null));
  }
  function Kc(t) {
    if (t.propertyName === "value" && Pi(Pl)) {
      var e = [];
      (Xc(e, Pl, t, Dr(t)), Cc(Gg, e));
    }
  }
  function Xg(t, e, n) {
    t === "focusin"
      ? (Zc(), (Fl = e), (Pl = n), Fl.attachEvent("onpropertychange", Kc))
      : t === "focusout" && Zc();
  }
  function kg(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Pi(Pl);
  }
  function Vg(t, e) {
    if (t === "click") return Pi(e);
  }
  function Qg(t, e) {
    if (t === "input" || t === "change") return Pi(e);
  }
  function Zg(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var Me = typeof Object.is == "function" ? Object.is : Zg;
  function Il(t, e) {
    if (Me(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var n = Object.keys(t),
      a = Object.keys(e);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var l = n[a];
      if (!_e.call(e, l) || !Me(t[l], e[l])) return !1;
    }
    return !0;
  }
  function Jc(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Wc(t, e) {
    var n = Jc(t);
    t = 0;
    for (var a; n; ) {
      if (n.nodeType === 3) {
        if (((a = t + n.textContent.length), t <= e && a >= e))
          return { node: n, offset: e - t };
        t = a;
      }
      t: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Jc(n);
    }
  }
  function $c(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
          ? !1
          : e && e.nodeType === 3
            ? $c(t, e.parentNode)
            : "contains" in t
              ? t.contains(e)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(e) & 16)
                : !1
      : !1;
  }
  function Fc(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = Qi(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = Qi(t.document);
    }
    return e;
  }
  function Vr(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var Kg = vn && "documentMode" in document && 11 >= document.documentMode,
    nl = null,
    Qr = null,
    ti = null,
    Zr = !1;
  function Pc(t, e, n) {
    var a =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Zr ||
      nl == null ||
      nl !== Qi(a) ||
      ((a = nl),
      "selectionStart" in a && Vr(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (ti && Il(ti, a)) ||
        ((ti = a),
        (a = Go(Qr, "onSelect")),
        0 < a.length &&
          ((e = new $i("onSelect", "select", null, e, n)),
          t.push({ event: e, listeners: a }),
          (e.target = nl))));
  }
  function Ea(t, e) {
    var n = {};
    return (
      (n[t.toLowerCase()] = e.toLowerCase()),
      (n["Webkit" + t] = "webkit" + e),
      (n["Moz" + t] = "moz" + e),
      n
    );
  }
  var al = {
      animationend: Ea("Animation", "AnimationEnd"),
      animationiteration: Ea("Animation", "AnimationIteration"),
      animationstart: Ea("Animation", "AnimationStart"),
      transitionrun: Ea("Transition", "TransitionRun"),
      transitionstart: Ea("Transition", "TransitionStart"),
      transitioncancel: Ea("Transition", "TransitionCancel"),
      transitionend: Ea("Transition", "TransitionEnd"),
    },
    Kr = {},
    Ic = {};
  vn &&
    ((Ic = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete al.animationend.animation,
      delete al.animationiteration.animation,
      delete al.animationstart.animation),
    "TransitionEvent" in window || delete al.transitionend.transition);
  function wa(t) {
    if (Kr[t]) return Kr[t];
    if (!al[t]) return t;
    var e = al[t],
      n;
    for (n in e) if (e.hasOwnProperty(n) && n in Ic) return (Kr[t] = e[n]);
    return t;
  }
  var tf = wa("animationend"),
    ef = wa("animationiteration"),
    nf = wa("animationstart"),
    Jg = wa("transitionrun"),
    Wg = wa("transitionstart"),
    $g = wa("transitioncancel"),
    af = wa("transitionend"),
    lf = new Map(),
    Jr =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Jr.push("scrollEnd");
  function Fe(t, e) {
    (lf.set(t, e), xa(e, [t]));
  }
  var Ii =
      typeof reportError == "function"
        ? reportError
        : function (t) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var e = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof t == "object" &&
                  t !== null &&
                  typeof t.message == "string"
                    ? String(t.message)
                    : String(t),
                error: t,
              });
              if (!window.dispatchEvent(e)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", t);
              return;
            }
            console.error(t);
          },
    qe = [],
    ll = 0,
    Wr = 0;
  function to() {
    for (var t = ll, e = (Wr = ll = 0); e < t; ) {
      var n = qe[e];
      qe[e++] = null;
      var a = qe[e];
      qe[e++] = null;
      var l = qe[e];
      qe[e++] = null;
      var o = qe[e];
      if (((qe[e++] = null), a !== null && l !== null)) {
        var c = a.pending;
        (c === null ? (l.next = l) : ((l.next = c.next), (c.next = l)),
          (a.pending = l));
      }
      o !== 0 && of(n, l, o);
    }
  }
  function eo(t, e, n, a) {
    ((qe[ll++] = t),
      (qe[ll++] = e),
      (qe[ll++] = n),
      (qe[ll++] = a),
      (Wr |= a),
      (t.lanes |= a),
      (t = t.alternate),
      t !== null && (t.lanes |= a));
  }
  function $r(t, e, n, a) {
    return (eo(t, e, n, a), no(t));
  }
  function Ta(t, e) {
    return (eo(t, null, null, e), no(t));
  }
  function of(t, e, n) {
    t.lanes |= n;
    var a = t.alternate;
    a !== null && (a.lanes |= n);
    for (var l = !1, o = t.return; o !== null; )
      ((o.childLanes |= n),
        (a = o.alternate),
        a !== null && (a.childLanes |= n),
        o.tag === 22 &&
          ((t = o.stateNode), t === null || t._visibility & 1 || (l = !0)),
        (t = o),
        (o = o.return));
    return t.tag === 3
      ? ((o = t.stateNode),
        l &&
          e !== null &&
          ((l = 31 - se(n)),
          (t = o.hiddenUpdates),
          (a = t[l]),
          a === null ? (t[l] = [e]) : a.push(e),
          (e.lane = n | 536870912)),
        o)
      : null;
  }
  function no(t) {
    if (50 < Ei) throw ((Ei = 0), (is = null), Error(u(185)));
    for (var e = t.return; e !== null; ) ((t = e), (e = t.return));
    return t.tag === 3 ? t.stateNode : null;
  }
  var il = {};
  function Fg(t, e, n, a) {
    ((this.tag = t),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Ce(t, e, n, a) {
    return new Fg(t, e, n, a);
  }
  function Fr(t) {
    return ((t = t.prototype), !(!t || !t.isReactComponent));
  }
  function bn(t, e) {
    var n = t.alternate;
    return (
      n === null
        ? ((n = Ce(t.tag, e, t.key, t.mode)),
          (n.elementType = t.elementType),
          (n.type = t.type),
          (n.stateNode = t.stateNode),
          (n.alternate = t),
          (t.alternate = n))
        : ((n.pendingProps = e),
          (n.type = t.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = t.flags & 65011712),
      (n.childLanes = t.childLanes),
      (n.lanes = t.lanes),
      (n.child = t.child),
      (n.memoizedProps = t.memoizedProps),
      (n.memoizedState = t.memoizedState),
      (n.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (n.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (n.sibling = t.sibling),
      (n.index = t.index),
      (n.ref = t.ref),
      (n.refCleanup = t.refCleanup),
      n
    );
  }
  function rf(t, e) {
    t.flags &= 65011714;
    var n = t.alternate;
    return (
      n === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = n.childLanes),
          (t.lanes = n.lanes),
          (t.child = n.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = n.memoizedProps),
          (t.memoizedState = n.memoizedState),
          (t.updateQueue = n.updateQueue),
          (t.type = n.type),
          (e = n.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function ao(t, e, n, a, l, o) {
    var c = 0;
    if (((a = t), typeof t == "function")) Fr(t) && (c = 1);
    else if (typeof t == "string")
      c = ny(t, n, V.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
          ? 27
          : 5;
    else
      t: switch (t) {
        case mt:
          return (
            (t = Ce(31, n, e, l)),
            (t.elementType = mt),
            (t.lanes = o),
            t
          );
        case Y:
          return Aa(n.children, l, o, e);
        case k:
          ((c = 8), (l |= 24));
          break;
        case R:
          return (
            (t = Ce(12, n, e, l | 2)),
            (t.elementType = R),
            (t.lanes = o),
            t
          );
        case I:
          return ((t = Ce(13, n, e, l)), (t.elementType = I), (t.lanes = o), t);
        case lt:
          return (
            (t = Ce(19, n, e, l)),
            (t.elementType = lt),
            (t.lanes = o),
            t
          );
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case J:
                c = 10;
                break t;
              case W:
                c = 9;
                break t;
              case $:
                c = 11;
                break t;
              case Q:
                c = 14;
                break t;
              case Z:
                ((c = 16), (a = null));
                break t;
            }
          ((c = 29),
            (n = Error(u(130, t === null ? "null" : typeof t, ""))),
            (a = null));
      }
    return (
      (e = Ce(c, n, e, l)),
      (e.elementType = t),
      (e.type = a),
      (e.lanes = o),
      e
    );
  }
  function Aa(t, e, n, a) {
    return ((t = Ce(7, t, a, e)), (t.lanes = n), t);
  }
  function Pr(t, e, n) {
    return ((t = Ce(6, t, null, e)), (t.lanes = n), t);
  }
  function uf(t) {
    var e = Ce(18, null, null, 0);
    return ((e.stateNode = t), e);
  }
  function Ir(t, e, n) {
    return (
      (e = Ce(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = n),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var sf = new WeakMap();
  function Ge(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = sf.get(t);
      return n !== void 0
        ? n
        : ((e = { value: t, source: e, stack: Yl(e) }), sf.set(t, e), e);
    }
    return { value: t, source: e, stack: Yl(e) };
  }
  var ol = [],
    rl = 0,
    lo = null,
    ei = 0,
    Xe = [],
    ke = 0,
    kn = null,
    ln = 1,
    on = "";
  function xn(t, e) {
    ((ol[rl++] = ei), (ol[rl++] = lo), (lo = t), (ei = e));
  }
  function cf(t, e, n) {
    ((Xe[ke++] = ln), (Xe[ke++] = on), (Xe[ke++] = kn), (kn = t));
    var a = ln;
    t = on;
    var l = 32 - se(a) - 1;
    ((a &= ~(1 << l)), (n += 1));
    var o = 32 - se(e) + l;
    if (30 < o) {
      var c = l - (l % 5);
      ((o = (a & ((1 << c) - 1)).toString(32)),
        (a >>= c),
        (l -= c),
        (ln = (1 << (32 - se(e) + l)) | (n << l) | a),
        (on = o + t));
    } else ((ln = (1 << o) | (n << l) | a), (on = t));
  }
  function tu(t) {
    t.return !== null && (xn(t, 1), cf(t, 1, 0));
  }
  function eu(t) {
    for (; t === lo; )
      ((lo = ol[--rl]), (ol[rl] = null), (ei = ol[--rl]), (ol[rl] = null));
    for (; t === kn; )
      ((kn = Xe[--ke]),
        (Xe[ke] = null),
        (on = Xe[--ke]),
        (Xe[ke] = null),
        (ln = Xe[--ke]),
        (Xe[ke] = null));
  }
  function ff(t, e) {
    ((Xe[ke++] = ln),
      (Xe[ke++] = on),
      (Xe[ke++] = kn),
      (ln = e.id),
      (on = e.overflow),
      (kn = t));
  }
  var ie = null,
    Lt = null,
    Ot = !1,
    Vn = null,
    Ve = !1,
    nu = Error(u(519));
  function Qn(t) {
    var e = Error(
      u(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (ni(Ge(e, t)), nu);
  }
  function df(t) {
    var e = t.stateNode,
      n = t.type,
      a = t.memoizedProps;
    switch (((e[le] = t), (e[xe] = a), n)) {
      case "dialog":
        (wt("cancel", e), wt("close", e));
        break;
      case "iframe":
      case "object":
      case "embed":
        wt("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Ti.length; n++) wt(Ti[n], e);
        break;
      case "source":
        wt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        (wt("error", e), wt("load", e));
        break;
      case "details":
        wt("toggle", e);
        break;
      case "input":
        (wt("invalid", e),
          Tc(
            e,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0,
          ));
        break;
      case "select":
        wt("invalid", e);
        break;
      case "textarea":
        (wt("invalid", e), zc(e, a.value, a.defaultValue, a.children));
    }
    ((n = a.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      e.textContent === "" + n ||
      a.suppressHydrationWarning === !0 ||
      Mm(e.textContent, n)
        ? (a.popover != null && (wt("beforetoggle", e), wt("toggle", e)),
          a.onScroll != null && wt("scroll", e),
          a.onScrollEnd != null && wt("scrollend", e),
          a.onClick != null && (e.onclick = yn),
          (e = !0))
        : (e = !1),
      e || Qn(t, !0));
  }
  function mf(t) {
    for (ie = t.return; ie; )
      switch (ie.tag) {
        case 5:
        case 31:
        case 13:
          Ve = !1;
          return;
        case 27:
        case 3:
          Ve = !0;
          return;
        default:
          ie = ie.return;
      }
  }
  function ul(t) {
    if (t !== ie) return !1;
    if (!Ot) return (mf(t), (Ot = !0), !1);
    var e = t.tag,
      n;
    if (
      ((n = e !== 3 && e !== 27) &&
        ((n = e === 5) &&
          ((n = t.type),
          (n =
            !(n !== "form" && n !== "button") || xs(t.type, t.memoizedProps))),
        (n = !n)),
      n && Lt && Qn(t),
      mf(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(u(317));
      Lt = Lm(t);
    } else if (e === 31) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(u(317));
      Lt = Lm(t);
    } else
      e === 27
        ? ((e = Lt), ia(t.type) ? ((t = As), (As = null), (Lt = t)) : (Lt = e))
        : (Lt = ie ? Ze(t.stateNode.nextSibling) : null);
    return !0;
  }
  function za() {
    ((Lt = ie = null), (Ot = !1));
  }
  function au() {
    var t = Vn;
    return (
      t !== null &&
        (Ae === null ? (Ae = t) : Ae.push.apply(Ae, t), (Vn = null)),
      t
    );
  }
  function ni(t) {
    Vn === null ? (Vn = [t]) : Vn.push(t);
  }
  var lu = S(null),
    Oa = null,
    Sn = null;
  function Zn(t, e, n) {
    (B(lu, e._currentValue), (e._currentValue = n));
  }
  function En(t) {
    ((t._currentValue = lu.current), U(lu));
  }
  function iu(t, e, n) {
    for (; t !== null; ) {
      var a = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), a !== null && (a.childLanes |= e))
          : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e),
        t === n)
      )
        break;
      t = t.return;
    }
  }
  function ou(t, e, n, a) {
    var l = t.child;
    for (l !== null && (l.return = t); l !== null; ) {
      var o = l.dependencies;
      if (o !== null) {
        var c = l.child;
        o = o.firstContext;
        t: for (; o !== null; ) {
          var m = o;
          o = l;
          for (var x = 0; x < e.length; x++)
            if (m.context === e[x]) {
              ((o.lanes |= n),
                (m = o.alternate),
                m !== null && (m.lanes |= n),
                iu(o.return, n, t),
                a || (c = null));
              break t;
            }
          o = m.next;
        }
      } else if (l.tag === 18) {
        if (((c = l.return), c === null)) throw Error(u(341));
        ((c.lanes |= n),
          (o = c.alternate),
          o !== null && (o.lanes |= n),
          iu(c, n, t),
          (c = null));
      } else c = l.child;
      if (c !== null) c.return = l;
      else
        for (c = l; c !== null; ) {
          if (c === t) {
            c = null;
            break;
          }
          if (((l = c.sibling), l !== null)) {
            ((l.return = c.return), (c = l));
            break;
          }
          c = c.return;
        }
      l = c;
    }
  }
  function sl(t, e, n, a) {
    t = null;
    for (var l = e, o = !1; l !== null; ) {
      if (!o) {
        if ((l.flags & 524288) !== 0) o = !0;
        else if ((l.flags & 262144) !== 0) break;
      }
      if (l.tag === 10) {
        var c = l.alternate;
        if (c === null) throw Error(u(387));
        if (((c = c.memoizedProps), c !== null)) {
          var m = l.type;
          Me(l.pendingProps.value, c.value) ||
            (t !== null ? t.push(m) : (t = [m]));
        }
      } else if (l === nt.current) {
        if (((c = l.alternate), c === null)) throw Error(u(387));
        c.memoizedState.memoizedState !== l.memoizedState.memoizedState &&
          (t !== null ? t.push(Mi) : (t = [Mi]));
      }
      l = l.return;
    }
    (t !== null && ou(e, t, n, a), (e.flags |= 262144));
  }
  function io(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Me(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function _a(t) {
    ((Oa = t),
      (Sn = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null));
  }
  function oe(t) {
    return hf(Oa, t);
  }
  function oo(t, e) {
    return (Oa === null && _a(t), hf(t, e));
  }
  function hf(t, e) {
    var n = e._currentValue;
    if (((e = { context: e, memoizedValue: n, next: null }), Sn === null)) {
      if (t === null) throw Error(u(308));
      ((Sn = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288));
    } else Sn = Sn.next = e;
    return n;
  }
  var Pg =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (n, a) {
                  t.push(a);
                },
              });
            this.abort = function () {
              ((e.aborted = !0),
                t.forEach(function (n) {
                  return n();
                }));
            };
          },
    Ig = i.unstable_scheduleCallback,
    tp = i.unstable_NormalPriority,
    Kt = {
      $$typeof: J,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function ru() {
    return { controller: new Pg(), data: new Map(), refCount: 0 };
  }
  function ai(t) {
    (t.refCount--,
      t.refCount === 0 &&
        Ig(tp, function () {
          t.controller.abort();
        }));
  }
  var li = null,
    uu = 0,
    cl = 0,
    fl = null;
  function ep(t, e) {
    if (li === null) {
      var n = (li = []);
      ((uu = 0),
        (cl = fs()),
        (fl = {
          status: "pending",
          value: void 0,
          then: function (a) {
            n.push(a);
          },
        }));
    }
    return (uu++, e.then(gf, gf), e);
  }
  function gf() {
    if (--uu === 0 && li !== null) {
      fl !== null && (fl.status = "fulfilled");
      var t = li;
      ((li = null), (cl = 0), (fl = null));
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function np(t, e) {
    var n = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (l) {
          n.push(l);
        },
      };
    return (
      t.then(
        function () {
          ((a.status = "fulfilled"), (a.value = e));
          for (var l = 0; l < n.length; l++) (0, n[l])(e);
        },
        function (l) {
          for (a.status = "rejected", a.reason = l, l = 0; l < n.length; l++)
            (0, n[l])(void 0);
        },
      ),
      a
    );
  }
  var pf = w.S;
  w.S = function (t, e) {
    ((Id = he()),
      typeof e == "object" &&
        e !== null &&
        typeof e.then == "function" &&
        ep(t, e),
      pf !== null && pf(t, e));
  };
  var Ma = S(null);
  function su() {
    var t = Ma.current;
    return t !== null ? t : Ut.pooledCache;
  }
  function ro(t, e) {
    e === null ? B(Ma, Ma.current) : B(Ma, e.pool);
  }
  function yf() {
    var t = su();
    return t === null ? null : { parent: Kt._currentValue, pool: t };
  }
  var dl = Error(u(460)),
    cu = Error(u(474)),
    uo = Error(u(542)),
    so = { then: function () {} };
  function vf(t) {
    return ((t = t.status), t === "fulfilled" || t === "rejected");
  }
  function bf(t, e, n) {
    switch (
      ((n = t[n]),
      n === void 0 ? t.push(e) : n !== e && (e.then(yn, yn), (e = n)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), Sf(t), t);
      default:
        if (typeof e.status == "string") e.then(yn, yn);
        else {
          if (((t = Ut), t !== null && 100 < t.shellSuspendCounter))
            throw Error(u(482));
          ((t = e),
            (t.status = "pending"),
            t.then(
              function (a) {
                if (e.status === "pending") {
                  var l = e;
                  ((l.status = "fulfilled"), (l.value = a));
                }
              },
              function (a) {
                if (e.status === "pending") {
                  var l = e;
                  ((l.status = "rejected"), (l.reason = a));
                }
              },
            ));
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), Sf(t), t);
        }
        throw ((Ra = e), dl);
    }
  }
  function Ca(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function"
        ? ((Ra = n), dl)
        : n;
    }
  }
  var Ra = null;
  function xf() {
    if (Ra === null) throw Error(u(459));
    var t = Ra;
    return ((Ra = null), t);
  }
  function Sf(t) {
    if (t === dl || t === uo) throw Error(u(483));
  }
  var ml = null,
    ii = 0;
  function co(t) {
    var e = ii;
    return ((ii += 1), ml === null && (ml = []), bf(ml, t, e));
  }
  function oi(t, e) {
    ((e = e.props.ref), (t.ref = e !== void 0 ? e : null));
  }
  function fo(t, e) {
    throw e.$$typeof === A
      ? Error(u(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          u(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t,
          ),
        ));
  }
  function Ef(t) {
    function e(T, E) {
      if (t) {
        var O = T.deletions;
        O === null ? ((T.deletions = [E]), (T.flags |= 16)) : O.push(E);
      }
    }
    function n(T, E) {
      if (!t) return null;
      for (; E !== null; ) (e(T, E), (E = E.sibling));
      return null;
    }
    function a(T) {
      for (var E = new Map(); T !== null; )
        (T.key !== null ? E.set(T.key, T) : E.set(T.index, T), (T = T.sibling));
      return E;
    }
    function l(T, E) {
      return ((T = bn(T, E)), (T.index = 0), (T.sibling = null), T);
    }
    function o(T, E, O) {
      return (
        (T.index = O),
        t
          ? ((O = T.alternate),
            O !== null
              ? ((O = O.index), O < E ? ((T.flags |= 67108866), E) : O)
              : ((T.flags |= 67108866), E))
          : ((T.flags |= 1048576), E)
      );
    }
    function c(T) {
      return (t && T.alternate === null && (T.flags |= 67108866), T);
    }
    function m(T, E, O, q) {
      return E === null || E.tag !== 6
        ? ((E = Pr(O, T.mode, q)), (E.return = T), E)
        : ((E = l(E, O)), (E.return = T), E);
    }
    function x(T, E, O, q) {
      var rt = O.type;
      return rt === Y
        ? j(T, E, O.props.children, q, O.key)
        : E !== null &&
            (E.elementType === rt ||
              (typeof rt == "object" &&
                rt !== null &&
                rt.$$typeof === Z &&
                Ca(rt) === E.type))
          ? ((E = l(E, O.props)), oi(E, O), (E.return = T), E)
          : ((E = ao(O.type, O.key, O.props, null, T.mode, q)),
            oi(E, O),
            (E.return = T),
            E);
    }
    function _(T, E, O, q) {
      return E === null ||
        E.tag !== 4 ||
        E.stateNode.containerInfo !== O.containerInfo ||
        E.stateNode.implementation !== O.implementation
        ? ((E = Ir(O, T.mode, q)), (E.return = T), E)
        : ((E = l(E, O.children || [])), (E.return = T), E);
    }
    function j(T, E, O, q, rt) {
      return E === null || E.tag !== 7
        ? ((E = Aa(O, T.mode, q, rt)), (E.return = T), E)
        : ((E = l(E, O)), (E.return = T), E);
    }
    function X(T, E, O) {
      if (
        (typeof E == "string" && E !== "") ||
        typeof E == "number" ||
        typeof E == "bigint"
      )
        return ((E = Pr("" + E, T.mode, O)), (E.return = T), E);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case M:
            return (
              (O = ao(E.type, E.key, E.props, null, T.mode, O)),
              oi(O, E),
              (O.return = T),
              O
            );
          case N:
            return ((E = Ir(E, T.mode, O)), (E.return = T), E);
          case Z:
            return ((E = Ca(E)), X(T, E, O));
        }
        if (xt(E) || gt(E))
          return ((E = Aa(E, T.mode, O, null)), (E.return = T), E);
        if (typeof E.then == "function") return X(T, co(E), O);
        if (E.$$typeof === J) return X(T, oo(T, E), O);
        fo(T, E);
      }
      return null;
    }
    function C(T, E, O, q) {
      var rt = E !== null ? E.key : null;
      if (
        (typeof O == "string" && O !== "") ||
        typeof O == "number" ||
        typeof O == "bigint"
      )
        return rt !== null ? null : m(T, E, "" + O, q);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case M:
            return O.key === rt ? x(T, E, O, q) : null;
          case N:
            return O.key === rt ? _(T, E, O, q) : null;
          case Z:
            return ((O = Ca(O)), C(T, E, O, q));
        }
        if (xt(O) || gt(O)) return rt !== null ? null : j(T, E, O, q, null);
        if (typeof O.then == "function") return C(T, E, co(O), q);
        if (O.$$typeof === J) return C(T, E, oo(T, O), q);
        fo(T, O);
      }
      return null;
    }
    function H(T, E, O, q, rt) {
      if (
        (typeof q == "string" && q !== "") ||
        typeof q == "number" ||
        typeof q == "bigint"
      )
        return ((T = T.get(O) || null), m(E, T, "" + q, rt));
      if (typeof q == "object" && q !== null) {
        switch (q.$$typeof) {
          case M:
            return (
              (T = T.get(q.key === null ? O : q.key) || null),
              x(E, T, q, rt)
            );
          case N:
            return (
              (T = T.get(q.key === null ? O : q.key) || null),
              _(E, T, q, rt)
            );
          case Z:
            return ((q = Ca(q)), H(T, E, O, q, rt));
        }
        if (xt(q) || gt(q))
          return ((T = T.get(O) || null), j(E, T, q, rt, null));
        if (typeof q.then == "function") return H(T, E, O, co(q), rt);
        if (q.$$typeof === J) return H(T, E, O, oo(E, q), rt);
        fo(E, q);
      }
      return null;
    }
    function P(T, E, O, q) {
      for (
        var rt = null, Mt = null, at = E, yt = (E = 0), At = null;
        at !== null && yt < O.length;
        yt++
      ) {
        at.index > yt ? ((At = at), (at = null)) : (At = at.sibling);
        var Ct = C(T, at, O[yt], q);
        if (Ct === null) {
          at === null && (at = At);
          break;
        }
        (t && at && Ct.alternate === null && e(T, at),
          (E = o(Ct, E, yt)),
          Mt === null ? (rt = Ct) : (Mt.sibling = Ct),
          (Mt = Ct),
          (at = At));
      }
      if (yt === O.length) return (n(T, at), Ot && xn(T, yt), rt);
      if (at === null) {
        for (; yt < O.length; yt++)
          ((at = X(T, O[yt], q)),
            at !== null &&
              ((E = o(at, E, yt)),
              Mt === null ? (rt = at) : (Mt.sibling = at),
              (Mt = at)));
        return (Ot && xn(T, yt), rt);
      }
      for (at = a(at); yt < O.length; yt++)
        ((At = H(at, T, yt, O[yt], q)),
          At !== null &&
            (t &&
              At.alternate !== null &&
              at.delete(At.key === null ? yt : At.key),
            (E = o(At, E, yt)),
            Mt === null ? (rt = At) : (Mt.sibling = At),
            (Mt = At)));
      return (
        t &&
          at.forEach(function (ca) {
            return e(T, ca);
          }),
        Ot && xn(T, yt),
        rt
      );
    }
    function st(T, E, O, q) {
      if (O == null) throw Error(u(151));
      for (
        var rt = null,
          Mt = null,
          at = E,
          yt = (E = 0),
          At = null,
          Ct = O.next();
        at !== null && !Ct.done;
        yt++, Ct = O.next()
      ) {
        at.index > yt ? ((At = at), (at = null)) : (At = at.sibling);
        var ca = C(T, at, Ct.value, q);
        if (ca === null) {
          at === null && (at = At);
          break;
        }
        (t && at && ca.alternate === null && e(T, at),
          (E = o(ca, E, yt)),
          Mt === null ? (rt = ca) : (Mt.sibling = ca),
          (Mt = ca),
          (at = At));
      }
      if (Ct.done) return (n(T, at), Ot && xn(T, yt), rt);
      if (at === null) {
        for (; !Ct.done; yt++, Ct = O.next())
          ((Ct = X(T, Ct.value, q)),
            Ct !== null &&
              ((E = o(Ct, E, yt)),
              Mt === null ? (rt = Ct) : (Mt.sibling = Ct),
              (Mt = Ct)));
        return (Ot && xn(T, yt), rt);
      }
      for (at = a(at); !Ct.done; yt++, Ct = O.next())
        ((Ct = H(at, T, yt, Ct.value, q)),
          Ct !== null &&
            (t &&
              Ct.alternate !== null &&
              at.delete(Ct.key === null ? yt : Ct.key),
            (E = o(Ct, E, yt)),
            Mt === null ? (rt = Ct) : (Mt.sibling = Ct),
            (Mt = Ct)));
      return (
        t &&
          at.forEach(function (my) {
            return e(T, my);
          }),
        Ot && xn(T, yt),
        rt
      );
    }
    function Bt(T, E, O, q) {
      if (
        (typeof O == "object" &&
          O !== null &&
          O.type === Y &&
          O.key === null &&
          (O = O.props.children),
        typeof O == "object" && O !== null)
      ) {
        switch (O.$$typeof) {
          case M:
            t: {
              for (var rt = O.key; E !== null; ) {
                if (E.key === rt) {
                  if (((rt = O.type), rt === Y)) {
                    if (E.tag === 7) {
                      (n(T, E.sibling),
                        (q = l(E, O.props.children)),
                        (q.return = T),
                        (T = q));
                      break t;
                    }
                  } else if (
                    E.elementType === rt ||
                    (typeof rt == "object" &&
                      rt !== null &&
                      rt.$$typeof === Z &&
                      Ca(rt) === E.type)
                  ) {
                    (n(T, E.sibling),
                      (q = l(E, O.props)),
                      oi(q, O),
                      (q.return = T),
                      (T = q));
                    break t;
                  }
                  n(T, E);
                  break;
                } else e(T, E);
                E = E.sibling;
              }
              O.type === Y
                ? ((q = Aa(O.props.children, T.mode, q, O.key)),
                  (q.return = T),
                  (T = q))
                : ((q = ao(O.type, O.key, O.props, null, T.mode, q)),
                  oi(q, O),
                  (q.return = T),
                  (T = q));
            }
            return c(T);
          case N:
            t: {
              for (rt = O.key; E !== null; ) {
                if (E.key === rt)
                  if (
                    E.tag === 4 &&
                    E.stateNode.containerInfo === O.containerInfo &&
                    E.stateNode.implementation === O.implementation
                  ) {
                    (n(T, E.sibling),
                      (q = l(E, O.children || [])),
                      (q.return = T),
                      (T = q));
                    break t;
                  } else {
                    n(T, E);
                    break;
                  }
                else e(T, E);
                E = E.sibling;
              }
              ((q = Ir(O, T.mode, q)), (q.return = T), (T = q));
            }
            return c(T);
          case Z:
            return ((O = Ca(O)), Bt(T, E, O, q));
        }
        if (xt(O)) return P(T, E, O, q);
        if (gt(O)) {
          if (((rt = gt(O)), typeof rt != "function")) throw Error(u(150));
          return ((O = rt.call(O)), st(T, E, O, q));
        }
        if (typeof O.then == "function") return Bt(T, E, co(O), q);
        if (O.$$typeof === J) return Bt(T, E, oo(T, O), q);
        fo(T, O);
      }
      return (typeof O == "string" && O !== "") ||
        typeof O == "number" ||
        typeof O == "bigint"
        ? ((O = "" + O),
          E !== null && E.tag === 6
            ? (n(T, E.sibling), (q = l(E, O)), (q.return = T), (T = q))
            : (n(T, E), (q = Pr(O, T.mode, q)), (q.return = T), (T = q)),
          c(T))
        : n(T, E);
    }
    return function (T, E, O, q) {
      try {
        ii = 0;
        var rt = Bt(T, E, O, q);
        return ((ml = null), rt);
      } catch (at) {
        if (at === dl || at === uo) throw at;
        var Mt = Ce(29, at, null, T.mode);
        return ((Mt.lanes = q), (Mt.return = T), Mt);
      } finally {
      }
    };
  }
  var Na = Ef(!0),
    wf = Ef(!1),
    Kn = !1;
  function fu(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function du(t, e) {
    ((t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        }));
  }
  function Jn(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Wn(t, e, n) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (Rt & 2) !== 0)) {
      var l = a.pending;
      return (
        l === null ? (e.next = e) : ((e.next = l.next), (l.next = e)),
        (a.pending = e),
        (e = no(t)),
        of(t, null, n),
        e
      );
    }
    return (eo(t, a, e, n), no(t));
  }
  function ri(t, e, n) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194048) !== 0))
    ) {
      var a = e.lanes;
      ((a &= t.pendingLanes), (n |= a), (e.lanes = n), ve(t, n));
    }
  }
  function mu(t, e) {
    var n = t.updateQueue,
      a = t.alternate;
    if (a !== null && ((a = a.updateQueue), n === a)) {
      var l = null,
        o = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var c = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          (o === null ? (l = o = c) : (o = o.next = c), (n = n.next));
        } while (n !== null);
        o === null ? (l = o = e) : (o = o.next = e);
      } else l = o = e;
      ((n = {
        baseState: a.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: o,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (t.updateQueue = n));
      return;
    }
    ((t = n.lastBaseUpdate),
      t === null ? (n.firstBaseUpdate = e) : (t.next = e),
      (n.lastBaseUpdate = e));
  }
  var hu = !1;
  function ui() {
    if (hu) {
      var t = fl;
      if (t !== null) throw t;
    }
  }
  function si(t, e, n, a) {
    hu = !1;
    var l = t.updateQueue;
    Kn = !1;
    var o = l.firstBaseUpdate,
      c = l.lastBaseUpdate,
      m = l.shared.pending;
    if (m !== null) {
      l.shared.pending = null;
      var x = m,
        _ = x.next;
      ((x.next = null), c === null ? (o = _) : (c.next = _), (c = x));
      var j = t.alternate;
      j !== null &&
        ((j = j.updateQueue),
        (m = j.lastBaseUpdate),
        m !== c &&
          (m === null ? (j.firstBaseUpdate = _) : (m.next = _),
          (j.lastBaseUpdate = x)));
    }
    if (o !== null) {
      var X = l.baseState;
      ((c = 0), (j = _ = x = null), (m = o));
      do {
        var C = m.lane & -536870913,
          H = C !== m.lane;
        if (H ? (Tt & C) === C : (a & C) === C) {
          (C !== 0 && C === cl && (hu = !0),
            j !== null &&
              (j = j.next =
                {
                  lane: 0,
                  tag: m.tag,
                  payload: m.payload,
                  callback: null,
                  next: null,
                }));
          t: {
            var P = t,
              st = m;
            C = e;
            var Bt = n;
            switch (st.tag) {
              case 1:
                if (((P = st.payload), typeof P == "function")) {
                  X = P.call(Bt, X, C);
                  break t;
                }
                X = P;
                break t;
              case 3:
                P.flags = (P.flags & -65537) | 128;
              case 0:
                if (
                  ((P = st.payload),
                  (C = typeof P == "function" ? P.call(Bt, X, C) : P),
                  C == null)
                )
                  break t;
                X = h({}, X, C);
                break t;
              case 2:
                Kn = !0;
            }
          }
          ((C = m.callback),
            C !== null &&
              ((t.flags |= 64),
              H && (t.flags |= 8192),
              (H = l.callbacks),
              H === null ? (l.callbacks = [C]) : H.push(C)));
        } else
          ((H = {
            lane: C,
            tag: m.tag,
            payload: m.payload,
            callback: m.callback,
            next: null,
          }),
            j === null ? ((_ = j = H), (x = X)) : (j = j.next = H),
            (c |= C));
        if (((m = m.next), m === null)) {
          if (((m = l.shared.pending), m === null)) break;
          ((H = m),
            (m = H.next),
            (H.next = null),
            (l.lastBaseUpdate = H),
            (l.shared.pending = null));
        }
      } while (!0);
      (j === null && (x = X),
        (l.baseState = x),
        (l.firstBaseUpdate = _),
        (l.lastBaseUpdate = j),
        o === null && (l.shared.lanes = 0),
        (ta |= c),
        (t.lanes = c),
        (t.memoizedState = X));
    }
  }
  function Tf(t, e) {
    if (typeof t != "function") throw Error(u(191, t));
    t.call(e);
  }
  function Af(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++) Tf(n[t], e);
  }
  var hl = S(null),
    mo = S(0);
  function zf(t, e) {
    ((t = Rn), B(mo, t), B(hl, e), (Rn = t | e.baseLanes));
  }
  function gu() {
    (B(mo, Rn), B(hl, hl.current));
  }
  function pu() {
    ((Rn = mo.current), U(hl), U(mo));
  }
  var Re = S(null),
    Qe = null;
  function $n(t) {
    var e = t.alternate;
    (B(Qt, Qt.current & 1),
      B(Re, t),
      Qe === null &&
        (e === null || hl.current !== null || e.memoizedState !== null) &&
        (Qe = t));
  }
  function yu(t) {
    (B(Qt, Qt.current), B(Re, t), Qe === null && (Qe = t));
  }
  function Of(t) {
    t.tag === 22
      ? (B(Qt, Qt.current), B(Re, t), Qe === null && (Qe = t))
      : Fn();
  }
  function Fn() {
    (B(Qt, Qt.current), B(Re, Re.current));
  }
  function Ne(t) {
    (U(Re), Qe === t && (Qe = null), U(Qt));
  }
  var Qt = S(0);
  function ho(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || ws(n) || Ts(n)))
          return e;
      } else if (
        e.tag === 19 &&
        (e.memoizedProps.revealOrder === "forwards" ||
          e.memoizedProps.revealOrder === "backwards" ||
          e.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          e.memoizedProps.revealOrder === "together")
      ) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        ((e.child.return = e), (e = e.child));
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      ((e.sibling.return = e.return), (e = e.sibling));
    }
    return null;
  }
  var wn = 0,
    ht = null,
    Ht = null,
    Jt = null,
    go = !1,
    gl = !1,
    Da = !1,
    po = 0,
    ci = 0,
    pl = null,
    ap = 0;
  function kt() {
    throw Error(u(321));
  }
  function vu(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!Me(t[n], e[n])) return !1;
    return !0;
  }
  function bu(t, e, n, a, l, o) {
    return (
      (wn = o),
      (ht = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (w.H = t === null || t.memoizedState === null ? cd : Hu),
      (Da = !1),
      (o = n(a, l)),
      (Da = !1),
      gl && (o = Mf(e, n, a, l)),
      _f(t),
      o
    );
  }
  function _f(t) {
    w.H = mi;
    var e = Ht !== null && Ht.next !== null;
    if (((wn = 0), (Jt = Ht = ht = null), (go = !1), (ci = 0), (pl = null), e))
      throw Error(u(300));
    t === null ||
      Wt ||
      ((t = t.dependencies), t !== null && io(t) && (Wt = !0));
  }
  function Mf(t, e, n, a) {
    ht = t;
    var l = 0;
    do {
      if ((gl && (pl = null), (ci = 0), (gl = !1), 25 <= l))
        throw Error(u(301));
      if (((l += 1), (Jt = Ht = null), t.updateQueue != null)) {
        var o = t.updateQueue;
        ((o.lastEffect = null),
          (o.events = null),
          (o.stores = null),
          o.memoCache != null && (o.memoCache.index = 0));
      }
      ((w.H = fd), (o = e(n, a)));
    } while (gl);
    return o;
  }
  function lp() {
    var t = w.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? fi(e) : e),
      (t = t.useState()[0]),
      (Ht !== null ? Ht.memoizedState : null) !== t && (ht.flags |= 1024),
      e
    );
  }
  function xu() {
    var t = po !== 0;
    return ((po = 0), t);
  }
  function Su(t, e, n) {
    ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~n));
  }
  function Eu(t) {
    if (go) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        (e !== null && (e.pending = null), (t = t.next));
      }
      go = !1;
    }
    ((wn = 0), (Jt = Ht = ht = null), (gl = !1), (ci = po = 0), (pl = null));
  }
  function pe() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Jt === null ? (ht.memoizedState = Jt = t) : (Jt = Jt.next = t), Jt);
  }
  function Zt() {
    if (Ht === null) {
      var t = ht.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Ht.next;
    var e = Jt === null ? ht.memoizedState : Jt.next;
    if (e !== null) ((Jt = e), (Ht = t));
    else {
      if (t === null)
        throw ht.alternate === null ? Error(u(467)) : Error(u(310));
      ((Ht = t),
        (t = {
          memoizedState: Ht.memoizedState,
          baseState: Ht.baseState,
          baseQueue: Ht.baseQueue,
          queue: Ht.queue,
          next: null,
        }),
        Jt === null ? (ht.memoizedState = Jt = t) : (Jt = Jt.next = t));
    }
    return Jt;
  }
  function yo() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function fi(t) {
    var e = ci;
    return (
      (ci += 1),
      pl === null && (pl = []),
      (t = bf(pl, t, e)),
      (e = ht),
      (Jt === null ? e.memoizedState : Jt.next) === null &&
        ((e = e.alternate),
        (w.H = e === null || e.memoizedState === null ? cd : Hu)),
      t
    );
  }
  function vo(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return fi(t);
      if (t.$$typeof === J) return oe(t);
    }
    throw Error(u(438, String(t)));
  }
  function wu(t) {
    var e = null,
      n = ht.updateQueue;
    if ((n !== null && (e = n.memoCache), e == null)) {
      var a = ht.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (e = {
              data: a.data.map(function (l) {
                return l.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      n === null && ((n = yo()), (ht.updateQueue = n)),
      (n.memoCache = e),
      (n = e.data[e.index]),
      n === void 0)
    )
      for (n = e.data[e.index] = Array(t), a = 0; a < t; a++) n[a] = St;
    return (e.index++, n);
  }
  function Tn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function bo(t) {
    var e = Zt();
    return Tu(e, Ht, t);
  }
  function Tu(t, e, n) {
    var a = t.queue;
    if (a === null) throw Error(u(311));
    a.lastRenderedReducer = n;
    var l = t.baseQueue,
      o = a.pending;
    if (o !== null) {
      if (l !== null) {
        var c = l.next;
        ((l.next = o.next), (o.next = c));
      }
      ((e.baseQueue = l = o), (a.pending = null));
    }
    if (((o = t.baseState), l === null)) t.memoizedState = o;
    else {
      e = l.next;
      var m = (c = null),
        x = null,
        _ = e,
        j = !1;
      do {
        var X = _.lane & -536870913;
        if (X !== _.lane ? (Tt & X) === X : (wn & X) === X) {
          var C = _.revertLane;
          if (C === 0)
            (x !== null &&
              (x = x.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: _.action,
                  hasEagerState: _.hasEagerState,
                  eagerState: _.eagerState,
                  next: null,
                }),
              X === cl && (j = !0));
          else if ((wn & C) === C) {
            ((_ = _.next), C === cl && (j = !0));
            continue;
          } else
            ((X = {
              lane: 0,
              revertLane: _.revertLane,
              gesture: null,
              action: _.action,
              hasEagerState: _.hasEagerState,
              eagerState: _.eagerState,
              next: null,
            }),
              x === null ? ((m = x = X), (c = o)) : (x = x.next = X),
              (ht.lanes |= C),
              (ta |= C));
          ((X = _.action),
            Da && n(o, X),
            (o = _.hasEagerState ? _.eagerState : n(o, X)));
        } else
          ((C = {
            lane: X,
            revertLane: _.revertLane,
            gesture: _.gesture,
            action: _.action,
            hasEagerState: _.hasEagerState,
            eagerState: _.eagerState,
            next: null,
          }),
            x === null ? ((m = x = C), (c = o)) : (x = x.next = C),
            (ht.lanes |= X),
            (ta |= X));
        _ = _.next;
      } while (_ !== null && _ !== e);
      if (
        (x === null ? (c = o) : (x.next = m),
        !Me(o, t.memoizedState) && ((Wt = !0), j && ((n = fl), n !== null)))
      )
        throw n;
      ((t.memoizedState = o),
        (t.baseState = c),
        (t.baseQueue = x),
        (a.lastRenderedState = o));
    }
    return (l === null && (a.lanes = 0), [t.memoizedState, a.dispatch]);
  }
  function Au(t) {
    var e = Zt(),
      n = e.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = t;
    var a = n.dispatch,
      l = n.pending,
      o = e.memoizedState;
    if (l !== null) {
      n.pending = null;
      var c = (l = l.next);
      do ((o = t(o, c.action)), (c = c.next));
      while (c !== l);
      (Me(o, e.memoizedState) || (Wt = !0),
        (e.memoizedState = o),
        e.baseQueue === null && (e.baseState = o),
        (n.lastRenderedState = o));
    }
    return [o, a];
  }
  function Cf(t, e, n) {
    var a = ht,
      l = Zt(),
      o = Ot;
    if (o) {
      if (n === void 0) throw Error(u(407));
      n = n();
    } else n = e();
    var c = !Me((Ht || l).memoizedState, n);
    if (
      (c && ((l.memoizedState = n), (Wt = !0)),
      (l = l.queue),
      _u(Df.bind(null, a, l, t), [t]),
      l.getSnapshot !== e || c || (Jt !== null && Jt.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        yl(9, { destroy: void 0 }, Nf.bind(null, a, l, n, e), null),
        Ut === null)
      )
        throw Error(u(349));
      o || (wn & 127) !== 0 || Rf(a, e, n);
    }
    return n;
  }
  function Rf(t, e, n) {
    ((t.flags |= 16384),
      (t = { getSnapshot: e, value: n }),
      (e = ht.updateQueue),
      e === null
        ? ((e = yo()), (ht.updateQueue = e), (e.stores = [t]))
        : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t)));
  }
  function Nf(t, e, n, a) {
    ((e.value = n), (e.getSnapshot = a), Hf(e) && jf(t));
  }
  function Df(t, e, n) {
    return n(function () {
      Hf(e) && jf(t);
    });
  }
  function Hf(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !Me(t, n);
    } catch {
      return !0;
    }
  }
  function jf(t) {
    var e = Ta(t, 2);
    e !== null && ze(e, t, 2);
  }
  function zu(t) {
    var e = pe();
    if (typeof t == "function") {
      var n = t;
      if (((t = n()), Da)) {
        We(!0);
        try {
          n();
        } finally {
          We(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Tn,
        lastRenderedState: t,
      }),
      e
    );
  }
  function Bf(t, e, n, a) {
    return ((t.baseState = n), Tu(t, Ht, typeof a == "function" ? a : Tn));
  }
  function ip(t, e, n, a, l) {
    if (Eo(t)) throw Error(u(485));
    if (((t = e.action), t !== null)) {
      var o = {
        payload: l,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (c) {
          o.listeners.push(c);
        },
      };
      (w.T !== null ? n(!0) : (o.isTransition = !1),
        a(o),
        (n = e.pending),
        n === null
          ? ((o.next = e.pending = o), Uf(e, o))
          : ((o.next = n.next), (e.pending = n.next = o)));
    }
  }
  function Uf(t, e) {
    var n = e.action,
      a = e.payload,
      l = t.state;
    if (e.isTransition) {
      var o = w.T,
        c = {};
      w.T = c;
      try {
        var m = n(l, a),
          x = w.S;
        (x !== null && x(c, m), Lf(t, e, m));
      } catch (_) {
        Ou(t, e, _);
      } finally {
        (o !== null && c.types !== null && (o.types = c.types), (w.T = o));
      }
    } else
      try {
        ((o = n(l, a)), Lf(t, e, o));
      } catch (_) {
        Ou(t, e, _);
      }
  }
  function Lf(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (a) {
            Yf(t, e, a);
          },
          function (a) {
            return Ou(t, e, a);
          },
        )
      : Yf(t, e, n);
  }
  function Yf(t, e, n) {
    ((e.status = "fulfilled"),
      (e.value = n),
      qf(e),
      (t.state = n),
      (e = t.pending),
      e !== null &&
        ((n = e.next),
        n === e ? (t.pending = null) : ((n = n.next), (e.next = n), Uf(t, n))));
  }
  function Ou(t, e, n) {
    var a = t.pending;
    if (((t.pending = null), a !== null)) {
      a = a.next;
      do ((e.status = "rejected"), (e.reason = n), qf(e), (e = e.next));
      while (e !== a);
    }
    t.action = null;
  }
  function qf(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Gf(t, e) {
    return e;
  }
  function Xf(t, e) {
    if (Ot) {
      var n = Ut.formState;
      if (n !== null) {
        t: {
          var a = ht;
          if (Ot) {
            if (Lt) {
              e: {
                for (var l = Lt, o = Ve; l.nodeType !== 8; ) {
                  if (!o) {
                    l = null;
                    break e;
                  }
                  if (((l = Ze(l.nextSibling)), l === null)) {
                    l = null;
                    break e;
                  }
                }
                ((o = l.data), (l = o === "F!" || o === "F" ? l : null));
              }
              if (l) {
                ((Lt = Ze(l.nextSibling)), (a = l.data === "F!"));
                break t;
              }
            }
            Qn(a);
          }
          a = !1;
        }
        a && (e = n[0]);
      }
    }
    return (
      (n = pe()),
      (n.memoizedState = n.baseState = e),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Gf,
        lastRenderedState: e,
      }),
      (n.queue = a),
      (n = rd.bind(null, ht, a)),
      (a.dispatch = n),
      (a = zu(!1)),
      (o = Du.bind(null, ht, !1, a.queue)),
      (a = pe()),
      (l = { state: e, dispatch: null, action: t, pending: null }),
      (a.queue = l),
      (n = ip.bind(null, ht, l, o, n)),
      (l.dispatch = n),
      (a.memoizedState = t),
      [e, n, !1]
    );
  }
  function kf(t) {
    var e = Zt();
    return Vf(e, Ht, t);
  }
  function Vf(t, e, n) {
    if (
      ((e = Tu(t, e, Gf)[0]),
      (t = bo(Tn)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var a = fi(e);
      } catch (c) {
        throw c === dl ? uo : c;
      }
    else a = e;
    e = Zt();
    var l = e.queue,
      o = l.dispatch;
    return (
      n !== e.memoizedState &&
        ((ht.flags |= 2048),
        yl(9, { destroy: void 0 }, op.bind(null, l, n), null)),
      [a, o, t]
    );
  }
  function op(t, e) {
    t.action = e;
  }
  function Qf(t) {
    var e = Zt(),
      n = Ht;
    if (n !== null) return Vf(e, n, t);
    (Zt(), (e = e.memoizedState), (n = Zt()));
    var a = n.queue.dispatch;
    return ((n.memoizedState = t), [e, a, !1]);
  }
  function yl(t, e, n, a) {
    return (
      (t = { tag: t, create: n, deps: a, inst: e, next: null }),
      (e = ht.updateQueue),
      e === null && ((e = yo()), (ht.updateQueue = e)),
      (n = e.lastEffect),
      n === null
        ? (e.lastEffect = t.next = t)
        : ((a = n.next), (n.next = t), (t.next = a), (e.lastEffect = t)),
      t
    );
  }
  function Zf() {
    return Zt().memoizedState;
  }
  function xo(t, e, n, a) {
    var l = pe();
    ((ht.flags |= t),
      (l.memoizedState = yl(
        1 | e,
        { destroy: void 0 },
        n,
        a === void 0 ? null : a,
      )));
  }
  function So(t, e, n, a) {
    var l = Zt();
    a = a === void 0 ? null : a;
    var o = l.memoizedState.inst;
    Ht !== null && a !== null && vu(a, Ht.memoizedState.deps)
      ? (l.memoizedState = yl(e, o, n, a))
      : ((ht.flags |= t), (l.memoizedState = yl(1 | e, o, n, a)));
  }
  function Kf(t, e) {
    xo(8390656, 8, t, e);
  }
  function _u(t, e) {
    So(2048, 8, t, e);
  }
  function rp(t) {
    ht.flags |= 4;
    var e = ht.updateQueue;
    if (e === null) ((e = yo()), (ht.updateQueue = e), (e.events = [t]));
    else {
      var n = e.events;
      n === null ? (e.events = [t]) : n.push(t);
    }
  }
  function Jf(t) {
    var e = Zt().memoizedState;
    return (
      rp({ ref: e, nextImpl: t }),
      function () {
        if ((Rt & 2) !== 0) throw Error(u(440));
        return e.impl.apply(void 0, arguments);
      }
    );
  }
  function Wf(t, e) {
    return So(4, 2, t, e);
  }
  function $f(t, e) {
    return So(4, 4, t, e);
  }
  function Ff(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function () {
        typeof n == "function" ? n() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function Pf(t, e, n) {
    ((n = n != null ? n.concat([t]) : null), So(4, 4, Ff.bind(null, e, t), n));
  }
  function Mu() {}
  function If(t, e) {
    var n = Zt();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    return e !== null && vu(e, a[1]) ? a[0] : ((n.memoizedState = [t, e]), t);
  }
  function td(t, e) {
    var n = Zt();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    if (e !== null && vu(e, a[1])) return a[0];
    if (((a = t()), Da)) {
      We(!0);
      try {
        t();
      } finally {
        We(!1);
      }
    }
    return ((n.memoizedState = [a, e]), a);
  }
  function Cu(t, e, n) {
    return n === void 0 || ((wn & 1073741824) !== 0 && (Tt & 261930) === 0)
      ? (t.memoizedState = e)
      : ((t.memoizedState = n), (t = em()), (ht.lanes |= t), (ta |= t), n);
  }
  function ed(t, e, n, a) {
    return Me(n, e)
      ? n
      : hl.current !== null
        ? ((t = Cu(t, n, a)), Me(t, e) || (Wt = !0), t)
        : (wn & 42) === 0 || ((wn & 1073741824) !== 0 && (Tt & 261930) === 0)
          ? ((Wt = !0), (t.memoizedState = n))
          : ((t = em()), (ht.lanes |= t), (ta |= t), e);
  }
  function nd(t, e, n, a, l) {
    var o = L.p;
    L.p = o !== 0 && 8 > o ? o : 8;
    var c = w.T,
      m = {};
    ((w.T = m), Du(t, !1, e, n));
    try {
      var x = l(),
        _ = w.S;
      if (
        (_ !== null && _(m, x),
        x !== null && typeof x == "object" && typeof x.then == "function")
      ) {
        var j = np(x, a);
        di(t, e, j, je(t));
      } else di(t, e, a, je(t));
    } catch (X) {
      di(t, e, { then: function () {}, status: "rejected", reason: X }, je());
    } finally {
      ((L.p = o),
        c !== null && m.types !== null && (c.types = m.types),
        (w.T = c));
    }
  }
  function up() {}
  function Ru(t, e, n, a) {
    if (t.tag !== 5) throw Error(u(476));
    var l = ad(t).queue;
    nd(
      t,
      l,
      e,
      D,
      n === null
        ? up
        : function () {
            return (ld(t), n(a));
          },
    );
  }
  function ad(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: D,
      baseState: D,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Tn,
        lastRenderedState: D,
      },
      next: null,
    };
    var n = {};
    return (
      (e.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Tn,
          lastRenderedState: n,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function ld(t) {
    var e = ad(t);
    (e.next === null && (e = t.alternate.memoizedState),
      di(t, e.next.queue, {}, je()));
  }
  function Nu() {
    return oe(Mi);
  }
  function id() {
    return Zt().memoizedState;
  }
  function od() {
    return Zt().memoizedState;
  }
  function sp(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = je();
          t = Jn(n);
          var a = Wn(e, t, n);
          (a !== null && (ze(a, e, n), ri(a, e, n)),
            (e = { cache: ru() }),
            (t.payload = e));
          return;
      }
      e = e.return;
    }
  }
  function cp(t, e, n) {
    var a = je();
    ((n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Eo(t)
        ? ud(e, n)
        : ((n = $r(t, e, n, a)), n !== null && (ze(n, t, a), sd(n, e, a))));
  }
  function rd(t, e, n) {
    var a = je();
    di(t, e, n, a);
  }
  function di(t, e, n, a) {
    var l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Eo(t)) ud(e, l);
    else {
      var o = t.alternate;
      if (
        t.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = e.lastRenderedReducer), o !== null)
      )
        try {
          var c = e.lastRenderedState,
            m = o(c, n);
          if (((l.hasEagerState = !0), (l.eagerState = m), Me(m, c)))
            return (eo(t, e, l, 0), Ut === null && to(), !1);
        } catch {
        } finally {
        }
      if (((n = $r(t, e, l, a)), n !== null))
        return (ze(n, t, a), sd(n, e, a), !0);
    }
    return !1;
  }
  function Du(t, e, n, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: fs(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Eo(t))
    ) {
      if (e) throw Error(u(479));
    } else ((e = $r(t, n, a, 2)), e !== null && ze(e, t, 2));
  }
  function Eo(t) {
    var e = t.alternate;
    return t === ht || (e !== null && e === ht);
  }
  function ud(t, e) {
    gl = go = !0;
    var n = t.pending;
    (n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
      (t.pending = e));
  }
  function sd(t, e, n) {
    if ((n & 4194048) !== 0) {
      var a = e.lanes;
      ((a &= t.pendingLanes), (n |= a), (e.lanes = n), ve(t, n));
    }
  }
  var mi = {
    readContext: oe,
    use: vo,
    useCallback: kt,
    useContext: kt,
    useEffect: kt,
    useImperativeHandle: kt,
    useLayoutEffect: kt,
    useInsertionEffect: kt,
    useMemo: kt,
    useReducer: kt,
    useRef: kt,
    useState: kt,
    useDebugValue: kt,
    useDeferredValue: kt,
    useTransition: kt,
    useSyncExternalStore: kt,
    useId: kt,
    useHostTransitionStatus: kt,
    useFormState: kt,
    useActionState: kt,
    useOptimistic: kt,
    useMemoCache: kt,
    useCacheRefresh: kt,
  };
  mi.useEffectEvent = kt;
  var cd = {
      readContext: oe,
      use: vo,
      useCallback: function (t, e) {
        return ((pe().memoizedState = [t, e === void 0 ? null : e]), t);
      },
      useContext: oe,
      useEffect: Kf,
      useImperativeHandle: function (t, e, n) {
        ((n = n != null ? n.concat([t]) : null),
          xo(4194308, 4, Ff.bind(null, e, t), n));
      },
      useLayoutEffect: function (t, e) {
        return xo(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        xo(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var n = pe();
        e = e === void 0 ? null : e;
        var a = t();
        if (Da) {
          We(!0);
          try {
            t();
          } finally {
            We(!1);
          }
        }
        return ((n.memoizedState = [a, e]), a);
      },
      useReducer: function (t, e, n) {
        var a = pe();
        if (n !== void 0) {
          var l = n(e);
          if (Da) {
            We(!0);
            try {
              n(e);
            } finally {
              We(!1);
            }
          }
        } else l = e;
        return (
          (a.memoizedState = a.baseState = l),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: l,
          }),
          (a.queue = t),
          (t = t.dispatch = cp.bind(null, ht, t)),
          [a.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = pe();
        return ((t = { current: t }), (e.memoizedState = t));
      },
      useState: function (t) {
        t = zu(t);
        var e = t.queue,
          n = rd.bind(null, ht, e);
        return ((e.dispatch = n), [t.memoizedState, n]);
      },
      useDebugValue: Mu,
      useDeferredValue: function (t, e) {
        var n = pe();
        return Cu(n, t, e);
      },
      useTransition: function () {
        var t = zu(!1);
        return (
          (t = nd.bind(null, ht, t.queue, !0, !1)),
          (pe().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, n) {
        var a = ht,
          l = pe();
        if (Ot) {
          if (n === void 0) throw Error(u(407));
          n = n();
        } else {
          if (((n = e()), Ut === null)) throw Error(u(349));
          (Tt & 127) !== 0 || Rf(a, e, n);
        }
        l.memoizedState = n;
        var o = { value: n, getSnapshot: e };
        return (
          (l.queue = o),
          Kf(Df.bind(null, a, o, t), [t]),
          (a.flags |= 2048),
          yl(9, { destroy: void 0 }, Nf.bind(null, a, o, n, e), null),
          n
        );
      },
      useId: function () {
        var t = pe(),
          e = Ut.identifierPrefix;
        if (Ot) {
          var n = on,
            a = ln;
          ((n = (a & ~(1 << (32 - se(a) - 1))).toString(32) + n),
            (e = "_" + e + "R_" + n),
            (n = po++),
            0 < n && (e += "H" + n.toString(32)),
            (e += "_"));
        } else ((n = ap++), (e = "_" + e + "r_" + n.toString(32) + "_"));
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: Nu,
      useFormState: Xf,
      useActionState: Xf,
      useOptimistic: function (t) {
        var e = pe();
        e.memoizedState = e.baseState = t;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = n),
          (e = Du.bind(null, ht, !0, n)),
          (n.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: wu,
      useCacheRefresh: function () {
        return (pe().memoizedState = sp.bind(null, ht));
      },
      useEffectEvent: function (t) {
        var e = pe(),
          n = { impl: t };
        return (
          (e.memoizedState = n),
          function () {
            if ((Rt & 2) !== 0) throw Error(u(440));
            return n.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Hu = {
      readContext: oe,
      use: vo,
      useCallback: If,
      useContext: oe,
      useEffect: _u,
      useImperativeHandle: Pf,
      useInsertionEffect: Wf,
      useLayoutEffect: $f,
      useMemo: td,
      useReducer: bo,
      useRef: Zf,
      useState: function () {
        return bo(Tn);
      },
      useDebugValue: Mu,
      useDeferredValue: function (t, e) {
        var n = Zt();
        return ed(n, Ht.memoizedState, t, e);
      },
      useTransition: function () {
        var t = bo(Tn)[0],
          e = Zt().memoizedState;
        return [typeof t == "boolean" ? t : fi(t), e];
      },
      useSyncExternalStore: Cf,
      useId: id,
      useHostTransitionStatus: Nu,
      useFormState: kf,
      useActionState: kf,
      useOptimistic: function (t, e) {
        var n = Zt();
        return Bf(n, Ht, t, e);
      },
      useMemoCache: wu,
      useCacheRefresh: od,
    };
  Hu.useEffectEvent = Jf;
  var fd = {
    readContext: oe,
    use: vo,
    useCallback: If,
    useContext: oe,
    useEffect: _u,
    useImperativeHandle: Pf,
    useInsertionEffect: Wf,
    useLayoutEffect: $f,
    useMemo: td,
    useReducer: Au,
    useRef: Zf,
    useState: function () {
      return Au(Tn);
    },
    useDebugValue: Mu,
    useDeferredValue: function (t, e) {
      var n = Zt();
      return Ht === null ? Cu(n, t, e) : ed(n, Ht.memoizedState, t, e);
    },
    useTransition: function () {
      var t = Au(Tn)[0],
        e = Zt().memoizedState;
      return [typeof t == "boolean" ? t : fi(t), e];
    },
    useSyncExternalStore: Cf,
    useId: id,
    useHostTransitionStatus: Nu,
    useFormState: Qf,
    useActionState: Qf,
    useOptimistic: function (t, e) {
      var n = Zt();
      return Ht !== null
        ? Bf(n, Ht, t, e)
        : ((n.baseState = t), [t, n.queue.dispatch]);
    },
    useMemoCache: wu,
    useCacheRefresh: od,
  };
  fd.useEffectEvent = Jf;
  function ju(t, e, n, a) {
    ((e = t.memoizedState),
      (n = n(a, e)),
      (n = n == null ? e : h({}, e, n)),
      (t.memoizedState = n),
      t.lanes === 0 && (t.updateQueue.baseState = n));
  }
  var Bu = {
    enqueueSetState: function (t, e, n) {
      t = t._reactInternals;
      var a = je(),
        l = Jn(a);
      ((l.payload = e),
        n != null && (l.callback = n),
        (e = Wn(t, l, a)),
        e !== null && (ze(e, t, a), ri(e, t, a)));
    },
    enqueueReplaceState: function (t, e, n) {
      t = t._reactInternals;
      var a = je(),
        l = Jn(a);
      ((l.tag = 1),
        (l.payload = e),
        n != null && (l.callback = n),
        (e = Wn(t, l, a)),
        e !== null && (ze(e, t, a), ri(e, t, a)));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var n = je(),
        a = Jn(n);
      ((a.tag = 2),
        e != null && (a.callback = e),
        (e = Wn(t, a, n)),
        e !== null && (ze(e, t, n), ri(e, t, n)));
    },
  };
  function dd(t, e, n, a, l, o, c) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(a, o, c)
        : e.prototype && e.prototype.isPureReactComponent
          ? !Il(n, a) || !Il(l, o)
          : !0
    );
  }
  function md(t, e, n, a) {
    ((t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(n, a),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(n, a),
      e.state !== t && Bu.enqueueReplaceState(e, e.state, null));
  }
  function Ha(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var a in e) a !== "ref" && (n[a] = e[a]);
    }
    if ((t = t.defaultProps)) {
      n === e && (n = h({}, n));
      for (var l in t) n[l] === void 0 && (n[l] = t[l]);
    }
    return n;
  }
  function hd(t) {
    Ii(t);
  }
  function gd(t) {
    console.error(t);
  }
  function pd(t) {
    Ii(t);
  }
  function wo(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function yd(t, e, n) {
    try {
      var a = t.onCaughtError;
      a(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function Uu(t, e, n) {
    return (
      (n = Jn(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        wo(t, e);
      }),
      n
    );
  }
  function vd(t) {
    return ((t = Jn(t)), (t.tag = 3), t);
  }
  function bd(t, e, n, a) {
    var l = n.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var o = a.value;
      ((t.payload = function () {
        return l(o);
      }),
        (t.callback = function () {
          yd(e, n, a);
        }));
    }
    var c = n.stateNode;
    c !== null &&
      typeof c.componentDidCatch == "function" &&
      (t.callback = function () {
        (yd(e, n, a),
          typeof l != "function" &&
            (ea === null ? (ea = new Set([this])) : ea.add(this)));
        var m = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: m !== null ? m : "",
        });
      });
  }
  function fp(t, e, n, a, l) {
    if (
      ((n.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((e = n.alternate),
        e !== null && sl(e, n, l, !0),
        (n = Re.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 31:
          case 13:
            return (
              Qe === null ? jo() : n.alternate === null && Vt === 0 && (Vt = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = l),
              a === so
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null ? (n.updateQueue = new Set([a])) : e.add(a),
                  us(t, a, l)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              a === so
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (n.updateQueue = e))
                    : ((n = e.retryQueue),
                      n === null ? (e.retryQueue = new Set([a])) : n.add(a)),
                  us(t, a, l)),
              !1
            );
        }
        throw Error(u(435, n.tag));
      }
      return (us(t, a, l), jo(), !1);
    }
    if (Ot)
      return (
        (e = Re.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = l),
            a !== nu && ((t = Error(u(422), { cause: a })), ni(Ge(t, n))))
          : (a !== nu && ((e = Error(u(423), { cause: a })), ni(Ge(e, n))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (l &= -l),
            (t.lanes |= l),
            (a = Ge(a, n)),
            (l = Uu(t.stateNode, a, l)),
            mu(t, l),
            Vt !== 4 && (Vt = 2)),
        !1
      );
    var o = Error(u(520), { cause: a });
    if (
      ((o = Ge(o, n)),
      Si === null ? (Si = [o]) : Si.push(o),
      Vt !== 4 && (Vt = 2),
      e === null)
    )
      return !0;
    ((a = Ge(a, n)), (n = e));
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (t = l & -l),
            (n.lanes |= t),
            (t = Uu(n.stateNode, a, t)),
            mu(n, t),
            !1
          );
        case 1:
          if (
            ((e = n.type),
            (o = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (o !== null &&
                  typeof o.componentDidCatch == "function" &&
                  (ea === null || !ea.has(o)))))
          )
            return (
              (n.flags |= 65536),
              (l &= -l),
              (n.lanes |= l),
              (l = vd(l)),
              bd(l, t, n, a),
              mu(n, l),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Lu = Error(u(461)),
    Wt = !1;
  function re(t, e, n, a) {
    e.child = t === null ? wf(e, null, n, a) : Na(e, t.child, n, a);
  }
  function xd(t, e, n, a, l) {
    n = n.render;
    var o = e.ref;
    if ("ref" in a) {
      var c = {};
      for (var m in a) m !== "ref" && (c[m] = a[m]);
    } else c = a;
    return (
      _a(e),
      (a = bu(t, e, n, c, o, l)),
      (m = xu()),
      t !== null && !Wt
        ? (Su(t, e, l), An(t, e, l))
        : (Ot && m && tu(e), (e.flags |= 1), re(t, e, a, l), e.child)
    );
  }
  function Sd(t, e, n, a, l) {
    if (t === null) {
      var o = n.type;
      return typeof o == "function" &&
        !Fr(o) &&
        o.defaultProps === void 0 &&
        n.compare === null
        ? ((e.tag = 15), (e.type = o), Ed(t, e, o, a, l))
        : ((t = ao(n.type, null, a, e, e.mode, l)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((o = t.child), !Zu(t, l))) {
      var c = o.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Il), n(c, a) && t.ref === e.ref)
      )
        return An(t, e, l);
    }
    return (
      (e.flags |= 1),
      (t = bn(o, a)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function Ed(t, e, n, a, l) {
    if (t !== null) {
      var o = t.memoizedProps;
      if (Il(o, a) && t.ref === e.ref)
        if (((Wt = !1), (e.pendingProps = a = o), Zu(t, l)))
          (t.flags & 131072) !== 0 && (Wt = !0);
        else return ((e.lanes = t.lanes), An(t, e, l));
    }
    return Yu(t, e, n, a, l);
  }
  function wd(t, e, n, a) {
    var l = a.children,
      o = t !== null ? t.memoizedState : null;
    if (
      (t === null &&
        e.stateNode === null &&
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      a.mode === "hidden")
    ) {
      if ((e.flags & 128) !== 0) {
        if (((o = o !== null ? o.baseLanes | n : n), t !== null)) {
          for (a = e.child = t.child, l = 0; a !== null; )
            ((l = l | a.lanes | a.childLanes), (a = a.sibling));
          a = l & ~o;
        } else ((a = 0), (e.child = null));
        return Td(t, e, o, n, a);
      }
      if ((n & 536870912) !== 0)
        ((e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && ro(e, o !== null ? o.cachePool : null),
          o !== null ? zf(e, o) : gu(),
          Of(e));
      else
        return (
          (a = e.lanes = 536870912),
          Td(t, e, o !== null ? o.baseLanes | n : n, n, a)
        );
    } else
      o !== null
        ? (ro(e, o.cachePool), zf(e, o), Fn(), (e.memoizedState = null))
        : (t !== null && ro(e, null), gu(), Fn());
    return (re(t, e, l, n), e.child);
  }
  function hi(t, e) {
    return (
      (t !== null && t.tag === 22) ||
        e.stateNode !== null ||
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      e.sibling
    );
  }
  function Td(t, e, n, a, l) {
    var o = su();
    return (
      (o = o === null ? null : { parent: Kt._currentValue, pool: o }),
      (e.memoizedState = { baseLanes: n, cachePool: o }),
      t !== null && ro(e, null),
      gu(),
      Of(e),
      t !== null && sl(t, e, a, !0),
      (e.childLanes = l),
      null
    );
  }
  function To(t, e) {
    return (
      (e = zo({ mode: e.mode, children: e.children }, t.mode)),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function Ad(t, e, n) {
    return (
      Na(e, t.child, null, n),
      (t = To(e, e.pendingProps)),
      (t.flags |= 2),
      Ne(e),
      (e.memoizedState = null),
      t
    );
  }
  function dp(t, e, n) {
    var a = e.pendingProps,
      l = (e.flags & 128) !== 0;
    if (((e.flags &= -129), t === null)) {
      if (Ot) {
        if (a.mode === "hidden")
          return ((t = To(e, a)), (e.lanes = 536870912), hi(null, t));
        if (
          (yu(e),
          (t = Lt)
            ? ((t = Um(t, Ve)),
              (t = t !== null && t.data === "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: kn !== null ? { id: ln, overflow: on } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = uf(t)),
                (n.return = e),
                (e.child = n),
                (ie = e),
                (Lt = null)))
            : (t = null),
          t === null)
        )
          throw Qn(e);
        return ((e.lanes = 536870912), null);
      }
      return To(e, a);
    }
    var o = t.memoizedState;
    if (o !== null) {
      var c = o.dehydrated;
      if ((yu(e), l))
        if (e.flags & 256) ((e.flags &= -257), (e = Ad(t, e, n)));
        else if (e.memoizedState !== null)
          ((e.child = t.child), (e.flags |= 128), (e = null));
        else throw Error(u(558));
      else if (
        (Wt || sl(t, e, n, !1), (l = (n & t.childLanes) !== 0), Wt || l)
      ) {
        if (
          ((a = Ut),
          a !== null && ((c = be(a, n)), c !== 0 && c !== o.retryLane))
        )
          throw ((o.retryLane = c), Ta(t, c), ze(a, t, c), Lu);
        (jo(), (e = Ad(t, e, n)));
      } else
        ((t = o.treeContext),
          (Lt = Ze(c.nextSibling)),
          (ie = e),
          (Ot = !0),
          (Vn = null),
          (Ve = !1),
          t !== null && ff(e, t),
          (e = To(e, a)),
          (e.flags |= 4096));
      return e;
    }
    return (
      (t = bn(t.child, { mode: a.mode, children: a.children })),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function Ao(t, e) {
    var n = e.ref;
    if (n === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(u(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function Yu(t, e, n, a, l) {
    return (
      _a(e),
      (n = bu(t, e, n, a, void 0, l)),
      (a = xu()),
      t !== null && !Wt
        ? (Su(t, e, l), An(t, e, l))
        : (Ot && a && tu(e), (e.flags |= 1), re(t, e, n, l), e.child)
    );
  }
  function zd(t, e, n, a, l, o) {
    return (
      _a(e),
      (e.updateQueue = null),
      (n = Mf(e, a, n, l)),
      _f(t),
      (a = xu()),
      t !== null && !Wt
        ? (Su(t, e, o), An(t, e, o))
        : (Ot && a && tu(e), (e.flags |= 1), re(t, e, n, o), e.child)
    );
  }
  function Od(t, e, n, a, l) {
    if ((_a(e), e.stateNode === null)) {
      var o = il,
        c = n.contextType;
      (typeof c == "object" && c !== null && (o = oe(c)),
        (o = new n(a, o)),
        (e.memoizedState =
          o.state !== null && o.state !== void 0 ? o.state : null),
        (o.updater = Bu),
        (e.stateNode = o),
        (o._reactInternals = e),
        (o = e.stateNode),
        (o.props = a),
        (o.state = e.memoizedState),
        (o.refs = {}),
        fu(e),
        (c = n.contextType),
        (o.context = typeof c == "object" && c !== null ? oe(c) : il),
        (o.state = e.memoizedState),
        (c = n.getDerivedStateFromProps),
        typeof c == "function" && (ju(e, n, c, a), (o.state = e.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function" ||
          (typeof o.UNSAFE_componentWillMount != "function" &&
            typeof o.componentWillMount != "function") ||
          ((c = o.state),
          typeof o.componentWillMount == "function" && o.componentWillMount(),
          typeof o.UNSAFE_componentWillMount == "function" &&
            o.UNSAFE_componentWillMount(),
          c !== o.state && Bu.enqueueReplaceState(o, o.state, null),
          si(e, a, o, l),
          ui(),
          (o.state = e.memoizedState)),
        typeof o.componentDidMount == "function" && (e.flags |= 4194308),
        (a = !0));
    } else if (t === null) {
      o = e.stateNode;
      var m = e.memoizedProps,
        x = Ha(n, m);
      o.props = x;
      var _ = o.context,
        j = n.contextType;
      ((c = il), typeof j == "object" && j !== null && (c = oe(j)));
      var X = n.getDerivedStateFromProps;
      ((j =
        typeof X == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function"),
        (m = e.pendingProps !== m),
        j ||
          (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
            typeof o.componentWillReceiveProps != "function") ||
          ((m || _ !== c) && md(e, o, a, c)),
        (Kn = !1));
      var C = e.memoizedState;
      ((o.state = C),
        si(e, a, o, l),
        ui(),
        (_ = e.memoizedState),
        m || C !== _ || Kn
          ? (typeof X == "function" && (ju(e, n, X, a), (_ = e.memoizedState)),
            (x = Kn || dd(e, n, x, a, C, _, c))
              ? (j ||
                  (typeof o.UNSAFE_componentWillMount != "function" &&
                    typeof o.componentWillMount != "function") ||
                  (typeof o.componentWillMount == "function" &&
                    o.componentWillMount(),
                  typeof o.UNSAFE_componentWillMount == "function" &&
                    o.UNSAFE_componentWillMount()),
                typeof o.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof o.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = a),
                (e.memoizedState = _)),
            (o.props = a),
            (o.state = _),
            (o.context = c),
            (a = x))
          : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
            (a = !1)));
    } else {
      ((o = e.stateNode),
        du(t, e),
        (c = e.memoizedProps),
        (j = Ha(n, c)),
        (o.props = j),
        (X = e.pendingProps),
        (C = o.context),
        (_ = n.contextType),
        (x = il),
        typeof _ == "object" && _ !== null && (x = oe(_)),
        (m = n.getDerivedStateFromProps),
        (_ =
          typeof m == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function") ||
          (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
            typeof o.componentWillReceiveProps != "function") ||
          ((c !== X || C !== x) && md(e, o, a, x)),
        (Kn = !1),
        (C = e.memoizedState),
        (o.state = C),
        si(e, a, o, l),
        ui());
      var H = e.memoizedState;
      c !== X ||
      C !== H ||
      Kn ||
      (t !== null && t.dependencies !== null && io(t.dependencies))
        ? (typeof m == "function" && (ju(e, n, m, a), (H = e.memoizedState)),
          (j =
            Kn ||
            dd(e, n, j, a, C, H, x) ||
            (t !== null && t.dependencies !== null && io(t.dependencies)))
            ? (_ ||
                (typeof o.UNSAFE_componentWillUpdate != "function" &&
                  typeof o.componentWillUpdate != "function") ||
                (typeof o.componentWillUpdate == "function" &&
                  o.componentWillUpdate(a, H, x),
                typeof o.UNSAFE_componentWillUpdate == "function" &&
                  o.UNSAFE_componentWillUpdate(a, H, x)),
              typeof o.componentDidUpdate == "function" && (e.flags |= 4),
              typeof o.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof o.componentDidUpdate != "function" ||
                (c === t.memoizedProps && C === t.memoizedState) ||
                (e.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != "function" ||
                (c === t.memoizedProps && C === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = a),
              (e.memoizedState = H)),
          (o.props = a),
          (o.state = H),
          (o.context = x),
          (a = j))
        : (typeof o.componentDidUpdate != "function" ||
            (c === t.memoizedProps && C === t.memoizedState) ||
            (e.flags |= 4),
          typeof o.getSnapshotBeforeUpdate != "function" ||
            (c === t.memoizedProps && C === t.memoizedState) ||
            (e.flags |= 1024),
          (a = !1));
    }
    return (
      (o = a),
      Ao(t, e),
      (a = (e.flags & 128) !== 0),
      o || a
        ? ((o = e.stateNode),
          (n =
            a && typeof n.getDerivedStateFromError != "function"
              ? null
              : o.render()),
          (e.flags |= 1),
          t !== null && a
            ? ((e.child = Na(e, t.child, null, l)),
              (e.child = Na(e, null, n, l)))
            : re(t, e, n, l),
          (e.memoizedState = o.state),
          (t = e.child))
        : (t = An(t, e, l)),
      t
    );
  }
  function _d(t, e, n, a) {
    return (za(), (e.flags |= 256), re(t, e, n, a), e.child);
  }
  var qu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Gu(t) {
    return { baseLanes: t, cachePool: yf() };
  }
  function Xu(t, e, n) {
    return ((t = t !== null ? t.childLanes & ~n : 0), e && (t |= He), t);
  }
  function Md(t, e, n) {
    var a = e.pendingProps,
      l = !1,
      o = (e.flags & 128) !== 0,
      c;
    if (
      ((c = o) ||
        (c =
          t !== null && t.memoizedState === null ? !1 : (Qt.current & 2) !== 0),
      c && ((l = !0), (e.flags &= -129)),
      (c = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (Ot) {
        if (
          (l ? $n(e) : Fn(),
          (t = Lt)
            ? ((t = Um(t, Ve)),
              (t = t !== null && t.data !== "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: kn !== null ? { id: ln, overflow: on } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = uf(t)),
                (n.return = e),
                (e.child = n),
                (ie = e),
                (Lt = null)))
            : (t = null),
          t === null)
        )
          throw Qn(e);
        return (Ts(t) ? (e.lanes = 32) : (e.lanes = 536870912), null);
      }
      var m = a.children;
      return (
        (a = a.fallback),
        l
          ? (Fn(),
            (l = e.mode),
            (m = zo({ mode: "hidden", children: m }, l)),
            (a = Aa(a, l, n, null)),
            (m.return = e),
            (a.return = e),
            (m.sibling = a),
            (e.child = m),
            (a = e.child),
            (a.memoizedState = Gu(n)),
            (a.childLanes = Xu(t, c, n)),
            (e.memoizedState = qu),
            hi(null, a))
          : ($n(e), ku(e, m))
      );
    }
    var x = t.memoizedState;
    if (x !== null && ((m = x.dehydrated), m !== null)) {
      if (o)
        e.flags & 256
          ? ($n(e), (e.flags &= -257), (e = Vu(t, e, n)))
          : e.memoizedState !== null
            ? (Fn(), (e.child = t.child), (e.flags |= 128), (e = null))
            : (Fn(),
              (m = a.fallback),
              (l = e.mode),
              (a = zo({ mode: "visible", children: a.children }, l)),
              (m = Aa(m, l, n, null)),
              (m.flags |= 2),
              (a.return = e),
              (m.return = e),
              (a.sibling = m),
              (e.child = a),
              Na(e, t.child, null, n),
              (a = e.child),
              (a.memoizedState = Gu(n)),
              (a.childLanes = Xu(t, c, n)),
              (e.memoizedState = qu),
              (e = hi(null, a)));
      else if (($n(e), Ts(m))) {
        if (((c = m.nextSibling && m.nextSibling.dataset), c)) var _ = c.dgst;
        ((c = _),
          (a = Error(u(419))),
          (a.stack = ""),
          (a.digest = c),
          ni({ value: a, source: null, stack: null }),
          (e = Vu(t, e, n)));
      } else if (
        (Wt || sl(t, e, n, !1), (c = (n & t.childLanes) !== 0), Wt || c)
      ) {
        if (
          ((c = Ut),
          c !== null && ((a = be(c, n)), a !== 0 && a !== x.retryLane))
        )
          throw ((x.retryLane = a), Ta(t, a), ze(c, t, a), Lu);
        (ws(m) || jo(), (e = Vu(t, e, n)));
      } else
        ws(m)
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = x.treeContext),
            (Lt = Ze(m.nextSibling)),
            (ie = e),
            (Ot = !0),
            (Vn = null),
            (Ve = !1),
            t !== null && ff(e, t),
            (e = ku(e, a.children)),
            (e.flags |= 4096));
      return e;
    }
    return l
      ? (Fn(),
        (m = a.fallback),
        (l = e.mode),
        (x = t.child),
        (_ = x.sibling),
        (a = bn(x, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = x.subtreeFlags & 65011712),
        _ !== null ? (m = bn(_, m)) : ((m = Aa(m, l, n, null)), (m.flags |= 2)),
        (m.return = e),
        (a.return = e),
        (a.sibling = m),
        (e.child = a),
        hi(null, a),
        (a = e.child),
        (m = t.child.memoizedState),
        m === null
          ? (m = Gu(n))
          : ((l = m.cachePool),
            l !== null
              ? ((x = Kt._currentValue),
                (l = l.parent !== x ? { parent: x, pool: x } : l))
              : (l = yf()),
            (m = { baseLanes: m.baseLanes | n, cachePool: l })),
        (a.memoizedState = m),
        (a.childLanes = Xu(t, c, n)),
        (e.memoizedState = qu),
        hi(t.child, a))
      : ($n(e),
        (n = t.child),
        (t = n.sibling),
        (n = bn(n, { mode: "visible", children: a.children })),
        (n.return = e),
        (n.sibling = null),
        t !== null &&
          ((c = e.deletions),
          c === null ? ((e.deletions = [t]), (e.flags |= 16)) : c.push(t)),
        (e.child = n),
        (e.memoizedState = null),
        n);
  }
  function ku(t, e) {
    return (
      (e = zo({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function zo(t, e) {
    return ((t = Ce(22, t, null, e)), (t.lanes = 0), t);
  }
  function Vu(t, e, n) {
    return (
      Na(e, t.child, null, n),
      (t = ku(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function Cd(t, e, n) {
    t.lanes |= e;
    var a = t.alternate;
    (a !== null && (a.lanes |= e), iu(t.return, e, n));
  }
  function Qu(t, e, n, a, l, o) {
    var c = t.memoizedState;
    c === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: n,
          tailMode: l,
          treeForkCount: o,
        })
      : ((c.isBackwards = e),
        (c.rendering = null),
        (c.renderingStartTime = 0),
        (c.last = a),
        (c.tail = n),
        (c.tailMode = l),
        (c.treeForkCount = o));
  }
  function Rd(t, e, n) {
    var a = e.pendingProps,
      l = a.revealOrder,
      o = a.tail;
    a = a.children;
    var c = Qt.current,
      m = (c & 2) !== 0;
    if (
      (m ? ((c = (c & 1) | 2), (e.flags |= 128)) : (c &= 1),
      B(Qt, c),
      re(t, e, a, n),
      (a = Ot ? ei : 0),
      !m && t !== null && (t.flags & 128) !== 0)
    )
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && Cd(t, n, e);
        else if (t.tag === 19) Cd(t, n, e);
        else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break t;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    switch (l) {
      case "forwards":
        for (n = e.child, l = null; n !== null; )
          ((t = n.alternate),
            t !== null && ho(t) === null && (l = n),
            (n = n.sibling));
        ((n = l),
          n === null
            ? ((l = e.child), (e.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Qu(e, !1, l, n, o, a));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, l = e.child, e.child = null; l !== null; ) {
          if (((t = l.alternate), t !== null && ho(t) === null)) {
            e.child = l;
            break;
          }
          ((t = l.sibling), (l.sibling = n), (n = l), (l = t));
        }
        Qu(e, !0, n, null, o, a);
        break;
      case "together":
        Qu(e, !1, null, null, void 0, a);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function An(t, e, n) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (ta |= e.lanes),
      (n & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((sl(t, e, n, !1), (n & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(u(153));
    if (e.child !== null) {
      for (
        t = e.child, n = bn(t, t.pendingProps), e.child = n, n.return = e;
        t.sibling !== null;
      )
        ((t = t.sibling),
          (n = n.sibling = bn(t, t.pendingProps)),
          (n.return = e));
      n.sibling = null;
    }
    return e.child;
  }
  function Zu(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && io(t)));
  }
  function mp(t, e, n) {
    switch (e.tag) {
      case 3:
        (ct(e, e.stateNode.containerInfo),
          Zn(e, Kt, t.memoizedState.cache),
          za());
        break;
      case 27:
      case 5:
        ne(e);
        break;
      case 4:
        ct(e, e.stateNode.containerInfo);
        break;
      case 10:
        Zn(e, e.type, e.memoizedProps.value);
        break;
      case 31:
        if (e.memoizedState !== null) return ((e.flags |= 128), yu(e), null);
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? ($n(e), (e.flags |= 128), null)
            : (n & e.child.childLanes) !== 0
              ? Md(t, e, n)
              : ($n(e), (t = An(t, e, n)), t !== null ? t.sibling : null);
        $n(e);
        break;
      case 19:
        var l = (t.flags & 128) !== 0;
        if (
          ((a = (n & e.childLanes) !== 0),
          a || (sl(t, e, n, !1), (a = (n & e.childLanes) !== 0)),
          l)
        ) {
          if (a) return Rd(t, e, n);
          e.flags |= 128;
        }
        if (
          ((l = e.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          B(Qt, Qt.current),
          a)
        )
          break;
        return null;
      case 22:
        return ((e.lanes = 0), wd(t, e, n, e.pendingProps));
      case 24:
        Zn(e, Kt, t.memoizedState.cache);
    }
    return An(t, e, n);
  }
  function Nd(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Wt = !0;
      else {
        if (!Zu(t, n) && (e.flags & 128) === 0) return ((Wt = !1), mp(t, e, n));
        Wt = (t.flags & 131072) !== 0;
      }
    else ((Wt = !1), Ot && (e.flags & 1048576) !== 0 && cf(e, ei, e.index));
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          var a = e.pendingProps;
          if (((t = Ca(e.elementType)), (e.type = t), typeof t == "function"))
            Fr(t)
              ? ((a = Ha(t, a)), (e.tag = 1), (e = Od(null, e, t, a, n)))
              : ((e.tag = 0), (e = Yu(null, e, t, a, n)));
          else {
            if (t != null) {
              var l = t.$$typeof;
              if (l === $) {
                ((e.tag = 11), (e = xd(null, e, t, a, n)));
                break t;
              } else if (l === Q) {
                ((e.tag = 14), (e = Sd(null, e, t, a, n)));
                break t;
              }
            }
            throw ((e = vt(t) || t), Error(u(306, e, "")));
          }
        }
        return e;
      case 0:
        return Yu(t, e, e.type, e.pendingProps, n);
      case 1:
        return ((a = e.type), (l = Ha(a, e.pendingProps)), Od(t, e, a, l, n));
      case 3:
        t: {
          if ((ct(e, e.stateNode.containerInfo), t === null))
            throw Error(u(387));
          a = e.pendingProps;
          var o = e.memoizedState;
          ((l = o.element), du(t, e), si(e, a, null, n));
          var c = e.memoizedState;
          if (
            ((a = c.cache),
            Zn(e, Kt, a),
            a !== o.cache && ou(e, [Kt], n, !0),
            ui(),
            (a = c.element),
            o.isDehydrated)
          )
            if (
              ((o = { element: a, isDehydrated: !1, cache: c.cache }),
              (e.updateQueue.baseState = o),
              (e.memoizedState = o),
              e.flags & 256)
            ) {
              e = _d(t, e, a, n);
              break t;
            } else if (a !== l) {
              ((l = Ge(Error(u(424)), e)), ni(l), (e = _d(t, e, a, n)));
              break t;
            } else {
              switch (((t = e.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (
                Lt = Ze(t.firstChild),
                  ie = e,
                  Ot = !0,
                  Vn = null,
                  Ve = !0,
                  n = wf(e, null, a, n),
                  e.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
            }
          else {
            if ((za(), a === l)) {
              e = An(t, e, n);
              break t;
            }
            re(t, e, a, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          Ao(t, e),
          t === null
            ? (n = km(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = n)
              : Ot ||
                ((n = e.type),
                (t = e.pendingProps),
                (a = Xo(ot.current).createElement(n)),
                (a[le] = e),
                (a[xe] = t),
                ue(a, n, t),
                te(a),
                (e.stateNode = a))
            : (e.memoizedState = km(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState,
              )),
          null
        );
      case 27:
        return (
          ne(e),
          t === null &&
            Ot &&
            ((a = e.stateNode = qm(e.type, e.pendingProps, ot.current)),
            (ie = e),
            (Ve = !0),
            (l = Lt),
            ia(e.type) ? ((As = l), (Lt = Ze(a.firstChild))) : (Lt = l)),
          re(t, e, e.pendingProps.children, n),
          Ao(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            Ot &&
            ((l = a = Lt) &&
              ((a = kp(a, e.type, e.pendingProps, Ve)),
              a !== null
                ? ((e.stateNode = a),
                  (ie = e),
                  (Lt = Ze(a.firstChild)),
                  (Ve = !1),
                  (l = !0))
                : (l = !1)),
            l || Qn(e)),
          ne(e),
          (l = e.type),
          (o = e.pendingProps),
          (c = t !== null ? t.memoizedProps : null),
          (a = o.children),
          xs(l, o) ? (a = null) : c !== null && xs(l, c) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((l = bu(t, e, lp, null, null, n)), (Mi._currentValue = l)),
          Ao(t, e),
          re(t, e, a, n),
          e.child
        );
      case 6:
        return (
          t === null &&
            Ot &&
            ((t = n = Lt) &&
              ((n = Vp(n, e.pendingProps, Ve)),
              n !== null
                ? ((e.stateNode = n), (ie = e), (Lt = null), (t = !0))
                : (t = !1)),
            t || Qn(e)),
          null
        );
      case 13:
        return Md(t, e, n);
      case 4:
        return (
          ct(e, e.stateNode.containerInfo),
          (a = e.pendingProps),
          t === null ? (e.child = Na(e, null, a, n)) : re(t, e, a, n),
          e.child
        );
      case 11:
        return xd(t, e, e.type, e.pendingProps, n);
      case 7:
        return (re(t, e, e.pendingProps, n), e.child);
      case 8:
        return (re(t, e, e.pendingProps.children, n), e.child);
      case 12:
        return (re(t, e, e.pendingProps.children, n), e.child);
      case 10:
        return (
          (a = e.pendingProps),
          Zn(e, e.type, a.value),
          re(t, e, a.children, n),
          e.child
        );
      case 9:
        return (
          (l = e.type._context),
          (a = e.pendingProps.children),
          _a(e),
          (l = oe(l)),
          (a = a(l)),
          (e.flags |= 1),
          re(t, e, a, n),
          e.child
        );
      case 14:
        return Sd(t, e, e.type, e.pendingProps, n);
      case 15:
        return Ed(t, e, e.type, e.pendingProps, n);
      case 19:
        return Rd(t, e, n);
      case 31:
        return dp(t, e, n);
      case 22:
        return wd(t, e, n, e.pendingProps);
      case 24:
        return (
          _a(e),
          (a = oe(Kt)),
          t === null
            ? ((l = su()),
              l === null &&
                ((l = Ut),
                (o = ru()),
                (l.pooledCache = o),
                o.refCount++,
                o !== null && (l.pooledCacheLanes |= n),
                (l = o)),
              (e.memoizedState = { parent: a, cache: l }),
              fu(e),
              Zn(e, Kt, l))
            : ((t.lanes & n) !== 0 && (du(t, e), si(e, null, null, n), ui()),
              (l = t.memoizedState),
              (o = e.memoizedState),
              l.parent !== a
                ? ((l = { parent: a, cache: a }),
                  (e.memoizedState = l),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = l),
                  Zn(e, Kt, a))
                : ((a = o.cache),
                  Zn(e, Kt, a),
                  a !== l.cache && ou(e, [Kt], n, !0))),
          re(t, e, e.pendingProps.children, n),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(u(156, e.tag));
  }
  function zn(t) {
    t.flags |= 4;
  }
  function Ku(t, e, n, a, l) {
    if (((e = (t.mode & 32) !== 0) && (e = !1), e)) {
      if (((t.flags |= 16777216), (l & 335544128) === l))
        if (t.stateNode.complete) t.flags |= 8192;
        else if (im()) t.flags |= 8192;
        else throw ((Ra = so), cu);
    } else t.flags &= -16777217;
  }
  function Dd(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !Jm(e)))
      if (im()) t.flags |= 8192;
      else throw ((Ra = so), cu);
  }
  function Oo(t, e) {
    (e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? ce() : 536870912), (t.lanes |= e), (Sl |= e)));
  }
  function gi(t, e) {
    if (!Ot)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var n = null; e !== null; )
            (e.alternate !== null && (n = e), (e = e.sibling));
          n === null ? (t.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = t.tail;
          for (var a = null; n !== null; )
            (n.alternate !== null && (a = n), (n = n.sibling));
          a === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function Yt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      n = 0,
      a = 0;
    if (e)
      for (var l = t.child; l !== null; )
        ((n |= l.lanes | l.childLanes),
          (a |= l.subtreeFlags & 65011712),
          (a |= l.flags & 65011712),
          (l.return = t),
          (l = l.sibling));
    else
      for (l = t.child; l !== null; )
        ((n |= l.lanes | l.childLanes),
          (a |= l.subtreeFlags),
          (a |= l.flags),
          (l.return = t),
          (l = l.sibling));
    return ((t.subtreeFlags |= a), (t.childLanes = n), e);
  }
  function hp(t, e, n) {
    var a = e.pendingProps;
    switch ((eu(e), e.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Yt(e), null);
      case 1:
        return (Yt(e), null);
      case 3:
        return (
          (n = e.stateNode),
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          e.memoizedState.cache !== a && (e.flags |= 2048),
          En(Kt),
          zt(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (t === null || t.child === null) &&
            (ul(e)
              ? zn(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), au())),
          Yt(e),
          null
        );
      case 26:
        var l = e.type,
          o = e.memoizedState;
        return (
          t === null
            ? (zn(e),
              o !== null ? (Yt(e), Dd(e, o)) : (Yt(e), Ku(e, l, null, a, n)))
            : o
              ? o !== t.memoizedState
                ? (zn(e), Yt(e), Dd(e, o))
                : (Yt(e), (e.flags &= -16777217))
              : ((t = t.memoizedProps),
                t !== a && zn(e),
                Yt(e),
                Ku(e, l, t, a, n)),
          null
        );
      case 27:
        if (
          (de(e),
          (n = ot.current),
          (l = e.type),
          t !== null && e.stateNode != null)
        )
          t.memoizedProps !== a && zn(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(u(166));
            return (Yt(e), null);
          }
          ((t = V.current),
            ul(e) ? df(e) : ((t = qm(l, a, n)), (e.stateNode = t), zn(e)));
        }
        return (Yt(e), null);
      case 5:
        if ((de(e), (l = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== a && zn(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(u(166));
            return (Yt(e), null);
          }
          if (((o = V.current), ul(e))) df(e);
          else {
            var c = Xo(ot.current);
            switch (o) {
              case 1:
                o = c.createElementNS("http://www.w3.org/2000/svg", l);
                break;
              case 2:
                o = c.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                break;
              default:
                switch (l) {
                  case "svg":
                    o = c.createElementNS("http://www.w3.org/2000/svg", l);
                    break;
                  case "math":
                    o = c.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      l,
                    );
                    break;
                  case "script":
                    ((o = c.createElement("div")),
                      (o.innerHTML = "<script><\/script>"),
                      (o = o.removeChild(o.firstChild)));
                    break;
                  case "select":
                    ((o =
                      typeof a.is == "string"
                        ? c.createElement("select", { is: a.is })
                        : c.createElement("select")),
                      a.multiple
                        ? (o.multiple = !0)
                        : a.size && (o.size = a.size));
                    break;
                  default:
                    o =
                      typeof a.is == "string"
                        ? c.createElement(l, { is: a.is })
                        : c.createElement(l);
                }
            }
            ((o[le] = e), (o[xe] = a));
            t: for (c = e.child; c !== null; ) {
              if (c.tag === 5 || c.tag === 6) o.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                ((c.child.return = c), (c = c.child));
                continue;
              }
              if (c === e) break t;
              for (; c.sibling === null; ) {
                if (c.return === null || c.return === e) break t;
                c = c.return;
              }
              ((c.sibling.return = c.return), (c = c.sibling));
            }
            e.stateNode = o;
            t: switch ((ue(o, l, a), l)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break t;
              case "img":
                a = !0;
                break t;
              default:
                a = !1;
            }
            a && zn(e);
          }
        }
        return (
          Yt(e),
          Ku(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, n),
          null
        );
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== a && zn(e);
        else {
          if (typeof a != "string" && e.stateNode === null) throw Error(u(166));
          if (((t = ot.current), ul(e))) {
            if (
              ((t = e.stateNode),
              (n = e.memoizedProps),
              (a = null),
              (l = ie),
              l !== null)
            )
              switch (l.tag) {
                case 27:
                case 5:
                  a = l.memoizedProps;
              }
            ((t[le] = e),
              (t = !!(
                t.nodeValue === n ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                Mm(t.nodeValue, n)
              )),
              t || Qn(e, !0));
          } else
            ((t = Xo(t).createTextNode(a)), (t[le] = e), (e.stateNode = t));
        }
        return (Yt(e), null);
      case 31:
        if (((n = e.memoizedState), t === null || t.memoizedState !== null)) {
          if (((a = ul(e)), n !== null)) {
            if (t === null) {
              if (!a) throw Error(u(318));
              if (
                ((t = e.memoizedState),
                (t = t !== null ? t.dehydrated : null),
                !t)
              )
                throw Error(u(557));
              t[le] = e;
            } else
              (za(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4));
            (Yt(e), (t = !1));
          } else
            ((n = au()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = n),
              (t = !0));
          if (!t) return e.flags & 256 ? (Ne(e), e) : (Ne(e), null);
          if ((e.flags & 128) !== 0) throw Error(u(558));
        }
        return (Yt(e), null);
      case 13:
        if (
          ((a = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((l = ul(e)), a !== null && a.dehydrated !== null)) {
            if (t === null) {
              if (!l) throw Error(u(318));
              if (
                ((l = e.memoizedState),
                (l = l !== null ? l.dehydrated : null),
                !l)
              )
                throw Error(u(317));
              l[le] = e;
            } else
              (za(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4));
            (Yt(e), (l = !1));
          } else
            ((l = au()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = l),
              (l = !0));
          if (!l) return e.flags & 256 ? (Ne(e), e) : (Ne(e), null);
        }
        return (
          Ne(e),
          (e.flags & 128) !== 0
            ? ((e.lanes = n), e)
            : ((n = a !== null),
              (t = t !== null && t.memoizedState !== null),
              n &&
                ((a = e.child),
                (l = null),
                a.alternate !== null &&
                  a.alternate.memoizedState !== null &&
                  a.alternate.memoizedState.cachePool !== null &&
                  (l = a.alternate.memoizedState.cachePool.pool),
                (o = null),
                a.memoizedState !== null &&
                  a.memoizedState.cachePool !== null &&
                  (o = a.memoizedState.cachePool.pool),
                o !== l && (a.flags |= 2048)),
              n !== t && n && (e.child.flags |= 8192),
              Oo(e, e.updateQueue),
              Yt(e),
              null)
        );
      case 4:
        return (zt(), t === null && gs(e.stateNode.containerInfo), Yt(e), null);
      case 10:
        return (En(e.type), Yt(e), null);
      case 19:
        if ((U(Qt), (a = e.memoizedState), a === null)) return (Yt(e), null);
        if (((l = (e.flags & 128) !== 0), (o = a.rendering), o === null))
          if (l) gi(a, !1);
          else {
            if (Vt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((o = ho(t)), o !== null)) {
                  for (
                    e.flags |= 128,
                      gi(a, !1),
                      t = o.updateQueue,
                      e.updateQueue = t,
                      Oo(e, t),
                      e.subtreeFlags = 0,
                      t = n,
                      n = e.child;
                    n !== null;
                  )
                    (rf(n, t), (n = n.sibling));
                  return (
                    B(Qt, (Qt.current & 1) | 2),
                    Ot && xn(e, a.treeForkCount),
                    e.child
                  );
                }
                t = t.sibling;
              }
            a.tail !== null &&
              he() > No &&
              ((e.flags |= 128), (l = !0), gi(a, !1), (e.lanes = 4194304));
          }
        else {
          if (!l)
            if (((t = ho(o)), t !== null)) {
              if (
                ((e.flags |= 128),
                (l = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                Oo(e, t),
                gi(a, !0),
                a.tail === null &&
                  a.tailMode === "hidden" &&
                  !o.alternate &&
                  !Ot)
              )
                return (Yt(e), null);
            } else
              2 * he() - a.renderingStartTime > No &&
                n !== 536870912 &&
                ((e.flags |= 128), (l = !0), gi(a, !1), (e.lanes = 4194304));
          a.isBackwards
            ? ((o.sibling = e.child), (e.child = o))
            : ((t = a.last),
              t !== null ? (t.sibling = o) : (e.child = o),
              (a.last = o));
        }
        return a.tail !== null
          ? ((t = a.tail),
            (a.rendering = t),
            (a.tail = t.sibling),
            (a.renderingStartTime = he()),
            (t.sibling = null),
            (n = Qt.current),
            B(Qt, l ? (n & 1) | 2 : n & 1),
            Ot && xn(e, a.treeForkCount),
            t)
          : (Yt(e), null);
      case 22:
      case 23:
        return (
          Ne(e),
          pu(),
          (a = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== a && (e.flags |= 8192)
            : a && (e.flags |= 8192),
          a
            ? (n & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (Yt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : Yt(e),
          (n = e.updateQueue),
          n !== null && Oo(e, n.retryQueue),
          (n = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (n = t.memoizedState.cachePool.pool),
          (a = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          a !== n && (e.flags |= 2048),
          t !== null && U(Ma),
          null
        );
      case 24:
        return (
          (n = null),
          t !== null && (n = t.memoizedState.cache),
          e.memoizedState.cache !== n && (e.flags |= 2048),
          En(Kt),
          Yt(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(u(156, e.tag));
  }
  function gp(t, e) {
    switch ((eu(e), e.tag)) {
      case 1:
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          En(Kt),
          zt(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (de(e), null);
      case 31:
        if (e.memoizedState !== null) {
          if ((Ne(e), e.alternate === null)) throw Error(u(340));
          za();
        }
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 13:
        if (
          (Ne(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(u(340));
          za();
        }
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return (U(Qt), null);
      case 4:
        return (zt(), null);
      case 10:
        return (En(e.type), null);
      case 22:
      case 23:
        return (
          Ne(e),
          pu(),
          t !== null && U(Ma),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return (En(Kt), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Hd(t, e) {
    switch ((eu(e), e.tag)) {
      case 3:
        (En(Kt), zt());
        break;
      case 26:
      case 27:
      case 5:
        de(e);
        break;
      case 4:
        zt();
        break;
      case 31:
        e.memoizedState !== null && Ne(e);
        break;
      case 13:
        Ne(e);
        break;
      case 19:
        U(Qt);
        break;
      case 10:
        En(e.type);
        break;
      case 22:
      case 23:
        (Ne(e), pu(), t !== null && U(Ma));
        break;
      case 24:
        En(Kt);
    }
  }
  function pi(t, e) {
    try {
      var n = e.updateQueue,
        a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var l = a.next;
        n = l;
        do {
          if ((n.tag & t) === t) {
            a = void 0;
            var o = n.create,
              c = n.inst;
            ((a = o()), (c.destroy = a));
          }
          n = n.next;
        } while (n !== l);
      }
    } catch (m) {
      Dt(e, e.return, m);
    }
  }
  function Pn(t, e, n) {
    try {
      var a = e.updateQueue,
        l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var o = l.next;
        a = o;
        do {
          if ((a.tag & t) === t) {
            var c = a.inst,
              m = c.destroy;
            if (m !== void 0) {
              ((c.destroy = void 0), (l = e));
              var x = n,
                _ = m;
              try {
                _();
              } catch (j) {
                Dt(l, x, j);
              }
            }
          }
          a = a.next;
        } while (a !== o);
      }
    } catch (j) {
      Dt(e, e.return, j);
    }
  }
  function jd(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        Af(e, n);
      } catch (a) {
        Dt(t, t.return, a);
      }
    }
  }
  function Bd(t, e, n) {
    ((n.props = Ha(t.type, t.memoizedProps)), (n.state = t.memoizedState));
    try {
      n.componentWillUnmount();
    } catch (a) {
      Dt(t, e, a);
    }
  }
  function yi(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof n == "function" ? (t.refCleanup = n(a)) : (n.current = a);
      }
    } catch (l) {
      Dt(t, e, l);
    }
  }
  function rn(t, e) {
    var n = t.ref,
      a = t.refCleanup;
    if (n !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (l) {
          Dt(t, e, l);
        } finally {
          ((t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null));
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (l) {
          Dt(t, e, l);
        }
      else n.current = null;
  }
  function Ud(t) {
    var e = t.type,
      n = t.memoizedProps,
      a = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && a.focus();
          break t;
        case "img":
          n.src ? (a.src = n.src) : n.srcSet && (a.srcset = n.srcSet);
      }
    } catch (l) {
      Dt(t, t.return, l);
    }
  }
  function Ju(t, e, n) {
    try {
      var a = t.stateNode;
      (Up(a, t.type, n, e), (a[xe] = e));
    } catch (l) {
      Dt(t, t.return, l);
    }
  }
  function Ld(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && ia(t.type)) ||
      t.tag === 4
    );
  }
  function Wu(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || Ld(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;
      ) {
        if (
          (t.tag === 27 && ia(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        ((t.child.return = t), (t = t.child));
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function $u(t, e, n) {
    var a = t.tag;
    if (a === 5 || a === 6)
      ((t = t.stateNode),
        e
          ? (n.nodeType === 9
              ? n.body
              : n.nodeName === "HTML"
                ? n.ownerDocument.body
                : n
            ).insertBefore(t, e)
          : ((e =
              n.nodeType === 9
                ? n.body
                : n.nodeName === "HTML"
                  ? n.ownerDocument.body
                  : n),
            e.appendChild(t),
            (n = n._reactRootContainer),
            n != null || e.onclick !== null || (e.onclick = yn)));
    else if (
      a !== 4 &&
      (a === 27 && ia(t.type) && ((n = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for ($u(t, e, n), t = t.sibling; t !== null; )
        ($u(t, e, n), (t = t.sibling));
  }
  function _o(t, e, n) {
    var a = t.tag;
    if (a === 5 || a === 6)
      ((t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t));
    else if (
      a !== 4 &&
      (a === 27 && ia(t.type) && (n = t.stateNode), (t = t.child), t !== null)
    )
      for (_o(t, e, n), t = t.sibling; t !== null; )
        (_o(t, e, n), (t = t.sibling));
  }
  function Yd(t) {
    var e = t.stateNode,
      n = t.memoizedProps;
    try {
      for (var a = t.type, l = e.attributes; l.length; )
        e.removeAttributeNode(l[0]);
      (ue(e, a, n), (e[le] = t), (e[xe] = n));
    } catch (o) {
      Dt(t, t.return, o);
    }
  }
  var On = !1,
    $t = !1,
    Fu = !1,
    qd = typeof WeakSet == "function" ? WeakSet : Set,
    ee = null;
  function pp(t, e) {
    if (((t = t.containerInfo), (vs = Wo), (t = Fc(t)), Vr(t))) {
      if ("selectionStart" in t)
        var n = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          n = ((n = t.ownerDocument) && n.defaultView) || window;
          var a = n.getSelection && n.getSelection();
          if (a && a.rangeCount !== 0) {
            n = a.anchorNode;
            var l = a.anchorOffset,
              o = a.focusNode;
            a = a.focusOffset;
            try {
              (n.nodeType, o.nodeType);
            } catch {
              n = null;
              break t;
            }
            var c = 0,
              m = -1,
              x = -1,
              _ = 0,
              j = 0,
              X = t,
              C = null;
            e: for (;;) {
              for (
                var H;
                X !== n || (l !== 0 && X.nodeType !== 3) || (m = c + l),
                  X !== o || (a !== 0 && X.nodeType !== 3) || (x = c + a),
                  X.nodeType === 3 && (c += X.nodeValue.length),
                  (H = X.firstChild) !== null;
              )
                ((C = X), (X = H));
              for (;;) {
                if (X === t) break e;
                if (
                  (C === n && ++_ === l && (m = c),
                  C === o && ++j === a && (x = c),
                  (H = X.nextSibling) !== null)
                )
                  break;
                ((X = C), (C = X.parentNode));
              }
              X = H;
            }
            n = m === -1 || x === -1 ? null : { start: m, end: x };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      bs = { focusedElem: t, selectionRange: n }, Wo = !1, ee = e;
      ee !== null;
    )
      if (
        ((e = ee), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null)
      )
        ((t.return = e), (ee = t));
      else
        for (; ee !== null; ) {
          switch (((e = ee), (o = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              if (
                (t & 4) !== 0 &&
                ((t = e.updateQueue),
                (t = t !== null ? t.events : null),
                t !== null)
              )
                for (n = 0; n < t.length; n++)
                  ((l = t[n]), (l.ref.impl = l.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && o !== null) {
                ((t = void 0),
                  (n = e),
                  (l = o.memoizedProps),
                  (o = o.memoizedState),
                  (a = n.stateNode));
                try {
                  var P = Ha(n.type, l);
                  ((t = a.getSnapshotBeforeUpdate(P, o)),
                    (a.__reactInternalSnapshotBeforeUpdate = t));
                } catch (st) {
                  Dt(n, n.return, st);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (n = t.nodeType), n === 9)
                )
                  Es(t);
                else if (n === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Es(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(u(163));
          }
          if (((t = e.sibling), t !== null)) {
            ((t.return = e.return), (ee = t));
            break;
          }
          ee = e.return;
        }
  }
  function Gd(t, e, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (Mn(t, n), a & 4 && pi(5, n));
        break;
      case 1:
        if ((Mn(t, n), a & 4))
          if (((t = n.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (c) {
              Dt(n, n.return, c);
            }
          else {
            var l = Ha(n.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(l, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (c) {
              Dt(n, n.return, c);
            }
          }
        (a & 64 && jd(n), a & 512 && yi(n, n.return));
        break;
      case 3:
        if ((Mn(t, n), a & 64 && ((t = n.updateQueue), t !== null))) {
          if (((e = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          try {
            Af(t, e);
          } catch (c) {
            Dt(n, n.return, c);
          }
        }
        break;
      case 27:
        e === null && a & 4 && Yd(n);
      case 26:
      case 5:
        (Mn(t, n), e === null && a & 4 && Ud(n), a & 512 && yi(n, n.return));
        break;
      case 12:
        Mn(t, n);
        break;
      case 31:
        (Mn(t, n), a & 4 && Vd(t, n));
        break;
      case 13:
        (Mn(t, n),
          a & 4 && Qd(t, n),
          a & 64 &&
            ((t = n.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((n = Ap.bind(null, n)), Qp(t, n)))));
        break;
      case 22:
        if (((a = n.memoizedState !== null || On), !a)) {
          ((e = (e !== null && e.memoizedState !== null) || $t), (l = On));
          var o = $t;
          ((On = a),
            ($t = e) && !o ? Cn(t, n, (n.subtreeFlags & 8772) !== 0) : Mn(t, n),
            (On = l),
            ($t = o));
        }
        break;
      case 30:
        break;
      default:
        Mn(t, n);
    }
  }
  function Xd(t) {
    var e = t.alternate;
    (e !== null && ((t.alternate = null), Xd(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && Or(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null));
  }
  var Gt = null,
    Ee = !1;
  function _n(t, e, n) {
    for (n = n.child; n !== null; ) (kd(t, e, n), (n = n.sibling));
  }
  function kd(t, e, n) {
    if (ge && typeof ge.onCommitFiberUnmount == "function")
      try {
        ge.onCommitFiberUnmount(ya, n);
      } catch {}
    switch (n.tag) {
      case 26:
        ($t || rn(n, e),
          _n(t, e, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
        break;
      case 27:
        $t || rn(n, e);
        var a = Gt,
          l = Ee;
        (ia(n.type) && ((Gt = n.stateNode), (Ee = !1)),
          _n(t, e, n),
          zi(n.stateNode),
          (Gt = a),
          (Ee = l));
        break;
      case 5:
        $t || rn(n, e);
      case 6:
        if (
          ((a = Gt),
          (l = Ee),
          (Gt = null),
          _n(t, e, n),
          (Gt = a),
          (Ee = l),
          Gt !== null)
        )
          if (Ee)
            try {
              (Gt.nodeType === 9
                ? Gt.body
                : Gt.nodeName === "HTML"
                  ? Gt.ownerDocument.body
                  : Gt
              ).removeChild(n.stateNode);
            } catch (o) {
              Dt(n, e, o);
            }
          else
            try {
              Gt.removeChild(n.stateNode);
            } catch (o) {
              Dt(n, e, o);
            }
        break;
      case 18:
        Gt !== null &&
          (Ee
            ? ((t = Gt),
              jm(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                    ? t.ownerDocument.body
                    : t,
                n.stateNode,
              ),
              Ml(t))
            : jm(Gt, n.stateNode));
        break;
      case 4:
        ((a = Gt),
          (l = Ee),
          (Gt = n.stateNode.containerInfo),
          (Ee = !0),
          _n(t, e, n),
          (Gt = a),
          (Ee = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Pn(2, n, e), $t || Pn(4, n, e), _n(t, e, n));
        break;
      case 1:
        ($t ||
          (rn(n, e),
          (a = n.stateNode),
          typeof a.componentWillUnmount == "function" && Bd(n, e, a)),
          _n(t, e, n));
        break;
      case 21:
        _n(t, e, n);
        break;
      case 22:
        (($t = (a = $t) || n.memoizedState !== null), _n(t, e, n), ($t = a));
        break;
      default:
        _n(t, e, n);
    }
  }
  function Vd(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate), t !== null && ((t = t.memoizedState), t !== null))
    ) {
      t = t.dehydrated;
      try {
        Ml(t);
      } catch (n) {
        Dt(e, e.return, n);
      }
    }
  }
  function Qd(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        Ml(t);
      } catch (n) {
        Dt(e, e.return, n);
      }
  }
  function yp(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return (e === null && (e = t.stateNode = new qd()), e);
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new qd()),
          e
        );
      default:
        throw Error(u(435, t.tag));
    }
  }
  function Mo(t, e) {
    var n = yp(t);
    e.forEach(function (a) {
      if (!n.has(a)) {
        n.add(a);
        var l = zp.bind(null, t, a);
        a.then(l, l);
      }
    });
  }
  function we(t, e) {
    var n = e.deletions;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var l = n[a],
          o = t,
          c = e,
          m = c;
        t: for (; m !== null; ) {
          switch (m.tag) {
            case 27:
              if (ia(m.type)) {
                ((Gt = m.stateNode), (Ee = !1));
                break t;
              }
              break;
            case 5:
              ((Gt = m.stateNode), (Ee = !1));
              break t;
            case 3:
            case 4:
              ((Gt = m.stateNode.containerInfo), (Ee = !0));
              break t;
          }
          m = m.return;
        }
        if (Gt === null) throw Error(u(160));
        (kd(o, c, l),
          (Gt = null),
          (Ee = !1),
          (o = l.alternate),
          o !== null && (o.return = null),
          (l.return = null));
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; ) (Zd(e, t), (e = e.sibling));
  }
  var Pe = null;
  function Zd(t, e) {
    var n = t.alternate,
      a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (we(e, t),
          Te(t),
          a & 4 && (Pn(3, t, t.return), pi(3, t), Pn(5, t, t.return)));
        break;
      case 1:
        (we(e, t),
          Te(t),
          a & 512 && ($t || n === null || rn(n, n.return)),
          a & 64 &&
            On &&
            ((t = t.updateQueue),
            t !== null &&
              ((a = t.callbacks),
              a !== null &&
                ((n = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = n === null ? a : n.concat(a))))));
        break;
      case 26:
        var l = Pe;
        if (
          (we(e, t),
          Te(t),
          a & 512 && ($t || n === null || rn(n, n.return)),
          a & 4)
        ) {
          var o = n !== null ? n.memoizedState : null;
          if (((a = t.memoizedState), n === null))
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  ((a = t.type),
                    (n = t.memoizedProps),
                    (l = l.ownerDocument || l));
                  e: switch (a) {
                    case "title":
                      ((o = l.getElementsByTagName("title")[0]),
                        (!o ||
                          o[Vl] ||
                          o[le] ||
                          o.namespaceURI === "http://www.w3.org/2000/svg" ||
                          o.hasAttribute("itemprop")) &&
                          ((o = l.createElement(a)),
                          l.head.insertBefore(
                            o,
                            l.querySelector("head > title"),
                          )),
                        ue(o, a, n),
                        (o[le] = t),
                        te(o),
                        (a = o));
                      break t;
                    case "link":
                      var c = Zm("link", "href", l).get(a + (n.href || ""));
                      if (c) {
                        for (var m = 0; m < c.length; m++)
                          if (
                            ((o = c[m]),
                            o.getAttribute("href") ===
                              (n.href == null || n.href === ""
                                ? null
                                : n.href) &&
                              o.getAttribute("rel") ===
                                (n.rel == null ? null : n.rel) &&
                              o.getAttribute("title") ===
                                (n.title == null ? null : n.title) &&
                              o.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            c.splice(m, 1);
                            break e;
                          }
                      }
                      ((o = l.createElement(a)),
                        ue(o, a, n),
                        l.head.appendChild(o));
                      break;
                    case "meta":
                      if (
                        (c = Zm("meta", "content", l).get(
                          a + (n.content || ""),
                        ))
                      ) {
                        for (m = 0; m < c.length; m++)
                          if (
                            ((o = c[m]),
                            o.getAttribute("content") ===
                              (n.content == null ? null : "" + n.content) &&
                              o.getAttribute("name") ===
                                (n.name == null ? null : n.name) &&
                              o.getAttribute("property") ===
                                (n.property == null ? null : n.property) &&
                              o.getAttribute("http-equiv") ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              o.getAttribute("charset") ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            c.splice(m, 1);
                            break e;
                          }
                      }
                      ((o = l.createElement(a)),
                        ue(o, a, n),
                        l.head.appendChild(o));
                      break;
                    default:
                      throw Error(u(468, a));
                  }
                  ((o[le] = t), te(o), (a = o));
                }
                t.stateNode = a;
              } else Km(l, t.type, t.stateNode);
            else t.stateNode = Qm(l, a, t.memoizedProps);
          else
            o !== a
              ? (o === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : o.count--,
                a === null
                  ? Km(l, t.type, t.stateNode)
                  : Qm(l, a, t.memoizedProps))
              : a === null &&
                t.stateNode !== null &&
                Ju(t, t.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        (we(e, t),
          Te(t),
          a & 512 && ($t || n === null || rn(n, n.return)),
          n !== null && a & 4 && Ju(t, t.memoizedProps, n.memoizedProps));
        break;
      case 5:
        if (
          (we(e, t),
          Te(t),
          a & 512 && ($t || n === null || rn(n, n.return)),
          t.flags & 32)
        ) {
          l = t.stateNode;
          try {
            Pa(l, "");
          } catch (P) {
            Dt(t, t.return, P);
          }
        }
        (a & 4 &&
          t.stateNode != null &&
          ((l = t.memoizedProps), Ju(t, l, n !== null ? n.memoizedProps : l)),
          a & 1024 && (Fu = !0));
        break;
      case 6:
        if ((we(e, t), Te(t), a & 4)) {
          if (t.stateNode === null) throw Error(u(162));
          ((a = t.memoizedProps), (n = t.stateNode));
          try {
            n.nodeValue = a;
          } catch (P) {
            Dt(t, t.return, P);
          }
        }
        break;
      case 3:
        if (
          ((Qo = null),
          (l = Pe),
          (Pe = ko(e.containerInfo)),
          we(e, t),
          (Pe = l),
          Te(t),
          a & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Ml(e.containerInfo);
          } catch (P) {
            Dt(t, t.return, P);
          }
        Fu && ((Fu = !1), Kd(t));
        break;
      case 4:
        ((a = Pe),
          (Pe = ko(t.stateNode.containerInfo)),
          we(e, t),
          Te(t),
          (Pe = a));
        break;
      case 12:
        (we(e, t), Te(t));
        break;
      case 31:
        (we(e, t),
          Te(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), Mo(t, a))));
        break;
      case 13:
        (we(e, t),
          Te(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (Ro = he()),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), Mo(t, a))));
        break;
      case 22:
        l = t.memoizedState !== null;
        var x = n !== null && n.memoizedState !== null,
          _ = On,
          j = $t;
        if (
          ((On = _ || l),
          ($t = j || x),
          we(e, t),
          ($t = j),
          (On = _),
          Te(t),
          a & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = l ? e._visibility & -2 : e._visibility | 1,
              l && (n === null || x || On || $t || ja(t)),
              n = null,
              e = t;
            ;
          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (n === null) {
                x = n = e;
                try {
                  if (((o = x.stateNode), l))
                    ((c = o.style),
                      typeof c.setProperty == "function"
                        ? c.setProperty("display", "none", "important")
                        : (c.display = "none"));
                  else {
                    m = x.stateNode;
                    var X = x.memoizedProps.style,
                      C =
                        X != null && X.hasOwnProperty("display")
                          ? X.display
                          : null;
                    m.style.display =
                      C == null || typeof C == "boolean" ? "" : ("" + C).trim();
                  }
                } catch (P) {
                  Dt(x, x.return, P);
                }
              }
            } else if (e.tag === 6) {
              if (n === null) {
                x = e;
                try {
                  x.stateNode.nodeValue = l ? "" : x.memoizedProps;
                } catch (P) {
                  Dt(x, x.return, P);
                }
              }
            } else if (e.tag === 18) {
              if (n === null) {
                x = e;
                try {
                  var H = x.stateNode;
                  l ? Bm(H, !0) : Bm(x.stateNode, !1);
                } catch (P) {
                  Dt(x, x.return, P);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              ((e.child.return = e), (e = e.child));
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              (n === e && (n = null), (e = e.return));
            }
            (n === e && (n = null),
              (e.sibling.return = e.return),
              (e = e.sibling));
          }
        a & 4 &&
          ((a = t.updateQueue),
          a !== null &&
            ((n = a.retryQueue),
            n !== null && ((a.retryQueue = null), Mo(t, n))));
        break;
      case 19:
        (we(e, t),
          Te(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), Mo(t, a))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (we(e, t), Te(t));
    }
  }
  function Te(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, a = t.return; a !== null; ) {
          if (Ld(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        if (n == null) throw Error(u(160));
        switch (n.tag) {
          case 27:
            var l = n.stateNode,
              o = Wu(t);
            _o(t, o, l);
            break;
          case 5:
            var c = n.stateNode;
            n.flags & 32 && (Pa(c, ""), (n.flags &= -33));
            var m = Wu(t);
            _o(t, m, c);
            break;
          case 3:
          case 4:
            var x = n.stateNode.containerInfo,
              _ = Wu(t);
            $u(t, _, x);
            break;
          default:
            throw Error(u(161));
        }
      } catch (j) {
        Dt(t, t.return, j);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Kd(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        (Kd(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling));
      }
  }
  function Mn(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) (Gd(t, e.alternate, e), (e = e.sibling));
  }
  function ja(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (Pn(4, e, e.return), ja(e));
          break;
        case 1:
          rn(e, e.return);
          var n = e.stateNode;
          (typeof n.componentWillUnmount == "function" && Bd(e, e.return, n),
            ja(e));
          break;
        case 27:
          zi(e.stateNode);
        case 26:
        case 5:
          (rn(e, e.return), ja(e));
          break;
        case 22:
          e.memoizedState === null && ja(e);
          break;
        case 30:
          ja(e);
          break;
        default:
          ja(e);
      }
      t = t.sibling;
    }
  }
  function Cn(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate,
        l = t,
        o = e,
        c = o.flags;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          (Cn(l, o, n), pi(4, o));
          break;
        case 1:
          if (
            (Cn(l, o, n),
            (a = o),
            (l = a.stateNode),
            typeof l.componentDidMount == "function")
          )
            try {
              l.componentDidMount();
            } catch (_) {
              Dt(a, a.return, _);
            }
          if (((a = o), (l = a.updateQueue), l !== null)) {
            var m = a.stateNode;
            try {
              var x = l.shared.hiddenCallbacks;
              if (x !== null)
                for (l.shared.hiddenCallbacks = null, l = 0; l < x.length; l++)
                  Tf(x[l], m);
            } catch (_) {
              Dt(a, a.return, _);
            }
          }
          (n && c & 64 && jd(o), yi(o, o.return));
          break;
        case 27:
          Yd(o);
        case 26:
        case 5:
          (Cn(l, o, n), n && a === null && c & 4 && Ud(o), yi(o, o.return));
          break;
        case 12:
          Cn(l, o, n);
          break;
        case 31:
          (Cn(l, o, n), n && c & 4 && Vd(l, o));
          break;
        case 13:
          (Cn(l, o, n), n && c & 4 && Qd(l, o));
          break;
        case 22:
          (o.memoizedState === null && Cn(l, o, n), yi(o, o.return));
          break;
        case 30:
          break;
        default:
          Cn(l, o, n);
      }
      e = e.sibling;
    }
  }
  function Pu(t, e) {
    var n = null;
    (t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (n = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== n && (t != null && t.refCount++, n != null && ai(n)));
  }
  function Iu(t, e) {
    ((t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && ai(t)));
  }
  function Ie(t, e, n, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (Jd(t, e, n, a), (e = e.sibling));
  }
  function Jd(t, e, n, a) {
    var l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (Ie(t, e, n, a), l & 2048 && pi(9, e));
        break;
      case 1:
        Ie(t, e, n, a);
        break;
      case 3:
        (Ie(t, e, n, a),
          l & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && ai(t))));
        break;
      case 12:
        if (l & 2048) {
          (Ie(t, e, n, a), (t = e.stateNode));
          try {
            var o = e.memoizedProps,
              c = o.id,
              m = o.onPostCommit;
            typeof m == "function" &&
              m(
                c,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0,
              );
          } catch (x) {
            Dt(e, e.return, x);
          }
        } else Ie(t, e, n, a);
        break;
      case 31:
        Ie(t, e, n, a);
        break;
      case 13:
        Ie(t, e, n, a);
        break;
      case 23:
        break;
      case 22:
        ((o = e.stateNode),
          (c = e.alternate),
          e.memoizedState !== null
            ? o._visibility & 2
              ? Ie(t, e, n, a)
              : vi(t, e)
            : o._visibility & 2
              ? Ie(t, e, n, a)
              : ((o._visibility |= 2),
                vl(t, e, n, a, (e.subtreeFlags & 10256) !== 0 || !1)),
          l & 2048 && Pu(c, e));
        break;
      case 24:
        (Ie(t, e, n, a), l & 2048 && Iu(e.alternate, e));
        break;
      default:
        Ie(t, e, n, a);
    }
  }
  function vl(t, e, n, a, l) {
    for (
      l = l && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child;
      e !== null;
    ) {
      var o = t,
        c = e,
        m = n,
        x = a,
        _ = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          (vl(o, c, m, x, l), pi(8, c));
          break;
        case 23:
          break;
        case 22:
          var j = c.stateNode;
          (c.memoizedState !== null
            ? j._visibility & 2
              ? vl(o, c, m, x, l)
              : vi(o, c)
            : ((j._visibility |= 2), vl(o, c, m, x, l)),
            l && _ & 2048 && Pu(c.alternate, c));
          break;
        case 24:
          (vl(o, c, m, x, l), l && _ & 2048 && Iu(c.alternate, c));
          break;
        default:
          vl(o, c, m, x, l);
      }
      e = e.sibling;
    }
  }
  function vi(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t,
          a = e,
          l = a.flags;
        switch (a.tag) {
          case 22:
            (vi(n, a), l & 2048 && Pu(a.alternate, a));
            break;
          case 24:
            (vi(n, a), l & 2048 && Iu(a.alternate, a));
            break;
          default:
            vi(n, a);
        }
        e = e.sibling;
      }
  }
  var bi = 8192;
  function bl(t, e, n) {
    if (t.subtreeFlags & bi)
      for (t = t.child; t !== null; ) (Wd(t, e, n), (t = t.sibling));
  }
  function Wd(t, e, n) {
    switch (t.tag) {
      case 26:
        (bl(t, e, n),
          t.flags & bi &&
            t.memoizedState !== null &&
            ay(n, Pe, t.memoizedState, t.memoizedProps));
        break;
      case 5:
        bl(t, e, n);
        break;
      case 3:
      case 4:
        var a = Pe;
        ((Pe = ko(t.stateNode.containerInfo)), bl(t, e, n), (Pe = a));
        break;
      case 22:
        t.memoizedState === null &&
          ((a = t.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = bi), (bi = 16777216), bl(t, e, n), (bi = a))
            : bl(t, e, n));
        break;
      default:
        bl(t, e, n);
    }
  }
  function $d(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do ((e = t.sibling), (t.sibling = null), (t = e));
      while (t !== null);
    }
  }
  function xi(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          ((ee = a), Pd(a, t));
        }
      $d(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (Fd(t), (t = t.sibling));
  }
  function Fd(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (xi(t), t.flags & 2048 && Pn(9, t, t.return));
        break;
      case 3:
        xi(t);
        break;
      case 12:
        xi(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), Co(t))
          : xi(t);
        break;
      default:
        xi(t);
    }
  }
  function Co(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          ((ee = a), Pd(a, t));
        }
      $d(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          (Pn(8, e, e.return), Co(e));
          break;
        case 22:
          ((n = e.stateNode),
            n._visibility & 2 && ((n._visibility &= -3), Co(e)));
          break;
        default:
          Co(e);
      }
      t = t.sibling;
    }
  }
  function Pd(t, e) {
    for (; ee !== null; ) {
      var n = ee;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Pn(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          ai(n.memoizedState.cache);
      }
      if (((a = n.child), a !== null)) ((a.return = n), (ee = a));
      else
        t: for (n = t; ee !== null; ) {
          a = ee;
          var l = a.sibling,
            o = a.return;
          if ((Xd(a), a === n)) {
            ee = null;
            break t;
          }
          if (l !== null) {
            ((l.return = o), (ee = l));
            break t;
          }
          ee = o;
        }
    }
  }
  var vp = {
      getCacheForType: function (t) {
        var e = oe(Kt),
          n = e.data.get(t);
        return (n === void 0 && ((n = t()), e.data.set(t, n)), n);
      },
      cacheSignal: function () {
        return oe(Kt).controller.signal;
      },
    },
    bp = typeof WeakMap == "function" ? WeakMap : Map,
    Rt = 0,
    Ut = null,
    Et = null,
    Tt = 0,
    Nt = 0,
    De = null,
    In = !1,
    xl = !1,
    ts = !1,
    Rn = 0,
    Vt = 0,
    ta = 0,
    Ba = 0,
    es = 0,
    He = 0,
    Sl = 0,
    Si = null,
    Ae = null,
    ns = !1,
    Ro = 0,
    Id = 0,
    No = 1 / 0,
    Do = null,
    ea = null,
    Ft = 0,
    na = null,
    El = null,
    Nn = 0,
    as = 0,
    ls = null,
    tm = null,
    Ei = 0,
    is = null;
  function je() {
    return (Rt & 2) !== 0 && Tt !== 0 ? Tt & -Tt : w.T !== null ? fs() : Ar();
  }
  function em() {
    if (He === 0)
      if ((Tt & 536870912) === 0 || Ot) {
        var t = Va;
        ((Va <<= 1), (Va & 3932160) === 0 && (Va = 262144), (He = t));
      } else He = 536870912;
    return ((t = Re.current), t !== null && (t.flags |= 32), He);
  }
  function ze(t, e, n) {
    (((t === Ut && (Nt === 2 || Nt === 9)) || t.cancelPendingCommit !== null) &&
      (wl(t, 0), aa(t, Tt, He, !1)),
      Xt(t, n),
      ((Rt & 2) === 0 || t !== Ut) &&
        (t === Ut &&
          ((Rt & 2) === 0 && (Ba |= n), Vt === 4 && aa(t, Tt, He, !1)),
        un(t)));
  }
  function nm(t, e, n) {
    if ((Rt & 6) !== 0) throw Error(u(327));
    var a = (!n && (e & 127) === 0 && (e & t.expiredLanes) === 0) || qt(t, e),
      l = a ? Ep(t, e) : rs(t, e, !0),
      o = a;
    do {
      if (l === 0) {
        xl && !a && aa(t, e, 0, !1);
        break;
      } else {
        if (((n = t.current.alternate), o && !xp(n))) {
          ((l = rs(t, e, !1)), (o = !1));
          continue;
        }
        if (l === 2) {
          if (((o = e), t.errorRecoveryDisabledLanes & o)) var c = 0;
          else
            ((c = t.pendingLanes & -536870913),
              (c = c !== 0 ? c : c & 536870912 ? 536870912 : 0));
          if (c !== 0) {
            e = c;
            t: {
              var m = t;
              l = Si;
              var x = m.current.memoizedState.isDehydrated;
              if ((x && (wl(m, c).flags |= 256), (c = rs(m, c, !1)), c !== 2)) {
                if (ts && !x) {
                  ((m.errorRecoveryDisabledLanes |= o), (Ba |= o), (l = 4));
                  break t;
                }
                ((o = Ae),
                  (Ae = l),
                  o !== null &&
                    (Ae === null ? (Ae = o) : Ae.push.apply(Ae, o)));
              }
              l = c;
            }
            if (((o = !1), l !== 2)) continue;
          }
        }
        if (l === 1) {
          (wl(t, 0), aa(t, e, 0, !0));
          break;
        }
        t: {
          switch (((a = t), (o = l), o)) {
            case 0:
            case 1:
              throw Error(u(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              aa(a, e, He, !In);
              break t;
            case 2:
              Ae = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(u(329));
          }
          if ((e & 62914560) === e && ((l = Ro + 300 - he()), 10 < l)) {
            if ((aa(a, e, He, !In), ft(a, 0, !0) !== 0)) break t;
            ((Nn = e),
              (a.timeoutHandle = Dm(
                am.bind(
                  null,
                  a,
                  n,
                  Ae,
                  Do,
                  ns,
                  e,
                  He,
                  Ba,
                  Sl,
                  In,
                  o,
                  "Throttled",
                  -0,
                  0,
                ),
                l,
              )));
            break t;
          }
          am(a, n, Ae, Do, ns, e, He, Ba, Sl, In, o, null, -0, 0);
        }
      }
      break;
    } while (!0);
    un(t);
  }
  function am(t, e, n, a, l, o, c, m, x, _, j, X, C, H) {
    if (
      ((t.timeoutHandle = -1),
      (X = e.subtreeFlags),
      X & 8192 || (X & 16785408) === 16785408)
    ) {
      ((X = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: yn,
      }),
        Wd(e, o, X));
      var P =
        (o & 62914560) === o ? Ro - he() : (o & 4194048) === o ? Id - he() : 0;
      if (((P = ly(X, P)), P !== null)) {
        ((Nn = o),
          (t.cancelPendingCommit = P(
            fm.bind(null, t, e, o, n, a, l, c, m, x, j, X, null, C, H),
          )),
          aa(t, o, c, !_));
        return;
      }
    }
    fm(t, e, o, n, a, l, c, m, x);
  }
  function xp(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        e.flags & 16384 &&
        ((n = e.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var a = 0; a < n.length; a++) {
          var l = n[a],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!Me(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
        ((n.return = e), (e = n));
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    }
    return !0;
  }
  function aa(t, e, n, a) {
    ((e &= ~es),
      (e &= ~Ba),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      a && (t.warmLanes |= e),
      (a = t.expirationTimes));
    for (var l = e; 0 < l; ) {
      var o = 31 - se(l),
        c = 1 << o;
      ((a[o] = -1), (l &= ~c));
    }
    n !== 0 && ba(t, n, e);
  }
  function Ho() {
    return (Rt & 6) === 0 ? (wi(0), !1) : !0;
  }
  function os() {
    if (Et !== null) {
      if (Nt === 0) var t = Et.return;
      else ((t = Et), (Sn = Oa = null), Eu(t), (ml = null), (ii = 0), (t = Et));
      for (; t !== null; ) (Hd(t.alternate, t), (t = t.return));
      Et = null;
    }
  }
  function wl(t, e) {
    var n = t.timeoutHandle;
    (n !== -1 && ((t.timeoutHandle = -1), qp(n)),
      (n = t.cancelPendingCommit),
      n !== null && ((t.cancelPendingCommit = null), n()),
      (Nn = 0),
      os(),
      (Ut = t),
      (Et = n = bn(t.current, null)),
      (Tt = e),
      (Nt = 0),
      (De = null),
      (In = !1),
      (xl = qt(t, e)),
      (ts = !1),
      (Sl = He = es = Ba = ta = Vt = 0),
      (Ae = Si = null),
      (ns = !1),
      (e & 8) !== 0 && (e |= e & 32));
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var l = 31 - se(a),
          o = 1 << l;
        ((e |= t[l]), (a &= ~o));
      }
    return ((Rn = e), to(), n);
  }
  function lm(t, e) {
    ((ht = null),
      (w.H = mi),
      e === dl || e === uo
        ? ((e = xf()), (Nt = 3))
        : e === cu
          ? ((e = xf()), (Nt = 4))
          : (Nt =
              e === Lu
                ? 8
                : e !== null &&
                    typeof e == "object" &&
                    typeof e.then == "function"
                  ? 6
                  : 1),
      (De = e),
      Et === null && ((Vt = 1), wo(t, Ge(e, t.current))));
  }
  function im() {
    var t = Re.current;
    return t === null
      ? !0
      : (Tt & 4194048) === Tt
        ? Qe === null
        : (Tt & 62914560) === Tt || (Tt & 536870912) !== 0
          ? t === Qe
          : !1;
  }
  function om() {
    var t = w.H;
    return ((w.H = mi), t === null ? mi : t);
  }
  function rm() {
    var t = w.A;
    return ((w.A = vp), t);
  }
  function jo() {
    ((Vt = 4),
      In || ((Tt & 4194048) !== Tt && Re.current !== null) || (xl = !0),
      ((ta & 134217727) === 0 && (Ba & 134217727) === 0) ||
        Ut === null ||
        aa(Ut, Tt, He, !1));
  }
  function rs(t, e, n) {
    var a = Rt;
    Rt |= 2;
    var l = om(),
      o = rm();
    ((Ut !== t || Tt !== e) && ((Do = null), wl(t, e)), (e = !1));
    var c = Vt;
    t: do
      try {
        if (Nt !== 0 && Et !== null) {
          var m = Et,
            x = De;
          switch (Nt) {
            case 8:
              (os(), (c = 6));
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Re.current === null && (e = !0);
              var _ = Nt;
              if (((Nt = 0), (De = null), Tl(t, m, x, _), n && xl)) {
                c = 0;
                break t;
              }
              break;
            default:
              ((_ = Nt), (Nt = 0), (De = null), Tl(t, m, x, _));
          }
        }
        (Sp(), (c = Vt));
        break;
      } catch (j) {
        lm(t, j);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (Sn = Oa = null),
      (Rt = a),
      (w.H = l),
      (w.A = o),
      Et === null && ((Ut = null), (Tt = 0), to()),
      c
    );
  }
  function Sp() {
    for (; Et !== null; ) um(Et);
  }
  function Ep(t, e) {
    var n = Rt;
    Rt |= 2;
    var a = om(),
      l = rm();
    Ut !== t || Tt !== e
      ? ((Do = null), (No = he() + 500), wl(t, e))
      : (xl = qt(t, e));
    t: do
      try {
        if (Nt !== 0 && Et !== null) {
          e = Et;
          var o = De;
          e: switch (Nt) {
            case 1:
              ((Nt = 0), (De = null), Tl(t, e, o, 1));
              break;
            case 2:
            case 9:
              if (vf(o)) {
                ((Nt = 0), (De = null), sm(e));
                break;
              }
              ((e = function () {
                ((Nt !== 2 && Nt !== 9) || Ut !== t || (Nt = 7), un(t));
              }),
                o.then(e, e));
              break t;
            case 3:
              Nt = 7;
              break t;
            case 4:
              Nt = 5;
              break t;
            case 7:
              vf(o)
                ? ((Nt = 0), (De = null), sm(e))
                : ((Nt = 0), (De = null), Tl(t, e, o, 7));
              break;
            case 5:
              var c = null;
              switch (Et.tag) {
                case 26:
                  c = Et.memoizedState;
                case 5:
                case 27:
                  var m = Et;
                  if (c ? Jm(c) : m.stateNode.complete) {
                    ((Nt = 0), (De = null));
                    var x = m.sibling;
                    if (x !== null) Et = x;
                    else {
                      var _ = m.return;
                      _ !== null ? ((Et = _), Bo(_)) : (Et = null);
                    }
                    break e;
                  }
              }
              ((Nt = 0), (De = null), Tl(t, e, o, 5));
              break;
            case 6:
              ((Nt = 0), (De = null), Tl(t, e, o, 6));
              break;
            case 8:
              (os(), (Vt = 6));
              break t;
            default:
              throw Error(u(462));
          }
        }
        wp();
        break;
      } catch (j) {
        lm(t, j);
      }
    while (!0);
    return (
      (Sn = Oa = null),
      (w.H = a),
      (w.A = l),
      (Rt = n),
      Et !== null ? 0 : ((Ut = null), (Tt = 0), to(), Vt)
    );
  }
  function wp() {
    for (; Et !== null && !me(); ) um(Et);
  }
  function um(t) {
    var e = Nd(t.alternate, t, Rn);
    ((t.memoizedProps = t.pendingProps), e === null ? Bo(t) : (Et = e));
  }
  function sm(t) {
    var e = t,
      n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = zd(n, e, e.pendingProps, e.type, void 0, Tt);
        break;
      case 11:
        e = zd(n, e, e.pendingProps, e.type.render, e.ref, Tt);
        break;
      case 5:
        Eu(e);
      default:
        (Hd(n, e), (e = Et = rf(e, Rn)), (e = Nd(n, e, Rn)));
    }
    ((t.memoizedProps = t.pendingProps), e === null ? Bo(t) : (Et = e));
  }
  function Tl(t, e, n, a) {
    ((Sn = Oa = null), Eu(e), (ml = null), (ii = 0));
    var l = e.return;
    try {
      if (fp(t, l, e, n, Tt)) {
        ((Vt = 1), wo(t, Ge(n, t.current)), (Et = null));
        return;
      }
    } catch (o) {
      if (l !== null) throw ((Et = l), o);
      ((Vt = 1), wo(t, Ge(n, t.current)), (Et = null));
      return;
    }
    e.flags & 32768
      ? (Ot || a === 1
          ? (t = !0)
          : xl || (Tt & 536870912) !== 0
            ? (t = !1)
            : ((In = t = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = Re.current),
                a !== null && a.tag === 13 && (a.flags |= 16384))),
        cm(e, t))
      : Bo(e);
  }
  function Bo(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        cm(e, In);
        return;
      }
      t = e.return;
      var n = hp(e.alternate, e, Rn);
      if (n !== null) {
        Et = n;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        Et = e;
        return;
      }
      Et = e = t;
    } while (e !== null);
    Vt === 0 && (Vt = 5);
  }
  function cm(t, e) {
    do {
      var n = gp(t.alternate, t);
      if (n !== null) {
        ((n.flags &= 32767), (Et = n));
        return;
      }
      if (
        ((n = t.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        Et = t;
        return;
      }
      Et = t = n;
    } while (t !== null);
    ((Vt = 6), (Et = null));
  }
  function fm(t, e, n, a, l, o, c, m, x) {
    t.cancelPendingCommit = null;
    do Uo();
    while (Ft !== 0);
    if ((Rt & 6) !== 0) throw Error(u(327));
    if (e !== null) {
      if (e === t.current) throw Error(u(177));
      if (
        ((o = e.lanes | e.childLanes),
        (o |= Wr),
        ye(t, n, o, c, m, x),
        t === Ut && ((Et = Ut = null), (Tt = 0)),
        (El = e),
        (na = t),
        (Nn = n),
        (as = o),
        (ls = l),
        (tm = a),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            Op(pa, function () {
              return (pm(), null);
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (a = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || a)
      ) {
        ((a = w.T), (w.T = null), (l = L.p), (L.p = 2), (c = Rt), (Rt |= 4));
        try {
          pp(t, e, n);
        } finally {
          ((Rt = c), (L.p = l), (w.T = a));
        }
      }
      ((Ft = 1), dm(), mm(), hm());
    }
  }
  function dm() {
    if (Ft === 1) {
      Ft = 0;
      var t = na,
        e = El,
        n = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || n) {
        ((n = w.T), (w.T = null));
        var a = L.p;
        L.p = 2;
        var l = Rt;
        Rt |= 4;
        try {
          Zd(e, t);
          var o = bs,
            c = Fc(t.containerInfo),
            m = o.focusedElem,
            x = o.selectionRange;
          if (
            c !== m &&
            m &&
            m.ownerDocument &&
            $c(m.ownerDocument.documentElement, m)
          ) {
            if (x !== null && Vr(m)) {
              var _ = x.start,
                j = x.end;
              if ((j === void 0 && (j = _), "selectionStart" in m))
                ((m.selectionStart = _),
                  (m.selectionEnd = Math.min(j, m.value.length)));
              else {
                var X = m.ownerDocument || document,
                  C = (X && X.defaultView) || window;
                if (C.getSelection) {
                  var H = C.getSelection(),
                    P = m.textContent.length,
                    st = Math.min(x.start, P),
                    Bt = x.end === void 0 ? st : Math.min(x.end, P);
                  !H.extend && st > Bt && ((c = Bt), (Bt = st), (st = c));
                  var T = Wc(m, st),
                    E = Wc(m, Bt);
                  if (
                    T &&
                    E &&
                    (H.rangeCount !== 1 ||
                      H.anchorNode !== T.node ||
                      H.anchorOffset !== T.offset ||
                      H.focusNode !== E.node ||
                      H.focusOffset !== E.offset)
                  ) {
                    var O = X.createRange();
                    (O.setStart(T.node, T.offset),
                      H.removeAllRanges(),
                      st > Bt
                        ? (H.addRange(O), H.extend(E.node, E.offset))
                        : (O.setEnd(E.node, E.offset), H.addRange(O)));
                  }
                }
              }
            }
            for (X = [], H = m; (H = H.parentNode); )
              H.nodeType === 1 &&
                X.push({ element: H, left: H.scrollLeft, top: H.scrollTop });
            for (
              typeof m.focus == "function" && m.focus(), m = 0;
              m < X.length;
              m++
            ) {
              var q = X[m];
              ((q.element.scrollLeft = q.left), (q.element.scrollTop = q.top));
            }
          }
          ((Wo = !!vs), (bs = vs = null));
        } finally {
          ((Rt = l), (L.p = a), (w.T = n));
        }
      }
      ((t.current = e), (Ft = 2));
    }
  }
  function mm() {
    if (Ft === 2) {
      Ft = 0;
      var t = na,
        e = El,
        n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        ((n = w.T), (w.T = null));
        var a = L.p;
        L.p = 2;
        var l = Rt;
        Rt |= 4;
        try {
          Gd(t, e.alternate, e);
        } finally {
          ((Rt = l), (L.p = a), (w.T = n));
        }
      }
      Ft = 3;
    }
  }
  function hm() {
    if (Ft === 4 || Ft === 3) {
      ((Ft = 0), Ln());
      var t = na,
        e = El,
        n = Nn,
        a = tm;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (Ft = 5)
        : ((Ft = 0), (El = na = null), gm(t, t.pendingLanes));
      var l = t.pendingLanes;
      if (
        (l === 0 && (ea = null),
        $e(n),
        (e = e.stateNode),
        ge && typeof ge.onCommitFiberRoot == "function")
      )
        try {
          ge.onCommitFiberRoot(ya, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        ((e = w.T), (l = L.p), (L.p = 2), (w.T = null));
        try {
          for (var o = t.onRecoverableError, c = 0; c < a.length; c++) {
            var m = a[c];
            o(m.value, { componentStack: m.stack });
          }
        } finally {
          ((w.T = e), (L.p = l));
        }
      }
      ((Nn & 3) !== 0 && Uo(),
        un(t),
        (l = t.pendingLanes),
        (n & 261930) !== 0 && (l & 42) !== 0
          ? t === is
            ? Ei++
            : ((Ei = 0), (is = t))
          : (Ei = 0),
        wi(0));
    }
  }
  function gm(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), ai(e)));
  }
  function Uo() {
    return (dm(), mm(), hm(), pm());
  }
  function pm() {
    if (Ft !== 5) return !1;
    var t = na,
      e = as;
    as = 0;
    var n = $e(Nn),
      a = w.T,
      l = L.p;
    try {
      ((L.p = 32 > n ? 32 : n), (w.T = null), (n = ls), (ls = null));
      var o = na,
        c = Nn;
      if (((Ft = 0), (El = na = null), (Nn = 0), (Rt & 6) !== 0))
        throw Error(u(331));
      var m = Rt;
      if (
        ((Rt |= 4),
        Fd(o.current),
        Jd(o, o.current, c, n),
        (Rt = m),
        wi(0, !1),
        ge && typeof ge.onPostCommitFiberRoot == "function")
      )
        try {
          ge.onPostCommitFiberRoot(ya, o);
        } catch {}
      return !0;
    } finally {
      ((L.p = l), (w.T = a), gm(t, e));
    }
  }
  function ym(t, e, n) {
    ((e = Ge(n, e)),
      (e = Uu(t.stateNode, e, 2)),
      (t = Wn(t, e, 2)),
      t !== null && (Xt(t, 2), un(t)));
  }
  function Dt(t, e, n) {
    if (t.tag === 3) ym(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          ym(e, t, n);
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (ea === null || !ea.has(a)))
          ) {
            ((t = Ge(n, t)),
              (n = vd(2)),
              (a = Wn(e, n, 2)),
              a !== null && (bd(n, a, e, t), Xt(a, 2), un(a)));
            break;
          }
        }
        e = e.return;
      }
  }
  function us(t, e, n) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new bp();
      var l = new Set();
      a.set(e, l);
    } else ((l = a.get(e)), l === void 0 && ((l = new Set()), a.set(e, l)));
    l.has(n) ||
      ((ts = !0), l.add(n), (t = Tp.bind(null, t, e, n)), e.then(t, t));
  }
  function Tp(t, e, n) {
    var a = t.pingCache;
    (a !== null && a.delete(e),
      (t.pingedLanes |= t.suspendedLanes & n),
      (t.warmLanes &= ~n),
      Ut === t &&
        (Tt & n) === n &&
        (Vt === 4 || (Vt === 3 && (Tt & 62914560) === Tt && 300 > he() - Ro)
          ? (Rt & 2) === 0 && wl(t, 0)
          : (es |= n),
        Sl === Tt && (Sl = 0)),
      un(t));
  }
  function vm(t, e) {
    (e === 0 && (e = ce()), (t = Ta(t, e)), t !== null && (Xt(t, e), un(t)));
  }
  function Ap(t) {
    var e = t.memoizedState,
      n = 0;
    (e !== null && (n = e.retryLane), vm(t, n));
  }
  function zp(t, e) {
    var n = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var a = t.stateNode,
          l = t.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(u(314));
    }
    (a !== null && a.delete(e), vm(t, n));
  }
  function Op(t, e) {
    return ql(t, e);
  }
  var Lo = null,
    Al = null,
    ss = !1,
    Yo = !1,
    cs = !1,
    la = 0;
  function un(t) {
    (t !== Al &&
      t.next === null &&
      (Al === null ? (Lo = Al = t) : (Al = Al.next = t)),
      (Yo = !0),
      ss || ((ss = !0), Mp()));
  }
  function wi(t, e) {
    if (!cs && Yo) {
      cs = !0;
      do
        for (var n = !1, a = Lo; a !== null; ) {
          if (t !== 0) {
            var l = a.pendingLanes;
            if (l === 0) var o = 0;
            else {
              var c = a.suspendedLanes,
                m = a.pingedLanes;
              ((o = (1 << (31 - se(42 | t) + 1)) - 1),
                (o &= l & ~(c & ~m)),
                (o = o & 201326741 ? (o & 201326741) | 1 : o ? o | 2 : 0));
            }
            o !== 0 && ((n = !0), Em(a, o));
          } else
            ((o = Tt),
              (o = ft(
                a,
                a === Ut ? o : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1,
              )),
              (o & 3) === 0 || qt(a, o) || ((n = !0), Em(a, o)));
          a = a.next;
        }
      while (n);
      cs = !1;
    }
  }
  function _p() {
    bm();
  }
  function bm() {
    Yo = ss = !1;
    var t = 0;
    la !== 0 && Yp() && (t = la);
    for (var e = he(), n = null, a = Lo; a !== null; ) {
      var l = a.next,
        o = xm(a, e);
      (o === 0
        ? ((a.next = null),
          n === null ? (Lo = l) : (n.next = l),
          l === null && (Al = n))
        : ((n = a), (t !== 0 || (o & 3) !== 0) && (Yo = !0)),
        (a = l));
    }
    ((Ft !== 0 && Ft !== 5) || wi(t), la !== 0 && (la = 0));
  }
  function xm(t, e) {
    for (
      var n = t.suspendedLanes,
        a = t.pingedLanes,
        l = t.expirationTimes,
        o = t.pendingLanes & -62914561;
      0 < o;
    ) {
      var c = 31 - se(o),
        m = 1 << c,
        x = l[c];
      (x === -1
        ? ((m & n) === 0 || (m & a) !== 0) && (l[c] = It(m, e))
        : x <= e && (t.expiredLanes |= m),
        (o &= ~m));
    }
    if (
      ((e = Ut),
      (n = Tt),
      (n = ft(
        t,
        t === e ? n : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      (a = t.callbackNode),
      n === 0 ||
        (t === e && (Nt === 2 || Nt === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && Gl(a),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((n & 3) === 0 || qt(t, n)) {
      if (((e = n & -n), e === t.callbackPriority)) return e;
      switch ((a !== null && Gl(a), $e(n))) {
        case 2:
        case 8:
          n = Gi;
          break;
        case 32:
          n = pa;
          break;
        case 268435456:
          n = gn;
          break;
        default:
          n = pa;
      }
      return (
        (a = Sm.bind(null, t)),
        (n = ql(n, a)),
        (t.callbackPriority = e),
        (t.callbackNode = n),
        e
      );
    }
    return (
      a !== null && a !== null && Gl(a),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function Sm(t, e) {
    if (Ft !== 0 && Ft !== 5)
      return ((t.callbackNode = null), (t.callbackPriority = 0), null);
    var n = t.callbackNode;
    if (Uo() && t.callbackNode !== n) return null;
    var a = Tt;
    return (
      (a = ft(
        t,
        t === Ut ? a : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      a === 0
        ? null
        : (nm(t, a, e),
          xm(t, he()),
          t.callbackNode != null && t.callbackNode === n
            ? Sm.bind(null, t)
            : null)
    );
  }
  function Em(t, e) {
    if (Uo()) return null;
    nm(t, e, !0);
  }
  function Mp() {
    Gp(function () {
      (Rt & 6) !== 0 ? ql(ga, _p) : bm();
    });
  }
  function fs() {
    if (la === 0) {
      var t = cl;
      (t === 0 && ((t = ka), (ka <<= 1), (ka & 261888) === 0 && (ka = 256)),
        (la = t));
    }
    return la;
  }
  function wm(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
        ? t
        : Zi("" + t);
  }
  function Tm(t, e) {
    var n = e.ownerDocument.createElement("input");
    return (
      (n.name = e.name),
      (n.value = e.value),
      t.id && n.setAttribute("form", t.id),
      e.parentNode.insertBefore(n, e),
      (t = new FormData(t)),
      n.parentNode.removeChild(n),
      t
    );
  }
  function Cp(t, e, n, a, l) {
    if (e === "submit" && n && n.stateNode === l) {
      var o = wm((l[xe] || null).action),
        c = a.submitter;
      c &&
        ((e = (e = c[xe] || null)
          ? wm(e.formAction)
          : c.getAttribute("formAction")),
        e !== null && ((o = e), (c = null)));
      var m = new $i("action", "action", null, a, l);
      t.push({
        event: m,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (la !== 0) {
                  var x = c ? Tm(l, c) : new FormData(l);
                  Ru(
                    n,
                    { pending: !0, data: x, method: l.method, action: o },
                    null,
                    x,
                  );
                }
              } else
                typeof o == "function" &&
                  (m.preventDefault(),
                  (x = c ? Tm(l, c) : new FormData(l)),
                  Ru(
                    n,
                    { pending: !0, data: x, method: l.method, action: o },
                    o,
                    x,
                  ));
            },
            currentTarget: l,
          },
        ],
      });
    }
  }
  for (var ds = 0; ds < Jr.length; ds++) {
    var ms = Jr[ds],
      Rp = ms.toLowerCase(),
      Np = ms[0].toUpperCase() + ms.slice(1);
    Fe(Rp, "on" + Np);
  }
  (Fe(tf, "onAnimationEnd"),
    Fe(ef, "onAnimationIteration"),
    Fe(nf, "onAnimationStart"),
    Fe("dblclick", "onDoubleClick"),
    Fe("focusin", "onFocus"),
    Fe("focusout", "onBlur"),
    Fe(Jg, "onTransitionRun"),
    Fe(Wg, "onTransitionStart"),
    Fe($g, "onTransitionCancel"),
    Fe(af, "onTransitionEnd"),
    $a("onMouseEnter", ["mouseout", "mouseover"]),
    $a("onMouseLeave", ["mouseout", "mouseover"]),
    $a("onPointerEnter", ["pointerout", "pointerover"]),
    $a("onPointerLeave", ["pointerout", "pointerover"]),
    xa(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    xa(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    xa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    xa(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    xa(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    xa(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var Ti =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Dp = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Ti),
    );
  function Am(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var a = t[n],
        l = a.event;
      a = a.listeners;
      t: {
        var o = void 0;
        if (e)
          for (var c = a.length - 1; 0 <= c; c--) {
            var m = a[c],
              x = m.instance,
              _ = m.currentTarget;
            if (((m = m.listener), x !== o && l.isPropagationStopped()))
              break t;
            ((o = m), (l.currentTarget = _));
            try {
              o(l);
            } catch (j) {
              Ii(j);
            }
            ((l.currentTarget = null), (o = x));
          }
        else
          for (c = 0; c < a.length; c++) {
            if (
              ((m = a[c]),
              (x = m.instance),
              (_ = m.currentTarget),
              (m = m.listener),
              x !== o && l.isPropagationStopped())
            )
              break t;
            ((o = m), (l.currentTarget = _));
            try {
              o(l);
            } catch (j) {
              Ii(j);
            }
            ((l.currentTarget = null), (o = x));
          }
      }
    }
  }
  function wt(t, e) {
    var n = e[zr];
    n === void 0 && (n = e[zr] = new Set());
    var a = t + "__bubble";
    n.has(a) || (zm(e, t, 2, !1), n.add(a));
  }
  function hs(t, e, n) {
    var a = 0;
    (e && (a |= 4), zm(n, t, a, e));
  }
  var qo = "_reactListening" + Math.random().toString(36).slice(2);
  function gs(t) {
    if (!t[qo]) {
      ((t[qo] = !0),
        vc.forEach(function (n) {
          n !== "selectionchange" && (Dp.has(n) || hs(n, !1, t), hs(n, !0, t));
        }));
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[qo] || ((e[qo] = !0), hs("selectionchange", !1, e));
    }
  }
  function zm(t, e, n, a) {
    switch (e0(e)) {
      case 2:
        var l = ry;
        break;
      case 8:
        l = uy;
        break;
      default:
        l = Cs;
    }
    ((n = l.bind(null, e, n, t)),
      (l = void 0),
      !jr ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (l = !0),
      a
        ? l !== void 0
          ? t.addEventListener(e, n, { capture: !0, passive: l })
          : t.addEventListener(e, n, !0)
        : l !== void 0
          ? t.addEventListener(e, n, { passive: l })
          : t.addEventListener(e, n, !1));
  }
  function ps(t, e, n, a, l) {
    var o = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (;;) {
        if (a === null) return;
        var c = a.tag;
        if (c === 3 || c === 4) {
          var m = a.stateNode.containerInfo;
          if (m === l) break;
          if (c === 4)
            for (c = a.return; c !== null; ) {
              var x = c.tag;
              if ((x === 3 || x === 4) && c.stateNode.containerInfo === l)
                return;
              c = c.return;
            }
          for (; m !== null; ) {
            if (((c = Ka(m)), c === null)) return;
            if (((x = c.tag), x === 5 || x === 6 || x === 26 || x === 27)) {
              a = o = c;
              continue t;
            }
            m = m.parentNode;
          }
        }
        a = a.return;
      }
    Cc(function () {
      var _ = o,
        j = Dr(n),
        X = [];
      t: {
        var C = lf.get(t);
        if (C !== void 0) {
          var H = $i,
            P = t;
          switch (t) {
            case "keypress":
              if (Ji(n) === 0) break t;
            case "keydown":
            case "keyup":
              H = zg;
              break;
            case "focusin":
              ((P = "focus"), (H = Yr));
              break;
            case "focusout":
              ((P = "blur"), (H = Yr));
              break;
            case "beforeblur":
            case "afterblur":
              H = Yr;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              H = Dc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              H = hg;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              H = Mg;
              break;
            case tf:
            case ef:
            case nf:
              H = yg;
              break;
            case af:
              H = Rg;
              break;
            case "scroll":
            case "scrollend":
              H = dg;
              break;
            case "wheel":
              H = Dg;
              break;
            case "copy":
            case "cut":
            case "paste":
              H = bg;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              H = jc;
              break;
            case "toggle":
            case "beforetoggle":
              H = jg;
          }
          var st = (e & 4) !== 0,
            Bt = !st && (t === "scroll" || t === "scrollend"),
            T = st ? (C !== null ? C + "Capture" : null) : C;
          st = [];
          for (var E = _, O; E !== null; ) {
            var q = E;
            if (
              ((O = q.stateNode),
              (q = q.tag),
              (q !== 5 && q !== 26 && q !== 27) ||
                O === null ||
                T === null ||
                ((q = Zl(E, T)), q != null && st.push(Ai(E, q, O))),
              Bt)
            )
              break;
            E = E.return;
          }
          0 < st.length &&
            ((C = new H(C, P, null, n, j)),
            X.push({ event: C, listeners: st }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((C = t === "mouseover" || t === "pointerover"),
            (H = t === "mouseout" || t === "pointerout"),
            C &&
              n !== Nr &&
              (P = n.relatedTarget || n.fromElement) &&
              (Ka(P) || P[Za]))
          )
            break t;
          if (
            (H || C) &&
            ((C =
              j.window === j
                ? j
                : (C = j.ownerDocument)
                  ? C.defaultView || C.parentWindow
                  : window),
            H
              ? ((P = n.relatedTarget || n.toElement),
                (H = _),
                (P = P ? Ka(P) : null),
                P !== null &&
                  ((Bt = d(P)),
                  (st = P.tag),
                  P !== Bt || (st !== 5 && st !== 27 && st !== 6)) &&
                  (P = null))
              : ((H = null), (P = _)),
            H !== P)
          ) {
            if (
              ((st = Dc),
              (q = "onMouseLeave"),
              (T = "onMouseEnter"),
              (E = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((st = jc),
                (q = "onPointerLeave"),
                (T = "onPointerEnter"),
                (E = "pointer")),
              (Bt = H == null ? C : Ql(H)),
              (O = P == null ? C : Ql(P)),
              (C = new st(q, E + "leave", H, n, j)),
              (C.target = Bt),
              (C.relatedTarget = O),
              (q = null),
              Ka(j) === _ &&
                ((st = new st(T, E + "enter", P, n, j)),
                (st.target = O),
                (st.relatedTarget = Bt),
                (q = st)),
              (Bt = q),
              H && P)
            )
              e: {
                for (st = Hp, T = H, E = P, O = 0, q = T; q; q = st(q)) O++;
                q = 0;
                for (var rt = E; rt; rt = st(rt)) q++;
                for (; 0 < O - q; ) ((T = st(T)), O--);
                for (; 0 < q - O; ) ((E = st(E)), q--);
                for (; O--; ) {
                  if (T === E || (E !== null && T === E.alternate)) {
                    st = T;
                    break e;
                  }
                  ((T = st(T)), (E = st(E)));
                }
                st = null;
              }
            else st = null;
            (H !== null && Om(X, C, H, st, !1),
              P !== null && Bt !== null && Om(X, Bt, P, st, !0));
          }
        }
        t: {
          if (
            ((C = _ ? Ql(_) : window),
            (H = C.nodeName && C.nodeName.toLowerCase()),
            H === "select" || (H === "input" && C.type === "file"))
          )
            var Mt = kc;
          else if (Gc(C))
            if (Vc) Mt = Qg;
            else {
              Mt = kg;
              var at = Xg;
            }
          else
            ((H = C.nodeName),
              !H ||
              H.toLowerCase() !== "input" ||
              (C.type !== "checkbox" && C.type !== "radio")
                ? _ && Rr(_.elementType) && (Mt = kc)
                : (Mt = Vg));
          if (Mt && (Mt = Mt(t, _))) {
            Xc(X, Mt, n, j);
            break t;
          }
          (at && at(t, C, _),
            t === "focusout" &&
              _ &&
              C.type === "number" &&
              _.memoizedProps.value != null &&
              Cr(C, "number", C.value));
        }
        switch (((at = _ ? Ql(_) : window), t)) {
          case "focusin":
            (Gc(at) || at.contentEditable === "true") &&
              ((nl = at), (Qr = _), (ti = null));
            break;
          case "focusout":
            ti = Qr = nl = null;
            break;
          case "mousedown":
            Zr = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Zr = !1), Pc(X, n, j));
            break;
          case "selectionchange":
            if (Kg) break;
          case "keydown":
          case "keyup":
            Pc(X, n, j);
        }
        var yt;
        if (Gr)
          t: {
            switch (t) {
              case "compositionstart":
                var At = "onCompositionStart";
                break t;
              case "compositionend":
                At = "onCompositionEnd";
                break t;
              case "compositionupdate":
                At = "onCompositionUpdate";
                break t;
            }
            At = void 0;
          }
        else
          el
            ? Yc(t, n) && (At = "onCompositionEnd")
            : t === "keydown" &&
              n.keyCode === 229 &&
              (At = "onCompositionStart");
        (At &&
          (Bc &&
            n.locale !== "ko" &&
            (el || At !== "onCompositionStart"
              ? At === "onCompositionEnd" && el && (yt = Rc())
              : ((Xn = j),
                (Br = "value" in Xn ? Xn.value : Xn.textContent),
                (el = !0))),
          (at = Go(_, At)),
          0 < at.length &&
            ((At = new Hc(At, t, null, n, j)),
            X.push({ event: At, listeners: at }),
            yt
              ? (At.data = yt)
              : ((yt = qc(n)), yt !== null && (At.data = yt)))),
          (yt = Ug ? Lg(t, n) : Yg(t, n)) &&
            ((At = Go(_, "onBeforeInput")),
            0 < At.length &&
              ((at = new Hc("onBeforeInput", "beforeinput", null, n, j)),
              X.push({ event: at, listeners: At }),
              (at.data = yt))),
          Cp(X, t, _, n, j));
      }
      Am(X, e);
    });
  }
  function Ai(t, e, n) {
    return { instance: t, listener: e, currentTarget: n };
  }
  function Go(t, e) {
    for (var n = e + "Capture", a = []; t !== null; ) {
      var l = t,
        o = l.stateNode;
      if (
        ((l = l.tag),
        (l !== 5 && l !== 26 && l !== 27) ||
          o === null ||
          ((l = Zl(t, n)),
          l != null && a.unshift(Ai(t, l, o)),
          (l = Zl(t, e)),
          l != null && a.push(Ai(t, l, o))),
        t.tag === 3)
      )
        return a;
      t = t.return;
    }
    return [];
  }
  function Hp(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Om(t, e, n, a, l) {
    for (var o = e._reactName, c = []; n !== null && n !== a; ) {
      var m = n,
        x = m.alternate,
        _ = m.stateNode;
      if (((m = m.tag), x !== null && x === a)) break;
      ((m !== 5 && m !== 26 && m !== 27) ||
        _ === null ||
        ((x = _),
        l
          ? ((_ = Zl(n, o)), _ != null && c.unshift(Ai(n, _, x)))
          : l || ((_ = Zl(n, o)), _ != null && c.push(Ai(n, _, x)))),
        (n = n.return));
    }
    c.length !== 0 && t.push({ event: e, listeners: c });
  }
  var jp = /\r\n?/g,
    Bp = /\u0000|\uFFFD/g;
  function _m(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        jp,
        `
`,
      )
      .replace(Bp, "");
  }
  function Mm(t, e) {
    return ((e = _m(e)), _m(t) === e);
  }
  function jt(t, e, n, a, l, o) {
    switch (n) {
      case "children":
        typeof a == "string"
          ? e === "body" || (e === "textarea" && a === "") || Pa(t, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            e !== "body" &&
            Pa(t, "" + a);
        break;
      case "className":
        Vi(t, "class", a);
        break;
      case "tabIndex":
        Vi(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Vi(t, n, a);
        break;
      case "style":
        _c(t, a, o);
        break;
      case "data":
        if (e !== "object") {
          Vi(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          t.removeAttribute(n);
          break;
        }
        ((a = Zi("" + a)), t.setAttribute(n, a));
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof o == "function" &&
            (n === "formAction"
              ? (e !== "input" && jt(t, e, "name", l.name, l, null),
                jt(t, e, "formEncType", l.formEncType, l, null),
                jt(t, e, "formMethod", l.formMethod, l, null),
                jt(t, e, "formTarget", l.formTarget, l, null))
              : (jt(t, e, "encType", l.encType, l, null),
                jt(t, e, "method", l.method, l, null),
                jt(t, e, "target", l.target, l, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(n);
          break;
        }
        ((a = Zi("" + a)), t.setAttribute(n, a));
        break;
      case "onClick":
        a != null && (t.onclick = yn);
        break;
      case "onScroll":
        a != null && wt("scroll", t);
        break;
      case "onScrollEnd":
        a != null && wt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(u(61));
          if (((n = a.__html), n != null)) {
            if (l.children != null) throw Error(u(60));
            t.innerHTML = n;
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        ((n = Zi("" + a)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(n, "" + a)
          : t.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(n, "")
          : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        a === !0
          ? t.setAttribute(n, "")
          : a !== !1 &&
              a != null &&
              typeof a != "function" &&
              typeof a != "symbol"
            ? t.setAttribute(n, a)
            : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? t.setAttribute(n, a)
          : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? t.removeAttribute(n)
          : t.setAttribute(n, a);
        break;
      case "popover":
        (wt("beforetoggle", t), wt("toggle", t), ki(t, "popover", a));
        break;
      case "xlinkActuate":
        pn(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        pn(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        pn(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        pn(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        pn(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        pn(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        pn(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        pn(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        pn(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        ki(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
          ((n = cg.get(n) || n), ki(t, n, a));
    }
  }
  function ys(t, e, n, a, l, o) {
    switch (n) {
      case "style":
        _c(t, a, o);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(u(61));
          if (((n = a.__html), n != null)) {
            if (l.children != null) throw Error(u(60));
            t.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? Pa(t, a)
          : (typeof a == "number" || typeof a == "bigint") && Pa(t, "" + a);
        break;
      case "onScroll":
        a != null && wt("scroll", t);
        break;
      case "onScrollEnd":
        a != null && wt("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = yn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!bc.hasOwnProperty(n))
          t: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((l = n.endsWith("Capture")),
              (e = n.slice(2, l ? n.length - 7 : void 0)),
              (o = t[xe] || null),
              (o = o != null ? o[n] : null),
              typeof o == "function" && t.removeEventListener(e, o, l),
              typeof a == "function")
            ) {
              (typeof o != "function" &&
                o !== null &&
                (n in t
                  ? (t[n] = null)
                  : t.hasAttribute(n) && t.removeAttribute(n)),
                t.addEventListener(e, a, l));
              break t;
            }
            n in t
              ? (t[n] = a)
              : a === !0
                ? t.setAttribute(n, "")
                : ki(t, n, a);
          }
    }
  }
  function ue(t, e, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (wt("error", t), wt("load", t));
        var a = !1,
          l = !1,
          o;
        for (o in n)
          if (n.hasOwnProperty(o)) {
            var c = n[o];
            if (c != null)
              switch (o) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  l = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(u(137, e));
                default:
                  jt(t, e, o, c, n, null);
              }
          }
        (l && jt(t, e, "srcSet", n.srcSet, n, null),
          a && jt(t, e, "src", n.src, n, null));
        return;
      case "input":
        wt("invalid", t);
        var m = (o = c = l = null),
          x = null,
          _ = null;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var j = n[a];
            if (j != null)
              switch (a) {
                case "name":
                  l = j;
                  break;
                case "type":
                  c = j;
                  break;
                case "checked":
                  x = j;
                  break;
                case "defaultChecked":
                  _ = j;
                  break;
                case "value":
                  o = j;
                  break;
                case "defaultValue":
                  m = j;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (j != null) throw Error(u(137, e));
                  break;
                default:
                  jt(t, e, a, j, n, null);
              }
          }
        Tc(t, o, m, x, _, c, l, !1);
        return;
      case "select":
        (wt("invalid", t), (a = c = o = null));
        for (l in n)
          if (n.hasOwnProperty(l) && ((m = n[l]), m != null))
            switch (l) {
              case "value":
                o = m;
                break;
              case "defaultValue":
                c = m;
                break;
              case "multiple":
                a = m;
              default:
                jt(t, e, l, m, n, null);
            }
        ((e = o),
          (n = c),
          (t.multiple = !!a),
          e != null ? Fa(t, !!a, e, !1) : n != null && Fa(t, !!a, n, !0));
        return;
      case "textarea":
        (wt("invalid", t), (o = l = a = null));
        for (c in n)
          if (n.hasOwnProperty(c) && ((m = n[c]), m != null))
            switch (c) {
              case "value":
                a = m;
                break;
              case "defaultValue":
                l = m;
                break;
              case "children":
                o = m;
                break;
              case "dangerouslySetInnerHTML":
                if (m != null) throw Error(u(91));
                break;
              default:
                jt(t, e, c, m, n, null);
            }
        zc(t, a, l, o);
        return;
      case "option":
        for (x in n)
          if (n.hasOwnProperty(x) && ((a = n[x]), a != null))
            switch (x) {
              case "selected":
                t.selected =
                  a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                jt(t, e, x, a, n, null);
            }
        return;
      case "dialog":
        (wt("beforetoggle", t),
          wt("toggle", t),
          wt("cancel", t),
          wt("close", t));
        break;
      case "iframe":
      case "object":
        wt("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Ti.length; a++) wt(Ti[a], t);
        break;
      case "image":
        (wt("error", t), wt("load", t));
        break;
      case "details":
        wt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        (wt("error", t), wt("load", t));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (_ in n)
          if (n.hasOwnProperty(_) && ((a = n[_]), a != null))
            switch (_) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(u(137, e));
              default:
                jt(t, e, _, a, n, null);
            }
        return;
      default:
        if (Rr(e)) {
          for (j in n)
            n.hasOwnProperty(j) &&
              ((a = n[j]), a !== void 0 && ys(t, e, j, a, n, void 0));
          return;
        }
    }
    for (m in n)
      n.hasOwnProperty(m) && ((a = n[m]), a != null && jt(t, e, m, a, n, null));
  }
  function Up(t, e, n, a) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var l = null,
          o = null,
          c = null,
          m = null,
          x = null,
          _ = null,
          j = null;
        for (H in n) {
          var X = n[H];
          if (n.hasOwnProperty(H) && X != null)
            switch (H) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                x = X;
              default:
                a.hasOwnProperty(H) || jt(t, e, H, null, a, X);
            }
        }
        for (var C in a) {
          var H = a[C];
          if (((X = n[C]), a.hasOwnProperty(C) && (H != null || X != null)))
            switch (C) {
              case "type":
                o = H;
                break;
              case "name":
                l = H;
                break;
              case "checked":
                _ = H;
                break;
              case "defaultChecked":
                j = H;
                break;
              case "value":
                c = H;
                break;
              case "defaultValue":
                m = H;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (H != null) throw Error(u(137, e));
                break;
              default:
                H !== X && jt(t, e, C, H, a, X);
            }
        }
        Mr(t, c, m, x, _, j, o, l);
        return;
      case "select":
        H = c = m = C = null;
        for (o in n)
          if (((x = n[o]), n.hasOwnProperty(o) && x != null))
            switch (o) {
              case "value":
                break;
              case "multiple":
                H = x;
              default:
                a.hasOwnProperty(o) || jt(t, e, o, null, a, x);
            }
        for (l in a)
          if (
            ((o = a[l]),
            (x = n[l]),
            a.hasOwnProperty(l) && (o != null || x != null))
          )
            switch (l) {
              case "value":
                C = o;
                break;
              case "defaultValue":
                m = o;
                break;
              case "multiple":
                c = o;
              default:
                o !== x && jt(t, e, l, o, a, x);
            }
        ((e = m),
          (n = c),
          (a = H),
          C != null
            ? Fa(t, !!n, C, !1)
            : !!a != !!n &&
              (e != null ? Fa(t, !!n, e, !0) : Fa(t, !!n, n ? [] : "", !1)));
        return;
      case "textarea":
        H = C = null;
        for (m in n)
          if (
            ((l = n[m]),
            n.hasOwnProperty(m) && l != null && !a.hasOwnProperty(m))
          )
            switch (m) {
              case "value":
                break;
              case "children":
                break;
              default:
                jt(t, e, m, null, a, l);
            }
        for (c in a)
          if (
            ((l = a[c]),
            (o = n[c]),
            a.hasOwnProperty(c) && (l != null || o != null))
          )
            switch (c) {
              case "value":
                C = l;
                break;
              case "defaultValue":
                H = l;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (l != null) throw Error(u(91));
                break;
              default:
                l !== o && jt(t, e, c, l, a, o);
            }
        Ac(t, C, H);
        return;
      case "option":
        for (var P in n)
          if (
            ((C = n[P]),
            n.hasOwnProperty(P) && C != null && !a.hasOwnProperty(P))
          )
            switch (P) {
              case "selected":
                t.selected = !1;
                break;
              default:
                jt(t, e, P, null, a, C);
            }
        for (x in a)
          if (
            ((C = a[x]),
            (H = n[x]),
            a.hasOwnProperty(x) && C !== H && (C != null || H != null))
          )
            switch (x) {
              case "selected":
                t.selected =
                  C && typeof C != "function" && typeof C != "symbol";
                break;
              default:
                jt(t, e, x, C, a, H);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var st in n)
          ((C = n[st]),
            n.hasOwnProperty(st) &&
              C != null &&
              !a.hasOwnProperty(st) &&
              jt(t, e, st, null, a, C));
        for (_ in a)
          if (
            ((C = a[_]),
            (H = n[_]),
            a.hasOwnProperty(_) && C !== H && (C != null || H != null))
          )
            switch (_) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (C != null) throw Error(u(137, e));
                break;
              default:
                jt(t, e, _, C, a, H);
            }
        return;
      default:
        if (Rr(e)) {
          for (var Bt in n)
            ((C = n[Bt]),
              n.hasOwnProperty(Bt) &&
                C !== void 0 &&
                !a.hasOwnProperty(Bt) &&
                ys(t, e, Bt, void 0, a, C));
          for (j in a)
            ((C = a[j]),
              (H = n[j]),
              !a.hasOwnProperty(j) ||
                C === H ||
                (C === void 0 && H === void 0) ||
                ys(t, e, j, C, a, H));
          return;
        }
    }
    for (var T in n)
      ((C = n[T]),
        n.hasOwnProperty(T) &&
          C != null &&
          !a.hasOwnProperty(T) &&
          jt(t, e, T, null, a, C));
    for (X in a)
      ((C = a[X]),
        (H = n[X]),
        !a.hasOwnProperty(X) ||
          C === H ||
          (C == null && H == null) ||
          jt(t, e, X, C, a, H));
  }
  function Cm(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Lp() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var t = 0, e = 0, n = performance.getEntriesByType("resource"), a = 0;
        a < n.length;
        a++
      ) {
        var l = n[a],
          o = l.transferSize,
          c = l.initiatorType,
          m = l.duration;
        if (o && m && Cm(c)) {
          for (c = 0, m = l.responseEnd, a += 1; a < n.length; a++) {
            var x = n[a],
              _ = x.startTime;
            if (_ > m) break;
            var j = x.transferSize,
              X = x.initiatorType;
            j &&
              Cm(X) &&
              ((x = x.responseEnd), (c += j * (x < m ? 1 : (m - _) / (x - _))));
          }
          if ((--a, (e += (8 * (o + c)) / (l.duration / 1e3)), t++, 10 < t))
            break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection &&
      ((t = navigator.connection.downlink), typeof t == "number")
      ? t
      : 5;
  }
  var vs = null,
    bs = null;
  function Xo(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Rm(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Nm(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function xs(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Ss = null;
  function Yp() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === Ss
        ? !1
        : ((Ss = t), !0)
      : ((Ss = null), !1);
  }
  var Dm = typeof setTimeout == "function" ? setTimeout : void 0,
    qp = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Hm = typeof Promise == "function" ? Promise : void 0,
    Gp =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Hm < "u"
          ? function (t) {
              return Hm.resolve(null).then(t).catch(Xp);
            }
          : Dm;
  function Xp(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function ia(t) {
    return t === "head";
  }
  function jm(t, e) {
    var n = e,
      a = 0;
    do {
      var l = n.nextSibling;
      if ((t.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$" || n === "/&")) {
          if (a === 0) {
            (t.removeChild(l), Ml(e));
            return;
          }
          a--;
        } else if (
          n === "$" ||
          n === "$?" ||
          n === "$~" ||
          n === "$!" ||
          n === "&"
        )
          a++;
        else if (n === "html") zi(t.ownerDocument.documentElement);
        else if (n === "head") {
          ((n = t.ownerDocument.head), zi(n));
          for (var o = n.firstChild; o; ) {
            var c = o.nextSibling,
              m = o.nodeName;
            (o[Vl] ||
              m === "SCRIPT" ||
              m === "STYLE" ||
              (m === "LINK" && o.rel.toLowerCase() === "stylesheet") ||
              n.removeChild(o),
              (o = c));
          }
        } else n === "body" && zi(t.ownerDocument.body);
      n = l;
    } while (n);
    Ml(e);
  }
  function Bm(t, e) {
    var n = t;
    t = 0;
    do {
      var a = n.nextSibling;
      if (
        (n.nodeType === 1
          ? e
            ? ((n._stashedDisplay = n.style.display),
              (n.style.display = "none"))
            : ((n.style.display = n._stashedDisplay || ""),
              n.getAttribute("style") === "" && n.removeAttribute("style"))
          : n.nodeType === 3 &&
            (e
              ? ((n._stashedText = n.nodeValue), (n.nodeValue = ""))
              : (n.nodeValue = n._stashedText || "")),
        a && a.nodeType === 8)
      )
        if (((n = a.data), n === "/$")) {
          if (t === 0) break;
          t--;
        } else (n !== "$" && n !== "$?" && n !== "$~" && n !== "$!") || t++;
      n = a;
    } while (n);
  }
  function Es(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (((e = e.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (Es(n), Or(n));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(n);
    }
  }
  function kp(t, e, n, a) {
    for (; t.nodeType === 1; ) {
      var l = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (a) {
        if (!t[Vl])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((o = t.getAttribute("rel")),
                o === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                o !== l.rel ||
                t.getAttribute("href") !==
                  (l.href == null || l.href === "" ? null : l.href) ||
                t.getAttribute("crossorigin") !==
                  (l.crossOrigin == null ? null : l.crossOrigin) ||
                t.getAttribute("title") !== (l.title == null ? null : l.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((o = t.getAttribute("src")),
                (o !== (l.src == null ? null : l.src) ||
                  t.getAttribute("type") !== (l.type == null ? null : l.type) ||
                  t.getAttribute("crossorigin") !==
                    (l.crossOrigin == null ? null : l.crossOrigin)) &&
                  o &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var o = l.name == null ? null : "" + l.name;
        if (l.type === "hidden" && t.getAttribute("name") === o) return t;
      } else return t;
      if (((t = Ze(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function Vp(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !n) ||
        ((t = Ze(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Um(t, e) {
    for (; t.nodeType !== 8; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !e) ||
        ((t = Ze(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function ws(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Ts(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState !== "loading")
    );
  }
  function Qp(t, e) {
    var n = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || n.readyState !== "loading") e();
    else {
      var a = function () {
        (e(), n.removeEventListener("DOMContentLoaded", a));
      };
      (n.addEventListener("DOMContentLoaded", a), (t._reactRetry = a));
    }
  }
  function Ze(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" ||
            e === "$!" ||
            e === "$?" ||
            e === "$~" ||
            e === "&" ||
            e === "F!" ||
            e === "F")
        )
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var As = null;
  function Lm(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "/$" || n === "/&") {
          if (e === 0) return Ze(t.nextSibling);
          e--;
        } else
          (n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&") ||
            e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Ym(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (e === 0) return t;
          e--;
        } else (n !== "/$" && n !== "/&") || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function qm(t, e, n) {
    switch (((e = Xo(n)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(u(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(u(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(u(454));
        return t;
      default:
        throw Error(u(451));
    }
  }
  function zi(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    Or(t);
  }
  var Ke = new Map(),
    Gm = new Set();
  function ko(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
        ? t
        : t.ownerDocument;
  }
  var Dn = L.d;
  L.d = { f: Zp, r: Kp, D: Jp, C: Wp, L: $p, m: Fp, X: Ip, S: Pp, M: ty };
  function Zp() {
    var t = Dn.f(),
      e = Ho();
    return t || e;
  }
  function Kp(t) {
    var e = Ja(t);
    e !== null && e.tag === 5 && e.type === "form" ? ld(e) : Dn.r(t);
  }
  var zl = typeof document > "u" ? null : document;
  function Xm(t, e, n) {
    var a = zl;
    if (a && typeof e == "string" && e) {
      var l = Ye(e);
      ((l = 'link[rel="' + t + '"][href="' + l + '"]'),
        typeof n == "string" && (l += '[crossorigin="' + n + '"]'),
        Gm.has(l) ||
          (Gm.add(l),
          (t = { rel: t, crossOrigin: n, href: e }),
          a.querySelector(l) === null &&
            ((e = a.createElement("link")),
            ue(e, "link", t),
            te(e),
            a.head.appendChild(e))));
    }
  }
  function Jp(t) {
    (Dn.D(t), Xm("dns-prefetch", t, null));
  }
  function Wp(t, e) {
    (Dn.C(t, e), Xm("preconnect", t, e));
  }
  function $p(t, e, n) {
    Dn.L(t, e, n);
    var a = zl;
    if (a && t && e) {
      var l = 'link[rel="preload"][as="' + Ye(e) + '"]';
      e === "image" && n && n.imageSrcSet
        ? ((l += '[imagesrcset="' + Ye(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (l += '[imagesizes="' + Ye(n.imageSizes) + '"]'))
        : (l += '[href="' + Ye(t) + '"]');
      var o = l;
      switch (e) {
        case "style":
          o = Ol(t);
          break;
        case "script":
          o = _l(t);
      }
      Ke.has(o) ||
        ((t = h(
          {
            rel: "preload",
            href: e === "image" && n && n.imageSrcSet ? void 0 : t,
            as: e,
          },
          n,
        )),
        Ke.set(o, t),
        a.querySelector(l) !== null ||
          (e === "style" && a.querySelector(Oi(o))) ||
          (e === "script" && a.querySelector(_i(o))) ||
          ((e = a.createElement("link")),
          ue(e, "link", t),
          te(e),
          a.head.appendChild(e)));
    }
  }
  function Fp(t, e) {
    Dn.m(t, e);
    var n = zl;
    if (n && t) {
      var a = e && typeof e.as == "string" ? e.as : "script",
        l =
          'link[rel="modulepreload"][as="' + Ye(a) + '"][href="' + Ye(t) + '"]',
        o = l;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          o = _l(t);
      }
      if (
        !Ke.has(o) &&
        ((t = h({ rel: "modulepreload", href: t }, e)),
        Ke.set(o, t),
        n.querySelector(l) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(_i(o))) return;
        }
        ((a = n.createElement("link")),
          ue(a, "link", t),
          te(a),
          n.head.appendChild(a));
      }
    }
  }
  function Pp(t, e, n) {
    Dn.S(t, e, n);
    var a = zl;
    if (a && t) {
      var l = Wa(a).hoistableStyles,
        o = Ol(t);
      e = e || "default";
      var c = l.get(o);
      if (!c) {
        var m = { loading: 0, preload: null };
        if ((c = a.querySelector(Oi(o)))) m.loading = 5;
        else {
          ((t = h({ rel: "stylesheet", href: t, "data-precedence": e }, n)),
            (n = Ke.get(o)) && zs(t, n));
          var x = (c = a.createElement("link"));
          (te(x),
            ue(x, "link", t),
            (x._p = new Promise(function (_, j) {
              ((x.onload = _), (x.onerror = j));
            })),
            x.addEventListener("load", function () {
              m.loading |= 1;
            }),
            x.addEventListener("error", function () {
              m.loading |= 2;
            }),
            (m.loading |= 4),
            Vo(c, e, a));
        }
        ((c = { type: "stylesheet", instance: c, count: 1, state: m }),
          l.set(o, c));
      }
    }
  }
  function Ip(t, e) {
    Dn.X(t, e);
    var n = zl;
    if (n && t) {
      var a = Wa(n).hoistableScripts,
        l = _l(t),
        o = a.get(l);
      o ||
        ((o = n.querySelector(_i(l))),
        o ||
          ((t = h({ src: t, async: !0 }, e)),
          (e = Ke.get(l)) && Os(t, e),
          (o = n.createElement("script")),
          te(o),
          ue(o, "link", t),
          n.head.appendChild(o)),
        (o = { type: "script", instance: o, count: 1, state: null }),
        a.set(l, o));
    }
  }
  function ty(t, e) {
    Dn.M(t, e);
    var n = zl;
    if (n && t) {
      var a = Wa(n).hoistableScripts,
        l = _l(t),
        o = a.get(l);
      o ||
        ((o = n.querySelector(_i(l))),
        o ||
          ((t = h({ src: t, async: !0, type: "module" }, e)),
          (e = Ke.get(l)) && Os(t, e),
          (o = n.createElement("script")),
          te(o),
          ue(o, "link", t),
          n.head.appendChild(o)),
        (o = { type: "script", instance: o, count: 1, state: null }),
        a.set(l, o));
    }
  }
  function km(t, e, n, a) {
    var l = (l = ot.current) ? ko(l) : null;
    if (!l) throw Error(u(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((e = Ol(n.href)),
            (n = Wa(l).hoistableStyles),
            (a = n.get(e)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              n.set(e, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          t = Ol(n.href);
          var o = Wa(l).hoistableStyles,
            c = o.get(t);
          if (
            (c ||
              ((l = l.ownerDocument || l),
              (c = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              o.set(t, c),
              (o = l.querySelector(Oi(t))) &&
                !o._p &&
                ((c.instance = o), (c.state.loading = 5)),
              Ke.has(t) ||
                ((n = {
                  rel: "preload",
                  as: "style",
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                Ke.set(t, n),
                o || ey(l, t, n, c.state))),
            e && a === null)
          )
            throw Error(u(528, ""));
          return c;
        }
        if (e && a !== null) throw Error(u(529, ""));
        return null;
      case "script":
        return (
          (e = n.async),
          (n = n.src),
          typeof n == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = _l(n)),
              (n = Wa(l).hoistableScripts),
              (a = n.get(e)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(e, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(u(444, t));
    }
  }
  function Ol(t) {
    return 'href="' + Ye(t) + '"';
  }
  function Oi(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Vm(t) {
    return h({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function ey(t, e, n, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (a.loading = 1)
      : ((e = t.createElement("link")),
        (a.preload = e),
        e.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        ue(e, "link", n),
        te(e),
        t.head.appendChild(e));
  }
  function _l(t) {
    return '[src="' + Ye(t) + '"]';
  }
  function _i(t) {
    return "script[async]" + t;
  }
  function Qm(t, e, n) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var a = t.querySelector('style[data-href~="' + Ye(n.href) + '"]');
          if (a) return ((e.instance = a), te(a), a);
          var l = h({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (t.ownerDocument || t).createElement("style")),
            te(a),
            ue(a, "style", l),
            Vo(a, n.precedence, t),
            (e.instance = a)
          );
        case "stylesheet":
          l = Ol(n.href);
          var o = t.querySelector(Oi(l));
          if (o) return ((e.state.loading |= 4), (e.instance = o), te(o), o);
          ((a = Vm(n)),
            (l = Ke.get(l)) && zs(a, l),
            (o = (t.ownerDocument || t).createElement("link")),
            te(o));
          var c = o;
          return (
            (c._p = new Promise(function (m, x) {
              ((c.onload = m), (c.onerror = x));
            })),
            ue(o, "link", a),
            (e.state.loading |= 4),
            Vo(o, n.precedence, t),
            (e.instance = o)
          );
        case "script":
          return (
            (o = _l(n.src)),
            (l = t.querySelector(_i(o)))
              ? ((e.instance = l), te(l), l)
              : ((a = n),
                (l = Ke.get(o)) && ((a = h({}, n)), Os(a, l)),
                (t = t.ownerDocument || t),
                (l = t.createElement("script")),
                te(l),
                ue(l, "link", a),
                t.head.appendChild(l),
                (e.instance = l))
          );
        case "void":
          return null;
        default:
          throw Error(u(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((a = e.instance), (e.state.loading |= 4), Vo(a, n.precedence, t));
    return e.instance;
  }
  function Vo(t, e, n) {
    for (
      var a = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        l = a.length ? a[a.length - 1] : null,
        o = l,
        c = 0;
      c < a.length;
      c++
    ) {
      var m = a[c];
      if (m.dataset.precedence === e) o = m;
      else if (o !== l) break;
    }
    o
      ? o.parentNode.insertBefore(t, o.nextSibling)
      : ((e = n.nodeType === 9 ? n.head : n), e.insertBefore(t, e.firstChild));
  }
  function zs(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title));
  }
  function Os(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity));
  }
  var Qo = null;
  function Zm(t, e, n) {
    if (Qo === null) {
      var a = new Map(),
        l = (Qo = new Map());
      l.set(n, a);
    } else ((l = Qo), (a = l.get(n)), a || ((a = new Map()), l.set(n, a)));
    if (a.has(t)) return a;
    for (
      a.set(t, null), n = n.getElementsByTagName(t), l = 0;
      l < n.length;
      l++
    ) {
      var o = n[l];
      if (
        !(
          o[Vl] ||
          o[le] ||
          (t === "link" && o.getAttribute("rel") === "stylesheet")
        ) &&
        o.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var c = o.getAttribute(e) || "";
        c = t + c;
        var m = a.get(c);
        m ? m.push(o) : a.set(c, [o]);
      }
    }
    return a;
  }
  function Km(t, e, n) {
    ((t = t.ownerDocument || t),
      t.head.insertBefore(
        n,
        e === "title" ? t.querySelector("head > title") : null,
      ));
  }
  function ny(t, e, n) {
    if (n === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        switch (e.rel) {
          case "stylesheet":
            return (
              (t = e.disabled),
              typeof e.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Jm(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function ay(t, e, n, a) {
    if (
      n.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var l = Ol(a.href),
          o = e.querySelector(Oi(l));
        if (o) {
          ((e = o._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (t.count++, (t = Zo.bind(t)), e.then(t, t)),
            (n.state.loading |= 4),
            (n.instance = o),
            te(o));
          return;
        }
        ((o = e.ownerDocument || e),
          (a = Vm(a)),
          (l = Ke.get(l)) && zs(a, l),
          (o = o.createElement("link")),
          te(o));
        var c = o;
        ((c._p = new Promise(function (m, x) {
          ((c.onload = m), (c.onerror = x));
        })),
          ue(o, "link", a),
          (n.instance = o));
      }
      (t.stylesheets === null && (t.stylesheets = new Map()),
        t.stylesheets.set(n, e),
        (e = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (t.count++,
          (n = Zo.bind(t)),
          e.addEventListener("load", n),
          e.addEventListener("error", n)));
    }
  }
  var _s = 0;
  function ly(t, e) {
    return (
      t.stylesheets && t.count === 0 && Jo(t, t.stylesheets),
      0 < t.count || 0 < t.imgCount
        ? function (n) {
            var a = setTimeout(function () {
              if ((t.stylesheets && Jo(t, t.stylesheets), t.unsuspend)) {
                var o = t.unsuspend;
                ((t.unsuspend = null), o());
              }
            }, 6e4 + e);
            0 < t.imgBytes && _s === 0 && (_s = 62500 * Lp());
            var l = setTimeout(
              function () {
                if (
                  ((t.waitingForImages = !1),
                  t.count === 0 &&
                    (t.stylesheets && Jo(t, t.stylesheets), t.unsuspend))
                ) {
                  var o = t.unsuspend;
                  ((t.unsuspend = null), o());
                }
              },
              (t.imgBytes > _s ? 50 : 800) + e,
            );
            return (
              (t.unsuspend = n),
              function () {
                ((t.unsuspend = null), clearTimeout(a), clearTimeout(l));
              }
            );
          }
        : null
    );
  }
  function Zo() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Jo(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        ((this.unsuspend = null), t());
      }
    }
  }
  var Ko = null;
  function Jo(t, e) {
    ((t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (Ko = new Map()),
        e.forEach(iy, t),
        (Ko = null),
        Zo.call(t)));
  }
  function iy(t, e) {
    if (!(e.state.loading & 4)) {
      var n = Ko.get(t);
      if (n) var a = n.get(null);
      else {
        ((n = new Map()), Ko.set(t, n));
        for (
          var l = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            o = 0;
          o < l.length;
          o++
        ) {
          var c = l[o];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") &&
            (n.set(c.dataset.precedence, c), (a = c));
        }
        a && n.set(null, a);
      }
      ((l = e.instance),
        (c = l.getAttribute("data-precedence")),
        (o = n.get(c) || a),
        o === a && n.set(null, l),
        n.set(c, l),
        this.count++,
        (a = Zo.bind(this)),
        l.addEventListener("load", a),
        l.addEventListener("error", a),
        o
          ? o.parentNode.insertBefore(l, o.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(l, t.firstChild)),
        (e.state.loading |= 4));
    }
  }
  var Mi = {
    $$typeof: J,
    Provider: null,
    Consumer: null,
    _currentValue: D,
    _currentValue2: D,
    _threadCount: 0,
  };
  function oy(t, e, n, a, l, o, c, m, x) {
    ((this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = qn(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = qn(0)),
      (this.hiddenUpdates = qn(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = l),
      (this.onCaughtError = o),
      (this.onRecoverableError = c),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = x),
      (this.incompleteTransitions = new Map()));
  }
  function Wm(t, e, n, a, l, o, c, m, x, _, j, X) {
    return (
      (t = new oy(t, e, n, c, x, _, j, X, m)),
      (e = 1),
      o === !0 && (e |= 24),
      (o = Ce(3, null, null, e)),
      (t.current = o),
      (o.stateNode = t),
      (e = ru()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (o.memoizedState = { element: a, isDehydrated: n, cache: e }),
      fu(o),
      t
    );
  }
  function $m(t) {
    return t ? ((t = il), t) : il;
  }
  function Fm(t, e, n, a, l, o) {
    ((l = $m(l)),
      a.context === null ? (a.context = l) : (a.pendingContext = l),
      (a = Jn(e)),
      (a.payload = { element: n }),
      (o = o === void 0 ? null : o),
      o !== null && (a.callback = o),
      (n = Wn(t, a, e)),
      n !== null && (ze(n, t, e), ri(n, t, e)));
  }
  function Pm(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function Ms(t, e) {
    (Pm(t, e), (t = t.alternate) && Pm(t, e));
  }
  function Im(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Ta(t, 67108864);
      (e !== null && ze(e, t, 67108864), Ms(t, 67108864));
    }
  }
  function t0(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = je();
      e = Qa(e);
      var n = Ta(t, e);
      (n !== null && ze(n, t, e), Ms(t, e));
    }
  }
  var Wo = !0;
  function ry(t, e, n, a) {
    var l = w.T;
    w.T = null;
    var o = L.p;
    try {
      ((L.p = 2), Cs(t, e, n, a));
    } finally {
      ((L.p = o), (w.T = l));
    }
  }
  function uy(t, e, n, a) {
    var l = w.T;
    w.T = null;
    var o = L.p;
    try {
      ((L.p = 8), Cs(t, e, n, a));
    } finally {
      ((L.p = o), (w.T = l));
    }
  }
  function Cs(t, e, n, a) {
    if (Wo) {
      var l = Rs(a);
      if (l === null) (ps(t, e, a, $o, n), n0(t, a));
      else if (cy(l, t, e, n, a)) a.stopPropagation();
      else if ((n0(t, a), e & 4 && -1 < sy.indexOf(t))) {
        for (; l !== null; ) {
          var o = Ja(l);
          if (o !== null)
            switch (o.tag) {
              case 3:
                if (((o = o.stateNode), o.current.memoizedState.isDehydrated)) {
                  var c = an(o.pendingLanes);
                  if (c !== 0) {
                    var m = o;
                    for (m.pendingLanes |= 2, m.entangledLanes |= 2; c; ) {
                      var x = 1 << (31 - se(c));
                      ((m.entanglements[1] |= x), (c &= ~x));
                    }
                    (un(o), (Rt & 6) === 0 && ((No = he() + 500), wi(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((m = Ta(o, 2)), m !== null && ze(m, o, 2), Ho(), Ms(o, 2));
            }
          if (((o = Rs(a)), o === null && ps(t, e, a, $o, n), o === l)) break;
          l = o;
        }
        l !== null && a.stopPropagation();
      } else ps(t, e, a, null, n);
    }
  }
  function Rs(t) {
    return ((t = Dr(t)), Ns(t));
  }
  var $o = null;
  function Ns(t) {
    if ((($o = null), (t = Ka(t)), t !== null)) {
      var e = d(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (((t = p(e)), t !== null)) return t;
          t = null;
        } else if (n === 31) {
          if (((t = b(e)), t !== null)) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return (($o = t), null);
  }
  function e0(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (wr()) {
          case ga:
            return 2;
          case Gi:
            return 8;
          case pa:
          case Xl:
            return 32;
          case gn:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Ds = !1,
    oa = null,
    ra = null,
    ua = null,
    Ci = new Map(),
    Ri = new Map(),
    sa = [],
    sy =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function n0(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        oa = null;
        break;
      case "dragenter":
      case "dragleave":
        ra = null;
        break;
      case "mouseover":
      case "mouseout":
        ua = null;
        break;
      case "pointerover":
      case "pointerout":
        Ci.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ri.delete(e.pointerId);
    }
  }
  function Ni(t, e, n, a, l, o) {
    return t === null || t.nativeEvent !== o
      ? ((t = {
          blockedOn: e,
          domEventName: n,
          eventSystemFlags: a,
          nativeEvent: o,
          targetContainers: [l],
        }),
        e !== null && ((e = Ja(e)), e !== null && Im(e)),
        t)
      : ((t.eventSystemFlags |= a),
        (e = t.targetContainers),
        l !== null && e.indexOf(l) === -1 && e.push(l),
        t);
  }
  function cy(t, e, n, a, l) {
    switch (e) {
      case "focusin":
        return ((oa = Ni(oa, t, e, n, a, l)), !0);
      case "dragenter":
        return ((ra = Ni(ra, t, e, n, a, l)), !0);
      case "mouseover":
        return ((ua = Ni(ua, t, e, n, a, l)), !0);
      case "pointerover":
        var o = l.pointerId;
        return (Ci.set(o, Ni(Ci.get(o) || null, t, e, n, a, l)), !0);
      case "gotpointercapture":
        return (
          (o = l.pointerId),
          Ri.set(o, Ni(Ri.get(o) || null, t, e, n, a, l)),
          !0
        );
    }
    return !1;
  }
  function a0(t) {
    var e = Ka(t.target);
    if (e !== null) {
      var n = d(e);
      if (n !== null) {
        if (((e = n.tag), e === 13)) {
          if (((e = p(n)), e !== null)) {
            ((t.blockedOn = e),
              pc(t.priority, function () {
                t0(n);
              }));
            return;
          }
        } else if (e === 31) {
          if (((e = b(n)), e !== null)) {
            ((t.blockedOn = e),
              pc(t.priority, function () {
                t0(n);
              }));
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Fo(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = Rs(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var a = new n.constructor(n.type, n);
        ((Nr = a), n.target.dispatchEvent(a), (Nr = null));
      } else return ((e = Ja(n)), e !== null && Im(e), (t.blockedOn = n), !1);
      e.shift();
    }
    return !0;
  }
  function l0(t, e, n) {
    Fo(t) && n.delete(e);
  }
  function fy() {
    ((Ds = !1),
      oa !== null && Fo(oa) && (oa = null),
      ra !== null && Fo(ra) && (ra = null),
      ua !== null && Fo(ua) && (ua = null),
      Ci.forEach(l0),
      Ri.forEach(l0));
  }
  function Po(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      Ds ||
        ((Ds = !0),
        i.unstable_scheduleCallback(i.unstable_NormalPriority, fy)));
  }
  var Io = null;
  function i0(t) {
    Io !== t &&
      ((Io = t),
      i.unstable_scheduleCallback(i.unstable_NormalPriority, function () {
        Io === t && (Io = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e],
            a = t[e + 1],
            l = t[e + 2];
          if (typeof a != "function") {
            if (Ns(a || n) === null) continue;
            break;
          }
          var o = Ja(n);
          o !== null &&
            (t.splice(e, 3),
            (e -= 3),
            Ru(o, { pending: !0, data: l, method: n.method, action: a }, a, l));
        }
      }));
  }
  function Ml(t) {
    function e(x) {
      return Po(x, t);
    }
    (oa !== null && Po(oa, t),
      ra !== null && Po(ra, t),
      ua !== null && Po(ua, t),
      Ci.forEach(e),
      Ri.forEach(e));
    for (var n = 0; n < sa.length; n++) {
      var a = sa[n];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < sa.length && ((n = sa[0]), n.blockedOn === null); )
      (a0(n), n.blockedOn === null && sa.shift());
    if (((n = (t.ownerDocument || t).$$reactFormReplay), n != null))
      for (a = 0; a < n.length; a += 3) {
        var l = n[a],
          o = n[a + 1],
          c = l[xe] || null;
        if (typeof o == "function") c || i0(n);
        else if (c) {
          var m = null;
          if (o && o.hasAttribute("formAction")) {
            if (((l = o), (c = o[xe] || null))) m = c.formAction;
            else if (Ns(l) !== null) continue;
          } else m = c.action;
          (typeof m == "function" ? (n[a + 1] = m) : (n.splice(a, 3), (a -= 3)),
            i0(n));
        }
      }
  }
  function o0() {
    function t(o) {
      o.canIntercept &&
        o.info === "react-transition" &&
        o.intercept({
          handler: function () {
            return new Promise(function (c) {
              return (l = c);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function e() {
      (l !== null && (l(), (l = null)), a || setTimeout(n, 20));
    }
    function n() {
      if (!a && !navigation.transition) {
        var o = navigation.currentEntry;
        o &&
          o.url != null &&
          navigation.navigate(o.url, {
            state: o.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var a = !1,
        l = null;
      return (
        navigation.addEventListener("navigate", t),
        navigation.addEventListener("navigatesuccess", e),
        navigation.addEventListener("navigateerror", e),
        setTimeout(n, 100),
        function () {
          ((a = !0),
            navigation.removeEventListener("navigate", t),
            navigation.removeEventListener("navigatesuccess", e),
            navigation.removeEventListener("navigateerror", e),
            l !== null && (l(), (l = null)));
        }
      );
    }
  }
  function Hs(t) {
    this._internalRoot = t;
  }
  ((tr.prototype.render = Hs.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(u(409));
      var n = e.current,
        a = je();
      Fm(n, a, t, e, null, null);
    }),
    (tr.prototype.unmount = Hs.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          (Fm(t.current, 2, null, t, null, null), Ho(), (e[Za] = null));
        }
      }));
  function tr(t) {
    this._internalRoot = t;
  }
  tr.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = Ar();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < sa.length && e !== 0 && e < sa[n].priority; n++);
      (sa.splice(n, 0, t), n === 0 && a0(t));
    }
  };
  var r0 = r.version;
  if (r0 !== "19.2.1") throw Error(u(527, r0, "19.2.1"));
  L.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(u(188))
        : ((t = Object.keys(t).join(",")), Error(u(268, t)));
    return (
      (t = g(e)),
      (t = t !== null ? v(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var dy = {
    bundleType: 0,
    version: "19.2.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: w,
    reconcilerVersion: "19.2.1",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var er = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!er.isDisabled && er.supportsFiber)
      try {
        ((ya = er.inject(dy)), (ge = er));
      } catch {}
  }
  return (
    (Hi.createRoot = function (t, e) {
      if (!f(t)) throw Error(u(299));
      var n = !1,
        a = "",
        l = hd,
        o = gd,
        c = pd;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (n = !0),
          e.identifierPrefix !== void 0 && (a = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (l = e.onUncaughtError),
          e.onCaughtError !== void 0 && (o = e.onCaughtError),
          e.onRecoverableError !== void 0 && (c = e.onRecoverableError)),
        (e = Wm(t, 1, !1, null, null, n, a, null, l, o, c, o0)),
        (t[Za] = e.current),
        gs(t),
        new Hs(e)
      );
    }),
    (Hi.hydrateRoot = function (t, e, n) {
      if (!f(t)) throw Error(u(299));
      var a = !1,
        l = "",
        o = hd,
        c = gd,
        m = pd,
        x = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (a = !0),
          n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (o = n.onUncaughtError),
          n.onCaughtError !== void 0 && (c = n.onCaughtError),
          n.onRecoverableError !== void 0 && (m = n.onRecoverableError),
          n.formState !== void 0 && (x = n.formState)),
        (e = Wm(t, 1, !0, e, n ?? null, a, l, x, o, c, m, o0)),
        (e.context = $m(null)),
        (n = e.current),
        (a = je()),
        (a = Qa(a)),
        (l = Jn(a)),
        (l.callback = null),
        Wn(n, l, a),
        (n = a),
        (e.current.lanes = n),
        Xt(e, n),
        un(e),
        (t[Za] = e.current),
        gs(t),
        new tr(e)
      );
    }),
    (Hi.version = "19.2.1"),
    Hi
  );
}
var y0;
function Ey() {
  if (y0) return Bs.exports;
  y0 = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (r) {
        console.error(r);
      }
  }
  return (i(), (Bs.exports = Sy()), Bs.exports);
}
var wy = Ey(),
  z = dr();
const K = F0(z),
  Ty = hy({ __proto__: null, default: K }, [z]);
var Ay = (i, r, s, u, f, d, p, b) => {
    let y = document.documentElement,
      g = ["light", "dark"];
    function v(M) {
      ((Array.isArray(i) ? i : [i]).forEach((N) => {
        let Y = N === "class",
          k = Y && d ? f.map((R) => d[R] || R) : f;
        Y
          ? (y.classList.remove(...k), y.classList.add(d && d[M] ? d[M] : M))
          : y.setAttribute(N, M);
      }),
        h(M));
    }
    function h(M) {
      b && g.includes(M) && (y.style.colorScheme = M);
    }
    function A() {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    if (u) v(u);
    else
      try {
        let M = localStorage.getItem(r) || s,
          N = p && M === "system" ? A() : M;
        v(N);
      } catch {}
  },
  zy = z.createContext(void 0),
  Oy = { setTheme: (i) => {}, themes: [] },
  _y = () => {
    var i;
    return (i = z.useContext(zy)) != null ? i : Oy;
  };
z.memo(
  ({
    forcedTheme: i,
    storageKey: r,
    attribute: s,
    enableSystem: u,
    enableColorScheme: f,
    defaultTheme: d,
    value: p,
    themes: b,
    nonce: y,
    scriptProps: g,
  }) => {
    let v = JSON.stringify([s, r, d, i, b, p, u, f]).slice(1, -1);
    return z.createElement("script", {
      ...g,
      suppressHydrationWarning: !0,
      nonce: typeof window > "u" ? y : "",
      dangerouslySetInnerHTML: { __html: `(${Ay.toString()})(${v})` },
    });
  },
);
var lc = P0();
const My = F0(lc);
function Cy(i) {
  if (typeof document > "u") return;
  let r = document.head || document.getElementsByTagName("head")[0],
    s = document.createElement("style");
  ((s.type = "text/css"),
    r.appendChild(s),
    s.styleSheet
      ? (s.styleSheet.cssText = i)
      : s.appendChild(document.createTextNode(i)));
}
const Ry = (i) => {
    switch (i) {
      case "success":
        return Hy;
      case "info":
        return By;
      case "warning":
        return jy;
      case "error":
        return Uy;
      default:
        return null;
    }
  },
  Ny = Array(12).fill(0),
  Dy = ({ visible: i, className: r }) =>
    K.createElement(
      "div",
      {
        className: ["sonner-loading-wrapper", r].filter(Boolean).join(" "),
        "data-visible": i,
      },
      K.createElement(
        "div",
        { className: "sonner-spinner" },
        Ny.map((s, u) =>
          K.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${u}`,
          }),
        ),
      ),
    ),
  Hy = K.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    K.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    }),
  ),
  jy = K.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    K.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    }),
  ),
  By = K.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    K.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    }),
  ),
  Uy = K.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    K.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    }),
  ),
  Ly = K.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    K.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    K.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
  ),
  Yy = () => {
    const [i, r] = K.useState(document.hidden);
    return (
      K.useEffect(() => {
        const s = () => {
          r(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", s),
          () => window.removeEventListener("visibilitychange", s)
        );
      }, []),
      i
    );
  };
let Js = 1;
class qy {
  constructor() {
    ((this.subscribe = (r) => (
      this.subscribers.push(r),
      () => {
        const s = this.subscribers.indexOf(r);
        this.subscribers.splice(s, 1);
      }
    )),
      (this.publish = (r) => {
        this.subscribers.forEach((s) => s(r));
      }),
      (this.addToast = (r) => {
        (this.publish(r), (this.toasts = [...this.toasts, r]));
      }),
      (this.create = (r) => {
        var s;
        const { message: u, ...f } = r,
          d =
            typeof r?.id == "number" ||
            ((s = r.id) == null ? void 0 : s.length) > 0
              ? r.id
              : Js++,
          p = this.toasts.find((y) => y.id === d),
          b = r.dismissible === void 0 ? !0 : r.dismissible;
        return (
          this.dismissedToasts.has(d) && this.dismissedToasts.delete(d),
          p
            ? (this.toasts = this.toasts.map((y) =>
                y.id === d
                  ? (this.publish({ ...y, ...r, id: d, title: u }),
                    { ...y, ...r, id: d, dismissible: b, title: u })
                  : y,
              ))
            : this.addToast({ title: u, ...f, dismissible: b, id: d }),
          d
        );
      }),
      (this.dismiss = (r) => (
        r
          ? (this.dismissedToasts.add(r),
            requestAnimationFrame(() =>
              this.subscribers.forEach((s) => s({ id: r, dismiss: !0 })),
            ))
          : this.toasts.forEach((s) => {
              this.subscribers.forEach((u) => u({ id: s.id, dismiss: !0 }));
            }),
        r
      )),
      (this.message = (r, s) => this.create({ ...s, message: r })),
      (this.error = (r, s) => this.create({ ...s, message: r, type: "error" })),
      (this.success = (r, s) =>
        this.create({ ...s, type: "success", message: r })),
      (this.info = (r, s) => this.create({ ...s, type: "info", message: r })),
      (this.warning = (r, s) =>
        this.create({ ...s, type: "warning", message: r })),
      (this.loading = (r, s) =>
        this.create({ ...s, type: "loading", message: r })),
      (this.promise = (r, s) => {
        if (!s) return;
        let u;
        s.loading !== void 0 &&
          (u = this.create({
            ...s,
            promise: r,
            type: "loading",
            message: s.loading,
            description:
              typeof s.description != "function" ? s.description : void 0,
          }));
        const f = Promise.resolve(r instanceof Function ? r() : r);
        let d = u !== void 0,
          p;
        const b = f
            .then(async (g) => {
              if (((p = ["resolve", g]), K.isValidElement(g)))
                ((d = !1), this.create({ id: u, type: "default", message: g }));
              else if (Xy(g) && !g.ok) {
                d = !1;
                const h =
                    typeof s.error == "function"
                      ? await s.error(`HTTP error! status: ${g.status}`)
                      : s.error,
                  A =
                    typeof s.description == "function"
                      ? await s.description(`HTTP error! status: ${g.status}`)
                      : s.description,
                  N =
                    typeof h == "object" && !K.isValidElement(h)
                      ? h
                      : { message: h };
                this.create({ id: u, type: "error", description: A, ...N });
              } else if (g instanceof Error) {
                d = !1;
                const h =
                    typeof s.error == "function" ? await s.error(g) : s.error,
                  A =
                    typeof s.description == "function"
                      ? await s.description(g)
                      : s.description,
                  N =
                    typeof h == "object" && !K.isValidElement(h)
                      ? h
                      : { message: h };
                this.create({ id: u, type: "error", description: A, ...N });
              } else if (s.success !== void 0) {
                d = !1;
                const h =
                    typeof s.success == "function"
                      ? await s.success(g)
                      : s.success,
                  A =
                    typeof s.description == "function"
                      ? await s.description(g)
                      : s.description,
                  N =
                    typeof h == "object" && !K.isValidElement(h)
                      ? h
                      : { message: h };
                this.create({ id: u, type: "success", description: A, ...N });
              }
            })
            .catch(async (g) => {
              if (((p = ["reject", g]), s.error !== void 0)) {
                d = !1;
                const v =
                    typeof s.error == "function" ? await s.error(g) : s.error,
                  h =
                    typeof s.description == "function"
                      ? await s.description(g)
                      : s.description,
                  M =
                    typeof v == "object" && !K.isValidElement(v)
                      ? v
                      : { message: v };
                this.create({ id: u, type: "error", description: h, ...M });
              }
            })
            .finally(() => {
              (d && (this.dismiss(u), (u = void 0)),
                s.finally == null || s.finally.call(s));
            }),
          y = () =>
            new Promise((g, v) =>
              b.then(() => (p[0] === "reject" ? v(p[1]) : g(p[1]))).catch(v),
            );
        return typeof u != "string" && typeof u != "number"
          ? { unwrap: y }
          : Object.assign(u, { unwrap: y });
      }),
      (this.custom = (r, s) => {
        const u = s?.id || Js++;
        return (this.create({ jsx: r(u), id: u, ...s }), u);
      }),
      (this.getActiveToasts = () =>
        this.toasts.filter((r) => !this.dismissedToasts.has(r.id))),
      (this.subscribers = []),
      (this.toasts = []),
      (this.dismissedToasts = new Set()));
  }
}
const Oe = new qy(),
  Gy = (i, r) => {
    const s = r?.id || Js++;
    return (Oe.addToast({ title: i, ...r, id: s }), s);
  },
  Xy = (i) =>
    i &&
    typeof i == "object" &&
    "ok" in i &&
    typeof i.ok == "boolean" &&
    "status" in i &&
    typeof i.status == "number",
  ky = Gy,
  Vy = () => Oe.toasts,
  Qy = () => Oe.getActiveToasts();
Object.assign(
  ky,
  {
    success: Oe.success,
    info: Oe.info,
    warning: Oe.warning,
    error: Oe.error,
    custom: Oe.custom,
    message: Oe.message,
    promise: Oe.promise,
    dismiss: Oe.dismiss,
    loading: Oe.loading,
  },
  { getHistory: Vy, getToasts: Qy },
);
Cy(
  "[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}",
);
function nr(i) {
  return i.label !== void 0;
}
const Zy = 3,
  Ky = "24px",
  Jy = "16px",
  v0 = 4e3,
  Wy = 356,
  $y = 14,
  Fy = 45,
  Py = 200;
function sn(...i) {
  return i.filter(Boolean).join(" ");
}
function Iy(i) {
  const [r, s] = i.split("-"),
    u = [];
  return (r && u.push(r), s && u.push(s), u);
}
const tv = (i) => {
  var r, s, u, f, d, p, b, y, g;
  const {
      invert: v,
      toast: h,
      unstyled: A,
      interacting: M,
      setHeights: N,
      visibleToasts: Y,
      heights: k,
      index: R,
      toasts: W,
      expanded: J,
      removeToast: $,
      defaultRichColors: I,
      closeButton: lt,
      style: Q,
      cancelButtonStyle: Z,
      actionButtonStyle: mt,
      className: St = "",
      descriptionClassName: _t = "",
      duration: gt,
      position: pt,
      gap: vt,
      expandByDefault: xt,
      classNames: w,
      icons: L,
      closeButtonAriaLabel: D = "Close toast",
    } = i,
    [it, ut] = K.useState(null),
    [S, U] = K.useState(null),
    [B, V] = K.useState(!1),
    [F, ot] = K.useState(!1),
    [nt, ct] = K.useState(!1),
    [zt, ne] = K.useState(!1),
    [de, ae] = K.useState(!1),
    [hn, Je] = K.useState(0),
    [Ll, Xa] = K.useState(0),
    ha = K.useRef(h.duration || gt || v0),
    Yl = K.useRef(null),
    _e = K.useRef(null),
    ql = R === 0,
    Gl = R + 1 <= Y,
    me = h.type,
    Ln = h.dismissible !== !1,
    he = h.className || "",
    wr = h.descriptionClassName || "",
    ga = K.useMemo(
      () => k.findIndex((ft) => ft.toastId === h.id) || 0,
      [k, h.id],
    ),
    Gi = K.useMemo(() => {
      var ft;
      return (ft = h.closeButton) != null ? ft : lt;
    }, [h.closeButton, lt]),
    pa = K.useMemo(() => h.duration || gt || v0, [h.duration, gt]),
    Xl = K.useRef(0),
    gn = K.useRef(0),
    Xi = K.useRef(0),
    Yn = K.useRef(null),
    [ya, ge] = pt.split("-"),
    We = K.useMemo(
      () => k.reduce((ft, qt, It) => (It >= ga ? ft : ft + qt.height), 0),
      [k, ga],
    ),
    se = Yy(),
    Tr = h.invert || v,
    kl = me === "loading";
  ((gn.current = K.useMemo(() => ga * vt + We, [ga, We])),
    K.useEffect(() => {
      ha.current = pa;
    }, [pa]),
    K.useEffect(() => {
      V(!0);
    }, []),
    K.useEffect(() => {
      const ft = _e.current;
      if (ft) {
        const qt = ft.getBoundingClientRect().height;
        return (
          Xa(qt),
          N((It) => [
            { toastId: h.id, height: qt, position: h.position },
            ...It,
          ]),
          () => N((It) => It.filter((ce) => ce.toastId !== h.id))
        );
      }
    }, [N, h.id]),
    K.useLayoutEffect(() => {
      if (!B) return;
      const ft = _e.current,
        qt = ft.style.height;
      ft.style.height = "auto";
      const It = ft.getBoundingClientRect().height;
      ((ft.style.height = qt),
        Xa(It),
        N((ce) =>
          ce.find((Xt) => Xt.toastId === h.id)
            ? ce.map((Xt) => (Xt.toastId === h.id ? { ...Xt, height: It } : Xt))
            : [{ toastId: h.id, height: It, position: h.position }, ...ce],
        ));
    }, [B, h.title, h.description, N, h.id, h.jsx, h.action, h.cancel]));
  const nn = K.useCallback(() => {
    (ot(!0),
      Je(gn.current),
      N((ft) => ft.filter((qt) => qt.toastId !== h.id)),
      setTimeout(() => {
        $(h);
      }, Py));
  }, [h, $, N, gn]);
  (K.useEffect(() => {
    if (
      (h.promise && me === "loading") ||
      h.duration === 1 / 0 ||
      h.type === "loading"
    )
      return;
    let ft;
    return (
      J || M || se
        ? (() => {
            if (Xi.current < Xl.current) {
              const ce = new Date().getTime() - Xl.current;
              ha.current = ha.current - ce;
            }
            Xi.current = new Date().getTime();
          })()
        : (() => {
            ha.current !== 1 / 0 &&
              ((Xl.current = new Date().getTime()),
              (ft = setTimeout(() => {
                (h.onAutoClose == null || h.onAutoClose.call(h, h), nn());
              }, ha.current)));
          })(),
      () => clearTimeout(ft)
    );
  }, [J, M, h, me, se, nn]),
    K.useEffect(() => {
      h.delete && (nn(), h.onDismiss == null || h.onDismiss.call(h, h));
    }, [nn, h.delete]));
  function ka() {
    var ft;
    if (L?.loading) {
      var qt;
      return K.createElement(
        "div",
        {
          className: sn(
            w?.loader,
            h == null || (qt = h.classNames) == null ? void 0 : qt.loader,
            "sonner-loader",
          ),
          "data-visible": me === "loading",
        },
        L.loading,
      );
    }
    return K.createElement(Dy, {
      className: sn(
        w?.loader,
        h == null || (ft = h.classNames) == null ? void 0 : ft.loader,
      ),
      visible: me === "loading",
    });
  }
  const Va = h.icon || L?.[me] || Ry(me);
  var va, an;
  return K.createElement(
    "li",
    {
      tabIndex: 0,
      ref: _e,
      className: sn(
        St,
        he,
        w?.toast,
        h == null || (r = h.classNames) == null ? void 0 : r.toast,
        w?.default,
        w?.[me],
        h == null || (s = h.classNames) == null ? void 0 : s[me],
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (va = h.richColors) != null ? va : I,
      "data-styled": !(h.jsx || h.unstyled || A),
      "data-mounted": B,
      "data-promise": !!h.promise,
      "data-swiped": de,
      "data-removed": F,
      "data-visible": Gl,
      "data-y-position": ya,
      "data-x-position": ge,
      "data-index": R,
      "data-front": ql,
      "data-swiping": nt,
      "data-dismissible": Ln,
      "data-type": me,
      "data-invert": Tr,
      "data-swipe-out": zt,
      "data-swipe-direction": S,
      "data-expanded": !!(J || (xt && B)),
      "data-testid": h.testId,
      style: {
        "--index": R,
        "--toasts-before": R,
        "--z-index": W.length - R,
        "--offset": `${F ? hn : gn.current}px`,
        "--initial-height": xt ? "auto" : `${Ll}px`,
        ...Q,
        ...h.style,
      },
      onDragEnd: () => {
        (ct(!1), ut(null), (Yn.current = null));
      },
      onPointerDown: (ft) => {
        ft.button !== 2 &&
          (kl ||
            !Ln ||
            ((Yl.current = new Date()),
            Je(gn.current),
            ft.target.setPointerCapture(ft.pointerId),
            ft.target.tagName !== "BUTTON" &&
              (ct(!0), (Yn.current = { x: ft.clientX, y: ft.clientY }))));
      },
      onPointerUp: () => {
        var ft, qt, It;
        if (zt || !Ln) return;
        Yn.current = null;
        const ce = Number(
            ((ft = _e.current) == null
              ? void 0
              : ft.style
                  .getPropertyValue("--swipe-amount-x")
                  .replace("px", "")) || 0,
          ),
          qn = Number(
            ((qt = _e.current) == null
              ? void 0
              : qt.style
                  .getPropertyValue("--swipe-amount-y")
                  .replace("px", "")) || 0,
          ),
          Xt =
            new Date().getTime() -
            ((It = Yl.current) == null ? void 0 : It.getTime()),
          ye = it === "x" ? ce : qn,
          ba = Math.abs(ye) / Xt;
        if (Math.abs(ye) >= Fy || ba > 0.11) {
          (Je(gn.current),
            h.onDismiss == null || h.onDismiss.call(h, h),
            U(
              it === "x" ? (ce > 0 ? "right" : "left") : qn > 0 ? "down" : "up",
            ),
            nn(),
            ne(!0));
          return;
        } else {
          var ve, be;
          ((ve = _e.current) == null ||
            ve.style.setProperty("--swipe-amount-x", "0px"),
            (be = _e.current) == null ||
              be.style.setProperty("--swipe-amount-y", "0px"));
        }
        (ae(!1), ct(!1), ut(null));
      },
      onPointerMove: (ft) => {
        var qt, It, ce;
        if (
          !Yn.current ||
          !Ln ||
          ((qt = window.getSelection()) == null
            ? void 0
            : qt.toString().length) > 0
        )
          return;
        const Xt = ft.clientY - Yn.current.y,
          ye = ft.clientX - Yn.current.x;
        var ba;
        const ve = (ba = i.swipeDirections) != null ? ba : Iy(pt);
        !it &&
          (Math.abs(ye) > 1 || Math.abs(Xt) > 1) &&
          ut(Math.abs(ye) > Math.abs(Xt) ? "x" : "y");
        let be = { x: 0, y: 0 };
        const Qa = ($e) => 1 / (1.5 + Math.abs($e) / 20);
        if (it === "y") {
          if (ve.includes("top") || ve.includes("bottom"))
            if (
              (ve.includes("top") && Xt < 0) ||
              (ve.includes("bottom") && Xt > 0)
            )
              be.y = Xt;
            else {
              const $e = Xt * Qa(Xt);
              be.y = Math.abs($e) < Math.abs(Xt) ? $e : Xt;
            }
        } else if (it === "x" && (ve.includes("left") || ve.includes("right")))
          if (
            (ve.includes("left") && ye < 0) ||
            (ve.includes("right") && ye > 0)
          )
            be.x = ye;
          else {
            const $e = ye * Qa(ye);
            be.x = Math.abs($e) < Math.abs(ye) ? $e : ye;
          }
        ((Math.abs(be.x) > 0 || Math.abs(be.y) > 0) && ae(!0),
          (It = _e.current) == null ||
            It.style.setProperty("--swipe-amount-x", `${be.x}px`),
          (ce = _e.current) == null ||
            ce.style.setProperty("--swipe-amount-y", `${be.y}px`));
      },
    },
    Gi && !h.jsx && me !== "loading"
      ? K.createElement(
          "button",
          {
            "aria-label": D,
            "data-disabled": kl,
            "data-close-button": !0,
            onClick:
              kl || !Ln
                ? () => {}
                : () => {
                    (nn(), h.onDismiss == null || h.onDismiss.call(h, h));
                  },
            className: sn(
              w?.closeButton,
              h == null || (u = h.classNames) == null ? void 0 : u.closeButton,
            ),
          },
          (an = L?.close) != null ? an : Ly,
        )
      : null,
    (me || h.icon || h.promise) &&
      h.icon !== null &&
      (L?.[me] !== null || h.icon)
      ? K.createElement(
          "div",
          {
            "data-icon": "",
            className: sn(
              w?.icon,
              h == null || (f = h.classNames) == null ? void 0 : f.icon,
            ),
          },
          h.promise || (h.type === "loading" && !h.icon)
            ? h.icon || ka()
            : null,
          h.type !== "loading" ? Va : null,
        )
      : null,
    K.createElement(
      "div",
      {
        "data-content": "",
        className: sn(
          w?.content,
          h == null || (d = h.classNames) == null ? void 0 : d.content,
        ),
      },
      K.createElement(
        "div",
        {
          "data-title": "",
          className: sn(
            w?.title,
            h == null || (p = h.classNames) == null ? void 0 : p.title,
          ),
        },
        h.jsx ? h.jsx : typeof h.title == "function" ? h.title() : h.title,
      ),
      h.description
        ? K.createElement(
            "div",
            {
              "data-description": "",
              className: sn(
                _t,
                wr,
                w?.description,
                h == null || (b = h.classNames) == null
                  ? void 0
                  : b.description,
              ),
            },
            typeof h.description == "function"
              ? h.description()
              : h.description,
          )
        : null,
    ),
    K.isValidElement(h.cancel)
      ? h.cancel
      : h.cancel && nr(h.cancel)
        ? K.createElement(
            "button",
            {
              "data-button": !0,
              "data-cancel": !0,
              style: h.cancelButtonStyle || Z,
              onClick: (ft) => {
                nr(h.cancel) &&
                  Ln &&
                  (h.cancel.onClick == null ||
                    h.cancel.onClick.call(h.cancel, ft),
                  nn());
              },
              className: sn(
                w?.cancelButton,
                h == null || (y = h.classNames) == null
                  ? void 0
                  : y.cancelButton,
              ),
            },
            h.cancel.label,
          )
        : null,
    K.isValidElement(h.action)
      ? h.action
      : h.action && nr(h.action)
        ? K.createElement(
            "button",
            {
              "data-button": !0,
              "data-action": !0,
              style: h.actionButtonStyle || mt,
              onClick: (ft) => {
                nr(h.action) &&
                  (h.action.onClick == null ||
                    h.action.onClick.call(h.action, ft),
                  !ft.defaultPrevented && nn());
              },
              className: sn(
                w?.actionButton,
                h == null || (g = h.classNames) == null
                  ? void 0
                  : g.actionButton,
              ),
            },
            h.action.label,
          )
        : null,
  );
};
function b0() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  const i = document.documentElement.getAttribute("dir");
  return i === "auto" || !i
    ? window.getComputedStyle(document.documentElement).direction
    : i;
}
function ev(i, r) {
  const s = {};
  return (
    [i, r].forEach((u, f) => {
      const d = f === 1,
        p = d ? "--mobile-offset" : "--offset",
        b = d ? Jy : Ky;
      function y(g) {
        ["top", "right", "bottom", "left"].forEach((v) => {
          s[`${p}-${v}`] = typeof g == "number" ? `${g}px` : g;
        });
      }
      typeof u == "number" || typeof u == "string"
        ? y(u)
        : typeof u == "object"
          ? ["top", "right", "bottom", "left"].forEach((g) => {
              u[g] === void 0
                ? (s[`${p}-${g}`] = b)
                : (s[`${p}-${g}`] =
                    typeof u[g] == "number" ? `${u[g]}px` : u[g]);
            })
          : y(b);
    }),
    s
  );
}
const nv = K.forwardRef(function (r, s) {
    const {
        id: u,
        invert: f,
        position: d = "bottom-right",
        hotkey: p = ["altKey", "KeyT"],
        expand: b,
        closeButton: y,
        className: g,
        offset: v,
        mobileOffset: h,
        theme: A = "light",
        richColors: M,
        duration: N,
        style: Y,
        visibleToasts: k = Zy,
        toastOptions: R,
        dir: W = b0(),
        gap: J = $y,
        icons: $,
        containerAriaLabel: I = "Notifications",
      } = r,
      [lt, Q] = K.useState([]),
      Z = K.useMemo(
        () =>
          u
            ? lt.filter((B) => B.toasterId === u)
            : lt.filter((B) => !B.toasterId),
        [lt, u],
      ),
      mt = K.useMemo(
        () =>
          Array.from(
            new Set(
              [d].concat(Z.filter((B) => B.position).map((B) => B.position)),
            ),
          ),
        [Z, d],
      ),
      [St, _t] = K.useState([]),
      [gt, pt] = K.useState(!1),
      [vt, xt] = K.useState(!1),
      [w, L] = K.useState(
        A !== "system"
          ? A
          : typeof window < "u" &&
              window.matchMedia &&
              window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light",
      ),
      D = K.useRef(null),
      it = p.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      ut = K.useRef(null),
      S = K.useRef(!1),
      U = K.useCallback((B) => {
        Q((V) => {
          var F;
          return (
            ((F = V.find((ot) => ot.id === B.id)) != null && F.delete) ||
              Oe.dismiss(B.id),
            V.filter(({ id: ot }) => ot !== B.id)
          );
        });
      }, []);
    return (
      K.useEffect(
        () =>
          Oe.subscribe((B) => {
            if (B.dismiss) {
              requestAnimationFrame(() => {
                Q((V) =>
                  V.map((F) => (F.id === B.id ? { ...F, delete: !0 } : F)),
                );
              });
              return;
            }
            setTimeout(() => {
              My.flushSync(() => {
                Q((V) => {
                  const F = V.findIndex((ot) => ot.id === B.id);
                  return F !== -1
                    ? [...V.slice(0, F), { ...V[F], ...B }, ...V.slice(F + 1)]
                    : [B, ...V];
                });
              });
            });
          }),
        [lt],
      ),
      K.useEffect(() => {
        if (A !== "system") {
          L(A);
          return;
        }
        if (
          (A === "system" &&
            (window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
              ? L("dark")
              : L("light")),
          typeof window > "u")
        )
          return;
        const B = window.matchMedia("(prefers-color-scheme: dark)");
        try {
          B.addEventListener("change", ({ matches: V }) => {
            L(V ? "dark" : "light");
          });
        } catch {
          B.addListener(({ matches: F }) => {
            try {
              L(F ? "dark" : "light");
            } catch (ot) {
              console.error(ot);
            }
          });
        }
      }, [A]),
      K.useEffect(() => {
        lt.length <= 1 && pt(!1);
      }, [lt]),
      K.useEffect(() => {
        const B = (V) => {
          var F;
          if (p.every((ct) => V[ct] || V.code === ct)) {
            var nt;
            (pt(!0), (nt = D.current) == null || nt.focus());
          }
          V.code === "Escape" &&
            (document.activeElement === D.current ||
              ((F = D.current) != null &&
                F.contains(document.activeElement))) &&
            pt(!1);
        };
        return (
          document.addEventListener("keydown", B),
          () => document.removeEventListener("keydown", B)
        );
      }, [p]),
      K.useEffect(() => {
        if (D.current)
          return () => {
            ut.current &&
              (ut.current.focus({ preventScroll: !0 }),
              (ut.current = null),
              (S.current = !1));
          };
      }, [D.current]),
      K.createElement(
        "section",
        {
          ref: s,
          "aria-label": `${I} ${it}`,
          tabIndex: -1,
          "aria-live": "polite",
          "aria-relevant": "additions text",
          "aria-atomic": "false",
          suppressHydrationWarning: !0,
        },
        mt.map((B, V) => {
          var F;
          const [ot, nt] = B.split("-");
          return Z.length
            ? K.createElement(
                "ol",
                {
                  key: B,
                  dir: W === "auto" ? b0() : W,
                  tabIndex: -1,
                  ref: D,
                  className: g,
                  "data-sonner-toaster": !0,
                  "data-sonner-theme": w,
                  "data-y-position": ot,
                  "data-x-position": nt,
                  style: {
                    "--front-toast-height": `${((F = St[0]) == null ? void 0 : F.height) || 0}px`,
                    "--width": `${Wy}px`,
                    "--gap": `${J}px`,
                    ...Y,
                    ...ev(v, h),
                  },
                  onBlur: (ct) => {
                    S.current &&
                      !ct.currentTarget.contains(ct.relatedTarget) &&
                      ((S.current = !1),
                      ut.current &&
                        (ut.current.focus({ preventScroll: !0 }),
                        (ut.current = null)));
                  },
                  onFocus: (ct) => {
                    (ct.target instanceof HTMLElement &&
                      ct.target.dataset.dismissible === "false") ||
                      S.current ||
                      ((S.current = !0), (ut.current = ct.relatedTarget));
                  },
                  onMouseEnter: () => pt(!0),
                  onMouseMove: () => pt(!0),
                  onMouseLeave: () => {
                    vt || pt(!1);
                  },
                  onDragEnd: () => pt(!1),
                  onPointerDown: (ct) => {
                    (ct.target instanceof HTMLElement &&
                      ct.target.dataset.dismissible === "false") ||
                      xt(!0);
                  },
                  onPointerUp: () => xt(!1),
                },
                Z.filter(
                  (ct) => (!ct.position && V === 0) || ct.position === B,
                ).map((ct, zt) => {
                  var ne, de;
                  return K.createElement(tv, {
                    key: ct.id,
                    icons: $,
                    index: zt,
                    toast: ct,
                    defaultRichColors: M,
                    duration: (ne = R?.duration) != null ? ne : N,
                    className: R?.className,
                    descriptionClassName: R?.descriptionClassName,
                    invert: f,
                    visibleToasts: k,
                    closeButton: (de = R?.closeButton) != null ? de : y,
                    interacting: vt,
                    position: B,
                    style: R?.style,
                    unstyled: R?.unstyled,
                    classNames: R?.classNames,
                    cancelButtonStyle: R?.cancelButtonStyle,
                    actionButtonStyle: R?.actionButtonStyle,
                    closeButtonAriaLabel: R?.closeButtonAriaLabel,
                    removeToast: U,
                    toasts: Z.filter((ae) => ae.position == ct.position),
                    heights: St.filter((ae) => ae.position == ct.position),
                    setHeights: _t,
                    expandByDefault: b,
                    gap: J,
                    expanded: gt,
                    swipeDirections: r.swipeDirections,
                  });
                }),
              )
            : null;
        }),
      )
    );
  }),
  av = ({ ...i }) => {
    const { theme: r = "system" } = _y();
    return G.jsx(nv, {
      "data-loc": "client/src/components/ui/sonner.tsx:8",
      theme: r,
      className: "toaster group",
      style: {
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)",
      },
      ...i,
    });
  };
function jn(i, r, { checkForDefaultPrevented: s = !0 } = {}) {
  return function (f) {
    if ((i?.(f), s === !1 || !f.defaultPrevented)) return r?.(f);
  };
}
function x0(i, r) {
  if (typeof i == "function") return i(r);
  i != null && (i.current = r);
}
function I0(...i) {
  return (r) => {
    let s = !1;
    const u = i.map((f) => {
      const d = x0(f, r);
      return (!s && typeof d == "function" && (s = !0), d);
    });
    if (s)
      return () => {
        for (let f = 0; f < u.length; f++) {
          const d = u[f];
          typeof d == "function" ? d() : x0(i[f], null);
        }
      };
  };
}
function qa(...i) {
  return z.useCallback(I0(...i), i);
}
function th(i, r = []) {
  let s = [];
  function u(d, p) {
    const b = z.createContext(p),
      y = s.length;
    s = [...s, p];
    const g = (h) => {
      const { scope: A, children: M, ...N } = h,
        Y = A?.[i]?.[y] || b,
        k = z.useMemo(() => N, Object.values(N));
      return G.jsx(Y.Provider, { value: k, children: M });
    };
    g.displayName = d + "Provider";
    function v(h, A) {
      const M = A?.[i]?.[y] || b,
        N = z.useContext(M);
      if (N) return N;
      if (p !== void 0) return p;
      throw new Error(`\`${h}\` must be used within \`${d}\``);
    }
    return [g, v];
  }
  const f = () => {
    const d = s.map((p) => z.createContext(p));
    return function (b) {
      const y = b?.[i] || d;
      return z.useMemo(() => ({ [`__scope${i}`]: { ...b, [i]: y } }), [b, y]);
    };
  };
  return ((f.scopeName = i), [u, lv(f, ...r)]);
}
function lv(...i) {
  const r = i[0];
  if (i.length === 1) return r;
  const s = () => {
    const u = i.map((f) => ({ useScope: f(), scopeName: f.scopeName }));
    return function (d) {
      const p = u.reduce((b, { useScope: y, scopeName: g }) => {
        const h = y(d)[`__scope${g}`];
        return { ...b, ...h };
      }, {});
      return z.useMemo(() => ({ [`__scope${r.scopeName}`]: p }), [p]);
    };
  };
  return ((s.scopeName = r.scopeName), s);
}
function eh(i) {
  const r = ov(i),
    s = z.forwardRef((u, f) => {
      const { children: d, ...p } = u,
        b = z.Children.toArray(d),
        y = b.find(uv);
      if (y) {
        const g = y.props.children,
          v = b.map((h) =>
            h === y
              ? z.Children.count(g) > 1
                ? z.Children.only(null)
                : z.isValidElement(g)
                  ? g.props.children
                  : null
              : h,
          );
        return G.jsx(r, {
          ...p,
          ref: f,
          children: z.isValidElement(g) ? z.cloneElement(g, void 0, v) : null,
        });
      }
      return G.jsx(r, { ...p, ref: f, children: d });
    });
  return ((s.displayName = `${i}.Slot`), s);
}
var iv = eh("Slot");
function ov(i) {
  const r = z.forwardRef((s, u) => {
    const { children: f, ...d } = s;
    if (z.isValidElement(f)) {
      const p = cv(f),
        b = sv(d, f.props);
      return (
        f.type !== z.Fragment && (b.ref = u ? I0(u, p) : p),
        z.cloneElement(f, b)
      );
    }
    return z.Children.count(f) > 1 ? z.Children.only(null) : null;
  });
  return ((r.displayName = `${i}.SlotClone`), r);
}
var nh = Symbol("radix.slottable");
function rv(i) {
  const r = ({ children: s }) => G.jsx(G.Fragment, { children: s });
  return ((r.displayName = `${i}.Slottable`), (r.__radixId = nh), r);
}
function uv(i) {
  return (
    z.isValidElement(i) &&
    typeof i.type == "function" &&
    "__radixId" in i.type &&
    i.type.__radixId === nh
  );
}
function sv(i, r) {
  const s = { ...r };
  for (const u in r) {
    const f = i[u],
      d = r[u];
    /^on[A-Z]/.test(u)
      ? f && d
        ? (s[u] = (...b) => {
            const y = d(...b);
            return (f(...b), y);
          })
        : f && (s[u] = f)
      : u === "style"
        ? (s[u] = { ...f, ...d })
        : u === "className" && (s[u] = [f, d].filter(Boolean).join(" "));
  }
  return { ...i, ...s };
}
function cv(i) {
  let r = Object.getOwnPropertyDescriptor(i.props, "ref")?.get,
    s = r && "isReactWarning" in r && r.isReactWarning;
  return s
    ? i.ref
    : ((r = Object.getOwnPropertyDescriptor(i, "ref")?.get),
      (s = r && "isReactWarning" in r && r.isReactWarning),
      s ? i.props.ref : i.props.ref || i.ref);
}
var fv = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  Ga = fv.reduce((i, r) => {
    const s = eh(`Primitive.${r}`),
      u = z.forwardRef((f, d) => {
        const { asChild: p, ...b } = f,
          y = p ? s : r;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          G.jsx(y, { ...b, ref: d })
        );
      });
    return ((u.displayName = `Primitive.${r}`), { ...i, [r]: u });
  }, {});
function dv(i, r) {
  i && lc.flushSync(() => i.dispatchEvent(r));
}
function mr(i) {
  const r = z.useRef(i);
  return (
    z.useEffect(() => {
      r.current = i;
    }),
    z.useMemo(
      () =>
        (...s) =>
          r.current?.(...s),
      [],
    )
  );
}
function mv(i, r = globalThis?.document) {
  const s = mr(i);
  z.useEffect(() => {
    const u = (f) => {
      f.key === "Escape" && s(f);
    };
    return (
      r.addEventListener("keydown", u, { capture: !0 }),
      () => r.removeEventListener("keydown", u, { capture: !0 })
    );
  }, [s, r]);
}
var hv = "DismissableLayer",
  Ws = "dismissableLayer.update",
  gv = "dismissableLayer.pointerDownOutside",
  pv = "dismissableLayer.focusOutside",
  S0,
  ah = z.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  lh = z.forwardRef((i, r) => {
    const {
        disableOutsidePointerEvents: s = !1,
        onEscapeKeyDown: u,
        onPointerDownOutside: f,
        onFocusOutside: d,
        onInteractOutside: p,
        onDismiss: b,
        ...y
      } = i,
      g = z.useContext(ah),
      [v, h] = z.useState(null),
      A = v?.ownerDocument ?? globalThis?.document,
      [, M] = z.useState({}),
      N = qa(r, (Q) => h(Q)),
      Y = Array.from(g.layers),
      [k] = [...g.layersWithOutsidePointerEventsDisabled].slice(-1),
      R = Y.indexOf(k),
      W = v ? Y.indexOf(v) : -1,
      J = g.layersWithOutsidePointerEventsDisabled.size > 0,
      $ = W >= R,
      I = bv((Q) => {
        const Z = Q.target,
          mt = [...g.branches].some((St) => St.contains(Z));
        !$ || mt || (f?.(Q), p?.(Q), Q.defaultPrevented || b?.());
      }, A),
      lt = xv((Q) => {
        const Z = Q.target;
        [...g.branches].some((St) => St.contains(Z)) ||
          (d?.(Q), p?.(Q), Q.defaultPrevented || b?.());
      }, A);
    return (
      mv((Q) => {
        W === g.layers.size - 1 &&
          (u?.(Q), !Q.defaultPrevented && b && (Q.preventDefault(), b()));
      }, A),
      z.useEffect(() => {
        if (v)
          return (
            s &&
              (g.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((S0 = A.body.style.pointerEvents),
                (A.body.style.pointerEvents = "none")),
              g.layersWithOutsidePointerEventsDisabled.add(v)),
            g.layers.add(v),
            E0(),
            () => {
              s &&
                g.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (A.body.style.pointerEvents = S0);
            }
          );
      }, [v, A, s, g]),
      z.useEffect(
        () => () => {
          v &&
            (g.layers.delete(v),
            g.layersWithOutsidePointerEventsDisabled.delete(v),
            E0());
        },
        [v, g],
      ),
      z.useEffect(() => {
        const Q = () => M({});
        return (
          document.addEventListener(Ws, Q),
          () => document.removeEventListener(Ws, Q)
        );
      }, []),
      G.jsx(Ga.div, {
        ...y,
        ref: N,
        style: {
          pointerEvents: J ? ($ ? "auto" : "none") : void 0,
          ...i.style,
        },
        onFocusCapture: jn(i.onFocusCapture, lt.onFocusCapture),
        onBlurCapture: jn(i.onBlurCapture, lt.onBlurCapture),
        onPointerDownCapture: jn(
          i.onPointerDownCapture,
          I.onPointerDownCapture,
        ),
      })
    );
  });
lh.displayName = hv;
var yv = "DismissableLayerBranch",
  vv = z.forwardRef((i, r) => {
    const s = z.useContext(ah),
      u = z.useRef(null),
      f = qa(r, u);
    return (
      z.useEffect(() => {
        const d = u.current;
        if (d)
          return (
            s.branches.add(d),
            () => {
              s.branches.delete(d);
            }
          );
      }, [s.branches]),
      G.jsx(Ga.div, { ...i, ref: f })
    );
  });
vv.displayName = yv;
function bv(i, r = globalThis?.document) {
  const s = mr(i),
    u = z.useRef(!1),
    f = z.useRef(() => {});
  return (
    z.useEffect(() => {
      const d = (b) => {
          if (b.target && !u.current) {
            let y = function () {
              ih(gv, s, g, { discrete: !0 });
            };
            const g = { originalEvent: b };
            b.pointerType === "touch"
              ? (r.removeEventListener("click", f.current),
                (f.current = y),
                r.addEventListener("click", f.current, { once: !0 }))
              : y();
          } else r.removeEventListener("click", f.current);
          u.current = !1;
        },
        p = window.setTimeout(() => {
          r.addEventListener("pointerdown", d);
        }, 0);
      return () => {
        (window.clearTimeout(p),
          r.removeEventListener("pointerdown", d),
          r.removeEventListener("click", f.current));
      };
    }, [r, s]),
    { onPointerDownCapture: () => (u.current = !0) }
  );
}
function xv(i, r = globalThis?.document) {
  const s = mr(i),
    u = z.useRef(!1);
  return (
    z.useEffect(() => {
      const f = (d) => {
        d.target &&
          !u.current &&
          ih(pv, s, { originalEvent: d }, { discrete: !1 });
      };
      return (
        r.addEventListener("focusin", f),
        () => r.removeEventListener("focusin", f)
      );
    }, [r, s]),
    {
      onFocusCapture: () => (u.current = !0),
      onBlurCapture: () => (u.current = !1),
    }
  );
}
function E0() {
  const i = new CustomEvent(Ws);
  document.dispatchEvent(i);
}
function ih(i, r, s, { discrete: u }) {
  const f = s.originalEvent.target,
    d = new CustomEvent(i, { bubbles: !1, cancelable: !0, detail: s });
  (r && f.addEventListener(i, r, { once: !0 }),
    u ? dv(f, d) : f.dispatchEvent(d));
}
var Bi = globalThis?.document ? z.useLayoutEffect : () => {};
const Sv = ["top", "right", "bottom", "left"],
  da = Math.min,
  Be = Math.max,
  ur = Math.round,
  ar = Math.floor,
  fn = (i) => ({ x: i, y: i }),
  Ev = { left: "right", right: "left", bottom: "top", top: "bottom" },
  wv = { start: "end", end: "start" };
function $s(i, r, s) {
  return Be(i, da(r, s));
}
function Bn(i, r) {
  return typeof i == "function" ? i(r) : i;
}
function Un(i) {
  return i.split("-")[0];
}
function Hl(i) {
  return i.split("-")[1];
}
function ic(i) {
  return i === "x" ? "y" : "x";
}
function oc(i) {
  return i === "y" ? "height" : "width";
}
const Tv = new Set(["top", "bottom"]);
function cn(i) {
  return Tv.has(Un(i)) ? "y" : "x";
}
function rc(i) {
  return ic(cn(i));
}
function Av(i, r, s) {
  s === void 0 && (s = !1);
  const u = Hl(i),
    f = rc(i),
    d = oc(f);
  let p =
    f === "x"
      ? u === (s ? "end" : "start")
        ? "right"
        : "left"
      : u === "start"
        ? "bottom"
        : "top";
  return (r.reference[d] > r.floating[d] && (p = sr(p)), [p, sr(p)]);
}
function zv(i) {
  const r = sr(i);
  return [Fs(i), r, Fs(r)];
}
function Fs(i) {
  return i.replace(/start|end/g, (r) => wv[r]);
}
const w0 = ["left", "right"],
  T0 = ["right", "left"],
  Ov = ["top", "bottom"],
  _v = ["bottom", "top"];
function Mv(i, r, s) {
  switch (i) {
    case "top":
    case "bottom":
      return s ? (r ? T0 : w0) : r ? w0 : T0;
    case "left":
    case "right":
      return r ? Ov : _v;
    default:
      return [];
  }
}
function Cv(i, r, s, u) {
  const f = Hl(i);
  let d = Mv(Un(i), s === "start", u);
  return (
    f && ((d = d.map((p) => p + "-" + f)), r && (d = d.concat(d.map(Fs)))),
    d
  );
}
function sr(i) {
  return i.replace(/left|right|bottom|top/g, (r) => Ev[r]);
}
function Rv(i) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...i };
}
function oh(i) {
  return typeof i != "number"
    ? Rv(i)
    : { top: i, right: i, bottom: i, left: i };
}
function cr(i) {
  const { x: r, y: s, width: u, height: f } = i;
  return {
    width: u,
    height: f,
    top: s,
    left: r,
    right: r + u,
    bottom: s + f,
    x: r,
    y: s,
  };
}
function A0(i, r, s) {
  let { reference: u, floating: f } = i;
  const d = cn(r),
    p = rc(r),
    b = oc(p),
    y = Un(r),
    g = d === "y",
    v = u.x + u.width / 2 - f.width / 2,
    h = u.y + u.height / 2 - f.height / 2,
    A = u[b] / 2 - f[b] / 2;
  let M;
  switch (y) {
    case "top":
      M = { x: v, y: u.y - f.height };
      break;
    case "bottom":
      M = { x: v, y: u.y + u.height };
      break;
    case "right":
      M = { x: u.x + u.width, y: h };
      break;
    case "left":
      M = { x: u.x - f.width, y: h };
      break;
    default:
      M = { x: u.x, y: u.y };
  }
  switch (Hl(r)) {
    case "start":
      M[p] -= A * (s && g ? -1 : 1);
      break;
    case "end":
      M[p] += A * (s && g ? -1 : 1);
      break;
  }
  return M;
}
const Nv = async (i, r, s) => {
  const {
      placement: u = "bottom",
      strategy: f = "absolute",
      middleware: d = [],
      platform: p,
    } = s,
    b = d.filter(Boolean),
    y = await (p.isRTL == null ? void 0 : p.isRTL(r));
  let g = await p.getElementRects({ reference: i, floating: r, strategy: f }),
    { x: v, y: h } = A0(g, u, y),
    A = u,
    M = {},
    N = 0;
  for (let Y = 0; Y < b.length; Y++) {
    const { name: k, fn: R } = b[Y],
      {
        x: W,
        y: J,
        data: $,
        reset: I,
      } = await R({
        x: v,
        y: h,
        initialPlacement: u,
        placement: A,
        strategy: f,
        middlewareData: M,
        rects: g,
        platform: p,
        elements: { reference: i, floating: r },
      });
    ((v = W ?? v),
      (h = J ?? h),
      (M = { ...M, [k]: { ...M[k], ...$ } }),
      I &&
        N <= 50 &&
        (N++,
        typeof I == "object" &&
          (I.placement && (A = I.placement),
          I.rects &&
            (g =
              I.rects === !0
                ? await p.getElementRects({
                    reference: i,
                    floating: r,
                    strategy: f,
                  })
                : I.rects),
          ({ x: v, y: h } = A0(g, A, y))),
        (Y = -1)));
  }
  return { x: v, y: h, placement: A, strategy: f, middlewareData: M };
};
async function Ui(i, r) {
  var s;
  r === void 0 && (r = {});
  const { x: u, y: f, platform: d, rects: p, elements: b, strategy: y } = i,
    {
      boundary: g = "clippingAncestors",
      rootBoundary: v = "viewport",
      elementContext: h = "floating",
      altBoundary: A = !1,
      padding: M = 0,
    } = Bn(r, i),
    N = oh(M),
    k = b[A ? (h === "floating" ? "reference" : "floating") : h],
    R = cr(
      await d.getClippingRect({
        element:
          (s = await (d.isElement == null ? void 0 : d.isElement(k))) == null ||
          s
            ? k
            : k.contextElement ||
              (await (d.getDocumentElement == null
                ? void 0
                : d.getDocumentElement(b.floating))),
        boundary: g,
        rootBoundary: v,
        strategy: y,
      }),
    ),
    W =
      h === "floating"
        ? { x: u, y: f, width: p.floating.width, height: p.floating.height }
        : p.reference,
    J = await (d.getOffsetParent == null
      ? void 0
      : d.getOffsetParent(b.floating)),
    $ = (await (d.isElement == null ? void 0 : d.isElement(J)))
      ? (await (d.getScale == null ? void 0 : d.getScale(J))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    I = cr(
      d.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await d.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: b,
            rect: W,
            offsetParent: J,
            strategy: y,
          })
        : W,
    );
  return {
    top: (R.top - I.top + N.top) / $.y,
    bottom: (I.bottom - R.bottom + N.bottom) / $.y,
    left: (R.left - I.left + N.left) / $.x,
    right: (I.right - R.right + N.right) / $.x,
  };
}
const Dv = (i) => ({
    name: "arrow",
    options: i,
    async fn(r) {
      const {
          x: s,
          y: u,
          placement: f,
          rects: d,
          platform: p,
          elements: b,
          middlewareData: y,
        } = r,
        { element: g, padding: v = 0 } = Bn(i, r) || {};
      if (g == null) return {};
      const h = oh(v),
        A = { x: s, y: u },
        M = rc(f),
        N = oc(M),
        Y = await p.getDimensions(g),
        k = M === "y",
        R = k ? "top" : "left",
        W = k ? "bottom" : "right",
        J = k ? "clientHeight" : "clientWidth",
        $ = d.reference[N] + d.reference[M] - A[M] - d.floating[N],
        I = A[M] - d.reference[M],
        lt = await (p.getOffsetParent == null ? void 0 : p.getOffsetParent(g));
      let Q = lt ? lt[J] : 0;
      (!Q || !(await (p.isElement == null ? void 0 : p.isElement(lt)))) &&
        (Q = b.floating[J] || d.floating[N]);
      const Z = $ / 2 - I / 2,
        mt = Q / 2 - Y[N] / 2 - 1,
        St = da(h[R], mt),
        _t = da(h[W], mt),
        gt = St,
        pt = Q - Y[N] - _t,
        vt = Q / 2 - Y[N] / 2 + Z,
        xt = $s(gt, vt, pt),
        w =
          !y.arrow &&
          Hl(f) != null &&
          vt !== xt &&
          d.reference[N] / 2 - (vt < gt ? St : _t) - Y[N] / 2 < 0,
        L = w ? (vt < gt ? vt - gt : vt - pt) : 0;
      return {
        [M]: A[M] + L,
        data: {
          [M]: xt,
          centerOffset: vt - xt - L,
          ...(w && { alignmentOffset: L }),
        },
        reset: w,
      };
    },
  }),
  Hv = function (i) {
    return (
      i === void 0 && (i = {}),
      {
        name: "flip",
        options: i,
        async fn(r) {
          var s, u;
          const {
              placement: f,
              middlewareData: d,
              rects: p,
              initialPlacement: b,
              platform: y,
              elements: g,
            } = r,
            {
              mainAxis: v = !0,
              crossAxis: h = !0,
              fallbackPlacements: A,
              fallbackStrategy: M = "bestFit",
              fallbackAxisSideDirection: N = "none",
              flipAlignment: Y = !0,
              ...k
            } = Bn(i, r);
          if ((s = d.arrow) != null && s.alignmentOffset) return {};
          const R = Un(f),
            W = cn(b),
            J = Un(b) === b,
            $ = await (y.isRTL == null ? void 0 : y.isRTL(g.floating)),
            I = A || (J || !Y ? [sr(b)] : zv(b)),
            lt = N !== "none";
          !A && lt && I.push(...Cv(b, Y, N, $));
          const Q = [b, ...I],
            Z = await Ui(r, k),
            mt = [];
          let St = ((u = d.flip) == null ? void 0 : u.overflows) || [];
          if ((v && mt.push(Z[R]), h)) {
            const vt = Av(f, p, $);
            mt.push(Z[vt[0]], Z[vt[1]]);
          }
          if (
            ((St = [...St, { placement: f, overflows: mt }]),
            !mt.every((vt) => vt <= 0))
          ) {
            var _t, gt;
            const vt = (((_t = d.flip) == null ? void 0 : _t.index) || 0) + 1,
              xt = Q[vt];
            if (
              xt &&
              (!(h === "alignment" ? W !== cn(xt) : !1) ||
                St.every((D) =>
                  cn(D.placement) === W ? D.overflows[0] > 0 : !0,
                ))
            )
              return {
                data: { index: vt, overflows: St },
                reset: { placement: xt },
              };
            let w =
              (gt = St.filter((L) => L.overflows[0] <= 0).sort(
                (L, D) => L.overflows[1] - D.overflows[1],
              )[0]) == null
                ? void 0
                : gt.placement;
            if (!w)
              switch (M) {
                case "bestFit": {
                  var pt;
                  const L =
                    (pt = St.filter((D) => {
                      if (lt) {
                        const it = cn(D.placement);
                        return it === W || it === "y";
                      }
                      return !0;
                    })
                      .map((D) => [
                        D.placement,
                        D.overflows
                          .filter((it) => it > 0)
                          .reduce((it, ut) => it + ut, 0),
                      ])
                      .sort((D, it) => D[1] - it[1])[0]) == null
                      ? void 0
                      : pt[0];
                  L && (w = L);
                  break;
                }
                case "initialPlacement":
                  w = b;
                  break;
              }
            if (f !== w) return { reset: { placement: w } };
          }
          return {};
        },
      }
    );
  };
function z0(i, r) {
  return {
    top: i.top - r.height,
    right: i.right - r.width,
    bottom: i.bottom - r.height,
    left: i.left - r.width,
  };
}
function O0(i) {
  return Sv.some((r) => i[r] >= 0);
}
const jv = function (i) {
    return (
      i === void 0 && (i = {}),
      {
        name: "hide",
        options: i,
        async fn(r) {
          const { rects: s } = r,
            { strategy: u = "referenceHidden", ...f } = Bn(i, r);
          switch (u) {
            case "referenceHidden": {
              const d = await Ui(r, { ...f, elementContext: "reference" }),
                p = z0(d, s.reference);
              return {
                data: { referenceHiddenOffsets: p, referenceHidden: O0(p) },
              };
            }
            case "escaped": {
              const d = await Ui(r, { ...f, altBoundary: !0 }),
                p = z0(d, s.floating);
              return { data: { escapedOffsets: p, escaped: O0(p) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  rh = new Set(["left", "top"]);
async function Bv(i, r) {
  const { placement: s, platform: u, elements: f } = i,
    d = await (u.isRTL == null ? void 0 : u.isRTL(f.floating)),
    p = Un(s),
    b = Hl(s),
    y = cn(s) === "y",
    g = rh.has(p) ? -1 : 1,
    v = d && y ? -1 : 1,
    h = Bn(r, i);
  let {
    mainAxis: A,
    crossAxis: M,
    alignmentAxis: N,
  } = typeof h == "number"
    ? { mainAxis: h, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: h.mainAxis || 0,
        crossAxis: h.crossAxis || 0,
        alignmentAxis: h.alignmentAxis,
      };
  return (
    b && typeof N == "number" && (M = b === "end" ? N * -1 : N),
    y ? { x: M * v, y: A * g } : { x: A * g, y: M * v }
  );
}
const Uv = function (i) {
    return (
      i === void 0 && (i = 0),
      {
        name: "offset",
        options: i,
        async fn(r) {
          var s, u;
          const { x: f, y: d, placement: p, middlewareData: b } = r,
            y = await Bv(r, i);
          return p === ((s = b.offset) == null ? void 0 : s.placement) &&
            (u = b.arrow) != null &&
            u.alignmentOffset
            ? {}
            : { x: f + y.x, y: d + y.y, data: { ...y, placement: p } };
        },
      }
    );
  },
  Lv = function (i) {
    return (
      i === void 0 && (i = {}),
      {
        name: "shift",
        options: i,
        async fn(r) {
          const { x: s, y: u, placement: f } = r,
            {
              mainAxis: d = !0,
              crossAxis: p = !1,
              limiter: b = {
                fn: (k) => {
                  let { x: R, y: W } = k;
                  return { x: R, y: W };
                },
              },
              ...y
            } = Bn(i, r),
            g = { x: s, y: u },
            v = await Ui(r, y),
            h = cn(Un(f)),
            A = ic(h);
          let M = g[A],
            N = g[h];
          if (d) {
            const k = A === "y" ? "top" : "left",
              R = A === "y" ? "bottom" : "right",
              W = M + v[k],
              J = M - v[R];
            M = $s(W, M, J);
          }
          if (p) {
            const k = h === "y" ? "top" : "left",
              R = h === "y" ? "bottom" : "right",
              W = N + v[k],
              J = N - v[R];
            N = $s(W, N, J);
          }
          const Y = b.fn({ ...r, [A]: M, [h]: N });
          return {
            ...Y,
            data: { x: Y.x - s, y: Y.y - u, enabled: { [A]: d, [h]: p } },
          };
        },
      }
    );
  },
  Yv = function (i) {
    return (
      i === void 0 && (i = {}),
      {
        options: i,
        fn(r) {
          const { x: s, y: u, placement: f, rects: d, middlewareData: p } = r,
            { offset: b = 0, mainAxis: y = !0, crossAxis: g = !0 } = Bn(i, r),
            v = { x: s, y: u },
            h = cn(f),
            A = ic(h);
          let M = v[A],
            N = v[h];
          const Y = Bn(b, r),
            k =
              typeof Y == "number"
                ? { mainAxis: Y, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...Y };
          if (y) {
            const J = A === "y" ? "height" : "width",
              $ = d.reference[A] - d.floating[J] + k.mainAxis,
              I = d.reference[A] + d.reference[J] - k.mainAxis;
            M < $ ? (M = $) : M > I && (M = I);
          }
          if (g) {
            var R, W;
            const J = A === "y" ? "width" : "height",
              $ = rh.has(Un(f)),
              I =
                d.reference[h] -
                d.floating[J] +
                (($ && ((R = p.offset) == null ? void 0 : R[h])) || 0) +
                ($ ? 0 : k.crossAxis),
              lt =
                d.reference[h] +
                d.reference[J] +
                ($ ? 0 : ((W = p.offset) == null ? void 0 : W[h]) || 0) -
                ($ ? k.crossAxis : 0);
            N < I ? (N = I) : N > lt && (N = lt);
          }
          return { [A]: M, [h]: N };
        },
      }
    );
  },
  qv = function (i) {
    return (
      i === void 0 && (i = {}),
      {
        name: "size",
        options: i,
        async fn(r) {
          var s, u;
          const { placement: f, rects: d, platform: p, elements: b } = r,
            { apply: y = () => {}, ...g } = Bn(i, r),
            v = await Ui(r, g),
            h = Un(f),
            A = Hl(f),
            M = cn(f) === "y",
            { width: N, height: Y } = d.floating;
          let k, R;
          h === "top" || h === "bottom"
            ? ((k = h),
              (R =
                A ===
                ((await (p.isRTL == null ? void 0 : p.isRTL(b.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((R = h), (k = A === "end" ? "top" : "bottom"));
          const W = Y - v.top - v.bottom,
            J = N - v.left - v.right,
            $ = da(Y - v[k], W),
            I = da(N - v[R], J),
            lt = !r.middlewareData.shift;
          let Q = $,
            Z = I;
          if (
            ((s = r.middlewareData.shift) != null && s.enabled.x && (Z = J),
            (u = r.middlewareData.shift) != null && u.enabled.y && (Q = W),
            lt && !A)
          ) {
            const St = Be(v.left, 0),
              _t = Be(v.right, 0),
              gt = Be(v.top, 0),
              pt = Be(v.bottom, 0);
            M
              ? (Z =
                  N -
                  2 * (St !== 0 || _t !== 0 ? St + _t : Be(v.left, v.right)))
              : (Q =
                  Y -
                  2 * (gt !== 0 || pt !== 0 ? gt + pt : Be(v.top, v.bottom)));
          }
          await y({ ...r, availableWidth: Z, availableHeight: Q });
          const mt = await p.getDimensions(b.floating);
          return N !== mt.width || Y !== mt.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function hr() {
  return typeof window < "u";
}
function jl(i) {
  return uh(i) ? (i.nodeName || "").toLowerCase() : "#document";
}
function Ue(i) {
  var r;
  return (
    (i == null || (r = i.ownerDocument) == null ? void 0 : r.defaultView) ||
    window
  );
}
function mn(i) {
  var r;
  return (r = (uh(i) ? i.ownerDocument : i.document) || window.document) == null
    ? void 0
    : r.documentElement;
}
function uh(i) {
  return hr() ? i instanceof Node || i instanceof Ue(i).Node : !1;
}
function tn(i) {
  return hr() ? i instanceof Element || i instanceof Ue(i).Element : !1;
}
function dn(i) {
  return hr() ? i instanceof HTMLElement || i instanceof Ue(i).HTMLElement : !1;
}
function _0(i) {
  return !hr() || typeof ShadowRoot > "u"
    ? !1
    : i instanceof ShadowRoot || i instanceof Ue(i).ShadowRoot;
}
const Gv = new Set(["inline", "contents"]);
function Yi(i) {
  const { overflow: r, overflowX: s, overflowY: u, display: f } = en(i);
  return /auto|scroll|overlay|hidden|clip/.test(r + u + s) && !Gv.has(f);
}
const Xv = new Set(["table", "td", "th"]);
function kv(i) {
  return Xv.has(jl(i));
}
const Vv = [":popover-open", ":modal"];
function gr(i) {
  return Vv.some((r) => {
    try {
      return i.matches(r);
    } catch {
      return !1;
    }
  });
}
const Qv = ["transform", "translate", "scale", "rotate", "perspective"],
  Zv = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
  Kv = ["paint", "layout", "strict", "content"];
function uc(i) {
  const r = sc(),
    s = tn(i) ? en(i) : i;
  return (
    Qv.some((u) => (s[u] ? s[u] !== "none" : !1)) ||
    (s.containerType ? s.containerType !== "normal" : !1) ||
    (!r && (s.backdropFilter ? s.backdropFilter !== "none" : !1)) ||
    (!r && (s.filter ? s.filter !== "none" : !1)) ||
    Zv.some((u) => (s.willChange || "").includes(u)) ||
    Kv.some((u) => (s.contain || "").includes(u))
  );
}
function Jv(i) {
  let r = ma(i);
  for (; dn(r) && !Nl(r); ) {
    if (uc(r)) return r;
    if (gr(r)) return null;
    r = ma(r);
  }
  return null;
}
function sc() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
const Wv = new Set(["html", "body", "#document"]);
function Nl(i) {
  return Wv.has(jl(i));
}
function en(i) {
  return Ue(i).getComputedStyle(i);
}
function pr(i) {
  return tn(i)
    ? { scrollLeft: i.scrollLeft, scrollTop: i.scrollTop }
    : { scrollLeft: i.scrollX, scrollTop: i.scrollY };
}
function ma(i) {
  if (jl(i) === "html") return i;
  const r = i.assignedSlot || i.parentNode || (_0(i) && i.host) || mn(i);
  return _0(r) ? r.host : r;
}
function sh(i) {
  const r = ma(i);
  return Nl(r)
    ? i.ownerDocument
      ? i.ownerDocument.body
      : i.body
    : dn(r) && Yi(r)
      ? r
      : sh(r);
}
function Li(i, r, s) {
  var u;
  (r === void 0 && (r = []), s === void 0 && (s = !0));
  const f = sh(i),
    d = f === ((u = i.ownerDocument) == null ? void 0 : u.body),
    p = Ue(f);
  if (d) {
    const b = Ps(p);
    return r.concat(
      p,
      p.visualViewport || [],
      Yi(f) ? f : [],
      b && s ? Li(b) : [],
    );
  }
  return r.concat(f, Li(f, [], s));
}
function Ps(i) {
  return i.parent && Object.getPrototypeOf(i.parent) ? i.frameElement : null;
}
function ch(i) {
  const r = en(i);
  let s = parseFloat(r.width) || 0,
    u = parseFloat(r.height) || 0;
  const f = dn(i),
    d = f ? i.offsetWidth : s,
    p = f ? i.offsetHeight : u,
    b = ur(s) !== d || ur(u) !== p;
  return (b && ((s = d), (u = p)), { width: s, height: u, $: b });
}
function cc(i) {
  return tn(i) ? i : i.contextElement;
}
function Rl(i) {
  const r = cc(i);
  if (!dn(r)) return fn(1);
  const s = r.getBoundingClientRect(),
    { width: u, height: f, $: d } = ch(r);
  let p = (d ? ur(s.width) : s.width) / u,
    b = (d ? ur(s.height) : s.height) / f;
  return (
    (!p || !Number.isFinite(p)) && (p = 1),
    (!b || !Number.isFinite(b)) && (b = 1),
    { x: p, y: b }
  );
}
const $v = fn(0);
function fh(i) {
  const r = Ue(i);
  return !sc() || !r.visualViewport
    ? $v
    : { x: r.visualViewport.offsetLeft, y: r.visualViewport.offsetTop };
}
function Fv(i, r, s) {
  return (r === void 0 && (r = !1), !s || (r && s !== Ue(i)) ? !1 : r);
}
function Ya(i, r, s, u) {
  (r === void 0 && (r = !1), s === void 0 && (s = !1));
  const f = i.getBoundingClientRect(),
    d = cc(i);
  let p = fn(1);
  r && (u ? tn(u) && (p = Rl(u)) : (p = Rl(i)));
  const b = Fv(d, s, u) ? fh(d) : fn(0);
  let y = (f.left + b.x) / p.x,
    g = (f.top + b.y) / p.y,
    v = f.width / p.x,
    h = f.height / p.y;
  if (d) {
    const A = Ue(d),
      M = u && tn(u) ? Ue(u) : u;
    let N = A,
      Y = Ps(N);
    for (; Y && u && M !== N; ) {
      const k = Rl(Y),
        R = Y.getBoundingClientRect(),
        W = en(Y),
        J = R.left + (Y.clientLeft + parseFloat(W.paddingLeft)) * k.x,
        $ = R.top + (Y.clientTop + parseFloat(W.paddingTop)) * k.y;
      ((y *= k.x),
        (g *= k.y),
        (v *= k.x),
        (h *= k.y),
        (y += J),
        (g += $),
        (N = Ue(Y)),
        (Y = Ps(N)));
    }
  }
  return cr({ width: v, height: h, x: y, y: g });
}
function yr(i, r) {
  const s = pr(i).scrollLeft;
  return r ? r.left + s : Ya(mn(i)).left + s;
}
function dh(i, r) {
  const s = i.getBoundingClientRect(),
    u = s.left + r.scrollLeft - yr(i, s),
    f = s.top + r.scrollTop;
  return { x: u, y: f };
}
function Pv(i) {
  let { elements: r, rect: s, offsetParent: u, strategy: f } = i;
  const d = f === "fixed",
    p = mn(u),
    b = r ? gr(r.floating) : !1;
  if (u === p || (b && d)) return s;
  let y = { scrollLeft: 0, scrollTop: 0 },
    g = fn(1);
  const v = fn(0),
    h = dn(u);
  if (
    (h || (!h && !d)) &&
    ((jl(u) !== "body" || Yi(p)) && (y = pr(u)), dn(u))
  ) {
    const M = Ya(u);
    ((g = Rl(u)), (v.x = M.x + u.clientLeft), (v.y = M.y + u.clientTop));
  }
  const A = p && !h && !d ? dh(p, y) : fn(0);
  return {
    width: s.width * g.x,
    height: s.height * g.y,
    x: s.x * g.x - y.scrollLeft * g.x + v.x + A.x,
    y: s.y * g.y - y.scrollTop * g.y + v.y + A.y,
  };
}
function Iv(i) {
  return Array.from(i.getClientRects());
}
function tb(i) {
  const r = mn(i),
    s = pr(i),
    u = i.ownerDocument.body,
    f = Be(r.scrollWidth, r.clientWidth, u.scrollWidth, u.clientWidth),
    d = Be(r.scrollHeight, r.clientHeight, u.scrollHeight, u.clientHeight);
  let p = -s.scrollLeft + yr(i);
  const b = -s.scrollTop;
  return (
    en(u).direction === "rtl" && (p += Be(r.clientWidth, u.clientWidth) - f),
    { width: f, height: d, x: p, y: b }
  );
}
const M0 = 25;
function eb(i, r) {
  const s = Ue(i),
    u = mn(i),
    f = s.visualViewport;
  let d = u.clientWidth,
    p = u.clientHeight,
    b = 0,
    y = 0;
  if (f) {
    ((d = f.width), (p = f.height));
    const v = sc();
    (!v || (v && r === "fixed")) && ((b = f.offsetLeft), (y = f.offsetTop));
  }
  const g = yr(u);
  if (g <= 0) {
    const v = u.ownerDocument,
      h = v.body,
      A = getComputedStyle(h),
      M =
        (v.compatMode === "CSS1Compat" &&
          parseFloat(A.marginLeft) + parseFloat(A.marginRight)) ||
        0,
      N = Math.abs(u.clientWidth - h.clientWidth - M);
    N <= M0 && (d -= N);
  } else g <= M0 && (d += g);
  return { width: d, height: p, x: b, y };
}
const nb = new Set(["absolute", "fixed"]);
function ab(i, r) {
  const s = Ya(i, !0, r === "fixed"),
    u = s.top + i.clientTop,
    f = s.left + i.clientLeft,
    d = dn(i) ? Rl(i) : fn(1),
    p = i.clientWidth * d.x,
    b = i.clientHeight * d.y,
    y = f * d.x,
    g = u * d.y;
  return { width: p, height: b, x: y, y: g };
}
function C0(i, r, s) {
  let u;
  if (r === "viewport") u = eb(i, s);
  else if (r === "document") u = tb(mn(i));
  else if (tn(r)) u = ab(r, s);
  else {
    const f = fh(i);
    u = { x: r.x - f.x, y: r.y - f.y, width: r.width, height: r.height };
  }
  return cr(u);
}
function mh(i, r) {
  const s = ma(i);
  return s === r || !tn(s) || Nl(s)
    ? !1
    : en(s).position === "fixed" || mh(s, r);
}
function lb(i, r) {
  const s = r.get(i);
  if (s) return s;
  let u = Li(i, [], !1).filter((b) => tn(b) && jl(b) !== "body"),
    f = null;
  const d = en(i).position === "fixed";
  let p = d ? ma(i) : i;
  for (; tn(p) && !Nl(p); ) {
    const b = en(p),
      y = uc(p);
    (!y && b.position === "fixed" && (f = null),
      (
        d
          ? !y && !f
          : (!y && b.position === "static" && !!f && nb.has(f.position)) ||
            (Yi(p) && !y && mh(i, p))
      )
        ? (u = u.filter((v) => v !== p))
        : (f = b),
      (p = ma(p)));
  }
  return (r.set(i, u), u);
}
function ib(i) {
  let { element: r, boundary: s, rootBoundary: u, strategy: f } = i;
  const p = [
      ...(s === "clippingAncestors"
        ? gr(r)
          ? []
          : lb(r, this._c)
        : [].concat(s)),
      u,
    ],
    b = p[0],
    y = p.reduce(
      (g, v) => {
        const h = C0(r, v, f);
        return (
          (g.top = Be(h.top, g.top)),
          (g.right = da(h.right, g.right)),
          (g.bottom = da(h.bottom, g.bottom)),
          (g.left = Be(h.left, g.left)),
          g
        );
      },
      C0(r, b, f),
    );
  return {
    width: y.right - y.left,
    height: y.bottom - y.top,
    x: y.left,
    y: y.top,
  };
}
function ob(i) {
  const { width: r, height: s } = ch(i);
  return { width: r, height: s };
}
function rb(i, r, s) {
  const u = dn(r),
    f = mn(r),
    d = s === "fixed",
    p = Ya(i, !0, d, r);
  let b = { scrollLeft: 0, scrollTop: 0 };
  const y = fn(0);
  function g() {
    y.x = yr(f);
  }
  if (u || (!u && !d))
    if (((jl(r) !== "body" || Yi(f)) && (b = pr(r)), u)) {
      const M = Ya(r, !0, d, r);
      ((y.x = M.x + r.clientLeft), (y.y = M.y + r.clientTop));
    } else f && g();
  d && !u && f && g();
  const v = f && !u && !d ? dh(f, b) : fn(0),
    h = p.left + b.scrollLeft - y.x - v.x,
    A = p.top + b.scrollTop - y.y - v.y;
  return { x: h, y: A, width: p.width, height: p.height };
}
function Gs(i) {
  return en(i).position === "static";
}
function R0(i, r) {
  if (!dn(i) || en(i).position === "fixed") return null;
  if (r) return r(i);
  let s = i.offsetParent;
  return (mn(i) === s && (s = s.ownerDocument.body), s);
}
function hh(i, r) {
  const s = Ue(i);
  if (gr(i)) return s;
  if (!dn(i)) {
    let f = ma(i);
    for (; f && !Nl(f); ) {
      if (tn(f) && !Gs(f)) return f;
      f = ma(f);
    }
    return s;
  }
  let u = R0(i, r);
  for (; u && kv(u) && Gs(u); ) u = R0(u, r);
  return u && Nl(u) && Gs(u) && !uc(u) ? s : u || Jv(i) || s;
}
const ub = async function (i) {
  const r = this.getOffsetParent || hh,
    s = this.getDimensions,
    u = await s(i.floating);
  return {
    reference: rb(i.reference, await r(i.floating), i.strategy),
    floating: { x: 0, y: 0, width: u.width, height: u.height },
  };
};
function sb(i) {
  return en(i).direction === "rtl";
}
const cb = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Pv,
  getDocumentElement: mn,
  getClippingRect: ib,
  getOffsetParent: hh,
  getElementRects: ub,
  getClientRects: Iv,
  getDimensions: ob,
  getScale: Rl,
  isElement: tn,
  isRTL: sb,
};
function gh(i, r) {
  return (
    i.x === r.x && i.y === r.y && i.width === r.width && i.height === r.height
  );
}
function fb(i, r) {
  let s = null,
    u;
  const f = mn(i);
  function d() {
    var b;
    (clearTimeout(u), (b = s) == null || b.disconnect(), (s = null));
  }
  function p(b, y) {
    (b === void 0 && (b = !1), y === void 0 && (y = 1), d());
    const g = i.getBoundingClientRect(),
      { left: v, top: h, width: A, height: M } = g;
    if ((b || r(), !A || !M)) return;
    const N = ar(h),
      Y = ar(f.clientWidth - (v + A)),
      k = ar(f.clientHeight - (h + M)),
      R = ar(v),
      J = {
        rootMargin: -N + "px " + -Y + "px " + -k + "px " + -R + "px",
        threshold: Be(0, da(1, y)) || 1,
      };
    let $ = !0;
    function I(lt) {
      const Q = lt[0].intersectionRatio;
      if (Q !== y) {
        if (!$) return p();
        Q
          ? p(!1, Q)
          : (u = setTimeout(() => {
              p(!1, 1e-7);
            }, 1e3));
      }
      (Q === 1 && !gh(g, i.getBoundingClientRect()) && p(), ($ = !1));
    }
    try {
      s = new IntersectionObserver(I, { ...J, root: f.ownerDocument });
    } catch {
      s = new IntersectionObserver(I, J);
    }
    s.observe(i);
  }
  return (p(!0), d);
}
function db(i, r, s, u) {
  u === void 0 && (u = {});
  const {
      ancestorScroll: f = !0,
      ancestorResize: d = !0,
      elementResize: p = typeof ResizeObserver == "function",
      layoutShift: b = typeof IntersectionObserver == "function",
      animationFrame: y = !1,
    } = u,
    g = cc(i),
    v = f || d ? [...(g ? Li(g) : []), ...Li(r)] : [];
  v.forEach((R) => {
    (f && R.addEventListener("scroll", s, { passive: !0 }),
      d && R.addEventListener("resize", s));
  });
  const h = g && b ? fb(g, s) : null;
  let A = -1,
    M = null;
  p &&
    ((M = new ResizeObserver((R) => {
      let [W] = R;
      (W &&
        W.target === g &&
        M &&
        (M.unobserve(r),
        cancelAnimationFrame(A),
        (A = requestAnimationFrame(() => {
          var J;
          (J = M) == null || J.observe(r);
        }))),
        s());
    })),
    g && !y && M.observe(g),
    M.observe(r));
  let N,
    Y = y ? Ya(i) : null;
  y && k();
  function k() {
    const R = Ya(i);
    (Y && !gh(Y, R) && s(), (Y = R), (N = requestAnimationFrame(k)));
  }
  return (
    s(),
    () => {
      var R;
      (v.forEach((W) => {
        (f && W.removeEventListener("scroll", s),
          d && W.removeEventListener("resize", s));
      }),
        h?.(),
        (R = M) == null || R.disconnect(),
        (M = null),
        y && cancelAnimationFrame(N));
    }
  );
}
const mb = Uv,
  hb = Lv,
  gb = Hv,
  pb = qv,
  yb = jv,
  N0 = Dv,
  vb = Yv,
  bb = (i, r, s) => {
    const u = new Map(),
      f = { platform: cb, ...s },
      d = { ...f.platform, _c: u };
    return Nv(i, r, { ...f, platform: d });
  };
var xb = typeof document < "u",
  Sb = function () {},
  rr = xb ? z.useLayoutEffect : Sb;
function fr(i, r) {
  if (i === r) return !0;
  if (typeof i != typeof r) return !1;
  if (typeof i == "function" && i.toString() === r.toString()) return !0;
  let s, u, f;
  if (i && r && typeof i == "object") {
    if (Array.isArray(i)) {
      if (((s = i.length), s !== r.length)) return !1;
      for (u = s; u-- !== 0; ) if (!fr(i[u], r[u])) return !1;
      return !0;
    }
    if (((f = Object.keys(i)), (s = f.length), s !== Object.keys(r).length))
      return !1;
    for (u = s; u-- !== 0; ) if (!{}.hasOwnProperty.call(r, f[u])) return !1;
    for (u = s; u-- !== 0; ) {
      const d = f[u];
      if (!(d === "_owner" && i.$$typeof) && !fr(i[d], r[d])) return !1;
    }
    return !0;
  }
  return i !== i && r !== r;
}
function ph(i) {
  return typeof window > "u"
    ? 1
    : (i.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function D0(i, r) {
  const s = ph(i);
  return Math.round(r * s) / s;
}
function Xs(i) {
  const r = z.useRef(i);
  return (
    rr(() => {
      r.current = i;
    }),
    r
  );
}
function Eb(i) {
  i === void 0 && (i = {});
  const {
      placement: r = "bottom",
      strategy: s = "absolute",
      middleware: u = [],
      platform: f,
      elements: { reference: d, floating: p } = {},
      transform: b = !0,
      whileElementsMounted: y,
      open: g,
    } = i,
    [v, h] = z.useState({
      x: 0,
      y: 0,
      strategy: s,
      placement: r,
      middlewareData: {},
      isPositioned: !1,
    }),
    [A, M] = z.useState(u);
  fr(A, u) || M(u);
  const [N, Y] = z.useState(null),
    [k, R] = z.useState(null),
    W = z.useCallback((D) => {
      D !== lt.current && ((lt.current = D), Y(D));
    }, []),
    J = z.useCallback((D) => {
      D !== Q.current && ((Q.current = D), R(D));
    }, []),
    $ = d || N,
    I = p || k,
    lt = z.useRef(null),
    Q = z.useRef(null),
    Z = z.useRef(v),
    mt = y != null,
    St = Xs(y),
    _t = Xs(f),
    gt = Xs(g),
    pt = z.useCallback(() => {
      if (!lt.current || !Q.current) return;
      const D = { placement: r, strategy: s, middleware: A };
      (_t.current && (D.platform = _t.current),
        bb(lt.current, Q.current, D).then((it) => {
          const ut = { ...it, isPositioned: gt.current !== !1 };
          vt.current &&
            !fr(Z.current, ut) &&
            ((Z.current = ut),
            lc.flushSync(() => {
              h(ut);
            }));
        }));
    }, [A, r, s, _t, gt]);
  rr(() => {
    g === !1 &&
      Z.current.isPositioned &&
      ((Z.current.isPositioned = !1), h((D) => ({ ...D, isPositioned: !1 })));
  }, [g]);
  const vt = z.useRef(!1);
  (rr(
    () => (
      (vt.current = !0),
      () => {
        vt.current = !1;
      }
    ),
    [],
  ),
    rr(() => {
      if (($ && (lt.current = $), I && (Q.current = I), $ && I)) {
        if (St.current) return St.current($, I, pt);
        pt();
      }
    }, [$, I, pt, St, mt]));
  const xt = z.useMemo(
      () => ({ reference: lt, floating: Q, setReference: W, setFloating: J }),
      [W, J],
    ),
    w = z.useMemo(() => ({ reference: $, floating: I }), [$, I]),
    L = z.useMemo(() => {
      const D = { position: s, left: 0, top: 0 };
      if (!w.floating) return D;
      const it = D0(w.floating, v.x),
        ut = D0(w.floating, v.y);
      return b
        ? {
            ...D,
            transform: "translate(" + it + "px, " + ut + "px)",
            ...(ph(w.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: s, left: it, top: ut };
    }, [s, b, w.floating, v.x, v.y]);
  return z.useMemo(
    () => ({ ...v, update: pt, refs: xt, elements: w, floatingStyles: L }),
    [v, pt, xt, w, L],
  );
}
const wb = (i) => {
    function r(s) {
      return {}.hasOwnProperty.call(s, "current");
    }
    return {
      name: "arrow",
      options: i,
      fn(s) {
        const { element: u, padding: f } = typeof i == "function" ? i(s) : i;
        return u && r(u)
          ? u.current != null
            ? N0({ element: u.current, padding: f }).fn(s)
            : {}
          : u
            ? N0({ element: u, padding: f }).fn(s)
            : {};
      },
    };
  },
  Tb = (i, r) => ({ ...mb(i), options: [i, r] }),
  Ab = (i, r) => ({ ...hb(i), options: [i, r] }),
  zb = (i, r) => ({ ...vb(i), options: [i, r] }),
  Ob = (i, r) => ({ ...gb(i), options: [i, r] }),
  _b = (i, r) => ({ ...pb(i), options: [i, r] }),
  Mb = (i, r) => ({ ...yb(i), options: [i, r] }),
  Cb = (i, r) => ({ ...wb(i), options: [i, r] });
var Rb = "Arrow",
  yh = z.forwardRef((i, r) => {
    const { children: s, width: u = 10, height: f = 5, ...d } = i;
    return G.jsx(Ga.svg, {
      ...d,
      ref: r,
      width: u,
      height: f,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: i.asChild ? s : G.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
yh.displayName = Rb;
var Nb = yh;
function Db(i) {
  const [r, s] = z.useState(void 0);
  return (
    Bi(() => {
      if (i) {
        s({ width: i.offsetWidth, height: i.offsetHeight });
        const u = new ResizeObserver((f) => {
          if (!Array.isArray(f) || !f.length) return;
          const d = f[0];
          let p, b;
          if ("borderBoxSize" in d) {
            const y = d.borderBoxSize,
              g = Array.isArray(y) ? y[0] : y;
            ((p = g.inlineSize), (b = g.blockSize));
          } else ((p = i.offsetWidth), (b = i.offsetHeight));
          s({ width: p, height: b });
        });
        return (u.observe(i, { box: "border-box" }), () => u.unobserve(i));
      } else s(void 0);
    }, [i]),
    r
  );
}
var vh = "Popper",
  [bh, xh] = th(vh),
  [Zx, Sh] = bh(vh),
  Eh = "PopperAnchor",
  wh = z.forwardRef((i, r) => {
    const { __scopePopper: s, virtualRef: u, ...f } = i,
      d = Sh(Eh, s),
      p = z.useRef(null),
      b = qa(r, p),
      y = z.useRef(null);
    return (
      z.useEffect(() => {
        const g = y.current;
        ((y.current = u?.current || p.current),
          g !== y.current && d.onAnchorChange(y.current));
      }),
      u ? null : G.jsx(Ga.div, { ...f, ref: b })
    );
  });
wh.displayName = Eh;
var fc = "PopperContent",
  [Hb, jb] = bh(fc),
  Th = z.forwardRef((i, r) => {
    const {
        __scopePopper: s,
        side: u = "bottom",
        sideOffset: f = 0,
        align: d = "center",
        alignOffset: p = 0,
        arrowPadding: b = 0,
        avoidCollisions: y = !0,
        collisionBoundary: g = [],
        collisionPadding: v = 0,
        sticky: h = "partial",
        hideWhenDetached: A = !1,
        updatePositionStrategy: M = "optimized",
        onPlaced: N,
        ...Y
      } = i,
      k = Sh(fc, s),
      [R, W] = z.useState(null),
      J = qa(r, (nt) => W(nt)),
      [$, I] = z.useState(null),
      lt = Db($),
      Q = lt?.width ?? 0,
      Z = lt?.height ?? 0,
      mt = u + (d !== "center" ? "-" + d : ""),
      St =
        typeof v == "number"
          ? v
          : { top: 0, right: 0, bottom: 0, left: 0, ...v },
      _t = Array.isArray(g) ? g : [g],
      gt = _t.length > 0,
      pt = { padding: St, boundary: _t.filter(Ub), altBoundary: gt },
      {
        refs: vt,
        floatingStyles: xt,
        placement: w,
        isPositioned: L,
        middlewareData: D,
      } = Eb({
        strategy: "fixed",
        placement: mt,
        whileElementsMounted: (...nt) =>
          db(...nt, { animationFrame: M === "always" }),
        elements: { reference: k.anchor },
        middleware: [
          Tb({ mainAxis: f + Z, alignmentAxis: p }),
          y &&
            Ab({
              mainAxis: !0,
              crossAxis: !1,
              limiter: h === "partial" ? zb() : void 0,
              ...pt,
            }),
          y && Ob({ ...pt }),
          _b({
            ...pt,
            apply: ({
              elements: nt,
              rects: ct,
              availableWidth: zt,
              availableHeight: ne,
            }) => {
              const { width: de, height: ae } = ct.reference,
                hn = nt.floating.style;
              (hn.setProperty("--radix-popper-available-width", `${zt}px`),
                hn.setProperty("--radix-popper-available-height", `${ne}px`),
                hn.setProperty("--radix-popper-anchor-width", `${de}px`),
                hn.setProperty("--radix-popper-anchor-height", `${ae}px`));
            },
          }),
          $ && Cb({ element: $, padding: b }),
          Lb({ arrowWidth: Q, arrowHeight: Z }),
          A && Mb({ strategy: "referenceHidden", ...pt }),
        ],
      }),
      [it, ut] = Oh(w),
      S = mr(N);
    Bi(() => {
      L && S?.();
    }, [L, S]);
    const U = D.arrow?.x,
      B = D.arrow?.y,
      V = D.arrow?.centerOffset !== 0,
      [F, ot] = z.useState();
    return (
      Bi(() => {
        R && ot(window.getComputedStyle(R).zIndex);
      }, [R]),
      G.jsx("div", {
        ref: vt.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...xt,
          transform: L ? xt.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: F,
          "--radix-popper-transform-origin": [
            D.transformOrigin?.x,
            D.transformOrigin?.y,
          ].join(" "),
          ...(D.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: i.dir,
        children: G.jsx(Hb, {
          scope: s,
          placedSide: it,
          onArrowChange: I,
          arrowX: U,
          arrowY: B,
          shouldHideArrow: V,
          children: G.jsx(Ga.div, {
            "data-side": it,
            "data-align": ut,
            ...Y,
            ref: J,
            style: { ...Y.style, animation: L ? void 0 : "none" },
          }),
        }),
      })
    );
  });
Th.displayName = fc;
var Ah = "PopperArrow",
  Bb = { top: "bottom", right: "left", bottom: "top", left: "right" },
  zh = z.forwardRef(function (r, s) {
    const { __scopePopper: u, ...f } = r,
      d = jb(Ah, u),
      p = Bb[d.placedSide];
    return G.jsx("span", {
      ref: d.onArrowChange,
      style: {
        position: "absolute",
        left: d.arrowX,
        top: d.arrowY,
        [p]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[d.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[d.placedSide],
        visibility: d.shouldHideArrow ? "hidden" : void 0,
      },
      children: G.jsx(Nb, {
        ...f,
        ref: s,
        style: { ...f.style, display: "block" },
      }),
    });
  });
zh.displayName = Ah;
function Ub(i) {
  return i !== null;
}
var Lb = (i) => ({
  name: "transformOrigin",
  options: i,
  fn(r) {
    const { placement: s, rects: u, middlewareData: f } = r,
      p = f.arrow?.centerOffset !== 0,
      b = p ? 0 : i.arrowWidth,
      y = p ? 0 : i.arrowHeight,
      [g, v] = Oh(s),
      h = { start: "0%", center: "50%", end: "100%" }[v],
      A = (f.arrow?.x ?? 0) + b / 2,
      M = (f.arrow?.y ?? 0) + y / 2;
    let N = "",
      Y = "";
    return (
      g === "bottom"
        ? ((N = p ? h : `${A}px`), (Y = `${-y}px`))
        : g === "top"
          ? ((N = p ? h : `${A}px`), (Y = `${u.floating.height + y}px`))
          : g === "right"
            ? ((N = `${-y}px`), (Y = p ? h : `${M}px`))
            : g === "left" &&
              ((N = `${u.floating.width + y}px`), (Y = p ? h : `${M}px`)),
      { data: { x: N, y: Y } }
    );
  },
});
function Oh(i) {
  const [r, s = "center"] = i.split("-");
  return [r, s];
}
var Yb = wh,
  qb = Th,
  Gb = zh;
function Xb(i, r) {
  return z.useReducer((s, u) => r[s][u] ?? s, i);
}
var _h = (i) => {
  const { present: r, children: s } = i,
    u = kb(r),
    f =
      typeof s == "function" ? s({ present: u.isPresent }) : z.Children.only(s),
    d = qa(u.ref, Vb(f));
  return typeof s == "function" || u.isPresent
    ? z.cloneElement(f, { ref: d })
    : null;
};
_h.displayName = "Presence";
function kb(i) {
  const [r, s] = z.useState(),
    u = z.useRef(null),
    f = z.useRef(i),
    d = z.useRef("none"),
    p = i ? "mounted" : "unmounted",
    [b, y] = Xb(p, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    z.useEffect(() => {
      const g = lr(u.current);
      d.current = b === "mounted" ? g : "none";
    }, [b]),
    Bi(() => {
      const g = u.current,
        v = f.current;
      if (v !== i) {
        const A = d.current,
          M = lr(g);
        (i
          ? y("MOUNT")
          : M === "none" || g?.display === "none"
            ? y("UNMOUNT")
            : y(v && A !== M ? "ANIMATION_OUT" : "UNMOUNT"),
          (f.current = i));
      }
    }, [i, y]),
    Bi(() => {
      if (r) {
        let g;
        const v = r.ownerDocument.defaultView ?? window,
          h = (M) => {
            const Y = lr(u.current).includes(CSS.escape(M.animationName));
            if (M.target === r && Y && (y("ANIMATION_END"), !f.current)) {
              const k = r.style.animationFillMode;
              ((r.style.animationFillMode = "forwards"),
                (g = v.setTimeout(() => {
                  r.style.animationFillMode === "forwards" &&
                    (r.style.animationFillMode = k);
                })));
            }
          },
          A = (M) => {
            M.target === r && (d.current = lr(u.current));
          };
        return (
          r.addEventListener("animationstart", A),
          r.addEventListener("animationcancel", h),
          r.addEventListener("animationend", h),
          () => {
            (v.clearTimeout(g),
              r.removeEventListener("animationstart", A),
              r.removeEventListener("animationcancel", h),
              r.removeEventListener("animationend", h));
          }
        );
      } else y("ANIMATION_END");
    }, [r, y]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(b),
      ref: z.useCallback((g) => {
        ((u.current = g ? getComputedStyle(g) : null), s(g));
      }, []),
    }
  );
}
function lr(i) {
  return i?.animationName || "none";
}
function Vb(i) {
  let r = Object.getOwnPropertyDescriptor(i.props, "ref")?.get,
    s = r && "isReactWarning" in r && r.isReactWarning;
  return s
    ? i.ref
    : ((r = Object.getOwnPropertyDescriptor(i, "ref")?.get),
      (s = r && "isReactWarning" in r && r.isReactWarning),
      s ? i.props.ref : i.props.ref || i.ref);
}
var Qb = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
  }),
  Zb = "VisuallyHidden",
  Mh = z.forwardRef((i, r) =>
    G.jsx(Ga.span, { ...i, ref: r, style: { ...Qb, ...i.style } }),
  );
Mh.displayName = Zb;
var Kb = Mh,
  [vr] = th("Tooltip", [xh]),
  dc = xh(),
  Ch = "TooltipProvider",
  Jb = 700,
  H0 = "tooltip.open",
  [Wb, Rh] = vr(Ch),
  Nh = (i) => {
    const {
        __scopeTooltip: r,
        delayDuration: s = Jb,
        skipDelayDuration: u = 300,
        disableHoverableContent: f = !1,
        children: d,
      } = i,
      p = z.useRef(!0),
      b = z.useRef(!1),
      y = z.useRef(0);
    return (
      z.useEffect(() => {
        const g = y.current;
        return () => window.clearTimeout(g);
      }, []),
      G.jsx(Wb, {
        scope: r,
        isOpenDelayedRef: p,
        delayDuration: s,
        onOpen: z.useCallback(() => {
          (window.clearTimeout(y.current), (p.current = !1));
        }, []),
        onClose: z.useCallback(() => {
          (window.clearTimeout(y.current),
            (y.current = window.setTimeout(() => (p.current = !0), u)));
        }, [u]),
        isPointerInTransitRef: b,
        onPointerInTransitChange: z.useCallback((g) => {
          b.current = g;
        }, []),
        disableHoverableContent: f,
        children: d,
      })
    );
  };
Nh.displayName = Ch;
var Dh = "Tooltip",
  [Kx, br] = vr(Dh),
  Is = "TooltipTrigger",
  $b = z.forwardRef((i, r) => {
    const { __scopeTooltip: s, ...u } = i,
      f = br(Is, s),
      d = Rh(Is, s),
      p = dc(s),
      b = z.useRef(null),
      y = qa(r, b, f.onTriggerChange),
      g = z.useRef(!1),
      v = z.useRef(!1),
      h = z.useCallback(() => (g.current = !1), []);
    return (
      z.useEffect(
        () => () => document.removeEventListener("pointerup", h),
        [h],
      ),
      G.jsx(Yb, {
        asChild: !0,
        ...p,
        children: G.jsx(Ga.button, {
          "aria-describedby": f.open ? f.contentId : void 0,
          "data-state": f.stateAttribute,
          ...u,
          ref: y,
          onPointerMove: jn(i.onPointerMove, (A) => {
            A.pointerType !== "touch" &&
              !v.current &&
              !d.isPointerInTransitRef.current &&
              (f.onTriggerEnter(), (v.current = !0));
          }),
          onPointerLeave: jn(i.onPointerLeave, () => {
            (f.onTriggerLeave(), (v.current = !1));
          }),
          onPointerDown: jn(i.onPointerDown, () => {
            (f.open && f.onClose(),
              (g.current = !0),
              document.addEventListener("pointerup", h, { once: !0 }));
          }),
          onFocus: jn(i.onFocus, () => {
            g.current || f.onOpen();
          }),
          onBlur: jn(i.onBlur, f.onClose),
          onClick: jn(i.onClick, f.onClose),
        }),
      })
    );
  });
$b.displayName = Is;
var Fb = "TooltipPortal",
  [Jx, Pb] = vr(Fb, { forceMount: void 0 }),
  Dl = "TooltipContent",
  Ib = z.forwardRef((i, r) => {
    const s = Pb(Dl, i.__scopeTooltip),
      { forceMount: u = s.forceMount, side: f = "top", ...d } = i,
      p = br(Dl, i.__scopeTooltip);
    return G.jsx(_h, {
      present: u || p.open,
      children: p.disableHoverableContent
        ? G.jsx(Hh, { side: f, ...d, ref: r })
        : G.jsx(t1, { side: f, ...d, ref: r }),
    });
  }),
  t1 = z.forwardRef((i, r) => {
    const s = br(Dl, i.__scopeTooltip),
      u = Rh(Dl, i.__scopeTooltip),
      f = z.useRef(null),
      d = qa(r, f),
      [p, b] = z.useState(null),
      { trigger: y, onClose: g } = s,
      v = f.current,
      { onPointerInTransitChange: h } = u,
      A = z.useCallback(() => {
        (b(null), h(!1));
      }, [h]),
      M = z.useCallback(
        (N, Y) => {
          const k = N.currentTarget,
            R = { x: N.clientX, y: N.clientY },
            W = i1(R, k.getBoundingClientRect()),
            J = o1(R, W),
            $ = r1(Y.getBoundingClientRect()),
            I = s1([...J, ...$]);
          (b(I), h(!0));
        },
        [h],
      );
    return (
      z.useEffect(() => () => A(), [A]),
      z.useEffect(() => {
        if (y && v) {
          const N = (k) => M(k, v),
            Y = (k) => M(k, y);
          return (
            y.addEventListener("pointerleave", N),
            v.addEventListener("pointerleave", Y),
            () => {
              (y.removeEventListener("pointerleave", N),
                v.removeEventListener("pointerleave", Y));
            }
          );
        }
      }, [y, v, M, A]),
      z.useEffect(() => {
        if (p) {
          const N = (Y) => {
            const k = Y.target,
              R = { x: Y.clientX, y: Y.clientY },
              W = y?.contains(k) || v?.contains(k),
              J = !u1(R, p);
            W ? A() : J && (A(), g());
          };
          return (
            document.addEventListener("pointermove", N),
            () => document.removeEventListener("pointermove", N)
          );
        }
      }, [y, v, p, g, A]),
      G.jsx(Hh, { ...i, ref: d })
    );
  }),
  [e1, n1] = vr(Dh, { isInside: !1 }),
  a1 = rv("TooltipContent"),
  Hh = z.forwardRef((i, r) => {
    const {
        __scopeTooltip: s,
        children: u,
        "aria-label": f,
        onEscapeKeyDown: d,
        onPointerDownOutside: p,
        ...b
      } = i,
      y = br(Dl, s),
      g = dc(s),
      { onClose: v } = y;
    return (
      z.useEffect(
        () => (
          document.addEventListener(H0, v),
          () => document.removeEventListener(H0, v)
        ),
        [v],
      ),
      z.useEffect(() => {
        if (y.trigger) {
          const h = (A) => {
            A.target?.contains(y.trigger) && v();
          };
          return (
            window.addEventListener("scroll", h, { capture: !0 }),
            () => window.removeEventListener("scroll", h, { capture: !0 })
          );
        }
      }, [y.trigger, v]),
      G.jsx(lh, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: d,
        onPointerDownOutside: p,
        onFocusOutside: (h) => h.preventDefault(),
        onDismiss: v,
        children: G.jsxs(qb, {
          "data-state": y.stateAttribute,
          ...g,
          ...b,
          ref: r,
          style: {
            ...b.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            G.jsx(a1, { children: u }),
            G.jsx(e1, {
              scope: s,
              isInside: !0,
              children: G.jsx(Kb, {
                id: y.contentId,
                role: "tooltip",
                children: f || u,
              }),
            }),
          ],
        }),
      })
    );
  });
Ib.displayName = Dl;
var jh = "TooltipArrow",
  l1 = z.forwardRef((i, r) => {
    const { __scopeTooltip: s, ...u } = i,
      f = dc(s);
    return n1(jh, s).isInside ? null : G.jsx(Gb, { ...f, ...u, ref: r });
  });
l1.displayName = jh;
function i1(i, r) {
  const s = Math.abs(r.top - i.y),
    u = Math.abs(r.bottom - i.y),
    f = Math.abs(r.right - i.x),
    d = Math.abs(r.left - i.x);
  switch (Math.min(s, u, f, d)) {
    case d:
      return "left";
    case f:
      return "right";
    case s:
      return "top";
    case u:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function o1(i, r, s = 5) {
  const u = [];
  switch (r) {
    case "top":
      u.push({ x: i.x - s, y: i.y + s }, { x: i.x + s, y: i.y + s });
      break;
    case "bottom":
      u.push({ x: i.x - s, y: i.y - s }, { x: i.x + s, y: i.y - s });
      break;
    case "left":
      u.push({ x: i.x + s, y: i.y - s }, { x: i.x + s, y: i.y + s });
      break;
    case "right":
      u.push({ x: i.x - s, y: i.y - s }, { x: i.x - s, y: i.y + s });
      break;
  }
  return u;
}
function r1(i) {
  const { top: r, right: s, bottom: u, left: f } = i;
  return [
    { x: f, y: r },
    { x: s, y: r },
    { x: s, y: u },
    { x: f, y: u },
  ];
}
function u1(i, r) {
  const { x: s, y: u } = i;
  let f = !1;
  for (let d = 0, p = r.length - 1; d < r.length; p = d++) {
    const b = r[d],
      y = r[p],
      g = b.x,
      v = b.y,
      h = y.x,
      A = y.y;
    v > u != A > u && s < ((h - g) * (u - v)) / (A - v) + g && (f = !f);
  }
  return f;
}
function s1(i) {
  const r = i.slice();
  return (
    r.sort((s, u) =>
      s.x < u.x ? -1 : s.x > u.x ? 1 : s.y < u.y ? -1 : s.y > u.y ? 1 : 0,
    ),
    c1(r)
  );
}
function c1(i) {
  if (i.length <= 1) return i.slice();
  const r = [];
  for (let u = 0; u < i.length; u++) {
    const f = i[u];
    for (; r.length >= 2; ) {
      const d = r[r.length - 1],
        p = r[r.length - 2];
      if ((d.x - p.x) * (f.y - p.y) >= (d.y - p.y) * (f.x - p.x)) r.pop();
      else break;
    }
    r.push(f);
  }
  r.pop();
  const s = [];
  for (let u = i.length - 1; u >= 0; u--) {
    const f = i[u];
    for (; s.length >= 2; ) {
      const d = s[s.length - 1],
        p = s[s.length - 2];
      if ((d.x - p.x) * (f.y - p.y) >= (d.y - p.y) * (f.x - p.x)) s.pop();
      else break;
    }
    s.push(f);
  }
  return (
    s.pop(),
    r.length === 1 && s.length === 1 && r[0].x === s[0].x && r[0].y === s[0].y
      ? r
      : r.concat(s)
  );
}
var f1 = Nh;
function Bh(i) {
  var r,
    s,
    u = "";
  if (typeof i == "string" || typeof i == "number") u += i;
  else if (typeof i == "object")
    if (Array.isArray(i)) {
      var f = i.length;
      for (r = 0; r < f; r++)
        i[r] && (s = Bh(i[r])) && (u && (u += " "), (u += s));
    } else for (s in i) i[s] && (u && (u += " "), (u += s));
  return u;
}
function Uh() {
  for (var i, r, s = 0, u = "", f = arguments.length; s < f; s++)
    (i = arguments[s]) && (r = Bh(i)) && (u && (u += " "), (u += r));
  return u;
}
const mc = "-",
  d1 = (i) => {
    const r = h1(i),
      { conflictingClassGroups: s, conflictingClassGroupModifiers: u } = i;
    return {
      getClassGroupId: (p) => {
        const b = p.split(mc);
        return (b[0] === "" && b.length !== 1 && b.shift(), Lh(b, r) || m1(p));
      },
      getConflictingClassGroupIds: (p, b) => {
        const y = s[p] || [];
        return b && u[p] ? [...y, ...u[p]] : y;
      },
    };
  },
  Lh = (i, r) => {
    if (i.length === 0) return r.classGroupId;
    const s = i[0],
      u = r.nextPart.get(s),
      f = u ? Lh(i.slice(1), u) : void 0;
    if (f) return f;
    if (r.validators.length === 0) return;
    const d = i.join(mc);
    return r.validators.find(({ validator: p }) => p(d))?.classGroupId;
  },
  j0 = /^\[(.+)\]$/,
  m1 = (i) => {
    if (j0.test(i)) {
      const r = j0.exec(i)[1],
        s = r?.substring(0, r.indexOf(":"));
      if (s) return "arbitrary.." + s;
    }
  },
  h1 = (i) => {
    const { theme: r, classGroups: s } = i,
      u = { nextPart: new Map(), validators: [] };
    for (const f in s) tc(s[f], u, f, r);
    return u;
  },
  tc = (i, r, s, u) => {
    i.forEach((f) => {
      if (typeof f == "string") {
        const d = f === "" ? r : B0(r, f);
        d.classGroupId = s;
        return;
      }
      if (typeof f == "function") {
        if (g1(f)) {
          tc(f(u), r, s, u);
          return;
        }
        r.validators.push({ validator: f, classGroupId: s });
        return;
      }
      Object.entries(f).forEach(([d, p]) => {
        tc(p, B0(r, d), s, u);
      });
    });
  },
  B0 = (i, r) => {
    let s = i;
    return (
      r.split(mc).forEach((u) => {
        (s.nextPart.has(u) ||
          s.nextPart.set(u, { nextPart: new Map(), validators: [] }),
          (s = s.nextPart.get(u)));
      }),
      s
    );
  },
  g1 = (i) => i.isThemeGetter,
  p1 = (i) => {
    if (i < 1) return { get: () => {}, set: () => {} };
    let r = 0,
      s = new Map(),
      u = new Map();
    const f = (d, p) => {
      (s.set(d, p), r++, r > i && ((r = 0), (u = s), (s = new Map())));
    };
    return {
      get(d) {
        let p = s.get(d);
        if (p !== void 0) return p;
        if ((p = u.get(d)) !== void 0) return (f(d, p), p);
      },
      set(d, p) {
        s.has(d) ? s.set(d, p) : f(d, p);
      },
    };
  },
  ec = "!",
  nc = ":",
  y1 = nc.length,
  v1 = (i) => {
    const { prefix: r, experimentalParseClassName: s } = i;
    let u = (f) => {
      const d = [];
      let p = 0,
        b = 0,
        y = 0,
        g;
      for (let N = 0; N < f.length; N++) {
        let Y = f[N];
        if (p === 0 && b === 0) {
          if (Y === nc) {
            (d.push(f.slice(y, N)), (y = N + y1));
            continue;
          }
          if (Y === "/") {
            g = N;
            continue;
          }
        }
        Y === "[" ? p++ : Y === "]" ? p-- : Y === "(" ? b++ : Y === ")" && b--;
      }
      const v = d.length === 0 ? f : f.substring(y),
        h = b1(v),
        A = h !== v,
        M = g && g > y ? g - y : void 0;
      return {
        modifiers: d,
        hasImportantModifier: A,
        baseClassName: h,
        maybePostfixModifierPosition: M,
      };
    };
    if (r) {
      const f = r + nc,
        d = u;
      u = (p) =>
        p.startsWith(f)
          ? d(p.substring(f.length))
          : {
              isExternal: !0,
              modifiers: [],
              hasImportantModifier: !1,
              baseClassName: p,
              maybePostfixModifierPosition: void 0,
            };
    }
    if (s) {
      const f = u;
      u = (d) => s({ className: d, parseClassName: f });
    }
    return u;
  },
  b1 = (i) =>
    i.endsWith(ec)
      ? i.substring(0, i.length - 1)
      : i.startsWith(ec)
        ? i.substring(1)
        : i,
  x1 = (i) => {
    const r = Object.fromEntries(i.orderSensitiveModifiers.map((u) => [u, !0]));
    return (u) => {
      if (u.length <= 1) return u;
      const f = [];
      let d = [];
      return (
        u.forEach((p) => {
          p[0] === "[" || r[p] ? (f.push(...d.sort(), p), (d = [])) : d.push(p);
        }),
        f.push(...d.sort()),
        f
      );
    };
  },
  S1 = (i) => ({
    cache: p1(i.cacheSize),
    parseClassName: v1(i),
    sortModifiers: x1(i),
    ...d1(i),
  }),
  E1 = /\s+/,
  w1 = (i, r) => {
    const {
        parseClassName: s,
        getClassGroupId: u,
        getConflictingClassGroupIds: f,
        sortModifiers: d,
      } = r,
      p = [],
      b = i.trim().split(E1);
    let y = "";
    for (let g = b.length - 1; g >= 0; g -= 1) {
      const v = b[g],
        {
          isExternal: h,
          modifiers: A,
          hasImportantModifier: M,
          baseClassName: N,
          maybePostfixModifierPosition: Y,
        } = s(v);
      if (h) {
        y = v + (y.length > 0 ? " " + y : y);
        continue;
      }
      let k = !!Y,
        R = u(k ? N.substring(0, Y) : N);
      if (!R) {
        if (!k) {
          y = v + (y.length > 0 ? " " + y : y);
          continue;
        }
        if (((R = u(N)), !R)) {
          y = v + (y.length > 0 ? " " + y : y);
          continue;
        }
        k = !1;
      }
      const W = d(A).join(":"),
        J = M ? W + ec : W,
        $ = J + R;
      if (p.includes($)) continue;
      p.push($);
      const I = f(R, k);
      for (let lt = 0; lt < I.length; ++lt) {
        const Q = I[lt];
        p.push(J + Q);
      }
      y = v + (y.length > 0 ? " " + y : y);
    }
    return y;
  };
function T1() {
  let i = 0,
    r,
    s,
    u = "";
  for (; i < arguments.length; )
    (r = arguments[i++]) && (s = Yh(r)) && (u && (u += " "), (u += s));
  return u;
}
const Yh = (i) => {
  if (typeof i == "string") return i;
  let r,
    s = "";
  for (let u = 0; u < i.length; u++)
    i[u] && (r = Yh(i[u])) && (s && (s += " "), (s += r));
  return s;
};
function A1(i, ...r) {
  let s,
    u,
    f,
    d = p;
  function p(y) {
    const g = r.reduce((v, h) => h(v), i());
    return ((s = S1(g)), (u = s.cache.get), (f = s.cache.set), (d = b), b(y));
  }
  function b(y) {
    const g = u(y);
    if (g) return g;
    const v = w1(y, s);
    return (f(y, v), v);
  }
  return function () {
    return d(T1.apply(null, arguments));
  };
}
const Pt = (i) => {
    const r = (s) => s[i] || [];
    return ((r.isThemeGetter = !0), r);
  },
  qh = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  Gh = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  z1 = /^\d+\/\d+$/,
  O1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  _1 =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  M1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  C1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  R1 =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Cl = (i) => z1.test(i),
  bt = (i) => !!i && !Number.isNaN(Number(i)),
  fa = (i) => !!i && Number.isInteger(Number(i)),
  ks = (i) => i.endsWith("%") && bt(i.slice(0, -1)),
  Hn = (i) => O1.test(i),
  N1 = () => !0,
  D1 = (i) => _1.test(i) && !M1.test(i),
  Xh = () => !1,
  H1 = (i) => C1.test(i),
  j1 = (i) => R1.test(i),
  B1 = (i) => !tt(i) && !et(i),
  U1 = (i) => Bl(i, Qh, Xh),
  tt = (i) => qh.test(i),
  Ua = (i) => Bl(i, Zh, D1),
  Vs = (i) => Bl(i, X1, bt),
  U0 = (i) => Bl(i, kh, Xh),
  L1 = (i) => Bl(i, Vh, j1),
  ir = (i) => Bl(i, Kh, H1),
  et = (i) => Gh.test(i),
  ji = (i) => Ul(i, Zh),
  Y1 = (i) => Ul(i, k1),
  L0 = (i) => Ul(i, kh),
  q1 = (i) => Ul(i, Qh),
  G1 = (i) => Ul(i, Vh),
  or = (i) => Ul(i, Kh, !0),
  Bl = (i, r, s) => {
    const u = qh.exec(i);
    return u ? (u[1] ? r(u[1]) : s(u[2])) : !1;
  },
  Ul = (i, r, s = !1) => {
    const u = Gh.exec(i);
    return u ? (u[1] ? r(u[1]) : s) : !1;
  },
  kh = (i) => i === "position" || i === "percentage",
  Vh = (i) => i === "image" || i === "url",
  Qh = (i) => i === "length" || i === "size" || i === "bg-size",
  Zh = (i) => i === "length",
  X1 = (i) => i === "number",
  k1 = (i) => i === "family-name",
  Kh = (i) => i === "shadow",
  V1 = () => {
    const i = Pt("color"),
      r = Pt("font"),
      s = Pt("text"),
      u = Pt("font-weight"),
      f = Pt("tracking"),
      d = Pt("leading"),
      p = Pt("breakpoint"),
      b = Pt("container"),
      y = Pt("spacing"),
      g = Pt("radius"),
      v = Pt("shadow"),
      h = Pt("inset-shadow"),
      A = Pt("text-shadow"),
      M = Pt("drop-shadow"),
      N = Pt("blur"),
      Y = Pt("perspective"),
      k = Pt("aspect"),
      R = Pt("ease"),
      W = Pt("animate"),
      J = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      $ = () => [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "left-top",
        "top-right",
        "right-top",
        "bottom-right",
        "right-bottom",
        "bottom-left",
        "left-bottom",
      ],
      I = () => [...$(), et, tt],
      lt = () => ["auto", "hidden", "clip", "visible", "scroll"],
      Q = () => ["auto", "contain", "none"],
      Z = () => [et, tt, y],
      mt = () => [Cl, "full", "auto", ...Z()],
      St = () => [fa, "none", "subgrid", et, tt],
      _t = () => ["auto", { span: ["full", fa, et, tt] }, fa, et, tt],
      gt = () => [fa, "auto", et, tt],
      pt = () => ["auto", "min", "max", "fr", et, tt],
      vt = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
        "center-safe",
        "end-safe",
      ],
      xt = () => [
        "start",
        "end",
        "center",
        "stretch",
        "center-safe",
        "end-safe",
      ],
      w = () => ["auto", ...Z()],
      L = () => [
        Cl,
        "auto",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        ...Z(),
      ],
      D = () => [i, et, tt],
      it = () => [...$(), L0, U0, { position: [et, tt] }],
      ut = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
      S = () => ["auto", "cover", "contain", q1, U1, { size: [et, tt] }],
      U = () => [ks, ji, Ua],
      B = () => ["", "none", "full", g, et, tt],
      V = () => ["", bt, ji, Ua],
      F = () => ["solid", "dashed", "dotted", "double"],
      ot = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      nt = () => [bt, ks, L0, U0],
      ct = () => ["", "none", N, et, tt],
      zt = () => ["none", bt, et, tt],
      ne = () => ["none", bt, et, tt],
      de = () => [bt, et, tt],
      ae = () => [Cl, "full", ...Z()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [Hn],
        breakpoint: [Hn],
        color: [N1],
        container: [Hn],
        "drop-shadow": [Hn],
        ease: ["in", "out", "in-out"],
        font: [B1],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ],
        "inset-shadow": [Hn],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [Hn],
        shadow: [Hn],
        spacing: ["px", bt],
        text: [Hn],
        "text-shadow": [Hn],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", Cl, tt, et, k] }],
        container: ["container"],
        columns: [{ columns: [bt, tt, et, b] }],
        "break-after": [{ "break-after": J() }],
        "break-before": [{ "break-before": J() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: I() }],
        overflow: [{ overflow: lt() }],
        "overflow-x": [{ "overflow-x": lt() }],
        "overflow-y": [{ "overflow-y": lt() }],
        overscroll: [{ overscroll: Q() }],
        "overscroll-x": [{ "overscroll-x": Q() }],
        "overscroll-y": [{ "overscroll-y": Q() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: mt() }],
        "inset-x": [{ "inset-x": mt() }],
        "inset-y": [{ "inset-y": mt() }],
        start: [{ start: mt() }],
        end: [{ end: mt() }],
        top: [{ top: mt() }],
        right: [{ right: mt() }],
        bottom: [{ bottom: mt() }],
        left: [{ left: mt() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [fa, "auto", et, tt] }],
        basis: [{ basis: [Cl, "full", "auto", b, ...Z()] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [bt, Cl, "auto", "initial", "none", tt] }],
        grow: [{ grow: ["", bt, et, tt] }],
        shrink: [{ shrink: ["", bt, et, tt] }],
        order: [{ order: [fa, "first", "last", "none", et, tt] }],
        "grid-cols": [{ "grid-cols": St() }],
        "col-start-end": [{ col: _t() }],
        "col-start": [{ "col-start": gt() }],
        "col-end": [{ "col-end": gt() }],
        "grid-rows": [{ "grid-rows": St() }],
        "row-start-end": [{ row: _t() }],
        "row-start": [{ "row-start": gt() }],
        "row-end": [{ "row-end": gt() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": pt() }],
        "auto-rows": [{ "auto-rows": pt() }],
        gap: [{ gap: Z() }],
        "gap-x": [{ "gap-x": Z() }],
        "gap-y": [{ "gap-y": Z() }],
        "justify-content": [{ justify: [...vt(), "normal"] }],
        "justify-items": [{ "justify-items": [...xt(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ...xt()] }],
        "align-content": [{ content: ["normal", ...vt()] }],
        "align-items": [{ items: [...xt(), { baseline: ["", "last"] }] }],
        "align-self": [{ self: ["auto", ...xt(), { baseline: ["", "last"] }] }],
        "place-content": [{ "place-content": vt() }],
        "place-items": [{ "place-items": [...xt(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ...xt()] }],
        p: [{ p: Z() }],
        px: [{ px: Z() }],
        py: [{ py: Z() }],
        ps: [{ ps: Z() }],
        pe: [{ pe: Z() }],
        pt: [{ pt: Z() }],
        pr: [{ pr: Z() }],
        pb: [{ pb: Z() }],
        pl: [{ pl: Z() }],
        m: [{ m: w() }],
        mx: [{ mx: w() }],
        my: [{ my: w() }],
        ms: [{ ms: w() }],
        me: [{ me: w() }],
        mt: [{ mt: w() }],
        mr: [{ mr: w() }],
        mb: [{ mb: w() }],
        ml: [{ ml: w() }],
        "space-x": [{ "space-x": Z() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": Z() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: L() }],
        w: [{ w: [b, "screen", ...L()] }],
        "min-w": [{ "min-w": [b, "screen", "none", ...L()] }],
        "max-w": [
          { "max-w": [b, "screen", "none", "prose", { screen: [p] }, ...L()] },
        ],
        h: [{ h: ["screen", "lh", ...L()] }],
        "min-h": [{ "min-h": ["screen", "lh", "none", ...L()] }],
        "max-h": [{ "max-h": ["screen", "lh", ...L()] }],
        "font-size": [{ text: ["base", s, ji, Ua] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [u, et, Vs] }],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              ks,
              tt,
            ],
          },
        ],
        "font-family": [{ font: [Y1, tt, r] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [f, et, tt] }],
        "line-clamp": [{ "line-clamp": [bt, "none", et, Vs] }],
        leading: [{ leading: [d, ...Z()] }],
        "list-image": [{ "list-image": ["none", et, tt] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", et, tt] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "placeholder-color": [{ placeholder: D() }],
        "text-color": [{ text: D() }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...F(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: [bt, "from-font", "auto", et, Ua] },
        ],
        "text-decoration-color": [{ decoration: D() }],
        "underline-offset": [{ "underline-offset": [bt, "auto", et, tt] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: Z() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              et,
              tt,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", et, tt] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: it() }],
        "bg-repeat": [{ bg: ut() }],
        "bg-size": [{ bg: S() }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                  fa,
                  et,
                  tt,
                ],
                radial: ["", et, tt],
                conic: [fa, et, tt],
              },
              G1,
              L1,
            ],
          },
        ],
        "bg-color": [{ bg: D() }],
        "gradient-from-pos": [{ from: U() }],
        "gradient-via-pos": [{ via: U() }],
        "gradient-to-pos": [{ to: U() }],
        "gradient-from": [{ from: D() }],
        "gradient-via": [{ via: D() }],
        "gradient-to": [{ to: D() }],
        rounded: [{ rounded: B() }],
        "rounded-s": [{ "rounded-s": B() }],
        "rounded-e": [{ "rounded-e": B() }],
        "rounded-t": [{ "rounded-t": B() }],
        "rounded-r": [{ "rounded-r": B() }],
        "rounded-b": [{ "rounded-b": B() }],
        "rounded-l": [{ "rounded-l": B() }],
        "rounded-ss": [{ "rounded-ss": B() }],
        "rounded-se": [{ "rounded-se": B() }],
        "rounded-ee": [{ "rounded-ee": B() }],
        "rounded-es": [{ "rounded-es": B() }],
        "rounded-tl": [{ "rounded-tl": B() }],
        "rounded-tr": [{ "rounded-tr": B() }],
        "rounded-br": [{ "rounded-br": B() }],
        "rounded-bl": [{ "rounded-bl": B() }],
        "border-w": [{ border: V() }],
        "border-w-x": [{ "border-x": V() }],
        "border-w-y": [{ "border-y": V() }],
        "border-w-s": [{ "border-s": V() }],
        "border-w-e": [{ "border-e": V() }],
        "border-w-t": [{ "border-t": V() }],
        "border-w-r": [{ "border-r": V() }],
        "border-w-b": [{ "border-b": V() }],
        "border-w-l": [{ "border-l": V() }],
        "divide-x": [{ "divide-x": V() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": V() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...F(), "hidden", "none"] }],
        "divide-style": [{ divide: [...F(), "hidden", "none"] }],
        "border-color": [{ border: D() }],
        "border-color-x": [{ "border-x": D() }],
        "border-color-y": [{ "border-y": D() }],
        "border-color-s": [{ "border-s": D() }],
        "border-color-e": [{ "border-e": D() }],
        "border-color-t": [{ "border-t": D() }],
        "border-color-r": [{ "border-r": D() }],
        "border-color-b": [{ "border-b": D() }],
        "border-color-l": [{ "border-l": D() }],
        "divide-color": [{ divide: D() }],
        "outline-style": [{ outline: [...F(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [bt, et, tt] }],
        "outline-w": [{ outline: ["", bt, ji, Ua] }],
        "outline-color": [{ outline: D() }],
        shadow: [{ shadow: ["", "none", v, or, ir] }],
        "shadow-color": [{ shadow: D() }],
        "inset-shadow": [{ "inset-shadow": ["none", h, or, ir] }],
        "inset-shadow-color": [{ "inset-shadow": D() }],
        "ring-w": [{ ring: V() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: D() }],
        "ring-offset-w": [{ "ring-offset": [bt, Ua] }],
        "ring-offset-color": [{ "ring-offset": D() }],
        "inset-ring-w": [{ "inset-ring": V() }],
        "inset-ring-color": [{ "inset-ring": D() }],
        "text-shadow": [{ "text-shadow": ["none", A, or, ir] }],
        "text-shadow-color": [{ "text-shadow": D() }],
        opacity: [{ opacity: [bt, et, tt] }],
        "mix-blend": [
          { "mix-blend": [...ot(), "plus-darker", "plus-lighter"] },
        ],
        "bg-blend": [{ "bg-blend": ot() }],
        "mask-clip": [
          {
            "mask-clip": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
          "mask-no-clip",
        ],
        "mask-composite": [
          { mask: ["add", "subtract", "intersect", "exclude"] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [bt] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": nt() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": nt() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": D() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": D() }],
        "mask-image-t-from-pos": [{ "mask-t-from": nt() }],
        "mask-image-t-to-pos": [{ "mask-t-to": nt() }],
        "mask-image-t-from-color": [{ "mask-t-from": D() }],
        "mask-image-t-to-color": [{ "mask-t-to": D() }],
        "mask-image-r-from-pos": [{ "mask-r-from": nt() }],
        "mask-image-r-to-pos": [{ "mask-r-to": nt() }],
        "mask-image-r-from-color": [{ "mask-r-from": D() }],
        "mask-image-r-to-color": [{ "mask-r-to": D() }],
        "mask-image-b-from-pos": [{ "mask-b-from": nt() }],
        "mask-image-b-to-pos": [{ "mask-b-to": nt() }],
        "mask-image-b-from-color": [{ "mask-b-from": D() }],
        "mask-image-b-to-color": [{ "mask-b-to": D() }],
        "mask-image-l-from-pos": [{ "mask-l-from": nt() }],
        "mask-image-l-to-pos": [{ "mask-l-to": nt() }],
        "mask-image-l-from-color": [{ "mask-l-from": D() }],
        "mask-image-l-to-color": [{ "mask-l-to": D() }],
        "mask-image-x-from-pos": [{ "mask-x-from": nt() }],
        "mask-image-x-to-pos": [{ "mask-x-to": nt() }],
        "mask-image-x-from-color": [{ "mask-x-from": D() }],
        "mask-image-x-to-color": [{ "mask-x-to": D() }],
        "mask-image-y-from-pos": [{ "mask-y-from": nt() }],
        "mask-image-y-to-pos": [{ "mask-y-to": nt() }],
        "mask-image-y-from-color": [{ "mask-y-from": D() }],
        "mask-image-y-to-color": [{ "mask-y-to": D() }],
        "mask-image-radial": [{ "mask-radial": [et, tt] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": nt() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": nt() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": D() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": D() }],
        "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: ["side", "corner"], farthest: ["side", "corner"] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": $() }],
        "mask-image-conic-pos": [{ "mask-conic": [bt] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": nt() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": nt() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": D() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": D() }],
        "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
        "mask-origin": [
          {
            "mask-origin": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
        ],
        "mask-position": [{ mask: it() }],
        "mask-repeat": [{ mask: ut() }],
        "mask-size": [{ mask: S() }],
        "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
        "mask-image": [{ mask: ["none", et, tt] }],
        filter: [{ filter: ["", "none", et, tt] }],
        blur: [{ blur: ct() }],
        brightness: [{ brightness: [bt, et, tt] }],
        contrast: [{ contrast: [bt, et, tt] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", M, or, ir] }],
        "drop-shadow-color": [{ "drop-shadow": D() }],
        grayscale: [{ grayscale: ["", bt, et, tt] }],
        "hue-rotate": [{ "hue-rotate": [bt, et, tt] }],
        invert: [{ invert: ["", bt, et, tt] }],
        saturate: [{ saturate: [bt, et, tt] }],
        sepia: [{ sepia: ["", bt, et, tt] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", et, tt] }],
        "backdrop-blur": [{ "backdrop-blur": ct() }],
        "backdrop-brightness": [{ "backdrop-brightness": [bt, et, tt] }],
        "backdrop-contrast": [{ "backdrop-contrast": [bt, et, tt] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", bt, et, tt] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [bt, et, tt] }],
        "backdrop-invert": [{ "backdrop-invert": ["", bt, et, tt] }],
        "backdrop-opacity": [{ "backdrop-opacity": [bt, et, tt] }],
        "backdrop-saturate": [{ "backdrop-saturate": [bt, et, tt] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", bt, et, tt] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": Z() }],
        "border-spacing-x": [{ "border-spacing-x": Z() }],
        "border-spacing-y": [{ "border-spacing-y": Z() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              et,
              tt,
            ],
          },
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [bt, "initial", et, tt] }],
        ease: [{ ease: ["linear", "initial", R, et, tt] }],
        delay: [{ delay: [bt, et, tt] }],
        animate: [{ animate: ["none", W, et, tt] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [Y, et, tt] }],
        "perspective-origin": [{ "perspective-origin": I() }],
        rotate: [{ rotate: zt() }],
        "rotate-x": [{ "rotate-x": zt() }],
        "rotate-y": [{ "rotate-y": zt() }],
        "rotate-z": [{ "rotate-z": zt() }],
        scale: [{ scale: ne() }],
        "scale-x": [{ "scale-x": ne() }],
        "scale-y": [{ "scale-y": ne() }],
        "scale-z": [{ "scale-z": ne() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: de() }],
        "skew-x": [{ "skew-x": de() }],
        "skew-y": [{ "skew-y": de() }],
        transform: [{ transform: [et, tt, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: I() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: ae() }],
        "translate-x": [{ "translate-x": ae() }],
        "translate-y": [{ "translate-y": ae() }],
        "translate-z": [{ "translate-z": ae() }],
        "translate-none": ["translate-none"],
        accent: [{ accent: D() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: D() }],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light",
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              et,
              tt,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": Z() }],
        "scroll-mx": [{ "scroll-mx": Z() }],
        "scroll-my": [{ "scroll-my": Z() }],
        "scroll-ms": [{ "scroll-ms": Z() }],
        "scroll-me": [{ "scroll-me": Z() }],
        "scroll-mt": [{ "scroll-mt": Z() }],
        "scroll-mr": [{ "scroll-mr": Z() }],
        "scroll-mb": [{ "scroll-mb": Z() }],
        "scroll-ml": [{ "scroll-ml": Z() }],
        "scroll-p": [{ "scroll-p": Z() }],
        "scroll-px": [{ "scroll-px": Z() }],
        "scroll-py": [{ "scroll-py": Z() }],
        "scroll-ps": [{ "scroll-ps": Z() }],
        "scroll-pe": [{ "scroll-pe": Z() }],
        "scroll-pt": [{ "scroll-pt": Z() }],
        "scroll-pr": [{ "scroll-pr": Z() }],
        "scroll-pb": [{ "scroll-pb": Z() }],
        "scroll-pl": [{ "scroll-pl": Z() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          {
            "will-change": ["auto", "scroll", "contents", "transform", et, tt],
          },
        ],
        fill: [{ fill: ["none", ...D()] }],
        "stroke-w": [{ stroke: [bt, ji, Ua, Vs] }],
        stroke: [{ stroke: ["none", ...D()] }],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-x",
          "border-w-y",
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-x",
          "border-color-y",
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z",
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
      orderSensitiveModifiers: [
        "*",
        "**",
        "after",
        "backdrop",
        "before",
        "details-content",
        "file",
        "first-letter",
        "first-line",
        "marker",
        "placeholder",
        "selection",
      ],
    };
  },
  Q1 = A1(V1);
function xr(...i) {
  return Q1(Uh(i));
}
function Z1({ delayDuration: i = 0, ...r }) {
  return G.jsx(f1, {
    "data-loc": "client/src/components/ui/tooltip.tsx:11",
    "data-slot": "tooltip-provider",
    delayDuration: i,
    ...r,
  });
}
const Y0 = (i) => (typeof i == "boolean" ? `${i}` : i === 0 ? "0" : i),
  q0 = Uh,
  K1 = (i, r) => (s) => {
    var u;
    if (r?.variants == null) return q0(i, s?.class, s?.className);
    const { variants: f, defaultVariants: d } = r,
      p = Object.keys(f).map((g) => {
        const v = s?.[g],
          h = d?.[g];
        if (v === null) return null;
        const A = Y0(v) || Y0(h);
        return f[g][A];
      }),
      b =
        s &&
        Object.entries(s).reduce((g, v) => {
          let [h, A] = v;
          return (A === void 0 || (g[h] = A), g);
        }, {}),
      y =
        r == null || (u = r.compoundVariants) === null || u === void 0
          ? void 0
          : u.reduce((g, v) => {
              let { class: h, className: A, ...M } = v;
              return Object.entries(M).every((N) => {
                let [Y, k] = N;
                return Array.isArray(k)
                  ? k.includes({ ...d, ...b }[Y])
                  : { ...d, ...b }[Y] === k;
              })
                ? [...g, h, A]
                : g;
            }, []);
    return q0(i, p, y, s?.class, s?.className);
  },
  J1 = K1(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          destructive:
            "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
          outline:
            "border bg-transparent shadow-xs hover:bg-accent dark:bg-transparent dark:border-input dark:hover:bg-input/50",
          secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-accent dark:hover:bg-accent/50",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-9 px-4 py-2 has-[>svg]:px-3",
          sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
          lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
          icon: "size-9",
          "icon-sm": "size-8",
          "icon-lg": "size-10",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    },
  );
function W1({ className: i, variant: r, size: s, asChild: u = !1, ...f }) {
  const d = u ? iv : "button";
  return G.jsx(d, {
    "data-loc": "client/src/components/ui/button.tsx:52",
    "data-slot": "button",
    className: xr(J1({ variant: r, size: s, className: i })),
    ...f,
  });
}
function $1({ className: i, ...r }) {
  return G.jsx("div", {
    "data-loc": "client/src/components/ui/card.tsx:7",
    "data-slot": "card",
    className: xr(
      "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
      i,
    ),
    ...r,
  });
}
function F1({ className: i, ...r }) {
  return G.jsx("div", {
    "data-loc": "client/src/components/ui/card.tsx:66",
    "data-slot": "card-content",
    className: xr("px-6", i),
    ...r,
  });
}
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const P1 = (i) => i.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Jh = (...i) => i.filter((r, s, u) => !!r && u.indexOf(r) === s).join(" ");
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var I1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tx = z.forwardRef(
  (
    {
      color: i = "currentColor",
      size: r = 24,
      strokeWidth: s = 2,
      absoluteStrokeWidth: u,
      className: f = "",
      children: d,
      iconNode: p,
      ...b
    },
    y,
  ) =>
    z.createElement(
      "svg",
      {
        ref: y,
        ...I1,
        width: r,
        height: r,
        stroke: i,
        strokeWidth: u ? (Number(s) * 24) / Number(r) : s,
        className: Jh("lucide", f),
        ...b,
      },
      [
        ...p.map(([g, v]) => z.createElement(g, v)),
        ...(Array.isArray(d) ? d : [d]),
      ],
    ),
);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sr = (i, r) => {
  const s = z.forwardRef(({ className: u, ...f }, d) =>
    z.createElement(tx, {
      ref: d,
      iconNode: r,
      className: Jh(`lucide-${P1(i)}`, u),
      ...f,
    }),
  );
  return ((s.displayName = `${i}`), s);
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ex = Sr("CircleAlert", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nx = Sr("House", [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "1d0kgt",
    },
  ],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ax = Sr("RotateCcw", [
  [
    "path",
    { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" },
  ],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lx = Sr("TriangleAlert", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq",
    },
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }],
]);
function ix(i, r) {
  if (i instanceof RegExp) return { keys: !1, pattern: i };
  var s,
    u,
    f,
    d,
    p = [],
    b = "",
    y = i.split("/");
  for (y[0] || y.shift(); (f = y.shift()); )
    ((s = f[0]),
      s === "*"
        ? (p.push(s), (b += f[1] === "?" ? "(?:/(.*))?" : "/(.*)"))
        : s === ":"
          ? ((u = f.indexOf("?", 1)),
            (d = f.indexOf(".", 1)),
            p.push(f.substring(1, ~u ? u : ~d ? d : f.length)),
            (b += ~u && !~d ? "(?:/([^/]+?))?" : "/([^/]+?)"),
            ~d && (b += (~u ? "?" : "") + "\\" + f.substring(d)))
          : (b += "/" + f));
  return {
    keys: p,
    pattern: new RegExp("^" + b + (r ? "(?=$|/)" : "/?$"), "i"),
  };
}
var Qs = { exports: {} },
  Zs = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var G0;
function ox() {
  if (G0) return Zs;
  G0 = 1;
  var i = dr();
  function r(h, A) {
    return (h === A && (h !== 0 || 1 / h === 1 / A)) || (h !== h && A !== A);
  }
  var s = typeof Object.is == "function" ? Object.is : r,
    u = i.useState,
    f = i.useEffect,
    d = i.useLayoutEffect,
    p = i.useDebugValue;
  function b(h, A) {
    var M = A(),
      N = u({ inst: { value: M, getSnapshot: A } }),
      Y = N[0].inst,
      k = N[1];
    return (
      d(
        function () {
          ((Y.value = M), (Y.getSnapshot = A), y(Y) && k({ inst: Y }));
        },
        [h, M, A],
      ),
      f(
        function () {
          return (
            y(Y) && k({ inst: Y }),
            h(function () {
              y(Y) && k({ inst: Y });
            })
          );
        },
        [h],
      ),
      p(M),
      M
    );
  }
  function y(h) {
    var A = h.getSnapshot;
    h = h.value;
    try {
      var M = A();
      return !s(h, M);
    } catch {
      return !0;
    }
  }
  function g(h, A) {
    return A();
  }
  var v =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
      ? g
      : b;
  return (
    (Zs.useSyncExternalStore =
      i.useSyncExternalStore !== void 0 ? i.useSyncExternalStore : v),
    Zs
  );
}
var X0;
function rx() {
  return (X0 || ((X0 = 1), (Qs.exports = ox())), Qs.exports);
}
var ux = rx();
const sx = Ty.useInsertionEffect,
  cx =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  fx = cx ? z.useLayoutEffect : z.useEffect,
  dx = sx || fx,
  Wh = (i) => {
    const r = z.useRef([i, (...s) => r[0](...s)]).current;
    return (
      dx(() => {
        r[0] = i;
      }),
      r[1]
    );
  },
  mx = "popstate",
  hc = "pushState",
  gc = "replaceState",
  hx = "hashchange",
  k0 = [mx, hc, gc, hx],
  gx = (i) => {
    for (const r of k0) addEventListener(r, i);
    return () => {
      for (const r of k0) removeEventListener(r, i);
    };
  },
  $h = (i, r) => ux.useSyncExternalStore(gx, i, r),
  px = () => location.search,
  yx = ({ ssrSearch: i = "" } = {}) => $h(px, () => i),
  V0 = () => location.pathname,
  vx = ({ ssrPath: i } = {}) => $h(V0, i ? () => i : V0),
  bx = (i, { replace: r = !1, state: s = null } = {}) =>
    history[r ? gc : hc](s, "", i),
  xx = (i = {}) => [vx(i), bx],
  Q0 = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[Q0] > "u") {
  for (const i of [hc, gc]) {
    const r = history[i];
    history[i] = function () {
      const s = r.apply(this, arguments),
        u = new Event(i);
      return ((u.arguments = arguments), dispatchEvent(u), s);
    };
  }
  Object.defineProperty(window, Q0, { value: !0 });
}
const Sx = (i, r) =>
    r.toLowerCase().indexOf(i.toLowerCase())
      ? "~" + r
      : r.slice(i.length) || "/",
  Fh = (i = "") => (i === "/" ? "" : i),
  Ex = (i, r) => (i[0] === "~" ? i.slice(1) : Fh(r) + i),
  wx = (i = "", r) => Sx(Z0(Fh(i)), Z0(r)),
  Z0 = (i) => {
    try {
      return decodeURI(i);
    } catch {
      return i;
    }
  },
  Ph = {
    hook: xx,
    searchHook: yx,
    parser: ix,
    base: "",
    ssrPath: void 0,
    ssrSearch: void 0,
    ssrContext: void 0,
    hrefs: (i) => i,
  },
  Ih = z.createContext(Ph),
  qi = () => z.useContext(Ih),
  tg = {},
  eg = z.createContext(tg),
  Tx = () => z.useContext(eg),
  Er = (i) => {
    const [r, s] = i.hook(i);
    return [wx(i.base, r), Wh((u, f) => s(Ex(u, i.base), f))];
  },
  Ax = () => Er(qi()),
  ng = (i, r, s, u) => {
    const { pattern: f, keys: d } =
        r instanceof RegExp ? { keys: !1, pattern: r } : i(r || "*", u),
      p = f.exec(s) || [],
      [b, ...y] = p;
    return b !== void 0
      ? [
          !0,
          (() => {
            const g =
              d !== !1
                ? Object.fromEntries(d.map((h, A) => [h, y[A]]))
                : p.groups;
            let v = { ...y };
            return (g && Object.assign(v, g), v);
          })(),
          ...(u ? [b] : []),
        ]
      : [!1, null];
  },
  zx = ({ children: i, ...r }) => {
    const s = qi(),
      u = r.hook ? Ph : s;
    let f = u;
    const [d, p] = r.ssrPath?.split("?") ?? [];
    (p && ((r.ssrSearch = p), (r.ssrPath = d)),
      (r.hrefs = r.hrefs ?? r.hook?.hrefs));
    let b = z.useRef({}),
      y = b.current,
      g = y;
    for (let v in u) {
      const h = v === "base" ? u[v] + (r[v] || "") : r[v] || u[v];
      (y === g && h !== g[v] && (b.current = g = { ...g }),
        (g[v] = h),
        (h !== u[v] || h !== f[v]) && (f = g));
    }
    return z.createElement(Ih.Provider, { value: f, children: i });
  },
  K0 = ({ children: i, component: r }, s) =>
    r ? z.createElement(r, { params: s }) : typeof i == "function" ? i(s) : i,
  Ox = (i) => {
    let r = z.useRef(tg);
    const s = r.current;
    return (r.current =
      Object.keys(i).length !== Object.keys(s).length ||
      Object.entries(i).some(([u, f]) => f !== s[u])
        ? i
        : s);
  },
  Ks = ({ path: i, nest: r, match: s, ...u }) => {
    const f = qi(),
      [d] = Er(f),
      [p, b, y] = s ?? ng(f.parser, i, d, r),
      g = Ox({ ...Tx(), ...b });
    if (!p) return null;
    const v = y ? z.createElement(zx, { base: y }, K0(u, g)) : K0(u, g);
    return z.createElement(eg.Provider, { value: g, children: v });
  };
z.forwardRef((i, r) => {
  const s = qi(),
    [u, f] = Er(s),
    {
      to: d = "",
      href: p = d,
      onClick: b,
      asChild: y,
      children: g,
      className: v,
      replace: h,
      state: A,
      ...M
    } = i,
    N = Wh((k) => {
      k.ctrlKey ||
        k.metaKey ||
        k.altKey ||
        k.shiftKey ||
        k.button !== 0 ||
        (b?.(k), k.defaultPrevented || (k.preventDefault(), f(p, i)));
    }),
    Y = s.hrefs(p[0] === "~" ? p.slice(1) : s.base + p, s);
  return y && z.isValidElement(g)
    ? z.cloneElement(g, { onClick: N, href: Y })
    : z.createElement("a", {
        ...M,
        onClick: N,
        href: Y,
        className: v?.call ? v(u === p) : v,
        children: g,
        ref: r,
      });
});
const ac = (i) =>
    Array.isArray(i)
      ? i.flatMap((r) => ac(r && r.type === z.Fragment ? r.props.children : r))
      : [i],
  _x = ({ children: i, location: r }) => {
    const s = qi(),
      [u] = Er(s);
    typeof window < "u" &&
      (window.__WOUTER_ROUTES__ || (window.__WOUTER_ROUTES__ = []),
      ac(i).forEach((d) => {
        if (z.isValidElement(d) && d.props.path) {
          const p = d.props.path;
          window.__WOUTER_ROUTES__.includes(p) ||
            window.__WOUTER_ROUTES__.push(p);
        }
      }));
    for (const f of ac(i)) {
      let d = 0;
      if (
        z.isValidElement(f) &&
        (d = ng(s.parser, f.props.path, r || u, f.props.nest))[0]
      )
        return z.cloneElement(f, { match: d });
    }
    return null;
  };
function J0() {
  const [, i] = Ax(),
    r = () => {
      i("/");
    };
  return G.jsx("div", {
    "data-loc": "client/src/pages/NotFound.tsx:14",
    className:
      "min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100",
    children: G.jsx($1, {
      "data-loc": "client/src/pages/NotFound.tsx:15",
      className:
        "w-full max-w-lg mx-4 shadow-lg border-0 bg-white/80 backdrop-blur-sm",
      children: G.jsxs(F1, {
        "data-loc": "client/src/pages/NotFound.tsx:16",
        className: "pt-8 pb-8 text-center",
        children: [
          G.jsx("div", {
            "data-loc": "client/src/pages/NotFound.tsx:17",
            className: "flex justify-center mb-6",
            children: G.jsxs("div", {
              "data-loc": "client/src/pages/NotFound.tsx:18",
              className: "relative",
              children: [
                G.jsx("div", {
                  "data-loc": "client/src/pages/NotFound.tsx:19",
                  className:
                    "absolute inset-0 bg-red-100 rounded-full animate-pulse",
                }),
                G.jsx(ex, {
                  "data-loc": "client/src/pages/NotFound.tsx:20",
                  className: "relative h-16 w-16 text-red-500",
                }),
              ],
            }),
          }),
          G.jsx("h1", {
            "data-loc": "client/src/pages/NotFound.tsx:24",
            className: "text-4xl font-bold text-slate-900 mb-2",
            children: "404",
          }),
          G.jsx("h2", {
            "data-loc": "client/src/pages/NotFound.tsx:26",
            className: "text-xl font-semibold text-slate-700 mb-4",
            children: "Page Not Found",
          }),
          G.jsxs("p", {
            "data-loc": "client/src/pages/NotFound.tsx:30",
            className: "text-slate-600 mb-8 leading-relaxed",
            children: [
              "Sorry, the page you are looking for doesn't exist.",
              G.jsx("br", { "data-loc": "client/src/pages/NotFound.tsx:32" }),
              "It may have been moved or deleted.",
            ],
          }),
          G.jsx("div", {
            "data-loc": "client/src/pages/NotFound.tsx:36",
            className: "flex flex-col sm:flex-row gap-3 justify-center",
            children: G.jsxs(W1, {
              "data-loc": "client/src/pages/NotFound.tsx:37",
              onClick: r,
              className:
                "bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg",
              children: [
                G.jsx(nx, {
                  "data-loc": "client/src/pages/NotFound.tsx:41",
                  className: "w-4 h-4 mr-2",
                }),
                "Go Home",
              ],
            }),
          }),
        ],
      }),
    }),
  });
}
class Mx extends z.Component {
  constructor(r) {
    (super(r), (this.state = { hasError: !1, error: null }));
  }
  static getDerivedStateFromError(r) {
    return { hasError: !0, error: r };
  }
  render() {
    return this.state.hasError
      ? G.jsx("div", {
          "data-loc": "client/src/components/ErrorBoundary.tsx:27",
          className:
            "flex items-center justify-center min-h-screen p-8 bg-background",
          children: G.jsxs("div", {
            "data-loc": "client/src/components/ErrorBoundary.tsx:28",
            className: "flex flex-col items-center w-full max-w-2xl p-8",
            children: [
              G.jsx(lx, {
                "data-loc": "client/src/components/ErrorBoundary.tsx:29",
                size: 48,
                className: "text-destructive mb-6 flex-shrink-0",
              }),
              G.jsx("h2", {
                "data-loc": "client/src/components/ErrorBoundary.tsx:34",
                className: "text-xl mb-4",
                children: "An unexpected error occurred.",
              }),
              G.jsx("div", {
                "data-loc": "client/src/components/ErrorBoundary.tsx:36",
                className: "p-4 w-full rounded bg-muted overflow-auto mb-6",
                children: G.jsx("pre", {
                  "data-loc": "client/src/components/ErrorBoundary.tsx:37",
                  className:
                    "text-sm text-muted-foreground whitespace-break-spaces",
                  children: this.state.error?.stack,
                }),
              }),
              G.jsxs("button", {
                "data-loc": "client/src/components/ErrorBoundary.tsx:42",
                onClick: () => window.location.reload(),
                className: xr(
                  "flex items-center gap-2 px-4 py-2 rounded-lg",
                  "bg-primary text-primary-foreground",
                  "hover:opacity-90 cursor-pointer",
                ),
                children: [
                  G.jsx(ax, {
                    "data-loc": "client/src/components/ErrorBoundary.tsx:50",
                    size: 16,
                  }),
                  "Reload Page",
                ],
              }),
            ],
          }),
        })
      : this.props.children;
  }
}
const Cx = z.createContext(void 0);
function Rx({ children: i, defaultTheme: r = "light", switchable: s = !1 }) {
  const [u, f] = z.useState(() => (s && localStorage.getItem("theme")) || r);
  z.useEffect(() => {
    const p = document.documentElement;
    (u === "dark" ? p.classList.add("dark") : p.classList.remove("dark"),
      s && localStorage.setItem("theme", u));
  }, [u, s]);
  const d = s
    ? () => {
        f((p) => (p === "light" ? "dark" : "light"));
      }
    : void 0;
  return G.jsx(Cx.Provider, {
    "data-loc": "client/src/contexts/ThemeContext.tsx:52",
    value: { theme: u, toggleTheme: d, switchable: s },
    children: i,
  });
}
const W0 =
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663443014756/NmjdbD9xBHmcnN5Q7RdEea/write_poem_bg1_opening_437b8fce.png",
  Nx =
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663443014756/NmjdbD9xBHmcnN5Q7RdEea/write_poem_bg2_reward_4af23ca9.png",
  Dx =
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663443014756/NmjdbD9xBHmcnN5Q7RdEea/write_poem_bg3_ending_b653259d.png",
  $0 =
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663443014756/NmjdbD9xBHmcnN5Q7RdEea/bg_cherry_blossom-KrirBdfJAYqe5zcwsn3fL4.webp",
  Hx =
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663443014756/NmjdbD9xBHmcnN5Q7RdEea/bg_monet_bridge-UDNCREVJikLW74Kcj4GKgX.webp",
  jx =
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663443014756/NmjdbD9xBHmcnN5Q7RdEea/bg_couple_silhouette-8o2LJGPbGZiDfjqi9HvPuj.webp",
  Bx =
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663443014756/NmjdbD9xBHmcnN5Q7RdEea/bg_gifts_treasure-XS4TgJ5Si4AePHCBydPsoY.webp",
  LoaderIcon = "./assets/picopico-loading-icon.jpg",
  MvBg1 = "./assets/yingtao-shuxia.mp4",
  MvBg2 = "./assets/mingyue-gaoxuan.mp4",
  MvLove1 = "./assets/aide-niantou.mp4",
  MvLove2 = "./assets/tou-toudewen.mp4",
  MvEnding = "./assets/huaduo-fangxin.mp4",
  Ux =
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663443014756/NmjdbD9xBHmcnN5Q7RdEea/spring_between_notes_5cb89a3e.m4a",
  La = [
    {
      id: 0,
      bg: W0,
      duration: 4000,
      kenBurns: { from: "scale(1.0)", to: "scale(1.06) translate(0%, -1%)" },
      video: MvBg1,
      textPosition: "center",
      hideWatermark: !0,
      texts: [
        { content: "PicoPico", type: "brand-big", delay: 200 },
        { content: "春日浪漫企划", type: "subtitle-grand", delay: 600 },
        { content: "3月30日  满春开启", type: "date-grand", delay: 1200 },
      ],
    },
    {
      id: 1,
      bg: W0,
      duration: 5000,
      kenBurns: {
        from: "scale(1.06) translate(0%, -1%)",
        to: "scale(1.12) translate(-1%, -2%)",
      },
      video: MvBg2,
      textPosition: "center",
      hideWatermark: !0,
      texts: [
        { content: "《为你写诗》", type: "title-art", delay: 180 },
        { content: "如果春天有声音，", type: "poem-line", delay: 1900 },
        {
          content: "那一定是我在耳边念你的名字~",
          type: "poem-line-2",
          delay: 2550,
        },
      ],
    },
    {
      id: 2,
      bg: jx,
      duration: 6000,
      kenBurns: {
        from: "scale(1.0) translate(0%, 0%)",
        to: "scale(1.1) translate(1%, -1%)",
      },
      videoSequence: [MvLove1, MvLove2],
      sequenceSplitMs: 3000,
      textPosition: "center",
      texts: [
        { content: "满春情谊", type: "impact-kicker", delay: 180 },
        { content: "想把最好的春天，都送给你", type: "glory-main", delay: 460 },
      ],
    },
    {
      id: 3,
      bg: Hx,
      duration: 4000,
      kenBurns: {
        from: "scale(1.05) translate(1%, 0%)",
        to: "scale(1.15) translate(-1%, -2%)",
      },
      textPosition: "center-upper",
      texts: [
        { content: "春天礼物", type: "impact-kicker", delay: 180 },
        { content: "你念诗句，我回心意", type: "impact-main", delay: 460 },
      ],
      gifts: [
        {
          title: "星月相机",
          accent: "夜空花影",
      image: "./assets/10.png",
          background:
            "radial-gradient(circle at 30% 20%, rgba(255,243,200,0.28), transparent 42%), linear-gradient(180deg, rgba(39,49,118,0.96) 0%, rgba(111,126,199,0.82) 100%)",
        },
        {
          title: "樱花春酿",
          accent: "微醺花宴",
      image: "./assets/14.png",
          background:
            "radial-gradient(circle at 50% 18%, rgba(255,255,255,0.4), transparent 35%), linear-gradient(180deg, rgba(255,219,228,0.94) 0%, rgba(173,220,170,0.82) 100%)",
        },
        {
          title: "花漾茶壶",
          accent: "春日茶会",
      image: "./assets/15.png",
          background:
            "radial-gradient(circle at 50% 18%, rgba(255,255,255,0.52), transparent 36%), linear-gradient(180deg, rgba(255,234,244,0.96) 0%, rgba(255,201,226,0.82) 100%)",
        },
        {
          title: "铃兰提琴",
          accent: "花海奏鸣",
      image: "./assets/4.png",
          background:
            "radial-gradient(circle at 35% 20%, rgba(255,255,255,0.4), transparent 38%), linear-gradient(180deg, rgba(166,222,255,0.94) 0%, rgba(255,194,222,0.84) 100%)",
        },
      ],
    },
    {
      id: 4,
      bg: Nx,
      duration: 4000,
      kenBurns: {
        from: "scale(1.1) translate(-1%, 0%)",
        to: "scale(1.0) translate(1%, 1%)",
      },
      textPosition: "bottom",
    heroImage: "./assets/langman-zuojia.png",
      texts: [
        { content: "浪漫座驾", type: "reward-badge", delay: 160 },
        { content: "桃林深处，拥吻你", type: "reward", delay: 420 },
      ],
    },
    {
      id: 5,
      bg: Bx,
      duration: 4000,
      kenBurns: {
        from: "scale(1.05) translate(1%, 0%)",
        to: "scale(1.15) translate(-1%, -2%)",
      },
      textPosition: "center",
      texts: [
        { content: "花丛宝箱", type: "impact-kicker", delay: 180 },
        { content: "用诗人的浪漫，替你开口", type: "impact-main", delay: 460 },
      ],
    },
    {
      id: 6,
      bg: Dx,
      duration: 999999,
      kenBurns: {
        from: "scale(1.0) translate(0%, 1%)",
        to: "scale(1.08) translate(-1%, -1%)",
      },
      video: MvEnding,
      textPosition: "center",
      texts: [
        { content: "《为你写诗》", type: "hero", delay: 200 },
        { content: "来PicoPico，遇见你的春日悸动", type: "tagline", delay: 860 },
        { content: "3月30日，浪漫开启", type: "date", delay: 1560 },
      ],
    },
  ];
function Lx() {
  const i = z.useRef(null);
  return (
    z.useEffect(() => {
      const r = i.current;
      if (!r) return;
      const s = r.getContext("2d"),
        u = () => {
          ((r.width = window.innerWidth), (r.height = window.innerHeight));
        };
      (u(), window.addEventListener("resize", u));
      const f = [
          "rgba(255,182,203,0.6)",
          "rgba(199,125,255,0.4)",
          "rgba(255,228,240,0.5)",
          "rgba(255,255,255,0.35)",
          "rgba(212,175,130,0.3)",
        ],
        d = (g = !1) => ({
          x: Math.random() * r.width,
          y: g ? Math.random() * r.height : -10 - Math.random() * 80,
          s: 3 + Math.random() * 7,
          vx: -0.2 + Math.random() * 0.4,
          vy: 0.35 + Math.random() * 0.8,
          r: Math.random() * Math.PI * 2,
          vr: -0.015 + Math.random() * 0.03,
          o: 0.2 + Math.random() * 0.4,
          col: f[Math.floor(Math.random() * f.length)],
          wobble: Math.random() * Math.PI * 2,
          wobbleSpeed: 0.015 + Math.random() * 0.025,
        }),
        p = Array.from({ length: 35 }, () => d(!0));
      let b;
      const y = () => {
        s.clearRect(0, 0, r.width, r.height);
        for (let g = p.length - 1; g >= 0; g--) {
          const v = p[g];
          ((v.wobble += v.wobbleSpeed),
            (v.x += v.vx + Math.sin(v.wobble) * 0.25),
            (v.y += v.vy),
            (v.r += v.vr),
            s.save(),
            s.translate(v.x, v.y),
            s.rotate(v.r),
            (s.globalAlpha = v.o),
            (s.fillStyle = v.col),
            s.beginPath(),
            s.ellipse(0, 0, v.s, v.s * 0.55, 0, 0, Math.PI * 2),
            s.fill(),
            s.beginPath(),
            s.ellipse(
              v.s * 0.3,
              v.s * 0.15,
              v.s * 0.7,
              v.s * 0.4,
              0.4,
              0,
              Math.PI * 2,
            ),
            s.fill(),
            s.restore(),
            v.y > r.height + 30 && (p[g] = d()));
        }
        b = requestAnimationFrame(y);
      };
      return (
        y(),
        () => {
          (cancelAnimationFrame(b), window.removeEventListener("resize", u));
        }
      );
    }, []),
    G.jsx("canvas", {
      "data-loc": "client/src/pages/Home.tsx:231",
      ref: i,
      className: "fixed inset-0 pointer-events-none",
      style: { zIndex: 30 },
    })
  );
}
function Yx() {
  const i = z.useRef(
    Array.from({ length: 14 }).map(() => ({
      w: 2 + Math.random() * 4,
      left: 10 + Math.random() * 80,
      top: 10 + Math.random() * 80,
      opacity: 0.4 + Math.random() * 0.4,
      dur: 3 + Math.random() * 4,
      delay: Math.random() * 3,
    })),
  ).current;
  return G.jsx("div", {
    "data-loc": "client/src/pages/Home.tsx:248",
    className: "fixed inset-0 pointer-events-none",
    style: { zIndex: 28 },
    children: i.map((r, s) =>
      G.jsx(
        "div",
        {
          "data-loc": "client/src/pages/Home.tsx:250",
          className: "absolute rounded-full",
          style: {
            width: r.w,
            height: r.w,
            left: `${r.left}%`,
            top: `${r.top}%`,
            background: `radial-gradient(circle, rgba(255,215,0,${r.opacity}) 0%, transparent 70%)`,
            animation: `sparkle ${r.dur}s ease-in-out ${r.delay}s infinite alternate`,
          },
        },
        s,
      ),
    ),
  });
}
function qx({ content: i, type: r, visible: s, delay: u }) {
  const [f, d] = z.useState(!1);
  z.useEffect(() => {
    if (s) {
      const y = setTimeout(() => d(!0), u);
      return () => clearTimeout(y);
    }
    d(!1);
  }, [s, u]);
  const p = {
      "brand-big": {
        fontFamily: "'Playfair Display', 'Noto Serif SC', serif",
        fontSize: "clamp(2.2rem, 9vw, 3.2rem)",
        fontWeight: 700,
        fontStyle: "italic",
        color: "#fff",
        letterSpacing: "0.18em",
        textShadow:
          "0 4px 40px rgba(0,0,0,0.6), 0 0 80px rgba(199,125,255,0.3)",
        lineHeight: 1.3,
      },
      "subtitle-grand": {
        fontFamily: "'Noto Serif SC', serif",
        fontSize: "clamp(1.25rem, 4.8vw, 1.7rem)",
        fontWeight: 700,
        color: "rgba(255,244,232,0.96)",
        letterSpacing: "0.38em",
        marginTop: "0.6rem",
        textShadow: "0 2px 20px rgba(0,0,0,0.5)",
      },
      "date-grand": {
        fontFamily: "'Noto Sans SC', sans-serif",
        fontSize: "clamp(0.78rem, 2.7vw, 1rem)",
        fontWeight: 400,
        color: "rgba(255,255,255,0.82)",
        letterSpacing: "0.34em",
        marginTop: "1.2rem",
        paddingTop: "0.8rem",
        borderTop: "1px solid rgba(255,255,255,0.2)",
        display: "inline-block",
      },
      "title-mega": {
        fontFamily: "'Noto Serif SC', serif",
        fontSize: "clamp(3rem, 14vw, 5rem)",
        fontWeight: 900,
        color: "#fff",
        letterSpacing: "0.12em",
        textShadow:
          "0 6px 50px rgba(0,0,0,0.6), 0 0 100px rgba(199,125,255,0.35), 0 0 200px rgba(255,182,203,0.15)",
        lineHeight: 1.2,
      },
      "title-art": {
        fontFamily:
          "'Cormorant Garamond', 'Playfair Display', 'Noto Serif SC', serif",
        fontSize: "clamp(3rem, 13.6vw, 5rem)",
        fontWeight: 700,
        fontStyle: "italic",
        color: "#fff7f0",
        letterSpacing: "0.04em",
        textShadow:
          "0 10px 56px rgba(0,0,0,0.68), 0 0 120px rgba(214,187,255,0.28)",
        lineHeight: 1.16,
      },
      brand: {
        fontFamily: "'Playfair Display', serif",
        fontSize: "clamp(0.9rem, 2.5vw, 1.2rem)",
        fontWeight: 400,
        fontStyle: "italic",
        color: "rgba(255,255,255,0.8)",
        letterSpacing: "0.4em",
        marginBottom: "0.5rem",
      },
      hero: {
        fontFamily: "'Noto Serif SC', serif",
        fontSize: "clamp(2.1rem, 8.6vw, 3.2rem)",
        fontWeight: 900,
        color: "#fff",
        letterSpacing: "0.11em",
        textShadow:
          "0 4px 30px rgba(0,0,0,0.5), 0 0 80px rgba(199,125,255,0.25)",
        lineHeight: 1.3,
      },
      "hero-small": {
        fontFamily: "'Noto Serif SC', serif",
        fontSize: "clamp(1.7rem, 6.8vw, 2.5rem)",
        fontWeight: 700,
        color: "#fff",
        letterSpacing: "0.08em",
        textShadow:
          "0 4px 30px rgba(0,0,0,0.5), 0 0 60px rgba(199,125,255,0.2)",
        lineHeight: 1.3,
      },
      tagline: {
        fontFamily: "'Noto Sans SC', sans-serif",
        fontSize: "clamp(0.92rem, 3.2vw, 1.16rem)",
        fontWeight: 400,
        color: "rgba(255,255,255,0.92)",
        letterSpacing: "0.18em",
        marginTop: "0.38rem",
        lineHeight: 1.6,
      },
      "impact-kicker": {
        fontFamily: "'Noto Sans SC', sans-serif",
        fontSize: "clamp(0.82rem, 2.9vw, 1rem)",
        fontWeight: 700,
        color: "#ffd8a8",
        letterSpacing: "0.28em",
        textTransform: "uppercase",
        textShadow: "0 2px 20px rgba(0,0,0,0.5), 0 0 30px rgba(255,191,105,0.18)",
        marginBottom: "0.55rem",
      },
      "impact-main": {
        fontFamily: "'Noto Serif SC', serif",
        fontSize: "clamp(2.1rem, 8.8vw, 3.4rem)",
        fontWeight: 900,
        color: "#fff7ee",
        letterSpacing: "0.08em",
        textShadow:
          "0 8px 50px rgba(0,0,0,0.68), 0 0 90px rgba(255,182,145,0.28)",
        lineHeight: 1.18,
      },
      "poem-line": {
        fontFamily: "'Noto Serif SC', serif",
        fontSize: "clamp(1.36rem, 5.2vw, 1.95rem)",
        fontWeight: 700,
        color: "#fff",
        letterSpacing: "0.11em",
        textShadow:
          "0 2px 24px rgba(0,0,0,0.45), 0 0 50px rgba(199,125,255,0.2)",
        lineHeight: 1.5,
      },
      "poem-line-2": {
        fontFamily: "'Noto Serif SC', serif",
        fontSize: "clamp(1.34rem, 5vw, 1.86rem)",
        fontWeight: 600,
        color: "rgba(255,255,255,0.95)",
        letterSpacing: "0.09em",
        textShadow: "0 2px 24px rgba(0,0,0,0.45)",
        lineHeight: 1.5,
        marginTop: "0.3rem",
      },
      feature: {
        fontFamily: "'Noto Sans SC', sans-serif",
        fontSize: "clamp(0.8rem, 2.8vw, 1rem)",
        fontWeight: 400,
        color: "rgba(255,255,255,0.8)",
        letterSpacing: "0.25em",
        marginBottom: "0.5rem",
      },
      label: {
        fontFamily: "'Noto Sans SC', sans-serif",
        fontSize: "clamp(0.82rem, 2.8vw, 0.98rem)",
        fontWeight: 500,
        color: "rgba(255,245,230,0.84)",
        letterSpacing: "0.22em",
        marginBottom: "0.45rem",
        textTransform: "uppercase",
      },
      "reward-badge": {
        fontFamily: "'Noto Sans SC', sans-serif",
        fontSize: "clamp(0.88rem, 3vw, 1.04rem)",
        fontWeight: 700,
        color: "#ffe4b8",
        letterSpacing: "0.26em",
        marginBottom: "0.55rem",
        textTransform: "uppercase",
        textShadow: "0 2px 18px rgba(0,0,0,0.5), 0 0 36px rgba(255,208,108,0.25)",
      },
      reward: {
        fontFamily: "'Noto Serif SC', serif",
        fontSize: "clamp(1.95rem, 7vw, 2.85rem)",
        fontWeight: 900,
        color: "#FFD700",
        letterSpacing: "0.04em",
        textShadow:
          "0 4px 28px rgba(212,165,116,0.82), 0 0 62px rgba(255,215,0,0.36)",
        lineHeight: 1.3,
      },
      "glory-main": {
        fontFamily: "'Noto Serif SC', serif",
        fontSize: "clamp(2rem, 8.4vw, 3.1rem)",
        fontWeight: 900,
        color: "#fff1cf",
        letterSpacing: "0.07em",
        textShadow:
          "0 6px 42px rgba(0,0,0,0.65), 0 0 80px rgba(255,215,143,0.28)",
        lineHeight: 1.22,
      },
      date: {
        fontFamily: "'Noto Sans SC', sans-serif",
        fontSize: "clamp(0.9rem, 2.9vw, 1.04rem)",
        fontWeight: 500,
        color: "rgba(255,255,255,0.94)",
        letterSpacing: "0.24em",
        marginTop: "1.2rem",
        paddingTop: "0.8rem",
        borderTop: "1px solid rgba(255,255,255,0.25)",
        display: "inline-block",
      },
    },
    b =
      r === "title-mega" ||
      r === "title-art" ||
      r === "impact-main" ||
      r === "glory-main" ||
      r === "reward";
  return G.jsx("div", {
    "data-loc": "client/src/pages/Home.tsx:420",
    style: {
      opacity: f ? 1 : 0,
      transform: f
        ? b
          ? "translateY(0) scale(1)"
          : "translateY(0)"
        : b
          ? "translateY(0) scale(0.85)"
          : "translateY(18px)",
      transition: b
        ? "opacity 1.05s cubic-bezier(0.16,1,0.3,1), transform 1.05s cubic-bezier(0.16,1,0.3,1)"
        : "opacity 0.75s cubic-bezier(0.25,0.46,0.45,0.94), transform 0.75s cubic-bezier(0.25,0.46,0.45,0.94)",
      textShadow: "0 2px 20px rgba(0,0,0,0.35)",
      ...(p[r] || {}),
    },
    children: i,
  });
}
function Gx({
  src: i,
  active: r,
  kenBurns: s,
  video: u,
  videoSequence: f,
  sequenceSplitMs: d,
  elapsedMs: p,
}) {
  const b =
    r && f?.length
      ? f[Math.min(f.length - 1, Math.floor(p / (d || 3000)))]
      : u;
  return G.jsxs("div", {
    "data-loc": "client/src/pages/Home.tsx:443",
    className: "absolute inset-0",
    style: {
      opacity: r ? 1 : 0,
      transition: "opacity 1.2s ease-in-out",
      zIndex: r ? 10 : 5,
    },
    children: [
      b
        ? G.jsx("video", {
            "data-loc": "client/src/pages/Home.tsx:451",
            className: "absolute inset-0 w-full h-full object-cover",
            key: b,
            src: b,
            autoPlay: !0,
            muted: !0,
            loop: !f,
            playsInline: !0,
            preload: "auto",
            style: {
              transform: r ? s.to : s.from,
              transition: "transform 5.5s cubic-bezier(0.25,0.46,0.45,0.94)",
            },
          })
        : G.jsx("div", {
            "data-loc": "client/src/pages/Home.tsx:451",
            className: "absolute inset-0 bg-cover bg-center",
            style: {
              backgroundImage: `url(${i})`,
              transform: r ? s.to : s.from,
              transition: "transform 5.5s cubic-bezier(0.25,0.46,0.45,0.94)",
            },
          }),
      G.jsx("div", {
        "data-loc": "client/src/pages/Home.tsx:459",
        className: "absolute inset-0",
        style: {
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.5) 100%)",
          zIndex: 11,
        },
      }),
    ],
  });
}
function Xx({ visible: i }) {
  return G.jsx("div", {
    "data-loc": "client/src/pages/Home.tsx:473",
    className:
      "fixed top-0 left-0 right-0 flex items-center justify-center pt-12 pointer-events-none",
    style: { zIndex: 35, opacity: i ? 1 : 0, transition: "opacity 0.8s ease" },
    children: G.jsxs("div", {
      "data-loc": "client/src/pages/Home.tsx:481",
      className: "flex items-center gap-3",
      children: [
        G.jsx("span", {
          "data-loc": "client/src/pages/Home.tsx:482",
          style: {
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(0.65rem, 2vw, 0.8rem)",
            fontWeight: 400,
            fontStyle: "italic",
            color: "rgba(255,255,255,0.55)",
            letterSpacing: "0.3em",
          },
          children: "PicoPico",
        }),
        G.jsx("span", {
          "data-loc": "client/src/pages/Home.tsx:494",
          style: {
            width: "1px",
            height: "12px",
            background: "rgba(255,255,255,0.25)",
            display: "inline-block",
          },
        }),
        G.jsx("span", {
          "data-loc": "client/src/pages/Home.tsx:502",
          style: {
            fontFamily: "'Noto Serif SC', serif",
            fontSize: "clamp(0.65rem, 2vw, 0.8rem)",
            fontWeight: 500,
            color: "rgba(255,255,255,0.55)",
            letterSpacing: "0.2em",
          },
          children: "为你写诗",
        }),
      ],
    }),
  });
}
function kx() {
  const [i, r] = z.useState(0),
    [s, u] = z.useState(!1),
    [f, d] = z.useState(!1),
    [p, b] = z.useState(!1),
    [y, g] = z.useState(!0),
    [Z0, J0] = z.useState(0),
    [Q0, K0] = z.useState(!1),
    [R0, T0] = z.useState(0),
    v = z.useRef(null),
    h = z.useRef(null),
    A0 = z.useRef({ x: 0, y: 0 }),
    q0 = z.useRef(!1),
    Y0 = z.useRef(Date.now());
  (z.useEffect(() => {
    const R = new Audio(Ux);
    ((R.loop = !0),
      (R.volume = 0.6),
      (R.preload = "auto"),
      (h.current = R),
      R.addEventListener("canplaythrough", () => b(!0)));
    return () => {
      (R.pause(), (R.src = ""));
    };
  }, []),
    z.useEffect(() => {
      const R = h.current;
      R && (s ? R.play().catch(() => {}) : R.pause());
    }, [s]));
  const A = z.useCallback(() => {
    const R = h.current;
    (r(0),
      (Y0.current = Date.now()),
      J0(0),
      g(!1),
      u(!0),
      R &&
        R.play()
          .then(() => {})
          .catch(() => {}));
  }, []);
  const M = z.useCallback(() => r((R) => (R + 1) % La.length), []);
  const N0 = z.useCallback(
    () => r((R) => (R - 1 + La.length) % La.length),
    [],
  );
  const D0 = z.useCallback((R) => {
    if (y) return;
    const W = R.target;
    if (q0.current) {
      q0.current = !1;
      return;
    }
    if (W instanceof Element && W.closest("button")) return;
    u(($) => !$);
  }, [y]);
  const $0 = z.useCallback((R) => {
    const W = R.touches[0];
    W && (A0.current = { x: W.clientX, y: W.clientY });
  }, []);
  const H0 = z.useCallback(
    (R) => {
      if (y) return;
      const W = R.changedTouches[0];
      if (!W) return;
      const J = W.clientX - A0.current.x,
        $ = W.clientY - A0.current.y,
        nt = Math.abs(J),
        ct = Math.abs($);
      if (Math.max(nt, ct) < 36) return;
      if (((q0.current = !0), nt >= ct)) {
        J < 0 ? M() : N0();
        return;
      }
      $ < 0 ? M() : N0();
    },
    [y, M, N0],
  );
  z.useEffect(() => {
    (Y0.current = Date.now()), J0(0);
  }, [i]);
  z.useEffect(() => {
    K0(!1);
  }, [i]);
  z.useEffect(() => {
    if (!s) return;
    const R = setInterval(() => {
      J0(Date.now() - Y0.current);
    }, 100);
    return () => clearInterval(R);
  }, [i, s]);
  z.useEffect(() => {
    const R = Array.from(new Set([LoaderIcon, ...La.map((J) => J.bg)].filter(Boolean)));
    let W = 0;
    T0(0);
    R.forEach((J) => {
      const $ = new Image();
      (($.onload = $.onerror =
        () => {
          (W++, T0(Math.round((W / R.length) * 100)), W >= R.length && d(!0));
        }),
        ($.src = J));
    });
  }, []);
  if (
    (z.useEffect(() => {
      if (!(!s || !f || y))
        return (
          (v.current = setTimeout(M, La[i].duration)),
          () => {
            v.current && clearTimeout(v.current);
          }
        );
    }, [i, s, f, y, M]),
    !f)
  )
    return G.jsxs("div", {
      className: "fixed inset-0 bg-[#0b0b12] flex flex-col items-center justify-center px-8",
      children: [
        G.jsx("img", {
          src: LoaderIcon,
          alt: "PicoPico",
          style: {
            width: "88px",
            height: "88px",
            borderRadius: "22px",
            objectFit: "cover",
            boxShadow: "0 12px 34px rgba(0,0,0,0.28)",
            marginBottom: "1.2rem",
          },
        }),
        G.jsx("div", {
          style: {
            fontFamily: "'Noto Serif SC', serif",
            fontSize: "1.12rem",
            color: "#fff6ef",
            letterSpacing: "0.08em",
            textAlign: "center",
            marginBottom: "0.45rem",
          },
          children: "PicoPico 春日浪漫企划",
        }),
        G.jsx("div", {
          style: {
            fontFamily: "'Noto Sans SC', sans-serif",
            fontSize: "0.82rem",
            color: "rgba(255,255,255,0.62)",
            letterSpacing: "0.18em",
            textAlign: "center",
            marginBottom: "1rem",
          },
          children: "加载中...",
        }),
        G.jsx("div", {
          style: {
            width: "min(72vw, 240px)",
            height: "6px",
            borderRadius: "999px",
            background: "rgba(255,255,255,0.12)",
            overflow: "hidden",
            marginBottom: "0.55rem",
          },
          children: G.jsx("div", {
            style: {
              width: `${R0}%`,
              height: "100%",
              borderRadius: "999px",
              background:
                "linear-gradient(90deg, rgba(255,205,221,0.95), rgba(255,241,224,0.95))",
              transition: "width 0.35s ease",
            },
          }),
        }),
        G.jsx("div", {
          style: {
            fontFamily: "'Noto Sans SC', sans-serif",
            fontSize: "0.76rem",
            color: "rgba(255,255,255,0.42)",
            letterSpacing: "0.16em",
          },
          children: `${R0}%`,
        }),
      ],
    });
  const N = {
      "center-upper": { top: "28%", transform: "translateY(-50%)" },
      center: { top: "45%", transform: "translateY(-50%)" },
      "center-lower": { top: "55%", transform: "translateY(-50%)" },
      bottom: { bottom: "14%", transform: "translateY(0)" },
      top: { top: "12%", transform: "translateY(0)" },
    },
    k = !La[i].hideWatermark,
    tt = !y && i === La.length - 1,
    et = tt && Z0 >= 5000;
  return G.jsxs("div", {
    "data-loc": "client/src/pages/Home.tsx:675",
    className: "fixed inset-0 overflow-hidden bg-black",
    onClick: D0,
    onTouchStart: $0,
    onTouchEnd: H0,
    children: [
      La.map((R, W) =>
        G.jsx(
          Gx,
          {
            "data-loc": "client/src/pages/Home.tsx:678",
            src: R.bg,
            video: R.video,
            videoSequence: R.videoSequence,
            sequenceSplitMs: R.sequenceSplitMs,
            elapsedMs: i === W ? Z0 : 0,
            active: i === W,
            kenBurns: R.kenBurns,
          },
          R.id,
        ),
      ),
      G.jsx(Yx, { "data-loc": "client/src/pages/Home.tsx:682" }),
      G.jsx(Lx, { "data-loc": "client/src/pages/Home.tsx:685" }),
      G.jsx(Xx, { "data-loc": "client/src/pages/Home.tsx:688", visible: k }),
      La.map((R, W) =>
        G.jsx(
          "div",
          {
            "data-loc": "client/src/pages/Home.tsx:692",
            className:
              "fixed left-0 right-0 flex flex-col items-center text-center px-8",
            style: {
              zIndex: 20,
              opacity: i === W ? 1 : 0,
              transition: "opacity 0.8s ease",
              pointerEvents: "none",
              ...(N[R.textPosition] || N.center),
            },
            children: R.texts.map((J, $) =>
              G.jsx(
                qx,
                {
                  "data-loc": "client/src/pages/Home.tsx:704",
                  content: J.content,
                  type: J.type,
                  visible: i === W,
                  delay: J.delay,
                },
                $,
              ),
            ),
          },
          R.id,
        ),
      ),
      La.map((R, W) =>
        R.gifts
          ? G.jsx(
              "div",
              {
                className: "fixed left-0 right-0 px-6 pointer-events-none",
                style: {
                  zIndex: 22,
                  top: "54%",
                  opacity: i === W ? 1 : 0,
                  transition: "opacity 0.8s ease",
                },
                children: G.jsx("div", {
                  style: {
                    width: "min(86vw, 340px)",
                    margin: "0 auto",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "10px",
                  },
                  children: R.gifts.map((J, $) =>
                    G.jsxs(
                      "div",
                      {
                        style: {
                          aspectRatio: "1 / 1",
                          borderRadius: "18px",
                          background: J.background,
                          border: "1px solid rgba(255,255,255,0.3)",
                          boxShadow:
                            "0 10px 32px rgba(0,0,0,0.24), inset 0 1px 0 rgba(255,255,255,0.28)",
                          backdropFilter: "blur(8px)",
                          padding: "12px",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-end",
                          overflow: "hidden",
                          position: "relative",
                        },
                        children: [
                          J.image
                            ? G.jsx("img", {
                                src: J.image,
                                alt: J.title,
                                style: {
                                  position: "absolute",
                                  inset: "0",
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                },
                              })
                            : null,
                          G.jsx("div", {
                            style: {
                              position: "absolute",
                              inset: "0",
                              background: J.image
                                ? "linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0) 36%, rgba(0,0,0,0.3) 100%)"
                                : "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 36%, rgba(0,0,0,0.15) 100%)",
                            },
                          }),
                          G.jsx("div", {
                            style: {
                              position: "relative",
                              fontFamily: "'Noto Serif SC', serif",
                              fontSize: "clamp(0.92rem, 3.4vw, 1.06rem)",
                              fontWeight: 700,
                              color: "#fffaf2",
                              textShadow: "0 2px 12px rgba(0,0,0,0.35)",
                              letterSpacing: "0.08em",
                            },
                            children: J.title,
                          }),
                          G.jsx("div", {
                            style: {
                              position: "relative",
                              marginTop: "0.24rem",
                              fontFamily: "'Noto Sans SC', sans-serif",
                              fontSize: "clamp(0.62rem, 2.4vw, 0.72rem)",
                              fontWeight: 500,
                              color: "rgba(255,255,255,0.82)",
                              letterSpacing: "0.16em",
                            },
                            children: J.accent,
                          }),
                        ],
                      },
                      $,
                    ),
                  ),
                }),
              },
              `gift-grid-${R.id}`,
            )
          : null,
      ),
      La.map((R, W) =>
        R.heroImage
          ? G.jsx(
              "div",
              {
                className: "fixed left-0 right-0 pointer-events-none",
                style: {
                  zIndex: 23,
                  top: "58%",
                  transform: "translateY(-50%)",
                  opacity: i === W ? 1 : 0,
                  transition: "opacity 0.8s ease",
                },
                children: G.jsx("div", {
                  style: {
                    width: "min(84vw, 360px)",
                    margin: "0 auto",
                    borderRadius: "24px",
                    padding: "12px",
                    background:
                      "linear-gradient(180deg, rgba(255,248,250,0.14) 0%, rgba(255,237,244,0.08) 100%)",
                    border: "1px solid rgba(255,232,240,0.34)",
                    boxShadow:
                      "0 14px 38px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.22)",
                    backdropFilter: "blur(8px)",
                  },
                  children: G.jsx("img", {
                    src: R.heroImage,
                    alt: "reward hero",
                    style: {
                      display: "block",
                      width: "100%",
                      filter:
                        "drop-shadow(0 18px 34px rgba(0,0,0,0.28)) drop-shadow(0 0 26px rgba(255,214,236,0.28))",
                    },
                  }),
                }),
              },
              `hero-image-${R.id}`,
            )
          : null,
      ),
      G.jsx("div", {
        "data-loc": "client/src/pages/Home.tsx:716",
        className: "fixed left-1/2 -translate-x-1/2 pointer-events-none",
        style: {
          top: "22%",
          width: "40px",
          height: "1px",
          background: "rgba(255,255,255,0.3)",
          zIndex: 20,
          opacity: i === 2 || i === 6 ? 1 : 0,
          transition: "opacity 1s ease",
        },
      }),
      G.jsx("div", {
        "data-loc": "client/src/pages/Home.tsx:730",
        className: "fixed top-0 left-0 right-0 h-28 pointer-events-none",
        style: {
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.35), transparent)",
          zIndex: 25,
        },
      }),
      y
        ? G.jsxs("button", {
            onClick: (R) => {
              R.stopPropagation();
              A();
            },
            className:
              "fixed left-1/2 top-[63%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-3 rounded-full px-5 py-3 backdrop-blur-md",
            style: {
              zIndex: 55,
              background: "rgba(17,17,22,0.42)",
              border: "1px solid rgba(255,255,255,0.24)",
              boxShadow: "0 12px 40px rgba(0,0,0,0.28)",
              color: "#fffaf3",
            },
            children: [
              G.jsx("span", {
                style: {
                  width: "38px",
                  height: "38px",
                  borderRadius: "999px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(255,255,255,0.14)",
                  border: "1px solid rgba(255,255,255,0.18)",
                },
                children: G.jsx("svg", {
                  width: "14",
                  height: "14",
                  viewBox: "0 0 12 12",
                  fill: "currentColor",
                  children: G.jsx("polygon", {
                    points: "1,0 12,6 1,12",
                  }),
                }),
              }),
              G.jsxs("span", {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                },
                children: [
                  G.jsx("span", {
                    style: {
                      fontFamily: "'Noto Sans SC', sans-serif",
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      letterSpacing: "0.12em",
                    },
                    children: "开启播放",
                  }),
                  G.jsx("span", {
                    style: {
                      fontFamily: "'Noto Sans SC', sans-serif",
                      fontSize: "0.72rem",
                      color: "rgba(255,250,243,0.72)",
                      letterSpacing: "0.1em",
                      marginTop: "0.1rem",
                    },
                    children: "从开场页开始",
                  }),
                ],
              }),
            ],
          })
        : null,
      !y && !s
        ? G.jsxs("button", {
            onClick: (R) => {
              R.stopPropagation();
              u(!0);
            },
            className:
              "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3 rounded-full px-5 py-3 backdrop-blur-md",
            style: {
              zIndex: 55,
              background: "rgba(17,17,22,0.42)",
              border: "1px solid rgba(255,255,255,0.24)",
              boxShadow: "0 12px 40px rgba(0,0,0,0.28)",
              color: "#fffaf3",
            },
            children: [
              G.jsx("span", {
                style: {
                  width: "38px",
                  height: "38px",
                  borderRadius: "999px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(255,255,255,0.14)",
                  border: "1px solid rgba(255,255,255,0.18)",
                },
                children: G.jsx("svg", {
                  width: "14",
                  height: "14",
                  viewBox: "0 0 12 12",
                  fill: "currentColor",
                  children: G.jsx("polygon", {
                    points: "1,0 12,6 1,12",
                  }),
                }),
              }),
              G.jsx("span", {
                style: {
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                },
                children: "继续播放",
              }),
            ],
          })
        : null,
      et
        ? G.jsxs("div", {
            className:
              "fixed bottom-12 left-0 right-0 flex items-center justify-center gap-3 px-6",
            style: { zIndex: 56 },
            children: [
              G.jsxs("button", {
                onClick: (R) => {
                  R.stopPropagation();
                  (r(0), u(!0));
                },
                className:
                  "min-w-[132px] rounded-full px-5 py-3 backdrop-blur-md",
                style: {
                  background: "rgba(255,255,255,0.14)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "#fffaf3",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                },
                children: [
                  G.jsx("span", {
                    style: {
                      fontFamily: "'Noto Sans SC', sans-serif",
                      fontSize: "0.92rem",
                      fontWeight: 600,
                      letterSpacing: "0.14em",
                    },
                    children: "重新播放",
                  }),
                ],
              }),
              G.jsxs("button", {
                onClick: (R) => {
                  R.stopPropagation();
                  K0(!0);
                },
                className:
                  "min-w-[132px] rounded-full px-5 py-3 backdrop-blur-md",
                style: {
                  background:
                    "linear-gradient(135deg, rgba(255,232,242,0.92), rgba(255,246,236,0.88))",
                  border: "1px solid rgba(255,255,255,0.36)",
                  color: "#6f3655",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.18)",
                },
                children: [
                  G.jsx("span", {
                    style: {
                      fontFamily: "'Noto Sans SC', sans-serif",
                      fontSize: "0.92rem",
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                    },
                    children: "分享",
                  }),
                ],
              }),
            ],
          })
        : null,
      Q0
        ? G.jsxs("div", {
            onClick: () => K0(!1),
            className:
              "fixed inset-0 flex items-end justify-center px-5 pb-8",
            style: {
              zIndex: 70,
              background: "rgba(7,7,12,0.34)",
              backdropFilter: "blur(8px)",
            },
            children: [
              G.jsxs("div", {
                onClick: (R) => R.stopPropagation(),
                className: "w-full max-w-[360px] rounded-[28px] px-5 py-5",
                style: {
                  background:
                    "linear-gradient(180deg, rgba(255,249,246,0.96) 0%, rgba(255,241,246,0.94) 100%)",
                  boxShadow: "0 18px 60px rgba(0,0,0,0.22)",
                },
                children: [
                  G.jsx("div", {
                    style: {
                      fontFamily: "'Noto Serif SC', serif",
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: "#6a3d54",
                      textAlign: "center",
                      marginBottom: "0.45rem",
                    },
                    children: "分享《为你写诗》",
                  }),
                  G.jsx("div", {
                    style: {
                      fontFamily: "'Noto Sans SC', sans-serif",
                      fontSize: "0.82rem",
                      lineHeight: 1.7,
                      color: "rgba(106,61,84,0.76)",
                      textAlign: "center",
                      marginBottom: "1rem",
                    },
                    children: "把这份春日悸动分享给TA，一起进入PicoPico的浪漫企划。",
                  }),
                  G.jsxs("div", {
                    style: {
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr 1fr",
                      gap: "10px",
                    },
                    children: [
                      "微信",
                      "朋友圈",
                      "复制链接",
                    ].map((R) =>
                      G.jsxs(
                        "button",
                        {
                          onClick: () => K0(!1),
                          style: {
                            borderRadius: "18px",
                            padding: "14px 8px",
                            background: "rgba(255,255,255,0.7)",
                            border: "1px solid rgba(205,155,179,0.22)",
                            color: "#6f3655",
                          },
                          children: [
                            G.jsx("div", {
                              style: {
                                width: "42px",
                                height: "42px",
                                margin: "0 auto 8px",
                                borderRadius: "999px",
                                background:
                                  "linear-gradient(135deg, rgba(255,216,228,0.95), rgba(255,244,235,0.95))",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontFamily: "'Noto Serif SC', serif",
                                fontSize: "0.9rem",
                                fontWeight: 700,
                              },
                              children: R.slice(0, 1),
                            }),
                            G.jsx("div", {
                              style: {
                                fontFamily: "'Noto Sans SC', sans-serif",
                                fontSize: "0.78rem",
                                fontWeight: 600,
                              },
                              children: R,
                            }),
                          ],
                        },
                        R,
                      ),
                    ),
                  }),
                  G.jsx("button", {
                    onClick: () => K0(!1),
                    style: {
                      width: "100%",
                      marginTop: "12px",
                      padding: "12px 0",
                      borderRadius: "16px",
                      background: "rgba(111,54,85,0.08)",
                      color: "#6f3655",
                      fontFamily: "'Noto Sans SC', sans-serif",
                      fontSize: "0.88rem",
                      fontWeight: 600,
                    },
                    children: "关闭",
                  }),
                ],
              }),
            ],
          })
        : null,
      G.jsx("div", {
        "data-loc": "client/src/pages/Home.tsx:732",
        className: "fixed bottom-0 left-0 right-0 h-28 pointer-events-none",
        style: {
          background: "linear-gradient(to top, rgba(0,0,0,0.35), transparent)",
          zIndex: 25,
        },
      }),
      G.jsx("div", {
        "data-loc": "client/src/pages/Home.tsx:736",
        className: "fixed bottom-0 left-0 right-0 flex gap-1 px-4 pb-4",
        style: { zIndex: 40 },
        children: La.map((R, W) =>
          G.jsx(
            "div",
            {
              "data-loc": "client/src/pages/Home.tsx:738",
              className: "flex-1 h-[2px] rounded-full overflow-hidden",
              style: { background: "rgba(255,255,255,0.15)" },
              children: G.jsx("div", {
                "data-loc": "client/src/pages/Home.tsx:740",
                className: "h-full rounded-full",
                style: {
                  background: "rgba(255,255,255,0.7)",
                  width: i > W || i === W ? "100%" : "0%",
                  transition:
                    i === W && s
                      ? `width ${R.duration}ms linear`
                      : "width 0.3s ease",
                },
              }),
            },
            R.id,
          ),
        ),
      }),
      G.jsx("button", {
        "data-loc": "client/src/pages/Home.tsx:751",
        onClick: (R) => {
          R.stopPropagation();
          const W = h.current;
          W && (W.muted = !W.muted);
        },
        className:
          "fixed bottom-12 left-5 w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md",
        style: {
          zIndex: 50,
          background: "rgba(255,255,255,0.12)",
          border: "1px solid rgba(255,255,255,0.2)",
          color: "rgba(255,255,255,0.75)",
        },
        children: G.jsxs("svg", {
          "data-loc": "client/src/pages/Home.tsx:766",
          width: "14",
          height: "14",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          children: [
            G.jsx("polygon", {
              "data-loc": "client/src/pages/Home.tsx:767",
              points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
            }),
            G.jsx("path", {
              "data-loc": "client/src/pages/Home.tsx:768",
              d: "M15.54 8.46a5 5 0 0 1 0 7.07",
            }),
            G.jsx("path", {
              "data-loc": "client/src/pages/Home.tsx:769",
              d: "M19.07 4.93a10 10 0 0 1 0 14.14",
            }),
          ],
        }),
      }),
      G.jsx("style", {
        "data-loc": "client/src/pages/Home.tsx:822",
        children: `
        @keyframes sparkle {
          0% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 1; transform: scale(1.2); }
          100% { opacity: 0; transform: scale(0.5); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
      `,
      }),
    ],
  });
}
function Vx() {
  return G.jsxs(_x, {
    "data-loc": "client/src/App.tsx:12",
    children: [
      G.jsx(Ks, {
        "data-loc": "client/src/App.tsx:13",
        path: "/",
        component: kx,
      }),
      G.jsx(Ks, {
        "data-loc": "client/src/App.tsx:14",
        path: "/404",
        component: J0,
      }),
      G.jsx(Ks, { "data-loc": "client/src/App.tsx:16", component: J0 }),
    ],
  });
}
function Qx() {
  return G.jsx(Mx, {
    "data-loc": "client/src/App.tsx:28",
    children: G.jsx(Rx, {
      "data-loc": "client/src/App.tsx:29",
      defaultTheme: "dark",
      children: G.jsxs(Z1, {
        "data-loc": "client/src/App.tsx:33",
        children: [
          G.jsx(av, { "data-loc": "client/src/App.tsx:34" }),
          G.jsx(Vx, { "data-loc": "client/src/App.tsx:35" }),
        ],
      }),
    }),
  });
}
wy.createRoot(document.getElementById("root")).render(
  G.jsx(Qx, { "data-loc": "client/src/main.tsx:5" }),
);
