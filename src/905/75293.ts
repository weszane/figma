import f from 'classnames';
import { cloneElement, createRef, memo, useCallback, useContext, useId, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { h as _$$h2 } from '../905/65944';
import { KindEnum } from '../905/129884';
import { executeWithDSAAction } from '../905/135117';
import { FormattedInputVariant3 } from '../905/203369';
import { J as _$$J } from '../905/225412';
import { W3, Yl } from '../905/232641';
import { HiddenLabel } from '../905/270045';
import { AutoInteractableWrapper } from '../905/277716';
import { getI18nString, renderI18nText } from '../905/303541';
import { FormattedInputContext } from '../905/427409';
import { trackEventAnalytics } from '../905/449184';
import { bL as _$$bL, c$, l9, mc } from '../905/493196';
import { getFeatureFlags } from '../905/601108';
import { formattedColorManipulator } from '../905/713722';
import { SvgComponent } from '../905/714743';
import { Point } from '../905/736624';
import { DraggableModalManager } from '../905/748636';
import { c$ as _$$c$, l6, sK, Z0 } from '../905/794875';
import { convertVariableIdToKiwi } from '../905/805904';
import { languageCodes } from '../905/816253';
import { useDropdownState } from '../905/848862';
import { bL } from '../905/911410';
import { calculatePickerPositionLeft } from '../905/959568';
import { F as _$$F } from '../figma_app/8833';
import { t7B } from '../figma_app/27776';
import { hidePickerThunk } from '../figma_app/91703';
import { useDeepEqualSceneValue } from '../figma_app/167249';
import { NumericInput, OpacityInput, ScrubbableDropdownInput } from '../figma_app/178475';
import { ControlledVariablePickerProvider, VariablePicker } from '../figma_app/260445';
import { DialogBody, DialogContents, DialogHeader, DialogTitle } from '../figma_app/272243';
import { cS } from '../figma_app/334459';
import { getI18nState } from '../figma_app/363242';
import { MH } from '../figma_app/394327';
import { oz } from '../figma_app/406976';
import { fullscreenValue } from '../figma_app/455680';
import { assertNotNullish } from '../figma_app/465776';
import { mapRange } from '../figma_app/492908';
import { useCurrentFileKey } from '../figma_app/516028';
import { Id } from '../figma_app/626177';
import { CopyPasteType, StyleVariableOperation, VariableResolvedDataType } from '../figma_app/763686';
import { parsePxNumber } from '../figma_app/783094';
import { FormattedInputWithWrapper } from '../figma_app/841644';
import { generateRecordingKey, useSetupPlayback } from '../figma_app/878298';
import { Oe } from '../figma_app/933328';
import { X9 } from '../figma_app/975811';
import { $$default } from '../svg/764361';
let _ = f;
let J = 'grid_settings--variableLabel--B37i4 grid_settings--_label--TQ-oS grid_settings--_centered--oVZG8';
let ee = 'grid_settings--gridTypeSelect--X-rY-';
let ei = parsePxNumber(t7B);
let en = l6;
let er = _$$c$;
export class $$ea0 {
  constructor() {
    this.format = e => {
      switch (e) {
        case 'GRID':
          return getI18nString('fullscreen.grid_panel.grid');
        case 'X':
          return getI18nString('fullscreen.grid_panel.columns_formatter');
        case 'Y':
          return getI18nString('fullscreen.grid_panel.rows_formatter');
        default:
          return '';
      }
    };
  }
}
let es = l6;
let eo = _$$c$;
export function $$el2({
  onChange: e,
  layoutGrid: t,
  initialX: i,
  initialY: s,
  recordingKey: o,
  bigNudgeAmount: l,
  smallNudgeAmount: u,
  positionRef: p
}) {
  let m = new Point(i, s);
  let h = useDispatch();
  let [f, A] = useState(!1);
  let [y, E] = useState(m);
  let S = useSetupPlayback(o, 'close', () => {
    h(hidePickerThunk());
    fullscreenValue.deselectProperty();
  });
  let C = createRef();
  let T = (i, n) => {
    e({
      ...t,
      color: i
    }, n);
  };
  let k = (e, i) => {
    T({
      ...t.color,
      a: e
    }, i);
  };
  let R = () => {
    A(!1);
  };
  let O = () => {
    f ? R() : (E(calculatePickerPositionLeft(C.current)), A(!0));
  };
  let D = {
    layoutGrid: t,
    onChange: e,
    recordingKey: o
  };
  let L = {
    ...D,
    bigNudgeAmount: l,
    smallNudgeAmount: u
  };
  let F = jsx(AutoInteractableWrapper, {
    name: 'grid_settings_pattern_select',
    children: getFeatureFlags().ce_tv_fpl_select ? jsx('span', {
      className: ee,
      children: jsx($$ey1, {
        ...D
      })
    }) : jsx($$ey1, {
      ...D
    })
  });
  let j = jsxs(Fragment, {
    children: [jsx(Id, {
      children: t.pattern === 'GRID' ? (() => {
        let e = jsxs('div', {
          className: 'grid_settings--gridColorValueContainer--m2ez9 grid_settings--colorValueContainer--G9s3J paint_panels--colorValueContainer--DGeSP raw_components--borderFocusWithin--BaipZ paint_panels--_baseColorValueContainer--t-UIV raw_components--base--T7G0z raw_components--singleRowHeight--dKM4t',
          children: [jsx(_$$J, {
            className: 'grid_settings--gridChit--jhGgg paint_panels--chit--twQEy',
            onClick: O,
            color: t.color,
            recordingKey: generateRecordingKey(o, 'chit')
          }), jsx(ef, {
            className: 'grid_settings--gridColor--x16XZ grid_settings--_centered--oVZG8',
            ...D
          }), jsx(e_, {
            value: t.color.a,
            onValueChange: k,
            recordingKey: generateRecordingKey(o, 'opacity')
          })]
        });
        return jsxs(Fragment, {
          children: [jsx(cS, {
            label: renderI18nText('fullscreen.grids_panel.grid_settings.size'),
            input: jsx(ep, {
              className: 'grid_settings--gridSectionSize--CfYrk grid_settings--_centered--oVZG8',
              ...L
            })
          }), jsx(cS, {
            label: renderI18nText('fullscreen.grids_panel.grid_settings.color'),
            ref: C,
            input: e
          })]
        });
      })() : (() => {
        let e = t.axis === 'X' ? getI18nString('fullscreen.grids_panel.grid_settings.width') : getI18nString('fullscreen.grids_panel.grid_settings.height');
        let i = t.type === 'STRETCH' ? getI18nString('fullscreen.grids_panel.grid_settings.margin') : getI18nString('fullscreen.grids_panel.grid_settings.offset');
        let r = jsx(ec, {
          className: _()('grid_settings--stripesNumSections--aqOpv grid_settings--_centered--oVZG8', 'grid_settings--stripesNumSectionsVariables--dXxFu'),
          ...D
        });
        let a = jsxs('div', {
          className: 'grid_settings--colorValueContainer--G9s3J paint_panels--colorValueContainer--DGeSP raw_components--borderFocusWithin--BaipZ paint_panels--_baseColorValueContainer--t-UIV raw_components--base--T7G0z raw_components--singleRowHeight--dKM4t',
          children: [jsx(_$$J, {
            className: 'grid_settings--stripesChit--gdIOd paint_panels--chit--twQEy',
            onClick: O,
            color: t.color,
            recordingKey: generateRecordingKey(o, 'chit')
          }), jsx(ef, {
            className: 'grid_settings--stripesColor--E3N63 grid_settings--_centered--oVZG8',
            ...D
          }), jsx(e_, {
            value: t.color.a,
            onValueChange: k,
            recordingKey: generateRecordingKey(o, 'opacity')
          })]
        });
        return jsxs(Fragment, {
          children: [jsx(cS, {
            label: renderI18nText('fullscreen.grids_panel.grid_settings.count'),
            input: r
          }), jsx(cS, {
            label: renderI18nText('fullscreen.grids_panel.grid_settings.color'),
            ref: C,
            input: a
          }), jsx(cS, {
            label: renderI18nText('fullscreen.grids_panel.grid_settings.type'),
            input: jsx(eh, {
              className: 'grid_settings--stripesType--D-Ywl grid_settings--_centered--oVZG8',
              ...D
            })
          }), jsx(cS, {
            label: e,
            input: jsx(ep, {
              className: 'grid_settings--stripesSectionSize--gVQJ6 grid_settings--_centered--oVZG8',
              ...L
            })
          }), jsx(cS, {
            label: i,
            input: jsx(eg, {
              className: 'grid_settings--stripesOffset--Vtce5 grid_settings--_centered--oVZG8',
              ...L
            })
          }), jsx(cS, {
            label: renderI18nText('fullscreen.grids_panel.grid_settings.gutter'),
            input: jsx(em, {
              className: 'grid_settings--stripesGutterSize--EhBXh grid_settings--_centered--oVZG8',
              ...L
            })
          })]
        });
      })()
    }), f && jsx(_$$h2, {
      disabledVariableIds: new Set(),
      initialPosition: y,
      color: t.color,
      boundVariable: null,
      onChange: T,
      onClose: R,
      recordingKey: o
    })]
  });
  return getFeatureFlags().eu_fpl_windows ? jsx(bL, {
    width: 240,
    onClose: S,
    defaultPosition: Yl({
      positionRelativeTo: p,
      align: {
        x: W3.BEFORE,
        y: W3.MIN
      },
      modalWidth: 240,
      offset: new Point(ei, 0)
    }),
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: F
        })
      }), jsx(DialogBody, {
        padding: 0,
        children: j
      })]
    })
  }) : jsx(DraggableModalManager, {
    title: F,
    headerSize: 'small',
    initialPosition: m,
    onClose: S,
    children: j
  });
}
export class $$ed3 extends X9 {
  format(e) {
    return e === _$$F ? getI18nString('fullscreen.grids_panel.grid_settings.auto') : super.format(e);
  }
  parse(e, t) {
    return e === 'Auto' ? _$$F : super.parse(e, t);
  }
}
let ec = memo(({
  className: e,
  layoutGrid: t,
  onChange: i,
  recordingKey: r
}) => {
  let s = useDispatch();
  let o = new $$ed3({
    min: 0
  });
  let d = useDropdownState();
  return jsx(eb, {
    recordingKey: generateRecordingKey(r, 'numSectionsVar'),
    fieldName: 'numSectionsVar',
    layoutGrid: t,
    onChange: i,
    withInputControl: !1,
    children: jsxs(eu, {
      'autoFocus': !0,
      'className': e,
      'data-tooltip': getI18nString('fullscreen.grids_panel.grid_settings.count'),
      'data-tooltip-type': KindEnum.TEXT,
      'dispatch': s,
      'dropdownShown': d,
      'dropdownWidth': 140,
      'formatter': o,
      'id': 'grid-settings-num-sections',
      'isTokenizable': !0,
      'onValueChange': e => {
        i({
          ...t,
          numSections: e,
          numSectionsVar: void 0
        });
      },
      'recordingKey': generateRecordingKey(r, 'numSections'),
      'tooltipForScreenReadersOnly': !0,
      'value': t.numSections,
      'children': [jsx(Z0, {
        value: _$$F
      }, 'Auto'), jsx(sK, {}, 'divider'), mapRange(12, e => jsx(Z0, {
        value: e + 1
      }, e))]
    })
  });
});
function eu({
  onValueChange: e,
  forwardedRef: t,
  children: i,
  ...a
}) {
  let s = useContext(FormattedInputContext);
  let o = useRef(null);
  let l = t ?? o;
  let d = useCallback((t, i) => {
    if (t === -1) {
      let e = l.current;
      e && s?.showBindingUI(e);
    } else {
      e(t, i);
    }
  }, [e, l, s]);
  return jsxs(ScrubbableDropdownInput, {
    ...a,
    onValueChange: d,
    forwardedRef: l,
    children: [i, jsx(sK, {}, 'divider'), jsx(Z0, {
      ignoreCheck: !0,
      icon: jsx(SvgComponent, {
        className: 'grid_settings--applyVariableOptionIcon--uUF5K',
        svg: $$default
      }),
      value: -1,
      children: getI18nString('fullscreen.properties_panel.apply_variable_ellipses')
    }, 'Apply Variable')]
  });
}
let ep = memo(({
  className: e,
  layoutGrid: t,
  onChange: i,
  recordingKey: r,
  bigNudgeAmount: s,
  smallNudgeAmount: o
}) => {
  let l = useDispatch();
  let d = t.pattern !== 'GRID' && t.type === 'STRETCH';
  let c = e => {
    i({
      ...t,
      sectionSize: e,
      sectionSizeVar: void 0
    });
  };
  let u = () => jsx(NumericInput, {
    ...(d ? {
      className: e
    } : {
      className: J,
      isTokenizable: !0,
      noBorderOnHover: !0
    }),
    'autoFocus': !0,
    'bigNudgeAmount': s,
    'data-tooltip': getI18nString('fullscreen.grids_panel.grid_settings.width'),
    'data-tooltip-type': KindEnum.TEXT,
    'disabled': d,
    'dispatch': l,
    'min': 0,
    'onValueChange': c,
    'placeholder': d ? getI18nString('fullscreen.grids_panel.grid_settings.auto') : void 0,
    'recordingKey': generateRecordingKey(r, 'sectionSize'),
    'smallNudgeAmount': o,
    'tooltipForScreenReadersOnly': !0,
    'value': d ? void 0 : t.sectionSize
  });
  return jsx(AutoInteractableWrapper, {
    name: 'grid_settings_section_size_input',
    children: d ? u() : jsx(eb, {
      recordingKey: generateRecordingKey(r, 'sectionSizeVar'),
      fieldName: 'sectionSizeVar',
      inputClassName: e,
      layoutGrid: t,
      onChange: i,
      children: u()
    })
  });
});
let em = memo(({
  className: e,
  layoutGrid: t,
  onChange: i,
  recordingKey: r,
  bigNudgeAmount: s,
  smallNudgeAmount: o
}) => {
  let l = useDispatch();
  return jsx(AutoInteractableWrapper, {
    name: 'grid_settings_gutter_size_input',
    children: jsx(eb, {
      recordingKey: generateRecordingKey(r, 'gutterSizeVar'),
      fieldName: 'gutterSizeVar',
      inputClassName: e,
      layoutGrid: t,
      onChange: i,
      children: jsx(NumericInput, {
        'bigNudgeAmount': s,
        'className': J,
        'data-tooltip': getI18nString('fullscreen.grids_panel.grid_settings.gutter'),
        'data-tooltip-type': KindEnum.TEXT,
        'dispatch': l,
        'isTokenizable': !0,
        'min': 0,
        'noBorderOnHover': !0,
        'onValueChange': e => {
          i({
            ...t,
            gutterSize: e,
            gutterSizeVar: void 0
          });
        },
        'recordingKey': generateRecordingKey(r, 'gutter'),
        'smallNudgeAmount': o,
        'tooltipForScreenReadersOnly': !0,
        'value': t.gutterSize
      })
    })
  });
});
let eh = memo(({
  layoutGrid: e,
  className: t,
  onChange: i,
  recordingKey: r
}) => {
  let o = useDispatch();
  let l = useDropdownState();
  let d = getI18nState()?.getPrimaryLocale(!0);
  let c = {
    format: t => {
      switch (t) {
        case 'MIN':
          return e.axis === 'X' ? getI18nString('fullscreen.grids_panel.grid_settings.left') : getI18nString('fullscreen.grids_panel.grid_settings.top');
        case 'MAX':
          return e.axis === 'X' ? getI18nString('fullscreen.grids_panel.grid_settings.right') : getI18nString('fullscreen.grids_panel.grid_settings.bottom');
        case 'CENTER':
          return getI18nString('fullscreen.grids_panel.grid_settings.center');
        case 'STRETCH':
          return getI18nString('fullscreen.grids_panel.grid_settings.stretch');
      }
    }
  };
  let m = t => {
    i({
      ...e,
      type: t
    });
  };
  let h = d === languageCodes.EN ? 'grid_settings--stripesTypeDropdown--V6Bp3' : 'grid_settings--stripesTypeDropdownL10n--R1Ksc';
  return getFeatureFlags().ce_tv_fpl_select ? jsx(AutoInteractableWrapper, {
    name: 'grid_settings_layout_type_select',
    children: jsxs(_$$bL, {
      onChange: m,
      value: e.type,
      recordingKey: generateRecordingKey(r, 'type'),
      children: [jsx(l9, {
        label: jsx(HiddenLabel, {
          children: getI18nString('fullscreen.grid_panel.layout_guide_type')
        }),
        width: 'fill'
      }), jsxs(mc, {
        children: [jsx(c$, {
          value: 'MIN',
          children: c.format('MIN')
        }), jsx(c$, {
          value: 'MAX',
          children: c.format('MAX')
        }), jsx(c$, {
          value: 'CENTER',
          children: c.format('CENTER')
        }), jsx(c$, {
          value: 'STRETCH',
          children: c.format('STRETCH')
        })]
      })]
    })
  }) : jsx(AutoInteractableWrapper, {
    name: 'grid_settings_layout_type_select',
    children: jsxs(en, {
      ariaLabel: getI18nString('fullscreen.grid_panel.layout_guide_type'),
      className: t,
      dispatch: o,
      dropdownClassName: h,
      dropdownShown: l,
      formatter: c,
      id: 'layout-grid-settings-layout-type',
      onChange: m,
      property: e.type,
      recordingKey: generateRecordingKey(r, 'type'),
      children: [jsx(er, {
        value: 'MIN',
        recordingKey: generateRecordingKey(r, 'type', 'MIN')
      }), jsx(er, {
        value: 'MAX',
        recordingKey: generateRecordingKey(r, 'type', 'MAX')
      }), jsx(er, {
        value: 'CENTER',
        recordingKey: generateRecordingKey(r, 'type', 'CENTER')
      }), jsx(er, {
        value: 'STRETCH',
        recordingKey: generateRecordingKey(r, 'type', 'STRETCH')
      })]
    })
  });
});
let eg = memo(({
  className: e,
  layoutGrid: t,
  onChange: i,
  recordingKey: r,
  bigNudgeAmount: s,
  smallNudgeAmount: o
}) => {
  let l = useDispatch();
  let d = t.type === 'CENTER';
  let c = e => {
    i({
      ...t,
      offset: e,
      offsetVar: void 0
    });
  };
  let u = () => jsx(NumericInput, {
    ...(d ? {
      className: e
    } : {
      className: J,
      isTokenizable: !0,
      noBorderOnHover: !0
    }),
    'bigNudgeAmount': s,
    'data-tooltip': getI18nString('fullscreen.grids_panel.grid_settings.offset'),
    'data-tooltip-type': KindEnum.TEXT,
    'disabled': d,
    'dispatch': l,
    'min': 0,
    'onValueChange': c,
    'recordingKey': generateRecordingKey(r, 'offset'),
    'smallNudgeAmount': o,
    'tooltipForScreenReadersOnly': !0,
    'value': d ? 0 : t.offset
  });
  return jsx(AutoInteractableWrapper, {
    name: 'grid_settings_offset_input',
    children: d ? u() : jsx(eb, {
      recordingKey: generateRecordingKey(r, 'offsetVar'),
      fieldName: 'offsetVar',
      inputClassName: e,
      layoutGrid: t,
      onChange: i,
      children: u()
    })
  });
});
let ef = memo(({
  className: e,
  layoutGrid: t,
  onChange: i,
  recordingKey: r
}) => {
  let a = formattedColorManipulator;
  return jsx(AutoInteractableWrapper, {
    name: 'grid_settings_color_input',
    children: jsx(FormattedInputVariant3, {
      className: e,
      noLeftBorder: !0,
      property: t.color,
      formatter: a,
      onChange: e => {
        i({
          ...t,
          color: e
        });
      },
      recordingKey: generateRecordingKey(r, 'color'),
      noBorderOnFocus: !0
    })
  });
});
function e_({
  value: e,
  onValueChange: t,
  recordingKey: i
}) {
  let r = useDispatch();
  return jsx(AutoInteractableWrapper, {
    name: 'grid_settings_opacity_input',
    children: jsx(OpacityInput, {
      className: 'grid_settings--gridOpacity--yH4u- paint_panels--opacityInputContainer--oqlsk',
      value: e,
      onValueChange: t,
      noBorderOnFocus: !0,
      dispatch: r,
      recordingKey: i
    })
  });
}
let eA = new $$ea0();
export function $$ey1(e) {
  let t = useDispatch();
  let {
    layoutGrid,
    onChange
  } = e;
  let o = useCurrentFileKey();
  let l = useDeepEqualSceneValue(e => e.getDirectlySelectedNodes().map(e => e.guid));
  let d = useCallback(e => {
    trackEventAnalytics('editor-layout-guide-changed', {
      fileKey: o,
      nodeIds: l.slice(0, 50),
      prevLayoutType: layoutGrid.pattern === 'GRID' ? 'grid' : layoutGrid.axis === 'X' ? 'columns' : 'rows',
      newLayoutType: e === 'GRID' ? 'grid' : e === 'X' ? 'columns' : 'rows'
    });
    e === 'GRID' ? onChange({
      ...layoutGrid,
      pattern: 'GRID'
    }) : onChange({
      ...layoutGrid,
      axis: e,
      pattern: 'STRIPES'
    });
  }, [onChange, layoutGrid, o, l]);
  let c = useDropdownState();
  let m = useId();
  return getFeatureFlags().ce_tv_fpl_select ? jsxs(_$$bL, {
    onChange: d,
    value: layoutGrid.pattern === 'GRID' ? 'GRID' : layoutGrid.axis,
    recordingKey: generateRecordingKey(e, 'pattern'),
    children: [jsx(l9, {
      label: jsx(HiddenLabel, {
        children: getI18nString('fullscreen.grid_panel.layout_guide_type')
      }),
      width: 'fill',
      children: e.dropdownOverride ?? void 0
    }), jsxs(mc, {
      children: [jsx(c$, {
        value: 'GRID',
        children: eA.format('GRID')
      }), jsx(c$, {
        value: 'X',
        children: eA.format('X')
      }), jsx(c$, {
        value: 'Y',
        children: eA.format('Y')
      })]
    })]
  }) : jsxs(es, {
    ariaLabel: getI18nString('fullscreen.grid_panel.layout_guide_type'),
    className: ee,
    dispatch: t,
    dropdownClassName: 'grid_settings--gridTypeDropdown--eR8Rz',
    dropdownOverride: e.dropdownOverride,
    dropdownShown: c,
    formatter: eA,
    id: m,
    inputClassName: 'grid_settings--gridTypeInput--wsH1b',
    onChange: d,
    property: layoutGrid.pattern === 'GRID' ? 'GRID' : layoutGrid.axis,
    recordingKey: generateRecordingKey(e, 'pattern'),
    children: [jsx(eo, {
      value: 'GRID',
      recordingKey: generateRecordingKey(e, 'pattern', 'GRID')
    }), jsx(eo, {
      value: 'X',
      recordingKey: generateRecordingKey(e, 'pattern', 'X')
    }), jsx(eo, {
      value: 'Y',
      recordingKey: generateRecordingKey(e, 'pattern', 'Y')
    })]
  });
}
function eb({
  children: e,
  fieldName: t,
  inputClassName: i,
  layoutGrid: s,
  onChange: l,
  withInputControl: d = !0,
  recordingKey: c
}) {
  let u = MH(s[t]) ?? void 0;
  let p = useDispatch();
  let g = useCallback(async e => {
    if (e) {
      let i = await p(Oe(e));
      let n = convertVariableIdToKiwi(i);
      assertNotNullish(n);
      let r = {
        resolvedDataType: 'FLOAT',
        dataType: 'ALIAS',
        value: {
          alias: n
        }
      };
      executeWithDSAAction(StyleVariableOperation.VARIABLE_ATTACH, CopyPasteType.DIRECT, () => {
        l({
          ...s,
          [t]: r
        });
      });
      oz(`GRID_${t.slice(0, -3).toUpperCase()}`, r);
    } else {
      executeWithDSAAction(StyleVariableOperation.VARIABLE_DETACH, CopyPasteType.DIRECT, () => {
        l({
          ...s,
          [t]: void 0
        });
      });
    }
  }, [p, t, s, l]);
  let f = useRef(null);
  let _ = e;
  d && (_ = jsx(FormattedInputWithWrapper, {
    recordingKey: c,
    inputClassName: i,
    currentFieldValue: u,
    hasBindingContextMenu: !0,
    inputRef: f,
    children: cloneElement(_, {
      forwardedRef: f
    })
  }));
  return jsxs(ControlledVariablePickerProvider, {
    boundVariableId: u,
    resolvedType: VariableResolvedDataType.FLOAT,
    onVariableSelected: g,
    children: [jsx(VariablePicker, {}), _]
  });
}
export const t_ = $$ea0;
export const dW = $$ey1;
export const YR = $$el2;
export const PO = $$ed3;