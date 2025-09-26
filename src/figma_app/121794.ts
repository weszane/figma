import { PureComponent } from 'react'
import { jsx, jsxs } from 'react/jsx-runtime'
import { popModalStack } from '../905/156213'
import { getI18nString } from '../905/303541'
import { HeaderModal } from '../905/519092'
import { aV, kv, Pf, Vw } from '../905/893704'
import { ButtonBasePrimaryTracked, ButtonNegativeTracked, ButtonSecondaryTracked, createLabel, FocusCheckbox } from '../figma_app/637027'

function c(e) {
  return jsx('div', {
    style: {
      height: e.height,
    },
  })
}
export function $$u1(e) {
  let t = e.onHide || (() => {
    e.dispatch(popModalStack())
  })
  return jsxs(HeaderModal, {
    ...e,
    isCloseHidden: !0,
    children: [jsx(c, {
      height: 18,
    }), e.children && jsxs('div', {
      className: Vw,
      children: [e.children, jsx(c, {
        height: 18,
      })],
    }), jsx($$p0, {
      onConfirm: e.onConfirm,
      onCancel: t,
      confirmButtonText: e.buttonText,
      hideCancelButton: e.hideCancelButton,
      makeButtonAppearNegative: e.makeButtonAppearNegative,
      children: e.checkboxText,
    })],
  })
}
export class $$p0 extends PureComponent {
  constructor(e) {
    super(e)
    this.onCheck = () => {
      this.setState({
        checked: !this.state.checked,
      })
    }
    this.state = {
      checked: !1,
    }
  }

  render() {
    return jsxs('div', {
      className: this.props.className,
      children: [jsxs(createLabel, {
        className: Pf,
        children: [jsx(FocusCheckbox, {
          checked: this.state.checked,
          onChange: this.onCheck,
          className: kv,
        }), this.props.children],
      }), jsxs('div', {
        className: aV,
        children: [!this.props.hideCancelButton && jsx(ButtonSecondaryTracked, {
          onClick: this.props.onCancel,
          children: this.props.cancelButtonText || getI18nString('modal.cancel'),
        }), this.props.makeButtonAppearNegative
          ? jsx(ButtonNegativeTracked, {
              disabled: !this.state.checked,
              onClick: this.props.onConfirm,
              children: this.props.confirmButtonText || getI18nString('modal.confirm'),
            })
          : jsx(ButtonBasePrimaryTracked, {
              disabled: !this.state.checked,
              onClick: this.props.onConfirm,
              children: this.props.confirmButtonText || getI18nString('modal.confirm'),
            })],
      })],
    })
  }
}
$$p0.displayName = 'CheckboxConfirmButtons'
export const d = $$p0
export const l = $$u1
