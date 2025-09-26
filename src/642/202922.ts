import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect, useContext, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { d as _$$d } from "../905/976845";
import { m as _$$m } from "../905/367152";
import { M as _$$M } from "../1528/793871";
import { e as _$$e } from "../905/149844";
import { Fullscreen, AppStateTsApi, ComponentPropType, StateHierarchy } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { getFeatureFlags } from "../905/601108";
import h from "classnames";
import { generateRecordingKey, useHandleMouseEvent } from "../figma_app/878298";
import { generateUUIDv4 } from "../905/871474";
import { c$, wv } from "../figma_app/236327";
import { getI18nString, renderI18nText } from "../905/303541";
import { hideDropdownAction, showDropdownThunk } from "../905/929976";
import { hidePickerThunk, showPickerThunk } from "../figma_app/91703";
import { showModalHandler } from "../905/156213";
import { wP } from "../9410/845608";
import { fullscreenValue } from "../figma_app/455680";
import { s as _$$s } from "../figma_app/874592";
import { Dr, Ct } from "../figma_app/803787";
import { KindEnum } from "../905/129884";
import { calculatePickerPositionLeft } from "../905/959568";
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
import { Checkbox } from "../905/274480";
import { Label } from "../905/270045";
import { IconButton } from "../905/443068";
import { y as _$$y } from "../905/582657";
import { f as _$$f } from "../905/335032";
import { S as _$$S2 } from "../figma_app/552746";
import { TextWithTruncation } from "../905/984674";
import { stopPropagation } from "../figma_app/753501";
import { t8, R$, e6 } from "../figma_app/545190";
import { K4, Z3 } from "../figma_app/461594";
import { uQ } from "../figma_app/151869";
import { Point } from "../905/736624";
import { BUBBLED_PROPS_PICKER, DROPDOWN_HEIGHT, ADD_COMPONENT_PROP_DROPDOWN, trackComponentPropsModalOpen, DisplayMode, getComponentPropDisplayName, renderComponentPropIcon, PanelWidth, DefinitionAssignment } from "../figma_app/164212";
import { DraggableModalManager } from "../905/748636";
import { n as _$$n2 } from "../905/841238";
import { Jp } from "../figma_app/95266";
import { selectNodeFromCombinedId } from "../figma_app/505098";
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
    permissionScopeHandler.user("toggle-props-bubbled", () => Fullscreen.togglePropsAreBubbled(e));
    AppStateTsApi.canvasViewState().temporarilyHoveredNodes.set([]);
  };
  let _ = e => {
    AppStateTsApi.canvasViewState().temporarilyHoveredNodes.set(e);
  };
  let b = () => {
    AppStateTsApi.canvasViewState().temporarilyHoveredNodes.set([]);
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
        recordingKey: generateRecordingKey(e, a[0]) ?? "",
        children: showUnbubbledPrimaryInstances ? jsx(en, {
          data: n,
          showNumHidden,
          onUnbubbleInstance: x,
          recordingKey: generateRecordingKey(e, "checkbox", a[0]),
          wideContainer
        }) : jsx(es, {
          data: n,
          onUnbubbleInstance: x,
          recordingKey: generateRecordingKey(e, "unbubble", a[0]),
          wideContainer
        })
      }, i);
    }), !d && C > 0 && jsx(t8, {
      label: getI18nString("design_systems.component_properties.show_more_nested_instances_rows", {
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
    children: [jsx(Checkbox, {
      checked: e.isBubbled,
      onChange: () => {
        e.connectedGUIDs[0] && t(e.connectedGUIDs[0]);
      },
      recordingKey: i,
      label: jsx(Label, {
        children: jsx(TextWithTruncation, {
          truncate: "line-clamp",
          lineClamp: 2,
          children: e.name
        })
      })
    }), s && !!e.numHidden && jsx("div", {
      className: "bubbled_instances_list--numHidden--fW-Sr",
      children: renderI18nText("design_systems.component_properties.num_hidden", {
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
      children: jsx(IconButton, {
        "aria-label": getI18nString("design_systems.component_properties.unbubble_instance"),
        onClick: () => {
          t(e.connectedGUIDs[0]);
        },
        recordingKey: s,
        htmlAttributes: {
          "data-tooltip": getI18nString("design_systems.component_properties.unbubble_instance"),
          "data-tooltip-type": KindEnum.TEXT,
          onMouseDown: stopPropagation
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
  return t?.id !== BUBBLED_PROPS_PICKER ? null : jsx(DraggableModalManager, {
    title: getI18nString("design_systems.component_properties.expose_nested_instances"),
    initialPosition: n,
    initialWidth: DROPDOWN_HEIGHT,
    headerSize: "small",
    onClose: () => {
      s(hidePickerThunk());
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
  let d = useSelector(selectNodeFromCombinedId);
  let h = !useSelector(Jp);
  let m = useSelector(e => !!e.dropdownShown && e.dropdownShown.type === ADD_COMPONENT_PROP_DROPDOWN);
  let w = useSelector(e => !!e.modalShown && e.modalShown.type === _$$n2.type);
  let {
    componentDescription
  } = z6();
  let F = useSelector(e => e.pickerShown);
  let B = m || w || F?.id === BUBBLED_PROPS_PICKER;
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
    F && s(hidePickerThunk());
    m ? s(hideDropdownAction()) : s(showDropdownThunk({
      type: ADD_COMPONENT_PROP_DROPDOWN
    }));
  }, [s, F, m]);
  let Q = useCallback(e => {
    trackComponentPropsModalOpen(d, !1, e, DisplayMode.ICON);
    let t = J.current;
    let r = t ? calculatePickerPositionLeft(t, DROPDOWN_HEIGHT) : {};
    s(showModalHandler({
      type: _$$n2,
      data: {
        propType: e,
        initialX: r?.x ?? 0,
        initialY: r?.y ?? 0
      }
    }));
  }, [s, d]);
  let et = useCallback(() => {
    d && (d.isLooseComponent ? fullscreenValue.triggerActionInUserEditScope("create-state-group") : Q(ComponentPropType.VARIANT));
  }, [Q, d]);
  let es = useCallback(() => {
    let e = J.current;
    let t = e ? calculatePickerPositionLeft(e, DROPDOWN_HEIGHT) : {};
    s(showPickerThunk({
      id: BUBBLED_PROPS_PICKER,
      initialX: t?.x,
      initialY: t?.y
    }));
  }, [s]);
  let er = useCallback(async () => {
    if (!d) return;
    let e = (await submit({
      components: [d],
      clientLifecycleId: generateUUIDv4()
    }))[0];
    e && permissionScopeHandler.user("apply-suggested-props", () => {
      apply(e);
    });
  }, [submit, apply, d]);
  let en = d?.isCodeComponent;
  let ei = [...(getFeatureFlags().ds_variable_props_number_def ? [ComponentPropType.NUMBER] : []), ComponentPropType.TEXT, ComponentPropType.BOOL, ...(en ? [] : [ComponentPropType.INSTANCE_SWAP]), ...(getFeatureFlags().dse_slots ? [ComponentPropType.SLOT] : [])];
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
        children: renderI18nText("design_systems.component_properties.create_property")
      }), !en && jsxs(c$, {
        className: eh,
        onClick: et,
        recordingKey: generateRecordingKey("openCreatePropModal", getComponentPropDisplayName(ComponentPropType.VARIANT)),
        children: [jsx(Nu, {
          children: jsx(Fragment, {
            children: jsx(_$$m, {})
          })
        }), renderI18nText("design_systems.component_properties.across_variants")]
      }), ei.map(e => jsxs(c$, {
        className: eh,
        onClick: () => Q(e),
        recordingKey: generateRecordingKey("openCreatePropModal", getComponentPropDisplayName(e)),
        children: [jsx(Nu, {
          children: renderComponentPropIcon(e, !0)
        }), getComponentPropDisplayName(e)]
      }, e)), H && jsxs(Fragment, {
        children: [jsx(wv, {}), jsx(c$, {
          disabled: !0,
          className: em,
          children: renderI18nText("design_systems.component_properties.expose_nested_instances")
        }), jsxs(c$, {
          className: eh,
          onClick: es,
          recordingKey: "openBubbledPropPicker",
          children: [jsx(Nu, {
            children: jsx(_$$M, {})
          }), getI18nString("design_systems.component_properties.choose_instances")]
        })]
      }), getFeatureFlags().first_draft_suggest_props && jsxs(Fragment, {
        children: [jsx(wv, {}), jsxs(c$, {
          className: eh,
          onClick: er,
          recordingKey: "suggestProps",
          children: [jsx(Nu, {
            children: jsx(_$$M, {})
          }), getI18nString("first_draft.suggest_properties")]
        })]
      })]
    }), F?.id === BUBBLED_PROPS_PICKER && jsx(eo, {}), jsx(e6, {
      containerWidth: PanelWidth.RESIZABLE_SIDEBAR,
      propDimension: DefinitionAssignment.DEFINITION,
      guids: [d.guid],
      recordingKey: e,
      enableHidingOverflowRowsInUI3: !1,
      entrypointForInstanceSwapPicker: null
    }), K && jsxs(Fragment, {
      children: [jsx("p", {
        className: "props_panel--bubbledInstancesHeading--C26v2",
        children: getI18nString("design_systems.component_properties.bubbled_instances")
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
  let u = useHandleMouseEvent("openCreatePropModalDropdown", "click", i);
  let p = useHandleMouseEvent("openCreatePropModalDropdown", "mousedown", e => e?.stopPropagation());
  return jsx(pG, {
    onClick: u,
    onMouseDown: p,
    ref: o,
    input: renderI18nText("design_systems.component_properties.properties"),
    label: null,
    appendedClassName: m()(a ? "props_panel--ui3PanelHeaderRowSAP--ws4dj props_panel--ui3PanelHeaderRow--Ab8Jz" : "props_panel--ui3PanelHeaderRow--Ab8Jz", {
      [yf]: !e
    }),
    icon: t !== StateHierarchy.STATE ? jsx("div", {
      ref: s,
      className: "props_panel--addButtonContainer--a58gi",
      children: jsx(_$$d, {
        "aria-expanded": e,
        htmlAttributes: {
          "data-tooltip-type": KindEnum.TEXT,
          "data-tooltip": getI18nString("design_systems.component_panel.create_component_property")
        },
        "aria-label": getI18nString("design_systems.component_panel.create_component_property"),
        children: jsx(_$$e, {})
      })
    }) : void 0
  });
}
export const BS = $$eg0;