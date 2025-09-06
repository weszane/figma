import { Ju } from "../905/102752";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useCallback } from "react";
import { useDispatch } from "../vendor/514228";
import { hS } from "../905/437088";
import { bL } from "../905/38914";
import { vo, Y9, hE, nB, wi, jk } from "../figma_app/272243";
import { $n } from "../905/521428";
import { bL as _$$bL, l9, mc, c$ } from "../905/493196";
import { h as _$$h } from "../905/270045";
import { ks } from "../905/773401";
import { i, C as _$$C } from "../905/64217";
import { getI18nString, renderI18nText } from "../905/303541";
import { H8 } from "../905/590952";
import { Lo } from "../905/156213";
import { aJ, kN, QC } from "../figma_app/494261";
import { Pc } from "../905/372672";
import { e6 } from "../905/557142";
export let $$b0 = Ju(function (e) {
  let {
    team,
    source,
    requesterCurrentLevel
  } = e;
  let u = useDispatch();
  let g = () => {
    u(Lo());
  };
  let b = Pc();
  let I = void 0 === requesterCurrentLevel || requesterCurrentLevel < e6.VIEWER;
  let [E, x] = useState(I ? e6.VIEWER : e6.EDITOR);
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
      level: e6.EDITOR,
      message: S,
      source: source ?? "",
      actionType: kN
    }));
    g();
  };
  let k = useCallback(e => {
    w(e.currentTarget.value);
  }, [w]);
  let R = E === e6.EDITOR ? getI18nString("file_browser.request_access_modal.request_edit_access") : getI18nString("file_browser.request_access_modal.request_view_access");
  let N = jsx("span", {
    className: "request_access_modal--teamName--9ZkLe",
    children: team.name
  });
  let P = hS(e);
  return jsx(bL, {
    manager: P,
    width: "lg",
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: C === aJ ? renderI18nText("file_browser.request_access_modal.request_to_join_team") : renderI18nText("file_browser.team.request_to_edit_team")
        })
      }), jsxs(nB, {
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
        }), jsx(i, {
          displayAs: _$$C.Block,
          children: jsx("form", {
            onSubmit: e => {
              e.preventDefault();
              T();
            },
            children: jsx(ks, {
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
      }), jsx(wi, {
        children: jsxs(jk, {
          children: [jsx($n, {
            onClick: g,
            variant: "secondary",
            children: renderI18nText("general.cancel")
          }), jsx($n, {
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
  let a = void 0 === i || i < e6.VIEWER;
  return jsxs("div", {
    className: "request_access_modal--userRow--ijROZ",
    children: [jsx(H8, {
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
        label: jsx(_$$h, {
          children: getI18nString("file_browser.settings.access")
        }),
        disabled: !a
      }), jsxs(mc, {
        children: [a && jsx(c$, {
          value: e6.VIEWER.toString(),
          children: getI18nString("file_browser.request_access_modal.can_view")
        }), jsx(c$, {
          value: e6.EDITOR.toString(),
          children: getI18nString("file_browser.request_access_modal.can_edit")
        })]
      })]
    })]
  });
}
export const $ = $$b0;