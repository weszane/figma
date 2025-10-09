import { canRunPlugin } from "../figma_app/300692"

let i = null
export function $$a0(e) {
  i = e
}
export function $$s1() {
  return i
}
export function $$o2() {
  i && !canRunPlugin({
    plugin: i.plugin,
  }).canRun && (i = null)
}
export const C3 = $$a0
export const SH = $$s1
export const gN = $$o2
