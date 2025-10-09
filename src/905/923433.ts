import m from 'classnames';
import { Fragment as _$$Fragment, useCallback, useContext, useMemo, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { d as _$$d } from '../905/49800';
import { h as _$$h } from '../905/65944';
import { KindEnum } from '../905/129884';
import { _r, oG } from '../905/176258';
import { FormattedInputVariant3 } from '../905/203369';
import { L as _$$L } from '../905/210923';
import { J as _$$J } from '../905/225412';
import { Label } from '../905/270045';
import { getI18nString } from '../905/303541';
import { FormattedInputContext } from '../905/427409';
import { $, b as _$$b } from '../905/483620';
import { getFeatureFlags } from '../905/601108';
import { G } from '../905/658204';
import { formattedColorManipulator } from '../905/713722';
import { Point } from '../905/736624';
import { resolveVariableValue } from '../905/929949';
import { noop } from 'lodash-es';
;
import { J as _$$J2, P as _$$P } from '../figma_app/120873';
import { ExpressionInput, OpacityInput } from '../figma_app/178475';
import { yesNoTrackingEnum } from '../figma_app/198712';
import { VariableAliasProvider } from '../figma_app/260445';
import { isLocallySoftDeleted, getVariableDisplayString } from '../figma_app/394327';
import { throwTypeError } from '../figma_app/465776';
import { getBigNudgeAmount, getSmallNudgeAmount } from '../figma_app/740163';
import { VariableDataType, VariableResolvedDataType } from '../figma_app/763686';
import { FormattedInputWithWrapper } from '../figma_app/841644';
import { getVariableById, getResolvedVariableValue, getPublishKeyForVariableSet, getResolvedVariableValueIfNotMixed } from '../figma_app/852050';
import { generateRecordingKey } from '../figma_app/878298';
let h = m;
let F = 'variables_modal_value_input--disabled--y64Jo';
let M = 'variables_modal_value_input--comboBoxCell--YqnD4 variables_modal_value_input--_comboBoxBase--FJEcj variables_modal_value_input--inputCellFocus--vj5GD';
let j = 'variables_modal_value_input--comboBoxForm--rPuqj';
let U = 'variables_modal_value_input--colorOpacityContainer--J92uF';
let B = 'variables_modal_value_input--colorOpacityInput--xTJIQ';
let $$V0 = 'variable-value-input';
export function $$G1(e) {
  let t = e.variableOverride?.overrideValues[e.modeID];
  let i = void 0 !== t;
  let a = i ? t : e.variable.modeValues[e.modeID];
  let s = getPublishKeyForVariableSet(e.variable.node_id);
  let o = useMemo(() => e.modeID && s ? {
    [s]: e.modeID
  } : void 0, [e.modeID, s]);
  let l = getResolvedVariableValue(e.variable.node_id);
  let d = _r(e.variable.node_id, e.modeID);
  oG(e.variable.node_id, e.modeID, useCallback(() => {
    let t = e.containerRef?.current;
    t && t.animate([{
      backgroundColor: 'var(--color-bg-assistive-secondary)'
    }, {
      backgroundColor: 'var(--color-bg-assistive-tertiary)',
      offset: 0.1
    }, {
      backgroundColor: 'transparent'
    }], {
      duration: 5e3,
      easing: 'linear'
    });
  }, [e.containerRef]));
  let c = (getFeatureFlags().prototype_variable_debug_view ? d : void 0) ?? a ?? l ?? resolveVariableValue(e.variable.resolvedType);
  return c ? jsx(VariableAliasProvider, {
    variableSetId: e.variableSetId,
    variableID: e.variable.node_id,
    modeID: e.modeID,
    resolvedType: e.variable.resolvedType,
    children: jsx($$z2, {
      isInaccessible: e.isInaccessible,
      contextType: e.contextType,
      recordingKey: e.recordingKey,
      variableValue: c,
      isOverridden: i,
      varSetKeyToModeID: o,
      clearVariableOverride: e.clearVariableOverride,
      onChange: e.onSubmit,
      onPickerOpen: e.onCreateExpression
    })
  }) : null;
}
export function $$z2(e) {
  let t = useDispatch<AppDispatch>();
  let i = e.contextType ?? $.CELL;
  let u = getBigNudgeAmount();
  let p = getSmallNudgeAmount();
  let m = t => (e.onChange({
    type: VariableDataType.STRING,
    resolvedType: VariableResolvedDataType.STRING,
    value: t
  }, yesNoTrackingEnum.YES), !0);
  let [_, y] = _$$L(e.variableValue, (t, i = yesNoTrackingEnum.NO) => {
    e.onChange(t, i);
  });
  let v = e.isInaccessible ? getI18nString('variables.authoring_modal.table.inaccessible_variable_tooltip') : void 0;
  let w = e.isOverridden ? G : _$$Fragment;
  switch (_.type) {
    case VariableDataType.STRING:
      return jsx('div', {
        className: h()({
          [M]: i === $.CELL,
          [j]: i === $.FORM
        }),
        children: jsx(FormattedInputWithWrapper, {
          noBorder: !0,
          recordingKey: generateRecordingKey(e.recordingKey, 'stringVariableInputControl'),
          iconLayout: i === $.CELL ? 'flex' : 'absolute',
          handleClearOverride: e.isOverridden ? e.clearVariableOverride : void 0,
          children: jsx(w, {
            children: jsx(_$$b, {
              disabled: e.isInaccessible,
              id: $$V0,
              noBorderOnFocus: i === $.CELL,
              onCancel: m,
              onSubmit: m,
              onFinish: noop,
              originalValue: _.value,
              recordingKey: generateRecordingKey(e.recordingKey, 'textInput'),
              type: $.CELL
            })
          })
        })
      });
    case VariableDataType.BOOLEAN:
      return jsx('div', {
        className: h()('variables_modal_value_input--booleanCell--kwjjI', {
          'variables_modal_value_input--booleanForm--l1Pjp variables_modal_value_input--booleanCell--kwjjI': i === $.FORM,
          [F]: e.isInaccessible
        }, e.innerContainerClassName),
        children: jsx(FormattedInputWithWrapper, {
          noBorder: !0,
          recordingKey: generateRecordingKey(e.recordingKey, 'booleanVariableInputControl'),
          iconLayout: i === $.CELL ? 'flex' : 'absolute',
          handleClearOverride: e.isOverridden ? e.clearVariableOverride : void 0,
          children: jsx(w, {
            children: jsx(_$$d, {
              disabled: e.isInaccessible,
              checked: _.value,
              id: $$V0,
              recordingKey: generateRecordingKey(e.recordingKey, 'toggleInput'),
              label: jsx(Label, {
                children: getVariableDisplayString(_)
              }),
              onChange: t => {
                e.onChange({
                  type: VariableDataType.BOOLEAN,
                  resolvedType: VariableResolvedDataType.BOOLEAN,
                  value: t
                }, yesNoTrackingEnum.YES);
              }
            })
          })
        })
      });
    case VariableDataType.FLOAT:
      {
        let r = jsx(w, {
          children: jsx(ExpressionInput, {
            'bigNudgeAmount': u,
            'data-tooltip': v ?? '',
            'data-tooltip-type': KindEnum.TEXT,
            'dataTestId': generateRecordingKey(e.recordingKey, 'numberInput'),
            'disabled': e.isInaccessible,
            'dispatch': t,
            'id': $$V0,
            'inputClassName': 'variables_modal_value_input--comboBoxInput--jNlas',
            'isTokenizable': !0,
            'noBorderOnFocus': i === $.CELL,
            'noBorderOnHover': !0,
            'noBorderOnScrub': !0,
            'onValueChange': (e, t) => {
              y({
                type: VariableDataType.FLOAT,
                resolvedType: VariableResolvedDataType.FLOAT,
                value: e
              }, t ?? yesNoTrackingEnum.NO);
            },
            'recordingKey': generateRecordingKey(e.recordingKey, 'numberInput'),
            'scrubbingDisabled': !0,
            'smallNudgeAmount': p,
            'value': _.value
          })
        });
        return jsx('div', {
          className: h()({
            [M]: i === $.CELL,
            [j]: i === $.FORM,
            [F]: e.isInaccessible
          }),
          children: e.onPickerOpen ? jsx(FormattedInputWithWrapper, {
            disabled: e.isInaccessible,
            iconLayout: i === $.CELL ? 'flex' : 'absolute',
            inputClassName: e.inputClassName,
            isActive: !1,
            noBorder: !0,
            handleClearOverride: e.isOverridden ? e.clearVariableOverride : void 0,
            onPickerOpen: e.onPickerOpen,
            recordingKey: generateRecordingKey(e.recordingKey, 'numberInput'),
            children: r
          }) : jsx(FormattedInputWithWrapper, {
            disabled: e.isInaccessible,
            inputClassName: e.inputClassName,
            recordingKey: generateRecordingKey(e.recordingKey, 'numberInput'),
            noBorder: !0,
            iconLayout: i === $.CELL ? 'flex' : 'absolute',
            handleClearOverride: e.isOverridden ? e.clearVariableOverride : void 0,
            children: r
          })
        });
      }
    case VariableDataType.COLOR:
      return jsx(w, {
        children: jsx(H, {
          disabled: e.isInaccessible,
          innerContainerClassName: e.innerContainerClassName,
          contextType: i,
          variableValue: _,
          recordingKey: generateRecordingKey(e.recordingKey, 'colorInput'),
          onVariableValueChange: y,
          setVariableAction: e.setVariableAction,
          tooltip: v
        })
      });
    case VariableDataType.ALIAS:
      return jsx(W, {
        isInaccessible: e.isInaccessible,
        isOverridden: e.isOverridden,
        varSetKeyToModeID: e.varSetKeyToModeID,
        variableID: _.value,
        recordingKey: e.recordingKey,
        contextType: i
      });
    case VariableDataType.NODE_FIELD_ALIAS:
    case VariableDataType.MAP:
    case VariableDataType.FONT_STYLE:
    case VariableDataType.EXPRESSION:
    case VariableDataType.SYMBOL_ID:
    case VariableDataType.TEXT_DATA:
    case VariableDataType.MANAGED_STRING_ALIAS:
    case VariableDataType.CMS_ALIAS:
    case VariableDataType.IMAGE:
    case VariableDataType.LINK:
    case VariableDataType.JS_RUNTIME_ALIAS:
    case VariableDataType.DATE:
    case VariableDataType.SLOT_CONTENT_ID:
      return jsx(Fragment, {});
    default:
      throwTypeError(_, 'Unknown VariableDataType');
  }
}
function H({
  contextType: e,
  variableValue: t,
  onVariableValueChange: i,
  setVariableAction: s,
  disabled: o = !1,
  tooltip: l,
  recordingKey: d,
  innerContainerClassName: c
}) {
  let u = useDispatch<AppDispatch>();
  let p = useRef(null);
  let m = useRef(null);
  let [g, A] = useState(!1);
  let b = useContext(FormattedInputContext);
  let v = g && s || !!b?.isShowingBindingUI;
  let S = (e, n) => {
    e && i({
      ...t,
      value: e
    }, n ?? yesNoTrackingEnum.NO);
  };
  return jsxs('div', {
    'className': h()({
      'variables_modal_value_input--focused--p4FQO': v,
      'variables_modal_value_input--colorCell--93yAz variables_modal_value_input--_colorBase--Fzvmq variables_modal_value_input--inputCellFocus--vj5GD': e === $.CELL,
      'variables_modal_value_input--colorForm--JJFwO variables_modal_value_input--_colorBase--Fzvmq variables_modal_value_input--inputCellFocus--vj5GD': e === $.FORM,
      [F]: o
    }, c),
    'ref': m,
    'data-tooltip-type': KindEnum.TEXT,
    'data-tooltip': l,
    'children': [jsx('div', {
      ref: p,
      children: jsx(_$$J, {
        onClick: s ? () => {
          A(!0);
        } : function () {
          !o && b && b.showBindingUI(p.current);
        },
        className: 'variables_modal_value_input--colorChit--yRVZo',
        color: t.value,
        recordingKey: generateRecordingKey(d, 'openColorPicker')
      })
    }), jsx(FormattedInputVariant3, {
      className: 'variables_modal_value_input--colorInput--l-7v7',
      disabled: o,
      formatter: formattedColorManipulator,
      property: t.value,
      onChange: e => S(e, yesNoTrackingEnum.YES),
      noBorderOnFocus: !0,
      dataTestId: generateRecordingKey(d, 'textInput'),
      recordingKey: generateRecordingKey(d, 'textInput')
    }), e === $.CELL ? t.value.a < 1 && jsx(OpacityInput, {
      disabled: o,
      className: U,
      inputClassName: B,
      value: t.value.a,
      onValueChange: (e, i) => {
        S({
          ...t.value,
          a: e
        }, i);
      },
      noLeftBorder: !0,
      noBorderOnFocus: !0,
      dispatch: u,
      recordingKey: generateRecordingKey(d, 'opacityInput')
    }) : jsx(OpacityInput, {
      disabled: o,
      className: U,
      inputClassName: B,
      value: t.value.a,
      onValueChange: (e, i) => {
        S({
          ...t.value,
          a: e
        }, i);
      },
      noLeftBorder: !0,
      noBorderOnFocus: !0,
      dispatch: u,
      recordingKey: generateRecordingKey(d, 'opacityInput')
    }), function () {
      if (!g || !s || o) return null;
      let e = t.value;
      let r = m.current.getBoundingClientRect();
      return jsx(_$$h, {
        disabledVariableIds: new Set(),
        color: e,
        boundVariable: null,
        initialPosition: new Point(r.left, r.bottom),
        initialView: 'custom_color',
        recordingKey: 'variableBindingsDropdown',
        onChange: (e, n) => i({
          ...t,
          value: e
        }, n ?? yesNoTrackingEnum.NO),
        onClose: () => A(!1)
      });
    }()]
  });
}
function W(e) {
  let t = useRef(null);
  let i = useContext(FormattedInputContext);
  let a = getVariableById(e.variableID);
  let s = getResolvedVariableValueIfNotMixed(e.variableID, e.varSetKeyToModeID);
  return jsx('div', {
    ref: t,
    className: h()({
      'variables_modal_value_input--aliasPillForm--gGjuR variables_modal_value_input--_aliasPillBase--NrZBg': e.contextType === $.FORM,
      'variables_modal_value_input--aliasPillCell--j0c50 variables_modal_value_input--_aliasPillBase--NrZBg': e.contextType === $.CELL
    }),
    children: jsx(_$$P, {
      colorTheme: e.isInaccessible ? _$$J2.DISABLED : e.isOverridden ? _$$J2.OVERRIDDEN : _$$J2.DEFAULT,
      disableHover: e.isInaccessible,
      isDeleted: !!a && isLocallySoftDeleted(a),
      onClick: () => {
        !e.isInaccessible && i && i.showBindingUI(t.current);
      },
      recordingKey: generateRecordingKey(e.recordingKey, 'alias'),
      thumbnailValue: s,
      tooltipOverride: e.isInaccessible ? getI18nString('variables.authoring_modal.table.inaccessible_variable_tooltip') : void 0,
      value: a?.name ?? getI18nString('variables.missing_name'),
      variableId: a?.node_id,
      variablePillContainerClassName: 'variables_modal_value_input--aliasPillContainer--gavRS'
    })
  });
}
export const I3 = $$V0;
export const cC = $$G1;
export const gJ = $$z2;