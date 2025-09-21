import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { SvgComponent } from "../905/714743";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { TextWithTruncation } from "../905/984674";
import { Ct, MA } from "../905/478473";
import { FFileType } from "../figma_app/191312";
import { K1, sw } from "../905/427932";
import { A } from "../6828/718668";
function p(e) {
  let {
    workspace,
    editorType
  } = e;
  if (workspace.isDisabledDueToECC) return jsx(Ct, {
    tooltipText: getI18nString("community.try.externally_restricted")
  });
  if (workspace.isPlanLocked) return jsx(Ct, {
    tooltipText: getI18nString("plan_picker.locked_plan_tooltip")
  });
  if (!workspace.draftFolderId) return jsx(Ct, {
    tooltipText: getI18nString("plan_picker.limited_access_tooltip")
  });
  switch (editorType) {
    case FFileType.WHITEBOARD:
      if (workspace.isFigJamDisabled || workspace.isPlanLocked) return jsx(Ct, {
        tooltipText: getI18nString("plan_picker.figjam_not_available_for_this_plan")
      });
      break;
    case FFileType.SLIDES:
      if (workspace.isSlidesDisabled || workspace.isPlanLocked) return jsx(Ct, {
        tooltipText: getI18nString("plan_picker.slides_not_available_for_this_plan")
      });
      break;
    case FFileType.SITES:
      if (workspace.isSitesDisabled || workspace.isPlanLocked) return jsx(Ct, {
        tooltipText: getI18nString("plan_picker.sites_not_available_for_this_plan")
      });
      break;
    case FFileType.COOPER:
      if (workspace.isCooperDisabled || workspace.isPlanLocked) return jsx(Ct, {
        tooltipText: getI18nString("plan_picker.buzz_not_available_for_this_plan")
      });
      break;
    case FFileType.FIGMAKE:
      if (workspace.isFigmakeDisabled || workspace.isPlanLocked) return jsx(Ct, {
        tooltipText: getI18nString("plan_picker.make_not_available_for_this_plan")
      });
  }
  return jsx(SvgComponent, {
    className: cssBuilderInstance.pl16.pr16.mlAuto.colorIcon.$,
    svg: A,
    dataTestId: "chevron-right"
  });
}
export function $$m0(e) {
  let {
    workspaces,
    avatar,
    useCase,
    onClick
  } = e;
  return jsxs(Fragment, {
    children: [jsx("div", {
      className: K1,
      children: "figjamTry" === useCase ? jsx(TextWithTruncation, {
        fontWeight: "medium",
        fontSize: 20,
        color: "default",
        children: renderI18nText("plan_picker.figjam_try.title")
      }) : jsx(TextWithTruncation, {
        fontWeight: "medium",
        fontSize: 20,
        color: "default",
        children: renderI18nText("plan_picker.pick_plan.title")
      })
    }), jsx("div", {
      className: cssBuilderInstance.alignCenter.pt6.$,
      children: "figjamTry" === useCase ? jsx(TextWithTruncation, {
        fontSize: 13,
        color: "default",
        children: renderI18nText("plan_picker.figjam_try.description")
      }) : jsx(TextWithTruncation, {
        fontSize: 13,
        color: "default",
        children: renderI18nText("plan_picker.pick_plan.description")
      })
    }), jsx("div", {
      className: sw,
      children: workspaces.map(t => {
        let r = jsx(p, {
          workspace: t,
          editorType: e.editorType
        });
        let a = function (e, t) {
          if (e.isDisabledDueToECC || e.isPlanLocked) return !0;
          switch (t) {
            case FFileType.DESIGN:
              return !1;
            case FFileType.SLIDES:
              return !!e.isSlidesDisabled;
            case FFileType.SITES:
              return !!e.isSitesDisabled;
            case FFileType.COOPER:
              return !!e.isCooperDisabled;
            case FFileType.WHITEBOARD:
              return !!e.isFigJamDisabled;
            case FFileType.FIGMAKE:
              return !!e.isFigmakeDisabled;
            default:
              return !0;
          }
        }(t, e.editorType);
        return jsx(MA, {
          workspace: t,
          onClick,
          Avatar: avatar,
          disabled: a,
          rowIcon: r
        }, t.orgId ?? t.teamId ?? "");
      })
    })]
  });
}
export const b = $$m0;