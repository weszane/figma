import { VV } from "../905/623179";
import { XHR } from "../905/910117";
import { S } from "../figma_app/787550";
export async function $$s0(e, t, i) {
  for (let r of e) try {
    let e = await S.getVideosUpload({
      fileKey: t,
      sha1: r.sha1
    });
    if (i?.hasCanceled()) throw Error("Import canceled.");
    let s = await VV(e.data.meta.url, e.data.meta.fields, r, "video/mp4");
    await o(r.sha1, t, s, e.data.meta.blob_upload_commit_key || "");
  } catch (e) {
    if (409 === e.status) await o(r.sha1, t, "", "");else if (e.data?.message) throw Error(e.data.message);else throw e;
  }
}
async function o(e, t, i, n) {
  await XHR.post(`/api/upnode/video?purpose=canvas&sha1=${e}&uploadPath=${i}&fileKey=${t}&blobUploadCommitKey=${n}`);
}
export const C = $$s0;