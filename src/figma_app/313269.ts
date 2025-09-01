import _require2 from "../quill_composer/838916";
import _require from "../quill_composer/838916";
import { kf } from "../905/992467";
let $$i1 = kf("lazy_quill_editor", {
  isCodesplit: !0,
  ComponentFactory: async () => ({
    default: (await Promise.all([]).then(_require)).QuillEditor
  })
});
let $$a0 = kf("lazy_readonly_quill_editor", {
  isCodesplit: !0,
  ComponentFactory: async () => ({
    default: (await Promise.all([]).then(_require2)).ReadOnlyQuillEditor
  })
});
export const R = $$a0;
export const X = $$i1;