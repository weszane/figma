import { getInitialOptions } from "../figma_app/169182";
import { Fj } from "../figma_app/594947";
export function $$$$a0({
  isSitesTemplate: e,
  resourceContentId: t,
  publishedSiteUrl: i
}) {
  let {
    getDynamicConfig
  } = Fj("sites_template_hubfile_id_to_url_map");
  if (null != i) return i;
  let s = getInitialOptions().cluster_name;
  if (!e || !t || !s) return;
  let r = getDynamicConfig().get(s, void 0);
  return r?.[t];
}
export const a = $$$$a0;