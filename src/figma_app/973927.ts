import { useCallback } from "react";
import { throwTypeError } from "../figma_app/465776";
import { l as _$$l } from "../905/716947";
import { FTemplateCategoryType, FFileType } from "../figma_app/191312";
import { useCurrentPrivilegedPlan } from "../figma_app/465071";
import { TeamTemplateType } from "../905/79930";
import { getHubFileVersionOrDefault } from "../figma_app/198840";
export function $$c3(e) {
  switch (e.type) {
    case TeamTemplateType.HubFile:
      return e.template.id;
    case TeamTemplateType.TeamTemplate:
      return e.template.file_key;
    case TeamTemplateType.TeamTemplateLg:
      return e.template.fileKey;
    default:
      return throwTypeError(e);
  }
}
export function $$u0(e) {
  switch (e.type) {
    case TeamTemplateType.HubFile:
    case TeamTemplateType.TeamTemplate:
      return e.template.library_key;
    case TeamTemplateType.TeamTemplateLg:
      return e.template.libraryKey;
    default:
      return throwTypeError(e);
  }
}
export function $$p2(e) {
  switch (e.type) {
    case TeamTemplateType.HubFile:
      return getHubFileVersionOrDefault(e.template).name;
    case TeamTemplateType.TeamTemplate:
    case TeamTemplateType.TeamTemplateLg:
      return e.template.name;
    default:
      return throwTypeError(e);
  }
}
export function $$_1() {
  let e = useCurrentPrivilegedPlan("useGetGenericTemplateDisplayProps").unwrapOr(null);
  let t = e?.imgUrl || void 0;
  let r = e?.name;
  return useCallback(e => {
    let n = $$c3(e);
    let o = $$p2(e);
    let u = function (e) {
      switch (e.type) {
        case TeamTemplateType.HubFile:
          return getHubFileVersionOrDefault(e.template).description;
        case TeamTemplateType.TeamTemplate:
        case TeamTemplateType.TeamTemplateLg:
          return e.template.description;
        default:
          return throwTypeError(e);
      }
    }(e);
    let {
      type,
      template
    } = e;
    switch (type) {
      case TeamTemplateType.HubFile:
        return {
          imageUrl: template.thumbnail_url || void 0,
          clientMeta: template.client_meta,
          thumbnailIsSet: !!template.thumbnail_is_set,
          isWhiteboard: template.viewer_mode === FTemplateCategoryType.WHITEBOARD,
          name: o,
          description: u,
          hubFileId: template.id,
          publishers: template.community_publishers?.accepted || [],
          primaryKey: n,
          duplicateLink: `${window.location.origin}/community/file/${template.id}/duplicate`,
          viewSourceFileUrl: null,
          resizedThumbnailUrls: template.resized_thumbnail_urls,
          libraryKey: template.library_key
        };
      case TeamTemplateType.TeamTemplate:
        {
          let e = template.published_by_user ? [{
            name: template.published_by_user.handle,
            img_url: template.published_by_user.img_url
          }] : r ? [{
            name: r,
            img_url: t
          }] : [];
          return {
            imageUrl: template.signed_thumbnail_url,
            clientMeta: template.client_meta,
            thumbnailIsSet: !!template.has_custom_thumbnail,
            isWhiteboard: !0,
            name: o,
            description: u,
            publishers: e,
            primaryKey: n,
            duplicateLink: `${window.location.origin}/new/template/${template.file_key}`,
            viewSourceFileUrl: `/file/${template.file_key}`,
            libraryKey: template.library_key
          };
        }
      case TeamTemplateType.TeamTemplateLg:
        {
          let e = template.publishedByUserNullable ? [{
            name: template.publishedByUserNullable.handle,
            img_url: template.publishedByUserNullable.imgUrl
          }] : r ? [{
            name: r,
            img_url: t
          }] : [];
          return {
            imageUrl: template.signedThumbnailUrl,
            clientMeta: template.checkpointClientMeta,
            thumbnailIsSet: template.hasCustomThumbnail,
            isWhiteboard: template.editorType === FFileType.WHITEBOARD,
            name: o,
            description: u,
            publishers: e,
            primaryKey: n,
            duplicateLink: `${window.location.origin}/new/template/${template.fileKey}`,
            viewSourceFileUrl: `/file/${template.fileKey}`,
            libraryKey: _$$l(template.libraryKey)
          };
        }
      default:
        throwTypeError(type);
    }
  }, [t, r]);
}
export const NH = $$u0;
export const fG = $$_1;
export const gY = $$p2;
export const gp = $$c3;