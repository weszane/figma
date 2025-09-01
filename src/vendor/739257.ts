import { createContext, useContext, createElement, useLayoutEffect, useEffect, useState, useRef, useMemo, useCallback } from "react";
var s = e => "checkbox" === e.type;
var o = e => e instanceof Date;
var a = e => null == e;
let h = e => "object" == typeof e;
var d = e => !a(e) && !Array.isArray(e) && h(e) && !o(e);
var p = e => d(e) && e.target ? s(e.target) ? e.target.checked : e.target.value : e;
var g = e => e.substring(0, e.search(/\.\d+(\.|$)/)) || e;
var m = (e, r) => e.has(g(r));
var v = e => {
  let r = e.constructor && e.constructor.prototype;
  return d(r) && r.hasOwnProperty("isPrototypeOf");
};
var y = "undefined" != typeof window && void 0 !== window.HTMLElement && "undefined" != typeof document;
function b(e) {
  let r;
  let n = Array.isArray(e);
  let i = "undefined" != typeof FileList && e instanceof FileList;
  if (e instanceof Date) r = new Date(e);else if (!(!(y && (e instanceof Blob || i)) && (n || d(e)))) return e;else if (r = n ? [] : {}, n || v(e)) for (let n in e) e.hasOwnProperty(n) && (r[n] = b(e[n]));else r = e;
  return r;
}
var O = e => /^\w*$/.test(e);
var x = e => void 0 === e;
var w = e => Array.isArray(e) ? e.filter(Boolean) : [];
var k = e => w(e.replace(/["|']|\]/g, "").split(/\.|\[/));
var $$_1 = (e, r, n) => {
  if (!r || !d(e)) return n;
  let i = (O(r) ? [r] : k(r)).reduce((e, r) => a(e) ? e : e[r], e);
  return x(i) || i === e ? x(e[r]) ? n : e[r] : i;
};
var S = e => "boolean" == typeof e;
var $$E4 = (e, r, n) => {
  let i = -1;
  let s = O(r) ? [r] : k(r);
  let o = s.length;
  let a = o - 1;
  for (; ++i < o;) {
    let r = s[i];
    let o = n;
    if (i !== a) {
      let n = e[r];
      o = d(n) || Array.isArray(n) ? n : isNaN(+s[i + 1]) ? {} : [];
    }
    if ("__proto__" === r || "constructor" === r || "prototype" === r) return;
    e[r] = o;
    e = e[r];
  }
};
let A = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
};
let C = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
};
let T = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
};
let I = createContext(null);
I.displayName = "HookFormContext";
let P = () => useContext(I);
let $$R2 = e => {
  let {
    children,
    ...n
  } = e;
  return createElement(I.Provider, {
    value: n
  }, children);
};
var M = (e, r, n, i = !0) => {
  let s = {
    defaultValues: r._defaultValues
  };
  for (let o in e) Object.defineProperty(s, o, {
    get: () => {
      let s = o;
      r._proxyFormState[s] !== C.all && (r._proxyFormState[s] = !i || C.all);
      n && (n[s] = !0);
      return e[s];
    }
  });
  return s;
};
let D = "undefined" != typeof window ? useLayoutEffect : useEffect;
function N(e) {
  let r = P();
  let {
    control = r.control,
    disabled,
    name,
    exact
  } = e || {};
  let [h, d] = useState(control._formState);
  let p = useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  });
  D(() => control._subscribe({
    name,
    formState: p.current,
    exact,
    callback: e => {
      disabled || d({
        ...control._formState,
        ...e
      });
    }
  }), [name, disabled, exact]);
  useEffect(() => {
    p.current.isValid && control._setValid(!0);
  }, [control]);
  return useMemo(() => M(h, control, p.current, !1), [h, control]);
}
var $ = e => "string" == typeof e;
var L = (e, r, n, i, s) => $(e) ? (i && r.watch.add(e), $$_1(n, e, s)) : Array.isArray(e) ? e.map(e => (i && r.watch.add(e), $$_1(n, e))) : (i && (r.watchAll = !0), n);
function j(e) {
  let r = P();
  let {
    control = r.control,
    name,
    defaultValue,
    disabled,
    exact
  } = e || {};
  let d = useRef(defaultValue);
  let [p, g] = useState(control._getWatch(name, d.current));
  D(() => control._subscribe({
    name,
    formState: {
      values: !0
    },
    exact,
    callback: e => !disabled && g(L(name, control._names, e.values || control._formValues, !1, d.current))
  }), [name, control, disabled, exact]);
  useEffect(() => control._removeUnmounted());
  return p;
}
export function $$z3(e) {
  let r = P();
  let {
    name,
    disabled,
    control = r.control,
    shouldUnregister
  } = e;
  let h = m(control._names.array, name);
  let d = j({
    control,
    name,
    defaultValue: $$_1(control._formValues, name, $$_1(control._defaultValues, name, e.defaultValue)),
    exact: !0
  });
  let g = N({
    control,
    name,
    exact: !0
  });
  let v = useRef(e);
  let y = useRef(control.register(name, {
    ...e.rules,
    value: d,
    ...(S(e.disabled) ? {
      disabled: e.disabled
    } : {})
  }));
  let O = useMemo(() => Object.defineProperties({}, {
    invalid: {
      enumerable: !0,
      get: () => !!$$_1(g.errors, name)
    },
    isDirty: {
      enumerable: !0,
      get: () => !!$$_1(g.dirtyFields, name)
    },
    isTouched: {
      enumerable: !0,
      get: () => !!$$_1(g.touchedFields, name)
    },
    isValidating: {
      enumerable: !0,
      get: () => !!$$_1(g.validatingFields, name)
    },
    error: {
      enumerable: !0,
      get: () => $$_1(g.errors, name)
    }
  }), [g, name]);
  let w = useCallback(e => y.current.onChange({
    target: {
      value: p(e),
      name
    },
    type: A.CHANGE
  }), [name]);
  let k = useCallback(() => y.current.onBlur({
    target: {
      value: $$_1(control._formValues, name),
      name
    },
    type: A.BLUR
  }), [name, control._formValues]);
  let C = useCallback(e => {
    let r = $$_1(control._fields, name);
    r && e && (r._f.ref = {
      focus: () => e.focus && e.focus(),
      select: () => e.select && e.select(),
      setCustomValidity: r => e.setCustomValidity(r),
      reportValidity: () => e.reportValidity()
    });
  }, [control._fields, name]);
  let T = useMemo(() => ({
    name,
    value: d,
    ...(S(disabled) || g.disabled ? {
      disabled: g.disabled || disabled
    } : {}),
    onChange: w,
    onBlur: k,
    ref: C
  }), [name, disabled, g.disabled, w, k, C, d]);
  useEffect(() => {
    let e = control._options.shouldUnregister || shouldUnregister;
    control.register(name, {
      ...v.current.rules,
      ...(S(v.current.disabled) ? {
        disabled: v.current.disabled
      } : {})
    });
    let r = (e, r) => {
      let n = $$_1(control._fields, e);
      n && n._f && (n._f.mount = r);
    };
    if (r(name, !0), e) {
      let e = b($$_1(control._options.defaultValues, name));
      $$E4(control._defaultValues, name, e);
      x($$_1(control._formValues, name)) && $$E4(control._formValues, name, e);
    }
    h || control.register(name);
    return () => {
      (h ? e && !control._state.action : e) ? control.unregister(name) : r(name, !1);
    };
  }, [name, control, h, shouldUnregister]);
  useEffect(() => {
    control._setDisabledField({
      disabled,
      name
    });
  }, [disabled, name, control]);
  return useMemo(() => ({
    field: T,
    formState: g,
    fieldState: O
  }), [T, g, O]);
}
var $$Z0 = (e, r, n, i, s) => r ? {
  ...n[e],
  types: {
    ...(n[e] && n[e].types ? n[e].types : {}),
    [i]: s || !0
  }
} : {};
var F = e => Array.isArray(e) ? e : [e];
var U = () => {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: r => {
      for (let n of e) n.next && n.next(r);
    },
    subscribe: r => (e.push(r), {
      unsubscribe: () => {
        e = e.filter(e => e !== r);
      }
    }),
    unsubscribe: () => {
      e = [];
    }
  };
};
var Q = e => a(e) || !h(e);
function V(e, r, n = new WeakSet()) {
  if (Q(e) || Q(r)) return e === r;
  if (o(e) && o(r)) return e.getTime() === r.getTime();
  let i = Object.keys(e);
  let s = Object.keys(r);
  if (i.length !== s.length) return !1;
  if (n.has(e) || n.has(r)) return !0;
  for (let a of (n.add(e), n.add(r), i)) {
    let i = e[a];
    if (!s.includes(a)) return !1;
    if ("ref" !== a) {
      let e = r[a];
      if (o(i) && o(e) || d(i) && d(e) || Array.isArray(i) && Array.isArray(e) ? !V(i, e, n) : i !== e) return !1;
    }
  }
  return !0;
}
var B = e => d(e) && !Object.keys(e).length;
var q = e => "file" === e.type;
var W = e => "function" == typeof e;
var Y = e => {
  if (!y) return !1;
  let r = e ? e.ownerDocument : 0;
  return e instanceof (r && r.defaultView ? r.defaultView.HTMLElement : HTMLElement);
};
var G = e => "select-multiple" === e.type;
var X = e => "radio" === e.type;
var H = e => X(e) || s(e);
var K = e => Y(e) && e.isConnected;
function J(e, r) {
  let n = r.slice(0, -1).length;
  let i = 0;
  for (; i < n;) e = x(e) ? i++ : e[r[i++]];
  return e;
}
function ee(e) {
  for (let r in e) if (e.hasOwnProperty(r) && !x(e[r])) return !1;
  return !0;
}
function et(e, r) {
  let n = Array.isArray(r) ? r : O(r) ? [r] : k(r);
  let i = 1 === n.length ? e : J(e, n);
  let s = n.length - 1;
  let o = n[s];
  i && delete i[o];
  0 !== s && (d(i) && B(i) || Array.isArray(i) && ee(i)) && et(e, n.slice(0, -1));
  return e;
}
var er = e => {
  for (let r in e) if (W(e[r])) return !0;
  return !1;
};
function en(e, r = {}) {
  let n = Array.isArray(e);
  if (d(e) || n) for (let n in e) Array.isArray(e[n]) || d(e[n]) && !er(e[n]) ? (r[n] = Array.isArray(e[n]) ? [] : {}, en(e[n], r[n])) : a(e[n]) || (r[n] = !0);
  return r;
}
function ei(e, r, n) {
  let i = Array.isArray(e);
  if (d(e) || i) for (let i in e) Array.isArray(e[i]) || d(e[i]) && !er(e[i]) ? x(r) || Q(n[i]) ? n[i] = Array.isArray(e[i]) ? en(e[i], []) : {
    ...en(e[i])
  } : ei(e[i], a(r) ? {} : r[i], n[i]) : n[i] = !V(e[i], r[i]);
  return n;
}
var es = (e, r) => ei(e, r, en(r));
let eo = {
  value: !1,
  isValid: !1
};
let ea = {
  value: !0,
  isValid: !0
};
var el = e => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      let r = e.filter(e => e && e.checked && !e.disabled).map(e => e.value);
      return {
        value: r,
        isValid: !!r.length
      };
    }
    return e[0].checked && !e[0].disabled ? e[0].attributes && !x(e[0].attributes.value) ? x(e[0].value) || "" === e[0].value ? ea : {
      value: e[0].value,
      isValid: !0
    } : ea : eo;
  }
  return eo;
};
var eu = (e, {
  valueAsNumber: r,
  valueAsDate: n,
  setValueAs: i
}) => x(e) ? e : r ? "" === e ? NaN : e ? +e : e : n && $(e) ? new Date(e) : i ? i(e) : e;
let ec = {
  isValid: !1,
  value: null
};
var eh = e => Array.isArray(e) ? e.reduce((e, r) => r && r.checked && !r.disabled ? {
  isValid: !0,
  value: r.value
} : e, ec) : ec;
function ed(e) {
  let r = e.ref;
  return q(r) ? r.files : X(r) ? eh(e.refs).value : G(r) ? [...r.selectedOptions].map(({
    value: e
  }) => e) : s(r) ? el(e.refs).value : eu(x(r.value) ? e.ref.value : r.value, e);
}
var ef = (e, r, n, i) => {
  let s = {};
  for (let n of e) {
    let e = $$_1(r, n);
    e && $$E4(s, n, e._f);
  }
  return {
    criteriaMode: n,
    names: [...e],
    fields: s,
    shouldUseNativeValidation: i
  };
};
var ep = e => e instanceof RegExp;
var eg = e => x(e) ? e : ep(e) ? e.source : d(e) ? ep(e.value) ? e.value.source : e.value : e;
var em = e => ({
  isOnSubmit: !e || e === C.onSubmit,
  isOnBlur: e === C.onBlur,
  isOnChange: e === C.onChange,
  isOnAll: e === C.all,
  isOnTouch: e === C.onTouched
});
let ev = "AsyncFunction";
var ey = e => !!e && !!e.validate && !!(W(e.validate) && e.validate.constructor.name === ev || d(e.validate) && Object.values(e.validate).find(e => e.constructor.name === ev));
var eb = e => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
var eO = (e, r, n) => !n && (r.watchAll || r.watch.has(e) || [...r.watch].some(r => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))));
let ex = (e, r, n, i) => {
  for (let s of n || Object.keys(e)) {
    let n = $$_1(e, s);
    if (n) {
      let {
        _f,
        ...o
      } = n;
      if (_f) {
        if (_f.refs && _f.refs[0] && r(_f.refs[0], s) && !i || _f.ref && r(_f.ref, _f.name) && !i) return !0;
        if (ex(o, r)) break;
      } else if (d(o) && ex(o, r)) break;
    }
  }
};
function ew(e, r, n) {
  let i = $$_1(e, n);
  if (i || O(n)) return {
    error: i,
    name: n
  };
  let s = n.split(".");
  for (; s.length;) {
    let i = s.join(".");
    let o = $$_1(r, i);
    let a = $$_1(e, i);
    if (o && !Array.isArray(o) && n !== i) break;
    if (a && a.type) return {
      name: i,
      error: a
    };
    if (a && a.root && a.root.type) return {
      name: `${i}.root`,
      error: a.root
    };
    s.pop();
  }
  return {
    name: n
  };
}
var ek = (e, r, n, i) => {
  n(e);
  let {
    name,
    ...o
  } = e;
  return B(o) || Object.keys(o).length >= Object.keys(r).length || Object.keys(o).find(e => r[e] === (!i || C.all));
};
var e_ = (e, r, n) => !e || !r || e === r || F(e).some(e => e && (n ? e === r : e.startsWith(r) || r.startsWith(e)));
var eS = (e, r, n, i, s) => !s.isOnAll && (!n && s.isOnTouch ? !(r || e) : (n ? i.isOnBlur : s.isOnBlur) ? !e : (n ? !i.isOnChange : !s.isOnChange) || e);
var eE = (e, r) => !w($$_1(e, r)).length && et(e, r);
var eA = (e, r, n) => {
  let i = F($$_1(e, n));
  $$E4(i, "root", r[n]);
  $$E4(e, n, i);
  return e;
};
var eC = e => $(e);
function eT(e, r, n = "validate") {
  if (eC(e) || Array.isArray(e) && e.every(eC) || S(e) && !e) return {
    type: n,
    message: eC(e) ? e : "",
    ref: r
  };
}
var eI = e => d(e) && !ep(e) ? e : {
  value: e,
  message: ""
};
var eP = async (e, r, n, i, o, h) => {
  let {
    ref,
    refs,
    required,
    maxLength,
    minLength,
    min,
    max,
    pattern,
    validate,
    name,
    valueAsNumber,
    mount
  } = e._f;
  let I = $$_1(n, name);
  if (!mount || r.has(name)) return {};
  let P = refs ? refs[0] : ref;
  let R = e => {
    o && P.reportValidity && (P.setCustomValidity(S(e) ? "" : e || ""), P.reportValidity());
  };
  let M = {};
  let D = X(ref);
  let N = s(ref);
  let L = D || N;
  let j = (valueAsNumber || q(ref)) && x(ref.value) && x(I) || Y(ref) && "" === ref.value || "" === I || Array.isArray(I) && !I.length;
  let z = $$Z0.bind(null, name, i, M);
  let F = (e, r, n, i = T.maxLength, s = T.minLength) => {
    let o = e ? r : n;
    M[name] = {
      type: e ? i : s,
      message: o,
      ref,
      ...z(e ? i : s, o)
    };
  };
  if (h ? !Array.isArray(I) || !I.length : required && (!L && (j || a(I)) || S(I) && !I || N && !el(refs).isValid || D && !eh(refs).isValid)) {
    let {
      value,
      message
    } = eC(required) ? {
      value: !!required,
      message: required
    } : eI(required);
    if (value && (M[name] = {
      type: T.required,
      message,
      ref: P,
      ...z(T.required, message)
    }, !i)) {
      R(message);
      return M;
    }
  }
  if (!j && (!a(min) || !a(max))) {
    let e;
    let r;
    let n = eI(max);
    let s = eI(min);
    if (a(I) || isNaN(I)) {
      let i = ref.valueAsDate || new Date(I);
      let o = e => new Date(new Date().toDateString() + " " + e);
      let a = "time" == ref.type;
      let h = "week" == ref.type;
      $(n.value) && I && (e = a ? o(I) > o(n.value) : h ? I > n.value : i > new Date(n.value));
      $(s.value) && I && (r = a ? o(I) < o(s.value) : h ? I < s.value : i < new Date(s.value));
    } else {
      let i = ref.valueAsNumber || (I ? +I : I);
      a(n.value) || (e = i > n.value);
      a(s.value) || (r = i < s.value);
    }
    if ((e || r) && (F(!!e, n.message, s.message, T.max, T.min), !i)) {
      R(M[name].message);
      return M;
    }
  }
  if ((maxLength || minLength) && !j && ($(I) || h && Array.isArray(I))) {
    let e = eI(maxLength);
    let r = eI(minLength);
    let n = !a(e.value) && I.length > +e.value;
    let s = !a(r.value) && I.length < +r.value;
    if ((n || s) && (F(n, e.message, r.message), !i)) {
      R(M[name].message);
      return M;
    }
  }
  if (pattern && !j && $(I)) {
    let {
      value,
      message
    } = eI(pattern);
    if (ep(value) && !I.match(value) && (M[name] = {
      type: T.pattern,
      message,
      ref,
      ...z(T.pattern, message)
    }, !i)) {
      R(message);
      return M;
    }
  }
  if (validate) {
    if (W(validate)) {
      let e = eT(await validate(I, n), P);
      if (e && (M[name] = {
        ...e,
        ...z(T.validate, e.message)
      }, !i)) {
        R(e.message);
        return M;
      }
    } else if (d(validate)) {
      let e = {};
      for (let r in validate) {
        if (!B(e) && !i) break;
        let s = eT(await validate[r](I, n), P, r);
        s && (e = {
          ...s,
          ...z(r, s.message)
        }, R(s.message), i && (M[name] = e));
      }
      if (!B(e) && (M[name] = {
        ref: P,
        ...e
      }, !i)) return M;
    }
  }
  R(!0);
  return M;
};
let eR = {
  mode: C.onSubmit,
  reValidateMode: C.onChange,
  shouldFocusError: !0
};
function eM(e = {}) {
  let r;
  let n = {
    ...eR,
    ...e
  };
  let i = {
    submitCount: 0,
    isDirty: !1,
    isReady: !1,
    isLoading: W(n.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    validatingFields: {},
    errors: n.errors || {},
    disabled: n.disabled || !1
  };
  let h = {};
  let g = (d(n.defaultValues) || d(n.values)) && b(n.defaultValues || n.values) || {};
  let v = n.shouldUnregister ? {} : b(g);
  let O = {
    action: !1,
    mount: !1,
    watch: !1
  };
  let k = {
    mount: new Set(),
    disabled: new Set(),
    unMount: new Set(),
    array: new Set(),
    watch: new Set()
  };
  let T = 0;
  let I = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  };
  let P = {
    ...I
  };
  let R = {
    array: U(),
    state: U()
  };
  let M = n.criteriaMode === C.all;
  let D = e => r => {
    clearTimeout(T);
    T = setTimeout(e, r);
  };
  let N = async e => {
    if (!n.disabled && (I.isValid || P.isValid || e)) {
      let e = n.resolver ? B((await ee()).errors) : await en(h, !0);
      e !== i.isValid && R.state.next({
        isValid: e
      });
    }
  };
  let j = (e, r) => {
    !n.disabled && (I.isValidating || I.validatingFields || P.isValidating || P.validatingFields) && ((e || Array.from(k.mount)).forEach(e => {
      e && (r ? $$E4(i.validatingFields, e, r) : et(i.validatingFields, e));
    }), R.state.next({
      validatingFields: i.validatingFields,
      isValidating: !B(i.validatingFields)
    }));
  };
  let z = (e, r = [], s, o, a = !0, d = !0) => {
    if (o && s && !n.disabled) {
      if (O.action = !0, d && Array.isArray($$_1(h, e))) {
        let r = s($$_1(h, e), o.argA, o.argB);
        a && $$E4(h, e, r);
      }
      if (d && Array.isArray($$_1(i.errors, e))) {
        let r = s($$_1(i.errors, e), o.argA, o.argB);
        a && $$E4(i.errors, e, r);
        eE(i.errors, e);
      }
      if ((I.touchedFields || P.touchedFields) && d && Array.isArray($$_1(i.touchedFields, e))) {
        let r = s($$_1(i.touchedFields, e), o.argA, o.argB);
        a && $$E4(i.touchedFields, e, r);
      }
      (I.dirtyFields || P.dirtyFields) && (i.dirtyFields = es(g, v));
      R.state.next({
        name: e,
        isDirty: eo(e, r),
        dirtyFields: i.dirtyFields,
        errors: i.errors,
        isValid: i.isValid
      });
    } else $$E4(v, e, r);
  };
  let Z = (e, r) => {
    $$E4(i.errors, e, r);
    R.state.next({
      errors: i.errors
    });
  };
  let Q = (e, r, n, i) => {
    let s = $$_1(h, e);
    if (s) {
      let o = $$_1(v, e, x(n) ? $$_1(g, e) : n);
      x(o) || i && i.defaultChecked || r ? $$E4(v, e, r ? o : ed(s._f)) : el(e, o);
      O.mount && N();
    }
  };
  let X = (e, r, s, o, a) => {
    let h = !1;
    let d = !1;
    let p = {
      name: e
    };
    if (!n.disabled) {
      if (!s || o) {
        (I.isDirty || P.isDirty) && (d = i.isDirty, i.isDirty = p.isDirty = eo(), h = d !== p.isDirty);
        let n = V($$_1(g, e), r);
        d = !!$$_1(i.dirtyFields, e);
        n ? et(i.dirtyFields, e) : $$E4(i.dirtyFields, e, !0);
        p.dirtyFields = i.dirtyFields;
        h = h || (I.dirtyFields || P.dirtyFields) && !n !== d;
      }
      if (s) {
        let r = $$_1(i.touchedFields, e);
        r || ($$E4(i.touchedFields, e, s), p.touchedFields = i.touchedFields, h = h || (I.touchedFields || P.touchedFields) && r !== s);
      }
      h && a && R.state.next(p);
    }
    return h ? p : {};
  };
  let J = (e, s, o, a) => {
    let h = $$_1(i.errors, e);
    let d = (I.isValid || P.isValid) && S(s) && i.isValid !== s;
    if (n.delayError && o ? (r = D(() => Z(e, o)))(n.delayError) : (clearTimeout(T), r = null, o ? $$E4(i.errors, e, o) : et(i.errors, e)), (o ? !V(h, o) : h) || !B(a) || d) {
      let r = {
        ...a,
        ...(d && S(s) ? {
          isValid: s
        } : {}),
        errors: i.errors,
        name: e
      };
      i = {
        ...i,
        ...r
      };
      R.state.next(r);
    }
  };
  let ee = async e => {
    j(e, !0);
    let r = await n.resolver(v, n.context, ef(e || k.mount, h, n.criteriaMode, n.shouldUseNativeValidation));
    j(e);
    return r;
  };
  let er = async e => {
    let {
      errors
    } = await ee(e);
    if (e) for (let n of e) {
      let e = $$_1(errors, n);
      e ? $$E4(i.errors, n, e) : et(i.errors, n);
    } else i.errors = errors;
    return errors;
  };
  let en = async (e, r, s = {
    valid: !0
  }) => {
    for (let o in e) {
      let a = e[o];
      if (a) {
        let {
          _f,
          ...h
        } = a;
        if (_f) {
          let h = k.array.has(_f.name);
          let d = a._f && ey(a._f);
          d && I.validatingFields && j([o], !0);
          let p = await eP(a, k.disabled, v, M, n.shouldUseNativeValidation && !r, h);
          if (d && I.validatingFields && j([o]), p[_f.name] && (s.valid = !1, r)) break;
          r || ($$_1(p, _f.name) ? h ? eA(i.errors, p, _f.name) : $$E4(i.errors, _f.name, p[_f.name]) : et(i.errors, _f.name));
        }
        B(h) || (await en(h, r, s));
      }
    }
    return s.valid;
  };
  let ei = () => {
    for (let e of k.unMount) {
      let r = $$_1(h, e);
      r && (r._f.refs ? r._f.refs.every(e => !K(e)) : !K(r._f.ref)) && ez(e);
    }
    k.unMount = new Set();
  };
  let eo = (e, r) => !n.disabled && (e && r && $$E4(v, e, r), !V(eT(), g));
  let ea = (e, r, n) => L(e, k, {
    ...(O.mount ? v : x(r) ? g : $(e) ? {
      [e]: r
    } : r)
  }, n, r);
  let el = (e, r, n = {}) => {
    let i = $$_1(h, e);
    let o = r;
    if (i) {
      let n = i._f;
      n && (n.disabled || $$E4(v, e, eu(r, n)), o = Y(n.ref) && a(r) ? "" : r, G(n.ref) ? [...n.ref.options].forEach(e => e.selected = o.includes(e.value)) : n.refs ? s(n.ref) ? n.refs.forEach(e => {
        e.defaultChecked && e.disabled || (Array.isArray(o) ? e.checked = !!o.find(r => r === e.value) : e.checked = o === e.value || !!o);
      }) : n.refs.forEach(e => e.checked = e.value === o) : q(n.ref) ? n.ref.value = "" : (n.ref.value = o, n.ref.type || R.state.next({
        name: e,
        values: b(v)
      })));
    }
    (n.shouldDirty || n.shouldTouch) && X(e, o, n.shouldTouch, n.shouldDirty, !0);
    n.shouldValidate && eC(e);
  };
  let ec = (e, r, n) => {
    for (let i in r) {
      if (!r.hasOwnProperty(i)) return;
      let s = r[i];
      let a = e + "." + i;
      let p = $$_1(h, a);
      (k.array.has(e) || d(s) || p && !p._f) && !o(s) ? ec(a, s, n) : el(a, s, n);
    }
  };
  let eh = (e, r, n = {}) => {
    let s = $$_1(h, e);
    let o = k.array.has(e);
    let d = b(r);
    $$E4(v, e, d);
    o ? (R.array.next({
      name: e,
      values: b(v)
    }), (I.isDirty || I.dirtyFields || P.isDirty || P.dirtyFields) && n.shouldDirty && R.state.next({
      name: e,
      dirtyFields: es(g, v),
      isDirty: eo(e, d)
    })) : !s || s._f || a(d) ? el(e, d, n) : ec(e, d, n);
    eO(e, k) && R.state.next({
      ...i
    });
    R.state.next({
      name: O.mount ? e : void 0,
      values: b(v)
    });
  };
  let ep = async e => {
    O.mount = !0;
    let s = e.target;
    let a = s.name;
    let d = !0;
    let g = $$_1(h, a);
    let m = e => {
      d = Number.isNaN(e) || o(e) && isNaN(e.getTime()) || V(e, $$_1(v, a, e));
    };
    let y = em(n.mode);
    let x = em(n.reValidateMode);
    if (g) {
      let o;
      let O;
      let w = s.type ? ed(g._f) : p(e);
      let S = e.type === A.BLUR || e.type === A.FOCUS_OUT;
      let C = !eb(g._f) && !n.resolver && !$$_1(i.errors, a) && !g._f.deps || eS(S, $$_1(i.touchedFields, a), i.isSubmitted, x, y);
      let T = eO(a, k, S);
      $$E4(v, a, w);
      S ? (g._f.onBlur && g._f.onBlur(e), r && r(0)) : g._f.onChange && g._f.onChange(e);
      let D = X(a, w, S);
      let $ = !B(D) || T;
      if (S || R.state.next({
        name: a,
        type: e.type,
        values: b(v)
      }), C) {
        (I.isValid || P.isValid) && ("onBlur" === n.mode ? S && N() : S || N());
        return $ && R.state.next({
          name: a,
          ...(T ? {} : D)
        });
      }
      if (!S && T && R.state.next({
        ...i
      }), n.resolver) {
        let {
          errors
        } = await ee([a]);
        if (m(w), d) {
          let r = ew(i.errors, h, a);
          let n = ew(errors, h, r.name || a);
          o = n.error;
          a = n.name;
          O = B(errors);
        }
      } else {
        j([a], !0);
        o = (await eP(g, k.disabled, v, M, n.shouldUseNativeValidation))[a];
        j([a]);
        m(w);
        d && (o ? O = !1 : (I.isValid || P.isValid) && (O = await en(h, !0)));
      }
      d && (g._f.deps && eC(g._f.deps), J(a, O, o, D));
    }
  };
  let ev = (e, r) => {
    if ($$_1(i.errors, r) && e.focus) {
      e.focus();
      return 1;
    }
  };
  let eC = async (e, r = {}) => {
    let s;
    let o;
    let a = F(e);
    if (n.resolver) {
      let r = await er(x(e) ? e : a);
      s = B(r);
      o = e ? !a.some(e => $$_1(r, e)) : s;
    } else e ? ((o = (await Promise.all(a.map(async e => {
      let r = $$_1(h, e);
      return await en(r && r._f ? {
        [e]: r
      } : r);
    }))).every(Boolean)) || i.isValid) && N() : o = s = await en(h);
    R.state.next({
      ...(!$(e) || (I.isValid || P.isValid) && s !== i.isValid ? {} : {
        name: e
      }),
      ...(n.resolver || !e ? {
        isValid: s
      } : {}),
      errors: i.errors
    });
    r.shouldFocus && !o && ex(h, ev, e ? a : k.mount);
    return o;
  };
  let eT = e => {
    let r = {
      ...(O.mount ? v : g)
    };
    return x(e) ? r : $(e) ? $$_1(r, e) : e.map(e => $$_1(r, e));
  };
  let eI = (e, r) => ({
    invalid: !!$$_1((r || i).errors, e),
    isDirty: !!$$_1((r || i).dirtyFields, e),
    error: $$_1((r || i).errors, e),
    isValidating: !!$$_1(i.validatingFields, e),
    isTouched: !!$$_1((r || i).touchedFields, e)
  });
  let eD = e => {
    e && F(e).forEach(e => et(i.errors, e));
    R.state.next({
      errors: e ? i.errors : {}
    });
  };
  let eN = (e, r, n) => {
    let s = ($$_1(h, e, {
      _f: {}
    })._f || {}).ref;
    let {
      ref,
      message,
      type,
      ...p
    } = $$_1(i.errors, e) || {};
    $$E4(i.errors, e, {
      ...p,
      ...r,
      ref: s
    });
    R.state.next({
      name: e,
      errors: i.errors,
      isValid: !1
    });
    n && n.shouldFocus && s && s.focus && s.focus();
  };
  let e$ = (e, r) => W(e) ? R.state.subscribe({
    next: n => e(ea(void 0, r), n)
  }) : ea(e, r, !0);
  let eL = e => R.state.subscribe({
    next: r => {
      e_(e.name, r.name, e.exact) && ek(r, e.formState || I, eY, e.reRenderRoot) && e.callback({
        values: {
          ...v
        },
        ...i,
        ...r
      });
    }
  }).unsubscribe;
  let ej = e => (O.mount = !0, P = {
    ...P,
    ...e.formState
  }, eL({
    ...e,
    formState: P
  }));
  let ez = (e, r = {}) => {
    for (let s of e ? F(e) : k.mount) {
      k.mount.$$delete(s);
      k.array.$$delete(s);
      r.keepValue || (et(h, s), et(v, s));
      r.keepError || et(i.errors, s);
      r.keepDirty || et(i.dirtyFields, s);
      r.keepTouched || et(i.touchedFields, s);
      r.keepIsValidating || et(i.validatingFields, s);
      n.shouldUnregister || r.keepDefaultValue || et(g, s);
    }
    R.state.next({
      values: b(v)
    });
    R.state.next({
      ...i,
      ...(r.keepDirty ? {
        isDirty: eo()
      } : {})
    });
    r.keepIsValid || N();
  };
  let eZ = ({
    disabled: e,
    name: r
  }) => {
    (S(e) && O.mount || e || k.disabled.has(r)) && (e ? k.disabled.add(r) : k.disabled.$$delete(r));
  };
  let eF = (e, r = {}) => {
    let i = $$_1(h, e);
    let s = S(r.disabled) || S(n.disabled);
    $$E4(h, e, {
      ...(i || {}),
      _f: {
        ...(i && i._f ? i._f : {
          ref: {
            name: e
          }
        }),
        name: e,
        mount: !0,
        ...r
      }
    });
    k.mount.add(e);
    i ? eZ({
      disabled: S(r.disabled) ? r.disabled : n.disabled,
      name: e
    }) : Q(e, !0, r.value);
    return {
      ...(s ? {
        disabled: r.disabled || n.disabled
      } : {}),
      ...(n.progressive ? {
        required: !!r.required,
        min: eg(r.min),
        max: eg(r.max),
        minLength: eg(r.minLength),
        maxLength: eg(r.maxLength),
        pattern: eg(r.pattern)
      } : {}),
      name: e,
      onChange: ep,
      onBlur: ep,
      ref: s => {
        if (s) {
          eF(e, r);
          i = $$_1(h, e);
          let n = x(s.value) && s.querySelectorAll && s.querySelectorAll("input,select,textarea")[0] || s;
          let o = H(n);
          let a = i._f.refs || [];
          (o ? a.find(e => e === n) : n === i._f.ref) || ($$E4(h, e, {
            _f: {
              ...i._f,
              ...(o ? {
                refs: [...a.filter(K), n, ...(Array.isArray($$_1(g, e)) ? [{}] : [])],
                ref: {
                  type: n.type,
                  name: e
                }
              } : {
                ref: n
              })
            }
          }), Q(e, !1, void 0, n));
        } else {
          (i = $$_1(h, e, {}))._f && (i._f.mount = !1);
          (n.shouldUnregister || r.shouldUnregister) && !(m(k.array, e) && O.action) && k.unMount.add(e);
        }
      }
    };
  };
  let eU = () => n.shouldFocusError && ex(h, ev, k.mount);
  let eQ = (e, r) => async s => {
    let o;
    s && (s.preventDefault && s.preventDefault(), s.persist && s.persist());
    let a = b(v);
    if (R.state.next({
      isSubmitting: !0
    }), n.resolver) {
      let {
        errors,
        values
      } = await ee();
      i.errors = errors;
      a = b(values);
    } else await en(h);
    if (k.disabled.size) for (let e of k.disabled) et(a, e);
    if (et(i.errors, "root"), B(i.errors)) {
      R.state.next({
        errors: {}
      });
      try {
        await e(a, s);
      } catch (e) {
        o = e;
      }
    } else {
      r && (await r({
        ...i.errors
      }, s));
      eU();
      setTimeout(eU);
    }
    if (R.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: B(i.errors) && !o,
      submitCount: i.submitCount + 1,
      errors: i.errors
    }), o) throw o;
  };
  let eV = (e, r = {}) => {
    $$_1(h, e) && (x(r.defaultValue) ? eh(e, b($$_1(g, e))) : (eh(e, r.defaultValue), $$E4(g, e, b(r.defaultValue))), r.keepTouched || et(i.touchedFields, e), r.keepDirty || (et(i.dirtyFields, e), i.isDirty = r.defaultValue ? eo(e, b($$_1(g, e))) : eo()), !r.keepError && (et(i.errors, e), I.isValid && N()), R.state.next({
      ...i
    }));
  };
  let eB = (e, r = {}) => {
    let s = e ? b(e) : g;
    let o = b(s);
    let a = B(e);
    let d = a ? g : o;
    if (r.keepDefaultValues || (g = s), !r.keepValues) {
      if (r.keepDirtyValues) for (let e of Array.from(new Set([...k.mount, ...Object.keys(es(g, v))]))) $$_1(i.dirtyFields, e) ? $$E4(d, e, $$_1(v, e)) : eh(e, $$_1(d, e));else {
        if (y && x(e)) for (let e of k.mount) {
          let r = $$_1(h, e);
          if (r && r._f) {
            let e = Array.isArray(r._f.refs) ? r._f.refs[0] : r._f.ref;
            if (Y(e)) {
              let r = e.closest("form");
              if (r) {
                r.reset();
                break;
              }
            }
          }
        }
        if (r.keepFieldsRef) for (let e of k.mount) eh(e, $$_1(d, e));else h = {};
      }
      v = n.shouldUnregister ? r.keepDefaultValues ? b(g) : {} : b(d);
      R.array.next({
        values: {
          ...d
        }
      });
      R.state.next({
        values: {
          ...d
        }
      });
    }
    k = {
      mount: r.keepDirtyValues ? k.mount : new Set(),
      unMount: new Set(),
      array: new Set(),
      disabled: new Set(),
      watch: new Set(),
      watchAll: !1,
      focus: ""
    };
    O.mount = !I.isValid || !!r.keepIsValid || !!r.keepDirtyValues;
    O.watch = !!n.shouldUnregister;
    R.state.next({
      submitCount: r.keepSubmitCount ? i.submitCount : 0,
      isDirty: !a && (r.keepDirty ? i.isDirty : !!(r.keepDefaultValues && !V(e, g))),
      isSubmitted: !!r.keepIsSubmitted && i.isSubmitted,
      dirtyFields: a ? {} : r.keepDirtyValues ? r.keepDefaultValues && v ? es(g, v) : i.dirtyFields : r.keepDefaultValues && e ? es(g, e) : r.keepDirty ? i.dirtyFields : {},
      touchedFields: r.keepTouched ? i.touchedFields : {},
      errors: r.keepErrors ? i.errors : {},
      isSubmitSuccessful: !!r.keepIsSubmitSuccessful && i.isSubmitSuccessful,
      isSubmitting: !1
    });
  };
  let eq = (e, r) => eB(W(e) ? e(v) : e, r);
  let eW = (e, r = {}) => {
    let n = $$_1(h, e);
    let i = n && n._f;
    if (i) {
      let e = i.refs ? i.refs[0] : i.ref;
      e.focus && (e.focus(), r.shouldSelect && W(e.select) && e.select());
    }
  };
  let eY = e => {
    i = {
      ...i,
      ...e
    };
  };
  let eG = {
    control: {
      register: eF,
      unregister: ez,
      getFieldState: eI,
      handleSubmit: eQ,
      setError: eN,
      _subscribe: eL,
      _runSchema: ee,
      _focusError: eU,
      _getWatch: ea,
      _getDirty: eo,
      _setValid: N,
      _setFieldArray: z,
      _setDisabledField: eZ,
      _setErrors: e => {
        i.errors = e;
        R.state.next({
          errors: i.errors,
          isValid: !1
        });
      },
      _getFieldArray: e => w($$_1(O.mount ? v : g, e, n.shouldUnregister ? $$_1(g, e, []) : [])),
      _reset: eB,
      _resetDefaultValues: () => W(n.defaultValues) && n.defaultValues().then(e => {
        eq(e, n.resetOptions);
        R.state.next({
          isLoading: !1
        });
      }),
      _removeUnmounted: ei,
      _disableForm: e => {
        S(e) && (R.state.next({
          disabled: e
        }), ex(h, (r, n) => {
          let i = $$_1(h, n);
          i && (r.disabled = i._f.disabled || e, Array.isArray(i._f.refs) && i._f.refs.forEach(r => {
            r.disabled = i._f.disabled || e;
          }));
        }, 0, !1));
      },
      _subjects: R,
      _proxyFormState: I,
      get _fields() {
        return h;
      },
      get _formValues() {
        return v;
      },
      get _state() {
        return O;
      },
      set _state(value) {
        O = value;
      },
      get _defaultValues() {
        return g;
      },
      get _names() {
        return k;
      },
      set _names(value) {
        k = value;
      },
      get _formState() {
        return i;
      },
      get _options() {
        return n;
      },
      set _options(value) {
        n = {
          ...n,
          ...value
        };
      }
    },
    subscribe: ej,
    trigger: eC,
    register: eF,
    handleSubmit: eQ,
    watch: e$,
    setValue: eh,
    getValues: eT,
    reset: eq,
    resetField: eV,
    clearErrors: eD,
    unregister: ez,
    setError: eN,
    setFocus: eW,
    getFieldState: eI
  };
  return {
    ...eG,
    formControl: eG
  };
}
export function $$eD5(e = {}) {
  let r = useRef(void 0);
  let n = useRef(void 0);
  let [s, o] = useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: W(e.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    validatingFields: {},
    errors: e.errors || {},
    disabled: e.disabled || !1,
    isReady: !1,
    defaultValues: W(e.defaultValues) ? void 0 : e.defaultValues
  });
  if (!r.current) {
    if (e.formControl) {
      r.current = {
        ...e.formControl,
        formState: s
      };
      e.defaultValues && !W(e.defaultValues) && e.formControl.reset(e.defaultValues, e.resetOptions);
    } else {
      let {
        formControl,
        ...i
      } = eM(e);
      r.current = {
        ...i,
        formState: s
      };
    }
  }
  let a = r.current.control;
  a._options = e;
  D(() => {
    let e = a._subscribe({
      formState: a._proxyFormState,
      callback: () => o({
        ...a._formState
      }),
      reRenderRoot: !0
    });
    o(e => ({
      ...e,
      isReady: !0
    }));
    a._formState.isReady = !0;
    return e;
  }, [a]);
  useEffect(() => a._disableForm(e.disabled), [a, e.disabled]);
  useEffect(() => {
    e.mode && (a._options.mode = e.mode);
    e.reValidateMode && (a._options.reValidateMode = e.reValidateMode);
  }, [a, e.mode, e.reValidateMode]);
  useEffect(() => {
    e.errors && (a._setErrors(e.errors), a._focusError());
  }, [a, e.errors]);
  useEffect(() => {
    e.shouldUnregister && a._subjects.state.next({
      values: a._getWatch()
    });
  }, [a, e.shouldUnregister]);
  useEffect(() => {
    if (a._proxyFormState.isDirty) {
      let e = a._getDirty();
      e !== s.isDirty && a._subjects.state.next({
        isDirty: e
      });
    }
  }, [a, s.isDirty]);
  useEffect(() => {
    e.values && !V(e.values, n.current) ? (a._reset(e.values, {
      keepFieldsRef: !0,
      ...a._options.resetOptions
    }), n.current = e.values, o(e => ({
      ...e
    }))) : a._resetDefaultValues();
  }, [a, e.values]);
  useEffect(() => {
    a._state.mount || (a._setValid(), a._state.mount = !0);
    a._state.watch && (a._state.watch = !1, a._subjects.state.next({
      ...a._formState
    }));
    a._removeUnmounted();
  });
  r.current.formState = M(s, a);
  return r.current;
}
export const Gb = $$Z0;
export const Jt = $$_1;
export const Op = $$R2;
export const as = $$z3;
export const hZ = $$E4;
export const mN = $$eD5;