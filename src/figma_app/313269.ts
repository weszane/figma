import _require2 from "../quill_composer/838916";
import _require from "../quill_composer/838916";
import { setupLazyComponentFactory } from "../905/992467";
let $$i1 = setupLazyComponentFactory("lazy_quill_editor", {
  isCodesplit: !0,
  ComponentFactory: async () => ({
    default: (await Promise.all([]).then(_require)).QuillEditor
  })
});
let $$a0 = setupLazyComponentFactory("lazy_readonly_quill_editor", {
  isCodesplit: !0,
  ComponentFactory: async () => ({
    default: (await Promise.all([]).then(_require2)).ReadOnlyQuillEditor
  })
});
export const R = $$a0;
export const X = $$i1;