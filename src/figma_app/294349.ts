import { useMemo } from 'react';

import { Ye } from '../figma_app/32128';
import { lK } from '../figma_app/740163';


export let $$l1 = {
  showNotificationSettings: !0,
  disableCommentsWhenHandToolEnabled: !0,
  repositionViewportOnCommentSelection: !0,
  orphanedBy: 'deleted_pages'
};
export function $$d0({
  leftSidePanelWidth: e
} = {}) {
  let t = Ye();
  let r = lK();
  return useMemo(() => {
    let n = 32 + 16;
    let a = r ? 20 : 0;
    return t ?
    {
      xDelta: a,
      yDelta: a + n + 8
    } :
    {
      xDelta: a + (e || 0) + 8,
      yDelta: a
    };
  }, [r, t, e]);
}
export const R = $$d0;
export const y = $$l1;
