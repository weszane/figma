import { MAX_TAGS_LENGTH, validateTagString } from "../figma_app/740025";
export let $$r0 = {
  displayName: "TagsV1Field",
  fetchInitialValue: ({
    existingResourceContent: e
  }) => e ? e.tags ?? [] : [],
  validate: ({}, e) => {
    if (0 === e.length) return;
    let t = [];
    let i = MAX_TAGS_LENGTH;
    e.length > i && t.push({
      key: "TOO_MANY_TAGS",
      data: {
        maxTags: i
      }
    });
    let r = e.reduce((t, i, n) => (e.indexOf(i) !== n && t.push(n), t), []);
    r.length > 0 && t.push({
      key: "DUPLICATE_TAGS",
      data: {
        allTags: e,
        duplicateTagIndices: r
      }
    });
    let a = e.reduce((e, t, i) => {
      let r = validateTagString(t);
      r && e.push([i, r]);
      return e;
    }, []);
    a.length > 0 && t.push({
      key: "INVALID_TAGS",
      data: {
        allTags: e,
        invalidTagIndicesAndReasons: a
      }
    });
    return t;
  },
  canSet: () => !0,
  isEqual: (e, t) => e.length === t.length && e.every((e, i) => t[i] === e)
};
export const f = $$r0;