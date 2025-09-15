import { getInitialOptions } from "../figma_app/169182";
import { setupDynamicConfigHandler } from "../figma_app/594947";
export function $$n0({
  isSitesTemplate: e,
  resourceContentId: t,
  publishedSiteUrl: r
}) {
  let {
    getDynamicConfig
  } = setupDynamicConfigHandler("sites_template_hubfile_id_to_url_map");
  if (null != r) return r;
  let o = getInitialOptions().cluster_name;
  if (!e || !t || !o) return;
  let a = getDynamicConfig().get(o, void 0);
  return a?.[t];
}
export const a = $$n0;