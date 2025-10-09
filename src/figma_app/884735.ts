import h from 'classnames';
import { useCallback, useContext, useMemo, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { A as _$$A } from '../905/24328';
import { R as _$$R } from '../905/57445';
import { selectWithShallowEqual } from '../905/103090';
import { KindEnum } from '../905/129884';
import { permissionScopeHandler } from '../905/189185';
import { labConfigurations, useLabConfiguration } from '../905/226610';
import { fd, K8, LC, Me, Q_, RH, t$, UD, uZ, V_, YM } from '../905/246565';
import { getI18nString, renderI18nText } from '../905/303541';
import { i as _$$i } from '../905/415810';
import { FormattedInputContext } from '../905/427409';
import { sD, Xn } from '../905/429125';
import { IconButton } from '../905/443068';
import { a as _$$a } from '../905/632329';
import { U as _$$U } from '../905/708285';
import { n as _$$n } from '../905/734251';
import { EventShield } from '../905/821217';
import { showDropdownThunk } from '../905/929976';
import { uj0 } from '../figma_app/27776';
import { DisplayMode } from '../figma_app/164212';
import { c$, ms } from '../figma_app/236327';
import { en as _$$en } from '../figma_app/323320';
import { SlotSymbolType } from '../figma_app/338442';
import { setSelectedTypedPropDefId } from '../figma_app/389091';
import { selectContainingInstance, selectContainingStateOrSymbolId, selectInstanceSublayerCheck } from '../figma_app/505098';
import { addToSelection, clearSelection } from '../figma_app/741237';
import { ComponentPropType, Fullscreen } from '../figma_app/763686';
import { parsePxInt } from '../figma_app/783094';
import { DE, pG } from '../figma_app/811257';
import { FX } from '../figma_app/831569';
import { useHandleMouseEvent } from '../figma_app/878298';
import { selectSceneGraphSelectionKeys } from '../figma_app/889655';
let m = h;
let U = ms;
let B = c$;
let G = 'component-prop-pill-dropdown';
let V = e => {
  e.preventDefault();
  e.stopPropagation();
};
export function $$H0(e) {
  let t;
  let {
    nodeField,
    instanceGUIDs,
    label
  } = e;
  let c = useMemo(_$$en, []);
  let _ = useContext(FormattedInputContext);
  let {
    containingProductComponentGUID,
    containingInstanceGUID,
    def,
    selectionHasInstanceSublayer,
    dropdownShown
  } = selectWithShallowEqual(e => {
    let t = selectSceneGraphSelectionKeys(e);
    return {
      containingProductComponentGUID: selectContainingStateOrSymbolId(e),
      containingInstanceGUID: selectContainingInstance(e),
      def: c(e, instanceGUIDs ?? t, nodeField),
      selectionHasInstanceSublayer: selectInstanceSublayerCheck(e),
      dropdownShown: e.dropdownShown
    };
  });
  let V = useDispatch<AppDispatch>();
  let H = useCallback(e => {
    containingProductComponentGUID && def && V(showDropdownThunk({
      type: G,
      data: {
        position: {
          top: e.clientY,
          left: Math.min(e.clientX, window.innerWidth - parsePxInt(uj0) / 2)
        }
      }
    }));
  }, [containingProductComponentGUID, def, V]);
  let $ = useRef(null);
  let X = sD.concat('-', nodeField);
  let q = useRef(null);
  let J = useHandleMouseEvent(`propPill.${nodeField}`, 'click', () => {
    !selectionHasInstanceSublayer && def && q.current && (q.current && (nodeField === SlotSymbolType.TEXT || nodeField === SlotSymbolType.VISIBLE) ? _?.showBindingUI(q.current) : V(showDropdownThunk({
      type: X,
      data: {
        nodeField,
        targetRect: q.current.getBoundingClientRect()
      }
    })));
  });
  let Z = useCallback(() => {
    let e = def?.explicitDefID;
    containingProductComponentGUID && e && (clearSelection(), addToSelection([containingProductComponentGUID]), V(setSelectedTypedPropDefId({
      propDefId: e
    })));
  }, [containingProductComponentGUID, def, V]);
  let Q = dropdownShown?.type === G;
  let ee = useLabConfiguration(labConfigurations.variablePillA11y) && !0;
  let et = useRef(null);
  let er = _$$R(et);
  if (!def) return null;
  def.type === ComponentPropType.BOOL ? t = 'BOOLEAN' : def.type === ComponentPropType.TEXT ? t = 'STRING' : def.type === ComponentPropType.NUMBER && (t = 'FLOAT');
  let en = jsxs(_$$a, {
    className: m()({
      [Q_]: selectionHasInstanceSublayer,
      [LC]: !selectionHasInstanceSublayer,
      [RH]: dropdownShown?.type === X,
      [YM]: def.type === ComponentPropType.INSTANCE_SWAP
    }),
    onClick: J,
    pillRef: q,
    children: [jsx('div', {
      ref: $,
      children: t ? jsx('div', {
        className: K8,
        children: jsx(_$$i, {
          type: t
        })
      }) : jsx('div', {})
    }), jsx('p', {
      className: Me,
      children: def.name
    })]
  });
  let ei = jsx(EventShield, {
    eventListeners: ['onMouseDown'],
    children: jsx('div', {
      'className': V_,
      'data-tooltip-type': KindEnum.TEXT,
      'data-tooltip-offset-x': (() => {
        if ($.current && q.current) return $.current.offsetLeft + $.current.offsetWidth / 2 - (q.current.offsetLeft + q.current.offsetWidth / 2);
      })(),
      'data-tooltip': er ? def.name : null,
      'data-tooltip-tip-align-left': !0,
      'data-tooltip-text-left': !0,
      'ref': et,
      'children': en
    })
  });
  let ea = jsx($$z1, {
    containingInstanceGUID,
    containingProductComponentGUID: ee ? containingProductComponentGUID : void 0,
    propDefId: def.explicitDefID
  });
  let es = jsx(W, {
    nodeField
  });
  let eo = jsx(Y, {
    goToPropertyButton: ea,
    detachPropertyButton: es,
    selectionHasInstanceSublayer,
    containingProductComponentGUID
  });
  let el = jsx(K, {
    input: ei,
    ui2RefButton: eo,
    goToPropertyButton: ea,
    detachPropertyButton: es,
    selectionHasInstanceSublayer,
    def,
    onContextMenu: H,
    nodeField,
    label
  });
  return jsxs(Fragment, {
    children: [el, Q && !ee && jsx(U, {
      style: dropdownShown?.data.position,
      positionFixed: !0,
      children: jsx(B, {
        onClick: Z,
        recordingKey: 'go-to-property',
        children: renderI18nText('design_systems.component_properties.go_to_property')
      })
    }), jsx(Xn, {
      source: DisplayMode.PILL,
      nodeField,
      iconWidth: $?.current ? $.current.getBoundingClientRect().width / 2 + 10 : void 0
    })]
  });
}
export function $$z1(e) {
  let {
    containingInstanceGUID,
    containingProductComponentGUID,
    propDefId
  } = e;
  let o = useDispatch<AppDispatch>();
  let c = containingInstanceGUID || containingProductComponentGUID;
  let u = useCallback(() => {
    c && propDefId && (clearSelection(), addToSelection([c]), o(setSelectedTypedPropDefId({
      propDefId
    })));
  }, [c, propDefId, o]);
  return jsx(IconButton, {
    'onClick': u,
    'aria-label': getI18nString('design_systems.component_properties.go_to_property'),
    'recordingKey': 'selectContainingInstance',
    'htmlAttributes': {
      'data-tooltip': getI18nString('design_systems.component_properties.go_to_property'),
      'data-tooltip-type': KindEnum.TEXT
    },
    'children': jsx(_$$A, {})
  });
}
function W(e) {
  let {
    nodeField
  } = e;
  let r = useCallback(() => {
    permissionScopeHandler.user('delete-prop-ref', () => Fullscreen.deleteComponentPropRef(nodeField));
  }, [nodeField]);
  return jsx(IconButton, {
    'onClick': r,
    'aria-label': getI18nString('design_systems.component_properties.detach_property'),
    'recordingKey': 'deleteComponentPropRef',
    'htmlAttributes': {
      'data-tooltip': getI18nString('design_systems.component_properties.detach_property'),
      'data-tooltip-type': KindEnum.TEXT,
      'data-onboarding-key': FX
    },
    'children': jsx(_$$U, {})
  });
}
function K(e) {
  let {
    input,
    ui2RefButton,
    goToPropertyButton,
    detachPropertyButton,
    selectionHasInstanceSublayer,
    def,
    onContextMenu,
    nodeField,
    label
  } = e;
  let h = useLabConfiguration(labConfigurations.variablePillA11y);
  let {
    ui3FirstButton,
    ui3SecondButton
  } = useCallback(() => h ? {
    ui3FirstButton: goToPropertyButton,
    ui3SecondButton: detachPropertyButton
  } : {
    ui3FirstButton: selectionHasInstanceSublayer ? jsx('span', {
      onContextMenu: V,
      children: goToPropertyButton
    }) : jsx('span', {
      onContextMenu: V,
      children: detachPropertyButton
    })
  }, [goToPropertyButton, detachPropertyButton, h, selectionHasInstanceSublayer])();
  return jsx(_$$n.div, {
    onContextMenu,
    children: ui3SecondButton ? jsx(pG, {
      dataTestId: 'component-prop-pill',
      appendedClassName: m()(t$, {
        [uZ]: def.type === ComponentPropType.INSTANCE_SWAP,
        [fd]: nodeField === SlotSymbolType.TEXT
      }),
      label,
      input,
      leftIcon: ui3FirstButton,
      rightIcon: ui3SecondButton
    }) : jsx(DE, {
      dataTestId: 'component-prop-pill',
      appendedClassName: m()(t$, {
        [uZ]: def.type === ComponentPropType.INSTANCE_SWAP,
        [fd]: nodeField === SlotSymbolType.TEXT
      }),
      input,
      icon: ui2RefButton,
      label
    })
  });
}
function Y(e) {
  let {
    goToPropertyButton,
    detachPropertyButton,
    selectionHasInstanceSublayer
  } = e;
  return jsx('span', {
    onContextMenu: V,
    children: selectionHasInstanceSublayer ? goToPropertyButton : jsx('div', {
      className: UD,
      children: detachPropertyButton
    })
  });
}
export const L = $$H0;
export const f = $$z1;
