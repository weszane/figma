import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect, useMemo, useCallback } from "react";
import { i } from "../9410/157320";
import { getFeatureFlags } from "../905/601108";
import { createLocalStorageAtom, useAtomValueAndSetter } from "../figma_app/27355";
import l from "classnames";
import { generateRecordingKey } from "../figma_app/878298";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString } from "../905/303541";
import { Ml } from "../905/971098";
import { m as _$$m } from "../figma_app/175364";
var d = l;
let f = createLocalStorageAtom("first_draft_last_used_kit", "");
let g = createLocalStorageAtom("first_draft_reset_kit_for_byod", !0);
function _(e) {
  return "LOCAL" === e.dsKitKey.type ? e.dsKitKey.pageId ?? "local" : e.dsKitKey.key;
}
function x({
  text: e
}) {
  return jsxs("div", {
    className: d()(_$$s.flex.flexRow.$),
    children: [jsx(i, {
      style: {
        marginLeft: -2
      }
    }), " ", jsx("span", {
      className: d()(_$$s.pl4.$),
      children: e
    })]
  });
}
export function $$y1(e = !1) {
  let {
    libraryKitsQueryStatus,
    localKits,
    libraryKits
  } = Ml();
  let [a, l] = useAtomValueAndSetter(f);
  let [d, c] = useAtomValueAndSetter(g);
  d && getFeatureFlags().first_draft_direct_gen && (l(""), c(!1));
  let [u, p] = useState(null);
  let m = "loaded" === libraryKitsQueryStatus;
  useEffect(() => {
    if (m && null === u) {
      if (e) {
        let e = localKits[0] ?? libraryKits[0] ?? null;
        e && p({
          type: "KIT",
          kit: e
        });
      } else {
        let e = libraryKits[0] ?? localKits[0] ?? null;
        e && p({
          type: "KIT",
          kit: e
        });
      }
    }
  }, [localKits, libraryKits, m, u, p, e]);
  let x = useMemo(() => [...libraryKits, ...localKits], [libraryKits, localKits]);
  let b = useMemo(() => {
    let e = x.find(e => _(e) === a);
    m && !e && l("");
    return e ?? null;
  }, [a, x, l, m]);
  return {
    kitsAreLoaded: m,
    hasLastSelectedKit: m ? !!b : !!a,
    selectedKit: b,
    setSelectedKit: useCallback(e => {
      l(_(e));
    }, [l]),
    selectedKitOption: u,
    setSelectedKitOption: p,
    allUsableKitEntries: x
  };
}
export function $$b0({
  items: e,
  kitsAreLoaded: t,
  selectedKitOption: i,
  setSelectedKitOption: n,
  recordingKey: a
}) {
  return jsx(_$$m, {
    selected: i,
    onSelectedChange: n,
    placeholder: jsx(x, {
      text: t ? getI18nString("first_draft.library_placeholder") : getI18nString("first_draft.kits_loading")
    }),
    labelForSelectedItem: e => jsx(x, {
      text: e.kit.name
    }),
    displayAboveTarget: !0,
    lean: "right",
    items: e,
    recordingKey: generateRecordingKey(a, "kitPicker"),
    disabled: !t
  });
}
export const YG = $$b0;
export const sI = $$y1;