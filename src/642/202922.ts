import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect, useContext, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "../vendor/514228";
import { d as _$$d } from "../905/976845";
import { m as _$$m } from "../905/367152";
import { M as _$$M } from "../1528/793871";
import { e as _$$e } from "../905/149844";
import { glU, Ez5, J0O, iCO } from "../figma_app/763686";
import { l7 } from "../905/189185";
import { getFeatureFlags } from "../905/601108";
import h from "classnames";
import { Pt, rf } from "../figma_app/806412";
import { g as _$$g } from "../905/880308";
import { c$, wv } from "../figma_app/236327";
import { t as _$$t, tx } from "../905/303541";
import { oB, j7 } from "../905/929976";
import { XE, u1 } from "../figma_app/91703";
import { to } from "../905/156213";
import { wP } from "../9410/845608";
import { Y5 } from "../figma_app/455680";
import { s as _$$s } from "../figma_app/874592";
import { Dr, Ct } from "../figma_app/803787";
import { Ib } from "../905/129884";
import { cn } from "../905/959568";
import { Nu } from "../figma_app/23780";
import { Cf } from "../905/504727";
import { z6 } from "../figma_app/967154";
import { Q as _$$Q } from "../642/688711";
import { n as _$$n } from "../642/665823";
import { U as _$$U } from "../642/848308";
import { Zk } from "../figma_app/626177";
import { i$ } from "../figma_app/150804";
import { DE, Ad } from "../figma_app/811257";
import { pG } from "../figma_app/47085";
import { S as _$$S } from "../905/274480";
import { J as _$$J } from "../905/270045";
import { K as _$$K } from "../905/443068";
import { y as _$$y } from "../905/582657";
import { f as _$$f } from "../905/335032";
import { S as _$$S2 } from "../figma_app/552746";
import { E as _$$E } from "../905/984674";
import { dG } from "../figma_app/753501";
import { t8, R$, e6 } from "../figma_app/545190";
import { K4, Z3 } from "../figma_app/461594";
import { uQ } from "../figma_app/151869";
import { Point } from "../905/736624";
import { Dd, wh, C4, Pp, Fv, xb, zn, O2, OE } from "../figma_app/164212";
import { Ao } from "../905/748636";
import { n as _$$n2 } from "../905/841238";
import { Jp } from "../figma_app/95266";
import { od } from "../figma_app/505098";
import { yf } from "../905/42379";
var m = h;
let X = "bubbled_instances_list--instanceName--09LuV";
let q = "bubbled_instances_list--instanceNameWide---L338 bubbled_instances_list--instanceName--09LuV";
let J = "bubbled_instances_list--ui3InstanceNameAndIcon--W4S9T component_prop_def_row--ui3ComponentPanelNameAndIcon--01Z6g component_prop_def_row--ui3ComponentPropDefNameContainer--fBQXq";
let Z = "bubbled_instances_list--ui3LineContainer--OdBbV";
let Q = "bubbled_instances_list--ui3Line--SIYpX";
function ee(e) {
  let {
    showUnbubbledPrimaryInstances,
    showNumHidden,
    wideContainer,
    scrollableContainer
  } = e;
  let o = useSelector(K4);
  let [d, p] = useState(!1);
  let h = uQ();
  let f = showUnbubbledPrimaryInstances ? o : o?.filter(e => e.isBubbled);
  let x = e => {
    l7.user("toggle-props-bubbled", () => glU.togglePropsAreBubbled(e));
    Ez5.canvasViewState().temporarilyHoveredNodes.set([]);
  };
  let _ = e => {
    Ez5.canvasViewState().temporarilyHoveredNodes.set(e);
  };
  let b = () => {
    Ez5.canvasViewState().temporarilyHoveredNodes.set([]);
  };
  let C = 0;
  let j = !showUnbubbledPrimaryInstances && !d && null != f && f.length > 5;
  let v = j ? f.slice(0, 4) : f;
  j && (C = f.length - 4);
  useEffect(() => () => {
    b();
  }, []);
  useEffect(() => {
    b();
  }, [h]);
  return jsxs("div", {
    className: m()({
      "bubbled_instances_list--scrollableContainer--ob0LQ": scrollableContainer
    }),
    children: [v?.map((n, i) => {
      let a = n.connectedGUIDs.slice(0).sort();
      return jsx(_$$S2.recordableDiv, {
        className: "bubbled_instances_list--instanceSection--tLYN0",
        onMouseEnter: () => _(n.connectedGUIDs),
        onMouseLeave: b,
        recordingKey: Pt(e, a[0]) ?? "",
        children: showUnbubbledPrimaryInstances ? jsx(en, {
          data: n,
          showNumHidden,
          onUnbubbleInstance: x,
          recordingKey: Pt(e, "checkbox", a[0]),
          wideContainer
        }) : jsx(es, {
          data: n,
          onUnbubbleInstance: x,
          recordingKey: Pt(e, "unbubble", a[0]),
          wideContainer
        })
      }, i);
    }), !d && C > 0 && jsx(t8, {
      label: _$$t("design_systems.component_properties.show_more_nested_instances_rows", {
        count: C
      }),
      onClick: () => p(!0)
    })]
  });
}
function et({
  data: e,
  onUnbubbleInstance: t,
  showNumHidden: s,
  wideContainer: n,
  recordingKey: i
}) {
  return jsxs("div", {
    className: n ? "bubbled_instances_list--checkboxContainerWide--Kdd3u bubbled_instances_list--checkboxContainer--qm3X7" : "bubbled_instances_list--checkboxContainer--qm3X7",
    children: [jsx(_$$S, {
      checked: e.isBubbled,
      onChange: () => {
        e.connectedGUIDs[0] && t(e.connectedGUIDs[0]);
      },
      recordingKey: i,
      label: jsx(_$$J, {
        children: jsx(_$$E, {
          truncate: "line-clamp",
          lineClamp: 2,
          children: e.name
        })
      })
    }), s && !!e.numHidden && jsx("div", {
      className: "bubbled_instances_list--numHidden--fW-Sr",
      children: tx("design_systems.component_properties.num_hidden", {
        num: e.numHidden
      })
    })]
  });
}
function es({
  data: e,
  onUnbubbleInstance: t,
  recordingKey: s,
  wideContainer: n
}) {
  let {
    bubbledNestedInstances
  } = e;
  let l = jsx(DE, {
    label: null,
    input: jsxs("div", {
      className: J,
      children: [jsx("div", {
        className: "bubbled_instances_list--instanceIcon--aRlGl",
        children: jsx(_$$y, {})
      }), jsx("p", {
        className: X,
        children: e.name
      })]
    }),
    icon: jsx("div", {
      className: "bubbled_instances_list--minusIcon--dY8i-",
      children: jsx(_$$K, {
        "aria-label": _$$t("design_systems.component_properties.unbubble_instance"),
        onClick: () => {
          t(e.connectedGUIDs[0]);
        },
        recordingKey: s,
        htmlAttributes: {
          "data-tooltip": _$$t("design_systems.component_properties.unbubble_instance"),
          "data-tooltip-type": Ib.TEXT,
          onMouseDown: dG
        },
        children: jsx(_$$f, {})
      })
    })
  });
  return 0 === bubbledNestedInstances.length ? l : jsx(er, {
    data: e,
    row: l,
    wideContainer: n
  });
}
function er({
  data: e,
  row: t,
  wideContainer: s
}) {
  return jsx(R$, {
    row: t,
    isCollapsedByDefault: !0,
    children: e.bubbledNestedInstances.map((e, t) => jsx("div", {
      children: jsx(DE, {
        label: null,
        input: jsxs("div", {
          className: J,
          children: [jsx("div", {
            className: Z,
            children: jsx("div", {
              className: Q
            })
          }), jsx("div", {
            className: s ? q : X,
            children: e.name
          })]
        }),
        icon: null
      })
    }, t))
  });
}
function en({
  data: e,
  onUnbubbleInstance: t,
  recordingKey: s,
  showNumHidden: n,
  wideContainer: i
}) {
  return jsxs(Fragment, {
    children: [jsx(Ad, {
      label: null,
      input: jsx(et, {
        data: e,
        onUnbubbleInstance: t,
        showNumHidden: n,
        wideContainer: i,
        recordingKey: s
      })
    }), e.bubbledNestedInstances.map((e, t) => jsx("div", {
      children: jsx(Ad, {
        label: null,
        input: jsxs("div", {
          className: "bubbled_instances_list--ui3CheckboxViewNestedInstance--YgTEc",
          children: [jsx("div", {
            className: Z,
            children: jsx("div", {
              className: Q
            })
          }), jsx("div", {
            className: i ? q : X,
            children: e.name
          })]
        })
      })
    }, t))]
  });
}
function eo() {
  let e = "bubbledPropsPicker";
  let t = useSelector(e => e.pickerShown);
  let s = useDispatch();
  let n = new Point(t?.initialX, t?.initialY);
  return t?.id !== Dd ? null : jsx(Ao, {
    title: _$$t("design_systems.component_properties.expose_nested_instances"),
    initialPosition: n,
    initialWidth: wh,
    headerSize: "small",
    onClose: () => {
      s(XE());
    },
    recordingKey: e,
    children: jsx("div", {
      className: "bubbled_props_picker--container--I6VX-",
      children: jsx(ee, {
        showUnbubbledPrimaryInstances: !0,
        showNumHidden: !0,
        wideContainer: !0,
        scrollableContainer: !0,
        recordingKey: e
      })
    })
  });
}
let eh = "props_panel--dropdownRowWithIcon--03FtD";
let em = "props_panel--dropdownRowWithoutIcon--F8Ra-";
export function $$eg0({
  recordingKey: e,
  isInSelectionActionsPanel: t
}) {
  let s = useDispatch();
  let l = useSelector(i$);
  let d = useSelector(od);
  let h = !useSelector(Jp);
  let m = useSelector(e => !!e.dropdownShown && e.dropdownShown.type === C4);
  let w = useSelector(e => !!e.modalShown && e.modalShown.type === _$$n2.type);
  let {
    componentDescription
  } = z6();
  let F = useSelector(e => e.pickerShown);
  let B = m || w || F?.id === Dd;
  let K = !!useSelector(Z3).length;
  let G = useSelector(K4);
  let H = !!G?.length;
  let V = useSelector(Dr);
  let U = useSelector(Ct);
  let {
    allowLibraryPublish
  } = useContext(_$$s);
  let {
    submit,
    apply
  } = wP();
  let q = useRef(null);
  let J = useRef(null);
  let Z = useCallback(e => {
    F && s(XE());
    m ? s(oB()) : s(j7({
      type: C4
    }));
  }, [s, F, m]);
  let Q = useCallback(e => {
    Pp(d, !1, e, Fv.ICON);
    let t = J.current;
    let r = t ? cn(t, wh) : {};
    s(to({
      type: _$$n2,
      data: {
        propType: e,
        initialX: r?.x ?? 0,
        initialY: r?.y ?? 0
      }
    }));
  }, [s, d]);
  let et = useCallback(() => {
    d && (d.isLooseComponent ? Y5.triggerActionInUserEditScope("create-state-group") : Q(J0O.VARIANT));
  }, [Q, d]);
  let es = useCallback(() => {
    let e = J.current;
    let t = e ? cn(e, wh) : {};
    s(u1({
      id: Dd,
      initialX: t?.x,
      initialY: t?.y
    }));
  }, [s]);
  let er = useCallback(async () => {
    if (!d) return;
    let e = (await submit({
      components: [d],
      clientLifecycleId: _$$g()
    }))[0];
    e && l7.user("apply-suggested-props", () => {
      apply(e);
    });
  }, [submit, apply, d]);
  let en = d?.isCodeComponent;
  let ei = [...(getFeatureFlags().ds_variable_props_number_def ? [J0O.NUMBER] : []), J0O.TEXT, J0O.BOOL, ...(en ? [] : [J0O.INSTANCE_SWAP]), ...(getFeatureFlags().dse_slots ? [J0O.SLOT] : [])];
  return d ? jsxs(Zk, {
    ref: J,
    style: t ? {
      paddingBottom: 0,
      borderBottom: "none"
    } : void 0,
    children: [jsx(_$$Q, {}), h ? null : jsx(_$$n, {
      description: componentDescription
    }), jsx(ef, {
      isPanelEmpty: h,
      isAddPropButtonSelected: B,
      hasBubbledInstances: K,
      stateGroupSelectionMode: l,
      selectAddPropOptionRef: q,
      toggleAddPropDropdown: Z,
      recordingKey: e,
      isInSelectionActionsPanel: t
    }), m && q.current && jsxs(Cf, {
      targetRect: q.current.getBoundingClientRect(),
      propagateCloseClick: !0,
      children: [jsx(c$, {
        disabled: !0,
        className: em,
        children: tx("design_systems.component_properties.create_property")
      }), !en && jsxs(c$, {
        className: eh,
        onClick: et,
        recordingKey: Pt("openCreatePropModal", xb(J0O.VARIANT)),
        children: [jsx(Nu, {
          children: jsx(Fragment, {
            children: jsx(_$$m, {})
          })
        }), tx("design_systems.component_properties.across_variants")]
      }), ei.map(e => jsxs(c$, {
        className: eh,
        onClick: () => Q(e),
        recordingKey: Pt("openCreatePropModal", xb(e)),
        children: [jsx(Nu, {
          children: zn(e, !0)
        }), xb(e)]
      }, e)), H && jsxs(Fragment, {
        children: [jsx(wv, {}), jsx(c$, {
          disabled: !0,
          className: em,
          children: tx("design_systems.component_properties.expose_nested_instances")
        }), jsxs(c$, {
          className: eh,
          onClick: es,
          recordingKey: "openBubbledPropPicker",
          children: [jsx(Nu, {
            children: jsx(_$$M, {})
          }), _$$t("design_systems.component_properties.choose_instances")]
        })]
      }), getFeatureFlags().first_draft_suggest_props && jsxs(Fragment, {
        children: [jsx(wv, {}), jsxs(c$, {
          className: eh,
          onClick: er,
          recordingKey: "suggestProps",
          children: [jsx(Nu, {
            children: jsx(_$$M, {})
          }), _$$t("first_draft.suggest_properties")]
        })]
      })]
    }), F?.id === Dd && jsx(eo, {}), jsx(e6, {
      containerWidth: O2.RESIZABLE_SIDEBAR,
      propDimension: OE.DEFINITION,
      guids: [d.guid],
      recordingKey: e,
      enableHidingOverflowRowsInUI3: !1,
      entrypointForInstanceSwapPicker: null
    }), K && jsxs(Fragment, {
      children: [jsx("p", {
        className: "props_panel--bubbledInstancesHeading--C26v2",
        children: _$$t("design_systems.component_properties.bubbled_instances")
      }), jsx(ee, {
        recordingKey: e
      })]
    }), V && U && allowLibraryPublish ? jsx(Ad, {
      label: null,
      input: jsx(_$$U, {})
    }) : null]
  }) : null;
}
function ef({
  isAddPropButtonSelected: e,
  stateGroupSelectionMode: t,
  selectAddPropOptionRef: s,
  toggleAddPropDropdown: i,
  isInSelectionActionsPanel: a
}) {
  let o = useRef(null);
  let u = rf("openCreatePropModalDropdown", "click", i);
  let p = rf("openCreatePropModalDropdown", "mousedown", e => e?.stopPropagation());
  return jsx(pG, {
    onClick: u,
    onMouseDown: p,
    ref: o,
    input: tx("design_systems.component_properties.properties"),
    label: null,
    appendedClassName: m()(a ? "props_panel--ui3PanelHeaderRowSAP--ws4dj props_panel--ui3PanelHeaderRow--Ab8Jz" : "props_panel--ui3PanelHeaderRow--Ab8Jz", {
      [yf]: !e
    }),
    icon: t !== iCO.STATE ? jsx("div", {
      ref: s,
      className: "props_panel--addButtonContainer--a58gi",
      children: jsx(_$$d, {
        "aria-expanded": e,
        htmlAttributes: {
          "data-tooltip-type": Ib.TEXT,
          "data-tooltip": _$$t("design_systems.component_panel.create_component_property")
        },
        "aria-label": _$$t("design_systems.component_panel.create_component_property"),
        children: jsx(_$$e, {})
      })
    }) : void 0
  });
}
export const BS = $$eg0;