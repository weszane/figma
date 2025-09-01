import { cd, _H } from "../figma_app/243058";
import { wF, Xe, Sm, j6 } from "../905/859698";
import { z } from "../905/239603";
import { oA } from "../905/663269";
import { FComponentType } from "../figma_app/191312";
import { U7, Qp, uW, SS, KC, GA, cE } from "../figma_app/349248";
import { PW as _$$PW } from "../905/497152";
import { $B, EU, IV, Jw } from "../905/808701";
import { dl } from "../905/722604";
let p = $B("responsive_set");
export function $$m1(e, t) {
  if (t.assetType !== FComponentType.RESPONSIVE_SET) return null;
  let i = wF(t.key);
  let a = Xe(t.version);
  return {
    name: t.name,
    type: _$$PW.RESPONSIVE_SET,
    sourceLibraryKey: e,
    key: i,
    version: a,
    userFacingVersion: Xe(t.userFacingVersion),
    assetId: cd.fromRef({
      key: i,
      version: a
    }),
    sourceAssetId: cd.fromLocalNodeIdStr(t.nodeId),
    sourceAssetGuid: t.nodeId,
    subscriptionStatus: "LIBRARY",
    mainThumbnailInfo: {
      thumbnailUrl: EU(e, i, a),
      height: Number.parseInt(oA(t.mainNodeHeight) ?? "0"),
      width: Number.parseInt(oA(t.mainNodeWidth) ?? "0")
    },
    canvasUrl: IV(e, i, a),
    containingFrame: U7(oA(t.containingFrame) ?? null) ?? null,
    updatedAt: t.updatedAt,
    fullPage: dl(t.name)
  };
}
let h = $B("code_component");
export function $$g0(e, t) {
  if (t.assetType !== FComponentType.CODE_COMPONENT) return null;
  let i = Sm(t.key);
  let a = j6(t.version);
  return {
    name: t.name,
    type: _$$PW.CODE_COMPONENT,
    sourceLibraryKey: e,
    key: i,
    version: a,
    userFacingVersion: j6(t.userFacingVersion),
    assetId: _H.fromRef({
      key: i,
      version: a
    }),
    sourceAssetId: _H.fromLocalNodeIdStr(t.nodeId),
    sourceAssetGuid: t.nodeId,
    subscriptionStatus: "LIBRARY",
    mainThumbnailInfo: {
      thumbnailUrl: EU(e, i, a),
      height: Number.parseInt(oA(t.mainNodeHeight) ?? "0"),
      width: Number.parseInt(oA(t.mainNodeWidth) ?? "0")
    },
    canvasUrl: IV(e, i, a),
    containingFrame: U7(oA(t.containingFrame) ?? null) ?? null,
    updatedAt: oA(t.updatedAt) ?? new Date(),
    codePresetMetadata: t.codePresetMetadata ?? null
  };
}
z.union([p.passthrough(), h.passthrough()]);
let f = Jw("code_component");
let _ = Jw("responsive_set");
z.union([f.passthrough(), _.passthrough()]);
export let $$A2 = {
  [_$$PW.COMPONENT]: Qp,
  [_$$PW.MODULE]: uW,
  [_$$PW.RESPONSIVE_SET]: $$m1,
  [_$$PW.STATE_GROUP]: SS,
  [_$$PW.STYLE]: KC,
  [_$$PW.VARIABLE]: GA,
  [_$$PW.VARIABLE_SET]: cE,
  [_$$PW.CODE_COMPONENT]: $$g0
};
export const Zi = $$g0;
export const py = $$m1;
export const sC = $$A2;