let $$n1 = "figma.code.renderComponentCompleted";
let r = "CodeDebuggingHelpers";
export function $$a0(e) {
  window[r] || (window[r] = {});
  window[r].updateCodeForTest = t => {
    let i = e?.state.update({
      changes: {
        from: 0,
        to: e?.state.doc.length,
        insert: t
      }
    });
    i && e?.dispatch(i);
  };
}
export const A9 = $$a0;
export const U5 = $$n1;