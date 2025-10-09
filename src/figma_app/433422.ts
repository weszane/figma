import { jsx } from "react/jsx-runtime"
import { reportError } from "../905/11"
import { ServiceCategories } from "../905/165054"
import { getI18nString } from "../905/303541"
import { collaboratorSet, viewCollaboratorSet } from "../905/332483"
import { ProductAccessTypeEnum, ViewAccessTypeEnum } from "../905/513035"
import { isNotNullish } from "../figma_app/95419"
import { FPlanAccessType, FUpgradeReasonType } from "../figma_app/191312"
import { getCollaboratorSet } from "../figma_app/217457"
import { bv } from "../figma_app/421401"
import { JT, nf, V5 } from "../figma_app/847597"

export function $$h4(e) {
  let {
    team_role,
    team_user,
  } = e
  let n = team_user?.active_seat_type?.key ?? null
  let i = team_role?.pending ? team_role?.invite : null
  let a = i?.billableProductKey ? getCollaboratorSet(i.billableProductKey) : null
  return team_user
    ? n
      ? {
          seatTypeKey: n,
          isPendingSeat: !1,
        }
      : a
        ? {
            seatTypeKey: a,
            isPendingSeat: !0,
          }
        : {
            seatTypeKey: null,
            isPendingSeat: !1,
          }
    : {
        seatTypeKey: a ?? null,
        isPendingSeat: !0,
      }
}
function m(e) {
  let {
    isPendingSeat,
    seatTypeKey,
  } = $$h4(e)
  return isPendingSeat ? null : seatTypeKey || ViewAccessTypeEnum.VIEW
}
export function $$g5(e, t) {
  return !t || t === m(e)
}
export function $$f1(e, t) {
  if (!t.seatTypeKey) {
    reportError(ServiceCategories.BILLING_EXPERIENCE, new Error("tried to update seat filter counts but they were not initialized"))
    return
  }
  let r = m(e)
  r && isNotNullish(t.seatTypeKey[r]) && (t.seatTypeKey[r] += 1)
}
export function $$E8() {
  return {
    seatTypeKey: viewCollaboratorSet.dict(() => 0),
  }
}
export function $$y7(e, t) {
  let r = collaboratorSet.dict(t => e[t])
  Object.values(r).includes(FPlanAccessType.RESTRICTED) && reportError(ServiceCategories.BILLING_EXPERIENCE, new Error("tried to set restricted paid status for seat type"), {
    extra: {
      paidStatuses: e,
    },
  })
  let n = Object.fromEntries(Object.entries(r).filter(([e, t]) => t === FPlanAccessType.FULL))
  let i = Object.keys(n).length
  let o = i > 0
  let l = Object.keys(Object.fromEntries(Object.entries(r).filter(([e, t]) => t === FPlanAccessType.STARTER))).length > 0
  if (i > 1) {
    reportError(ServiceCategories.BILLING_EXPERIENCE, new Error("we tried to upgrade multiple seat types at once, this is unsupported."), {
      extra: {
        paidStatuses: e,
      },
    })
    return {}
  }
  if (o && l) {
    reportError(ServiceCategories.BILLING_EXPERIENCE, new Error("we tried to upgrade and downgrade seat types at the same time, this is unsupported."), {
      extra: {
        paidStatuses: e,
      },
    })
    return {}
  }
  if (o) {
    let e = t[Object.keys(n)[0]]
    return e
      ? {
          active_seat_type: e,
        }
      : {}
  }
  return l
    ? {
        active_seat_type: null,
      }
    : {}
}
let $$b3 = [ProductAccessTypeEnum.EXPERT, ProductAccessTypeEnum.DEVELOPER, ProductAccessTypeEnum.COLLABORATOR, ViewAccessTypeEnum.VIEW]
let $$T6 = [FUpgradeReasonType.SCIM]
export function $$I0(e) {
  return jsx(bv, {
    label: getI18nString("members_table.menu_bar_filter.role.seat_rename"),
    dispatch: e.dispatch,
    dropdownShown: e.dropdownShown,
    dropdownType: "FILTER_SEAT_TYPE_DROPDOWN",
    values: $$b3,
    selectedValue: e.selectedValue,
    getCount: e.getCount,
    getDisplayText: JT,
    updateFilter: e.updateFilter,
  })
}
export function $$S2(e) {
  return jsx(bv, {
    label: nf,
    dispatch: e.dispatch,
    dropdownShown: e.dropdownShown,
    dropdownType: "FILTER_SEAT_CHANGES_DROPDOWN",
    values: $$T6,
    selectedValue: e.selectedValue,
    getDisplayText: V5,
    updateFilter: e.updateFilter,
  })
}
export const IM = $$I0
export const Ji = $$f1
export const PS = $$S2
export const TF = $$b3
export const Zq = $$h4
export const b_ = $$g5
export const iA = $$T6
export const iO = $$y7
export const sH = $$E8
