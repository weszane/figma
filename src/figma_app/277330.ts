import { useMemo, useCallback } from "react";
import { getFeatureFlags } from "../905/601108";
import { setupResourceAtomHandler } from "../figma_app/566371";
import { LH } from "../905/872904";
import { useCurrentPlanUser, useIsOrgMemberOrAdminUser } from "../figma_app/465071";
import { Tf } from "../905/297574";
import { Wb, rV, uU } from "../905/627262";
import { Xk, DQ, y$ } from "../905/712714";
import { n as _$$n } from "../905/402643";
export function $$p2(e, t) {
  let r = useCurrentPlanUser("useCanViewDSA");
  return useIsOrgMemberOrAdminUser(r).transform(r => $$_1(e, t, r));
}
export function $$_1(e, t, r) {
  if (!e) return !1;
  let n = !!e.parentOrgId;
  return t && n && r;
}
export function $$h4({
  assetType: e,
  duration: t,
  libraryFileKey: r,
  entrypoint: o
}) {
  let p = LH();
  let [_] = setupResourceAtomHandler(Xk({
    duration: t,
    orgId: p,
    libraryFileKey: r ?? "",
    entryPointForLogging: o
  }), {
    enabled: !!r && (!getFeatureFlags().dsa_styles_variables_ui || e === _$$n.PRODUCT_COMPONENTS)
  });
  let [h] = setupResourceAtomHandler(DQ({
    fileKey: r ?? ""
  }), {
    enabled: !!r && getFeatureFlags().dsa_styles_variables_ui && e === _$$n.STYLES
  });
  let [m] = setupResourceAtomHandler(y$({
    fileKey: r ?? ""
  }), {
    enabled: !!r && getFeatureFlags().dsa_styles_variables_ui && e === _$$n.VARIABLES
  });
  return {
    itemsList: useMemo(() => {
      let {
        components,
        stateGroups
      } = _.data ?? {
        components: [],
        stateGroups: []
      };
      if (!getFeatureFlags().dsa_styles_variables_ui) return {
        type: _$$n.PRODUCT_COMPONENTS,
        items: Tf(components, stateGroups)
      };
      switch (e) {
        case _$$n.PRODUCT_COMPONENTS:
          return {
            type: _$$n.PRODUCT_COMPONENTS,
            items: Tf(components, stateGroups)
          };
        case _$$n.STYLES:
          return {
            type: _$$n.STYLES,
            items: Wb(h.data?.styles, r ?? "", t)
          };
        case _$$n.VARIABLES:
          return {
            type: _$$n.VARIABLES,
            items: rV(m.data?.variables, r ?? "", t),
            modeItems: uU(m.data?.variable_modes),
            variableSets: m.data?.variable_sets ?? []
          };
      }
    }, [_.data, h.data, m.data, e, t, r]),
    isLoading: useMemo(() => {
      if (!getFeatureFlags().dsa_styles_variables_ui) return "loading" === _.status;
      switch (e) {
        case _$$n.PRODUCT_COMPONENTS:
          return "loading" === _.status;
        case _$$n.STYLES:
          return "loading" === h.status;
        case _$$n.VARIABLES:
          return "loading" === m.status;
      }
    }, [_.status, h.status, m.status, e])
  };
}
export function $$m3(e) {
  return useCallback(t => {
    t < (e.current?.getScrollTop() ?? 0) && e.current?.scrollTo(t);
  }, [e]);
}
export function $$g0(e, t, r) {
  return !getFeatureFlags().dsa_styles_variables_ui || e > 0 ? _$$n.PRODUCT_COMPONENTS : t > 0 ? _$$n.STYLES : r > 0 ? _$$n.VARIABLES : _$$n.PRODUCT_COMPONENTS;
}
export const Gk = $$g0;
export const MG = $$_1;
export const jT = $$p2;
export const nZ = $$m3;
export const ue = $$h4;