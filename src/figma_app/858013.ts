import a from 'classnames'
import { Component, PureComponent } from 'react'
import { jsx } from 'react/jsx-runtime'
import { B } from '../905/714743'
import { A as _$$A } from '../1617/62299'
import { A } from '../1617/976727'
import { $g, F, h, K_, Mn, OZ, PG, Pu, q5, sl, uz, WL, yM, zr } from '../figma_app/498055'

let s = a
export class $$u4 extends Component {
  render() {
    let e = PG
    let t = q5
    switch (this.props.size) {
      case 'small':
        e = PG
        t = q5
        break
      case 'medium':
        e = $g
        t = Mn
        break
      case 'large':
        e = Pu
        t = OZ
        break
      case 'custom':
        e = null
        t = null
    }
    return jsx('span', {
      'className': s()(zr, e, this.props.shouldMatchTextColor ? K_ : h, this.props.className || ''),
      'data-testid': this.props.testId,
      'children': this.props.cssBacked
        ? jsx('span', {
            className: s()(WL, t),
          })
        : this.props.imageBacked
          ? jsx('img', {
              alt: 'Loading',
              className: yM,
              src: `data:image/svg+xml;base64,${btoa(A)}`,
            })
          : jsx(B, {
              svg: this.props.altIcon || A,
              className: yM,
              autosize: !this.props.altIcon,
              dataTestId: 'loading-spinner',
            }),
    })
  }
}
export function $$p6(e) {
  return jsx('div', {
    className: F,
    children: jsx($$u4, {
      ...e,
    }),
  })
}
export function $$_5() {
  return jsx('div', {
    className: F,
    children: jsx($$u4, {
      size: 'large',
    }),
  })
}
export function $$h3(e) {
  return jsx($$u4, {
    imageBacked: !0,
    ...e,
  })
}
export function $$m0(e) {
  return jsx($$u4, {
    cssBacked: !0,
    ...e,
  })
}
export function $$g1() {
  return jsx('div', {
    className: sl,
    children: jsx($$u4, {}),
  })
}
$$u4.displayName = 'LoadingSpinner'
export class $$f2 extends PureComponent {
  render() {
    return jsx('span', {
      className: `${uz} ${this.props.className || ''}`,
      children: jsx(B, {
        svg: _$$A,
        className: yM,
      }),
    })
  }
}
$$f2.displayName = 'BlueLoadingSpinner'
export const $y = $$m0
export const Z_ = $$g1
export const a_ = $$f2
export const dW = $$h3
export const kt = $$u4
export const nt = $$_5
export const qc = $$p6
