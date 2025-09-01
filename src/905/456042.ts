import { jsx, jsxs } from "react/jsx-runtime";
import { useCallback } from "react";
import { d4, wA } from "../vendor/514228";
import s, { B } from "../905/714743";
import { tx } from "../905/303541";
import { e as _$$e } from "../905/579755";
import { oT } from "../905/478473";
import { Ce } from "../905/156213";
import { xQ } from "../figma_app/45218";
import { Ju } from "../905/102752";
import { A } from "../figma_app/122760";
import { genericSelectorExternalTeamsIcon, workspaceSelectorModal, workspaceSelectorModalInner, genericSelectorModalCancel } from "../figma_app/727769";
import { A as _$$A } from "../6041/915738";
export function $$f0(e) {
  let t = d4(e => e.orgById);
  let i = d4(e => e.authedUsers);
  return "external teams" === e.name.toLowerCase() ? jsx(B, {
    className: genericSelectorExternalTeamsIcon,
    svg: _$$A
  }) : e.orgId ? jsx(_$$e, {
    entity: t[e.orgId]
  }) : jsx(_$$e, {
    entity: i.byId[e.userId]
  });
}
export let $$$$_1 = Ju(function (e) {
  let t = wA();
  let i = useCallback(() => {
    t(Ce());
  }, [t]);
  let {
    payload
  } = e;
  let {
    extension,
    workspaces,
    mode
  } = s;
  let _ = !!extension && xQ(extension);
  return jsx(A, {
    className: workspaceSelectorModal,
    onCloseModal: i,
    children: jsxs("div", {
      className: workspaceSelectorModalInner,
      children: [jsx(oT, {
        isWidget: _,
        workspaces,
        onClick: e => {
          i();
          payload.onSelectWorkspace(e);
        },
        Avatar: $$f0,
        extension,
        mode
      }), jsx("button", {
        className: genericSelectorModalCancel,
        onClick: i,
        children: tx("community.try.pick_workspace.cancel")
      })]
    })
  });
}, "WorkspaceSelectorModal");
export const M = $$f0;
export const _ = $$$$_1;