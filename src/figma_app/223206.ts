import { createValidatedLocalStorageAtom, tx, createRemovableAtomFamily, atom } from "../figma_app/27355";
import { z } from "../905/239603";
import { generateSessionId } from "../figma_app/925970";
let s = z.object({
  key: z.string()
});
let o = z.object({
  fileKey: z.string().min(1),
  fileVersion: z.number(),
  pageGuid: z.string().min(1),
  selectedNodeIds: z.array(z.string()).nonempty()
});
let l = z.object({
  fileKey: z.string().min(1),
  fileVersion: z.number(),
  pageGuid: z.string().min(1),
  selectedNodeId: z.string()
});
let d = z.object({
  showOrgTemplateView: z.boolean()
});
let c = z.object({
  figjamFileKey: z.string().min(1),
  selectedGuids: z.array(z.string()).optional(),
  pageGuids: z.array(z.string()).optional()
});
let u = z.object({
  fileKey: z.string().min(1),
  fileVersion: z.number(),
  pageGuid: z.string().min(1),
  selectedNodeId: z.string(),
  exceedsMakePasteThreshold: z.boolean()
});
let p = z.object({
  fileKey: z.string().min(1),
  fileVersion: z.number(),
  sourceNodeIds: z.array(z.string()).nonempty()
});
let _ = z.discriminatedUnion("type", [s.extend({
  type: z.literal("copy-to-sites-from-design"),
  data: l
}), s.extend({
  type: z.literal("design-copy-to-slides"),
  data: o
}), s.extend({
  type: z.literal("figjam-create-slides-outline"),
  data: c
}), s.extend({
  type: z.literal("cooper-org-template-picker-view"),
  data: d
}), s.extend({
  type: z.literal("send-to-make-from-design"),
  data: u
}), s.extend({
  type: z.literal("send-to-buzz-from-design"),
  data: p
})]);
let h = createValidatedLocalStorageAtom("new-file-data", null, _.nullable());
let $$m0 = tx(null);
let g = createRemovableAtomFamily(e => atom(t => {
  let r = t($$m0);
  let n = t(h);
  return n && n.key === r && n.type === e ? n.data : null;
}, (t, r, n) => {
  let i = generateSessionId();
  r(h, {
    data: n,
    type: e,
    key: i
  });
  return i;
}));
let $$f6 = g("design-copy-to-slides");
let $$E5 = g("figjam-create-slides-outline");
let $$y4 = g("copy-to-sites-from-design");
let $$b3 = g("cooper-org-template-picker-view");
let $$T1 = g("send-to-make-from-design");
let $$I2 = g("send-to-buzz-from-design");
export const $K = $$m0;
export const DM = $$T1;
export const Uf = $$I2;
export const bW = $$b3;
export const me = $$y4;
export const s5 = $$E5;
export const u2 = $$f6;