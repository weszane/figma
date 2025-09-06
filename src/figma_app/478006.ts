import { atom, useSetAtom } from 'jotai'
import { useEffect } from 'react'

let $$a0 = atom({
  isShowing: !1,
  isFigjamDLTBanner: !1,
})
let $$s2 = atom((e) => {
  let t = e($$a0)
  return t.isShowing && t.bannerType === 'view_only'
})
export function $$o1({
  isFigjamDLTBanner: e,
  bannerType: t,
}) {
  let r = useSetAtom($$a0)
  useEffect(() => (r({
    isShowing: !0,
    isFigjamDLTBanner: e,
    bannerType: t,
  }), () => {
    r({
      isShowing: !1,
      isFigjamDLTBanner: !1,
      bannerType: void 0,
    })
  }), [r, e, t])
}
export const Gr = $$a0
export const h8 = $$o1
export const n2 = $$s2
