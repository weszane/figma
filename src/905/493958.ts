import { cZ, OS } from "src/905/113138";
import { lH } from "src/905/316062";
import { W } from "src/905/522628";
import { E } from "src/905/118283";
let $$o0 = new cZ("FOLDER").binding;
let $$l1 = (e, t) => new OS(e, "folders", $$o0, lH, async e => (await W.getFolder({
  folderId: e
})).data.meta, E(t(), "folder"));
export const N = $$o0;
export const Y = $$l1;
