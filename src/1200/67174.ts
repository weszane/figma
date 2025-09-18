import { useMemo } from "react";
import { setupResourceAtomHandler } from "../figma_app/566371";
import { GD } from "../1250/51387";
import { rI, Hf, IN } from "../6658/436658";
import { k } from "../6658/341273";
import { PrimaryWorkflowEnum } from "../figma_app/633080";
import { lR } from "../figma_app/204145";
import { Tv } from "../figma_app/311375";
import { useDevModeFocusId } from "../figma_app/88239";
import { dh } from "../figma_app/186343";
import { useDeepEqualSceneValue } from "../figma_app/167249";
import { oA } from "../figma_app/856806";
export function $$f0() {
  let e = lR();
  let {
    nodeIds,
    noSelection
  } = function () {
    let e = useDevModeFocusId();
    let n = Tv();
    let t = dh();
    let s = !e && !n?.length;
    let o = e ? [e] : n?.length ? n : [t];
    return {
      noSelection: s,
      nodeIds: useDeepEqualSceneValue((e, n) => {
        if (!n?.length) return [];
        let t = [];
        n.forEach(n => {
          let s = e.get(n);
          if (s) {
            let e = function (e) {
              let n = e.parentNode;
              for (; n;) {
                if ("SYMBOL" === n.type || "INSTANCE" === n.type) return n;
                n = n.parentNode;
              }
              return null;
            }(s);
            if (e && e.guid) {
              t.push(e.guid);
              return;
            }
            (function (e) {
              let n = [];
              (function e(t) {
                if ("SYMBOL" === t.type || "INSTANCE" === t.type) {
                  n.push(t);
                  return;
                }
                "childrenNodes" in t && Array.isArray(t.childrenNodes) && t.childrenNodes.forEach(n => {
                  e(n);
                });
              })(e);
              return n;
            })(s).forEach(e => {
              t.push(e.guid);
            });
          }
        });
        return t;
      }, o)
    };
  }();
  return {
    noSelection,
    assetKeys: [...new Set(useMemo(() => {
      let t = [];
      nodeIds.forEach(n => {
        let s = e(n);
        s && t.push(s);
      });
      return t;
    }, [nodeIds, e]))]
  };
}
export function $$_1({
  componentKey: e,
  defaultFilter: n,
  entrypoint: t
}) {
  let d = oA();
  let {
    assetKeys,
    noSelection
  } = $$f0();
  let h = new Set(assetKeys);
  let p = function ({
    assetKeys: e,
    componentKey: n,
    defaultFilter: t,
    noSelection: l
  }) {
    let [d, c] = setupResourceAtomHandler(GD(e), {
      enabled: !0
    });
    let u = useMemo(() => d.data ? function (e) {
      let n = Object.keys(e.components || {}).map(n => ({
        ...e.components[n],
        type: PrimaryWorkflowEnum.COMPONENT,
        library_key: n.split(",")[0]
      }));
      let t = Object.keys(e.state_groups || {}).map(n => ({
        ...e.state_groups[n],
        type: PrimaryWorkflowEnum.STATE_GROUP,
        library_key: n.split(",")[0]
      }));
      return rI(n, t);
    }(d.data) : null, [d.data]);
    return {
      ...Hf({
        componentKey: n,
        componentsAndStateGroups: u,
        defaultFilter: t,
        filterIcons: !1
      }),
      status: d.status,
      refetch: c.refetch,
      noSelection: l
    };
  }({
    assetKeys: k(h, d),
    componentKey: e,
    defaultFilter: n,
    noSelection
  });
  return {
    ...IN({
      displayedComponent: p.displayedComponent,
      filteredComponents: p.filteredComponents,
      componentBrowserListRowData: p.componentBrowserListRowData,
      setComponentBrowserListRowData: p.setComponentBrowserListRowData,
      suggestions: p.suggestions,
      entrypoint: t
    }),
    ...p,
    entrypoint: t
  };
}
export const AR = $$f0;
export const iE = $$_1;