import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useRef } from "react";
import { sz } from "../figma_app/216696";
import { fu } from "../figma_app/831799";
import { eE, Fz } from "../figma_app/106207";
import { RD } from "../figma_app/198840";
import { mC, oh } from "../905/18797";
import { n as _$$n } from "../905/79930";
import { Rt } from "../figma_app/979658";
import { cS, bD } from "../figma_app/45218";
import { $A } from "../905/862883";
import { cd } from "../905/381612";
import { K } from "../1291/825015";
import { i8 } from "../1291/533467";
import { S as _$$S } from "../1291/885929";
import { bL, gZ } from "../905/598775";
import { $n } from "../905/521428";
import { getFeatureFlags } from "../905/601108";
import { renderI18nText, getI18nString } from "../905/303541";
import { Gi, wv } from "../figma_app/622574";
import { FFileType } from "../figma_app/191312";
import { cX, mk } from "../figma_app/920333";
import { g as _$$g } from "../1291/914498";
import { H6, bV, jy, a0 } from "../figma_app/745709";
function C() {
  let e = Gi();
  let {
    teamTemplates,
    isLoading
  } = wv(FFileType.WHITEBOARD);
  let {
    setSelectedCategory
  } = cX();
  return e ? isLoading ? jsx(i8, {}) : teamTemplates?.length ? jsxs(Fragment, {
    children: [getFeatureFlags().fpl_card_primitive_migration ? jsxs(bL, {
      className: H6,
      children: [jsx("div", {
        className: bV,
        children: renderI18nText("whiteboard.inserts.org_name_templates", {
          orgName: e.name
        })
      }), jsx(gZ, {
        className: jy,
        children: jsx($n.Link, {
          onClick: () => {
            setSelectedCategory({
              id: e?.type === "team" ? e.entity.id : "",
              title: getI18nString("whiteboard.inserts.org_name_templates", {
                orgName: e.name
              }),
              resourceType: Rt.TEAM_TEMPLATES
            });
          },
          children: renderI18nText("whiteboard.inserts.see_all")
        })
      })]
    }) : jsxs("button", {
      className: a0,
      onClick: () => {
        setSelectedCategory({
          id: e?.type === "team" ? e.entity.id : "",
          title: getI18nString("whiteboard.inserts.org_name_templates", {
            orgName: e.name
          }),
          resourceType: Rt.TEAM_TEMPLATES
        });
      },
      children: [jsx("div", {
        className: bV,
        children: renderI18nText("whiteboard.inserts.org_name_templates", {
          orgName: e.name
        })
      }), jsx("div", {
        className: jy,
        children: renderI18nText("whiteboard.inserts.see_all")
      })]
    }), jsx(_$$g, {
      templates: teamTemplates,
      templateInsertionLocation: RD.CURRENT_FILE
    })]
  }) : null : null;
}
function $() {
  let e = eE($A.FigJam).slice(0, 4);
  let t = mk(e, [mC(cd.fetchTemplatesMetadata.loadingKeyForPayload({
    key: $A.FigJam
  }))]);
  return jsx(Fragment, {
    children: t.length > 0 ? jsxs(Fragment, {
      children: [jsx("div", {
        className: a0,
        children: jsx("div", {
          className: bV,
          children: renderI18nText("whiteboard.inserts.recents")
        })
      }), jsx(_$$g, {
        templates: t,
        templateInsertionLocation: RD.CURRENT_FILE
      })]
    }) : jsx(Fragment, {})
  });
}
export let $$E1 = "_search";
export function $$I0(e) {
  let {
    isInsertingTemplate
  } = Fz();
  let s = useRef(null);
  let f = oh(sz.loadingKeyForPayload({
    shelfType: cS.FIGJAM_TEMPLATES_PICKER
  }));
  let b = oh(cd.fetchTemplatesMetadata.loadingKeyForPayload({
    key: $A.FigJam
  }));
  return f || b ? jsx(i8, {}) : jsx("div", {
    ref: s,
    children: jsxs(fu, {
      name: "templates",
      children: [jsx($, {}), jsx(C, {}), jsx(K, {
        resourceType: bD.HUB_FILE,
        shelfType: cS.FIGJAM_TEMPLATES_PICKER,
        renderResource: s => jsx(_$$S, {
          template: {
            template: s,
            type: _$$n.HubFile
          },
          templateInsertionLocation: RD.CURRENT_FILE,
          triggeredFrom: "universal-insert-figjam-templates",
          isInsertingTemplate: isInsertingTemplate(s.id),
          onClickTitle: () => e.setPreviewHubFile({
            id: s.id,
            type: Rt.TEMPLATES
          })
        }, s.id)
      })]
    })
  });
}
$$I0.displayName = "BrowseTemplatesTab";
export const J = $$I0;
export const e = $$E1;