import { useContext, useState, useCallback } from "react";
import { rXF } from "../figma_app/763686";
import { useAtomValueAndSetter } from "../figma_app/27355";
import { zN } from "../905/19536";
import { useLocalStorageSync } from "../905/657224";
import { PW } from "../figma_app/633080";
import { A as _$$A } from "../905/749030";
import { B } from "../905/946243";
export function $$u0({
  selectedItem: e,
  resolvedType: t
}) {
  let i = useContext(B);
  let u = _$$A(e?.type === PW.VARIABLE ? [e.resolvedType] : null, e);
  let [p, m] = useLocalStorageSync(i.preferredLayoutLocalStorageKey, i.preferredLayout);
  let [h, g] = useAtomValueAndSetter(i.variablePickerSelectionAtom);
  let [f, _] = useState(function ({
    subscribedLibraries: e,
    preferredLayout: t,
    resolvedType: i,
    lastSelection: n
  }) {
    let a = "list";
    return (i === rXF.COLOR && (a = t), "SUBSCRIBED_VARIABLES" !== n.type || e.find(e => e.libraryKey === n.libraryKey)) ? {
      ...n,
      layout: a
    } : {
      type: "ALL_LIBRARIES",
      layout: a
    };
  }({
    subscribedLibraries: u,
    preferredLayout: p,
    resolvedType: t,
    lastSelection: h
  }));
  let A = zN(f);
  let y = useCallback(() => {
    let e = "grid" === A.layout ? "list" : "grid";
    m(e);
    _({
      ...A,
      layout: e
    });
  }, [A, m]);
  return {
    currentView: A,
    setCurrentView: useCallback(e => {
      _(e);
      let {
        layout,
        ...i
      } = e;
      g(i);
    }, [g]),
    toggleLayout: y
  };
}
export const R = $$u0;