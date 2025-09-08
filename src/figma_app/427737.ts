import { SitesBindingsCpp } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { rg } from "../figma_app/61758";
import { _ } from "../905/242661";
import { Ct } from "../figma_app/205280";
import { Yf } from "../905/556648";
function d(e, t = {}) {
  if (!SitesBindingsCpp) throw Error("SitesBindingsCpp is not available in generateJsonCPP");
  return SitesBindingsCpp.generateSitesBundleJson(e, t);
}
export async function $$c1(e, t = !1, r = !1, n = !1, i = !1) {
  await rg();
  let o = await d(e, {
    neverCombineSVGAndPNG: t,
    onlyFlattenSVGIfVectorLike: r,
    skipCodeFilesystem: n,
    includeRootUntrackedSublayers: i
  });
  let u = {
    ...o.bundle,
    files: {}
  };
  await _(u);
  await Yf(u);
  return {
    bundle: u,
    assetInstructions: o.assetInstructions
  };
}
export async function $$u0(e) {
  return {
    ...(await p(e)),
    files: {}
  };
}
async function p(e) {
  return (await d(e)).bundle;
}
export async function $$_2(e, t) {
  let {
    updatedWebsite,
    assetInstructions
  } = Array.from(t).reduce((t, r) => {
    var n;
    var i;
    let a = !e.nodeById[r];
    let s = d([r], {
      maxDepth: 1,
      recurseChildren: a
    });
    n = t.updatedWebsite;
    i = s.bundle;
    n.nodeById = {
      ...n.nodeById,
      ...i.nodeById
    };
    n.assetIdToGuid = {
      ...n.assetIdToGuid,
      ...i.assetIdToGuid
    };
    n.guidToUrl = {
      ...n.guidToUrl,
      ...i.guidToUrl
    };
    n.assets = {
      ...n.assets,
      ...i.assets
    };
    n.fonts = {
      ...n.fonts,
      ...i.fonts
    };
    n.siteSettings = {
      ...n.siteSettings,
      ...i.siteSettings
    };
    t.assetInstructions.push(...s.assetInstructions);
    return t;
  }, {
    updatedWebsite: {
      roots: [],
      nodeById: {},
      siteSettings: {},
      assetIdToGuid: {},
      guidToUrl: {},
      animateRootIds: [],
      stablePathToAssetHash: {},
      fonts: {},
      files: {},
      assets: {}
    },
    assetInstructions: []
  });
  await Yf(updatedWebsite);
  await _(updatedWebsite);
  let a = await Ct(assetInstructions);
  let c = {
    ...e,
    nodeById: {
      ...e.nodeById,
      ...updatedWebsite.nodeById
    },
    assetIdToGuid: {
      ...e.assetIdToGuid,
      ...updatedWebsite.assetIdToGuid
    },
    guidToUrl: {
      ...e.assetIdToGuid,
      ...updatedWebsite.assetIdToGuid
    },
    assets: {
      ...e.assets,
      ...updatedWebsite.assets
    },
    fonts: {
      ...e.fonts,
      ...updatedWebsite.fonts
    },
    files: {
      ...e.files,
      ...a
    },
    siteSettings: {
      ...e.siteSettings,
      ...updatedWebsite.siteSettings
    },
    compiledCode: updatedWebsite.compiledCode,
    globalStyles: updatedWebsite.globalStyles,
    sourceCodeHash: updatedWebsite.sourceCodeHash
  };
  getFeatureFlags().internal_only_debug_tools && console.log("Bundle update result:", {
    updates: updatedWebsite,
    updatedWebsiteBundle: c
  });
  return c;
}
export const B3 = $$u0;
export const LE = $$c1;
export const c3 = $$_2;