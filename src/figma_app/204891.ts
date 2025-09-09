import { jsx } from "react/jsx-runtime";
import { Rs } from "../figma_app/288654";
import { N } from "../905/794224";
import { V } from "../figma_app/385855";
import { q } from "../905/600041";
import { F } from "../905/171275";
import { Ph, i4 } from "../905/862913";
import { FFileType } from "../figma_app/191312";
import { FileCanView } from "../figma_app/43951";
export function $$p2(e, t) {
  return e === FFileType.SLIDES ? F.SLIDES : e === FFileType.WHITEBOARD ? t ? F.WHITEBOARD : F.DEFAULT_WHITEBOARD : t ? F.DESIGN : F.DEFAULT_DESIGN;
}
export function $$_0({
  file: e,
  ...t
}) {
  let r = $$p2(e.editorType, !!e.thumbnailGuid);
  return e.canView && Ph(e) ? jsx(N, {
    thumbnailType: r,
    ...t
  }) : jsx(V, {
    thumbnailType: r,
    clientMeta: e.clientMeta,
    thumbnailUrl: e.thumbnailUrlOverride ?? e.thumbnailUrl,
    lastTouchedAt: e.touchedAt,
    ...t
  });
}
export function $$h1({
  file: e,
  ...t
}) {
  let r = Rs(FileCanView, {
    key: e.key
  });
  let l = $$p2(e.editor_type, !!e.thumbnail_guid);
  if (i4(e)) {
    if ("loading" === r.status) return jsx(q, {
      ...t
    });
    if (!r.transform(e => !!e.file?.hasPermission).unwrapOr(!1)) return jsx(N, {
      thumbnailType: l,
      ...t
    });
  }
  return jsx(V, {
    thumbnailUrl: e.thumbnail_url_override ?? e.thumbnail_url,
    thumbnailType: l,
    clientMeta: e.client_meta,
    lastTouchedAt: e.touched_at ?? e.updated_at,
    ...t
  }, e.key);
}
export const NM = $$_0;
export const NU = $$h1;
export const lv = $$p2;