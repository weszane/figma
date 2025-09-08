import { useEffect } from "react";
import { useDispatch } from "../vendor/514228";
import { oA } from "../905/663269";
import { h as _$$h } from "../905/142086";
import { showModalHandler } from "../905/156213";
import { QL, EM } from "../905/609392";
import { nk } from "../figma_app/2023";
import { aV } from "../figma_app/722362";
import { iZ } from "../905/372672";
import { FFileType } from "../figma_app/191312";
import { e6 } from "../905/557142";
import { IZ, wR } from "../905/452667";
import { g_ } from "../905/646788";
import { RC, Yx } from "../3276/926297";
let g = "edit_request";
let v = "move_to_project";
export function $$x0(e) {
  let t = useDispatch();
  let n = RC();
  let x = Yx();
  let b = e.editorType === FFileType.WHITEBOARD && !!e.org?.figjamDisabledAt;
  let y = e.editorType === FFileType.SLIDES && oA(e.org?.isSlidesDisabled);
  let C = e.editorType === FFileType.SITES && e.org?.isSitesDisabled;
  let w = e.editorType === FFileType.COOPER && e.org?.isCooperDisabled;
  let j = aV();
  let k = iZ();
  useEffect(() => {
    let o = QL(g);
    let a = "true" === QL(v);
    o && !j && function (o) {
      if (b || y || C || w || !n) return;
      let i = x.find(e => e.id === o);
      if (i?.level !== e6.EDITOR || i.status !== IZ.Pending) return;
      let c = e.ownerRole?.userId;
      let m = k?.id;
      if (null == c || null == m || c !== m) return;
      let u = i.requesterUser?.handle;
      if (!u) return;
      let _ = a && n.isFreeUserOnly && n.isInDraftsFolder && !n.hasOrg;
      let j = {
        handle: u,
        requestType: e6.EDITOR,
        roleRequestId: o
      };
      t(showModalHandler({
        type: g_,
        data: {
          fileKey: n.file?.key ?? e.key,
          source: nk.editRequestExternal
        }
      }));
      _ && _$$h(n.file, n.repo, t, {
        handlesVisualBell: !0,
        callback: e => {
          wR(t, IZ.Approved, j);
        }
      });
      EM(g);
      EM(v);
    }(o);
  }, [e, k, n, x, b, y, C, w, j, t]);
}
export const xf = $$x0;