import { forwardRef } from 'react'
import { jsx } from 'react/jsx-runtime'
import { Button } from '../905/521428'

export let BannerButton = forwardRef((e, t) => jsx(Button, {
  ref: t,
  variant: 'secondary',
  ...e,
}))
BannerButton.displayName = 'Banner.Button'
export const $ = BannerButton
