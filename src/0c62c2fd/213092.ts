import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useCallback, useMemo, useLayoutEffect } from "react";
import { useDispatch } from "../vendor/514228";
import { Ph } from "../figma_app/637027";
import { tx, t as _$$t } from "../905/303541";
import { I } from "../c5e2cae0/718426";
import { sx } from "../figma_app/307841";
import { Dw } from "../figma_app/976345";
import { Ce } from "../905/156213";
import { Vm } from "../figma_app/482142";
import { fu } from "../figma_app/831799";
import { FC } from "../figma_app/212807";
import { Kg } from "../figma_app/345997";
import { OJ } from "../905/519092";
function h({
  handleClose: e
}) {
  let t = useDispatch();
  let r = useCallback(() => {
    e();
    t(Dw({
      isEduTeam: !0
    }));
  }, [t, e]);
  return jsx(Ph, {
    className: "edu_upgrade_modal--createTeamLink--CbJUX edu_upgrade_modal--link--Toy9f",
    onClick: r,
    trusted: !0,
    children: tx("edu.or_create_a_new_team")
  });
}
export function $$x0() {
  let e = FC();
  let t = useDispatch();
  let r = sx();
  let x = useCallback(() => {
    t(Ce());
  }, [t]);
  let b = useCallback(e => {
    x();
    t(Vm({
      teamId: e.id
    }));
  }, [t, x]);
  let v = useMemo(() => Kg(e), [e]);
  useLayoutEffect(() => {
    0 !== v.length || r || (x(), t(Dw({
      isEduTeam: !0
    })));
  }, [t, v.length, x, r]);
  return jsx(fu, {
    name: "Edu Team Upgrade Modal",
    children: jsx(OJ, {
      title: _$$t("edu.upgrade_teams.headline"),
      onClose: x,
      children: jsxs("div", {
        className: "edu_upgrade_modal--container--i-0VV",
        children: [jsxs("p", {
          className: "edu_upgrade_modal--bodyText--BXu7I",
          children: [tx("edu.upgrade_teams.body", {
            link: jsx(Ph, {
              className: "edu_upgrade_modal--link--Toy9f",
              href: "/pricing",
              target: "_blank",
              trusted: !0,
              children: tx("edu.upgrade_teams.body_link_text")
            })
          }), v.length > 1 && jsxs(Fragment, {
            children: [" ", tx("edu.upgrade_teams.body_multiple_teams")]
          })]
        }), jsx(I, {
          eligibleTeams: v,
          selectTeam: b,
          showEditorCount: !1,
          customUpgradeText: _$$t("general.next")
        }), !r && jsx(h, {
          handleClose: x
        })]
      })
    })
  });
}
export const EduUpgradeModal = $$x0;