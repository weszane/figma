import { PureComponent, useMemo, useRef } from 'react';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { Uz } from '../905/63728';
import { h as _$$h } from '../905/65944';
import { Ib } from '../905/129884';
import { getThemeContextOrDefault } from '../905/158740';
import { isInvalidValue, isValidValue, MIXED_MARKER, normalizeValue } from '../905/216495';
import { B as _$$B } from '../905/229357';
import { Label } from '../905/270045';
import { Checkbox } from '../905/274480';
import { zj } from '../905/275640';
import { getI18nString, renderI18nText } from '../905/303541';
import { Q as _$$Q } from '../905/346809';
import { w as _$$w } from '../905/442596';
import { trackEventAnalytics } from '../905/449184';
import { l as _$$l } from '../905/479687';
import { useIsFullscreenSitesView } from '../905/561485';
import { k as _$$k2 } from '../905/582200';
import { a as _$$a } from '../905/597867';
import { getFeatureFlags } from '../905/601108';
import { Point } from '../905/736624';
import { lQ } from '../905/934246';
import { cn } from '../905/959568';
import { wu } from '../1528/306300';
import { k8 } from '../figma_app/8833';
import { u1, XE } from '../figma_app/91703';
import { Q } from '../figma_app/104130';
import { M as _$$M } from '../figma_app/339170';
import { fullscreenValue } from '../figma_app/455680';
import { y7 } from '../figma_app/580959';
import { fI, JU, Zk } from '../figma_app/626177';
import { RecordingPureComponent, generateRecordingKey, handleChangeEvent } from '../figma_app/878298';
import { Ad, DE } from '../figma_app/811257';
import { sw } from '../figma_app/914957';
import { shallowEqual, useDispatch } from 'react-redux';
let N = 'mixed_checkbox--mixed--xYUsQ';
class I extends PureComponent {
  constructor(e) {
    super(e);
    this.documentKeyDown = e => {
      e.keyCode === Uz.TAB && this.setState({
        showFocus: !0
      });
    };
    this.documentMouseDown = e => {
      this.setState({
        showFocus: !1
      });
    };
    this.onFocus = e => {
      this.state.showFocus || e.target.blur();
    };
    this.state = {
      showFocus: !1
    };
  }
  componentDidMount() {
    document.addEventListener('keydown', this.documentKeyDown);
    document.addEventListener('mousedown', this.documentMouseDown);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.documentKeyDown);
    document.removeEventListener('mousedown', this.documentMouseDown);
  }
  classNameForInput() {
    let {
      someChecked
    } = this.props;
    let t = 'mixed_checkbox--checkboxInput--aoLHh';
    someChecked && (t += ` ${N}`);
    this.props.inputClassName && (t += ` ${this.props.inputClassName}`);
    return t;
  }
  classNameForCheckmark() {
    let {
      someChecked
    } = this.props;
    let t = 'mixed_checkbox--checkmark--B6ca7';
    someChecked ? t += ` ${N}` : t += ' mixed_checkbox--checked--w0eLb';
    this.props.disabled && (t += ' mixed_checkbox--disabled--NP7v9');
    this.props.checkmarkClassName && (t += ` ${this.props.checkmarkClassName}`);
    return t;
  }
  render() {
    let {
      allChecked,
      someChecked
    } = this.props;
    return jsxs('label', {
      className: ['mixed_checkbox--checkboxHitbox--QsCWQ', this.props.className].filter(e => !!e).join(' '),
      children: [jsx('input', {
        'id': this.props.id,
        'data-testid': this.props['data-testid'],
        'data-onboarding-key': this.props['data-onboarding-key'],
        'type': 'checkbox',
        'onFocus': this.onFocus,
        'checked': allChecked,
        'className': this.classNameForInput(),
        'onChange': this.props.onChange,
        'disabled': this.props.disabled
      }), (someChecked || allChecked) && jsx('div', {
        className: this.classNameForCheckmark(),
        children: allChecked ? jsx(_$$l, {}) : jsx(_$$w, {})
      })]
    });
  }
}
I.displayName = 'MixedCheckbox';
class E extends RecordingPureComponent {
  constructor(e) {
    super(e);
    this.onChange = handleChangeEvent(this, 'change', e => {
      this.props.onChange?.(e.target.checked);
    });
  }
  render() {
    let e = isValidValue(this.props.property) && !!normalizeValue(this.props.property);
    let t = isInvalidValue(this.props.property);
    return jsx(I, {
      'className': ['checkbox--checkboxHitbox--HBFVf mixed_checkbox--checkboxHitbox--QsCWQ', this.props.className].filter(e => !!e).join(' '),
      'inputClassName': 'checkbox--checkboxInput--IHKak mixed_checkbox--checkboxInput--aoLHh',
      'checkmarkClassName': 'checkbox--checkmark--pzYni mixed_checkbox--checkmark--B6ca7',
      'allChecked': e,
      'someChecked': t,
      'disabled': this.props.disabled,
      'id': this.props.id,
      'data-testid': this.props['data-testid'],
      'onChange': this.onChange
    });
  }
}
E.displayName = 'Checkbox';
export function $$G0(e) {
  let t = useRef(null);
  let s = getThemeContextOrDefault();
  let k = useDispatch();
  let w = useIsFullscreenSitesView();
  let {
    backgroundColor,
    backgroundEnabled,
    backgroundOpacity,
    exportBackgroundDisabled
  } = zj('backgroundColor', 'backgroundEnabled', 'backgroundOpacity', 'exportBackgroundDisabled');
  let G = e => fullscreenValue.updateSelectionProperties({
    backgroundEnabled: e
  });
  let V = e => {
    fullscreenValue.updateSelectionProperties({
      exportBackgroundDisabled: !e
    });
  };
  let U = useMemo(() => {
    let e = normalizeValue(backgroundColor);
    let t = normalizeValue(backgroundOpacity);
    return e != null && t != null ? {
      ...e,
      a: t
    } : backgroundColor || MIXED_MARKER;
  }, [backgroundColor, backgroundOpacity]);
  let z = useMemo(() => isValidValue(backgroundOpacity) && typeof backgroundOpacity == 'number' && isNaN(backgroundOpacity) ? 0 : backgroundOpacity, [backgroundOpacity]);
  let W = () => {
    if (e.setDefaultToolOnPickerOpen && fullscreenValue.triggerAction('set-tool-default'), e.pickerShown && e.pickerShown.id === k8) {
      k(XE());
    } else {
      getFeatureFlags().ce_properties_panel_tracking && trackEventAnalytics('editor-background-panel-color-picker-show');
      let e = t.current ? cn(t.current) : {
        x: 0,
        y: 0
      };
      k(u1({
        id: k8,
        initialX: e.x,
        initialY: e.y
      }));
      k(sw());
    }
  };
  let $ = () => jsx(H, {
    backgroundColor,
    backgroundEnabled,
    backgroundOpacity,
    pickerShown: e.pickerShown,
    chitRowRef: t,
    recordingKey: e.recordingKey,
    toggleColorPicker: W
  });
  let Y = () => ({
    color: normalizeValue(backgroundColor) ?? void 0,
    opacity: normalizeValue(z) ?? void 0,
    type: 'SOLID',
    blendMode: 'NORMAL',
    visible: normalizeValue(backgroundEnabled) ?? void 0
  });
  let X = () => jsx(_$$a, {
    ...e,
    ref: t,
    dragging: !1,
    hasFocus: !1,
    onPreviewClick: W,
    onRowFocus: lQ,
    paint: Y(),
    previewActive: !1,
    secondIconButton: q(),
    selected: e.pickerShown?.id === k8,
    singletonRow: !0
  });
  let q = () => void 0 === backgroundEnabled ? void 0 : jsx('span', {
    className: 'background_panel--visible--2-4Ns',
    children: jsx(_$$B, {
      visible: backgroundEnabled,
      onChange: G,
      recordingKey: generateRecordingKey(e, 'visibleToggle')
    })
  });
  return jsx(_$$k2, {
    name: 'background_panel',
    children: jsxs(Zk, {
      children: [jsxs('div', {
        children: [jsxs(fI, {
          className: 'background_panel--panelTitleRow--uNINf',
          children: [jsx(_$$Q, {
            children: w ? renderI18nText('fullscreen.properties_panel.background') : renderI18nText('fullscreen.properties_panel.page')
          }), jsx(_$$M, {
            showLibrarySets: !0,
            recordingKey: 'pageLevel'
          })]
        }), s.version === 'ui2' ? jsxs(fI, {
          ref: t,
          children: [$(), q()]
        }) : jsx(Q.Consumer, {
          children: e => e.useLargePreviewRows ? X() : jsx(DE, {
            ref: t,
            label: null,
            input: $(),
            icon: q()
          })
        })]
      }), e.hasExports ? s.version === 'ui3' ? jsx(Ad, {
        label: jsx(Fragment, {}),
        input: jsx(Checkbox, {
          muted: !0,
          mixed: exportBackgroundDisabled === MIXED_MARKER,
          checked: !1 === exportBackgroundDisabled,
          onChange: V,
          recordingKey: generateRecordingKey(e, 'exportDisableCheckbox'),
          label: jsx(Label, {
            htmlAttributes: {
              'data-tooltip': getI18nString('fullscreen.properties_panel.include_the_canvas_or_group_background_in_exports'),
              'data-tooltip-type': Ib.TEXT
            },
            children: renderI18nText('fullscreen.properties_panel.show_in_exports')
          }),
          htmlAttributes: {
            'data-tooltip': getI18nString('fullscreen.properties_panel.include_the_canvas_or_group_background_in_exports'),
            'data-tooltip-type': Ib.TEXT
          }
        })
      }) : jsxs(fI, {
        className: 'background_panel--checkboxLabelRow--r-hmK',
        children: [jsx(E, {
          className: 'background_panel--checkbox--6U3j-',
          id: 'export-background-disabled',
          property: exportBackgroundDisabled === MIXED_MARKER ? MIXED_MARKER : !exportBackgroundDisabled,
          onChange: V,
          recordingKey: generateRecordingKey(e, 'exportDisableCheckbox')
        }), jsx(JU, {
          'className': 'background_panel--checkboxLabel--ITthj',
          'htmlFor': 'export-background-disabled',
          'data-tooltip-type': Ib.TEXT,
          'data-tooltip': getI18nString('fullscreen.properties_panel.include_the_canvas_or_group_background_in_exports'),
          'children': renderI18nText('fullscreen.properties_panel.show_in_exports')
        })]
      }) : void 0, e.pickerShown?.id === k8 && jsx(_$$h, {
        disabledVariableIds: new Set(),
        initialPosition: new Point(e.pickerShown.initialX, e.pickerShown.initialY),
        color: isValidValue(U) ? normalizeValue(U) : {
          r: 1,
          g: 1,
          b: 1,
          a: 1
        },
        boundVariable: null,
        onChange: (e, t) => {
          let s = e.a;
          e.a = 1;
          fullscreenValue.updateSelectionProperties({
            backgroundColor: e,
            backgroundOpacity: s,
            backgroundEnabled: !0
          }, {
            shouldCommit: t
          });
        },
        recordingKey: generateRecordingKey(e, 'colorPicker')
      }), jsx(wu, {
        showExplicitOnly: !0,
        recordingKey: 'backgroundPanel-variableModeEntries'
      })]
    })
  });
}
function H(e) {
  let t = useMemo(() => {
    let t = normalizeValue(e.backgroundColor);
    let s = normalizeValue(e.backgroundOpacity);
    return t != null && s != null ? {
      ...t,
      a: s
    } : e.backgroundColor || MIXED_MARKER;
  }, [e.backgroundColor, e.backgroundOpacity]);
  let s = useMemo(() => isValidValue(e.backgroundOpacity) && typeof e.backgroundOpacity == 'number' && isNaN(e.backgroundOpacity) ? 0 : e.backgroundOpacity, [e.backgroundOpacity]);
  let l = normalizeValue(e.backgroundColor);
  let a = normalizeValue(e.backgroundEnabled);
  let o = {
    color: l ?? void 0,
    opacity: normalizeValue(s) ?? void 0,
    type: 'SOLID',
    blendMode: 'NORMAL',
    visible: a ?? void 0
  };
  return jsx('div', {
    className: 'background_panel--colorValueContainer---lsls paint_panels--colorValueContainer--DGeSP raw_components--borderFocusWithin--BaipZ paint_panels--_baseColorValueContainer--t-UIV raw_components--base--T7G0z raw_components--singleRowHeight--dKM4t',
    children: jsx(y7, {
      recordingKey: e.recordingKey,
      togglePicker: e.toggleColorPicker,
      chitOverride: {
        color: t,
        opacity: s
      },
      paint: o,
      onChange: (t, s) => {
        let r = !shallowEqual(t.color, e.backgroundColor);
        let n = t.opacity !== e.backgroundOpacity;
        fullscreenValue.updateSelectionProperties({
          backgroundColor: r && t?.color ? {
            ...t.color,
            a: 1
          } : void 0,
          backgroundOpacity: n ? t.opacity : void 0,
          backgroundEnabled: t.opacity !== 0
        }, {
          shouldCommit: s
        });
      }
    })
  });
}
export const v = $$G0;