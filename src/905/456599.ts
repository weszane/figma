let n;
let r;
export function $$a0() {
  if (!n) throw Error("Call setCLIPProvider before trying to use CLIP capabilities");
  return n;
}
export function $$s1() {
  if (!r) throw Error("Call setImagesS3Bucket before trying to use S3 bucket");
  return r;
}
export const CA = $$a0;
export const Jq = $$s1;