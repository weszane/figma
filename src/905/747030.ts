import { sG } from "../905/686934";
import { FFileType } from "../figma_app/191312";
import { ke } from "../905/58274";
import { cc, UN, tZ } from "../905/573265";
export function $$o0(e) {
  return e === FFileType.SLIDES && ke ? ke() : e === FFileType.COOPER && sG ? sG() : {
    onPublishSuccess: cc,
    onPublishProgress: UN,
    onPublishError: tZ
  };
}
export const u = $$o0;