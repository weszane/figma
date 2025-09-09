import { jsxs, jsx } from "react/jsx-runtime";
import { isValidElement, useMemo } from "react";
import { R } from "../905/621802";
import { J } from "../905/125993";
import { B } from "../905/714743";
import { getI18nString, renderI18nText } from "../905/303541";
import { $z } from "../figma_app/831799";
import { P } from "../905/842406";
import { ShareAction } from "../figma_app/707808";
import { o as _$$o } from "../905/382697";
import { E4, hP } from "../905/144598";
import { G2, QJ, aL, IG, u4, Lo, bv, LN, cp, Xr, Em } from "../905/959395";
export function $$g2(e) {
  return jsxs($z, {
    className: G2,
    onClick: e.onClick,
    dataTestId: e.testId,
    type: "button",
    "data-onboarding-key": e.dataOnboardingKey,
    children: [isValidElement(e.icon) ? jsx("div", {
      className: e.isSecondaryStyling ? QJ : aL,
      children: e.icon
    }) : jsx(B, {
      className: e.isSecondaryStyling ? QJ : aL,
      svg: e.icon
    }), jsxs("div", {
      className: e.isSecondaryStyling ? IG : u4,
      children: [e.text, e.badge]
    }), e.actionMessage && jsx("div", {
      children: jsx("p", {
        className: e.actionMessageClassName,
        children: e.actionMessage
      })
    }), e.rightSideElement && jsx("div", {
      className: e.rightClassName,
      children: e.rightSideElement
    }), e.expandCaret && jsx("div", {
      className: Lo,
      children: jsx(R, {})
    })]
  });
}
export function $$f1(e) {
  let t = jsx(J, {});
  return jsx($$g2, {
    icon: t,
    text: getI18nString("file_permissions_modal.share_as.more"),
    onClick: e.onClick,
    isSecondaryStyling: !0,
    testId: "share-modal-more-options-row"
  });
}
export function $$_0(e) {
  let t = e.roles.length;
  let i = P();
  let a = _$$o();
  let s = useMemo(() => {
    let t = e.roles.sort((e, t) => e.pending === t.pending ? 0 : e.pending ? 1 : -1);
    return [t[0], t[1]];
  }, [e.roles]);
  let o = E4(s[0], i);
  let d = E4(s[1], i);
  let f = renderI18nText("file_permissions_modal.collaborators_row_v2", {
    collaborator_1_name: jsx("span", {
      className: bv,
      children: o
    }),
    collaborator_2_name: jsx("span", {
      className: bv,
      children: d
    }),
    remaining_collaborator_text: jsx("span", {
      className: bv,
      children: renderI18nText("file_permissions_modal.collaborators_row_v2.num_remaining_collaborators_others", {
        num_remaining_collaborators: t - 2
      })
    })
  });
  let _ = jsxs("div", {
    className: LN,
    children: [jsx("div", {
      className: cp,
      children: jsx(hP, {
        user: s[0].user,
        id: s[0].id,
        pending: s[0].pending,
        small: !0
      })
    }), jsx("div", {
      className: Xr,
      children: jsx(hP, {
        user: s[1].user,
        id: s[1].id,
        pending: s[1].pending,
        small: !0
      })
    })]
  });
  return jsx("div", {
    className: Em,
    children: jsx($$g2, {
      icon: _,
      text: jsx("div", {
        children: f
      }),
      onClick: () => a(ShareAction.COLLABORATORS),
      testId: "collaborators-collapsed-row",
      expandCaret: !0
    })
  });
}
export const KZ = $$_0;
export const gq = $$f1;
export const sR = $$g2;