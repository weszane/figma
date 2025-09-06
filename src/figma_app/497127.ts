import { jsxs, jsx } from "react/jsx-runtime";
import { K } from "../905/443068";
import { C } from "../905/520159";
import { BrowserInfo } from "../figma_app/778880";
import { a as _$$a } from "../905/925868";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { Y } from "../905/830372";
import { li } from "../figma_app/622574";
import { FFileType } from "../figma_app/191312";
import { n as _$$n } from "../905/79930";
import { Ht } from "../figma_app/522930";
import { iq, AF } from "../figma_app/80782";
import { k } from "../figma_app/623769";
export function $$f0({
  teamId: e,
  teamName: t,
  templateInsertionLocation: r,
  onInsert: f,
  isInsertingTemplate: E,
  onBackClick: y
}) {
  let {
    requestLoadMoreForTeam,
    templatesByTeam
  } = li({
    teamId: e,
    editorType: FFileType.WHITEBOARD
  });
  return templatesByTeam ? jsxs("div", {
    className: _$$s.wFull.$,
    children: [jsxs(Y, {
      horizontalAlignItems: "start",
      height: k,
      strokeWidth: {
        bottom: 1
      },
      strokeColor: "default",
      padding: {
        left: 24,
        right: 24
      },
      children: [y && jsx(K, {
        "aria-label": getI18nString("general.back"),
        actionOnPointerDown: BrowserInfo.isIpad,
        onClick: y,
        children: jsx(C, {})
      }), jsx("div", {
        className: _$$s.font13.fontMedium.$,
        children: renderI18nText("browse_templates_modal.published_by_current_org_name", {
          orgName: t
        })
      })]
    }), jsxs("section", {
      className: _$$s.overflowYScroll.$,
      style: {
        height: `calc(100% - ${k}px)`
      },
      children: [jsx("div", {
        className: _$$s.px24.my20.$,
        children: jsx(iq, {
          children: templatesByTeam.templates.map(e => jsx(AF, {
            templateInsertionLocation: r,
            template: {
              template: e,
              type: _$$n.TeamTemplateLg
            },
            onInsert: () => f({
              template: e,
              type: _$$n.TeamTemplateLg
            }),
            isInsertingTemplate: E(e.fileKey)
          }, e.fileKey))
        })
      }), jsx(_$$a, {
        className: _$$s.relative.$,
        style: {
          bottom: "250px"
        },
        onIntersectionChange: ({
          isIntersecting: e
        }) => {
          e && requestLoadMoreForTeam();
        }
      })]
    })]
  }) : jsx(Ht, {});
}
export const z = $$f0;