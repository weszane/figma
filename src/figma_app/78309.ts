import E from 'classnames';
import { useCallback, useEffect, useRef, useState } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import { KindEnum } from '../905/129884';
import { e as _$$e } from '../905/149844';
import { scopeAwareFunction } from '../905/189185';
import { isValidValue } from '../905/216495';
import { AutoInteractableWrapper } from '../905/277716';
import { getI18nString } from '../905/303541';
import { IconButton } from '../905/443068';
import { k as _$$k2 } from '../905/582200';
import { ButtonPrimitive } from '../905/632989';
import { defaultColorManipulator } from '../905/713722';
import { Point } from '../905/736624';
import { useDropdown } from '../905/848862';
import { areSessionLocalIDsEqual } from '../905/871411';
import { k as _$$k } from '../905/888808';
import { A as _$$A } from '../905/891805';
import { bL } from '../905/911410';
import { calculatePickerPositionLeft } from '../905/959568';
import { colorCSSManipulatorInstance } from '../905/989956';
import { cssBuilderInstance } from '../cssbuilder/589278';
import { dropdownTypeSlideColorPickerContextMenu } from '../figma_app/8833';
import { useAtomValueAndSetter } from '../figma_app/27355';
import { hidePickerThunk } from '../figma_app/91703';
import { buildUploadUrl } from '../figma_app/169182';
import { E_ } from '../figma_app/177697';
import { whiteColor } from '../figma_app/191804';
import { useEffectiveThemeId } from '../figma_app/226737';
import { DialogTitle, DialogBody, DialogContents, DialogHeader } from '../figma_app/272243';
import { adjustHue, colorsEqual } from '../figma_app/273493';
import { k1, kO, lK, nE, UZ } from '../figma_app/687767';
import { generateRecordingKey, useHandleMouseEvent } from '../figma_app/878298';
import { f$, k8, Le, Lq, Qo, Sn, wH } from '../figma_app/887835';
import { isInteractionPathCheck } from '../figma_app/897289';
import { eE, jj, rR } from '../figma_app/952764';
import { jP, Ph } from '../figma_app/998161';
import { useDispatch } from 'react-redux';
let y = E;
let H = buildUploadUrl('bdf32fe13fe9a9be5b40c3de4a18572f14c9a1eb');
let $$z1 = 240;
export function $$W0({
  paint: e,
  onChange: t,
  onClose: r,
  pickerShown: l,
  hideCustomColorPickerFillTypeToggle: d,
  inheritStyleKeyField: c
}) {
  let u = useDispatch<AppDispatch>();
  let p = 'slidesColorPicker';
  let _ = useEffectiveThemeId();
  let h = UZ(_);
  let [m, f] = useState(!1);
  let [E, y] = useState(new Point(0, 0));
  let b = jj(e);
  let T = useRef(null);
  let I = useCallback(() => {
    if (T.current) {
      let {
        x,
        y
      } = calculatePickerPositionLeft(T.current, jP);
      y(new x.Mi(x, y));
      f(!0);
      b();
    } else {
      console.error('colorsWrapperRef.current is null');
    }
  }, [T, b]);
  let [S, v] = useAtomValueAndSetter(E_);
  useEffect(() => () => {
    v(null);
  }, [v]);
  let N = useCallback(e => {
    v({
      varId: e,
      modeId: h
    });
    I();
  }, [I, h, v]);
  let O = useCallback(() => {
    v(null);
    f(!1);
  }, [v]);
  let R = !!S;
  let L = eE(e);
  let P = rR(t);
  return jsxs(_$$k2, {
    name: 'slides_color_picker',
    children: [(R || !m) && jsx(bL, {
      width: $$z1,
      defaultPosition: {
        x: l.initialX,
        y: l.initialY
      },
      onClose: () => {
        v(null);
        r();
      },
      recordingKey: p,
      children: jsxs(DialogContents, {
        children: [jsx(DialogHeader, {
          children: jsx(DialogTitle, {
            children: getI18nString('slides.properties_panel.fill')
          })
        }), jsx(DialogBody, {
          padding: 0,
          children: jsxs('div', {
            ref: T,
            children: [jsx(K, {
              paint: e,
              openCustomColorPicker: I,
              startEditingThemeColor: N,
              stopEditingThemeColor: O,
              onPaintChange: t,
              closeColorPicker: r,
              recordingKey: p
            }), jsx($, {
              paint: e,
              onPaintChange: t,
              onClickColorChit: e => {
                P(e);
                R || r();
              },
              onClickAddColor: () => {
                O();
                I();
              },
              isEditingTheme: R,
              recordingKey: p
            })]
          })
        })]
      })
    }), m && L && jsx(Ph, {
      paint: L,
      onChange: P,
      onClose: () => {
        v(null);
        f(!1);
        R || u(hidePickerThunk());
      },
      initialPosition: R ? E : new Point(l.initialX, l.initialY),
      enableGradients: !S,
      hideCustomColorPickerFillTypeToggle: d,
      inheritStyleKeyField: c
    })]
  });
}
function K({
  paint: e,
  openCustomColorPicker: t,
  startEditingThemeColor: r,
  stopEditingThemeColor: i,
  onPaintChange: a,
  closeColorPicker: s,
  recordingKey: o
}) {
  let l = useDropdown(dropdownTypeSlideColorPickerContextMenu);
  let d = useEffectiveThemeId();
  let u = UZ(d);
  let p = lK(d);
  let [f, E] = useAtomValueAndSetter(E_);
  let y = !!f;
  let T = k1(d);
  let S = scopeAwareFunction.user('slides-add-theme-color', () => {
    let r = T(function (e, t) {
      if (isValidValue(e) && e.color) return e.color;
      let r = whiteColor;
      if (t.length > 0) {
        let e = t[t.length - 1].paint.color;
        e && (r = adjustHue(e, 31));
      }
      return r;
    }(e, p));
    r && (E({
      varId: r,
      modeId: u
    }), t());
  });
  let A = (t, r) => {
    y ? r || (i(), a({
      ...e,
      ...t,
      type: 'SOLID'
    })) : (a({
      ...e,
      ...t,
      type: 'SOLID'
    }), s());
  };
  let x = e => {
    y ? i() : r(e);
  };
  let N = (t, n) => {
    t.stopPropagation();
    t.preventDefault();
    let {
      clientX,
      clientY
    } = t;
    l.show({
      data: {
        clientX,
        clientY,
        targetItem: {
          type: 'THEME_COLOR',
          variableId: n,
          onEdit: () => r(n)
        },
        paint: e,
        onPaintChange: a
      }
    });
  };
  return jsx(X, {
    title: getI18nString('slides.properties_panel.color_picker.theme_colors'),
    rightControl: jsx(Y, {
      onClick: S,
      recordingKey: generateRecordingKey(o, 'addThemeColor')
    }),
    removeBottomPadding: p.length === 0,
    showBottomBorder: !0,
    children: jsx(AutoInteractableWrapper, {
      name: 'slides_theme_colors',
      children: p.map(({
        paint: t,
        variableId: r,
        variableName: i
      }) => {
        let a = t.colorVar?.value?.alias?.guid;
        let s = y ? !!f && r === f.varId : areSessionLocalIDsEqual(a, e?.colorVar?.value?.alias?.guid);
        let l = jsx(_$$A, {});
        return t.color && a ? jsx($$q2, {
          backgroundString: colorCSSManipulatorInstance.format({
            ...t.color,
            a: 1
          }),
          editIcon: l,
          isEditing: y && s,
          isSelected: s,
          onClick: () => A(t, s),
          onClickEdit: () => x(r),
          onContextMenu: e => N(e, r),
          opacity: t.color.a,
          recordingKey: generateRecordingKey(o, 'themeColors', r.replace('VariableID:', '')),
          showEditIcon: s,
          tooltipText: i
        }, r) : null;
      })
    })
  });
}
function Y({
  onClick: e,
  recordingKey: t
}) {
  let r = useEffectiveThemeId();
  let i = kO(r);
  return jsx(IconButton, {
    'aria-label': getI18nString('slides.properties_panel.color_picker.add_template_color_tooltip'),
    'onClick': e,
    'recordingKey': t,
    'htmlAttributes': {
      'data-tooltip-type': KindEnum.TEXT,
      'data-tooltip': getI18nString('slides.properties_panel.color_picker.add_template_color_tooltip')
    },
    'disabled': i,
    'children': jsx(_$$e, {})
  });
}
function $({
  paint: e,
  onPaintChange: t,
  onClickColorChit: r,
  onClickAddColor: a,
  isEditingTheme: s,
  recordingKey: o
}) {
  let l = useDropdown(dropdownTypeSlideColorPickerContextMenu);
  let [c, u] = useState(!1);
  let h = useEffectiveThemeId();
  let [m, g] = useState(nE(h));
  let f = c ? m : m.slice(0, 17);
  let E = !c && m.length > 17;
  let y = useCallback((r, n) => {
    if (r.color) {
      n.stopPropagation();
      n.preventDefault();
      let {
        clientX,
        clientY
      } = n;
      l.show({
        data: {
          clientX,
          clientY,
          targetItem: {
            type: 'DOCUMENT_COLOR',
            documentColor: r.color
          },
          paint: e,
          onPaintChange: (e, n) => {
            t(e, n);
            g(m.filter(e => e !== r));
          }
        }
      });
    }
  }, [l, e, t, m]);
  return jsxs(X, {
    title: getI18nString('slides.properties_panel.color_picker.document_colors'),
    removeBottomPadding: E,
    children: [jsx(AutoInteractableWrapper, {
      name: 'slides_add_custom_color',
      children: jsx('div', {
        className: cssBuilderInstance.flex.justifyCenter.itemsCenter.w32.h32.$,
        children: jsx(ButtonPrimitive, {
          'htmlAttributes': {
            'data-tooltip-type': KindEnum.TEXT,
            'data-tooltip': getI18nString('slides.properties_panel.color_picker.add_color_aria_label')
          },
          'className': cssBuilderInstance.w24.h24.$,
          'aria-label': getI18nString('slides.properties_panel.color_picker.add_color_aria_label'),
          'onClick': a,
          'recordingKey': generateRecordingKey(o, 'addColor'),
          'children': jsx('img', {
            src: H,
            alt: '',
            className: cssBuilderInstance.w24.h24.$
          })
        })
      })
    }), jsxs(AutoInteractableWrapper, {
      name: 'slides_document_colors',
      children: [f.map((t, i) => jsx($$q2, {
        backgroundString: colorCSSManipulatorInstance.format(t.color),
        tooltipText: defaultColorManipulator.format(t.color),
        tooltipSubtext: t.opacity && t.opacity !== 1 ? `${(100 * t.opacity).toFixed(0)}%` : void 0,
        opacity: t.opacity,
        onClick: () => r(t),
        onContextMenu: e => y(t, e),
        isSelected: !s && colorsEqual(t.color, e?.color) && t.opacity === e?.opacity,
        recordingKey: generateRecordingKey(o, 'documentColor', colorCSSManipulatorInstance.format(t.color))
      }, i)), E && jsx(ButtonPrimitive, {
        className: cssBuilderInstance.wFull.h32.flex.itemsCenter.justifyCenter.$,
        onClick: () => u(!0),
        recordingKey: generateRecordingKey(o, 'documentColors', 'more'),
        children: jsx(_$$k, {})
      })]
    })]
  });
}
function X({
  title: e,
  rightControl: t,
  removeBottomPadding: r,
  showBottomBorder: i,
  children: a
}) {
  return jsxs('div', {
    className: cssBuilderInstance.pl12.pr8.if(i, cssBuilderInstance.bb1.bSolid.colorBorder).if(!r, cssBuilderInstance.pb12).$,
    children: [jsxs('div', {
      className: cssBuilderInstance.h40.pl4.flex.justifyBetween.itemsCenter.$,
      children: [jsx('div', {
        className: cssBuilderInstance.textBodyMedium.colorTextSecondary.$,
        children: e
      }), t]
    }), jsx('div', {
      className: cssBuilderInstance.flex.flexWrap.gap4.$,
      children: a
    })]
  });
}
export function $$q2({
  backgroundString: e,
  opacity: t,
  tooltipText: r,
  tooltipSubtext: i,
  onClick: a,
  onContextMenu: s,
  isSelected: o,
  editIcon: l,
  showEditIcon: c,
  isEditing: u,
  onClickEdit: p,
  recordingKey: _
}) {
  let h = useHandleMouseEvent(_, 'contextmenu', e => {
    s && s(e);
  });
  return jsxs('div', {
    'className': y()(k8, {
      [wH]: o
    }),
    'data-tooltip-type': KindEnum.TEXT,
    'data-tooltip-show-above': !0,
    'data-tooltip': r,
    'data-tooltip-subtext': i,
    'data-tooltip-text-inline': !0,
    'data-testid': _,
    'children': [l && c && p && jsx(ButtonPrimitive, {
      className: y()(Lq, {
        [Sn]: u,
        [Qo]: isInteractionPathCheck()
      }),
      onClick: e => {
        if (isInteractionPathCheck()) {
          p();
        } else {
          let t = e.currentTarget.getBoundingClientRect();
          let r = t.width / 2;
          let n = t.left + r;
          let i = t.top + r(e.clientX - n) ** 2 + (e.clientY - i) ** 2 <= r * r && p();
        }
      },
      recordingKey: generateRecordingKey(_, 'edit'),
      children: l
    }), jsxs(ButtonPrimitive, {
      'htmlAttributes': {
        onContextMenu: h
      },
      'onClick': a,
      'className': cssBuilderInstance.w24.h24.relative.$,
      'recordingKey': _,
      'aria-label': e,
      'children': [jsx('div', {
        className: Le,
        style: {
          background: e
        }
      }), jsx('div', {
        className: f$,
        style: {
          opacity: void 0 !== t ? 1 - t : 0
        }
      })]
    })]
  });
}
export const GY = $$W0;
export const pg = $$z1;
export const qm = $$q2;