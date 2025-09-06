import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useLayoutEffect, forwardRef, useRef, useImperativeHandle, useMemo, useCallback } from "react";
import { useSelector } from "../vendor/514228";
import { throwTypeError } from "../figma_app/465776";
import { ServiceCategories as _$$e } from "../905/165054";
import { d as _$$d } from "../905/976845";
import { E as _$$E } from "../905/632989";
import { R as _$$R } from "../905/621802";
import { r as _$$r } from "../905/571562";
import { I as _$$I } from "../905/763478";
import { rXF, Z_n } from "../figma_app/763686";
import { Te } from "../vendor/813803";
import { getFeatureFlags } from "../905/601108";
import { useAtomWithSubscription } from "../figma_app/27355";
import { Ay } from "../figma_app/272902";
import E from "classnames";
import { conditionalFeatureFlag } from "../figma_app/169182";
import { Pt } from "../figma_app/806412";
import { reportError } from "../905/11";
import { M3 } from "../figma_app/119475";
import { B as _$$B } from "../905/714743";
import { G as _$$G } from "../905/750789";
import { i as _$$i } from "../905/186077";
import { s as _$$s } from "../cssbuilder/589278";
import { S as _$$S } from "../figma_app/552746";
import { getI18nString } from "../905/303541";
import { to } from "../figma_app/828186";
import { _j, Dh } from "../figma_app/843119";
import { dG } from "../figma_app/753501";
import { i as _$$i2 } from "../figma_app/85949";
import { fV } from "../figma_app/236178";
import { KP } from "../figma_app/12491";
import { E as _$$E2 } from "../905/511388";
import { sZ } from "../905/845253";
import { kH } from "../905/309735";
import { Oe } from "../figma_app/336853";
import { e as _$$e2 } from "../figma_app/882253";
import { Ib } from "../905/129884";
import { V9 } from "../905/72677";
import { J as _$$J } from "../905/225412";
import { Cq } from "../figma_app/632975";
import { zi, iL } from "../905/824449";
import { m3 } from "../figma_app/915281";
import { Oi } from "../figma_app/394327";
import { jx, vu, w4, Yc, tx, lC, Vc } from "../905/820169";
import { A as _$$A } from "../905/442873";
import { Z as _$$Z } from "../905/248978";
import { XM } from "../905/609328";
import { LO, sW, gF } from "../905/500756";
import { ws, me, f0, uz, Ke, wR, gV, r9, Oy, Rn, ox, vm, bV, IZ, W as _$$W, Gz, e9, Md, Yp, $u, JN, Nk, q3, Em, mz, Dm, KP as _$$KP, a5, FL, J1, xH, LH, ut, X$ } from "../905/323010";
import { A as _$$A2 } from "../2854/821561";
import { A as _$$A3 } from "../1617/230645";
import { A as _$$A4 } from "../svg/844984";
var y = E;
function en(e, t) {
  useLayoutEffect(() => {
    e && (t ? e.fauxFocus() : e.fauxBlur());
  }, [e, t]);
}
export let $$ei1 = forwardRef(function ({
  listItems: e,
  selectedItemID: t,
  disabledVariableIds: r,
  highlightedItemID: a,
  pickerType: s,
  className: o,
  recordingKey: l,
  onItemHighlight: d,
  onItemSelect: c,
  onItemContextMenu: u,
  onItemMouseLeave: p
}, _) {
  let m = useRef(null);
  let g = Te({
    count: e.length,
    getScrollElement: () => m.current,
    estimateSize: t => jx(e[t], "list"),
    getItemKey: t => vu(e[t], t),
    overscan: 10
  });
  useImperativeHandle(_, () => ({
    scrollToTop: () => g.scrollToOffset(0),
    scrollToIndex: (e, t) => g.scrollToIndex(e, t),
    getVirtualItems: () => g.getVirtualItems()
  }));
  return jsx("div", {
    ref: m,
    style: {
      height: w4({
        layout: "list",
        listHeightPx: g.getTotalSize()
      }),
      overflow: "auto"
    },
    className: o,
    children: jsx("div", {
      style: {
        height: `${g.getTotalSize()}px`,
        position: "relative"
      },
      children: g.getVirtualItems().map(i => jsx("div", {
        className: ws,
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: `${i.size}px`,
          transform: `translateY(${i.start}px)`
        },
        children: jsx(ea, {
          disabledVariableIds: r,
          highlightedItemID: a,
          index: i.index,
          listItem: e[i.index],
          onItemContextMenu: u,
          onItemHighlight: d,
          onItemMouseLeave: p,
          onItemSelect: c,
          pickerType: s,
          recordingKey: l,
          selectedItemID: t
        })
      }, i.key))
    })
  });
});
function ea({
  listItem: e,
  index: t,
  selectedItemID: r,
  disabledVariableIds: a,
  highlightedItemID: o,
  pickerType: l,
  recordingKey: d,
  onItemHighlight: c,
  onItemSelect: u,
  onItemContextMenu: p,
  onItemMouseLeave: _
}) {
  let h = useMemo(() => [1, t], [t]);
  let m = to();
  switch (e.type) {
    case Yc.ASSET_TYPE:
      return jsx(el, {
        assetType: e.name,
        tooltip: e.tooltip
      });
    case Yc.SECTION_HEADER:
      return jsx($$ed2, {
        groupName: e.name,
        fileName: e.fileName,
        secondaryText: e.secondaryText
      });
    case Yc.HIERARCHY_PATH:
      return jsx($$eu4, {
        groupName: e.name
      });
    case Yc.FILE_NAME:
      return jsx(ec, {
        fileNameItem: e,
        onItemHighlight: c,
        onItemSelect: u,
        isHighlighted: !!e.libraryKey && tx(e) === o
      });
    case Yc.SEPARATOR:
      return jsx("div", {
        className: me
      });
    case Yc.VARIABLES:
      {
        let t = e.items[0];
        let i = tx(t);
        return jsx($$ep5, {
          disabledVariableIds: a,
          isHighlighted: i === o,
          isSelected: i === r,
          keyboardNavigationPath: h,
          onItemHighlight: c,
          onItemMouseLeave: _,
          onItemSelect: u,
          pickerType: l,
          recordingKey: i ? Pt(d, i) : void 0,
          variable: t,
          variableSet: e.variableSet
        });
      }
    case Yc.STYLES:
      {
        let t = e.items[0];
        let i = tx(t);
        return jsx(m3, {
          dsStyle: t,
          additionalClassName: _$$s.flex.wFull.$,
          children: jsx($$eh0, {
            dsStyle: t,
            hideContextMenu: m,
            isHighlighted: i === o,
            isSelected: i === r,
            keyboardNavigationPath: h,
            onItemContextMenu: p,
            onItemHighlight: c,
            onItemMouseLeave: _,
            onItemSelect: u,
            recordingKey: i ? Pt(d, i) : void 0
          })
        });
      }
    case Yc.EXPRESSION:
      return jsx(em, {
        expression: e.expressionItem,
        isHighlighted: e.expressionItem.name === o,
        keyboardNavigationPath: h,
        recordingKey: Pt(d, e.expressionItem.name),
        onItemHighlight: c,
        onItemSelect: u,
        onItemMouseLeave: _
      });
    case Yc.COMPONENT_PROPS:
      {
        let t = e.items[0];
        let r = lC(t);
        return jsx(eg, {
          componentPropItem: t,
          isHighlighted: r === o,
          keyboardNavigationPath: h,
          recordingKey: Pt(d, r),
          onItemHighlight: c,
          onItemSelect: u,
          onItemMouseLeave: _
        });
      }
    case Yc.CMS_FIELDS:
      {
        let t = e.item;
        let r = t.value.id;
        let i = t.value.name;
        return jsx(ef, {
          cmsFieldItem: t,
          isDisabled: e.disabled,
          tooltip: e.tooltip,
          isHighlighted: r === o,
          recordingKey: Pt(d, i),
          keyboardNavigationPath: h,
          onItemHighlight: c,
          onItemSelect: u,
          onItemMouseLeave: _
        });
      }
    default:
      throwTypeError(e);
  }
}
var es = (e => (e[e.NONE = 0] = "NONE", e[e.HIGHLIGHTED = 1] = "HIGHLIGHTED", e))(es || {});
let eo = forwardRef(function ({
  isLinterItem: e,
  isSelected: t,
  highlightStyle: r,
  isDisabled: i,
  itemName: a,
  value: s,
  tooltip: o,
  recordingKey: l,
  onMouseDown: d,
  onMouseMove: c,
  onMouseLeave: u,
  onContextMenu: p
}, _) {
  return jsxs(_$$S.recordableDiv, {
    forwardedRef: _,
    onMouseMove: c,
    onMouseDown: d,
    onMouseLeave: u,
    onContextMenu: p,
    recordingKey: l,
    className: y()(f0, {
      [uz]: t,
      [Ke]: 1 === r,
      [wR]: !!e
    }),
    "data-tooltip-type": o ? Ib.TEXT : void 0,
    "data-tooltip": o,
    children: [jsx("div", {
      className: y()(gV, {
        [r9]: i
      }),
      children: a
    }), s && jsx("div", {
      className: Oy,
      children: s
    })]
  });
});
function el({
  assetType: e,
  tooltip: t,
  recordingKey: r
}) {
  return jsx(eo, {
    itemName: jsxs("div", {
      className: Rn,
      children: [jsx("span", {
        className: ox,
        children: e
      }), jsx(_$$B, {
        className: vm,
        svg: _$$A3,
        "data-tooltip-type": Ib.TEXT,
        "data-tooltip": t
      })]
    }),
    isSelected: !1,
    highlightStyle: 0,
    recordingKey: r,
    isDisabled: !1
  });
}
export function $$ed2({
  groupName: e,
  fileName: t,
  secondaryText: r,
  recordingKey: i
}) {
  return jsx(eo, {
    itemName: jsxs("div", {
      className: bV,
      children: [!!t && jsx("div", {
        className: IZ,
        children: t
      }), !!t && jsx("div", {
        className: _$$W,
        children: "/"
      }), jsx("div", {
        className: Gz,
        children: e
      }), !!r && jsx("div", {
        className: e9,
        children: r
      })]
    }),
    isSelected: !1,
    highlightStyle: 0,
    recordingKey: i,
    isDisabled: !1
  });
}
function ec({
  fileNameItem: e,
  onItemSelect: t,
  onItemHighlight: r,
  isHighlighted: a
}) {
  let {
    name,
    libraryKey,
    collapsed
  } = e;
  let d = sZ();
  let p = Oe(d);
  let _ = fV(libraryKey);
  let h = useAtomWithSubscription(V9);
  let f = libraryKey ? h[libraryKey]?.hubFileId ?? null : null;
  let E = useCallback(() => {
    r(e);
  }, [r, e]);
  let y = useCallback(() => {
    t(e);
  }, [t, e]);
  let b = useCallback(() => {
    a || E();
  }, [E, a]);
  return getFeatureFlags().dse_collapse_variable_and_style_libraries ? jsx(eo, {
    itemName: jsxs("span", {
      className: Md,
      children: [a && jsx("span", {
        className: Yp,
        children: collapsed ? jsx(_$$R, {}) : jsx(_$$r, {})
      }), jsx("span", {
        className: $u,
        children: name
      }), p && _ && jsx("div", {
        className: _$$s.flex.alignCenter.justifyCenter.ml4.$,
        children: jsx(KP, {
          libraryKey
        })
      }), f && jsx("div", {
        className: _$$s.flex.alignCenter.justifyCenter.ml4.$,
        children: jsx(_$$E2, {
          libraryKey
        })
      })]
    }),
    isSelected: !1,
    onMouseDown: y,
    onMouseMove: b,
    highlightStyle: a ? 1 : 0,
    isDisabled: !1
  }) : jsx(eo, {
    itemName: jsxs("span", {
      className: Md,
      children: [jsx("span", {
        className: $u,
        children: name
      }), p && _ && jsx("div", {
        className: _$$s.flex.alignCenter.justifyCenter.ml4.$,
        children: jsx(KP, {
          libraryKey
        })
      }), f && jsx("div", {
        className: _$$s.flex.alignCenter.justifyCenter.ml4.$,
        children: jsx(_$$E2, {
          libraryKey
        })
      })]
    }),
    isSelected: !1,
    highlightStyle: 0,
    isDisabled: !1
  });
}
export function $$eu4({
  groupName: e,
  recordingKey: t
}) {
  let r = jsx(_$$G, {
    text: e,
    showTooltip: _$$i.WHEN_TRUNCATED
  });
  return jsx(eo, {
    itemName: r,
    isSelected: !1,
    highlightStyle: 0,
    isDisabled: !1,
    recordingKey: t
  });
}
export function $$ep5({
  isLinterItem: e,
  variable: t,
  variableSet: r,
  isSelected: a,
  disabledVariableIds: s,
  isHighlighted: o,
  recordingKey: l,
  pickerType: d,
  keyboardNavigationPath: c,
  onItemHighlight: u,
  onItemSelect: p,
  onItemMouseLeave: _,
  valuePreview: h = null
}) {
  let {
    thumbnailValue
  } = _$$A({
    variable: t,
    variableCollection: r
  });
  let g = kH(t.name);
  let f = useCallback(() => {
    u(t);
  }, [u, t]);
  let {
    setKeyboardNavigationElement,
    keyboardNavigationItem
  } = M3({
    path: c,
    id: tx(t),
    onFauxFocus: f
  });
  en(keyboardNavigationItem, o);
  let T = useCallback(() => {
    o || f();
  }, [o, f]);
  let I = useCallback(() => {
    p(t);
  }, [p, t]);
  let v = useCallback(() => {
    _(t);
  }, [_, t]);
  let N = s.has(t.node_id);
  return jsx(eo, {
    ref: setKeyboardNavigationElement,
    highlightStyle: o ? 1 : 0,
    isDisabled: N,
    isLinterItem: e,
    isSelected: a,
    itemName: jsxs("div", {
      className: JN,
      children: [jsx(LO, {
        value: thumbnailValue,
        onColorChitMouseDown: I,
        resolvedTypeFallback: t.resolvedType,
        disabled: N
      }), jsx("div", {
        className: Nk,
        "data-testid": "variable-list-item-name",
        "data-test-variable-source": t.subscriptionStatus,
        children: conditionalFeatureFlag("ds_picker_tooltips", jsx(_$$G, {
          text: g,
          showTooltip: _$$i.WHEN_TRUNCATED
        }), jsx(Fragment, {
          children: g
        }))
      })]
    }),
    onMouseDown: I,
    onMouseLeave: v,
    onMouseMove: T,
    recordingKey: l,
    value: jsx(e_, {
      pickerType: d,
      resolvedType: t.resolvedType,
      variableThumbnail: thumbnailValue,
      valuePreview: h
    })
  });
}
function e_({
  pickerType: e,
  resolvedType: t,
  valuePreview: r = null,
  variableThumbnail: i
}) {
  return r || ("fields" === e && t !== rXF.COLOR ? jsx(Fragment, {
    children: Oi(i)
  }) : null);
}
export function $$eh0({
  dsStyle: e,
  hideContextMenu: t = !1,
  isLinterItem: r,
  isSelected: s,
  isHighlighted: o,
  recordingKey: d,
  keyboardNavigationPath: c,
  onItemHighlight: u,
  onItemSelect: p,
  onItemContextMenu: _,
  onItemMouseLeave: h
}) {
  let m = kH(e.name);
  let {
    showStyleDetails,
    hideStyleDetails
  } = XM();
  let y = useCallback(() => {
    u(e);
  }, [u, e]);
  let {
    setKeyboardNavigationElement,
    keyboardNavigationItem
  } = M3({
    path: c,
    id: tx(e) ?? void 0,
    onFauxFocus: y
  });
  en(keyboardNavigationItem, o);
  let C = useCallback(() => {
    o || y();
  }, [y, o]);
  let O = useCallback(t => {
    _$$i2(t) || (p(e), hideStyleDetails());
  }, [p, e, hideStyleDetails]);
  let R = useCallback(() => {
    h(e);
  }, [h, e]);
  let D = useCallback(t => {
    _(e, {
      x: t.clientX,
      y: t.clientY
    });
  }, [_, e]);
  let k = useRef();
  let M = useSelector(t => _$$e2(t, e));
  let F = useCallback(() => {
    let t = k.current?.getBoundingClientRect();
    t && showStyleDetails({
      dsStyle: e,
      position: t
    });
  }, [e, showStyleDetails]);
  return jsx(eo, {
    ref: Ay(k, setKeyboardNavigationElement),
    highlightStyle: o ? 1 : 0,
    isDisabled: !1,
    isLinterItem: r,
    isSelected: s,
    itemName: jsxs("div", {
      className: JN,
      children: [jsx("div", {
        className: q3,
        children: jsx(zi, {
          dsStyle: e,
          size: iL.Standard,
          disableTooltip: !0
        })
      }), jsx("div", {
        className: Nk,
        children: conditionalFeatureFlag("ds_picker_tooltips", jsx(_$$G, {
          text: m,
          showTooltip: _$$i.WHEN_TRUNCATED
        }), jsx(Fragment, {
          children: m
        }))
      })]
    }),
    onContextMenu: D,
    onMouseDown: O,
    onMouseLeave: R,
    onMouseMove: C,
    recordingKey: d,
    value: t ? null : jsx("div", {
      className: Em,
      children: jsx(_$$d, {
        "aria-label": getI18nString("design_systems.styles.edit_style"),
        recordingKey: Pt(d, "editStyleButton"),
        htmlAttributes: {
          "data-tooltip": getI18nString("design_systems.styles.edit_style"),
          "data-tooltip-type": Ib.TEXT,
          onMouseDown: dG
        },
        "aria-expanded": M,
        onClick: F,
        children: jsx(_$$B, {
          svg: _$$A2
        })
      })
    })
  });
}
function em({
  expression: e,
  isHighlighted: t,
  recordingKey: r,
  keyboardNavigationPath: a,
  onItemHighlight: s,
  onItemSelect: o,
  onItemMouseLeave: l
}) {
  let d = useCallback(() => {
    s(e);
  }, [s, e]);
  let {
    setKeyboardNavigationElement,
    keyboardNavigationItem
  } = M3({
    path: a,
    onFauxFocus: d
  });
  en(keyboardNavigationItem, t);
  let p = useCallback(() => {
    t || d();
  }, [d, t]);
  let _ = useCallback(() => {
    o(e);
  }, [e, o]);
  let h = useCallback(() => {
    l(e);
  }, [l, e]);
  return jsx(eo, {
    ref: setKeyboardNavigationElement,
    highlightStyle: t ? 1 : 0,
    isDisabled: !1,
    isSelected: !1,
    itemName: e.name,
    onMouseDown: _,
    onMouseLeave: h,
    onMouseMove: p,
    recordingKey: r,
    value: e.value
  });
}
function eg({
  componentPropItem: e,
  isHighlighted: t,
  recordingKey: r,
  keyboardNavigationPath: a,
  onItemHighlight: s,
  onItemSelect: o,
  onItemMouseLeave: l
}) {
  let d = useCallback(() => {
    s(e);
  }, [s, e]);
  let {
    setKeyboardNavigationElement,
    keyboardNavigationItem
  } = M3({
    path: a,
    onFauxFocus: d
  });
  en(keyboardNavigationItem, t);
  let p = useCallback(() => {
    t || d();
  }, [d, t]);
  let _ = useCallback(() => {
    o(e);
  }, [e, o]);
  let h = useCallback(() => {
    l(e);
  }, [l, e]);
  let m = e.value;
  let g = Cq(m);
  let f = conditionalFeatureFlag("ds_picker_tooltips", jsx(_$$G, {
    text: m.name,
    showTooltip: _$$i.WHEN_TRUNCATED
  }), jsx(Fragment, {
    children: m.name
  }));
  return jsx(eo, {
    ref: setKeyboardNavigationElement,
    highlightStyle: t ? 1 : 0,
    isDisabled: !1,
    isSelected: !1,
    itemName: g ? jsxs("div", {
      className: JN,
      children: [jsx(LO, {
        value: g,
        onColorChitMouseDown: _,
        resolvedTypeFallback: m.varValue.resolvedType,
        disabled: !1,
        variableThumbnailIconType: sW.COMPONENT
      }), jsx("div", {
        className: Nk,
        "data-testid": "variable-list-item-name",
        children: f
      })]
    }) : f,
    onMouseDown: _,
    onMouseLeave: h,
    onMouseMove: p,
    recordingKey: r,
    value: g && jsx(Fragment, {
      children: Oi(g)
    })
  });
}
function ef({
  cmsFieldItem: e,
  isDisabled: t,
  isHighlighted: r,
  recordingKey: a,
  tooltip: s,
  keyboardNavigationPath: l,
  onItemHighlight: d,
  onItemSelect: c,
  onItemMouseLeave: u
}) {
  let h = useCallback(() => {
    d(e);
  }, [d, e]);
  let {
    setKeyboardNavigationElement,
    keyboardNavigationItem
  } = M3({
    path: l,
    onFauxFocus: h
  });
  en(keyboardNavigationItem, r);
  let f = useCallback(() => {
    r || h();
  }, [h, r]);
  let E = useCallback(() => {
    c(e);
  }, [e, c]);
  let y = useCallback(() => {
    u(e);
  }, [u, e]);
  let b = e.value;
  let T = null;
  if (e.value.fieldType === _j.IMAGE && e?.itemField?.value) try {
    let t = Dh.parse(JSON.parse(e.itemField.value));
    T = jsx(LO, {
      value: {
        type: Z_n.IMAGE,
        resolvedType: rXF.IMAGE,
        value: t
      },
      onColorChitMouseDown: E,
      resolvedTypeFallback: rXF.STRING,
      disabled: !1,
      variableThumbnailIconType: sW.NONE
    });
  } catch (t) {
    reportError(_$$e.CMS, Error("could not parse CMS image field value for VariableListCMSFieldItem thumbnail"), {
      extra: {
        cmsItemFieldId: e.itemField.id,
        collectionFieldSchemaId: e.value.id
      }
    });
  } else e.value.fieldType === _j.RICH_TEXT && (T = jsx(gF, {
    disabled: t,
    icon: jsx(_$$I, {}),
    svgSrc: _$$A4
  }));
  null === T && (T = jsx(LO, {
    value: {
      type: Z_n.STRING,
      resolvedType: rXF.STRING,
      value: b.name
    },
    onColorChitMouseDown: E,
    resolvedTypeFallback: rXF.STRING,
    disabled: !1,
    variableThumbnailIconType: sW.NONE
  }));
  return jsx(eo, {
    ref: setKeyboardNavigationElement,
    highlightStyle: r ? 1 : 0,
    isDisabled: t,
    isSelected: !1,
    itemName: jsxs("div", {
      className: JN,
      children: [T, jsx("div", {
        className: Nk,
        "data-testid": "variable-list-item-name",
        children: b.name
      })]
    }),
    onMouseDown: E,
    onMouseLeave: y,
    onMouseMove: f,
    recordingKey: a,
    tooltip: s
  });
}
export let $$eE3 = forwardRef(function ({
  listItems: e,
  selectedItemID: t,
  highlightedItemID: r,
  className: a,
  recordingKey: s,
  onItemHighlight: o,
  onItemSelect: l,
  onItemContextMenu: d,
  onItemMouseLeave: c
}, u) {
  let p = useRef(null);
  let _ = Te({
    count: e.length,
    getScrollElement: () => p.current,
    estimateSize: t => jx(e[t], "grid"),
    getItemKey: t => vu(e[t], t),
    overscan: 10,
    paddingStart: Vc,
    paddingEnd: Vc
  });
  useImperativeHandle(u, () => ({
    scrollToTop: () => _.scrollToOffset(0),
    scrollToIndex: (e, t) => _.scrollToIndex(e, t),
    getVirtualItems: () => _.getVirtualItems()
  }));
  return jsx("div", {
    ref: p,
    style: {
      height: w4({
        layout: "grid",
        listHeightPx: _.getTotalSize()
      }),
      overflow: "auto"
    },
    className: a,
    children: jsx("div", {
      style: {
        height: `${_.getTotalSize()}px`,
        position: "relative"
      },
      children: _.getVirtualItems().map(i => jsx("div", {
        className: mz,
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: `${i.size}px`,
          transform: `translateY(${i.start}px)`
        },
        children: jsx(ey, {
          listItem: e[i.index],
          index: i.index,
          selectedItemID: t,
          highlightedItemID: r,
          recordingKey: s,
          onItemHighlight: o,
          onItemSelect: l,
          onItemContextMenu: d,
          onItemMouseLeave: c
        })
      }, i.key))
    })
  });
});
function ey({
  listItem: e,
  index: t,
  selectedItemID: r,
  highlightedItemID: a,
  recordingKey: o,
  onItemHighlight: l,
  onItemSelect: d,
  onItemMouseLeave: c,
  onItemContextMenu: u
}) {
  let p = useMemo(() => [1, t], [t]);
  switch (e.type) {
    case Yc.ASSET_TYPE:
      return jsx(el, {
        assetType: e.name,
        tooltip: e.tooltip
      });
    case Yc.SECTION_HEADER:
      return jsx($$ed2, {
        groupName: e.name,
        fileName: e.fileName,
        secondaryText: e.secondaryText
      });
    case Yc.HIERARCHY_PATH:
      return jsx($$eu4, {
        groupName: e.name
      });
    case Yc.FILE_NAME:
      {
        let t = tx(e);
        return jsx(ec, {
          fileNameItem: e,
          onItemHighlight: l,
          onItemSelect: d,
          isHighlighted: !!t && t === a
        });
      }
    case Yc.VARIABLES:
      return jsx("div", {
        className: Dm,
        children: e.items.map((t, i) => {
          let s = tx(t);
          return jsx(eb, {
            column: i,
            isHighlighted: tx(t) === a,
            isSelected: tx(t) === r,
            keyboardNavigationPath: p,
            onItemHighlight: l,
            onItemMouseLeave: c,
            onItemSelect: d,
            recordingKey: s ? Pt(o, s) : void 0,
            variable: t,
            variableSet: e.variableSet
          }, tx(t));
        })
      });
    case Yc.STYLES:
      return jsx("div", {
        className: _$$KP,
        children: e.items.map((e, t) => {
          let i = tx(e);
          return jsx(m3, {
            dsStyle: e,
            children: jsx(eT, {
              column: t,
              dsStyle: e,
              isHighlighted: tx(e) === a,
              isSelected: tx(e) === r,
              keyboardNavigationPath: p,
              onItemContextMenu: u,
              onItemHighlight: l,
              onItemMouseLeave: c,
              onItemSelect: d,
              recordingKey: i ? Pt(o, i) : void 0
            })
          }, e.key);
        })
      });
    case Yc.SEPARATOR:
      return jsx("div", {
        className: me
      });
    case Yc.EXPRESSION:
    case Yc.COMPONENT_PROPS:
    case Yc.CMS_FIELDS:
      return null;
    default:
      throwTypeError(e);
  }
}
function eb({
  variable: e,
  variableSet: t,
  isSelected: r,
  isHighlighted: a,
  recordingKey: s,
  keyboardNavigationPath: o,
  column: l,
  onItemHighlight: c,
  onItemSelect: u,
  onItemMouseLeave: p
}) {
  let {
    thumbnailValue
  } = _$$A({
    variable: e,
    variableCollection: t
  });
  let m = useCallback(() => {
    c(e);
  }, [c, e]);
  let {
    setKeyboardNavigationElement,
    keyboardNavigationItem
  } = M3({
    path: o,
    column: l,
    id: tx(e),
    onFauxFocus: m
  });
  en(keyboardNavigationItem, a);
  let E = useCallback(() => {
    a || m();
  }, [m, a]);
  let b = useCallback(() => {
    u(e);
  }, [u, e]);
  let T = useCallback(() => {
    p(e);
  }, [p, e]);
  if ("MIXED" === thumbnailValue || thumbnailValue?.resolvedType !== rXF.COLOR) return null;
  {
    let t = thumbnailValue.value;
    return jsx(_$$E, {
      ref: setKeyboardNavigationElement,
      className: y()(a5, {
        [FL]: a,
        [J1]: r
      }),
      htmlAttributes: {
        "data-tooltip": kH(e.name),
        "data-tooltip-type": Ib.TEXT,
        onMouseLeave: T,
        onMouseMove: E
      },
      onClick: b,
      recordingKey: s,
      children: jsx(_$$J, {
        className: xH,
        color: t
      })
    });
  }
}
function eT({
  dsStyle: e,
  isSelected: t,
  isHighlighted: r,
  recordingKey: a,
  keyboardNavigationPath: s,
  column: o,
  onItemHighlight: l,
  onItemSelect: d,
  onItemMouseLeave: c,
  onItemContextMenu: u
}) {
  let p = useCallback(() => {
    l(e);
  }, [l, e]);
  let {
    setKeyboardNavigationElement,
    keyboardNavigationItem
  } = M3({
    path: s,
    column: o,
    id: tx(e),
    onFauxFocus: p
  });
  en(keyboardNavigationItem, r);
  let m = useCallback(() => {
    r || p();
  }, [p, r]);
  let g = useCallback(() => {
    c(e);
  }, [c, e]);
  let f = useCallback(() => {
    d(e);
  }, [d, e]);
  let E = useCallback(t => {
    u(e, {
      x: t.clientX,
      y: t.clientY
    });
  }, [u, e]);
  return jsx(eI, {
    ref: setKeyboardNavigationElement,
    recordingKey: a,
    dsStyle: e,
    isSelected: t,
    isHighlighted: r,
    onClick: f,
    onMouseMove: m,
    onMouseLeave: g,
    onContextMenu: E
  });
}
let eI = forwardRef(function ({
  dsStyle: e,
  isSelected: t,
  isHighlighted: r,
  recordingKey: i,
  onClick: a,
  onMouseMove: s,
  onMouseLeave: o,
  onContextMenu: l
}, c) {
  return jsx(_$$E, {
    ref: c,
    className: y()(LH, {
      [ut]: r,
      [X$]: t
    }),
    htmlAttributes: {
      "data-tooltip-type": Ib.SPECIAL,
      "data-tooltip": _$$Z,
      "data-tooltip-style-name": kH(e.name || ""),
      "data-tooltip-style-description": e.description,
      onContextMenu: l,
      onMouseLeave: o,
      onMouseMove: s
    },
    recordingKey: i,
    onClick: a,
    children: jsx(zi, {
      dsStyle: e,
      size: iL.Large_variables,
      disableTooltip: !0
    })
  });
});
export const DL = $$eh0;
export const HZ = $$ei1;
export const KL = $$ed2;
export const Rm = $$eE3;
export const Tg = $$eu4;
export const _J = $$ep5;