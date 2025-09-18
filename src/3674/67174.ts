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
export function $$g0() {
  let e = lR();
  let {
    nodeIds,
    noSelection
  } = function () {
    let e = useDevModeFocusId();
    let t = Tv();
    let n = dh();
    let a = !e && !t?.length;
    let i = e ? [e] : t?.length ? t : [n];
    return {
      noSelection: a,
      nodeIds: useDeepEqualSceneValue((e, t) => {
        if (!t?.length) return [];
        let n = [];
        t.forEach(t => {
          let a = e.get(t);
          if (a) {
            let e = function (e) {
              let t = e.parentNode;
              for (; t;) {
                if ("SYMBOL" === t.type || "INSTANCE" === t.type) return t;
                t = t.parentNode;
              }
              return null;
            }(a);
            if (e && e.guid) {
              n.push(e.guid);
              return;
            }
            (function (e) {
              let t = [];
              (function e(n) {
                if ("SYMBOL" === n.type || "INSTANCE" === n.type) {
                  t.push(n);
                  return;
                }
                "childrenNodes" in n && Array.isArray(n.childrenNodes) && n.childrenNodes.forEach(t => {
                  e(t);
                });
              })(e);
              return t;
            })(a).forEach(e => {
              n.push(e.guid);
            });
          }
        });
        return n;
      }, i)
    };
  }();
  return {
    noSelection,
    assetKeys: [...new Set(useMemo(() => {
      let n = [];
      nodeIds.forEach(t => {
        let a = e(t);
        a && n.push(a);
      });
      return n;
    }, [nodeIds, e]))]
  };
}
export function $$x1({
  componentKey: e,
  defaultFilter: t,
  entrypoint: n
}) {
  let d = oA();
  let {
    assetKeys,
    noSelection
  } = $$g0();
  let p = new Set(assetKeys);
  let h = function ({
    assetKeys: e,
    componentKey: t,
    defaultFilter: n,
    noSelection: s
  }) {
    let [d, c] = setupResourceAtomHandler(GD(e), {
      enabled: !0
    });
    let u = useMemo(() => d.data ? function (e) {
      let t = Object.keys(e.components || {}).map(t => ({
        ...e.components[t],
        type: PrimaryWorkflowEnum.COMPONENT,
        library_key: t.split(",")[0]
      }));
      let n = Object.keys(e.state_groups || {}).map(t => ({
        ...e.state_groups[t],
        type: PrimaryWorkflowEnum.STATE_GROUP,
        library_key: t.split(",")[0]
      }));
      return rI(t, n);
    }(d.data) : null, [d.data]);
    return {
      ...Hf({
        componentKey: t,
        componentsAndStateGroups: u,
        defaultFilter: n,
        filterIcons: !1
      }),
      status: d.status,
      refetch: c.refetch,
      noSelection: s
    };
  }({
    assetKeys: k(p, d),
    componentKey: e,
    defaultFilter: t,
    noSelection
  });
  return {
    ...IN({
      displayedComponent: h.displayedComponent,
      filteredComponents: h.filteredComponents,
      componentBrowserListRowData: h.componentBrowserListRowData,
      setComponentBrowserListRowData: h.setComponentBrowserListRowData,
      suggestions: h.suggestions,
      entrypoint: n
    }),
    ...h,
    entrypoint: n
  };
}
export const AR = $$g0;
export const iE = $$x1;