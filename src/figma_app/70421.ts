import n from "../vendor/128080";
var i = n;
var $$a2 = (e => (e[e.NORMAL = 0] = "NORMAL", e[e.ACTIVE = 1] = "ACTIVE", e[e.DIMMED = 2] = "DIMMED", e))($$a2 || {});
export function $$s0(e, t) {
  return `${100 * Math.round(e.x / 100)},${100 * Math.round(e.y / 100)},${t}`;
}
export function $$o4(e, t) {
  if (e.isSinglePin && t.isSinglePin) {
    var r;
    var n;
    r = e.pins[0];
    n = t.pins[0];
    return r.x !== n.x || r.y !== n.y || !i()(r.avatars, n.avatars) || !i()(r.previewMessageMeta, n.previewMessageMeta) || r.isUnread !== n.isUnread || r.numUnreadReplies !== n.numUnreadReplies || r.isResolved !== n.isResolved || !i()(r.selectionBoxAnchor, n.selectionBoxAnchor) || !i()(r.otherBoundingBoxes, n.otherBoundingBoxes) || !i()(r.isPinnedToFile, n.isPinnedToFile);
  }
  return e.pins.length !== t.pins.length || e.isUnread !== t.isUnread || e.isPinnedToFile !== t.isPinnedToFile;
}
export let $$l1 = {
  length: 0,
  leafNodes: new Set([]),
  all: () => [],
  getById: () => null,
  getParentOf: () => null,
  zoomScale: -1
};
export function $$d3(e) {
  let t = new Map();
  let r = [];
  e.forEach(e => {
    if (t.has(e.user.id)) {
      let n = t.get(e.user.id);
      r[n].num_unread_comments += e.isUnread ? 1 : 0;
      r[n].num_comments += 1;
    } else {
      r.push({
        avatar_url: e.user.img_url,
        avatar_user_id: e.user.id,
        avatar_user_handle: e.user.handle,
        num_unread_comments: e.isUnread ? 1 : 0,
        num_comments: 1
      });
      t.set(e.user.id, r.length - 1);
    }
  });
  return r;
}
export const Ao = $$s0;
export const Ko = $$l1;
export const LX = $$a2;
export const c4 = $$d3;
export const xN = $$o4;