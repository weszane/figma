import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useRef, useState, useMemo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { lQ } from "../905/934246";
import { TabLoop } from "../905/718764";
import { Button } from "../905/521428";
import { ComponentPropType, Fullscreen, VariableResolvedDataType } from "../figma_app/763686";
import { resolveVariableValue } from "../905/929949";
import { getFeatureFlags } from "../905/601108";
import { X as _$$X } from "../905/606795";
import { KeyCodes } from "../905/63728";
import { generateRecordingKey } from "../figma_app/878298";
import { RecordableInput } from "../905/511649";
import { Point } from "../905/736624";
import { CloseButton } from "../905/17223";
import { TQ, Zl } from "../905/211621";
import { LazyInputForwardRef } from "../905/408237";
import { renderI18nText, getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { hidePickerThunk } from "../figma_app/91703";
import { vq } from "../905/8732";
import { uP } from "../figma_app/933328";
import { hideModal } from "../905/156213";
import { useSceneGraphSelector } from "../figma_app/722362";
import { PrimaryWorkflowEnum } from "../figma_app/633080";
import { registerModal } from "../905/102752";
import { S as _$$S } from "../905/459477";
import { D as _$$D, x as _$$x } from "../905/1253";
import { NO } from "../905/498139";
import { Xj } from "../905/748636";
import { Ql, wd, Xp, wh, xb, ui, dl } from "../figma_app/164212";
import { uS, c9, DD, _I } from "../905/211095";
import { bq, dl as _$$dl, Kn, i0 } from "../figma_app/65182";
import { D as _$$D2 } from "../905/589275";
import { bL } from "../905/911410";
import { DialogContents, DialogHeader, DialogBody } from "../figma_app/272243";
import { InputComponent } from "../905/185998";
import { Label } from "../905/270045";
import { useDebounce } from 'use-debounce';
import { KindEnum } from "../905/129884";
import { u as _$$u } from "../905/419626";
import { useHideContextMenu } from "../figma_app/380814";
function W({
  initialPosition: e,
  defaultName: t,
  defaultDescription: i,
  onCreatePropSubmit: a,
  onClose: s,
  preferredProductComponents: o,
  onSetPreferredProductComponents: l,
  recordingKey: d
}) {
  let c = useRef(null);
  useHideContextMenu(c);
  return jsx(bL, {
    onClose: s,
    width: 304,
    defaultPosition: e,
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx("div", {
          className: "x78zum5 x6s0dn4 x1qughib x1iyjqo2 x1s688f x1j6dyjg x163pfp",
          children: renderI18nText("design_systems.component_properties.slot_create_modal.create_slot_title")
        })
      }), jsx(DialogBody, {
        padding: {
          left: 0,
          right: 0
        },
        children: jsx("div", {
          ref: c,
          children: jsx(K, {
            preferredProductComponents: o,
            onSetPreferredProductComponents: l,
            onFormSubmit: a,
            defaultValue: {
              propName: t,
              propDescription: i
            },
            recordingKey: d
          })
        })
      })]
    })
  });
}
function K({
  onFormSubmit: e,
  defaultValue: t,
  preferredProductComponents: i,
  onSetPreferredProductComponents: a,
  recordingKey: s
}) {
  let [o, c] = useState({
    propName: t?.propName ?? "Slot",
    propDescription: t?.propDescription ?? ""
  });
  let [u] = useDebounce(o, 50);
  let p = useMemo(() => u.propName.length > 0, [u.propName]);
  let m = useCallback(e => {
    c(t => ({
      ...t,
      propName: e
    }));
  }, []);
  let g = useCallback(e => {
    c(t => ({
      ...t,
      propDescription: e
    }));
  }, []);
  let f = bq(a);
  let _ = _$$dl(a);
  return jsxs("form", {
    onSubmit: t => {
      t.preventDefault();
      e(u);
    },
    autoComplete: "no",
    className: "x78zum5 xdt5ytf xh8yej3 x167g77z",
    children: [jsx(Y, {
      label: getI18nString("variables.create_modal.name_label"),
      children: jsx(InputComponent, {
        "aria-label": getI18nString("design_systems.component_properties.name"),
        defaultValue: u.propName,
        autoFocus: !0,
        onChange: m
      })
    }), jsx(Y, {
      label: getI18nString("design_systems.component_properties.description"),
      children: jsx(_$$u, {
        autoFocus: !1,
        description: u.propDescription,
        namespace: "slot-component-prop-create-modal",
        onSave: g,
        placeholder: getI18nString("design_systems.component_properties.slot_create_modal.description_placeholder"),
        recordingKey: s
      })
    }), jsx(_$$D2, {
      addComponents: e => f(e, Kn.ADD),
      borderBottom: !0,
      entrypointForLogging: _$$S.PreferredValuesPickerEntrypoint.CREATE_COMPONENT_PROP_PICKER,
      onSetComponents: _,
      propDefType: ComponentPropType.SLOT,
      recordingKey: "create-prop-modal-preferred-values-picker",
      removeComponents: e => f(e, Kn.REMOVE),
      swapPickerId: "create-prop-modal-preferred-values-picker",
      swapPickerWidth: 304,
      toggleComponent: e => f([e]),
      values: i
    }), jsx("div", {
      className: "x78zum5 xc26acl x13a6bvl xnm25rq xyfqnmn",
      children: jsx(Button, {
        type: "submit",
        disabled: !p,
        recordingKey: generateRecordingKey(s, "createButton"),
        htmlAttributes: {
          "data-tooltip": getI18nString("design_systems.component_properties.slot_create_modal.invalid_property_name"),
          "data-tooltip-type": p ? void 0 : KindEnum.TEXT
        },
        children: renderI18nText("design_systems.component_properties.slot_create_modal.create_component_property")
      })
    })]
  });
}
function Y({
  label: e,
  children: t
}) {
  let i = useCallback(e => {
    e.stopPropagation();
  }, []);
  return jsx(Fragment, {
    children: jsxs("div", {
      onMouseDown: i,
      onPointerDown: i,
      className: "x78zum5 xdt5ytf x167g77z xnm25rq xyfqnmn",
      children: [jsx(Label, {
        className: "slot_component_prop_create_modal--formLabel--aGlMC",
        children: e
      }), t]
    })
  });
}
let q = "create_component_prop_modal--subheading--TkKeN";
let $ = "create_component_prop_modal--fieldContainer--PrQC-";
let Z = "create_component_prop_modal--input--LQ1pB create_component_prop_modal--baseInput--jOOW9 props_panel--input--pkL0- raw_components--base--T7G0z raw_components--input--JB4Ix raw_components--singleRowHeight--dKM4t raw_components--border--SKh2u sf_pro--uiFontWithSFProFallback--m-p9V";
let $$X0 = registerModal(function (e) {
  let {
    propType,
    prePopulatedDefaultValue,
    refField,
    initialX,
    initialY
  } = e;
  let U = useDispatch();
  let {
    singleSelectedNode,
    openFileKey,
    defaultPropName,
    isInstanceSwapPickerShown
  } = uS({
    refField,
    propType
  });
  let H = useSceneGraphSelector();
  let [K, Y] = useState(defaultPropName);
  let X = useCallback(e => Y(e.target.value), []);
  let {
    inputRef,
    inputProps: {
      onChange,
      onFocus,
      onMouseUp,
      onMouseLeave,
      onKeyUp
    }
  } = _$$X({
    autoFocus: !0,
    onChange: X
  });
  let [er, ea] = useState(prePopulatedDefaultValue ?? Ql(propType));
  let [es, eo] = i0(prePopulatedDefaultValue, H);
  let el = useMemo(() => propType === ComponentPropType.INSTANCE_SWAP && er ? wd([er], H) : null, [er, propType, H]);
  let ed = c9({
    propType,
    propName: K,
    defaultValue: er,
    varValue: void 0
  });
  let ec = e => {
    e.keyCode !== KeyCodes.ENTER || e.shiftKey || ed || ep({
      propName: K,
      defaultValue: er
    });
  };
  let eu = useCallback(() => {
    U(hideModal());
    U(vq());
  }, [U]);
  let ep = DD({
    propType,
    refField,
    preferredProductComponents: es
  });
  let em = useCallback(e => {
    Fullscreen.wouldCreateCycleUnderParent(singleSelectedNode?.guid || "", e) ? (U(VisualBellActions.enqueue({
      message: getI18nString("design_systems.component_properties.choose_default_instance_value_cycle")
    })), ea("")) : (U(VisualBellActions.clearAll()), ea(e));
  }, [U, singleSelectedNode?.guid]);
  let eh = bq(eo);
  let eg = _$$dl(eo);
  let ef = Xp[propType];
  let {
    modalWidth
  } = TQ(Zl.INSTANCE_SWAP_PICKER);
  let eA = _I({
    type: "create"
  });
  let ey = useMemo(() => new Point(initialX, initialY), [initialX, initialY]);
  if (void 0 !== ef) {
    let e = ef.variableType;
    return jsx(NO, {
      initialPosition: ey,
      initialVariableValue: resolveVariableValue(e, er),
      resolvedType: e === VariableResolvedDataType.TEXT_DATA ? VariableResolvedDataType.STRING : e,
      onCreateVariable: lQ,
      onClose: () => {
        isInstanceSwapPickerShown ? U(vq()) : U(hideModal());
        U(hidePickerThunk());
      },
      refField,
      componentPropOnly: !0
    });
  }
  return getFeatureFlags().dse_slots && propType === ComponentPropType.SLOT ? jsx(W, {
    initialPosition: ey,
    onCreatePropSubmit: ({
      propName: e,
      propDescription: t
    }) => {
      ep({
        propName: e,
        defaultValue: void 0,
        description: t
      });
      U(hideModal());
    },
    defaultName: er?.propName ?? defaultPropName,
    defaultDescription: er?.propDescription,
    preferredProductComponents: es,
    onSetPreferredProductComponents: eo,
    onClose: () => U(hideModal())
  }) : jsxs(Xj, {
    initialWidth: wh,
    contentContainerClassName: "create_component_prop_modal--modal--Ln3y-",
    onClose: isInstanceSwapPickerShown ? () => {
      U(vq());
    } : () => {
      U(hideModal());
    },
    onClick: isInstanceSwapPickerShown ? () => U(vq()) : void 0,
    initialPosition: eA,
    alwaysEnsureModalOnScreen: !0,
    disableDragging: !0,
    tabIndex: 0,
    clickOutsideToHide: !0,
    children: [jsxs("div", {
      className: "create_component_prop_modal--modalTop--eHoJn",
      children: [jsx("p", {
        className: "create_component_prop_modal--heading--qr9K5",
        children: renderI18nText("design_systems.component_properties.create_property")
      }), jsx(CloseButton, {
        onClick: eu
      })]
    }), jsxs(TabLoop, {
      children: [jsxs("div", {
        className: $,
        children: [jsx("p", {
          className: q,
          children: renderI18nText("design_systems.component_properties.name")
        }), jsx(LazyInputForwardRef, {
          ref: inputRef,
          autoCorrect: "off",
          autoFocus: !0,
          className: Z,
          onChange,
          onFocus,
          onKeyDown: ec,
          onKeyUp,
          onMouseLeave,
          onMouseUp,
          placeholder: propType === ComponentPropType.VARIANT ? "Property" : "",
          recordingKey: generateRecordingKey("componentPropName", xb(propType)),
          value: K
        })]
      }), jsxs("div", {
        className: $,
        children: [jsx("label", {
          className: q,
          htmlFor: propType === ComponentPropType.INSTANCE_SWAP ? _$$D : propType === ComponentPropType.VARIANT ? "create-component-prop-variant-input" : void 0,
          children: renderI18nText("design_systems.component_properties.default_value")
        }), propType === ComponentPropType.INSTANCE_SWAP && jsx("div", {
          className: "create_component_prop_modal--selectInput--Oom9E",
          children: jsx(_$$x, {
            pickerID: "create-prop-modal-instance-swap-picker",
            pickerWidth: modalWidth,
            shouldPerformSwapOnClick: !1,
            instanceSwapNode: el,
            title: getI18nString("design_systems.component_properties.choose_instance"),
            preferredItems: es,
            sceneGraph: H,
            onSwapCallback: e => {
              U(uP({
                item: e,
                callback: t => {
                  em(e.type === PrimaryWorkflowEnum.STATE_GROUP ? ui(e, t, openFileKey) : t);
                }
              }));
            },
            entrypointForLogging: _$$S.InstancePickerEntrypoint.CREATE_COMPONENT_PROP_PICKER
          })
        }), propType === ComponentPropType.VARIANT && jsx(RecordableInput, {
          className: Z,
          id: "create-component-prop-variant-input",
          onChange: e => ea(e.currentTarget.value),
          onKeyDown: ec,
          recordingKey: generateRecordingKey("componentPropDefaultValue", xb(propType)),
          defaultValue: er || "",
          autoCorrect: "off"
        })]
      }), propType === ComponentPropType.INSTANCE_SWAP && jsx(_$$D2, {
        addComponents: e => eh(e, Kn.ADD),
        borderBottom: !0,
        entrypointForLogging: _$$S.PreferredValuesPickerEntrypoint.CREATE_COMPONENT_PROP_PICKER,
        onSetComponents: eg,
        propDefDefaultValue: dl(propType, er),
        propDefType: propType,
        recordingKey: "create-prop-modal-preferred-values-picker",
        removeComponents: e => eh(e, Kn.REMOVE),
        swapPickerId: "create-prop-modal-preferred-values-picker",
        swapPickerWidth: modalWidth,
        toggleComponent: e => eh([e]),
        values: es
      }), jsx("span", {
        className: "create_component_prop_modal--createButton--yBOru",
        children: jsx(Button, {
          recordingKey: "createComponentProperty",
          htmlAttributes: {
            "data-testid": "create-component-prop-button"
          },
          disabled: ed,
          onClick: () => ep({
            propName: K,
            defaultValue: er
          }),
          type: "submit",
          children: renderI18nText("design_systems.component_properties.create_property")
        })
      })]
    })]
  });
}, "CreateComponentPropModal");
export const n = $$X0;