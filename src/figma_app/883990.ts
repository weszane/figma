import d from 'classnames';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import { KindEnum } from '../905/129884';
import { Y } from '../905/193977';
import { LayoutContainer } from '../905/222272';
import { o as _$$o } from '../905/223420';
import { labConfigurations, useLabConfiguration } from '../905/226610';
import { A as _$$A } from '../905/251970';
import { y as _$$y } from '../905/263077';
import { getI18nString } from '../905/303541';
import { IconButton } from '../905/443068';
import { formatI18nMessage } from '../905/482208';
import { C as _$$C } from '../905/504203';
import { $P, qc, Rt } from '../905/590676';
import { z } from '../905/654860';
import { SvgComponent } from '../905/714743';
import { useNavigationStack } from '../905/794154';
import { A as _$$A3 } from '../1617/377036';
import { cssBuilderInstance } from '../cssbuilder/589278';
import { Dm } from '../figma_app/8833';
import { C as _$$C2 } from '../figma_app/523506';
import { generateRecordingKey, useHandleChangeEvent } from '../figma_app/878298';
let c = d;
let C = 'search';
function w({
  onClear: e,
  focus: t
}) {
  return jsx(IconButton, {
    'aria-label': getI18nString('search.search_bar.clear'),
    'onClick': r => {
      r.stopPropagation();
      e();
      t();
    },
    'htmlAttributes': {
      'data-tooltip': getI18nString('search.search_bar.clear'),
      'data-tooltip-type': KindEnum.TEXT
    },
    'children': jsx(_$$C, {
      style: {
        '--color-icon': 'var(--color-icon-secondary)'
      }
    })
  });
}
export function $$O1() {
  let e = document.activeElement;
  let t = !1;
  e instanceof HTMLInputElement && e.getAttribute('data-component') === 'QuickActionsV2SearchInput' && (t = e.selectionStart === e.value.length);
  return t;
}
let R = forwardRef(({
  searchQuery: e,
  onSearchChange: t,
  placeholder: r,
  onPaste: i,
  descriptorId: a
}, s) => jsx('input', {
  'ref': s,
  'aria-autocomplete': 'list',
  'aria-describedby': a,
  'className': c()(Rt, Dm),
  'data-component': 'QuickActionsV2SearchInput',
  'data-testid': 'quick-actions-search-input',
  'dir': 'auto',
  'maxLength': 150,
  'onChange': t,
  'onPaste': i,
  'placeholder': r ?? formatI18nMessage('quick-actions-with-wand-modal-placeholder'),
  'spellCheck': !1,
  'type': 'search',
  'value': e
}));
function L({
  onSearchChange: e
}) {
  let t = useRef(null);
  return {
    searchInputRef: t,
    isRoot: useNavigationStack().isRoot,
    focus: Y(t).focus,
    onSearchChangeInner: useHandleChangeEvent(C, 'change', t => {
      e(t.currentTarget.value);
    })
  };
}
let $$P2 = forwardRef(({
  searchQuery: e,
  onSearchChange: t,
  onClear: r,
  endEnhancer: a,
  placeholder: s,
  forceRoot: o,
  searchTag: d,
  onPaste: c,
  showIcon: u = !0,
  descriptorId: h
}, m) => {
  let {
    searchInputRef,
    isRoot,
    focus,
    onSearchChangeInner
  } = L({
    onSearchChange: t
  });
  useImperativeHandle(m, () => ({
    focus
  }), [focus]);
  _$$C2(searchInputRef);
  z(o);
  _$$y(e, searchInputRef);
  let O = useLabConfiguration(labConfigurations.quickActionsA11y);
  let P = isRoot || o ? jsx(SvgComponent, {
    ariaHidden: O,
    svg: _$$A3,
    className: qc
  }) : jsx('div', {
    className: cssBuilderInstance.pl4.pr4.$,
    children: jsx(_$$o, {
      recordingKey: generateRecordingKey(C, 'back-button')
    })
  });
  return jsxs('div', {
    className: $P,
    children: [u ? P : jsx('div', {
      className: cssBuilderInstance.pl4.pr4.$
    }), d, jsx(R, {
      onSearchChange: onSearchChangeInner,
      placeholder: s,
      searchQuery: e,
      onPaste: c,
      ref: searchInputRef,
      descriptorId: h
    }), r && e ? jsx('div', {
      className: cssBuilderInstance.flex.mr6.$,
      children: jsx(w, {
        onClear: r,
        focus
      })
    }) : a ? jsx('div', {
      className: cssBuilderInstance.mr6.$,
      children: jsx(LayoutContainer, {
        children: a
      })
    }) : null]
  });
});
let $$D0 = forwardRef(({
  searchQuery: e,
  onSearchChange: t,
  onClear: r,
  endEnhancer: s,
  placeholder: l,
  forceRoot: d,
  searchTag: c,
  onPaste: u,
  showIcon: m = !0,
  descriptorId: g
}, f) => {
  let {
    searchInputRef,
    focus,
    onSearchChangeInner
  } = L({
    onSearchChange: t
  });
  useImperativeHandle(f, () => ({
    focus
  }), [focus]);
  _$$C2(searchInputRef);
  z(d);
  _$$y(e, searchInputRef);
  let C = jsx(SvgComponent, {
    svg: _$$A3,
    className: qc
  });
  let {
    close
  } = useNavigationStack();
  return jsxs('div', {
    className: 'x78zum5 x6s0dn4 xkh2ocl xg2d0mh xf7z5ut',
    children: [jsxs('div', {
      className: 'x1iyjqo2 x78zum5 x6s0dn4 x1sxf85j x1v8gsql',
      children: [m ? C : jsx('div', {
        className: cssBuilderInstance.pl4.pr4.$
      }), c, jsx(R, {
        onSearchChange: onSearchChangeInner,
        placeholder: l,
        searchQuery: e,
        onPaste: u,
        descriptorId: g,
        ref: searchInputRef
      }), r && e ? jsx('div', {
        className: cssBuilderInstance.flex.mr6.$,
        children: jsx(w, {
          onClear: r,
          focus
        })
      }) : s ? jsx('div', {
        className: cssBuilderInstance.mr6.$,
        children: jsx(LayoutContainer, {
          children: s
        })
      }) : null]
    }), jsx(IconButton, {
      'onClick': close,
      'aria-label': getI18nString('common.close'),
      'children': jsx(_$$A, {
        style: {
          '--color-icon': 'var(--color-icon-secondary)'
        }
      })
    })]
  });
});
export const DM = $$D0;
export const Jj = $$O1;
export const vj = $$P2;