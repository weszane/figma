import { jsx, Fragment } from "react/jsx-runtime";
import { memo, useState, useCallback, useMemo } from "react";
export let $$i0 = memo(function ({
  prioritizedBanners: e,
  location: t
}) {
  let {
    bannerIdToShow,
    registerActiveBanner
  } = function ({
    prioritizedBanners: e
  }) {
    let [t, n] = useState(new Set());
    return {
      registerActiveBanner: useCallback(e => (n(t => {
        if (t.has(e)) return t;
        let n = new Set(t);
        n.add(e);
        return n;
      }), () => {
        n(t => {
          if (t.has(e)) {
            let n = new Set(t);
            n.$$delete(e);
            return n;
          }
          return t;
        });
      }), []),
      bannerIdToShow: function (e, t = []) {
        let n = useMemo(() => t.map(e => e.bannerId).reduce((e, t, n) => (e.set(t, n), e), new Map()), [t]);
        let a = useMemo(() => [...e].reduce((e, t) => {
          let a = n.get(t) ?? 1 / 0;
          return a < e ? a : e;
        }, 1 / 0), [e, n]);
        return t[a]?.bannerId ?? null;
      }(t, e)
    };
  }({
    prioritizedBanners: e
  });
  return jsx(Fragment, {
    children: e.map(({
      bannerId: e,
      Banner: r,
      dataTestId: o
    }) => jsx(r, {
      bannerId: e,
      shouldDisplay: e === bannerIdToShow,
      registerAsActive: registerActiveBanner,
      location: t,
      dataTestId: o
    }, e))
  });
});
export const Y = $$i0;