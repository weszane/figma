import n from "../vendor/116389";
import a from "../vendor/260986";
import { A } from "../905/17894";
import { getResourceTags, MAX_FEED_ITEMS } from "../figma_app/740025";
import { Tn } from "../905/104173";
var r = n;
var $$s = a;
export function $$c1(e, t) {
  return e === t || e?.text === t?.text;
}
export let $$u0 = {
  displayName: "TagsV2Field",
  fetchInitialValue: async ({
    existingResourceContent: e,
    categoryField: t
  }) => {
    if (t.currentValue === A || t.deps.viewerModeField?.currentValue === A) return A;
    let i = e?.tags_v2 ? Object.keys(e.tags_v2) : [];
    if (i.length > 0 && t.currentValue?.id) {
      let n = await Tn({
        figFile: t.deps.figFile,
        currentViewerMode: t.deps.viewerModeField && t.deps.viewerModeField.currentValue,
        existingResourceContent: e,
        localExtension: t.deps.localExtension
      });
      let a = getResourceTags(n, t.currentValue.id);
      return r()(i.map(e => a.find(t => t.text === e)));
    }
    return [];
  },
  validate: async ({
    categoryField: e
  }, t) => {
    if (0 === t.length) return;
    let i = [];
    if (t.length > MAX_FEED_ITEMS && i.push({
      key: "TOO_MANY_TAGS",
      data: {
        maxTags: MAX_FEED_ITEMS
      }
    }), $$s()(t, "text").length !== t.length && i.push({
      key: "DUPLICATE_TAGS",
      data: {
        duplicateTags: t.filter((e, i) => t.findIndex(t => $$c1(e, t)) !== i)
      }
    }), e.deps.viewerModeField?.currentValue === A) return;
    let n = await Tn({
      figFile: e.deps.figFile,
      currentViewerMode: e.deps.viewerModeField && e.deps.viewerModeField.currentValue,
      existingResourceContent: e.deps.existingResourceContent,
      localExtension: e.deps.localExtension
    });
    if (void 0 !== e.currentValue && e.currentValue !== A) {
      let r = getResourceTags(n, e.currentValue.id);
      let a = t.filter(e => !r.some(t => $$c1(e, t)));
      a.length > 0 && i.push({
        key: "INVALID_TAGS",
        data: {
          invalidTags: a
        }
      });
    }
    return i;
  },
  canSet: ({
    categoryField: e
  }) => e.currentValue !== A && void 0 !== e.currentValue,
  isEqual: (e, t) => e.length === t.length && e.every(e => t.some(t => $$c1(e, t)))
};
export const m = $$u0;
export const s = $$c1;