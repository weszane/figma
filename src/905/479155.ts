import { jsx } from "react/jsx-runtime";
import { createContext, createRef, useContext, useEffect, useCallback, useRef, useId, useState, useLayoutEffect } from "react";
import { noop } from 'lodash-es';
import { generateUUIDv4 } from "../905/871474";
import { Um } from "../905/848862";
class l {
  constructor() {
    this.listLength = 0;
    this.map = new Map();
  }
  reset() {
    this.listLength = 0;
    this.map = new Map();
  }
  register(e, t, i) {
    if (!this.map.has(e)) {
      void 0 !== i ? this.listLength += i : this.listLength++;
      let n = this.listLength - 1;
      this.map.set(e, {
        index: n,
        ref: t
      });
      return n;
    }
    return this.map.get(e)?.index ?? -1;
  }
  unregister(e) {
    this.map.$$delete(e);
    this.listLength--;
  }
  getRef(e) {
    for (let [t, {
      index: i,
      ref: n
    }] of this.map.entries()) if (i === e) return n;
    return null;
  }
}
export class $$d6 {
  constructor() {
    this.items = [];
    this.listeners = new Map();
  }
  register(e, t = noop) {
    null === e.ref.current || this.items.findIndex(t => t.id === e.id) > -1 || (this.items = [...this.items, e].sort((e, t) => {
      var i;
      return e.ref.current && t.ref.current ? (i = e.ref.current, t.ref.current.compareDocumentPosition(i) & Node.DOCUMENT_POSITION_PRECEDING) ? -1 : 1 : 0;
    }).filter(e => null !== e.ref.current), this.listeners.set(e.id, t), this.notifyItemsChanged());
  }
  unregister(e) {
    this.items = this.items.filter(t => t.id !== e);
    this.listeners.$$delete(e);
    this.notifyItemsChanged();
  }
  getRef(e) {
    return this.items[e]?.ref ?? null;
  }
  getIndex(e) {
    return this.items.findIndex(t => t.id === e);
  }
  reset() {
    this.items = [];
  }
  findFirstIndexWith(e) {
    return this.items.findIndex(e);
  }
  notifyItemsChanged() {
    for (let e of this.listeners.values()) e();
  }
}
let $$c5 = createContext({
  tracker: new $$d6(),
  renderId: 0,
  setRenderId: noop
});
let $$u3 = createContext({
  trackerRef: createRef(),
  layoutIndex: -1
});
let $$p1 = createContext({
  trackerRef: createRef(),
  layoutIndex: -1,
  columns: 1
});
export function $$m7(e) {
  let t = useContext($$c5);
  let i = Um();
  useEffect(() => {
    i || e.current?.focus();
  }, [t.renderId, i, e]);
}
export function $$h4() {
  let {
    renderId,
    setRenderId
  } = useContext($$c5);
  return useCallback(() => {
    setRenderId(renderId + 1);
  }, [renderId, setRenderId]);
}
export function $$g2(e, t) {
  let i = useRef(new l());
  let {
    tracker
  } = useContext($$c5);
  let a = useId();
  let [s, o] = useState(-1);
  useEffect(() => (tracker.register({
    id: a,
    ref: e,
    primary: t
  }, () => o(tracker.getIndex(a))), () => {
    tracker.unregister(a);
  }), [a, t, e, tracker]);
  let d = tracker.findFirstIndexWith(e => !!e.primary);
  return {
    tracker: i,
    index: s,
    isPrimaryLayout: d < 0 ? void 0 : d === s
  };
}
let f = createContext({});
export function $$_0(e) {
  let t = useContext($$u3);
  let i = useContext($$p1);
  t.trackerRef.current?.reset();
  i.trackerRef.current?.reset();
  let a = generateUUIDv4();
  return jsx(f.Provider, {
    value: a,
    children: e.children
  });
}
export function $$A8(e) {
  let t = useContext($$u3);
  let i = useContext(f);
  let n = useId();
  let [a, s] = useState(-1);
  let o = b(t.layoutIndex);
  useLayoutEffect(() => {
    t.trackerRef?.current && s(t.trackerRef.current.register(n, e));
  }, [t.trackerRef, n, e, i]);
  return {
    itemIndex: b(a),
    layoutIndex: o,
    inPrimaryLayout: t.primary
  };
}
export function $$y9(e, t = !1) {
  let i = useContext($$p1);
  let n = useContext(f);
  let a = useId();
  let [s, o] = useState(-1);
  let l = b(i.layoutIndex);
  let d = b(t ? 0 : s % i.columns);
  let c = b(Math.floor(s / i.columns));
  useLayoutEffect(() => {
    i.trackerRef?.current && o(i.trackerRef.current.register(a, e, t ? i.columns : void 0));
  }, [i.trackerRef, a, e, n, i.columns, t]);
  return {
    rowIndex: c,
    itemIndex: b(s),
    layoutIndex: l,
    columnIndex: d,
    inPrimaryLayout: i.primary
  };
}
function b(e) {
  return e < 0 ? 0 : e;
}
export const AD = $$_0;
export const AM = $$p1;
export const L0 = $$g2;
export const MQ = $$u3;
export const R$ = $$h4;
export const Uz = $$c5;
export const Yf = $$d6;
export const bE = $$m7;
export const tm = $$A8;
export const zp = $$y9;
