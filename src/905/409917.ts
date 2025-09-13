import { ServiceCategories as _$$e } from "../905/165054";
import { reportError } from "../905/11";
import { Dq } from "../905/316062";
import { j9 } from "../figma_app/162807";
import { SortField, SortType } from "../figma_app/756995";
export function $$l0(e) {
  switch (e) {
    case SortField.ACCESSED_AT:
    case SortField.CREATED_AT:
    case SortField.TOUCHED_AT:
    case SortField.TRASHED_AT:
    case SortField.SHARED_AT:
    case j9.CREATED_AT:
    case j9.TOUCHED_AT:
    case j9.UPDATED_AT:
    case j9.RECENCY:
    case Dq.LAST_MODIFIED:
    case Dq.SHARED_AT:
      return SortType.TIME;
    case SortField.NAME:
    case SortField.PROJECT_NAME:
    case j9.NAME:
    case j9.AUTHOR_NAME:
    case j9.EMAIL:
    case Dq.NAME:
    case Dq.OWNER:
    case Dq.TEAM:
      return SortType.ALPHABETICAL;
    case j9.INSTALL_COUNT:
    case j9.MEMBER_COUNT:
    case j9.RELEVANCY:
    case j9.POPULARITY:
      return SortType.OTHER;
    default:
      let t = Error(`Uncaught sort key: ${e}`);
      reportError(_$$e.WAYFINDING, t);
      return SortType.OTHER;
  }
}
export const E = $$l0;