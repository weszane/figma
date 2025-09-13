import { ServiceCategories as _$$e } from "../905/165054";
import { reportError } from "../905/11";
import { Dq } from "../905/316062";
import { SortingCriteria } from "../figma_app/162807";
import { SortField, SortType } from "../figma_app/756995";
export function $$l0(e) {
  switch (e) {
    case SortField.ACCESSED_AT:
    case SortField.CREATED_AT:
    case SortField.TOUCHED_AT:
    case SortField.TRASHED_AT:
    case SortField.SHARED_AT:
    case SortingCriteria.CREATED_AT:
    case SortingCriteria.TOUCHED_AT:
    case SortingCriteria.UPDATED_AT:
    case SortingCriteria.RECENCY:
    case Dq.LAST_MODIFIED:
    case Dq.SHARED_AT:
      return SortType.TIME;
    case SortField.NAME:
    case SortField.PROJECT_NAME:
    case SortingCriteria.NAME:
    case SortingCriteria.AUTHOR_NAME:
    case SortingCriteria.EMAIL:
    case Dq.NAME:
    case Dq.OWNER:
    case Dq.TEAM:
      return SortType.ALPHABETICAL;
    case SortingCriteria.INSTALL_COUNT:
    case SortingCriteria.MEMBER_COUNT:
    case SortingCriteria.RELEVANCY:
    case SortingCriteria.POPULARITY:
      return SortType.OTHER;
    default:
      let t = Error(`Uncaught sort key: ${e}`);
      reportError(_$$e.WAYFINDING, t);
      return SortType.OTHER;
  }
}
export const E = $$l0;