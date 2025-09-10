import { useMemo } from "react";
import { useSubscription } from "../figma_app/288654";
import { ComponentAttribution, StateGroupAttribution, StyleAttribution, VariableCollectionAttribution } from "../figma_app/43951";
import { PrimaryWorkflowEnum } from "../figma_app/633080";
export function $$o2({
  assetKey: e,
  type: t
}) {
  let r = useSubscription(ComponentAttribution, {
    key: e ?? ""
  }, {
    enabled: t === PrimaryWorkflowEnum.COMPONENT && !!e
  });
  let o = useSubscription(StateGroupAttribution, {
    key: e ?? ""
  }, {
    enabled: t === PrimaryWorkflowEnum.STATE_GROUP && !!e
  });
  let l = useSubscription(StyleAttribution, {
    key: e ?? ""
  }, {
    enabled: t === PrimaryWorkflowEnum.STYLE && !!e
  });
  let d = useSubscription(VariableCollectionAttribution, {
    key: e ?? ""
  }, {
    enabled: t === PrimaryWorkflowEnum.VARIABLE_SET && !!e
  });
  let c = useMemo(() => t !== PrimaryWorkflowEnum.COMPONENT ? null : r, [r, t]);
  let u = useMemo(() => t !== PrimaryWorkflowEnum.STATE_GROUP ? null : o, [o, t]);
  let p = useMemo(() => t !== PrimaryWorkflowEnum.STYLE ? null : l, [l, t]);
  let _ = useMemo(() => t !== PrimaryWorkflowEnum.VARIABLE_SET ? null : d, [d, t]);
  return useMemo(() => null != c ? "loaded" !== c.status ? c : {
    status: c.status,
    data: {
      assetAttribution: c.data?.component?.assetAttribution
    },
    errors: c.errors
  } : null != u ? "loaded" !== u.status ? u : {
    status: u.status,
    data: {
      assetAttribution: u.data?.stateGroup?.assetAttribution
    },
    errors: u.errors
  } : null != p ? "loaded" !== p.status ? p : {
    status: p.status,
    data: {
      assetAttribution: p.data?.style?.assetAttribution
    },
    errors: p.errors
  } : null != _ ? "loaded" !== _.status ? _ : {
    status: _.status,
    data: {
      assetAttribution: _.data?.variableCollection?.assetAttribution
    },
    errors: _.errors
  } : {
    status: "disabled",
    data: null,
    errors: null
  }, [c, u, p, _]);
}
export function $$l1(e) {
  return {
    id: e.id,
    name: e.name ?? "",
    profile_handle: e.handle ?? "",
    img_url: e.imgUrl ?? void 0,
    badges: [],
    img_urls: {},
    follower_count: 0,
    description: null
  };
}
export function $$d0(e) {
  return {
    id: e.id,
    name: e.name ?? void 0,
    handle: e.handle ?? void 0,
    img_url: e.imgUrl ?? void 0
  };
}
export const G5 = $$d0;
export const M = $$l1;
export const R8 = $$o2;
