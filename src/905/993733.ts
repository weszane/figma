import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useMemo, useState, memo, Component } from "react";
import { filterNotNullish } from "../figma_app/656233";
import { E as _$$E } from "../905/632989";
import { J0O, CWU, mKm, kz3, Dje } from "../figma_app/763686";
import { fn, dI, aI, AD } from "../905/871411";
import d from "classnames";
import { g as _$$g } from "../905/880308";
import { R as _$$R } from "../905/307199";
import { ph } from "../figma_app/709893";
import { B as _$$B } from "../905/714743";
import { t as _$$t, tx } from "../905/303541";
import { Zy } from "../figma_app/955484";
import { UK } from "../figma_app/740163";
import { J2 } from "../figma_app/84367";
import { Ib } from "../905/129884";
import { UB } from "../figma_app/249941";
import { fE, zX, wR, de, EY, oZ, FO, yC, b2, Rv } from "../905/869235";
import { cF, c2 } from "../905/382883";
import { getFeatureFlags } from "../905/601108";
import { Yx } from "../figma_app/930338";
import { rY } from "../905/985490";
import { zn, xb } from "../figma_app/164212";
import { s as _$$s } from "../905/583953";
import { dI as _$$dI } from "../905/805904";
import { TI } from "../905/713722";
import { LN, wf } from "../figma_app/975811";
import { wA } from "../vendor/514228";
import { $n } from "../905/521428";
import { R as _$$R2 } from "../figma_app/313269";
import { p as _$$p } from "../905/241044";
import { kt } from "../figma_app/858013";
import { WD } from "../figma_app/571341";
import { NU, X$, iM } from "../905/945781";
import { A as _$$A } from "../6828/523860";
import { A as _$$A2 } from "../6828/85206";
var c = d;
function v(e, t) {
  return e && e.name ? e.name : t && t.name ? t.name : _$$t("collaboration.branching_node_treatments.unnamed_node");
}
function I(e) {
  let {
    basis,
    change
  } = e;
  let r = t;
  r && "REMOVED" !== r.phase || (r = change);
  return jsx(UB, {
    node: r
  });
}
let k = "component_props_treatment_definitions--componentPropRow--JGPw7";
let R = e => !e?.parentPropDefId;
let N = e => !R(e);
let P = e => {
  switch (e) {
    case "BOOL":
      return J0O.BOOL;
    case "TEXT":
      return J0O.TEXT;
    case "INSTANCE_SWAP":
      return J0O.INSTANCE_SWAP;
    default:
      return null;
  }
};
let O = (e, t) => t ? e && JSON.stringify(e) === JSON.stringify(t) ? _$$t("branching.chunk_details.no_changes") : e ? _$$t("branching.chunk_details.property_changed") : _$$t("branching.chunk_details.property_added") : _$$t("branching.chunk_details.property_removed");
function D(e) {
  let {
    renderDelta,
    oldValue,
    newValue,
    chunkViewType
  } = e;
  let s = oldValue ?? [];
  let o = newValue ?? [];
  let l = new Set([...s.map(e => JSON.stringify(e.id)), ...o.map(e => JSON.stringify(e.id))]);
  return jsx("div", {
    className: "component_props_treatment_definitions--componentPropDiffTable--v-hgJ",
    children: Array.from(l).map(e => {
      let i = s.find(t => JSON.stringify(t.id) === e);
      let r = i;
      let l = null;
      if (renderDelta) {
        let t = o.find(t => JSON.stringify(t.id) === e);
        r = t;
        chunkViewType !== fE.CONFLICT_REVIEW && (l = O(i, t));
      } else if (!r?.type) return jsx("div", {
        className: k,
        children: "-"
      }, e);
      let d = r && r.type ? P(r.type) : null;
      return jsxs("div", {
        className: l ? "component_props_treatment_definitions--componentPropRowWithLabel--p2qr0" : k,
        children: [r && d && jsxs(Fragment, {
          children: [jsx("div", {
            className: "component_props_treatment_definitions--componentPropDefName--PfHmt ellipsis--ellipsis--Tjyfa",
            children: r.name
          }), jsxs("div", {
            className: "component_props_treatment_definitions--componentPropTypeValue--hjyC-",
            children: [zn(d), jsx("span", {
              className: "component_props_treatment_definitions--componentPropTypeLabel--a5RDA ellipsis--ellipsis--Tjyfa",
              children: xb(d)
            })]
          })]
        }), l && jsx("div", {
          className: "component_props_treatment_definitions--componentPropDiffLabel--uZQyJ ellipsis--ellipsis--Tjyfa",
          children: l
        })]
      }, e);
    })
  });
}
function L(e) {
  let {
    renderDelta,
    oldValue,
    newValue,
    chunkViewType
  } = e;
  let s = oldValue ?? [];
  let o = newValue ?? [];
  if (!s && !o) return null;
  let l = !s.length || s.some(e => N(e));
  let d = !o.length || o.some(e => N(e));
  let c = !s.length || s.some(e => R(e));
  let u = !o.length || o.some(e => R(e));
  return l && d || o.some(e => N(e)) ? renderDelta ? tx("branching.chunk_details.component_set_properties_changed") : null : c && u || o.some(e => R(e)) ? jsx(D, {
    oldValue,
    newValue,
    renderDelta,
    chunkViewType
  }) : null;
}
let K = "chunk_diff_details--caret--u2yzQ";
let Y = "chunk_diff_details--leftRightContainer--b0GkS";
let q = "chunk_diff_details--fullWidthContainer--omBg2";
let $ = "chunk_diff_details--left--aF7sL";
let Z = "chunk_diff_details--fieldName--3vTK7";
let X = "chunk_diff_details--fieldValue--3wOgr";
let Q = "chunk_diff_details--right--Wx1G8";
let J = "chunk_diff_details--layerColumn--yUJ5S";
let ee = "chunk_diff_details--detailsColumnTreatments--S7L50";
let et = "chunk_diff_details--skipMargin--CW5U-";
let ei = "chunk_diff_details--propertyRow--XbRK9";
let en = "chunk_diff_details--propertyElement--NIJBh";
let er = "chunk_diff_details--truncTextPadRight--E-Ke0";
let ea = "treatment_definition_reusables--legoPropertiesTable--Tn5wF";
let es = "treatment_definition_reusables--listLabel--k2Rsg";
let eo = "treatment_definition_reusables--listItem--GSMpM";
function el(e, t, i, n) {
  return "new" === n && e in i ? i[e] : t[e];
}
function ed(e, t) {
  return void 0 === e ? t : "boolean" == typeof e ? e ? _$$t("collaboration.branching_node_treatments.value.true") : _$$t("collaboration.branching_node_treatments.value.false") : "number" == typeof e ? e % 1 == 0 ? Math.trunc(e).toString() : e.toFixed(2).toString() : e.toString()[0] + zX(e.toString().slice(1));
}
function ec(e, t) {
  if (null != e) {
    let t = e.toString();
    let i = _$$p(t);
    return jsx(_$$R2, {
      fallback: jsx(kt, {}),
      errorFallback: null,
      value: i,
      quillClassName: "treatment_definition_reusables--quill--Z1kJq"
    });
  }
  return t;
}
function eu(e) {
  return wR(e, (e, t, i) => ed(t, _$$t("collaboration.branching_node_treatments.value.empty_dash")), (e, t, i) => ed(i, _$$t("collaboration.branching_node_treatments.value.removed")));
}
function ep(e) {
  return wR(e, (e, t, i) => ec(t, _$$t("collaboration.branching_node_treatments.value.empty_dash")), (e, t, i) => ec(i, _$$t("collaboration.branching_node_treatments.value.removed")));
}
function em(e, t) {
  return wR(e, "", (i, n, r) => {
    var a;
    a = t || e;
    return void 0 === n ? _$$t("collaboration.branching_node_treatments.value.prefix_applied", {
      prefix: a()
    }) : void 0 === r ? _$$t("collaboration.branching_node_treatments.value.prefix_removed", {
      prefix: a()
    }) : _$$t("collaboration.branching_node_treatments.value.prefix_edited", {
      prefix: a()
    });
  });
}
function eh(e) {
  return wR(e, (e, t, i, n, r, a) => {
    if (!a || !a.has(e)) return _$$t("collaboration.branching_node_treatments.value.empty_dash");
    let s = a.get(e);
    return s.previousChange?.name || _$$t("collaboration.branching_node_treatments.value.empty_dash");
  }, (e, t, i, n, r, a) => {
    if (!a || !a.has(e)) return _$$t("collaboration.branching_node_treatments.value.empty_dash");
    let s = a.get(e);
    return s.currentChange?.name || _$$t("collaboration.branching_node_treatments.value.empty_dash");
  });
}
function eg(e, t) {
  return wR(e, _$$t("collaboration.branching_node_treatments.value.empty_dash"), (i, n, r) => {
    var a;
    a = t || e;
    return !fn(n) && fn(r) ? _$$t("branching.chunk_details.guid_property_applied", {
      propertyLabel: a()
    }) : fn(n) && !fn(r) ? _$$t("branching.chunk_details.guid_property_removed", {
      propertyLabel: a()
    }) : _$$t("branching.chunk_details.guid_property_modified", {
      propertyLabel: a()
    });
  });
}
function ef(e, t) {
  return wR(e, (e, i, r) => i ? jsx(t, {
    value: i
  }) : _$$t("collaboration.branching_node_treatments.value.empty_dash"), (e, i, r) => r ? jsx(t, {
    value: r
  }) : _$$t("collaboration.branching_node_treatments.value.empty_dash"));
}
function e_(e) {
  let {
    oldValues,
    newValues,
    header,
    RenderTable
  } = e;
  let s = wA();
  let o = {};
  let l = {};
  oldValues.forEach(e => {
    o[e.displayName || ""] = e;
  });
  newValues.forEach(e => {
    l[e.displayName || ""] = e;
  });
  let d = new Set([...Object.keys(o), ...Object.keys(l)]);
  let u = [];
  for (let e of d) {
    let t = o[e]?.displayValue || l[e]?.displayValue;
    let i = o[e]?.displayValue !== l[e]?.displayValue;
    t && i && u.push(e);
  }
  let p = e => jsx("div", {
    className: c()(q, "treatment_definition_reusables--legoValueCell--V4fq0", ee, "chunk_diff_details--copyableChanges--1LoXJ"),
    children: jsx($n, {
      variant: "ghost",
      onClick: () => WD(e, s),
      children: jsx("div", {
        className: X,
        children: e || _$$t("collaboration.branching_node_treatments.value.empty_dash")
      })
    })
  });
  return u.length > 0 ? RenderTable ? jsx(RenderTable, {
    header,
    oldValueMap: o,
    newValueMap: l,
    changedKeys: u
  }) : jsxs("div", {
    className: ea,
    children: [header && jsx("div", {
      className: c()("treatment_definition_reusables--legoHeader--44Htf", q),
      children: header
    }), u.map(e => jsxs("div", {
      className: q,
      children: [jsx("div", {
        className: c()("chunk_diff_details--changedElement---NaHQ", ee),
        children: jsx("div", {
          className: c()("treatment_definition_reusables--legoLabelCell--d4Sl6", "chunk_diff_details--fieldNameLego--OdYt4"),
          children: o[e]?.displayName || l[e]?.displayName
        })
      }), p(o[e]?.displayValue), p(l[e]?.displayValue)]
    }, e))]
  }) : null;
}
function eA(e) {
  let {
    properties
  } = e;
  return jsx("table", {
    className: "treatment_definition_reusables--propertiesTable--EGsnN",
    children: jsx("tbody", {
      children: properties.map(({
        displayName: e,
        displayValue: t
      }) => jsxs("tr", {
        children: [jsx("td", {
          className: "treatment_definition_reusables--labelCell--qcOBA",
          children: e
        }), jsx("td", {
          className: "treatment_definition_reusables--valueCell--hdmLL",
          children: t || _$$t("collaboration.branching_node_treatments.value.empty_dash")
        })]
      }, _$$g()))
    })
  });
}
let ey = new LN();
function eb(e) {
  return `${TI.format(e)} ${ey.format(e.a)}`;
}
let ev = {
  EMOJI: () => _$$t("collaboration.branching_node_treatments.value.emoji"),
  GRADIENT_ANGULAR: () => _$$t("collaboration.branching_node_treatments.value.gradient_angular"),
  GRADIENT_DIAMOND: () => _$$t("collaboration.branching_node_treatments.value.gradient_diamond"),
  GRADIENT_LINEAR: () => _$$t("collaboration.branching_node_treatments.value.gradient_linear"),
  GRADIENT_RADIAL: () => _$$t("collaboration.branching_node_treatments.value.gradient_radial"),
  IMAGE: () => _$$t("collaboration.branching_node_treatments.value.image"),
  SOLID: () => _$$t("collaboration.branching_node_treatments.value.solid"),
  VIDEO: () => _$$t("collaboration.branching_node_treatments.value.video"),
  PATTERN: () => _$$t("collaboration.branching_node_treatments.value.pattern"),
  NOISE: () => _$$t("collaboration.branching_node_treatments.value.noise")
};
let eI = {
  PASS_THROUGH: () => _$$t("collaboration.branching_node_treatments.value.blend_mode.pass_through"),
  NORMAL: () => _$$t("collaboration.branching_node_treatments.value.blend_mode.normal"),
  DARKEN: () => _$$t("collaboration.branching_node_treatments.value.blend_mode.darken"),
  MULTIPLY: () => _$$t("collaboration.branching_node_treatments.value.blend_mode.multiply"),
  LINEAR_BURN: () => _$$t("collaboration.branching_node_treatments.value.blend_mode.linear_burn"),
  COLOR_BURN: () => _$$t("collaboration.branching_node_treatments.value.blend_mode.color_burn"),
  LIGHTEN: () => _$$t("collaboration.branching_node_treatments.value.blend_mode.lighten"),
  SCREEN: () => _$$t("collaboration.branching_node_treatments.value.blend_mode.screen"),
  LINEAR_DODGE: () => _$$t("collaboration.branching_node_treatments.value.blend_mode.linear_dodge"),
  COLOR_DODGE: () => _$$t("collaboration.branching_node_treatments.value.blend_mode.color_dodge"),
  OVERLAY: () => _$$t("collaboration.branching_node_treatments.value.blend_mode.overlay"),
  SOFT_LIGHT: () => _$$t("collaboration.branching_node_treatments.value.blend_mode.soft_light"),
  HARD_LIGHT: () => _$$t("collaboration.branching_node_treatments.value.blend_mode.hard_light"),
  DIFFERENCE: () => _$$t("collaboration.branching_node_treatments.value.blend_mode.difference"),
  EXCLUSION: () => _$$t("collaboration.branching_node_treatments.value.blend_mode.exclusion"),
  HUE: () => _$$t("collaboration.branching_node_treatments.value.blend_mode.hue"),
  SATURATION: () => _$$t("collaboration.branching_node_treatments.value.blend_mode.saturation"),
  COLOR: () => _$$t("collaboration.branching_node_treatments.value.blend_mode.color"),
  LUMINOSITY: () => _$$t("collaboration.branching_node_treatments.value.blend_mode.luminosity")
};
function eE(e) {
  let t = [];
  if (e.type) {
    let i = ev[e.type]();
    t.push({
      displayName: _$$t("collaboration.branching_node_treatments.property.fill_type"),
      displayValue: i
    });
  }
  t.push({
    displayName: _$$t("collaboration.branching_node_treatments.property.opacity"),
    displayValue: ey.format(e.opacity)
  });
  e.color && t.push({
    displayName: _$$t("collaboration.branching_node_treatments.property.color"),
    displayValue: eb(e.color)
  });
  e.stops && (t = t.concat(e.stops.map((e, t) => ({
    displayName: _$$t("collaboration.branching_node_treatments.value.color_stop_index", {
      index: t + 1
    }),
    displayValue: _$$t("collaboration.branching_node_treatments.value.color_stop", {
      colorValue: eb(e.color),
      percentage: ey.format(e.position)
    })
  }))));
  t.push({
    displayName: _$$t("collaboration.branching_node_treatments.property.blend_mode"),
    displayValue: e.blendMode && eI[e.blendMode]()
  });
  t.push({
    displayName: _$$t("collaboration.branching_node_treatments.property.visibility"),
    displayValue: e.visible ? _$$t("collaboration.branching_node_treatments.value.on") : _$$t("collaboration.branching_node_treatments.value.off")
  });
  e.paintFilter && t.push({
    displayName: _$$t("collaboration.branching_node_treatments.property.image_filter"),
    displayValue: _$$t("collaboration.branching_node_treatments.value.filter_applied")
  });
  return t;
}
function ex(e) {
  let t = e.value;
  return jsx("div", {
    children: t.map((e, t) => jsxs("div", {
      className: eo,
      children: [jsx("div", {
        className: es,
        children: `Fill ${t + 1}`
      }), jsx(eA, {
        properties: eE(e)
      })]
    }, t))
  });
}
function eS(e) {
  return [{
    displayName: _$$t("collaboration.branching_node_treatments.property.x"),
    displayValue: e.offset?.x?.toString()
  }, {
    displayName: _$$t("collaboration.branching_node_treatments.property.y"),
    displayValue: e.offset?.y?.toString()
  }, {
    displayName: _$$t("collaboration.branching_node_treatments.property.blur"),
    displayValue: e.radius?.toString()
  }, {
    displayName: _$$t("collaboration.branching_node_treatments.property.spread"),
    displayValue: e.spread?.toString()
  }, {
    displayName: _$$t("collaboration.branching_node_treatments.property.fill"),
    displayValue: e.color ? eb(e.color) : void 0
  }, {
    displayName: _$$t("collaboration.branching_node_treatments.property.blend_mode"),
    displayValue: e.blendMode && eI[e.blendMode]()
  }, {
    displayName: _$$t("collaboration.branching_node_treatments.property.visibility"),
    displayValue: e.visible ? _$$t("collaboration.branching_node_treatments.value.on") : _$$t("collaboration.branching_node_treatments.value.off")
  }];
}
function ew(e, t, i) {
  let n = {};
  if (e?.entries) {
    for (let r of e.entries) if (r.variableField && r.variableData?.value?.alias) {
      let e = _$$dI(r.variableData?.value?.alias);
      i.add(r.variableField);
      n[r.variableField] = CWU.getVariableName(e, t);
    }
  }
  return n;
}
let eC = (e, t) => de(() => e, () => "lego-table", (i, r, a) => {
  let s = r?.parameterConsumptionMap || a?.parameterConsumptionMap ? "parameterConsumptionMap" : "variableConsumptionMap";
  let o = new Set();
  let l = ew(r[s], 0, o);
  let d = ew(a[s], 1, o);
  let c = [];
  let u = [];
  for (let e of o) l[e] !== d[e] && (c.push({
    displayName: e,
    displayValue: l[e]
  }), u.push({
    displayName: e,
    displayValue: d[e]
  }));
  return jsx("div", {
    className: ea,
    children: jsx(e_, {
      header: e,
      oldValues: c,
      newValues: u,
      RenderTable: t
    })
  });
});
function eT(e) {
  return Math.round(100 * e) / 100;
}
function ek(e) {
  return {
    x: eT(e.x),
    y: eT(e.y)
  };
}
let eR = (e, t) => wR(() => e, (e, t, i) => "lego-table", (e, i, r) => {
  let a = _$$s.fromFigMatrix(i);
  let s = _$$s.fromFigMatrix(r);
  let o = [];
  let l = [];
  let d = ek(a.offset());
  let c = ek(s.offset());
  (d.x !== c.x || d.y !== c.y) && (o.push({
    displayName: _$$t("collaboration.branching_node_treatments.property.position"),
    displayValue: `x: ${d.x}; y: ${d.y}`
  }), l.push({
    displayName: _$$t("collaboration.branching_node_treatments.property.position"),
    displayValue: `x: ${c.x}; y: ${c.y}`
  }));
  let u = ek(a.toScale());
  let p = ek(s.toScale());
  (u.x !== p.x || u.y !== p.y) && (o.push({
    displayName: _$$t("collaboration.branching_node_treatments.property.scale"),
    displayValue: `x: ${u.x}; y: ${u.y}`
  }), l.push({
    displayName: _$$t("collaboration.branching_node_treatments.property.scale"),
    displayValue: `x: ${p.x}; y: ${p.y}`
  }));
  let m = eT(a.toDegrees());
  let h = eT(s.toDegrees());
  m !== h && (o.push({
    displayName: _$$t("collaboration.branching_node_treatments.property.rotation"),
    displayValue: `${m}\xb0`
  }), l.push({
    displayName: _$$t("collaboration.branching_node_treatments.property.rotation"),
    displayValue: `${h}\xb0`
  }));
  return jsx("div", {
    className: ea,
    children: jsx(e_, {
      oldValues: o,
      newValues: l,
      RenderTable: t
    })
  });
});
let eN = (e, t) => wR(() => e, (e, t, i) => "lego-table", (i, r, a) => {
  let s = r || [];
  let l = a || [];
  let d = Math.max(s.length, l.length);
  let c = [];
  for (let i = 0; i < d; i++) {
    let r = s[i] ? eE(s[i]) : [];
    let a = l[i] ? eE(l[i]) : [];
    let d = [l[i], s[i]].map((e, t) => function (e, t) {
      if (e?.colorVar?.value?.alias) {
        let i = _$$dI(e.colorVar.value.alias);
        return CWU.getVariableName(i, t);
      }
      return null;
    }(e, t));
    d[0] !== d[1] && (a.push({
      displayName: _$$t("collaboration.branching_node_treatments.value.node_type.variable"),
      displayValue: d[0]
    }), r.push({
      displayName: _$$t("collaboration.branching_node_treatments.value.node_type.variable"),
      displayValue: d[1]
    }));
    c.push(jsx(e_, {
      header: `${e} ${i + 1}`,
      oldValues: r,
      newValues: a,
      RenderTable: t
    }, i));
  }
  return jsx("div", {
    className: ea,
    children: c
  });
});
let eP = (e, t) => wR(() => e, (e, t, i) => "lego-table", (i, r, a) => {
  let s = r || [];
  let o = a || [];
  let l = Math.max(s.length, o.length);
  let d = [];
  for (let i = 0; i < l; i++) {
    let r = s[i] ? eS(s[i]) : [];
    let a = o[i] ? eS(o[i]) : [];
    s[i]?.type && r.push({
      displayName: _$$t("collaboration.branching_node_treatments.value.effect.effect_type"),
      displayValue: eO[s[i].type]()
    });
    o[i]?.type && a.push({
      displayName: _$$t("collaboration.branching_node_treatments.value.effect.effect_type"),
      displayValue: eO[o[i].type]()
    });
    d.push(jsx(e_, {
      header: `${e} ${i + 1}`,
      oldValues: r,
      newValues: a,
      RenderTable: t
    }));
    i + 1 < l && d.push(jsx("div", {
      className: "treatment_definition_reusables--divider--LBUd9"
    }));
  }
  return jsx("div", {
    className: ea,
    children: d
  });
});
let eO = {
  BACKGROUND_BLUR: () => _$$t("collaboration.branching_node_treatments.value.effect.background_blur"),
  DROP_SHADOW: () => _$$t("collaboration.branching_node_treatments.value.effect.drop_shadow"),
  FOREGROUND_BLUR: () => _$$t("collaboration.branching_node_treatments.value.effect.foreground_blur"),
  INNER_SHADOW: () => _$$t("collaboration.branching_node_treatments.value.effect.inner_shadow"),
  REPEAT: () => _$$t("collaboration.branching_node_treatments.value.effect.repeat"),
  SYMMETRY: () => _$$t("collaboration.branching_node_treatments.value.effect.symmetry"),
  GRAIN: () => _$$t("collaboration.branching_node_treatments.value.effect.grain"),
  NOISE: () => _$$t("collaboration.branching_node_treatments.value.effect.noise"),
  GLASS: () => _$$t("collaboration.branching_node_treatments.value.effect.glass")
};
function eD(e) {
  let t = e.value;
  return jsx("div", {
    children: t.map((e, t) => jsxs("div", {
      className: eo,
      children: [jsx("div", {
        className: es,
        children: e.type && eO[e.type]()
      }), jsx(eA, {
        properties: eS(e)
      })]
    }, t))
  });
}
let eL = {
  MIN: () => _$$t("collaboration.branching_node_treatments.value.layout_grid.min"),
  CENTER: () => _$$t("collaboration.branching_node_treatments.value.layout_grid.center"),
  STRETCH: () => _$$t("collaboration.branching_node_treatments.value.layout_grid.stretch"),
  MAX: () => _$$t("collaboration.branching_node_treatments.value.layout_grid.max")
};
let eF = de(() => _$$t("collaboration.branching_node_treatments.property.type_details"), () => _$$t("collaboration.branching_node_treatments.value.empty_dash"), () => _$$t("collaboration.branching_node_treatments.value.type_details_edited"));
function eM(e) {
  return wR(e, (e, t, i) => t ? wf.format(t) : _$$t("collaboration.branching_node_treatments.value.empty_dash"), (e, t, i) => i ? wf.format(i) : _$$t("collaboration.branching_node_treatments.value.empty_dash"));
}
function ej() {
  return wR(() => _$$t("collaboration.branching_node_treatments.property.order"), "", (e, t, i) => t?.sortPosition !== i?.sortPosition ? _$$t("collaboration.branching_node_treatments.value.style_reordered") : _$$t("collaboration.branching_node_treatments.value.empty_dash"));
}
function eU() {
  return wR(() => _$$t("collaboration.branching_node_treatments.property.order"), "", (e, t, i) => t !== i ? _$$t("collaboration.branching_node_treatments.value.style_reordered") : _$$t("collaboration.branching_node_treatments.value.empty_dash"));
}
let eB = {
  FILL: {
    name: eu(() => _$$t("collaboration.branching_node_treatments.property.style_name")),
    description: ep(() => _$$t("collaboration.branching_node_treatments.property.description")),
    sortPosition: eU(),
    sharedStyleMasterData: ej(),
    fillPaints: ef(() => _$$t("collaboration.branching_node_treatments.property.fill_details"), ex)
  },
  EFFECT: {
    name: eu(() => _$$t("collaboration.branching_node_treatments.property.style_name")),
    description: ep(() => _$$t("collaboration.branching_node_treatments.property.description")),
    sortPosition: eU(),
    sharedStyleMasterData: ej(),
    effects: ef(() => _$$t("collaboration.branching_node_treatments.property.effect_details"), eD)
  },
  TEXT: {
    name: eu(() => _$$t("collaboration.branching_node_treatments.property.style_name")),
    description: ep(() => _$$t("collaboration.branching_node_treatments.property.description")),
    sortPosition: eU(),
    sharedStyleMasterData: ej(),
    fontName: wR(() => _$$t("collaboration.branching_node_treatments.property.font"), (e, t, i) => t ? `${t.family} ${t.style}` : _$$t("collaboration.branching_node_treatments.value.empty_dash"), (e, t, i) => i ? `${i.family} ${i.style}` : _$$t("collaboration.branching_node_treatments.value.empty_dash")),
    fontSize: eu(() => _$$t("collaboration.branching_node_treatments.property.font_size")),
    lineHeight: eM(() => _$$t("collaboration.branching_node_treatments.property.line_height")),
    letterSpacing: eM(() => _$$t("collaboration.branching_node_treatments.property.letter_spacing")),
    paragraphSpacing: eu(() => _$$t("collaboration.branching_node_treatments.property.paragraph_spacing")),
    paragraphIndent: eu(() => _$$t("collaboration.branching_node_treatments.property.paragraph_indent")),
    listSpacing: eu(() => _$$t("collaboration.branching_node_treatments.property.list_spacing")),
    fontVariantCommonLigatures: eF,
    fontVariantContextualLigatures: eF,
    fontVariantDiscretionaryLigatures: eF,
    fontVariantHistoricalLigatures: eF,
    fontVariantOrdinal: eF,
    fontVariantSlashedZero: eF,
    fontVariantNumericFigure: eF,
    fontVariantNumericSpacing: eF,
    fontVariantNumericFraction: eF,
    fontVariantCaps: eF,
    fontVariantPosition: eF,
    toggledOnOTFeatures: eF,
    toggledOffOTFeatures: eF,
    fontVariations: eF,
    detachOpticalSizeFromFontSize: eF
  },
  GRID: {
    name: eu(() => _$$t("collaboration.branching_node_treatments.property.style_name")),
    description: ep(() => _$$t("collaboration.branching_node_treatments.property.description")),
    sortPosition: eU(),
    sharedStyleMasterData: ej(),
    layoutGrids: ef(() => _$$t("collaboration.branching_node_treatments.property.layout_guide_details"), function (e) {
      let t = e.value;
      return jsx("div", {
        children: t.map((e, t) => {
          let i = "GRID" === e.pattern ? "Grid" : "X" === e.axis ? "Columns" : "Y" === e.axis ? "Rows" : null;
          if (!i) return null;
          let r = "Grid" === i ? [{
            displayName: _$$t("collaboration.branching_node_treatments.property.size"),
            displayValue: e.sectionSize?.toString()
          }, {
            displayName: _$$t("collaboration.branching_node_treatments.property.color"),
            displayValue: e.color ? eb(e.color) : void 0
          }] : [{
            displayName: _$$t("collaboration.branching_node_treatments.property.count"),
            displayValue: e.numSections?.toString()
          }, {
            displayName: _$$t("collaboration.branching_node_treatments.property.color"),
            displayValue: e.color ? eb(e.color) : void 0
          }, {
            displayName: _$$t("collaboration.branching_node_treatments.property.type"),
            displayValue: e.type && eL[e.type]()
          }, {
            displayName: _$$t("collaboration.branching_node_treatments.property.size"),
            displayValue: e.sectionSize?.toString()
          }, {
            displayName: _$$t("collaboration.branching_node_treatments.property.offset"),
            displayValue: e.offset?.toString()
          }, {
            displayName: _$$t("collaboration.branching_node_treatments.property.gutter"),
            displayValue: e.gutterSize?.toString()
          }, {
            displayName: _$$t("collaboration.branching_node_treatments.property.visibility"),
            displayValue: e.visible ? _$$t("collaboration.branching_node_treatments.value.on") : _$$t("collaboration.branching_node_treatments.value.off")
          }];
          return jsxs("div", {
            className: eo,
            children: [jsx("div", {
              className: es,
              children: i
            }), jsx(eA, {
              properties: r
            })]
          }, t);
        })
      });
    })
  }
};
let eV = EY(() => _$$t("collaboration.branching_node_treatments.property.prototype"), "", () => _$$t("collaboration.branching_node_treatments.value.prototype_behavior_edited"));
let eG = EY(() => _$$t("collaboration.branching_node_treatments.property.plugin_data"), "", () => _$$t("collaboration.branching_node_treatments.value.plugin_data_edited"));
let ez = de(() => _$$t("collaboration.branching_node_treatments.property.font_variations"), "", () => _$$t("collaboration.branching_node_treatments.value.font_variations_edited"));
let eH = de(() => _$$t("collaboration.branching_node_treatments.property.widget_metadata"), "", () => _$$t("collaboration.branching_node_treatments.value.widget_metadata_edited"));
let eW = {
  [mKm.FILL_CONTAINER]: () => _$$t("collaboration.branching_node_treatments.value.autolayout.fill"),
  [mKm.FIXED]: () => _$$t("collaboration.branching_node_treatments.value.autolayout.fixed"),
  [mKm.HUG_CONTENT]: () => _$$t("collaboration.branching_node_treatments.value.autolayout.hug")
};
let eK = {
  BASELINE: () => _$$t("collaboration.branching_node_treatments.value.autolayout.baseline"),
  CENTER: () => _$$t("collaboration.branching_node_treatments.value.autolayout.center"),
  MAX: () => _$$t("collaboration.branching_node_treatments.value.autolayout.max"),
  MIN: () => _$$t("collaboration.branching_node_treatments.value.autolayout.min"),
  SPACE_EVENLY: () => _$$t("collaboration.branching_node_treatments.value.autolayout.space_between_legacy"),
  SPACE_BETWEEN: () => _$$t("collaboration.branching_node_treatments.value.autolayout.space_between")
};
let eY = {
  value: {
    x: 0,
    y: 0
  }
};
let eq = {
  value: {
    x: 1 / 0,
    y: 1 / 0
  }
};
let e$ = (e, t, i, n, r = !1) => {
  let a;
  let s;
  let l;
  let d;
  let c = {};
  let u = _$$t("collaboration.branching_node_treatments.value.autolayout.px_amount", {
    value: 0
  });
  let p = [u, u, u, u];
  let m = !1;
  let h = !1;
  let f = 0;
  let _ = _$$t("collaboration.branching_node_treatments.property.horizontal_sizing");
  let A = _$$t("collaboration.branching_node_treatments.property.vertical_sizing");
  let y = el("stackMode", t, i, n);
  let b = el("stackWrap", t, i, n);
  let v = !1;
  for (let t of e) {
    let e = "new" === n ? t.newValue : t.oldValue;
    let i = "number" == typeof e && r ? parseFloat(e.toFixed(2)) : e;
    switch (t.fieldName) {
      case "stackMode":
      case "stackWrap":
        v = !0;
        break;
      case "stackSpacing":
        if ("number" != typeof i || c.spacing) break;
        c.spacing = {
          displayName: _$$t("collaboration.branching_node_treatments.property.stack_spacing"),
          displayValue: i.toString()
        };
        break;
      case "stackCounterSpacing":
        if ("number" != typeof i || "HORIZONTAL" !== y || "WRAP" !== b) break;
        c.counterSpacing = {
          displayName: _$$t("collaboration.branching_node_treatments.property.stack_counter_spacing"),
          displayValue: i.toString()
        };
        break;
      case "stackCounterAlignContent":
        "SPACE_BETWEEN" === i && (c.counterSpacing = {
          displayName: _$$t("collaboration.branching_node_treatments.property.stack_counter_spacing"),
          displayValue: _$$t("collaboration.branching_node_treatments.value.autolayout.space_between")
        });
        break;
      case "stackHorizontalPadding":
        if (m = !0, "number" != typeof i) break;
        p[0] = _$$t("collaboration.branching_node_treatments.value.autolayout.px_amount", {
          value: i.toString()
        });
        p[2] = _$$t("collaboration.branching_node_treatments.value.autolayout.px_amount", {
          value: i.toString()
        });
        break;
      case "stackVerticalPadding":
        if (m = !0, "number" != typeof i) break;
        p[1] = _$$t("collaboration.branching_node_treatments.value.autolayout.px_amount", {
          value: i.toString()
        });
        p[3] = _$$t("collaboration.branching_node_treatments.value.autolayout.px_amount", {
          value: i.toString()
        });
        break;
      case "stackPaddingRight":
        if (m = !0, "number" != typeof i) break;
        p[2] = _$$t("collaboration.branching_node_treatments.value.autolayout.px_amount", {
          value: i.toString()
        });
        break;
      case "stackPaddingBottom":
        if (m = !0, "number" != typeof i) break;
        p[3] = _$$t("collaboration.branching_node_treatments.value.autolayout.px_amount", {
          value: i.toString()
        });
        break;
      case "stackChildPrimaryGrow":
        i && 1 === i && (f += 1);
        break;
      case "stackPrimarySizing":
        {
          let e = i && "RESIZE_TO_FIT" !== i && "RESIZE_TO_FIT_WITH_IMPLICIT_SIZE" !== i ? mKm.FIXED : mKm.HUG_CONTENT;
          "HORIZONTAL" === y ? s = e : "VERTICAL" === y && (a = e);
          break;
        }
      case "stackChildAlignSelf":
        i && "STRETCH" === i && (f += 1);
        break;
      case "stackCounterSizing":
        {
          let e = "RESIZE_TO_FIT" === i || "RESIZE_TO_FIT_WITH_IMPLICIT_SIZE" === i ? mKm.HUG_CONTENT : mKm.FIXED;
          "HORIZONTAL" === y ? a = e : "VERTICAL" === y && (s = e);
          break;
        }
      case "stackPrimaryAlignItems":
        if (h = !0, "string" != typeof i) break;
        "HORIZONTAL" === y ? d = eK[i]() : "VERTICAL" === y && (l = eK[i]());
        break;
      case "stackCounterAlignItems":
        if (h = !0, "string" != typeof i) break;
        "HORIZONTAL" === y ? l = eK[i]() : "VERTICAL" === y && (d = eK[i]());
        break;
      case "minSize":
        {
          let e = i ?? eY;
          let r = ("old" === n ? t.newValue : t.oldValue) ?? eY;
          e.value?.x !== r.value?.x && (c.minWidth = {
            displayName: _$$t("collaboration.branching_node_treatments.value.autolayout.min_width"),
            displayValue: eX(e.value?.x, 0)
          });
          e.value?.y !== r.value?.y && (c.minHeight = {
            displayName: _$$t("collaboration.branching_node_treatments.value.autolayout.min_height"),
            displayValue: eX(e.value?.y, 0)
          });
          break;
        }
      case "maxSize":
        {
          let e = i ?? eq;
          let r = ("old" === n ? t.newValue : t.oldValue) ?? eq;
          e.value?.x !== r.value?.x && (c.maxWidth = {
            displayName: _$$t("collaboration.branching_node_treatments.value.autolayout.max_width"),
            displayValue: eX(e.value?.x, 1 / 0)
          });
          e.value?.y !== r.value?.y && (c.maxHeight = {
            displayName: _$$t("collaboration.branching_node_treatments.value.autolayout.max_height"),
            displayValue: eX(e.value?.y, 1 / 0)
          });
          break;
        }
      case "stackPositioning":
        {
          let e = i ?? "AUTO";
          e !== (("old" === n ? t.newValue : t.oldValue) ?? "AUTO") && (c.stackPositioning = {
            displayName: _$$t("collaboration.branching_node_treatments.value.autolayout.stack_positioning"),
            displayValue: e
          });
        }
    }
  }
  if (2 === f ? (c.vertical_sizing = {
    displayName: A,
    displayValue: _$$t("collaboration.branching_node_treatments.value.autolayout.fill")
  }, c.horizontal_sizing = {
    displayName: _,
    displayValue: _$$t("collaboration.branching_node_treatments.value.autolayout.fill")
  }) : 1 !== f || a && a !== mKm.HUG_CONTENT ? 1 !== f || s && s !== mKm.HUG_CONTENT ? 1 === f ? (c.vertical_sizing = {
    displayName: A,
    displayValue: _$$t("collaboration.branching_node_treatments.value.autolayout.fill_or_fixed")
  }, c.horizontal_sizing = {
    displayName: _,
    displayValue: _$$t("collaboration.branching_node_treatments.value.autolayout.fill_or_fixed")
  }) : 0 === f && (void 0 !== s && (c.horizontal_sizing = {
    displayName: _,
    displayValue: eW[s]()
  }), void 0 !== a && (c.vertical_sizing = {
    displayName: A,
    displayValue: eW[a]()
  })) : c.vertical_sizing = {
    displayName: A,
    displayValue: _$$t("collaboration.branching_node_treatments.value.autolayout.fill")
  } : c.horizontal_sizing = {
    displayName: _,
    displayValue: _$$t("collaboration.branching_node_treatments.value.autolayout.fill")
  }, v && "string" == typeof y && "string" == typeof b) {
    let e = (() => {
      switch (y) {
        case "NONE":
        case "GRID":
          return _$$t("collaboration.branching_node_treatments.value.autolayout.none");
        case "VERTICAL":
          return _$$t("collaboration.branching_node_treatments.value.autolayout.vertical");
        case "HORIZONTAL":
          if ("WRAP" === b) return _$$t("collaboration.branching_node_treatments.value.autolayout.horizontal_wrap");
          return _$$t("collaboration.branching_node_treatments.value.autolayout.horizontal");
      }
    })();
    c.direction = {
      displayName: _$$t("collaboration.branching_node_treatments.property.direction"),
      displayValue: e
    };
  }
  m && (c.padding = {
    displayName: _$$t("collaboration.branching_node_treatments.property.padding"),
    displayValue: Yx(p, "unit")
  });
  (l || d || h) && (c.align_items = {
    displayName: _$$t("collaboration.branching_node_treatments.property.align_items"),
    displayValue: _$$t("collaboration.branching_node_treatments.value.empty_dash")
  }, l && d ? c.align_items.displayValue = _$$t("collaboration.branching_node_treatments.value.autolayout.align_vertical_and_horizontal", {
    verticalAlignment: l,
    horizontalAlignment: d
  }) : l ? c.align_items.displayValue = l : d && (c.align_items.displayValue = d));
  return c;
};
let eZ = (e, t, i, r) => jsx(eA, {
  properties: Object.values(e$(e, t, i, r))
}, _$$g());
function eX(e, t) {
  return e === t ? _$$t("collaboration.branching_node_treatments.value.autolayout.none") : _$$t("collaboration.branching_node_treatments.value.autolayout.px_amount", {
    value: e
  });
}
let eQ = de(() => _$$t("collaboration.branching_node_treatments.property.auto_layout_details"), (e, t, i) => eZ(e, t, i, "old"), (e, t, i) => eZ(e, t, i, "new"));
let eJ = e => de(() => _$$t("collaboration.branching_node_treatments.property.auto_layout_details"), (e, t, i) => "lego-table", (t, i, r) => {
  let a = e$(t, i, r, "old", !0);
  let s = e$(t, i, r, "new", !0);
  let o = new Set([...Object.keys(a), ...Object.keys(s)]);
  let l = !1;
  for (let e of o) if (a[e]?.displayValue !== s[e]?.displayValue) {
    l = !0;
    break;
  }
  return l ? jsx(e_, {
    header: _$$t("collaboration.branching_node_treatments.property.auto_layout_details"),
    oldValues: Object.values(a),
    newValues: Object.values(s),
    RenderTable: e
  }) : null;
});
let e0 = de(() => _$$t("collaboration.branching_node_treatments.property.properties"), () => _$$t("collaboration.branching_node_treatments.value.empty_dash"), () => _$$t("collaboration.branching_node_treatments.value.prefix_applied", {
  prefix: _$$t("collaboration.branching_node_treatments.property.properties")
}));
let e1 = wR(() => _$$t("collaboration.branching_node_treatments.property.hyperlink"), (e, t, i) => t?.url ? t.url : _$$t("collaboration.branching_node_treatments.value.empty_dash"), (e, t, i) => i?.url ? i.url : _$$t("collaboration.branching_node_treatments.value.empty_dash"));
let e2 = wR(() => _$$t("collaboration.branching_node_treatments.property.mention"), (e, t, i) => t?.id ? dI(t.id) : _$$t("collaboration.branching_node_treatments.value.empty_dash"), (e, t, i) => i?.id ? dI(i.id) : _$$t("collaboration.branching_node_treatments.value.empty_dash"));
let e5 = (e, t, i) => {
  let r = el("borderTopWeight", e, t, i) ?? 0;
  let a = el("borderBottomWeight", e, t, i) ?? 0;
  let s = el("borderLeftWeight", e, t, i) ?? 0;
  let o = el("borderRightWeight", e, t, i) ?? 0;
  return jsx("div", {
    "data-tooltip-type": Ib.TEXT,
    "data-tooltip": _$$t("collaboration.branching_node_treatments.property.border_weights_tooltip"),
    style: {
      display: "inline-block"
    },
    children: ed(r, _$$t("collaboration.branching_node_treatments.value.empty_dash")) + ", " + ed(o, _$$t("collaboration.branching_node_treatments.value.empty_dash")) + ", " + ed(a, _$$t("collaboration.branching_node_treatments.value.empty_dash")) + ", " + ed(s, _$$t("collaboration.branching_node_treatments.value.empty_dash"))
  });
};
let e4 = (e, t, i) => {
  let r = el("rectangleTopLeftCornerRadius", e, t, i) ?? 0;
  let a = el("rectangleTopRightCornerRadius", e, t, i) ?? 0;
  let s = el("rectangleBottomRightCornerRadius", e, t, i) ?? 0;
  let o = el("rectangleBottomLeftCornerRadius", e, t, i) ?? 0;
  return jsx("div", {
    "data-tooltip-type": Ib.TEXT,
    "data-tooltip": _$$t("collaboration.branching_node_treatments.property.radii_tooltip"),
    style: {
      display: "inline-block"
    },
    children: ed(r, _$$t("collaboration.branching_node_treatments.value.empty_dash")) + ", " + ed(a, _$$t("collaboration.branching_node_treatments.value.empty_dash")) + ", " + ed(s, _$$t("collaboration.branching_node_treatments.value.empty_dash")) + ", " + ed(o, _$$t("collaboration.branching_node_treatments.value.empty_dash"))
  });
};
let e3 = de(() => _$$t("collaboration.branching_node_treatments.property.border_weights"), (e, t, i) => e5(t, i, "old"), (e, t, i) => e5(t, i, "new"));
let e6 = de(() => _$$t("collaboration.branching_node_treatments.property.radii"), (e, t, i) => e4(t, i, "old"), (e, t, i) => e4(t, i, "new"));
let e7 = wR(() => _$$t("collaboration.branching_node_treatments.property.line_height"), (e, t, i) => t?.units && t.value ? t.value.toString() + " " + t.units.toString() : _$$t("collaboration.branching_node_treatments.value.empty_dash"), (e, t, i) => i?.units && i.value ? i.value.toString() + " " + i.units.toString() : _$$t("collaboration.branching_node_treatments.value.empty_dash"));
let e8 = wR(() => _$$t("collaboration.branching_node_treatments.property.text_data"), (e, t, i) => t?.characters ? t.characters : _$$t("collaboration.branching_node_treatments.value.empty_dash"), (e, t, i) => i?.characters ? i.characters : _$$t("collaboration.branching_node_treatments.value.empty_dash"));
let e9 = wR(() => _$$t("collaboration.branching_node_treatments.property.letter_spacing"), (e, t, i) => t?.units && t.value ? t.value.toString() + " " + t.units.toString() : _$$t("collaboration.branching_node_treatments.value.empty_dash"), (e, t, i) => i?.units && i.value ? i.value.toString() + " " + i.units.toString() : _$$t("collaboration.branching_node_treatments.value.empty_dash"));
function te(e) {
  return (t, i, r) => {
    let a = el("textTruncation", i, r, e) ?? "DISABLED";
    let s = el("maxLines", i, r, e);
    let o = [{
      displayName: _$$t("collaboration.branching_node_treatments.property.text_truncation"),
      displayValue: tm[a]()
    }];
    "DISABLED" !== a && o.push({
      displayName: _$$t("collaboration.branching_node_treatments.property.max_lines"),
      displayValue: null == s ? _$$t("collaboration.branching_node_treatments.value.empty_dash") : 0 === s ? _$$t("collaboration.branching_node_treatments.value.max_lines.auto") : s.toFixed(0)
    });
    return jsx(eA, {
      properties: o
    });
  };
}
let tt = de(() => _$$t("collaboration.branching_node_treatments.property.text_truncation_details"), te("old"), te("new"));
let ti = wR(() => _$$t("collaboration.branching_node_treatments.property.size"), (e, t, i) => {
  let n = ek(t);
  return n.x && n.y ? "x: " + n.x.toString() + "; y: " + n.y.toString() : _$$t("collaboration.branching_node_treatments.value.empty_dash");
}, (e, t, i) => {
  let n = ek(i);
  return n.x && n.y ? "x: " + n.x.toString() + "; y: " + n.y.toString() : _$$t("collaboration.branching_node_treatments.value.empty_dash");
});
let tn = e => {
  var t = "";
  e.map((e, i) => {
    0 !== i && (t += ", ");
    t += ed(e, "");
  });
  return t;
};
let tr = wR(() => _$$t("collaboration.branching_node_treatments.property.dash_pattern"), (e, t, i) => t.length ? tn(t) : _$$t("collaboration.branching_node_treatments.value.empty_dash"), (e, t, i) => i.length ? tn(i) : _$$t("collaboration.branching_node_treatments.value.empty_dash"));
let ta = wR(() => _$$t("collaboration.branching_node_treatments.property.font_name"), (e, t, i) => t ? `${t.family} ${t.style}` : _$$t("collaboration.branching_node_treatments.value.empty_dash"), (e, t, i) => i ? `${i.family} ${i.style}` : _$$t("collaboration.branching_node_treatments.value.empty_dash"));
let ts = wR(() => _$$t("collaboration.branching_node_treatments.property.parent"), (e, t, i, n) => {
  let r = rY.getImmediateParentHierarchyNodeChange(n, kz3.BASIS_PARENT);
  let a = r?.name;
  return aI(t?.guid, i?.guid) ? _$$t("collaboration.branching_node_treatments.value.empty_dash") : a || _$$t("collaboration.branching_node_treatments.value.empty_dash");
}, (e, t, i, n) => {
  let r = rY.getImmediateParentHierarchyNodeChange(n, kz3.PARENT);
  let a = r?.name;
  return aI(t?.guid, i?.guid) ? _$$t("collaboration.branching_node_treatments.value.node_reordered") : a || _$$t("collaboration.branching_node_treatments.value.empty_dash");
});
let to = wR(() => _$$t("collaboration.branching_node_treatments.property.annotations"), (e, t, i) => {
  let n = Array.isArray(t) ? t.length : 0;
  return _$$t("collaboration.branching_node_treatments.value.annotations", {
    count: n
  });
}, (e, t, i) => {
  let n = Array.isArray(i) ? i.length : 0;
  return _$$t("collaboration.branching_node_treatments.value.annotations", {
    count: n
  });
});
let tl = oZ(() => _$$t("collaboration.branching_node_treatments.property.position_rotation_or_scale"), () => _$$t("collaboration.branching_node_treatments.value.empty_dash"), () => _$$t("collaboration.branching_node_treatments.value.position_rotation_or_scale_changed"));
function td(e) {
  switch (e) {
    case "BUILD":
      return _$$t("dev_handoff.status.ready_for_dev");
    case "COMPLETED":
      return _$$t("dev_handoff.status.completed");
    default:
      return _$$t("dev_handoff.status.none");
  }
}
let tc = wR(() => _$$t("dev_handoff.status"), (e, t, i) => td(t?.status), (e, t, i) => td(i?.status));
let tu = oZ(() => _$$t("dev_handoff.status"), () => _$$t("collaboration.branching_node_treatments.value.empty_dash"), (e, t, i) => {
  let n = i?.entries?.length ?? 0;
  return _$$t("dev_handoff.status_updates", {
    number: n.toString()
  });
});
let tp = {
  NONE: () => _$$t("collaboration.branching_node_treatments.value.node_type.none"),
  DOCUMENT: () => _$$t("collaboration.branching_node_treatments.value.node_type.document"),
  CANVAS: () => _$$t("collaboration.branching_node_treatments.value.node_type.canvas"),
  GROUP: () => _$$t("collaboration.branching_node_treatments.value.node_type.group"),
  FRAME: () => _$$t("collaboration.branching_node_treatments.value.node_type.frame"),
  BOOLEAN_OPERATION: () => _$$t("collaboration.branching_node_treatments.value.node_type.boolean_operation"),
  VECTOR: () => _$$t("collaboration.branching_node_treatments.value.node_type.vector"),
  STAR: () => _$$t("collaboration.branching_node_treatments.value.node_type.star"),
  LINE: () => _$$t("collaboration.branching_node_treatments.value.node_type.line"),
  ELLIPSE: () => _$$t("collaboration.branching_node_treatments.value.node_type.ellipse"),
  RECTANGLE: () => _$$t("collaboration.branching_node_treatments.value.node_type.rectangle"),
  REGULAR_POLYGON: () => _$$t("collaboration.branching_node_treatments.value.node_type.regular_polygon"),
  ROUNDED_RECTANGLE: () => _$$t("collaboration.branching_node_treatments.value.node_type.rounded_rectangle"),
  TEXT: () => _$$t("collaboration.branching_node_treatments.value.node_type.text"),
  TEXT_PATH: () => _$$t("collaboration.branching_node_treatments.value.node_type.text_path"),
  SLICE: () => _$$t("collaboration.branching_node_treatments.value.node_type.slice"),
  SYMBOL: () => _$$t("collaboration.branching_node_treatments.value.node_type.symbol"),
  INSTANCE: () => _$$t("collaboration.branching_node_treatments.value.node_type.instance"),
  STICKY: () => _$$t("collaboration.branching_node_treatments.value.node_type.sticky"),
  SHAPE_WITH_TEXT: () => _$$t("collaboration.branching_node_treatments.value.node_type.shape_with_text"),
  CONNECTOR: () => _$$t("collaboration.branching_node_treatments.value.node_type.connector"),
  CODE_BLOCK: () => _$$t("collaboration.branching_node_treatments.value.node_type.code_block"),
  WIDGET: () => _$$t("collaboration.branching_node_treatments.value.node_type.widget"),
  STAMP: () => _$$t("collaboration.branching_node_treatments.value.node_type.stamp"),
  MEDIA: () => _$$t("collaboration.branching_node_treatments.value.node_type.media"),
  HIGHLIGHT: () => _$$t("collaboration.branching_node_treatments.value.node_type.highlight"),
  SECTION: () => _$$t("collaboration.branching_node_treatments.value.node_type.section"),
  SECTION_OVERLAY: () => _$$t("collaboration.branching_node_treatments.value.node_type.section_overlay"),
  WASHI_TAPE: () => _$$t("collaboration.branching_node_treatments.value.node_type.washi_tape"),
  VARIABLE: () => _$$t("collaboration.branching_node_treatments.value.node_type.variable"),
  VARIABLE_SET: () => _$$t("collaboration.branching_node_treatments.value.node_type.variable_collection"),
  TABLE: () => _$$t("collaboration.branching_node_treatments.value.node_type.table"),
  TABLE_CELL: () => _$$t("collaboration.branching_node_treatments.value.node_type.table_cell"),
  SLIDE: () => _$$t("collaboration.branching_node_treatments.value.node_type.slide"),
  SLIDE_ROW: () => _$$t("collaboration.branching_node_treatments.value.node_type.frame"),
  SLIDE_GRID: () => _$$t("collaboration.branching_node_treatments.value.node_type.frame"),
  ASSISTED_LAYOUT: () => _$$t("collaboration.branching_node_treatments.value.node_type.assisted_layout"),
  INTERACTIVE_SLIDE_ELEMENT: () => _$$t("collaboration.branching_node_treatments.value.node_type.interactive_slide_element"),
  MODULE: () => _$$t("collaboration.branching_node_treatments.value.node_type.module"),
  VARIABLE_OVERRIDE: () => "Variable override",
  RESPONSIVE_SET: () => _$$t("collaboration.branching_node_treatments.value.node_type.responsive_set"),
  CODE_COMPONENT: () => _$$t("collaboration.branching_node_treatments.value.node_type.code_component"),
  CODE_INSTANCE: () => _$$t("collaboration.branching_node_treatments.value.node_type.code_instance"),
  CODE_LIBRARY: () => _$$t("collaboration.branching_node_treatments.value.node_type.code_library"),
  CODE_FILE: () => _$$t("collaboration.branching_node_treatments.value.node_type.code_file"),
  CODE_LAYER: () => _$$t("collaboration.branching_node_treatments.value.node_type.code_layer"),
  BRUSH: () => _$$t("collaboration.branching_node_treatments.value.node_type.brush"),
  MANAGED_STRING: () => _$$t("collaboration.branching_node_treatments.value.node_type.managed_string"),
  TRANSFORM: () => _$$t("collaboration.branching_node_treatments.value.node_type.transform"),
  CMS_RICH_TEXT: () => _$$t("collaboration.branching_node_treatments.value.node_type.cms_rich_text"),
  REPEATER: () => _$$t("collaboration.branching_node_treatments.value.node_type.repeater"),
  JSX: () => _$$t("collaboration.branching_node_treatments.value.node_type.jsx"),
  EMBEDDED_PROTOTYPE: () => _$$t("collaboration.branching_node_treatments.value.node_type.embedded_prototype"),
  REACT_FIBER: () => _$$t("collaboration.branching_node_treatments.value.node_type.react_fiber"),
  RESPONSIVE_NODE_SET: () => _$$t("collaboration.branching_node_treatments.value.node_type.responsive_node_set"),
  WEBPAGE: () => _$$t("collaboration.branching_node_treatments.value.node_type.webpage")
};
let tm = {
  DISABLED: () => _$$t("collaboration.branching_node_treatments.value.text_truncation.disabled"),
  ENDING: () => _$$t("collaboration.branching_node_treatments.value.text_truncation.ending")
};
let th = new Map();
function tg(e, t) {
  var i;
  var r;
  var a;
  var s;
  if (th.has(e)) return th.get(e);
  let o = e === FO.LEGO;
  let l = o ? eJ(t) : eQ;
  let d = o ? eh : eg;
  let c = o ? eC(_$$t("collaboration.branching_node_treatments.property.variables"), t) : null;
  th.set(e, Object.freeze({
    name: eu(() => _$$t("collaboration.branching_node_treatments.property.node_name")),
    visible: eu(() => _$$t("collaboration.branching_node_treatments.property.visible")),
    locked: eu(() => _$$t("collaboration.branching_node_treatments.property.locked")),
    lockMode: null,
    parentIndex: ts,
    transform: o ? eR(_$$t("collaboration.branching_node_treatments.value.position_rotation_or_scale_changed"), t) : tl,
    description: ep(() => _$$t("collaboration.branching_node_treatments.property.description")),
    symbolDescription: null,
    symbolLinks: em(() => _$$t("collaboration.branching_node_treatments.property.symbol_links")),
    type: (i = () => _$$t("collaboration.branching_node_treatments.property.type"), r = e => tp[e](), wR(i, (e, t, i) => t ? r(t) : _$$t("collaboration.branching_node_treatments.value.empty_dash"), (e, t, i) => i ? r(i) : _$$t("collaboration.branching_node_treatments.value.empty_dash"))),
    booleanOperation: em(() => _$$t("collaboration.branching_node_treatments.property.boolean")),
    horizontalConstraint: eu(() => _$$t("collaboration.branching_node_treatments.property.horizontal_constraints")),
    verticalConstraint: eu(() => _$$t("collaboration.branching_node_treatments.property.vertical_constraints")),
    hyperlink: e1,
    mention: e2,
    proportionsConstrained: em(() => _$$t("collaboration.branching_node_treatments.property.resize_behavior")),
    targetAspectRatio: em(() => _$$t("collaboration.branching_node_treatments.property.target_aspect_ratio")),
    inheritGridStyleID: d(() => _$$t("collaboration.branching_node_treatments.property.guide_style")),
    layoutGrids: em(() => _$$t("collaboration.branching_node_treatments.property.layout_guide")),
    inheritTextStyleID: d(() => _$$t("collaboration.branching_node_treatments.property.text_style")),
    inheritFillStyleID: null,
    inheritFillStyleIDForStroke: null,
    inheritEffectStyleID: null,
    inheritExportStyleID: null,
    inheritFillStyleIDForBackground: null,
    inheritStrokeStyleID: null,
    styleIdForFill: d(() => _$$t("collaboration.branching_node_treatments.property.fill_style")),
    styleIdForStrokeFill: d(() => _$$t("collaboration.branching_node_treatments.property.stroke_style")),
    styleIdForText: d(() => _$$t("collaboration.branching_node_treatments.property.text_style")),
    styleIdForEffect: d(() => _$$t("collaboration.branching_node_treatments.property.effect_style")),
    styleIdForGrid: d(() => _$$t("collaboration.branching_node_treatments.property.guide_style")),
    scrollBehavior: eV,
    transitionType: eV,
    transitionDuration: eV,
    easingType: eV,
    scrollDirection: eV,
    transitionPreserveScroll: eV,
    connectionType: eV,
    interactionType: eV,
    transitionTimeout: eV,
    mediaHitTime: eV,
    interactionMaintained: eV,
    interactionDuration: eV,
    overlayPositionType: eV,
    transitionShouldSmartAnimate: eV,
    overlayRelativePosition: eV,
    overlayBackgroundInteraction: eV,
    overlayBackgroundAppearance: eV,
    keyTrigger: eV,
    prototypeInteractions: eV,
    prototypeStartNodeID: eV,
    prototypeStartingPoint: eV,
    videoPlayback: eV,
    stackMode: l,
    stackSpacing: l,
    stackCounterSizing: l,
    stackPrimarySizing: l,
    stackChildPrimaryGrow: l,
    stackChildAlignSelf: l,
    stackPrimaryAlignItems: l,
    stackCounterAlignItems: l,
    stackHorizontalPadding: l,
    stackVerticalPadding: l,
    stackPaddingRight: l,
    stackPaddingBottom: l,
    stackPositioning: l,
    stackReverseZIndex: l,
    bordersTakeSpace: l,
    stackWrap: l,
    stackCounterSpacing: l,
    stackCounterAlignContent: l,
    gridRows: null,
    gridColumns: null,
    gridRowGap: null,
    gridColumnGap: null,
    gridRowAnchor: null,
    gridColumnAnchor: null,
    gridRowSpan: null,
    gridColumnSpan: null,
    gridRowsSizing: null,
    gridColumnsSizing: null,
    gridChildHorizontalAlign: null,
    gridChildVerticalAlign: null,
    minSize: l,
    maxSize: l,
    pluginData: eG,
    pluginRelaunchData: eG,
    stackPadding: null,
    stackJustify: null,
    codeBlockLanguage: eu(() => _$$t("collaboration.branching_node_treatments.property.code_block_language")),
    codeBlockTheme: null,
    fontVariations: ez,
    detachOpticalSizeFromFontSize: ez,
    widgetMetadata: eH,
    widgetPropertyMenuItems: eH,
    widgetSyncedState: eH,
    renderedSyncedState: eH,
    widgetEvents: null,
    widgetInputBehavior: null,
    widgetCachedAncestor: eH,
    widgetInputTextNodeType: null,
    pageType: null,
    interactiveSlideConfigData: null,
    interactiveSlideParticipantData: null,
    flappType: null,
    isEmbeddedPrototype: null,
    themeID: null,
    slideThemeMap: null,
    slideTemplateFileKey: null,
    slideNumber: null,
    slideNumberSeparator: null,
    componentPropDefs: (a = () => _$$t("collaboration.branching_node_treatments.property.properties"), wR(a, (e, t, i, r, a) => t ? jsx(L, {
      oldValue: t,
      newValue: i,
      renderDelta: !1,
      chunkViewType: a
    }) : "-", (e, t, i, r, a) => i ? jsx(L, {
      oldValue: t,
      newValue: i,
      renderDelta: !0,
      chunkViewType: a
    }) : "-")),
    componentPropRefs: e0,
    componentPropAssignments: null,
    simplifyInstancePanels: (s = () => _$$t("collaboration.branching_node_treatments.property.instance_simplification"), wR(s, _$$t("collaboration.branching_node_treatments.value.empty_dash"), (e, t, i) => i ? _$$t("branching.chunk_details.added") : _$$t("branching.chunk_details.removed"))),
    propsAreBubbled: eu(() => _$$t("collaboration.branching_node_treatments.property.props_are_bubbled")),
    size: ti,
    guid: null,
    phase: eu(() => _$$t("collaboration.branching_node_treatments.property.phase")),
    opacity: eu(() => _$$t("collaboration.branching_node_treatments.property.opacity")),
    blendMode: eu(() => _$$t("collaboration.branching_node_treatments.property.blend_mode")),
    count: eu(() => _$$t("collaboration.branching_node_treatments.property.count")),
    dashPattern: tr,
    autoRename: null,
    backgroundEnabled: eu(() => _$$t("collaboration.branching_node_treatments.property.background_enabled")),
    mask: eu(() => _$$t("collaboration.branching_node_treatments.property.mask")),
    maskType: eu(() => _$$t("collaboration.branching_node_treatments.property.mask_type")),
    exportContentsOnly: null,
    maskIsOutline: eu(() => _$$t("collaboration.branching_node_treatments.property.mask_is_outline")),
    backgroundOpacity: eu(() => _$$t("collaboration.branching_node_treatments.property.background_opacity")),
    cornerRadius: eu(() => _$$t("collaboration.branching_node_treatments.property.corner_radius")),
    fontSize: eu(() => _$$t("collaboration.branching_node_treatments.property.font_size")),
    paragraphIndent: eu(() => _$$t("collaboration.branching_node_treatments.property.paragraph_indent")),
    paragraphSpacing: eu(() => _$$t("collaboration.branching_node_treatments.property.paragraph_spacing")),
    listSpacing: eu(() => _$$t("collaboration.branching_node_treatments.property.list_spacing")),
    starInnerScale: eu(() => _$$t("collaboration.branching_node_treatments.property.star_inner_scale")),
    miterLimit: eu(() => _$$t("collaboration.branching_node_treatments.property.miter_limit")),
    strokeWeight: eu(() => _$$t("collaboration.branching_node_treatments.property.stroke_weight")),
    textTracking: eu(() => _$$t("collaboration.branching_node_treatments.property.text_tracking")),
    strokeAlign: eu(() => _$$t("collaboration.branching_node_treatments.property.stroke_align")),
    strokeCap: eu(() => _$$t("collaboration.branching_node_treatments.property.stroke_cap")),
    strokeCapSize: eu(() => _$$t("collaboration.branching_node_treatments.property.stroke_cap_size")),
    strokeJoin: eu(() => _$$t("collaboration.branching_node_treatments.property.stroke_join")),
    textAlignHorizontal: eu(() => _$$t("collaboration.branching_node_treatments.property.text_align_horizontal")),
    textAlignVertical: eu(() => _$$t("collaboration.branching_node_treatments.property.text_align_vertical")),
    textCase: eu(() => _$$t("collaboration.branching_node_treatments.property.text_case")),
    textDecoration: eu(() => _$$t("collaboration.branching_node_treatments.property.text_decoration")),
    textDecorationStyle: eu(() => _$$t("collaboration.branching_node_treatments.property.text_decoration_style")),
    textDecorationFillPaints: o ? eN(_$$t("collaboration.branching_node_treatments.property.text_decoration_fill"), t) : ef(() => _$$t("collaboration.branching_node_treatments.property.text_decoration_fill_paints"), ex),
    leadingTrim: eu(() => _$$t("collaboration.branching_node_treatments.property.leading_trim")),
    textDecorationSkipInk: null,
    textUnderlineOffset: eu(() => _$$t("collaboration.branching_node_treatments.property.text_underline_offset")),
    textDecorationThickness: eu(() => _$$t("collaboration.branching_node_treatments.property.text_decoration_thickness")),
    moduleType: null,
    hangingPunctuation: null,
    hangingList: null,
    fillPaints: o ? eN(_$$t("collaboration.branching_node_treatments.property.fill"), t) : ef(() => _$$t("collaboration.branching_node_treatments.property.fill_paints"), ex),
    strokePaints: o ? eN(_$$t("collaboration.branching_node_treatments.property.stroke_paint"), t) : ef(() => _$$t("collaboration.branching_node_treatments.property.stroke_paints"), ex),
    lineHeight: e7,
    fontName: ta,
    textData: e8,
    effects: o ? eP(_$$t("collaboration.branching_node_treatments.property.effect"), t) : ef(() => _$$t("collaboration.branching_node_treatments.property.effect"), eD),
    handleMirroring: null,
    exportSettings: null,
    textAutoResize: eu(() => _$$t("collaboration.branching_node_treatments.property.text_auto_resize")),
    vectorData: em(() => _$$t("collaboration.branching_node_treatments.property.vector_data")),
    styleID: eu(() => _$$t("collaboration.branching_node_treatments.property.style_id")),
    backgroundColor: null,
    fillGeometry: em(() => _$$t("collaboration.branching_node_treatments.property.fill_geometry")),
    strokeGeometry: em(() => _$$t("collaboration.branching_node_treatments.property.stroke_geometry")),
    guidPath: null,
    symbolData: null,
    frameMaskDisabled: null,
    resizeToFit: eu(() => _$$t("collaboration.branching_node_treatments.property.resize_to_fit")),
    exportBackgroundDisabled: null,
    sharedSymbolReference: null,
    isSymbolPublishable: null,
    sharedSymbolMappings: null,
    derivedSymbolData: null,
    nestedInstanceResizeEnabled: null,
    sharedSymbolVersion: null,
    overrideLevel: null,
    fontVariantCommonLigatures: eu(() => _$$t("collaboration.branching_node_treatments.property.font_variant_common_ligatures")),
    fontVariantContextualLigatures: eu(() => _$$t("collaboration.branching_node_treatments.property.font_variant_contextual_ligatures")),
    fontVariantDiscretionaryLigatures: eu(() => _$$t("collaboration.branching_node_treatments.property.font_variant_discretionary_ligatures")),
    fontVariantHistoricalLigatures: eu(() => _$$t("collaboration.branching_node_treatments.property.font_variant_historical_ligatures")),
    fontVariantOrdinal: eu(() => _$$t("collaboration.branching_node_treatments.property.font_variant_ordinal")),
    fontVariantSlashedZero: eu(() => _$$t("collaboration.branching_node_treatments.property.font_variant_slashed_zero")),
    fontVariantNumericFigure: eu(() => _$$t("collaboration.branching_node_treatments.property.font_variant_numeric_figure")),
    fontVariantNumericSpacing: eu(() => _$$t("collaboration.branching_node_treatments.property.font_variant_numeric_spacing")),
    fontVariantNumericFraction: eu(() => _$$t("collaboration.branching_node_treatments.property.font_variant_numeric_fraction")),
    fontVariantCaps: eu(() => _$$t("collaboration.branching_node_treatments.property.font_variant_caps")),
    fontVariantPosition: eu(() => _$$t("collaboration.branching_node_treatments.property.font_variant_position")),
    guides: null,
    transitionNodeID: null,
    prototypeBackgroundColor: null,
    internalOnly: null,
    overriddenSymbolID: null,
    rectangleTopLeftCornerRadius: e6,
    rectangleTopRightCornerRadius: e6,
    rectangleBottomLeftCornerRadius: e6,
    rectangleBottomRightCornerRadius: e6,
    rectangleCornerRadiiIndependent: eu(() => _$$t("collaboration.branching_node_treatments.property.rectangle_radii_independent")),
    rectangleCornerToolIndependent: null,
    sharedComponentMasterData: null,
    cornerSmoothing: eu(() => _$$t("collaboration.branching_node_treatments.property.corner_smoothing")),
    styleType: eu(() => _$$t("collaboration.branching_node_treatments.property.style_type")),
    styleDescription: null,
    unflatteningMappings: null,
    letterSpacing: e9,
    version: null,
    userFacingVersion: null,
    sharedStyleMasterData: null,
    sharedStyleReference: null,
    sortPosition: null,
    isPublishable: null,
    exportTextAsSVGText: null,
    isSoftDeletedStyle: null,
    isSoftDeleted: null,
    isNonUpdateable: null,
    isOverrideOverTextStyle: null,
    connectionURL: null,
    prototypeDevice: null,
    backgroundPaints: null,
    arcData: null,
    derivedSymbolDataLayoutVersion: null,
    navigationType: null,
    fontVersion: eu(() => _$$t("collaboration.branching_node_treatments.property.font_version")),
    textUserLayoutVersion: null,
    textExplicitLayoutVersion: eu(() => _$$t("collaboration.branching_node_treatments.property.text_explicit_layout_version")),
    textBidiVersion: eu(() => _$$t("collaboration.branching_node_treatments.property.text_bidi_version")),
    toggledOnOTFeatures: null,
    toggledOffOTFeatures: null,
    overrideKey: null,
    publishFile: null,
    sourceLibraryKey: null,
    publishID: null,
    key: null,
    componentKey: null,
    isC2: null,
    publishedVersion: null,
    containerSupportsFillStrokeAndCorners: null,
    isStateGroup: null,
    voiceEventPhrase: null,
    forceUnflatteningMappings: null,
    ancestorPathBeforeDeletion: null,
    stateGroupPropertyValueOrders: null,
    variantPropSpecs: null,
    nodeGenerationData: null,
    derivedImmutableFrameData: em(() => _$$t("collaboration.branching_node_treatments.property.derived_immutable_frame_data")),
    derivedImmutableFrameDataVersion: null,
    shapeWithTextType: eu(() => _$$t("collaboration.branching_node_treatments.value.node_type.shape_with_text")),
    jsxData: null,
    derivedJsxData: null,
    stableKey: null,
    connectorStart: null,
    connectorEnd: null,
    connectorLineStyle: null,
    connectorStartCap: null,
    connectorEndCap: null,
    connectorType: null,
    shapeUserHeight: eu(() => _$$t("collaboration.branching_node_treatments.property.shape_user_height")),
    overrideStash: null,
    overrideStashV2: null,
    internalEnumForTest: null,
    internalDataForTest: null,
    connectorControlPoints: null,
    connectorBezierControlPoints: null,
    connectorTextMidpoint: null,
    annotations: getFeatureFlags().dt_annotations_branch_merge ? to : null,
    measurements: null,
    libraryMoveInfo: null,
    libraryMoveHistory: null,
    useAbsoluteBounds: null,
    strokeBrushGuid: null,
    strokeSeed: null,
    brushType: null,
    variableWidthPoints: null,
    dynamicStrokeSettings: null,
    scatterStrokeSettings: null,
    stretchStrokeSettings: null,
    stampData: em(() => _$$t("collaboration.branching_node_treatments.property.stamp_data")),
    embedData: em(() => _$$t("collaboration.branching_node_treatments.property.embed_data")),
    linkPreviewData: em(() => _$$t("collaboration.branching_node_treatments.property.link_preview_data")),
    richMediaData: em(() => _$$t("collaboration.branching_node_treatments.property.rich_media_data")),
    textTruncation: tt,
    maxLines: tt,
    shapeTruncates: eu(() => _$$t("collaboration.branching_node_treatments.property.shape_truncates")),
    sectionContentsHidden: eu(() => _$$t("collaboration.branching_node_treatments.property.section_contents_hidden")),
    widgetTooltip: null,
    borderTopWeight: e3,
    borderBottomWeight: e3,
    borderLeftWeight: e3,
    borderRightWeight: e3,
    borderStrokeWeightsIndependent: eu(() => _$$t("collaboration.branching_node_treatments.property.border_stroke_weights_independent")),
    widgetHoverStyle: null,
    hasHadRTLText: null,
    emojiImageSet: null,
    slideThumbnailHash: null,
    isWidgetStickable: null,
    shouldHideCursorsOnWidgetHover: null,
    variableData: null,
    variableDataValues: null,
    variableConsumptionMap: c,
    variableModeBySetMap: null,
    variableSetModes: null,
    variableSetID: null,
    backingVariableSetId: null,
    overriddenVariableId: null,
    rootVariableKey: null,
    isCollectionExtendable: null,
    variableResolvedType: null,
    variableScopes: null,
    parameterConsumptionMap: o ? c : e0,
    codeSyntax: null,
    fileAssetIds: null,
    derivedTextData: null,
    agendaPositionMap: null,
    agendaMetadataMap: null,
    migrationStatus: null,
    editInfo: null,
    documentColorProfile: eu(() => _$$t("collaboration.branching_node_treatments.property.document_color_profile")),
    accessibleHTMLTag: eu(() => _$$t("collaboration.branching_node_treatments.property.html_tag")),
    ariaRole: eu(() => _$$t("collaboration.branching_node_treatments.property.aria_role")),
    accessibleLabel: eu(() => _$$t("collaboration.branching_node_treatments.property.accessible_label")),
    ariaAttributes: eu(() => _$$t("collaboration.branching_node_treatments.property.aria_attributes")),
    isDecorativeImage: eu(() => _$$t("collaboration.branching_node_treatments.property.image_is_decorative")),
    tableRowPositions: null,
    tableColumnPositions: null,
    tableRowHeights: null,
    tableColumnWidths: null,
    areSlidesManuallyIndented: null,
    detachedSymbolId: null,
    readingIndex: null,
    childReadingDirection: null,
    sectionStatusInfo: tc,
    handoffStatusMap: tu,
    developerRelatedLinks: null,
    slideActiveThemeLibKey: null,
    slideSpeakerNotes: null,
    isSkippedSlide: null,
    diagramLayoutRuleType: null,
    diagramParentIndex: null,
    diagramLayoutPaused: null,
    editScopeInfo: null,
    sectionPresetInfo: null,
    platformShapeDefinition: null,
    semanticWeight: null,
    semanticItalic: null,
    isPageDivider: null,
    isResponsiveSet: null,
    derivedBreakpointData: null,
    breakpointMinWidth: null,
    defaultResponsiveSetId: null,
    responsiveSetSettings: null,
    behaviors: null,
    aiEditedNodeChangeFieldNumbers: null,
    aiEditScopeLabel: null,
    sortedMovingChildIndices: null,
    firstDraftData: null,
    firstDraftKitElementData: null,
    sourceCode: null,
    collaborativeSourceCode: null,
    responsiveTextStyleVariants: null,
    cmsSelector: null,
    cmsConsumptionMap: null,
    cmsRichTextStyleMap: null,
    cooperTemplateData: null,
    hubFileAttribution: null,
    rotationOrigin: null,
    vectorOperationVersion: null,
    objectAnimations: null,
    belongsToCodeLibraryId: null,
    exportedFromCodeFileId: null,
    backingCodeComponentId: null,
    codeFilePath: null,
    importedCodeFiles: null,
    codeFileCanvasNodeId: null,
    codeExportName: null,
    textPathStart: null,
    chatMessages: null,
    chatCompressionState: null,
    codeChatMessagesKey: null,
    aiChatThread: null,
    annotationCategories: null,
    managedStringData: null,
    transformModifiers: null,
    isPrimaryBreakpoint: null,
    codeSnapshot: null,
    codeSnapshotState: null,
    codeSnapshotInvalidatedAt: null,
    multiEditGlueId: null,
    isSlot: null,
    isSlotContent: null,
    isCodeBehavior: null,
    thumbnailInfo: null,
    autoForkCode: null,
    hasBeenManuallyRenamed: null,
    codeCreatedFromDesign: null,
    codeCreatedFromDesignNodeId: null,
    imageImports: null,
    codeBehaviorData: null,
    isMainCodeComponent: null,
    scatterBrushTransforms: null,
    jsxProps: null,
    aiCanvasPrompt: null,
    isEntrypointCodeFile: null,
    backingNodeId: null,
    componentOrStateGroupKey: null,
    componentOrStateGroupVersion: null
  }));
  return th.get(e);
}
function t_(e) {
  return "REMOVED" === e.phase;
}
function tA(e) {
  return "REMOVED" === e.phase;
}
function ty(e, t) {
  return e === FO.TEST_SUITE || (e === FO.LEGO ? yC[t] : b2[t]);
}
function tb({
  basis: e,
  changes: t,
  treatmentsConfig: i,
  chunkViewType: n,
  compareThumbnailSource: r = FO.BRANCHING,
  chunk: a,
  changedStyles: s,
  isRootNode: o
}) {
  let d = {};
  let c = r === FO.LEGO;
  let u = c ? cF : c2;
  let p = r === FO.TEST_SUITE;
  if (c && tA(e)) {
    let e = "phase";
    d[e] = {
      identifier: e,
      name: () => _$$t("collaboration.branching_node_treatments.property.added_node"),
      oldValue: () => "",
      newValue: () => ""
    };
  } else if (c && t_(t)) {
    let e = "phase";
    d[e] = {
      identifier: e,
      name: () => _$$t("collaboration.branching_node_treatments.property.removed_node"),
      oldValue: () => "",
      newValue: () => ""
    };
  } else {
    Object.keys(t).forEach(m => {
      let h = i[m];
      if (h && ty(r, m) && (p || !u(e[m], t[m])) && h.treatmentType === Rv.RENDER_SINGLE_PROPERTY) {
        let i = e.stackMode !== t.stackMode;
        let r = "VERTICAL" === e.stackMode && (!e.stackPrimarySizing || "RESIZE_TO_FIT_WITH_IMPLICIT_SIZE" === e.stackPrimarySizing) || "HORIZONTAL" === e.stackMode && "RESIZE_TO_FIT_WITH_IMPLICIT_SIZE" === e.stackCounterSizing;
        let l = "HORIZONTAL" === e.stackMode && (!e.stackPrimarySizing || "RESIZE_TO_FIT_WITH_IMPLICIT_SIZE" === e.stackPrimarySizing) || "VERTICAL" === e.stackMode && "RESIZE_TO_FIT_WITH_IMPLICIT_SIZE" === e.stackCounterSizing;
        if (!i && r && "size" === m && eT(e.size?.x ?? 0) === eT(t.size?.x ?? 0) || !i && l && "size" === m && eT(e.size?.y ?? 0) === eT(t.size?.y ?? 0) || o && "transform" === m) return;
        let c = h.renderOldValue(m, e[m], t[m], a, n, s);
        let u = h.renderNewValue(m, e[m], t[m], a, n, s);
        ("annotations" === m && getFeatureFlags().dt_annotations_branch_merge || c?.valueOf() !== u?.valueOf()) && (d[m] = {
          identifier: m,
          name: () => h.renderName(m),
          oldValue: () => c,
          newValue: () => u
        });
      }
      if (h && h.treatmentType === Rv.RENDER_DISPLAY_NODE_SINGLE_PROPERTY && (c || dI(t.guid) === dI(a.displayNode.guid)) && (p || !u(e[m], t[m]))) {
        let i = h.renderOldValue(m, e[m], t[m]);
        let n = h.renderNewValue(m, e[m], t[m]);
        d[m] = {
          identifier: m,
          name: () => h.renderName(m),
          oldValue: () => i,
          newValue: () => n
        };
      }
    });
    let m = {};
    Object.keys(t).forEach(n => {
      let r = i[n];
      r && r.treatmentType === Rv.RENDER_MULTI_PROPERTY && (m[r.identifier] = m[r.identifier] || [], m[r.identifier].push({
        treatment: r,
        fieldName: n,
        oldValue: e[n],
        newValue: t[n]
      }));
    }, {});
    Object.keys(m).forEach(i => {
      let n = m[i];
      var r = !0;
      n.forEach(e => {
        e.oldValue?.toString() !== e.newValue?.toString() && (r = !1);
      });
      let a = n[0];
      let s = a.treatment;
      let o = s.renderOldValue(n, e, t);
      let l = s.renderNewValue(n, e, t);
      c && null === l || !p && r || (d[a.fieldName] = {
        identifier: s.identifier,
        name: () => s.renderName(n),
        oldValue: () => o,
        newValue: () => l
      });
    });
  }
  return Object.keys(i).map(e => d[e]).filter(Boolean);
}
function tv({
  basis: e,
  changes: t,
  chunkViewType: i,
  compareThumbnailSource: n,
  chunk: r,
  changedStyles: a,
  isRootNode: s = !1,
  RenderTableDelegate: o
}) {
  return n !== FO.LEGO && (t_(t) || tA(e)) ? [] : tb({
    basis: e,
    changes: t,
    treatmentsConfig: tg(n, o),
    chunkViewType: i,
    compareThumbnailSource: n,
    chunk: r,
    changedStyles: a,
    isRootNode: s
  });
}
export function $$tx1({
  changesToDisplay: e,
  selectedNode: t,
  onHover: i,
  onClick: o,
  expandedLayers: d,
  setLayerExpanded: u
}) {
  let p = J2(UK().showGuids);
  let h = useMemo(() => {
    let t = e => {
      if (e.value) {
        let t = e.value.change.guid || e.value.basis.guid;
        let i = dI(t) || AD;
        return !!d?.has(i);
      }
      return !0;
    };
    return filterNotNullish(NU(X$(e, (e, i) => {
      if (e.parent && !t(e.parent)) return {
        result: null,
        visitChildren: !1
      };
      let n = !0;
      let {
        value,
        children
      } = e;
      if (value.changesToDisplay.length > 0) {
        let s = !!children && children.length > 0;
        let o = value.change.guid || value.basis.guid;
        let d = dI(o) || AD;
        n = t(e);
        return {
          result: {
            ...value,
            indentation: i,
            isContainer: s,
            isExpanded: n,
            idToExpand: d
          }
        };
      }
      return {
        result: null
      };
    })));
  }, [e, d]);
  return jsxs("div", {
    className: c()("chunk_diff_details--layersWrapper--kf9DV", "chunk_diff_details--scrollableLayers--hBhdL"),
    children: [jsx("div", {
      className: c()(J, "chunk_diff_details--layerColumnHeader--Pyum0", "chunk_diff_details--layerColumnHeaderBold--hYrEv"),
      children: jsx("h3", {
        children: _$$t("dev_handoff.compare_changes.layers")
      })
    }), h && jsx("div", {
      className: "chunk_diff_details--scrollableSection--D4PjI",
      children: jsx("div", {
        className: "chunk_diff_details--nodeNames--KWP3B",
        children: h.map(e => {
          let r = dI(e.change.guid) || dI(e.basis.guid) || void 0;
          let a = v(e.basis, e.change);
          let d = t === r;
          return jsxs("div", {
            className: c()("chunk_diff_details--nodeLego--I9McS", d ? "chunk_diff_details--selectedNode--r8k42" : void 0, J),
            onMouseOver: () => {
              i && r && i(r);
            },
            onMouseLeave: () => {
              i && i(AD);
            },
            children: [jsxs(_$$E, {
              onClick: () => {
                o && r && o(r, e);
              },
              style: {
                paddingLeft: `${16 * e.indentation + 16}px`
              },
              className: "chunk_diff_details--nodeTitleRowLego--ajdsT chunk_diff_details--nodeTitleLego--32B5s",
              "aria-current": d,
              children: [jsxs("div", {
                className: "chunk_diff_details--nodeTitleLego--32B5s",
                children: [jsx("div", {
                  className: "chunk_diff_details--nodeIconLego--6JkAh",
                  children: jsx(I, {
                    basis: e.basis,
                    change: e.change
                  })
                }), jsx(ph, {
                  className: er,
                  text: p ? `${a} (${dI(e.change.guid) || dI(e.basis.guid)})` : a,
                  tooltipPropsWhenTruncated: {
                    "data-tooltip": a,
                    "data-tooltip-type": Ib.TEXT
                  }
                })]
              }), jsx(tR, {
                change: e.change,
                basis: e.basis
              })]
            }), e.isContainer && jsx("div", {
              className: "chunk_diff_details--expandToggleContainer--v7d4Z",
              style: {
                left: `${16 * e.indentation}px`
              },
              children: jsx(Zy, {
                visible: !0,
                expanded: e.isExpanded,
                onMouseDown: t => {
                  t.stopPropagation();
                  e.isContainer && u?.([e.idToExpand], !e.isExpanded);
                },
                name: a
              })
            })]
          }, r);
        })
      })
    })]
  });
}
export function $$tS2(e, t, i, n) {
  return X$(e, e => {
    let r = e.value;
    let a = tv({
      basis: r.basis,
      changes: r.change,
      chunkViewType: fE.MERGE_REVIEW,
      compareThumbnailSource: t,
      chunk: i,
      changedStyles: r.changedStyles,
      isRootNode: r.isRootNode,
      RenderTableDelegate: n
    });
    return a.length > 0 ? {
      result: {
        ...r,
        changesToDisplay: a
      }
    } : {
      result: null
    };
  });
}
function tw(e) {
  let {
    basis,
    change,
    changesToDisplay
  } = e;
  let s = v(basis, change);
  let o = useMemo(() => ({
    "data-tooltip": s,
    "data-tooltip-type": Ib.TEXT
  }), [s]);
  return jsxs("div", {
    className: "chunk_diff_details--node--c80fZ",
    children: [jsxs("div", {
      className: "chunk_diff_details--nodeTitle--hzugs",
      children: [jsx("span", {
        className: "chunk_diff_details--nodeIcon--ui-4E",
        children: jsx(I, {
          basis,
          change
        })
      }), jsx(_$$R, {
        className: er,
        text: s,
        tooltipPropsWhenTruncated: o
      }), jsx(tR, {
        change,
        basis
      })]
    }), jsx("div", {
      children: jsx(tN, {
        changesToDisplay
      })
    })]
  });
}
function tC({
  skipMargin: e
}) {
  return jsx("span", {
    className: c()("chunk_diff_details--removedLabel--h5i2C chunk_diff_details--label---p6Jd", {
      [et]: e
    }),
    children: tx("collaboration.branching_chunk.phase_removed")
  });
}
function tT({
  skipMargin: e
}) {
  return jsx("span", {
    className: c()("chunk_diff_details--changedLabel--jqma6 chunk_diff_details--label---p6Jd", {
      [et]: e
    }),
    children: tx("collaboration.branching_chunk.phase_updated")
  });
}
function tk({
  skipMargin: e
}) {
  return jsx("span", {
    className: c()("chunk_diff_details--addedLabel--gLd-C chunk_diff_details--label---p6Jd", {
      [et]: e
    }),
    children: tx("collaboration.branching_chunk.phase_created")
  });
}
function tR(e) {
  let {
    basis,
    change
  } = e;
  return tA(basis) ? jsx(tk, {}) : t_(change) ? jsx(tC, {}) : jsx(tT, {});
}
function tN(e) {
  let {
    changesToDisplay
  } = e;
  return jsx(Fragment, {
    children: changesToDisplay.map(e => jsxs("div", {
      className: c()(Y, ei),
      children: [jsx("div", {
        className: c()($, en),
        children: jsxs("div", {
          className: Y,
          children: [jsx("div", {
            className: Z,
            children: e?.name()
          }), jsx("div", {
            className: "chunk_diff_details--leftRightContainerLeft--XQxsR",
            children: jsx("div", {
              className: X,
              children: e.oldValue()
            })
          })]
        })
      }), jsx("div", {
        className: c()(Q, en),
        children: jsx("div", {
          className: X,
          children: e.newValue()
        })
      })]
    }, e.identifier))
  });
}
function tP(e) {
  let [t, i] = useState(!0);
  let a = jsxs(Fragment, {
    children: [t ? jsx(_$$B, {
      svg: _$$A,
      className: K
    }) : jsx(_$$B, {
      svg: _$$A2,
      className: K
    }), jsx("div", {
      children: tx("collaboration.branching_chunk.change_details")
    })]
  });
  return jsxs(Fragment, {
    children: [jsx("div", {
      className: "chunk_diff_details--mainTitle--vdyvJ text--fontPos14--OL9Hp text--_fontBase--QdLsd",
      children: jsx(_$$E, {
        className: "chunk_diff_details--disclosure--vEErG",
        onClick: () => {
          i(!t);
        },
        children: a
      })
    }), t && e.changeDetails]
  });
}
function tO(e) {
  let {
    chunk,
    compareThumbnailSource
  } = e;
  let {
    change,
    basis
  } = e.pairedChanges[0];
  let s = function (e, t, i, n, r, a) {
    let s = e && eB[e];
    return s ? tb({
      basis: t,
      changes: i,
      treatmentsConfig: s,
      chunkViewType: n,
      compareThumbnailSource: a,
      chunk: r,
      isRootNode: !1
    }) : [];
  }(chunk.displayNode.styleType, basis, change, fE.MERGE_REVIEW, chunk, compareThumbnailSource);
  if (0 === s.length) return null;
  let o = jsx("div", {
    children: s.map(e => jsx("div", {
      className: ei,
      children: jsxs("div", {
        className: Y,
        children: [jsx("div", {
          className: $,
          children: jsxs("div", {
            className: Y,
            children: [jsx("div", {
              className: c()($, Z),
              children: e.name()
            }), jsx("div", {
              className: Q,
              children: jsx("div", {
                className: X,
                children: e.oldValue()
              })
            })]
          })
        }), jsx("div", {
          className: c()(Q, "chunk_diff_details--changesInset--DVnsf"),
          children: jsx("div", {
            className: X,
            children: e.newValue()
          })
        })]
      })
    }, _$$g()))
  });
  return jsx(tP, {
    changeDetails: o
  });
}
function tD(e) {
  let {
    pairedChanges,
    chunk,
    compareThumbnailSource
  } = e;
  let s = function (e, t, i) {
    let n = NU(e).reduce((e, n) => {
      let {
        change,
        basis
      } = n;
      let s = Object.keys(change).reduce((e, n) => {
        let s = t[n];
        s && ty(i, n) && s.treatmentType === Rv.RENDER_MULTI_NODE && (e[s.identifier] = e[s.identifier] || [], e[s.identifier].push({
          fieldName: n,
          treatment: s,
          oldValue: basis[n],
          newValue: change[n]
        }));
        return e;
      }, {});
      Object.keys(s).forEach(t => {
        e[t] = e[t] || [];
        e[t].push(s[t]);
      });
      return e;
    }, {});
    return Object.values(t).map(e => {
      if (e?.treatmentType === Rv.RENDER_MULTI_NODE) {
        let t = n[e.identifier];
        if (t) {
          delete n[e.identifier];
          return function (e) {
            let t = e[0][0];
            return t ? {
              identifier: t.treatment.identifier,
              name: () => t.treatment.renderName(e),
              oldValue: () => t.treatment.renderOldValue(e),
              newValue: () => t.treatment.renderNewValue(e)
            } : null;
          }(t);
        }
      }
    }).filter(Boolean);
  }(pairedChanges, tg(compareThumbnailSource), compareThumbnailSource);
  let d = filterNotNullish(pairedChanges.map(e => {
    let t = tv({
      basis: e.basis,
      changes: e.change,
      chunkViewType: fE.MERGE_REVIEW,
      compareThumbnailSource,
      chunk,
      changedStyles: e.changedStyles
    });
    return t.length ? {
      ...e,
      changesToDisplay: t
    } : null;
  }));
  if (iM(d) && 0 === s.length || chunk && chunk.phase === Dje.REMOVED) return null;
  let c = jsxs(Fragment, {
    children: [jsx("div", {
      children: jsx(tN, {
        changesToDisplay: s
      })
    }), jsx("div", {
      className: "chunk_diff_details--layersList--e9S0c",
      children: Array.isArray(d) && d.map(e => jsx(tw, {
        basis: e.basis,
        change: e.change,
        changesToDisplay: e.changesToDisplay
      }, dI(e.change.guid)))
    })]
  });
  return jsx(tP, {
    changeDetails: c
  });
}
let tL = memo(function (e) {
  let {
    basis,
    changes,
    chunk,
    compareThumbnailSource
  } = e;
  let o = useMemo(() => function (e) {
    let t = {};
    (e || []).forEach(e => {
      e.guid && (t[dI(e.guid)] = e);
    });
    return t;
  }(basis || []), [basis]);
  if (!changes || !basis) return null;
  let d = changes.map(e => ({
    change: e,
    basis: o[dI(e.guid)]
  }));
  return jsxs("div", {
    className: "chunk_diff_details--chunkDiffDetails--jy2yz text--fontPos11--2LvXf text--_fontBase--QdLsd",
    children: [jsx("div", {
      className: "chunk_diff_details--divider--2Mr-q"
    }), chunk.canvasIsInternal && chunk.displayNode.styleType ? jsx(tO, {
      pairedChanges: d,
      chunk
    }) : jsx(tD, {
      pairedChanges: d,
      chunk,
      compareThumbnailSource
    })]
  });
});
class tF extends Component {
  constructor(e) {
    super(e);
    this.state = {
      hasError: !1
    };
  }
  static getDerivedStateFromError() {
    return {
      hasError: !0
    };
  }
  componentDidCatch() {}
  render() {
    return this.state.hasError ? tx("collaboration.branching_chunk.error") : jsx(tL, {
      changes: this.props.changes,
      basis: this.props.basis,
      chunk: this.props.chunk,
      compareThumbnailSource: this.props.compareThumbnailSource
    });
  }
}
export let $$tM0 = tF;
export const B8 = $$tM0;
export const zg = $$tx1;
export const kF = $$tS2;