import { zIx } from "../figma_app/763686";
import { getI18nString } from "../905/303541";
export function $$a2(e) {
  switch (e) {
    case zIx.BUILD:
      return getI18nString("dev_handoff.status.ready_for_dev");
    case zIx.COMPLETED:
      return getI18nString("dev_handoff.status.completed");
    case zIx.NONE:
      return null;
  }
}
export function $$s1(e, t) {
  switch (e) {
    case zIx.BUILD:
      if (t === zIx.COMPLETED) return getI18nString("dev_handoff.status.mark_status_sentence_part.incomplete");
      return getI18nString("dev_handoff.status.mark_status_sentence_part.ready_for_dev");
    case zIx.COMPLETED:
      return getI18nString("dev_handoff.status.mark_status_sentence_part.completed");
    case zIx.NONE:
      return null;
  }
}
export function $$o0(e) {
  if (e.length > 0) {
    let t = e[0].metadata;
    return {
      status: t?.status ?? null,
      nodes: e.map(e => ({
        id: e.node_id,
        name: e.node_name
      }))
    };
  }
  return {
    status: null,
    nodes: []
  };
}
export const D0 = $$o0;
export const TR = $$s1;
export const zi = $$a2;