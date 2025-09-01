import { jsxs, jsx } from "react/jsx-runtime";
import { PureComponent } from "react";
import { KF } from "../figma_app/465776";
export class $$s0 extends PureComponent {
  render() {
    KF(Number.isInteger(this.props.number), "breadcrumb step must be an integer");
    KF(this.props.number >= 1 && this.props.number <= 20, "breadcrumb step is out of expected range");
    let e = "";
    this.props.selected ? (e += "step_breadcrumb--stepSelected--aaq-4 step_breadcrumb--step--h0dTR", this.props.lightText && (e += " step_breadcrumb--whiteText--TeOgy")) : (e += "step_breadcrumb--step--h0dTR", this.props.lightText && (e += " step_breadcrumb--greyText--Xid8Q"));
    this.props.canClick && (this.props.lightText ? e += " step_breadcrumb--stepClickableLight--e7tX-" : e += " step_breadcrumb--stepClickable--t001q step_breadcrumb--step--h0dTR step_breadcrumb--stepClickable-on-hover---oTm4");
    return jsxs("div", {
      "data-testid": this.props.number + this.props.text,
      className: e,
      onClick: () => this.props.canClick && this.props.onClick && this.props.onClick(),
      children: [jsx("span", {
        className: "step_breadcrumb--stepNumber--0A5tz",
        children: String.fromCharCode(9311 + this.props.number)
      }), this.props.text]
    });
  }
}
$$s0.displayName = "StepBreadcrumb";
class i extends PureComponent {
  render() {
    return jsx("div", {
      className: "step_breadcrumb--stepBreadcrumbSpacer--baFNr"
    });
  }
}
i.displayName = "StepBreadcrumbSpacer";
export class $$c2 extends PureComponent {
  render() {
    return jsx("div", {
      className: `step_breadcrumb--stepTitle--kyggE text--fontPos22--4H4Fc text--_fontBase--QdLsd ${this.props.className || ""}`,
      children: this.props.children
    });
  }
}
$$c2.displayName = "StepTitle";
export class $$d1 extends PureComponent {
  render() {
    return jsx("div", {
      className: "step_breadcrumb--stepInstructions--gjSRc text--fontPos14--OL9Hp text--_fontBase--QdLsd",
      ...this.props
    });
  }
}
$$d1.displayName = "StepInstructions";
export const On = $$s0;
export const Kh = $$d1;
export const JR = $$c2;