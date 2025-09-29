import { props } from '@stylexjs/stylex';
import { memo, useMemo } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import { AutoInteractableWrapper } from '../905/277716';
import { isNotNullish } from '../figma_app/95419';
import { F } from '../figma_app/127204';
import { b_, fJ, If, XS, yG } from '../figma_app/319440';
import { R } from '../figma_app/360122';
import { U } from '../figma_app/427950';
import { throwTypeError } from '../figma_app/465776';
import { generateRecordingKey } from '../figma_app/878298';
import { QE } from '../figma_app/914216';
import { S } from '../figma_app/924300';
import { camelToSnake } from '../figma_app/930338';
import { ZU } from '../figma_app/986347';
function m({
  action: e
}) {
  switch (e.type) {
    case ZU.FLYOUT:
      return jsx(AutoInteractableWrapper, {
        name: 'selection_actions_button',
        alsoTrack: () => ({
          layerButtonAction: `open_flyout_${camelToSnake(e.dropdownKey)}`
        }),
        children: jsx(F, {
          flyoutConfig: e,
          recordingKey: generateRecordingKey(If, e.flyoutRecordingKey)
        })
      }, e.dropdownKey);
    case ZU.ACTION:
      return jsx(AutoInteractableWrapper, {
        name: 'selection_actions_button',
        alsoTrack: () => ({
          layerButtonAction: `${camelToSnake(e.action)}`
        }),
        children: jsx(QE, {
          item: e,
          numUnreadComments: 0,
          recordingKey: If
        })
      }, e?.reactKey ?? e?.recordingKey);
    case ZU.CUSTOM_ACTION:
      return jsx(XS, {
        item: e
      }, e.recordingKey);
    case ZU.ACTION_SUBMENU:
      return jsx(AutoInteractableWrapper, {
        name: 'selection_actions_button',
        alsoTrack: () => ({
          layerButtonAction: `open_submenu_${camelToSnake(e.getTitle())}`
        }),
        children: jsx(QE, {
          item: e,
          numUnreadComments: 0,
          recordingKey: generateRecordingKey(If, e.recordingKey)
        })
      }, e.recordingKey);
    default:
      throwTypeError(e);
  }
}
export let $$b0 = memo(e => {
  let t = useMemo(() => e.actions.map(e => e.filter(e => isNotNullish(e))), [e.actions]);
  let l = U(t);
  let x = function (e) {
    let t = fJ();
    return useMemo(() => {
      let l = !1;
      let o = e.flat().filter(e => ('preventHoisting' in e && e.preventHoisting && (l = !0), !('preventHoisting' in e) || !e.preventHoisting));
      return b_(t, o, l);
    }, [e, t]);
  }(l);
  let h = yG(l, x);
  let p = h.reduce((e, t) => e + t.length, 0) > 0;
  return jsxs('div', {
    ...props(R.selectionActionsButtons),
    children: [x.map(e => {
      let t = e.type === ZU.FLYOUT ? e.flyoutRecordingKey : 'reactKey' in e ? e.reactKey : e.recordingKey;
      return jsx(m, {
        action: e
      }, t);
    }), p && jsx(AutoInteractableWrapper, {
      name: 'selection_actions_overflow_menu',
      children: jsx(S, {
        enabledToolbarItems: h,
        recordingKey: 'selectionActionsButtons'
      })
    })]
  });
});
$$b0.displayName = 'SelectionActionsButtons';
export const P = $$b0;
