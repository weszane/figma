import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef, useState, useRef, useEffect } from "react";
import { ServiceCategories as _$$e } from "../905/165054";
import s from "classnames";
import { logError } from "../905/714362";
import { V } from "../figma_app/385855";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { E as _$$E, N as _$$N } from "../905/139531";
import { j6, Om, o as _$$o, rR, r$, R as _$$R } from "../905/708693";
var o = s;
export let $$m0 = forwardRef(({
  thumbnailUrl: e,
  additionalThumbnailUrls: t,
  thumbnailType: i,
  clientMeta: s,
  lastTouchedAt: m,
  ...h
}, g) => {
  let [f, _] = useState(0);
  let [A, y] = useState(!1);
  let [b, v] = useState(!1);
  let I = useRef(null);
  let E = useRef(void 0);
  let x = useRef(void 0);
  let [S, w] = useState(!1);
  let C = _$$E(e, t, i, !0);
  let T = C.length;
  let k = C[f];
  useEffect(() => {
    S || Promise.all(t.map(e => _$$N(e))).then(() => {
      w(!0);
    }).catch(e => {
      logError(_$$e.SEARCH, "[fb-scrubber] Error: Could not pre-load fragment thumbnails", e);
    });
  }, [S, t]);
  let R = () => {
    x.current || (x.current = window.setInterval(() => {
      _(e => (e + 1) % T);
    }, 800));
  };
  let N = () => {
    x.current && (clearInterval(x.current), x.current = void 0);
  };
  let P = () => {
    clearTimeout(E.current);
    E.current = void 0;
    y(!1);
    v(!1);
    N();
    _(0);
  };
  let O = (e, t) => {
    if (N(), 0 !== t.buttons) {
      P();
      _(0);
      return;
    }
    _(e);
  };
  if (useEffect(() => {
    clearInterval(x.current);
    clearTimeout(E.current);
  }, []), !S) return jsx("div", {
    className: cssBuilderInstance.hFull.wFull.$,
    children: jsx(V, {
      thumbnailUrl: e,
      thumbnailType: i,
      lastTouchedAt: m,
      clientMeta: s,
      ...h
    })
  });
  let D = Array.from({
    length: C.length
  }).map((e, t) => jsx("div", {
    className: j6,
    onMouseEnter: b ? e => O(t, e) : void 0,
    onMouseMove: b ? e => O(t, e) : void 0,
    children: jsx("button", {
      className: o()(Om, {
        [_$$o]: t === f
      })
    }, t)
  }, t));
  return jsx("div", {
    className: cssBuilderInstance.hFull.wFull.$,
    ref: g,
    onMouseEnter: () => {
      y(!0);
      R();
      E.current = window.setTimeout(() => {
        v(!0);
      }, 200);
    },
    onMouseLeave: P,
    onDragStart: P,
    children: jsxs("div", {
      ref: I,
      className: cssBuilderInstance.hFull.wFull.$,
      children: [jsx("div", {
        className: rR
      }), jsx(V, {
        thumbnailUrl: k,
        thumbnailType: i,
        lastTouchedAt: m,
        clientMeta: s,
        draggable: !0,
        ...h
      }), jsx("div", {
        className: o()(r$, {
          [_$$R]: !A
        }),
        onMouseLeave: b ? () => {
          R();
        } : void 0,
        children: D
      })]
    })
  });
});
export const A = $$m0;