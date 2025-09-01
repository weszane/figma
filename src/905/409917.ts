import { ServiceCategories as _$$e } from "../905/165054";
import { $D } from "../905/11";
import { Dq } from "../905/316062";
import { j9 } from "../figma_app/162807";
import { C0, rR } from "../figma_app/756995";
export function $$l0(e) {
  switch (e) {
    case C0.ACCESSED_AT:
    case C0.CREATED_AT:
    case C0.TOUCHED_AT:
    case C0.TRASHED_AT:
    case C0.SHARED_AT:
    case j9.CREATED_AT:
    case j9.TOUCHED_AT:
    case j9.UPDATED_AT:
    case j9.RECENCY:
    case Dq.LAST_MODIFIED:
    case Dq.SHARED_AT:
      return rR.TIME;
    case C0.NAME:
    case C0.PROJECT_NAME:
    case j9.NAME:
    case j9.AUTHOR_NAME:
    case j9.EMAIL:
    case Dq.NAME:
    case Dq.OWNER:
    case Dq.TEAM:
      return rR.ALPHABETICAL;
    case j9.INSTALL_COUNT:
    case j9.MEMBER_COUNT:
    case j9.RELEVANCY:
    case j9.POPULARITY:
      return rR.OTHER;
    default:
      let t = Error(`Uncaught sort key: ${e}`);
      $D(_$$e.WAYFINDING, t);
      return rR.OTHER;
  }
}
export const E = $$l0;