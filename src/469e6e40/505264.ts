import { jsx } from "react/jsx-runtime";
import { PureComponent } from "react";
import { copyEmailsThunk } from "../figma_app/11182";
import { az } from "../figma_app/805373";
import { A } from "../svg/213689";
export let $$o0 = (e => {
  var t;
  (t = class extends PureComponent {
    constructor() {
      super(...arguments);
      this.onCopyEmailToClipboard = e => {
        e.stopPropagation();
        this.props.entity.email && this.props.dispatch(copyEmailsThunk({
          emailList: [this.props.entity.email]
        }));
      };
    }
    render() {
      return jsx(e, {
        ...this.props,
        onEmailClick: this.onCopyEmailToClipboard,
        emailLinkIcon: A,
        includeUserEmailAddress: !0
      });
    }
  }).displayName = "Copyable";
  return t;
})(az);
export const r = $$o0;