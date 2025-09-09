import { useMemo } from "react";
import { Rs } from "../figma_app/288654";
import { ComponentAttribution, StateGroupAttribution, StyleAttribution, VariableCollectionAttribution } from "../figma_app/43951";
import { PW } from "../figma_app/633080";
export function $$o2({
  assetKey: e,
  type: t
}) {
  let r = Rs(ComponentAttribution, {
    key: e ?? ""
  }, {
    enabled: t === PW.COMPONENT && !!e
  });
  let o = Rs(StateGroupAttribution, {
    key: e ?? ""
  }, {
    enabled: t === PW.STATE_GROUP && !!e
  });
  let l = Rs(StyleAttribution, {
    key: e ?? ""
  }, {
    enabled: t === PW.STYLE && !!e
  });
  let d = Rs(VariableCollectionAttribution, {
    key: e ?? ""
  }, {
    enabled: t === PW.VARIABLE_SET && !!e
  });
  let c = useMemo(() => t !== PW.COMPONENT ? null : r, [r, t]);
  let u = useMemo(() => t !== PW.STATE_GROUP ? null : o, [o, t]);
  let p = useMemo(() => t !== PW.STYLE ? null : l, [l, t]);
  let _ = useMemo(() => t !== PW.VARIABLE_SET ? null : d, [d, t]);
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