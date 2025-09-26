import A from 'classnames';
import { createContext, memo, useCallback, useContext, useEffect, useMemo } from 'react';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { u as _$$u } from '../905/65923';
import { bm, mb, Zf } from '../905/107436';
import { y as _$$y } from '../905/129046';
import { KindEnum } from '../905/129884';
import { Ph } from '../905/160095';
import { bL } from '../905/163832';
import { useSingleEffect } from '../905/791079';
import { J as _$$J } from '../905/225412';
import { getI18nString, renderI18nText } from '../905/303541';
import { X } from '../905/319582';
import { UpgradeAction } from '../905/370443';
import { rq } from '../905/425180';
import { k as _$$k } from '../905/443820';
import { l as _$$l } from '../905/479687';
import { ButtonWide } from '../905/521428';
import { e } from '../905/621515';
import { ButtonPrimitive } from '../905/632989';
import { formattedColorManipulator, defaultColorManipulator } from '../905/713722';
import { F_ } from '../905/748636';
import { useCurrentUserOrgId } from '../905/845253';
import { A as _$$A } from '../905/891805';
import { noop } from 'lodash-es';
;
import { j$, xm } from '../905/936278';
import { calculatePickerPositionLeft } from '../905/959568';
import { d as _$$d } from '../905/976845';
import { JUF } from '../figma_app/6204';
import { buildUploadUrl } from '../figma_app/169182';
import { yesNoTrackingEnum } from '../figma_app/198712';
import { N as _$$N } from '../figma_app/268271';
import { DialogContents } from '../figma_app/272243';
import { p as _$$p } from '../figma_app/353099';
import { B as _$$B } from '../figma_app/539422';
import { getCurrentTeam } from '../figma_app/598018';
import { generateRecordingKey } from '../figma_app/878298';
import { trackDefinedFileEventWithStore } from '../figma_app/901889';
let m = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      fillRule: 'evenodd',
      d: 'M12 5a7 7 0 1 1 0 14 7 7 0 0 1 0-14m0 1a6 6 0 0 1 6 6c0 1.692-1.265 3-2.75 3s-2.75-1.308-2.75-3c0-2.174-1.645-4-3.75-4a3.5 3.5 0 0 0-1.497.33A5.99 5.99 0 0 1 12 6M8.75 9c1.485 0 2.75 1.308 2.75 3 0 2.174 1.645 4 3.75 4a3.5 3.5 0 0 0 1.497-.33A6 6 0 0 1 6 12c0-1.692 1.265-3 2.75-3m-1.012 1.368A1.6 1.6 0 0 1 8.746 10h.008a1.6 1.6 0 0 1 1.009.368c.289.236.062.632-.31.632H8.048c-.373 0-.6-.396-.31-.632M7.51 13c-.609 0-.74-1-.01-1H10c.744 0 .63 1-.012 1zm3.086 2c.357 0 .575-.41.42-.73A.47.47 0 0 0 10.6 14H8.18c-.36 0-.599.37-.406.674l.08.123c.089.13.238.203.395.203zm1.804 1.984a5 5 0 0 1-.398.016H12a5 5 0 0 1-1.687-.293c-.452-.161-.296-.707.184-.707h1.739c.106 0 .208.036.293.1.354.26.31.85-.128.884',
      clipRule: 'evenodd'
    })
  });
});
let h = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      fillRule: 'evenodd',
      d: 'M18 12q0 .2-.013.396a1 1 0 0 0-.024.102C17.743 13.942 16.585 15 15.25 15c-.836 0-1.602-.414-2.112-1.079-.202-.263-.602-.336-.836-.101a.44.44 0 0 0-.064.563c.678.975 1.764 1.617 3.012 1.617a3.5 3.5 0 0 0 1.497-.33A5.99 5.99 0 0 1 12 18a6 6 0 0 1-2.701-.641.54.54 0 0 0-.626.09c-.23.23-.189.614.1.764a7 7 0 0 0 9.44-9.44c-.15-.289-.534-.33-.764-.1a.54.54 0 0 0-.09.626c.41.812.641 1.73.641 2.701M5.787 15.227c.15.289.534.33.764.1a.54.54 0 0 0 .09-.626 6 6 0 0 1-.628-3.097 1 1 0 0 0 .024-.102C6.257 10.058 7.415 9 8.75 9c.836 0 1.602.414 2.112 1.079.202.263.602.336.836.101a.44.44 0 0 0 .064-.563C11.084 8.642 9.998 8 8.75 8a3.5 3.5 0 0 0-1.497.33A5.99 5.99 0 0 1 12 6c.972 0 1.89.231 2.701.641a.54.54 0 0 0 .626-.09c.23-.23.189-.614-.1-.764a7 7 0 0 0-9.44 9.44m12.067-8.373a.5.5 0 0 0-.708-.708l-11 11a.5.5 0 0 0 .708.708z',
      clipRule: 'evenodd'
    })
  });
});
let y = A;
let H = 'color_contrast_info--colorRow--bc24V';
let W = 'color_contrast_info--colorLabel--23JzI ellipsis--ellipsis--Tjyfa';
let K = 'color_contrast_info--colorValue--4O--i';
let Y = 'color_contrast_info--chit--sYv08';
let q = 'color_contrast_info--colorValueText--67yRc ellipsis--ellipsis--Tjyfa';
let $ = 'color-contrast';
export function $$Z0({
  toggled: e,
  setToggled: t,
  recordingKey: i,
  panelID: a
}) {
  let o = trackDefinedFileEventWithStore();
  let l = useCurrentUserOrgId();
  let d = getCurrentTeam()?.id;
  let c = useCallback(() => {
    o('color_contrast.toggle', {
      contrast_tool: !e,
      productType: 'design',
      orgId: l,
      teamId: d
    });
    t(e => !e);
  }, [l, t, d, e, o]);
  let {
    standardMet
  } = useContext($$X1).colorContrastInfo;
  return jsxs(Fragment, {
    children: [jsx(_$$d, {
      'aria-label': getI18nString('fullscreen.properties_panel.color_contrast.check'),
      'aria-expanded': e,
      'onClick': c,
      'recordingKey': i,
      'aria-haspopup': void 0,
      'aria-controls': a,
      'data-testid': 'color-contrast-button',
      'data-onboarding-key': $,
      'children': standardMet ? jsx(m, {}) : jsx(h, {})
    }), jsx(_$$p, {
      children: jsx(et, {})
    })]
  });
}
export let $$X1 = createContext({
  colorContrastInfo: {
    setFgHue: noop,
    setFgAlpha: noop,
    showAutocorrectPreview: !1,
    setShowAutocorrectPreview: noop,
    showColorSwatchInfoFlyout: !1,
    setShowColorSwatchInfoFlyout: noop
  },
  settings: {
    contrastInfoShown: !1,
    setIsColorContrastInfoShown: noop,
    contrastLevelForCategory: bm.AA,
    contrastLevelSelected: bm.AA,
    setContrastLevelSelected: noop,
    categorySelected: Zf.auto,
    setCategorySelected: noop
  },
  showColorContrast: !1,
  pickerSize: 0,
  isUnavailable: !0,
  toolStatus: j$.LOADING,
  setIgnoreTimeout: noop
});
export function $$Q2({
  recordingKey: e,
  onColorChange: t,
  id: i
}) {
  let a = trackDefinedFileEventWithStore();
  let u = useCurrentUserOrgId();
  let p = getCurrentTeam()?.id;
  let m = useContext($$X1);
  let {
    foregroundColor,
    backgroundColor,
    autoCorrectCandidate,
    contrastDisplayValue,
    contrastRowRef,
    standardMet,
    setShowAutocorrectPreview,
    showColorSwatchInfoFlyout,
    setShowColorSwatchInfoFlyout
  } = m.colorContrastInfo;
  let {
    contrastInfoShown,
    contrastLevelForCategory,
    setContrastLevelSelected,
    contrastRatios,
    layerType,
    isGraphics,
    categorySelected,
    setCategorySelected
  } = m.settings;
  let {
    isUnavailable,
    unavailableReason,
    toolStatus,
    setIgnoreTimeout
  } = m;
  let Z = function (e) {
    switch (e) {
      case mb.mixed:
        return getI18nString('fullscreen.properties_panel.color_contrast.mixed');
      case mb.largeText:
        return getI18nString('fullscreen.properties_panel.color_contrast.large_text');
      case mb.normalText:
        return getI18nString('fullscreen.properties_panel.color_contrast.normal_text');
      case mb.graphics:
      default:
        return getI18nString('fullscreen.properties_panel.color_contrast.graphics');
    }
  }(layerType);
  let Q = !standardMet && autoCorrectCandidate;
  let ee = contrastLevelForCategory === bm.AA ? getI18nString('fullscreen.properties_panel.color_contrast.aaStandard') : getI18nString('fullscreen.properties_panel.color_contrast.aaaStandard');
  let et = (e, t = !1) => e ? getI18nString('fullscreen.properties_panel.color_contrast.contrast_standard_met', {
    standard: ee
  }) : getI18nString('fullscreen.properties_panel.color_contrast.contrast_standard_not_met', {
    standard: ee,
    button_action: t ? getI18nString('fullscreen.properties_panel.color_contrast.contrast_autocorrect') : ''
  });
  let ei = et(standardMet, !!Q);
  let en = et(standardMet);
  let {
    Dropdown,
    dropdownTargetRef,
    toggleDropdown,
    isDropdownShown
  } = _$$B('COLOR_CONTRAST_SETTINGS_DROPDOWN');
  let el = useCallback(e => {
    a('color_contrast.category_override', {
      category: e,
      orgId: u,
      teamId: p
    });
    setCategorySelected(e);
  }, [u, setCategorySelected, p, a]);
  let ed = useCallback(e => {
    a('color_contrast.selected_conformance', {
      AA: e === bm.AA,
      AAA: e === bm.AAA,
      productType: 'design',
      orgId: u,
      teamId: p
    });
    setContrastLevelSelected(e);
  }, [u, setContrastLevelSelected, p, a]);
  let ec = useMemo(() => [{
    displayText: getI18nString('fullscreen.properties_panel.color_contrast.category'),
    header: !0
  }, {
    displayText: getI18nString('fullscreen.properties_panel.color_contrast.auto', {
      autoDetectedCategory: Z
    }),
    callback: () => el(Zf.auto),
    alwaysShowCheckMarkOffset: !0,
    isChecked: categorySelected === Zf.auto,
    recordingKey: 'category_auto'
  }, {
    displayText: getI18nString('fullscreen.properties_panel.color_contrast.large_text'),
    callback: () => el(mb.largeText),
    alwaysShowCheckMarkOffset: !0,
    isChecked: categorySelected === mb.largeText,
    recordingKey: 'category_large_text'
  }, {
    displayText: getI18nString('fullscreen.properties_panel.color_contrast.normal_text'),
    callback: () => el(mb.normalText),
    alwaysShowCheckMarkOffset: !0,
    isChecked: categorySelected === mb.normalText,
    recordingKey: 'category_normal_text'
  }, {
    displayText: getI18nString('fullscreen.properties_panel.color_contrast.graphics'),
    callback: () => el(mb.graphics),
    alwaysShowCheckMarkOffset: !0,
    isChecked: categorySelected === mb.graphics,
    recordingKey: 'category_graphics'
  }, {
    displayText: '',
    separator: !0
  }, {
    displayText: getI18nString('fullscreen.properties_panel.color_contrast.level'),
    header: !0
  }, {
    displayText: contrastRatios?.AA ? getI18nString('fullscreen.properties_panel.color_contrast.levelAA', {
      contrastValue: contrastRatios.AA
    }) : getI18nString('fullscreen.properties_panel.color_contrast.levelAA_no_contrast_value'),
    callback: () => ed(bm.AA),
    alwaysShowCheckMarkOffset: !0,
    isChecked: contrastLevelForCategory === bm.AA,
    recordingKey: 'level_aa'
  }, {
    displayText: contrastRatios?.AAA ? getI18nString('fullscreen.properties_panel.color_contrast.levelAAA', {
      contrastValue: contrastRatios.AAA
    }) : getI18nString('fullscreen.properties_panel.color_contrast.levelAAA_unavailable'),
    callback: () => ed(bm.AAA),
    alwaysShowCheckMarkOffset: !0,
    isChecked: contrastLevelForCategory === bm.AAA,
    disabled: isGraphics,
    recordingKey: 'level_aaa'
  }], [categorySelected, contrastLevelForCategory, contrastRatios?.AA, contrastRatios?.AAA, isGraphics, Z, el, ed]);
  let eu = useCallback(() => {
    a('color_contrast.check_compliance', {
      productType: 'design',
      compliance_pass: standardMet,
      orgId: u,
      teamId: p
    });
    standardMet || setShowAutocorrectPreview(!0);
  }, [u, setShowAutocorrectPreview, standardMet, p, a]);
  let ep = useCallback(() => {
    setShowAutocorrectPreview(!1);
  }, [setShowAutocorrectPreview]);
  let em = useCallback(() => {
    !standardMet && autoCorrectCandidate && (a('color_contrast.auto_correct_compliance', {
      orgId: u,
      teamId: p
    }), t(autoCorrectCandidate, yesNoTrackingEnum.YES));
  }, [autoCorrectCandidate, t, u, standardMet, p, a]);
  let eh = useCallback(() => {
    a('color_contrast.click_swatch', {
      orgId: u,
      teamId: p
    });
    setShowColorSwatchInfoFlyout(e => !e);
  }, [u, setShowColorSwatchInfoFlyout, p, a]);
  let eg = useCallback(() => {
    setIgnoreTimeout(!0);
  }, [setIgnoreTimeout]);
  if (!contrastInfoShown) return null;
  if (isUnavailable || !foregroundColor || !backgroundColor) {
    let e = toolStatus === j$.LOADING ? jsx(_$$k, {
      htmlAttributes: {
        'data-tooltip-type': KindEnum.TEXT,
        'data-tooltip': getI18nString('fullscreen.properties_panel.color_contrast.loading')
      }
    }) : toolStatus === j$.TIMED_OUT ? jsx('div', {
      className: 'color_contrast_info--timeoutButtonWrapper--m30OZ',
      children: jsx(ButtonWide, {
        variant: 'secondary',
        onClick: eg,
        children: getI18nString('fullscreen.properties_panel.color_contrast.check_contrast_button')
      })
    }) : jsx(h, {
      className: 'color_contrast_info--unavailableIcon--nzuTg'
    });
    let t = function (e) {
      switch (e) {
        case xm.VideoInBackground:
          return renderI18nText('fullscreen.properties_panel.color_contrast.unavailable.video');
        case xm.ImageInBackground:
          return renderI18nText('fullscreen.properties_panel.color_contrast.unavailable.image');
        case xm.GradientInBackground:
          return renderI18nText('fullscreen.properties_panel.color_contrast.unavailable.gradient');
        case xm.BlendModeInBackground:
          return renderI18nText('fullscreen.properties_panel.color_contrast.unavailable.blend_mode_bg');
        case xm.BlendModeInForeground:
          return renderI18nText('fullscreen.properties_panel.color_contrast.unavailable.blend_mode_fg');
        case xm.TextInBackground:
          return renderI18nText('fullscreen.properties_panel.color_contrast.unavailable.text');
        case xm.MixedBackgrounds:
          return renderI18nText('fullscreen.properties_panel.color_contrast.unavailable.mixed_backgrounds');
        case xm.MixedStandards:
          return renderI18nText('fullscreen.properties_panel.color_contrast.unavailable.mixed_standards');
        case xm.Unavailable:
        default:
          return renderI18nText('fullscreen.properties_panel.color_contrast.unavailable');
      }
    }(unavailableReason);
    let i = function (e) {
      switch (e) {
        case xm.VideoInBackground:
        case xm.ImageInBackground:
        case xm.GradientInBackground:
        case xm.TextInBackground:
        case xm.BlendModeInBackground:
          return getI18nString('fullscreen.properties_panel.color_contrast.unavailable.tooltip');
        case xm.BlendModeInForeground:
          return getI18nString('fullscreen.properties_panel.color_contrast.unavailable_foreground.tooltip');
        case xm.MixedBackgrounds:
          return getI18nString('fullscreen.properties_panel.color_contrast.unavailable_mixed_bg.tooltip');
        case xm.MixedStandards:
          return getI18nString('fullscreen.properties_panel.color_contrast.unavailable_mixed_standards.tooltip');
        case xm.Unavailable:
        default:
          return getI18nString('fullscreen.properties_panel.color_contrast.unavailable_simple_combination.tooltip');
      }
    }(unavailableReason);
    let r = {
      'data-tooltip-type': KindEnum.TEXT,
      'data-tooltip': i,
      'data-tooltip-max-width': 225
    };
    return jsx('div', {
      className: 'color_contrast_info--colorContrastRowUnavailable--4QDwj color_contrast_info--colorContrastRowBase--x7tX0',
      children: jsxs('div', {
        className: 'color_contrast_info--unavailableWrapper--pMSB6',
        ...r,
        children: [e, toolStatus === j$.LOADED && jsx('span', {
          'data-testid': 'contrast-unavailable',
          'children': t
        })]
      })
    });
  }
  return jsxs('div', {
    'id': i,
    'aria-label': getI18nString('fullscreen.properties_panel.color_picker.color_contrast_info.flyout_title'),
    'role': 'group',
    'className': 'color_contrast_info--colorContrastRow--yDDg9 color_contrast_info--colorContrastRowBase--x7tX0',
    'ref': contrastRowRef,
    'children': [jsxs(_$$u, {
      'aria-haspopup': 'dialog',
      'aria-expanded': showColorSwatchInfoFlyout,
      'aria-label': getI18nString('fullscreen.properties_panel.color_contrast_ratio', {
        ratio: contrastDisplayValue ?? ''
      }),
      'onClick': eh,
      'className': y()('color_contrast_info--contrastInfo--sdvXu', 'color_contrast_info--inspectColorsButton--n-wnE', {
        'color_contrast_info--selected--y60q5': !!showColorSwatchInfoFlyout
      }),
      'htmlAttributes': {
        'data-tooltip-type': KindEnum.TEXT,
        'data-tooltip': getI18nString('fullscreen.properties_panel.color_picker.color_contrast_info.view_colors'),
        'data-tooltip-show-above': !0
      },
      'recordingKey': generateRecordingKey(e, 'colorsFlyoutButton'),
      'children': [jsx(J, {
        foregroundColor,
        backgroundColor
      }), jsxs('div', {
        'className': 'color_contrast_info--colorContrastValue--DdraT',
        'data-testid': 'contrast-display-value',
        'children': [contrastDisplayValue, jsx('span', {
          className: 'color_contrast_info--comparisonValue--Ed5BI',
          children: '\u2009:\u20091'
        })]
      })]
    }), jsxs('div', {
      className: 'color_contrast_info--rightButtons--IUZ03',
      children: [jsxs(ButtonPrimitive, {
        'aria-label': ei,
        'disabled': !Q,
        'htmlAttributes': {
          'data-tooltip': en,
          'data-tooltip-type': KindEnum.TEXT,
          'data-testid': 'contrast-standard-wrapper',
          'data-tooltip-show-above': !0,
          'onMouseEnter': eu,
          'onMouseLeave': ep
        },
        'className': y()('color_contrast_info--contrastButton--BI294', {
          'color_contrast_info--hovered--D7Ab4': Q
        }),
        'onClick': em,
        'recordingKey': generateRecordingKey(e, 'color_contrast_autocorrect_button'),
        'children': [standardMet ? jsx(_$$l, {}) : jsx(X, {}), jsx('span', {
          'className': 'color_contrast_info--standardLabel--8O68Q',
          'data-testid': 'contrast-standard-selected',
          'children': ee
        })]
      }), jsx('div', {
        ref: dropdownTargetRef,
        children: jsx(_$$d, {
          'aria-expanded': isDropdownShown,
          'onClick': toggleDropdown,
          'aria-label': getI18nString('fullscreen.properties_panel.color_contrast.settings'),
          'htmlAttributes': {
            'data-tooltip': getI18nString('fullscreen.properties_panel.color_contrast.settings'),
            'data-tooltip-type': KindEnum.TEXT,
            'data-tooltip-show-above': !0
          },
          'recordingKey': generateRecordingKey(e, 'color_contrast_settings_button'),
          'children': jsx(_$$A, {})
        })
      }), jsx(Dropdown, {
        items: ec,
        showPoint: !1,
        recordingKey: generateRecordingKey(e, 'color_contrast_settings')
      })]
    })]
  });
}
function J({
  foregroundColor: e,
  backgroundColor: t
}) {
  let i = defaultColorManipulator.format(e);
  let r = defaultColorManipulator.format(t);
  return jsxs('svg', {
    width: '14',
    height: '14',
    viewBox: '0 0 14 14',
    fill: 'none',
    children: [jsx('circle', {
      id: 'background',
      cx: '7',
      cy: '7',
      r: '7',
      fill: r,
      fillOpacity: 1
    }), jsx('path', {
      id: 'foreground',
      d: 'M7 -6.11959e-07C3.13401 -9.49935e-07 6.43956e-07 3.13401 3.0598e-07 7C4.74968e-07 5.067 1.567 3.5 3.5 3.5C5.433 3.5 7 5.067 7 7C7 8.933 8.567 10.5 10.5 10.5C12.433 10.5 14 8.933 14 7C14 3.13401 10.866 -2.73984e-07 7 -6.11959e-07Z',
      fill: i,
      fillOpacity: e.a
    }), jsx('circle', {
      id: 'border',
      cx: '7',
      cy: '7',
      r: '6.5',
      stroke: 'black',
      strokeOpacity: '0.15'
    })]
  });
}
export function $$ee3() {
  let {
    showColorContrast,
    colorContrastInfo,
    settings,
    pickerSize,
    isUnavailable
  } = useContext($$X1);
  let o = settings.contrastLevelForCategory === bm.AA ? colorContrastInfo.contrastLines?.AA : colorContrastInfo.contrastLines?.AAA;
  if (!(showColorContrast && settings.contrastInfoShown) || !o || isUnavailable) return null;
  let {
    lighterLuminanceLine,
    darkerLuminanceLine
  } = o;
  let c = {
    stroke: '#FFFFFF',
    opacity: '80%'
  };
  let u = lighterLuminanceLine ? `${lighterLuminanceLine} V 0 H 0 V ${pickerSize} Z` : '';
  let p = darkerLuminanceLine ? `${darkerLuminanceLine} H ${pickerSize} V ${pickerSize} H 0 Z` : '';
  let {
    autoCorrectCandidate,
    autoCorrectCandidatePosition,
    showAutocorrectPreview
  } = t;
  return jsxs('div', {
    className: 'color_contrast_info--overlay--R2ntO',
    children: [jsxs('svg', {
      width: pickerSize,
      height: pickerSize,
      viewBox: `0 0 ${pickerSize} ${pickerSize}`,
      fill: 'none',
      children: [jsxs('defs', {
        children: [jsxs('filter', {
          id: 'shadow',
          x: '0',
          y: '0',
          width: '125%',
          height: '125%',
          children: [jsx('feDropShadow', {
            dx: '0',
            dy: '1',
            stdDeviation: '3',
            floodColor: 'rgba(0, 0, 0, 0.15)'
          }), jsx('feDropShadow', {
            dx: '0',
            dy: '0',
            stdDeviation: '0.5',
            floodColor: 'rgba(0, 0, 0, 0.30)'
          }), jsx('feDropShadow', {
            dx: '0',
            dy: '0.5',
            stdDeviation: '0',
            floodColor: 'rgba(0, 0, 0, 0.10)'
          })]
        }), jsx('pattern', {
          id: 'dotGrid',
          patternUnits: 'userSpaceOnUse',
          width: '6',
          height: '6',
          patternTransform: 'translate(2,2)',
          children: jsx('circle', {
            cx: '3',
            cy: '3',
            r: '1',
            fill: 'white'
          })
        }), jsxs('mask', {
          id: 'safeAreasMask',
          children: [jsx('rect', {
            x: '0',
            y: '0',
            width: pickerSize,
            height: pickerSize,
            fill: 'white'
          }), jsxs('g', {
            children: [lighterLuminanceLine && jsx('path', {
              d: u,
              fill: 'black'
            }), darkerLuminanceLine && jsx('path', {
              d: p,
              fill: 'black'
            })]
          })]
        })]
      }), lighterLuminanceLine && jsx('path', {
        'd': lighterLuminanceLine,
        'fill': 'none',
        'style': c,
        'filter': 'url(#shadow)',
        'data-testid': 'color-contrast-line-lighter'
      }), darkerLuminanceLine && jsx('path', {
        'd': darkerLuminanceLine,
        'fill': 'none',
        'style': c,
        'filter': 'url(#shadow)',
        'data-testid': 'color-contrast-line-darker'
      }), jsx('rect', {
        x: '0',
        y: '0',
        width: pickerSize,
        height: pickerSize,
        fill: 'url(#dotGrid)',
        opacity: '0.25',
        mask: 'url(#safeAreasMask)'
      })]
    }), autoCorrectCandidate && autoCorrectCandidatePosition && jsx('div', {
      className: y()('color_contrast_info--autocorrectPreview--ZVbbN', {
        'color_contrast_info--displayAndAnimate--4YxU3': showAutocorrectPreview
      }),
      style: {
        top: autoCorrectCandidatePosition.top,
        left: autoCorrectCandidatePosition.left,
        background: defaultColorManipulator.format(autoCorrectCandidate),
        transform: `translate(${autoCorrectCandidatePosition.originalLeft - autoCorrectCandidatePosition.left}px, ${autoCorrectCandidatePosition.originalTop - autoCorrectCandidatePosition.top}px)`
      }
    })]
  });
}
function et() {
  let {
    show,
    isShowing,
    complete
  } = e({
    overlay: JUF,
    priority: _$$N.DEFAULT_MODAL
  });
  let {
    showColorContrast,
    settings
  } = useContext($$X1);
  useSingleEffect(() => {
    showColorContrast && !settings.contrastInfoShown && show();
  });
  useEffect(() => {
    settings.contrastInfoShown && complete();
  }, [complete, settings.contrastInfoShown]);
  return jsx(rq, {
    arrowPosition: F_.LEFT_TITLE,
    description: renderI18nText('fullscreen.properties_panel.color_contrast.onboarding.description'),
    isShowing,
    media: jsx(_$$y, {
      src: buildUploadUrl('5a75f85e8b6179df3a9d0500370b3bc92976d209'),
      alt: 'An image with a preview of the new color contrast feature',
      aspectRatio: 1.84
    }),
    onClose: complete,
    overrideFooter: jsx('div', {
      className: 'color_contrast_info--learnMoreFooter--H-w6u',
      children: jsx(Ph, {
        href: 'https://help.figma.com/hc/articles/360041003774-Apply-paints-with-the-color-picker',
        trackingProperties: {
          trackingDescriptor: UpgradeAction.LEARN_MORE
        },
        newTab: !0,
        trusted: !0,
        children: renderI18nText('fullscreen.properties_panel.color_contrast.onboarding.primary_cta')
      })
    }),
    targetKey: $,
    title: renderI18nText('fullscreen.properties_panel.color_contrast.onboarding.title'),
    trackingContextName: 'Color Contrast Onboarding',
    width: 184
  });
}
export function $$ei4({
  foregroundPaint: e
}) {
  let {
    backgroundPaint,
    contrastRowRef,
    setShowColorSwatchInfoFlyout
  } = useContext($$X1).colorContrastInfo;
  let s = contrastRowRef?.current ? calculatePickerPositionLeft(contrastRowRef.current, 176) : void 0;
  let o = useCallback(() => {
    setShowColorSwatchInfoFlyout(!1);
  }, [setShowColorSwatchInfoFlyout]);
  if (!backgroundPaint || !s || !e.color || !backgroundPaint.color) return null;
  let l = jsxs('div', {
    className: 'color_contrast_info--contrastDetailsPickerContent--spYi3',
    children: [jsxs('div', {
      className: H,
      children: [jsx('div', {
        className: W,
        children: renderI18nText('fullscreen.properties_panel.color_picker.color_contrast_info.foreground')
      }), jsxs('div', {
        className: K,
        children: [jsx(_$$J, {
          paint: e,
          className: Y
        }), jsx('div', {
          'className': q,
          'data-testid': 'color-contrast-foreground-color',
          'children': formattedColorManipulator.format(e.color)
        })]
      })]
    }), jsxs('div', {
      className: H,
      children: [jsx('div', {
        className: W,
        children: renderI18nText('fullscreen.properties_panel.color_picker.color_contrast_info.background')
      }), jsxs('div', {
        className: K,
        children: [jsx(_$$J, {
          paint: backgroundPaint,
          className: Y
        }), jsx('div', {
          'className': q,
          'data-testid': 'color-contrast-background-color',
          'children': formattedColorManipulator.format(backgroundPaint.color)
        })]
      })]
    })]
  });
  return jsx(bL, {
    defaultPosition: s,
    onClose: o,
    className: 'color_contrast_info--flyoutContrastColors--EF6oA',
    style: {
      width: 180
    },
    children: jsx(DialogContents, {
      children: l
    })
  });
}
export const O1 = $$Z0;
export const nZ = $$X1;
export const AG = $$Q2;
export const Mu = $$ee3;
export const tX = $$ei4;