import { jsxs, jsx } from "react/jsx-runtime";
import { N } from "../905/438674";
import { U } from "../905/103637";
import { getFeatureFlags } from "../905/601108";
import { tx } from "../905/303541";
import { Kx } from "../figma_app/546509";
import { bD } from "../figma_app/45218";
export function $$c0({
  resourceType: e
}) {
  let t = `/community/${e === bD.HUB_FILE ? "figjam" : e === bD.PLUGIN ? "plugins/figjam" : "widgets"}`;
  let s = Kx();
  return s?.shouldOptimizeForIpadApp || getFeatureFlags().cmty_m10n_test_apple_os ? null : jsxs("span", {
    className: "browse_more_cta--communityLink--kpkNC text--fontPos13--xW8hS text--_fontBase--QdLsd",
    children: [jsx(U, {
      className: "browse_more_cta--icon--4IWf5"
    }), jsx(N, {
      href: t,
      newTab: !0,
      children: tx("whiteboard.inserts.browse_more_in_community")
    })]
  });
}
export const q = $$c0;