import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../905/372672'
import { getFeatureFlags } from '../905/601108'
import { FileCanAccessFullDevMode, FileCanAccessFullDevModeOrgPlus, FileCanExport, FileCanUseDevModeDemoFile, FileDevModeTrialRequestPending, FileIsEligibleForDevModeTrial, FileIsInDevModeTrial } from '../figma_app/43951'
import { getInitialOptions } from '../figma_app/169182'
import { Rs } from '../figma_app/288654'
import { tS } from '../figma_app/516028'

let $$u5 = (e) => {
  return e.openFile?.canAccessFullDevMode ?? !0
}
let $$p0 = (e) => {
  return e.openFile?.canAccessDevModeEntryPoint ?? !0
}
export function $$_2() {
  return useSelector($$u5)
}
export function $$h1() {
  return useSelector($$p0)
}
export function $$m3() {
  let e = selectCurrentUser()
  let t = tS()
  let r = t === getInitialOptions().dev_mode_demo_file_key
  return !!getFeatureFlags().logged_out_dev_mode_demo_file && !!t && !e && r
}
export function $$g6() {
  let e = tS()
  let t = Rs(FileCanUseDevModeDemoFile, {
    key: e || '',
  }, {
    enabled: !!e,
  })
  return t.data?.file && t.data.file.status !== 'error' ? t.data?.file?.data?.hasPermission ?? !1 : e === getInitialOptions().dev_mode_demo_file_key
}
export function $$f4(e) {
  Rs(FileCanAccessFullDevMode, {
    key: e,
  })
  Rs(FileIsEligibleForDevModeTrial, {
    key: e,
  })
  Rs(FileIsInDevModeTrial, {
    key: e,
  })
  Rs(FileDevModeTrialRequestPending, {
    key: e,
  })
  Rs(FileCanAccessFullDevModeOrgPlus, {
    key: e,
  })
  Rs(FileCanExport, {
    key: e,
  })
}
export const Nc = $$p0
export const U4 = $$h1
export const _I = $$_2
export const l7 = $$m3
export const lF = $$f4
export const tn = $$u5
export const xo = $$g6
