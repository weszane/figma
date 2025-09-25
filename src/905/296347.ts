import { useCallback, useMemo, useEffect } from "react";
import r from "../vendor/336892";
import { setupResourceAtomHandler } from "../figma_app/566371";
import { p as _$$p } from "../905/896627";
import { unsetSymbol } from "../905/17894";
import { canSetFieldValue, getFieldValueOrDefault } from "../905/497882";
import { LK } from "../905/104173";
import { s as _$$s } from "../905/924751";
import { validateTagString, getResourceTags, normalizeSearchString } from "../figma_app/740025";
var a = r;
export function $$m0({
  tagsV1Field: e,
  tagsV2Field: t
}) {
  _$$p(t, useCallback(({
    error: t,
    currentValue: i,
    setValue: n
  }) => {
    if (!n) return !1;
    switch (t.key) {
      case "DUPLICATE_TAGS":
        {
          let {
            duplicateTags
          } = t.data;
          n(a()(i, ...duplicateTags));
          return !0;
        }
      case "INVALID_TAGS":
        {
          let {
            invalidTags
          } = t.data;
          if (canSetFieldValue(e)) {
            n(a()(i, ...invalidTags));
            e.setValue([...e.currentValue, ...invalidTags.map(e => e.text.toLowerCase()).filter(e => !validateTagString(e)).filter(t => !e.currentValue.includes(t))]);
            return !0;
          }
        }
    }
    return !1;
  }, [e]));
  let {
    categoryField
  } = t.deps;
  let {
    figFile,
    viewerModeField,
    existingResourceContent,
    localExtension
  } = categoryField.deps;
  let [f] = setupResourceAtomHandler(LK({
    figFile,
    currentViewerMode: viewerModeField && getFieldValueOrDefault(viewerModeField, void 0),
    existingResourceContent,
    localExtension
  }), {
    enabled: viewerModeField?.currentValue !== unsetSymbol
  });
  let _ = useMemo(() => {
    if ("loaded" !== f.status) return [];
    let e = getFieldValueOrDefault(categoryField, void 0);
    return e ? getResourceTags(f.data, e.id) : [];
  }, [categoryField, f.data, f.status]);
  useEffect(() => {
    if ("loaded" === f.status && canSetFieldValue(e) && canSetFieldValue(t)) {
      let i = [];
      let n = e.currentValue.filter(e => {
        let n = _.find(t => normalizeSearchString(e) === t.text.toLowerCase());
        return !n || (t.currentValue.some(e => _$$s(e, n)) || i.push(n), !1);
      });
      e.setValue(n);
      t.setValue([...t.currentValue, ...i]);
    }
  }, [e, t, f.status, _]);
  return {
    tagsV1Field: e,
    tagsV2Field: t,
    validV2Tags: _
  };
}
export const J = $$m0;