import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useCallback, useRef, useState, useMemo } from "react";
import { useSelector } from "../vendor/514228";
import { Fo, Uz } from "../905/63728";
import { getI18nString, renderI18nText } from "../905/303541";
import { k as _$$k } from "../figma_app/564183";
import { f4 } from "../figma_app/722362";
import { q5 } from "../figma_app/516028";
import { Sh, dK, a$ } from "../figma_app/889655";
import { Ae } from "../figma_app/461594";
import { t as _$$t2 } from "../figma_app/143965";
import { L as _$$L } from "../905/109200";
import { S as _$$S } from "../figma_app/9979";
import { useAtomValue } from "../vendor/525001";
import { _I } from "../figma_app/473493";
import { mp } from "../figma_app/579169";
import { f as _$$f } from "../905/940356";
import { u as _$$u } from "../figma_app/365543";
import { uQ, Wf, T4, Vr, jY } from "../figma_app/151869";
import { Af, DP, aj, x5, ZN } from "../figma_app/803932";
import N from "classnames";
import { LN } from "../figma_app/975811";
import { m0 } from "../figma_app/976749";
import { Ku } from "../figma_app/740163";
import { G as _$$G } from "../figma_app/194673";
import { vG } from "../905/210945";
import { VZ, x0 } from "../figma_app/727192";
import { d1, sD, Cm, _p } from "../figma_app/826998";
import { ck, Rh, x$, iV } from "../figma_app/887579";
import { d7, s0, Kx, hN, n5, yg } from "../figma_app/261761";
import { yY, n1, Q5, qR, bN, cx } from "../figma_app/811711";
import { L as _$$L2 } from "../figma_app/467950";
import { ServiceCategories as _$$e } from "../905/165054";
import { reportError } from "../905/11";
import { D as _$$D } from "../figma_app/451499";
import { N9, qg } from "../figma_app/385874";
import { K as _$$K } from "../figma_app/622160";
import { I6 } from "../vendor/336448";
import { j_ } from "../figma_app/9619";
import { C as _$$C } from "../figma_app/686450";
import { bU } from "../figma_app/967154";
import { N as _$$N } from "../905/438674";
import { trackEventAnalytics } from "../905/449184";
import { _P } from "../figma_app/164212";
import { pT } from "../figma_app/435995";
import { z4 } from "../figma_app/95266";
import { u as _$$u2, a as _$$a } from "../figma_app/997280";
import { X as _$$X } from "../figma_app/934313";
import { J as _$$J } from "../figma_app/785050";
import { K as _$$K2 } from "../905/443068";
import { A as _$$A } from "../905/24328";
import { wr, Dh, Uc } from "../figma_app/741237";
import { o as _$$o } from "../figma_app/254634";
import { U as _$$U } from "../figma_app/914726";
let I = "code_and_measurement_hint--icon--5-cVy";
let S = new Date("2023-06-21");
let v = "dev_mode_dismissed_code_and_measurements_hint";
function A() {
  let e = q5();
  let t = !e?.canEdit;
  let r = _I();
  let i = !!_$$f("dev_mode_dismissed_properties_panel_announcement");
  let a = !!_$$f(v);
  let s = useAtomValue(mp);
  let l = uQ();
  let d = "loaded" !== s.status || s.data > S;
  return !l || a || !i || !t || d || r ? null : jsx(_$$u, {
    className: "code_and_measurement_hint--codeAndMeasurementsHint--Y2-IO",
    hintText: getI18nString("inspect_panel.properties.measurements_hint_message"),
    iconComponent: jsx(_$$L, {
      className: I
    }),
    idForTests: "hintCodeAndMeasurements",
    secondaryHintText: renderI18nText("inspect_panel.properties.copy_code_hint_message", {
      menu_path: jsx("strong", {
        children: renderI18nText("inspect_panel.properties.copy_code_hint_menu_path")
      })
    }),
    secondaryIconComponent: jsx(_$$S, {
      className: I
    }),
    title: getI18nString("inspect_panel.properties.code_and_measurements_hint_title"),
    userFlag: v
  });
}
var C = N;
let U = new ck();
let B = new LN();
function G({
  hideBorder: e,
  noPadding: t,
  isSubsection: r
}) {
  let s = useSelector(e => e.mirror.selectionProperties.numSelected) || 0;
  let l = _$$G();
  let d = l[0];
  let c = d7(d?.effects ?? [], d?.styleName, d?.styleKey);
  let u = useCallback((e, t, r) => jsx(z, {
    color: e.color,
    density: e.density,
    formattableColor: e.formattableColor,
    formattableSecondaryColor: e.formattableSecondaryColor,
    itemIndex: r,
    noiseSize: e.noiseSize,
    noiseType: e.noiseType,
    offset: e.offset,
    opacity: e.opacity,
    radius: e.radius,
    styleKey: e.styleKey,
    styleName: e.styleName,
    type: e.type
  }, e.id), []);
  return 1 !== s || !l || l.length < 1 || d.effects.length < 1 ? null : jsx(VZ, {
    title: getI18nString("inspect_panel.effects.title"),
    recordingKey: "effects",
    additionalHeaders: jsx(Af, {}),
    noBorder: e,
    noPadding: t,
    isSubsection: r,
    children: jsx(x0, {
      limit: 2,
      data: c,
      renderElement: u
    })
  });
}
function V({
  effect: e,
  styleKey: t,
  itemIndex: r
}) {
  let i = U.format(e.type, e.blurOpType, e.noiseType);
  return t ? jsx(s0, {
    styleKey: t,
    styleType: "EFFECT",
    itemIndex: r,
    itemType: e.type
  }) : i ? jsxs("div", {
    className: yY,
    children: [vG(e), i]
  }) : null;
}
function H({
  effect: e,
  styleName: t
}) {
  let r = U.format(e.type, e.blurOpType, e.noiseType);
  return jsx(d1, {
    className: n1,
    labelClassName: Q5,
    label: t,
    defaultLabel: r,
    children: vG(e)
  });
}
function z(e) {
  let t = useRef(null);
  let r = m0();
  let a = sD(getI18nString("inspect_panel.effects.size"));
  let s = sD(getI18nString("inspect_panel.effects.density"));
  let l = sD(getI18nString("inspect_panel.effects.opacity"));
  let d = sD(getI18nString("inspect_panel.effects.radius"));
  let c = Ku();
  let u = Kx(e.noiseSize?.x);
  let p = Cm(e.density);
  let _ = Cm(e.opacity);
  let h = Kx(e.radius);
  let [m, g] = useState(!1);
  let [f, E] = useState(!1);
  let y = C()(qR, r && bN);
  let b = "NOISE" === e.type && jsxs(Fragment, {
    children: [jsx(hN, {
      propertyContentClassName: y,
      setHovered: g,
      isHovered: m,
      button1: jsx(n5, {
        label: getI18nString("inspect_panel.effects.size"),
        tooltipRef: a,
        onClick: u,
        value: Wf(e.noiseSize?.x),
        rowRef: t,
        isHovered: m
      }),
      button2: jsx(n5, {
        tooltipRef: s,
        label: getI18nString("inspect_panel.effects.density"),
        onClick: p,
        value: B.format(e.density),
        rowRef: t,
        isHovered: m
      })
    }), "MULTITONE" === e.noiseType && jsx(hN, {
      propertyContentClassName: y,
      setHovered: E,
      isHovered: f,
      button1: jsx(n5, {
        tooltipRef: l,
        label: getI18nString("inspect_panel.effects.opacity"),
        onClick: _,
        value: B.format(e.opacity),
        rowRef: t,
        isHovered: f
      })
    }), "MULTITONE" !== e.noiseType && jsxs(Fragment, {
      children: [!!e.formattableColor && jsx(DP, {
        formattableColor: e.formattableColor,
        format: c,
        isInStyle: !0,
        disableDetailModalEntry: !0
      }), "DUOTONE" === e.noiseType && !!e.formattableSecondaryColor && jsx(DP, {
        formattableColor: e.formattableSecondaryColor,
        format: c,
        isInStyle: !0,
        disableDetailModalEntry: !0
      })]
    })]
  });
  let I = "GRAIN" === e.type && jsx(hN, {
    propertyContentClassName: y,
    setHovered: g,
    isHovered: m,
    button1: jsx(n5, {
      label: getI18nString("inspect_panel.effects.size"),
      tooltipRef: a,
      onClick: u,
      value: Wf(e.noiseSize?.x),
      rowRef: t,
      isHovered: m
    }),
    button2: jsx(n5, {
      label: getI18nString("inspect_panel.effects.radius"),
      tooltipRef: d,
      onClick: h,
      value: Wf(e.radius),
      rowRef: t,
      isHovered: m
    })
  });
  let {
    itemIndex,
    styleKey,
    styleName
  } = e;
  return jsxs("div", {
    ref: t,
    className: cx,
    children: [r ? jsx(V, {
      effect: e,
      styleKey,
      itemIndex
    }) : jsx(H, {
      effect: e,
      styleName
    }), b, I]
  });
}
let J = "images_panel--imagePropertyRow--QtoWZ inspection_property--propertyRow--TSFLG inspection_property--basePropertyRow--nwW7c inspection_property--_basePropertyRow--nfWzH";
let Z = () => {
  let e = useSelector(e => e.mirror.selectionProperties.fillPaints) || null;
  let t = useMemo(() => N9(e), [e]);
  return t && t.filter(e => e.opacity > 0 && e.visible && e.image) || [];
};
function Q(e) {
  let t = useMemo(() => new _$$D(), []);
  let r = `${Rh(e)}.${x$(e)}`;
  return jsxs("div", {
    className: "images_panel--imageSection--zNOsP",
    children: [jsxs(_p, {
      className: "images_panel--preview--1U-c2",
      children: [jsx(_$$K, {
        className: "images_panel--previewImage--AdG6w",
        imagePaint: e,
        height: 50,
        width: 64,
        forceUpdate: !1
      }), jsx(iV, {
        image: e,
        children: r
      })]
    }), jsx(_p, {
      className: J,
      name: getI18nString("inspect_panel.images.scale"),
      redact: ["Fill"],
      value: t.format(e.imageScaleMode)
    }), jsx(_p, {
      className: J,
      name: getI18nString("inspect_panel.images.opacity"),
      format: "percent",
      redact: 1,
      value: e.opacity
    }), jsx(aj, {
      onError: t => {
        let r = TypeError(`Expected string | undefined, got ${typeof t}`);
        console.error(r);
        reportError(_$$e.FIGJAM, r, {
          extra: {
            type: typeof t,
            value: t,
            source: "ImagesPanel > ImageElement",
            props: e
          }
        });
      },
      className: J,
      blendMode: e.blendMode
    })]
  });
}
function ee() {
  let e = Z();
  let t = useCallback(e => jsx(Q, {
    ...e
  }, qg(e.image)), []);
  let r = useMemo(() => {
    let t = e.every(e => "VIDEO" === e.type);
    return e.length > 1 ? t ? getI18nString("inspect_panel.videos.title_plural") : getI18nString("inspect_panel.images.title_plural") : 1 === e.length ? t ? getI18nString("inspect_panel.videos.title_singular") : getI18nString("inspect_panel.images.title_singular") : void 0;
  }, [e]);
  return !e || e.length < 1 ? null : jsx(VZ, {
    title: r,
    recordingKey: "images",
    children: jsx(x0, {
      limit: 2,
      data: e,
      renderElement: t
    })
  });
}
function ed(e) {
  let {
    uri,
    displayName,
    displayText
  } = e;
  let s = useCallback(() => {
    let e = _P(uri);
    trackEventAnalytics("Component documentation link clicked", {
      hostname: e
    });
  }, [uri]);
  let l = useMemo(() => displayName || displayText ? displayText || renderI18nText("design_systems.component_panel.view_in_display_name", {
    displayName
  }) : renderI18nText("design_systems.component_panel.view_documentation"), [displayName, displayText]);
  return jsx("div", {
    className: pT,
    children: jsx(_$$N.Button, {
      variant: "secondary",
      width: "fill",
      href: uri,
      newTab: !0,
      trusted: !0,
      onClick: s,
      children: l
    })
  });
}
let ec = /^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/?\n]+)/;
let eu = {
  "github.com": "GitHub",
  "figma.com": "Figma",
  "zeplin.io": "Zeplin",
  "atlassian.com": "Jira",
  "asana.com": "Asana"
};
let ep = e => {
  if (e.displayName || e.displayText) return e;
  let t = e.uri.match(ec);
  let r = t && t[1] ? eu[t[1]] : void 0;
  return {
    uri: e.uri,
    displayName: r
  };
};
let e_ = (e, t) => useMemo(() => e ? e.map(e => ep(e)) : t ? I6(t).filter(e => "url" === e.type).map(e => ep({
  uri: e.href
})) : [], [t, e]);
let eh = () => {
  let {
    links,
    description
  } = bU();
  let r = e_(links, description);
  return useMemo(() => ({
    description,
    links: r
  }), [description, r]);
};
function em() {
  let {
    description,
    links
  } = eh();
  if (0 === links.length && !description) return null;
  let r = j_(description || "");
  return jsx(VZ, {
    title: getI18nString("inspect_panel.components.title"),
    recordingKey: "components",
    hideHeader: !0,
    children: jsxs("div", {
      className: "inspect_component_panel--documentationSection--PQRXC",
      children: [description ? jsx("div", {
        className: "inspect_component_panel--documentationRt--oG--q",
        children: jsx(_$$C, {
          value: description,
          valueFormat: r,
          namespace: "inspect-component-panel-lexical-editor",
          lexicalContentClassName: "inspect_component_panel--lexical--Eq2bN"
        })
      }) : jsx("div", {
        className: "inspect_component_panel--documentationDescriptionDefault--15thq inspect_component_panel--documentationDescription--UcDJ- ellipsis--ellipsisAfter8Lines--WZFi8 ellipsis--_ellipsisAfterNLines--LzI7k text--fontPos11--2LvXf text--_fontBase--QdLsd",
        dir: "auto",
        children: renderI18nText("inspect_panel.components.no_description")
      }), links.length > 0 && jsx("div", {
        className: "inspect_component_panel--documentationLinks--pi-YI",
        children: links.map(e => jsx(ed, {
          uri: e.uri,
          displayName: e.displayName,
          displayText: e.displayText
        }, e.uri))
      })]
    })
  });
}
function ef({
  guids: e,
  title: t
}) {
  let r = useMemo(z4, []);
  let s = useSelector(t => r(t, e));
  let l = useCallback(() => {
    let e = T4.unquoteEnumerableValues(s.map(({
      name: e,
      value: t
    }) => [e, t]));
    return T4.copyPairs(e, {
      delimiter: "=",
      quoted: !0,
      suffix: ";"
    });
  }, [s]);
  return 0 === s.length ? null : jsx(VZ, {
    title: t || getI18nString("inspect_panel.component_props.title"),
    recordingKey: "componentProps",
    copyAllValue: l,
    children: jsx("div", {
      "data-testid": `component-prop-property-${e.join("-")}`,
      children: s.map(({
        name: e,
        value: t
      }) => jsx(_p, {
        name: e,
        value: t
      }, e))
    })
  });
}
let ev = e => {
  let t = e?.parentNode;
  return t ? "SYMBOL" === t.type || "INSTANCE" === t.type ? t : ev(t) : null;
};
let eA = () => {
  let e = Vr();
  jY();
  return useMemo(() => {
    if (!e) return null;
    let t = ev(e);
    return t ? {
      id: t?.guid,
      name: t?.name,
      type: t?.type
    } : null;
  }, [e]);
};
let ex = e => useCallback(() => {
  wr();
  Dh([e]);
}, [e]);
let eN = e => {
  let t = useCallback(() => {
    Uc(e);
  }, [e]);
  let r = useCallback(() => {
    Uc("");
  }, []);
  return useMemo(() => ({
    onMouseOver: t,
    onMouseOut: r
  }), [t, r]);
};
function eC(e) {
  let t = ex(e.parentId);
  let r = eN(e.parentId);
  return jsx(_$$K2, {
    onClick: t,
    ...r,
    "aria-label": getI18nString("inspect_panel.interactions.select_layer"),
    children: jsx(_$$A, {})
  });
}
function ew() {
  let e = eA();
  return e ? jsx(VZ, {
    title: getI18nString("inspect_panel.parent.title"),
    recordingKey: "selection_hierarchy",
    children: jsxs("div", {
      className: "parent_component_panel--parentLayerSummaryContainer--JGy-s",
      children: [jsx(_$$u2, {
        className: "parent_component_panel--parentLayerSummary--yAeXQ inspect_selection_header--headerSelection--05a4w",
        selection: e
      }), jsx(eC, {
        parentId: e.id
      })]
    })
  }) : null;
}
function eL() {
  let e = useSelector(e => e.mirror.selectionProperties.nodeText);
  let t = useSelector(e => e.mirror.selectionProperties.numSelectedByType) || {};
  return 1 !== (useSelector(e => e.mirror.selectionProperties.numSelected) || 0) || 1 !== t.TEXT ? null : jsx(VZ, {
    title: getI18nString("inspect_panel.property.content"),
    copyAllValue: e,
    recordingKey: "content",
    children: jsx(_p, {
      name: "content",
      copyValue: e || "",
      className: "view_only_design_properties_panel--propertyRowContent--Le8cf inspection_property--copyableRow--i6q4P inspection_property--highlightRow--sFDkW ellipsis--ellipsis--Tjyfa",
      children: jsx("div", {
        className: "view_only_design_properties_panel--contentProperty--mOJFd ellipsis--ellipsisAfter8Lines--WZFi8 ellipsis--_ellipsisAfterNLines--LzI7k",
        dir: "auto",
        children: e
      })
    })
  });
}
function eP() {
  let e = q5();
  let t = useSelector(Sh);
  let r = useSelector(Ae);
  let i = useSelector(dK);
  let s = useSelector(a$);
  return jsx(Fragment, {
    children: !!e && jsxs(Fragment, {
      children: [jsx(_$$a, {
        className: "view_only_design_properties_panel--headerSelectionWithBorder--8nqjd inspect_selection_header--headerSelection--05a4w"
      }), jsx(ew, {}), jsx(em, {}), jsx(A, {}), jsx(ef, {
        guids: t
      }), r.map(e => {
        let t = i.get(e[0])?.name;
        return t ? jsx(ef, {
          title: t,
          guids: e
        }, `bubbledInstanceInspectPanel.${e[0]}`) : null;
      }), jsx(ee, {}), jsx(_$$J, {}), jsx(_$$X, {}), jsx(eL, {}), jsx(_$$U, {}), s ? jsx(x5, {}) : jsx(ZN, {}), jsx(_$$o, {}), jsx(yg, {}), jsx(G, {}), jsx(_$$t2, {}), jsx(_$$L2, {})]
    })
  });
}
export function $$eD0(e) {
  let t = useRef(null);
  f4(() => {
    let e = window.getSelection();
    if (!e) return;
    let r = e.focusNode;
    for (; r;) {
      if (r === t.current) {
        e.removeAllRanges();
        break;
      }
      r = r.parentNode;
    }
  });
  let r = _$$k();
  let a = e.flowPanel ?? null;
  let o = e.localStylesPanel ?? null;
  return r ? null : jsxs("div", {
    ref: t,
    onKeyDown: e => {
      if (Fo(e) && e.keyCode === Uz.A) {
        let t = window.getSelection();
        if (t) {
          let r = document.createRange();
          r.selectNodeContents(e.currentTarget);
          t.removeAllRanges();
          t.addRange(r);
          e.preventDefault();
        }
      }
    },
    className: "view_only_design_properties_panel--codePanelContainer---TOUd",
    children: [a, o, jsx(eP, {})]
  });
}
export const t = $$eD0;