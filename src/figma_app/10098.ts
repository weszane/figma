import { isNotNullish } from "../figma_app/95419";
import { l as _$$l } from "../905/716947";
import { oA } from "../905/663269";
import { t as _$$t } from "../905/303541";
import { py } from "../905/395857";
import { yW } from "../figma_app/644808";
export function $$d1(e) {
  var t;
  let r = oA(e.libraryKeyToFile?.file);
  if (!r) return null;
  let d = r.libraryAssets.map(e => py(_$$l(r.libraryKey), e)).filter(isNotNullish);
  return 0 === d.length ? null : {
    library: {
      name: "Pages" === (t = r).name ? _$$t("design_systems.assets_panel.site_blocks.pages") : "Navigation" === t.name ? _$$t("design_systems.assets_panel.site_blocks.navigation") : "Heroes" === t.name ? _$$t("design_systems.assets_panel.site_blocks.heroes") : "Features" === t.name ? _$$t("design_systems.assets_panel.site_blocks.features") : "CMS" === t.name ? _$$t("design_systems.assets_panel.site_blocks.cms") : t.name,
      libraryKey: _$$l(r.libraryKey),
      thumbnailUrl: r.thumbnailUrl,
      thumbnailShouldCover: !1,
      numResponsiveSets: d.length,
      type: yW.SITE,
      libraryType: "team"
    },
    assets: d
  };
}
let $$c0 = "SITE_KIT_FILE";
let $$u2 = "SITE_KIT_EMBEDS_LIBRARY_KEY";
export const GZ = $$c0;
export const Pv = $$d1;
export const Yl = $$u2;