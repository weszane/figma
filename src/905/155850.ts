import { cZ, OS } from "../905/113138";
import { fileEntityModel } from "../905/806985";
import { S } from "../figma_app/787550";
import { E } from "../905/118283";
let $$o1 = new cZ("FILE").binding;
let $$l0 = (e, t) => new OS(e, "fileByKey", $$o1, fileEntityModel, async e => (await S.getMeta({
  fileKey: e
})).data.meta, E(t(), "file"));
export const M = $$l0;
export const N = $$o1;