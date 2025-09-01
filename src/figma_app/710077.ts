export function $$n0(e) {
  let t;
  e?.isCodeFile ? t = e : e?.isCodeComponent ? t = e.exportedFromCodeFile : e?.isCodeInstance && (t = e.backingCodeComponent?.exportedFromCodeFile);
  t && t.forceRerenderCodeNodePreview();
}
export const J = $$n0;