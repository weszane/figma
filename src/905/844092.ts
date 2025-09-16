import { jsx } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import { getI18nString } from "../905/303541";
import { showDropdownThunk } from "../905/929976";
import { showModalHandler } from "../905/156213";
import { DT } from "../figma_app/8833";
import { l as _$$l } from "../905/348437";
import { q } from "../905/70772";
import { M } from "../905/981847";
import { KK } from "../905/649567";
import { Kn } from "../905/958668";
export function $$h0(e) {
  let t = useDispatch();
  let {
    attachments
  } = e;
  let h = n => {
    t(showModalHandler({
      type: q,
      data: {
        attachments,
        selectedIdx: attachments.map(e => e.thumbnailUrl).indexOf(n),
        onUpdateAltText: g,
        canEdit: e.canEdit
      },
      showModalsBeneath: !0
    }));
  };
  let g = (t, n) => {
    let r = attachments[n];
    return _$$l.put(e.fileKey, r.id, t);
  };
  let f = (e, i) => {
    e.preventDefault();
    e.stopPropagation();
    t(showDropdownThunk({
      type: DT,
      data: {
        id: "comment_attachment_context_menu",
        clientX: e.clientX,
        clientY: e.clientY,
        attachment: i
      }
    }));
  };
  return jsx("div", {
    className: KK,
    children: attachments.slice(0, 3).map((e, t) => jsx("div", {
      className: Kn,
      children: jsx(M, {
        thumbnailUrl: e.thumbnailUrl,
        altText: e.altText || getI18nString("comments.attachment_thumbnail_alt_text_default"),
        overlayText: attachments.length > 3 && 2 === t ? `+${attachments.length - 3}` : void 0,
        onClick: h,
        onRightClick: t => f(t, e),
        dimensions: 0 === t && 1 === attachments.length ? e.metadata.dimensions : void 0
      })
    }, e.id))
  });
}
export const a = $$h0;