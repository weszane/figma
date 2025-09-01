export async function $$n0({
  userMessage: e,
  getSitesPreviewPageSnapshot: t
}) {
  try {
    let r = t({
      maxSnapshotWidth: 1568,
      maxSnapshotHeight: 1568
    });
    let n = null;
    let i = new Promise(e => {
      n = setTimeout(() => e(null), 5e3);
    });
    let a = await Promise.race([r, i]);
    if (n && clearTimeout(n), a?.png) {
      let t = new FileReader();
      let r = await new Promise(e => {
        t.onloadend = () => e(t.result);
        t.readAsDataURL(a.png);
      });
      e.nodeThumbnailBase64 = r;
    } else console.warn("[attachPreviewImage] Snapshot timed out; continuing without image.");
  } catch (e) {
    console.warn("[attachPreviewImage] Snapshot failed:", e);
  }
}
export const L = $$n0;