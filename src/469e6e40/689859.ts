import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { wA, d4 } from "../vendor/514228";
import { Ex, zE, vj } from "../figma_app/919079";
import { V } from "../figma_app/312987";
import { $$ } from "../figma_app/637027";
import { kt } from "../figma_app/858013";
import { s as _$$s } from "../905/573154";
import { t as _$$t, tx } from "../905/303541";
import { Ce } from "../905/156213";
import { fu } from "../figma_app/831799";
import { M4, IT, gY } from "../905/713695";
import { JO, Cn, fm } from "../c5e2cae0/453906";
import { Ju } from "../905/102752";
import { j as _$$j } from "../905/834956";
import { OJ } from "../905/519092";
import { v0 } from "../figma_app/639088";
let v = "default_paid_status--inputRow--5Uarh";
let f = "default_paid_status--inputLabel--gGP5B";
let j = "default_paid_status--subText--ltbsS";
let w = e => {
  switch (e) {
    case JO.FULL:
      return _$$t("general.editor.seat_rename");
    case JO.VIEWER:
      return _$$t("general.viewer");
    case JO.VIEWER_RESTRICTED:
      return _$$t("general.viewer_restricted");
  }
};
let k = M4.Query({
  fetch: async e => {
    let t = await Cn.getPlanProperties({
      planId: e.planId,
      planType: e.planType
    });
    return t.data?.meta ?? null;
  },
  output: ({
    data: e
  }) => ({
    default_paid_status_design: e?.default_paid_status_design ?? JO.VIEWER,
    default_paid_status_whiteboard: e?.default_paid_status_whiteboard ?? JO.VIEWER
  })
});
let E = M4.Mutation(async (e, {
  query: t
}) => {
  let {
    planId,
    planType,
    defaultPaidStatusDesign,
    defaultPaidStatusWhiteboard
  } = e;
  t.mutate(k({
    planId,
    planType
  }), e => {
    null != e && (e.default_paid_status_design = defaultPaidStatusDesign, e.default_paid_status_whiteboard = defaultPaidStatusWhiteboard);
  });
  await Cn.updatePlanProperties({
    planId: e.planId,
    planType: e.planType,
    properties: {
      default_paid_status_design: defaultPaidStatusDesign,
      default_paid_status_whiteboard: defaultPaidStatusWhiteboard
    }
  });
});
let $$C0 = Ju(function (e) {
  let t = wA();
  let {
    planId,
    planType
  } = e;
  let [C, S] = IT(k({
    planId,
    planType
  }));
  useEffect(() => {
    C.data && (I(C.data.default_paid_status_design), A(C.data.default_paid_status_whiteboard));
  }, [C]);
  let [N, I] = useState(JO.VIEWER);
  let [T, A] = useState(JO.VIEWER);
  let [R, O] = useState(!1);
  let L = gY(E);
  let D = d4(({
    dropdownShown: e
  }) => e);
  let M = (e, a) => {
    let s = [{
      displayText: w(JO.VIEWER_RESTRICTED),
      subText: _$$t("default_paid_status_modal_v2.viewer_restricted_subtext.seat_rename"),
      subTextClassname: j,
      isChecked: e === JO.VIEWER_RESTRICTED,
      optionHeight: 40,
      callback: () => a(JO.VIEWER_RESTRICTED)
    }, {
      displayText: w(JO.VIEWER),
      subText: _$$t("default_paid_status_modal_v2.viewer_subtext.seat_rename"),
      subTextClassname: j,
      isChecked: e === JO.VIEWER,
      optionHeight: 40,
      callback: () => a(JO.VIEWER)
    }, {
      displayText: w(JO.FULL),
      displayTextClassName: "default_paid_status--displayText--Hf1lS",
      subText: _$$t("default_paid_status_modal_v2.editor_subtext.seat_rename"),
      subTextClassname: j,
      isChecked: e === JO.FULL,
      optionHeight: 40,
      callback: () => a(JO.FULL),
      displayTextBadge: jsx(Ex, {
        className: "default_paid_status--badge--r6VCf",
        text: _$$t("default_paid_status_modal_v2.paid"),
        color: zE.BRAND,
        size: vj.LARGE
      })
    }];
    let i = D.data.targetRect;
    let l = 8;
    switch (e) {
      case JO.VIEWER:
        l += 48;
        break;
      case JO.FULL:
        l += 96;
    }
    let o = {
      bottom: i.bottom,
      height: i.height,
      left: i.left,
      right: i.right,
      top: i.top - l,
      width: i.width
    };
    return jsx(Fragment, {
      children: jsx(_$$j, {
        minWidth: 310,
        lean: "right",
        showPoint: !1,
        items: s,
        displayOverTarget: !0,
        onSelectItem: e => {
          e.callback("", null, t);
        },
        parentRect: o,
        dispatch: t
      })
    });
  };
  let P = "DESIGN_DEFAULT_PAID_STATUS_DROPDOWN";
  let U = D?.type === P;
  let F = "WHITEBOARD_DEFAULT_PAID_STATUS_DROPDOWN";
  let q = D?.type === F;
  return jsx(fu, {
    name: "Default License Type Setting Modal",
    children: jsx(OJ, {
      title: _$$t("default_paid_status_modal_v2.manage_default_roles.seat_rename"),
      onClose: () => t(Ce()),
      maxWidth: 310,
      minWidth: 310,
      children: "loaded" !== C.status ? jsx(kt, {
        className: "default_paid_status--loading_spinner--QKHjF"
      }) : jsxs("div", {
        className: "default_paid_status--modalContainer--PEJw8 modal--container--LVq8G",
        children: [jsx("span", {
          className: "default_paid_status--textContainer--WVFxT",
          children: tx("default_paid_status_modal_v2.description.seat_rename", {
            plan_type: planType === fm.ORGANIZATION ? _$$t("default_paid_status_modal_v2.organization") : _$$t("default_paid_status_modal_v2.team")
          })
        }), jsxs("label", {
          className: v,
          children: [jsx("span", {
            className: f,
            children: tx("default_paid_status_modal.figma_design")
          }), jsxs(V, {
            showingDropdown: U,
            type: P,
            isMultilevelDropdown: !0,
            dispatch: t,
            isDisabled: R,
            children: [w(N), U && M(N, I)]
          })]
        }), jsxs("label", {
          className: v,
          children: [jsx("span", {
            className: f,
            children: tx("default_paid_status_modal.figjam")
          }), jsxs(V, {
            showingDropdown: q,
            type: F,
            isMultilevelDropdown: !0,
            dispatch: t,
            isDisabled: R,
            children: [w(T), q && M(T, A)]
          })]
        }), jsx("div", {
          className: v0,
          children: jsx($$, {
            onClick: async () => {
              O(!0);
              try {
                await L({
                  planId: e.planId,
                  planType: e.planType,
                  defaultPaidStatusDesign: N,
                  defaultPaidStatusWhiteboard: T
                });
                O(!1);
                t(_$$s.flash(_$$t("default_paid_status_modal.updated_default_roles.seat_rename")));
                t(Ce());
              } catch (e) {
                O(!1);
                t(_$$s.flash("An error has occured. Please try again"));
              }
            },
            children: tx("general.save")
          })
        })]
      })
    })
  });
}, "DefaultPaidStatusModalV2");
export const h = $$C0;