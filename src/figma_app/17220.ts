import { useIsFullscreenSitesView } from '../905/561485';
import { I9 } from '../figma_app/151869';
import { GW } from '../figma_app/701001';
import { SelectionPanelType } from '../figma_app/763686';
export function $$o2(e) {
  return e === 'MIXED' || e === 'MIXED_FRAME_SECTION_GROUP';
}
export function $$l1() {
  let e = useIsFullscreenSitesView();
  let t = GW();
  let r = I9();
  let o = r?.[0];
  if (!r || r.length === 0 || !o) {
    return {
      type: null,
      count: 0,
      node: null
    };
  }
  if (r.length === 1) {
    return {
      type: o.type,
      count: 1,
      node: o
    };
  }
  if (r.length === 2) {
    let e = r.find(e => e.type === 'TEXT');
    let t = r.find(e => e.type === 'SHAPE_WITH_TEXT');
    if (e && t) {
      return {
        type: 'TEXT',
        count: 1,
        node: e
      };
    }
    let n = r.find(e => e.type === 'STICKY');
    if (e && n) {
      return {
        type: 'STICKY',
        count: 1,
        node: n
      };
    }
    let i = r.find(e => e.type === 'CODE_BLOCK');
    if (e && i) {
      return {
        type: 'CODE_BLOCK',
        count: 1,
        node: i
      };
    }
  }
  let l = !1;
  let d = null;
  let c = o.type;
  if (e && t === SelectionPanelType.RESPONSIVE_SET) {
    for (let e of (l = !0, r)) {
      if (e.type !== c || !e.isOrInResponsiveSet) {
        l = !1;
        break;
      }
      e.isPrimaryBreakpointFrame && (d = e);
    }
  }
  return l ? {
    type: c,
    count: r.length,
    node: d || o
  } : r.every(e => ['FRAME', 'SECTION', 'GROUP'].includes(e.type)) ? {
    type: 'MIXED_FRAME_SECTION_GROUP',
    count: r.length,
    node: null
  } : {
    type: 'MIXED',
    count: r.length,
    node: null
  };
}
export function $$d0({
  shouldShowInstancePanel: e,
  shouldShowCodeInstancePanel: t,
  shouldShowComponentPropertiesPanel: r,
  shouldShowSlotPanel: n
}) {
  let {
    type,
    count
  } = $$l1();
  return n ? 'SLOT' : type ? e ? 'INSTANCE' : t ? 'CODE_INSTANCE' : r && count === 1 ? 'SYMBOL' : type : null;
}
export const RW = $$d0;
export const ay = $$l1;
export const r = $$o2;