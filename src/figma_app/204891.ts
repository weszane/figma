import { jsx } from 'react/jsx-runtime';
import { DesignsList } from '../905/171275';
import { ThumbnailContainer } from '../905/600041';
import { N } from '../905/794224';
import { hasPasswordProtectedPublicAccessFromEntity, hasPasswordProtectedPublicAccess } from '../905/862913';
import { FileCanView } from '../figma_app/43951';
import { FFileType } from '../figma_app/191312';
import { useSubscription } from '../figma_app/288654';
import { V } from '../figma_app/385855';
export function $$p2(e, t) {
  return e === FFileType.SLIDES ? DesignsList.SLIDES : e === FFileType.WHITEBOARD ? t ? DesignsList.WHITEBOARD : DesignsList.DEFAULT_WHITEBOARD : t ? DesignsList.DESIGN : DesignsList.DEFAULT_DESIGN;
}
export function $$_0({
  file: e,
  ...t
}) {
  let r = $$p2(e.editorType, !!e.thumbnailGuid);
  return e.canView && hasPasswordProtectedPublicAccess(e) ? jsx(N, {
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
  let r = useSubscription(FileCanView, {
    key: e.key
  });
  let l = $$p2(e.editor_type, !!e.thumbnail_guid);
  if (hasPasswordProtectedPublicAccessFromEntity(e)) {
    if (r.status === 'loading') {
      return jsx(ThumbnailContainer, {
        ...t
      });
    }
    if (!r.transform(e => !!e.file?.hasPermission).unwrapOr(!1)) {
      return jsx(N, {
        thumbnailType: l,
        ...t
      });
    }
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