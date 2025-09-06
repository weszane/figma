import { jsx, jsxs } from "react/jsx-runtime";
import { PureComponent } from "react";
import { JU, tB, tM, qM, vd } from "../figma_app/637027";
import { getI18nString } from "../905/303541";
import { Lo } from "../905/156213";
import { OJ } from "../905/519092";
import { Vw, Pf, kv, aV } from "../905/893704";
function c(e) {
  return jsx("div", {
    style: {
      height: e.height
    }
  });
}
export function $$u1(e) {
  let t = e.onHide || (() => {
    e.dispatch(Lo());
  });
  return jsxs(OJ, {
    ...e,
    isCloseHidden: !0,
    children: [jsx(c, {
      height: 18
    }), e.children && jsxs("div", {
      className: Vw,
      children: [e.children, jsx(c, {
        height: 18
      })]
    }), jsx($$p0, {
      onConfirm: e.onConfirm,
      onCancel: t,
      confirmButtonText: e.buttonText,
      hideCancelButton: e.hideCancelButton,
      makeButtonAppearNegative: e.makeButtonAppearNegative,
      children: e.checkboxText
    })]
  });
}
export class $$p0 extends PureComponent {
  constructor(e) {
    super(e);
    this.onCheck = () => {
      this.setState({
        checked: !this.state.checked
      });
    };
    this.state = {
      checked: !1
    };
  }
  render() {
    return jsxs("div", {
      className: this.props.className,
      children: [jsxs(JU, {
        className: Pf,
        children: [jsx(tB, {
          checked: this.state.checked,
          onChange: this.onCheck,
          className: kv
        }), this.props.children]
      }), jsxs("div", {
        className: aV,
        children: [!this.props.hideCancelButton && jsx(tM, {
          onClick: this.props.onCancel,
          children: this.props.cancelButtonText || getI18nString("modal.cancel")
        }), this.props.makeButtonAppearNegative ? jsx(qM, {
          disabled: !this.state.checked,
          onClick: this.props.onConfirm,
          children: this.props.confirmButtonText || getI18nString("modal.confirm")
        }) : jsx(vd, {
          disabled: !this.state.checked,
          onClick: this.props.onConfirm,
          children: this.props.confirmButtonText || getI18nString("modal.confirm")
        })]
      })]
    });
  }
}
$$p0.displayName = "CheckboxConfirmButtons";
export const d = $$p0;
export const l = $$u1;