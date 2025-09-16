import { forwardRef } from 'react'
import { jsx } from 'react/jsx-runtime'
import { b } from '../905/333398'

export let BannerFullWidth = forwardRef((e, t) => jsx(b, {
  ref: t,
  type: 'full-width',
  ...e,
}))
BannerFullWidth.displayName = 'Banner.FullWidth'
export let BannerInline = forwardRef((e, t) => jsx(b, {
  ref: t,
  type: 'inline',
  ...e,
}))
BannerInline.displayName = 'Banner.Inline'
export let BannerInformational = forwardRef((e, t) => jsx(b, {
  ref: t,
  type: 'informational',
  ...e,
}))
BannerInformational.displayName = 'Banner.Informational'
export let BannerInsetModal = forwardRef((e, t) => jsx(b, {
  ref: t,
  type: 'inset-modal',
  ...e,
}))
BannerInsetModal.displayName = 'Banner.InsetModal'
export let BannerInset = forwardRef((e, t) => jsx(b, {
  ref: t,
  type: 'inset',
  ...e,
}))
BannerInset.displayName = 'Banner.Inset'
export const $y = BannerInsetModal
export const Cs = BannerFullWidth
export const Yy = BannerInset
export const aq = BannerInformational
export const cV = BannerInline
