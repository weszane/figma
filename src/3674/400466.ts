import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import i, { memo, useCallback, useMemo, useEffect, useRef, useState, forwardRef } from "react";
import { rXF, L5V, w3z, SES, Ez5, RN1, Bll, _gJ, NLJ } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { Xr, eU as _$$eU, md, Iz, mg, fp, zl } from "../figma_app/27355";
import { eY as _$$eY, dH } from "../figma_app/722362";
import { J2 } from "../figma_app/84367";
import { p as _$$p } from "../figma_app/372802";
import { m as _$$m, f as _$$f } from "../905/70820";
import { d4, wA } from "../vendor/514228";
import { hD, kh, qT } from "../figma_app/387100";
import { t as _$$t } from "../905/241707";
import { hA } from "../figma_app/88239";
import { DP } from "../905/640017";
import { v9 } from "../figma_app/623300";
import { wA as _$$wA, Fk } from "../figma_app/167249";
import { LZ, s9, iW } from "../figma_app/34798";
import { createPortal } from "../vendor/944059";
import { isNotNullish } from "../figma_app/95419";
import { DP as _$$DP } from "../905/158740";
import { k9, zN } from "../905/19536";
import k from "classnames";
import { parsePxNumber } from "../figma_app/783094";
import { IL, am as _$$am, hC } from "../figma_app/901889";
import { getInitialOptions } from "../figma_app/169182";
import { _X, qc } from "../figma_app/62612";
import { mJ, uQ } from "../figma_app/311375";
import { Kv, EG } from "../figma_app/544649";
import { UU } from "../figma_app/770088";
import { Qx, Uu, ZR, Dm } from "../figma_app/8833";
import { LO } from "../9410/571209";
import { NW, E_ } from "../figma_app/355754";
import { NB } from "../figma_app/682945";
import { XR, uA, FQ, yu, mi, AP, h9, Lw, cD } from "../figma_app/781512";
import { y as _$$y } from "../905/661502";
import { R as _$$R } from "../905/103090";
import { tx as _$$tx, t as _$$t2 } from "../905/303541";
import { S as _$$S } from "../figma_app/78808";
import { VU } from "../905/625959";
import { q5 } from "../figma_app/516028";
import { jN } from "../905/612685";
import { d as _$$d } from "../905/91820";
import { w as _$$w } from "../figma_app/883622";
import { c1 } from "../figma_app/357047";
import { j as _$$j } from "../905/834956";
import { o as _$$o } from "../905/89370";
import { W as _$$W } from "../905/592530";
import { l7, nc as _$$nc } from "../905/189185";
import { UN } from "../905/700578";
import { v4 } from "../figma_app/655139";
import { qM, Fm } from "../figma_app/120227";
import { Y5 } from "../figma_app/455680";
import { u as _$$u, hg } from "../figma_app/852050";
import { m3, nd as _$$nd } from "../figma_app/826998";
import { wG } from "../905/331989";
import { g as _$$g } from "../8826/914688";
import { C as _$$C } from "../8826/771306";
import { t as _$$t3 } from "../905/947268";
import { rO } from "../figma_app/409807";
import { B as _$$B } from "../905/714743";
import { A as _$$A } from "../svg/299062";
import { Gp, w$ } from "../figma_app/646357";
import { J as _$$J } from "../905/225412";
import { Ig } from "../figma_app/155647";
import { zi } from "../905/824449";
import { f$ } from "../figma_app/836943";
import { GN } from "../figma_app/249941";
import { sD, oW } from "../figma_app/243058";
import { SU } from "../figma_app/451499";
import { A as _$$A2 } from "../2854/731650";
import { A as _$$A3 } from "../2854/160761";
import { A as _$$A4 } from "../2854/372209";
import { A as _$$A5 } from "../2854/374356";
import { A as _$$A6 } from "../2854/668810";
import { A as _$$A7 } from "../svg/962815";
import { A as _$$A8 } from "../svg/33649";
import { A as _$$A9 } from "../svg/198130";
import { A as _$$A0 } from "../svg/541014";
import { A as _$$A1 } from "../2854/77351";
import { A as _$$A10 } from "../svg/275646";
import { b as _$$b, bL, mc, q7 } from "../905/465888";
import { bL as _$$bL, mc as _$$mc, YJ, q7 as _$$q } from "../figma_app/860955";
import { d as _$$d2 } from "../905/976845";
import { N as _$$N } from "../905/438674";
import { K as _$$K } from "../905/443068";
import { E as _$$E } from "../905/632989";
import { J as _$$J2 } from "../905/125993";
import { A as _$$A11 } from "../905/251970";
import { w as _$$w2 } from "../905/442596";
import { useHandleKeyboardEvent } from "../figma_app/878298";
import { At } from "../905/973142";
import { j_, El } from "../figma_app/9619";
import { A as _$$A12, C as _$$C2 } from "../figma_app/686450";
import { Mz, HY } from "../vendor/231521";
import { DF } from "../vendor/463802";
import { Sd } from "../vendor/425002";
import { $$if, XK, vJ, I2, Jj } from "../vendor/408361";
import { rf, iQ, Pt, qP, v_ as _$$v_ } from "../figma_app/806412";
import { D8, GG } from "../905/511649";
import { useSprigWithSampling } from "../905/99656";
import { n } from "../905/734251";
import { to as _$$to } from "../905/156213";
import { b as _$$b2 } from "../905/985254";
import { m0, Em } from "../figma_app/976749";
import { Fu } from "../figma_app/545877";
import { Ib } from "../905/129884";
import { vL } from "../905/826900";
import { B as _$$B2 } from "../figma_app/539422";
import { hS } from "../905/437088";
import { bL as _$$bL2 } from "../905/38914";
import { vo, Y9, hE, nB as _$$nB, wi, jk } from "../figma_app/272243";
import { $n } from "../905/521428";
import { fP, mc as _$$mc2, i3 } from "../905/691059";
import { x as _$$x } from "../905/587214";
import { O as _$$O } from "../905/487602";
import { h4, Nz, hh } from "../905/417232";
import { S as _$$S2 } from "../figma_app/552746";
import { fO } from "../905/452962";
import { Ju } from "../905/102752";
import { jT } from "../figma_app/626177";
import { A as _$$A14 } from "../6828/154709";
import { A as _$$A15 } from "../5724/713301";
import { J as _$$J3 } from "../905/526136";
import { A as _$$A16 } from "../vendor/850789";
import { wY } from "../figma_app/708845";
import { wr, Dh, tw as _$$tw, ax as _$$ax, Uc } from "../figma_app/741237";
import { BK } from "../905/848862";
import { s as _$$s } from "../905/172385";
import { S as _$$S3 } from "../figma_app/106763";
import { O as _$$O2 } from "../3591/240710";
import { F as _$$F } from "../905/302958";
import { go, gk } from "../3674/705006";
import { Mk } from "../figma_app/31188";
import { PW } from "../905/497152";
import { A as _$$A17 } from "../1617/954184";
import { AD } from "../905/871411";
import { Dk } from "../figma_app/623293";
import { j7 } from "../905/929976";
import { i as _$$i } from "../figma_app/85949";
import { f7 } from "../figma_app/896988";
import { RHC } from "../figma_app/27776";
import { Nz as _$$Nz } from "../figma_app/492929";
import { Nz as _$$Nz2 } from "../figma_app/875495";
import { Nz as _$$Nz3 } from "../figma_app/134671";
import { _content } from "../figma_app/227510";
import { N as _$$N2 } from "../figma_app/240854";
import { Nz as _$$Nz4 } from "../figma_app/755571";
function v(e) {
  let t = d4(e => e.mirror.appModel.currentPage);
  let n = hA();
  return _$$wA((e, t, n, a) => t.flatMap(t => {
    let i = e.get(t);
    if (!i) return null;
    if (i.containingCanvas === n) {
      if (!a) return t;
      {
        let n = [];
        hD(e, t, e => {
          e.guid === a && n.push(t);
        });
        return n;
      }
    }
  }).filter(_$$t), e, t, n);
}
var A = k;
let q = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M9.5 6A1.5 1.5 0 0 1 11 7.5v9A1.5 1.5 0 0 1 9.5 18h-2l-.153-.008A1.5 1.5 0 0 1 6 16.5v-9a1.5 1.5 0 0 1 1.347-1.492L7.5 6zm-2 1a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm9-1A1.5 1.5 0 0 1 18 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-2l-.153-.008A1.5 1.5 0 0 1 13 16.5v-9a1.5 1.5 0 0 1 1.347-1.492L14.5 6zm-2 1a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z",
      clipRule: "evenodd"
    })
  });
});
let Y = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      d: "M16.5 13a1.5 1.5 0 0 1 1.5 1.5v2l-.008.153A1.5 1.5 0 0 1 16.5 18h-9a1.5 1.5 0 0 1-1.492-1.347L6 16.5v-2A1.5 1.5 0 0 1 7.5 13zm-9 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5zm9-8A1.5 1.5 0 0 1 18 7.5v2l-.008.153A1.5 1.5 0 0 1 16.5 11h-9a1.5 1.5 0 0 1-1.492-1.347L6 9.5v-2A1.5 1.5 0 0 1 7.5 6zm-9 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5z"
    })
  });
});
let er = "annotation--viewAnnotation--cA-c1 annotation--_annotationBase--MPByC";
let ed = "annotation--wrapperEditing--C2Zlx";
let ec = "annotation--annotationLine--jr4Mc";
let eu = "annotation--annotationLineEndDot--Lsq0a";
let ep = "annotation--withCategory--lj1wU";
let eh = "annotation--contentContainer--vSuqs";
let ef = "annotation--innerWrapper--T0cql";
let eg = "annotation--viewAnnotationFadedOut--7LQPE";
let ex = "annotation--darkText--xCvQV";
let em = "annotation--properties--1p6UF";
let e_ = "annotation--noValue--HHQOU";
let ev = "annotation--propertyOptionIconSvg--LypST";
let ey = "annotation--icon--w1enR";
let eb = "annotation--chit--3je6E";
let ej = "annotation--solidPaint--ClR6h";
let ew = "annotation--solidPaintValue--9PQMf annotation--_ellipsis--8F1VE";
let eN = "annotation--variablePill--VNxoI";
let ek = "annotation--viewAnnotationSelected--UApdn";
let eA = "annotation--colorCircle--i6hsL";
let eI = "annotation--categoryOptionLabel--Iz9RB";
let eE = "annotation--categoryOptionIcon--jg6bS";
let eC = "annotation--buttonReset--Emcnw";
function eT({
  valueProps: e,
  isHovered: t,
  variableContainerClassName: n
}) {
  let i = _$$u(e?.variableId);
  if ("mixed" === e.format) {
    let i = e.value.some(e => !!e.variableId);
    return jsx("div", {
      className: A()("annotation--multipleVariableWrapper--OW3M1", i && "annotation--vertical--zmpVv"),
      children: e.value.map((o, l) => jsxs("div", {
        className: "annotation--multipleVariableValue--5-5xk",
        children: [jsx(eT, {
          valueProps: o,
          isHovered: t,
          variableContainerClassName: n
        }), l < e.value.length - 1 && !i && jsx("span", {
          children: ", "
        })]
      }, l))
    });
  }
  let o = `${m3(e)}`;
  return i ? jsx(wG, {
    dataTestId: "styledValueVariable",
    containerClassName: A()(eN, n),
    text: i.name,
    disableHover: !0,
    isHovered: t,
    tooltip: o
  }) : jsx(Fragment, {
    children: o
  });
}
function eO({
  svg: e
}) {
  return jsx(_$$B, {
    svg: e,
    className: A()(ey, ev)
  });
}
let eB = e => _$$nd(e, "");
function eF({
  nodeFields: e,
  variable: t,
  isPreview: n = !1
}) {
  let i = v4();
  let o = qM(i, e?.stackSpacing, eB);
  return t ? n ? jsx(Fragment, {
    children: t.name
  }) : jsx(wG, {
    containerClassName: eN,
    text: t.name,
    disableHover: !0
  }) : rO(e?.stackPrimaryAlignItems) ? _$$tx("dev_handoff.annotations.auto") : jsx(Fragment, {
    children: o
  });
}
function ez({
  nodeFields: e,
  isPreview: t = !1
}) {
  let n = _$$u(e?.itemSpacingVariableId);
  return t ? jsx(eF, {
    nodeFields: e,
    variable: n,
    isPreview: !0
  }) : jsx("div", {
    className: n ? void 0 : "annotation--spacingProperty--RCjSM annotation--coloredProperty--OTQ6l",
    children: jsx("span", {
      children: jsx(eF, {
        nodeFields: e,
        variable: n
      })
    })
  });
}
function eV({
  rawValues: e,
  variables: t,
  isPreview: n = !1,
  isTextProperty: i = !1
}) {
  let o = v4();
  let l = Fm(o, e, eB, {
    isTextProperty: i
  });
  if (e.length !== t.length) throw Error("<ManySidedProperty /> must have the same number of rawValues and variables");
  let s = t.map((e, t) => ({
    value: l[t],
    format: "pixels",
    variableId: e?.node_id
  }));
  let r = s[0]?.variableId;
  for (let e of s) if (e.variableId !== r) {
    if (n) return _$$tx("fullscreen.mixed");
    return jsx(eT, {
      variableContainerClassName: eN,
      valueProps: {
        format: "mixed",
        value: s
      }
    });
  }
  return r ? n ? jsx(Fragment, {
    children: r
  }) : jsx(eT, {
    variableContainerClassName: eN,
    valueProps: s[0]
  }) : e.some(t => t !== e[0]) ? n ? _$$tx("fullscreen.mixed") : jsx(eT, {
    variableContainerClassName: eN,
    valueProps: {
      format: "pixels",
      value: l.join(", ")
    }
  }) : jsx(eT, {
    variableContainerClassName: eN,
    valueProps: {
      format: "pixels",
      value: l[0]
    }
  });
}
function eH({
  nodeFields: e,
  isPreview: t = !1
}) {
  let n = _$$u(e.paddingTopVariableId);
  let i = _$$u(e.paddingRightVariableId);
  let o = _$$u(e.paddingBottomVariableId);
  let l = _$$u(e.paddingLeftVariableId);
  let {
    stackTopPadding,
    stackRightPadding,
    stackBottomPadding,
    stackLeftPadding
  } = e;
  let u = [n, i, o, l].some(e => !!e);
  return t ? jsx(eV, {
    rawValues: [stackTopPadding, stackRightPadding, stackBottomPadding, stackLeftPadding],
    variables: [n, i, o, l],
    isPreview: !0
  }) : jsx("div", {
    className: A()(u ? void 0 : "annotation--paddingProperty--ckvG6 annotation--coloredProperty--OTQ6l"),
    children: jsx("span", {
      children: jsx(eV, {
        rawValues: [stackTopPadding, stackRightPadding, stackBottomPadding, stackLeftPadding],
        variables: [n, i, o, l]
      })
    })
  });
}
function eW({
  nodeId: e
}) {
  let t = _$$wA(t => {
    let n = t.get(e);
    return n ? {
      stackWrap: n.stackWrap,
      stackMode: n.stackMode
    } : null;
  }, e);
  if (t?.stackWrap === "WRAP") return jsx(eO, {
    svg: _$$A
  });
  switch (t?.stackMode) {
    case "HORIZONTAL":
      return jsx(_$$g, {
        "data-testid": "Icon24AlLayoutGridHorizontalSmall",
        className: A()(ey, ev)
      });
    case "VERTICAL":
      return jsx(_$$C, {
        "data-testid": "Icon24AlLayoutGridVerticalSmall",
        className: A()(ey, ev)
      });
    case "GRID":
      return jsx(_$$t3, {
        "data-testid": "Icon24GridView",
        className: A()(ey, ev)
      });
    default:
      return null;
  }
}
function eG({
  nodeFields: e
}) {
  if ("WRAP" === e.stackWrap) return _$$tx("fullscreen.properties_panel.stack_panel.wrap");
  switch (e.stackMode) {
    case "HORIZONTAL":
      return _$$tx("dev_handoff.annotations.autolayout_horizontal");
    case "VERTICAL":
      return _$$tx("dev_handoff.annotations.autolayout_vertical");
    case "GRID":
      return _$$tx("inspect_panel.properties.flow.grid");
    default:
      return null;
  }
}
function eU({
  nodeFields: e
}) {
  if (!e || !e.isStack) return null;
  if ("HORIZONTAL" === e.stackMode) switch (e.stackPrimaryAlignItems) {
    case "MIN":
      switch (e.stackCounterAlignItems) {
        case "MIN":
          return _$$tx("dev_handoff.annotations.alignment.top_left");
        case "CENTER":
          return _$$tx("dev_handoff.annotations.alignment.left");
        case "MAX":
          return _$$tx("dev_handoff.annotations.alignment.bottom_left");
        case "BASELINE":
          return _$$tx("dev_handoff.annotations.alignment.baseline_left");
      }
    case "CENTER":
    case "SPACE_BETWEEN":
    case "SPACE_EVENLY":
      switch (e.stackCounterAlignItems) {
        case "MIN":
          return _$$tx("dev_handoff.annotations.alignment.top_center");
        case "CENTER":
          return _$$tx("dev_handoff.annotations.alignment.center");
        case "MAX":
          return _$$tx("dev_handoff.annotations.alignment.bottom_center");
        case "BASELINE":
          return _$$tx("dev_handoff.annotations.alignment.baseline_center");
      }
    case "MAX":
      switch (e.stackCounterAlignItems) {
        case "MIN":
          return _$$tx("dev_handoff.annotations.alignment.top_right");
        case "CENTER":
          return _$$tx("dev_handoff.annotations.alignment.right");
        case "MAX":
          return _$$tx("dev_handoff.annotations.alignment.bottom_right");
        case "BASELINE":
          return _$$tx("dev_handoff.annotations.alignment.baseline_right");
      }
  }
  switch (e.stackPrimaryAlignItems) {
    case "MIN":
      switch (e.stackCounterAlignItems) {
        case "MIN":
          return _$$tx("dev_handoff.annotations.alignment.top_left");
        case "CENTER":
          return _$$tx("dev_handoff.annotations.alignment.top_center");
        case "MAX":
          return _$$tx("dev_handoff.annotations.alignment.top_right");
        case "BASELINE":
          return null;
      }
    case "CENTER":
    case "SPACE_BETWEEN":
    case "SPACE_EVENLY":
      switch (e.stackCounterAlignItems) {
        case "MIN":
          return _$$tx("dev_handoff.annotations.alignment.left");
        case "CENTER":
          return _$$tx("dev_handoff.annotations.alignment.center");
        case "MAX":
          return _$$tx("dev_handoff.annotations.alignment.right");
        case "BASELINE":
          return null;
      }
    case "MAX":
      switch (e.stackCounterAlignItems) {
        case "MIN":
          return _$$tx("dev_handoff.annotations.alignment.bottom_left");
        case "CENTER":
          return _$$tx("dev_handoff.annotations.alignment.bottom_center");
        case "MAX":
          return _$$tx("dev_handoff.annotations.alignment.bottom_right");
        case "BASELINE":
          return null;
      }
  }
}
function eK({
  value: e,
  variableAlias: t,
  isPreview: n
}) {
  let i = _$$u(t?.id);
  return i && n ? jsx(Fragment, {
    children: i.name
  }) : jsx(eT, {
    variableContainerClassName: eN,
    valueProps: {
      value: e
    }
  });
}
function eZ(e, t) {
  let n = d4(e => e.library);
  let a = f$(e);
  let i = mJ(a);
  if (!e || !a || !i) return null;
  let o = Gp(e.key, [a], n);
  if (!o) return null;
  let l = o.value;
  "SUBSCRIBED_WITHOUT_LIBRARY" === o.kind && (l.style_type = t);
  l.description = i.description;
  l.name = i.name;
  l.isLocal = "LOCAL" === o.kind;
  return l;
}
function e$(e, t) {
  if (1 === t) return e;
  let n = (100 * t).toLocaleString("en", {
    maximumFractionDigits: 2
  }) + "%";
  return `${e} \xb7 ${n}`;
}
function e0(e, t, n) {
  let {
    opacity = 1
  } = e;
  switch (e.type) {
    case "SOLID":
      {
        if (!e.color) return null;
        let {
          color
        } = e;
        let {
          a = 1
        } = i;
        let l = n({
          ...color,
          a: a * opacity
        }, {
          alphaInPercent: !0
        });
        return t ? t.name : l;
      }
    case "GRADIENT_LINEAR":
      return e$(_$$t2("dev_handoff.selection_colors.gradient_linear"), opacity);
    case "GRADIENT_ANGULAR":
      return e$(_$$t2("dev_handoff.selection_colors.gradient_angular"), opacity);
    case "GRADIENT_DIAMOND":
      return e$(_$$t2("dev_handoff.selection_colors.gradient_diamond"), opacity);
    case "GRADIENT_RADIAL":
      return e$(_$$t2("dev_handoff.selection_colors.gradient_radial"), opacity);
    case "IMAGE":
      return e$(_$$t2("dev_handoff.annotations.image"), opacity);
    case "VIDEO":
      return e$(_$$t2("dev_handoff.annotations.video"), opacity);
    default:
      return null;
  }
}
function e1({
  paints: e,
  styleRef: t,
  variables: n
}) {
  let i = n?.[0];
  let o = Ig();
  let l = _$$u(i?.id);
  let s = eZ(t, "FILL");
  return 0 === e.length ? null : s ? jsx(Fragment, {
    children: s.name
  }) : e.length > 1 ? _$$tx("dev_handoff.annotations.multiple") : jsx(Fragment, {
    children: e0(e[0], l, o)
  });
}
function e2({
  paints: e
}) {
  let t = e[0];
  return jsx(_$$J, {
    className: eb,
    tabIndex: -1,
    paint: t,
    allowMouseDownPropagation: !0
  });
}
function e5({
  paint: e,
  variableAlias: t
}) {
  let n = Ig();
  let i = _$$u(t?.id);
  let o = e0(e, i, n);
  return o ? jsxs("div", {
    className: ej,
    children: [jsx(_$$J, {
      className: eb,
      paint: e,
      tabIndex: -1,
      allowMouseDownPropagation: !0
    }), jsx("span", {
      className: ew,
      title: o,
      children: i ? jsx(wG, {
        containerClassName: eN,
        text: o,
        disableHover: !0
      }) : o
    })]
  }) : null;
}
function e3({
  styleRef: e,
  styleType: t,
  hideIcon: n = !1
}) {
  let i = eZ(e, t);
  return (!function (e) {
    let t = d4(e => e.library);
    let n = f$(e);
    let a = n ? Gp(e.key, [n], t) : void 0;
    w$(a);
  }(e), i) ? jsxs("div", {
    className: ej,
    children: [!n && jsx("div", {
      className: A()("annotation--styleChit--yCQ3O annotation--chit--3je6E", ey),
      children: jsx(zi, {
        dsStyle: i
      })
    }), jsx("span", {
      className: ew,
      title: i.name,
      children: i.name
    })]
  }) : null;
}
function e4({
  paints: e,
  styleRef: t,
  variables: n
}) {
  return t ? jsx(e3, {
    styleRef: t,
    styleType: "FILL"
  }) : 0 === e.length ? null : jsx("div", {
    className: "annotation--mixedValues--Z0qIk",
    children: e.map((e, t) => jsx(e5, {
      paint: e,
      variableAlias: n?.[t]
    }, t))
  });
}
function te({
  effects: e,
  styleRef: t
}) {
  let n = eZ(t, "EFFECT");
  if (n) return jsx(Fragment, {
    children: n.name
  });
  if (e.length > 1) return _$$tx("dev_handoff.annotations.multiple");
  let i = e[0];
  return i ? jsx(tt, {
    effect: i
  }) : null;
}
function tt({
  effect: e
}) {
  switch (e.type) {
    case "DROP_SHADOW":
      return _$$tx("dev_handoff.annotations.shadow");
    case "BACKGROUND_BLUR":
      return _$$tx("fullscreen.properties_panel.effects.background_blur");
    case "FOREGROUND_BLUR":
      return _$$tx("fullscreen.properties_panel.effects.layer_blur");
    case "INNER_SHADOW":
      return _$$tx("fullscreen.properties_panel.effects.inner_shadow");
    case "GRAIN":
      return _$$tx("fullscreen.properties_panel.effects.texture");
    case "NOISE":
      return _$$tx("fullscreen.properties_panel.effects.noise");
    case "GLASS":
      return _$$tx("fullscreen.properties_panel.effects.glass");
    case "REPEAT":
    case "SYMMETRY":
    case void 0:
      return null;
  }
}
function tn({
  effects: e,
  styleRef: t
}) {
  return jsx(Fragment, {
    children: e.map((e, n) => jsx(tl, {
      effect: e,
      styleRefHeader: 0 === n ? t : null
    }, n))
  });
}
function ta({
  effect: e,
  variables: t
}) {
  let n = [e.offset?.x, e.offset?.y, e.radius, e.spread];
  return n.some((e, n) => t[n]?.name) ? jsx("div", {
    children: n.map((e, n) => {
      if (void 0 === e) return null;
      let i = t[n];
      return i?.name ? jsx(wG, {
        text: i.name,
        disableHover: !0
      }, n) : jsx("div", {
        children: e
      }, n);
    }).filter(e => null !== e)
  }) : jsx("span", {
    children: n.filter(e => void 0 !== e).join(", ")
  });
}
function ti({
  effect: e,
  radiusVariable: t
}) {
  return t?.name ? jsx("span", {
    className: "annotation--effectBlurVariable--mbYFb",
    children: jsx(wG, {
      text: t.name,
      disableHover: !0
    })
  }) : void 0 === e.radius ? null : jsx("span", {
    children: ` ${_$$nd(e.radius, "px")}`
  });
}
let to = new SU();
function tl({
  effect: e,
  styleRefHeader: t
}) {
  let n = Ig();
  let i = t && jsx(ts, {
    styleRef: t
  });
  let o = [e.xVar, e.yVar, e.radiusVar, e.spreadVar, e.colorVar].map(e => {
    if (e?.value?.alias) {
      let t = sD.fromKiwi(e.value.alias);
      if (t) return sD.toString(t);
    }
    return null;
  });
  let l = hg(o);
  switch (e.type) {
    case "DROP_SHADOW":
    case "INNER_SHADOW":
      {
        let {
          color
        } = e;
        let o = l[4];
        let s = color ? n(color, {
          alphaInPercent: !0
        }) : null;
        return jsxs("div", {
          children: [i, jsx("span", {
            children: jsx(tt, {
              effect: e
            })
          }), color && jsxs(Fragment, {
            children: [jsx("span", {}), jsxs("div", {
              className: ej,
              children: [jsx(_$$J, {
                className: A()(eb, "annotation--chitInline--vG6cM"),
                color,
                allowMouseDownPropagation: !0
              }), o ? jsx(wG, {
                text: o.name,
                disableHover: !0
              }) : jsx("span", {
                className: ew,
                title: s || void 0,
                children: s
              })]
            })]
          }), jsx("span", {}), jsx(ta, {
            effect: e,
            variables: l
          }), e.blendMode && "NORMAL" !== e.blendMode && jsxs(Fragment, {
            children: [jsx("span", {}), jsx("span", {
              children: to.format(e.blendMode)
            })]
          })]
        });
      }
    case "BACKGROUND_BLUR":
    case "FOREGROUND_BLUR":
      return jsxs("div", {
        children: [i, jsx("span", {
          children: jsx(tt, {
            effect: e
          })
        }), jsx(ti, {
          effect: e,
          radiusVariable: l[2]
        })]
      });
    default:
      return null;
  }
}
function ts({
  styleRef: e
}) {
  let t = f$(e);
  let n = mJ(t);
  return t && n ? jsx("div", {
    children: n.name
  }) : null;
}
let td = e => {
  switch (e) {
    case "RIGHT":
      return _$$t2("inspect_panel.typography.align_right");
    case "CENTER":
      return _$$t2("inspect_panel.typography.align_center");
    case "JUSTIFIED":
      return _$$t2("inspect_panel.typography.align_justified");
    case "LEFT":
      return _$$t2("dev_handoff.annotations.align_left");
  }
};
function tc() {
  return jsx(_$$B, {
    svg: _$$A3,
    className: A()(ey, ev)
  });
}
function tu({
  textAlignHorizontal: e
}) {
  return jsx(Fragment, {
    children: td(e)
  });
}
let tp = e => e.toLocaleString("en", {
  maximumFractionDigits: 2,
  useGrouping: !1
});
function th({
  lineHeightOrMixed: e,
  variableAlias: t,
  isPreview: n
}) {
  let i = _$$u(t?.id);
  let o = v4();
  let l = "mixed" !== e && "PIXELS" === e.units ? e.value : void 0;
  let s = qM(o, l, tp, {
    isTextProperty: !0
  });
  return "mixed" === e ? _$$tx("fullscreen.mixed") : i && n ? jsx(Fragment, {
    children: i.name
  }) : "PERCENT" === e.units && 100 === e.value ? _$$tx("dev_handoff.annotations.auto") : "RAW" === e.units ? jsx(eT, {
    variableContainerClassName: eN,
    valueProps: {
      format: "fig_number",
      value: {
        value: 100 * e.value,
        units: "PERCENT"
      },
      variableId: i?.node_id
    }
  }) : jsx(eT, {
    variableContainerClassName: eN,
    valueProps: {
      value: s,
      variableId: i?.node_id
    }
  });
}
function tf({
  fontNameOrMixed: e,
  variableAlias: t,
  isPreview: n
}) {
  let i = _$$u(t?.id);
  return "mixed" === e ? _$$tx("fullscreen.mixed") : i && n ? jsx(Fragment, {
    children: i.name
  }) : jsx(eT, {
    variableContainerClassName: eN,
    valueProps: {
      value: e.family,
      variableId: i?.node_id
    }
  });
}
function tg({
  fontWeightOrMixed: e,
  variableAlias: t,
  isPreview: n
}) {
  let i = _$$u(t?.id);
  return "mixed" === e ? _$$tx("fullscreen.mixed") : (i && i.resolvedType !== rXF.FLOAT && (i = null), i && n) ? jsx(Fragment, {
    children: i.name
  }) : jsx(eT, {
    variableContainerClassName: eN,
    valueProps: {
      value: e,
      variableId: i?.node_id
    }
  });
}
let tk = new Map([[L5V.HEIGHT, {
  label: () => _$$t2("fullscreen.properties_panel.transform_panel.height"),
  category: "dimension",
  Icon: () => jsx(eO, {
    svg: _$$A8
  }),
  extractNodeFields: e => e ? {
    height: e.size.y,
    heightVar: e.boundVariables.height
  } : null,
  PreviewValue: ({
    nodeFields: e
  }) => e ? jsx(tL, {
    value: e.height,
    variableAlias: e.heightVar,
    isPreview: !0
  }) : null,
  DisplayValue: ({
    nodeFields: e
  }) => e ? jsx(tL, {
    value: e.height,
    variableAlias: e.heightVar
  }) : null,
  index: 0
}], [L5V.MIN_HEIGHT, {
  label: () => _$$t2("fullscreen.properties_panel.stack_panel.minmax.min_height_tt"),
  category: "dimension",
  Icon: () => jsx(eO, {
    svg: _$$A8
  }),
  extractNodeFields: e => e ? {
    minHeight: e.minHeight,
    minHeightVar: e.boundVariables.minHeight
  } : null,
  PreviewValue: ({
    nodeFields: e
  }) => e ? jsx(tL, {
    value: e.minHeight,
    variableAlias: e.minHeightVar,
    isPreview: !0
  }) : null,
  DisplayValue: ({
    nodeFields: e
  }) => e ? jsx(tL, {
    value: e.minHeight,
    variableAlias: e.minHeightVar
  }) : null,
  index: 0
}], [L5V.MAX_HEIGHT, {
  label: () => _$$t2("fullscreen.properties_panel.stack_panel.minmax.max_height_tt"),
  category: "dimension",
  Icon: () => jsx(eO, {
    svg: _$$A8
  }),
  extractNodeFields: e => e ? {
    maxHeight: e.maxHeight,
    maxHeightVar: e.boundVariables.maxHeight
  } : null,
  PreviewValue: ({
    nodeFields: e
  }) => e ? jsx(tL, {
    value: e.maxHeight,
    variableAlias: e.maxHeightVar,
    isPreview: !0
  }) : null,
  DisplayValue: ({
    nodeFields: e
  }) => e ? jsx(tL, {
    value: e.maxHeight,
    variableAlias: e.maxHeightVar
  }) : null,
  index: 0
}], [L5V.WIDTH, {
  label: () => _$$t2("fullscreen.properties_panel.transform_panel.width"),
  category: "dimension",
  Icon: () => jsx(eO, {
    svg: _$$A0
  }),
  extractNodeFields: e => e ? {
    width: e.size.x,
    widthVar: e.boundVariables.width
  } : null,
  PreviewValue: ({
    nodeFields: e
  }) => e ? jsx(tL, {
    value: e.width,
    variableAlias: e.widthVar,
    isPreview: !0
  }) : null,
  DisplayValue: ({
    nodeFields: e
  }) => e ? jsx(tL, {
    value: e.width,
    variableAlias: e.widthVar
  }) : null,
  index: 0
}], [L5V.MIN_WIDTH, {
  label: () => _$$t2("fullscreen.properties_panel.stack_panel.minmax.min_width_tt"),
  category: "dimension",
  Icon: () => jsx(eO, {
    svg: _$$A0
  }),
  extractNodeFields: e => e ? {
    minWidth: e.minWidth,
    minWidthVar: e.boundVariables.minWidth
  } : null,
  PreviewValue: ({
    nodeFields: e
  }) => e ? jsx(tL, {
    value: e.minWidth,
    variableAlias: e.minWidthVar,
    isPreview: !0
  }) : null,
  DisplayValue: ({
    nodeFields: e
  }) => e ? jsx(tL, {
    value: e.minWidth,
    variableAlias: e.minWidthVar
  }) : null,
  index: 0
}], [L5V.MAX_WIDTH, {
  label: () => _$$t2("fullscreen.properties_panel.stack_panel.minmax.max_width_tt"),
  category: "dimension",
  Icon: () => jsx(eO, {
    svg: _$$A0
  }),
  extractNodeFields: e => e ? {
    maxWidth: e.maxWidth,
    maxWidthVar: e.boundVariables.maxWidth
  } : null,
  PreviewValue: ({
    nodeFields: e
  }) => e ? jsx(tL, {
    value: e.maxWidth,
    variableAlias: e.maxWidthVar,
    isPreview: !0
  }) : null,
  DisplayValue: ({
    nodeFields: e
  }) => e ? jsx(tL, {
    value: e.maxWidth,
    variableAlias: e.maxWidthVar
  }) : null,
  index: 0
}], [L5V.CORNER_RADIUS, {
  label: () => _$$t2("fullscreen.properties_panel.transform_panel.corner_radius"),
  category: "dimension",
  Icon: () => jsx(eO, {
    svg: _$$A5
  }),
  extractNodeFields: e => e ? {
    rectangleTopLeftCornerRadius: e.rectangleTopLeftCornerRadius,
    rectangleTopRightCornerRadius: e.rectangleTopRightCornerRadius,
    rectangleBottomRightCornerRadius: e.rectangleBottomRightCornerRadius,
    rectangleBottomLeftCornerRadius: e.rectangleBottomLeftCornerRadius,
    topLeftRadiusVariable: e.boundVariables.topLeftRadius?.id,
    topRightRadiusVariable: e.boundVariables.topRightRadius?.id,
    bottomRightRadiusVariable: e.boundVariables.bottomRightRadius?.id,
    bottomLeftRadiusVariable: e.boundVariables.bottomLeftRadius?.id
  } : null,
  PreviewValue: ({
    nodeFields: e
  }) => e ? jsx(tE, {
    nodeFields: e,
    isPreview: !0
  }) : null,
  DisplayValue: ({
    nodeFields: e
  }) => e ? jsx(tE, {
    nodeFields: e
  }) : null,
  index: 0
}], [L5V.STACK_MODE, {
  label: () => _$$t2("dev_handoff.annotations.autolayout_mode"),
  category: "stack",
  Icon: ({
    nodeId: e
  }) => jsx(eW, {
    nodeId: e
  }),
  extractNodeFields: e => e ? {
    stackMode: e.stackMode,
    stackWrap: e.stackWrap
  } : null,
  PreviewValue: ({
    nodeFields: e
  }) => e ? jsx(eG, {
    nodeFields: e
  }) : null,
  DisplayValue: ({
    nodeFields: e
  }) => e ? jsx(eG, {
    nodeFields: e
  }) : null,
  index: 0
}], [L5V.STACK_ALIGNMENT, {
  label: () => _$$t2("dev_handoff.annotations.alignment"),
  category: "stack",
  Icon: ({
    nodeId: e
  }) => {
    let t = _$$wA(t => {
      let n = t.get(e);
      return !n || n.isGrid ? null : {
        stackMode: n.stackMode,
        stackPrimaryAlignItems: n.stackPrimaryAlignItems,
        stackCounterAlignItems: n.stackCounterAlignItems,
        stackWrap: n.stackWrap
      };
    }, e);
    return t ? jsx(eO, {
      svg: GN(t)
    }) : null;
  },
  extractNodeFields: e => e ? {
    isStack: e.isStack,
    stackMode: e.stackMode,
    stackPrimaryAlignItems: e.stackPrimaryAlignItems,
    stackCounterAlignItems: e.stackCounterAlignItems
  } : null,
  PreviewValue: ({
    nodeFields: e
  }) => e ? jsx(eU, {
    nodeFields: e
  }) : null,
  DisplayValue: ({
    nodeFields: e
  }) => e ? jsx(eU, {
    nodeFields: e
  }) : null,
  index: 0
}], [L5V.STACK_SPACING, {
  label: () => _$$t2("inspect_panel.properties.gap"),
  category: "stack",
  Icon: ({
    nodeId: e
  }) => {
    let t = Fk(t => t.get(e)?.stackMode, e);
    return t && "GRID" !== t ? jsx(eO, {
      svg: "HORIZONTAL" === t ? _$$A6 : _$$A7
    }) : null;
  },
  extractNodeFields: e => e ? {
    itemSpacingVariableId: e?.boundVariables?.itemSpacing?.id,
    stackSpacing: e.stackSpacing,
    stackPrimaryAlignItems: e.stackPrimaryAlignItems
  } : null,
  PreviewValue: ({
    nodeFields: e
  }) => jsx(ez, {
    nodeFields: e,
    isPreview: !0
  }),
  DisplayValue: ({
    nodeFields: e
  }) => jsx(ez, {
    nodeFields: e
  }),
  index: 0
}], [L5V.GRID_COLUMN_COUNT, {
  label: () => _$$t2("inspect_panel.properties.grid.columns"),
  category: "stack",
  Icon: () => jsx(q, {
    "data-testid": "Icon24AlColumnsSmall",
    className: A()(ey, ev)
  }),
  extractNodeFields: e => e ? {
    columnCount: e.gridColumnCount
  } : null,
  PreviewValue: ({
    nodeFields: e
  }) => jsx(eK, {
    value: e ? e.columnCount : 0,
    isPreview: !0
  }),
  DisplayValue: ({
    nodeFields: e
  }) => jsx(eK, {
    value: e ? e.columnCount : 0
  }),
  index: 0
}], [L5V.GRID_ROW_COUNT, {
  label: () => _$$t2("inspect_panel.properties.grid.rows"),
  category: "stack",
  Icon: () => jsx(Y, {
    "data-testid": "Icon24AlRowsSmall",
    className: A()(ey, ev)
  }),
  extractNodeFields: e => e ? {
    rowCount: e.gridRowCount
  } : null,
  PreviewValue: ({
    nodeFields: e
  }) => jsx(eK, {
    value: e ? e.rowCount : 0,
    isPreview: !0
  }),
  DisplayValue: ({
    nodeFields: e
  }) => jsx(eK, {
    value: e ? e.rowCount : 0
  }),
  index: 0
}], [L5V.GRID_COLUMN_GAP, {
  label: () => _$$t2("inspect_panel.properties.grid.column_gap"),
  category: "stack",
  Icon: ({
    nodeId: e
  }) => {
    let t = Fk(t => t.get(e)?.stackMode, e);
    return t && "GRID" === t ? jsx(eO, {
      svg: _$$A7
    }) : null;
  },
  extractNodeFields: e => e ? {
    itemSpacingVariableId: e?.boundVariables?.itemSpacing?.id,
    stackSpacing: e.gridColumnGap,
    stackPrimaryAlignItems: e.stackPrimaryAlignItems
  } : null,
  PreviewValue: ({
    nodeFields: e
  }) => jsx(ez, {
    nodeFields: e,
    isPreview: !0
  }),
  DisplayValue: ({
    nodeFields: e
  }) => jsx(ez, {
    nodeFields: e
  }),
  index: 0
}], [L5V.GRID_ROW_GAP, {
  label: () => _$$t2("inspect_panel.properties.grid.row_gap"),
  category: "stack",
  Icon: ({
    nodeId: e
  }) => {
    let t = Fk(t => t.get(e)?.stackMode, e);
    return t && "GRID" === t ? jsx(eO, {
      svg: _$$A6
    }) : null;
  },
  extractNodeFields: e => e ? {
    itemSpacingVariableId: e?.boundVariables?.itemSpacing?.id,
    stackSpacing: e.gridRowGap,
    stackPrimaryAlignItems: e.stackPrimaryAlignItems
  } : null,
  PreviewValue: ({
    nodeFields: e
  }) => jsx(ez, {
    nodeFields: e,
    isPreview: !0
  }),
  DisplayValue: ({
    nodeFields: e
  }) => jsx(ez, {
    nodeFields: e
  }),
  index: 0
}], [L5V.GRID_COLUMN_ANCHOR_INDEX, {
  label: () => _$$t2("inspect_panel.properties.grid.column_start"),
  category: "stack",
  Icon: () => jsx(q, {
    "data-testid": "Icon24AlColumnsSmall",
    className: A()(ey, ev)
  }),
  extractNodeFields: e => e ? {
    columnIndex: e.gridColumnAnchorIndex
  } : null,
  PreviewValue: ({
    nodeFields: e
  }) => jsx(eK, {
    value: e ? e.columnIndex + 1 : 0,
    isPreview: !0
  }),
  DisplayValue: ({
    nodeFields: e
  }) => jsx(eK, {
    value: e ? e.columnIndex + 1 : 0
  }),
  index: 0
}], [L5V.GRID_ROW_ANCHOR_INDEX, {
  label: () => _$$t2("inspect_panel.properties.grid.row_start"),
  category: "stack",
  Icon: () => jsx(Y, {
    "data-testid": "Icon24AlRowsSmall",
    className: A()(ey, ev)
  }),
  extractNodeFields: e => e ? {
    rowIndex: e.gridRowAnchorIndex
  } : null,
  PreviewValue: ({
    nodeFields: e
  }) => jsx(eK, {
    value: e ? e.rowIndex + 1 : 0,
    isPreview: !0
  }),
  DisplayValue: ({
    nodeFields: e
  }) => jsx(eK, {
    value: e ? e.rowIndex + 1 : 0
  }),
  index: 0
}], [L5V.GRID_COLUMN_SPAN, {
  label: () => _$$t2("inspect_panel.properties.grid.horizontal_span"),
  category: "stack",
  Icon: () => jsx(_$$o, {
    "data-testid": "Icon24ArrowRightSmall",
    className: A()(ey, ev)
  }),
  extractNodeFields: e => e ? {
    columnSpan: e.gridColumnSpan
  } : null,
  PreviewValue: ({
    nodeFields: e
  }) => jsx(eK, {
    value: e ? e.columnSpan : 0,
    isPreview: !0
  }),
  DisplayValue: ({
    nodeFields: e
  }) => jsx(eK, {
    value: e ? e.columnSpan : 0
  }),
  index: 0
}], [L5V.GRID_ROW_SPAN, {
  label: () => _$$t2("inspect_panel.properties.grid.vertical_span"),
  category: "stack",
  Icon: () => jsx(_$$W, {
    "data-testid": "Icon24ArrowDownSmall",
    className: A()(ey, ev)
  }),
  extractNodeFields: e => e ? {
    rowSpan: e.gridRowSpan
  } : null,
  PreviewValue: ({
    nodeFields: e
  }) => jsx(eK, {
    value: e ? e.rowSpan : 0,
    isPreview: !0
  }),
  DisplayValue: ({
    nodeFields: e
  }) => jsx(eK, {
    value: e ? e.rowSpan : 0
  }),
  index: 0
}], [L5V.STACK_PADDING, {
  label: () => _$$t2("inspect_panel.properties.padding"),
  category: "stack",
  Icon: () => jsx(eO, {
    svg: _$$A9
  }),
  extractNodeFields: e => e ? {
    stackTopPadding: e.stackTopPadding,
    stackRightPadding: e.stackRightPadding,
    stackBottomPadding: e.stackBottomPadding,
    stackLeftPadding: e.stackLeftPadding,
    paddingTopVariableId: e.boundVariables?.paddingTop?.id,
    paddingRightVariableId: e.boundVariables?.paddingRight?.id,
    paddingBottomVariableId: e.boundVariables?.paddingBottom?.id,
    paddingLeftVariableId: e.boundVariables?.paddingLeft?.id
  } : null,
  PreviewValue: ({
    nodeFields: e
  }) => e ? jsx(eH, {
    nodeFields: e,
    isPreview: !0
  }) : null,
  DisplayValue: ({
    nodeFields: e
  }) => e ? jsx(eH, {
    nodeFields: e
  }) : null,
  index: 0
}], [L5V.TEXT_STYLE, {
  label: () => _$$t2("dev_handoff.annotations.text_style"),
  category: "text",
  Icon: tc,
  extractNodeFields: e => ({
    inheritedTextStyle: e?.inheritedTextStyle
  }),
  PreviewValue: ({
    nodeFields: e
  }) => e?.inheritedTextStyle ? jsx(tD, {
    styleRef: e.inheritedTextStyle
  }) : null,
  DisplayValue: ({
    nodeFields: e
  }) => e?.inheritedTextStyle ? jsx(e3, {
    styleRef: e.inheritedTextStyle,
    styleType: "TEXT",
    hideIcon: !0
  }) : null,
  index: 0
}], [L5V.FONT_FAMILY, {
  label: () => _$$t2("inspect_panel.typography.font"),
  category: "text",
  Icon: tc,
  extractNodeFields: e => e ? {
    fontNameOrMixed: e.fontNameOrMixed,
    fontFamilyVariable: e.boundVariables.fontFamily?.[0]
  } : null,
  PreviewValue: ({
    nodeFields: e
  }) => e ? jsx(tf, {
    fontNameOrMixed: e.fontNameOrMixed,
    variableAlias: e.fontFamilyVariable,
    isPreview: !0
  }) : null,
  DisplayValue: ({
    nodeFields: e
  }) => e ? jsx(tf, {
    fontNameOrMixed: e.fontNameOrMixed,
    variableAlias: e.fontFamilyVariable
  }) : null,
  index: 0
}], [L5V.FONT_STYLE, {
  label: () => _$$t2("inspect_panel.code.font_style"),
  category: "text",
  Icon: tc,
  extractNodeFields: e => ({
    fontStyle: e?.fontName.style
  }),
  PreviewValue: ({
    nodeFields: e
  }) => jsx(Fragment, {
    children: e?.fontStyle
  }),
  DisplayValue: ({
    nodeFields: e
  }) => jsx(Fragment, {
    children: e?.fontStyle
  }),
  index: 0
}], [L5V.FONT_SIZE, {
  label: () => _$$t2("dev_handoff.annotations.font_size"),
  category: "text",
  Icon: tc,
  extractNodeFields: e => e ? {
    fontSizeOrMixed: e.fontSizeOrMixed,
    fontSizeVariable: e.boundVariables.fontSize?.[0]
  } : null,
  PreviewValue: ({
    nodeFields: e
  }) => e ? jsx(tL, {
    value: e.fontSizeOrMixed,
    variableAlias: e.fontSizeVariable,
    isPreview: !0,
    isTextProperty: !0
  }) : null,
  DisplayValue: ({
    nodeFields: e
  }) => e ? jsx(tL, {
    value: e.fontSizeOrMixed,
    variableAlias: e.fontSizeVariable,
    isTextProperty: !0
  }) : null,
  index: 0
}], [L5V.LINE_HEIGHT, {
  label: () => _$$t2("fullscreen.type_panel.line_height"),
  category: "text",
  Icon: tc,
  extractNodeFields: e => e ? {
    lineHeightOrMixed: e.lineHeightOrMixed,
    lineHeightVariable: e.boundVariables.lineHeight?.[0]
  } : null,
  PreviewValue: ({
    nodeFields: e
  }) => e ? jsx(th, {
    lineHeightOrMixed: e.lineHeightOrMixed,
    variableAlias: e.lineHeightVariable,
    isPreview: !0
  }) : null,
  DisplayValue: ({
    nodeFields: e
  }) => e ? jsx(th, {
    lineHeightOrMixed: e.lineHeightOrMixed,
    variableAlias: e.lineHeightVariable
  }) : null,
  index: 0
}], [L5V.LETTER_SPACING, {
  label: () => _$$t2("fullscreen.type_panel.letter_spacing"),
  category: "text",
  Icon: tc,
  extractNodeFields: e => e ? {
    letterSpacingOrMixed: e.letterSpacingOrMixed,
    letterSpacingVariable: e.boundVariables.letterSpacing?.[0]
  } : null,
  PreviewValue: ({
    nodeFields: e
  }) => e ? jsx(tR, {
    value: e.letterSpacingOrMixed,
    variableAlias: e.letterSpacingVariable,
    isPreview: !0,
    isTextProperty: !0
  }) : null,
  DisplayValue: ({
    nodeFields: e
  }) => e ? jsx(tR, {
    value: e.letterSpacingOrMixed,
    variableAlias: e.letterSpacingVariable,
    isTextProperty: !0
  }) : null,
  index: 0
}], [L5V.TEXT_ALIGN_HORIZONTAL, {
  label: () => _$$t2("dev_handoff.annotations.text_align"),
  category: "text",
  Icon: tc,
  extractNodeFields: e => ({
    textAlign: e?.textAlignHorizontal
  }),
  PreviewValue: ({
    nodeFields: e
  }) => e?.textAlign ? jsx(tu, {
    textAlignHorizontal: e.textAlign
  }) : null,
  DisplayValue: ({
    nodeFields: e
  }) => e?.textAlign ? jsx(tu, {
    textAlignHorizontal: e.textAlign
  }) : null,
  index: 0
}], [L5V.FONT_WEIGHT, {
  label: () => _$$t2("inspect_panel.typography.weight"),
  category: "text",
  Icon: tc,
  extractNodeFields: e => e ? {
    fontWeightOrMixed: e.fontWeightOrMixed,
    fontStyleVariable: e.boundVariables.fontStyle?.[0]
  } : null,
  PreviewValue: ({
    nodeFields: e
  }) => e ? jsx(tg, {
    fontWeightOrMixed: e.fontWeightOrMixed,
    variableAlias: e.fontStyleVariable,
    isPreview: !0
  }) : null,
  DisplayValue: ({
    nodeFields: e
  }) => e ? jsx(tg, {
    fontWeightOrMixed: e.fontWeightOrMixed,
    variableAlias: e.fontStyleVariable
  }) : null,
  index: 0
}], [L5V.FILL, {
  label: () => _$$t2("fullscreen.properties_panel.fill.fill"),
  category: "paint",
  Icon: ({
    nodeId: e
  }) => {
    let t = Fk(t => t.get(e)?.fills, e);
    return t ? jsx(e2, {
      paints: t
    }) : null;
  },
  extractNodeFields: e => e ? {
    fills: e.fills,
    fillVariables: e.boundVariables.fills,
    inheritedFillStyle: e.inheritedFillStyle
  } : null,
  PreviewValue: ({
    nodeFields: e
  }) => e ? jsx(e1, {
    paints: e.fills,
    variables: e.fillVariables,
    styleRef: e.inheritedFillStyle
  }) : null,
  DisplayValue: ({
    nodeFields: e
  }) => e ? jsx(e4, {
    paints: e.fills,
    styleRef: e.inheritedFillStyle,
    variables: e.fillVariables
  }) : null,
  index: 0
}], [L5V.STROKE, {
  label: () => _$$t2("fullscreen.properties_panel.fill.stroke"),
  category: "paint",
  Icon: ({
    nodeId: e
  }) => {
    let t = Fk(t => t.get(e)?.strokePaints.data, e);
    return t ? jsx(e2, {
      paints: t
    }) : null;
  },
  extractNodeFields: e => e ? {
    strokePaints: e.strokePaints,
    strokeVariables: e.boundVariables.strokes,
    inheritedFillStyle: e.inheritedFillStyle,
    inheritedFillStyleForStroke: e.inheritedFillStyleForStroke
  } : null,
  PreviewValue: ({
    nodeFields: e
  }) => e ? jsx(e1, {
    paints: e.strokePaints.data,
    variables: e.strokeVariables,
    styleRef: e.inheritedFillStyle
  }) : null,
  DisplayValue: ({
    nodeFields: e
  }) => e ? jsx(e4, {
    paints: e.strokePaints.data,
    styleRef: e.inheritedFillStyleForStroke,
    variables: e.strokeVariables
  }) : null,
  index: 0
}], [L5V.STROKE_WIDTH, {
  label: () => _$$t2("fullscreen.properties_panel.borders.stroke_width"),
  category: "paint",
  Icon: () => jsx(eO, {
    svg: _$$A1
  }),
  extractNodeFields: e => e ? {
    borderStrokeWeightsIndependent: e.borderStrokeWeightsIndependent,
    strokeWeight: e.strokeWeight,
    strokeWeightVariable: e.boundVariables.strokeWeight?.id,
    borderTopWeight: e.borderTopWeight,
    borderRightWeight: e.borderRightWeight,
    borderBottomWeight: e.borderBottomWeight,
    borderLeftWeight: e.borderLeftWeight,
    strokeTopWeightVariable: e.boundVariables.strokeTopWeight?.id,
    strokeRightWeightVariable: e.boundVariables.strokeRightWeight?.id,
    strokeBottomWeightVariable: e.boundVariables.strokeBottomWeight?.id,
    strokeLeftWeightVariable: e.boundVariables.strokeLeftWeight?.id
  } : null,
  PreviewValue: ({
    nodeFields: e
  }) => e ? jsx(tC, {
    nodeFields: e,
    isPreview: !0
  }) : null,
  DisplayValue: ({
    nodeFields: e
  }) => e ? jsx(tC, {
    nodeFields: e
  }) : null,
  index: 0
}], [L5V.EFFECT, {
  label: () => _$$t2("inspect_panel.code.effect"),
  category: "paint",
  Icon: function () {
    return jsx(eO, {
      svg: _$$A2
    });
  },
  extractNodeFields: e => e ? {
    effects: e.effects.filter(e => e.visible),
    inheritedEffectStyle: e.inheritedEffectStyle
  } : null,
  PreviewValue: ({
    nodeFields: e
  }) => e ? jsx(te, {
    effects: e.effects,
    styleRef: e.inheritedEffectStyle
  }) : null,
  DisplayValue: ({
    nodeFields: e
  }) => e ? jsx(tn, {
    effects: e.effects,
    styleRef: e.inheritedEffectStyle
  }) : null,
  index: 0
}], [L5V.OPACITY, {
  label: () => _$$t2("fullscreen.scrubbable.opacity"),
  category: "paint",
  Icon: () => jsx(eO, {
    svg: _$$A10
  }),
  extractNodeFields: e => e ? {
    opacity: e.opacity,
    opacityVariable: e.boundVariables.opacity?.id
  } : null,
  PreviewValue: ({
    nodeFields: e
  }) => e ? jsx(tI, {
    nodeFields: e,
    isPreview: !0
  }) : null,
  DisplayValue: ({
    nodeFields: e
  }) => e ? jsx(tI, {
    nodeFields: e
  }) : null,
  index: 0
}], [L5V.COMPONENT, {
  label: () => _$$t2("dev_handoff.annotations.component"),
  category: "component",
  Icon: () => jsx(eO, {
    svg: _$$A4
  }),
  extractNodeFields: (e, t) => {
    let n;
    let a = e?.symbolId;
    if (a) {
      let e = t.get(a);
      e && (e.isState && e.parentNode?.name && (n = `${e.parentNode.name} (${e.name})`), n = e.name);
    }
    return {
      symbolName: n
    };
  },
  PreviewValue: ({
    nodeFields: e
  }) => jsx(Fragment, {
    children: e?.symbolName
  }),
  DisplayValue: ({
    nodeFields: e
  }) => jsx(Fragment, {
    children: e?.symbolName
  }),
  index: 0
}]]);
let tA = 0;
function tI({
  nodeFields: e,
  isPreview: t = !1
}) {
  let n = _$$u(e.opacityVariable);
  return n && t ? jsx(Fragment, {
    children: n.name
  }) : jsx(eT, {
    variableContainerClassName: eN,
    valueProps: {
      format: "percent",
      value: e.opacity,
      variableId: n?.node_id
    }
  });
}
function tE({
  nodeFields: e,
  isPreview: t = !1
}) {
  let n = _$$u(e.topLeftRadiusVariable);
  let i = _$$u(e.topRightRadiusVariable);
  let o = _$$u(e.bottomRightRadiusVariable);
  let l = _$$u(e.bottomLeftRadiusVariable);
  return jsx(eV, {
    rawValues: [e.rectangleTopLeftCornerRadius, e.rectangleTopRightCornerRadius, e.rectangleBottomRightCornerRadius, e.rectangleBottomLeftCornerRadius],
    variables: [n, i, o, l],
    isPreview: t
  });
}
function tC({
  nodeFields: e,
  isPreview: t = !1
}) {
  return e.borderStrokeWeightsIndependent ? jsx(tS, {
    nodeFields: e,
    isPreview: t
  }) : jsx(tT, {
    nodeFields: e,
    isPreview: t
  });
}
function tT({
  nodeFields: e,
  isPreview: t
}) {
  let n = _$$u(e.strokeWeightVariable);
  return n && t ? jsx(Fragment, {
    children: n.name
  }) : jsx(eT, {
    variableContainerClassName: eN,
    valueProps: {
      value: e.strokeWeight,
      variableId: n?.node_id,
      format: "pixels"
    }
  });
}
function tS({
  nodeFields: e,
  isPreview: t
}) {
  let n = _$$u(e.strokeTopWeightVariable);
  let i = _$$u(e.strokeRightWeightVariable);
  let o = _$$u(e.strokeBottomWeightVariable);
  let l = _$$u(e.strokeLeftWeightVariable);
  return e ? jsx(eV, {
    rawValues: [e.borderTopWeight, e.borderRightWeight, e.borderBottomWeight, e.borderLeftWeight],
    variables: [n, i, o, l],
    isPreview: t
  }) : null;
}
tk.forEach(e => {
  e.index = tA++;
});
let tP = e => e.toLocaleString("en", {
  maximumFractionDigits: 5,
  useGrouping: !1
});
function tL({
  value: e,
  variableAlias: t,
  isPreview: n,
  isTextProperty: i = !1
}) {
  let o = _$$u(t?.id);
  let l = v4();
  let s = qM(l, "number" == typeof e ? e : void 0, tP, {
    isTextProperty: i
  });
  return null === e ? null : "mixed" === e ? _$$tx("fullscreen.mixed") : o && n ? jsx(Fragment, {
    children: o.name
  }) : jsx(eT, {
    variableContainerClassName: eN,
    valueProps: {
      value: s,
      variableId: o?.node_id
    }
  });
}
function tR({
  value: e,
  variableAlias: t,
  isPreview: n,
  isTextProperty: i = !1
}) {
  let o = _$$u(t?.id);
  let l = v4();
  let s = qM(l, "mixed" === e ? void 0 : e.value, tP, {
    isTextProperty: i
  });
  return "mixed" === e ? _$$tx("fullscreen.mixed") : o && n ? jsx(Fragment, {
    children: o.name
  }) : "PIXELS" === e.units ? jsx(eT, {
    variableContainerClassName: eN,
    valueProps: {
      format: "pixels",
      value: s,
      variableId: o?.node_id
    }
  }) : jsx(eT, {
    variableContainerClassName: eN,
    valueProps: {
      format: "fig_number",
      value: e,
      variableId: o?.node_id
    }
  });
}
function tD({
  styleRef: e
}) {
  let t = f$(e);
  let n = mJ(t);
  return n ? jsx(Fragment, {
    children: n.name
  }) : null;
}
function tO() {
  let e = IL();
  let t = Xr(_$$m);
  let n = !!hA();
  return useCallback((a, i) => {
    l7.user("clear-annotations", () => {
      let o = UN().get(a);
      if (!o) return;
      o.removeAnnotation(i);
      let l = kh(UN(), a);
      e("delete_annotation", {
        nodeId: a,
        nodeType: o.type,
        tlfId: l?.guid,
        isDevModeFocusView: n
      });
      t(null);
      Y5.triggerAction("commit");
    });
  }, [t, e, n]);
}
let tM = "ANNOTATIONS_CONTEXT_MENU";
function tB(e) {
  let {
    nodeId,
    annotationIndex,
    parentRect
  } = e;
  let s = q5();
  let r = wA();
  let c = tO();
  let u = useMemo(() => w3z.isReadOnly(SES.ANNOTATIONS), []);
  let h = _$$R(e => e.mirror.appModel.keyboardShortcuts);
  let f = XR();
  let g = _$$am();
  let x = J2(Ez5.uiState().filterAnnotationCategoryId);
  let m = {
    displayText: _$$t2("dev_handoff.annotations.hide_annotations"),
    shortcut: c1(h, "toggle-show-annotations"),
    callback: () => {
      VU.get("toggle-show-annotations", "context-menu")();
    },
    recordingKey: "hideAnnotations"
  };
  let _ = [{
    displayText: _$$t2("dev_handoff.annotations.copy_link"),
    callback: () => {
      if (null === s) return;
      let e = jN({
        file: s,
        nodeId,
        isDevHandoff: !0
      });
      r(_$$S({
        fileKey: s.key,
        url: e,
        source: _$$d.ANNOTATION_CONTEXT_MENU,
        visualBellMessageOverride: _$$t2("dev_handoff.annotations.copied_link_to_clipboard")
      }));
    },
    recordingKey: "copy"
  }, ...(u ? [] : [{
    displayText: _$$t2("dev_handoff.annotations.delete"),
    callback: () => {
      c(nodeId, annotationIndex);
    },
    recordingKey: "delete"
  }]), ...(f.length > 0 ? [_$$w, {
    displayText: _$$t2("dev_handoff.annotations.filter_by"),
    recordingKey: "filterBy",
    children: [{
      displayText: _$$t2("fullscreen_actions.show-all-annotation-categories"),
      callback: () => {
        g("filter_annotation_category", {
          categoryLabel: "all",
          source: "context_menu"
        });
        Ez5?.uiState().filterAnnotationCategoryId.set(null);
      },
      icon: jsx(_$$y, {
        className: "annotation_context_menu--annotationsCategoryAllIcon--GjsT2"
      }),
      isChecked: !x,
      recordingKey: "showAllAnnotationCategories"
    }, _$$w, ...f.map(e => {
      let t = uA(e);
      return {
        displayText: t,
        displayTextClassName: "annotation_context_menu--annotationCategoryLabel--mWwoF",
        icon: jsx("div", {
          className: "annotation_context_menu--annotationsCategoryIcon--hD0eJ",
          style: {
            backgroundColor: FQ(e) ?? void 0
          }
        }),
        isChecked: e.id === x,
        callback: () => {
          g("filter_annotation_category", {
            categoryLabel: t,
            source: "context_menu"
          });
          Ez5?.uiState().filterAnnotationCategoryId.set(e.id);
        },
        recordingKey: `showAnnotationCategory-${t}`
      };
    })]
  }] : []), ...(f.length > 0 ? [m] : [_$$w, m])];
  return jsx(_$$j, {
    items: _,
    showPoint: !1,
    parentRect,
    onSelectItem: e => e.callback?.(),
    dispatch: r,
    lean: "right",
    leanPadding: 0,
    recordingKey: "viewAnnotationContextMenu"
  });
}
function t2({
  onEnterPressed: e
}) {
  let [t] = DF();
  useEffect(() => Sd(t.registerCommand($$if, n => {
    if (n && n.shiftKey) {
      n.preventDefault();
      return t.dispatchCommand(XK, void 0);
    }
    let a = vJ();
    if (I2(a)) {
      let e = a.anchor.getNode().getParent();
      if (e && Mz(e) || e && HY(e)) return !1;
    }
    e(n ?? void 0);
    return !0;
  }, Jj)), [t, e]);
  return null;
}
let nx = "annotation_categories_edit_window--colorCircle--eQOTM";
let nm = "annotation_categories_edit_window--dragging--N-NqM";
let n_ = "annotation_categories_edit_window--selected---8KFm";
let nb = Symbol("ANNOTATION_CATEGORY_ITEM");
var nj = (e => (e[e.INVALID_LABEL = 0] = "INVALID_LABEL", e[e.INVALID_COLOR = 1] = "INVALID_COLOR", e[e.DUPLICATE_CATEGORIES = 2] = "DUPLICATE_CATEGORIES", e))(nj || {});
let nw = [RN1.YELLOW, RN1.ORANGE, RN1.RED, RN1.PINK, RN1.VIOLET, RN1.BLUE, RN1.TEAL, RN1.GREEN];
function nN(e) {
  return e.preset !== Bll.NONE || null != e.custom && null != e.custom.label && e.custom.label.trim().length > 0 && null != e.custom.color;
}
function nk({
  recordingKey: e,
  index: t,
  isSelected: n,
  isLastItem: o,
  categoryId: l,
  label: s,
  color: r,
  dragging: d,
  shouldFocusLabelInput: c,
  onDrop: u,
  onSelect: p,
  onDragStart: h,
  onDragEnd: f,
  onRemove: g,
  onColorChange: x,
  onLabelChange: m
}) {
  let _ = useRef(null);
  let v = useRef(null);
  let {
    position,
    dragItem
  } = h4({
    type: nb,
    element: _,
    item: {
      categoryId: l
    },
    accept: [nb],
    onStart: h,
    onEnd: f,
    onDrop: e => u(t, e)
  });
  let j = !!dragItem && dragItem.categoryId === l;
  useEffect(() => {
    c && v.current?.focus();
  }, [c]);
  let w = rf(e, "mousedown", () => {
    p(t);
  });
  let N = iQ(e, "focus", () => {
    n || p(t);
  });
  let k = useCallback(e => {
    m(l, e.target.value);
  }, [l, m]);
  let {
    manager,
    getContextMenuTriggerProps,
    getTriggerProps
  } = _$$b({
    offset: {
      mainAxis: 4
    }
  });
  let T = useCallback(e => {
    x(l, e);
  }, [l, x]);
  let S = useMemo(() => d ? position === Nz.BEFORE ? 0 === t ? "annotation_categories_edit_window--withInsertBeforeTop--ie9yH" : "annotation_categories_edit_window--withInsertBefore--ztJQH" : position === Nz.AFTER ? o ? "annotation_categories_edit_window--withInsertAfterBottom--BPiPN" : "annotation_categories_edit_window--withInsertAfter--Jg20i" : null : null, [d, position, t, o]);
  let [P, L] = useState(!1);
  let {
    getTriggerProps: _getTriggerProps,
    getContainerProps,
    getArrowProps
  } = fP({
    type: "dialog",
    isOpen: P,
    onOpenChange: L
  });
  return jsxs(_$$S2.recordableDiv, {
    forwardedRef: _,
    onMouseDown: w,
    onFocus: N,
    className: A()("annotation_categories_edit_window--draggableRowContainer--Apval", S, {
      [nm]: j,
      [n_]: n
    }),
    recordingKey: e,
    dataTestId: e,
    children: [jsx(_$$B, {
      className: "annotation_categories_edit_window--grabber--mQN70",
      svg: _$$A15
    }), jsxs(bL, {
      manager,
      children: [jsx(_$$E, {
        className: A()("annotation_categories_edit_window--colorSelectTrigger--AJgOU", {
          "annotation_categories_edit_window--active---7kjY": manager.isOpen
        }),
        recordingKey: Pt(e, "colorSelectTrigger"),
        ...getTriggerProps({}),
        "aria-label": r ? _$$t2("dev_handoff.annotations.categories_edit_window.category_color_selector.aria_label", {
          color: r.label()
        }) : _$$t2("dev_handoff.annotations.categories_edit_window.category_color_tooltip"),
        htmlAttributes: {
          ...getContextMenuTriggerProps(),
          "data-tooltip-type": "text",
          "data-tooltip-show-above": !0,
          "data-tooltip": _$$t2("dev_handoff.annotations.categories_edit_window.category_color_tooltip")
        },
        children: jsxs("div", {
          className: "annotation_categories_edit_window--triggerContainer--ksQQB",
          children: [jsx("div", {
            className: A()(nx, {
              "annotation_categories_edit_window--noCategoryColor--TOAMH": !r
            }),
            style: {
              backgroundColor: r?.color
            }
          }), jsx(_$$B, {
            className: "annotation_categories_edit_window--caret--7QFy-",
            svg: _$$A14
          })]
        })
      }), jsx(mc, {
        className: "annotation_categories_edit_window--colorOptions--n--Hk",
        children: nw.map(e => jsx(q7, {
          onClick: () => T(e),
          className: A()("annotation_categories_edit_window--colorOption--24Kum", {
            [n_]: r?.color === yu[e].color
          }),
          children: jsx("div", {
            className: nx,
            style: {
              backgroundColor: yu[e].color
            }
          })
        }, e))
      })]
    }), jsx("div", {
      className: "annotation_categories_edit_window--labelInputContainer--dR-Yp",
      children: jsx(jT, {
        ref: v,
        value: s ?? "",
        className: "annotation_categories_edit_window--labelInput--vtlaI",
        onChange: k,
        recordingKey: Pt(e, "labelInput"),
        placeholder: _$$t2("dev_handoff.annotations.categories_edit_window.category_label_placeholder")
      })
    }), jsxs("div", {
      className: "annotation_categories_edit_window--removeButtonContainer--PPynD",
      children: [jsx(_$$K, {
        "aria-label": _$$t2("dev_handoff.annotations.categories_edit_window.remove_category_button_label", {
          category: s ?? ""
        }),
        htmlAttributes: {
          "data-tooltip": _$$t2("dev_handoff.annotations.categories_edit_window.remove_category_button"),
          "data-tooltip-type": "text"
        },
        recordingKey: Pt(e, "removeButton"),
        ..._getTriggerProps({}),
        children: jsx(_$$O, {})
      }), jsxs(_$$mc2, {
        ...getContainerProps({
          style: {
            width: "calc(320rem / 16)"
          }
        }),
        children: [jsx(i3, {
          ...getArrowProps()
        }), jsxs(vo, {
          children: [jsx(Y9, {
            children: jsx(hE, {
              children: _$$t2("dev_handoff.annotations.categories_edit_window.remove_category_dialog_title")
            })
          }), jsx(_$$nB, {
            children: _$$t2("dev_handoff.annotations.categories_edit_window.remove_category_dialog_body")
          }), jsx(wi, {
            children: jsxs(jk, {
              children: [jsx($n, {
                variant: "secondary",
                recordingKey: Pt(e, "removeCategoryCancel"),
                onClick: () => L(!1),
                children: _$$t2("general.cancel")
              }), jsx($n, {
                variant: "destructive",
                recordingKey: Pt(e, "removeCategoryConfirm"),
                onClick: () => {
                  g(l);
                  L(!1);
                },
                children: _$$t2("general.delete")
              })]
            })
          })]
        })]
      })]
    })]
  });
}
let nA = Ju(function (e) {
  let t = IL();
  let {
    open,
    onClose,
    recordingKey
  } = e;
  let r = hS({
    open,
    onClose
  });
  let d = XR();
  let c = mi();
  let [u, p] = useState([]);
  let [h, f] = useState({});
  let [g, x] = useState([]);
  let [m, _] = useState([]);
  useEffect(() => {
    d && (p(d.map(e => e.id)), f(d.reduce((e, t) => (e[t.id] = t, e), {})));
  }, [d]);
  let v = useMemo(() => {
    let e = new Set(Object.values(h).map(e => e.preset === Bll.NONE ? e.custom?.color : AP(e.preset)).filter(isNotNullish));
    return nw.find(t => !e.has(t)) ?? RN1.GREEN;
  }, [h]);
  let [y, b] = useState(null);
  useEffect(() => {
    b(function (e) {
      let t = new Set();
      for (let n of e) if (t.add(`${n.preset}-${n.custom?.label}-${n.custom?.color}`), n.preset === Bll.NONE && null != n.custom) {
        if (null == n.custom.label || 0 === n.custom.label.trim().length) return {
          type: 0,
          message: _$$t2("dev_handoff.annotations.category_custom.invalid_label")
        };
        if (null == n.custom.color) return {
          type: 1,
          message: _$$t2("dev_handoff.annotations.category_custom.invalid_color")
        };
      }
      return t.size !== e.length ? {
        type: 2,
        message: _$$t2("dev_handoff.annotations.categories_edit_window.duplicate_categories_message")
      } : null;
    }(u.map(e => h[e]).filter(isNotNullish)));
  }, [h, u]);
  let [w, N] = useState(null);
  let k = useCallback(e => {
    -1 === e ? N(null) : N(u[e] ?? null);
  }, [u]);
  let I = useRef(null);
  let [C, T] = useState(!1);
  let [S, P] = useState(null);
  let L = useCallback(() => {
    P(null);
    T(!0);
  }, []);
  let R = useCallback(() => {
    T(!1);
  }, []);
  let D = useCallback((e, n) => {
    let {
      dragItem,
      position
    } = n;
    let l = u.indexOf(dragItem.categoryId);
    position === Nz.BEFORE ? p(t => [...t.slice(0, e), dragItem.categoryId, ...t.slice(e)].filter((t, n) => t !== dragItem.categoryId || n === e)) : p(t => [...t.slice(0, e + 1), dragItem.categoryId, ...t.slice(e + 1)].filter((t, n) => t !== dragItem.categoryId || n === e + 1));
    let s = h[dragItem.categoryId];
    s && t("reorder_annotation_category", {
      category: s.preset === Bll.NONE ? s.custom?.label ?? null : h9(s.preset),
      oldRank: l,
      newRank: e
    });
    P(dragItem.categoryId);
    T(!1);
  }, [h, u, t]);
  let O = rf("editCategoriesModal", "mousedown", e => {
    e.target === I.current && k(-1);
  }, {
    includeTarget: !0
  });
  let M = useCallback(() => {
    let e = {
      id: fO(UN()),
      preset: Bll.NONE,
      custom: {
        label: "",
        color: v
      }
    };
    x(t => [...t, e.id]);
    p(t => [...t, e.id]);
    f(t => ({
      ...t,
      [e.id]: e
    }));
    N(e.id);
    P(e.id);
  }, [v]);
  let F = useCallback(e => {
    if (g.includes(e)) x(t => t.filter(t => t !== e));else {
      let t = h[e];
      t && _(e => [...e, t.preset === Bll.NONE ? t.custom?.label ?? "" : h9(t.preset)]);
    }
    p(t => t.filter(t => t !== e));
    f(t => {
      let {
        [e]: e,
        ...a
      } = t;
      return a;
    });
  }, [g, h]);
  let z = useCallback((e, n) => {
    let a = h[e];
    a && (f(t => ({
      ...t,
      [e]: {
        ...a,
        preset: Bll.NONE,
        custom: {
          ...(a.preset === Bll.NONE ? a.custom : {
            label: h9(a.preset),
            color: AP(a.preset)
          }),
          color: n
        }
      }
    })), t("edit_annotation_category_color", {
      category: a.preset === Bll.NONE ? a.custom?.label ?? null : h9(a.preset),
      newColor: n,
      oldColor: a.preset === Bll.NONE ? a.custom?.color : AP(a.preset)
    }));
  }, [h, t]);
  let H = useCallback((e, n) => {
    let a = h[e];
    a && (f(t => ({
      ...t,
      [e]: {
        ...a,
        preset: Bll.NONE,
        custom: {
          ...(a.preset === Bll.NONE ? a.custom : {
            label: h9(a.preset),
            color: AP(a.preset)
          }),
          label: n
        }
      }
    })), t("edit_annotation_category_name", {
      newCategory: n,
      oldCategory: a.preset === Bll.NONE ? a.custom?.label : h9(a.preset)
    }));
  }, [h, t]);
  let W = useCallback(() => {
    onClose();
  }, [onClose]);
  let G = useCallback(() => {
    if (y) return;
    let e = u.map(e => h[e]).filter(nN).map(e => e.preset === Bll.NONE ? {
      ...e,
      custom: e.custom ? {
        ...e.custom,
        label: e.custom.label.trim()
      } : null
    } : e);
    if (e.length === d.length && e.every((e, t) => {
      let n = d[t];
      return !!n && e.id === n.id && e.preset === n.preset && e.custom?.label === n.custom?.label && e.custom?.color === n.custom?.color;
    })) {
      onClose();
      return;
    }
    g.forEach(e => {
      let n = h[e];
      n && t("add_annotation_category", {
        categoryLabel: n.custom?.label ?? null
      });
    });
    m.forEach(e => {
      t("delete_annotation_category", {
        categoryLabel: e
      });
    });
    c(e);
    onClose();
  }, [y, u, d, c, onClose, h, g, m, t]);
  return jsx(_$$bL2, {
    width: "md",
    manager: r,
    htmlAttributes: {
      "data-testid": "annotation-categories-edit-window-root"
    },
    children: jsxs(vo, {
      children: [jsxs(Y9, {
        children: [jsx(hE, {
          children: _$$tx("dev_handoff.annotations.categories_edit_window.title")
        }), jsx(jk, {
          children: jsx(_$$K, {
            recordingKey: Pt(recordingKey, "addCategory"),
            "aria-label": _$$t2("dev_handoff.annotations.categories_edit_window.add_category_button"),
            onClick: M,
            children: jsx(_$$x, {})
          })
        })]
      }), jsx(_$$nB, {
        padding: 0 === u.length ? void 0 : 0,
        children: u.length > 0 ? jsx(hh, {
          children: jsx("div", {
            onMouseDown: O,
            ref: I,
            className: A()({
              [nm]: C
            }),
            children: u.map((e, t) => {
              let n = h[e];
              return n ? jsx(nk, {
                categoryId: e,
                color: n.preset === Bll.NONE ? n.custom?.color !== void 0 ? yu[n.custom.color] : void 0 : Lw(n.preset),
                dragging: C,
                index: t,
                isLastItem: t === u.length - 1,
                isSelected: w === e,
                label: n.preset === Bll.NONE ? n.custom?.label : h9(n.preset),
                onColorChange: z,
                onDragEnd: R,
                onDragStart: L,
                onDrop: D,
                onLabelChange: H,
                onRemove: F,
                onSelect: k,
                recordingKey: Pt(recordingKey, "annotationCategoryItem", t),
                shouldFocusLabelInput: S === e
              }, e) : null;
            })
          })
        }) : jsx("div", {
          className: "annotation_categories_edit_window--noCategoriesMessage--haAE-",
          children: _$$tx("dev_handoff.annotations.categories_edit_window.no_categories_message")
        })
      }), jsx(wi, {
        children: jsxs(jk, {
          children: [jsx($n, {
            variant: "secondary",
            onClick: W,
            recordingKey: Pt(recordingKey, "cancel"),
            children: _$$tx("general.cancel")
          }), jsx($n, {
            onClick: G,
            disabled: !!y,
            recordingKey: Pt(recordingKey, "done"),
            htmlAttributes: y ? {
              "data-tooltip-type": "text",
              "data-tooltip": y.message
            } : {},
            children: _$$tx("general.done")
          })]
        })
      })]
    })
  });
});
var nE = (e => (e[e.MANUAL = 0] = "MANUAL", e[e.CODEBASE_SUGGESTIONS = 1] = "CODEBASE_SUGGESTIONS", e[e.MANAGED_STRING = 2] = "MANAGED_STRING", e))(nE || {});
var nC = (e => (e[e.ALIGNED = 0] = "ALIGNED", e[e.ABOVE = 1] = "ABOVE", e[e.BELOW = 2] = "BELOW", e))(nC || {});
let nR = _$$eU(new Map());
_$$eU(null, (e, t, {
  nodeId: n,
  suggestions: a
}) => {
  let i = new Map(e(nR));
  0 === a.length ? i.$$delete(n) : i.set(n, a);
  t(nR, i);
});
let nD = {
  nodeSuggestionsByTlf: new Map(),
  nodeSuggestionsByGuid: new Map()
};
function nB({
  nodeId: e,
  nodeFields: t,
  isFadedOut: n,
  suggestions: i
}) {
  let o = uQ() === e;
  let l = e => {
    e && (wr(), _$$S3("annotations"), Dh([e]));
  };
  let s = i.slice(0, 3).map(e => e.name).join(", ");
  return jsxs(D8, {
    className: A()(er, eh, {
      [ek]: o,
      [eg]: n
    }),
    role: "button",
    tabIndex: 0,
    onMouseDown: () => {
      o || (t.firstChildGuid ? l(t.firstChildGuid) : l(e));
    },
    "data-testid": "annotationDisplay",
    recordingKey: `viewAnnotationContainer-${t.name}`,
    children: [jsx("div", {
      className: "annotation--codeConnectIcon--nFdfw",
      children: jsx(_$$s, {})
    }), jsx("div", {
      className: "annotation--codeConnectLabel--Pd3TS",
      children: jsx("span", {
        className: "annotation--codeConnectLabelName--d-Hdu",
        children: s
      })
    })]
  });
}
let nF = {
  type: nE.CODEBASE_SUGGESTIONS,
  useSharedHooksContext: () => function () {
    let e = md(nR);
    let t = _$$eY();
    if (!getFeatureFlags().dt_ccv2_on_canvas) return nD;
    let n = new Map();
    let a = new Map();
    for (let [i, o] of e.entries()) {
      let e = t.get(i);
      if (!e) continue;
      let l = e.findContainingTopLevelFrameOrSelf();
      let s = {
        nodeId: i,
        node: e,
        tlfGuid: l,
        possibleSuggestions: o
      };
      n.set(i, s);
      l && (a.has(l) || a.set(l, []), a.get(l)?.push(s));
    }
    return {
      nodeSuggestionsByTlf: a,
      nodeSuggestionsByGuid: n
    };
  }(),
  useRelevantTLFs: ({
    nodeSuggestionsByTlf: e
  }) => Array.from(e.keys()),
  useNewAnnotationsByTlf(e, {
    nodeSuggestionsByTlf: t
  }) {
    let n = {};
    for (let [e, a] of t.entries()) n[e] = a.map(e => ({
      nodeId: e.nodeId,
      uniqueId: `${e.nodeId}-codebase-suggestions`,
      annotationType: nE.CODEBASE_SUGGESTIONS,
      meta: {
        nodeSuggestions: e.possibleSuggestions
      }
    }));
    return n;
  },
  annotationWrapperClassName: "annotation--annotationWrapperCodebaseSuggestions--1G1LW",
  AnnotationDisplayOverride({
    nodeInfo: e,
    isFadedOut: t
  }) {
    var n;
    n = e.nodeId;
    let i = _$$wA((e, t) => {
      let n = e.get(t);
      return n ? {
        firstChildGuid: n.childrenNodes[0]?.guid,
        tlfNodeId: n.findContainingTopLevelFrameOrSelf(),
        type: n.type,
        name: n.name
      } : null;
    }, n);
    return i ? jsx(nB, {
      nodeId: e.nodeId,
      nodeFields: i,
      isFadedOut: t,
      suggestions: e.meta.nodeSuggestions
    }) : null;
  }
};
let nU = Iz(e => mg(_$$eU(t => {
  if (!e) return null;
  let n = t(Mk[PW.MANAGED_STRING].local);
  let a = t(Mk[PW.MANAGED_STRING].subscribed);
  return n[e] ?? a[e] ?? null;
}), e => e));
let nK = {
  type: nE.MANAGED_STRING,
  useSharedHooksContext() {
    let e = d4(e => e.mirror.appModel.currentPage);
    let t = m0();
    return _$$wA((e, t, n) => getFeatureFlags().cheddar && getFeatureFlags().cheddar_annotations && n ? (e.get(t) ? qT(e, t) : []).reduce((e, t) => {
      let n = function e(t) {
        return t.childrenNodes.flatMap(t => {
          if (t.visible) {
            if (go(t)) {
              let e = function (e) {
                let t = gk(e);
                return t ? {
                  managedStringId: t.value.managedStringId
                } : null;
              }(t);
              if (!e) return;
              return {
                annotationType: nE.MANAGED_STRING,
                nodeId: t.guid,
                uniqueId: `${t.guid}-${oW.toString(e.managedStringId)}`,
                meta: {
                  ...e
                }
              };
            }
            return e(t);
          }
        }).filter(isNotNullish);
      }(t);
      return n.length > 0 ? {
        ...e,
        [t.guid]: n
      } : e;
    }, {}) : {}, e, t);
  },
  useRelevantTLFs: e => Object.keys(e),
  useNewAnnotationsByTlf: (e, t) => e.reduce((e, n) => ({
    ...e,
    [n]: t[n] || []
  }), {}),
  annotationWrapperClassName: "annotation--annotationWrapperManagedString--RTskR",
  AnnotationDisplayOverride({
    nodeInfo: e,
    isFadedOut: t
  }) {
    let n = uQ() === e.nodeId;
    let i = function (e) {
      let t = md(nU(e));
      return t?.managedStringData.key;
    }(e.meta.managedStringId);
    return i ? jsx(nX, {
      isFadedOut: t,
      isSelected: n,
      nodeId: e.nodeId,
      stringKey: i
    }) : null;
  }
};
function nX({
  isFadedOut: e,
  isSelected: t,
  nodeId: n,
  stringKey: i
}) {
  let l = wA();
  let s = hC();
  let r = e => {
    e && (wr(), _$$S3("annotations"), Dh([e]), _$$tw()?.getCopy() !== _gJ.STRING_MANAGEMENT && _$$ax(_gJ.STRING_MANAGEMENT));
  };
  return jsxs("div", {
    className: A()(er, eh, {
      [ek]: t,
      [eg]: e
    }),
    children: [jsx(_$$E, {
      onClick: () => r(n),
      className: A()(eC, "annotation--managedStringLabel--fWb5O"),
      children: i
    }), jsx(nJ, {
      "aria-label": _$$t2("inspect_panel.copy"),
      onClick: () => {
        s("string_management.annotations.copy_key", {
          stringKey: i,
          nodeId: n
        });
        navigator.clipboard.writeText(i).then(() => {
          l(_$$F.enqueue({
            message: _$$t2("string_translation_management.copied_to_clipboard", {
              stringKey: i
            })
          }));
        });
      },
      htmlAttributes: {
        "data-tooltip-type": Ib.TEXT,
        "data-tooltip": _$$t2("general.back")
      },
      children: jsx(_$$O2, {})
    })]
  });
}
let nJ = forwardRef(({
  children: e,
  variant: t,
  ...n
}, i) => jsx(_$$E, {
  ref: i,
  ...n,
  className: A()(eC, "annotation--iconButton--w7kfn", "annotation--ghost--thK4p"),
  children: jsx("span", {
    "aria-hidden": !0,
    className: ey,
    children: e
  })
}));
nJ.displayName = "IconButton";
let nQ = [nF, nK];
let nq = nQ.reduce((e, t) => ("type" in t && (e[t.type] = t), e), {});
let nY = parsePxNumber("15px");
let nZ = memo(function ({
  lineWidth: e,
  lineHeight: t,
  lineAlignment: n,
  isLeftAligned: i,
  isMinimized: o
}) {
  let l = "";
  let s = Math.min(20, e);
  let r = Math.min(20, t);
  n === nC.ALIGNED ? l = `M 0 ${t / 2} h ${e}` : n === nC.ABOVE ? l = i ? `
        M 0 0
        h ${e - s}
        q ${s} 0 ${s} ${r}
        v ${t - r}
      ` : `
        M ${e} 0
        h -${e - s}
        q -${s} 0 -${s} ${r}
        v ${t - r}` : n === nC.BELOW && (l = i ? `
        M 0 ${t}
        h ${e - s}
        q ${s} 0 ${s} -${r}
        v -${t - r}
      ` : `
        M ${e} ${t}
        h -${e - s}
        q -${s} 0 -${s} -${r}
        v -${t - r}
      `);
  return jsx("svg", {
    width: e + 2 * nY,
    height: t + 2 * nY,
    className: A()(ec, {
      "annotation--annotationLineLeftAligned--W-1DZ": i,
      "annotation--annotationLineBelowNode--JeafT": n === nC.BELOW
    }),
    children: jsxs("g", {
      transform: `translate(${nY}, ${nY})`,
      children: [o && jsxs(Fragment, {
        children: [jsx("circle", {
          className: "annotation--annotationLineStartDot--x6RNc",
          cx: i ? -6 : e + 6,
          cy: n === nC.ABOVE ? 0 : t,
          r: 4,
          strokeWidth: "4"
        }), jsx("circle", {
          className: "annotation--annotationLineStartInnerDot--aw58q",
          cx: i ? -6 : e + 6,
          cy: n === nC.ABOVE ? 0 : t,
          r: 1,
          strokeWidth: "0"
        })]
      }), jsx("path", {
        d: l,
        strokeWidth: "var(--line-width-scale)",
        fill: "none",
        strokeDasharray: "calc(var(--line-width-scale) * 3) calc(var(--line-width-scale) * 2)"
      }), jsx("circle", {
        className: eu,
        cx: i ? e : 0,
        cy: n === nC.ABOVE ? t : 0,
        strokeWidth: "0"
      })]
    })
  });
});
function n$({
  nodeId: e,
  annotationId: t,
  setDimensions: n,
  isAnnotationFocused: d,
  annotationType: c,
  lineColor: p,
  children: h,
  offsetX: f,
  offsetY: g,
  lineWidth: x,
  lineHeight: m,
  lineAlignment: v,
  isLeftAligned: b,
  shouldMinimize: j,
  shouldDelayHover: w,
  shouldHide: N,
  isEditingAnnotation: k,
  isInCentralTLF: I
}) {
  let C = IL();
  let T = useRef(null);
  let [P, L] = useState(!1);
  let R = LZ();
  let D = dH();
  let O = uQ();
  let M = O === e;
  let {
    data
  } = BK(tM);
  let F = data?.annotationId === t;
  let [z] = _$$A16(P, 60);
  let V = M || F || (w ? P && (z || j) : P);
  let H = md(_$$m);
  let W = _$$wA((e, t) => {
    let n = e.get(t);
    return n ? {
      annotationsLength: n.annotations.length,
      nodeType: n.type,
      absoluteBoundingBox: n.absoluteBoundingBox
    } : null;
  }, e);
  wY(j ? void 0 : T, e => {
    e && n(t, e);
  });
  let {
    annotationsLength,
    nodeType
  } = W ?? {};
  let K = D === NLJ.ANNOTATE && !P && null !== O && O !== e;
  let X = j && !k && !d && !P;
  let J = useCallback(() => {
    null === H && (Uc(e), X && !P && C("hover_minimized_annotation", {
      nodeId: e,
      nodeType
    }), L(!0));
  }, [H, e, nodeType, X, P, C]);
  let Q = useCallback(() => {
    L(!1);
  }, []);
  let q = !N;
  c === nE.MANUAL && (q = k || q && (M || !!annotationsLength));
  let Y = useMemo(() => {
    let e = {
      transform: `translate(${f}px, calc(${g}px - 50%))`,
      zIndex: I && !V ? 10 : void 0
    };
    return (!M || k) && p ? {
      ...e,
      "--annotation-line-color": p,
      "--annotation-dot-border-color": p
    } : e;
  }, [f, g, M, k, p, I, V]);
  return jsx("div", {
    className: A()("annotation--annotationWrapper--pKMw2", nq[c]?.annotationWrapperClassName, {
      "annotation--wrapperMinimized--UOExu": X && !P,
      [ed]: k,
      "annotation--annotationWrapperSelected--ffb0X": M,
      annotationWrapperForcedHover: V || d && !k,
      "annotation--transitionScaling--eD821": P !== z && !d && !k,
      "annotation--shouldHideEmptyAnnotations--WXr4h": getFeatureFlags().dt_component_annotations
    }),
    style: Y,
    "data-testid": "annotationWrapper",
    children: q && jsxs(Fragment, {
      children: [jsx(nZ, {
        lineWidth: x,
        lineHeight: m,
        lineAlignment: v,
        isLeftAligned: b,
        isMinimized: X
      }), jsxs("div", {
        ref: T,
        onMouseOut: Q,
        onMouseOver: J,
        className: A()({
          "annotation--annotationLeftAligned--FHQRp": b,
          "annotation--annotationRightAligned--VrH8e": !b
        }),
        "data-testid": `annotation-${t}`,
        children: [jsx("div", {
          className: A()("annotation--annotationHoverTarget--4y3Xc", {
            "annotation--annotationHoverTargetLeftAligned--G1twU": b
          })
        }), R && (!X || P) && h(K)]
      })]
    })
  });
}
let n1 = Fu("has_opened_annotation_visibility_learn_more_link");
function n2({
  nodeId: e,
  annotationId: t,
  viewportInfo: n,
  setDimensions: l,
  annotationIndex: r,
  offsetX: d,
  offsetY: c,
  lineWidth: p,
  lineHeight: f,
  lineAlignment: x,
  isLeftAligned: m
}) {
  let v = function () {
    let e = IL();
    let {
      Sprig
    } = useSprigWithSampling();
    let n = !!hA();
    let a = m0();
    let o = Em();
    let l = XR();
    return useCallback((i, s, r, d) => {
      l7.user(r ? "edit-annotation" : "create-annotation", () => {
        r ? i.updateAnnotation(d, s) : i.addAnnotation(s);
        let c = kh(UN(), i.guid);
        let u = s.categoryId ? l.find(e => e.id === s.categoryId) : null;
        let p = {
          nodeType: i.type,
          nodeId: i.guid,
          tlfId: c?.guid ?? i.guid,
          hasText: !!s.label,
          numProperties: s.properties.length,
          isDevModeFocusView: n,
          isDevMode: a,
          isDesignMode: o,
          category: u ? uA(u) : void 0,
          annotationId: d
        };
        r ? e("edit_annotation", p) : (e("create_annotation", p), Sprig("track", "create_annotation", {
          isDevMode: a,
          isDevModeFocusView: n,
          isDesignMode: o
        }));
        Y5.triggerAction("commit");
      });
    }, [Sprig, e, n, a, o, l]);
  }();
  let y = tO();
  let b = Xr(_$$m);
  let j = _$$wA((e, t) => e.get(t)?.annotations, e);
  let w = XR({
    initializeIfNull: !0
  });
  let N = j?.[r];
  let [k, A] = useState(N?.label ?? "");
  let [I, C] = useState(N?.properties ?? []);
  let [T, S] = useState(() => N ? w.find(e => e.id === N.categoryId)?.id ?? null : null);
  let P = useMemo(() => {
    if (!T) return null;
    let e = w.find(e => e.id === T);
    return e ? FQ(e) : null;
  }, [T, w]);
  useEffect(() => {
    T && S(w.find(e => e.id === T)?.id ?? null);
  }, [w, T]);
  let L = useCallback(() => {
    let n = !!N && ("" !== N.label || N.properties.length > 0 || null !== T);
    let a = 0 === ("lexical" === j_(k) ? El(k) : At(k)).length;
    if (a && 0 === I.length && null === T) N && y(e, r);else {
      let i = UN().get(e);
      i && (v(i, {
        label: a ? "" : k,
        properties: I,
        categoryId: T
      }, n, r), Ez5?.editorState().focusedAnnotationId.set(t));
    }
    b(null);
  }, [N, k, I, b, y, e, r, v, T, t]);
  return jsxs(Fragment, {
    children: [jsx(n7, {
      viewportInfo: n,
      onPointerDown: L
    }), jsx(n$, {
      annotationId: t,
      annotationType: nE.MANUAL,
      isAnnotationFocused: !0,
      isEditingAnnotation: !0,
      isLeftAligned: m,
      lineAlignment: x,
      lineColor: P ?? void 0,
      lineHeight: f,
      lineWidth: p,
      nodeId: e,
      offsetX: d,
      offsetY: c,
      setDimensions: l,
      shouldDelayHover: !1,
      shouldHide: !1,
      shouldMinimize: !1,
      children: () => jsx(n5, {
        nodeId: e,
        saveAnnotation: L,
        inputText: k,
        setInputText: A,
        inputProperties: I,
        setInputProperties: C,
        categoryId: T,
        setInputCategoryId: S,
        annotationIndex: r
      })
    }, t)]
  });
}
function n5({
  nodeId: e,
  saveAnnotation: t,
  inputText: n,
  setInputText: r,
  inputProperties: d,
  setInputProperties: c,
  categoryId: u,
  setInputCategoryId: f,
  annotationIndex: x
}) {
  let m = wA();
  let {
    Sprig
  } = useSprigWithSampling();
  let y = IL();
  let b = Em();
  let j = !!hA();
  let w = m0();
  let {
    Dropdown,
    isDropdownShown,
    dropdownTargetRef,
    toggleDropdown
  } = _$$B2("annotation-category-selector-dropdown");
  let {
    Dropdown: _Dropdown,
    isDropdownShown: _isDropdownShown,
    dropdownTargetRef: _dropdownTargetRef,
    toggleDropdown: _toggleDropdown
  } = _$$B2("annotation-property-selector-dropdown");
  let D = tO();
  let O = useRef(null);
  let M = XR();
  let F = Fk((e, t) => e.get(t)?.type || null, e);
  let z = _$$wA((e, t, n) => {
    let a = {};
    let i = e.get(t);
    if (i) for (let e of n) _$$J3(i, e.type, !0) && (a[e.type] = !0);
    return a;
  }, e, n3);
  let {
    availableProperties,
    selectedProperties
  } = useMemo(() => {
    let e = [];
    let t = [];
    for (let n of n3) d.some(e => e.type === n.type) ? t.push(n) : z[n.type] && e.push(n);
    return {
      availableProperties: e,
      selectedProperties: t
    };
  }, [d, z]);
  let J = _$$wA((e, t, n) => {
    let a = e.get(t);
    return n.map(t => t.config.extractNodeFields(a, e));
  }, e, availableProperties);
  useEffect(() => {
    y("show_annotation_dialog", {
      nodeId: e,
      nodeType: F
    });
  }, [y, F, e]);
  let Q = useCallback(() => {
    O.current?.focus();
  }, []);
  let q = useCallback(e => {
    c([...d, {
      type: e
    }]);
  }, [c, d]);
  function Y(e) {
    c(d.filter(t => t.type !== e));
    Q();
  }
  let Z = useCallback(t => {
    let a = UN().get(e);
    let i = u ? M.find(e => e.id === u) : null;
    let l = i ? uA(i) : null;
    let s = t ? M.find(e => e.id === t) : null;
    let r = s ? uA(s) : null;
    if (a) {
      let e = kh(UN(), a.guid);
      y("select_annotation_category", {
        nodeId: a.guid,
        nodeType: a.type,
        tlfId: e?.guid ?? a.guid,
        hasText: !!n,
        numProperties: d.length,
        isDevModeFocusView: j,
        isDevMode: w,
        isDesignMode: b,
        newCategoryLabel: r,
        oldCategoryLabel: l,
        isPreset: s ? s.preset !== Bll.NONE : null,
        annotationId: x
      });
      Sprig("track", "select_annotation_category", {
        isDevMode: w,
        isDevModeFocusView: j,
        isDesignMode: b
      });
    }
    f(t);
  }, [f, y, e, n, d, j, w, b, M, u, Sprig, x]);
  let [$, ee] = useState(!1);
  let en = useHandleKeyboardEvent("createAnnotation", "keydown", useCallback(e => {
    if (!isDropdownShown && !_isDropdownShown) {
      if ("Escape" === e.key) t();else if ("ArrowDown" === e.key) {
        let t = e.ctrlKey || e.metaKey;
        let n = e.shiftKey;
        t && !n && (ee(!0), _toggleDropdown());
      }
    }
  }, [isDropdownShown, _isDropdownShown, t, _toggleDropdown]));
  useEffect(() => (document.addEventListener("keydown", en), () => {
    document.removeEventListener("keydown", en);
  }), [en]);
  let ea = qP("annotationLabelInput", "submit", r);
  let ei = _$$v_("annotationLabelInput", "keydown", e => {
    e?.stopPropagation();
    t();
  });
  let eo = useCallback(({
    html: e,
    lexical: t
  }) => {
    ea(getFeatureFlags().ext_lexical_markdown_annotations ? t : e);
  }, [ea]);
  let el = useCallback(t => {
    if (t.stopPropagation(), t.preventDefault(), !isDropdownShown) {
      let t = UN().get(e);
      if (t) {
        let e = kh(UN(), t.guid);
        y("click_annotation_category_picker", {
          nodeId: t.guid,
          nodeType: t.type,
          tlfId: e?.guid ?? t.guid,
          hasText: !!n,
          numProperties: d.length,
          isDevModeFocusView: j,
          annotationId: x
        });
        Sprig("track", "click_annotation_category_picker", {
          isDevMode: w,
          isDevModeFocusView: j,
          isDesignMode: b
        });
      }
    }
    toggleDropdown();
  }, [isDropdownShown, toggleDropdown, n, d, j, w, b, e, y, x, Sprig]);
  let es = useMemo(() => M.map(e => ({
    id: e.id,
    label: uA(e),
    color: FQ(e)
  })) ?? [], [M]);
  let er = useMemo(() => M.find(e => e.id === u), [M, u]);
  let ed = useRef(null);
  let ec = ed.current && ed.current.scrollHeight > ed.current.clientHeight;
  let eu = {
    "--annotation-category-color": er ? FQ(er) ?? "var(--color-bg)" : "var(--color-bg)"
  };
  let eg = useCallback(() => {
    y("click_edit_annotation_categories", {
      nodeId: e,
      nodeType: F,
      isDevModeFocusView: j
    });
    m(_$$to({
      type: nA,
      data: {
        recordingKey: "annotationCategoriesEditWindow"
      }
    }));
  }, [m, y, e, F, j]);
  let e_ = q5();
  let ev = useCallback(() => {
    if (null === e_) return;
    let t = jN({
      file: e_,
      nodeId: e,
      isDevHandoff: w
    });
    m(_$$S({
      fileKey: e_.key,
      url: t,
      source: _$$d.ANNOTATION_CONTEXT_MENU,
      visualBellMessageOverride: _$$t2("dev_handoff.annotations.copied_link_to_clipboard")
    }));
  }, [m, e_, e, w]);
  let ey = useMemo(() => ({
    name: "no-category",
    icon: jsx("div", {
      className: eE,
      children: jsx("div", {
        className: A()(eA, "annotation--noCategoryColor--fYEUj")
      })
    }),
    displayText: _$$t2("dev_handoff.annotations.no_category_option_label"),
    displayTextClassName: eI,
    isChecked: null === u,
    callback: () => Z(null),
    recordingKey: Pt("category-option", "no-category")
  }), [u, Z]);
  let eb = useMemo(() => ({
    name: "edit-categories",
    displayText: _$$t2("dev_handoff.annotations.edit_categories_option_label"),
    callback: eg,
    recordingKey: Pt("category-option", "edit-categories")
  }), [eg]);
  let ej = useMemo(() => [ey, {
    separator: !0,
    displayText: ""
  }, ...es.map(e => ({
    name: e.id,
    displayText: e.label,
    displayTextClassName: eI,
    icon: jsx("div", {
      className: eE,
      children: jsx("div", {
        className: eA,
        style: {
          backgroundColor: e.color ?? void 0
        }
      })
    }),
    isChecked: u === e.id,
    callback: () => Z(e.id),
    recordingKey: Pt("category-option", e.label)
  })), ...(es.length > 0 ? [{
    separator: !0,
    displayText: ""
  }, eb] : [eb])], [ey, es, u, Z, eb]);
  let ew = useMemo(() => [...(0 === availableProperties.length ? [{
    name: "no-properties",
    displayText: _$$t2("dev_handoff.annotations.all_properties_added"),
    displayTextClassName: eI,
    disabled: !0
  }] : []), ...availableProperties.reduce((t, n, i, o) => (t.push({
    name: `property-${i}`,
    displayText: n.config.label(),
    icon: jsx(n.config.Icon, {
      nodeId: e
    }),
    className: "annotation--propertyMenuOption--9-5ow",
    sideText: jsx(n.config.PreviewValue, {
      nodeFields: J[i]
    }),
    rightJustifySideText: !0,
    callback: () => q(n.type),
    recordingKey: `createAnnotationOptionButton-${n.type}`
  }), i < o.length - 1 && n.config.category !== o[i + 1]?.config.category && t.push({
    separator: !0,
    displayText: ""
  }), t), [])], [availableProperties, J, e, q]);
  let eN = useCallback(() => {
    t();
  }, [t]);
  let {
    manager,
    getTriggerProps
  } = _$$b({
    offset: {
      mainAxis: 4
    }
  });
  let eT = md(n1);
  let [eS, eP] = useState(!1);
  let eL = b && !eS;
  useEffect(() => {
    "loaded" === eT.status && eP(void 0 !== eT.data);
  }, [eT]);
  let eR = useCallback(() => {
    m(_$$b2({
      has_opened_annotation_visibility_learn_more_link: !0
    }));
  }, [m]);
  let eO = jsxs(_$$bL, {
    manager,
    children: [jsx(_$$d2, {
      "aria-label": _$$t2("dev_handoff.annotations.more_actions"),
      recordingKey: "createAnnotationMoreActions",
      htmlAttributes: {
        "data-tooltip": _$$t2("dev_handoff.annotations.more_actions"),
        "data-tooltip-type": Ib.TEXT
      },
      ...getTriggerProps({}),
      children: jsx(_$$J2, {})
    }), jsxs(_$$mc, {
      children: [jsxs(YJ, {
        children: [jsx(_$$q, {
          onClick: ev,
          children: _$$t2("dev_handoff.annotations.copy_link")
        }), jsx(_$$q, {
          onClick: () => {
            D(e, x);
          },
          children: _$$t2("dev_handoff.annotations.delete")
        })]
      }), eL && jsxs("div", {
        className: "annotation--visibilityDisclaimer--oQFzZ text--fontNeg11--StdFq text--_fontBase--QdLsd text--_negText--j9g-L",
        children: [jsx("p", {
          children: _$$t2("dev_handoff.annotations.visibility_disclaimer")
        }), jsx(_$$N, {
          href: "https://help.figma.com/hc/articles/20774752502935-Add-measurements-and-annotate-designs-in-Dev-Mode",
          newTab: !0,
          onClick: eR,
          children: _$$t2("dev_handoff.annotations.visibility_learn_more")
        })]
      })]
    })]
  });
  return jsx(vL, {
    name: "create-annotation",
    focusOnMount: !0,
    handleKeyDown: e => {
      let {
        event
      } = e;
      "Escape" === event.key && (e.accept(), t());
    },
    children: jsxs("div", {
      ref: _dropdownTargetRef,
      "data-testid": "annotationDialog",
      children: [jsxs("div", {
        className: A()("annotation--createAnnotation--tWKSM annotation--_annotationBase--MPByC", er ? ep : void 0, Qx, Uu),
        style: eu,
        children: [jsxs("div", {
          className: "annotation--createAnnotationHeader--thXfu",
          ref: dropdownTargetRef,
          children: [jsx("div", {
            className: "annotation--headerRowLeft--iIqjN",
            children: jsxs(GG, {
              className: A()("annotation--categorySelectorButton--q2A6p", {
                [ex]: er && cD(er),
                [ep]: !!er
              }),
              onMouseDown: el,
              tabIndex: 0,
              onKeyDown: e => {
                ("Enter" === e.code || "Space" === e.code) && el(e);
              },
              "data-tooltip-type": Ib.TEXT,
              "data-tooltip": _$$t2("dev_handoff.annotations.category_selector_tooltip"),
              recordingKey: "createAnnotationCategorySelectorButton",
              "aria-expanded": isDropdownShown,
              children: [jsx("span", {
                className: "annotation--categorySelectorButtonLabel--xGX7w annotation--_ellipsis--8F1VE",
                children: er ? uA(er) : _$$t2("dev_handoff.annotations.no_category_option_label")
              }), jsx(_$$B, {
                className: "annotation--caret--noLOu",
                svg: _$$A14
              })]
            })
          }), jsxs("div", {
            className: "annotation--headerRowRight--5h3Tr",
            children: [eO, jsx(_$$K, {
              "aria-label": _$$t2("general.close"),
              recordingKey: "closeAnnotationDialog",
              onClick: eN,
              children: jsx(_$$A11, {})
            })]
          })]
        }), jsxs("div", {
          className: ef,
          children: [jsxs("div", {
            className: A()(eh, {
              "annotation--contentContainerNoProperties--pc2WE": 0 === selectedProperties.length
            }),
            children: [jsx("div", {
              ref: ed,
              className: A()("annotation--labelEditor--xNx12", {
                [ZR]: ec
              }),
              dir: "auto",
              children: jsx(_$$A12, {
                innerRef: O,
                value: n,
                valueFormat: j_(n),
                onSave: eo,
                namespace: "annotation-dialog-lexical-editor",
                lexicalContentClassName: "annotation_lexical_editor--contentEditable--EVm11",
                placeholder: jsx("div", {
                  className: A()("annotation_lexical_editor--placeholder--pPwLm", {
                    "annotation_lexical_editor--withCategory--bUCqy": !!er
                  }),
                  children: _$$t2("dev_handoff.annotations.add_annotation")
                }),
                anchorElemOverride: ed.current,
                plugins: [jsx(t2, {
                  onEnterPressed: ei
                }, 0)]
              })
            }), selectedProperties.length > 0 && jsx("div", {
              className: em,
              children: selectedProperties.map(t => jsx(n4, {
                onRemoveProp: Y,
                nodeId: e,
                property: t
              }, `selected-${t.type}`))
            })]
          }), jsx("div", {
            className: "annotation--createAnnotationFooter--wx9JM",
            children: jsxs(_$$E, {
              className: A()("annotation--pinPropertyButton--OTLW3", {
                "annotation--pinPropertyButtonActive---nkvq": _isDropdownShown
              }),
              actionOnPointerDown: !0,
              onClick: () => {
                ee(!1);
                _toggleDropdown();
              },
              "aria-label": _$$t2("dev_handoff.annotations.pin_properties_tooltip"),
              "data-tooltip-type": Ib.TEXT,
              "data-tooltip": _$$t2("dev_handoff.annotations.pin_properties_tooltip"),
              recordingKey: "createAnnotationPinPropertyButton",
              children: [jsx(_$$B, {
                className: "annotation--pinPropertyButtonIcon--dgnI0",
                svg: _$$A17
              }), _$$tx("dev_handoff.annotations.pin_properties_label")]
            })
          })]
        })]
      }), jsx(Dropdown, {
        dataTestId: "createAnnotationCategorySelector",
        recordingKey: "createAnnotationCategorySelector",
        autofocusPrevOnDismount: !0,
        items: ej,
        showPoint: !1,
        minWidth: 220,
        rootAndSubmenuMaxWidth: 220,
        shouldUsePortal: !0,
        preventEventCapture: !0
      }), jsx(_Dropdown, {
        activatePathOnMount: [$ && ew.length > 0 ? ew[0].displayText ?? "" : ""],
        autofocusPrevOnDismount: !0,
        dataTestId: "createAnnotationPropertySelector",
        focusOnMount: $,
        items: ew,
        minWidth: 220,
        onDismissMenu: Q,
        onDropdownHidden: Q,
        preventEventCapture: !0,
        recordingKey: "createAnnotationPropertySelector",
        rootAndSubmenuMaxWidth: 220,
        shouldUsePortal: !0,
        showPoint: !1
      })]
    })
  });
}
let n3 = Array.from(tk.entries()).map(([e, t]) => ({
  type: e,
  config: t
}));
function n4({
  nodeId: e,
  onRemoveProp: t,
  property: n
}) {
  let i = n.config.DisplayValue;
  let {
    canHaveValue,
    nodeFields
  } = _$$wA((e, t) => {
    let a = e.get(t);
    if (!a) return {
      canHaveValue: !1,
      nodeFields: null
    };
    let i = _$$J3(a, n.type, !1);
    return i ? {
      canHaveValue: i,
      nodeFields: n.config.extractNodeFields(a, e)
    } : {
      canHaveValue: i,
      nodeFields: null
    };
  }, e);
  return jsxs(Fragment, {
    children: [jsx("span", {
      className: "annotation--selectedPropertyDisplayLabel--AtFEJ",
      children: n.config.label()
    }), jsxs("div", {
      className: "annotation--selectedPropertyValueWrapper--OyM0X",
      children: [jsx("span", {
        className: A()("annotation--selectedPropertyValue--wwu2U", {
          [e_]: !canHaveValue
        }),
        children: canHaveValue ? jsx(i, {
          nodeFields
        }) : _$$tx("dev_handoff.annotations.no_value")
      }), jsx("span", {
        className: "annotation--selectedPropertyDelete--DMdrA",
        children: jsx(_$$K, {
          recordingKey: `removeAnnotation${n.type}`,
          htmlAttributes: {
            "data-tooltip-type": Ib.TEXT,
            "data-tooltip": _$$t2("dev_handoff.annotations.remove_property")
          },
          "aria-label": _$$t2("dev_handoff.annotations.remove_property"),
          onClick: _$$nc.user("remove-annotation", () => {
            t(n.type);
          }),
          children: jsx(_$$w2, {})
        })
      })]
    })]
  });
}
function n7({
  viewportInfo: e,
  onPointerDown: t
}) {
  return jsx(n.recordableDiv, {
    className: `${ed} ${Dm} ${Uu}`,
    recordingKey: "annotationDialogBackground",
    style: {
      position: "absolute",
      left: e.x,
      top: e.y,
      width: e.width,
      height: e.height
    },
    onPointerDown: t
  });
}
let an = memo(function ({
  nodeId: e,
  annotationId: t,
  annotationType: n,
  annotationMeta: l,
  setDimensions: s,
  shouldHide: r,
  isEditingAnnotation: d,
  offsetX: c,
  offsetY: u,
  lineWidth: p,
  lineHeight: h,
  lineAlignment: f,
  lineColor: g,
  isLeftAligned: x,
  shouldMinimize: m,
  shouldDelayHover: _,
  isInCentralTLF: v
}) {
  let y = k9(() => ({
    nodeId: e,
    annotationType: n,
    meta: l,
    uniqueId: t
  }), [e, n, l, t]);
  let b = NW();
  let j = b === t;
  let w = useCallback(e => {
    e ? Ez5.editorState().focusedAnnotationId.set(t) : e || b !== t || Ez5.editorState().focusedAnnotationId.set(null);
  }, [t, b]);
  let k = useCallback(e => {
    let n = nq[y.annotationType];
    if (n && "AnnotationDisplayOverride" in n) {
      let t = n.AnnotationDisplayOverride;
      if (t) return jsx(t, {
        nodeInfo: y,
        isFadedOut: e,
        isFocused: j,
        onFocusChange: w
      });
    }
    return y.annotationType === nE.MANUAL ? jsx(aa, {
      annotationId: t,
      nodeInfo: y,
      isFadedOut: e,
      isFocused: j,
      onFocusChange: w
    }) : null;
  }, [y, j, w, t]);
  return jsx(n$, {
    annotationId: t,
    annotationType: n,
    isAnnotationFocused: j,
    isEditingAnnotation: d,
    isInCentralTLF: v,
    isLeftAligned: x,
    lineAlignment: f,
    lineColor: g,
    lineHeight: h,
    lineWidth: p,
    nodeId: e,
    offsetX: c,
    offsetY: u,
    setDimensions: s,
    shouldDelayHover: _,
    shouldHide: r,
    shouldMinimize: m,
    children: k
  }, t);
});
let aa = memo(function ({
  annotationId: e,
  nodeInfo: t,
  isFadedOut: n,
  isFocused: l,
  onFocusChange: d
}) {
  let {
    nodeId,
    meta: {
      annotationIndex
    }
  } = t;
  let f = IL();
  let x = uQ();
  let m = dH();
  let v = x === nodeId;
  let [b, j] = fp(_$$m);
  let w = useRef(null);
  let N = NW();
  let k = tO();
  let I = useMemo(() => w3z.isReadOnly(SES.ANNOTATIONS), []);
  let C = Kv();
  let T = s9();
  let L = E_();
  let R = !!hA();
  let D = wA();
  let M = (e, t) => {
    e && (wr(), _$$S3("annotations"), t ? (w3z.setEnableZoomToSelection(!1), Dh([e]), w3z.setEnableZoomToSelection(!0)) : Dh([e]));
  };
  let F = useRef(l);
  F.current = l;
  useEffect(() => () => {
    F.current && Ez5?.editorState().focusedAnnotationId.set(null);
  }, []);
  useEffect(() => {
    C && (Ez5?.editorState().focusedAnnotationId.set(null), j(null));
  }, [C, j]);
  let z = _$$v_(`annotationDisplay-${e}`, "keydown", useCallback(e => {
    !I && l && null === b && L === AD && ("Backspace" === e.key || "Delete" === e.key ? T && (k(nodeId, annotationIndex), w.current?.blur()) : "Enter" === e.key ? T && (e.preventDefault(), j(annotationIndex)) : "Escape" === e.key ? w.current?.blur() : f7(e));
  }, [annotationIndex, k, b, l, I, nodeId, L, j, T]));
  useEffect(() => (document.addEventListener("keydown", z), () => document.removeEventListener("keydown", z)), [z]);
  let V = useCallback(() => {
    let e = window.getSelection()?.toString() || "";
    e && Dk(e, {
      withLineBreaks: !0
    });
  }, []);
  useEffect(() => {
    let e = w.current?.getRootNode()?.activeElement ?? null;
    l && e !== w.current && w.current?.focus();
    l || e !== w.current || w.current?.blur();
  }, [l]);
  let H = useCallback(t => {
    t.preventDefault();
    t.stopPropagation();
    D(j7({
      type: tM,
      data: {
        position: {
          left: t.clientX,
          bottom: t.clientY
        },
        nodeId,
        annotationIndex,
        annotationId: e
      }
    }));
  }, [D, nodeId, annotationIndex, e]);
  let W = XR();
  let G = _$$wA((e, t) => {
    let n = e.get(t);
    return n ? {
      annotations: n.annotations,
      nodeType: n.type,
      nodeName: n.name
    } : null;
  }, nodeId);
  if (!G || 0 === G.annotations.length) return null;
  let {
    annotations,
    nodeType,
    nodeName
  } = G;
  let J = annotations[annotationIndex];
  if (!J) return null;
  let {
    label,
    properties
  } = J;
  let Y = W.find(e => e.id === J.categoryId);
  let Z = {
    "--annotation-category-color": Y ? FQ(Y) ?? "var(--color-bg)" : "var(--color-bg)"
  };
  let $ = j_(J.label);
  return jsxs(D8, {
    className: A()(er, {
      [ep]: !!Y,
      "annotation--viewAnnotationNodeSelected--DfJ3t": v && null === N && null === b,
      [eg]: n,
      "annotation--onlyCategory--X9mU1": !label && 0 === properties.length && !!Y
    }),
    "data-testid": "annotationDisplay",
    forwardedRef: w,
    onBlur: () => d(!1),
    onContextMenu: H,
    onCopy: V,
    onDoubleClick: () => {
      T && (v || M(nodeId, !1), j(annotationIndex));
    },
    onFocus: () => d(!0),
    onMouseDown: e => {
      l && v || (M(nodeId, _$$i(e)), j(null), f("click_annotation_content", {
        nodeId,
        nodeType,
        hasText: !!J.label,
        numProperties: J.properties.length,
        currentTool: m,
        isDevModeFocusView: R
      }), w.current?.focus());
    },
    recordingKey: `viewAnnotationContainer-${nodeName}-${annotationIndex}`,
    role: "button",
    style: Z,
    tabIndex: 0,
    children: [Y && jsx("div", {
      className: "annotation--annotationHeader--GXEj5",
      children: jsx("div", {
        className: A()("annotation--categoryLabel--7VWuC", {
          [ex]: cD(Y)
        }),
        dir: "auto",
        children: uA(Y)
      })
    }), jsxs("div", {
      className: A()(ef, eh),
      children: [label && jsx(_$$C2, {
        value: label,
        valueFormat: $,
        lexicalContentClassName: "annotation_lexical_editor--contentEditableReadOnly--G8hdw",
        themeOverride: {
          link: "annotation_lexical_editor--linkReadOnly--HnBAD"
        },
        namespace: "annotation-display-lexical-editor",
        renderHtmlOnly: !0
      }), jsx(ai, {
        nodeId,
        properties
      })]
    })]
  });
});
function ai({
  nodeId: e,
  properties: t
}) {
  let n = k9(() => [...t].sort((e, t) => tk.get(e.type).index - tk.get(t.type).index), [t]);
  let i = _$$wA((e, t, n) => {
    let a = e.get(t);
    return n.map(t => {
      if (!a) return {
        nodeFields: null,
        canHaveValue: !1
      };
      let n = _$$J3(a, t.type, !1);
      return n ? {
        nodeFields: tk.get(t.type).extractNodeFields(a, e),
        canHaveValue: n
      } : {
        nodeFields: null,
        canHaveValue: n
      };
    });
  }, e, n);
  return 0 === t.length ? null : jsx("div", {
    className: A()(em, "annotation--propertiesDisplay--wFXaY"),
    children: n.map((e, t) => jsx(ao, {
      property: e,
      canHaveValue: i[t].canHaveValue,
      nodeFields: i[t].nodeFields
    }, t))
  });
}
let ao = memo(function ({
  property: e,
  canHaveValue: t,
  nodeFields: n
}) {
  let i = tk.get(e.type);
  let o = i.DisplayValue;
  return jsxs(Fragment, {
    children: [jsx("span", {
      className: "annotation--propertyDisplayLabel--PQ2vF",
      children: i.label()
    }), jsx("span", {
      className: A()("annotation--propertyDisplayValue--bxdp7", {
        [e_]: !t
      }),
      "data-testid": `annotationPropertyValue-${e.type.toString()}`,
      children: t ? jsx(o, {
        nodeFields: n
      }) : _$$tx("dev_handoff.annotations.no_value")
    })]
  });
});
let as = parsePxNumber("220px");
let ar = parsePxNumber(RHC);
function ad(e, t, n, a, i, l, s, r, d) {
  let c = Ez5.isFullscreenYScrollbarNeeded();
  return i ? Math.min(r ? s + n * t - 8 : s - 8, Math.max(0, -e / 2 - l + a + d.left + 4)) : Math.max(r ? -s - n * t + 8 : -s + 8, Math.min(0, e / 2 - l - a - d.right - (c ? ar : 4)));
}
function ac(e, t, n = !0) {
  let {
    x: _x,
    y,
    width,
    height
  } = e;
  let {
    offsetX,
    offsetY,
    zoomScale,
    width: _width
  } = t;
  let p = Ez5.isFullscreenYScrollbarNeeded();
  let h = Math.min(20 * zoomScale, 20);
  let f = _x + width;
  let g = (_x - offsetX) * zoomScale + _width / 2 > as + h + 8;
  let x = (offsetX - f) * zoomScale + _width / 2 > as + h + (p ? 16 : 4);
  let m = g && !x;
  return (n || (m = g || !x), m) ? {
    lineWidth: h,
    offsetX: (_x - offsetX) * zoomScale - h,
    offsetY: (y + height / 2 - offsetY) * zoomScale,
    isLeftAligned: m
  } : {
    lineWidth: h,
    offsetX: (f - offsetX) * zoomScale + h,
    offsetY: (y + height / 2 - offsetY) * zoomScale,
    isLeftAligned: m
  };
}
function au(e, t, n) {
  let a = [];
  let i = 8 * Math.min(1, n);
  for (let t of e) {
    let e = t.height + i;
    for (a.push({
      basis: t.offsetY - e / 2,
      length: 1,
      height: e
    }); a.length > 1 && function (e, t) {
      let n = e.basis + e.height - t.basis;
      return !(n <= 0) && (e.height += t.height, e.length += t.length, e.basis -= n * t.height / e.height, !0);
    }(a[a.length - 2], a[a.length - 1]);) a.pop();
  }
  let o = 0;
  for (let n of a) {
    let {
      basis
    } = n;
    for (let l = 0; l < n.length; l++) {
      let n = e[o];
      if (n) {
        let e = n.height + i;
        t[n.uniqueId] = basis + e / 2;
        a += e;
        o++;
      }
    }
  }
}
function ap(e, t, n, a, i) {
  return a + (Math.min(Math.max(e, t), n) - t) / (n - t) * (i - a);
}
let av = getFeatureFlags().dt_annotations_sizing ? .5 : 1;
let ay = parsePxNumber("4px") / 2;
function ab(e) {
  let {
    children
  } = e;
  let n = useRef(null);
  let [o, l] = useState(null);
  let s = useRef(null);
  let r = function () {
    let e = d4(e => e.selectedView);
    let t = d4(e => e.versionHistory)?.isLoadingPage;
    let n = DP();
    let {
      isLoading
    } = v9({
      selectedView: e,
      isLoadingVersionHistory: t,
      theme: n
    });
    return isLoading;
  }();
  useEffect(() => {
    if (n.current) {
      let e = n.current.attachShadow({
        mode: "open"
      });
      let t = document.createElement("style");
      t.nonce = getInitialOptions().csp_nonce;
      t.textContent = [_$$Nz, _$$Nz3, _$$Nz2, _$$Nz4, "/** @postcss-export-raw */\n\n/**\n * ellipsis.css\n *\n * Add an ellipsis if text is too long.\n *\n * The element that composes this mixin MUST have a defined width or max-width in pixels.\n * - Only works on a single line of text. See below for multi-line ellipses\n */\n\n.ellipsis--ellipsis--Tjyfa {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n/**\n * Add an ellipsis after n lines of text.\n * https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp\n *\n * The element that composes this mixin MUST:\n * - Have a defined width or max-width in pixels.\n * - Have a defined fallback height or max-height set to `line-height * n`,\n *     in case browsers do not support -webkit-line-clamp or box-orient\n *     at least the container size will be correct (with no ellipses)\n *\n * TODO(golf): start using `line-clamp` instead of -webkit-line-clamp once browsers start supporting it\n */\n\n.ellipsis--_ellipsisAfterNLines--LzI7k {\n  display: -webkit-inline-box;\n  overflow: hidden;\n\n  /* https://github.com/postcss/autoprefixer/issues/776#issuecomment-297734206 */\n  /* autoprefixer: off */\n  -webkit-box-orient: vertical;\n  /* autoprefixer: on */\n}\n\n.ellipsis--ellipsisAfter2Lines--Qo-Xh {\n  -webkit-line-clamp: 2;\n}\n\n.ellipsis--ellipsisAfter3Lines--h405C {\n  -webkit-line-clamp: 3;\n}\n\n.ellipsis--ellipsisAfter6Lines--2UA7M {\n  -webkit-line-clamp: 6;\n}\n\n.ellipsis--ellipsisAfter8Lines--WZFi8 {\n  -webkit-line-clamp: 8;\n}\n", "/** @postcss-export-raw */\n/* Keep in line with FGDevHandoffHelpers.h */\n.annotation--annotationContainer--k4xiM {\n  position: relative;\n  /* Make all z indexes in this file relative to the parent.\n     We want all annotations to render underneath comments */\n  /* stylelint-disable-next-line @fpl/no-manual-z-index */\n  z-index: 0;\n}\n.annotation--annotationContainer--k4xiM.annotation--isPageLoading--JGk-P {\n    filter: blur(3px);\n  }\n.annotation--_ellipsis--8F1VE {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.annotation--annotationWrapper--pKMw2 {\n  /* TODO: these should be semantic tokens */\n  /* stylelint-disable-next-line @figma/color-no-raw */\n  --annotation-line-color: rgba(131, 131, 131, 0.75);\n  --annotation-dot-border-color: #838383; /* stylelint-disable-line @figma/color-no-raw */\n  --annotation-border-color: var(--color-border-selected);\n  --annotation-border-selected-color: var(--color-border-brand);\n\n  --annotation-scale: 1;\n\n  position: absolute;\n  pointer-events: none;\n  width: max-content;\n}\n/* If no annotation was rendered, then the wrapper shouldn't show either */\n.annotation--shouldHideEmptyAnnotations--WXr4h:not(.annotation--wrapperMinimized--UOExu):not(:has(.annotation--viewAnnotation--cA-c1)):not(:has(.annotation--createAnnotation--tWKSM)) {\n    display: none;\n  }\n.annotation--annotationWrapperSelected--ffb0X {\n  --annotation-line-color: var(--color-border-selected);\n  --annotation-dot-border-color: var(--color-border-selected);\n}\n.annotation--annotationWrapper--pKMw2,\n.annotation--wrapperMinimized--UOExu:hover {\n  /* stylelint-disable-next-line @fpl/no-manual-z-index */\n  z-index: 1;\n}\n/* Handle scaling transition on mouse out */\n.annotation--transitionScaling--eD821 .annotation--annotationLeftAligned--FHQRp,\n  .annotation--transitionScaling--eD821 .annotation--annotationRightAligned--VrH8e {\n    transition: transform 0.05s ease-in-out;\n  }\n/* Handle transition scaling on mouse enter */\n.annotation--transitionScaling--eD821:hover .annotation--annotationLeftAligned--FHQRp,\n  .annotation--transitionScaling--eD821:hover .annotation--annotationRightAligned--VrH8e {\n    transition: transform 0.025s ease-out;\n  }\n.annotation--wrapperEditing--C2Zlx {\n  /* stylelint-disable-next-line @fpl/no-manual-z-index */\n  z-index: 2;\n}\n.annotation--wrapperMinimized--UOExu {\n  /* stylelint-disable-next-line @fpl/no-manual-z-index */\n  z-index: 0;\n}\n.annotation--annotationLine--jr4Mc {\n  --line-width-scale: 1;\n  --y-offset-direction: -1;\n\n  position: absolute;\n  top: 50%;\n  /* Push to left of annotation box */\n  transform: translate(\n    calc(-100% + 15px),\n    calc(var(--y-offset-direction) * 15px)\n  );\n\n  stroke: var(--annotation-line-color);\n  fill: var(--annotation-line-color);\n}\n.annotation--annotationLineLeftAligned--W-1DZ {\n  transform: translate(-15px, calc(var(--y-offset-direction) * 15px));\n}\n.annotation--annotationLineBelowNode--JeafT {\n  --y-offset-direction: 1;\n\n  top: auto;\n  bottom: 50%;\n}\n.annotation--annotationLineStartDot--x6RNc {\n  fill: color-mix(in srgb, var(--annotation-dot-border-color) 45%, transparent);\n  stroke: var(--annotation-dot-border-color);\n}\n.annotation--annotationLineStartInnerDot--aw58q {\n  fill: var(--color-text-onbrand);\n}\n.annotation--annotationLineEndDot--Lsq0a {\n  --dot-radius: 2px;\n  r: var(--dot-radius);\n}\n.annotation--_annotationBase--MPByC {\n  color: var(--color-text);\n\n  pointer-events: auto;\n\n  border-radius: var(--radius-large);\n  box-shadow: var(--elevation-200-canvas);\n  position: relative;\n  display: inline-block;\n  box-sizing: border-box;\n\n  max-width: 220px;\n\n  font-family: Inter;\n  font-size: 11px;\n  font-weight: 400;\n\n  /* This avoids a size shift when adding a border (category & selection). */\n  border: 1px solid transparent;\n}\n.annotation--viewAnnotation--cA-c1 {\n  background: var(--color-bg);\n  outline: none;\n\n  -webkit-user-select: text;\n\n          user-select: text;\n\n  /* This is to make sure the annotation proportions look better when there's a category */\n}\n.annotation--viewAnnotation--cA-c1.annotation--withCategory--lj1wU {\n    min-width: 80px;\n  }\n.annotation--viewAnnotation--cA-c1.annotation--onlyCategory--X9mU1 {\n    min-width: auto;\n\n    border-radius: var(--radius-medium);\n    background: var(--annotation-category-color);\n  }\n.annotation--viewAnnotation--cA-c1.annotation--onlyCategory--X9mU1 .annotation--categoryLabel--7VWuC {\n      margin: 0;\n    }\n.annotation--viewAnnotation--cA-c1.annotation--onlyCategory--X9mU1 .annotation--contentContainer--vSuqs.annotation--innerWrapper--T0cql {\n      padding: 0;\n    }\n.annotation--viewAnnotationNodeSelected--DfJ3t {\n  border: 1px solid var(--annotation-border-selected-color);\n}\n.annotation--viewAnnotation--cA-c1:focus {\n  border: 1px solid var(--annotation-border-color);\n}\n.annotation--viewAnnotationFadedOut--7LQPE > * {\n  opacity: 0.5;\n}\n.annotation--viewAnnotationFadedOut--7LQPE .annotation--innerWrapper--T0cql > * {\n  opacity: 0.5;\n}\n.annotation--createAnnotation--tWKSM {\n\n  background: var(--color-bg);\n  /* fixed when authoring */\n  width: 220px;\n}\n.annotation--createAnnotation--tWKSM .text-editor {\n    border: none;\n  }\n.annotation--createAnnotation--tWKSM .ql-editor.ql-blank::after {\n    margin-top: -1.85em;\n  }\n.annotation--createAnnotation--tWKSM .text-editor:focus-within {\n    margin: 0;\n  }\n/* The where clause allows us to make changes without changing specificity */\n[data-fpl-version='ui3'] .annotation--createAnnotation--tWKSM .ql-container,\n  \n  :where([data-fpl-ui3-override]) .annotation--createAnnotation--tWKSM .ql-container {\n      background: none;\n  }\n.annotation--createAnnotation--tWKSM .ql-editor {\n    font-size: 13px;\n    line-height: 24px;\n    min-height: 38px;\n\n    /* The where clause allows us to make changes without changing specificity */\n  }\n[data-fpl-version='ui3'] .annotation--createAnnotation--tWKSM .ql-editor,\n  \n  :where([data-fpl-ui3-override]) .annotation--createAnnotation--tWKSM .ql-editor {\n      min-height: 24px;\n      padding: 2px 6px;\n      margin: 4px 0 6px 0;\n  }\n.annotation--annotationHeader--GXEj5 {\n  display: flex;\n}\n.annotation--createAnnotationHeader--thXfu {\n  display: flex;\n  padding-top: 10px;\n  padding-left: 10px;\n  padding-right: 8px;\n}\n.annotation--headerRowLeft--iIqjN {\n  flex: 1 1 0;\n  min-width: 0;\n  display: flex;\n}\n.annotation--headerRowRight--5h3Tr {\n  flex: 0 1 auto;\n  display: flex;\n  gap: 4px;\n}\n.annotation--categoryLabel--7VWuC {\n  color: var(--color-text-onbrand);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n\n  font-weight: var(--body-medium-strong-fontWeight, 550);\n\n  border-radius: var(--radius-medium, 0.3125rem);\n  background-color: var(--annotation-category-color);\n\n  margin: 9px 8px 0px 8px;\n  padding: 2px 6px;\n\n  -webkit-user-select: none;\n\n          user-select: none;\n}\n.annotation--categoryLabel--7VWuC.annotation--darkText--xCvQV {\n    color: var(--color-text-onwarning);\n  }\n.annotation--innerWrapper--T0cql {\n  position: relative;\n\n  color: var(--color-text);\n}\n.annotation--createAnnotation--tWKSM .ql-editor ul,\n  .annotation--viewAnnotation--cA-c1 .ql-editor ul,\n  .annotation--createAnnotation--tWKSM .ql-editor ol,\n  .annotation--viewAnnotation--cA-c1 .ql-editor ol {\n    padding-left: 1.5em;\n  }\n.annotation--annotationHoverTarget--4y3Xc {\n  width: 24px;\n  height: 24px;\n  position: absolute;\n  pointer-events: auto;\n  top: calc(50% - 12px);\n  /* This is relative to the left edge of the line end dot,\n     but we want to center it around the dot */\n  left: -10px;\n}\n.annotation--annotationHoverTargetLeftAligned--G1twU {\n  /* This is relative to the right edge of the line end dot,\n     but we want to center it around the dot.\n     Shift by parent width (100%) to account for when the\n     annotation is not hidden. */\n  left: calc(100% - 14px);\n}\n.annotation--annotationLeftAligned--FHQRp {\n  transform: translate(-100%, 0) scale(var(--annotation-scale));\n  transform-origin: 100% 50%;\n  left: 8px;\n}\n.annotation--annotationRightAligned--VrH8e {\n  transform: scale(var(--annotation-scale));\n  transform-origin: 0 50%;\n  left: -8px;\n}\n.annotation--contentContainer--vSuqs {\n  display: flex;\n  flex-direction: column;\n  padding: 0 0 8px 0;\n  box-sizing: border-box;\n}\n.annotation--contentContainer--vSuqs.annotation--innerWrapper--T0cql {\n  gap: 8px;\n  padding: 8px;\n}\n.annotation--contentContainerNoProperties--pc2WE {\n  padding: 0;\n}\n.annotation--labelEditor--xNx12 {\n  padding: 0 8px;\n\n  max-height: 304px;\n  overflow-y: auto;\n}\n.annotation--properties--1p6UF {\n  display: grid;\n  grid-template-columns: min-content auto;\n  align-items: center;\n\n  cursor: default;\n}\n.annotation--properties--1p6UF.annotation--propertiesDisplay--wFXaY {\n    grid-row-gap: 4px;\n  }\n.annotation--createAnnotation--tWKSM .annotation--properties--1p6UF {\n  padding-left: 16px;\n\n  /* The where clause allows us to make changes without changing specificity */\n\n  /* Only match if the page is set to UI2 and the element doesn't have an ancestor\n     UI3 override property (in which case it should be matched by the UI3 mixin */\n\n  /* data-fpl-version is set by ThemeProvider, but we're intentionally not checking for data-fpl-version='ui2' here\n     because apps that don't use ThemeProvider should use UI2 styles by default */\n}\nbody:not([data-fpl-version='ui3']) .annotation--createAnnotation--tWKSM .annotation--properties--1p6UF:where(:not([data-fpl-ui3-override] *)) {\n    padding-right: 8px;\n  }\n/* The where clause allows us to make changes without changing specificity */\n[data-fpl-version='ui3'] .annotation--createAnnotation--tWKSM .annotation--properties--1p6UF,\n  \n  :where([data-fpl-ui3-override]) .annotation--createAnnotation--tWKSM .annotation--properties--1p6UF {\n    padding-right: 12px;\n  }\n/* The delete icon forces a certain row height, so we need to manually pad text to ensure labels are consistently positioned */\n/* If not, the \"effect\" row that has more lines is vertically positioned different to the other property rows */\n/* We're using rem here to mimic how --icon-button-size is defined */\n/* The where clause allows us to make changes without changing specificity */\n/* Only match if the page is set to UI2 and the element doesn't have an ancestor\n     UI3 override property (in which case it should be matched by the UI3 mixin */\n/* data-fpl-version is set by ThemeProvider, but we're intentionally not checking for data-fpl-version='ui2' here\n     because apps that don't use ThemeProvider should use UI2 styles by default */\nbody:not([data-fpl-version='ui3']) .annotation--selectedPropertyDisplayLabel--AtFEJ:where(:not([data-fpl-ui3-override] *)), body:not([data-fpl-version='ui3']) .annotation--selectedPropertyValue--wwu2U:where(:not([data-fpl-ui3-override] *)) {\n    padding: calc(1rem - 8px) 0;\n  }\n/* The where clause allows us to make changes without changing specificity */\n[data-fpl-version='ui3'] .annotation--selectedPropertyDisplayLabel--AtFEJ,\n  \n  [data-fpl-version='ui3'] .annotation--selectedPropertyValue--wwu2U,\n  \n  :where([data-fpl-ui3-override]) .annotation--selectedPropertyDisplayLabel--AtFEJ,\n  \n  :where([data-fpl-ui3-override]) .annotation--selectedPropertyValue--wwu2U {\n    padding: calc(0.75rem - 8px) 0;\n  }\n.annotation--propertyDisplayLabel--PQ2vF,\n.annotation--selectedPropertyDisplayLabel--AtFEJ {\n  align-self: baseline;\n\n  color: var(--color-text-secondary);\n  white-space: nowrap;\n\n  padding-right: 12px !important;\n}\n.annotation--selectedPropertyValueWrapper--OyM0X {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n\n  width: calc(100% + 4px);\n\n  overflow: hidden;\n}\n.annotation--propertyDisplayValue--bxdp7 {\n  overflow: hidden;\n}\n.annotation--noValue--HHQOU {\n  color: var(--color-text-secondary);\n}\n.annotation--selectedPropertyValue--wwu2U {\n  overflow: hidden;\n\n  flex: 1 1 100%;\n}\n.annotation--selectedPropertyDelete--DMdrA {\n  display: flex;\n  align-items: center;\n}\n.annotation--propertyOptionIconSvg--LypST {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  /* The where clause allows us to make changes without changing specificity */\n\n  /* Only match if the page is set to UI2 and the element doesn't have an ancestor\n     UI3 override property (in which case it should be matched by the UI3 mixin */\n\n  /* data-fpl-version is set by ThemeProvider, but we're intentionally not checking for data-fpl-version='ui2' here\n     because apps that don't use ThemeProvider should use UI2 styles by default */\n}\nbody:not([data-fpl-version='ui3']) .annotation--propertyOptionIconSvg--LypST:where(:not([data-fpl-ui3-override] *)) {\n    /* UI3 does this in dropdowns */\n    --color-icon: var(--color-icon-menu);\n  }\n.annotation--icon--w1enR {\n  flex: 0 0 24px;\n\n  width: 24px;\n  height: 24px;\n  margin-right: 4px;\n}\n.annotation--icon--w1enR svg {\n  fill: var(--color-icon);\n}\n.annotation--icon--w1enR[aria-disabled='true'] svg {\n  fill: var(--color-icon-disabled);\n}\n.annotation--chit--3je6E {\n  width: 12px;\n  height: 12px;\n\n  border-radius: 2px;\n  display: flex;\n  overflow: hidden;\n  margin: 1px 2px 1px 0;\n  flex-shrink: 0;\n  border: 1px solid var(--color-border);\n}\n.annotation--chit--3je6E svg {\n    width: 12px;\n    height: 12px;\n  }\n.annotation--propertyMenuOption--9-5ow .annotation--chit--3je6E {\n    margin: 1px 10px 1px 6px;\n  }\n.annotation--propertyMenuOption--9-5ow:hover .annotation--chit--3je6E {\n    border-color: var(--color-icon);\n  }\n.annotation--styleChit--yCQ3O {\n  border: none;\n}\n.annotation--chitInline--vG6cM {\n  margin: 0;\n}\n.annotation--solidPaint--ClR6h {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.annotation--solidPaintValue--9PQMf {\n}\n.annotation--createAnnotationFooter--wx9JM {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 4px 8px 8px;\n\n  /* The where clause allows us to make changes without changing specificity */\n}\n[data-fpl-version='ui3'] .annotation--createAnnotationFooter--wx9JM,\n  \n  :where([data-fpl-ui3-override]) .annotation--createAnnotationFooter--wx9JM {\n    padding: 0 6px 8px 6px;\n  }\n.annotation--coloredProperty--OTQ6l {\n  display: flex;\n  align-items: center;\n  justify-content: left;\n}\n.annotation--coloredProperty--OTQ6l > span {\n    padding-left: 2px;\n    padding-right: 2px;\n    border-radius: 2px;\n  }\n.annotation--paddingProperty--ckvG6 > span {\n    background: var(--color-bginspectpadding);\n    color: var(--color-textoninspectpadding);\n  }\n.annotation--spacingProperty--RCjSM > span {\n    background: var(--color-bginspectspacing);\n    color: var(--color-textoninspectspacing);\n  }\n.annotation--mixedValues--Z0qIk {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.annotation--variablePill--VNxoI {\n  height: 16px;\n  padding: 0 4px;\n}\n.annotation--multipleVariableWrapper--OW3M1 {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n  flex-direction: row;\n  align-items: center;\n}\n.annotation--multipleVariableWrapper--OW3M1.annotation--vertical--zmpVv {\n  flex-direction: column;\n  flex-wrap: nowrap;\n}\n.annotation--multipleVariableValue--5-5xk {\n  overflow: hidden;\n  align-self: stretch;\n}\n.annotation--annotationWrapperManagedString--RTskR {\n  --annotation-line-color: var(--color-border-component-strong);\n  --annotation-dot-border-color: var(--color-border-component-strong);\n  --annotation-border-color: var(--color-border-component-strong);\n}\n.annotation--annotationWrapperManagedString--RTskR .annotation--viewAnnotation--cA-c1 {\n    background-color: var(--color-bg-component-tertiary);\n    color: var(--color-text);\n    display: flex !important;\n    flex-direction: row !important;\n    align-items: center;\n    cursor: default;\n  }\n.annotation--annotationWrapperManagedString--RTskR .annotation--viewAnnotation--cA-c1:hover,\n  .annotation--annotationWrapperManagedString--RTskR .annotation--viewAnnotationSelected--UApdn {\n    border: 1px solid transparent;\n  }\n.annotation--annotationWrapperManagedString--RTskR .annotation--viewAnnotation--cA-c1:hover {\n    background-color: var(--color-bg-component-tertiary-hover);\n  }\n.annotation--annotationWrapperManagedString--RTskR .annotation--viewAnnotation--cA-c1.annotation--contentContainer--vSuqs {\n    padding: 2px 6px 2px 6px;\n  }\n.annotation--annotationWrapperManagedString--RTskR .annotation--managedStringLabel--fWb5O {\n    background: none;\n    font-size: 10px;\n    font-family: 'Roboto Mono', Monaco, 'Courier New', monospace;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n  }\n.annotation--annotationWrapperCodebaseSuggestions--1G1LW {\n  --annotation-line-color: var(--color-border-handoff-strong);\n  --annotation-dot-border-color: var(--color-border-handoff-strong);\n  --annotation-border-color: var(--color-border-handoff-strong);\n}\n.annotation--annotationWrapperCodebaseSuggestions--1G1LW .annotation--viewAnnotation--cA-c1 {\n    background-color: var(--color-bg-handoff-tertiary);\n    color: var(--color-text-handoff);\n    display: flex !important;\n    flex-direction: row !important;\n    cursor: default;\n  }\n.annotation--annotationWrapperCodebaseSuggestions--1G1LW .annotation--viewAnnotation--cA-c1:hover,\n  .annotation--annotationWrapperCodebaseSuggestions--1G1LW .annotation--viewAnnotationSelected--UApdn {\n    border: 1px solid transparent;\n  }\n.annotation--annotationWrapperCodebaseSuggestions--1G1LW .annotation--viewAnnotation--cA-c1:hover {\n    background-color: var(--color-bg-handoff-tertiary);\n  }\n.annotation--annotationWrapperCodebaseSuggestions--1G1LW .annotation--viewAnnotation--cA-c1.annotation--contentContainer--vSuqs {\n    padding: 2px 6px 2px 4px;\n  }\n.annotation--annotationWrapperCodebaseSuggestions--1G1LW .annotation--codeConnectIcon--nFdfw {\n    display: inline-block;\n    flex: none;\n  }\n.annotation--annotationWrapperCodebaseSuggestions--1G1LW .annotation--codeConnectIcon--nFdfw svg {\n      display: block;\n    }\n.annotation--annotationWrapperCodebaseSuggestions--1G1LW .annotation--codeConnectIcon--nFdfw svg path {\n        fill: var(--color-icon-handoff);\n      }\n.annotation--annotationWrapperCodebaseSuggestions--1G1LW .annotation--codeConnectLabel--Pd3TS {\n    font-size: 10px;\n\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n  }\n.annotation--annotationWrapperCodebaseSuggestions--1G1LW .annotation--codeConnectLabelName--d-Hdu {\n    font-family: 'Roboto Mono', Monaco, 'Courier New', monospace;\n  }\n.annotation--effectBlurVariable--mbYFb {\n  padding-left: 4px;\n}\n.annotation--headerRowLeft--iIqjN {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n.annotation--categorySelectorButton--q2A6p {\n  position: relative;\n\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  background-color: var(--color-bg-secondary);\n  color: var(--color-text-secondary);\n  font-weight: var(--body-medium-strong-fontWeight, 550);\n\n  border-radius: 4px;\n\n  padding-left: 6px;\n  padding-right: 18px;\n\n  border: 1px solid transparent;\n}\n.annotation--categorySelectorButton--q2A6p.annotation--withCategory--lj1wU {\n    color: var(--color-text-onbrand);\n    background-color: var(--annotation-category-color);\n  }\n.annotation--categorySelectorButton--q2A6p.annotation--withCategory--lj1wU .annotation--caret--noLOu {\n      fill: var(--color-icon-onbrand);\n      color: var(--color-icon-onbrand);\n    }\n.annotation--categorySelectorButton--q2A6p.annotation--withCategory--lj1wU.annotation--darkText--xCvQV {\n    color: var(--color-text-onwarning);\n  }\n.annotation--categorySelectorButton--q2A6p.annotation--withCategory--lj1wU.annotation--darkText--xCvQV .annotation--caret--noLOu {\n      fill: var(--color-icon-onwarning);\n      color: var(--color-icon-onwarning);\n    }\n.annotation--categorySelectorButton--q2A6p:focus-visible {\n    border: 1px solid var(--color-border-selected);\n  }\n.annotation--categorySelectorButton--q2A6p .annotation--caret--noLOu {\n    fill: var(--color-icon);\n    color: var(--color-icon);\n  }\n.annotation--pinPropertyButton--OTLW3 {\n  position: relative;\n\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  padding: 4px 8px 4px 4px;\n\n  font-weight: var(--body-medium-fontWeight, 450);\n  line-height: var(--body-medium-lineHeight, 16px);\n\n  border-radius: var(--radius-medium);\n  border: 1px solid transparent;\n\n  color: var(--color-text-secondary);\n}\n.annotation--pinPropertyButton--OTLW3:hover {\n    color: var(--color-text);\n    background-color: var(--color-bg-secondary);\n  }\n.annotation--pinPropertyButton--OTLW3:hover .annotation--pinPropertyButtonIcon--dgnI0 {\n      fill: var(--color-icon);\n      color: var(--color-icon);\n    }\n.annotation--pinPropertyButton--OTLW3:focus-visible {\n    border: 1px solid var(--color-border-selected);\n  }\n.annotation--pinPropertyButton--OTLW3.annotation--pinPropertyButtonActive---nkvq {\n    color: var(--color-text);\n    background-color: var(--color-bg-secondary);\n  }\n.annotation--pinPropertyButton--OTLW3.annotation--pinPropertyButtonActive---nkvq .annotation--pinPropertyButtonIcon--dgnI0 {\n      fill: var(--color-icon);\n      color: var(--color-icon);\n    }\n.annotation--pinPropertyButton--OTLW3 .annotation--pinPropertyButtonIcon--dgnI0 {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    width: 16px;\n    height: 16px;\n\n    fill: var(--color-icon-secondary);\n    color: var(--color-icon-secondary);\n\n    margin-right: 4px;\n  }\n.annotation--categorySelectorButtonLabel--xGX7w {\n  max-width: 116px;\n}\n.annotation--caret--noLOu {\n  position: absolute;\n  top: calc(50% - 3px);\n  right: 6px;\n\n  --padding-right: var(--menu-padding-right, 4px);\n  margin-right: calc(var(--padding-right) - 4px);\n}\n.annotation--colorCircle--i6hsL {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n\n  box-sizing: border-box;\n\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.annotation--colorCircle--i6hsL.annotation--noCategoryColor--fYEUj {\n  background-color: transparent;\n  border: 1px solid var(--color-icon-secondary);\n}\n.annotation--categoryOptionLabel--Iz9RB {\n  text-align: start;\n  padding: 0 6px;\n}\n.annotation--categoryOptionIcon--jg6bS {\n  flex: 0 0 auto;\n  padding: 0 2px;\n}\n.annotation--visibilityDisclaimer--oQFzZ {\n\n  padding: 0 16px;\n  max-width: 136px;\n\n  color: var(--color-text-menu-tertiary);\n  /* The where clause allows us to make changes without changing specificity */\n}\n[data-fpl-version='ui3'] .annotation--visibilityDisclaimer--oQFzZ,\n  \n  :where([data-fpl-ui3-override]) .annotation--visibilityDisclaimer--oQFzZ {\n    color: var(--color-text-menu-secondary);\n  }\n.annotation--visibilityDisclaimer--oQFzZ p {\n    margin-bottom: 4px;\n  }\n/* Copying some of the icon-button styles since the styles don't apply within\n a shadow root element */\n.annotation--buttonReset--Emcnw {\n  display: inline-flex;\n  place-items: center;\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  border: none;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.annotation--buttonReset--Emcnw * {\n    /* Things inside of button shouldn't be targeted by clicks, only the button itself */\n    pointer-events: none;\n  }\n.annotation--iconButton--w7kfn {\n  --icon-button-width: initial;\n  --icon-button-height: initial;\n  --icon-button-size: initial;\n  --icon-button-icon-size: initial;\n  --icon-button-radius: initial;\n  --icon-button-outline-offset: -0.0625rem;\n  --icon-button-outline-width: 0.0625rem;\n  --icon-button-outline-color: transparent;\n  --icon-button-icon: var(--color-icon);\n  --icon-button-icon-secondary: var(--color-icon-secondary);\n  --icon-button-icon-tertiary: var(--color-icon-tertiary);\n\n  display: grid;\n  width: var(--icon-button-width, var(--icon-button-size));\n  height: var(--icon-button-height, var(--icon-button-size));\n  min-width: var(--icon-button-width, var(--icon-button-size));\n  padding: 0;\n\n  border-radius: var(--fpl-radius-left, var(--icon-button-radius))\n    var(--fpl-radius-right, var(--icon-button-radius))\n    var(--fpl-radius-right, var(--icon-button-radius))\n    var(--fpl-radius-left, var(--icon-button-radius));\n  background: transparent;\n  outline: var(--icon-button-outline-color) solid var(--icon-button-outline-width);\n  outline-offset: var(--icon-button-outline-offset);\n}\n.annotation--iconButton--w7kfn:disabled {\n    --icon-button-icon: var(--color-icon-disabled);\n    --icon-button-icon-secondary: var(--color-icon-disabled);\n    --icon-button-icon-tertiary: var(--color-icon-disabled);\n  }\n/* The where clause allows us to make changes without changing specificity */\n[data-fpl-version='ui3'] .annotation--iconButton--w7kfn,\n  \n  :where([data-fpl-ui3-override]) .annotation--iconButton--w7kfn {\n    --icon-button-size: 1.5rem;\n    --icon-button-icon-size: 1.5rem;\n    --icon-button-radius: var(--radius-medium);\n  }\n/* The where clause allows us to make changes without changing specificity */\n/* Only match if the page is set to UI2 and the element doesn't have an ancestor\n     UI3 override property (in which case it should be matched by the UI3 mixin */\n/* data-fpl-version is set by ThemeProvider, but we're intentionally not checking for data-fpl-version='ui2' here\n     because apps that don't use ThemeProvider should use UI2 styles by default */\nbody:not([data-fpl-version='ui3']) .annotation--iconButton--w7kfn:where(:not([data-fpl-ui3-override] *)) {\n    --icon-button-size: 2rem;\n    --icon-button-icon-size: 2rem;\n  }\n/**\n * Hovering over any part of a button group should trigger the hover states of everything\n * inside of the group. Focusing an element inside the group should also trigger the hover states\n * of everything else.\n */\n/* The where clause allows us to make changes without changing specificity */\n/* Only match if the page is set to UI2 and the element doesn't have an ancestor\n     UI3 override property (in which case it should be matched by the UI3 mixin */\n/* data-fpl-version is set by ThemeProvider, but we're intentionally not checking for data-fpl-version='ui2' here\n     because apps that don't use ThemeProvider should use UI2 styles by default */\nbody:not([data-fpl-version='ui3']) .annotation--ghost--thK4p:where(:not([data-fpl-ui3-override] *)) {\n    --icon-button-radius: 0.0625rem;\n  }\n.annotation--ghost--thK4p:not([aria-disabled='true']):hover,\n  :where([role='group']:hover) .annotation--ghost--thK4p:not([aria-disabled='true']),\n  [role='group']:has([data-show-focus]:focus-visible) .annotation--ghost--thK4p:not([aria-disabled='true']):not(:focus-visible) {\n      background: var(--color-bghovertransparent);\n  }\n.annotation--ghost--thK4p:not([aria-disabled='true']):active {\n      background: var(--color-bgtransparent-secondary-hover);\n    }\n.annotation--ghost--thK4p[data-show-focus]:focus-visible {\n    --icon-button-outline-color: var(--color-border-selected);\n  }\n.annotation--iconButton--w7kfn .annotation--icon--w1enR {\n  --color-icon: var(--icon-button-icon);\n  --color-icon-secondary: var(--icon-button-icon-secondary);\n  --color-icon-tertiary: var(--icon-button-icon-tertiary);\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: var(--icon-button-icon-size);\n  height: var(--icon-button-icon-size);\n  min-width: var(--icon-button-icon-size);\n\n  /* mixins aren't supported in composes, so the border radius settings have to be copied */\n  border-radius: var(--fpl-radius-left, var(--icon-button-radius))\n    var(--fpl-radius-right, var(--icon-button-radius))\n    var(--fpl-radius-right, var(--icon-button-radius))\n    var(--fpl-radius-left, var(--icon-button-radius));\n  fill: var(--color-icon);\n  pointer-events: none;\n}\n", _$$N2, "/** @postcss-export-raw */\n.annotation_lexical_editor--contentEditable--EVm11 {\n  box-sizing: border-box;\n  flex-grow: 1;\n  padding-left: 8px;\n  padding-right: 0px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  font-size: 13px;\n  line-height: 1.7;\n  outline: none;\n  text-align: left;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n.annotation_lexical_editor--contentEditableReadOnly--G8hdw {\n  box-sizing: border-box;\n  font-size: 11px;\n  line-height: 16px;\n\n  cursor: default;\n}\n.annotation_lexical_editor--placeholder--pPwLm {\n  color: var(--color-text-secondary);\n  overflow: hidden;\n  position: absolute;\n  text-overflow: ellipsis;\n  top: 11px;\n  left: 8px;\n  font-size: 13px;\n  display: inline-block;\n  pointer-events: none;\n}\n.annotation_lexical_editor--withCategory--bUCqy.annotation_lexical_editor--placeholder--pPwLm {\n    top: 11px;\n  }\n.annotation_lexical_editor--linkReadOnly--HnBAD {\n  color: var(--color-text-brand);\n  cursor: pointer;\n  -webkit-text-decoration: underline;\n  text-decoration: underline;\n}\n", _content].join("\n");
      s.current = document.createElement("style");
      e.append(t);
      e.append(s.current);
      l(e);
    }
  }, []);
  useEffect(() => {
    s.current && (s.current.textContent = `
        .annotationWrapperForcedHover {
          --annotation-scale: ${e.hoverScale} !important;

          /* stylelint-disable-next-line @fpl/no-manual-z-index */
z-index: 100;
        }

        .${ec} {
          --line-width-scale: ${e.hoverScale} !important;
        }

        .${eu} {
          --dot-radius: ${e.hoverScale * ay}px !important;
        }
      `);
  }, [e.hoverScale]);
  return jsx("div", {
    ref: n,
    "data-testid": "annotation-renderer-shadow-dom-container",
    className: A()("annotation--annotationContainer--k4xiM", Dm, Uu, r && "annotation--isPageLoading--JGk-P"),
    children: o && createPortal(children, o)
  });
}
function aj() {
  let e = wA();
  let t = uQ();
  let n = d4(e => e.isFullscreenDocumentLoaded);
  let c = dH();
  let f = _X({
    subscribeToUpdates_expensive: !0
  });
  let g = d4(e => e.dropdownShown);
  let x = g?.type === tM;
  let m = Xr(_$$f);
  let [y, b] = fp(_$$m);
  let k = _$$DP();
  useEffect(() => {
    t || b(null);
  }, [t, b]);
  useEffect(() => {
    c !== NLJ.ANNOTATE && b(null);
  }, [c, b]);
  useEffect(() => {
    null !== y && e(UU());
  }, [e, y]);
  let [A, I] = useState({});
  let {
    nodesWithAnnotationInfo,
    annotationsBeingViewed,
    newAnnotationNodeInfo
  } = function (e, t) {
    let n = uQ();
    let a = LO();
    let c = md(_$$m);
    let p = NW();
    let f = J2(Ez5.uiState().filterAnnotationCategoryId);
    let g = Fk((e, t) => kh(e, t || "")?.guid || t || void 0, n);
    let {
      allAnnotations,
      newAnnotationNode
    } = function ({
      topLevelOrSelfNodeId: e
    }) {
      let t = dH();
      let n = J2(Ez5.annotationObserver().annotationInfoByTlf);
      let a = v([...n.keys()]);
      let i = md(_$$m);
      let l = uQ();
      let c = XR();
      let p = _$$eY();
      let h = null !== i ? l : null;
      let f = null !== i ? e : void 0;
      let {
        tlfsWithNodes,
        newAnnotationNode: _newAnnotationNode
      } = k9(() => {
        let e = [...a];
        let l = null;
        h && f && !n.has(f) && (t === NLJ.ANNOTATE || null !== i) && e.push(f);
        return {
          tlfsWithNodes: e.reduce((e, t) => {
            let n = p.get(t);
            let {
              nodes,
              newAnnotationNodeId
            } = function e(t, n, a = [], i, o) {
              let l;
              if (t) {
                if ("SECTION" === t.type) return {
                  nodes: [],
                  newAnnotationNodeId: l
                };
                t.childrenNodes.forEach(t => {
                  let {
                    newAnnotationNodeId: _newAnnotationNodeId
                  } = e(t, n, a, i, o);
                  l = l || _newAnnotationNodeId;
                });
                t.annotations.forEach((e, n) => {
                  let i = e.categoryId && o.find(t => t.id === e.categoryId) || null;
                  a.push({
                    nodeId: t.guid,
                    uniqueId: `${t.guid}-manual-${n}`,
                    annotationType: nE.MANUAL,
                    meta: {
                      annotationIndex: n,
                      isUnAuthored: !1,
                      category: i,
                      categoryColor: i && FQ(i) || void 0
                    }
                  });
                });
                i === t.annotations.length && t.guid === n && (0 === t.annotations.length ? l = t.guid : a.push({
                  nodeId: t.guid,
                  uniqueId: `${t.guid}-manual-${t.annotations.length}`,
                  annotationType: nE.MANUAL,
                  meta: {
                    annotationIndex: t.annotations.length,
                    isUnAuthored: !0,
                    category: null,
                    categoryColor: void 0
                  }
                }));
              }
              return {
                nodes: a,
                newAnnotationNodeId: l
              };
            }(n, h, [], i, c);
            newAnnotationNodeId && n && (l = {
              nodeId: newAnnotationNodeId,
              tlfGuid: t
            });
            e[t] = nodes;
            return e;
          }, {}),
          newAnnotationNode: l
        };
      }, [a, p, h, f, t, i, c, n]);
      let m = {
        ...tlfsWithNodes
      };
      for (let e of nQ) {
        let t = e.useSharedHooksContext && e.useSharedHooksContext();
        let n = v(e.useRelevantTLFs(t));
        let a = e.useNewAnnotationsByTlf(n, t, {
          topLevelOrSelfNodeId: f
        });
        Object.keys(a).forEach(e => {
          let t = a[e];
          m[e] ? m[e] = [...m[e], ...t] : m[e] = t;
        });
      }
      return {
        allAnnotations: zN(m),
        newAnnotationNode: _newAnnotationNode
      };
    }({
      topLevelOrSelfNodeId: g
    });
    let y = _$$wA((e, t) => Object.entries(t).map(([t, n]) => {
      let a = [];
      n.forEach(t => {
        let n = e.get(t.nodeId);
        if (n && (!getFeatureFlags().dt_annotations_filter_out_clipped_nodes || !function (e) {
          if (!e.isAlive) return !0;
          let t = e.parentNode;
          let n = e.absoluteBoundingBox;
          for (; t;) {
            let e = t.absoluteBoundingBox;
            if ("FRAME" === t.type && !t.frameMaskDisabled && (n.x < e.x || n.x + n.w > e.x + e.w || n.y < e.y || n.y + n.h > e.y + e.h)) return !0;
            t = t.parentNode;
          }
          return !1;
        }(n))) {
          let e = n.absoluteRenderBounds;
          a.push({
            ...t,
            nodeBounds: {
              x: e?.x ?? 0,
              y: e?.y ?? 0,
              width: e?.w ?? 0,
              height: e?.h ?? 0
            }
          });
        }
      });
      let i = e.get(t);
      return {
        topLevelFrameNodeId: t,
        topLevelFrameBounds: {
          x: i?.absoluteBoundingBox.x ?? 0,
          y: i?.absoluteBoundingBox.y ?? 0,
          width: i?.absoluteBoundingBox.w ?? 0,
          height: i?.absoluteBoundingBox.h ?? 0
        },
        nodes: a
      };
    }), allAnnotations);
    let b = useMemo(() => {
      if (g) {
        let e = y.find(({
          topLevelFrameNodeId: e
        }) => e === g);
        if (e) {
          let t = e.topLevelFrameBounds;
          return {
            x: t.x + t.width / 2,
            y: t.y + t.height / 2
          };
        }
      }
    }, [y, g]);
    let w = k9(() => {
      let t = 0;
      let n = null;
      let a = y.map(a => {
        let {
          topLevelFrameBounds
        } = a;
        if (!function (e, t) {
          let n = e.x;
          let a = e.x + e.width;
          let i = e.y;
          let o = e.y + e.height;
          let l = t.x;
          let s = t.x + t.width;
          let r = t.y;
          let d = t.y + t.height;
          return n < s && a > l && i < d && o > r;
        }({
          x: topLevelFrameBounds.x - as,
          y: topLevelFrameBounds.y,
          width: topLevelFrameBounds.width + 2 * as,
          height: topLevelFrameBounds.height
        }, qc(e))) return null;
        let o = function (e, t) {
          let n = {
            x: t.x + t.width / 2,
            y: t.y + t.height / 2
          };
          return Math.hypot(n.x - e.x, n.y - e.y);
        }(b || {
          x: e.offsetX,
          y: e.offsetY
        }, topLevelFrameBounds);
        (!n || o < n.distanceFromFocusPoint) && (n = {
          tlfIndex: t,
          distanceFromFocusPoint: o
        });
        t++;
        let l = function (e, t) {
          let n = qc(t);
          return Math.min(e.width * t.zoomScale, n.width) * Math.min(e.height * t.zoomScale, n.height) / (n.width * n.height);
        }(topLevelFrameBounds, e);
        return {
          ...a,
          isMostCentralTLF: !1,
          viewportClampingWeight: ap(l, .8, .85, 0, 1) * ap(e.zoomScale, .98, 1, 0, 1),
          viewportOffsetXForClamping: l > .8 && e.zoomScale > .98 || null !== c ? e.offsetX * e.zoomScale : 0
        };
      }).filter(isNotNullish);
      let i = n ? n.tlfIndex : void 0;
      void 0 !== i && (a[i].isMostCentralTLF = !0);
      return a;
    }, [y, e, b, c]);
    let k = Math.max(av, e.zoomScale);
    let A = n ? 1 / Math.min(1, e.zoomScale) : 1;
    let {
      annotationsBeingViewed: _annotationsBeingViewed,
      nodesWithAnnotationInfo: _nodesWithAnnotationInfo,
      annotationBeingEditedIndex
    } = useMemo(() => {
      let i = [];
      let o = 0;
      let l = null;
      let s = w.flatMap(({
        nodes: s,
        topLevelFrameNodeId: r,
        topLevelFrameBounds: d,
        isMostCentralTLF: u,
        viewportClampingWeight: h,
        viewportOffsetXForClamping: g
      }) => {
        s.length > 0 && i.push({
          tlf: r,
          numNodes: s.length
        });
        let x = s.map(i => {
          let {
            nodeId,
            nodeBounds,
            annotationType,
            uniqueId
          } = i;
          let m = "meta" in i ? i.meta : void 0;
          let _ = m && ("category" in m ? m.category : null);
          let v = m && ("categoryColor" in m ? m.categoryColor : void 0);
          let y = nodeId === n;
          let b = null !== f && _?.id !== f;
          let j = p === uniqueId && null !== c;
          let w = !!m && "isUnAuthored" in m && m.isUnAuthored;
          let N = j || w ? 1 : b ? 0 : h;
          let I = function (e, t, n) {
            let {
              x,
              y,
              width,
              height
            } = e;
            let {
              x: _x2,
              width: _width2
            } = t;
            let d = Math.abs(x - _x2) < Math.abs(_x2 + _width2 - (x + width));
            let c = Math.min(x, _x2);
            let u = Math.max(x + width, _x2 + _width2);
            let p = Math.min(Math.max(20 * n, 5 * n), 20);
            return d ? {
              lineWidth: (x - c) * n + p,
              offsetX: c * n - p,
              offsetY: (y + height / 2) * n,
              isLeftAligned: d
            } : {
              lineWidth: (u - (x + width)) * n + p,
              offsetX: u * n + p,
              offsetY: (y + height / 2) * n,
              isLeftAligned: d
            };
          }(nodeBounds, d, k);
          if (!j && !w) {
            let n = N * ad(e.width, k, nodeBounds.width, t[uniqueId]?.width || 0, I.isLeftAligned, I.offsetX - g, I.lineWidth, j, a);
            I.offsetX += n;
            I.lineWidth += n * (I.isLeftAligned ? -1 : 1);
          }
          return {
            ...I,
            meta: m,
            width: t[uniqueId]?.width || 0,
            height: b ? 6 : (t[uniqueId]?.height || 0) * (y ? A : 1) + (y ? 10 * (A - 1) : 0),
            nodeId,
            uniqueId,
            nodeBounds,
            tlfGuid: r,
            shouldMinimize: b,
            lineColor: v,
            annotationType,
            topLevelFrameBounds: d,
            isInCentralTLF: u,
            currentlyBeingEdited: j || w
          };
        }).sort((e, t) => e.offsetY - t.offsetY);
        let m = x.findIndex(e => e.currentlyBeingEdited);
        -1 !== m && (l = m + o);
        let _ = function (e, t) {
          let n = [];
          let a = [];
          let i = {};
          for (let e of t) e.isLeftAligned ? n.push(e) : a.push(e);
          au(n, i, e);
          au(a, i, e);
          return t.map(t => {
            let {
              y,
              height,
              width
            } = t.nodeBounds;
            let l = i[t.uniqueId];
            let s = y * e;
            let r = t.lineWidth;
            let d = nC.ALIGNED;
            let c = 0;
            let u = t.lineWidth;
            l < s ? (d = nC.ABOVE, c = s - l, u += width / 2 * e) : l > (y + height) * e && (d = nC.BELOW, c = l - (y + height) * e, u += width / 2 * e);
            return {
              ...t,
              offsetY: l,
              lineAlignment: d,
              lineHeight: c,
              lineWidth: u,
              originalLineWidth: r
            };
          });
        }(k, x);
        o += s.length;
        return _;
      });
      return {
        annotationsBeingViewed: i,
        nodesWithAnnotationInfo: s,
        annotationBeingEditedIndex: l
      };
    }, [e.width, k, w, t, f, a, c, p, A, n]);
    return {
      nodesWithAnnotationInfo: k9(() => {
        if (null === annotationBeingEditedIndex) return _nodesWithAnnotationInfo;
        let t = [..._nodesWithAnnotationInfo];
        let n = {
          ...t[annotationBeingEditedIndex]
        };
        let i = Math.min(1, e.zoomScale * (1 / av));
        let o = ad(e.width, e.zoomScale, n.nodeBounds.width, n.width, n.isLeftAligned, n.offsetX * i - e.offsetX * e.zoomScale, n.lineWidth * i, !0, a) / i;
        if (n.offsetX = n.offsetX + o, n.lineWidth = n.lineWidth + o * (n.isLeftAligned ? -1 : 1), "isUnAuthored" in n.meta && n.meta.isUnAuthored) {
          let t = ac(n.nodeBounds, e, !n.isLeftAligned);
          t.isLeftAligned !== n.isLeftAligned && (n.lineWidth = t.lineWidth / i, n.isLeftAligned = t.isLeftAligned, n.lineAlignment = nC.ALIGNED, n.lineHeight = 0, n.offsetX = (t.offsetX + e.offsetX * e.zoomScale) / i, n.offsetY = (t.offsetY + e.offsetY * e.zoomScale) / i);
        }
        t[annotationBeingEditedIndex] = n;
        return t;
      }, [_nodesWithAnnotationInfo, e, annotationBeingEditedIndex, a]),
      annotationsBeingViewed: _annotationsBeingViewed,
      newAnnotationNodeInfo: _$$wA((e, t, n, a) => {
        if (!n) return null;
        let i = e.get(n.nodeId);
        if (!i) return null;
        let o = i.absoluteRenderBounds;
        let l = {
          x: o?.x ?? 0,
          y: o?.y ?? 0,
          width: o?.w ?? 0,
          height: o?.h ?? 0
        };
        let s = ac(l, a);
        return {
          ...s,
          nodeId: n.nodeId,
          uniqueId: `${n.nodeId}-manual-${i.annotations.length}`,
          width: t[n.nodeId]?.width || 0,
          height: t[n.nodeId]?.height || 0,
          newAnnotationNode: n,
          tlfGuid: n.tlf,
          shouldMinimize: !1,
          lineAlignment: nC.ALIGNED,
          lineHeight: 0,
          lineColor: void 0,
          originalLineWidth: s.lineWidth,
          annotationType: nE.MANUAL,
          isInCentralTLF: !1,
          nodeBounds: l,
          meta: {
            annotationIndex: i.annotations.length,
            category: null,
            categoryColor: void 0,
            isUnAuthored: !0
          }
        };
      }, t, newAnnotationNode, e)
    };
  }(f, A);
  let z = IL();
  let V = annotationsBeingViewed.length;
  let H = annotationsBeingViewed.reduce((e, t) => e + t.numNodes, 0);
  useEffect(() => {
    V && c === NLJ.SELECT && z("showing_annotations_for_tlfs", {
      topLevelFrameCount: V,
      nodesWithAnnotationsCount: H
    });
  }, [V, H, c, z]);
  useEffect(() => (NB?.setIsShowingAnnotations(0 !== nodesWithAnnotationInfo.length), m(nodesWithAnnotationInfo.length), () => {
    NB?.setIsShowingAnnotations(!1);
    m(0);
  }), [nodesWithAnnotationInfo.length, m]);
  let W = useCallback((e, t) => {
    I(n => n[e]?.height !== t.height || n[e]?.width !== t.width ? {
      ...n,
      [e]: t
    } : n);
  }, []);
  let G = EG();
  if (!n) return null;
  let U = f.zoomScale < .05;
  let K = f.x + f.width / 2;
  let X = f.y + f.height / 2;
  let J = Math.min(1, f.zoomScale * (1 / av));
  let Q = null;
  let q = nodesWithAnnotationInfo.map(e => null !== y && e.nodeId === t && e.annotationType === nE.MANUAL && e.meta.annotationIndex === y ? (Q = jsx(n2, {
    annotationId: e.uniqueId,
    annotationIndex: y,
    isLeftAligned: e.isLeftAligned,
    lineAlignment: e.lineAlignment,
    lineHeight: e.lineHeight * J,
    lineWidth: e.lineWidth * J,
    nodeId: e.nodeId,
    offsetX: e.offsetX * J + K - f.offsetX * f.zoomScale,
    offsetY: e.offsetY * J + X - f.offsetY * f.zoomScale,
    setDimensions: W,
    viewportInfo: f
  }), null) : jsx(an, {
    annotationId: e.uniqueId,
    annotationMeta: "meta" in e ? e.meta : void 0,
    annotationType: e.annotationType,
    isEditingAnnotation: !1,
    isInCentralTLF: e.isInCentralTLF,
    isLeftAligned: e.isLeftAligned,
    lineAlignment: e.lineAlignment,
    lineColor: e.lineColor,
    lineHeight: e.lineHeight,
    lineWidth: e.lineWidth,
    nodeId: e.nodeId,
    offsetX: e.offsetX,
    offsetY: e.offsetY,
    setDimensions: W,
    shouldDelayHover: f.zoomScale < .25,
    shouldHide: U,
    shouldMinimize: e.shouldMinimize
  }, e.uniqueId));
  let Y = null !== y && newAnnotationNodeInfo && jsx(n2, {
    annotationId: newAnnotationNodeInfo.uniqueId,
    annotationIndex: y,
    isLeftAligned: newAnnotationNodeInfo.isLeftAligned,
    lineAlignment: newAnnotationNodeInfo.lineAlignment,
    lineHeight: newAnnotationNodeInfo.lineHeight,
    lineWidth: newAnnotationNodeInfo.lineWidth,
    nodeId: newAnnotationNodeInfo.nodeId,
    offsetX: newAnnotationNodeInfo.offsetX + K,
    offsetY: newAnnotationNodeInfo.offsetY + X,
    setDimensions: W,
    viewportInfo: f
  });
  let Z = x && g && jsx(tB, {
    nodeId: g.data.nodeId,
    annotationIndex: g.data.annotationIndex,
    parentRect: g.data.position
  });
  return jsxs(Fragment, {
    children: [jsx(ab, {
      hoverScale: 1 / J,
      children: jsx("div", {
        "data-fpl-version": k.version,
        style: {
          visibility: G ? "hidden" : "visible",
          position: "absolute",
          transform: `translate(${-f.offsetX * f.zoomScale + f.x + f.width / 2}px, ${-f.offsetY * f.zoomScale + f.y + f.height / 2}px) scale(${Math.min(f.zoomScale * (1 / av), 1)})`
        },
        children: q
      })
    }), Q, Y, Z]
  });
}
function aw() {
  return !function () {
    let e = dH();
    let t = J2(Ez5.annotationObserver().annotationInfoByTlf);
    return v(useMemo(() => Array.from(t.keys()), [t])).length > 0 || !!getFeatureFlags().dt_component_annotations || !!getFeatureFlags().dt_ccv2_on_canvas || !!getFeatureFlags().cheddar_annotations || e === NLJ.ANNOTATE;
  }() ? null : jsx(_$$p, {
    forceNoScroll: !0,
    children: jsx(aj, {})
  });
}
export function $$aN0() {
  let e = iW();
  return (useEffect(() => {
    !e && (zl.set(_$$m, null), Ez5 && Ez5.editorState().focusedAnnotationId.set(null));
  }, [e]), e) ? jsx(aw, {}) : null;
}
export const b = $$aN0;