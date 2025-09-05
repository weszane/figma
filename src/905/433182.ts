import { jsxs, jsx } from "react/jsx-runtime";
import { useDispatch } from "../vendor/514228";
import { s as _$$s } from "../cssbuilder/589278";
import { t as _$$t } from "../905/303541";
import { In } from "../905/672640";
import { SX } from "../figma_app/199513";
import { Ah } from "../905/316062";
import { Ib } from "../905/129884";
import { rm } from "../905/989969";
export function $$p0(e) {
  let t = useDispatch();
  let {
    setSelectedFolder
  } = e;
  let p = e.team?.canEdit;
  return jsxs("button", {
    className: rm,
    disabled: !p,
    "data-tooltip-type": Ib.TEXT,
    "data-tooltip": p ? void 0 : _$$t("file_browser.file_move.you_dont_have_edit_access_to_this_team"),
    "data-tooltip-show-above": !0,
    "data-tooltip-timeout-delay": 100,
    "data-tooltip-max-width": 250,
    onClick: () => e.team && t(SX({
      where: Ah.FileMoveModalV2,
      team: {
        id: e.team.id,
        name: e.team.name,
        org_id: e.team.orgId,
        subscription: e.team.subscription,
        restrictions_list: e.team.restrictionsList,
        grace_period_end: e.team.gracePeriodEnd ? e.team.gracePeriodEnd.toString() : null,
        student_team: !!e.team.studentTeamAt,
        canEdit: !!p
      },
      onFolderCreated: setSelectedFolder
    })),
    children: [jsx("div", {
      className: _$$s.p4.mr4.$,
      children: jsx(In, {
        icon: "plus-32",
        fill: p ? "default" : "disabled"
      })
    }), _$$t("file_browser.file_move.new_project")]
  });
}
export const S = $$p0;