import { registerModal } from "../905/102752";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useModalManager } from "../905/437088";
import { ModalRootComponent } from "../905/38914";
import { DialogContents, DialogHeader, DialogTitle, DialogBody, DialogFooter, DialogActionStrip } from "../figma_app/272243";
import { Button } from "../905/521428";
import { bL as _$$bL, l9, mc, c$ } from "../905/493196";
import { HiddenLabel } from "../905/270045";
import { LandingFormTextInput } from "../905/773401";
import { TabLoop, TabLoopDisplayAs } from "../905/64217";
import { getI18nString, renderI18nText } from "../905/303541";
import { UserAvatar } from "../905/590952";
import { popModalStack } from "../905/156213";
import { aJ, kN, QC } from "../figma_app/494261";
import { selectUser } from "../905/372672";
import { AccessLevelEnum } from "../905/557142";
export let $$b0 = registerModal(function (e) {
  let {
    team,
    source,
    requesterCurrentLevel
  } = e;
  let u = useDispatch();
  let g = () => {
    u(popModalStack());
  };
  let b = selectUser();
  let I = void 0 === requesterCurrentLevel || requesterCurrentLevel < AccessLevelEnum.VIEWER;
  let [E, x] = useState(I ? AccessLevelEnum.VIEWER : AccessLevelEnum.EDITOR);
  let [S, w] = useState("");
  let C = I ? aJ : kN;
  let T = () => {
    C === aJ ? u(QC({
      teamId: team.id,
      level: E,
      message: S,
      source: "RequestAccessModal",
      teamOrgAccess: team.org_access,
      actionType: aJ
    })) : C === kN && u(QC({
      teamId: team.id ?? "",
      level: AccessLevelEnum.EDITOR,
      message: S,
      source: source ?? "",
      actionType: kN
    }));
    g();
  };
  let k = useCallback(e => {
    w(e.currentTarget.value);
  }, [w]);
  let R = E === AccessLevelEnum.EDITOR ? getI18nString("file_browser.request_access_modal.request_edit_access") : getI18nString("file_browser.request_access_modal.request_view_access");
  let N = jsx("span", {
    className: "request_access_modal--teamName--9ZkLe",
    children: team.name
  });
  let P = useModalManager(e);
  return jsx(ModalRootComponent, {
    manager: P,
    width: "lg",
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: C === aJ ? renderI18nText("file_browser.request_access_modal.request_to_join_team") : renderI18nText("file_browser.team.request_to_edit_team")
        })
      }), jsxs(DialogBody, {
        children: [jsx("div", {
          "data-testid": "subtitle",
          className: "request_access_modal--subtitle--7AzpO",
          children: C === aJ ? renderI18nText("file_browser.request_access_modal.send_a_request_to_join_team", {
            teamName: N
          }) : renderI18nText("file_browser.team.send_a_request_to_edit_team", {
            teamName: N
          })
        }), jsx(v, {
          user: b,
          accessLevel: E,
          onChangeAccessLevel: x,
          requesterCurrentLevel
        }), jsx(TabLoop, {
          displayAs: TabLoopDisplayAs.Block,
          children: jsx("form", {
            onSubmit: e => {
              e.preventDefault();
              T();
            },
            children: jsx(LandingFormTextInput, {
              "data-testid": "messageInput",
              className: "request_access_modal--inputRequestMessage--aa3K6",
              type: "textarea",
              maxLength: 500,
              name: "message",
              value: S,
              placeholder: getI18nString("file_browser.request_access_modal.request_access_reason_placeholder"),
              onChange: k
            })
          })
        })]
      }), jsx(DialogFooter, {
        children: jsxs(DialogActionStrip, {
          children: [jsx(Button, {
            onClick: g,
            variant: "secondary",
            children: renderI18nText("general.cancel")
          }), jsx(Button, {
            "data-testid": "submitButton",
            onClick: T,
            children: R
          })]
        })
      })]
    })
  });
}, "REQUEST_ACCESS_MODAL");
function v({
  accessLevel: e,
  onChangeAccessLevel: t,
  requesterCurrentLevel: i,
  user: r
}) {
  let a = void 0 === i || i < AccessLevelEnum.VIEWER;
  return jsxs("div", {
    className: "request_access_modal--userRow--ijROZ",
    children: [jsx(UserAvatar, {
      user: r
    }), jsx("div", {
      "data-testid": "userName",
      className: "request_access_modal--userName--ne-vy",
      children: renderI18nText("file_browser.request_access_modal.you", {
        username: r.name
      })
    }), jsxs(_$$bL, {
      value: e.toString(),
      onChange: e => {
        t(parseInt(e));
      },
      children: [jsx(l9, {
        label: jsx(HiddenLabel, {
          children: getI18nString("file_browser.settings.access")
        }),
        disabled: !a
      }), jsxs(mc, {
        children: [a && jsx(c$, {
          value: AccessLevelEnum.VIEWER.toString(),
          children: getI18nString("file_browser.request_access_modal.can_view")
        }), jsx(c$, {
          value: AccessLevelEnum.EDITOR.toString(),
          children: getI18nString("file_browser.request_access_modal.can_edit")
        })]
      })]
    })]
  });
}
export const $ = $$b0;