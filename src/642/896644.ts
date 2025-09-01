import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { isNotNullish } from "../figma_app/95419";
import { AD } from "../905/871411";
import { KH } from "../figma_app/722362";
import { wA } from "../figma_app/167249";
import { useState } from "react";
import { $n } from "../905/521428";
import { bL, l9, mc, c$ } from "../905/493196";
import { J } from "../905/270045";
import { l7 } from "../905/189185";
import { H0, F_ } from "../figma_app/191804";
import { t as _$$t } from "../905/303541";
import { Zk } from "../figma_app/626177";
import { $H, mn, od, Cd } from "../048e062c/416936";
import { u as _$$u } from "../642/560546";
import { fM } from "../048e062c/444406";
import { nh } from "../642/588337";
import { N } from "../048e062c/525184";
function C({
  nodeId: e,
  jsxProps: t,
  drillDownKey: s
}) {
  let [n, i] = useState(!1);
  let l = t.chartType ?? N.BAR_GROUPED;
  let a = s => {
    l7.user("chart-setChartType", () => {
      $H(e, {
        ...t,
        chartType: s
      });
    });
  };
  let h = mn(e);
  return jsxs(Zk, {
    children: [jsx($n, {
      onClick: () => i(!0),
      children: _$$t("react-scenegraph.chart.edit_data")
    }), h && jsx($n, {
      onClick: () => l7.user("chart-clearOverrides", () => od(e)),
      children: _$$t("react-scenegraph.chart.clear_overrides")
    }), jsxs(bL, {
      value: l,
      onChange: e => a(e),
      children: [jsx(l9, {
        label: jsx(J, {
          children: _$$t("react-scenegraph.chart.chart_type")
        })
      }), jsxs(mc, {
        children: [jsx(c$, {
          value: N.BAR_GROUPED,
          children: _$$t("react-scenegraph.chart.bar_grouped")
        }), jsx(c$, {
          value: N.BAR_STACKED,
          children: _$$t("react-scenegraph.chart.bar_stacked")
        })]
      })]
    }), jsx(j, {
      nodeId: e,
      jsxProps: t,
      drillDownKey: s
    }), jsx(nh, {
      nodeId: e,
      isOpen: n,
      onClose: () => i(!1)
    })]
  });
}
function j({
  nodeId: e,
  jsxProps: t,
  drillDownKey: s
}) {
  let n = fM(t);
  return jsx(Fragment, {
    children: n.filter(e => !s || e.drillDownKeys.includes(s)).map(s => jsx(_$$u, {
      pickerId: `chart-color-picker-${s.key}`,
      inheritStyleKeyField: "inheritFillStyleKey",
      inheritStyleKey: void 0,
      inheritStyleName: void 0,
      inheritStyleId: void 0,
      hideCustomColorPickerFillTypeToggle: !1,
      paint: function (e) {
        let t = H0(e);
        return t ? {
          type: "SOLID",
          color: {
            r: t.r,
            g: t.g,
            b: t.b,
            a: 1
          },
          opacity: t.a,
          blendMode: "NORMAL",
          visible: !0
        } : {
          type: "SOLID",
          color: {
            r: 1,
            g: 1,
            b: 1,
            a: 1
          },
          opacity: 1,
          blendMode: "NORMAL",
          visible: !0
        };
      }(s.color),
      onChange: r => {
        l7.user("chart-setColor", () => {
          $H(e, {
            ...t,
            [s.key]: function (e) {
              if (!e.color || "SOLID" !== e.type) return "#FFFFFF";
              let t = {
                ...e.color
              };
              void 0 !== e.opacity && 1 !== e.opacity && (t.a = e.opacity);
              return F_(t);
            }(r)
          });
        });
      }
    }, s.key))
  });
}
export function $$v0() {
  let {
    jsxNodeId,
    jsxDrillDownKey
  } = $$k1();
  return jsxNodeId ? jsx(S, {
    jsxNodeId,
    jsxDrillDownKey
  }) : null;
}
function S({
  jsxNodeId: e,
  jsxDrillDownKey: t
}) {
  let s = Cd(e);
  return s ? jsx(C, {
    nodeId: e,
    jsxProps: s,
    drillDownKey: t
  }) : null;
}
export function $$k1() {
  let e = KH();
  return wA((e, t) => {
    let s = Object.keys(t);
    if (1 === s.length) {
      let t = s[0];
      if (!t) return {
        jsxNodeId: null,
        jsxDrillDownKey: null
      };
      if (e.get(t)?.isJSX) return {
        jsxNodeId: t,
        jsxDrillDownKey: null
      };
    }
    if (s.length > 1) {
      let t = s.map(t => e.get(t)).filter(e => e?.isJsxSublayer).filter(isNotNullish);
      if (t.length !== s.length) return {
        jsxNodeId: null,
        jsxDrillDownKey: null
      };
      let r = t[0]?.containingJSXGuid;
      let l = t[0]?.jsxDrillDownKey;
      if (!r || !l || r === AD) return {
        jsxNodeId: null,
        jsxDrillDownKey: null
      };
      if (t.every(e => e.containingJSXGuid === r && e.jsxDrillDownKey === l)) return {
        jsxNodeId: r,
        jsxDrillDownKey: l
      };
    }
    return {
      jsxNodeId: null,
      jsxDrillDownKey: null
    };
  }, e);
}
export const _ = $$v0;
export const f = $$k1;