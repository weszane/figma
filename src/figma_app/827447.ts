import { renderI18nText } from "../905/303541"
import { Et } from "../figma_app/397267"

var $$a7 = (e => (e.MINUTES = "minutes", e.HOURS = "hours", e.DAYS = "days", e))($$a7 || {})
let $$s1 = 60
let $$o6 = 3600
let $$l0 = 86400
let $$d2 = "on-idle-timeout-logged-in-ipc-key"
export function $$c5(e) {
  return e < $$o6 ? [e / 60, "minutes"] : e < $$l0 ? [e / 3600, "hours"] : e % $$l0 == 0 ? [e / 86400, "days"] : [e / 3600, "hours"]
}
export function $$u3(e, t) {
  let r = {
    duration: t,
  }
  switch (e) {
    case "minutes":
      return renderI18nText("settings_tab.idle_session_timeout.time.minutes", r)
    case "hours":
      return renderI18nText("settings_tab.idle_session_timeout.time.hours", r)
    case "days":
      return renderI18nText("settings_tab.idle_session_timeout.time.days", r)
  }
}
export function $$p4(e) {
  return !!Et(e) && e < 12 * $$o6
}
export const N_ = $$l0
export const Rc = $$s1
export const Rg = $$d2
export const YA = $$u3
export const hM = $$p4
export const qr = $$c5
export const r = $$o6
export const vS = $$a7
