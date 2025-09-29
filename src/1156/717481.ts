import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useModalManager } from "../905/437088";
import { ModalRootComponent, ModalFormContents } from "../905/38914";
import { DialogHeader, DialogTitle, DialogBody, DialogFooter, DialogActionStrip } from "../figma_app/272243";
import { Button } from "../905/521428";
import { InputComponent } from "../905/185998";
import { setupToggleButton } from "../905/167712";
import { _ as _$$_ } from "../905/263184";
import { _ as _$$_2 } from "../905/410717";
import { j as _$$j } from "../905/519202";
import { textDisplayConfig } from "../905/687265";
import { stylex } from "@stylexjs/stylex";
import { b as _$$b } from "../905/966382";
import { getI18nString, renderI18nText } from "../905/303541";
import { showModalHandler } from "../905/156213";
import { useDropdownState } from "../905/848862";
import { selectCurrentFile } from "../figma_app/516028";
import { liveStoreInstance } from "../905/713695";
import { R as _$$R } from "../905/943003";
import { registerModal } from "../905/102752";
import { l6, c$ } from "../905/794875";
import { uF } from "../1156/418246";
import { TT } from "../figma_app/952035";
import { lV } from "../1156/395731";
import { kS } from "../figma_app/325912";
import { YH, AW } from "../1156/250784";
import { S as _$$S } from "../1156/720801";
function L({
  value: e,
  setValue: t,
  disabled: n
}) {
  let i = getI18nString("figmake.settings.create_project_modal.project_name.label");
  let s = getI18nString("figmake.settings.create_project_modal.project_name.placeholder");
  return jsxs("div", {
    className: "x78zum5 xdt5ytf x1v2ro7d",
    children: [jsx("div", {
      className: "x78zum5 x1q0g3np x1qughib",
      children: jsx("label", {
        htmlFor: i,
        ...stylex.props(F.textBodyMediumStrong),
        children: i
      })
    }), jsx("div", {
      className: "x78zum5 xdt5ytf x1jnr06f",
      children: jsx(InputComponent, {
        type: "text",
        id: i,
        value: e,
        onChange: t,
        placeholder: s,
        size: "lg",
        disabled: n
      })
    })]
  });
}
function z({
  value: e,
  setValue: t,
  helperText: n,
  disabled: s
}) {
  let a = getI18nString("figmake.settings.create_project_modal.db_pass.label");
  let l = getI18nString("figmake.settings.create_project_modal.db_pass.placeholder");
  let [o, c] = useState(!1);
  let [g, _] = useState(!1);
  return jsxs("div", {
    className: "x78zum5 xdt5ytf x1v2ro7d",
    children: [jsxs("div", {
      className: "x78zum5 x1q0g3np x1qughib",
      children: [jsx("label", {
        htmlFor: a,
        ...stylex.props(F.textBodyMediumStrong),
        children: a
      }), jsxs("button", {
        onClick: e => {
          e.preventDefault();
          t(_$$b());
          _(!0);
          c(!0);
          setTimeout(() => {
            c(!1);
          }, 500);
        },
        className: "x1lcq9ky x1n0bwc9 x78zum5 x1q0g3np",
        children: [jsx(_$$_, {
          ...stylex.props(o ? F.rotatePasswordGenerateIcon : F.passwordGenerateIcon)
        }), jsx("span", {
          children: getI18nString("figmake.settings.create_project_modal.password.generate")
        })]
      })]
    }), jsxs("div", {
      className: "x1n2onr6 x1rg5ohu",
      children: [jsx(InputComponent, {
        type: g ? "text" : "password",
        id: a,
        value: e,
        onChange: t,
        placeholder: l,
        size: "lg",
        disabled: s
      }), jsx("span", {
        className: "x10l6tqk x19up5dg xbfrwjf xmauxvm",
        children: jsx(setupToggleButton, {
          checked: g,
          onIcon: jsx(_$$_2, {}),
          offIcon: jsx(_$$j, {}),
          "aria-label": getI18nString("figmake.settings.create_project_modal.password.view_hide"),
          htmlAttributes: {
            "data-tooltip": getI18nString("figmake.settings.create_project_modal.password.view_hide"),
            "data-tooltip-type": "text"
          },
          onChange: () => _(e => !e)
        })
      })]
    }), n && jsx("div", {
      ...stylex.props(F.textBodyMediumSecondary),
      children: n
    })]
  });
}
var M = (e => (e.US_EAST_1 = "us-east-1", e.US_EAST_2 = "us-east-2", e.US_WEST_1 = "us-west-1", e.AP_SOUTHEAST_1 = "ap-southeast-1", e.AP_NORTHEAST_1 = "ap-northeast-1", e.AP_NORTHEAST_2 = "ap-northeast-2", e.AP_SOUTHEAST_2 = "ap-southeast-2", e.EU_WEST_1 = "eu-west-1", e.EU_WEST_2 = "eu-west-2", e.EU_WEST_3 = "eu-west-3", e.EU_NORTH_1 = "eu-north-1", e.EU_CENTRAL_1 = "eu-central-1", e.EU_CENTRAL_2 = "eu-central-2", e.CA_CENTRAL_1 = "ca-central-1", e.AP_SOUTH_1 = "ap-south-1", e.SA_EAST_1 = "sa-east-1", e))(M || {});
function R({
  selectedRegion: e,
  setSelectedRegion: t
}) {
  let n = useDispatch();
  let i = useDropdownState();
  let a = e => {
    switch (e) {
      case "us-east-1":
        return getI18nString("figmake.settings.create_project_modal.region.us_east_1");
      case "us-east-2":
        return getI18nString("figmake.settings.create_project_modal.region.us_east_2");
      case "us-west-1":
        return getI18nString("figmake.settings.create_project_modal.region.us_west_1");
      case "ap-southeast-1":
        return getI18nString("figmake.settings.create_project_modal.region.ap_southeast_1");
      case "ap-northeast-1":
        return getI18nString("figmake.settings.create_project_modal.region.ap_northeast_1");
      case "ap-northeast-2":
        return getI18nString("figmake.settings.create_project_modal.region.ap_northeast_2");
      case "ap-southeast-2":
        return getI18nString("figmake.settings.create_project_modal.region.ap_southeast_2");
      case "eu-west-1":
        return getI18nString("figmake.settings.create_project_modal.region.eu_west_1");
      case "eu-west-2":
        return getI18nString("figmake.settings.create_project_modal.region.eu_west_2");
      case "eu-west-3":
        return getI18nString("figmake.settings.create_project_modal.region.eu_west_3");
      case "eu-north-1":
        return getI18nString("figmake.settings.create_project_modal.region.eu_north_1");
      case "eu-central-1":
        return getI18nString("figmake.settings.create_project_modal.region.eu_central_1");
      case "eu-central-2":
        return getI18nString("figmake.settings.create_project_modal.region.eu_central_2");
      case "ca-central-1":
        return getI18nString("figmake.settings.create_project_modal.region.ca_central_1");
      case "ap-south-1":
        return getI18nString("figmake.settings.create_project_modal.region.ap_south_1");
      case "sa-east-1":
        return getI18nString("figmake.settings.create_project_modal.region.sa_east_1");
      default:
        throw Error("Unknown region");
    }
  };
  return jsxs("div", {
    className: "x78zum5 xdt5ytf x1v2ro7d",
    children: [jsx("label", {
      id: "supabase-project-database-region-select",
      ...stylex.props(F.textBodyMediumStrong),
      children: getI18nString("figmake.settings.create_project_modal.region.label")
    }), jsx(l6, {
      ariaLabelledBy: "supabase-project-database-region-select",
      inputClassName: "x1kowl60 x6sinrp",
      id: "supabase-project-database-region-select",
      property: e,
      formatter: {
        format: a
      },
      onChange: t,
      dispatch: n,
      dropdownShown: i,
      children: Object.values(M).map(e => jsx(c$, {
        value: e,
        children: a(e)
      }, e))
    })]
  });
}
let F = {
  rotatePasswordGenerateIcon: {
    animation: "xg6l7co",
    animationComposition: null,
    animationName: null,
    animationDuration: null,
    animationTimingFunction: null,
    animationDelay: null,
    animationIterationCount: null,
    animationDirection: null,
    animationFillMode: null,
    animationPlayState: null,
    animationRange: null,
    animationRangeEnd: null,
    animationRangeStart: null,
    animationTimeline: null,
    "--color-icon": "xmauxvm",
    $$css: !0
  },
  passwordGenerateIcon: {
    "--color-icon": "xmauxvm",
    $$css: !0
  },
  textBodyMediumStrong: {
    ...textDisplayConfig.textBodyMediumStrong,
    $$css: !0
  },
  textBodyMediumSecondary: {
    ...textDisplayConfig.textBodyMedium,
    color: "x1n0bwc9",
    $$css: !0
  }
};
let $$O0 = registerModal(function (e) {
  let [t, n] = useState(!1);
  let s = useModalManager({
    ...e,
    preventUserClose: t
  });
  let d = selectCurrentFile();
  let [u, x] = useState(d?.name || "");
  let [m, h] = useState("");
  let [g, f] = useState();
  let [_, b] = useState("us-east-1");
  let [C, E] = useState(!1);
  let [M, O] = useState(!0);
  let D = _$$S();
  useEffect(() => {
    u.length > 0 && m.length > 0 ? O(!1) : O(!0);
    m.length >= 4 && f(void 0);
  }, [u, m]);
  let B = async () => {
    if (!d) return;
    if (m.length < 4) {
      f("dbPassTooShort");
      return;
    }
    n(!0);
    E(!0);
    let t = await _$$R.createProject({
      fileKey: d.key,
      projectName: u,
      dbPass: m,
      region: _
    }).then(e => {
      let {
        id,
        organization_id,
        name,
        region,
        created_at,
        status
      } = e.data.meta;
      return {
        id,
        organization_id,
        name,
        region,
        created_at,
        status
      };
    }).catch(e => {
      YH(e);
    });
    if (!t || !(await _$$R.connectFile({
      fileKey: d.key,
      supabaseProjectId: t.id,
      supabaseOrgId: t.organization_id
    }).catch(e => {
      AW(e);
    }))) {
      E(!1);
      return;
    }
    uF(e.trackingContext || {
      persistentEntityId: "",
      clientLifecycleId: ""
    }, e.source, d.key, "new");
    let r = setInterval(async () => {
      let {
        connectedProject
      } = await liveStoreInstance.fetch(TT({
        fileKey: d.key
      }), {
        policy: "networkOnly"
      });
      connectedProject?.public_anon_key && (E(!1), n(!1), e.toolCallId && e.toolName && D({
        toolCallId: e.toolCallId,
        toolName: e.toolName,
        toolResult: {
          success: !0,
          message: "Connected to Supabase."
        }
      }), clearInterval(r), e.onClose());
    }, 2e3);
    setTimeout(() => {
      clearInterval(r);
      E(!1);
      e.onClose();
    }, 1e4);
  };
  let q = "dbPassTooShort" === g ? renderI18nText("figmake.settings.create_project_modal.db_pass.too_short") : renderI18nText("figmake.settings.create_project_modal.db_pass.context", {
    learnMoreLink: jsx("a", {
      target: "_blank",
      href: kS,
      children: getI18nString("general.learn_more")
    })
  });
  return jsx(ModalRootComponent, {
    manager: s,
    width: 386,
    children: jsxs(ModalFormContents, {
      onSubmit: B,
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: getI18nString("figmake.settings.create_project_modal.title")
        })
      }), jsx(DialogBody, {
        scrolling: "none",
        children: jsxs("div", {
          className: "x1ib1h6n x78zum5 xdt5ytf x1c1vhfx",
          children: [jsx(L, {
            value: u,
            setValue: x,
            disabled: C
          }), jsx(R, {
            selectedRegion: _,
            setSelectedRegion: b
          }), jsx(z, {
            value: m,
            setValue: h,
            helperText: q,
            disabled: C
          })]
        })
      }), jsx(DialogFooter, {
        children: jsxs(DialogActionStrip, {
          className: "x78zum5 x1q0g3np x13a6bvl x167g77z xhxeiv9 xh8yej3 x9f619",
          children: [C && jsx("p", {
            ...stylex.props(F.textBodyMediumSecondary),
            children: getI18nString("figmake.supabase.creating_project.subtitle")
          }), jsx(Button, {
            variant: "secondary",
            onClick: () => s.props.close({
              source: "button"
            }),
            children: getI18nString("figmake.settings.create_project_modal.button.cancel")
          }), C ? jsx(lV, {
            variant: "primary",
            children: getI18nString("figmake.settings.create_project_modal.button.submit.loading")
          }) : jsx(Button, {
            variant: "primary",
            type: "submit",
            disabled: M,
            children: getI18nString("figmake.settings.create_project_modal.button.submit")
          })]
        })
      })]
    })
  });
}, "CreateProjectModal");
export function $$D1({
  toolCallId: e,
  toolName: t,
  trackingContext: n,
  source: r
}) {
  let i = useDispatch();
  return () => i(showModalHandler({
    type: $$O0,
    data: {
      toolCallId: e,
      toolName: t,
      trackingContext: n,
      source: r
    },
    showModalsBeneath: !0
  }));
}
export const AP = $$O0;
export const h5 = $$D1;
