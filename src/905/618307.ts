import { i as _$$i } from "../905/970229";
import { yr } from "../905/827765";
import { t as _$$t } from "../905/303541";
import { J } from "../905/231762";
import { Nw, yJ } from "../figma_app/78808";
import { q } from "../figma_app/446378";
import { Yp } from "../figma_app/740025";
export function $$c1(e) {
  let t = {};
  let i = Yp(e.name || null).length;
  0 === i ? t.name = _$$t("community.publishing.name_must_not_be_empty") : i > 100 && (t.name = _$$t("community.publishing.name_must_be_at_most_100_characters_long"));
  Yp(e.description || null).length > 1e4 && (t.description = _$$t("community.publishing.description_must_be_at_most_10000_characters_long"));
  return t;
}
export async function $$u0({
  fileKey: e,
  name: t,
  description: i,
  publishScope: d,
  customThumbnail: u,
  shouldRenameFile: p,
  onErrorsChanged: m,
  onSuccess: h,
  onFailure: g,
  dispatch: f
}) {
  if (!e) {
    g("Missing `fileKey`");
    return;
  }
  let _ = {
    name: t,
    description: i,
    publish_scope: d
  };
  let A = $$c1(_);
  if (m(A), !(Object.keys(A).length > 0)) {
    p && f(Nw({
      file: {
        key: e
      },
      name: t
    }));
    try {
      let t = null;
      if (u && "buffer" in u) {
        let {
          data: {
            status,
            meta
          }
        } = await q.uploadTemplateCoverImage({
          fileKey: e
        });
        if (200 !== status) {
          g(_$$t("templates.actions.error_connecting_to_server_to_upload_file_thumbnail"));
          return;
        }
        let {
          cover_image_upload_url,
          fields = {}
        } = meta;
        t = meta.signature;
        let p = new FormData();
        Object.entries(fields).forEach(([e, t]) => p.append(e, t));
        p.set("content-type", _$$i(u.buffer) ?? "image/png");
        p.append("file", new Blob([u.buffer]));
        try {
          await yr(cover_image_upload_url, p);
        } catch (e) {
          g(J(e, _$$t("templates.actions.error_connecting_to_server_to_upload_file_thumbnail")));
          return;
        }
      }
      let i = {};
      (u || t) && (i.cover_image_uploaded = "true");
      t && (i.signature = t);
      await q.upsertTemplate({
        fileKey: e,
        payload: _,
        params: i
      });
    } catch (e) {
      g(e.message);
      return;
    }
    f(yJ({
      file: {
        key: e,
        is_team_template: !0
      }
    }));
    h();
  }
}
export const l = $$u0;
export const s = $$c1;