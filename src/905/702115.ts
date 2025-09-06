import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect, useLayoutEffect } from "react";
import { renderI18nText } from "../905/303541";
var s = (e => (e[e.CHECKING_FOR_CHANGES = 0] = "CHECKING_FOR_CHANGES", e[e.APPLYING_UPDATE = 1] = "APPLYING_UPDATE", e[e.PULLING_IT_ALL_TOGETHER = 2] = "PULLING_IT_ALL_TOGETHER", e[e.CHECKING_FOR_CONFLICTS = 3] = "CHECKING_FOR_CONFLICTS", e[e.GENERATING_CHANGED_ITEMS = 4] = "GENERATING_CHANGED_ITEMS", e))(s || {});
let o = {
  0: () => renderI18nText("collaboration.branching.checking_for_changes"),
  1: () => renderI18nText("collaboration.branching.applying_update"),
  2: () => renderI18nText("collaboration.branching.pulling_it_all_together"),
  3: () => renderI18nText("collaboration.branching.checking_for_conflicts"),
  4: () => renderI18nText("collaboration.branching.generating_changed_items")
};
export function $$l0(e) {
  let {
    hasLoadedDiffs,
    hasLoadedConflictDetection,
    willRemap,
    ignoreConflictDetection
  } = e;
  let [l, d] = useState(0);
  let [c, u] = useState(.01);
  useEffect(() => {
    hasLoadedDiffs && hasLoadedConflictDetection ? willRemap ? d(1) : d(2) : hasLoadedDiffs && !ignoreConflictDetection && d(3);
  }, [hasLoadedConflictDetection, hasLoadedDiffs, willRemap, ignoreConflictDetection]);
  useLayoutEffect(() => {
    let e = setTimeout(() => {
      u(.99);
    }, 100);
    return () => {
      clearTimeout(e);
    };
  }, []);
  useEffect(() => {
    let e = setTimeout(() => {
      d(e => 0 === e ? 4 : e);
    }, 5e3);
    return () => {
      clearTimeout(e);
    };
  }, []);
  let p = `translateX(-${(1 - c) * 100}%)`;
  let m = o[l];
  return jsxs("div", {
    className: "loading--loadingBarCont--ToJXw text--fontPos14--OL9Hp text--_fontBase--QdLsd",
    children: [jsx("div", {
      className: "loading--loadingBar--GFFCt",
      children: jsx("div", {
        className: "loading--loadingBarInner--6U9VR",
        style: {
          transform: p
        }
      })
    }), jsx("div", {
      children: jsx(m, {})
    })]
  });
}
export const G = $$l0;