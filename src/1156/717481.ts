import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useDispatch } from "../vendor/514228";
import { hS } from "../905/437088";
import { bL, Rq } from "../905/38914";
import { Y9, hE, nB, wi, jk } from "../figma_app/272243";
import { $n } from "../905/521428";
import { p as _$$p } from "../905/185998";
import { f as _$$f } from "../905/167712";
import { _ as _$$_ } from "../905/263184";
import { _ as _$$_2 } from "../905/410717";
import { j as _$$j } from "../905/519202";
import { g as _$$g } from "../905/687265";
import { Ay } from "@stylexjs/stylex";
import { b as _$$b } from "../905/966382";
import { t as _$$t, tx } from "../905/303541";
import { to } from "../905/156213";
import { Um } from "../905/848862";
import { q5 } from "../figma_app/516028";
import { M4 } from "../905/713695";
import { R as _$$R } from "../905/943003";
import { Ju } from "../905/102752";
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
  let i = _$$t("figmake.settings.create_project_modal.project_name.label");
  let s = _$$t("figmake.settings.create_project_modal.project_name.placeholder");
  return jsxs("div", {
    className: "x78zum5 xdt5ytf x1v2ro7d",
    children: [jsx("div", {
      className: "x78zum5 x1q0g3np x1qughib",
      children: jsx("label", {
        htmlFor: i,
        ...Ay.props(F.textBodyMediumStrong),
        children: i
      })
    }), jsx("div", {
      className: "x78zum5 xdt5ytf x1jnr06f",
      children: jsx(_$$p, {
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
  let a = _$$t("figmake.settings.create_project_modal.db_pass.label");
  let l = _$$t("figmake.settings.create_project_modal.db_pass.placeholder");
  let [o, c] = useState(!1);
  let [g, _] = useState(!1);
  return jsxs("div", {
    className: "x78zum5 xdt5ytf x1v2ro7d",
    children: [jsxs("div", {
      className: "x78zum5 x1q0g3np x1qughib",
      children: [jsx("label", {
        htmlFor: a,
        ...Ay.props(F.textBodyMediumStrong),
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
          ...Ay.props(o ? F.rotatePasswordGenerateIcon : F.passwordGenerateIcon)
        }), jsx("span", {
          children: _$$t("figmake.settings.create_project_modal.password.generate")
        })]
      })]
    }), jsxs("div", {
      className: "x1n2onr6 x1rg5ohu",
      children: [jsx(_$$p, {
        type: g ? "text" : "password",
        id: a,
        value: e,
        onChange: t,
        placeholder: l,
        size: "lg",
        disabled: s
      }), jsx("span", {
        className: "x10l6tqk x19up5dg xbfrwjf xmauxvm",
        children: jsx(_$$f, {
          checked: g,
          onIcon: jsx(_$$_2, {}),
          offIcon: jsx(_$$j, {}),
          "aria-label": _$$t("figmake.settings.create_project_modal.password.view_hide"),
          htmlAttributes: {
            "data-tooltip": _$$t("figmake.settings.create_project_modal.password.view_hide"),
            "data-tooltip-type": "text"
          },
          onChange: () => _(e => !e)
        })
      })]
    }), n && jsx("div", {
      ...Ay.props(F.textBodyMediumSecondary),
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
  let i = Um();
  let a = e => {
    switch (e) {
      case "us-east-1":
        return _$$t("figmake.settings.create_project_modal.region.us_east_1");
      case "us-east-2":
        return _$$t("figmake.settings.create_project_modal.region.us_east_2");
      case "us-west-1":
        return _$$t("figmake.settings.create_project_modal.region.us_west_1");
      case "ap-southeast-1":
        return _$$t("figmake.settings.create_project_modal.region.ap_southeast_1");
      case "ap-northeast-1":
        return _$$t("figmake.settings.create_project_modal.region.ap_northeast_1");
      case "ap-northeast-2":
        return _$$t("figmake.settings.create_project_modal.region.ap_northeast_2");
      case "ap-southeast-2":
        return _$$t("figmake.settings.create_project_modal.region.ap_southeast_2");
      case "eu-west-1":
        return _$$t("figmake.settings.create_project_modal.region.eu_west_1");
      case "eu-west-2":
        return _$$t("figmake.settings.create_project_modal.region.eu_west_2");
      case "eu-west-3":
        return _$$t("figmake.settings.create_project_modal.region.eu_west_3");
      case "eu-north-1":
        return _$$t("figmake.settings.create_project_modal.region.eu_north_1");
      case "eu-central-1":
        return _$$t("figmake.settings.create_project_modal.region.eu_central_1");
      case "eu-central-2":
        return _$$t("figmake.settings.create_project_modal.region.eu_central_2");
      case "ca-central-1":
        return _$$t("figmake.settings.create_project_modal.region.ca_central_1");
      case "ap-south-1":
        return _$$t("figmake.settings.create_project_modal.region.ap_south_1");
      case "sa-east-1":
        return _$$t("figmake.settings.create_project_modal.region.sa_east_1");
      default:
        throw Error("Unknown region");
    }
  };
  return jsxs("div", {
    className: "x78zum5 xdt5ytf x1v2ro7d",
    children: [jsx("label", {
      id: "supabase-project-database-region-select",
      ...Ay.props(F.textBodyMediumStrong),
      children: _$$t("figmake.settings.create_project_modal.region.label")
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
    ..._$$g.textBodyMediumStrong,
    $$css: !0
  },
  textBodyMediumSecondary: {
    ..._$$g.textBodyMedium,
    color: "x1n0bwc9",
    $$css: !0
  }
};
let $$O0 = Ju(function (e) {
  let [t, n] = useState(!1);
  let s = hS({
    ...e,
    preventUserClose: t
  });
  let d = q5();
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
      } = await M4.fetch(TT({
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
  let q = "dbPassTooShort" === g ? tx("figmake.settings.create_project_modal.db_pass.too_short") : tx("figmake.settings.create_project_modal.db_pass.context", {
    learnMoreLink: jsx("a", {
      target: "_blank",
      href: kS,
      children: _$$t("general.learn_more")
    })
  });
  return jsx(bL, {
    manager: s,
    width: 386,
    children: jsxs(Rq, {
      onSubmit: B,
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: _$$t("figmake.settings.create_project_modal.title")
        })
      }), jsx(nB, {
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
      }), jsx(wi, {
        children: jsxs(jk, {
          className: "x78zum5 x1q0g3np x13a6bvl x167g77z xhxeiv9 xh8yej3 x9f619",
          children: [C && jsx("p", {
            ...Ay.props(F.textBodyMediumSecondary),
            children: _$$t("figmake.supabase.creating_project.subtitle")
          }), jsx($n, {
            variant: "secondary",
            onClick: () => s.props.close({
              source: "button"
            }),
            children: _$$t("figmake.settings.create_project_modal.button.cancel")
          }), C ? jsx(lV, {
            variant: "primary",
            children: _$$t("figmake.settings.create_project_modal.button.submit.loading")
          }) : jsx($n, {
            variant: "primary",
            type: "submit",
            disabled: M,
            children: _$$t("figmake.settings.create_project_modal.button.submit")
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
  return () => i(to({
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