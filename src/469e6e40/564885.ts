import { registerModal } from "../905/102752";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../905/521428";
import { useModalManager } from "../905/437088";
import { ModalRootComponent } from "../905/38914";
import { DialogContents, DialogHeader, DialogTitle, DialogBody } from "../figma_app/272243";
import { k as _$$k } from "../905/443820";
import { getFeatureFlags } from "../905/601108";
import { h1 } from "../905/986103";
import { FlashActions } from "../905/573154";
import { getI18nString, renderI18nText } from "../905/303541";
import { TextWithTruncation } from "../905/984674";
import { selectViewAction } from "../905/929976";
import { getProductAccessTypeOrDefault } from "../figma_app/765689";
import { FFileType } from "../figma_app/191312";
import { mapFileTypeToEditorType } from "../figma_app/53721";
import { OrganizationType } from "../905/833838";
import { E as _$$E } from "../figma_app/126651";
import { KindEnum } from "../905/129884";
import { J as _$$J } from "../905/298764";
import { teamAPIClient } from "../905/834575";
export let $$E0 = registerModal(function (e) {
  let t = useModalManager(e);
  let a = useDispatch();
  let [r, u] = useState({});
  let [g, h] = useState(!0);
  let x = function (e, t) {
    switch (e) {
      case "edit":
        return t ? getI18nString("members_tab.last_edit_modal.title_with_name", {
          publicName: t
        }) : getI18nString("members_tab.last_edit_modal.title_generic");
      case "all":
        return t ? getI18nString("team_view.pro_member_modal.title_with_username", {
          username: t
        }) : getI18nString("team_view.pro_member_modal.title_without_username");
      default:
        return e;
    }
  }(e.activityType, e.planUserDisplayName);
  useEffect(() => {
    (e.planType === OrganizationType.ORG ? _$$J.getLastEdit({
      orgUserId: e.planUserId
    }) : teamAPIClient.getUsersLastActive({
      teamId: e.planId,
      teamMemberId: e.planUserId
    })).then(e => {
      u(e.data.meta);
    }).catch(e => {
      a(FlashActions.error(e.data?.message || getI18nString("team_view.pro_member_modal.error_on_activity_retrieval_fallback_message")));
    }).finally(() => h(!1));
  }, [a, e.planType, e.planUserId, e.planId]);
  let v = useMemo(() => [{
    type: FFileType.DESIGN,
    enabled: !0,
    property: "design_file"
  }, {
    type: FFileType.SITES,
    enabled: !!getFeatureFlags().sites,
    property: "sites_file"
  }, {
    type: FFileType.COOPER,
    enabled: !!getFeatureFlags().cooper,
    property: "cooper_file"
  }, {
    type: FFileType.WHITEBOARD,
    enabled: !0,
    property: "whiteboard_file"
  }, {
    type: FFileType.SLIDES,
    enabled: !0,
    property: "slides_file"
  }].filter(({
    enabled: e
  }) => e), []);
  let j = v.every(({
    property: e
  }) => !r[e]);
  return jsx(ModalRootComponent, {
    manager: t,
    height: "dynamic",
    width: "lg",
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: x
        })
      }), jsx(DialogBody, {
        children: jsx("div", {
          className: "x1ib1h6n",
          children: g ? jsx("div", {
            className: "xrvj5dj x1ku5rj1 x5yr21d",
            children: jsx(_$$k, {})
          }) : j ? jsx("div", {
            children: renderI18nText("members_tab.last_edit_modal.no_activity")
          }) : jsxs("table", {
            className: "x1bamp8i x1mwwwfo xi4r6k5 xh8yej3",
            children: [jsx("thead", {
              children: jsxs("tr", {
                className: "x1n5zjp5 x17akokd xdpxx8g",
                children: [jsx("th", {
                  className: "x1nn34kk xkezfkh",
                  scope: "col",
                  children: renderI18nText("members_tab.last_edit_modal.product_column_header")
                }), jsx("th", {
                  className: "x1nn34kk xkezfkh",
                  scope: "col",
                  children: renderI18nText("members_tab.last_edit_modal.file_column_header")
                }), jsx("th", {
                  className: "x1nn34kk xkezfkh",
                  scope: "col",
                  children: "edit" === e.activityType ? renderI18nText("members_tab.last_edit_modal.last_edit_column_header") : getI18nString("team_view.pro_member_modal.edit_table_last_active_header")
                })]
              })
            }), jsx("tbody", {
              children: v.map(t => jsx(S, {
                onClose: e.onClose,
                editorType: t.type,
                activity: r[t.property]
              }, t.type))
            })]
          })
        })
      })]
    })
  });
});
function C() {
  return jsx("span", {
    children: "\u2013"
  });
}
function S(e) {
  let t = useDispatch();
  return jsxs("tr", {
    className: "x1n5zjp5 x17akokd xdpxx8g",
    children: [jsx("td", {
      className: "xi4r6k5 x1qxcl5b",
      children: _$$E(getProductAccessTypeOrDefault(e.editorType))
    }), jsx("td", {
      className: "xi4r6k5 x1qxcl5b",
      children: (() => {
        if (!e.activity) return jsx(C, {});
        if (e.activity.can_view) return jsx("div", {
          children: e.activity?.file_key ? jsx(Button, {
            variant: "link",
            onClick: () => {
              e.activity && e.activity.file_key && (t(selectViewAction({
                view: "fullscreen",
                fileKey: e.activity.file_key,
                editorType: mapFileTypeToEditorType(e.editorType)
              })), e.onClose());
            },
            children: e.activity.file_name
          }) : jsx(TextWithTruncation, {
            children: e.activity.file_name
          })
        });
        {
          let t = `file_tooltip_inaccessible_${e.editorType}`;
          let a = getI18nString("members_tab.last_edit_modal.inaccessible_text");
          return jsx("div", {
            "data-tooltip-proxy-element-id": t,
            children: jsx("div", {
              id: t,
              "data-tooltip-type": KindEnum.TEXT,
              "data-tooltip": a,
              children: getI18nString("general.private_file")
            })
          });
        }
      })()
    }), jsx("td", {
      className: "xi4r6k5 x1qxcl5b",
      children: e.activity?.action_at ? jsx(h1, {
        capitalize: !0,
        date: e.activity.action_at
      }) : jsx(C, {})
    })]
  });
}
export const J = $$E0;
