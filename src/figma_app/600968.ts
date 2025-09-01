import { useMemo } from "react";
import { isNotNullish } from "../figma_app/95419";
import { l as _$$l } from "../905/716947";
import { getFeatureFlags } from "../905/601108";
import { eU, zl, md } from "../figma_app/27355";
import { unwrap } from "../vendor/812047";
import { Ek } from "../905/553831";
import { En } from "../figma_app/566371";
import { w0 } from "../figma_app/594947";
import { ZJ } from "../3973/697935";
import { Uv } from "../3973/473379";
import { Lg, nl } from "../figma_app/257275";
import { z } from "../905/239603";
import { u8 } from "../figma_app/976749";
import { Eo } from "../figma_app/80990";
import { FComponentType } from "../figma_app/191312";
import { IUX, Bu2 } from "../figma_app/43951";
import { Zi } from "../905/395857";
import { nT } from "../figma_app/53721";
let I = z.object({
  assetKey: z.string(),
  name: z.string(),
  icon: z.string().optional(),
  nodeTypes: z.array(z.string()).optional(),
  category: z.string().optional()
});
let S = z.object({
  libraryKey: z.string(),
  assets: z.array(I)
});
let v = [];
let A = eU(async e => {
  let t = e(u8) === nT.Sites;
  let r = !!(Lg() || nl()) || e(ZJ).status === Uv.COMPLETED;
  return t && r ? {
    libraryConfigs: (await w0("1p_code_presets_sts")).get("libraries", v, e => Array.isArray(e) && e.every(e => S.safeParse(e).success)),
    enabled: t
  } : {
    libraryConfigs: v,
    enabled: !1
  };
});
let $$x2 = unwrap(A, () => ({
  libraryConfigs: v,
  enabled: !1
}));
let $$N0 = eU(e => {
  let {
    libraryConfigs,
    enabled
  } = e($$x2);
  if (!enabled) return new Set();
  let n = new Set();
  for (let e of libraryConfigs) for (let t of e.assets) n.add(t.assetKey);
  return n;
});
let C = null;
export async function $$w1() {
  let {
    libraryConfigs,
    enabled
  } = zl.get($$x2);
  if (!enabled) return [];
  if (C) return C;
  let r = getFeatureFlags().ds_enable_code_presets_sidecar_table;
  let n = await Promise.all(libraryConfigs.map(async ({
    libraryKey: e
  }) => r ? await Ek(IUX, {
    libraryKey: e
  }) : await Ek(Bu2, {
    libraryKey: e,
    assetType: FComponentType.CODE_COMPONENT
  })));
  return O(libraryConfigs, n);
}
function O(e, t) {
  let r = getFeatureFlags().ds_enable_code_presets_sidecar_table;
  let n = new Map();
  for (let t of e) for (let e of t.assets) n.set(e.assetKey, e);
  let i = [];
  for (let e of t) {
    let t = e.libraryKeyToFile?.file;
    if (t) for (let e of t.libraryAssets) {
      let s = n.get(e.key);
      if (!s) continue;
      let o = Zi(_$$l(t.libraryKey), e);
      o && i.push({
        asset: o,
        name: r && o.codePresetMetadata ? o.codePresetMetadata.presetName : s.name,
        icon: r ? o.codePresetMetadata?.presetIcon : s.icon,
        nodeTypes: r ? o.codePresetMetadata?.applicableNodeTypes : s.nodeTypes,
        category: r ? o.codePresetMetadata?.category : s.category
      });
    }
  }
  C = i;
  return i;
}
export async function $$R4() {
  let e = await $$w1();
  await Promise.all(e.map(e => Eo.getCanvas({
    canvas_url: e.asset.canvasUrl
  })));
}
export function $$L3() {
  let {
    libraryConfigs,
    enabled
  } = md($$x2);
  let r = getFeatureFlags().ds_enable_code_presets_sidecar_table ? libraryConfigs.map(({
    libraryKey: e
  }) => IUX.Query({
    libraryKey: e
  })) : libraryConfigs.map(({
    libraryKey: e
  }) => Bu2.Query({
    libraryKey: e,
    assetType: FComponentType.CODE_COMPONENT
  }));
  let a = En(r, {
    enabled
  });
  return useMemo(() => enabled ? O(libraryConfigs, a.map(e => "loaded" === e.status ? e.data : null).filter(isNotNullish)) : [], [libraryConfigs, a, enabled]);
}
export const Gd = $$N0;
export const UI = $$w1;
export const bV = $$x2;
export const mU = $$L3;
export const x7 = $$R4;